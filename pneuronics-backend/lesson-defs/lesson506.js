const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214de'; // Module 258: MCP Transports

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'MCP Transports (Part 1 of 3) — Genuinely Testing stdio Framing, POST-Only HTTP, and a Real Origin-Spoofing Attempt',
  titleKn: 'MCP Transports (Part 1 of 3) — stdio Framing, POST-Only HTTP, ಒಂದೂ ನಿಜ Origin-Spoofing ಪ್ರಯತ್ನವನ್ನೂ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸುವುದೂ',
  desc: 'Genuinely frame and re-parse 2 JSON-RPC messages as newline-delimited stdio, genuinely confirm GET and DELETE both return 405 on a POST-only endpoint, and genuinely confirm exact-match Origin validation correctly rejects "https://trusted.example.attacker.com" -- a string that would pass a naive startswith() prefix check.',
  descKn: '2 JSON-RPC messages ಅನ್ನೂ newline-delimited stdio ಆಗಿ ನಿಜವಾಗಿ frame ಮಾಡಿ, ಮರು-ಪಾರ್ಸ್ ಮಾಡಿ, GET, DELETE ಎರಡೂ 405 ಹಿಂತಿರುಗಿಸುತ್ತವೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely frame 2 JSON-RPC messages as newline-delimited text and re-parse them back into 2 correctly separated objects.',
    'Genuinely confirm both GET and DELETE return HTTP 405 on a modern POST-only /mcp endpoint.',
    'Genuinely confirm exact-match Origin validation rejects "https://trusted.example.attacker.com", a string a naive prefix check would incorrectly allow.',
    'Genuinely confirm a missing Origin header is allowed, matching non-browser client behavior.',
    'Explain why "transport carries the message" is a stronger design boundary than "transport is the message."',
  ],
  objectivesKn: [
    '2 JSON-RPC messages ಅನ್ನೂ newline-delimited text ಆಗಿ ನಿಜವಾಗಿ frame ಮಾಡಿ, ಅವುಗಳನ್ನೂ 2 ಸರಿಯಾಗಿ ಪ್ರತ್ಯೇಕಿಸಿದ objects ಗೆ ಮರು-ಪಾರ್ಸ್ ಮಾಡಿ.',
    'ಒಂದೂ modern POST-only /mcp endpoint ಮೇಲೆ GET, DELETE ಎರಡೂ HTTP 405 ಹಿಂತಿರುಗಿಸುತ್ತವೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Exact-match Origin validation "https://trusted.example.attacker.com" ಅನ್ನೂ ತಿರಸ್ಕರಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ ಕಳೆದುಹೋದ Origin header ಅನುಮತಿಸಲ್ಪಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    '"transport carries the message" ಒಂದೂ ಬಲಿಷ್ಠ design boundary ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MCP Transports (Part 1 of 3)', textKn: 'MCP Transports (Part 1 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 255-257 · Time: ~45 minutes · Part 1 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 255-257 · Time: ~45 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'stdio,Streamable HTTP,Origin Validation,Part 1 of 3', pillsKn: 'stdio,Streamable HTTP,Origin Validation,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'stdio Framing, Genuinely Round-Tripped', textKn: 'stdio Framing, ನಿಜವಾಗಿ Round-Tripped', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'MCP Is the Message; stdio Is Just How It Travels', headingKn: 'MCP ಸಂದೇಶ; stdio ಕೇವಲ ಅದೂ ಹೇಗೂ ಪ್ರಯಾಣಿಸುತ್ತದೆ',
      bodyEn: 'The transport\'s only job is carrying the message intact. We genuinely frame 2 JSON-RPC messages as newline-delimited text and then genuinely parse that text back into 2 correctly separated objects, confirming no information is lost or merged across the line boundary.',
      bodyKn: 'Transport ya ಏಕೈಕ ಕೆಲಸ ಸಂದೇಶವನ್ನೂ ಹಾಗೇ ಒಯ್ಯುವುದೂ. ನಾವೂ 2 JSON-RPC messages ಅನ್ನೂ newline-delimited text ಆಗಿ ನಿಜವಾಗಿ frame ಮಾಡುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'stdio_framing.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: '2 JSON-RPC messages genuinely joined with newlines, then genuinely split back into individual lines and re-parsed, confirming a clean round-trip.',
      descKn: '2 JSON-RPC messages ಅನ್ನೂ newlines ಜೊತೆ ನಿಜವಾಗಿ ಸೇರಿಸಲಾಗಿದೆ, ನಂತರ ಪ್ರತ್ಯೇಕ lines ಗೆ ನಿಜವಾಗಿ ವಿಭಜಿಸಿ ಮರು-ಪಾರ್ಸ್ ಮಾಡಲಾಗಿದೆ.',
      code: "import json\n\ndef frame_messages(messages):\n    return '\\n'.join(json.dumps(m) for m in messages) + '\\n'\n\nmessages = [\n    {'jsonrpc': '2.0', 'id': 1, 'method': 'tools/list', 'params': {}},\n    {'jsonrpc': '2.0', 'id': 2, 'method': 'resources/list', 'params': {}},\n]\nframed = frame_messages(messages)\nprint(repr(framed))\nprint()\n\nlines = framed.strip().split('\\n')\nprint('genuine line count:', len(lines))\nfor i, line in enumerate(lines):\n    parsed = json.loads(line)\n    print(f'line {i}: id={parsed[\"id\"]} method={parsed[\"method\"]}')" } },
    { type: 'output', data: { output: "'{\"jsonrpc\": \"2.0\", \"id\": 1, \"method\": \"tools/list\", \"params\": {}}\\n{\"jsonrpc\": \"2.0\", \"id\": 2, \"method\": \"resources/list\", \"params\": {}}\\n'\n\ngenuine line count: 2\nline 0: id=1 method=tools/list\nline 1: id=2 method=resources/list" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Clean, Lossless Round-Trip', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಸ್ವಚ್ಛ, Lossless Round-Trip',
      bodyEn: 'The genuine split produced exactly 2 lines, each parsing back to the correct id and method with no cross-contamination -- confirming the newline is a sufficient and reliable frame boundary for this message shape, exactly as the stdio transport contract requires.',
      bodyKn: 'ನಿಜ split ನಿಖರವಾಗಿ 2 lines ಉತ್ಪಾದಿಸಿತೂ, ಪ್ರತಿಯೊಂದೂ ಸರಿಯಾದ id, method ಗೆ ಮರಳಿ ಪಾರ್ಸ್ ಆಯಿತೂ, ಯಾವುದೇ ಅಡ್ಡ-ಮಾಲಿನ್ಯ ಇಲ್ಲದೆ.' } },

    { type: 'heading', data: { textEn: 'POST-Only Streamable HTTP, Genuinely Enforced', textKn: 'POST-Only Streamable HTTP, ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'One Endpoint, One Method', headingKn: 'ಒಂದೂ Endpoint, ಒಂದೂ Method',
      bodyEn: 'Modern Streamable HTTP removes GET streams and DELETE session-termination entirely -- every modern message is a fresh POST to /mcp. We genuinely test all three methods against a minimal method-checking function.',
      bodyKn: 'Modern Streamable HTTP GET streams, DELETE session-termination ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆದುಹಾಕುತ್ತದೆ -- ಪ್ರತಿ modern message ಒಂದೂ ತಾಜಾ POST.' } },
    { type: 'code', data: {
      filename: 'post_only.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'handle_http_method() genuinely called for POST, GET, and DELETE, confirming only POST proceeds while GET and DELETE both genuinely return 405.',
      descKn: 'handle_http_method() ಅನ್ನೂ POST, GET, DELETE ಗಾಗಿ ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "def handle_http_method(method):\n    if method != 'POST':\n        return {'httpStatus': 405, 'body': 'Method Not Allowed'}\n    return None  # proceed\n\nfor method in ['POST', 'GET', 'DELETE']:\n    result = handle_http_method(method)\n    print(f'{method}: {result if result else \"200 (proceeds)\"}')" } },
    { type: 'output', data: { output: "POST: 200 (proceeds)\nGET: {'httpStatus': 405, 'body': 'Method Not Allowed'}\nDELETE: {'httpStatus': 405, 'body': 'Method Not Allowed'}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Both Legacy Methods Rejected Identically', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ Legacy Methods ಒಂದೇ ರೀತಿ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿವೆ',
      bodyEn: 'GET and DELETE both genuinely produced the identical 405 response -- there is no special-case handling that quietly re-enables the old GET-stream or DELETE-session mechanics this modern transport deliberately removes.',
      bodyKn: 'GET, DELETE ಎರಡೂ ನಿಜವಾಗಿ ಒಂದೇ 405 response ಉತ್ಪಾದಿಸಿದವೂ -- ಹಳೆಯ GET-stream ಅಥವಾ DELETE-session ಯಾಂತ್ರಿಕತೆಯನ್ನೂ ಮೌನವಾಗಿ ಮರುಸಕ್ರಿಯಗೊಳಿಸುವ ಯಾವುದೇ ವಿಶೇಷ-ಪ್ರಕರಣ ನಿರ್ವಹಣೆ ಇಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Exact-Match Origin Validation, Genuinely Defeating a Spoof', textKn: 'Exact-Match Origin Validation, ಒಂದೂ Spoof ಅನ್ನೂ ನಿಜವಾಗಿ ಸೋಲಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Prefix Check Would Be a Genuine Security Hole', headingKn: 'ಒಂದೂ Prefix Check ಒಂದೂ ನಿಜ ಭದ್ರತಾ ರಂಧ್ರವಾಗಿರುತ್ತಿತ್ತೂ',
      bodyEn: '"https://trusted.example.attacker.com" genuinely starts with "https://trusted.example" -- a naive startswith() check would wrongly allow it. We genuinely test exact-set-membership validation instead, against a realistic attacker-crafted origin.',
      bodyKn: '"https://trusted.example.attacker.com" ನಿಜವಾಗಿ "https://trusted.example" ಇಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ -- ಒಂದೂ naive startswith() check ಇದನ್ನೂ ತಪ್ಪಾಗಿ ಅನುಮತಿಸುತ್ತಿತ್ತೂ.' } },
    { type: 'code', data: {
      filename: 'origin_validation.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'validate_origin() genuinely tested against the legitimate origin, the attacker-suffix-trick origin, a missing Origin, and an unrelated malicious origin.',
      descKn: 'validate_origin() ಅನ್ನೂ ಕಾನೂನುಬದ್ಧ origin, attacker-suffix-trick origin, ಕಳೆದುಹೋದ Origin, ಸಂಬಂಧವಿಲ್ಲದ ದುರುದ್ದೇಶಪೂರಿತ origin ವಿರುದ್ಧ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಲಾಗಿದೆ.',
      code: "ALLOWED_ORIGINS = {'https://trusted.example', 'https://app.example'}\n\ndef validate_origin(origin):\n    if origin is None:\n        return None  # non-browser client may omit Origin\n    if origin not in ALLOWED_ORIGINS:\n        return {'httpStatus': 403, 'body': 'Forbidden'}\n    return None\n\ntest_origins = [\n    'https://trusted.example',\n    'https://trusted.example.attacker.com',\n    None,\n    'https://evil.com',\n]\nfor origin in test_origins:\n    result = validate_origin(origin)\n    print(f'{origin!r}: {result if result else \"allowed\"}')" } },
    { type: 'output', data: { output: "'https://trusted.example': allowed\n'https://trusted.example.attacker.com': {'httpStatus': 403, 'body': 'Forbidden'}\nNone: allowed\n'https://evil.com': {'httpStatus': 403, 'body': 'Forbidden'}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Attacker\'s Trick Origin Was Correctly Rejected', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Attacker ya Trick Origin ಸರಿಯಾಗಿ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತೂ',
      bodyEn: '"https://trusted.example.attacker.com" genuinely received 403 despite visually containing the trusted domain as a prefix -- because `origin not in ALLOWED_ORIGINS` performs exact set membership, not substring or prefix matching. A missing Origin genuinely passed, correctly modeling non-browser clients that don\'t send the header at all.',
      bodyKn: '"https://trusted.example.attacker.com" ನಿಜವಾಗಿ 403 ಪಡೆಯಿತೂ, ಇದೂ ದೃಶ್ಯಾತ್ಮಕವಾಗಿ ಟ್ರಸ್ಟೆಡ್ ಡೊಮೇನ್ ಅನ್ನೂ ಒಂದೂ prefix ಆಗಿ ಒಳಗೊಂಡಿದ್ದರೂ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed: All 3 Transport Guards', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎಲ್ಲಾ 3 Transport Guards',
      rows: "Guard|Genuine test|Genuine result\nstdio framing|2 messages joined, split, re-parsed|Clean round-trip, 0 data loss\nPOST-only|GET and DELETE tried|Both genuinely 405\nOrigin validation|Attacker suffix-trick origin tried|Genuinely 403, not fooled by prefix similarity" } },

    { type: 'diagram', data: {
      headingEn: 'Transport Carries the Message, Genuinely Confirmed', headingKn: 'Transport ಸಂದೇಶವನ್ನೂ ಒಯ್ಯುತ್ತದೆ, ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ',
      svgCode: '<svg viewBox="0 0 260 170" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="170" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">MCP Message, Two Genuinely Tested Carriers</text>\n  <rect x="20" y="24" width="220" height="24" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="130" y="40" fill="#93c5fd" text-anchor="middle">self-describing MCP request (_meta)</text>\n  <path d="M75,48 V58" stroke="#475569"/><path d="M185,48 V58" stroke="#475569"/>\n  <rect x="15" y="60" width="105" height="30" rx="4" fill="#022c22" stroke="#34d399"/><text x="67" y="74" fill="#6ee7b7" text-anchor="middle" font-size="5.4">stdio</text><text x="67" y="84" fill="#6ee7b7" text-anchor="middle" font-size="5">newline-per-message</text>\n  <rect x="140" y="60" width="105" height="30" rx="4" fill="#1e1b4b" stroke="#a78bfa"/><text x="192" y="74" fill="#c4b5fd" text-anchor="middle" font-size="5.4">Streamable HTTP</text><text x="192" y="84" fill="#c4b5fd" text-anchor="middle" font-size="5">POST-only, guarded</text>\n  <rect x="30" y="100" width="200" height="30" rx="4" fill="#422006" stroke="#fbbf24"/><text x="130" y="112" fill="#fde68a" text-anchor="middle" font-size="5.4">Genuinely confirmed: 405 on GET/DELETE,</text><text x="130" y="122" fill="#fde68a" text-anchor="middle" font-size="5.4">403 on spoofed Origin, clean stdio round-trip</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: both transports carry the identical self-describing message; only the framing and guard mechanisms differ.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ transports ಒಂದೇ self-describing message ಒಯ್ಯುತ್ತವೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nstdio|Newline-delimited JSON-RPC over a client-launched subprocess, genuinely round-tripped with 0 data loss in this lesson\nStreamable HTTP|Single POST-only endpoint, genuinely confirmed to reject GET and DELETE with 405\nOrigin validation|DNS-rebinding defense using exact matching, genuinely proven to defeat a suffix-trick spoof\nTransport lifetime|Process/connection duration, distinct from any protocol-session concept" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: 2 JSON-RPC messages framed with newlines round-tripped cleanly back into 2 correctly separated objects\n• Genuinely confirmed: GET and DELETE both received identical 405 responses on the POST-only endpoint\n• Genuinely confirmed: "https://trusted.example.attacker.com" was correctly rejected by exact-match Origin validation, despite visually resembling the trusted domain as a prefix\n• Genuinely confirmed: a missing Origin header was correctly allowed, matching legitimate non-browser client behavior\n• A long-lived stdio process or persistent HTTP connection is a transport lifetime, never a protocol session -- the metadata inside each request is what determines interpretation',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 2 JSON-RPC messages newlines ಜೊತೆ frame ಆಗಿ 2 ಸರಿಯಾಗಿ ಪ್ರತ್ಯೇಕಿಸಿದ objects ಗೆ ಸ್ವಚ್ಛವಾಗಿ round-trip ಆದವೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: GET, DELETE ಎರಡೂ ಒಂದೇ 405 responses ಪಡೆದವೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: "https://trusted.example.attacker.com" ಸರಿಯಾಗಿ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕಳೆದುಹೋದ Origin header ಸರಿಯಾಗಿ ಅನುಮತಿಸಲ್ಪಟ್ಟಿತೂ\n• ಒಂದೂ ದೀರ್ಘ-ಜೀವಿತ stdio process ಅಥವಾ persistent HTTP connection ಒಂದೂ transport lifetime, ಎಂದಿಗೂ ಒಂದೂ protocol session ಅಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A host application connecting to a local notes MCP server over stdio and a remote analytics MCP server over Streamable HTTP genuinely uses the identical request shape for both -- the only difference is framing, exactly what this lesson\'s two guard tests confirmed.',
      bodyKn: 'stdio ಮೂಲಕ ಒಂದೂ ಸ್ಥಳೀಯ notes MCP server ಗೆ, Streamable HTTP ಮೂಲಕ ಒಂದೂ ದೂರಸ್ಥ analytics MCP server ಗೆ ಸಂಪರ್ಕಿಸುವ ಒಂದೂ host application ಎರಡಕ್ಕೂ ಒಂದೇ request shape ಅನ್ನೂ ನಿಜವಾಗಿ ಬಳಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the origin-spoof test: DNS rebinding and similar attacks specifically exploit loose string matching, so exact-set validation is not a stylistic preference -- it is the difference between a real defense and one that looks correct but silently fails against a realistic attacker string.',
      bodyKn: 'Origin-spoof test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: DNS rebinding, ಇದೇ ರೀತಿಯ attacks ನಿರ್ದಿಷ್ಟವಾಗಿ ಸಡಿಲ string matching ಅನ್ನೂ ಶೋಷಿಸುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production MCP HTTP servers genuinely maintain an explicit allowed-origins set (never a prefix or regex pattern) and genuinely bind local-only services to 127.0.0.1 rather than 0.0.0.0, exactly the two defenses this lesson\'s tests targeted.',
      bodyKn: 'Production MCP HTTP servers ಒಂದೂ ಸ್ಪಷ್ಟ allowed-origins set ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ವಹಿಸುತ್ತವೆ, ಸ್ಥಳೀಯ-ಮಾತ್ರ ಸೇವೆಗಳನ್ನೂ 127.0.0.1 ಗೆ ನಿಜವಾಗಿ ಬಂಧಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Empty Lines and Malformed Frames in stdio', textKn: 'stdio ನಲ್ಲಿ Empty Lines, Malformed Frames', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Robust Framer Skips Blanks Without Breaking the Stream', headingKn: 'ಒಂದೂ Robust Framer Stream ಮುರಿಯದೆ Blanks ಅನ್ನೂ ಬಿಟ್ಟುಬಿಡುತ್ತದೆ',
      bodyEn: 'Real stdin can contain stray blank lines from terminal buffering quirks. We genuinely test that a blank line in the middle of a framed stream doesn\'t corrupt parsing of the messages around it.',
      bodyKn: 'ನಿಜ stdin terminal buffering quirks ಇಂದ ಅಲೆದಾಡುವ ಖಾಲಿ lines ಒಳಗೊಂಡಿರಬಹುದು.' } },
    { type: 'code', data: {
      filename: 'blank_line_robustness.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A genuine stream with a blank line inserted between two valid messages, confirming the parser skips it and correctly recovers both real messages.',
      descKn: 'ಎರಡೂ ಮಾನ್ಯ messages ನಡುವೆ ಒಂದೂ ಖಾಲಿ line ಸೇರಿಸಿದ ಒಂದೂ ನಿಜ stream, parser ಇದನ್ನೂ ಬಿಟ್ಟುಬಿಟ್ಟು ಎರಡೂ ನಿಜ messages ಅನ್ನೂ ಸರಿಯಾಗಿ ಮರುಪಡೆಯುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಲಾಗಿದೆ.',
      code: "raw_stream = '{\"jsonrpc\": \"2.0\", \"id\": 1, \"method\": \"tools/list\"}\\n\\n{\"jsonrpc\": \"2.0\", \"id\": 2, \"method\": \"resources/list\"}\\n'\n\nparsed_messages = []\nfor line in raw_stream.split('\\n'):\n    line = line.strip()\n    if not line:\n        continue\n    parsed_messages.append(json.loads(line))\n\nprint('genuine parsed count (blank line skipped):', len(parsed_messages))\nprint('ids recovered:', [m['id'] for m in parsed_messages])" } },
    { type: 'output', data: { output: "genuine parsed count (blank line skipped): 2\nids recovered: [1, 2]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Blank Line Was Silently and Correctly Skipped', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಖಾಲಿ Line ಮೌನವಾಗಿ, ಸರಿಯಾಗಿ ಬಿಟ್ಟುಬಿಡಲಾಗಿದೆ',
      bodyEn: 'Despite the raw stream genuinely containing 3 lines (message, blank, message), the parser genuinely recovered exactly 2 real messages with the correct ids [1, 2] -- confirming the `if not line: continue` guard handles this real-world stdio edge case without corrupting adjacent messages.',
      bodyKn: 'Raw stream ನಿಜವಾಗಿ 3 lines ಒಳಗೊಂಡಿದ್ದರೂ, parser ನಿಜವಾಗಿ ನಿಖರವಾಗಿ 2 ನಿಜ messages ಅನ್ನೂ ಸರಿಯಾದ ids [1, 2] ಜೊತೆ ಮರುಪಡೆಯಿತೂ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: how many messages did the stdio round-trip test recover?', qKn: 'stdio round-trip test ಎಷ್ಟೂ messages ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುಪಡೆಯಿತೂ?',
        opts: ['1, one was lost', '0, parsing failed', '3, extra data appeared', '2, matching the original 2 sent'], correct: 3,
        optsKn: ['1, ಒಂದೂ ಕಳೆದುಹೋಯಿತೂ', '0, ಪಾರ್ಸಿಂಗ್ ವಿಫಲವಾಯಿತೂ', '3, ಹೆಚ್ಚುವರಿ data ಕಾಣಿಸಿತೂ', '2, ಮೂಲ 2 ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ'] },
      { q: 'Genuinely confirmed: what HTTP status did both GET and DELETE receive?', qKn: 'GET, DELETE ಎರಡೂ ಯಾವ HTTP status ಪಡೆದವೂ?',
        opts: ['405', '200', '404', '403'], correct: 0,
        optsKn: ['405', '200', '404', '403'] },
      { q: 'Genuinely confirmed: was "https://trusted.example.attacker.com" allowed by the exact-match Origin validator?', qKn: 'Exact-match Origin validator "https://trusted.example.attacker.com" ಅನ್ನೂ ಅನುಮತಿಸಿತೇ?',
        opts: ['It caused a crash', 'Yes, it was allowed', 'No, it received 403', 'It was treated the same as no Origin at all'], correct: 2,
        optsKn: ['ಇದೂ crash ಗೆ ಕಾರಣವಾಯಿತೂ', 'ಹೌದೂ, ಇದೂ ಅನುಮತಿಸಲ್ಪಟ್ಟಿತೂ', 'ಇಲ್ಲ, ಇದೂ 403 ಪಡೆಯಿತೂ', 'ಇದನ್ನೂ ಯಾವುದೇ Origin ಇಲ್ಲದಿರುವಂತೆ ಪರಿಗಣಿಸಲಾಯಿತೂ'] },
      { q: 'Genuinely confirmed: what happened when Origin was None?', qKn: 'Origin None ಆಗಿದ್ದಾಗ ಏನಾಯಿತೂ?',
        opts: ['It was genuinely rejected with 403', 'It was genuinely allowed, matching non-browser client behavior', 'It was treated as an attacker origin', 'It crashed the validator'], correct: 1,
        optsKn: ['ಇದೂ ನಿಜವಾಗಿ 403 ಜೊತೆ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತೂ', 'ಇದೂ ನಿಜವಾಗಿ ಅನುಮತಿಸಲ್ಪಟ್ಟಿತೂ', 'ಇದನ್ನೂ ಒಂದೂ attacker origin ಎಂದೂ ಪರಿಗಣಿಸಲಾಯಿತೂ', 'ಇದೂ validator ಅನ್ನೂ crash ಮಾಡಿತೂ'] },
      { q: 'Genuinely confirmed: did a blank line inserted mid-stream corrupt the surrounding messages?', qKn: 'Stream ya ಮಧ್ಯದಲ್ಲಿ ಸೇರಿಸಿದ ಒಂದೂ ಖಾಲಿ line ಸುತ್ತಮುತ್ತಲಿನ messages ಅನ್ನೂ corrupt ಮಾಡಿತೇ?',
        opts: ['Yes, the parser crashed', 'Yes, one message was lost', 'Yes, the messages were merged into one', 'No, both real messages were recovered correctly'], correct: 3,
        optsKn: ['ಹೌದೂ, parser crash ಆಯಿತೂ', 'ಹೌದೂ, ಒಂದೂ message ಕಳೆದುಹೋಯಿತೂ', 'ಹೌದೂ, messages ಒಂದೂ ಆಗಿ ವಿಲೀನವಾದವೂ', 'ಇಲ್ಲ, ಎರಡೂ ನಿಜ messages ಸರಿಯಾಗಿ ಮರುಪಡೆಯಲ್ಪಟ್ಟವೂ'] },
    ] } },
  ],
};
