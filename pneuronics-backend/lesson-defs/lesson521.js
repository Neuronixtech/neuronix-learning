const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214ed'; // Module 263: MCP Apps

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'MCP Apps on the Stateless Protocol (Part 1 of 3) — Discovery and Pre-Call UI Binding',
  titleKn: 'MCP Apps on the Stateless Protocol (Part 1 of 3) — Discovery ಮತ್ತು Pre-Call UI Binding',
  desc: 'Genuinely build server/discover and tools/list for a notes_timeline tool, proving that the ui:// resource is declared in tool metadata BEFORE invocation and that a non-Apps client still gets a fully working tool with text fallback.',
  descKn: 'ಒಂದೂ notes_timeline tool ಗಾಗಿ server/discover ಮತ್ತು tools/list ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, ui:// resource invocation ಗಿಂತ ಮೊದಲು tool metadata ನಲ್ಲಿ ಘೋಷಿಸಲ್ಪಟ್ಟಿದೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿ.',
  objectives: [
    'Explain why MCP Apps adds a browser UI on top of ordinary MCP tool/resource exchanges rather than replacing them.',
    'Distinguish three layers: MCP core (server/discover, tools/list, tools/call), the Apps bridge, and browser sandbox rules.',
    'Genuinely run server/discover and confirm the io.modelcontextprotocol/ui extension is advertised in capabilities.',
    'Genuinely prove the ui:// resource is bound to a tool in tools/list BEFORE the tool is ever called, letting the host pre-review it.',
    'Genuinely prove text fallback: a client without Apps support still gets a fully working tool result with no UI metadata.',
  ],
  objectivesKn: [
    'MCP Apps ಸಾಮಾನ್ಯ MCP tool/resource exchanges ಬದಲಾಯಿಸುವ ಬದಲಿಗೆ ಏಕೆ ಅವುಗಳ ಮೇಲೆ ಒಂದೂ browser UI ಸೇರಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಮೂರೂ layers ಪ್ರತ್ಯೇಕಿಸಿ: MCP core, Apps bridge, browser sandbox rules.',
    'server/discover ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಮತ್ತು io.modelcontextprotocol/ui extension ಘೋಷಿಸಲ್ಪಟ್ಟಿದೆ ಎಂದೂ ಖಚಿತಪಡಿಸಿ.',
    'ui:// resource tools/list ನಲ್ಲಿ tool call ಆಗುವ ಮೊದಲೇ ಒಂದೂ tool ಗೆ ಬಂಧಿಸಲ್ಪಟ್ಟಿದೆ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ.',
    'text fallback ಅನ್ನೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ: Apps support ಇಲ್ಲದ ಒಂದೂ client ಇನ್ನೂ ಪೂರ್ಣ ಕೆಲಸ ಮಾಡುವ tool result ಪಡೆಯುತ್ತದೆ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MCP Apps on the Stateless Protocol (Part 1 of 3)', textKn: 'MCP Apps on the Stateless Protocol (Part 1 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 260-262 · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 260-262 · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'MCP Apps,server/discover,Pre-Call UI Binding,Text Fallback', pillsKn: 'MCP Apps,server/discover,Pre-Call UI Binding,Text Fallback' } },

    { type: 'heading', data: { textEn: 'MCP Apps Adds a UI Layer, It Does Not Replace Tools', textKn: 'MCP Apps ಒಂದೂ UI Layer ಸೇರಿಸುತ್ತದೆ, Tools ಬದಲಾಯಿಸುವುದಿಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Three Separate Layers', headingKn: 'ಮೂರೂ ಪ್ರತ್ಯೇಕ Layers',
      bodyEn: 'A model uses descriptions for tool selection, a router uses names for routing, and users use displayed information for approval -- but MCP Apps stays built from normal MCP concepts (Tool, Resource, JSON-RPC, Host) rather than a separate application protocol. Layer A is MCP core (server/discover, tools/list, tools/call, resources/list, resources/read). Layer B is the Apps bridge (ui/initialize, covered in Part 3). Layer C is browser sandbox security (CSP, iframe rules, covered in Part 2).',
      bodyKn: 'ಒಂದೂ model tool selection ಗೆ descriptions ಬಳಸುತ್ತದೆ, ಒಂದೂ router routing ಗೆ names ಬಳಸುತ್ತದೆ, users ಅನುಮೋದನೆಗೆ ಪ್ರದರ್ಶಿತ ಮಾಹಿತಿ ಬಳಸುತ್ತಾರೆ -- ಆದರೆ MCP Apps ಸಾಮಾನ್ಯ MCP ಪರಿಕಲ್ಪನೆಗಳಿಂದ ನಿರ್ಮಿಸಲ್ಪಟ್ಟಿದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuine server/discover Advertising Apps Support', textKn: 'Apps Support ಘೋಷಿಸುವ ನಿಜ server/discover', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mcp_apps.py', headingEn: 'The io.modelcontextprotocol/ui extension, genuinely advertised', headingKn: 'io.modelcontextprotocol/ui extension, ನಿಜವಾಗಿ ಘೋಷಿಸಲ್ಪಟ್ಟಿದೆ',
      descEn: 'discovery does not create a session -- it is knowledge-gathering. Every later request still carries its own protocolVersion and clientCapabilities in _meta.',
      descKn: 'discovery ಒಂದೂ session ಸೃಷ್ಟಿಸುವುದಿಲ್ಲ -- ಇದೂ ಜ್ಞಾನ-ಸಂಗ್ರಹಣೆ. ಪ್ರತಿ ನಂತರದ request ಇನ್ನೂ ಅದರ ಸ್ವಂತ protocolVersion ಮತ್ತು clientCapabilities ಒಯ್ಯುತ್ತದೆ.',
      code: "PV_KEY = \"io.modelcontextprotocol/protocolVersion\"\nCC_KEY = \"io.modelcontextprotocol/clientCapabilities\"\nUI_EXTENSION = \"io.modelcontextprotocol/ui\"\nSUPPORTED_VERSIONS = {\"2026-07-28\"}\n\ndef server_discover():\n    return {\n        \"resultType\": \"complete\",\n        \"supportedVersions\": sorted(SUPPORTED_VERSIONS),\n        \"capabilities\": {\"tools\": {}, \"resources\": {}, \"extensions\": {UI_EXTENSION: {}}},\n        \"ttlMs\": 300000, \"cacheScope\": \"public\",\n    }\n\nimport json\nprint(json.dumps(server_discover(), indent=None))" } },
    { type: 'output', data: { output: '{"resultType": "complete", "supportedVersions": ["2026-07-28"], "capabilities": {"tools": {}, "resources": {}, "extensions": {"io.modelcontextprotocol/ui": {}}}, "ttlMs": 300000, "cacheScope": "public"}' } },

    { type: 'heading', data: { textEn: 'The UI Is Bound to the Tool BEFORE Invocation', textKn: 'UI Invocation ಗಿಂತ ಮೊದಲೇ Tool ಗೆ ಬಂಧಿಸಲ್ಪಟ್ಟಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Pre-Call Metadata Lets the Host Review First', headingKn: 'Pre-Call Metadata Host ಮೊದಲೂ ಪರಿಶೀಲಿಸಲು ಅನುಮತಿಸುತ್ತದೆ',
      bodyEn: '_meta.ui.resourceUri is pre-call metadata: the host learns ui://notes/timeline.html during tools/list, before ever invoking the tool -- so it can preload, cache, and security-review the HTML. Compare this to a bad design where the tool result itself says "execute this HTML", giving the host no chance to inspect anything beforehand.',
      bodyKn: '_meta.ui.resourceUri pre-call metadata: host tools/list ಸಮಯದಲ್ಲಿ ui://notes/timeline.html ಕಲಿಯುತ್ತದೆ, tool ಅನ್ನೂ ಎಂದಿಗೂ invoke ಮಾಡುವ ಮೊದಲೇ -- ಇದೂ preload, cache, security-review ಮಾಡಬಹುದು.' } },

    { type: 'code', data: {
      filename: 'mcp_apps.py', headingEn: 'Genuinely comparing tools/list WITH and WITHOUT Apps support', headingKn: 'Apps support ಜೊತೆ ಮತ್ತು ಇಲ್ಲದೆ tools/list ಅನ್ನೂ ನಿಜವಾಗಿ ಹೋಲಿಸುವುದೂ',
      descEn: 'Same underlying tool, two different descriptors depending on whether the requesting client advertised Apps support.',
      descKn: 'ಅದೇ ಆಧಾರವಾಗಿರುವ tool, requesting client Apps support ಘೋಷಿಸಿದೆಯೇ ಎಂಬುದನ್ನೂ ಆಧರಿಸಿ ಎರಡೂ ಭಿನ್ನ descriptors.',
      code: "def tools_list(client_supports_apps):\n    tool = {\"name\": \"notes_timeline\", \"description\": \"Render a timeline of notes.\",\n            \"inputSchema\": {\"type\": \"object\", \"properties\": {}}}\n    if client_supports_apps:\n        tool[\"_meta\"] = {\"ui\": {\"resourceUri\": \"ui://notes/timeline.html\"}}\n    return {\"resultType\": \"complete\", \"tools\": [tool]}\n\nprint(\"WITH Apps support:\", tools_list(True)[\"tools\"][0])\nprint()\nprint(\"WITHOUT Apps support:\", tools_list(False)[\"tools\"][0])" } },
    { type: 'output', data: { output: "WITH Apps support: {'name': 'notes_timeline', 'description': 'Render a timeline of notes.', 'inputSchema': {'type': 'object', 'properties': {}}, '_meta': {'ui': {'resourceUri': 'ui://notes/timeline.html'}}}\n\nWITHOUT Apps support: {'name': 'notes_timeline', 'description': 'Render a timeline of notes.', 'inputSchema': {'type': 'object', 'properties': {}}}" } },

    { type: 'heading', data: { textEn: 'Genuine Text Fallback', textKn: 'ನಿಜ Text Fallback', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mcp_apps.py', headingEn: 'tools/call returns data -- content + structuredContent, no UI URI repeated', headingKn: 'tools/call data ಹಿಂತಿರುಗಿಸುತ್ತದೆ -- content + structuredContent, UI URI ಮತ್ತೆ ಇಲ್ಲ',
      descEn: 'The result does not need to repeat ui://notes/timeline.html because the host already learned that association from tools/list. A host without Apps support gets the exact same useful text -- it just never learned about the UI resource in the first place.',
      descKn: 'result ui://notes/timeline.html ಮತ್ತೆ ಹೇಳಬೇಕಾಗಿಲ್ಲ ಏಕೆಂದರೆ host ಈಗಾಗಲೇ tools/list ಇಂದ ಆ association ಕಲಿತಿದೆ.',
      code: "def call_notes_timeline():\n    return {\n        \"resultType\": \"complete\",\n        \"content\": [{\"type\": \"text\", \"text\": \"Timeline ready.\"}],\n        \"structuredContent\": {\"notes\": [{\"id\": \"note-1\", \"title\": \"Discover\"}]},\n        \"isError\": False,\n    }\n\nprint(call_notes_timeline())" } },
    { type: 'output', data: { output: "{'resultType': 'complete', 'content': [{'type': 'text', 'text': 'Timeline ready.'}], 'structuredContent': {'notes': [{'id': 'note-1', 'title': 'Discover'}]}, 'isError': False}" } },

    { type: 'concept', data: {
      headingEn: 'Three Genuinely Different Things: Definition, Result, View', headingKn: 'ಮೂರೂ ನಿಜವಾಗಿ ಭಿನ್ನ ವಿಷಯಗಳು: Definition, Result, View',
      bodyEn: 'The tool DEFINITION (what can be called + which UI belongs to it) lives in tools/list. The tool RESULT (what data the operation produced) lives in tools/call. The UI RESOURCE (how to render that data interactively) lives in resources/read -- covered in Part 2. Never merge these three.',
      bodyKn: 'tool DEFINITION tools/list ನಲ್ಲಿ ವಾಸಿಸುತ್ತದೆ. tool RESULT tools/call ನಲ್ಲಿ ವಾಸಿಸುತ್ತದೆ. UI RESOURCE resources/read ನಲ್ಲಿ ವಾಸಿಸುತ್ತದೆ -- Part 2 ನಲ್ಲಿ ಒಳಗೊಂಡಿದೆ. ಈ ಮೂರನ್ನೂ ಎಂದಿಗೂ ವಿಲೀನಗೊಳಿಸಬೇಡಿ.' } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• MCP Apps adds an optional interactive HTML layer on top of ordinary MCP tools/resources -- it does not replace them.\n• We genuinely confirmed the io.modelcontextprotocol/ui extension is advertised in server/discover\'s capabilities.\n• The ui:// resource is bound in tools/list metadata BEFORE the tool is ever called, letting the host pre-review it.\n• We genuinely compared tools/list with and without Apps support -- the tool still works either way, just without UI binding for non-Apps clients.\n• Definition (tools/list), result (tools/call), and view (resources/read) are three genuinely separate concepts.',
      bodyKn: '• MCP Apps ಸಾಮಾನ್ಯ MCP tools/resources ಮೇಲೆ ಒಂದೂ optional interactive HTML layer ಸೇರಿಸುತ್ತದೆ -- ಬದಲಾಯಿಸುವುದಿಲ್ಲ.\n• io.modelcontextprotocol/ui extension server/discover ya capabilities ನಲ್ಲಿ ಘೋಷಿಸಲ್ಪಟ್ಟಿದೆ ಎಂದೂ ನಾವು ನಿಜವಾಗಿ ಖಚಿತಪಡಿಸಿದ್ದೇವೆ.\n• ui:// resource tool ಎಂದಿಗೂ call ಆಗುವ ಮೊದಲೇ tools/list metadata ನಲ್ಲಿ ಬಂಧಿಸಲ್ಪಟ್ಟಿದೆ.\n• ನಾವು Apps support ಜೊತೆ ಮತ್ತು ಇಲ್ಲದೆ tools/list ಅನ್ನೂ ನಿಜವಾಗಿ ಹೋಲಿಸಿದ್ದೇವೆ.\n• Definition, result, view ಮೂರೂ ನಿಜವಾಗಿ ಪ್ರತ್ಯೇಕ ಪರಿಕಲ್ಪನೆಗಳು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Where should the UI resource for notes_timeline be declared?', qKn: 'notes_timeline ಗಾಗಿ UI resource ಎಲ್ಲಿ ಘೋಷಿಸಬೇಕು?',
        opts: ['Only inside the final text result', 'Inside an MCP session cookie', 'In the tool definition returned by tools/list', 'Inside ui/notifications/initialized'],
        optsKn: ['ಕೇವಲ ಅಂತಿಮ text result ಒಳಗೆ', 'ಒಂದೂ MCP session cookie ಒಳಗೆ', 'tools/list ಹಿಂತಿರುಗಿಸಿದ tool definition ನಲ್ಲಿ', 'ui/notifications/initialized ಒಳಗೆ'],
        correct: 2 },
      { q: 'What does "extensions": {"io.modelcontextprotocol/ui": {}} mean?', qKn: '"extensions": {"io.modelcontextprotocol/ui": {}} ಏನೂ ಅರ್ಥ?',
        opts: ['The connection has created a UI session', 'The peer advertises MCP Apps support', 'All HTML has permission to access the host page', 'The tool invocation succeeded'],
        optsKn: ['connection ಒಂದೂ UI session ಸೃಷ್ಟಿಸಿದೆ', 'peer MCP Apps support ಘೋಷಿಸುತ್ತದೆ', 'ಎಲ್ಲಾ HTML host page access ಅನುಮತಿ ಹೊಂದಿದೆ', 'tool invocation ಯಶಸ್ವಿಯಾಯಿತೂ'],
        correct: 1 },
      { q: 'Why does each request contain "io.modelcontextprotocol/protocolVersion": "2026-07-28"?', qKn: 'ಪ್ರತಿ request "io.modelcontextprotocol/protocolVersion": "2026-07-28" ಏಕೆ ಒಳಗೊಂಡಿದೆ?',
        opts: ["Because the lesson's core protocol is stateless", 'Because the iframe chooses the server protocol version', 'Because tools/list is a browser API', 'Because ui:// requires HTTP cookies'],
        optsKn: ['ಪಾಠದ core protocol stateless ಆಗಿರುವುದರಿಂದ', 'iframe server protocol version ಆಯ್ಕೆ ಮಾಡುವುದರಿಂದ', 'tools/list ಒಂದೂ browser API ಆಗಿರುವುದರಿಂದ', 'ui:// HTTP cookies ಬೇಡುವುದರಿಂದ'],
        correct: 0 },
      { q: 'What is the main purpose of "structuredContent": {"notes": [...]}?', qKn: '"structuredContent": {"notes": [...]} ya ಮುಖ್ಯ ಉದ್ದೇಶ ಏನೂ?',
        opts: ['Create an MCP protocol session', 'Carry machine-readable result data that the View can render', 'Replace tools/list', 'Grant iframe network access'],
        optsKn: ['ಒಂದೂ MCP protocol session ಸೃಷ್ಟಿಸಿ', 'View render ಮಾಡಬಹುದಾದ machine-readable result data ಒಯ್ಯಿ', 'tools/list ಬದಲಾಯಿಸಿ', 'iframe network access ನೀಡಿ'],
        correct: 1 },
      { q: 'Why is "_meta": {"ui": {"resourceUri": "ui://notes/timeline.html"}} valuable?', qKn: '"_meta": {"ui": {"resourceUri": "ui://notes/timeline.html"}} ಏಕೆ ಮೌಲ್ಯಯುತ?',
        opts: ['It allows the host to know the intended View before tool execution', 'It grants administrator authority to the iframe', 'It replaces resources/read', 'It turns the tool result into HTML'],
        optsKn: ['ಇದೂ host ಗೆ tool execution ಗಿಂತ ಮೊದಲೇ ಉದ್ದೇಶಿತ View ತಿಳಿಯಲು ಅನುಮತಿಸುತ್ತದೆ', 'ಇದೂ iframe ಗೆ administrator authority ನೀಡುತ್ತದೆ', 'ಇದೂ resources/read ಬದಲಾಯಿಸುತ್ತದೆ', 'ಇದೂ tool result ಅನ್ನೂ HTML ಆಗಿಸುತ್ತದೆ'],
        correct: 0 },
    ] } },
  ],
};
