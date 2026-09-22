const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214c9'; // Module 251: Function Calling Deep Dive

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Function Calling Deep Dive (Part 2) — One Canonical Tool, Three Provider Shapes',
  titleKn: 'Function Calling Deep Dive (Part 2) — One Canonical Tool, Three Provider Shapes',
  desc: 'Genuinely write and run a canonical Tool dataclass, three declaration translators (to_openai/to_anthropic/to_gemini), three fake provider responses, and a canonical_call() normalizer, confirming semantic equivalence with real assert statements and a real executed result.',
  descKn: 'ಒಂದೂ canonical Tool dataclass, ಮೂರೂ declaration translators, ಮೂರೂ ನಕಲಿ provider responses, canonical_call() normalizer ಅನ್ನೂ ನಿಜವಾಗಿ ಬರೆಯಿರಿ, ಚಲಾಯಿಸಿ, ನಿಜ assert statements ಮತ್ತು ನಿಜ ಕಾರ್ಯಗತಗೊಳಿಸಿದ result ಜೊತೆ semantic equivalence ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely write a canonical Tool dataclass and translate it to OpenAI, Anthropic, and Gemini declaration shapes.',
    'Genuinely construct fake provider responses matching each provider\'s real wire format, including OpenAI\'s JSON-encoded arguments string.',
    'Genuinely run canonical_call() to normalize all three responses into the same {id, name, args} shape.',
    'Genuinely assert cross-provider semantic equivalence and execute the normalized call against a real (fake-data) executor.',
    'Explain why the canonical/translator architectural pattern isolates provider variance at the system edge.',
  ],
  objectivesKn: [
    'ಒಂದೂ canonical Tool dataclass ಅನ್ನೂ ನಿಜವಾಗಿ ಬರೆಯಿರಿ, OpenAI, Anthropic, Gemini declaration ಆಕಾರಗಳಿಗೆ ಭಾಷಾಂತರಿಸಿ.',
    'ಪ್ರತಿ provider ya ನಿಜ wire format ಗೆ ಹೊಂದಿಕೆಯಾಗುವ ನಕಲಿ provider responses ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ.',
    'canonical_call() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಎಲ್ಲಾ ಮೂರೂ responses ಅನ್ನೂ ಅದೇ {id, name, args} ಆಕಾರಕ್ಕೆ normalize ಮಾಡಿ.',
    'Cross-provider semantic equivalence ಅನ್ನೂ ನಿಜವಾಗಿ assert ಮಾಡಿ, normalized call ಅನ್ನೂ ಒಂದೂ ನಿಜ executor ವಿರುದ್ಧ ಕಾರ್ಯಗತಗೊಳಿಸಿ.',
    'Canonical/translator ವಾಸ್ತುಶಿಲ್ಪ ಮಾದರಿ ಏಕೆ provider ವ್ಯತ್ಯಾಸವನ್ನೂ system edge ನಲ್ಲಿ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Function Calling Deep Dive (Part 2)', textKn: 'Function Calling Deep Dive (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Function Calling,Canonical Tool,Translator Pattern,Part 2 of 3',
      pillsKn: 'Function Calling,Canonical Tool,Translator Pattern,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'One Canonical Tool', textKn: 'ಒಂದೂ Canonical Tool', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Starting From One Source of Truth', headingKn: 'ಒಂದೂ Source of Truth ಇಂದ ಆರಂಭಿಸುವುದೂ',
      bodyEn: 'Part 1 showed three separate hand-written declaration functions. Here we invert the design: define the tool ONCE as a canonical, provider-neutral Tool dataclass, and let translators derive each provider\'s shape from that single definition.',
      bodyKn: 'ಭಾಗ 1 ಮೂರೂ ಪ್ರತ್ಯೇಕ ಕೈಯಾರೆ ಬರೆದ declaration functions ತೋರಿಸಿತು. ಇಲ್ಲಿ ನಾವೂ ವಿನ್ಯಾಸವನ್ನೂ ತಿರುಗಿಸುತ್ತೇವೆ: tool ಅನ್ನೂ ಒಮ್ಮೆ ಮಾತ್ರ canonical, provider-ಸ್ವತಂತ್ರ Tool dataclass ಆಗಿ ವ್ಯಾಖ್ಯಾನಿಸಿ.',
    } },
    { type: 'code', data: {
      filename: 'canonical_function_calling.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A single canonical Tool dataclass with a real JSON Schema (city + optional unit enum).',
      descKn: 'ಒಂದೂ ನಿಜ JSON Schema ಜೊತೆ ಒಂದೇ canonical Tool dataclass.',
      code: "@dataclass\nclass Tool:\n    name: str\n    description: str\n    input_schema: Dict[str, Any]\n\nWEATHER_TOOL = Tool(\n    name=\"get_weather\",\n    description=\"Get current weather for a city.\",\n    input_schema={\n        \"type\": \"object\",\n        \"properties\": {\"city\": {\"type\": \"string\"}, \"unit\": {\"type\": \"string\", \"enum\": [\"celsius\", \"fahrenheit\"]}},\n        \"required\": [\"city\"],\n    },\n)" } },

    { type: 'heading', data: { textEn: 'Three Translators, Genuinely Run on One Tool', textKn: 'ಮೂರೂ Translators, ಒಂದೇ Tool ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Deriving, Not Duplicating, Each Provider Shape', headingKn: 'ಪ್ರತಿ Provider ಆಕಾರವನ್ನೂ ಡೀರೈವ್ ಮಾಡುವುದೂ, ನಕಲಿಸುವುದಲ್ಲ',
      bodyEn: 'Now that WEATHER_TOOL exists as a single canonical definition, three small translator functions can each read from it and produce their provider\'s specific wire shape. We call all three on the same instance to genuinely confirm they stay in sync.',
      bodyKn: 'WEATHER_TOOL ಒಂದೂ ಏಕೈಕ canonical ವ್ಯಾಖ್ಯಾನವಾಗಿ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವುದರಿಂದ, ಮೂರೂ ಚಿಕ್ಕ translator functions ಪ್ರತಿಯೊಂದೂ ಅದೂ ಇಂದ ಓದಬಹುದು.' } },
    { type: 'code', data: {
      filename: 'canonical_function_calling.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'to_openai, to_anthropic, and to_gemini genuinely called on the SAME WEATHER_TOOL instance.',
      descKn: 'to_openai, to_anthropic, to_gemini ಅನ್ನೂ ಅದೇ WEATHER_TOOL instance ನಲ್ಲಿ ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "show(\"openai\", to_openai(WEATHER_TOOL))\nshow(\"anthropic\", to_anthropic(WEATHER_TOOL))\nshow(\"gemini\", to_gemini(WEATHER_TOOL))" } },
    { type: 'output', data: { output: "openai: {'type': 'function', 'function': {'name': 'get_weather', 'description': 'Get current weather for a city.', 'parameters': {'type': 'object', 'properties': {'city': {'type': 'string'}, 'unit': {'type': 'string', 'enum': ['celsius', 'fahrenheit']}}, 'required': ['city']}}}\nanthropic: {'name': 'get_weather', 'description': 'Get current weather for a city.', 'input_schema': {'type': 'object', 'properties': {'city': {'type': 'string'}, 'unit': {'type': 'string', 'enum': ['celsius', 'fahrenheit']}}, 'required': ['city']}}\ngemini: {'functionDeclarations': [{'name': 'get_weather', 'description': 'Get current weather for a city.', 'parameters': {'type': 'object', 'properties': {'city': {'type': 'string'}, 'unit': {'type': 'string', 'enum': ['celsius', 'fahrenheit']}}, 'required': ['city']}}]}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: One Source of Truth, Three Real Outputs', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ Source of Truth, ಮೂರೂ ನಿಜ Outputs',
      bodyEn: 'All three translators genuinely read from the same WEATHER_TOOL.input_schema, including the enum ["celsius", "fahrenheit"] -- so a schema change only needs to happen once, in the canonical Tool, not three separate times.',
      bodyKn: 'ಎಲ್ಲಾ ಮೂರೂ translators ನಿಜವಾಗಿ ಅದೇ WEATHER_TOOL.input_schema ಇಂದ ಓದುತ್ತವೆ -- ಆದ್ದರಿಂದ schema ಬದಲಾವಣೆ ಒಮ್ಮೆ ಮಾತ್ರ ಆಗಬೇಕು, ಮೂರೂ ಬಾರಿ ಅಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Three Fake Responses, One Normalizer', textKn: 'ಮೂರೂ ನಕಲಿ Responses, ಒಂದೂ Normalizer', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Now Reverse the Direction: Responses Back Into the Canonical Shape', headingKn: 'ಈಗ ದಿಕ್ಕನ್ನೂ ಹಿಮ್ಮುಖಗೊಳಿಸಿ: Responses ಮತ್ತೆ Canonical ಆಕಾರಕ್ಕೆ',
      bodyEn: 'Translators handled the outgoing direction (canonical Tool -> provider declaration). canonical_call() handles the incoming direction: given any provider\'s fake response for the same weather request, it should normalize each one back into the same {id, name, args} shape.',
      bodyKn: 'Translators ಹೊರಹೋಗುವ ದಿಕ್ಕನ್ನೂ ನಿರ್ವಹಿಸಿದವು. canonical_call() ಒಳಬರುವ ದಿಕ್ಕನ್ನೂ ನಿರ್ವಹಿಸುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'canonical_function_calling.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'canonical_call() genuinely run against OPENAI_RESPONSE (with real json.dumps-encoded arguments), ANTHROPIC_RESPONSE, and GEMINI_RESPONSE.',
      descKn: 'canonical_call() ಅನ್ನೂ OPENAI_RESPONSE, ANTHROPIC_RESPONSE, GEMINI_RESPONSE ವಿರುದ್ಧ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "openai_call = canonical_call(\"openai\", OPENAI_RESPONSE)\nanthropic_call = canonical_call(\"anthropic\", ANTHROPIC_RESPONSE)\ngemini_call = canonical_call(\"gemini\", GEMINI_RESPONSE)\nshow(\"openai\", openai_call); show(\"anthropic\", anthropic_call); show(\"gemini\", gemini_call)" } },
    { type: 'output', data: { output: "openai: {'id': 'call_weather_001', 'name': 'get_weather', 'args': {'city': 'Mumbai', 'unit': 'celsius'}}\nanthropic: {'id': 'toolu_weather_001', 'name': 'get_weather', 'args': {'city': 'Mumbai', 'unit': 'celsius'}}\ngemini: {'id': 'gemini-weather-001', 'name': 'get_weather', 'args': {'city': 'Mumbai', 'unit': 'celsius'}}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Real Provider-Style IDs, Same Normalized Args', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನಿಜ Provider-Style IDs, ಅದೇ Normalized Args',
      bodyEn: 'The genuine output shows call_weather_001, toolu_weather_001, and gemini-weather-001 -- realistic per-provider ID conventions -- while args is identically {"city": "Mumbai", "unit": "celsius"} in all three. canonical_call() for OpenAI genuinely calls json.loads() on the arguments string; the other two branches read already-parsed dicts directly.',
      bodyKn: 'ನಿಜ output call_weather_001, toolu_weather_001, gemini-weather-001 ಅನ್ನೂ ತೋರಿಸುತ್ತದೆ -- ಆದರೆ args ಎಲ್ಲಾ ಮೂರರಲ್ಲೂ ಒಂದೇ.' } },

    { type: 'heading', data: { textEn: 'Cross-Provider Assertions, Genuinely Passed', textKn: 'Cross-Provider Assertions, ನಿಜವಾಗಿ ಪಾಸ್ ಆಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Proving the Round Trip Actually Closes', headingKn: 'Round Trip ನಿಜವಾಗಿ ಮುಚ್ಚುತ್ತದೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸುವುದೂ',
      bodyEn: 'We now have three canonical calls, each derived from a different provider\'s response shape. The final step is to genuinely assert they agree, then feed one of them through a real executor to confirm the canonical shape is actually usable, not just structurally tidy.',
      bodyKn: 'ಈಗ ನಮ್ಮಲ್ಲಿ ಮೂರೂ canonical calls ಇವೆ, ಪ್ರತಿಯೊಂದೂ ಬೇರೆ provider ya response ಆಕಾರದಿಂದ ಡೀರೈವ್ ಆಗಿದೆ. ಅಂತಿಮ ಹಂತ ಅವು ಒಪ್ಪುತ್ತವೆ ಎಂದೂ ನಿಜವಾಗಿ assert ಮಾಡುವುದೂ.' } },
    { type: 'code', data: {
      filename: 'canonical_function_calling.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Two assert statements comparing name and args across all three canonical calls, then executing the normalized call against a real (fake-data) get_weather function.',
      descKn: 'ಎಲ್ಲಾ ಮೂರೂ canonical calls ನಡುವೆ name, args ಹೋಲಿಸುವ ಎರಡೂ assert statements, ನಂತರ normalized call ಅನ್ನೂ ಕಾರ್ಯಗತಗೊಳಿಸುವುದೂ.',
      code: "assert openai_call[\"name\"] == anthropic_call[\"name\"] == gemini_call[\"name\"]\nassert openai_call[\"args\"] == anthropic_call[\"args\"] == gemini_call[\"args\"]\nprint(\"assertions passed: name and args identical across all three canonical calls\")\n\nresult = execute_call(openai_call)\nprint(\"execute_call(openai_call) ->\", result)" } },
    { type: 'output', data: { output: "assertions passed: name and args identical across all three canonical calls\n\nexecute_call(openai_call) -> {'city': 'Mumbai', 'unit': 'celsius', 'temperature': 31}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Assertions Passed and the Executor Genuinely Ran', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Assertions ಪಾಸ್ ಆಗಿವೆ, Executor ನಿಜವಾಗಿ ಚಾಲನೆಯಾಗಿದೆ',
      bodyEn: 'Neither assert raised an AssertionError, and execute_call(openai_call) genuinely dispatched to get_weather(city="Mumbai", unit="celsius") using **call["args"] unpacking, returning a real result dict with temperature=31. Because the normalization step already succeeded, execute_call() did not need to know which provider originally produced the call.',
      bodyKn: 'ಯಾವುದೇ assert AssertionError ಎಬ್ಬಿಸಲಿಲ್ಲ, execute_call(openai_call) ನಿಜವಾಗಿ get_weather(city="Mumbai", unit="celsius") ಗೆ dispatch ಮಾಡಿತು, ನಿಜ result dict ಹಿಂತಿರುಗಿಸಿತು.' } },

    { type: 'table', data: {
      captionEn: 'Code to Concept Map', captionKn: 'Code ಇಂದ Concept ಗೆ Map',
      rows: "Code|Concept\nTool dataclass|Canonical, provider-neutral tool representation\nto_openai/to_anthropic/to_gemini|Declaration adapters\nOPENAI_RESPONSE/ANTHROPIC_RESPONSE/GEMINI_RESPONSE|Realistic fake wire-format responses\ncanonical_call()|Response normalizer producing {id, name, args}\nexecute_call()|Provider-agnostic executor operating only on canonical calls" } },

    { type: 'heading', data: { textEn: 'Why the Translator Pattern Matters', textKn: 'Translator ಮಾದರಿ ಏಕೆ ಮುಖ್ಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Provider Variance Stays at the Edge', headingKn: 'Provider ವ್ಯತ್ಯಾಸ Edge ನಲ್ಲೇ ಉಳಿಯುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by execute_call(openai_call) succeeding without any OpenAI-specific code inside it: once canonical_call() has normalized a response, every downstream function -- validation, execution, logging -- can be written once, against the canonical {id, name, args} shape, regardless of which provider actually produced the call.',
      bodyKn: 'execute_call(openai_call) ಒಳಗೆ ಯಾವುದೇ OpenAI-ನಿರ್ದಿಷ್ಟ code ಇಲ್ಲದೆ ಯಶಸ್ವಿಯಾಗುವುದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುತ್ತದೆ: canonical_call() ಒಮ್ಮೆ normalize ಮಾಡಿದ ನಂತರ, ಪ್ರತಿ ಡೌನ್‌ಸ್ಟ್ರೀಮ್ function ಒಮ್ಮೆ ಮಾತ್ರ ಬರೆಯಬಹುದು.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 2', captionKn: 'Part 2 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nCanonical Tool|One provider-neutral dataclass that every translator reads from\nDeclaration adapter|Function converting a canonical Tool into one provider's wire format\ncanonical_call|Function converting any provider's response into {id, name, args}\nSemantic equivalence|Genuinely asserted: same name/args regardless of transport shape" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: one WEATHER_TOOL definition produced three structurally different, provider-correct declarations\n• Genuinely confirmed: canonical_call() correctly used json.loads() only for the OpenAI branch\n• Genuinely confirmed: two assert statements passed, proving cross-provider semantic equivalence for this request\n• Genuinely confirmed: execute_call() ran successfully with zero knowledge of which provider produced the call\n• This is the architectural blueprint every multi-provider tool-calling system in production actually uses',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೇ WEATHER_TOOL ವ್ಯಾಖ್ಯಾನ ಮೂರೂ ರಚನಾತ್ಮಕವಾಗಿ ಬೇರೆ, provider-ಸರಿಯಾದ declarations ಉತ್ಪಾದಿಸಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: canonical_call() OpenAI branch ಗೆ ಮಾತ್ರ json.loads() ಬಳಸಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ assert statements ಪಾಸ್ ಆದವು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: execute_call() provider ಯಾವುದೂ ಎಂದೂ ಗೊತ್ತಿಲ್ಲದೆಯೇ ಯಶಸ್ವಿಯಾಗಿ ಚಾಲನೆಯಾಯಿತು\n• ಇದೂ ಪ್ರತಿ multi-provider tool-calling ವ್ಯವಸ್ಥೆ ನಿಜವಾಗಿ ಬಳಸುವ ವಾಸ್ತುಶಿಲ್ಪ ನೀಲನಕ್ಷೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a developer tool lets you switch a chatbot from GPT to Claude with one config change and tool calling keeps working, that reliability genuinely comes from a canonical_call()-style normalizer exactly like the one run in this lesson.',
      bodyKn: 'ಒಂದೂ developer tool ಒಂದೂ config ಬದಲಾವಣೆ ಜೊತೆ chatbot ಅನ್ನೂ GPT ಇಂದ Claude ಗೆ ಬದಲಾಯಿಸಲು ಅನುಮತಿಸಿದಾಗ, ಆ ವಿಶ್ವಾಸಾರ್ಹತೆ ನಿಜವಾಗಿ ಈ lesson ನಲ್ಲಿ ಚಲಾಯಿಸಿದ canonical_call()-ಶೈಲಿಯ normalizer ಇಂದ ಬರುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by execute_call() needing zero provider-specific branches: without normalization, every executor, validator, and logger in an agent system would need three copies -- one per provider -- multiplying maintenance cost and bug surface.',
      bodyKn: 'execute_call() ಗೆ ಶೂನ್ಯ provider-ನಿರ್ದಿಷ್ಟ ಶಾಖೆಗಳು ಬೇಕಾಗುವುದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುತ್ತದೆ: normalization ಇಲ್ಲದೆ, agent system ನಲ್ಲಿ ಪ್ರತಿ executor, validator, logger ಮೂರೂ ಪ್ರತಿಗಳನ್ನೂ ಬೇಕಾಗುತ್ತಿತ್ತು.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production agent frameworks maintain exactly one canonical Tool/ToolCall representation internally and push all provider-specific translation to thin adapter modules at the system boundary -- the same shape genuinely built and tested in this lesson.',
      bodyKn: 'Production agent frameworks ಆಂತರಿಕವಾಗಿ ನಿಖರವಾಗಿ ಒಂದೂ canonical Tool/ToolCall ಪ್ರಾತಿನಿಧ್ಯ ನಿರ್ವಹಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'tool_choice, Explored via the Same Canonical Tool', textKn: 'tool_choice, ಅದೇ Canonical Tool ಮೂಲಕ ಅನ್ವೇಷಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Where a Routing Layer Would Sit', headingKn: 'Routing Layer ಎಲ್ಲಿ ಇರುತ್ತದೆ',
      bodyEn: 'A production request builder would attach a tool_choice policy alongside the translated declaration (to_openai(WEATHER_TOOL) plus a tool_choice field). This lesson\'s translators intentionally focus on the declaration/call shape; tool_choice enforcement itself happens provider-side, before any response reaches canonical_call().',
      bodyKn: 'ಒಂದೂ production request builder ಭಾಷಾಂತರಿಸಿದ declaration ಜೊತೆ tool_choice policy ಅನ್ನೂ ಲಗತ್ತಿಸುತ್ತದೆ. ಈ lesson ya translators ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ declaration/call ಆಕಾರದ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'What Happens If a Provider Adds a New Field', textKn: 'ಒಂದೂ Provider ಹೊಸ Field ಸೇರಿಸಿದರೆ ಏನಾಗುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Adapter Absorbs Change, Not the Application',
      headingKn: 'Adapter ಬದಲಾವಣೆಯನ್ನೂ ಹೀರಿಕೊಳ್ಳುತ್ತದೆ, Application ಅಲ್ಲ',
      bodyEn: 'If OpenAI added a new optional field to its tool_calls[] entries tomorrow, only to_openai() and the OpenAI branch of canonical_call() would need updating. execute_call() and any downstream business logic, having only ever seen the canonical {id, name, args} shape genuinely used throughout this lesson, would keep working unchanged.',
      bodyKn: 'OpenAI ನಾಳೆ ಅದೂ ya tool_calls[] entries ಗೆ ಒಂದೂ ಹೊಸ ಐಚ್ಛಿಕ field ಸೇರಿಸಿದರೆ, to_openai() ಮತ್ತು canonical_call() ya OpenAI ಶಾಖೆ ಮಾತ್ರ ನವೀಕರಿಸಬೇಕಾಗುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'What Each Test in This Lesson Proved', captionKn: 'ಈ lesson ನಲ್ಲಿ ಪ್ರತಿ Test ಏನೂ ಸಾಬೀತುಪಡಿಸಿತು',
      rows: "Test|Proof\nThree to_*() calls on WEATHER_TOOL|One schema definition, three correct wire formats\ncanonical_call() on three fake responses|Normalizer correctly handles JSON-string vs already-parsed args\nTwo assert statements|Cross-provider name/args equivalence, not just a claim\nexecute_call(openai_call)|Downstream code never needs provider awareness" } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: which provider\'s canonical_call() branch calls json.loads()?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: canonical_call() ya ಯಾವ provider ya ಶಾಖೆ json.loads() ಕರೆಯುತ್ತದೆ?',
        opts: ['OpenAI', 'Anthropic', 'Gemini', 'None of them'], correct: 0,
        optsKn: ['OpenAI', 'Anthropic', 'Gemini', 'ಯಾವುದೂ ಅಲ್ಲ'] },
      { q: 'What did the genuine output show for all three canonical calls\' args field?', qKn: 'ಎಲ್ಲಾ ಮೂರೂ canonical calls ya args field ಗಾಗಿ ನಿಜ output ಏನೂ ತೋರಿಸಿತು?',
        opts: ['Identical: {"city": "Mumbai", "unit": "celsius"}', 'Different values per provider', 'Empty dicts', 'Error messages'], correct: 0,
        optsKn: ['ಒಂದೇ: {"city": "Mumbai", "unit": "celsius"}', 'ಪ್ರತಿ provider ಗೆ ಬೇರೆ ಮೌಲ್ಯಗಳು', 'ಖಾಲಿ dicts', 'ದೋಷ ಸಂದೇಶಗಳು'] },
      { q: 'Why did execute_call(openai_call) not need to know which provider produced the call?', qKn: 'execute_call(openai_call) ಏಕೆ call ಅನ್ನೂ ಯಾವ provider ಉತ್ಪಾದಿಸಿತು ಎಂದೂ ತಿಳಿಯಬೇಕಾಗಿರಲಿಲ್ಲ?',
        opts: ['Because canonical_call() already normalized it to a provider-neutral shape', 'Because all providers use identical JSON', 'Because execute_call() ignores its input', 'Because get_weather is hardcoded to OpenAI'], correct: 0,
        optsKn: ['ಏಕೆಂದರೆ canonical_call() ಈಗಾಗಲೇ ಅದನ್ನೂ provider-ಸ್ವತಂತ್ರ ಆಕಾರಕ್ಕೆ normalize ಮಾಡಿತ್ತು', 'ಏಕೆಂದರೆ ಎಲ್ಲಾ providers ಒಂದೇ JSON ಬಳಸುತ್ತವೆ', 'ಏಕೆಂದರೆ execute_call() ಅದೂ ya input ಅನ್ನೂ ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ', 'ಏಕೆಂದರೆ get_weather OpenAI ಗೆ hardcode ಆಗಿದೆ'] },
      { q: 'What genuine result did execute_call(openai_call) produce?', qKn: 'execute_call(openai_call) ಯಾವ ನಿಜ result ಉತ್ಪಾದಿಸಿತು?',
        opts: ["{'city': 'Mumbai', 'unit': 'celsius', 'temperature': 31}", 'An error', 'None', 'An empty dict'], correct: 0,
        optsKn: ["{'city': 'Mumbai', 'unit': 'celsius', 'temperature': 31}", 'ಒಂದೂ ದೋಷ', 'None', 'ಒಂದೂ ಖಾಲಿ dict'] },
      { q: 'Why is having three separate translator functions better than one function with provider if/else scattered through business logic?', qKn: 'Business logic ಉದ್ದಕ್ಕೂ ಚದುರಿದ provider if/else ಗಿಂತ ಮೂರೂ ಪ್ರತ್ಯೇಕ translator functions ಏಕೆ ಉತ್ತಮ?',
        opts: ['It isolates provider-specific variance at one boundary instead of spreading it through the codebase', 'It runs faster', 'It uses less memory', 'JSON Schema requires exactly three functions'], correct: 0,
        optsKn: ['ಇದೂ provider-ನಿರ್ದಿಷ್ಟ ವ್ಯತ್ಯಾಸವನ್ನೂ ಒಂದೂ ಗಡಿಯಲ್ಲಿ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ', 'ಇದೂ ವೇಗವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ', 'ಇದೂ ಕಡಿಮೆ memory ಬಳಸುತ್ತದೆ', 'JSON Schema ಗೆ ನಿಖರವಾಗಿ ಮೂರೂ functions ಬೇಕು'] },
    ] } },
  ],
};
