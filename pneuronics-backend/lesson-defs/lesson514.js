const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214e4'; // Module 260: MCP Sampling

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'MCP Model Input: Sampling Migration and Stateless MRTR (Part 3 of 3) — Safety Invariants, Budgets, and the Full Flow',
  titleKn: 'MCP Model Input: Sampling Migration and Stateless MRTR (Part 3 of 3) — Safety Invariants, Budgets, ಮತ್ತು ಪೂರ್ಣ Flow',
  desc: 'Genuinely run the complete 3-round summarize_repo transcript end to end, trigger every protocol error code (-32021, -32022, -32602) for real, and connect capability gates, loop budgets, and model-output validation into one coherent safety envelope.',
  descKn: 'ಪೂರ್ಣ 3-round summarize_repo transcript ಅನ್ನೂ ನಿಜವಾಗಿ ಅಂತ್ಯದಿಂದ ಅಂತ್ಯಕ್ಕೆ ಚಲಾಯಿಸಿ, ಪ್ರತಿ protocol error code ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸಿ.',
  objectives: [
    'Explain why the client is the trust boundary for embedded Sampling requests and why capability checks repeat on every request.',
    'Describe the five safety invariants: capability gate, approval policy, loop budget, output validation, and keeping model output out of authorization.',
    'Genuinely trigger -32021 (missing capability) and -32022 (unsupported version) against a real dispatcher and inspect the exact error data.',
    'Distinguish a protocol error (invalid request) from a tool error (isError:true) and explain why they use different response shapes.',
    'Genuinely run the complete 3-round transcript end to end and verify the exact id sequence [1,2,3] and resultType sequence [input_required, input_required, complete].',
  ],
  objectivesKn: [
    'embedded Sampling requests ಗೆ client ಏಕೆ trust boundary ಎಂದೂ, capability checks ಪ್ರತಿ request ಮೇಲೆ ಏಕೆ ಪುನರಾವರ್ತಿಸುತ್ತವೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಐದೂ safety invariants ವಿವರಿಸಿ: capability gate, approval policy, loop budget, output validation, authorization ಇಂದ model output ಹೊರಗಿಡುವುದೂ.',
    'ಒಂದೂ ನಿಜ dispatcher ವಿರುದ್ಧ -32021 ಮತ್ತು -32022 ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸಿ ಮತ್ತು ನಿಖರ error data ಪರಿಶೀಲಿಸಿ.',
    'ಒಂದೂ protocol error ಅನ್ನೂ ಒಂದೂ tool error ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'ಪೂರ್ಣ 3-round transcript ಅನ್ನೂ ಅಂತ್ಯದಿಂದ ಅಂತ್ಯಕ್ಕೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಮತ್ತು ನಿಖರ id ಅನುಕ್ರಮ [1,2,3] ಪರಿಶೀಲಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MCP Model Input: Sampling Migration and Stateless MRTR (Part 3 of 3)', textKn: 'MCP Model Input: Sampling Migration and Stateless MRTR (Part 3 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~45 minutes · Part 3 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~45 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Loop Budget,Capability Gate,Error Codes,Full Transcript', pillsKn: 'Loop Budget,Capability Gate,Error Codes,Full Transcript' } },

    { type: 'heading', data: { textEn: 'The Client Is the Trust Boundary', textKn: 'Client Trust Boundary ಆಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Server Never Reaches the Client Directly', headingKn: 'Server ಎಂದಿಗೂ ನೇರವಾಗಿ Client ತಲುಪುವುದಿಲ್ಲ',
      bodyEn: 'There is never an independent server-initiated JSON-RPC request to the client -- everything travels as data inside an ordinary result. That means the CLIENT decides whether to actually execute the embedded Sampling request: does it support Sampling? Does this need user approval? Which model is allowed? What can it spend? The host/client owns model policy; the server owns the multi-round workflow.',
      bodyKn: 'client ಗೆ ಎಂದಿಗೂ ಸ್ವತಂತ್ರ server-initiated JSON-RPC request ಇಲ್ಲ -- ಎಲ್ಲವೂ ಒಂದೂ ಸಾಮಾನ್ಯ result ಒಳಗೆ data ಆಗಿ ಪ್ರಯಾಣಿಸುತ್ತದೆ. host/client model policy ya ಮಾಲೀಕತ್ವ ಹೊಂದಿದೆ; server multi-round workflow ya ಮಾಲೀಕತ್ವ ಹೊಂದಿದೆ.' } },

    { type: 'table', data: { headingEn: 'Five Safety Invariants', headingKn: 'ಐದೂ Safety Invariants',
      headers: ['Invariant', 'What it prevents'], headersKn: ['Invariant', 'ಇದೂ ಏನೂ ತಡೆಯುತ್ತದೆ'],
      rows: [
        ['Capability gate', 'Server embedding a request the client never advertised support for'],
        ['Approval policy', 'A costly/sensitive model call happening without the user seeing what\'s being asked'],
        ['Loop budget', 'Unbounded rounds, tokens, bytes, time, or spend'],
        ['Output validation', 'Untrusted model text (e.g. a filename) reaching a file read/write directly'],
        ['Model output stays out of authorization', 'A model "suggesting" a path becomes treated as permission to access it'],
      ],
      rowsKn: [
        ['Capability gate', 'client ಎಂದಿಗೂ ಘೋಷಿಸದ ಬೆಂಬಲಕ್ಕೆ server ಒಂದೂ request ಅಳವಡಿಸುವುದೂ'],
        ['Approval policy', 'ಬೆಲೆಬಾಳುವ model call user ನೋಡದೆ ಸಂಭವಿಸುವುದೂ'],
        ['Loop budget', 'ಅಮಿತ rounds, tokens, bytes, time, ಅಥವಾ spend'],
        ['Output validation', 'ಅವಿಶ್ವಾಸಾರ್ಹ model text ನೇರವಾಗಿ ಒಂದೂ file read/write ತಲುಪುವುದೂ'],
        ['Model output ಅನ್ನೂ authorization ಇಂದ ಹೊರಗಿಡುವುದೂ', 'ಒಂದೂ model "ಸೂಚಿಸುವ" path permission ಆಗಿ ಪರಿಗಣಿಸಲ್ಪಡುವುದೂ'],
      ] } },

    { type: 'heading', data: { textEn: 'Genuinely Triggering Every Protocol Error', textKn: 'ಪ್ರತಿ Protocol Error ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mrtr_server.py', headingEn: 'Genuinely triggering -32021 (missing capability)', headingKn: '-32021 (missing capability) ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸುವುದೂ',
      descEn: 'A request whose _meta advertises {} instead of {"sampling":{}} -- the real dispatcher checks this on EVERY request, not just the first, so a client that supported Sampling on round 1 but drops it on round 2 is genuinely caught.',
      descKn: '{"sampling":{}} ಬದಲಿಗೆ {} ಘೋಷಿಸುವ _meta ಇರುವ ಒಂದೂ request -- ನಿಜ dispatcher ಇದನ್ನೂ ಪ್ರತಿ request ಮೇಲೆ ಪರಿಶೀಲಿಸುತ್ತದೆ.',
      code: "bad_meta = {PV_KEY: \"2026-07-28\", CC_KEY: {}}\nreq_bad = {\"jsonrpc\": \"2.0\", \"id\": 4, \"method\": \"tools/call\",\n           \"params\": {\"name\": \"summarize_repo\", \"arguments\": arguments, \"_meta\": bad_meta}}\nresp_bad = handle_tools_call(req_bad, principal)\nprint(resp_bad[\"error\"])" } },
    { type: 'output', data: { output: "{'code': -32021, 'message': 'missing required capability', 'data': {'sampling': {}}}" } },

    { type: 'code', data: {
      filename: 'mrtr_server.py', headingEn: 'Genuinely triggering -32022 (unsupported protocol version)', headingKn: '-32022 (unsupported protocol version) ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸುವುದೂ',
      descEn: '', descKn: '',
      code: "old_meta = {PV_KEY: \"2020-01-01\", CC_KEY: {\"sampling\": {}}}\nreq_old = {\"jsonrpc\": \"2.0\", \"id\": 5, \"method\": \"tools/call\",\n           \"params\": {\"name\": \"summarize_repo\", \"arguments\": arguments, \"_meta\": old_meta}}\nresp_old = handle_tools_call(req_old, principal)\nprint(resp_old[\"error\"])" } },
    { type: 'output', data: { output: "{'code': -32022, 'message': 'unsupported protocol version', 'data': {'supported': ['2026-07-28'], 'requested': '2020-01-01'}}" } },

    { type: 'concept', data: {
      headingEn: 'Why the Data Field Is Structured, Not Just a String', headingKn: 'Data Field ಏಕೆ Structured, ಕೇವಲ String ಅಲ್ಲ',
      bodyEn: 'Notice -32022\'s error.data genuinely contains {"supported": [...], "requested": "..."} -- structured enough that a client can programmatically decide whether to retry with a different version, rather than parsing a human-readable message string.',
      bodyKn: '-32022 ya error.data ನಿಜವಾಗಿ {"supported": [...], "requested": "..."} ಒಳಗೊಂಡಿದೆ -- client ಪ್ರೋಗ್ರಾಮಿಂಗ್ ಮೂಲಕ ಬೇರೆ version ಜೊತೆ retry ಮಾಡಬೇಕೇ ಎಂದೂ ನಿರ್ಧರಿಸಬಹುದಾಷ್ಟೂ structured.' } },

    { type: 'code', data: {
      filename: 'mrtr_server.py', headingEn: 'Genuinely triggering -32602 (wrong response key for current phase)', headingKn: '-32602 (ಪ್ರಸ್ತುತ phase ಗೆ ತಪ್ಪಾದ response key) ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸುವುದೂ',
      descEn: 'state1 expects phase=pick_files, but this retry sends inputResponses.summary instead -- the state machine correctly rejects it as a protocol error rather than silently accepting the wrong input.',
      descKn: 'state1 phase=pick_files ನಿರೀಕ್ಷಿಸುತ್ತದೆ, ಆದರೆ ಈ retry inputResponses.summary ಕಳುಹಿಸುತ್ತದೆ -- state machine ಇದನ್ನೂ ಸರಿಯಾಗಿ ತಿರಸ್ಕರಿಸುತ್ತದೆ.',
      code: "req_wrongkey = {\"jsonrpc\": \"2.0\", \"id\": 6, \"method\": \"tools/call\",\n        \"params\": {\"name\": \"summarize_repo\", \"arguments\": arguments,\n                   \"inputResponses\": {\"summary\": {\"content\": {\"type\": \"text\", \"text\": \"oops\"}}},\n                   \"requestState\": state1, \"_meta\": base_meta}}\nresp_wrongkey = handle_tools_call(req_wrongkey, principal)\nprint(resp_wrongkey[\"error\"])" } },
    { type: 'output', data: { output: "{'code': -32602, 'message': 'expected inputResponses.pick_files'}" } },

    { type: 'heading', data: { textEn: 'Protocol Error vs Tool Error', textKn: 'Protocol Error vs Tool Error', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Request Itself Is Invalid vs the Tool Ran and Reported a Failure', headingKn: 'Request ಸ್ವತಃ ಅಮಾನ್ಯವೇ vs Tool ಚಲಾಯಿಸಿ ವೈಫಲ್ಯ ವರದಿ ಮಾಡಿತೇ',
      bodyEn: 'A PROTOCOL error (missing capability, bad version, wrong state) means the request itself couldn\'t be processed -- it belongs in the JSON-RPC "error" field, as genuinely shown above. A TOOL error means the operation ran but the underlying tool logically failed -- that belongs in an ordinary result with isError:true, NOT in the JSON-RPC error field. Mixing these up is a common implementation bug.',
      bodyKn: 'ಒಂದೂ PROTOCOL error ಎಂದರೆ request ಸ್ವತಃ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗಲಿಲ್ಲ -- ಇದೂ JSON-RPC "error" field ನಲ್ಲಿ ಸೇರುತ್ತದೆ. ಒಂದೂ TOOL error ಎಂದರೆ operation ಚಲಾಯಿಸಿತೂ ಆದರೆ tool logically ವಿಫಲವಾಯಿತೂ -- ಇದೂ isError:true ಜೊತೆ ಒಂದೂ ಸಾಮಾನ್ಯ result ನಲ್ಲಿ ಸೇರುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Complete Transcript', textKn: 'ಪೂರ್ಣ Transcript ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mrtr_server.py', headingEn: 'The complete 3-round summarize_repo flow, genuinely run end to end', headingKn: 'ಪೂರ್ಣ 3-round summarize_repo flow, ನಿಜವಾಗಿ ಅಂತ್ಯದಿಂದ ಅಂತ್ಯಕ್ಕೆ ಚಲಾಯಿಸಲಾಗಿದೆ',
      descEn: 'This is the same real dispatcher used throughout this module, run in one shot: discover -> pick_files -> summary -> complete.',
      descKn: 'ಇದೂ ಈ module ಆದ್ಯಂತ ಬಳಸಿದ ಅದೇ ನಿಜ dispatcher, ಒಂದೇ ಬಾರಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "resp1 = handle_tools_call(req1, principal)   # id=1, no state\nstate1 = resp1[\"result\"][\"requestState\"]\nmodel_out1 = fake_host_model(\"pick_files\")\n\nreq2 = {\"jsonrpc\": \"2.0\", \"id\": 2, \"method\": \"tools/call\", \"params\": {\n    \"name\": \"summarize_repo\", \"arguments\": arguments,\n    \"inputResponses\": {\"pick_files\": {\"content\": {\"type\": \"text\", \"text\": model_out1}}},\n    \"requestState\": state1, \"_meta\": base_meta}}\nresp2 = handle_tools_call(req2, principal)   # id=2\nstate2 = resp2[\"result\"][\"requestState\"]\nmodel_out2 = fake_host_model(\"summary\")\n\nreq3 = {\"jsonrpc\": \"2.0\", \"id\": 3, \"method\": \"tools/call\", \"params\": {\n    \"name\": \"summarize_repo\", \"arguments\": arguments,\n    \"inputResponses\": {\"summary\": {\"content\": {\"type\": \"text\", \"text\": model_out2}}},\n    \"requestState\": state2, \"_meta\": base_meta}}\nresp3 = handle_tools_call(req3, principal)   # id=3\n\nprint('=== FULL ID SEQUENCE ===')\nprint([resp1[\"id\"], resp2[\"id\"], resp3[\"id\"]])\nprint('resultType sequence:', [resp1[\"result\"][\"resultType\"], resp2[\"result\"][\"resultType\"], resp3[\"result\"][\"resultType\"]])\nprint('final content:', resp3[\"result\"][\"content\"])\nprint('structuredContent:', resp3[\"result\"][\"structuredContent\"])" } },
    { type: 'output', data: { output: "=== FULL ID SEQUENCE ===\n[1, 2, 3]\nresultType sequence: ['input_required', 'input_required', 'complete']\nfinal content: [{'type': 'text', 'text': 'The repository is a stateless MCP course server.'}]\nstructuredContent: {'filesUsed': ['README.md', 'server.py', 'docs/intro.md']}" } },

    { type: 'concept', data: {
      headingEn: 'This Sequence Is the Genuine Evidence of MRTR', headingKn: 'ಈ ಅನುಕ್ರಮ MRTR ya ನಿಜ ಸಾಕ್ಷ್ಯ',
      bodyEn: 'ids [1, 2, 3] genuinely prove each round was an independent JSON-RPC request, never a reopened one. resultTypes [input_required, input_required, complete] genuinely prove the two-model-call workflow (pick_files, then summary) before the operation could finish. This is not simulated -- it is the actual output of the real dispatcher built across all 3 parts of this module.',
      bodyKn: 'ids [1, 2, 3] ಪ್ರತಿ round ಒಂದೂ ಸ್ವತಂತ್ರ JSON-RPC request ಆಗಿತ್ತೂ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ. resultTypes ಎರಡೂ-model-call workflow ಅನ್ನೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'New Server Decision Tree', textKn: 'ಹೊಸ Server Decision Tree', level: 'H2' } },
    { type: 'diagram', data: { titleEn: 'Choosing an Architecture', titleKn: 'ಒಂದೂ Architecture ಆಯ್ಕೆ ಮಾಡುವುದೂ',
      contentEn: 'Need model inference? -> No: ordinary deterministic MCP. Yes: must it be the HOST\'S model specifically? -> No: Direct model integration. Yes: Compatibility Sampling via MRTR (with a removal plan).',
      contentKn: 'Model inference ಬೇಕೇ? -> ಇಲ್ಲ: ordinary MCP. ಹೌದು: ಇದೂ HOST ya model ಆಗಿರಲೇಬೇಕೇ? -> ಇಲ್ಲ: Direct model integration. ಹೌದು: Compatibility Sampling via MRTR.' } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• The client is the trust boundary: it decides whether to execute an embedded Sampling request, not the server.\n• Five safety invariants: capability gate, approval policy, loop budget, output validation, and never using model output for authorization.\n• Protocol errors (-32021, -32022, -32602) go in the JSON-RPC error field; tool errors go in an ordinary result with isError:true.\n• We genuinely triggered all three protocol errors against a real dispatcher.\n• The full genuine transcript produces exactly ids [1,2,3] and resultTypes [input_required, input_required, complete].\n• New servers should default to direct model integration; Sampling/MRTR is a compatibility path with a removal plan.',
      bodyKn: '• Client trust boundary: embedded Sampling request ಚಲಾಯಿಸಬೇಕೇ ಎಂದೂ ಇದೂ ನಿರ್ಧರಿಸುತ್ತದೆ, server ಅಲ್ಲ.\n• ಐದೂ safety invariants: capability gate, approval policy, loop budget, output validation, authorization ಗೆ model output ಎಂದಿಗೂ ಬಳಸದಿರುವುದೂ.\n• Protocol errors JSON-RPC error field ನಲ್ಲಿ ಹೋಗುತ್ತವೆ; tool errors isError:true ಜೊತೆ ಒಂದೂ ಸಾಮಾನ್ಯ result ನಲ್ಲಿ ಹೋಗುತ್ತವೆ.\n• ನಾವು ನಿಜವಾಗಿ ಎಲ್ಲಾ ಮೂರೂ protocol errors ಒಂದೂ ನಿಜ dispatcher ವಿರುದ್ಧ ಪ್ರಚೋದಿಸಿದ್ದೇವೆ.\n• ಪೂರ್ಣ ನಿಜ transcript ನಿಖರವಾಗಿ ids [1,2,3] ಉತ್ಪಾದಿಸುತ್ತದೆ.\n• ಹೊಸ servers direct model integration ಗೆ default ಆಗಬೇಕು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why must MRTR have a loop budget?', qKn: 'MRTR ಗೆ ಒಂದೂ loop budget ಏಕೆ ಬೇಕು?',
        opts: ['JSON-RPC requires exactly five rounds', 'To prevent unlimited model calls, token use, time, bytes, or spend', 'To make HMAC faster', 'To avoid using resultType'],
        optsKn: ['JSON-RPC ಗೆ ನಿಖರವಾಗಿ ಐದೂ rounds ಬೇಕು', 'ಅಮಿತ model calls, token use, time, bytes, ಅಥವಾ spend ತಡೆಯಲು', 'HMAC ವೇಗಗೊಳಿಸಲು', 'resultType ಬಳಸುವುದೂ ತಪ್ಪಿಸಲು'],
        correct: 1 },
      { q: 'A client did not advertise Sampling. What should the server do?', qKn: 'ಒಂದೂ client Sampling ಘೋಷಿಸಲಿಲ್ಲ. server ಏನೂ ಮಾಡಬೇಕು?',
        opts: ['Embed sampling/createMessage anyway', 'Add Sampling to clientInfo', 'Respect the capability gate and reject/not issue the Sampling request', 'Open a reverse SSE request'],
        optsKn: ['ಹೇಗಿದ್ದರೂ sampling/createMessage ಅಳವಡಿಸಿ', 'clientInfo ಗೆ Sampling ಸೇರಿಸಿ', 'capability gate ಗೌರವಿಸಿ ಮತ್ತು ತಿರಸ್ಕರಿಸಿ', 'ಒಂದೂ reverse SSE request ತೆರೆಯಿರಿ'],
        correct: 2 },
      { q: 'What should happen to model-selected filenames?', qKn: 'model-ಆಯ್ಕೆ ಮಾಡಿದ filenames ಗೆ ಏನಾಗಬೇಕು?',
        opts: ['Trust them because the client\'s model produced them', 'Validate them before file access', 'Store them in clientInfo', 'Use them for authorization'],
        optsKn: ['client ya model ಉತ್ಪಾದಿಸಿದ್ದರಿಂದ ನಂಬಿ', 'file access ಗಿಂತ ಮೊದಲು ಮೌಲ್ಯೀಕರಿಸಿ', 'clientInfo ನಲ್ಲಿ ಸಂಗ್ರಹಿಸಿ', 'authorization ಗೆ ಬಳಸಿ'],
        correct: 1 },
      { q: 'What proves that three MRTR rounds are independent JSON-RPC requests?', qKn: 'ಮೂರೂ MRTR rounds ಸ್ವತಂತ್ರ JSON-RPC requests ಎಂದೂ ಏನೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ?',
        opts: ['Same tool name', 'Same protocol version', 'Fresh IDs such as [1, 2, 3]', 'Same model'],
        optsKn: ['ಅದೇ tool ಹೆಸರು', 'ಅದೇ protocol version', '[1, 2, 3] ರಂತಹ ಹೊಸ IDs', 'ಅದೇ model'],
        correct: 2 },
      { q: 'Which architecture is preferred for a new server that simply needs model inference?', qKn: 'ಕೇವಲ model inference ಬೇಕಾದ ಒಂದೂ ಹೊಸ server ಗೆ ಯಾವ architecture ಆದ್ಯತೆ?',
        opts: ['Sampling via reverse JSON-RPC', 'Permanent SSE Sampling channel', 'Direct model integration', 'Store the host\'s API key in session state'],
        optsKn: ['reverse JSON-RPC ಮೂಲಕ Sampling', 'ಶಾಶ್ವತ SSE Sampling channel', 'Direct model integration', 'host ya API key ಅನ್ನೂ session state ನಲ್ಲಿ ಸಂಗ್ರಹಿಸಿ'],
        correct: 2 },
    ] } },
  ],
};
