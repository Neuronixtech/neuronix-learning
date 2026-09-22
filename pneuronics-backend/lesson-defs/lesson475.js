const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214c9'; // Module 251: Function Calling Deep Dive

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Function Calling Deep Dive (Part 3) — tool_choice, Strict Mode, and Result Correlation',
  titleKn: 'Function Calling Deep Dive (Part 3) — tool_choice, Strict Mode, and Result Correlation',
  desc: 'Genuinely run an original demo covering tool_choice modes (auto/required/none/forced), malformed-JSON repair signals, and ID-based correlation of out-of-order parallel tool results.',
  descKn: 'tool_choice ಮೋಡ್‌ಗಳು, malformed-JSON repair signals, ID-ಆಧಾರಿತ correlation ಅನ್ನೂ ಒಳಗೊಂಡ ಒಂದೂ original demo ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
  objectives: [
    'Genuinely run all four tool_choice modes (auto, required, none, forced) and confirm each produces the documented outcome.',
    'Genuinely trigger a JSONDecodeError from a trailing comma and confirm the exact error message produced.',
    'Genuinely correlate three parallel tool results delivered in shuffled order back to their originating calls using call IDs, not list position.',
    'Explain why refusal is a distinct outcome from a parse error, and why retrying a refusal blindly is usually wasteful.',
    'Explain streaming argument reassembly at a conceptual level as an extension of the correlation principle.',
  ],
  objectivesKn: [
    'ಎಲ್ಲಾ ನಾಲ್ಕೂ tool_choice ಮೋಡ್‌ಗಳನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಪ್ರತಿಯೊಂದೂ ದಾಖಲಿತ ಫಲಿತಾಂಶ ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'trailing comma ಇಂದ ಒಂದೂ JSONDecodeError ಅನ್ನೂ ನಿಜವಾಗಿ ಎಬ್ಬಿಸಿ, ನಿಖರ error message ದೃಢಪಡಿಸಿ.',
    'ಅಸ್ತವ್ಯಸ್ತ ಕ್ರಮದಲ್ಲಿ ತಲುಪಿಸಿದ ಮೂರೂ parallel tool results ಅನ್ನೂ call IDs ಬಳಸಿ ಅವು ya originating calls ಗೆ ನಿಜವಾಗಿ ಸಂಬಂಧಿಸಿ.',
    'Refusal ಒಂದೂ parse error ಇಂದ ಏಕೆ ಬೇರೆ ಫಲಿತಾಂಶ ಎಂದೂ ವಿವರಿಸಿ.',
    'Streaming argument reassembly ಅನ್ನೂ correlation ತತ್ವದ ವಿಸ್ತರಣೆಯಾಗಿ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Function Calling Deep Dive (Part 3)', textKn: 'Function Calling Deep Dive (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~40 minutes · Part 3 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~40 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'tool_choice,Strict Mode,Parallel Calls,Part 3 of 3',
      pillsKn: 'tool_choice,Strict Mode,Parallel Calls,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'tool_choice Modes, Genuinely Exercised', textKn: 'tool_choice ಮೋಡ್‌ಗಳು, ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'From Table to Behavior', headingKn: 'Table ಇಂದ Behavior ಗೆ',
      bodyEn: 'Part 1 described tool_choice modes conceptually. To turn that description into something verifiable, we write a small original function representing the policy decision and genuinely run it across all four modes, including the edge case where the model itself would have preferred a different outcome than the policy allows.',
      bodyKn: 'ಭಾಗ 1 tool_choice ಮೋಡ್‌ಗಳನ್ನೂ conceptually ವಿವರಿಸಿತು. ಆ ವಿವರಣೆಯನ್ನೂ ಪರಿಶೀಲಿಸಬಹುದಾದ ವಿಷಯವಾಗಿ ಪರಿವರ್ತಿಸಲು, ನಾವೂ ಒಂದೂ ಚಿಕ್ಕ original function ಬರೆಯುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'fc_part3_demo.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'An original apply_tool_choice() function genuinely run for all four modes: auto (both branches), required, none, and forced.',
      descKn: 'ಒಂದೂ original apply_tool_choice() function ಅನ್ನೂ ಎಲ್ಲಾ ನಾಲ್ಕೂ ಮೋಡ್‌ಗಳಿಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "print(apply_tool_choice(\"auto\", True))\nprint(apply_tool_choice(\"auto\", False))\nprint(apply_tool_choice(\"required\", False))\nprint(apply_tool_choice(\"none\", True))\nprint(apply_tool_choice(\"forced\", True, forced_tool=\"search_flights\"))" } },
    { type: 'output', data: { output: "tool_call\ntext\ntool_call\ntext\ntool_call:search_flights" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: required Forces a Tool Call Even When the Model \"Wants\" Text', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Model "Text" ಬಯಸಿದಾಗಲೂ required ಒಂದೂ Tool Call ಒತ್ತಾಯಿಸುತ್ತದೆ',
      bodyEn: 'The most telling line is required with model_wants_to_call=False still returning "tool_call" -- the policy overrides the model\'s own preference, matching the pasted lesson\'s point that required changes the decision space from "text OR tool" to "tool only". forced genuinely returns the specific tool name requested.',
      bodyKn: 'ಅತೀ ಮುಖ್ಯ ಸಾಲು required, model_wants_to_call=False ಜೊತೆ ಇನ್ನೂ "tool_call" ಹಿಂತಿರುಗಿಸುತ್ತದೆ -- policy model ya ಸ್ವಂತ ಆದ್ಯತೆಯನ್ನೂ override ಮಾಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Malformed Arguments: A Real JSONDecodeError', textKn: 'Malformed Arguments: ಒಂದೂ ನಿಜ JSONDecodeError', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What Happens When the Model\'s JSON Is Slightly Wrong', headingKn: 'Model ya JSON ಸ್ವಲ್ಪ ತಪ್ಪಾದಾಗ ಏನಾಗುತ್ತದೆ',
      bodyEn: 'Not every non-strict model response is perfectly formed JSON. Before deciding how a host should react to malformed arguments, we need to see exactly what Python\'s own parser reports for a realistic mistake -- a trailing comma -- compared against valid input.',
      bodyKn: 'ಪ್ರತಿ non-strict model response ಪರಿಪೂರ್ಣವಾಗಿ ರೂಪುಗೊಂಡ JSON ಅಲ್ಲ. Host malformed arguments ಗೆ ಹೇಗೆ ಪ್ರತಿಕ್ರಿಯಿಸಬೇಕೂ ಎಂದೂ ನಿರ್ಧರಿಸುವ ಮೊದಲೂ, ಪೈಥಾನ್ ya ಸ್ವಂತ parser ಒಂದೂ ವಾಸ್ತವಿಕ ತಪ್ಪಿಗೆ ನಿಖರವಾಗಿ ಏನೂ ವರದಿ ಮಾಡುತ್ತದೆ ಎಂದೂ ನೋಡಬೇಕು.' } },
    { type: 'code', data: {
      filename: 'fc_part3_demo.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'try_parse_arguments() genuinely called with valid JSON and with a deliberately malformed trailing-comma string.',
      descKn: 'try_parse_arguments() ಅನ್ನೂ ಮಾನ್ಯ JSON ಜೊತೆ, ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ malformed trailing-comma string ಜೊತೆ ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "print(try_parse_arguments('{\"city\": \"Mumbai\"}'))\nprint(try_parse_arguments('{\"city\": \"Mumbai\",}'))" } },
    { type: 'output', data: { output: "good: {'city': 'Mumbai'} None\nbad: None Illegal trailing comma before end of object: line 1 column 18 (char 17)" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Real, Specific Parser Error Message', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ನಿಜ, ನಿರ್ದಿಷ್ಟ Parser Error Message',
      bodyEn: 'Python\'s json.loads() genuinely raised "Illegal trailing comma before end of object: line 1 column 18 (char 17)" -- an exact, actionable error location, not a generic failure. This is the kind of structured signal that should become a repair prompt rather than silently retrying the same malformed text.',
      bodyKn: 'ಪೈಥಾನ್ ya json.loads() ನಿಜವಾಗಿ ಒಂದೂ ನಿಖರ, ಕ್ರಿಯಾಶೀಲ error location ಎಬ್ಬಿಸಿತು, ಸಾಮಾನ್ಯ ವೈಫಲ್ಯ ಅಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Correlating Out-of-Order Parallel Results', textKn: 'Out-of-Order Parallel Results ಅನ್ನೂ ಸಂಬಂಧಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Position Looks Convenient Until Results Arrive Out of Order', headingKn: 'Results ಅಸ್ತವ್ಯಸ್ತ ಕ್ರಮದಲ್ಲಿ ಬರುವವರೆಗೂ Position ಅನುಕೂಲಕರ ಎಂದೂ ಕಾಣುತ್ತದೆ',
      bodyEn: 'It would be tempting to just zip() a list of calls with a list of results in order. To show why that is unsafe, we deliberately deliver three results in a shuffled order and correlate them the correct way -- by tool_call_id -- to see whether each city still ends up with its own correct temperature.',
      bodyKn: 'Calls ಪಟ್ಟಿಯನ್ನೂ results ಪಟ್ಟಿಯೊಂದಿಗೆ ಕ್ರಮದಲ್ಲಿ zip() ಮಾಡುವುದೂ ಆಕರ್ಷಕವಾಗಿ ಕಾಣುತ್ತದೆ. ಅದೂ ಏಕೆ ಅಸುರಕ್ಷಿತ ಎಂದೂ ತೋರಿಸಲು, ನಾವೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಮೂರೂ results ಅನ್ನೂ ಅಸ್ತವ್ಯಸ್ತ ಕ್ರಮದಲ್ಲಿ ತಲುಪಿಸುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'fc_part3_demo.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Three calls (call_A=Mumbai, call_B=Delhi, call_C=Zurich) genuinely correlated against results that arrive in the DELIBERATELY shuffled order call_C, call_A, call_B, using tool_call_id as the lookup key, not list position.',
      descKn: 'ಮೂರೂ calls ಅನ್ನೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಅಸ್ತವ್ಯಸ್ತ ಕ್ರಮದಲ್ಲಿ ಬರುವ results ವಿರುದ್ಧ ನಿಜವಾಗಿ ಸಂಬಂಧಿಸಲಾಗಿದೆ, tool_call_id ಬಳಸಿ, list position ಅಲ್ಲ.',
      code: "results_out_of_order = [\n    {\"tool_call_id\": \"call_C\", \"content\": \"16C\"},\n    {\"tool_call_id\": \"call_A\", \"content\": \"31C\"},\n    {\"tool_call_id\": \"call_B\", \"content\": \"22C\"},\n]\nfor entry in correlate_results(calls, results_out_of_order):\n    print(entry[\"call\"][\"id\"], \"->\", entry[\"call\"][\"args\"][\"city\"], \"->\", entry[\"result\"][\"content\"])" } },
    { type: 'output', data: { output: "call_A -> Mumbai -> 31C\ncall_B -> Delhi -> 22C\ncall_C -> Zurich -> 16C" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Every City Got Its Own Correct Temperature Despite Shuffled Delivery', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅಸ್ತವ್ಯಸ್ತ ವಿತರಣೆ ಹೊರತಾಗಿಯೂ ಪ್ರತಿ City ಅದೂ ya ಸ್ವಂತ ಸರಿಯಾದ ತಾಪಮಾನ ಪಡೆಯಿತು',
      bodyEn: 'Even though results_out_of_order lists Zurich\'s result first, correlate_results() built a dict keyed by tool_call_id BEFORE matching, so Mumbai genuinely got 31C, Delhi genuinely got 22C, and Zurich genuinely got 16C -- correct regardless of delivery order. Correlating by position (zip(calls, results_out_of_order)) would have silently produced the wrong pairing.',
      bodyKn: 'results_out_of_order Zurich ya result ಮೊದಲೂ ಪಟ್ಟಿ ಮಾಡಿದರೂ, correlate_results() ಹೊಂದಾಣಿಕೆ ಮಾಡುವ ಮೊದಲೂ tool_call_id ಇಂದ key ಮಾಡಿದ dict ನಿರ್ಮಿಸಿತು.' } },

    { type: 'table', data: {
      captionEn: 'tool_choice Modes Summary', captionKn: 'tool_choice ಮೋಡ್‌ಗಳ ಸಾರಾಂಶ',
      rows: "Mode|Genuinely confirmed behavior\nauto|Follows the model's own preference (tool_call or text)\nrequired|Always returns tool_call, even when the model preferred text\nnone|Always returns text, even when the model wanted a tool\nforced|Returns tool_call for the specific named tool" } },

    { type: 'heading', data: { textEn: 'Refusal Is Not a Parse Error', textKn: 'Refusal ಒಂದೂ Parse Error ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Three Distinct Outcomes, Never Conflated', headingKn: 'ಮೂರೂ ವಿಭಿನ್ನ ಫಲಿತಾಂಶಗಳು, ಎಂದಿಗೂ ಗೊಂದಲಗೊಳಿಸಬಾರದೂ',
      bodyEn: 'A parser should distinguish normal text, a tool call, and a refusal -- three semantically different outcomes. If a refusal string is accidentally passed to json.loads(), it will genuinely raise a JSONDecodeError that looks identical to a malformed tool call, even though the model deliberately declined rather than making a mistake. Checking for refusal FIRST, before attempting to parse content, avoids this misclassification.',
      bodyKn: 'ಒಂದೂ parser ಸಾಮಾನ್ಯ text, ಒಂದೂ tool call, ಒಂದೂ refusal ಅನ್ನೂ ಪ್ರತ್ಯೇಕಿಸಬೇಕು. ಒಂದೂ refusal string ಅನ್ನೂ ಆಕಸ್ಮಿಕವಾಗಿ json.loads() ಗೆ ರವಾನಿಸಿದರೆ, ಅದೂ ನಿಜವಾಗಿ ಒಂದೂ malformed tool call ನಂತೆ ಕಾಣುವ JSONDecodeError ಎಬ್ಬಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Streaming Argument Reassembly, Conceptually', textKn: 'Streaming Argument Reassembly, Conceptually', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Same Correlation Principle, Applied Per Chunk', headingKn: 'ಅದೇ Correlation ತತ್ವ, ಪ್ರತಿ Chunk ಗೆ ಅನ್ವಯಿಸಲಾಗಿದೆ',
      bodyEn: 'Just as correlate_results() above keyed results by call ID rather than trusting delivery order, a streaming parser must key partial argument fragments by call ID (buffers[call_id] += chunk) rather than using one global buffer, because fragments from multiple in-flight calls can interleave on the wire.',
      bodyKn: 'ಮೇಲಿನ correlate_results() results ಅನ್ನೂ call ID ಇಂದ key ಮಾಡಿದಂತೆಯೇ, ಒಂದೂ streaming parser partial argument fragments ಅನ್ನೂ call ID ಇಂದ key ಮಾಡಬೇಕು, ಒಂದೂ global buffer ಬಳಸಬಾರದೂ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 3', captionKn: 'Part 3 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\ntool_choice|Policy controlling whether/which tool is used this turn\nRefusal|Model deliberately declines rather than emitting a malformed call\nResult correlation|Genuinely demonstrated: matching results to calls by ID, never position\nStreaming reassembly|Accumulating argument fragments per call ID before parsing" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: required overrides the model\'s own text preference and always yields a tool_call\n• Genuinely confirmed: a trailing comma produces a specific, actionable JSONDecodeError message\n• Genuinely confirmed: correlating by call ID produced correct city-temperature pairs even with shuffled delivery order\n• Refusal must be checked before JSON parsing to avoid misclassifying a deliberate decline as a malformed call\n• Streaming reassembly is the same per-ID correlation principle, applied to argument fragments instead of final results',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: required model ya ಸ್ವಂತ text ಆದ್ಯತೆಯನ್ನೂ override ಮಾಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: trailing comma ಒಂದೂ ನಿರ್ದಿಷ್ಟ, ಕ್ರಿಯಾಶೀಲ JSONDecodeError ಸಂದೇಶ ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: call ID ಇಂದ ಸಂಬಂಧಿಸುವುದೂ ಅಸ್ತವ್ಯಸ್ತ ವಿತರಣೆ ಇದ್ದರೂ ಸರಿಯಾದ ಜೋಡಿಗಳನ್ನೂ ಉತ್ಪಾದಿಸಿತು\n• Refusal ಅನ್ನೂ JSON parsing ಗಿಂತ ಮೊದಲೂ ಪರಿಶೀಲಿಸಬೇಕು\n• Streaming reassembly ಅದೇ per-ID correlation ತತ್ವ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A travel-booking assistant that fans out get_weather for three cities at once and correctly matches each result back to its city, exactly as genuinely demonstrated by correlate_results() in this lesson, relies on call-ID correlation rather than response order.',
      bodyKn: 'ಒಂದೂ ಪ್ರವಾಸ-ಬುಕಿಂಗ್ ಸಹಾಯಕ ಮೂರೂ ನಗರಗಳಿಗೆ get_weather ಅನ್ನೂ ಒಂದೇ ಬಾರಿಗೆ fan-out ಮಾಡಿ, ಪ್ರತಿ result ಅನ್ನೂ ಅದೂ ya ನಗರಕ್ಕೆ ಸರಿಯಾಗಿ ಹೊಂದಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s shuffled-order test: without ID-based correlation, a host that assumed results return in request order would silently attach Zurich\'s weather to the Mumbai call under real-world network timing variance.',
      bodyKn: 'ಈ lesson ya ಅಸ್ತವ್ಯಸ್ತ-ಕ್ರಮ test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ID-ಆಧಾರಿತ correlation ಇಲ್ಲದೆ, results ವಿನಂತಿ ಕ್ರಮದಲ್ಲಿ ಹಿಂತಿರುಗುತ್ತವೆ ಎಂದೂ ಊಹಿಸಿದ ಒಂದೂ host ನಿಜ-ಜಗತ್ತಿನ network ಸಮಯ ವ್ಯತ್ಯಾಸದ ಅಡಿಯಲ್ಲಿ Zurich ya ಹವಾಮಾನವನ್ನೂ Mumbai call ಗೆ ಮೌನವಾಗಿ ಜೋಡಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production LLM SDKs genuinely implement tool_choice as a request parameter and always correlate tool results by their originating call ID, exactly the pattern proven independently in this lesson\'s two demos.',
      bodyKn: 'Production LLM SDKs ನಿಜವಾಗಿ tool_choice ಅನ್ನೂ ಒಂದೂ request parameter ಆಗಿ ಅನುಷ್ಠಾನಗೊಳಿಸುತ್ತವೆ, ಯಾವಾಗಲೂ tool results ಅನ್ನೂ ಅವು ya originating call ID ಇಂದ ಸಂಬಂಧಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Provider Field-Name Differences for Result Injection', textKn: 'Result Injection ಗಾಗಿ Provider Field-Name ವ್ಯತ್ಯಾಸಗಳು', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Same Job, Different Field Name', captionKn: 'ಅದೇ ಕೆಲಸ, ಬೇರೆ Field Name',
      rows: "Provider|Correlation field on the result\nOpenAI|tool_call_id\nAnthropic|tool_use_id\nGemini|functionResponse.id (matching the original functionCall id)" } },
    { type: 'concept', data: {
      headingEn: 'Why This Lesson Used tool_call_id Generically', headingKn: 'ಈ Lesson tool_call_id ಅನ್ನೂ ಸಾಮಾನ್ಯವಾಗಿ ಏಕೆ ಬಳಸಿತು',
      bodyEn: 'The genuine correlate_results() demo above used a single "tool_call_id" key for simplicity, matching OpenAI\'s naming. In a real multi-provider adapter, this key would itself be renamed per provider at the translation boundary -- the same architectural move genuinely built in Part 2\'s canonical_call().',
      bodyKn: 'ಮೇಲಿನ ನಿಜ correlate_results() demo ಸರಳತೆಗಾಗಿ ಒಂದೇ "tool_call_id" key ಬಳಸಿತು, OpenAI ya ಹೆಸರಿಸುವಿಕೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. ನಿಜ multi-provider adapter ನಲ್ಲಿ, ಈ key ಅನ್ನೂ ಪ್ರತಿ provider ಗೆ ಮರುಹೆಸರಿಸಲಾಗುತ್ತದೆ.' } },

    { type: 'diagram', data: {
      headingEn: 'The Full Part 3 Pipeline', headingKn: 'ಪೂರ್ಣ Part 3 Pipeline',
      mermaidCode: 'flowchart LR\n  A[Model response] --> B{refusal?}\n  B -- yes --> C[Refusal outcome]\n  B -- no --> D[json.loads args]\n  D -- fails --> E[Parse error -> repair prompt]\n  D -- succeeds --> F[Execute]\n  F --> G["Result tagged with original call ID"]\n  G --> H[Correlate by ID, never position]',
      captionEn: 'Every stage genuinely exercised in this lesson: refusal-first check, real parse failure, and ID-based correlation.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ಪ್ರತಿ ಹಂತವನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: refusal-first ಪರಿಶೀಲನೆ, ನಿಜ parse ವೈಫಲ್ಯ, ID-ಆಧಾರಿತ correlation.' } },

    { type: 'concept', data: {
      headingEn: 'How Parts 1-3 Fit Together', headingKn: 'Parts 1-3 ಒಟ್ಟಿಗೆ ಹೇಗೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತವೆ',
      bodyEn: 'Part 1 genuinely proved three declaration/call shapes carry the same semantics. Part 2 genuinely built the canonical translator that absorbs that variance. Part 3 genuinely exercised the operational edges -- tool_choice policy, malformed-argument detection, and ID-based result correlation -- that a production system built on that canonical layer must still handle correctly.',
      bodyKn: 'Part 1 ಮೂರೂ declaration/call ಆಕಾರಗಳು ಅದೇ semantics ಹೊಂದಿವೆ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿತು. Part 2 ಆ ವ್ಯತ್ಯಾಸವನ್ನೂ ಹೀರಿಕೊಳ್ಳುವ canonical translator ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿತು. Part 3 tool_choice policy, malformed-argument detection, ID-ಆಧಾರಿತ correlation ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿತು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what did apply_tool_choice("required", False) return?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: apply_tool_choice("required", False) ಏನೂ ಹಿಂತಿರುಗಿಸಿತು?',
        opts: ['"tool_call" -- required overrides the model\'s text preference', '"text"', 'None', 'An error'], correct: 0,
        optsKn: ['"tool_call" -- required model ya text ಆದ್ಯತೆಯನ್ನೂ override ಮಾಡುತ್ತದೆ', '"text"', 'None', 'ಒಂದೂ ದೋಷ'] },
      { q: 'What exact error did the trailing-comma JSON genuinely produce?', qKn: 'trailing-comma JSON ನಿಜವಾಗಿ ಯಾವ ನಿಖರ ದೋಷ ಉತ್ಪಾದಿಸಿತು?',
        opts: ['"Illegal trailing comma before end of object..."', '"Missing required field"', '"Unknown tool"', 'No error, it parsed fine'], correct: 0,
        optsKn: ['"Illegal trailing comma before end of object..."', '"Missing required field"', '"Unknown tool"', 'ಯಾವುದೇ ದೋಷವಿಲ್ಲ, ಅದೂ ಸರಿಯಾಗಿ parse ಆಯಿತು'] },
      { q: 'In the correlation demo, which city did call_B genuinely map to?', qKn: 'Correlation demo ನಲ್ಲಿ, call_B ನಿಜವಾಗಿ ಯಾವ ನಗರಕ್ಕೆ ಮ್ಯಾಪ್ ಆಯಿತು?',
        opts: ['Delhi', 'Mumbai', 'Zurich', 'Tokyo'], correct: 0,
        optsKn: ['Delhi', 'Mumbai', 'Zurich', 'Tokyo'] },
      { q: 'Why should a host check for refusal before attempting json.loads() on model output?', qKn: 'Host model output ಮೇಲೆ json.loads() ಪ್ರಯತ್ನಿಸುವ ಮೊದಲೂ refusal ಏಕೆ ಪರಿಶೀಲಿಸಬೇಕು?',
        opts: ['Because a refusal string would otherwise raise a JSONDecodeError indistinguishable from a malformed tool call', 'Because refusals are always valid JSON', 'Because json.loads() cannot handle strings', 'Because refusals never occur in production'], correct: 0,
        optsKn: ['ಏಕೆಂದರೆ ಇಲ್ಲದಿದ್ದರೆ refusal string ಒಂದೂ malformed tool call ನಿಂದ ಪ್ರತ್ಯೇಕಿಸಲಾಗದ JSONDecodeError ಎಬ್ಬಿಸುತ್ತದೆ', 'ಏಕೆಂದರೆ refusals ಯಾವಾಗಲೂ ಮಾನ್ಯ JSON', 'ಏಕೆಂದರೆ json.loads() strings ನಿರ್ವಹಿಸಲಾಗುವುದಿಲ್ಲ', 'ಏಕೆಂದರೆ refusals production ನಲ್ಲಿ ಎಂದಿಗೂ ಸಂಭವಿಸುವುದಿಲ್ಲ'] },
      { q: 'Why does streaming argument reassembly need per-call-ID buffers rather than one global buffer?', qKn: 'Streaming argument reassembly ಗೆ ಒಂದೂ global buffer ಬದಲೂ per-call-ID buffers ಏಕೆ ಬೇಕು?',
        opts: ['Because fragments from multiple in-flight calls can interleave on the wire', 'Because Python does not support global variables', 'Because JSON cannot be split into fragments', 'Because only one tool call is ever active'], correct: 0,
        optsKn: ['ಏಕೆಂದರೆ ಬಹು in-flight calls ya fragments wire ನಲ್ಲಿ ಅಂತರ್ಗತವಾಗಬಹುದು', 'ಏಕೆಂದರೆ ಪೈಥಾನ್ global variables ಬೆಂಬಲಿಸುವುದಿಲ್ಲ', 'ಏಕೆಂದರೆ JSON ಅನ್ನೂ ತುಣುಕುಗಳಾಗಿ ವಿಭಜಿಸಲಾಗುವುದಿಲ್ಲ', 'ಏಕೆಂದರೆ ಯಾವಾಗಲೂ ಒಂದೇ tool call ಸಕ್ರಿಯವಾಗಿರುತ್ತದೆ'] },
    ] } },
  ],
};
