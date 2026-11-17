"""Teaching implementation (our own): checkpoints and rollback, Part 2 - a checkpointed inventory workflow on SQLite: idempotency ledger, atomic precondition, post-action verification, conditional rollback, the lesson's four scenarios, crash injection at every boundary, a naive engine that double-subtracts, and unit tests that are run.
One SQLite file plays both the workflow store and the target system, which makes the atomic apply possible and hides the uncertainty of a remote service; nothing real is changed."""
import contextlib
import hashlib
import io
import json
import sqlite3
import tempfile
import unittest
from pathlib import Path


class SimulatedCrash(Exception):
    pass


class ConflictError(Exception):
    pass


ALLOWED = {
    "APPROVED": {"IN_FLIGHT"},
    "IN_FLIGHT": {"VERIFYING", "ABORTED"},
    "VERIFYING": {"COMMITTED", "ROLLBACK_PENDING"},
    "ROLLBACK_PENDING": {"ROLLED_BACK", "ESCALATED"},
}
CRASH_POINTS = ["after_in_flight", "after_apply", "after_verifying", "after_rollback_pending", "after_rollback"]


def fingerprint(params):
    return hashlib.sha256(json.dumps(params, sort_keys=True, separators=(",", ":")).encode()).hexdigest()


class Engine:
    def __init__(self, path):
        self.path = str(path)
        with self.conn() as db:
            db.executescript("""
            CREATE TABLE IF NOT EXISTS inventory (product_id TEXT PRIMARY KEY, quantity INTEGER NOT NULL, version INTEGER NOT NULL);
            CREATE TABLE IF NOT EXISTS workflows (workflow_id TEXT PRIMARY KEY, state TEXT NOT NULL, version INTEGER NOT NULL, idem_key TEXT NOT NULL, product_id TEXT NOT NULL,
              expected_qty INTEGER NOT NULL, expected_ver INTEGER NOT NULL, target_qty INTEGER NOT NULL);
            CREATE TABLE IF NOT EXISTS checkpoints (workflow_id TEXT NOT NULL, version INTEGER NOT NULL, state TEXT NOT NULL, PRIMARY KEY (workflow_id, version));
            CREATE TABLE IF NOT EXISTS operations (idem_key TEXT PRIMARY KEY, fp TEXT NOT NULL, status TEXT NOT NULL, product_id TEXT NOT NULL, before_qty INTEGER, after_qty INTEGER, after_ver INTEGER);
            """)

    @contextlib.contextmanager
    def conn(self):
        c = sqlite3.connect(self.path, timeout=10, isolation_level=None)
        try:
            yield c
        finally:
            c.close()

    def seed(self, qty=100, ver=7):
        with self.conn() as db:
            db.execute("INSERT OR REPLACE INTO inventory VALUES ('SKU-1001', ?, ?)", (qty, ver))

    def inventory(self):
        with self.conn() as db:
            return db.execute("SELECT quantity, version FROM inventory WHERE product_id='SKU-1001'").fetchone()

    def external_change(self, new_qty):
        with self.conn() as db:
            db.execute("UPDATE inventory SET quantity=?, version=version+1 WHERE product_id='SKU-1001'", (new_qty,))

    def propose_and_approve(self, wid, expected_qty=100, expected_ver=7, target=90):
        with self.conn() as db:
            db.execute("BEGIN IMMEDIATE")
            db.execute("INSERT INTO workflows VALUES (?,?,0,?,?,?,?,?)", (wid, "APPROVED", wid + ":inventory-adjustment", "SKU-1001", expected_qty, expected_ver, target))
            db.execute("INSERT INTO checkpoints VALUES (?,0,'APPROVED')", (wid,))
            db.execute("COMMIT")

    def wf(self, wid):
        with self.conn() as db:
            db.row_factory = sqlite3.Row
            return dict(db.execute("SELECT * FROM workflows WHERE workflow_id=?", (wid,)).fetchone())

    def history(self, wid):
        with self.conn() as db:
            return db.execute("SELECT version, state FROM checkpoints WHERE workflow_id=? ORDER BY version", (wid,)).fetchall()

    def op_count(self):
        with self.conn() as db:
            return db.execute("SELECT COUNT(*) FROM operations").fetchone()[0]

    def op_status(self, wid):
        with self.conn() as db:
            row = db.execute("SELECT status FROM operations WHERE idem_key=?", (wid + ":inventory-adjustment",)).fetchone()
        return row[0] if row else None

    def transition(self, wid, new_state):
        w = self.wf(wid)
        if new_state not in ALLOWED.get(w["state"], set()):
            raise ValueError(f"{w['state']} -> {new_state} is not allowed")
        with self.conn() as db:
            db.execute("BEGIN IMMEDIATE")
            n = db.execute("UPDATE workflows SET state=?, version=? WHERE workflow_id=? AND version=?", (new_state, w["version"] + 1, wid, w["version"])).rowcount
            if n == 0:
                db.execute("ROLLBACK")
                raise ValueError("stale workflow version")
            db.execute("INSERT INTO checkpoints VALUES (?,?,?)", (wid, w["version"] + 1, new_state))
            db.execute("COMMIT")

    def apply_with(self, key, params):
        fp = fingerprint(params)
        with self.conn() as db:
            db.execute("BEGIN IMMEDIATE")
            op = db.execute("SELECT fp, status FROM operations WHERE idem_key=?", (key,)).fetchone()
            if op:
                db.execute("ROLLBACK")
                if op[0] != fp:
                    raise ConflictError("same idempotency key, different parameters")
                return "ALREADY_APPLIED"
            row = db.execute("SELECT quantity, version FROM inventory WHERE product_id=?", (params["product_id"],)).fetchone()
            if row != (params["expected_qty"], params["expected_ver"]):
                db.execute("ROLLBACK")
                return "PRECONDITION_FAILED"
            n = db.execute("UPDATE inventory SET quantity=?, version=version+1 WHERE product_id=? AND quantity=? AND version=?",
                           (params["target_qty"], params["product_id"], params["expected_qty"], params["expected_ver"])).rowcount
            if n != 1:
                db.execute("ROLLBACK")
                return "PRECONDITION_FAILED"
            db.execute("INSERT INTO operations VALUES (?,?,'APPLIED',?,?,?,?)", (key, fp, params["product_id"], params["expected_qty"], params["target_qty"], params["expected_ver"] + 1))
            db.execute("COMMIT")
            return "APPLIED"

    def params(self, wid):
        w = self.wf(wid)
        return {k: w[k] for k in ("product_id", "expected_qty", "expected_ver", "target_qty")}

    def apply_action(self, wid):
        return self.apply_with(self.wf(wid)["idem_key"], self.params(wid))

    def verify(self, wid, force_fail=False):
        if force_fail:
            return False
        w = self.wf(wid)
        with self.conn() as db:
            op = db.execute("SELECT status, after_qty, after_ver FROM operations WHERE idem_key=?", (w["idem_key"],)).fetchone()
            inv = db.execute("SELECT quantity, version FROM inventory WHERE product_id=?", (w["product_id"],)).fetchone()
        return op is not None and op[0] == "APPLIED" and inv == (w["target_qty"], op[2])

    def rollback(self, wid):
        w = self.wf(wid)
        with self.conn() as db:
            db.execute("BEGIN IMMEDIATE")
            op = db.execute("SELECT status, before_qty, after_qty, after_ver FROM operations WHERE idem_key=?", (w["idem_key"],)).fetchone()
            if op is not None and op[0] == "ROLLED_BACK":
                db.execute("ROLLBACK")
                return "ROLLED_BACK"
            if op is None or op[0] != "APPLIED":
                db.execute("ROLLBACK")
                return "ESCALATE"
            n = db.execute("UPDATE inventory SET quantity=?, version=version+1 WHERE product_id=? AND quantity=? AND version=?", (op[1], w["product_id"], op[2], op[3])).rowcount
            if n != 1:
                db.execute("ROLLBACK")
                return "ESCALATE"
            db.execute("UPDATE operations SET status='ROLLED_BACK' WHERE idem_key=?", (w["idem_key"],))
            db.execute("COMMIT")
            return "ROLLED_BACK"

    def run(self, wid, crash_at=None, force_verify_fail=False, before_rollback=None):
        def maybe(point):
            if crash_at == point:
                raise SimulatedCrash(point)
        while True:
            state = self.wf(wid)["state"]
            if state in ("COMMITTED", "ROLLED_BACK", "ESCALATED", "ABORTED"):
                return state
            if state == "APPROVED":
                self.transition(wid, "IN_FLIGHT")
                maybe("after_in_flight")
            elif state == "IN_FLIGHT":
                r = self.apply_action(wid)
                if r == "PRECONDITION_FAILED":
                    self.transition(wid, "ABORTED")
                    continue
                maybe("after_apply")
                self.transition(wid, "VERIFYING")
                maybe("after_verifying")
            elif state == "VERIFYING":
                self.transition(wid, "COMMITTED" if self.verify(wid, force_verify_fail) else "ROLLBACK_PENDING")
                maybe("after_rollback_pending")
            elif state == "ROLLBACK_PENDING":
                if before_rollback:
                    before_rollback(self)
                    before_rollback = None
                r = self.rollback(wid)
                maybe("after_rollback")
                self.transition(wid, "ROLLED_BACK" if r == "ROLLED_BACK" else "ESCALATED")


class NaiveEngine(Engine):
    """Treats IN_FLIGHT as 'not done yet' and subtracts again: no ledger, no precondition."""

    def apply_action(self, wid):
        with self.conn() as db:
            db.execute("UPDATE inventory SET quantity=quantity-10, version=version+1 WHERE product_id='SKU-1001'")
        return "APPLIED"

    def verify(self, wid, force_fail=False):
        return True


def scenario(d, name, wid, **kw):
    e = Engine(Path(d) / f"{name}.db")
    e.seed()
    if name == "precondition":
        e.propose_and_approve(wid, expected_qty=200)
    else:
        e.propose_and_approve(wid)
    crashed = False
    try:
        result = e.run(wid, crash_at="after_apply" if name == "crash" else None, force_verify_fail=(name == "verify_failure"))
    except SimulatedCrash:
        crashed = True
        result = Engine(Path(d) / f"{name}.db").run(wid)
    return e, result, crashed


class EngineTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.e = Engine(Path(self.tmp.name) / "t.db")
        self.e.seed()
        self.e.propose_and_approve("w1")

    def tearDown(self):
        self.tmp.cleanup()

    def test_clean_run(self):
        self.assertEqual(self.e.run("w1"), "COMMITTED")
        self.assertEqual(self.e.inventory()[0], 90)

    def test_second_run_is_noop(self):
        self.e.run("w1")
        self.assertEqual(self.e.run("w1"), "COMMITTED")
        self.assertEqual(self.e.op_count(), 1)

    def test_crash_then_resume_single_operation(self):
        with self.assertRaises(SimulatedCrash):
            self.e.run("w1", crash_at="after_apply")
        self.assertEqual(Engine(self.e.path).run("w1"), "COMMITTED")
        self.assertEqual((self.e.inventory()[0], self.e.op_count()), (90, 1))

    def test_precondition_leaves_no_operation(self):
        e2 = Engine(Path(self.tmp.name) / "p.db")
        e2.seed()
        e2.propose_and_approve("w2", expected_qty=200)
        self.assertEqual(e2.run("w2"), "ABORTED")
        self.assertEqual((e2.inventory()[0], e2.op_count()), (100, 0))

    def test_rollback_restores(self):
        self.assertEqual(self.e.run("w1", force_verify_fail=True), "ROLLED_BACK")
        self.assertEqual((self.e.inventory()[0], self.e.op_status("w1")), (100, "ROLLED_BACK"))

    def test_illegal_transition(self):
        with self.assertRaises(ValueError):
            self.e.transition("w1", "COMMITTED")


def section(t):
    print(f"\n--- {t} ---")


def main():
    with tempfile.TemporaryDirectory() as d:
        section("1. Genuinely running: the four scenarios")
        for name in ("clean", "crash", "precondition", "verify_failure"):
            e, result, crashed = scenario(d, name, f"wf-{name}")
            print(f"Scenario: {name}{' (worker crashed after the side effect, then a fresh engine resumed)' if crashed else ''}")
            print(f"  Result: {result} | Inventory: {Engine(e.path).inventory()[0]} | operations: {Engine(e.path).op_count()}")
            print(f"  History: {Engine(e.path).history(f'wf-{name}')}")
        print("the clean run committed with inventory 90, the crash run ended exactly like it with one operation, the wrong expectation aborted with inventory 100 and no operation, and the forced verification failure rolled back to 100; the verification failure is a test injection and not a real mismatch")

        section("2. Genuinely running: the same crash without a ledger")
        n = NaiveEngine(Path(d) / "naive.db")
        n.seed()
        n.propose_and_approve("wf-naive")
        try:
            n.run("wf-naive", crash_at="after_apply")
        except SimulatedCrash:
            pass
        res = NaiveEngine(n.path).run("wf-naive")
        print("naive result:", res, "| inventory:", n.inventory()[0], "| the approved target was 90")
        print("the naive engine reads IN_FLIGHT as not done and subtracts a second time, which gives 80 instead of 90 and still reports COMMITTED because its verification always says yes; the ledger and the real verification are what prevent this")

        section("3. Genuinely running: crash at every boundary")
        print(f"{'crash point':24} {'path':18} {'final':12} {'inventory':>9} {'operations':>10}")
        for forced in (False, True):
            for point in CRASH_POINTS:
                if not forced and point in ("after_rollback_pending", "after_rollback"):
                    continue
                e = Engine(Path(d) / f"m_{forced}_{point}.db")
                e.seed()
                e.propose_and_approve("w")
                try:
                    e.run("w", crash_at=point, force_verify_fail=forced)
                except SimulatedCrash:
                    pass
                final = Engine(e.path).run("w", force_verify_fail=forced)
                print(f"{point:24} {'verify fails' if forced else 'normal':18} {final:12} {e.inventory()[0]:>9} {e.op_count():>10}")
        print("every crash point recovered to a terminal state with exactly one operation, inventory 90 on the normal path and 100 after a rollback; the first version of this lab escalated at after_rollback because a rollback that had already restored the stock was not recognised on resume, and treating an operation already marked ROLLED_BACK as done fixed it; the lab injects crashes between steps and never inside a SQLite transaction, which SQLite itself makes atomic")

        section("4. Genuinely running: same key, different parameters")
        e = Engine(Path(d) / "key.db")
        e.seed()
        p = {"product_id": "SKU-1001", "expected_qty": 100, "expected_ver": 7, "target_qty": 90}
        print("first call:", e.apply_with("k1", p), "| repeat:", e.apply_with("k1", p))
        try:
            e.apply_with("k1", dict(p, target_qty=50))
        except ConflictError as err:
            print("changed target under the same key:", err)
        print("inventory:", e.inventory()[0], "| operations:", e.op_count())
        print("a repeat is answered from the ledger without touching inventory and a changed parameter is refused, so one key cannot be reused to authorise a different change")

        section("5. Genuinely running: conditional rollback when another workflow got there first")
        e = Engine(Path(d) / "cond.db")
        e.seed()
        e.propose_and_approve("wc")
        result = e.run("wc", force_verify_fail=True, before_rollback=lambda eng: eng.external_change(85))
        print("result:", result, "| inventory:", e.inventory()[0], "| history:", [h[1] for h in e.history("wc")])
        print("another workflow moved inventory from 90 to 85 before the rollback ran, the conditional update matched no row, the workflow escalated and the 85 was left alone; a blind restore to 100 would have erased that change")

    section("6. Genuinely running: the unit tests")
    stream = io.StringIO()
    res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(EngineTests))
    print(f"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}")
    print("the tests cover a clean run, a repeated run, a crash and resume, a failed precondition, a rollback and an illegal transition on this lab's own engine, and they are not the lesson's original tests")


if __name__ == "__main__":
    main()
