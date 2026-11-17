"""Teaching implementation (our own): cost governors, Part 3 - a durable SQLite budget ledger with atomic reservations, settlement, idempotent retries, a persistent kill switch, restart safety, and a threaded test of concurrent reservations.
Amounts are stored as integer micro-dollars; the database is a temporary file, the 'provider' is a number passed to settle, and nothing here talks to a real service."""
import contextlib
import sqlite3
import tempfile
import threading
from decimal import Decimal, ROUND_CEILING
from pathlib import Path

SCALE = Decimal("1000000")


def micro(amount):
    v = Decimal(amount)
    if not v.is_finite() or v < 0:
        raise ValueError("amount must be finite and nonnegative")
    return int((v * SCALE).to_integral_value(rounding=ROUND_CEILING))


def dollars(m):
    return Decimal(m) / SCALE


class BudgetDenied(Exception):
    pass


class DurableGovernor:
    def __init__(self, path):
        self.path = str(path)
        with self.conn() as db:
            db.execute("CREATE TABLE IF NOT EXISTS budgets (scope TEXT PRIMARY KEY, limit_micro INTEGER NOT NULL, stopped INTEGER NOT NULL DEFAULT 0)")
            db.execute("CREATE TABLE IF NOT EXISTS actions (action_id TEXT PRIMARY KEY, scope TEXT NOT NULL, reserved_micro INTEGER NOT NULL, actual_micro INTEGER, status TEXT NOT NULL)")

    def connect(self):
        return sqlite3.connect(self.path, timeout=10, isolation_level=None)

    @contextlib.contextmanager
    def conn(self):
        c = self.connect()
        try:
            yield c
        finally:
            c.close()

    def create_budget(self, scope, limit):
        with self.conn() as db:
            db.execute("INSERT OR IGNORE INTO budgets (scope, limit_micro) VALUES (?, ?)", (scope, micro(limit)))

    def _used(self, db, scope):
        row = db.execute("SELECT COALESCE(SUM(CASE WHEN status = 'settled' THEN actual_micro ELSE reserved_micro END), 0) FROM actions WHERE scope = ?", (scope,)).fetchone()
        return row[0]

    def reserve(self, action_id, scope, maximum):
        req = micro(maximum)
        db = self.connect()
        try:
            db.execute("BEGIN IMMEDIATE")
            prior = db.execute("SELECT scope, reserved_micro, status FROM actions WHERE action_id = ?", (action_id,)).fetchone()
            if prior:
                if prior[0] != scope or prior[1] != req:
                    raise BudgetDenied("action id reused with different parameters")
                db.execute("COMMIT")
                return "already " + prior[2]
            b = db.execute("SELECT limit_micro, stopped FROM budgets WHERE scope = ?", (scope,)).fetchone()
            if b is None:
                raise BudgetDenied("unknown budget scope")
            if b[1]:
                raise BudgetDenied("kill switch active")
            if self._used(db, scope) + req > b[0]:
                raise BudgetDenied("budget exhausted")
            db.execute("INSERT INTO actions VALUES (?, ?, ?, NULL, 'reserved')", (action_id, scope, req))
            db.execute("COMMIT")
            return "reserved"
        except Exception:
            try:
                db.execute("ROLLBACK")
            except sqlite3.OperationalError:
                pass
            raise
        finally:
            db.close()

    def settle(self, action_id, actual):
        act = micro(actual)
        with self.conn() as db:
            db.execute("BEGIN IMMEDIATE")
            row = db.execute("SELECT reserved_micro, status FROM actions WHERE action_id = ?", (action_id,)).fetchone()
            if row is None:
                db.execute("ROLLBACK")
                raise KeyError(action_id)
            if row[1] == "settled":
                db.execute("COMMIT")
                return "already settled"
            status = "settled" if act <= row[0] else "uncertain"
            db.execute("UPDATE actions SET actual_micro = ?, status = ? WHERE action_id = ?", (act, status, action_id))
            db.execute("COMMIT")
            return status

    def stop(self, scope):
        with self.conn() as db:
            db.execute("UPDATE budgets SET stopped = 1 WHERE scope = ?", (scope,))

    def ledger(self, scope):
        with self.conn() as db:
            limit, stopped = db.execute("SELECT limit_micro, stopped FROM budgets WHERE scope = ?", (scope,)).fetchone()
            committed = db.execute("SELECT COALESCE(SUM(actual_micro), 0) FROM actions WHERE scope = ? AND status = 'settled'", (scope,)).fetchone()[0]
            reserved = db.execute("SELECT COALESCE(SUM(reserved_micro), 0) FROM actions WHERE scope = ? AND status != 'settled'", (scope,)).fetchone()[0]
        return {"limit": dollars(limit), "committed": dollars(committed), "reserved": dollars(reserved), "available": dollars(limit - committed - reserved), "stopped": bool(stopped)}


def section(t):
    print(f"\n--- {t} ---")


def main():
    with tempfile.TemporaryDirectory() as d:
        section("1. Genuinely running: the lesson sequence of reservations, settlement and the kill switch")
        g = DurableGovernor(Path(d) / "a.db")
        g.create_budget("task-42", "10")
        print("reserve A 6.00:", g.reserve("A", "task-42", "6.00"))
        try:
            g.reserve("B", "task-42", "5.00")
        except BudgetDenied as e:
            print("reserve B 5.00 denied:", e)
        print("settle A at 4.00:", g.settle("A", "4.00"))
        print("reserve B 5.00 after settlement:", g.reserve("B", "task-42", "5.00"))
        print("ledger:", g.ledger("task-42"))
        g.stop("task-42")
        try:
            g.reserve("C", "task-42", "1.00")
        except BudgetDenied as e:
            print("reserve C denied:", e)
        print("outstanding reservations count against the budget, so the 5.00 request was refused while 6.00 was still reserved and accepted once the settlement released 2.00, and after the stop the remaining 1.00 could not be used; the figures match the lesson example")

        section("2. Genuinely running: idempotent retries and a reused action id")
        g2 = DurableGovernor(Path(d) / "b.db")
        g2.create_budget("t", "10")
        print("first call:", g2.reserve("act-1", "t", "2.00"), "| retry of the same call:", g2.reserve("act-1", "t", "2.00"))
        print("reserved total after both:", g2.ledger("t")["reserved"])
        try:
            g2.reserve("act-1", "t", "5.00")
        except BudgetDenied as e:
            print("same id with a different amount:", e)
        print("a retried reservation does not reserve twice and an id reused with different parameters is refused, which protects the local ledger; it does not make the outside provider call idempotent")

        section("3. Genuinely running: restart safety")
        p = Path(d) / "c.db"
        g3 = DurableGovernor(p)
        g3.create_budget("t", "10")
        g3.reserve("x", "t", "6")
        g3.settle("x", "6")
        g4 = DurableGovernor(p)
        try:
            g4.reserve("y", "t", "5")
        except BudgetDenied as e:
            print("new governor object on the same file:", e, "| ledger:", g4.ledger("t"))
        print("a worker restart creates a new object but reads the same file, so the six dollars already spent still count and the budget is not reset to ten")

        section("4. Genuinely running: an actual cost above the reservation")
        g5 = DurableGovernor(Path(d) / "d.db")
        g5.create_budget("t", "10")
        g5.reserve("z", "t", "3")
        print("settle at 4.00 against a 3.00 reservation:", g5.settle("z", "4.00"), "| ledger:", g5.ledger("t"))
        print("the lab marks an overrun as uncertain and keeps the reserved amount counted, which is conservative; a real system must record the actual liability, flag the discrepancy and stop further spending, because it cannot refuse a charge the provider has already made")

        section("5. Genuinely running: concurrent reservations from threads")
        g6 = DurableGovernor(Path(d) / "e.db")
        g6.create_budget("t", "10")
        results = []
        lock = threading.Lock()

        def worker(i):
            try:
                r = g6.reserve(f"w{i}", "t", "3")
            except BudgetDenied as e:
                r = f"denied: {e}"
            with lock:
                results.append(r)

        threads = [threading.Thread(target=worker, args=(i,)) for i in range(12)]
        for t in threads:
            t.start()
        for t in threads:
            t.join()
        ok = sum(1 for r in results if r == "reserved")
        print(f"12 threads asked for 3.00 each from a 10.00 budget: reserved {ok}, denied {len(results) - ok} | reserved total {g6.ledger('t')['reserved']} | within the limit: {g6.ledger('t')['reserved'] <= 10}")
        print("exactly three reservations fit and the rest were refused, because each one checked the balance and wrote inside a write transaction that SQLite serialises; this shows one database file on one machine and says nothing about a distributed deployment")


if __name__ == "__main__":
    main()
