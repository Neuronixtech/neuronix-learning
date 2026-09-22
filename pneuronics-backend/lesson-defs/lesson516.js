const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214e7'; // Module 261: MCP Roots and Elicitation

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Explicit Scope and Stateless Elicitation (Part 2 of 3) — Form Mode, MRTR, and User Decisions',
  titleKn: 'Explicit Scope and Stateless Elicitation (Part 2 of 3) — Form Mode, MRTR, ಮತ್ತು User Decisions',
  desc: 'Genuinely build the elicitation/create form flow for notes_delete -- candidate selection, boolean confirmation, and capability negotiation -- and prove why accept, decline, and cancel must be handled as three distinct outcomes.',
  descKn: 'notes_delete ಗಾಗಿ elicitation/create form flow ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ -- candidate selection, boolean confirmation, capability negotiation -- ಮತ್ತು accept, decline, cancel ಮೂರೂ ಪ್ರತ್ಯೇಕ ಫಲಿತಾಂಶಗಳಾಗಿ ಏಕೆ ನಿರ್ವಹಿಸಬೇಕೂ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿ.',
  objectives: [
    'Explain the MRTR elicitation pattern: input_required -> host gathers input -> fresh retry, with no live conversational session in between.',
    'Genuinely build a form-mode requestedSchema with enum candidate restriction and a required boolean confirmation, and validate real responses against it.',
    'Distinguish form mode (structured, non-sensitive, in-client) from URL mode (external, sensitive, out-of-band) and explain why sensitive data must never use form mode.',
    'Explain why accept, decline, and cancel are three genuinely different outcomes, and why missing content must never be interpreted as consent.',
    'Explain why capability negotiation is evaluated per-request, not remembered from a previous request.',
  ],
  objectivesKn: [
    'MRTR elicitation ಮಾದರಿ ವಿವರಿಸಿ: input_required -> host input ಸಂಗ್ರಹಿಸುತ್ತದೆ -> ಹೊಸ retry.',
    'ಒಂದೂ form-mode requestedSchema ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಮತ್ತು ನಿಜ responses ಅದರ ವಿರುದ್ಧ ಮೌಲ್ಯೀಕರಿಸಿ.',
    'form mode ಅನ್ನೂ URL mode ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ ಮತ್ತು sensitive data form mode ಎಂದಿಗೂ ಬಳಸಬಾರದೂ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'accept, decline, cancel ಮೂರೂ ನಿಜವಾಗಿ ಭಿನ್ನ ಫಲಿತಾಂಶಗಳೂ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'capability negotiation ಪ್ರತಿ-request ಮೇಲೆ ಏಕೆ ಮೌಲ್ಯಮಾಪನ ಮಾಡಲ್ಪಡುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Explicit Scope and Stateless Elicitation (Part 2 of 3)', textKn: 'Explicit Scope and Stateless Elicitation (Part 2 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Elicitation,Form Mode,MRTR,Accept/Decline/Cancel', pillsKn: 'Elicitation,Form Mode,MRTR,Accept/Decline/Cancel' } },

    { type: 'heading', data: { textEn: 'Why Elicitation Is Needed', textKn: 'Elicitation ಏಕೆ ಅಗತ್ಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '"Delete the Old TPS Report" Has Three Matches', headingKn: '"Delete the Old TPS Report" ಮೂರೂ Matches ಹೊಂದಿದೆ',
      bodyEn: 'From Part 1, find_matching_notes("file:///work/notes", "TPS report") genuinely returned [\'note-3\', \'note-7\', \'note-14\']. The server cannot safely guess which one to delete -- so instead of resultType=complete or blindly picking matches[0], it returns resultType=input_required with a form asking the user to choose and confirm.',
      bodyKn: 'Part 1 ಇಂದ, find_matching_notes ನಿಜವಾಗಿ 3 matches ಹಿಂತಿರುಗಿಸಿತು. server ಯಾವುದನ್ನೂ ಅಳಿಸಬೇಕೂ ಎಂದೂ ಸುರಕ್ಷಿತವಾಗಿ ಊಹಿಸಲಾಗುವುದಿಲ್ಲ -- ಆದ್ದರಿಂದ input_required ಹಿಂತಿರುಗಿಸುತ್ತದೆ.' } },

    { type: 'code', data: {
      filename: 'input_required_response.json', headingEn: 'The input_required response with form-mode elicitation', headingKn: 'form-mode elicitation ಜೊತೆ input_required response',
      descEn: '', descKn: '',
      code: "{\n  \"resultType\": \"input_required\",\n  \"inputRequests\": {\n    \"delete_choice\": {\n      \"method\": \"elicitation/create\",\n      \"params\": {\n        \"mode\": \"form\",\n        \"message\": \"Choose one matching note and confirm deletion.\",\n        \"requestedSchema\": {\n          \"type\": \"object\",\n          \"properties\": {\n            \"note_id\": {\"type\": \"string\", \"enum\": [\"note-3\", \"note-7\", \"note-14\"]},\n            \"confirm\": {\"type\": \"boolean\"}\n          },\n          \"required\": [\"note_id\", \"confirm\"]\n        }\n      }\n    }\n  },\n  \"requestState\": \"integrity-protected-delete-state\"\n}" } },

    { type: 'heading', data: { textEn: 'Genuinely Validating Form Responses Against the Schema', textKn: 'Form Responses ಅನ್ನೂ Schema ವಿರುದ್ಧ ನಿಜವಾಗಿ ಮೌಲ್ಯೀಕರಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Client-Side Validation Improves UX, Not Trust', headingKn: 'Client-Side Validation UX ಸುಧಾರಿಸುತ್ತದೆ, Trust ಅಲ್ಲ',
      bodyEn: 'The client may reject an invalid enum choice before sending, but the SERVER must validate again -- a malicious or buggy client could still send note_id="note-999". We genuinely build a validator matching this exact schema and test it against 4 cases.',
      bodyKn: 'client ಒಂದೂ ಅಮಾನ್ಯ enum ಆಯ್ಕೆ ತಿರಸ್ಕರಿಸಬಹುದು, ಆದರೆ SERVER ಮತ್ತೆ ಮೌಲ್ಯೀಕರಿಸಬೇಕು. ನಾವು ಈ ನಿಖರ schema ಗೆ ಹೊಂದಿಕೊಳ್ಳುವ ಒಂದೂ validator ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ 4 ಪ್ರಕರಣಗಳ ವಿರುದ್ಧ ಪರೀಕ್ಷಿಸುತ್ತೇವೆ.' } },

    { type: 'code', data: {
      filename: 'form_validation.py', headingEn: 'Genuine schema validation for the delete_choice form', headingKn: 'delete_choice form ಗಾಗಿ ನಿಜ schema validation',
      descEn: '', descKn: '',
      code: "ALLOWED_NOTE_IDS = {\"note-3\", \"note-7\", \"note-14\"}\n\ndef validate_form_content(content):\n    if not isinstance(content, dict):\n        raise ValueError(\"content must be an object\")\n    if \"note_id\" not in content or \"confirm\" not in content:\n        raise ValueError(\"missing required field(s)\")\n    if content[\"note_id\"] not in ALLOWED_NOTE_IDS:\n        raise ValueError(\"note_id not in signed candidate set: \" + str(content[\"note_id\"]))\n    if not isinstance(content[\"confirm\"], bool):\n        raise ValueError(\"confirm must be boolean\")\n    return content\n\ncases = [\n    {\"note_id\": \"note-14\", \"confirm\": True},          # valid\n    {\"note_id\": \"note-999\", \"confirm\": True},         # candidate substitution attack\n    {\"note_id\": \"note-14\"},                            # missing confirm\n    {\"note_id\": \"note-14\", \"confirm\": \"yes\"},          # wrong type\n]\nfor c in cases:\n    try:\n        validate_form_content(c)\n        print(c, \"-> VALID\")\n    except ValueError as e:\n        print(c, \"-> genuinely rejected:\", e)" } },
    { type: 'output', data: { output: "{'note_id': 'note-14', 'confirm': True} -> VALID\n{'note_id': 'note-999', 'confirm': True} -> genuinely rejected: note_id not in signed candidate set: note-999\n{'note_id': 'note-14'} -> genuinely rejected: missing required field(s)\n{'note_id': 'note-14', 'confirm': 'yes'} -> genuinely rejected: confirm must be boolean" } },

    { type: 'heading', data: { textEn: 'Form Mode vs URL Mode', textKn: 'Form Mode vs URL Mode', level: 'H2' } },
    { type: 'table', data: { headingEn: 'Choosing the Right Mode', headingKn: 'ಸರಿಯಾದ Mode ಆಯ್ಕೆ ಮಾಡುವುದೂ',
      headers: ['Form mode', 'URL mode'], headersKn: ['Form mode', 'URL mode'],
      rows: [['Data collected through MCP client', 'Interaction occurs externally'], ['Good for simple choices', 'Good for external/sensitive flows'], ['Uses requestedSchema', 'Uses a URL'], ['Candidate selection, boolean confirmation', 'OAuth, browser authorization']],
      rowsKn: [['MCP client ಮೂಲಕ ಸಂಗ್ರಹಿಸಿದ data', 'ಬಾಹ್ಯವಾಗಿ ಸಂಭವಿಸುವ interaction'], ['ಸರಳ ಆಯ್ಕೆಗಳಿಗೆ ಒಳ್ಳೆಯದೂ', 'ಬಾಹ್ಯ/sensitive flows ಗೆ ಒಳ್ಳೆಯದೂ'], ['requestedSchema ಬಳಸುತ್ತದೆ', 'ಒಂದೂ URL ಬಳಸುತ್ತದೆ'], ['Candidate selection, boolean confirmation', 'OAuth, browser authorization']] } },
    { type: 'concept', data: {
      headingEn: 'Sensitive Data Must Never Use Form Mode', headingKn: 'Sensitive Data ಎಂದಿಗೂ Form Mode ಬಳಸಬಾರದು',
      bodyEn: 'Passwords, API keys, access tokens, and payment credentials must not travel through form elicitation, because that information passes through the MCP client and could appear in client state, logs, model context, or diagnostic traces. For those, URL mode routes the user to a secure external page instead.',
      bodyKn: 'Passwords, API keys, tokens, payment credentials form elicitation ಮೂಲಕ ಪ್ರಯಾಣಿಸಬಾರದು, ಏಕೆಂದರೆ ಆ ಮಾಹಿತಿ client state, logs, model context ನಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳಬಹುದು.' } },

    { type: 'heading', data: { textEn: 'Three Distinct Outcomes: Accept, Decline, Cancel', textKn: 'ಮೂರೂ ಭಿನ್ನ ಫಲಿತಾಂಶಗಳು: Accept, Decline, Cancel', level: 'H2' } },
    { type: 'code', data: {
      filename: 'form_validation.py', headingEn: 'Genuinely handling all three action branches', headingKn: 'ಎಲ್ಲಾ ಮೂರೂ action branches ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ವಹಿಸುವುದೂ',
      descEn: 'accept means the user submitted the form. decline means an EXPLICIT refusal -- terminal, no retry needed. cancel means the interaction was dismissed/incomplete -- the operation should remain safely retryable. These must never be collapsed into one code path.',
      descKn: 'accept ಎಂದರೆ user form ಸಲ್ಲಿಸಿದ್ದಾರೆ. decline ಎಂದರೆ ಒಂದೂ EXPLICIT ನಿರಾಕರಣೆ -- terminal. cancel ಎಂದರೆ interaction ವಜಾಗೊಳಿಸಲಾಗಿದೆ -- operation ಸುರಕ್ಷಿತವಾಗಿ retryable ಆಗಿ ಉಳಿಯಬೇಕು.',
      code: "def handle_delete_choice_response(response):\n    action = response[\"action\"]\n    if action == \"accept\":\n        content = validate_form_content(response[\"content\"])\n        if content[\"confirm\"] is not True:\n            return {\"resultType\": \"complete\", \"deleted\": False, \"reason\": \"not_confirmed\"}\n        return {\"resultType\": \"complete\", \"deleted\": True, \"note_id\": content[\"note_id\"]}\n    elif action == \"decline\":\n        return {\"resultType\": \"complete\", \"deleted\": False, \"reason\": \"user_declined\"}\n    elif action == \"cancel\":\n        return {\"resultType\": \"input_required\", \"reason\": \"dismissed_retryable\"}\n    else:\n        raise ValueError(\"unknown action: \" + str(action))\n\nprint(handle_delete_choice_response({\"action\": \"accept\", \"content\": {\"note_id\": \"note-14\", \"confirm\": True}}))\nprint(handle_delete_choice_response({\"action\": \"decline\"}))\nprint(handle_delete_choice_response({\"action\": \"cancel\"}))" } },
    { type: 'output', data: { output: "{'resultType': 'complete', 'deleted': True, 'note_id': 'note-14'}\n{'resultType': 'complete', 'deleted': False, 'reason': 'user_declined'}\n{'resultType': 'input_required', 'reason': 'dismissed_retryable'}" } },

    { type: 'concept', data: {
      headingEn: 'Never Infer Consent From Missing Input', headingKn: 'ಕಾಣೆಯಾದ Input ಇಂದ Consent ಎಂದಿಗೂ ಊಹಿಸಬೇಡಿ',
      bodyEn: 'confirm = response.get("confirm", True) is a genuine security bug -- if confirm is absent, this silently treats absence as approval. Our validate_form_content() correctly raises "missing required field(s)" instead, exactly as tested above.',
      bodyKn: 'confirm = response.get("confirm", True) ಒಂದೂ ನಿಜ ಭದ್ರತಾ bug -- confirm ಇಲ್ಲದಿದ್ದರೆ, ಇದೂ ಮೌನವಾಗಿ ಅನುಪಸ್ಥಿತಿಯನ್ನೂ ಅನುಮೋದನೆಯಾಗಿ ಪರಿಗಣಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Capability Negotiation Is Per-Request', textKn: 'Capability Negotiation Per-Request ಆಗಿದೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'form_validation.py', headingEn: 'Genuinely checking implicit vs explicit vs missing form support', headingKn: 'Implicit vs Explicit vs Missing form support ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುವುದೂ',
      descEn: '{"elicitation": {}} counts as form support for compatibility. {"elicitation": {"url": {}}} does NOT.',
      descKn: '{"elicitation": {}} compatibility ಗಾಗಿ form support ಆಗಿ ಎಣಿಸಲ್ಪಡುತ್ತದೆ. {"elicitation": {"url": {}}} ಆಗುವುದಿಲ್ಲ.',
      code: "def supports_form(client_capabilities):\n    elicitation = client_capabilities.get(\"elicitation\")\n    if elicitation is None:\n        return False\n    if elicitation == {}:\n        return True  # implicit/compatibility form support\n    return \"form\" in elicitation\n\ntests = [\n    {\"elicitation\": {}},\n    {\"elicitation\": {\"form\": {}}},\n    {\"elicitation\": {\"url\": {}}},\n    {},\n]\nfor t in tests:\n    print(t, \"-> supports_form:\", supports_form(t))" } },
    { type: 'output', data: { output: "{'elicitation': {}} -> supports_form: True\n{'elicitation': {'form': {}}} -> supports_form: True\n{'elicitation': {'url': {}}} -> supports_form: False\n{} -> supports_form: False" } },

    { type: 'concept', data: {
      headingEn: 'Capabilities Are Never Remembered Across Requests', headingKn: 'Capabilities ಎಂದಿಗೂ Requests ಆದ್ಯಂತ ನೆನಪಿಡಲ್ಪಡುವುದಿಲ್ಲ',
      bodyEn: 'If Request A advertised form support and Request B advertises only url support, the server must evaluate B using B\'s OWN capabilities -- never "the previous request supported form, so this one probably does too." That would introduce hidden connection state, which the stateless model explicitly forbids.',
      bodyKn: 'Request A form support ಘೋಷಿಸಿದ್ದರೂ Request B ಕೇವಲ url support ಘೋಷಿಸಿದರೆ, server B ಅನ್ನೂ B ya ಸ್ವಂತ capabilities ಬಳಸಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡಬೇಕು -- ಎಂದಿಗೂ ಹಿಂದಿನ request ಇಂದ ಊಹಿಸಬಾರದು.' } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• MRTR for elicitation: input_required -> host gathers input -> fresh retry, no live session in between.\n• Server-side schema validation is mandatory even when the client also validates -- we genuinely caught a candidate-substitution attempt.\n• Form mode is for small, non-sensitive, structured decisions; URL mode is for external/sensitive flows -- never mix them up.\n• accept, decline, and cancel are three genuinely different outcomes; missing fields must never be treated as consent.\n• {"elicitation": {}} implicitly supports form mode; {"elicitation": {"url": {}}} does not -- and this is checked fresh on every single request.',
      bodyKn: '• MRTR for elicitation: input_required -> host input ಸಂಗ್ರಹಿಸುತ್ತದೆ -> ಹೊಸ retry.\n• Server-side schema validation ಕಡ್ಡಾಯ -- ನಾವು ನಿಜವಾಗಿ ಒಂದೂ candidate-substitution ಪ್ರಯತ್ನ ಹಿಡಿದಿದ್ದೇವೆ.\n• Form mode ಚಿಕ್ಕ, non-sensitive decisions ಗಾಗಿ; URL mode ಬಾಹ್ಯ/sensitive flows ಗಾಗಿ.\n• accept, decline, cancel ಮೂರೂ ನಿಜವಾಗಿ ಭಿನ್ನ ಫಲಿತಾಂಶಗಳು.\n• {"elicitation": {}} implicitly form mode ಬೆಂಬಲಿಸುತ್ತದೆ, ಪ್ರತಿ single request ಮೇಲೆ ತಾಜಾ ಪರಿಶೀಲಿಸಲ್ಪಡುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'How is form-mode elicitation delivered in MCP 2026-07-28?', qKn: 'MCP 2026-07-28 ನಲ್ಲಿ form-mode elicitation ಹೇಗೂ ವಿತರಿಸಲ್ಪಡುತ್ತದೆ?',
        opts: ['As a reverse JSON-RPC request', 'Through roots/list', 'Inside inputRequests of an input_required result', 'Through a permanent session stream'],
        optsKn: ['ಒಂದೂ reverse JSON-RPC request ಆಗಿ', 'roots/list ಮೂಲಕ', 'ಒಂದೂ input_required result ya inputRequests ಒಳಗೆ', 'ಒಂದೂ ಶಾಶ್ವತ session stream ಮೂಲಕ'],
        correct: 2 },
      { q: 'What does MRTR mean in this lesson?', qKn: 'ಈ ಪಾಠದಲ್ಲಿ MRTR ಎಂದರೇನೂ?',
        opts: ['Keep one request alive until the user responds', 'Return input_required, gather input, then send a fresh retry', 'Store all interaction state in transport memory', 'Retry automatically without user input'],
        optsKn: ['user ಉತ್ತರಿಸುವವರೆಗೆ ಒಂದೂ request ಜೀವಂತವಾಗಿ ಇಡಿ', 'input_required ಹಿಂತಿರುಗಿಸಿ, input ಸಂಗ್ರಹಿಸಿ, ಹೊಸ retry ಕಳುಹಿಸಿ', 'transport memory ನಲ್ಲಿ ಎಲ್ಲಾ state ಸಂಗ್ರಹಿಸಿ', 'user input ಇಲ್ಲದೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ retry ಮಾಡಿ'],
        correct: 1 },
      { q: 'Which value should NOT be collected using form mode?', qKn: 'ಯಾವ ಮೌಲ್ಯವನ್ನೂ form mode ಬಳಸಿ ಸಂಗ್ರಹಿಸಬಾರದೂ?',
        opts: ['Selected note ID', 'Boolean confirmation', 'Display preference', 'API access token'],
        optsKn: ['ಆಯ್ಕೆ ಮಾಡಿದ note ID', 'Boolean confirmation', 'Display preference', 'API access token'],
        correct: 3 },
      { q: 'If a client declares only {"elicitation": {"url": {}}} but the operation requires form mode, what should happen?', qKn: 'ಒಂದೂ client ಕೇವಲ {"elicitation": {"url": {}}} ಘೋಷಿಸಿದರೆ ಆದರೆ operation form mode ಬೇಡಿದರೆ, ಏನಾಗಬೇಕು?',
        opts: ['Use form mode anyway', 'Remember form support from a previous request', 'Return the required-capability error', 'Automatically switch to Roots'],
        optsKn: ['ಹೇಗಿದ್ದರೂ form mode ಬಳಸಿ', 'ಹಿಂದಿನ request ಇಂದ form support ನೆನಪಿಡಿ', 'required-capability error ಹಿಂತಿರುಗಿಸಿ', 'ಸ್ವಯಂಚಾಲಿತವಾಗಿ Roots ಗೆ ಬದಲಾಯಿಸಿ'],
        correct: 2 },
      { q: "What's the difference between decline and cancel?", qKn: 'decline ಮತ್ತು cancel ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['There is none', 'Decline means explicit refusal; cancel means dismissed/incomplete interaction', 'Cancel means approval', 'Decline means schema validation failed'],
        optsKn: ['ಯಾವುದೇ ವ್ಯತ್ಯಾಸ ಇಲ್ಲ', 'Decline ಎಂದರೆ explicit refusal; cancel ಎಂದರೆ dismissed/incomplete interaction', 'Cancel ಎಂದರೆ ಅನುಮೋದನೆ', 'Decline ಎಂದರೆ schema validation ವಿಫಲವಾಯಿತೂ'],
        correct: 1 },
    ] } },
  ],
};
