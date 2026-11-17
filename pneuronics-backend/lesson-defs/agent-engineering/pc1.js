module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6466020ed05b3215b9",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "HITL: Propose-Then-Commit (Part 1 of 3) — Digests, Keys and States",
 "titleKn": "HITL: Propose-Then-Commit (ಭಾಗ 1 / 3) — Digest, Key ಮತ್ತು ಸ್ಥಿತಿಗಳು",
 "desc": "Build digests, idempotency keys, a conflict registry, a checked state machine and a proposal store.",
 "descKn": "digest, idempotency key, conflict registry, ಪರಿಶೀಲಿಸಿದ ಸ್ಥಿತಿ ಯಂತ್ರ ಮತ್ತು proposal ಸಂಗ್ರಹ ನಿರ್ಮಿಸಿ.",
 "objectives": [
  "Fingerprint an action.",
  "Build an idempotency key.",
  "Refuse a reused identity.",
  "Count legal state moves.",
  "Validate a checklist."
 ],
 "objectivesKn": [
  "ಕ್ರಿಯೆಯ ಬೆರಳಚ್ಚು ತೆಗೆಯಿರಿ.",
  "idempotency key ನಿರ್ಮಿಸಿ.",
  "ಮರುಬಳಸಿದ ಗುರುತು ನಿರಾಕರಿಸಿ.",
  "ಕಾನೂನುಬದ್ಧ ಸ್ಥಿತಿ ಚಲನೆ ಎಣಿಸಿ.",
  "ಚೆಕ್‌ಲಿಸ್ಟ್ ಮೌಲ್ಯೀಕರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "HITL: Propose-Then-Commit (Part 1 of 3)",
    "textKn": "HITL: Propose-Then-Commit (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: canonical JSON and digests, idempotency keys, an operation registry that refuses a reused identity with a changed payload, a state machine checked over every ordered pair, checklist validation and an atomic JSON proposal store. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind propose-then-commit (digests and idempotency keys, a state machine, a reviewer checklist, digest-bound approval, lost-response reconciliation, post-action verification, atomic claims, expiry, a kill switch, an outbox and a hash-chained audit log), not the real software, and the payment provider is a JSON ledger or a counter, reviewers are plain strings, the clock is a number the lab chooses, the stores have no real locking across processes and nothing is paid or sent, so no real LLM behaviour is measured. The original code/main.py was not supplied and the lesson Part 2 showed its workflow code only in fragments, so the labs are our own full implementation and the expected outputs were produced by running them. The LangGraph interrupt(), Microsoft RequestInfoEvent and Cloudflare waitForApproval() material and the EU AI Act Article 14 remarks are conceptual or cited and were not run here because they need third-party services. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: canonical JSON ಮತ್ತು digest, idempotency key, ಬದಲಾದ ವಿಷಯದೊಂದಿಗೆ ಮರುಬಳಸಿದ ಗುರುತನ್ನು ನಿರಾಕರಿಸುವ operation registry, ಪ್ರತಿ ಕ್ರಮಬದ್ಧ ಜೋಡಿಯ ಮೇಲೆ ಪರಿಶೀಲಿಸಿದ ಸ್ಥಿತಿ ಯಂತ್ರ, ಚೆಕ್‌ಲಿಸ್ಟ್ ಮೌಲ್ಯೀಕರಣ ಮತ್ತು ಪರಮಾಣು JSON proposal ಸಂಗ್ರಹ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು propose-then-commit (digest ಮತ್ತು idempotency key, ಸ್ಥಿತಿ ಯಂತ್ರ, ವಿಮರ್ಶಕ ಚೆಕ್‌ಲಿಸ್ಟ್, digest-ಬಂಧಿತ ಅನುಮೋದನೆ, ಕಳೆದುಹೋದ ಪ್ರತಿಕ್ರಿಯೆಯ ಸಮನ್ವಯ, ಕ್ರಿಯೆಯ ನಂತರದ ಪರಿಶೀಲನೆ, ಪರಮಾಣು claim, ಅವಧಿ ಮುಕ್ತಾಯ, kill switch, outbox ಮತ್ತು hash-ಸರಪಳಿ ಲೆಕ್ಕಪರಿಶೋಧನೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪಾವತಿ ಪೂರೈಕೆದಾರ JSON ಲೆಡ್ಜರ್ ಅಥವಾ ಕೌಂಟರ್, ವಿಮರ್ಶಕರು ಸರಳ ಸ್ಟ್ರಿಂಗ್‌ಗಳು, ಗಡಿಯಾರ ಲ್ಯಾಬ್ ಆಯ್ಕೆ ಮಾಡುವ ಸಂಖ್ಯೆ, ಸಂಗ್ರಹಗಳಿಗೆ ಪ್ರಕ್ರಿಯೆಗಳ ನಡುವೆ ನಿಜ ಲಾಕಿಂಗ್ ಇಲ್ಲ ಮತ್ತು ಏನೂ ಪಾವತಿಸಲ್ಪಡುವುದಿಲ್ಲ ಅಥವಾ ಕಳುಹಿಸಲ್ಪಡುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ ಮತ್ತು lesson ನ ಭಾಗ 2 ತನ್ನ workflow ಕೋಡ್ ಅನ್ನು ತುಣುಕುಗಳಲ್ಲಿ ಮಾತ್ರ ತೋರಿಸಿತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಸಂಪೂರ್ಣ ಅನುಷ್ಠಾನ ಮತ್ತು ನಿರೀಕ್ಷಿತ ಔಟ್‌ಪುಟ್ ಅನ್ನು ಅವುಗಳನ್ನು ಓಡಿಸಿ ಪಡೆಯಲಾಗಿದೆ. LangGraph interrupt(), Microsoft RequestInfoEvent ಮತ್ತು Cloudflare waitForApproval() ವಿಷಯ ಮತ್ತು EU AI Act Article 14 ಟಿಪ್ಪಣಿಗಳು ಪರಿಕಲ್ಪನಾತ್ಮಕ ಅಥವಾ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಮೂರನೇ ಪಕ್ಷದ ಸೇವೆಗಳು ಬೇಕಾದ್ದರಿಂದ ಇಲ್ಲಿ ಓಡಿಸಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Building Blocks of an Approval Workflow",
    "textKn": "ಅನುಮೋದನೆ ಕಾರ್ಯಪ್ರವಾಹದ ಘಟಕಗಳು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Digests, Keys, States and a Checklist",
    "headingKn": "Digest, Key, ಸ್ಥಿತಿಗಳು ಮತ್ತು ಚೆಕ್‌ಲಿಸ್ಟ್",
    "bodyEn": "A human approval is only worth something if it is attached to one exact action and cannot be reused for another. This part builds the pieces that make that possible: a canonical JSON form so that equal actions give equal text, a SHA-256 digest of that text, an idempotency key built from the thread, an explicit operation id and the action, a registry that refuses an identity reused with a changed payload, a state machine whose legal moves are counted over every ordered pair of states, a checklist validator, and a proposal store written through a temporary file.",
    "bodyKn": "ಮಾನವ ಅನುಮೋದನೆ ಒಂದು ನಿರ್ದಿಷ್ಟ ಕ್ರಿಯೆಗೆ ಜೋಡಿಸಲ್ಪಟ್ಟು ಇನ್ನೊಂದಕ್ಕೆ ಮರುಬಳಸಲಾಗದಿದ್ದರೆ ಮಾತ್ರ ಮೌಲ್ಯವುಳ್ಳದ್ದು. ಈ ಭಾಗ ಅದನ್ನು ಸಾಧ್ಯವಾಗಿಸುವ ತುಣುಕುಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ: ಸಮಾನ ಕ್ರಿಯೆಗಳು ಸಮಾನ ಪಠ್ಯ ನೀಡುವ canonical JSON ರೂಪ, ಆ ಪಠ್ಯದ SHA-256 digest, thread, ಸ್ಪಷ್ಟ operation id ಮತ್ತು ಕ್ರಿಯೆಯಿಂದ ಮಾಡಿದ idempotency key, ಬದಲಾದ ವಿಷಯದೊಂದಿಗೆ ಮರುಬಳಸಿದ ಗುರುತನ್ನು ನಿರಾಕರಿಸುವ registry, ಪ್ರತಿ ಕ್ರಮಬದ್ಧ ಸ್ಥಿತಿ ಜೋಡಿಯ ಮೇಲೆ ಕಾನೂನುಬದ್ಧ ಚಲನೆಗಳನ್ನು ಎಣಿಸುವ ಸ್ಥಿತಿ ಯಂತ್ರ, ಚೆಕ್‌ಲಿಸ್ಟ್ ಮೌಲ್ಯೀಕರಣ, ಮತ್ತು ತಾತ್ಕಾಲಿಕ ಫೈಲ್ ಮೂಲಕ ಬರೆಯುವ proposal ಸಂಗ್ರಹ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Propose Before Commit",
    "headingKn": "Commit ಮೊದಲು Propose",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a proposal is a durable record before anyone approves it</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">proposal</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">stored first</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">digest</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">fingerprint</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">key</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">one operation</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">state</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">legal moves only</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a proposal is a durable record before anyone approves it</text></svg>",
    "captionEn": "The agent writes a record, a human decides, and only then does anything run.",
    "captionKn": "agent ದಾಖಲೆ ಬರೆಯುತ್ತದೆ, ಮನುಷ್ಯ ನಿರ್ಧರಿಸುತ್ತಾನೆ, ಮತ್ತು ಆಗ ಮಾತ್ರ ಏನಾದರೂ ಓಡುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The building blocks",
    "headingKn": "ಘಟಕಗಳು",
    "headers": [
     "Piece",
     "What it does"
    ],
    "rows": [
     [
      "canonical JSON",
      "sorted keys and fixed separators so one action has one text"
     ],
     [
      "digest",
      "SHA-256 of that text, 64 hexadecimal characters"
     ],
     [
      "idempotency key",
      "hash of thread, operation id and action"
     ],
     [
      "registry",
      "refuses a reused identity with a changed action"
     ],
     [
      "state machine",
      "8 states, 10 legal moves, 3 terminal states"
     ],
     [
      "checklist",
      "only an explicit True counts"
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
    "filename": "pc_1.py",
    "headingEn": "Digests, keys, registry, states and store",
    "headingKn": "Digest, key, registry, ಸ್ಥಿತಿಗಳು ಮತ್ತು ಸಂಗ್ರಹ",
    "descEn": "canonical_json and action_digest fingerprint an action, make_idempotency_key binds thread, operation and action, OperationRegistry raises Conflict, TRANSITIONS defines the legal moves and propose stores a record only once.",
    "descKn": "canonical_json ಮತ್ತು action_digest ಕ್ರಿಯೆಯ ಬೆರಳಚ್ಚು ತೆಗೆಯುತ್ತವೆ, make_idempotency_key thread, operation ಮತ್ತು ಕ್ರಿಯೆಯನ್ನು ಬಂಧಿಸುತ್ತದೆ, OperationRegistry Conflict ಎತ್ತುತ್ತದೆ, TRANSITIONS ಕಾನೂನುಬದ್ಧ ಚಲನೆ ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ ಮತ್ತು propose ದಾಖಲೆಯನ್ನು ಒಂದೇ ಬಾರಿ ಸಂಗ್ರಹಿಸುತ್ತದೆ.",
    "code": "def canonical_json(value):\n    return json.dumps(value, sort_keys=True, separators=(\",\", \":\"), ensure_ascii=False, allow_nan=False)\n\n\ndef sha256_text(text):\n    return hashlib.sha256(text.encode(\"utf-8\")).hexdigest()\n\n\ndef action_digest(action):\n    return sha256_text(canonical_json(action))\n\n\ndef make_idempotency_key(thread_id, operation_id, action):\n    return sha256_text(canonical_json({\"thread_id\": thread_id, \"operation_id\": operation_id, \"action\": action}))\n\n\ndef thread_action_key(thread_id, action):\n    \"\"\"The simpler variant from the lesson text: thread plus action signature only.\"\"\"\n    return sha256_text(f\"{thread_id}:{canonical_json(action)}\")\n\n\nclass Conflict(Exception):\n    pass\n\n\nclass OperationRegistry:\n    \"\"\"Maps (thread_id, operation_id) to the digest first seen, so a changed payload under the same identity is refused.\"\"\"\n\n    def __init__(self):\n        self.seen = {}\n\n    def register(self, thread_id, operation_id, action):\n        d = action_digest(action)\n        prev = self.seen.setdefault((thread_id, operation_id), d)\n        if prev != d:\n            raise Conflict(f\"operation {operation_id} was first registered with a different action\")\n        return d\n\n\nSTATES = [\"PENDING_REVIEW\", \"APPROVED\", \"REJECTED\", \"COMMITTING\", \"VERIFYING\", \"VERIFIED\", \"RECONCILIATION_REQUIRED\", \"FAILED\"]\nTRANSITIONS = {\n    \"PENDING_REVIEW\": {\"APPROVED\", \"REJECTED\"},\n    \"APPROVED\": {\"COMMITTING\"},\n    \"COMMITTING\": {\"VERIFYING\", \"RECONCILIATION_REQUIRED\", \"FAILED\"},\n    \"RECONCILIATION_REQUIRED\": {\"VERIFYING\", \"FAILED\"},\n    \"VERIFYING\": {\"VERIFIED\", \"FAILED\"},\n    \"REJECTED\": set(),\n    \"VERIFIED\": set(),\n    \"FAILED\": set(),\n}\n\n\ndef can_transition(current, target):\n    return target in TRANSITIONS.get(current, set())\n\n\nREQUIRED_CHECKS = (\"resource_checked\", \"blast_radius_checked\", \"rollback_checked\")\n\n\ndef missing_checks(checklist):\n    return [c for c in REQUIRED_CHECKS if checklist.get(c) is not True]\n\n\ndef atomic_write_json(path, data):\n    fd, tmp = tempfile.mkstemp(dir=path.parent, suffix=\".tmp\")\n    try:\n        with os.fdopen(fd, \"w\", encoding=\"utf-8\") as f:\n            json.dump(data, f, indent=2)\n            f.flush()\n            os.fsync(f.fileno())\n        os.replace(tmp, path)\n    except Exception:\n        if os.path.exists(tmp):\n            os.remove(tmp)\n        raise\n\n\ndef read_json(path):\n    return json.loads(path.read_text(encoding=\"utf-8\")) if path.exists() else {}\n\n\ndef propose(path, registry, thread_id, operation_id, action, intent):\n    registry.register(thread_id, operation_id, action)\n    key = make_idempotency_key(thread_id, operation_id, action)\n    records = read_json(path)\n    if key in records:\n        return records[key], False\n    rec = {\"proposal_id\": key, \"thread_id\": thread_id, \"operation_id\": operation_id, \"action\": action, \"action_digest\": action_digest(action), \"intent\": intent, \"status\": \"PENDING_REVIEW\"}\n    records[key] = rec\n    atomic_write_json(path, records)\n    return rec, True"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pc_1.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() shows canonical text and digests, compares keys, triggers the conflict, counts legal transitions, validates five checklists and stores a proposal twice.",
    "descKn": "main() canonical ಪಠ್ಯ ಮತ್ತು digest ತೋರಿಸಿ, key ಹೋಲಿಸಿ, conflict ಉಂಟುಮಾಡಿ, ಕಾನೂನುಬದ್ಧ ಪರಿವರ್ತನೆ ಎಣಿಸಿ, ಐದು ಚೆಕ್‌ಲಿಸ್ಟ್ ಮೌಲ್ಯೀಕರಿಸಿ ಮತ್ತು proposal ಅನ್ನು ಎರಡು ಬಾರಿ ಸಂಗ್ರಹಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: canonical JSON makes equal actions identical\")\n    a1 = {\"amount\": 100, \"currency\": \"USD\", \"type\": \"refund\"}\n    a2 = {\"type\": \"refund\", \"currency\": \"USD\", \"amount\": 100}\n    print(canonical_json(a1))\n    print(\"same text for reordered dictionaries:\", canonical_json(a1) == canonical_json(a2), \"| digest length:\", len(action_digest(a1)))\n    print(\"sorting keys and fixing separators gives one text for one logical action, and a SHA-256 of that text is a 64-character fingerprint; a digest identifies content and does not by itself prove that anyone approved it\")\n\n    section(\"2. Genuinely running: idempotency keys\")\n    k1 = make_idempotency_key(\"thread-001\", \"refund-001\", a1)\n    k2 = make_idempotency_key(\"thread-001\", \"refund-001\", a1)\n    k3 = make_idempotency_key(\"thread-001\", \"refund-002\", a1)\n    k4 = make_idempotency_key(\"thread-001\", \"refund-001\", dict(a1, amount=200))\n    print(\"same operation:\", k1 == k2, \"| different operation id:\", k1 == k3, \"| different amount:\", k1 == k4)\n    print(\"thread plus action only, two legitimate identical refunds get the same key:\", thread_action_key(\"thread-001\", a1) == thread_action_key(\"thread-001\", a1))\n    print(\"a repeat of the same operation maps to one key and a changed amount maps to another, so approving 100 cannot authorise 200; the thread-plus-action variant from the lesson text merges two deliberate identical refunds into one, which is why the lab adds an explicit operation id\")\n\n    section(\"3. Genuinely running: reusing an operation identity with a changed payload\")\n    reg = OperationRegistry()\n    reg.register(\"thread-001\", \"refund-001\", a1)\n    print(\"same payload again: accepted\")\n    try:\n        reg.register(\"thread-001\", \"refund-001\", dict(a1, amount=1000))\n    except Conflict as e:\n        print(\"changed amount under the same id: refused ->\", e)\n    print(\"hashing alone would have treated the changed amount as a new operation with a new key, while the registry notices that the identity was already used for a different action and refuses it, which is the stronger design the lesson recommends\")\n\n    section(\"4. Genuinely computing: the state machine, every ordered pair of states\")\n    legal = [(a, b) for a, b in itertools.permutations(STATES, 2) if can_transition(a, b)]\n    total = len(STATES) * (len(STATES) - 1)\n    print(f\"legal transitions: {len(legal)} of {total} ordered pairs\")\n    for a, b in legal:\n        print(f\"  {a} -> {b}\")\n    print(\"PENDING_REVIEW -> COMMITTING legal:\", can_transition(\"PENDING_REVIEW\", \"COMMITTING\"), \"| REJECTED -> APPROVED legal:\", can_transition(\"REJECTED\", \"APPROVED\"), \"| terminal states with a way out:\", [s for s in (\"REJECTED\", \"VERIFIED\", \"FAILED\") if TRANSITIONS[s]])\n    print(\"only a small fraction of the possible moves is legal, nothing can jump from pending review to committing, and the three terminal states have no exits; RECONCILIATION_REQUIRED is a separate state so an unknown outcome is never recorded as a plain failure\")\n\n    section(\"5. Genuinely running: checklist validation\")\n    cases = {\n        \"complete\": {\"resource_checked\": True, \"blast_radius_checked\": True, \"rollback_checked\": True},\n        \"one missing\": {\"resource_checked\": True, \"blast_radius_checked\": True},\n        \"one false\": {\"resource_checked\": True, \"blast_radius_checked\": True, \"rollback_checked\": False},\n        \"string yes\": {\"resource_checked\": \"yes\", \"blast_radius_checked\": True, \"rollback_checked\": True},\n        \"empty\": {},\n    }\n    for name, cl in cases.items():\n        print(f\"{name:12} -> missing {missing_checks(cl)}\")\n    print(\"only an explicit True counts, so a missing key, a False and the string yes are all refused; a complete checklist forces the reviewer to answer each question and does not prove the review was thoughtful\")\n\n    with tempfile.TemporaryDirectory() as d:\n        section(\"6. Genuinely running: a durable JSON store and idempotent proposal creation\")\n        path = Path(d) / \"proposals.json\"\n        reg = OperationRegistry()\n        r1, new1 = propose(path, reg, \"thread-001\", \"refund-001\", a1, \"refund a defective product\")\n        r2, new2 = propose(path, reg, \"thread-001\", \"refund-001\", a1, \"refund a defective product\")\n        print(\"first call created:\", new1, \"| second call created:\", new2, \"| same record:\", r1 == r2)\n        print(\"records on disk after reloading from a fresh read:\", len(read_json(path)), \"| status:\", read_json(path)[r1[\"proposal_id\"]][\"status\"], \"| temp files left:\", [p.name for p in Path(d).glob(\"*.tmp\")])\n        print(\"the proposal is stored before anyone reviews it and survives a reload, the second identical call returns the stored record instead of creating another, and the write goes through a temporary file and os.replace; this store has no locking, so two processes could still overwrite each other\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: canonical JSON makes equal actions identical ---\n{\"amount\":100,\"currency\":\"USD\",\"type\":\"refund\"}\nsame text for reordered dictionaries: True | digest length: 64\nsorting keys and fixing separators gives one text for one logical action, and a SHA-256 of that text is a 64-character fingerprint; a digest identifies content and does not by itself prove that anyone approved it\n\n--- 2. Genuinely running: idempotency keys ---\nsame operation: True | different operation id: False | different amount: False\nthread plus action only, two legitimate identical refunds get the same key: True\na repeat of the same operation maps to one key and a changed amount maps to another, so approving 100 cannot authorise 200; the thread-plus-action variant from the lesson text merges two deliberate identical refunds into one, which is why the lab adds an explicit operation id\n\n--- 3. Genuinely running: reusing an operation identity with a changed payload ---\nsame payload again: accepted\nchanged amount under the same id: refused -> operation refund-001 was first registered with a different action\nhashing alone would have treated the changed amount as a new operation with a new key, while the registry notices that the identity was already used for a different action and refuses it, which is the stronger design the lesson recommends\n\n--- 4. Genuinely computing: the state machine, every ordered pair of states ---\nlegal transitions: 10 of 56 ordered pairs\n  PENDING_REVIEW -> APPROVED\n  PENDING_REVIEW -> REJECTED\n  APPROVED -> COMMITTING\n  COMMITTING -> VERIFYING\n  COMMITTING -> RECONCILIATION_REQUIRED\n  COMMITTING -> FAILED\n  VERIFYING -> VERIFIED\n  VERIFYING -> FAILED\n  RECONCILIATION_REQUIRED -> VERIFYING\n  RECONCILIATION_REQUIRED -> FAILED\nPENDING_REVIEW -> COMMITTING legal: False | REJECTED -> APPROVED legal: False | terminal states with a way out: []\nonly a small fraction of the possible moves is legal, nothing can jump from pending review to committing, and the three terminal states have no exits; RECONCILIATION_REQUIRED is a separate state so an unknown outcome is never recorded as a plain failure\n\n--- 5. Genuinely running: checklist validation ---\ncomplete     -> missing []\none missing  -> missing ['rollback_checked']\none false    -> missing ['rollback_checked']\nstring yes   -> missing ['resource_checked']\nempty        -> missing ['resource_checked', 'blast_radius_checked', 'rollback_checked']\nonly an explicit True counts, so a missing key, a False and the string yes are all refused; a complete checklist forces the reviewer to answer each question and does not prove the review was thoughtful\n\n--- 6. Genuinely running: a durable JSON store and idempotent proposal creation ---\nfirst call created: True | second call created: False | same record: True\nrecords on disk after reloading from a fresh read: 1 | status: PENDING_REVIEW | temp files left: []\nthe proposal is stored before anyone reviews it and survives a reload, the second identical call returns the stored record instead of creating another, and the write goes through a temporary file and os.replace; this store has no locking, so two processes could still overwrite each other"
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
    "headingEn": "Genuinely Found: Digests, Keys and Conflict",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Digest, Key ಮತ್ತು Conflict",
    "bodyEn": "Section 1: two dictionaries with the same fields in a different order gave the same canonical text and a 64-character digest. Section 2: the same operation gave the same key, a different operation id gave a different key, a changed amount gave a different key, and the thread-plus-action variant gave the same key for two identical actions. Section 3: the same payload was accepted again and a changed amount under the same identity was refused with a conflict.",
    "bodyKn": "ವಿಭಾಗ 1: ಬೇರೆ ಕ್ರಮದಲ್ಲಿ ಅದೇ ಕ್ಷೇತ್ರಗಳಿರುವ ಎರಡು ನಿಘಂಟುಗಳು ಅದೇ canonical ಪಠ್ಯ ಮತ್ತು 64-ಅಕ್ಷರ digest ನೀಡಿದವು. ವಿಭಾಗ 2: ಅದೇ operation ಅದೇ key ನೀಡಿತು, ಬೇರೆ operation id ಬೇರೆ key ನೀಡಿತು, ಬದಲಾದ ಮೊತ್ತ ಬೇರೆ key ನೀಡಿತು, ಮತ್ತು thread-ಜೊತೆ-ಕ್ರಿಯೆ ರೂಪ ಎರಡು ಒಂದೇ ಕ್ರಿಯೆಗಳಿಗೆ ಅದೇ key ನೀಡಿತು. ವಿಭಾಗ 3: ಅದೇ ವಿಷಯ ಮತ್ತೆ ಸ್ವೀಕರಿಸಲ್ಪಟ್ಟಿತು ಮತ್ತು ಅದೇ ಗುರುತಿನಡಿ ಬದಲಾದ ಮೊತ್ತ conflict ನೊಂದಿಗೆ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: States, Checklist and Store",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸ್ಥಿತಿಗಳು, ಚೆಕ್‌ಲಿಸ್ಟ್ ಮತ್ತು ಸಂಗ್ರಹ",
    "bodyEn": "Section 4: 10 of 56 ordered pairs of states were legal, PENDING_REVIEW to COMMITTING and REJECTED to APPROVED were not, and no terminal state had a way out. Section 5: the complete checklist had nothing missing, one missing key and one False each gave rollback_checked, the string yes gave resource_checked and an empty checklist missed all three. Section 6: the first proposal call created a record, the second did not and returned the same record, one record was on disk with the status PENDING_REVIEW and no temporary files were left.",
    "bodyKn": "ವಿಭಾಗ 4: 56 ಕ್ರಮಬದ್ಧ ಸ್ಥಿತಿ ಜೋಡಿಗಳಲ್ಲಿ 10 ಕಾನೂನುಬದ್ಧವಾಗಿದ್ದವು, PENDING_REVIEW ನಿಂದ COMMITTING ಮತ್ತು REJECTED ನಿಂದ APPROVED ಅಲ್ಲ, ಮತ್ತು ಯಾವ ಅಂತಿಮ ಸ್ಥಿತಿಗೂ ಹೊರದಾರಿ ಇರಲಿಲ್ಲ. ವಿಭಾಗ 5: ಸಂಪೂರ್ಣ ಚೆಕ್‌ಲಿಸ್ಟ್‌ನಲ್ಲಿ ಏನೂ ಕೊರತೆ ಇರಲಿಲ್ಲ, ಒಂದು key ಕೊರತೆ ಮತ್ತು ಒಂದು False ಎರಡೂ rollback_checked ನೀಡಿದವು, ಸ್ಟ್ರಿಂಗ್ yes resource_checked ನೀಡಿತು ಮತ್ತು ಖಾಲಿ ಚೆಕ್‌ಲಿಸ್ಟ್ ಮೂರನ್ನೂ ತಪ್ಪಿಸಿತು. ವಿಭಾಗ 6: ಮೊದಲ proposal ಕರೆ ದಾಖಲೆ ರಚಿಸಿತು, ಎರಡನೆಯದು ರಚಿಸಲಿಲ್ಲ ಮತ್ತು ಅದೇ ದಾಖಲೆ ಹಿಂತಿರುಗಿಸಿತು, ಡಿಸ್ಕ್‌ನಲ್ಲಿ ಒಂದು ದಾಖಲೆ PENDING_REVIEW ಸ್ಥಿತಿಯೊಂದಿಗೆ ಇತ್ತು ಮತ್ತು ತಾತ್ಕಾಲಿಕ ಫೈಲ್‌ಗಳು ಉಳಿಯಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "An approval that is bound to a digest, a stable key and a legal state cannot be silently reused for a different action, which is the property the later parts depend on.",
    "bodyKn": "digest, ಸ್ಥಿರ key ಮತ್ತು ಕಾನೂನುಬದ್ಧ ಸ್ಥಿತಿಗೆ ಬಂಧಿತ ಅನುಮೋದನೆಯನ್ನು ಬೇರೆ ಕ್ರಿಯೆಗೆ ಮೌನವಾಗಿ ಮರುಬಳಸಲಾಗದು, ಇದು ನಂತರದ ಭಾಗಗಳು ಅವಲಂಬಿಸಿರುವ ಗುಣ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the thread plus the action is a good enough identity.\" Two deliberate identical refunds got the same key, which is why the lab adds an explicit operation id.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"thread ಜೊತೆ ಕ್ರಿಯೆ ಸಾಕಷ್ಟು ಉತ್ತಮ ಗುರುತು.\" ಎರಡು ಉದ್ದೇಶಪೂರ್ವಕ ಒಂದೇ ಮರುಪಾವತಿಗಳು ಅದೇ key ಪಡೆದವು, ಆದ್ದರಿಂದಲೇ ಲ್ಯಾಬ್ ಸ್ಪಷ್ಟ operation id ಸೇರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Digest: a fingerprint of content. Idempotency key: one identity for one logical operation. Canonical JSON: one text per value. Terminal state: a state with no legal exit.",
    "bodyKn": "Digest: ವಿಷಯದ ಬೆರಳಚ್ಚು. Idempotency key: ಒಂದು ತಾರ್ಕಿಕ operation ಗೆ ಒಂದು ಗುರುತು. Canonical JSON: ಒಂದು ಮೌಲ್ಯಕ್ಕೆ ಒಂದು ಪಠ್ಯ. ಅಂತಿಮ ಸ್ಥಿತಿ: ಕಾನೂನುಬದ್ಧ ಹೊರದಾರಿ ಇಲ್ಲದ ಸ್ಥಿತಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Reordered fields gave one digest. 2) A changed amount changed the key. 3) A reused identity with a new amount was refused. 4) 10 of 56 state moves were legal. 5) Only an explicit True passed the checklist.",
    "bodyKn": "1) ಮರುಕ್ರಮಗೊಳಿಸಿದ ಕ್ಷೇತ್ರಗಳು ಒಂದು digest ನೀಡಿದವು. 2) ಬದಲಾದ ಮೊತ್ತ key ಬದಲಿಸಿತು. 3) ಹೊಸ ಮೊತ್ತದೊಂದಿಗೆ ಮರುಬಳಸಿದ ಗುರುತು ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು. 4) 56 ರಲ್ಲಿ 10 ಸ್ಥಿತಿ ಚಲನೆಗಳು ಕಾನೂನುಬದ್ಧ. 5) ಸ್ಪಷ್ಟ True ಮಾತ್ರ ಚೆಕ್‌ಲಿಸ್ಟ್ ಪಾಸ್ ಮಾಡಿತು."
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
       "10",
       "8",
       "56",
       "3"
      ],
      "optsKn": [
       "10",
       "8",
       "56",
       "3"
      ],
      "correct": 0
     },
     {
      "q": "How long was the digest?",
      "qKn": "digest ಎಷ್ಟು ಉದ್ದವಿತ್ತು?",
      "opts": [
       "64 characters",
       "32 characters",
       "10 characters",
       "256 characters"
      ],
      "optsKn": [
       "64 ಅಕ್ಷರಗಳು",
       "32 ಅಕ್ಷರಗಳು",
       "10 ಅಕ್ಷರಗಳು",
       "256 ಅಕ್ಷರಗಳು"
      ],
      "correct": 0
     },
     {
      "q": "What did the string yes for resource_checked produce?",
      "qKn": "resource_checked ಗೆ ಸ್ಟ್ರಿಂಗ್ yes ಏನು ನೀಡಿತು?",
      "opts": [
       "resource_checked was reported missing",
       "It passed",
       "rollback_checked was reported missing",
       "An exception"
      ],
      "optsKn": [
       "resource_checked ಕೊರತೆ ಎಂದು ವರದಿಯಾಯಿತು",
       "ಅದು ಪಾಸ್ ಆಯಿತು",
       "rollback_checked ಕೊರತೆ ಎಂದು ವರದಿಯಾಯಿತು",
       "ಒಂದು ಅಪವಾದ"
      ],
      "correct": 0
     },
     {
      "q": "What happened when an operation id was reused with a changed amount?",
      "qKn": "ಬದಲಾದ ಮೊತ್ತದೊಂದಿಗೆ operation id ಮರುಬಳಸಿದಾಗ ಏನಾಯಿತು?",
      "opts": [
       "A conflict refused it",
       "It became a new operation",
       "It overwrote the first",
       "Nothing was checked"
      ],
      "optsKn": [
       "conflict ಅದನ್ನು ನಿರಾಕರಿಸಿತು",
       "ಅದು ಹೊಸ operation ಆಯಿತು",
       "ಅದು ಮೊದಲನೆಯದನ್ನು ಮೇಲ್ಬರೆದಿತು",
       "ಏನೂ ಪರಿಶೀಲಿಸಲ್ಪಡಲಿಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Why is the JSON store only a teaching store?",
      "qKn": "JSON ಸಂಗ್ರಹ ಬೋಧನಾ ಸಂಗ್ರಹ ಮಾತ್ರ ಏಕೆ?",
      "opts": [
       "It has no locking across processes",
       "It cannot be read",
       "It is encrypted",
       "It uses SQL"
      ],
      "optsKn": [
       "ಪ್ರಕ್ರಿಯೆಗಳ ನಡುವೆ ಅದಕ್ಕೆ ಲಾಕಿಂಗ್ ಇಲ್ಲ",
       "ಅದನ್ನು ಓದಲಾಗದು",
       "ಅದು ಗೂಢಲಿಪೀಕೃತ",
       "ಅದು SQL ಬಳಸುತ್ತದೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
