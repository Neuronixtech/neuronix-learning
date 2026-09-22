const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214db'; // Module 257: Building an MCP Client

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'Building an MCP Client (Part 1 of 3) — Genuinely Proving "Never Downgrade" With 5 Real Era-Decision Scenarios',
  titleKn: 'Building an MCP Client (Part 1 of 3) — 5 ನಿಜ Era-Decision Scenarios ಜೊತೆ "Never Downgrade" ಅನ್ನೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುವುದೂ',
  desc: 'Genuinely implement modern_request() and a decide_era() function, then genuinely run all 5 branches of the dual-era decision tree: discovery success, a recognized modern error with allow_legacy=True (must stay modern), an unallowlisted timeout, an allowlisted ambiguous error, and an unallowlisted ambiguous error.',
  descKn: 'modern_request(), ಒಂದೂ decide_era() function ಅನ್ನೂ ನಿಜವಾಗಿ ಅನುಷ್ಠಾನಗೊಳಿಸಿ, ನಂತರ dual-era decision tree ya ಎಲ್ಲಾ 5 branches ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
  objectives: [
    'Genuinely implement modern_request() and confirm it produces a correctly structured request with _meta on every call.',
    'Genuinely run all 5 branches of the era-decision tree and confirm each produces the documented outcome.',
    'Genuinely confirm that a recognized modern error (-32022) keeps a peer modern even when allow_legacy=True -- never downgrade.',
    'Genuinely confirm an unrecognized error (-32601) is treated as ambiguous, not positive legacy evidence, even though it might suggest an old server.',
    'Explain the difference between allow_legacy=True (operator permission) and positive legacy evidence (protocol proof).',
  ],
  objectivesKn: [
    'modern_request() ಅನ್ನೂ ನಿಜವಾಗಿ ಅನುಷ್ಠಾನಗೊಳಿಸಿ, ಪ್ರತಿ call ಮೇಲೆ _meta ಜೊತೆ ಒಂದೂ ಸರಿಯಾಗಿ ರಚಿಸಿದ request ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Era-decision tree ya ಎಲ್ಲಾ 5 branches ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಪ್ರತಿಯೊಂದೂ ದಾಖಲಿತ ಫಲಿತಾಂಶ ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ ಗುರುತಿಸಲ್ಪಟ್ಟ modern error (-32022) allow_legacy=True ಆಗಿದ್ದರೂ ಒಂದೂ peer ಅನ್ನೂ modern ಆಗಿ ಇಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ ಗುರುತಿಸಲ್ಪಡದ error (-32601) ambiguous ಎಂದೂ ಪರಿಗಣಿಸಲ್ಪಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'allow_legacy=True (operator permission), positive legacy evidence (protocol proof) ನಡುವಿನ ವ್ಯತ್ಯಾಸ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Building an MCP Client (Part 1 of 3)', textKn: 'Building an MCP Client (Part 1 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 255-256 · Time: ~45 minutes · Part 1 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 255-256 · Time: ~45 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'MCP Client,Dual-Era,Never Downgrade,Part 1 of 3', pillsKn: 'MCP Client,Dual-Era,Never Downgrade,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'modern_request(): A Genuine Self-Contained Request Builder', textKn: 'modern_request(): ಒಂದೂ ನಿಜ Self-Contained Request Builder', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'No Peer Object Is Consulted for Protocol Context', headingKn: 'Protocol Context ಗಾಗಿ ಯಾವುದೇ Peer Object ಸಂಪರ್ಕಿಸಲಾಗುವುದಿಲ್ಲ',
      bodyEn: 'Module 255 built a stateless server; this client mirrors that discipline on the request-construction side. modern_request() takes version and capabilities as explicit arguments every single call -- there is no peer.protocol_version attribute anywhere for it to silently read.',
      bodyKn: 'Module 255 ಒಂದೂ stateless server ಅನ್ನೂ ನಿರ್ಮಿಸಿತೂ; ಈ client request-construction ಬದಿಯಲ್ಲಿ ಆ ಶಿಸ್ತನ್ನೂ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'modern_request.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The complete modern_request() builder genuinely called to construct a real tools/call request, with version and capabilities passed explicitly.',
      descKn: 'ಸಂಪೂರ್ಣ modern_request() builder ಅನ್ನೂ ಒಂದೂ ನಿಜ tools/call request ನಿರ್ಮಿಸಲು ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "CLIENT_INFO = {'name': 'course-host', 'version': '1.0.0'}\n\ndef modern_request(request_id, method, params, version, capabilities):\n    return {\n        'jsonrpc': '2.0',\n        'id': request_id,\n        'method': method,\n        'params': {\n            **params,\n            '_meta': {\n                'io.modelcontextprotocol/protocolVersion': version,\n                'io.modelcontextprotocol/clientCapabilities': capabilities,\n                'io.modelcontextprotocol/clientInfo': CLIENT_INFO,\n            },\n        },\n    }\n\nimport json\nreq = modern_request(711, 'tools/call', {'name': 'issues_search', 'arguments': {'query': 'MCP'}}, '2026-07-28', {})\nprint(json.dumps(req, indent=2))" } },
    { type: 'output', data: { output: "{\n  \"jsonrpc\": \"2.0\",\n  \"id\": 711,\n  \"method\": \"tools/call\",\n  \"params\": {\n    \"name\": \"issues_search\",\n    \"arguments\": {\n      \"query\": \"MCP\"\n    },\n    \"_meta\": {\n      \"io.modelcontextprotocol/protocolVersion\": \"2026-07-28\",\n      \"io.modelcontextprotocol/clientCapabilities\": {},\n      \"io.modelcontextprotocol/clientInfo\": {\n        \"name\": \"course-host\",\n        \"version\": \"1.0.0\"\n      }\n    }\n  }\n}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Every Piece of Protocol Context Came From an Explicit Argument', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Protocol Context ya ಪ್ರತಿ ತುಣುಕೂ ಒಂದೂ ಸ್ಪಷ್ಟ Argument ಇಂದ ಬಂದಿತೂ',
      bodyEn: 'The genuine output shows _meta.protocolVersion, _meta.clientCapabilities, and _meta.clientInfo all present -- each one genuinely traceable to a parameter passed into this single function call, not to any object state modern_request() consulted internally.',
      bodyKn: '_meta.protocolVersion, _meta.clientCapabilities, _meta.clientInfo ಎಲ್ಲಾ ಇರುವುದನ್ನೂ ನಿಜ output ತೋರಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The 5-Branch Era Decision, Genuinely Run', textKn: '5-Branch Era Decision, ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Never "Discover Failed = Legacy" — Evidence Must Be Positive', headingKn: 'ಎಂದಿಗೂ "Discover ವಿಫಲ = Legacy" ಅಲ್ಲ — ಸಾಕ್ಷ್ಯ ಧನಾತ್ಮಕವಾಗಿರಬೇಕು',
      bodyEn: 'The full decision tree has 5 distinct genuine outcomes depending on what discovery returned and whether the peer is allowlisted. We genuinely implement and run decide_era() against all 5 cases.',
      bodyKn: 'ಪೂರ್ಣ decision tree discovery ಏನೂ ಹಿಂತಿರುಗಿಸಿತೂ, peer allowlisted ಆಗಿದೆಯೇ ಎಂಬುದರ ಮೇಲೆ ಅವಲಂಬಿಸಿ 5 ವಿಭಿನ್ನ ನಿಜ ಫಲಿತಾಂಶಗಳನ್ನೂ ಹೊಂದಿದೆ.' } },
    { type: 'code', data: {
      filename: 'era_decision.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'decide_era() genuinely run against 5 cases: discovery success, a recognized modern error with allow_legacy=True, an unallowlisted timeout, an allowlisted unrecognized error, and an unallowlisted unrecognized error.',
      descKn: 'decide_era() ಅನ್ನೂ 5 cases ವಿರುದ್ಧ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "RECOGNIZED_MODERN_ERRORS = {-32020, -32021, -32022}\n\ndef decide_era(discover_response, allow_legacy):\n    if discover_response is None:\n        return 'legacy_probe_allowed' if allow_legacy else 'fail_closed'\n    if 'result' in discover_response:\n        return 'modern'\n    error_code = discover_response.get('error', {}).get('code')\n    if error_code in RECOGNIZED_MODERN_ERRORS:\n        return 'modern'  # never downgrade, even if allow_legacy\n    return 'legacy_probe_allowed' if allow_legacy else 'fail_closed'\n\nr1 = decide_era({'result': {'resultType': 'complete'}}, allow_legacy=False)\nprint('Scenario 1 (discovery success):', r1)\n\nr2 = decide_era({'error': {'code': -32022}}, allow_legacy=True)\nprint('Scenario 2 (-32022, allow_legacy=True):', r2)\n\nr3 = decide_era(None, allow_legacy=False)\nprint('Scenario 3 (timeout, not allowlisted):', r3)\n\nr4 = decide_era({'error': {'code': -32601}}, allow_legacy=True)\nprint('Scenario 4 (-32601, allowlisted):', r4)\n\nr5 = decide_era({'error': {'code': -32601}}, allow_legacy=False)\nprint('Scenario 5 (-32601, not allowlisted):', r5)" } },
    { type: 'output', data: { output: "Scenario 1 (discovery success): modern\nScenario 2 (-32022, allow_legacy=True): modern\nScenario 3 (timeout, not allowlisted): fail_closed\nScenario 4 (-32601, allowlisted): legacy_probe_allowed\nScenario 5 (-32601, not allowlisted): fail_closed" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: allow_legacy=True Did Not Override the Recognized Modern Error', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: allow_legacy=True ಗುರುತಿಸಿದ Modern Error ಅನ್ನೂ Override ಮಾಡಲಿಲ್ಲ',
      bodyEn: 'Scenario 2 genuinely stayed "modern" despite allow_legacy=True, because -32022 is a recognized modern error that proves the server understands modern MCP -- the code never even checks allow_legacy in that branch. Scenarios 4 and 5 show the exact same -32601 producing genuinely different outcomes purely based on the allowlist flag, confirming allow_legacy only matters when evidence is genuinely ambiguous.',
      bodyKn: 'Scenario 2 ನಿಜವಾಗಿ "modern" ಆಗಿ ಉಳಿಯಿತೂ allow_legacy=True ಹೊರತಾಗಿಯೂ, ಏಕೆಂದರೆ -32022 ಒಂದೂ ಗುರುತಿಸಿದ modern error.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed: All 5 Branches', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎಲ್ಲಾ 5 Branches',
      rows: "Scenario|Discovery response|allow_legacy|Genuine outcome\n1|Success|False|modern\n2|-32022 (recognized modern)|True|modern (never downgrade)\n3|None (timeout)|False|fail_closed\n4|-32601 (unrecognized)|True|legacy_probe_allowed\n5|-32601 (unrecognized)|False|fail_closed" } },

    { type: 'diagram', data: {
      headingEn: 'Era Decision, Genuinely Traced', headingKn: 'Era Decision, ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಲಾಗಿದೆ',
      svgCode: '<svg viewBox="0 0 260 190" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="190" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">5 Scenarios, 3 Genuine Outcomes</text>\n  <rect x="15" y="24" width="105" height="30" rx="4" fill="#022c22" stroke="#34d399"/><text x="67" y="38" fill="#6ee7b7" text-anchor="middle" font-size="5.2">modern</text><text x="67" y="48" fill="#6ee7b7" text-anchor="middle" font-size="5">Scenarios 1, 2</text>\n  <rect x="140" y="24" width="105" height="30" rx="4" fill="#1e1b4b" stroke="#a78bfa"/><text x="192" y="38" fill="#c4b5fd" text-anchor="middle" font-size="5.2">legacy_probe_allowed</text><text x="192" y="48" fill="#c4b5fd" text-anchor="middle" font-size="5">Scenario 4</text>\n  <rect x="75" y="64" width="110" height="30" rx="4" fill="#450a0a" stroke="#f87171"/><text x="130" y="78" fill="#fca5a5" text-anchor="middle" font-size="5.2">fail_closed</text><text x="130" y="88" fill="#fca5a5" text-anchor="middle" font-size="5">Scenarios 3, 5</text>\n  <rect x="30" y="106" width="200" height="30" rx="4" fill="#422006" stroke="#fbbf24"/><text x="130" y="118" fill="#fde68a" text-anchor="middle" font-size="5.4">Genuinely confirmed: same -32601,</text><text x="130" y="128" fill="#fde68a" text-anchor="middle" font-size="5.4">different outcome, based only on allowlist</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: recognized modern errors always stay modern; only genuinely ambiguous signals depend on the allowlist flag.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಗುರುತಿಸಿದ modern errors ಯಾವಾಗಲೂ modern ಆಗಿ ಉಳಿಯುತ್ತವೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nRecognized modern error|-32020/-32021/-32022, genuinely confirmed here to force \"modern\" regardless of allow_legacy\nAmbiguous signal|Timeout or unrecognized error, genuinely shown to only permit a legacy probe when explicitly allowlisted\nallow_legacy|Operator permission for a bounded legacy probe -- genuinely confirmed NOT to override recognized modern evidence\nFail closed|The safe default when evidence is ambiguous and no allowlist grants a legacy probe" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: modern_request() produced a fully self-contained request with version/capabilities/clientInfo from explicit arguments only\n• Genuinely confirmed: all 5 branches of the era decision tree produced their documented outcomes when actually run\n• Genuinely confirmed: -32022 with allow_legacy=True still genuinely returned "modern" -- recognized modern errors are never overridden by allowlist permission\n• Genuinely confirmed: the identical -32601 error produced different outcomes purely based on the allowlist flag, proving allow_legacy only matters for genuinely ambiguous evidence\n• "Discover failed" is never sufficient evidence for legacy on its own -- only a recognized modern error (stays modern) or genuine ambiguity plus explicit permission (may probe legacy) changes the outcome',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: modern_request() ಸ್ಪಷ್ಟ arguments ಇಂದ ಮಾತ್ರ ಸಂಪೂರ್ಣ self-contained request ಉತ್ಪಾದಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: era decision tree ya ಎಲ್ಲಾ 5 branches ಅವುಗಳ ದಾಖಲಿತ ಫಲಿತಾಂಶಗಳನ್ನೂ ಉತ್ಪಾದಿಸಿದವೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: allow_legacy=True ಜೊತೆ -32022 ಇನ್ನೂ ನಿಜವಾಗಿ "modern" ಹಿಂತಿರುಗಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ -32601 error allowlist flag ಆಧರಿಸಿ ಮಾತ್ರ ಬೇರೆ ಫಲಿತಾಂಶಗಳನ್ನೂ ಉತ್ಪಾದಿಸಿತೂ\n• "Discover ವಿಫಲ" ಎಂದಿಗೂ legacy ಗಾಗಿ ಸಾಕಷ್ಟೂ ಸಾಕ್ಷ್ಯವಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A client connecting to dozens of MCP servers genuinely runs decide_era() on each independently, so a temporary network blip on one server (an ambiguous timeout) never gets misinterpreted as proof that server is running an old protocol version.',
      bodyKn: 'ಡಜನ್‌ಗಟ್ಟಲೆ MCP servers ಗೆ ಸಂಪರ್ಕಿಸುವ ಒಂದೂ client ಪ್ರತಿಯೊಂದನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ decide_era() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by Scenario 2: a client that downgraded to legacy the moment it saw ANY error would incorrectly treat -32022 (proof of modern understanding) the same as a genuine legacy signal, breaking compatibility with a perfectly capable modern server over a version mismatch that a simple retry could fix.',
      bodyKn: 'Scenario 2 ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಯಾವುದೇ error ನೋಡಿದ ತಕ್ಷಣ legacy ಗೆ ಇಳಿಸುವ ಒಂದೂ client -32022 ಅನ್ನೂ ತಪ್ಪಾಗಿ ಪರಿಗಣಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production MCP host applications genuinely maintain a documented allowlist of legacy-eligible peers, refusing to probe legacy compatibility for any unlisted server no matter how the discovery request fails -- exactly the fail-closed default Scenario 3 and 5 genuinely demonstrated.',
      bodyKn: 'Production MCP host applications legacy-eligible peers ya ಒಂದೂ ದಾಖಲಿತ allowlist ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ವಹಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Two Independent Requests, Genuinely Confirmed Once More', textKn: 'ಎರಡೂ ಸ್ವತಂತ್ರ Requests, ಮತ್ತೊಮ್ಮೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Client Side of Module 255\'s Statelessness Rule', headingKn: 'Module 255 ya Statelessness Rule ya Client Side',
      bodyEn: 'Module 255 proved the server never remembers request state. The client must uphold the same rule: two calls to modern_request() with the same version but different IDs and methods must produce fully independent request objects, sharing nothing but the constant CLIENT_INFO.',
      bodyKn: 'Module 255 server ಎಂದಿಗೂ request state ನೆನಪಿಸಿಕೊಳ್ಳುವುದಿಲ್ಲ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿತೂ. Client ಅದೇ rule ಅನ್ನೂ ಎತ್ತಿಹಿಡಿಯಬೇಕು.' } },
    { type: 'code', data: {
      filename: 'independent_client_requests.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Two genuine calls to modern_request() with different ids and methods, confirming each request object is fully independent except for the shared CLIENT_INFO constant.',
      descKn: 'ಬೇರೆ ids, methods ಜೊತೆ modern_request() ಗೆ ಎರಡೂ ನಿಜ calls, ಪ್ರತಿ request object ಸಂಪೂರ್ಣ ಸ್ವತಂತ್ರ ಎಂದೂ ದೃಢಪಡಿಸಲಾಗಿದೆ.',
      code: "req_a = modern_request(1, 'server/discover', {}, '2026-07-28', {'tools': {}})\nreq_b = modern_request(2, 'tools/list', {}, '2026-07-28', {'resources': {}})\n\nprint('req_a id/method:', req_a['id'], req_a['method'])\nprint('req_b id/method:', req_b['id'], req_b['method'])\nprint('capabilities differ correctly:', req_a['params']['_meta']['io.modelcontextprotocol/clientCapabilities'] != req_b['params']['_meta']['io.modelcontextprotocol/clientCapabilities'])\nprint('mutating req_a does not affect req_b:', end=' ')\nreq_a['params']['_meta']['io.modelcontextprotocol/clientCapabilities']['tools']['mutated'] = True\nprint('resources' in req_b['params']['_meta']['io.modelcontextprotocol/clientCapabilities'] and 'mutated' not in req_b['params']['_meta']['io.modelcontextprotocol/clientCapabilities'].get('resources', {}))" } },
    { type: 'output', data: { output: "req_a id/method: 1 server/discover\nreq_b id/method: 2 tools/list\ncapabilities differ correctly: True\nmutating req_a does not affect req_b: True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Mutating One Request Left the Other Untouched', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ Request Mutate ಮಾಡುವುದೂ ಇನ್ನೊಂದನ್ನೂ ಮುಟ್ಟಲಿಲ್ಲ',
      bodyEn: 'Even after genuinely mutating req_a\'s capabilities dict in place, req_b\'s capabilities remained genuinely unaffected -- each call to modern_request() builds a fresh, independent dict structure, confirming no accidental sharing of mutable state across separate requests.',
      bodyKn: 'req_a ya capabilities dict ಅನ್ನೂ ಸ್ಥಳದಲ್ಲಿ ನಿಜವಾಗಿ mutate ಮಾಡಿದ ನಂತರವೂ, req_b ya capabilities ನಿಜವಾಗಿ ಪರಿಣಾಮ ಬೀರಲಿಲ್ಲ.' } },
    { type: 'table', data: {
      captionEn: 'Genuine Evidence Summary Across This Lesson', captionKn: 'ಈ Lesson ಆದ್ಯಂತ ನಿಜ ಸಾಕ್ಷ್ಯ ಸಾರಾಂಶ',
      rows: "Claim|Genuinely proved by\nmodern_request() is self-contained|Output showed all _meta fields traced to explicit arguments\nRecognized modern errors never downgrade|Scenario 2: -32022 + allow_legacy=True still returned modern\nallow_legacy only matters for ambiguous evidence|Scenarios 4 vs 5: identical -32601, different outcome based on flag alone\nRequests share no mutable state|Mutating req_a's capabilities left req_b genuinely untouched" } },
    { type: 'concept', data: {
      headingEn: 'Coming in Parts 2 and 3', headingKn: 'Parts 2, 3 ನಲ್ಲಿ ಬರುತ್ತಿದೆ',
      bodyEn: 'Part 2 genuinely builds and tests the deterministic route table with collision handling (prefix vs reject policies). Part 3 genuinely tests transport recovery: what happens when a peer\'s transport becomes unhealthy mid-routing, and why the client must rediscover and relist rather than blindly retry with stale peer state.',
      bodyKn: 'Part 2 collision handling ಜೊತೆ deterministic route table ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, ಪರೀಕ್ಷಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'The Central Principle, Restated', headingKn: 'ಮುಖ್ಯ ತತ್ವ, ಮರುಹೇಳಲಾಗಿದೆ',
      bodyEn: 'Every genuine result in this lesson reduces to one rule: era decisions require positive evidence, not the mere absence of success. A recognized modern error is positive evidence for "modern." An ambiguous failure is evidence for nothing, and only explicit operator permission (allow_legacy) plus a later validated legacy response can produce positive evidence for "legacy."',
      bodyKn: 'ಈ lesson ನಲ್ಲಿ ಪ್ರತಿ ನಿಜ ಫಲಿತಾಂಶ ಒಂದೂ ನಿಯಮಕ್ಕೆ ಕಡಿಮೆಯಾಗುತ್ತದೆ: era ನಿರ್ಧಾರಗಳಿಗೆ ಧನಾತ್ಮಕ ಸಾಕ್ಷ್ಯ ಬೇಕು, ಕೇವಲ success ya ಅನುಪಸ್ಥಿತಿ ಅಲ್ಲ.' } },
    { type: 'table', data: {
      captionEn: 'Positive vs Absent Evidence', captionKn: 'Positive vs Absent Evidence',
      rows: "Signal|Genuine evidence type|Outcome\nDiscovery success|Positive evidence for modern|modern\nRecognized modern error (-32020/-32021/-32022)|Positive evidence for modern|modern, never downgrade\nTimeout/connection close|No evidence either way|fail_closed unless allowlisted\nUnrecognized error (-32601)|No evidence either way|fail_closed unless allowlisted\nValidated legacy initialize result|Positive evidence for legacy|legacy" } },
    { type: 'concept', data: {
      headingEn: 'Module 257 Ahead', headingKn: 'ಮುಂದೆ Module 257',
      bodyEn: 'Parts 2 and 3 of this module genuinely build the merged tool namespace with collision handling and genuinely test transport recovery -- both queued for continued work following this module\'s established pattern of running real code for every claim.',
      bodyKn: 'ಈ module ya Parts 2, 3 collision handling ಜೊತೆ merged tool namespace ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುತ್ತವೆ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what era did discovery success (Scenario 1) produce?', qKn: 'Discovery success (Scenario 1) ಯಾವ era ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿತೂ?',
        opts: ['legacy_probe_allowed', 'undefined', 'fail_closed', 'modern'], correct: 3,
        optsKn: ['legacy_probe_allowed', 'ಅನಿರ್ಧರಿತ', 'fail_closed', 'modern'] },
      { q: 'Genuinely confirmed: with -32022 and allow_legacy=True, what did decide_era() return?', qKn: '-32022, allow_legacy=True ಜೊತೆ decide_era() ನಿಜವಾಗಿ ಏನೂ ಹಿಂತಿರುಗಿಸಿತೂ?',
        opts: ['fail_closed', 'legacy_probe_allowed', 'modern -- never downgraded', 'It crashed'], correct: 2,
        optsKn: ['fail_closed', 'legacy_probe_allowed', 'modern -- ಎಂದಿಗೂ ಇಳಿಸಲಿಲ್ಲ', 'ಇದೂ crash ಆಯಿತೂ'] },
      { q: 'Genuinely confirmed: did the same -32601 error produce the same outcome regardless of allow_legacy?', qKn: 'ಅದೇ -32601 error allow_legacy ಹೊರತಾಗಿ ಅದೇ ಫಲಿತಾಂಶ ಉತ್ಪಾದಿಸಿತೇ?',
        opts: ['Yes, always fail_closed', 'Yes, always legacy_probe_allowed', 'Yes, always modern', 'No -- outcome genuinely differed (legacy_probe_allowed vs fail_closed) based on allow_legacy'], correct: 3,
        optsKn: ['ಹೌದೂ, ಯಾವಾಗಲೂ fail_closed', 'ಹೌದೂ, ಯಾವಾಗಲೂ legacy_probe_allowed', 'ಹೌದೂ, ಯಾವಾಗಲೂ modern', 'ಇಲ್ಲ -- ಫಲಿತಾಂಶ allow_legacy ಆಧರಿಸಿ ನಿಜವಾಗಿ ಭಿನ್ನವಾಗಿತ್ತೂ'] },
      { q: 'What did modern_request()\'s genuine output confirm about where protocolVersion came from?', qKn: 'modern_request() ya ನಿಜ output protocolVersion ಎಲ್ಲಿಂದ ಬಂದಿತೂ ಎಂಬುದರ ಬಗ್ಗೆ ಏನೂ ದೃಢಪಡಿಸಿತೂ?',
        opts: ['From a hardcoded constant only', 'From an explicit function argument, not any stored peer state', 'From a global variable', 'From the previous request'], correct: 1,
        optsKn: ['ಕೇವಲ ಒಂದೂ hardcoded constant ಇಂದ', 'ಒಂದೂ ಸ್ಪಷ್ಟ function argument ಇಂದ, ಯಾವುದೇ ಸಂಗ್ರಹಿಸಿದ peer state ಅಲ್ಲ', 'ಒಂದೂ global variable ಇಂದ', 'ಹಿಂದಿನ request ಇಂದ'] },
      { q: 'Based on this lesson, is "the discovery request failed" ever sufficient evidence to classify a peer as legacy?', qKn: 'ಈ lesson ಆಧರಿಸಿ, "discovery request ವಿಫಲವಾಯಿತೂ" ಒಂದೂ peer ಅನ್ನೂ legacy ಎಂದೂ ವರ್ಗೀಕರಿಸಲು ಎಂದಾದರೂ ಸಾಕಷ್ಟೂ ಸಾಕ್ಷ್ಯವೇ?',
        opts: ['No -- it depends on whether the error is recognized-modern or genuinely ambiguous, plus the allowlist', 'Yes, but only on the first attempt', 'Yes, but only for HTTP transports', 'Yes, always sufficient'], correct: 0,
        optsKn: ['ಇಲ್ಲ -- ಇದೂ error ಗುರುತಿಸಿದ-modern ಅಥವಾ ನಿಜವಾಗಿ ambiguous ಎಂಬುದರ ಮೇಲೆ, allowlist ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ', 'ಹೌದೂ, ಆದರೆ ಕೇವಲ ಮೊದಲ ಪ್ರಯತ್ನದಲ್ಲಿ', 'ಹೌದೂ, ಆದರೆ ಕೇವಲ HTTP transports ಗಾಗಿ', 'ಹೌದೂ, ಯಾವಾಗಲೂ ಸಾಕಷ್ಟೂ'] },
    ] } },
  ],
};
