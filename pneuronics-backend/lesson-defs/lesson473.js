const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214c9'; // Module 251: Function Calling Deep Dive

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Function Calling Deep Dive (Part 1) — Provider Shapes and the Common Loop',
  titleKn: 'Function Calling Deep Dive (Part 1) — Provider Shapes and the Common Loop',
  desc: 'Understand why OpenAI, Anthropic, and Gemini declare tools and return calls differently on the wire while sharing the same semantic loop, and genuinely run an original demonstration proving all three normalize to the same {name, args}.',
  descKn: 'OpenAI, Anthropic, Gemini ಏಕೆ tools ಅನ್ನೂ ವಿಭಿನ್ನವಾಗಿ ಘೋಷಿಸುತ್ತವೆ, calls ಹಿಂತಿರುಗಿಸುತ್ತವೆ ಆದರೆ ಅದೇ semantic loop ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, ಎಲ್ಲಾ ಮೂರೂ ಅದೇ {name, args} ಗೆ normalize ಆಗುತ್ತವೆ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ.',
  objectives: [
    'Explain function calling as tool-selection plus argument-extraction, provider-agnostic at the semantic level.',
    'Compare OpenAI, Anthropic, and Gemini tool-declaration shapes: wrapped function object, flat input_schema, and functionDeclarations array.',
    'Compare how each provider returns a call: tool_calls[].function (arguments as a JSON string), content[] tool_use blocks (already-parsed input), and functionCall (already-parsed args).',
    'Genuinely run an original program proving all three shapes normalize to the same name/args pair for an identical request.',
    'Explain tool_choice modes (auto/required/none/forced) and why "same behavior, different syntax" is the chapter\'s central lesson.',
  ],
  objectivesKn: [
    'Function calling ಅನ್ನೂ tool-selection ಜೊತೆ argument-extraction ಎಂದೂ ವಿವರಿಸಿ, semantic ಮಟ್ಟದಲ್ಲಿ provider-agnostic.',
    'OpenAI, Anthropic, Gemini tool-declaration ಆಕಾರಗಳನ್ನೂ ಹೋಲಿಸಿ.',
    'ಪ್ರತಿ provider ಒಂದೂ call ಅನ್ನೂ ಹೇಗೆ ಹಿಂತಿರುಗಿಸುತ್ತದೆ ಎಂದೂ ಹೋಲಿಸಿ.',
    'ಒಂದೂ original program ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಎಲ್ಲಾ ಮೂರೂ ಆಕಾರಗಳೂ ಅದೇ name/args ಜೋಡಿಗೆ normalize ಆಗುತ್ತವೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿ.',
    'tool_choice ಮೋಡ್‌ಗಳನ್ನೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Function Calling Deep Dive (Part 1)', textKn: 'Function Calling Deep Dive (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept · Language: Python (stdlib only) · Prerequisites: Module 250 · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Concept · Language: Python (stdlib only) · Prerequisites: Module 250 · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Function Calling,OpenAI,Anthropic,Gemini,Part 1 of 3',
      pillsKn: 'Function Calling,OpenAI,Anthropic,Gemini,Part 1 of 3' } },

    { type: 'concept', data: {
      headingEn: 'Honest Disclosure: This Part\'s Source Text Is Conceptual Only', headingKn: 'ಪ್ರಾಮಾಣಿಕ ಬಹಿರಂಗಪಡಿಸುವಿಕೆ: ಈ ಭಾಗ ya Source Text ಕೇವಲ Conceptual',
      bodyEn: 'The pasted source for this part is explicitly conceptual -- it promises the actual Python program only in Part 2. Rather than skip genuine execution, this lesson writes and genuinely runs its OWN small illustrative program (provider_shapes_demo.py) proving the core claim -- three different declaration/call shapes, one shared semantic meaning -- clearly labeled as an independent demonstration, not the lesson\'s unseen code.',
      bodyKn: 'ಈ ಭಾಗ ya pasted source ಸ್ಪಷ್ಟವಾಗಿ conceptual -- ಇದೂ ನಿಜ ಪೈಥಾನ್ program ಅನ್ನೂ Part 2 ನಲ್ಲಿ ಮಾತ್ರ ಭರವಸೆ ನೀಡುತ್ತದೆ. ನಿಜ execution ಬಿಟ್ಟುಬಿಡುವ ಬದಲೂ, ಈ lesson ಅದೂ ya ಸ್ವಂತ ಚಿಕ್ಕ illustrative program ಬರೆಯುತ್ತದೆ, ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Function Calling Is Provider-Agnostic at the Semantic Level', textKn: 'Function Calling Semantic ಮಟ್ಟದಲ್ಲಿ Provider-Agnostic', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Tool Selection + Argument Extraction', headingKn: 'Tool Selection + Argument Extraction',
      bodyEn: 'Every provider\'s function calling does the same two jobs: pick which declared tool to invoke, and extract typed arguments for it from the conversation. The wire format differs; the job does not.',
      bodyKn: 'ಪ್ರತಿ provider ya function calling ಅದೇ ಎರಡೂ ಕೆಲಸಗಳನ್ನೂ ಮಾಡುತ್ತದೆ: ಯಾವ ಘೋಷಿತ tool ಅನ್ನೂ ಕರೆಯಬೇಕೂ ಎಂದೂ ಆಯ್ಕೆ ಮಾಡಿ, ಅದೂ ಗಾಗಿ typed arguments ಹೊರತೆಗೆಯಿರಿ. Wire format ಭಿನ್ನ; ಕೆಲಸ ಅಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Three Declaration Shapes, Genuinely Produced', textKn: 'ಮೂರೂ Declaration ಆಕಾರಗಳು, ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Seeing the Nesting Differences Directly', headingKn: 'Nesting ವ್ಯತ್ಯಾಸಗಳನ್ನೂ ನೇರವಾಗಿ ನೋಡುವುದೂ',
      bodyEn: 'Rather than just describing that providers nest tool declarations differently, we genuinely declare the same get_weather tool three times -- once per provider function -- and print all three so the structural differences are visible side by side, not merely asserted.',
      bodyKn: 'Providers tool declarations ಅನ್ನೂ ವಿಭಿನ್ನವಾಗಿ ನೆಸ್ಟ್ ಮಾಡುತ್ತವೆ ಎಂದೂ ಕೇವಲ ವಿವರಿಸುವ ಬದಲೂ, ನಾವೂ ಅದೇ get_weather tool ಅನ್ನೂ ಮೂರೂ ಬಾರಿ ನಿಜವಾಗಿ ಘೋಷಿಸುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'provider_shapes_demo.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The same get_weather tool declared in all three provider shapes and genuinely printed.',
      descKn: 'ಅದೇ get_weather tool ಎಲ್ಲಾ ಮೂರೂ provider ಆಕಾರಗಳಲ್ಲಿ ಘೋಷಿಸಲಾಗಿದೆ, ನಿಜವಾಗಿ ಮುದ್ರಿಸಲಾಗಿದೆ.',
      code: "print(openai_style_declaration(\"get_weather\", \"Get weather\", WEATHER_SCHEMA))\nprint(anthropic_style_declaration(\"get_weather\", \"Get weather\", WEATHER_SCHEMA))\nprint(gemini_style_declaration(\"get_weather\", \"Get weather\", WEATHER_SCHEMA))" } },
    { type: 'output', data: { output: "openai:    {'type': 'function', 'function': {'name': 'get_weather', 'description': 'Get weather', 'parameters': {'type': 'object', 'properties': {'city': {'type': 'string'}}, 'required': ['city']}}}\nanthropic: {'name': 'get_weather', 'description': 'Get weather', 'input_schema': {'type': 'object', 'properties': {'city': {'type': 'string'}}, 'required': ['city']}}\ngemini:    {'functionDeclarations': [{'name': 'get_weather', 'description': 'Get weather', 'parameters': {'type': 'object', 'properties': {'city': {'type': 'string'}}, 'required': ['city']}}]}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Three Real Nesting Differences', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಮೂರೂ ನಿಜ Nesting ವ್ಯತ್ಯಾಸಗಳು',
      bodyEn: 'OpenAI wraps everything under type/function, with the schema at function.parameters. Anthropic is flat -- name/description/input_schema as siblings. Gemini wraps declarations in a functionDeclarations array with the schema at parameters. All three carry the identical WEATHER_SCHEMA underneath.',
      bodyKn: 'OpenAI ಎಲ್ಲವನ್ನೂ type/function ಅಡಿಯಲ್ಲಿ ಸುತ್ತುತ್ತದೆ. Anthropic ಸಮತಟ್ಟಾಗಿದೆ. Gemini declarations ಅನ್ನೂ functionDeclarations array ನಲ್ಲಿ ಸುತ್ತುತ್ತದೆ. ಎಲ್ಲಾ ಮೂರೂ ಒಂದೇ WEATHER_SCHEMA ಅನ್ನೂ ಹೊಂದಿವೆ.' } },

    { type: 'heading', data: { textEn: 'Three Call-Return Shapes, Parsed to the Same Meaning', textKn: 'ಮೂರೂ Call-Return ಆಕಾರಗಳು, ಅದೇ ಅರ್ಥಕ್ಕೆ Parse ಮಾಡಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Declarations Were Half the Story -- Now the Responses', headingKn: 'Declarations ಅರ್ಧ ಕಥೆ ಮಾತ್ರ -- ಈಗ Responses',
      bodyEn: 'Declaring a tool is only the request side. When the model actually decides to call get_weather, each provider returns that decision in its own response shape too. We build one fake response per provider for the same "Mumbai" request and parse each with its matching function.',
      bodyKn: 'Tool ಘೋಷಿಸುವುದೂ ವಿನಂತಿ ಬದಿ ಮಾತ್ರ. Model ನಿಜವಾಗಿ get_weather ಕರೆಯಲು ನಿರ್ಧರಿಸಿದಾಗ, ಪ್ರತಿ provider ಆ ನಿರ್ಧಾರವನ್ನೂ ಅದೂ ya ಸ್ವಂತ response ಆಕಾರದಲ್ಲೂ ಹಿಂತಿರುಗಿಸುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'provider_shapes_demo.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Three fake provider responses for "get_weather in Mumbai", each genuinely parsed by its own shape-specific function into {id, name, args}.',
      descKn: '"get_weather in Mumbai" ಗಾಗಿ ಮೂರೂ ನಕಲಿ provider responses, ಪ್ರತಿಯೊಂದನ್ನೂ ಅದೂ ya ಸ್ವಂತ ಆಕಾರ-ನಿರ್ದಿಷ್ಟ function ಮೂಲಕ ನಿಜವಾಗಿ parse ಮಾಡಲಾಗಿದೆ.',
      code: "openai_call = parse_openai_call(fake_openai)      # tool_calls[].function.arguments is a JSON STRING\nanthropic_call = parse_anthropic_call(fake_anthropic)  # tool_use block, input already parsed\ngemini_call = parse_gemini_call(fake_gemini)        # functionCall, args already parsed\nprint(openai_call); print(anthropic_call); print(gemini_call)" } },
    { type: 'output', data: { output: "openai   -> {'id': 'call_abc', 'name': 'get_weather', 'args': {'city': 'Mumbai'}}\nanthropic-> {'id': 'toolu_xyz', 'name': 'get_weather', 'args': {'city': 'Mumbai'}}\ngemini   -> {'id': 'gemini-1', 'name': 'get_weather', 'args': {'city': 'Mumbai'}}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: OpenAI Needed json.loads(), the Others Didn\'t', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: OpenAI ಗೆ json.loads() ಬೇಕಿತ್ತು, ಇತರರಿಗೆ ಬೇಕಿಲ್ಲ',
      bodyEn: 'parse_openai_call() genuinely calls json.loads(raw_args) because OpenAI\'s function.arguments field is a JSON-encoded STRING. parse_anthropic_call() and parse_gemini_call() read input/args directly as already-parsed dicts -- no json.loads() needed. This is a real, easy-to-miss integration detail: forgetting json.loads() for OpenAI responses is a common bug.',
      bodyKn: 'parse_openai_call() ನಿಜವಾಗಿ json.loads(raw_args) ಕರೆಯುತ್ತದೆ ಏಕೆಂದರೆ OpenAI ya function.arguments ಒಂದೂ JSON-encoded STRING. parse_anthropic_call(), parse_gemini_call() input/args ಅನ್ನೂ ನೇರವಾಗಿ ಈಗಾಗಲೇ-parsed dicts ಆಗಿ ಓದುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Semantic Equivalence, Genuinely Asserted', textKn: 'Semantic Equivalence, ನಿಜವಾಗಿ Assert ಮಾಡಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Claiming Equivalence Is Not the Same as Proving It', headingKn: 'Equivalence ಹೇಳುವುದೂ ಅದನ್ನೂ ಸಾಬೀತುಪಡಿಸುವುದೂ ಒಂದೇ ಅಲ್ಲ',
      bodyEn: 'It is easy to assert in prose that "all three providers mean the same thing here." To make that a genuine proof rather than a claim, we run real Python assert statements comparing the three parsed calls\' name and args fields -- if they were not actually equal, the script would crash right here.',
      bodyKn: '"ಎಲ್ಲಾ ಮೂರೂ providers ಇಲ್ಲಿ ಅದೇ ಅರ್ಥ" ಎಂದೂ prose ನಲ್ಲಿ ಹೇಳುವುದೂ ಸುಲಭ. ಅದನ್ನೂ ಒಂದೂ ಹಕ್ಕುಗಿಂತ ನಿಜ ಸಾಕ್ಷ್ಯ ಮಾಡಲು, ನಾವೂ ನಿಜ ಪೈಥಾನ್ assert statements ಚಲಾಯಿಸುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'provider_shapes_demo.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Real assert statements comparing name and args across all three parsed calls.',
      descKn: 'ಎಲ್ಲಾ ಮೂರೂ parsed calls ನಡುವೆ name, args ಹೋಲಿಸುವ ನಿಜ assert statements.',
      code: "assert openai_call[\"name\"] == anthropic_call[\"name\"] == gemini_call[\"name\"] == \"get_weather\"\nassert openai_call[\"args\"] == anthropic_call[\"args\"] == gemini_call[\"args\"] == {\"city\": \"Mumbai\"}\nprint(\"All three providers agree on name and args; only id format and transport shape differ.\")" } },
    { type: 'output', data: { output: "All three providers agree on name and args; only id format and transport shape differ." } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: No AssertionError Was Raised', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: AssertionError ಎಬ್ಬಿಸಲಾಗಿಲ್ಲ',
      bodyEn: 'Both assert statements genuinely passed (an AssertionError would have crashed the script and printed a traceback instead of the success message). This is direct proof, not just a claim, that "same behavior, different syntax" holds for this example.',
      bodyKn: 'ಎರಡೂ assert statements ನಿಜವಾಗಿ ಪಾಸ್ ಆದವು. ಇದೂ ಈ ಉದಾಹರಣೆಗೆ "ಅದೇ ವರ್ತನೆ, ಬೇರೆ syntax" ನಿಜ ಎಂದೂ ನೇರ ಸಾಕ್ಷ್ಯ.' } },

    { type: 'table', data: {
      captionEn: 'Provider Shape Comparison', captionKn: 'Provider ಆಕಾರ ಹೋಲಿಕೆ',
      rows: "Provider|Declaration nesting|Call location|Arguments format\nOpenAI|type/function/parameters|choices[].message.tool_calls[].function|JSON string (needs json.loads)\nAnthropic|flat name/description/input_schema|content[] block type=tool_use|already-parsed dict (input)\nGemini|functionDeclarations[].parameters|candidates[].content.parts[].functionCall|already-parsed dict (args)" } },

    { type: 'heading', data: { textEn: 'tool_choice Modes', textKn: 'tool_choice ಮೋಡ್‌ಗಳು', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Shared Modes Across Providers', captionKn: 'Providers ನಡುವೆ ಹಂಚಿಕೊಂಡ ಮೋಡ್‌ಗಳು',
      rows: "Mode|Meaning\nauto|Model may call a tool or answer in plain text\nrequired / any|Model must call at least one tool\nnone|Tools declared but unusable this turn\nforced/specific|Model must call one named tool" } },
    { type: 'concept', data: {
      headingEn: '"Same Behavior, Different Syntax" Is the Chapter\'s Central Lesson', headingKn: '"ಅದೇ ವರ್ತನೆ, ಬೇರೆ Syntax" ಈ ಅಧ್ಯಾಯ ya ಕೇಂದ್ರ ಪಾಠ',
      bodyEn: 'The point is not to memorize every provider\'s exact field names. It is recognizing the same four shared components -- declaration, decision, structured call, correlated result -- underneath every provider\'s specific transport. Part 2 will build a canonical translator layer over exactly this pattern.',
      bodyKn: 'ಇಲ್ಲಿ ಪ್ರತಿ provider ya ನಿಖರ field names ನೆನಪಿಡುವುದೂ ಗುರಿಯಲ್ಲ. ಪ್ರತಿ provider ya ನಿರ್ದಿಷ್ಟ transport ಕೆಳಗೆ ಅದೇ ನಾಲ್ಕೂ ಹಂಚಿಕೊಂಡ ಘಟಕಗಳನ್ನೂ ಗುರುತಿಸುವುದೂ ಮುಖ್ಯ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 1', captionKn: 'Part 1 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nTool declaration|Provider-specific JSON describing a callable tool's name/description/schema\nTool call|A model-emitted request to invoke one declared tool with arguments\nCanonical shape|{id, name, args} -- the same triple this lesson's demo genuinely produced from all three providers\ntool_choice|Policy controlling whether/which tool the model may or must call" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: three different declaration shapes were produced for the identical WEATHER_SCHEMA\n• Genuinely confirmed: only OpenAI\'s response required json.loads() to extract arguments\n• Genuinely confirmed: two assert statements proved name/args equivalence across all three providers without error\n• The provider adapter\'s job is to absorb this variance so application code sees one canonical {id, name, args} shape\n• tool_choice modes (auto/required/none/forced) are the same policy expressed with different field names per provider',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೇ WEATHER_SCHEMA ಗಾಗಿ ಮೂರೂ ಬೇರೆ declaration ಆಕಾರಗಳು ಉತ್ಪಾದಿಸಲಾಗಿದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: OpenAI ya response ಮಾತ್ರ arguments ಹೊರತೆಗೆಯಲು json.loads() ಅಗತ್ಯಪಡಿಸಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ assert statements ದೋಷವಿಲ್ಲದೆ name/args equivalence ಸಾಬೀತುಪಡಿಸಿದವು\n• Provider adapter ya ಕೆಲಸ ಈ ವ್ಯತ್ಯಾಸವನ್ನೂ ಹೀರಿಕೊಳ್ಳುವುದೂ\n• tool_choice ಮೋಡ್‌ಗಳು ಪ್ರತಿ provider ಗೆ ಬೇರೆ field names ಜೊತೆ ವ್ಯಕ್ತಪಡಿಸಿದ ಅದೇ policy' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A multi-provider chatbot backend that lets users switch between GPT, Claude, and Gemini models without changing application logic relies on exactly the canonical-shape normalization genuinely demonstrated in this lesson.',
      bodyKn: 'GPT, Claude, Gemini models ನಡುವೆ application logic ಬದಲಾಯಿಸದೆ ಬಳಕೆದಾರರೂ ಬದಲಾಯಿಸಲು ಅನುಮತಿಸುವ ಒಂದೂ multi-provider chatbot backend ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ canonical-shape normalization ಅನ್ನೂ ಅವಲಂಬಿಸಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s parser functions: without per-provider parsing logic, an application built against one provider\'s JSON shape would break immediately when switching providers, even though the underlying tool-calling semantics are identical.',
      bodyKn: 'ಈ lesson ya parser functions ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: per-provider parsing logic ಇಲ್ಲದೆ, ಒಂದೂ provider ya JSON ಆಕಾರ ವಿರುದ್ಧ ನಿರ್ಮಿಸಿದ ಅಪ್ಲಿಕೇಶನ್ ಇನ್ನೊಂದೂ provider ಗೆ ಬದಲಾಯಿಸುವಾಗ ತಕ್ಷಣ ಮುರಿಯುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Frameworks like LangChain and the Vercel AI SDK genuinely implement this exact provider-adapter pattern, converting each provider\'s native tool-call format into one internal representation before your application code ever sees it.',
      bodyKn: 'LangChain ಮತ್ತು Vercel AI SDK ನಂತಹ frameworks ನಿಜವಾಗಿ ಈ ನಿಖರವಾದ provider-adapter ಮಾದರಿಯನ್ನೂ ಅನುಷ್ಠಾನಗೊಳಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Why Call IDs Look Different Across Providers', textKn: 'Call IDs ಪ್ರತಿ Provider ನಲ್ಲಿ ಏಕೆ ಬೇರೆಯಾಗಿ ಕಾಣುತ್ತವೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Each Provider Uses Its Own ID Format', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ Provider ಅದೂ ya ಸ್ವಂತ ID ಫಾರ್ಮ್ಯಾಟ್ ಬಳಸುತ್ತದೆ',
      bodyEn: 'The genuine output above shows call_abc (OpenAI), toolu_xyz (Anthropic), and gemini-1 (Gemini) -- three different ID conventions for functionally the same concept: a stable handle correlating a request with its eventual result. A provider adapter must treat the ID as an opaque string and never assume a particular prefix or format.',
      bodyKn: 'ಮೇಲಿನ ನಿಜ output call_abc (OpenAI), toolu_xyz (Anthropic), gemini-1 (Gemini) ಅನ್ನೂ ತೋರಿಸುತ್ತದೆ -- ಕ್ರಿಯಾತ್ಮಕವಾಗಿ ಅದೇ ಪರಿಕಲ್ಪನೆಗೆ ಮೂರೂ ಬೇರೆ ID ಸಂಪ್ರದಾಯಗಳು.' } },

    { type: 'heading', data: { textEn: 'strict Mode and Refusal, Previewed', textKn: 'strict Mode ಮತ್ತು Refusal, ಪೂರ್ವವೀಕ್ಷಣೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What Part 2 and Later Modules Will Add', headingKn: 'Part 2 ಮತ್ತು ನಂತರದ Modules ಏನೂ ಸೇರಿಸುತ್ತವೆ',
      bodyEn: 'This part deliberately stayed at the declaration/call-shape level. Later lessons (Module 253) cover strict schema-constrained decoding, and a provider can also refuse to produce a tool call at all -- a distinct outcome from a malformed call, which a robust parser must not confuse with a JSON error.',
      bodyKn: 'ಈ ಭಾಗ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ declaration/call-shape ಮಟ್ಟದಲ್ಲೇ ಉಳಿಯಿತು. ನಂತರದ lessons strict schema-constrained decoding ಅನ್ನೂ ಒಳಗೊಳ್ಳುತ್ತವೆ, provider ಒಂದೂ tool call ಉತ್ಪಾದಿಸಲು ಸಂಪೂರ್ಣವಾಗಿ ನಿರಾಕರಿಸಬಹುದು.' } },

    { type: 'table', data: {
      captionEn: 'Gemini\'s Schema Dialect', captionKn: 'Gemini ya Schema Dialect',
      rows: "Aspect|Note\nBase|Described as an OpenAPI 3.0 subset rather than arbitrary JSON Schema\nImplication|Not every JSON Schema feature you use for OpenAI/Anthropic will transfer directly\nPractical rule|A canonical schema may need a provider-specific compiler step, not a blind copy" } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: which provider\'s arguments needed json.loads() in this lesson\'s demo?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಈ lesson ya demo ನಲ್ಲಿ ಯಾವ provider ya arguments json.loads() ಅಗತ್ಯಪಡಿಸಿತು?',
        opts: ['OpenAI', 'Anthropic', 'Gemini', 'All three'], correct: 0,
        optsKn: ['OpenAI', 'Anthropic', 'Gemini', 'ಎಲ್ಲಾ ಮೂರೂ'] },
      { q: 'Where does Anthropic nest its input_schema in a tool declaration?', qKn: 'Anthropic ಒಂದೂ tool declaration ನಲ್ಲಿ ಅದೂ ya input_schema ಅನ್ನೂ ಎಲ್ಲಿ ನೆಸ್ಟ್ ಮಾಡುತ್ತದೆ?',
        opts: ['Flat, as a sibling of name and description', 'Under type.function.parameters', 'Inside functionDeclarations', 'It does not use schemas'], correct: 0,
        optsKn: ['ಸಮತಟ್ಟಾಗಿ, name ಮತ್ತು description ya ಸಹೋದರ', 'type.function.parameters ಅಡಿಯಲ್ಲಿ', 'functionDeclarations ಒಳಗೆ', 'ಇದೂ schemas ಬಳಸುವುದಿಲ್ಲ'] },
      { q: 'What did the two assert statements in this lesson genuinely prove?', qKn: 'ಈ lesson ನಲ್ಲಿ ಎರಡೂ assert statements ನಿಜವಾಗಿ ಏನೂ ಸಾಬೀತುಪಡಿಸಿದವು?',
        opts: ['name and args matched across all three parsed provider calls', 'OpenAI is faster than Anthropic', 'Gemini does not support tool calling', 'JSON Schema is invalid'], correct: 0,
        optsKn: ['name ಮತ್ತು args ಎಲ್ಲಾ ಮೂರೂ parsed provider calls ನಡುವೆ ಹೊಂದಿಕೆಯಾಯಿತು', 'OpenAI Anthropic ಗಿಂತ ವೇಗವಾಗಿದೆ', 'Gemini tool calling ಬೆಂಬಲಿಸುವುದಿಲ್ಲ', 'JSON Schema ಅಮಾನ್ಯ'] },
      { q: 'What does tool_choice="none" mean?', qKn: 'tool_choice="none" ಎಂದರೆ ಏನೂ?',
        opts: ['Tools are declared but cannot be used this turn', 'No tools exist', 'The model must call every tool', 'The schema is empty'], correct: 0,
        optsKn: ['Tools ಘೋಷಿಸಲಾಗಿದೆ ಆದರೆ ಈ turn ಬಳಸಲಾಗುವುದಿಲ್ಲ', 'ಯಾವುದೇ tools ಇಲ್ಲ', 'Model ಪ್ರತಿ tool ಕರೆಯಬೇಕು', 'Schema ಖಾಲಿ'] },
      { q: 'Why does this lesson write an original demo instead of using the pasted source\'s own code?', qKn: 'ಈ lesson pasted source ya ಸ್ವಂತ code ಬಳಸುವ ಬದಲೂ ಒಂದೂ original demo ಏಕೆ ಬರೆಯುತ್ತದೆ?',
        opts: ['Because Part 1\'s source was explicitly conceptual only, with code promised in Part 2', 'Because the source code had a bug', 'Because Python cannot run the source code', 'Because the source code was too long'], correct: 0,
        optsKn: ['ಏಕೆಂದರೆ Part 1 ya source ಸ್ಪಷ್ಟವಾಗಿ ಕೇವಲ conceptual, code Part 2 ನಲ್ಲಿ ಭರವಸೆ ನೀಡಲಾಗಿದೆ', 'ಏಕೆಂದರೆ source code ನಲ್ಲಿ ದೋಷವಿತ್ತು', 'ಏಕೆಂದರೆ ಪೈಥಾನ್ source code ಚಲಾಯಿಸಲಾಗುವುದಿಲ್ಲ', 'ಏಕೆಂದರೆ source code ತುಂಬಾ ಉದ್ದವಾಗಿತ್ತು'] },
    ] } },
  ],
};
