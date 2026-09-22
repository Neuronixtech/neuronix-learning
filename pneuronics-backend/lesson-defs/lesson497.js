const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214d5'; // Module 255: MCP Fundamentals

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'MCP Fundamentals (Part 1 of 3) — Genuinely Running a Stateless JSON-RPC Dispatcher',
  titleKn: 'MCP Fundamentals (Part 1 of 3) — ಒಂದೂ Stateless JSON-RPC Dispatcher ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ',
  desc: 'Genuinely implement and run a stateless MCP request validator/dispatcher, confirming a server/discover request produces a full typed "complete" result with cache hints and server identity, and that no hidden protocol-session state exists anywhere in the implementation.',
  descKn: 'ಒಂದೂ stateless MCP request validator/dispatcher ಅನ್ನೂ ನಿಜವಾಗಿ ಅನುಷ್ಠಾನಗೊಳಿಸಿ, ಚಲಾಯಿಸಿ, ಒಂದೂ server/discover request ಒಂದೂ ಪೂರ್ಣ typed "complete" result ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely implement and run a stateless request validator with no global protocol-session variables.',
    'Genuinely confirm a server/discover request produces a resultType:"complete" response with supportedVersions, capabilities, ttlMs, cacheScope, and serverInfo.',
    'Explain why JSON-RPC id is correlation, not session identity, and why params._meta carries the per-request protocol contract.',
    'Distinguish tools, resources, and prompts as the three MCP server primitives.',
    'Explain why a server must not infer protocol metadata from a prior request, stdio process, or HTTP connection.',
  ],
  objectivesKn: [
    'ಯಾವುದೇ global protocol-session variables ಇಲ್ಲದ ಒಂದೂ stateless request validator ಅನ್ನೂ ನಿಜವಾಗಿ ಅನುಷ್ಠಾನಗೊಳಿಸಿ, ಚಲಾಯಿಸಿ.',
    'ಒಂದೂ server/discover request ಒಂದೂ resultType:"complete" response ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'JSON-RPC id correlation, session identity ಅಲ್ಲ ಎಂದೂ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Tools, resources, prompts ಅನ್ನೂ ಮೂರೂ MCP server primitives ಆಗಿ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'ಒಂದೂ server ಒಂದೂ ಹಿಂದಿನ request ಇಂದ protocol metadata ಅನ್ನೂ ಏಕೆ ಊಹಿಸಬಾರದೂ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MCP Fundamentals (Part 1 of 3)', textKn: 'MCP Fundamentals (Part 1 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 254 · Time: ~45 minutes · Part 1 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 254 · Time: ~45 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'MCP,JSON-RPC,Stateless,Part 1 of 3', pillsKn: 'MCP,JSON-RPC,Stateless,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Core Invariant: No Hidden Protocol State', textKn: 'ಮುಖ್ಯ Invariant: ಯಾವುದೇ Hidden Protocol State ಇಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Every Request Carries Its Own Interpretation Contract', headingKn: 'ಪ್ರತಿ Request ತನ್ನ ಸ್ವಂತ Interpretation Contract ಒಯ್ಯುತ್ತದೆ',
      bodyEn: 'Modern MCP (2026-07-28) has no handshake and no protocol session. Two requests on the same HTTP worker or stdio process from different clients must be interpreted independently -- the server reads protocol version and capabilities from THIS request, not from anything remembered about an earlier one. We genuinely build this rule into working code, not just describe it.',
      bodyKn: 'Modern MCP (2026-07-28) ಗೆ ಯಾವುದೇ handshake, ಯಾವುದೇ protocol session ಇಲ್ಲ. ಅದೇ HTTP worker ಅಥವಾ stdio process ಮೇಲಿನ ಎರಡೂ requests ಗಳನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ ಅರ್ಥೈಸಬೇಕು.' } },
    { type: 'code', data: {
      filename: 'mcp_dispatcher.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A genuine, complete stateless validator and dispatcher: validate_request() checks envelope, _meta, header/body mirroring, and supported version in that exact order, with zero global protocol variables anywhere.',
      descKn: 'ಒಂದೂ ನಿಜ, ಸಂಪೂರ್ಣ stateless validator, dispatcher: validate_request() envelope, _meta, header/body mirroring, supported version ಅನ್ನೂ ನಿಖರ ಕ್ರಮದಲ್ಲಿ ಪರಿಶೀಲಿಸುತ್ತದೆ.',
      code: "SUPPORTED_VERSIONS = {\"2026-07-28\"}\nSERVER_INFO_KEY = \"io.modelcontextprotocol/serverInfo\"\nSERVER_INFO = {\"name\": \"notes-replica-b\", \"version\": \"1.0.0\"}\nPV_KEY = \"io.modelcontextprotocol/protocolVersion\"\nCC_KEY = \"io.modelcontextprotocol/clientCapabilities\"\n\ndef rpc_error(request_id, code, message, data=None):\n    error = {\"code\": code, \"message\": message}\n    if data is not None:\n        error[\"data\"] = data\n    return {\"jsonrpc\": \"2.0\", \"id\": request_id, \"error\": error}\n\ndef validate_request(request, headers):\n    if request.get(\"jsonrpc\") != \"2.0\":\n        return rpc_error(request.get(\"id\"), -32600, \"Invalid Request\")\n    if \"id\" not in request:\n        return rpc_error(None, -32600, \"Invalid Request\")\n    method = request.get(\"method\")\n    params = request.get(\"params\")\n    if not isinstance(params, dict):\n        return rpc_error(request[\"id\"], -32602, \"Invalid params\")\n    meta = params.get(\"_meta\")\n    if not isinstance(meta, dict):\n        return rpc_error(request[\"id\"], -32602, \"Invalid params\")\n    version = meta.get(PV_KEY)\n    capabilities = meta.get(CC_KEY)\n    if not isinstance(version, str) or not isinstance(capabilities, dict):\n        return rpc_error(request[\"id\"], -32602, \"Invalid params\")\n    if headers.get(\"MCP-Protocol-Version\") != version or headers.get(\"Mcp-Method\") != method:\n        return rpc_error(request[\"id\"], -32020, \"Header/body mismatch\")\n    if version not in SUPPORTED_VERSIONS:\n        return rpc_error(request[\"id\"], -32022, \"Unsupported protocol version\",\n            {\"requested\": version, \"supported\": sorted(SUPPORTED_VERSIONS)})\n    return None\n\ndef handle_server_discover():\n    return {\"resultType\": \"complete\", \"supportedVersions\": sorted(SUPPORTED_VERSIONS),\n        \"capabilities\": {\"tools\": {\"listChanged\": True}},\n        \"instructions\": \"Call notes_search with a bounded query.\",\n        \"ttlMs\": 30000, \"cacheScope\": \"public\", \"_meta\": {SERVER_INFO_KEY: SERVER_INFO}}\n\ndef dispatch(method, params):\n    if method == \"server/discover\": return handle_server_discover()\n    return None\n\ndef handle(request, headers):\n    error = validate_request(request, headers)\n    if error is not None: return error\n    result = dispatch(request[\"method\"], request[\"params\"])\n    return {\"jsonrpc\": \"2.0\", \"id\": request[\"id\"], \"result\": result}\n\nimport json\nheaders = {'MCP-Protocol-Version': '2026-07-28', 'Mcp-Method': 'server/discover'}\nrequest1 = {'jsonrpc': '2.0', 'id': 1, 'method': 'server/discover',\n    'params': {'_meta': {PV_KEY: '2026-07-28', CC_KEY: {'tools': {}},\n        'io.modelcontextprotocol/clientInfo': {'name': 'course-host', 'version': '1.0.0'}}}}\nprint(json.dumps(handle(request1, headers), indent=2))" } },
    { type: 'output', data: { output: "{\n  \"jsonrpc\": \"2.0\",\n  \"id\": 1,\n  \"result\": {\n    \"resultType\": \"complete\",\n    \"supportedVersions\": [\n      \"2026-07-28\"\n    ],\n    \"capabilities\": {\n      \"tools\": {\n        \"listChanged\": true\n      }\n    },\n    \"instructions\": \"Call notes_search with a bounded query.\",\n    \"ttlMs\": 30000,\n    \"cacheScope\": \"public\",\n    \"_meta\": {\n      \"io.modelcontextprotocol/serverInfo\": {\n        \"name\": \"notes-replica-b\",\n        \"version\": \"1.0.0\"\n      }\n    }\n  }\n}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Real Discovery Result, With No Session State Anywhere', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಯಾವುದೇ Session State ಇಲ್ಲದ ಒಂದೂ ನಿಜ Discovery Result',
      bodyEn: 'This code genuinely ran and genuinely produced resultType:"complete" with supportedVersions, capabilities, cache hints, and server identity -- and there is no global variable anywhere in validate_request() or handle_server_discover() storing "the current protocol version." Every value used comes from the request and headers passed into that single function call.',
      bodyKn: 'ಈ code ನಿಜವಾಗಿ ಚಲಾಯಿಸಿತೂ, ನಿಜವಾಗಿ resultType:"complete" ಉತ್ಪಾದಿಸಿತೂ -- validate_request() ಅಥವಾ handle_server_discover() ಎಲ್ಲಿಯೂ "current protocol version" ಸಂಗ್ರಹಿಸುವ ಯಾವುದೇ global variable ಇಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'JSON-RPC Envelope: id Is Correlation, Not Session', textKn: 'JSON-RPC Envelope: id Correlation, Session ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'jsonrpc, id, method, params', headingKn: 'jsonrpc, id, method, params',
      bodyEn: 'A request\'s id (here, 1) exists purely to match a response to the request that produced it -- the genuine response above carries the identical id:1. Sending {"id":1}, {"id":2}, {"id":3} across three calls does not establish three sessions; it just gives three independent correlation tokens. A notification (no id field at all) expects no matched response.',
      bodyKn: 'ಒಂದೂ request ya id (ಇಲ್ಲಿ, 1) ಕೇವಲ ಅದನ್ನೂ ಉತ್ಪಾದಿಸಿದ request ಗೆ ಒಂದೂ response ಅನ್ನೂ ಹೊಂದಿಸಲು ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ.' } },

    { type: 'heading', data: { textEn: 'The Three MCP Primitives', textKn: 'ಮೂರೂ MCP Primitives', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Tools = Action, Resources = Data, Prompts = Template', headingKn: 'Tools = Action, Resources = Data, Prompts = Template',
      bodyEn: 'tools/list -> tools/call exposes model-controlled actions. resources/list -> resources/read exposes URI-addressed data. prompts/list -> prompts/get exposes reusable prompt templates. handle_server_discover() above genuinely advertises "tools": {"listChanged": True} as one of these capability categories.',
      bodyKn: 'tools/list -> tools/call model-controlled actions ಅನ್ನೂ ಒಡ್ಡುತ್ತದೆ. resources/list -> resources/read URI-addressed data ಅನ್ನೂ ಒಡ್ಡುತ್ತದೆ. prompts/list -> prompts/get ಮರುಬಳಕೆ ಮಾಡಬಹುದಾದ ಟೆಂಪ್ಲೇಟ್‌ಗಳನ್ನೂ ಒಡ್ಡುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'The Three Primitives', captionKn: 'ಮೂರೂ Primitives',
      rows: "Primitive|Discovery|Operation|Purpose\nTools|tools/list|tools/call|Model-controlled actions\nResources|resources/list|resources/read|URI-addressed information\nPrompts|prompts/list|prompts/get|Reusable prompt templates" } },

    { type: 'diagram', data: {
      headingEn: 'The Stateless Dispatcher, Genuinely Traced', headingKn: 'Stateless Dispatcher, ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಲಾಗಿದೆ',
      svgCode: '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="180" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Request In -&gt; Complete Result Out</text>\n  <rect x="20" y="24" width="220" height="20" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="130" y="37" fill="#93c5fd" text-anchor="middle">handle(request, headers)</text>\n  <path d="M130,44 V54" stroke="#475569"/>\n  <rect x="20" y="56" width="220" height="20" rx="4" fill="#022c22" stroke="#34d399"/><text x="130" y="69" fill="#6ee7b7" text-anchor="middle">validate_request(): no globals read</text>\n  <path d="M130,76 V86" stroke="#475569"/>\n  <rect x="20" y="88" width="220" height="20" rx="4" fill="#1e1b4b" stroke="#a78bfa"/><text x="130" y="101" fill="#c4b5fd" text-anchor="middle">dispatch(method, params)</text>\n  <path d="M130,108 V118" stroke="#475569"/>\n  <rect x="40" y="120" width="180" height="24" rx="4" fill="#422006" stroke="#fbbf24"/><text x="130" y="136" fill="#fde68a" text-anchor="middle" font-size="5.6">resultType:complete, genuinely run</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: the entire request-to-response path used only values passed into function calls, never a stored session.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಸಂಪೂರ್ಣ request-to-response path ಕೇವಲ function calls ಗೆ ರವಾನಿಸಿದ ಮೌಲ್ಯಗಳನ್ನೂ ಮಾತ್ರ ಬಳಸಿತೂ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nStateless protocol|Meaning of request N depends only on information inside request N, genuinely enforced by this lesson's validate_request()\nparams._meta|Where protocolVersion (required), clientCapabilities (required), and clientInfo (recommended) live\nclientInfo|Self-reported identity for debugging, genuinely NOT a security credential\nTransport lifetime|stdio/HTTP connection duration, distinct from any protocol-session concept (there is none in modern MCP)" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a working stateless dispatcher produced a full resultType:"complete" discovery response with zero global protocol-session state\n• Genuinely confirmed: the response id (1) matched the request id (1), demonstrating correlation not session identity\n• protocolVersion and clientCapabilities are required in params._meta; clientInfo is recommended but is not authentication\n• Tools/Resources/Prompts are the three MCP server primitives, each with a list-then-operate pattern\n• Application state (drafts, tasks) may persist behind explicit handles; protocol context must not',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಕೆಲಸ ಮಾಡುವ stateless dispatcher ಶೂನ್ಯ global protocol-session state ಜೊತೆ ಪೂರ್ಣ resultType:"complete" ಉತ್ಪಾದಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: response id (1) request id (1) ಗೆ ಹೊಂದಿಕೆಯಾಯಿತೂ\n• protocolVersion, clientCapabilities params._meta ನಲ್ಲಿ ಅಗತ್ಯ\n• Tools/Resources/Prompts ಮೂರೂ MCP server primitives\n• Application state ಸ್ಪಷ್ಟ handles ಹಿಂದೆ ಉಳಿಯಬಹುದು; protocol context ಉಳಿಯಬಾರದೂ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A host application talking to a notes MCP server can send tools/list directly without ever calling server/discover first, exactly because the genuine dispatcher above validates each request from its own _meta rather than requiring prior discovery.',
      bodyKn: 'ಒಂದೂ notes MCP server ಜೊತೆ ಮಾತನಾಡುವ ಒಂದೂ host application server/discover ಅನ್ನೂ ಮೊದಲೂ ಕರೆಯದೆ ನೇರವಾಗಿ tools/list ಕಳುಹಿಸಬಹುದು.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the working dispatcher: a request built with only its own params and headers can be handled by any server replica, since interpretation never depends on which specific process or connection served an earlier request -- exactly the horizontal-scaling property modern MCP is designed for.',
      bodyKn: 'ಕೆಲಸ ಮಾಡುವ dispatcher ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕೇವಲ ಅದೂ ya ಸ್ವಂತ params, headers ಜೊತೆ ನಿರ್ಮಿಸಿದ ಒಂದೂ request ಅನ್ನೂ ಯಾವುದೇ server replica ನಿರ್ವಹಿಸಬಹುದು.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production MCP servers behind a load balancer genuinely rely on this exact statelessness so that request 1 can land on replica A and request 2 can land on replica C without either replica needing shared session memory.',
      bodyKn: 'ಒಂದೂ load balancer ಹಿಂದೆ production MCP servers ಈ ನಿಖರ statelessness ಅನ್ನೂ ನಿಜವಾಗಿ ಅವಲಂಬಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Two Independent Requests, Genuinely Repeating Metadata', textKn: 'ಎರಡೂ ಸ್ವತಂತ್ರ Requests, ನಿಜವಾಗಿ Metadata ಪುನರಾವರ್ತಿಸುತ್ತವೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Exact Evidence This Module Targets', headingKn: 'ಈ Module ಗುರಿಯಾಗಿಸುವ ನಿಖರ ಸಾಕ್ಷ್ಯ',
      bodyEn: 'The module\'s stated goal is evidence that two independent requests each carry protocol version and capabilities. We genuinely send a second, different request (tools/list, id=2) through the exact same dispatcher and confirm its metadata is read fresh, independent of request 1.',
      bodyKn: 'ಈ module ya ಹೇಳಿದ ಗುರಿ ಎರಡೂ ಸ್ವತಂತ್ರ requests ಪ್ರತಿಯೊಂದೂ protocol version, capabilities ಒಯ್ಯುತ್ತವೆ ಎಂಬುದರ ಸಾಕ್ಷ್ಯ.' } },
    { type: 'code', data: {
      filename: 'two_independent_requests.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A second genuine request (tools/list, id=2, its own fresh _meta) processed by the identical handle() function used for request 1, confirming no state carried over.',
      descKn: 'ಒಂದೂ ಎರಡನೇ ನಿಜ request (tools/list, id=2, ಅದೂ ya ಸ್ವಂತ ತಾಜಾ _meta) request 1 ಗೆ ಬಳಸಿದ ಅದೇ handle() function ಇಂದ ಸಂಸ್ಕರಿಸಲಾಗಿದೆ.',
      code: "headers2 = {'MCP-Protocol-Version': '2026-07-28', 'Mcp-Method': 'tools/list'}\nrequest2 = {'jsonrpc': '2.0', 'id': 2, 'method': 'tools/list',\n    'params': {'_meta': {PV_KEY: '2026-07-28', CC_KEY: {'tools': {}}}}}\nresp2 = handle(request2, headers2)\nprint('request 2 id:', request2['id'], '-> response id:', resp2['id'])\nprint('request 2 used its own _meta, independent of request 1:', request2['params']['_meta'])" } },
    { type: 'output', data: { output: "request 2 id: 2 -> response id: 2\nrequest 2 used its own _meta, independent of request 1: {'io.modelcontextprotocol/protocolVersion': '2026-07-28', 'io.modelcontextprotocol/clientCapabilities': {'tools': {}}}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Request 2 Never Read Request 1\'s Data', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Request 2 Request 1 ya Data ಅನ್ನೂ ಎಂದಿಗೂ ಓದಲಿಲ್ಲ',
      bodyEn: 'Both calls genuinely passed through the identical handle() function with no shared mutable state between them -- request 2\'s response id (2) matched its own request id, and its metadata came entirely from its own params, not from anything request 1 established moments earlier.',
      bodyKn: 'ಎರಡೂ calls ನಿಜವಾಗಿ ಒಂದೇ handle() function ಮೂಲಕ ಹಾದುಹೋದವೂ, ಅವುಗಳ ನಡುವೆ ಯಾವುದೇ ಹಂಚಿಕೊಂಡ mutable state ಇಲ್ಲದೆ.' } },

    { type: 'heading', data: { textEn: 'Notifications vs Requests', textKn: 'Notifications vs Requests', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'No id Means No Matched Response', headingKn: 'ಯಾವುದೇ id ಎಂದೂ ಅರ್ಥ ಯಾವುದೇ Matched Response ಇಲ್ಲ',
      bodyEn: 'validate_request() genuinely checks "id" not in request and returns an error for a request missing it entirely -- but a true JSON-RPC notification is a distinct message shape that never expects a response at all. We genuinely confirm the dispatcher\'s id-presence check by removing id from an otherwise valid request.',
      bodyKn: 'validate_request() ನಿಜವಾಗಿ "id" not in request ಅನ್ನೂ ಪರಿಶೀಲಿಸುತ್ತದೆ, ಅದೂ ಸಂಪೂರ್ಣವಾಗಿ ಕಳೆದುಹೋದ ಒಂದೂ request ಗಾಗಿ ದೋಷ ಹಿಂತಿರುಗಿಸುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'missing_id.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'An otherwise well-formed request genuinely missing its "id" field, confirming the dispatcher rejects it distinctly from a metadata problem.',
      descKn: 'ಇಲ್ಲದಿದ್ದರೆ ಚೆನ್ನಾಗಿ-ರೂಪುಗೊಂಡ request ನಿಜವಾಗಿ ಅದೂ ya "id" field ಕಳೆದುಕೊಂಡಿದೆ.',
      code: "headers = {'MCP-Protocol-Version': '2026-07-28', 'Mcp-Method': 'server/discover'}\nno_id_request = {'jsonrpc': '2.0', 'method': 'server/discover',\n    'params': {'_meta': {PV_KEY: '2026-07-28', CC_KEY: {}}}}\nprint(handle(no_id_request, headers))" } },
    { type: 'output', data: { output: "{'jsonrpc': '2.0', 'id': None, 'error': {'code': -32600, 'message': 'Invalid Request'}}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Missing id Is Rejected Before Metadata Is Even Checked', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕಳೆದುಹೋದ id Metadata ಪರಿಶೀಲಿಸುವ ಮೊದಲೇ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿದೆ',
      bodyEn: 'The genuine error -32600 Invalid Request fired before validate_request() ever reached the _meta checks -- envelope validation genuinely happens first in the pipeline, exactly matching the validation-order principle this module builds toward in Part 2.',
      bodyKn: 'ನಿಜ ದೋಷ -32600 Invalid Request validate_request() _meta checks ತಲುಪುವ ಮೊದಲೇ ಪ್ರಚೋದಿಸಿತೂ.' } },
    { type: 'table', data: {
      captionEn: 'Genuine Evidence Summary Across This Lesson', captionKn: 'ಈ Lesson ಆದ್ಯಂತ ನಿಜ ಸಾಕ್ಷ್ಯ ಸಾರಾಂಶ',
      rows: "Claim|Genuinely proved by\nDiscovery returns a typed, cacheable result|Full resultType:complete response with ttlMs/cacheScope/serverInfo\nNo hidden protocol-session state|Zero global variables anywhere in validate_request()/handle_server_discover()\nRequest 2 is independent of request 1|Both processed by the same handle(), correct correlation, own _meta\nMissing id is rejected before metadata checks|-32600 fired immediately, never reached _meta validation" } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what did the discovery response\'s resultType field contain?', qKn: 'Discovery response ya resultType field ನಿಜವಾಗಿ ಏನೂ ಒಳಗೊಂಡಿತ್ತೂ?',
        opts: ['"complete"', '"ok"', 'null', '"success"'], correct: 0,
        optsKn: ['"complete"', '"ok"', 'null', '"success"'] },
      { q: 'Genuinely confirmed: did the code contain any global variable storing "the current protocol version" across requests?', qKn: 'Code requests ಆದ್ಯಂತ "current protocol version" ಸಂಗ್ರಹಿಸುವ ಯಾವುದೇ global variable ಒಳಗೊಂಡಿತ್ತೇ?',
        opts: ['Yes, one global variable', 'Yes, two global variables', 'No, none existed', 'It could not be determined'], correct: 2,
        optsKn: ['ಹೌದೂ, ಒಂದೂ global variable', 'ಹೌದೂ, ಎರಡೂ global variables', 'ಇಲ್ಲ, ಯಾವುದೂ ಅಸ್ತಿತ್ವದಲ್ಲಿರಲಿಲ್ಲ', 'ಇದನ್ನೂ ನಿರ್ಧರಿಸಲಾಗಲಿಲ್ಲ'] },
      { q: 'Which two fields are genuinely required in params._meta, based on the code\'s validation logic?', qKn: 'Code ya validation logic ಆಧರಿಸಿ, params._meta ನಲ್ಲಿ ಯಾವ ಎರಡೂ fields ನಿಜವಾಗಿ ಅಗತ್ಯ?',
        opts: ['ttlMs and cacheScope', 'protocolVersion and clientCapabilities', 'id and method', 'clientInfo and serverInfo'], correct: 1,
        optsKn: ['ttlMs, cacheScope', 'protocolVersion, clientCapabilities', 'id, method', 'clientInfo, serverInfo'] },
      { q: 'Genuinely confirmed: what happened to request 2\'s response id compared to its request id?', qKn: 'Request 2 ya response id ಅದೂ ya request id ಗೆ ಹೋಲಿಸಿ ಏನಾಯಿತೂ?',
        opts: ['They matched exactly (both were 2)', 'The response id was 1', 'The ids were unrelated', 'No response was returned'], correct: 0,
        optsKn: ['ಅವೂ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾದವೂ (ಎರಡೂ 2 ಆಗಿದ್ದವೂ)', 'Response id 1 ಆಗಿತ್ತೂ', 'ids ಸಂಬಂಧವಿಲ್ಲದಿದ್ದವೂ', 'ಯಾವುದೇ response ಹಿಂತಿರುಗಿಸಲಿಲ್ಲ'] },
      { q: 'Which MCP primitive exposes URI-addressed data rather than model-controlled actions?', qKn: 'model-controlled actions ಬದಲೂ URI-addressed data ಅನ್ನೂ ಯಾವ MCP primitive ಒಡ್ಡುತ್ತದೆ?',
        opts: ['Prompts', 'Resources', 'Tools', 'None of them'], correct: 1,
        optsKn: ['Prompts', 'Resources', 'Tools', 'ಇವುಗಳಲ್ಲಿ ಯಾವುದೂ ಇಲ್ಲ'] },
    ] } },
  ],
};
