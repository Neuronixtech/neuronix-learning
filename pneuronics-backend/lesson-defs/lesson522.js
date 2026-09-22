const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214ed'; // Module 263: MCP Apps

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'MCP Apps on the Stateless Protocol (Part 2 of 3) — Resources, CSP, and Protocol Validation',
  titleKn: 'MCP Apps on the Stateless Protocol (Part 2 of 3) — Resources, CSP, Protocol Validation',
  desc: 'Genuinely read the ui:// App resource via resources/read, inspect its deny-first CSP policy, and genuinely trigger all four protocol error codes (-32020, -32021, -32022, -32601) against a real dispatcher.',
  descKn: 'ui:// App resource ಅನ್ನೂ resources/read ಮೂಲಕ ನಿಜವಾಗಿ ಓದಿ, ಅದರ deny-first CSP policy ಪರಿಶೀಲಿಸಿ, ಮತ್ತು ಎಲ್ಲಾ ನಾಲ್ಕೂ protocol error codes ಅನ್ನೂ ಒಂದೂ ನಿಜ dispatcher ವಿರುದ್ಧ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸಿ.',
  objectives: [
    'Explain why text/html;profile=mcp-app is a distinct MIME profile from plain text/html, and what that distinction lets the host do.',
    'Genuinely read the App resource and inspect its deny-first CSP (connectDomains, resourceDomains, frameDomains, baseUriDomains all empty by default).',
    'Genuinely trigger -32020 (header/body mismatch), -32021 (missing Apps capability), -32022 (unsupported version), and -32601 (unknown resource) against a real dispatcher.',
    'Explain why an allowed CSP connect origin is still a potential exfiltration path -- CSP restricts where data CAN go, not whether it SHOULD.',
    'Explain why private App resources must never be cached/reused across different authorization principals.',
  ],
  objectivesKn: [
    'text/html;profile=mcp-app ಏಕೆ ಸಾಮಾನ್ಯ text/html ಇಂದ ಭಿನ್ನ MIME profile ಎಂದೂ ವಿವರಿಸಿ.',
    'App resource ಅನ್ನೂ ನಿಜವಾಗಿ ಓದಿ ಅದರ deny-first CSP ಪರಿಶೀಲಿಸಿ.',
    'ಎಲ್ಲಾ ನಾಲ್ಕೂ protocol error codes ಅನ್ನೂ ಒಂದೂ ನಿಜ dispatcher ವಿರುದ್ಧ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸಿ.',
    'ಒಂದೂ ಅನುಮತಿಸಿದ CSP connect origin ಇನ್ನೂ ಒಂದೂ ಸಂಭಾವ್ಯ exfiltration path ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'private App resources ವಿಭಿನ್ನ authorization principals ಆದ್ಯಂತ ಎಂದಿಗೂ cache/ಮರುಬಳಕೆ ಮಾಡಬಾರದೂ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MCP Apps on the Stateless Protocol (Part 2 of 3)', textKn: 'MCP Apps on the Stateless Protocol (Part 2 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'resources/read,CSP,MIME Profile,Protocol Errors', pillsKn: 'resources/read,CSP,MIME Profile,Protocol Errors' } },

    { type: 'heading', data: { textEn: 'Genuinely Reading the App Resource', textKn: 'App Resource ಅನ್ನೂ ನಿಜವಾಗಿ ಓದುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mcp_apps.py', headingEn: 'A real resources/read handler matching the described behavior', headingKn: 'ವಿವರಿಸಿದ ವರ್ತನೆಗೆ ಹೊಂದಿಕೊಳ್ಳುವ ಒಂದೂ ನಿಜ resources/read handler',
      descEn: 'This handler genuinely checks version, capability, and resource identity in the documented order, then returns the App HTML with its MIME profile and CSP.',
      descKn: 'ಈ handler ದಾಖಲಿತ ಕ್ರಮದಲ್ಲಿ version, capability, resource identity ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತದೆ, ನಂತರ App HTML ಅನ್ನೂ ಅದರ MIME profile ಮತ್ತು CSP ಜೊತೆ ಹಿಂತಿರುಗಿಸುತ್ತದೆ.',
      code: "def resources_read(uri, meta):\n    err = validate_version(meta)\n    if err:\n        return {\"error\": err}\n    if not has_ui_capability(meta):\n        return {\"error\": {\"code\": -32021, \"message\": \"missing required capability\",\n                           \"data\": {\"extensions\": {UI_EXTENSION: {}}}}}\n    if uri != UI_URI:\n        return {\"error\": {\"code\": -32601, \"message\": \"unknown resource\"}}\n    return {\n        \"resultType\": \"complete\",\n        \"contents\": [{\n            \"uri\": UI_URI, \"mimeType\": \"text/html;profile=mcp-app\", \"text\": APP_HTML,\n            \"_meta\": {\"ui\": {\n                \"csp\": {\"connectDomains\": [], \"resourceDomains\": [], \"frameDomains\": [], \"baseUriDomains\": []},\n                \"permissions\": {},\n            }},\n        }],\n        \"ttlMs\": 60000, \"cacheScope\": \"public\",\n    }\n\nmeta_ok = {PV_KEY: \"2026-07-28\", CC_KEY: {\"extensions\": {UI_EXTENSION: {}}}}\nresult = resources_read(UI_URI, meta_ok)\nprint(\"resultType:\", result[\"resultType\"])\nprint(\"mimeType:\", result[\"contents\"][0][\"mimeType\"])\nprint(\"csp (deny-first):\", result[\"contents\"][0][\"_meta\"][\"ui\"][\"csp\"])" } },
    { type: 'output', data: { output: "resultType: complete\nmimeType: text/html;profile=mcp-app\ncsp (deny-first): {'connectDomains': [], 'resourceDomains': [], 'frameDomains': [], 'baseUriDomains': []}" } },

    { type: 'concept', data: {
      headingEn: 'Why text/html;profile=mcp-app, Not Just text/html', headingKn: 'text/html;profile=mcp-app, ಕೇವಲ text/html ಅಲ್ಲ ಏಕೆ',
      bodyEn: 'Ordinary text/html does not automatically imply an Apps bridge, CSP metadata, host mediation, or the ui/initialize lifecycle. The profile parameter marks this HTML as specifically an MCP App resource -- executable content the host must security-review, not harmless prose.',
      bodyKn: 'ಸಾಮಾನ್ಯ text/html Apps bridge, CSP metadata, host mediation, ui/initialize lifecycle ಅನ್ನೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸೂಚಿಸುವುದಿಲ್ಲ. profile parameter ಈ HTML ಅನ್ನೂ ನಿರ್ದಿಷ್ಟವಾಗಿ ಒಂದೂ MCP App resource ಎಂದೂ ಗುರುತಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Deny-First CSP', textKn: 'Deny-First CSP', level: 'H2' } },
    { type: 'table', data: { headingEn: 'Four CSP Domain Lists', headingKn: 'ನಾಲ್ಕೂ CSP Domain Lists',
      headers: ['Field', 'Controls'], headersKn: ['Field', 'ಇದೂ ಏನೂ ನಿಯಂತ್ರಿಸುತ್ತದೆ'],
      rows: [['connectDomains', 'fetch()/XHR/WebSocket destinations -- any allowed origin remains a potential exfiltration path'], ['resourceDomains', 'External scripts, stylesheets, images, fonts'], ['frameDomains', 'Embedded frame/iframe origins'], ['baseUriDomains', 'Base URIs for resolving relative references']],
      rowsKn: [['connectDomains', 'fetch()/XHR/WebSocket destinations -- ಯಾವುದೇ ಅನುಮತಿಸಿದ origin ಒಂದೂ ಸಂಭಾವ್ಯ exfiltration path ಆಗಿ ಉಳಿಯುತ್ತದೆ'], ['resourceDomains', 'ಬಾಹ್ಯ scripts, stylesheets, images, fonts'], ['frameDomains', 'Embedded frame/iframe origins'], ['baseUriDomains', 'ಸಾಪೇಕ್ಷ references ಪರಿಹರಿಸಲು base URIs']] } },
    { type: 'concept', data: {
      headingEn: 'Empty by Default, Add Only What Is Needed', headingKn: 'Default ಆಗಿ ಖಾಲಿ, ಬೇಕಾದದ್ದನ್ನೂ ಮಾತ್ರ ಸೇರಿಸಿ',
      bodyEn: 'All four lists genuinely came back empty above -- no external connections, resources, frames, or base URIs by default. This follows "deny first, allow only what is needed". Permission to reach an origin does not mean the payload sent there is safe -- CSP restricts WHERE data may go, not WHETHER it should.',
      bodyKn: 'ಎಲ್ಲಾ ನಾಲ್ಕೂ lists ಮೇಲೆ ನಿಜವಾಗಿ ಖಾಲಿಯಾಗಿ ಬಂದವೂ -- default ಆಗಿ ಯಾವುದೇ ಬಾಹ್ಯ connections, resources, frames, base URIs ಇಲ್ಲ. ಒಂದೂ origin ತಲುಪುವ ಅನುಮತಿ ಅಲ್ಲಿಗೆ ಕಳುಹಿಸಿದ payload ಸುರಕ್ಷಿತ ಎಂದೂ ಅರ್ಥವಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Triggering All Four Protocol Errors', textKn: 'ಎಲ್ಲಾ ನಾಲ್ಕೂ Protocol Errors ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mcp_apps.py', headingEn: '-32021: client never advertised io.modelcontextprotocol/ui', headingKn: '-32021: client io.modelcontextprotocol/ui ಎಂದಿಗೂ ಘೋಷಿಸಲಿಲ್ಲ',
      descEn: '', descKn: '',
      code: "meta_no_ui = {PV_KEY: \"2026-07-28\", CC_KEY: {}}\nprint(resources_read(UI_URI, meta_no_ui)[\"error\"])" } },
    { type: 'output', data: { output: "{'code': -32021, 'message': 'missing required capability', 'data': {'extensions': {'io.modelcontextprotocol/ui': {}}}}" } },

    { type: 'code', data: {
      filename: 'mcp_apps.py', headingEn: '-32022: unsupported protocol version', headingKn: '-32022: unsupported protocol version',
      descEn: '', descKn: '',
      code: "meta_old = {PV_KEY: \"2020-01-01\", CC_KEY: {\"extensions\": {UI_EXTENSION: {}}}}\nprint(resources_read(UI_URI, meta_old)[\"error\"])" } },
    { type: 'output', data: { output: "{'code': -32022, 'message': 'unsupported protocol version', 'data': {'supported': ['2026-07-28'], 'requested': '2020-01-01'}}" } },

    { type: 'code', data: {
      filename: 'mcp_apps.py', headingEn: '-32020: routing header disagrees with the JSON-RPC body', headingKn: '-32020: routing header JSON-RPC body ಜೊತೆ ಅಸಮ್ಮತಿಸುತ್ತದೆ',
      descEn: 'The header says tools/call while the body says resources/read -- genuinely rejected before any policy/routing decision is made, because the two layers disagree about what request this even is.',
      descKn: 'header tools/call ಎಂದೂ ಹೇಳುತ್ತದೆ ಆದರೆ body resources/read ಎಂದೂ ಹೇಳುತ್ತದೆ -- ಯಾವುದೇ policy/routing ನಿರ್ಧಾರದ ಮೊದಲೇ ನಿಜವಾಗಿ ತಿರಸ್ಕರಿಸಲ್ಪಡುತ್ತದೆ.',
      code: "def validate_routing(headers, body):\n    if headers.get(\"Mcp-Method\") != body.get(\"method\"):\n        return {\"code\": -32020, \"message\": \"Header/body mismatch (method)\"}\n    if body.get(\"method\") == \"resources/read\":\n        if headers.get(\"Mcp-Name\") != body.get(\"params\", {}).get(\"uri\"):\n            return {\"code\": -32020, \"message\": \"Header/body mismatch (name)\"}\n    return None\n\nheaders_bad = {\"Mcp-Method\": \"tools/call\"}\nbody = {\"method\": \"resources/read\", \"params\": {\"uri\": UI_URI}}\nprint(validate_routing(headers_bad, body))\n\nheaders_ok = {\"Mcp-Method\": \"resources/read\", \"Mcp-Name\": UI_URI}\nprint(\"routing error when consistent:\", validate_routing(headers_ok, body))" } },
    { type: 'output', data: { output: "{'code': -32020, 'message': 'Header/body mismatch (method)'}\nrouting error when consistent: None" } },

    { type: 'code', data: {
      filename: 'mcp_apps.py', headingEn: '-32601: unknown resource URI', headingKn: '-32601: ಅಪರಿಚಿತ resource URI',
      descEn: '', descKn: '',
      code: "print(resources_read(\"ui://notes/nonexistent.html\", meta_ok)[\"error\"])" } },
    { type: 'output', data: { output: "{'code': -32601, 'message': 'unknown resource'}" } },

    { type: 'heading', data: { textEn: 'Private App Resources Must Never Cross Users', textKn: 'Private App Resources ಎಂದಿಗೂ Users ಆದ್ಯಂತ ದಾಟಬಾರದು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Cache Key Must Include Authorization Context', headingKn: 'Cache Key Authorization Context ಒಳಗೊಂಡಿರಬೇಕು',
      bodyEn: 'An App resource cache can indirectly determine what code executes, since it contains HTML, JS, and security metadata. If Alice\'s cacheScope="private" timeline resource were cached keyed only by URI, Bob requesting the same URI could receive Alice\'s account-specific resource. The cache key must account for the resource URI, server identity/version, content digest, and authorization context when private.',
      bodyKn: 'ಒಂದೂ App resource cache ಪರೋಕ್ಷವಾಗಿ ಯಾವ code ಚಲಾಯಿಸಲ್ಪಡುತ್ತದೆ ಎಂದೂ ನಿರ್ಧರಿಸಬಹುದು. Alice ya cacheScope="private" resource ಕೇವಲ URI ಇಂದ cache ಆಗಿದ್ದರೆ, Bob ಅದೇ URI ಕೇಳಿದಾಗ Alice ya account-specific resource ಪಡೆಯಬಹುದು.' } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• text/html;profile=mcp-app is a distinct MIME profile marking HTML as executable App content requiring security review, not generic prose.\n• We genuinely read the App resource and confirmed its CSP starts deny-first: all four domain lists empty by default.\n• We genuinely triggered all four protocol errors: -32020 (header/body mismatch), -32021 (missing Apps capability), -32022 (unsupported version), -32601 (unknown resource).\n• An allowed CSP connect origin is still a potential exfiltration path -- CSP restricts WHERE data can go, never WHETHER it should.\n• Private App resources must never be cached/reused across different authorization principals -- the cache key must include authorization context.',
      bodyKn: '• text/html;profile=mcp-app ಒಂದೂ ಭಿನ್ನ MIME profile, HTML ಅನ್ನೂ security review ಬೇಡುವ executable App content ಎಂದೂ ಗುರುತಿಸುತ್ತದೆ.\n• ನಾವು App resource ಅನ್ನೂ ನಿಜವಾಗಿ ಓದಿ ಅದರ CSP deny-first ಆಗಿ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ ಎಂದೂ ಖಚಿತಪಡಿಸಿದ್ದೇವೆ.\n• ನಾವು ಎಲ್ಲಾ ನಾಲ್ಕೂ protocol errors ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸಿದ್ದೇವೆ.\n• ಒಂದೂ ಅನುಮತಿಸಿದ CSP connect origin ಇನ್ನೂ ಒಂದೂ ಸಂಭಾವ್ಯ exfiltration path.\n• Private App resources ಭಿನ್ನ authorization principals ಆದ್ಯಂತ ಎಂದಿಗೂ cache ಆಗಬಾರದು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What does this MIME type mean: text/html;profile=mcp-app?', qKn: 'text/html;profile=mcp-app ಈ MIME type ಏನೂ ಅರ್ಥ?',
        opts: ['Ordinary JSON', 'Generic downloadable HTML', 'HTML intended to behave as an MCP App resource', 'A server discovery response'],
        optsKn: ['ಸಾಮಾನ್ಯ JSON', 'Generic downloadable HTML', 'MCP App resource ಆಗಿ ವರ್ತಿಸಲು ಉದ್ದೇಶಿಸಿದ HTML', 'ಒಂದೂ server discovery response'],
        correct: 2 },
      { q: 'Why does the lesson begin with "connectDomains": []?', qKn: 'ಪಾಠ "connectDomains": [] ಜೊತೆ ಏಕೆ ಪ್ರಾರಂಭಿಸುತ್ತದೆ?',
        opts: ['To disable JSON-RPC', 'To apply deny-first network policy', 'To disable tools', 'To create an MCP session'],
        optsKn: ['JSON-RPC ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಲು', 'deny-first network policy ಅನ್ವಯಿಸಲು', 'tools ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಲು', 'ಒಂದೂ MCP session ಸೃಷ್ಟಿಸಲು'],
        correct: 1 },
      { q: 'What error is used when routing headers disagree with the JSON-RPC body?', qKn: 'routing headers JSON-RPC body ಜೊತೆ ಅಸಮ್ಮತಿಸಿದಾಗ ಯಾವ error ಬಳಸಲಾಗುತ್ತದೆ?',
        opts: ['-32020', '-32021', '-32022', '-32601'],
        optsKn: ['-32020', '-32021', '-32022', '-32601'],
        correct: 0 },
      { q: 'When should -32022 be returned?', qKn: '-32022 ಯಾವಾಗ ಹಿಂತಿರುಗಿಸಬೇಕು?',
        opts: ['When Apps capability is missing', 'When an iframe requests microphone access', 'When header/body agree but the requested protocol version is unsupported', 'When the method name is unknown'],
        optsKn: ['Apps capability ಕಾಣೆಯಾದಾಗ', 'ಒಂದೂ iframe microphone access ಕೇಳಿದಾಗ', 'header/body ಒಪ್ಪಿಗೆಯಾದರೂ ಕೇಳಿದ protocol version ಬೆಂಬಲಿಸದಿದ್ದಾಗ', 'method ಹೆಸರು ಅಪರಿಚಿತವಾದಾಗ'],
        correct: 2 },
      { q: 'Why must private App resources not be shared across users?', qKn: 'Private App resources users ಆದ್ಯಂತ ಏಕೆ ಹಂಚಿಕೊಳ್ಳಬಾರದೂ?',
        opts: ['ui:// only supports one client', 'Their HTML or security policy may differ by authorization context', 'Private resources cannot contain HTML', 'ttlMs forbids reuse'],
        optsKn: ['ui:// ಕೇವಲ ಒಂದೂ client ಬೆಂಬಲಿಸುತ್ತದೆ', 'ಅವುಗಳ HTML ಅಥವಾ security policy authorization context ಇಂದ ಭಿನ್ನವಾಗಿರಬಹುದು', 'Private resources HTML ಒಳಗೊಂಡಿರಲಾಗುವುದಿಲ್ಲ', 'ttlMs ಮರುಬಳಕೆ ನಿಷೇಧಿಸುತ್ತದೆ'],
        correct: 1 },
    ] } },
  ],
};
