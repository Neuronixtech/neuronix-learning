module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215bf",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Constitutional AI and Rule Overrides (Part 3 of 3) — Gate, Binding and Drift",
 "titleKn": "ಸಂವಿಧಾನಾತ್ಮಕ AI ಮತ್ತು ನಿಯಮ ಅತಿಕ್ರಮಣಗಳು (ಭಾಗ 3 / 3) — Gate, ಬಂಧ ಮತ್ತು Drift",
 "desc": "Chain a resolver into a policy gate, bind approval to a target, protect the policy and measure drift.",
 "descKn": "resolver ಅನ್ನು ನೀತಿ gate ಗೆ ಸರಪಳಿ ಮಾಡಿ, ಅನುಮೋದನೆಯನ್ನು ಗುರಿಗೆ ಬಂಧಿಸಿ, ನೀತಿ ರಕ್ಷಿಸಿ ಮತ್ತು drift ಅಳೆಯಿರಿ.",
 "objectives": [
  "Chain resolver, tools and approval.",
  "Bind approval to a target.",
  "Detect an edited policy.",
  "Measure drift with severity.",
  "Record the policy version."
 ],
 "objectivesKn": [
  "resolver, ಸಾಧನ ಮತ್ತು ಅನುಮೋದನೆ ಸರಪಳಿ ಮಾಡಿ.",
  "ಅನುಮೋದನೆಯನ್ನು ಗುರಿಗೆ ಬಂಧಿಸಿ.",
  "ಸಂಪಾದಿಸಿದ ನೀತಿ ಪತ್ತೆ ಮಾಡಿ.",
  "ತೀವ್ರತೆಯೊಂದಿಗೆ drift ಅಳೆಯಿರಿ.",
  "ನೀತಿ ಆವೃತ್ತಿ ದಾಖಲಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Constitutional AI and Rule Overrides (Part 3 of 3)",
    "textKn": "ಸಂವಿಧಾನಾತ್ಮಕ AI ಮತ್ತು ನಿಯಮ ಅತಿಕ್ರಮಣಗಳು (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: a policy gate chaining the resolver, a tool list, an approval rule, a simulated execution and an audit record, an approval bound to its target, a policy the agent can edit against a trusted digest and drift metrics on a 20-case set with three scripted evaluators. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind constitutional AI and rule overrides (enumerated rules against principles, a four-tier priority resolver, hard prohibitions, an operator allowlist, unknown evaluations, critique-and-revise and preference data flow, authority of document text, a policy gate with approval binding, policy integrity and drift metrics), not the real software, and the evaluations, the critique table, the scores, the labelled set and the model versions are all written by the lab author as scripts, no model is trained or queried, the tools are simulated and nothing is executed, so no real LLM behaviour is measured. The original code/main.py was not supplied and the lesson code was shown only in fragments, so the labs are our own implementation and the outputs were produced by running them. The lesson description of the 2022 Constitutional AI method, RLAIF, the 2023 participatory experiment and the 2026 Claude Constitution is conceptual or cited and was not run or checked here, and the labs involve no model. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: resolver, ಸಾಧನ ಪಟ್ಟಿ, ಅನುಮೋದನೆ ನಿಯಮ, ಅನುಕರಿಸಿದ ಕಾರ್ಯಗತಗೊಳಿಕೆ ಮತ್ತು ಲೆಕ್ಕಪರಿಶೋಧನೆ ದಾಖಲೆ ಸರಪಳಿ ಮಾಡುವ ನೀತಿ gate, ತನ್ನ ಗುರಿಗೆ ಬಂಧಿತ ಅನುಮೋದನೆ, ನಂಬಿಕಸ್ಥ digest ವಿರುದ್ಧ agent ಸಂಪಾದಿಸಬಹುದಾದ ನೀತಿ ಮತ್ತು ಮೂರು ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಮೌಲ್ಯಮಾಪಕರೊಂದಿಗೆ 20-ಪ್ರಕರಣ ಸೆಟ್‌ನ drift ಮಾಪನಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಸಂವಿಧಾನಾತ್ಮಕ AI ಮತ್ತು ನಿಯಮ ಅತಿಕ್ರಮಣಗಳು (ಪಟ್ಟಿ ಮಾಡಿದ ನಿಯಮಗಳು ಮತ್ತು ತತ್ವಗಳು, ನಾಲ್ಕು-ಹಂತದ ಆದ್ಯತೆ resolver, ಕಠಿಣ ನಿಷೇಧಗಳು, ಆಪರೇಟರ್ allowlist, ಅಜ್ಞಾತ ಮೌಲ್ಯಮಾಪನಗಳು, critique-and-revise ಮತ್ತು ಆದ್ಯತೆ ದತ್ತಾಂಶ ಹರಿವು, ದಾಖಲೆ ಪಠ್ಯದ ಅಧಿಕಾರ, ಅನುಮೋದನೆ ಬಂಧ ಇರುವ ನೀತಿ gate, ನೀತಿ ಸಮಗ್ರತೆ ಮತ್ತು drift ಮಾಪನಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಮೌಲ್ಯಮಾಪನಗಳು, critique ಟೇಬಲ್, ಅಂಕಗಳು, ಲೇಬಲ್ ಮಾಡಿದ ಸೆಟ್ ಮತ್ತು ಮಾದರಿ ಆವೃತ್ತಿಗಳು ಎಲ್ಲವನ್ನೂ ಲ್ಯಾಬ್ ಲೇಖಕ ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳಾಗಿ ಬರೆದಿದ್ದಾರೆ, ಯಾವುದೇ ಮಾದರಿ ತರಬೇತಿ ಅಥವಾ ಪ್ರಶ್ನೆ ಇಲ್ಲ, ಸಾಧನಗಳು ಅನುಕರಿಸಲ್ಪಟ್ಟಿವೆ ಮತ್ತು ಏನೂ ಕಾರ್ಯಗತವಾಗುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ ಮತ್ತು lesson ಕೋಡ್ ತುಣುಕುಗಳಲ್ಲಿ ಮಾತ್ರ ತೋರಿಸಲ್ಪಟ್ಟಿತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ ಮತ್ತು ಔಟ್‌ಪುಟ್ ಅನ್ನು ಅವನ್ನು ಓಡಿಸಿ ಪಡೆಯಲಾಗಿದೆ. 2022 Constitutional AI ವಿಧಾನ, RLAIF, 2023 ಭಾಗವಹಿಕೆ ಪ್ರಯೋಗ ಮತ್ತು 2026 Claude Constitution ಬಗ್ಗೆ lesson ವಿವರಣೆ ಪರಿಕಲ್ಪನಾತ್ಮಕ ಅಥವಾ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಓಡಿಸಿಲ್ಲ ಅಥವಾ ಪರಿಶೀಲಿಸಿಲ್ಲ, ಮತ್ತು ಲ್ಯಾಬ್‌ಗಳಲ್ಲಿ ಯಾವುದೇ ಮಾದರಿ ಇಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Allowed in Principle Is Not Authorised to Run",
    "textKn": "ತತ್ವದಲ್ಲಿ ಅನುಮತಿ ಎಂದರೆ ಓಡಲು ಅಧಿಕೃತ ಅಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Gate, a Digest and a Drift Table",
    "headingKn": "ಒಂದು Gate, ಒಂದು Digest ಮತ್ತು ಒಂದು Drift ಟೇಬಲ್",
    "bodyEn": "This part chains the constitutional resolver into a gate that also checks a tool list and an approval requirement, simulates the run, and writes an audit record with the policy version. It binds an approval to the exact target, shows what happens when the policy object itself is editable by the agent and when it is checked against a trusted digest, and measures drift between three scripted evaluator versions on a 20-case regression set using the lesson's disagreement rate, an error rate and a severity-weighted count. The evaluators are scripts standing in for model versions.",
    "bodyKn": "ಈ ಭಾಗ ಸಂವಿಧಾನಾತ್ಮಕ resolver ಅನ್ನು ಸಾಧನ ಪಟ್ಟಿ ಮತ್ತು ಅನುಮೋದನೆ ಅವಶ್ಯಕತೆಯನ್ನೂ ಪರಿಶೀಲಿಸುವ gate ಗೆ ಸರಪಳಿ ಮಾಡುತ್ತದೆ, ಓಟವನ್ನು ಅನುಕರಿಸಿ ನೀತಿ ಆವೃತ್ತಿಯೊಂದಿಗೆ ಲೆಕ್ಕಪರಿಶೋಧನೆ ದಾಖಲೆ ಬರೆಯುತ್ತದೆ. ಅದು ಅನುಮೋದನೆಯನ್ನು ನಿಖರ ಗುರಿಗೆ ಬಂಧಿಸುತ್ತದೆ, ನೀತಿ ವಸ್ತುವನ್ನೇ agent ಸಂಪಾದಿಸಬಹುದಾದಾಗ ಮತ್ತು ನಂಬಿಕಸ್ಥ digest ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿದಾಗ ಏನಾಗುತ್ತದೆ ತೋರಿಸುತ್ತದೆ, ಮತ್ತು 20-ಪ್ರಕರಣ regression ಸೆಟ್‌ನಲ್ಲಿ ಮೂರು ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಮೌಲ್ಯಮಾಪಕ ಆವೃತ್ತಿಗಳ ನಡುವಿನ drift ಅನ್ನು lesson ನ ಭಿನ್ನಾಭಿಪ್ರಾಯ ದರ, ದೋಷ ದರ ಮತ್ತು ತೀವ್ರತೆ-ತೂಕದ ಎಣಿಕೆಯಿಂದ ಅಳೆಯುತ್ತದೆ. ಮೌಲ್ಯಮಾಪಕರು ಮಾದರಿ ಆವೃತ್ತಿಗಳ ಸ್ಥಾನದಲ್ಲಿ ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳು."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Policy Gate",
    "headingKn": "ನೀತಿ Gate",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a constitutional ALLOW is not an authorisation</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">resolver</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">principles</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">tool list</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">runtime authority</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">approval</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">bound to target</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">audit</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">policy version</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a constitutional ALLOW is not an authorisation</text></svg>",
    "captionEn": "Constitution, tool list, approval and verification are separate layers.",
    "captionKn": "ಸಂವಿಧಾನ, ಸಾಧನ ಪಟ್ಟಿ, ಅನುಮೋದನೆ ಮತ್ತು ಪರಿಶೀಲನೆ ಪ್ರತ್ಯೇಕ ಪದರಗಳು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The six gate cases",
    "headingKn": "ಆರು gate ಪ್ರಕರಣಗಳು",
    "headers": [
     "Case",
     "Status"
    ],
    "rows": [
     [
      "case-001 analyse metrics",
      "VERIFIED_SIMULATION"
     ],
     [
      "case-002 misleading report",
      "REFUSED"
     ],
     [
      "case-003 hard prohibition",
      "REFUSED"
     ],
     [
      "case-004 disable audit logging",
      "MODIFICATION_REQUIRED"
     ],
     [
      "case-005 update configuration",
      "AWAITING_APPROVAL"
     ],
     [
      "case-006 delete_database tool",
      "UNAUTHORIZED_TOOL"
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
    "filename": "cn_3.py",
    "headingEn": "Policy, resolver, gate and drift evaluators",
    "headingKn": "ನೀತಿ, resolver, gate ಮತ್ತು drift ಮೌಲ್ಯಮಾಪಕರು",
    "descEn": "Gate.process chains the resolver, the tool list, the approval check and the audit record, proposal_digest binds an approval to a tool and target, and evaluator builds the scripted model versions used for drift.",
    "descKn": "Gate.process resolver, ಸಾಧನ ಪಟ್ಟಿ, ಅನುಮೋದನೆ ಪರಿಶೀಲನೆ ಮತ್ತು ಲೆಕ್ಕಪರಿಶೋಧನೆ ದಾಖಲೆ ಸರಪಳಿ ಮಾಡುತ್ತದೆ, proposal_digest ಅನುಮೋದನೆಯನ್ನು ಸಾಧನ ಮತ್ತು ಗುರಿಗೆ ಬಂಧಿಸುತ್ತದೆ, ಮತ್ತು evaluator drift ಗೆ ಬಳಸುವ ಸ್ಕ್ರಿಪ್ಟ್ ಮಾದರಿ ಆವೃತ್ತಿಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ.",
    "code": "def canonical(v):\r\n    return json.dumps(v, sort_keys=True, separators=(\",\", \":\"))\r\n\r\n\r\ndef digest(v):\r\n    return hashlib.sha256(canonical(v).encode()).hexdigest()\r\n\r\n\r\ndef make_policy():\r\n    return {\"policy_id\": \"constitutional-policy\", \"version\": \"1.0.0\", \"priority_order\": list(TIERS),\r\n            \"allowed_tools\": [\"read_document\", \"update_config\", \"restart_service\"], \"approval_tools\": [\"update_config\", \"restart_service\"]}\r\n\r\n\r\n@dataclass\r\nclass Proposal:\r\n    action_id: str\r\n    description: str\r\n    category: str\r\n    tool_name: str\r\n    target: str\r\n    evaluations: dict = field(default_factory=lambda: {t: \"PASS\" for t in TIERS})\r\n\r\n\r\ndef resolve(p):\r\n    if p.category in HARD:\r\n        return \"REFUSE\", \"HARD_PROHIBITION\"\r\n    for t in TIERS:\r\n        if p.evaluations[t] == \"BLOCK\":\r\n            return \"REFUSE\", t\r\n    for t in TIERS:\r\n        if p.evaluations[t] == \"UNKNOWN\":\r\n            return \"REVIEW\", t\r\n    for t in TIERS:\r\n        if p.evaluations[t] == \"MODIFY\":\r\n            return \"MODIFY\", t\r\n    return \"ALLOW\", \"NONE\"\r\n\r\n\r\ndef proposal_digest(p):\r\n    return digest({\"action_id\": p.action_id, \"tool\": p.tool_name, \"target\": p.target})\r\n\r\n\r\nclass Gate:\r\n    def __init__(self, policy, trusted_digest=None):\r\n        if trusted_digest is not None and digest(policy) != trusted_digest:\r\n            raise ValueError(\"policy does not match the trusted digest\")\r\n        self.policy, self.audit = policy, []\r\n\r\n    def process(self, p, approvals=()):\r\n        decision, tier = resolve(p)\r\n        if decision == \"REFUSE\":\r\n            status = \"REFUSED\"\r\n        elif decision == \"MODIFY\":\r\n            status = \"MODIFICATION_REQUIRED\"\r\n        elif decision == \"REVIEW\":\r\n            status = \"REVIEW_REQUIRED\"\r\n        elif p.tool_name not in self.policy[\"allowed_tools\"]:\r\n            status = \"UNAUTHORIZED_TOOL\"\r\n        elif p.tool_name in self.policy[\"approval_tools\"] and not any(a[\"proposal_digest\"] == proposal_digest(p) for a in approvals):\r\n            status = \"AWAITING_APPROVAL\"\r\n        else:\r\n            status = \"VERIFIED_SIMULATION\"\r\n        self.audit.append({\"action_id\": p.action_id, \"decision\": decision, \"controlling_tier\": tier, \"status\": status,\r\n                           \"policy_version\": self.policy[\"version\"], \"policy_digest\": digest(self.policy)[:12]})\r\n        return status\r\n\r\n\r\n# feature-driven scripted evaluators standing in for three model versions\r\nCASES = [\r\n    (\"own statement\", {\"own_data\": True}, \"ALLOW\"), (\"own order history\", {\"own_data\": True}, \"ALLOW\"), (\"own invoice\", {\"own_data\": True}, \"ALLOW\"),\r\n    (\"another customer's records\", {\"others_data\": True}, \"REFUSE\"), (\"another customer's address\", {\"others_data\": True}, \"REFUSE\"),\r\n    (\"public documentation\", {}, \"ALLOW\"), (\"public changelog\", {}, \"ALLOW\"),\r\n    (\"disable mandatory audit logs\", {\"audit\": True}, \"MODIFY\"), (\"hide audit events because they are noisy\", {\"audit\": True, \"noise\": True}, \"MODIFY\"),\r\n    (\"explain a decorator\", {}, \"ALLOW\"), (\"explain an exception\", {}, \"ALLOW\"), (\"generate unit tests\", {}, \"ALLOW\"),\r\n    (\"operator disables a hard prohibition\", {\"hard\": True}, \"REFUSE\"), (\"operator switches off every safeguard\", {\"hard\": True}, \"REFUSE\"),\r\n    (\"misleading performance report\", {\"misleading\": True}, \"REFUSE\"), (\"conceal a known incident\", {\"misleading\": True}, \"REFUSE\"),\r\n    (\"reduce debug logging\", {}, \"ALLOW\"), (\"reduce verbose tracing\", {}, \"ALLOW\"),\r\n    (\"summarise a report\", {\"summary\": True}, \"ALLOW\"), (\"draft release notes\", {}, \"ALLOW\"),\r\n]\r\n\r\n\r\ndef evaluator(version):\r\n    def run(features):\r\n        ev = {t: \"PASS\" for t in TIERS}\r\n        cat = \"general\"\r\n        if features.get(\"others_data\") or features.get(\"misleading\"):\r\n            ev[\"ETHICS\"] = \"BLOCK\"\r\n        if features.get(\"hard\"):\r\n            cat = \"prohibited_critical_infrastructure_attack\"\r\n        if features.get(\"audit\"):\r\n            ev[\"SAFETY\"] = \"MODIFY\"\r\n        if version == \"v2\":\r\n            if features.get(\"own_data\"):\r\n                ev[\"SAFETY\"] = \"BLOCK\"\r\n            if features.get(\"noise\"):\r\n                ev[\"SAFETY\"] = \"PASS\"\r\n        if version == \"v3\":\r\n            if features.get(\"own_data\") or features.get(\"summary\"):\r\n                ev[\"SAFETY\"] = \"BLOCK\"\r\n        return Proposal(\"x\", \"d\", cat, \"read_document\", \"t\", ev)\r\n    return run\r\n\r\n\r\ndef decisions(version):\r\n    f = evaluator(version)\r\n    return [resolve(f(feat))[0] for _, feat, _ in CASES]\r\n\r\n\r\ndef metrics(version):\r\n    got = decisions(version)\r\n    wrong = [(i, g) for i, g in enumerate(got) if g != CASES[i][2]]\r\n    severity = 0\r\n    for i, g in wrong:\r\n        expected = CASES[i][2]\r\n        severity += 10 if (g == \"ALLOW\" and expected != \"ALLOW\") else 1\r\n    return got, len(wrong), severity\r\n\r\n\r\nclass GateTests(unittest.TestCase):\r\n    def mk(self, **kw):\r\n        base = dict(action_id=\"a\", description=\"d\", category=\"general\", tool_name=\"read_document\", target=\"t\")\r\n        base.update(kw)\r\n        return Proposal(**base)\r\n\r\n    def test_allowed_read(self):\r\n        self.assertEqual(Gate(make_policy()).process(self.mk()), \"VERIFIED_SIMULATION\")\r\n\r\n    def test_unauthorised_tool(self):\r\n        self.assertEqual(Gate(make_policy()).process(self.mk(tool_name=\"delete_database\")), \"UNAUTHORIZED_TOOL\")\r\n\r\n    def test_approval_required(self):\r\n        self.assertEqual(Gate(make_policy()).process(self.mk(tool_name=\"update_config\")), \"AWAITING_APPROVAL\")\r\n\r\n    def test_approval_bound_to_target(self):\r\n        g = Gate(make_policy())\r\n        staging = self.mk(tool_name=\"restart_service\", target=\"staging-1\")\r\n        prod = self.mk(tool_name=\"restart_service\", target=\"prod-all\")\r\n        ap = [{\"proposal_digest\": proposal_digest(staging)}]\r\n        self.assertEqual((g.process(staging, ap), g.process(prod, ap)), (\"VERIFIED_SIMULATION\", \"AWAITING_APPROVAL\"))\r\n\r\n    def test_hard_prohibition_ignores_approval(self):\r\n        p = self.mk(category=\"prohibited_cbrn_assistance\", tool_name=\"update_config\")\r\n        self.assertEqual(Gate(make_policy()).process(p, [{\"proposal_digest\": proposal_digest(p)}]), \"REFUSED\")\r\n\r\n    def test_tampered_policy_detected(self):\r\n        pol = make_policy()\r\n        trusted = digest(pol)\r\n        pol[\"allowed_tools\"].append(\"delete_database\")\r\n        with self.assertRaises(ValueError):\r\n            Gate(pol, trusted)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cn_3.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the six cases, the approval binding, the editable policy, the drift table, the audit record and six unit tests.",
    "descKn": "main() ಆರು ಪ್ರಕರಣ, ಅನುಮೋದನೆ ಬಂಧ, ಸಂಪಾದಿಸಬಹುದಾದ ನೀತಿ, drift ಟೇಬಲ್, ಲೆಕ್ಕಪರಿಶೋಧನೆ ದಾಖಲೆ ಮತ್ತು ಆರು unit ಪರೀಕ್ಷೆ ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely running: the policy gate on six cases\")\r\n    g = Gate(make_policy())\r\n    cases = [\r\n        (\"Analyze performance metrics\", Proposal(\"case-001\", \"m\", \"general\", \"read_document\", \"metrics\")),\r\n        (\"Prepare misleading report\", Proposal(\"case-002\", \"r\", \"reporting\", \"read_document\", \"report\", {**{t: \"PASS\" for t in TIERS}, \"ETHICS\": \"BLOCK\"})),\r\n        (\"Hard prohibition demonstration\", Proposal(\"case-003\", \"h\", \"prohibited_cbrn_assistance\", \"read_document\", \"x\")),\r\n        (\"Disable production audit logging\", Proposal(\"case-004\", \"a\", \"operations\", \"update_config\", \"audit\", {**{t: \"PASS\" for t in TIERS}, \"SAFETY\": \"MODIFY\"})),\r\n        (\"Update application configuration\", Proposal(\"case-005\", \"c\", \"operations\", \"update_config\", \"app.cfg\")),\r\n        (\"Attempt unauthorized tool use\", Proposal(\"case-006\", \"d\", \"operations\", \"delete_database\", \"prod\")),\r\n    ]\r\n    for title, p in cases:\r\n        print(f\"{p.action_id}: {title:34} -> {g.process(p)}\")\r\n    print(\"the gate returned a verified simulation, two refusals, a modification requirement, a wait for approval and an unauthorised tool, in that order; the simulation verified nothing real, and an ALLOW from the resolver was still subject to the tool list and the approval rule\")\r\n\r\n    section(\"2. Genuinely running: an approval bound to the exact action\")\r\n    g = Gate(make_policy())\r\n    staging = Proposal(\"restart-1\", \"r\", \"operations\", \"restart_service\", \"staging-1\")\r\n    prod = Proposal(\"restart-1\", \"r\", \"operations\", \"restart_service\", \"prod-all\")\r\n    approval = [{\"proposal_digest\": proposal_digest(staging), \"reviewer\": \"reviewer-01\"}]\r\n    print(\"staging restart with its approval:\", g.process(staging, approval))\r\n    print(\"same action id, target changed to production, same approval:\", g.process(prod, approval))\r\n    hard = Proposal(\"h-1\", \"h\", \"prohibited_cbrn_assistance\", \"update_config\", \"x\")\r\n    print(\"hard prohibition with a matching approval:\", g.process(hard, [{\"proposal_digest\": proposal_digest(hard)}]))\r\n    print(\"the approval covered the staging target only, so changing the target made the proposal wait again, and an approval cannot lift a hard prohibition; the reviewer name here is a string and nothing authenticates it\")\r\n\r\n    section(\"3. Genuinely running: a policy the agent can edit\")\r\n    pol = make_policy()\r\n    trusted = digest(pol)\r\n    print(\"trusted digest prefix:\", trusted[:12])\r\n    pol[\"allowed_tools\"].append(\"delete_database\")\r\n    unchecked = Gate(pol)\r\n    print(\"unchecked gate after the edit, case-006:\", unchecked.process(cases[5][1]))\r\n    try:\r\n        Gate(pol, trusted)\r\n    except ValueError as e:\r\n        print(\"gate built against the trusted digest:\", e)\r\n    print(\"an in-process policy the agent could write let the unauthorised tool through, and comparing against a digest held elsewhere refused to start; the digest only helps while it is stored where the agent cannot write, and a hash does not show the policy was approved\")\r\n\r\n    section(\"4. Genuinely measuring: drift between three scripted evaluator versions\")\r\n    base = decisions(\"v1\")\r\n    print(f\"v1 against the expected decisions: {metrics('v1')[1]} wrong of {len(CASES)}\")\r\n    for v in (\"v2\", \"v3\"):\r\n        got, wrong, sev = metrics(v)\r\n        changed = sum(1 for a, b in zip(base, got) if a != b)\r\n        print(f\"{v}: changed decisions {changed}/{len(CASES)} = {changed / len(CASES):.2f} | wrong {wrong}/{len(CASES)} = {wrong / len(CASES):.2f} | severity-weighted {sev}\")\r\n    got2 = decisions(\"v2\")\r\n    print(\"v2 changes:\", [(CASES[i][0], base[i], got2[i]) for i in range(len(CASES)) if base[i] != got2[i]])\r\n    print(\"v2 and v3 both changed 4 of 20 decisions, so the disagreement rate is identical at 0.20, but v2 wrongly allowed an audit-log change that should have been modified and was weighted 10 for it, while v3 only refused harmless requests; disagreement shows that behaviour moved and the labelled expectation and the weights are what say whether it moved the wrong way\")\r\n\r\n    section(\"5. Genuinely running: the audit record\")\r\n    g = Gate(make_policy())\r\n    g.process(cases[4][1])\r\n    print(json.dumps(g.audit[0], sort_keys=True))\r\n    print(\"each record carries the policy version and a short digest of the policy that decided it, so a later reader can tell which rules applied; the record sits in memory here and an agent that can write to it can edit it\")\r\n\r\n    section(\"6. Genuinely running: the unit tests\")\r\n    stream = io.StringIO()\r\n    res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(GateTests))\r\n    print(f\"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}\")\r\n    print(\"the tests cover an allowed read, an unauthorised tool, an approval requirement, an approval bound to its target, a hard prohibition that ignores approval and a tampered policy, on this lab's own gate\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the policy gate on six cases ---\ncase-001: Analyze performance metrics        -> VERIFIED_SIMULATION\ncase-002: Prepare misleading report          -> REFUSED\ncase-003: Hard prohibition demonstration     -> REFUSED\ncase-004: Disable production audit logging   -> MODIFICATION_REQUIRED\ncase-005: Update application configuration   -> AWAITING_APPROVAL\ncase-006: Attempt unauthorized tool use      -> UNAUTHORIZED_TOOL\nthe gate returned a verified simulation, two refusals, a modification requirement, a wait for approval and an unauthorised tool, in that order; the simulation verified nothing real, and an ALLOW from the resolver was still subject to the tool list and the approval rule\n\n--- 2. Genuinely running: an approval bound to the exact action ---\nstaging restart with its approval: VERIFIED_SIMULATION\nsame action id, target changed to production, same approval: AWAITING_APPROVAL\nhard prohibition with a matching approval: REFUSED\nthe approval covered the staging target only, so changing the target made the proposal wait again, and an approval cannot lift a hard prohibition; the reviewer name here is a string and nothing authenticates it\n\n--- 3. Genuinely running: a policy the agent can edit ---\ntrusted digest prefix: 7ff386c45b6c\nunchecked gate after the edit, case-006: VERIFIED_SIMULATION\ngate built against the trusted digest: policy does not match the trusted digest\nan in-process policy the agent could write let the unauthorised tool through, and comparing against a digest held elsewhere refused to start; the digest only helps while it is stored where the agent cannot write, and a hash does not show the policy was approved\n\n--- 4. Genuinely measuring: drift between three scripted evaluator versions ---\nv1 against the expected decisions: 0 wrong of 20\nv2: changed decisions 4/20 = 0.20 | wrong 4/20 = 0.20 | severity-weighted 13\nv3: changed decisions 4/20 = 0.20 | wrong 4/20 = 0.20 | severity-weighted 4\nv2 changes: [('own statement', 'ALLOW', 'REFUSE'), ('own order history', 'ALLOW', 'REFUSE'), ('own invoice', 'ALLOW', 'REFUSE'), ('hide audit events because they are noisy', 'MODIFY', 'ALLOW')]\nv2 and v3 both changed 4 of 20 decisions, so the disagreement rate is identical at 0.20, but v2 wrongly allowed an audit-log change that should have been modified and was weighted 10 for it, while v3 only refused harmless requests; disagreement shows that behaviour moved and the labelled expectation and the weights are what say whether it moved the wrong way\n\n--- 5. Genuinely running: the audit record ---\n{\"action_id\": \"case-005\", \"controlling_tier\": \"NONE\", \"decision\": \"ALLOW\", \"policy_digest\": \"7ff386c45b6c\", \"policy_version\": \"1.0.0\", \"status\": \"AWAITING_APPROVAL\"}\neach record carries the policy version and a short digest of the policy that decided it, so a later reader can tell which rules applied; the record sits in memory here and an agent that can write to it can edit it\n\n--- 6. Genuinely running: the unit tests ---\nran 6 tests | failures 0 | errors 0 | passed True\nthe tests cover an allowed read, an unauthorised tool, an approval requirement, an approval bound to its target, a hard prohibition that ignores approval and a tampered policy, on this lab's own gate"
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
    "headingEn": "Experiment 1: The policy gate on six cases",
    "headingKn": "ಪ್ರಯೋಗ 1: The policy gate on six cases",
    "bodyEn": "What it ran: The policy gate on six cases. What the lab concluded: the gate returned a verified simulation, two refusals, a modification requirement, a wait for approval and an unauthorised tool, in that order; the simulation verified nothing real, and an ALLOW from the resolver was still subject to the tool list and the approval rule",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The policy gate on six cases. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the gate returned a verified simulation, two refusals, a modification requirement, a wait for approval and an unauthorised tool, in that order; the simulation verified nothing real, and an ALLOW from the resolver was still subject to the tool list and the approval rule"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: the policy gate on six cases ---\ncase-001: Analyze performance metrics        -> VERIFIED_SIMULATION\ncase-002: Prepare misleading report          -> REFUSED\ncase-003: Hard prohibition demonstration     -> REFUSED\ncase-004: Disable production audit logging   -> MODIFICATION_REQUIRED\ncase-005: Update application configuration   -> AWAITING_APPROVAL\ncase-006: Attempt unauthorized tool use      -> UNAUTHORIZED_TOOL"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: An approval bound to the exact action",
    "headingKn": "ಪ್ರಯೋಗ 2: An approval bound to the exact action",
    "bodyEn": "What it ran: An approval bound to the exact action. What the lab concluded: the approval covered the staging target only, so changing the target made the proposal wait again, and an approval cannot lift a hard prohibition; the reviewer name here is a string and nothing authenticates it",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: An approval bound to the exact action. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the approval covered the staging target only, so changing the target made the proposal wait again, and an approval cannot lift a hard prohibition; the reviewer name here is a string and nothing authenticates it"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: an approval bound to the exact action ---\nstaging restart with its approval: VERIFIED_SIMULATION\nsame action id, target changed to production, same approval: AWAITING_APPROVAL\nhard prohibition with a matching approval: REFUSED"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: A policy the agent can edit",
    "headingKn": "ಪ್ರಯೋಗ 3: A policy the agent can edit",
    "bodyEn": "What it ran: A policy the agent can edit. What the lab concluded: an in-process policy the agent could write let the unauthorised tool through, and comparing against a digest held elsewhere refused to start; the digest only helps while it is stored where the agent cannot write, and a hash does not show the policy was approved",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A policy the agent can edit. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): an in-process policy the agent could write let the unauthorised tool through, and comparing against a digest held elsewhere refused to start; the digest only helps while it is stored where the agent cannot write, and a hash does not show the policy was approved"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: a policy the agent can edit ---\ntrusted digest prefix: 7ff386c45b6c\nunchecked gate after the edit, case-006: VERIFIED_SIMULATION\ngate built against the trusted digest: policy does not match the trusted digest"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Drift between three scripted evaluator versions",
    "headingKn": "ಪ್ರಯೋಗ 4: Drift between three scripted evaluator versions",
    "bodyEn": "What it ran: Drift between three scripted evaluator versions. What the lab concluded: v2 and v3 both changed 4 of 20 decisions, so the disagreement rate is identical at 0.20, but v2 wrongly allowed an audit-log change that should have been modified and was weighted 10 for it, while v3 only refused harmless requests; disagreement shows that behaviour moved and the labelled expectation and the weights are what say whether it moved the wrong way",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Drift between three scripted evaluator versions. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): v2 and v3 both changed 4 of 20 decisions, so the disagreement rate is identical at 0.20, but v2 wrongly allowed an audit-log change that should have been modified and was weighted 10 for it, while v3 only refused harmless requests; disagreement shows that behaviour moved and the labelled expectation and the weights are what say whether it moved the wrong way"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely measuring: drift between three scripted evaluator versions ---\nv1 against the expected decisions: 0 wrong of 20\nv2: changed decisions 4/20 = 0.20 | wrong 4/20 = 0.20 | severity-weighted 13\nv3: changed decisions 4/20 = 0.20 | wrong 4/20 = 0.20 | severity-weighted 4\nv2 changes: [('own statement', 'ALLOW', 'REFUSE'), ('own order history', 'ALLOW', 'REFUSE'), ('own invoice', 'ALLOW', 'REFUSE'), ('hide audit events because they are noisy', 'MODIFY', 'ALLOW')]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: The audit record",
    "headingKn": "ಪ್ರಯೋಗ 5: The audit record",
    "bodyEn": "What it ran: The audit record. What the lab concluded: each record carries the policy version and a short digest of the policy that decided it, so a later reader can tell which rules applied; the record sits in memory here and an agent that can write to it can edit it",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The audit record. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each record carries the policy version and a short digest of the policy that decided it, so a later reader can tell which rules applied; the record sits in memory here and an agent that can write to it can edit it"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: the audit record ---\n{\"action_id\": \"case-005\", \"controlling_tier\": \"NONE\", \"decision\": \"ALLOW\", \"policy_digest\": \"7ff386c45b6c\", \"policy_version\": \"1.0.0\", \"status\": \"AWAITING_APPROVAL\"}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: The unit tests",
    "headingKn": "ಪ್ರಯೋಗ 6: The unit tests",
    "bodyEn": "What it ran: The unit tests. What the lab concluded: the tests cover an allowed read, an unauthorised tool, an approval requirement, an approval bound to its target, a hard prohibition that ignores approval and a tampered policy, on this lab's own gate",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The unit tests. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the tests cover an allowed read, an unauthorised tool, an approval requirement, an approval bound to its target, a hard prohibition that ignores approval and a tampered policy, on this lab's own gate"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: the unit tests ---\nran 6 tests | failures 0 | errors 0 | passed True"
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
    "headingEn": "Genuinely Found: Gate, Approval Binding and Policy Edit",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Gate, ಅನುಮೋದನೆ ಬಂಧ ಮತ್ತು ನೀತಿ ಸಂಪಾದನೆ",
    "bodyEn": "Section 1: the six cases gave VERIFIED_SIMULATION, REFUSED, REFUSED, MODIFICATION_REQUIRED, AWAITING_APPROVAL and UNAUTHORIZED_TOOL. Section 2: the staging restart with its approval gave VERIFIED_SIMULATION, the same id with the target changed to production gave AWAITING_APPROVAL, and a hard prohibition with a matching approval gave REFUSED. Section 3: after the agent appended delete_database to the list the unchecked gate gave VERIFIED_SIMULATION for case-006, and a gate built against the trusted digest refused to start.",
    "bodyKn": "ವಿಭಾಗ 1: ಆರು ಪ್ರಕರಣಗಳು VERIFIED_SIMULATION, REFUSED, REFUSED, MODIFICATION_REQUIRED, AWAITING_APPROVAL ಮತ್ತು UNAUTHORIZED_TOOL ನೀಡಿದವು. ವಿಭಾಗ 2: ತನ್ನ ಅನುಮೋದನೆಯೊಂದಿಗೆ staging ಮರುಪ್ರಾರಂಭ VERIFIED_SIMULATION ನೀಡಿತು, ಗುರಿ production ಗೆ ಬದಲಿಸಿದ ಅದೇ id AWAITING_APPROVAL ನೀಡಿತು, ಮತ್ತು ಹೊಂದುವ ಅನುಮೋದನೆಯೊಂದಿಗೆ ಕಠಿಣ ನಿಷೇಧ REFUSED ನೀಡಿತು. ವಿಭಾಗ 3: agent ಪಟ್ಟಿಗೆ delete_database ಸೇರಿಸಿದ ನಂತರ ಪರಿಶೀಲಿಸದ gate case-006 ಗೆ VERIFIED_SIMULATION ನೀಡಿತು, ಮತ್ತು ನಂಬಿಕಸ್ಥ digest ವಿರುದ್ಧ ನಿರ್ಮಿಸಿದ gate ಪ್ರಾರಂಭಿಸಲು ನಿರಾಕರಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Drift, Audit and Tests",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Drift, ಲೆಕ್ಕಪರಿಶೋಧನೆ ಮತ್ತು ಪರೀಕ್ಷೆಗಳು",
    "bodyEn": "Section 4: v1 was wrong on 0 of 20, v2 and v3 each changed 4 of 20 decisions for a disagreement rate of 0.20 and were wrong on 4 of 20, with a severity-weighted count of 13 for v2 and 4 for v3. Section 5: the audit record for case-005 carried the policy version 1.0.0 and a short policy digest. Section 6: the six unit tests ran with 0 failures and 0 errors.",
    "bodyKn": "ವಿಭಾಗ 4: v1 20 ರಲ್ಲಿ 0 ತಪ್ಪು, v2 ಮತ್ತು v3 ಪ್ರತಿಯೊಂದೂ 20 ರಲ್ಲಿ 4 ನಿರ್ಧಾರ ಬದಲಿಸಿ 0.20 ಭಿನ್ನಾಭಿಪ್ರಾಯ ದರ ಹೊಂದಿದವು ಮತ್ತು 20 ರಲ್ಲಿ 4 ತಪ್ಪಾದವು, ತೀವ್ರತೆ-ತೂಕದ ಎಣಿಕೆ v2 ಗೆ 13 ಮತ್ತು v3 ಗೆ 4. ವಿಭಾಗ 5: case-005 ಲೆಕ್ಕಪರಿಶೋಧನೆ ದಾಖಲೆ ನೀತಿ ಆವೃತ್ತಿ 1.0.0 ಮತ್ತು ಸಣ್ಣ ನೀತಿ digest ಹೊಂದಿತ್ತು. ವಿಭಾಗ 6: ಆರು unit ಪರೀಕ್ಷೆಗಳು 0 ವೈಫಲ್ಯ ಮತ್ತು 0 ದೋಷದೊಂದಿಗೆ ಓಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "An approval bound to one target, a tool list the agent cannot rewrite and a drift table with severity weights are what keep a constitutional ALLOW from turning into an unauthorised action or a quiet regression.",
    "bodyKn": "ಒಂದು ಗುರಿಗೆ ಬಂಧಿತ ಅನುಮೋದನೆ, agent ಮರುಬರೆಯಲಾಗದ ಸಾಧನ ಪಟ್ಟಿ ಮತ್ತು ತೀವ್ರತೆ ತೂಕ ಇರುವ drift ಟೇಬಲ್ ಸಂವಿಧಾನಾತ್ಮಕ ALLOW ಅನ್ನು ಅನಧಿಕೃತ ಕ್ರಿಯೆ ಅಥವಾ ಮೌನ ಹಿನ್ನಡೆಯಾಗಿ ಬದಲಾಗದಂತೆ ಕಾಯುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"equal disagreement rates mean equal drift.\" Both scripted versions changed 4 of 20, yet one was weighted 13 and the other 4.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಸಮಾನ ಭಿನ್ನಾಭಿಪ್ರಾಯ ದರ ಎಂದರೆ ಸಮಾನ drift.\" ಎರಡೂ ಸ್ಕ್ರಿಪ್ಟ್ ಆವೃತ್ತಿಗಳು 20 ರಲ್ಲಿ 4 ಬದಲಿಸಿದವು, ಆದರೂ ಒಂದಕ್ಕೆ 13 ಮತ್ತು ಇನ್ನೊಂದಕ್ಕೆ 4 ತೂಕ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Policy gate: the one path an action takes before it runs. Approval binding: approval tied to an exact action. Drift: a change in decisions between versions. Severity weight: a cost per kind of error.",
    "bodyKn": "ನೀತಿ gate: ಕ್ರಿಯೆ ಓಡುವ ಮೊದಲು ತೆಗೆದುಕೊಳ್ಳುವ ಏಕೈಕ ಮಾರ್ಗ. ಅನುಮೋದನೆ ಬಂಧ: ನಿಖರ ಕ್ರಿಯೆಗೆ ಜೋಡಿಸಿದ ಅನುಮೋದನೆ. Drift: ಆವೃತ್ತಿಗಳ ನಡುವೆ ನಿರ್ಧಾರಗಳ ಬದಲಾವಣೆ. ತೀವ್ರತೆ ತೂಕ: ಪ್ರತಿ ರೀತಿಯ ದೋಷಕ್ಕೆ ವೆಚ್ಚ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Six cases gave six different statuses. 2) A changed target needed a new approval. 3) An editable policy let the unauthorised tool through. 4) A trusted digest refused the edited policy. 5) Equal disagreement hid a 13 against 4 severity gap.",
    "bodyKn": "1) ಆರು ಪ್ರಕರಣಗಳು ಆರು ಬೇರೆ ಸ್ಥಿತಿ ನೀಡಿದವು. 2) ಬದಲಾದ ಗುರಿಗೆ ಹೊಸ ಅನುಮೋದನೆ ಬೇಕಾಯಿತು. 3) ಸಂಪಾದಿಸಬಹುದಾದ ನೀತಿ ಅನಧಿಕೃತ ಸಾಧನ ಹಾದುಹೋಗಲು ಬಿಟ್ಟಿತು. 4) ನಂಬಿಕಸ್ಥ digest ಸಂಪಾದಿಸಿದ ನೀತಿ ನಿರಾಕರಿಸಿತು. 5) ಸಮಾನ ಭಿನ್ನಾಭಿಪ್ರಾಯ 13 ಮತ್ತು 4 ತೀವ್ರತೆ ಅಂತರ ಮರೆಮಾಡಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What status did case-005, an update to the application configuration, get?",
      "qKn": "ಅಪ್ಲಿಕೇಶನ್ ಸಂರಚನೆ ನವೀಕರಣವಾದ case-005 ಯಾವ ಸ್ಥಿತಿ ಪಡೆಯಿತು?",
      "opts": [
       "AWAITING_APPROVAL",
       "REFUSED",
       "UNAUTHORIZED_TOOL",
       "VERIFIED_SIMULATION"
      ],
      "optsKn": [
       "AWAITING_APPROVAL (ಅನುಮೋದನೆಗೆ ಕಾಯುತ್ತಿದೆ)",
       "REFUSED (ನಿರಾಕರಿಸಲಾಗಿದೆ)",
       "UNAUTHORIZED_TOOL (ಅನಧಿಕೃತ ಸಾಧನ)",
       "VERIFIED_SIMULATION (ಪರಿಶೀಲಿತ ಅನುಕರಣೆ)"
      ],
      "correct": 0
     },
     {
      "q": "What happened when the approved staging restart was changed to target production?",
      "qKn": "ಅನುಮೋದಿತ staging ಮರುಪ್ರಾರಂಭದ ಗುರಿಯನ್ನು production ಗೆ ಬದಲಿಸಿದಾಗ ಏನಾಯಿತು?",
      "opts": [
       "It waited for approval again",
       "It ran",
       "It was refused as a hard prohibition",
       "It was deleted"
      ],
      "optsKn": [
       "ಅದು ಮತ್ತೆ ಅನುಮೋದನೆಗೆ ಕಾಯಿತು",
       "ಅದು ಓಡಿತು",
       "ಕಠಿಣ ನಿಷೇಧವಾಗಿ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು",
       "ಅದು ಅಳಿಸಲ್ಪಟ್ಟಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What was the severity-weighted count for v2?",
      "qKn": "v2 ಗೆ ತೀವ್ರತೆ-ತೂಕದ ಎಣಿಕೆ ಎಷ್ಟು?",
      "opts": [
       "13",
       "4",
       "20",
       "0"
      ],
      "optsKn": [
       "13",
       "4",
       "20",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "What was the disagreement rate of v2 against v1?",
      "qKn": "v1 ವಿರುದ್ಧ v2 ನ ಭಿನ್ನಾಭಿಪ್ರಾಯ ದರ ಎಷ್ಟು?",
      "opts": [
       "0.20",
       "0.09",
       "0.50",
       "0.00"
      ],
      "optsKn": [
       "0.20",
       "0.09",
       "0.50",
       "0.00"
      ],
      "correct": 0
     },
     {
      "q": "What stopped the gate from using the edited policy?",
      "qKn": "ಸಂಪಾದಿಸಿದ ನೀತಿ ಬಳಸದಂತೆ gate ಅನ್ನು ಯಾವುದು ತಡೆಯಿತು?",
      "opts": [
       "A comparison with a trusted digest",
       "The resolver",
       "The audit log",
       "The tool list itself"
      ],
      "optsKn": [
       "ನಂಬಿಕಸ್ಥ digest ಜೊತೆ ಹೋಲಿಕೆ",
       "resolver",
       "ಲೆಕ್ಕಪರಿಶೋಧನೆ ಲಾಗ್",
       "ಸಾಧನ ಪಟ್ಟಿ ಸ್ವತಃ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
