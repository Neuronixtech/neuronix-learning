module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215c5",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Anthropic Responsible Scaling Policy v3.0 (Part 1 of 3) — Thresholds and Validation",
 "titleKn": "Anthropic Responsible Scaling Policy v3.0 (ಭಾಗ 1 / 3) — ಮಿತಿಗಳು ಮತ್ತು ಮೌಲ್ಯೀಕರಣ",
 "desc": "Build a three-state threshold evaluator, validate its inputs and test the boundary.",
 "descKn": "ಮೂರು-ಸ್ಥಿತಿ ಮಿತಿ ಮೌಲ್ಯಮಾಪಕ ನಿರ್ಮಿಸಿ, ಅದರ ಇನ್‌ಪುಟ್ ಮೌಲ್ಯೀಕರಿಸಿ ಮತ್ತು ಗಡಿ ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Return three states.",
  "Validate measurements.",
  "Test the boundary.",
  "Check case sections.",
  "Keep tier and mandatory apart."
 ],
 "objectivesKn": [
  "ಮೂರು ಸ್ಥಿತಿ ಹಿಂತಿರುಗಿಸಿ.",
  "ಮಾಪನ ಮೌಲ್ಯೀಕರಿಸಿ.",
  "ಗಡಿ ಪರೀಕ್ಷಿಸಿ.",
  "case ವಿಭಾಗ ಪರಿಶೀಲಿಸಿ.",
  "tier ಮತ್ತು mandatory ಪ್ರತ್ಯೇಕವಾಗಿಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Anthropic Responsible Scaling Policy v3.0 (Part 1 of 3)",
    "textKn": "Anthropic Responsible Scaling Policy v3.0 (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a three-state threshold evaluator, input validation, the NaN comparison trap, boundary behaviour of >= against >, one failing criterion at a time, affirmative-case section checking and mitigations with separate tier and mandatory fields. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind Anthropic RSP v3.0 (a three-state threshold evaluator, input validation, a deployment decision over case, mitigation, review and other gates, confidence intervals and a bootstrap, evidence digests, review binding, activity requirements, an audit chain and a roadmap check), not the real software, and the thresholds, section names, activity table and the 79-of-100 outcomes are invented teaching values, the review fields are strings, and nothing here decides anything about a real model or reproduces an Anthropic process, so no real LLM behaviour is measured. The original code/main.py was not supplied and the lesson code was shown only in fragments, so the labs are our own implementation and the outputs were produced by running them. The lesson description of RSP v3.0, its February 24, 2026 effective date, the removal of the pause commitment, the AI R&D-4 threshold, Frontier Safety Roadmaps, Risk Reports and the SaferAI scores is conceptual or cited and was not checked here. The lesson itself says the SaferAI 2.2 to 1.9 downgrade was reported in October 2024 and cannot be tied to v3.0, and it notes that later versions of the policy exist, so this module treats v3.0 as a historical version and teaches the procedure, not the policy text. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಮೂರು-ಸ್ಥಿತಿ ಮಿತಿ ಮೌಲ್ಯಮಾಪಕ, ಇನ್‌ಪುಟ್ ಮೌಲ್ಯೀಕರಣ, NaN ಹೋಲಿಕೆ ಬಲೆ, >= ಮತ್ತು > ಗಡಿ ವರ್ತನೆ, ಒಂದೊಂದಾಗಿ ವಿಫಲವಾಗುವ ಮಾನದಂಡ, ದೃಢೀಕರಣ-case ವಿಭಾಗ ಪರಿಶೀಲನೆ ಮತ್ತು ಪ್ರತ್ಯೇಕ tier ಹಾಗೂ mandatory ಕ್ಷೇತ್ರಗಳಿರುವ ತಗ್ಗಿಸುವಿಕೆಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು Anthropic RSP v3.0 (ಮೂರು-ಸ್ಥಿತಿ ಮಿತಿ ಮೌಲ್ಯಮಾಪಕ, ಇನ್‌ಪುಟ್ ಮೌಲ್ಯೀಕರಣ, case, ತಗ್ಗಿಸುವಿಕೆ, ವಿಮರ್ಶೆ ಮತ್ತು ಇತರ gates ಮೇಲೆ ನಿಯೋಜನೆ ನಿರ್ಧಾರ, ವಿಶ್ವಾಸ ಅಂತರಗಳು ಮತ್ತು bootstrap, ಸಾಕ್ಷ್ಯ digest, ವಿಮರ್ಶೆ ಬಂಧ, ಚಟುವಟಿಕೆ ಅವಶ್ಯಕತೆಗಳು, ಲೆಕ್ಕಪರಿಶೋಧನೆ ಸರಪಳಿ ಮತ್ತು roadmap ಪರಿಶೀಲನೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಮಿತಿಗಳು, ವಿಭಾಗ ಹೆಸರುಗಳು, ಚಟುವಟಿಕೆ ಟೇಬಲ್ ಮತ್ತು 100 ರಲ್ಲಿ 79 ಫಲಿತಾಂಶಗಳು ಕಲ್ಪಿತ ಬೋಧನಾ ಮೌಲ್ಯಗಳು, ವಿಮರ್ಶೆ ಕ್ಷೇತ್ರಗಳು ಸ್ಟ್ರಿಂಗ್‌ಗಳು, ಮತ್ತು ಇಲ್ಲಿನ ಯಾವುದೂ ನಿಜ ಮಾದರಿ ಬಗ್ಗೆ ಏನನ್ನೂ ನಿರ್ಧರಿಸುವುದಿಲ್ಲ ಅಥವಾ Anthropic ಪ್ರಕ್ರಿಯೆಯನ್ನು ಪುನರುತ್ಪಾದಿಸುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ ಮತ್ತು lesson ಕೋಡ್ ತುಣುಕುಗಳಲ್ಲಿ ಮಾತ್ರ ತೋರಿಸಲ್ಪಟ್ಟಿತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ ಮತ್ತು ಔಟ್‌ಪುಟ್ ಅನ್ನು ಅವನ್ನು ಓಡಿಸಿ ಪಡೆಯಲಾಗಿದೆ. RSP v3.0, ಅದರ ಫೆಬ್ರವರಿ 24, 2026 ಜಾರಿ ದಿನಾಂಕ, ವಿರಾಮ ಬದ್ಧತೆ ತೆಗೆಯುವಿಕೆ, AI R&D-4 ಮಿತಿ, Frontier Safety Roadmaps, Risk Reports ಮತ್ತು SaferAI ಅಂಕಗಳ ಬಗ್ಗೆ lesson ವಿವರಣೆ ಪರಿಕಲ್ಪನಾತ್ಮಕ ಅಥವಾ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಿಲ್ಲ. SaferAI 2.2 ರಿಂದ 1.9 ಇಳಿಕೆ ಅಕ್ಟೋಬರ್ 2024 ರಲ್ಲಿ ವರದಿಯಾಗಿತ್ತು ಮತ್ತು v3.0 ಗೆ ಜೋಡಿಸಲಾಗದು ಎಂದು lesson ಸ್ವತಃ ಹೇಳುತ್ತದೆ, ಮತ್ತು ನೀತಿಯ ನಂತರದ ಆವೃತ್ತಿಗಳಿವೆ ಎಂದು ಗಮನಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಈ ಮಾಡ್ಯೂಲ್ v3.0 ಅನ್ನು ಐತಿಹಾಸಿಕ ಆವೃತ್ತಿಯಾಗಿ ಪರಿಗಣಿಸಿ ನೀತಿ ಪಠ್ಯವನ್ನಲ್ಲ ವಿಧಾನವನ್ನು ಕಲಿಸುತ್ತದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Not Demonstrated Is Not the Same as Below",
    "textKn": "ಪ್ರದರ್ಶಿಸಿಲ್ಲ ಎಂದರೆ ಕೆಳಗಿದೆ ಎಂದಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Thresholds, Validation and the Operator That Matters",
    "headingKn": "ಮಿತಿಗಳು, ಮೌಲ್ಯೀಕರಣ ಮತ್ತು ಮುಖ್ಯವಾದ ಆಪರೇಟರ್",
    "bodyEn": "This part builds an evaluator that returns BELOW, CROSSED or INSUFFICIENT_EVIDENCE from four invented capability measurements and four invented criteria. It shows why NaN must not be read as below, which values count as valid, what happens exactly on the thresholds with >= and with >, and that each missed criterion alone gives BELOW. It then checks the sections of an affirmative case, and keeps the tier of a mitigation apart from whether it is mandatory. The numbers are teaching values and are not Anthropic AI R&D-4 criteria.",
    "bodyKn": "ಈ ಭಾಗ ನಾಲ್ಕು ಕಲ್ಪಿತ ಸಾಮರ್ಥ್ಯ ಮಾಪನಗಳು ಮತ್ತು ನಾಲ್ಕು ಕಲ್ಪಿತ ಮಾನದಂಡಗಳಿಂದ BELOW, CROSSED ಅಥವಾ INSUFFICIENT_EVIDENCE ಹಿಂತಿರುಗಿಸುವ ಮೌಲ್ಯಮಾಪಕ ನಿರ್ಮಿಸುತ್ತದೆ. NaN ಅನ್ನು below ಎಂದು ಓದಬಾರದು ಏಕೆ, ಯಾವ ಮೌಲ್ಯಗಳು ಮಾನ್ಯ, ಮಿತಿಗಳ ಮೇಲೆಯೇ >= ಮತ್ತು > ನೊಂದಿಗೆ ಏನಾಗುತ್ತದೆ, ಮತ್ತು ತಪ್ಪಿದ ಪ್ರತಿ ಮಾನದಂಡ ಮಾತ್ರ BELOW ನೀಡುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ. ನಂತರ ದೃಢೀಕರಣ case ನ ವಿಭಾಗಗಳನ್ನು ಪರಿಶೀಲಿಸಿ, ತಗ್ಗಿಸುವಿಕೆಯ tier ಅನ್ನು ಅದು ಕಡ್ಡಾಯವೇ ಎಂಬುದರಿಂದ ಬೇರ್ಪಡಿಸಿ ಇಡುತ್ತದೆ. ಸಂಖ್ಯೆಗಳು ಬೋಧನಾ ಮೌಲ್ಯಗಳು ಮತ್ತು Anthropic AI R&D-4 ಮಾನದಂಡಗಳಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Three States, Not Two",
    "headingKn": "ಎರಡಲ್ಲ, ಮೂರು ಸ್ಥಿತಿಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">missing evidence is not a below-threshold finding</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">BELOW</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">evidence supports it</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">CROSSED</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">criteria all met</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">INSUFFICIENT</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">cannot tell yet</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">not a boolean</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">unknown stays unknown</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">missing evidence is not a below-threshold finding</text></svg>",
    "captionEn": "Below, crossed and unknown are different results with different consequences.",
    "captionKn": "Below, crossed ಮತ್ತು unknown ಬೇರೆ ಪರಿಣಾಮಗಳಿರುವ ಬೇರೆ ಫಲಿತಾಂಶಗಳು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The criteria and states",
    "headingKn": "ಮಾನದಂಡಗಳು ಮತ್ತು ಸ್ಥಿತಿಗಳು",
    "headers": [
     "Item",
     "Value in the lab"
    ],
    "rows": [
     [
      "task fraction",
      "at least 0.50"
     ],
     [
      "success rate",
      "at least 0.80"
     ],
     [
      "cost ratio",
      "at most 1.00"
     ],
     [
      "autonomy score",
      "at least 0.75"
     ],
     [
      "invalid or missing value",
      "INSUFFICIENT_EVIDENCE"
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
    "filename": "rp_1.py",
    "headingEn": "Evaluator, validation, sections and mitigations",
    "headingKn": "ಮೌಲ್ಯಮಾಪಕ, ಮೌಲ್ಯೀಕರಣ, ವಿಭಾಗಗಳು ಮತ್ತು ತಗ್ಗಿಸುವಿಕೆಗಳು",
    "descEn": "valid_fraction refuses None, booleans, strings, NaN and out-of-range values, evaluate joins four conditions with and, evaluate_strict uses the strict operators, and blocking_mitigations tests mandatory and verified separately from tier.",
    "descKn": "valid_fraction None, ಬೂಲಿಯನ್, ಸ್ಟ್ರಿಂಗ್, NaN ಮತ್ತು ವ್ಯಾಪ್ತಿ ಹೊರಗಿನ ಮೌಲ್ಯ ನಿರಾಕರಿಸುತ್ತದೆ, evaluate ನಾಲ್ಕು ಷರತ್ತುಗಳನ್ನು and ನಿಂದ ಜೋಡಿಸುತ್ತದೆ, evaluate_strict ಕಟ್ಟುನಿಟ್ಟಾದ ಆಪರೇಟರ್ ಬಳಸುತ್ತದೆ, ಮತ್ತು blocking_mitigations ಕಡ್ಡಾಯ ಮತ್ತು ಪರಿಶೀಲಿತವನ್ನು tier ನಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿ ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
    "code": "class ThresholdStatus(str, Enum):\n    BELOW = \"BELOW\"\n    CROSSED = \"CROSSED\"\n    INSUFFICIENT_EVIDENCE = \"INSUFFICIENT_EVIDENCE\"\n\n\n@dataclass(frozen=True)\nclass Measurements:\n    research_task_fraction: Optional[float]\n    task_success_rate: Optional[float]\n    cost_ratio: Optional[float]\n    autonomy_score: Optional[float]\n\n\n@dataclass(frozen=True)\nclass Criteria:\n    minimum_task_fraction: float = 0.50\n    minimum_success_rate: float = 0.80\n    maximum_cost_ratio: float = 1.00\n    minimum_autonomy_score: float = 0.75\n\n\ndef valid_fraction(v):\n    return v is not None and not isinstance(v, bool) and isinstance(v, (int, float)) and math.isfinite(v) and 0.0 <= v <= 1.0\n\n\ndef valid_cost(v):\n    return v is not None and not isinstance(v, bool) and isinstance(v, (int, float)) and math.isfinite(v) and v >= 0.0\n\n\ndef evaluate(m, c=Criteria()):\n    if not (valid_fraction(m.research_task_fraction) and valid_fraction(m.task_success_rate) and valid_cost(m.cost_ratio) and valid_fraction(m.autonomy_score)):\n        return ThresholdStatus.INSUFFICIENT_EVIDENCE\n    crossed = (m.research_task_fraction >= c.minimum_task_fraction and m.task_success_rate >= c.minimum_success_rate\n               and m.cost_ratio <= c.maximum_cost_ratio and m.autonomy_score >= c.minimum_autonomy_score)\n    return ThresholdStatus.CROSSED if crossed else ThresholdStatus.BELOW\n\n\ndef evaluate_strict(m, c=Criteria()):\n    \"\"\"The same rule with > and < instead of >= and <=.\"\"\"\n    if not (valid_fraction(m.research_task_fraction) and valid_fraction(m.task_success_rate) and valid_cost(m.cost_ratio) and valid_fraction(m.autonomy_score)):\n        return ThresholdStatus.INSUFFICIENT_EVIDENCE\n    crossed = (m.research_task_fraction > c.minimum_task_fraction and m.task_success_rate > c.minimum_success_rate\n               and m.cost_ratio < c.maximum_cost_ratio and m.autonomy_score > c.minimum_autonomy_score)\n    return ThresholdStatus.CROSSED if crossed else ThresholdStatus.BELOW\n\n\ndef naive_evaluate(m, c=Criteria()):\n    \"\"\"No validation: failed comparisons are read as 'below'.\"\"\"\n    crossed = (m.research_task_fraction >= c.minimum_task_fraction and m.task_success_rate >= c.minimum_success_rate\n               and m.cost_ratio <= c.maximum_cost_ratio and m.autonomy_score >= c.minimum_autonomy_score)\n    return ThresholdStatus.CROSSED if crossed else ThresholdStatus.BELOW\n\n\nREQUIRED_CASE_SECTIONS = (\"capability_assessment\", \"misalignment_risk_analysis\", \"mitigation_plan\", \"verification_evidence\", \"residual_risk\", \"review_decision\")\n\n\ndef missing_case_sections(doc):\n    return [s for s in REQUIRED_CASE_SECTIONS if not isinstance(doc.get(s), str) or not doc[s].strip()]\n\n\n@dataclass(frozen=True)\nclass Mitigation:\n    identifier: str\n    tier: str\n    mandatory: bool\n    verified: bool\n\n\ndef blocking_mitigations(items):\n    return [m.identifier for m in items if m.mandatory and not m.verified]"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rp_1.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() shows the NaN trap, the validity table, five measurement sets, the boundary, the section check and the mitigation check.",
    "descKn": "main() NaN ಬಲೆ, ಮಾನ್ಯತೆ ಟೇಬಲ್, ಐದು ಮಾಪನ ಸೆಟ್, ಗಡಿ, ವಿಭಾಗ ಪರಿಶೀಲನೆ ಮತ್ತು ತಗ್ಗಿಸುವಿಕೆ ಪರಿಶೀಲನೆ ತೋರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: why NaN must not become BELOW\")\n    nan = float(\"nan\")\n    print(\"nan >= 0.8:\", nan >= 0.8, \"| nan < 0.8:\", nan < 0.8, \"| isnan:\", math.isnan(nan))\n    m_nan = Measurements(0.70, nan, 0.60, 0.85)\n    print(\"no validation:\", naive_evaluate(m_nan).value, \"| with validation:\", evaluate(m_nan).value)\n    print(\"both comparisons with NaN are False, so an evaluator that reads a failed comparison as below reports BELOW for a measurement that is not a number, while the validating one reports insufficient evidence\")\n\n    section(\"2. Genuinely running: what counts as a valid fraction\")\n    for v in (0.75, 1.0, -0.1, 1.2, None, nan, True, \"0.8\"):\n        print(f\"{v!r:8} -> {valid_fraction(v)}\")\n    print(\"True is refused although Python treats it as the integer 1, and a string, None, NaN and out-of-range numbers are all refused, so each of them leads to insufficient evidence and none to a threshold verdict\")\n\n    section(\"3. Genuinely running: two clear measurement sets and three without valid evidence\")\n    cases = [\n        (\"A below\", Measurements(0.30, 0.65, 1.40, 0.50)),\n        (\"B crossed\", Measurements(0.70, 0.90, 0.60, 0.85)),\n        (\"C success rate is NaN\", Measurements(0.70, nan, 0.60, 0.85)),\n        (\"D cost ratio missing\", Measurements(0.70, 0.90, None, 0.85)),\n        (\"E success rate 1.40\", Measurements(0.70, 1.40, 0.60, 0.85)),\n    ]\n    for label, m in cases:\n        print(f\"{label:24} -> {evaluate(m).value}\")\n    print(\"the first set failed all four illustrative criteria, the second met all four, and the three with a NaN, a missing value and a rate of 140 percent were all insufficient evidence; a missing cost ratio is not evidence that the model is expensive\")\n\n    section(\"4. Genuinely running: the boundary and one failing criterion at a time\")\n    edge = Measurements(0.50, 0.80, 1.00, 0.75)\n    print(\"exactly on every threshold: >= gives\", evaluate(edge).value, \"| > gives\", evaluate_strict(edge).value)\n    for label, m in (\n        (\"task fraction 0.499\", Measurements(0.499, 0.90, 0.60, 0.85)),\n        (\"success rate 0.799\", Measurements(0.70, 0.799, 0.60, 0.85)),\n        (\"cost ratio 1.001\", Measurements(0.70, 0.90, 1.001, 0.85)),\n        (\"autonomy 0.749\", Measurements(0.70, 0.90, 0.60, 0.749)),\n    ):\n        print(f\"{label:22} -> {evaluate(m).value}\")\n    print(\"a model sitting exactly on all four thresholds is crossed with >= and below with >, so the comparison operator is part of the policy, and each single missed criterion is enough to give BELOW because the four conditions are joined with and; BELOW is only meaningful if the measurements themselves were sound\")\n\n    section(\"5. Genuinely running: affirmative-case sections\")\n    doc = {\"capability_assessment\": \"Completed\", \"misalignment_risk_analysis\": \"Completed\", \"mitigation_plan\": \"Completed\", \"verification_evidence\": \"\", \"residual_risk\": \"Documented\", \"review_decision\": \"\"}\n    print(\"missing:\", missing_case_sections(doc))\n    print(\"filler text passes:\", missing_case_sections({s: \"Everything is safe\" for s in REQUIRED_CASE_SECTIONS}))\n    print(\"the check named the two empty sections, and a document that says everything is safe in every section passes it, which is why completeness of sections is not the quality of the argument\")\n\n    section(\"6. Genuinely running: tier and mandatory are separate fields\")\n    items = [\n        Mitigation(\"SECURITY_REVIEW\", \"UNILATERAL\", True, True),\n        Mitigation(\"INDUSTRY_STANDARD\", \"INDUSTRY_RECOMMENDATION\", False, False),\n        Mitigation(\"ADOPTED_SECURITY_STANDARD\", \"INDUSTRY_RECOMMENDATION\", True, False),\n    ]\n    print(\"blocking:\", blocking_mitigations(items))\n    print(\"a recommendation that nobody adopted did not block, and an industry recommendation that the organisation made mandatory and has not verified did, so deriving required from tier would have got the third item wrong\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: why NaN must not become BELOW ---\nnan >= 0.8: False | nan < 0.8: False | isnan: True\nno validation: BELOW | with validation: INSUFFICIENT_EVIDENCE\nboth comparisons with NaN are False, so an evaluator that reads a failed comparison as below reports BELOW for a measurement that is not a number, while the validating one reports insufficient evidence\n\n--- 2. Genuinely running: what counts as a valid fraction ---\n0.75     -> True\n1.0      -> True\n-0.1     -> False\n1.2      -> False\nNone     -> False\nnan      -> False\nTrue     -> False\n'0.8'    -> False\nTrue is refused although Python treats it as the integer 1, and a string, None, NaN and out-of-range numbers are all refused, so each of them leads to insufficient evidence and none to a threshold verdict\n\n--- 3. Genuinely running: two clear measurement sets and three without valid evidence ---\nA below                  -> BELOW\nB crossed                -> CROSSED\nC success rate is NaN    -> INSUFFICIENT_EVIDENCE\nD cost ratio missing     -> INSUFFICIENT_EVIDENCE\nE success rate 1.40      -> INSUFFICIENT_EVIDENCE\nthe first set failed all four illustrative criteria, the second met all four, and the three with a NaN, a missing value and a rate of 140 percent were all insufficient evidence; a missing cost ratio is not evidence that the model is expensive\n\n--- 4. Genuinely running: the boundary and one failing criterion at a time ---\nexactly on every threshold: >= gives CROSSED | > gives BELOW\ntask fraction 0.499    -> BELOW\nsuccess rate 0.799     -> BELOW\ncost ratio 1.001       -> BELOW\nautonomy 0.749         -> BELOW\na model sitting exactly on all four thresholds is crossed with >= and below with >, so the comparison operator is part of the policy, and each single missed criterion is enough to give BELOW because the four conditions are joined with and; BELOW is only meaningful if the measurements themselves were sound\n\n--- 5. Genuinely running: affirmative-case sections ---\nmissing: ['verification_evidence', 'review_decision']\nfiller text passes: []\nthe check named the two empty sections, and a document that says everything is safe in every section passes it, which is why completeness of sections is not the quality of the argument\n\n--- 6. Genuinely running: tier and mandatory are separate fields ---\nblocking: ['ADOPTED_SECURITY_STANDARD']\na recommendation that nobody adopted did not block, and an industry recommendation that the organisation made mandatory and has not verified did, so deriving required from tier would have got the third item wrong"
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
    "headingEn": "Experiment 1: Why NaN must not become BELOW",
    "headingKn": "ಪ್ರಯೋಗ 1: Why NaN must not become BELOW",
    "bodyEn": "What it ran: Why NaN must not become BELOW. What the lab concluded: both comparisons with NaN are False, so an evaluator that reads a failed comparison as below reports BELOW for a measurement that is not a number, while the validating one reports insufficient evidence",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Why NaN must not become BELOW. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): both comparisons with NaN are False, so an evaluator that reads a failed comparison as below reports BELOW for a measurement that is not a number, while the validating one reports insufficient evidence"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: why NaN must not become BELOW ---\nnan >= 0.8: False | nan < 0.8: False | isnan: True\nno validation: BELOW | with validation: INSUFFICIENT_EVIDENCE"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: What counts as a valid fraction",
    "headingKn": "ಪ್ರಯೋಗ 2: What counts as a valid fraction",
    "bodyEn": "What it ran: What counts as a valid fraction. What the lab concluded: True is refused although Python treats it as the integer 1, and a string, None, NaN and out-of-range numbers are all refused, so each of them leads to insufficient evidence and none to a threshold verdict",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: What counts as a valid fraction. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): True is refused although Python treats it as the integer 1, and a string, None, NaN and out-of-range numbers are all refused, so each of them leads to insufficient evidence and none to a threshold verdict"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: what counts as a valid fraction ---\n0.75     -> True\n1.0      -> True\n-0.1     -> False\n1.2      -> False\nNone     -> False\nnan      -> False\nTrue     -> False\n'0.8'    -> False"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Two clear measurement sets and three without valid evidence",
    "headingKn": "ಪ್ರಯೋಗ 3: Two clear measurement sets and three without valid evidence",
    "bodyEn": "What it ran: Two clear measurement sets and three without valid evidence. What the lab concluded: the first set failed all four illustrative criteria, the second met all four, and the three with a NaN, a missing value and a rate of 140 percent were all insufficient evidence; a missing cost ratio is not evidence that the model is expensive",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Two clear measurement sets and three without valid evidence. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the first set failed all four illustrative criteria, the second met all four, and the three with a NaN, a missing value and a rate of 140 percent were all insufficient evidence; a missing cost ratio is not evidence that the model is expensive"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: two clear measurement sets and three without valid evidence ---\nA below                  -> BELOW\nB crossed                -> CROSSED\nC success rate is NaN    -> INSUFFICIENT_EVIDENCE\nD cost ratio missing     -> INSUFFICIENT_EVIDENCE\nE success rate 1.40      -> INSUFFICIENT_EVIDENCE"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: The boundary and one failing criterion at a time",
    "headingKn": "ಪ್ರಯೋಗ 4: The boundary and one failing criterion at a time",
    "bodyEn": "What it ran: The boundary and one failing criterion at a time. What the lab concluded: a model sitting exactly on all four thresholds is crossed with >= and below with >, so the comparison operator is part of the policy, and each single missed criterion is enough to give BELOW because the four conditions are joined with and; BELOW is only meaningful if the measurements themselves were sound",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The boundary and one failing criterion at a time. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a model sitting exactly on all four thresholds is crossed with >= and below with >, so the comparison operator is part of the policy, and each single missed criterion is enough to give BELOW because the four conditions are joined with and; BELOW is only meaningful if the measurements themselves were sound"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: the boundary and one failing criterion at a time ---\nexactly on every threshold: >= gives CROSSED | > gives BELOW\ntask fraction 0.499    -> BELOW\nsuccess rate 0.799     -> BELOW\ncost ratio 1.001       -> BELOW\nautonomy 0.749         -> BELOW"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Affirmative-case sections",
    "headingKn": "ಪ್ರಯೋಗ 5: Affirmative-case sections",
    "bodyEn": "What it ran: Affirmative-case sections. What the lab concluded: the check named the two empty sections, and a document that says everything is safe in every section passes it, which is why completeness of sections is not the quality of the argument",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Affirmative-case sections. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the check named the two empty sections, and a document that says everything is safe in every section passes it, which is why completeness of sections is not the quality of the argument"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: affirmative-case sections ---\nmissing: ['verification_evidence', 'review_decision']\nfiller text passes: []"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: Tier and mandatory are separate fields",
    "headingKn": "ಪ್ರಯೋಗ 6: Tier and mandatory are separate fields",
    "bodyEn": "What it ran: Tier and mandatory are separate fields. What the lab concluded: a recommendation that nobody adopted did not block, and an industry recommendation that the organisation made mandatory and has not verified did, so deriving required from tier would have got the third item wrong",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Tier and mandatory are separate fields. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a recommendation that nobody adopted did not block, and an industry recommendation that the organisation made mandatory and has not verified did, so deriving required from tier would have got the third item wrong"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: tier and mandatory are separate fields ---\nblocking: ['ADOPTED_SECURITY_STANDARD']"
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
    "headingEn": "Genuinely Found: NaN, Validity and Measurement Sets",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: NaN, ಮಾನ್ಯತೆ ಮತ್ತು ಮಾಪನ ಸೆಟ್‌ಗಳು",
    "bodyEn": "Section 1: both comparisons with NaN were False, an evaluator without validation reported BELOW and the validating one reported INSUFFICIENT_EVIDENCE. Section 2: 0.75 and 1.0 were valid while -0.1, 1.2, None, NaN, True and the string 0.8 were not. Section 3: the failing set was BELOW, the passing set was CROSSED, and a NaN success rate, a missing cost ratio and a success rate of 1.40 were all INSUFFICIENT_EVIDENCE.",
    "bodyKn": "ವಿಭಾಗ 1: NaN ನೊಂದಿಗೆ ಎರಡೂ ಹೋಲಿಕೆಗಳು False ಆದವು, ಮೌಲ್ಯೀಕರಣ ಇಲ್ಲದ ಮೌಲ್ಯಮಾಪಕ BELOW ವರದಿ ಮಾಡಿತು ಮತ್ತು ಮೌಲ್ಯೀಕರಿಸುವುದು INSUFFICIENT_EVIDENCE ವರದಿ ಮಾಡಿತು. ವಿಭಾಗ 2: 0.75 ಮತ್ತು 1.0 ಮಾನ್ಯವಾಗಿದ್ದವು, -0.1, 1.2, None, NaN, True ಮತ್ತು ಸ್ಟ್ರಿಂಗ್ 0.8 ಅಲ್ಲ. ವಿಭಾಗ 3: ವಿಫಲ ಸೆಟ್ BELOW, ಪಾಸ್ ಆದ ಸೆಟ್ CROSSED, ಮತ್ತು NaN ಯಶಸ್ಸು ದರ, ಕಾಣೆಯಾದ ವೆಚ್ಚ ಅನುಪಾತ ಹಾಗೂ 1.40 ಯಶಸ್ಸು ದರ ಎಲ್ಲವೂ INSUFFICIENT_EVIDENCE."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Boundary, Sections and Mitigations",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಗಡಿ, ವಿಭಾಗಗಳು ಮತ್ತು ತಗ್ಗಿಸುವಿಕೆಗಳು",
    "bodyEn": "Section 4: exactly on every threshold gave CROSSED with >= and BELOW with >, and a miss of 0.001 in any one criterion gave BELOW. Section 5: the check named verification_evidence and review_decision as empty and a document saying everything is safe in every section passed it. Section 6: only ADOPTED_SECURITY_STANDARD blocked, the unadopted recommendation did not.",
    "bodyKn": "ವಿಭಾಗ 4: ಪ್ರತಿ ಮಿತಿಯ ಮೇಲೆಯೇ ಇದ್ದಾಗ >= ನೊಂದಿಗೆ CROSSED ಮತ್ತು > ನೊಂದಿಗೆ BELOW ಬಂತು, ಮತ್ತು ಯಾವುದೇ ಒಂದು ಮಾನದಂಡದಲ್ಲಿ 0.001 ತಪ್ಪು BELOW ನೀಡಿತು. ವಿಭಾಗ 5: ಪರಿಶೀಲನೆ verification_evidence ಮತ್ತು review_decision ಖಾಲಿ ಎಂದು ಹೆಸರಿಸಿತು ಮತ್ತು ಪ್ರತಿ ವಿಭಾಗದಲ್ಲಿ ಎಲ್ಲವೂ ಸುರಕ್ಷಿತ ಎಂದು ಹೇಳುವ ದಾಖಲೆ ಅದನ್ನು ಪಾಸ್ ಮಾಡಿತು. ವಿಭಾಗ 6: ADOPTED_SECURITY_STANDARD ಮಾತ್ರ ತಡೆಯಿತು, ಅಳವಡಿಸದ ಶಿಫಾರಸು ತಡೆಯಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A threshold verdict is only as good as its inputs, so an evaluator has to separate below from unknown, and the operator at the boundary and the tier of a mitigation are policy choices that a program must not guess.",
    "bodyKn": "ಮಿತಿ ತೀರ್ಪು ಅದರ ಇನ್‌ಪುಟ್‌ಗಳಷ್ಟೇ ಒಳ್ಳೆಯದು, ಆದ್ದರಿಂದ ಮೌಲ್ಯಮಾಪಕ below ಅನ್ನು unknown ನಿಂದ ಬೇರ್ಪಡಿಸಬೇಕು, ಮತ್ತು ಗಡಿಯಲ್ಲಿನ ಆಪರೇಟರ್ ಹಾಗೂ ತಗ್ಗಿಸುವಿಕೆಯ tier ನೀತಿ ಆಯ್ಕೆಗಳು ಮತ್ತು ಕಾರ್ಯಕ್ರಮ ಅವನ್ನು ಊಹಿಸಬಾರದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"no test showed the model crossing, so it is below.\" Without valid evidence the honest answer is insufficient evidence.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಯಾವ ಪರೀಕ್ಷೆಯೂ ಮಾದರಿ ದಾಟಿದೆ ಎಂದು ತೋರಿಸಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಅದು ಕೆಳಗಿದೆ.\" ಮಾನ್ಯ ಸಾಕ್ಷ್ಯ ಇಲ್ಲದಿದ್ದರೆ ಪ್ರಾಮಾಣಿಕ ಉತ್ತರ ಸಾಕಷ್ಟು ಸಾಕ್ಷ್ಯ ಇಲ್ಲ ಎಂಬುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "INSUFFICIENT_EVIDENCE: a verdict cannot be made. Boundary: the exact value where a rule changes. Tier: the kind of commitment. Mandatory: whether the organisation requires it.",
    "bodyKn": "INSUFFICIENT_EVIDENCE: ತೀರ್ಪು ನೀಡಲಾಗದು. ಗಡಿ: ನಿಯಮ ಬದಲಾಗುವ ನಿಖರ ಮೌಲ್ಯ. Tier: ಬದ್ಧತೆಯ ಪ್ರಕಾರ. Mandatory: ಸಂಸ್ಥೆ ಅದನ್ನು ಬೇಡುತ್ತದೆಯೇ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) NaN comparisons are both False. 2) Five invalid inputs all gave insufficient evidence. 3) A model exactly on the thresholds was CROSSED with >= and BELOW with >. 4) Filler text passed the section check. 5) An adopted recommendation blocked while an unadopted one did not.",
    "bodyKn": "1) NaN ಹೋಲಿಕೆಗಳು ಎರಡೂ False. 2) ಐದು ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್‌ಗಳು ಎಲ್ಲವೂ ಸಾಕಷ್ಟು ಸಾಕ್ಷ್ಯ ಇಲ್ಲ ಎಂದವು. 3) ಮಿತಿಗಳ ಮೇಲೆಯೇ ಇದ್ದ ಮಾದರಿ >= ನೊಂದಿಗೆ CROSSED ಮತ್ತು > ನೊಂದಿಗೆ BELOW. 4) ಭರ್ತಿ ಪಠ್ಯ ವಿಭಾಗ ಪರಿಶೀಲನೆ ಪಾಸ್ ಮಾಡಿತು. 5) ಅಳವಡಿಸಿದ ಶಿಫಾರಸು ತಡೆಯಿತು ಆದರೆ ಅಳವಡಿಸದ್ದು ತಡೆಯಲಿಲ್ಲ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did an evaluator without validation report for a NaN success rate?",
      "qKn": "NaN ಯಶಸ್ಸು ದರಕ್ಕೆ ಮೌಲ್ಯೀಕರಣ ಇಲ್ಲದ ಮೌಲ್ಯಮಾಪಕ ಏನು ವರದಿ ಮಾಡಿತು?",
      "opts": [
       "BELOW",
       "CROSSED",
       "INSUFFICIENT_EVIDENCE",
       "An error"
      ],
      "optsKn": [
       "BELOW (ಕೆಳಗೆ)",
       "CROSSED (ದಾಟಿದೆ)",
       "INSUFFICIENT_EVIDENCE (ಸಾಕಷ್ಟು ಸಾಕ್ಷ್ಯವಿಲ್ಲ)",
       "ಒಂದು ದೋಷ"
      ],
      "correct": 0
     },
     {
      "q": "What happened to a model exactly on every threshold when the strict operators were used?",
      "qKn": "ಕಟ್ಟುನಿಟ್ಟಾದ ಆಪರೇಟರ್ ಬಳಸಿದಾಗ ಪ್ರತಿ ಮಿತಿಯ ಮೇಲೆಯೇ ಇದ್ದ ಮಾದರಿಗೆ ಏನಾಯಿತು?",
      "opts": [
       "It was BELOW",
       "It was CROSSED",
       "It was insufficient",
       "It was approved"
      ],
      "optsKn": [
       "ಅದು BELOW ಆಯಿತು",
       "ಅದು CROSSED ಆಯಿತು",
       "ಅದು ಸಾಕಷ್ಟು ಇಲ್ಲ ಎಂದಾಯಿತು",
       "ಅದು ಅನುಮೋದಿತವಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "Which mitigation blocked in the lab?",
      "qKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಯಾವ ತಗ್ಗಿಸುವಿಕೆ ತಡೆಯಿತು?",
      "opts": [
       "ADOPTED_SECURITY_STANDARD, mandatory and unverified",
       "INDUSTRY_STANDARD, optional",
       "SECURITY_REVIEW, verified",
       "None"
      ],
      "optsKn": [
       "ADOPTED_SECURITY_STANDARD, ಕಡ್ಡಾಯ ಮತ್ತು ಪರಿಶೀಲಿಸದ್ದು",
       "INDUSTRY_STANDARD, ಐಚ್ಛಿಕ",
       "SECURITY_REVIEW, ಪರಿಶೀಲಿತ",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Which sections did the check report as empty in the example case?",
      "qKn": "ಉದಾಹರಣೆ case ನಲ್ಲಿ ಪರಿಶೀಲನೆ ಯಾವ ವಿಭಾಗಗಳು ಖಾಲಿ ಎಂದು ವರದಿ ಮಾಡಿತು?",
      "opts": [
       "verification_evidence and review_decision",
       "residual_risk only",
       "all six",
       "mitigation_plan only"
      ],
      "optsKn": [
       "verification_evidence ಮತ್ತು review_decision",
       "residual_risk ಮಾತ್ರ",
       "ಎಲ್ಲಾ ಆರು",
       "mitigation_plan ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "Why is the INSUFFICIENT_EVIDENCE state needed?",
      "qKn": "INSUFFICIENT_EVIDENCE ಸ್ಥಿತಿ ಏಕೆ ಬೇಕು?",
      "opts": [
       "Missing evidence must not be read as below the threshold",
       "It speeds up the program",
       "It replaces review",
       "It proves safety"
      ],
      "optsKn": [
       "ಕಾಣೆಯಾದ ಸಾಕ್ಷ್ಯವನ್ನು ಮಿತಿಗಿಂತ ಕೆಳಗೆ ಎಂದು ಓದಬಾರದು",
       "ಅದು ಕಾರ್ಯಕ್ರಮ ವೇಗಗೊಳಿಸುತ್ತದೆ",
       "ಅದು ವಿಮರ್ಶೆ ಬದಲಿಸುತ್ತದೆ",
       "ಅದು ಸುರಕ್ಷತೆ ಸಾಬೀತು ಮಾಡುತ್ತದೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
