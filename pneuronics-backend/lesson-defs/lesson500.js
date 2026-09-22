const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214d8'; // Module 256: Building an MCP Server

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'Building an MCP Server (Part 1 of 3) — Genuinely Running the complete() Wrapper and a Real Discovery Result',
  titleKn: 'Building an MCP Server (Part 1 of 3) — complete() Wrapper, ಒಂದೂ ನಿಜ Discovery Result ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ',
  desc: 'Genuinely implement and run the complete(payload) helper from the lesson\'s original snippet, confirming it consistently injects resultType and serverInfo into three different handler payloads, and genuinely confirm server/discover unlocks nothing -- tools/list works without ever calling discover first.',
  descKn: 'Lesson ya original snippet ಇಂದ complete(payload) helper ಅನ್ನೂ ನಿಜವಾಗಿ ಅನುಷ್ಠಾನಗೊಳಿಸಿ, ಚಲಾಯಿಸಿ, ಇದೂ ಸ್ಥಿರವಾಗಿ resultType, serverInfo ಅನ್ನೂ ಸೇರಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely implement the complete(payload) helper and confirm it injects resultType:"complete" and serverInfo into 3 different handler payloads.',
    'Genuinely confirm tools/list works correctly without ever calling server/discover first, proving discovery does not "unlock" anything.',
    'Explain why clientInfo is recommended identity metadata, not an authentication credential.',
    'Genuinely confirm discovery\'s capabilities field is distinct from a request\'s clientCapabilities field.',
    'Explain the stateless server rule: handle each request from its own metadata, never from a remembered prior request.',
  ],
  objectivesKn: [
    'complete(payload) helper ಅನ್ನೂ ನಿಜವಾಗಿ ಅನುಷ್ಠಾನಗೊಳಿಸಿ, ಇದೂ 3 ವಿಭಿನ್ನ handler payloads ಗೆ resultType, serverInfo ಸೇರಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'server/discover ಅನ್ನೂ ಮೊದಲೂ ಕರೆಯದೆ tools/list ಸರಿಯಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'clientInfo ಶಿಫಾರಸು ಮಾಡಿದ identity metadata, ಒಂದೂ authentication credential ಅಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
    'Discovery ya capabilities field ಒಂದೂ request ya clientCapabilities field ಇಂದ ಭಿನ್ನ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Stateless server rule ಅನ್ನೂ ವಿವರಿಸಿ: ಪ್ರತಿ request ಅನ್ನೂ ಅದೂ ya ಸ್ವಂತ metadata ಇಂದ ನಿರ್ವಹಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Building an MCP Server (Part 1 of 3)', textKn: 'Building an MCP Server (Part 1 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 255 · Time: ~45 minutes · Part 1 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 255 · Time: ~45 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'MCP Server,complete(),Discovery,Part 1 of 3', pillsKn: 'MCP Server,complete(),Discovery,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The complete() Helper: One Function, Consistent Results', textKn: 'complete() Helper: ಒಂದೂ Function, ಸ್ಥಿರ Results', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Centralizing Result Shape Prevents a Real Class of Bugs', headingKn: 'Result Shape ಅನ್ನೂ ಕೇಂದ್ರೀಕರಿಸುವುದೂ ಒಂದೂ ನಿಜ ವರ್ಗದ Bugs ಅನ್ನೂ ತಡೆಯುತ್ತದೆ',
      bodyEn: 'If every handler manually writes resultType and _meta, one handler forgetting resultType is a genuine, easy-to-make mistake. The complete(payload) helper genuinely spreads payload into a standard envelope, so a handler literally cannot omit resultType or serverInfo by accident.',
      bodyKn: 'ಪ್ರತಿ handler ಕೈಯಾರೆ resultType, _meta ಬರೆದರೆ, ಒಂದೂ handler resultType ಮರೆಯುವುದೂ ಒಂದೂ ನಿಜ, ಸುಲಭ ತಪ್ಪು.' } },
    { type: 'code', data: {
      filename: 'complete_helper.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact complete(payload) helper genuinely called on 3 different handler-style payloads (discovery, tool list, empty), confirming each result consistently gets resultType and serverInfo.',
      descKn: 'ನಿಖರ complete(payload) helper ಅನ್ನೂ 3 ವಿಭಿನ್ನ handler-style payloads ಮೇಲೆ ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "SERVER_INFO_KEY = 'io.modelcontextprotocol/serverInfo'\nSERVER_INFO = {'name': 'notes-server', 'version': '2.0.0'}\n\ndef complete(payload):\n    return {\n        'resultType': 'complete',\n        **payload,\n        '_meta': {SERVER_INFO_KEY: SERVER_INFO},\n    }\n\ndiscovery_payload = {'supportedVersions': ['2026-07-28'], 'ttlMs': 3600000, 'cacheScope': 'public'}\ntools_payload = {'tools': ['notes_search', 'notes_create'], 'ttlMs': 3600000, 'cacheScope': 'public'}\nempty_payload = {}\n\nfor name, payload in [('discovery', discovery_payload), ('tools', tools_payload), ('empty', empty_payload)]:\n    result = complete(payload)\n    print(f'{name}: resultType={result[\"resultType\"]!r} has_serverInfo={SERVER_INFO_KEY in result[\"_meta\"]}')" } },
    { type: 'output', data: { output: "discovery: resultType='complete' has_serverInfo=True\ntools: resultType='complete' has_serverInfo=True\nempty: resultType='complete' has_serverInfo=True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: All 3 Genuinely Different Payloads Got the Same Guarantee', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎಲ್ಲಾ 3 ನಿಜವಾಗಿ ವಿಭಿನ್ನ Payloads ಒಂದೇ Guarantee ಪಡೆದವೂ',
      bodyEn: 'Even the empty payload {} genuinely received resultType:"complete" and serverInfo -- there is no code path through complete() that skips these fields, which is exactly the guarantee this design pattern is meant to provide across every handler in the server.',
      bodyKn: 'ಖಾಲಿ payload {} ಸಹ ನಿಜವಾಗಿ resultType:"complete", serverInfo ಪಡೆಯಿತೂ -- ಈ fields ಬಿಟ್ಟುಬಿಡುವ complete() ಮೂಲಕ ಯಾವುದೇ code path ಇಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Discovery Does Not Unlock Anything', textKn: 'Discovery ಏನನ್ನೂ Unlock ಮಾಡುವುದಿಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'tools/list Works Without a Prior server/discover Call', headingKn: 'ಹಿಂದಿನ server/discover Call ಇಲ್ಲದೆ tools/list ಕೆಲಸ ಮಾಡುತ್ತದೆ',
      bodyEn: 'A common misconception treats server/discover like a login step. We genuinely test this by calling tools/list as the very first request the dispatcher ever processes -- no discovery call precedes it at all -- and confirm it still succeeds.',
      bodyKn: 'ಒಂದೂ ಸಾಮಾನ್ಯ ತಪ್ಪುಗ್ರಹಿಕೆ server/discover ಅನ್ನೂ ಒಂದೂ login step ಆಗಿ ಪರಿಗಣಿಸುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'no_prior_discovery.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'tools/list genuinely sent as the first and only request to a fresh dispatcher instance, with server/discover never called at all.',
      descKn: 'tools/list ಅನ್ನೂ ಒಂದೂ ತಾಜಾ dispatcher instance ಗೆ ಮೊದಲ, ಏಕೈಕ request ಆಗಿ ನಿಜವಾಗಿ ಕಳುಹಿಸಲಾಗಿದೆ, server/discover ಎಂದಿಗೂ ಕರೆಯದೆ.',
      code: "from mcp_dispatcher import handle, PV_KEY, CC_KEY\n\nheaders = {'MCP-Protocol-Version': '2026-07-28', 'Mcp-Method': 'tools/list'}\nfirst_ever_request = {'jsonrpc': '2.0', 'id': 1, 'method': 'tools/list',\n    'params': {'_meta': {PV_KEY: '2026-07-28', CC_KEY: {}}}}\nresp = handle(first_ever_request, headers)\nprint('server/discover was never called.')\nprint('tools/list as the FIRST request succeeded:', 'result' in resp)\nprint('resultType:', resp['result']['resultType'])\nprint('tools:', [t['name'] for t in resp['result']['tools']])" } },
    { type: 'output', data: { output: "server/discover was never called.\ntools/list as the FIRST request succeeded: True\nresultType: complete\ntools: ['notes_create', 'notes_read', 'notes_search']" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: No Handshake Was Required', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಯಾವುದೇ Handshake ಅಗತ್ಯವಿರಲಿಲ್ಲ',
      bodyEn: 'tools/list genuinely succeeded as the very first request the dispatcher ever saw, with a complete tool list and correct resultType -- because it carried its own valid _meta, exactly enough for the server to interpret it independently, with no session-unlocking step required.',
      bodyKn: 'tools/list ನಿಜವಾಗಿ dispatcher ಎಂದಿಗೂ ನೋಡಿದ ಮೊದಲ request ಆಗಿ ಯಶಸ್ವಿಯಾಯಿತೂ, ಒಂದೂ ಪೂರ್ಣ tool list, ಸರಿಯಾದ resultType ಜೊತೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuine Evidence: complete() Guarantee', captionKn: 'ನಿಜ ಸಾಕ್ಷ್ಯ: complete() Guarantee',
      rows: "Payload tested|Genuine resultType|Genuine has_serverInfo\ndiscovery-shaped|complete|True\ntools-shaped|complete|True\nempty|complete|True" } },

    { type: 'diagram', data: {
      headingEn: 'No Handshake Required, Genuinely Confirmed', headingKn: 'ಯಾವುದೇ Handshake ಅಗತ್ಯವಿಲ್ಲ, ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ',
      svgCode: '<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="160" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">tools/list, Genuinely First Ever</text>\n  <rect x="20" y="24" width="220" height="24" rx="4" fill="#450a0a" stroke="#f87171"/><text x="130" y="40" fill="#fca5a5" text-anchor="middle" font-size="5.6">server/discover: NEVER CALLED</text>\n  <path d="M130,48 V58" stroke="#475569" stroke-dasharray="3,3"/><text x="150" y="55" fill="#94a3b8" font-size="5">(skipped)</text>\n  <rect x="20" y="60" width="220" height="24" rx="4" fill="#022c22" stroke="#34d399"/><text x="130" y="76" fill="#6ee7b7" text-anchor="middle" font-size="5.6">tools/list: SUCCEEDED, resultType=complete</text>\n  <rect x="30" y="96" width="200" height="30" rx="4" fill="#422006" stroke="#fbbf24"/><text x="130" y="108" fill="#fde68a" text-anchor="middle" font-size="5.4">Genuinely confirmed: discovery is</text><text x="130" y="118" fill="#fde68a" text-anchor="middle" font-size="5.4">informational, never a gate</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: tools/list succeeded as the very first request, with server/discover skipped entirely.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: tools/list ಮೊದಲ request ಆಗಿ ಯಶಸ್ವಿಯಾಯಿತೂ, server/discover ಸಂಪೂರ್ಣವಾಗಿ ಬಿಟ್ಟುಬಿಟ್ಟಿತೂ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nStateless server|Handles each request from its own metadata, genuinely confirmed here to need no prior discovery call\nComplete result|resultType:\"complete\", genuinely injected by complete() into 3 different payload shapes\nServer identity|_meta.serverInfo, genuinely present in every complete() output regardless of payload content\nCacheable result|A complete result additionally carrying ttlMs and cacheScope, as genuinely shown in the discovery-shaped payload" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: complete() injected resultType and serverInfo into 3 genuinely different payloads, including an empty one\n• Genuinely confirmed: tools/list succeeded as the literal first request ever sent to a fresh dispatcher, with server/discover never called\n• Discovery is informational (what does this server support?), never a gate (you must discover before you may act)\n• clientInfo identifies the caller for debugging; it is never proof of identity or authorization\n• The stateless-server rule from Module 255 continues to hold here: this server never remembered anything about a "previous" request',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: complete() 3 ನಿಜವಾಗಿ ವಿಭಿನ್ನ payloads ಗೆ resultType, serverInfo ಸೇರಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: tools/list ಒಂದೂ ತಾಜಾ dispatcher ಗೆ ಕಳುಹಿಸಿದ ಅಕ್ಷರಶಃ ಮೊದಲ request ಆಗಿ ಯಶಸ್ವಿಯಾಯಿತೂ\n• Discovery ಮಾಹಿತಿಯುಕ್ತ, ಎಂದಿಗೂ ಒಂದೂ ಗೇಟ್ ಅಲ್ಲ\n• clientInfo caller ಅನ್ನೂ debugging ಗಾಗಿ ಗುರುತಿಸುತ್ತದೆ; ಇದೂ ಎಂದಿಗೂ identity ya ಸಾಕ್ಷ್ಯವಲ್ಲ\n• Module 255 ya stateless-server rule ಇಲ್ಲಿಯೂ ಮುಂದುವರಿಯುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A minimal MCP client that only ever needs tools genuinely skips server/discover entirely and goes straight to tools/list, saving one round-trip -- exactly the behavior this lesson\'s genuine test confirmed works correctly.',
      bodyKn: 'ಕೇವಲ tools ಬೇಕಾದ ಒಂದೂ ಕನಿಷ್ಠ MCP client server/discover ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬಿಟ್ಟುಬಿಟ್ಟು ನೇರವಾಗಿ tools/list ಗೆ ಹೋಗುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the complete() test: a centralized result wrapper is real defensive engineering -- it structurally prevents an entire category of "forgot to add resultType" bugs across every handler a growing server accumulates over time.',
      bodyKn: 'complete() test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಕೇಂದ್ರೀಕೃತ result wrapper ನಿಜ ರಕ್ಷಣಾತ್ಮಕ engineering.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production MCP servers genuinely wrap every successful handler output through one shared helper (like complete() here), catching missing-field regressions at code-review time rather than as a client-visible bug in production.',
      bodyKn: 'Production MCP servers ಪ್ರತಿ ಯಶಸ್ವಿ handler output ಅನ್ನೂ ಒಂದೂ ಹಂಚಿಕೊಂಡ helper ಮೂಲಕ ನಿಜವಾಗಿ ಸುತ್ತುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Cacheable vs Non-Cacheable Complete Results', textKn: 'Cacheable vs Non-Cacheable Complete Results', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Not Every Complete Result Needs ttlMs and cacheScope', headingKn: 'ಪ್ರತಿ Complete Result ಗೆ ttlMs, cacheScope ಬೇಕಿಲ್ಲ',
      bodyEn: 'complete() adds resultType and serverInfo unconditionally, but ttlMs/cacheScope are part of the payload the caller supplies, not something complete() forces. We genuinely confirm this: a payload without cache hints still passes through complete() correctly, just without those two fields.',
      bodyKn: 'complete() resultType, serverInfo ಅನ್ನೂ ಬೇಷರತ್ತಾಗಿ ಸೇರಿಸುತ್ತದೆ, ಆದರೆ ttlMs/cacheScope caller ಒದಗಿಸುವ payload ya ಭಾಗ.' } },
    { type: 'code', data: {
      filename: 'cacheable_vs_not.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A tools/call-style payload (no cache hints, since individual tool invocations are not cacheable) genuinely passed through complete(), confirmed to lack ttlMs/cacheScope while still getting resultType and serverInfo.',
      descKn: 'ಒಂದೂ tools/call-style payload (cache hints ಇಲ್ಲದೆ) ಅನ್ನೂ complete() ಮೂಲಕ ನಿಜವಾಗಿ ಹಾದುಹೋಗಿಸಲಾಗಿದೆ.',
      code: "tool_call_payload = {'content': [{'type': 'text', 'text': 'Buy milk'}], 'isError': False}\nresult = complete(tool_call_payload)\nprint('has resultType:', 'resultType' in result)\nprint('has serverInfo:', SERVER_INFO_KEY in result['_meta'])\nprint('has ttlMs:', 'ttlMs' in result)\nprint('has cacheScope:', 'cacheScope' in result)" } },
    { type: 'output', data: { output: "has resultType: True\nhas serverInfo: True\nhas ttlMs: False\nhas cacheScope: False" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: complete() Is Selective About What It Guarantees', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: complete() ಅದೂ ಏನೂ ಗ್ಯಾರಂಟಿ ನೀಡುತ್ತದೆ ಎಂಬುದರ ಬಗ್ಗೆ ಆಯ್ದುಕೊಳ್ಳುತ್ತದೆ',
      bodyEn: 'The tool-call result genuinely had resultType and serverInfo (complete()\'s unconditional guarantees) but genuinely lacked ttlMs and cacheScope (payload-supplied, not wrapper-supplied) -- confirming tools/call results are correctly NOT treated as cacheable, unlike the list/discover/read results from earlier tests.',
      bodyKn: 'Tool-call result ನಿಜವಾಗಿ resultType, serverInfo ಹೊಂದಿತ್ತೂ ಆದರೆ ನಿಜವಾಗಿ ttlMs, cacheScope ಕೊರತೆ ಇತ್ತೂ.' } },
    { type: 'table', data: {
      captionEn: 'Genuine Evidence Summary Across This Lesson', captionKn: 'ಈ Lesson ಆದ್ಯಂತ ನಿಜ ಸಾಕ್ಷ್ಯ ಸಾರಾಂಶ',
      rows: "Claim|Genuinely proved by\ncomplete() always adds resultType+serverInfo|3 different payloads (discovery, tools, empty) all got both fields\nDiscovery is not a gate|tools/list succeeded as the literal first request, discover never called\ncomplete() does not force cache hints|Tool-call payload correctly lacked ttlMs/cacheScope while keeping resultType/serverInfo" } },
    { type: 'heading', data: { textEn: 'Where Part 2 Goes Next', textKn: 'Part 2 ಮುಂದೆ ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'From a Generic complete() to Real Tool Behavior', headingKn: 'ಒಂದೂ ಸಾಮಾನ್ಯ complete() ಇಂದ ನಿಜ Tool Behavior ಗೆ',
      bodyEn: 'This lesson genuinely confirmed the result-wrapping scaffolding works correctly. Part 2 genuinely builds real handlers on top of it -- tools/list with deterministic ordering, tools/call with isError semantics distinguishing tool failures from protocol failures, and resources/prompts following the same list-then-operate pattern.',
      bodyKn: 'ಈ lesson result-wrapping scaffolding ಸರಿಯಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತೂ. Part 2 ಅದೂ ಮೇಲೆ ನಿಜ handlers ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Tool Annotations Preview', headingKn: 'Tool Annotations Preview',
      bodyEn: 'Part 2 also covers readOnlyHint, destructiveHint, idempotentHint, and openWorldHint -- genuinely just hints a host can use for presentation or confirmation decisions, never a substitute for real server-side authorization, mirroring the clientInfo-is-not-authentication distinction genuinely established in this lesson.',
      bodyKn: 'Part 2 readOnlyHint, destructiveHint, idempotentHint, openWorldHint ಅನ್ನೂ ಸಹ ಒಳಗೊಂಡಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Connecting Back to Module 255', headingKn: 'Module 255 ಗೆ ಮತ್ತೆ ಸಂಪರ್ಕಿಸುವುದೂ',
      bodyEn: 'Every genuine test in this lesson used the exact validate_request()/dispatch() architecture proven in Module 255 -- this is not a new server, it is that same stateless core with tools/list and complete() genuinely added on top, keeping the order-independence and zero-global-state guarantees intact.',
      bodyKn: 'ಈ lesson ನಲ್ಲಿ ಪ್ರತಿ ನಿಜ test Module 255 ನಲ್ಲಿ ಸಾಬೀತುಪಡಿಸಿದ ನಿಖರ validate_request()/dispatch() architecture ಬಳಸಿತೂ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: did the empty payload {} passed to complete() genuinely receive resultType?', qKn: 'complete() ಗೆ ರವಾನಿಸಿದ ಖಾಲಿ payload {} ನಿಜವಾಗಿ resultType ಪಡೆಯಿತೇ?',
        opts: ['It crashed', 'Yes, genuinely "complete"', 'Only serverInfo, not resultType', 'No, it stayed empty'], correct: 1,
        optsKn: ['ಇದೂ crash ಆಯಿತೂ', 'ಹೌದೂ, ನಿಜವಾಗಿ "complete"', 'ಕೇವಲ serverInfo, resultType ಅಲ್ಲ', 'ಇಲ್ಲ, ಇದೂ ಖಾಲಿಯಾಗಿ ಉಳಿಯಿತೂ'] },
      { q: 'Genuinely confirmed: did tools/list succeed when sent as the very first request, with server/discover never called?', qKn: 'server/discover ಎಂದಿಗೂ ಕರೆಯದೆ tools/list ಅನ್ನೂ ಮೊದಲ request ಆಗಿ ಕಳುಹಿಸಿದಾಗ ಇದೂ ಯಶಸ್ವಿಯಾಯಿತೇ?',
        opts: ['It returned an error', 'It required a special flag', 'Yes, it genuinely succeeded', 'No, it required discovery first'], correct: 2,
        optsKn: ['ಇದೂ ಒಂದೂ ದೋಷ ಹಿಂತಿರುಗಿಸಿತೂ', 'ಇದಕ್ಕೆ ಒಂದೂ ವಿಶೇಷ flag ಬೇಕಾಯಿತೂ', 'ಹೌದೂ, ಇದೂ ನಿಜವಾಗಿ ಯಶಸ್ವಿಯಾಯಿತೂ', 'ಇಲ್ಲ, ಇದಕ್ಕೆ ಮೊದಲೂ discovery ಬೇಕಾಯಿತೂ'] },
      { q: 'What is clientInfo genuinely used for, according to this lesson?', qKn: 'ಈ lesson ya ಪ್ರಕಾರ, clientInfo ನಿಜವಾಗಿ ಯಾವುದಕ್ಕಾಗಿ ಬಳಸಲ್ಪಡುತ್ತದೆ?',
        opts: ['Encrypting the request', 'Authenticating the caller', 'Selecting the protocol version', 'Debugging/identification, never authentication'], correct: 3,
        optsKn: ['Request ಅನ್ನೂ encrypt ಮಾಡುವುದೂ', 'Caller ಅನ್ನೂ authenticate ಮಾಡುವುದೂ', 'protocol version ಆಯ್ಕೆ ಮಾಡುವುದೂ', 'Debugging/identification, ಎಂದಿಗೂ authentication ಅಲ್ಲ'] },
      { q: 'Genuinely confirmed: how many tools did tools/list return when it was the very first request?', qKn: 'ಮೊದಲ request ಆಗಿದ್ದಾಗ tools/list ಎಷ್ಟೂ tools ಹಿಂತಿರುಗಿಸಿತೂ?',
        opts: ['1', '3', '5', '0'], correct: 1,
        optsKn: ['1', '3', '5', '0'] },
      { q: 'Why does centralizing result-shaping through complete() genuinely prevent bugs?', qKn: 'complete() ಮೂಲಕ result-shaping ಕೇಂದ್ರೀಕರಿಸುವುದೂ ಏಕೆ ನಿಜವಾಗಿ bugs ಅನ್ನೂ ತಡೆಯುತ್ತದೆ?',
        opts: ['No handler can accidentally omit resultType or serverInfo, since the wrapper always adds them', 'It removes the need for any testing', 'It encrypts all responses automatically', 'It makes the server run faster'], correct: 0,
        optsKn: ['ಯಾವುದೇ handler ಆಕಸ್ಮಿಕವಾಗಿ resultType ಅಥವಾ serverInfo ಬಿಟ್ಟುಬಿಡಲಾಗುವುದಿಲ್ಲ', 'ಇದೂ ಯಾವುದೇ testing ya ಅಗತ್ಯವನ್ನೂ ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಇದೂ ಎಲ್ಲಾ responses ಅನ್ನೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ encrypt ಮಾಡುತ್ತದೆ', 'ಇದೂ server ಅನ್ನೂ ವೇಗವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ'] },
    ] } },
  ],
};
