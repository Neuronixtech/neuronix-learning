module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321568",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Agent Workbench Engineering: Why Capable Models Still Fail (Part 1 of 3) — Seven Surfaces and the Missing-Surface Failures",
 "titleKn": "Agent Workbench ಎಂಜಿನಿಯರಿಂಗ್: ಸಮರ್ಥ ಮಾದರಿಗಳು ಏಕೆ ಇನ್ನೂ ವಿಫಲವಾಗುತ್ತವೆ (ಭಾಗ 1 / 3) — ಏಳು ಮೇಲ್ಮೈಗಳು ಮತ್ತು ಕಾಣೆಯಾದ-ಮೇಲ್ಮೈ ವೈಫಲ್ಯಗಳು",
 "desc": "Run the same task prompt-only and workbench-guided against real temporary repositories and map each failure to the surface that was missing.",
 "descKn": "ಅದೇ ಕಾರ್ಯವನ್ನು ನಿಜ ತಾತ್ಕಾಲಿಕ repositories ಮೇಲೆ prompt-only ಮತ್ತು workbench-ಮಾರ್ಗದರ್ಶಿತವಾಗಿ ಓಡಿಸಿ ಪ್ರತಿ ವೈಫಲ್ಯವನ್ನು ಕಾಣೆಯಾದ ಮೇಲ್ಮೈಗೆ ನಕ್ಷೆ ಮಾಡಿ.",
 "objectives": [
  "Name the seven surfaces.",
  "Distinguish a claim from evidence.",
  "Detect changed files by hashing.",
  "Require tests that actually ran.",
  "Map failures to missing surfaces."
 ],
 "objectivesKn": [
  "ಏಳು ಮೇಲ್ಮೈಗಳನ್ನು ಹೆಸರಿಸಿ.",
  "ಹೇಳಿಕೆ ಮತ್ತು ಸಾಕ್ಷ್ಯ ಬೇರ್ಪಡಿಸಿ.",
  "Hash ಮೂಲಕ ಬದಲಾದ ಫೈಲ್‌ಗಳನ್ನು ಪತ್ತೆ ಮಾಡಿ.",
  "ನಿಜವಾಗಿ ಓಡಿದ ಪರೀಕ್ಷೆಗಳನ್ನು ಬೇಕಾಗಿಸಿ.",
  "ವೈಫಲ್ಯಗಳನ್ನು ಕಾಣೆಯಾದ ಮೇಲ್ಮೈಗಳಿಗೆ ನಕ್ಷೆ ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Agent Workbench Engineering: Why Capable Models Still Fail (Part 1 of 3)",
    "textKn": "Agent Workbench ಎಂಜಿನಿಯರಿಂಗ್: ಸಮರ್ಥ ಮಾದರಿಗಳು ಏಕೆ ಇನ್ನೂ ವಿಫಲವಾಗುತ್ತವೆ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a prompt-only run and a workbench-guided run against a real repository, with real tests and a real scope check. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind agent workbench engineering (instructions, state, scope, feedback, verification, review and handoff), not the real software, and the agent is a scripted function that edits a real temporary repository and no language model is involved, so no real LLM behaviour is measured. The pasted lesson said its original code/main.py was not supplied, so the lab is our own implementation of the behaviour it describes. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ನಿಜ repository ಮೇಲೆ prompt-only ಓಟ ಮತ್ತು workbench-ಮಾರ್ಗದರ್ಶಿತ ಓಟ, ನಿಜ ಪರೀಕ್ಷೆಗಳು ಮತ್ತು ನಿಜ ವ್ಯಾಪ್ತಿ ಪರಿಶೀಲನೆಯೊಂದಿಗೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು agent workbench ಎಂಜಿನಿಯರಿಂಗ್ (ಸೂಚನೆ, ಸ್ಥಿತಿ, ವ್ಯಾಪ್ತಿ, ಪ್ರತಿಕ್ರಿಯೆ, ಪರಿಶೀಲನೆ, ಪರಿಶೀಲಕ ಮತ್ತು handoff) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು agent ನಿಜ ತಾತ್ಕಾಲಿಕ repository ಅನ್ನು ಸಂಪಾದಿಸುವ ಸ್ಕ್ರಿಪ್ಟ್ ಫಂಕ್ಷನ್ ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಮೂಲ code/main.py ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Writing Code Is Not Finishing the Task",
    "textKn": "ಕೋಡ್ ಬರೆಯುವುದು ಕಾರ್ಯ ಮುಗಿಸುವುದಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Missing Surface Looks Like a Weak Model",
    "headingKn": "ಕಾಣೆಯಾದ ಮೇಲ್ಮೈ ದುರ್ಬಲ ಮಾದರಿಯಂತೆ ಕಾಣುತ್ತದೆ",
    "bodyEn": "A capable model can write plausible code and still leave a task unfinished: the tests never ran, an unrelated file changed, the next session knows nothing. The workbench supplies seven surfaces around the model: instructions, state, scope, feedback, verification, review and handoff. This part runs the same task twice on real temporary repositories, once prompt-only and once guided, and measures what each leaves behind.",
    "bodyKn": "ಸಮರ್ಥ ಮಾದರಿ ನಂಬಲರ್ಹ ಕೋಡ್ ಬರೆದರೂ ಕಾರ್ಯವನ್ನು ಅಪೂರ್ಣವಾಗಿ ಬಿಡಬಹುದು: ಪರೀಕ್ಷೆಗಳು ಎಂದೂ ಓಡಲಿಲ್ಲ, ಸಂಬಂಧವಿಲ್ಲದ ಫೈಲ್ ಬದಲಾಯಿತು, ಮುಂದಿನ ಸೆಷನ್‌ಗೆ ಏನೂ ತಿಳಿದಿಲ್ಲ. Workbench ಮಾದರಿಯ ಸುತ್ತ ಏಳು ಮೇಲ್ಮೈಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ: ಸೂಚನೆಗಳು, ಸ್ಥಿತಿ, ವ್ಯಾಪ್ತಿ, ಪ್ರತಿಕ್ರಿಯೆ, ಪರಿಶೀಲನೆ, ಪರಿಶೀಲಕ ಮತ್ತು handoff. ಈ ಭಾಗ ಅದೇ ಕಾರ್ಯವನ್ನು ನಿಜ ತಾತ್ಕಾಲಿಕ repositories ಮೇಲೆ ಎರಡು ಬಾರಿ, ಒಮ್ಮೆ prompt-only ಮತ್ತು ಒಮ್ಮೆ ಮಾರ್ಗದರ್ಶಿತ, ಓಡಿಸಿ ಪ್ರತಿಯೊಂದೂ ಏನನ್ನು ಬಿಡುತ್ತದೆ ಎಂದು ಅಳೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Seven Surfaces",
    "headingKn": "ಏಳು ಮೇಲ್ಮೈಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Seven surfaces around a model</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">instructions</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">state, scope</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">feedback</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">verification</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">review</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">handoff</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">model</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">generates and reasons</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a missing surface looks like model weakness</text></svg>",
    "captionEn": "The model generates; the workbench makes work verifiable.",
    "captionKn": "ಮಾದರಿ ಉತ್ಪಾದಿಸುತ್ತದೆ; workbench ಕೆಲಸವನ್ನು ಪರಿಶೀಲಿಸಬಲ್ಲದಾಗಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The seven surfaces",
    "headingKn": "ಏಳು ಮೇಲ್ಮೈಗಳು",
    "headers": [
     "Surface",
     "Answers",
     "Without it"
    ],
    "rows": [
     [
      "Instructions",
      "what are the rules and the definition of done",
      "the agent guesses"
     ],
     [
      "State",
      "where is the task now",
      "work is repeated or forgotten"
     ],
     [
      "Scope",
      "what may change",
      "unrelated edits"
     ],
     [
      "Feedback",
      "what actually happened",
      "errors are ignored"
     ],
     [
      "Verification",
      "does the evidence meet the criteria",
      "unproven claims"
     ],
     [
      "Review",
      "did someone else check",
      "self-approval"
     ],
     [
      "Handoff",
      "what happens next",
      "the next session starts blind"
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
    "filename": "wb_1.py",
    "headingEn": "A real repository, a snapshot diff, a test runner and both pipelines",
    "headingKn": "ನಿಜ repository, snapshot ವ್ಯತ್ಯಾಸ, ಪರೀಕ್ಷಾ ಓಟಗಾರ ಮತ್ತು ಎರಡೂ pipelines",
    "descEn": "snapshot hashes every file, changed compares two snapshots, and run_tests runs unittest in a subprocess and counts the tests that executed. prompt_only edits files and claims completion; workbench edits, runs the tests, checks scope, sets the state and writes a handoff.",
    "descKn": "snapshot ಪ್ರತಿ ಫೈಲ್ hash ಮಾಡುತ್ತದೆ, changed ಎರಡು snapshots ಹೋಲಿಸುತ್ತದೆ, ಮತ್ತು run_tests subprocess ನಲ್ಲಿ unittest ಓಡಿಸಿ ಕಾರ್ಯಗತವಾದ ಪರೀಕ್ಷೆಗಳನ್ನು ಎಣಿಸುತ್ತದೆ. prompt_only ಫೈಲ್‌ಗಳನ್ನು ಸಂಪಾದಿಸಿ ಪೂರ್ಣಗೊಂಡಿದೆ ಎನ್ನುತ್ತದೆ; workbench ಸಂಪಾದಿಸಿ, ಪರೀಕ್ಷೆ ಓಡಿಸಿ, ವ್ಯಾಪ್ತಿ ಪರಿಶೀಲಿಸಿ, ಸ್ಥಿತಿ ಹೊಂದಿಸಿ handoff ಬರೆಯುತ್ತದೆ.",
    "code": "def put(root, name, text):\n    p = root / name\n    p.parent.mkdir(parents=True, exist_ok=True)\n    p.write_text(text, encoding=\"utf-8\")\n\n\ndef snapshot(root):\n    return {str(p.relative_to(root)).replace(\"\\\\\", \"/\"): hashlib.sha256(p.read_bytes()).hexdigest() for p in root.rglob(\"*\") if p.is_file() and \"__pycache__\" not in p.parts and p.suffix != \".pyc\"}\n\n\ndef changed(before, after):\n    return sorted(k for k in set(before) | set(after) if before.get(k) != after.get(k))\n\n\ndef run_tests(root):\n    p = subprocess.run([sys.executable, \"-B\", \"-m\", \"unittest\", \"-v\", \"test_app\"], cwd=root, capture_output=True, text=True, timeout=30)\n    return {\"command\": \"python -m unittest -v test_app\", \"exit_code\": p.returncode, \"ran\": p.stderr.count(\" ... \"), \"stderr_tail\": p.stderr.strip().splitlines()[-1]}\n\n\ndef baseline(root):\n    put(root, \"app.py\", APP_OLD)\n    put(root, \"test_app.py\", TEST)\n    put(root, \"README.md\", \"docs\\n\")\n    put(root, \"scripts/release.sh\", \"echo release\\n\")\n\n\ndef prompt_only(root, impl=APP_NEW, touch_release=True, run=False):\n    before = snapshot(root)\n    put(root, \"app.py\", impl)\n    if touch_release:\n        put(root, \"scripts/release.sh\", \"echo changed\\n\")\n    fb = run_tests(root) if run else None\n    return {\"claimed_complete\": True, \"feedback\": fb, \"changed\": changed(before, snapshot(root))}\n\n\ndef workbench(root, impl=APP_NEW):\n    before = snapshot(root)\n    state = {\"task\": \"signup-validation\", \"status\": \"in_progress\", \"next_action\": \"implement\"}\n    put(root, \"app.py\", impl)\n    fb = run_tests(root)\n    ch = changed(before, snapshot(root))\n    outside = [c for c in ch if c not in ALLOWED]\n    verified = fb[\"exit_code\"] == 0 and fb[\"ran\"] >= 3 and not outside\n    state.update(status=\"verified\" if verified else \"blocked\", next_action=\"request review\" if verified else \"fix failing checks\")\n    handoff = {\"summary\": \"password length validation\", \"changed_files\": ch, \"commands_run\": [fb[\"command\"]], \"failed_attempts\": [] if fb[\"exit_code\"] == 0 else [fb], \"open_risks\": [], \"next_action\": state[\"next_action\"], \"verdict_pointer\": \"verification.json\"}\n    return {\"claimed_complete\": verified, \"feedback\": fb, \"changed\": ch, \"outside\": outside, \"handoff\": handoff, \"state\": state}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "wb_1.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the prompt-only agent, the guided agent, the guided agent with a wrong implementation, an empty test suite and a failure-to-surface table.",
    "descKn": "main() prompt-only agent, ಮಾರ್ಗದರ್ಶಿತ agent, ತಪ್ಪು ಅನುಷ್ಠಾನದ ಮಾರ್ಗದರ್ಶಿತ agent, ಖಾಲಿ ಪರೀಕ್ಷಾ suite ಮತ್ತು ವೈಫಲ್ಯ-ಮೇಲ್ಮೈ ಕೋಷ್ಟಕ ಓಡಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Genuinely running: a prompt-only agent that edits the code and an extra file\")\n    with tempfile.TemporaryDirectory() as d:\n        root = Path(d)\n        baseline(root)\n        r = prompt_only(root)\n        print(\"claimed complete:\", r[\"claimed_complete\"], \"| tests run:\", r[\"feedback\"], \"| changed files:\", r[\"changed\"])\n        fb = run_tests(root)\n        print(\"the same repository checked afterwards:\", fb)\n    print(\"the agent said it was finished, ran nothing, and changed scripts/release.sh as well as app.py; the tests pass when somebody runs them, which is exactly why a claim and evidence are different things\")\n\n    section(\"2. Genuinely running: the guided run on a fresh copy of the same repository\")\n    with tempfile.TemporaryDirectory() as d:\n        root = Path(d)\n        baseline(root)\n        g = workbench(root)\n        print(\"state:\", g[\"state\"])\n        print(\"feedback:\", g[\"feedback\"])\n        print(\"changed:\", g[\"changed\"], \"| outside scope:\", g[\"outside\"])\n        print(\"handoff next_action:\", g[\"handoff\"][\"next_action\"])\n\n    section(\"3. Genuinely running: the guided run when the implementation is wrong (accepts 6-character passwords)\")\n    with tempfile.TemporaryDirectory() as d:\n        root = Path(d)\n        baseline(root)\n        g = workbench(root, impl=APP_WRONG)\n        print(\"claimed complete:\", g[\"claimed_complete\"], \"| state:\", g[\"state\"][\"status\"], \"| exit code:\", g[\"feedback\"][\"exit_code\"], \"| tail:\", g[\"feedback\"][\"stderr_tail\"])\n        print(\"failed attempts recorded in the handoff:\", len(g[\"handoff\"][\"failed_attempts\"]))\n    with tempfile.TemporaryDirectory() as d:\n        root = Path(d)\n        baseline(root)\n        r = prompt_only(root, impl=APP_WRONG, touch_release=False)\n        print(\"prompt-only on the same wrong implementation: claimed complete =\", r[\"claimed_complete\"], \"| evidence =\", r[\"feedback\"])\n    print(\"the boundary test (seven characters) caught the off-by-one that a happy-path test would have missed; the prompt-only run reported success without ever looking\")\n\n    section(\"4. Genuinely checking: a test file that exists is not a test that ran\")\n    with tempfile.TemporaryDirectory() as d:\n        root = Path(d)\n        baseline(root)\n        put(root, \"test_app.py\", \"import unittest\\n\\nclass Empty(unittest.TestCase):\\n    pass\\n\")\n        fb = run_tests(root)\n        print(\"empty suite:\", fb)\n        print(f\"{fb['ran']} tests executed and this Python reports exit code {fb['exit_code']} (NO TESTS RAN); older Python versions exit 0 for an empty suite, so a gate must not depend on the interpreter version and should require both a zero exit and a minimum number of tests that actually ran\")\n\n    section(\"5. Genuinely measuring: which of seven surfaces would have caught each failure in sections 1 to 4\")\n    table = [(\"claimed success with no tests run\", \"feedback, verification\"), (\"unrelated file changed (scripts/release.sh)\", \"scope\"), (\"off-by-one in the validator\", \"verification (boundary test)\"),\n             (\"zero tests executed\", \"verification\"), (\"agent forgets what remains after a restart\", \"state, handoff\"), (\"agent grades its own work\", \"review\"), (\"rules not applied\", \"instructions\")]\n    for failure, surfaces in table:\n        print(f\"{failure:46} -> {surfaces}\")\n    print(\"failures that look like model weakness are often a missing surface; the remedy depends on which surface is missing, not on a smarter model\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a prompt-only agent that edits the code and an extra file ---\nclaimed complete: True | tests run: None | changed files: ['app.py', 'scripts/release.sh']\nthe same repository checked afterwards: {'command': 'python -m unittest -v test_app', 'exit_code': 0, 'ran': 3, 'stderr_tail': 'OK'}\nthe agent said it was finished, ran nothing, and changed scripts/release.sh as well as app.py; the tests pass when somebody runs them, which is exactly why a claim and evidence are different things\n\n--- 2. Genuinely running: the guided run on a fresh copy of the same repository ---\nstate: {'task': 'signup-validation', 'status': 'verified', 'next_action': 'request review'}\nfeedback: {'command': 'python -m unittest -v test_app', 'exit_code': 0, 'ran': 3, 'stderr_tail': 'OK'}\nchanged: ['app.py'] | outside scope: []\nhandoff next_action: request review\n\n--- 3. Genuinely running: the guided run when the implementation is wrong (accepts 6-character passwords) ---\nclaimed complete: False | state: blocked | exit code: 1 | tail: FAILED (failures=1)\nfailed attempts recorded in the handoff: 1\nprompt-only on the same wrong implementation: claimed complete = True | evidence = None\nthe boundary test (seven characters) caught the off-by-one that a happy-path test would have missed; the prompt-only run reported success without ever looking\n\n--- 4. Genuinely checking: a test file that exists is not a test that ran ---\nempty suite: {'command': 'python -m unittest -v test_app', 'exit_code': 5, 'ran': 0, 'stderr_tail': 'NO TESTS RAN'}\n0 tests executed and this Python reports exit code 5 (NO TESTS RAN); older Python versions exit 0 for an empty suite, so a gate must not depend on the interpreter version and should require both a zero exit and a minimum number of tests that actually ran\n\n--- 5. Genuinely measuring: which of seven surfaces would have caught each failure in sections 1 to 4 ---\nclaimed success with no tests run              -> feedback, verification\nunrelated file changed (scripts/release.sh)    -> scope\noff-by-one in the validator                    -> verification (boundary test)\nzero tests executed                            -> verification\nagent forgets what remains after a restart     -> state, handoff\nagent grades its own work                      -> review\nrules not applied                              -> instructions\nfailures that look like model weakness are often a missing surface; the remedy depends on which surface is missing, not on a smarter model"
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
    "headingEn": "Genuinely Found: A Claim Is Not Evidence",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಹೇಳಿಕೆ ಸಾಕ್ಷ್ಯವಲ್ಲ",
    "bodyEn": "Section 1: the prompt-only run claimed completion, ran nothing and changed app.py and scripts/release.sh; when the tests were run afterwards they passed (3 ran, OK). Section 2: the guided run changed only app.py, ran 3 tests with exit code 0, set the state to verified and wrote the next action \"request review\". Section 3: with a wrong implementation that accepts 6-character passwords the guided run was blocked (exit code 1, FAILED (failures=1)) and recorded 1 failed attempt in its handoff, while the prompt-only run still claimed completion with no evidence.",
    "bodyKn": "ವಿಭಾಗ 1: prompt-only ಓಟ ಪೂರ್ಣಗೊಂಡಿದೆ ಎಂದು ಹೇಳಿ ಏನನ್ನೂ ಓಡಿಸದೆ app.py ಮತ್ತು scripts/release.sh ಬದಲಿಸಿತು; ನಂತರ ಪರೀಕ್ಷೆಗಳನ್ನು ಓಡಿಸಿದಾಗ ಅವು ಪಾಸ್ ಆದವು (3 ಓಡಿದವು, OK). ವಿಭಾಗ 2: ಮಾರ್ಗದರ್ಶಿತ ಓಟ app.py ಮಾತ್ರ ಬದಲಿಸಿ, exit code 0 ಜೊತೆ 3 ಪರೀಕ್ಷೆಗಳನ್ನು ಓಡಿಸಿ, ಸ್ಥಿತಿಯನ್ನು verified ಎಂದು ಹೊಂದಿಸಿ ಮುಂದಿನ ಕ್ರಿಯೆ \"request review\" ಬರೆಯಿತು. ವಿಭಾಗ 3: 6-ಅಕ್ಷರ ಪಾಸ್‌ವರ್ಡ್ ಸ್ವೀಕರಿಸುವ ತಪ್ಪು ಅನುಷ್ಠಾನದೊಂದಿಗೆ ಮಾರ್ಗದರ್ಶಿತ ಓಟ ತಡೆಯಲ್ಪಟ್ಟಿತು (exit code 1, FAILED (failures=1)) ಮತ್ತು handoff ನಲ್ಲಿ 1 ವಿಫಲ ಪ್ರಯತ್ನ ದಾಖಲಿಸಿತು, prompt-only ಓಟ ಇನ್ನೂ ಸಾಕ್ಷ್ಯ ಇಲ್ಲದೆ ಪೂರ್ಣಗೊಂಡಿದೆ ಎಂದಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Zero Tests Is Not Success",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಶೂನ್ಯ ಪರೀಕ್ಷೆಗಳು ಯಶಸ್ಸಲ್ಲ",
    "bodyEn": "Section 4: a test file with no tests ran 0 tests and this Python returned exit code 5 (NO TESTS RAN); older Python versions exit 0 for an empty suite, so a gate must not depend on the interpreter version and should require a zero exit and a minimum number of tests that actually ran. Section 5 maps each failure above to the surface that would have caught it: feedback and verification for the unrun tests, scope for release.sh, boundary tests for the off-by-one, state and handoff for a restart, review for self-grading and instructions for unapplied rules.",
    "bodyKn": "ವಿಭಾಗ 4: ಪರೀಕ್ಷೆಗಳಿಲ್ಲದ ಪರೀಕ್ಷಾ ಫೈಲ್ 0 ಪರೀಕ್ಷೆಗಳನ್ನು ಓಡಿಸಿತು ಮತ್ತು ಈ Python exit code 5 (NO TESTS RAN) ಮರಳಿಸಿತು; ಹಳೆಯ Python ಆವೃತ್ತಿಗಳು ಖಾಲಿ suite ಗೆ 0 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸುತ್ತವೆ, ಆದ್ದರಿಂದ gate ಇಂಟರ್ಪ್ರಿಟರ್ ಆವೃತ್ತಿಯನ್ನು ಅವಲಂಬಿಸಬಾರದು ಮತ್ತು ಶೂನ್ಯ exit ಹಾಗೂ ನಿಜವಾಗಿ ಓಡಿದ ಕನಿಷ್ಠ ಪರೀಕ್ಷಾ ಸಂಖ್ಯೆ ಬೇಕಾಗಬೇಕು. ವಿಭಾಗ 5 ಮೇಲಿನ ಪ್ರತಿ ವೈಫಲ್ಯವನ್ನು ಅದನ್ನು ಹಿಡಿಯುತ್ತಿದ್ದ ಮೇಲ್ಮೈಗೆ ನಕ್ಷೆ ಮಾಡುತ್ತದೆ: ಓಡದ ಪರೀಕ್ಷೆಗಳಿಗೆ ಪ್ರತಿಕ್ರಿಯೆ ಮತ್ತು ಪರಿಶೀಲನೆ, release.sh ಗೆ ವ್ಯಾಪ್ತಿ, off-by-one ಗೆ ಗಡಿ ಪರೀಕ್ಷೆಗಳು, ಮರುಪ್ರಾರಂಭಕ್ಕೆ ಸ್ಥಿತಿ ಮತ್ತು handoff, ಸ್ವಯಂ-ಮೌಲ್ಯಮಾಪನಕ್ಕೆ ಪರಿಶೀಲಕ ಮತ್ತು ಅನ್ವಯಿಸದ ನಿಯಮಗಳಿಗೆ ಸೂಚನೆಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Treating each failure as a missing surface tells you what to build next instead of waiting for a smarter model, and each surface can be tested on its own.",
    "bodyKn": "ಪ್ರತಿ ವೈಫಲ್ಯವನ್ನು ಕಾಣೆಯಾದ ಮೇಲ್ಮೈ ಎಂದು ಪರಿಗಣಿಸುವುದು ಚತುರ ಮಾದರಿಗಾಗಿ ಕಾಯುವ ಬದಲು ಮುಂದೆ ಏನು ನಿರ್ಮಿಸಬೇಕು ಎಂದು ತಿಳಿಸುತ್ತದೆ, ಮತ್ತು ಪ್ರತಿ ಮೇಲ್ಮೈಯನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಪರೀಕ್ಷಿಸಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"passing tests means the task is done.\" The prompt-only run was never tested and also changed an unrelated file, and an empty suite runs zero tests.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಪರೀಕ್ಷೆಗಳು ಪಾಸ್ ಆದರೆ ಕಾರ್ಯ ಮುಗಿಯಿತು.\" prompt-only ಓಟ ಎಂದೂ ಪರೀಕ್ಷಿಸಲ್ಪಡಲಿಲ್ಲ ಮತ್ತು ಸಂಬಂಧವಿಲ್ಲದ ಫೈಲ್ ಕೂಡ ಬದಲಿಸಿತು, ಮತ್ತು ಖಾಲಿ suite ಶೂನ್ಯ ಪರೀಕ್ಷೆ ಓಡಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Workbench: the environment around the model. Surface: a named, inspectable interface to a kind of work. Definition of done: checkable acceptance criteria. Feedback: the recorded result of an action. System of record: the authoritative source of task status.",
    "bodyKn": "Workbench: ಮಾದರಿಯ ಸುತ್ತಲಿನ ಪರಿಸರ. Surface: ಒಂದು ರೀತಿಯ ಕೆಲಸಕ್ಕೆ ಹೆಸರಿಸಿದ, ಪರೀಕ್ಷಿಸಬಹುದಾದ ಇಂಟರ್ಫೇಸ್. Definition of done: ಪರಿಶೀಲಿಸಬಹುದಾದ ಸ್ವೀಕಾರ ಮಾನದಂಡ. Feedback: ಕ್ರಿಯೆಯ ದಾಖಲಿತ ಫಲಿತಾಂಶ. System of record: ಕಾರ್ಯ ಸ್ಥಿತಿಯ ಅಧಿಕೃತ ಮೂಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The prompt-only run claimed completion, ran nothing and changed 2 files. 2) The guided run changed 1 file, ran 3 tests and wrote a next action. 3) A wrong implementation was blocked with exit code 1 and 1 recorded failure. 4) An empty suite ran 0 tests and returned exit code 5 on this Python. 5) Each failure maps to a missing surface.",
    "bodyKn": "1) prompt-only ಓಟ ಪೂರ್ಣಗೊಂಡಿದೆ ಎಂದು ಹೇಳಿ, ಏನನ್ನೂ ಓಡಿಸದೆ 2 ಫೈಲ್ ಬದಲಿಸಿತು. 2) ಮಾರ್ಗದರ್ಶಿತ ಓಟ 1 ಫೈಲ್ ಬದಲಿಸಿ, 3 ಪರೀಕ್ಷೆ ಓಡಿಸಿ ಮುಂದಿನ ಕ್ರಿಯೆ ಬರೆಯಿತು. 3) ತಪ್ಪು ಅನುಷ್ಠಾನ exit code 1 ಮತ್ತು 1 ದಾಖಲಿತ ವೈಫಲ್ಯದೊಂದಿಗೆ ತಡೆಯಲ್ಪಟ್ಟಿತು. 4) ಖಾಲಿ suite 0 ಪರೀಕ್ಷೆ ಓಡಿಸಿ ಈ Python ನಲ್ಲಿ exit code 5 ಮರಳಿಸಿತು. 5) ಪ್ರತಿ ವೈಫಲ್ಯ ಕಾಣೆಯಾದ ಮೇಲ್ಮೈಗೆ ನಕ್ಷೆಯಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which files did the prompt-only run change?",
      "qKn": "prompt-only ಓಟ ಯಾವ ಫೈಲ್‌ಗಳನ್ನು ಬದಲಿಸಿತು?",
      "opts": [
       "Only app.py",
       "app.py and scripts/release.sh",
       "Only the tests",
       "Nothing"
      ],
      "optsKn": [
       "app.py ಮಾತ್ರ",
       "app.py ಮತ್ತು scripts/release.sh",
       "ಪರೀಕ್ಷೆಗಳು ಮಾತ್ರ",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "What happened to the guided run when the implementation accepted 6-character passwords?",
      "qKn": "ಅನುಷ್ಠಾನ 6-ಅಕ್ಷರ ಪಾಸ್‌ವರ್ಡ್ ಸ್ವೀಕರಿಸಿದಾಗ ಮಾರ್ಗದರ್ಶಿತ ಓಟಕ್ಕೆ ಏನಾಯಿತು?",
      "opts": [
       "It claimed completion",
       "It was blocked with exit code 1",
       "It skipped the tests",
       "It passed"
      ],
      "optsKn": [
       "ಅದು ಪೂರ್ಣಗೊಂಡಿದೆ ಎಂದಿತು",
       "Exit code 1 ಜೊತೆ ತಡೆಯಲ್ಪಟ್ಟಿತು",
       "ಪರೀಕ್ಷೆಗಳನ್ನು ಬಿಟ್ಟಿತು",
       "ಪಾಸ್ ಆಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What did an empty test suite return on this Python?",
      "qKn": "ಈ Python ನಲ್ಲಿ ಖಾಲಿ ಪರೀಕ್ಷಾ suite ಏನು ಮರಳಿಸಿತು?",
      "opts": [
       "Exit code 0 with 3 tests",
       "Exit code 5 with 0 tests",
       "Exit code 1 with 1 test",
       "A crash"
      ],
      "optsKn": [
       "3 ಪರೀಕ್ಷೆಗಳೊಂದಿಗೆ exit code 0",
       "0 ಪರೀಕ್ಷೆಗಳೊಂದಿಗೆ exit code 5",
       "1 ಪರೀಕ್ಷೆಯೊಂದಿಗೆ exit code 1",
       "ಕ್ರ್ಯಾಶ್"
      ],
      "correct": 1
     },
     {
      "q": "Which surface would have caught the unrelated change to release.sh?",
      "qKn": "release.sh ಗೆ ಸಂಬಂಧವಿಲ್ಲದ ಬದಲಾವಣೆಯನ್ನು ಯಾವ ಮೇಲ್ಮೈ ಹಿಡಿಯುತ್ತಿತ್ತು?",
      "opts": [
       "Scope",
       "Handoff",
       "Review only",
       "State"
      ],
      "optsKn": [
       "ವ್ಯಾಪ್ತಿ",
       "Handoff",
       "ಪರಿಶೀಲಕ ಮಾತ್ರ",
       "ಸ್ಥಿತಿ"
      ],
      "correct": 0
     },
     {
      "q": "What should a verification gate require besides a zero exit code?",
      "qKn": "ಶೂನ್ಯ exit code ಜೊತೆಗೆ verification gate ಏನು ಕೇಳಬೇಕು?",
      "opts": [
       "A minimum number of tests that actually ran",
       "A longer summary",
       "A bigger model",
       "Nothing"
      ],
      "optsKn": [
       "ನಿಜವಾಗಿ ಓಡಿದ ಕನಿಷ್ಠ ಪರೀಕ್ಷಾ ಸಂಖ್ಯೆ",
       "ಉದ್ದ ಸಾರಾಂಶ",
       "ದೊಡ್ಡ ಮಾದರಿ",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
