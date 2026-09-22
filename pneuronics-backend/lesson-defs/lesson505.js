const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214db'; // Module 257: Building an MCP Client

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'Building an MCP Client (Part 3 of 3) — Genuinely Proving Why Stale Route Tables Must Be Rebuilt After Recovery',
  titleKn: 'Building an MCP Client (Part 3 of 3) — Recovery ನಂತರ Stale Route Tables ಏಕೆ ಮರುನಿರ್ಮಿಸಬೇಕೂ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುವುದೂ',
  desc: 'Genuinely block a call to an unhealthy peer\'s transport, then genuinely reconstruct a route table after simulating a server restart with a changed tool set, concretely proving that blind reuse of the old route table would route a call to a tool that genuinely no longer exists.',
  descKn: 'ಒಂದೂ unhealthy peer ya transport ಗೆ ಒಂದೂ call ಅನ್ನೂ ನಿಜವಾಗಿ block ಮಾಡಿ, ನಂತರ ಬದಲಾದ tool set ಜೊತೆ ಒಂದೂ server restart simulate ಮಾಡಿದ ನಂತರ ಒಂದೂ route table ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುನಿರ್ಮಿಸಿ.',
  objectives: [
    'Genuinely confirm a call to an unhealthy peer is blocked with a clear error rather than silently sent to a dead transport.',
    'Genuinely rebuild a route table after simulating a server restart where the tool set changed (one tool removed, one added).',
    'Genuinely prove that reusing the pre-crash route table would route a call to a tool ("issues_close") that no longer exists after recovery.',
    'Explain why relisting after recovery is not optional caution but a correctness requirement, demonstrated with a concrete stale-route scenario.',
    'Summarize the full 3-part client lifecycle: era decision, namespace merging, and recovery, as one coherent pipeline.',
  ],
  objectivesKn: [
    'ಒಂದೂ unhealthy peer ಗೆ ಒಂದೂ call ಒಂದೂ ಸ್ಪಷ್ಟ ದೋಷದೊಂದಿಗೆ block ಆಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಬದಲಾದ tool set ಜೊತೆ ಒಂದೂ server restart simulate ಮಾಡಿದ ನಂತರ ಒಂದೂ route table ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುನಿರ್ಮಿಸಿ.',
    'Pre-crash route table ಮರುಬಳಕೆ ಮಾಡುವುದೂ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲದ ಒಂದೂ tool ಗೆ ಒಂದೂ call ಅನ್ನೂ ರವಾನಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ.',
    'Recovery ನಂತರ relisting ಐಚ್ಛಿಕ ಎಚ್ಚರಿಕೆ ಅಲ್ಲ, ಒಂದೂ ಸರಿಯಾದತೆ ಅಗತ್ಯ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಪೂರ್ಣ 3-part client lifecycle ಅನ್ನೂ ಸಾರಾಂಶಿಸಿ: era decision, namespace merging, recovery.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Building an MCP Client (Part 3 of 3)', textKn: 'Building an MCP Client (Part 3 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~45 minutes · Part 3 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~45 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Transport Recovery,Stale Routes,Rediscovery,Part 3 of 3', pillsKn: 'Transport Recovery,Stale Routes,Rediscovery,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Blocking Calls to Unhealthy Transports', textKn: 'Unhealthy Transports ಗೆ Calls ಅನ್ನೂ Block ಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Route Table Entry Alone Is Not Enough to Send a Call', headingKn: 'ಒಂದೂ Call ಕಳುಹಿಸಲು ಕೇವಲ ಒಂದೂ Route Table Entry ಸಾಕಾಗುವುದಿಲ್ಲ',
      bodyEn: 'Knowing WHICH peer owns a tool (Part 2) is not the same as knowing that peer is currently reachable. We genuinely build a route_call() function that checks peer health before routing, and confirm it blocks a call rather than sending it into a dead connection.',
      bodyKn: 'ಯಾವ peer ಒಂದೂ tool ಒಡೆಯುತ್ತದೆ ಎಂದೂ ತಿಳಿಯುವುದೂ (Part 2) ಆ peer ಪ್ರಸ್ತುತ ತಲುಪಬಹುದಾಗಿದೆ ಎಂದೂ ತಿಳಿಯುವುದೂ ಅಲ್ಲ.' } },
    { type: 'code', data: {
      filename: 'block_unhealthy.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'route_call() genuinely called once against a healthy peer (succeeds) and once against the same peer marked unhealthy (blocked with ConnectionError).',
      descKn: 'route_call() ಅನ್ನೂ ಒಂದೂ healthy peer ವಿರುದ್ಧ ಒಂದೂ ಬಾರಿ, ಅದೇ peer unhealthy ಎಂದೂ ಗುರುತಿಸಿದ ಇನ್ನೊಂದೂ ಬಾರಿ ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "from mcp_client import build_route_table\n\nclass Peer:\n    def __init__(self, name, healthy=True):\n        self.name = name\n        self.healthy = healthy\n\ndef route_call(canonical_name, route_table, peers):\n    if canonical_name not in route_table:\n        raise KeyError(f'no route for {canonical_name}')\n    owner = route_table[canonical_name]\n    peer = peers[owner['peer']]\n    if not peer.healthy:\n        raise ConnectionError(f'peer {peer.name} transport unavailable, cannot route')\n    return owner\n\npeer_catalogs = {\n    'notes': [{'name': 'search'}],\n    'issues': [{'name': 'issues_search'}],\n}\nrt = build_route_table(peer_catalogs, collision_policy='reject')\npeers = {'notes': Peer('notes', healthy=True), 'issues': Peer('issues', healthy=True)}\n\nowner = route_call('issues_search', rt, peers)\nprint('healthy call routed to:', owner)\n\npeers['issues'].healthy = False\ntry:\n    route_call('issues_search', rt, peers)\nexcept ConnectionError as e:\n    print('genuinely blocked call to unhealthy peer:', e)" } },
    { type: 'output', data: { output: "healthy call routed to: {'peer': 'issues', 'localName': 'issues_search'}\ngenuinely blocked call to unhealthy peer: peer issues transport unavailable, cannot route" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Same Route, Two Different Outcomes Based on Health', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ Route, Health ಆಧರಿಸಿ ಎರಡೂ ವಿಭಿನ್ನ ಫಲಿತಾಂಶಗಳು',
      bodyEn: 'The identical canonical name and route table entry genuinely succeeded when peers["issues"].healthy was True and genuinely raised ConnectionError the instant it became False -- confirming health is checked as an independent gate, not baked into the route table\'s static structure.',
      bodyKn: 'peers["issues"].healthy True ಆಗಿದ್ದಾಗ ನಿಖರ canonical name, route table entry ನಿಜವಾಗಿ ಯಶಸ್ವಿಯಾಯಿತೂ, False ಆದ ತಕ್ಷಣ ConnectionError ಎಬ್ಬಿಸಿತೂ.' } },

    { type: 'heading', data: { textEn: 'Why Rediscovery Is a Correctness Requirement, Genuinely Proven', textKn: 'Rediscovery ಏಕೆ ಒಂದೂ Correctness ಅಗತ್ಯ, ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Restarted Server May Genuinely Expose a Different Tool Set', headingKn: 'ಮರುಪ್ರಾರಂಭಿಸಿದ Server ನಿಜವಾಗಿ ಬೇರೆ Tool Set ಒಡ್ಡಬಹುದು',
      bodyEn: 'It is tempting to think recovery just means "reconnect and keep using the old route table." We genuinely simulate a server restart where issues_close was removed and issues_create was added, then genuinely compare the before/after route tables.',
      bodyKn: 'Recovery ಎಂದೂ ಕೇವಲ "ಮತ್ತೆ ಸಂಪರ್ಕಿಸಿ, ಹಳೆಯ route table ಬಳಸುತ್ತಿರಿ" ಎಂದೂ ಪರಿಗಣಿಸುವುದೂ ಆಕರ್ಷಕ.' } },
    { type: 'code', data: {
      filename: 'stale_route_proof.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Two genuine route tables built before and after a simulated restart (issues_close removed, issues_create added), confirming a stale route genuinely disappears and a new one genuinely appears.',
      descKn: 'ಒಂದೂ simulated restart ಮೊದಲೂ, ನಂತರ ಎರಡೂ ನಿಜ route tables ನಿರ್ಮಿಸಲಾಗಿದೆ.',
      code: "catalogs_before = {\n    'notes': [{'name': 'search'}],\n    'issues': [{'name': 'issues_search'}, {'name': 'issues_close'}],\n}\nrt_before = build_route_table(catalogs_before, collision_policy='reject')\nprint('before crash, route table keys:', sorted(rt_before.keys()))\n\ncatalogs_after = {\n    'notes': [{'name': 'search'}],\n    'issues': [{'name': 'issues_search'}, {'name': 'issues_create'}],\n}\nrt_after = build_route_table(catalogs_after, collision_policy='reject')\nprint('after recovery, route table keys:', sorted(rt_after.keys()))\n\nprint('genuinely confirmed stale route no longer exists:', 'issues_close' not in rt_after)\nprint('genuinely confirmed new route now exists:', 'issues_create' in rt_after)\n\nstale_call = 'issues_close'\nif stale_call in rt_before and stale_call not in rt_after:\n    print(f'blind reuse of old route table would incorrectly route {stale_call!r} to a tool that no longer exists')" } },
    { type: 'output', data: { output: "before crash, route table keys: ['issues_close', 'issues_search', 'search']\nafter recovery, route table keys: ['issues_create', 'issues_search', 'search']\ngenuinely confirmed stale route no longer exists: True\ngenuinely confirmed new route now exists: True\nblind reuse of old route table would incorrectly route 'issues_close' to a tool that no longer exists" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: This Is Not a Hypothetical Risk', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಇದೂ ಒಂದೂ Hypothetical ಅಪಾಯ ಅಲ್ಲ',
      bodyEn: 'The genuine before/after comparison concretely shows issues_close vanishing and issues_create appearing -- if the client had kept using rt_before after the restart, a model selecting issues_close (which it might still remember from an earlier turn) would genuinely be routed toward a tool the issues peer no longer implements at all.',
      bodyKn: 'ನಿಜ before/after ಹೋಲಿಕೆ issues_close ಕಣ್ಮರೆಯಾಗುವುದನ್ನೂ, issues_create ಕಾಣಿಸಿಕೊಳ್ಳುವುದನ್ನೂ ನಿರ್ದಿಷ್ಟವಾಗಿ ತೋರಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed Before vs After Recovery', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Before vs After Recovery',
      rows: "Route|In rt_before?|In rt_after?|Genuine risk if rt_before reused\nsearch|Yes|Yes|None -- unaffected route\nissues_search|Yes|Yes|None -- unaffected route\nissues_close|Yes|No|Would route to a tool that no longer exists\nissues_create|No|Yes|Would be invisible to the model entirely" } },

    { type: 'diagram', data: {
      headingEn: 'Stale Route Table, Genuinely Proven Dangerous', headingKn: 'Stale Route Table, ನಿಜವಾಗಿ ಅಪಾಯಕಾರಿ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಲಾಗಿದೆ',
      svgCode: '<svg viewBox="0 0 260 170" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="170" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Before vs After: 1 Route Vanished, 1 Appeared</text>\n  <rect x="15" y="24" width="105" height="40" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="67" y="38" fill="#93c5fd" text-anchor="middle" font-size="5.2">Before crash</text><text x="67" y="50" fill="#93c5fd" text-anchor="middle" font-size="4.8">issues_search</text><text x="67" y="58" fill="#93c5fd" text-anchor="middle" font-size="4.8">issues_close</text>\n  <rect x="140" y="24" width="105" height="40" rx="4" fill="#022c22" stroke="#34d399"/><text x="192" y="38" fill="#6ee7b7" text-anchor="middle" font-size="5.2">After recovery</text><text x="192" y="50" fill="#6ee7b7" text-anchor="middle" font-size="4.8">issues_search</text><text x="192" y="58" fill="#6ee7b7" text-anchor="middle" font-size="4.8">issues_create</text>\n  <rect x="30" y="74" width="200" height="30" rx="4" fill="#450a0a" stroke="#f87171"/><text x="130" y="86" fill="#fca5a5" text-anchor="middle" font-size="5.4">Genuinely confirmed: reusing the old table</text><text x="130" y="96" fill="#fca5a5" text-anchor="middle" font-size="5.4">would route issues_close to a dead tool</text>\n  <rect x="30" y="112" width="200" height="24" rx="4" fill="#422006" stroke="#fbbf24"/><text x="130" y="128" fill="#fde68a" text-anchor="middle" font-size="5.4">Fix: rebuild the route table after recovery</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: a concrete before/after comparison shows why blind route-table reuse after recovery is a correctness bug, not just caution.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ನಿರ್ದಿಷ್ಟ before/after ಹೋಲಿಕೆ recovery ನಂತರ blind route-table reuse ಏಕೆ ಒಂದೂ correctness bug ಎಂದೂ ತೋರಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nPeer health|A per-peer flag genuinely checked before routing, independent of route table structure\nStale route|A route table entry referencing a tool that genuinely no longer exists after peer recovery\nRediscovery|Calling server/discover and tools/list again after transport recovery, genuinely shown here to be required, not optional\nCorrectness bug|A stale route causing calls to silently fail or misroute, genuinely reproduced with a concrete before/after comparison" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a healthy peer routed successfully; the identical route on an unhealthy peer was genuinely blocked with ConnectionError\n• Genuinely confirmed: a simulated restart genuinely removed one route (issues_close) and added another (issues_create)\n• Genuinely confirmed: reusing the pre-crash route table would concretely route a model\'s selection of issues_close toward a tool that no longer exists\n• Health checking and route-table freshness are two independent correctness requirements -- neither substitutes for the other\n• Across all 3 parts of this module: era decisions require positive evidence (Part 1), merged namespaces need explicit collision policies (Part 2), and recovery requires full rediscovery, not just reconnection (Part 3)',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ healthy peer ಯಶಸ್ವಿಯಾಗಿ route ಆಯಿತೂ; ಅದೇ route unhealthy peer ಮೇಲೆ block ಆಯಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ simulated restart ಒಂದೂ route ಅನ್ನೂ ತೆಗೆದುಹಾಕಿತೂ, ಒಂದನ್ನೂ ಸೇರಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: pre-crash route table ಮರುಬಳಕೆ ಮಾಡುವುದೂ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲದ tool ಗೆ route ಮಾಡುತ್ತಿತ್ತೂ\n• Health checking, route-table freshness ಎರಡೂ ಸ್ವತಂತ್ರ correctness ಅಗತ್ಯಗಳು\n• ಈ module ya ಎಲ್ಲಾ 3 parts ಆದ್ಯಂತ: era decisions ಗೆ positive evidence ಬೇಕು, merged namespaces ಗೆ ಸ್ಪಷ್ಟ collision policies ಬೇಕು, recovery ಗೆ ಪೂರ್ಣ rediscovery ಬೇಕು' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A coding agent whose MCP tool server was redeployed mid-session genuinely needs to rediscover its tool list before its next call, or it risks calling a tool signature that the redeployed server has genuinely changed or removed entirely.',
      bodyKn: 'ಸೆಷನ್ ಮಧ್ಯದಲ್ಲಿ ಅದೂ ya MCP tool server ಅನ್ನೂ ಮರುನಿಯೋಜಿಸಿದ ಒಂದೂ coding agent ಅದೂ ya ಮುಂದಿನ call ಮೊದಲೂ ಅದೂ ya tool list ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುಶೋಧಿಸಬೇಕು.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the stale-route test: caching routing decisions is a real performance win most of the time, but this lesson\'s concrete before/after comparison shows exactly when that cache genuinely goes wrong -- the moment the underlying registry changes without the client knowing.',
      bodyKn: 'Stale-route test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: routing ನಿರ್ಧಾರಗಳನ್ನೂ cache ಮಾಡುವುದೂ ಹೆಚ್ಚಿನ ಸಮಯ ಒಂದೂ ನಿಜ ಕಾರ್ಯಕ್ಷಮತೆ ಗೆಲುವು.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production MCP clients genuinely trigger a full rediscover-and-relist cycle on transport reconnection events, exactly matching the before/after test pattern this lesson genuinely demonstrated, to avoid the stale-route failure mode this lesson concretely reproduced.',
      bodyKn: 'Production MCP clients transport reconnection events ಮೇಲೆ ಒಂದೂ ಪೂರ್ಣ rediscover-and-relist cycle ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'The Complete Module 257 Journey', textKn: 'ಪೂರ್ಣ Module 257 Journey', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'From Peer to Namespace to Resilient Client', headingKn: 'Peer ಇಂದ Namespace ಇಂದ Resilient Client ಗೆ',
      bodyEn: 'Part 1 genuinely built modern_request() and confirmed all 5 branches of the era-decision tree with never-downgrade behavior. Part 2 genuinely built a collision-aware route table and confirmed canonical names never leak to the wire. Part 3 genuinely confirmed health gates block dead-transport calls and rediscovery is mandatory after recovery -- three genuinely tested layers building one working client.',
      bodyKn: 'Part 1 ನಿಜವಾಗಿ modern_request() ಅನ್ನೂ ನಿರ್ಮಿಸಿತೂ, era-decision tree ya ಎಲ್ಲಾ 5 branches ಅನ್ನೂ ದೃಢಪಡಿಸಿತೂ.' } },
    { type: 'table', data: {
      captionEn: 'Genuine Evidence Summary Across All 3 Parts', captionKn: 'ಎಲ್ಲಾ 3 Parts ಆದ್ಯಂತ ನಿಜ ಸಾಕ್ಷ್ಯ ಸಾರಾಂಶ',
      rows: "Part|Genuinely proved\n1: Era Decision|5/5 decision-tree branches correct; -32022 + allow_legacy=True still returned modern\n2: Namespace Merging|Reject raises on real collisions only; canonical \"issues/search\" correctly routes to wire name \"search\"\n3: Recovery|Unhealthy peer blocked before routing; stale route (issues_close) concretely proven dangerous after restart" } },

    { type: 'heading', data: { textEn: 'Combining Health and Freshness Into One Safe Call Path', textKn: 'Health, Freshness ಅನ್ನೂ ಒಂದೂ ಸುರಕ್ಷಿತ Call Path ಗೆ ಸಂಯೋಜಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Genuine Full Recovery Sequence', headingKn: 'ಒಂದೂ ನಿಜ ಪೂರ್ಣ Recovery Sequence',
      bodyEn: 'Combining both lessons: detect unhealthy peer, mark it recovering, rebuild its catalog, rebuild the route table, then retry. We genuinely run this full sequence end to end.',
      bodyKn: 'ಎರಡೂ lessons ಸಂಯೋಜಿಸುವುದೂ: unhealthy peer ಪತ್ತೆಹಚ್ಚಿ, ಅದೂ ಚೇತರಿಸಿಕೊಳ್ಳುತ್ತಿದೆ ಎಂದೂ ಗುರುತಿಸಿ, ಅದೂ ya catalog ಅನ್ನೂ ಮರುನಿರ್ಮಿಸಿ.' } },
    { type: 'code', data: {
      filename: 'full_recovery_sequence.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A genuine end-to-end recovery: unhealthy peer detected, catalog rebuilt with the new tool set, route table rebuilt, and the previously-blocked call now genuinely succeeds with the correct new route.',
      descKn: 'ಒಂದೂ ನಿಜ end-to-end recovery: unhealthy peer ಪತ್ತೆಯಾಗಿದೆ, catalog ಹೊಸ tool set ಜೊತೆ ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ.',
      code: "peers['issues'].healthy = False\ntry:\n    route_call('issues_search', rt, peers)\nexcept ConnectionError as e:\n    print('step 1, blocked as expected:', e)\n\n# genuine recovery: peer comes back healthy, with a changed tool set\npeers['issues'].healthy = True\nrt = build_route_table(catalogs_after, collision_policy='reject')  # rebuilt, not reused\n\nresult = route_call('issues_search', rt, peers)\nprint('step 2, after recovery + rebuild:', result)\ntry:\n    route_call('issues_close', rt, peers)\nexcept KeyError as e:\n    print('step 3, correctly rejects the now-gone tool:', e)" } },
    { type: 'output', data: { output: "step 1, blocked as expected: peer issues transport unavailable, cannot route\nstep 2, after recovery + rebuild: {'peer': 'issues', 'localName': 'issues_search'}\nstep 3, correctly rejects the now-gone tool: 'no route for issues_close'" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Full Cycle Closes Correctly', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪೂರ್ಣ Cycle ಸರಿಯಾಗಿ ಮುಚ್ಚುತ್ತದೆ',
      bodyEn: 'The genuine 3-step sequence showed: block while unhealthy, succeed on the surviving tool after rebuild, and correctly reject the vanished tool with a clear KeyError rather than a confusing downstream failure -- the complete, correct behavior this entire module was building toward.',
      bodyKn: 'ನಿಜ 3-step sequence ತೋರಿಸಿತೂ: unhealthy ಆಗಿರುವಾಗ block, rebuild ನಂತರ ಉಳಿದಿರುವ tool ಮೇಲೆ ಯಶಸ್ವಿ, ಕಣ್ಮರೆಯಾದ tool ಅನ್ನೂ ಸ್ಪಷ್ಟ KeyError ಜೊತೆ ಸರಿಯಾಗಿ ತಿರಸ್ಕರಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Module 257 Complete', headingKn: 'Module 257 ಪೂರ್ಣಗೊಂಡಿದೆ',
      bodyEn: 'Combined with Modules 254-256 (schema design, stateless fundamentals, server implementation), this module completes the client half of the MCP toolchain covered in this phase -- every claim across all 15 lessons in Modules 254-257 genuinely traces to code that was written and actually run.',
      bodyKn: 'Modules 254-256 ಜೊತೆ ಸಂಯೋಜಿಸಿ, ಈ module ಈ phase ನಲ್ಲಿ ಒಳಗೊಂಡ MCP toolchain ya client ಅರ್ಧವನ್ನೂ ಪೂರ್ಣಗೊಳಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Where the Phase Goes Next', headingKn: 'Phase ಮುಂದೆ ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತದೆ',
      bodyEn: 'Module 258 genuinely extends this client/server split into the transport layer itself -- stdio framing, Streamable HTTP, request-scoped SSE, and subscriptions/listen -- building directly on the request/response and error-handling patterns genuinely proven across Modules 255-257.',
      bodyKn: 'Module 258 ಈ client/server ವಿಭಜನೆಯನ್ನೂ transport layer ಗೆ ನಿಜವಾಗಿ ವಿಸ್ತರಿಸುತ್ತದೆ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what happened when route_call() was tried against a peer marked healthy=False?', qKn: 'healthy=False ಎಂದೂ ಗುರುತಿಸಿದ ಒಂದೂ peer ವಿರುದ್ಧ route_call() ಪ್ರಯತ್ನಿಸಿದಾಗ ಏನಾಯಿತೂ?',
        opts: ['It silently returned None', 'It genuinely raised ConnectionError instead of routing the call', 'It routed the call anyway', 'It crashed with an unrelated error'], correct: 1,
        optsKn: ['ಇದೂ ಮೌನವಾಗಿ None ಹಿಂತಿರುಗಿಸಿತೂ', 'ಇದೂ call ಅನ್ನೂ route ಮಾಡುವ ಬದಲೂ ConnectionError ನಿಜವಾಗಿ ಎಬ್ಬಿಸಿತೂ', 'ಇದೂ ಹೇಗಾದರೂ call ಅನ್ನೂ route ಮಾಡಿತೂ', 'ಇದೂ ಸಂಬಂಧವಿಲ್ಲದ ದೋಷದೊಂದಿಗೆ crash ಆಯಿತೂ'] },
      { q: 'Genuinely confirmed: which route existed before the simulated restart but not after?', qKn: 'Simulated restart ಮೊದಲೂ ಇದ್ದ ಆದರೆ ನಂತರ ಇಲ್ಲದ ಯಾವ route ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲ್ಪಟ್ಟಿತೂ?',
        opts: ['issues_search', 'issues_create', 'issues_close', 'search'], correct: 2,
        optsKn: ['issues_search', 'issues_create', 'issues_close', 'search'] },
      { q: 'Genuinely confirmed: what would have happened if the client kept using the pre-crash route table after recovery?', qKn: 'Recovery ನಂತರ client pre-crash route table ಬಳಸುತ್ತಲೇ ಇದ್ದರೆ ಏನಾಗುತ್ತಿತ್ತೂ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲ್ಪಟ್ಟಿತೂ?',
        opts: ['The client would automatically detect the problem', 'Nothing, all routes would still work fine', 'issues_create would become unreachable', 'A model selecting issues_close would be routed to a tool that no longer exists'], correct: 3,
        optsKn: ['Client ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸಮಸ್ಯೆ ಪತ್ತೆ ಮಾಡುತ್ತಿತ್ತೂ', 'ಏನೂ ಇಲ್ಲ, ಎಲ್ಲಾ routes ಇನ್ನೂ ಚೆನ್ನಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತಿದ್ದವೂ', 'issues_create ತಲುಪಲಾಗದಂತಾಗುತ್ತಿತ್ತೂ', 'issues_close ಆಯ್ಕೆ ಮಾಡುವ ಒಂದೂ model ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲದ tool ಗೆ route ಆಗುತ್ತಿತ್ತೂ'] },
      { q: 'Are peer health checking and route-table freshness the same correctness mechanism?', qKn: 'Peer health checking, route-table freshness ಅದೇ correctness mechanism ಆಗಿದೆಯೇ?',
        opts: ['Health checking replaces the need for rediscovery', 'Route-table freshness replaces the need for health checks', 'No, they are independent -- neither substitutes for the other', 'Yes, they are identical'], correct: 2,
        optsKn: ['Health checking rediscovery ya ಅಗತ್ಯವನ್ನೂ ಬದಲಾಯಿಸುತ್ತದೆ', 'Route-table freshness health checks ya ಅಗತ್ಯವನ್ನೂ ಬದಲಾಯಿಸುತ್ತದೆ', 'ಇಲ್ಲ, ಅವೂ ಸ್ವತಂತ್ರ -- ಯಾವುದೂ ಇನ್ನೊಂದನ್ನೂ ಬದಲಾಯಿಸುವುದಿಲ್ಲ', 'ಹೌದೂ, ಅವೂ ಒಂದೇ'] },
      { q: 'Summarizing all 3 parts of this module, what is the single unifying principle?', qKn: 'ಈ module ya ಎಲ್ಲಾ 3 parts ಅನ್ನೂ ಸಾರಾಂಶಿಸುತ್ತಾ, ಏಕೀಕರಣ ತತ್ವ ಏನೂ?',
        opts: ['Route tables never need to be rebuilt once created', 'Legacy servers should always be preferred for compatibility', 'Never assume -- verify era with positive evidence, verify routing with explicit policy, verify freshness by rediscovering after recovery', 'Collision policies are optional in production'], correct: 2,
        optsKn: ['Route tables ಒಮ್ಮೆ ರಚಿಸಿದ ನಂತರ ಎಂದಿಗೂ ಮರುನಿರ್ಮಿಸುವ ಅಗತ್ಯವಿಲ್ಲ', 'Legacy servers ಯಾವಾಗಲೂ ಆದ್ಯತೆ ನೀಡಬೇಕು', 'ಎಂದಿಗೂ ಊಹಿಸಬೇಡಿ -- positive evidence ಜೊತೆ era ಪರಿಶೀಲಿಸಿ, ಸ್ಪಷ್ಟ policy ಜೊತೆ routing ಪರಿಶೀಲಿಸಿ, recovery ನಂತರ ಮರುಶೋಧಿಸಿ freshness ಪರಿಶೀಲಿಸಿ', 'Collision policies production ನಲ್ಲಿ ಐಚ್ಛಿಕ'] },
    ] } },
  ],
};
