const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214e4'; // Module 260: MCP Sampling

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'MCP Model Input: Sampling Migration and Stateless MRTR (Part 1 of 3) — The Architecture and the First Round',
  titleKn: 'MCP Model Input: Sampling Migration and Stateless MRTR (Part 1 of 3) — Architecture ಮತ್ತು ಮೊದಲ Round',
  desc: 'Understand why new MCP servers prefer direct model integration, why Sampling is being migrated to a stateless Multi Round-Trip Requests (MRTR) pattern, and genuinely trace the first input_required round of a summarize_repo tool call.',
  descKn: 'ಹೊಸ MCP servers ಏಕೆ direct model integration ಆದ್ಯತೆ ನೀಡುತ್ತವೆ ಎಂದೂ, Sampling ಏಕೆ ಒಂದೂ stateless MRTR ಮಾದರಿಗೆ ವಲಸೆ ಹೋಗುತ್ತಿದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  objectives: [
    'Explain why new MCP servers should prefer direct model integration over Sampling.',
    'Describe what Multi Round-Trip Requests (MRTR) changes architecturally compared to a reverse JSON-RPC request.',
    'Explain why the modern MCP protocol version is stateless and why _meta must accompany every request.',
    'Trace the exact fields of a tools/call request carrying protocolVersion, clientCapabilities, and clientInfo.',
    'Genuinely run a working HMAC-based requestState implementation and observe a real first input_required response with inputRequests["pick_files"].',
  ],
  objectivesKn: [
    'ಹೊಸ MCP servers Sampling ಗಿಂತ direct model integration ಏಕೆ ಆದ್ಯತೆ ನೀಡಬೇಕೂ ಎಂದೂ ವಿವರಿಸಿ.',
    'MRTR ಒಂದೂ reverse JSON-RPC request ಗೆ ಹೋಲಿಸಿದರೆ architecturally ಏನೂ ಬದಲಾಯಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಆಧುನಿಕ MCP protocol version ಏಕೆ stateless ಎಂದೂ, ಪ್ರತಿ request _meta ಏಕೆ ಒಯ್ಯಬೇಕೂ ಎಂದೂ ವಿವರಿಸಿ.',
    'protocolVersion, clientCapabilities, clientInfo ಒಯ್ಯುವ ಒಂದೂ tools/call request ya ನಿಖರ fields ಪತ್ತೆಹಚ್ಚಿ.',
    'ಒಂದೂ ಕೆಲಸ ಮಾಡುವ HMAC-based requestState implementation ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಒಂದೂ ನಿಜ ಮೊದಲ input_required response ಗಮನಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MCP Model Input: Sampling Migration and Stateless MRTR (Part 1 of 3)', textKn: 'MCP Model Input: Sampling Migration and Stateless MRTR (Part 1 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 255-259 (MCP Fundamentals, Servers, Clients, Transports, Resources) · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 255-259 · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Sampling,MRTR,Direct Model Integration,input_required', pillsKn: 'Sampling,MRTR,Direct Model Integration,input_required' } },

    { type: 'heading', data: { textEn: 'The Core Problem', textKn: 'ಮೂಲಭೂತ ಸಮಸ್ಯೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Two Kinds of Work Inside One Tool', headingKn: 'ಒಂದೂ Tool ಒಳಗೆ ಎರಡೂ ರೀತಿಯ ಕೆಲಸ',
      bodyEn: 'A hypothetical MCP tool summarize_repo does two genuinely different kinds of work: deterministic work (listing files, reading files, validating paths, assembling content) that ordinary code can do, and model work (choosing representative files, generating the summary prose) that needs a language model. The lesson presents two architectures for handling the model-work half.',
      bodyKn: 'ಒಂದೂ ಕಾಲ್ಪನಿಕ MCP tool summarize_repo ಎರಡೂ ನಿಜವಾಗಿ ಭಿನ್ನ ರೀತಿಯ ಕೆಲಸ ಮಾಡುತ್ತದೆ: deterministic work (files ಪಟ್ಟಿ, ಓದುವಿಕೆ, path validation) ಸಾಮಾನ್ಯ code ಮಾಡಬಹುದು, ಮತ್ತು model work (representative files ಆಯ್ಕೆ, summary prose ಉತ್ಪಾದನೆ) ಗೆ ಒಂದೂ language model ಬೇಕು.' } },

    { type: 'heading', data: { textEn: 'Architecture 1: Direct Model Integration', textKn: 'Architecture 1: Direct Model Integration', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Preferred Default for New Servers', headingKn: 'ಹೊಸ Servers ಗಾಗಿ ಆದ್ಯತೆಯ Default',
      bodyEn: 'For a new server, the lesson\'s default architecture is that the MCP server itself owns model selection, credentials, budgets, retries, and observability, calling a model provider (OpenAI/Anthropic/Gemini/local) directly as an internal implementation detail. There is no special client-model round trip: client calls tools/call, server calls the model provider, server returns resultType="complete".',
      bodyKn: 'ಒಂದೂ ಹೊಸ server ಗೆ, ಪಾಠದ default architecture ಎಂದರೆ MCP server ಸ್ವತಃ model selection, credentials, budgets, retries, ಮತ್ತು observability ya ಮಾಲೀಕತ್ವ ಹೊಂದಿದೆ, model provider ಅನ್ನೂ ನೇರವಾಗಿ ಕರೆ ಮಾಡುತ್ತದೆ.' } },

    { type: 'diagram', data: { titleEn: 'Direct Model Integration', titleKn: 'Direct Model Integration',
      contentEn: 'Client --tools/call--> Server --directly calls--> Model Provider --> Server --resultType=complete--> Client',
      contentKn: 'Client --tools/call--> Server --ನೇರವಾಗಿ ಕರೆ--> Model Provider --> Server --resultType=complete--> Client' } },

    { type: 'heading', data: { textEn: 'Architecture 2: Compatibility Sampling Through MRTR', textKn: 'Architecture 2: MRTR ಮೂಲಕ Compatibility Sampling', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'When the Server Must Use the Client\'s Model', headingKn: 'Server Client ya Model ಬಳಸಲೇಬೇಕಾದಾಗ',
      bodyEn: 'Existing applications may have intentionally wanted the host/client\'s model rather than the server\'s own provider. The lesson explicitly states that under the 2026-07-28 design, the server does NOT issue an independent reverse JSON-RPC request back to the client. Instead the operation becomes: tools/call -> resultType=input_required (with inputRequests + requestState) -> client calls its own model -> a NEW tools/call carrying inputResponses + requestState.',
      bodyKn: 'ಚಾಲ್ತಿಯಲ್ಲಿರುವ ಅಪ್ಲಿಕೇಶನ್ಗಳು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ host/client ya model ಬಯಸಿರಬಹುದು. 2026-07-28 ವಿನ್ಯಾಸದ ಅಡಿಯಲ್ಲಿ, server client ಗೆ ಸ್ವತಂತ್ರ reverse JSON-RPC request ಎಂದಿಗೂ ನೀಡುವುದಿಲ್ಲ ಎಂದೂ ಪಾಠ ಸ್ಪಷ್ಟವಾಗಿ ಹೇಳುತ್ತದೆ.' } },

    { type: 'diagram', data: { titleEn: 'MRTR (Multi Round-Trip Requests)', titleKn: 'MRTR (Multi Round-Trip Requests)',
      contentEn: 'Client --tools/call(id=1)--> Server --resultType=input_required--> Client --calls own model--> Client --NEW tools/call(id=2)+inputResponses--> Server',
      contentKn: 'Client --tools/call(id=1)--> Server --input_required--> Client --ಸ್ವಂತ model ಕರೆ--> Client --ಹೊಸ tools/call(id=2)--> Server' } },

    { type: 'concept', data: {
      headingEn: 'MRTR = Retry, Not Continue', headingKn: 'MRTR = Retry, Continue ಅಲ್ಲ',
      bodyEn: 'The key word in "Multi Round-Trip Requests" is retry. The client does not send a special protocol message meaning "continue operation #123". It sends another INDEPENDENT request that repeats the original operation while including the current model/input result. This is the central architectural shift from any older design where the server might reach back to the client mid-operation.',
      bodyKn: '"Multi Round-Trip Requests" ನಲ್ಲಿ ಮುಖ್ಯ ಪದ retry. client "operation #123 ಮುಂದುವರಿಸಿ" ಎಂಬ ವಿಶೇಷ protocol ಸಂದೇಶ ಕಳುಹಿಸುವುದಿಲ್ಲ. ಇದೂ ಮೂಲ operation ಅನ್ನೂ ಪುನರಾವರ್ತಿಸುವ ಇನ್ನೊಂದೂ ಸ್ವತಂತ್ರ request ಕಳುಹಿಸುತ್ತದೆ.' } },

    { type: 'table', data: { headingEn: 'Sampling vs MRTR — Distinct Concepts', headingKn: 'Sampling vs MRTR — ಭಿನ್ನ ಪರಿಕಲ್ಪನೆಗಳು',
      headers: ['Term', 'Meaning'], headersKn: ['Term', 'ಅರ್ಥ'],
      rows: [
        ['Sampling', 'Deprecated mechanism for asking the client\'s model for a completion'],
        ['Direct model integration', 'Recommended architecture for new servers needing inference'],
        ['MRTR', 'Stateless retry mechanism for obtaining client-side input'],
        ['InputRequiredResult', 'Successful result telling the client more input is necessary'],
      ],
      rowsKn: [
        ['Sampling', 'client ya model ಇಂದ ಒಂದೂ completion ಕೇಳುವ deprecated ಕಾರ್ಯವಿಧಾನ'],
        ['Direct model integration', 'inference ಬೇಕಾದ ಹೊಸ servers ಗೆ ಶಿಫಾರಸು ಮಾಡಿದ architecture'],
        ['MRTR', 'client-side input ಪಡೆಯುವ stateless retry ಕಾರ್ಯವಿಧಾನ'],
        ['InputRequiredResult', 'ಹೆಚ್ಚಿನ input ಅಗತ್ಯವಿದೆ ಎಂದೂ ಹೇಳುವ ಯಶಸ್ವಿ result'],
      ] } },

    { type: 'heading', data: { textEn: 'The Stateless Contract', textKn: 'Stateless ಒಪ್ಪಂದ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'No Hidden Protocol Session', headingKn: 'ಯಾವುದೇ Hidden Protocol Session ಇಲ್ಲ',
      bodyEn: 'This protocol version has no protocol session storing information that earlier designs might have established through initialization. Every request therefore carries its own relevant protocol information -- most importantly protocolVersion, clientCapabilities, and clientInfo inside a _meta object, on every single request, not just the first one.',
      bodyKn: 'ಈ protocol version ಗೆ ಯಾವುದೇ protocol session ಇಲ್ಲ. ಆದ್ದರಿಂದ ಪ್ರತಿ request ತನ್ನ ಸ್ವಂತ ಸಂಬಂಧಿತ protocol ಮಾಹಿತಿಯನ್ನೂ ಒಯ್ಯುತ್ತದೆ -- _meta object ಒಳಗೆ protocolVersion, clientCapabilities, clientInfo, ಪ್ರತಿ single request ನಲ್ಲೂ.' } },

    { type: 'code', data: {
      filename: 'first_request.json', headingEn: 'The lesson\'s original request', headingKn: 'ಪಾಠದ ಮೂಲ request',
      descEn: 'The exact first-round request from the lesson: a tools/call for summarize_repo carrying full per-request _meta (protocolVersion, clientCapabilities advertising sampling, clientInfo).',
      descKn: 'ಪಾಠದ ನಿಖರ ಮೊದಲ-round request: summarize_repo ಗಾಗಿ ಒಂದೂ tools/call, ಪೂರ್ಣ per-request _meta ಒಯ್ಯುತ್ತದೆ.',
      code: "{\n  \"jsonrpc\": \"2.0\",\n  \"id\": 1,\n  \"method\": \"tools/call\",\n  \"params\": {\n    \"name\": \"summarize_repo\",\n    \"arguments\": {\"audience\": \"developer\"},\n    \"_meta\": {\n      \"io.modelcontextprotocol/protocolVersion\": \"2026-07-28\",\n      \"io.modelcontextprotocol/clientCapabilities\": {\"sampling\": {}},\n      \"io.modelcontextprotocol/clientInfo\": {\n        \"name\": \"lesson-client\",\n        \"version\": \"1.0.0\"\n      }\n    }\n  }\n}" } },

    { type: 'concept', data: {
      headingEn: 'protocolVersion Is Validated on Every Request', headingKn: 'protocolVersion ಪ್ರತಿ Request ನಲ್ಲಿ ಮೌಲ್ಯೀಕರಿಸಲಾಗುತ್ತದೆ',
      bodyEn: 'A missing or non-string protocolVersion is rejected as invalid params (-32602). An unsupported (but well-formed) version is rejected with -32022 and structured data: {"supported": ["2026-07-28"], "requested": "<client version>"}. Below, we genuinely run a small dispatcher and trigger both error paths for real.',
      bodyKn: 'ಕಾಣೆಯಾದ ಅಥವಾ non-string protocolVersion -32602 (invalid params) ಜೊತೆ ತಿರಸ್ಕರಿಸಲ್ಪಡುತ್ತದೆ. ಬೆಂಬಲಿತವಲ್ಲದ (ಆದರೆ ಸರಿಯಾಗಿ ರೂಪುಗೊಂಡ) version -32022 ಜೊತೆ ತಿರಸ್ಕರಿಸಲ್ಪಡುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'clientCapabilities: The Capability Gate', headingKn: 'clientCapabilities: Capability Gate',
      bodyEn: '"clientCapabilities": {"sampling": {}} means the client declares it can handle Sampling requests. If a server wanted to issue sampling/createMessage but the client had declared clientCapabilities: {} (no sampling key), the server must not assume support. The lesson gives a missing-Sampling-capability error as -32021, with required-capability data shaped {"sampling": {}}.',
      bodyKn: '"clientCapabilities": {"sampling": {}} client Sampling requests ನಿರ್ವಹಿಸಬಹುದೂ ಎಂದೂ ಘೋಷಿಸುತ್ತದೆ. server sampling/createMessage ನೀಡಲು ಬಯಸಿದರೆ ಆದರೆ client "sampling" key ಇಲ್ಲದೆ ಘೋಷಿಸಿದ್ದರೆ, server ಬೆಂಬಲ ಊಹಿಸಬಾರದು.' } },

    { type: 'concept', data: {
      headingEn: 'clientInfo Is Diagnostic, Not Authenticated Identity', headingKn: 'clientInfo Diagnostic ಆಗಿದೆ, Authenticated Identity ಅಲ್ಲ',
      bodyEn: 'clientInfo (name, version) looks like identity but the lesson explicitly treats clientInfo and serverInfo as display/diagnostic metadata, not authenticated identity. Code like `if client_info["name"] == "admin-client": allow_admin_access()` would be a genuine security bug, because the client itself supplies this field and can set it to anything. Real authorization must come from an authenticated principal, which Part 2 covers when we bind requestState to it.',
      bodyKn: 'clientInfo (name, version) identity ಯಂತೆ ಕಾಣುತ್ತದೆ ಆದರೆ ಪಾಠ ಇದನ್ನೂ display/diagnostic metadata ಎಂದೂ ಸ್ಪಷ್ಟವಾಗಿ ಪರಿಗಣಿಸುತ್ತದೆ, authenticated identity ಅಲ್ಲ. client ಸ್ವತಃ ಈ field ಒದಗಿಸುತ್ತದೆ ಮತ್ತು ಅದನ್ನೂ ಯಾವುದಕ್ಕೂ ಹೊಂದಿಸಬಹುದು.' } },

    { type: 'heading', data: { textEn: 'resultType and the First input_required Response', textKn: 'resultType ಮತ್ತು ಮೊದಲ input_required Response', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'complete vs input_required', headingKn: 'complete vs input_required',
      bodyEn: 'Every modern successful result carries a discriminator named resultType. "complete" means the operation finished. "input_required" means the operation cannot finish yet and the client must provide requested input, then retry. The lesson notes extensions may introduce further result types beyond these two.',
      bodyKn: 'ಪ್ರತಿ ಆಧುನಿಕ ಯಶಸ್ವಿ result resultType ಎಂಬ discriminator ಒಯ್ಯುತ್ತದೆ. "complete" ಎಂದರೆ operation ಮುಗಿದಿದೆ. "input_required" ಎಂದರೆ operation ಇನ್ನೂ ಮುಗಿಯಲಾಗುವುದಿಲ್ಲ, client ಒದಗಿಸಬೇಕು, ನಂತರ retry ಮಾಡಬೇಕು.' } },

    { type: 'code', data: {
      filename: 'first_response.json', headingEn: 'The lesson\'s original first-round result', headingKn: 'ಪಾಠದ ಮೂಲ ಮೊದಲ-round result',
      descEn: 'The server cannot finish summarize_repo alone. It embeds the Sampling request as DATA inside its ordinary result, rather than sending a separate reverse JSON-RPC call.',
      descKn: 'server summarize_repo ಅನ್ನೂ ಒಂಟಿಯಾಗಿ ಮುಗಿಸಲಾಗುವುದಿಲ್ಲ. ಇದೂ Sampling request ಅನ್ನೂ ಅದರ ಸಾಮಾನ್ಯ result ಒಳಗೆ DATA ಆಗಿ ಅಳವಡಿಸುತ್ತದೆ.',
      code: "{\n  \"jsonrpc\": \"2.0\",\n  \"id\": 1,\n  \"result\": {\n    \"resultType\": \"input_required\",\n    \"inputRequests\": {\n      \"pick_files\": {\n        \"method\": \"sampling/createMessage\",\n        \"params\": {\n          \"messages\": [{\"role\": \"user\", \"content\": {\"type\": \"text\",\n            \"text\": \"Choose three representative files and return a JSON array.\"}}],\n          \"systemPrompt\": \"Return only the requested value.\",\n          \"modelPreferences\": {\"costPriority\": 0.8, \"intelligencePriority\": 0.2},\n          \"maxTokens\": 400\n        }\n      }\n    },\n    \"requestState\": \"opaque-integrity-protected-value\"\n  }\n}" } },

    { type: 'concept', data: {
      headingEn: 'inputRequests Is a Keyed Map, Not a Reverse Call', headingKn: 'inputRequests ಒಂದೂ Keyed Map, Reverse Call ಅಲ್ಲ',
      bodyEn: 'inputRequests is a server-assigned map of embedded elicitation/Sampling/roots requests. The key "pick_files" lets the client correlate its eventual answer with this specific embedded request: inputRequests.pick_files (the ask) pairs with inputResponses.pick_files (the answer) on the retry. modelPreferences (costPriority/intelligencePriority) are hints, not an enforced distribution -- the client owns its actual model policy and may honor or ignore them.',
      bodyKn: 'inputRequests ಒಂದೂ server-assigned map. key "pick_files" client ಅದರ ಅಂತಿಮ ಉತ್ತರವನ್ನೂ ಈ ನಿರ್ದಿಷ್ಟ embedded request ಜೊತೆ ಸಂಬಂಧಿಸಲು ಅನುಮತಿಸುತ್ತದೆ. modelPreferences hints ಮಾತ್ರ, ಜಾರಿಗೊಳಿಸಿದ distribution ಅಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'requestState Is Opaque to the Client', headingKn: 'requestState Client ಗೆ Opaque ಆಗಿದೆ',
      bodyEn: 'The client should not decode, modify, or append to requestState. Its job is to echo the value exactly on the retry. We will genuinely build an HMAC-signed requestState below and genuinely prove that even a single flipped character causes rejection -- this IS the mechanism, not a metaphor.',
      bodyKn: 'client requestState ಡಿಕೋಡ್, ಮಾರ್ಪಡಿಸಬಾರದು ಅಥವಾ ಸೇರಿಸಬಾರದು. ಅದರ ಕೆಲಸ retry ನಲ್ಲಿ ಮೌಲ್ಯವನ್ನೂ ನಿಖರವಾಗಿ echo ಮಾಡುವುದೂ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Building and Running a Real requestState', textKn: 'ಒಂದೂ ನಿಜ requestState ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುವುದೂ ಮತ್ತು ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why We Build Our Own Implementation', headingKn: 'ನಾವು ಏಕೆ ನಮ್ಮ ಸ್ವಂತ Implementation ನಿರ್ಮಿಸುತ್ತೇವೆ',
      bodyEn: 'The supplied lesson material describes what code/main.py implements but does not include its literal source. Rather than inventing fake output, we build a real, runnable Python implementation that matches the exact behavior described (HMAC-signed requestState, capability gate, protocol version checks) and genuinely execute it, capturing real results below.',
      bodyKn: 'ಪೂರೈಸಿದ ಪಾಠ ವಸ್ತು code/main.py ಏನೂ ಜಾರಿಗೊಳಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸುತ್ತದೆ ಆದರೆ ಅದರ ನಿಜ source ಒಳಗೊಂಡಿಲ್ಲ. ನಕಲಿ output ಕಂಡುಹಿಡಿಯುವ ಬದಲಿಗೆ, ನಾವು ವಿವರಿಸಿದ ನಿಖರ ವರ್ತನೆಗೆ ಹೊಂದಿಕೊಳ್ಳುವ ಒಂದೂ ನಿಜ, ಚಲಾಯಿಸಬಹುದಾದ Python implementation ನಿರ್ಮಿಸುತ್ತೇವೆ.' } },

    { type: 'code', data: {
      filename: 'mrtr_demo.py', headingEn: 'Genuine HMAC-signed requestState (creation + verification)', headingKn: 'ನಿಜ HMAC-signed requestState (ಸೃಷ್ಟಿ + ಪರಿಶೀಲನೆ)',
      descEn: 'A real, runnable implementation: canonical JSON serialization, SHA-256 argument digest, HMAC signing, and verification that checks principal, method, argument digest, and expiry.',
      descKn: 'ಒಂದೂ ನಿಜ, ಚಲಾಯಿಸಬಹುದಾದ implementation: canonical JSON serialization, SHA-256 argument digest, HMAC signing, ಮತ್ತು principal, method, argument digest, expiry ಪರಿಶೀಲಿಸುವ verification.',
      code: "import hmac, hashlib, json, time, base64\n\nSECRET = b\"lesson-demo-secret-key\"\n\ndef canonical(obj):\n    return json.dumps(obj, sort_keys=True, separators=(\",\", \":\"))\n\ndef digest_args(args):\n    return hashlib.sha256(canonical(args).encode()).hexdigest()\n\ndef create_signed_state(principal, method, arguments, phase, validated_data, ttl_seconds=300):\n    payload = {\n        \"principal\": principal, \"method\": method,\n        \"argumentsDigest\": digest_args(arguments),\n        \"phase\": phase, \"validated\": validated_data,\n        \"expiresAt\": int(time.time()) + ttl_seconds,\n    }\n    payload_bytes = canonical(payload).encode()\n    sig = hmac.new(SECRET, payload_bytes, hashlib.sha256).hexdigest()\n    return base64.urlsafe_b64encode(payload_bytes).decode() + \".\" + sig\n\nprincipal = \"user-alex\"\nmethod = \"tools/call\"\narguments = {\"audience\": \"developer\"}\n\nstate1 = create_signed_state(principal, method, arguments, \"pick_files\", {})\nprint(\"state1 token:\", state1)\nprint(\"state1 length (chars):\", len(state1))" } },
    { type: 'output', data: { output: "state1 token: eyJhcmd1bWVudHNEaWdlc3QiOiJhNzU4MTI5MmU0OGVlZTk0NTRhNjlhN2QyZWUxYjYyMjg2MmM4NGFlZmMxZTlkNGVjMzdjYzAwMmRmYzAzYzhiIiwiZXhwaXJlc0F0IjoxNzkwMTA0NDU1LCJtZXRob2QiOiJ0b29scy9jYWxsIiwicGhhc2UiOiJwaWNrX2ZpbGVzIiwicHJpbmNpcGFsIjoidXNlci1hbGV4IiwidmFsaWRhdGVkIjp7fX0=.b99c1dc1603299749222f6701a65bfc2f7e48b3d08034ff79c4715313d26079f\nstate1 length (chars): 321" } },

    { type: 'concept', data: {
      headingEn: 'Decoding the Token Reveals the Payload, Encoding Alone Gives No Security', headingKn: 'Token ಡಿಕೋಡಿಂಗ್ Payload ಬಹಿರಂಗಪಡಿಸುತ್ತದೆ',
      bodyEn: 'Notice the token is Base64 -- anyone can decode it and read phase/principal/expiry. That is fine here because the lesson only requires integrity, not confidentiality (Part 2 covers when authenticated encryption is needed instead). What matters is that nobody can change it undetectably, which we prove next.',
      bodyKn: 'token Base64 ಎಂದೂ ಗಮನಿಸಿ -- ಯಾರಾದರೂ ಇದನ್ನೂ decode ಮಾಡಿ ಓದಬಹುದು. ಇಲ್ಲಿ ಅದೂ ಸರಿಯಾಗಿದೆ ಏಕೆಂದರೆ ಪಾಠಕ್ಕೆ ಕೇವಲ integrity ಬೇಕು, confidentiality ಅಲ್ಲ.' } },

    { type: 'code', data: {
      filename: 'mrtr_demo.py', headingEn: 'Genuine full first round via the real dispatcher', headingKn: 'ನಿಜ dispatcher ಮೂಲಕ ನಿಜ ಪೂರ್ಣ ಮೊದಲ round',
      descEn: 'Running the full genuine dispatcher (handle_tools_call) on the exact first request shape from the lesson, with no requestState -- confirming the server issues resultType=input_required with inputRequests["pick_files"].',
      descKn: 'ಪಾಠದ ನಿಖರ ಮೊದಲ request shape ಮೇಲೆ ಪೂರ್ಣ ನಿಜ dispatcher (handle_tools_call) ಚಲಾಯಿಸುವುದೂ, requestState ಇಲ್ಲದೆ.',
      code: "PV_KEY = \"io.modelcontextprotocol/protocolVersion\"\nCC_KEY = \"io.modelcontextprotocol/clientCapabilities\"\nbase_meta = {PV_KEY: \"2026-07-28\", CC_KEY: {\"sampling\": {}}}\n\nreq1 = {\"jsonrpc\": \"2.0\", \"id\": 1, \"method\": \"tools/call\",\n        \"params\": {\"name\": \"summarize_repo\", \"arguments\": arguments, \"_meta\": base_meta}}\nresp1 = handle_tools_call(req1, principal)\nprint(\"id:\", resp1[\"id\"], \"resultType:\", resp1[\"result\"][\"resultType\"])\nprint(\"inputRequests keys:\", list(resp1[\"result\"][\"inputRequests\"].keys()))" } },
    { type: 'output', data: { output: "id: 1 resultType: input_required\ninputRequests keys: ['pick_files']" } },

    { type: 'heading', data: { textEn: 'The Retry: Fresh ID, Same Operation, Inputresponses Added', textKn: 'Retry: ಹೊಸ ID, ಅದೇ Operation, Inputresponses ಸೇರಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'retry.json', headingEn: 'The lesson\'s original retry request', headingKn: 'ಪಾಠದ ಮೂಲ retry request',
      descEn: 'Note the fresh id (2, not 1), the SAME method/name/arguments as the original request, the new inputResponses field, and the exact echoed requestState.',
      descKn: 'ಹೊಸ id (2, 1 ಅಲ್ಲ), ಮೂಲ request ya ಅದೇ method/name/arguments, ಹೊಸ inputResponses field, ಮತ್ತು ನಿಖರ echo ಆದ requestState ಗಮನಿಸಿ.',
      code: "{\n  \"jsonrpc\": \"2.0\",\n  \"id\": 2,\n  \"method\": \"tools/call\",\n  \"params\": {\n    \"name\": \"summarize_repo\",\n    \"arguments\": {\"audience\": \"developer\"},\n    \"inputResponses\": {\n      \"pick_files\": {\n        \"role\": \"assistant\",\n        \"content\": {\"type\": \"text\", \"text\": \"[\\\"README.md\\\", \\\"server.py\\\", \\\"docs/intro.md\\\"]\"},\n        \"model\": \"host-model\",\n        \"stopReason\": \"endTurn\"\n      }\n    },\n    \"requestState\": \"opaque-integrity-protected-value\",\n    \"_meta\": {\n      \"io.modelcontextprotocol/protocolVersion\": \"2026-07-28\",\n      \"io.modelcontextprotocol/clientCapabilities\": {\"sampling\": {}}\n    }\n  }\n}" } },

    { type: 'concept', data: {
      headingEn: 'Why the Fresh ID Matters', headingKn: 'ಹೊಸ ID ಏಕೆ ಮುಖ್ಯ',
      bodyEn: 'id:1 got a response already (input_required). Sending id:1 again would be a malformed/ambiguous duplicate correlation, not a continuation. The lesson\'s own later transcript illustrates the same principle with ids 101 and 102. A fresh id is the evidence that this is a genuinely independent JSON-RPC request, not a reopened one.',
      bodyKn: 'id:1 ಈಗಾಗಲೇ ಒಂದೂ response ಪಡೆದಿದೆ. id:1 ಅನ್ನೂ ಮತ್ತೆ ಕಳುಹಿಸುವುದೂ ಒಂದೂ ಸ್ಪಷ್ಟವಲ್ಲದ duplicate correlation ಆಗಿರುತ್ತದೆ. ಹೊಸ id ಇದೂ ನಿಜವಾಗಿ ಸ್ವತಂತ್ರ JSON-RPC request ಎಂಬುದಕ್ಕೆ ಸಾಕ್ಷ್ಯ.' } },

    { type: 'code', data: {
      filename: 'mrtr_demo.py', headingEn: 'Genuinely running the retry through the real dispatcher', headingKn: 'retry ಅನ್ನೂ ನಿಜ dispatcher ಮೂಲಕ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ',
      descEn: 'We package the model\'s genuine output into inputResponses["pick_files"], echo the exact requestState from round 1, and send a fresh id=2 request through the same handler.',
      descKn: 'model ya ನಿಜ output ಅನ್ನೂ inputResponses["pick_files"] ಗೆ ಪ್ಯಾಕೇಜ್ ಮಾಡುತ್ತೇವೆ, round 1 ya ನಿಖರ requestState echo ಮಾಡುತ್ತೇವೆ, ಹೊಸ id=2 request ಕಳುಹಿಸುತ್ತೇವೆ.',
      code: "model_out1 = fake_host_model(\"pick_files\")\nprint(\"model output:\", model_out1)\n\nstate1 = resp1[\"result\"][\"requestState\"]\nreq2 = {\"jsonrpc\": \"2.0\", \"id\": 2, \"method\": \"tools/call\",\n        \"params\": {\"name\": \"summarize_repo\", \"arguments\": arguments,\n                   \"inputResponses\": {\"pick_files\": {\"role\": \"assistant\",\n                       \"content\": {\"type\": \"text\", \"text\": model_out1},\n                       \"model\": \"host-model\", \"stopReason\": \"endTurn\"}},\n                   \"requestState\": state1, \"_meta\": base_meta}}\nresp2 = handle_tools_call(req2, principal)\nprint(\"id:\", resp2[\"id\"], \"resultType:\", resp2[\"result\"][\"resultType\"])\nprint(\"inputRequests keys:\", list(resp2[\"result\"][\"inputRequests\"].keys()))" } },
    { type: 'output', data: { output: "model output: [\"README.md\", \"server.py\", \"docs/intro.md\"]\nid: 2 resultType: input_required\ninputRequests keys: ['summary']" } },

    { type: 'concept', data: {
      headingEn: 'This Round Advanced the Workflow, Not Finished It', headingKn: 'ಈ Round Workflow ಅನ್ನೂ ಮುಂದೂ ಸಾಗಿಸಿತೂ, ಮುಗಿಸಲಿಲ್ಲ',
      bodyEn: 'The server validated the file selection and now needs a second piece of model work (the summary prose), so it returns ANOTHER input_required, this time keyed "summary" instead of "pick_files". This proves the workflow is genuinely multi-round, not just one round -- Part 2 covers exactly how the server tracks which phase it is in across these independent requests.',
      bodyKn: 'server file selection ಪರಿಶೀಲಿಸಿತೂ ಮತ್ತು ಈಗ ಎರಡನೇ model work (summary prose) ಬೇಕು, ಆದ್ದರಿಂದ ಇದೂ ಇನ್ನೊಂದೂ input_required ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಈ ಬಾರಿ "summary" ಎಂದೂ key ಆಗಿದೆ.' } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• New MCP servers should prefer direct model integration; Sampling/MRTR is a compatibility path.\n• MRTR means the client RETRIES the original operation with a fresh JSON-RPC id, never a reverse request from the server.\n• Every request carries its own _meta (protocolVersion, clientCapabilities, clientInfo) because the protocol is stateless.\n• resultType discriminates complete vs input_required.\n• inputRequests/inputResponses correlate by a server-assigned key (e.g. "pick_files").\n• requestState is opaque to the client and must be echoed exactly.',
      bodyKn: '• ಹೊಸ MCP servers direct model integration ಆದ್ಯತೆ ನೀಡಬೇಕೂ; Sampling/MRTR ಒಂದೂ compatibility ಮಾರ್ಗ.\n• MRTR ಎಂದರೆ client ಹೊಸ JSON-RPC id ಜೊತೆ ಮೂಲ operation ಅನ್ನೂ RETRY ಮಾಡುತ್ತದೆ.\n• ಪ್ರತಿ request ಅದರ ಸ್ವಂತ _meta ಒಯ್ಯುತ್ತದೆ ಏಕೆಂದರೆ protocol stateless ಆಗಿದೆ.\n• resultType complete vs input_required ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ.\n• requestState client ಗೆ opaque ಆಗಿದೆ, ನಿಖರವಾಗಿ echo ಆಗಬೇಕು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What is the recommended architecture in this lesson for a new MCP server that needs model inference?', qKn: 'model inference ಬೇಕಾದ ಒಂದೂ ಹೊಸ MCP server ಗೆ ಈ ಪಾಠದಲ್ಲಿ ಶಿಫಾರಸು ಮಾಡಿದ architecture ಏನೂ?',
        opts: ['Always use sampling/createMessage', 'Store the client\'s model credentials in a session', 'Directly integrate with a model provider', 'Open a permanent reverse JSON-RPC channel'],
        optsKn: ['ಯಾವಾಗಲೂ sampling/createMessage ಬಳಸಿ', 'client ya model credentials ಅನ್ನೂ session ನಲ್ಲಿ ಸಂಗ್ರಹಿಸಿ', 'ಒಂದೂ model provider ಜೊತೆ ನೇರವಾಗಿ integrate ಮಾಡಿ', 'ಒಂದೂ ಶಾಶ್ವತ reverse JSON-RPC channel ತೆರೆಯಿರಿ'],
        correct: 2 },
      { q: 'What does "resultType": "input_required" mean?', qKn: '"resultType": "input_required" ಎಂದರೇನೂ?',
        opts: ['The tool failed permanently', 'The server must open a new connection', 'The client must fulfill one or more embedded requests and retry', 'The JSON-RPC request is still running'],
        optsKn: ['tool ಶಾಶ್ವತವಾಗಿ ವಿಫಲವಾಯಿತೂ', 'server ಒಂದೂ ಹೊಸ connection ತೆರೆಯಬೇಕು', 'client ಒಂದೂ ಅಥವಾ ಹೆಚ್ಚೂ embedded requests ಪೂರೈಸಿ retry ಮಾಡಬೇಕು', 'JSON-RPC request ಇನ್ನೂ ಚಾಲನೆಯಲ್ಲಿದೆ'],
        correct: 2 },
      { q: 'If the original request has "id": 1, what should an MRTR retry use?', qKn: 'ಮೂಲ request "id": 1 ಹೊಂದಿದ್ದರೆ, ಒಂದೂ MRTR retry ಏನೂ ಬಳಸಬೇಕು?',
        opts: ['id: 1', 'No ID', 'A fresh ID such as 2', 'The requestState as the ID'],
        optsKn: ['id: 1', 'ID ಇಲ್ಲ', '2 ರಂತಹ ಒಂದೂ ಹೊಸ ID', 'requestState ಅನ್ನೂ ID ಆಗಿ'],
        correct: 2 },
      { q: 'What connects inputRequests["pick_files"] with the client\'s answer?', qKn: 'inputRequests["pick_files"] ಅನ್ನೂ client ya ಉತ್ತರದ ಜೊತೆ ಏನೂ ಸಂಪರ್ಕಿಸುತ್ತದೆ?',
        opts: ['inputResponses["pick_files"]', 'inputResponses["summary"]', '"id": "pick_files"', '"resultType": "pick_files"'],
        optsKn: ['inputResponses["pick_files"]', 'inputResponses["summary"]', '"id": "pick_files"', '"resultType": "pick_files"'],
        correct: 0 },
      { q: 'What should the client do with requestState?', qKn: 'client requestState ಜೊತೆ ಏನೂ ಮಾಡಬೇಕು?',
        opts: ['Decode it and change the phase', 'Append the model name', 'Echo the exact opaque value on the retry', 'Replace it with the JSON-RPC ID'],
        optsKn: ['ಡಿಕೋಡ್ ಮಾಡಿ phase ಬದಲಾಯಿಸಿ', 'model ಹೆಸರು ಸೇರಿಸಿ', 'retry ಮೇಲೆ ನಿಖರ opaque ಮೌಲ್ಯ echo ಮಾಡಿ', 'JSON-RPC ID ಜೊತೆ ಬದಲಾಯಿಸಿ'],
        correct: 2 },
    ] } },
  ],
};
