module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215c5",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Anthropic Responsible Scaling Policy v3.0 (Part 3 of 3) — Intervals, Digests and Bound Reviews",
 "titleKn": "Anthropic Responsible Scaling Policy v3.0 (ಭಾಗ 3 / 3) — ಅಂತರಗಳು, Digests ಮತ್ತು ಬಂಧಿತ ವಿಮರ್ಶೆಗಳು",
 "desc": "Read a threshold from intervals, hash evidence and bind a review to a version, an activity and the evidence.",
 "descKn": "ಅಂತರಗಳಿಂದ ಮಿತಿ ಓದಿ, ಸಾಕ್ಷ್ಯ hash ಮಾಡಿ ಮತ್ತು ವಿಮರ್ಶೆಯನ್ನು ಆವೃತ್ತಿ, ಚಟುವಟಿಕೆ ಮತ್ತು ಸಾಕ್ಷ್ಯಕ್ಕೆ ಬಂಧಿಸಿ.",
 "objectives": [
  "Hash a configuration.",
  "Read an interval.",
  "Bootstrap a rate.",
  "Bind a review.",
  "Chain an audit log."
 ],
 "objectivesKn": [
  "ಸಂರಚನೆ hash ಮಾಡಿ.",
  "ಅಂತರ ಓದಿ.",
  "ದರ bootstrap ಮಾಡಿ.",
  "ವಿಮರ್ಶೆ ಬಂಧಿಸಿ.",
  "ಲೆಕ್ಕಪರಿಶೋಧನೆ ಲಾಗ್ ಸರಪಳಿ ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Anthropic Responsible Scaling Policy v3.0 (Part 3 of 3)",
    "textKn": "Anthropic Responsible Scaling Policy v3.0 (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: a policy configuration digest, a threshold read from intervals with a percentile bootstrap, an evidence file hash checked against a trusted digest, a review bound to model version, activity and digests, separation of duties, activity requirements, an audit chain, a roadmap check and a doubling projection. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind Anthropic RSP v3.0 (a three-state threshold evaluator, input validation, a deployment decision over case, mitigation, review and other gates, confidence intervals and a bootstrap, evidence digests, review binding, activity requirements, an audit chain and a roadmap check), not the real software, and the thresholds, section names, activity table and the 79-of-100 outcomes are invented teaching values, the review fields are strings, and nothing here decides anything about a real model or reproduces an Anthropic process, so no real LLM behaviour is measured. The original code/main.py was not supplied and the lesson code was shown only in fragments, so the labs are our own implementation and the outputs were produced by running them. The lesson description of RSP v3.0, its February 24, 2026 effective date, the removal of the pause commitment, the AI R&D-4 threshold, Frontier Safety Roadmaps, Risk Reports and the SaferAI scores is conceptual or cited and was not checked here. The lesson itself says the SaferAI 2.2 to 1.9 downgrade was reported in October 2024 and cannot be tied to v3.0, and it notes that later versions of the policy exist, so this module treats v3.0 as a historical version and teaches the procedure, not the policy text. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ನೀತಿ ಸಂರಚನೆ digest, ಅಂತರಗಳಿಂದ ಓದಿದ ಮಿತಿ ಮತ್ತು percentile bootstrap, ನಂಬಿಕಸ್ಥ digest ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿದ ಸಾಕ್ಷ್ಯ ಫೈಲ್ hash, ಮಾದರಿ ಆವೃತ್ತಿ, ಚಟುವಟಿಕೆ ಮತ್ತು digest ಗಳಿಗೆ ಬಂಧಿತ ವಿಮರ್ಶೆ, ಕರ್ತವ್ಯ ಪ್ರತ್ಯೇಕತೆ, ಚಟುವಟಿಕೆ ಅವಶ್ಯಕತೆಗಳು, ಲೆಕ್ಕಪರಿಶೋಧನೆ ಸರಪಳಿ, roadmap ಪರಿಶೀಲನೆ ಮತ್ತು ದ್ವಿಗುಣ ಪ್ರಕ್ಷೇಪಣ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು Anthropic RSP v3.0 (ಮೂರು-ಸ್ಥಿತಿ ಮಿತಿ ಮೌಲ್ಯಮಾಪಕ, ಇನ್‌ಪುಟ್ ಮೌಲ್ಯೀಕರಣ, case, ತಗ್ಗಿಸುವಿಕೆ, ವಿಮರ್ಶೆ ಮತ್ತು ಇತರ gates ಮೇಲೆ ನಿಯೋಜನೆ ನಿರ್ಧಾರ, ವಿಶ್ವಾಸ ಅಂತರಗಳು ಮತ್ತು bootstrap, ಸಾಕ್ಷ್ಯ digest, ವಿಮರ್ಶೆ ಬಂಧ, ಚಟುವಟಿಕೆ ಅವಶ್ಯಕತೆಗಳು, ಲೆಕ್ಕಪರಿಶೋಧನೆ ಸರಪಳಿ ಮತ್ತು roadmap ಪರಿಶೀಲನೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಮಿತಿಗಳು, ವಿಭಾಗ ಹೆಸರುಗಳು, ಚಟುವಟಿಕೆ ಟೇಬಲ್ ಮತ್ತು 100 ರಲ್ಲಿ 79 ಫಲಿತಾಂಶಗಳು ಕಲ್ಪಿತ ಬೋಧನಾ ಮೌಲ್ಯಗಳು, ವಿಮರ್ಶೆ ಕ್ಷೇತ್ರಗಳು ಸ್ಟ್ರಿಂಗ್‌ಗಳು, ಮತ್ತು ಇಲ್ಲಿನ ಯಾವುದೂ ನಿಜ ಮಾದರಿ ಬಗ್ಗೆ ಏನನ್ನೂ ನಿರ್ಧರಿಸುವುದಿಲ್ಲ ಅಥವಾ Anthropic ಪ್ರಕ್ರಿಯೆಯನ್ನು ಪುನರುತ್ಪಾದಿಸುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ ಮತ್ತು lesson ಕೋಡ್ ತುಣುಕುಗಳಲ್ಲಿ ಮಾತ್ರ ತೋರಿಸಲ್ಪಟ್ಟಿತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ ಮತ್ತು ಔಟ್‌ಪುಟ್ ಅನ್ನು ಅವನ್ನು ಓಡಿಸಿ ಪಡೆಯಲಾಗಿದೆ. RSP v3.0, ಅದರ ಫೆಬ್ರವರಿ 24, 2026 ಜಾರಿ ದಿನಾಂಕ, ವಿರಾಮ ಬದ್ಧತೆ ತೆಗೆಯುವಿಕೆ, AI R&D-4 ಮಿತಿ, Frontier Safety Roadmaps, Risk Reports ಮತ್ತು SaferAI ಅಂಕಗಳ ಬಗ್ಗೆ lesson ವಿವರಣೆ ಪರಿಕಲ್ಪನಾತ್ಮಕ ಅಥವಾ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಿಲ್ಲ. SaferAI 2.2 ರಿಂದ 1.9 ಇಳಿಕೆ ಅಕ್ಟೋಬರ್ 2024 ರಲ್ಲಿ ವರದಿಯಾಗಿತ್ತು ಮತ್ತು v3.0 ಗೆ ಜೋಡಿಸಲಾಗದು ಎಂದು lesson ಸ್ವತಃ ಹೇಳುತ್ತದೆ, ಮತ್ತು ನೀತಿಯ ನಂತರದ ಆವೃತ್ತಿಗಳಿವೆ ಎಂದು ಗಮನಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಈ ಮಾಡ್ಯೂಲ್ v3.0 ಅನ್ನು ಐತಿಹಾಸಿಕ ಆವೃತ್ತಿಯಾಗಿ ಪರಿಗಣಿಸಿ ನೀತಿ ಪಠ್ಯವನ್ನಲ್ಲ ವಿಧಾನವನ್ನು ಕಲಿಸುತ್ತದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Point Estimate Is Not a Verdict, and an Approval Is Not General",
    "textKn": "ಬಿಂದು ಅಂದಾಜು ತೀರ್ಪಲ್ಲ, ಅನುಮೋದನೆ ಸಾಮಾನ್ಯವಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Intervals, Digests, Bound Reviews and a Chain",
    "headingKn": "ಅಂತರಗಳು, Digests, ಬಂಧಿತ ವಿಮರ್ಶೆಗಳು ಮತ್ತು ಸರಪಳಿ",
    "bodyEn": "This part makes the evaluator production-minded. It reads a threshold from confidence intervals so that an estimate of 0.79 against 0.80 is uncertain, runs a percentile bootstrap on 79 successes in 100 synthetic tasks, hashes the configuration and an evidence file, binds a review to a model version, activity and digests and refuses it when any of them change or when the reviewer wrote the evidence, lists which activities need which controls, chains an audit log, flags a completed milestone with no verification and projects a doubling time. Everything is invented and none of it is Anthropic process.",
    "bodyKn": "ಈ ಭಾಗ ಮೌಲ್ಯಮಾಪಕವನ್ನು ಉತ್ಪಾದನಾ-ಮನಸ್ಸಿನದಾಗಿಸುತ್ತದೆ. ಇದು ವಿಶ್ವಾಸ ಅಂತರಗಳಿಂದ ಮಿತಿ ಓದುತ್ತದೆ, ಆದ್ದರಿಂದ 0.80 ವಿರುದ್ಧ 0.79 ಅಂದಾಜು ಅನಿಶ್ಚಿತ, 100 ಕೃತಕ ಕಾರ್ಯಗಳಲ್ಲಿ 79 ಯಶಸ್ಸಿನ ಮೇಲೆ percentile bootstrap ಓಡಿಸುತ್ತದೆ, ಸಂರಚನೆ ಮತ್ತು ಸಾಕ್ಷ್ಯ ಫೈಲ್ hash ಮಾಡುತ್ತದೆ, ವಿಮರ್ಶೆಯನ್ನು ಮಾದರಿ ಆವೃತ್ತಿ, ಚಟುವಟಿಕೆ ಮತ್ತು digest ಗಳಿಗೆ ಬಂಧಿಸಿ ಅವುಗಳಲ್ಲಿ ಯಾವುದಾದರೂ ಬದಲಾದಾಗ ಅಥವಾ ವಿಮರ್ಶಕ ಸಾಕ್ಷ್ಯ ಬರೆದಾಗ ನಿರಾಕರಿಸುತ್ತದೆ, ಯಾವ ಚಟುವಟಿಕೆಗೆ ಯಾವ ನಿಯಂತ್ರಣ ಬೇಕು ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ, ಲೆಕ್ಕಪರಿಶೋಧನೆ ಲಾಗ್ ಸರಪಳಿ ಮಾಡುತ್ತದೆ, ಪರಿಶೀಲನೆ ಇಲ್ಲದ ಪೂರ್ಣಗೊಂಡ ಮೈಲಿಗಲ್ಲು ಗುರುತಿಸುತ್ತದೆ ಮತ್ತು ದ್ವಿಗುಣ ಸಮಯ ಪ್ರಕ್ಷೇಪಿಸುತ್ತದೆ. ಎಲ್ಲವೂ ಕಲ್ಪಿತ ಮತ್ತು ಯಾವುದೂ Anthropic ಪ್ರಕ್ರಿಯೆಯಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Evidence, Review and Authority",
    "headingKn": "ಸಾಕ್ಷ್ಯ, ವಿಮರ್ಶೆ ಮತ್ತು ಅಧಿಕಾರ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">authority attaches to a specific version, activity and evidence</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">interval</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">not a point</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">digest</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">names the evidence</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">review</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">bound to version</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">audit</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">chained events</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">authority attaches to a specific version, activity and evidence</text></svg>",
    "captionEn": "An approval applies to one model version, one activity and one body of evidence.",
    "captionKn": "ಅನುಮೋದನೆ ಒಂದು ಮಾದರಿ ಆವೃತ್ತಿ, ಒಂದು ಚಟುವಟಿಕೆ ಮತ್ತು ಒಂದು ಸಾಕ್ಷ್ಯ ಸಮೂಹಕ್ಕೆ ಅನ್ವಯಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The nine experiments",
    "headingKn": "ಒಂಬತ್ತು ಪ್ರಯೋಗಗಳು",
    "headers": [
     "Experiment",
     "What the lab shows"
    ],
    "rows": [
     [
      "configuration digest",
      "key order does not matter, a 0.01 change does"
     ],
     [
      "intervals",
      "SATISFIED, NOT_SATISFIED or UNCERTAIN"
     ],
     [
      "bootstrap",
      "79 of 100 gives about 0.71 to 0.86"
     ],
     [
      "evidence hash",
      "an edit no longer matches the trusted digest"
     ],
     [
      "bound review",
      "version, activity, evidence and author checks"
     ],
     [
      "activity table",
      "internal evaluation needs no approval, deployment does"
     ],
     [
      "audit and roadmap",
      "chain, unverified milestone, doubling projection"
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
    "filename": "rp_3.py",
    "headingEn": "Intervals, reviews, audit and projections",
    "headingKn": "ಅಂತರಗಳು, ವಿಮರ್ಶೆಗಳು, ಲೆಕ್ಕಪರಿಶೋಧನೆ ಮತ್ತು ಪ್ರಕ್ಷೇಪಣಗಳು",
    "descEn": "at_least and at_most turn an interval into a status, bootstrap_rate resamples the outcomes, check_authorisation tests a review against the request, Audit chains hashes and horizon computes a doubling projection.",
    "descKn": "at_least ಮತ್ತು at_most ಅಂತರವನ್ನು ಸ್ಥಿತಿಯಾಗಿ ಬದಲಿಸುತ್ತವೆ, bootstrap_rate ಫಲಿತಾಂಶಗಳನ್ನು ಮರುಮಾದರಿ ಮಾಡುತ್ತದೆ, check_authorisation ವಿಮರ್ಶೆಯನ್ನು ವಿನಂತಿ ವಿರುದ್ಧ ಪರೀಕ್ಷಿಸುತ್ತದೆ, Audit hash ಸರಪಳಿ ಮಾಡುತ್ತದೆ ಮತ್ತು horizon ದ್ವಿಗುಣ ಪ್ರಕ್ಷೇಪಣ ಲೆಕ್ಕ ಹಾಕುತ್ತದೆ.",
    "code": "def canonical(v):\n    return json.dumps(v, sort_keys=True, separators=(\",\", \":\"), allow_nan=False)\n\n\ndef digest(v):\n    return hashlib.sha256(canonical(v).encode()).hexdigest()\n\n\nclass MetricStatus(str, Enum):\n    SATISFIED = \"SATISFIED\"\n    NOT_SATISFIED = \"NOT_SATISFIED\"\n    UNCERTAIN = \"UNCERTAIN\"\n\n\ndef at_least(est, lo, hi, threshold):\n    vals = (est, lo, hi, threshold)\n    if not all(math.isfinite(v) for v in vals) or not lo <= est <= hi:\n        return MetricStatus.UNCERTAIN\n    if lo >= threshold:\n        return MetricStatus.SATISFIED\n    if hi < threshold:\n        return MetricStatus.NOT_SATISFIED\n    return MetricStatus.UNCERTAIN\n\n\ndef at_most(est, lo, hi, threshold):\n    vals = (est, lo, hi, threshold)\n    if not all(math.isfinite(v) for v in vals) or not lo <= est <= hi:\n        return MetricStatus.UNCERTAIN\n    if hi <= threshold:\n        return MetricStatus.SATISFIED\n    if lo > threshold:\n        return MetricStatus.NOT_SATISFIED\n    return MetricStatus.UNCERTAIN\n\n\ndef aggregate(statuses):\n    if any(s == MetricStatus.NOT_SATISFIED for s in statuses):\n        return \"BELOW\"\n    if all(s == MetricStatus.SATISFIED for s in statuses):\n        return \"CROSSED\"\n    return \"INSUFFICIENT_EVIDENCE\"\n\n\ndef percentile(values, f):\n    o = sorted(values)\n    pos = f * (len(o) - 1)\n    lo, hi = math.floor(pos), math.ceil(pos)\n    return o[lo] * (1 - (pos - lo)) + o[hi] * (pos - lo)\n\n\ndef bootstrap_rate(outcomes, reps=400, seed=123):\n    rng = random.Random(seed)\n    n = len(outcomes)\n    rates = [sum(rng.choice(outcomes) for _ in range(n)) / n for _ in range(reps)]\n    return percentile(rates, 0.025), percentile(rates, 0.975)\n\n\n@dataclass(frozen=True)\nclass Review:\n    review_id: str\n    model_id: str\n    model_version: str\n    reviewer_id: str\n    status: str\n    evidence_digest: str\n    policy_digest: str\n    activity: str\n\n\ndef check_authorisation(review, model_id, version, evidence_digest, policy_digest, activity, evidence_author):\n    if review.status == \"PENDING\":\n        return \"PENDING_REVIEW\"\n    if review.reviewer_id == evidence_author:\n        return \"REVIEW_CONFLICT\"\n    if review.evidence_digest != evidence_digest:\n        return \"EVIDENCE_INTEGRITY_FAILURE\"\n    if (review.model_id, review.model_version, review.policy_digest, review.activity) != (model_id, version, policy_digest, activity):\n        return \"AUTHORIZATION_MISMATCH\"\n    return \"AUTHORISED\" if review.status == \"APPROVED\" else \"NOT_APPROVED\"\n\n\nACTIVITY_REQUIREMENTS = {\n    \"TRAINING\": {\"human_approval\": True, \"security_review\": True},\n    \"INTERNAL_EVALUATION\": {\"human_approval\": False, \"security_review\": True},\n    \"RESTRICTED_DEPLOYMENT\": {\"human_approval\": True, \"security_review\": True},\n    \"PUBLIC_DEPLOYMENT\": {\"human_approval\": True, \"security_review\": True},\n}\n\n\nclass Audit:\n    def __init__(self):\n        self.events = []\n\n    def append(self, event_type, actor, details):\n        prev = self.events[-1][\"hash\"] if self.events else \"GENESIS\"\n        e = {\"sequence\": len(self.events) + 1, \"event_type\": event_type, \"actor\": actor, \"details\": details, \"previous_hash\": prev}\n        e[\"hash\"] = digest({k: v for k, v in e.items() if k != \"hash\"})\n        self.events.append(e)\n\n    def verify(self):\n        prev = \"GENESIS\"\n        for i, e in enumerate(self.events, start=1):\n            if e[\"sequence\"] != i or e[\"previous_hash\"] != prev or e[\"hash\"] != digest({k: v for k, v in e.items() if k != \"hash\"}):\n                return False, i\n            prev = e[\"hash\"]\n        return True, None\n\n\ndef milestone_needs_review(m):\n    return m[\"completed\"] and not m[\"verification_reference\"]\n\n\ndef horizon(h0, months, doubling):\n    return h0 * 2 ** (months / doubling)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rp_3.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the nine experiments on synthetic data and temporary files.",
    "descKn": "main() ಕೃತಕ ದತ್ತಾಂಶ ಮತ್ತು ತಾತ್ಕಾಲಿಕ ಫೈಲ್‌ಗಳ ಮೇಲೆ ಒಂಬತ್ತು ಪ್ರಯೋಗಗಳನ್ನು ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: a policy configuration digest\")\n    cfg = {\"policy_id\": \"RSP_EDUCATIONAL\", \"version\": \"3.0-simulation\", \"criteria\": {\"task_fraction\": 0.5, \"success_rate\": 0.8, \"cost_ratio\": 1.0, \"autonomy\": 0.75}}\n    d1 = digest(cfg)\n    reordered = {\"criteria\": {\"autonomy\": 0.75, \"cost_ratio\": 1.0, \"success_rate\": 0.8, \"task_fraction\": 0.5}, \"version\": \"3.0-simulation\", \"policy_id\": \"RSP_EDUCATIONAL\"}\n    changed = json.loads(json.dumps(cfg))\n    changed[\"criteria\"][\"success_rate\"] = 0.79\n    print(\"digest prefix:\", d1[:12], \"| same after reordering keys:\", digest(reordered) == d1, \"| after changing one threshold by 0.01:\", digest(changed) == d1)\n    print(\"reordering keys changed nothing and a threshold changed by one hundredth gave a different digest, so a decision record can name the exact configuration it used; a digest shows change and not approval\")\n\n    section(\"2. Genuinely running: reading a threshold from intervals\")\n    for est, lo, hi in ((0.90, 0.85, 0.94), (0.60, 0.52, 0.68), (0.79, 0.72, 0.85)):\n        print(f\"success rate {est} [{lo}, {hi}] against 0.80 ->\", at_least(est, lo, hi, 0.80).value)\n    print(\"cost ratio 0.9 [0.7, 1.1] against 1.0 ->\", at_most(0.9, 0.7, 1.1, 1.0).value, \"| 0.6 [0.5, 0.8] ->\", at_most(0.6, 0.5, 0.8, 1.0).value)\n    print(\"an estimate of 0.79 against a threshold of 0.80 is uncertain when its interval runs from 0.72 to 0.85, and for a cost ratio the comparison runs the other way; the intervals here are supplied numbers and the evaluator cannot tell whether they were computed well\")\n\n    section(\"3. Genuinely running: combining metrics\")\n    sat, nots, unc = MetricStatus.SATISFIED, MetricStatus.NOT_SATISFIED, MetricStatus.UNCERTAIN\n    for label, sts in ((\"all satisfied\", [sat] * 4), (\"one uncertain\", [sat, sat, unc, sat]), (\"one not satisfied and one uncertain\", [sat, nots, unc, sat])):\n        print(f\"{label:38} -> {aggregate(sts)}\")\n    print(\"an uncertain metric kept the result at insufficient evidence instead of letting a point estimate decide it, and one clearly failed metric was enough for BELOW even with another uncertain; this combination rule is the lab's own choice\")\n\n    section(\"4. Genuinely measuring: a percentile bootstrap of 79 successes in 100 tasks\")\n    outcomes = [1] * 79 + [0] * 21\n    lo, hi = bootstrap_rate(outcomes)\n    print(f\"observed rate 0.79 | 95% percentile bootstrap interval [{lo:.3f}, {hi:.3f}] | contains 0.80: {lo <= 0.80 <= hi}\")\n    print(\"status against 0.80:\", at_least(0.79, lo, hi, 0.80).value)\n    print(\"the bootstrap interval around 0.79 contains 0.80, so a point estimate just below the line is not evidence of being below it; the outcomes are synthetic, the 400 resamples treat tasks as independent, and repeated attempts on one task would need resampling by task\")\n\n    section(\"5. Genuinely running: evidence file integrity\")\n    with tempfile.TemporaryDirectory() as d:\n        f = Path(d) / \"evaluation.json\"\n        f.write_text(canonical({\"model\": \"ResearchAgent-X\", \"success_rate\": 0.9}), encoding=\"utf-8\")\n        trusted = hashlib.sha256(f.read_bytes()).hexdigest()\n        print(\"unchanged file matches the trusted digest:\", hashlib.sha256(f.read_bytes()).hexdigest() == trusted)\n        f.write_text(canonical({\"model\": \"ResearchAgent-X\", \"success_rate\": 0.99}), encoding=\"utf-8\")\n        print(\"after editing 0.9 to 0.99:\", hashlib.sha256(f.read_bytes()).hexdigest() == trusted)\n    print(\"the edited file no longer matched the digest stored beforehand, and a digest kept next to the file by the same writer would have been rewritten along with it, so it has to be stored somewhere the evidence author cannot change\")\n\n    section(\"6. Genuinely running: a review is bound to a model, a version, an activity and the evidence\")\n    ev = digest({\"success_rate\": 0.9})\n    pol = d1\n    rev = Review(\"REV-1\", \"ResearchAgent-X\", \"1.0\", \"reviewer-42\", \"APPROVED\", ev, pol, \"INTERNAL_EVALUATION\")\n    args = (\"ResearchAgent-X\", \"1.0\", ev, pol, \"INTERNAL_EVALUATION\", \"researcher-7\")\n    print(\"matching request:\", check_authorisation(rev, *args))\n    print(\"version 1.1 requested:\", check_authorisation(rev, \"ResearchAgent-X\", \"1.1\", ev, pol, \"INTERNAL_EVALUATION\", \"researcher-7\"))\n    print(\"public deployment requested:\", check_authorisation(rev, \"ResearchAgent-X\", \"1.0\", ev, pol, \"PUBLIC_DEPLOYMENT\", \"researcher-7\"))\n    print(\"evidence changed since review:\", check_authorisation(rev, \"ResearchAgent-X\", \"1.0\", digest({\"success_rate\": 0.99}), pol, \"INTERNAL_EVALUATION\", \"researcher-7\"))\n    print(\"reviewer is the evidence author:\", check_authorisation(rev, \"ResearchAgent-X\", \"1.0\", ev, pol, \"INTERNAL_EVALUATION\", \"reviewer-42\"))\n    print(\"review still pending:\", check_authorisation(Review(\"REV-2\", \"ResearchAgent-X\", \"1.0\", \"reviewer-42\", \"PENDING\", ev, pol, \"INTERNAL_EVALUATION\"), *args))\n    print(\"an approval for one model version and one activity authorised only that, a changed evidence digest or the author acting as reviewer broke it, and a pending review authorised nothing; the reviewer id is a string and nothing authenticates it\")\n\n    section(\"7. Genuinely running: requirements differ by activity\")\n    for act, req in ACTIVITY_REQUIREMENTS.items():\n        print(f\"{act:22} human approval: {req['human_approval']!s:5} security review: {req['security_review']}\")\n    print(\"internal evaluation needs no human approval in this table while training and both deployments do, so permission to evaluate is not permission to deploy; the table is the lab's invention and not a statement of Anthropic's requirements\")\n\n    section(\"8. Genuinely running: an audit chain, a roadmap check and a doubling projection\")\n    a = Audit()\n    a.append(\"MODEL_REGISTERED\", \"registry-service\", {\"model_id\": \"ResearchAgent-X\"})\n    a.append(\"EVALUATION_COMPLETED\", \"evaluation-service\", {\"status\": \"CROSSED\"})\n    a.append(\"REVIEW_REQUESTED\", \"governance-service\", {\"model_id\": \"ResearchAgent-X\"})\n    print(\"intact chain:\", a.verify())\n    a.events[1][\"details\"][\"status\"] = \"BELOW\"\n    print(\"after editing the second event:\", a.verify())\n    ms = {\"milestone_id\": \"ROADMAP-001\", \"completed\": True, \"verification_reference\": \"\"}\n    print(\"completed milestone without a verification reference needs review:\", milestone_needs_review(ms))\n    print(\"2 hours doubling every 4 months, after 8 months:\", horizon(2, 8, 4), \"hours | after 6 months:\", round(horizon(2, 6, 4), 2), \"hours\")\n    print(\"an edited event was found at its own sequence number, a milestone marked completed with no verification reference was flagged, and the projection gives 8 hours after 8 months only if a made-up doubling time held, which is arithmetic and not a forecast\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a policy configuration digest ---\ndigest prefix: 31b177ff1521 | same after reordering keys: True | after changing one threshold by 0.01: False\nreordering keys changed nothing and a threshold changed by one hundredth gave a different digest, so a decision record can name the exact configuration it used; a digest shows change and not approval\n\n--- 2. Genuinely running: reading a threshold from intervals ---\nsuccess rate 0.9 [0.85, 0.94] against 0.80 -> SATISFIED\nsuccess rate 0.6 [0.52, 0.68] against 0.80 -> NOT_SATISFIED\nsuccess rate 0.79 [0.72, 0.85] against 0.80 -> UNCERTAIN\ncost ratio 0.9 [0.7, 1.1] against 1.0 -> UNCERTAIN | 0.6 [0.5, 0.8] -> SATISFIED\nan estimate of 0.79 against a threshold of 0.80 is uncertain when its interval runs from 0.72 to 0.85, and for a cost ratio the comparison runs the other way; the intervals here are supplied numbers and the evaluator cannot tell whether they were computed well\n\n--- 3. Genuinely running: combining metrics ---\nall satisfied                          -> CROSSED\none uncertain                          -> INSUFFICIENT_EVIDENCE\none not satisfied and one uncertain    -> BELOW\nan uncertain metric kept the result at insufficient evidence instead of letting a point estimate decide it, and one clearly failed metric was enough for BELOW even with another uncertain; this combination rule is the lab's own choice\n\n--- 4. Genuinely measuring: a percentile bootstrap of 79 successes in 100 tasks ---\nobserved rate 0.79 | 95% percentile bootstrap interval [0.710, 0.860] | contains 0.80: True\nstatus against 0.80: UNCERTAIN\nthe bootstrap interval around 0.79 contains 0.80, so a point estimate just below the line is not evidence of being below it; the outcomes are synthetic, the 400 resamples treat tasks as independent, and repeated attempts on one task would need resampling by task\n\n--- 5. Genuinely running: evidence file integrity ---\nunchanged file matches the trusted digest: True\nafter editing 0.9 to 0.99: False\nthe edited file no longer matched the digest stored beforehand, and a digest kept next to the file by the same writer would have been rewritten along with it, so it has to be stored somewhere the evidence author cannot change\n\n--- 6. Genuinely running: a review is bound to a model, a version, an activity and the evidence ---\nmatching request: AUTHORISED\nversion 1.1 requested: AUTHORIZATION_MISMATCH\npublic deployment requested: AUTHORIZATION_MISMATCH\nevidence changed since review: EVIDENCE_INTEGRITY_FAILURE\nreviewer is the evidence author: REVIEW_CONFLICT\nreview still pending: PENDING_REVIEW\nan approval for one model version and one activity authorised only that, a changed evidence digest or the author acting as reviewer broke it, and a pending review authorised nothing; the reviewer id is a string and nothing authenticates it\n\n--- 7. Genuinely running: requirements differ by activity ---\nTRAINING               human approval: True  security review: True\nINTERNAL_EVALUATION    human approval: False security review: True\nRESTRICTED_DEPLOYMENT  human approval: True  security review: True\nPUBLIC_DEPLOYMENT      human approval: True  security review: True\ninternal evaluation needs no human approval in this table while training and both deployments do, so permission to evaluate is not permission to deploy; the table is the lab's invention and not a statement of Anthropic's requirements\n\n--- 8. Genuinely running: an audit chain, a roadmap check and a doubling projection ---\nintact chain: (True, None)\nafter editing the second event: (False, 2)\ncompleted milestone without a verification reference needs review: True\n2 hours doubling every 4 months, after 8 months: 8.0 hours | after 6 months: 5.66 hours\nan edited event was found at its own sequence number, a milestone marked completed with no verification reference was flagged, and the projection gives 8 hours after 8 months only if a made-up doubling time held, which is arithmetic and not a forecast"
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
    "headingEn": "Experiment 1: A policy configuration digest",
    "headingKn": "ಪ್ರಯೋಗ 1: A policy configuration digest",
    "bodyEn": "What it ran: A policy configuration digest. What the lab concluded: reordering keys changed nothing and a threshold changed by one hundredth gave a different digest, so a decision record can name the exact configuration it used; a digest shows change and not approval",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A policy configuration digest. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): reordering keys changed nothing and a threshold changed by one hundredth gave a different digest, so a decision record can name the exact configuration it used; a digest shows change and not approval"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: a policy configuration digest ---\ndigest prefix: 31b177ff1521 | same after reordering keys: True | after changing one threshold by 0.01: False"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Reading a threshold from intervals",
    "headingKn": "ಪ್ರಯೋಗ 2: Reading a threshold from intervals",
    "bodyEn": "What it ran: Reading a threshold from intervals. What the lab concluded: an estimate of 0.79 against a threshold of 0.80 is uncertain when its interval runs from 0.72 to 0.85, and for a cost ratio the comparison runs the other way; the intervals here are supplied numbers and the evaluator cannot tell whether they were computed well",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Reading a threshold from intervals. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): an estimate of 0.79 against a threshold of 0.80 is uncertain when its interval runs from 0.72 to 0.85, and for a cost ratio the comparison runs the other way; the intervals here are supplied numbers and the evaluator cannot tell whether they were computed well"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: reading a threshold from intervals ---\nsuccess rate 0.9 [0.85, 0.94] against 0.80 -> SATISFIED\nsuccess rate 0.6 [0.52, 0.68] against 0.80 -> NOT_SATISFIED\nsuccess rate 0.79 [0.72, 0.85] against 0.80 -> UNCERTAIN\ncost ratio 0.9 [0.7, 1.1] against 1.0 -> UNCERTAIN | 0.6 [0.5, 0.8] -> SATISFIED"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Combining metrics",
    "headingKn": "ಪ್ರಯೋಗ 3: Combining metrics",
    "bodyEn": "What it ran: Combining metrics. What the lab concluded: an uncertain metric kept the result at insufficient evidence instead of letting a point estimate decide it, and one clearly failed metric was enough for BELOW even with another uncertain; this combination rule is the lab's own choice",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Combining metrics. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): an uncertain metric kept the result at insufficient evidence instead of letting a point estimate decide it, and one clearly failed metric was enough for BELOW even with another uncertain; this combination rule is the lab's own choice"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: combining metrics ---\nall satisfied                          -> CROSSED\none uncertain                          -> INSUFFICIENT_EVIDENCE\none not satisfied and one uncertain    -> BELOW"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A percentile bootstrap of 79 successes in 100 tasks",
    "headingKn": "ಪ್ರಯೋಗ 4: A percentile bootstrap of 79 successes in 100 tasks",
    "bodyEn": "What it ran: A percentile bootstrap of 79 successes in 100 tasks. What the lab concluded: the bootstrap interval around 0.79 contains 0.80, so a point estimate just below the line is not evidence of being below it; the outcomes are synthetic, the 400 resamples treat tasks as independent, and repeated attempts on one task would need resampling by task",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A percentile bootstrap of 79 successes in 100 tasks. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the bootstrap interval around 0.79 contains 0.80, so a point estimate just below the line is not evidence of being below it; the outcomes are synthetic, the 400 resamples treat tasks as independent, and repeated attempts on one task would need resampling by task"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely measuring: a percentile bootstrap of 79 successes in 100 tasks ---\nobserved rate 0.79 | 95% percentile bootstrap interval [0.710, 0.860] | contains 0.80: True\nstatus against 0.80: UNCERTAIN"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Evidence file integrity",
    "headingKn": "ಪ್ರಯೋಗ 5: Evidence file integrity",
    "bodyEn": "What it ran: Evidence file integrity. What the lab concluded: the edited file no longer matched the digest stored beforehand, and a digest kept next to the file by the same writer would have been rewritten along with it, so it has to be stored somewhere the evidence author cannot change",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Evidence file integrity. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the edited file no longer matched the digest stored beforehand, and a digest kept next to the file by the same writer would have been rewritten along with it, so it has to be stored somewhere the evidence author cannot change"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: evidence file integrity ---\nunchanged file matches the trusted digest: True\nafter editing 0.9 to 0.99: False"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: A review is bound to a model, a version, an activity and the evidence",
    "headingKn": "ಪ್ರಯೋಗ 6: A review is bound to a model, a version, an activity and the evidence",
    "bodyEn": "What it ran: A review is bound to a model, a version, an activity and the evidence. What the lab concluded: an approval for one model version and one activity authorised only that, a changed evidence digest or the author acting as reviewer broke it, and a pending review authorised nothing; the reviewer id is a string and nothing authenticates it",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A review is bound to a model, a version, an activity and the evidence. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): an approval for one model version and one activity authorised only that, a changed evidence digest or the author acting as reviewer broke it, and a pending review authorised nothing; the reviewer id is a string and nothing authenticates it"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: a review is bound to a model, a version, an activity and the evidence ---\nmatching request: AUTHORISED\nversion 1.1 requested: AUTHORIZATION_MISMATCH\npublic deployment requested: AUTHORIZATION_MISMATCH\nevidence changed since review: EVIDENCE_INTEGRITY_FAILURE\nreviewer is the evidence author: REVIEW_CONFLICT\nreview still pending: PENDING_REVIEW"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 7: Requirements differ by activity",
    "headingKn": "ಪ್ರಯೋಗ 7: Requirements differ by activity",
    "bodyEn": "What it ran: Requirements differ by activity. What the lab concluded: internal evaluation needs no human approval in this table while training and both deployments do, so permission to evaluate is not permission to deploy; the table is the lab's invention and not a statement of Anthropic's requirements",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Requirements differ by activity. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): internal evaluation needs no human approval in this table while training and both deployments do, so permission to evaluate is not permission to deploy; the table is the lab's invention and not a statement of Anthropic's requirements"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 7. Genuinely running: requirements differ by activity ---\nTRAINING               human approval: True  security review: True\nINTERNAL_EVALUATION    human approval: False security review: True\nRESTRICTED_DEPLOYMENT  human approval: True  security review: True\nPUBLIC_DEPLOYMENT      human approval: True  security review: True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 8: An audit chain, a roadmap check and a doubling projection",
    "headingKn": "ಪ್ರಯೋಗ 8: An audit chain, a roadmap check and a doubling projection",
    "bodyEn": "What it ran: An audit chain, a roadmap check and a doubling projection. What the lab concluded: an edited event was found at its own sequence number, a milestone marked completed with no verification reference was flagged, and the projection gives 8 hours after 8 months only if a made-up doubling time held, which is arithmetic and not a forecast",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: An audit chain, a roadmap check and a doubling projection. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): an edited event was found at its own sequence number, a milestone marked completed with no verification reference was flagged, and the projection gives 8 hours after 8 months only if a made-up doubling time held, which is arithmetic and not a forecast"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 8. Genuinely running: an audit chain, a roadmap check and a doubling projection ---\nintact chain: (True, None)\nafter editing the second event: (False, 2)\ncompleted milestone without a verification reference needs review: True\n2 hours doubling every 4 months, after 8 months: 8.0 hours | after 6 months: 5.66 hours"
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
    "headingEn": "Genuinely Found: Digest, Intervals and Bootstrap",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Digest, ಅಂತರಗಳು ಮತ್ತು Bootstrap",
    "bodyEn": "Section 1: reordering keys left the digest unchanged and changing one threshold by 0.01 changed it. Section 2: 0.9 with [0.85, 0.94] was SATISFIED, 0.6 with [0.52, 0.68] was NOT_SATISFIED, 0.79 with [0.72, 0.85] was UNCERTAIN, and the cost ratios gave UNCERTAIN and SATISFIED. Section 3: all satisfied gave CROSSED, one uncertain gave INSUFFICIENT_EVIDENCE and a not satisfied with an uncertain gave BELOW. Section 4: the 400-resample bootstrap of 79 in 100 gave [0.710, 0.860], which contains 0.80, so the status was UNCERTAIN.",
    "bodyKn": "ವಿಭಾಗ 1: key ಮರುಕ್ರಮಗೊಳಿಸುವುದು digest ಬದಲಿಸಲಿಲ್ಲ ಮತ್ತು ಒಂದು ಮಿತಿಯನ್ನು 0.01 ಬದಲಿಸಿದಾಗ ಅದು ಬದಲಾಯಿತು. ವಿಭಾಗ 2: [0.85, 0.94] ಜೊತೆ 0.9 SATISFIED, [0.52, 0.68] ಜೊತೆ 0.6 NOT_SATISFIED, [0.72, 0.85] ಜೊತೆ 0.79 UNCERTAIN, ಮತ್ತು ವೆಚ್ಚ ಅನುಪಾತಗಳು UNCERTAIN ಮತ್ತು SATISFIED ನೀಡಿದವು. ವಿಭಾಗ 3: ಎಲ್ಲಾ satisfied CROSSED ನೀಡಿತು, ಒಂದು uncertain INSUFFICIENT_EVIDENCE ನೀಡಿತು ಮತ್ತು not satisfied ಜೊತೆ uncertain BELOW ನೀಡಿತು. ವಿಭಾಗ 4: 100 ರಲ್ಲಿ 79 ರ 400-ಮರುಮಾದರಿ bootstrap [0.710, 0.860] ನೀಡಿತು, ಅದು 0.80 ಹೊಂದಿದೆ, ಆದ್ದರಿಂದ ಸ್ಥಿತಿ UNCERTAIN."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Evidence, Reviews, Activities and Audit",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಾಕ್ಷ್ಯ, ವಿಮರ್ಶೆಗಳು, ಚಟುವಟಿಕೆಗಳು ಮತ್ತು ಲೆಕ್ಕಪರಿಶೋಧನೆ",
    "bodyEn": "Section 5: the unchanged evidence file matched the trusted digest and the edited one did not. Section 6: the matching request was AUTHORISED, version 1.1 and public deployment gave AUTHORIZATION_MISMATCH, changed evidence gave EVIDENCE_INTEGRITY_FAILURE, the author as reviewer gave REVIEW_CONFLICT and a pending review gave PENDING_REVIEW. Section 7: only INTERNAL_EVALUATION needed no human approval. Section 8: the intact chain verified, an edit failed at sequence 2, a completed milestone without a verification reference was flagged, and 2 hours doubling every 4 months gave 8.0 hours at 8 months and 5.66 hours at 6 months.",
    "bodyKn": "ವಿಭಾಗ 5: ಬದಲಾಗದ ಸಾಕ್ಷ್ಯ ಫೈಲ್ ನಂಬಿಕಸ್ಥ digest ಗೆ ಹೊಂದಿತು ಮತ್ತು ಸಂಪಾದಿಸಿದ್ದು ಹೊಂದಲಿಲ್ಲ. ವಿಭಾಗ 6: ಹೊಂದುವ ವಿನಂತಿ AUTHORISED ಆಯಿತು, ಆವೃತ್ತಿ 1.1 ಮತ್ತು ಸಾರ್ವಜನಿಕ ನಿಯೋಜನೆ AUTHORIZATION_MISMATCH ನೀಡಿದವು, ಬದಲಾದ ಸಾಕ್ಷ್ಯ EVIDENCE_INTEGRITY_FAILURE ನೀಡಿತು, ಲೇಖಕನೇ ವಿಮರ್ಶಕ REVIEW_CONFLICT ನೀಡಿತು ಮತ್ತು ಬಾಕಿ ವಿಮರ್ಶೆ PENDING_REVIEW ನೀಡಿತು. ವಿಭಾಗ 7: INTERNAL_EVALUATION ಮಾತ್ರ ಮಾನವ ಅನುಮೋದನೆ ಬೇಡಲಿಲ್ಲ. ವಿಭಾಗ 8: ಅಖಂಡ ಸರಪಳಿ ಪರಿಶೀಲಿಸಲ್ಪಟ್ಟಿತು, ಸಂಪಾದನೆ ಅನುಕ್ರಮ 2 ರಲ್ಲಿ ವಿಫಲವಾಯಿತು, ಪರಿಶೀಲನೆ ಉಲ್ಲೇಖ ಇಲ್ಲದ ಪೂರ್ಣಗೊಂಡ ಮೈಲಿಗಲ್ಲು ಗುರುತಿಸಲ್ಪಟ್ಟಿತು, ಮತ್ತು ಪ್ರತಿ 4 ತಿಂಗಳಿಗೆ ದ್ವಿಗುಣಗೊಳ್ಳುವ 2 ಗಂಟೆ 8 ತಿಂಗಳಿಗೆ 8.0 ಗಂಟೆ ಮತ್ತು 6 ತಿಂಗಳಿಗೆ 5.66 ಗಂಟೆ ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "An estimate near a threshold, an approval for another version and evidence changed after review are the ordinary ways a procedure quietly stops meaning what it says, so each is checked explicitly.",
    "bodyKn": "ಮಿತಿ ಬಳಿಯ ಅಂದಾಜು, ಇನ್ನೊಂದು ಆವೃತ್ತಿಗೆ ಅನುಮೋದನೆ ಮತ್ತು ವಿಮರ್ಶೆಯ ನಂತರ ಬದಲಾದ ಸಾಕ್ಷ್ಯ ಒಂದು ವಿಧಾನ ಮೌನವಾಗಿ ತಾನು ಹೇಳಿದ್ದನ್ನು ಅರ್ಥೈಸುವುದನ್ನು ನಿಲ್ಲಿಸುವ ಸಾಮಾನ್ಯ ವಿಧಾನಗಳು, ಆದ್ದರಿಂದ ಪ್ರತಿಯೊಂದನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"an interval check proves the model is below 0.80 at 0.79.\" The bootstrap interval contained 0.80.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"0.79 ರಲ್ಲಿ ಅಂತರ ಪರಿಶೀಲನೆ ಮಾದರಿ 0.80 ಕ್ಕಿಂತ ಕೆಳಗಿದೆ ಎಂದು ಸಾಬೀತು ಮಾಡುತ್ತದೆ.\" bootstrap ಅಂತರ 0.80 ಹೊಂದಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Bootstrap: resampling to see the spread of an estimate. Trusted digest: a hash stored where the author cannot edit. Bound review: approval tied to version, activity and evidence. Separation of duties: the author is not the reviewer.",
    "bodyKn": "Bootstrap: ಅಂದಾಜಿನ ಹರಡುವಿಕೆ ನೋಡಲು ಮರುಮಾದರಿ. ನಂಬಿಕಸ್ಥ digest: ಲೇಖಕ ಸಂಪಾದಿಸಲಾಗದ ಸ್ಥಳದಲ್ಲಿ ಇಟ್ಟ hash. ಬಂಧಿತ ವಿಮರ್ಶೆ: ಆವೃತ್ತಿ, ಚಟುವಟಿಕೆ ಮತ್ತು ಸಾಕ್ಷ್ಯಕ್ಕೆ ಜೋಡಿಸಿದ ಅನುಮೋದನೆ. ಕರ್ತವ್ಯ ಪ್ರತ್ಯೇಕತೆ: ಲೇಖಕ ವಿಮರ್ಶಕನಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A 0.01 change moved the configuration digest. 2) 0.79 against 0.80 was uncertain. 3) The bootstrap interval was 0.710 to 0.860. 4) Every change to version, activity, evidence or author broke the review. 5) Doubling projections are arithmetic and not forecasts.",
    "bodyKn": "1) 0.01 ಬದಲಾವಣೆ ಸಂರಚನೆ digest ಸರಿಸಿತು. 2) 0.80 ವಿರುದ್ಧ 0.79 ಅನಿಶ್ಚಿತ. 3) bootstrap ಅಂತರ 0.710 ರಿಂದ 0.860. 4) ಆವೃತ್ತಿ, ಚಟುವಟಿಕೆ, ಸಾಕ್ಷ್ಯ ಅಥವಾ ಲೇಖಕನ ಪ್ರತಿ ಬದಲಾವಣೆ ವಿಮರ್ಶೆ ಮುರಿಯಿತು. 5) ದ್ವಿಗುಣ ಪ್ರಕ್ಷೇಪಣ ಅಂಕಗಣಿತ, ಮುನ್ಸೂಚನೆಯಲ್ಲ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What status did 0.79 with the interval 0.72 to 0.85 get against 0.80?",
      "qKn": "0.80 ವಿರುದ್ಧ 0.72 ರಿಂದ 0.85 ಅಂತರ ಇರುವ 0.79 ಯಾವ ಸ್ಥಿತಿ ಪಡೆಯಿತು?",
      "opts": [
       "UNCERTAIN",
       "SATISFIED",
       "NOT_SATISFIED",
       "CROSSED"
      ],
      "optsKn": [
       "UNCERTAIN (ಅನಿಶ್ಚಿತ)",
       "SATISFIED (ತೃಪ್ತಿ)",
       "NOT_SATISFIED (ತೃಪ್ತಿಯಿಲ್ಲ)",
       "CROSSED (ದಾಟಿದೆ)"
      ],
      "correct": 0
     },
     {
      "q": "What did a review give when the reviewer was also the evidence author?",
      "qKn": "ವಿಮರ್ಶಕನೇ ಸಾಕ್ಷ್ಯ ಲೇಖಕನಾಗಿದ್ದಾಗ ವಿಮರ್ಶೆ ಏನು ನೀಡಿತು?",
      "opts": [
       "REVIEW_CONFLICT",
       "AUTHORISED",
       "PENDING_REVIEW",
       "AUTHORIZATION_MISMATCH"
      ],
      "optsKn": [
       "REVIEW_CONFLICT (ವಿಮರ್ಶೆ ಸಂಘರ್ಷ)",
       "AUTHORISED (ಅಧಿಕೃತ)",
       "PENDING_REVIEW (ವಿಮರ್ಶೆ ಬಾಕಿ)",
       "AUTHORIZATION_MISMATCH (ಅಧಿಕಾರ ಹೊಂದಾಣಿಕೆಯಿಲ್ಲ)"
      ],
      "correct": 0
     },
     {
      "q": "How many hours did a 2-hour horizon doubling every 4 months reach after 8 months?",
      "qKn": "ಪ್ರತಿ 4 ತಿಂಗಳಿಗೆ ದ್ವಿಗುಣಗೊಳ್ಳುವ 2-ಗಂಟೆ horizon 8 ತಿಂಗಳ ನಂತರ ಎಷ್ಟು ಗಂಟೆ ತಲುಪಿತು?",
      "opts": [
       "8.0",
       "4.0",
       "5.66",
       "16.0"
      ],
      "optsKn": [
       "8.0",
       "4.0",
       "5.66",
       "16.0"
      ],
      "correct": 0
     },
     {
      "q": "Which activity needed no human approval in the lab table?",
      "qKn": "ಲ್ಯಾಬ್ ಟೇಬಲ್‌ನಲ್ಲಿ ಯಾವ ಚಟುವಟಿಕೆ ಮಾನವ ಅನುಮೋದನೆ ಬೇಡಲಿಲ್ಲ?",
      "opts": [
       "Internal evaluation",
       "Training",
       "Public deployment",
       "Restricted deployment"
      ],
      "optsKn": [
       "ಆಂತರಿಕ ಮೌಲ್ಯಮಾಪನ",
       "ತರಬೇತಿ",
       "ಸಾರ್ವಜನಿಕ ನಿಯೋಜನೆ",
       "ನಿರ್ಬಂಧಿತ ನಿಯೋಜನೆ"
      ],
      "correct": 0
     },
     {
      "q": "Where must the trusted evidence digest be stored?",
      "qKn": "ನಂಬಿಕಸ್ಥ ಸಾಕ್ಷ್ಯ digest ಅನ್ನು ಎಲ್ಲಿ ಸಂಗ್ರಹಿಸಬೇಕು?",
      "opts": [
       "Where the evidence author cannot change it",
       "Next to the file",
       "In the same folder",
       "Inside the report"
      ],
      "optsKn": [
       "ಸಾಕ್ಷ್ಯ ಲೇಖಕ ಬದಲಿಸಲಾಗದ ಸ್ಥಳದಲ್ಲಿ",
       "ಫೈಲ್ ಪಕ್ಕದಲ್ಲಿ",
       "ಅದೇ ಫೋಲ್ಡರ್‌ನಲ್ಲಿ",
       "ವರದಿಯ ಒಳಗೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
