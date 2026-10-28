module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6066020ed05b32151a",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Self-Refine and CRITIC: Iterative Output Improvement (Part 3 of 3) — Evaluator-Optimizer, Stopping Rules and Guardrails",
 "titleKn": "Self-Refine ಮತ್ತು CRITIC: ಪುನರಾವರ್ತಿತ ಔಟ್‌ಪುಟ್ ಸುಧಾರಣೆ (ಭಾಗ 3 / 3) — Evaluator-Optimizer, ನಿಲುಗಡೆ ನಿಯಮಗಳು ಮತ್ತು Guardrails",
 "desc": "Build an evaluator-optimizer controller with structured issues, severities, three-state verification, stagnation and oscillation detection and a final guardrail, and see stop reasons as data, a verifier outage that leaves correct output unverified, and a guardrail that rescues a misconfigured suite.",
 "descKn": "ರಚನಾತ್ಮಕ ಸಮಸ್ಯೆಗಳು, ತೀವ್ರತೆಗಳು, ಮೂರು-ಸ್ಥಿತಿ ಪರಿಶೀಲನೆ, ನಿಶ್ಚಲತೆ ಮತ್ತು ಆಂದೋಲನ ಪತ್ತೆ ಹಾಗೂ ಅಂತಿಮ guardrail ಇರುವ evaluator-optimizer controller ನಿರ್ಮಿಸಿ, ಮತ್ತು ಡೇಟಾ ಆಗಿ ನಿಲುಗಡೆ ಕಾರಣಗಳು, ಸರಿಯಾದ ಔಟ್‌ಪುಟ್ ಅನ್ನು ಪರಿಶೀಲಿಸದೆ ಬಿಡುವ verifier ವ್ಯತ್ಯಯ, ಮತ್ತು ತಪ್ಪಾಗಿ ಸಂರಚಿಸಿದ suite ಅನ್ನು ರಕ್ಷಿಸುವ guardrail ನೋಡಿ.",
 "objectives": [
  "Model issues with source, category, severity and evidence, and separate blocking errors from warnings.",
  "Use PASS, FAIL and UNKNOWN so a verifier outage never counts as approval.",
  "Detect stagnation and oscillation by comparing against all history, and bound runs with a budget.",
  "Add an output guardrail as a final boundary and explain defense in depth.",
  "Return stop_reason and success as data and distinguish termination from success."
 ],
 "objectivesKn": [
  "Source, ವರ್ಗ, ತೀವ್ರತೆ ಮತ್ತು ಸಾಕ್ಷ್ಯದೊಂದಿಗೆ ಸಮಸ್ಯೆಗಳನ್ನು ಮಾದರೀಕರಿಸಿ ಮತ್ತು ತಡೆಯುವ ದೋಷಗಳನ್ನು ಎಚ್ಚರಿಕೆಗಳಿಂದ ಬೇರ್ಪಡಿಸಿ.",
  "PASS, FAIL ಮತ್ತು UNKNOWN ಬಳಸಿ, ಆಗ verifier ವ್ಯತ್ಯಯ ಎಂದೂ ಅನುಮೋದನೆ ಎಂದು ಎಣಿಸಲ್ಪಡುವುದಿಲ್ಲ.",
  "ಇಡೀ ಇತಿಹಾಸಕ್ಕೆ ಹೋಲಿಸಿ ನಿಶ್ಚಲತೆ ಮತ್ತು ಆಂದೋಲನ ಪತ್ತೆಹಚ್ಚಿ, ಮತ್ತು budget ನಿಂದ ಓಟಗಳನ್ನು ಮಿತಿಗೊಳಿಸಿ.",
  "ಅಂತಿಮ ಗಡಿಯಾಗಿ ಔಟ್‌ಪುಟ್ guardrail ಸೇರಿಸಿ ಮತ್ತು ಆಳದ ರಕ್ಷಣೆ ವಿವರಿಸಿ.",
  "stop_reason ಮತ್ತು success ಅನ್ನು ಡೇಟಾ ಆಗಿ ಹಿಂತಿರುಗಿಸಿ ಮತ್ತು ಮುಕ್ತಾಯ ಹಾಗೂ ಯಶಸ್ಸನ್ನು ಬೇರ್ಪಡಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Self-Refine and CRITIC: Iterative Output Improvement (Part 3 of 3)",
    "textKn": "Self-Refine ಮತ್ತು CRITIC: ಪುನರಾವರ್ತಿತ ಔಟ್‌ಪುಟ್ ಸುಧಾರಣೆ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: an evaluator-optimizer controller with structured issues, three-state verification, stopping rules and a final output guardrail. Every output was genuinely produced by selfrefine_3.py on Python 3.14.5. The optimizer is a deterministic script and the fact verifier a table, so the lesson shows controller behaviour and not model quality. The source text for this part was cut off partway through its metrics section, and the code is rebuilt from the lesson's description. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ ಮೂರನೆಯದು: ರಚನಾತ್ಮಕ ಸಮಸ್ಯೆಗಳು, ಮೂರು-ಸ್ಥಿತಿ ಪರಿಶೀಲನೆ, ನಿಲುಗಡೆ ನಿಯಮಗಳು ಮತ್ತು ಅಂತಿಮ ಔಟ್‌ಪುಟ್ guardrail ಇರುವ evaluator-optimizer controller. ಎಲ್ಲಾ output selfrefine_3.py ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. Optimizer ನಿರ್ಧಾರಾತ್ಮಕ ಸ್ಕ್ರಿಪ್ಟ್ ಮತ್ತು fact verifier ಒಂದು ಕೋಷ್ಟಕ, ಆದ್ದರಿಂದ ಪಾಠ controller ವರ್ತನೆ ತೋರಿಸುತ್ತದೆ, ಮಾದರಿ ಗುಣಮಟ್ಟವನ್ನಲ್ಲ. ಈ ಭಾಗದ ಮೂಲ ಪಠ್ಯ ಅದರ metrics ವಿಭಾಗದ ಮಧ್ಯದಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಮತ್ತು ಕೋಡ್ ಅನ್ನು ಪಾಠದ ವಿವರಣೆಯಿಂದ ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Production Controller",
    "textKn": "Production Controller",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Separate Generation, Evaluation, Refinement and Stopping",
    "headingKn": "ಉತ್ಪಾದನೆ, ಮೌಲ್ಯಮಾಪನ, ಪರಿಷ್ಕರಣೆ ಮತ್ತು ನಿಲುಗಡೆ ಬೇರ್ಪಡಿಸಿ",
    "bodyEn": "One giant prompt that says \"answer, check it, fix it and decide when you are done\" blurs five jobs. A production design makes them explicit. The generator makes a candidate, the evaluator suite diagnoses it, verifiers collect objective evidence, the optimizer repairs the diagnosed defects, the controller decides whether to continue, and a guardrail decides whether the output may cross the boundary. The evaluator should find problems and not rewrite; the optimizer should use the supplied issues and preserve what already passed. Different roles reduce rubber-stamping, but they do not replace external evidence.",
    "bodyKn": "\"ಉತ್ತರಿಸಿ, ಪರಿಶೀಲಿಸಿ, ಸರಿಪಡಿಸಿ ಮತ್ತು ಯಾವಾಗ ಮುಗಿಯಿತು ಎಂದು ನಿರ್ಧರಿಸಿ\" ಎನ್ನುವ ಒಂದು ದೊಡ್ಡ prompt ಐದು ಕೆಲಸಗಳನ್ನು ಮಸುಕಾಗಿಸುತ್ತದೆ. Production ವಿನ್ಯಾಸ ಅವನ್ನು ಸ್ಪಷ್ಟಗೊಳಿಸುತ್ತದೆ. Generator ಅಭ್ಯರ್ಥಿ ರಚಿಸುತ್ತದೆ, evaluator suite ರೋಗನಿರ್ಣಯ ಮಾಡುತ್ತದೆ, verifiers ವಸ್ತುನಿಷ್ಠ ಸಾಕ್ಷ್ಯ ಸಂಗ್ರಹಿಸುತ್ತವೆ, optimizer ರೋಗನಿರ್ಣಯ ಮಾಡಿದ ದೋಷಗಳನ್ನು ದುರಸ್ತಿ ಮಾಡುತ್ತದೆ, controller ಮುಂದುವರಿಯಬೇಕೇ ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ, ಮತ್ತು guardrail ಔಟ್‌ಪುಟ್ ಗಡಿ ದಾಟಬಹುದೇ ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ. Evaluator ಸಮಸ್ಯೆಗಳನ್ನು ಹುಡುಕಬೇಕು, ಮರುಬರೆಯಬಾರದು; optimizer ನೀಡಿದ ಸಮಸ್ಯೆಗಳನ್ನು ಬಳಸಿ ಈಗಾಗಲೇ ಪಾಸ್ ಆದದ್ದನ್ನು ಉಳಿಸಬೇಕು. ಬೇರೆ ಪಾತ್ರಗಳು rubber-stamping ಕಡಿಮೆ ಮಾಡುತ್ತವೆ, ಆದರೆ ಬಾಹ್ಯ ಸಾಕ್ಷ್ಯವನ್ನು ಬದಲಿಸುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Controller",
    "headingKn": "Controller",
    "svgCode": "<svg viewBox=\"0 0 300 215\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"215\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Evaluator-optimizer controller with a final guardrail</text>\n  <rect x=\"100\" y=\"22\" width=\"100\" height=\"20\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"35\" fill=\"#93c5fd\" text-anchor=\"middle\">GENERATE</text>\n  <path d=\"M150,42 V52\" stroke=\"#475569\"/>\n  <rect x=\"60\" y=\"54\" width=\"180\" height=\"26\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"66\" fill=\"#6ee7b7\" text-anchor=\"middle\">EVALUATOR SUITE</text><text x=\"150\" y=\"76\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">structure | facts | quality -> PASS / FAIL / UNKNOWN</text>\n  <path d=\"M110,80 L70,102 M190,80 L230,102\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"102\" width=\"110\" height=\"24\" rx=\"4\" fill=\"#1e293b\" stroke=\"#fbbf24\"/><text x=\"75\" y=\"113\" fill=\"#fde68a\" text-anchor=\"middle\">all required PASS</text><text x=\"75\" y=\"122\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"6\">-> GUARDRAIL</text>\n  <rect x=\"170\" y=\"102\" width=\"110\" height=\"24\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"225\" y=\"113\" fill=\"#c4b5fd\" text-anchor=\"middle\">FAIL or UNKNOWN</text><text x=\"225\" y=\"122\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">-> OPTIMIZER</text>\n  <rect x=\"20\" y=\"138\" width=\"110\" height=\"22\" rx=\"4\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"75\" y=\"153\" fill=\"#fde68a\" text-anchor=\"middle\">verified: RETURN</text>\n  <rect x=\"170\" y=\"138\" width=\"110\" height=\"22\" rx=\"4\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"225\" y=\"153\" fill=\"#fecaca\" text-anchor=\"middle\">stagnation / budget: STOP</text>\n  <text x=\"150\" y=\"182\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">stop_reason is data: verified, stagnation, max_iterations</text>\n  <text x=\"150\" y=\"194\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">termination is not success: only verified is success</text>\n</svg>",
    "captionEn": "The suite evaluates; required PASS leads to a final guardrail; FAIL or UNKNOWN leads to the optimizer; stagnation and the budget end the run with a stop reason.",
    "captionKn": "Suite ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ; ಅಗತ್ಯ PASS ಅಂತಿಮ guardrail ಗೆ ಕರೆದೊಯ್ಯುತ್ತದೆ; FAIL ಅಥವಾ UNKNOWN optimizer ಗೆ; ನಿಶ್ಚಲತೆ ಮತ್ತು budget ನಿಲುಗಡೆ ಕಾರಣದೊಂದಿಗೆ ಓಟ ಮುಗಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Structured Issues, Severity and Three States",
    "headingKn": "ರಚನಾತ್ಮಕ ಸಮಸ್ಯೆಗಳು, ತೀವ್ರತೆ ಮತ್ತು ಮೂರು ಸ್ಥಿತಿಗಳು",
    "bodyEn": "An Issue carries a source, a category, a message, a severity and optional evidence, so the optimizer knows what failed, where and why. ERROR blocks acceptance and WARNING is recorded without blocking. Each evaluator returns an EvaluationResult with a PASS, FAIL or UNKNOWN status. The RunResult carries the output, an explicit success flag and a stop_reason, because every run terminates but only some of them succeed. This fixes the Part 1 weakness where a bare return value could not distinguish success from a cut-off run.",
    "bodyKn": "Issue source, ವರ್ಗ, ಸಂದೇಶ, ತೀವ್ರತೆ ಮತ್ತು ಐಚ್ಛಿಕ ಸಾಕ್ಷ್ಯ ಹೊಂದಿದೆ, ಹಾಗಾಗಿ optimizer ಗೆ ಏನು, ಎಲ್ಲಿ ಮತ್ತು ಏಕೆ ವಿಫಲವಾಯಿತು ಎಂದು ತಿಳಿಯುತ್ತದೆ. ERROR ಸ್ವೀಕಾರ ತಡೆಯುತ್ತದೆ ಮತ್ತು WARNING ತಡೆಯದೆ ದಾಖಲಾಗುತ್ತದೆ. ಪ್ರತಿ evaluator PASS, FAIL ಅಥವಾ UNKNOWN ಸ್ಥಿತಿಯ EvaluationResult ಹಿಂತಿರುಗಿಸುತ್ತದೆ. RunResult ಔಟ್‌ಪುಟ್, ಸ್ಪಷ್ಟ success ಧ್ವಜ ಮತ್ತು stop_reason ಒಯ್ಯುತ್ತದೆ, ಏಕೆಂದರೆ ಪ್ರತಿ ಓಟ ಮುಗಿಯುತ್ತದೆ ಆದರೆ ಕೆಲವು ಮಾತ್ರ ಯಶಸ್ವಿಯಾಗುತ್ತವೆ. ಇದು ಬರಿಯ ಹಿಂತಿರುಗುವ ಮೌಲ್ಯ ಯಶಸ್ಸು ಮತ್ತು ಕತ್ತರಿಸಿದ ಓಟವನ್ನು ಬೇರ್ಪಡಿಸಲಾಗದ ಭಾಗ 1 ರ ದೌರ್ಬಲ್ಯ ಸರಿಪಡಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building and Running It",
    "textKn": "ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "selfrefine_3.py",
    "headingEn": "Data model and the evaluator suite",
    "headingKn": "ಡೇಟಾ ಮಾದರಿ ಮತ್ತು evaluator suite",
    "descEn": "Severity, VerificationStatus, Issue, EvaluationResult, Attempt and RunResult are the data model. check_structure, a fact verifier that can be marked unavailable, and evaluate_quality are three independent evaluators. Duplicates are an ERROR here; starting every bullet with the same word is only a WARNING.",
    "descKn": "Severity, VerificationStatus, Issue, EvaluationResult, Attempt ಮತ್ತು RunResult ಡೇಟಾ ಮಾದರಿ. check_structure, ಲಭ್ಯವಿಲ್ಲ ಎಂದು ಗುರುತಿಸಬಹುದಾದ fact verifier, ಮತ್ತು evaluate_quality ಮೂರು ಸ್ವತಂತ್ರ evaluators. ಇಲ್ಲಿ ನಕಲುಗಳು ERROR; ಪ್ರತಿ bullet ಅದೇ ಪದದಿಂದ ಆರಂಭವಾಗುವುದು ಕೇವಲ WARNING.",
    "code": "from __future__ import annotations\n\nfrom dataclasses import dataclass\nfrom enum import Enum\n\nTASK = \"Write exactly 3 short bullet points about Python. Each bullet must be under 60 characters.\"\nMAX_LEN = 60\n\n\nclass Severity(Enum):\n    ERROR = \"error\"\n    WARNING = \"warning\"\n\n\nclass VerificationStatus(Enum):\n    PASS = \"pass\"\n    FAIL = \"fail\"\n    UNKNOWN = \"unknown\"\n\n\n@dataclass\nclass Issue:\n    source: str\n    category: str\n    message: str\n    severity: Severity\n    evidence: str | None = None\n\n\n@dataclass\nclass EvaluationResult:\n    name: str\n    status: VerificationStatus\n    issues: list[Issue]\n\n\n@dataclass\nclass Attempt:\n    iteration: int\n    output: str\n    evaluations: list[EvaluationResult]\n\n\n@dataclass\nclass RunResult:\n    output: str\n    success: bool\n    stop_reason: str\n    history: list[Attempt]\n\n\nKNOWN_FALSE_CLAIMS = {\n    \"Python was originally created by Microsoft.\": {\n        \"evidence\": \"Python was created by Guido van Rossum.\",\n        \"replacement\": \"Python supports multiple programming paradigms.\",\n    },\n}\nFALLBACK_FACTS = [\"Python has a large standard library.\", \"Guido van Rossum named it after Monty Python.\"]\n\n\ndef generate(task):\n    return \"\\n\".join([\"- Python was created by Guido van Rossum.\", \"- Python was first released in 1991.\",\n                      \"- Python was originally created by Microsoft.\"])\n\n\ndef extract_bullets(output):\n    return [l.strip()[2:].strip() for l in output.splitlines() if l.strip().startswith(\"- \")]\n\n\ndef render(bullets):\n    return \"\\n\".join(\"- \" + b for b in bullets)\n\n\ndef status_of(issues):\n    return VerificationStatus.FAIL if any(i.severity is Severity.ERROR for i in issues) else VerificationStatus.PASS\n\n\ndef check_structure(output):\n    bullets, issues = extract_bullets(output), []\n    if len(bullets) != 3:\n        issues.append(Issue(\"structure_checker\", \"bullet_count\", f\"Expected exactly 3 bullets, found {len(bullets)}.\",\n                            Severity.ERROR, f\"Parsed bullet count: {len(bullets)}\"))\n    for n, b in enumerate(bullets, 1):\n        rendered = \"- \" + b\n        if len(rendered) >= MAX_LEN:\n            issues.append(Issue(\"structure_checker\", \"bullet_length\", f\"Bullet {n} must be under {MAX_LEN} characters.\",\n                                Severity.ERROR, f\"length {len(rendered)}\"))\n    return EvaluationResult(\"structure\", status_of(issues), issues)\n\n\ndef make_fact_verifier(available=True):\n    def verify(output):\n        if not available:\n            return EvaluationResult(\"external_facts\", VerificationStatus.UNKNOWN, [])\n        issues = []\n        for n, claim in enumerate(extract_bullets(output), 1):\n            rec = KNOWN_FALSE_CLAIMS.get(claim)\n            if rec:\n                issues.append(Issue(\"fact_verifier\", \"factuality\", f\"Bullet {n} contains a known false claim: {claim}\",\n                                    Severity.ERROR, rec[\"evidence\"]))\n        return EvaluationResult(\"external_facts\", status_of(issues), issues)\n    return verify\n\n\ndef evaluate_quality(output):\n    bullets, issues = extract_bullets(output), []\n    norm = [b.casefold().strip() for b in bullets]\n    if len(norm) != len(set(norm)):\n        issues.append(Issue(\"quality_evaluator\", \"duplication\", \"Two bullets are identical.\", Severity.ERROR))\n    if len(bullets) > 1 and len({b.split()[0].casefold() for b in bullets}) == 1:\n        issues.append(Issue(\"quality_evaluator\", \"style\", f\"Every bullet starts with the word '{bullets[0].split()[0]}'.\",\n                            Severity.WARNING))\n    return EvaluationResult(\"quality\", status_of(issues), issues)\n\n\ndef default_suite(facts_available=True):\n    return [check_structure, make_fact_verifier(facts_available), evaluate_quality]\n\n\ndef evaluate_candidate(output, suite):\n    return [e(output) for e in suite]\n\n\ndef blocking(evals):\n    return [i for e in evals for i in e.issues if i.severity is Severity.ERROR]\n\n\ndef warnings(evals):\n    return [i for e in evals for i in e.issues if i.severity is Severity.WARNING]\n\n\ndef required_passed(evals):\n    return all(e.status is VerificationStatus.PASS for e in evals)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "selfrefine_3.py",
    "headingEn": "Optimizer, stagnation, guardrail and the controller",
    "headingKn": "Optimizer, ನಿಶ್ಚಲತೆ, guardrail ಮತ್ತು controller",
    "descEn": "refine repairs known false claims, deduplicates, trims to three, pads from fallback facts and shortens long lines. detect_stagnation compares a revision with every earlier output, so it catches A to B to A as well as A to A. output_guardrail re-checks count, length and known false claims. run_evaluator_optimizer enforces the budget, checks the guardrail only after the suite passes, and records why it stopped.",
    "descKn": "refine ತಿಳಿದ ತಪ್ಪು ಹೇಳಿಕೆಗಳನ್ನು ದುರಸ್ತಿ ಮಾಡುತ್ತದೆ, ನಕಲು ತೆಗೆಯುತ್ತದೆ, ಮೂರಕ್ಕೆ ಕತ್ತರಿಸುತ್ತದೆ, ಹಿಂದಿನ ಸಂಗತಿಗಳಿಂದ ಭರ್ತಿ ಮಾಡುತ್ತದೆ ಮತ್ತು ಉದ್ದದ ಸಾಲುಗಳನ್ನು ಚಿಕ್ಕದಾಗಿಸುತ್ತದೆ. detect_stagnation ಪರಿಷ್ಕರಣೆಯನ್ನು ಹಿಂದಿನ ಪ್ರತಿ ಔಟ್‌ಪುಟ್‌ಗೆ ಹೋಲಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ A ರಿಂದ A ಮಾತ್ರವಲ್ಲ A ರಿಂದ B ರಿಂದ A ಕೂಡ ಹಿಡಿಯುತ್ತದೆ. output_guardrail ಎಣಿಕೆ, ಉದ್ದ ಮತ್ತು ತಿಳಿದ ತಪ್ಪು ಹೇಳಿಕೆಗಳನ್ನು ಮರುಪರಿಶೀಲಿಸುತ್ತದೆ. run_evaluator_optimizer budget ಜಾರಿಗೊಳಿಸುತ್ತದೆ, suite ಪಾಸ್ ಆದ ನಂತರ ಮಾತ್ರ guardrail ಪರಿಶೀಲಿಸುತ್ತದೆ, ಮತ್ತು ಏಕೆ ನಿಂತಿತು ಎಂದು ದಾಖಲಿಸುತ್ತದೆ.",
    "code": "def refine(task, output, evaluations, history):\n    repaired = []\n    for b in extract_bullets(output):\n        rec = KNOWN_FALSE_CLAIMS.get(b)\n        repaired.append(rec[\"replacement\"] if rec else b)\n    seen, deduped = set(), []\n    for b in repaired:\n        if b.casefold() not in seen:\n            seen.add(b.casefold())\n            deduped.append(b)\n    deduped = deduped[:3]\n    for f in FALLBACK_FACTS:\n        if len(deduped) >= 3:\n            break\n        if f.casefold() not in seen:\n            deduped.append(f)\n    deduped = [b if len(\"- \" + b) < MAX_LEN else b[:MAX_LEN - 5].rstrip() + \"...\" for b in deduped]\n    return render(deduped)\n\n\ndef normalize(output):\n    return \" \".join(output.split())\n\n\ndef detect_stagnation(revised, history):\n    return normalize(revised) in {normalize(a.output) for a in history}\n\n\ndef output_guardrail(output):\n    issues, bullets = [], extract_bullets(output)\n    if len(bullets) != 3:\n        issues.append(Issue(\"output_guardrail\", \"bullet_count\", \"Output must contain exactly 3 bullets.\", Severity.ERROR))\n    if any(len(\"- \" + b) >= MAX_LEN for b in bullets):\n        issues.append(Issue(\"output_guardrail\", \"bullet_length\", \"A bullet is too long.\", Severity.ERROR))\n    if any(b in KNOWN_FALSE_CLAIMS for b in bullets):\n        issues.append(Issue(\"output_guardrail\", \"factuality\", \"Output contains a known false claim.\", Severity.ERROR))\n    return EvaluationResult(\"output_guardrail\", status_of(issues), issues)\n\n\ndef run_evaluator_optimizer(task, max_iterations=4, generator=generate, optimizer=refine, suite=None, guardrail=output_guardrail, verbose=False):\n    suite = suite or default_suite()\n    history: list[Attempt] = []\n    candidate = generator(task)\n    for iteration in range(max_iterations):\n        evals = evaluate_candidate(candidate, suite)\n        history.append(Attempt(iteration, candidate, evals))\n        if verbose:\n            print(f\"ITERATION {iteration}\")\n            for e in evals:\n                print(f\"  {e.name}: {e.status.value.upper()}\" + \"\".join(f\"  [{i.severity.value.upper()}] {i.category}\" for i in e.issues))\n        if required_passed(evals):\n            g = guardrail(candidate)\n            if verbose:\n                print(f\"  {g.name}: {g.status.value.upper()}\" + \"\".join(f\"  [{i.severity.value.upper()}] {i.category}\" for i in g.issues))\n            if g.status is VerificationStatus.PASS:\n                return RunResult(candidate, True, \"verified\", history)\n        if iteration == max_iterations - 1:\n            return RunResult(candidate, False, \"max_iterations\", history)\n        revised = optimizer(task, candidate, evals, history)\n        if detect_stagnation(revised, history):\n            return RunResult(candidate, False, \"stagnation\", history)\n        candidate = revised\n    return RunResult(candidate, False, \"max_iterations\", history)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "selfrefine_3.py",
    "headingEn": "main(): seven experiments",
    "headingKn": "main(): ಏಳು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the default case, a stagnating optimizer, an A, B, A optimizer, a churning optimizer, a verifier outage, a misconfigured suite that only the guardrail can rescue, and a side-by-side table of stop reasons.",
    "descKn": "main() ಡೀಫಾಲ್ಟ್ ಪ್ರಕರಣ, ನಿಶ್ಚಲ optimizer, A, B, A optimizer, ತಿರುಗುವ optimizer, verifier ವ್ಯತ್ಯಯ, guardrail ಮಾತ್ರ ರಕ್ಷಿಸಬಲ್ಲ ತಪ್ಪಾಗಿ ಸಂರಚಿಸಿದ suite, ಮತ್ತು ನಿಲುಗಡೆ ಕಾರಣಗಳ ಪಕ್ಕ-ಪಕ್ಕದ ಕೋಷ್ಟಕ ಚಲಾಯಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef summary(name, r):\n    print(f\"{name:<34} success={r.success!s:<5} stop_reason={r.stop_reason:<14} iterations={len(r.history)}\")\n\n\ndef main():\n    section(\"1. The default run, with every evaluator reported separately\")\n    r = run_evaluator_optimizer(TASK, verbose=True)\n    print(\"final output:\")\n    print(r.output)\n    print(\"warnings on the accepted output:\", [(i.category, i.message) for i in warnings(r.history[-1].evaluations)])\n    summary(\"default\", r)\n\n    section(\"2. Stagnation: an optimizer that returns the same candidate\")\n    summary(\"optimizer returns the input\", run_evaluator_optimizer(TASK, optimizer=lambda t, c, e, h: c))\n\n    section(\"3. Oscillation A -> B -> A is caught by comparing against all history\")\n    A = generate(TASK)\n    B = \"\\n\".join([\"- Python was created by Guido van Rossum.\", \"- Python was first released in 1991.\",\n                   \"- Python is widely used for automation.\", \"- Python emphasizes readable code.\"])\n    flip = lambda t, c, e, h: B if normalize(c) == normalize(A) else A\n    r = run_evaluator_optimizer(TASK, max_iterations=6, optimizer=flip)\n    summary(\"A -> B -> A optimizer\", r)\n    print(\"candidates tried:\", [len(extract_bullets(a.output)) for a in r.history], \"bullets each\")\n\n    section(\"4. Budget exhausted: every revision is different but still wrong\")\n    counter = {\"n\": 0}\n\n    def churn(t, c, e, h):\n        counter[\"n\"] += 1\n        return \"\\n\".join([\"- Python was created by Guido van Rossum.\", f\"- Python fact number {counter['n']}.\",\n                          \"- Python was originally created by Microsoft.\"])\n\n    r = run_evaluator_optimizer(TASK, max_iterations=4, optimizer=churn)\n    summary(\"churning optimizer\", r)\n    print(\"last output still has the false claim:\", \"Microsoft\" in r.output)\n\n    section(\"5. UNKNOWN is not PASS: the fact verifier is unavailable\")\n    r = run_evaluator_optimizer(TASK, suite=default_suite(facts_available=False), verbose=True)\n    summary(\"verifier outage\", r)\n\n    section(\"6. Defense in depth: the suite omits the fact verifier, the guardrail catches the claim\")\n    r = run_evaluator_optimizer(TASK, suite=[check_structure, evaluate_quality], verbose=True)\n    summary(\"misconfigured suite\", r)\n    print(\"final output:\")\n    print(r.output)\n\n    section(\"7. Runs side by side\")\n    runs = {\n        \"default\": run_evaluator_optimizer(TASK),\n        \"stagnating optimizer\": run_evaluator_optimizer(TASK, optimizer=lambda t, c, e, h: c),\n        \"churning optimizer\": run_evaluator_optimizer(TASK, optimizer=churn),\n        \"verifier outage\": run_evaluator_optimizer(TASK, suite=default_suite(False)),\n    }\n    for k, v in runs.items():\n        summary(k, v)\n    print(\"every run terminates; only 'verified' means the task was accomplished\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. The default run, with every evaluator reported separately ---\nITERATION 0\n  structure: PASS\n  external_facts: FAIL  [ERROR] factuality\n  quality: PASS  [WARNING] style\nITERATION 1\n  structure: PASS\n  external_facts: PASS\n  quality: PASS  [WARNING] style\n  output_guardrail: PASS\nfinal output:\n- Python was created by Guido van Rossum.\n- Python was first released in 1991.\n- Python supports multiple programming paradigms.\nwarnings on the accepted output: [('style', \"Every bullet starts with the word 'Python'.\")]\ndefault                            success=True  stop_reason=verified       iterations=2\n\n--- 2. Stagnation: an optimizer that returns the same candidate ---\noptimizer returns the input        success=False stop_reason=stagnation     iterations=1\n\n--- 3. Oscillation A -> B -> A is caught by comparing against all history ---\nA -> B -> A optimizer              success=False stop_reason=stagnation     iterations=2\ncandidates tried: [3, 4] bullets each\n\n--- 4. Budget exhausted: every revision is different but still wrong ---\nchurning optimizer                 success=False stop_reason=max_iterations iterations=4\nlast output still has the false claim: True\n\n--- 5. UNKNOWN is not PASS: the fact verifier is unavailable ---\nITERATION 0\n  structure: PASS\n  external_facts: UNKNOWN\n  quality: PASS  [WARNING] style\nITERATION 1\n  structure: PASS\n  external_facts: UNKNOWN\n  quality: PASS  [WARNING] style\nverifier outage                    success=False stop_reason=stagnation     iterations=2\n\n--- 6. Defense in depth: the suite omits the fact verifier, the guardrail catches the claim ---\nITERATION 0\n  structure: PASS\n  quality: PASS  [WARNING] style\n  output_guardrail: FAIL  [ERROR] factuality\nITERATION 1\n  structure: PASS\n  quality: PASS  [WARNING] style\n  output_guardrail: PASS\nmisconfigured suite                success=True  stop_reason=verified       iterations=2\nfinal output:\n- Python was created by Guido van Rossum.\n- Python was first released in 1991.\n- Python supports multiple programming paradigms.\n\n--- 7. Runs side by side ---\ndefault                            success=True  stop_reason=verified       iterations=2\nstagnating optimizer               success=False stop_reason=stagnation     iterations=1\nchurning optimizer                 success=False stop_reason=max_iterations iterations=4\nverifier outage                    success=False stop_reason=stagnation     iterations=2\nevery run terminates; only 'verified' means the task was accomplished"
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
    "headingEn": "The Default Run and a Warning the Source Missed",
    "headingKn": "ಡೀಫಾಲ್ಟ್ ಓಟ ಮತ್ತು ಮೂಲ ತಪ್ಪಿಸಿಕೊಂಡ ಎಚ್ಚರಿಕೆ",
    "bodyEn": "Section 1 reports each evaluator separately. Iteration 0: structure PASS, external_facts FAIL with a factuality ERROR, quality PASS. The optimizer replaces the false claim, iteration 1 passes everything, the guardrail passes, and the run ends success=True, stop_reason=verified after 2 iterations. One detail differs from the source text, which shows the quality evaluator with \"No issues.\" The real run reports a WARNING on the accepted output: \"Every bullet starts with the word 'Python'.\" Warnings do not block, so the output is still accepted, but they are recorded and visible, which is the point of separating severities.",
    "bodyKn": "ವಿಭಾಗ 1 ಪ್ರತಿ evaluator ಅನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ವರದಿ ಮಾಡುತ್ತದೆ. ಪುನರಾವರ್ತನೆ 0: structure PASS, external_facts FAIL ಜೊತೆ factuality ERROR, quality PASS. Optimizer ತಪ್ಪು ಹೇಳಿಕೆ ಬದಲಿಸುತ್ತದೆ, ಪುನರಾವರ್ತನೆ 1 ಎಲ್ಲವನ್ನೂ ಪಾಸ್ ಮಾಡುತ್ತದೆ, guardrail ಪಾಸ್, ಮತ್ತು ಓಟ 2 ಪುನರಾವರ್ತನೆಗಳ ನಂತರ success=True, stop_reason=verified ಜೊತೆ ಮುಗಿಯುತ್ತದೆ. ಒಂದು ವಿವರ ಮೂಲ ಪಠ್ಯಕ್ಕಿಂತ ಬೇರೆ; ಮೂಲ quality evaluator ಅನ್ನು \"No issues.\" ಎಂದು ತೋರಿಸುತ್ತದೆ. ನಿಜವಾದ ಓಟ ಒಪ್ಪಿದ ಔಟ್‌ಪುಟ್ ಮೇಲೆ WARNING ವರದಿ ಮಾಡುತ್ತದೆ: \"Every bullet starts with the word 'Python'.\" ಎಚ್ಚರಿಕೆಗಳು ತಡೆಯುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ಔಟ್‌ಪುಟ್ ಇನ್ನೂ ಒಪ್ಪಲ್ಪಡುತ್ತದೆ, ಆದರೆ ಅವು ದಾಖಲಾಗಿ ಕಾಣುತ್ತವೆ; ತೀವ್ರತೆಗಳನ್ನು ಬೇರ್ಪಡಿಸುವ ಉದ್ದೇಶ ಅದೇ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Stagnation, Oscillation and the Budget",
    "headingKn": "ನಿಶ್ಚಲತೆ, ಆಂದೋಲನ ಮತ್ತು Budget",
    "bodyEn": "Section 2: an optimizer that returns its input is stopped after 1 iteration with stop_reason stagnation, success False. Section 3: an optimizer that flips between candidate A (3 bullets, false claim) and candidate B (4 bullets) is stopped after 2 iterations, because the revision back to A matches an earlier output, which only works because the comparison covers all history and not just the previous candidate. Section 4: an optimizer that produces a different, still-wrong candidate every time is not stagnant, so it runs to the budget, 4 iterations, stop_reason max_iterations, and the last output still contains the false claim. Every run terminates and none of these three succeeded.",
    "bodyKn": "ವಿಭಾಗ 2: ತನ್ನ ಇನ್‌ಪುಟ್ ಹಿಂತಿರುಗಿಸುವ optimizer 1 ಪುನರಾವರ್ತನೆಯ ನಂತರ stop_reason stagnation, success False ಜೊತೆ ನಿಲ್ಲುತ್ತದೆ. ವಿಭಾಗ 3: ಅಭ್ಯರ್ಥಿ A (3 bullets, ತಪ್ಪು ಹೇಳಿಕೆ) ಮತ್ತು ಅಭ್ಯರ್ಥಿ B (4 bullets) ನಡುವೆ ತಿರುಗುವ optimizer 2 ಪುನರಾವರ್ತನೆಯ ನಂತರ ನಿಲ್ಲುತ್ತದೆ, ಏಕೆಂದರೆ A ಗೆ ಹಿಂತಿರುಗುವ ಪರಿಷ್ಕರಣೆ ಹಿಂದಿನ ಔಟ್‌ಪುಟ್‌ಗೆ ಹೊಂದುತ್ತದೆ, ಇದು ಹೋಲಿಕೆ ಹಿಂದಿನ ಅಭ್ಯರ್ಥಿಗೆ ಮಾತ್ರವಲ್ಲ ಇಡೀ ಇತಿಹಾಸ ಆವರಿಸುವುದರಿಂದ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತದೆ. ವಿಭಾಗ 4: ಪ್ರತಿ ಬಾರಿ ಬೇರೆ, ಇನ್ನೂ ತಪ್ಪಾದ ಅಭ್ಯರ್ಥಿ ಉತ್ಪಾದಿಸುವ optimizer ನಿಶ್ಚಲವಲ್ಲ, ಆದ್ದರಿಂದ ಅದು budget ವರೆಗೆ, 4 ಪುನರಾವರ್ತನೆ, stop_reason max_iterations ಜೊತೆ ಓಡುತ್ತದೆ, ಮತ್ತು ಕೊನೆಯ ಔಟ್‌ಪುಟ್ ಇನ್ನೂ ತಪ್ಪು ಹೇಳಿಕೆ ಹೊಂದಿದೆ. ಪ್ರತಿ ಓಟ ಮುಗಿಯುತ್ತದೆ ಮತ್ತು ಈ ಮೂರರಲ್ಲಿ ಯಾವುದೂ ಯಶಸ್ವಿಯಾಗಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: With the Verifier Down, the Output Was Right and Still Not Verified",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Verifier ಸ್ಥಗಿತವಾದಾಗ ಔಟ್‌ಪುಟ್ ಸರಿಯಾಗಿತ್ತು, ಆದರೂ ಪರಿಶೀಲಿತವಲ್ಲ",
    "bodyEn": "Section 5 marks the fact verifier unavailable. Its status is UNKNOWN on both iterations, so required_passed is never true and the run ends success=False. Notice what happened to the text: our optimizer repairs the false claim from its own table, so the accepted-looking output is correct. The controller still refuses to call it verified, which is the right policy: unverified is not wrong, but it is not verified. Notice also that the stop_reason is stagnation, because the optimizer, finding nothing it could repair, returned the same text. The real cause was the verifier outage, and a better controller would report a reason such as verification_unavailable. A stop reason that names the symptom and not the cause misleads whoever debugs it.",
    "bodyKn": "ವಿಭಾಗ 5 fact verifier ಅನ್ನು ಲಭ್ಯವಿಲ್ಲ ಎಂದು ಗುರುತಿಸುತ್ತದೆ. ಎರಡೂ ಪುನರಾವರ್ತನೆಗಳಲ್ಲಿ ಅದರ ಸ್ಥಿತಿ UNKNOWN, ಆದ್ದರಿಂದ required_passed ಎಂದೂ ನಿಜವಲ್ಲ ಮತ್ತು ಓಟ success=False ಜೊತೆ ಮುಗಿಯುತ್ತದೆ. ಪಠ್ಯಕ್ಕೆ ಏನಾಯಿತು ಎಂದು ಗಮನಿಸಿ: ನಮ್ಮ optimizer ತನ್ನದೇ ಕೋಷ್ಟಕದಿಂದ ತಪ್ಪು ಹೇಳಿಕೆ ದುರಸ್ತಿ ಮಾಡುತ್ತದೆ, ಆದ್ದರಿಂದ ಒಪ್ಪಿದಂತೆ ಕಾಣುವ ಔಟ್‌ಪುಟ್ ಸರಿ. Controller ಇನ್ನೂ ಅದನ್ನು ಪರಿಶೀಲಿತ ಎನ್ನಲು ನಿರಾಕರಿಸುತ್ತದೆ, ಇದು ಸರಿಯಾದ ನೀತಿ: ಪರಿಶೀಲಿಸದ್ದು ತಪ್ಪಲ್ಲ, ಆದರೆ ಪರಿಶೀಲಿತವೂ ಅಲ್ಲ. stop_reason stagnation ಎಂಬುದನ್ನೂ ಗಮನಿಸಿ, ಏಕೆಂದರೆ ದುರಸ್ತಿ ಮಾಡಲು ಏನೂ ಸಿಗದ optimizer ಅದೇ ಪಠ್ಯ ಹಿಂತಿರುಗಿಸಿತು. ನಿಜವಾದ ಕಾರಣ verifier ವ್ಯತ್ಯಯ, ಮತ್ತು ಉತ್ತಮ controller verification_unavailable ನಂತಹ ಕಾರಣ ವರದಿ ಮಾಡುತ್ತಿತ್ತು. ಕಾರಣವಲ್ಲ ಲಕ್ಷಣ ಹೆಸರಿಸುವ ನಿಲುಗಡೆ ಕಾರಣ debug ಮಾಡುವವರನ್ನು ದಾರಿತಪ್ಪಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Defense in Depth: The Guardrail Caught What the Suite Missed",
    "headingKn": "ಆಳದ ರಕ್ಷಣೆ: Suite ತಪ್ಪಿಸಿದ್ದನ್ನು Guardrail ಹಿಡಿಯಿತು",
    "bodyEn": "Section 6 builds a deliberately misconfigured suite with no fact verifier, so every evaluator passes at iteration 0. The guardrail runs next and fails with a factuality ERROR. The controller does not return the candidate, it refines (the budget allows it), and at iteration 1 the guardrail passes and the run ends verified. The final output has the false claim replaced. The guardrail is a separate boundary with a narrow contract of non-negotiable checks; its redundancy is useful because it enforces a different boundary. Running ten identical judges would not be.",
    "bodyKn": "ವಿಭಾಗ 6 fact verifier ಇಲ್ಲದ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ತಪ್ಪಾಗಿ ಸಂರಚಿಸಿದ suite ನಿರ್ಮಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಪುನರಾವರ್ತನೆ 0 ರಲ್ಲಿ ಪ್ರತಿ evaluator ಪಾಸ್. ನಂತರ guardrail ಚಲಿಸಿ factuality ERROR ಜೊತೆ ವಿಫಲವಾಗುತ್ತದೆ. Controller ಅಭ್ಯರ್ಥಿಯನ್ನು ಹಿಂತಿರುಗಿಸುವುದಿಲ್ಲ, ಅದು ಪರಿಷ್ಕರಿಸುತ್ತದೆ (budget ಅನುಮತಿಸುತ್ತದೆ), ಮತ್ತು ಪುನರಾವರ್ತನೆ 1 ರಲ್ಲಿ guardrail ಪಾಸ್ ಆಗಿ ಓಟ ಪರಿಶೀಲಿತವಾಗಿ ಮುಗಿಯುತ್ತದೆ. ಅಂತಿಮ ಔಟ್‌ಪುಟ್‌ನಲ್ಲಿ ತಪ್ಪು ಹೇಳಿಕೆ ಬದಲಾಗಿದೆ. Guardrail ಬದಲಾಯಿಸಲಾಗದ ಪರಿಶೀಲನೆಗಳ ಕಿರಿದಾದ ಒಪ್ಪಂದ ಇರುವ ಪ್ರತ್ಯೇಕ ಗಡಿ; ಅದರ ಪುನರಾವರ್ತನೆ ಉಪಯುಕ್ತ ಏಕೆಂದರೆ ಅದು ಬೇರೆ ಗಡಿ ಜಾರಿಗೊಳಿಸುತ್ತದೆ. ಹತ್ತು ಒಂದೇ ರೀತಿಯ judges ಚಲಾಯಿಸುವುದು ಹಾಗಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Stop Reasons Are Data",
    "headingKn": "ನಿಲುಗಡೆ ಕಾರಣಗಳು ಡೇಟಾ",
    "bodyEn": "Section 7 lists four runs in one table: default is verified, the stagnating optimizer ends in stagnation, the churning optimizer ends at max_iterations, and the verifier outage ends in stagnation. All terminate, only one succeeds. A caller can act on stop_reason and success without string matching, and logs record the real distribution of reasons, which is how you would spot a verifier that is down too often or an optimizer that stalls.",
    "bodyKn": "ವಿಭಾಗ 7 ನಾಲ್ಕು ಓಟಗಳನ್ನು ಒಂದು ಕೋಷ್ಟಕದಲ್ಲಿ ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ: default verified, ನಿಶ್ಚಲ optimizer stagnation ನಲ್ಲಿ ಮುಗಿಯುತ್ತದೆ, ತಿರುಗುವ optimizer max_iterations ನಲ್ಲಿ, ಮತ್ತು verifier ವ್ಯತ್ಯಯ stagnation ನಲ್ಲಿ. ಎಲ್ಲವೂ ಮುಗಿಯುತ್ತವೆ, ಒಂದು ಮಾತ್ರ ಯಶಸ್ವಿ. ಕರೆದಾರ ಸ್ಟ್ರಿಂಗ್ ಹೊಂದಿಸದೆ stop_reason ಮತ್ತು success ಮೇಲೆ ಕ್ರಮ ಕೈಗೊಳ್ಳಬಹುದು, ಮತ್ತು ಲಾಗ್‌ಗಳು ಕಾರಣಗಳ ನಿಜವಾದ ವಿತರಣೆ ದಾಖಲಿಸುತ್ತವೆ; ಹೀಗೆಯೇ ತುಂಬಾ ಬಾರಿ ಸ್ಥಗಿತವಾಗುವ verifier ಅಥವಾ ನಿಂತುಹೋಗುವ optimizer ಕಂಡುಹಿಡಿಯಬಹುದು."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Choosing and Operating the Pattern",
    "textKn": "ಮಾದರಿ ಆರಿಸುವುದು ಮತ್ತು ನಿರ್ವಹಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Self-Refine, CRITIC, evaluator-optimizer and guardrails",
    "headingKn": "Self-Refine, CRITIC, evaluator-optimizer ಮತ್ತು guardrails",
    "headers": [
     "Pattern",
     "Core idea",
     "Weakness"
    ],
    "rows": [
     [
      "Self-Refine",
      "Generate, feedback, refine",
      "Self-feedback can share the generator's mistake"
     ],
     [
      "CRITIC",
      "Tool-grounded verification, then refine",
      "Depends on a useful verifier; a pass covers only what was checked"
     ],
     [
      "Evaluator-optimizer",
      "Separate roles, structured feedback, a controller",
      "A weak evaluator still makes a weak loop"
     ],
     [
      "Output guardrail",
      "A final pass or trip at the boundary",
      "Checks only what was explicitly encoded"
     ]
    ]
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Stopping Rules and Adaptive Compute",
    "headingKn": "ನಿಲುಗಡೆ ನಿಯಮಗಳು ಮತ್ತು ಹೊಂದಿಕೊಳ್ಳುವ ಲೆಕ್ಕಾಚಾರ",
    "bodyEn": "Stop when a reliable verifier passes, or when feedback finds nothing for subjective work (weaker, because a critic can rubber-stamp, so some systems require a minimum number of iterations). Always keep a hard cap, and add stagnation and oscillation detection, a time or cost budget, and a hand-off to a human. Refine only while it pays: early rounds fix the big defects, later ones give diminishing returns at the same cost, so stop as soon as the required contracts pass. Gate expensive loops: take a cheap attempt, verify, and escalate only on failure.",
    "bodyKn": "ವಿಶ್ವಾಸಾರ್ಹ verifier ಪಾಸ್ ಆದಾಗ, ಅಥವಾ ವ್ಯಕ್ತಿನಿಷ್ಠ ಕೆಲಸಕ್ಕೆ feedback ಏನನ್ನೂ ಕಾಣದಿದ್ದಾಗ ನಿಲ್ಲಿಸಿ (ದುರ್ಬಲ, ಏಕೆಂದರೆ critic rubber-stamp ಮಾಡಬಹುದು, ಆದ್ದರಿಂದ ಕೆಲವು ವ್ಯವಸ್ಥೆಗಳು ಕನಿಷ್ಠ ಪುನರಾವರ್ತನೆ ಸಂಖ್ಯೆ ಬಯಸುತ್ತವೆ). ಯಾವಾಗಲೂ ಕಠಿಣ ಮಿತಿ ಇಡಿ, ಮತ್ತು ನಿಶ್ಚಲತೆ ಹಾಗೂ ಆಂದೋಲನ ಪತ್ತೆ, ಸಮಯ ಅಥವಾ ವೆಚ್ಚ budget, ಮತ್ತು ಮನುಷ್ಯರಿಗೆ ಹಸ್ತಾಂತರ ಸೇರಿಸಿ. ಲಾಭವಾಗುವವರೆಗೆ ಮಾತ್ರ ಪರಿಷ್ಕರಿಸಿ: ಆರಂಭಿಕ ಸುತ್ತುಗಳು ದೊಡ್ಡ ದೋಷ ಸರಿಪಡಿಸುತ್ತವೆ, ನಂತರದವು ಅದೇ ವೆಚ್ಚಕ್ಕೆ ಕುಗ್ಗುವ ಲಾಭ ನೀಡುತ್ತವೆ, ಆದ್ದರಿಂದ ಅಗತ್ಯ ಒಪ್ಪಂದಗಳು ಪಾಸ್ ಆದ ತಕ್ಷಣ ನಿಲ್ಲಿಸಿ. ದುಬಾರಿ loops ಗೆ ದ್ವಾರ ಇಡಿ: ಅಗ್ಗದ ಪ್ರಯತ್ನ, ಪರಿಶೀಲನೆ, ವೈಫಲ್ಯದಲ್ಲಿ ಮಾತ್ರ ಏರಿಕೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Guardrails: Narrow and Deterministic",
    "headingKn": "Guardrails: ಕಿರಿದಾದ ಮತ್ತು ನಿರ್ಧಾರಾತ್ಮಕ",
    "bodyEn": "A guardrail works best with a narrow contract: valid JSON, at most three bullets, a required field present, source that parses. Deterministic validators are cheap, reproducible and testable. A guardrail is not another agent solving the whole task. When it trips, the policy depends on risk and repairability: retry the optimizer while budget remains, reject, or escalate to a human with a state such as NEEDS_REVIEW. Defense in depth means different responsibilities, evidence and boundaries, not duplication.",
    "bodyKn": "ಕಿರಿದಾದ ಒಪ್ಪಂದದೊಂದಿಗೆ guardrail ಅತ್ಯುತ್ತಮ ಕೆಲಸ ಮಾಡುತ್ತದೆ: ಮಾನ್ಯ JSON, ಗರಿಷ್ಠ ಮೂರು bullets, ಅಗತ್ಯ ಕ್ಷೇತ್ರ ಇದೆ, parse ಆಗುವ ಮೂಲ. ನಿರ್ಧಾರಾತ್ಮಕ validators ಅಗ್ಗ, ಪುನರುತ್ಪಾದನೀಯ ಮತ್ತು ಪರೀಕ್ಷಿಸಬಹುದಾದವು. Guardrail ಇಡೀ ಕಾರ್ಯ ಪರಿಹರಿಸುವ ಇನ್ನೊಂದು agent ಅಲ್ಲ. ಅದು ಟ್ರಿಪ್ ಆದಾಗ ನೀತಿ ಅಪಾಯ ಮತ್ತು ದುರಸ್ತಿ ಸಾಧ್ಯತೆಯ ಮೇಲೆ ಅವಲಂಬಿತ: budget ಉಳಿದಿರುವಾಗ optimizer ಮರುಪ್ರಯತ್ನಿಸಿ, ತಿರಸ್ಕರಿಸಿ, ಅಥವಾ NEEDS_REVIEW ನಂತಹ ಸ್ಥಿತಿಯೊಂದಿಗೆ ಮನುಷ್ಯರಿಗೆ ಏರಿಸಿ. ಆಳದ ರಕ್ಷಣೆ ಎಂದರೆ ಬೇರೆ ಜವಾಬ್ದಾರಿಗಳು, ಸಾಕ್ಷ್ಯ ಮತ್ತು ಗಡಿಗಳು, ನಕಲು ಅಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "It puts a deterministic, inspectable shell around probabilistic generation: structured issues for the optimizer, stop reasons for operators, and a boundary check before output is released. Because the model is one component, failures can be localised to the generator, an evaluator, the optimizer or the controller instead of \"the model was wrong\".",
    "bodyKn": "ಇದು ಸಂಭಾವ್ಯತಾ ಉತ್ಪಾದನೆಯ ಸುತ್ತ ನಿರ್ಧಾರಾತ್ಮಕ, ಪರಿಶೀಲಿಸಬಹುದಾದ ಕವಚ ಇಡುತ್ತದೆ: optimizer ಗೆ ರಚನಾತ್ಮಕ ಸಮಸ್ಯೆಗಳು, ನಿರ್ವಾಹಕರಿಗೆ ನಿಲುಗಡೆ ಕಾರಣಗಳು, ಮತ್ತು ಔಟ್‌ಪುಟ್ ಬಿಡುಗಡೆಗೆ ಮೊದಲು ಗಡಿ ಪರಿಶೀಲನೆ. ಮಾದರಿ ಒಂದು ಘಟಕ ಮಾತ್ರ ಆದ್ದರಿಂದ ವೈಫಲ್ಯಗಳನ್ನು \"ಮಾದರಿ ತಪ್ಪಾಯಿತು\" ಬದಲು generator, ಒಂದು evaluator, optimizer ಅಥವಾ controller ಗೆ ಸ್ಥಳೀಕರಿಸಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Where This Appears in AI Systems",
    "headingKn": "AI ವ್ಯವಸ್ಥೆಗಳಲ್ಲಿ ಇದು ಎಲ್ಲಿ ಕಾಣುತ್ತದೆ",
    "bodyEn": "A coding agent loops: generate a patch, run the tests, read the stack trace, patch, rerun, with an iteration cap and a final check that the suite is green. A research agent drafts, extracts claims, retrieves evidence, revises and re-verifies citations. A structured-extraction agent validates against a schema and repairs. Operators track first-pass success rate, average refinements, verifier failure rate, stagnation rate and guardrail trips.",
    "bodyKn": "Coding agent loop ಮಾಡುತ್ತದೆ: patch ಉತ್ಪಾದಿಸಿ, tests ಚಲಾಯಿಸಿ, stack trace ಓದಿ, patch, ಮರುಚಲಾಯಿಸಿ, ಪುನರಾವರ್ತನೆ ಮಿತಿ ಮತ್ತು suite ಹಸಿರಾಗಿದೆ ಎಂಬ ಅಂತಿಮ ಪರಿಶೀಲನೆ ಜೊತೆ. Research agent ಕರಡು ಬರೆದು, ಹೇಳಿಕೆಗಳನ್ನು ಹೊರತೆಗೆದು, ಸಾಕ್ಷ್ಯ ಪಡೆದು, ಪರಿಷ್ಕರಿಸಿ, ಉಲ್ಲೇಖಗಳನ್ನು ಮರು-ಪರಿಶೀಲಿಸುತ್ತದೆ. ರಚನಾತ್ಮಕ-ಹೊರತೆಗೆಯುವ agent schema ವಿರುದ್ಧ ಮಾನ್ಯಗೊಳಿಸಿ ದುರಸ್ತಿ ಮಾಡುತ್ತದೆ. ನಿರ್ವಾಹಕರು ಮೊದಲ-ಪ್ರಯತ್ನ ಯಶಸ್ಸಿನ ದರ, ಸರಾಸರಿ ಪರಿಷ್ಕರಣೆಗಳು, verifier ವೈಫಲ್ಯ ದರ, ನಿಶ್ಚಲತೆ ದರ ಮತ್ತು guardrail ಟ್ರಿಪ್‌ಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತಾರೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the loop ended, so the task was accomplished.\" Four runs in section 7 all ended and one succeeded. Another: \"more iterations are always better.\" The churning optimizer used the whole budget and still returned the false claim. Success should come from verification evidence, not from the loop finishing or from the model saying it is fine.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"loop ಮುಗಿಯಿತು, ಹಾಗಾಗಿ ಕಾರ್ಯ ಸಾಧಿಸಲಾಯಿತು.\" ವಿಭಾಗ 7 ರ ನಾಲ್ಕು ಓಟಗಳೂ ಮುಗಿದವು ಮತ್ತು ಒಂದು ಯಶಸ್ವಿಯಾಯಿತು. ಇನ್ನೊಂದು: \"ಹೆಚ್ಚು ಪುನರಾವರ್ತನೆ ಯಾವಾಗಲೂ ಉತ್ತಮ.\" ತಿರುಗುವ optimizer ಇಡೀ budget ಬಳಸಿಯೂ ತಪ್ಪು ಹೇಳಿಕೆ ಹಿಂತಿರುಗಿಸಿತು. ಯಶಸ್ಸು ಪರಿಶೀಲನೆ ಸಾಕ್ಷ್ಯದಿಂದ ಬರಬೇಕು, loop ಮುಗಿದುದರಿಂದ ಅಥವಾ ಮಾದರಿ ಸರಿ ಎಂದು ಹೇಳಿದುದರಿಂದ ಅಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Evaluator-optimizer: an optimizer proposes, an evaluator diagnoses, a controller decides. Output guardrail: a final pass-or-trip check at the boundary. Severity: whether an issue blocks. Stagnation: a revision that repeats an earlier output. Oscillation: cycling between candidates. Stop reason: why a run ended, stored as data. Defense in depth: independent checks at different boundaries. Fail open, fail closed: what to do when a check cannot run.",
    "bodyKn": "Evaluator-optimizer: optimizer ಪ್ರಸ್ತಾಪಿಸುತ್ತದೆ, evaluator ರೋಗನಿರ್ಣಯ ಮಾಡುತ್ತದೆ, controller ನಿರ್ಧರಿಸುತ್ತದೆ. Output guardrail: ಗಡಿಯಲ್ಲಿ ಅಂತಿಮ ಪಾಸ್-ಅಥವಾ-ಟ್ರಿಪ್ ಪರಿಶೀಲನೆ. Severity: ಸಮಸ್ಯೆ ತಡೆಯುತ್ತದೆಯೇ. Stagnation: ಹಿಂದಿನ ಔಟ್‌ಪುಟ್ ಪುನರಾವರ್ತಿಸುವ ಪರಿಷ್ಕರಣೆ. Oscillation: ಅಭ್ಯರ್ಥಿಗಳ ನಡುವೆ ಚಕ್ರ. Stop reason: ಓಟ ಏಕೆ ಮುಗಿಯಿತು, ಡೇಟಾ ಆಗಿ ಸಂಗ್ರಹ. Defense in depth: ಬೇರೆ ಗಡಿಗಳಲ್ಲಿ ಸ್ವತಂತ್ರ ಪರಿಶೀಲನೆಗಳು. Fail open, fail closed: ಪರಿಶೀಲನೆ ಚಲಿಸಲಾಗದಾಗ ಏನು ಮಾಡಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Make generation, evaluation, verification, refinement and stopping explicit components. 2) Return stop_reason and success as data. 3) UNKNOWN is not PASS: the right output was still not verified. 4) Compare against all history to catch cycles. 5) A guardrail at the boundary caught what a misconfigured suite missed. 6) Name the real cause: our verifier outage was reported as stagnation. 7) Success needs verification evidence, not loop termination.",
    "bodyKn": "1) ಉತ್ಪಾದನೆ, ಮೌಲ್ಯಮಾಪನ, ಪರಿಶೀಲನೆ, ಪರಿಷ್ಕರಣೆ ಮತ್ತು ನಿಲುಗಡೆಯನ್ನು ಸ್ಪಷ್ಟ ಘಟಕಗಳಾಗಿಸಿ. 2) stop_reason ಮತ್ತು success ಅನ್ನು ಡೇಟಾ ಆಗಿ ಹಿಂತಿರುಗಿಸಿ. 3) UNKNOWN PASS ಅಲ್ಲ: ಸರಿಯಾದ ಔಟ್‌ಪುಟ್ ಕೂಡ ಪರಿಶೀಲಿತವಾಗಿರಲಿಲ್ಲ. 4) ಚಕ್ರ ಹಿಡಿಯಲು ಇಡೀ ಇತಿಹಾಸಕ್ಕೆ ಹೋಲಿಸಿ. 5) ತಪ್ಪಾಗಿ ಸಂರಚಿಸಿದ suite ತಪ್ಪಿಸಿದ್ದನ್ನು ಗಡಿಯ guardrail ಹಿಡಿಯಿತು. 6) ನಿಜವಾದ ಕಾರಣ ಹೆಸರಿಸಿ: ನಮ್ಮ verifier ವ್ಯತ್ಯಯ stagnation ಎಂದು ವರದಿಯಾಯಿತು. 7) ಯಶಸ್ಸಿಗೆ ಪರಿಶೀಲನೆ ಸಾಕ್ಷ್ಯ ಬೇಕು, loop ಮುಕ್ತಾಯ ಅಲ್ಲ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "In section 5 the fact verifier was unavailable. What was the run result?",
      "qKn": "ವಿಭಾಗ 5 ರಲ್ಲಿ fact verifier ಲಭ್ಯವಿರಲಿಲ್ಲ. ಓಟದ ಫಲಿತಾಂಶ ಏನು?",
      "opts": [
       "success=True, verified",
       "success=False, because UNKNOWN never counts as PASS",
       "A crash",
       "success=True, with a warning"
      ],
      "optsKn": [
       "success=True, verified",
       "success=False, ಏಕೆಂದರೆ UNKNOWN ಎಂದೂ PASS ಎಂದು ಎಣಿಸಲ್ಪಡುವುದಿಲ್ಲ",
       "Crash",
       "success=True, ಎಚ್ಚರಿಕೆ ಜೊತೆ"
      ],
      "correct": 1
     },
     {
      "q": "Why does detect_stagnation compare a revision with all earlier outputs?",
      "qKn": "detect_stagnation ಪರಿಷ್ಕರಣೆಯನ್ನು ಹಿಂದಿನ ಎಲ್ಲಾ ಔಟ್‌ಪುಟ್‌ಗಳಿಗೆ ಏಕೆ ಹೋಲಿಸುತ್ತದೆ?",
      "opts": [
       "To save memory",
       "To catch cycles such as A to B to A, not only A to A",
       "To count tokens",
       "Because Python requires it"
      ],
      "optsKn": [
       "ಮೆಮೊರಿ ಉಳಿಸಲು",
       "A ರಿಂದ A ಮಾತ್ರವಲ್ಲ, A ರಿಂದ B ರಿಂದ A ನಂತಹ ಚಕ್ರ ಹಿಡಿಯಲು",
       "tokens ಎಣಿಸಲು",
       "ಏಕೆಂದರೆ Python ಗೆ ಬೇಕು"
      ],
      "correct": 1
     },
     {
      "q": "In section 6 the suite had no fact verifier. What caught the false claim?",
      "qKn": "ವಿಭಾಗ 6 ರಲ್ಲಿ suite ಗೆ fact verifier ಇರಲಿಲ್ಲ. ತಪ್ಪು ಹೇಳಿಕೆಯನ್ನು ಯಾವುದು ಹಿಡಿಯಿತು?",
      "opts": [
       "The structure checker",
       "The final output guardrail",
       "Nothing caught it",
       "The quality evaluator"
      ],
      "optsKn": [
       "Structure checker",
       "ಅಂತಿಮ ಔಟ್‌ಪುಟ್ guardrail",
       "ಯಾವುದೂ ಹಿಡಿಯಲಿಲ್ಲ",
       "Quality evaluator"
      ],
      "correct": 1
     },
     {
      "q": "The accepted default output had a WARNING. Did it block acceptance?",
      "qKn": "ಒಪ್ಪಿದ ಡೀಫಾಲ್ಟ್ ಔಟ್‌ಪುಟ್‌ಗೆ WARNING ಇತ್ತು. ಅದು ಸ್ವೀಕಾರ ತಡೆಯಿತೇ?",
      "opts": [
       "Yes, warnings always block",
       "No, only ERROR severity blocks; warnings are recorded",
       "Only on the first iteration",
       "Yes, because quality failed"
      ],
      "optsKn": [
       "ಹೌದು, ಎಚ್ಚರಿಕೆಗಳು ಯಾವಾಗಲೂ ತಡೆಯುತ್ತವೆ",
       "ಇಲ್ಲ, ERROR ತೀವ್ರತೆ ಮಾತ್ರ ತಡೆಯುತ್ತದೆ; ಎಚ್ಚರಿಕೆಗಳು ದಾಖಲಾಗುತ್ತವೆ",
       "ಮೊದಲ ಪುನರಾವರ್ತನೆಯಲ್ಲಿ ಮಾತ್ರ",
       "ಹೌದು, ಏಕೆಂದರೆ quality ವಿಫಲವಾಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What does a run ending with stop_reason max_iterations tell you?",
      "qKn": "stop_reason max_iterations ಜೊತೆ ಮುಗಿದ ಓಟ ಏನು ಹೇಳುತ್ತದೆ?",
      "opts": [
       "The task succeeded",
       "The budget ran out; it says nothing good about the output",
       "The verifier passed",
       "The guardrail passed"
      ],
      "optsKn": [
       "ಕಾರ್ಯ ಯಶಸ್ವಿಯಾಯಿತು",
       "Budget ಮುಗಿಯಿತು; ಔಟ್‌ಪುಟ್ ಬಗ್ಗೆ ಒಳ್ಳೆಯದೇನನ್ನೂ ಹೇಳುವುದಿಲ್ಲ",
       "Verifier ಪಾಸ್ ಆಯಿತು",
       "Guardrail ಪಾಸ್ ಆಯಿತು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
