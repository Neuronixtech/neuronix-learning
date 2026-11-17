module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215bf",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Constitutional AI and Rule Overrides (Part 1 of 3) — Rules, Tiers and Allowlists",
 "titleKn": "ಸಂವಿಧಾನಾತ್ಮಕ AI ಮತ್ತು ನಿಯಮ ಅತಿಕ್ರಮಣಗಳು (ಭಾಗ 1 / 3) — ನಿಯಮಗಳು, ಹಂತಗಳು ಮತ್ತು Allowlists",
 "desc": "Score rule styles on a labelled set, build the four-tier resolver and test an allowlist and a mislabelled category.",
 "descKn": "ಲೇಬಲ್ ಮಾಡಿದ ಸೆಟ್‌ನಲ್ಲಿ ನಿಯಮ ಶೈಲಿ ಅಂಕಿಸಿ, ನಾಲ್ಕು-ಹಂತದ resolver ನಿರ್ಮಿಸಿ ಮತ್ತು allowlist ಹಾಗೂ ತಪ್ಪು ಲೇಬಲ್ ವರ್ಗ ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Score rule styles honestly.",
  "Resolve four tiers.",
  "Refuse a hard prohibition.",
  "Allowlist operator settings.",
  "Distrust a declared label."
 ],
 "objectivesKn": [
  "ನಿಯಮ ಶೈಲಿ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಅಂಕಿಸಿ.",
  "ನಾಲ್ಕು ಹಂತ resolve ಮಾಡಿ.",
  "ಕಠಿಣ ನಿಷೇಧ ನಿರಾಕರಿಸಿ.",
  "ಆಪರೇಟರ್ ಸೆಟ್ಟಿಂಗ್ allowlist ಮಾಡಿ.",
  "ಘೋಷಿತ ಲೇಬಲ್ ಅನ್ನು ಅನುಮಾನಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Constitutional AI and Rule Overrides (Part 1 of 3)",
    "textKn": "ಸಂವಿಧಾನಾತ್ಮಕ AI ಮತ್ತು ನಿಯಮ ಅತಿಕ್ರಮಣಗಳು (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: enumerated rules against a labelled set, the four-tier priority resolver with a hard-prohibition check first, an operator allowlist against a naive merge, a mislabelled category and six unit tests that are run. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind constitutional AI and rule overrides (enumerated rules against principles, a four-tier priority resolver, hard prohibitions, an operator allowlist, unknown evaluations, critique-and-revise and preference data flow, authority of document text, a policy gate with approval binding, policy integrity and drift metrics), not the real software, and the evaluations, the critique table, the scores, the labelled set and the model versions are all written by the lab author as scripts, no model is trained or queried, the tools are simulated and nothing is executed, so no real LLM behaviour is measured. The original code/main.py was not supplied and the lesson code was shown only in fragments, so the labs are our own implementation and the outputs were produced by running them. The lesson description of the 2022 Constitutional AI method, RLAIF, the 2023 participatory experiment and the 2026 Claude Constitution is conceptual or cited and was not run or checked here, and the labs involve no model. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಲೇಬಲ್ ಮಾಡಿದ ಸೆಟ್ ವಿರುದ್ಧ ಪಟ್ಟಿ ಮಾಡಿದ ನಿಯಮಗಳು, ಮೊದಲು ಕಠಿಣ-ನಿಷೇಧ ಪರಿಶೀಲನೆ ಇರುವ ನಾಲ್ಕು-ಹಂತದ ಆದ್ಯತೆ resolver, ನೈವ್ ವಿಲೀನದ ವಿರುದ್ಧ ಆಪರೇಟರ್ allowlist, ತಪ್ಪಾಗಿ ಲೇಬಲ್ ಮಾಡಿದ ವರ್ಗ ಮತ್ತು ಓಡಿಸಿದ ಆರು unit ಪರೀಕ್ಷೆಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಸಂವಿಧಾನಾತ್ಮಕ AI ಮತ್ತು ನಿಯಮ ಅತಿಕ್ರಮಣಗಳು (ಪಟ್ಟಿ ಮಾಡಿದ ನಿಯಮಗಳು ಮತ್ತು ತತ್ವಗಳು, ನಾಲ್ಕು-ಹಂತದ ಆದ್ಯತೆ resolver, ಕಠಿಣ ನಿಷೇಧಗಳು, ಆಪರೇಟರ್ allowlist, ಅಜ್ಞಾತ ಮೌಲ್ಯಮಾಪನಗಳು, critique-and-revise ಮತ್ತು ಆದ್ಯತೆ ದತ್ತಾಂಶ ಹರಿವು, ದಾಖಲೆ ಪಠ್ಯದ ಅಧಿಕಾರ, ಅನುಮೋದನೆ ಬಂಧ ಇರುವ ನೀತಿ gate, ನೀತಿ ಸಮಗ್ರತೆ ಮತ್ತು drift ಮಾಪನಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಮೌಲ್ಯಮಾಪನಗಳು, critique ಟೇಬಲ್, ಅಂಕಗಳು, ಲೇಬಲ್ ಮಾಡಿದ ಸೆಟ್ ಮತ್ತು ಮಾದರಿ ಆವೃತ್ತಿಗಳು ಎಲ್ಲವನ್ನೂ ಲ್ಯಾಬ್ ಲೇಖಕ ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳಾಗಿ ಬರೆದಿದ್ದಾರೆ, ಯಾವುದೇ ಮಾದರಿ ತರಬೇತಿ ಅಥವಾ ಪ್ರಶ್ನೆ ಇಲ್ಲ, ಸಾಧನಗಳು ಅನುಕರಿಸಲ್ಪಟ್ಟಿವೆ ಮತ್ತು ಏನೂ ಕಾರ್ಯಗತವಾಗುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ ಮತ್ತು lesson ಕೋಡ್ ತುಣುಕುಗಳಲ್ಲಿ ಮಾತ್ರ ತೋರಿಸಲ್ಪಟ್ಟಿತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ ಮತ್ತು ಔಟ್‌ಪುಟ್ ಅನ್ನು ಅವನ್ನು ಓಡಿಸಿ ಪಡೆಯಲಾಗಿದೆ. 2022 Constitutional AI ವಿಧಾನ, RLAIF, 2023 ಭಾಗವಹಿಕೆ ಪ್ರಯೋಗ ಮತ್ತು 2026 Claude Constitution ಬಗ್ಗೆ lesson ವಿವರಣೆ ಪರಿಕಲ್ಪನಾತ್ಮಕ ಅಥವಾ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಓಡಿಸಿಲ್ಲ ಅಥವಾ ಪರಿಶೀಲಿಸಿಲ್ಲ, ಮತ್ತು ಲ್ಯಾಬ್‌ಗಳಲ್ಲಿ ಯಾವುದೇ ಮಾದರಿ ಇಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Rules Cannot List Every Case, and Principles Cannot Be the Only Check",
    "textKn": "ನಿಯಮಗಳು ಎಲ್ಲಾ ಪ್ರಕರಣ ಪಟ್ಟಿ ಮಾಡಲಾರವು, ತತ್ವಗಳೇ ಏಕೈಕ ಪರಿಶೀಲನೆ ಆಗಲಾರವು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Rules, Tiers, Allowlists and Labels",
    "headingKn": "ನಿಯಮಗಳು, ಹಂತಗಳು, Allowlists ಮತ್ತು ಲೇಬಲ್‌ಗಳು",
    "bodyEn": "This part first measures how an exact blocklist and a blanket delete rule do on a small labelled set, then builds the four-tier resolver the lesson describes: hard prohibitions are checked before anything else, each of the four tiers must have exactly one evaluation, the highest-priority block names the refusal and a modify decision returns an alternative. It then tests an operator allowlist against a naive dictionary merge and shows a category label supplied by the requester slipping past a check. The resolver combines evaluations it is given, and the lab writes those evaluations itself.",
    "bodyKn": "ಈ ಭಾಗ ಮೊದಲು ಸಣ್ಣ ಲೇಬಲ್ ಮಾಡಿದ ಸೆಟ್‌ನಲ್ಲಿ ನಿಖರ blocklist ಮತ್ತು ಸಾರ್ವತ್ರಿಕ delete ನಿಯಮ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತವೆ ಅಳೆಯುತ್ತದೆ, ನಂತರ lesson ವಿವರಿಸುವ ನಾಲ್ಕು-ಹಂತದ resolver ನಿರ್ಮಿಸುತ್ತದೆ: ಕಠಿಣ ನಿಷೇಧಗಳನ್ನು ಬೇರೆಲ್ಲದಕ್ಕಿಂತ ಮೊದಲು ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ, ನಾಲ್ಕು ಹಂತಗಳಿಗೂ ಸರಿಯಾಗಿ ಒಂದು ಮೌಲ್ಯಮಾಪನ ಇರಬೇಕು, ಅತಿ ಹೆಚ್ಚಿನ ಆದ್ಯತೆಯ ತಡೆ ನಿರಾಕರಣೆಯನ್ನು ಹೆಸರಿಸುತ್ತದೆ ಮತ್ತು modify ನಿರ್ಧಾರ ಪರ್ಯಾಯ ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ನಂತರ ನೈವ್ ನಿಘಂಟು ವಿಲೀನದ ವಿರುದ್ಧ ಆಪರೇಟರ್ allowlist ಪರೀಕ್ಷಿಸಿ ವಿನಂತಿದಾರ ನೀಡಿದ ವರ್ಗ ಲೇಬಲ್ ಪರಿಶೀಲನೆ ದಾಟುವುದನ್ನು ತೋರಿಸುತ್ತದೆ. resolver ತನಗೆ ನೀಡಿದ ಮೌಲ್ಯಮಾಪನಗಳನ್ನು ಸಂಯೋಜಿಸುತ್ತದೆ, ಮತ್ತು ಆ ಮೌಲ್ಯಮಾಪನಗಳನ್ನು ಲ್ಯಾಬ್ ತಾನೇ ಬರೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Four Tiers and a Hard Floor",
    "headingKn": "ನಾಲ್ಕು ಹಂತಗಳು ಮತ್ತು ಕಠಿಣ ತಳ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">higher tiers win a genuine conflict</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">safety</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">tier 1</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">ethics</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">tier 2</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">guidelines</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">tier 3</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">helpfulness</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">tier 4, never above the rest</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">higher tiers win a genuine conflict</text></svg>",
    "captionEn": "Hard prohibitions are checked first, then tiers in priority order.",
    "captionKn": "ಕಠಿಣ ನಿಷೇಧಗಳನ್ನು ಮೊದಲು ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ, ನಂತರ ಆದ್ಯತೆ ಕ್ರಮದಲ್ಲಿ ಹಂತಗಳು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The resolver rules",
    "headingKn": "resolver ನಿಯಮಗಳು",
    "headers": [
     "Step",
     "What it does"
    ],
    "rows": [
     [
      "hard prohibition",
      "checked first, refuses whatever the tiers say"
     ],
     [
      "evaluation count",
      "exactly one per tier, otherwise an error"
     ],
     [
      "block",
      "the highest-priority block names the refusal"
     ],
     [
      "modify",
      "returns an alternative that still needs checking"
     ],
     [
      "allow",
      "only when every tier passes"
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
    "filename": "cn_1.py",
    "headingEn": "Resolver, allowlist and rule baselines",
    "headingKn": "Resolver, allowlist ಮತ್ತು ನಿಯಮ ಮೂಲರೇಖೆಗಳು",
    "descEn": "resolve checks the hard prohibition, validates the four evaluations and returns the first block or modify in tier order, validate_operator_settings accepts only listed keys and values, and trusted_category re-derives a category from tags.",
    "descKn": "resolve ಕಠಿಣ ನಿಷೇಧ ಪರಿಶೀಲಿಸಿ ನಾಲ್ಕು ಮೌಲ್ಯಮಾಪನ ಮೌಲ್ಯೀಕರಿಸಿ ಹಂತ ಕ್ರಮದಲ್ಲಿ ಮೊದಲ block ಅಥವಾ modify ಹಿಂತಿರುಗಿಸುತ್ತದೆ, validate_operator_settings ಪಟ್ಟಿ ಮಾಡಿದ keys ಮತ್ತು ಮೌಲ್ಯಗಳನ್ನು ಮಾತ್ರ ಸ್ವೀಕರಿಸುತ್ತದೆ, ಮತ್ತು trusted_category tags ನಿಂದ ವರ್ಗ ಮರುಪಡೆಯುತ್ತದೆ.",
    "code": "class Decision(str, Enum):\n    ALLOW = \"ALLOW\"\n    REFUSE = \"REFUSE\"\n    MODIFY = \"MODIFY\"\n\n\nclass Evaluation(str, Enum):\n    PASS = \"PASS\"\n    BLOCK = \"BLOCK\"\n    MODIFY = \"MODIFY\"\n\n\nclass Tier(Enum):\n    SAFETY = 1\n    ETHICS = 2\n    GUIDELINES = 3\n    HELPFULNESS = 4\n\n\nHARD_PROHIBITIONS = frozenset({\"prohibited_cbrn_assistance\", \"prohibited_child_exploitation\", \"prohibited_critical_infrastructure_attack\"})\n\n\n@dataclass(frozen=True)\nclass PrincipleEvaluation:\n    tier: Tier\n    result: Evaluation\n    reason: str\n\n\n@dataclass(frozen=True)\nclass ProposedAction:\n    name: str\n    description: str\n    category: str\n    evaluations: tuple\n    alternative: str = \"\"\n\n\n@dataclass(frozen=True)\nclass Resolution:\n    decision: Decision\n    reason: str\n    controlling_tier: str\n    alternative: str = \"\"\n\n\ndef checks(safety=Evaluation.PASS, ethics=Evaluation.PASS, guidelines=Evaluation.PASS, helpfulness=Evaluation.PASS):\n    out = []\n    for tier, res in ((Tier.SAFETY, safety), (Tier.ETHICS, ethics), (Tier.GUIDELINES, guidelines), (Tier.HELPFULNESS, helpfulness)):\n        out.append(PrincipleEvaluation(tier, res, f\"{tier.name} evaluation: {res.value}\"))\n    return tuple(out)\n\n\ndef resolve(action):\n    if action.category in HARD_PROHIBITIONS:\n        return Resolution(Decision.REFUSE, \"Non-overridable prohibition\", \"HARD_PROHIBITION\")\n    tiers = [e.tier for e in action.evaluations]\n    if len(tiers) != 4 or set(tiers) != set(Tier):\n        raise ValueError(\"Exactly one evaluation per tier is required\")\n    ordered = sorted(action.evaluations, key=lambda e: e.tier.value)\n    for item in ordered:\n        if item.result == Evaluation.BLOCK:\n            return Resolution(Decision.REFUSE, item.reason, item.tier.name)\n    for item in ordered:\n        if item.result == Evaluation.MODIFY:\n            return Resolution(Decision.MODIFY, item.reason, item.tier.name, action.alternative)\n    return Resolution(Decision.ALLOW, \"All four evaluations passed\", \"NONE\")\n\n\nTRUSTED_TAGS = {\"pathogen_synthesis_route\": \"prohibited_cbrn_assistance\", \"grid_control_takeover\": \"prohibited_critical_infrastructure_attack\"}\n\n\ndef trusted_category(declared, tags):\n    for t in tags:\n        if t in TRUSTED_TAGS:\n            return TRUSTED_TAGS[t]\n    return declared\n\n\nALLOWED_SETTINGS = {\"response_style\": {\"formal\", \"casual\", \"detailed\"}, \"response_length\": {\"short\", \"medium\", \"long\"}}\n\n\ndef validate_operator_settings(settings):\n    clean = {}\n    for k, v in settings.items():\n        if k not in ALLOWED_SETTINGS:\n            raise ValueError(f\"Unauthorized setting: {k}\")\n        if v not in ALLOWED_SETTINGS[k]:\n            raise ValueError(f\"Invalid value for {k}: {v}\")\n        clean[k] = v\n    return clean\n\n\nPROHIBITED_NAMES = {\"delete_database\", \"disable_security\", \"expose_credentials\"}\n\n\ndef exact_blocklist_allows(name):\n    return name not in PROHIBITED_NAMES\n\n\ndef blanket_delete_allows(name):\n    return \"delete\" not in name.lower()\n\n\n# (name, truly acceptable, weakens oversight, destroys protected data, exposes a credential): attributes assigned by the lab author\nLABELLED = [\n    (\"delete_database\", False, False, True, False),\n    (\"remove_all_backup_snapshots\", False, False, True, False),\n    (\"disable_audit_logs_for_speed\", False, True, False, False),\n    (\"expose_api_key\", False, False, False, True),\n    (\"export_signing_key\", False, False, False, True),\n    (\"delete_obsolete_temp_file\", True, False, False, False),\n    (\"delete_test_artifact_from_this_run\", True, False, False, False),\n    (\"summarise_report\", True, False, False, False),\n    (\"reduce_debug_logging\", True, False, False, False),\n    (\"explain_python_dicts\", True, False, False, False),\n]\n\n\ndef principle_allows(row):\n    return not (row[2] or row[3] or row[4])\n\n\nclass ResolverTests(unittest.TestCase):\n    def mk(self, cat=\"education\", **kw):\n        return ProposedAction(\"a\", \"d\", cat, checks(**kw), alternative=\"safer plan\")\n\n    def test_clear_allow(self):\n        self.assertEqual(resolve(self.mk()).decision, Decision.ALLOW)\n\n    def test_ethics_blocks_helpfulness(self):\n        r = resolve(self.mk(ethics=Evaluation.BLOCK))\n        self.assertEqual((r.decision, r.controlling_tier), (Decision.REFUSE, \"ETHICS\"))\n\n    def test_hard_prohibition_beats_all_pass(self):\n        self.assertEqual(resolve(self.mk(cat=\"prohibited_cbrn_assistance\")).controlling_tier, \"HARD_PROHIBITION\")\n\n    def test_safety_outranks_ethics(self):\n        self.assertEqual(resolve(self.mk(safety=Evaluation.BLOCK, ethics=Evaluation.BLOCK)).controlling_tier, \"SAFETY\")\n\n    def test_modify_carries_alternative(self):\n        r = resolve(self.mk(safety=Evaluation.MODIFY))\n        self.assertEqual((r.decision, r.alternative), (Decision.MODIFY, \"safer plan\"))\n\n    def test_missing_evaluation_rejected(self):\n        with self.assertRaises(ValueError):\n            resolve(ProposedAction(\"a\", \"d\", \"x\", checks()[:3]))"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cn_1.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() scores three rule styles, runs the resolver on six situations, tests the allowlist, shows a mislabelled category and runs six unit tests.",
    "descKn": "main() ಮೂರು ನಿಯಮ ಶೈಲಿ ಅಂಕಿಸಿ, ಆರು ಸಂದರ್ಭಗಳ ಮೇಲೆ resolver ಓಡಿಸಿ, allowlist ಪರೀಕ್ಷಿಸಿ, ತಪ್ಪು ಲೇಬಲ್ ವರ್ಗ ತೋರಿಸಿ ಮತ್ತು ಆರು unit ಪರೀಕ್ಷೆ ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: enumerated rules against a labelled set\")\n    unsafe = [r for r in LABELLED if not r[1]]\n    safe = [r for r in LABELLED if r[1]]\n    for label, allows in ((\"exact blocklist\", lambda r: exact_blocklist_allows(r[0])), (\"blanket 'delete' rule\", lambda r: blanket_delete_allows(r[0])), (\"principle on attributes\", principle_allows)):\n        fa = [r[0] for r in unsafe if allows(r)]\n        fr = [r[0] for r in safe if not allows(r)]\n        print(f\"{label:24} unsafe allowed {len(fa)} of {len(unsafe)} | acceptable refused {len(fr)} of {len(safe)}\")\n        if label != \"principle on attributes\":\n            print(f\"{'':24} missed: {fa}\")\n            if fr:\n                print(f\"{'':24} wrongly refused: {fr}\")\n    print(\"the exact blocklist let four of five unsafe actions through because it only knows three spellings, the blanket delete rule caught one and also refused two harmless cleanups, and the principle rule got every row right only because its attributes were filled in by the author who knew the answers, so it shows the shape of the approach and not an accuracy\")\n\n    section(\"2. Genuinely running: the four-tier resolver\")\n    cases = [\n        (\"Explain Python dictionaries\", ProposedAction(\"c1\", \"d\", \"education\", checks())),\n        (\"Create a misleading report\", ProposedAction(\"c2\", \"d\", \"reporting\", checks(ethics=Evaluation.BLOCK))),\n        (\"Prohibited action\", ProposedAction(\"c3\", \"d\", \"prohibited_cbrn_assistance\", checks())),\n        (\"Reduce production logging\", ProposedAction(\"c4\", \"d\", \"operations\", checks(safety=Evaluation.MODIFY), alternative=\"Reduce debug logging while preserving required audit records\")),\n    ]\n    for title, a in cases:\n        r = resolve(a)\n        print(f\"{title}: {r.decision.value} | controlling tier {r.controlling_tier} | reason: {r.reason}\" + (f\" | alternative: {r.alternative}\" if r.alternative else \"\"))\n    r = resolve(ProposedAction(\"c5\", \"d\", \"ops\", checks(safety=Evaluation.BLOCK, ethics=Evaluation.BLOCK, helpfulness=Evaluation.PASS)))\n    print(\"safety and ethics both block, helpfulness passes:\", r.decision.value, \"controlled by\", r.controlling_tier)\n    try:\n        resolve(ProposedAction(\"c6\", \"d\", \"x\", checks()[:3]))\n    except ValueError as e:\n        print(\"only three evaluations supplied:\", e)\n    print(\"a hard prohibition refuses even when all four tiers pass, the highest-priority block names the refusal, a modify decision returns an alternative that still has to be evaluated and authorised before anything runs, and an incomplete evaluation set is an error and not an approval; the resolver only combines evaluations it is given\")\n\n    section(\"3. Genuinely running: an operator allowlist against a dictionary merge\")\n    print(\"valid:\", validate_operator_settings({\"response_style\": \"formal\", \"response_length\": \"long\"}))\n    for bad in ({\"disable_safety\": \"true\"}, {\"response_style\": \"sarcastic\"}):\n        try:\n            validate_operator_settings(bad)\n        except ValueError as e:\n            print(\"rejected:\", e)\n    config = {\"safety_checks\": True, \"response_style\": \"concise\"}\n    config.update({\"response_style\": \"detailed\", \"safety_checks\": False})\n    print(\"naive config.update with an operator dictionary:\", config)\n    print(\"the allowlist accepted two known settings, refused an unknown key and an unknown value, and the naive merge let the operator switch safety_checks off; the allowlist protects the settings it lists and nothing else in the process\")\n\n    section(\"4. Genuinely running: a category label is not a security boundary\")\n    mislabelled = ProposedAction(\"m1\", \"d\", \"education\", checks())\n    print(\"resolved on the declared label:\", resolve(mislabelled).decision.value)\n    tags = [\"pathogen_synthesis_route\"]\n    relabelled = ProposedAction(\"m1\", \"d\", trusted_category(\"education\", tags), checks())\n    print(\"resolved after the trusted tag map re-derives the category:\", resolve(relabelled).decision.value, \"|\", relabelled.category)\n    print(\"the declared category let an action through that the trusted tag map refuses, so a label supplied by the requester cannot be the only check; the tag names here are abstract placeholders, and deciding the tags in a real system is itself the hard problem\")\n\n    section(\"5. Genuinely running: the unit tests\")\n    stream = io.StringIO()\n    res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(ResolverTests))\n    print(f\"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}\")\n    print(\"the tests cover an allow, an ethics block, a hard prohibition, safety outranking ethics, a modify with its alternative and a missing evaluation, and they check this resolver on supplied evaluations only, not whether a real model would classify an action correctly\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: enumerated rules against a labelled set ---\nexact blocklist          unsafe allowed 4 of 5 | acceptable refused 0 of 5\n                         missed: ['remove_all_backup_snapshots', 'disable_audit_logs_for_speed', 'expose_api_key', 'export_signing_key']\nblanket 'delete' rule    unsafe allowed 4 of 5 | acceptable refused 2 of 5\n                         missed: ['remove_all_backup_snapshots', 'disable_audit_logs_for_speed', 'expose_api_key', 'export_signing_key']\n                         wrongly refused: ['delete_obsolete_temp_file', 'delete_test_artifact_from_this_run']\nprinciple on attributes  unsafe allowed 0 of 5 | acceptable refused 0 of 5\nthe exact blocklist let four of five unsafe actions through because it only knows three spellings, the blanket delete rule caught one and also refused two harmless cleanups, and the principle rule got every row right only because its attributes were filled in by the author who knew the answers, so it shows the shape of the approach and not an accuracy\n\n--- 2. Genuinely running: the four-tier resolver ---\nExplain Python dictionaries: ALLOW | controlling tier NONE | reason: All four evaluations passed\nCreate a misleading report: REFUSE | controlling tier ETHICS | reason: ETHICS evaluation: BLOCK\nProhibited action: REFUSE | controlling tier HARD_PROHIBITION | reason: Non-overridable prohibition\nReduce production logging: MODIFY | controlling tier SAFETY | reason: SAFETY evaluation: MODIFY | alternative: Reduce debug logging while preserving required audit records\nsafety and ethics both block, helpfulness passes: REFUSE controlled by SAFETY\nonly three evaluations supplied: Exactly one evaluation per tier is required\na hard prohibition refuses even when all four tiers pass, the highest-priority block names the refusal, a modify decision returns an alternative that still has to be evaluated and authorised before anything runs, and an incomplete evaluation set is an error and not an approval; the resolver only combines evaluations it is given\n\n--- 3. Genuinely running: an operator allowlist against a dictionary merge ---\nvalid: {'response_style': 'formal', 'response_length': 'long'}\nrejected: Unauthorized setting: disable_safety\nrejected: Invalid value for response_style: sarcastic\nnaive config.update with an operator dictionary: {'safety_checks': False, 'response_style': 'detailed'}\nthe allowlist accepted two known settings, refused an unknown key and an unknown value, and the naive merge let the operator switch safety_checks off; the allowlist protects the settings it lists and nothing else in the process\n\n--- 4. Genuinely running: a category label is not a security boundary ---\nresolved on the declared label: ALLOW\nresolved after the trusted tag map re-derives the category: REFUSE | prohibited_cbrn_assistance\nthe declared category let an action through that the trusted tag map refuses, so a label supplied by the requester cannot be the only check; the tag names here are abstract placeholders, and deciding the tags in a real system is itself the hard problem\n\n--- 5. Genuinely running: the unit tests ---\nran 6 tests | failures 0 | errors 0 | passed True\nthe tests cover an allow, an ethics block, a hard prohibition, safety outranking ethics, a modify with its alternative and a missing evaluation, and they check this resolver on supplied evaluations only, not whether a real model would classify an action correctly"
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
    "headingEn": "Experiment 1: Enumerated rules against a labelled set",
    "headingKn": "ಪ್ರಯೋಗ 1: Enumerated rules against a labelled set",
    "bodyEn": "What it ran: Enumerated rules against a labelled set. What the lab concluded: the exact blocklist let four of five unsafe actions through because it only knows three spellings, the blanket delete rule caught one and also refused two harmless cleanups, and the principle rule got every row right only because its attributes were filled in by the author who knew the answers, so it shows the shape of the approach and not an accuracy",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Enumerated rules against a labelled set. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the exact blocklist let four of five unsafe actions through because it only knows three spellings, the blanket delete rule caught one and also refused two harmless cleanups, and the principle rule got every row right only because its attributes were filled in by the author who knew the answers, so it shows the shape of the approach and not an accuracy"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: enumerated rules against a labelled set ---\nexact blocklist          unsafe allowed 4 of 5 | acceptable refused 0 of 5\n                         missed: ['remove_all_backup_snapshots', 'disable_audit_logs_for_speed', 'expose_api_key', 'export_signing_key']\nblanket 'delete' rule    unsafe allowed 4 of 5 | acceptable refused 2 of 5\n                         missed: ['remove_all_backup_snapshots', 'disable_audit_logs_for_speed', 'expose_api_key', 'export_signing_key']\n                         wrongly refused: ['delete_obsolete_temp_file', 'delete_test_artifact_from_this_run']\nprinciple on attributes  unsafe allowed 0 of 5 | acceptable refused 0 of 5"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: The four-tier resolver",
    "headingKn": "ಪ್ರಯೋಗ 2: The four-tier resolver",
    "bodyEn": "What it ran: The four-tier resolver. What the lab concluded: a hard prohibition refuses even when all four tiers pass, the highest-priority block names the refusal, a modify decision returns an alternative that still has to be evaluated and authorised before anything runs, and an incomplete evaluation set is an error and not an approval; the resolver only combines evaluations it is given",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The four-tier resolver. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a hard prohibition refuses even when all four tiers pass, the highest-priority block names the refusal, a modify decision returns an alternative that still has to be evaluated and authorised before anything runs, and an incomplete evaluation set is an error and not an approval; the resolver only combines evaluations it is given"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: the four-tier resolver ---\nExplain Python dictionaries: ALLOW | controlling tier NONE | reason: All four evaluations passed\nCreate a misleading report: REFUSE | controlling tier ETHICS | reason: ETHICS evaluation: BLOCK\nProhibited action: REFUSE | controlling tier HARD_PROHIBITION | reason: Non-overridable prohibition\nReduce production logging: MODIFY | controlling tier SAFETY | reason: SAFETY evaluation: MODIFY | alternative: Reduce debug logging while preserving required audit records\nsafety and ethics both block, helpfulness passes: REFUSE controlled by SAFETY\nonly three evaluations supplied: Exactly one evaluation per tier is required"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: An operator allowlist against a dictionary merge",
    "headingKn": "ಪ್ರಯೋಗ 3: An operator allowlist against a dictionary merge",
    "bodyEn": "What it ran: An operator allowlist against a dictionary merge. What the lab concluded: the allowlist accepted two known settings, refused an unknown key and an unknown value, and the naive merge let the operator switch safety_checks off; the allowlist protects the settings it lists and nothing else in the process",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: An operator allowlist against a dictionary merge. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the allowlist accepted two known settings, refused an unknown key and an unknown value, and the naive merge let the operator switch safety_checks off; the allowlist protects the settings it lists and nothing else in the process"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: an operator allowlist against a dictionary merge ---\nvalid: {'response_style': 'formal', 'response_length': 'long'}\nrejected: Unauthorized setting: disable_safety\nrejected: Invalid value for response_style: sarcastic\nnaive config.update with an operator dictionary: {'safety_checks': False, 'response_style': 'detailed'}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A category label is not a security boundary",
    "headingKn": "ಪ್ರಯೋಗ 4: A category label is not a security boundary",
    "bodyEn": "What it ran: A category label is not a security boundary. What the lab concluded: the declared category let an action through that the trusted tag map refuses, so a label supplied by the requester cannot be the only check; the tag names here are abstract placeholders, and deciding the tags in a real system is itself the hard problem",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A category label is not a security boundary. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the declared category let an action through that the trusted tag map refuses, so a label supplied by the requester cannot be the only check; the tag names here are abstract placeholders, and deciding the tags in a real system is itself the hard problem"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a category label is not a security boundary ---\nresolved on the declared label: ALLOW\nresolved after the trusted tag map re-derives the category: REFUSE | prohibited_cbrn_assistance"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: The unit tests",
    "headingKn": "ಪ್ರಯೋಗ 5: The unit tests",
    "bodyEn": "What it ran: The unit tests. What the lab concluded: the tests cover an allow, an ethics block, a hard prohibition, safety outranking ethics, a modify with its alternative and a missing evaluation, and they check this resolver on supplied evaluations only, not whether a real model would classify an action correctly",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The unit tests. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the tests cover an allow, an ethics block, a hard prohibition, safety outranking ethics, a modify with its alternative and a missing evaluation, and they check this resolver on supplied evaluations only, not whether a real model would classify an action correctly"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: the unit tests ---\nran 6 tests | failures 0 | errors 0 | passed True"
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
    "headingEn": "Genuinely Found: Rules and the Resolver",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ನಿಯಮಗಳು ಮತ್ತು Resolver",
    "bodyEn": "Section 1: the exact blocklist allowed 4 of 5 unsafe actions and refused 0 of 5 acceptable ones, the blanket delete rule allowed 4 of 5 unsafe and refused 2 of 5 acceptable, and the attribute-based principle rule got 0 and 0 because its attributes were assigned knowing the labels. Section 2: the four cases gave ALLOW, REFUSE by ETHICS, REFUSE by HARD_PROHIBITION and MODIFY by SAFETY with an alternative, a safety and ethics block gave REFUSE controlled by SAFETY, and three evaluations raised the one-per-tier error.",
    "bodyKn": "ವಿಭಾಗ 1: ನಿಖರ blocklist 5 ಅಸುರಕ್ಷಿತ ಕ್ರಿಯೆಗಳಲ್ಲಿ 4 ಅನ್ನು ಅನುಮತಿಸಿ 5 ಸ್ವೀಕಾರಾರ್ಹಗಳಲ್ಲಿ 0 ನಿರಾಕರಿಸಿತು, ಸಾರ್ವತ್ರಿಕ delete ನಿಯಮ 5 ಅಸುರಕ್ಷಿತದಲ್ಲಿ 4 ಅನುಮತಿಸಿ 5 ಸ್ವೀಕಾರಾರ್ಹದಲ್ಲಿ 2 ನಿರಾಕರಿಸಿತು, ಮತ್ತು ಗುಣಲಕ್ಷಣ-ಆಧಾರಿತ ತತ್ವ ನಿಯಮ ಲೇಬಲ್ ತಿಳಿದು ಗುಣಲಕ್ಷಣ ನೀಡಿದ್ದರಿಂದ 0 ಮತ್ತು 0 ಪಡೆಯಿತು. ವಿಭಾಗ 2: ನಾಲ್ಕು ಪ್ರಕರಣಗಳು ALLOW, ETHICS ನಿಂದ REFUSE, HARD_PROHIBITION ನಿಂದ REFUSE ಮತ್ತು ಪರ್ಯಾಯದೊಂದಿಗೆ SAFETY ನಿಂದ MODIFY ನೀಡಿದವು, safety ಮತ್ತು ethics ತಡೆ SAFETY ನಿಯಂತ್ರಿಸಿದ REFUSE ನೀಡಿತು, ಮತ್ತು ಮೂರು ಮೌಲ್ಯಮಾಪನ ಪ್ರತಿ-ಹಂತಕ್ಕೆ-ಒಂದು ದೋಷ ಎತ್ತಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Allowlist, Label and Tests",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Allowlist, ಲೇಬಲ್ ಮತ್ತು ಪರೀಕ್ಷೆಗಳು",
    "bodyEn": "Section 3: two known settings were accepted, disable_safety and the value sarcastic were rejected, and a naive config.update let safety_checks become False. Section 4: the declared label education resolved to ALLOW and the category re-derived from a trusted tag resolved to REFUSE. Section 5: the six unit tests ran with 0 failures and 0 errors.",
    "bodyKn": "ವಿಭಾಗ 3: ಎರಡು ತಿಳಿದ ಸೆಟ್ಟಿಂಗ್‌ಗಳು ಸ್ವೀಕರಿಸಲ್ಪಟ್ಟವು, disable_safety ಮತ್ತು ಮೌಲ್ಯ sarcastic ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟವು, ಮತ್ತು ನೈವ್ config.update safety_checks ಅನ್ನು False ಆಗಲು ಬಿಟ್ಟಿತು. ವಿಭಾಗ 4: ಘೋಷಿತ ಲೇಬಲ್ education ALLOW ಗೆ ಬಂತು ಮತ್ತು ನಂಬಿಕಸ್ಥ tag ನಿಂದ ಮರುಪಡೆದ ವರ್ಗ REFUSE ಗೆ ಬಂತು. ವಿಭಾಗ 5: ಆರು unit ಪರೀಕ್ಷೆಗಳು 0 ವೈಫಲ್ಯ ಮತ್ತು 0 ದೋಷದೊಂದಿಗೆ ಓಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Priority order, a hard floor and an allowlist are things a program can enforce, but they only combine what they are given, so who supplies the evaluations and the category is where the real risk sits.",
    "bodyKn": "ಆದ್ಯತೆ ಕ್ರಮ, ಕಠಿಣ ತಳ ಮತ್ತು allowlist ಕಾರ್ಯಕ್ರಮ ಜಾರಿಗೊಳಿಸಬಹುದಾದವು, ಆದರೆ ಅವು ತಮಗೆ ನೀಡಿದ್ದನ್ನು ಮಾತ್ರ ಸಂಯೋಜಿಸುತ್ತವೆ, ಆದ್ದರಿಂದ ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ವರ್ಗ ಯಾರು ನೀಡುತ್ತಾರೆ ಎಂಬುದರಲ್ಲೇ ನಿಜ ಅಪಾಯ ಇದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the principle rule scored 0 and 0, so principles beat rules.\" Its attributes were written by the author who knew the labels.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ತತ್ವ ನಿಯಮ 0 ಮತ್ತು 0 ಪಡೆಯಿತು, ಆದ್ದರಿಂದ ತತ್ವಗಳು ನಿಯಮಗಳನ್ನು ಮೀರಿಸುತ್ತವೆ.\" ಅದರ ಗುಣಲಕ್ಷಣಗಳನ್ನು ಲೇಬಲ್ ತಿಳಿದ ಲೇಖಕ ಬರೆದಿದ್ದರು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Hard prohibition: a refusal no setting can lift. Tier: a priority level. Allowlist: only listed keys and values pass. Controlling tier: the highest tier that decided.",
    "bodyKn": "ಕಠಿಣ ನಿಷೇಧ: ಯಾವ ಸೆಟ್ಟಿಂಗ್ ಕೂಡ ತೆಗೆಯಲಾಗದ ನಿರಾಕರಣೆ. ಹಂತ: ಆದ್ಯತೆ ಮಟ್ಟ. Allowlist: ಪಟ್ಟಿ ಮಾಡಿದ keys ಮತ್ತು ಮೌಲ್ಯಗಳು ಮಾತ್ರ ಹಾದುಹೋಗುತ್ತವೆ. ನಿಯಂತ್ರಕ ಹಂತ: ನಿರ್ಧರಿಸಿದ ಅತ್ಯುನ್ನತ ಹಂತ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) An exact blocklist missed 4 of 5 unsafe actions. 2) A blanket rule refused 2 harmless ones. 3) A hard prohibition refused with every tier passing. 4) A naive merge disabled a safety setting. 5) A declared label was not enough.",
    "bodyKn": "1) ನಿಖರ blocklist 5 ಅಸುರಕ್ಷಿತದಲ್ಲಿ 4 ತಪ್ಪಿಸಿತು. 2) ಸಾರ್ವತ್ರಿಕ ನಿಯಮ 2 ಹಾನಿರಹಿತ ನಿರಾಕರಿಸಿತು. 3) ಕಠಿಣ ನಿಷೇಧ ಪ್ರತಿ ಹಂತ ಪಾಸ್ ಆದರೂ ನಿರಾಕರಿಸಿತು. 4) ನೈವ್ ವಿಲೀನ ಸುರಕ್ಷತಾ ಸೆಟ್ಟಿಂಗ್ ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿತು. 5) ಘೋಷಿತ ಲೇಬಲ್ ಸಾಕಾಗಲಿಲ್ಲ."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B cn_1.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B cn_1.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B cn_1.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B cn_1.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many of 5 unsafe actions did the exact blocklist allow?",
      "qKn": "5 ಅಸುರಕ್ಷಿತ ಕ್ರಿಯೆಗಳಲ್ಲಿ ನಿಖರ blocklist ಎಷ್ಟನ್ನು ಅನುಮತಿಸಿತು?",
      "opts": [
       "4",
       "1",
       "5",
       "0"
      ],
      "optsKn": [
       "4",
       "1",
       "5",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "How many acceptable actions did the blanket delete rule wrongly refuse?",
      "qKn": "ಸಾರ್ವತ್ರಿಕ delete ನಿಯಮ ಎಷ್ಟು ಸ್ವೀಕಾರಾರ್ಹ ಕ್ರಿಯೆಗಳನ್ನು ತಪ್ಪಾಗಿ ನಿರಾಕರಿಸಿತು?",
      "opts": [
       "2",
       "0",
       "5",
       "1"
      ],
      "optsKn": [
       "2",
       "0",
       "5",
       "1"
      ],
      "correct": 0
     },
     {
      "q": "Which tier controlled the refusal when safety and ethics both blocked?",
      "qKn": "safety ಮತ್ತು ethics ಎರಡೂ ತಡೆದಾಗ ಯಾವ ಹಂತ ನಿರಾಕರಣೆ ನಿಯಂತ್ರಿಸಿತು?",
      "opts": [
       "Safety",
       "Ethics",
       "Helpfulness",
       "Guidelines"
      ],
      "optsKn": [
       "Safety (ಸುರಕ್ಷತೆ)",
       "Ethics (ನೈತಿಕತೆ)",
       "Helpfulness (ಸಹಾಯಕತೆ)",
       "Guidelines (ಮಾರ್ಗಸೂಚಿಗಳು)"
      ],
      "correct": 0
     },
     {
      "q": "What did the declared category education resolve to when the action carried a trusted prohibited tag?",
      "qKn": "ಕ್ರಿಯೆ ನಂಬಿಕಸ್ಥ ನಿಷೇಧಿತ tag ಹೊಂದಿದ್ದಾಗ ಘೋಷಿತ ವರ್ಗ education ಏನಾಯಿತು?",
      "opts": [
       "ALLOW on the label and REFUSE after re-deriving the category",
       "REFUSE both times",
       "ALLOW both times",
       "An error"
      ],
      "optsKn": [
       "ಲೇಬಲ್ ಮೇಲೆ ALLOW ಮತ್ತು ವರ್ಗ ಮರುಪಡೆದ ನಂತರ REFUSE",
       "ಎರಡೂ ಬಾರಿ REFUSE",
       "ಎರಡೂ ಬಾರಿ ALLOW",
       "ಒಂದು ದೋಷ"
      ],
      "correct": 0
     },
     {
      "q": "Why does the 0 and 0 score of the principle rule not show that principles beat rules?",
      "qKn": "ತತ್ವ ನಿಯಮದ 0 ಮತ್ತು 0 ಅಂಕ ತತ್ವಗಳು ನಿಯಮಗಳನ್ನು ಮೀರಿಸುತ್ತವೆ ಎಂದು ಏಕೆ ತೋರಿಸುವುದಿಲ್ಲ?",
      "opts": [
       "Its attributes were assigned by the author who knew the labels",
       "It was never run",
       "It used a model",
       "It had no attributes"
      ],
      "optsKn": [
       "ಅದರ ಗುಣಲಕ್ಷಣಗಳನ್ನು ಲೇಬಲ್ ತಿಳಿದ ಲೇಖಕ ನೀಡಿದ್ದರು",
       "ಅದನ್ನು ಎಂದಿಗೂ ಓಡಿಸಲಿಲ್ಲ",
       "ಅದು ಮಾದರಿ ಬಳಸಿತು",
       "ಅದಕ್ಕೆ ಗುಣಲಕ್ಷಣ ಇರಲಿಲ್ಲ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
