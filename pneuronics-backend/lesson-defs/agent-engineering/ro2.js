module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215ec",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Role Specialization: Planner, Critic, Executor, Verifier (Part 2 of 3) — Contracts, Permissions and a Bounded Loop",
 "titleKn": "ಪಾತ್ರ ವಿಶೇಷೀಕರಣ: Planner, Critic, Executor, Verifier (ಭಾಗ 2 / 3) — ಒಪ್ಪಂದಗಳು, ಅನುಮತಿಗಳು ಮತ್ತು ಮಿತಿಯ ಲೂಪ್",
 "desc": "Freeze a plan, enforce role permissions, parse code with an AST critic and run a bounded revision loop.",
 "descKn": "ಯೋಜನೆ ಘನೀಕರಿಸಿ, ಪಾತ್ರ ಅನುಮತಿ ಜಾರಿ ಮಾಡಿ, AST critic ನಿಂದ ಕೋಡ್ ಪಾರ್ಸ್ ಮಾಡಿ ಮತ್ತು ಮಿತಿಯ ಪರಿಷ್ಕರಣೆ ಲೂಪ್ ಓಡಿಸಿ.",
 "objectives": [
  "Freeze a plan.",
  "Enforce permissions.",
  "Parse with AST.",
  "Bound the loop.",
  "Save a trace."
 ],
 "objectivesKn": [
  "ಯೋಜನೆ ಘನೀಕರಿಸಿ.",
  "ಅನುಮತಿ ಜಾರಿ ಮಾಡಿ.",
  "AST ನಿಂದ ಪಾರ್ಸ್ ಮಾಡಿ.",
  "ಲೂಪ್‌ಗೆ ಮಿತಿ ಇಡಿ.",
  "ಜಾಡು ಉಳಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Role Specialization: Planner, Critic, Executor, Verifier (Part 2 of 3)",
    "textKn": "ಪಾತ್ರ ವಿಶೇಷೀಕರಣ: Planner, Critic, Executor, Verifier (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: a frozen plan, a role permission table, an AST critic, a verification report, a bounded revision loop, repeated-artifact detection and a JSON trace. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind a four-role workflow (planner, executor, critic, verifier), a critic that accepts wrong code while tests reject it, permissions, an AST critic, a bounded revision loop, a restricted verifier, a state machine ending at awaiting approval, specialist reviewers and reliability metrics, not the real software, and every role is a deterministic scripted function, the revisions are chosen by attempt number, exec runs fixed trusted code only, the restricted evaluator handles one tiny function shape and no model or real reviewer is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. MetaGPT, ChatDev, MAST and the framework mappings are described in the lesson and were not run or checked against their sources. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಬದಲಾಗದ ಯೋಜನೆ, ಪಾತ್ರ ಅನುಮತಿ ಕೋಷ್ಟಕ, AST critic, ಪರಿಶೀಲನೆ ವರದಿ, ಮಿತಿಯ ಪರಿಷ್ಕರಣೆ ಲೂಪ್, ಪುನರಾವರ್ತಿತ ಕೃತಿ ಪತ್ತೆ ಮತ್ತು JSON ಜಾಡು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ನಾಲ್ಕು-ಪಾತ್ರದ ಕೆಲಸದ ಹರಿವು (planner, executor, critic, verifier), ತಪ್ಪು ಕೋಡ್ ಒಪ್ಪುವ critic ಮತ್ತು ಅದನ್ನು ತಿರಸ್ಕರಿಸುವ ಪರೀಕ್ಷೆಗಳು, ಅನುಮತಿಗಳು, AST critic, ಮಿತಿಯ ಪರಿಷ್ಕರಣೆ ಲೂಪ್, ನಿರ್ಬಂಧಿತ ಪರಿಶೀಲಕ, ಅನುಮೋದನೆಗಾಗಿ ಕಾಯುವುದರಲ್ಲಿ ಮುಗಿಯುವ ಸ್ಥಿತಿ ಯಂತ್ರ, ವಿಶೇಷ ವಿಮರ್ಶಕರು ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹತೆ ಮಾಪನಗಳು ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪ್ರತಿ ಪಾತ್ರ ನಿರ್ಧಾರಿತ ಸ್ಕ್ರಿಪ್ಟ್ ಕಾರ್ಯ, ಪರಿಷ್ಕರಣೆಗಳನ್ನು ಪ್ರಯತ್ನ ಸಂಖ್ಯೆಯಿಂದ ಆರಿಸಲಾಗುತ್ತದೆ, exec ನಿಗದಿತ ನಂಬಿಕಸ್ಥ ಕೋಡ್ ಮಾತ್ರ ಓಡಿಸುತ್ತದೆ, ನಿರ್ಬಂಧಿತ evaluator ಒಂದು ಚಿಕ್ಕ ಕಾರ್ಯ ಆಕಾರ ನಿಭಾಯಿಸುತ್ತದೆ ಮತ್ತು ಯಾವ ಮಾದರಿ ಅಥವಾ ನಿಜ ವಿಮರ್ಶಕನೂ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ನೀಡಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. MetaGPT, ChatDev, MAST ಮತ್ತು framework ಹೋಲಿಕೆಗಳು lesson ನಲ್ಲಿ ವಿವರಿಸಲ್ಪಟ್ಟಿವೆ ಮತ್ತು ಓಡಿಸಲಾಗಿಲ್ಲ ಅಥವಾ ಮೂಲಗಳೊಂದಿಗೆ ಪರಿಶೀಲಿಸಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Structure, Permissions and a Loop That Stops",
    "textKn": "ರಚನೆ, ಅನುಮತಿಗಳು ಮತ್ತು ನಿಲ್ಲುವ ಲೂಪ್",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Contracts, an AST Critic and Bounded Revision",
    "headingKn": "ಒಪ್ಪಂದಗಳು, AST Critic ಮತ್ತು ಮಿತಿಯ ಪರಿಷ್ಕರಣೆ",
    "bodyEn": "Part 1 used string checks and a single pass. This part freezes the plan so an executor cannot edit it, denies actions outside a role, replaces the string critic with one that parses the code, reports each test with expected and actual values, and wraps the roles in a revision loop with an attempt budget and a repeated-artifact check. It ends by saving the trace as JSON and loading it again.",
    "bodyKn": "Part 1 ಸ್ಟ್ರಿಂಗ್ ಪರಿಶೀಲನೆ ಮತ್ತು ಒಂದು ಹಾದಿ ಬಳಸಿತು. ಈ ಭಾಗ executor ತಿದ್ದದಂತೆ ಯೋಜನೆಯನ್ನು ಘನೀಕರಿಸುತ್ತದೆ, ಪಾತ್ರದ ಹೊರಗಿನ ಕ್ರಿಯೆಗಳನ್ನು ನಿರಾಕರಿಸುತ್ತದೆ, ಸ್ಟ್ರಿಂಗ್ critic ಬದಲು ಕೋಡ್ ಪಾರ್ಸ್ ಮಾಡುವ ಒಂದನ್ನು ಇಡುತ್ತದೆ, ಪ್ರತಿ ಪರೀಕ್ಷೆಯನ್ನು ನಿರೀಕ್ಷಿತ ಮತ್ತು ವಾಸ್ತವ ಮೌಲ್ಯಗಳೊಂದಿಗೆ ವರದಿ ಮಾಡುತ್ತದೆ, ಮತ್ತು ಪಾತ್ರಗಳನ್ನು ಪ್ರಯತ್ನ ಬಜೆಟ್ ಮತ್ತು ಪುನರಾವರ್ತಿತ-ಕೃತಿ ಪರಿಶೀಲನೆಯ ಪರಿಷ್ಕರಣೆ ಲೂಪ್‌ನಲ್ಲಿ ಸುತ್ತುತ್ತದೆ. ಕೊನೆಯಲ್ಲಿ ಜಾಡನ್ನು JSON ಆಗಿ ಉಳಿಸಿ ಮತ್ತೆ ಲೋಡ್ ಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Contracts and Loops",
    "headingKn": "ಒಪ್ಪಂದಗಳು ಮತ್ತು ಲೂಪ್‌ಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a loop needs a budget, a record and a way to see no change</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">contract</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">frozen plan</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">permissions</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">per role</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">revision</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">bounded loop</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">trace</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">hash + decisions</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a loop needs a budget, a record and a way to see no change</text></svg>",
    "captionEn": "A frozen plan, enforced permissions and a loop that stops.",
    "captionKn": "ಬದಲಾಗದ ಯೋಜನೆ, ಜಾರಿಯ ಅನುಮತಿಗಳು ಮತ್ತು ನಿಲ್ಲುವ ಲೂಪ್."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The six experiments",
    "headingKn": "ಆರು ಪ್ರಯೋಗಗಳು",
    "headers": [
     "Experiment",
     "What it checks"
    ],
    "rows": [
     [
      "frozen plan and permissions",
      "edit refused, crossing roles denied"
     ],
     [
      "AST critic",
      "five code variants"
     ],
     [
      "verification report",
      "expected against actual per test"
     ],
     [
      "revision loop",
      "fail then pass in 2 attempts"
     ],
     [
      "stall and budget",
      "same artifact and three different wrong ones"
     ],
     [
      "JSON trace",
      "save and reload"
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
    "filename": "ro_2.py",
    "headingEn": "Permissions and the AST critic",
    "headingKn": "ಅನುಮತಿಗಳು ಮತ್ತು AST critic",
    "descEn": "authorize denies actions outside a role, Plan is frozen, and ast_critic parses the code and checks the name, the parameters and a return.",
    "descKn": "authorize ಪಾತ್ರದ ಹೊರಗಿನ ಕ್ರಿಯೆಗಳನ್ನು ನಿರಾಕರಿಸುತ್ತದೆ, Plan ಘನೀಕೃತ, ಮತ್ತು ast_critic ಕೋಡ್ ಪಾರ್ಸ್ ಮಾಡಿ ಹೆಸರು, ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು ಮತ್ತು return ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    "code": "class PermissionDenied(Exception):\n    pass\n\n\ndef authorize(role, action):\n    if action not in ALLOWED.get(role, set()):\n        raise PermissionDenied(f\"{role} cannot {action}\")\n\n\n@dataclass(frozen=True)\nclass Plan:\n    function_name: str\n    parameter: str\n    cases: tuple\n\n\nPLAN = Plan(\"double\", \"number\", ((\"positive_two\", 2, 4), (\"positive_five\", 5, 10), (\"zero\", 0, 0), (\"negative_three\", -3, -6)))\n\n\ndef ast_critic(plan, code):\n    authorize(\"critic\", \"inspect_ast\")\n    try:\n        tree = ast.parse(code)\n    except SyntaxError as e:\n        return {\"accepted\": False, \"reasons\": [f\"syntax error: {e.msg}\"]}\n    fns = [n for n in tree.body if isinstance(n, ast.FunctionDef)]\n    reasons = []\n    if not any(f.name == plan.function_name for f in fns):\n        reasons.append(\"function name missing\")\n    else:\n        f = [f for f in fns if f.name == plan.function_name][0]\n        if [a.arg for a in f.args.args] != [plan.parameter]:\n            reasons.append(\"parameter list differs\")\n        if not any(isinstance(n, ast.Return) for n in ast.walk(f)):\n            reasons.append(\"no return statement\")\n    return {\"accepted\": not reasons, \"reasons\": reasons or [\"structure matches the plan\"]}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ro_2.py",
    "headingEn": "The revision loop",
    "headingKn": "ಪರಿಷ್ಕರಣೆ ಲೂಪ್",
    "descEn": "revision_loop runs critic and verifier per attempt, records a hash, and stops on success, on a repeated hash or when the budget ends.",
    "descKn": "revision_loop ಪ್ರತಿ ಪ್ರಯತ್ನಕ್ಕೆ critic ಮತ್ತು verifier ಓಡಿಸಿ, hash ದಾಖಲಿಸಿ, ಯಶಸ್ಸು, ಪುನರಾವರ್ತಿತ hash ಅಥವಾ ಬಜೆಟ್ ಮುಗಿದಾಗ ನಿಲ್ಲುತ್ತದೆ.",
    "code": "def digest(code):\n    return hashlib.sha256(code.encode()).hexdigest()[:12]\n\n\nSCRIPT = [\"def double(number):\\n    return number + 2\\n\", \"def double(number):\\n    return number * 2\\n\"]\n\n\ndef revision_loop(plan, script, max_attempts=3):\n    trace, seen = [], set()\n    for n in range(1, max_attempts + 1):\n        code = script[min(n - 1, len(script) - 1)]\n        h = digest(code)\n        crit, ver = ast_critic(plan, code), run_tests(plan, code)\n        rec = {\"attempt\": n, \"hash\": h, \"critic\": crit[\"accepted\"], \"verifier\": ver[\"passed\"], \"failed\": [r[\"test\"] for r in ver[\"results\"] if not r[\"passed\"]]}\n        trace.append(rec)\n        if crit[\"accepted\"] and ver[\"passed\"]:\n            return {\"status\": \"ACCEPTED\", \"attempts\": n, \"trace\": trace}\n        if h in seen:\n            return {\"status\": \"STOPPED_REPEATED_ARTIFACT\", \"attempts\": n, \"trace\": trace}\n        seen.add(h)\n    return {\"status\": \"BUDGET_EXHAUSTED\", \"attempts\": max_attempts, \"trace\": trace}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ro_2.py",
    "headingEn": "The experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the six experiments in order and prints the real result of each.",
    "descKn": "main() ಆರು ಪ್ರಯೋಗಗಳನ್ನು ಕ್ರಮವಾಗಿ ಓಡಿಸಿ ಪ್ರತಿಯೊಂದರ ನಿಜ ಫಲಿತಾಂಶ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: a plan that cannot be edited and roles that cannot cross\")\n    try:\n        PLAN.function_name = \"hack\"\n    except FrozenInstanceError as e:\n        print(\"edit the plan:\", type(e).__name__)\n    for role, act in ((\"critic\", \"write_source\"), (\"executor\", \"run_tests\"), (\"verifier\", \"write_source\"), (\"ghost\", \"run_tests\")):\n        try:\n            authorize(role, act)\n            print(role, act, \"-> allowed\")\n        except PermissionDenied as e:\n            print(role, act, \"-> denied:\", e)\n    print(\"a frozen plan refuses attribute assignment and the permission table denies a critic writing source, an executor running its own tests and an unknown role, so an executor cannot weaken the acceptance criteria through these paths; the check only works if every tool call really goes through authorize, which this lab does not enforce for anything outside its own functions.\")\n\n    section(\"2. Genuinely running: what an AST critic can and cannot see\")\n    for label, code in ((\"correct\", SCRIPT[1]), (\"wrong formula\", SCRIPT[0]), (\"renamed parameter\", \"def double(n):\\n    return n * 2\\n\"), (\"syntax error\", \"def double(number)\\n    return number * 2\\n\"), (\"no return\", \"def double(number):\\n    pass\\n\")):\n        print(f\"{label}: {ast_critic(PLAN, code)}\")\n    print(\"the AST critic rejects a renamed parameter, a syntax error and a missing return, each with its own reason, and it still accepts the wrong formula number + 2, because it inspects structure and cannot evaluate behaviour; syntax validation and behavioural verification are different checks.\")\n\n    section(\"3. Genuinely running: the verification report\")\n    rep = run_tests(PLAN, SCRIPT[0])\n    for r in rep[\"results\"]:\n        print(f\"{'PASS' if r['passed'] else 'FAIL'} {r['test']:<15} expected={r['expected']:<3} actual={r['actual']}\")\n    print(\"passed:\", rep[\"passed\"])\n    print(\"each result names the test, the expected value and the actual value, so a failing run says what failed instead of returning only False, and the same record can be fed back to an executor or stored; the four test cases are chosen by hand and a passing report would only mean those four held.\")\n\n    section(\"4. Genuinely running: a bounded revision loop\")\n    out = revision_loop(PLAN, SCRIPT)\n    print(\"status:\", out[\"status\"], \"| attempts:\", out[\"attempts\"])\n    for t in out[\"trace\"]:\n        print(t)\n    print(\"the first attempt fails three tests while the critic accepts it and the second attempt passes, so the loop ends ACCEPTED after 2 attempts; the revision is scripted by attempt number, so this shows the loop and its record and does not show that a model could read the failures and produce the fix.\")\n\n    section(\"5. Genuinely running: stopping when nothing changes\")\n    stuck = revision_loop(PLAN, [SCRIPT[0]], max_attempts=3)\n    print(\"same wrong artifact every time:\", stuck[\"status\"], \"| attempts:\", stuck[\"attempts\"], \"| hashes:\", [t[\"hash\"] for t in stuck[\"trace\"]])\n    budget = revision_loop(PLAN, [SCRIPT[0], \"def double(number):\\n    return number + 3\\n\", \"def double(number):\\n    return number + 4\\n\"], max_attempts=3)\n    print(\"three different wrong artifacts:\", budget[\"status\"], \"| attempts:\", budget[\"attempts\"])\n    print(\"an identical artifact on the second attempt stops the loop after 2 attempts without waiting for the budget, whereas three different wrong artifacts use the whole budget of 3 and end BUDGET_EXHAUSTED; a repeated hash shows that nothing changed and says nothing about why.\")\n\n    section(\"6. Genuinely computing: a machine-readable trace\")\n    text = json.dumps(out, indent=1)\n    back = json.loads(text)\n    print(\"lines:\", len(text.splitlines()), \"| round trip equal:\", back == out, \"| keys:\", sorted(back))\n    print(\"the trace holds the attempt number, a hash of the artifact, both decisions and the names of the failing tests, and survives a save and reload unchanged; a hash of twelve characters is enough to tell artifacts apart in this demo and is not a security control.\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a plan that cannot be edited and roles that cannot cross ---\nedit the plan: FrozenInstanceError\ncritic write_source -> denied: critic cannot write_source\nexecutor run_tests -> denied: executor cannot run_tests\nverifier write_source -> denied: verifier cannot write_source\nghost run_tests -> denied: ghost cannot run_tests\na frozen plan refuses attribute assignment and the permission table denies a critic writing source, an executor running its own tests and an unknown role, so an executor cannot weaken the acceptance criteria through these paths; the check only works if every tool call really goes through authorize, which this lab does not enforce for anything outside its own functions.\n\n--- 2. Genuinely running: what an AST critic can and cannot see ---\ncorrect: {'accepted': True, 'reasons': ['structure matches the plan']}\nwrong formula: {'accepted': True, 'reasons': ['structure matches the plan']}\nrenamed parameter: {'accepted': False, 'reasons': ['parameter list differs']}\nsyntax error: {'accepted': False, 'reasons': [\"syntax error: expected ':'\"]}\nno return: {'accepted': False, 'reasons': ['no return statement']}\nthe AST critic rejects a renamed parameter, a syntax error and a missing return, each with its own reason, and it still accepts the wrong formula number + 2, because it inspects structure and cannot evaluate behaviour; syntax validation and behavioural verification are different checks.\n\n--- 3. Genuinely running: the verification report ---\nPASS positive_two    expected=4   actual=4\nFAIL positive_five   expected=10  actual=7\nFAIL zero            expected=0   actual=2\nFAIL negative_three  expected=-6  actual=-1\npassed: False\neach result names the test, the expected value and the actual value, so a failing run says what failed instead of returning only False, and the same record can be fed back to an executor or stored; the four test cases are chosen by hand and a passing report would only mean those four held.\n\n--- 4. Genuinely running: a bounded revision loop ---\nstatus: ACCEPTED | attempts: 2\n{'attempt': 1, 'hash': '3ec4b63e5570', 'critic': True, 'verifier': False, 'failed': ['positive_five', 'zero', 'negative_three']}\n{'attempt': 2, 'hash': '357456db6c79', 'critic': True, 'verifier': True, 'failed': []}\nthe first attempt fails three tests while the critic accepts it and the second attempt passes, so the loop ends ACCEPTED after 2 attempts; the revision is scripted by attempt number, so this shows the loop and its record and does not show that a model could read the failures and produce the fix.\n\n--- 5. Genuinely running: stopping when nothing changes ---\nsame wrong artifact every time: STOPPED_REPEATED_ARTIFACT | attempts: 2 | hashes: ['3ec4b63e5570', '3ec4b63e5570']\nthree different wrong artifacts: BUDGET_EXHAUSTED | attempts: 3\nan identical artifact on the second attempt stops the loop after 2 attempts without waiting for the budget, whereas three different wrong artifacts use the whole budget of 3 and end BUDGET_EXHAUSTED; a repeated hash shows that nothing changed and says nothing about why.\n\n--- 6. Genuinely computing: a machine-readable trace ---\nlines: 24 | round trip equal: True | keys: ['attempts', 'status', 'trace']\nthe trace holds the attempt number, a hash of the artifact, both decisions and the names of the failing tests, and survives a save and reload unchanged; a hash of twelve characters is enough to tell artifacts apart in this demo and is not a security control."
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
    "headingEn": "Experiment 1: A plan that cannot be edited and roles that cannot cross",
    "headingKn": "ಪ್ರಯೋಗ 1: A plan that cannot be edited and roles that cannot cross",
    "bodyEn": "What it ran: A plan that cannot be edited and roles that cannot cross. What the lab concluded: a frozen plan refuses attribute assignment and the permission table denies a critic writing source, an executor running its own tests and an unknown role, so an executor cannot weaken the acceptance criteria through these paths; the check only works if every tool call really goes through authorize, which this lab does not enforce for anything outside its own functions.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A plan that cannot be edited and roles that cannot cross. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a frozen plan refuses attribute assignment and the permission table denies a critic writing source, an executor running its own tests and an unknown role, so an executor cannot weaken the acceptance criteria through these paths; the check only works if every tool call really goes through authorize, which this lab does not enforce for anything outside its own functions."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: a plan that cannot be edited and roles that cannot cross ---\nedit the plan: FrozenInstanceError\ncritic write_source -> denied: critic cannot write_source\nexecutor run_tests -> denied: executor cannot run_tests\nverifier write_source -> denied: verifier cannot write_source\nghost run_tests -> denied: ghost cannot run_tests"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: What an AST critic can and cannot see",
    "headingKn": "ಪ್ರಯೋಗ 2: What an AST critic can and cannot see",
    "bodyEn": "What it ran: What an AST critic can and cannot see. What the lab concluded: the AST critic rejects a renamed parameter, a syntax error and a missing return, each with its own reason, and it still accepts the wrong formula number + 2, because it inspects structure and cannot evaluate behaviour; syntax validation and behavioural verification are different checks.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: What an AST critic can and cannot see. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the AST critic rejects a renamed parameter, a syntax error and a missing return, each with its own reason, and it still accepts the wrong formula number + 2, because it inspects structure and cannot evaluate behaviour; syntax validation and behavioural verification are different checks."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: what an AST critic can and cannot see ---\ncorrect: {'accepted': True, 'reasons': ['structure matches the plan']}\nwrong formula: {'accepted': True, 'reasons': ['structure matches the plan']}\nrenamed parameter: {'accepted': False, 'reasons': ['parameter list differs']}\nsyntax error: {'accepted': False, 'reasons': [\"syntax error: expected ':'\"]}\nno return: {'accepted': False, 'reasons': ['no return statement']}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: The verification report",
    "headingKn": "ಪ್ರಯೋಗ 3: The verification report",
    "bodyEn": "What it ran: The verification report. What the lab concluded: each result names the test, the expected value and the actual value, so a failing run says what failed instead of returning only False, and the same record can be fed back to an executor or stored; the four test cases are chosen by hand and a passing report would only mean those four held.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The verification report. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each result names the test, the expected value and the actual value, so a failing run says what failed instead of returning only False, and the same record can be fed back to an executor or stored; the four test cases are chosen by hand and a passing report would only mean those four held."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: the verification report ---\nPASS positive_two    expected=4   actual=4\nFAIL positive_five   expected=10  actual=7\nFAIL zero            expected=0   actual=2\nFAIL negative_three  expected=-6  actual=-1\npassed: False"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A bounded revision loop",
    "headingKn": "ಪ್ರಯೋಗ 4: A bounded revision loop",
    "bodyEn": "What it ran: A bounded revision loop. What the lab concluded: the first attempt fails three tests while the critic accepts it and the second attempt passes, so the loop ends ACCEPTED after 2 attempts; the revision is scripted by attempt number, so this shows the loop and its record and does not show that a model could read the failures and produce the fix.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A bounded revision loop. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the first attempt fails three tests while the critic accepts it and the second attempt passes, so the loop ends ACCEPTED after 2 attempts; the revision is scripted by attempt number, so this shows the loop and its record and does not show that a model could read the failures and produce the fix."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a bounded revision loop ---\nstatus: ACCEPTED | attempts: 2\n{'attempt': 1, 'hash': '3ec4b63e5570', 'critic': True, 'verifier': False, 'failed': ['positive_five', 'zero', 'negative_three']}\n{'attempt': 2, 'hash': '357456db6c79', 'critic': True, 'verifier': True, 'failed': []}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Stopping when nothing changes",
    "headingKn": "ಪ್ರಯೋಗ 5: Stopping when nothing changes",
    "bodyEn": "What it ran: Stopping when nothing changes. What the lab concluded: an identical artifact on the second attempt stops the loop after 2 attempts without waiting for the budget, whereas three different wrong artifacts use the whole budget of 3 and end BUDGET_EXHAUSTED; a repeated hash shows that nothing changed and says nothing about why.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Stopping when nothing changes. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): an identical artifact on the second attempt stops the loop after 2 attempts without waiting for the budget, whereas three different wrong artifacts use the whole budget of 3 and end BUDGET_EXHAUSTED; a repeated hash shows that nothing changed and says nothing about why."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: stopping when nothing changes ---\nsame wrong artifact every time: STOPPED_REPEATED_ARTIFACT | attempts: 2 | hashes: ['3ec4b63e5570', '3ec4b63e5570']\nthree different wrong artifacts: BUDGET_EXHAUSTED | attempts: 3"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: A machine-readable trace",
    "headingKn": "ಪ್ರಯೋಗ 6: A machine-readable trace",
    "bodyEn": "What it ran: A machine-readable trace. What the lab concluded: the trace holds the attempt number, a hash of the artifact, both decisions and the names of the failing tests, and survives a save and reload unchanged; a hash of twelve characters is enough to tell artifacts apart in this demo and is not a security control.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A machine-readable trace. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the trace holds the attempt number, a hash of the artifact, both decisions and the names of the failing tests, and survives a save and reload unchanged; a hash of twelve characters is enough to tell artifacts apart in this demo and is not a security control."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely computing: a machine-readable trace ---\nlines: 24 | round trip equal: True | keys: ['attempts', 'status', 'trace']"
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
    "headingEn": "Genuinely Found: Structure Is Not Behaviour",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ರಚನೆ ವರ್ತನೆಯಲ್ಲ",
    "bodyEn": "Section 2: the AST critic accepted both the correct code and the wrong formula number + 2, and rejected a renamed parameter, a syntax error and a missing return. Section 3: the report showed PASS positive_two and FAIL for positive_five, zero and negative_three (7, 2, -1).",
    "bodyKn": "ವಿಭಾಗ 2: AST critic ಸರಿಯಾದ ಕೋಡ್ ಮತ್ತು ತಪ್ಪು ಸೂತ್ರ number + 2 ಎರಡನ್ನೂ ಒಪ್ಪಿ, ಮರುಹೆಸರಿಸಿದ ಪ್ಯಾರಾಮೀಟರ್, ಸಿಂಟ್ಯಾಕ್ಸ್ ದೋಷ ಮತ್ತು ಕಾಣೆಯಾದ return ತಿರಸ್ಕರಿಸಿತು. ವಿಭಾಗ 3: ವರದಿ positive_two PASS ಮತ್ತು positive_five, zero, negative_three ಗೆ FAIL (7, 2, -1) ತೋರಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Permissions and Frozen Plans",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅನುಮತಿಗಳು ಮತ್ತು ಘನೀಕೃತ ಯೋಜನೆಗಳು",
    "bodyEn": "Section 1: editing the frozen plan raised FrozenInstanceError, and a critic writing source, an executor running tests, a verifier writing source and an unknown role were all denied.",
    "bodyKn": "ವಿಭಾಗ 1: ಘನೀಕೃತ ಯೋಜನೆ ತಿದ್ದಿದರೆ FrozenInstanceError ಬಂತು, ಮತ್ತು source ಬರೆಯುವ critic, ಪರೀಕ್ಷೆ ಓಡಿಸುವ executor, source ಬರೆಯುವ verifier ಹಾಗೂ ಅಜ್ಞಾತ ಪಾತ್ರ ಎಲ್ಲವೂ ನಿರಾಕರಿಸಲ್ಪಟ್ಟವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Loop Stops Itself",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಲೂಪ್ ತನ್ನನ್ನು ತಾನೇ ನಿಲ್ಲಿಸುತ್ತದೆ",
    "bodyEn": "Section 4: the loop ended ACCEPTED in 2 attempts after failing positive_five, zero and negative_three. Section 5: the same wrong artifact stopped with STOPPED_REPEATED_ARTIFACT after 2 attempts, and three different wrong ones ended BUDGET_EXHAUSTED at 3. Section 6: the trace had 24 lines and reloaded equal.",
    "bodyKn": "ವಿಭಾಗ 4: positive_five, zero ಮತ್ತು negative_three ವಿಫಲವಾದ ನಂತರ ಲೂಪ್ 2 ಪ್ರಯತ್ನಗಳಲ್ಲಿ ACCEPTED ಆಗಿ ಮುಗಿಯಿತು. ವಿಭಾಗ 5: ಅದೇ ತಪ್ಪು ಕೃತಿ 2 ಪ್ರಯತ್ನಗಳ ನಂತರ STOPPED_REPEATED_ARTIFACT ನೊಂದಿಗೆ ನಿಂತಿತು, ಮತ್ತು ಮೂರು ಬೇರೆ ತಪ್ಪುಗಳು 3 ರಲ್ಲಿ BUDGET_EXHAUSTED ಆದವು. ವಿಭಾಗ 6: ಜಾಡು 24 ಸಾಲುಗಳಿದ್ದು ಸಮನಾಗಿ ಮರುಲೋಡ್ ಆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A loop without a budget and a change check can repeat the same wrong artifact forever, and a critic that reads structure can be satisfied by code that behaves wrongly, so both a limit and executed tests are needed.",
    "bodyKn": "ಬಜೆಟ್ ಮತ್ತು ಬದಲಾವಣೆ ಪರಿಶೀಲನೆ ಇಲ್ಲದ ಲೂಪ್ ಅದೇ ತಪ್ಪು ಕೃತಿಯನ್ನು ಸದಾ ಪುನರಾವರ್ತಿಸಬಹುದು, ಮತ್ತು ರಚನೆ ಓದುವ critic ತಪ್ಪಾಗಿ ವರ್ತಿಸುವ ಕೋಡ್‌ನಿಂದ ತೃಪ್ತಿಯಾಗಬಹುದು, ಆದ್ದರಿಂದ ಮಿತಿ ಮತ್ತು ಓಡಿಸಿದ ಪರೀಕ್ಷೆಗಳು ಎರಡೂ ಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"parsing the code makes the critic reliable.\" The AST critic still accepted number + 2.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಕೋಡ್ ಪಾರ್ಸ್ ಮಾಡಿದರೆ critic ವಿಶ್ವಾಸಾರ್ಹ.\" AST critic ಇನ್ನೂ number + 2 ಒಪ್ಪಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Frozen plan: a record that cannot be edited. Permission boundary: an enforced list of actions per role. AST critic: a critic that parses code. Revision budget: the maximum number of attempts. Artifact hash: a short fingerprint of the produced code.",
    "bodyKn": "ಘನೀಕೃತ ಯೋಜನೆ: ತಿದ್ದಲಾಗದ ದಾಖಲೆ. ಅನುಮತಿ ಗಡಿ: ಪ್ರತಿ ಪಾತ್ರದ ಜಾರಿಯ ಕ್ರಿಯೆಗಳ ಪಟ್ಟಿ. AST critic: ಕೋಡ್ ಪಾರ್ಸ್ ಮಾಡುವ critic. ಪರಿಷ್ಕರಣೆ ಬಜೆಟ್: ಗರಿಷ್ಠ ಪ್ರಯತ್ನ ಸಂಖ್ಯೆ. ಕೃತಿ hash: ತಯಾರಾದ ಕೋಡ್‌ನ ಸಣ್ಣ ಬೆರಳಚ್ಚು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The frozen plan refused edits. 2) The AST critic accepted the wrong formula. 3) The report named the 3 failing tests. 4) The loop ended ACCEPTED in 2 attempts. 5) An identical artifact stopped the loop after 2 attempts.",
    "bodyKn": "1) ಘನೀಕೃತ ಯೋಜನೆ ತಿದ್ದುವಿಕೆ ನಿರಾಕರಿಸಿತು. 2) AST critic ತಪ್ಪು ಸೂತ್ರ ಒಪ್ಪಿತು. 3) ವರದಿ ವಿಫಲ 3 ಪರೀಕ್ಷೆಗಳನ್ನು ಹೆಸರಿಸಿತು. 4) ಲೂಪ್ 2 ಪ್ರಯತ್ನಗಳಲ್ಲಿ ACCEPTED ಆಯಿತು. 5) ಒಂದೇ ಕೃತಿ 2 ಪ್ರಯತ್ನಗಳ ನಂತರ ಲೂಪ್ ನಿಲ್ಲಿಸಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which status did the same wrong artifact produce?",
      "qKn": "ಅದೇ ತಪ್ಪು ಕೃತಿ ಯಾವ ಸ್ಥಿತಿ ನೀಡಿತು?",
      "opts": [
       "STOPPED_REPEATED_ARTIFACT",
       "BUDGET_EXHAUSTED",
       "ACCEPTED",
       "ERROR"
      ],
      "optsKn": [
       "STOPPED_REPEATED_ARTIFACT",
       "BUDGET_EXHAUSTED",
       "ACCEPTED",
       "ERROR"
      ],
      "correct": 0
     },
     {
      "q": "Did the AST critic accept number + 2?",
      "qKn": "AST critic number + 2 ಒಪ್ಪಿತೇ?",
      "opts": [
       "yes",
       "no",
       "only with tests",
       "it crashed"
      ],
      "optsKn": [
       "ಹೌದು",
       "ಇಲ್ಲ",
       "ಪರೀಕ್ಷೆಗಳೊಂದಿಗೆ ಮಾತ್ರ",
       "ಕ್ರ್ಯಾಶ್ ಆಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "How many attempts did the scripted loop need to be accepted?",
      "qKn": "ಸ್ಕ್ರಿಪ್ಟ್ ಲೂಪ್ ಒಪ್ಪಲ್ಪಡಲು ಎಷ್ಟು ಪ್ರಯತ್ನ ಬೇಕಾಯಿತು?",
      "opts": [
       "2",
       "1",
       "3",
       "5"
      ],
      "optsKn": [
       "2",
       "1",
       "3",
       "5"
      ],
      "correct": 0
     },
     {
      "q": "What error appeared when editing the frozen plan?",
      "qKn": "ಘನೀಕೃತ ಯೋಜನೆ ತಿದ್ದಿದಾಗ ಯಾವ ದೋಷ ಬಂತು?",
      "opts": [
       "FrozenInstanceError",
       "PermissionDenied",
       "SyntaxError",
       "KeyError"
      ],
      "optsKn": [
       "FrozenInstanceError",
       "PermissionDenied",
       "SyntaxError",
       "KeyError"
      ],
      "correct": 0
     },
     {
      "q": "Which tests failed for number + 2?",
      "qKn": "number + 2 ಗೆ ಯಾವ ಪರೀಕ್ಷೆಗಳು ವಿಫಲವಾದವು?",
      "opts": [
       "positive_five, zero, negative_three",
       "positive_two only",
       "all four",
       "none"
      ],
      "optsKn": [
       "positive_five, zero ಮತ್ತು negative_three",
       "positive_two ಮಾತ್ರ",
       "ನಾಲ್ಕೂ",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
