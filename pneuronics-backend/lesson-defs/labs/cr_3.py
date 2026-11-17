"""Teaching implementation (our own): checkpoints and rollback, Part 3 - production concerns: split-brain execution with and without fencing at the target, a lease race between eight threads, a SAGA with durable per-step state, a compensation that is retried with a stable key against a random key, a failure-injection matrix against an idempotent and a non-idempotent provider, history validation and a hash-chained audit log.
Everything is local: SQLite files in a temporary directory, a simulated clock and a dictionary-like provider; nothing real is changed."""
import contextlib
import hashlib
import json
import sqlite3
import tempfile
import threading
import uuid
from pathlib import Path


class SimulatedCrash(Exception):
    pass


class Db:
    def __init__(self, path):
        self.path = str(path)
        with self.conn() as db:
            db.executescript("""
            CREATE TABLE IF NOT EXISTS leases (workflow_id TEXT PRIMARY KEY, worker_id TEXT, token INTEGER NOT NULL DEFAULT 0, expires_at REAL NOT NULL DEFAULT 0);
            CREATE TABLE IF NOT EXISTS target (resource TEXT PRIMARY KEY, value TEXT, highest_token INTEGER NOT NULL);
            CREATE TABLE IF NOT EXISTS effects (key TEXT PRIMARY KEY, kind TEXT NOT NULL);
            CREATE TABLE IF NOT EXISTS saga_steps (workflow_id TEXT NOT NULL, step_no INTEGER NOT NULL, name TEXT NOT NULL, fwd_key TEXT NOT NULL, comp_key TEXT NOT NULL,
              fwd_status TEXT NOT NULL, comp_status TEXT NOT NULL, PRIMARY KEY (workflow_id, step_no));
            """)

    @contextlib.contextmanager
    def conn(self):
        c = sqlite3.connect(self.path, timeout=10, isolation_level=None)
        try:
            yield c
        finally:
            c.close()

    def acquire(self, wid, worker, now, duration=30):
        with self.conn() as db:
            db.execute("BEGIN IMMEDIATE")
            row = db.execute("SELECT worker_id, token, expires_at FROM leases WHERE workflow_id=?", (wid,)).fetchone()
            if row is None:
                db.execute("INSERT INTO leases VALUES (?,?,1,?)", (wid, worker, now + duration))
                db.execute("COMMIT")
                return 1
            if row[0] is not None and row[2] > now:
                db.execute("ROLLBACK")
                return None
            token = row[1] + 1
            db.execute("UPDATE leases SET worker_id=?, token=?, expires_at=? WHERE workflow_id=?", (worker, token, now + duration, wid))
            db.execute("COMMIT")
            return token

    def renew(self, wid, worker, token, now, duration=30):
        with self.conn() as db:
            return db.execute("UPDATE leases SET expires_at=? WHERE workflow_id=? AND worker_id=? AND token=? AND expires_at>?", (now + duration, wid, worker, token, now)).rowcount == 1

    def release(self, wid, worker, token):
        with self.conn() as db:
            return db.execute("UPDATE leases SET worker_id=NULL, expires_at=0 WHERE workflow_id=? AND worker_id=? AND token=?", (wid, worker, token)).rowcount == 1

    def write_unfenced(self, resource, value):
        with self.conn() as db:
            db.execute("INSERT INTO target VALUES (?,?,0) ON CONFLICT(resource) DO UPDATE SET value=excluded.value", (resource, value))

    def write_fenced(self, resource, token, value):
        with self.conn() as db:
            db.execute("INSERT OR IGNORE INTO target VALUES (?, NULL, 0)", (resource,))
            return db.execute("UPDATE target SET value=?, highest_token=? WHERE resource=? AND highest_token<=?", (value, token, resource, token)).rowcount == 1

    def target_value(self, resource):
        with self.conn() as db:
            return db.execute("SELECT value FROM target WHERE resource=?", (resource,)).fetchone()[0]

    def effect(self, key, kind, idempotent=True):
        with self.conn() as db:
            if idempotent:
                db.execute("INSERT OR IGNORE INTO effects VALUES (?,?)", (key, kind))
            else:
                db.execute("INSERT INTO effects VALUES (?,?)", (key + "#" + uuid.uuid4().hex[:6], kind))

    def effect_count(self, kind):
        with self.conn() as db:
            return db.execute("SELECT COUNT(*) FROM effects WHERE kind=?", (kind,)).fetchone()[0]


class Saga:
    def __init__(self, db, wid, steps):
        self.db, self.wid, self.steps = db, wid, steps
        with db.conn() as c:
            for i, (name, _, _) in enumerate(steps):
                c.execute("INSERT OR IGNORE INTO saga_steps VALUES (?,?,?,?,?,'NOT_STARTED','NOT_STARTED')", (wid, i, name, f"{wid}-{name}", f"{wid}-{name}-undo"))

    def status(self):
        with self.db.conn() as c:
            return c.execute("SELECT name, fwd_status, comp_status FROM saga_steps WHERE workflow_id=? ORDER BY step_no", (self.wid,)).fetchall()

    def _set(self, i, col, val):
        with self.db.conn() as c:
            c.execute(f"UPDATE saga_steps SET {col}=? WHERE workflow_id=? AND step_no=?", (val, self.wid, i))

    def run(self, crash_in_compensation=None, random_comp_keys=False):
        log = []
        done = [i for i, s in enumerate(self.status()) if s[1] == "EXECUTED"]
        failed = False
        for i, (name, fwd, _) in enumerate(self.steps):
            if i in done:
                continue
            try:
                fwd(self.db, f"{self.wid}-{name}")
                self._set(i, "fwd_status", "EXECUTED")
                log.append(f"execute {name}")
            except Exception as e:
                self._set(i, "fwd_status", "FAILED")
                log.append(f"forward failure at {name}: {e}")
                failed = True
                break
        if failed:
            for i in reversed([i for i, s in enumerate(self.status()) if s[1] == "EXECUTED" and s[2] != "COMPENSATED"]):
                name, _, comp = self.steps[i]
                key = f"{self.wid}-{name}-undo"
                if random_comp_keys:
                    key += "-" + uuid.uuid4().hex[:6]
                comp(self.db, key)
                if crash_in_compensation == name:
                    raise SimulatedCrash(f"crash after compensating {name}, before recording it")
                self._set(i, "comp_status", "COMPENSATED")
                log.append(f"compensate {name}")
            return "COMPENSATED", log
        return "COMMITTED", log


def fwd_inventory(db, key):
    db.effect(key, "reserve")


def comp_inventory(db, key):
    db.effect(key, "release")


def fwd_payment(db, key):
    db.effect(key, "charge")


def comp_payment(db, key):
    db.effect(key, "refund")


def fwd_shipping(db, key):
    raise RuntimeError("Shipping provider unavailable")


def comp_none(db, key):
    pass


def make_steps():
    return [("inventory", fwd_inventory, comp_inventory), ("payment", fwd_payment, comp_payment), ("shipping", fwd_shipping, comp_none)]


def digest(v):
    return hashlib.sha256(json.dumps(v, sort_keys=True, separators=(",", ":")).encode()).hexdigest()


class Audit:
    def __init__(self):
        self.entries = []

    def append(self, actor, event, token):
        prev = self.entries[-1]["hash"] if self.entries else "GENESIS"
        e = {"seq": len(self.entries) + 1, "actor": actor, "event": event, "fencing_token": token, "prev": prev}
        e["hash"] = digest({k: v for k, v in e.items() if k != "hash"})
        self.entries.append(e)

    def verify(self, anchor=None):
        prev = "GENESIS"
        for i, e in enumerate(self.entries):
            if e["prev"] != prev or e["hash"] != digest({k: v for k, v in e.items() if k != "hash"}) or e["seq"] != i + 1:
                return False, i
            prev = e["hash"]
        if anchor is not None and prev != anchor:
            return False, "anchor mismatch"
        return True, None


LEGAL = {"PROPOSED": {"APPROVED"}, "APPROVED": {"IN_FLIGHT"}, "IN_FLIGHT": {"VERIFYING"}, "VERIFYING": {"COMMITTED", "ROLLBACK_PENDING", "ESCALATED"}, "ROLLBACK_PENDING": {"ROLLED_BACK", "ESCALATED"}}


def first_illegal(history):
    for a, b in zip(history, history[1:]):
        if b not in LEGAL.get(a, set()):
            return a, b
    return None


POINTS = ["before_in_flight", "after_in_flight", "after_effect", "after_record", "after_verifying", "after_commit"]


def mini_workflow(db, wid, idempotent, crash_at=None):
    """Forward path with durable progress kept in a dictionary that plays the checkpoint."""
    cp = db_state.setdefault(wid, {"state": "APPROVED", "recorded": False})

    def maybe(p):
        if crash_at == p:
            raise SimulatedCrash(p)
    maybe("before_in_flight")
    if cp["state"] == "APPROVED":
        cp["state"] = "IN_FLIGHT"
    maybe("after_in_flight")
    if cp["state"] == "IN_FLIGHT":
        db.effect(wid + "-charge", "mini", idempotent)
        maybe("after_effect")
        cp["recorded"] = True
        maybe("after_record")
        cp["state"] = "VERIFYING"
    maybe("after_verifying")
    if cp["state"] == "VERIFYING":
        cp["state"] = "COMMITTED"
    maybe("after_commit")
    return cp["state"]


db_state = {}


def section(t):
    print(f"\n--- {t} ---")


def main():
    with tempfile.TemporaryDirectory() as d:
        section("1. Genuinely running: split-brain with and without fencing at the target")
        for fenced in (False, True):
            db = Db(Path(d) / f"split_{fenced}.db")
            ta = db.acquire("wf", "worker-A", now=0)
            tb = db.acquire("wf", "worker-B", now=31)
            if fenced:
                wb = db.write_fenced("cfg", tb, "from-B")
                wa = db.write_fenced("cfg", ta, "from-A")
            else:
                db.write_unfenced("cfg", "from-B")
                wa = None
                db.write_unfenced("cfg", "from-A")
            print(f"{'fenced at the target' if fenced else 'no fencing at the target':26} A token {ta}, B token {tb} | A's late write accepted: {wa if fenced else True} | final value: {db.target_value('cfg')}")
        print("both workers believed they owned the workflow after the pause, and only the target that compared tokens atomically kept B's value; a check inside the worker could not help, because the stale worker is exactly the one whose view is out of date")

        section("2. Genuinely measuring: eight threads racing for one lease")
        db = Db(Path(d) / "race.db")
        wins, lock = [], threading.Lock()

        def go(i):
            t = db.acquire("wf", f"w{i}", now=0)
            with lock:
                wins.append(t)
        ts = [threading.Thread(target=go, args=(i,)) for i in range(8)]
        for t in ts:
            t.start()
        for t in ts:
            t.join()
        print("tokens handed out:", sorted(x for x in wins if x is not None), "| refused:", sum(1 for x in wins if x is None))
        print("one immediate transaction per acquire let exactly one thread take the lease and refused the other seven, and a lease only says who may try, so the fencing check at the target is still needed")

        section("3. Genuinely running: a SAGA with durable step state")
        db = Db(Path(d) / "saga.db")
        s = Saga(db, "order-1", make_steps())
        result, log = s.run()
        for line in log:
            print(" ", line)
        print("result:", result, "| steps:", s.status())
        print("effects:", {k: db.effect_count(k) for k in ("reserve", "charge", "release", "refund")})
        print("shipping failed, so the payment was compensated before the inventory, in reverse order, and each step's status is a row in the database rather than a list in memory; the refund here is a recorded row, and a real refund does not undo fees or notifications")

        section("4. Genuinely running: a crash during compensation")
        for random_keys in (False, True):
            db = Db(Path(d) / f"comp_{random_keys}.db")
            s = Saga(db, "order-2", make_steps())
            try:
                s.run(crash_in_compensation="payment", random_comp_keys=random_keys)
            except SimulatedCrash:
                pass
            Saga(db, "order-2", make_steps()).run(random_comp_keys=random_keys)
            print(f"{'random key per retry' if random_keys else 'stable compensation key':24} refunds recorded: {db.effect_count('refund')} | releases: {db.effect_count('release')}")
        print("the refund was applied, the worker crashed before writing that down and the resumed run repeated it, which a stable key made harmless and a fresh random key turned into a second refund; the lab's provider is a table that ignores a repeated key, and a real provider has to offer that guarantee")

        section("5. Genuinely running: failure injection across the forward path")
        print(f"{'crash point':18} {'idempotent provider':>22} {'provider without keys':>24}")
        for p in POINTS:
            row = []
            for idem in (True, False):
                db_state.clear()
                dbx = Db(Path(d) / f"mini_{p}_{idem}.db")
                try:
                    mini_workflow(dbx, "w", idem, crash_at=p)
                except SimulatedCrash:
                    pass
                final = mini_workflow(dbx, "w", idem)
                row.append(f"{final}, {dbx.effect_count('mini')} effect(s)")
            print(f"{p:18} {row[0]:>22} {row[1]:>24}")
        print("resuming from the checkpoint never repeats the effect when the provider keeps a ledger of keys, and a provider without one made 2 effects at both crash points that fall after the effect and before the checkpoint moved to VERIFYING, including the point after the record was written, because the resumed run still saw IN_FLIGHT; crashes before the effect or after VERIFYING were harmless, and the checkpoint here is a dictionary that survives the simulated crash")

        section("6. Genuinely running: validating a stored history")
        print("good history:", first_illegal(["PROPOSED", "APPROVED", "IN_FLIGHT", "VERIFYING", "COMMITTED"]))
        print("tampered history:", first_illegal(["PROPOSED", "APPROVED", "COMMITTED"]))
        print("a checkpoint table can be checked against the allowed transitions after the fact, and the first illegal jump is named; this finds an impossible sequence and cannot prove that a legal-looking one really happened")

    section("7. Genuinely running: a hash-chained audit record with fencing tokens")
    a = Audit()
    for actor, ev, tok in (("worker-A", "LEASE_ACQUIRED", 1), ("worker-A", "EXECUTION_INTENT", 1), ("worker-B", "LEASE_RECOVERED", 2), ("worker-B", "ACTION_VERIFIED", 2)):
        a.append(actor, ev, tok)
    anchor = a.entries[-1]["hash"]
    print("intact:", a.verify(anchor))
    saved = json.dumps(a.entries)
    a.entries[2]["fencing_token"] = 1
    print("fencing token edited in entry 3:", a.verify(anchor))
    a.entries = json.loads(saved)[:3]
    print("last entry dropped, no anchor:", a.verify(), "| with the saved head:", a.verify(anchor))
    print("an edit is found at the entry that changed and a dropped tail is found only against a head stored elsewhere; a hash chain shows consistency and not honesty")


if __name__ == "__main__":
    main()
