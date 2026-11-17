"""Teaching implementation (our own): propose-then-commit, Part 3 - production pieces on SQLite: a unique constraint on the operation identity, approval expiry on a simulated clock, an atomic compare-and-swap claim against an unsafe read-then-write claim under eight threads, a time-of-check/time-of-use guard on a resource version, a transactional outbox with at-least-once delivery against an idempotent and a non-idempotent provider, a kill switch checked before the claim, a hash-chained audit log, dual approval and a verification result with more than two outcomes.
Everything is local: the database is a temporary file, time is a number the lab chooses, the provider is a counter and reviewer identity is a string, so this is a design sketch and not a production system."""
import contextlib
import hashlib
import json
import sqlite3
import tempfile
import threading
import time
from pathlib import Path


def canonical(v):
    return json.dumps(v, sort_keys=True, separators=(",", ":"), allow_nan=False)


def digest(v):
    return hashlib.sha256(canonical(v).encode()).hexdigest()


class Conflict(Exception):
    pass


class Store:
    def __init__(self, path):
        self.path = str(path)
        with self.conn() as db:
            db.executescript("""
            CREATE TABLE IF NOT EXISTS proposals (proposal_id TEXT PRIMARY KEY, thread_id TEXT NOT NULL, operation_id TEXT NOT NULL, action_json TEXT NOT NULL, action_digest TEXT NOT NULL,
              status TEXT NOT NULL, approved_by TEXT, expires_at INTEGER, resource_version INTEGER, claimed_by TEXT, UNIQUE(thread_id, operation_id));
            CREATE TABLE IF NOT EXISTS outbox (event_id TEXT PRIMARY KEY, proposal_id TEXT NOT NULL, status TEXT NOT NULL, attempts INTEGER NOT NULL DEFAULT 0);
            CREATE TABLE IF NOT EXISTS settings (name TEXT PRIMARY KEY, value INTEGER NOT NULL);
            """)

    @contextlib.contextmanager
    def conn(self):
        c = sqlite3.connect(self.path, timeout=10, isolation_level=None)
        try:
            yield c
        finally:
            c.close()

    def create(self, thread_id, operation_id, action, resource_version=1):
        d = digest(action)
        with self.conn() as db:
            db.execute("BEGIN IMMEDIATE")
            row = db.execute("SELECT proposal_id, action_digest FROM proposals WHERE thread_id=? AND operation_id=?", (thread_id, operation_id)).fetchone()
            if row:
                db.execute("COMMIT")
                if row[1] != d:
                    raise Conflict("operation identity reused with a different action")
                return row[0], False
            pid = digest({"t": thread_id, "o": operation_id, "a": action})
            db.execute("INSERT INTO proposals (proposal_id, thread_id, operation_id, action_json, action_digest, status, resource_version) VALUES (?,?,?,?,?,?,?)",
                       (pid, thread_id, operation_id, canonical(action), d, "PENDING_REVIEW", resource_version))
            db.execute("COMMIT")
            return pid, True

    def approve(self, pid, reviewer, expires_at):
        with self.conn() as db:
            n = db.execute("UPDATE proposals SET status='APPROVED', approved_by=?, expires_at=? WHERE proposal_id=? AND status='PENDING_REVIEW'", (reviewer, expires_at, pid)).rowcount
        return n == 1

    def status(self, pid):
        with self.conn() as db:
            return db.execute("SELECT status, claimed_by FROM proposals WHERE proposal_id=?", (pid,)).fetchone()

    def claim(self, pid, worker, now, current_resource_version):
        """Atomic claim: succeeds only if still APPROVED, not expired, not killed and the resource version is unchanged."""
        with self.conn() as db:
            db.execute("BEGIN IMMEDIATE")
            if db.execute("SELECT value FROM settings WHERE name='kill_switch'").fetchone() == (1,):
                db.execute("ROLLBACK")
                return False, "kill switch active"
            row = db.execute("SELECT status, expires_at, resource_version FROM proposals WHERE proposal_id=?", (pid,)).fetchone()
            if row is None or row[0] != "APPROVED":
                db.execute("ROLLBACK")
                return False, "not approved or already claimed"
            if row[1] is not None and now >= row[1]:
                db.execute("ROLLBACK")
                return False, "approval expired"
            if row[2] != current_resource_version:
                db.execute("ROLLBACK")
                return False, "resource changed since approval"
            db.execute("UPDATE proposals SET status='COMMITTING', claimed_by=? WHERE proposal_id=? AND status='APPROVED'", (worker, pid))
            db.execute("COMMIT")
            return True, "claimed"

    def unsafe_claim(self, pid, worker):
        """Read, check, then write without a condition: the race the lesson warns about."""
        with self.conn() as db:
            status = db.execute("SELECT status FROM proposals WHERE proposal_id=?", (pid,)).fetchone()[0]
            if status != "APPROVED":
                return False
            time.sleep(0.01)
            db.execute("UPDATE proposals SET status='COMMITTING', claimed_by=? WHERE proposal_id=?", (worker, pid))
            return True

    def set_kill(self, on):
        with self.conn() as db:
            db.execute("INSERT OR REPLACE INTO settings (name, value) VALUES ('kill_switch', ?)", (1 if on else 0,))

    def enqueue(self, event_id, pid):
        with self.conn() as db:
            db.execute("INSERT OR IGNORE INTO outbox (event_id, proposal_id, status) VALUES (?,?, 'PENDING')", (event_id, pid))


class Provider:
    def __init__(self, idempotent):
        self.idempotent, self.effects, self.seen = idempotent, 0, set()

    def refund(self, key):
        if self.idempotent and key in self.seen:
            return "duplicate ignored"
        self.seen.add(key)
        self.effects += 1
        return "refunded"


class AuditLog:
    def __init__(self):
        self.entries = []

    def append(self, actor, event, pid):
        prev = self.entries[-1]["hash"] if self.entries else "0" * 64
        e = {"actor": actor, "event": event, "proposal": pid, "prev": prev}
        e["hash"] = digest({k: v for k, v in e.items() if k != "hash"})
        self.entries.append(e)

    def verify(self, anchor=None):
        prev = "0" * 64
        for i, e in enumerate(self.entries):
            if e["prev"] != prev or e["hash"] != digest({k: v for k, v in e.items() if k != "hash"}):
                return False, i
            prev = e["hash"]
        if anchor is not None and prev != anchor:
            return False, "anchor mismatch"
        return True, None


def dual_approved(approvals):
    return len({a["reviewer"] for a in approvals if a["approved"] is True}) >= 2


def verification_outcome(expected, observed, available=True):
    if not available:
        return "UNKNOWN"
    if observed is None:
        return "VERIFIED_FAILURE"
    if observed == expected:
        return "VERIFIED_SUCCESS"
    return "MISMATCH"


def section(t):
    print(f"\n--- {t} ---")


def main():
    action = {"type": "refund", "order_id": "O-1", "amount_minor_units": 10000, "currency": "USD"}
    with tempfile.TemporaryDirectory() as d:
        section("1. Genuinely running: a unique constraint on the operation identity")
        s = Store(Path(d) / "a.db")
        pid, new = s.create("thread-001", "refund-001", action)
        pid2, new2 = s.create("thread-001", "refund-001", action)
        print("first created:", new, "| repeat created:", new2, "| same id:", pid == pid2)
        try:
            s.create("thread-001", "refund-001", dict(action, amount_minor_units=50000))
        except Conflict as e:
            print("changed amount under the same identity:", e)
        print("the database refuses a second row for the same thread and operation, a repeat returns the stored proposal and a changed payload under the same identity raises a conflict instead of becoming a new authorised action")

        section("2. Genuinely running: approval expiry on a simulated clock")
        s.approve(pid, "reviewer-001", expires_at=1000)
        print("claim at clock 999 with expiry 1000:", s.claim(pid, "worker-A", 999, 1), "| stored status:", s.status(pid)[0])
        s2 = Store(Path(d) / "b.db")
        p2, _ = s2.create("t", "o", action)
        s2.approve(p2, "reviewer-001", expires_at=1000)
        print("claim at clock 1000 on a second proposal approved with expiry 1000:", s2.claim(p2, "worker-A", 1000, 1))
        print("an approval is valid only before its expiry time, a claim made before it succeeded and a claim made at the expiry moment was refused, and the check and the claim happen in one transaction so the clock cannot change between them; the clock is a number chosen by the lab")

        section("3. Genuinely measuring: eight workers claim one approved proposal")
        def race(unsafe):
            st = Store(Path(d) / f"race_{unsafe}.db")
            p, _ = st.create("t", "o", action)
            st.approve(p, "reviewer-001", expires_at=10**9)
            wins, lock = [], threading.Lock()
            def work(i):
                ok = st.unsafe_claim(p, f"w{i}") if unsafe else st.claim(p, f"w{i}", 0, 1)[0]
                with lock:
                    wins.append(ok)
            ts = [threading.Thread(target=work, args=(i,)) for i in range(8)]
            for t in ts:
                t.start()
            for t in ts:
                t.join()
            return sum(wins)
        print("atomic claim: workers that believe they own the proposal =", race(False))
        print("read-then-write claim: workers that believe they own the proposal =", race(True))
        print("the conditional update lets exactly one worker claim the proposal, while the version that checks the status and then writes without a condition lets several workers pass the check before any of them writes, so each would run the payment; the unsafe count varies from run to run and the deliberate 10 ms pause between the check and the write exaggerates it")

        section("4. Genuinely running: a resource that changed after approval")
        s3 = Store(Path(d) / "c.db")
        p3, _ = s3.create("t", "o", action, resource_version=7)
        s3.approve(p3, "reviewer-001", expires_at=10**9)
        print("claim when the order is still at version 7:", s3.claim(p3, "w", 0, 7)[1])
        s3b = Store(Path(d) / "c2.db")
        p3b, _ = s3b.create("t", "o", action, resource_version=7)
        s3b.approve(p3b, "reviewer-001", expires_at=10**9)
        print("claim when the order has moved to version 8:", s3b.claim(p3b, "w", 0, 8))
        print("the proposal records the version of the order the reviewer saw, so a later change makes the trusted claim refuse and a new proposal and review are needed; this is the guard against approving one state and executing in another")

        section("5. Genuinely running: a kill switch checked at claim time")
        s4 = Store(Path(d) / "d.db")
        p4, _ = s4.create("t", "o", action)
        s4.approve(p4, "reviewer-001", expires_at=10**9)
        s4.set_kill(True)
        print("approved proposal with the kill switch on:", s4.claim(p4, "w", 0, 1))
        s4.set_kill(False)
        print("after the switch is turned off:", s4.claim(p4, "w", 0, 1))
        print("an earlier approval does not override an emergency stop, because the claim reads the switch inside the same transaction, and once the operator turns it off the same approval can be used; the switch is a row in the same database here, and a real one lives where the agent cannot write")

        section("6. Genuinely running: the outbox with at-least-once delivery")
        s5 = Store(Path(d) / "e.db")
        for i in range(5):
            pid_i, _ = s5.create("t", f"op{i}", dict(action, order_id=f"O-{i}"))
            s5.enqueue(f"evt-{i}", pid_i)
        s5.enqueue("evt-0", "ignored")
        with s5.conn() as db:
            events = db.execute("SELECT event_id, proposal_id FROM outbox ORDER BY event_id").fetchall()
        print("outbox rows after enqueueing evt-0 twice:", len(events))
        for idem in (True, False):
            prov = Provider(idempotent=idem)
            for _round in range(2):
                for ev, pid_i in events:
                    prov.refund(pid_i)
            print(f"{'idempotent provider' if idem else 'provider without idempotency'}: every event delivered twice, effects = {prov.effects} for {len(events)} logical operations")
        print("the outbox row is unique per event, so enqueueing the same event twice leaves one row, and when a dispatcher delivers every event twice an idempotent provider makes five effects while a provider that ignores the key makes ten; at-least-once delivery is safe only when the receiver deduplicates")

    section("7. Genuinely running: a hash-chained audit log")
    log = AuditLog()
    for actor, ev in (("agent", "PROPOSAL_CREATED"), ("reviewer-001", "HUMAN_APPROVED"), ("executor", "EXECUTION_CLAIMED"), ("verifier", "VERIFICATION_COMPLETED")):
        log.append(actor, ev, "p-1")
    anchor = log.entries[-1]["hash"]
    print("intact chain:", log.verify(anchor))
    saved = json.dumps(log.entries)
    log.entries[1]["actor"] = "reviewer-999"
    print("edit an actor in entry 1:", log.verify(anchor))
    log.entries = json.loads(saved)[:3]
    print("drop the last entry, no anchor:", log.verify(), "| with the saved anchor:", log.verify(anchor))
    print("an edited entry is caught at the entry that was changed, and removing the newest entries is invisible unless the latest hash was stored somewhere the writer cannot change; the chain shows consistency, not honesty, and anyone who controls the whole log can rewrite it")

    section("8. Genuinely running: dual approval")
    print("one reviewer approving twice:", dual_approved([{"reviewer": "r1", "approved": True}, {"reviewer": "r1", "approved": True}]))
    print("two distinct reviewers:", dual_approved([{"reviewer": "r1", "approved": True}, {"reviewer": "r2", "approved": True}]))
    print("one approves and one rejects:", dual_approved([{"reviewer": "r1", "approved": True}, {"reviewer": "r2", "approved": False}]))
    print("counting distinct reviewers stops one person from satisfying a two-person rule, and the lab does not check roles or authentication, which a real rule must")

    section("9. Genuinely computing: verification has more than two outcomes")
    expected = {"amount": 10000}
    for label, observed, avail in (("effect matches", {"amount": 10000}, True), ("effect differs", {"amount": 10100}, True), ("no effect found", None, True), ("provider unreachable", None, False)):
        print(f"{label:21} -> {verification_outcome(expected, observed, avail)}")
    print("collapsing these into a single true or false would treat an unreachable provider like a failed refund, and a mismatch like a success; unknown has to lead to reconciliation and not to completion")


if __name__ == "__main__":
    main()
