module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215c5",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Anthropic RSP v3.0 (Part 2 of 3) — The Decision Chain",
 "titleKn": "Anthropic RSP v3.0 (ಭಾಗ 2 / 3) — ನಿರ್ಧಾರ ಸರಪಳಿ",
 "desc": "Turn a threshold into a four-outcome decision, count all 48 combinations and compare a hard stop with a safety-case rule.",
 "descKn": "ಮಿತಿಯನ್ನು ನಾಲ್ಕು-ಫಲಿತಾಂಶ ನಿರ್ಧಾರವಾಗಿ ಬದಲಿಸಿ, ಎಲ್ಲಾ 48 ಸಂಯೋಜನೆ ಎಣಿಸಿ ಮತ್ತು ಹಾರ್ಡ್ ಸ್ಟಾಪ್ ಅನ್ನು ಸುರಕ್ಷತೆ-case ನಿಯಮದೊಂದಿಗೆ ಹೋಲಿಸಿ.",
 "objectives": [
  "Order the checks.",
  "Name what is missing.",
  "Count every combination.",
  "Compare a stop and a review.",
  "Say it is a simulation."
 ],
 "objectivesKn": [
  "ಪರಿಶೀಲನೆಗಳನ್ನು ಕ್ರಮಗೊಳಿಸಿ.",
  "ಏನು ಕಾಣೆ ಎಂದು ಹೆಸರಿಸಿ.",
  "ಪ್ರತಿ ಸಂಯೋಜನೆ ಎಣಿಸಿ.",
  "ನಿಲುಗಡೆ ಮತ್ತು ವಿಮರ್ಶೆ ಹೋಲಿಸಿ.",
  "ಅದು ಅನುಕರಣೆ ಎಂದು ಹೇಳಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Anthropic RSP v3.0 (Part 2 of 3)",
    "textKn": "Anthropic RSP v3.0 (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: a conservative deployment decision over a threshold status, a case, mitigations, a review and other gates, all 48 input combinations counted, a hard-stop rule against a safety-case rule, a JSON report and eleven unit tests that are run. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind Anthropic RSP v3.0 (a three-state threshold evaluator, input validation, a deployment decision over case, mitigation, review and other gates, confidence intervals and a bootstrap, evidence digests, review binding, activity requirements, an audit chain and a roadmap check), not the real software, and the thresholds, section names, activity table and the 79-of-100 outcomes are invented teaching values, the review fields are strings, and nothing here decides anything about a real model or reproduces an Anthropic process, so no real LLM behaviour is measured. The original code/main.py was not supplied and the lesson code was shown only in fragments, so the labs are our own implementation and the outputs were produced by running them. The lesson description of RSP v3.0, its February 24, 2026 effective date, the removal of the pause commitment, the AI R&D-4 threshold, Frontier Safety Roadmaps, Risk Reports and the SaferAI scores is conceptual or cited and was not checked here. The lesson itself says the SaferAI 2.2 to 1.9 downgrade was reported in October 2024 and cannot be tied to v3.0, and it notes that later versions of the policy exist, so this module treats v3.0 as a historical version and teaches the procedure, not the policy text. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಮಿತಿ ಸ್ಥಿತಿ, case, ತಗ್ಗಿಸುವಿಕೆಗಳು, ವಿಮರ್ಶೆ ಮತ್ತು ಇತರ gates ಮೇಲೆ ಎಚ್ಚರಿಕೆಯ ನಿಯೋಜನೆ ನಿರ್ಧಾರ, ಎಣಿಸಿದ ಎಲ್ಲಾ 48 ಇನ್‌ಪುಟ್ ಸಂಯೋಜನೆಗಳು, ಹಾರ್ಡ್-ಸ್ಟಾಪ್ ನಿಯಮ ಮತ್ತು ಸುರಕ್ಷತೆ-case ನಿಯಮದ ಹೋಲಿಕೆ, JSON ವರದಿ ಮತ್ತು ಓಡಿಸಿದ ಹನ್ನೊಂದು unit ಪರೀಕ್ಷೆಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು Anthropic RSP v3.0 (ಮೂರು-ಸ್ಥಿತಿ ಮಿತಿ ಮೌಲ್ಯಮಾಪಕ, ಇನ್‌ಪುಟ್ ಮೌಲ್ಯೀಕರಣ, case, ತಗ್ಗಿಸುವಿಕೆ, ವಿಮರ್ಶೆ ಮತ್ತು ಇತರ gates ಮೇಲೆ ನಿಯೋಜನೆ ನಿರ್ಧಾರ, ವಿಶ್ವಾಸ ಅಂತರಗಳು ಮತ್ತು bootstrap, ಸಾಕ್ಷ್ಯ digest, ವಿಮರ್ಶೆ ಬಂಧ, ಚಟುವಟಿಕೆ ಅವಶ್ಯಕತೆಗಳು, ಲೆಕ್ಕಪರಿಶೋಧನೆ ಸರಪಳಿ ಮತ್ತು roadmap ಪರಿಶೀಲನೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಮಿತಿಗಳು, ವಿಭಾಗ ಹೆಸರುಗಳು, ಚಟುವಟಿಕೆ ಟೇಬಲ್ ಮತ್ತು 100 ರಲ್ಲಿ 79 ಫಲಿತಾಂಶಗಳು ಕಲ್ಪಿತ ಬೋಧನಾ ಮೌಲ್ಯಗಳು, ವಿಮರ್ಶೆ ಕ್ಷೇತ್ರಗಳು ಸ್ಟ್ರಿಂಗ್‌ಗಳು, ಮತ್ತು ಇಲ್ಲಿನ ಯಾವುದೂ ನಿಜ ಮಾದರಿ ಬಗ್ಗೆ ಏನನ್ನೂ ನಿರ್ಧರಿಸುವುದಿಲ್ಲ ಅಥವಾ Anthropic ಪ್ರಕ್ರಿಯೆಯನ್ನು ಪುನರುತ್ಪಾದಿಸುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ ಮತ್ತು lesson ಕೋಡ್ ತುಣುಕುಗಳಲ್ಲಿ ಮಾತ್ರ ತೋರಿಸಲ್ಪಟ್ಟಿತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ ಮತ್ತು ಔಟ್‌ಪುಟ್ ಅನ್ನು ಅವನ್ನು ಓಡಿಸಿ ಪಡೆಯಲಾಗಿದೆ. RSP v3.0, ಅದರ ಫೆಬ್ರವರಿ 24, 2026 ಜಾರಿ ದಿನಾಂಕ, ವಿರಾಮ ಬದ್ಧತೆ ತೆಗೆಯುವಿಕೆ, AI R&D-4 ಮಿತಿ, Frontier Safety Roadmaps, Risk Reports ಮತ್ತು SaferAI ಅಂಕಗಳ ಬಗ್ಗೆ lesson ವಿವರಣೆ ಪರಿಕಲ್ಪನಾತ್ಮಕ ಅಥವಾ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಿಲ್ಲ. SaferAI 2.2 ರಿಂದ 1.9 ಇಳಿಕೆ ಅಕ್ಟೋಬರ್ 2024 ರಲ್ಲಿ ವರದಿಯಾಗಿತ್ತು ಮತ್ತು v3.0 ಗೆ ಜೋಡಿಸಲಾಗದು ಎಂದು lesson ಸ್ವತಃ ಹೇಳುತ್ತದೆ, ಮತ್ತು ನೀತಿಯ ನಂತರದ ಆವೃತ್ತಿಗಳಿವೆ ಎಂದು ಗಮನಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಈ ಮಾಡ್ಯೂಲ್ v3.0 ಅನ್ನು ಐತಿಹಾಸಿಕ ಆವೃತ್ತಿಯಾಗಿ ಪರಿಗಣಿಸಿ ನೀತಿ ಪಠ್ಯವನ್ನಲ್ಲ ವಿಧಾನವನ್ನು ಕಲಿಸುತ್ತದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Approval Is the Last Step of a Chain",
    "textKn": "ಅನುಮೋದನೆ ಸರಪಳಿಯ ಕೊನೆಯ ಹಂತ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Four States, Forty-Eight Inputs",
    "headingKn": "ನಾಲ್ಕು ಸ್ಥಿತಿಗಳು, ನಲವತ್ತೆಂಟು ಇನ್‌ಪುಟ್‌ಗಳು",
    "bodyEn": "This part turns the three-state threshold into a deployment decision with four outcomes: APPROVED, BLOCKED, PENDING_EVIDENCE and PENDING_REVIEW. It checks other safety gates first, then insufficient evidence, then unverified mandatory mitigations, and only for a crossed threshold the case and the review. It counts the outcome of all 48 combinations, compares a hard-stop rule with a safety-case rule, writes a JSON report that says it is a simulation and runs eleven unit tests. The order of checks is the lab author choice and not a requirement of Anthropic policy.",
    "bodyKn": "ಈ ಭಾಗ ಮೂರು-ಸ್ಥಿತಿ ಮಿತಿಯನ್ನು ನಾಲ್ಕು ಫಲಿತಾಂಶಗಳ ನಿಯೋಜನೆ ನಿರ್ಧಾರವಾಗಿ ಬದಲಿಸುತ್ತದೆ: APPROVED, BLOCKED, PENDING_EVIDENCE ಮತ್ತು PENDING_REVIEW. ಅದು ಮೊದಲು ಇತರ ಸುರಕ್ಷತಾ gates, ನಂತರ ಅಸಾಕಷ್ಟು ಸಾಕ್ಷ್ಯ, ನಂತರ ಪರಿಶೀಲಿಸದ ಕಡ್ಡಾಯ ತಗ್ಗಿಸುವಿಕೆಗಳು, ಮತ್ತು ದಾಟಿದ ಮಿತಿಗೆ ಮಾತ್ರ case ಮತ್ತು ವಿಮರ್ಶೆ ಪರಿಶೀಲಿಸುತ್ತದೆ. ಎಲ್ಲಾ 48 ಸಂಯೋಜನೆಗಳ ಫಲಿತಾಂಶ ಎಣಿಸುತ್ತದೆ, ಹಾರ್ಡ್-ಸ್ಟಾಪ್ ನಿಯಮವನ್ನು ಸುರಕ್ಷತೆ-case ನಿಯಮದೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ, ತಾನು ಅನುಕರಣೆ ಎಂದು ಹೇಳುವ JSON ವರದಿ ಬರೆಯುತ್ತದೆ ಮತ್ತು ಹನ್ನೊಂದು unit ಪರೀಕ್ಷೆ ಓಡಿಸುತ್ತದೆ. ಪರಿಶೀಲನೆಗಳ ಕ್ರಮ ಲ್ಯಾಬ್ ಲೇಖಕರ ಆಯ್ಕೆ ಮತ್ತು Anthropic ನೀತಿಯ ಅವಶ್ಯಕತೆಯಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Decision Chain",
    "headingKn": "ನಿರ್ಧಾರ ಸರಪಳಿ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a decision is a chain of conditions</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">threshold</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">three states</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">case and review</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">for CROSSED</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">mitigations</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">mandatory ones block</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">other gates</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">never skipped</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a decision is a chain of conditions</text></svg>",
    "captionEn": "Other gates, evidence, mitigations, case and review are checked in order.",
    "captionKn": "ಇತರ gates, ಸಾಕ್ಷ್ಯ, ತಗ್ಗಿಸುವಿಕೆಗಳು, case ಮತ್ತು ವಿಮರ್ಶೆ ಕ್ರಮವಾಗಿ ಪರಿಶೀಲಿಸಲ್ಪಡುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The decision chain",
    "headingKn": "ನಿರ್ಧಾರ ಸರಪಳಿ",
    "headers": [
     "Check, in order",
     "Result if it fails"
    ],
    "rows": [
     [
      "other safety gates",
      "BLOCKED"
     ],
     [
      "threshold evidence insufficient",
      "PENDING_EVIDENCE"
     ],
     [
      "mandatory mitigation unverified",
      "BLOCKED"
     ],
     [
      "crossed and case incomplete",
      "PENDING_EVIDENCE"
     ],
     [
      "crossed and review not approved",
      "PENDING_REVIEW"
     ],
     [
      "everything passes",
      "APPROVED"
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
    "filename": "rp_2.py",
    "headingEn": "Threshold, decision, rules and tests",
    "headingKn": "ಮಿತಿ, ನಿರ್ಧಾರ, ನಿಯಮಗಳು ಮತ್ತು ಪರೀಕ್ಷೆಗಳು",
    "descEn": "threshold returns one of three states, decide applies the checks in order and returns a decision with a reason, hard_stop and safety_case_rule are two ways to react to a crossed threshold and EngineTests are the eleven tests.",
    "descKn": "threshold ಮೂರು ಸ್ಥಿತಿಗಳಲ್ಲಿ ಒಂದು ಹಿಂತಿರುಗಿಸುತ್ತದೆ, decide ಪರಿಶೀಲನೆಗಳನ್ನು ಕ್ರಮವಾಗಿ ಅನ್ವಯಿಸಿ ಕಾರಣದೊಂದಿಗೆ ನಿರ್ಧಾರ ಹಿಂತಿರುಗಿಸುತ್ತದೆ, hard_stop ಮತ್ತು safety_case_rule ದಾಟಿದ ಮಿತಿಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುವ ಎರಡು ವಿಧಾನ ಮತ್ತು EngineTests ಹನ್ನೊಂದು ಪರೀಕ್ಷೆಗಳು.",
    "code": "class Threshold(str, Enum):\r\n    BELOW = \"BELOW\"\r\n    CROSSED = \"CROSSED\"\r\n    INSUFFICIENT_EVIDENCE = \"INSUFFICIENT_EVIDENCE\"\r\n\r\n\r\nclass Decision(str, Enum):\r\n    APPROVED = \"APPROVED\"\r\n    BLOCKED = \"BLOCKED\"\r\n    PENDING_EVIDENCE = \"PENDING_EVIDENCE\"\r\n    PENDING_REVIEW = \"PENDING_REVIEW\"\r\n\r\n\r\n@dataclass(frozen=True)\r\nclass Mitigation:\r\n    identifier: str\r\n    tier: str\r\n    mandatory: bool\r\n    verified: bool\r\n\r\n\r\ndef valid_fraction(v):\r\n    return v is not None and not isinstance(v, bool) and isinstance(v, (int, float)) and math.isfinite(v) and 0 <= v <= 1\r\n\r\n\r\ndef threshold(frac, success, cost, autonomy):\r\n    if not (valid_fraction(frac) and valid_fraction(success) and valid_fraction(autonomy)):\r\n        return Threshold.INSUFFICIENT_EVIDENCE\r\n    if cost is None or isinstance(cost, bool) or not isinstance(cost, (int, float)) or not math.isfinite(cost) or cost < 0:\r\n        return Threshold.INSUFFICIENT_EVIDENCE\r\n    return Threshold.CROSSED if frac >= 0.5 and success >= 0.8 and cost <= 1.0 and autonomy >= 0.75 else Threshold.BELOW\r\n\r\n\r\ndef decide(status, case_complete, review_approved, other_gates_passed, mitigations):\r\n    if not other_gates_passed:\r\n        return Decision.BLOCKED, \"another safety gate failed\"\r\n    if status == Threshold.INSUFFICIENT_EVIDENCE:\r\n        return Decision.PENDING_EVIDENCE, \"threshold evidence is insufficient\"\r\n    if any(m.mandatory and not m.verified for m in mitigations):\r\n        return Decision.BLOCKED, \"a mandatory mitigation is not verified\"\r\n    if status == Threshold.CROSSED:\r\n        if not case_complete:\r\n            return Decision.PENDING_EVIDENCE, \"affirmative case incomplete\"\r\n        if not review_approved:\r\n            return Decision.PENDING_REVIEW, \"review not approved\"\r\n    return Decision.APPROVED, \"all modelled gates passed\"\r\n\r\n\r\ndef hard_stop(crossed, mitigations_verified):\r\n    return \"PAUSE\" if crossed and not mitigations_verified else \"CONTINUE\"\r\n\r\n\r\ndef safety_case_rule(crossed, case_approved):\r\n    return \"REVIEW_REQUIRED\" if crossed and not case_approved else \"CONTINUE\"\r\n\r\n\r\ndef report(status, decision, reason):\r\n    return {\"policy\": {\"name\": \"RSP-inspired educational simulation\", \"reference_version\": \"3.0\", \"official_anthropic_engine\": False}, \"threshold\": status.value, \"deployment\": {\"decision\": decision.value, \"reason\": reason}}\r\n\r\n\r\nGOOD = [Mitigation(\"SECURITY_REVIEW\", \"UNILATERAL\", True, True), Mitigation(\"INDUSTRY_STANDARD\", \"INDUSTRY_RECOMMENDATION\", False, False)]\r\nUNVERIFIED = [Mitigation(\"SECURITY_REVIEW\", \"UNILATERAL\", True, False)]\r\n\r\n\r\nclass EngineTests(unittest.TestCase):\r\n    def test_crossed_with_everything_is_approved(self):\r\n        self.assertEqual(decide(Threshold.CROSSED, True, True, True, GOOD)[0], Decision.APPROVED)\r\n\r\n    def test_below_with_gates_is_approved(self):\r\n        self.assertEqual(decide(Threshold.BELOW, False, False, True, GOOD)[0], Decision.APPROVED)\r\n\r\n    def test_below_but_other_gate_failed(self):\r\n        self.assertEqual(decide(Threshold.BELOW, True, True, False, GOOD)[0], Decision.BLOCKED)\r\n\r\n    def test_insufficient_is_pending_evidence(self):\r\n        self.assertEqual(decide(Threshold.INSUFFICIENT_EVIDENCE, True, True, True, GOOD)[0], Decision.PENDING_EVIDENCE)\r\n\r\n    def test_crossed_incomplete_case(self):\r\n        self.assertEqual(decide(Threshold.CROSSED, False, True, True, GOOD)[0], Decision.PENDING_EVIDENCE)\r\n\r\n    def test_crossed_no_review(self):\r\n        self.assertEqual(decide(Threshold.CROSSED, True, False, True, GOOD)[0], Decision.PENDING_REVIEW)\r\n\r\n    def test_unverified_mandatory_blocks(self):\r\n        self.assertEqual(decide(Threshold.CROSSED, True, True, True, UNVERIFIED)[0], Decision.BLOCKED)\r\n\r\n    def test_unverified_recommendation_does_not_block(self):\r\n        self.assertEqual(decide(Threshold.BELOW, True, True, True, [GOOD[1]])[0], Decision.APPROVED)\r\n\r\n    def test_nan_is_insufficient(self):\r\n        self.assertEqual(threshold(0.7, float(\"nan\"), 0.6, 0.85), Threshold.INSUFFICIENT_EVIDENCE)\r\n\r\n    def test_boundary_is_crossed(self):\r\n        self.assertEqual(threshold(0.5, 0.8, 1.0, 0.75), Threshold.CROSSED)\r\n\r\n    def test_bool_is_not_a_rate(self):\r\n        self.assertEqual(threshold(True, 0.9, 0.5, 0.9), Threshold.INSUFFICIENT_EVIDENCE)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rp_2.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the demonstration model, one change at a time, all 48 combinations, the two rules and the unit tests.",
    "descKn": "main() ಪ್ರದರ್ಶನ ಮಾದರಿ, ಒಂದೊಂದಾಗಿ ಬದಲಾವಣೆ, ಎಲ್ಲಾ 48 ಸಂಯೋಜನೆ, ಎರಡು ನಿಯಮ ಮತ್ತು unit ಪರೀಕ್ಷೆಗಳನ್ನು ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely running: the demonstration model through the engine\")\r\n    st = threshold(0.70, 0.90, 0.60, 0.85)\r\n    d, why = decide(st, True, True, True, GOOD)\r\n    print(json.dumps(report(st, d, why), indent=1))\r\n    print(\"a model that meets all four illustrative criteria with a complete case, a verified mandatory mitigation, an approved review and passing other gates was approved by the engine, and the report says in its first lines that it is a simulation and not an official engine; the approval is the engine's arithmetic and not a safety finding\")\r\n\r\n    section(\"2. Genuinely running: one change at a time from that approved state\")\r\n    base = dict(status=Threshold.CROSSED, case_complete=True, review_approved=True, other_gates_passed=True, mitigations=GOOD)\r\n    variants = [\r\n        (\"nothing changed\", {}),\r\n        (\"other gate fails\", {\"other_gates_passed\": False}),\r\n        (\"evidence insufficient\", {\"status\": Threshold.INSUFFICIENT_EVIDENCE}),\r\n        (\"mandatory mitigation unverified\", {\"mitigations\": UNVERIFIED}),\r\n        (\"case incomplete\", {\"case_complete\": False}),\r\n        (\"review not approved\", {\"review_approved\": False}),\r\n        (\"threshold below\", {\"status\": Threshold.BELOW, \"case_complete\": False, \"review_approved\": False}),\r\n    ]\r\n    for label, change in variants:\r\n        d, why = decide(**{**base, **change})\r\n        print(f\"{label:34} -> {d.value:16} {why}\")\r\n    print(\"each failed condition gave its own state and its own reason, a model that was below the threshold with no case and no review was still approved because nothing else was failing, which is exactly why the other-gates check cannot be skipped\")\r\n\r\n    section(\"3. Genuinely computing: all 48 combinations\")\r\n    counts = Counter()\r\n    for status, case, review, gates, mit in itertools.product(list(Threshold), (True, False), (True, False), (True, False), (GOOD, UNVERIFIED)):\r\n        counts[decide(status, case, review, gates, mit)[0].value] += 1\r\n    print(dict(counts), \"| total:\", sum(counts.values()))\r\n    print(\"of the 48 combinations of threshold status, case, review, other gates and mitigation state the engine approved 5 and the remaining 43 went to blocked (32), pending evidence (10) or pending review (1); no combination with an insufficient threshold status was approved\")\r\n\r\n    section(\"4. Genuinely running: a hard stop against a safety-case rule\")\r\n    print(f\"{'crossed':8} {'verified/approved':18} {'hard stop':10} {'safety case'}\")\r\n    for crossed, ok in itertools.product((True, False), (True, False)):\r\n        print(f\"{crossed!s:8} {ok!s:18} {hard_stop(crossed, ok):10} {safety_case_rule(crossed, ok)}\")\r\n    print(\"the two rules agree except where the threshold is crossed and the condition is not met: one returns PAUSE and the other returns REVIEW_REQUIRED, which is the difference between a rule that stops an activity and a rule that asks for a review; neither function is Anthropic's historical or current policy text\")\r\n\r\n    section(\"5. Genuinely running: the eleven unit tests\")\r\n    stream = io.StringIO()\r\n    res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(EngineTests))\r\n    print(f\"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}\")\r\n    print(\"the tests cover an approval, a below-threshold approval, a failed other gate, insufficient evidence, an incomplete case, a missing review, an unverified mandatory mitigation, an unverified recommendation, NaN, the boundary and a boolean, on this lab's own engine; they do not check whether the thresholds are scientifically valid\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the demonstration model through the engine ---\n{\n \"policy\": {\n  \"name\": \"RSP-inspired educational simulation\",\n  \"reference_version\": \"3.0\",\n  \"official_anthropic_engine\": false\n },\n \"threshold\": \"CROSSED\",\n \"deployment\": {\n  \"decision\": \"APPROVED\",\n  \"reason\": \"all modelled gates passed\"\n }\n}\na model that meets all four illustrative criteria with a complete case, a verified mandatory mitigation, an approved review and passing other gates was approved by the engine, and the report says in its first lines that it is a simulation and not an official engine; the approval is the engine's arithmetic and not a safety finding\n\n--- 2. Genuinely running: one change at a time from that approved state ---\nnothing changed                    -> APPROVED         all modelled gates passed\nother gate fails                   -> BLOCKED          another safety gate failed\nevidence insufficient              -> PENDING_EVIDENCE threshold evidence is insufficient\nmandatory mitigation unverified    -> BLOCKED          a mandatory mitigation is not verified\ncase incomplete                    -> PENDING_EVIDENCE affirmative case incomplete\nreview not approved                -> PENDING_REVIEW   review not approved\nthreshold below                    -> APPROVED         all modelled gates passed\neach failed condition gave its own state and its own reason, a model that was below the threshold with no case and no review was still approved because nothing else was failing, which is exactly why the other-gates check cannot be skipped\n\n--- 3. Genuinely computing: all 48 combinations ---\n{'APPROVED': 5, 'BLOCKED': 32, 'PENDING_REVIEW': 1, 'PENDING_EVIDENCE': 10} | total: 48\nof the 48 combinations of threshold status, case, review, other gates and mitigation state the engine approved 5 and the remaining 43 went to blocked (32), pending evidence (10) or pending review (1); no combination with an insufficient threshold status was approved\n\n--- 4. Genuinely running: a hard stop against a safety-case rule ---\ncrossed  verified/approved  hard stop  safety case\nTrue     True               CONTINUE   CONTINUE\nTrue     False              PAUSE      REVIEW_REQUIRED\nFalse    True               CONTINUE   CONTINUE\nFalse    False              CONTINUE   CONTINUE\nthe two rules agree except where the threshold is crossed and the condition is not met: one returns PAUSE and the other returns REVIEW_REQUIRED, which is the difference between a rule that stops an activity and a rule that asks for a review; neither function is Anthropic's historical or current policy text\n\n--- 5. Genuinely running: the eleven unit tests ---\nran 11 tests | failures 0 | errors 0 | passed True\nthe tests cover an approval, a below-threshold approval, a failed other gate, insufficient evidence, an incomplete case, a missing review, an unverified mandatory mitigation, an unverified recommendation, NaN, the boundary and a boolean, on this lab's own engine; they do not check whether the thresholds are scientifically valid"
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
    "headingEn": "Experiment 1: The demonstration model through the engine",
    "headingKn": "ಪ್ರಯೋಗ 1: The demonstration model through the engine",
    "bodyEn": "What it ran: The demonstration model through the engine. What the lab concluded: a model that meets all four illustrative criteria with a complete case, a verified mandatory mitigation, an approved review and passing other gates was approved by the engine, and the report says in its first lines that it is a simulation and not an official engine; the approval is the engine's arithmetic and not a safety finding",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The demonstration model through the engine. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a model that meets all four illustrative criteria with a complete case, a verified mandatory mitigation, an approved review and passing other gates was approved by the engine, and the report says in its first lines that it is a simulation and not an official engine; the approval is the engine's arithmetic and not a safety finding"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: the demonstration model through the engine ---\n{\n \"policy\": {\n  \"name\": \"RSP-inspired educational simulation\",\n  \"reference_version\": \"3.0\",\n  \"official_anthropic_engine\": false\n },\n \"threshold\": \"CROSSED\",\n \"deployment\": {\n  \"decision\": \"APPROVED\",\n  \"reason\": \"all modelled gates passed\"\n }\n}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: One change at a time from that approved state",
    "headingKn": "ಪ್ರಯೋಗ 2: One change at a time from that approved state",
    "bodyEn": "What it ran: One change at a time from that approved state. What the lab concluded: each failed condition gave its own state and its own reason, a model that was below the threshold with no case and no review was still approved because nothing else was failing, which is exactly why the other-gates check cannot be skipped",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: One change at a time from that approved state. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each failed condition gave its own state and its own reason, a model that was below the threshold with no case and no review was still approved because nothing else was failing, which is exactly why the other-gates check cannot be skipped"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: one change at a time from that approved state ---\nnothing changed                    -> APPROVED         all modelled gates passed\nother gate fails                   -> BLOCKED          another safety gate failed\nevidence insufficient              -> PENDING_EVIDENCE threshold evidence is insufficient\nmandatory mitigation unverified    -> BLOCKED          a mandatory mitigation is not verified\ncase incomplete                    -> PENDING_EVIDENCE affirmative case incomplete\nreview not approved                -> PENDING_REVIEW   review not approved\nthreshold below                    -> APPROVED         all modelled gates passed"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: All 48 combinations",
    "headingKn": "ಪ್ರಯೋಗ 3: All 48 combinations",
    "bodyEn": "What it ran: All 48 combinations. What the lab concluded: of the 48 combinations of threshold status, case, review, other gates and mitigation state the engine approved 5 and the remaining 43 went to blocked (32), pending evidence (10) or pending review (1); no combination with an insufficient threshold status was approved",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: All 48 combinations. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): of the 48 combinations of threshold status, case, review, other gates and mitigation state the engine approved 5 and the remaining 43 went to blocked (32), pending evidence (10) or pending review (1); no combination with an insufficient threshold status was approved"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely computing: all 48 combinations ---\n{'APPROVED': 5, 'BLOCKED': 32, 'PENDING_REVIEW': 1, 'PENDING_EVIDENCE': 10} | total: 48"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A hard stop against a safety-case rule",
    "headingKn": "ಪ್ರಯೋಗ 4: A hard stop against a safety-case rule",
    "bodyEn": "What it ran: A hard stop against a safety-case rule. What the lab concluded: the two rules agree except where the threshold is crossed and the condition is not met: one returns PAUSE and the other returns REVIEW_REQUIRED, which is the difference between a rule that stops an activity and a rule that asks for a review; neither function is Anthropic's historical or current policy text",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A hard stop against a safety-case rule. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the two rules agree except where the threshold is crossed and the condition is not met: one returns PAUSE and the other returns REVIEW_REQUIRED, which is the difference between a rule that stops an activity and a rule that asks for a review; neither function is Anthropic's historical or current policy text"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a hard stop against a safety-case rule ---\ncrossed  verified/approved  hard stop  safety case\nTrue     True               CONTINUE   CONTINUE\nTrue     False              PAUSE      REVIEW_REQUIRED\nFalse    True               CONTINUE   CONTINUE\nFalse    False              CONTINUE   CONTINUE"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: The eleven unit tests",
    "headingKn": "ಪ್ರಯೋಗ 5: The eleven unit tests",
    "bodyEn": "What it ran: The eleven unit tests. What the lab concluded: the tests cover an approval, a below-threshold approval, a failed other gate, insufficient evidence, an incomplete case, a missing review, an unverified mandatory mitigation, an unverified recommendation, NaN, the boundary and a boolean, on this lab's own engine; they do not check whether the thresholds are scientifically valid",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The eleven unit tests. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the tests cover an approval, a below-threshold approval, a failed other gate, insufficient evidence, an incomplete case, a missing review, an unverified mandatory mitigation, an unverified recommendation, NaN, the boundary and a boolean, on this lab's own engine; they do not check whether the thresholds are scientifically valid"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: the eleven unit tests ---\nran 11 tests | failures 0 | errors 0 | passed True"
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
    "headingEn": "Genuinely Found: The Chain and the Count",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸರಪಳಿ ಮತ್ತು ಎಣಿಕೆ",
    "bodyEn": "Section 1: the demonstration model was CROSSED and APPROVED, and the JSON report said official_anthropic_engine is false. Section 2: a failed other gate gave BLOCKED, insufficient evidence gave PENDING_EVIDENCE, an unverified mandatory mitigation gave BLOCKED, an incomplete case gave PENDING_EVIDENCE, a missing review gave PENDING_REVIEW, and a below-threshold model with no case and no review was still APPROVED. Section 3: the 48 combinations gave 5 APPROVED, 32 BLOCKED, 10 PENDING_EVIDENCE and 1 PENDING_REVIEW.",
    "bodyKn": "ವಿಭಾಗ 1: ಪ್ರದರ್ಶನ ಮಾದರಿ CROSSED ಮತ್ತು APPROVED ಆಯಿತು, ಮತ್ತು JSON ವರದಿ official_anthropic_engine false ಎಂದಿತು. ವಿಭಾಗ 2: ವಿಫಲವಾದ ಇತರ gate BLOCKED ನೀಡಿತು, ಅಸಾಕಷ್ಟು ಸಾಕ್ಷ್ಯ PENDING_EVIDENCE ನೀಡಿತು, ಪರಿಶೀಲಿಸದ ಕಡ್ಡಾಯ ತಗ್ಗಿಸುವಿಕೆ BLOCKED ನೀಡಿತು, ಅಪೂರ್ಣ case PENDING_EVIDENCE ನೀಡಿತು, ಕಾಣೆಯಾದ ವಿಮರ್ಶೆ PENDING_REVIEW ನೀಡಿತು, ಮತ್ತು case ಹಾಗೂ ವಿಮರ್ಶೆ ಇಲ್ಲದ ಮಿತಿಗಿಂತ ಕೆಳಗಿನ ಮಾದರಿ ಇನ್ನೂ APPROVED ಆಯಿತು. ವಿಭಾಗ 3: 48 ಸಂಯೋಜನೆಗಳು 5 APPROVED, 32 BLOCKED, 10 PENDING_EVIDENCE ಮತ್ತು 1 PENDING_REVIEW ನೀಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Two Rules and the Tests",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಎರಡು ನಿಯಮಗಳು ಮತ್ತು ಪರೀಕ್ಷೆಗಳು",
    "bodyEn": "Section 4: the hard-stop and the safety-case rule agreed in three of four combinations and differed when the threshold was crossed and the condition was not met, giving PAUSE and REVIEW_REQUIRED. Section 5: the eleven unit tests ran with 0 failures and 0 errors.",
    "bodyKn": "ವಿಭಾಗ 4: ಹಾರ್ಡ್-ಸ್ಟಾಪ್ ಮತ್ತು ಸುರಕ್ಷತೆ-case ನಿಯಮ ನಾಲ್ಕರಲ್ಲಿ ಮೂರು ಸಂಯೋಜನೆಗಳಲ್ಲಿ ಒಪ್ಪಿದವು ಮತ್ತು ಮಿತಿ ದಾಟಿ ಷರತ್ತು ಪೂರೈಸದಿದ್ದಾಗ ಭಿನ್ನವಾದವು, PAUSE ಮತ್ತು REVIEW_REQUIRED ನೀಡಿದವು. ವಿಭಾಗ 5: ಹನ್ನೊಂದು unit ಪರೀಕ್ಷೆಗಳು 0 ವೈಫಲ್ಯ ಮತ್ತು 0 ದೋಷದೊಂದಿಗೆ ಓಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "An approval from an engine is only the end of a chain of checks, so each state has to say what is missing, and a rule that stops an activity is different from one that asks for review.",
    "bodyKn": "engine ಅನುಮೋದನೆ ಪರಿಶೀಲನೆಗಳ ಸರಪಳಿಯ ಅಂತ್ಯ ಮಾತ್ರ, ಆದ್ದರಿಂದ ಪ್ರತಿ ಸ್ಥಿತಿ ಏನು ಕಾಣೆಯಾಗಿದೆ ಎಂದು ಹೇಳಬೇಕು, ಮತ್ತು ಚಟುವಟಿಕೆ ನಿಲ್ಲಿಸುವ ನಿಯಮ ವಿಮರ್ಶೆ ಕೇಳುವ ನಿಯಮಕ್ಕಿಂತ ಭಿನ್ನ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"APPROVED means the model is safe.\" It means the modelled gates passed, and a below-threshold model with nothing else checked was approved too.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"APPROVED ಎಂದರೆ ಮಾದರಿ ಸುರಕ್ಷಿತ.\" ಅದು ಮಾದರಿ gates ಪಾಸ್ ಆದವು ಎಂದರ್ಥ, ಮತ್ತು ಬೇರೇನೂ ಪರಿಶೀಲಿಸದ ಮಿತಿಗಿಂತ ಕೆಳಗಿನ ಮಾದರಿಯೂ ಅನುಮೋದಿತವಾಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Pending evidence: something required is missing. Pending review: a human decision is missing. Hard stop: a rule that halts an activity. Safety case: an argument with evidence.",
    "bodyKn": "Pending evidence: ಬೇಕಾದದ್ದೇನೋ ಕಾಣೆ. Pending review: ಮಾನವ ನಿರ್ಧಾರ ಕಾಣೆ. Hard stop: ಚಟುವಟಿಕೆ ನಿಲ್ಲಿಸುವ ನಿಯಮ. Safety case: ಸಾಕ್ಷ್ಯ ಇರುವ ವಾದ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The demonstration model was approved by the engine arithmetic only. 2) Each failed condition gave its own state. 3) 5 of 48 combinations were approved. 4) No insufficient-evidence combination was approved. 5) PAUSE and REVIEW_REQUIRED differ only when a crossed threshold meets an unmet condition.",
    "bodyKn": "1) ಪ್ರದರ್ಶನ ಮಾದರಿ engine ಅಂಕಗಣಿತದಿಂದ ಮಾತ್ರ ಅನುಮೋದಿತವಾಯಿತು. 2) ಪ್ರತಿ ವಿಫಲ ಷರತ್ತು ತನ್ನದೇ ಸ್ಥಿತಿ ನೀಡಿತು. 3) 48 ರಲ್ಲಿ 5 ಸಂಯೋಜನೆಗಳು ಅನುಮೋದಿತವಾದವು. 4) ಯಾವ ಅಸಾಕಷ್ಟು-ಸಾಕ್ಷ್ಯ ಸಂಯೋಜನೆಯೂ ಅನುಮೋದಿತವಾಗಲಿಲ್ಲ. 5) ದಾಟಿದ ಮಿತಿ ಪೂರೈಸದ ಷರತ್ತನ್ನು ಎದುರಿಸಿದಾಗ ಮಾತ್ರ PAUSE ಮತ್ತು REVIEW_REQUIRED ಭಿನ್ನ."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B rp_2.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B rp_2.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B rp_2.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B rp_2.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many of the 48 combinations were APPROVED?",
      "qKn": "48 ಸಂಯೋಜನೆಗಳಲ್ಲಿ ಎಷ್ಟು APPROVED ಆದವು?",
      "opts": [
       "5",
       "7",
       "32",
       "1"
      ],
      "optsKn": [
       "5",
       "7",
       "32",
       "1"
      ],
      "correct": 0
     },
     {
      "q": "How many of the 48 combinations were BLOCKED?",
      "qKn": "48 ಸಂಯೋಜನೆಗಳಲ್ಲಿ ಎಷ್ಟು BLOCKED ಆದವು?",
      "opts": [
       "32",
       "10",
       "5",
       "1"
      ],
      "optsKn": [
       "32",
       "10",
       "5",
       "1"
      ],
      "correct": 0
     },
     {
      "q": "What did a missing review give for a crossed threshold with a complete case?",
      "qKn": "ಪೂರ್ಣ case ಇರುವ ದಾಟಿದ ಮಿತಿಗೆ ಕಾಣೆಯಾದ ವಿಮರ್ಶೆ ಏನು ನೀಡಿತು?",
      "opts": [
       "PENDING_REVIEW",
       "BLOCKED",
       "APPROVED",
       "PENDING_EVIDENCE"
      ],
      "optsKn": [
       "PENDING_REVIEW (ವಿಮರ್ಶೆ ಬಾಕಿ)",
       "BLOCKED (ತಡೆ)",
       "APPROVED (ಅನುಮೋದಿತ)",
       "PENDING_EVIDENCE (ಸಾಕ್ಷ್ಯ ಬಾಕಿ)"
      ],
      "correct": 0
     },
     {
      "q": "What did the hard-stop rule return when the threshold was crossed and mitigations were not verified?",
      "qKn": "ಮಿತಿ ದಾಟಿ ತಗ್ಗಿಸುವಿಕೆಗಳು ಪರಿಶೀಲಿಸದಿದ್ದಾಗ ಹಾರ್ಡ್-ಸ್ಟಾಪ್ ನಿಯಮ ಏನು ಹಿಂತಿರುಗಿಸಿತು?",
      "opts": [
       "PAUSE",
       "REVIEW_REQUIRED",
       "CONTINUE",
       "APPROVED"
      ],
      "optsKn": [
       "PAUSE (ವಿರಾಮ)",
       "REVIEW_REQUIRED (ವಿಮರ್ಶೆ ಅಗತ್ಯ)",
       "CONTINUE (ಮುಂದುವರಿಸಿ)",
       "APPROVED (ಅನುಮೋದಿತ)"
      ],
      "correct": 0
     },
     {
      "q": "Is the order of checks in the engine a requirement of Anthropic policy?",
      "qKn": "engine ನ ಪರಿಶೀಲನೆ ಕ್ರಮ Anthropic ನೀತಿಯ ಅವಶ್ಯಕತೆಯೇ?",
      "opts": [
       "No, it is the lab author choice",
       "Yes, exactly",
       "Yes, partly",
       "It was copied from the policy"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಅದು ಲ್ಯಾಬ್ ಲೇಖಕರ ಆಯ್ಕೆ",
       "ಹೌದು, ಸಂಪೂರ್ಣ",
       "ಹೌದು, ಭಾಗಶಃ",
       "ಅದನ್ನು ನೀತಿಯಿಂದ ನಕಲಿಸಲಾಗಿದೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
