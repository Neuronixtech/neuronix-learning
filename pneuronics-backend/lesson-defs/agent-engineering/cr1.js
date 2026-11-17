module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215bc",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Checkpoints and Rollback (Part 1 of 3) — State, Leases and Fencing",
 "titleKn": "Checkpoints ಮತ್ತು Rollback (ಭಾಗ 1 / 3) — ಸ್ಥಿತಿ, Leases ಮತ್ತು Fencing",
 "desc": "Build a state machine, durable checkpoints, leases with fencing tokens, a file-hash precondition and a reconcile-first recovery.",
 "descKn": "ಸ್ಥಿತಿ ಯಂತ್ರ, ಸ್ಥಿರ checkpoints, fencing tokens ಇರುವ leases, ಫೈಲ್-hash ಪೂರ್ವಷರತ್ತು ಮತ್ತು reconcile-ಮೊದಲು ಚೇತರಿಕೆ ನಿರ್ಮಿಸಿ.",
 "objectives": [
  "Name legal state moves.",
  "Write state and history together.",
  "Refuse a stale writer.",
  "Fence a stale token.",
  "Reconcile before retry."
 ],
 "objectivesKn": [
  "ಕಾನೂನುಬದ್ಧ ಸ್ಥಿತಿ ಚಲನೆ ಹೆಸರಿಸಿ.",
  "ಸ್ಥಿತಿ ಮತ್ತು ಇತಿಹಾಸ ಒಟ್ಟಿಗೆ ಬರೆಯಿರಿ.",
  "ಹಳೆಯ ಬರಹಗಾರನನ್ನು ನಿರಾಕರಿಸಿ.",
  "ಹಳೆಯ token fence ಮಾಡಿ.",
  "ಮರುಪ್ರಯತ್ನದ ಮೊದಲು reconcile ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Checkpoints and Rollback (Part 1 of 3)",
    "textKn": "Checkpoints ಮತ್ತು Rollback (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a legal-move state machine, SQLite checkpoints written with their history in one transaction and a version check, leases with fencing tokens on a simulated clock, a fenced resource, a file-hash precondition and its race and the reconcile-first recovery decision. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind checkpoints and rollback (a legal-move state machine, durable checkpoints with a version check, leases and fencing tokens, an idempotency ledger, atomic preconditions, conditional rollback, crash injection at every boundary, a SAGA with durable compensation and a hash-chained audit log), not the real software, and one SQLite file plays both the workflow store and the target system in the engine lab, the provider is a table or dictionary, the clock is a number the lab chooses and nothing real is changed, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation and the expected outputs were produced by running them. The lesson Part 3 said it had executed its own example, but that file and its output were not supplied, so no figure from it is reused here. The lesson mentions of eventual consistency, SAGA in production and the EU AI Act Article 14 are conceptual or cited and were not run. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಕಾನೂನುಬದ್ಧ-ಚಲನೆ ಸ್ಥಿತಿ ಯಂತ್ರ, ಇತಿಹಾಸದೊಂದಿಗೆ ಒಂದೇ ವಹಿವಾಟಿನಲ್ಲಿ ಬರೆಯುವ SQLite checkpoints ಮತ್ತು ಆವೃತ್ತಿ ಪರಿಶೀಲನೆ, ಅನುಕರಿಸಿದ ಗಡಿಯಾರದಲ್ಲಿ fencing tokens ಇರುವ leases, fenced ಸಂಪನ್ಮೂಲ, ಫೈಲ್-hash ಪೂರ್ವಷರತ್ತು ಮತ್ತು ಅದರ ಓಟ ಹಾಗೂ reconcile-ಮೊದಲು ಚೇತರಿಕೆ ನಿರ್ಧಾರ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು checkpoints ಮತ್ತು rollback (ಕಾನೂನುಬದ್ಧ-ಚಲನೆ ಸ್ಥಿತಿ ಯಂತ್ರ, ಆವೃತ್ತಿ ಪರಿಶೀಲನೆ ಇರುವ ಸ್ಥಿರ checkpoints, leases ಮತ್ತು fencing tokens, idempotency ಲೆಡ್ಜರ್, ಪರಮಾಣು ಪೂರ್ವಷರತ್ತುಗಳು, ಷರತ್ತಿನ rollback, ಪ್ರತಿ ಗಡಿಯಲ್ಲಿ crash ಚುಚ್ಚುವಿಕೆ, ಸ್ಥಿರ ಪರಿಹಾರ ಇರುವ SAGA ಮತ್ತು hash-ಸರಪಳಿ ಲೆಕ್ಕಪರಿಶೋಧನೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು engine ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಒಂದು SQLite ಫೈಲ್ workflow ಸಂಗ್ರಹ ಮತ್ತು ಗುರಿ ವ್ಯವಸ್ಥೆ ಎರಡನ್ನೂ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ, ಪೂರೈಕೆದಾರ ಒಂದು ಟೇಬಲ್ ಅಥವಾ ನಿಘಂಟು, ಗಡಿಯಾರ ಲ್ಯಾಬ್ ಆಯ್ಕೆ ಮಾಡುವ ಸಂಖ್ಯೆ ಮತ್ತು ನಿಜವಾಗಿ ಏನೂ ಬದಲಾಗುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ ಮತ್ತು ನಿರೀಕ್ಷಿತ ಔಟ್‌ಪುಟ್ ಅನ್ನು ಅವನ್ನು ಓಡಿಸಿ ಪಡೆಯಲಾಗಿದೆ. lesson ನ ಭಾಗ 3 ತನ್ನದೇ ಉದಾಹರಣೆಯನ್ನು ಓಡಿಸಿದ್ದೇನೆ ಎಂದು ಹೇಳಿತು, ಆದರೆ ಆ ಫೈಲ್ ಮತ್ತು ಅದರ ಔಟ್‌ಪುಟ್ ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಅದರ ಯಾವ ಅಂಕಿಯನ್ನೂ ಇಲ್ಲಿ ಮರುಬಳಸಿಲ್ಲ. eventual consistency, ಉತ್ಪಾದನೆಯಲ್ಲಿ SAGA ಮತ್ತು EU AI Act Article 14 ಬಗ್ಗೆ lesson ನ ಉಲ್ಲೇಖಗಳು ಪರಿಕಲ್ಪನಾತ್ಮಕ ಅಥವಾ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಓಡಿಸಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Crash Must Not Erase Progress or Repeat an Effect",
    "textKn": "ಕ್ರ್ಯಾಶ್ ಪ್ರಗತಿ ಅಳಿಸಬಾರದು ಅಥವಾ ಪರಿಣಾಮ ಪುನರಾವರ್ತಿಸಬಾರದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "State, Leases, Fences and a Hash",
    "headingKn": "ಸ್ಥಿತಿ, Leases, Fences ಮತ್ತು Hash",
    "bodyEn": "A process can stop at any line, and a payment or a file write may already have happened when it does. This part builds the pieces a recovery needs: a state machine that names legal moves, SQLite checkpoints whose state and history are written in one transaction and guarded by a version number, leases with fencing tokens so that a slow worker is not mistaken for the current one, a resource that compares tokens itself, a file-hash precondition whose race is shown rather than assumed away, and a recovery decision that always asks the target what exists before it acts.",
    "bodyKn": "ಪ್ರಕ್ರಿಯೆ ಯಾವುದೇ ಸಾಲಿನಲ್ಲಿ ನಿಲ್ಲಬಹುದು, ಮತ್ತು ಅದು ನಿಂತಾಗ ಪಾವತಿ ಅಥವಾ ಫೈಲ್ ಬರೆಯುವಿಕೆ ಈಗಾಗಲೇ ಆಗಿರಬಹುದು. ಈ ಭಾಗ ಚೇತರಿಕೆಗೆ ಬೇಕಾದ ತುಣುಕುಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ: ಕಾನೂನುಬದ್ಧ ಚಲನೆಗಳನ್ನು ಹೆಸರಿಸುವ ಸ್ಥಿತಿ ಯಂತ್ರ, ಸ್ಥಿತಿ ಮತ್ತು ಇತಿಹಾಸ ಒಂದೇ ವಹಿವಾಟಿನಲ್ಲಿ ಬರೆದು ಆವೃತ್ತಿ ಸಂಖ್ಯೆಯಿಂದ ರಕ್ಷಿಸಿದ SQLite checkpoints, ನಿಧಾನ worker ಅನ್ನು ಪ್ರಸ್ತುತ worker ಎಂದು ತಪ್ಪಾಗಿ ಭಾವಿಸದಂತೆ fencing tokens ಇರುವ leases, tokens ಅನ್ನು ತಾನೇ ಹೋಲಿಸುವ ಸಂಪನ್ಮೂಲ, ಓಟವನ್ನು ಊಹಿಸದೆ ತೋರಿಸುವ ಫೈಲ್-hash ಪೂರ್ವಷರತ್ತು, ಮತ್ತು ಕಾರ್ಯ ಮಾಡುವ ಮೊದಲು ಗುರಿಯಲ್ಲಿ ಏನಿದೆ ಎಂದು ಯಾವಾಗಲೂ ಕೇಳುವ ಚೇತರಿಕೆ ನಿರ್ಧಾರ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Progress, Ownership and Truth",
    "headingKn": "ಪ್ರಗತಿ, ಒಡೆತನ ಮತ್ತು ಸತ್ಯ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a checkpoint records progress, not proof of an outside effect</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">checkpoint</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">where it stopped</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">lease</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">who may continue</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">fence</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">reject stale tokens</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">reconcile</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">ask before retry</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a checkpoint records progress, not proof of an outside effect</text></svg>",
    "captionEn": "A checkpoint, a lease and the target system answer three different questions.",
    "captionKn": "checkpoint, lease ಮತ್ತು ಗುರಿ ವ್ಯವಸ್ಥೆ ಮೂರು ಬೇರೆ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The building blocks",
    "headingKn": "ಘಟಕಗಳು",
    "headers": [
     "Piece",
     "What it answers"
    ],
    "rows": [
     [
      "state machine",
      "which moves are legal: 8 of 56 ordered pairs"
     ],
     [
      "checkpoint",
      "where did the workflow stop, written with its history in one transaction"
     ],
     [
      "version",
      "is this writer looking at the latest state"
     ],
     [
      "lease and token",
      "which worker may continue, with a token that only grows"
     ],
     [
      "fenced resource",
      "reject a write whose token is older than one already seen"
     ],
     [
      "reconcile",
      "does the effect already exist"
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
    "filename": "cr_1.py",
    "headingEn": "State machine, checkpoint store, leases, fence and recovery",
    "headingKn": "ಸ್ಥಿತಿ ಯಂತ್ರ, checkpoint ಸಂಗ್ರಹ, leases, fence ಮತ್ತು ಚೇತರಿಕೆ",
    "descEn": "ALLOWED defines the legal moves, Store.transition updates the state and inserts the history row in one transaction guarded by the version, LeaseStore hands out growing tokens, FencedResource compares them and recover decides from the ledger.",
    "descKn": "ALLOWED ಕಾನೂನುಬದ್ಧ ಚಲನೆ ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ, Store.transition ಆವೃತ್ತಿಯಿಂದ ರಕ್ಷಿತ ಒಂದು ವಹಿವಾಟಿನಲ್ಲಿ ಸ್ಥಿತಿ ನವೀಕರಿಸಿ ಇತಿಹಾಸ ಸಾಲು ಸೇರಿಸುತ್ತದೆ, LeaseStore ಬೆಳೆಯುವ tokens ನೀಡುತ್ತದೆ, FencedResource ಅವನ್ನು ಹೋಲಿಸುತ್ತದೆ ಮತ್ತು recover ಲೆಡ್ಜರ್‌ನಿಂದ ನಿರ್ಧರಿಸುತ್ತದೆ.",
    "code": "class S(str, Enum):\n    PROPOSED = \"PROPOSED\"\n    APPROVED = \"APPROVED\"\n    IN_FLIGHT = \"IN_FLIGHT\"\n    VERIFYING = \"VERIFYING\"\n    COMMITTED = \"COMMITTED\"\n    ROLLBACK_PENDING = \"ROLLBACK_PENDING\"\n    ROLLED_BACK = \"ROLLED_BACK\"\n    ESCALATED = \"ESCALATED\"\n\n\nALLOWED = {\n    S.PROPOSED: {S.APPROVED},\n    S.APPROVED: {S.IN_FLIGHT},\n    S.IN_FLIGHT: {S.VERIFYING},\n    S.VERIFYING: {S.COMMITTED, S.ROLLBACK_PENDING, S.ESCALATED},\n    S.ROLLBACK_PENDING: {S.ROLLED_BACK, S.ESCALATED},\n}\n\n\nclass IllegalTransition(Exception):\n    pass\n\n\nclass StaleVersion(Exception):\n    pass\n\n\nclass Workflow:\n    \"\"\"In-memory only: the state disappears when the process ends.\"\"\"\n\n    def __init__(self):\n        self.state, self.version = S.PROPOSED, 0\n\n    def transition(self, target):\n        if target not in ALLOWED.get(self.state, set()):\n            raise IllegalTransition(f\"{self.state.value} -> {target.value}\")\n        self.state, self.version = target, self.version + 1\n\n\nclass SimulatedCrash(Exception):\n    pass\n\n\nclass Store:\n    def __init__(self, path):\n        self.path = str(path)\n        with self.conn() as db:\n            db.executescript(\"\"\"\n            CREATE TABLE IF NOT EXISTS workflows (workflow_id TEXT PRIMARY KEY, state TEXT NOT NULL, version INTEGER NOT NULL);\n            CREATE TABLE IF NOT EXISTS history (workflow_id TEXT NOT NULL, version INTEGER NOT NULL, state TEXT NOT NULL, PRIMARY KEY (workflow_id, version));\n            \"\"\")\n\n    @contextlib.contextmanager\n    def conn(self):\n        c = sqlite3.connect(self.path, timeout=10, isolation_level=None)\n        try:\n            yield c\n        finally:\n            c.close()\n\n    def create(self, wid):\n        with self.conn() as db:\n            db.execute(\"BEGIN IMMEDIATE\")\n            db.execute(\"INSERT INTO workflows VALUES (?,?,0)\", (wid, S.PROPOSED.value))\n            db.execute(\"INSERT INTO history VALUES (?,0,?)\", (wid, S.PROPOSED.value))\n            db.execute(\"COMMIT\")\n\n    def load(self, wid):\n        with self.conn() as db:\n            return db.execute(\"SELECT state, version FROM workflows WHERE workflow_id=?\", (wid,)).fetchone()\n\n    def history(self, wid):\n        with self.conn() as db:\n            return db.execute(\"SELECT version, state FROM history WHERE workflow_id=? ORDER BY version\", (wid,)).fetchall()\n\n    def transition(self, wid, target, expected_version, crash_between=False):\n        state, version = self.load(wid)\n        if S(target) not in ALLOWED.get(S(state), set()):\n            raise IllegalTransition(f\"{state} -> {S(target).value}\")\n        with self.conn() as db:\n            db.execute(\"BEGIN IMMEDIATE\")\n            try:\n                n = db.execute(\"UPDATE workflows SET state=?, version=? WHERE workflow_id=? AND version=?\", (S(target).value, expected_version + 1, wid, expected_version)).rowcount\n                if n == 0:\n                    raise StaleVersion(f\"expected version {expected_version}\")\n                if crash_between:\n                    raise SimulatedCrash(\"crash between the state update and the history insert\")\n                db.execute(\"INSERT INTO history VALUES (?,?,?)\", (wid, expected_version + 1, S(target).value))\n                db.execute(\"COMMIT\")\n            except Exception:\n                db.execute(\"ROLLBACK\")\n                raise\n\n\nclass LeaseStore:\n    def __init__(self, path):\n        self.path = str(path)\n        with self.conn() as db:\n            db.execute(\"CREATE TABLE IF NOT EXISTS leases (workflow_id TEXT PRIMARY KEY, worker_id TEXT, token INTEGER NOT NULL DEFAULT 0, expires_at REAL NOT NULL DEFAULT 0)\")\n\n    @contextlib.contextmanager\n    def conn(self):\n        c = sqlite3.connect(self.path, timeout=10, isolation_level=None)\n        try:\n            yield c\n        finally:\n            c.close()\n\n    def acquire(self, wid, worker, now, duration=30):\n        with self.conn() as db:\n            db.execute(\"BEGIN IMMEDIATE\")\n            row = db.execute(\"SELECT worker_id, token, expires_at FROM leases WHERE workflow_id=?\", (wid,)).fetchone()\n            if row is None:\n                db.execute(\"INSERT INTO leases VALUES (?,?,1,?)\", (wid, worker, now + duration))\n                db.execute(\"COMMIT\")\n                return 1\n            if row[0] is not None and row[2] > now:\n                db.execute(\"ROLLBACK\")\n                return None\n            token = row[1] + 1\n            db.execute(\"UPDATE leases SET worker_id=?, token=?, expires_at=? WHERE workflow_id=?\", (worker, token, now + duration, wid))\n            db.execute(\"COMMIT\")\n            return token\n\n    def renew(self, wid, worker, token, now, duration=30):\n        with self.conn() as db:\n            n = db.execute(\"UPDATE leases SET expires_at=? WHERE workflow_id=? AND worker_id=? AND token=? AND expires_at>?\", (now + duration, wid, worker, token, now)).rowcount\n        return n == 1\n\n    def release(self, wid, worker, token):\n        with self.conn() as db:\n            n = db.execute(\"UPDATE leases SET worker_id=NULL, expires_at=0 WHERE workflow_id=? AND worker_id=? AND token=?\", (wid, worker, token)).rowcount\n        return n == 1\n\n\nclass FencedResource:\n    def __init__(self):\n        self.highest, self.value = 0, 0\n\n    def write(self, token, value):\n        if token < self.highest:\n            raise PermissionError(\"Stale fencing token\")\n        self.highest, self.value = token, value\n        return self.value\n\n\ndef sha256_bytes(b):\n    return hashlib.sha256(b).hexdigest()\n\n\ndef write_if_unchanged(path, expected_hash, new_text, before_replace=None):\n    \"\"\"Re-hash immediately before the replace. The window is narrower than check-then-write but it is not zero.\"\"\"\n    if before_replace:\n        before_replace()\n    if sha256_bytes(path.read_bytes()) != expected_hash:\n        return False\n    tmp = path.with_suffix(\".tmp\")\n    tmp.write_text(new_text, encoding=\"utf-8\")\n    os.replace(tmp, path)\n    return True\n\n\ndef recover(ledger, key, approved, preconditions_hold):\n    found = ledger.get(key)\n    if found is not None:\n        return \"VERIFY_EXISTING_RESULT\" if found[\"amount\"] == approved[\"amount\"] else \"ESCALATE_INCONSISTENCY\"\n    if not preconditions_hold:\n        return \"ABORT_WITHOUT_EXECUTION\"\n    return \"RETRY_WITH_SAME_IDEMPOTENCY_KEY\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cr_1.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() walks the state machine, writes and reopens checkpoints, injects a crash between two writes, takes and loses leases, fences a resource, races a file hash and runs four recovery cases.",
    "descKn": "main() ಸ್ಥಿತಿ ಯಂತ್ರದಲ್ಲಿ ನಡೆದು, checkpoints ಬರೆದು ಮರುತೆರೆದು, ಎರಡು ಬರವಣಿಗೆಗಳ ನಡುವೆ crash ಚುಚ್ಚಿ, leases ತೆಗೆದುಕೊಂಡು ಕಳೆದುಕೊಂಡು, ಸಂಪನ್ಮೂಲ fence ಮಾಡಿ, ಫೈಲ್ hash ಓಟ ನಡೆಸಿ ಮತ್ತು ನಾಲ್ಕು ಚೇತರಿಕೆ ಪ್ರಕರಣ ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: the in-memory state machine\")\n    wf = Workflow()\n    walk = [S.APPROVED, S.IN_FLIGHT, S.VERIFYING, S.COMMITTED]\n    for s in walk:\n        wf.transition(s)\n    print(\"final:\", wf.state.value, \"| version:\", wf.version)\n    try:\n        Workflow().transition(S.COMMITTED)\n    except IllegalTransition as e:\n        print(\"PROPOSED -> COMMITTED refused:\", e)\n    legal = sum(1 for a, b in itertools.permutations(list(S), 2) if b in ALLOWED.get(a, set()))\n    print(f\"legal moves: {legal} of {len(S) * (len(S) - 1)} ordered pairs\")\n    print(\"the table lets the happy path through in four steps and refuses a jump straight to COMMITTED; the object lives only in memory, so a process exit loses it, and COMMITTED here only means the transition was legal, not that anything outside was verified\")\n\n    with tempfile.TemporaryDirectory() as d:\n        section(\"2. Genuinely running: durable checkpoints in one transaction\")\n        st = Store(Path(d) / \"cp.db\")\n        st.create(\"order-1001\")\n        v = 0\n        for s in walk:\n            st.transition(\"order-1001\", s.value, v)\n            v += 1\n        reopened = Store(Path(d) / \"cp.db\")\n        print(\"after reopening the file:\", reopened.load(\"order-1001\"), \"| history:\", [h[1] for h in reopened.history(\"order-1001\")])\n        st.create(\"order-1002\")\n        st.transition(\"order-1002\", S.APPROVED.value, 0)\n        try:\n            st.transition(\"order-1002\", S.IN_FLIGHT.value, 0)\n        except StaleVersion as e:\n            print(\"second writer holding the old version refused:\", e)\n        try:\n            st.transition(\"order-1002\", S.IN_FLIGHT.value, 1, crash_between=True)\n        except SimulatedCrash:\n            pass\n        print(\"after a crash between the two writes:\", st.load(\"order-1002\"), \"| history rows:\", len(st.history(\"order-1002\")))\n        print(\"the state and the history live in one transaction, so a reopened file shows the full path, a stale writer is refused by the version condition and a crash between the two statements leaves neither changed; the lab has one process, so real lock contention is not tested here\")\n\n        section(\"3. Genuinely running: leases and fencing tokens on a simulated clock\")\n        ls = LeaseStore(Path(d) / \"lease.db\")\n        a = ls.acquire(\"order-1001\", \"worker-A\", now=0)\n        b_early = ls.acquire(\"order-1001\", \"worker-B\", now=10)\n        b = ls.acquire(\"order-1001\", \"worker-B\", now=31)\n        print(\"A at 0:\", a, \"| B at 10 (A still holds it):\", b_early, \"| B at 31 (expired):\", b)\n        print(\"A renews with token 1 after losing the lease:\", ls.renew(\"order-1001\", \"worker-A\", 1, now=32), \"| B renews with token 2:\", ls.renew(\"order-1001\", \"worker-B\", 2, now=32))\n        ls.release(\"order-1001\", \"worker-B\", 2)\n        print(\"after B releases, C acquires at 33 with token:\", ls.acquire(\"order-1001\", \"worker-C\", now=33))\n        print(\"each takeover gets a larger token, an expired owner cannot renew, and release does not reset the counter, so an old token can never become valid again; ownership of the lease is not permission to run the action\")\n\n        section(\"4. Genuinely running: a fenced resource\")\n        r = FencedResource()\n        r.write(41, 100)\n        r.write(42, 200)\n        try:\n            r.write(41, 300)\n        except PermissionError as e:\n            print(\"write with token 41 after 42:\", e)\n        print(\"value:\", r.value)\n        print(\"the resource itself compares tokens, so the stale worker is refused even though it still believes it owns the lease; this object is in memory and one process, while a real resource has to enforce the comparison atomically and durably\")\n\n        section(\"5. Genuinely running: a file-hash precondition and its race\")\n        cfg = Path(d) / \"app.cfg\"\n        cfg.write_text(\"MAX_RETRIES=3\\n\", encoding=\"utf-8\")\n        approved_hash = sha256_bytes(cfg.read_bytes())\n        print(\"precondition matches before any change:\", sha256_bytes(cfg.read_bytes()) == approved_hash)\n        ok_check = sha256_bytes(cfg.read_bytes()) == approved_hash\n        cfg.write_text(\"MAX_RETRIES=10\\n\", encoding=\"utf-8\")\n        if ok_check:\n            cfg.write_text(\"MAX_RETRIES=5\\n\", encoding=\"utf-8\")\n        print(\"check then write with another change in between ends as:\", cfg.read_text().strip(), \"(the 10 was overwritten)\")\n        cfg.write_text(\"MAX_RETRIES=3\\n\", encoding=\"utf-8\")\n        refused = write_if_unchanged(cfg, approved_hash, \"MAX_RETRIES=5\\n\", before_replace=lambda: cfg.write_text(\"MAX_RETRIES=10\\n\", encoding=\"utf-8\"))\n        print(\"re-hash at the write boundary, change made just before it: written =\", refused, \"| file:\", cfg.read_text().strip())\n        print(\"a hash checked well before the write does not stop another process from changing the file in between, and re-checking at the boundary catches a change made before it; a change in the few instructions between the re-hash and the replace still gets through, which is why a real system needs a version enforced by the resource itself\")\n\n    section(\"6. Genuinely running: reconcile first, then decide\")\n    approved = {\"amount\": 100}\n    cases = [\n        (\"effect exists and matches\", {\"k\": {\"amount\": 100}}, True),\n        (\"effect exists, amount differs\", {\"k\": {\"amount\": 90}}, True),\n        (\"no effect, preconditions hold\", {}, True),\n        (\"no effect, preconditions failed\", {}, False),\n    ]\n    for label, ledger, pre in cases:\n        print(f\"{label:34} -> {recover(ledger, 'k', approved, pre)}\")\n    print(\"the checkpoint says IN_FLIGHT in all four cases, and only the lookup of the key tells them apart; a missing record means no effect only if the provider is immediately consistent, which this dictionary is by construction\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the in-memory state machine ---\nfinal: COMMITTED | version: 4\nPROPOSED -> COMMITTED refused: PROPOSED -> COMMITTED\nlegal moves: 8 of 56 ordered pairs\nthe table lets the happy path through in four steps and refuses a jump straight to COMMITTED; the object lives only in memory, so a process exit loses it, and COMMITTED here only means the transition was legal, not that anything outside was verified\n\n--- 2. Genuinely running: durable checkpoints in one transaction ---\nafter reopening the file: ('COMMITTED', 4) | history: ['PROPOSED', 'APPROVED', 'IN_FLIGHT', 'VERIFYING', 'COMMITTED']\nsecond writer holding the old version refused: expected version 0\nafter a crash between the two writes: ('APPROVED', 1) | history rows: 2\nthe state and the history live in one transaction, so a reopened file shows the full path, a stale writer is refused by the version condition and a crash between the two statements leaves neither changed; the lab has one process, so real lock contention is not tested here\n\n--- 3. Genuinely running: leases and fencing tokens on a simulated clock ---\nA at 0: 1 | B at 10 (A still holds it): None | B at 31 (expired): 2\nA renews with token 1 after losing the lease: False | B renews with token 2: True\nafter B releases, C acquires at 33 with token: 3\neach takeover gets a larger token, an expired owner cannot renew, and release does not reset the counter, so an old token can never become valid again; ownership of the lease is not permission to run the action\n\n--- 4. Genuinely running: a fenced resource ---\nwrite with token 41 after 42: Stale fencing token\nvalue: 200\nthe resource itself compares tokens, so the stale worker is refused even though it still believes it owns the lease; this object is in memory and one process, while a real resource has to enforce the comparison atomically and durably\n\n--- 5. Genuinely running: a file-hash precondition and its race ---\nprecondition matches before any change: True\ncheck then write with another change in between ends as: MAX_RETRIES=5 (the 10 was overwritten)\nre-hash at the write boundary, change made just before it: written = False | file: MAX_RETRIES=10\na hash checked well before the write does not stop another process from changing the file in between, and re-checking at the boundary catches a change made before it; a change in the few instructions between the re-hash and the replace still gets through, which is why a real system needs a version enforced by the resource itself\n\n--- 6. Genuinely running: reconcile first, then decide ---\neffect exists and matches          -> VERIFY_EXISTING_RESULT\neffect exists, amount differs      -> ESCALATE_INCONSISTENCY\nno effect, preconditions hold      -> RETRY_WITH_SAME_IDEMPOTENCY_KEY\nno effect, preconditions failed    -> ABORT_WITHOUT_EXECUTION\nthe checkpoint says IN_FLIGHT in all four cases, and only the lookup of the key tells them apart; a missing record means no effect only if the provider is immediately consistent, which this dictionary is by construction"
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
    "headingEn": "Genuinely Found: State and Checkpoints",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸ್ಥಿತಿ ಮತ್ತು Checkpoints",
    "bodyEn": "Section 1: the walk ended COMMITTED at version 4, PROPOSED to COMMITTED was refused and 8 of 56 ordered pairs were legal. Section 2: after reopening the file the workflow showed COMMITTED at version 4 with five history states, a second writer holding version 0 was refused, and after a crash between the state update and the history insert the workflow was still APPROVED at version 1 with 2 history rows.",
    "bodyKn": "ವಿಭಾಗ 1: ನಡಿಗೆ ಆವೃತ್ತಿ 4 ರಲ್ಲಿ COMMITTED ಆಗಿ ಮುಗಿಯಿತು, PROPOSED ನಿಂದ COMMITTED ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು ಮತ್ತು 56 ಕ್ರಮಬದ್ಧ ಜೋಡಿಗಳಲ್ಲಿ 8 ಕಾನೂನುಬದ್ಧ. ವಿಭಾಗ 2: ಫೈಲ್ ಮರುತೆರೆದ ನಂತರ workflow ಆವೃತ್ತಿ 4 ರಲ್ಲಿ COMMITTED ಮತ್ತು ಐದು ಇತಿಹಾಸ ಸ್ಥಿತಿ ತೋರಿಸಿತು, ಆವೃತ್ತಿ 0 ಹಿಡಿದ ಎರಡನೇ ಬರಹಗಾರ ನಿರಾಕರಿಸಲ್ಪಟ್ಟನು, ಮತ್ತು ಸ್ಥಿತಿ ನವೀಕರಣ ಮತ್ತು ಇತಿಹಾಸ ಸೇರ್ಪಡೆ ನಡುವೆ crash ನ ನಂತರ workflow ಇನ್ನೂ ಆವೃತ್ತಿ 1 ರಲ್ಲಿ APPROVED ಮತ್ತು 2 ಇತಿಹಾಸ ಸಾಲುಗಳೊಂದಿಗೆ ಇತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Leases, Fences, Files and Recovery",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Leases, Fences, ಫೈಲ್‌ಗಳು ಮತ್ತು ಚೇತರಿಕೆ",
    "bodyEn": "Section 3: A got token 1, B was refused at time 10 and got token 2 at time 31, A could not renew with token 1 while B could with token 2, and C got token 3 after B released. Section 4: a write with token 41 after 42 was refused and the value stayed 200. Section 5: check-then-write with a change in between ended as MAX_RETRIES=5, while re-hashing at the write boundary refused the write and left MAX_RETRIES=10. Section 6: the four cases gave VERIFY_EXISTING_RESULT, ESCALATE_INCONSISTENCY, RETRY_WITH_SAME_IDEMPOTENCY_KEY and ABORT_WITHOUT_EXECUTION.",
    "bodyKn": "ವಿಭಾಗ 3: A ಗೆ token 1 ಸಿಕ್ಕಿತು, B ಸಮಯ 10 ರಲ್ಲಿ ನಿರಾಕರಿಸಲ್ಪಟ್ಟು ಸಮಯ 31 ರಲ್ಲಿ token 2 ಪಡೆದನು, A token 1 ನೊಂದಿಗೆ ನವೀಕರಿಸಲಾಗಲಿಲ್ಲ ಆದರೆ B token 2 ನೊಂದಿಗೆ ಮಾಡಿದನು, ಮತ್ತು B ಬಿಡುಗಡೆ ಮಾಡಿದ ನಂತರ C ಗೆ token 3 ಸಿಕ್ಕಿತು. ವಿಭಾಗ 4: 42 ರ ನಂತರ token 41 ನ ಬರಹ ನಿರಾಕರಿಸಲ್ಪಟ್ಟು ಮೌಲ್ಯ 200 ಆಗಿ ಉಳಿಯಿತು. ವಿಭಾಗ 5: ನಡುವೆ ಬದಲಾವಣೆಯೊಂದಿಗೆ check-then-write MAX_RETRIES=5 ಆಗಿ ಮುಗಿಯಿತು, ಬರೆಯುವ ಗಡಿಯಲ್ಲಿ ಮರು-hash ಬರಹ ನಿರಾಕರಿಸಿ MAX_RETRIES=10 ಬಿಟ್ಟಿತು. ವಿಭಾಗ 6: ನಾಲ್ಕು ಪ್ರಕರಣಗಳು VERIFY_EXISTING_RESULT, ESCALATE_INCONSISTENCY, RETRY_WITH_SAME_IDEMPOTENCY_KEY ಮತ್ತು ABORT_WITHOUT_EXECUTION ನೀಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A checkpoint says where the workflow stopped, a lease says who may try next and only the target says what really happened, so recovery has to consult all three and trust the last.",
    "bodyKn": "checkpoint workflow ಎಲ್ಲಿ ನಿಂತಿತು ಎಂದು ಹೇಳುತ್ತದೆ, lease ಮುಂದೆ ಯಾರು ಪ್ರಯತ್ನಿಸಬಹುದು ಎಂದು ಹೇಳುತ್ತದೆ ಮತ್ತು ವಾಸ್ತವದಲ್ಲಿ ಏನಾಯಿತು ಎಂದು ಗುರಿ ಮಾತ್ರ ಹೇಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಚೇತರಿಕೆ ಮೂರನ್ನೂ ಸಂಪರ್ಕಿಸಿ ಕೊನೆಯದನ್ನು ನಂಬಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"checking the file hash before the write makes the write safe.\" Another change in between was overwritten, and even a re-hash at the boundary leaves a small window.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಬರೆಯುವ ಮೊದಲು ಫೈಲ್ hash ಪರಿಶೀಲಿಸುವುದು ಬರಹವನ್ನು ಸುರಕ್ಷಿತಗೊಳಿಸುತ್ತದೆ.\" ನಡುವಿನ ಇನ್ನೊಂದು ಬದಲಾವಣೆ ಮೇಲ್ಬರೆಯಲ್ಪಟ್ಟಿತು, ಮತ್ತು ಗಡಿಯಲ್ಲಿನ ಮರು-hash ಕೂಡ ಸಣ್ಣ ಅಂತರ ಬಿಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Checkpoint: durable progress. Lease: temporary ownership. Fencing token: a number that only grows and is compared at the resource. TOCTOU: a gap between a check and its use.",
    "bodyKn": "Checkpoint: ಸ್ಥಿರ ಪ್ರಗತಿ. Lease: ತಾತ್ಕಾಲಿಕ ಒಡೆತನ. Fencing token: ಮಾತ್ರ ಬೆಳೆಯುವ ಮತ್ತು ಸಂಪನ್ಮೂಲದಲ್ಲಿ ಹೋಲಿಸುವ ಸಂಖ್ಯೆ. TOCTOU: ಪರಿಶೀಲನೆ ಮತ್ತು ಅದರ ಬಳಕೆ ನಡುವಿನ ಅಂತರ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) 8 of 56 state moves were legal. 2) State and history survived a crash together or not at all. 3) A stale version was refused. 4) Tokens only grew, and release did not reset them. 5) Only the resource-side token check stopped the stale write.",
    "bodyKn": "1) 56 ರಲ್ಲಿ 8 ಸ್ಥಿತಿ ಚಲನೆಗಳು ಕಾನೂನುಬದ್ಧ. 2) ಸ್ಥಿತಿ ಮತ್ತು ಇತಿಹಾಸ crash ನಲ್ಲಿ ಒಟ್ಟಿಗೆ ಉಳಿದವು ಅಥವಾ ಇಲ್ಲವೇ ಇಲ್ಲ. 3) ಹಳೆಯ ಆವೃತ್ತಿ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು. 4) tokens ಮಾತ್ರ ಬೆಳೆದವು, ಮತ್ತು ಬಿಡುಗಡೆ ಅವನ್ನು ಮರುಹೊಂದಿಸಲಿಲ್ಲ. 5) ಸಂಪನ್ಮೂಲ-ಬದಿಯ token ಪರಿಶೀಲನೆ ಮಾತ್ರ ಹಳೆಯ ಬರಹ ತಡೆಯಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many of the 56 ordered state pairs were legal?",
      "qKn": "56 ಕ್ರಮಬದ್ಧ ಸ್ಥಿತಿ ಜೋಡಿಗಳಲ್ಲಿ ಎಷ್ಟು ಕಾನೂನುಬದ್ಧ?",
      "opts": [
       "8",
       "10",
       "56",
       "4"
      ],
      "optsKn": [
       "8",
       "10",
       "56",
       "4"
      ],
      "correct": 0
     },
     {
      "q": "What token did C get after B released the lease?",
      "qKn": "B ಲೀಸ್ ಬಿಡುಗಡೆ ಮಾಡಿದ ನಂತರ C ಗೆ ಯಾವ token ಸಿಕ್ಕಿತು?",
      "opts": [
       "3",
       "1",
       "2",
       "0"
      ],
      "optsKn": [
       "3",
       "1",
       "2",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "What state and history length remained after the crash between the state update and the history insert?",
      "qKn": "ಸ್ಥಿತಿ ನವೀಕರಣ ಮತ್ತು ಇತಿಹಾಸ ಸೇರ್ಪಡೆ ನಡುವಿನ crash ನ ನಂತರ ಯಾವ ಸ್ಥಿತಿ ಮತ್ತು ಇತಿಹಾಸ ಉದ್ದ ಉಳಿಯಿತು?",
      "opts": [
       "APPROVED with 2 history rows",
       "IN_FLIGHT with 3 rows",
       "COMMITTED with 5 rows",
       "PROPOSED with 1 row"
      ],
      "optsKn": [
       "2 ಇತಿಹಾಸ ಸಾಲುಗಳೊಂದಿಗೆ APPROVED",
       "3 ಸಾಲುಗಳೊಂದಿಗೆ IN_FLIGHT",
       "5 ಸಾಲುಗಳೊಂದಿಗೆ COMMITTED",
       "1 ಸಾಲಿನೊಂದಿಗೆ PROPOSED"
      ],
      "correct": 0
     },
     {
      "q": "What did re-hashing at the write boundary do when the file changed just before it?",
      "qKn": "ಫೈಲ್ ಅದರ ಸ್ವಲ್ಪ ಮೊದಲು ಬದಲಾದಾಗ ಬರೆಯುವ ಗಡಿಯಲ್ಲಿ ಮರು-hash ಏನು ಮಾಡಿತು?",
      "opts": [
       "Refused the write and left the other change",
       "Overwrote it",
       "Deleted the file",
       "Retried forever"
      ],
      "optsKn": [
       "ಬರಹ ನಿರಾಕರಿಸಿ ಇನ್ನೊಂದು ಬದಲಾವಣೆ ಬಿಟ್ಟಿತು",
       "ಅದನ್ನು ಮೇಲ್ಬರೆದಿತು",
       "ಫೈಲ್ ಅಳಿಸಿತು",
       "ಶಾಶ್ವತವಾಗಿ ಮರುಪ್ರಯತ್ನಿಸಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What did recovery return when no effect existed and the preconditions still held?",
      "qKn": "ಯಾವುದೇ ಪರಿಣಾಮ ಇಲ್ಲದಿದ್ದು ಪೂರ್ವಷರತ್ತುಗಳು ಉಳಿದಿದ್ದಾಗ ಚೇತರಿಕೆ ಏನು ನೀಡಿತು?",
      "opts": [
       "RETRY_WITH_SAME_IDEMPOTENCY_KEY",
       "ABORT_WITHOUT_EXECUTION",
       "ESCALATE_INCONSISTENCY",
       "VERIFY_EXISTING_RESULT"
      ],
      "optsKn": [
       "RETRY_WITH_SAME_IDEMPOTENCY_KEY (ಅದೇ key ನೊಂದಿಗೆ ಮರುಪ್ರಯತ್ನ)",
       "ABORT_WITHOUT_EXECUTION (ಕಾರ್ಯಗತಗೊಳಿಸದೆ ರದ್ದು)",
       "ESCALATE_INCONSISTENCY (ಅಸಂಗತಿ ಮೇಲ್ಮುಖ)",
       "VERIFY_EXISTING_RESULT (ಇರುವ ಫಲಿತಾಂಶ ಪರಿಶೀಲನೆ)"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
