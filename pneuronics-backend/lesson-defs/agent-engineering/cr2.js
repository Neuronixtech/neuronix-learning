module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215bc",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Checkpoints and Rollback (Part 2 of 3) — The Engine and Crash Matrix",
 "titleKn": "Checkpoints ಮತ್ತು Rollback (ಭಾಗ 2 / 3) — Engine ಮತ್ತು Crash ಮ್ಯಾಟ್ರಿಕ್ಸ್",
 "desc": "Run the four scenarios, a naive engine, a crash at every boundary and a conditional rollback.",
 "descKn": "ನಾಲ್ಕು ಸನ್ನಿವೇಶ, ನೈವ್ engine, ಪ್ರತಿ ಗಡಿಯಲ್ಲಿ crash ಮತ್ತು ಷರತ್ತಿನ rollback ಓಡಿಸಿ.",
 "objectives": [
  "Save intent before acting.",
  "Keep a ledger of operations.",
  "Verify against the target.",
  "Crash at every boundary.",
  "Roll back only if unchanged."
 ],
 "objectivesKn": [
  "ಕಾರ್ಯದ ಮೊದಲು ಉದ್ದೇಶ ಉಳಿಸಿ.",
  "operations ಲೆಡ್ಜರ್ ಇಡಿ.",
  "ಗುರಿಯ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿ.",
  "ಪ್ರತಿ ಗಡಿಯಲ್ಲಿ crash ಮಾಡಿ.",
  "ಬದಲಾಗದಿದ್ದರೆ ಮಾತ್ರ rollback ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Checkpoints and Rollback (Part 2 of 3)",
    "textKn": "Checkpoints ಮತ್ತು Rollback (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: a checkpointed inventory engine with an idempotency ledger, an atomic precondition, verification and conditional rollback, the four scenarios, crash injection at every boundary, a naive engine, a changed-parameters conflict and six unit tests that are run. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind checkpoints and rollback (a legal-move state machine, durable checkpoints with a version check, leases and fencing tokens, an idempotency ledger, atomic preconditions, conditional rollback, crash injection at every boundary, a SAGA with durable compensation and a hash-chained audit log), not the real software, and one SQLite file plays both the workflow store and the target system in the engine lab, the provider is a table or dictionary, the clock is a number the lab chooses and nothing real is changed, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation and the expected outputs were produced by running them. The lesson Part 3 said it had executed its own example, but that file and its output were not supplied, so no figure from it is reused here. The lesson mentions of eventual consistency, SAGA in production and the EU AI Act Article 14 are conceptual or cited and were not run. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: idempotency ಲೆಡ್ಜರ್, ಪರಮಾಣು ಪೂರ್ವಷರತ್ತು, ಪರಿಶೀಲನೆ ಮತ್ತು ಷರತ್ತಿನ rollback ಇರುವ checkpointed inventory engine, ನಾಲ್ಕು ಸನ್ನಿವೇಶಗಳು, ಪ್ರತಿ ಗಡಿಯಲ್ಲಿ crash ಚುಚ್ಚುವಿಕೆ, ನೈವ್ engine, ಬದಲಾದ-ನಿಯತಾಂಕ conflict ಮತ್ತು ಓಡಿಸಿದ ಆರು unit ಪರೀಕ್ಷೆಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು checkpoints ಮತ್ತು rollback (ಕಾನೂನುಬದ್ಧ-ಚಲನೆ ಸ್ಥಿತಿ ಯಂತ್ರ, ಆವೃತ್ತಿ ಪರಿಶೀಲನೆ ಇರುವ ಸ್ಥಿರ checkpoints, leases ಮತ್ತು fencing tokens, idempotency ಲೆಡ್ಜರ್, ಪರಮಾಣು ಪೂರ್ವಷರತ್ತುಗಳು, ಷರತ್ತಿನ rollback, ಪ್ರತಿ ಗಡಿಯಲ್ಲಿ crash ಚುಚ್ಚುವಿಕೆ, ಸ್ಥಿರ ಪರಿಹಾರ ಇರುವ SAGA ಮತ್ತು hash-ಸರಪಳಿ ಲೆಕ್ಕಪರಿಶೋಧನೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು engine ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಒಂದು SQLite ಫೈಲ್ workflow ಸಂಗ್ರಹ ಮತ್ತು ಗುರಿ ವ್ಯವಸ್ಥೆ ಎರಡನ್ನೂ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ, ಪೂರೈಕೆದಾರ ಒಂದು ಟೇಬಲ್ ಅಥವಾ ನಿಘಂಟು, ಗಡಿಯಾರ ಲ್ಯಾಬ್ ಆಯ್ಕೆ ಮಾಡುವ ಸಂಖ್ಯೆ ಮತ್ತು ನಿಜವಾಗಿ ಏನೂ ಬದಲಾಗುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ ಮತ್ತು ನಿರೀಕ್ಷಿತ ಔಟ್‌ಪುಟ್ ಅನ್ನು ಅವನ್ನು ಓಡಿಸಿ ಪಡೆಯಲಾಗಿದೆ. lesson ನ ಭಾಗ 3 ತನ್ನದೇ ಉದಾಹರಣೆಯನ್ನು ಓಡಿಸಿದ್ದೇನೆ ಎಂದು ಹೇಳಿತು, ಆದರೆ ಆ ಫೈಲ್ ಮತ್ತು ಅದರ ಔಟ್‌ಪುಟ್ ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಅದರ ಯಾವ ಅಂಕಿಯನ್ನೂ ಇಲ್ಲಿ ಮರುಬಳಸಿಲ್ಲ. eventual consistency, ಉತ್ಪಾದನೆಯಲ್ಲಿ SAGA ಮತ್ತು EU AI Act Article 14 ಬಗ್ಗೆ lesson ನ ಉಲ್ಲೇಖಗಳು ಪರಿಕಲ್ಪನಾತ್ಮಕ ಅಥವಾ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಓಡಿಸಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Crash After the Side Effect, Before the Checkpoint",
    "textKn": "ಅಡ್ಡ ಪರಿಣಾಮದ ನಂತರ, Checkpoint ಮೊದಲು Crash",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "One Engine, Four Scenarios, Five Crash Points",
    "headingKn": "ಒಂದು Engine, ನಾಲ್ಕು ಸನ್ನಿವೇಶ, ಐದು Crash ಬಿಂದುಗಳು",
    "bodyEn": "The lesson text showed its engine only in fragments, so this part builds one in full. It saves IN_FLIGHT before it acts, applies the change in one transaction that checks the ledger and the starting quantity and version, verifies against the stock, and rolls back with a conditional update. It runs the four lesson scenarios, then crashes the worker at every boundary and resumes with a fresh engine, then runs a naive engine without a ledger for comparison.",
    "bodyKn": "lesson ಪಠ್ಯ ತನ್ನ engine ಅನ್ನು ತುಣುಕುಗಳಲ್ಲಿ ಮಾತ್ರ ತೋರಿಸಿತು, ಆದ್ದರಿಂದ ಈ ಭಾಗ ಒಂದನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ನಿರ್ಮಿಸುತ್ತದೆ. ಅದು ಕಾರ್ಯ ಮಾಡುವ ಮೊದಲು IN_FLIGHT ಉಳಿಸುತ್ತದೆ, ಲೆಡ್ಜರ್ ಮತ್ತು ಆರಂಭಿಕ ಪ್ರಮಾಣ ಹಾಗೂ ಆವೃತ್ತಿ ಪರಿಶೀಲಿಸುವ ಒಂದು ವಹಿವಾಟಿನಲ್ಲಿ ಬದಲಾವಣೆ ಅನ್ವಯಿಸುತ್ತದೆ, ದಾಸ್ತಾನಿನ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸುತ್ತದೆ ಮತ್ತು ಷರತ್ತಿನ ನವೀಕರಣದೊಂದಿಗೆ rollback ಮಾಡುತ್ತದೆ. ಅದು ನಾಲ್ಕು lesson ಸನ್ನಿವೇಶಗಳನ್ನು ಓಡಿಸಿ, ನಂತರ ಪ್ರತಿ ಗಡಿಯಲ್ಲಿ worker ಅನ್ನು crash ಮಾಡಿ ಹೊಸ engine ನೊಂದಿಗೆ ಮುಂದುವರಿಸಿ, ನಂತರ ಹೋಲಿಕೆಗೆ ಲೆಡ್ಜರ್ ಇಲ್ಲದ ನೈವ್ engine ಓಡಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Four Mechanisms",
    "headingKn": "ನಾಲ್ಕು ಕಾರ್ಯವಿಧಾನಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">four mechanisms, none a substitute for another</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">IN_FLIGHT</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">intent saved first</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">apply</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">ledger and condition</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">verify</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">read the target</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">rollback</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">only if unchanged</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">four mechanisms, none a substitute for another</text></svg>",
    "captionEn": "Key, precondition, verification and conditional rollback work together.",
    "captionKn": "key, ಪೂರ್ವಷರತ್ತು, ಪರಿಶೀಲನೆ ಮತ್ತು ಷರತ್ತಿನ rollback ಒಟ್ಟಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "captionEn": "The four scenarios",
    "captionKn": "ನಾಲ್ಕು ಸನ್ನಿವೇಶಗಳು",
    "rows": "Scenario|Result\nclean|COMMITTED, inventory 90, 1 operation\ncrash after the side effect|COMMITTED, inventory 90, still 1 operation\nwrong expected quantity|ABORTED, inventory 100, 0 operations\nforced verification failure|ROLLED_BACK, inventory 100"
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
    "filename": "cr_2.py",
    "headingEn": "The engine",
    "headingKn": "Engine",
    "descEn": "apply_with checks the ledger and the starting stock in one immediate transaction, verify reads the stock and the operation, rollback restores only when the stock still matches the operation, and run resumes from whatever state is stored.",
    "descKn": "apply_with ಲೆಡ್ಜರ್ ಮತ್ತು ಆರಂಭಿಕ ದಾಸ್ತಾನನ್ನು ಒಂದು immediate ವಹಿವಾಟಿನಲ್ಲಿ ಪರಿಶೀಲಿಸುತ್ತದೆ, verify ದಾಸ್ತಾನು ಮತ್ತು operation ಓದುತ್ತದೆ, rollback ದಾಸ್ತಾನು ಇನ್ನೂ operation ಗೆ ಹೊಂದಿದಾಗ ಮಾತ್ರ ಮರುಸ್ಥಾಪಿಸುತ್ತದೆ, ಮತ್ತು run ಸಂಗ್ರಹಿಸಿದ ಯಾವುದೇ ಸ್ಥಿತಿಯಿಂದ ಮುಂದುವರಿಯುತ್ತದೆ.",
    "code": "class Engine:\r\n    def __init__(self, path):\r\n        self.path = str(path)\r\n        with self.conn() as db:\r\n            db.executescript(\"\"\"\r\n            CREATE TABLE IF NOT EXISTS inventory (product_id TEXT PRIMARY KEY, quantity INTEGER NOT NULL, version INTEGER NOT NULL);\r\n            CREATE TABLE IF NOT EXISTS workflows (workflow_id TEXT PRIMARY KEY, state TEXT NOT NULL, version INTEGER NOT NULL, idem_key TEXT NOT NULL, product_id TEXT NOT NULL,\r\n              expected_qty INTEGER NOT NULL, expected_ver INTEGER NOT NULL, target_qty INTEGER NOT NULL);\r\n            CREATE TABLE IF NOT EXISTS checkpoints (workflow_id TEXT NOT NULL, version INTEGER NOT NULL, state TEXT NOT NULL, PRIMARY KEY (workflow_id, version));\r\n            CREATE TABLE IF NOT EXISTS operations (idem_key TEXT PRIMARY KEY, fp TEXT NOT NULL, status TEXT NOT NULL, product_id TEXT NOT NULL, before_qty INTEGER, after_qty INTEGER, after_ver INTEGER);\r\n            \"\"\")\r\n\r\n    @contextlib.contextmanager\r\n    def conn(self):\r\n        c = sqlite3.connect(self.path, timeout=10, isolation_level=None)\r\n        try:\r\n            yield c\r\n        finally:\r\n            c.close()\r\n\r\n    def seed(self, qty=100, ver=7):\r\n        with self.conn() as db:\r\n            db.execute(\"INSERT OR REPLACE INTO inventory VALUES ('SKU-1001', ?, ?)\", (qty, ver))\r\n\r\n    def inventory(self):\r\n        with self.conn() as db:\r\n            return db.execute(\"SELECT quantity, version FROM inventory WHERE product_id='SKU-1001'\").fetchone()\r\n\r\n    def external_change(self, new_qty):\r\n        with self.conn() as db:\r\n            db.execute(\"UPDATE inventory SET quantity=?, version=version+1 WHERE product_id='SKU-1001'\", (new_qty,))\r\n\r\n    def propose_and_approve(self, wid, expected_qty=100, expected_ver=7, target=90):\r\n        with self.conn() as db:\r\n            db.execute(\"BEGIN IMMEDIATE\")\r\n            db.execute(\"INSERT INTO workflows VALUES (?,?,0,?,?,?,?,?)\", (wid, \"APPROVED\", wid + \":inventory-adjustment\", \"SKU-1001\", expected_qty, expected_ver, target))\r\n            db.execute(\"INSERT INTO checkpoints VALUES (?,0,'APPROVED')\", (wid,))\r\n            db.execute(\"COMMIT\")\r\n\r\n    def wf(self, wid):\r\n        with self.conn() as db:\r\n            db.row_factory = sqlite3.Row\r\n            return dict(db.execute(\"SELECT * FROM workflows WHERE workflow_id=?\", (wid,)).fetchone())\r\n\r\n    def history(self, wid):\r\n        with self.conn() as db:\r\n            return db.execute(\"SELECT version, state FROM checkpoints WHERE workflow_id=? ORDER BY version\", (wid,)).fetchall()\r\n\r\n    def op_count(self):\r\n        with self.conn() as db:\r\n            return db.execute(\"SELECT COUNT(*) FROM operations\").fetchone()[0]\r\n\r\n    def op_status(self, wid):\r\n        with self.conn() as db:\r\n            row = db.execute(\"SELECT status FROM operations WHERE idem_key=?\", (wid + \":inventory-adjustment\",)).fetchone()\r\n        return row[0] if row else None\r\n\r\n    def transition(self, wid, new_state):\r\n        w = self.wf(wid)\r\n        if new_state not in ALLOWED.get(w[\"state\"], set()):\r\n            raise ValueError(f\"{w['state']} -> {new_state} is not allowed\")\r\n        with self.conn() as db:\r\n            db.execute(\"BEGIN IMMEDIATE\")\r\n            n = db.execute(\"UPDATE workflows SET state=?, version=? WHERE workflow_id=? AND version=?\", (new_state, w[\"version\"] + 1, wid, w[\"version\"])).rowcount\r\n            if n == 0:\r\n                db.execute(\"ROLLBACK\")\r\n                raise ValueError(\"stale workflow version\")\r\n            db.execute(\"INSERT INTO checkpoints VALUES (?,?,?)\", (wid, w[\"version\"] + 1, new_state))\r\n            db.execute(\"COMMIT\")\r\n\r\n    def apply_with(self, key, params):\r\n        fp = fingerprint(params)\r\n        with self.conn() as db:\r\n            db.execute(\"BEGIN IMMEDIATE\")\r\n            op = db.execute(\"SELECT fp, status FROM operations WHERE idem_key=?\", (key,)).fetchone()\r\n            if op:\r\n                db.execute(\"ROLLBACK\")\r\n                if op[0] != fp:\r\n                    raise ConflictError(\"same idempotency key, different parameters\")\r\n                return \"ALREADY_APPLIED\"\r\n            row = db.execute(\"SELECT quantity, version FROM inventory WHERE product_id=?\", (params[\"product_id\"],)).fetchone()\r\n            if row != (params[\"expected_qty\"], params[\"expected_ver\"]):\r\n                db.execute(\"ROLLBACK\")\r\n                return \"PRECONDITION_FAILED\"\r\n            n = db.execute(\"UPDATE inventory SET quantity=?, version=version+1 WHERE product_id=? AND quantity=? AND version=?\",\r\n                           (params[\"target_qty\"], params[\"product_id\"], params[\"expected_qty\"], params[\"expected_ver\"])).rowcount\r\n            if n != 1:\r\n                db.execute(\"ROLLBACK\")\r\n                return \"PRECONDITION_FAILED\"\r\n            db.execute(\"INSERT INTO operations VALUES (?,?,'APPLIED',?,?,?,?)\", (key, fp, params[\"product_id\"], params[\"expected_qty\"], params[\"target_qty\"], params[\"expected_ver\"] + 1))\r\n            db.execute(\"COMMIT\")\r\n            return \"APPLIED\"\r\n\r\n    def params(self, wid):\r\n        w = self.wf(wid)\r\n        return {k: w[k] for k in (\"product_id\", \"expected_qty\", \"expected_ver\", \"target_qty\")}\r\n\r\n    def apply_action(self, wid):\r\n        return self.apply_with(self.wf(wid)[\"idem_key\"], self.params(wid))\r\n\r\n    def verify(self, wid, force_fail=False):\r\n        if force_fail:\r\n            return False\r\n        w = self.wf(wid)\r\n        with self.conn() as db:\r\n            op = db.execute(\"SELECT status, after_qty, after_ver FROM operations WHERE idem_key=?\", (w[\"idem_key\"],)).fetchone()\r\n            inv = db.execute(\"SELECT quantity, version FROM inventory WHERE product_id=?\", (w[\"product_id\"],)).fetchone()\r\n        return op is not None and op[0] == \"APPLIED\" and inv == (w[\"target_qty\"], op[2])\r\n\r\n    def rollback(self, wid):\r\n        w = self.wf(wid)\r\n        with self.conn() as db:\r\n            db.execute(\"BEGIN IMMEDIATE\")\r\n            op = db.execute(\"SELECT status, before_qty, after_qty, after_ver FROM operations WHERE idem_key=?\", (w[\"idem_key\"],)).fetchone()\r\n            if op is not None and op[0] == \"ROLLED_BACK\":\r\n                db.execute(\"ROLLBACK\")\r\n                return \"ROLLED_BACK\"\r\n            if op is None or op[0] != \"APPLIED\":\r\n                db.execute(\"ROLLBACK\")\r\n                return \"ESCALATE\"\r\n            n = db.execute(\"UPDATE inventory SET quantity=?, version=version+1 WHERE product_id=? AND quantity=? AND version=?\", (op[1], w[\"product_id\"], op[2], op[3])).rowcount\r\n            if n != 1:\r\n                db.execute(\"ROLLBACK\")\r\n                return \"ESCALATE\"\r\n            db.execute(\"UPDATE operations SET status='ROLLED_BACK' WHERE idem_key=?\", (w[\"idem_key\"],))\r\n            db.execute(\"COMMIT\")\r\n            return \"ROLLED_BACK\"\r\n\r\n    def run(self, wid, crash_at=None, force_verify_fail=False, before_rollback=None):\r\n        def maybe(point):\r\n            if crash_at == point:\r\n                raise SimulatedCrash(point)\r\n        while True:\r\n            state = self.wf(wid)[\"state\"]\r\n            if state in (\"COMMITTED\", \"ROLLED_BACK\", \"ESCALATED\", \"ABORTED\"):\r\n                return state\r\n            if state == \"APPROVED\":\r\n                self.transition(wid, \"IN_FLIGHT\")\r\n                maybe(\"after_in_flight\")\r\n            elif state == \"IN_FLIGHT\":\r\n                r = self.apply_action(wid)\r\n                if r == \"PRECONDITION_FAILED\":\r\n                    self.transition(wid, \"ABORTED\")\r\n                    continue\r\n                maybe(\"after_apply\")\r\n                self.transition(wid, \"VERIFYING\")\r\n                maybe(\"after_verifying\")\r\n            elif state == \"VERIFYING\":\r\n                self.transition(wid, \"COMMITTED\" if self.verify(wid, force_verify_fail) else \"ROLLBACK_PENDING\")\r\n                maybe(\"after_rollback_pending\")\r\n            elif state == \"ROLLBACK_PENDING\":\r\n                if before_rollback:\r\n                    before_rollback(self)\r\n                    before_rollback = None\r\n                r = self.rollback(wid)\r\n                maybe(\"after_rollback\")\r\n                self.transition(wid, \"ROLLED_BACK\" if r == \"ROLLED_BACK\" else \"ESCALATED\")\r\n\r\n\r\nclass NaiveEngine(Engine):\r\n    \"\"\"Treats IN_FLIGHT as 'not done yet' and subtracts again: no ledger, no precondition.\"\"\"\r\n\r\n    def apply_action(self, wid):\r\n        with self.conn() as db:\r\n            db.execute(\"UPDATE inventory SET quantity=quantity-10, version=version+1 WHERE product_id='SKU-1001'\")\r\n        return \"APPLIED\"\r\n\r\n    def verify(self, wid, force_fail=False):\r\n        return True"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cr_2.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the four scenarios, the naive engine, the crash matrix, the key conflict, the conditional rollback and the unit tests.",
    "descKn": "main() ನಾಲ್ಕು ಸನ್ನಿವೇಶ, ನೈವ್ engine, crash ಮ್ಯಾಟ್ರಿಕ್ಸ್, key conflict, ಷರತ್ತಿನ rollback ಮತ್ತು unit ಪರೀಕ್ಷೆಗಳನ್ನು ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    with tempfile.TemporaryDirectory() as d:\r\n        section(\"1. Genuinely running: the four scenarios\")\r\n        for name in (\"clean\", \"crash\", \"precondition\", \"verify_failure\"):\r\n            e, result, crashed = scenario(d, name, f\"wf-{name}\")\r\n            print(f\"Scenario: {name}{' (worker crashed after the side effect, then a fresh engine resumed)' if crashed else ''}\")\r\n            print(f\"  Result: {result} | Inventory: {Engine(e.path).inventory()[0]} | operations: {Engine(e.path).op_count()}\")\r\n            print(f\"  History: {Engine(e.path).history(f'wf-{name}')}\")\r\n        print(\"the clean run committed with inventory 90, the crash run ended exactly like it with one operation, the wrong expectation aborted with inventory 100 and no operation, and the forced verification failure rolled back to 100; the verification failure is a test injection and not a real mismatch\")\r\n\r\n        section(\"2. Genuinely running: the same crash without a ledger\")\r\n        n = NaiveEngine(Path(d) / \"naive.db\")\r\n        n.seed()\r\n        n.propose_and_approve(\"wf-naive\")\r\n        try:\r\n            n.run(\"wf-naive\", crash_at=\"after_apply\")\r\n        except SimulatedCrash:\r\n            pass\r\n        res = NaiveEngine(n.path).run(\"wf-naive\")\r\n        print(\"naive result:\", res, \"| inventory:\", n.inventory()[0], \"| the approved target was 90\")\r\n        print(\"the naive engine reads IN_FLIGHT as not done and subtracts a second time, which gives 80 instead of 90 and still reports COMMITTED because its verification always says yes; the ledger and the real verification are what prevent this\")\r\n\r\n        section(\"3. Genuinely running: crash at every boundary\")\r\n        print(f\"{'crash point':24} {'path':18} {'final':12} {'inventory':>9} {'operations':>10}\")\r\n        for forced in (False, True):\r\n            for point in CRASH_POINTS:\r\n                if not forced and point in (\"after_rollback_pending\", \"after_rollback\"):\r\n                    continue\r\n                e = Engine(Path(d) / f\"m_{forced}_{point}.db\")\r\n                e.seed()\r\n                e.propose_and_approve(\"w\")\r\n                try:\r\n                    e.run(\"w\", crash_at=point, force_verify_fail=forced)\r\n                except SimulatedCrash:\r\n                    pass\r\n                final = Engine(e.path).run(\"w\", force_verify_fail=forced)\r\n                print(f\"{point:24} {'verify fails' if forced else 'normal':18} {final:12} {e.inventory()[0]:>9} {e.op_count():>10}\")\r\n        print(\"every crash point recovered to a terminal state with exactly one operation, inventory 90 on the normal path and 100 after a rollback; the first version of this lab escalated at after_rollback because a rollback that had already restored the stock was not recognised on resume, and treating an operation already marked ROLLED_BACK as done fixed it; the lab injects crashes between steps and never inside a SQLite transaction, which SQLite itself makes atomic\")\r\n\r\n        section(\"4. Genuinely running: same key, different parameters\")\r\n        e = Engine(Path(d) / \"key.db\")\r\n        e.seed()\r\n        p = {\"product_id\": \"SKU-1001\", \"expected_qty\": 100, \"expected_ver\": 7, \"target_qty\": 90}\r\n        print(\"first call:\", e.apply_with(\"k1\", p), \"| repeat:\", e.apply_with(\"k1\", p))\r\n        try:\r\n            e.apply_with(\"k1\", dict(p, target_qty=50))\r\n        except ConflictError as err:\r\n            print(\"changed target under the same key:\", err)\r\n        print(\"inventory:\", e.inventory()[0], \"| operations:\", e.op_count())\r\n        print(\"a repeat is answered from the ledger without touching inventory and a changed parameter is refused, so one key cannot be reused to authorise a different change\")\r\n\r\n        section(\"5. Genuinely running: conditional rollback when another workflow got there first\")\r\n        e = Engine(Path(d) / \"cond.db\")\r\n        e.seed()\r\n        e.propose_and_approve(\"wc\")\r\n        result = e.run(\"wc\", force_verify_fail=True, before_rollback=lambda eng: eng.external_change(85))\r\n        print(\"result:\", result, \"| inventory:\", e.inventory()[0], \"| history:\", [h[1] for h in e.history(\"wc\")])\r\n        print(\"another workflow moved inventory from 90 to 85 before the rollback ran, the conditional update matched no row, the workflow escalated and the 85 was left alone; a blind restore to 100 would have erased that change\")\r\n\r\n    section(\"6. Genuinely running: the unit tests\")\r\n    stream = io.StringIO()\r\n    res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(EngineTests))\r\n    print(f\"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}\")\r\n    print(\"the tests cover a clean run, a repeated run, a crash and resume, a failed precondition, a rollback and an illegal transition on this lab's own engine, and they are not the lesson's original tests\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the four scenarios ---\nScenario: clean\n  Result: COMMITTED | Inventory: 90 | operations: 1\n  History: [(0, 'APPROVED'), (1, 'IN_FLIGHT'), (2, 'VERIFYING'), (3, 'COMMITTED')]\nScenario: crash (worker crashed after the side effect, then a fresh engine resumed)\n  Result: COMMITTED | Inventory: 90 | operations: 1\n  History: [(0, 'APPROVED'), (1, 'IN_FLIGHT'), (2, 'VERIFYING'), (3, 'COMMITTED')]\nScenario: precondition\n  Result: ABORTED | Inventory: 100 | operations: 0\n  History: [(0, 'APPROVED'), (1, 'IN_FLIGHT'), (2, 'ABORTED')]\nScenario: verify_failure\n  Result: ROLLED_BACK | Inventory: 100 | operations: 1\n  History: [(0, 'APPROVED'), (1, 'IN_FLIGHT'), (2, 'VERIFYING'), (3, 'ROLLBACK_PENDING'), (4, 'ROLLED_BACK')]\nthe clean run committed with inventory 90, the crash run ended exactly like it with one operation, the wrong expectation aborted with inventory 100 and no operation, and the forced verification failure rolled back to 100; the verification failure is a test injection and not a real mismatch\n\n--- 2. Genuinely running: the same crash without a ledger ---\nnaive result: COMMITTED | inventory: 80 | the approved target was 90\nthe naive engine reads IN_FLIGHT as not done and subtracts a second time, which gives 80 instead of 90 and still reports COMMITTED because its verification always says yes; the ledger and the real verification are what prevent this\n\n--- 3. Genuinely running: crash at every boundary ---\ncrash point              path               final        inventory operations\nafter_in_flight          normal             COMMITTED           90          1\nafter_apply              normal             COMMITTED           90          1\nafter_verifying          normal             COMMITTED           90          1\nafter_in_flight          verify fails       ROLLED_BACK        100          1\nafter_apply              verify fails       ROLLED_BACK        100          1\nafter_verifying          verify fails       ROLLED_BACK        100          1\nafter_rollback_pending   verify fails       ROLLED_BACK        100          1\nafter_rollback           verify fails       ROLLED_BACK        100          1\nevery crash point recovered to a terminal state with exactly one operation, inventory 90 on the normal path and 100 after a rollback; the first version of this lab escalated at after_rollback because a rollback that had already restored the stock was not recognised on resume, and treating an operation already marked ROLLED_BACK as done fixed it; the lab injects crashes between steps and never inside a SQLite transaction, which SQLite itself makes atomic\n\n--- 4. Genuinely running: same key, different parameters ---\nfirst call: APPLIED | repeat: ALREADY_APPLIED\nchanged target under the same key: same idempotency key, different parameters\ninventory: 90 | operations: 1\na repeat is answered from the ledger without touching inventory and a changed parameter is refused, so one key cannot be reused to authorise a different change\n\n--- 5. Genuinely running: conditional rollback when another workflow got there first ---\nresult: ESCALATED | inventory: 85 | history: ['APPROVED', 'IN_FLIGHT', 'VERIFYING', 'ROLLBACK_PENDING', 'ESCALATED']\nanother workflow moved inventory from 90 to 85 before the rollback ran, the conditional update matched no row, the workflow escalated and the 85 was left alone; a blind restore to 100 would have erased that change\n\n--- 6. Genuinely running: the unit tests ---\nran 6 tests | failures 0 | errors 0 | passed True\nthe tests cover a clean run, a repeated run, a crash and resume, a failed precondition, a rollback and an illegal transition on this lab's own engine, and they are not the lesson's original tests"
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
    "headingEn": "Experiment 1: The four scenarios",
    "headingKn": "ಪ್ರಯೋಗ 1: The four scenarios",
    "bodyEn": "What it ran: The four scenarios. What the lab concluded: the clean run committed with inventory 90, the crash run ended exactly like it with one operation, the wrong expectation aborted with inventory 100 and no operation, and the forced verification failure rolled back to 100; the verification failure is a test injection and not a real mismatch",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The four scenarios. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the clean run committed with inventory 90, the crash run ended exactly like it with one operation, the wrong expectation aborted with inventory 100 and no operation, and the forced verification failure rolled back to 100; the verification failure is a test injection and not a real mismatch"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: the four scenarios ---\nScenario: clean\n  Result: COMMITTED | Inventory: 90 | operations: 1\n  History: [(0, 'APPROVED'), (1, 'IN_FLIGHT'), (2, 'VERIFYING'), (3, 'COMMITTED')]\nScenario: crash (worker crashed after the side effect, then a fresh engine resumed)\n  Result: COMMITTED | Inventory: 90 | operations: 1\n  History: [(0, 'APPROVED'), (1, 'IN_FLIGHT'), (2, 'VERIFYING'), (3, 'COMMITTED')]\nScenario: precondition\n  Result: ABORTED | Inventory: 100 | operations: 0\n  History: [(0, 'APPROVED'), (1, 'IN_FLIGHT'), (2, 'ABORTED')]\nScenario: verify_failure\n  Result: ROLLED_BACK | Inventory: 100 | operations: 1\n  History: [(0, 'APPROVED'), (1, 'IN_FLIGHT'), (2, 'VERIFYING'), (3, 'ROLLBACK_PENDING'), (4, 'ROLLED_BACK')]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: The same crash without a ledger",
    "headingKn": "ಪ್ರಯೋಗ 2: The same crash without a ledger",
    "bodyEn": "What it ran: The same crash without a ledger. What the lab concluded: the naive engine reads IN_FLIGHT as not done and subtracts a second time, which gives 80 instead of 90 and still reports COMMITTED because its verification always says yes; the ledger and the real verification are what prevent this",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The same crash without a ledger. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the naive engine reads IN_FLIGHT as not done and subtracts a second time, which gives 80 instead of 90 and still reports COMMITTED because its verification always says yes; the ledger and the real verification are what prevent this"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: the same crash without a ledger ---\nnaive result: COMMITTED | inventory: 80 | the approved target was 90"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Crash at every boundary",
    "headingKn": "ಪ್ರಯೋಗ 3: Crash at every boundary",
    "bodyEn": "What it ran: Crash at every boundary. What the lab concluded: every crash point recovered to a terminal state with exactly one operation, inventory 90 on the normal path and 100 after a rollback; the first version of this lab escalated at after_rollback because a rollback that had already restored the stock was not recognised on resume, and treating an operation already marked ROLLED_BACK as done fixed it; the lab injects crashes between steps and never inside a SQLite transaction, which SQLite itself makes atomic",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Crash at every boundary. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): every crash point recovered to a terminal state with exactly one operation, inventory 90 on the normal path and 100 after a rollback; the first version of this lab escalated at after_rollback because a rollback that had already restored the stock was not recognised on resume, and treating an operation already marked ROLLED_BACK as done fixed it; the lab injects crashes between steps and never inside a SQLite transaction, which SQLite itself makes atomic"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: crash at every boundary ---\ncrash point              path               final        inventory operations\nafter_in_flight          normal             COMMITTED           90          1\nafter_apply              normal             COMMITTED           90          1\nafter_verifying          normal             COMMITTED           90          1\nafter_in_flight          verify fails       ROLLED_BACK        100          1\nafter_apply              verify fails       ROLLED_BACK        100          1\nafter_verifying          verify fails       ROLLED_BACK        100          1\nafter_rollback_pending   verify fails       ROLLED_BACK        100          1\nafter_rollback           verify fails       ROLLED_BACK        100          1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Same key, different parameters",
    "headingKn": "ಪ್ರಯೋಗ 4: Same key, different parameters",
    "bodyEn": "What it ran: Same key, different parameters. What the lab concluded: a repeat is answered from the ledger without touching inventory and a changed parameter is refused, so one key cannot be reused to authorise a different change",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Same key, different parameters. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a repeat is answered from the ledger without touching inventory and a changed parameter is refused, so one key cannot be reused to authorise a different change"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: same key, different parameters ---\nfirst call: APPLIED | repeat: ALREADY_APPLIED\nchanged target under the same key: same idempotency key, different parameters\ninventory: 90 | operations: 1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Conditional rollback when another workflow got there first",
    "headingKn": "ಪ್ರಯೋಗ 5: Conditional rollback when another workflow got there first",
    "bodyEn": "What it ran: Conditional rollback when another workflow got there first. What the lab concluded: another workflow moved inventory from 90 to 85 before the rollback ran, the conditional update matched no row, the workflow escalated and the 85 was left alone; a blind restore to 100 would have erased that change",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Conditional rollback when another workflow got there first. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): another workflow moved inventory from 90 to 85 before the rollback ran, the conditional update matched no row, the workflow escalated and the 85 was left alone; a blind restore to 100 would have erased that change"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: conditional rollback when another workflow got there first ---\nresult: ESCALATED | inventory: 85 | history: ['APPROVED', 'IN_FLIGHT', 'VERIFYING', 'ROLLBACK_PENDING', 'ESCALATED']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: The unit tests",
    "headingKn": "ಪ್ರಯೋಗ 6: The unit tests",
    "bodyEn": "What it ran: The unit tests. What the lab concluded: the tests cover a clean run, a repeated run, a crash and resume, a failed precondition, a rollback and an illegal transition on this lab's own engine, and they are not the lesson's original tests",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The unit tests. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the tests cover a clean run, a repeated run, a crash and resume, a failed precondition, a rollback and an illegal transition on this lab's own engine, and they are not the lesson's original tests"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: the unit tests ---\nran 6 tests | failures 0 | errors 0 | passed True"
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
    "headingEn": "Genuinely Found: Scenarios and the Naive Engine",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸನ್ನಿವೇಶಗಳು ಮತ್ತು ನೈವ್ Engine",
    "bodyEn": "Section 1: clean ended COMMITTED with inventory 90, crash ended COMMITTED with inventory 90 and 1 operation, precondition ended ABORTED with inventory 100 and 0 operations, and verify_failure ended ROLLED_BACK with inventory 100. Section 2: the naive engine ended COMMITTED with inventory 80 against an approved target of 90.",
    "bodyKn": "ವಿಭಾಗ 1: clean ದಾಸ್ತಾನು 90 ಯೊಂದಿಗೆ COMMITTED ಆಗಿ, crash ದಾಸ್ತಾನು 90 ಮತ್ತು 1 operation ಯೊಂದಿಗೆ COMMITTED ಆಗಿ, precondition ದಾಸ್ತಾನು 100 ಮತ್ತು 0 operations ಯೊಂದಿಗೆ ABORTED ಆಗಿ, ಮತ್ತು verify_failure ದಾಸ್ತಾನು 100 ಯೊಂದಿಗೆ ROLLED_BACK ಆಗಿ ಮುಗಿದವು. ವಿಭಾಗ 2: ನೈವ್ engine ಅನುಮೋದಿತ ಗುರಿ 90 ವಿರುದ್ಧ ದಾಸ್ತಾನು 80 ಯೊಂದಿಗೆ COMMITTED ಆಗಿ ಮುಗಿಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Crash Matrix, Key Conflict and Rollback",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Crash ಮ್ಯಾಟ್ರಿಕ್ಸ್, Key Conflict ಮತ್ತು Rollback",
    "bodyEn": "Section 3: all eight crash points ended in a terminal state with 1 operation, COMMITTED with inventory 90 on the normal path and ROLLED_BACK with inventory 100 on the verify-fails path, and the first version of the lab escalated at after_rollback until the rollback was made to recognise an operation already marked ROLLED_BACK. Section 4: the first call applied, the repeat was ALREADY_APPLIED, a changed target was refused with inventory 90 and 1 operation. Section 5: after another workflow moved the stock to 85 the rollback escalated and the stock stayed 85. Section 6: the six unit tests ran with 0 failures and 0 errors.",
    "bodyKn": "ವಿಭಾಗ 3: ಎಲ್ಲಾ ಎಂಟು crash ಬಿಂದುಗಳು 1 operation ಯೊಂದಿಗೆ ಅಂತಿಮ ಸ್ಥಿತಿಯಲ್ಲಿ ಮುಗಿದವು, ಸಾಮಾನ್ಯ ಮಾರ್ಗದಲ್ಲಿ ದಾಸ್ತಾನು 90 ಯೊಂದಿಗೆ COMMITTED ಮತ್ತು verify-ವಿಫಲ ಮಾರ್ಗದಲ್ಲಿ ದಾಸ್ತಾನು 100 ಯೊಂದಿಗೆ ROLLED_BACK, ಮತ್ತು ಲ್ಯಾಬ್‌ನ ಮೊದಲ ಆವೃತ್ತಿ ROLLED_BACK ಎಂದು ಗುರುತಿಸಿದ operation ಅನ್ನು rollback ಗುರುತಿಸುವಂತೆ ಮಾಡುವವರೆಗೆ after_rollback ನಲ್ಲಿ escalate ಮಾಡಿತು. ವಿಭಾಗ 4: ಮೊದಲ ಕರೆ ಅನ್ವಯಿಸಿತು, ಪುನರಾವರ್ತನೆ ALREADY_APPLIED, ಬದಲಾದ ಗುರಿ ದಾಸ್ತಾನು 90 ಮತ್ತು 1 operation ಯೊಂದಿಗೆ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 5: ಇನ್ನೊಂದು workflow ದಾಸ್ತಾನನ್ನು 85 ಕ್ಕೆ ಸರಿಸಿದ ನಂತರ rollback escalate ಮಾಡಿ ದಾಸ್ತಾನು 85 ಆಗಿ ಉಳಿಯಿತು. ವಿಭಾಗ 6: ಆರು unit ಪರೀಕ್ಷೆಗಳು 0 ವೈಫಲ್ಯ ಮತ್ತು 0 ದೋಷದೊಂದಿಗೆ ಓಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A checkpoint alone does not stop a duplicate effect, the ledger does, and the matrix of crash points is what found a gap in this lab own rollback that a single happy-path run never showed.",
    "bodyKn": "checkpoint ಮಾತ್ರ ನಕಲು ಪರಿಣಾಮ ತಡೆಯುವುದಿಲ್ಲ, ಲೆಡ್ಜರ್ ತಡೆಯುತ್ತದೆ, ಮತ್ತು crash ಬಿಂದುಗಳ ಮ್ಯಾಟ್ರಿಕ್ಸ್ ಒಂದೇ ಸಂತೋಷ-ಮಾರ್ಗ ಓಟ ತೋರಿಸದ ಈ ಲ್ಯಾಬ್‌ನ ಸ್ವಂತ rollback ನ ಅಂತರ ಕಂಡುಹಿಡಿಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the naive engine committed, so it worked.\" It reported COMMITTED at inventory 80 because its verification always answered yes.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ನೈವ್ engine commit ಮಾಡಿತು, ಆದ್ದರಿಂದ ಕೆಲಸ ಮಾಡಿತು.\" ಅದರ ಪರಿಶೀಲನೆ ಯಾವಾಗಲೂ ಹೌದು ಎಂದು ಉತ್ತರಿಸಿದ್ದರಿಂದ ಅದು ದಾಸ್ತಾನು 80 ರಲ್ಲಿ COMMITTED ಎಂದು ವರದಿ ಮಾಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Ledger: a record of applied operations by key. Precondition: what must be true before acting. Conditional rollback: a restore that applies only if nothing else changed. Crash point: a boundary where the worker is stopped.",
    "bodyKn": "ಲೆಡ್ಜರ್: key ಪ್ರಕಾರ ಅನ್ವಯಿಸಿದ operations ದಾಖಲೆ. ಪೂರ್ವಷರತ್ತು: ಕಾರ್ಯದ ಮೊದಲು ಸತ್ಯವಾಗಿರಬೇಕಾದದ್ದು. ಷರತ್ತಿನ rollback: ಬೇರೇನೂ ಬದಲಾಗದಿದ್ದರೆ ಮಾತ್ರ ಅನ್ವಯಿಸುವ ಮರುಸ್ಥಾಪನೆ. Crash ಬಿಂದು: worker ಅನ್ನು ನಿಲ್ಲಿಸುವ ಗಡಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The ledger kept a crash at 1 operation. 2) A wrong expectation aborted without touching stock. 3) The naive engine ended at 80. 4) All eight crash points recovered after the rollback fix. 5) A restore to 100 was refused when the stock had moved to 85.",
    "bodyKn": "1) ಲೆಡ್ಜರ್ crash ಅನ್ನು 1 operation ನಲ್ಲಿ ಇಟ್ಟಿತು. 2) ತಪ್ಪು ನಿರೀಕ್ಷೆ ದಾಸ್ತಾನು ಮುಟ್ಟದೆ abort ಮಾಡಿತು. 3) ನೈವ್ engine 80 ರಲ್ಲಿ ಮುಗಿಯಿತು. 4) rollback ಸರಿಪಡಿಕೆಯ ನಂತರ ಎಲ್ಲಾ ಎಂಟು crash ಬಿಂದುಗಳು ಚೇತರಿಸಿದವು. 5) ದಾಸ್ತಾನು 85 ಕ್ಕೆ ಸರಿದಾಗ 100 ಕ್ಕೆ ಮರುಸ್ಥಾಪನೆ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What inventory did the naive engine end with?",
      "qKn": "ನೈವ್ engine ಯಾವ ದಾಸ್ತಾನಿನೊಂದಿಗೆ ಮುಗಿಯಿತು?",
      "opts": [
       "80",
       "90",
       "100",
       "70"
      ],
      "optsKn": [
       "80",
       "90",
       "100",
       "70"
      ],
      "correct": 0
     },
     {
      "q": "What final state did the wrong-expected-quantity scenario reach?",
      "qKn": "ತಪ್ಪು-ನಿರೀಕ್ಷಿತ-ಪ್ರಮಾಣ ಸನ್ನಿವೇಶ ಯಾವ ಅಂತಿಮ ಸ್ಥಿತಿ ತಲುಪಿತು?",
      "opts": [
       "ABORTED with 0 operations",
       "COMMITTED",
       "ROLLED_BACK",
       "ESCALATED"
      ],
      "optsKn": [
       "0 operations ಯೊಂದಿಗೆ ABORTED",
       "COMMITTED",
       "ROLLED_BACK",
       "ESCALATED"
      ],
      "correct": 0
     },
     {
      "q": "How many operations existed after every one of the eight crash points recovered?",
      "qKn": "ಎಂಟೂ crash ಬಿಂದುಗಳು ಚೇತರಿಸಿದ ನಂತರ ಎಷ್ಟು operations ಇದ್ದವು?",
      "opts": [
       "1",
       "2",
       "0",
       "8"
      ],
      "optsKn": [
       "1",
       "2",
       "0",
       "8"
      ],
      "correct": 0
     },
     {
      "q": "What happened when the stock was moved to 85 before the rollback?",
      "qKn": "rollback ಗೆ ಮೊದಲು ದಾಸ್ತಾನನ್ನು 85 ಕ್ಕೆ ಸರಿಸಿದಾಗ ಏನಾಯಿತು?",
      "opts": [
       "The workflow escalated and the stock stayed 85",
       "The stock was restored to 100",
       "The workflow committed",
       "The ledger was deleted"
      ],
      "optsKn": [
       "workflow escalate ಮಾಡಿ ದಾಸ್ತಾನು 85 ಆಗಿ ಉಳಿಯಿತು",
       "ದಾಸ್ತಾನು 100 ಕ್ಕೆ ಮರುಸ್ಥಾಪಿತವಾಯಿತು",
       "workflow commit ಮಾಡಿತು",
       "ಲೆಡ್ಜರ್ ಅಳಿಸಲ್ಪಟ್ಟಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What did the crash matrix reveal about the first version of the rollback?",
      "qKn": "crash ಮ್ಯಾಟ್ರಿಕ್ಸ್ rollback ನ ಮೊದಲ ಆವೃತ್ತಿಯ ಬಗ್ಗೆ ಏನು ಬಹಿರಂಗಪಡಿಸಿತು?",
      "opts": [
       "A crash after the restore made the resume escalate",
       "It never restored stock",
       "It always committed",
       "It ignored the ledger"
      ],
      "optsKn": [
       "restore ನಂತರದ crash ಮುಂದುವರಿಕೆಯನ್ನು escalate ಮಾಡಿಸಿತು",
       "ಅದು ದಾಸ್ತಾನು ಎಂದಿಗೂ ಮರುಸ್ಥಾಪಿಸಲಿಲ್ಲ",
       "ಅದು ಯಾವಾಗಲೂ commit ಮಾಡಿತು",
       "ಅದು ಲೆಡ್ಜರ್ ನಿರ್ಲಕ್ಷಿಸಿತು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
