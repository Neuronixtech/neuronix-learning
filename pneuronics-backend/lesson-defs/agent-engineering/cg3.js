module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215b3",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Action Budgets, Iteration Caps, Cost Governors (Part 3 of 3) — A Durable Reservation Ledger",
 "titleKn": "ಕ್ರಿಯೆ ಬಜೆಟ್‌ಗಳು, Iteration ಮಿತಿಗಳು, ವೆಚ್ಚ ನಿಯಂತ್ರಕಗಳು (ಭಾಗ 3 / 3) — Durable ಕಾಯ್ದಿರಿಸುವ ಲೆಡ್ಜರ್",
 "desc": "Build a SQLite ledger with atomic reservations and test retries, restarts, an overrun and a thread race.",
 "descKn": "ಪರಮಾಣು ಕಾಯ್ದಿರಿಸುವಿಕೆಗಳಿರುವ SQLite ಲೆಡ್ಜರ್ ನಿರ್ಮಿಸಿ ಮತ್ತು ಮರುಪ್ರಯತ್ನ, ಮರುಪ್ರಾರಂಭ, ಮೀರುವಿಕೆ ಮತ್ತು thread ಓಟ ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Reserve before dispatch.",
  "Settle with the actual cost.",
  "Make retries idempotent.",
  "Survive a restart.",
  "Test concurrent reservations."
 ],
 "objectivesKn": [
  "ರವಾನೆಗೆ ಮೊದಲು ಕಾಯ್ದಿರಿಸಿ.",
  "ನಿಜ ವೆಚ್ಚದೊಂದಿಗೆ ಇತ್ಯರ್ಥ ಮಾಡಿ.",
  "ಮರುಪ್ರಯತ್ನಗಳನ್ನು idempotent ಮಾಡಿ.",
  "ಮರುಪ್ರಾರಂಭ ಉಳಿಯಿರಿ.",
  "ಏಕಕಾಲದ ಕಾಯ್ದಿರಿಸುವಿಕೆ ಪರೀಕ್ಷಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Action Budgets, Iteration Caps, Cost Governors (Part 3 of 3)",
    "textKn": "ಕ್ರಿಯೆ ಬಜೆಟ್‌ಗಳು, Iteration ಮಿತಿಗಳು, ವೆಚ್ಚ ನಿಯಂತ್ರಕಗಳು (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: a durable SQLite reservation ledger, settlement, idempotent retries, a reused action id, restart safety, an actual cost above the reservation and twelve threads reserving at once. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind action budgets, iteration caps and cost governors (Decimal cost arithmetic, token and tool caps, velocity limits, layered policies, approvals and a durable SQLite reservation ledger), not the real software, and prices are the lesson illustrative numbers or invented, time is simulated, the ledger is a temporary SQLite file and no model, provider or real tool is called, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation; the lesson says its code is original teaching code and its first expected output contained a cost mistake that it corrected itself, which the lab confirms by running the arithmetic. The e-commerce story of monthly spend rising from 1,200 to 4,800 dollars is cited from the lesson and was not verified. All prices are the lesson illustrations or invented. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: durable SQLite ಕಾಯ್ದಿರಿಸುವ ಲೆಡ್ಜರ್, ಇತ್ಯರ್ಥ, idempotent ಮರುಪ್ರಯತ್ನಗಳು, ಮರುಬಳಸಿದ action id, ಮರುಪ್ರಾರಂಭ ಸುರಕ್ಷತೆ, ಕಾಯ್ದಿರಿಸುವಿಕೆಗಿಂತ ಹೆಚ್ಚಿನ ನಿಜ ವೆಚ್ಚ ಮತ್ತು ಒಂದೇ ಬಾರಿ ಕಾಯ್ದಿರಿಸುವ ಹನ್ನೆರಡು threads. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಕ್ರಿಯೆ ಬಜೆಟ್‌ಗಳು, iteration ಮಿತಿಗಳು ಮತ್ತು ವೆಚ್ಚ ನಿಯಂತ್ರಕಗಳು (Decimal ವೆಚ್ಚ ಅಂಕಗಣಿತ, token ಮತ್ತು tool ಮಿತಿಗಳು, ವೇಗ ಮಿತಿಗಳು, ಪದರದ ನೀತಿಗಳು, ಅನುಮೋದನೆಗಳು ಮತ್ತು durable SQLite ಕಾಯ್ದಿರಿಸುವ ಲೆಡ್ಜರ್) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಬೆಲೆಗಳು lesson ನ ವಿವರಣಾತ್ಮಕ ಸಂಖ್ಯೆಗಳು ಅಥವಾ ಕಲ್ಪಿತ, ಸಮಯ ಅನುಕರಿತ, ಲೆಡ್ಜರ್ ತಾತ್ಕಾಲಿಕ SQLite ಫೈಲ್ ಮತ್ತು ಯಾವ ಮಾದರಿ, ಪೂರೈಕೆದಾರ ಅಥವಾ ನಿಜ tool ಕರೆಯಲ್ಪಡುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ; lesson ತನ್ನ ಕೋಡ್ ಮೂಲ ಬೋಧನಾ ಕೋಡ್ ಎನ್ನುತ್ತದೆ ಮತ್ತು ಅದರ ಮೊದಲ ನಿರೀಕ್ಷಿತ ಔಟ್‌ಪುಟ್‌ನಲ್ಲಿ ವೆಚ್ಚ ತಪ್ಪಿತ್ತು, ಅದನ್ನು ಅದೇ ಸರಿಪಡಿಸಿತು, ಲ್ಯಾಬ್ ಅಂಕಗಣಿತ ಓಡಿಸಿ ಅದನ್ನು ದೃಢಪಡಿಸುತ್ತದೆ. ಮಾಸಿಕ ಖರ್ಚು 1,200 ರಿಂದ 4,800 ಡಾಲರ್‌ಗೆ ಏರಿದ ಇ-ಕಾಮರ್ಸ್ ಕಥೆ lesson ನಿಂದ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಪರಿಶೀಲಿಸಲಾಗಿಲ್ಲ. ಎಲ್ಲಾ ಬೆಲೆಗಳು lesson ವಿವರಣೆಗಳು ಅಥವಾ ಕಲ್ಪಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Committed Plus Reserved Must Stay Within the Budget",
    "textKn": "ಬದ್ಧ ಜೊತೆ ಕಾಯ್ದಿರಿಸಿದ್ದು ಬಜೆಟ್ ಒಳಗೆ ಇರಬೇಕು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Ledger That Survives Restarts and Races",
    "headingKn": "ಮರುಪ್ರಾರಂಭ ಮತ್ತು ಓಟಗಳನ್ನು ಉಳಿಯುವ ಲೆಡ್ಜರ್",
    "bodyEn": "In memory counters reset on restart and let two workers spend the same balance. This part builds a ledger in SQLite with integer micro-dollar amounts. A reservation is written inside an immediate write transaction before the call, settlement replaces it with the actual cost, a retried reservation does not reserve twice, an action id reused with different parameters is refused, and the kill switch is a stored flag. The lab then restarts the governor and runs twelve threads at once against a ten dollar budget.",
    "bodyKn": "ಮೆಮೊರಿ ಕೌಂಟರ್‌ಗಳು ಮರುಪ್ರಾರಂಭದಲ್ಲಿ ಮರುಹೊಂದುತ್ತವೆ ಮತ್ತು ಎರಡು workers ಒಂದೇ ಉಳಿಕೆ ಖರ್ಚು ಮಾಡಲು ಬಿಡುತ್ತವೆ. ಈ ಭಾಗ SQLite ನಲ್ಲಿ ಪೂರ್ಣಾಂಕ ಮೈಕ್ರೋ-ಡಾಲರ್ ಮೊತ್ತಗಳೊಂದಿಗೆ ಲೆಡ್ಜರ್ ನಿರ್ಮಿಸುತ್ತದೆ. ಕಾಯ್ದಿರಿಸುವಿಕೆ ಕರೆಗೆ ಮೊದಲು ತಕ್ಷಣದ ಬರವಣಿಗೆ ವಹಿವಾಟಿನೊಳಗೆ ಬರೆಯಲ್ಪಡುತ್ತದೆ, ಇತ್ಯರ್ಥ ಅದನ್ನು ನಿಜ ವೆಚ್ಚದಿಂದ ಬದಲಿಸುತ್ತದೆ, ಮರುಪ್ರಯತ್ನಿಸಿದ ಕಾಯ್ದಿರಿಸುವಿಕೆ ಎರಡು ಬಾರಿ ಕಾಯ್ದಿರಿಸುವುದಿಲ್ಲ, ಬೇರೆ ನಿಯತಾಂಕಗಳೊಂದಿಗೆ ಮರುಬಳಸಿದ action id ನಿರಾಕರಿಸಲ್ಪಡುತ್ತದೆ ಮತ್ತು kill switch ಸಂಗ್ರಹಿತ ಫ್ಲಾಗ್. ನಂತರ ಲ್ಯಾಬ್ ನಿಯಂತ್ರಕವನ್ನು ಮರುಪ್ರಾರಂಭಿಸಿ ಹತ್ತು ಡಾಲರ್ ಬಜೆಟ್ ವಿರುದ್ಧ ಹನ್ನೆರಡು threads ಒಂದೇ ಬಾರಿ ಓಡಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Durable Reservations",
    "headingKn": "Durable ಕಾಯ್ದಿರಿಸುವಿಕೆಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">reserved plus committed spend never passes the budget</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">reserve</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">before dispatch</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">settle</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">actual cost</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">database</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">atomic write</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">kill switch</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">stored</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">reserved plus committed spend never passes the budget</text></svg>",
    "captionEn": "Reserve before the call, settle after, and keep both in a database.",
    "captionKn": "ಕರೆಗೆ ಮೊದಲು ಕಾಯ್ದಿರಿಸಿ, ನಂತರ ಇತ್ಯರ್ಥ ಮಾಡಿ, ಎರಡನ್ನೂ ಡೇಟಾಬೇಸ್‌ನಲ್ಲಿ ಇಡಿ."
   }
  },
  {
   "type": "table",
   "data": {
    "captionEn": "Tables and rules",
    "captionKn": "ಕೋಷ್ಟಕಗಳು ಮತ್ತು ನಿಯಮಗಳು",
    "rows": "Item|Detail\nbudgets table|scope, limit in micro-dollars, stopped flag\nactions table|action id, scope, reserved, actual, status\nused capacity|settled actual cost plus unsettled reservations\nrounding|reservations round up to the next micro-dollar\nconcurrency test|12 threads, 3.00 each, 10.00 budget"
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building and Testing the Ideas",
    "textKn": "ಕಲ್ಪನೆಗಳನ್ನು ನಿರ್ಮಿಸಿ ಪರೀಕ್ಷಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cg_3.py",
    "headingEn": "The durable governor",
    "headingKn": "Durable ನಿಯಂತ್ರಕ",
    "descEn": "DurableGovernor.reserve checks the balance and inserts a reservation inside BEGIN IMMEDIATE, settle records the actual cost, stop sets the flag and ledger reports committed, reserved and available.",
    "descKn": "DurableGovernor.reserve ಉಳಿಕೆ ಪರಿಶೀಲಿಸಿ BEGIN IMMEDIATE ಒಳಗೆ ಕಾಯ್ದಿರಿಸುವಿಕೆ ಸೇರಿಸುತ್ತದೆ, settle ನಿಜ ವೆಚ್ಚ ದಾಖಲಿಸುತ್ತದೆ, stop ಫ್ಲಾಗ್ ಹೊಂದಿಸುತ್ತದೆ ಮತ್ತು ledger ಬದ್ಧ, ಕಾಯ್ದಿರಿಸಿದ ಮತ್ತು ಲಭ್ಯ ವರದಿ ಮಾಡುತ್ತದೆ.",
    "code": "SCALE = Decimal(\"1000000\")\r\n\r\n\r\ndef micro(amount):\r\n    v = Decimal(amount)\r\n    if not v.is_finite() or v < 0:\r\n        raise ValueError(\"amount must be finite and nonnegative\")\r\n    return int((v * SCALE).to_integral_value(rounding=ROUND_CEILING))\r\n\r\n\r\ndef dollars(m):\r\n    return Decimal(m) / SCALE\r\n\r\n\r\nclass BudgetDenied(Exception):\r\n    pass\r\n\r\n\r\nclass DurableGovernor:\r\n    def __init__(self, path):\r\n        self.path = str(path)\r\n        with self.conn() as db:\r\n            db.execute(\"CREATE TABLE IF NOT EXISTS budgets (scope TEXT PRIMARY KEY, limit_micro INTEGER NOT NULL, stopped INTEGER NOT NULL DEFAULT 0)\")\r\n            db.execute(\"CREATE TABLE IF NOT EXISTS actions (action_id TEXT PRIMARY KEY, scope TEXT NOT NULL, reserved_micro INTEGER NOT NULL, actual_micro INTEGER, status TEXT NOT NULL)\")\r\n\r\n    def connect(self):\r\n        return sqlite3.connect(self.path, timeout=10, isolation_level=None)\r\n\r\n    @contextlib.contextmanager\r\n    def conn(self):\r\n        c = self.connect()\r\n        try:\r\n            yield c\r\n        finally:\r\n            c.close()\r\n\r\n    def create_budget(self, scope, limit):\r\n        with self.conn() as db:\r\n            db.execute(\"INSERT OR IGNORE INTO budgets (scope, limit_micro) VALUES (?, ?)\", (scope, micro(limit)))\r\n\r\n    def _used(self, db, scope):\r\n        row = db.execute(\"SELECT COALESCE(SUM(CASE WHEN status = 'settled' THEN actual_micro ELSE reserved_micro END), 0) FROM actions WHERE scope = ?\", (scope,)).fetchone()\r\n        return row[0]\r\n\r\n    def reserve(self, action_id, scope, maximum):\r\n        req = micro(maximum)\r\n        db = self.connect()\r\n        try:\r\n            db.execute(\"BEGIN IMMEDIATE\")\r\n            prior = db.execute(\"SELECT scope, reserved_micro, status FROM actions WHERE action_id = ?\", (action_id,)).fetchone()\r\n            if prior:\r\n                if prior[0] != scope or prior[1] != req:\r\n                    raise BudgetDenied(\"action id reused with different parameters\")\r\n                db.execute(\"COMMIT\")\r\n                return \"already \" + prior[2]\r\n            b = db.execute(\"SELECT limit_micro, stopped FROM budgets WHERE scope = ?\", (scope,)).fetchone()\r\n            if b is None:\r\n                raise BudgetDenied(\"unknown budget scope\")\r\n            if b[1]:\r\n                raise BudgetDenied(\"kill switch active\")\r\n            if self._used(db, scope) + req > b[0]:\r\n                raise BudgetDenied(\"budget exhausted\")\r\n            db.execute(\"INSERT INTO actions VALUES (?, ?, ?, NULL, 'reserved')\", (action_id, scope, req))\r\n            db.execute(\"COMMIT\")\r\n            return \"reserved\"\r\n        except Exception:\r\n            try:\r\n                db.execute(\"ROLLBACK\")\r\n            except sqlite3.OperationalError:\r\n                pass\r\n            raise\r\n        finally:\r\n            db.close()\r\n\r\n    def settle(self, action_id, actual):\r\n        act = micro(actual)\r\n        with self.conn() as db:\r\n            db.execute(\"BEGIN IMMEDIATE\")\r\n            row = db.execute(\"SELECT reserved_micro, status FROM actions WHERE action_id = ?\", (action_id,)).fetchone()\r\n            if row is None:\r\n                db.execute(\"ROLLBACK\")\r\n                raise KeyError(action_id)\r\n            if row[1] == \"settled\":\r\n                db.execute(\"COMMIT\")\r\n                return \"already settled\"\r\n            status = \"settled\" if act <= row[0] else \"uncertain\"\r\n            db.execute(\"UPDATE actions SET actual_micro = ?, status = ? WHERE action_id = ?\", (act, status, action_id))\r\n            db.execute(\"COMMIT\")\r\n            return status\r\n\r\n    def stop(self, scope):\r\n        with self.conn() as db:\r\n            db.execute(\"UPDATE budgets SET stopped = 1 WHERE scope = ?\", (scope,))\r\n\r\n    def ledger(self, scope):\r\n        with self.conn() as db:\r\n            limit, stopped = db.execute(\"SELECT limit_micro, stopped FROM budgets WHERE scope = ?\", (scope,)).fetchone()\r\n            committed = db.execute(\"SELECT COALESCE(SUM(actual_micro), 0) FROM actions WHERE scope = ? AND status = 'settled'\", (scope,)).fetchone()[0]\r\n            reserved = db.execute(\"SELECT COALESCE(SUM(reserved_micro), 0) FROM actions WHERE scope = ? AND status != 'settled'\", (scope,)).fetchone()[0]\r\n        return {\"limit\": dollars(limit), \"committed\": dollars(committed), \"reserved\": dollars(reserved), \"available\": dollars(limit - committed - reserved), \"stopped\": bool(stopped)}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cg_3.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the lesson reservation sequence, retries, a restart, an overrun and a twelve-thread race.",
    "descKn": "main() lesson ಕಾಯ್ದಿರಿಸುವ ಅನುಕ್ರಮ, ಮರುಪ್ರಯತ್ನ, ಮರುಪ್ರಾರಂಭ, ಮೀರುವಿಕೆ ಮತ್ತು ಹನ್ನೆರಡು-thread ಓಟ ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    with tempfile.TemporaryDirectory() as d:\r\n        section(\"1. Genuinely running: the lesson sequence of reservations, settlement and the kill switch\")\r\n        g = DurableGovernor(Path(d) / \"a.db\")\r\n        g.create_budget(\"task-42\", \"10\")\r\n        print(\"reserve A 6.00:\", g.reserve(\"A\", \"task-42\", \"6.00\"))\r\n        try:\r\n            g.reserve(\"B\", \"task-42\", \"5.00\")\r\n        except BudgetDenied as e:\r\n            print(\"reserve B 5.00 denied:\", e)\r\n        print(\"settle A at 4.00:\", g.settle(\"A\", \"4.00\"))\r\n        print(\"reserve B 5.00 after settlement:\", g.reserve(\"B\", \"task-42\", \"5.00\"))\r\n        print(\"ledger:\", g.ledger(\"task-42\"))\r\n        g.stop(\"task-42\")\r\n        try:\r\n            g.reserve(\"C\", \"task-42\", \"1.00\")\r\n        except BudgetDenied as e:\r\n            print(\"reserve C denied:\", e)\r\n        print(\"outstanding reservations count against the budget, so the 5.00 request was refused while 6.00 was still reserved and accepted once the settlement released 2.00, and after the stop the remaining 1.00 could not be used; the figures match the lesson example\")\r\n\r\n        section(\"2. Genuinely running: idempotent retries and a reused action id\")\r\n        g2 = DurableGovernor(Path(d) / \"b.db\")\r\n        g2.create_budget(\"t\", \"10\")\r\n        print(\"first call:\", g2.reserve(\"act-1\", \"t\", \"2.00\"), \"| retry of the same call:\", g2.reserve(\"act-1\", \"t\", \"2.00\"))\r\n        print(\"reserved total after both:\", g2.ledger(\"t\")[\"reserved\"])\r\n        try:\r\n            g2.reserve(\"act-1\", \"t\", \"5.00\")\r\n        except BudgetDenied as e:\r\n            print(\"same id with a different amount:\", e)\r\n        print(\"a retried reservation does not reserve twice and an id reused with different parameters is refused, which protects the local ledger; it does not make the outside provider call idempotent\")\r\n\r\n        section(\"3. Genuinely running: restart safety\")\r\n        p = Path(d) / \"c.db\"\r\n        g3 = DurableGovernor(p)\r\n        g3.create_budget(\"t\", \"10\")\r\n        g3.reserve(\"x\", \"t\", \"6\")\r\n        g3.settle(\"x\", \"6\")\r\n        g4 = DurableGovernor(p)\r\n        try:\r\n            g4.reserve(\"y\", \"t\", \"5\")\r\n        except BudgetDenied as e:\r\n            print(\"new governor object on the same file:\", e, \"| ledger:\", g4.ledger(\"t\"))\r\n        print(\"a worker restart creates a new object but reads the same file, so the six dollars already spent still count and the budget is not reset to ten\")\r\n\r\n        section(\"4. Genuinely running: an actual cost above the reservation\")\r\n        g5 = DurableGovernor(Path(d) / \"d.db\")\r\n        g5.create_budget(\"t\", \"10\")\r\n        g5.reserve(\"z\", \"t\", \"3\")\r\n        print(\"settle at 4.00 against a 3.00 reservation:\", g5.settle(\"z\", \"4.00\"), \"| ledger:\", g5.ledger(\"t\"))\r\n        print(\"the lab marks an overrun as uncertain and keeps the reserved amount counted, which is conservative; a real system must record the actual liability, flag the discrepancy and stop further spending, because it cannot refuse a charge the provider has already made\")\r\n\r\n        section(\"5. Genuinely running: concurrent reservations from threads\")\r\n        g6 = DurableGovernor(Path(d) / \"e.db\")\r\n        g6.create_budget(\"t\", \"10\")\r\n        results = []\r\n        lock = threading.Lock()\r\n\r\n        def worker(i):\r\n            try:\r\n                r = g6.reserve(f\"w{i}\", \"t\", \"3\")\r\n            except BudgetDenied as e:\r\n                r = f\"denied: {e}\"\r\n            with lock:\r\n                results.append(r)\r\n\r\n        threads = [threading.Thread(target=worker, args=(i,)) for i in range(12)]\r\n        for t in threads:\r\n            t.start()\r\n        for t in threads:\r\n            t.join()\r\n        ok = sum(1 for r in results if r == \"reserved\")\r\n        print(f\"12 threads asked for 3.00 each from a 10.00 budget: reserved {ok}, denied {len(results) - ok} | reserved total {g6.ledger('t')['reserved']} | within the limit: {g6.ledger('t')['reserved'] <= 10}\")\r\n        print(\"exactly three reservations fit and the rest were refused, because each one checked the balance and wrote inside a write transaction that SQLite serialises; this shows one database file on one machine and says nothing about a distributed deployment\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the lesson sequence of reservations, settlement and the kill switch ---\nreserve A 6.00: reserved\nreserve B 5.00 denied: budget exhausted\nsettle A at 4.00: settled\nreserve B 5.00 after settlement: reserved\nledger: {'limit': Decimal('10'), 'committed': Decimal('4'), 'reserved': Decimal('5'), 'available': Decimal('1'), 'stopped': False}\nreserve C denied: kill switch active\noutstanding reservations count against the budget, so the 5.00 request was refused while 6.00 was still reserved and accepted once the settlement released 2.00, and after the stop the remaining 1.00 could not be used; the figures match the lesson example\n\n--- 2. Genuinely running: idempotent retries and a reused action id ---\nfirst call: reserved | retry of the same call: already reserved\nreserved total after both: 2\nsame id with a different amount: action id reused with different parameters\na retried reservation does not reserve twice and an id reused with different parameters is refused, which protects the local ledger; it does not make the outside provider call idempotent\n\n--- 3. Genuinely running: restart safety ---\nnew governor object on the same file: budget exhausted | ledger: {'limit': Decimal('10'), 'committed': Decimal('6'), 'reserved': Decimal('0'), 'available': Decimal('4'), 'stopped': False}\na worker restart creates a new object but reads the same file, so the six dollars already spent still count and the budget is not reset to ten\n\n--- 4. Genuinely running: an actual cost above the reservation ---\nsettle at 4.00 against a 3.00 reservation: uncertain | ledger: {'limit': Decimal('10'), 'committed': Decimal('0'), 'reserved': Decimal('3'), 'available': Decimal('7'), 'stopped': False}\nthe lab marks an overrun as uncertain and keeps the reserved amount counted, which is conservative; a real system must record the actual liability, flag the discrepancy and stop further spending, because it cannot refuse a charge the provider has already made\n\n--- 5. Genuinely running: concurrent reservations from threads ---\n12 threads asked for 3.00 each from a 10.00 budget: reserved 3, denied 9 | reserved total 9 | within the limit: True\nexactly three reservations fit and the rest were refused, because each one checked the balance and wrote inside a write transaction that SQLite serialises; this shows one database file on one machine and says nothing about a distributed deployment"
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Experiment Walkthrough",
    "textKn": "Experiment ನಡೆದಾಟ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 1: The lesson sequence of reservations, settlement and the kill switch",
    "headingKn": "ಪ್ರಯೋಗ 1: The lesson sequence of reservations, settlement and the kill switch",
    "bodyEn": "What it ran: The lesson sequence of reservations, settlement and the kill switch. What the lab concluded: outstanding reservations count against the budget, so the 5.00 request was refused while 6.00 was still reserved and accepted once the settlement released 2.00, and after the stop the remaining 1.00 could not be used; the figures match the lesson example",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The lesson sequence of reservations, settlement and the kill switch. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): outstanding reservations count against the budget, so the 5.00 request was refused while 6.00 was still reserved and accepted once the settlement released 2.00, and after the stop the remaining 1.00 could not be used; the figures match the lesson example"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: the lesson sequence of reservations, settlement and the kill switch ---\nreserve A 6.00: reserved\nreserve B 5.00 denied: budget exhausted\nsettle A at 4.00: settled\nreserve B 5.00 after settlement: reserved\nledger: {'limit': Decimal('10'), 'committed': Decimal('4'), 'reserved': Decimal('5'), 'available': Decimal('1'), 'stopped': False}\nreserve C denied: kill switch active"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Idempotent retries and a reused action id",
    "headingKn": "ಪ್ರಯೋಗ 2: Idempotent retries and a reused action id",
    "bodyEn": "What it ran: Idempotent retries and a reused action id. What the lab concluded: a retried reservation does not reserve twice and an id reused with different parameters is refused, which protects the local ledger; it does not make the outside provider call idempotent",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Idempotent retries and a reused action id. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a retried reservation does not reserve twice and an id reused with different parameters is refused, which protects the local ledger; it does not make the outside provider call idempotent"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: idempotent retries and a reused action id ---\nfirst call: reserved | retry of the same call: already reserved\nreserved total after both: 2\nsame id with a different amount: action id reused with different parameters"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Restart safety",
    "headingKn": "ಪ್ರಯೋಗ 3: Restart safety",
    "bodyEn": "What it ran: Restart safety. What the lab concluded: a worker restart creates a new object but reads the same file, so the six dollars already spent still count and the budget is not reset to ten",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Restart safety. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a worker restart creates a new object but reads the same file, so the six dollars already spent still count and the budget is not reset to ten"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: restart safety ---\nnew governor object on the same file: budget exhausted | ledger: {'limit': Decimal('10'), 'committed': Decimal('6'), 'reserved': Decimal('0'), 'available': Decimal('4'), 'stopped': False}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: An actual cost above the reservation",
    "headingKn": "ಪ್ರಯೋಗ 4: An actual cost above the reservation",
    "bodyEn": "What it ran: An actual cost above the reservation. What the lab concluded: the lab marks an overrun as uncertain and keeps the reserved amount counted, which is conservative; a real system must record the actual liability, flag the discrepancy and stop further spending, because it cannot refuse a charge the provider has already made",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: An actual cost above the reservation. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the lab marks an overrun as uncertain and keeps the reserved amount counted, which is conservative; a real system must record the actual liability, flag the discrepancy and stop further spending, because it cannot refuse a charge the provider has already made"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: an actual cost above the reservation ---\nsettle at 4.00 against a 3.00 reservation: uncertain | ledger: {'limit': Decimal('10'), 'committed': Decimal('0'), 'reserved': Decimal('3'), 'available': Decimal('7'), 'stopped': False}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Concurrent reservations from threads",
    "headingKn": "ಪ್ರಯೋಗ 5: Concurrent reservations from threads",
    "bodyEn": "What it ran: Concurrent reservations from threads. What the lab concluded: exactly three reservations fit and the rest were refused, because each one checked the balance and wrote inside a write transaction that SQLite serialises; this shows one database file on one machine and says nothing about a distributed deployment",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Concurrent reservations from threads. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): exactly three reservations fit and the rest were refused, because each one checked the balance and wrote inside a write transaction that SQLite serialises; this shows one database file on one machine and says nothing about a distributed deployment"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: concurrent reservations from threads ---\n12 threads asked for 3.00 each from a 10.00 budget: reserved 3, denied 9 | reserved total 9 | within the limit: True"
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Reading the Verified Output",
    "textKn": "ಪರಿಶೀಲಿತ Output ಓದುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Lesson Sequence and Retries",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Lesson ಅನುಕ್ರಮ ಮತ್ತು ಮರುಪ್ರಯತ್ನಗಳು",
    "bodyEn": "Section 1: reserve A of 6.00 was reserved, B of 5.00 was denied with budget exhausted, A settled at 4.00, B was then reserved, the ledger showed limit 10, committed 4, reserved 5, available 1, and after the stop reserve C was denied with kill switch active. Section 2: a retried reservation returned already reserved with 2 reserved in total, and the same id with 5.00 was refused as reused with different parameters.",
    "bodyKn": "ವಿಭಾಗ 1: 6.00 ರ ಕಾಯ್ದಿರಿಸುವಿಕೆ A ಕಾಯ್ದಿರಿಸಲ್ಪಟ್ಟಿತು, 5.00 ರ B budget exhausted ನೊಂದಿಗೆ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು, A 4.00 ರಲ್ಲಿ ಇತ್ಯರ್ಥವಾಯಿತು, ನಂತರ B ಕಾಯ್ದಿರಿಸಲ್ಪಟ್ಟಿತು, ಲೆಡ್ಜರ್ ಮಿತಿ 10, ಬದ್ಧ 4, ಕಾಯ್ದಿರಿಸಿದ 5, ಲಭ್ಯ 1 ತೋರಿಸಿತು, ಮತ್ತು stop ನಂತರ C kill switch active ನೊಂದಿಗೆ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 2: ಮರುಪ್ರಯತ್ನಿಸಿದ ಕಾಯ್ದಿರಿಸುವಿಕೆ already reserved ಹಿಂತಿರುಗಿಸಿ ಒಟ್ಟು 2 ಕಾಯ್ದಿರಿಸಿತು, ಮತ್ತು 5.00 ಜೊತೆ ಅದೇ id ಬೇರೆ ನಿಯತಾಂಕಗಳೊಂದಿಗೆ ಮರುಬಳಕೆ ಎಂದು ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Restart, Overrun and Threads",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮರುಪ್ರಾರಂಭ, ಮೀರುವಿಕೆ ಮತ್ತು Threads",
    "bodyEn": "Section 3: a new governor object on the same file refused a 5.00 reservation with budget exhausted and showed committed 6 and available 4. Section 4: settling a 3.00 reservation at 4.00 returned uncertain, with 3 still reserved and 7 available. Section 5: twelve threads asking for 3.00 each from 10.00 reserved 3, denied 9, reserved a total of 9 and stayed within the limit.",
    "bodyKn": "ವಿಭಾಗ 3: ಅದೇ ಫೈಲ್‌ನಲ್ಲಿ ಹೊಸ ನಿಯಂತ್ರಕ ವಸ್ತು 5.00 ಕಾಯ್ದಿರಿಸುವಿಕೆಯನ್ನು budget exhausted ನೊಂದಿಗೆ ನಿರಾಕರಿಸಿ ಬದ್ಧ 6 ಮತ್ತು ಲಭ್ಯ 4 ತೋರಿಸಿತು. ವಿಭಾಗ 4: 3.00 ಕಾಯ್ದಿರಿಸುವಿಕೆಯನ್ನು 4.00 ರಲ್ಲಿ ಇತ್ಯರ್ಥ ಮಾಡಿದಾಗ uncertain ಹಿಂತಿರುಗಿತು, 3 ಇನ್ನೂ ಕಾಯ್ದಿರಿಸಿದ್ದು ಮತ್ತು 7 ಲಭ್ಯ. ವಿಭಾಗ 5: 10.00 ರಿಂದ ತಲಾ 3.00 ಕೇಳಿದ ಹನ್ನೆರಡು threads 3 ಕಾಯ್ದಿರಿಸಿ, 9 ನಿರಾಕರಿಸಿ, ಒಟ್ಟು 9 ಕಾಯ್ದಿರಿಸಿ ಮಿತಿಯೊಳಗೇ ಉಳಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Spending authority must be reserved before the call and stored where every worker sees it, because an in-memory balance lets simultaneous requests each believe they have the whole budget.",
    "bodyKn": "ಖರ್ಚು ಅಧಿಕಾರವನ್ನು ಕರೆಗೆ ಮೊದಲು ಕಾಯ್ದಿರಿಸಿ ಪ್ರತಿ worker ಕಾಣುವ ಸ್ಥಳದಲ್ಲಿ ಸಂಗ್ರಹಿಸಬೇಕು, ಏಕೆಂದರೆ ಮೆಮೊರಿ ಉಳಿಕೆ ಏಕಕಾಲದ ವಿನಂತಿಗಳು ತಮಗೆ ಇಡೀ ಬಜೆಟ್ ಇದೆ ಎಂದು ನಂಬಲು ಬಿಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"an overrun settlement is just refused.\" The provider has already charged, so the lab keeps it as uncertain and a real system must record the real liability.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಮೀರಿದ ಇತ್ಯರ್ಥ ಕೇವಲ ನಿರಾಕರಿಸಲ್ಪಡುತ್ತದೆ.\" ಪೂರೈಕೆದಾರ ಈಗಾಗಲೇ ಶುಲ್ಕ ವಿಧಿಸಿದ್ದಾರೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಅದನ್ನು uncertain ಆಗಿ ಇಡುತ್ತದೆ ಮತ್ತು ನಿಜ ವ್ಯವಸ್ಥೆ ನಿಜ ಹೊಣೆಗಾರಿಕೆ ದಾಖಲಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Reservation: authority to spend set aside before a call. Settlement: replacing a reservation with the actual cost. Idempotent: a repeat has no extra effect. Micro-dollar: one millionth of a dollar.",
    "bodyKn": "Reservation: ಕರೆಗೆ ಮೊದಲು ಮೀಸಲಿಟ್ಟ ಖರ್ಚು ಅಧಿಕಾರ. Settlement: ಕಾಯ್ದಿರಿಸುವಿಕೆಯನ್ನು ನಿಜ ವೆಚ್ಚದಿಂದ ಬದಲಿಸುವುದು. Idempotent: ಪುನರಾವರ್ತನೆಗೆ ಹೆಚ್ಚುವರಿ ಪರಿಣಾಮ ಇಲ್ಲ. Micro-dollar: ಡಾಲರ್‌ನ ಹತ್ತು ಲಕ್ಷದ ಒಂದು ಭಾಗ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Outstanding reservations blocked a 5.00 request until A settled. 2) A retried reservation did not double up. 3) A restart kept the 6.00 spent. 4) An overrun was held as uncertain. 5) Twelve threads reserved 9.00 of 10.00 and no more.",
    "bodyKn": "1) A ಇತ್ಯರ್ಥವಾಗುವವರೆಗೆ ಬಾಕಿ ಕಾಯ್ದಿರಿಸುವಿಕೆಗಳು 5.00 ವಿನಂತಿ ತಡೆದವು. 2) ಮರುಪ್ರಯತ್ನಿಸಿದ ಕಾಯ್ದಿರಿಸುವಿಕೆ ದ್ವಿಗುಣವಾಗಲಿಲ್ಲ. 3) ಮರುಪ್ರಾರಂಭ ಖರ್ಚಾದ 6.00 ಉಳಿಸಿತು. 4) ಮೀರುವಿಕೆ uncertain ಆಗಿ ಹಿಡಿಯಲ್ಪಟ್ಟಿತು. 5) ಹನ್ನೆರಡು threads 10.00 ರಲ್ಲಿ 9.00 ಕಾಯ್ದಿರಿಸಿ ಹೆಚ್ಚಲ್ಲ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Try It Yourself",
    "textKn": "ನೀವೇ ಪ್ರಯತ್ನಿಸಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Run the lab",
    "headingKn": "ಲ್ಯಾಬ್ ಓಡಿಸಿ",
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B cg_3.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B cg_3.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B cg_3.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B cg_3.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why was reserve B of 5.00 denied while A held 6.00 of a 10.00 budget?",
      "qKn": "10.00 ಬಜೆಟ್‌ನಲ್ಲಿ A 6.00 ಹಿಡಿದಿದ್ದಾಗ 5.00 ರ ಕಾಯ್ದಿರಿಸುವಿಕೆ B ಏಕೆ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು?",
      "opts": [
       "Outstanding reservations count against the budget",
       "B was too small",
       "The kill switch was set",
       "A was settled"
      ],
      "optsKn": [
       "ಬಾಕಿ ಕಾಯ್ದಿರಿಸುವಿಕೆಗಳು ಬಜೆಟ್ ವಿರುದ್ಧ ಎಣಿಕೆಯಾಗುತ್ತವೆ",
       "B ತುಂಬಾ ಚಿಕ್ಕದಾಗಿತ್ತು",
       "kill switch ಹೊಂದಿಸಲ್ಪಟ್ಟಿತ್ತು",
       "A ಇತ್ಯರ್ಥವಾಗಿತ್ತು"
      ],
      "correct": 0
     },
     {
      "q": "How much was available after A settled at 4.00 and B reserved 5.00?",
      "qKn": "A 4.00 ರಲ್ಲಿ ಇತ್ಯರ್ಥವಾಗಿ B 5.00 ಕಾಯ್ದಿರಿಸಿದ ನಂತರ ಎಷ್ಟು ಲಭ್ಯ?",
      "opts": [
       "1",
       "4",
       "5",
       "10"
      ],
      "optsKn": [
       "1",
       "4",
       "5",
       "10"
      ],
      "correct": 0
     },
     {
      "q": "How many of 12 threads reserved 3.00 from a 10.00 budget?",
      "qKn": "10.00 ಬಜೆಟ್‌ನಿಂದ 12 threads ಗಳಲ್ಲಿ ಎಷ್ಟು 3.00 ಕಾಯ್ದಿರಿಸಿದವು?",
      "opts": [
       "3",
       "4",
       "12",
       "9"
      ],
      "optsKn": [
       "3",
       "4",
       "12",
       "9"
      ],
      "correct": 0
     },
     {
      "q": "What happened when a settlement exceeded the reservation?",
      "qKn": "ಇತ್ಯರ್ಥ ಕಾಯ್ದಿರಿಸುವಿಕೆಯನ್ನು ಮೀರಿದಾಗ ಏನಾಯಿತು?",
      "opts": [
       "It was marked uncertain and the reservation stayed counted",
       "It was silently accepted",
       "The budget doubled",
       "The database was deleted"
      ],
      "optsKn": [
       "ಅದು uncertain ಎಂದು ಗುರುತಿಸಲ್ಪಟ್ಟು ಕಾಯ್ದಿರಿಸುವಿಕೆ ಎಣಿಕೆಯಲ್ಲೇ ಉಳಿಯಿತು",
       "ಅದು ಮೌನವಾಗಿ ಸ್ವೀಕರಿಸಲ್ಪಟ್ಟಿತು",
       "ಬಜೆಟ್ ದ್ವಿಗುಣವಾಯಿತು",
       "ಡೇಟಾಬೇಸ್ ಅಳಿಸಲ್ಪಟ್ಟಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What does the concurrency result not show?",
      "qKn": "concurrency ಫಲಿತಾಂಶ ಏನನ್ನು ತೋರಿಸುವುದಿಲ್ಲ?",
      "opts": [
       "Behavior across several machines or a distributed deployment",
       "That SQLite serialises writers",
       "That 9.00 was reserved",
       "That the limit held"
      ],
      "optsKn": [
       "ಹಲವು ಯಂತ್ರಗಳು ಅಥವಾ ವಿತರಿತ deployment ನಲ್ಲಿ ವರ್ತನೆ",
       "SQLite ಬರಹಗಾರರನ್ನು ಅನುಕ್ರಮಗೊಳಿಸುತ್ತದೆ ಎಂದು",
       "9.00 ಕಾಯ್ದಿರಿಸಲ್ಪಟ್ಟಿತು ಎಂದು",
       "ಮಿತಿ ಉಳಿಯಿತು ಎಂದು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
