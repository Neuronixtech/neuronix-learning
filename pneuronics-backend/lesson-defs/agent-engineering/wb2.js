module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321568",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Agent Workbench Engineering: Why Capable Models Still Fail (Part 2 of 3) — State, Authorization, Evidence and Revisions",
 "titleKn": "Agent Workbench ಎಂಜಿನಿಯರಿಂಗ್: ಸಮರ್ಥ ಮಾದರಿಗಳು ಏಕೆ ಇನ್ನೂ ವಿಫಲವಾಗುತ್ತವೆ (ಭಾಗ 2 / 3) — ಸ್ಥಿತಿ, ಅಧಿಕಾರ, ಸಾಕ್ಷ್ಯ ಮತ್ತು Revisions",
 "desc": "Build the state machine, path authorization, evidence provenance check, bounded retries and revision check beneath the seven surfaces, and try to bypass each.",
 "descKn": "ಏಳು ಮೇಲ್ಮೈಗಳ ಕೆಳಗಿನ ಸ್ಥಿತಿ ಯಂತ್ರ, path ಅಧಿಕಾರ, ಸಾಕ್ಷ್ಯ ಮೂಲ ಪರಿಶೀಲನೆ, ಮಿತಿ ಮರುಪ್ರಯತ್ನಗಳು ಮತ್ತು revision ಪರಿಶೀಲನೆ ನಿರ್ಮಿಸಿ ಪ್ರತಿಯೊಂದನ್ನೂ ಬೈಪಾಸ್ ಮಾಡಲು ಪ್ರಯತ್ನಿಸಿ.",
 "objectives": [
  "Model task state transitions.",
  "Check paths after resolving them.",
  "Verify where evidence came from.",
  "Use idempotency keys with retries.",
  "Reject stale writes with revisions."
 ],
 "objectivesKn": [
  "ಕಾರ್ಯ ಸ್ಥಿತಿ ಪರಿವರ್ತನೆಗಳನ್ನು ಮಾದರಿ ಮಾಡಿ.",
  "Paths ಅನ್ನು ಪರಿಹರಿಸಿದ ನಂತರ ಪರಿಶೀಲಿಸಿ.",
  "ಸಾಕ್ಷ್ಯ ಎಲ್ಲಿಂದ ಬಂತು ಪರಿಶೀಲಿಸಿ.",
  "ಮರುಪ್ರಯತ್ನಗಳೊಂದಿಗೆ idempotency keys ಬಳಸಿ.",
  "Revisions ಮೂಲಕ ಹಳೆಯ ಬರಹ ತಿರಸ್ಕರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Agent Workbench Engineering: Why Capable Models Still Fail (Part 2 of 3)",
    "textKn": "Agent Workbench ಎಂಜಿನಿಯರಿಂಗ್: ಸಮರ್ಥ ಮಾದರಿಗಳು ಏಕೆ ಇನ್ನೂ ವಿಫಲವಾಗುತ್ತವೆ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: a state machine, path authorization, provenance of evidence, bounded retries, idempotency and a revision check. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind agent workbench engineering (instructions, state, scope, feedback, verification, review and handoff), not the real software, and the agent is a scripted function that edits a real temporary repository and no language model is involved, so no real LLM behaviour is measured. The pasted lesson said its original code/main.py was not supplied, so the lab is our own implementation of the behaviour it describes. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಸ್ಥಿತಿ ಯಂತ್ರ, path ಅಧಿಕಾರ, ಸಾಕ್ಷ್ಯದ ಮೂಲ, ಮಿತಿ ಮರುಪ್ರಯತ್ನ, idempotency ಮತ್ತು revision ಪರಿಶೀಲನೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು agent workbench ಎಂಜಿನಿಯರಿಂಗ್ (ಸೂಚನೆ, ಸ್ಥಿತಿ, ವ್ಯಾಪ್ತಿ, ಪ್ರತಿಕ್ರಿಯೆ, ಪರಿಶೀಲನೆ, ಪರಿಶೀಲಕ ಮತ್ತು handoff) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು agent ನಿಜ ತಾತ್ಕಾಲಿಕ repository ಅನ್ನು ಸಂಪಾದಿಸುವ ಸ್ಕ್ರಿಪ್ಟ್ ಫಂಕ್ಷನ್ ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಮೂಲ code/main.py ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Surfaces Need Mechanisms",
    "textKn": "ಮೇಲ್ಮೈಗಳಿಗೆ ಕಾರ್ಯವಿಧಾನಗಳು ಬೇಕು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "From Files to Enforcement",
    "headingKn": "ಫೈಲ್‌ಗಳಿಂದ ಜಾರಿಗೆ",
    "bodyEn": "A state file, a scope file and a handoff are only documents until something enforces them. This part builds the machinery underneath: a task state machine, a path authorization policy tried against real traversal attempts, an acceptance evaluator that checks where evidence came from, bounded retries with an idempotency key and an optimistic revision check between two real threads.",
    "bodyKn": "ಸ್ಥಿತಿ ಫೈಲ್, ವ್ಯಾಪ್ತಿ ಫೈಲ್ ಮತ್ತು handoff ಏನಾದರೂ ಜಾರಿಗೊಳಿಸುವವರೆಗೆ ಕೇವಲ ದಾಖಲೆಗಳು. ಈ ಭಾಗ ಕೆಳಗಿನ ಯಂತ್ರಾಂಶ ನಿರ್ಮಿಸುತ್ತದೆ: ಕಾರ್ಯ ಸ್ಥಿತಿ ಯಂತ್ರ, ನಿಜ traversal ಪ್ರಯತ್ನಗಳ ವಿರುದ್ಧ ಪ್ರಯತ್ನಿಸಿದ path ಅಧಿಕಾರ ನೀತಿ, ಸಾಕ್ಷ್ಯ ಎಲ್ಲಿಂದ ಬಂತು ಎಂದು ಪರಿಶೀಲಿಸುವ ಸ್ವೀಕಾರ ಮೌಲ್ಯಮಾಪಕ, idempotency key ಇರುವ ಮಿತಿ ಮರುಪ್ರಯತ್ನಗಳು ಮತ್ತು ಎರಡು ನಿಜ threads ನಡುವೆ optimistic revision ಪರಿಶೀಲನೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Primitives Behind the Surfaces",
    "headingKn": "ಮೇಲ್ಮೈಗಳ ಹಿಂದಿನ ಮೂಲಭೂತ ಭಾಗಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Primitives behind the surfaces</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">state machine</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">legal transitions</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">authorization</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">checked at the write</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">provenance</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">who made the evidence</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">revision check</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">no silent overwrite</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the rule only protects paths that use it</text></svg>",
    "captionEn": "A rule protects only the code paths that use it.",
    "captionKn": "ನಿಯಮ ಅದನ್ನು ಬಳಸುವ ಕೋಡ್ ಮಾರ್ಗಗಳನ್ನು ಮಾತ್ರ ರಕ್ಷಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Primitive to surface",
    "headingKn": "ಮೂಲಭೂತ ಭಾಗದಿಂದ ಮೇಲ್ಮೈಗೆ",
    "headers": [
     "Surface",
     "Mechanism",
     "Weak point"
    ],
    "rows": [
     [
      "State",
      "state machine with revisions",
      "a caller that sets the field directly"
     ],
     [
      "Scope",
      "resolved-path authorization",
      "a check followed by a later write"
     ],
     [
      "Verification",
      "evidence with a trusted source",
      "booleans the agent can write"
     ],
     [
      "Handoff",
      "idempotent notifications",
      "a store that does not survive restarts"
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
    "filename": "wb_2.py",
    "headingEn": "State machine, path checks, acceptance evaluator and retry decision",
    "headingKn": "ಸ್ಥಿತಿ ಯಂತ್ರ, path ಪರಿಶೀಲನೆ, ಸ್ವೀಕಾರ ಮೌಲ್ಯಮಾಪಕ ಮತ್ತು ಮರುಪ್ರಯತ್ನ ತೀರ್ಮಾನ",
    "descEn": "Task.move validates transitions and an optional expected revision. authorize_string compares text, authorize_resolved resolves the path against the workspace root. evaluate_acceptance refuses evidence from an untrusted source. decide_retry classifies errors and bounds attempts.",
    "descKn": "Task.move ಪರಿವರ್ತನೆಗಳು ಮತ್ತು ಐಚ್ಛಿಕ ನಿರೀಕ್ಷಿತ revision ಪರಿಶೀಲಿಸುತ್ತದೆ. authorize_string ಪಠ್ಯ ಹೋಲಿಸುತ್ತದೆ, authorize_resolved ವರ್ಕ್‌ಸ್ಪೇಸ್ ಮೂಲಕ್ಕೆ ವಿರುದ್ಧ path ಅನ್ನು ಪರಿಹರಿಸುತ್ತದೆ. evaluate_acceptance ವಿಶ್ವಾಸಾರ್ಹವಲ್ಲದ ಮೂಲದ ಸಾಕ್ಷ್ಯ ತಿರಸ್ಕರಿಸುತ್ತದೆ. decide_retry ದೋಷಗಳನ್ನು ವರ್ಗೀಕರಿಸಿ ಪ್ರಯತ್ನ ಮಿತಿಗೊಳಿಸುತ್ತದೆ.",
    "code": "ALLOWED_TRANSITIONS = {\"pending\": {\"in_progress\", \"blocked\"}, \"in_progress\": {\"blocked\", \"verified\"}, \"blocked\": {\"in_progress\"}, \"verified\": {\"handed_off\", \"blocked\"}, \"handed_off\": set()}\n\n\nclass Task:\n    def __init__(self):\n        self.status, self.revision, self.history = \"pending\", 1, []\n\n    def move(self, new, expected_revision=None):\n        if expected_revision is not None and expected_revision != self.revision:\n            raise RuntimeError(f\"stale write: expected revision {expected_revision}, found {self.revision}\")\n        if new not in ALLOWED_TRANSITIONS[self.status]:\n            raise ValueError(f\"invalid transition {self.status} -> {new}\")\n        self.history.append((self.status, new))\n        self.status, self.revision = new, self.revision + 1\n\n\ndef authorize_string(requested, allowed):\n    return str(PurePosixPath(requested)) in allowed\n\n\ndef authorize_resolved(root, requested, allowed):\n    root = Path(root).resolve()\n    target = (root / requested).resolve()\n    try:\n        rel = target.relative_to(root)\n    except ValueError:\n        return False, \"escapes the workspace\"\n    return (rel.as_posix() in allowed), \"resolved path \" + rel.as_posix()\n\n\ndef evaluate_acceptance(evidence, trusted_ids):\n    required = {\"valid_input_test_passed\", \"empty_input_test_passed\", \"scope_check_passed\", \"review_approved\"}\n    missing = sorted(required - evidence.keys())\n    failed = sorted(k for k in required if k in evidence and evidence[k] is not True)\n    untrusted = [] if evidence.get(\"source\") in trusted_ids else [\"source\"]\n    return {\"passed\": not missing and not failed and not untrusted, \"missing\": missing, \"failed\": failed, \"untrusted\": untrusted}\n\n\ndef decide_retry(attempt, max_attempts, retryable):\n    if not retryable:\n        return \"stop: not retryable\"\n    return \"stop: attempts exhausted\" if attempt >= max_attempts else f\"retry as attempt {attempt + 1}\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "wb_2.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() tests illegal transitions, string versus resolved paths on a real directory, forged evidence, retries with and without keys, and two workers writing from the same revision.",
    "descKn": "main() ಅಕ್ರಮ ಪರಿವರ್ತನೆಗಳು, ನಿಜ ಡೈರೆಕ್ಟರಿಯ ಮೇಲೆ ಸ್ಟ್ರಿಂಗ್ ವಿರುದ್ಧ ಪರಿಹರಿಸಿದ paths, ನಕಲಿ ಸಾಕ್ಷ್ಯ, keys ಜೊತೆ ಮತ್ತು ಇಲ್ಲದೆ ಮರುಪ್ರಯತ್ನಗಳು ಮತ್ತು ಅದೇ revision ನಿಂದ ಬರೆಯುವ ಎರಡು workers ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Genuinely checking: a state machine rejects shortcuts\")\n    t = Task()\n    for new in (\"in_progress\", \"verified\", \"handed_off\"):\n        t.move(new)\n    print(\"legal path:\", t.history)\n    t2 = Task()\n    try:\n        t2.move(\"handed_off\")\n    except ValueError as e:\n        print(\"pending -> handed_off:\", e)\n    t3 = Task()\n    t3.status = \"handed_off\"  # code that bypasses move() writes the field directly\n    print(\"a caller that assigns the status field directly reached\", t3.status, \"with no validation: the rule only protects callers that use move()\")\n\n    section(\"2. Genuinely checking: string allowlist versus resolved-path check on a real directory\")\n    with tempfile.TemporaryDirectory() as d:\n        root = Path(d)\n        (root / \"src\").mkdir()\n        (root / \"src\" / \"app.py\").write_text(\"x\", encoding=\"utf-8\")\n        outside = Path(d + \"_outside\")\n        outside.mkdir()\n        (outside / \"secret.txt\").write_text(\"secret\", encoding=\"utf-8\")\n        allowed = {\"src/app.py\"}\n        cases = [(\"src/app.py\", \"allowed file\"), (\"src/../src/app.py\", \"same file spelled with ..\"), (\"src/../../\" + outside.name + \"/secret.txt\", \"traversal out of the workspace\"), (\"settings.py\", \"not on the list\")]\n        for req, label in cases:\n            print(f\"{label:34} string check={authorize_string(req, allowed)!s:5} resolved check={authorize_resolved(root, req, allowed)}\")\n        link = root / \"src\" / \"link.py\"\n        try:\n            os.symlink(outside / \"secret.txt\", link)\n            print(f\"{'symlink to a file outside':34} string check={authorize_string('src/link.py', allowed | {'src/link.py'})!s:5} resolved check={authorize_resolved(root, 'src/link.py', allowed | {'src/link.py'})}\")\n        except (OSError, NotImplementedError) as e:\n            print(\"symlink test skipped on this system:\", type(e).__name__)\n        import shutil\n        shutil.rmtree(outside)\n    print(\"the same file spelled with .. was wrongly refused by the string check and recognised by the resolved check, and the traversal out of the workspace was refused by both; the symlink case could not run on this machine (creating a symlink raised OSError), so symlink handling is untested in this output; and a check followed by a later write is still open to a race, so enforcement belongs at the write itself\")\n\n    section(\"3. Genuinely checking: acceptance evidence is a claim unless it comes from a trusted source\")\n    good = {\"valid_input_test_passed\": True, \"empty_input_test_passed\": True, \"scope_check_passed\": True, \"review_approved\": True, \"source\": \"ci-runner\"}\n    forged = dict(good, source=\"agent\")\n    print(\"trusted runner:\", evaluate_acceptance(good, {\"ci-runner\"}))\n    print(\"same booleans written by the agent:\", evaluate_acceptance(forged, {\"ci-runner\"}))\n    print(\"review missing:\", evaluate_acceptance({k: v for k, v in good.items() if k != \"review_approved\"}, {\"ci-runner\"}))\n    print(\"the booleans are identical in the first two cases; only the provenance differs, and a verifier that reads only the booleans cannot tell them apart\")\n\n    section(\"4. Genuinely checking: bounded retries, error classes and idempotent side effects\")\n    for attempt, maxa, retry in ((1, 3, True), (3, 3, True), (1, 3, False)):\n        print(f\"attempt {attempt} of {maxa}, retryable={retry!s:5} -> {decide_retry(attempt, maxa, retry)}\")\n    sent = []\n    def send(key, store):\n        if key in store:\n            return \"duplicate suppressed\"\n        store.add(key)\n        sent.append(key)\n        return \"sent\"\n    store = set()\n    print(\"first delivery:\", send(\"task-104:notify\", store), \"| retried delivery with the same key:\", send(\"task-104:notify\", store), \"| messages actually sent:\", len(sent))\n    sent2 = []\n    for _ in range(2):\n        sent2.append(\"task-104:notify\")\n    print(\"the same retry with no key would have sent\", len(sent2), \"messages\")\n\n    section(\"5. Genuinely measuring: two workers saving the same task from the same revision (real threads)\")\n    results = {}\n    def worker(name, task, gate):\n        gate.wait()\n        try:\n            task.move(\"in_progress\", expected_revision=1)\n            results[name] = \"saved\"\n        except Exception as e:\n            results[name] = f\"rejected: {e}\"\n    for guarded in (False, True):\n        task, gate = Task(), threading.Barrier(2)\n        if not guarded:\n            # without a revision check both writes succeed in turn from their own stale view\n            task.status = \"pending\"\n            a = lambda: task.history.append((\"pending\", \"in_progress\"))\n            a(); a()\n            print(f\"two unguarded writes (simulated, no revision check): both 'succeeded', history length {len(task.history)}\")\n        else:\n            ths = [threading.Thread(target=worker, args=(n, task, gate)) for n in (\"A\", \"B\")]\n            [th.start() for th in ths]; [th.join() for th in ths]\n            print(\"with a revision check:\", dict(sorted(results.items())), \"| final revision\", task.revision)\n    print(\"one worker's update was refused because its revision was stale, so the other worker's result was not silently overwritten; which worker wins is decided by timing, and the loser has to reload and reconcile\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely checking: a state machine rejects shortcuts ---\nlegal path: [('pending', 'in_progress'), ('in_progress', 'verified'), ('verified', 'handed_off')]\npending -> handed_off: invalid transition pending -> handed_off\na caller that assigns the status field directly reached handed_off with no validation: the rule only protects callers that use move()\n\n--- 2. Genuinely checking: string allowlist versus resolved-path check on a real directory ---\nallowed file                       string check=True  resolved check=(True, 'resolved path src/app.py')\nsame file spelled with ..          string check=False resolved check=(True, 'resolved path src/app.py')\ntraversal out of the workspace     string check=False resolved check=(False, 'escapes the workspace')\nnot on the list                    string check=False resolved check=(False, 'resolved path settings.py')\nsymlink test skipped on this system: OSError\nthe same file spelled with .. was wrongly refused by the string check and recognised by the resolved check, and the traversal out of the workspace was refused by both; the symlink case could not run on this machine (creating a symlink raised OSError), so symlink handling is untested in this output; and a check followed by a later write is still open to a race, so enforcement belongs at the write itself\n\n--- 3. Genuinely checking: acceptance evidence is a claim unless it comes from a trusted source ---\ntrusted runner: {'passed': True, 'missing': [], 'failed': [], 'untrusted': []}\nsame booleans written by the agent: {'passed': False, 'missing': [], 'failed': [], 'untrusted': ['source']}\nreview missing: {'passed': False, 'missing': ['review_approved'], 'failed': [], 'untrusted': []}\nthe booleans are identical in the first two cases; only the provenance differs, and a verifier that reads only the booleans cannot tell them apart\n\n--- 4. Genuinely checking: bounded retries, error classes and idempotent side effects ---\nattempt 1 of 3, retryable=True  -> retry as attempt 2\nattempt 3 of 3, retryable=True  -> stop: attempts exhausted\nattempt 1 of 3, retryable=False -> stop: not retryable\nfirst delivery: sent | retried delivery with the same key: duplicate suppressed | messages actually sent: 1\nthe same retry with no key would have sent 2 messages\n\n--- 5. Genuinely measuring: two workers saving the same task from the same revision (real threads) ---\ntwo unguarded writes (simulated, no revision check): both 'succeeded', history length 2\nwith a revision check: {'A': 'rejected: stale write: expected revision 1, found 2', 'B': 'saved'} | final revision 2\none worker's update was refused because its revision was stale, so the other worker's result was not silently overwritten; which worker wins is decided by timing, and the loser has to reload and reconcile"
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
    "headingEn": "Experiment 1: A state machine rejects shortcuts",
    "headingKn": "ಪ್ರಯೋಗ 1: A state machine rejects shortcuts",
    "bodyEn": "What it ran: A state machine rejects shortcuts. What the lab concluded: a caller that assigns the status field directly reached handed_off with no validation: the rule only protects callers that use move()",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A state machine rejects shortcuts. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a caller that assigns the status field directly reached handed_off with no validation: the rule only protects callers that use move()"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely checking: a state machine rejects shortcuts ---\nlegal path: [('pending', 'in_progress'), ('in_progress', 'verified'), ('verified', 'handed_off')]\npending -> handed_off: invalid transition pending -> handed_off"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: String allowlist versus resolved-path check on a real directory",
    "headingKn": "ಪ್ರಯೋಗ 2: String allowlist versus resolved-path check on a real directory",
    "bodyEn": "What it ran: String allowlist versus resolved-path check on a real directory. What the lab concluded: the same file spelled with .. was wrongly refused by the string check and recognised by the resolved check, and the traversal out of the workspace was refused by both; the symlink case could not run on this machine (creating a symlink raised OSError), so symlink handling is untested in this output; and a check followed by a later write is still open to a race, so enforcement belongs at the write itself",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: String allowlist versus resolved-path check on a real directory. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the same file spelled with .. was wrongly refused by the string check and recognised by the resolved check, and the traversal out of the workspace was refused by both; the symlink case could not run on this machine (creating a symlink raised OSError), so symlink handling is untested in this output; and a check followed by a later write is still open to a race, so enforcement belongs at the write itself"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely checking: string allowlist versus resolved-path check on a real directory ---\nallowed file                       string check=True  resolved check=(True, 'resolved path src/app.py')\nsame file spelled with ..          string check=False resolved check=(True, 'resolved path src/app.py')\ntraversal out of the workspace     string check=False resolved check=(False, 'escapes the workspace')\nnot on the list                    string check=False resolved check=(False, 'resolved path settings.py')\nsymlink test skipped on this system: OSError"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Acceptance evidence is a claim unless it comes from a trusted source",
    "headingKn": "ಪ್ರಯೋಗ 3: Acceptance evidence is a claim unless it comes from a trusted source",
    "bodyEn": "What it ran: Acceptance evidence is a claim unless it comes from a trusted source. What the lab concluded: the booleans are identical in the first two cases; only the provenance differs, and a verifier that reads only the booleans cannot tell them apart",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Acceptance evidence is a claim unless it comes from a trusted source. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the booleans are identical in the first two cases; only the provenance differs, and a verifier that reads only the booleans cannot tell them apart"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely checking: acceptance evidence is a claim unless it comes from a trusted source ---\ntrusted runner: {'passed': True, 'missing': [], 'failed': [], 'untrusted': []}\nsame booleans written by the agent: {'passed': False, 'missing': [], 'failed': [], 'untrusted': ['source']}\nreview missing: {'passed': False, 'missing': ['review_approved'], 'failed': [], 'untrusted': []}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Bounded retries, error classes and idempotent side effects",
    "headingKn": "ಪ್ರಯೋಗ 4: Bounded retries, error classes and idempotent side effects",
    "bodyEn": "What it ran: Bounded retries, error classes and idempotent side effects. What the lab concluded: This experiment prints data only; read the lines in the output below.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Bounded retries, error classes and idempotent side effects. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): This experiment prints data only; read the lines in the output below."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely checking: bounded retries, error classes and idempotent side effects ---\nattempt 1 of 3, retryable=True  -> retry as attempt 2\nattempt 3 of 3, retryable=True  -> stop: attempts exhausted\nattempt 1 of 3, retryable=False -> stop: not retryable\nfirst delivery: sent | retried delivery with the same key: duplicate suppressed | messages actually sent: 1\nthe same retry with no key would have sent 2 messages"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Two workers saving the same task from the same revision (real threads)",
    "headingKn": "ಪ್ರಯೋಗ 5: Two workers saving the same task from the same revision (real threads)",
    "bodyEn": "What it ran: Two workers saving the same task from the same revision (real threads). What the lab concluded: one worker's update was refused because its revision was stale, so the other worker's result was not silently overwritten; which worker wins is decided by timing, and the loser has to reload and reconcile",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Two workers saving the same task from the same revision (real threads). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): one worker's update was refused because its revision was stale, so the other worker's result was not silently overwritten; which worker wins is decided by timing, and the loser has to reload and reconcile"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely measuring: two workers saving the same task from the same revision (real threads) ---\ntwo unguarded writes (simulated, no revision check): both 'succeeded', history length 2\nwith a revision check: {'A': 'rejected: stale write: expected revision 1, found 2', 'B': 'saved'} | final revision 2"
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
    "headingEn": "Genuinely Found: Shortcuts, Spellings and Forged Booleans",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಶಾರ್ಟ್‌ಕಟ್‌ಗಳು, ಕಾಗುಣಿತಗಳು ಮತ್ತು ನಕಲಿ Booleans",
    "bodyEn": "Section 1: the legal path pending to in_progress to verified to handed_off worked, pending to handed_off was refused, and a caller that assigned the status field directly reached handed_off with no validation. Section 2 on a real directory: the same file spelled with .. was refused by the string check and recognised by the resolved check, and the traversal out of the workspace was refused by both; the symlink case could not run on this machine because creating a symlink raised OSError, so it is untested here. Section 3: the same four true booleans passed from the trusted runner and failed when the agent wrote them, because only the source differed.",
    "bodyKn": "ವಿಭಾಗ 1: ಕಾನೂನುಬದ್ಧ ಮಾರ್ಗ pending ರಿಂದ in_progress ರಿಂದ verified ರಿಂದ handed_off ಕೆಲಸ ಮಾಡಿತು, pending ರಿಂದ handed_off ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತು, ಮತ್ತು status ಕ್ಷೇತ್ರವನ್ನು ನೇರವಾಗಿ ನಿಯೋಜಿಸಿದ ಕರೆದವರು ಯಾವುದೇ ಪರಿಶೀಲನೆ ಇಲ್ಲದೆ handed_off ತಲುಪಿದರು. ವಿಭಾಗ 2 ನಿಜ ಡೈರೆಕ್ಟರಿಯ ಮೇಲೆ: .. ಜೊತೆ ಬರೆದ ಅದೇ ಫೈಲ್ ಸ್ಟ್ರಿಂಗ್ ಪರಿಶೀಲನೆಯಿಂದ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟು ಪರಿಹರಿಸಿದ ಪರಿಶೀಲನೆಯಿಂದ ಗುರುತಿಸಲ್ಪಟ್ಟಿತು, ಮತ್ತು ವರ್ಕ್‌ಸ್ಪೇಸ್‌ನಿಂದ ಹೊರಗಿನ traversal ಎರಡರಿಂದಲೂ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತು; symlink ರಚಿಸುವುದು OSError ಎತ್ತಿದ್ದರಿಂದ symlink ಪ್ರಕರಣ ಈ ಯಂತ್ರದಲ್ಲಿ ಓಡಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಇಲ್ಲಿ ಪರೀಕ್ಷಿಸಲ್ಪಟ್ಟಿಲ್ಲ. ವಿಭಾಗ 3: ಅದೇ ನಾಲ್ಕು true booleans ವಿಶ್ವಾಸಾರ್ಹ ಓಟಗಾರನಿಂದ ಪಾಸ್ ಆಗಿ agent ಬರೆದಾಗ ವಿಫಲವಾದವು, ಏಕೆಂದರೆ ಮೂಲ ಮಾತ್ರ ಭಿನ್ನವಾಗಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Retries, Keys and a Stale Revision",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮರುಪ್ರಯತ್ನಗಳು, Keys ಮತ್ತು ಹಳೆಯ Revision",
    "bodyEn": "Section 4: attempt 1 of 3 retried, attempt 3 of 3 stopped as exhausted, and a non-retryable error stopped at once; a notification with the key \"task-104:notify\" was sent once and the retry was suppressed, where the same retry with no key would have sent 2 messages. Section 5 (two real threads writing from revision 1): one worker saved and the other was rejected with \"stale write: expected revision 1, found 2\", leaving the final revision at 2; which worker wins depends on timing, and the loser must reload.",
    "bodyKn": "ವಿಭಾಗ 4: 3 ರಲ್ಲಿ ಪ್ರಯತ್ನ 1 ಮರುಪ್ರಯತ್ನಿಸಿತು, 3 ರಲ್ಲಿ ಪ್ರಯತ್ನ 3 ಮುಗಿದಿದೆ ಎಂದು ನಿಂತಿತು, ಮತ್ತು ಮರುಪ್ರಯತ್ನಿಸಲಾಗದ ದೋಷ ತಕ್ಷಣ ನಿಂತಿತು; key \"task-104:notify\" ಇರುವ ಅಧಿಸೂಚನೆ ಒಮ್ಮೆ ಕಳುಹಿಸಲ್ಪಟ್ಟು ಮರುಪ್ರಯತ್ನ ತಡೆಯಲ್ಪಟ್ಟಿತು, key ಇಲ್ಲದ ಅದೇ ಮರುಪ್ರಯತ್ನ 2 ಸಂದೇಶ ಕಳುಹಿಸುತ್ತಿತ್ತು. ವಿಭಾಗ 5 (revision 1 ರಿಂದ ಬರೆಯುವ ಎರಡು ನಿಜ threads): ಒಬ್ಬ worker ಉಳಿಸಿದನು ಮತ್ತು ಇನ್ನೊಬ್ಬ \"stale write: expected revision 1, found 2\" ಜೊತೆ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟನು, ಅಂತಿಮ revision 2 ಆಗಿ ಉಳಿಯಿತು; ಯಾವ worker ಗೆಲ್ಲುತ್ತಾನೆ ಎಂಬುದು ಸಮಯವನ್ನು ಅವಲಂಬಿಸುತ್ತದೆ, ಸೋತವನು ಮರುಲೋಡ್ ಮಾಡಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Each surface is only as strong as the mechanism behind it, and each mechanism has a bypass you can find by trying it: a direct field write, a different spelling, a forged boolean, a stale writer.",
    "bodyKn": "ಪ್ರತಿ ಮೇಲ್ಮೈ ಅದರ ಹಿಂದಿನ ಕಾರ್ಯವಿಧಾನದಷ್ಟೇ ಬಲಿಷ್ಠ, ಮತ್ತು ಪ್ರತಿ ಕಾರ್ಯವಿಧಾನಕ್ಕೆ ಪ್ರಯತ್ನಿಸಿ ಕಂಡುಹಿಡಿಯಬಹುದಾದ ಬೈಪಾಸ್ ಇದೆ: ನೇರ ಕ್ಷೇತ್ರ ಬರಹ, ಬೇರೆ ಕಾಗುಣಿತ, ನಕಲಿ boolean, ಹಳೆಯ ಬರಹಗಾರ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"if the verifier reads passed=true, the task passed.\" The same booleans were refused when their source was the agent.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"verifier passed=true ಓದಿದರೆ ಕಾರ್ಯ ಪಾಸ್.\" ಅದೇ booleans ಮೂಲ agent ಆಗಿದ್ದಾಗ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "State machine: legal transitions between task states. Authorization policy: rules about who may do what. Provenance: who produced a piece of evidence. Idempotency key: an id that suppresses a repeated side effect. Optimistic concurrency: reject a write based on a stale revision.",
    "bodyKn": "State machine: ಕಾರ್ಯ ಸ್ಥಿತಿಗಳ ನಡುವೆ ಕಾನೂನುಬದ್ಧ ಪರಿವರ್ತನೆಗಳು. Authorization policy: ಯಾರು ಏನು ಮಾಡಬಹುದು ಎಂಬ ನಿಯಮಗಳು. Provenance: ಒಂದು ಸಾಕ್ಷ್ಯವನ್ನು ಯಾರು ಉತ್ಪಾದಿಸಿದರು. Idempotency key: ಪುನರಾವರ್ತಿತ ಪಾರ್ಶ್ವ ಪರಿಣಾಮ ತಡೆಯುವ id. Optimistic concurrency: ಹಳೆಯ revision ಆಧಾರಿತ ಬರಹ ತಿರಸ್ಕರಿಸುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The state machine refused a shortcut but a direct field write bypassed it. 2) Resolved-path checks handled .. and traversal; symlinks were untested here. 3) Identical booleans passed or failed by source. 4) A key kept a retried notification at 1 message instead of 2. 5) A revision check rejected the stale writer.",
    "bodyKn": "1) ಸ್ಥಿತಿ ಯಂತ್ರ ಶಾರ್ಟ್‌ಕಟ್ ತಿರಸ್ಕರಿಸಿತು ಆದರೆ ನೇರ ಕ್ಷೇತ್ರ ಬರಹ ಅದನ್ನು ಬೈಪಾಸ್ ಮಾಡಿತು. 2) ಪರಿಹರಿಸಿದ-path ಪರಿಶೀಲನೆ .. ಮತ್ತು traversal ನಿಭಾಯಿಸಿತು; symlinks ಇಲ್ಲಿ ಪರೀಕ್ಷಿಸಲ್ಪಟ್ಟಿಲ್ಲ. 3) ಒಂದೇ booleans ಮೂಲದಿಂದ ಪಾಸ್ ಅಥವಾ ವಿಫಲವಾದವು. 4) Key ಮರುಪ್ರಯತ್ನಿಸಿದ ಅಧಿಸೂಚನೆಯನ್ನು 2 ಬದಲು 1 ಸಂದೇಶದಲ್ಲಿ ಇಟ್ಟಿತು. 5) Revision ಪರಿಶೀಲನೆ ಹಳೆಯ ಬರಹಗಾರನನ್ನು ತಿರಸ್ಕರಿಸಿತು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B wb_2.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B wb_2.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B wb_2.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B wb_2.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why did a direct assignment of the status field defeat the state machine?",
      "qKn": "status ಕ್ಷೇತ್ರದ ನೇರ ನಿಯೋಜನೆ ಸ್ಥಿತಿ ಯಂತ್ರವನ್ನು ಏಕೆ ಸೋಲಿಸಿತು?",
      "opts": [
       "The rule only protects callers that use move()",
       "The machine was empty",
       "The status was invalid",
       "It did not"
      ],
      "optsKn": [
       "ನಿಯಮ move() ಬಳಸುವ ಕರೆದವರನ್ನು ಮಾತ್ರ ರಕ್ಷಿಸುತ್ತದೆ",
       "ಯಂತ್ರ ಖಾಲಿಯಾಗಿತ್ತು",
       "Status ಅಮಾನ್ಯವಾಗಿತ್ತು",
       "ಅದು ಸೋಲಿಸಲಿಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What happened to the .. spelling of an allowed file?",
      "qKn": "ಅನುಮತಿಸಿದ ಫೈಲ್‌ನ .. ಕಾಗುಣಿತಕ್ಕೆ ಏನಾಯಿತು?",
      "opts": [
       "Refused by the string check, recognised by the resolved check",
       "Accepted by both",
       "Refused by both",
       "Crashed"
      ],
      "optsKn": [
       "ಸ್ಟ್ರಿಂಗ್ ಪರಿಶೀಲನೆಯಿಂದ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟು ಪರಿಹರಿಸಿದ ಪರಿಶೀಲನೆಯಿಂದ ಗುರುತಿಸಲ್ಪಟ್ಟಿತು",
       "ಎರಡರಿಂದಲೂ ಸ್ವೀಕರಿಸಲ್ಪಟ್ಟಿತು",
       "ಎರಡರಿಂದಲೂ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತು",
       "ಕ್ರ್ಯಾಶ್ ಆಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "Why did identical booleans fail when the agent wrote them?",
      "qKn": "agent ಬರೆದಾಗ ಒಂದೇ booleans ಏಕೆ ವಿಫಲವಾದವು?",
      "opts": [
       "The source was not trusted",
       "They were false",
       "They were missing",
       "JSON error"
      ],
      "optsKn": [
       "ಮೂಲ ವಿಶ್ವಾಸಾರ್ಹವಾಗಿರಲಿಲ್ಲ",
       "ಅವು false ಆಗಿದ್ದವು",
       "ಅವು ಕಾಣೆಯಾಗಿದ್ದವು",
       "JSON ದೋಷ"
      ],
      "correct": 0
     },
     {
      "q": "How many messages did the retry send with and without the idempotency key?",
      "qKn": "ಮರುಪ್ರಯತ್ನ idempotency key ಜೊತೆ ಮತ್ತು ಇಲ್ಲದೆ ಎಷ್ಟು ಸಂದೇಶ ಕಳುಹಿಸಿತು?",
      "opts": [
       "1 with, 2 without",
       "2 with, 1 without",
       "1 and 1",
       "2 and 2"
      ],
      "optsKn": [
       "ಜೊತೆ 1, ಇಲ್ಲದೆ 2",
       "ಜೊತೆ 2, ಇಲ್ಲದೆ 1",
       "1 ಮತ್ತು 1",
       "2 ಮತ್ತು 2"
      ],
      "correct": 0
     },
     {
      "q": "What happened to the second worker writing from revision 1?",
      "qKn": "Revision 1 ರಿಂದ ಬರೆದ ಎರಡನೇ worker ಗೆ ಏನಾಯಿತು?",
      "opts": [
       "It was rejected as a stale write",
       "It silently overwrote",
       "It crashed the first",
       "It succeeded twice"
      ],
      "optsKn": [
       "ಹಳೆಯ ಬರಹ ಎಂದು ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತು",
       "ಮೌನವಾಗಿ ಮೇಲ್ಬರಹ ಮಾಡಿತು",
       "ಮೊದಲನೆಯದನ್ನು ಕ್ರ್ಯಾಶ್ ಮಾಡಿತು",
       "ಎರಡು ಬಾರಿ ಯಶಸ್ವಿಯಾಯಿತು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
