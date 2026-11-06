module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6366020ed05b321586",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "The Workbench on a Real Repo (Part 1 of 3) — The Fixture, the Fix and the Tests",
 "titleKn": "ನಿಜ Repo ಮೇಲೆ Workbench (ಭಾಗ 1 / 3) — Fixture, ಸರಿಪಡಿಕೆ ಮತ್ತು ಪರೀಕ್ಷೆಗಳು",
 "desc": "Build a signup fixture, fix it, run real tests and an independent probe and use mutants to see which tests catch which defects.",
 "descKn": "signup fixture ನಿರ್ಮಿಸಿ, ಸರಿಪಡಿಸಿ, ನಿಜ ಪರೀಕ್ಷೆಗಳು ಮತ್ತು ಸ್ವತಂತ್ರ probe ಓಡಿಸಿ ಮತ್ತು ಯಾವ ಪರೀಕ್ಷೆ ಯಾವ ದೋಷ ಹಿಡಿಯುತ್ತದೆ ಎಂದು ನೋಡಲು mutants ಬಳಸಿ.",
 "objectives": [
  "Write positive, negative and boundary tests.",
  "Run an independent probe.",
  "Use mutants to check the tests.",
  "Check the type before the length.",
  "Notice when a test run is invalid."
 ],
 "objectivesKn": [
  "ಧನಾತ್ಮಕ, ಋಣಾತ್ಮಕ ಮತ್ತು ಗಡಿ ಪರೀಕ್ಷೆಗಳನ್ನು ಬರೆಯಿರಿ.",
  "ಸ್ವತಂತ್ರ probe ಓಡಿಸಿ.",
  "ಪರೀಕ್ಷೆಗಳನ್ನು ಪರಿಶೀಲಿಸಲು mutants ಬಳಸಿ.",
  "ಉದ್ದಕ್ಕಿಂತ ಮೊದಲು ಪ್ರಕಾರ ಪರಿಶೀಲಿಸಿ.",
  "ಪರೀಕ್ಷಾ ಓಟ ಅಮಾನ್ಯವಾದಾಗ ಗಮನಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "The Workbench on a Real Repo (Part 1 of 3)",
    "textKn": "ನಿಜ Repo ಮೇಲೆ Workbench (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a signup fixture with a missing password check, a fixed handler, five unittest tests, an independent probe and mutants that show which tests catch which defects. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind evaluating an agent workbench on a real repository (fixtures, independent probes, scope audits, git baselines and experiment design), not the real software, and the pipelines are fixed scripts that stand in for agents, with no language model involved, so no real LLM behaviour is measured. The pasted lesson said its original main.py was not supplied, so the labs are our own implementation of the behaviour it describes; results depend on the machine they ran on. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಪಾಸ್‌ವರ್ಡ್ ಪರಿಶೀಲನೆ ಇಲ್ಲದ signup fixture, ಸರಿಪಡಿಸಿದ handler, ಐದು unittest ಪರೀಕ್ಷೆಗಳು, ಸ್ವತಂತ್ರ probe ಮತ್ತು ಯಾವ ಪರೀಕ್ಷೆ ಯಾವ ದೋಷ ಹಿಡಿಯುತ್ತದೆ ಎಂದು ತೋರಿಸುವ mutants. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ನಿಜ repository ಮೇಲೆ agent workbench ಮೌಲ್ಯಮಾಪನ (fixtures, ಸ್ವತಂತ್ರ probes, ವ್ಯಾಪ್ತಿ ಲೆಕ್ಕಪರಿಶೋಧನೆ, git baselines ಮತ್ತು ಪ್ರಯೋಗ ವಿನ್ಯಾಸ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು pipelines ಕೇವಲ agents ಬದಲಿಗೆ ನಿಲ್ಲುವ ನಿಶ್ಚಿತ ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳು, ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಮೂಲ main.py ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ; ಫಲಿತಾಂಶಗಳು ಅವು ಓಡಿದ ಯಂತ್ರವನ್ನು ಅವಲಂಬಿಸಿವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Small Task With Real Edges",
    "textKn": "ನಿಜ ಅಂಚುಗಳಿರುವ ಸಣ್ಣ ಕಾರ್ಯ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Define Done Before the Agent Starts",
    "headingKn": "ಏಜೆಂಟ್ ಆರಂಭಿಸುವ ಮುನ್ನ ಪೂರ್ಣತೆ ವ್ಯಾಖ್ಯಾನಿಸಿ",
    "bodyEn": "The task is to make /signup reject passwords shorter than 8 characters with status 422 and a typed error. This part builds the fixture, writes the fix, runs five real unittest tests and an independent probe in a separate interpreter, and then breaks the handler four ways to see which tests notice. A first version of the lab ran the tests in isolated mode, where the test module could not import the app, and every mutant looked caught for the wrong reason; the unit command was fixed.",
    "bodyKn": "ಕಾರ್ಯ: /signup 8 ಅಕ್ಷರಗಳಿಗಿಂತ ಕಡಿಮೆ ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು status 422 ಮತ್ತು typed error ನೊಂದಿಗೆ ತಿರಸ್ಕರಿಸುವಂತೆ ಮಾಡುವುದು. ಈ ಭಾಗ fixture ನಿರ್ಮಿಸಿ, ಸರಿಪಡಿಕೆ ಬರೆದು, ಐದು ನಿಜ unittest ಪರೀಕ್ಷೆ ಮತ್ತು ಪ್ರತ್ಯೇಕ interpreter ನಲ್ಲಿ ಸ್ವತಂತ್ರ probe ಓಡಿಸಿ, ನಂತರ handler ಅನ್ನು ನಾಲ್ಕು ರೀತಿ ಮುರಿದು ಯಾವ ಪರೀಕ್ಷೆಗಳು ಗಮನಿಸುತ್ತವೆ ಎಂದು ನೋಡುತ್ತದೆ. ಲ್ಯಾಬ್‌ನ ಮೊದಲ ಆವೃತ್ತಿ ಪರೀಕ್ಷೆಗಳನ್ನು ಪ್ರತ್ಯೇಕ ಕ್ರಮದಲ್ಲಿ ಓಡಿಸಿತು, ಅಲ್ಲಿ ಪರೀಕ್ಷಾ ಮಾಡ್ಯೂಲ್ app ಅನ್ನು import ಮಾಡಲಾಗಲಿಲ್ಲ ಮತ್ತು ಪ್ರತಿ mutant ತಪ್ಪು ಕಾರಣಕ್ಕಾಗಿ ಹಿಡಿಯಲ್ಪಟ್ಟಂತೆ ಕಾಣಿಸಿತು; unit ಆದೇಶ ಸರಿಪಡಿಸಲಾಯಿತು."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Fix, Test, Probe",
    "headingKn": "ಸರಿಪಡಿಸಿ, ಪರೀಕ್ಷಿಸಿ, Probe ಮಾಡಿ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Fix, test, probe</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">fixture</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">baseline app</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">five tests</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">valid, short, boundary</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">probe</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">separate interpreter</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">mutants</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">which test catches what</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">each kind of test catches different defects</text></svg>",
    "captionEn": "Positive, negative and boundary tests catch different defects.",
    "captionKn": "ಧನಾತ್ಮಕ, ಋಣಾತ್ಮಕ ಮತ್ತು ಗಡಿ ಪರೀಕ್ಷೆಗಳು ಬೇರೆ ಬೇರೆ ದೋಷ ಹಿಡಿಯುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Requirements and tests",
    "headingKn": "ಅವಶ್ಯಕತೆಗಳು ಮತ್ತು ಪರೀಕ್ಷೆಗಳು",
    "headers": [
     "Requirement",
     "Test",
     "Kind"
    ],
    "rows": [
     [
      "8 characters accepted",
      "test_valid, test_boundary_eight_accepted",
      "positive and boundary"
     ],
     [
      "short rejected with a typed error",
      "test_short_rejected",
      "negative"
     ],
     [
      "7 characters rejected",
      "test_boundary_seven_rejected",
      "boundary"
     ],
     [
      "non-string rejected",
      "test_non_string_rejected",
      "negative"
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
    "filename": "rw_1.py",
    "headingEn": "The fixed handler and the tests",
    "headingKn": "ಸರಿಪಡಿಸಿದ handler ಮತ್ತು ಪರೀಕ್ಷೆಗಳು",
    "descEn": "The fixed handler checks the type before the length, because a list of eight characters has a length of 8. The five tests cover a valid password, a short one, seven characters, exactly eight and a non-string.",
    "descKn": "ಸರಿಪಡಿಸಿದ handler ಉದ್ದಕ್ಕಿಂತ ಮೊದಲು ಪ್ರಕಾರ ಪರಿಶೀಲಿಸುತ್ತದೆ, ಏಕೆಂದರೆ ಎಂಟು ಅಕ್ಷರಗಳ ಪಟ್ಟಿಗೆ ಉದ್ದ 8. ಐದು ಪರೀಕ್ಷೆಗಳು ಮಾನ್ಯ ಪಾಸ್‌ವರ್ಡ್, ಚಿಕ್ಕದು, ಏಳು ಅಕ್ಷರ, ನಿಖರ ಎಂಟು ಮತ್ತು string ಅಲ್ಲದ್ದನ್ನು ಒಳಗೊಳ್ಳುತ್ತವೆ.",
    "code": "APP_FIXED = '''def signup(payload):\n    username = payload.get(\"username\", \"\")\n    password = payload.get(\"password\", \"\")\n    if not isinstance(password, str) or len(password) < MIN:\n        return {\"status\": 422, \"body\": {\"error\": {\"type\": \"validation_error\", \"code\": \"password_too_short\"}}}\n    return {\"status\": 201, \"body\": {\"username\": username}}\n'''.replace(\"MIN\", \"8\")\nTESTS = '''import unittest\nfrom app import signup\n\nclass SignupTests(unittest.TestCase):\n    def test_valid(self):\n        self.assertEqual(signup({\"username\": \"a\", \"password\": \"abcdefgh\"})[\"status\"], 201)\n\n    def test_short_rejected(self):\n        r = signup({\"username\": \"a\", \"password\": \"abc\"})\n        self.assertEqual((r[\"status\"], r[\"body\"][\"error\"][\"code\"]), (422, \"password_too_short\"))\n\n    def test_boundary_seven_rejected(self):\n        self.assertEqual(signup({\"username\": \"a\", \"password\": \"1234567\"})[\"status\"], 422)\n\n    def test_boundary_eight_accepted(self):\n        self.assertEqual(signup({\"username\": \"a\", \"password\": \"12345678\"})[\"status\"], 201)\n\n    def test_non_string_rejected(self):\n        self.assertEqual(signup({\"username\": \"a\", \"password\": None})[\"status\"], 422)\n'''"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rw_1.py",
    "headingEn": "main(): four experiments",
    "headingKn": "main(): ನಾಲ್ಕು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the tests and a probe against the baseline and the fix, runs four mutants against the full and a reduced suite, runs an empty and a misnamed test module and shows what len() does for three non-string inputs.",
    "descKn": "main() baseline ಮತ್ತು ಸರಿಪಡಿಕೆಯ ವಿರುದ್ಧ ಪರೀಕ್ಷೆ ಮತ್ತು probe ಓಡಿಸಿ, ಪೂರ್ಣ ಮತ್ತು ಕಡಿಮೆಯಾದ ಸೂಟ್ ವಿರುದ್ಧ ನಾಲ್ಕು mutants ಓಡಿಸಿ, ಖಾಲಿ ಮತ್ತು ತಪ್ಪು ಹೆಸರಿನ ಪರೀಕ್ಷಾ ಮಾಡ್ಯೂಲ್ ಓಡಿಸಿ, ಮತ್ತು ಮೂರು string ಅಲ್ಲದ ಇನ್‌ಪುಟ್‌ಗಳಿಗೆ len() ಏನು ಮಾಡುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ.",
    "code": "def main():\n    py = sys.executable\n    unit = [py, \"-m\", \"unittest\", \"test_app\"]\n    with tempfile.TemporaryDirectory() as d:\n        root = Path(d)\n        (root / \"probe.py\").write_text(PROBE, encoding=\"utf-8\")\n\n        section(\"1. Genuinely running: the baseline has the defect, the fixed version does not\")\n        put(root, APP_BASE, TESTS)\n        print(\"baseline against the five tests: exit\", run(unit, root)[0], \"|\", run(unit, root)[1])\n        print(\"baseline against the independent probe:\", run([py, \"-I\", \"probe.py\", str(root)], root)[0])\n        put(root, APP_FIXED, TESTS)\n        print(\"fixed against the five tests: exit\", run(unit, root)[0], \"|\", run(unit, root)[1])\n        print(\"fixed against the independent probe:\", run([py, \"-I\", \"probe.py\", str(root)], root)[0], run([py, \"-I\", \"probe.py\", str(root)], root)[2])\n        print(\"the task starts failing for a real reason and ends passing both the pipeline's own tests and a probe that lives outside the repository; the probe is a separate interpreter run so it does not depend on the tests it is checking\")\n\n        section(\"2. Genuinely running: which tests catch which defects (mutants of the handler)\")\n        mutants = {\"off by one (<= 8)\": APP_FIXED.replace(\"< 8\", \"<= 8\"), \"off by one (< 7)\": APP_FIXED.replace(\"< 8\", \"< 7\"), \"no type check\": APP_FIXED.replace(\"not isinstance(password, str) or \", \"\"),\n                   \"wrong code\": APP_FIXED.replace(\"password_too_short\", \"bad\")}\n        for name, src in mutants.items():\n            put(root, src, TESTS)\n            full = run(unit, root)[0]\n            put(root, src, TESTS_SHORT_ONLY)\n            short = run(unit, root)[0]\n            print(f\"{name:20} full suite exit {full} ({'caught' if full else 'SURVIVED'}) | valid+short tests only exit {short} ({'caught' if short else 'SURVIVED'})\")\n        print(\"with only the valid and short-password tests, the <= 8 mutant was still caught because the valid test uses an exactly-eight-character password, while the < 7 mutant and the no-type-check mutant survived; only the seven-character boundary test and the non-string test caught those, so positive, negative and boundary tests each catch different defects\")\n\n        section(\"3. Genuinely checking: tests that never ran\")\n        put(root, APP_FIXED, \"import unittest\" + chr(10))\n        code, last, _ = run(unit, root)\n        print(\"empty test module: exit\", code, \"|\", last)\n        code2, last2, _ = run([py, \"-m\", \"unittest\", \"no_such_module\"], root)\n        print(\"wrong module name: exit\", code2, \"|\", last2)\n        put(root, APP_FIXED, TESTS)\n        print(\"neither of these exited 0 on this Python (an empty module exits 5 with NO TESTS RAN and a wrong name exits 1), so the exit code protected the gate here; the test count is still worth recording because other runners and versions may treat an empty suite differently, which this lab did not test\")\n\n        section(\"4. Genuinely measuring: the type check before the length check\")\n        for label, pw in ((\"None\", None), (\"integer 12345678\", 12345678), (\"list of 8\", list(\"abcdefgh\"))):\n            try:\n                r = len(pw)\n                print(f\"{label:18} len() works and returns {r}: a length-only check would have accepted it\")\n            except TypeError as e:\n                print(f\"{label:18} len() raises TypeError: {e}\")\n        put(root, APP_FIXED, TESTS)\n        print(\"the fixed handler rejects each without crashing; the list of eight characters shows why the type check comes first, because its length passes a length check even though it is not a string\")\n        code, _, out = run([py, \"-I\", \"-c\", \"import sys; sys.path.insert(0, sys.argv[1]); from app import signup; print(signup({'password': list('abcdefgh')})['status'])\", str(root)], root)\n        print(\"status for a list password:\", out)"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the baseline has the defect, the fixed version does not ---\nbaseline against the five tests: exit 1 | FAILED (failures=2, errors=1)\nbaseline against the independent probe: 1\nfixed against the five tests: exit 0 | OK\nfixed against the independent probe: 0 {'short is 422': True, 'error type': True, 'eight is 201': True, 'seven is 422': True}\nthe task starts failing for a real reason and ends passing both the pipeline's own tests and a probe that lives outside the repository; the probe is a separate interpreter run so it does not depend on the tests it is checking\n\n--- 2. Genuinely running: which tests catch which defects (mutants of the handler) ---\noff by one (<= 8)    full suite exit 1 (caught) | valid+short tests only exit 1 (caught)\noff by one (< 7)     full suite exit 1 (caught) | valid+short tests only exit 0 (SURVIVED)\nno type check        full suite exit 1 (caught) | valid+short tests only exit 0 (SURVIVED)\nwrong code           full suite exit 1 (caught) | valid+short tests only exit 1 (caught)\nwith only the valid and short-password tests, the <= 8 mutant was still caught because the valid test uses an exactly-eight-character password, while the < 7 mutant and the no-type-check mutant survived; only the seven-character boundary test and the non-string test caught those, so positive, negative and boundary tests each catch different defects\n\n--- 3. Genuinely checking: tests that never ran ---\nempty test module: exit 5 | NO TESTS RAN\nwrong module name: exit 1 | FAILED (errors=1)\nneither of these exited 0 on this Python (an empty module exits 5 with NO TESTS RAN and a wrong name exits 1), so the exit code protected the gate here; the test count is still worth recording because other runners and versions may treat an empty suite differently, which this lab did not test\n\n--- 4. Genuinely measuring: the type check before the length check ---\nNone               len() raises TypeError: object of type 'NoneType' has no len()\ninteger 12345678   len() raises TypeError: object of type 'int' has no len()\nlist of 8          len() works and returns 8: a length-only check would have accepted it\nthe fixed handler rejects each without crashing; the list of eight characters shows why the type check comes first, because its length passes a length check even though it is not a string\nstatus for a list password: 422"
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
    "headingEn": "Genuinely Found: The Baseline Failed for a Real Reason and the Fix Passed Both Checks",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Baseline ನಿಜ ಕಾರಣಕ್ಕೆ ವಿಫಲವಾಯಿತು ಮತ್ತು ಸರಿಪಡಿಕೆ ಎರಡೂ ಪರಿಶೀಲನೆ ಪಾಸ್ ಮಾಡಿತು",
    "bodyEn": "Section 1: the baseline failed the five tests (failures=2, errors=1) and the independent probe; the fix passed the tests (exit 0, OK) and the probe. Section 2: against a reduced suite of only the valid and short tests, the <= 8 mutant was still caught because the valid test uses exactly eight characters, while the < 7 mutant and the no-type-check mutant survived; the full suite caught all four.",
    "bodyKn": "ವಿಭಾಗ 1: baseline ಐದು ಪರೀಕ್ಷೆ (failures=2, errors=1) ಮತ್ತು ಸ್ವತಂತ್ರ probe ವಿಫಲವಾಯಿತು; ಸರಿಪಡಿಕೆ ಪರೀಕ್ಷೆ (exit 0, OK) ಮತ್ತು probe ಪಾಸ್ ಮಾಡಿತು. ವಿಭಾಗ 2: ಮಾನ್ಯ ಮತ್ತು ಚಿಕ್ಕ ಪರೀಕ್ಷೆಗಳು ಮಾತ್ರ ಇರುವ ಕಡಿಮೆ ಸೂಟ್ ವಿರುದ್ಧ <= 8 mutant ಇನ್ನೂ ಹಿಡಿಯಲ್ಪಟ್ಟಿತು ಏಕೆಂದರೆ ಮಾನ್ಯ ಪರೀಕ್ಷೆ ನಿಖರ ಎಂಟು ಅಕ್ಷರ ಬಳಸುತ್ತದೆ, ಆದರೆ < 7 mutant ಮತ್ತು type-ಪರಿಶೀಲನೆ-ಇಲ್ಲದ mutant ಉಳಿದುಕೊಂಡವು; ಪೂರ್ಣ ಸೂಟ್ ನಾಲ್ಕನ್ನೂ ಹಿಡಿಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Empty Suites and Why the Type Check Comes First",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಖಾಲಿ ಸೂಟ್‌ಗಳು ಮತ್ತು ಪ್ರಕಾರ ಪರಿಶೀಲನೆ ಮೊದಲು ಏಕೆ",
    "bodyEn": "Section 3 (Python 3.14): an empty test module exited 5 with NO TESTS RAN and a misnamed module exited 1, so neither looked like success here; whether other runners treat an empty suite the same way was not tested. Section 4: len(None) and len(12345678) raised TypeError, while len() of a list of eight characters returned 8, and the fixed handler returned 422 for that list.",
    "bodyKn": "ವಿಭಾಗ 3 (Python 3.14): ಖಾಲಿ ಪರೀಕ್ಷಾ ಮಾಡ್ಯೂಲ್ NO TESTS RAN ನೊಂದಿಗೆ 5 ರಲ್ಲಿ ಮತ್ತು ತಪ್ಪು ಹೆಸರಿನ ಮಾಡ್ಯೂಲ್ 1 ರಲ್ಲಿ ನಿರ್ಗಮಿಸಿತು, ಆದ್ದರಿಂದ ಇಲ್ಲಿ ಯಾವುದೂ ಯಶಸ್ಸಿನಂತೆ ಕಾಣಲಿಲ್ಲ; ಇತರ runners ಖಾಲಿ ಸೂಟ್ ಅನ್ನು ಹಾಗೆಯೇ ನಡೆಸಿಕೊಳ್ಳುತ್ತವೆಯೇ ಎಂದು ಪರೀಕ್ಷಿಸಲಿಲ್ಲ. ವಿಭಾಗ 4: len(None) ಮತ್ತು len(12345678) TypeError ಎತ್ತಿದವು, ಆದರೆ ಎಂಟು ಅಕ್ಷರಗಳ ಪಟ್ಟಿಯ len() 8 ಮರಳಿಸಿತು, ಮತ್ತು ಸರಿಪಡಿಸಿದ handler ಆ ಪಟ್ಟಿಗೆ 422 ಮರಳಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A fix is only credible when tests of different kinds and an independent probe agree, and the lab shows what each one would have missed alone.",
    "bodyKn": "ವಿಭಿನ್ನ ರೀತಿಯ ಪರೀಕ್ಷೆಗಳು ಮತ್ತು ಸ್ವತಂತ್ರ probe ಒಪ್ಪಿದಾಗ ಮಾತ್ರ ಸರಿಪಡಿಕೆ ನಂಬಲರ್ಹ, ಮತ್ತು ಪ್ರತಿಯೊಂದೂ ಒಂಟಿಯಾಗಿ ಏನು ತಪ್ಪಿಸುತ್ತಿತ್ತು ಎಂದು ಲ್ಯಾಬ್ ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"if the tests pass after a mutation, the mutation was harmless.\" The < 7 mutant passed a reduced suite and was wrong.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"mutation ನಂತರ ಪರೀಕ್ಷೆಗಳು ಪಾಸ್ ಆದರೆ mutation ಹಾನಿಕರವಲ್ಲ.\" < 7 mutant ಕಡಿಮೆ ಸೂಟ್ ಪಾಸ್ ಮಾಡಿ ತಪ್ಪಾಗಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Fixture: the starting repository for an experiment. Acceptance probe: an independent check outside the repository. Boundary test: a case at the edge of a rule. Mutant: a deliberate defect. Typed error: an error with a type and a code.",
    "bodyKn": "Fixture: ಪ್ರಯೋಗದ ಆರಂಭ repository. Acceptance probe: repository ಹೊರಗಿನ ಸ್ವತಂತ್ರ ಪರಿಶೀಲನೆ. Boundary test: ನಿಯಮದ ಅಂಚಿನ ಪ್ರಕರಣ. Mutant: ಉದ್ದೇಶಪೂರ್ವಕ ದೋಷ. Typed error: type ಮತ್ತು code ಇರುವ ದೋಷ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The baseline failed and the fix passed tests and probe. 2) The < 7 and no-type-check mutants survived a reduced suite. 3) The <= 8 mutant was caught by the valid test. 4) An empty suite exited 5, a misnamed module 1. 5) A list of eight characters passes a length check.",
    "bodyKn": "1) baseline ವಿಫಲವಾಗಿ ಸರಿಪಡಿಕೆ ಪರೀಕ್ಷೆ ಮತ್ತು probe ಪಾಸ್ ಮಾಡಿತು. 2) < 7 ಮತ್ತು type-ಪರಿಶೀಲನೆ-ಇಲ್ಲದ mutants ಕಡಿಮೆ ಸೂಟ್ ಉಳಿದುಕೊಂಡವು. 3) <= 8 mutant ಅನ್ನು ಮಾನ್ಯ ಪರೀಕ್ಷೆ ಹಿಡಿಯಿತು. 4) ಖಾಲಿ ಸೂಟ್ 5, ತಪ್ಪು ಹೆಸರಿನ ಮಾಡ್ಯೂಲ್ 1 ರಲ್ಲಿ ನಿರ್ಗಮಿಸಿತು. 5) ಎಂಟು ಅಕ್ಷರಗಳ ಪಟ್ಟಿ ಉದ್ದ ಪರಿಶೀಲನೆ ಪಾಸ್ ಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How did the baseline do against the five tests?",
      "qKn": "baseline ಐದು ಪರೀಕ್ಷೆಗಳ ವಿರುದ್ಧ ಹೇಗಾಯಿತು?",
      "opts": [
       "Failed with exit 1",
       "Passed",
       "Timed out",
       "Was skipped"
      ],
      "optsKn": [
       "exit 1 ನೊಂದಿಗೆ ವಿಫಲ",
       "ಪಾಸ್",
       "ಸಮಯ ಮೀರಿತು",
       "ಬಿಡಲಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "Which mutant did the reduced suite still catch?",
      "qKn": "ಕಡಿಮೆ ಸೂಟ್ ಇನ್ನೂ ಯಾವ mutant ಹಿಡಿಯಿತು?",
      "opts": [
       "<= 8",
       "< 7",
       "no type check",
       "none"
      ],
      "optsKn": [
       "<= 8",
       "< 7",
       "type ಪರಿಶೀಲನೆ ಇಲ್ಲ",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What exit code did an empty test module give on this Python?",
      "qKn": "ಈ Python ನಲ್ಲಿ ಖಾಲಿ ಪರೀಕ್ಷಾ ಮಾಡ್ಯೂಲ್ ಯಾವ exit code ನೀಡಿತು?",
      "opts": [
       "5",
       "0",
       "1",
       "2"
      ],
      "optsKn": [
       "5",
       "0",
       "1",
       "2"
      ],
      "correct": 0
     },
     {
      "q": "What did len() return for a list of eight characters?",
      "qKn": "ಎಂಟು ಅಕ್ಷರಗಳ ಪಟ್ಟಿಗೆ len() ಏನು ಮರಳಿಸಿತು?",
      "opts": [
       "8",
       "TypeError",
       "0",
       "1"
      ],
      "optsKn": [
       "8",
       "TypeError",
       "0",
       "1"
      ],
      "correct": 0
     },
     {
      "q": "Why did the first version of the lab look as if every mutant was caught?",
      "qKn": "ಲ್ಯಾಬ್‌ನ ಮೊದಲ ಆವೃತ್ತಿಯಲ್ಲಿ ಪ್ರತಿ mutant ಹಿಡಿಯಲ್ಪಟ್ಟಂತೆ ಏಕೆ ಕಂಡಿತು?",
      "opts": [
       "Isolated mode could not import the app, so every run failed",
       "The tests were perfect",
       "The probe failed",
       "Python crashed"
      ],
      "optsKn": [
       "ಪ್ರತ್ಯೇಕ ಕ್ರಮ app import ಮಾಡಲಾಗಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಪ್ರತಿ ಓಟ ವಿಫಲವಾಯಿತು",
       "ಪರೀಕ್ಷೆಗಳು ಪರಿಪೂರ್ಣವಾಗಿದ್ದವು",
       "probe ವಿಫಲವಾಯಿತು",
       "Python ಕ್ರ್ಯಾಶ್ ಆಯಿತು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
