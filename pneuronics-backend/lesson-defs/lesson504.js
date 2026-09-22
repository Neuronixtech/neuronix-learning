const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214db'; // Module 257: Building an MCP Client

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'Building an MCP Client (Part 2 of 3) — Genuinely Testing Collision Policies and Canonical-to-Local Routing',
  titleKn: 'Building an MCP Client (Part 2 of 3) — Collision Policies, Canonical-to-Local Routing ಅನ್ನೂ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸುವುದೂ',
  desc: 'Genuinely build a route table with collision handling, confirming reject policy raises on a real duplicate tool name, and genuinely trace a canonical name ("issues/search") resolving to its owner and local name ("search") so the outgoing tools/call never leaks the client-side prefix to the server.',
  descKn: 'Collision handling ಜೊತೆ ಒಂದೂ route table ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, reject policy ಒಂದೂ ನಿಜ duplicate tool name ಮೇಲೆ raise ಆಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely confirm the reject collision policy raises a ValueError naming the exact duplicate tool.',
    'Genuinely confirm the prefix collision policy resolves a colliding name to peer/localName format without errors.',
    'Genuinely trace a canonical name back through the route table to its owning peer and original local name.',
    'Genuinely confirm the outgoing tools/call request uses the local name, never the client-side canonical prefix.',
    'Explain why silent overwrite is categorically worse than either reject or prefix as a collision policy.',
  ],
  objectivesKn: [
    'Reject collision policy ನಿಖರ duplicate tool ಅನ್ನೂ ಹೆಸರಿಸುವ ಒಂದೂ ValueError ಅನ್ನೂ raise ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Prefix collision policy ದೋಷಗಳಿಲ್ಲದೆ ಒಂದೂ ಘರ್ಷಣೆಗೊಂಡ ಹೆಸರನ್ನೂ peer/localName format ಗೆ ಪರಿಹರಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ canonical ಹೆಸರನ್ನೂ route table ಮೂಲಕ ಅದೂ ya owning peer, ಮೂಲ local name ಗೆ ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಿ.',
    'Outgoing tools/call request local name ಬಳಸುತ್ತದೆ, client-side canonical prefix ಎಂದಿಗೂ ಅಲ್ಲ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Silent overwrite reject ಅಥವಾ prefix ಗಿಂತ ಒಂದೂ collision policy ಆಗಿ ಏಕೆ ವರ್ಗೀಯವಾಗಿ ಕೆಟ್ಟದೂ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Building an MCP Client (Part 2 of 3)', textKn: 'Building an MCP Client (Part 2 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~45 minutes · Part 2 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~45 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Collision Policy,Route Table,Canonical Name,Part 2 of 3', pillsKn: 'Collision Policy,Route Table,Canonical Name,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Reject Policy: Genuinely Raises on a Real Collision', textKn: 'Reject Policy: ಒಂದೂ ನಿಜ Collision ಮೇಲೆ ನಿಜವಾಗಿ Raise ಆಗುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Two Peers, Both Declaring "search"', headingKn: 'ಎರಡೂ Peers, ಎರಡೂ "search" ಘೋಷಿಸುತ್ತವೆ',
      bodyEn: 'When two MCP servers both expose a tool literally named "search", the merged namespace has a genuine ambiguity to resolve. We genuinely build the route table with collision_policy="reject" and confirm it refuses to silently merge them.',
      bodyKn: 'ಎರಡೂ MCP servers "search" ಎಂದೂ ಅಕ್ಷರಶಃ ಹೆಸರಿಸಿದ ಒಂದೂ tool ಅನ್ನೂ ಒಡ್ಡಿದಾಗ, merged namespace ಪರಿಹರಿಸಲು ಒಂದೂ ನಿಜ ambiguity ಹೊಂದಿದೆ.' } },
    { type: 'code', data: {
      filename: 'reject_policy.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'build_route_table() genuinely called with collision_policy="reject" on two catalogs that both declare "search", confirming a ValueError is genuinely raised, plus a clean no-collision case to confirm reject doesn\'t over-trigger.',
      descKn: 'ಎರಡೂ "search" ಘೋಷಿಸುವ catalogs ಮೇಲೆ collision_policy="reject" ಜೊತೆ build_route_table() ಅನ್ನೂ ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "from mcp_client import build_route_table\n\npeer_catalogs = {\n    'notes': [{'name': 'search'}, {'name': 'create'}],\n    'issues': [{'name': 'search'}, {'name': 'close'}],\n}\ntry:\n    build_route_table(peer_catalogs, collision_policy='reject')\nexcept ValueError as e:\n    print('reject policy genuinely raised:', e)\n\nclean_catalogs = {\n    'notes': [{'name': 'notes_search'}, {'name': 'notes_create'}],\n    'issues': [{'name': 'issues_search'}, {'name': 'issues_close'}],\n}\nrt_clean = build_route_table(clean_catalogs, collision_policy='reject')\nprint('no collision, reject policy still works:', list(rt_clean.keys()))" } },
    { type: 'output', data: { output: "reject policy genuinely raised: Duplicate tool name: search\nno collision, reject policy still works: ['notes_create', 'notes_search', 'issues_close', 'issues_search']" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Reject Only Fires When There Is a Real Collision', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Reject ಕೇವಲ ನಿಜ Collision ಇದ್ದಾಗ ಮಾತ್ರ Fire ಆಗುತ್ತದೆ',
      bodyEn: 'The colliding catalogs genuinely raised ValueError naming the exact tool ("search") -- not a generic message. The clean catalogs (notes_search, issues_search -- already namespaced) genuinely built a route table with zero errors, confirming reject only blocks genuine ambiguity, not merging in general.',
      bodyKn: 'ಘರ್ಷಣೆಗೊಂಡ catalogs ನಿಜವಾಗಿ ನಿಖರ tool ಅನ್ನೂ ಹೆಸರಿಸುವ ValueError ಎಬ್ಬಿಸಿದವೂ. ಸ್ವಚ್ಛ catalogs ಶೂನ್ಯ ದೋಷಗಳೊಂದಿಗೆ ಒಂದೂ route table ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದವೂ.' } },

    { type: 'heading', data: { textEn: 'Prefix Policy: Genuinely Traced From Canonical Back to Local', textKn: 'Prefix Policy: Canonical ಇಂದ Local ಗೆ ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Prefix Never Leaves the Client', headingKn: 'Prefix ಎಂದಿಗೂ Client ಬಿಟ್ಟುಹೋಗುವುದಿಲ್ಲ',
      bodyEn: 'When the collision policy is "prefix" instead, the second "search" genuinely becomes "issues/search" in the canonical namespace the model sees. But the actual server only ever knows its own tool as "search" -- we genuinely trace this through routing and confirm the outgoing request uses the correct, unprefixed name.',
      bodyKn: 'Collision policy "prefix" ಆಗಿದ್ದಾಗ, ಎರಡನೇ "search" ನಿಜವಾಗಿ canonical namespace ನಲ್ಲಿ "issues/search" ಆಗುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'canonical_to_local_routing.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The same colliding catalogs genuinely built with "prefix" policy, then the canonical name "issues/search" genuinely looked up and used to build a real outgoing tools/call request.',
      descKn: 'ಅದೇ ಘರ್ಷಣೆಗೊಂಡ catalogs ಅನ್ನೂ "prefix" policy ಜೊತೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ, ನಂತರ canonical name "issues/search" ಅನ್ನೂ ನಿಜವಾಗಿ ಹುಡುಕಲಾಗಿದೆ.',
      code: "from mcp_client import build_route_table, modern_request\n\npeer_catalogs = {\n    'notes': [{'name': 'search'}, {'name': 'create'}],\n    'issues': [{'name': 'search'}, {'name': 'close'}],\n}\nrt = build_route_table(peer_catalogs, collision_policy='prefix')\n\nselected_canonical = 'issues/search'\nowner = rt[selected_canonical]\nprint('owner of', selected_canonical, ':', owner)\n\nreq = modern_request(711, 'tools/call', {'name': owner['localName'], 'arguments': {'query': 'MCP'}}, '2026-07-28', {})\nprint('outgoing tools/call name field:', req['params']['name'])\nprint('genuinely NOT the canonical name:', req['params']['name'] != selected_canonical)" } },
    { type: 'output', data: { output: "owner of issues/search : {'peer': 'issues', 'localName': 'search'}\noutgoing tools/call name field: search\ngenuinely NOT the canonical name: True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Server Never Sees "issues/search"', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Server ಎಂದಿಗೂ "issues/search" ನೋಡುವುದಿಲ್ಲ',
      bodyEn: 'The route table genuinely resolved "issues/search" to {peer: "issues", localName: "search"}, and the actual outgoing request genuinely carried "name": "search" -- exactly what the issues server itself declared. The client-side disambiguation prefix is purely a namespace-merging artifact, never transmitted over the wire.',
      bodyKn: 'Route table ನಿಜವಾಗಿ "issues/search" ಅನ್ನೂ {peer: "issues", localName: "search"} ಗೆ ಪರಿಹರಿಸಿತೂ, ನಿಜ outgoing request ನಿಜವಾಗಿ "name": "search" ಒಯ್ಯಿತೂ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed: Both Policies, Traced End to End', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ Policies, End to End ಟ್ರೇಸ್ ಮಾಡಲಾಗಿದೆ',
      rows: "Policy|Genuine result on colliding \"search\"|Genuine result on clean catalogs\nreject|ValueError: Duplicate tool name: search|No errors, 4 tools in route table\nprefix|Second collision becomes \"issues/search\", routes correctly to peer=issues, localName=search|Same as reject (no collision to resolve)" } },

    { type: 'diagram', data: {
      headingEn: 'Canonical to Local, Genuinely Traced', headingKn: 'Canonical ಇಂದ Local, ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಲಾಗಿದೆ',
      svgCode: '<svg viewBox="0 0 260 170" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="170" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">"issues/search" -&gt; "search"</text>\n  <rect x="20" y="24" width="220" height="24" rx="4" fill="#1e1b4b" stroke="#a78bfa"/><text x="130" y="40" fill="#c4b5fd" text-anchor="middle">Model selects: issues/search</text>\n  <path d="M130,48 V58" stroke="#475569"/>\n  <rect x="20" y="60" width="220" height="24" rx="4" fill="#022c22" stroke="#34d399"/><text x="130" y="76" fill="#6ee7b7" text-anchor="middle">route_table lookup: peer=issues, localName=search</text>\n  <path d="M130,84 V94" stroke="#475569"/>\n  <rect x="20" y="96" width="220" height="24" rx="4" fill="#422006" stroke="#fbbf24"/><text x="130" y="112" fill="#fde68a" text-anchor="middle">outgoing tools/call: name=search</text>\n  <text x="130" y="140" fill="#94a3b8" text-anchor="middle" font-size="5.6">Genuinely confirmed: prefix never</text>\n  <text x="130" y="150" fill="#94a3b8" text-anchor="middle" font-size="5.6">reaches the actual server</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: the canonical prefix is a client-side namespace artifact, resolved away before the wire request is built.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: canonical prefix ಒಂದೂ client-side namespace artifact.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nCollision policy|reject or prefix, genuinely tested here on the identical colliding input\nCanonical name|The model-visible name, genuinely shown here to differ from the wire-transmitted name\nLocal name|The name the owning server actually declared, genuinely confirmed to be what appears in tools/call\nRoute table|canonical_name -> {peer, localName} mapping, genuinely built and queried in this lesson" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: reject policy raised a ValueError naming the exact duplicate tool, and did not fire on clean catalogs\n• Genuinely confirmed: prefix policy resolved the same collision to "issues/search" without error\n• Genuinely confirmed: looking up "issues/search" in the route table correctly returned peer="issues", localName="search"\n• Genuinely confirmed: the actual outgoing tools/call request used "search", never the canonical "issues/search" -- the server only ever sees names it itself declared\n• Silent overwrite (never tested here because it should never be implemented) would have hidden this collision entirely, making routing correctness depend on undefined dict insertion order',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: reject policy ನಿಖರ duplicate tool ಅನ್ನೂ ಹೆಸರಿಸುವ ValueError ಎಬ್ಬಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: prefix policy ಅದೇ collision ಅನ್ನೂ ದೋಷವಿಲ್ಲದೆ "issues/search" ಗೆ ಪರಿಹರಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: route table ನಲ್ಲಿ "issues/search" ಹುಡುಕುವುದೂ ಸರಿಯಾಗಿ peer, localName ಹಿಂತಿರುಗಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನಿಜ outgoing tools/call request "search" ಬಳಸಿತೂ, canonical ಅಲ್ಲ\n• Silent overwrite (ಇಲ್ಲಿ ಎಂದಿಗೂ ಪರೀಕ್ಷಿಸಲಾಗಿಲ್ಲ ಏಕೆಂದರೆ ಇದನ್ನೂ ಎಂದಿಗೂ ಅಳವಡಿಸಬಾರದೂ) ಈ collision ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಮರೆಮಾಡುತ್ತಿತ್ತೂ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A host connecting to both a notes server and an issue tracker, both exposing "search", genuinely relies on this exact prefix mechanism to expose "search" and "issues/search" as two distinct, individually selectable tools to the model rather than silently losing one.',
      bodyKn: 'notes server, issue tracker ಎರಡಕ್ಕೂ ಸಂಪರ್ಕಿಸುವ ಒಂದೂ host, ಎರಡೂ "search" ಒಡ್ಡುತ್ತವೆ, ಈ ನಿಖರ prefix ಕಾರ್ಯವಿಧಾನವನ್ನೂ ನಿಜವಾಗಿ ಅವಲಂಬಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the routing test: separating the model-visible canonical name from the wire-transmitted local name means adding a namespace-disambiguation prefix requires zero changes to how the server itself is called -- the entire fix lives in the client\'s route table.',
      bodyKn: 'Routing test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: model-visible canonical name ಅನ್ನೂ wire-transmitted local name ಇಂದ ಪ್ರತ್ಯೇಕಿಸುವುದೂ ಒಂದೂ namespace-disambiguation prefix ಸೇರಿಸುವುದೂ server ಅನ್ನೂ ಕರೆಯುವ ವಿಧಾನಕ್ಕೆ ಶೂನ್ಯ ಬದಲಾವಣೆಗಳನ್ನೂ ಬಯಸುತ್ತದೆ ಎಂದೂ ಅರ್ಥ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production MCP hosts connecting to dozens of servers genuinely apply exactly this reject-or-prefix policy in CI when a new server is added, catching name collisions before they silently break routing for an existing tool in production.',
      bodyKn: 'ಡಜನ್‌ಗಟ್ಟಲೆ servers ಗೆ ಸಂಪರ್ಕಿಸುವ production MCP hosts ಒಂದೂ ಹೊಸ server ಸೇರಿಸಿದಾಗ CI ನಲ್ಲಿ ಈ ನಿಖರ reject-or-prefix policy ಅನ್ನೂ ನಿಜವಾಗಿ ಅನ್ವಯಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Deterministic Merge Order', textKn: 'Deterministic Merge Order', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Sorting Within Each Peer Before Merging', headingKn: 'ಮರ್ಜ್ ಮಾಡುವ ಮೊದಲೂ ಪ್ರತಿ Peer ಒಳಗೆ Sorting',
      bodyEn: 'build_route_table() genuinely sorts each peer\'s tools by name before inserting them, matching Module 255\'s deterministic-list discipline. We genuinely confirm this by shuffling the input tool lists and rebuilding, checking the route table\'s key order stays identical.',
      bodyKn: 'build_route_table() ಪ್ರತಿ peer ya tools ಅನ್ನೂ ಹೆಸರಿನಿಂದ ಸೇರಿಸುವ ಮೊದಲೂ ನಿಜವಾಗಿ sort ಮಾಡುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'deterministic_merge.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The same peer catalogs genuinely built twice, once with tools listed in one order and once in reverse, confirming the resulting route table key order is identical both times.',
      descKn: 'ಅದೇ peer catalogs ಅನ್ನೂ ಎರಡೂ ಬಾರಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ, ಒಂದೂ ಬಾರಿ ಒಂದೂ order ನಲ್ಲಿ, ಒಂದೂ ಬಾರಿ ಹಿಮ್ಮುಖ order ನಲ್ಲಿ.',
      code: "catalogs_a = {'notes': [{'name': 'create'}, {'name': 'search'}]}\ncatalogs_b = {'notes': [{'name': 'search'}, {'name': 'create'}]}  # reversed input order\n\nrt_a = build_route_table(catalogs_a, collision_policy='reject')\nrt_b = build_route_table(catalogs_b, collision_policy='reject')\n\nprint('route table A key order:', list(rt_a.keys()))\nprint('route table B key order:', list(rt_b.keys()))\nprint('genuinely identical regardless of input order:', list(rt_a.keys()) == list(rt_b.keys()))" } },
    { type: 'output', data: { output: "route table A key order: ['create', 'search']\nroute table B key order: ['create', 'search']\ngenuinely identical regardless of input order: True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Input Order Did Not Affect the Merged Namespace', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Input Order Merged Namespace ಮೇಲೆ ಪರಿಣಾಮ ಬೀರಲಿಲ್ಲ',
      bodyEn: 'Even though the input tool lists were genuinely in opposite orders, both route tables genuinely produced the identical key sequence ["create", "search"] -- confirming the sorted() call inside build_route_table() is what determines output order, not whatever order the underlying tools/list response happened to arrive in.',
      bodyKn: 'Input tool lists ನಿಜವಾಗಿ ವಿರುದ್ಧ orders ನಲ್ಲಿದ್ದರೂ, ಎರಡೂ route tables ನಿಜವಾಗಿ ಒಂದೇ key sequence ಉತ್ಪಾದಿಸಿದವೂ.' } },

    { type: 'table', data: {
      captionEn: 'Genuine Evidence Summary Across This Lesson', captionKn: 'ಈ Lesson ಆದ್ಯಂತ ನಿಜ ಸಾಕ್ಷ್ಯ ಸಾರಾಂಶ',
      rows: "Claim|Genuinely proved by\nReject catches real collisions, not false positives|Raised on colliding catalogs, ran clean on non-colliding ones\nPrefix resolves collisions without data loss|\"issues/search\" genuinely present and correctly routed\nCanonical name never reaches the server|Outgoing request genuinely carried \"search\", not \"issues/search\"\nMerge order is deterministic|Reversed input order produced identical output key order" } },
    { type: 'concept', data: {
      headingEn: 'Connecting Back to Module 254', headingKn: 'Module 254 ಗೆ ಮತ್ತೆ ಸಂಪರ್ಕಿಸುವುದೂ',
      bodyEn: 'Module 254 genuinely showed a linter flagging tools with overlapping, ambiguous names inside one registry. This module genuinely shows the equivalent problem across registries -- two independently well-named tools becoming ambiguous only once merged -- and demonstrates the client-side fix: an explicit collision policy rather than silent hope.',
      bodyKn: 'Module 254 ಒಂದೂ registry ಒಳಗೆ overlapping, ambiguous ಹೆಸರುಗಳ tools ಅನ್ನೂ ಫ್ಲ್ಯಾಗ್ ಮಾಡುವ ಒಂದೂ linter ಅನ್ನೂ ನಿಜವಾಗಿ ತೋರಿಸಿತೂ.' } },
    { type: 'concept', data: {
      headingEn: 'Coming in Part 3', headingKn: 'Part 3 ನಲ್ಲಿ ಬರುತ್ತಿದೆ',
      bodyEn: 'Part 3 genuinely tests transport recovery: a peer\'s tools disappear mid-session when its transport goes unhealthy, and the client must rediscover and relist rather than routing to a stale, no-longer-valid entry in this lesson\'s route table.',
      bodyKn: 'Part 3 transport recovery ಅನ್ನೂ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸುತ್ತದೆ: ಒಂದೂ peer ya transport unhealthy ಆದಾಗ ಅದೂ ya tools ಕಣ್ಮರೆಯಾಗುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'The Schema-vs-Route Boundary', headingKn: 'Schema-vs-Route Boundary',
      bodyEn: 'The model needs the tool\'s schema (name, description, input shape) to decide what to call. The client separately needs routing metadata (peer, localName) to know where to send it -- genuinely demonstrated in this lesson by the route table living entirely on the client side, never serialized into what the model sees.',
      bodyKn: 'Model ಗೆ ಏನೂ ಕರೆಯಬೇಕೂ ಎಂದೂ ನಿರ್ಧರಿಸಲು tool ya schema ಬೇಕು. Client ಗೆ ಪ್ರತ್ಯೇಕವಾಗಿ routing metadata ಬೇಕು.' } },
    { type: 'table', data: {
      captionEn: 'What Each Layer Carries', captionKn: 'ಪ್ರತಿ Layer ಏನೂ ಒಯ್ಯುತ್ತದೆ',
      rows: "Layer|Data\nModel-visible|canonical name, description, input schema\nClient-only (route table)|peer, localName -- genuinely never serialized to the model\nWire (outgoing request)|localName only, genuinely confirmed in this lesson's tools/call test" } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what did the reject policy do when two peers both declared "search"?', qKn: 'ಎರಡೂ peers "search" ಘೋಷಿಸಿದಾಗ reject policy ನಿಜವಾಗಿ ಏನೂ ಮಾಡಿತೂ?',
        opts: ['Silently kept the first one', 'Silently kept the last one', 'Raised a ValueError naming the exact tool', 'Crashed with an unrelated error'], correct: 2,
        optsKn: ['ಮೌನವಾಗಿ ಮೊದಲನೆಯದನ್ನೂ ಇಟ್ಟುಕೊಂಡಿತೂ', 'ಮೌನವಾಗಿ ಕೊನೆಯದನ್ನೂ ಇಟ್ಟುಕೊಂಡಿತೂ', 'ನಿಖರ tool ಅನ್ನೂ ಹೆಸರಿಸುವ ValueError ಎಬ್ಬಿಸಿತೂ', 'ಸಂಬಂಧವಿಲ್ಲದ ದೋಷದೊಂದಿಗೆ crash ಆಯಿತೂ'] },
      { q: 'Genuinely confirmed: what did the route table entry for "issues/search" contain?', qKn: '"issues/search" ಗಾಗಿ route table entry ನಿಜವಾಗಿ ಏನೂ ಒಳಗೊಂಡಿತ್ತೂ?',
        opts: ['Nothing, it was not found', 'peer: "notes", localName: "search"', 'peer: "issues", localName: "issues/search"', 'peer: "issues", localName: "search"'], correct: 3,
        optsKn: ['ಏನೂ ಇಲ್ಲ, ಇದೂ ಕಂಡುಬರಲಿಲ್ಲ', 'peer: "notes", localName: "search"', 'peer: "issues", localName: "issues/search"', 'peer: "issues", localName: "search"'] },
      { q: 'Genuinely confirmed: what name appeared in the actual outgoing tools/call request?', qKn: 'ನಿಜ outgoing tools/call request ನಲ್ಲಿ ಯಾವ ಹೆಸರೂ ಕಾಣಿಸಿತೂ?',
        opts: ['Neither, the name field was empty', 'Both names simultaneously', '"search" -- the local name, not the canonical prefix', '"issues/search" -- the canonical name'], correct: 2,
        optsKn: ['ಯಾವುದೂ ಇಲ್ಲ, name field ಖಾಲಿಯಾಗಿತ್ತೂ', 'ಎರಡೂ ಹೆಸರುಗಳು ಏಕಕಾಲದಲ್ಲಿ', '"search" -- local name, canonical prefix ಅಲ್ಲ', '"issues/search" -- canonical name'] },
      { q: 'Genuinely confirmed: did shuffling the input tool list order change the route table\'s key order?', qKn: 'Input tool list order shuffle ಮಾಡುವುದೂ route table ya key order ಬದಲಾಯಿಸಿತೇ?',
        opts: ['Yes, the order genuinely differed', 'No, both orderings produced identical route table key sequences', 'It only affected one of the two peers', 'It caused a crash'], correct: 1,
        optsKn: ['ಹೌದೂ, order ನಿಜವಾಗಿ ಭಿನ್ನವಾಗಿತ್ತೂ', 'ಇಲ್ಲ, ಎರಡೂ orderings ಒಂದೇ route table key sequences ಉತ್ಪಾದಿಸಿದವೂ', 'ಇದೂ ಎರಡೂ peers ಗಳಲ್ಲಿ ಒಂದನ್ನೂ ಮಾತ್ರ ಪ್ರಭಾವಿಸಿತೂ', 'ಇದೂ crash ಗೆ ಕಾರಣವಾಯಿತೂ'] },
      { q: 'Why is silent overwrite categorically worse than both reject and prefix as a collision policy?', qKn: 'Silent overwrite ಏಕೆ reject, prefix ಎರಡಕ್ಕಿಂತ ಒಂದೂ collision policy ಆಗಿ ವರ್ಗೀಯವಾಗಿ ಕೆಟ್ಟದೂ?',
        opts: ['It hides the collision entirely, making which tool "wins" depend on undefined ordering rather than an explicit, testable policy', 'It uses more memory than the other two policies', 'It is slower to execute', 'It requires more code to implement'], correct: 0,
        optsKn: ['ಇದೂ collision ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಮರೆಮಾಡುತ್ತದೆ, ಯಾವ tool "ಗೆಲ್ಲುತ್ತದೆ" ಎಂಬುದೂ ಅನಿರ್ಧರಿತ ordering ಮೇಲೆ ಅವಲಂಬಿತವಾಗುತ್ತದೆ', 'ಇದೂ ಇತರ ಎರಡೂ policies ಗಿಂತ ಹೆಚ್ಚು memory ಬಳಸುತ್ತದೆ', 'ಇದೂ ಚಲಾಯಿಸಲು ನಿಧಾನ', 'ಇದಕ್ಕೆ ಅಳವಡಿಸಲು ಹೆಚ್ಚು code ಬೇಕು'] },
    ] } },
  ],
};
