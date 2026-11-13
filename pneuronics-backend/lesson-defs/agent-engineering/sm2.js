module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af75af573f2ce9842419441",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Design Success Metrics Before the Result Exists (Part 2 of 3) — Evaluation and Guardrails",
 "titleKn": "ಫಲಿತಾಂಶ ಬರುವ ಮುನ್ನ ಯಶಸ್ಸಿನ ಮಾಪನ ವಿನ್ಯಾಸಗೊಳಿಸಿ (ಭಾಗ 2 / 3) — ಮೌಲ್ಯಮಾಪನ ಮತ್ತು Guardrails",
 "desc": "Evaluate candidates against a fixed plan, see what a guardrail prevents and handle missing measurements.",
 "descKn": "ನಿಗದಿತ ಯೋಜನೆಯ ವಿರುದ್ಧ ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ, guardrail ಏನನ್ನು ತಡೆಯುತ್ತದೆ ನೋಡಿ ಮತ್ತು ಕಾಣೆಯಾದ ಅಳತೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ.",
 "objectives": [
  "Evaluate against a fixed plan.",
  "Apply a guardrail.",
  "Handle missing metrics.",
  "Test boundaries.",
  "Write a report with the plan."
 ],
 "objectivesKn": [
  "ನಿಗದಿತ ಯೋಜನೆಯ ವಿರುದ್ಧ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ.",
  "guardrail ಅನ್ವಯಿಸಿ.",
  "ಕಾಣೆಯಾದ ಮಾಪನ ನಿರ್ವಹಿಸಿ.",
  "ಗಡಿ ಪರೀಕ್ಷಿಸಿ.",
  "ಯೋಜನೆಯೊಂದಿಗೆ ವರದಿ ಬರೆಯಿರಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Design Success Metrics Before the Result Exists (Part 2 of 3)",
    "textKn": "ಫಲಿತಾಂಶ ಬರುವ ಮುನ್ನ ಯಶಸ್ಸಿನ ಮಾಪನ ವಿನ್ಯಾಸಗೊಳಿಸಿ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: evaluating observations against a fixed plan, the guardrail-removal experiment on three candidates, a pass / fail / collect-more policy and a JSON report carrying the plan. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind designing success metrics before the result exists (Goal-Question-Metric plans, guardrails, thresholds, uncertainty and decision policies), not the real software, and the candidates, records and numbers are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original main.py was not supplied, and the lesson text names only its output artifact, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ನಿಗದಿತ ಯೋಜನೆಯ ವಿರುದ್ಧ ವೀಕ್ಷಣೆಗಳ ಮೌಲ್ಯಮಾಪನ, ಮೂರು ಅಭ್ಯರ್ಥಿಗಳ ಮೇಲೆ guardrail-ತೆಗೆದುಹಾಕುವ ಪ್ರಯೋಗ, pass / fail / collect-more ನೀತಿ ಮತ್ತು ಯೋಜನೆ ಹೊತ್ತ JSON ವರದಿ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಫಲಿತಾಂಶ ಬರುವ ಮುನ್ನ ಯಶಸ್ಸಿನ ಮಾಪನ ವಿನ್ಯಾಸ (Goal-Question-Metric ಯೋಜನೆಗಳು, guardrails, ಮಿತಿಗಳು, ಅನಿಶ್ಚಿತತೆ ಮತ್ತು ನಿರ್ಧಾರ ನೀತಿಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಅಭ್ಯರ್ಥಿಗಳು, ದಾಖಲೆಗಳು ಮತ್ತು ಸಂಖ್ಯೆಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ಪಠ್ಯ ಅದರ ಔಟ್‌ಪುಟ್ ಕಲಾಕೃತಿಯನ್ನು ಮಾತ್ರ ಹೆಸರಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Fastest Candidate May Be the Unsafe One",
    "textKn": "ಅತಿ ವೇಗದ ಅಭ್ಯರ್ಥಿ ಅಸುರಕ್ಷಿತವಾಗಿರಬಹುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Evaluate Against the Plan, Not Against Taste",
    "headingKn": "ರುಚಿಯ ವಿರುದ್ಧ ಅಲ್ಲ, ಯೋಜನೆಯ ವಿರುದ್ಧ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ",
    "bodyEn": "This part runs three invented candidates against a fixed plan of two outcome metrics and one guardrail. The careful assistant passes, the fast one fails the guardrail and the slow one misses the time target. Removing the guardrail lets the unsafe candidate through, a missing metric turns the decision into collect more evidence and a JSON report stores the plan with the results.",
    "bodyKn": "ಈ ಭಾಗ ಮೂರು ಕಲ್ಪಿತ ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಎರಡು outcome ಮಾಪನ ಮತ್ತು ಒಂದು guardrail ಇರುವ ನಿಗದಿತ ಯೋಜನೆಯ ವಿರುದ್ಧ ಓಡಿಸುತ್ತದೆ. ಜಾಗರೂಕ assistant ಪಾಸ್ ಆಗುತ್ತದೆ, ವೇಗದ್ದು guardrail ವಿಫಲ ಮತ್ತು ನಿಧಾನವಾದದ್ದು ಸಮಯ ಗುರಿ ತಪ್ಪಿಸುತ್ತದೆ. guardrail ತೆಗೆದರೆ ಅಸುರಕ್ಷಿತ ಅಭ್ಯರ್ಥಿ ದಾಟುತ್ತದೆ, ಕಾಣೆಯಾದ ಮಾಪನ ನಿರ್ಧಾರವನ್ನು ಹೆಚ್ಚು ಸಾಕ್ಷ್ಯ ಸಂಗ್ರಹಿಸಿ ಎಂದು ಮಾಡುತ್ತದೆ ಮತ್ತು JSON ವರದಿ ಯೋಜನೆಯನ್ನು ಫಲಿತಾಂಶಗಳೊಂದಿಗೆ ಸಂಗ್ರಹಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Evaluate and Decide",
    "headingKn": "ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ನಿರ್ಧಾರ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">the guardrail stops a speed target rewarding risk</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">observe</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">against the plan</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">guardrail</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">blocks unsafe wins</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">missing</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">collect more</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">report</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">plan + results</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the guardrail stops a speed target rewarding risk</text></svg>",
    "captionEn": "Outcomes pass, a guardrail can still fail the candidate and gaps ask for more evidence.",
    "captionKn": "ಫಲಿತಾಂಶಗಳು ಪಾಸ್, guardrail ಇನ್ನೂ ಅಭ್ಯರ್ಥಿಯನ್ನು ವಿಫಲಗೊಳಿಸಬಹುದು ಮತ್ತು ಅಂತರ ಹೆಚ್ಚು ಸಾಕ್ಷ್ಯ ಕೇಳುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Invented candidates",
    "headingKn": "ಕಲ್ಪಿತ ಅಭ್ಯರ್ಥಿಗಳು",
    "headers": [
     "Candidate",
     "Minutes, accuracy, unsafe rate",
     "Decision"
    ],
    "rows": [
     [
      "A careful assistant",
      "1.8, 0.93, 0.0",
      "pass"
     ],
     [
      "B fast but unsafe",
      "0.6, 0.95, 0.04",
      "fail (guardrail)"
     ],
     [
      "C slow and accurate",
      "3.5, 0.97, 0.0",
      "fail (outcome)"
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
    "filename": "sm_2.py",
    "headingEn": "Evaluation and the decision policy",
    "headingKn": "ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ನಿರ್ಧಾರ ನೀತಿ",
    "descEn": "ok applies direction and an inclusive threshold, evaluate labels each metric pass, fail or missing, and decide returns collect more evidence for any gap, fail for a guardrail failure, pass when everything passes and fail (outcome) otherwise.",
    "descKn": "ok ದಿಕ್ಕು ಮತ್ತು ಒಳಗೊಳ್ಳುವ ಮಿತಿ ಅನ್ವಯಿಸುತ್ತದೆ, evaluate ಪ್ರತಿ ಮಾಪನವನ್ನು pass, fail ಅಥವಾ missing ಎಂದು ಲೇಬಲ್ ಮಾಡುತ್ತದೆ, ಮತ್ತು decide ಯಾವುದೇ ಅಂತರಕ್ಕೆ collect more evidence, guardrail ವೈಫಲ್ಯಕ್ಕೆ fail, ಎಲ್ಲವೂ ಪಾಸ್ ಆದಾಗ pass ಮತ್ತು ಇಲ್ಲದಿದ್ದರೆ fail (outcome) ಮರಳಿಸುತ್ತದೆ.",
    "code": "def ok(rule, value):\n    kind, direction, thr = rule\n    if value is None:\n        return False\n    return value >= thr if direction == \"higher\" else value <= thr\n\n\ndef evaluate(obs, plan=PLAN):\n    res = {n: (\"missing\" if obs.get(n) is None else (\"pass\" if ok(r, obs.get(n)) else \"fail\")) for n, r in plan.items()}\n    return res\n\n\ndef decide(res, plan=PLAN):\n    if any(v == \"missing\" for v in res.values()):\n        return \"collect more evidence\"\n    if any(v == \"fail\" for n, v in res.items() if plan[n][0] == \"guardrail\"):\n        return \"fail (guardrail)\"\n    if all(v == \"pass\" for v in res.values()):\n        return \"pass\"\n    return \"fail (outcome)\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "sm_2.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() evaluates three candidates, repeats the evaluation without the guardrail, handles a partial observation, tests boundary values and builds a report in memory.",
    "descKn": "main() ಮೂರು ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ, guardrail ಇಲ್ಲದೆ ಪುನರಾವರ್ತಿಸಿ, ಭಾಗಶಃ ವೀಕ್ಷಣೆ ನಿರ್ವಹಿಸಿ, ಅಂಚಿನ ಮೌಲ್ಯ ಪರೀಕ್ಷಿಸಿ ಮತ್ತು ಮೆಮೊರಿಯಲ್ಲಿ ವರದಿ ನಿರ್ಮಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: three invented candidates against the fixed plan\")\n    for name, obs in CANDIDATES.items():\n        r = evaluate(obs)\n        print(f\"{name:24} {r} -> {decide(r)}\")\n    print(\"A passed all three metrics, B passed both outcome metrics and failed the guardrail, and C passed accuracy and the guardrail and missed on time; only A is a pass overall, and the numbers are invented\")\n\n    section(\"2. Genuinely running: remove the guardrail and the unsafe candidate wins\")\n    no_guard = {k: v for k, v in PLAN.items() if v[0] != \"guardrail\"}\n    for name, obs in CANDIDATES.items():\n        r = evaluate(obs, no_guard)\n        print(f\"{name:24} {decide(r, no_guard)}\")\n    ranking = sorted(CANDIDATES, key=lambda n: CANDIDATES[n][\"median_minutes_to_identify\"])\n    print(\"fastest first:\", ranking)\n    print(\"without the guardrail the plan accepts both A and B, and a team that ranks by speed would pick B, the candidate with a 4 percent unsafe-action rate; the guardrail is what keeps a speed target from rewarding risk\")\n\n    section(\"3. Genuinely running: missing values\")\n    partial = {\"median_minutes_to_identify\": 1.5, \"service_accuracy\": None}\n    r = evaluate(partial)\n    print(r, \"->\", decide(r))\n    print(\"a metric that was not measured appears as missing and the decision is to collect more evidence, instead of treating the gap as a pass or silently dropping it from the plan\")\n\n    section(\"4. Genuinely running: boundary values\")\n    for v in (0.90, 0.8999, 2.0, 2.0001):\n        for n, rule in PLAN.items():\n            if (n == \"service_accuracy\" and v < 1) or (n == \"median_minutes_to_identify\" and v >= 1):\n                print(f\"{n:28} {v:<7} -> {'pass' if ok(rule, v) else 'fail'}\")\n    print(\"a value exactly on the threshold passes and a value just beside it fails, which is the behaviour the plan promised; floats near a threshold can still surprise, and the lab does not round\")\n\n    section(\"5. Genuinely running: a JSON report that carries the plan\")\n    best = \"A: careful assistant\"\n    report = {\"plan\": {n: list(r) for n, r in PLAN.items()}, \"candidate\": best, \"observed\": CANDIDATES[best], \"results\": evaluate(CANDIDATES[best]), \"decision\": decide(evaluate(CANDIDATES[best]))}\n    text = json.dumps(report, sort_keys=True)\n    back = json.loads(text)\n    print(\"report keys:\", sorted(back), \"| decision:\", back[\"decision\"], \"| round trip equal:\", back == report)\n    print(\"the report stores the plan next to the observations, so a reader can see which thresholds the decision used; it is built in memory and the lab does not write outputs/measurement-report.json\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: three invented candidates against the fixed plan ---\nA: careful assistant     {'median_minutes_to_identify': 'pass', 'service_accuracy': 'pass', 'unsafe_action_rate': 'pass'} -> pass\nB: fast but unsafe       {'median_minutes_to_identify': 'pass', 'service_accuracy': 'pass', 'unsafe_action_rate': 'fail'} -> fail (guardrail)\nC: slow and accurate     {'median_minutes_to_identify': 'fail', 'service_accuracy': 'pass', 'unsafe_action_rate': 'pass'} -> fail (outcome)\nA passed all three metrics, B passed both outcome metrics and failed the guardrail, and C passed accuracy and the guardrail and missed on time; only A is a pass overall, and the numbers are invented\n\n--- 2. Genuinely running: remove the guardrail and the unsafe candidate wins ---\nA: careful assistant     pass\nB: fast but unsafe       pass\nC: slow and accurate     fail (outcome)\nfastest first: ['B: fast but unsafe', 'A: careful assistant', 'C: slow and accurate']\nwithout the guardrail the plan accepts both A and B, and a team that ranks by speed would pick B, the candidate with a 4 percent unsafe-action rate; the guardrail is what keeps a speed target from rewarding risk\n\n--- 3. Genuinely running: missing values ---\n{'median_minutes_to_identify': 'pass', 'service_accuracy': 'missing', 'unsafe_action_rate': 'missing'} -> collect more evidence\na metric that was not measured appears as missing and the decision is to collect more evidence, instead of treating the gap as a pass or silently dropping it from the plan\n\n--- 4. Genuinely running: boundary values ---\nservice_accuracy             0.9     -> pass\nservice_accuracy             0.8999  -> fail\nmedian_minutes_to_identify   2.0     -> pass\nmedian_minutes_to_identify   2.0001  -> fail\na value exactly on the threshold passes and a value just beside it fails, which is the behaviour the plan promised; floats near a threshold can still surprise, and the lab does not round\n\n--- 5. Genuinely running: a JSON report that carries the plan ---\nreport keys: ['candidate', 'decision', 'observed', 'plan', 'results'] | decision: pass | round trip equal: True\nthe report stores the plan next to the observations, so a reader can see which thresholds the decision used; it is built in memory and the lab does not write outputs/measurement-report.json"
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
    "headingEn": "Genuinely Found: Only the Careful Candidate Passed",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಜಾಗರೂಕ ಅಭ್ಯರ್ಥಿ ಮಾತ್ರ ಪಾಸ್ ಆಯಿತು",
    "bodyEn": "Section 1: A passed all three metrics, B passed both outcome metrics and failed the guardrail with a 0.04 unsafe rate, and C passed accuracy and the guardrail and missed on time at 3.5 minutes. Section 2: without the guardrail both A and B passed, and ranking by speed put B first.",
    "bodyKn": "ವಿಭಾಗ 1: A ಮೂರೂ ಮಾಪನ ಪಾಸ್ ಮಾಡಿತು, B ಎರಡೂ outcome ಮಾಪನ ಪಾಸ್ ಮಾಡಿ 0.04 ಅಸುರಕ್ಷಿತ ದರದೊಂದಿಗೆ guardrail ವಿಫಲವಾಯಿತು, ಮತ್ತು C ನಿಖರತೆ ಮತ್ತು guardrail ಪಾಸ್ ಮಾಡಿ 3.5 ನಿಮಿಷದಲ್ಲಿ ಸಮಯ ತಪ್ಪಿಸಿತು. ವಿಭಾಗ 2: guardrail ಇಲ್ಲದೆ A ಮತ್ತು B ಎರಡೂ ಪಾಸ್ ಆದವು, ಮತ್ತು ವೇಗದ ಶ್ರೇಣಿ B ಅನ್ನು ಮೊದಲಿಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Gaps, Boundaries and the Report",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅಂತರಗಳು, ಗಡಿಗಳು ಮತ್ತು ವರದಿ",
    "bodyEn": "Section 3: a partial observation gave two missing metrics and the decision \"collect more evidence\". Section 4: 0.90 and 2.0 passed and 0.8999 and 2.0001 failed. Section 5: the report carried the plan, the observed values, the per-metric results and the decision pass, and round-tripped equal in memory without writing outputs/measurement-report.json.",
    "bodyKn": "ವಿಭಾಗ 3: ಭಾಗಶಃ ವೀಕ್ಷಣೆ ಎರಡು ಕಾಣೆಯಾದ ಮಾಪನ ಮತ್ತು \"collect more evidence\" ನಿರ್ಧಾರ ನೀಡಿತು. ವಿಭಾಗ 4: 0.90 ಮತ್ತು 2.0 ಪಾಸ್ ಆದವು ಮತ್ತು 0.8999 ಮತ್ತು 2.0001 ವಿಫಲವಾದವು. ವಿಭಾಗ 5: ವರದಿ ಯೋಜನೆ, ವೀಕ್ಷಿತ ಮೌಲ್ಯಗಳು, ಪ್ರತಿ-ಮಾಪನ ಫಲಿತಾಂಶಗಳು ಮತ್ತು pass ನಿರ್ಧಾರ ಹೊತ್ತಿತ್ತು, ಮತ್ತು outputs/measurement-report.json ಬರೆಯದೆ ಮೆಮೊರಿಯಲ್ಲಿ ಸಮಾನವಾಗಿ round-trip ಆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A target on outcomes alone rewards whatever reaches it fastest, so the guardrail is the metric that protects the thing the plan was never meant to trade away.",
    "bodyKn": "ಕೇವಲ ಫಲಿತಾಂಶಗಳ ಮೇಲಿನ ಗುರಿ ಅದನ್ನು ಅತಿ ವೇಗವಾಗಿ ತಲುಪುವುದನ್ನು ಬಹುಮಾನಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಯೋಜನೆ ವ್ಯಾಪಾರ ಮಾಡಬಾರದ ವಿಷಯವನ್ನು guardrail ರಕ್ಷಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the fastest candidate wins.\" B was fastest and had a 4 percent unsafe-action rate.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಅತಿ ವೇಗದ ಅಭ್ಯರ್ಥಿ ಗೆಲ್ಲುತ್ತದೆ.\" B ಅತಿ ವೇಗವಾಗಿದ್ದು 4 ಶೇಕಡಾ ಅಸುರಕ್ಷಿತ-ಕ್ರಿಯೆ ದರ ಹೊಂದಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Decision policy: the rule that maps results to pass, fail or collect more. Missing: a metric with no observation. Guardrail failure: a pass on outcomes that still fails the candidate.",
    "bodyKn": "Decision policy: ಫಲಿತಾಂಶಗಳನ್ನು pass, fail ಅಥವಾ collect more ಗೆ ಮ್ಯಾಪ್ ಮಾಡುವ ನಿಯಮ. Missing: ವೀಕ್ಷಣೆ ಇಲ್ಲದ ಮಾಪನ. Guardrail failure: outcome ಗಳಲ್ಲಿ ಪಾಸ್ ಆಗಿಯೂ ಅಭ್ಯರ್ಥಿಯನ್ನು ವಿಫಲಗೊಳಿಸುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Only A passed. 2) Removing the guardrail let B through. 3) A gap meant collect more evidence. 4) Boundaries were exact. 5) The report carried the plan.",
    "bodyKn": "1) A ಮಾತ್ರ ಪಾಸ್ ಆಯಿತು. 2) guardrail ತೆಗೆದದ್ದು B ಅನ್ನು ದಾಟಲು ಬಿಟ್ಟಿತು. 3) ಅಂತರ ಎಂದರೆ ಹೆಚ್ಚು ಸಾಕ್ಷ್ಯ ಸಂಗ್ರಹಿಸಿ. 4) ಗಡಿಗಳು ನಿಖರ. 5) ವರದಿ ಯೋಜನೆ ಹೊತ್ತಿತ್ತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which candidate failed on the guardrail?",
      "qKn": "ಯಾವ ಅಭ್ಯರ್ಥಿ guardrail ನಲ್ಲಿ ವಿಫಲವಾಯಿತು?",
      "opts": [
       "B",
       "A",
       "C",
       "None"
      ],
      "optsKn": [
       "B",
       "A",
       "C",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Which candidate missed on time?",
      "qKn": "ಯಾವ ಅಭ್ಯರ್ಥಿ ಸಮಯ ತಪ್ಪಿಸಿತು?",
      "opts": [
       "C",
       "A",
       "B",
       "All"
      ],
      "optsKn": [
       "C",
       "A",
       "B",
       "ಎಲ್ಲವೂ"
      ],
      "correct": 0
     },
     {
      "q": "What happened when the guardrail was removed?",
      "qKn": "guardrail ತೆಗೆದಾಗ ಏನಾಯಿತು?",
      "opts": [
       "A and B both passed",
       "Only A passed",
       "Nobody passed",
       "C passed"
      ],
      "optsKn": [
       "A ಮತ್ತು B ಎರಡೂ ಪಾಸ್ ಆದವು",
       "A ಮಾತ್ರ ಪಾಸ್ ಆಯಿತು",
       "ಯಾರೂ ಪಾಸ್ ಆಗಲಿಲ್ಲ",
       "C ಪಾಸ್ ಆಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What decision followed missing metrics?",
      "qKn": "ಕಾಣೆಯಾದ ಮಾಪನಗಳ ನಂತರ ಯಾವ ನಿರ್ಧಾರ?",
      "opts": [
       "collect more evidence",
       "pass",
       "fail (guardrail)",
       "fail (outcome)"
      ],
      "optsKn": [
       "collect more evidence",
       "pass",
       "fail (guardrail)",
       "fail (outcome)"
      ],
      "correct": 0
     },
     {
      "q": "Was outputs/measurement-report.json written?",
      "qKn": "outputs/measurement-report.json ಬರೆಯಲಾಯಿತೇ?",
      "opts": [
       "No, it stayed in memory",
       "Yes",
       "Only for A",
       "Only on failure"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಮೆಮೊರಿಯಲ್ಲಿ ಉಳಿಯಿತು",
       "ಹೌದು",
       "A ಗೆ ಮಾತ್ರ",
       "ವೈಫಲ್ಯದಲ್ಲಿ ಮಾತ್ರ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
