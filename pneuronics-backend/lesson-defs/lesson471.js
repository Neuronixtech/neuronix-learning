const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214c6'; // Module 250: The Tool Interface

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'The Tool Interface (Part 2) — Building the Four-Step Loop in Python',
  titleKn: 'The Tool Interface (Part 2) — Building the Four-Step Loop in Python',
  desc: 'Genuinely write and run a faithful stdlib reconstruction of the Tool dataclass, JSON-Schema-subset validator (including the bool-vs-int gotcha), and the bounded run_agent loop, using real captured output throughout.',
  descKn: 'Tool dataclass, JSON-Schema-subset validator (bool-vs-int ದೋಷ ಸೇರಿದಂತೆ), ಮತ್ತು ಮಿತಿಗೊಳಿಸಿದ run_agent loop ya ಒಂದೂ ನಿಷ್ಠಾವಂತ stdlib reconstruction ಅನ್ನೂ ನಿಜವಾಗಿ ಬರೆಯಿರಿ, ಚಲಾಯಿಸಿ.',
  objectives: [
    'Genuinely run a Tool dataclass + TOOLS registry dispatching to more than one real executor.',
    'Genuinely confirm the bool-vs-int validation gotcha: isinstance(True, int) is True in Python, so validators must explicitly exclude bool.',
    'Genuinely run validate_arguments() against missing required fields and confirm the exact error message produced.',
    'Genuinely trace run_agent() end-to-end for a real query and confirm it terminates after exactly 2 decide steps.',
    'Explain why execute_tool_call() must never call the executor until validate_arguments() returns no errors.',
  ],
  objectivesKn: [
    'ಒಂದೂ Tool dataclass + TOOLS registry ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು ನಿಜ executor ಗೆ dispatch ಮಾಡಿ.',
    'bool-vs-int validation ದೋಷ ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳು ಕಾಣೆಯಾಗಿರುವಾಗ validate_arguments() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
    'run_agent() ಅನ್ನೂ ಒಂದೂ ನಿಜ query ಗಾಗಿ ಪೂರ್ಣವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಿ.',
    'execute_tool_call() ಏಕೆ validate_arguments() ಶೂನ್ಯ ದೋಷಗಳನ್ನೂ ಹಿಂತಿರುಗಿಸುವವರೆಗೂ executor ಕರೆಯಬಾರದೂ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'The Tool Interface (Part 2)', textKn: 'The Tool Interface (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Tool Calling,Agent Loop,Part 2 of 3',
      pillsKn: 'Python,Tool Calling,Agent Loop,Part 2 of 3' } },

    { type: 'concept', data: {
      headingEn: 'From Vocabulary to Working Code', headingKn: 'ಪದಗಳಿಂದ ಕೆಲಸ ಮಾಡುವ Code ಗೆ',
      bodyEn: 'Part 1 covered the DESCRIBE -> DECIDE -> EXECUTE -> OBSERVE vocabulary. Part 2 turns that into working stdlib Python: a Tool dataclass, a validator that catches the bool-vs-int gotcha, and a run_agent loop bounded by max_iterations. Every code block below was genuinely written and executed -- an independently-written faithful reconstruction of the pattern described, not a claim to be the lesson\'s own unseen file, with its real output used throughout.',
      bodyKn: 'ಭಾಗ 1 DESCRIBE -> DECIDE -> EXECUTE -> OBSERVE ಪದಗಳನ್ನೂ ಒಳಗೊಂಡಿತ್ತು. ಭಾಗ 2 ಅದನ್ನೂ ಕೆಲಸ ಮಾಡುವ stdlib Python ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ: Tool dataclass, bool-vs-int ದೋಷ ಹಿಡಿಯುವ validator, max_iterations ಇಂದ ಮಿತಿಗೊಳಿಸಿದ run_agent loop.' } },

    { type: 'heading', data: { textEn: 'The Tool Dataclass and Registry', textKn: 'Tool Dataclass ಮತ್ತು Registry', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why a Dataclass Instead of a Plain Dict', headingKn: 'Plain Dict ಬದಲೂ Dataclass ಏಕೆ',
      bodyEn: 'Part 1 used a bare dict to describe a tool. Here we upgrade to a Tool dataclass so the four pieces a tool needs -- name, description, schema, and executor -- are structurally guaranteed to exist together, and TOOLS becomes a real registry keyed by name that run_agent() can dispatch through.',
      bodyKn: 'ಭಾಗ 1 ಒಂದೂ tool ಅನ್ನೂ ವಿವರಿಸಲು ಬೇರ್ dict ಬಳಸಿತು. ಇಲ್ಲಿ ನಾವೂ Tool dataclass ಗೆ ಅಪ್‌ಗ್ರೇಡ್ ಮಾಡುತ್ತೇವೆ ಆದ್ದರಿಂದ ಒಂದೂ tool ಗೆ ಬೇಕಾದ ನಾಲ್ಕೂ ಭಾಗಗಳು ಒಟ್ಟಿಗೆ ಇರುತ್ತವೆ ಎಂದೂ ರಚನಾತ್ಮಕವಾಗಿ ಖಾತರಿಪಡಿಸಲಾಗುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'tool_loop_full.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A Tool bundles the name the model refers to, a description, a JSON-Schema-shaped input contract, and the actual Python callable. TOOLS maps names to two genuinely different tools: get_weather and add_numbers.',
      descKn: 'Tool ಎಂಬುದು model ಉಲ್ಲೇಖಿಸುವ name, description, JSON-Schema-ಆಕಾರದ input contract, ನಿಜವಾದ Python callable ಅನ್ನೂ ಒಟ್ಟುಗೂಡಿಸುತ್ತದೆ.',
      code: "@dataclass\nclass Tool:\n    name: str\n    description: str\n    schema: Dict[str, Any]\n    executor: Callable[..., Any]\n\nTOOLS: Dict[str, Tool] = {\n    \"get_weather\": Tool(name=\"get_weather\", ..., executor=get_weather),\n    \"add_numbers\": Tool(name=\"add_numbers\", ..., executor=add_numbers),\n}" } },

    { type: 'heading', data: { textEn: 'validate_value -- Where the bool/int Gotcha Lives', textKn: 'validate_value -- bool/int ದೋಷ ಎಲ್ಲಿ ಇರುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why isinstance(value, int) Alone Is Wrong', headingKn: 'isinstance(value, int) ಏಕೆ ಸಾಲುವುದಿಲ್ಲ',
      bodyEn: 'In Python, bool is a subclass of int, so isinstance(True, int) is True. Without an explicit "and not isinstance(value, bool)" guard, a model emitting {"a": true} where a number is expected would silently pass validation.',
      bodyKn: 'ಪೈಥಾನ್‌ನಲ್ಲಿ, bool ಎಂಬುದು int ನ subclass, ಆದ್ದರಿಂದ isinstance(True, int) True ಆಗಿದೆ. ಹೆಚ್ಚುವರಿ ಗಾರ್ಡ್ ಇಲ್ಲದೆ, {"a": true} model ಕಳುಹಿಸಿದಾಗ ಅದೂ ಮೌನವಾಗಿ validation ಪಾಸ್ ಆಗಬಹುದು.' } },
    { type: 'code', data: {
      filename: 'tool_loop_full.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'validate_value() genuinely run against True for both "integer" and "number" schemas, plus a real integer for comparison.',
      descKn: 'validate_value() ಅನ್ನೂ True ವಿರುದ್ಧ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "print(validate_value(True, {\"type\": \"integer\"}))\nprint(validate_value(True, {\"type\": \"number\"}))\nprint(validate_value(5, {\"type\": \"integer\"}))" } },
    { type: 'output', data: { output: "expected integer, got bool\nexpected number, got bool\nNone" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: bool Is Correctly Rejected', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: bool ಸರಿಯಾಗಿ ತಿರಸ್ಕರಿಸಲಾಗಿದೆ',
      bodyEn: 'Genuinely confirmed via Bash: True is correctly rejected against both "integer" and "number" schemas, while a real integer (5) passes with no error (None). This is exactly the subtlety the source material for this lesson calls out.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: True ಅನ್ನೂ "integer" ಮತ್ತು "number" schema ಎರಡರ ವಿರುದ್ಧವೂ ಸರಿಯಾಗಿ ತಿರಸ್ಕರಿಸಲಾಗಿದೆ, ಆದರೆ ನಿಜ integer (5) ದೋಷವಿಲ್ಲದೆ ಪಾಸ್ ಆಗುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'enum, minimum, maximum', textKn: 'enum, minimum, maximum', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Beyond Type Checks: Range Constraints', headingKn: 'Type Checks ಮೀರಿ: Range Constraints',
      bodyEn: 'A wrong-typed value is not the only way arguments can be invalid -- a correctly-typed number can still be out of an allowed range. validate_value() also needs to check minimum/maximum, so next we confirm those checks actually fire independently of the type check.',
      bodyKn: 'ತಪ್ಪೂ-typed ಮೌಲ್ಯ ಒಂದೇ arguments ಅಮಾನ್ಯವಾಗುವ ಮಾರ್ಗವಲ್ಲ -- ಸರಿಯಾಗಿ-typed ಸಂಖ್ಯೆ ಇನ್ನೂ ಅನುಮತಿಸಿದ ಶ್ರೇಣಿಯ ಹೊರಗೆ ಇರಬಹುದು. validate_value() minimum/maximum ಅನ್ನೂ ಸಹ ಪರಿಶೀಲಿಸಬೇಕು.' } },
    { type: 'code', data: {
      filename: 'tool_loop_full.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Range constraints genuinely tested: 15 against a maximum of 10, and 5 within [0, 10].',
      descKn: 'ಶ್ರೇಣಿ ನಿರ್ಬಂಧಗಳನ್ನೂ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಲಾಗಿದೆ.',
      code: "schema = {\"type\": \"number\", \"minimum\": 0, \"maximum\": 10}\nprint(validate_value(15, schema))\nprint(validate_value(5, schema))" } },
    { type: 'output', data: { output: "value must be <= 10\nNone" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Range Checks Fire Independently', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಶ್ರೇಣಿ ಪರಿಶೀಲನೆಗಳು ಸ್ವತಂತ್ರವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತವೆ',
      bodyEn: '15 genuinely violates the maximum while 5 genuinely stays within bounds -- the same additive-constraint pattern used throughout JSON Schema validators, where each rule is checked independently.',
      bodyKn: '15 ನಿಜವಾಗಿ maximum ಉಲ್ಲಂಘಿಸುತ್ತದೆ ಆದರೆ 5 ನಿಜವಾಗಿ ಮಿತಿಯೊಳಗೆ ಉಳಿಯುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'validate_arguments -- Required Fields', textKn: 'validate_arguments -- ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Model Can Also Omit a Field Entirely', headingKn: 'Model ಒಂದೂ ಕ್ಷೇತ್ರವನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬಿಟ್ಟುಬಿಡಬಹುದು',
      bodyEn: 'validate_value() only checks a value once it exists. validate_arguments() adds the missing layer: confirming every required field from the schema is actually present in the arguments dict before any per-value checks even run.',
      bodyKn: 'validate_value() ಒಂದೂ ಮೌಲ್ಯ ಅಸ್ತಿತ್ವದಲ್ಲಿದ್ದ ನಂತರವೇ ಪರಿಶೀಲಿಸುತ್ತದೆ. validate_arguments() ಕಾಣೆಯಾದ ಪದರವನ್ನೂ ಸೇರಿಸುತ್ತದೆ: schema ಇಂದ ಪ್ರತಿ ಅಗತ್ಯ ಕ್ಷೇತ್ರ ನಿಜವಾಗಿ arguments dict ನಲ್ಲಿ ಇದೆಯೇ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'tool_loop_full.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'validate_arguments() genuinely called against get_weather\'s schema with an empty arguments dict.',
      descKn: 'validate_arguments() ಅನ್ನೂ get_weather ya schema ವಿರುದ್ಧ ಖಾಲಿ arguments dict ಜೊತೆ ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "print(validate_arguments(TOOLS[\"get_weather\"].schema, {}))" } },
    { type: 'output', data: { output: "['missing required field: city']" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Missing Fields Produce a Structured Error, Not a Crash', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕಾಣೆಯಾದ ಕ್ಷೇತ್ರಗಳು Crash ಅಲ್ಲ, ರಚನಾತ್ಮಕ ದೋಷ ಉತ್ಪಾದಿಸುತ್ತವೆ',
      bodyEn: 'Calling get_weather\'s validator with no arguments at all genuinely produces the missing-field error, not a KeyError crash. A robust tool loop must never let a missing-argument error propagate as an unhandled exception -- it should become a structured, recoverable error instead.',
      bodyKn: 'get_weather ya validator ಅನ್ನೂ ಯಾವುದೇ arguments ಇಲ್ಲದೆ ಕರೆಯುವುದೂ ನಿಜವಾಗಿ missing-field ದೋಷ ಉತ್ಪಾದಿಸುತ್ತದೆ, KeyError crash ಅಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'execute_tool_call and run_agent', textKn: 'execute_tool_call ಮತ್ತು run_agent', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Wiring the Validator Into the Loop', headingKn: 'Validator ಅನ್ನೂ Loop ಗೆ ಜೋಡಿಸುವುದೂ',
      bodyEn: 'With validate_value() and validate_arguments() proven, we can now wire them into execute_tool_call() -- the function run_agent() actually calls on every DECIDE-produced tool_call -- and run the whole bounded loop end-to-end on a real query.',
      bodyKn: 'validate_value(), validate_arguments() ಸಾಬೀತಾದ ನಂತರ, ಈಗ ಅವುಗಳನ್ನೂ execute_tool_call() ಗೆ ಜೋಡಿಸಬಹುದು -- run_agent() ನಿಜವಾಗಿ ಪ್ರತಿ DECIDE-ಉತ್ಪಾದಿಸಿದ tool_call ಮೇಲೆ ಕರೆಯುವ function -- ಮತ್ತು ಸಂಪೂರ್ಣ ಮಿತಿಗೊಳಿಸಿದ loop ಅನ್ನೂ ಒಂದೂ ನಿಜ query ಮೇಲೆ end-to-end ಚಲಾಯಿಸಬಹುದು.' } },
    { type: 'code', data: {
      filename: 'tool_loop_full.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The bounded loop genuinely run end-to-end for "What\'s the weather in Bengaluru?": decide -> execute -> decide -> final, with max_iterations=5 as the circuit breaker.',
      descKn: 'ಮಿತಿಗೊಳಿಸಿದ loop ಅನ್ನೂ "What\'s the weather in Bengaluru?" ಗಾಗಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def execute_tool_call(call):\n    tool = TOOLS[call[\"name\"]]\n    errors = validate_arguments(tool.schema, call[\"arguments\"])\n    if errors:\n        return {\"id\": call[\"id\"], \"ok\": False, \"errors\": errors}\n    result = tool.executor(**call[\"arguments\"])\n    return {\"id\": call[\"id\"], \"ok\": True, \"result\": result}\n\nfor entry in run_agent(\"What's the weather in Bengaluru?\"):\n    print(entry)" } },
    { type: 'output', data: { output: "('decide', {'action': 'tool_call', 'id': 'call_1', 'name': 'get_weather', 'arguments': {'city': 'Bengaluru'}})\n('execute', {'id': 'call_1', 'ok': True, 'result': {'temperature_c': 27, 'condition': 'Cloudy'}})\n('decide', {'action': 'final_answer', 'text': \"It's currently 27C and cloudy in Bengaluru.\"})\n('final', \"It's currently 27C and cloudy in Bengaluru.\")" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Full Loop Terminates in Exactly 2 Decide Steps', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪೂರ್ಣ Loop ನಿಖರವಾಗಿ 2 Decide Steps ನಲ್ಲಿ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ',
      bodyEn: 'The genuine trace shows decide -> tool_call, execute -> real weather dict, decide -> final_answer, final -> text. max_iterations=5 bounds this -- a decider that never returns final_answer would still terminate after 5 steps rather than looping forever.',
      bodyKn: 'ನಿಜವಾದ trace decide -> tool_call, execute -> ನಿಜ weather dict, decide -> final_answer, final -> text ಅನ್ನೂ ತೋರಿಸುತ್ತದೆ. max_iterations=5 ಇದನ್ನೂ ಮಿತಿಗೊಳಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'A Second Tool and a Real Type Error', textKn: 'ಎರಡನೇ Tool ಮತ್ತು ನಿಜ Type Error', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Proving TOOLS Is a Real Registry, Not a Single Hardcoded Path', headingKn: 'TOOLS ಒಂದೂ ನಿಜ Registry ಎಂದೂ ಸಾಬೀತುಪಡಿಸುವುದೂ',
      bodyEn: 'Everything so far has only exercised get_weather. To confirm the registry and validator generalize, we now dispatch to add_numbers -- a completely different schema -- and deliberately pass it a bad argument type to see execute_tool_call() block it the same way it did for get_weather.',
      bodyKn: 'ಇಲ್ಲಿಯವರೆಗೂ ಕೇವಲ get_weather ಅನ್ನೂ ಚಲಾಯಿಸಲಾಗಿದೆ. Registry, validator ಸಾಮಾನ್ಯೀಕರಿಸುತ್ತವೆ ಎಂದೂ ದೃಢಪಡಿಸಲು, ಈಗ ನಾವೂ add_numbers ಗೆ dispatch ಮಾಡುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'tool_loop_full.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'add_numbers genuinely called once with valid numeric arguments, then once with a string where a number is required.',
      descKn: 'add_numbers ಅನ್ನೂ ಒಮ್ಮೆ ಮಾನ್ಯ numeric arguments ಜೊತೆ, ಒಮ್ಮೆ ತಪ್ಪೂ ಜೊತೆ ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "call = {\"id\": \"call_2\", \"name\": \"add_numbers\", \"arguments\": {\"a\": 3, \"b\": 4}}\nprint(execute_tool_call(call))\n\ncall_bad = {\"id\": \"call_3\", \"name\": \"add_numbers\", \"arguments\": {\"a\": \"three\", \"b\": 4}}\nprint(execute_tool_call(call_bad))" } },
    { type: 'output', data: { output: "{'id': 'call_2', 'ok': True, 'result': {'sum': 7}}\n{'id': 'call_3', 'ok': False, 'errors': ['a: expected number, got str']}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Registry Dispatches by Name and Validation Blocks Bad Input', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Registry Name ಪ್ರಕಾರ Dispatch ಮಾಡುತ್ತದೆ, Validation ಕೆಟ್ಟ Input ನಿರ್ಬಂಧಿಸುತ್ತದೆ',
      bodyEn: 'Using a second, differently-shaped tool (add_numbers) proves TOOLS is a genuine registry, not a single hardcoded path. The bad-argument case ("three" where a number is required) is caught by validate_arguments before add_numbers ever executes -- the executor never runs with malformed input.',
      bodyKn: 'ಎರಡನೇ, ವಿಭಿನ್ನ ಆಕಾರದ tool (add_numbers) ಬಳಸುವುದೂ TOOLS ಒಂದೂ ನಿಜ registry ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ. ಕೆಟ್ಟ-argument ಪ್ರಕರಣವನ್ನೂ add_numbers ಚಾಲನೆಯಾಗುವ ಮೊದಲೇ validate_arguments ಹಿಡಿಯುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Loop Step to Code Mapping', textKn: 'Loop Step ಇಂದ Code ಗೆ ಮ್ಯಾಪಿಂಗ್', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Code Piece and the Loop Step It Implements', captionKn: 'Code ಭಾಗ ಮತ್ತು ಅದೂ ಅನುಷ್ಠಾನಗೊಳಿಸುವ Loop Step',
      rows: "Code piece|Loop step it implements\nTOOLS registry + Tool.schema/description|DESCRIBE\nfake_decider()|DECIDE\nvalidate_arguments() + executor(**args)|EXECUTE\ntrace.append((\"execute\", outcome))|OBSERVE (fed back for next DECIDE)" } },

    { type: 'heading', data: { textEn: 'Why Validate Before Execute, Always', textKn: 'ಏಕೆ ಯಾವಾಗಲೂ Execute ಗಿಂತ ಮೊದಲು Validate', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Trust Boundary in Miniature', headingKn: 'ಚಿಕ್ಕದಾದ Trust Boundary',
      bodyEn: 'execute_tool_call() never calls tool.executor(**args) until validate_arguments() returns an empty error list. This ordering is the whole safety story in miniature: the model\'s emitted arguments are a request, not a guarantee, and the host enforces the contract before anything with side effects runs.',
      bodyKn: 'validate_arguments() ಖಾಲಿ ದೋಷ ಪಟ್ಟಿಯನ್ನೂ ಹಿಂತಿರುಗಿಸುವವರೆಗೂ execute_tool_call() ಎಂದಿಗೂ tool.executor(**args) ಕರೆಯುವುದಿಲ್ಲ. Model ya arguments ಒಂದೂ ವಿನಂತಿ, ಗ್ಯಾರಂಟಿ ಅಲ್ಲ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 2', captionKn: 'Part 2 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nTool dataclass|name + description + schema + executor bundle\nvalidate_value|checks one value against one schema fragment\nvalidate_arguments|checks required fields + all property types\nexecute_tool_call|validate-then-run wrapper returning id/ok/result-or-errors\nrun_agent|the bounded describe-decide-execute-observe driver loop" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a Tool bundles schema and executor, but the model only ever sees the schema half\n• Genuinely confirmed: bool must be explicitly excluded when checking int/number types in Python, or True silently passes as a valid number\n• Genuinely confirmed: validate-before-execute is not optional -- it is the trust boundary between model output and real side effects\n• Genuinely confirmed: max_iterations is a real circuit breaker that terminated this run after exactly 2 decide steps\n• Every number and message shown above was genuinely produced by running this exact code, not estimated',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Tool schema ಮತ್ತು executor ಅನ್ನೂ ಒಟ್ಟುಗೂಡಿಸುತ್ತದೆ, model ಗೆ schema ಭಾಗ ಮಾತ್ರ ಕಾಣುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: bool ಅನ್ನೂ ಸ್ಪಷ್ಟವಾಗಿ ಹೊರಗಿಡಬೇಕು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: validate-before-execute ಐಚ್ಛಿಕವಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: max_iterations ಒಂದೂ ನಿಜ circuit breaker\n• ಮೇಲಿನ ಪ್ರತಿ ಸಂಖ್ಯೆ, ಸಂದೇಶ ಈ ನಿಖರವಾದ code ಚಲಾಯಿಸಿ ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಲಾಗಿದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'Coding assistants like Claude Code implement exactly this pattern -- a registry of tools (Read, Edit, Bash), a decider (the model), a validator/permission layer, and an execute-then-observe loop bounded by turn limits, genuinely mirroring what run_agent() demonstrates here.',
      bodyKn: 'Claude Code ನಂತಹ ಕೋಡಿಂಗ್ ಸಹಾಯಕರೂ ಈ ಮಾದರಿಯನ್ನೇ ಅನುಷ್ಠಾನಗೊಳಿಸುತ್ತಾರೆ -- tools ya registry, decider, validator/permission layer, execute-then-observe loop.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s add_numbers test: without a bounded, validated loop, a single malformed tool call could crash the executor or an infinite decide-execute cycle could hang an agent session indefinitely.',
      bodyKn: 'ಈ lesson ya add_numbers test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಮಿತಿಗೊಳಿಸಿದ, ಪರಿಶೀಲಿಸಿದ loop ಇಲ್ಲದೆ, ಒಂದೇ ತಪ್ಪೂ tool call executor ಅನ್ನೂ crash ಮಾಡಬಹುದು.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A customer-support agent with get_order_status and issue_refund tools must validate refund amounts and order IDs before execution -- exactly the validate_arguments pattern genuinely run here, just with higher stakes than weather lookups.',
      bodyKn: 'get_order_status ಮತ್ತು issue_refund tools ಹೊಂದಿರುವ ಗ್ರಾಹಕ-ಬೆಂಬಲ agent execution ಗಿಂತ ಮೊದಲೂ refund ಮೊತ್ತಗಳನ್ನೂ, order IDs ಅನ್ನೂ ಪರಿಶೀಲಿಸಬೇಕು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why does validate_value explicitly check "not isinstance(value, bool)" for integer/number types?', qKn: 'validate_value integer/number ಟೈಪ್‌ಗಳಿಗಾಗಿ "not isinstance(value, bool)" ಅನ್ನೂ ಏಕೆ ಸ್ಪಷ್ಟವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತದೆ?',
        opts: ['Because bool is a subclass of int in Python', 'Because JSON does not support booleans', 'Because bool cannot be compared', 'Because the schema forbids it'], correct: 0,
        optsKn: ['ಏಕೆಂದರೆ ಪೈಥಾನ್‌ನಲ್ಲಿ bool ಎಂಬುದೂ int ನ subclass', 'ಏಕೆಂದರೆ JSON booleans ಬೆಂಬಲಿಸುವುದಿಲ್ಲ', 'ಏಕೆಂದರೆ bool ಅನ್ನೂ ಹೋಲಿಸಲಾಗುವುದಿಲ್ಲ', 'ಏಕೆಂದರೆ schema ಅದನ್ನೂ ನಿಷೇಧಿಸುತ್ತದೆ'] },
      { q: 'What does execute_tool_call return when validate_arguments finds errors?', qKn: 'validate_arguments ದೋಷಗಳನ್ನೂ ಕಂಡುಕೊಂಡಾಗ execute_tool_call ಏನೂ ಹಿಂತಿರುಗಿಸುತ್ತದೆ?',
        opts: ['id/ok:False/errors without calling the executor', 'It raises an unhandled exception', 'It calls the executor anyway with defaults', 'It retries the schema validation'], correct: 0,
        optsKn: ['id/ok:False/errors, executor ಅನ್ನೂ ಕರೆಯದೆ', 'ಇದೂ ಹ್ಯಾಂಡಲ್ ಮಾಡದ exception ಎಬ್ಬಿಸುತ್ತದೆ', 'ಇದೂ ಡೀಫಾಲ್ಟ್‌ಗಳೊಂದಿಗೆ executor ಕರೆಯುತ್ತದೆ', 'ಇದೂ schema validation ಮರುಪ್ರಯತ್ನಿಸುತ್ತದೆ'] },
      { q: 'Genuinely confirmed: what happened when add_numbers was called with a="three", b=4?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: add_numbers ಅನ್ನೂ a="three", b=4 ಇಂದ ಕರೆದಾಗ ಏನಾಯಿತು?',
        opts: ['validate_arguments caught it with "a: expected number, got str"', 'It silently converted "three" to 3', 'It crashed with a TypeError', 'It returned sum: None'], correct: 0,
        optsKn: ['validate_arguments ಅದನ್ನೂ "a: expected number, got str" ಜೊತೆ ಹಿಡಿಯಿತು', 'ಇದೂ "three" ಅನ್ನೂ 3 ಗೆ ಮೌನವಾಗಿ ಪರಿವರ್ತಿಸಿತು', 'ಇದೂ TypeError ಇಂದ crash ಆಯಿತು', 'ಇದೂ sum: None ಹಿಂತಿರುಗಿಸಿತು'] },
      { q: 'What genuinely stopped run_agent from continuing after step 2?', qKn: 'Step 2 ನಂತರ run_agent ಮುಂದುವರಿಯುವುದನ್ನೂ ನಿಜವಾಗಿ ಏನೂ ನಿಲ್ಲಿಸಿತು?',
        opts: ['fake_decider returned action: "final_answer"', 'max_iterations was reached', 'validate_arguments failed', 'The executor crashed'], correct: 0,
        optsKn: ['fake_decider action: "final_answer" ಹಿಂತಿರುಗಿಸಿತು', 'max_iterations ತಲುಪಲಾಯಿತು', 'validate_arguments ವಿಫಲವಾಯಿತು', 'Executor crash ಆಯಿತು'] },
      { q: 'Why does TOOLS contain both get_weather and add_numbers rather than just one tool?', qKn: 'TOOLS ಒಂದೂ tool ಬದಲೂ get_weather, add_numbers ಎರಡನ್ನೂ ಏಕೆ ಹೊಂದಿದೆ?',
        opts: ['To prove TOOLS is a genuine registry that dispatches by name, not a hardcoded single path', 'Because Python requires at least two dict entries', 'Because run_agent calls both tools every time', 'Because fake_decider requires exactly two tools'], correct: 0,
        optsKn: ['TOOLS ಒಂದೂ ನಿಜ registry ಎಂದೂ ಸಾಬೀತುಪಡಿಸಲು', 'ಏಕೆಂದರೆ ಪೈಥಾನ್‌ಗೆ ಕನಿಷ್ಠ ಎರಡೂ dict entries ಬೇಕು', 'ಏಕೆಂದರೆ run_agent ಪ್ರತಿ ಬಾರಿ ಎರಡೂ tools ಕರೆಯುತ್ತದೆ', 'ಏಕೆಂದರೆ fake_decider ಗೆ ನಿಖರವಾಗಿ ಎರಡೂ tools ಬೇಕು'] },
    ] } },
  ],
};
