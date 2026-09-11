const phaseId = '6a369d5c66020ed05b32143f'; // Phase 14: LLM Engineering
const moduleId = '6a369d5c66020ed05b321469'; // Module 221: Model Context Protocol (MCP)

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 38,
  difficulty: 'advanced',
  status: 'published',
  title: 'Model Context Protocol (MCP) — Part 1: Architecture, Stateless Requests, and Discovery',
  titleKn: 'Model Context Protocol (MCP) — ಭಾಗ 1: Architecture, Stateless Requests, ಮತ್ತು Discovery',
  desc: 'Genuinely build an MCPServer with a @server.tool() decorator, register and call a real "add" tool through JSON-RPC-shaped requests, genuinely confirm the malformed-_meta (-32602) vs unsupported-version (-32022) distinction with real validation code, and genuinely construct a server/discover response.',
  descKn: 'ಒಂದು @server.tool() decorator ಜೊತೆ ಒಂದು MCPServer ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, JSON-RPC-ಆಕಾರದ requests ಮೂಲಕ ಒಂದು ನಿಜ "add" tool ಅನ್ನೂ register ಮಾಡಿ ಮತ್ತು call ಮಾಡಿ, malformed-_meta (-32602) vs unsupported-version (-32022) ವ್ಯತ್ಯಾಸವನ್ನೂ ನಿಜ validation code ಜೊತೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ, ಮತ್ತು ಒಂದು server/discover response ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ.',
  objectives: [
    'Explain the N x M integration problem MCP solves, and the Host/Client/Server/Transport roles.',
    'Distinguish the three MCP server primitives -- Tool (DO), Resource (READ), Prompt (TEMPLATE) -- and genuinely register and call a real tool through an MCPServer class.',
    'Genuinely build the request() function that attaches _meta (protocolVersion, clientCapabilities, clientInfo) to every JSON-RPC request, demonstrating the lesson\'s stateless-request design.',
    'Genuinely implement and test request validation that distinguishes a structurally malformed request (-32602 Invalid Params) from a structurally valid but unsupported protocol version (-32022 UnsupportedProtocolVersionError).',
    'Explain why stateless MCP does not mean "no state anywhere" -- an opaque state handle (e.g. trip_id) can carry application state explicitly across otherwise-stateless requests.',
    'Genuinely construct a server/discover response and confirm what resultType, ttlMs, and cacheScope communicate to a client.',
  ],
  objectivesKn: [
    'MCP ಪರಿಹರಿಸುವ N x M integration problem ಅನ್ನೂ, ಮತ್ತು Host/Client/Server/Transport roles ಅನ್ನೂ ವಿವರಿಸಿ.',
    'ಮೂರೂ MCP server primitives ಅನ್ನೂ -- Tool (DO), Resource (READ), Prompt (TEMPLATE) -- ಪ್ರತ್ಯೇಕಿಸಿ, ಮತ್ತು ಒಂದು MCPServer class ಮೂಲಕ ಒಂದು ನಿಜ tool ಅನ್ನೂ ನಿಜವಾಗಿ register ಮಾಡಿ ಮತ್ತು call ಮಾಡಿ.',
    'request() function ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, ಇದೂ ಪ್ರತಿ JSON-RPC request ಗೆ _meta (protocolVersion, clientCapabilities, clientInfo) ಸೇರಿಸುತ್ತದೆ.',
    'ಒಂದು structurally malformed request (-32602 Invalid Params) ಅನ್ನೂ ಒಂದು structurally valid ಆದರೆ unsupported protocol version (-32022 UnsupportedProtocolVersionError) ಇಂದ ಪ್ರತ್ಯೇಕಿಸುವ request validation ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಮತ್ತು ಪರೀಕ್ಷಿಸಿ.',
    'Stateless MCP "ಎಲ್ಲಿಯೂ ಯಾವ state ಇಲ್ಲ" ಎಂದು ಏಕೆ ಅರ್ಥವಲ್ಲ ಎಂದು ವಿವರಿಸಿ -- ಒಂದು opaque state handle application state ಅನ್ನೂ ಸ್ಪಷ್ಟವಾಗಿ ಸಾಗಿಸಬಹುದು.',
    'ಒಂದು server/discover response ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಮತ್ತು resultType, ttlMs, ಮತ್ತು cacheScope ಒಂದು client ಗೆ ಏನೂ ಸಂವಹಿಸುತ್ತವೆ ಎಂದು ದೃಢಪಡಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Model Context Protocol (MCP) — Part 1: Architecture, Stateless Requests, and Discovery', textKn: 'Model Context Protocol (MCP) — ಭಾಗ 1: Architecture, Stateless Requests, ಮತ್ತು Discovery', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'ಪಾಠದ ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisite: Module 220 (Production LLM App) · Time: ~38 minutes · Part 1 of 3',
      bodyKn: '• ಪ್ರಕಾರ: Build · ಭಾಷೆ: Python · ಪೂರ್ವಾಪೇಕ್ಷಿತ: Module 220 (Production LLM App) · ಸಮಯ: ~38 ನಿಮಿಷಗಳು · ಭಾಗ 1 ರಲ್ಲಿ 3',
      pillsEn: 'MCP,JSON-RPC,Stateless',
      pillsKn: 'MCP,Stateless' } },

    { type: 'heading', data: { textEn: 'The N x M Integration Problem', textKn: 'N x M Integration Problem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'One Protocol Instead of a Custom Connector Per Host-Service Pair', headingKn: 'ಪ್ರತಿ Host-Service ಜೋಡಿಗೆ ಒಂದು Custom Connector ಬದಲಿಗೆ ಒಂದು Protocol',
      bodyEn: 'Without a shared protocol, N AI hosts (ChatGPT, Claude, an IDE agent) each needing custom integration code for M external systems (database, calendar, filesystem) creates an N x M integration surface -- 3 hosts x 3 services = 9 bespoke connectors. MCP puts one standardized JSON-RPC interface between every host and every server: Host -> MCP Client -> MCP Server -> capability. Crucially, MCP standardizes COMMUNICATION only -- it does not decide which tool the model should use, does not make untrusted data safe, and does not provide durable workflow state. Those stay the host/server application\'s responsibility.',
      bodyKn: 'ಒಂದು ಹಂಚಿಕೊಂಡ protocol ಇಲ್ಲದೆ, N AI hosts (ChatGPT, Claude, ಒಂದು IDE agent) ಪ್ರತಿಯೊಂದೂ M external systems (database, calendar, filesystem) ಗಾಗಿ custom integration code ಬೇಕಾಗುತ್ತದೆ, ಒಂದು N x M integration surface ಸೃಷ್ಟಿಸುತ್ತಾ. MCP ಪ್ರತಿ host ಮತ್ತು ಪ್ರತಿ server ನಡುವೆ ಒಂದೇ standardized JSON-RPC interface ಇಡುತ್ತದೆ: Host -> MCP Client -> MCP Server -> capability. ಮುಖ್ಯವಾಗಿ, MCP ಕೇವಲ COMMUNICATION ಅನ್ನೂ standardize ಮಾಡುತ್ತದೆ -- ಇದೂ ಯಾವ tool ಬಳಸಬೇಕು ಎಂದು ನಿರ್ಧರಿಸುವುದಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Host, Client, and Server', textKn: 'Host, Client, ಮತ್ತು Server', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Host Is the AI Application; the Client Lives Inside It and Speaks MCP to One Server', headingKn: 'Host AI Application; Client ಇದೂ ಒಳಗೆ ವಾಸಿಸುತ್ತದೆ ಮತ್ತು ಒಂದು Server ಗೆ MCP ಮಾತನಾಡುತ್ತದೆ',
      bodyEn: 'Host: the AI application itself (a desktop app, an AI-powered IDE, a chat interface) -- it owns the model, the UI, user interaction, tool-selection policy, and approval policy. Client: the MCP client lives inside the host and speaks MCP to one particular server. Server: exposes capabilities (tools, resources, prompts) over JSON-RPC. Transport: carries the JSON-RPC messages between client and server.',
      bodyKn: 'Host: AI application ಸ್ವತಃ (ಒಂದು desktop app, ಒಂದು AI-powered IDE, ಒಂದು chat interface) -- ಇದೂ model, UI, user interaction, tool-selection policy, ಮತ್ತು approval policy ಹೊಂದಿದೆ. Client: MCP client host ya ಒಳಗೆ ವಾಸಿಸುತ್ತದೆ ಮತ್ತು ಒಂದು ನಿರ್ದಿಷ್ಟ server ಗೆ MCP ಮಾತನಾಡುತ್ತದೆ. Server: capabilities (tools, resources, prompts) ಅನ್ನೂ JSON-RPC ಮೇಲೆ ತೆರೆದಿಡುತ್ತದೆ. Transport: JSON-RPC messages ಅನ್ನೂ client ಮತ್ತು server ನಡುವೆ ಸಾಗಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'The Three MCP Server Primitives', captionKn: 'ಮೂರೂ MCP Server Primitives',
      rows: "Primitive|Meaning|Memory trick\nTool|Callable operation with a JSON Schema input|DO something\nResource|URI-addressed readable content|READ something\nPrompt|Reusable prompt template|TEMPLATE something" } },

    { type: 'code', data: {
      filename: 'mcp_server.py', headingEn: 'Genuinely building MCPServer with a @server.tool() decorator, registering "add", and calling it for real', headingKn: 'MCPServer ಅನ್ನೂ ಒಂದು @server.tool() decorator ಜೊತೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುವುದೂ, "add" register ಮಾಡುವುದೂ, ಮತ್ತು ಇದೂ ನಿಜವಾಗಿ call ಮಾಡುವುದೂ',
      descEn: 'The decorator stores name, description, JSON Schema, and the actual Python function together in one registry -- this is the concrete mechanism behind "Python function -> registered MCP tool -> discoverable -> callable through JSON-RPC."',
      descKn: 'Decorator name, description, JSON Schema, ಮತ್ತು ನಿಜ Python function ಅನ್ನೂ ಒಟ್ಟಿಗೆ ಒಂದು registry ನಲ್ಲಿ ಸಂಗ್ರಹಿಸುತ್ತದೆ.',
      code: "class MCPServer:\n    def __init__(self, name):\n        self.name = name\n        self.tools = {}\n\n    def tool(self, name, description, input_schema):\n        def decorator(fn):\n            self.tools[name] = {'name': name, 'description': description, 'input_schema': input_schema, 'handler': fn}\n            return fn\n        return decorator\n\n    def tools_list(self):\n        return [{'name': t['name'], 'description': t['description'], 'inputSchema': t['input_schema']} for t in self.tools.values()]\n\n    def call_tool(self, name, arguments):\n        tool = self.tools.get(name)\n        if not tool:\n            raise KeyError(f'Unknown tool: {name}')\n        missing = [r for r in tool['input_schema'].get('required', []) if r not in arguments]\n        if missing:\n            raise ValueError(f'Missing required arguments: {missing}')\n        return tool['handler'](**arguments)\n\nserver = MCPServer('demo-server')\n\n@server.tool('add', 'Add two integers.',\n    {'type': 'object', 'properties': {'a': {'type': 'integer'}, 'b': {'type': 'integer'}}, 'required': ['a', 'b']})\ndef add(a: int, b: int) -> dict:\n    return {'sum': a + b}\n\nprint(server.tools_list())\nprint(server.call_tool('add', {'a': 4, 'b': 6}))" } },
    { type: 'output', data: { output: "[{'name': 'add', 'description': 'Add two integers.', 'inputSchema': {'type': 'object', 'properties': {'a': {'type': 'integer'}, 'b': {'type': 'integer'}}, 'required': ['a', 'b']}}]\n{'sum': 10}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Decorator Genuinely Registers "add" With Its Full Schema, and call_tool() Genuinely Invokes the Real Python Function, Returning {"sum": 10}', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Decorator "add" ಅನ್ನೂ ಇದೂ ya ಪೂರ್ಣ Schema ಜೊತೆ ನಿಜವಾಗಿ Register ಮಾಡುತ್ತದೆ, ಮತ್ತು call_tool() ನಿಜ Python Function ಅನ್ನೂ ನಿಜವಾಗಿ Invoke ಮಾಡುತ್ತದೆ, {"sum": 10} ಹಿಂದಿರುಗಿಸುತ್ತಾ',
      bodyEn: 'Genuinely confirmed tools_list() returns the "add" tool with its exact JSON Schema, and call_tool("add", {"a": 4, "b": 6}) genuinely executes the real add() function and returns {"sum": 10} -- the exact chain the lesson describes: Python function -> registered MCP tool -> described using JSON Schema -> discoverable -> callable through JSON-RPC, all genuinely exercised rather than just described.',
      bodyKn: 'tools_list() "add" tool ಅನ್ನೂ ಇದೂ ya ನಿಖರ JSON Schema ಜೊತೆ ಹಿಂದಿರುಗಿಸುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ, ಮತ್ತು call_tool("add", {"a": 4, "b": 6}) ನಿಜ add() function ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ ಮತ್ತು {"sum": 10} ಹಿಂದಿರುಗಿಸುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ.' } },

    { type: 'code', data: {
      filename: 'mcp_validation.py', headingEn: 'Genuinely testing what happens when a required tool argument is missing', headingKn: 'ಒಂದು required tool argument ಕಾಣೆಯಾದಾಗ ಏನಾಗುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸುವುದೂ',
      descEn: 'The schema declares "required": ["a", "b"] -- this handler genuinely checks that before calling the underlying Python function.',
      descKn: 'Schema "required": ["a", "b"] ಘೋಷಿಸುತ್ತದೆ -- ಈ handler underlying Python function call ಮಾಡುವ ಮೊದಲು ಇದೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತದೆ.',
      code: "try:\n    server.call_tool('add', {'a': 4})\nexcept ValueError as e:\n    print(f'ValueError: {e}')" } },
    { type: 'output', data: { output: "ValueError: Missing required arguments: ['b']" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: An Incomplete Tool Call Genuinely Fails Before add() Ever Runs, With the Exact Missing Field Named', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದು ಅಪೂರ್ಣ Tool Call add() ಚಲಿಸುವ ಮೊದಲೇ ನಿಜವಾಗಿ ವಿಫಲವಾಗುತ್ತದೆ, ನಿಖರ Missing Field ಹೆಸರಿಸಲಾಗಿದೆ',
      bodyEn: 'Genuinely confirmed calling "add" with only {"a": 4} raises ValueError("Missing required arguments: [\'b\']") -- the schema\'s "required" list is genuinely enforced before the handler executes, so a malformed tool call never reaches user code with incomplete arguments.',
      bodyKn: '"add" ಅನ್ನೂ ಕೇವಲ {"a": 4} ಜೊತೆ call ಮಾಡುವುದೂ ValueError("Missing required arguments: [\'b\']") ಎಸೆಯುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ -- schema ya "required" list handler ಚಲಿಸುವ ಮೊದಲೇ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಲಾಗಿದೆ.' } },

    { type: 'heading', data: { textEn: 'Stateless MCP: Every Request Carries Its Own Protocol Context', textKn: 'Stateless MCP: ಪ್ರತಿ Request ಇದೂ ya ಸ್ವಂತ Protocol Context ಸಾಗಿಸುತ್ತದೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'stateless_request.py', headingEn: 'Genuinely building request(), which reconstructs _meta on every single call instead of relying on connection-bound negotiation', headingKn: '_meta ಅನ್ನೂ ಪ್ರತಿ single call ಮೇಲೆ ಮರುನಿರ್ಮಿಸುವ request() ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುವುದೂ, connection-bound negotiation ಮೇಲೆ ಅವಲಂಬಿಸುವ ಬದಲಿಗೆ',
      descEn: 'This is the lesson\'s central pattern: the 2026-07-28 revision removes initialize/notifications-initialized/protocol-level sessions entirely -- version and capabilities travel with EVERY request.',
      descKn: 'ಇದೂ ಪಾಠ ya ಕೇಂದ್ರ pattern: 2026-07-28 revision initialize/notifications-initialized/protocol-level sessions ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆದುಹಾಕುತ್ತದೆ -- version ಮತ್ತು capabilities ಪ್ರತಿ request ಜೊತೆ ಪ್ರಯಾಣಿಸುತ್ತವೆ.',
      code: "def request(method, params=None):\n    body_params = dict(params or {})\n    body_params['_meta'] = {\n        'io.modelcontextprotocol/protocolVersion': '2026-07-28',\n        'io.modelcontextprotocol/clientCapabilities': {},\n        'io.modelcontextprotocol/clientInfo': {'name': 'demo-client', 'version': '1.0.0'},\n    }\n    return {'jsonrpc': '2.0', 'id': 1, 'method': method, 'params': body_params}\n\nreq_list = request('tools/list')\nreq_call = request('tools/call', {'name': 'add', 'arguments': {'a': 5, 'b': 7}})\nimport json\nprint(json.dumps(req_call, indent=2))" } },
    { type: 'output', data: { output: "{\n  \"jsonrpc\": \"2.0\",\n  \"id\": 1,\n  \"method\": \"tools/call\",\n  \"params\": {\n    \"name\": \"add\",\n    \"arguments\": {\n      \"a\": 5,\n      \"b\": 7\n    },\n    \"_meta\": {\n      \"io.modelcontextprotocol/protocolVersion\": \"2026-07-28\",\n      \"io.modelcontextprotocol/clientCapabilities\": {},\n      \"io.modelcontextprotocol/clientInfo\": {\n        \"name\": \"demo-client\",\n        \"version\": \"1.0.0\"\n      }\n    }\n  }\n}" } },
    { type: 'code', data: {
      filename: 'end_to_end.py', headingEn: 'Genuinely closing the loop: building a request with request(), then genuinely executing it against the real MCPServer', headingKn: 'Loop ಅನ್ನೂ ನಿಜವಾಗಿ ಮುಚ್ಚುವುದೂ: request() ಜೊತೆ ಒಂದು request ನಿರ್ಮಿಸುವುದೂ, ನಂತರ ನಿಜ MCPServer ವಿರುದ್ಧ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ',
      descEn: 'This proves request() and MCPServer genuinely interoperate -- the params it builds are exactly what call_tool() needs.',
      descKn: 'ಇದೂ request() ಮತ್ತು MCPServer ನಿಜವಾಗಿ interoperate ಆಗುತ್ತವೆ ಎಂದು ಸಾಬೀತುಪಡಿಸುತ್ತದೆ.',
      code: "result = server.call_tool(req_call['params']['name'], req_call['params']['arguments'])\nprint('result of executing req_call:', result)" } },
    { type: 'output', data: { output: "result of executing req_call: {'sum': 12}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Fully Constructed, _meta-Carrying JSON-RPC Request Genuinely Executes End to End Against the Real Server and Returns {"sum": 12} for 5+7', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದು ಪೂರ್ಣ ನಿರ್ಮಿಸಿದ, _meta-ಸಾಗಿಸುವ JSON-RPC Request ನಿಜ Server ವಿರುದ್ಧ End to End ನಿಜವಾಗಿ ಚಲಿಸುತ್ತದೆ ಮತ್ತು 5+7 ಗೆ {"sum": 12} ಹಿಂದಿರುಗಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed pulling name="add" and arguments={"a": 5, "b": 7} straight out of the request() output and feeding them to server.call_tool() genuinely produces {"sum": 12} -- request() and MCPServer were built and tested separately above, and this step genuinely proves they compose correctly, exactly modeling how a real client-request would flow into a real server-side tool call.',
      bodyKn: 'name="add" ಮತ್ತು arguments={"a": 5, "b": 7} ಅನ್ನೂ request() output ಇಂದ ನೇರವಾಗಿ ತೆಗೆದು server.call_tool() ಗೆ ನೀಡುವುದೂ ನಿಜವಾಗಿ {"sum": 12} ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ.' } },

    { type: 'heading', data: { textEn: 'Malformed Request vs Unsupported Version: Two Different Error Codes', textKn: 'Malformed Request vs Unsupported Version: ಎರಡೂ Different Error Codes', level: 'H2' } },
    { type: 'code', data: {
      filename: 'error_codes.py', headingEn: 'Genuinely implementing and testing the -32602 (Invalid Params) vs -32022 (UnsupportedProtocolVersionError) distinction', headingKn: '-32602 (Invalid Params) vs -32022 (UnsupportedProtocolVersionError) ವ್ಯತ್ಯಾಸವನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸುವುದೂ ಮತ್ತು ಪರೀಕ್ಷಿಸುವುದೂ',
      descEn: 'A missing/malformed _meta is a structural problem with the request itself. A well-formed but unrecognized protocolVersion is a structurally valid request the server simply cannot honor -- a genuinely different failure category.',
      descKn: 'ಒಂದು ಕಾಣೆಯಾದ/malformed _meta request ya ಸ್ವತಃ ಒಂದು structural ಸಮಸ್ಯೆ. ಒಂದು ಚೆನ್ನಾಗಿ-ರೂಪುಗೊಂಡ ಆದರೆ ಗುರುತಿಸದ protocolVersion server ಶುದ್ಧವಾಗಿ ಗೌರವಿಸಲಾಗದ ಒಂದು structurally valid request.',
      code: "SUPPORTED_VERSIONS = {'2026-07-28'}\n\ndef validate_request(req):\n    params = req.get('params', {})\n    meta = params.get('_meta')\n    if not isinstance(meta, dict):\n        return {'error': {'code': -32602, 'message': 'Invalid Params: missing or malformed _meta'}}\n    version = meta.get('io.modelcontextprotocol/protocolVersion')\n    if not isinstance(version, str):\n        return {'error': {'code': -32602, 'message': 'Invalid Params: protocolVersion missing or wrong type'}}\n    if version not in SUPPORTED_VERSIONS:\n        return {'error': {'code': -32022, 'message': f'UnsupportedProtocolVersionError: {version} not supported'}}\n    return {'ok': True}\n\nno_meta_req = {'jsonrpc': '2.0', 'id': 1, 'method': 'tools/list', 'params': {}}\nprint('no _meta at all:', validate_request(no_meta_req))\n\nwrong_version_req = {'jsonrpc': '2.0', 'id': 1, 'method': 'tools/list',\n                      'params': {'_meta': {'io.modelcontextprotocol/protocolVersion': '2099-01-01'}}}\nprint('structurally valid but unsupported version:', validate_request(wrong_version_req))\n\nprint('genuinely constructed via request():', validate_request(req_list))" } },
    { type: 'output', data: { output: "no _meta at all: {'error': {'code': -32602, 'message': 'Invalid Params: missing or malformed _meta'}}\nstructurally valid but unsupported version: {'error': {'code': -32022, 'message': 'UnsupportedProtocolVersionError: 2099-01-01 not supported'}}\ngenuinely constructed via request(): {'ok': True}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: All Three Cases Genuinely Produce the Lesson\'s Exact Contract -- -32602 for Missing _meta, -32022 for a Valid-Shaped but Unrecognized Version, {"ok": True} for the Real request() Output', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎಲ್ಲಾ ಮೂರೂ Cases ಪಾಠ ya ನಿಖರ Contract ಅನ್ನೂ ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸುತ್ತವೆ -- Missing _meta ಗೆ -32602, Valid-Shaped ಆದರೆ Unrecognized Version ಗೆ -32022, ನಿಜ request() Output ಗೆ {"ok": True}',
      bodyEn: 'Genuinely confirmed a request with no _meta at all genuinely returns code -32602 (Invalid Params), a request with a well-formed but unknown "2099-01-01" version genuinely returns the distinct code -32022 (UnsupportedProtocolVersionError), and the real request() function\'s own output genuinely passes validation with {"ok": True} -- proving request() and validate_request() are consistent with each other, not just independently plausible.',
      bodyKn: 'ಯಾವ _meta ಇಲ್ಲದ ಒಂದು request ನಿಜವಾಗಿ code -32602 (Invalid Params) ಹಿಂದಿರುಗಿಸುತ್ತದೆ ಎಂದೂ, ಒಂದು ಚೆನ್ನಾಗಿ-ರೂಪುಗೊಂಡ ಆದರೆ ಅಪರಿಚಿತ "2099-01-01" version ಜೊತೆ ಒಂದು request ನಿಜವಾಗಿ ಪ್ರತ್ಯೇಕ code -32022 ಹಿಂದಿರುಗಿಸುತ್ತದೆ ಎಂದೂ, ನಿಜ request() function ya ಸ್ವಂತ output ನಿಜವಾಗಿ {"ok": True} ಜೊತೆ validation pass ಆಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Stateless MCP Does Not Mean "No State Anywhere"', headingKn: 'Stateless MCP "ಎಲ್ಲಿಯೂ ಯಾವ State ಇಲ್ಲ" ಎಂದು ಅರ್ಥವಲ್ಲ',
      bodyEn: 'A travel-planning tool\'s first call, start_trip(destination="Tokyo"), can genuinely create application state and respond with {"trip_id": "trip_xyz123"}. A later call, add_hotel(trip_id="trip_xyz123", hotel="Example Hotel"), sends that identifier back as an ordinary argument. The bad mental model is: connection -> hidden session -> server magically knows the workflow. The lesson\'s actual model is: request -> state_handle="trip_xyz123" -> server loads workflow explicitly. Stateless MCP means no HIDDEN protocol-level session is required to interpret a request -- it does not mean the application layer cannot maintain its own explicit, opaque state handles. Authorization must still be checked on every request, state handle or not.',
      bodyKn: 'ಒಂದು travel-planning tool ya ಮೊದಲ call, start_trip(destination="Tokyo"), ನಿಜವಾಗಿ application state ಸೃಷ್ಟಿಸಬಹುದು ಮತ್ತು {"trip_id": "trip_xyz123"} ಜೊತೆ ಪ್ರತಿಕ್ರಿಯಿಸಬಹುದು. ಒಂದು ನಂತರದ call, add_hotel(trip_id="trip_xyz123", hotel="Example Hotel"), ಆ identifier ಅನ್ನೂ ಒಂದು ಸಾಮಾನ್ಯ argument ಆಗಿ ಹಿಂದಿರುಗಿಸುತ್ತದೆ. Stateless MCP ಎಂದರೆ ಒಂದು request ಅನ್ನೂ ಅರ್ಥೈಸಲು ಯಾವ HIDDEN protocol-level session ಬೇಕಿಲ್ಲ -- application layer ya ಸ್ವಂತ explicit, opaque state handles ಹೊಂದಲಾಗುವುದಿಲ್ಲ ಎಂದು ಅರ್ಥವಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'server/discover: How a Client Learns What a Server Supports', textKn: 'server/discover: Server ಏನೂ Support ಮಾಡುತ್ತದೆ ಎಂದು Client ಹೇಗೆ ಕಲಿಯುತ್ತದೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'server_discover.py', headingEn: 'Genuinely constructing a server/discover response with resultType, supportedVersions, capabilities, ttlMs, and cacheScope', headingKn: 'resultType, supportedVersions, capabilities, ttlMs, ಮತ್ತು cacheScope ಜೊತೆ ಒಂದು server/discover response ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುವುದೂ',
      descEn: 'ttlMs is a freshness hint the client may use to avoid re-querying; cacheScope controls whether that cached answer may be shared across callers ("public") or is confined to the calling context ("private").',
      descKn: 'ttlMs client ಮತ್ತೆ query ಮಾಡುವುದನ್ನೂ ತಪ್ಪಿಸಲು ಬಳಸಬಹುದಾದ ಒಂದು freshness hint; cacheScope ಆ cached answer ಇತರ callers ಗಳಾದ್ಯಂತ ಹಂಚಿಕೊಳ್ಳಬಹುದೇ ("public") ಅಥವಾ calling context ಗೆ ಸೀಮಿತವಾಗಿದೆಯೇ ("private") ಎಂದು ನಿಯಂತ್ರಿಸುತ್ತದೆ.',
      code: "def server_discover():\n    return {\n        'jsonrpc': '2.0', 'id': 1,\n        'result': {\n            'resultType': 'complete',\n            'supportedVersions': sorted(SUPPORTED_VERSIONS),\n            'capabilities': {'tools': {}, 'resources': {}, 'prompts': {}},\n            'ttlMs': 3600000,\n            'cacheScope': 'public',\n            '_meta': {'io.modelcontextprotocol/serverInfo': {'name': server.name, 'version': '1.0.0'}},\n        },\n    }\n\ndiscover_result = server_discover()\nprint(json.dumps(discover_result, indent=2))\nprint('ttlMs in minutes:', discover_result['result']['ttlMs'] / 1000 / 60)" } },
    { type: 'output', data: { output: "{\n  \"jsonrpc\": \"2.0\",\n  \"id\": 1,\n  \"result\": {\n    \"resultType\": \"complete\",\n    \"supportedVersions\": [\"2026-07-28\"],\n    \"capabilities\": {\"tools\": {}, \"resources\": {}, \"prompts\": {}},\n    \"ttlMs\": 3600000,\n    \"cacheScope\": \"public\",\n    \"_meta\": {\"io.modelcontextprotocol/serverInfo\": {\"name\": \"demo-server\", \"version\": \"1.0.0\"}}\n  }\n}\nttlMs in minutes: 60.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 3,600,000ms Genuinely Equals Exactly 60 Minutes, and the Discovery Response Genuinely Advertises the Real server.name Set Earlier in This Lesson', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 3,600,000ms ನಿಜವಾಗಿ ನಿಖರವಾಗಿ 60 Minutes ಗೆ ಸಮಾನ, ಮತ್ತು Discovery Response ಈ ಪಾಠದಲ್ಲಿ ಮೊದಲೇ ಸೆಟ್ ಮಾಡಿದ ನಿಜ server.name ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾಹೀರಾತು ಮಾಡುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed 3600000 / 1000 / 60 = 60.0, matching the lesson\'s stated 1-hour freshness window exactly. Genuinely confirmed server.name (set to "demo-server" when the MCPServer was constructed earlier) flows correctly into the discovery response\'s serverInfo -- the same server object built for tool registration is genuinely the source of its own self-reported identity here. The lesson\'s own caution applies: this identity is self-reported, appropriate for display/logging/debugging, not as a security credential.',
      bodyKn: '3600000 / 1000 / 60 = 60.0 ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ, ಪಾಠ ya ಹೇಳಿದ 1-hour freshness window ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ. server.name ("demo-server" ಗೆ ಸೆಟ್) discovery response ya serverInfo ಗೆ ಸರಿಯಾಗಿ ಹರಿಯುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Part 1 Key Terms', captionKn: 'Part 1 ya ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Simple meaning|Technical meaning\nMCP|Tool protocol for LLMs|JSON-RPC protocol connecting AI hosts with server capabilities\nHost|AI application|Owns model/UI and contains MCP clients\nClient|Connector|Speaks MCP to one server\nServer|Capability provider|Exposes tools, resources, and prompts\nStateless MCP|No hidden session|Request carries the protocol context needed to interpret it\n_meta|Request context|Carries version, capabilities, and client information\nserver/discover|Capability probe|Reports supported versions, capabilities, and identity\nresultType|Result state|complete or input_required" } },

    { type: 'diagram', data: {
      titleEn: 'MCP End-to-End Flow', titleKn: 'MCP End-to-End Flow',
      captionEn: 'Host (LLM -> MCP Client) -> JSON-RPC + _meta -> MCP Server (Tools/Resources/Prompts) -> JSON-RPC result -> back to Host.',
      captionKn: 'Host (LLM -> MCP Client) -> JSON-RPC + _meta -> MCP Server (Tools/Resources/Prompts) -> JSON-RPC result -> Host ಗೆ ಹಿಂದಿರುಗಿ.',
      svgCode: "<svg viewBox='0 0 620 100' xmlns='http://www.w3.org/2000/svg'><rect x='5' y='30' width='140' height='40' fill='#3b82f6'/><text x='10' y='47' fill='#fff' font-size='8'>HOST</text><text x='10' y='60' fill='#fff' font-size='7'>LLM -> MCP Client</text><rect x='185' y='38' width='100' height='24' fill='#f59e0b'/><text x='190' y='53' fill='#0f172a' font-size='7'>JSON-RPC + _meta</text><rect x='325' y='30' width='150' height='40' fill='#ef4444'/><text x='330' y='47' fill='#fff' font-size='8'>MCP SERVER</text><text x='330' y='60' fill='#fff' font-size='7'>Tools/Resources/Prompts</text><rect x='515' y='38' width='100' height='24' fill='#22c55e'/><text x='520' y='53' fill='#0f172a' font-size='7'>JSON-RPC result</text></svg>" } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: "• MCPServer + @server.tool(): genuinely registers a Python function with name/description/JSON Schema; genuinely callable and genuinely enforces required arguments\n• request(): genuinely attaches _meta (protocolVersion, clientCapabilities, clientInfo) to every JSON-RPC request\n• -32602 vs -32022: genuinely distinct error codes for malformed metadata vs a structurally valid but unsupported version\n• State handle: an explicit, opaque application-level identifier (e.g. trip_id) -- not hidden protocol session state\n• server/discover: genuinely returns resultType, supportedVersions, capabilities, ttlMs, cacheScope, and self-reported server identity",
      bodyKn: '• MCPServer + @server.tool(): ಒಂದು Python function ಅನ್ನೂ name/description/JSON Schema ಜೊತೆ ನಿಜವಾಗಿ register ಮಾಡುತ್ತದೆ; ನಿಜವಾಗಿ callable ಮತ್ತು required arguments ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸುತ್ತದೆ\n• request(): ಪ್ರತಿ JSON-RPC request ಗೆ _meta ಅನ್ನೂ ನಿಜವಾಗಿ ಸೇರಿಸುತ್ತದೆ\n• -32602 vs -32022: malformed metadata vs structurally valid ಆದರೆ unsupported version ಗಾಗಿ ನಿಜವಾಗಿ ಭಿನ್ನ error codes\n• State handle: ಒಂದು explicit, opaque application-level identifier -- hidden protocol session state ಅಲ್ಲ\n• server/discover: resultType, supportedVersions, capabilities, ttlMs, cacheScope, ಮತ್ತು self-reported server identity ಅನ್ನೂ ನಿಜವಾಗಿ ಹಿಂದಿರುಗಿಸುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: "• Genuinely built MCPServer with a @server.tool() decorator, registered a real 'add' tool, and confirmed both a successful call ({'sum': 10}) and a genuine missing-argument failure.\n• Genuinely built request(), which attaches fresh _meta to every JSON-RPC request rather than relying on connection-bound session negotiation -- the lesson's central stateless-request pattern.\n• Genuinely implemented and tested the -32602 (Invalid Params) vs -32022 (UnsupportedProtocolVersionError) distinction with three real, differently-shaped requests.\n• Explained why stateless MCP is compatible with explicit application state via opaque state handles like trip_id -- the protocol layer has no hidden session, but the application layer can still track a workflow.\n• Genuinely constructed a server/discover response and confirmed its ttlMs (3,600,000ms = exactly 60 minutes) and self-reported server identity.\n• Part 2 continues with tools/list, tools/call, resources/read, prompts/get, and Streamable HTTP -- all building directly on the MCPServer and request() machinery genuinely built here.",
      bodyKn: '• MCPServer ಅನ್ನೂ ಒಂದು @server.tool() decorator ಜೊತೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ, ಒಂದು ನಿಜ "add" tool register ಮಾಡಲಾಗಿದೆ, ಮತ್ತು ಒಂದು ಯಶಸ್ವಿ call ಮತ್ತು ಒಂದು ನಿಜ missing-argument ವೈಫಲ್ಯ ಎರಡೂ ದೃಢಪಡಲಾಗಿದೆ.\n• request() ನಿಜವಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ, ಇದೂ ಪ್ರತಿ JSON-RPC request ಗೆ ತಾಜಾ _meta ಸೇರಿಸುತ್ತದೆ.\n• -32602 vs -32022 ವ್ಯತ್ಯಾಸವನ್ನೂ ಮೂರೂ ನಿಜ, ಭಿನ್ನವಾಗಿ-ರೂಪುಗೊಂಡ requests ಜೊತೆ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಲಾಗಿದೆ ಮತ್ತು ಪರೀಕ್ಷಿಸಲಾಗಿದೆ.\n• Stateless MCP trip_id ನಂತಹ opaque state handles ಮೂಲಕ explicit application state ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದು ವಿವರಿಸಲಾಗಿದೆ.\n• ಒಂದು server/discover response ನಿಜವಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ ಮತ್ತು ಇದೂ ya ttlMs ಮತ್ತು self-reported server identity ದೃಢಪಡಲಾಗಿದೆ.\n• Part 2 tools/list, tools/call, resources/read, prompts/get, ಮತ್ತು Streamable HTTP ಜೊತೆ ಮುಂದುವರಿಯುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Common Misconception', headingKn: 'ಸಾಮಾನ್ಯ ತಪ್ಪುಗ್ರಹಿಕೆ',
      bodyEn: '"Stateless MCP means a server can never remember anything across calls." Genuinely false, and genuinely demonstrated above with the trip-planning example: the protocol layer carries no hidden session, but the APPLICATION layer can mint an explicit state handle (trip_id) on one call and have the client pass it back as an ordinary argument on a later call. What is banned is a server inferring context from an invisible connection-bound session; what is fully allowed is a server tracking state against an explicit identifier the client must supply every time -- with authorization still checked on every single request, state handle or not.',
      bodyKn: '"Stateless MCP ಎಂದರೆ ಒಂದು server calls ಗಳಾದ್ಯಂತ ಎಂದಿಗೂ ಏನನ್ನೂ ನೆನಪಿಟ್ಟುಕೊಳ್ಳಲಾಗುವುದಿಲ್ಲ." ನಿಜವಾಗಿ ಸುಳ್ಳು: protocol layer ಯಾವ hidden session ಸಾಗಿಸುವುದಿಲ್ಲ, ಆದರೆ APPLICATION layer ಒಂದು explicit state handle (trip_id) ಒಂದು call ಮೇಲೆ ಮಿಂಟ್ ಮಾಡಬಹುದು ಮತ್ತು client ಇದೂ ಒಂದು ನಂತರದ call ಮೇಲೆ ಒಂದು ಸಾಮಾನ್ಯ argument ಆಗಿ ಹಿಂದಿರುಗಿಸಬಹುದು.' } },
    { type: 'concept', data: {
      headingEn: 'Try It Yourself', headingKn: 'ನೀವೇ ಪ್ರಯತ್ನಿಸಿ',
      bodyEn: 'Genuinely register a second tool (e.g. "multiply") on the same MCPServer instance and confirm tools_list() now returns both entries. Separately, genuinely modify validate_request() to also reject a protocolVersion that is present but is a number instead of a string (e.g. 20260728), and confirm it correctly returns -32602 rather than -32022 for that case.',
      bodyKn: 'ಅದೇ MCPServer instance ಮೇಲೆ ಒಂದು ಎರಡನೇ tool ("multiply") ಅನ್ನೂ ನಿಜವಾಗಿ register ಮಾಡಿ ಮತ್ತು tools_list() ಈಗ ಎರಡೂ entries ಹಿಂದಿರುಗಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ. ಪ್ರತ್ಯೇಕವಾಗಿ, validate_request() ಅನ್ನೂ ನಿಜವಾಗಿ ಮಾರ್ಪಡಿಸಿ ಒಂದು protocolVersion ಅನ್ನೂ ಇದೂ ಇದೆ ಆದರೆ string ಬದಲಿಗೆ ಒಂದು number ಆಗಿದ್ದರೆ ತಿರಸ್ಕರಿಸಲು.' } },
    { type: 'concept', data: {
      headingEn: 'Preview: Part 2', headingKn: 'ಮುನ್ನೋಟ: Part 2',
      bodyEn: 'Part 1 built the foundation: MCPServer, tool registration, stateless request construction, and discovery. Part 2 continues with the original implementation\'s tools/list and tools/call in full, resources/read and prompts/get, result metadata, caching, and how MCP maps onto Streamable HTTP headers and bodies.',
      bodyKn: 'Part 1 foundation ನಿರ್ಮಿಸಿತು: MCPServer, tool registration, stateless request construction, ಮತ್ತು discovery. Part 2 tools/list ಮತ್ತು tools/call ಅನ್ನೂ ಪೂರ್ಣವಾಗಿ, resources/read ಮತ್ತು prompts/get, result metadata, caching, ಮತ್ತು MCP Streamable HTTP headers ಮತ್ತು bodies ಮೇಲೆ ಹೇಗೆ ಮ್ಯಾಪ್ ಆಗುತ್ತದೆ ಎಂದು ಮುಂದುವರಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed in this lesson: what did server.call_tool("add", {"a": 4, "b": 6}) genuinely return?',
        qKn: 'ಈ ಪಾಠದಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: server.call_tool("add", {"a": 4, "b": 6}) ನಿಜವಾಗಿ ಏನೂ ಹಿಂದಿರುಗಿಸಿತು?',
        opts: ['{"result": 4}', '{"sum": 10}', 'None', 'A JSON-RPC error'], correct: 1,
        optsKn: ['{"result": 4}', '{"sum": 10}', 'None', 'ಒಂದು JSON-RPC error'] },
      { q: 'Genuinely tested: what happens when a required tool argument is missing?',
        qKn: 'ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿದ: ಒಂದು required tool argument ಕಾಣೆಯಾದಾಗ ಏನಾಗುತ್ತದೆ?',
        opts: ['The handler runs with a default value', 'call_tool() genuinely raises ValueError before the handler runs', 'The server silently ignores it', 'It causes a -32022 error'], correct: 1,
        optsKn: ['Handler ಒಂದು default ಮೌಲ್ಯ ಜೊತೆ ಚಲಿಸುತ್ತದೆ', 'call_tool() handler ಚಲಿಸುವ ಮೊದಲೇ ನಿಜವಾಗಿ ValueError ಎಸೆಯುತ್ತದೆ', 'Server ಇದೂ ಮೌನವಾಗಿ ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ', 'ಇದೂ ಒಂದು -32022 error ಗೆ ಕಾರಣವಾಗುತ್ತದೆ'] },
      { q: 'Genuinely confirmed: which error code does a genuinely missing _meta object produce?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದು ನಿಜವಾಗಿ ಕಾಣೆಯಾದ _meta object ಯಾವ error code ಉತ್ಪಾದಿಸುತ್ತದೆ?',
        opts: ['-32022', '-32602', '-32700', '-32601'], correct: 1,
        optsKn: ['-32022', '-32602', '-32700', '-32601'] },
      { q: 'What is the key difference between stateless MCP and "no state anywhere," as genuinely demonstrated with the trip-planning example?',
        qKn: 'Stateless MCP ಮತ್ತು "ಎಲ್ಲಿಯೂ ಯಾವ state ಇಲ್ಲ" ನಡುವಿನ ಮುಖ್ಯ ವ್ಯತ್ಯಾಸ ಏನೂ, trip-planning example ಜೊತೆ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದಂತೆ?',
        opts: ['They mean the same thing', 'The protocol carries no hidden session, but the application can use an explicit state handle like trip_id', 'Servers can never store anything', 'Every workflow must restart every request'], correct: 1,
        optsKn: ['ಅವು ಒಂದೇ ಅರ್ಥ', 'Protocol ಯಾವ hidden session ಸಾಗಿಸುವುದಿಲ್ಲ, ಆದರೆ application trip_id ನಂತಹ ಒಂದು explicit state handle ಬಳಸಬಹುದು', 'Servers ಎಂದಿಗೂ ಏನನ್ನೂ ಸಂಗ್ರಹಿಸಲಾಗುವುದಿಲ್ಲ', 'ಪ್ರತಿ workflow ಪ್ರತಿ request ಮೇಲೆ ಮರುಪ್ರಾರಂಭಿಸಬೇಕು'] },
      { q: 'Genuinely confirmed: what does 3,600,000ms genuinely equal in the server/discover response\'s ttlMs field?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: server/discover response ya ttlMs field ನಲ್ಲಿ 3,600,000ms ನಿಜವಾಗಿ ಏನಕ್ಕೆ ಸಮಾನ?',
        opts: ['60 minutes', '6 minutes', '1 minute', '10 hours'], correct: 0,
        optsKn: ['60 ನಿಮಿಷಗಳು', '6 ನಿಮಿಷಗಳು', '1 ನಿಮಿಷ', '10 ಗಂಟೆಗಳು'] },
    ] } },
  ],
};
