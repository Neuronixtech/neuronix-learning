module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215ec",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Role Specialization: Planner, Critic, Executor, Verifier (Part 1 of 3) — Four Roles and a Shallow Critic",
 "titleKn": "ಪಾತ್ರ ವಿಶೇಷೀಕರಣ: Planner, Critic, Executor, Verifier (ಭಾಗ 1 / 3) — ನಾಲ್ಕು ಪಾತ್ರಗಳು ಮತ್ತು ಆಳವಿಲ್ಲದ critic",
 "desc": "Build four roles and see a shallow critic accept wrong code that tests reject.",
 "descKn": "ನಾಲ್ಕು ಪಾತ್ರಗಳನ್ನು ನಿರ್ಮಿಸಿ ಮತ್ತು ಆಳವಿಲ್ಲದ critic ಪರೀಕ್ಷೆ ತಿರಸ್ಕರಿಸುವ ತಪ್ಪು ಕೋಡ್ ಒಪ್ಪುವುದನ್ನು ನೋಡಿ.",
 "objectives": [
  "Build four roles.",
  "Run a wrong executor.",
  "See weak evidence.",
  "Spot shared blind spots.",
  "Ask, do not invent."
 ],
 "objectivesKn": [
  "ನಾಲ್ಕು ಪಾತ್ರಗಳನ್ನು ನಿರ್ಮಿಸಿ.",
  "ತಪ್ಪು executor ಓಡಿಸಿ.",
  "ದುರ್ಬಲ ಸಾಕ್ಷಿ ನೋಡಿ.",
  "ಹಂಚಿದ ಕುರುಡು ಸ್ಥಳ ಗುರುತಿಸಿ.",
  "ಕೇಳಿ, ಕಲ್ಪಿಸಬೇಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Role Specialization: Planner, Critic, Executor, Verifier (Part 1 of 3)",
    "textKn": "ಪಾತ್ರ ವಿಶೇಷೀಕರಣ: Planner, Critic, Executor, Verifier (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: four roles on a doubling task, a critic that checks only the signature, weak one-case evidence, the triple exercise, three coders with one blind spot and a clarification request. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind a four-role workflow (planner, executor, critic, verifier), a critic that accepts wrong code while tests reject it, permissions, an AST critic, a bounded revision loop, a restricted verifier, a state machine ending at awaiting approval, specialist reviewers and reliability metrics, not the real software, and every role is a deterministic scripted function, the revisions are chosen by attempt number, exec runs fixed trusted code only, the restricted evaluator handles one tiny function shape and no model or real reviewer is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. MetaGPT, ChatDev, MAST and the framework mappings are described in the lesson and were not run or checked against their sources. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ದ್ವಿಗುಣ ಕೆಲಸದ ಮೇಲೆ ನಾಲ್ಕು ಪಾತ್ರಗಳು, ಸಹಿ ಮಾತ್ರ ಪರಿಶೀಲಿಸುವ critic, ದುರ್ಬಲ ಒಂದು-ಪ್ರಕರಣ ಸಾಕ್ಷಿ, triple ಅಭ್ಯಾಸ, ಒಂದೇ ಕುರುಡು ಸ್ಥಳವಿರುವ ಮೂವರು ಕೋಡರ್‌ಗಳು ಮತ್ತು ಸ್ಪಷ್ಟೀಕರಣ ವಿನಂತಿ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ನಾಲ್ಕು-ಪಾತ್ರದ ಕೆಲಸದ ಹರಿವು (planner, executor, critic, verifier), ತಪ್ಪು ಕೋಡ್ ಒಪ್ಪುವ critic ಮತ್ತು ಅದನ್ನು ತಿರಸ್ಕರಿಸುವ ಪರೀಕ್ಷೆಗಳು, ಅನುಮತಿಗಳು, AST critic, ಮಿತಿಯ ಪರಿಷ್ಕರಣೆ ಲೂಪ್, ನಿರ್ಬಂಧಿತ ಪರಿಶೀಲಕ, ಅನುಮೋದನೆಗಾಗಿ ಕಾಯುವುದರಲ್ಲಿ ಮುಗಿಯುವ ಸ್ಥಿತಿ ಯಂತ್ರ, ವಿಶೇಷ ವಿಮರ್ಶಕರು ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹತೆ ಮಾಪನಗಳು ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪ್ರತಿ ಪಾತ್ರ ನಿರ್ಧಾರಿತ ಸ್ಕ್ರಿಪ್ಟ್ ಕಾರ್ಯ, ಪರಿಷ್ಕರಣೆಗಳನ್ನು ಪ್ರಯತ್ನ ಸಂಖ್ಯೆಯಿಂದ ಆರಿಸಲಾಗುತ್ತದೆ, exec ನಿಗದಿತ ನಂಬಿಕಸ್ಥ ಕೋಡ್ ಮಾತ್ರ ಓಡಿಸುತ್ತದೆ, ನಿರ್ಬಂಧಿತ evaluator ಒಂದು ಚಿಕ್ಕ ಕಾರ್ಯ ಆಕಾರ ನಿಭಾಯಿಸುತ್ತದೆ ಮತ್ತು ಯಾವ ಮಾದರಿ ಅಥವಾ ನಿಜ ವಿಮರ್ಶಕನೂ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ನೀಡಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. MetaGPT, ChatDev, MAST ಮತ್ತು framework ಹೋಲಿಕೆಗಳು lesson ನಲ್ಲಿ ವಿವರಿಸಲ್ಪಟ್ಟಿವೆ ಮತ್ತು ಓಡಿಸಲಾಗಿಲ್ಲ ಅಥವಾ ಮೂಲಗಳೊಂದಿಗೆ ಪರಿಶೀಲಿಸಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Plausible Answer Is Not Proof",
    "textKn": "ನಂಬಲರ್ಹ ಉತ್ತರ ಸಾಬೀತಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Planner, Executor, Critic and Verifier",
    "headingKn": "Planner, Executor, Critic ಮತ್ತು Verifier",
    "bodyEn": "The lesson splits one coding job into four roles with different duties. The planner writes a structured specification with test cases, the executor writes the code, the critic reviews it and the verifier runs it. This part builds all four as deterministic functions, runs a correct and a wrong executor through them, and shows a critic that checks only the signature accepting code that the verifier rejects. It also shows weak one-case evidence, the triple exercise, three similar coders failing in the same way, and an executor that asks for missing business rules instead of inventing them.",
    "bodyKn": "lesson ಒಂದು ಕೋಡಿಂಗ್ ಕೆಲಸವನ್ನು ಬೇರೆ ಬೇರೆ ಕರ್ತವ್ಯಗಳ ನಾಲ್ಕು ಪಾತ್ರಗಳಾಗಿ ವಿಭಜಿಸುತ್ತದೆ. planner ಪರೀಕ್ಷಾ ಪ್ರಕರಣಗಳೊಂದಿಗೆ ರಚನಾತ್ಮಕ ವಿಶೇಷಣ ಬರೆಯುತ್ತದೆ, executor ಕೋಡ್ ಬರೆಯುತ್ತದೆ, critic ಅದನ್ನು ವಿಮರ್ಶಿಸುತ್ತದೆ ಮತ್ತು verifier ಅದನ್ನು ಓಡಿಸುತ್ತದೆ. ಈ ಭಾಗ ನಾಲ್ಕನ್ನೂ ನಿರ್ಧಾರಿತ ಕಾರ್ಯಗಳಾಗಿ ನಿರ್ಮಿಸಿ, ಸರಿಯಾದ ಮತ್ತು ತಪ್ಪು executor ಅನ್ನು ಅವುಗಳ ಮೂಲಕ ಓಡಿಸಿ, ಸಹಿ ಮಾತ್ರ ಪರಿಶೀಲಿಸುವ critic verifier ತಿರಸ್ಕರಿಸುವ ಕೋಡ್ ಒಪ್ಪುವುದನ್ನು ತೋರಿಸುತ್ತದೆ. ಇದು ದುರ್ಬಲ ಒಂದು-ಪ್ರಕರಣ ಸಾಕ್ಷಿ, triple ಅಭ್ಯಾಸ, ಒಂದೇ ರೀತಿ ವಿಫಲವಾಗುವ ಮೂವರು ಒಂದೇ ರೀತಿಯ ಕೋಡರ್‌ಗಳು ಮತ್ತು ಕಾಣೆಯಾದ ವ್ಯಾಪಾರ ನಿಯಮಗಳನ್ನು ಕಲ್ಪಿಸುವ ಬದಲು ಕೇಳುವ executor ಅನ್ನೂ ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Four Roles",
    "headingKn": "ನಾಲ್ಕು ಪಾತ್ರಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">looking correct is not the same as passing tests</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">planner</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">defines the spec</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">executor</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">writes the code</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">critic</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">judges the code</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">verifier</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">runs the tests</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">looking correct is not the same as passing tests</text></svg>",
    "captionEn": "The plan feeds the executor, and both the critic and the verifier must pass.",
    "captionKn": "ಯೋಜನೆ executor ಗೆ ಹೋಗುತ್ತದೆ, ಮತ್ತು critic ಹಾಗೂ verifier ಇಬ್ಬರೂ ಪಾಸಾಗಬೇಕು."
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
      "correct executor",
      "all four roles pass"
     ],
     [
      "wrong executor",
      "critic accepts, verifier rejects"
     ],
     [
      "weak evidence",
      "one test case and a comment-only return"
     ],
     [
      "triple exercise",
      "number + 3 against number * 3"
     ],
     [
      "three coders",
      "the same empty-list failure"
     ],
     [
      "clarification",
      "missing shipping rules"
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
    "filename": "ro_1.py",
    "headingEn": "Artifacts and roles",
    "headingKn": "ಕೃತಿಗಳು ಮತ್ತು ಪಾತ್ರಗಳು",
    "descEn": "Plan, Review and Verification are the artifacts, and planner, executor, shallow_critic, verifier and orchestrate are the roles.",
    "descKn": "Plan, Review ಮತ್ತು Verification ಕೃತಿಗಳು, ಮತ್ತು planner, executor, shallow_critic, verifier ಹಾಗೂ orchestrate ಪಾತ್ರಗಳು.",
    "code": "class Plan:\n    function_name: str\n    parameter_name: str\n    requirement: str\n    test_cases: List[Tuple[int, int]]\n\n\n@dataclass\nclass Review:\n    accepted: bool\n    reasons: List[str]\n\n\n@dataclass\nclass Verification:\n    passed: bool\n    evidence: List[str]\n\n\ndef planner(name=\"double\", op=\"*\", k=2):\n    return Plan(name, \"number\", f\"Return {k} times the input integer\", [(2, 2 * k), (5, 5 * k), (0, 0), (-3, -3 * k)])\n\n\ndef executor(plan, correct=True, op=\"*\", k=2):\n    sign = op if correct else \"+\"\n    return f\"def {plan.function_name}({plan.parameter_name}):\\n    return {plan.parameter_name} {sign} {k}\\n\"\n\n\ndef shallow_critic(plan, code):\n    sig = f\"def {plan.function_name}({plan.parameter_name}):\"\n    reasons = []\n    if sig not in code:\n        reasons.append(\"signature missing\")\n    if \"return\" not in code:\n        reasons.append(\"no return statement\")\n    return Review(not reasons, reasons or [\"Basic structural review passed.\"])\n\n\ndef verifier(plan, code):\n    ns = {}\n    exec(code, ns)\n    fn = ns[plan.function_name]\n    ev, ok = [], True\n    for x, want in plan.test_cases:\n        got = fn(x)\n        good = got == want\n        ok &= good\n        ev.append(f\"{'PASS' if good else 'FAIL'}: input={x}, expected={want}, actual={got}\")\n    return Verification(ok, ev)\n\n\ndef orchestrate(plan, code):\n    r, v = shallow_critic(plan, code), verifier(plan, code)\n    return r, v, r.accepted and v.passed"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ro_1.py",
    "headingEn": "The clarification check",
    "headingKn": "ಸ್ಪಷ್ಟೀಕರಣ ಪರಿಶೀಲನೆ",
    "descEn": "check_shipping_plan lists the fields the plan did not supply and returns a request instead of a guess.",
    "descKn": "check_shipping_plan ಯೋಜನೆ ನೀಡದ ಕ್ಷೇತ್ರಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡಿ ಊಹೆಯ ಬದಲು ವಿನಂತಿ ನೀಡುತ್ತದೆ.",
    "code": "def check_shipping_plan(plan):\n    need = [\"rate_per_kg\", \"minimum_charge\", \"free_shipping_threshold\"]\n    missing = [f for f in need if f not in plan]\n    return {\"requester\": \"Executor\", \"recipient\": \"Planner\", \"question\": \"Please specify: \" + \", \".join(missing)} if missing else None"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ro_1.py",
    "headingEn": "The experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the six experiments in order and prints the real result of each.",
    "descKn": "main() ಆರು ಪ್ರಯೋಗಗಳನ್ನು ಕ್ರಮವಾಗಿ ಓಡಿಸಿ ಪ್ರತಿಯೊಂದರ ನಿಜ ಫಲಿತಾಂಶ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    plan = planner()\n    section(\"1. Genuinely running: a correct executor through all four roles\")\n    code = executor(plan, True)\n    r, v, final = orchestrate(plan, code)\n    print(\"critic accepted:\", r.accepted, \"|\", r.reasons[0], \"| verifier passed:\", v.passed, \"| final accepted:\", final)\n    for e in v.evidence:\n        print(e)\n    print(\"the correct code is accepted by both checks and the four test cases all pass; the final decision needs the critic and the verifier together, so neither role can approve alone, and the plan, code, review and evidence are separate artifacts that can be inspected one by one.\")\n\n    section(\"2. Genuinely running: wrong code that a shallow critic accepts\")\n    bad = executor(plan, False)\n    r, v, final = orchestrate(plan, bad)\n    print(\"critic accepted:\", r.accepted, \"| verifier passed:\", v.passed, \"| final accepted:\", final)\n    for e in v.evidence:\n        print(e)\n    print(\"number + 2 equals number * 2 only for the input 2, so the critic that checks only the signature and the word return accepts it, while the verifier fails three of four cases and the final decision is rejected; this shows that these tests catch this one defect and does not show that tests catch every defect.\")\n\n    section(\"3. Genuinely running: how weak evidence hides the bug\")\n    weak = Plan(\"double\", \"number\", \"x\", [(2, 4)])\n    print(\"one test case [(2, 4)] on the wrong code:\", verifier(weak, bad).passed, \"| four cases:\", verifier(plan, bad).passed)\n    comment_only = \"def double(number):\\n    # return number * 2\\n    pass\\n\"\n    print(\"critic on code with return only inside a comment:\", shallow_critic(plan, comment_only).accepted)\n    print(\"a single passing input is weak evidence because the wrong formula agrees at 2, and the string check for the word return is satisfied by a comment on a function that returns nothing; the critic here is deliberately shallow, and a stronger critic still would not replace behavioural tests.\")\n\n    section(\"4. Genuinely running: the exercise with triple\")\n    p3 = planner(\"triple\", \"*\", 3)\n    r3, v3, f3 = orchestrate(p3, executor(p3, True, \"*\", 3))\n    rb, vb, fb = orchestrate(p3, executor(p3, False, \"*\", 3))\n    print(\"correct:\", f3, \"| wrong (+3):\", fb, \"| failing inputs for +3:\", [e.split(\",\")[0].split(\"=\")[1] for e in vb.evidence if e.startswith(\"FAIL\")])\n    print(\"the same four roles handle triple without change, and the lesson exercise asks you to predict the failures of number + 3: it fails all four inputs, because 2 + 3 is 5 and not 6, so the trick that hid the defect for double at input 2 does not work for triple; whether a wrong formula slips past a one-case test depends on the formula and on the inputs chosen.\")\n\n    section(\"5. Genuinely running: three identical coders share one blind spot\")\n    impls = [lambda n: sum(n) / len(n), lambda v: sum(v) / len(v), lambda i: sum(i) / len(i)]\n    results = []\n    for f in impls:\n        try:\n            f([])\n            results.append(\"ok\")\n        except ZeroDivisionError:\n            results.append(\"ZeroDivisionError\")\n    print(\"average([]) on three coders:\", results)\n\n    def average(n):\n        if not n:\n            raise ValueError(\"Cannot average an empty list\")\n        return sum(n) / len(n)\n    try:\n        average([])\n    except ValueError as e:\n        print(\"specified version:\", type(e).__name__, \"-\", e)\n    print(\"all three similar implementations fail the empty list in the same way, so voting among them would only agree on the mistake, while a version written to a requirement that names the empty list handles it (hand-written here, not generated); more agents with the same instructions share errors, and a different role with an explicit requirement does not.\")\n\n    section(\"6. Genuinely running: asking instead of inventing\")\n    print(\"plan with only a name:\", check_shipping_plan({\"function_name\": \"shipping_cost\"}))\n    print(\"complete plan:\", check_shipping_plan({\"function_name\": \"s\", \"rate_per_kg\": 10, \"minimum_charge\": 5, \"free_shipping_threshold\": 100}))\n    print(\"the executor reports exactly which fields are missing and returns nothing when the plan is complete, so it cannot invent a rate of 10 per unit; the check only compares field names, so it cannot tell whether a supplied value such as a rate is sensible.\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a correct executor through all four roles ---\ncritic accepted: True | Basic structural review passed. | verifier passed: True | final accepted: True\nPASS: input=2, expected=4, actual=4\nPASS: input=5, expected=10, actual=10\nPASS: input=0, expected=0, actual=0\nPASS: input=-3, expected=-6, actual=-6\nthe correct code is accepted by both checks and the four test cases all pass; the final decision needs the critic and the verifier together, so neither role can approve alone, and the plan, code, review and evidence are separate artifacts that can be inspected one by one.\n\n--- 2. Genuinely running: wrong code that a shallow critic accepts ---\ncritic accepted: True | verifier passed: False | final accepted: False\nPASS: input=2, expected=4, actual=4\nFAIL: input=5, expected=10, actual=7\nFAIL: input=0, expected=0, actual=2\nFAIL: input=-3, expected=-6, actual=-1\nnumber + 2 equals number * 2 only for the input 2, so the critic that checks only the signature and the word return accepts it, while the verifier fails three of four cases and the final decision is rejected; this shows that these tests catch this one defect and does not show that tests catch every defect.\n\n--- 3. Genuinely running: how weak evidence hides the bug ---\none test case [(2, 4)] on the wrong code: True | four cases: False\ncritic on code with return only inside a comment: True\na single passing input is weak evidence because the wrong formula agrees at 2, and the string check for the word return is satisfied by a comment on a function that returns nothing; the critic here is deliberately shallow, and a stronger critic still would not replace behavioural tests.\n\n--- 4. Genuinely running: the exercise with triple ---\ncorrect: True | wrong (+3): False | failing inputs for +3: ['2', '5', '0', '-3']\nthe same four roles handle triple without change, and the lesson exercise asks you to predict the failures of number + 3: it fails all four inputs, because 2 + 3 is 5 and not 6, so the trick that hid the defect for double at input 2 does not work for triple; whether a wrong formula slips past a one-case test depends on the formula and on the inputs chosen.\n\n--- 5. Genuinely running: three identical coders share one blind spot ---\naverage([]) on three coders: ['ZeroDivisionError', 'ZeroDivisionError', 'ZeroDivisionError']\nspecified version: ValueError - Cannot average an empty list\nall three similar implementations fail the empty list in the same way, so voting among them would only agree on the mistake, while a version written to a requirement that names the empty list handles it (hand-written here, not generated); more agents with the same instructions share errors, and a different role with an explicit requirement does not.\n\n--- 6. Genuinely running: asking instead of inventing ---\nplan with only a name: {'requester': 'Executor', 'recipient': 'Planner', 'question': 'Please specify: rate_per_kg, minimum_charge, free_shipping_threshold'}\ncomplete plan: None\nthe executor reports exactly which fields are missing and returns nothing when the plan is complete, so it cannot invent a rate of 10 per unit; the check only compares field names, so it cannot tell whether a supplied value such as a rate is sensible."
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
    "headingEn": "Experiment 1: A correct executor through all four roles",
    "headingKn": "ಪ್ರಯೋಗ 1: A correct executor through all four roles",
    "bodyEn": "What it ran: A correct executor through all four roles. What the lab concluded: the correct code is accepted by both checks and the four test cases all pass; the final decision needs the critic and the verifier together, so neither role can approve alone, and the plan, code, review and evidence are separate artifacts that can be inspected one by one.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A correct executor through all four roles. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the correct code is accepted by both checks and the four test cases all pass; the final decision needs the critic and the verifier together, so neither role can approve alone, and the plan, code, review and evidence are separate artifacts that can be inspected one by one."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: a correct executor through all four roles ---\ncritic accepted: True | Basic structural review passed. | verifier passed: True | final accepted: True\nPASS: input=2, expected=4, actual=4\nPASS: input=5, expected=10, actual=10\nPASS: input=0, expected=0, actual=0\nPASS: input=-3, expected=-6, actual=-6"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Wrong code that a shallow critic accepts",
    "headingKn": "ಪ್ರಯೋಗ 2: Wrong code that a shallow critic accepts",
    "bodyEn": "What it ran: Wrong code that a shallow critic accepts. What the lab concluded: number + 2 equals number * 2 only for the input 2, so the critic that checks only the signature and the word return accepts it, while the verifier fails three of four cases and the final decision is rejected; this shows that these tests catch this one defect and does not show that tests catch every defect.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Wrong code that a shallow critic accepts. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): number + 2 equals number * 2 only for the input 2, so the critic that checks only the signature and the word return accepts it, while the verifier fails three of four cases and the final decision is rejected; this shows that these tests catch this one defect and does not show that tests catch every defect."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: wrong code that a shallow critic accepts ---\ncritic accepted: True | verifier passed: False | final accepted: False\nPASS: input=2, expected=4, actual=4\nFAIL: input=5, expected=10, actual=7\nFAIL: input=0, expected=0, actual=2\nFAIL: input=-3, expected=-6, actual=-1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: How weak evidence hides the bug",
    "headingKn": "ಪ್ರಯೋಗ 3: How weak evidence hides the bug",
    "bodyEn": "What it ran: How weak evidence hides the bug. What the lab concluded: a single passing input is weak evidence because the wrong formula agrees at 2, and the string check for the word return is satisfied by a comment on a function that returns nothing; the critic here is deliberately shallow, and a stronger critic still would not replace behavioural tests.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: How weak evidence hides the bug. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a single passing input is weak evidence because the wrong formula agrees at 2, and the string check for the word return is satisfied by a comment on a function that returns nothing; the critic here is deliberately shallow, and a stronger critic still would not replace behavioural tests."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: how weak evidence hides the bug ---\none test case [(2, 4)] on the wrong code: True | four cases: False\ncritic on code with return only inside a comment: True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: The exercise with triple",
    "headingKn": "ಪ್ರಯೋಗ 4: The exercise with triple",
    "bodyEn": "What it ran: The exercise with triple. What the lab concluded: the same four roles handle triple without change, and the lesson exercise asks you to predict the failures of number + 3: it fails all four inputs, because 2 + 3 is 5 and not 6, so the trick that hid the defect for double at input 2 does not work for triple; whether a wrong formula slips past a one-case test depends on the formula and on the inputs chosen.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The exercise with triple. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the same four roles handle triple without change, and the lesson exercise asks you to predict the failures of number + 3: it fails all four inputs, because 2 + 3 is 5 and not 6, so the trick that hid the defect for double at input 2 does not work for triple; whether a wrong formula slips past a one-case test depends on the formula and on the inputs chosen."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: the exercise with triple ---\ncorrect: True | wrong (+3): False | failing inputs for +3: ['2', '5', '0', '-3']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Three identical coders share one blind spot",
    "headingKn": "ಪ್ರಯೋಗ 5: Three identical coders share one blind spot",
    "bodyEn": "What it ran: Three identical coders share one blind spot. What the lab concluded: all three similar implementations fail the empty list in the same way, so voting among them would only agree on the mistake, while a version written to a requirement that names the empty list handles it (hand-written here, not generated); more agents with the same instructions share errors, and a different role with an explicit requirement does not.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Three identical coders share one blind spot. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): all three similar implementations fail the empty list in the same way, so voting among them would only agree on the mistake, while a version written to a requirement that names the empty list handles it (hand-written here, not generated); more agents with the same instructions share errors, and a different role with an explicit requirement does not."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: three identical coders share one blind spot ---\naverage([]) on three coders: ['ZeroDivisionError', 'ZeroDivisionError', 'ZeroDivisionError']\nspecified version: ValueError - Cannot average an empty list"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: Asking instead of inventing",
    "headingKn": "ಪ್ರಯೋಗ 6: Asking instead of inventing",
    "bodyEn": "What it ran: Asking instead of inventing. What the lab concluded: the executor reports exactly which fields are missing and returns nothing when the plan is complete, so it cannot invent a rate of 10 per unit; the check only compares field names, so it cannot tell whether a supplied value such as a rate is sensible.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Asking instead of inventing. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the executor reports exactly which fields are missing and returns nothing when the plan is complete, so it cannot invent a rate of 10 per unit; the check only compares field names, so it cannot tell whether a supplied value such as a rate is sensible."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: asking instead of inventing ---\nplan with only a name: {'requester': 'Executor', 'recipient': 'Planner', 'question': 'Please specify: rate_per_kg, minimum_charge, free_shipping_threshold'}\ncomplete plan: None"
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
    "headingEn": "Genuinely Found: The Critic Accepted Wrong Code",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: critic ತಪ್ಪು ಕೋಡ್ ಒಪ್ಪಿತು",
    "bodyEn": "Section 1: the correct code was accepted by both roles and all 4 tests passed. Section 2: number + 2 was accepted by the critic and failed 3 of 4 tests (actual 7, 2 and -1 for expected 10, 0 and -6), so the final decision was rejected.",
    "bodyKn": "ವಿಭಾಗ 1: ಸರಿಯಾದ ಕೋಡ್ ಎರಡೂ ಪಾತ್ರಗಳಿಂದ ಒಪ್ಪಲ್ಪಟ್ಟು 4 ಪರೀಕ್ಷೆಗಳು ಪಾಸಾದವು. ವಿಭಾಗ 2: number + 2 critic ನಿಂದ ಒಪ್ಪಲ್ಪಟ್ಟು 4 ರಲ್ಲಿ 3 ಪರೀಕ್ಷೆಗಳಲ್ಲಿ ವಿಫಲವಾಯಿತು (ನಿರೀಕ್ಷೆ 10, 0, -6 ಕ್ಕೆ ವಾಸ್ತವ 7, 2, -1), ಆದ್ದರಿಂದ ಅಂತಿಮ ನಿರ್ಧಾರ ತಿರಸ್ಕಾರ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: One Case Is Weak Evidence",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಒಂದು ಪ್ರಕರಣ ದುರ್ಬಲ ಸಾಕ್ಷಿ",
    "bodyEn": "Section 3: one test case (2, 4) passed the wrong code while four cases failed it, and the critic accepted code whose return sat inside a comment. Section 4: number + 3 failed all four inputs for triple, including input 2, so the lesson exercise has no hidden pass.",
    "bodyKn": "ವಿಭಾಗ 3: ಒಂದು ಪರೀಕ್ಷಾ ಪ್ರಕರಣ (2, 4) ತಪ್ಪು ಕೋಡ್ ಪಾಸು ಮಾಡಿತು ಆದರೆ ನಾಲ್ಕು ಪ್ರಕರಣಗಳು ವಿಫಲಗೊಳಿಸಿದವು, ಮತ್ತು return ಕಾಮೆಂಟ್ ಒಳಗಿದ್ದ ಕೋಡ್ ಅನ್ನು critic ಒಪ್ಪಿತು. ವಿಭಾಗ 4: triple ಗೆ number + 3 ಎಲ್ಲಾ ನಾಲ್ಕು ಇನ್ಪುಟ್‌ಗಳಲ್ಲಿ, ಇನ್ಪುಟ್ 2 ಸೇರಿ, ವಿಫಲವಾಯಿತು, ಆದ್ದರಿಂದ lesson ಅಭ್ಯಾಸದಲ್ಲಿ ಅಡಗಿದ ಪಾಸು ಇಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Same Blind Spot, Ask Do Not Invent",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಒಂದೇ ಕುರುಡು ಸ್ಥಳ, ಕಲ್ಪಿಸಬೇಡಿ ಕೇಳಿ",
    "bodyEn": "Section 5: three similar average functions all raised ZeroDivisionError for an empty list, while the version written to a requirement raised ValueError. Section 6: the plan with only a name produced a request for rate_per_kg, minimum_charge, free_shipping_threshold and a complete plan produced None.",
    "bodyKn": "ವಿಭಾಗ 5: ಮೂರು ಒಂದೇ ರೀತಿಯ average ಕಾರ್ಯಗಳು ಖಾಲಿ ಪಟ್ಟಿಗೆ ZeroDivisionError ಎತ್ತಿದವು, ಆದರೆ ಅವಶ್ಯಕತೆಗೆ ಬರೆದ ಆವೃತ್ತಿ ValueError ಎತ್ತಿತು. ವಿಭಾಗ 6: ಹೆಸರು ಮಾತ್ರ ಇರುವ ಯೋಜನೆ rate_per_kg, minimum_charge, free_shipping_threshold ಗಾಗಿ ವಿನಂತಿ ನೀಡಿತು ಮತ್ತು ಪೂರ್ಣ ಯೋಜನೆ None ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Roles help because they give different kinds of evidence, intent from the planner, code from the executor, judgment from the critic and test results from the verifier, and a critic alone cannot show that code behaves.",
    "bodyKn": "ಪಾತ್ರಗಳು ಸಹಾಯಕ ಏಕೆಂದರೆ ಅವು ಬೇರೆ ಬೇರೆ ರೀತಿಯ ಸಾಕ್ಷಿ ನೀಡುತ್ತವೆ, planner ನಿಂದ ಉದ್ದೇಶ, executor ನಿಂದ ಕೋಡ್, critic ನಿಂದ ತೀರ್ಪು ಮತ್ತು verifier ನಿಂದ ಪರೀಕ್ಷಾ ಫಲಿತಾಂಶ, ಮತ್ತು critic ಮಾತ್ರ ಕೋಡ್ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದು ತೋರಿಸಲಾರದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"more coders give more reliability.\" Three similar coders all failed the empty list in the same way.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಹೆಚ್ಚು ಕೋಡರ್‌ಗಳು ಹೆಚ್ಚು ವಿಶ್ವಾಸಾರ್ಹತೆ ನೀಡುತ್ತಾರೆ.\" ಮೂವರು ಒಂದೇ ರೀತಿಯ ಕೋಡರ್‌ಗಳು ಖಾಲಿ ಪಟ್ಟಿಯನ್ನು ಒಂದೇ ರೀತಿ ವಿಫಲಗೊಳಿಸಿದರು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Planner: writes the specification. Executor: produces the artifact. Critic: judges quality. Verifier: runs objective checks. Communicative dehallucination: asking for missing information instead of inventing it.",
    "bodyKn": "Planner: ವಿಶೇಷಣ ಬರೆಯುತ್ತದೆ. Executor: ಕೃತಿ ತಯಾರಿಸುತ್ತದೆ. Critic: ಗುಣಮಟ್ಟ ನಿರ್ಣಯಿಸುತ್ತದೆ. Verifier: ವಸ್ತುನಿಷ್ಠ ಪರಿಶೀಲನೆ ಓಡಿಸುತ್ತದೆ. ಸಂವಹನ ಮೂಲಕ ಭ್ರಮೆ ನಿವಾರಣೆ: ಕಾಣೆಯಾದ ಮಾಹಿತಿಯನ್ನು ಕಲ್ಪಿಸುವ ಬದಲು ಕೇಳುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A shallow critic accepted number + 2. 2) The tests failed three of four cases. 3) One case (2, 4) passed the wrong code. 4) number + 3 failed all four triple cases. 5) Missing business fields became a request, not a guess.",
    "bodyKn": "1) ಆಳವಿಲ್ಲದ critic number + 2 ಒಪ್ಪಿತು. 2) ಪರೀಕ್ಷೆಗಳು ನಾಲ್ಕರಲ್ಲಿ ಮೂರು ಪ್ರಕರಣಗಳಲ್ಲಿ ವಿಫಲವಾದವು. 3) ಒಂದು ಪ್ರಕರಣ (2, 4) ತಪ್ಪು ಕೋಡ್ ಪಾಸು ಮಾಡಿತು. 4) number + 3 ಎಲ್ಲಾ ನಾಲ್ಕು triple ಪ್ರಕರಣಗಳಲ್ಲಿ ವಿಫಲವಾಯಿತು. 5) ಕಾಣೆಯಾದ ವ್ಯಾಪಾರ ಕ್ಷೇತ್ರಗಳು ಊಹೆಯಲ್ಲ, ವಿನಂತಿಯಾದವು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many of the 4 tests did number + 2 fail?",
      "qKn": "number + 2 ನಾಲ್ಕು ಪರೀಕ್ಷೆಗಳಲ್ಲಿ ಎಷ್ಟು ವಿಫಲವಾಯಿತು?",
      "opts": [
       "3",
       "1",
       "4",
       "0"
      ],
      "optsKn": [
       "3",
       "1",
       "4",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "Which error did the three similar average functions raise for an empty list?",
      "qKn": "ಖಾಲಿ ಪಟ್ಟಿಗೆ ಮೂರು ಒಂದೇ ರೀತಿಯ average ಕಾರ್ಯಗಳು ಯಾವ ದೋಷ ಎತ್ತಿದವು?",
      "opts": [
       "ZeroDivisionError",
       "ValueError",
       "TypeError",
       "none"
      ],
      "optsKn": [
       "ZeroDivisionError",
       "ValueError",
       "TypeError",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Did number + 3 pass any triple test case?",
      "qKn": "number + 3 ಯಾವುದೇ triple ಪರೀಕ್ಷೆ ಪಾಸು ಮಾಡಿತೇ?",
      "opts": [
       "no, it failed all four",
       "yes, input 2",
       "yes, input 0",
       "only the negative one"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ನಾಲ್ಕರಲ್ಲೂ ವಿಫಲ",
       "ಹೌದು, ಇನ್ಪುಟ್ 2",
       "ಹೌದು, ಇನ್ಪುಟ್ 0",
       "ಋಣಾತ್ಮಕ ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "What did the one test case (2, 4) say about the wrong code?",
      "qKn": "ಒಂದು ಪರೀಕ್ಷಾ ಪ್ರಕರಣ (2, 4) ತಪ್ಪು ಕೋಡ್ ಬಗ್ಗೆ ಏನು ಹೇಳಿತು?",
      "opts": [
       "it passed",
       "it failed",
       "it errored",
       "it was skipped"
      ],
      "optsKn": [
       "ಪಾಸಾಯಿತು",
       "ವಿಫಲವಾಯಿತು",
       "ದೋಷ ಬಂತು",
       "ಬಿಟ್ಟುಹೋಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What did the executor return when the plan lacked shipping fields?",
      "qKn": "ಯೋಜನೆಯಲ್ಲಿ shipping ಕ್ಷೇತ್ರಗಳಿಲ್ಲದಾಗ executor ಏನು ನೀಡಿತು?",
      "opts": [
       "a request naming the three fields",
       "a guessed rate of 10",
       "nothing",
       "a crash"
      ],
      "optsKn": [
       "ಮೂರು ಕ್ಷೇತ್ರ ಹೆಸರಿಸಿದ ವಿನಂತಿ",
       "10 ರ ಊಹಿತ ದರ",
       "ಏನೂ ಇಲ್ಲ",
       "ಕ್ರ್ಯಾಶ್"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
