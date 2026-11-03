module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321577",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Scope Contracts and Task Boundaries (Part 2 of 3) — The Verification Gate",
 "titleKn": "ವ್ಯಾಪ್ತಿ ಒಪ್ಪಂದಗಳು ಮತ್ತು ಕಾರ್ಯ ಗಡಿಗಳು (ಭಾಗ 2 / 3) — ಪರಿಶೀಲನಾ Gate",
 "desc": "Combine scope, executed acceptance evidence, approvals and a time budget into one gate and test each check against a claim it should not trust.",
 "descKn": "ವ್ಯಾಪ್ತಿ, ಓಡಿಸಿದ ಸ್ವೀಕಾರ ಸಾಕ್ಷ್ಯ, ಅನುಮೋದನೆಗಳು ಮತ್ತು ಸಮಯ ಬಜೆಟ್ ಅನ್ನು ಒಂದು gate ಆಗಿ ಸೇರಿಸಿ ಮತ್ತು ಪ್ರತಿ ಪರಿಶೀಲನೆಯನ್ನು ಅದು ನಂಬಬಾರದ ಹೇಳಿಕೆಯ ವಿರುದ್ಧ ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Classify violations as error or warning.",
  "Run acceptance commands, do not trust a list.",
  "Require approver identity.",
  "Enforce time in the runner.",
  "Explain why one combination allows."
 ],
 "objectivesKn": [
  "ಉಲ್ಲಂಘನೆಗಳನ್ನು error ಅಥವಾ warning ಎಂದು ವರ್ಗೀಕರಿಸಿ.",
  "ಸ್ವೀಕಾರ ಆದೇಶ ಓಡಿಸಿ, ಪಟ್ಟಿ ನಂಬಬೇಡಿ.",
  "ಅನುಮೋದಕರ ಗುರುತು ಬೇಕು.",
  "ಸಮಯವನ್ನು runner ನಲ್ಲಿ ಜಾರಿಗೊಳಿಸಿ.",
  "ಒಂದು ಸಂಯೋಜನೆ ಏಕೆ ಅನುಮತಿಸುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Scope Contracts and Task Boundaries (Part 2 of 3)",
    "textKn": "ವ್ಯಾಪ್ತಿ ಒಪ್ಪಂದಗಳು ಮತ್ತು ಕಾರ್ಯ ಗಡಿಗಳು (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: scope_check with severities, acceptance evidence claimed versus executed, approvals, a time budget with a real timeout and the gate truth table. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind scope contracts and task boundaries (contract, path classification, verification gate and rollback), not the real software, and the checks run on a temporary project and git repository on this machine and no language model is involved, so no real LLM behaviour is measured. The Part 2 source for this module was never pasted (only Parts 1 and 3 were), so this part is built from the behaviour those two parts describe; the pasted Part 1 says Part 2 covers the diff parser, glob matching, acceptance verification and scope_check, and the lab is our own implementation. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ತೀವ್ರತೆಗಳೊಂದಿಗೆ scope_check, ಹೇಳಿದ ಮತ್ತು ಓಡಿಸಿದ ಸ್ವೀಕಾರ ಸಾಕ್ಷ್ಯ, ಅನುಮೋದನೆಗಳು, ನಿಜ timeout ಇರುವ ಸಮಯ ಬಜೆಟ್ ಮತ್ತು gate ಸತ್ಯ ಕೋಷ್ಟಕ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ವ್ಯಾಪ್ತಿ ಒಪ್ಪಂದಗಳು ಮತ್ತು ಕಾರ್ಯ ಗಡಿಗಳು (ಒಪ್ಪಂದ, path ವರ್ಗೀಕರಣ, ಪರಿಶೀಲನಾ gate ಮತ್ತು rollback) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪರಿಶೀಲನೆಗಳು ಈ ಯಂತ್ರದ ತಾತ್ಕಾಲಿಕ ಪ್ರಾಜೆಕ್ಟ್ ಮತ್ತು git repository ಮೇಲೆ ಓಡುತ್ತವೆ ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಈ ಮಾಡ್ಯೂಲ್‌ನ ಭಾಗ 2 ಮೂಲವನ್ನು ಎಂದಿಗೂ ಅಂಟಿಸಲಾಗಿಲ್ಲ (ಭಾಗ 1 ಮತ್ತು 3 ಮಾತ್ರ), ಆದ್ದರಿಂದ ಈ ಭಾಗ ಆ ಎರಡು ಭಾಗಗಳು ವಿವರಿಸುವ ವರ್ತನೆಯಿಂದ ನಿರ್ಮಿತವಾಗಿದೆ; ಅಂಟಿಸಿದ ಭಾಗ 1 ಭಾಗ 2 diff parser, glob ಹೊಂದಾಣಿಕೆ, ಸ್ವೀಕಾರ ಪರಿಶೀಲನೆ ಮತ್ತು scope_check ಒಳಗೊಳ್ಳುತ್ತದೆ ಎಂದು ಹೇಳುತ್ತದೆ, ಮತ್ತು ಲ್ಯಾಬ್ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Detection Alone Does Not Stop Anything",
    "textKn": "ಪತ್ತೆ ಮಾತ್ರ ಏನನ್ನೂ ನಿಲ್ಲಿಸುವುದಿಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Gate That Combines Four Checks",
    "headingKn": "ನಾಲ್ಕು ಪರಿಶೀಲನೆಗಳನ್ನು ಸೇರಿಸುವ Gate",
    "bodyEn": "A scope checker that prints a warning and lets the run continue has detected a problem and enforced nothing. The verification gate combines scope, acceptance evidence, approvals and a time budget, and allows the work only if all four pass. This part runs the two demonstration runs from the lesson, then attacks each check: a claimed test pass versus a real failing test run, approval strings with no approver identity, and a time budget that is only reported after the time is spent.",
    "bodyKn": "ಎಚ್ಚರಿಕೆ ಮುದ್ರಿಸಿ ಓಟ ಮುಂದುವರಿಯಲು ಬಿಡುವ ವ್ಯಾಪ್ತಿ ಪರಿಶೀಲಕ ಸಮಸ್ಯೆ ಪತ್ತೆಹಚ್ಚಿದೆ ಆದರೆ ಏನನ್ನೂ ಜಾರಿಗೊಳಿಸಿಲ್ಲ. ಪರಿಶೀಲನಾ gate ವ್ಯಾಪ್ತಿ, ಸ್ವೀಕಾರ ಸಾಕ್ಷ್ಯ, ಅನುಮೋದನೆಗಳು ಮತ್ತು ಸಮಯ ಬಜೆಟ್ ಸೇರಿಸಿ ನಾಲ್ಕೂ ಪಾಸ್ ಆದರೆ ಮಾತ್ರ ಕೆಲಸ ಅನುಮತಿಸುತ್ತದೆ. ಈ ಭಾಗ lesson ನ ಎರಡು ಪ್ರದರ್ಶನ ಓಟಗಳನ್ನು ಓಡಿಸಿ, ನಂತರ ಪ್ರತಿ ಪರಿಶೀಲನೆಯ ಮೇಲೆ ದಾಳಿ ಮಾಡುತ್ತದೆ: ಹೇಳಿದ ಪರೀಕ್ಷಾ ಪಾಸ್ ವಿರುದ್ಧ ನಿಜ ವಿಫಲ ಪರೀಕ್ಷಾ ಓಟ, ಅನುಮೋದಕರ ಗುರುತಿಲ್ಲದ ಅನುಮೋದನೆ ಸ್ಟ್ರಿಂಗ್‌ಗಳು ಮತ್ತು ಸಮಯ ಕಳೆದ ನಂತರ ಮಾತ್ರ ವರದಿಯಾಗುವ ಸಮಯ ಬಜೆಟ್."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Four Checks, One Gate",
    "headingKn": "ನಾಲ್ಕು ಪರಿಶೀಲನೆಗಳು, ಒಂದು Gate",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Four checks, one gate</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">scope</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">files</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">acceptance</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">executed</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">approvals</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">who approved</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">ALLOW only if all</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">time budget too</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">passing tests does not outweigh a forbidden file</text></svg>",
    "captionEn": "Functional correctness does not override authorization.",
    "captionKn": "ಕಾರ್ಯಾತ್ಮಕ ಸರಿತನ ಅಧಿಕಾರವನ್ನು ಮೀರಿಸುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The four checks and their weak points",
    "headingKn": "ನಾಲ್ಕು ಪರಿಶೀಲನೆಗಳು ಮತ್ತು ಅವುಗಳ ದುರ್ಬಲ ಬಿಂದುಗಳು",
    "headers": [
     "Check",
     "Reads",
     "Weak point"
    ],
    "rows": [
     [
      "scope",
      "touched files and globs",
      "the touched list may come from the agent"
     ],
     [
      "acceptance",
      "commands recorded as passed",
      "a claim is not an execution"
     ],
     [
      "approvals",
      "requested versus approved text",
      "no approver identity"
     ],
     [
      "time budget",
      "elapsed minutes",
      "reported after the time is spent"
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
    "filename": "sc_2.py",
    "headingEn": "scope_check, the other checks and the gate",
    "headingKn": "scope_check, ಇತರ ಪರಿಶೀಲನೆಗಳು ಮತ್ತು gate",
    "descEn": "scope_check returns violations, in_scope and off_scope, with forbidden and unknown paths as errors and documentation paths as warnings. gate ANDs scope (errors zero and warnings within budget), acceptance, approvals and time, and accepts an executed acceptance result in place of the agent claim.",
    "descKn": "scope_check violations, in_scope ಮತ್ತು off_scope ಮರಳಿಸುತ್ತದೆ, ನಿಷೇಧಿತ ಮತ್ತು ಅಜ್ಞಾತ paths ದೋಷಗಳಾಗಿ ಹಾಗೂ ದಸ್ತಾವೇಜು paths ಎಚ್ಚರಿಕೆಗಳಾಗಿ. gate ವ್ಯಾಪ್ತಿ (ದೋಷ ಶೂನ್ಯ ಮತ್ತು ಎಚ್ಚರಿಕೆಗಳು ಬಜೆಟ್‌ನಲ್ಲಿ), ಸ್ವೀಕಾರ, ಅನುಮೋದನೆ ಮತ್ತು ಸಮಯ ಅನ್ನು AND ಮಾಡುತ್ತದೆ, ಮತ್ತು agent ಹೇಳಿಕೆಯ ಬದಲು ಓಡಿಸಿದ ಸ್ವೀಕಾರ ಫಲಿತಾಂಶ ಸ್ವೀಕರಿಸುತ್ತದೆ.",
    "code": "def scope_check(contract, touched):\n    violations, in_scope, off_scope = [], [], []\n    for f in touched:\n        if any(matches(f, p) for p in contract[\"forbidden_files\"]):\n            off_scope.append(f); violations.append({\"file\": f, \"reason\": \"Explicitly forbidden file\", \"severity\": \"error\"})\n        elif any(matches(f, p) for p in contract[\"allowed_files\"]):\n            in_scope.append(f)\n        else:\n            off_scope.append(f)\n            sev = \"warning\" if any(matches(f, p) for p in contract[\"warning_files\"]) else \"error\"\n            violations.append({\"file\": f, \"reason\": \"Outside allowed file patterns\", \"severity\": sev})\n    return violations, in_scope, off_scope\n\n\ndef check_acceptance(contract, commands_passed):\n    missing = [c for c in contract[\"acceptance_criteria\"] if c not in commands_passed]\n    return {\"passed\": not missing, \"missing\": missing}\n\n\ndef check_approvals(contract, requested, approved):\n    need = [a for a in requested if a in contract[\"approvals_required\"] and a not in approved]\n    return {\"passed\": not need, \"missing\": need}\n\n\ndef check_time(contract, elapsed):\n    return {\"passed\": elapsed <= contract[\"time_budget_minutes\"], \"elapsed\": elapsed}\n\n\ndef gate(contract, run, acceptance=None):\n    v, ins, off = scope_check(contract, run[\"touched\"])\n    errors = [x for x in v if x[\"severity\"] == \"error\"]\n    warns = [x for x in v if x[\"severity\"] == \"warning\"]\n    scope_ok = not errors and len(warns) <= contract[\"warning_budget\"]\n    acc = acceptance or check_acceptance(contract, run[\"commands_passed\"])\n    apv = check_approvals(contract, run[\"requested\"], run[\"approved\"])\n    tm = check_time(contract, run[\"elapsed\"])\n    return {\"verdict\": \"ALLOW\" if all([scope_ok, acc[\"passed\"], apv[\"passed\"], tm[\"passed\"]]) else \"BLOCK\", \"errors\": len(errors), \"warnings\": len(warns),\n            \"scope\": scope_ok, \"acceptance\": acc[\"passed\"], \"approvals\": apv[\"passed\"], \"time\": tm[\"passed\"]}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "sc_2.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs a compliant and a scope-creep run, executes the acceptance command in a temporary project containing a failing test, tries four approval strings, kills a sleeping command at a one-second timeout and enumerates all sixteen pass/fail combinations of the four checks.",
    "descKn": "main() ಅನುಸರಿಸುವ ಮತ್ತು ವ್ಯಾಪ್ತಿ-ಮೀರುವ ಓಟ ಓಡಿಸಿ, ವಿಫಲ ಪರೀಕ್ಷೆ ಇರುವ ತಾತ್ಕಾಲಿಕ ಪ್ರಾಜೆಕ್ಟ್‌ನಲ್ಲಿ ಸ್ವೀಕಾರ ಆದೇಶ ಓಡಿಸಿ, ನಾಲ್ಕು ಅನುಮೋದನೆ ಸ್ಟ್ರಿಂಗ್ ಪ್ರಯತ್ನಿಸಿ, ನಿದ್ರಿಸುವ ಆದೇಶವನ್ನು ಒಂದು ಸೆಕೆಂಡ್ timeout ನಲ್ಲಿ ಕೊಂದು ನಾಲ್ಕು ಪರಿಶೀಲನೆಗಳ ಎಲ್ಲಾ ಹದಿನಾರು pass/fail ಸಂಯೋಜನೆ ಎಣಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: the two demonstration runs\")\n    ok = {\"touched\": [\"src/auth/login.py\", \"tests/test_login.py\"], \"commands_passed\": [\"python -m unittest tests.test_login\"], \"requested\": [], \"approved\": [], \"elapsed\": 18}\n    creep = {\"touched\": [\"src/auth/login.py\", \"tests/test_login.py\", \"docs/login-guide.md\", \"release/deploy.sh\"], \"commands_passed\": [\"python -m unittest tests.test_login\"],\n             \"requested\": [\"production deployment\"], \"approved\": [], \"elapsed\": 18}\n    for name, run in ((\"compliant_run\", ok), (\"scope_creep_run\", creep)):\n        v, ins, off = scope_check(CONTRACT, run[\"touched\"])\n        print(name, gate(CONTRACT, run))\n        for x in v:\n            print(\"   violation:\", x[\"file\"], \"|\", x[\"reason\"], \"|\", x[\"severity\"])\n    print(\"both runs recorded the acceptance command as passed, and the second was still blocked: tests passing did not outweigh a forbidden file, a warning over a budget of 0 and a missing approval\")\n\n    section(\"2. Genuinely running: acceptance evidence, a claim versus an execution\")\n    with tempfile.TemporaryDirectory() as d:\n        (Path(d) / \"tests\").mkdir()\n        (Path(d) / \"tests\" / \"__init__.py\").write_text(\"\", encoding=\"utf-8\")\n        (Path(d) / \"tests\" / \"test_login.py\").write_text(\"import unittest\\nclass T(unittest.TestCase):\\n    def test_rejects(self):\\n        self.assertEqual(1, 2)\\n\", encoding=\"utf-8\")\n        claim = {\"touched\": [\"src/auth/login.py\"], \"commands_passed\": [\"python -m unittest tests.test_login\"], \"requested\": [], \"approved\": [], \"elapsed\": 5}\n        print(\"gate trusting the agent's list:\", gate(CONTRACT, claim)[\"verdict\"])\n        executed = []\n        for cmd in CONTRACT[\"acceptance_criteria\"]:\n            args = [sys.executable if cmd.split()[0] == \"python\" else cmd.split()[0]] + cmd.split()[1:]\n            p = subprocess.run(args, cwd=d, capture_output=True, text=True, timeout=60)\n            print(f\"executed {cmd!r}: exit {p.returncode}\")\n            if p.returncode == 0:\n                executed.append(cmd)\n        print(\"gate using executed results:\", gate(CONTRACT, claim, acceptance=check_acceptance(CONTRACT, executed))[\"verdict\"])\n    print(\"the failing test file made the real exit code non-zero, yet the self-reported list still said it passed and the first gate allowed the work; evidence has to come from the harness that ran the command, not from the agent's own summary\")\n\n    section(\"3. Genuinely running: approvals compared as plain strings\")\n    for label, approved in ((\"exact text\", [\"production deployment\"]), (\"different capitals\", [\"Production Deployment\"]), (\"trailing space\", [\"production deployment \"]), (\"approved by nobody in particular\", [\"production deployment\"])):\n        print(f\"{label:34} {check_approvals(CONTRACT, ['production deployment'], approved)}\")\n    print(\"the same intent written with capitals or a trailing space was rejected, which is safe but brittle, and the last case shows the check has no idea who approved: it only compares text, so an agent that writes its own approval string passes; real approvals need an identity and a record outside the agent's control\")\n\n    section(\"4. Genuinely running: a time budget checked after the fact versus enforced\")\n    print(\"post-run check, 45 minutes against a 30 minute budget:\", check_time(CONTRACT, 45))\n    t0 = time.time()\n    try:\n        subprocess.run([sys.executable, \"-c\", \"import time; time.sleep(30)\"], timeout=1)\n        outcome = \"finished\"\n    except subprocess.TimeoutExpired:\n        outcome = \"killed at the timeout\"\n    print(f\"enforced budget of 1 s on a 30 s command: {outcome} after {time.time() - t0:.1f} s\")\n    print(\"the post-run check can only report that the budget was exceeded after the time was spent, while a timeout in the runner stopped the command at its limit; budgets belong in the runtime, with the report as the audit record\")\n\n    section(\"5. Genuinely measuring: the gate truth table\")\n    results = {}\n    for combo in itertools.product([True, False], repeat=4):\n        results[combo] = all(combo)\n    print(\"combinations of scope/acceptance/approvals/time:\", len(results), \"| ALLOW:\", sum(results.values()), \"| BLOCK:\", len(results) - sum(results.values()))\n    print(\"exactly one of the sixteen combinations allows the work, so adding another check can only block more, never allow more; that is also why a missing check silently widens the gate\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the two demonstration runs ---\ncompliant_run {'verdict': 'ALLOW', 'errors': 0, 'warnings': 0, 'scope': True, 'acceptance': True, 'approvals': True, 'time': True}\nscope_creep_run {'verdict': 'BLOCK', 'errors': 1, 'warnings': 1, 'scope': False, 'acceptance': True, 'approvals': False, 'time': True}\n   violation: docs/login-guide.md | Outside allowed file patterns | warning\n   violation: release/deploy.sh | Explicitly forbidden file | error\nboth runs recorded the acceptance command as passed, and the second was still blocked: tests passing did not outweigh a forbidden file, a warning over a budget of 0 and a missing approval\n\n--- 2. Genuinely running: acceptance evidence, a claim versus an execution ---\ngate trusting the agent's list: ALLOW\nexecuted 'python -m unittest tests.test_login': exit 1\ngate using executed results: BLOCK\nthe failing test file made the real exit code non-zero, yet the self-reported list still said it passed and the first gate allowed the work; evidence has to come from the harness that ran the command, not from the agent's own summary\n\n--- 3. Genuinely running: approvals compared as plain strings ---\nexact text                         {'passed': True, 'missing': []}\ndifferent capitals                 {'passed': False, 'missing': ['production deployment']}\ntrailing space                     {'passed': False, 'missing': ['production deployment']}\napproved by nobody in particular   {'passed': True, 'missing': []}\nthe same intent written with capitals or a trailing space was rejected, which is safe but brittle, and the last case shows the check has no idea who approved: it only compares text, so an agent that writes its own approval string passes; real approvals need an identity and a record outside the agent's control\n\n--- 4. Genuinely running: a time budget checked after the fact versus enforced ---\npost-run check, 45 minutes against a 30 minute budget: {'passed': False, 'elapsed': 45}\nenforced budget of 1 s on a 30 s command: killed at the timeout after 1.0 s\nthe post-run check can only report that the budget was exceeded after the time was spent, while a timeout in the runner stopped the command at its limit; budgets belong in the runtime, with the report as the audit record\n\n--- 5. Genuinely measuring: the gate truth table ---\ncombinations of scope/acceptance/approvals/time: 16 | ALLOW: 1 | BLOCK: 15\nexactly one of the sixteen combinations allows the work, so adding another check can only block more, never allow more; that is also why a missing check silently widens the gate"
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
    "headingEn": "Genuinely Found: Tests Passing Did Not Outweigh a Forbidden File",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪರೀಕ್ಷೆ ಪಾಸ್ ಆದರೂ ನಿಷೇಧಿತ ಫೈಲ್ ಮೀರಿಸಲಿಲ್ಲ",
    "bodyEn": "Section 1: the compliant run was ALLOW. The scope-creep run was BLOCK with one error (release/deploy.sh, explicitly forbidden), one warning (docs/login-guide.md, outside the allowed patterns), approvals failed and acceptance true. Section 2: a gate that trusted the agent's list of passed commands said ALLOW for a project whose test file fails; running the command really exited 1, and the gate using that executed result said BLOCK.",
    "bodyKn": "ವಿಭಾಗ 1: ಅನುಸರಿಸುವ ಓಟ ALLOW ಆಗಿತ್ತು. ವ್ಯಾಪ್ತಿ-ಮೀರುವ ಓಟ ಒಂದು ದೋಷ (release/deploy.sh, ಸ್ಪಷ್ಟವಾಗಿ ನಿಷೇಧಿತ), ಒಂದು ಎಚ್ಚರಿಕೆ (docs/login-guide.md, ಅನುಮತಿಸಿದ ಮಾದರಿಗಳ ಹೊರಗೆ) ಇರುವ BLOCK ಆಗಿತ್ತು, ಅನುಮೋದನೆಗಳು ವಿಫಲ ಮತ್ತು ಸ್ವೀಕಾರ true. ವಿಭಾಗ 2: agent ಪಾಸ್ ಆದ ಆದೇಶಗಳ ಪಟ್ಟಿಯನ್ನು ನಂಬಿದ gate ವಿಫಲ ಪರೀಕ್ಷಾ ಫೈಲ್ ಇರುವ ಪ್ರಾಜೆಕ್ಟ್‌ಗೆ ALLOW ಎಂದಿತು; ಆದೇಶ ನಿಜವಾಗಿ ಓಡಿಸಿದಾಗ 1 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸಿತು, ಮತ್ತು ಆ ಓಡಿಸಿದ ಫಲಿತಾಂಶ ಬಳಸಿದ gate BLOCK ಎಂದಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Approvals Are Strings and Budgets Are Reports",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅನುಮೋದನೆಗಳು ಸ್ಟ್ರಿಂಗ್‌ಗಳು ಮತ್ತು ಬಜೆಟ್‌ಗಳು ವರದಿಗಳು",
    "bodyEn": "Section 3: \"production deployment\" matched exactly; different capitals and a trailing space were rejected, and an approval string with no approver identity passed. Section 4: 45 minutes against a 30-minute budget failed only after the fact, while a one-second timeout killed a 30-second command after 1.0 s. Section 5: of sixteen pass/fail combinations of the four checks exactly one allows the work.",
    "bodyKn": "ವಿಭಾಗ 3: \"production deployment\" ನಿಖರವಾಗಿ ಹೊಂದಿತು; ಬೇರೆ ದೊಡ್ಡಕ್ಷರಗಳು ಮತ್ತು ಕೊನೆಯ ಖಾಲಿಸ್ಥಳ ತಿರಸ್ಕೃತವಾದವು, ಮತ್ತು ಅನುಮೋದಕರ ಗುರುತಿಲ್ಲದ ಅನುಮೋದನೆ ಸ್ಟ್ರಿಂಗ್ ಪಾಸ್ ಆಯಿತು. ವಿಭಾಗ 4: 30-ನಿಮಿಷ ಬಜೆಟ್ ವಿರುದ್ಧ 45 ನಿಮಿಷ ಘಟನೆಯ ನಂತರ ಮಾತ್ರ ವಿಫಲವಾಯಿತು, ಒಂದು-ಸೆಕೆಂಡ್ timeout 30-ಸೆಕೆಂಡ್ ಆದೇಶವನ್ನು 1.0 s ನಂತರ ಕೊಂದಿತು. ವಿಭಾಗ 5: ನಾಲ್ಕು ಪರಿಶೀಲನೆಗಳ ಹದಿನಾರು pass/fail ಸಂಯೋಜನೆಗಳಲ್ಲಿ ನಿಖರವಾಗಿ ಒಂದು ಕೆಲಸ ಅನುಮತಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "The gate is only as strong as the evidence behind each input: executed results, a real approver and a runtime-enforced budget are what separate a gate from a printout.",
    "bodyKn": "ಪ್ರತಿ ಇನ್‌ಪುಟ್ ಹಿಂದಿನ ಸಾಕ್ಷ್ಯದಷ್ಟೇ gate ಬಲಿಷ್ಠ: ಓಡಿಸಿದ ಫಲಿತಾಂಶಗಳು, ನಿಜ ಅನುಮೋದಕ ಮತ್ತು runtime ಜಾರಿಗೊಳಿಸುವ ಬಜೆಟ್ gate ಅನ್ನು ಮುದ್ರಣದಿಂದ ಬೇರ್ಪಡಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the tests passed, so the task is fine.\" A blocked run had its acceptance command recorded as passed.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಪರೀಕ್ಷೆಗಳು ಪಾಸ್ ಆದವು, ಆದ್ದರಿಂದ ಕಾರ್ಯ ಸರಿ.\" ತಡೆಯಲ್ಪಟ್ಟ ಓಟದ ಸ್ವೀಕಾರ ಆದೇಶ ಪಾಸ್ ಎಂದು ದಾಖಲಾಗಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Verification gate: the checkpoint that decides ALLOW or BLOCK. Violation severity: error blocks, warning counts against a budget. Acceptance evidence: an exit code recorded by the harness. Approval: a human decision with an identity. Timeout: a limit enforced while the command runs.",
    "bodyKn": "Verification gate: ALLOW ಅಥವಾ BLOCK ನಿರ್ಧರಿಸುವ ಪರಿಶೀಲನಾ ಕೇಂದ್ರ. Violation severity: error ತಡೆಯುತ್ತದೆ, warning ಬಜೆಟ್ ವಿರುದ್ಧ ಎಣಿಕೆಯಾಗುತ್ತದೆ. Acceptance evidence: harness ದಾಖಲಿಸಿದ exit code. Approval: ಗುರುತಿರುವ ಮಾನವ ನಿರ್ಧಾರ. Timeout: ಆದೇಶ ಓಡುತ್ತಿರುವಾಗ ಜಾರಿಯಾಗುವ ಮಿತಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The compliant run was ALLOW and the scope-creep run BLOCK with one error and one warning. 2) A claimed test pass gave ALLOW while the real run exited 1. 3) Capitals or a trailing space broke an approval and a bare string passed with no identity. 4) A timeout killed a command at 1.0 s where a post-run check only reported. 5) One of sixteen combinations allows.",
    "bodyKn": "1) ಅನುಸರಿಸುವ ಓಟ ALLOW ಮತ್ತು ವ್ಯಾಪ್ತಿ-ಮೀರುವ ಓಟ ಒಂದು ದೋಷ ಹಾಗೂ ಒಂದು ಎಚ್ಚರಿಕೆಯೊಂದಿಗೆ BLOCK. 2) ಹೇಳಿದ ಪರೀಕ್ಷಾ ಪಾಸ್ ALLOW ನೀಡಿತು ಆದರೆ ನಿಜ ಓಟ 1 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸಿತು. 3) ದೊಡ್ಡಕ್ಷರ ಅಥವಾ ಕೊನೆಯ ಖಾಲಿಸ್ಥಳ ಅನುಮೋದನೆ ಮುರಿದವು ಮತ್ತು ಬರೀ ಸ್ಟ್ರಿಂಗ್ ಗುರುತಿಲ್ಲದೆ ಪಾಸ್ ಆಯಿತು. 4) timeout ಆದೇಶವನ್ನು 1.0 s ನಲ್ಲಿ ಕೊಂದಿತು, ಆದರೆ post-run ಪರಿಶೀಲನೆ ವರದಿ ಮಾತ್ರ ಮಾಡಿತು. 5) ಹದಿನಾರರಲ್ಲಿ ಒಂದು ಸಂಯೋಜನೆ ಅನುಮತಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What was the verdict for the scope-creep run?",
      "qKn": "ವ್ಯಾಪ್ತಿ-ಮೀರುವ ಓಟದ ತೀರ್ಪು ಏನು?",
      "opts": [
       "ALLOW",
       "BLOCK",
       "WARN",
       "SKIP"
      ],
      "optsKn": [
       "ALLOW",
       "BLOCK",
       "WARN",
       "SKIP"
      ],
      "correct": 1
     },
     {
      "q": "What exit code did the real acceptance command return for the failing test?",
      "qKn": "ವಿಫಲ ಪರೀಕ್ಷೆಗೆ ನಿಜ ಸ್ವೀಕಾರ ಆದೇಶ ಯಾವ exit code ಮರಳಿಸಿತು?",
      "opts": [
       "0",
       "1",
       "3",
       "5"
      ],
      "optsKn": [
       "0",
       "1",
       "3",
       "5"
      ],
      "correct": 1
     },
     {
      "q": "What happened to an approval string with different capitals?",
      "qKn": "ಬೇರೆ ದೊಡ್ಡಕ್ಷರಗಳ ಅನುಮೋದನೆ ಸ್ಟ್ರಿಂಗ್‌ಗೆ ಏನಾಯಿತು?",
      "opts": [
       "Rejected",
       "Accepted",
       "Deleted",
       "Ignored"
      ],
      "optsKn": [
       "ತಿರಸ್ಕೃತ",
       "ಸ್ವೀಕೃತ",
       "ಅಳಿಸಲಾಯಿತು",
       "ನಿರ್ಲಕ್ಷಿಸಲಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "After how long did the one-second timeout stop the 30-second command?",
      "qKn": "ಒಂದು-ಸೆಕೆಂಡ್ timeout 30-ಸೆಕೆಂಡ್ ಆದೇಶವನ್ನು ಎಷ್ಟು ಹೊತ್ತಿನ ನಂತರ ನಿಲ್ಲಿಸಿತು?",
      "opts": [
       "About 1.0 s",
       "30 s",
       "45 minutes",
       "Never"
      ],
      "optsKn": [
       "ಸುಮಾರು 1.0 s",
       "30 s",
       "45 ನಿಮಿಷ",
       "ಎಂದಿಗೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "How many of the sixteen check combinations allowed the work?",
      "qKn": "ಹದಿನಾರು ಪರಿಶೀಲನಾ ಸಂಯೋಜನೆಗಳಲ್ಲಿ ಎಷ್ಟು ಕೆಲಸ ಅನುಮತಿಸಿದವು?",
      "opts": [
       "1",
       "4",
       "8",
       "16"
      ],
      "optsKn": [
       "1",
       "4",
       "8",
       "16"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
