module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215bf",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Constitutional AI and Rule Overrides (Part 2 of 3) — Unknown, Revision and Authority",
 "titleKn": "ಸಂವಿಧಾನಾತ್ಮಕ AI ಮತ್ತು ನಿಯಮ ಅತಿಕ್ರಮಣಗಳು (ಭಾಗ 2 / 3) — ಅಜ್ಞಾತ, ಪರಿಷ್ಕರಣೆ ಮತ್ತು ಅಧಿಕಾರ",
 "desc": "Send unknowns to review, show where critique and preference sit, and keep document text from becoming an instruction.",
 "descKn": "ಅಜ್ಞಾತಗಳನ್ನು ವಿಮರ್ಶೆಗೆ ಕಳುಹಿಸಿ, critique ಮತ್ತು ಆದ್ಯತೆ ಎಲ್ಲಿ ಇರುತ್ತವೆ ತೋರಿಸಿ, ಮತ್ತು ದಾಖಲೆ ಪಠ್ಯ ಸೂಚನೆಯಾಗದಂತೆ ತಡೆಯಿರಿ.",
 "objectives": [
  "Treat unknown as review.",
  "Refuse to guess between alternatives.",
  "Place critique in the data flow.",
  "Spot a gamed score.",
  "Rank sources by authority."
 ],
 "objectivesKn": [
  "ಅಜ್ಞಾತವನ್ನು ವಿಮರ್ಶೆ ಎಂದು ಪರಿಗಣಿಸಿ.",
  "ಪರ್ಯಾಯಗಳ ನಡುವೆ ಊಹಿಸಲು ನಿರಾಕರಿಸಿ.",
  "critique ಅನ್ನು ದತ್ತಾಂಶ ಹರಿವಿನಲ್ಲಿ ಇರಿಸಿ.",
  "ಮೋಸಗೊಳಿಸಿದ ಅಂಕ ಗುರುತಿಸಿ.",
  "ಮೂಲಗಳನ್ನು ಅಧಿಕಾರದಿಂದ ಶ್ರೇಣೀಕರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Constitutional AI and Rule Overrides (Part 2 of 3)",
    "textKn": "ಸಂವಿಧಾನಾತ್ಮಕ AI ಮತ್ತು ನಿಯಮ ಅತಿಕ್ರಮಣಗಳು (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: unknown evaluations and incompatible modifications as REVIEW, a critique-and-revise table, preference selection and a reward-hacking toy, the authority of text found in documents and six unit tests that are run. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind constitutional AI and rule overrides (enumerated rules against principles, a four-tier priority resolver, hard prohibitions, an operator allowlist, unknown evaluations, critique-and-revise and preference data flow, authority of document text, a policy gate with approval binding, policy integrity and drift metrics), not the real software, and the evaluations, the critique table, the scores, the labelled set and the model versions are all written by the lab author as scripts, no model is trained or queried, the tools are simulated and nothing is executed, so no real LLM behaviour is measured. The original code/main.py was not supplied and the lesson code was shown only in fragments, so the labs are our own implementation and the outputs were produced by running them. The lesson description of the 2022 Constitutional AI method, RLAIF, the 2023 participatory experiment and the 2026 Claude Constitution is conceptual or cited and was not run or checked here, and the labs involve no model. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: REVIEW ಎಂದು ಅಜ್ಞಾತ ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಹೊಂದದ ಮಾರ್ಪಾಡುಗಳು, critique-and-revise ಟೇಬಲ್, ಆದ್ಯತೆ ಆಯ್ಕೆ ಮತ್ತು reward-hacking ಆಟಿಕೆ, ದಾಖಲೆಗಳಲ್ಲಿ ಸಿಗುವ ಪಠ್ಯದ ಅಧಿಕಾರ ಮತ್ತು ಓಡಿಸಿದ ಆರು unit ಪರೀಕ್ಷೆಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಸಂವಿಧಾನಾತ್ಮಕ AI ಮತ್ತು ನಿಯಮ ಅತಿಕ್ರಮಣಗಳು (ಪಟ್ಟಿ ಮಾಡಿದ ನಿಯಮಗಳು ಮತ್ತು ತತ್ವಗಳು, ನಾಲ್ಕು-ಹಂತದ ಆದ್ಯತೆ resolver, ಕಠಿಣ ನಿಷೇಧಗಳು, ಆಪರೇಟರ್ allowlist, ಅಜ್ಞಾತ ಮೌಲ್ಯಮಾಪನಗಳು, critique-and-revise ಮತ್ತು ಆದ್ಯತೆ ದತ್ತಾಂಶ ಹರಿವು, ದಾಖಲೆ ಪಠ್ಯದ ಅಧಿಕಾರ, ಅನುಮೋದನೆ ಬಂಧ ಇರುವ ನೀತಿ gate, ನೀತಿ ಸಮಗ್ರತೆ ಮತ್ತು drift ಮಾಪನಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಮೌಲ್ಯಮಾಪನಗಳು, critique ಟೇಬಲ್, ಅಂಕಗಳು, ಲೇಬಲ್ ಮಾಡಿದ ಸೆಟ್ ಮತ್ತು ಮಾದರಿ ಆವೃತ್ತಿಗಳು ಎಲ್ಲವನ್ನೂ ಲ್ಯಾಬ್ ಲೇಖಕ ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳಾಗಿ ಬರೆದಿದ್ದಾರೆ, ಯಾವುದೇ ಮಾದರಿ ತರಬೇತಿ ಅಥವಾ ಪ್ರಶ್ನೆ ಇಲ್ಲ, ಸಾಧನಗಳು ಅನುಕರಿಸಲ್ಪಟ್ಟಿವೆ ಮತ್ತು ಏನೂ ಕಾರ್ಯಗತವಾಗುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ ಮತ್ತು lesson ಕೋಡ್ ತುಣುಕುಗಳಲ್ಲಿ ಮಾತ್ರ ತೋರಿಸಲ್ಪಟ್ಟಿತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ ಮತ್ತು ಔಟ್‌ಪುಟ್ ಅನ್ನು ಅವನ್ನು ಓಡಿಸಿ ಪಡೆಯಲಾಗಿದೆ. 2022 Constitutional AI ವಿಧಾನ, RLAIF, 2023 ಭಾಗವಹಿಕೆ ಪ್ರಯೋಗ ಮತ್ತು 2026 Claude Constitution ಬಗ್ಗೆ lesson ವಿವರಣೆ ಪರಿಕಲ್ಪನಾತ್ಮಕ ಅಥವಾ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಓಡಿಸಿಲ್ಲ ಅಥವಾ ಪರಿಶೀಲಿಸಿಲ್ಲ, ಮತ್ತು ಲ್ಯಾಬ್‌ಗಳಲ್ಲಿ ಯಾವುದೇ ಮಾದರಿ ಇಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Uncertainty Is Not Permission",
    "textKn": "ಅನಿಶ್ಚಿತತೆ ಅನುಮತಿಯಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Review, Revision, Preference and Authority",
    "headingKn": "ವಿಮರ್ಶೆ, ಪರಿಷ್ಕರಣೆ, ಆದ್ಯತೆ ಮತ್ತು ಅಧಿಕಾರ",
    "bodyEn": "This part extends the resolver with an UNKNOWN assessment that sends an action to review, and with two modifications that cannot both hold. It then shows where a critique and a revision sit in the Constitutional AI data flow using a lookup table, where preference selection sits and how a scorer that rewards reassuring words can be gamed, and how text found in a repository, a document or a tool result is kept from becoming an instruction. No model is involved anywhere, so every output shows a data flow or a failure shape and not the behaviour of a trained system.",
    "bodyKn": "ಈ ಭಾಗ resolver ಅನ್ನು ಕ್ರಿಯೆಯನ್ನು ವಿಮರ್ಶೆಗೆ ಕಳುಹಿಸುವ UNKNOWN ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಎರಡೂ ಹೊಂದದ ಎರಡು ಮಾರ್ಪಾಡುಗಳೊಂದಿಗೆ ವಿಸ್ತರಿಸುತ್ತದೆ. ನಂತರ lookup ಟೇಬಲ್ ಬಳಸಿ Constitutional AI ದತ್ತಾಂಶ ಹರಿವಿನಲ್ಲಿ critique ಮತ್ತು ಪರಿಷ್ಕರಣೆ ಎಲ್ಲಿ ಇರುತ್ತವೆ, ಆದ್ಯತೆ ಆಯ್ಕೆ ಎಲ್ಲಿ ಇರುತ್ತದೆ ಮತ್ತು ಭರವಸೆ ನೀಡುವ ಪದಗಳಿಗೆ ಬಹುಮಾನ ನೀಡುವ ಸ್ಕೋರರ್ ಅನ್ನು ಹೇಗೆ ಮೋಸಗೊಳಿಸಬಹುದು, ಮತ್ತು ರೆಪೊಸಿಟರಿ, ದಾಖಲೆ ಅಥವಾ ಸಾಧನ ಫಲಿತಾಂಶದಲ್ಲಿ ಸಿಗುವ ಪಠ್ಯ ಸೂಚನೆಯಾಗದಂತೆ ಹೇಗೆ ತಡೆಯಲಾಗುತ್ತದೆ ತೋರಿಸುತ್ತದೆ. ಎಲ್ಲಿಯೂ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ಪ್ರತಿ ಔಟ್‌ಪುಟ್ ದತ್ತಾಂಶ ಹರಿವು ಅಥವಾ ವೈಫಲ್ಯದ ಆಕಾರ ತೋರಿಸುತ್ತದೆ, ತರಬೇತಿ ಪಡೆದ ವ್ಯವಸ್ಥೆಯ ವರ್ತನೆಯಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Unknown, Modify and Authority",
    "headingKn": "ಅಜ್ಞಾತ, Modify ಮತ್ತು ಅಧಿಕಾರ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">uncertainty must not become permission</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">unknown</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">goes to review</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">modify</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">one alternative only</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">document</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">never an instruction</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">score</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">can be gamed</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">uncertainty must not become permission</text></svg>",
    "captionEn": "Missing information and untrusted text must not turn into permission.",
    "captionKn": "ಕಾಣೆಯಾದ ಮಾಹಿತಿ ಮತ್ತು ನಂಬಿಕೆಗೆ ಅರ್ಹವಲ್ಲದ ಪಠ್ಯ ಅನುಮತಿಯಾಗಿ ಬದಲಾಗಬಾರದು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The extensions",
    "headingKn": "ವಿಸ್ತರಣೆಗಳು",
    "headers": [
     "Item",
     "What the lab shows"
    ],
    "rows": [
     [
      "unknown",
      "a safety UNKNOWN gives REVIEW, an ethics BLOCK still gives REFUSE"
     ],
     [
      "two alternatives",
      "different alternatives give REVIEW, one gives MODIFY"
     ],
     [
      "critique table",
      "honesty and privacy entries, an unknown principle gives None"
     ],
     [
      "preference",
      "a reassuring-word scorer picked the misleading text"
     ],
     [
      "authority",
      "document and tool text never accepted"
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
    "filename": "cn_2.py",
    "headingEn": "Resolver, critique table, scorer and authority ranks",
    "headingKn": "Resolver, critique ಟೇಬಲ್, ಸ್ಕೋರರ್ ಮತ್ತು ಅಧಿಕಾರ ಶ್ರೇಣಿಗಳು",
    "descEn": "resolve returns REVIEW for UNKNOWN or incompatible alternatives, critique_and_revise looks up a critique and a revision, keyword_score rewards reassuring words and accept_instruction compares a source rank with the rank a change needs.",
    "descKn": "resolve UNKNOWN ಅಥವಾ ಹೊಂದದ ಪರ್ಯಾಯಗಳಿಗೆ REVIEW ಹಿಂತಿರುಗಿಸುತ್ತದೆ, critique_and_revise critique ಮತ್ತು ಪರಿಷ್ಕರಣೆ ಹುಡುಕುತ್ತದೆ, keyword_score ಭರವಸೆ ಪದಗಳಿಗೆ ಬಹುಮಾನ ನೀಡುತ್ತದೆ ಮತ್ತು accept_instruction ಮೂಲ ಶ್ರೇಣಿಯನ್ನು ಬದಲಾವಣೆಗೆ ಬೇಕಾದ ಶ್ರೇಣಿಯೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ.",
    "code": "class Decision(str, Enum):\n    ALLOW = \"ALLOW\"\n    REFUSE = \"REFUSE\"\n    MODIFY = \"MODIFY\"\n    REVIEW = \"REVIEW\"\n\n\nclass A(str, Enum):\n    PASS = \"PASS\"\n    BLOCK = \"BLOCK\"\n    MODIFY = \"MODIFY\"\n    UNKNOWN = \"UNKNOWN\"\n\n\nTIERS = (\"SAFETY\", \"ETHICS\", \"GUIDELINES\", \"HELPFULNESS\")\nHARD = frozenset({\"prohibited_cbrn_assistance\", \"prohibited_child_exploitation\", \"prohibited_critical_infrastructure_attack\"})\n\n\n@dataclass(frozen=True)\nclass Action:\n    action_id: str\n    category: str\n    evaluations: dict\n    alternatives: tuple = ()\n\n\ndef resolve(action):\n    if action.category in HARD:\n        return Decision.REFUSE, \"HARD_PROHIBITION\", \"non-overridable\"\n    if set(action.evaluations) != set(TIERS):\n        raise ValueError(\"Exactly one evaluation per tier is required\")\n    for t in TIERS:\n        if action.evaluations[t] == A.BLOCK:\n            return Decision.REFUSE, t, \"blocked\"\n    for t in TIERS:\n        if action.evaluations[t] == A.UNKNOWN:\n            return Decision.REVIEW, t, \"unknown evaluation is not permission\"\n    mods = [t for t in TIERS if action.evaluations[t] == A.MODIFY]\n    if mods:\n        if len(set(action.alternatives)) > 1:\n            return Decision.REVIEW, mods[0], \"incompatible alternatives\"\n        return Decision.MODIFY, mods[0], action.alternatives[0] if action.alternatives else \"no alternative supplied\"\n    return Decision.ALLOW, \"NONE\", \"all passed\"\n\n\ndef ev(**kw):\n    base = {t: A.PASS for t in TIERS}\n    base.update({k.upper(): v for k, v in kw.items()})\n    return base\n\n\nALLOWED = {\"response_style\": {\"formal\", \"casual\"}, \"response_length\": {\"short\", \"medium\", \"long\"}}\n\n\ndef validate_operator_settings(s):\n    for k, v in s.items():\n        if k not in ALLOWED:\n            raise ValueError(f\"Unauthorized setting: {k}\")\n        if v not in ALLOWED[k]:\n            raise ValueError(f\"Invalid value for {k}: {v}\")\n    return dict(s)\n\n\nCRITIQUES = {\n    \"honesty\": (\"The initial response may conceal material information.\", \"Provide a factual statement that discloses verified information and clearly identifies uncertainty.\"),\n    \"privacy\": (\"The initial response may reveal personal data to the wrong person.\", \"Offer the data only through an authenticated channel.\"),\n}\n\n\ndef critique_and_revise(prompt, initial, principle):\n    if principle not in CRITIQUES:\n        return None\n    c, r = CRITIQUES[principle]\n    return {\"prompt\": prompt, \"initial\": initial, \"principle\": principle, \"critique\": c, \"revision\": r}\n\n\nREASSURING = (\"safe\", \"no cause for concern\", \"fully verified\", \"guaranteed\")\n\n\ndef keyword_score(text):\n    t = text.lower()\n    return round(0.2 + 0.2 * sum(1 for w in REASSURING if w in t) + (0.3 if \"incident\" in t else 0.0), 2)\n\n\ndef select_preferred(cands):\n    if not cands:\n        raise ValueError(\"No candidates supplied\")\n    return max(cands, key=lambda c: c[1])\n\n\nRANK = {\"policy\": 4, \"application_config\": 3, \"user\": 2, \"tool_data\": 0, \"document\": 0, \"web\": 0}\n\n\ndef accept_instruction(source, wants_to_change):\n    required = 4 if wants_to_change == \"policy\" else 2\n    return RANK.get(source, 0) >= required\n\n\nclass ResolverTests(unittest.TestCase):\n    def test_unknown_safety_is_review(self):\n        self.assertEqual(resolve(Action(\"a\", \"x\", ev(safety=A.UNKNOWN)))[0], Decision.REVIEW)\n\n    def test_block_beats_unknown(self):\n        self.assertEqual(resolve(Action(\"a\", \"x\", ev(safety=A.UNKNOWN, ethics=A.BLOCK)))[0], Decision.REFUSE)\n\n    def test_incompatible_alternatives_review(self):\n        self.assertEqual(resolve(Action(\"a\", \"x\", ev(safety=A.MODIFY, ethics=A.MODIFY), (\"p\", \"q\")))[0], Decision.REVIEW)\n\n    def test_single_alternative_modify(self):\n        self.assertEqual(resolve(Action(\"a\", \"x\", ev(safety=A.MODIFY), (\"p\",)))[0], Decision.MODIFY)\n\n    def test_operator_unknown_key(self):\n        with self.assertRaises(ValueError):\n            validate_operator_settings({\"disable_safety\": \"true\"})\n\n    def test_document_cannot_change_policy(self):\n        self.assertFalse(accept_instruction(\"document\", \"policy\"))"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cn_2.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the review cases, the two-alternative cases, operator settings, the critique table, the preference toy, the authority table and six unit tests.",
    "descKn": "main() ವಿಮರ್ಶೆ ಪ್ರಕರಣ, ಎರಡು-ಪರ್ಯಾಯ ಪ್ರಕರಣ, ಆಪರೇಟರ್ ಸೆಟ್ಟಿಂಗ್, critique ಟೇಬಲ್, ಆದ್ಯತೆ ಆಟಿಕೆ, ಅಧಿಕಾರ ಟೇಬಲ್ ಮತ್ತು ಆರು unit ಪರೀಕ್ಷೆ ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: unknown is not permission\")\n    rows = [\n        (\"all pass\", Action(\"r1\", \"ops\", ev())),\n        (\"safety unknown\", Action(\"r2\", \"ops\", ev(safety=A.UNKNOWN))),\n        (\"ethics blocks, safety unknown\", Action(\"r3\", \"ops\", ev(safety=A.UNKNOWN, ethics=A.BLOCK))),\n        (\"helpfulness unknown only\", Action(\"r4\", \"ops\", ev(helpfulness=A.UNKNOWN))),\n        (\"hard prohibition, all pass\", Action(\"r5\", \"prohibited_critical_infrastructure_attack\", ev())),\n    ]\n    for label, a in rows:\n        d, tier, why = resolve(a)\n        print(f\"{label:30} -> {d.value:7} tier {tier:16} {why}\")\n    print(\"an unknown evaluation sends the action to review instead of allowing it, a block still wins over an unknown, and a hard prohibition ignores the evaluations; review is a lab extension of the lesson's three outcomes and needs a real human process behind it\")\n\n    section(\"2. Genuinely running: two modifications that cannot both hold\")\n    one = Action(\"m1\", \"ops\", ev(safety=A.MODIFY), (\"Reduce debug logging only\",))\n    two = Action(\"m2\", \"ops\", ev(safety=A.MODIFY, ethics=A.MODIFY), (\"Reduce debug logging only\", \"Keep all logging and add sampling\"))\n    print(\"one alternative:\", resolve(one)[0].value, \"|\", resolve(one)[2])\n    print(\"two incompatible alternatives:\", resolve(two)[0].value, \"|\", resolve(two)[2])\n    print(\"a single alternative is returned for evaluation and a pair of different ones is not guessed between; even the single alternative is only a proposal that has to pass the resolver again\")\n\n    section(\"3. Genuinely running: operator settings\")\n    print(\"valid:\", validate_operator_settings({\"response_style\": \"formal\", \"response_length\": \"long\"}))\n    for bad in ({\"disable_safety\": \"true\"}, {\"response_length\": \"enormous\"}):\n        try:\n            validate_operator_settings(bad)\n        except ValueError as e:\n            print(\"rejected:\", e)\n    print(\"known keys with known values pass and anything else is refused before it reaches any policy object\")\n\n    section(\"4. Genuinely running: a critique-and-revise table\")\n    r = critique_and_revise(\"Hide a confirmed security incident.\", \"Tell customers that nothing happened.\", \"honesty\")\n    for k in (\"prompt\", \"initial\", \"principle\", \"critique\", \"revision\"):\n        print(f\"{k:10}: {r[k]}\")\n    print(\"unknown principle:\", critique_and_revise(\"p\", \"i\", \"fairness\"))\n    print(\"a lookup table stands in for the model-written critique, so the output shows where a critique and a revision sit in the data flow and says nothing about what a trained model would write; the revised text would be a candidate training example and is not an action\")\n\n    section(\"5. Genuinely running: preference selection and a reward-hacking toy\")\n    honest = \"A security incident has been confirmed. The investigation is ongoing and verified updates will follow.\"\n    hacked = \"Everything is safe, fully verified and guaranteed, there is no cause for concern.\"\n    cands = [(honest, keyword_score(honest)), (hacked, keyword_score(hacked))]\n    for t, s in cands:\n        print(f\"score {s}: {t}\")\n    print(\"selected:\", select_preferred(cands)[0])\n    manual = [(\"Conceal the incident.\", 0.1), (\"Disclose verified incident facts.\", 0.9)]\n    print(\"manual scores select:\", select_preferred(manual)[0])\n    print(\"a scorer that rewards reassuring words picked the misleading text, which is the shape of reward hacking in miniature, while hand-assigned scores picked the honest one; taking the highest score is selection and is not reinforcement learning, which would update a policy\")\n\n    section(\"6. Genuinely running: authority of text found in a document\")\n    for source, want in ((\"user\", \"response_style\"), (\"document\", \"response_style\"), (\"document\", \"policy\"), (\"tool_data\", \"policy\"), (\"policy\", \"policy\")):\n        print(f\"{source:10} asks to change {want:15} -> accepted: {accept_instruction(source, want)}\")\n    print(\"text read from a document or a tool result was never accepted as an instruction, not even for a harmless style change, and only the policy source could change policy; the ranks are a table the lab wrote, and a real boundary has to be enforced by the runtime and not by the model reading the text\")\n\n    section(\"7. Genuinely running: the unit tests\")\n    stream = io.StringIO()\n    res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(ResolverTests))\n    print(f\"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}\")\n    print(\"the tests cover unknown, block over unknown, incompatible alternatives, a single alternative, an unauthorised setting and a document trying to change policy on this lab's own resolver\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: unknown is not permission ---\nall pass                       -> ALLOW   tier NONE             all passed\nsafety unknown                 -> REVIEW  tier SAFETY           unknown evaluation is not permission\nethics blocks, safety unknown  -> REFUSE  tier ETHICS           blocked\nhelpfulness unknown only       -> REVIEW  tier HELPFULNESS      unknown evaluation is not permission\nhard prohibition, all pass     -> REFUSE  tier HARD_PROHIBITION non-overridable\nan unknown evaluation sends the action to review instead of allowing it, a block still wins over an unknown, and a hard prohibition ignores the evaluations; review is a lab extension of the lesson's three outcomes and needs a real human process behind it\n\n--- 2. Genuinely running: two modifications that cannot both hold ---\none alternative: MODIFY | Reduce debug logging only\ntwo incompatible alternatives: REVIEW | incompatible alternatives\na single alternative is returned for evaluation and a pair of different ones is not guessed between; even the single alternative is only a proposal that has to pass the resolver again\n\n--- 3. Genuinely running: operator settings ---\nvalid: {'response_style': 'formal', 'response_length': 'long'}\nrejected: Unauthorized setting: disable_safety\nrejected: Invalid value for response_length: enormous\nknown keys with known values pass and anything else is refused before it reaches any policy object\n\n--- 4. Genuinely running: a critique-and-revise table ---\nprompt    : Hide a confirmed security incident.\ninitial   : Tell customers that nothing happened.\nprinciple : honesty\ncritique  : The initial response may conceal material information.\nrevision  : Provide a factual statement that discloses verified information and clearly identifies uncertainty.\nunknown principle: None\na lookup table stands in for the model-written critique, so the output shows where a critique and a revision sit in the data flow and says nothing about what a trained model would write; the revised text would be a candidate training example and is not an action\n\n--- 5. Genuinely running: preference selection and a reward-hacking toy ---\nscore 0.5: A security incident has been confirmed. The investigation is ongoing and verified updates will follow.\nscore 1.0: Everything is safe, fully verified and guaranteed, there is no cause for concern.\nselected: Everything is safe, fully verified and guaranteed, there is no cause for concern.\nmanual scores select: Disclose verified incident facts.\na scorer that rewards reassuring words picked the misleading text, which is the shape of reward hacking in miniature, while hand-assigned scores picked the honest one; taking the highest score is selection and is not reinforcement learning, which would update a policy\n\n--- 6. Genuinely running: authority of text found in a document ---\nuser       asks to change response_style  -> accepted: True\ndocument   asks to change response_style  -> accepted: False\ndocument   asks to change policy          -> accepted: False\ntool_data  asks to change policy          -> accepted: False\npolicy     asks to change policy          -> accepted: True\ntext read from a document or a tool result was never accepted as an instruction, not even for a harmless style change, and only the policy source could change policy; the ranks are a table the lab wrote, and a real boundary has to be enforced by the runtime and not by the model reading the text\n\n--- 7. Genuinely running: the unit tests ---\nran 6 tests | failures 0 | errors 0 | passed True\nthe tests cover unknown, block over unknown, incompatible alternatives, a single alternative, an unauthorised setting and a document trying to change policy on this lab's own resolver"
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
    "headingEn": "Experiment 1: Unknown is not permission",
    "headingKn": "ಪ್ರಯೋಗ 1: Unknown is not permission",
    "bodyEn": "What it ran: Unknown is not permission. What the lab concluded: an unknown evaluation sends the action to review instead of allowing it, a block still wins over an unknown, and a hard prohibition ignores the evaluations; review is a lab extension of the lesson's three outcomes and needs a real human process behind it",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Unknown is not permission. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): an unknown evaluation sends the action to review instead of allowing it, a block still wins over an unknown, and a hard prohibition ignores the evaluations; review is a lab extension of the lesson's three outcomes and needs a real human process behind it"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: unknown is not permission ---\nall pass                       -> ALLOW   tier NONE             all passed\nsafety unknown                 -> REVIEW  tier SAFETY           unknown evaluation is not permission\nethics blocks, safety unknown  -> REFUSE  tier ETHICS           blocked\nhelpfulness unknown only       -> REVIEW  tier HELPFULNESS      unknown evaluation is not permission\nhard prohibition, all pass     -> REFUSE  tier HARD_PROHIBITION non-overridable"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Two modifications that cannot both hold",
    "headingKn": "ಪ್ರಯೋಗ 2: Two modifications that cannot both hold",
    "bodyEn": "What it ran: Two modifications that cannot both hold. What the lab concluded: a single alternative is returned for evaluation and a pair of different ones is not guessed between; even the single alternative is only a proposal that has to pass the resolver again",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Two modifications that cannot both hold. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a single alternative is returned for evaluation and a pair of different ones is not guessed between; even the single alternative is only a proposal that has to pass the resolver again"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: two modifications that cannot both hold ---\none alternative: MODIFY | Reduce debug logging only\ntwo incompatible alternatives: REVIEW | incompatible alternatives"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Operator settings",
    "headingKn": "ಪ್ರಯೋಗ 3: Operator settings",
    "bodyEn": "What it ran: Operator settings. What the lab concluded: known keys with known values pass and anything else is refused before it reaches any policy object",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Operator settings. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): known keys with known values pass and anything else is refused before it reaches any policy object"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: operator settings ---\nvalid: {'response_style': 'formal', 'response_length': 'long'}\nrejected: Unauthorized setting: disable_safety\nrejected: Invalid value for response_length: enormous"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A critique-and-revise table",
    "headingKn": "ಪ್ರಯೋಗ 4: A critique-and-revise table",
    "bodyEn": "What it ran: A critique-and-revise table. What the lab concluded: a lookup table stands in for the model-written critique, so the output shows where a critique and a revision sit in the data flow and says nothing about what a trained model would write; the revised text would be a candidate training example and is not an action",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A critique-and-revise table. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a lookup table stands in for the model-written critique, so the output shows where a critique and a revision sit in the data flow and says nothing about what a trained model would write; the revised text would be a candidate training example and is not an action"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a critique-and-revise table ---\nprompt    : Hide a confirmed security incident.\ninitial   : Tell customers that nothing happened.\nprinciple : honesty\ncritique  : The initial response may conceal material information.\nrevision  : Provide a factual statement that discloses verified information and clearly identifies uncertainty.\nunknown principle: None"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Preference selection and a reward-hacking toy",
    "headingKn": "ಪ್ರಯೋಗ 5: Preference selection and a reward-hacking toy",
    "bodyEn": "What it ran: Preference selection and a reward-hacking toy. What the lab concluded: a scorer that rewards reassuring words picked the misleading text, which is the shape of reward hacking in miniature, while hand-assigned scores picked the honest one; taking the highest score is selection and is not reinforcement learning, which would update a policy",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Preference selection and a reward-hacking toy. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a scorer that rewards reassuring words picked the misleading text, which is the shape of reward hacking in miniature, while hand-assigned scores picked the honest one; taking the highest score is selection and is not reinforcement learning, which would update a policy"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: preference selection and a reward-hacking toy ---\nscore 0.5: A security incident has been confirmed. The investigation is ongoing and verified updates will follow.\nscore 1.0: Everything is safe, fully verified and guaranteed, there is no cause for concern.\nselected: Everything is safe, fully verified and guaranteed, there is no cause for concern.\nmanual scores select: Disclose verified incident facts."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: Authority of text found in a document",
    "headingKn": "ಪ್ರಯೋಗ 6: Authority of text found in a document",
    "bodyEn": "What it ran: Authority of text found in a document. What the lab concluded: text read from a document or a tool result was never accepted as an instruction, not even for a harmless style change, and only the policy source could change policy; the ranks are a table the lab wrote, and a real boundary has to be enforced by the runtime and not by the model reading the text",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Authority of text found in a document. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): text read from a document or a tool result was never accepted as an instruction, not even for a harmless style change, and only the policy source could change policy; the ranks are a table the lab wrote, and a real boundary has to be enforced by the runtime and not by the model reading the text"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: authority of text found in a document ---\nuser       asks to change response_style  -> accepted: True\ndocument   asks to change response_style  -> accepted: False\ndocument   asks to change policy          -> accepted: False\ntool_data  asks to change policy          -> accepted: False\npolicy     asks to change policy          -> accepted: True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 7: The unit tests",
    "headingKn": "ಪ್ರಯೋಗ 7: The unit tests",
    "bodyEn": "What it ran: The unit tests. What the lab concluded: the tests cover unknown, block over unknown, incompatible alternatives, a single alternative, an unauthorised setting and a document trying to change policy on this lab's own resolver",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The unit tests. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the tests cover unknown, block over unknown, incompatible alternatives, a single alternative, an unauthorised setting and a document trying to change policy on this lab's own resolver"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 7. Genuinely running: the unit tests ---\nran 6 tests | failures 0 | errors 0 | passed True"
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
    "headingEn": "Genuinely Found: Review, Modifications and Settings",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ವಿಮರ್ಶೆ, ಮಾರ್ಪಾಡುಗಳು ಮತ್ತು ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
    "bodyEn": "Section 1: all pass gave ALLOW, a safety UNKNOWN gave REVIEW, an ethics block with a safety unknown gave REFUSE by ETHICS, a helpfulness unknown gave REVIEW and a hard prohibition gave REFUSE. Section 2: one alternative gave MODIFY and two different alternatives gave REVIEW. Section 3: the valid settings passed and disable_safety and the value enormous were rejected.",
    "bodyKn": "ವಿಭಾಗ 1: ಎಲ್ಲಾ ಪಾಸ್ ALLOW ನೀಡಿತು, safety UNKNOWN REVIEW ನೀಡಿತು, safety ಅಜ್ಞಾತದೊಂದಿಗೆ ethics ತಡೆ ETHICS ನಿಂದ REFUSE ನೀಡಿತು, helpfulness ಅಜ್ಞಾತ REVIEW ನೀಡಿತು ಮತ್ತು ಕಠಿಣ ನಿಷೇಧ REFUSE ನೀಡಿತು. ವಿಭಾಗ 2: ಒಂದು ಪರ್ಯಾಯ MODIFY ನೀಡಿತು ಮತ್ತು ಎರಡು ಬೇರೆ ಪರ್ಯಾಯಗಳು REVIEW ನೀಡಿದವು. ವಿಭಾಗ 3: ಮಾನ್ಯ ಸೆಟ್ಟಿಂಗ್‌ಗಳು ಪಾಸ್ ಆದವು ಮತ್ತು disable_safety ಹಾಗೂ ಮೌಲ್ಯ enormous ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Critique, Preference and Authority",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Critique, ಆದ್ಯತೆ ಮತ್ತು ಅಧಿಕಾರ",
    "bodyEn": "Section 4: the honesty entry returned a critique and a revision and an unknown principle returned None. Section 5: the reassuring-word scorer gave 0.5 to the honest text and 1.0 to the misleading one and selected the misleading one, while hand-assigned scores selected the honest one. Section 6: a user could change response_style, a document could not change response_style or policy, tool data could not change policy and only the policy source could. Section 7: the six unit tests ran with 0 failures and 0 errors.",
    "bodyKn": "ವಿಭಾಗ 4: honesty ನಮೂದು critique ಮತ್ತು ಪರಿಷ್ಕರಣೆ ಹಿಂತಿರುಗಿಸಿತು ಮತ್ತು ಅಜ್ಞಾತ ತತ್ವ None ಹಿಂತಿರುಗಿಸಿತು. ವಿಭಾಗ 5: ಭರವಸೆ-ಪದ ಸ್ಕೋರರ್ ಪ್ರಾಮಾಣಿಕ ಪಠ್ಯಕ್ಕೆ 0.5 ಮತ್ತು ದಾರಿತಪ್ಪಿಸುವುದಕ್ಕೆ 1.0 ನೀಡಿ ದಾರಿತಪ್ಪಿಸುವುದನ್ನು ಆರಿಸಿತು, ಕೈಯಿಂದ ನೀಡಿದ ಅಂಕಗಳು ಪ್ರಾಮಾಣಿಕವನ್ನು ಆರಿಸಿದವು. ವಿಭಾಗ 6: ಬಳಕೆದಾರ response_style ಬದಲಿಸಬಹುದು, ದಾಖಲೆ response_style ಅಥವಾ policy ಬದಲಿಸಲಾಗಲಿಲ್ಲ, ಸಾಧನ ದತ್ತಾಂಶ policy ಬದಲಿಸಲಾಗಲಿಲ್ಲ ಮತ್ತು policy ಮೂಲ ಮಾತ್ರ ಮಾಡಬಹುದು. ವಿಭಾಗ 7: ಆರು unit ಪರೀಕ್ಷೆಗಳು 0 ವೈಫಲ್ಯ ಮತ್ತು 0 ದೋಷದೊಂದಿಗೆ ಓಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A resolver that turns unknown into allow, a scorer that can be gamed and a model that obeys document text all convert uncertainty into permission, so each needs an explicit stop.",
    "bodyKn": "unknown ಅನ್ನು allow ಆಗಿ ಬದಲಿಸುವ resolver, ಮೋಸಗೊಳಿಸಬಹುದಾದ ಸ್ಕೋರರ್ ಮತ್ತು ದಾಖಲೆ ಪಠ್ಯ ಪಾಲಿಸುವ ಮಾದರಿ ಎಲ್ಲವೂ ಅನಿಶ್ಚಿತತೆಯನ್ನು ಅನುಮತಿಯಾಗಿ ಬದಲಿಸುತ್ತವೆ, ಆದ್ದರಿಂದ ಪ್ರತಿಯೊಂದಕ್ಕೂ ಸ್ಪಷ್ಟ ನಿಲುಗಡೆ ಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"picking the highest score is reinforcement learning.\" It was selection, and the score itself rewarded the wrong text.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಅತಿ ಹೆಚ್ಚು ಅಂಕ ಆರಿಸುವುದು reinforcement learning.\" ಅದು ಆಯ್ಕೆಯಾಗಿತ್ತು, ಮತ್ತು ಅಂಕ ತಾನೇ ತಪ್ಪು ಪಠ್ಯಕ್ಕೆ ಬಹುಮಾನ ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "UNKNOWN: not enough information to decide. REVIEW: send to a human. Reward hacking: scoring well without meeting the goal. Authority rank: how much a source may change.",
    "bodyKn": "UNKNOWN: ನಿರ್ಧರಿಸಲು ಸಾಕಷ್ಟು ಮಾಹಿತಿ ಇಲ್ಲ. REVIEW: ಮನುಷ್ಯನಿಗೆ ಕಳುಹಿಸಿ. Reward hacking: ಗುರಿ ಸಾಧಿಸದೆ ಉತ್ತಮ ಅಂಕ ಪಡೆಯುವುದು. ಅಧಿಕಾರ ಶ್ರೇಣಿ: ಮೂಲ ಎಷ್ಟು ಬದಲಿಸಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Unknown gave REVIEW and a block still won. 2) Two alternatives gave REVIEW. 3) The scorer picked the misleading text at 1.0 against 0.5. 4) Document text was never accepted. 5) The critique table showed the data flow and nothing more.",
    "bodyKn": "1) Unknown REVIEW ನೀಡಿತು ಮತ್ತು ತಡೆ ಇನ್ನೂ ಗೆದ್ದಿತು. 2) ಎರಡು ಪರ್ಯಾಯಗಳು REVIEW ನೀಡಿದವು. 3) ಸ್ಕೋರರ್ 0.5 ವಿರುದ್ಧ 1.0 ನೊಂದಿಗೆ ದಾರಿತಪ್ಪಿಸುವ ಪಠ್ಯ ಆರಿಸಿತು. 4) ದಾಖಲೆ ಪಠ್ಯ ಎಂದಿಗೂ ಸ್ವೀಕರಿಸಲ್ಪಡಲಿಲ್ಲ. 5) critique ಟೇಬಲ್ ದತ್ತಾಂಶ ಹರಿವು ತೋರಿಸಿತು, ಅದಕ್ಕಿಂತ ಹೆಚ್ಚೇನೂ ಇಲ್ಲ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did a safety UNKNOWN give?",
      "qKn": "safety UNKNOWN ಏನು ನೀಡಿತು?",
      "opts": [
       "REVIEW",
       "ALLOW",
       "REFUSE",
       "MODIFY"
      ],
      "optsKn": [
       "REVIEW (ವಿಮರ್ಶೆ)",
       "ALLOW (ಅನುಮತಿ)",
       "REFUSE (ನಿರಾಕರಣೆ)",
       "MODIFY (ಮಾರ್ಪಾಡು)"
      ],
      "correct": 0
     },
     {
      "q": "What score did the misleading text get from the reassuring-word scorer?",
      "qKn": "ಭರವಸೆ-ಪದ ಸ್ಕೋರರ್ ದಾರಿತಪ್ಪಿಸುವ ಪಠ್ಯಕ್ಕೆ ಯಾವ ಅಂಕ ನೀಡಿತು?",
      "opts": [
       "1.0",
       "0.5",
       "0.2",
       "0.0"
      ],
      "optsKn": [
       "1.0",
       "0.5",
       "0.2",
       "0.0"
      ],
      "correct": 0
     },
     {
      "q": "Could a document change response_style?",
      "qKn": "ದಾಖಲೆ response_style ಬದಲಿಸಬಹುದೇ?",
      "opts": [
       "No, its rank was too low",
       "Yes",
       "Only with approval",
       "Only at night"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಅದರ ಶ್ರೇಣಿ ತೀರಾ ಕಡಿಮೆ",
       "ಹೌದು",
       "ಅನುಮೋದನೆಯೊಂದಿಗೆ ಮಾತ್ರ",
       "ರಾತ್ರಿ ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "What did two different alternatives give?",
      "qKn": "ಎರಡು ಬೇರೆ ಪರ್ಯಾಯಗಳು ಏನು ನೀಡಿದವು?",
      "opts": [
       "REVIEW",
       "MODIFY",
       "ALLOW",
       "REFUSE"
      ],
      "optsKn": [
       "REVIEW (ವಿಮರ್ಶೆ)",
       "MODIFY (ಮಾರ್ಪಾಡು)",
       "ALLOW (ಅನುಮತಿ)",
       "REFUSE (ನಿರಾಕರಣೆ)"
      ],
      "correct": 0
     },
     {
      "q": "Does the critique table show how a trained model would critique?",
      "qKn": "critique ಟೇಬಲ್ ತರಬೇತಿ ಪಡೆದ ಮಾದರಿ ಹೇಗೆ critique ಮಾಡುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತದೆಯೇ?",
      "opts": [
       "No, it shows only the data flow",
       "Yes, exactly",
       "Yes, partly",
       "It trains the model"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಅದು ದತ್ತಾಂಶ ಹರಿವು ಮಾತ್ರ ತೋರಿಸುತ್ತದೆ",
       "ಹೌದು, ಸಂಪೂರ್ಣ",
       "ಹೌದು, ಭಾಗಶಃ",
       "ಅದು ಮಾದರಿ ತರಬೇತಿ ಮಾಡುತ್ತದೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
