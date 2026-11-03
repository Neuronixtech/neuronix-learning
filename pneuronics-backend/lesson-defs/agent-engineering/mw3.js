module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b32156b",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "The Minimal Agent Workbench (Part 3 of 3) — Dispatcher, Verifier and Mutation Tests",
 "titleKn": "ಕನಿಷ್ಠ Agent Workbench (ಭಾಗ 3 / 3) — Dispatcher, Verifier ಮತ್ತು Mutation ಪರೀಕ್ಷೆಗಳು",
 "desc": "Write a request dispatcher and an independent verifier, run two tasks end to end, and test the workbench with a real unittest suite that must fail two deliberate mutants.",
 "descKn": "ವಿನಂತಿ dispatcher ಮತ್ತು ಸ್ವತಂತ್ರ verifier ಬರೆಯಿರಿ, ಎರಡು ಕಾರ್ಯಗಳನ್ನು ಕೊನೆಯಿಂದ ಕೊನೆಗೆ ಓಡಿಸಿ ಮತ್ತು ಎರಡು ಉದ್ದೇಶಪೂರ್ವಕ ಮ್ಯೂಟೆಂಟ್‌ಗಳನ್ನು ವಿಫಲಗೊಳಿಸಬೇಕಾದ ನಿಜ unittest suite ನೊಂದಿಗೆ workbench ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Treat model requests as untrusted.",
  "Verify by reading the artifact.",
  "Run tests in a subprocess.",
  "Use mutation tests on controls.",
  "Know what the suite does not cover."
 ],
 "objectivesKn": [
  "ಮಾದರಿ ವಿನಂತಿಗಳನ್ನು ವಿಶ್ವಾಸಾರ್ಹವಲ್ಲದ್ದು ಎಂದು ಪರಿಗಣಿಸಿ.",
  "ಕಲಾಕೃತಿ ಓದಿ ಪರಿಶೀಲಿಸಿ.",
  "Subprocess ನಲ್ಲಿ ಪರೀಕ್ಷೆ ಓಡಿಸಿ.",
  "ನಿಯಂತ್ರಣಗಳ ಮೇಲೆ mutation ಪರೀಕ್ಷೆ ಬಳಸಿ.",
  "Suite ಯಾವುದನ್ನು ಆವರಿಸುವುದಿಲ್ಲ ಎಂದು ತಿಳಿಯಿರಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "The Minimal Agent Workbench (Part 3 of 3)",
    "textKn": "ಕನಿಷ್ಠ Agent Workbench (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: a request dispatcher, an independent verifier, two tasks end to end and a real unittest suite with mutations. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the minimal agent workbench (AGENTS.md router, agent_state.json and task_board.json), not the real software, and the agent is a scripted function working on real temporary files and no language model is involved, so no real LLM behaviour is measured. The pasted lesson said the original code/main.py was not supplied, so the lab is our own implementation of the behaviour it describes. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ವಿನಂತಿ dispatcher, ಸ್ವತಂತ್ರ verifier, ಎರಡು ಕಾರ್ಯಗಳು ಕೊನೆಯಿಂದ ಕೊನೆಗೆ ಮತ್ತು mutations ಜೊತೆ ನಿಜ unittest suite. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಕನಿಷ್ಠ agent workbench (AGENTS.md router, agent_state.json ಮತ್ತು task_board.json) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು agent ನಿಜ ತಾತ್ಕಾಲಿಕ ಫೈಲ್‌ಗಳ ಮೇಲೆ ಕೆಲಸ ಮಾಡುವ ಸ್ಕ್ರಿಪ್ಟ್ ಫಂಕ್ಷನ್ ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ಮೂಲ code/main.py ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Adding a Model Safely",
    "textKn": "ಮಾದರಿಯನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಸೇರಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Model Proposes, the Runtime Decides",
    "headingKn": "ಮಾದರಿ ಪ್ರಸ್ತಾಪಿಸುತ್ತದೆ, runtime ನಿರ್ಧರಿಸುತ್ತದೆ",
    "bodyEn": "Once a model proposes actions, the runtime must treat each request as untrusted input. This part writes a dispatcher that accepts only a write_file request with string arguments and an allowed path, a verifier that reads the file back, two tasks run through them, and a real unittest suite for the workbench code that is run in a subprocess. It then breaks the code on purpose twice and checks that the suite notices.",
    "bodyKn": "ಮಾದರಿ ಕ್ರಿಯೆಗಳನ್ನು ಪ್ರಸ್ತಾಪಿಸಿದ ನಂತರ ಪ್ರತಿ ವಿನಂತಿಯನ್ನು runtime ವಿಶ್ವಾಸಾರ್ಹವಲ್ಲದ ಇನ್‌ಪುಟ್ ಎಂದು ಪರಿಗಣಿಸಬೇಕು. ಈ ಭಾಗ ಸ್ಟ್ರಿಂಗ್ ಆರ್ಗ್ಯುಮೆಂಟ್‌ಗಳು ಮತ್ತು ಅನುಮತಿಸಿದ path ಇರುವ write_file ವಿನಂತಿ ಮಾತ್ರ ಸ್ವೀಕರಿಸುವ dispatcher, ಫೈಲ್ ಮತ್ತೆ ಓದುವ verifier, ಅವುಗಳ ಮೂಲಕ ಓಡಿಸಿದ ಎರಡು ಕಾರ್ಯಗಳು ಮತ್ತು subprocess ನಲ್ಲಿ ಓಡಿಸುವ workbench ಕೋಡ್‌ಗೆ ನಿಜ unittest suite ಬರೆಯುತ್ತದೆ. ನಂತರ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಕೋಡ್ ಎರಡು ಬಾರಿ ಮುರಿದು suite ಗಮನಿಸುತ್ತದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Propose, Dispatch, Verify, Test",
    "headingKn": "ಪ್ರಸ್ತಾಪ, Dispatch, ಪರಿಶೀಲನೆ, ಪರೀಕ್ಷೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Test the workbench</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">dispatcher</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">model proposes</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">verifier</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">reads the file back</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">mutation</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">break a control</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">unittest</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">must fail the mutant</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a test that cannot fail proves nothing</text></svg>",
    "captionEn": "A test is only useful if it can fail.",
    "captionKn": "ಪರೀಕ್ಷೆ ವಿಫಲವಾಗಬಲ್ಲದಾದರೆ ಮಾತ್ರ ಉಪಯುಕ್ತ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "What the dispatcher refuses",
    "headingKn": "Dispatcher ಯಾವುದನ್ನು ತಿರಸ್ಕರಿಸುತ್ತದೆ",
    "headers": [
     "Request",
     "Result",
     "Reason"
    ],
    "rows": [
     [
      "unknown tool (shell)",
      "refused",
      "only write_file is supported"
     ],
     [
      "path ../outside.txt",
      "refused",
      "escapes the workbench"
     ],
     [
      "non-string path or content",
      "refused",
      "argument types are checked"
     ],
     [
      "not a dictionary",
      "refused",
      "malformed request"
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
    "filename": "mw_3.py",
    "headingEn": "The workbench module under test and its unittest suite",
    "headingKn": "ಪರೀಕ್ಷೆಯಲ್ಲಿರುವ workbench ಮಾಡ್ಯೂಲ್ ಮತ್ತು ಅದರ unittest suite",
    "descEn": "WORKBENCH holds resolve, dispatch and verify. TESTS is a unittest file with eight tests: an allowed write, a disallowed name, traversal, an unknown tool, wrong argument types, and the verifier on a missing goal, a missing file and a correct file. run_suite runs it with subprocess.",
    "descKn": "WORKBENCH resolve, dispatch ಮತ್ತು verify ಹೊಂದಿದೆ. TESTS ಎಂಟು ಪರೀಕ್ಷೆಗಳ unittest ಫೈಲ್: ಅನುಮತಿಸಿದ ಬರಹ, ಅನುಮತಿ ಇಲ್ಲದ ಹೆಸರು, traversal, ಅಜ್ಞಾತ tool, ತಪ್ಪು ಆರ್ಗ್ಯುಮೆಂಟ್ ಪ್ರಕಾರಗಳು, ಮತ್ತು ಕಾಣೆಯಾದ ಗುರಿ, ಕಾಣೆಯಾದ ಫೈಲ್ ಮತ್ತು ಸರಿಯಾದ ಫೈಲ್ ಮೇಲೆ verifier. run_suite ಅದನ್ನು subprocess ನೊಂದಿಗೆ ಓಡಿಸುತ್ತದೆ.",
    "code": "WORKBENCH = '''\nimport json\nfrom pathlib import Path\n\ndef resolve(root, name, allowed):\n    if name not in allowed:\n        raise ValueError(\"not allowed\")\n    root = Path(root).resolve()\n    t = (root / name).resolve()\n    if t == root or root not in t.parents:\n        raise ValueError(\"escapes\")\n    return t\n\ndef dispatch(request, root, task):\n    if not isinstance(request, dict) or request.get(\"tool\") != \"write_file\":\n        raise ValueError(\"unsupported tool\")\n    path, content = request.get(\"path\"), request.get(\"content\")\n    if not isinstance(path, str) or not isinstance(content, str):\n        raise ValueError(\"bad arguments\")\n    target = resolve(root, path, task[\"allowed_files\"])\n    target.write_text(content, encoding=\"utf-8\")\n    return {\"written\": path}\n\ndef verify(task, root):\n    target = Path(root) / task[\"allowed_files\"][0]\n    if not target.is_file():\n        return False, \"missing file\"\n    text = target.read_text(encoding=\"utf-8\")\n    missing = [c for c in task[\"required_text\"] if c not in text]\n    return (not missing), (\"ok\" if not missing else f\"missing {missing}\")\n'''\n\nTESTS = '''\nimport tempfile, unittest\nfrom pathlib import Path\nimport workbench as wb\n\nTASK = {\"allowed_files\": [\"notes.txt\"], \"required_text\": [\"Create a project note\"]}\n\nclass T(unittest.TestCase):\n    def test_allowed_write(self):\n        with tempfile.TemporaryDirectory() as d:\n            self.assertEqual(wb.dispatch({\"tool\": \"write_file\", \"path\": \"notes.txt\", \"content\": \"x\"}, d, TASK), {\"written\": \"notes.txt\"})\n    def test_disallowed_filename(self):\n        with tempfile.TemporaryDirectory() as d:\n            with self.assertRaises(ValueError):\n                wb.dispatch({\"tool\": \"write_file\", \"path\": \"secret.txt\", \"content\": \"x\"}, d, TASK)\n    def test_traversal(self):\n        t = dict(TASK, allowed_files=[\"../x.txt\"])\n        with tempfile.TemporaryDirectory() as d:\n            with self.assertRaises(ValueError):\n                wb.dispatch({\"tool\": \"write_file\", \"path\": \"../x.txt\", \"content\": \"x\"}, d, t)\n    def test_unknown_tool(self):\n        with tempfile.TemporaryDirectory() as d:\n            with self.assertRaises(ValueError):\n                wb.dispatch({\"tool\": \"delete_file\", \"path\": \"notes.txt\"}, d, TASK)\n    def test_bad_argument_types(self):\n        with tempfile.TemporaryDirectory() as d:\n            with self.assertRaises(ValueError):\n                wb.dispatch({\"tool\": \"write_file\", \"path\": \"notes.txt\", \"content\": 5}, d, TASK)\n    def test_verify_fails_without_goal(self):\n        with tempfile.TemporaryDirectory() as d:\n            (Path(d) / \"notes.txt\").write_text(\"other\", encoding=\"utf-8\")\n            self.assertFalse(wb.verify(TASK, d)[0])\n    def test_verify_fails_on_missing_file(self):\n        with tempfile.TemporaryDirectory() as d:\n            self.assertFalse(wb.verify(TASK, d)[0])\n    def test_verify_passes_with_goal(self):\n        with tempfile.TemporaryDirectory() as d:\n            (Path(d) / \"notes.txt\").write_text(\"Create a project note\", encoding=\"utf-8\")\n            self.assertTrue(wb.verify(TASK, d)[0])\n\nif __name__ == \"__main__\":\n    unittest.main()\n'''"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "mw_3.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the suite on the real code, on a copy with the containment check removed and on a copy with a verifier that always says done, then runs two tasks and six model-style requests.",
    "descKn": "main() suite ಅನ್ನು ನಿಜ ಕೋಡ್ ಮೇಲೆ, ಒಳಗೊಳ್ಳುವ ಪರಿಶೀಲನೆ ತೆಗೆದ ಪ್ರತಿಯ ಮೇಲೆ ಮತ್ತು ಯಾವಾಗಲೂ done ಎನ್ನುವ verifier ಇರುವ ಪ್ರತಿಯ ಮೇಲೆ ಓಡಿಸಿ, ನಂತರ ಎರಡು ಕಾರ್ಯಗಳು ಮತ್ತು ಆರು ಮಾದರಿ-ಶೈಲಿ ವಿನಂತಿಗಳನ್ನು ಓಡಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    with tempfile.TemporaryDirectory() as d:\n        base = Path(d)\n        (base / \"workbench.py\").write_text(WORKBENCH, encoding=\"utf-8\")\n        (base / \"test_wb.py\").write_text(TESTS, encoding=\"utf-8\")\n\n        section(\"1. Genuinely running: the workbench's own unittest suite (real subprocess)\")\n        code, ok, tail, bad = run_suite(base)\n        print(f\"exit code {code}, {ok} tests passed, last line: {tail}\")\n        print(\"the suite covers the allowlist, traversal, an unknown tool, wrong argument types and the verifier on three file states; it does not cover symlinks, concurrency or crash recovery\")\n\n        section(\"2. Genuinely checking: a mutation the suite must catch (the containment check removed)\")\n        mutated = WORKBENCH.replace('    if t == root or root not in t.parents:\\n        raise ValueError(\"escapes\")\\n', \"\")\n        (base / \"workbench.py\").write_text(mutated, encoding=\"utf-8\")\n        code, ok, tail, bad = run_suite(base)\n        print(f\"exit code {code}, {ok} tests passed, last line: {tail}\")\n        print(\"failing tests:\", bad)\n        (base / \"workbench.py\").write_text(WORKBENCH, encoding=\"utf-8\")\n\n        section(\"3. Genuinely checking: a second mutation, the verifier that always says done\")\n        mutated2 = WORKBENCH.replace('    return (not missing), (\"ok\" if not missing else f\"missing {missing}\")', '    return True, \"ok\"')\n        (base / \"workbench.py\").write_text(mutated2, encoding=\"utf-8\")\n        code, ok, tail, bad = run_suite(base)\n        print(f\"exit code {code}, {ok} tests passed, last line: {tail}\")\n        print(\"failing tests:\", bad)\n        (base / \"workbench.py\").write_text(WORKBENCH, encoding=\"utf-8\")\n        print(\"deliberately breaking each control and watching a test fail is the evidence that the tests can detect the defect; a suite that passes both the original and the mutant would be proving nothing\")\n\n        section(\"4. Genuinely running: two tasks end to end through a model-style request and an independent verifier\")\n        sys.path.insert(0, str(base))\n        import importlib\n        wb = importlib.import_module(\"workbench\")\n        work = base / \"work\"\n        work.mkdir()\n        tasks = [{\"id\": \"TASK-001\", \"allowed_files\": [\"notes.txt\"], \"required_text\": [\"Create a project note\"], \"status\": \"todo\"},\n                 {\"id\": \"TASK-002\", \"allowed_files\": [\"notes.txt\"], \"required_text\": [\"Create a project note\", \"Verification\"], \"status\": \"todo\"}]\n        proposals = {\"TASK-001\": \"Project notes\\nCreate a project note\\n\", \"TASK-002\": \"Project notes\\nCreate a project note\\n\"}  # the second proposal forgets the verification section\n        for t in tasks:\n            t[\"status\"] = \"in_progress\"\n            wb.dispatch({\"tool\": \"write_file\", \"path\": \"notes.txt\", \"content\": proposals[t[\"id\"]]}, work, t)\n            ok, why = wb.verify(t, work)\n            t[\"status\"] = \"done\" if ok else \"in_progress\"\n            print(f\"{t['id']}: write returned fine, verifier says {ok} ({why}) -> status {t['status']}\")\n        print(\"TASK-002 wrote a file without error and stayed in_progress because the verifier checked the content against its own criteria, not the fact that the write succeeded\")\n\n        section(\"5. Genuinely checking: requests a model might produce that the dispatcher must refuse\")\n        t = tasks[0]\n        for req in ({\"tool\": \"write_file\", \"path\": \"notes.txt\", \"content\": \"ok\"}, {\"tool\": \"write_file\", \"path\": \"../outside.txt\", \"content\": \"x\"}, {\"tool\": \"shell\", \"cmd\": \"rm -rf /\"}, {\"tool\": \"write_file\", \"path\": [\"notes.txt\"], \"content\": \"x\"}, \"write notes.txt please\", None):\n            try:\n                print(f\"{str(req)[:62]:64} -> {wb.dispatch(req, work, t if req != {'tool': 'write_file', 'path': '../outside.txt', 'content': 'x'} else dict(t, allowed_files=['../outside.txt']))}\")\n            except ValueError as e:\n                print(f\"{str(req)[:62]:64} -> refused: {e}\")\n        print(\"the model proposes and the dispatcher decides: unknown tools, wrong types, escaping paths and non-dictionary requests are all refused before anything is written; this dispatcher has no approval step, rate limit or audit log\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the workbench's own unittest suite (real subprocess) ---\nexit code 0, 8 tests passed, last line: OK\nthe suite covers the allowlist, traversal, an unknown tool, wrong argument types and the verifier on three file states; it does not cover symlinks, concurrency or crash recovery\n\n--- 2. Genuinely checking: a mutation the suite must catch (the containment check removed) ---\nexit code 1, 7 tests passed, last line: FAILED (failures=1)\nfailing tests: ['FAIL: test_traversal (test_wb.T.test_traversal)']\n\n--- 3. Genuinely checking: a second mutation, the verifier that always says done ---\nexit code 1, 7 tests passed, last line: FAILED (failures=1)\nfailing tests: ['FAIL: test_verify_fails_without_goal (test_wb.T.test_verify_fails_without_goal)']\ndeliberately breaking each control and watching a test fail is the evidence that the tests can detect the defect; a suite that passes both the original and the mutant would be proving nothing\n\n--- 4. Genuinely running: two tasks end to end through a model-style request and an independent verifier ---\nTASK-001: write returned fine, verifier says True (ok) -> status done\nTASK-002: write returned fine, verifier says False (missing ['Verification']) -> status in_progress\nTASK-002 wrote a file without error and stayed in_progress because the verifier checked the content against its own criteria, not the fact that the write succeeded\n\n--- 5. Genuinely checking: requests a model might produce that the dispatcher must refuse ---\n{'tool': 'write_file', 'path': 'notes.txt', 'content': 'ok'}     -> {'written': 'notes.txt'}\n{'tool': 'write_file', 'path': '../outside.txt', 'content': 'x   -> refused: escapes\n{'tool': 'shell', 'cmd': 'rm -rf /'}                             -> refused: unsupported tool\n{'tool': 'write_file', 'path': ['notes.txt'], 'content': 'x'}    -> refused: bad arguments\nwrite notes.txt please                                           -> refused: unsupported tool\nNone                                                             -> refused: unsupported tool\nthe model proposes and the dispatcher decides: unknown tools, wrong types, escaping paths and non-dictionary requests are all refused before anything is written; this dispatcher has no approval step, rate limit or audit log"
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
    "headingEn": "Genuinely Found: The Suite Must Fail the Mutants",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Suite ಮ್ಯೂಟೆಂಟ್‌ಗಳನ್ನು ವಿಫಲಗೊಳಿಸಬೇಕು",
    "bodyEn": "Section 1: the real suite ran 8 tests and passed (exit code 0). Section 2: with the containment check removed, the suite failed with exit code 1, 7 tests passing and test_traversal failing. Section 3: with a verifier that always returns done, the suite failed with exit code 1 and test_verify_fails_without_goal failing. The suite does not cover symlinks, concurrency or crash recovery.",
    "bodyKn": "ವಿಭಾಗ 1: ನಿಜ suite 8 ಪರೀಕ್ಷೆಗಳನ್ನು ಓಡಿಸಿ ಪಾಸ್ ಆಯಿತು (exit code 0). ವಿಭಾಗ 2: ಒಳಗೊಳ್ಳುವ ಪರಿಶೀಲನೆ ತೆಗೆದಾಗ suite exit code 1 ಜೊತೆ ವಿಫಲವಾಯಿತು, 7 ಪರೀಕ್ಷೆಗಳು ಪಾಸ್ ಮತ್ತು test_traversal ವಿಫಲ. ವಿಭಾಗ 3: ಯಾವಾಗಲೂ done ಮರಳಿಸುವ verifier ಜೊತೆ suite exit code 1 ಮತ್ತು test_verify_fails_without_goal ವಿಫಲದೊಂದಿಗೆ ವಿಫಲವಾಯಿತು. Suite symlinks, concurrency ಅಥವಾ ಕ್ರ್ಯಾಶ್ ಚೇತರಿಕೆ ಆವರಿಸುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Successful Write Is Not a Finished Task",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಯಶಸ್ವಿ ಬರಹ ಮುಗಿದ ಕಾರ್ಯವಲ್ಲ",
    "bodyEn": "Section 4: TASK-001 wrote the file and the verifier said True, so it became done; TASK-002 also wrote the file without error but the verifier reported missing ['Verification'], so it stayed in_progress. Section 5: a correct write_file request succeeded, while \"../outside.txt\" was refused as escaping, the shell tool as unsupported, a list as a path as bad arguments, and a plain string and None as unsupported; this dispatcher has no approval step, rate limit or audit log.",
    "bodyKn": "ವಿಭಾಗ 4: TASK-001 ಫೈಲ್ ಬರೆದು verifier True ಎಂದಿತು, ಆದ್ದರಿಂದ done ಆಯಿತು; TASK-002 ಕೂಡ ದೋಷವಿಲ್ಲದೆ ಫೈಲ್ ಬರೆಯಿತು ಆದರೆ verifier missing ['Verification'] ವರದಿ ಮಾಡಿತು, ಆದ್ದರಿಂದ in_progress ಆಗಿಯೇ ಉಳಿಯಿತು. ವಿಭಾಗ 5: ಸರಿಯಾದ write_file ವಿನಂತಿ ಯಶಸ್ವಿಯಾಯಿತು, \"../outside.txt\" ಹೊರಹೋಗುತ್ತದೆ ಎಂದು, shell tool ಬೆಂಬಲವಿಲ್ಲ ಎಂದು, path ಆಗಿ ಪಟ್ಟಿ ತಪ್ಪು ಆರ್ಗ್ಯುಮೆಂಟ್ ಎಂದು, ಸರಳ ಸ್ಟ್ರಿಂಗ್ ಮತ್ತು None ಬೆಂಬಲವಿಲ್ಲ ಎಂದು ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟವು; ಈ dispatcher ಗೆ ಅನುಮೋದನೆ ಹಂತ, ದರ ಮಿತಿ ಅಥವಾ audit ಲಾಗ್ ಇಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A model can be swapped, but the dispatcher, the verifier and their tests stay, and mutation testing is the quickest way to learn whether those tests would notice a regression.",
    "bodyKn": "ಮಾದರಿ ಬದಲಾಯಿಸಬಹುದು, ಆದರೆ dispatcher, verifier ಮತ್ತು ಅವುಗಳ ಪರೀಕ್ಷೆಗಳು ಉಳಿಯುತ್ತವೆ, ಮತ್ತು mutation ಪರೀಕ್ಷೆ ಆ ಪರೀಕ್ಷೆಗಳು ಹಿಂಜರಿತ ಗಮನಿಸುತ್ತವೆಯೇ ಎಂದು ತಿಳಿಯುವ ವೇಗದ ಮಾರ್ಗ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the write succeeded, so the task is done.\" TASK-002 wrote without error and still failed its criteria.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಬರಹ ಯಶಸ್ವಿಯಾಯಿತು, ಆದ್ದರಿಂದ ಕಾರ್ಯ ಮುಗಿಯಿತು.\" TASK-002 ದೋಷವಿಲ್ಲದೆ ಬರೆದರೂ ತನ್ನ ಮಾನದಂಡದಲ್ಲಿ ವಿಫಲವಾಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Dispatcher: the code that validates and runs a proposed action. Independent verifier: a check that does not trust the agent's claim. Mutation test: breaking a control on purpose. Untrusted input: any model-generated request. Subprocess: a separate process used to run tests honestly.",
    "bodyKn": "Dispatcher: ಪ್ರಸ್ತಾಪಿತ ಕ್ರಿಯೆಯನ್ನು ಮಾನ್ಯಗೊಳಿಸಿ ಓಡಿಸುವ ಕೋಡ್. Independent verifier: agent ನ ಹೇಳಿಕೆಯನ್ನು ನಂಬದ ಪರಿಶೀಲನೆ. Mutation test: ನಿಯಂತ್ರಣವನ್ನು ಉದ್ದೇಶಪೂರ್ವಕ ಮುರಿಯುವುದು. Untrusted input: ಮಾದರಿ-ಉತ್ಪಾದಿತ ಯಾವುದೇ ವಿನಂತಿ. Subprocess: ಪರೀಕ್ಷೆಗಳನ್ನು ಪ್ರಾಮಾಣಿಕವಾಗಿ ಓಡಿಸಲು ಬಳಸುವ ಪ್ರತ್ಯೇಕ ಪ್ರಕ್ರಿಯೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The suite ran 8 tests and passed. 2) Removing the containment check made test_traversal fail. 3) A verifier that always says done made test_verify_fails_without_goal fail. 4) TASK-002 stayed in_progress because its criteria were not met. 5) Unknown tools, wrong types and escaping paths were refused.",
    "bodyKn": "1) Suite 8 ಪರೀಕ್ಷೆಗಳನ್ನು ಓಡಿಸಿ ಪಾಸ್ ಆಯಿತು. 2) ಒಳಗೊಳ್ಳುವ ಪರಿಶೀಲನೆ ತೆಗೆದದ್ದು test_traversal ವಿಫಲಗೊಳಿಸಿತು. 3) ಯಾವಾಗಲೂ done ಎನ್ನುವ verifier test_verify_fails_without_goal ವಿಫಲಗೊಳಿಸಿತು. 4) ಮಾನದಂಡ ಪೂರೈಸದ್ದರಿಂದ TASK-002 in_progress ಆಗಿ ಉಳಿಯಿತು. 5) ಅಜ್ಞಾತ tools, ತಪ್ಪು ಪ್ರಕಾರಗಳು ಮತ್ತು ಹೊರಹೋಗುವ paths ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟವು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many tests did the real suite run and what was its exit code?",
      "qKn": "ನಿಜ suite ಎಷ್ಟು ಪರೀಕ್ಷೆ ಓಡಿಸಿತು ಮತ್ತು ಅದರ exit code ಏನು?",
      "opts": [
       "8 tests, exit code 0",
       "7 tests, exit code 1",
       "5 tests, exit code 0",
       "8 tests, exit code 1"
      ],
      "optsKn": [
       "8 ಪರೀಕ್ಷೆ, exit code 0",
       "7 ಪರೀಕ್ಷೆ, exit code 1",
       "5 ಪರೀಕ್ಷೆ, exit code 0",
       "8 ಪರೀಕ್ಷೆ, exit code 1"
      ],
      "correct": 0
     },
     {
      "q": "Which test failed when the containment check was removed?",
      "qKn": "ಒಳಗೊಳ್ಳುವ ಪರಿಶೀಲನೆ ತೆಗೆದಾಗ ಯಾವ ಪರೀಕ್ಷೆ ವಿಫಲವಾಯಿತು?",
      "opts": [
       "test_traversal",
       "test_unknown_tool",
       "test_allowed_write",
       "None"
      ],
      "optsKn": [
       "test_traversal",
       "test_unknown_tool",
       "test_allowed_write",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Why did TASK-002 stay in_progress?",
      "qKn": "TASK-002 ಏಕೆ in_progress ಆಗಿ ಉಳಿಯಿತು?",
      "opts": [
       "The write failed",
       "The verifier reported the Verification text missing",
       "It crashed",
       "It was blocked"
      ],
      "optsKn": [
       "ಬರಹ ವಿಫಲವಾಯಿತು",
       "Verifier Verification ಪಠ್ಯ ಕಾಣೆಯಾಗಿದೆ ಎಂದಿತು",
       "ಅದು ಕ್ರ್ಯಾಶ್ ಆಯಿತು",
       "ಅದು ತಡೆಯಲ್ಪಟ್ಟಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What happened to the shell tool request?",
      "qKn": "shell tool ವಿನಂತಿಗೆ ಏನಾಯಿತು?",
      "opts": [
       "It ran",
       "It was refused as unsupported",
       "It was approved",
       "It crashed"
      ],
      "optsKn": [
       "ಅದು ಓಡಿತು",
       "ಬೆಂಬಲವಿಲ್ಲ ಎಂದು ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತು",
       "ಅನುಮೋದನೆ ಆಯಿತು",
       "ಕ್ರ್ಯಾಶ್ ಆಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What is a mutation test for?",
      "qKn": "Mutation ಪರೀಕ್ಷೆ ಯಾವುದಕ್ಕೆ?",
      "opts": [
       "To check that the tests would notice a defect",
       "To speed up code",
       "To remove tests",
       "To train a model"
      ],
      "optsKn": [
       "ಪರೀಕ್ಷೆಗಳು ದೋಷ ಗಮನಿಸುತ್ತವೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಲು",
       "ಕೋಡ್ ವೇಗಗೊಳಿಸಲು",
       "ಪರೀಕ್ಷೆಗಳನ್ನು ತೆಗೆಯಲು",
       "ಮಾದರಿ ತರಬೇತಿಗೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
