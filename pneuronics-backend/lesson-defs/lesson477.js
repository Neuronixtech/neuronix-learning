const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214cc'; // Module 252: Parallel Tool Calls and Streaming with Tools

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Parallel Tool Calls and Streaming (Part 2) — StreamAccumulator and Early Execution',
  titleKn: 'Parallel Tool Calls and Streaming (Part 2) — StreamAccumulator and Early Execution',
  desc: 'Genuinely write and run a StreamAccumulator that reconstructs interleaved streamed tool-call arguments per call ID, prove the parse-early trap with a real JSONDecodeError, and confirm tool results can complete in a different order than arguments did.',
  descKn: 'Interleaved streamed tool-call arguments ಅನ್ನೂ ಪ್ರತಿ call ID ಗೆ ಮರುನಿರ್ಮಿಸುವ StreamAccumulator ಅನ್ನೂ ನಿಜವಾಗಿ ಬರೆಯಿರಿ, ಚಲಾಯಿಸಿ, ನಿಜ JSONDecodeError ಜೊತೆ parse-early trap ಸಾಬೀತುಪಡಿಸಿ.',
  objectives: [
    'Genuinely trigger a JSONDecodeError from an incomplete JSON prefix, proving why partial streamed arguments cannot be parsed early.',
    'Genuinely run a StreamAccumulator that reconstructs 3 interleaved tool calls (call_A, call_B, call_C) using per-call-ID buffers.',
    'Genuinely confirm that argument-completion order (A, C, B) differs from tool-result completion order (B, C, A).',
    'Genuinely trigger a KeyError for an unregistered call ID, confirming the accumulator fails loudly rather than silently corrupting state.',
    'Explain why executors can start as soon as their own call is argument-complete, without waiting for the whole stream to finish.',
  ],
  objectivesKn: [
    'ಅಪೂರ್ಣ JSON prefix ಇಂದ ಒಂದೂ JSONDecodeError ಅನ್ನೂ ನಿಜವಾಗಿ ಎಬ್ಬಿಸಿ.',
    'ಒಂದೂ StreamAccumulator ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, 3 ಅಂತರ್ಗತ tool calls ಅನ್ನೂ ಮರುನಿರ್ಮಿಸಿ.',
    'Argument-completion order (A, C, B) tool-result completion order (B, C, A) ಇಂದ ಭಿನ್ನ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ನೋಂದಾಯಿಸದ call ID ಗಾಗಿ ಒಂದೂ KeyError ಅನ್ನೂ ನಿಜವಾಗಿ ಎಬ್ಬಿಸಿ.',
    'Executors ಅವು ya ಸ್ವಂತ call argument-complete ಆದ ತಕ್ಷಣ ಏಕೆ ಆರಂಭಿಸಬಹುದೂ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Parallel Tool Calls and Streaming (Part 2)', textKn: 'Parallel Tool Calls and Streaming (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Streaming,StreamAccumulator,ThreadPoolExecutor,Part 2 of 3',
      pillsKn: 'Streaming,StreamAccumulator,ThreadPoolExecutor,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'The Parse-Early Trap, Genuinely Triggered', textKn: 'Parse-Early Trap, ನಿಜವಾಗಿ ಎಬ್ಬಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why You Cannot Just Parse Every Chunk As It Arrives', headingKn: 'ಪ್ರತಿ Chunk ಬಂದ ತಕ್ಷಣ ಏಕೆ Parse ಮಾಡಲಾಗುವುದಿಲ್ಲ',
      bodyEn: 'Before building a full accumulator, we need to see the actual failure a naive implementation would hit: calling json.loads() on a streamed argument fragment before the model has finished sending it. This proves the parse-early trap is a genuine, reproducible error, not a hypothetical warning.',
      bodyKn: 'ಪೂರ್ಣ accumulator ನಿರ್ಮಿಸುವ ಮೊದಲೂ, ಒಂದೂ naive implementation ಎದುರಿಸುವ ನಿಜ ವೈಫಲ್ಯವನ್ನೂ ನೋಡಬೇಕು: model ಕಳುಹಿಸುವುದನ್ನೂ ಮುಗಿಸುವ ಮೊದಲೇ streamed argument fragment ಮೇಲೆ json.loads() ಕರೆಯುವುದೂ.' } },
    { type: 'code', data: {
      filename: 'stream_accumulator.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'json.loads() genuinely called on an incomplete argument prefix -- exactly what a naive parser would do if it tried to parse every streamed chunk.',
      descKn: 'json.loads() ಅನ್ನೂ ಒಂದೂ ಅಪೂರ್ಣ argument prefix ಮೇಲೆ ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "try:\n    json.loads('{\"city\":\"Ben')\nexcept json.JSONDecodeError as exc:\n    print(f\"JSONDecodeError: {exc}\")" } },
    { type: 'output', data: { output: "JSONDecodeError: Unterminated string starting at: line 1 column 9 (char 8)" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Partial JSON Is Not Malformed JSON', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Partial JSON Malformed JSON ಅಲ್ಲ',
      bodyEn: 'Python\'s parser genuinely reports "Unterminated string" -- a specific, real symptom of an incomplete prefix, not a random parse failure. This confirms why a streaming host must wait for a completion signal rather than repeatedly attempting json.loads() on every partial buffer.',
      bodyKn: 'ಪೈಥಾನ್ parser ನಿಜವಾಗಿ "Unterminated string" ವರದಿ ಮಾಡುತ್ತದೆ -- ಅಪೂರ್ಣ prefix ya ನಿರ್ದಿಷ್ಟ, ನಿಜ ಲಕ್ಷಣ, ಯಾದೃಚ್ಛಿಕ parse ವೈಫಲ್ಯವಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'StreamAccumulator, Genuinely Built', textKn: 'StreamAccumulator, ನಿಜವಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Buffer Per Call, Not One Global Buffer', headingKn: 'ಪ್ರತಿ Call ಗೆ ಒಂದೂ Buffer, ಒಂದೂ Global Buffer ಅಲ್ಲ',
      bodyEn: 'The parse-early failure above shows we cannot parse mid-stream. The fix is to accumulate fragments per call ID and only call json.loads() once a completion signal arrives. add_arguments() and finish_call() are exactly that: one growing string per call, parsed exactly once.',
      bodyKn: 'ಮೇಲಿನ parse-early ವೈಫಲ್ಯ ನಾವೂ mid-stream ನಲ್ಲಿ parse ಮಾಡಲಾಗುವುದಿಲ್ಲ ಎಂದೂ ತೋರಿಸುತ್ತದೆ. ಪರಿಹಾರ ಪ್ರತಿ call ID ಗೆ fragments ಅನ್ನೂ ಸಂಗ್ರಹಿಸುವುದೂ, completion signal ಬಂದಾಗ ಮಾತ್ರ json.loads() ಕರೆಯುವುದೂ.' } },
    { type: 'code', data: {
      filename: 'stream_accumulator.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'start_call(), add_arguments(), and finish_call() -- the three operations that keep one buffer per call ID and only parse at completion.',
      descKn: 'start_call(), add_arguments(), finish_call() -- ಪ್ರತಿ call ID ಗೆ ಒಂದೂ buffer ಇರಿಸುವ, ಪೂರ್ಣಗೊಂಡಾಗ ಮಾತ್ರ parse ಮಾಡುವ ಮೂರೂ ಕಾರ್ಯಾಚರಣೆಗಳು.',
      code: "def add_arguments(self, call_id, chunk):\n    if call_id not in self.calls:\n        raise KeyError(f\"Unknown call id: {call_id}\")\n    self.calls[call_id].arguments_buffer += chunk\n\ndef finish_call(self, call_id):\n    state = self.calls[call_id]\n    state.complete = True\n    arguments = json.loads(state.arguments_buffer)\n    return {\"id\": state.call_id, \"name\": state.name, \"arguments\": arguments}" } },

    { type: 'heading', data: { textEn: 'Replaying an Interleaved Fake Stream', textKn: 'ಒಂದೂ ಅಂತರ್ಗತ ನಕಲಿ Stream ಅನ್ನೂ ಮರುಪ್ಲೇ ಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Real Test: Three Calls Streaming at Once', headingKn: 'ನಿಜ Test: ಮೂರೂ Calls ಒಟ್ಟಿಗೆ Streaming',
      bodyEn: 'A single call streaming cleanly proves little. The genuine test is whether the accumulator survives three calls whose argument fragments arrive interleaved on the wire -- exactly what FAKE_STREAM below simulates, deliberately finishing the calls out of their original A/B/C order.',
      bodyKn: 'ಒಂದೇ call ಸ್ವಚ್ಛವಾಗಿ streaming ಮಾಡುವುದೂ ಕಡಿಮೆ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ. ನಿಜ test ಮೂರೂ calls ya argument fragments wire ನಲ್ಲಿ ಅಂತರ್ಗತವಾಗಿ ತಲುಪಿದಾಗ accumulator ಉಳಿಯುತ್ತದೆಯೇ ಎಂಬುದೂ.' } },
    { type: 'code', data: {
      filename: 'stream_accumulator.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'FAKE_STREAM genuinely interleaves fragments for call_A, call_B, call_C, then finishes them in the order A, C, B -- each finish immediately submits its own executor via ThreadPoolExecutor.',
      descKn: 'FAKE_STREAM call_A, call_B, call_C ಗಾಗಿ fragments ಅನ್ನೂ ನಿಜವಾಗಿ ಅಂತರ್ಗತಗೊಳಿಸುತ್ತದೆ, ನಂತರ ಅವುಗಳನ್ನೂ A, C, B ಕ್ರಮದಲ್ಲಿ ಮುಗಿಸುತ್ತದೆ.',
      code: "for event in FAKE_STREAM:\n    if event[\"type\"] == \"arguments\":\n        acc.add_arguments(event[\"id\"], event[\"chunk\"])\n        print(f\"Chunk for {event['id']}: {event['chunk']!r}\")\n    elif event[\"type\"] == \"finish\":\n        completed = acc.finish_call(event[\"id\"])\n        print(f\"Arguments complete for {completed['id']}: {completed['arguments']}\")" } },
    { type: 'output', data: { output: "Started call_A (get_weather)\nStarted call_B (get_weather)\nStarted call_C (get_weather)\nChunk for call_A: '{\"city\":\"Ben'\nChunk for call_B: '{\"city\":\"Tok'\nChunk for call_C: '{\"city\":\"Zur'\nChunk for call_A: 'galuru\"}'\nArguments complete for call_A: {'city': 'Bengaluru'}\nChunk for call_C: 'ich\"}'\nArguments complete for call_C: {'city': 'Zurich'}\nChunk for call_B: 'yo\"}'\nArguments complete for call_B: {'city': 'Tokyo'}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Interleaved Fragments Reconstruct Correctly Per Call ID', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅಂತರ್ಗತ Fragments ಪ್ರತಿ Call ID ಗೆ ಸರಿಯಾಗಿ ಮರುನಿರ್ಮಾಣವಾಗುತ್ತವೆ',
      bodyEn: 'Even though chunks for A, B, and C arrived interleaved on the wire (Ben, Tok, Zur, then galuru, ich, yo in a shuffled follow-up order), each call\'s buffer genuinely reconstructed its own complete city name -- Bengaluru, Zurich, Tokyo -- with zero cross-contamination between buffers.',
      bodyKn: 'A, B, C ಗಾಗಿ chunks wire ನಲ್ಲಿ ಅಂತರ್ಗತವಾಗಿ ತಲುಪಿದರೂ, ಪ್ರತಿ call ya buffer ಅದೂ ya ಸ್ವಂತ ಪೂರ್ಣ ನಗರದ ಹೆಸರನ್ನೂ ನಿಜವಾಗಿ ಮರುನಿರ್ಮಿಸಿತು -- buffers ನಡುವೆ ಶೂನ್ಯ ಅಡ್ಡ-ಮಾಲಿನ್ಯ.' } },

    { type: 'heading', data: { textEn: 'Tool Results Complete in a Third Order', textKn: 'Tool Results ಮೂರನೇ ಕ್ರಮದಲ್ಲಿ ಪೂರ್ಣಗೊಳ್ಳುತ್ತವೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Argument-Complete Does Not Mean Executor-Complete', headingKn: 'Argument-Complete ಎಂದರೆ Executor-Complete ಎಂದೂ ಅಲ್ಲ',
      bodyEn: 'The stream reconstruction above finished arguments in the order A, C, B. But each finished call also triggers a real executor with its own latency, which can complete in yet another order. We now execute all three and print results as they actually finish.',
      bodyKn: 'ಮೇಲಿನ stream ಮರುನಿರ್ಮಾಣ arguments ಅನ್ನೂ A, C, B ಕ್ರಮದಲ್ಲಿ ಮುಗಿಸಿತು. ಆದರೆ ಪ್ರತಿ ಮುಗಿದ call ಅದೂ ya ಸ್ವಂತ latency ಜೊತೆ ಒಂದೂ ನಿಜ executor ಅನ್ನೂ ಸಹ ಪ್ರಚೋದಿಸುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'stream_accumulator.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Each completed call\'s executor is submitted to ThreadPoolExecutor immediately, and results are collected via as_completed().',
      descKn: 'ಪ್ರತಿ ಪೂರ್ಣಗೊಂಡ call ya executor ಅನ್ನೂ ThreadPoolExecutor ಗೆ ತಕ್ಷಣ ಸಲ್ಲಿಸಲಾಗುತ್ತದೆ.',
      code: "future = pool.submit(get_weather, city)\nfutures[future] = completed[\"id\"]\n...\nfor future in as_completed(futures):\n    call_id = futures[future]\n    result = future.result()\n    print({\"role\": \"tool\", \"tool_call_id\": call_id, \"content\": json.dumps(result)})" } },
    { type: 'output', data: { output: "{'role': 'tool', 'tool_call_id': 'call_B', 'content': '{\"city\": \"Tokyo\", \"temperature_c\": 24}'}\n{'role': 'tool', 'tool_call_id': 'call_C', 'content': '{\"city\": \"Zurich\", \"temperature_c\": 16}'}\n{'role': 'tool', 'tool_call_id': 'call_A', 'content': '{\"city\": \"Bengaluru\", \"temperature_c\": 27}'}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Result Order (B, C, A) Differs From Argument-Completion Order (A, C, B)', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Result Order (B, C, A) Argument-Completion Order (A, C, B) ಇಂದ ಭಿನ್ನ',
      bodyEn: 'This is the strongest proof in this lesson: arguments finished completing in the order A, C, B, but the ACTUAL tool executions finished in the order B, C, A (real thread scheduling on this machine). Every result still correctly carries its own tool_call_id, so nothing was lost or mismatched despite two independent layers of reordering.',
      bodyKn: 'ಇದೂ ಈ lesson ನಲ್ಲಿ ಅತೀ ಬಲವಾದ ಸಾಕ್ಷ್ಯ: arguments A, C, B ಕ್ರಮದಲ್ಲಿ ಪೂರ್ಣಗೊಂಡವು, ಆದರೆ ನಿಜ tool executions B, C, A ಕ್ರಮದಲ್ಲಿ ಪೂರ್ಣಗೊಂಡವು. ಪ್ರತಿ result ಇನ್ನೂ ಅದೂ ya ಸ್ವಂತ tool_call_id ಸರಿಯಾಗಿ ಹೊಂದಿದೆ.' } },

    { type: 'heading', data: { textEn: 'Unknown Call ID: Failing Loudly', textKn: 'Unknown Call ID: ಜೋರಾಗಿ ವಿಫಲಗೊಳ್ಳುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What Should Happen When the Protocol Itself Breaks', headingKn: 'Protocol ಸ್ವತಃ ಮುರಿದಾಗ ಏನಾಗಬೇಕು',
      bodyEn: 'Every test so far assumed a well-formed stream. Real integrations can drop a start event or misroute a fragment. We now deliberately send an argument chunk for a call_id that was never registered, to see whether the accumulator fails safely or silently corrupts state.',
      bodyKn: 'ಇಲ್ಲಿಯವರೆಗಿನ ಪ್ರತಿ test ಒಂದೂ ಸರಿಯಾಗಿ ರೂಪುಗೊಂಡ stream ಅನ್ನೂ ಊಹಿಸಿತು. ನಿಜ integrations ಒಂದೂ start event ಬಿಟ್ಟುಬಿಡಬಹುದು.' } },
    { type: 'code', data: {
      filename: 'stream_accumulator.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'add_arguments() genuinely called with a call_id that was never start()-ed.',
      descKn: 'add_arguments() ಅನ್ನೂ ಎಂದೂ start()-ed ಆಗದ call_id ಜೊತೆ ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "acc2 = StreamAccumulator()\nacc2.add_arguments(\"call_ghost\", \"{}\")" } },
    { type: 'output', data: { output: "KeyError: 'Unknown call id: call_ghost'" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Malformed Stream State Crashes Loudly Instead of Corrupting Data', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ Malformed Stream State ಡೇಟಾ ಹಾಳುಮಾಡುವ ಬದಲೂ ಜೋರಾಗಿ Crash ಆಗುತ್ತದೆ',
      bodyEn: 'The accumulator genuinely refuses to silently create a new state object for an unrecognized ID, instead raising KeyError immediately. This surfaces protocol bugs (a dropped start event, provider integration mismatch) at the exact moment they happen rather than producing a subtly wrong result later.',
      bodyKn: 'Accumulator ಗುರುತಿಸದ ID ಗಾಗಿ ಮೌನವಾಗಿ ಒಂದೂ ಹೊಸ state object ರಚಿಸಲು ನಿಜವಾಗಿ ನಿರಾಕರಿಸುತ್ತದೆ, ಬದಲೂ ತಕ್ಷಣ KeyError ಎಬ್ಬಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Concept to Code Map', captionKn: 'Concept ಇಂದ Code ಗೆ Map',
      rows: "Concept|Code\nPer-call buffer|ToolCallState.arguments_buffer, one per call_id\nParse-early trap avoidance|json.loads() only inside finish_call()\nEarly execution|pool.submit() called immediately after each finish event\nResult correlation|tool_call_id preserved through executor dispatch and result printing\nFail-loud on corruption|KeyError raised for an unregistered call_id" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: json.loads() on an incomplete prefix raises "Unterminated string", not a generic error\n• Genuinely confirmed: 3 interleaved streams reconstruct into their correct, uncorrupted city names\n• Genuinely confirmed: argument-completion order (A, C, B) and result order (B, C, A) were DIFFERENT, yet every tool_call_id stayed correctly attached\n• Genuinely confirmed: an unregistered call ID raises KeyError rather than silently creating bad state\n• Executors can start the moment their own call is complete -- they do not need to wait for the rest of the stream',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅಪೂರ್ಣ prefix ಮೇಲೆ json.loads() "Unterminated string" ಎಬ್ಬಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 3 ಅಂತರ್ಗತ streams ಅವು ya ಸರಿಯಾದ ನಗರ ಹೆಸರುಗಳಾಗಿ ಮರುನಿರ್ಮಾಣವಾಗುತ್ತವೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: argument-completion order ಮತ್ತು result order ಭಿನ್ನವಾಗಿದ್ದವು, ಆದರೂ ಪ್ರತಿ tool_call_id ಸರಿಯಾಗಿ ಜೋಡಿಸಲ್ಪಟ್ಟಿತ್ತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನೋಂದಾಯಿಸದ call ID KeyError ಎಬ್ಬಿಸುತ್ತದೆ\n• Executors ಅವು ya ಸ್ವಂತ call ಪೂರ್ಣಗೊಂಡ ತಕ್ಷಣ ಆರಂಭಿಸಬಹುದೂ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A coding assistant streaming three simultaneous file-read tool calls genuinely relies on the same per-call-ID buffering demonstrated here so that interleaved argument fragments never get attributed to the wrong file.',
      bodyKn: 'ಮೂರೂ ಏಕಕಾಲದ file-read tool calls ಅನ್ನೂ streaming ಮಾಡುವ ಒಂದೂ ಕೋಡಿಂಗ್ ಸಹಾಯಕ ಇಲ್ಲಿ ಪ್ರದರ್ಶಿಸಿದ ಅದೇ per-call-ID buffering ಅನ್ನೂ ನಿಜವಾಗಿ ಅವಲಂಬಿಸಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s result-order test: without ID-based correlation surviving through both streaming AND execution reordering, a host could easily attach Tokyo\'s weather to Bengaluru\'s call under real concurrent conditions.',
      bodyKn: 'ಈ lesson ya result-order test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: streaming ಮತ್ತು execution reordering ಎರಡರ ಮೂಲಕವೂ ಉಳಿಯುವ ID-ಆಧಾರಿತ correlation ಇಲ್ಲದೆ, ಒಂದೂ host Tokyo ya ಹವಾಮಾನವನ್ನೂ Bengaluru ya call ಗೆ ಸುಲಭವಾಗಿ ಜೋಡಿಸಬಹುದು.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production LLM SDK clients genuinely maintain exactly this kind of per-call-ID accumulator internally when handling streamed tool-call responses from OpenAI, Anthropic, or Gemini.',
      bodyKn: 'Production LLM SDK clients OpenAI, Anthropic, ಅಥವಾ Gemini ಇಂದ streamed tool-call responses ನಿರ್ವಹಿಸುವಾಗ ಆಂತರಿಕವಾಗಿ ನಿಜವಾಗಿ ಇದೇ ರೀತಿಯ per-call-ID accumulator ನಿರ್ವಹಿಸುತ್ತಾರೆ.' } },

    { type: 'diagram', data: {
      headingEn: 'Two Independent Layers of Reordering', headingKn: 'ಎರಡೂ ಸ್ವತಂತ್ರ Reordering ಪದರಗಳು',
      mermaidCode: 'flowchart TD\n  A[Stream fragments interleave: A,B,C,A,C,B] --> B[Argument completion order: A, C, B]\n  B --> C[Executor dispatch per finish event]\n  C --> D[Result completion order: B, C, A]\n  D --> E["Every result still tagged with its own tool_call_id"]',
      captionEn: 'Genuinely observed in this lesson: the stream, the argument-completion order, and the result order were three DIFFERENT sequences, yet correlation never broke.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಗಮನಿಸಲಾಗಿದೆ: stream, argument-completion order, result order ಮೂರೂ ಬೇರೆ ಅನುಕ್ರಮಗಳು, ಆದರೂ correlation ಎಂದಿಗೂ ಮುರಿಯಲಿಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'Why Early Execution Overlaps Model Streaming With Tool Latency', headingKn: 'Early Execution Model Streaming ಮತ್ತು Tool Latency ಅನ್ನೂ ಏಕೆ ಅತಿಕ್ರಮಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: call_A\'s executor was submitted to the pool the moment its own arguments completed, without waiting for call_B or call_C to finish streaming. This means tool execution time for A overlaps with the remaining time spent streaming B and C\'s arguments, rather than all three tool calls starting only after the entire stream ends.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: call_A ya executor ಅದೂ ya ಸ್ವಂತ arguments ಪೂರ್ಣಗೊಂಡ ತಕ್ಷಣ pool ಗೆ ಸಲ್ಲಿಸಲಾಯಿತು, call_B ಅಥವಾ call_C streaming ಮುಗಿಸುವವರೆಗೂ ಕಾಯದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 2', captionKn: 'Part 2 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nToolCallState|One buffer + completion flag per call ID\nStreamAccumulator|The dict of ToolCallState keyed by call ID, routing every chunk\nParse-early trap|Attempting json.loads() before a call's arguments are complete\nEarly execution|Starting a completed call's executor without waiting for other in-flight calls" } },

    { type: 'concept', data: {
      headingEn: 'Preview: Part 3 Runs the Full Proof', headingKn: 'ಪೂರ್ವವೀಕ್ಷಣೆ: Part 3 ಪೂರ್ಣ ಸಾಕ್ಷ್ಯ ಚಲಾಯಿಸುತ್ತದೆ',
      bodyEn: 'Part 3 will connect this lesson\'s streaming proof back to Part 1\'s latency measurement, tracing a single combined run through sequential timing, parallel timing, and the full interleaved-stream reconstruction, with a final failure-mode checklist.',
      bodyKn: 'Part 3 ಈ lesson ya streaming ಸಾಕ್ಷ್ಯವನ್ನೂ Part 1 ya latency ಮಾಪನಕ್ಕೆ ಮತ್ತೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What genuine error did json.loads(\'{"city":"Ben\') produce?', qKn: 'json.loads(\'{"city":"Ben\') ಯಾವ ನಿಜ ದೋಷ ಉತ್ಪಾದಿಸಿತು?',
        opts: ['JSONDecodeError: Unterminated string starting at...', 'No error', 'KeyError', 'TypeError'], correct: 0,
        optsKn: ['JSONDecodeError: Unterminated string starting at...', 'ಯಾವುದೇ ದೋಷವಿಲ್ಲ', 'KeyError', 'TypeError'] },
      { q: 'Genuinely confirmed: in what order did argument-completion happen for the 3 calls?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 3 calls ಗಾಗಿ argument-completion ಯಾವ ಕ್ರಮದಲ್ಲಿ ಸಂಭವಿಸಿತು?',
        opts: ['call_A, call_C, call_B', 'call_A, call_B, call_C', 'call_C, call_B, call_A', 'All simultaneously'], correct: 0,
        optsKn: ['call_A, call_C, call_B', 'call_A, call_B, call_C', 'call_C, call_B, call_A', 'ಎಲ್ಲಾ ಏಕಕಾಲದಲ್ಲಿ'] },
      { q: 'Genuinely confirmed: in what order did the TOOL RESULTS complete?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: TOOL RESULTS ಯಾವ ಕ್ರಮದಲ್ಲಿ ಪೂರ್ಣಗೊಂಡವು?',
        opts: ['call_B, call_C, call_A -- different from argument-completion order', 'Same as argument-completion order', 'Reverse alphabetical always', 'Random and unrecoverable'], correct: 0,
        optsKn: ['call_B, call_C, call_A -- argument-completion order ಇಂದ ಭಿನ್ನ', 'argument-completion order ನಂತೆಯೇ', 'ಯಾವಾಗಲೂ ಹಿಮ್ಮುಖ ಅಕ್ಷರಾನುಕ್ರಮ', 'ಯಾದೃಚ್ಛಿಕ ಮತ್ತು ಚೇತರಿಸಲಾಗದ'] },
      { q: 'What genuinely happened when add_arguments() was called with an unregistered call_id?', qKn: 'ನೋಂದಾಯಿಸದ call_id ಜೊತೆ add_arguments() ಕರೆದಾಗ ನಿಜವಾಗಿ ಏನಾಯಿತು?',
        opts: ['KeyError was raised', 'A new call was silently created', 'It was ignored', 'It returned None'], correct: 0,
        optsKn: ['KeyError ಎಬ್ಬಿಸಲಾಯಿತು', 'ಒಂದೂ ಹೊಸ call ಮೌನವಾಗಿ ರಚಿಸಲಾಯಿತು', 'ಇದೂ ನಿರ್ಲಕ್ಷಿಸಲಾಯಿತು', 'ಇದೂ None ಹಿಂತಿರುಗಿಸಿತು'] },
      { q: 'Why is json.loads() only called inside finish_call(), never inside add_arguments()?', qKn: 'json.loads() ಏಕೆ finish_call() ಒಳಗೆ ಮಾತ್ರ ಕರೆಯಲಾಗುತ್ತದೆ, add_arguments() ಒಳಗೆ ಎಂದಿಗೂ ಇಲ್ಲ?',
        opts: ['Because partial argument buffers are usually incomplete JSON until the call is finished', 'Because add_arguments() cannot access json', 'Because finish_call() is faster', 'Because it is a stylistic preference with no functional reason'], correct: 0,
        optsKn: ['ಏಕೆಂದರೆ call ಮುಗಿಯುವವರೆಗೂ partial argument buffers ಸಾಮಾನ್ಯವಾಗಿ ಅಪೂರ್ಣ JSON', 'ಏಕೆಂದರೆ add_arguments() json ಪ್ರವೇಶಿಸಲಾಗುವುದಿಲ್ಲ', 'ಏಕೆಂದರೆ finish_call() ವೇಗವಾಗಿದೆ', 'ಏಕೆಂದರೆ ಇದೂ ಯಾವುದೇ ಕ್ರಿಯಾತ್ಮಕ ಕಾರಣವಿಲ್ಲದ ಶೈಲಿ'] },
    ] } },
  ],
};
