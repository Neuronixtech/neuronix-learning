module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6466020ed05b3215b9",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "HITL: Propose-Then-Commit (Part 3 of 3) — Production Controls",
 "titleKn": "HITL: Propose-Then-Commit (ಭಾಗ 3 / 3) — ಉತ್ಪಾದನಾ ನಿಯಂತ್ರಣಗಳು",
 "desc": "Test an atomic claim with expiry, version and kill switch, an outbox, a hash-chained audit log and dual approval.",
 "descKn": "expiry, ಆವೃತ್ತಿ ಮತ್ತು kill switch ಇರುವ ಪರಮಾಣು claim, outbox, hash-ಸರಪಳಿ ಲೆಕ್ಕಪರಿಶೋಧನೆ ಮತ್ತು ಎರಡು-ವ್ಯಕ್ತಿ ಅನುಮೋದನೆ ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Claim a proposal atomically.",
  "Expire an approval.",
  "Guard a resource version.",
  "Deduplicate an outbox.",
  "Anchor an audit chain."
 ],
 "objectivesKn": [
  "proposal ಅನ್ನು ಪರಮಾಣುವಾಗಿ claim ಮಾಡಿ.",
  "ಅನುಮೋದನೆ ಮುಕ್ತಾಯಗೊಳಿಸಿ.",
  "ಸಂಪನ್ಮೂಲ ಆವೃತ್ತಿ ರಕ್ಷಿಸಿ.",
  "outbox ನಕಲು ತೆಗೆಯಿರಿ.",
  "ಲೆಕ್ಕಪರಿಶೋಧನೆ ಸರಪಳಿ anchor ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "HITL: Propose-Then-Commit (Part 3 of 3)",
    "textKn": "HITL: Propose-Then-Commit (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: a unique constraint on the operation identity, approval expiry, an atomic claim against an unsafe claim under eight threads, a resource-version guard, a kill switch at claim time, an outbox with at-least-once delivery, a hash-chained audit log, dual approval and a four-way verification result. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind propose-then-commit (digests and idempotency keys, a state machine, a reviewer checklist, digest-bound approval, lost-response reconciliation, post-action verification, atomic claims, expiry, a kill switch, an outbox and a hash-chained audit log), not the real software, and the payment provider is a JSON ledger or a counter, reviewers are plain strings, the clock is a number the lab chooses, the stores have no real locking across processes and nothing is paid or sent, so no real LLM behaviour is measured. The original code/main.py was not supplied and the lesson Part 2 showed its workflow code only in fragments, so the labs are our own full implementation and the expected outputs were produced by running them. The LangGraph interrupt(), Microsoft RequestInfoEvent and Cloudflare waitForApproval() material and the EU AI Act Article 14 remarks are conceptual or cited and were not run here because they need third-party services. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: operation ಗುರುತಿನ ಮೇಲೆ ಅನನ್ಯ ನಿರ್ಬಂಧ, ಅನುಮೋದನೆ ಮುಕ್ತಾಯ, ಎಂಟು threads ಅಡಿ ಅಸುರಕ್ಷಿತ claim ವಿರುದ್ಧ ಪರಮಾಣು claim, ಸಂಪನ್ಮೂಲ-ಆವೃತ್ತಿ ರಕ್ಷಣೆ, claim ಸಮಯದಲ್ಲಿ kill switch, ಕನಿಷ್ಠ-ಒಮ್ಮೆ ವಿತರಣೆ ಇರುವ outbox, hash-ಸರಪಳಿ ಲೆಕ್ಕಪರಿಶೋಧನೆ, ಎರಡು-ವ್ಯಕ್ತಿ ಅನುಮೋದನೆ ಮತ್ತು ನಾಲ್ಕು-ಮಾರ್ಗ ಪರಿಶೀಲನೆ ಫಲಿತಾಂಶ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು propose-then-commit (digest ಮತ್ತು idempotency key, ಸ್ಥಿತಿ ಯಂತ್ರ, ವಿಮರ್ಶಕ ಚೆಕ್‌ಲಿಸ್ಟ್, digest-ಬಂಧಿತ ಅನುಮೋದನೆ, ಕಳೆದುಹೋದ ಪ್ರತಿಕ್ರಿಯೆಯ ಸಮನ್ವಯ, ಕ್ರಿಯೆಯ ನಂತರದ ಪರಿಶೀಲನೆ, ಪರಮಾಣು claim, ಅವಧಿ ಮುಕ್ತಾಯ, kill switch, outbox ಮತ್ತು hash-ಸರಪಳಿ ಲೆಕ್ಕಪರಿಶೋಧನೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪಾವತಿ ಪೂರೈಕೆದಾರ JSON ಲೆಡ್ಜರ್ ಅಥವಾ ಕೌಂಟರ್, ವಿಮರ್ಶಕರು ಸರಳ ಸ್ಟ್ರಿಂಗ್‌ಗಳು, ಗಡಿಯಾರ ಲ್ಯಾಬ್ ಆಯ್ಕೆ ಮಾಡುವ ಸಂಖ್ಯೆ, ಸಂಗ್ರಹಗಳಿಗೆ ಪ್ರಕ್ರಿಯೆಗಳ ನಡುವೆ ನಿಜ ಲಾಕಿಂಗ್ ಇಲ್ಲ ಮತ್ತು ಏನೂ ಪಾವತಿಸಲ್ಪಡುವುದಿಲ್ಲ ಅಥವಾ ಕಳುಹಿಸಲ್ಪಡುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ ಮತ್ತು lesson ನ ಭಾಗ 2 ತನ್ನ workflow ಕೋಡ್ ಅನ್ನು ತುಣುಕುಗಳಲ್ಲಿ ಮಾತ್ರ ತೋರಿಸಿತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಸಂಪೂರ್ಣ ಅನುಷ್ಠಾನ ಮತ್ತು ನಿರೀಕ್ಷಿತ ಔಟ್‌ಪುಟ್ ಅನ್ನು ಅವುಗಳನ್ನು ಓಡಿಸಿ ಪಡೆಯಲಾಗಿದೆ. LangGraph interrupt(), Microsoft RequestInfoEvent ಮತ್ತು Cloudflare waitForApproval() ವಿಷಯ ಮತ್ತು EU AI Act Article 14 ಟಿಪ್ಪಣಿಗಳು ಪರಿಕಲ್ಪನಾತ್ಮಕ ಅಥವಾ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಮೂರನೇ ಪಕ್ಷದ ಸೇವೆಗಳು ಬೇಕಾದ್ದರಿಂದ ಇಲ್ಲಿ ಓಡಿಸಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Approval Is Not Enough Without an Atomic Claim",
    "textKn": "ಪರಮಾಣು Claim ಇಲ್ಲದೆ ಅನುಮೋದನೆ ಸಾಕಾಗದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "SQLite, Threads and a Clock You Control",
    "headingKn": "SQLite, Threads ಮತ್ತು ನೀವು ನಿಯಂತ್ರಿಸುವ ಗಡಿಯಾರ",
    "bodyEn": "An approval can expire, the order can change after the reviewer looked at it, an operator can hit a stop, and several workers can race for the same proposal. This part puts those checks into one SQLite claim that runs in a single immediate transaction, and tests each one: a unique constraint on the operation identity, expiry on a simulated clock, eight threads claiming one proposal with an atomic and with an unsafe claim, a resource version guard, a kill switch read inside the claim, an outbox with at-least-once delivery, a hash-chained audit log, dual approval and a verification result with four outcomes.",
    "bodyKn": "ಅನುಮೋದನೆ ಮುಕ್ತಾಯವಾಗಬಹುದು, ವಿಮರ್ಶಕ ನೋಡಿದ ನಂತರ ಆರ್ಡರ್ ಬದಲಾಗಬಹುದು, ಆಪರೇಟರ್ ನಿಲುಗಡೆ ಒತ್ತಬಹುದು, ಮತ್ತು ಹಲವು workers ಒಂದೇ proposal ಗೆ ಓಟ ನಡೆಸಬಹುದು. ಈ ಭಾಗ ಆ ಪರಿಶೀಲನೆಗಳನ್ನು ಒಂದೇ immediate ವಹಿವಾಟಿನಲ್ಲಿ ಓಡುವ ಒಂದು SQLite claim ಗೆ ಹಾಕಿ ಪ್ರತಿಯೊಂದನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ: operation ಗುರುತಿನ ಮೇಲೆ ಅನನ್ಯ ನಿರ್ಬಂಧ, ಅನುಕರಿಸಿದ ಗಡಿಯಾರದ ಮೇಲೆ ಮುಕ್ತಾಯ, ಒಂದು proposal ಅನ್ನು ಪರಮಾಣು ಮತ್ತು ಅಸುರಕ್ಷಿತ claim ನೊಂದಿಗೆ claim ಮಾಡುವ ಎಂಟು threads, ಸಂಪನ್ಮೂಲ ಆವೃತ್ತಿ ರಕ್ಷಣೆ, claim ಒಳಗೆ ಓದುವ kill switch, ಕನಿಷ್ಠ-ಒಮ್ಮೆ ವಿತರಣೆ ಇರುವ outbox, hash-ಸರಪಳಿ ಲೆಕ್ಕಪರಿಶೋಧನೆ, ಎರಡು-ವ್ಯಕ್ತಿ ಅನುಮೋದನೆ ಮತ್ತು ನಾಲ್ಕು ಫಲಿತಾಂಶಗಳ ಪರಿಶೀಲನೆ ಫಲಿತಾಂಶ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Production Controls",
    "headingKn": "ಉತ್ಪಾದನಾ ನಿಯಂತ್ರಣಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">production controls live inside the atomic step</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">claim</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">one atomic step</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">expiry</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">checked inside it</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">outbox</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">dedupe at receiver</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">audit</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">anchor the head</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">production controls live inside the atomic step</text></svg>",
    "captionEn": "Expiry, version, kill switch and ownership are all checked in one claim.",
    "captionKn": "ಮುಕ್ತಾಯ, ಆವೃತ್ತಿ, kill switch ಮತ್ತು ಒಡೆತನ ಎಲ್ಲವೂ ಒಂದೇ claim ನಲ್ಲಿ ಪರಿಶೀಲಿಸಲ್ಪಡುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The nine experiments",
    "headingKn": "ಒಂಬತ್ತು ಪ್ರಯೋಗಗಳು",
    "headers": [
     "Experiment",
     "What the lab shows"
    ],
    "rows": [
     [
      "unique constraint",
      "a repeat returns the stored proposal, a changed payload raises a conflict"
     ],
     [
      "expiry",
      "claim at 999 works, claim at 1000 is refused"
     ],
     [
      "race",
      "8 threads, atomic claim against read-then-write claim"
     ],
     [
      "resource version",
      "version 7 claims, version 8 is refused"
     ],
     [
      "kill switch",
      "refused while on, claimed after it is off"
     ],
     [
      "outbox",
      "5 rows, 5 or 10 effects by provider type"
     ],
     [
      "audit and dual approval",
      "hash chain with an anchor and a two-reviewer rule"
     ]
    ]
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
    "filename": "pc_3.py",
    "headingEn": "Store, provider, audit log and outcomes",
    "headingKn": "ಸಂಗ್ರಹ, ಪೂರೈಕೆದಾರ, ಲೆಕ್ಕಪರಿಶೋಧನೆ ಮತ್ತು ಫಲಿತಾಂಶಗಳು",
    "descEn": "Store.claim runs one BEGIN IMMEDIATE transaction that checks the kill switch, the status, the expiry and the resource version before updating, unsafe_claim reads then writes without a condition, AuditLog chains hashes and verification_outcome separates four results.",
    "descKn": "Store.claim ಒಂದು BEGIN IMMEDIATE ವಹಿವಾಟು ಓಡಿಸಿ ನವೀಕರಿಸುವ ಮೊದಲು kill switch, ಸ್ಥಿತಿ, ಮುಕ್ತಾಯ ಮತ್ತು ಸಂಪನ್ಮೂಲ ಆವೃತ್ತಿ ಪರಿಶೀಲಿಸುತ್ತದೆ, unsafe_claim ಷರತ್ತಿಲ್ಲದೆ ಓದಿ ನಂತರ ಬರೆಯುತ್ತದೆ, AuditLog hash ಗಳನ್ನು ಸರಪಳಿ ಮಾಡುತ್ತದೆ ಮತ್ತು verification_outcome ನಾಲ್ಕು ಫಲಿತಾಂಶಗಳನ್ನು ಬೇರ್ಪಡಿಸುತ್ತದೆ.",
    "code": "class Store:\r\n    def __init__(self, path):\r\n        self.path = str(path)\r\n        with self.conn() as db:\r\n            db.executescript(\"\"\"\r\n            CREATE TABLE IF NOT EXISTS proposals (proposal_id TEXT PRIMARY KEY, thread_id TEXT NOT NULL, operation_id TEXT NOT NULL, action_json TEXT NOT NULL, action_digest TEXT NOT NULL,\r\n              status TEXT NOT NULL, approved_by TEXT, expires_at INTEGER, resource_version INTEGER, claimed_by TEXT, UNIQUE(thread_id, operation_id));\r\n            CREATE TABLE IF NOT EXISTS outbox (event_id TEXT PRIMARY KEY, proposal_id TEXT NOT NULL, status TEXT NOT NULL, attempts INTEGER NOT NULL DEFAULT 0);\r\n            CREATE TABLE IF NOT EXISTS settings (name TEXT PRIMARY KEY, value INTEGER NOT NULL);\r\n            \"\"\")\r\n\r\n    @contextlib.contextmanager\r\n    def conn(self):\r\n        c = sqlite3.connect(self.path, timeout=10, isolation_level=None)\r\n        try:\r\n            yield c\r\n        finally:\r\n            c.close()\r\n\r\n    def create(self, thread_id, operation_id, action, resource_version=1):\r\n        d = digest(action)\r\n        with self.conn() as db:\r\n            db.execute(\"BEGIN IMMEDIATE\")\r\n            row = db.execute(\"SELECT proposal_id, action_digest FROM proposals WHERE thread_id=? AND operation_id=?\", (thread_id, operation_id)).fetchone()\r\n            if row:\r\n                db.execute(\"COMMIT\")\r\n                if row[1] != d:\r\n                    raise Conflict(\"operation identity reused with a different action\")\r\n                return row[0], False\r\n            pid = digest({\"t\": thread_id, \"o\": operation_id, \"a\": action})\r\n            db.execute(\"INSERT INTO proposals (proposal_id, thread_id, operation_id, action_json, action_digest, status, resource_version) VALUES (?,?,?,?,?,?,?)\",\r\n                       (pid, thread_id, operation_id, canonical(action), d, \"PENDING_REVIEW\", resource_version))\r\n            db.execute(\"COMMIT\")\r\n            return pid, True\r\n\r\n    def approve(self, pid, reviewer, expires_at):\r\n        with self.conn() as db:\r\n            n = db.execute(\"UPDATE proposals SET status='APPROVED', approved_by=?, expires_at=? WHERE proposal_id=? AND status='PENDING_REVIEW'\", (reviewer, expires_at, pid)).rowcount\r\n        return n == 1\r\n\r\n    def status(self, pid):\r\n        with self.conn() as db:\r\n            return db.execute(\"SELECT status, claimed_by FROM proposals WHERE proposal_id=?\", (pid,)).fetchone()\r\n\r\n    def claim(self, pid, worker, now, current_resource_version):\r\n        \"\"\"Atomic claim: succeeds only if still APPROVED, not expired, not killed and the resource version is unchanged.\"\"\"\r\n        with self.conn() as db:\r\n            db.execute(\"BEGIN IMMEDIATE\")\r\n            if db.execute(\"SELECT value FROM settings WHERE name='kill_switch'\").fetchone() == (1,):\r\n                db.execute(\"ROLLBACK\")\r\n                return False, \"kill switch active\"\r\n            row = db.execute(\"SELECT status, expires_at, resource_version FROM proposals WHERE proposal_id=?\", (pid,)).fetchone()\r\n            if row is None or row[0] != \"APPROVED\":\r\n                db.execute(\"ROLLBACK\")\r\n                return False, \"not approved or already claimed\"\r\n            if row[1] is not None and now >= row[1]:\r\n                db.execute(\"ROLLBACK\")\r\n                return False, \"approval expired\"\r\n            if row[2] != current_resource_version:\r\n                db.execute(\"ROLLBACK\")\r\n                return False, \"resource changed since approval\"\r\n            db.execute(\"UPDATE proposals SET status='COMMITTING', claimed_by=? WHERE proposal_id=? AND status='APPROVED'\", (worker, pid))\r\n            db.execute(\"COMMIT\")\r\n            return True, \"claimed\"\r\n\r\n    def unsafe_claim(self, pid, worker):\r\n        \"\"\"Read, check, then write without a condition: the race the lesson warns about.\"\"\"\r\n        with self.conn() as db:\r\n            status = db.execute(\"SELECT status FROM proposals WHERE proposal_id=?\", (pid,)).fetchone()[0]\r\n            if status != \"APPROVED\":\r\n                return False\r\n            time.sleep(0.01)\r\n            db.execute(\"UPDATE proposals SET status='COMMITTING', claimed_by=? WHERE proposal_id=?\", (worker, pid))\r\n            return True\r\n\r\n    def set_kill(self, on):\r\n        with self.conn() as db:\r\n            db.execute(\"INSERT OR REPLACE INTO settings (name, value) VALUES ('kill_switch', ?)\", (1 if on else 0,))\r\n\r\n    def enqueue(self, event_id, pid):\r\n        with self.conn() as db:\r\n            db.execute(\"INSERT OR IGNORE INTO outbox (event_id, proposal_id, status) VALUES (?,?, 'PENDING')\", (event_id, pid))\r\n\r\n\r\nclass Provider:\r\n    def __init__(self, idempotent):\r\n        self.idempotent, self.effects, self.seen = idempotent, 0, set()\r\n\r\n    def refund(self, key):\r\n        if self.idempotent and key in self.seen:\r\n            return \"duplicate ignored\"\r\n        self.seen.add(key)\r\n        self.effects += 1\r\n        return \"refunded\"\r\n\r\n\r\nclass AuditLog:\r\n    def __init__(self):\r\n        self.entries = []\r\n\r\n    def append(self, actor, event, pid):\r\n        prev = self.entries[-1][\"hash\"] if self.entries else \"0\" * 64\r\n        e = {\"actor\": actor, \"event\": event, \"proposal\": pid, \"prev\": prev}\r\n        e[\"hash\"] = digest({k: v for k, v in e.items() if k != \"hash\"})\r\n        self.entries.append(e)\r\n\r\n    def verify(self, anchor=None):\r\n        prev = \"0\" * 64\r\n        for i, e in enumerate(self.entries):\r\n            if e[\"prev\"] != prev or e[\"hash\"] != digest({k: v for k, v in e.items() if k != \"hash\"}):\r\n                return False, i\r\n            prev = e[\"hash\"]\r\n        if anchor is not None and prev != anchor:\r\n            return False, \"anchor mismatch\"\r\n        return True, None\r\n\r\n\r\ndef dual_approved(approvals):\r\n    return len({a[\"reviewer\"] for a in approvals if a[\"approved\"] is True}) >= 2\r\n\r\n\r\ndef verification_outcome(expected, observed, available=True):\r\n    if not available:\r\n        return \"UNKNOWN\"\r\n    if observed is None:\r\n        return \"VERIFIED_FAILURE\"\r\n    if observed == expected:\r\n        return \"VERIFIED_SUCCESS\"\r\n    return \"MISMATCH\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pc_3.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the nine experiments on temporary SQLite files.",
    "descKn": "main() ತಾತ್ಕಾಲಿಕ SQLite ಫೈಲ್‌ಗಳ ಮೇಲೆ ಒಂಬತ್ತು ಪ್ರಯೋಗಗಳನ್ನು ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    action = {\"type\": \"refund\", \"order_id\": \"O-1\", \"amount_minor_units\": 10000, \"currency\": \"USD\"}\r\n    with tempfile.TemporaryDirectory() as d:\r\n        section(\"1. Genuinely running: a unique constraint on the operation identity\")\r\n        s = Store(Path(d) / \"a.db\")\r\n        pid, new = s.create(\"thread-001\", \"refund-001\", action)\r\n        pid2, new2 = s.create(\"thread-001\", \"refund-001\", action)\r\n        print(\"first created:\", new, \"| repeat created:\", new2, \"| same id:\", pid == pid2)\r\n        try:\r\n            s.create(\"thread-001\", \"refund-001\", dict(action, amount_minor_units=50000))\r\n        except Conflict as e:\r\n            print(\"changed amount under the same identity:\", e)\r\n        print(\"the database refuses a second row for the same thread and operation, a repeat returns the stored proposal and a changed payload under the same identity raises a conflict instead of becoming a new authorised action\")\r\n\r\n        section(\"2. Genuinely running: approval expiry on a simulated clock\")\r\n        s.approve(pid, \"reviewer-001\", expires_at=1000)\r\n        print(\"claim at clock 999 with expiry 1000:\", s.claim(pid, \"worker-A\", 999, 1), \"| stored status:\", s.status(pid)[0])\r\n        s2 = Store(Path(d) / \"b.db\")\r\n        p2, _ = s2.create(\"t\", \"o\", action)\r\n        s2.approve(p2, \"reviewer-001\", expires_at=1000)\r\n        print(\"claim at clock 1000 on a second proposal approved with expiry 1000:\", s2.claim(p2, \"worker-A\", 1000, 1))\r\n        print(\"an approval is valid only before its expiry time, a claim made before it succeeded and a claim made at the expiry moment was refused, and the check and the claim happen in one transaction so the clock cannot change between them; the clock is a number chosen by the lab\")\r\n\r\n        section(\"3. Genuinely measuring: eight workers claim one approved proposal\")\r\n        def race(unsafe):\r\n            st = Store(Path(d) / f\"race_{unsafe}.db\")\r\n            p, _ = st.create(\"t\", \"o\", action)\r\n            st.approve(p, \"reviewer-001\", expires_at=10**9)\r\n            wins, lock = [], threading.Lock()\r\n            def work(i):\r\n                ok = st.unsafe_claim(p, f\"w{i}\") if unsafe else st.claim(p, f\"w{i}\", 0, 1)[0]\r\n                with lock:\r\n                    wins.append(ok)\r\n            ts = [threading.Thread(target=work, args=(i,)) for i in range(8)]\r\n            for t in ts:\r\n                t.start()\r\n            for t in ts:\r\n                t.join()\r\n            return sum(wins)\r\n        print(\"atomic claim: workers that believe they own the proposal =\", race(False))\r\n        print(\"read-then-write claim: workers that believe they own the proposal =\", race(True))\r\n        print(\"the conditional update lets exactly one worker claim the proposal, while the version that checks the status and then writes without a condition lets several workers pass the check before any of them writes, so each would run the payment; the unsafe count varies from run to run and the deliberate 10 ms pause between the check and the write exaggerates it\")\r\n\r\n        section(\"4. Genuinely running: a resource that changed after approval\")\r\n        s3 = Store(Path(d) / \"c.db\")\r\n        p3, _ = s3.create(\"t\", \"o\", action, resource_version=7)\r\n        s3.approve(p3, \"reviewer-001\", expires_at=10**9)\r\n        print(\"claim when the order is still at version 7:\", s3.claim(p3, \"w\", 0, 7)[1])\r\n        s3b = Store(Path(d) / \"c2.db\")\r\n        p3b, _ = s3b.create(\"t\", \"o\", action, resource_version=7)\r\n        s3b.approve(p3b, \"reviewer-001\", expires_at=10**9)\r\n        print(\"claim when the order has moved to version 8:\", s3b.claim(p3b, \"w\", 0, 8))\r\n        print(\"the proposal records the version of the order the reviewer saw, so a later change makes the trusted claim refuse and a new proposal and review are needed; this is the guard against approving one state and executing in another\")\r\n\r\n        section(\"5. Genuinely running: a kill switch checked at claim time\")\r\n        s4 = Store(Path(d) / \"d.db\")\r\n        p4, _ = s4.create(\"t\", \"o\", action)\r\n        s4.approve(p4, \"reviewer-001\", expires_at=10**9)\r\n        s4.set_kill(True)\r\n        print(\"approved proposal with the kill switch on:\", s4.claim(p4, \"w\", 0, 1))\r\n        s4.set_kill(False)\r\n        print(\"after the switch is turned off:\", s4.claim(p4, \"w\", 0, 1))\r\n        print(\"an earlier approval does not override an emergency stop, because the claim reads the switch inside the same transaction, and once the operator turns it off the same approval can be used; the switch is a row in the same database here, and a real one lives where the agent cannot write\")\r\n\r\n        section(\"6. Genuinely running: the outbox with at-least-once delivery\")\r\n        s5 = Store(Path(d) / \"e.db\")\r\n        for i in range(5):\r\n            pid_i, _ = s5.create(\"t\", f\"op{i}\", dict(action, order_id=f\"O-{i}\"))\r\n            s5.enqueue(f\"evt-{i}\", pid_i)\r\n        s5.enqueue(\"evt-0\", \"ignored\")\r\n        with s5.conn() as db:\r\n            events = db.execute(\"SELECT event_id, proposal_id FROM outbox ORDER BY event_id\").fetchall()\r\n        print(\"outbox rows after enqueueing evt-0 twice:\", len(events))\r\n        for idem in (True, False):\r\n            prov = Provider(idempotent=idem)\r\n            for _round in range(2):\r\n                for ev, pid_i in events:\r\n                    prov.refund(pid_i)\r\n            print(f\"{'idempotent provider' if idem else 'provider without idempotency'}: every event delivered twice, effects = {prov.effects} for {len(events)} logical operations\")\r\n        print(\"the outbox row is unique per event, so enqueueing the same event twice leaves one row, and when a dispatcher delivers every event twice an idempotent provider makes five effects while a provider that ignores the key makes ten; at-least-once delivery is safe only when the receiver deduplicates\")\r\n\r\n    section(\"7. Genuinely running: a hash-chained audit log\")\r\n    log = AuditLog()\r\n    for actor, ev in ((\"agent\", \"PROPOSAL_CREATED\"), (\"reviewer-001\", \"HUMAN_APPROVED\"), (\"executor\", \"EXECUTION_CLAIMED\"), (\"verifier\", \"VERIFICATION_COMPLETED\")):\r\n        log.append(actor, ev, \"p-1\")\r\n    anchor = log.entries[-1][\"hash\"]\r\n    print(\"intact chain:\", log.verify(anchor))\r\n    saved = json.dumps(log.entries)\r\n    log.entries[1][\"actor\"] = \"reviewer-999\"\r\n    print(\"edit an actor in entry 1:\", log.verify(anchor))\r\n    log.entries = json.loads(saved)[:3]\r\n    print(\"drop the last entry, no anchor:\", log.verify(), \"| with the saved anchor:\", log.verify(anchor))\r\n    print(\"an edited entry is caught at the entry that was changed, and removing the newest entries is invisible unless the latest hash was stored somewhere the writer cannot change; the chain shows consistency, not honesty, and anyone who controls the whole log can rewrite it\")\r\n\r\n    section(\"8. Genuinely running: dual approval\")\r\n    print(\"one reviewer approving twice:\", dual_approved([{\"reviewer\": \"r1\", \"approved\": True}, {\"reviewer\": \"r1\", \"approved\": True}]))\r\n    print(\"two distinct reviewers:\", dual_approved([{\"reviewer\": \"r1\", \"approved\": True}, {\"reviewer\": \"r2\", \"approved\": True}]))\r\n    print(\"one approves and one rejects:\", dual_approved([{\"reviewer\": \"r1\", \"approved\": True}, {\"reviewer\": \"r2\", \"approved\": False}]))\r\n    print(\"counting distinct reviewers stops one person from satisfying a two-person rule, and the lab does not check roles or authentication, which a real rule must\")\r\n\r\n    section(\"9. Genuinely computing: verification has more than two outcomes\")\r\n    expected = {\"amount\": 10000}\r\n    for label, observed, avail in ((\"effect matches\", {\"amount\": 10000}, True), (\"effect differs\", {\"amount\": 10100}, True), (\"no effect found\", None, True), (\"provider unreachable\", None, False)):\r\n        print(f\"{label:21} -> {verification_outcome(expected, observed, avail)}\")\r\n    print(\"collapsing these into a single true or false would treat an unreachable provider like a failed refund, and a mismatch like a success; unknown has to lead to reconciliation and not to completion\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a unique constraint on the operation identity ---\nfirst created: True | repeat created: False | same id: True\nchanged amount under the same identity: operation identity reused with a different action\nthe database refuses a second row for the same thread and operation, a repeat returns the stored proposal and a changed payload under the same identity raises a conflict instead of becoming a new authorised action\n\n--- 2. Genuinely running: approval expiry on a simulated clock ---\nclaim at clock 999 with expiry 1000: (True, 'claimed') | stored status: COMMITTING\nclaim at clock 1000 on a second proposal approved with expiry 1000: (False, 'approval expired')\nan approval is valid only before its expiry time, a claim made before it succeeded and a claim made at the expiry moment was refused, and the check and the claim happen in one transaction so the clock cannot change between them; the clock is a number chosen by the lab\n\n--- 3. Genuinely measuring: eight workers claim one approved proposal ---\natomic claim: workers that believe they own the proposal = 1\nread-then-write claim: workers that believe they own the proposal = 8\nthe conditional update lets exactly one worker claim the proposal, while the version that checks the status and then writes without a condition lets several workers pass the check before any of them writes, so each would run the payment; the unsafe count varies from run to run and the deliberate 10 ms pause between the check and the write exaggerates it\n\n--- 4. Genuinely running: a resource that changed after approval ---\nclaim when the order is still at version 7: claimed\nclaim when the order has moved to version 8: (False, 'resource changed since approval')\nthe proposal records the version of the order the reviewer saw, so a later change makes the trusted claim refuse and a new proposal and review are needed; this is the guard against approving one state and executing in another\n\n--- 5. Genuinely running: a kill switch checked at claim time ---\napproved proposal with the kill switch on: (False, 'kill switch active')\nafter the switch is turned off: (True, 'claimed')\nan earlier approval does not override an emergency stop, because the claim reads the switch inside the same transaction, and once the operator turns it off the same approval can be used; the switch is a row in the same database here, and a real one lives where the agent cannot write\n\n--- 6. Genuinely running: the outbox with at-least-once delivery ---\noutbox rows after enqueueing evt-0 twice: 5\nidempotent provider: every event delivered twice, effects = 5 for 5 logical operations\nprovider without idempotency: every event delivered twice, effects = 10 for 5 logical operations\nthe outbox row is unique per event, so enqueueing the same event twice leaves one row, and when a dispatcher delivers every event twice an idempotent provider makes five effects while a provider that ignores the key makes ten; at-least-once delivery is safe only when the receiver deduplicates\n\n--- 7. Genuinely running: a hash-chained audit log ---\nintact chain: (True, None)\nedit an actor in entry 1: (False, 1)\ndrop the last entry, no anchor: (True, None) | with the saved anchor: (False, 'anchor mismatch')\nan edited entry is caught at the entry that was changed, and removing the newest entries is invisible unless the latest hash was stored somewhere the writer cannot change; the chain shows consistency, not honesty, and anyone who controls the whole log can rewrite it\n\n--- 8. Genuinely running: dual approval ---\none reviewer approving twice: False\ntwo distinct reviewers: True\none approves and one rejects: False\ncounting distinct reviewers stops one person from satisfying a two-person rule, and the lab does not check roles or authentication, which a real rule must\n\n--- 9. Genuinely computing: verification has more than two outcomes ---\neffect matches        -> VERIFIED_SUCCESS\neffect differs        -> MISMATCH\nno effect found       -> VERIFIED_FAILURE\nprovider unreachable  -> UNKNOWN\ncollapsing these into a single true or false would treat an unreachable provider like a failed refund, and a mismatch like a success; unknown has to lead to reconciliation and not to completion"
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
    "headingEn": "Genuinely Found: Constraint, Expiry and Race",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ನಿರ್ಬಂಧ, ಮುಕ್ತಾಯ ಮತ್ತು ಓಟ",
    "bodyEn": "Section 1: the first call created a proposal, the repeat did not and returned the same id, and a changed amount under the same identity raised a conflict. Section 2: a claim at clock 999 with expiry 1000 succeeded and left the status COMMITTING, and a claim at clock 1000 was refused as approval expired. Section 3: in the cached run the atomic claim left 1 worker believing it owned the proposal while the read-then-write claim left 8, and the unsafe count varies from run to run.",
    "bodyKn": "ವಿಭಾಗ 1: ಮೊದಲ ಕರೆ proposal ರಚಿಸಿತು, ಪುನರಾವರ್ತನೆ ರಚಿಸಲಿಲ್ಲ ಮತ್ತು ಅದೇ id ಹಿಂತಿರುಗಿಸಿತು, ಮತ್ತು ಅದೇ ಗುರುತಿನಡಿ ಬದಲಾದ ಮೊತ್ತ conflict ಎತ್ತಿತು. ವಿಭಾಗ 2: ಮುಕ್ತಾಯ 1000 ಇರುವಾಗ ಗಡಿಯಾರ 999 ರಲ್ಲಿ claim ಯಶಸ್ವಿಯಾಗಿ ಸ್ಥಿತಿ COMMITTING ಬಿಟ್ಟಿತು, ಮತ್ತು ಗಡಿಯಾರ 1000 ರಲ್ಲಿ claim ಅನುಮೋದನೆ ಮುಕ್ತಾಯ ಎಂದು ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 3: ಸಂಗ್ರಹಿತ ಓಟದಲ್ಲಿ ಪರಮಾಣು claim 1 worker ತಾನು proposal ಮಾಲೀಕ ಎಂದು ನಂಬುವಂತೆ ಬಿಟ್ಟಿತು, read-then-write claim 8 ಬಿಟ್ಟಿತು, ಮತ್ತು ಅಸುರಕ್ಷಿತ ಎಣಿಕೆ ಓಟದಿಂದ ಓಟಕ್ಕೆ ಬದಲಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Version, Kill Switch and Outbox",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಆವೃತ್ತಿ, Kill Switch ಮತ್ತು Outbox",
    "bodyEn": "Section 4: with the order still at version 7 the claim worked, and after it moved to version 8 it was refused as resource changed since approval. Section 5: with the kill switch on the claim was refused with kill switch active, and after it was turned off the same approval claimed. Section 6: enqueueing evt-0 twice left 5 outbox rows, and delivering every event twice gave 5 effects with an idempotent provider and 10 without.",
    "bodyKn": "ವಿಭಾಗ 4: ಆರ್ಡರ್ ಇನ್ನೂ ಆವೃತ್ತಿ 7 ರಲ್ಲಿದ್ದಾಗ claim ಕೆಲಸ ಮಾಡಿತು, ಮತ್ತು ಅದು ಆವೃತ್ತಿ 8 ಗೆ ಹೋದ ನಂತರ ಅನುಮೋದನೆಯ ನಂತರ ಸಂಪನ್ಮೂಲ ಬದಲಾಗಿದೆ ಎಂದು ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 5: kill switch ಆನ್ ಇದ್ದಾಗ claim kill switch active ನೊಂದಿಗೆ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು, ಮತ್ತು ಆಫ್ ಮಾಡಿದ ನಂತರ ಅದೇ ಅನುಮೋದನೆ claim ಮಾಡಿತು. ವಿಭಾಗ 6: evt-0 ಅನ್ನು ಎರಡು ಬಾರಿ ಸೇರಿಸಿದರೂ 5 outbox ಸಾಲುಗಳು ಉಳಿದವು, ಮತ್ತು ಪ್ರತಿ ಘಟನೆಯನ್ನು ಎರಡು ಬಾರಿ ವಿತರಿಸಿದಾಗ idempotent ಪೂರೈಕೆದಾರನೊಂದಿಗೆ 5 ಪರಿಣಾಮ ಮತ್ತು ಇಲ್ಲದೆ 10 ಬಂದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Audit, Dual Approval and Outcomes",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಲೆಕ್ಕಪರಿಶೋಧನೆ, ಎರಡು-ವ್ಯಕ್ತಿ ಅನುಮೋದನೆ ಮತ್ತು ಫಲಿತಾಂಶಗಳು",
    "bodyEn": "Section 7: the intact chain verified, editing an actor in entry 1 failed at index 1, dropping the last entry passed without an anchor and failed with an anchor mismatch when the saved head was supplied. Section 8: one reviewer approving twice gave False, two distinct reviewers gave True and one approve with one reject gave False. Section 9: the four cases gave VERIFIED_SUCCESS, MISMATCH, VERIFIED_FAILURE and UNKNOWN.",
    "bodyKn": "ವಿಭಾಗ 7: ಅಖಂಡ ಸರಪಳಿ ಪರಿಶೀಲಿಸಲ್ಪಟ್ಟಿತು, ಪ್ರವೇಶ 1 ರಲ್ಲಿ actor ಸಂಪಾದಿಸಿದಾಗ ಸೂಚ್ಯಂಕ 1 ರಲ್ಲಿ ವಿಫಲವಾಯಿತು, ಕೊನೆಯ ಪ್ರವೇಶ ಕೈಬಿಟ್ಟಾಗ anchor ಇಲ್ಲದೆ ಪಾಸ್ ಆಯಿತು ಮತ್ತು ಉಳಿಸಿದ head ನೀಡಿದಾಗ anchor mismatch ನೊಂದಿಗೆ ವಿಫಲವಾಯಿತು. ವಿಭಾಗ 8: ಒಬ್ಬ ವಿಮರ್ಶಕ ಎರಡು ಬಾರಿ ಅನುಮೋದಿಸಿದರೆ False, ಇಬ್ಬರು ವಿಭಿನ್ನ ವಿಮರ್ಶಕರು True, ಮತ್ತು ಒಂದು approve ಮತ್ತು ಒಂದು reject False ನೀಡಿದವು. ವಿಭಾಗ 9: ನಾಲ್ಕು ಪ್ರಕರಣಗಳು VERIFIED_SUCCESS, MISMATCH, VERIFIED_FAILURE ಮತ್ತು UNKNOWN ನೀಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Expiry, version, kill switch and ownership are only safe when they are checked in the same atomic step that takes ownership, and an outbox is only safe when the receiver deduplicates.",
    "bodyKn": "ಮುಕ್ತಾಯ, ಆವೃತ್ತಿ, kill switch ಮತ್ತು ಒಡೆತನ ಒಡೆತನ ತೆಗೆದುಕೊಳ್ಳುವ ಅದೇ ಪರಮಾಣು ಹಂತದಲ್ಲಿ ಪರಿಶೀಲಿಸಿದಾಗ ಮಾತ್ರ ಸುರಕ್ಷಿತ, ಮತ್ತು outbox ಸ್ವೀಕರಿಸುವವರು ನಕಲು ತೆಗೆದಾಗ ಮಾತ್ರ ಸುರಕ್ಷಿತ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a hash chain proves the log is honest.\" Dropping the newest entry passed until a saved head was supplied, and whoever controls the whole log can rewrite it.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"hash ಸರಪಳಿ ಲಾಗ್ ಪ್ರಾಮಾಣಿಕ ಎಂದು ಸಾಬೀತು ಮಾಡುತ್ತದೆ.\" ಉಳಿಸಿದ head ನೀಡುವವರೆಗೆ ಹೊಸ ಪ್ರವೇಶ ಕೈಬಿಟ್ಟದ್ದು ಪಾಸ್ ಆಯಿತು, ಮತ್ತು ಇಡೀ ಲಾಗ್ ನಿಯಂತ್ರಿಸುವವರು ಅದನ್ನು ಮರುಬರೆಯಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Atomic claim: a conditional update that only one worker can win. TOCTOU: a gap between a check and its use. Outbox: events stored with the change. Anchor: a saved chain head.",
    "bodyKn": "ಪರಮಾಣು claim: ಒಬ್ಬ worker ಮಾತ್ರ ಗೆಲ್ಲಬಹುದಾದ ಷರತ್ತಿನ ನವೀಕರಣ. TOCTOU: ಪರಿಶೀಲನೆ ಮತ್ತು ಅದರ ಬಳಕೆ ನಡುವಿನ ಅಂತರ. Outbox: ಬದಲಾವಣೆಯೊಂದಿಗೆ ಸಂಗ್ರಹಿಸಿದ ಘಟನೆಗಳು. Anchor: ಉಳಿಸಿದ ಸರಪಳಿ head."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A unique constraint refused a changed payload. 2) A claim at the expiry time was refused. 3) The atomic claim left 1 owner where the unsafe one left 8. 4) Version 8 and the kill switch both blocked a claim. 5) Five outbox events gave 5 or 10 effects depending on the receiver.",
    "bodyKn": "1) ಅನನ್ಯ ನಿರ್ಬಂಧ ಬದಲಾದ ವಿಷಯ ನಿರಾಕರಿಸಿತು. 2) ಮುಕ್ತಾಯ ಸಮಯದಲ್ಲಿ claim ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು. 3) ಪರಮಾಣು claim 1 ಮಾಲೀಕ ಬಿಟ್ಟಲ್ಲಿ ಅಸುರಕ್ಷಿತ 8 ಬಿಟ್ಟಿತು. 4) ಆವೃತ್ತಿ 8 ಮತ್ತು kill switch ಎರಡೂ claim ತಡೆದವು. 5) ಐದು outbox ಘಟನೆಗಳು ಸ್ವೀಕರಿಸುವವರನ್ನು ಅವಲಂಬಿಸಿ 5 ಅಥವಾ 10 ಪರಿಣಾಮ ನೀಡಿದವು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many workers believed they owned the proposal with the atomic claim?",
      "qKn": "ಪರಮಾಣು claim ನೊಂದಿಗೆ ಎಷ್ಟು workers proposal ತಮ್ಮದೆಂದು ನಂಬಿದರು?",
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
      "q": "How many effects did a provider without idempotency make when every event was delivered twice?",
      "qKn": "ಪ್ರತಿ ಘಟನೆ ಎರಡು ಬಾರಿ ವಿತರಿಸಿದಾಗ idempotency ಇಲ್ಲದ ಪೂರೈಕೆದಾರ ಎಷ್ಟು ಪರಿಣಾಮ ಮಾಡಿತು?",
      "opts": [
       "10",
       "5",
       "2",
       "1"
      ],
      "optsKn": [
       "10",
       "5",
       "2",
       "1"
      ],
      "correct": 0
     },
     {
      "q": "What did a claim at clock 1000 with expiry 1000 return?",
      "qKn": "ಮುಕ್ತಾಯ 1000 ಇರುವಾಗ ಗಡಿಯಾರ 1000 ರಲ್ಲಿ claim ಏನು ನೀಡಿತು?",
      "opts": [
       "False, approval expired",
       "True, claimed",
       "False, kill switch active",
       "An exception"
      ],
      "optsKn": [
       "False, approval expired",
       "True, claimed",
       "False, kill switch active",
       "ಒಂದು ಅಪವಾದ"
      ],
      "correct": 0
     },
     {
      "q": "What result did an unreachable provider give?",
      "qKn": "ತಲುಪಲಾಗದ ಪೂರೈಕೆದಾರ ಯಾವ ಫಲಿತಾಂಶ ನೀಡಿದ?",
      "opts": [
       "UNKNOWN",
       "VERIFIED_FAILURE",
       "MISMATCH",
       "VERIFIED_SUCCESS"
      ],
      "optsKn": [
       "UNKNOWN",
       "VERIFIED_FAILURE",
       "MISMATCH",
       "VERIFIED_SUCCESS"
      ],
      "correct": 0
     },
     {
      "q": "What made removing the newest audit entry detectable?",
      "qKn": "ಹೊಸ ಲೆಕ್ಕಪರಿಶೋಧನೆ ಪ್ರವೇಶ ತೆಗೆಯುವುದನ್ನು ಯಾವುದು ಪತ್ತೆಹಚ್ಚುವಂತೆ ಮಾಡಿತು?",
      "opts": [
       "A saved head hash used as an anchor",
       "The chain alone",
       "A larger log",
       "A timestamp"
      ],
      "optsKn": [
       "anchor ಆಗಿ ಬಳಸಿದ ಉಳಿಸಿದ head hash",
       "ಸರಪಳಿ ಮಾತ್ರ",
       "ದೊಡ್ಡ ಲಾಗ್",
       "ಟೈಮ್‌ಸ್ಟ್ಯಾಂಪ್"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
