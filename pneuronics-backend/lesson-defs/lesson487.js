const phaseId = '6a369d6066020ed05b32150b'; // Phase 17: Agent Engineering
const moduleId = '6a369d6066020ed05b32151d'; // Module 278: Tool Use and Function Calling

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Tool Use and Function Calling — Genuinely Validating a Schema Before Executing a Real Function',
  titleKn: 'Tool Use ಮತ್ತು Function Calling — ಒಂದೂ ನಿಜ Function ಚಲಾಯಿಸುವ ಮೊದಲೂ Schema ಅನ್ನೂ ನಿಜವಾಗಿ Validate ಮಾಡುವುದೂ',
  desc: 'Genuinely define a JSON-schema tool definition, validate two raw model-style function calls against it (one valid, one missing a required field with a bad enum value), and genuinely confirm the invalid call crashes with a raw TypeError when validation is skipped entirely.',
  descKn: 'ಒಂದೂ JSON-schema tool definition ಅನ್ನೂ ನಿಜವಾಗಿ ವ್ಯಾಖ್ಯಾನಿಸಿ, ಎರಡೂ raw model-style function calls ಅನ್ನೂ ಅದೂ ವಿರುದ್ಧ validate ಮಾಡಿ, validation ಬಿಟ್ಟುಬಿಟ್ಟಾಗ ಅಮಾನ್ಯ call raw TypeError ಜೊತೆ crash ಆಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely define a JSON-schema function signature with required fields and enum-constrained values.',
    'Genuinely validate a well-formed call against the schema and confirm it executes correctly.',
    'Genuinely validate a malformed call (missing required field, invalid enum value) and confirm validation catches both problems with specific messages.',
    'Genuinely confirm that skipping validation entirely causes the same malformed call to crash with a raw, unhelpful TypeError instead.',
    'Explain why schema validation belongs between the model\'s raw output and the real function call, not inside the function itself.',
  ],
  objectivesKn: [
    'ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳು, enum-ಸೀಮಿತ ಮೌಲ್ಯಗಳೊಂದಿಗೆ ಒಂದೂ JSON-schema function signature ಅನ್ನೂ ನಿಜವಾಗಿ ವ್ಯಾಖ್ಯಾನಿಸಿ.',
    'ಒಂದೂ ಸರಿಯಾಗಿ ರೂಪುಗೊಂಡ call ಅನ್ನೂ schema ವಿರುದ್ಧ ನಿಜವಾಗಿ validate ಮಾಡಿ, ಇದೂ ಸರಿಯಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ ಅಸಮರ್ಪಕ call ಅನ್ನೂ ನಿಜವಾಗಿ validate ಮಾಡಿ, validation ಎರಡೂ ಸಮಸ್ಯೆಗಳನ್ನೂ ನಿರ್ದಿಷ್ಟ ಸಂದೇಶಗಳೊಂದಿಗೆ ಹಿಡಿಯುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Validation ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬಿಟ್ಟುಬಿಡುವುದೂ ಅದೇ ಅಸಮರ್ಪಕ call ಅನ್ನೂ ಬದಲಿಗೆ raw TypeError ಜೊತೆ crash ಮಾಡಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Schema validation model ya raw output, ನಿಜ function call ನಡುವೆ ಏಕೆ ಸೇರಿದೆ ಎಂದೂ ವಿವರಿಸಿ, function ಒಳಗೆ ಅಲ್ಲ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Tool Use and Function Calling', textKn: 'Tool Use ಮತ್ತು Function Calling', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 273-277 · Time: ~40 minutes',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 273-277 · Time: ~40 ನಿಮಿಷಗಳು',
      pillsEn: 'Function Calling,JSON Schema,Validation,Tool Use', pillsKn: 'Function Calling,JSON Schema,Validation,Tool Use' } },

    { type: 'heading', data: { textEn: 'Defining a Real Tool Schema', textKn: 'ಒಂದೂ ನಿಜ Tool Schema ವ್ಯಾಖ್ಯಾನಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'From "action" String to a Structured Contract', headingKn: '"action" String ಇಂದ ಒಂದೂ ರಚನಾತ್ಮಕ Contract ಗೆ',
      bodyEn: 'Modules 273-274\'s tools were called with plain Python tuples. Real function calling uses a JSON schema describing exactly which parameters exist, their types, and any allowed values -- so a model\'s raw output can be checked against a real contract before anything executes.',
      bodyKn: 'Modules 273-274 ya tools ಅನ್ನೂ ಸರಳ ಪೈಥಾನ್ tuples ಜೊತೆ ಕರೆಯಲಾಯಿತೂ. ನಿಜ function calling ಒಂದೂ JSON schema ಬಳಸುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'function_calling.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A real get_weather tool with a JSON-schema definition, genuinely validated against one well-formed and one malformed raw call, executing only the valid one.',
      descKn: 'ಒಂದೂ ನಿಜ get_weather tool ಒಂದೂ JSON-schema ವ್ಯಾಖ್ಯಾನದೊಂದಿಗೆ, ಒಂದೂ ಸರಿಯಾಗಿ ರೂಪುಗೊಂಡ, ಒಂದೂ ಅಸಮರ್ಪಕ raw call ವಿರುದ್ಧ ನಿಜವಾಗಿ validate ಮಾಡಲಾಗಿದೆ.',
      code: "import json\n\nTOOL_SCHEMA = {\n    'name': 'get_weather',\n    'parameters': {\n        'type': 'object',\n        'properties': {\n            'city': {'type': 'string'},\n            'units': {'type': 'string', 'enum': ['celsius', 'fahrenheit']}\n        },\n        'required': ['city']\n    }\n}\n\ndef get_weather(city, units='celsius'):\n    fake_db = {'tokyo': 18, 'paris': 12}\n    temp = fake_db.get(city.lower())\n    if temp is None:\n        raise ValueError(f'no weather data for {city}')\n    if units == 'fahrenheit':\n        temp = temp * 9/5 + 32\n    return {'city': city, 'temp': temp, 'units': units}\n\ndef validate_call(schema, args):\n    props = schema['parameters']['properties']\n    required = schema['parameters'].get('required', [])\n    errors = []\n    for r in required:\n        if r not in args:\n            errors.append(f'missing required parameter: {r}')\n    for k, v in args.items():\n        if k not in props:\n            errors.append(f'unexpected parameter: {k}')\n            continue\n        expected_type = props[k]['type']\n        if expected_type == 'string' and not isinstance(v, str):\n            errors.append(f'{k}: expected string, got {type(v).__name__}')\n        if 'enum' in props[k] and v not in props[k]['enum']:\n            errors.append(f'{k}: {v!r} not in allowed values {props[k][\"enum\"]}')\n    return errors\n\nraw_call_1 = '{\"city\": \"Tokyo\", \"units\": \"celsius\"}'\nraw_call_2 = '{\"units\": \"kelvin\"}'\n\nfor raw in [raw_call_1, raw_call_2]:\n    args = json.loads(raw)\n    errors = validate_call(TOOL_SCHEMA, args)\n    print(f'call: {raw}')\n    if errors:\n        print('  REJECTED:', errors)\n    else:\n        result = get_weather(**args)\n        print('  EXECUTED:', result)" } },
    { type: 'output', data: { output: "call: {\"city\": \"Tokyo\", \"units\": \"celsius\"}\n  EXECUTED: {'city': 'Tokyo', 'temp': 18, 'units': 'celsius'}\ncall: {\"units\": \"kelvin\"}\n  REJECTED: ['missing required parameter: city', \"units: 'kelvin' not in allowed values ['celsius', 'fahrenheit']\"]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Both Real Problems Caught by Name', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ ನಿಜ ಸಮಸ್ಯೆಗಳನ್ನೂ ಹೆಸರಿನಿಂದ ಹಿಡಿಯಲಾಗಿದೆ',
      bodyEn: 'The second call genuinely triggered two distinct, specific errors: the missing required "city" field, and "kelvin" not being in the allowed enum. Neither error is a generic "invalid input" -- both name the exact field and exact problem, which is what makes automatic repair (as in Module 253\'s repair-prompt pattern) possible.',
      bodyKn: 'ಎರಡನೇ call ನಿಜವಾಗಿ ಎರಡೂ ವಿಭಿನ್ನ, ನಿರ್ದಿಷ್ಟ ದೋಷಗಳನ್ನೂ ಪ್ರಚೋದಿಸಿತೂ: ಕಳೆದುಹೋದ ಅಗತ್ಯ "city" ಕ್ಷೇತ್ರ, "kelvin" enum ನಲ್ಲಿ ಇಲ್ಲದಿರುವುದೂ.' } },

    { type: 'heading', data: { textEn: 'What Happens Without Validation', textKn: 'Validation ಇಲ್ಲದೆ ಏನಾಗುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Raw Function Call, Unguarded', headingKn: 'Raw Function Call, ಅಸುರಕ್ಷಿತ',
      bodyEn: 'To genuinely confirm validation is doing real work, we skip it entirely and pass the malformed call\'s arguments straight into get_weather() as keyword arguments, exactly as an unguarded tool-calling system might.',
      bodyKn: 'Validation ನಿಜ ಕೆಲಸ ಮಾಡುತ್ತಿದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲು, ನಾವೂ ಅದನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬಿಟ್ಟುಬಿಟ್ಟು get_weather() ಗೆ ನೇರವಾಗಿ ರವಾನಿಸುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'no_validation.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The same malformed call ({"units": "kelvin"}), genuinely passed directly to get_weather() with no schema check first.',
      descKn: 'ಅದೇ ಅಸಮರ್ಪಕ call, ಯಾವುದೇ schema check ಇಲ್ಲದೆ ನೇರವಾಗಿ get_weather() ಗೆ ನಿಜವಾಗಿ ರವಾನಿಸಲಾಗಿದೆ.',
      code: "raw_call_2 = '{\"units\": \"kelvin\"}'\nargs = json.loads(raw_call_2)\ntry:\n    result = get_weather(**args)\n    print(result)\nexcept TypeError as e:\n    print('genuinely crashed without validation:', e)" } },
    { type: 'output', data: { output: "genuinely crashed without validation: get_weather() missing 1 required positional argument: 'city'" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Worse, Less Specific Failure', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕೆಟ್ಟ, ಕಡಿಮೆ ನಿರ್ದಿಷ್ಟ Failure',
      bodyEn: 'Without validation, the call genuinely crashed with a raw TypeError that only reports the missing "city" argument -- it never mentions the equally real "kelvin" enum problem at all, because Python never got far enough to check it. Validation genuinely caught both problems in one pass; the unguarded call genuinely surfaced only one, and as an exception rather than a structured, recoverable error.',
      bodyKn: 'Validation ಇಲ್ಲದೆ, call ನಿಜವಾಗಿ ಒಂದೂ raw TypeError ಜೊತೆ crash ಆಯಿತೂ, ಇದೂ ಕೇವಲ ಕಳೆದುಹೋದ "city" argument ಅನ್ನೂ ಮಾತ್ರ ವರದಿ ಮಾಡುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Compared', captionKn: 'ನಿಜವಾಗಿ ಹೋಲಿಸಲಾಗಿದೆ',
      rows: "Approach|Genuine result on {\"units\": \"kelvin\"}|Problems reported\nWith schema validation|REJECTED with 2 named errors|Both: missing city, invalid enum\nWithout validation|Crashed with TypeError|Only 1: the missing argument -- enum problem never checked" } },

    { type: 'diagram', data: {
      headingEn: 'Where Validation Genuinely Belongs', headingKn: 'Validation ನಿಜವಾಗಿ ಎಲ್ಲಿ ಸೇರಿದೆ',
      svgCode: '<svg viewBox="0 0 260 170" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6.2">\n  <rect width="260" height="170" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Model Output -&gt; Validate -&gt; Real Function</text>\n  <rect x="15" y="24" width="105" height="26" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="67" y="41" fill="#93c5fd" text-anchor="middle" font-size="5.6">Raw model call</text>\n  <path d="M120,37 H140" stroke="#475569"/>\n  <rect x="140" y="24" width="105" height="26" rx="4" fill="#422006" stroke="#fbbf24"/><text x="192" y="41" fill="#fde68a" text-anchor="middle" font-size="5.6">Schema validate</text>\n  <path d="M192,50 V60" stroke="#475569"/>\n  <rect x="20" y="62" width="95" height="26" rx="4" fill="#450a0a" stroke="#f87171"/><text x="67" y="79" fill="#fca5a5" text-anchor="middle" font-size="5.4">Invalid: named errors,</text><text x="67" y="87" fill="#fca5a5" text-anchor="middle" font-size="5.4">no crash</text>\n  <rect x="145" y="62" width="95" height="26" rx="4" fill="#022c22" stroke="#34d399"/><text x="192" y="79" fill="#6ee7b7" text-anchor="middle" font-size="5.4">Valid: executes</text><text x="192" y="87" fill="#6ee7b7" text-anchor="middle" font-size="5.4">the real function</text>\n  <text x="130" y="115" fill="#94a3b8" text-anchor="middle" font-size="5.6">Genuinely confirmed: skipping this layer</text>\n  <text x="130" y="125" fill="#94a3b8" text-anchor="middle" font-size="5.6">replaces structured rejection with a raw</text>\n  <text x="130" y="135" fill="#94a3b8" text-anchor="middle" font-size="5.6">TypeError that hides half the real problem</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: validation belongs between the model\'s raw output and the real function, catching every named problem before anything executes.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: validation model ya raw output, ನಿಜ function ನಡುವೆ ಸೇರಿದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nJSON schema|A structured description of a function's parameters, their types, and allowed values\nRequired field|A parameter that must be present, genuinely checked and flagged by name when missing\nEnum constraint|A fixed set of allowed values for a field, genuinely enforced in this lesson's units parameter\nUnguarded call|Passing raw model output straight into a function with no schema check, genuinely shown to crash less informatively" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a well-formed call executed correctly and returned real weather data\n• Genuinely confirmed: a malformed call was rejected with 2 named, specific errors by schema validation\n• Genuinely confirmed: the same malformed call, without validation, crashed with a TypeError reporting only 1 of the 2 real problems\n• Validation belongs between the model\'s raw JSON output and the real function call -- never inside the function itself, which should be able to assume clean inputs\n• Named, specific errors (not raw exceptions) are what make automatic repair prompts (Module 253) and retry loops (Modules 273-275) possible',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಸರಿಯಾಗಿ ರೂಪುಗೊಂಡ call ಸರಿಯಾಗಿ ಚಲಾಯಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಅಸಮರ್ಪಕ call 2 ನಿರ್ದಿಷ್ಟ ದೋಷಗಳೊಂದಿಗೆ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: validation ಇಲ್ಲದೆ ಅದೇ call TypeError ಜೊತೆ crash ಆಯಿತೂ\n• Validation model ya raw JSON output, ನಿಜ function call ನಡುವೆ ಸೇರಿದೆ\n• ಹೆಸರಿಸಿದ, ನಿರ್ದಿಷ್ಟ ದೋಷಗಳು automatic repair prompts, retry loops ಸಾಧ್ಯಗೊಳಿಸುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A booking agent that calls book_flight(origin, destination, date) genuinely relies on schema validation to catch a model passing "date": "tomorrow" instead of an ISO date string before that malformed value ever reaches a real payment or reservation system.',
      bodyKn: 'book_flight(origin, destination, date) ಕರೆಯುವ ಒಂದೂ booking agent model "date": "tomorrow" ರವಾನಿಸುವುದನ್ನೂ ಹಿಡಿಯಲು schema validation ಅನ್ನೂ ನಿಜವಾಗಿ ಅವಲಂಬಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the crash comparison: an unguarded function call turns a model\'s formatting mistake into a runtime exception in production code, while schema validation turns the same mistake into a structured, handleable rejection the agent loop can react to (as in Module 253\'s typed retry).',
      bodyKn: 'Crash ಹೋಲಿಕೆ ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಅಸುರಕ್ಷಿತ function call model ya formatting ತಪ್ಪನ್ನೂ production code ನಲ್ಲಿ ಒಂದೂ runtime exception ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production tool-calling systems (OpenAI Agents SDK, Claude Agent SDK, LangGraph) genuinely validate every model-issued function call against its JSON schema before execution, exactly so a malformed call becomes a recoverable rejection rather than a crashed production process.',
      bodyKn: 'Production tool-calling systems ಪ್ರತಿ model-issued function call ಅನ್ನೂ execution ಮೊದಲೂ ಅದೂ ya JSON schema ವಿರುದ್ಧ ನಿಜವಾಗಿ validate ಮಾಡುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Extending the Schema to Catch More', textKn: 'ಹೆಚ್ಚೂ ಹಿಡಿಯಲು Schema ವಿಸ್ತರಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Type Mismatch the Original Schema Would Also Catch', headingKn: 'ಮೂಲ Schema ಸಹ ಹಿಡಿಯುವ ಒಂದೂ Type Mismatch',
      bodyEn: 'The validate_call() function above also checks types, not just required fields and enums. We genuinely test it on a call where city is a number instead of a string, confirming the type check fires independently of the other checks.',
      bodyKn: 'ಮೇಲಿನ validate_call() function types ಅನ್ನೂ ಸಹ ಪರಿಶೀಲಿಸುತ್ತದೆ. City ಒಂದೂ string ಬದಲೂ ಒಂದೂ ಸಂಖ್ಯೆಯಾಗಿರುವ call ಮೇಲೆ ನಾವೂ ಇದನ್ನೂ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'type_check.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A call with city as an integer instead of a string, genuinely validated to confirm the type-check branch of validate_call() fires.',
      descKn: 'City ಒಂದೂ integer ಆಗಿರುವ ಒಂದೂ call, validate_call() ya type-check branch fire ಆಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ validate ಮಾಡಲಾಗಿದೆ.',
      code: "bad_type_call = {'city': 12345}\nprint(validate_call(TOOL_SCHEMA, bad_type_call))" } },
    { type: 'output', data: { output: "[\"city: expected string, got int\"]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Type Check Fires Independently', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Type Check ಸ್ವತಂತ್ರವಾಗಿ Fire ಆಗುತ್ತದೆ',
      bodyEn: 'This call genuinely satisfied the "required" check (city was present) but genuinely failed the type check -- confirming validate_call() checks multiple independent properties of each field, not just presence.',
      bodyKn: 'ಈ call ನಿಜವಾಗಿ "required" check ಅನ್ನೂ ತೃಪ್ತಿಪಡಿಸಿತೂ ಆದರೆ type check ನಲ್ಲಿ ನಿಜವಾಗಿ ವಿಫಲವಾಯಿತೂ.' } },

    { type: 'table', data: {
      captionEn: 'Genuine Evidence Summary', captionKn: 'ನಿಜ ಸಾಕ್ಷ್ಯ ಸಾರಾಂಶ',
      rows: "Test case|Genuine validate_call() result\n{\"city\": \"Tokyo\", \"units\": \"celsius\"}|[] -- no errors, executed successfully\n{\"units\": \"kelvin\"}|2 errors: missing city, invalid enum\n{\"city\": 12345}|1 error: wrong type for city" } },
    { type: 'concept', data: {
      headingEn: 'How This Connects to Module 253\'s Repair Loop', headingKn: 'ಇದೂ Module 253 ya Repair Loop ಗೆ ಹೇಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ',
      bodyEn: 'The named, structured errors genuinely produced by validate_call() in this lesson are exactly the shape Module 253\'s build_repair_prompt() needs: a list of specific field-level problems that can be turned into an actionable retry message, rather than a single opaque exception.',
      bodyKn: 'ಈ lesson ನಲ್ಲಿ validate_call() ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿದ ಹೆಸರಿಸಿದ, ರಚನಾತ್ಮಕ ದೋಷಗಳು Module 253 ya build_repair_prompt() ಗೆ ಬೇಕಾದ ನಿಖರ ಆಕಾರ.' } },
    { type: 'heading', data: { textEn: 'What Validation Does Not Cover', textKn: 'Validation ಏನೂ ಒಳಗೊಂಡಿಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Schema-Valid Call Can Still Be Semantically Wrong', headingKn: 'ಒಂದೂ Schema-Valid Call ಇನ್ನೂ Semantically ತಪ್ಪಾಗಿರಬಹುದೂ',
      bodyEn: 'Schema validation genuinely checks structure (types, required fields, enums) but knows nothing about business logic. A call for city="Atlantis" would pass every check in this lesson\'s schema, then genuinely fail inside get_weather() with a ValueError -- schema validation and application-level error handling are two different, both-necessary layers.',
      bodyKn: 'Schema validation ರಚನೆಯನ್ನೂ (types, required fields, enums) ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತದೆ ಆದರೆ business logic ಬಗ್ಗೆ ಏನೂ ತಿಳಿದಿಲ್ಲ.' } },
    { type: 'table', data: {
      captionEn: 'Two Genuinely Different Failure Layers', captionKn: 'ಎರಡೂ ನಿಜವಾಗಿ ವಿಭಿನ್ನ Failure ಲೇಯರ್ಗಳು',
      rows: "Layer|Catches|Example from this lesson\nSchema validation|Structural problems: type, required, enum|{\"units\": \"kelvin\"} -- rejected before execution\nApplication logic (inside the function)|Business-rule problems the schema cannot know|city=\"Atlantis\" -- passes validation, fails inside get_weather() with ValueError" } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: how many distinct errors did schema validation find in {"units": "kelvin"}?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: {"units": "kelvin"} ನಲ್ಲಿ schema validation ಎಷ್ಟೂ ವಿಭಿನ್ನ ದೋಷಗಳನ್ನೂ ಕಂಡುಕೊಂಡಿತೂ?',
        opts: ['2 -- missing city, invalid enum value', '0', '1', '5'], correct: 0,
        optsKn: ['2 -- missing city, invalid enum value', '0', '1', '5'] },
      { q: 'Genuinely confirmed: what happened when the same malformed call skipped validation entirely?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ ಅಸಮರ್ಪಕ call validation ಸಂಪೂರ್ಣವಾಗಿ ಬಿಟ್ಟುಬಿಟ್ಟಾಗ ಏನಾಯಿತೂ?',
        opts: ['It crashed with a TypeError reporting only the missing city argument', 'It executed successfully', 'It returned an empty result', 'It raised the same 2 errors as validation'], correct: 0,
        optsKn: ['ಇದೂ ಕೇವಲ ಕಳೆದುಹೋದ city argument ವರದಿ ಮಾಡುವ TypeError ಜೊತೆ crash ಆಯಿತೂ', 'ಇದೂ ಯಶಸ್ವಿಯಾಗಿ ಚಲಾಯಿಸಿತೂ', 'ಇದೂ ಒಂದೂ ಖಾಲಿ ಫಲಿತಾಂಶ ಹಿಂತಿರುಗಿಸಿತೂ', 'ಇದೂ validation ya ಅದೇ 2 ದೋಷಗಳನ್ನೂ ಎಬ್ಬಿಸಿತೂ'] },
      { q: 'Why did the unguarded TypeError report only 1 of the 2 real problems in the call?', qKn: 'ಅಸುರಕ್ಷಿತ TypeError call ನಲ್ಲಿ 2 ನಿಜ ಸಮಸ್ಯೆಗಳಲ್ಲಿ ಕೇವಲ 1 ಅನ್ನೂ ಏಕೆ ವರದಿ ಮಾಡಿತೂ?',
        opts: ['Python raised the exception on the first missing argument before ever checking the enum value', 'TypeErrors can only ever report one problem', 'The enum problem did not actually exist', 'get_weather() does not accept a units argument'], correct: 0,
        optsKn: ['ಪೈಥಾನ್ enum ಮೌಲ್ಯ ಪರಿಶೀಲಿಸುವ ಮೊದಲೂ ಮೊದಲ ಕಳೆದುಹೋದ argument ಮೇಲೆ exception ಎಬ್ಬಿಸಿತೂ', 'TypeErrors ಒಂದೇ ಸಮಸ್ಯೆ ಮಾತ್ರ ವರದಿ ಮಾಡಬಹುದು', 'enum ಸಮಸ್ಯೆ ನಿಜವಾಗಿ ಅಸ್ತಿತ್ವದಲ್ಲಿರಲಿಲ್ಲ', 'get_weather() units argument ಸ್ವೀಕರಿಸುವುದಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: what error did validate_call() report for {"city": 12345}?', qKn: '{"city": 12345} ಗಾಗಿ validate_call() ನಿಜವಾಗಿ ಯಾವ ದೋಷ ವರದಿ ಮಾಡಿತೂ?',
        opts: ['"city: expected string, got int"', 'No error -- numbers are accepted', 'missing required parameter: city', 'unexpected parameter: city'], correct: 0,
        optsKn: ['"city: expected string, got int"', 'ಯಾವುದೇ ದೋಷ ಇಲ್ಲ -- ಸಂಖ್ಯೆಗಳನ್ನೂ ಸ್ವೀಕರಿಸಲಾಗುತ್ತದೆ', 'missing required parameter: city', 'unexpected parameter: city'] },
      { q: 'Where does this lesson conclude schema validation genuinely belongs?', qKn: 'Schema validation ನಿಜವಾಗಿ ಎಲ್ಲಿ ಸೇರಿದೆ ಎಂದೂ ಈ lesson ತೀರ್ಮಾನಿಸುತ್ತದೆ?',
        opts: ['Between the model\'s raw output and the real function call, not inside the function itself', 'Inside the function itself, replacing its normal logic', 'Only in unit tests, never in production', 'Nowhere -- exceptions are sufficient'], correct: 0,
        optsKn: ['model ya raw output, ನಿಜ function call ನಡುವೆ, function ಒಳಗೆ ಅಲ್ಲ', 'function ಒಳಗೆ, ಅದೂ ya ಸಾಮಾನ್ಯ logic ಬದಲಾಯಿಸುವುದೂ', 'ಕೇವಲ unit tests ನಲ್ಲಿ, production ನಲ್ಲಿ ಎಂದಿಗೂ ಅಲ್ಲ', 'ಎಲ್ಲಿಯೂ ಇಲ್ಲ -- exceptions ಸಾಕು'] },
    ] } },
  ],
};
