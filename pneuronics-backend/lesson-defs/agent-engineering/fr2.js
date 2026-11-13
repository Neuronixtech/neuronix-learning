module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af7559b6a464b572e275684",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Turn Every Agent Correction into a System Improvement (Part 2 of 3) — Verified Controls",
 "titleKn": "ಪ್ರತಿ Agent ತಿದ್ದುಪಡಿಯನ್ನು ವ್ಯವಸ್ಥೆ ಸುಧಾರಣೆಯಾಗಿ ಪರಿವರ್ತಿಸಿ (ಭಾಗ 2 / 3) — ಪರಿಶೀಲಿತ ನಿಯಂತ್ರಣಗಳು",
 "desc": "Build scope and schema controls, run a regression test against bad and good code and catch controls that cannot fail.",
 "descKn": "ವ್ಯಾಪ್ತಿ ಮತ್ತು schema ನಿಯಂತ್ರಣ ನಿರ್ಮಿಸಿ, ಕೆಟ್ಟ ಮತ್ತು ಒಳ್ಳೆಯ ಕೋಡ್ ವಿರುದ್ಧ regression test ಓಡಿಸಿ ಮತ್ತು ವಿಫಲವಾಗದ ನಿಯಂತ್ರಣಗಳನ್ನು ಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Write a scope control.",
  "Write a schema control.",
  "Run a regression test for real.",
  "Detect controls that cannot fail.",
  "Validate reports on read."
 ],
 "objectivesKn": [
  "ವ್ಯಾಪ್ತಿ ನಿಯಂತ್ರಣ ಬರೆಯಿರಿ.",
  "schema ನಿಯಂತ್ರಣ ಬರೆಯಿರಿ.",
  "regression test ನಿಜವಾಗಿ ಓಡಿಸಿ.",
  "ವಿಫಲವಾಗದ ನಿಯಂತ್ರಣ ಪತ್ತೆ ಮಾಡಿ.",
  "ಓದುವಾಗ ವರದಿ ಮಾನ್ಯಗೊಳಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Turn Every Agent Correction into a System Improvement (Part 2 of 3)",
    "textKn": "ಪ್ರತಿ Agent ತಿದ್ದುಪಡಿಯನ್ನು ವ್ಯವಸ್ಥೆ ಸುಧಾರಣೆಯಾಗಿ ಪರಿವರ್ತಿಸಿ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: executable controls verified against the failure they target, a regression test run against buggy and fixed code, controls that never fail, idempotent event ingestion and report validation on read. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind turning agent corrections into durable system improvements (correction records, root causes, fingerprints, verified controls and the control lifecycle), not the real software, and the corrections, events and repositories are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original main.py was not supplied, and the lesson text states that its Python examples are reference implementations, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಅವು ಗುರಿಯಿಡುವ ವೈಫಲ್ಯದ ವಿರುದ್ಧ ಪರಿಶೀಲಿತ ಕಾರ್ಯಗತ ನಿಯಂತ್ರಣಗಳು, ದೋಷಯುಕ್ತ ಮತ್ತು ಸರಿಪಡಿಸಿದ ಕೋಡ್ ವಿರುದ್ಧ ಓಡಿಸಿದ regression test, ಎಂದೂ ವಿಫಲವಾಗದ ನಿಯಂತ್ರಣಗಳು, ಪುನರಾವರ್ತನೆ-ಸುರಕ್ಷಿತ event ಸೇರ್ಪಡೆ ಮತ್ತು ಓದುವಾಗ ವರದಿ ಮಾನ್ಯೀಕರಣ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು agent ತಿದ್ದುಪಡಿಗಳನ್ನು ಬಾಳಿಕೆ ಬರುವ ವ್ಯವಸ್ಥೆ ಸುಧಾರಣೆಗಳಾಗಿ ಪರಿವರ್ತಿಸುವುದು (ತಿದ್ದುಪಡಿ ದಾಖಲೆಗಳು, ಮೂಲ ಕಾರಣಗಳು, fingerprints, ಪರಿಶೀಲಿತ ನಿಯಂತ್ರಣಗಳು ಮತ್ತು ನಿಯಂತ್ರಣ ಜೀವನಚಕ್ರ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ತಿದ್ದುಪಡಿಗಳು, events ಮತ್ತು repositories ಅನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ಪಠ್ಯ ತನ್ನ Python ಉದಾಹರಣೆಗಳು ಉಲ್ಲೇಖ ಅನುಷ್ಠಾನಗಳು ಎಂದು ಹೇಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Control That Passes Proves Little",
    "textKn": "ಪಾಸ್ ಆಗುವ ನಿಯಂತ್ರಣ ಕಡಿಮೆ ಸಾಬೀತು ಮಾಡುತ್ತದೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Verify Against the Known-Bad Case",
    "headingKn": "ತಿಳಿದ-ಕೆಟ್ಟ ಸಂದರ್ಭದ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿ",
    "bodyEn": "Writing a test, a validator or a scope check is not the end of the correction. This part builds a scope check and a schema check, then runs a regression test for real in a temporary directory against code that has the defect and against the fixed code, and shows two controls that look like protection and are not: a test with no assertion and a test the runner never collected. It finishes with event deduplication and a report that is validated when it is read.",
    "bodyKn": "ಪರೀಕ್ಷೆ, validator ಅಥವಾ ವ್ಯಾಪ್ತಿ ಪರಿಶೀಲನೆ ಬರೆಯುವುದು ತಿದ್ದುಪಡಿಯ ಅಂತ್ಯವಲ್ಲ. ಈ ಭಾಗ ವ್ಯಾಪ್ತಿ ಪರಿಶೀಲನೆ ಮತ್ತು schema ಪರಿಶೀಲನೆ ನಿರ್ಮಿಸಿ, ನಂತರ ದೋಷವಿರುವ ಕೋಡ್ ಮತ್ತು ಸರಿಪಡಿಸಿದ ಕೋಡ್ ವಿರುದ್ಧ ತಾತ್ಕಾಲಿಕ ಡೈರೆಕ್ಟರಿಯಲ್ಲಿ regression test ಅನ್ನು ನಿಜವಾಗಿ ಓಡಿಸಿ, ರಕ್ಷಣೆಯಂತೆ ತೋರಿ ಅಲ್ಲದ ಎರಡು ನಿಯಂತ್ರಣ ತೋರಿಸುತ್ತದೆ: assertion ಇಲ್ಲದ ಪರೀಕ್ಷೆ ಮತ್ತು runner ಎಂದೂ ಸಂಗ್ರಹಿಸದ ಪರೀಕ್ಷೆ. ಕೊನೆಗೆ event ಪುನರಾವರ್ತನೆ ತೆಗೆದುಹಾಕುವುದು ಮತ್ತು ಓದುವಾಗ ಮಾನ್ಯೀಕರಿಸುವ ವರದಿ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Verify a Control Against the Failure",
    "headingKn": "ವೈಫಲ್ಯದ ವಿರುದ್ಧ ನಿಯಂತ್ರಣ ಪರಿಶೀಲಿಸಿ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Verify the control</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">control</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">check or test</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">known-bad code</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">must fail</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">fixed code</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">must pass</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">verified</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">both held</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a control that cannot fail proves nothing</text></svg>",
    "captionEn": "A control must fail on the bad case and pass on the good one.",
    "captionKn": "ನಿಯಂತ್ರಣ ಕೆಟ್ಟ ಸಂದರ್ಭದಲ್ಲಿ ವಿಫಲ ಮತ್ತು ಒಳ್ಳೆಯದರಲ್ಲಿ ಪಾಸ್ ಆಗಬೇಕು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Verification outcomes",
    "headingKn": "ಪರಿಶೀಲನೆ ಫಲಿತಾಂಶಗಳು",
    "headers": [
     "Control",
     "On known-bad code",
     "Status"
    ],
    "rows": [
     [
      "real assertion test",
      "exit 1 (failed)",
      "verified"
     ],
     [
      "test with no assertion",
      "exit 0",
      "unverified"
     ],
     [
      "test not collected",
      "exit 5 (no tests ran)",
      "unverified"
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
    "filename": "fr_2.py",
    "headingEn": "Checks, the test runner and verification",
    "headingKn": "ಪರಿಶೀಲನೆಗಳು, test runner ಮತ್ತು ಪರಿಶೀಲನೆ",
    "descEn": "check_scope and check_response are the executable controls, run_unittest writes the code and test to a temporary directory and runs the real runner, and verify_control calls a control verified only when it failed on the bad case and passed on the good one.",
    "descKn": "check_scope ಮತ್ತು check_response ಕಾರ್ಯಗತ ನಿಯಂತ್ರಣಗಳು, run_unittest ಕೋಡ್ ಮತ್ತು ಪರೀಕ್ಷೆಯನ್ನು ತಾತ್ಕಾಲಿಕ ಡೈರೆಕ್ಟರಿಗೆ ಬರೆದು ನಿಜ runner ಓಡಿಸುತ್ತದೆ, ಮತ್ತು verify_control ಕೆಟ್ಟ ಸಂದರ್ಭದಲ್ಲಿ ವಿಫಲ ಮತ್ತು ಒಳ್ಳೆಯದರಲ್ಲಿ ಪಾಸ್ ಆದರೆ ಮಾತ್ರ ನಿಯಂತ್ರಣ ಪರಿಶೀಲಿತ ಎನ್ನುತ್ತದೆ.",
    "code": "def check_scope(changed, allowed):\n    allowed_parts = [PurePosixPath(a.replace(chr(92), \"/\")).parts for a in allowed]\n    bad = [c for c in changed if not any(PurePosixPath(c.replace(chr(92), \"/\")).parts[: len(p)] == p for p in allowed_parts)]\n    return {\"ok\": not bad, \"violations\": bad}\n\n\ndef check_response(resp):\n    missing = [k for k in (\"status\", \"user_id\") if not isinstance(resp, dict) or k not in resp]\n    return {\"ok\": not missing, \"missing\": missing}\n\n\ndef run_unittest(code, test):\n    with tempfile.TemporaryDirectory() as d:\n        Path(d, \"totals.py\").write_text(code, encoding=\"utf-8\")\n        Path(d, \"test_totals.py\").write_text(test, encoding=\"utf-8\")\n        p = subprocess.run([sys.executable, \"-B\", \"-m\", \"unittest\", \"-q\", \"test_totals\"], cwd=d, capture_output=True, text=True)\n        return p.returncode, (p.stderr.strip().splitlines() or [\"\"])[-1]\n\n\nBUGGY = \"def total(items):\" + chr(10) + \"    return sum(items) - 1\" + chr(10)\nFIXED = \"def total(items):\" + chr(10) + \"    return sum(items)\" + chr(10)\nTEST = textwrap.dedent(\"\"\"\n    import unittest\n    from totals import total\n    class T(unittest.TestCase):\n        def test_total(self):\n            self.assertEqual(total([1, 2, 3]), 6)\n    \"\"\")\nTEST_NO_ASSERT = textwrap.dedent(\"\"\"\n    import unittest\n    from totals import total\n    class T(unittest.TestCase):\n        def test_total(self):\n            total([1, 2, 3])\n    \"\"\")\nTEST_NOT_COLLECTED = textwrap.dedent(\"\"\"\n    import unittest\n    from totals import total\n    class T(unittest.TestCase):\n        def check_total(self):\n            self.assertEqual(total([1, 2, 3]), 6)\n    \"\"\")\n\n\ndef verify_control(control_fails_on_bad, control_passes_on_good):\n    return \"verified\" if control_fails_on_bad and control_passes_on_good else \"unverified\"\n\n\nclass Ingest:\n    def __init__(self):\n        self.seen, self.records = set(), []\n\n    def add(self, event):\n        if event[\"event_id\"] in self.seen:\n            return False\n        self.seen.add(event[\"event_id\"])\n        self.records.append(event)\n        return True\n\n\ndef validate_report(text):\n    data = json.loads(text)\n    if not isinstance(data, dict) or not isinstance(data.get(\"corrections\"), list):\n        raise ValueError(\"Expected a corrections list\")\n    for i, c in enumerate(data[\"corrections\"]):\n        for k in (\"fingerprint\", \"cause\", \"layer\", \"owner\", \"review_by\", \"verified\"):\n            if k not in c:\n                raise ValueError(f\"corrections[{i}] is missing {k}\")\n    return data"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "fr_2.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the two checks, runs the regression test on both code versions, runs the two fake controls, ingests a duplicate event and validates four reports.",
    "descKn": "main() ಎರಡು ಪರಿಶೀಲನೆ ಓಡಿಸಿ, ಎರಡೂ ಕೋಡ್ ಆವೃತ್ತಿಗಳ ಮೇಲೆ regression test ಓಡಿಸಿ, ಎರಡು ನಕಲಿ ನಿಯಂತ್ರಣ ಓಡಿಸಿ, ನಕಲು event ಸೇರಿಸಿ ಮತ್ತು ನಾಲ್ಕು ವರದಿ ಮಾನ್ಯಗೊಳಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: a scope control and a schema control\")\n    print(\"changed README.md only        :\", check_scope([\"README.md\"], [\"app/registration\"]))\n    print(\"changed registration file     :\", check_scope([\"app/registration/validate.py\"], [\"app/registration\"]))\n    print(\"app/registration_old.py       :\", check_scope([\"app/registration_old.py\"], [\"app/registration\"]))\n    print(\"response with user_id         :\", check_response({\"status\": \"success\", \"user_id\": 42}))\n    print(\"response without user_id      :\", check_response({\"status\": \"success\"}))\n    print(\"the controls turned two conversational corrections into checks that run on the output, and the third line shows component matching keeping a sibling directory outside the allowed path\")\n\n    section(\"2. Genuinely running: a regression test is run against bad and good code\")\n    r_bad, last_bad = run_unittest(BUGGY, TEST)\n    r_good, last_good = run_unittest(FIXED, TEST)\n    print(\"test against buggy code exit:\", r_bad, \"|\", last_bad)\n    print(\"test against fixed code exit:\", r_good, \"|\", last_good)\n    print(\"status:\", verify_control(r_bad == 1, r_good == 0))\n    print(\"a control counts as verified here because it failed on the code that had the defect and passed on the corrected code; passing alone says nothing about whether it can detect the failure\")\n\n    section(\"3. Genuinely running: controls that look like protection and are not\")\n    r1, _ = run_unittest(BUGGY, TEST_NO_ASSERT)\n    r2, l2 = run_unittest(BUGGY, TEST_NOT_COLLECTED)\n    print(\"test with no assertion against buggy code exit :\", r1, \"->\", verify_control(r1 == 1, True))\n    print(\"test never collected against buggy code exit   :\", r2, \"|\", l2, \"->\", verify_control(r2 == 1, True))\n    print(\"the first exited 0 on code that was wrong because it never compared anything; the second was not named test_ so no test ran and the runner exited 5, which is not the exit 1 of a real test failure, so only an exit of 1 counts as the control catching the defect; running a control against the known-bad case is what exposes both\")\n\n    section(\"4. Genuinely running: duplicate events are ingested once\")\n    ing = Ingest()\n    evs = [{\"event_id\": \"a1\", \"cause\": \"off_scope_edit\"}, {\"event_id\": \"a1\", \"cause\": \"off_scope_edit\"}, {\"event_id\": \"a2\", \"cause\": \"off_scope_edit\"}]\n    print(\"accepted:\", [ing.add(e) for e in evs], \"| stored records:\", len(ing.records))\n    print(\"without the event id check the same webhook delivered twice would have counted as two recurrences and promoted a control early; a retry is not a new failure\")\n\n    section(\"5. Genuinely running: a report is validated when it is read\")\n    good = json.dumps({\"corrections\": [{\"fingerprint\": \"1ad37322ca49\", \"cause\": \"off_scope_edit\", \"layer\": \"scope_policy\", \"owner\": \"platform\", \"review_by\": \"2027-02-01\", \"verified\": True}]})\n    no_owner = json.dumps({\"corrections\": [{\"fingerprint\": \"1ad37322ca49\", \"cause\": \"off_scope_edit\", \"layer\": \"scope_policy\", \"review_by\": \"2027-02-01\", \"verified\": True}]})\n    for label, text in ((\"complete record\", good), (\"record without owner\", no_owner), (\"not a list\", json.dumps({\"corrections\": {}})), (\"not json\", \"{\")):\n        try:\n            validate_report(text)\n            print(f\"{label:22} accepted\")\n        except (ValueError, json.JSONDecodeError) as e:\n            print(f\"{label:22} rejected: {type(e).__name__}: {str(e)[:48]}\")\n    print(\"a report that cannot say who owns a control or when it is due for review is rejected on read, so a hand-edited file cannot drop those fields without anyone noticing\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a scope control and a schema control ---\nchanged README.md only        : {'ok': False, 'violations': ['README.md']}\nchanged registration file     : {'ok': True, 'violations': []}\napp/registration_old.py       : {'ok': False, 'violations': ['app/registration_old.py']}\nresponse with user_id         : {'ok': True, 'missing': []}\nresponse without user_id      : {'ok': False, 'missing': ['user_id']}\nthe controls turned two conversational corrections into checks that run on the output, and the third line shows component matching keeping a sibling directory outside the allowed path\n\n--- 2. Genuinely running: a regression test is run against bad and good code ---\ntest against buggy code exit: 1 | FAILED (failures=1)\ntest against fixed code exit: 0 | OK\nstatus: verified\na control counts as verified here because it failed on the code that had the defect and passed on the corrected code; passing alone says nothing about whether it can detect the failure\n\n--- 3. Genuinely running: controls that look like protection and are not ---\ntest with no assertion against buggy code exit : 0 -> unverified\ntest never collected against buggy code exit   : 5 | NO TESTS RAN -> unverified\nthe first exited 0 on code that was wrong because it never compared anything; the second was not named test_ so no test ran and the runner exited 5, which is not the exit 1 of a real test failure, so only an exit of 1 counts as the control catching the defect; running a control against the known-bad case is what exposes both\n\n--- 4. Genuinely running: duplicate events are ingested once ---\naccepted: [True, False, True] | stored records: 2\nwithout the event id check the same webhook delivered twice would have counted as two recurrences and promoted a control early; a retry is not a new failure\n\n--- 5. Genuinely running: a report is validated when it is read ---\ncomplete record        accepted\nrecord without owner   rejected: ValueError: corrections[0] is missing owner\nnot a list             rejected: ValueError: Expected a corrections list\nnot json               rejected: JSONDecodeError: Expecting property name enclosed in double quote\na report that cannot say who owns a control or when it is due for review is rejected on read, so a hand-edited file cannot drop those fields without anyone noticing"
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
    "headingEn": "Genuinely Found: The Test Failed on Bad Code and Passed on Good Code",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪರೀಕ್ಷೆ ಕೆಟ್ಟ ಕೋಡ್‌ನಲ್ಲಿ ವಿಫಲ ಮತ್ತು ಒಳ್ಳೆಯದರಲ್ಲಿ ಪಾಸ್ ಆಯಿತು",
    "bodyEn": "Section 1: README.md alone and app/registration_old.py were rejected against the allowed path app/registration, the registration file was accepted and a response without user_id was rejected. Section 2: the regression test exited 1 with FAILED (failures=1) on buggy code and 0 on fixed code, which is the combination that earns the status verified.",
    "bodyKn": "ವಿಭಾಗ 1: README.md ಮಾತ್ರ ಮತ್ತು app/registration_old.py ಅನುಮತಿಸಿದ path app/registration ವಿರುದ್ಧ ತಿರಸ್ಕೃತವಾದವು, registration ಫೈಲ್ ಸ್ವೀಕೃತವಾಯಿತು ಮತ್ತು user_id ಇಲ್ಲದ response ತಿರಸ್ಕೃತವಾಯಿತು. ವಿಭಾಗ 2: regression test ದೋಷಯುಕ್ತ ಕೋಡ್‌ನಲ್ಲಿ FAILED (failures=1) ನೊಂದಿಗೆ 1 ಮತ್ತು ಸರಿಪಡಿಸಿದ ಕೋಡ್‌ನಲ್ಲಿ 0 ನಿರ್ಗಮಿಸಿತು, ಇದೇ ಸಂಯೋಜನೆ verified ಸ್ಥಿತಿ ಗಳಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Controls That Cannot Fail, Duplicate Events and Reports",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ವಿಫಲವಾಗದ ನಿಯಂತ್ರಣಗಳು, ನಕಲು Events ಮತ್ತು ವರದಿಗಳು",
    "bodyEn": "Section 3: a test with no assertion exited 0 on the buggy code, and a test named check_total was not collected so the runner exited 5 with NO TESTS RAN; both were reported unverified because only an exit of 1 counts as catching the defect. A first version of the lab accepted any non-zero exit and marked the uncollected test verified, which is why the rule now requires exit 1. Section 4: a repeated event id was ingested once. Section 5: a record without owner, a corrections value that was not a list and invalid JSON were each rejected.",
    "bodyKn": "ವಿಭಾಗ 3: assertion ಇಲ್ಲದ ಪರೀಕ್ಷೆ ದೋಷಯುಕ್ತ ಕೋಡ್‌ನಲ್ಲಿ 0 ನಿರ್ಗಮಿಸಿತು, ಮತ್ತು check_total ಹೆಸರಿನ ಪರೀಕ್ಷೆ ಸಂಗ್ರಹವಾಗದೆ runner NO TESTS RAN ನೊಂದಿಗೆ 5 ನಿರ್ಗಮಿಸಿತು; ಎರಡೂ unverified ಎಂದು ವರದಿಯಾದವು ಏಕೆಂದರೆ 1 ನಿರ್ಗಮನ ಮಾತ್ರ ದೋಷ ಹಿಡಿದದ್ದು ಎಂದು ಪರಿಗಣಿತ. ಲ್ಯಾಬ್‌ನ ಮೊದಲ ಆವೃತ್ತಿ ಯಾವುದೇ ಶೂನ್ಯವಲ್ಲದ ನಿರ್ಗಮನ ಸ್ವೀಕರಿಸಿ ಸಂಗ್ರಹವಾಗದ ಪರೀಕ್ಷೆಯನ್ನು verified ಎಂದು ಗುರುತಿಸಿತು, ಅದಕ್ಕೇ ನಿಯಮ ಈಗ ನಿರ್ಗಮನ 1 ಬಯಸುತ್ತದೆ. ವಿಭಾಗ 4: ಪುನರಾವರ್ತಿತ event id ಒಮ್ಮೆ ಮಾತ್ರ ಸೇರಿತು. ವಿಭಾಗ 5: owner ಇಲ್ಲದ ದಾಖಲೆ, ಪಟ್ಟಿಯಲ್ಲದ corrections ಮೌಲ್ಯ ಮತ್ತು ಅಮಾನ್ಯ JSON ಪ್ರತಿಯೊಂದೂ ತಿರಸ್ಕೃತವಾದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A control that has never been seen to fail may be checking nothing, and a duplicate event may promote a control for a failure that happened once.",
    "bodyKn": "ಎಂದೂ ವಿಫಲವಾಗುವುದನ್ನು ನೋಡದ ನಿಯಂತ್ರಣ ಏನನ್ನೂ ಪರಿಶೀಲಿಸದಿರಬಹುದು, ಮತ್ತು ನಕಲು event ಒಮ್ಮೆ ನಡೆದ ವೈಫಲ್ಯಕ್ಕೆ ನಿಯಂತ್ರಣ ಬಡ್ತಿ ನೀಡಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the test passes, so the control works.\" A test with no assertion passed on code that was wrong.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಪರೀಕ್ಷೆ ಪಾಸ್ ಆಯಿತು, ಆದ್ದರಿಂದ ನಿಯಂತ್ರಣ ಕೆಲಸ ಮಾಡುತ್ತದೆ.\" assertion ಇಲ್ಲದ ಪರೀಕ್ಷೆ ತಪ್ಪಾದ ಕೋಡ್‌ನಲ್ಲಿ ಪಾಸ್ ಆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Durable control: a mechanism that prevents or detects a failure beyond the chat. Known-bad case: code that has the defect. Verified: fails on the bad case and passes on the good. Idempotent ingest: the same event id counts once.",
    "bodyKn": "Durable control: chat ಗಿಂತ ಹೊರತಾಗಿ ವೈಫಲ್ಯ ತಡೆಯುವ ಅಥವಾ ಪತ್ತೆ ಮಾಡುವ ವ್ಯವಸ್ಥೆ. Known-bad case: ದೋಷವಿರುವ ಕೋಡ್. Verified: ಕೆಟ್ಟದರಲ್ಲಿ ವಿಫಲ ಮತ್ತು ಒಳ್ಳೆಯದರಲ್ಲಿ ಪಾಸ್. Idempotent ingest: ಅದೇ event id ಒಮ್ಮೆ ಎಣಿಕೆಯಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Scope and schema checks ran on real values. 2) The regression test failed then passed. 3) Two fake controls were unverified. 4) A duplicate event counted once. 5) Reports missing an owner were rejected.",
    "bodyKn": "1) ವ್ಯಾಪ್ತಿ ಮತ್ತು schema ಪರಿಶೀಲನೆಗಳು ನಿಜ ಮೌಲ್ಯಗಳ ಮೇಲೆ ಓಡಿದವು. 2) regression test ವಿಫಲವಾಗಿ ನಂತರ ಪಾಸ್ ಆಯಿತು. 3) ಎರಡು ನಕಲಿ ನಿಯಂತ್ರಣ unverified. 4) ನಕಲು event ಒಮ್ಮೆ ಎಣಿಕೆಯಾಯಿತು. 5) owner ಇಲ್ಲದ ವರದಿಗಳು ತಿರಸ್ಕೃತವಾದವು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What exit code did the regression test give on buggy code?",
      "qKn": "ದೋಷಯುಕ್ತ ಕೋಡ್‌ನಲ್ಲಿ regression test ಯಾವ ನಿರ್ಗಮನ ಕೋಡ್ ನೀಡಿತು?",
      "opts": [
       "1",
       "0",
       "5",
       "2"
      ],
      "optsKn": [
       "1",
       "0",
       "5",
       "2"
      ],
      "correct": 0
     },
     {
      "q": "Why was the uncollected test unverified?",
      "qKn": "ಸಂಗ್ರಹವಾಗದ ಪರೀಕ್ಷೆ ಏಕೆ unverified ಆಯಿತು?",
      "opts": [
       "It exited 5 because no tests ran, not 1",
       "It passed",
       "It was slow",
       "It was signed"
      ],
      "optsKn": [
       "ಯಾವುದೇ ಪರೀಕ್ಷೆ ಓಡದ ಕಾರಣ ಅದು 1 ಅಲ್ಲ 5 ನಿರ್ಗಮಿಸಿತು",
       "ಅದು ಪಾಸ್ ಆಯಿತು",
       "ಅದು ನಿಧಾನ",
       "ಅದಕ್ಕೆ ಸಹಿ ಇತ್ತು"
      ],
      "correct": 0
     },
     {
      "q": "How many records were stored from three events with one repeated id?",
      "qKn": "ಒಂದು id ಪುನರಾವರ್ತಿತ ಮೂರು events ನಿಂದ ಎಷ್ಟು ದಾಖಲೆ ಸಂಗ್ರಹವಾದವು?",
      "opts": [
       "2",
       "3",
       "1",
       "0"
      ],
      "optsKn": [
       "2",
       "3",
       "1",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "Did app/registration_old.py pass against app/registration?",
      "qKn": "app/registration ವಿರುದ್ಧ app/registration_old.py ಪಾಸ್ ಆಯಿತೇ?",
      "opts": [
       "No, component matching rejected it",
       "Yes",
       "It was ignored",
       "Only on Linux"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಘಟಕ ಹೊಂದಾಣಿಕೆ ತಿರಸ್ಕರಿಸಿತು",
       "ಹೌದು",
       "ನಿರ್ಲಕ್ಷಿಸಲಾಯಿತು",
       "Linux ನಲ್ಲಿ ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "Why did the report without owner fail?",
      "qKn": "owner ಇಲ್ಲದ ವರದಿ ಏಕೆ ವಿಫಲವಾಯಿತು?",
      "opts": [
       "A required field was missing",
       "It was too long",
       "It was not signed",
       "It had two owners"
      ],
      "optsKn": [
       "ಅಗತ್ಯ ಕ್ಷೇತ್ರ ಕಾಣೆಯಾಗಿತ್ತು",
       "ತುಂಬಾ ಉದ್ದ",
       "ಸಹಿ ಇರಲಿಲ್ಲ",
       "ಎರಡು owners ಇದ್ದರು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
