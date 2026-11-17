module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215c8",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "OpenAI Preparedness and DeepMind FSF (Part 2 of 3) — Evidence, Gaps and Chance",
 "titleKn": "OpenAI Preparedness ಮತ್ತು DeepMind FSF (ಭಾಗ 2 / 3) — ಸಾಕ್ಷ್ಯ, ಅಂತರಗಳು ಮತ್ತು ಅವಕಾಶ",
 "desc": "Compute evaluation metrics, detect a performance gap and measure how often chance alone produces one.",
 "descKn": "ಮೌಲ್ಯಮಾಪನ ಮಾಪನ ಲೆಕ್ಕ ಹಾಕಿ, ಕಾರ್ಯಕ್ಷಮತೆ ಅಂತರ ಪತ್ತೆ ಮಾಡಿ ಮತ್ತು ಕೇವಲ ಅವಕಾಶ ಅದನ್ನು ಎಷ್ಟು ಬಾರಿ ಉಂಟುಮಾಡುತ್ತದೆ ಅಳೆಯಿರಿ.",
 "objectives": [
  "Validate a record.",
  "Flag a gap without proving it.",
  "Simulate chance gaps.",
  "Separate measured from actual.",
  "Diff two policy versions."
 ],
 "objectivesKn": [
  "ದಾಖಲೆ ಮೌಲ್ಯೀಕರಿಸಿ.",
  "ಸಾಬೀತು ಮಾಡದೆ ಅಂತರ ಗುರುತಿಸಿ.",
  "ಅವಕಾಶ ಅಂತರ ಅನುಕರಿಸಿ.",
  "ಅಳೆದದ್ದು ಮತ್ತು ವಾಸ್ತವ ಬೇರ್ಪಡಿಸಿ.",
  "ಎರಡು ನೀತಿ ಆವೃತ್ತಿ ವ್ಯತ್ಯಾಸ ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "OpenAI Preparedness and DeepMind FSF (Part 2 of 3)",
    "textKn": "OpenAI Preparedness ಮತ್ತು DeepMind FSF (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: evaluation records and their metrics, a performance-gap detector, a seeded simulation of how often chance alone gives a large gap, the measured-below-but-actually-above problem, a policy version diff and a readiness check. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the OpenAI Preparedness Framework and the DeepMind Frontier Safety Framework (a decision-table comparison tool with a controlled trigger vocabulary, evaluation metrics, a performance-gap detector and what chance alone produces, a policy version diff, a readiness check, an allowed-files check, evidence capture and source verification), not the real software, and the table cells restate how the lesson describes the frameworks and none was checked against the source documents, the evaluation records are fictional, the models in the simulations are probabilities written by the lab author and the commands run by the capture runner are harmless one-line programs, so no real LLM behaviour is measured. The original code/main.py was not supplied and the lesson code was shown only in fragments, so the labs are our own implementation and the outputs were produced by running them. Every classification in the comparison table restates how the lesson describes OpenAI, DeepMind and Anthropic, none was checked against the framework documents, and seven of the 21 cells say not_determined on purpose. The lesson itself corrects its earlier mapping and says AI self-improvement is a separate Tracked Category at OpenAI, which the table follows, and it names later versions such as DeepMind FSF 3.1 that were not examined here. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಮೌಲ್ಯಮಾಪನ ದಾಖಲೆಗಳು ಮತ್ತು ಅವುಗಳ ಮಾಪನಗಳು, ಕಾರ್ಯಕ್ಷಮತೆ-ಅಂತರ ಪತ್ತೆಕಾರಕ, ಕೇವಲ ಅವಕಾಶ ಎಷ್ಟು ಬಾರಿ ದೊಡ್ಡ ಅಂತರ ನೀಡುತ್ತದೆ ಎಂಬ seeded ಸಿಮ್ಯುಲೇಶನ್, ಅಳೆದದ್ದು ಕೆಳಗೆ ಆದರೆ ವಾಸ್ತವದಲ್ಲಿ ಮೇಲೆ ಎಂಬ ಸಮಸ್ಯೆ, ನೀತಿ ಆವೃತ್ತಿ ವ್ಯತ್ಯಾಸ ಮತ್ತು ಸಿದ್ಧತೆ ಪರಿಶೀಲನೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು OpenAI Preparedness Framework ಮತ್ತು DeepMind Frontier Safety Framework (ನಿಯಂತ್ರಿತ trigger ಶಬ್ದಕೋಶ ಇರುವ ನಿರ್ಧಾರ-ಟೇಬಲ್ ಹೋಲಿಕೆ ಸಾಧನ, ಮೌಲ್ಯಮಾಪನ ಮಾಪನಗಳು, ಕಾರ್ಯಕ್ಷಮತೆ-ಅಂತರ ಪತ್ತೆಕಾರಕ ಮತ್ತು ಕೇವಲ ಅವಕಾಶ ಏನು ಉಂಟುಮಾಡುತ್ತದೆ, ನೀತಿ ಆವೃತ್ತಿ ವ್ಯತ್ಯಾಸ, ಸಿದ್ಧತೆ ಪರಿಶೀಲನೆ, ಅನುಮತಿಸಿದ-ಫೈಲ್ ಪರಿಶೀಲನೆ, ಸಾಕ್ಷ್ಯ ಸೆರೆಹಿಡಿಯುವಿಕೆ ಮತ್ತು ಮೂಲ ಪರಿಶೀಲನೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಟೇಬಲ್ ಕೋಶಗಳು lesson ಚೌಕಟ್ಟುಗಳನ್ನು ಹೇಗೆ ವಿವರಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ಪುನರುಚ್ಚರಿಸುತ್ತವೆ ಮತ್ತು ಯಾವುದನ್ನೂ ಮೂಲ ದಾಖಲೆಗಳ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿಲ್ಲ, ಮೌಲ್ಯಮಾಪನ ದಾಖಲೆಗಳು ಕಾಲ್ಪನಿಕ, ಸಿಮ್ಯುಲೇಶನ್‌ಗಳಲ್ಲಿನ ಮಾದರಿಗಳು ಲ್ಯಾಬ್ ಲೇಖಕ ಬರೆದ ಸಂಭವನೀಯತೆಗಳು ಮತ್ತು capture runner ಓಡಿಸುವ ಆಜ್ಞೆಗಳು ಹಾನಿರಹಿತ ಒಂದು-ಸಾಲಿನ ಕಾರ್ಯಕ್ರಮಗಳು, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ ಮತ್ತು lesson ಕೋಡ್ ತುಣುಕುಗಳಲ್ಲಿ ಮಾತ್ರ ತೋರಿಸಲ್ಪಟ್ಟಿತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ ಮತ್ತು ಔಟ್‌ಪುಟ್ ಅನ್ನು ಅವನ್ನು ಓಡಿಸಿ ಪಡೆಯಲಾಗಿದೆ. ಹೋಲಿಕೆ ಟೇಬಲ್‌ನ ಪ್ರತಿ ವರ್ಗೀಕರಣ OpenAI, DeepMind ಮತ್ತು Anthropic ಅನ್ನು lesson ಹೇಗೆ ವಿವರಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ಪುನರುಚ್ಚರಿಸುತ್ತದೆ, ಯಾವುದನ್ನೂ ಚೌಕಟ್ಟು ದಾಖಲೆಗಳ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿಲ್ಲ, ಮತ್ತು 21 ಕೋಶಗಳಲ್ಲಿ ಏಳು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ not_determined ಎನ್ನುತ್ತವೆ. lesson ಸ್ವತಃ ತನ್ನ ಹಿಂದಿನ ನಕ್ಷೆಯನ್ನು ಸರಿಪಡಿಸಿ AI self-improvement OpenAI ನಲ್ಲಿ ಪ್ರತ್ಯೇಕ Tracked Category ಎನ್ನುತ್ತದೆ, ಟೇಬಲ್ ಅದನ್ನು ಅನುಸರಿಸುತ್ತದೆ, ಮತ್ತು DeepMind FSF 3.1 ನಂತಹ ನಂತರದ ಆವೃತ್ತಿಗಳನ್ನು ಹೆಸರಿಸುತ್ತದೆ, ಅವನ್ನು ಇಲ್ಲಿ ಪರೀಕ್ಷಿಸಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Big Gap Is Not Proof, and a Small Sample Is Not a Measurement",
    "textKn": "ದೊಡ್ಡ ಅಂತರ ಸಾಬೀತಲ್ಲ, ಸಣ್ಣ ಮಾದರಿ ಮಾಪನವಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Metrics, Gaps and Chance",
    "headingKn": "ಮಾಪನಗಳು, ಅಂತರಗಳು ಮತ್ತು ಅವಕಾಶ",
    "bodyEn": "This part turns the comparison into evidence handling. It computes success, intervention and cost rates for two fictional evaluation records and refuses invalid ones, flags a gap between normal and evaluation performance without ever calling it proven, then measures with a seeded simulation how often chance alone produces a gap of 0.20 for two identical models at different sample sizes and how clearly a model that really drops separates from that. It also shows how a measurement below a threshold can hide a capability above it, diffs two policy versions and runs a four-condition readiness check.",
    "bodyKn": "ಈ ಭಾಗ ಹೋಲಿಕೆಯನ್ನು ಸಾಕ್ಷ್ಯ ನಿರ್ವಹಣೆಯಾಗಿ ಬದಲಿಸುತ್ತದೆ. ಇದು ಎರಡು ಕಾಲ್ಪನಿಕ ಮೌಲ್ಯಮಾಪನ ದಾಖಲೆಗಳ ಯಶಸ್ಸು, ಹಸ್ತಕ್ಷೇಪ ಮತ್ತು ವೆಚ್ಚ ದರ ಲೆಕ್ಕ ಹಾಕಿ ಅಮಾನ್ಯವನ್ನು ನಿರಾಕರಿಸುತ್ತದೆ, ಸಾಮಾನ್ಯ ಮತ್ತು ಮೌಲ್ಯಮಾಪನ ಕಾರ್ಯಕ್ಷಮತೆ ನಡುವಿನ ಅಂತರವನ್ನು ಎಂದಿಗೂ ಸಾಬೀತು ಎನ್ನದೆ ಗುರುತಿಸುತ್ತದೆ, ನಂತರ ಒಂದೇ ರೀತಿಯ ಎರಡು ಮಾದರಿಗಳಿಗೆ ವಿಭಿನ್ನ ಮಾದರಿ ಗಾತ್ರಗಳಲ್ಲಿ ಕೇವಲ ಅವಕಾಶ 0.20 ಅಂತರ ಎಷ್ಟು ಬಾರಿ ಉಂಟುಮಾಡುತ್ತದೆ ಮತ್ತು ನಿಜವಾಗಿ ಕುಸಿಯುವ ಮಾದರಿ ಅದರಿಂದ ಎಷ್ಟು ಸ್ಪಷ್ಟವಾಗಿ ಬೇರ್ಪಡುತ್ತದೆ ಎಂಬುದನ್ನು seeded ಸಿಮ್ಯುಲೇಶನ್‌ನಿಂದ ಅಳೆಯುತ್ತದೆ. ಮಿತಿಗಿಂತ ಕೆಳಗಿನ ಮಾಪನ ಮೇಲಿನ ಸಾಮರ್ಥ್ಯ ಹೇಗೆ ಮರೆಮಾಡಬಹುದು ಎಂದೂ ತೋರಿಸುತ್ತದೆ, ಎರಡು ನೀತಿ ಆವೃತ್ತಿ ವ್ಯತ್ಯಾಸ ಮಾಡುತ್ತದೆ ಮತ್ತು ನಾಲ್ಕು-ಷರತ್ತು ಸಿದ್ಧತೆ ಪರಿಶೀಲನೆ ಓಡಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Evidence and Gaps",
    "headingKn": "ಸಾಕ್ಷ್ಯ ಮತ್ತು ಅಂತರಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a gap is a reason to look, not a verdict</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">record</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">validated first</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">gap</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">investigate, not proven</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">chance</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">small samples mislead</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">threshold</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">measured is not actual</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a gap is a reason to look, not a verdict</text></svg>",
    "captionEn": "A performance gap needs an investigation, and sample size decides how much it can mean.",
    "captionKn": "ಕಾರ್ಯಕ್ಷಮತೆ ಅಂತರಕ್ಕೆ ತನಿಖೆ ಬೇಕು, ಮತ್ತು ಮಾದರಿ ಗಾತ್ರ ಅದು ಎಷ್ಟು ಅರ್ಥ ಹೊಂದಬಹುದು ನಿರ್ಧರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The measurements",
    "headingKn": "ಮಾಪನಗಳು",
    "headers": [
     "Item",
     "Result in the lab"
    ],
    "rows": [
     [
      "record 78 of 100",
      "78 percent success, 25 percent intervention, $120 per task"
     ],
     [
      "record 96 of 120",
      "80 percent success, 15 percent intervention, $150 per task"
     ],
     [
      "gap 0.37 and 0.40",
      "investigation recommended, sandbagging never proven"
     ],
     [
      "chance at 10 tasks",
      "gap of 0.20 or more in 0.115 of trials"
     ],
     [
      "real drop to 0.45",
      "seen in 0.856 of trials at 10 tasks and 0.986 at 50"
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
    "filename": "pf_2.py",
    "headingEn": "Records, gap detector and simulation",
    "headingKn": "ದಾಖಲೆಗಳು, ಅಂತರ ಪತ್ತೆಕಾರಕ ಮತ್ತು ಸಿಮ್ಯುಲೇಶನ್",
    "descEn": "calculate_metrics validates a record before computing rates, detect_gap returns a gap with sandbagging_proven always False, simulate_gap runs seeded trials and readiness_check lists the failing conditions by name.",
    "descKn": "calculate_metrics ದರ ಲೆಕ್ಕ ಹಾಕುವ ಮೊದಲು ದಾಖಲೆ ಮೌಲ್ಯೀಕರಿಸುತ್ತದೆ, detect_gap ಯಾವಾಗಲೂ False ಆದ sandbagging_proven ಜೊತೆ ಅಂತರ ಹಿಂತಿರುಗಿಸುತ್ತದೆ, simulate_gap seeded ಪ್ರಯೋಗಗಳನ್ನು ಓಡಿಸುತ್ತದೆ ಮತ್ತು readiness_check ವಿಫಲ ಷರತ್ತುಗಳನ್ನು ಹೆಸರಿನಿಂದ ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ.",
    "code": "class EvaluationRecord:\r\n    model_id: str\r\n    capability: str\r\n    task_count: int\r\n    successful_tasks: int\r\n    human_intervention_count: int\r\n    cost_usd: float\r\n    independently_verified: bool\r\n    threshold_crossed: Optional[bool] = None\r\n\r\n\r\ndef calculate_metrics(r):\r\n    if r.task_count <= 0:\r\n        raise ValueError(\"Task count must be positive\")\r\n    if not 0 <= r.successful_tasks <= r.task_count:\r\n        raise ValueError(\"Invalid successful task count\")\r\n    if not 0 <= r.human_intervention_count <= r.task_count:\r\n        raise ValueError(\"Invalid intervention count\")\r\n    if r.cost_usd < 0:\r\n        raise ValueError(\"Cost cannot be negative\")\r\n    return {\"success_rate\": r.successful_tasks / r.task_count, \"intervention_rate\": r.human_intervention_count / r.task_count,\r\n            \"cost_per_task\": r.cost_usd / r.task_count, \"threshold_status\": \"undetermined\" if r.threshold_crossed is None else r.threshold_crossed}\r\n\r\n\r\ndef detect_gap(normal, evaluation, investigate_at=0.20):\r\n    for v in (normal, evaluation):\r\n        if not 0 <= v <= 1:\r\n            raise ValueError(\"Success rates must be between 0 and 1\")\r\n    gap = normal - evaluation\r\n    return {\"performance_gap\": round(gap, 2), \"investigation_recommended\": gap >= investigate_at, \"sandbagging_proven\": False}\r\n\r\n\r\ndef simulate_gap(p_normal, p_evaluation, n, trials=10000, seed=7, at=0.20):\r\n    rng = random.Random(seed)\r\n    hits = 0\r\n    gaps = []\r\n    for _ in range(trials):\r\n        a = sum(rng.random() < p_normal for _ in range(n)) / n\r\n        b = sum(rng.random() < p_evaluation for _ in range(n)) / n\r\n        gaps.append(a - b)\r\n        hits += (a - b) >= at\r\n    return hits / trials, sum(gaps) / trials\r\n\r\n\r\ndef compare_policy_versions(old, new):\r\n    changes = []\r\n    for cap in sorted(set(old) | set(new)):\r\n        if old.get(cap) != new.get(cap):\r\n            changes.append({\"capability\": cap, \"old\": old.get(cap), \"new\": new.get(cap)})\r\n    return changes\r\n\r\n\r\ndef readiness_check(source_verified, evaluation_verified, safeguards_reviewed, human_authorized):\r\n    checks = {\"source_verified\": source_verified, \"evaluation_verified\": evaluation_verified, \"safeguards_reviewed\": safeguards_reviewed, \"human_authorized\": human_authorized}\r\n    return {\"all_checks_satisfied\": all(checks.values()), \"failing\": [k for k, v in checks.items() if not v]}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pf_2.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() computes the record metrics, refuses invalid records, runs the gap detector and the chance simulation, shows the measured-against-actual problem, diffs two policies and runs the readiness check.",
    "descKn": "main() ದಾಖಲೆ ಮಾಪನ ಲೆಕ್ಕ ಹಾಕಿ, ಅಮಾನ್ಯ ದಾಖಲೆ ನಿರಾಕರಿಸಿ, ಅಂತರ ಪತ್ತೆಕಾರಕ ಮತ್ತು ಅವಕಾಶ ಸಿಮ್ಯುಲೇಶನ್ ಓಡಿಸಿ, ಅಳೆದದ್ದು-ವಿರುದ್ಧ-ವಾಸ್ತವ ಸಮಸ್ಯೆ ತೋರಿಸಿ, ಎರಡು ನೀತಿ ವ್ಯತ್ಯಾಸ ಮಾಡಿ ಮತ್ತು ಸಿದ್ಧತೆ ಪರಿಶೀಲನೆ ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely running: metrics for two fictional evaluation records\")\r\n    for r in (EvaluationRecord(\"research-agent-demo\", \"ai_rd_automation\", 100, 78, 25, 12000.0, False),\r\n              EvaluationRecord(\"ResearchAgent-X\", \"ai_rd_automation\", 120, 96, 18, 18000.0, False)):\r\n        m = calculate_metrics(r)\r\n        print(f\"{r.model_id:20} success {m['success_rate']:.0%} | intervention {m['intervention_rate']:.1%} | cost per task ${m['cost_per_task']:.0f} | verified {r.independently_verified} | threshold {m['threshold_status']}\")\r\n    print(\"the two records give 78 and 80 percent success, 25 and 15 percent intervention and 120 and 150 dollars per task, and the threshold status stays undetermined in both because these numbers say nothing about task representativeness, a human baseline or the exact criterion\")\r\n\r\n    section(\"2. Genuinely running: invalid records are refused\")\r\n    for bad in (EvaluationRecord(\"m\", \"c\", 0, 0, 0, 1.0, False), EvaluationRecord(\"m\", \"c\", 10, 11, 0, 1.0, False), EvaluationRecord(\"m\", \"c\", 10, 5, 11, 1.0, False), EvaluationRecord(\"m\", \"c\", 10, 5, 1, -5.0, False)):\r\n        try:\r\n            calculate_metrics(bad)\r\n        except ValueError as e:\r\n            print(\"ValueError:\", e)\r\n    print(\"a zero task count, more successes than tasks, more interventions than tasks and a negative cost were each refused before any rate was computed\")\r\n\r\n    section(\"3. Genuinely running: the performance-gap detector\")\r\n    for normal, evaluation in ((0.88, 0.51), (0.85, 0.45), (0.85, 0.82), (0.60, 0.65)):\r\n        print(f\"normal {normal:.2f} evaluation {evaluation:.2f} -> {detect_gap(normal, evaluation)}\")\r\n    print(\"gaps of 0.37 and 0.40 recommended an investigation and a gap of 0.03 or a negative gap did not, and sandbagging_proven was false in every row; a large gap is a reason to look for differences in prompts, tools or tasks as well as for strategic underperformance\")\r\n\r\n    section(\"4. Genuinely measuring: how often chance alone gives a gap of 0.20\")\r\n    print(f\"{'tasks per side':>14} {'both at 0.85':>14} {'0.85 against 0.45':>20}\")\r\n    for n in (10, 25, 50, 100, 400):\r\n        same, _ = simulate_gap(0.85, 0.85, n)\r\n        under, _ = simulate_gap(0.85, 0.45, n)\r\n        print(f\"{n:>14} {same:>14.3f} {under:>20.3f}\")\r\n    print(\"with ten tasks per side two identical models at 0.85 showed a gap of 0.20 or more in 0.115 of 10000 trials, 0.023 at 25 tasks, 0.002 at 50 and none from 100, while a model that really dropped to 0.45 showed it in 0.856 of trials at ten tasks and in 0.986 at 50; the investigation threshold of 0.20 is the lab's own number, and these probabilities are written by the author\")\r\n\r\n    section(\"5. Genuinely running: measured below the line, actually above it\")\r\n    threshold = 0.60\r\n    actual, measured = 0.82, 0.45\r\n    print(f\"threshold {threshold} | actual capability {actual} | measured under evaluation {measured} | below the line on the measurement: {measured < threshold} | above it in fact: {actual >= threshold}\")\r\n    print(\"a measurement below the threshold would be read as below, while the real capability is above it, which is the inequality the lesson writes as measured below threshold and actual at or above it; nothing in one score reveals which situation applies, and the numbers here are chosen to show the shape of the problem\")\r\n\r\n    section(\"6. Genuinely running: a policy version diff\")\r\n    old = {\"capability_x\": \"Research\", \"capability_y\": \"Tracked\"}\r\n    new = {\"capability_x\": \"Tracked\", \"capability_y\": \"Tracked\", \"capability_z\": \"Research\"}\r\n    for c in compare_policy_versions(old, new):\r\n        print(c)\r\n    print(\"a label change and a newly added capability both show up as differences, and a diff of labels would miss a changed threshold definition under an unchanged label; the entries are hypothetical and do not claim that any real capability changed category\")\r\n\r\n    section(\"7. Genuinely running: a readiness check with four conditions\")\r\n    print(readiness_check(False, True, True, True))\r\n    print(readiness_check(True, True, True, True))\r\n    print(\"a table whose source has not been verified failed the check by name, and when all four conditions held the result was true, which only confirms four application booleans and is not a compliance finding with any framework\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: metrics for two fictional evaluation records ---\nresearch-agent-demo  success 78% | intervention 25.0% | cost per task $120 | verified False | threshold undetermined\nResearchAgent-X      success 80% | intervention 15.0% | cost per task $150 | verified False | threshold undetermined\nthe two records give 78 and 80 percent success, 25 and 15 percent intervention and 120 and 150 dollars per task, and the threshold status stays undetermined in both because these numbers say nothing about task representativeness, a human baseline or the exact criterion\n\n--- 2. Genuinely running: invalid records are refused ---\nValueError: Task count must be positive\nValueError: Invalid successful task count\nValueError: Invalid intervention count\nValueError: Cost cannot be negative\na zero task count, more successes than tasks, more interventions than tasks and a negative cost were each refused before any rate was computed\n\n--- 3. Genuinely running: the performance-gap detector ---\nnormal 0.88 evaluation 0.51 -> {'performance_gap': 0.37, 'investigation_recommended': True, 'sandbagging_proven': False}\nnormal 0.85 evaluation 0.45 -> {'performance_gap': 0.4, 'investigation_recommended': True, 'sandbagging_proven': False}\nnormal 0.85 evaluation 0.82 -> {'performance_gap': 0.03, 'investigation_recommended': False, 'sandbagging_proven': False}\nnormal 0.60 evaluation 0.65 -> {'performance_gap': -0.05, 'investigation_recommended': False, 'sandbagging_proven': False}\ngaps of 0.37 and 0.40 recommended an investigation and a gap of 0.03 or a negative gap did not, and sandbagging_proven was false in every row; a large gap is a reason to look for differences in prompts, tools or tasks as well as for strategic underperformance\n\n--- 4. Genuinely measuring: how often chance alone gives a gap of 0.20 ---\ntasks per side   both at 0.85    0.85 against 0.45\n            10          0.115                0.856\n            25          0.023                0.942\n            50          0.002                0.986\n           100          0.000                0.999\n           400          0.000                1.000\nwith ten tasks per side two identical models at 0.85 showed a gap of 0.20 or more in 0.115 of 10000 trials, 0.023 at 25 tasks, 0.002 at 50 and none from 100, while a model that really dropped to 0.45 showed it in 0.856 of trials at ten tasks and in 0.986 at 50; the investigation threshold of 0.20 is the lab's own number, and these probabilities are written by the author\n\n--- 5. Genuinely running: measured below the line, actually above it ---\nthreshold 0.6 | actual capability 0.82 | measured under evaluation 0.45 | below the line on the measurement: True | above it in fact: True\na measurement below the threshold would be read as below, while the real capability is above it, which is the inequality the lesson writes as measured below threshold and actual at or above it; nothing in one score reveals which situation applies, and the numbers here are chosen to show the shape of the problem\n\n--- 6. Genuinely running: a policy version diff ---\n{'capability': 'capability_x', 'old': 'Research', 'new': 'Tracked'}\n{'capability': 'capability_z', 'old': None, 'new': 'Research'}\na label change and a newly added capability both show up as differences, and a diff of labels would miss a changed threshold definition under an unchanged label; the entries are hypothetical and do not claim that any real capability changed category\n\n--- 7. Genuinely running: a readiness check with four conditions ---\n{'all_checks_satisfied': False, 'failing': ['source_verified']}\n{'all_checks_satisfied': True, 'failing': []}\na table whose source has not been verified failed the check by name, and when all four conditions held the result was true, which only confirms four application booleans and is not a compliance finding with any framework"
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
    "headingEn": "Experiment 1: Metrics for two fictional evaluation records",
    "headingKn": "ಪ್ರಯೋಗ 1: Metrics for two fictional evaluation records",
    "bodyEn": "What it ran: Metrics for two fictional evaluation records. What the lab concluded: the two records give 78 and 80 percent success, 25 and 15 percent intervention and 120 and 150 dollars per task, and the threshold status stays undetermined in both because these numbers say nothing about task representativeness, a human baseline or the exact criterion",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Metrics for two fictional evaluation records. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the two records give 78 and 80 percent success, 25 and 15 percent intervention and 120 and 150 dollars per task, and the threshold status stays undetermined in both because these numbers say nothing about task representativeness, a human baseline or the exact criterion"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: metrics for two fictional evaluation records ---\nresearch-agent-demo  success 78% | intervention 25.0% | cost per task $120 | verified False | threshold undetermined\nResearchAgent-X      success 80% | intervention 15.0% | cost per task $150 | verified False | threshold undetermined"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Invalid records are refused",
    "headingKn": "ಪ್ರಯೋಗ 2: Invalid records are refused",
    "bodyEn": "What it ran: Invalid records are refused. What the lab concluded: a zero task count, more successes than tasks, more interventions than tasks and a negative cost were each refused before any rate was computed",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Invalid records are refused. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a zero task count, more successes than tasks, more interventions than tasks and a negative cost were each refused before any rate was computed"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: invalid records are refused ---\nValueError: Task count must be positive\nValueError: Invalid successful task count\nValueError: Invalid intervention count\nValueError: Cost cannot be negative"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: The performance-gap detector",
    "headingKn": "ಪ್ರಯೋಗ 3: The performance-gap detector",
    "bodyEn": "What it ran: The performance-gap detector. What the lab concluded: gaps of 0.37 and 0.40 recommended an investigation and a gap of 0.03 or a negative gap did not, and sandbagging_proven was false in every row; a large gap is a reason to look for differences in prompts, tools or tasks as well as for strategic underperformance",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The performance-gap detector. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): gaps of 0.37 and 0.40 recommended an investigation and a gap of 0.03 or a negative gap did not, and sandbagging_proven was false in every row; a large gap is a reason to look for differences in prompts, tools or tasks as well as for strategic underperformance"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: the performance-gap detector ---\nnormal 0.88 evaluation 0.51 -> {'performance_gap': 0.37, 'investigation_recommended': True, 'sandbagging_proven': False}\nnormal 0.85 evaluation 0.45 -> {'performance_gap': 0.4, 'investigation_recommended': True, 'sandbagging_proven': False}\nnormal 0.85 evaluation 0.82 -> {'performance_gap': 0.03, 'investigation_recommended': False, 'sandbagging_proven': False}\nnormal 0.60 evaluation 0.65 -> {'performance_gap': -0.05, 'investigation_recommended': False, 'sandbagging_proven': False}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: How often chance alone gives a gap of 0.20",
    "headingKn": "ಪ್ರಯೋಗ 4: How often chance alone gives a gap of 0.20",
    "bodyEn": "What it ran: How often chance alone gives a gap of 0.20. What the lab concluded: with ten tasks per side two identical models at 0.85 showed a gap of 0.20 or more in 0.115 of 10000 trials, 0.023 at 25 tasks, 0.002 at 50 and none from 100, while a model that really dropped to 0.45 showed it in 0.856 of trials at ten tasks and in 0.986 at 50; the investigation threshold of 0.20 is the lab's own number, and these probabilities are written by the author",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: How often chance alone gives a gap of 0.20. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): with ten tasks per side two identical models at 0.85 showed a gap of 0.20 or more in 0.115 of 10000 trials, 0.023 at 25 tasks, 0.002 at 50 and none from 100, while a model that really dropped to 0.45 showed it in 0.856 of trials at ten tasks and in 0.986 at 50; the investigation threshold of 0.20 is the lab's own number, and these probabilities are written by the author"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely measuring: how often chance alone gives a gap of 0.20 ---\ntasks per side   both at 0.85    0.85 against 0.45\n            10          0.115                0.856\n            25          0.023                0.942\n            50          0.002                0.986\n           100          0.000                0.999\n           400          0.000                1.000"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Measured below the line, actually above it",
    "headingKn": "ಪ್ರಯೋಗ 5: Measured below the line, actually above it",
    "bodyEn": "What it ran: Measured below the line, actually above it. What the lab concluded: a measurement below the threshold would be read as below, while the real capability is above it, which is the inequality the lesson writes as measured below threshold and actual at or above it; nothing in one score reveals which situation applies, and the numbers here are chosen to show the shape of the problem",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Measured below the line, actually above it. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a measurement below the threshold would be read as below, while the real capability is above it, which is the inequality the lesson writes as measured below threshold and actual at or above it; nothing in one score reveals which situation applies, and the numbers here are chosen to show the shape of the problem"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: measured below the line, actually above it ---\nthreshold 0.6 | actual capability 0.82 | measured under evaluation 0.45 | below the line on the measurement: True | above it in fact: True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: A policy version diff",
    "headingKn": "ಪ್ರಯೋಗ 6: A policy version diff",
    "bodyEn": "What it ran: A policy version diff. What the lab concluded: a label change and a newly added capability both show up as differences, and a diff of labels would miss a changed threshold definition under an unchanged label; the entries are hypothetical and do not claim that any real capability changed category",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A policy version diff. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a label change and a newly added capability both show up as differences, and a diff of labels would miss a changed threshold definition under an unchanged label; the entries are hypothetical and do not claim that any real capability changed category"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: a policy version diff ---\n{'capability': 'capability_x', 'old': 'Research', 'new': 'Tracked'}\n{'capability': 'capability_z', 'old': None, 'new': 'Research'}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 7: A readiness check with four conditions",
    "headingKn": "ಪ್ರಯೋಗ 7: A readiness check with four conditions",
    "bodyEn": "What it ran: A readiness check with four conditions. What the lab concluded: a table whose source has not been verified failed the check by name, and when all four conditions held the result was true, which only confirms four application booleans and is not a compliance finding with any framework",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A readiness check with four conditions. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a table whose source has not been verified failed the check by name, and when all four conditions held the result was true, which only confirms four application booleans and is not a compliance finding with any framework"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 7. Genuinely running: a readiness check with four conditions ---\n{'all_checks_satisfied': False, 'failing': ['source_verified']}\n{'all_checks_satisfied': True, 'failing': []}"
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
    "headingEn": "Genuinely Found: Metrics, Invalid Records and Gaps",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮಾಪನಗಳು, ಅಮಾನ್ಯ ದಾಖಲೆಗಳು ಮತ್ತು ಅಂತರಗಳು",
    "bodyEn": "Section 1: the 78 of 100 record gave 78 percent success, 25.0 percent intervention and $120 per task, the 96 of 120 record gave 80 percent, 15.0 percent and $150, and both stayed undetermined on the threshold. Section 2: a zero task count, too many successes, too many interventions and a negative cost were each refused. Section 3: gaps of 0.37 and 0.40 recommended an investigation, gaps of 0.03 and -0.05 did not, and sandbagging_proven was False in all four.",
    "bodyKn": "ವಿಭಾಗ 1: 100 ರಲ್ಲಿ 78 ದಾಖಲೆ 78 ಶೇಕಡಾ ಯಶಸ್ಸು, 25.0 ಶೇಕಡಾ ಹಸ್ತಕ್ಷೇಪ ಮತ್ತು ಪ್ರತಿ ಕಾರ್ಯಕ್ಕೆ $120 ನೀಡಿತು, 120 ರಲ್ಲಿ 96 ದಾಖಲೆ 80 ಶೇಕಡಾ, 15.0 ಶೇಕಡಾ ಮತ್ತು $150 ನೀಡಿತು, ಮತ್ತು ಎರಡೂ ಮಿತಿಯ ಮೇಲೆ ನಿರ್ಧರಿಸದೆ ಉಳಿದವು. ವಿಭಾಗ 2: ಸೊನ್ನೆ ಕಾರ್ಯ ಎಣಿಕೆ, ತುಂಬಾ ಯಶಸ್ಸು, ತುಂಬಾ ಹಸ್ತಕ್ಷೇಪ ಮತ್ತು ಋಣ ವೆಚ್ಚ ಪ್ರತಿಯೊಂದೂ ನಿರಾಕರಿಸಲ್ಪಟ್ಟವು. ವಿಭಾಗ 3: 0.37 ಮತ್ತು 0.40 ಅಂತರಗಳು ತನಿಖೆ ಶಿಫಾರಸು ಮಾಡಿದವು, 0.03 ಮತ್ತು -0.05 ಮಾಡಲಿಲ್ಲ, ಮತ್ತು ನಾಲ್ಕರಲ್ಲೂ sandbagging_proven False ಆಗಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Chance, Measured Against Actual and Diff",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅವಕಾಶ, ಅಳೆದದ್ದು ವಿರುದ್ಧ ವಾಸ್ತವ ಮತ್ತು ವ್ಯತ್ಯಾಸ",
    "bodyEn": "Section 4: two identical models at 0.85 showed a gap of 0.20 or more in 0.115 of 10000 trials at 10 tasks, 0.023 at 25, 0.002 at 50 and 0.000 from 100, while a model at 0.45 showed it in 0.856, 0.942, 0.986, 0.999 and 1.000 of trials at 10, 25, 50, 100 and 400 tasks. Section 5: against a threshold of 0.6, a measured 0.45 was below it while the actual 0.82 was above. Section 6: the diff reported capability_x changing from Research to Tracked and capability_z being added. Section 7: the readiness check named source_verified as failing and passed when all four held.",
    "bodyKn": "ವಿಭಾಗ 4: 0.85 ನ ಒಂದೇ ರೀತಿಯ ಎರಡು ಮಾದರಿಗಳು 10000 ಪ್ರಯೋಗಗಳಲ್ಲಿ 10 ಕಾರ್ಯಗಳಲ್ಲಿ 0.115, 25 ರಲ್ಲಿ 0.023, 50 ರಲ್ಲಿ 0.002 ಮತ್ತು 100 ರಿಂದ 0.000 ರಲ್ಲಿ 0.20 ಅಥವಾ ಹೆಚ್ಚು ಅಂತರ ತೋರಿಸಿದವು, ಆದರೆ 0.45 ರ ಮಾದರಿ 10, 25, 50, 100 ಮತ್ತು 400 ಕಾರ್ಯಗಳಲ್ಲಿ ಅದನ್ನು 0.856, 0.942, 0.986, 0.999 ಮತ್ತು 1.000 ರಲ್ಲಿ ತೋರಿಸಿತು. ವಿಭಾಗ 5: ಮಿತಿ 0.6 ವಿರುದ್ಧ ಅಳೆದ 0.45 ಕೆಳಗಿತ್ತು ಆದರೆ ನಿಜವಾದ 0.82 ಮೇಲಿತ್ತು. ವಿಭಾಗ 6: ವ್ಯತ್ಯಾಸ capability_x Research ನಿಂದ Tracked ಗೆ ಬದಲಾಗಿದ್ದು ಮತ್ತು capability_z ಸೇರಿದ್ದನ್ನು ವರದಿ ಮಾಡಿತು. ವಿಭಾಗ 7: ಸಿದ್ಧತೆ ಪರಿಶೀಲನೆ source_verified ವಿಫಲ ಎಂದು ಹೆಸರಿಸಿತು ಮತ್ತು ನಾಲ್ಕೂ ಇದ್ದಾಗ ಪಾಸ್ ಆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A gap, a score and a check list each look like evidence while resting on assumptions about sample size, task match and who verified what, so each is reported together with what it cannot show.",
    "bodyKn": "ಅಂತರ, ಅಂಕ ಮತ್ತು ಪರಿಶೀಲನಾ ಪಟ್ಟಿ ಪ್ರತಿಯೊಂದೂ ಮಾದರಿ ಗಾತ್ರ, ಕಾರ್ಯ ಹೊಂದಾಣಿಕೆ ಮತ್ತು ಯಾರು ಏನು ಪರಿಶೀಲಿಸಿದರು ಎಂಬ ಊಹೆಗಳ ಮೇಲೆ ನಿಂತು ಸಾಕ್ಷ್ಯದಂತೆ ಕಾಣುತ್ತವೆ, ಆದ್ದರಿಂದ ಪ್ರತಿಯೊಂದನ್ನು ಅದು ತೋರಿಸಲಾಗದ್ದರೊಂದಿಗೆ ವರದಿ ಮಾಡಲಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a gap of 0.20 between two runs means something is wrong.\" With ten tasks per side two identical models showed it in 0.115 of trials.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಎರಡು ಓಟಗಳ ನಡುವಿನ 0.20 ಅಂತರ ಎಂದರೆ ಏನೋ ತಪ್ಪಿದೆ.\" ಪ್ರತಿ ಬದಿಗೆ ಹತ್ತು ಕಾರ್ಯಗಳಿದ್ದಾಗ ಒಂದೇ ರೀತಿಯ ಎರಡು ಮಾದರಿಗಳು ಅದನ್ನು 0.115 ಪ್ರಯೋಗಗಳಲ್ಲಿ ತೋರಿಸಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Performance gap: a difference between two conditions. Sandbagging: strategic underperformance. Measured against actual: what a test shows against what the model can do. Readiness check: a list of conditions.",
    "bodyKn": "ಕಾರ್ಯಕ್ಷಮತೆ ಅಂತರ: ಎರಡು ಸ್ಥಿತಿಗಳ ನಡುವಿನ ವ್ಯತ್ಯಾಸ. Sandbagging: ತಂತ್ರಗಾರಿಕೆಯ ಕಡಿಮೆ ಸಾಧನೆ. ಅಳೆದದ್ದು ವಿರುದ್ಧ ವಾಸ್ತವ: ಪರೀಕ್ಷೆ ತೋರಿಸುವುದು ಮತ್ತು ಮಾದರಿ ಮಾಡಬಲ್ಲದ್ದು. ಸಿದ್ಧತೆ ಪರಿಶೀಲನೆ: ಷರತ್ತುಗಳ ಪಟ್ಟಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Invalid records were refused before rates were computed. 2) Large gaps recommended investigation and never proved anything. 3) Identical models showed a 0.20 gap in 0.115 of trials at 10 tasks. 4) A real drop was seen in 0.986 of trials at 50 tasks. 5) A readiness check only confirms its booleans.",
    "bodyKn": "1) ಅಮಾನ್ಯ ದಾಖಲೆಗಳು ದರ ಲೆಕ್ಕ ಹಾಕುವ ಮೊದಲು ನಿರಾಕರಿಸಲ್ಪಟ್ಟವು. 2) ದೊಡ್ಡ ಅಂತರಗಳು ತನಿಖೆ ಶಿಫಾರಸು ಮಾಡಿದವು ಮತ್ತು ಏನನ್ನೂ ಸಾಬೀತು ಮಾಡಲಿಲ್ಲ. 3) ಒಂದೇ ರೀತಿಯ ಮಾದರಿಗಳು 10 ಕಾರ್ಯಗಳಲ್ಲಿ 0.115 ಪ್ರಯೋಗಗಳಲ್ಲಿ 0.20 ಅಂತರ ತೋರಿಸಿದವು. 4) ನಿಜ ಕುಸಿತ 50 ಕಾರ್ಯಗಳಲ್ಲಿ 0.986 ಪ್ರಯೋಗಗಳಲ್ಲಿ ಕಂಡಿತು. 5) ಸಿದ್ಧತೆ ಪರಿಶೀಲನೆ ತನ್ನ ಬೂಲಿಯನ್‌ಗಳನ್ನು ಮಾತ್ರ ದೃಢೀಕರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How often did two identical models at 0.85 show a gap of 0.20 or more with ten tasks per side?",
      "qKn": "ಪ್ರತಿ ಬದಿಗೆ ಹತ್ತು ಕಾರ್ಯಗಳಿದ್ದಾಗ 0.85 ರ ಒಂದೇ ರೀತಿಯ ಎರಡು ಮಾದರಿಗಳು 0.20 ಅಥವಾ ಹೆಚ್ಚು ಅಂತರ ಎಷ್ಟು ಬಾರಿ ತೋರಿಸಿದವು?",
      "opts": [
       "In 0.115 of trials",
       "Never",
       "In every trial",
       "In 0.5 of trials"
      ],
      "optsKn": [
       "0.115 ಪ್ರಯೋಗಗಳಲ್ಲಿ",
       "ಎಂದಿಗೂ ಇಲ್ಲ",
       "ಪ್ರತಿ ಪ್ರಯೋಗದಲ್ಲಿ",
       "0.5 ಪ್ರಯೋಗಗಳಲ್ಲಿ"
      ],
      "correct": 0
     },
     {
      "q": "What cost per task did the 96 of 120 record give?",
      "qKn": "120 ರಲ್ಲಿ 96 ದಾಖಲೆ ಪ್ರತಿ ಕಾರ್ಯಕ್ಕೆ ಯಾವ ವೆಚ್ಚ ನೀಡಿತು?",
      "opts": [
       "$150",
       "$120",
       "$180",
       "$18,000"
      ],
      "optsKn": [
       "$150",
       "$120",
       "$180",
       "$18,000"
      ],
      "correct": 0
     },
     {
      "q": "What was sandbagging_proven in every row of the gap detector?",
      "qKn": "ಅಂತರ ಪತ್ತೆಕಾರಕದ ಪ್ರತಿ ಸಾಲಿನಲ್ಲಿ sandbagging_proven ಏನಾಗಿತ್ತು?",
      "opts": [
       "False",
       "True",
       "None",
       "It depended on the gap"
      ],
      "optsKn": [
       "False",
       "True",
       "None",
       "ಅದು ಅಂತರವನ್ನು ಅವಲಂಬಿಸಿತ್ತು"
      ],
      "correct": 0
     },
     {
      "q": "Which check failed in the first readiness example?",
      "qKn": "ಮೊದಲ ಸಿದ್ಧತೆ ಉದಾಹರಣೆಯಲ್ಲಿ ಯಾವ ಪರಿಶೀಲನೆ ವಿಫಲವಾಯಿತು?",
      "opts": [
       "source_verified",
       "human_authorized",
       "evaluation_verified",
       "safeguards_reviewed"
      ],
      "optsKn": [
       "source_verified",
       "human_authorized",
       "evaluation_verified",
       "safeguards_reviewed"
      ],
      "correct": 0
     },
     {
      "q": "Why can a measurement below a threshold hide a capability above it?",
      "qKn": "ಮಿತಿಗಿಂತ ಕೆಳಗಿನ ಮಾಪನ ಮೇಲಿನ ಸಾಮರ್ಥ್ಯ ಏಕೆ ಮರೆಮಾಡಬಹುದು?",
      "opts": [
       "A model can score lower under evaluation than it can actually do",
       "Thresholds are random",
       "Scores are always exact",
       "Records are always verified"
      ],
      "optsKn": [
       "ಮಾದರಿ ವಾಸ್ತವದಲ್ಲಿ ಮಾಡಬಲ್ಲದ್ದಕ್ಕಿಂತ ಮೌಲ್ಯಮಾಪನದಲ್ಲಿ ಕಡಿಮೆ ಅಂಕ ಪಡೆಯಬಹುದು",
       "ಮಿತಿಗಳು ಯಾದೃಚ್ಛಿಕ",
       "ಅಂಕಗಳು ಯಾವಾಗಲೂ ನಿಖರ",
       "ದಾಖಲೆಗಳು ಯಾವಾಗಲೂ ಪರಿಶೀಲಿತ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
