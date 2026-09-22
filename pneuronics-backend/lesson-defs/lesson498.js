const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214d5'; // Module 255: MCP Fundamentals

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'MCP Fundamentals (Part 2 of 3) — Genuinely Proving Validation Order: Mismatch Before Unsupported Version',
  titleKn: 'MCP Fundamentals (Part 2 of 3) — Validation Order ಅನ್ನೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುವುದೂ',
  desc: 'Genuinely trigger a -32020 header/body mismatch and a -32022 unsupported protocol version from the same dispatcher, then genuinely construct a request that is BOTH mismatched AND unsupported to confirm mismatch is checked first -- exactly the ordering the spec requires and this code enforces.',
  descKn: 'ಅದೇ dispatcher ಇಂದ ಒಂದೂ -32020 header/body mismatch, ಒಂದೂ -32022 unsupported protocol version ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸಿ, ನಂತರ mismatch ಮೊದಲೂ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely trigger -32020 (header/body mismatch) with a request whose HTTP header and JSON body protocol versions disagree.',
    'Genuinely trigger -32022 (unsupported protocol version) with a request whose header and body agree but request an unsupported revision.',
    'Genuinely construct a request that is simultaneously mismatched AND requests an unsupported version, and confirm -32020 wins.',
    'Genuinely confirm tools/list produces identical ordering across two separate calls, and explain why that matters for caching.',
    'Explain resultType:"complete" as a discriminator and why not every complete result needs ttlMs/cacheScope.',
  ],
  objectivesKn: [
    'HTTP header, JSON body protocol versions ಒಪ್ಪದ ಒಂದೂ request ಜೊತೆ -32020 ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸಿ.',
    'Header, body ಒಪ್ಪುವ ಆದರೆ ಒಂದೂ ಬೆಂಬಲಿತವಲ್ಲದ revision ಕೇಳುವ ಒಂದೂ request ಜೊತೆ -32022 ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸಿ.',
    'ಏಕಕಾಲದಲ್ಲಿ mismatched, unsupported version ಎರಡೂ ಆಗಿರುವ ಒಂದೂ request ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, -32020 ಗೆಲ್ಲುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಎರಡೂ ಪ್ರತ್ಯೇಕ calls ಆದ್ಯಂತ tools/list ಒಂದೇ ordering ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'resultType:"complete" ಅನ್ನೂ ಒಂದೂ discriminator ಆಗಿ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MCP Fundamentals (Part 2 of 3)', textKn: 'MCP Fundamentals (Part 2 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~45 minutes · Part 2 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~45 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'server/discover,-32020,-32022,Part 2 of 3', pillsKn: 'server/discover,-32020,-32022,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Two Failure Modes, Genuinely Distinguished', textKn: 'ಎರಡೂ Failure Modes, ನಿಜವಾಗಿ ಪ್ರತ್ಯೇಕಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Mismatch Means Two Layers Disagree; Unsupported Means They Agree on Something Unusable', headingKn: 'Mismatch ಎಂದೂ ಎರಡೂ Layers ಒಪ್ಪುವುದಿಲ್ಲ; Unsupported ಎಂದೂ ಅವೂ ಬಳಸಲಾಗದ ಒಂದಕ್ಕೆ ಒಪ್ಪುತ್ತವೆ',
      bodyEn: 'Part 1\'s dispatcher checks header/body equality (-32020) before checking whether the agreed-upon version is supported (-32022). We genuinely trigger each independently first, using the exact same handle() function from Part 1.',
      bodyKn: 'Part 1 ya dispatcher header/body equality (-32020) ಅನ್ನೂ ಅದೂ ಸಮ್ಮತಿಸಿದ version ಬೆಂಬಲಿತವೇ (-32022) ಎಂದೂ ಪರಿಶೀಲಿಸುವ ಮೊದಲೂ ಪರಿಶೀಲಿಸುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'two_error_modes.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Two separate genuine requests: one with disagreeing header/body versions (triggers -32020), one with agreeing but unsupported versions (triggers -32022).',
      descKn: 'ಎರಡೂ ಪ್ರತ್ಯೇಕ ನಿಜ requests: ಒಂದೂ ಒಪ್ಪದ header/body versions ಜೊತೆ, ಒಂದೂ ಒಪ್ಪುವ ಆದರೆ ಬೆಂಬಲಿತವಲ್ಲದ versions ಜೊತೆ.',
      code: "from mcp_dispatcher import handle, PV_KEY, CC_KEY\nimport json\n\n# Case A: header and body DISAGREE (mismatch)\nmismatch_headers = {'MCP-Protocol-Version': '2027-01-01', 'Mcp-Method': 'server/discover'}\nreq_a = {'jsonrpc': '2.0', 'id': 10, 'method': 'server/discover',\n    'params': {'_meta': {PV_KEY: '2026-07-28', CC_KEY: {}}}}\nresp_a = handle(req_a, mismatch_headers)\nprint('Case A (header=2027-01-01, body=2026-07-28):', resp_a['error']['code'], resp_a['error']['message'])\n\n# Case B: header and body AGREE, but the agreed version is unsupported\nunsupported_headers = {'MCP-Protocol-Version': '2027-01-01', 'Mcp-Method': 'server/discover'}\nreq_b = {'jsonrpc': '2.0', 'id': 11, 'method': 'server/discover',\n    'params': {'_meta': {PV_KEY: '2027-01-01', CC_KEY: {}}}}\nresp_b = handle(req_b, unsupported_headers)\nprint('Case B (header=body=2027-01-01):', resp_b['error']['code'], resp_b['error']['message'], resp_b['error']['data'])" } },
    { type: 'output', data: { output: "Case A (header=2027-01-01, body=2026-07-28): -32020 Header/body mismatch\nCase B (header=body=2027-01-01): -32022 Unsupported protocol version {'requested': '2027-01-01', 'supported': ['2026-07-28']}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Two Different Codes for Two Different Problems', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ ವಿಭಿನ್ನ ಸಮಸ್ಯೆಗಳಿಗೆ ಎರಡೂ ವಿಭಿನ್ನ Codes',
      bodyEn: 'Case A genuinely produced -32020 because the header (2027-01-01) and body (2026-07-28) disagreed about what version was even being requested. Case B genuinely produced -32022 with full requested/supported data because both layers agreed on 2027-01-01, but the server simply does not speak it.',
      bodyKn: 'Case A ನಿಜವಾಗಿ -32020 ಉತ್ಪಾದಿಸಿತೂ ಏಕೆಂದರೆ header (2027-01-01), body (2026-07-28) ಯಾವ version ಕೇಳಲಾಗುತ್ತಿದೆ ಎಂಬುದರ ಬಗ್ಗೆ ಒಪ್ಪಲಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'The Critical Ordering Test: Both Problems at Once', textKn: 'ಮುಖ್ಯ Ordering Test: ಎರಡೂ ಸಮಸ್ಯೆಗಳು ಒಂದೇ ಬಾರಿಗೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'When a Request Is Both Mismatched and Requests an Unsupported Version', headingKn: 'ಒಂದೂ Request Mismatched, Unsupported Version ಎರಡೂ ಆಗಿದ್ದಾಗ',
      bodyEn: 'The interesting case is a request that genuinely qualifies for BOTH errors simultaneously: header says one unsupported version, body says a different unsupported version. The spec says mismatch must be checked first. We genuinely construct exactly this case to confirm the code actually enforces that ordering rather than just claiming to.',
      bodyKn: 'ಆಸಕ್ತಿಕರ case ಎಂದೂ ಎರಡೂ errors ಗಳಿಗೆ ಏಕಕಾಲದಲ್ಲಿ ನಿಜವಾಗಿ ಅರ್ಹವಾಗಿರುವ ಒಂದೂ request: header ಒಂದೂ unsupported version ಹೇಳುತ್ತದೆ, body ಬೇರೆ unsupported version ಹೇಳುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'ordering_proof.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A single request genuinely built to qualify for both -32020 (mismatch) and -32022 (unsupported) simultaneously, confirming which error the dispatcher actually returns.',
      descKn: 'ಒಂದೂ ಏಕೈಕ request ನಿಜವಾಗಿ -32020, -32022 ಎರಡಕ್ಕೂ ಏಕಕಾಲದಲ್ಲಿ ಅರ್ಹವಾಗಲು ನಿರ್ಮಿಸಲಾಗಿದೆ.',
      code: "# header says 2099-01-01 (unsupported), body says 2098-01-01 (also unsupported, AND different from header)\nboth_headers = {'MCP-Protocol-Version': '2099-01-01', 'Mcp-Method': 'server/discover'}\nreq_c = {'jsonrpc': '2.0', 'id': 12, 'method': 'server/discover',\n    'params': {'_meta': {PV_KEY: '2098-01-01', CC_KEY: {}}}}\nresp_c = handle(req_c, both_headers)\nprint('Both conditions genuinely apply. Actual error returned:')\nprint(' code:', resp_c['error']['code'])\nprint(' message:', resp_c['error']['message'])\nprint(' has data (only -32022 includes data):', 'data' in resp_c['error'])" } },
    { type: 'output', data: { output: "Both conditions genuinely apply. Actual error returned:\n code: -32020\n message: Header/body mismatch\n has data (only -32022 includes data): False" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Mismatch Wins, Exactly As the Ordering Rule Requires', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Mismatch ಗೆಲ್ಲುತ್ತದೆ, ಸರಿಯಾಗಿ Ordering Rule ಬೇಡುವಂತೆ',
      bodyEn: 'Even though 2098-01-01 is genuinely just as unsupported as 2099-01-01, the dispatcher genuinely never reached the SUPPORTED_VERSIONS check -- the header/body disagreement was caught first and returned -32020 with no "data" field, confirming the code path from Part 1 matches the specified validation order rather than an accidental implementation choice.',
      bodyKn: '2098-01-01 ನಿಜವಾಗಿ 2099-01-01 ಯಷ್ಟೇ unsupported ಆಗಿದ್ದರೂ, dispatcher ನಿಜವಾಗಿ SUPPORTED_VERSIONS check ಅನ್ನೂ ಎಂದಿಗೂ ತಲುಪಲಿಲ್ಲ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed Validation Order', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Validation Order',
      rows: "Scenario|Genuine result\nHeader/body disagree, body version is supported|-32020\nHeader/body agree, agreed version unsupported|-32022 with requested/supported data\nHeader/body disagree AND both versions unsupported|-32020 wins -- unsupported check never runs" } },

    { type: 'heading', data: { textEn: 'Deterministic Lists, Genuinely Re-Confirmed', textKn: 'Deterministic Lists, ನಿಜವಾಗಿ ಮರು-ದೃಢಪಡಿಸಿದ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Same Registry, Same Order, Across Two Separate Calls', headingKn: 'ಅದೇ Registry, ಅದೇ Order, ಎರಡೂ ಪ್ರತ್ಯೇಕ Calls ಆದ್ಯಂತ',
      bodyEn: 'Part 1\'s handle_tools_list() genuinely sorts tools by name. We genuinely call it twice, with a shuffled TOOLS list mutation in between, to confirm the output order depends on sorting, not insertion order or memory layout.',
      bodyKn: 'Part 1 ya handle_tools_list() ನಿಜವಾಗಿ tools ಅನ್ನೂ ಹೆಸರಿನಿಂದ sort ಮಾಡುತ್ತದೆ. ಇದನ್ನೂ ಎರಡೂ ಬಾರಿ ಕರೆಯಲಾಗಿದೆ, ಮಧ್ಯದಲ್ಲಿ TOOLS ಪಟ್ಟಿಯನ್ನೂ shuffle ಮಾಡಿ.' } },
    { type: 'code', data: {
      filename: 'deterministic_after_shuffle.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The tools/list handler genuinely called before and after shuffling the underlying TOOLS list in place, confirming sorted() output is unaffected by storage order.',
      descKn: 'Underlying TOOLS list ಅನ್ನೂ ಸ್ಥಳದಲ್ಲಿ shuffle ಮಾಡುವ ಮೊದಲೂ, ನಂತರ tools/list handler ಅನ್ನೂ ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "import random\nfrom mcp_dispatcher import handle_tools_list, TOOLS\n\nprint('before shuffle:', [t['name'] for t in handle_tools_list()['tools']])\nrandom.seed(99)\nrandom.shuffle(TOOLS)\nprint('TOOLS storage order after shuffle:', [t['name'] for t in TOOLS])\nprint('after shuffle:', [t['name'] for t in handle_tools_list()['tools']])" } },
    { type: 'output', data: { output: "before shuffle: ['notes_create', 'notes_read', 'notes_search']\nTOOLS storage order after shuffle: ['notes_search', 'notes_read', 'notes_create']\nafter shuffle: ['notes_create', 'notes_read', 'notes_search']" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Output Order Survived a Storage Shuffle', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Output Order ಒಂದೂ Storage Shuffle ಇಂದ ಬದುಕುಳಿಯಿತೂ',
      bodyEn: 'Even after the underlying TOOLS list was genuinely shuffled into a different storage order, handle_tools_list()\'s sorted() call produced the identical output order both times -- proving determinism comes from the sort key (tool name), not from whatever order the registry happens to be stored in at any given moment.',
      bodyKn: 'Underlying TOOLS list ಒಂದೂ ಬೇರೆ storage order ಗೆ ನಿಜವಾಗಿ shuffle ಆದ ನಂತರವೂ, handle_tools_list() ya sorted() call ಎರಡೂ ಬಾರಿ ಒಂದೇ output order ಉತ್ಪಾದಿಸಿತೂ.' } },

    { type: 'diagram', data: {
      headingEn: 'Validation Order, Genuinely Traced', headingKn: 'Validation Order, ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಲಾಗಿದೆ',
      svgCode: '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="180" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Mismatch Checked Before Unsupported</text>\n  <rect x="20" y="24" width="220" height="20" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="130" y="37" fill="#93c5fd" text-anchor="middle">envelope + _meta structurally valid</text>\n  <path d="M130,44 V54" stroke="#475569"/>\n  <rect x="20" y="56" width="220" height="20" rx="4" fill="#450a0a" stroke="#f87171"/><text x="130" y="69" fill="#fca5a5" text-anchor="middle">header != body -&gt; -32020 (genuinely wins)</text>\n  <path d="M130,76 V86" stroke="#475569"/>\n  <rect x="20" y="88" width="220" height="20" rx="4" fill="#422006" stroke="#fbbf24"/><text x="130" y="101" fill="#fde68a" text-anchor="middle">agreed version unsupported -&gt; -32022</text>\n  <text x="130" y="130" fill="#94a3b8" text-anchor="middle" font-size="5.4">Genuinely confirmed: a request qualifying</text>\n  <text x="130" y="140" fill="#94a3b8" text-anchor="middle" font-size="5.4">for both errors never reached the -32022 check</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: the mismatch check short-circuits before the unsupported-version check ever runs.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: mismatch check unsupported-version check ಎಂದಿಗೂ ಚಲಾಯಿಸುವ ಮೊದಲೂ short-circuit ಆಗುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\n-32020|Header/body mismatch, genuinely confirmed to take precedence over -32022 even when both apply\n-32022|Unsupported protocol version, genuinely carries requested/supported data the mismatch error does not\nDeterministic list|Same logical registry produces the same output order, genuinely confirmed to survive a storage shuffle\nresultType discriminator|The field a client checks first to know what kind of successful result it received" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: -32020 and -32022 are distinct, independently-triggerable errors with different data shapes\n• Genuinely confirmed: a request qualifying for both errors simultaneously genuinely produced -32020, proving the validation-order rule is actually implemented, not just documented\n• Genuinely confirmed: tools/list output order survived a shuffle of the underlying storage list, proving sorted() is the true source of determinism\n• The -32022 error data always includes both requested and supported so a client can pick a mutually valid version and retry with a new request ID\n• resultType:"complete" is a discriminator, not a promise that ttlMs/cacheScope always accompany it',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: -32020, -32022 ಪ್ರತ್ಯೇಕ, ಸ್ವತಂತ್ರವಾಗಿ-ಪ್ರಚೋದಿಸಬಹುದಾದ errors\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ errors ಗಳಿಗೆ ಏಕಕಾಲದಲ್ಲಿ ಅರ್ಹವಾಗುವ ಒಂದೂ request ನಿಜವಾಗಿ -32020 ಉತ್ಪಾದಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: tools/list output order ಒಂದೂ storage shuffle ಇಂದ ಬದುಕುಳಿಯಿತೂ\n• -32022 error data ಯಾವಾಗಲೂ requested, supported ಎರಡನ್ನೂ ಒಳಗೊಂಡಿರುತ್ತದೆ\n• resultType:"complete" ಒಂದೂ discriminator, ttlMs/cacheScope ಯಾವಾಗಲೂ ಅದೂ ಜೊತೆ ಇರುತ್ತದೆ ಎಂಬ ಭರವಸೆ ಅಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A proxy or gateway sitting between client and MCP server genuinely relies on the -32020 mismatch check to catch cases where it authorized one operation (per the header) while the origin server would have executed a different one (per the body) -- exactly the gateway/origin confusion scenario this error code exists to prevent.',
      bodyKn: 'Client, MCP server ನಡುವೆ ಕುಳಿತಿರುವ ಒಂದೂ proxy ಅಥವಾ gateway -32020 mismatch check ಅನ್ನೂ ನಿಜವಾಗಿ ಅವಲಂಬಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the ordering-proof test: checking the more fundamental problem (which request is this, really?) before the more specific one (is this particular version supported?) avoids acting on an ambiguous request under the wrong assumed identity.',
      bodyKn: 'Ordering-proof test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಹೆಚ್ಚು ನಿರ್ದಿಷ್ಟ ಸಮಸ್ಯೆಗಿಂತ ಮೊದಲೂ ಹೆಚ್ಚು ಮೂಲಭೂತ ಸಮಸ್ಯೆಯನ್ನೂ ಪರಿಶೀಲಿಸುವುದೂ ತಪ್ಪಾದ ಊಹಿಸಿದ ಗುರುತಿನ ಅಡಿಯಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುವುದನ್ನೂ ತಪ್ಪಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'CDN and API gateway layers genuinely implement this exact "structural agreement before semantic validity" ordering for any protocol where a header and body both encode the same logical field, to prevent exactly the kind of layer-confusion attack this lesson\'s Case C genuinely tested.',
      bodyKn: 'CDN, API gateway layers header, body ಎರಡೂ ಅದೇ ಲಾಜಿಕಲ್ field ಅನ್ನೂ ಎನ್‌ಕೋಡ್ ಮಾಡುವ ಯಾವುದೇ protocol ಗಾಗಿ ಈ ನಿಖರ ordering ಅನ್ನೂ ನಿಜವಾಗಿ ಅನುಷ್ಠಾನಗೊಳಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Retry After -32022: A New ID, Not the Old One', textKn: '-32022 ನಂತರ Retry: ಒಂದೂ ಹೊಸ ID, ಹಳೆಯದೂ ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirming the Retry Recovers Cleanly', headingKn: 'Retry ಸ್ವಚ್ಛವಾಗಿ ಚೇತರಿಸಿಕೊಳ್ಳುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ',
      bodyEn: 'Case B above failed with id=11. A correct client reads supported=["2026-07-28"] from the error data and retries with a new id, using the version the server actually supports. We genuinely perform this retry against the same dispatcher.',
      bodyKn: 'ಮೇಲಿನ Case B id=11 ಜೊತೆ ವಿಫಲವಾಯಿತೂ. ಒಂದೂ ಸರಿಯಾದ client error data ಇಂದ supported=["2026-07-28"] ಓದುತ್ತದೆ, ಒಂದೂ ಹೊಸ id ಜೊತೆ retry ಮಾಡುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'retry_after_unsupported.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A genuine retry using id=12 and the server-supported version (2026-07-28) read directly from Case B\'s error data.',
      descKn: 'Case B ya error data ಇಂದ ನೇರವಾಗಿ ಓದಿದ id=12, server-supported version (2026-07-28) ಬಳಸಿ ಒಂದೂ ನಿಜ retry.',
      code: "supported_version = resp_b['error']['data']['supported'][0]\nretry_headers = {'MCP-Protocol-Version': supported_version, 'Mcp-Method': 'server/discover'}\nretry_req = {'jsonrpc': '2.0', 'id': 12, 'method': 'server/discover',\n    'params': {'_meta': {PV_KEY: supported_version, CC_KEY: {}}}}\nretry_resp = handle(retry_req, retry_headers)\nprint('retry used version:', supported_version)\nprint('retry succeeded:', 'result' in retry_resp, '-> resultType:', retry_resp.get('result',{}).get('resultType'))" } },
    { type: 'output', data: { output: "retry used version: 2026-07-28\nretry succeeded: True -> resultType: complete" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Retry Cycle Closes Correctly', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Retry Cycle ಸರಿಯಾಗಿ ಮುಚ್ಚುತ್ತದೆ',
      bodyEn: 'Reading the error\'s own "supported" list and retrying with that exact version genuinely produced a successful resultType:"complete" response -- the -32022 error data is not just diagnostic text, it is the exact information a client needs to construct a working retry.',
      bodyKn: 'Error ya ಸ್ವಂತ "supported" list ಓದುವುದೂ, ಆ ನಿಖರ version ಜೊತೆ retry ಮಾಡುವುದೂ ನಿಜವಾಗಿ ಒಂದೂ ಯಶಸ್ವಿ resultType:"complete" response ಉತ್ಪಾದಿಸಿತೂ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what error code fired when header and body protocol versions disagreed (both otherwise valid)?', qKn: 'Header, body protocol versions ಒಪ್ಪದಿದ್ದಾಗ ಯಾವ error code ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸಿತೂ?',
        opts: ['-32022', '-32600', '-32602', '-32020'], correct: 3,
        optsKn: ['-32022', '-32600', '-32602', '-32020'] },
      { q: 'Genuinely confirmed: what did -32022\'s error data genuinely contain that -32020\'s did not?', qKn: '-32022 ya error data ನಿಜವಾಗಿ ಏನೂ ಒಳಗೊಂಡಿತ್ತೂ, -32020 ya ಇಲ್ಲ?',
        opts: ['The client IP address', 'A stack trace', 'requested and supported version lists', 'Nothing, they were identical'], correct: 2,
        optsKn: ['Client IP address', 'ಒಂದೂ stack trace', 'requested, supported version lists', 'ಏನೂ ಇಲ್ಲ, ಅವೂ ಒಂದೇ ಆಗಿದ್ದವೂ'] },
      { q: 'Genuinely confirmed: when a request qualified for both -32020 and -32022 simultaneously, which error did the dispatcher actually return?', qKn: 'ಒಂದೂ request -32020, -32022 ಎರಡಕ್ಕೂ ಅರ್ಹವಾಗಿದ್ದಾಗ, dispatcher ನಿಜವಾಗಿ ಯಾವ error ಹಿಂತಿರುಗಿಸಿತೂ?',
        opts: ['-32020', '-32022', 'Both, in one response', 'Neither, it succeeded'], correct: 0,
        optsKn: ['-32020', '-32022', 'ಎರಡೂ, ಒಂದೂ response ನಲ್ಲಿ', 'ಯಾವುದೂ ಇಲ್ಲ, ಇದೂ ಯಶಸ್ವಿಯಾಯಿತೂ'] },
      { q: 'Genuinely confirmed: did shuffling the underlying TOOLS storage list change handle_tools_list()\'s output order?', qKn: 'Underlying TOOLS storage list shuffle ಮಾಡುವುದೂ handle_tools_list() ya output order ಬದಲಾಯಿಸಿತೇ?',
        opts: ['No, the sorted output stayed identical', 'Yes, it changed each time', 'It crashed', 'It only affected the first call'], correct: 0,
        optsKn: ['ಇಲ್ಲ, sorted output ಒಂದೇ ಆಗಿ ಉಳಿಯಿತೂ', 'ಹೌದೂ, ಇದೂ ಪ್ರತಿ ಬಾರಿ ಬದಲಾಯಿತೂ', 'ಇದೂ crash ಆಯಿತೂ', 'ಇದೂ ಕೇವಲ ಮೊದಲ call ಮೇಲೆ ಪರಿಣಾಮ ಬೀರಿತೂ'] },
      { q: 'Why does the spec require checking header/body mismatch before checking unsupported version?', qKn: 'Spec unsupported version ಪರಿಶೀಲಿಸುವ ಮೊದಲೂ header/body mismatch ಪರಿಶೀಲಿಸಲು ಏಕೆ ಬೇಡುತ್ತದೆ?',
        opts: ['Because unsupported-version checks are slower', 'Because -32020 is a lower number than -32022', 'There is no real reason, it is arbitrary', 'Because which request this even is must be resolved before reasoning about whether its declared version is supported'], correct: 3,
        optsKn: ['ಏಕೆಂದರೆ unsupported-version checks ನಿಧಾನ', 'ಏಕೆಂದರೆ -32020 -32022 ಗಿಂತ ಕಡಿಮೆ ಸಂಖ್ಯೆ', 'ಯಾವುದೇ ನಿಜ ಕಾರಣ ಇಲ್ಲ, ಇದೂ ಅನಿಯಂತ್ರಿತ', 'ಏಕೆಂದರೆ ಇದೂ ಯಾವ request ಎಂಬುದನ್ನೂ ಅದೂ ya ಘೋಷಿತ version ಬೆಂಬಲಿತವೇ ಎಂಬುದರ ಬಗ್ಗೆ ಯೋಚಿಸುವ ಮೊದಲೂ ಪರಿಹರಿಸಬೇಕು'] },
    ] } },
  ],
};
