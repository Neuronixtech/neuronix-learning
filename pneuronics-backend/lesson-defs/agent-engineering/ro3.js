module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215ec",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Role Specialization: Planner, Critic, Executor, Verifier (Part 3 of 3) — Boundaries, a Strict Verifier and Approval",
 "titleKn": "ಪಾತ್ರ ವಿಶೇಷೀಕರಣ: Planner, Critic, Executor, Verifier (ಭಾಗ 3 / 3) — ಗಡಿಗಳು, ಕಟ್ಟುನಿಟ್ಟಿನ ಪರಿಶೀಲಕ ಮತ್ತು ಅನುಮೋದನೆ",
 "desc": "Enforce tool boundaries, run a strict verifier, walk a state machine to awaiting approval and compute reliability metrics.",
 "descKn": "ಉಪಕರಣ ಗಡಿ ಜಾರಿ ಮಾಡಿ, ಕಟ್ಟುನಿಟ್ಟಿನ ಪರಿಶೀಲಕ ಓಡಿಸಿ, ಸ್ಥಿತಿ ಯಂತ್ರವನ್ನು ಅನುಮೋದನೆಗೆ ನಡೆಸಿ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹತೆ ಮಾಪನ ಲೆಕ್ಕ ಹಾಕಿ.",
 "objectives": [
  "Enforce tool boundaries.",
  "Keep verifier errors apart.",
  "Use a state machine.",
  "Combine reviewers.",
  "Compute metrics."
 ],
 "objectivesKn": [
  "ಉಪಕರಣ ಗಡಿ ಜಾರಿ ಮಾಡಿ.",
  "ಪರಿಶೀಲಕ ದೋಷ ಬೇರೆ ಇಡಿ.",
  "ಸ್ಥಿತಿ ಯಂತ್ರ ಬಳಸಿ.",
  "ವಿಮರ್ಶಕರನ್ನು ಸೇರಿಸಿ.",
  "ಮಾಪನ ಲೆಕ್ಕ ಹಾಕಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Role Specialization: Planner, Critic, Executor, Verifier (Part 3 of 3)",
    "textKn": "ಪಾತ್ರ ವಿಶೇಷೀಕರಣ: Planner, Critic, Executor, Verifier (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: a permission table, a restricted verifier, a verifier error that can look like a pass, hashing and a state machine ending at awaiting approval, specialist reviewers and reliability metrics. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind a four-role workflow (planner, executor, critic, verifier), a critic that accepts wrong code while tests reject it, permissions, an AST critic, a bounded revision loop, a restricted verifier, a state machine ending at awaiting approval, specialist reviewers and reliability metrics, not the real software, and every role is a deterministic scripted function, the revisions are chosen by attempt number, exec runs fixed trusted code only, the restricted evaluator handles one tiny function shape and no model or real reviewer is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. MetaGPT, ChatDev, MAST and the framework mappings are described in the lesson and were not run or checked against their sources. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಅನುಮತಿ ಕೋಷ್ಟಕ, ನಿರ್ಬಂಧಿತ ಪರಿಶೀಲಕ, ಪಾಸಿನಂತೆ ಕಾಣಬಹುದಾದ ಪರಿಶೀಲಕ ದೋಷ, hashing ಮತ್ತು ಅನುಮೋದನೆಗಾಗಿ ಕಾಯುವುದರಲ್ಲಿ ಮುಗಿಯುವ ಸ್ಥಿತಿ ಯಂತ್ರ, ವಿಶೇಷ ವಿಮರ್ಶಕರು ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹತೆ ಮಾಪನಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ನಾಲ್ಕು-ಪಾತ್ರದ ಕೆಲಸದ ಹರಿವು (planner, executor, critic, verifier), ತಪ್ಪು ಕೋಡ್ ಒಪ್ಪುವ critic ಮತ್ತು ಅದನ್ನು ತಿರಸ್ಕರಿಸುವ ಪರೀಕ್ಷೆಗಳು, ಅನುಮತಿಗಳು, AST critic, ಮಿತಿಯ ಪರಿಷ್ಕರಣೆ ಲೂಪ್, ನಿರ್ಬಂಧಿತ ಪರಿಶೀಲಕ, ಅನುಮೋದನೆಗಾಗಿ ಕಾಯುವುದರಲ್ಲಿ ಮುಗಿಯುವ ಸ್ಥಿತಿ ಯಂತ್ರ, ವಿಶೇಷ ವಿಮರ್ಶಕರು ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹತೆ ಮಾಪನಗಳು ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪ್ರತಿ ಪಾತ್ರ ನಿರ್ಧಾರಿತ ಸ್ಕ್ರಿಪ್ಟ್ ಕಾರ್ಯ, ಪರಿಷ್ಕರಣೆಗಳನ್ನು ಪ್ರಯತ್ನ ಸಂಖ್ಯೆಯಿಂದ ಆರಿಸಲಾಗುತ್ತದೆ, exec ನಿಗದಿತ ನಂಬಿಕಸ್ಥ ಕೋಡ್ ಮಾತ್ರ ಓಡಿಸುತ್ತದೆ, ನಿರ್ಬಂಧಿತ evaluator ಒಂದು ಚಿಕ್ಕ ಕಾರ್ಯ ಆಕಾರ ನಿಭಾಯಿಸುತ್ತದೆ ಮತ್ತು ಯಾವ ಮಾದರಿ ಅಥವಾ ನಿಜ ವಿಮರ್ಶಕನೂ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ನೀಡಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. MetaGPT, ChatDev, MAST ಮತ್ತು framework ಹೋಲಿಕೆಗಳು lesson ನಲ್ಲಿ ವಿವರಿಸಲ್ಪಟ್ಟಿವೆ ಮತ್ತು ಓಡಿಸಲಾಗಿಲ್ಲ ಅಥವಾ ಮೂಲಗಳೊಂದಿಗೆ ಪರಿಶೀಲಿಸಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "From a Demo to Controls",
    "textKn": "ಡೆಮೊದಿಂದ ನಿಯಂತ್ರಣಗಳಿಗೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Boundaries, a Strict Verifier and a State Machine",
    "headingKn": "ಗಡಿಗಳು, ಕಟ್ಟುನಿಟ್ಟಿನ ಪರಿಶೀಲಕ ಮತ್ತು ಸ್ಥಿತಿ ಯಂತ್ರ",
    "bodyEn": "This part turns the roles into controls. A tool table gives each role only its own tools. A restricted AST evaluator replaces exec for one tiny function shape, and a lenient wrapper shows how a verifier error can be mistaken for the expected exception. A state machine records artifact hashes and ends at awaiting approval, specialist reviewers are combined with a blocking rule, and the metrics from the lesson are computed with an audit line.",
    "bodyKn": "ಈ ಭಾಗ ಪಾತ್ರಗಳನ್ನು ನಿಯಂತ್ರಣಗಳಾಗಿಸುತ್ತದೆ. ಉಪಕರಣ ಕೋಷ್ಟಕ ಪ್ರತಿ ಪಾತ್ರಕ್ಕೆ ಅದರ ಸ್ವಂತ ಉಪಕರಣಗಳನ್ನು ಮಾತ್ರ ನೀಡುತ್ತದೆ. ನಿರ್ಬಂಧಿತ AST evaluator ಒಂದು ಚಿಕ್ಕ ಕಾರ್ಯ ಆಕಾರಕ್ಕೆ exec ಬದಲು ಬರುತ್ತದೆ, ಮತ್ತು ಸಡಿಲ wrapper ಪರಿಶೀಲಕ ದೋಷವನ್ನು ನಿರೀಕ್ಷಿತ ಅಪವಾದ ಎಂದು ತಪ್ಪಾಗಿ ಭಾವಿಸುವುದನ್ನು ತೋರಿಸುತ್ತದೆ. ಸ್ಥಿತಿ ಯಂತ್ರ ಕೃತಿ hash ಗಳನ್ನು ದಾಖಲಿಸಿ ಅನುಮೋದನೆಗಾಗಿ ಕಾಯುವುದರಲ್ಲಿ ಮುಗಿಯುತ್ತದೆ, ವಿಶೇಷ ವಿಮರ್ಶಕರನ್ನು ತಡೆ ನಿಯಮದೊಂದಿಗೆ ಸೇರಿಸಲಾಗುತ್ತದೆ, ಮತ್ತು lesson ನ ಮಾಪನಗಳನ್ನು ಆಡಿಟ್ ಸಾಲಿನೊಂದಿಗೆ ಲೆಕ್ಕ ಹಾಕಲಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Production Controls",
    "headingKn": "ಉತ್ಪಾದನಾ ನಿಯಂತ್ರಣಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">passing the checks is not the same as being approved</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">boundary</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">tools per role</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">verifier</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">strict, no guessing</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">state</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">ends at approval</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">metrics</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">rates and audit</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">passing the checks is not the same as being approved</text></svg>",
    "captionEn": "Enforced tools, a strict verifier, an explicit state machine and numbers.",
    "captionKn": "ಜಾರಿಯ ಉಪಕರಣಗಳು, ಕಟ್ಟುನಿಟ್ಟಿನ ಪರಿಶೀಲಕ, ಸ್ಪಷ್ಟ ಸ್ಥಿತಿ ಯಂತ್ರ ಮತ್ತು ಸಂಖ್ಯೆಗಳು."
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
      "permission table",
      "who may write source and run tests"
     ],
     [
      "restricted verifier",
      "two versions of calculate_subtotal"
     ],
     [
      "verifier error",
      "strict against lenient on hostile code"
     ],
     [
      "state machine",
      "eight transitions and an illegal move"
     ],
     [
      "specialist reviewers",
      "one blocking finding rejects"
     ],
     [
      "metrics and audit",
      "0.7, 0.9, 0.1 and 0.667"
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
    "filename": "ro_3.py",
    "headingEn": "The restricted evaluator",
    "headingKn": "ನಿರ್ಬಂಧಿತ evaluator",
    "descEn": "eval_function interprets a tiny function shape and raises Unsupported for anything else, and run_cases can treat that as an error or, wrongly, as an expected exception.",
    "descKn": "eval_function ಚಿಕ್ಕ ಕಾರ್ಯ ಆಕಾರ ಅರ್ಥೈಸಿ ಉಳಿದೆಲ್ಲಕ್ಕೆ Unsupported ಎತ್ತುತ್ತದೆ, ಮತ್ತು run_cases ಅದನ್ನು ದೋಷ ಎಂದು ಅಥವಾ ತಪ್ಪಾಗಿ ನಿರೀಕ್ಷಿತ ಅಪವಾದ ಎಂದು ಪರಿಗಣಿಸಬಹುದು.",
    "code": "def eval_function(code, arg):\n    tree = ast.parse(code)\n    fn = tree.body[0]\n    if not isinstance(fn, ast.FunctionDef) or len(tree.body) != 1:\n        raise Unsupported(\"only one function allowed\")\n    env = {fn.args.args[0].arg: arg}\n\n    def ev(n):\n        if isinstance(n, ast.Constant):\n            return n.value\n        if isinstance(n, ast.Name):\n            return env[n.id]\n        if isinstance(n, ast.BinOp):\n            a, b = ev(n.left), ev(n.right)\n            if isinstance(n.op, ast.Mult):\n                return a * b\n            if isinstance(n.op, ast.Add):\n                return a + b\n            raise Unsupported(\"operator\")\n        if isinstance(n, ast.Compare) and len(n.ops) == 1 and isinstance(n.ops[0], ast.Lt):\n            return ev(n.left) < ev(n.comparators[0])\n        raise Unsupported(type(n).__name__)\n\n    for st in fn.body:\n        if isinstance(st, ast.If):\n            if ev(st.test):\n                for s2 in st.body:\n                    if isinstance(s2, ast.Raise):\n                        raise ValueError(\"raised\")\n                    raise Unsupported(\"statement in if\")\n        elif isinstance(st, ast.Return):\n            return ev(st.value)\n        else:\n            raise Unsupported(type(st).__name__)\n    return None\n\n\ndef run_cases(code, strict=True):\n    out = {}\n    for name, x, want in ((\"positive\", 3, 6), (\"zero\", 0, 0), (\"negative\", -1, \"ValueError\")):\n        try:\n            got = eval_function(code, x)\n            out[name] = got == want\n        except ValueError:\n            out[name] = want == \"ValueError\"\n        except Unsupported as e:\n            if strict:\n                out[name] = f\"verifier error: {e}\"\n            else:\n                out[name] = want == \"ValueError\"\n        except Exception as e:\n            out[name] = f\"verifier error: {type(e).__name__}\"\n    return out"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ro_3.py",
    "headingEn": "State machine and metrics",
    "headingKn": "ಸ್ಥಿತಿ ಯಂತ್ರ ಮತ್ತು ಮಾಪನಗಳು",
    "descEn": "Workflow allows only listed transitions, specialist_decision rejects on any blocking finding and metrics computes the rates.",
    "descKn": "Workflow ಪಟ್ಟಿ ಮಾಡಿದ ಪರಿವರ್ತನೆಗಳನ್ನು ಮಾತ್ರ ಅನುಮತಿಸುತ್ತದೆ, specialist_decision ಯಾವುದೇ ತಡೆ ಕಂಡುಹಿಡಿಕೆಯಲ್ಲಿ ತಿರಸ್ಕರಿಸುತ್ತದೆ ಮತ್ತು metrics ದರಗಳನ್ನು ಲೆಕ್ಕ ಹಾಕುತ್ತದೆ.",
    "code": "class Workflow:\n    state: str = \"PLANNED\"\n    log: list = field(default_factory=list)\n    ALLOWED = {\"PLANNED\": {\"EXECUTING\"}, \"EXECUTING\": {\"CRITIQUE\"}, \"CRITIQUE\": {\"VERIFYING\", \"REVISION\"}, \"VERIFYING\": {\"REVISION\", \"AWAITING_APPROVAL\"}, \"REVISION\": {\"EXECUTING\", \"ESCALATED\"}, \"AWAITING_APPROVAL\": {\"APPROVED\", \"REJECTED\"}}\n\n    def go(self, new, **info):\n        if new not in self.ALLOWED.get(self.state, set()):\n            raise ValueError(f\"illegal transition {self.state} -> {new}\")\n        self.log.append({\"from\": self.state, \"to\": new, **info})\n        self.state = new\n\n\ndef specialist_decision(reviews):\n    blocking = [n for n, r in reviews.items() if r[\"blocking\"]]\n    return {\"accepted\": not blocking, \"blocking\": blocking}\n\n\ndef metrics(reports):\n    n = len(reports)\n    return {\"first_pass\": sum(r[\"attempts\"] == 1 and r[\"ok\"] for r in reports) / n, \"final\": sum(r[\"ok\"] for r in reports) / n, \"unresolved\": sum(not r[\"ok\"] for r in reports) / n, \"avg_attempts\": sum(r[\"attempts\"] for r in reports) / n}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ro_3.py",
    "headingEn": "The experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the six experiments in order and prints the real result of each.",
    "descKn": "main() ಆರು ಪ್ರಯೋಗಗಳನ್ನು ಕ್ರಮವಾಗಿ ಓಡಿಸಿ ಪ್ರತಿಯೊಂದರ ನಿಜ ಫಲಿತಾಂಶ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: a role prompt against a permission boundary\")\n    for role, act in ((\"critic\", \"write_approved_source\"), (\"executor\", \"write_approved_source\"), (\"verifier\", \"run_approved_tests\"), (\"executor\", \"run_approved_tests\"), (\"critic\", \"apply_acceptance_policy\")):\n        try:\n            authorize(role, act)\n            print(f\"{role:<9} {act:<24} allowed\")\n        except PermissionDenied as e:\n            print(f\"{role:<9} {act:<24} denied\")\n    print(\"the table gives only the executor the write tool and only the verifier the test tool, and a critic asking to write is denied before anything runs; a sentence in a prompt saying do not modify files would not stop a tool the role can still call, and this table helps only if a trusted dispatcher enforces it on every call.\")\n\n    section(\"2. Genuinely running: the restricted verifier on two versions\")\n    print(\"first attempt :\", run_cases(V1))\n    print(\"second attempt:\", run_cases(V2))\n    print(\"the first version passes positive and zero and fails the negative-price requirement because it returns -2 where a ValueError is required, and the second version passes all three; the evaluator understands only this small function shape, so it is a teaching device and not a way to run arbitrary generated code.\")\n\n    section(\"3. Genuinely running: a verifier error that looks like a pass\")\n    print(\"strict verifier on hostile code :\", run_cases(HOSTILE, strict=True))\n    print(\"lenient verifier on hostile code:\", run_cases(HOSTILE, strict=False))\n    print(\"a verifier that treats any failure to evaluate as the expected exception reports the negative case as passed for code that is not even a function, while the strict one reports a verifier error for all three cases; unsupported code, a verifier bug and an expected application exception must be kept apart or a broken check will look like a success.\")\n\n    section(\"4. Genuinely running: hashing the artifact and moving through states\")\n    wf = Workflow()\n    wf.go(\"EXECUTING\", artifact=sha(V1)); wf.go(\"CRITIQUE\"); wf.go(\"VERIFYING\"); wf.go(\"REVISION\", failed=[\"negative\"])\n    wf.go(\"EXECUTING\", artifact=sha(V2)); wf.go(\"CRITIQUE\"); wf.go(\"VERIFYING\"); wf.go(\"AWAITING_APPROVAL\", artifact=sha(V2))\n    print(\"final state:\", wf.state, \"| transitions:\", len(wf.log), \"| hashes differ:\", sha(V1) != sha(V2))\n    try:\n        wf.go(\"EXECUTING\")\n    except ValueError as e:\n        print(\"illegal move:\", e)\n    print(\"the run ends in AWAITING_APPROVAL with the hash of the second version recorded, and a jump from AWAITING_APPROVAL back to EXECUTING is refused; that state means the checks passed and a human still has to decide, it does not mean anyone approved.\")\n\n    section(\"5. Genuinely running: specialist reviewers and where independence ends\")\n    reviews = {\"correctness\": {\"blocking\": False}, \"security\": {\"blocking\": True}, \"performance\": {\"blocking\": False}, \"tests\": {\"blocking\": False}}\n    print(\"one blocking reviewer:\", specialist_decision(reviews))\n    reviews[\"security\"][\"blocking\"] = False\n    print(\"no blocking reviewer :\", specialist_decision(reviews))\n    print(\"a single blocking finding from the security reviewer rejects the artifact even though three reviewers accepted it, and with no blocking finding it passes; the reviews here are scripted, so this tests the aggregation rule and says nothing about whether real reviewers would be independent of each other.\")\n\n    section(\"6. Genuinely computing: reliability metrics and an audit record\")\n    reports = [{\"attempts\": 1, \"ok\": True}] * 70 + [{\"attempts\": 2, \"ok\": True}] * 20 + [{\"attempts\": 3, \"ok\": False}] * 10\n    print({k: round(v, 3) for k, v in metrics(reports).items()})\n    false_accept = sum(1 for crit, ref in ((True, True), (True, False), (True, False), (False, False)) if crit and not ref) / 3\n    print(\"critic false-accept rate on 3 critic-accepted artifacts, 2 of which fail the reference tests:\", round(false_accept, 3))\n    event = {\"workflow\": \"w1\", \"role\": \"verifier\", \"action\": \"run_approved_tests\", \"artifact\": sha(V2), \"result\": \"pass\"}\n    print(\"audit line:\", json.dumps(event, sort_keys=True))\n    print(\"the 100 invented tasks give a first-pass rate of 0.7, a final rate of 0.9 and 0.1 unresolved, and the false-accept rate is 2 of 3 on four invented pairs, so these numbers show how the metrics are computed and are not measurements of any real system; an audit line names the role, the action and the artifact hash so a decision can be traced back.\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a role prompt against a permission boundary ---\ncritic    write_approved_source    denied\nexecutor  write_approved_source    allowed\nverifier  run_approved_tests       allowed\nexecutor  run_approved_tests       denied\ncritic    apply_acceptance_policy  denied\nthe table gives only the executor the write tool and only the verifier the test tool, and a critic asking to write is denied before anything runs; a sentence in a prompt saying do not modify files would not stop a tool the role can still call, and this table helps only if a trusted dispatcher enforces it on every call.\n\n--- 2. Genuinely running: the restricted verifier on two versions ---\nfirst attempt : {'positive': True, 'zero': True, 'negative': False}\nsecond attempt: {'positive': True, 'zero': True, 'negative': True}\nthe first version passes positive and zero and fails the negative-price requirement because it returns -2 where a ValueError is required, and the second version passes all three; the evaluator understands only this small function shape, so it is a teaching device and not a way to run arbitrary generated code.\n\n--- 3. Genuinely running: a verifier error that looks like a pass ---\nstrict verifier on hostile code : {'positive': 'verifier error: only one function allowed', 'zero': 'verifier error: only one function allowed', 'negative': 'verifier error: only one function allowed'}\nlenient verifier on hostile code: {'positive': False, 'zero': False, 'negative': True}\na verifier that treats any failure to evaluate as the expected exception reports the negative case as passed for code that is not even a function, while the strict one reports a verifier error for all three cases; unsupported code, a verifier bug and an expected application exception must be kept apart or a broken check will look like a success.\n\n--- 4. Genuinely running: hashing the artifact and moving through states ---\nfinal state: AWAITING_APPROVAL | transitions: 8 | hashes differ: True\nillegal move: illegal transition AWAITING_APPROVAL -> EXECUTING\nthe run ends in AWAITING_APPROVAL with the hash of the second version recorded, and a jump from AWAITING_APPROVAL back to EXECUTING is refused; that state means the checks passed and a human still has to decide, it does not mean anyone approved.\n\n--- 5. Genuinely running: specialist reviewers and where independence ends ---\none blocking reviewer: {'accepted': False, 'blocking': ['security']}\nno blocking reviewer : {'accepted': True, 'blocking': []}\na single blocking finding from the security reviewer rejects the artifact even though three reviewers accepted it, and with no blocking finding it passes; the reviews here are scripted, so this tests the aggregation rule and says nothing about whether real reviewers would be independent of each other.\n\n--- 6. Genuinely computing: reliability metrics and an audit record ---\n{'first_pass': 0.7, 'final': 0.9, 'unresolved': 0.1, 'avg_attempts': 1.4}\ncritic false-accept rate on 3 critic-accepted artifacts, 2 of which fail the reference tests: 0.667\naudit line: {\"action\": \"run_approved_tests\", \"artifact\": \"9343e66454b33fe9\", \"result\": \"pass\", \"role\": \"verifier\", \"workflow\": \"w1\"}\nthe 100 invented tasks give a first-pass rate of 0.7, a final rate of 0.9 and 0.1 unresolved, and the false-accept rate is 2 of 3 on four invented pairs, so these numbers show how the metrics are computed and are not measurements of any real system; an audit line names the role, the action and the artifact hash so a decision can be traced back."
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
    "headingEn": "Experiment 1: A role prompt against a permission boundary",
    "headingKn": "ಪ್ರಯೋಗ 1: A role prompt against a permission boundary",
    "bodyEn": "What it ran: A role prompt against a permission boundary. What the lab concluded: the table gives only the executor the write tool and only the verifier the test tool, and a critic asking to write is denied before anything runs; a sentence in a prompt saying do not modify files would not stop a tool the role can still call, and this table helps only if a trusted dispatcher enforces it on every call.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A role prompt against a permission boundary. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the table gives only the executor the write tool and only the verifier the test tool, and a critic asking to write is denied before anything runs; a sentence in a prompt saying do not modify files would not stop a tool the role can still call, and this table helps only if a trusted dispatcher enforces it on every call."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: a role prompt against a permission boundary ---\ncritic    write_approved_source    denied\nexecutor  write_approved_source    allowed\nverifier  run_approved_tests       allowed\nexecutor  run_approved_tests       denied\ncritic    apply_acceptance_policy  denied"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: The restricted verifier on two versions",
    "headingKn": "ಪ್ರಯೋಗ 2: The restricted verifier on two versions",
    "bodyEn": "What it ran: The restricted verifier on two versions. What the lab concluded: the first version passes positive and zero and fails the negative-price requirement because it returns -2 where a ValueError is required, and the second version passes all three; the evaluator understands only this small function shape, so it is a teaching device and not a way to run arbitrary generated code.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The restricted verifier on two versions. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the first version passes positive and zero and fails the negative-price requirement because it returns -2 where a ValueError is required, and the second version passes all three; the evaluator understands only this small function shape, so it is a teaching device and not a way to run arbitrary generated code."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: the restricted verifier on two versions ---\nfirst attempt : {'positive': True, 'zero': True, 'negative': False}\nsecond attempt: {'positive': True, 'zero': True, 'negative': True}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: A verifier error that looks like a pass",
    "headingKn": "ಪ್ರಯೋಗ 3: A verifier error that looks like a pass",
    "bodyEn": "What it ran: A verifier error that looks like a pass. What the lab concluded: a verifier that treats any failure to evaluate as the expected exception reports the negative case as passed for code that is not even a function, while the strict one reports a verifier error for all three cases; unsupported code, a verifier bug and an expected application exception must be kept apart or a broken check will look like a success.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A verifier error that looks like a pass. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a verifier that treats any failure to evaluate as the expected exception reports the negative case as passed for code that is not even a function, while the strict one reports a verifier error for all three cases; unsupported code, a verifier bug and an expected application exception must be kept apart or a broken check will look like a success."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: a verifier error that looks like a pass ---\nstrict verifier on hostile code : {'positive': 'verifier error: only one function allowed', 'zero': 'verifier error: only one function allowed', 'negative': 'verifier error: only one function allowed'}\nlenient verifier on hostile code: {'positive': False, 'zero': False, 'negative': True}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Hashing the artifact and moving through states",
    "headingKn": "ಪ್ರಯೋಗ 4: Hashing the artifact and moving through states",
    "bodyEn": "What it ran: Hashing the artifact and moving through states. What the lab concluded: the run ends in AWAITING_APPROVAL with the hash of the second version recorded, and a jump from AWAITING_APPROVAL back to EXECUTING is refused; that state means the checks passed and a human still has to decide, it does not mean anyone approved.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Hashing the artifact and moving through states. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the run ends in AWAITING_APPROVAL with the hash of the second version recorded, and a jump from AWAITING_APPROVAL back to EXECUTING is refused; that state means the checks passed and a human still has to decide, it does not mean anyone approved."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: hashing the artifact and moving through states ---\nfinal state: AWAITING_APPROVAL | transitions: 8 | hashes differ: True\nillegal move: illegal transition AWAITING_APPROVAL -> EXECUTING"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Specialist reviewers and where independence ends",
    "headingKn": "ಪ್ರಯೋಗ 5: Specialist reviewers and where independence ends",
    "bodyEn": "What it ran: Specialist reviewers and where independence ends. What the lab concluded: a single blocking finding from the security reviewer rejects the artifact even though three reviewers accepted it, and with no blocking finding it passes; the reviews here are scripted, so this tests the aggregation rule and says nothing about whether real reviewers would be independent of each other.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Specialist reviewers and where independence ends. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a single blocking finding from the security reviewer rejects the artifact even though three reviewers accepted it, and with no blocking finding it passes; the reviews here are scripted, so this tests the aggregation rule and says nothing about whether real reviewers would be independent of each other."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: specialist reviewers and where independence ends ---\none blocking reviewer: {'accepted': False, 'blocking': ['security']}\nno blocking reviewer : {'accepted': True, 'blocking': []}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: Reliability metrics and an audit record",
    "headingKn": "ಪ್ರಯೋಗ 6: Reliability metrics and an audit record",
    "bodyEn": "What it ran: Reliability metrics and an audit record. What the lab concluded: the 100 invented tasks give a first-pass rate of 0.7, a final rate of 0.9 and 0.1 unresolved, and the false-accept rate is 2 of 3 on four invented pairs, so these numbers show how the metrics are computed and are not measurements of any real system; an audit line names the role, the action and the artifact hash so a decision can be traced back.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Reliability metrics and an audit record. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the 100 invented tasks give a first-pass rate of 0.7, a final rate of 0.9 and 0.1 unresolved, and the false-accept rate is 2 of 3 on four invented pairs, so these numbers show how the metrics are computed and are not measurements of any real system; an audit line names the role, the action and the artifact hash so a decision can be traced back."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely computing: reliability metrics and an audit record ---\n{'first_pass': 0.7, 'final': 0.9, 'unresolved': 0.1, 'avg_attempts': 1.4}\ncritic false-accept rate on 3 critic-accepted artifacts, 2 of which fail the reference tests: 0.667\naudit line: {\"action\": \"run_approved_tests\", \"artifact\": \"9343e66454b33fe9\", \"result\": \"pass\", \"role\": \"verifier\", \"workflow\": \"w1\"}"
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
    "headingEn": "Genuinely Found: A Broken Check Looked Like a Pass",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮುರಿದ ಪರಿಶೀಲನೆ ಪಾಸಿನಂತೆ ಕಂಡಿತು",
    "bodyEn": "Section 3: for the hostile code import os the strict verifier reported \"verifier error: only one function allowed\" for all three cases, while the lenient verifier reported the negative case as True. Section 2: the first version failed only the negative case and the second passed all three.",
    "bodyKn": "ವಿಭಾಗ 3: ಹಾನಿಕರ ಕೋಡ್ import os ಗೆ ಕಟ್ಟುನಿಟ್ಟಿನ ಪರಿಶೀಲಕ ಮೂರೂ ಪ್ರಕರಣಗಳಿಗೆ \"verifier error: only one function allowed\" ವರದಿ ಮಾಡಿತು, ಆದರೆ ಸಡಿಲ ಪರಿಶೀಲಕ ಋಣಾತ್ಮಕ ಪ್ರಕರಣವನ್ನು True ಎಂದಿತು. ವಿಭಾಗ 2: ಮೊದಲ ಆವೃತ್ತಿ ಋಣಾತ್ಮಕ ಪ್ರಕರಣದಲ್ಲಿ ಮಾತ್ರ ವಿಫಲವಾಯಿತು ಮತ್ತು ಎರಡನೆಯದು ಮೂರೂ ಪಾಸು ಮಾಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Approval Is Separate",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅನುಮೋದನೆ ಪ್ರತ್ಯೇಕ",
    "bodyEn": "Section 1: only the executor was allowed write_approved_source and only the verifier run_approved_tests. Section 4: the workflow made 8 transitions and ended AWAITING_APPROVAL, and AWAITING_APPROVAL to EXECUTING was refused. Section 5: one blocking security finding rejected the artifact.",
    "bodyKn": "ವಿಭಾಗ 1: executor ಗೆ ಮಾತ್ರ write_approved_source ಮತ್ತು verifier ಗೆ ಮಾತ್ರ run_approved_tests ಅನುಮತಿ ಇತ್ತು. ವಿಭಾಗ 4: ಕೆಲಸದ ಹರಿವು 8 ಪರಿವರ್ತನೆಗಳನ್ನು ಮಾಡಿ AWAITING_APPROVAL ನಲ್ಲಿ ಮುಗಿಯಿತು, ಮತ್ತು AWAITING_APPROVAL ನಿಂದ EXECUTING ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 5: ಒಂದು ತಡೆಯುವ security ಕಂಡುಹಿಡಿಕೆ ಕೃತಿಯನ್ನು ತಿರಸ್ಕರಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Metrics and the Audit Line",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮಾಪನಗಳು ಮತ್ತು ಆಡಿಟ್ ಸಾಲು",
    "bodyEn": "Section 6: 100 invented tasks gave first_pass 0.7, final 0.9, unresolved 0.1 and avg_attempts 1.4, and the critic false-accept rate was 0.667. The audit line held the workflow, role, action, artifact hash and result.",
    "bodyKn": "ವಿಭಾಗ 6: ಕಲ್ಪಿತ 100 ಕೆಲಸಗಳು first_pass 0.7, final 0.9, unresolved 0.1 ಮತ್ತು avg_attempts 1.4 ನೀಡಿದವು, ಮತ್ತು critic ಸುಳ್ಳು-ಸ್ವೀಕಾರ ದರ 0.667 ಆಗಿತ್ತು. ಆಡಿಟ್ ಸಾಲು workflow, ಪಾತ್ರ, ಕ್ರಿಯೆ, ಕೃತಿ hash ಮತ್ತು ಫಲಿತಾಂಶ ಹೊಂದಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A role is only a boundary when the tool it may call is enforced, a verifier is only trustworthy when its own errors are not read as passes, and a green run still needs a person before anything ships.",
    "bodyKn": "ಪಾತ್ರ ತಾನು ಕರೆಯಬಹುದಾದ ಉಪಕರಣ ಜಾರಿಯಾದಾಗ ಮಾತ್ರ ಗಡಿ, ಪರಿಶೀಲಕ ತನ್ನ ಸ್ವಂತ ದೋಷಗಳನ್ನು ಪಾಸ್ ಎಂದು ಓದದಿದ್ದಾಗ ಮಾತ್ರ ನಂಬಲರ್ಹ, ಮತ್ತು ಹಸಿರು ಓಟಕ್ಕೂ ಏನನ್ನಾದರೂ ಬಿಡುಗಡೆ ಮಾಡುವ ಮೊದಲು ವ್ಯಕ್ತಿ ಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"AWAITING_APPROVAL means approved.\" It means the configured checks passed and a person still has to decide.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"AWAITING_APPROVAL ಎಂದರೆ ಅನುಮೋದಿತ.\" ಅದರರ್ಥ ಸಂರಚಿತ ಪರಿಶೀಲನೆಗಳು ಪಾಸಾದವು ಮತ್ತು ವ್ಯಕ್ತಿ ಇನ್ನೂ ನಿರ್ಧರಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Permission boundary: tools a role can actually call. Restricted evaluator: interprets a tiny code subset and nothing else. Verifier error: the check itself failed, not the artifact. State machine: only listed transitions are allowed. Specialist reviewer: a critic with one concern.",
    "bodyKn": "ಅನುಮತಿ ಗಡಿ: ಪಾತ್ರ ನಿಜವಾಗಿ ಕರೆಯಬಹುದಾದ ಉಪಕರಣಗಳು. ನಿರ್ಬಂಧಿತ evaluator: ಚಿಕ್ಕ ಕೋಡ್ ಉಪಗುಂಪನ್ನು ಮಾತ್ರ ಅರ್ಥೈಸುತ್ತದೆ. ಪರಿಶೀಲಕ ದೋಷ: ಕೃತಿ ಅಲ್ಲ, ಪರಿಶೀಲನೆಯೇ ವಿಫಲವಾಯಿತು. ಸ್ಥಿತಿ ಯಂತ್ರ: ಪಟ್ಟಿ ಮಾಡಿದ ಪರಿವರ್ತನೆಗಳು ಮಾತ್ರ. ವಿಶೇಷ ವಿಮರ್ಶಕ: ಒಂದು ಕಾಳಜಿಯ critic."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Only the executor could write and only the verifier could run tests. 2) A lenient verifier passed hostile code on the negative case. 3) The workflow ended AWAITING_APPROVAL after 8 transitions. 4) One blocking reviewer rejected the artifact. 5) The metrics came out 0.7, 0.9 and 0.1 on invented data.",
    "bodyKn": "1) executor ಮಾತ್ರ ಬರೆಯಬಲ್ಲದು ಮತ್ತು verifier ಮಾತ್ರ ಪರೀಕ್ಷೆ ಓಡಿಸಬಲ್ಲದು. 2) ಸಡಿಲ ಪರಿಶೀಲಕ ಹಾನಿಕರ ಕೋಡ್ ಅನ್ನು ಋಣಾತ್ಮಕ ಪ್ರಕರಣದಲ್ಲಿ ಪಾಸು ಮಾಡಿತು. 3) ಕೆಲಸದ ಹರಿವು 8 ಪರಿವರ್ತನೆಗಳ ನಂತರ AWAITING_APPROVAL ಆಯಿತು. 4) ಒಬ್ಬ ತಡೆಯುವ ವಿಮರ್ಶಕ ಕೃತಿ ತಿರಸ್ಕರಿಸಿದ. 5) ಕಲ್ಪಿತ ಡೇಟಾದಲ್ಲಿ ಮಾಪನಗಳು 0.7, 0.9 ಮತ್ತು 0.1 ಬಂದವು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which role was allowed run_approved_tests?",
      "qKn": "ಯಾವ ಪಾತ್ರಕ್ಕೆ run_approved_tests ಅನುಮತಿ ಇತ್ತು?",
      "opts": [
       "verifier",
       "critic",
       "executor",
       "planner"
      ],
      "optsKn": [
       "verifier",
       "critic",
       "executor",
       "planner"
      ],
      "correct": 0
     },
     {
      "q": "What did the lenient verifier report for the negative case on hostile code?",
      "qKn": "ಹಾನಿಕರ ಕೋಡ್‌ಗೆ ಋಣಾತ್ಮಕ ಪ್ರಕರಣದಲ್ಲಿ ಸಡಿಲ ಪರಿಶೀಲಕ ಏನು ವರದಿ ಮಾಡಿತು?",
      "opts": [
       "True (a pass)",
       "False",
       "a verifier error",
       "nothing"
      ],
      "optsKn": [
       "True (ಪಾಸು)",
       "False",
       "ಪರಿಶೀಲಕ ದೋಷ",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "How many transitions did the workflow make?",
      "qKn": "ಕೆಲಸದ ಹರಿವು ಎಷ್ಟು ಪರಿವರ್ತನೆಗಳನ್ನು ಮಾಡಿತು?",
      "opts": [
       "8",
       "4",
       "6",
       "10"
      ],
      "optsKn": [
       "8",
       "4",
       "6",
       "10"
      ],
      "correct": 0
     },
     {
      "q": "What was the critic false-accept rate in the lab?",
      "qKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ critic ಸುಳ್ಳು-ಸ್ವೀಕಾರ ದರ ಎಷ್ಟು?",
      "opts": [
       "0.667",
       "0.5",
       "0.9",
       "0.1"
      ],
      "optsKn": [
       "0.667",
       "0.5",
       "0.9",
       "0.1"
      ],
      "correct": 0
     },
     {
      "q": "What was the first-pass rate for the 100 invented tasks?",
      "qKn": "ಕಲ್ಪಿತ 100 ಕೆಲಸಗಳ first-pass ದರ ಎಷ್ಟು?",
      "opts": [
       "0.7",
       "0.9",
       "0.1",
       "1.4"
      ],
      "optsKn": [
       "0.7",
       "0.9",
       "0.1",
       "1.4"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
