module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af75af573f2ce9842419441",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Design Success Metrics Before the Result Exists (Part 1 of 3) — Metric Plans and Thresholds",
 "titleKn": "ಫಲಿತಾಂಶ ಬರುವ ಮುನ್ನ ಯಶಸ್ಸಿನ ಮಾಪನ ವಿನ್ಯಾಸಗೊಳಿಸಿ (ಭಾಗ 1 / 3) — ಮಾಪನ ಯೋಜನೆಗಳು ಮತ್ತು ಮಿತಿಗಳು",
 "desc": "Write a Goal-Question-Metric plan with guardrails, validate it and see how a threshold edited after the result is exposed.",
 "descKn": "Goal-Question-Metric ಯೋಜನೆಯನ್ನು guardrails ಜೊತೆ ಬರೆದು, ಮಾನ್ಯಗೊಳಿಸಿ ಮತ್ತು ಫಲಿತಾಂಶದ ನಂತರ ಸಂಪಾದಿಸಿದ ಮಿತಿ ಹೇಗೆ ಬಹಿರಂಗವಾಗುತ್ತದೆ ನೋಡಿ.",
 "objectives": [
  "Write a GQM plan.",
  "Add guardrails and counter-metrics.",
  "Use inclusive thresholds.",
  "Validate the plan.",
  "Lock the plan before the result."
 ],
 "objectivesKn": [
  "GQM ಯೋಜನೆ ಬರೆಯಿರಿ.",
  "guardrails ಮತ್ತು counter-metrics ಸೇರಿಸಿ.",
  "ಒಳಗೊಳ್ಳುವ ಮಿತಿಗಳನ್ನು ಬಳಸಿ.",
  "ಯೋಜನೆ ಮಾನ್ಯಗೊಳಿಸಿ.",
  "ಫಲಿತಾಂಶಕ್ಕೆ ಮುನ್ನ ಯೋಜನೆ ಲಾಕ್ ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Design Success Metrics Before the Result Exists (Part 1 of 3)",
    "textKn": "ಫಲಿತಾಂಶ ಬರುವ ಮುನ್ನ ಯಶಸ್ಸಿನ ಮಾಪನ ವಿನ್ಯಾಸಗೊಳಿಸಿ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a Goal-Question-Metric plan, outcome metrics, guardrails and counter-metrics, direction and inclusive thresholds, plan validation and a threshold edited after the result. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind designing success metrics before the result exists (Goal-Question-Metric plans, guardrails, thresholds, uncertainty and decision policies), not the real software, and the candidates, records and numbers are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original main.py was not supplied, and the lesson text names only its output artifact, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: Goal-Question-Metric ಯೋಜನೆ, ಫಲಿತಾಂಶ ಮಾಪನಗಳು, guardrails ಮತ್ತು counter-metrics, ದಿಕ್ಕು ಮತ್ತು ಒಳಗೊಳ್ಳುವ ಮಿತಿಗಳು, ಯೋಜನೆ ಮಾನ್ಯೀಕರಣ ಮತ್ತು ಫಲಿತಾಂಶದ ನಂತರ ಸಂಪಾದಿಸಿದ ಮಿತಿ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಫಲಿತಾಂಶ ಬರುವ ಮುನ್ನ ಯಶಸ್ಸಿನ ಮಾಪನ ವಿನ್ಯಾಸ (Goal-Question-Metric ಯೋಜನೆಗಳು, guardrails, ಮಿತಿಗಳು, ಅನಿಶ್ಚಿತತೆ ಮತ್ತು ನಿರ್ಧಾರ ನೀತಿಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಅಭ್ಯರ್ಥಿಗಳು, ದಾಖಲೆಗಳು ಮತ್ತು ಸಂಖ್ಯೆಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ಪಠ್ಯ ಅದರ ಔಟ್‌ಪುಟ್ ಕಲಾಕೃತಿಯನ್ನು ಮಾತ್ರ ಹೆಸರಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Number Is Not Evidence Until It Answers a Question",
    "textKn": "ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸುವವರೆಗೆ ಸಂಖ್ಯೆ ಸಾಕ್ಷ್ಯವಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Plan the Measurement First",
    "headingKn": "ಮೊದಲು ಮಾಪನ ಯೋಜಿಸಿ",
    "bodyEn": "A team can build a working assistant and then discover it has nothing to measure it against. This part writes the measurement plan first as Goal, Question and Metric, with each metric typed as an outcome, a guardrail or a counter-metric and given a direction, an inclusive threshold and a window. It validates the plan, shows how a threshold edited after a 0.82 result turns a fail into a pass and how the lock exposes that. All numbers are invented.",
    "bodyKn": "ತಂಡ ಕೆಲಸ ಮಾಡುವ assistant ನಿರ್ಮಿಸಿ ನಂತರ ಅದನ್ನು ಅಳೆಯಲು ಏನೂ ಇಲ್ಲ ಎಂದು ಕಂಡುಕೊಳ್ಳಬಹುದು. ಈ ಭಾಗ ಮೊದಲು ಮಾಪನ ಯೋಜನೆಯನ್ನು Goal, Question ಮತ್ತು Metric ಆಗಿ ಬರೆಯುತ್ತದೆ, ಪ್ರತಿ ಮಾಪನ outcome, guardrail ಅಥವಾ counter-metric ಎಂದು ವಿಧ ಮಾಡಿ ದಿಕ್ಕು, ಒಳಗೊಳ್ಳುವ ಮಿತಿ ಮತ್ತು ಕಿಟಕಿ ನೀಡಲಾಗುತ್ತದೆ. ಅದು ಯೋಜನೆ ಮಾನ್ಯಗೊಳಿಸಿ, 0.82 ಫಲಿತಾಂಶದ ನಂತರ ಸಂಪಾದಿಸಿದ ಮಿತಿ ವೈಫಲ್ಯವನ್ನು ಪಾಸ್ ಮಾಡುವುದನ್ನು ಮತ್ತು lock ಅದನ್ನು ಹೇಗೆ ಬಹಿರಂಗಪಡಿಸುತ್ತದೆ ತೋರಿಸುತ್ತದೆ. ಎಲ್ಲಾ ಸಂಖ್ಯೆಗಳು ಕಲ್ಪಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Goal, Question, Metric",
    "headingKn": "ಗುರಿ, ಪ್ರಶ್ನೆ, ಮಾಪನ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">every metric answers a question</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">goal</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">what changes</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">questions</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">what to learn</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">metrics</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">answer them</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">decision</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">pass / fail</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">every metric answers a question</text></svg>",
    "captionEn": "Every metric is tied to a question and every question to a goal.",
    "captionKn": "ಪ್ರತಿ ಮಾಪನ ಪ್ರಶ್ನೆಗೆ ಮತ್ತು ಪ್ರತಿ ಪ್ರಶ್ನೆ ಗುರಿಗೆ ಜೋಡಿತ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The lab plan (numbers invented)",
    "headingKn": "ಲ್ಯಾಬ್ ಯೋಜನೆ (ಸಂಖ್ಯೆಗಳು ಕಲ್ಪಿತ)",
    "headers": [
     "Metric",
     "Kind",
     "Rule"
    ],
    "rows": [
     [
      "median_minutes_to_identify",
      "outcome",
      "at most 2.0"
     ],
     [
      "service_accuracy",
      "outcome",
      "at least 0.90"
     ],
     [
      "unsafe_action_rate",
      "guardrail",
      "at most 0.0"
     ],
     [
      "human_review_minutes",
      "counter",
      "at most 3.0"
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
    "filename": "sm_1.py",
    "headingEn": "Metric, plan, validation, threshold test and lock",
    "headingKn": "ಮಾಪನ, ಯೋಜನೆ, ಮಾನ್ಯೀಕರಣ, ಮಿತಿ ಪರೀಕ್ಷೆ ಮತ್ತು lock",
    "descEn": "Metric and Plan are the data model, validate reports every plan problem at once, passes applies an inclusive threshold in the metric's direction and fails a missing value, and lock hashes the goal and metric definitions.",
    "descKn": "Metric ಮತ್ತು Plan ದತ್ತಾಂಶ ಮಾದರಿ, validate ಪ್ರತಿ ಯೋಜನೆ ಸಮಸ್ಯೆಯನ್ನೂ ಒಮ್ಮೆಲೇ ವರದಿ ಮಾಡುತ್ತದೆ, passes ಮಾಪನದ ದಿಕ್ಕಿನಲ್ಲಿ ಒಳಗೊಳ್ಳುವ ಮಿತಿ ಅನ್ವಯಿಸಿ ಕಾಣೆಯಾದ ಮೌಲ್ಯ ವಿಫಲಗೊಳಿಸುತ್ತದೆ, ಮತ್ತು lock ಗುರಿ ಮತ್ತು ಮಾಪನ ವ್ಯಾಖ್ಯೆಗಳನ್ನು hash ಮಾಡುತ್ತದೆ.",
    "code": "@dataclass(frozen=True)\nclass Metric:\n    name: str\n    kind: str\n    direction: str\n    threshold: float\n    question: str\n    window: str = \"\"\n\n\n@dataclass\nclass Plan:\n    goal: str\n    questions: list = field(default_factory=list)\n    metrics: list = field(default_factory=list)\n\n\ndef validate(plan):\n    errors = []\n    if not plan.goal.strip():\n        errors.append(\"goal is required\")\n    qs = set(plan.questions)\n    for m in plan.metrics:\n        if m.kind not in (\"outcome\", \"guardrail\", \"counter\"):\n            errors.append(f\"{m.name}: unknown kind {m.kind}\")\n        if m.direction not in (\"higher\", \"lower\"):\n            errors.append(f\"{m.name}: direction must be higher or lower\")\n        if m.question not in qs:\n            errors.append(f\"{m.name}: question is not part of the plan\")\n        if not m.window:\n            errors.append(f\"{m.name}: no measurement window\")\n    used = {m.question for m in plan.metrics}\n    for q in plan.questions:\n        if q not in used:\n            errors.append(f\"question without a metric: {q}\")\n    if not any(m.kind == \"outcome\" for m in plan.metrics):\n        errors.append(\"no outcome metric\")\n    if not any(m.kind == \"guardrail\" for m in plan.metrics):\n        errors.append(\"no guardrail metric\")\n    return errors\n\n\ndef passes(m, value):\n    if value is None:\n        return False\n    return value >= m.threshold if m.direction == \"higher\" else value <= m.threshold\n\n\ndef lock(plan):\n    body = {\"goal\": plan.goal, \"metrics\": [(m.name, m.kind, m.direction, m.threshold, m.window) for m in plan.metrics]}\n    return hashlib.sha256(json.dumps(body, sort_keys=True).encode()).hexdigest()[:10]"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "sm_1.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() prints a four-metric plan, validates a bad plan, tests boundary values, edits a threshold after a result and looks up three names against the plan.",
    "descKn": "main() ನಾಲ್ಕು-ಮಾಪನ ಯೋಜನೆ ಮುದ್ರಿಸಿ, ಕೆಟ್ಟ ಯೋಜನೆ ಮಾನ್ಯಗೊಳಿಸಿ, ಅಂಚಿನ ಮೌಲ್ಯ ಪರೀಕ್ಷಿಸಿ, ಫಲಿತಾಂಶದ ನಂತರ ಮಿತಿ ಸಂಪಾದಿಸಿ ಮತ್ತು ಯೋಜನೆಯ ವಿರುದ್ಧ ಮೂರು ಹೆಸರು ಹುಡುಕುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: a Goal-Question-Metric plan (all numbers invented)\")\n    p = good_plan()\n    print(\"goal:\", p.goal)\n    for m in p.metrics:\n        print(f\"  {m.kind:9} {m.name:28} {m.direction:6} than {m.threshold:<5} answers: {m.question}\")\n    print(\"plan errors:\", validate(p))\n    print(\"each metric is tied to a question and carries a direction, a threshold and a window, and the plan has an outcome metric, a guardrail and a counter-metric; the human_review_minutes counter-metric is there because a faster answer that takes longer to check is not an improvement\")\n\n    section(\"2. Genuinely running: what a plan without structure looks like\")\n    bad = Plan(\"\", [Q1, Q2], [Metric(\"accuracy\", \"outcome\", \"higher\", 0.9, \"Some other question\", \"\"), Metric(\"speed\", \"vibe\", \"up\", 1.0, Q1, \"\")])\n    for e in validate(bad):\n        print(\" -\", e)\n    print(\"a missing goal, a metric tied to a question the plan never asked, an unknown kind, a bad direction, missing windows, an unanswered question and no guardrail were all reported together instead of stopping at the first\")\n\n    section(\"3. Genuinely running: direction and inclusive thresholds\")\n    acc, mins = p.metrics[1], p.metrics[0]\n    for m, v in ((acc, 0.90), (acc, 0.899), (acc, None), (mins, 2.0), (mins, 2.01)):\n        print(f\"{m.name:28} value={v!s:6} {m.direction:6} than {m.threshold} -> {'pass' if passes(m, v) else 'fail'}\")\n    print(\"exactly 0.90 passes a higher-is-better threshold and exactly 2.0 passes a lower-is-better one because the comparison is inclusive; a missing value fails instead of being skipped, since an unmeasured metric is not a passed one\")\n\n    section(\"4. Genuinely measuring: moving the threshold after the result\")\n    before = lock(p)\n    result = 0.82\n    print(\"result:\", result, \"| accuracy threshold 0.90 ->\", \"pass\" if passes(acc, result) else \"fail\", \"| lock\", before)\n    p2 = good_plan()\n    p2.metrics[1] = Metric(\"service_accuracy\", \"outcome\", \"higher\", 0.80, Q2, \"30 days of replayed incidents\")\n    print(\"threshold edited to 0.80 ->\", \"pass\" if passes(p2.metrics[1], result) else \"fail\", \"| lock\", lock(p2), \"| same lock:\", before == lock(p2))\n    print(\"lowering the threshold turned 0.82 from a fail into a pass, and the lock changed, which is the signal a reviewer needs; the lock only helps if somebody compares it with the one recorded before the run\")\n\n    section(\"5. Genuinely running: which numbers are not on the plan\")\n    names = {m.name for m in p.metrics}\n    for candidate in (\"demo_satisfaction\", \"number_of_dashboards\", \"median_minutes_to_identify\"):\n        print(f\"{candidate:28} on the plan: {candidate in names}\")\n    print(\"a number that answers none of the plan's questions is a vanity number here, and the check is a simple name lookup, so it flags what is absent and cannot judge whether a listed metric is a good one\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a Goal-Question-Metric plan (all numbers invented) ---\ngoal: reduce time to identify the affected service without more unsafe actions\n  outcome   median_minutes_to_identify   lower  than 2.0   answers: How long does identification take?\n  outcome   service_accuracy             higher than 0.9   answers: Is the identified service correct?\n  guardrail unsafe_action_rate           lower  than 0.0   answers: Does it avoid unsafe actions?\n  counter   human_review_minutes         lower  than 3.0   answers: How long does identification take?\nplan errors: []\neach metric is tied to a question and carries a direction, a threshold and a window, and the plan has an outcome metric, a guardrail and a counter-metric; the human_review_minutes counter-metric is there because a faster answer that takes longer to check is not an improvement\n\n--- 2. Genuinely running: what a plan without structure looks like ---\n - goal is required\n - accuracy: question is not part of the plan\n - accuracy: no measurement window\n - speed: unknown kind vibe\n - speed: direction must be higher or lower\n - speed: no measurement window\n - question without a metric: Is the identified service correct?\n - no guardrail metric\na missing goal, a metric tied to a question the plan never asked, an unknown kind, a bad direction, missing windows, an unanswered question and no guardrail were all reported together instead of stopping at the first\n\n--- 3. Genuinely running: direction and inclusive thresholds ---\nservice_accuracy             value=0.9    higher than 0.9 -> pass\nservice_accuracy             value=0.899  higher than 0.9 -> fail\nservice_accuracy             value=None   higher than 0.9 -> fail\nmedian_minutes_to_identify   value=2.0    lower  than 2.0 -> pass\nmedian_minutes_to_identify   value=2.01   lower  than 2.0 -> fail\nexactly 0.90 passes a higher-is-better threshold and exactly 2.0 passes a lower-is-better one because the comparison is inclusive; a missing value fails instead of being skipped, since an unmeasured metric is not a passed one\n\n--- 4. Genuinely measuring: moving the threshold after the result ---\nresult: 0.82 | accuracy threshold 0.90 -> fail | lock aa11b243e1\nthreshold edited to 0.80 -> pass | lock 287f6d6802 | same lock: False\nlowering the threshold turned 0.82 from a fail into a pass, and the lock changed, which is the signal a reviewer needs; the lock only helps if somebody compares it with the one recorded before the run\n\n--- 5. Genuinely running: which numbers are not on the plan ---\ndemo_satisfaction            on the plan: False\nnumber_of_dashboards         on the plan: False\nmedian_minutes_to_identify   on the plan: True\na number that answers none of the plan's questions is a vanity number here, and the check is a simple name lookup, so it flags what is absent and cannot judge whether a listed metric is a good one"
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
    "headingEn": "Experiment 1: A Goal-Question-Metric plan (all numbers invented)",
    "headingKn": "ಪ್ರಯೋಗ 1: A Goal-Question-Metric plan (all numbers invented)",
    "bodyEn": "What it ran: A Goal-Question-Metric plan (all numbers invented). What the lab concluded: each metric is tied to a question and carries a direction, a threshold and a window, and the plan has an outcome metric, a guardrail and a counter-metric; the human_review_minutes counter-metric is there because a faster answer that takes longer to check is not an improvement",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A Goal-Question-Metric plan (all numbers invented). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each metric is tied to a question and carries a direction, a threshold and a window, and the plan has an outcome metric, a guardrail and a counter-metric; the human_review_minutes counter-metric is there because a faster answer that takes longer to check is not an improvement"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: a Goal-Question-Metric plan (all numbers invented) ---\ngoal: reduce time to identify the affected service without more unsafe actions\n  outcome   median_minutes_to_identify   lower  than 2.0   answers: How long does identification take?\n  outcome   service_accuracy             higher than 0.9   answers: Is the identified service correct?\n  guardrail unsafe_action_rate           lower  than 0.0   answers: Does it avoid unsafe actions?\n  counter   human_review_minutes         lower  than 3.0   answers: How long does identification take?\nplan errors: []"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: What a plan without structure looks like",
    "headingKn": "ಪ್ರಯೋಗ 2: What a plan without structure looks like",
    "bodyEn": "What it ran: What a plan without structure looks like. What the lab concluded: a missing goal, a metric tied to a question the plan never asked, an unknown kind, a bad direction, missing windows, an unanswered question and no guardrail were all reported together instead of stopping at the first",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: What a plan without structure looks like. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a missing goal, a metric tied to a question the plan never asked, an unknown kind, a bad direction, missing windows, an unanswered question and no guardrail were all reported together instead of stopping at the first"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: what a plan without structure looks like ---\n - goal is required\n - accuracy: question is not part of the plan\n - accuracy: no measurement window\n - speed: unknown kind vibe\n - speed: direction must be higher or lower\n - speed: no measurement window\n - question without a metric: Is the identified service correct?\n - no guardrail metric"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Direction and inclusive thresholds",
    "headingKn": "ಪ್ರಯೋಗ 3: Direction and inclusive thresholds",
    "bodyEn": "What it ran: Direction and inclusive thresholds. What the lab concluded: exactly 0.90 passes a higher-is-better threshold and exactly 2.0 passes a lower-is-better one because the comparison is inclusive; a missing value fails instead of being skipped, since an unmeasured metric is not a passed one",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Direction and inclusive thresholds. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): exactly 0.90 passes a higher-is-better threshold and exactly 2.0 passes a lower-is-better one because the comparison is inclusive; a missing value fails instead of being skipped, since an unmeasured metric is not a passed one"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: direction and inclusive thresholds ---\nservice_accuracy             value=0.9    higher than 0.9 -> pass\nservice_accuracy             value=0.899  higher than 0.9 -> fail\nservice_accuracy             value=None   higher than 0.9 -> fail\nmedian_minutes_to_identify   value=2.0    lower  than 2.0 -> pass\nmedian_minutes_to_identify   value=2.01   lower  than 2.0 -> fail"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Moving the threshold after the result",
    "headingKn": "ಪ್ರಯೋಗ 4: Moving the threshold after the result",
    "bodyEn": "What it ran: Moving the threshold after the result. What the lab concluded: lowering the threshold turned 0.82 from a fail into a pass, and the lock changed, which is the signal a reviewer needs; the lock only helps if somebody compares it with the one recorded before the run",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Moving the threshold after the result. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): lowering the threshold turned 0.82 from a fail into a pass, and the lock changed, which is the signal a reviewer needs; the lock only helps if somebody compares it with the one recorded before the run"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely measuring: moving the threshold after the result ---\nresult: 0.82 | accuracy threshold 0.90 -> fail | lock aa11b243e1\nthreshold edited to 0.80 -> pass | lock 287f6d6802 | same lock: False"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Which numbers are not on the plan",
    "headingKn": "ಪ್ರಯೋಗ 5: Which numbers are not on the plan",
    "bodyEn": "What it ran: Which numbers are not on the plan. What the lab concluded: a number that answers none of the plan's questions is a vanity number here, and the check is a simple name lookup, so it flags what is absent and cannot judge whether a listed metric is a good one",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Which numbers are not on the plan. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a number that answers none of the plan's questions is a vanity number here, and the check is a simple name lookup, so it flags what is absent and cannot judge whether a listed metric is a good one"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: which numbers are not on the plan ---\ndemo_satisfaction            on the plan: False\nnumber_of_dashboards         on the plan: False\nmedian_minutes_to_identify   on the plan: True"
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
    "headingEn": "Genuinely Found: A Plan With Problems Reported Together",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಮಸ್ಯೆಗಳನ್ನು ಒಟ್ಟಿಗೆ ವರದಿ ಮಾಡಿದ ಯೋಜನೆ",
    "bodyEn": "Section 1: the good plan had no errors. Section 2: the bad plan produced eight messages at once: no goal, a metric on a question outside the plan, a missing window, an unknown kind \"vibe\", a bad direction \"up\", an unanswered question and no guardrail metric.",
    "bodyKn": "ವಿಭಾಗ 1: ಒಳ್ಳೆಯ ಯೋಜನೆಗೆ ದೋಷ ಇರಲಿಲ್ಲ. ವಿಭಾಗ 2: ಕೆಟ್ಟ ಯೋಜನೆ ಎಂಟು ಸಂದೇಶ ಒಮ್ಮೆಲೇ ನೀಡಿತು: ಗುರಿ ಇಲ್ಲ, ಯೋಜನೆಯ ಹೊರಗಿನ ಪ್ರಶ್ನೆಯ ಮೇಲೆ ಮಾಪನ, ಕಾಣೆಯಾದ ಕಿಟಕಿ, ಅಜ್ಞಾತ ವಿಧ \"vibe\", ಕೆಟ್ಟ ದಿಕ್ಕು \"up\", ಉತ್ತರಿಸದ ಪ್ರಶ್ನೆ ಮತ್ತು guardrail ಮಾಪನ ಇಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Inclusive Thresholds and the Edited Threshold",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಒಳಗೊಳ್ಳುವ ಮಿತಿಗಳು ಮತ್ತು ಸಂಪಾದಿತ ಮಿತಿ",
    "bodyEn": "Section 3: 0.90 passed a higher-is-better 0.90 threshold, 0.899 and a missing value failed, 2.0 passed a lower-is-better 2.0 and 2.01 failed. Section 4: a result of 0.82 failed at 0.90, and after the threshold was edited to 0.80 it passed while the lock changed from aa11b243e1 to 287f6d6802. Section 5: demo_satisfaction and number_of_dashboards were not on the plan.",
    "bodyKn": "ವಿಭಾಗ 3: 0.90 ಹೆಚ್ಚಿದ್ದು-ಉತ್ತಮ 0.90 ಮಿತಿ ಪಾಸ್ ಮಾಡಿತು, 0.899 ಮತ್ತು ಕಾಣೆಯಾದ ಮೌಲ್ಯ ವಿಫಲವಾದವು, 2.0 ಕಡಿಮೆಯಿದ್ದು-ಉತ್ತಮ 2.0 ಪಾಸ್ ಮಾಡಿತು ಮತ್ತು 2.01 ವಿಫಲವಾಯಿತು. ವಿಭಾಗ 4: 0.82 ಫಲಿತಾಂಶ 0.90 ನಲ್ಲಿ ವಿಫಲವಾಯಿತು, ಮತ್ತು ಮಿತಿಯನ್ನು 0.80 ಗೆ ಸಂಪಾದಿಸಿದಾಗ lock aa11b243e1 ಯಿಂದ 287f6d6802 ಗೆ ಬದಲಾಗುತ್ತಾ ಪಾಸ್ ಆಯಿತು. ವಿಭಾಗ 5: demo_satisfaction ಮತ್ತು number_of_dashboards ಯೋಜನೆಯಲ್ಲಿರಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A threshold chosen after seeing the result can always be set to pass, so the plan has to be fixed and locked before the data exists.",
    "bodyKn": "ಫಲಿತಾಂಶ ನೋಡಿದ ನಂತರ ಆರಿಸಿದ ಮಿತಿಯನ್ನು ಯಾವಾಗಲೂ ಪಾಸ್ ಆಗುವಂತೆ ಹೊಂದಿಸಬಹುದು, ಆದ್ದರಿಂದ ದತ್ತಾಂಶ ಬರುವ ಮುನ್ನ ಯೋಜನೆ ನಿಗದಿಯಾಗಿ ಲಾಕ್ ಆಗಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"any metric on a dashboard is evidence.\" A metric answering none of the plan's questions is a vanity number.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"dashboard ನ ಯಾವುದೇ ಮಾಪನ ಸಾಕ್ಷ್ಯ.\" ಯೋಜನೆಯ ಯಾವ ಪ್ರಶ್ನೆಗೂ ಉತ್ತರಿಸದ ಮಾಪನ ಪ್ರದರ್ಶನ ಸಂಖ್ಯೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Guardrail: a metric that must not get worse. Counter-metric: a metric exposing a hidden cost. Inclusive threshold: the boundary value passes. Measurement window: the data the number is computed from.",
    "bodyKn": "Guardrail: ಕೆಟ್ಟದಾಗಬಾರದ ಮಾಪನ. Counter-metric: ಗುಪ್ತ ವೆಚ್ಚ ಬಹಿರಂಗಪಡಿಸುವ ಮಾಪನ. Inclusive threshold: ಗಡಿ ಮೌಲ್ಯ ಪಾಸ್ ಆಗುತ್ತದೆ. Measurement window: ಸಂಖ್ಯೆ ಲೆಕ್ಕಹಾಕಿದ ದತ್ತಾಂಶ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A plan ties metrics to questions and goals. 2) Eight problems were reported at once. 3) Boundaries are inclusive and missing fails. 4) An edited threshold changed the lock. 5) Off-plan numbers were flagged.",
    "bodyKn": "1) ಯೋಜನೆ ಮಾಪನಗಳನ್ನು ಪ್ರಶ್ನೆ ಮತ್ತು ಗುರಿಗಳಿಗೆ ಜೋಡಿಸುತ್ತದೆ. 2) ಎಂಟು ಸಮಸ್ಯೆಗಳು ಒಮ್ಮೆಲೇ ವರದಿಯಾದವು. 3) ಗಡಿಗಳು ಒಳಗೊಳ್ಳುವವು ಮತ್ತು ಕಾಣೆಯಾದದ್ದು ವಿಫಲ. 4) ಸಂಪಾದಿತ ಮಿತಿ lock ಬದಲಿಸಿತು. 5) ಯೋಜನೆಯ ಹೊರಗಿನ ಸಂಖ್ಯೆಗಳು ಗುರುತಾದವು."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Try It Yourself",
    "textKn": "ನೀವೇ ಪ್ರಯತ್ನಿಸಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Run the lab",
    "headingKn": "ಲ್ಯಾಬ್ ಓಡಿಸಿ",
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B sm_1.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B sm_1.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B sm_1.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B sm_1.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Did exactly 0.90 pass a higher-is-better 0.90 threshold?",
      "qKn": "ಹೆಚ್ಚಿದ್ದು-ಉತ್ತಮ 0.90 ಮಿತಿಗೆ ನಿಖರವಾಗಿ 0.90 ಪಾಸ್ ಆಯಿತೇ?",
      "opts": [
       "Yes, the comparison is inclusive",
       "No",
       "Only with rounding",
       "It raised"
      ],
      "optsKn": [
       "ಹೌದು, ಹೋಲಿಕೆ ಒಳಗೊಳ್ಳುವುದು",
       "ಇಲ್ಲ",
       "ಪೂರ್ಣಾಂಕದೊಂದಿಗೆ ಮಾತ್ರ",
       "ಅದು ಅಪವಾದ ಎತ್ತಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What happens to a missing value?",
      "qKn": "ಕಾಣೆಯಾದ ಮೌಲ್ಯಕ್ಕೆ ಏನಾಗುತ್ತದೆ?",
      "opts": [
       "It fails",
       "It passes",
       "It is skipped",
       "It is averaged"
      ],
      "optsKn": [
       "ಅದು ವಿಫಲ",
       "ಅದು ಪಾಸ್",
       "ಅದನ್ನು ಬಿಡಲಾಗುತ್ತದೆ",
       "ಅದನ್ನು ಸರಾಸರಿ ಮಾಡಲಾಗುತ್ತದೆ"
      ],
      "correct": 0
     },
     {
      "q": "What did editing the threshold to 0.80 do to a 0.82 result?",
      "qKn": "ಮಿತಿಯನ್ನು 0.80 ಗೆ ಸಂಪಾದಿಸಿದ್ದು 0.82 ಫಲಿತಾಂಶಕ್ಕೆ ಏನು ಮಾಡಿತು?",
      "opts": [
       "Turned a fail into a pass and changed the lock",
       "Nothing",
       "Rejected the plan",
       "Deleted the metric"
      ],
      "optsKn": [
       "ವೈಫಲ್ಯವನ್ನು ಪಾಸ್ ಮಾಡಿ lock ಬದಲಿಸಿತು",
       "ಏನೂ ಇಲ್ಲ",
       "ಯೋಜನೆ ತಿರಸ್ಕರಿಸಿತು",
       "ಮಾಪನ ಅಳಿಸಿತು"
      ],
      "correct": 0
     },
     {
      "q": "How many problems did the bad plan report?",
      "qKn": "ಕೆಟ್ಟ ಯೋಜನೆ ಎಷ್ಟು ಸಮಸ್ಯೆ ವರದಿ ಮಾಡಿತು?",
      "opts": [
       "8",
       "1",
       "3",
       "0"
      ],
      "optsKn": [
       "8",
       "1",
       "3",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "Why include a counter-metric such as human_review_minutes?",
      "qKn": "human_review_minutes ತರಹದ counter-metric ಏಕೆ ಸೇರಿಸಬೇಕು?",
      "opts": [
       "A faster answer that takes longer to check is not an improvement",
       "It is required by law",
       "It lowers cost",
       "It signs the plan"
      ],
      "optsKn": [
       "ಪರಿಶೀಲಿಸಲು ಹೆಚ್ಚು ಸಮಯ ಬೇಕಾದ ವೇಗದ ಉತ್ತರ ಸುಧಾರಣೆ ಅಲ್ಲ",
       "ಕಾನೂನು ಬಯಸುತ್ತದೆ",
       "ಅದು ವೆಚ್ಚ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ",
       "ಅದು ಯೋಜನೆಗೆ ಸಹಿ ಮಾಡುತ್ತದೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
