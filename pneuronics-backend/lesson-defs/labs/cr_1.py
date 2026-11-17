"""Teaching implementation (our own): checkpoints and rollback, Part 1 - the building blocks: a workflow state machine, durable SQLite checkpoints written in one transaction with a version check, worker leases with fencing tokens on a simulated clock, a fenced resource, a file-hash precondition and its time-of-check/time-of-use gap, and the reconcile-first recovery decision.
Everything is local: the databases are temporary files, time is a number the lab chooses, the provider is a dictionary and no payment or inventory system is touched."""
import contextlib
import hashlib
import itertools
import os
import sqlite3
import tempfile
from enum import Enum
from pathlib import Path


class S(str, Enum):
    PROPOSED = "PROPOSED"
    APPROVED = "APPROVED"
    IN_FLIGHT = "IN_FLIGHT"
    VERIFYING = "VERIFYING"
    COMMITTED = "COMMITTED"
    ROLLBACK_PENDING = "ROLLBACK_PENDING"
    ROLLED_BACK = "ROLLED_BACK"
    ESCALATED = "ESCALATED"


ALLOWED = {
    S.PROPOSED: {S.APPROVED},
    S.APPROVED: {S.IN_FLIGHT},
    S.IN_FLIGHT: {S.VERIFYING},
    S.VERIFYING: {S.COMMITTED, S.ROLLBACK_PENDING, S.ESCALATED},
    S.ROLLBACK_PENDING: {S.ROLLED_BACK, S.ESCALATED},
}


class IllegalTransition(Exception):
    pass


class StaleVersion(Exception):
    pass


class Workflow:
    """In-memory only: the state disappears when the process ends."""

    def __init__(self):
        self.state, self.version = S.PROPOSED, 0

    def transition(self, target):
        if target not in ALLOWED.get(self.state, set()):
            raise IllegalTransition(f"{self.state.value} -> {target.value}")
        self.state, self.version = target, self.version + 1


class SimulatedCrash(Exception):
    pass


class Store:
    def __init__(self, path):
        self.path = str(path)
        with self.conn() as db:
            db.executescript("""
            CREATE TABLE IF NOT EXISTS workflows (workflow_id TEXT PRIMARY KEY, state TEXT NOT NULL, version INTEGER NOT NULL);
            CREATE TABLE IF NOT EXISTS history (workflow_id TEXT NOT NULL, version INTEGER NOT NULL, state TEXT NOT NULL, PRIMARY KEY (workflow_id, version));
            """)

    @contextlib.contextmanager
    def conn(self):
        c = sqlite3.connect(self.path, timeout=10, isolation_level=None)
        try:
            yield c
        finally:
            c.close()

    def create(self, wid):
        with self.conn() as db:
            db.execute("BEGIN IMMEDIATE")
            db.execute("INSERT INTO workflows VALUES (?,?,0)", (wid, S.PROPOSED.value))
            db.execute("INSERT INTO history VALUES (?,0,?)", (wid, S.PROPOSED.value))
            db.execute("COMMIT")

    def load(self, wid):
        with self.conn() as db:
            return db.execute("SELECT state, version FROM workflows WHERE workflow_id=?", (wid,)).fetchone()

    def history(self, wid):
        with self.conn() as db:
            return db.execute("SELECT version, state FROM history WHERE workflow_id=? ORDER BY version", (wid,)).fetchall()

    def transition(self, wid, target, expected_version, crash_between=False):
        state, version = self.load(wid)
        if S(target) not in ALLOWED.get(S(state), set()):
            raise IllegalTransition(f"{state} -> {S(target).value}")
        with self.conn() as db:
            db.execute("BEGIN IMMEDIATE")
            try:
                n = db.execute("UPDATE workflows SET state=?, version=? WHERE workflow_id=? AND version=?", (S(target).value, expected_version + 1, wid, expected_version)).rowcount
                if n == 0:
                    raise StaleVersion(f"expected version {expected_version}")
                if crash_between:
                    raise SimulatedCrash("crash between the state update and the history insert")
                db.execute("INSERT INTO history VALUES (?,?,?)", (wid, expected_version + 1, S(target).value))
                db.execute("COMMIT")
            except Exception:
                db.execute("ROLLBACK")
                raise


class LeaseStore:
    def __init__(self, path):
        self.path = str(path)
        with self.conn() as db:
            db.execute("CREATE TABLE IF NOT EXISTS leases (workflow_id TEXT PRIMARY KEY, worker_id TEXT, token INTEGER NOT NULL DEFAULT 0, expires_at REAL NOT NULL DEFAULT 0)")

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
            n = db.execute("UPDATE leases SET expires_at=? WHERE workflow_id=? AND worker_id=? AND token=? AND expires_at>?", (now + duration, wid, worker, token, now)).rowcount
        return n == 1

    def release(self, wid, worker, token):
        with self.conn() as db:
            n = db.execute("UPDATE leases SET worker_id=NULL, expires_at=0 WHERE workflow_id=? AND worker_id=? AND token=?", (wid, worker, token)).rowcount
        return n == 1


class FencedResource:
    def __init__(self):
        self.highest, self.value = 0, 0

    def write(self, token, value):
        if token < self.highest:
            raise PermissionError("Stale fencing token")
        self.highest, self.value = token, value
        return self.value


def sha256_bytes(b):
    return hashlib.sha256(b).hexdigest()


def write_if_unchanged(path, expected_hash, new_text, before_replace=None):
    """Re-hash immediately before the replace. The window is narrower than check-then-write but it is not zero."""
    if before_replace:
        before_replace()
    if sha256_bytes(path.read_bytes()) != expected_hash:
        return False
    tmp = path.with_suffix(".tmp")
    tmp.write_text(new_text, encoding="utf-8")
    os.replace(tmp, path)
    return True


def recover(ledger, key, approved, preconditions_hold):
    found = ledger.get(key)
    if found is not None:
        return "VERIFY_EXISTING_RESULT" if found["amount"] == approved["amount"] else "ESCALATE_INCONSISTENCY"
    if not preconditions_hold:
        return "ABORT_WITHOUT_EXECUTION"
    return "RETRY_WITH_SAME_IDEMPOTENCY_KEY"


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: the in-memory state machine")
    wf = Workflow()
    walk = [S.APPROVED, S.IN_FLIGHT, S.VERIFYING, S.COMMITTED]
    for s in walk:
        wf.transition(s)
    print("final:", wf.state.value, "| version:", wf.version)
    try:
        Workflow().transition(S.COMMITTED)
    except IllegalTransition as e:
        print("PROPOSED -> COMMITTED refused:", e)
    legal = sum(1 for a, b in itertools.permutations(list(S), 2) if b in ALLOWED.get(a, set()))
    print(f"legal moves: {legal} of {len(S) * (len(S) - 1)} ordered pairs")
    print("the table lets the happy path through in four steps and refuses a jump straight to COMMITTED; the object lives only in memory, so a process exit loses it, and COMMITTED here only means the transition was legal, not that anything outside was verified")

    with tempfile.TemporaryDirectory() as d:
        section("2. Genuinely running: durable checkpoints in one transaction")
        st = Store(Path(d) / "cp.db")
        st.create("order-1001")
        v = 0
        for s in walk:
            st.transition("order-1001", s.value, v)
            v += 1
        reopened = Store(Path(d) / "cp.db")
        print("after reopening the file:", reopened.load("order-1001"), "| history:", [h[1] for h in reopened.history("order-1001")])
        st.create("order-1002")
        st.transition("order-1002", S.APPROVED.value, 0)
        try:
            st.transition("order-1002", S.IN_FLIGHT.value, 0)
        except StaleVersion as e:
            print("second writer holding the old version refused:", e)
        try:
            st.transition("order-1002", S.IN_FLIGHT.value, 1, crash_between=True)
        except SimulatedCrash:
            pass
        print("after a crash between the two writes:", st.load("order-1002"), "| history rows:", len(st.history("order-1002")))
        print("the state and the history live in one transaction, so a reopened file shows the full path, a stale writer is refused by the version condition and a crash between the two statements leaves neither changed; the lab has one process, so real lock contention is not tested here")

        section("3. Genuinely running: leases and fencing tokens on a simulated clock")
        ls = LeaseStore(Path(d) / "lease.db")
        a = ls.acquire("order-1001", "worker-A", now=0)
        b_early = ls.acquire("order-1001", "worker-B", now=10)
        b = ls.acquire("order-1001", "worker-B", now=31)
        print("A at 0:", a, "| B at 10 (A still holds it):", b_early, "| B at 31 (expired):", b)
        print("A renews with token 1 after losing the lease:", ls.renew("order-1001", "worker-A", 1, now=32), "| B renews with token 2:", ls.renew("order-1001", "worker-B", 2, now=32))
        ls.release("order-1001", "worker-B", 2)
        print("after B releases, C acquires at 33 with token:", ls.acquire("order-1001", "worker-C", now=33))
        print("each takeover gets a larger token, an expired owner cannot renew, and release does not reset the counter, so an old token can never become valid again; ownership of the lease is not permission to run the action")

        section("4. Genuinely running: a fenced resource")
        r = FencedResource()
        r.write(41, 100)
        r.write(42, 200)
        try:
            r.write(41, 300)
        except PermissionError as e:
            print("write with token 41 after 42:", e)
        print("value:", r.value)
        print("the resource itself compares tokens, so the stale worker is refused even though it still believes it owns the lease; this object is in memory and one process, while a real resource has to enforce the comparison atomically and durably")

        section("5. Genuinely running: a file-hash precondition and its race")
        cfg = Path(d) / "app.cfg"
        cfg.write_text("MAX_RETRIES=3\n", encoding="utf-8")
        approved_hash = sha256_bytes(cfg.read_bytes())
        print("precondition matches before any change:", sha256_bytes(cfg.read_bytes()) == approved_hash)
        ok_check = sha256_bytes(cfg.read_bytes()) == approved_hash
        cfg.write_text("MAX_RETRIES=10\n", encoding="utf-8")
        if ok_check:
            cfg.write_text("MAX_RETRIES=5\n", encoding="utf-8")
        print("check then write with another change in between ends as:", cfg.read_text().strip(), "(the 10 was overwritten)")
        cfg.write_text("MAX_RETRIES=3\n", encoding="utf-8")
        refused = write_if_unchanged(cfg, approved_hash, "MAX_RETRIES=5\n", before_replace=lambda: cfg.write_text("MAX_RETRIES=10\n", encoding="utf-8"))
        print("re-hash at the write boundary, change made just before it: written =", refused, "| file:", cfg.read_text().strip())
        print("a hash checked well before the write does not stop another process from changing the file in between, and re-checking at the boundary catches a change made before it; a change in the few instructions between the re-hash and the replace still gets through, which is why a real system needs a version enforced by the resource itself")

    section("6. Genuinely running: reconcile first, then decide")
    approved = {"amount": 100}
    cases = [
        ("effect exists and matches", {"k": {"amount": 100}}, True),
        ("effect exists, amount differs", {"k": {"amount": 90}}, True),
        ("no effect, preconditions hold", {}, True),
        ("no effect, preconditions failed", {}, False),
    ]
    for label, ledger, pre in cases:
        print(f"{label:34} -> {recover(ledger, 'k', approved, pre)}")
    print("the checkpoint says IN_FLIGHT in all four cases, and only the lookup of the key tells them apart; a missing record means no effect only if the provider is immediately consistent, which this dictionary is by construction")


if __name__ == "__main__":
    main()
