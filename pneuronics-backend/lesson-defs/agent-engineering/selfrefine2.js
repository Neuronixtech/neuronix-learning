module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6066020ed05b32151a",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Self-Refine and CRITIC: Iterative Output Improvement (Part 2 of 3) — CRITIC and Tool-Grounded Verification",
 "titleKn": "Self-Refine ಮತ್ತು CRITIC: ಪುನರಾವರ್ತಿತ ಔಟ್‌ಪುಟ್ ಸುಧಾರಣೆ (ಭಾಗ 2 / 3) — CRITIC ಮತ್ತು Tool-ಆಧಾರಿತ ಪರಿಶೀಲನೆ",
 "desc": "Add an external verifier to the loop, watch it catch a false claim the structural checks accept, then find that evidence is not a repair, that coverage limits what a pass means, and that UNKNOWN must not count as PASS, with real JSON and arithmetic verifiers.",
 "descKn": "ಲೂಪ್‌ಗೆ ಬಾಹ್ಯ verifier ಸೇರಿಸಿ, ರಚನಾತ್ಮಕ ಪರಿಶೀಲನೆಗಳು ಒಪ್ಪುವ ತಪ್ಪು ಹೇಳಿಕೆಯನ್ನು ಅದು ಹಿಡಿಯುವುದನ್ನು ನೋಡಿ, ನಂತರ ಸಾಕ್ಷ್ಯ ದುರಸ್ತಿ ಅಲ್ಲ, ವ್ಯಾಪ್ತಿ ಪಾಸ್ ಅರ್ಥವನ್ನು ಮಿತಿಗೊಳಿಸುತ್ತದೆ, ಮತ್ತು UNKNOWN PASS ಎಂದು ಎಣಿಸಬಾರದು ಎಂದು ನಿಜವಾದ JSON ಮತ್ತು ಅಂಕಗಣಿತ verifiers ಜೊತೆ ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Explain why format validity does not imply factual validity.",
  "Implement a verifier that returns passed, issues and evidence and merge it with self-feedback.",
  "Stop the loop only when both self-feedback and external verification pass.",
  "Demonstrate verifier coverage limits and the risk of treating UNKNOWN as PASS.",
  "Choose deterministic verifiers (parser, calculator) where a property can be measured exactly."
 ],
 "objectivesKn": [
  "ರೂಪ ಮಾನ್ಯತೆ ವಾಸ್ತವ ಮಾನ್ಯತೆಯನ್ನು ಸೂಚಿಸುವುದಿಲ್ಲ ಏಕೆ ಎಂದು ವಿವರಿಸಿ.",
  "passed, issues ಮತ್ತು evidence ಹಿಂತಿರುಗಿಸುವ verifier ಅಳವಡಿಸಿ ಮತ್ತು ಸ್ವಯಂ-feedback ನೊಂದಿಗೆ ವಿಲೀನಗೊಳಿಸಿ.",
  "ಸ್ವಯಂ-feedback ಮತ್ತು ಬಾಹ್ಯ ಪರಿಶೀಲನೆ ಎರಡೂ ಪಾಸ್ ಆದಾಗ ಮಾತ್ರ loop ನಿಲ್ಲಿಸಿ.",
  "Verifier ವ್ಯಾಪ್ತಿ ಮಿತಿಗಳನ್ನು ಮತ್ತು UNKNOWN ಅನ್ನು PASS ಎಂದು ಪರಿಗಣಿಸುವ ಅಪಾಯವನ್ನು ತೋರಿಸಿ.",
  "ಗುಣವನ್ನು ನಿಖರವಾಗಿ ಅಳೆಯಬಹುದಾದಲ್ಲಿ ನಿರ್ಧಾರಾತ್ಮಕ verifiers (parser, calculator) ಆರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Self-Refine and CRITIC: Iterative Output Improvement (Part 2 of 3)",
    "textKn": "Self-Refine ಮತ್ತು CRITIC: ಪುನರಾವರ್ತಿತ ಔಟ್‌ಪುಟ್ ಸುಧಾರಣೆ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: CRITIC, grounding the critique in external verification. Every output was genuinely produced by selfrefine_2.py on Python 3.14.5. The \"external\" verifier is a small table in the same file, a stand-in for a search API, database, parser or test runner, so it shows the architecture and not the quality of any real tool. The source text for this part was cut off partway through its pipeline section, and the code is rebuilt from the lesson's description. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ ಎರಡನೆಯದು: CRITIC, ಬಾಹ್ಯ ಪರಿಶೀಲನೆಯಲ್ಲಿ critique ಆಧರಿಸುವುದು. ಎಲ್ಲಾ output selfrefine_2.py ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. \"ಬಾಹ್ಯ\" verifier ಅದೇ ಫೈಲ್‌ನ ಚಿಕ್ಕ ಕೋಷ್ಟಕ, search API, ಡೇಟಾಬೇಸ್, parser ಅಥವಾ test runner ಗೆ ಬದಲಿ, ಆದ್ದರಿಂದ ಅದು ವಿನ್ಯಾಸ ತೋರಿಸುತ್ತದೆ, ಯಾವುದೇ ನಿಜವಾದ tool ನ ಗುಣಮಟ್ಟವನ್ನಲ್ಲ. ಈ ಭಾಗದ ಮೂಲ ಪಠ್ಯ ಅದರ ಪೈಪ್‌ಲೈನ್ ವಿಭಾಗದ ಮಧ್ಯದಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಮತ್ತು ಕೋಡ್ ಅನ್ನು ಪಾಠದ ವಿವರಣೆಯಿಂದ ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "From Opinion to Evidence",
    "textKn": "ಅಭಿಪ್ರಾಯದಿಂದ ಸಾಕ್ಷ್ಯಕ್ಕೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Gap Between Format and Truth",
    "headingKn": "ರೂಪ ಮತ್ತು ಸತ್ಯದ ನಡುವಿನ ಅಂತರ",
    "bodyEn": "An output can satisfy every structural rule and still be wrong. Three bullets under 60 characters, one of which says \"Python was originally created by Microsoft.\", passes a count and a length check. Valid JSON can hold the wrong capital, and valid Python syntax can implement a - b where a + b was needed. CRITIC strengthens the critique: when a property can be checked by an external mechanism, route the check through it instead of relying on the model's opinion. A critique is grounded when it rests on evidence produced outside the model's own self-assessment.",
    "bodyKn": "ಔಟ್‌ಪುಟ್ ಪ್ರತಿ ರಚನಾತ್ಮಕ ನಿಯಮ ಪೂರೈಸಿಯೂ ತಪ್ಪಾಗಿರಬಹುದು. 60 ಅಕ್ಷರಕ್ಕಿಂತ ಕಡಿಮೆ ಮೂರು bullets, ಅದರಲ್ಲಿ ಒಂದು \"Python was originally created by Microsoft.\" ಎನ್ನುತ್ತದೆ, ಎಣಿಕೆ ಮತ್ತು ಉದ್ದ ಪರಿಶೀಲನೆ ಪಾಸ್ ಮಾಡುತ್ತದೆ. ಮಾನ್ಯ JSON ತಪ್ಪು ರಾಜಧಾನಿ ಹೊಂದಿರಬಹುದು, ಮತ್ತು ಮಾನ್ಯ Python ಸಿಂಟ್ಯಾಕ್ಸ್ a + b ಬೇಕಾದಲ್ಲಿ a - b ಅಳವಡಿಸಬಹುದು. CRITIC critique ಅನ್ನು ಬಲಪಡಿಸುತ್ತದೆ: ಒಂದು ಗುಣವನ್ನು ಬಾಹ್ಯ ವ್ಯವಸ್ಥೆ ಪರಿಶೀಲಿಸಬಲ್ಲದಾದರೆ, ಮಾದರಿಯ ಅಭಿಪ್ರಾಯ ಅವಲಂಬಿಸುವ ಬದಲು ಪರಿಶೀಲನೆಯನ್ನು ಅದರ ಮೂಲಕ ಕಳುಹಿಸಿ. Critique ಮಾದರಿಯ ಸ್ವಂತ ಸ್ವಯಂ-ಮೌಲ್ಯಮಾಪನದ ಹೊರಗೆ ಉತ್ಪಾದಿಸಿದ ಸಾಕ್ಷ್ಯದ ಮೇಲೆ ನಿಂತಾಗ ಅದು ಆಧಾರಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The CRITIC Loop",
    "headingKn": "CRITIC Loop",
    "svgCode": "<svg viewBox=\"0 0 300 215\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"215\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">CRITIC: ground the critique in tool evidence</text>\n  <rect x=\"90\" y=\"22\" width=\"120\" height=\"20\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"35\" fill=\"#93c5fd\" text-anchor=\"middle\">Candidate</text>\n  <path d=\"M130,42 L80,62 M170,42 L220,62\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"62\" width=\"120\" height=\"30\" rx=\"4\" fill=\"#1e293b\" stroke=\"#fbbf24\"/><text x=\"80\" y=\"75\" fill=\"#fde68a\" text-anchor=\"middle\">Self-feedback</text><text x=\"80\" y=\"86\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"6\">count, length (format)</text>\n  <rect x=\"160\" y=\"62\" width=\"120\" height=\"30\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"220\" y=\"75\" fill=\"#6ee7b7\" text-anchor=\"middle\">External verifier</text><text x=\"220\" y=\"86\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">parser, tests, calculator, search</text>\n  <path d=\"M80,92 L130,112 M220,92 L170,112\" stroke=\"#475569\"/>\n  <rect x=\"90\" y=\"112\" width=\"120\" height=\"22\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"127\" fill=\"#c4b5fd\" text-anchor=\"middle\">Grounded critique + evidence</text>\n  <path d=\"M150,134 V146\" stroke=\"#475569\"/>\n  <rect x=\"90\" y=\"148\" width=\"120\" height=\"22\" rx=\"4\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"163\" fill=\"#fecaca\" text-anchor=\"middle\">REFINE, then verify again</text>\n  <text x=\"150\" y=\"190\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">stop only when BOTH self-feedback and the verifier pass</text>\n  <text x=\"150\" y=\"202\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a pass means the checks that ran passed, not universal truth</text>\n</svg>",
    "captionEn": "Self-feedback and an external verifier both examine the candidate. Their findings are merged into a grounded critique with evidence.",
    "captionKn": "ಸ್ವಯಂ-feedback ಮತ್ತು ಬಾಹ್ಯ verifier ಎರಡೂ ಅಭ್ಯರ್ಥಿಯನ್ನು ಪರಿಶೀಲಿಸುತ್ತವೆ. ಅವುಗಳ ಕಂಡುಹಿಡಿಕೆಗಳನ್ನು ಸಾಕ್ಷ್ಯದೊಂದಿಗೆ ಆಧಾರಿತ critique ಆಗಿ ವಿಲೀನಗೊಳಿಸಲಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Match the verifier to the property",
    "headingKn": "ಗುಣಕ್ಕೆ verifier ಹೊಂದಿಸಿ",
    "headers": [
     "Task type",
     "Appropriate verifier"
    ],
    "rows": [
     [
      "Factual claim",
      "Search, retrieval or a trusted database"
     ],
     [
      "Arithmetic",
      "Calculator or a restricted evaluator"
     ],
     [
      "Code behaviour",
      "Parser, unit tests, type checker, linter"
     ],
     [
      "Structured output",
      "JSON parser, schema validator"
     ],
     [
      "Business rule",
      "A deterministic rule checker"
     ],
     [
      "Subjective quality",
      "A model evaluator with a rubric, and no pretence of ground truth"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the CRITIC Loop",
    "textKn": "CRITIC Loop ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "selfrefine_2.py",
    "headingEn": "VerificationResult, the fact table and verify_external",
    "headingKn": "VerificationResult, ಸಂಗತಿ ಕೋಷ್ಟಕ ಮತ್ತು verify_external",
    "descEn": "VerificationResult separates passed, issues and evidence, so the refiner and a human can see why a candidate was rejected. The fact table keeps evidence separate from the replacement: evidence says why a claim is wrong, the replacement says what to write instead. The generator returns three bullets with one false claim, so the structural checks pass.",
    "descKn": "VerificationResult passed, issues ಮತ್ತು evidence ಅನ್ನು ಬೇರ್ಪಡಿಸುತ್ತದೆ, ಹಾಗಾಗಿ refiner ಮತ್ತು ಮನುಷ್ಯರು ಅಭ್ಯರ್ಥಿ ಏಕೆ ತಿರಸ್ಕೃತವಾಯಿತು ಎಂದು ನೋಡಬಹುದು. ಸಂಗತಿ ಕೋಷ್ಟಕ ಸಾಕ್ಷ್ಯವನ್ನು ಬದಲಿಯಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿಡುತ್ತದೆ: ಸಾಕ್ಷ್ಯ ಹೇಳಿಕೆ ಏಕೆ ತಪ್ಪು ಎನ್ನುತ್ತದೆ, ಬದಲಿ ಬದಲಿಗೆ ಏನು ಬರೆಯಬೇಕು ಎನ್ನುತ್ತದೆ. Generator ಒಂದು ತಪ್ಪು ಹೇಳಿಕೆ ಇರುವ ಮೂರು bullets ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಹಾಗಾಗಿ ರಚನಾತ್ಮಕ ಪರಿಶೀಲನೆಗಳು ಪಾಸ್.",
    "code": "from dataclasses import dataclass\nfrom enum import Enum\n\nfrom selfrefine_1 import TASK, feedback as structural_feedback, bullets_of\n\n\n@dataclass\nclass VerificationResult:\n    passed: bool\n    issues: list[str]\n    evidence: list[str]\n\n\n@dataclass\nclass Attempt:\n    iteration: int\n    output: str\n    self_feedback: list[str]\n    external_feedback: list[str]\n    evidence: list[str]\n\n\n# The toy \"external\" source: a table of known-false claims, each with evidence and a replacement.\nKNOWN_FALSE_CLAIMS = {\n    \"Python was originally created by Microsoft.\": {\n        \"evidence\": \"Python was created by Guido van Rossum.\",\n        \"replacement\": \"Python supports multiple programming paradigms.\",\n    },\n}\n\n\ndef generate(task: str) -> str:\n    return \"\\n\".join([\n        \"- Python was created by Guido van Rossum.\",\n        \"- Python was first released in 1991.\",\n        \"- Python was originally created by Microsoft.\",\n    ])\n\n\ndef claims(output: str) -> list[str]:\n    return [b[2:].strip() for b in bullets_of(output)]\n\n\ndef verify_external(output: str, table=KNOWN_FALSE_CLAIMS) -> VerificationResult:\n    issues, evidence = [], []\n    for number, claim in enumerate(claims(output), start=1):\n        record = table.get(claim)\n        if record is not None:\n            issues.append(f\"Bullet {number} contains a known false claim: {claim}\")\n            evidence.append(f\"Verifier evidence for bullet {number}: {record['evidence']}\")\n    return VerificationResult(passed=not issues, issues=issues, evidence=evidence)\n\n\ndef merge_feedback(self_feedback, verification):\n    return list(self_feedback) + list(verification.issues)\n\n\ndef refine(task, output, critique, evidence, history, dedupe=True):\n    revised = []\n    for claim in claims(output):\n        record = KNOWN_FALSE_CLAIMS.get(claim)\n        revised.append(\"- \" + (record[\"replacement\"] if record else claim))\n    return \"\\n\".join(revised)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "selfrefine_2.py",
    "headingEn": "critic_loop, three-state verification and deterministic verifiers",
    "headingKn": "critic_loop, ಮೂರು-ಸ್ಥಿತಿ ಪರಿಶೀಲನೆ ಮತ್ತು ನಿರ್ಧಾರಾತ್ಮಕ verifiers",
    "descEn": "critic_loop stops only when self-feedback finds nothing and the verifier passes (S AND E). VStatus gives three states, PASS, FAIL and UNKNOWN. verify_json uses the real JSON parser, and check_equation evaluates arithmetic with an allow-list AST evaluator instead of eval(). main() runs seven experiments.",
    "descKn": "critic_loop ಸ್ವಯಂ-feedback ಏನೂ ಕಾಣದಿದ್ದಾಗ ಮತ್ತು verifier ಪಾಸ್ ಆದಾಗ ಮಾತ್ರ ನಿಲ್ಲುತ್ತದೆ (S AND E). VStatus ಮೂರು ಸ್ಥಿತಿಗಳನ್ನು ನೀಡುತ್ತದೆ: PASS, FAIL ಮತ್ತು UNKNOWN. verify_json ನಿಜವಾದ JSON parser ಬಳಸುತ್ತದೆ, ಮತ್ತು check_equation eval() ಬದಲು allow-list AST evaluator ಬಳಸಿ ಅಂಕಗಣಿತ ಲೆಕ್ಕಿಸುತ್ತದೆ. main() ಏಳು ಪ್ರಯೋಗ ಚಲಾಯಿಸುತ್ತದೆ.",
    "code": "def critic_loop(task, max_iterations=4, quiet=False, refiner=refine, feedback_fn=structural_feedback, verifier=verify_external, generator=None):\n    history, output = [], (generator or generate)(task)\n    for iteration in range(max_iterations):\n        sf = feedback_fn(task, output)\n        ver = verifier(output)\n        history.append(Attempt(iteration, output, sf, ver.issues, ver.evidence))\n        if not quiet:\n            print(f\"ITERATION {iteration}: self={sf or 'ok'} external={ver.issues or 'passed'}\")\n        if not sf and ver.passed:\n            if not quiet:\n                print(\"STOP: self-feedback found no issues and external verification passed.\")\n            return output, history, True\n        output = refiner(task, output, merge_feedback(sf, ver), ver.evidence, history)\n    return output, history, False\n\n\n# ---- three-state verification --------------------------------------------------------------\n\nclass VStatus(Enum):\n    PASS = \"pass\"\n    FAIL = \"fail\"\n    UNKNOWN = \"unknown\"\n\n\ndef flaky_verifier(online: bool):\n    def verify(output):\n        if not online:\n            return VStatus.UNKNOWN, [\"verifier unavailable (timeout)\"]\n        res = verify_external(output)\n        return (VStatus.PASS if res.passed else VStatus.FAIL), res.issues\n    return verify\n\n\n# ---- deterministic verifiers ----------------------------------------------------------------\n\ndef verify_json(text):\n    try:\n        json.loads(text)\n    except json.JSONDecodeError as exc:\n        return False, str(exc)\n    return True, \"valid JSON\"\n\n\nOPS = {ast.Add: operator.add, ast.Sub: operator.sub, ast.Mult: operator.mul, ast.Div: operator.truediv}\n\n\ndef safe_eval(expr):\n    def ev(n):\n        if isinstance(n, ast.Expression):\n            return ev(n.body)\n        if isinstance(n, ast.Constant) and isinstance(n.value, (int, float)):\n            return n.value\n        if isinstance(n, ast.BinOp) and type(n.op) in OPS:\n            return OPS[type(n.op)](ev(n.left), ev(n.right))\n        raise ValueError(\"expression not allowed\")\n    return ev(ast.parse(expr, mode=\"eval\"))\n\n\ndef check_equation(claim):\n    left, right = claim.split(\"=\")\n    return safe_eval(left.strip()), float(right.strip())\n\n\ndef section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Self-Refine only: the structural checks accept a false claim\")\n    out = generate(TASK)\n    print(out)\n    print(\"structural feedback:\", structural_feedback(TASK, out) or \"none -> the loop would stop here\")\n\n    section(\"2. The external verifier disagrees\")\n    ver = verify_external(out)\n    print(\"passed:\", ver.passed)\n    print(\"issues:\", ver.issues)\n    print(\"evidence:\", ver.evidence)\n\n    section(\"3. The CRITIC loop\")\n    final, hist, ok = critic_loop(TASK)\n    print(final)\n    print(\"verified:\", ok)\n\n    section(\"4. Evidence is not a repair: replacing a bullet with the evidence duplicates it\")\n    def lazy_refine(task, output, critique, evidence, history):\n        rows = []\n        for c in claims(output):\n            rec = KNOWN_FALSE_CLAIMS.get(c)\n            rows.append(\"- \" + (rec[\"evidence\"] if rec else c))\n        return \"\\n\".join(rows)\n    final, hist, ok = critic_loop(TASK, refiner=lazy_refine)\n    print(final)\n    print(\"bullets 1 and 3 identical:\", claims(final)[0] == claims(final)[2], \"| loop accepted it:\", ok)\n\n    section(\"5. Coverage: a false claim the verifier does not know\")\n    def generate_unknown(task):\n        return \"\\n\".join([\"- Python was created by Guido van Rossum.\", \"- Python was first released in 1985.\", \"- Python emphasizes readable code.\"])\n    final, hist, ok = critic_loop(TASK, generator=generate_unknown)\n    print(\"verified:\", ok, \"- 1985 is wrong (it was 1991) but is not in the verifier's table\")\n\n    section(\"6. Three-state verification: unavailable is not the same as passed\")\n    for online in (True, False):\n        status, notes = flaky_verifier(online)(generate(TASK))\n        as_bool = status != VStatus.FAIL          # the tempting two-state reading\n        print(f\"verifier online={online!s:<5} status={status.value:<7} notes={notes}\")\n        print(f\"   'not failed' reading would accept: {as_bool} | strict reading accepts: {status == VStatus.PASS}\")\n\n    section(\"7. Deterministic verifiers beat asking a model\")\n    for text in ('{\"name\": \"Alex\", \"age\": 25}', '{\"name\": \"Alex\", \"age\": 25,}'):\n        print(f\"json {text!r:<32} -> {verify_json(text)}\")\n    for claim in (\"17 * 24 = 418\", \"19 * 37 = 713\", \"4387 * 91 = 399217\"):\n        computed, claimed = check_equation(claim)\n        print(f\"{claim:<20} computed {computed} -> {'OK' if computed == claimed else 'WRONG'}\")\n    try:\n        safe_eval(\"__import__('os').system('echo hi')\")\n    except ValueError as exc:\n        print(\"expression with a call is refused:\", exc)"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Self-Refine only: the structural checks accept a false claim ---\n- Python was created by Guido van Rossum.\n- Python was first released in 1991.\n- Python was originally created by Microsoft.\nstructural feedback: none -> the loop would stop here\n\n--- 2. The external verifier disagrees ---\npassed: False\nissues: ['Bullet 3 contains a known false claim: Python was originally created by Microsoft.']\nevidence: ['Verifier evidence for bullet 3: Python was created by Guido van Rossum.']\n\n--- 3. The CRITIC loop ---\nITERATION 0: self=ok external=['Bullet 3 contains a known false claim: Python was originally created by Microsoft.']\nITERATION 1: self=ok external=passed\nSTOP: self-feedback found no issues and external verification passed.\n- Python was created by Guido van Rossum.\n- Python was first released in 1991.\n- Python supports multiple programming paradigms.\nverified: True\n\n--- 4. Evidence is not a repair: replacing a bullet with the evidence duplicates it ---\nITERATION 0: self=ok external=['Bullet 3 contains a known false claim: Python was originally created by Microsoft.']\nITERATION 1: self=ok external=passed\nSTOP: self-feedback found no issues and external verification passed.\n- Python was created by Guido van Rossum.\n- Python was first released in 1991.\n- Python was created by Guido van Rossum.\nbullets 1 and 3 identical: True | loop accepted it: True\n\n--- 5. Coverage: a false claim the verifier does not know ---\nITERATION 0: self=ok external=passed\nSTOP: self-feedback found no issues and external verification passed.\nverified: True - 1985 is wrong (it was 1991) but is not in the verifier's table\n\n--- 6. Three-state verification: unavailable is not the same as passed ---\nverifier online=True  status=fail    notes=['Bullet 3 contains a known false claim: Python was originally created by Microsoft.']\n   'not failed' reading would accept: False | strict reading accepts: False\nverifier online=False status=unknown notes=['verifier unavailable (timeout)']\n   'not failed' reading would accept: True | strict reading accepts: False\n\n--- 7. Deterministic verifiers beat asking a model ---\njson '{\"name\": \"Alex\", \"age\": 25}'    -> (True, 'valid JSON')\njson '{\"name\": \"Alex\", \"age\": 25,}'   -> (False, 'Illegal trailing comma before end of object: line 1 column 27 (char 26)')\n17 * 24 = 418        computed 408 -> WRONG\n19 * 37 = 713        computed 703 -> WRONG\n4387 * 91 = 399217   computed 399217 -> OK\nexpression with a call is refused: expression not allowed"
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
    "headingEn": "The Control Case and the Correction",
    "headingKn": "ನಿಯಂತ್ರಣ ಪ್ರಕರಣ ಮತ್ತು ತಿದ್ದುಪಡಿ",
    "bodyEn": "Section 1 is the control. Part 1's structural feedback returns nothing for the three bullets, so a Self-Refine loop would stop and accept \"Python was originally created by Microsoft.\" Section 2 shows the external verifier disagreeing: passed False, an issue naming bullet 3, and the evidence \"Python was created by Guido van Rossum.\" Section 3 runs the CRITIC loop: iteration 0 has self=ok and external failing, the refiner replaces bullet 3 with \"Python supports multiple programming paradigms.\", iteration 1 passes both, and the loop stops verified.",
    "bodyKn": "ವಿಭಾಗ 1 ನಿಯಂತ್ರಣ. ಭಾಗ 1 ರ ರಚನಾತ್ಮಕ feedback ಮೂರು bullets ಗೆ ಏನನ್ನೂ ಹಿಂತಿರುಗಿಸುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ Self-Refine loop ನಿಲ್ಲಿಸಿ \"Python was originally created by Microsoft.\" ಅನ್ನು ಒಪ್ಪುತ್ತಿತ್ತು. ವಿಭಾಗ 2 ಬಾಹ್ಯ verifier ಭಿನ್ನಾಭಿಪ್ರಾಯ ತೋರಿಸುತ್ತದೆ: passed False, bullet 3 ಹೆಸರಿಸುವ ಸಮಸ್ಯೆ, ಮತ್ತು ಸಾಕ್ಷ್ಯ \"Python was created by Guido van Rossum.\" ವಿಭಾಗ 3 CRITIC loop ಚಲಾಯಿಸುತ್ತದೆ: ಪುನರಾವರ್ತನೆ 0 ರಲ್ಲಿ self=ok ಮತ್ತು external ವಿಫಲ, refiner bullet 3 ಅನ್ನು \"Python supports multiple programming paradigms.\" ಆಗಿ ಬದಲಿಸುತ್ತದೆ, ಪುನರಾವರ್ತನೆ 1 ಎರಡನ್ನೂ ಪಾಸ್ ಮಾಡುತ್ತದೆ, ಮತ್ತು loop ಪರಿಶೀಲಿತವಾಗಿ ನಿಲ್ಲುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Evidence Is Not a Repair",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಾಕ್ಷ್ಯ ದುರಸ್ತಿ ಅಲ್ಲ",
    "bodyEn": "Section 4 uses a lazy refiner that replaces the false bullet with the evidence text itself. The result is \"Python was created by Guido van Rossum.\" in bullet 1 and again in bullet 3, and the loop reports verified because neither the structural check nor the fact table looks for duplicates. Fixing one defect created another that no evaluator was watching. The fact table's separate replacement field avoids the duplicate, and the Part 3 controller adds a quality evaluator that catches duplicates. Every revision needs a full re-evaluation, and the evaluators must cover the failure modes that repair can introduce.",
    "bodyKn": "ವಿಭಾಗ 4 ತಪ್ಪು bullet ಅನ್ನು ಸಾಕ್ಷ್ಯ ಪಠ್ಯದಿಂದಲೇ ಬದಲಿಸುವ ಸೋಮಾರಿ refiner ಬಳಸುತ್ತದೆ. ಫಲಿತಾಂಶ \"Python was created by Guido van Rossum.\" bullet 1 ರಲ್ಲಿ ಮತ್ತು ಮತ್ತೆ bullet 3 ರಲ್ಲಿ, ಮತ್ತು loop ಪರಿಶೀಲಿತ ಎಂದು ವರದಿ ಮಾಡುತ್ತದೆ, ಏಕೆಂದರೆ ರಚನಾತ್ಮಕ ಪರಿಶೀಲನೆ ಅಥವಾ ಸಂಗತಿ ಕೋಷ್ಟಕ ನಕಲುಗಳನ್ನು ಹುಡುಕುವುದಿಲ್ಲ. ಒಂದು ದೋಷ ಸರಿಪಡಿಸುವುದು ಯಾವ evaluator ಕೂಡ ಗಮನಿಸದ ಇನ್ನೊಂದನ್ನು ಸೃಷ್ಟಿಸಿತು. ಸಂಗತಿ ಕೋಷ್ಟಕದ ಪ್ರತ್ಯೇಕ ಬದಲಿ ಕ್ಷೇತ್ರ ನಕಲು ತಪ್ಪಿಸುತ್ತದೆ, ಮತ್ತು ಭಾಗ 3 ರ controller ನಕಲು ಹಿಡಿಯುವ quality evaluator ಸೇರಿಸುತ್ತದೆ. ಪ್ರತಿ ಪರಿಷ್ಕರಣೆಗೆ ಸಂಪೂರ್ಣ ಮರು-ಮೌಲ್ಯಮಾಪನ ಬೇಕು, ಮತ್ತು ದುರಸ್ತಿ ತರಬಹುದಾದ ವೈಫಲ್ಯ ವಿಧಗಳನ್ನು evaluators ಆವರಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Verifier Passes Only What It Covers",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Verifier ತಾನು ಆವರಿಸುವುದನ್ನು ಮಾತ್ರ ಪಾಸ್ ಮಾಡುತ್ತದೆ",
    "bodyEn": "Section 5 generates \"Python was first released in 1985.\" That is wrong, the release was 1991. The fact table does not contain it, so both the self-feedback and the verifier pass and the loop reports verified on the first iteration. External verification changes the source of evidence but does not remove uncertainty: a pass means the checks that were run passed. If R is the set of requirements and V the subset a verifier covers, a pass says something only about V. A tool can also be incomplete, stale or called with the wrong query.",
    "bodyKn": "ವಿಭಾಗ 5 \"Python was first released in 1985.\" ಉತ್ಪಾದಿಸುತ್ತದೆ. ಅದು ತಪ್ಪು, ಬಿಡುಗಡೆ 1991. ಸಂಗತಿ ಕೋಷ್ಟಕದಲ್ಲಿ ಅದಿಲ್ಲ, ಆದ್ದರಿಂದ ಸ್ವಯಂ-feedback ಮತ್ತು verifier ಎರಡೂ ಪಾಸ್ ಆಗಿ loop ಮೊದಲ ಪುನರಾವರ್ತನೆಯಲ್ಲೇ ಪರಿಶೀಲಿತ ಎಂದು ವರದಿ ಮಾಡುತ್ತದೆ. ಬಾಹ್ಯ ಪರಿಶೀಲನೆ ಸಾಕ್ಷ್ಯದ ಮೂಲವನ್ನು ಬದಲಿಸುತ್ತದೆ ಆದರೆ ಅನಿಶ್ಚಿತತೆ ತೆಗೆಯುವುದಿಲ್ಲ: ಪಾಸ್ ಎಂದರೆ ಚಲಾಯಿಸಿದ ಪರಿಶೀಲನೆಗಳು ಪಾಸ್ ಆದವು. R ಅವಶ್ಯಕತೆಗಳ ಗಣ ಮತ್ತು V verifier ಆವರಿಸುವ ಉಪಗಣ ಆದರೆ, ಪಾಸ್ V ಬಗ್ಗೆ ಮಾತ್ರ ಏನನ್ನಾದರೂ ಹೇಳುತ್ತದೆ. Tool ಅಪೂರ್ಣ, ಹಳೆಯದು ಅಥವಾ ತಪ್ಪು query ಯೊಂದಿಗೆ ಕರೆಯಲ್ಪಟ್ಟಿರಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "UNKNOWN Is Not PASS",
    "headingKn": "UNKNOWN ಎಂದರೆ PASS ಅಲ್ಲ",
    "bodyEn": "Section 6 contrasts the two-state habit with three states. With the verifier online the result is fail. With it offline the status is unknown, and reading it as \"not failed\" would accept the unverified output, while the strict reading (only PASS passes) rejects it. A tool outage must not silently become approval. What to do with UNKNOWN depends on risk: retry, use another verifier, report uncertainty, escalate to a human, or stop without claiming verification. Low-stakes brainstorming can fail open; a deployment gate should fail closed.",
    "bodyKn": "ವಿಭಾಗ 6 ಎರಡು-ಸ್ಥಿತಿ ಅಭ್ಯಾಸ ಮತ್ತು ಮೂರು ಸ್ಥಿತಿಗಳನ್ನು ಹೋಲಿಸುತ್ತದೆ. Verifier ಆನ್‌ಲೈನ್ ಇದ್ದಾಗ ಫಲಿತಾಂಶ fail. ಆಫ್‌ಲೈನ್ ಇದ್ದಾಗ ಸ್ಥಿತಿ unknown, ಮತ್ತು ಅದನ್ನು \"ವಿಫಲವಾಗಿಲ್ಲ\" ಎಂದು ಓದಿದರೆ ಪರಿಶೀಲಿಸದ ಔಟ್‌ಪುಟ್ ಒಪ್ಪಲ್ಪಡುತ್ತದೆ, ಆದರೆ ಕಟ್ಟುನಿಟ್ಟಾದ ಓದು (PASS ಮಾತ್ರ ಪಾಸ್) ಅದನ್ನು ತಿರಸ್ಕರಿಸುತ್ತದೆ. Tool ವ್ಯತ್ಯಯ ಮೌನವಾಗಿ ಅನುಮೋದನೆ ಆಗಬಾರದು. UNKNOWN ನೊಂದಿಗೆ ಏನು ಮಾಡಬೇಕು ಎಂಬುದು ಅಪಾಯದ ಮೇಲೆ ಅವಲಂಬಿತ: retry, ಇನ್ನೊಂದು verifier, ಅನಿಶ್ಚಿತತೆ ವರದಿ, ಮನುಷ್ಯರಿಗೆ ಏರಿಕೆ, ಅಥವಾ ಪರಿಶೀಲನೆ ಹೇಳಿಕೊಳ್ಳದೆ ನಿಲ್ಲುವುದು. ಕಡಿಮೆ ಅಪಾಯದ brainstorming fail open ಆಗಬಹುದು; deployment ದ್ವಾರ fail closed ಆಗಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Deterministic Verifiers Beat Asking a Model",
    "headingKn": "ನಿರ್ಧಾರಾತ್ಮಕ Verifiers ಮಾದರಿಯನ್ನು ಕೇಳುವುದಕ್ಕಿಂತ ಉತ್ತಮ",
    "bodyEn": "Section 7 uses real tools. The JSON parser accepts {\"name\": \"Alex\", \"age\": 25} and rejects the trailing-comma version with a precise message: \"Illegal trailing comma before end of object: line 1 column 27 (char 26)\". That message text is from Python 3.14 and older versions word it differently, so do not match on it. The arithmetic checker computes 17 * 24 = 408 and 19 * 37 = 703, exposing the claimed 418 and 713, and confirms that 4387 * 91 = 399,217. It refuses an expression containing a call, because the evaluator allows only numbers and four operators. When a requirement can be measured exactly, measure it.",
    "bodyKn": "ವಿಭಾಗ 7 ನಿಜವಾದ tools ಬಳಸುತ್ತದೆ. JSON parser {\"name\": \"Alex\", \"age\": 25} ಅನ್ನು ಒಪ್ಪಿ, trailing-comma ಆವೃತ್ತಿಯನ್ನು ನಿಖರ ಸಂದೇಶದೊಂದಿಗೆ ತಿರಸ್ಕರಿಸುತ್ತದೆ: \"Illegal trailing comma before end of object: line 1 column 27 (char 26)\". ಆ ಸಂದೇಶ ಪಠ್ಯ Python 3.14 ರದ್ದು ಮತ್ತು ಹಳೆಯ ಆವೃತ್ತಿಗಳು ಬೇರೆ ಪದಗಳಲ್ಲಿ ಹೇಳುತ್ತವೆ, ಆದ್ದರಿಂದ ಅದನ್ನು ಹೊಂದಿಸಬೇಡಿ. ಅಂಕಗಣಿತ ಪರಿಶೀಲಕ 17 * 24 = 408 ಮತ್ತು 19 * 37 = 703 ಲೆಕ್ಕಿಸಿ ಹೇಳಿದ 418 ಮತ್ತು 713 ಅನ್ನು ಬಯಲುಗೊಳಿಸುತ್ತದೆ, ಮತ್ತು 4387 * 91 = 399,217 ದೃಢೀಕರಿಸುತ್ತದೆ. ಕರೆ ಇರುವ ಅಭಿವ್ಯಕ್ತಿ ತಿರಸ್ಕರಿಸುತ್ತದೆ, ಏಕೆಂದರೆ evaluator ಸಂಖ್ಯೆಗಳು ಮತ್ತು ನಾಲ್ಕು ಆಪರೇಟರ್‌ಗಳನ್ನು ಮಾತ್ರ ಅನುಮತಿಸುತ್ತದೆ. ಅವಶ್ಯಕತೆಯನ್ನು ನಿಖರವಾಗಿ ಅಳೆಯಬಹುದಾದರೆ, ಅಳೆಯಿರಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Do Not Invent a Verifier",
    "headingKn": "Verifier ಅನ್ನು ಸೃಷ್ಟಿಸಬೇಡಿ",
    "bodyEn": "A function called verify_external that asks the same model \"do you think this is right?\" is not external grounding, and one that returns True adds latency and false confidence. If no useful verifier exists, CRITIC reduces to Self-Refine, and the honest design says so. Separating generator and critic into different models can reduce some self-agreement but is still not independent evidence: two models can share a misconception, while a calculator or a test runner gives a genuinely different channel.",
    "bodyKn": "ಅದೇ ಮಾದರಿಯನ್ನು \"ಇದು ಸರಿ ಎಂದು ನೀವು ಭಾವಿಸುತ್ತೀರಾ?\" ಎಂದು ಕೇಳುವ verify_external ಎಂಬ ಫಂಕ್ಷನ್ ಬಾಹ್ಯ ಆಧಾರವಲ್ಲ, ಮತ್ತು True ಹಿಂತಿರುಗಿಸುವುದು ವಿಳಂಬ ಮತ್ತು ಸುಳ್ಳು ವಿಶ್ವಾಸ ಸೇರಿಸುತ್ತದೆ. ಉಪಯುಕ್ತ verifier ಇಲ್ಲದಿದ್ದರೆ CRITIC Self-Refine ಗೆ ಇಳಿಯುತ್ತದೆ, ಮತ್ತು ಪ್ರಾಮಾಣಿಕ ವಿನ್ಯಾಸ ಅದನ್ನು ಹೇಳುತ್ತದೆ. Generator ಮತ್ತು critic ಅನ್ನು ಬೇರೆ ಮಾದರಿಗಳಾಗಿ ಬೇರ್ಪಡಿಸಿದರೆ ಕೆಲವು ಸ್ವಯಂ-ಒಪ್ಪಿಗೆ ಕಡಿಮೆಯಾಗಬಹುದು ಆದರೆ ಅದು ಇನ್ನೂ ಸ್ವತಂತ್ರ ಸಾಕ್ಷ್ಯವಲ್ಲ: ಎರಡು ಮಾದರಿಗಳು ಒಂದೇ ತಪ್ಪು ಕಲ್ಪನೆ ಹಂಚಿಕೊಳ್ಳಬಹುದು, ಆದರೆ calculator ಅಥವಾ test runner ನಿಜವಾಗಿ ಬೇರೆ ಮಾರ್ಗ ನೀಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "It breaks the correlation between generator error and critic error. A model that holds a wrong belief will tend to approve it; a tool that does not share the belief can contradict it, and its output becomes evidence the refiner can use. Deterministic checks are also cheaper and reproducible.",
    "bodyKn": "ಇದು generator ದೋಷ ಮತ್ತು critic ದೋಷದ ನಡುವಿನ ಸಹಸಂಬಂಧ ಮುರಿಯುತ್ತದೆ. ತಪ್ಪು ನಂಬಿಕೆ ಹೊಂದಿದ ಮಾದರಿ ಅದನ್ನು ಅನುಮೋದಿಸುತ್ತದೆ; ನಂಬಿಕೆ ಹಂಚಿಕೊಳ್ಳದ tool ಅದನ್ನು ವಿರೋಧಿಸಬಹುದು, ಮತ್ತು ಅದರ ಔಟ್‌ಪುಟ್ refiner ಬಳಸಬಹುದಾದ ಸಾಕ್ಷ್ಯವಾಗುತ್ತದೆ. ನಿರ್ಧಾರಾತ್ಮಕ ಪರಿಶೀಲನೆಗಳು ಅಗ್ಗ ಮತ್ತು ಪುನರುತ್ಪಾದನೀಯವೂ ಹೌದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Where This Appears in AI Systems",
    "headingKn": "AI ವ್ಯವಸ್ಥೆಗಳಲ್ಲಿ ಇದು ಎಲ್ಲಿ ಕಾಣುತ್ತದೆ",
    "bodyEn": "A code agent runs the tests and feeds the stack trace to the refiner. A research agent extracts claims, searches trusted sources and rewrites unsupported ones. A data agent validates generated JSON against a schema, and a SQL agent executes the query on a test database. In each the tool output is the critique's evidence.",
    "bodyKn": "Code agent tests ಚಲಾಯಿಸಿ stack trace ಅನ್ನು refiner ಗೆ ನೀಡುತ್ತದೆ. Research agent ಹೇಳಿಕೆಗಳನ್ನು ಹೊರತೆಗೆದು, ನಂಬಲರ್ಹ ಮೂಲಗಳಲ್ಲಿ ಹುಡುಕಿ, ಬೆಂಬಲವಿಲ್ಲದವನ್ನು ಮರುಬರೆಯುತ್ತದೆ. Data agent ಉತ್ಪಾದಿಸಿದ JSON ಅನ್ನು schema ವಿರುದ್ಧ ಮಾನ್ಯಗೊಳಿಸುತ್ತದೆ, ಮತ್ತು SQL agent query ಅನ್ನು test ಡೇಟಾಬೇಸ್‌ನಲ್ಲಿ ಚಲಾಯಿಸುತ್ತದೆ. ಪ್ರತಿಯೊಂದರಲ್ಲೂ tool ಔಟ್‌ಪುಟ್ critique ನ ಸಾಕ್ಷ್ಯ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"an external verifier makes the output correct.\" Sections 4 and 5 show a verified output with a duplicated bullet and another with a false year. A verifier establishes that the checks it ran passed, and the scope of those checks has to match the claim you care about.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಬಾಹ್ಯ verifier ಔಟ್‌ಪುಟ್ ಸರಿಯಾಗಿಸುತ್ತದೆ.\" ವಿಭಾಗ 4 ಮತ್ತು 5 ನಕಲು bullet ಇರುವ ಮತ್ತು ತಪ್ಪು ವರ್ಷ ಇರುವ ಪರಿಶೀಲಿತ ಔಟ್‌ಪುಟ್ ತೋರಿಸುತ್ತವೆ. ತಾನು ಚಲಾಯಿಸಿದ ಪರಿಶೀಲನೆಗಳು ಪಾಸ್ ಆದವು ಎಂದು verifier ಸ್ಥಾಪಿಸುತ್ತದೆ, ಮತ್ತು ಆ ಪರಿಶೀಲನೆಗಳ ವ್ಯಾಪ್ತಿ ನೀವು ಕಾಳಜಿ ವಹಿಸುವ ಹೇಳಿಕೆಗೆ ಹೊಂದಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "CRITIC: self-critique grounded in external tool verification. Grounded critique: criticism backed by evidence from outside the model. Verifier: a mechanism that checks a property. Evidence: what supports a failure verdict. Verification coverage: which requirements a verifier actually checks. Fail open, fail closed: whether an unavailable verifier allows or blocks output.",
    "bodyKn": "CRITIC: ಬಾಹ್ಯ tool ಪರಿಶೀಲನೆಯಲ್ಲಿ ಆಧರಿಸಿದ ಸ್ವಯಂ-ವಿಮರ್ಶೆ. Grounded critique: ಮಾದರಿಯ ಹೊರಗಿನ ಸಾಕ್ಷ್ಯದಿಂದ ಬೆಂಬಲಿತ ವಿಮರ್ಶೆ. Verifier: ಒಂದು ಗುಣ ಪರಿಶೀಲಿಸುವ ವ್ಯವಸ್ಥೆ. Evidence: ವೈಫಲ್ಯ ತೀರ್ಪನ್ನು ಬೆಂಬಲಿಸುವುದು. Verification coverage: verifier ನಿಜವಾಗಿ ಯಾವ ಅವಶ್ಯಕತೆಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ. Fail open, fail closed: ಲಭ್ಯವಿಲ್ಲದ verifier ಔಟ್‌ಪುಟ್ ಅನುಮತಿಸುತ್ತದೆಯೇ ಅಥವಾ ತಡೆಯುತ್ತದೆಯೇ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Format validity is not factual validity: the structural checks passed a false claim. 2) Stop only when self-feedback and the verifier both pass. 3) Evidence is not a repair, and a lazy repair duplicated a bullet that nobody was checking for. 4) A verifier covers only what it covers: 1985 slipped through. 5) UNKNOWN must not become PASS. 6) Use deterministic tools where they exist, and do not fake a verifier where none does. Part 3 builds a controller with structured issues, stopping rules and a final guardrail.",
    "bodyKn": "1) ರೂಪ ಮಾನ್ಯತೆ ವಾಸ್ತವ ಮಾನ್ಯತೆ ಅಲ್ಲ: ರಚನಾತ್ಮಕ ಪರಿಶೀಲನೆಗಳು ತಪ್ಪು ಹೇಳಿಕೆಯನ್ನು ಪಾಸ್ ಮಾಡಿದವು. 2) ಸ್ವಯಂ-feedback ಮತ್ತು verifier ಎರಡೂ ಪಾಸ್ ಆದಾಗ ಮಾತ್ರ ನಿಲ್ಲಿಸಿ. 3) ಸಾಕ್ಷ್ಯ ದುರಸ್ತಿ ಅಲ್ಲ, ಮತ್ತು ಸೋಮಾರಿ ದುರಸ್ತಿ ಯಾರೂ ಪರಿಶೀಲಿಸದ bullet ನಕಲು ಮಾಡಿತು. 4) Verifier ತಾನು ಆವರಿಸುವುದನ್ನು ಮಾತ್ರ ಆವರಿಸುತ್ತದೆ: 1985 ತಪ್ಪಿಸಿಕೊಂಡಿತು. 5) UNKNOWN PASS ಆಗಬಾರದು. 6) ನಿರ್ಧಾರಾತ್ಮಕ tools ಇರುವಲ್ಲಿ ಬಳಸಿ, ಇಲ್ಲದಲ್ಲಿ ಸುಳ್ಳು verifier ರಚಿಸಬೇಡಿ. ಭಾಗ 3 ರಚನಾತ್ಮಕ ಸಮಸ್ಯೆಗಳು, ನಿಲುಗಡೆ ನಿಯಮಗಳು ಮತ್ತು ಅಂತಿಮ guardrail ಇರುವ controller ನಿರ್ಮಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What is the main weakness of pure Self-Refine that CRITIC addresses?",
      "qKn": "CRITIC ಪರಿಹರಿಸುವ ಶುದ್ಧ Self-Refine ನ ಮುಖ್ಯ ದೌರ್ಬಲ್ಯ ಯಾವುದು?",
      "opts": [
       "It is too slow",
       "The critic may share the generator's mistake because it has no independent evidence",
       "It cannot count bullets",
       "It needs training"
      ],
      "optsKn": [
       "ಅದು ತುಂಬಾ ನಿಧಾನ",
       "ಸ್ವತಂತ್ರ ಸಾಕ್ಷ್ಯ ಇಲ್ಲದ ಕಾರಣ critic generator ನ ತಪ್ಪು ಹಂಚಿಕೊಳ್ಳಬಹುದು",
       "ಅದು bullets ಎಣಿಸಲಾರದು",
       "ಅದಕ್ಕೆ ತರಬೇತಿ ಬೇಕು"
      ],
      "correct": 1
     },
     {
      "q": "In section 4, what did the lazy refiner produce?",
      "qKn": "ವಿಭಾಗ 4 ರಲ್ಲಿ ಸೋಮಾರಿ refiner ಏನು ಉತ್ಪಾದಿಸಿತು?",
      "opts": [
       "A correct and varied answer",
       "A duplicated bullet that the loop still reported as verified",
       "A crash",
       "A rejected answer"
      ],
      "optsKn": [
       "ಸರಿಯಾದ ಮತ್ತು ವೈವಿಧ್ಯಮಯ ಉತ್ತರ",
       "ಪರಿಶೀಲಿತ ಎಂದು loop ಇನ್ನೂ ವರದಿ ಮಾಡಿದ ನಕಲು bullet",
       "Crash",
       "ತಿರಸ್ಕೃತ ಉತ್ತರ"
      ],
      "correct": 1
     },
     {
      "q": "\"Python was first released in 1985\" passed the loop. Why?",
      "qKn": "\"Python was first released in 1985\" loop ಅನ್ನು ಪಾಸ್ ಮಾಡಿತು. ಏಕೆ?",
      "opts": [
       "The refiner changed it",
       "The claim is not in the verifier's table, so neither check flagged it",
       "The structure was invalid",
       "The verifier crashed"
      ],
      "optsKn": [
       "Refiner ಅದನ್ನು ಬದಲಿಸಿತು",
       "ಹೇಳಿಕೆ verifier ಕೋಷ್ಟಕದಲ್ಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಯಾವ ಪರಿಶೀಲನೆಯೂ ಅದನ್ನು ಗುರುತಿಸಲಿಲ್ಲ",
       "ರಚನೆ ಅಮಾನ್ಯವಾಗಿತ್ತು",
       "Verifier crash ಆಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why is UNKNOWN a separate verification status?",
      "qKn": "UNKNOWN ಒಂದು ಪ್ರತ್ಯೇಕ ಪರಿಶೀಲನೆ ಸ್ಥಿತಿ ಏಕೆ?",
      "opts": [
       "It is faster",
       "A verifier outage must not silently count as approval",
       "Python requires three states",
       "FAIL is not allowed"
      ],
      "optsKn": [
       "ಅದು ವೇಗ",
       "Verifier ವ್ಯತ್ಯಯ ಮೌನವಾಗಿ ಅನುಮೋದನೆ ಎಂದು ಎಣಿಸಬಾರದು",
       "Python ಗೆ ಮೂರು ಸ್ಥಿತಿ ಬೇಕು",
       "FAIL ಅನುಮತಿಸಲ್ಪಟ್ಟಿಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "What does a passing external verifier actually show?",
      "qKn": "ಪಾಸ್ ಆದ ಬಾಹ್ಯ verifier ನಿಜವಾಗಿ ಏನು ತೋರಿಸುತ್ತದೆ?",
      "opts": [
       "The output is universally correct",
       "The checks that were run passed",
       "The model is confident",
       "The output is the best possible"
      ],
      "optsKn": [
       "ಔಟ್‌ಪುಟ್ ಸಾರ್ವತ್ರಿಕವಾಗಿ ಸರಿ",
       "ಚಲಾಯಿಸಿದ ಪರಿಶೀಲನೆಗಳು ಪಾಸ್ ಆದವು",
       "ಮಾದರಿಗೆ ವಿಶ್ವಾಸವಿದೆ",
       "ಔಟ್‌ಪುಟ್ ಸಾಧ್ಯವಾದ ಅತ್ಯುತ್ತಮ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
