module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215c8",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "OpenAI Preparedness and DeepMind FSF (Part 1 of 3) — The Comparison Tool",
 "titleKn": "OpenAI Preparedness ಮತ್ತು DeepMind FSF (ಭಾಗ 1 / 3) — ಹೋಲಿಕೆ ಸಾಧನ",
 "desc": "Build a three-framework decision table with a controlled vocabulary, a command line and honest not-determined cells.",
 "descKn": "ನಿಯಂತ್ರಿತ ಶಬ್ದಕೋಶ, ಕಮಾಂಡ್ ಲೈನ್ ಮತ್ತು ಪ್ರಾಮಾಣಿಕ ನಿರ್ಧರಿಸದ ಕೋಶಗಳಿರುವ ಮೂರು-ಚೌಕಟ್ಟು ನಿರ್ಧಾರ ಟೇಬಲ್ ನಿರ್ಮಿಸಿ.",
 "objectives": [
  "Keep a controlled vocabulary.",
  "Normalise input.",
  "Validate the table.",
  "Refuse unknown input.",
  "Leave cells undetermined."
 ],
 "objectivesKn": [
  "ನಿಯಂತ್ರಿತ ಶಬ್ದಕೋಶ ಇಡಿ.",
  "ಇನ್‌ಪುಟ್ ಸಾಮಾನ್ಯೀಕರಿಸಿ.",
  "ಟೇಬಲ್ ಮೌಲ್ಯೀಕರಿಸಿ.",
  "ಅಜ್ಞಾತ ಇನ್‌ಪುಟ್ ನಿರಾಕರಿಸಿ.",
  "ಕೋಶಗಳನ್ನು ನಿರ್ಧರಿಸದೆ ಬಿಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "OpenAI Preparedness and DeepMind FSF (Part 1 of 3)",
    "textKn": "OpenAI Preparedness ಮತ್ತು DeepMind FSF (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a decision-table comparison tool over seven capabilities and three frameworks with a controlled trigger vocabulary, input normalisation, validation, an argparse command line driven in-process, JSON and text reports that assert no threshold or authorisation and twelve unit tests that are run. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the OpenAI Preparedness Framework and the DeepMind Frontier Safety Framework (a decision-table comparison tool with a controlled trigger vocabulary, evaluation metrics, a performance-gap detector and what chance alone produces, a policy version diff, a readiness check, an allowed-files check, evidence capture and source verification), not the real software, and the table cells restate how the lesson describes the frameworks and none was checked against the source documents, the evaluation records are fictional, the models in the simulations are probabilities written by the lab author and the commands run by the capture runner are harmless one-line programs, so no real LLM behaviour is measured. The original code/main.py was not supplied and the lesson code was shown only in fragments, so the labs are our own implementation and the outputs were produced by running them. Every classification in the comparison table restates how the lesson describes OpenAI, DeepMind and Anthropic, none was checked against the framework documents, and seven of the 21 cells say not_determined on purpose. The lesson itself corrects its earlier mapping and says AI self-improvement is a separate Tracked Category at OpenAI, which the table follows, and it names later versions such as DeepMind FSF 3.1 that were not examined here. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಏಳು ಸಾಮರ್ಥ್ಯಗಳು ಮತ್ತು ಮೂರು ಚೌಕಟ್ಟುಗಳ ಮೇಲೆ ನಿಯಂತ್ರಿತ trigger ಶಬ್ದಕೋಶ, ಇನ್‌ಪುಟ್ ಸಾಮಾನ್ಯೀಕರಣ, ಮೌಲ್ಯೀಕರಣ, ಪ್ರಕ್ರಿಯೆಯೊಳಗೆ ಓಡಿಸುವ argparse ಕಮಾಂಡ್ ಲೈನ್, ಮಿತಿ ಅಥವಾ ಅಧಿಕಾರ ಪ್ರತಿಪಾದಿಸದ JSON ಮತ್ತು ಪಠ್ಯ ವರದಿಗಳು ಹಾಗೂ ಓಡಿಸಿದ ಹನ್ನೆರಡು unit ಪರೀಕ್ಷೆಗಳಿರುವ ನಿರ್ಧಾರ-ಟೇಬಲ್ ಹೋಲಿಕೆ ಸಾಧನ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು OpenAI Preparedness Framework ಮತ್ತು DeepMind Frontier Safety Framework (ನಿಯಂತ್ರಿತ trigger ಶಬ್ದಕೋಶ ಇರುವ ನಿರ್ಧಾರ-ಟೇಬಲ್ ಹೋಲಿಕೆ ಸಾಧನ, ಮೌಲ್ಯಮಾಪನ ಮಾಪನಗಳು, ಕಾರ್ಯಕ್ಷಮತೆ-ಅಂತರ ಪತ್ತೆಕಾರಕ ಮತ್ತು ಕೇವಲ ಅವಕಾಶ ಏನು ಉಂಟುಮಾಡುತ್ತದೆ, ನೀತಿ ಆವೃತ್ತಿ ವ್ಯತ್ಯಾಸ, ಸಿದ್ಧತೆ ಪರಿಶೀಲನೆ, ಅನುಮತಿಸಿದ-ಫೈಲ್ ಪರಿಶೀಲನೆ, ಸಾಕ್ಷ್ಯ ಸೆರೆಹಿಡಿಯುವಿಕೆ ಮತ್ತು ಮೂಲ ಪರಿಶೀಲನೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಟೇಬಲ್ ಕೋಶಗಳು lesson ಚೌಕಟ್ಟುಗಳನ್ನು ಹೇಗೆ ವಿವರಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ಪುನರುಚ್ಚರಿಸುತ್ತವೆ ಮತ್ತು ಯಾವುದನ್ನೂ ಮೂಲ ದಾಖಲೆಗಳ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿಲ್ಲ, ಮೌಲ್ಯಮಾಪನ ದಾಖಲೆಗಳು ಕಾಲ್ಪನಿಕ, ಸಿಮ್ಯುಲೇಶನ್‌ಗಳಲ್ಲಿನ ಮಾದರಿಗಳು ಲ್ಯಾಬ್ ಲೇಖಕ ಬರೆದ ಸಂಭವನೀಯತೆಗಳು ಮತ್ತು capture runner ಓಡಿಸುವ ಆಜ್ಞೆಗಳು ಹಾನಿರಹಿತ ಒಂದು-ಸಾಲಿನ ಕಾರ್ಯಕ್ರಮಗಳು, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ ಮತ್ತು lesson ಕೋಡ್ ತುಣುಕುಗಳಲ್ಲಿ ಮಾತ್ರ ತೋರಿಸಲ್ಪಟ್ಟಿತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ ಮತ್ತು ಔಟ್‌ಪುಟ್ ಅನ್ನು ಅವನ್ನು ಓಡಿಸಿ ಪಡೆಯಲಾಗಿದೆ. ಹೋಲಿಕೆ ಟೇಬಲ್‌ನ ಪ್ರತಿ ವರ್ಗೀಕರಣ OpenAI, DeepMind ಮತ್ತು Anthropic ಅನ್ನು lesson ಹೇಗೆ ವಿವರಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ಪುನರುಚ್ಚರಿಸುತ್ತದೆ, ಯಾವುದನ್ನೂ ಚೌಕಟ್ಟು ದಾಖಲೆಗಳ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿಲ್ಲ, ಮತ್ತು 21 ಕೋಶಗಳಲ್ಲಿ ಏಳು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ not_determined ಎನ್ನುತ್ತವೆ. lesson ಸ್ವತಃ ತನ್ನ ಹಿಂದಿನ ನಕ್ಷೆಯನ್ನು ಸರಿಪಡಿಸಿ AI self-improvement OpenAI ನಲ್ಲಿ ಪ್ರತ್ಯೇಕ Tracked Category ಎನ್ನುತ್ತದೆ, ಟೇಬಲ್ ಅದನ್ನು ಅನುಸರಿಸುತ್ತದೆ, ಮತ್ತು DeepMind FSF 3.1 ನಂತಹ ನಂತರದ ಆವೃತ್ತಿಗಳನ್ನು ಹೆಸರಿಸುತ್ತದೆ, ಅವನ್ನು ಇಲ್ಲಿ ಪರೀಕ್ಷಿಸಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Compare Consequences, Not Names",
    "textKn": "ಹೆಸರುಗಳಲ್ಲ, ಪರಿಣಾಮಗಳನ್ನು ಹೋಲಿಸಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Decision Table That Refuses to Invent",
    "headingKn": "ಕಲ್ಪಿಸಲು ನಿರಾಕರಿಸುವ ನಿರ್ಧಾರ ಟೇಬಲ್",
    "bodyEn": "This part builds the comparison tool the lesson describes: seven capabilities, three frameworks, and a trigger vocabulary with four values so that no automatic trigger, threshold dependent, requires policy review and not determined are never confused. It normalises names, validates that every capability has all three frameworks, runs from a command line with a list option, an all option and a JSON format, and refuses unknown input instead of guessing. Every report says that no threshold was assessed and nothing was authorised, and that no cell has been checked against its source.",
    "bodyKn": "ಈ ಭಾಗ lesson ವಿವರಿಸುವ ಹೋಲಿಕೆ ಸಾಧನ ನಿರ್ಮಿಸುತ್ತದೆ: ಏಳು ಸಾಮರ್ಥ್ಯಗಳು, ಮೂರು ಚೌಕಟ್ಟುಗಳು, ಮತ್ತು ಯಾವುದೇ ಸ್ವಯಂಚಾಲಿತ trigger ಇಲ್ಲ, ಮಿತಿ-ಅವಲಂಬಿತ, ನೀತಿ ವಿಮರ್ಶೆ ಬೇಕು ಮತ್ತು ನಿರ್ಧರಿಸಲಾಗಿಲ್ಲ ಎಂಬವು ಎಂದಿಗೂ ಗೊಂದಲವಾಗದಂತೆ ನಾಲ್ಕು ಮೌಲ್ಯಗಳ trigger ಶಬ್ದಕೋಶ. ಅದು ಹೆಸರುಗಳನ್ನು ಸಾಮಾನ್ಯೀಕರಿಸುತ್ತದೆ, ಪ್ರತಿ ಸಾಮರ್ಥ್ಯಕ್ಕೂ ಮೂರೂ ಚೌಕಟ್ಟು ಇವೆ ಎಂದು ಮೌಲ್ಯೀಕರಿಸುತ್ತದೆ, list ಆಯ್ಕೆ, all ಆಯ್ಕೆ ಮತ್ತು JSON ರೂಪದೊಂದಿಗೆ ಕಮಾಂಡ್ ಲೈನ್‌ನಿಂದ ಓಡುತ್ತದೆ, ಮತ್ತು ಅಜ್ಞಾತ ಇನ್‌ಪುಟ್ ಊಹಿಸದೆ ನಿರಾಕರಿಸುತ್ತದೆ. ಪ್ರತಿ ವರದಿ ಯಾವುದೇ ಮಿತಿ ಮೌಲ್ಯಮಾಪನ ಆಗಿಲ್ಲ, ಏನನ್ನೂ ಅಧಿಕೃತಗೊಳಿಸಿಲ್ಲ ಮತ್ತು ಯಾವ ಕೋಶವನ್ನೂ ಅದರ ಮೂಲದ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿಲ್ಲ ಎಂದು ಹೇಳುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Three Frameworks, One Table",
    "headingKn": "ಮೂರು ಚೌಕಟ್ಟುಗಳು, ಒಂದು ಟೇಬಲ್",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a category name is not an obligation</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">OpenAI</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">tracked and research</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">DeepMind</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">domain thresholds</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">Anthropic</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">thresholds and commitments</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">compare</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">never equate labels</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a category name is not an obligation</text></svg>",
    "captionEn": "The tool preserves each framework terminology and says what it cannot determine.",
    "captionKn": "ಸಾಧನ ಪ್ರತಿ ಚೌಕಟ್ಟಿನ ಪರಿಭಾಷೆ ಉಳಿಸಿಕೊಂಡು ತಾನು ನಿರ್ಧರಿಸಲಾಗದ್ದನ್ನು ಹೇಳುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The tool",
    "headingKn": "ಸಾಧನ",
    "headers": [
     "Part",
     "What it does"
    ],
    "rows": [
     [
      "capabilities",
      "7 identifiers, 21 framework cells"
     ],
     [
      "trigger vocabulary",
      "four values, never a boolean"
     ],
     [
      "normaliser",
      "case, hyphens and spaces, no aliases"
     ],
     [
      "validator",
      "every capability needs all three frameworks"
     ],
     [
      "report",
      "threshold_crossed None, deployment_authorized False, sources_verified False"
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
    "filename": "pf_1.py",
    "headingEn": "Table, validator, comparison and command line",
    "headingKn": "ಟೇಬಲ್, ಮೌಲ್ಯೀಕಾರಕ, ಹೋಲಿಕೆ ಮತ್ತು ಕಮಾಂಡ್ ಲೈನ್",
    "descEn": "TriggerStatus is the controlled vocabulary, POLICY_TABLE holds the cells, validate_table checks structure, compare_capability builds a report with the boundary fields and run drives the argparse interface and returns an exit code.",
    "descKn": "TriggerStatus ನಿಯಂತ್ರಿತ ಶಬ್ದಕೋಶ, POLICY_TABLE ಕೋಶಗಳನ್ನು ಹೊಂದಿದೆ, validate_table ರಚನೆ ಪರಿಶೀಲಿಸುತ್ತದೆ, compare_capability ಗಡಿ ಕ್ಷೇತ್ರಗಳಿರುವ ವರದಿ ನಿರ್ಮಿಸುತ್ತದೆ ಮತ್ತು run argparse ಇಂಟರ್ಫೇಸ್ ನಡೆಸಿ ನಿರ್ಗಮನ ಕೋಡ್ ಹಿಂತಿರುಗಿಸುತ್ತದೆ.",
    "code": "class TriggerStatus(str, Enum):\r\n    NO_CATEGORY_AUTOMATIC_TRIGGER = \"no_category_automatic_trigger\"\r\n    THRESHOLD_DEPENDENT = \"threshold_dependent\"\r\n    REQUIRES_POLICY_REVIEW = \"requires_policy_review\"\r\n    NOT_DETERMINED = \"not_determined\"\r\n\r\n\r\n@dataclass(frozen=True)\r\nclass PolicyEntry:\r\n    framework: str\r\n    capability: str\r\n    classification: str\r\n    trigger_status: TriggerStatus\r\n    explanation: str\r\n    evidence_needed: str\r\n\r\n\r\nCAPABILITIES = {\r\n    \"long_range_autonomy\": \"Sustained goal-directed activity across extended tasks.\",\r\n    \"sandbagging\": \"Strategic underperformance during an evaluation.\",\r\n    \"ai_rd_automation\": \"Automating much of an AI research and development pipeline.\",\r\n    \"cyber_uplift\": \"Autonomous or assisted cybersecurity capability.\",\r\n    \"undermining_safeguards\": \"Defeating or weakening the controls on a model.\",\r\n    \"autonomous_replication\": \"Independently replicating or adapting operational capability.\",\r\n    \"ai_self_improvement\": \"Capability that could substantially accelerate AI development through self-improvement.\",\r\n}\r\nT = TriggerStatus\r\nRAW = {\r\n    \"long_range_autonomy\": {\r\n        \"openai\": (\"Research Category\", T.NO_CATEGORY_AUTOMATIC_TRIGGER, \"Named as a Research Category in the lesson.\"),\r\n        \"deepmind\": (\"Domain-dependent autonomy (ML R&D or Cyber)\", T.THRESHOLD_DEPENDENT, \"Autonomy is read through the domain it enables.\"),\r\n        \"anthropic\": (\"Related AI R&D capability concern\", T.REQUIRES_POLICY_REVIEW, \"Relevance depends on the applicable threshold text.\"),\r\n    },\r\n    \"sandbagging\": {\r\n        \"openai\": (\"Research Category\", T.NO_CATEGORY_AUTOMATIC_TRIGGER, \"Named as a Research Category in the lesson.\"),\r\n        \"deepmind\": (\"Deceptive alignment and monitoring concern\", T.REQUIRES_POLICY_REVIEW, \"Monitoring is a detection mechanism and not proof of safety.\"),\r\n        \"anthropic\": (\"Evaluation-reliability concern\", T.REQUIRES_POLICY_REVIEW, \"Affects how far a measured threshold can be trusted.\"),\r\n    },\r\n    \"ai_rd_automation\": {\r\n        \"openai\": (\"Not mapped here; see ai_self_improvement\", T.NOT_DETERMINED, \"The lesson says mapping this to a research concern was too broad.\"),\r\n        \"deepmind\": (\"ML R&D domain capability level\", T.THRESHOLD_DEPENDENT, \"Competitive end-to-end automation against a defined level.\"),\r\n        \"anthropic\": (\"AI R&D capability threshold\", T.THRESHOLD_DEPENDENT, \"Compared with the applicable threshold in the policy version used.\"),\r\n    },\r\n    \"cyber_uplift\": {\r\n        \"openai\": (\"Not covered by this lab's source text\", T.NOT_DETERMINED, \"No classification is asserted.\"),\r\n        \"deepmind\": (\"Cybersecurity domain\", T.THRESHOLD_DEPENDENT, \"Named as a domain in the lesson.\"),\r\n        \"anthropic\": (\"Not covered by this lab's source text\", T.NOT_DETERMINED, \"No classification is asserted.\"),\r\n    },\r\n    \"undermining_safeguards\": {\r\n        \"openai\": (\"Research Category\", T.NO_CATEGORY_AUTOMATIC_TRIGGER, \"Named as a Research Category in the lesson.\"),\r\n        \"deepmind\": (\"Misalignment and monitoring concern\", T.REQUIRES_POLICY_REVIEW, \"Exploratory work in the lesson description.\"),\r\n        \"anthropic\": (\"Safeguards-related concern\", T.REQUIRES_POLICY_REVIEW, \"Needs dedicated monitoring and adversarial evaluation evidence.\"),\r\n    },\r\n    \"autonomous_replication\": {\r\n        \"openai\": (\"Research Category\", T.NO_CATEGORY_AUTOMATIC_TRIGGER, \"Named as a Research Category in the lesson.\"),\r\n        \"deepmind\": (\"Not covered by this lab's source text\", T.NOT_DETERMINED, \"No classification is asserted.\"),\r\n        \"anthropic\": (\"Not covered by this lab's source text\", T.NOT_DETERMINED, \"No classification is asserted.\"),\r\n    },\r\n    \"ai_self_improvement\": {\r\n        \"openai\": (\"Tracked Category\", T.THRESHOLD_DEPENDENT, \"The lesson's correction: a distinct Tracked Category.\"),\r\n        \"deepmind\": (\"Not covered by this lab's source text\", T.NOT_DETERMINED, \"No classification is asserted.\"),\r\n        \"anthropic\": (\"Not covered by this lab's source text\", T.NOT_DETERMINED, \"No classification is asserted.\"),\r\n    },\r\n}\r\nEVIDENCE = \"End-to-end reliability, cost, human intervention, task difficulty and the exact threshold text for the policy version used.\"\r\nPOLICY_TABLE = {cap: {fw: PolicyEntry(fw, cap, v[0], v[1], v[2], EVIDENCE) for fw, v in fws.items()} for cap, fws in RAW.items()}\r\nFRAMEWORKS = {\"openai\", \"deepmind\", \"anthropic\"}\r\nDISCLAIMER = \"Educational policy comparison only. No actual threshold assessment or deployment authorization is made.\"\r\n\r\n\r\ndef normalize_capability(value):\r\n    return value.strip().lower().replace(\"-\", \"_\").replace(\" \", \"_\")\r\n\r\n\r\ndef validate_table(table=None, capabilities=None):\r\n    table = POLICY_TABLE if table is None else table\r\n    capabilities = CAPABILITIES if capabilities is None else capabilities\r\n    for cap in capabilities:\r\n        if cap not in table:\r\n            raise ValueError(f\"Capability missing from table: {cap}\")\r\n        if set(table[cap]) != FRAMEWORKS:\r\n            raise ValueError(f\"Incomplete framework mapping: {cap}\")\r\n    return True\r\n\r\n\r\ndef compare_capability(capability):\r\n    n = normalize_capability(capability)\r\n    if n not in CAPABILITIES:\r\n        raise ValueError(f\"Unknown capability: {capability}. Supported: {', '.join(sorted(CAPABILITIES))}\")\r\n    return {\"capability\": n, \"description\": CAPABILITIES[n], \"frameworks\": {fw: asdict(e) for fw, e in POLICY_TABLE[n].items()},\r\n            \"threshold_crossed\": None, \"deployment_authorized\": False, \"sources_verified\": False, \"disclaimer\": DISCLAIMER}\r\n\r\n\r\ndef render_text(result):\r\n    lines = [f\"Capability: {result['capability']}\", f\"Description: {result['description']}\", \"\"]\r\n    for fw, e in result[\"frameworks\"].items():\r\n        lines += [fw.upper(), f\"  Classification: {e['classification']}\", f\"  Trigger: {e['trigger_status'].value if isinstance(e['trigger_status'], Enum) else e['trigger_status']}\", \"\"]\r\n    lines += [f\"Threshold crossed: {result['threshold_crossed']}\", f\"Deployment authorized: {result['deployment_authorized']}\"]\r\n    return \"\\n\".join(lines)\r\n\r\n\r\ndef build_parser():\r\n    p = argparse.ArgumentParser(prog=\"framework_compare\")\r\n    g = p.add_mutually_exclusive_group(required=True)\r\n    g.add_argument(\"--list\", action=\"store_true\")\r\n    g.add_argument(\"--all\", action=\"store_true\")\r\n    g.add_argument(\"--capability\")\r\n    p.add_argument(\"--format\", choices=(\"text\", \"json\"), default=\"text\")\r\n    return p\r\n\r\n\r\ndef run(argv):\r\n    err = io.StringIO()\r\n    with contextlib.redirect_stderr(err):\r\n        try:\r\n            args = build_parser().parse_args(argv)\r\n        except SystemExit as e:\r\n            return e.code, err.getvalue().strip().splitlines()[-1]\r\n    try:\r\n        validate_table()\r\n        if args.list:\r\n            return 0, \"\\n\".join(sorted(CAPABILITIES))\r\n        results = [compare_capability(c) for c in sorted(CAPABILITIES)] if args.all else [compare_capability(args.capability)]\r\n    except ValueError as e:\r\n        return 1, f\"error: {e}\"\r\n    if args.format == \"json\":\r\n        return 0, json.dumps(results if args.all else results[0], indent=2, sort_keys=True, default=lambda o: o.value)\r\n    return 0, \"\\n\\n\".join(render_text(r) for r in results)\r\n\r\n\r\nclass ComparisonTests(unittest.TestCase):\r\n    def test_normalisation(self):\r\n        self.assertEqual(normalize_capability(\" Long Range-Autonomy \"), \"long_range_autonomy\")\r\n\r\n    def test_known_capability(self):\r\n        self.assertEqual(compare_capability(\"sandbagging\")[\"capability\"], \"sandbagging\")\r\n\r\n    def test_three_frameworks(self):\r\n        self.assertEqual(set(compare_capability(\"cyber_uplift\")[\"frameworks\"]), FRAMEWORKS)\r\n\r\n    def test_unknown_rejected(self):\r\n        with self.assertRaises(ValueError):\r\n            compare_capability(\"robotics\")\r\n\r\n    def test_no_threshold_claim(self):\r\n        self.assertIsNone(compare_capability(\"ai_rd_automation\")[\"threshold_crossed\"])\r\n\r\n    def test_no_authorisation(self):\r\n        self.assertFalse(compare_capability(\"ai_rd_automation\")[\"deployment_authorized\"])\r\n\r\n    def test_all_entries(self):\r\n        self.assertEqual(sum(len(v) for v in POLICY_TABLE.values()), 21)\r\n\r\n    def test_validate_ok(self):\r\n        self.assertTrue(validate_table())\r\n\r\n    def test_validate_fails_on_missing_framework(self):\r\n        broken = {k: dict(v) for k, v in POLICY_TABLE.items()}\r\n        del broken[\"sandbagging\"][\"anthropic\"]\r\n        with self.assertRaises(ValueError):\r\n            validate_table(broken)\r\n\r\n    def test_json_serialisable(self):\r\n        self.assertIn(\"deployment_authorized\", json.loads(run([\"--capability\", \"sandbagging\", \"--format\", \"json\"])[1]))\r\n\r\n    def test_text_has_boundary_lines(self):\r\n        self.assertIn(\"Deployment authorized: False\", run([\"--capability\", \"sandbagging\"])[1])\r\n\r\n    def test_self_improvement_is_separate(self):\r\n        self.assertEqual(POLICY_TABLE[\"ai_self_improvement\"][\"openai\"].classification, \"Tracked Category\")"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pf_1.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the list and compare commands, JSON output, the error cases, validation, a count of cell types and twelve unit tests.",
    "descKn": "main() list ಮತ್ತು compare ಆಜ್ಞೆಗಳು, JSON ಔಟ್‌ಪುಟ್, ದೋಷ ಪ್ರಕರಣಗಳು, ಮೌಲ್ಯೀಕರಣ, ಕೋಶ ಪ್ರಕಾರಗಳ ಎಣಿಕೆ ಮತ್ತು ಹನ್ನೆರಡು unit ಪರೀಕ್ಷೆ ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely running: the command line\")\r\n    code, out = run([\"--list\"])\r\n    print(\"--list exit\", code)\r\n    print(out)\r\n    code, out = run([\"--capability\", \"Long Range Autonomy\"])\r\n    print(\"\\n--capability 'Long Range Autonomy' exit\", code)\r\n    print(out)\r\n    print(\"the input was normalised to long_range_autonomy, each framework kept its own classification and trigger word, and the last two lines say that no threshold was assessed and nothing was authorised; the three classifications are the lesson's description and have not been checked against the source documents\")\r\n\r\n    section(\"2. Genuinely running: JSON output and the full set\")\r\n    code, out = run([\"--capability\", \"sandbagging\", \"--format\", \"json\"])\r\n    data = json.loads(out)\r\n    print(\"exit\", code, \"| keys:\", sorted(data), \"| threshold_crossed:\", data[\"threshold_crossed\"], \"| sources_verified:\", data[\"sources_verified\"])\r\n    code, out = run([\"--all\", \"--format\", \"json\"])\r\n    data = json.loads(out)\r\n    print(\"--all exit\", code, \"| capabilities:\", len(data), \"| entries:\", sum(len(d[\"frameworks\"]) for d in data))\r\n    print(\"the JSON carries the same boundary fields and the full set holds 7 capabilities and 21 entries, and sources_verified is false in every report because no cell has been compared with the original text\")\r\n\r\n    section(\"3. Genuinely running: errors and argument conflicts\")\r\n    for argv in ([\"--capability\", \"robotics\"], [\"--capability\", \"AI research automation\"], [\"--all\", \"--capability\", \"sandbagging\"], []):\r\n        code, out = run(argv)\r\n        print(f\"{argv!s:42} exit {code}: {out}\")\r\n    print(\"an unknown capability exited 1 and listed the supported names, the phrase AI research automation was not guessed into ai_rd_automation because there is no alias table, and conflicting or missing arguments exited 2 with a usage error; an unknown input is never turned into a low-risk answer\")\r\n\r\n    section(\"4. Genuinely running: structural validation\")\r\n    broken = {k: dict(v) for k, v in POLICY_TABLE.items()}\r\n    del broken[\"sandbagging\"][\"anthropic\"]\r\n    for label, table in ((\"complete table\", None), (\"one framework removed\", broken)):\r\n        try:\r\n            print(f\"{label}:\", validate_table(table))\r\n        except ValueError as e:\r\n            print(f\"{label}: ValueError: {e}\")\r\n    print(\"the complete table passed and the table with one framework removed failed by name; passing this check shows the table is well formed and says nothing about whether any entry is right\")\r\n\r\n    section(\"5. Genuinely counting: how many cells assert nothing\")\r\n    cells = [e for fws in POLICY_TABLE.values() for e in fws.values()]\r\n    from collections import Counter\r\n    print(dict(Counter(e.trigger_status.value for e in cells)))\r\n    print(\"of the 21 cells, 7 say not_determined instead of asserting a classification, 5 are threshold dependent, 5 need a policy review and 4 say research category with no automatic trigger; leaving a cell undetermined is how the table avoids inventing an obligation it cannot source\")\r\n\r\n    section(\"6. Genuinely running: the twelve unit tests\")\r\n    stream = io.StringIO()\r\n    res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(ComparisonTests))\r\n    print(f\"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}\")\r\n    print(\"the tests cover normalisation, the three-framework structure, the unknown-input error, the two boundary fields, the entry count, validation and its failure, JSON, text output and the separate self-improvement category on this lab's table, and they test the software and say nothing about the policies\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the command line ---\n--list exit 0\nai_rd_automation\nai_self_improvement\nautonomous_replication\ncyber_uplift\nlong_range_autonomy\nsandbagging\nundermining_safeguards\n\n--capability 'Long Range Autonomy' exit 0\nCapability: long_range_autonomy\nDescription: Sustained goal-directed activity across extended tasks.\n\nOPENAI\n  Classification: Research Category\n  Trigger: no_category_automatic_trigger\n\nDEEPMIND\n  Classification: Domain-dependent autonomy (ML R&D or Cyber)\n  Trigger: threshold_dependent\n\nANTHROPIC\n  Classification: Related AI R&D capability concern\n  Trigger: requires_policy_review\n\nThreshold crossed: None\nDeployment authorized: False\nthe input was normalised to long_range_autonomy, each framework kept its own classification and trigger word, and the last two lines say that no threshold was assessed and nothing was authorised; the three classifications are the lesson's description and have not been checked against the source documents\n\n--- 2. Genuinely running: JSON output and the full set ---\nexit 0 | keys: ['capability', 'deployment_authorized', 'description', 'disclaimer', 'frameworks', 'sources_verified', 'threshold_crossed'] | threshold_crossed: None | sources_verified: False\n--all exit 0 | capabilities: 7 | entries: 21\nthe JSON carries the same boundary fields and the full set holds 7 capabilities and 21 entries, and sources_verified is false in every report because no cell has been compared with the original text\n\n--- 3. Genuinely running: errors and argument conflicts ---\n['--capability', 'robotics']               exit 1: error: Unknown capability: robotics. Supported: ai_rd_automation, ai_self_improvement, autonomous_replication, cyber_uplift, long_range_autonomy, sandbagging, undermining_safeguards\n['--capability', 'AI research automation'] exit 1: error: Unknown capability: AI research automation. Supported: ai_rd_automation, ai_self_improvement, autonomous_replication, cyber_uplift, long_range_autonomy, sandbagging, undermining_safeguards\n['--all', '--capability', 'sandbagging']   exit 2: framework_compare: error: argument --capability: not allowed with argument --all\n[]                                         exit 2: framework_compare: error: one of the arguments --list --all --capability is required\nan unknown capability exited 1 and listed the supported names, the phrase AI research automation was not guessed into ai_rd_automation because there is no alias table, and conflicting or missing arguments exited 2 with a usage error; an unknown input is never turned into a low-risk answer\n\n--- 4. Genuinely running: structural validation ---\ncomplete table: True\none framework removed: ValueError: Incomplete framework mapping: sandbagging\nthe complete table passed and the table with one framework removed failed by name; passing this check shows the table is well formed and says nothing about whether any entry is right\n\n--- 5. Genuinely counting: how many cells assert nothing ---\n{'no_category_automatic_trigger': 4, 'threshold_dependent': 5, 'requires_policy_review': 5, 'not_determined': 7}\nof the 21 cells, 7 say not_determined instead of asserting a classification, 5 are threshold dependent, 5 need a policy review and 4 say research category with no automatic trigger; leaving a cell undetermined is how the table avoids inventing an obligation it cannot source\n\n--- 6. Genuinely running: the twelve unit tests ---\nran 12 tests | failures 0 | errors 0 | passed True\nthe tests cover normalisation, the three-framework structure, the unknown-input error, the two boundary fields, the entry count, validation and its failure, JSON, text output and the separate self-improvement category on this lab's table, and they test the software and say nothing about the policies"
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
    "headingEn": "Experiment 1: The command line",
    "headingKn": "ಪ್ರಯೋಗ 1: The command line",
    "bodyEn": "What it ran: The command line. What the lab concluded: the input was normalised to long_range_autonomy, each framework kept its own classification and trigger word, and the last two lines say that no threshold was assessed and nothing was authorised; the three classifications are the lesson's description and have not been checked against the source documents",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The command line. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the input was normalised to long_range_autonomy, each framework kept its own classification and trigger word, and the last two lines say that no threshold was assessed and nothing was authorised; the three classifications are the lesson's description and have not been checked against the source documents"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: the command line ---\n--list exit 0\nai_rd_automation\nai_self_improvement\nautonomous_replication\ncyber_uplift\nlong_range_autonomy\nsandbagging\nundermining_safeguards\n--capability 'Long Range Autonomy' exit 0\nCapability: long_range_autonomy\nDescription: Sustained goal-directed activity across extended tasks.\nOPENAI\n  Classification: Research Category\n  Trigger: no_category_automatic_trigger\n…"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: JSON output and the full set",
    "headingKn": "ಪ್ರಯೋಗ 2: JSON output and the full set",
    "bodyEn": "What it ran: JSON output and the full set. What the lab concluded: the JSON carries the same boundary fields and the full set holds 7 capabilities and 21 entries, and sources_verified is false in every report because no cell has been compared with the original text",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: JSON output and the full set. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the JSON carries the same boundary fields and the full set holds 7 capabilities and 21 entries, and sources_verified is false in every report because no cell has been compared with the original text"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: JSON output and the full set ---\nexit 0 | keys: ['capability', 'deployment_authorized', 'description', 'disclaimer', 'frameworks', 'sources_verified', 'threshold_crossed'] | threshold_crossed: None | sources_verified: False\n--all exit 0 | capabilities: 7 | entries: 21"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Errors and argument conflicts",
    "headingKn": "ಪ್ರಯೋಗ 3: Errors and argument conflicts",
    "bodyEn": "What it ran: Errors and argument conflicts. What the lab concluded: an unknown capability exited 1 and listed the supported names, the phrase AI research automation was not guessed into ai_rd_automation because there is no alias table, and conflicting or missing arguments exited 2 with a usage error; an unknown input is never turned into a low-risk answer",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Errors and argument conflicts. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): an unknown capability exited 1 and listed the supported names, the phrase AI research automation was not guessed into ai_rd_automation because there is no alias table, and conflicting or missing arguments exited 2 with a usage error; an unknown input is never turned into a low-risk answer"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: errors and argument conflicts ---\n['--capability', 'robotics']               exit 1: error: Unknown capability: robotics. Supported: ai_rd_automation, ai_self_improvement, autonomous_replication, cyber_uplift, long_range_autonomy, sandbagging, undermini…\n['--capability', 'AI research automation'] exit 1: error: Unknown capability: AI research automation. Supported: ai_rd_automation, ai_self_improvement, autonomous_replication, cyber_uplift, long_range_autonomy, sandbagg…\n['--all', '--capability', 'sandbagging']   exit 2: framework_compare: error: argument --capability: not allowed with argument --all\n[]                                         exit 2: framework_compare: error: one of the arguments --list --all --capability is required"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Structural validation",
    "headingKn": "ಪ್ರಯೋಗ 4: Structural validation",
    "bodyEn": "What it ran: Structural validation. What the lab concluded: the complete table passed and the table with one framework removed failed by name; passing this check shows the table is well formed and says nothing about whether any entry is right",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Structural validation. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the complete table passed and the table with one framework removed failed by name; passing this check shows the table is well formed and says nothing about whether any entry is right"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: structural validation ---\ncomplete table: True\none framework removed: ValueError: Incomplete framework mapping: sandbagging"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: How many cells assert nothing",
    "headingKn": "ಪ್ರಯೋಗ 5: How many cells assert nothing",
    "bodyEn": "What it ran: How many cells assert nothing. What the lab concluded: of the 21 cells, 7 say not_determined instead of asserting a classification, 5 are threshold dependent, 5 need a policy review and 4 say research category with no automatic trigger; leaving a cell undetermined is how the table avoids inventing an obligation it cannot source",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: How many cells assert nothing. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): of the 21 cells, 7 say not_determined instead of asserting a classification, 5 are threshold dependent, 5 need a policy review and 4 say research category with no automatic trigger; leaving a cell undetermined is how the table avoids inventing an obligation it cannot source"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely counting: how many cells assert nothing ---\n{'no_category_automatic_trigger': 4, 'threshold_dependent': 5, 'requires_policy_review': 5, 'not_determined': 7}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: The twelve unit tests",
    "headingKn": "ಪ್ರಯೋಗ 6: The twelve unit tests",
    "bodyEn": "What it ran: The twelve unit tests. What the lab concluded: the tests cover normalisation, the three-framework structure, the unknown-input error, the two boundary fields, the entry count, validation and its failure, JSON, text output and the separate self-improvement category on this lab's table, and they test the software and say nothing about the policies",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The twelve unit tests. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the tests cover normalisation, the three-framework structure, the unknown-input error, the two boundary fields, the entry count, validation and its failure, JSON, text output and the separate self-improvement category on this lab's table, and they test the software and say nothing about the policies"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: the twelve unit tests ---\nran 12 tests | failures 0 | errors 0 | passed True"
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
    "headingEn": "Genuinely Found: Commands, JSON and Errors",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಆಜ್ಞೆಗಳು, JSON ಮತ್ತು ದೋಷಗಳು",
    "bodyEn": "Section 1: --list printed seven capabilities, and comparing Long Range Autonomy printed OpenAI as Research Category with no_category_automatic_trigger, DeepMind as threshold_dependent and Anthropic as requires_policy_review, ending with threshold crossed None and deployment authorized False. Section 2: the JSON carried threshold_crossed None and sources_verified False and --all gave 7 capabilities and 21 entries. Section 3: robotics and AI research automation exited 1 with the supported names, and a conflicting or missing argument exited 2.",
    "bodyKn": "ವಿಭಾಗ 1: --list ಏಳು ಸಾಮರ್ಥ್ಯ ಮುದ್ರಿಸಿತು, ಮತ್ತು Long Range Autonomy ಹೋಲಿಸಿದಾಗ OpenAI ಅನ್ನು no_category_automatic_trigger ಜೊತೆ Research Category, DeepMind ಅನ್ನು threshold_dependent ಮತ್ತು Anthropic ಅನ್ನು requires_policy_review ಎಂದು ಮುದ್ರಿಸಿ threshold crossed None ಮತ್ತು deployment authorized False ಯೊಂದಿಗೆ ಮುಗಿಯಿತು. ವಿಭಾಗ 2: JSON threshold_crossed None ಮತ್ತು sources_verified False ಹೊಂದಿತ್ತು ಮತ್ತು --all 7 ಸಾಮರ್ಥ್ಯ ಹಾಗೂ 21 ನಮೂದು ನೀಡಿತು. ವಿಭಾಗ 3: robotics ಮತ್ತು AI research automation ಬೆಂಬಲಿತ ಹೆಸರುಗಳೊಂದಿಗೆ 1 ರಲ್ಲಿ ನಿರ್ಗಮಿಸಿದವು, ಮತ್ತು ಸಂಘರ್ಷದ ಅಥವಾ ಕಾಣೆಯಾದ ಆರ್ಗ್ಯುಮೆಂಟ್ 2 ರಲ್ಲಿ ನಿರ್ಗಮಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Validation, Cells and Tests",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮೌಲ್ಯೀಕರಣ, ಕೋಶಗಳು ಮತ್ತು ಪರೀಕ್ಷೆಗಳು",
    "bodyEn": "Section 4: the complete table passed validation and the table without Anthropic for sandbagging failed with Incomplete framework mapping: sandbagging. Section 5: of the 21 cells 7 were not_determined, 5 threshold_dependent, 5 requires_policy_review and 4 no_category_automatic_trigger. Section 6: the twelve unit tests ran with 0 failures and 0 errors.",
    "bodyKn": "ವಿಭಾಗ 4: ಪೂರ್ಣ ಟೇಬಲ್ ಮೌಲ್ಯೀಕರಣ ಪಾಸ್ ಮಾಡಿತು ಮತ್ತು sandbagging ಗೆ Anthropic ಇಲ್ಲದ ಟೇಬಲ್ Incomplete framework mapping: sandbagging ನೊಂದಿಗೆ ವಿಫಲವಾಯಿತು. ವಿಭಾಗ 5: 21 ಕೋಶಗಳಲ್ಲಿ 7 not_determined, 5 threshold_dependent, 5 requires_policy_review ಮತ್ತು 4 no_category_automatic_trigger. ವಿಭಾಗ 6: ಹನ್ನೆರಡು unit ಪರೀಕ್ಷೆಗಳು 0 ವೈಫಲ್ಯ ಮತ್ತು 0 ದೋಷದೊಂದಿಗೆ ಓಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A comparison that preserves each framework own words and says not determined where it cannot source a cell is more honest than one that fills every cell, because a category name is not an obligation.",
    "bodyKn": "ಪ್ರತಿ ಚೌಕಟ್ಟಿನ ಸ್ವಂತ ಪದಗಳನ್ನು ಉಳಿಸಿ ಮೂಲ ಇಲ್ಲದ ಕೋಶಕ್ಕೆ ನಿರ್ಧರಿಸಲಾಗಿಲ್ಲ ಎನ್ನುವ ಹೋಲಿಕೆ ಪ್ರತಿ ಕೋಶ ತುಂಬುವುದಕ್ಕಿಂತ ಹೆಚ್ಚು ಪ್ರಾಮಾಣಿಕ, ಏಕೆಂದರೆ ವರ್ಗದ ಹೆಸರು ಬಾಧ್ಯತೆಯಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a full table means the comparison is complete.\" Seven of the 21 cells deliberately say not determined, and none was checked against its source.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಪೂರ್ಣ ಟೇಬಲ್ ಎಂದರೆ ಹೋಲಿಕೆ ಪೂರ್ಣ.\" 21 ಕೋಶಗಳಲ್ಲಿ ಏಳು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ನಿರ್ಧರಿಸಲಾಗಿಲ್ಲ ಎನ್ನುತ್ತವೆ, ಮತ್ತು ಯಾವುದನ್ನೂ ಅದರ ಮೂಲದ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Tracked Category: one with defined thresholds and processes. Research Category: a recognised risk without the same automatic trigger. Trigger status: what a category activates. Not determined: no claim is made.",
    "bodyKn": "Tracked Category: ವ್ಯಾಖ್ಯಾನಿತ ಮಿತಿ ಮತ್ತು ಪ್ರಕ್ರಿಯೆ ಇರುವುದು. Research Category: ಅದೇ ಸ್ವಯಂಚಾಲಿತ trigger ಇಲ್ಲದ ಗುರುತಿಸಿದ ಅಪಾಯ. Trigger ಸ್ಥಿತಿ: ವರ್ಗ ಏನನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ. ನಿರ್ಧರಿಸಲಾಗಿಲ್ಲ: ಯಾವ ಹೇಳಿಕೆಯೂ ಇಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) An unknown phrase exited 1 and was not guessed. 2) Missing or conflicting arguments exited 2. 3) Every report said no threshold was assessed. 4) Removing one framework failed validation. 5) 7 of 21 cells assert nothing.",
    "bodyKn": "1) ಅಜ್ಞಾತ ಪದಗುಚ್ಛ 1 ರಲ್ಲಿ ನಿರ್ಗಮಿಸಿ ಊಹಿಸಲ್ಪಡಲಿಲ್ಲ. 2) ಕಾಣೆಯಾದ ಅಥವಾ ಸಂಘರ್ಷದ ಆರ್ಗ್ಯುಮೆಂಟ್ 2 ರಲ್ಲಿ ನಿರ್ಗಮಿಸಿತು. 3) ಪ್ರತಿ ವರದಿ ಯಾವುದೇ ಮಿತಿ ಮೌಲ್ಯಮಾಪನ ಆಗಿಲ್ಲ ಎಂದಿತು. 4) ಒಂದು ಚೌಕಟ್ಟು ತೆಗೆದರೆ ಮೌಲ್ಯೀಕರಣ ವಿಫಲವಾಯಿತು. 5) 21 ರಲ್ಲಿ 7 ಕೋಶಗಳು ಏನನ್ನೂ ಪ್ರತಿಪಾದಿಸುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many cells does the table hold?",
      "qKn": "ಟೇಬಲ್ ಎಷ್ಟು ಕೋಶ ಹೊಂದಿದೆ?",
      "opts": [
       "21",
       "18",
       "7",
       "12"
      ],
      "optsKn": [
       "21",
       "18",
       "7",
       "12"
      ],
      "correct": 0
     },
     {
      "q": "What exit code did an unknown capability give?",
      "qKn": "ಅಜ್ಞಾತ ಸಾಮರ್ಥ್ಯ ಯಾವ ನಿರ್ಗಮನ ಕೋಡ್ ನೀಡಿತು?",
      "opts": [
       "1",
       "0",
       "2",
       "3"
      ],
      "optsKn": [
       "1",
       "0",
       "2",
       "3"
      ],
      "correct": 0
     },
     {
      "q": "How many cells said not_determined?",
      "qKn": "ಎಷ್ಟು ಕೋಶಗಳು not_determined ಎಂದವು?",
      "opts": [
       "7",
       "5",
       "4",
       "0"
      ],
      "optsKn": [
       "7",
       "5",
       "4",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "What did the report say about deployment authorisation?",
      "qKn": "ನಿಯೋಜನೆ ಅಧಿಕಾರದ ಬಗ್ಗೆ ವರದಿ ಏನು ಹೇಳಿತು?",
      "opts": [
       "deployment_authorized is False",
       "It was authorised",
       "It was pending",
       "It was not mentioned"
      ],
      "optsKn": [
       "deployment_authorized False ಆಗಿದೆ",
       "ಅದು ಅಧಿಕೃತವಾಯಿತು",
       "ಅದು ಬಾಕಿ ಇತ್ತು",
       "ಅದನ್ನು ಹೇಳಿರಲಿಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Why was AI research automation not mapped to ai_rd_automation?",
      "qKn": "AI research automation ಅನ್ನು ai_rd_automation ಗೆ ಏಕೆ ನಕ್ಷೆ ಮಾಡಲಿಲ್ಲ?",
      "opts": [
       "There is no alias table and the tool does not guess",
       "The name was too long",
       "It was a hard prohibition",
       "It was authorised"
      ],
      "optsKn": [
       "alias ಟೇಬಲ್ ಇಲ್ಲ ಮತ್ತು ಸಾಧನ ಊಹಿಸುವುದಿಲ್ಲ",
       "ಹೆಸರು ತೀರಾ ಉದ್ದವಾಗಿತ್ತು",
       "ಅದು ಕಠಿಣ ನಿಷೇಧ",
       "ಅದು ಅಧಿಕೃತವಾಗಿತ್ತು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
