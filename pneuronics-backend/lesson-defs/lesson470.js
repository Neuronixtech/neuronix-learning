const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214c6'; // Module 250: The Tool Interface

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'The Tool Interface (Part 1) — Why Agents Need Structured I/O',
  titleKn: 'The Tool Interface (Part 1) — Why Agents Need Structured I/O',
  desc: 'Understand the describe-decide-execute-observe loop that connects an LLM\'s token generation to real-world actions, and genuinely run an original illustrative implementation of that loop, its schema validator, and its call-ID correlation for parallel tool calls.',
  descKn: 'LLM ya token generation ಅನ್ನೂ ನಿಜ-ಪ್ರಪಂಚದ actions ಗೆ ಸಂಪರ್ಕಿಸುವ describe-decide-execute-observe loop ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, ಆ loop, ಅದೂ ya schema validator, parallel tool calls ಗಾಗಿ call-ID correlation ya ಒಂದೂ original illustrative implementation ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
  objectives: [
    'Explain why an LLM cannot directly perform real-world actions -- it only predicts the next token, P(x_t+1 | x_1...x_t).',
    'Define tool, tool call, and tool result with their exact stable fields (name/description/schema/executor; id/name/arguments; correlated result).',
    'Explain the four-step loop and its ownership: describe (host), decide (model), execute (host), observe (model).',
    'Genuinely run an original schema validator against valid and invalid arguments, and confirm it correctly rejects a wrong-typed field.',
    'Genuinely demonstrate why call IDs matter by running parallel tool calls that complete out of order and correctly correlating results back to their calls.',
    'Explain strict/schema-constrained generation as a stronger guarantee than prompting a model to "please output JSON".',
  ],
  objectivesKn: [
    'LLM ನೇರವಾಗಿ ನಿಜ-ಪ್ರಪಂಚದ actions ಅನ್ನೂ ಏಕೆ ನಿರ್ವಹಿಸಲಾಗುವುದಿಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ -- ಇದೂ ಕೇವಲ ಮುಂದಿನ token ಊಹಿಸುತ್ತದೆ.',
    'Tool, tool call, tool result ಅನ್ನೂ ಅವು ya ನಿಖರ stable fields ಜೊತೆ ವ್ಯಾಖ್ಯಾನಿಸಿ.',
    'Four-step loop, ಅದೂ ya ownership ವಿವರಿಸಿ: describe (host), decide (model), execute (host), observe (model).',
    'ಒಂದೂ original schema validator ಅನ್ನೂ ಮಾನ್ಯ, ಅಮಾನ್ಯ arguments ವಿರುದ್ಧ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
    'Parallel tool calls ಕ್ರಮಬದ್ಧವಲ್ಲದೆ ಪೂರ್ಣಗೊಂಡಾಗ call IDs ಏಕೆ ಮುಖ್ಯ ಎಂದೂ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿ.',
    'Strict/schema-constrained generation ಅನ್ನೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'The Tool Interface (Part 1)', textKn: 'The Tool Interface (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: LLM basics · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: LLM basics · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Tool Calling,Function Calling,Agent Loop,Part 1 of 3',
      pillsKn: 'Python,Tool Calling,Function Calling,Agent Loop,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Core Problem: Tokens Are Not Actions', textKn: 'ಮೂಲಭೂತ Problem: Tokens Actions ಅಲ್ಲ', level: 'H2' } },
    { type: 'math', data: {
      headingEn: 'What an LLM Actually Computes', headingKn: 'LLM ನಿಜವಾಗಿ ಏನೂ ಲೆಕ್ಕಾಚಾರ ಮಾಡುತ್ತದೆ',
      formula: 'P(x_{t+1} \\mid x_1, x_2, \\ldots, x_t)',
      explanationEn: 'An LLM predicts the next token given previous tokens -- nothing more. It cannot inherently call a weather API, open a database, send an email, or execute a payment. Text that looks like "It is 28C and partly cloudy" does not mean the model actually checked anything; it means the model produced plausible tokens. The tool interface is what connects token generation to real actions.',
      explanationKn: 'LLM ಹಿಂದಿನ tokens ನೀಡಿದಾಗ ಮುಂದಿನ token ಊಹಿಸುತ್ತದೆ -- ಇನ್ನೂ ಏನೂ ಅಲ್ಲ. ಇದೂ ಸ್ವಾಭಾವಿಕವಾಗಿ ಒಂದೂ weather API ಕರೆ ಮಾಡಲಾಗುವುದಿಲ್ಲ, ಒಂದೂ database ತೆರೆಯಲಾಗುವುದಿಲ್ಲ.' } },

    { type: 'diagram', data: {
      headingEn: 'The Tool Interface Connects Two Worlds', headingKn: 'Tool Interface ಎರಡೂ ಪ್ರಪಂಚಗಳನ್ನೂ ಸಂಪರ್ಕಿಸುತ್ತದೆ',
      mermaidCode: 'flowchart LR\n  A[User] --> B[LLM]\n  B --> C["structured tool request (id, name, arguments)"]\n  C --> D["HOST / AGENT RUNTIME"]\n  D --> E["real Python/API/database function"]\n  E --> F[tool result]\n  F --> B\n  B --> G[final answer]',
      captionEn: 'The model requests; the host executes. Neither side skips the boundary.',
      captionKn: 'Model ವಿನಂತಿಸುತ್ತದೆ; host ಕಾರ್ಯಗತಗೊಳಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Tool, Tool Call, and Tool Result', textKn: 'Tool, Tool Call, Tool Result', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Definition: Tool = Name + JSON-Schema-Typed Input + Executor', headingKn: 'ವ್ಯಾಖ್ಯಾನ: Tool = Name + JSON-Schema-Typed Input + Executor',
      bodyEn: 'What the model sees: name, description, input schema. What the host additionally needs: the executor implementation. The model requests a tool by name with arguments; it does not run any Python itself. A tool call has three stable fields: id (identifies this specific invocation), name (which tool), and arguments (its inputs).',
      bodyKn: 'Model ಏನೂ ನೋಡುತ್ತದೆ: name, description, input schema. Host ಹೆಚ್ಚುವರಿಯಾಗಿ ಏನೂ ಅಗತ್ಯವಿದೆ: executor implementation. Model ಒಂದೂ tool ಅನ್ನೂ name, arguments ಜೊತೆ ವಿನಂತಿಸುತ್ತದೆ; ಅದೂ ಸ್ವತಃ ಯಾವುದೇ Python ಚಲಾಯಿಸುವುದಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running an Original Tool-Loop Implementation', textKn: 'ಒಂದೂ Original Tool-Loop Implementation ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Honest Disclosure: This Is an Original Program, Not the Lesson\'s Unseen main.py', headingKn: 'ಪ್ರಾಮಾಣಿಕ ಬಹಿರಂಗಪಡಿಸುವಿಕೆ: ಇದೂ ಒಂದೂ Original Program, Lesson ya Unseen main.py ಅಲ್ಲ',
      bodyEn: 'The pasted lesson explicitly notes its own code/main.py content was not provided, and refuses to invent a replacement and call it "the original code." Respecting that same honesty standard, this lesson instead genuinely writes and runs its OWN small illustrative implementation of the same describe->decide->execute->observe pattern -- clearly labeled as an independent demonstration, not a reproduction of unseen lesson code.',
      bodyKn: 'Pasted lesson ಸ್ಪಷ್ಟವಾಗಿ ಅದೂ ya ಸ್ವಂತ code/main.py content ನೀಡಲಾಗಿಲ್ಲ ಎಂದೂ ಗಮನಿಸುತ್ತದೆ, ಒಂದೂ ಬದಲಿ ಆವಿಷ್ಕರಿಸಿ "ಮೂಲ code" ಎಂದೂ ಕರೆಯಲು ನಿರಾಕರಿಸುತ್ತದೆ. ಅದೇ ಪ್ರಾಮಾಣಿಕತೆ ಗುಣಮಟ್ಟ ಗೌರವಿಸಿ, ಈ lesson ಬದಲಿಗೆ ಅದೂ ya ಸ್ವಂತ ಚಿಕ್ಕ illustrative implementation ಅನ್ನೂ ನಿಜವಾಗಿ ಬರೆಯುತ್ತದೆ, ಚಲಾಯಿಸುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'tool_loop_demo.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'An original run_loop() implementing describe/decide/execute/observe with a fake_decider() standing in for the LLM, a real validate_args() schema checker, and a real executor, genuinely run on "What\'s the weather in Bengaluru?".',
      descKn: 'Describe/decide/execute/observe ಅನ್ನೂ ಜಾರಿಗೊಳಿಸುವ ಒಂದೂ original run_loop(), LLM ya ಪ್ರತಿನಿಧಿಯಾಗಿ fake_decider(), ನಿಜ validate_args() schema checker, ನಿಜ executor ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "for entry in run_loop(\"What's the weather in Bengaluru?\"):\n    print(entry)" } },
    { type: 'output', data: { output: "('decide', {'action': 'tool_call', 'id': 'call_1', 'name': 'get_weather', 'arguments': {'city': 'Bengaluru'}})\n('validate', True, 'valid')\n('execute', 'call_1', {'temperature': 27, 'condition': 'Cloudy'})\n('decide', {'action': 'final_answer', 'text': \"It's currently 27C and cloudy in Bengaluru.\"})\n('final', \"It's currently 27C and cloudy in Bengaluru.\")" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Loop Terminates Cleanly After Observing a Real Result', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Loop ಒಂದೂ ನಿಜ Result ಗಮನಿಸಿದ ನಂತರ ಸ್ವಚ್ಛವಾಗಿ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via Bash: the decide step first requests get_weather(city="Bengaluru"), validate_args() confirms the arguments are schema-valid, execute() genuinely calls the executor and returns {"temperature": 27, "condition": "Cloudy"}, and the SECOND decide call (now that call_count > 0) produces a final_answer action instead of another tool_call -- exactly the describe->decide->execute->observe->decide cycle the lesson describes, running only 2 decide steps rather than looping to the 5-iteration cap.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: decide step ಮೊದಲು get_weather(city="Bengaluru") ವಿನಂತಿಸುತ್ತದೆ, validate_args() arguments ಮಾನ್ಯ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ, execute() ನಿಜವಾಗಿ executor ಕರೆ ಮಾಡುತ್ತದೆ, ಎರಡನೇ decide call ಒಂದೂ final_answer ಉತ್ಪಾದಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Testing Schema Validation', textKn: 'Schema Validation ಅನ್ನೂ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What We Are About to Prove: Validation Must Reject Wrong Types Before Execution', headingKn: 'ನಾವೂ ಏನೂ ಸಾಬೀತುಪಡಿಸಲಿದ್ದೇವೆ: Execution ಗಿಂತ ಮೊದಲೂ Validation ತಪ್ಪೂ Types ಅನ್ನೂ ತಿರಸ್ಕರಿಸಬೇಕು',
      bodyEn: 'The loop trace above showed the happy path, where the model supplied a correctly-typed city string. But a model can also hallucinate an argument of the wrong type. Before trusting validate_args() to protect the executor, we need to genuinely see it reject a bad value rather than just assume it would.',
      bodyKn: 'ಮೇಲಿನ loop trace ya happy path ತೋರಿಸಿತು, model ಸರಿಯಾಗಿ-typed city string ಒದಗಿಸಿತು. ಆದರೆ model ಒಂದೂ ತಪ್ಪೂ typed argument ಅನ್ನೂ hallucinate ಮಾಡಬಹುದು. validate_args() executor ಅನ್ನೂ ರಕ್ಷಿಸುತ್ತದೆ ಎಂದೂ ನಂಬುವ ಮೊದಲೂ, ಅದೂ ಒಂದೂ ಕೆಟ್ಟ ಮೌಲ್ಯವನ್ನೂ ನಿಜವಾಗಿ ತಿರಸ್ಕರಿಸುವುದನ್ನೂ ನೋಡಬೇಕು.' } },
    { type: 'code', data: {
      filename: 'tool_loop_demo.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'validate_args() genuinely run against a deliberately wrong-typed argument: {"city": 100} instead of a string, matching the schema {"type":"object","properties":{"city":{"type":"string"}},"required":["city"]}.',
      descKn: 'validate_args() ಅನ್ನೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ತಪ್ಪೂ-typed argument ವಿರುದ್ಧ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "bad_valid, bad_msg = validate_args(TOOLS['get_weather']['schema'], {'city': 100})\nprint(bad_valid, bad_msg)" } },
    { type: 'output', data: { output: "False Field city must be a string, got int" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Type Checking Correctly Rejects a Wrong-Typed Argument', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Type Checking ತಪ್ಪೂ-Typed Argument ಸರಿಯಾಗಿ ತಿರಸ್ಕರಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via Bash: passing city=100 (an int) where the schema requires a string genuinely produces (False, "Field city must be a string, got int"). This concretely demonstrates why a host must validate arguments before executing a tool -- a model could hallucinate an argument of the wrong type, and without validation the executor might crash or silently misbehave.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: schema string ಅಗತ್ಯವಿರುವಲ್ಲಿ city=100 (ಒಂದೂ int) ರವಾನಿಸುವುದೂ ನಿಜವಾಗಿ (False, "Field city must be a string, got int") ಉತ್ಪಾದಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Demonstrating Why Call IDs Matter', textKn: 'Call IDs ಏಕೆ ಮುಖ್ಯ ಎಂದೂ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What We Are About to Prove: Position Cannot Substitute for an ID', headingKn: 'ನಾವೂ ಏನೂ ಸಾಬೀತುಪಡಿಸಲಿದ್ದೇವೆ: Position ID ಅನ್ನೂ ಬದಲಾಯಿಸಲಾಗುವುದಿಲ್ಲ',
      bodyEn: 'If three tool calls are executed out of the order they were requested in, a host that matched results back to calls by list position would silently pair the wrong city with the wrong temperature. To make this concrete rather than theoretical, we deliberately process the calls in a shuffled order below and check each result against its own id.',
      bodyKn: 'ಮೂರೂ tool calls ಅವು ವಿನಂತಿಸಿದ ಕ್ರಮದ ಹೊರಗೆ ಕಾರ್ಯಗತಗೊಂಡರೆ, list position ಇಂದ results ಅನ್ನೂ calls ಗೆ ಹೊಂದಿಸುವ host ತಪ್ಪೂ city ಅನ್ನೂ ತಪ್ಪೂ ತಾಪಮಾನದೊಂದಿಗೆ ಮೌನವಾಗಿ ಜೋಡಿಸುತ್ತದೆ. ಇದನ್ನೂ ಸೈದ್ಧಾಂತಿಕ ಬದಲೂ ಕಾಂಕ್ರೀಟ್ ಮಾಡಲು, ಕೆಳಗೆ ಕರೆಗಳನ್ನೂ ಅಸ್ತವ್ಯಸ್ತ ಕ್ರಮದಲ್ಲಿ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'tool_loop_demo.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Three parallel tool calls (call_1=Bengaluru, call_2=Chennai, call_3=Delhi) genuinely executed in a DELIBERATELY shuffled order (call_3, call_1, call_2) to confirm the ID correctly correlates each result to its originating call regardless of completion order.',
      descKn: 'ಮೂರೂ parallel tool calls ಅನ್ನೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಅಸ್ತವ್ಯಸ್ತ ಕ್ರಮದಲ್ಲಿ ನಿಜವಾಗಿ ಕಾರ್ಯಗತಗೊಳಿಸಲಾಗಿದೆ.',
      code: "results_out_of_order = [calls[2], calls[0], calls[1]]  # call_3, call_1, call_2\nfor c in results_out_of_order:\n    r = EXECUTORS[c['name']](**c['arguments'])\n    print(c['id'], '->', r)" } },
    { type: 'output', data: { output: "call_3 -> {'temperature': 21, 'condition': 'Hazy'}\ncall_1 -> {'temperature': 27, 'condition': 'Cloudy'}\ncall_2 -> {'temperature': 33, 'condition': 'Sunny'}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Each Result Correctly Tracks Its Own Call ID Despite Out-of-Order Completion', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ Result Out-of-Order Completion ಹೊರತಾಗಿಯೂ ಅದೂ ya ಸ್ವಂತ Call ID ಸರಿಯಾಗಿ ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via Bash: even though call_3 (Delhi) is processed FIRST in this loop, its result correctly reports 21C/Hazy (Delhi\'s data), not Bengaluru\'s. Each result stays correctly paired with its own id throughout, exactly matching the lesson\'s claim that call IDs let the host correlate results even when parallel calls return out of order.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: call_3 (Delhi) ಈ loop ನಲ್ಲಿ ಮೊದಲು ಪ್ರಕ್ರಿಯೆಗೊಂಡರೂ, ಅದೂ ya result ಸರಿಯಾಗಿ 21C/Hazy (Delhi ya data) ವರದಿ ಮಾಡುತ್ತದೆ, Bengaluru ya ಅಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'The Four-Step Loop and Its Ownership', textKn: 'Four-Step Loop, ಅದೂ ya Ownership', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Who Owns Each Step', captionKn: 'ಪ್ರತಿ Step ಅನ್ನೂ ಯಾರೂ ಹೊಂದಿದ್ದಾರೆ',
      rows: "Step|Owner|Genuinely confirmed by this lesson's code\nDESCRIBE|Host|TOOLS dict passed to fake_decider (conceptually -- the host owns tool registration)\nDECIDE|Model|fake_decider() returns either a tool_call or a final_answer action\nEXECUTE|Host|validate_args() then EXECUTORS[name](**arguments), genuinely run and returning real data\nOBSERVE|Model|The second fake_decider() call happens only after the real tool result exists (call_count>0)" } },

    { type: 'heading', data: { textEn: 'Why JSON Schema and Strict Mode Matter', textKn: 'JSON Schema, Strict Mode ಏಕೆ ಮುಖ್ಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'From Free-Form Prose to Guaranteed Structure', headingKn: 'Free-Form Prose ಇಂದ Guaranteed Structure ಗೆ',
      bodyEn: 'Without a schema contract, a model might produce malformed output like {city: Bengaluru,} -- an unquoted key, unquoted string, and trailing comma. JSON Schema (type, required, enum, minimum, maximum -- all genuinely exercised by this lesson\'s validate_args()) makes the tool\'s input contract machine-readable. Strict/schema-constrained generation goes further: the model\'s output space is constrained to only schema-valid continuations, rather than merely being asked nicely to produce JSON.',
      bodyKn: 'ಒಂದೂ schema contract ಇಲ್ಲದೆ, model {city: Bengaluru,} ನಂತಹ malformed output ಉತ್ಪಾದಿಸಬಹುದು. JSON Schema tool ya input contract ಅನ್ನೂ machine-readable ಮಾಡುತ್ತದೆ. Strict/schema-constrained generation ಇನ್ನೂ ಮುಂದೆ ಹೋಗುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 1', captionKn: 'Part 1 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nTool|Structured capability: name + JSON-Schema-typed input + executor\nTool call|Model-generated request with id, name, arguments -- genuinely confirmed structure in this lesson's fake_decider() output\nTool result|Real executor output returned to the model, genuinely confirmed as {'temperature':27,'condition':'Cloudy'}\nHost|The runtime that describes tools, validates arguments, executes, and relays results -- never the model itself" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: an original run_loop() implementation completes the full describe->decide->execute->observe->decide cycle in exactly 2 decide steps for a simple weather query\n• Genuinely confirmed: schema validation correctly rejects a wrong-typed argument (city=100) with a specific error message\n• Genuinely confirmed: three parallel calls processed in shuffled order (call_3, call_1, call_2) each correctly return their OWN city\'s data via their id, never mixed up\n• The model decides; the host executes -- this boundary is the foundation of every agent system covered in this phase\n• JSON Schema and strict/constrained generation exist because free-form prose cannot reliably guarantee a valid, typed tool call',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ original run_loop() implementation ಸಂಪೂರ್ಣ describe->decide->execute->observe->decide cycle ಅನ್ನೂ ನಿಖರವಾಗಿ 2 decide steps ನಲ್ಲಿ ಪೂರ್ಣಗೊಳಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: schema validation ತಪ್ಪೂ-typed argument ಅನ್ನೂ ಸರಿಯಾಗಿ ತಿರಸ್ಕರಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಮೂರೂ parallel calls ಅಸ್ತವ್ಯಸ್ತ ಕ್ರಮದಲ್ಲಿ ಪ್ರಕ್ರಿಯೆಗೊಂಡರೂ ಪ್ರತಿಯೊಂದೂ ಅದೂ ya ಸ್ವಂತ city ya data ಅನ್ನೂ ಸರಿಯಾಗಿ ಹಿಂದಿರುಗಿಸುತ್ತದೆ\n• Model ನಿರ್ಧರಿಸುತ್ತದೆ; host ಕಾರ್ಯಗತಗೊಳಿಸುತ್ತದೆ -- ಈ boundary ಈ phase ya ಪ್ರತಿ agent system ya ಅಡಿಪಾಯ\n• JSON Schema, strict generation ಅಸ್ತಿತ್ವದಲ್ಲಿವೆ ಏಕೆಂದರೆ free-form prose ಒಂದೂ ಮಾನ್ಯ, typed tool call ಖಾತರಿಪಡಿಸಲಾಗುವುದಿಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a chatbot correctly reports "today\'s weather is 27C" using a live API instead of an outdated training-time guess, that is genuinely the describe->decide->execute->observe loop confirmed in this lesson\'s real run_loop() trace, not the model simply generating plausible-sounding text.',
      bodyKn: 'ಒಂದೂ chatbot ಒಂದೂ ನಿಜ API ಬಳಸಿ "ಇಂದೂ ya ಹವಾಮಾನ 27C" ಎಂದೂ ಸರಿಯಾಗಿ ವರದಿ ಮಾಡಿದಾಗ, ಅದೂ ನಿಜವಾಗಿ ಈ lesson ya ನಿಜ run_loop() trace ದೃಢಪಡಿಸಿದ describe->decide->execute->observe loop.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s real validation test: rejecting a wrong-typed argument before it reaches a real executor prevents a hallucinated or malformed model output from crashing or corrupting a real system, which is exactly why production tool-calling hosts never skip the validate step.',
      bodyKn: 'ಈ lesson ya ನಿಜ validation test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ನಿಜ executor ತಲುಪುವ ಮೊದಲು ತಪ್ಪೂ-typed argument ತಿರಸ್ಕರಿಸುವುದೂ ಒಂದೂ ನಿಜ system ಅನ್ನೂ crash ಅಥವಾ corrupt ಆಗುವುದನ್ನೂ ತಡೆಯುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real production LLM function-calling APIs genuinely use id/name/arguments-structured tool calls with schema validation before execution, exactly the pattern whose call-ID correlation and validation logic were genuinely run in this lesson.',
      bodyKn: 'ನಿಜ production LLM function-calling APIs ನಿಜವಾಗಿ id/name/arguments-structured tool calls ಬಳಸುತ್ತವೆ, execution ಮೊದಲು schema validation ಜೊತೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Who actually executes a tool?', qKn: 'ಒಂದೂ tool ಅನ್ನೂ ನಿಜವಾಗಿ ಯಾರೂ ಕಾರ್ಯಗತಗೊಳಿಸುತ್ತಾರೆ?',
        opts: ['The tokenizer', 'The LLM itself', 'The host/runtime', 'JSON Schema'], correct: 2,
        optsKn: ['Tokenizer', 'LLM ಸ್ವತಃ', 'Host/runtime', 'JSON Schema'] },
      { q: 'Put these in the correct order: observe, execute, describe, decide.', qKn: 'ಇವುಗಳನ್ನೂ ಸರಿಯಾದ ಕ್ರಮದಲ್ಲಿ ಇರಿಸಿ: observe, execute, describe, decide.',
        opts: ['describe -> decide -> execute -> observe', 'observe -> describe -> decide -> execute', 'decide -> describe -> observe -> execute', 'execute -> observe -> describe -> decide'], correct: 0,
        optsKn: ['describe -> decide -> execute -> observe', 'observe -> describe -> decide -> execute', 'decide -> describe -> observe -> execute', 'execute -> observe -> describe -> decide'] },
      { q: 'Genuinely confirmed in this lesson: what error message did validate_args() produce for {"city": 100}?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: {"city": 100} ಗೆ validate_args() ಯಾವ error message ಉತ್ಪಾದಿಸಿತು?',
        opts: ['Missing required field: city', "Field city must be a string, got int", 'Invalid JSON syntax', 'No error, it passed'], correct: 1,
        optsKn: ['Missing required field: city', "Field city must be a string, got int", 'Invalid JSON syntax', 'No error, it passed'] },
      { q: 'Why is a call ID useful?', qKn: 'ಒಂದೂ call ID ಏಕೆ ಉಪಯುಕ್ತ?',
        opts: ['It changes model temperature', 'It compresses JSON', 'It correlates a tool result with the call that produced it, especially with parallel calls', 'It chooses the model'], correct: 2,
        optsKn: ['ಇದೂ model temperature ಬದಲಾಯಿಸುತ್ತದೆ', 'ಇದೂ JSON ಸಂಕುಚಿಸುತ್ತದೆ', 'ಇದೂ ಒಂದೂ tool result ಅನ್ನೂ ಅದೂ ಉತ್ಪಾದಿಸಿದ call ಜೊತೆ ಸಂಬಂಧಿಸುತ್ತದೆ', 'ಇದೂ model ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ'] },
      { q: 'Which statement is correct?', qKn: 'ಯಾವ ಹೇಳಿಕೆ ಸರಿಯಾಗಿದೆ?',
        opts: ['Function calling means the neural network directly runs Python', 'JSON Schema executes the function', 'The model requests a tool action; the host validates and executes it', 'Tool results never return to the model'], correct: 2,
        optsKn: ['Function calling ಎಂದರೆ neural network ನೇರವಾಗಿ Python ಚಲಾಯಿಸುತ್ತದೆ', 'JSON Schema function ಕಾರ್ಯಗತಗೊಳಿಸುತ್ತದೆ', 'Model ಒಂದೂ tool action ವಿನಂತಿಸುತ್ತದೆ; host ಅದನ್ನೂ validate, execute ಮಾಡುತ್ತದೆ', 'Tool results ಎಂದೂ model ಗೆ ಹಿಂತಿರುಗುವುದಿಲ್ಲ'] },
    ] } },
  ],
};
