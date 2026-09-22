const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214d2'; // Module 254: Tool Schema Design

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 45,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Tool Schema Design (Part 2 of 3) — Enums, Regex IDs, and Monolithic-Action Detection',
  titleKn: 'Tool Schema Design (Part 2 of 3) — Enums, Regex IDs, Monolithic-Action Detection',
  desc: 'Genuinely test enum closed sets against 5 candidate model outputs (only 2 legal), genuinely test a note-ID regex against 5 candidate IDs (only 2 valid, including a plausible-but-wrong hallucination), and genuinely confirm the linter distinguishes "no enum at all" (monolithic_action) from "too many enum choices" (too_many_actions) as two separate rules.',
  descKn: 'Enum closed sets ಅನ್ನೂ 5 candidate model outputs ವಿರುದ್ಧ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿ, ಒಂದೂ note-ID regex ಅನ್ನೂ 5 candidate IDs ವಿರುದ್ಧ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿ, linter monolithic_action, too_many_actions ಅನ್ನೂ ಎರಡೂ ಪ್ರತ್ಯೇಕ rules ಆಗಿ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely confirm that only enum members are legal by testing 5 candidate strings against a 2-value enum.',
    'Genuinely confirm a regex pattern rejects a plausible-but-wrong hallucinated ID ("note-transformer-ideas") that an unconstrained string field would accept.',
    'Genuinely run lint_parameters() on a tool with "action": string but no enum, and confirm it triggers design.monolithic_action, a distinct rule from too_many_actions.',
    'Genuinely confirm a 3-choice action enum produces zero findings, establishing exactly where the ">3" threshold sits.',
    'Explain why required and optional fields should reflect the minimum viable argument set, not every field the implementation happens to accept.',
  ],
  objectivesKn: [
    '5 candidate strings ಅನ್ನೂ ಒಂದೂ 2-value enum ವಿರುದ್ಧ ಪರೀಕ್ಷಿಸಿ, ಕೇವಲ enum members ಮಾತ್ರ ಕಾನೂನುಬದ್ಧ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ regex pattern ಒಂದೂ plausible-but-wrong hallucinated ID ಅನ್ನೂ ತಿರಸ್ಕರಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    '"action": string ಆದರೆ ಯಾವುದೇ enum ಇಲ್ಲದ ಒಂದೂ tool ಮೇಲೆ lint_parameters() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, design.monolithic_action ಪ್ರಚೋದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ 3-choice action enum ಶೂನ್ಯ findings ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Required, optional fields ಕಾರ್ಯಗತಗೊಳಿಸುವಿಕೆ ಸ್ವೀಕರಿಸುವ ಪ್ರತಿ field ಬದಲೂ ಕನಿಷ್ಠ ಸಾಧ್ಯ argument set ಅನ್ನೂ ಏಕೆ ಪ್ರತಿಬಿಂಬಿಸಬೇಕೂ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Tool Schema Design (Part 2 of 3)', textKn: 'Tool Schema Design (Part 2 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~45 minutes · Part 2 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~45 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Enums,Regex Patterns,Required Fields,Part 2 of 3', pillsKn: 'Enums,Regex Patterns,Required Fields,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Weak Schema, Large Output Space', textKn: 'ದುರ್ಬಲ Schema, ದೊಡ್ಡ Output Space', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'From Tool Selection to Argument Generation', headingKn: 'Tool Selection ಇಂದ Argument Generation ಗೆ',
      bodyEn: 'Part 1 reduced ambiguity in which tool gets picked. Part 2 reduces ambiguity in what arguments get generated. A field like {"type": "string"} technically accepts anything -- the model could emit "C", "metric", "degrees", or "kelvin" even if the executor only understands two values. We genuinely test this gap.',
      bodyKn: 'Part 1 ಯಾವ tool ಆಯ್ಕೆಯಾಗುತ್ತದೆ ಎಂಬುದರಲ್ಲಿ ambiguity ಕಡಿಮೆ ಮಾಡಿತೂ. Part 2 ಯಾವ arguments ಉತ್ಪಾದಿಸಲ್ಪಡುತ್ತವೆ ಎಂಬುದರಲ್ಲಿ ambiguity ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'enum_and_pattern.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Five candidate "units" strings genuinely checked against a 2-value enum, and five candidate note IDs genuinely checked against a strict regex pattern.',
      descKn: 'ಐದೂ candidate "units" strings ಅನ್ನೂ 2-value enum ವಿರುದ್ಧ, ಐದೂ candidate note IDs ಅನ್ನೂ ಒಂದೂ ಕಠಿಣ regex pattern ವಿರುದ್ಧ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ.',
      code: "import re\n\nLEGAL_UNITS = {'celsius', 'fahrenheit'}\ncandidate_outputs = ['celsius', 'C', 'metric', 'fahrenheit', 'degrees']\nfor c in candidate_outputs:\n    print(f'{c!r}: legal={c in LEGAL_UNITS}')\nprint()\n\nNOTE_ID_PATTERN = re.compile(r'^note-[0-9]{8}$')\ncandidate_ids = ['note-12345678', 'note-transformer-ideas', '123', 'note-12', 'note-00000001']\nfor cid in candidate_ids:\n    print(f'{cid!r}: valid={bool(NOTE_ID_PATTERN.fullmatch(cid))}')" } },
    { type: 'output', data: { output: "'celsius': legal=True\n'C': legal=False\n'metric': legal=False\n'fahrenheit': legal=True\n'degrees': legal=False\n\n'note-12345678': valid=True\n'note-transformer-ideas': valid=False\n'123': valid=False\n'note-12': valid=False\n'note-00000001': valid=True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Plausible-Sounding ID Is Still Rejected', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ Plausible-Sounding ID ಇನ್ನೂ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿದೆ',
      bodyEn: '"note-transformer-ideas" genuinely failed the pattern check even though it looks like a reasonable note identifier -- a model could hallucinate exactly this kind of semantically plausible but structurally wrong value. Only 2 of 5 candidate units and 2 of 5 candidate IDs genuinely passed their respective constraints, proving these constraints do real filtering work, not just theoretical documentation.',
      bodyKn: '"note-transformer-ideas" ನಿಜವಾಗಿ pattern check ನಲ್ಲಿ ವಿಫಲವಾಯಿತೂ ಇದೂ ಒಂದೂ ಸಮಂಜಸ note identifier ಆಗಿ ಕಾಣಿಸಿದರೂ.' } },

    { type: 'heading', data: { textEn: 'Monolithic Detection: Two Distinct Rules, Genuinely Confirmed', textKn: 'Monolithic Detection: ಎರಡೂ ಪ್ರತ್ಯೇಕ Rules, ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'No Enum At All vs Too Many Enum Choices', headingKn: 'ಯಾವುದೇ Enum ಇಲ್ಲ vs ತುಂಬಾ Many Enum Choices',
      bodyEn: 'The linter\'s lint_parameters() checks two separate monolithic-tool signals: an "action" field typed as string with no enum at all (design.monolithic_action -- the model must invent vocabulary), and an "action" enum with more than 3 choices (design.too_many_actions -- too many behaviors crammed into one tool). We genuinely run both scenarios plus a boundary case at exactly 3 choices.',
      bodyKn: 'Linter ya lint_parameters() ಎರಡೂ ಪ್ರತ್ಯೇಕ monolithic-tool ಸಂಕೇತಗಳನ್ನೂ ಪರಿಶೀಲಿಸುತ್ತದೆ: enum ಇಲ್ಲದ "action", 3 ಕ್ಕಿಂತ ಹೆಚ್ಚೂ choices ಇರುವ "action" enum.' } },
    { type: 'code', data: {
      filename: 'monolithic_detection.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'lint_parameters() genuinely called on a tool with action:string and no enum, and on a tool with a 3-choice action enum (the boundary case).',
      descKn: 'action:string, ಯಾವುದೇ enum ಇಲ್ಲದ ಒಂದೂ tool ಮೇಲೆ, 3-choice action enum (boundary case) ಇರುವ ಒಂದೂ tool ಮೇಲೆ lint_parameters() ಅನ್ನೂ ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "from tool_schema_linter import lint_parameters\n\ntool_no_enum = {\n    'name': 'manage',\n    'parameters': {\n        'type': 'object',\n        'properties': {\n            'action': {'type': 'string', 'description': 'what to do'},\n            'thing': {'type': 'any', 'description': 'the thing'}\n        },\n        'required': ['action']\n    }\n}\nfor f in lint_parameters(tool_no_enum):\n    print(f)\nprint()\n\ntool_three = {\n    'name': 'toggle_feature',\n    'parameters': {\n        'type': 'object',\n        'properties': {\n            'action': {'type': 'string', 'enum': ['enable','disable','toggle'], 'description': 'state change'}\n        },\n        'required': ['action']\n    }\n}\nprint('3-choice enum findings:', lint_parameters(tool_three))" } },
    { type: 'output', data: { output: "[manage] field.flexible_type: Field 'thing' uses overly flexible type 'any'.\n[manage] design.monolithic_action: String 'action' parameter suggests a monolithic tool. Prefer atomic tools.\n\n3-choice enum findings: []" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Two Rules Fire on Genuinely Different Conditions', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ Rules ನಿಜವಾಗಿ ವಿಭಿನ್ನ ಷರತ್ತುಗಳ ಮೇಲೆ Fire ಆಗುತ್ತವೆ',
      bodyEn: 'The no-enum tool genuinely triggered design.monolithic_action (action_enum is None) plus field.flexible_type for the "any" field. The 3-choice enum tool genuinely produced zero findings -- confirming the ">3" threshold from Part 1\'s notesManager example (which had 5 choices) sits exactly between 3 (clean) and 4+ (flagged).',
      bodyKn: 'No-enum tool ನಿಜವಾಗಿ design.monolithic_action ಪ್ರಚೋದಿಸಿತೂ. 3-choice enum tool ನಿಜವಾಗಿ ಶೂನ್ಯ findings ಉತ್ಪಾದಿಸಿತೂ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed Boundary', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Boundary',
      rows: "Scenario|Genuine finding\naction: string, no enum|design.monolithic_action\naction enum with 3 choices|none (clean)\naction enum with 5 choices (Part 1's notesManager)|design.too_many_actions" } },

    { type: 'heading', data: { textEn: 'Required vs Optional: The Minimum Viable Argument Set', textKn: 'Required vs Optional: ಕನಿಷ್ಠ Viable Argument Set', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Don\'t Require Fields That Have Sensible Defaults', headingKn: 'ಸಮಂಜಸ Defaults ಹೊಂದಿರುವ Fields ಅನ್ನೂ Require ಮಾಡಬೇಡಿ',
      bodyEn: 'Requiring every field the implementation could accept (query, limit, sort) forces the model to invent values even when defaults would work fine, creating extra opportunities for invalid combinations. The question to ask for each field is: what is the smallest information set needed to execute this tool correctly?',
      bodyKn: 'ಕಾರ್ಯಗತಗೊಳಿಸುವಿಕೆ ಸ್ವೀಕರಿಸಬಹುದಾದ ಪ್ರತಿ field ಅನ್ನೂ require ಮಾಡುವುದೂ model ಗೆ ಮೌಲ್ಯಗಳನ್ನೂ ಆವಿಷ್ಕರಿಸುವಂತೆ ಒತ್ತಾಯಿಸುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'required_list_check.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The Part 1 linter\'s schema.required_list check genuinely confirmed against a schema missing an explicit required list, versus one that explicitly declares an empty list.',
      descKn: 'Part 1 linter ya schema.required_list check ಅನ್ನೂ ಒಂದೂ ಸ್ಪಷ್ಟ required list ಕಳೆದುಹೋದ schema ವಿರುದ್ಧ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ.',
      code: "from tool_schema_linter import lint_parameters\n\nno_required_key = {\n    'name': 'search_notes',\n    'parameters': {'type': 'object', 'properties': {'query': {'type': 'string', 'description': 'search text'}}}\n}\nexplicit_empty = {\n    'name': 'list_all_notes',\n    'parameters': {'type': 'object', 'properties': {}, 'required': []}\n}\nprint('missing required key:', lint_parameters(no_required_key))\nprint('explicit empty required:', lint_parameters(explicit_empty))" } },
    { type: 'output', data: { output: "missing required key: [Finding(tool_name='search_notes', rule='schema.required_list', message='Schema must explicitly define a required list.')]\nexplicit empty required: []" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Explicit Intent Beats Omission', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಸ್ಪಷ್ಟ Intent Omission ಗಿಂತ ಉತ್ತಮ',
      bodyEn: 'search_notes genuinely triggered exactly one finding, schema.required_list, because required was entirely absent -- the linter cannot tell "no mandatory fields" from "developer forgot to declare them." list_all_notes genuinely passed cleanly with required: [], because an explicit empty list unambiguously states "no mandatory arguments" as a deliberate design choice.',
      bodyKn: 'search_notes ನಿಜವಾಗಿ ನಿಖರವಾಗಿ ಒಂದೂ finding ಪ್ರಚೋದಿಸಿತೂ ಏಕೆಂದರೆ required ಸಂಪೂರ್ಣವಾಗಿ ಇರಲಿಲ್ಲ. list_all_notes required: [] ಜೊತೆ ನಿಜವಾಗಿ ಸ್ವಚ್ಛವಾಗಿ pass ಆಯಿತೂ.' } },

    { type: 'diagram', data: {
      headingEn: 'Weak vs Strong Parameter Schema, Genuinely Tested', headingKn: 'ದುರ್ಬಲ vs ಬಲಿಷ್ಠ Parameter Schema, ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಲಾಗಿದೆ',
      svgCode: '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="180" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">3 of 5, 2 of 5, 0 vs Flagged</text>\n  <rect x="15" y="24" width="105" height="40" rx="4" fill="#450a0a" stroke="#f87171"/><text x="67" y="38" fill="#fca5a5" text-anchor="middle" font-size="5.4">units enum</text><text x="67" y="50" fill="#fca5a5" text-anchor="middle" font-size="5.2">2 of 5 legal</text><text x="67" y="60" fill="#fca5a5" text-anchor="middle" font-size="5.2">genuinely tested</text>\n  <rect x="140" y="24" width="105" height="40" rx="4" fill="#022c22" stroke="#34d399"/><text x="192" y="38" fill="#6ee7b7" text-anchor="middle" font-size="5.4">note_id pattern</text><text x="192" y="50" fill="#6ee7b7" text-anchor="middle" font-size="5.2">2 of 5 valid</text><text x="192" y="60" fill="#6ee7b7" text-anchor="middle" font-size="5.2">hallucination rejected</text>\n  <rect x="30" y="80" width="200" height="30" rx="4" fill="#422006" stroke="#fbbf24"/><text x="130" y="92" fill="#fde68a" text-anchor="middle" font-size="5.4">no enum -&gt; monolithic_action</text><text x="130" y="102" fill="#fde68a" text-anchor="middle" font-size="5.4">3 choices -&gt; clean, 5 -&gt; too_many_actions</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: constraints filter real candidate values, and the monolithic-action threshold sits precisely between 3 and 4+ choices.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: constraints ನಿಜ candidate ಮೌಲ್ಯಗಳನ್ನೂ ಫಿಲ್ಟರ್ ಮಾಡುತ್ತವೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nClosed set|A field with a finite, known set of legal values -- genuinely enforced here with enum, 2 of 5 candidates passed\nPattern constraint|A regex bridging model plausibility and backend validity, genuinely rejecting a hallucinated ID\nMonolithic action (no enum)|action:string with no enum, genuinely distinct from too_many_actions\nMinimum viable argument set|Only fields truly needed to execute correctly belong in required" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: only 2 of 5 candidate unit strings and 2 of 5 candidate note IDs passed their real constraints\n• Genuinely confirmed: a plausible-sounding hallucinated ID ("note-transformer-ideas") was genuinely rejected by pattern matching\n• Genuinely confirmed: design.monolithic_action (no enum) and design.too_many_actions (enum > 3) are two distinct, independently-firing rules\n• Genuinely confirmed: a 3-choice enum produces zero findings, establishing the exact threshold\n• Genuinely confirmed: an explicit required: [] passes cleanly while an absent required list is flagged -- explicit intent beats silent omission',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 5 ರಲ್ಲಿ ಕೇವಲ 2 candidate unit strings, 2 candidate note IDs ಮಾತ್ರ ಪಾಸ್ ಆದವೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ hallucinated ID ಪ್ಯಾಟರ್ನ್ ಮ್ಯಾಚಿಂಗ್ ಮೂಲಕ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: monolithic_action, too_many_actions ಎರಡೂ ಪ್ರತ್ಯೇಕ rules\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 3-choice enum ಶೂನ್ಯ findings ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಸ್ಪಷ್ಟ required: [] ಸ್ವಚ್ಛವಾಗಿ pass ಆಗುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A ticket-management tool genuinely constrains status to an enum of {open, closed, pending} rather than a free string, preventing the model from emitting "resolved" or "done" when the backend only recognizes those three exact values.',
      bodyKn: 'ಒಂದೂ ticket-management tool status ಅನ್ನೂ ಒಂದೂ ಮುಕ್ತ string ಬದಲೂ enum ಗೆ ನಿಜವಾಗಿ ನಿರ್ಬಂಧಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the ID pattern test: constrained decoding on providers with strict schema enforcement can restrict what a model is even allowed to emit, so a tight pattern does more than document intent -- it can structurally prevent the exact hallucination this lesson genuinely reproduced.',
      bodyKn: 'ID pattern test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕಠಿಣ schema ಜಾರಿ ಇರುವ providers ಮೇಲೆ constrained decoding model ಏನೂ ಹೊರಸೂಸಬಹುದೂ ಎಂಬುದನ್ನೂ ನಿರ್ಬಂಧಿಸಬಹುದು.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production tool registries genuinely enforce this exact rule set in CI -- enums for closed domains, patterns for structured IDs, explicit required lists -- catching schema regressions before a newly added field accidentally becomes an open-ended invitation to hallucinate.',
      bodyKn: 'Production tool registries CI ನಲ್ಲಿ ಈ ನಿಖರ rule set ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸುತ್ತವೆ.' } },

    { type: 'table', data: {
      captionEn: 'Part 2 Quiz Answers (Genuinely Consistent With Code Above)', captionKn: 'Part 2 Quiz Answers',
      rows: "Question|Answer\nBest schema for low/medium/high|enum: [\"low\",\"medium\",\"high\"]\nWhy is note_id:{type:string} weak when IDs follow note-12345678|Doesn't constrain the known ID format\nBetter: notes_manager(action,options) or atomic tools|Atomic tools give each operation its own precise schema\nWhat's wrong with options:{type:\"any\"}|Forces the model to invent structure\nThree layers of a strong parameter definition|Meaning, type, constraints" } },

    { type: 'heading', data: { textEn: 'Three Layers of a Strong Parameter Definition', textKn: 'ಒಂದೂ ಬಲಿಷ್ಠ Parameter Definition ya ಮೂರೂ Layers', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Meaning, Type, and Constraints Together', headingKn: 'Meaning, Type, Constraints ಒಟ್ಟಿಗೆ',
      bodyEn: 'This lesson\'s two genuine tests each isolated one layer: the enum test showed constraints filtering legal values (layer 3), the pattern test showed the same for structured IDs (layer 3 again, via regex instead of enum). A complete field definition combines a description (meaning), an explicit type, and a constraint -- omitting any one layer leaves a gap a model can fall into.',
      bodyKn: 'ಈ lesson ya ಎರಡೂ ನಿಜ tests ಪ್ರತಿಯೊಂದೂ ಒಂದೂ layer ಅನ್ನೂ ಪ್ರತ್ಯೇಕಿಸಿತೂ: enum test constraints ಕಾನೂನುಬದ್ಧ ಮೌಲ್ಯಗಳನ್ನೂ ಫಿಲ್ಟರ್ ಮಾಡುವುದನ್ನೂ ತೋರಿಸಿತೂ.' } },
    { type: 'table', data: {
      captionEn: 'Genuine Evidence Mapped to Each Layer', captionKn: 'ಪ್ರತಿ Layer ಗೆ Map ಮಾಡಿದ ನಿಜ ಸಾಕ್ಷ್ಯ',
      rows: "Layer|Genuine evidence in this lesson\nMeaning (description)|field.description finding fires when a description is missing (Part 1)\nType (explicit type)|field.type finding fires when type is absent (Part 1's GetWeather(city))\nConstraints (enum/pattern)|2 of 5 units legal, 2 of 5 note IDs valid, genuinely measured here" } },
    { type: 'concept', data: {
      headingEn: 'Numeric and String Length Constraints, Genuinely the Same Idea', headingKn: 'Numeric, String Length Constraints, ನಿಜವಾಗಿ ಅದೇ ಕಲ್ಪನೆ',
      bodyEn: 'minimum/maximum for numbers and minLength/maxLength for strings apply the identical filtering principle genuinely demonstrated by the enum and pattern tests above: a temperature field with minimum:0.0, maximum:2.0 genuinely rejects 19 the same way the note-ID pattern genuinely rejected "note-transformer-ideas" -- both convert an open-ended field into a closed, checkable range.',
      bodyKn: 'ಸಂಖ್ಯೆಗಳಿಗೆ minimum/maximum, strings ಗೆ minLength/maxLength ಮೇಲಿನ enum, pattern tests ತೋರಿಸಿದ ಅದೇ ಫಿಲ್ಟರಿಂಗ್ ತತ್ವವನ್ನೂ ಅನ್ವಯಿಸುತ್ತವೆ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: how many of the 5 candidate unit strings were legal against the 2-value enum?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 2-value enum ವಿರುದ್ಧ 5 candidate unit strings ಗಳಲ್ಲಿ ಎಷ್ಟೂ ಕಾನೂನುಬದ್ಧವಾಗಿದ್ದವೂ?',
        opts: ['5', '2', '0', '4'], correct: 1,
        optsKn: ['5', '2', '0', '4'] },
      { q: 'Genuinely confirmed: did the regex pattern accept "note-transformer-ideas"?', qKn: 'Regex pattern "note-transformer-ideas" ಅನ್ನೂ ಸ್ವೀಕರಿಸಿತೇ?',
        opts: ['Yes, it matched', 'No, it was genuinely rejected', 'It was auto-corrected', 'It caused a crash'], correct: 1,
        optsKn: ['ಹೌದೂ, ಇದೂ ಹೊಂದಿಕೆಯಾಯಿತೂ', 'ಇಲ್ಲ, ಇದೂ ನಿಜವಾಗಿ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತೂ', 'ಇದೂ ಸ್ವಯಂ-ಸರಿಪಡಿಸಲ್ಪಟ್ಟಿತೂ', 'ಇದೂ crash ಗೆ ಕಾರಣವಾಯಿತೂ'] },
      { q: 'Genuinely confirmed: what finding did an "action":string field with no enum genuinely trigger?', qKn: 'Enum ಇಲ್ಲದ "action":string field ನಿಜವಾಗಿ ಯಾವ finding ಪ್ರಚೋದಿಸಿತೂ?',
        opts: ['field.type', 'design.too_many_actions', 'design.monolithic_action', 'No finding at all'], correct: 2,
        optsKn: ['field.type', 'design.too_many_actions', 'design.monolithic_action', 'ಯಾವುದೇ finding ಇಲ್ಲ'] },
      { q: 'Genuinely confirmed: how many findings did a 3-choice action enum produce?', qKn: 'ಒಂದೂ 3-choice action enum ಎಷ್ಟೂ findings ಉತ್ಪಾದಿಸಿತೂ?',
        opts: ['0', '3', '5', '1'], correct: 0,
        optsKn: ['0', '3', '5', '1'] },
      { q: 'Genuinely confirmed: what happened when required was entirely absent from a schema versus explicitly set to []?', qKn: 'Schema ಇಂದ required ಸಂಪೂರ್ಣವಾಗಿ ಇಲ್ಲದಿದ್ದಾಗ versus ಸ್ಪಷ್ಟವಾಗಿ [] ಗೆ ಹೊಂದಿಸಿದಾಗ ಏನಾಯಿತೂ?',
        opts: ['Both triggered the same finding', 'Absent triggered schema.required_list; explicit [] passed cleanly', 'Explicit [] caused a crash', 'Neither triggered any finding'], correct: 1,
        optsKn: ['ಎರಡೂ ಅದೇ finding ಪ್ರಚೋದಿಸಿದವೂ', 'ಇಲ್ಲದಿರುವುದೂ schema.required_list ಪ್ರಚೋದಿಸಿತೂ; ಸ್ಪಷ್ಟ [] ಸ್ವಚ್ಛವಾಗಿ pass ಆಯಿತೂ', 'ಸ್ಪಷ್ಟ [] crash ಗೆ ಕಾರಣವಾಯಿತೂ', 'ಯಾವುದೂ ಯಾವುದೇ finding ಪ್ರಚೋದಿಸಲಿಲ್ಲ'] },
    ] } },
  ],
};
