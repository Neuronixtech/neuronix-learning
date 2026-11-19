module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215bc",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Checkpoints and Rollback (Part 3 of 3) — Fences, Sagas and Injection",
 "titleKn": "Checkpoints ಮತ್ತು Rollback (ಭಾಗ 3 / 3) — Fences, Sagas ಮತ್ತು ಚುಚ್ಚುವಿಕೆ",
 "desc": "Test split-brain fencing, a lease race, a SAGA, a retried compensation and a hash-chained audit.",
 "descKn": "split-brain fencing, lease ಓಟ, SAGA, ಮರುಪ್ರಯತ್ನಿಸಿದ ಪರಿಹಾರ ಮತ್ತು hash-ಸರಪಳಿ ಲೆಕ್ಕಪರಿಶೋಧನೆ ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Fence a stale worker.",
  "Race for a lease.",
  "Compensate in reverse order.",
  "Keep an undo key stable.",
  "Anchor an audit chain."
 ],
 "objectivesKn": [
  "ಹಳೆಯ worker fence ಮಾಡಿ.",
  "lease ಗಾಗಿ ಓಟ ನಡೆಸಿ.",
  "ಹಿಮ್ಮುಖ ಕ್ರಮದಲ್ಲಿ ಪರಿಹರಿಸಿ.",
  "undo key ಸ್ಥಿರವಾಗಿಡಿ.",
  "ಲೆಕ್ಕಪರಿಶೋಧನೆ ಸರಪಳಿ anchor ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Checkpoints and Rollback (Part 3 of 3)",
    "textKn": "Checkpoints ಮತ್ತು Rollback (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: split-brain execution with and without fencing at the target, a lease race between eight threads, a SAGA with durable step state, a compensation crash with a stable and a random key, failure injection against two provider types, history validation and a hash-chained audit. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind checkpoints and rollback (a legal-move state machine, durable checkpoints with a version check, leases and fencing tokens, an idempotency ledger, atomic preconditions, conditional rollback, crash injection at every boundary, a SAGA with durable compensation and a hash-chained audit log), not the real software, and one SQLite file plays both the workflow store and the target system in the engine lab, the provider is a table or dictionary, the clock is a number the lab chooses and nothing real is changed, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation and the expected outputs were produced by running them. The lesson Part 3 said it had executed its own example, but that file and its output were not supplied, so no figure from it is reused here. The lesson mentions of eventual consistency, SAGA in production and the EU AI Act Article 14 are conceptual or cited and were not run. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: target ನಲ್ಲಿ fencing ಇದ್ದು ಮತ್ತು ಇಲ್ಲದ split-brain ಕಾರ್ಯಗತಗೊಳಿಕೆ, ಎಂಟು threads ನಡುವಿನ lease ಓಟ, ಸ್ಥಿರ ಹಂತ ಸ್ಥಿತಿ ಇರುವ SAGA, ಸ್ಥಿರ ಮತ್ತು ಯಾದೃಚ್ಛಿಕ key ಇರುವ ಪರಿಹಾರ crash, ಎರಡು ಪೂರೈಕೆದಾರ ಪ್ರಕಾರಗಳ ವಿರುದ್ಧ ವೈಫಲ್ಯ ಚುಚ್ಚುವಿಕೆ, ಇತಿಹಾಸ ಮೌಲ್ಯೀಕರಣ ಮತ್ತು hash-ಸರಪಳಿ ಲೆಕ್ಕಪರಿಶೋಧನೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು checkpoints ಮತ್ತು rollback (ಕಾನೂನುಬದ್ಧ-ಚಲನೆ ಸ್ಥಿತಿ ಯಂತ್ರ, ಆವೃತ್ತಿ ಪರಿಶೀಲನೆ ಇರುವ ಸ್ಥಿರ checkpoints, leases ಮತ್ತು fencing tokens, idempotency ಲೆಡ್ಜರ್, ಪರಮಾಣು ಪೂರ್ವಷರತ್ತುಗಳು, ಷರತ್ತಿನ rollback, ಪ್ರತಿ ಗಡಿಯಲ್ಲಿ crash ಚುಚ್ಚುವಿಕೆ, ಸ್ಥಿರ ಪರಿಹಾರ ಇರುವ SAGA ಮತ್ತು hash-ಸರಪಳಿ ಲೆಕ್ಕಪರಿಶೋಧನೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು engine ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಒಂದು SQLite ಫೈಲ್ workflow ಸಂಗ್ರಹ ಮತ್ತು ಗುರಿ ವ್ಯವಸ್ಥೆ ಎರಡನ್ನೂ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ, ಪೂರೈಕೆದಾರ ಒಂದು ಟೇಬಲ್ ಅಥವಾ ನಿಘಂಟು, ಗಡಿಯಾರ ಲ್ಯಾಬ್ ಆಯ್ಕೆ ಮಾಡುವ ಸಂಖ್ಯೆ ಮತ್ತು ನಿಜವಾಗಿ ಏನೂ ಬದಲಾಗುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ ಮತ್ತು ನಿರೀಕ್ಷಿತ ಔಟ್‌ಪುಟ್ ಅನ್ನು ಅವನ್ನು ಓಡಿಸಿ ಪಡೆಯಲಾಗಿದೆ. lesson ನ ಭಾಗ 3 ತನ್ನದೇ ಉದಾಹರಣೆಯನ್ನು ಓಡಿಸಿದ್ದೇನೆ ಎಂದು ಹೇಳಿತು, ಆದರೆ ಆ ಫೈಲ್ ಮತ್ತು ಅದರ ಔಟ್‌ಪುಟ್ ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಅದರ ಯಾವ ಅಂಕಿಯನ್ನೂ ಇಲ್ಲಿ ಮರುಬಳಸಿಲ್ಲ. eventual consistency, ಉತ್ಪಾದನೆಯಲ್ಲಿ SAGA ಮತ್ತು EU AI Act Article 14 ಬಗ್ಗೆ lesson ನ ಉಲ್ಲೇಖಗಳು ಪರಿಕಲ್ಪನಾತ್ಮಕ ಅಥವಾ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಓಡಿಸಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Slow Worker and the Undo That Is Retried",
    "textKn": "ನಿಧಾನ Worker ಮತ್ತು ಮರುಪ್ರಯತ್ನಿಸುವ Undo",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Fences, Sagas and Failure Injection",
    "headingKn": "Fences, Sagas ಮತ್ತು ವೈಫಲ್ಯ ಚುಚ್ಚುವಿಕೆ",
    "bodyEn": "Production adds two awkward cases to a crash: the old worker was only slow and is still running, and the undo itself can crash and be retried. This part runs a split-brain write against a target with and without fencing, races eight threads for one lease, builds a SAGA whose step statuses are database rows, crashes a compensation and retries it with a stable key and with a random one, injects a crash at every point of a forward path against two kinds of provider, validates a stored history and chains an audit log.",
    "bodyKn": "ಉತ್ಪಾದನೆ crash ಗೆ ಎರಡು ಅನಾನುಕೂಲ ಪ್ರಕರಣ ಸೇರಿಸುತ್ತದೆ: ಹಳೆಯ worker ಕೇವಲ ನಿಧಾನವಾಗಿತ್ತು ಮತ್ತು ಇನ್ನೂ ಓಡುತ್ತಿದೆ, ಮತ್ತು undo ಸ್ವತಃ crash ಆಗಿ ಮರುಪ್ರಯತ್ನಿಸಲ್ಪಡಬಹುದು. ಈ ಭಾಗ fencing ಇದ್ದು ಮತ್ತು ಇಲ್ಲದ target ವಿರುದ್ಧ split-brain ಬರಹ ಓಡಿಸುತ್ತದೆ, ಒಂದು lease ಗೆ ಎಂಟು threads ಓಟ ನಡೆಸುತ್ತದೆ, ಹಂತ ಸ್ಥಿತಿಗಳು ಡೇಟಾಬೇಸ್ ಸಾಲುಗಳಾಗಿರುವ SAGA ನಿರ್ಮಿಸುತ್ತದೆ, ಪರಿಹಾರವನ್ನು crash ಮಾಡಿ ಸ್ಥಿರ key ಮತ್ತು ಯಾದೃಚ್ಛಿಕ key ನೊಂದಿಗೆ ಮರುಪ್ರಯತ್ನಿಸುತ್ತದೆ, ಎರಡು ರೀತಿಯ ಪೂರೈಕೆದಾರರ ವಿರುದ್ಧ ಮುಂದಿನ ಮಾರ್ಗದ ಪ್ರತಿ ಬಿಂದುವಿನಲ್ಲಿ crash ಚುಚ್ಚುತ್ತದೆ, ಸಂಗ್ರಹಿತ ಇತಿಹಾಸ ಮೌಲ್ಯೀಕರಿಸುತ್ತದೆ ಮತ್ತು ಲೆಕ್ಕಪರಿಶೋಧನೆ ಲಾಗ್ ಸರಪಳಿ ಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Production Recovery",
    "headingKn": "ಉತ್ಪಾದನಾ ಚೇತರಿಕೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">recovery needs ownership, fences and idempotent undo</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">fence</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">enforced at target</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">lease</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">one winner</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">saga</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">durable steps</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">compensation</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">stable key</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">recovery needs ownership, fences and idempotent undo</text></svg>",
    "captionEn": "Split brain, SAGA compensation and audit are where recovery fails.",
    "captionKn": "split brain, SAGA ಪರಿಹಾರ ಮತ್ತು ಲೆಕ್ಕಪರಿಶೋಧನೆಯಲ್ಲಿ ಚೇತರಿಕೆ ವಿಫಲವಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "captionEn": "The seven experiments",
    "captionKn": "ಏಳು ಪ್ರಯೋಗಗಳು",
    "rows": "Experiment|What the lab shows\nsplit brain|a late write from token 1 after token 2, with and without a fence\nlease race|8 threads, one token\nSAGA|shipping fails, payment then inventory are compensated\ncompensation crash|stable key against a random key\nfailure injection|6 crash points, 2 provider types\nhistory validation|first illegal jump named\naudit|a hash chain with fencing tokens and an anchor"
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
    "filename": "cr_3.py",
    "headingEn": "Database, SAGA, audit and checks",
    "headingKn": "ಡೇಟಾಬೇಸ್, SAGA, ಲೆಕ್ಕಪರಿಶೋಧನೆ ಮತ್ತು ಪರಿಶೀಲನೆಗಳು",
    "descEn": "write_fenced updates only when the stored token is not newer, Saga keeps every step status as a row and compensates in reverse order, Audit chains hashes and first_illegal names the first impossible move.",
    "descKn": "write_fenced ಸಂಗ್ರಹಿತ token ಹೊಸದಲ್ಲದಿದ್ದರೆ ಮಾತ್ರ ನವೀಕರಿಸುತ್ತದೆ, Saga ಪ್ರತಿ ಹಂತ ಸ್ಥಿತಿಯನ್ನು ಸಾಲಾಗಿ ಇಟ್ಟು ಹಿಮ್ಮುಖ ಕ್ರಮದಲ್ಲಿ ಪರಿಹರಿಸುತ್ತದೆ, Audit hash ಸರಪಳಿ ಮಾಡುತ್ತದೆ ಮತ್ತು first_illegal ಮೊದಲ ಅಸಾಧ್ಯ ಚಲನೆ ಹೆಸರಿಸುತ್ತದೆ.",
    "code": "class Db:\r\n    def __init__(self, path):\r\n        self.path = str(path)\r\n        with self.conn() as db:\r\n            db.executescript(\"\"\"\r\n            CREATE TABLE IF NOT EXISTS leases (workflow_id TEXT PRIMARY KEY, worker_id TEXT, token INTEGER NOT NULL DEFAULT 0, expires_at REAL NOT NULL DEFAULT 0);\r\n            CREATE TABLE IF NOT EXISTS target (resource TEXT PRIMARY KEY, value TEXT, highest_token INTEGER NOT NULL);\r\n            CREATE TABLE IF NOT EXISTS effects (key TEXT PRIMARY KEY, kind TEXT NOT NULL);\r\n            CREATE TABLE IF NOT EXISTS saga_steps (workflow_id TEXT NOT NULL, step_no INTEGER NOT NULL, name TEXT NOT NULL, fwd_key TEXT NOT NULL, comp_key TEXT NOT NULL,\r\n              fwd_status TEXT NOT NULL, comp_status TEXT NOT NULL, PRIMARY KEY (workflow_id, step_no));\r\n            \"\"\")\r\n\r\n    @contextlib.contextmanager\r\n    def conn(self):\r\n        c = sqlite3.connect(self.path, timeout=10, isolation_level=None)\r\n        try:\r\n            yield c\r\n        finally:\r\n            c.close()\r\n\r\n    def acquire(self, wid, worker, now, duration=30):\r\n        with self.conn() as db:\r\n            db.execute(\"BEGIN IMMEDIATE\")\r\n            row = db.execute(\"SELECT worker_id, token, expires_at FROM leases WHERE workflow_id=?\", (wid,)).fetchone()\r\n            if row is None:\r\n                db.execute(\"INSERT INTO leases VALUES (?,?,1,?)\", (wid, worker, now + duration))\r\n                db.execute(\"COMMIT\")\r\n                return 1\r\n            if row[0] is not None and row[2] > now:\r\n                db.execute(\"ROLLBACK\")\r\n                return None\r\n            token = row[1] + 1\r\n            db.execute(\"UPDATE leases SET worker_id=?, token=?, expires_at=? WHERE workflow_id=?\", (worker, token, now + duration, wid))\r\n            db.execute(\"COMMIT\")\r\n            return token\r\n\r\n    def renew(self, wid, worker, token, now, duration=30):\r\n        with self.conn() as db:\r\n            return db.execute(\"UPDATE leases SET expires_at=? WHERE workflow_id=? AND worker_id=? AND token=? AND expires_at>?\", (now + duration, wid, worker, token, now)).rowcount == 1\r\n\r\n    def release(self, wid, worker, token):\r\n        with self.conn() as db:\r\n            return db.execute(\"UPDATE leases SET worker_id=NULL, expires_at=0 WHERE workflow_id=? AND worker_id=? AND token=?\", (wid, worker, token)).rowcount == 1\r\n\r\n    def write_unfenced(self, resource, value):\r\n        with self.conn() as db:\r\n            db.execute(\"INSERT INTO target VALUES (?,?,0) ON CONFLICT(resource) DO UPDATE SET value=excluded.value\", (resource, value))\r\n\r\n    def write_fenced(self, resource, token, value):\r\n        with self.conn() as db:\r\n            db.execute(\"INSERT OR IGNORE INTO target VALUES (?, NULL, 0)\", (resource,))\r\n            return db.execute(\"UPDATE target SET value=?, highest_token=? WHERE resource=? AND highest_token<=?\", (value, token, resource, token)).rowcount == 1\r\n\r\n    def target_value(self, resource):\r\n        with self.conn() as db:\r\n            return db.execute(\"SELECT value FROM target WHERE resource=?\", (resource,)).fetchone()[0]\r\n\r\n    def effect(self, key, kind, idempotent=True):\r\n        with self.conn() as db:\r\n            if idempotent:\r\n                db.execute(\"INSERT OR IGNORE INTO effects VALUES (?,?)\", (key, kind))\r\n            else:\r\n                db.execute(\"INSERT INTO effects VALUES (?,?)\", (key + \"#\" + uuid.uuid4().hex[:6], kind))\r\n\r\n    def effect_count(self, kind):\r\n        with self.conn() as db:\r\n            return db.execute(\"SELECT COUNT(*) FROM effects WHERE kind=?\", (kind,)).fetchone()[0]\r\n\r\n\r\nclass Saga:\r\n    def __init__(self, db, wid, steps):\r\n        self.db, self.wid, self.steps = db, wid, steps\r\n        with db.conn() as c:\r\n            for i, (name, _, _) in enumerate(steps):\r\n                c.execute(\"INSERT OR IGNORE INTO saga_steps VALUES (?,?,?,?,?,'NOT_STARTED','NOT_STARTED')\", (wid, i, name, f\"{wid}-{name}\", f\"{wid}-{name}-undo\"))\r\n\r\n    def status(self):\r\n        with self.db.conn() as c:\r\n            return c.execute(\"SELECT name, fwd_status, comp_status FROM saga_steps WHERE workflow_id=? ORDER BY step_no\", (self.wid,)).fetchall()\r\n\r\n    def _set(self, i, col, val):\r\n        with self.db.conn() as c:\r\n            c.execute(f\"UPDATE saga_steps SET {col}=? WHERE workflow_id=? AND step_no=?\", (val, self.wid, i))\r\n\r\n    def run(self, crash_in_compensation=None, random_comp_keys=False):\r\n        log = []\r\n        done = [i for i, s in enumerate(self.status()) if s[1] == \"EXECUTED\"]\r\n        failed = False\r\n        for i, (name, fwd, _) in enumerate(self.steps):\r\n            if i in done:\r\n                continue\r\n            try:\r\n                fwd(self.db, f\"{self.wid}-{name}\")\r\n                self._set(i, \"fwd_status\", \"EXECUTED\")\r\n                log.append(f\"execute {name}\")\r\n            except Exception as e:\r\n                self._set(i, \"fwd_status\", \"FAILED\")\r\n                log.append(f\"forward failure at {name}: {e}\")\r\n                failed = True\r\n                break\r\n        if failed:\r\n            for i in reversed([i for i, s in enumerate(self.status()) if s[1] == \"EXECUTED\" and s[2] != \"COMPENSATED\"]):\r\n                name, _, comp = self.steps[i]\r\n                key = f\"{self.wid}-{name}-undo\"\r\n                if random_comp_keys:\r\n                    key += \"-\" + uuid.uuid4().hex[:6]\r\n                comp(self.db, key)\r\n                if crash_in_compensation == name:\r\n                    raise SimulatedCrash(f\"crash after compensating {name}, before recording it\")\r\n                self._set(i, \"comp_status\", \"COMPENSATED\")\r\n                log.append(f\"compensate {name}\")\r\n            return \"COMPENSATED\", log\r\n        return \"COMMITTED\", log\r\n\r\n\r\ndef fwd_inventory(db, key):\r\n    db.effect(key, \"reserve\")\r\n\r\n\r\ndef comp_inventory(db, key):\r\n    db.effect(key, \"release\")\r\n\r\n\r\ndef fwd_payment(db, key):\r\n    db.effect(key, \"charge\")\r\n\r\n\r\ndef comp_payment(db, key):\r\n    db.effect(key, \"refund\")\r\n\r\n\r\ndef fwd_shipping(db, key):\r\n    raise RuntimeError(\"Shipping provider unavailable\")\r\n\r\n\r\ndef comp_none(db, key):\r\n    pass\r\n\r\n\r\ndef make_steps():\r\n    return [(\"inventory\", fwd_inventory, comp_inventory), (\"payment\", fwd_payment, comp_payment), (\"shipping\", fwd_shipping, comp_none)]\r\n\r\n\r\ndef digest(v):\r\n    return hashlib.sha256(json.dumps(v, sort_keys=True, separators=(\",\", \":\")).encode()).hexdigest()\r\n\r\n\r\nclass Audit:\r\n    def __init__(self):\r\n        self.entries = []\r\n\r\n    def append(self, actor, event, token):\r\n        prev = self.entries[-1][\"hash\"] if self.entries else \"GENESIS\"\r\n        e = {\"seq\": len(self.entries) + 1, \"actor\": actor, \"event\": event, \"fencing_token\": token, \"prev\": prev}\r\n        e[\"hash\"] = digest({k: v for k, v in e.items() if k != \"hash\"})\r\n        self.entries.append(e)\r\n\r\n    def verify(self, anchor=None):\r\n        prev = \"GENESIS\"\r\n        for i, e in enumerate(self.entries):\r\n            if e[\"prev\"] != prev or e[\"hash\"] != digest({k: v for k, v in e.items() if k != \"hash\"}) or e[\"seq\"] != i + 1:\r\n                return False, i\r\n            prev = e[\"hash\"]\r\n        if anchor is not None and prev != anchor:\r\n            return False, \"anchor mismatch\"\r\n        return True, None\r\n\r\n\r\nLEGAL = {\"PROPOSED\": {\"APPROVED\"}, \"APPROVED\": {\"IN_FLIGHT\"}, \"IN_FLIGHT\": {\"VERIFYING\"}, \"VERIFYING\": {\"COMMITTED\", \"ROLLBACK_PENDING\", \"ESCALATED\"}, \"ROLLBACK_PENDING\": {\"ROLLED_BACK\", \"ESCALATED\"}}\r\n\r\n\r\ndef first_illegal(history):\r\n    for a, b in zip(history, history[1:]):\r\n        if b not in LEGAL.get(a, set()):\r\n            return a, b\r\n    return None\r\n\r\n\r\nPOINTS = [\"before_in_flight\", \"after_in_flight\", \"after_effect\", \"after_record\", \"after_verifying\", \"after_commit\"]\r\n\r\n\r\ndef mini_workflow(db, wid, idempotent, crash_at=None):\r\n    \"\"\"Forward path with durable progress kept in a dictionary that plays the checkpoint.\"\"\"\r\n    cp = db_state.setdefault(wid, {\"state\": \"APPROVED\", \"recorded\": False})\r\n\r\n    def maybe(p):\r\n        if crash_at == p:\r\n            raise SimulatedCrash(p)\r\n    maybe(\"before_in_flight\")\r\n    if cp[\"state\"] == \"APPROVED\":\r\n        cp[\"state\"] = \"IN_FLIGHT\"\r\n    maybe(\"after_in_flight\")\r\n    if cp[\"state\"] == \"IN_FLIGHT\":\r\n        db.effect(wid + \"-charge\", \"mini\", idempotent)\r\n        maybe(\"after_effect\")\r\n        cp[\"recorded\"] = True\r\n        maybe(\"after_record\")\r\n        cp[\"state\"] = \"VERIFYING\"\r\n    maybe(\"after_verifying\")\r\n    if cp[\"state\"] == \"VERIFYING\":\r\n        cp[\"state\"] = \"COMMITTED\"\r\n    maybe(\"after_commit\")\r\n    return cp[\"state\"]\r\n\r\n\r\ndb_state = {}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cr_3.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the seven experiments on temporary SQLite files.",
    "descKn": "main() ತಾತ್ಕಾಲಿಕ SQLite ಫೈಲ್‌ಗಳ ಮೇಲೆ ಏಳು ಪ್ರಯೋಗಗಳನ್ನು ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    with tempfile.TemporaryDirectory() as d:\r\n        section(\"1. Genuinely running: split-brain with and without fencing at the target\")\r\n        for fenced in (False, True):\r\n            db = Db(Path(d) / f\"split_{fenced}.db\")\r\n            ta = db.acquire(\"wf\", \"worker-A\", now=0)\r\n            tb = db.acquire(\"wf\", \"worker-B\", now=31)\r\n            if fenced:\r\n                wb = db.write_fenced(\"cfg\", tb, \"from-B\")\r\n                wa = db.write_fenced(\"cfg\", ta, \"from-A\")\r\n            else:\r\n                db.write_unfenced(\"cfg\", \"from-B\")\r\n                wa = None\r\n                db.write_unfenced(\"cfg\", \"from-A\")\r\n            print(f\"{'fenced at the target' if fenced else 'no fencing at the target':26} A token {ta}, B token {tb} | A's late write accepted: {wa if fenced else True} | final value: {db.target_value('cfg')}\")\r\n        print(\"both workers believed they owned the workflow after the pause, and only the target that compared tokens atomically kept B's value; a check inside the worker could not help, because the stale worker is exactly the one whose view is out of date\")\r\n\r\n        section(\"2. Genuinely measuring: eight threads racing for one lease\")\r\n        db = Db(Path(d) / \"race.db\")\r\n        wins, lock = [], threading.Lock()\r\n\r\n        def go(i):\r\n            t = db.acquire(\"wf\", f\"w{i}\", now=0)\r\n            with lock:\r\n                wins.append(t)\r\n        ts = [threading.Thread(target=go, args=(i,)) for i in range(8)]\r\n        for t in ts:\r\n            t.start()\r\n        for t in ts:\r\n            t.join()\r\n        print(\"tokens handed out:\", sorted(x for x in wins if x is not None), \"| refused:\", sum(1 for x in wins if x is None))\r\n        print(\"one immediate transaction per acquire let exactly one thread take the lease and refused the other seven, and a lease only says who may try, so the fencing check at the target is still needed\")\r\n\r\n        section(\"3. Genuinely running: a SAGA with durable step state\")\r\n        db = Db(Path(d) / \"saga.db\")\r\n        s = Saga(db, \"order-1\", make_steps())\r\n        result, log = s.run()\r\n        for line in log:\r\n            print(\" \", line)\r\n        print(\"result:\", result, \"| steps:\", s.status())\r\n        print(\"effects:\", {k: db.effect_count(k) for k in (\"reserve\", \"charge\", \"release\", \"refund\")})\r\n        print(\"shipping failed, so the payment was compensated before the inventory, in reverse order, and each step's status is a row in the database rather than a list in memory; the refund here is a recorded row, and a real refund does not undo fees or notifications\")\r\n\r\n        section(\"4. Genuinely running: a crash during compensation\")\r\n        for random_keys in (False, True):\r\n            db = Db(Path(d) / f\"comp_{random_keys}.db\")\r\n            s = Saga(db, \"order-2\", make_steps())\r\n            try:\r\n                s.run(crash_in_compensation=\"payment\", random_comp_keys=random_keys)\r\n            except SimulatedCrash:\r\n                pass\r\n            Saga(db, \"order-2\", make_steps()).run(random_comp_keys=random_keys)\r\n            print(f\"{'random key per retry' if random_keys else 'stable compensation key':24} refunds recorded: {db.effect_count('refund')} | releases: {db.effect_count('release')}\")\r\n        print(\"the refund was applied, the worker crashed before writing that down and the resumed run repeated it, which a stable key made harmless and a fresh random key turned into a second refund; the lab's provider is a table that ignores a repeated key, and a real provider has to offer that guarantee\")\r\n\r\n        section(\"5. Genuinely running: failure injection across the forward path\")\r\n        print(f\"{'crash point':18} {'idempotent provider':>22} {'provider without keys':>24}\")\r\n        for p in POINTS:\r\n            row = []\r\n            for idem in (True, False):\r\n                db_state.clear()\r\n                dbx = Db(Path(d) / f\"mini_{p}_{idem}.db\")\r\n                try:\r\n                    mini_workflow(dbx, \"w\", idem, crash_at=p)\r\n                except SimulatedCrash:\r\n                    pass\r\n                final = mini_workflow(dbx, \"w\", idem)\r\n                row.append(f\"{final}, {dbx.effect_count('mini')} effect(s)\")\r\n            print(f\"{p:18} {row[0]:>22} {row[1]:>24}\")\r\n        print(\"resuming from the checkpoint never repeats the effect when the provider keeps a ledger of keys, and a provider without one made 2 effects at both crash points that fall after the effect and before the checkpoint moved to VERIFYING, including the point after the record was written, because the resumed run still saw IN_FLIGHT; crashes before the effect or after VERIFYING were harmless, and the checkpoint here is a dictionary that survives the simulated crash\")\r\n\r\n        section(\"6. Genuinely running: validating a stored history\")\r\n        print(\"good history:\", first_illegal([\"PROPOSED\", \"APPROVED\", \"IN_FLIGHT\", \"VERIFYING\", \"COMMITTED\"]))\r\n        print(\"tampered history:\", first_illegal([\"PROPOSED\", \"APPROVED\", \"COMMITTED\"]))\r\n        print(\"a checkpoint table can be checked against the allowed transitions after the fact, and the first illegal jump is named; this finds an impossible sequence and cannot prove that a legal-looking one really happened\")\r\n\r\n    section(\"7. Genuinely running: a hash-chained audit record with fencing tokens\")\r\n    a = Audit()\r\n    for actor, ev, tok in ((\"worker-A\", \"LEASE_ACQUIRED\", 1), (\"worker-A\", \"EXECUTION_INTENT\", 1), (\"worker-B\", \"LEASE_RECOVERED\", 2), (\"worker-B\", \"ACTION_VERIFIED\", 2)):\r\n        a.append(actor, ev, tok)\r\n    anchor = a.entries[-1][\"hash\"]\r\n    print(\"intact:\", a.verify(anchor))\r\n    saved = json.dumps(a.entries)\r\n    a.entries[2][\"fencing_token\"] = 1\r\n    print(\"fencing token edited in entry 3:\", a.verify(anchor))\r\n    a.entries = json.loads(saved)[:3]\r\n    print(\"last entry dropped, no anchor:\", a.verify(), \"| with the saved head:\", a.verify(anchor))\r\n    print(\"an edit is found at the entry that changed and a dropped tail is found only against a head stored elsewhere; a hash chain shows consistency and not honesty\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: split-brain with and without fencing at the target ---\nno fencing at the target   A token 1, B token 2 | A's late write accepted: True | final value: from-A\nfenced at the target       A token 1, B token 2 | A's late write accepted: False | final value: from-B\nboth workers believed they owned the workflow after the pause, and only the target that compared tokens atomically kept B's value; a check inside the worker could not help, because the stale worker is exactly the one whose view is out of date\n\n--- 2. Genuinely measuring: eight threads racing for one lease ---\ntokens handed out: [1] | refused: 7\none immediate transaction per acquire let exactly one thread take the lease and refused the other seven, and a lease only says who may try, so the fencing check at the target is still needed\n\n--- 3. Genuinely running: a SAGA with durable step state ---\n  execute inventory\n  execute payment\n  forward failure at shipping: Shipping provider unavailable\n  compensate payment\n  compensate inventory\nresult: COMPENSATED | steps: [('inventory', 'EXECUTED', 'COMPENSATED'), ('payment', 'EXECUTED', 'COMPENSATED'), ('shipping', 'FAILED', 'NOT_STARTED')]\neffects: {'reserve': 1, 'charge': 1, 'release': 1, 'refund': 1}\nshipping failed, so the payment was compensated before the inventory, in reverse order, and each step's status is a row in the database rather than a list in memory; the refund here is a recorded row, and a real refund does not undo fees or notifications\n\n--- 4. Genuinely running: a crash during compensation ---\nstable compensation key  refunds recorded: 1 | releases: 1\nrandom key per retry     refunds recorded: 2 | releases: 1\nthe refund was applied, the worker crashed before writing that down and the resumed run repeated it, which a stable key made harmless and a fresh random key turned into a second refund; the lab's provider is a table that ignores a repeated key, and a real provider has to offer that guarantee\n\n--- 5. Genuinely running: failure injection across the forward path ---\ncrash point           idempotent provider    provider without keys\nbefore_in_flight   COMMITTED, 1 effect(s)   COMMITTED, 1 effect(s)\nafter_in_flight    COMMITTED, 1 effect(s)   COMMITTED, 1 effect(s)\nafter_effect       COMMITTED, 1 effect(s)   COMMITTED, 2 effect(s)\nafter_record       COMMITTED, 1 effect(s)   COMMITTED, 2 effect(s)\nafter_verifying    COMMITTED, 1 effect(s)   COMMITTED, 1 effect(s)\nafter_commit       COMMITTED, 1 effect(s)   COMMITTED, 1 effect(s)\nresuming from the checkpoint never repeats the effect when the provider keeps a ledger of keys, and a provider without one made 2 effects at both crash points that fall after the effect and before the checkpoint moved to VERIFYING, including the point after the record was written, because the resumed run still saw IN_FLIGHT; crashes before the effect or after VERIFYING were harmless, and the checkpoint here is a dictionary that survives the simulated crash\n\n--- 6. Genuinely running: validating a stored history ---\ngood history: None\ntampered history: ('APPROVED', 'COMMITTED')\na checkpoint table can be checked against the allowed transitions after the fact, and the first illegal jump is named; this finds an impossible sequence and cannot prove that a legal-looking one really happened\n\n--- 7. Genuinely running: a hash-chained audit record with fencing tokens ---\nintact: (True, None)\nfencing token edited in entry 3: (False, 2)\nlast entry dropped, no anchor: (True, None) | with the saved head: (False, 'anchor mismatch')\nan edit is found at the entry that changed and a dropped tail is found only against a head stored elsewhere; a hash chain shows consistency and not honesty"
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
    "headingEn": "Experiment 1: Split-brain with and without fencing at the target",
    "headingKn": "ಪ್ರಯೋಗ 1: Split-brain with and without fencing at the target",
    "bodyEn": "What it ran: Split-brain with and without fencing at the target. What the lab concluded: both workers believed they owned the workflow after the pause, and only the target that compared tokens atomically kept B's value; a check inside the worker could not help, because the stale worker is exactly the one whose view is out of date",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Split-brain with and without fencing at the target. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): both workers believed they owned the workflow after the pause, and only the target that compared tokens atomically kept B's value; a check inside the worker could not help, because the stale worker is exactly the one whose view is out of date"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: split-brain with and without fencing at the target ---\nno fencing at the target   A token 1, B token 2 | A's late write accepted: True | final value: from-A\nfenced at the target       A token 1, B token 2 | A's late write accepted: False | final value: from-B"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Eight threads racing for one lease",
    "headingKn": "ಪ್ರಯೋಗ 2: Eight threads racing for one lease",
    "bodyEn": "What it ran: Eight threads racing for one lease. What the lab concluded: one immediate transaction per acquire let exactly one thread take the lease and refused the other seven, and a lease only says who may try, so the fencing check at the target is still needed",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Eight threads racing for one lease. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): one immediate transaction per acquire let exactly one thread take the lease and refused the other seven, and a lease only says who may try, so the fencing check at the target is still needed"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely measuring: eight threads racing for one lease ---\ntokens handed out: [1] | refused: 7"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: A SAGA with durable step state",
    "headingKn": "ಪ್ರಯೋಗ 3: A SAGA with durable step state",
    "bodyEn": "What it ran: A SAGA with durable step state. What the lab concluded: shipping failed, so the payment was compensated before the inventory, in reverse order, and each step's status is a row in the database rather than a list in memory; the refund here is a recorded row, and a real refund does not undo fees or notifications",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A SAGA with durable step state. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): shipping failed, so the payment was compensated before the inventory, in reverse order, and each step's status is a row in the database rather than a list in memory; the refund here is a recorded row, and a real refund does not undo fees or notifications"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: a SAGA with durable step state ---\n  execute inventory\n  execute payment\n  forward failure at shipping: Shipping provider unavailable\n  compensate payment\n  compensate inventory\nresult: COMPENSATED | steps: [('inventory', 'EXECUTED', 'COMPENSATED'), ('payment', 'EXECUTED', 'COMPENSATED'), ('shipping', 'FAILED', 'NOT_STARTED')]\neffects: {'reserve': 1, 'charge': 1, 'release': 1, 'refund': 1}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A crash during compensation",
    "headingKn": "ಪ್ರಯೋಗ 4: A crash during compensation",
    "bodyEn": "What it ran: A crash during compensation. What the lab concluded: the refund was applied, the worker crashed before writing that down and the resumed run repeated it, which a stable key made harmless and a fresh random key turned into a second refund; the lab's provider is a table that ignores a repeated key, and a real provider has to offer that guarantee",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A crash during compensation. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the refund was applied, the worker crashed before writing that down and the resumed run repeated it, which a stable key made harmless and a fresh random key turned into a second refund; the lab's provider is a table that ignores a repeated key, and a real provider has to offer that guarantee"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a crash during compensation ---\nstable compensation key  refunds recorded: 1 | releases: 1\nrandom key per retry     refunds recorded: 2 | releases: 1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Failure injection across the forward path",
    "headingKn": "ಪ್ರಯೋಗ 5: Failure injection across the forward path",
    "bodyEn": "What it ran: Failure injection across the forward path. What the lab concluded: resuming from the checkpoint never repeats the effect when the provider keeps a ledger of keys, and a provider without one made 2 effects at both crash points that fall after the effect and before the checkpoint moved to VERIFYING, including the point after the record was written, because the resumed run still saw IN_FLIGHT; crashes before the effect or after VERIFYING were harmless, and the checkpoint here is a dictionary that survives the simulated crash",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Failure injection across the forward path. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): resuming from the checkpoint never repeats the effect when the provider keeps a ledger of keys, and a provider without one made 2 effects at both crash points that fall after the effect and before the checkpoint moved to VERIFYING, including the point after the record was written, because the resumed run still saw IN_FLIGHT; crashes before the effect or after VERIFYING were harmless, and the checkpoint here is a dictionary that survives the simulated crash"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: failure injection across the forward path ---\ncrash point           idempotent provider    provider without keys\nbefore_in_flight   COMMITTED, 1 effect(s)   COMMITTED, 1 effect(s)\nafter_in_flight    COMMITTED, 1 effect(s)   COMMITTED, 1 effect(s)\nafter_effect       COMMITTED, 1 effect(s)   COMMITTED, 2 effect(s)\nafter_record       COMMITTED, 1 effect(s)   COMMITTED, 2 effect(s)\nafter_verifying    COMMITTED, 1 effect(s)   COMMITTED, 1 effect(s)\nafter_commit       COMMITTED, 1 effect(s)   COMMITTED, 1 effect(s)"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: Validating a stored history",
    "headingKn": "ಪ್ರಯೋಗ 6: Validating a stored history",
    "bodyEn": "What it ran: Validating a stored history. What the lab concluded: a checkpoint table can be checked against the allowed transitions after the fact, and the first illegal jump is named; this finds an impossible sequence and cannot prove that a legal-looking one really happened",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Validating a stored history. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a checkpoint table can be checked against the allowed transitions after the fact, and the first illegal jump is named; this finds an impossible sequence and cannot prove that a legal-looking one really happened"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: validating a stored history ---\ngood history: None\ntampered history: ('APPROVED', 'COMMITTED')"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 7: A hash-chained audit record with fencing tokens",
    "headingKn": "ಪ್ರಯೋಗ 7: A hash-chained audit record with fencing tokens",
    "bodyEn": "What it ran: A hash-chained audit record with fencing tokens. What the lab concluded: an edit is found at the entry that changed and a dropped tail is found only against a head stored elsewhere; a hash chain shows consistency and not honesty",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A hash-chained audit record with fencing tokens. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): an edit is found at the entry that changed and a dropped tail is found only against a head stored elsewhere; a hash chain shows consistency and not honesty"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 7. Genuinely running: a hash-chained audit record with fencing tokens ---\nintact: (True, None)\nfencing token edited in entry 3: (False, 2)\nlast entry dropped, no anchor: (True, None) | with the saved head: (False, 'anchor mismatch')"
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
    "headingEn": "Genuinely Found: Fencing, Lease Race and SAGA",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Fencing, Lease ಓಟ ಮತ್ತು SAGA",
    "bodyEn": "Section 1: without fencing the late write from token 1 was accepted and the value ended from-A, with fencing it was refused and the value stayed from-B. Section 2: eight threads handed out tokens [1] and refused 7. Section 3: shipping failed, payment and then inventory were compensated, the result was COMPENSATED and each of reserve, charge, release and refund had 1 effect.",
    "bodyKn": "ವಿಭಾಗ 1: fencing ಇಲ್ಲದೆ token 1 ನ ತಡವಾದ ಬರಹ ಸ್ವೀಕರಿಸಲ್ಪಟ್ಟು ಮೌಲ್ಯ from-A ಆಯಿತು, fencing ಇದ್ದಾಗ ಅದು ನಿರಾಕರಿಸಲ್ಪಟ್ಟು ಮೌಲ್ಯ from-B ಆಗಿ ಉಳಿಯಿತು. ವಿಭಾಗ 2: ಎಂಟು threads tokens [1] ನೀಡಿ 7 ನಿರಾಕರಿಸಿದವು. ವಿಭಾಗ 3: shipping ವಿಫಲವಾಯಿತು, payment ನಂತರ inventory ಪರಿಹರಿಸಲ್ಪಟ್ಟವು, ಫಲಿತಾಂಶ COMPENSATED ಮತ್ತು reserve, charge, release ಮತ್ತು refund ಪ್ರತಿಯೊಂದಕ್ಕೂ 1 ಪರಿಣಾಮ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Compensation Crash, Injection and Audit",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪರಿಹಾರ Crash, ಚುಚ್ಚುವಿಕೆ ಮತ್ತು ಲೆಕ್ಕಪರಿಶೋಧನೆ",
    "bodyEn": "Section 4: after a compensation crash the stable key gave 1 refund and a random key per retry gave 2. Section 5: with an idempotent provider every crash point ended COMMITTED with 1 effect, and a provider without keys made 2 effects at after_effect and after_record and 1 elsewhere. Section 6: the good history had no illegal move and the tampered one named APPROVED to COMMITTED. Section 7: the intact chain verified, an edited fencing token failed at index 2, and a dropped last entry passed without an anchor and failed with the saved head.",
    "bodyKn": "ವಿಭಾಗ 4: ಪರಿಹಾರ crash ನ ನಂತರ ಸ್ಥಿರ key 1 refund ನೀಡಿತು ಮತ್ತು ಪ್ರತಿ ಮರುಪ್ರಯತ್ನಕ್ಕೆ ಯಾದೃಚ್ಛಿಕ key 2 ನೀಡಿತು. ವಿಭಾಗ 5: idempotent ಪೂರೈಕೆದಾರನೊಂದಿಗೆ ಪ್ರತಿ crash ಬಿಂದು 1 ಪರಿಣಾಮದೊಂದಿಗೆ COMMITTED ಆಯಿತು, ಮತ್ತು key ಇಲ್ಲದ ಪೂರೈಕೆದಾರ after_effect ಮತ್ತು after_record ನಲ್ಲಿ 2 ಪರಿಣಾಮ ಮತ್ತು ಬೇರೆಡೆ 1 ಮಾಡಿತು. ವಿಭಾಗ 6: ಒಳ್ಳೆಯ ಇತಿಹಾಸದಲ್ಲಿ ಅಕ್ರಮ ಚಲನೆ ಇರಲಿಲ್ಲ ಮತ್ತು ತಿರುಚಿದ್ದು APPROVED ನಿಂದ COMMITTED ಹೆಸರಿಸಿತು. ವಿಭಾಗ 7: ಅಖಂಡ ಸರಪಳಿ ಪರಿಶೀಲಿಸಲ್ಪಟ್ಟಿತು, ಸಂಪಾದಿಸಿದ fencing token ಸೂಚ್ಯಂಕ 2 ರಲ್ಲಿ ವಿಫಲವಾಯಿತು, ಮತ್ತು ಕೈಬಿಟ್ಟ ಕೊನೆಯ ಪ್ರವೇಶ anchor ಇಲ್ಲದೆ ಪಾಸ್ ಆಗಿ ಉಳಿಸಿದ head ನೊಂದಿಗೆ ವಿಫಲವಾಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A lease says who may try, so the stale worker is stopped only by a fence enforced at the target, and the undo has to carry a stable key because it can be retried like any other action.",
    "bodyKn": "lease ಯಾರು ಪ್ರಯತ್ನಿಸಬಹುದು ಎಂದು ಹೇಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಹಳೆಯ worker ಅನ್ನು target ನಲ್ಲಿ ಜಾರಿಗೊಳಿಸಿದ fence ಮಾತ್ರ ನಿಲ್ಲಿಸುತ್ತದೆ, ಮತ್ತು undo ಬೇರೆ ಯಾವುದೇ ಕ್ರಿಯೆಯಂತೆ ಮರುಪ್ರಯತ್ನಿಸಲ್ಪಡಬಹುದಾದ್ದರಿಂದ ಅದು ಸ್ಥಿರ key ಹೊಂದಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"if the worker checks its lease it cannot act while stale.\" The unfenced target accepted the stale write.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"worker ತನ್ನ lease ಪರಿಶೀಲಿಸಿದರೆ ಹಳೆಯದಾಗಿದ್ದಾಗ ಕಾರ್ಯ ಮಾಡಲಾರದು.\" fence ಇಲ್ಲದ target ಹಳೆಯ ಬರಹ ಸ್ವೀಕರಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Split brain: two workers both acting as owner. Fence: a token comparison at the resource. SAGA: steps with their own undo. Compensation key: a stable identity for the undo.",
    "bodyKn": "Split brain: ಇಬ್ಬರು workers ಇಬ್ಬರೂ ಮಾಲೀಕರಂತೆ ವರ್ತಿಸುವುದು. Fence: ಸಂಪನ್ಮೂಲದಲ್ಲಿ token ಹೋಲಿಕೆ. SAGA: ತಮ್ಮದೇ undo ಇರುವ ಹಂತಗಳು. ಪರಿಹಾರ key: undo ಗೆ ಸ್ಥಿರ ಗುರುತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Only the fenced target kept B value. 2) One lease winner out of eight. 3) The SAGA undid payment before inventory. 4) A random undo key made 2 refunds. 5) A provider without keys made 2 effects at two crash points.",
    "bodyKn": "1) fence ಇರುವ target ಮಾತ್ರ B ಮೌಲ್ಯ ಉಳಿಸಿತು. 2) ಎಂಟರಲ್ಲಿ ಒಬ್ಬ lease ವಿಜೇತ. 3) SAGA payment ಅನ್ನು inventory ಮೊದಲು undo ಮಾಡಿತು. 4) ಯಾದೃಚ್ಛಿಕ undo key 2 refunds ಮಾಡಿತು. 5) key ಇಲ್ಲದ ಪೂರೈಕೆದಾರ ಎರಡು crash ಬಿಂದುಗಳಲ್ಲಿ 2 ಪರಿಣಾಮ ಮಾಡಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What value did the target hold after the late write when it had no fencing?",
      "qKn": "fencing ಇಲ್ಲದಾಗ ತಡವಾದ ಬರಹದ ನಂತರ target ಯಾವ ಮೌಲ್ಯ ಹೊಂದಿತ್ತು?",
      "opts": [
       "from-A",
       "from-B",
       "empty",
       "an error"
      ],
      "optsKn": [
       "from-A (A ಯಿಂದ)",
       "from-B (B ಯಿಂದ)",
       "ಖಾಲಿ",
       "ದೋಷ"
      ],
      "correct": 0
     },
     {
      "q": "How many refunds did a random compensation key per retry produce?",
      "qKn": "ಪ್ರತಿ ಮರುಪ್ರಯತ್ನಕ್ಕೆ ಯಾದೃಚ್ಛಿಕ ಪರಿಹಾರ key ಎಷ್ಟು refunds ಮಾಡಿತು?",
      "opts": [
       "2",
       "1",
       "0",
       "3"
      ],
      "optsKn": [
       "2",
       "1",
       "0",
       "3"
      ],
      "correct": 0
     },
     {
      "q": "How many of eight threads got the lease?",
      "qKn": "ಎಂಟು threads ನಲ್ಲಿ ಎಷ್ಟು lease ಪಡೆದವು?",
      "opts": [
       "1",
       "8",
       "4",
       "0"
      ],
      "optsKn": [
       "1",
       "8",
       "4",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "In which order did the SAGA compensate after shipping failed?",
      "qKn": "shipping ವಿಫಲವಾದ ನಂತರ SAGA ಯಾವ ಕ್ರಮದಲ್ಲಿ ಪರಿಹರಿಸಿತು?",
      "opts": [
       "Payment, then inventory",
       "Inventory, then payment",
       "Shipping only",
       "Both at once"
      ],
      "optsKn": [
       "Payment, ನಂತರ inventory",
       "Inventory, ನಂತರ payment",
       "Shipping ಮಾತ್ರ",
       "ಎರಡೂ ಒಮ್ಮೆಗೇ"
      ],
      "correct": 0
     },
     {
      "q": "What did a dropped last audit entry need to be detected?",
      "qKn": "ಕೈಬಿಟ್ಟ ಕೊನೆಯ ಲೆಕ್ಕಪರಿಶೋಧನೆ ಪ್ರವೇಶ ಪತ್ತೆಯಾಗಲು ಏನು ಬೇಕಿತ್ತು?",
      "opts": [
       "A saved head used as an anchor",
       "Nothing, the chain alone found it",
       "A bigger log",
       "A new lease"
      ],
      "optsKn": [
       "anchor ಆಗಿ ಬಳಸಿದ ಉಳಿಸಿದ head",
       "ಏನೂ ಇಲ್ಲ, ಸರಪಳಿ ಮಾತ್ರ ಕಂಡುಹಿಡಿಯಿತು",
       "ದೊಡ್ಡ ಲಾಗ್",
       "ಹೊಸ lease"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
