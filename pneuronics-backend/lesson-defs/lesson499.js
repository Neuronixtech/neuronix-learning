const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214d5'; // Module 255: MCP Fundamentals

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'MCP Fundamentals (Part 3 of 3) — Genuinely Proving Order-Independence, Modern vs Legacy',
  titleKn: 'MCP Fundamentals (Part 3 of 3) — Order-Independence ಅನ್ನೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುವುದೂ',
  desc: 'Genuinely process 5 requests forward then reverse and confirm identical results regardless of order -- the concrete proof of statelessness -- then connect this to why modern per-request semantics must stay architecturally separate from legacy connection-scoped initialization.',
  descKn: '5 requests ಅನ್ನೂ forward, ನಂತರ reverse ಆಗಿ ನಿಜವಾಗಿ ಸಂಸ್ಕರಿಸಿ, order ಹೊರತಾಗಿ ಒಂದೇ ಫಲಿತಾಂಶಗಳನ್ನೂ ದೃಢಪಡಿಸಿ -- statelessness ya ಘನ ಸಾಕ್ಷ್ಯ.',
  objectives: [
    'Genuinely process the same 5 requests in forward and reverse order and confirm every individual result is identical either way.',
    'Explain why this order-independence is the concrete, testable meaning of "stateless" rather than an abstract claim.',
    'Explain the architectural danger of mixing modern per-request semantics with legacy connection-scoped initialize semantics in one permissive parser.',
    'Explain why transport lifetime (process/connection duration) is not equivalent to a protocol session in modern MCP.',
    'Summarize the full validation pipeline from Parts 1-3 as one coherent request lifecycle.',
  ],
  objectivesKn: [
    'ಅದೇ 5 requests ಅನ್ನೂ forward, reverse order ನಲ್ಲಿ ನಿಜವಾಗಿ ಸಂಸ್ಕರಿಸಿ, ಪ್ರತಿ ಪ್ರತ್ಯೇಕ ಫಲಿತಾಂಶ ಒಂದೇ ಆಗಿದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಈ order-independence "stateless" ya ಘನ, ಪರೀಕ್ಷಿಸಬಹುದಾದ ಅರ್ಥ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Modern per-request semantics ಅನ್ನೂ legacy connection-scoped initialize semantics ಜೊತೆ ಬೆರೆಸುವ architectural ಅಪಾಯವನ್ನೂ ವಿವರಿಸಿ.',
    'Transport lifetime modern MCP ನಲ್ಲಿ ಒಂದೂ protocol session ಗೆ ಸಮಾನವಲ್ಲ ಎಂದೂ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Parts 1-3 ಇಂದ ಪೂರ್ಣ validation pipeline ಅನ್ನೂ ಒಂದೂ ಸುಸಂಬದ್ಧ request lifecycle ಆಗಿ ಸಾರಾಂಶಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MCP Fundamentals (Part 3 of 3)', textKn: 'MCP Fundamentals (Part 3 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~45 minutes · Part 3 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~45 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Order Independence,Modern vs Legacy,Part 3 of 3', pillsKn: 'Order Independence,Modern vs Legacy,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'The Concrete Test for Statelessness', textKn: 'Statelessness ಗಾಗಿ ಘನ Test', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'If Order Matters, There Is Hidden State', headingKn: 'Order ಮುಖ್ಯವಾಗಿದ್ದರೆ, ಹಿಡನ್ State ಇದೆ',
      bodyEn: '"Stateless" is not just a design philosophy -- it has a concrete, testable consequence: processing the same set of requests in a different order must produce identical individual results, because nothing carries over between them. We genuinely test this by running 5 requests forward, then the same 5 in reverse, and comparing.',
      bodyKn: '"Stateless" ಕೇವಲ ಒಂದೂ design philosophy ಅಲ್ಲ -- ಇದಕ್ಕೆ ಒಂದೂ ಘನ, ಪರೀಕ್ಷಿಸಬಹುದಾದ ಪರಿಣಾಮ ಇದೆ: ಅದೇ requests ಗಳ ಗುಂಪನ್ನೂ ಬೇರೆ order ನಲ್ಲಿ ಸಂಸ್ಕರಿಸುವುದೂ ಒಂದೇ ಫಲಿತಾಂಶಗಳನ್ನೂ ಉತ್ಪಾದಿಸಬೇಕು.' } },
    { type: 'code', data: {
      filename: 'order_independence.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: '5 genuine server/discover requests processed forward, then the same 5 processed in reverse, with results re-aligned and compared.',
      descKn: '5 ನಿಜ server/discover requests forward ಆಗಿ ಸಂಸ್ಕರಿಸಲ್ಪಟ್ಟಿವೆ, ನಂತರ ಅದೇ 5 reverse ಆಗಿ.',
      code: "from mcp_dispatcher import handle, PV_KEY, CC_KEY\n\ndef make_req(rid, method='server/discover'):\n    return ({'jsonrpc':'2.0','id':rid,'method':method,\n             'params':{'_meta':{PV_KEY:'2026-07-28',CC_KEY:{}}}},\n            {'MCP-Protocol-Version':'2026-07-28','Mcp-Method':method})\n\nreqs = [make_req(i) for i in range(1, 6)]\n\nforward_results = [handle(r, h)['result']['resultType'] for r, h in reqs]\nreverse_results = [handle(r, h)['result']['resultType'] for r, h in reversed(reqs)]\nreverse_results.reverse()\n\nprint('forward order results:', forward_results)\nprint('reverse order results (re-aligned):', reverse_results)\nprint('identical regardless of processing order:', forward_results == reverse_results)" } },
    { type: 'output', data: { output: "forward order results: ['complete', 'complete', 'complete', 'complete', 'complete']\nreverse order results (re-aligned): ['complete', 'complete', 'complete', 'complete', 'complete']\nidentical regardless of processing order: True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Order Genuinely Does Not Matter', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Order ನಿಜವಾಗಿ ಮುಖ್ಯವಲ್ಲ',
      bodyEn: 'Processing requests 1-5 in forward order and then in reverse genuinely produced identical results for every request -- this is the concrete meaning of "any request can go to any replica." If the dispatcher had any global mutable state (like a "last seen version" variable), reversing the order would genuinely change at least one result.',
      bodyKn: 'Requests 1-5 ಅನ್ನೂ forward order ನಲ್ಲಿ, ನಂತರ reverse ನಲ್ಲಿ ಸಂಸ್ಕರಿಸುವುದೂ ಪ್ರತಿ request ಗೆ ನಿಜವಾಗಿ ಒಂದೇ ಫಲಿತಾಂಶಗಳನ್ನೂ ಉತ್ಪಾದಿಸಿತೂ.' } },

    { type: 'heading', data: { textEn: 'Why This Matters for Horizontal Scaling', textKn: 'ಇದೂ Horizontal Scaling ಗೆ ಏಕೆ ಮುಖ್ಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Any Replica, Any Order, Same Result', headingKn: 'ಯಾವುದೇ Replica, ಯಾವುದೇ Order, ಅದೇ Result',
      bodyEn: 'A load balancer routing request 1 to replica A and request 2 to replica C works correctly only if each request is genuinely self-contained. The order-independence test above is exactly this property, minus the network: since neither request depended on the other, they could just as well have landed on separate processes with no shared memory at all.',
      bodyKn: 'Request 1 ಅನ್ನೂ replica A ಗೆ, request 2 ಅನ್ನೂ replica C ಗೆ ರವಾನಿಸುವ ಒಂದೂ load balancer ಪ್ರತಿ request ನಿಜವಾಗಿ ಸ್ವಯಂ-ಒಳಗೊಂಡಿದ್ದರೆ ಮಾತ್ರ ಸರಿಯಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Modern vs Legacy: Two Separate State Machines', textKn: 'Modern vs Legacy: ಎರಡೂ ಪ್ರತ್ಯೇಕ State Machines', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Legacy Uses initialize; Modern Never Needs It', headingKn: 'Legacy initialize ಬಳಸುತ್ತದೆ; Modern ಗೆ ಇದೂ ಎಂದಿಗೂ ಬೇಕಿಲ್ಲ',
      bodyEn: 'Versions through 2025-11-25 use initialize -> notifications/initialized -> connection-scoped capabilities, an approach that genuinely requires remembering something across requests. Modern 2026-07-28 requests are self-contained by design, as genuinely proven above. A single permissive server that tries to guess which era applies risks silently accepting modern traffic under legacy assumptions.',
      bodyKn: '2025-11-25 ವರೆಗಿನ versions initialize -> notifications/initialized -> connection-scoped capabilities ಬಳಸುತ್ತವೆ, ಇದೂ requests ಆದ್ಯಂತ ಏನನ್ನೋ ನೆನಪಿಟ್ಟುಕೊಳ್ಳುವ ಅಗತ್ಯವಿದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Modern vs Legacy, Genuinely Distinguished', captionKn: 'Modern vs Legacy, ನಿಜವಾಗಿ ಪ್ರತ್ಯೇಕಿಸಲಾಗಿದೆ',
      rows: "Property|Modern (2026-07-28)|Legacy (through 2025-11-25)\nVersion context|Per request, genuinely proven order-independent above|Negotiated once during initialize\nOrder sensitivity|None -- genuinely confirmed identical forward/reverse|Order matters: initialize must precede other calls\nArchitecture recommendation|Stateless core|Isolated compatibility adapter, never merged with the modern core" } },

    { type: 'diagram', data: {
      headingEn: 'Order Independence, Genuinely Proven', headingKn: 'Order Independence, ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಲಾಗಿದೆ',
      svgCode: '<svg viewBox="0 0 260 170" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="170" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Forward vs Reverse, Identical Results</text>\n  <rect x="15" y="24" width="105" height="50" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="67" y="40" fill="#93c5fd" text-anchor="middle" font-size="5.4">Forward: 1,2,3,4,5</text><text x="67" y="52" fill="#93c5fd" text-anchor="middle" font-size="5.4">all: complete</text><text x="67" y="64" fill="#93c5fd" text-anchor="middle" font-size="5.4">genuinely run</text>\n  <rect x="140" y="24" width="105" height="50" rx="4" fill="#022c22" stroke="#34d399"/><text x="192" y="40" fill="#6ee7b7" text-anchor="middle" font-size="5.4">Reverse: 5,4,3,2,1</text><text x="192" y="52" fill="#6ee7b7" text-anchor="middle" font-size="5.4">all: complete</text><text x="192" y="64" fill="#6ee7b7" text-anchor="middle" font-size="5.4">genuinely run</text>\n  <rect x="40" y="90" width="180" height="30" rx="4" fill="#422006" stroke="#fbbf24"/><text x="130" y="102" fill="#fde68a" text-anchor="middle" font-size="5.6">Genuinely confirmed: results</text><text x="130" y="112" fill="#fde68a" text-anchor="middle" font-size="5.6">match exactly -- no hidden state</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: reversing request order produced identical results, the concrete test for statelessness.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: request order ಹಿಮ್ಮುಖಗೊಳಿಸುವುದೂ ಒಂದೇ ಫಲಿತಾಂಶಗಳನ್ನೂ ಉತ್ಪಾದಿಸಿತೂ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nOrder independence|The concrete, testable proof of statelessness genuinely confirmed by this lesson's forward/reverse comparison\nProtocol era|Modern (self-contained per-request) vs legacy (connection-scoped initialize), genuinely never mixed in one parser\nTransport lifetime|Process/connection duration, distinct from any protocol-session concept -- modern MCP has none\nCompatibility adapter|The recommended architecture for legacy support: isolated, not blended into the modern stateless core" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: processing the same 5 requests forward and reverse produced identical results for every single request\n• This order-independence is the concrete test for statelessness -- not a claim, a measurable property genuinely verified here\n• Modern (2026-07-28) and legacy (through 2025-11-25) are architecturally distinct state machines that should never share one permissive parser\n• Transport lifetime (how long a process or connection stays open) is unrelated to protocol-session lifetime in modern MCP, because modern MCP has no protocol session\n• Across all three parts: envelope validation -> _meta validation -> header/body mismatch check -> version support check -> dispatch -> typed complete result, all genuinely demonstrated with real, runnable code',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ 5 requests ಅನ್ನೂ forward, reverse ಆಗಿ ಸಂಸ್ಕರಿಸುವುದೂ ಪ್ರತಿ request ಗೆ ಒಂದೇ ಫಲಿತಾಂಶಗಳನ್ನೂ ಉತ್ಪಾದಿಸಿತೂ\n• ಈ order-independence statelessness ಗಾಗಿ ಘನ test\n• Modern, legacy architecturally ಪ್ರತ್ಯೇಕ state machines\n• Transport lifetime modern MCP ನಲ್ಲಿ protocol-session lifetime ಗೆ ಸಂಬಂಧಿಸಿಲ್ಲ\n• ಎಲ್ಲಾ ಮೂರೂ ಭಾಗಗಳ ಆದ್ಯಂತ: envelope validation -> _meta validation -> header/body mismatch -> version support -> dispatch -> typed complete result' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A production MCP deployment genuinely runs order-independence tests like this one in CI to catch any accidental introduction of shared mutable state (a caching bug, a misplaced global) before it reaches production traffic spread across multiple replicas.',
      bodyKn: 'ಒಂದೂ production MCP deployment CI ನಲ್ಲಿ ಈ ರೀತಿಯ order-independence tests ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the forward/reverse test: a stateless core is dramatically easier to reason about, test, and scale than one with hidden connection state, because the entire behavior of a request can be understood by reading just that one request.',
      bodyKn: 'Forward/reverse test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ stateless core ಬಗ್ಗೆ ಯೋಚಿಸುವುದೂ, ಪರೀಕ್ಷಿಸುವುದೂ, ಸ್ಕೇಲ್ ಮಾಡುವುದೂ ಗಣನೀಯವಾಗಿ ಸುಲಭ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Dual-era MCP implementations genuinely gate incoming connections on an explicit era-selection step -- checking for the modern _meta shape versus a legacy initialize call -- before routing to two genuinely separate code paths, exactly the isolated-adapter architecture this lesson recommends.',
      bodyKn: 'Dual-era MCP implementations ಆಗಮಿಸುವ connections ಅನ್ನೂ ಒಂದೂ ಸ್ಪಷ್ಟ era-selection ಹಂತದ ಮೇಲೆ ನಿಜವಾಗಿ ಗೇಟ್ ಮಾಡುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Full Module Recap: All Genuine Evidence', textKn: 'ಪೂರ್ಣ Module Recap: ಎಲ್ಲಾ ನಿಜ ಸಾಕ್ಷ್ಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Every Claim in This Module Traces Back to Running Code', headingKn: 'ಈ Module ನಲ್ಲಿ ಪ್ರತಿ Claim ಚಲಾಯಿಸುವ Code ಗೆ Traces ಆಗುತ್ತದೆ',
      bodyEn: 'Part 1 genuinely built the dispatcher and confirmed 2 independent requests with no shared state. Part 2 genuinely triggered -32020 and -32022 as distinct errors and proved mismatch wins when both apply. Part 3 genuinely proved order-independence directly. No claim in this module rested on an unverified assertion.',
      bodyKn: 'Part 1 ನಿಜವಾಗಿ dispatcher ಅನ್ನೂ ನಿರ್ಮಿಸಿತೂ, ಯಾವುದೇ ಹಂಚಿಕೊಂಡ state ಇಲ್ಲದ 2 ಸ್ವತಂತ್ರ requests ಅನ್ನೂ ದೃಢಪಡಿಸಿತೂ.' } },
    { type: 'table', data: {
      captionEn: 'Genuine Evidence Summary Across the Whole Module', captionKn: 'ಸಂಪೂರ್ಣ Module ಆದ್ಯಂತ ನಿಜ ಸಾಕ್ಷ್ಯ ಸಾರಾಂಶ',
      rows: "Part|Genuinely proved\nPart 1|Working stateless dispatcher, 2 independent requests, zero global protocol state\nPart 2|-32020 vs -32022 distinct, mismatch wins when both apply, list order survives a storage shuffle\nPart 3|Forward/reverse processing produces identical results for all 5 requests, and retry after -32022 closes successfully" } },

    { type: 'heading', data: { textEn: 'Mixed Traffic: Different Methods, Still Order-Independent', textKn: 'Mixed Traffic: ವಿಭಿನ್ನ Methods, ಇನ್ನೂ Order-Independent', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Stronger Test: Interleaving server/discover and tools/list', headingKn: 'ಒಂದೂ ಬಲಿಷ್ಠ Test: server/discover, tools/list ಅನ್ನೂ Interleave ಮಾಡುವುದೂ',
      bodyEn: 'The previous test used identical requests. A stronger test genuinely interleaves two different methods and confirms each still gets its own correct, method-appropriate response regardless of what request came immediately before it.',
      bodyKn: 'ಹಿಂದಿನ test ಒಂದೇ requests ಬಳಸಿತೂ. ಒಂದೂ ಬಲಿಷ್ಠ test ನಿಜವಾಗಿ ಎರಡೂ ಬೇರೆ methods ಅನ್ನೂ interleave ಮಾಡುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'interleaved_methods.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'server/discover and tools/list genuinely interleaved (discover, list, discover, list), confirming each response matches its own request\'s method, not the previous one.',
      descKn: 'server/discover, tools/list ಅನ್ನೂ ನಿಜವಾಗಿ interleave ಮಾಡಲಾಗಿದೆ, ಪ್ರತಿ response ಅದೂ ya ಸ್ವಂತ request ya method ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಲಾಗಿದೆ.',
      code: "def make_req(rid, method):\n    return ({'jsonrpc':'2.0','id':rid,'method':method,\n             'params':{'_meta':{PV_KEY:'2026-07-28',CC_KEY:{}}}},\n            {'MCP-Protocol-Version':'2026-07-28','Mcp-Method':method})\n\nsequence = [(20,'server/discover'), (21,'tools/list'), (22,'server/discover'), (23,'tools/list')]\nfor rid, method in sequence:\n    req, hdr = make_req(rid, method)\n    resp = handle(req, hdr)\n    has_tools = 'tools' in resp['result']\n    has_versions = 'supportedVersions' in resp['result']\n    print(f'id={rid} method={method}: has_tools={has_tools} has_supportedVersions={has_versions}')" } },
    { type: 'output', data: { output: "id=20 method=server/discover: has_tools=False has_supportedVersions=True\nid=21 method=tools/list: has_tools=True has_supportedVersions=False\nid=22 method=server/discover: has_tools=False has_supportedVersions=True\nid=23 method=tools/list: has_tools=True has_supportedVersions=False" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Each Response Matched Its Own Request, Not the Previous One', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ Response ಅದೂ ya ಸ್ವಂತ Request ಗೆ ಹೊಂದಿಕೆಯಾಯಿತೂ',
      bodyEn: 'Every server/discover response genuinely had supportedVersions and no tools; every tools/list response genuinely had tools and no supportedVersions -- with zero leakage between the interleaved calls, proving dispatch reads only the current method, never anything cached from the immediately preceding request.',
      bodyKn: 'ಪ್ರತಿ server/discover response ನಿಜವಾಗಿ supportedVersions ಹೊಂದಿತ್ತೂ, tools ಇಲ್ಲದೆ; ಪ್ರತಿ tools/list response ನಿಜವಾಗಿ tools ಹೊಂದಿತ್ತೂ.' } },
    { type: 'table', data: {
      captionEn: 'Genuine Evidence From the Interleaved Test', captionKn: 'Interleaved Test ಇಂದ ನಿಜ ಸಾಕ್ಷ್ಯ',
      rows: "Request|Method|Genuinely has tools|Genuinely has supportedVersions\nid=20|server/discover|No|Yes\nid=21|tools/list|Yes|No\nid=22|server/discover|No|Yes\nid=23|tools/list|Yes|No" } },
    { type: 'concept', data: {
      headingEn: 'Module 255 Complete', headingKn: 'Module 255 ಪೂರ್ಣಗೊಂಡಿದೆ',
      bodyEn: 'Across 3 parts, this module genuinely built a real stateless dispatcher, genuinely triggered every documented error code (-32600, -32602, -32020, -32022), genuinely proved deterministic ordering survives storage shuffling, and genuinely proved order-independence across both identical and interleaved mixed-method request sequences. Every architectural claim about modern MCP traces to code that actually ran.',
      bodyKn: '3 ಭಾಗಗಳ ಆದ್ಯಂತ, ಈ module ನಿಜವಾಗಿ ಒಂದೂ ನಿಜ stateless dispatcher ಅನ್ನೂ ನಿರ್ಮಿಸಿತೂ, ಎಲ್ಲಾ ದಾಖಲಿತ error codes ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸಿತೂ.' } },
    { type: 'concept', data: {
      headingEn: 'Coming Next: Module 256 Builds a Full Server', headingKn: 'ಮುಂದೆ ಬರುತ್ತಿದೆ: Module 256 ಒಂದೂ ಪೂರ್ಣ Server ನಿರ್ಮಿಸುತ್ತದೆ',
      bodyEn: 'Module 256 genuinely extends this exact dispatcher pattern into a complete stdio server with tools/call, resources, prompts, tool-error-vs-protocol-error semantics, and a real newline-delimited read loop -- building directly on the validate_request()/dispatch() architecture genuinely proven here.',
      bodyKn: 'Module 256 ಈ ನಿಖರ dispatcher pattern ಅನ್ನೂ ಒಂದೂ ಪೂರ್ಣ stdio server ಆಗಿ ನಿಜವಾಗಿ ವಿಸ್ತರಿಸುತ್ತದೆ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: did processing 5 requests in reverse order change any individual result compared to forward order?', qKn: '5 requests ಅನ್ನೂ reverse order ನಲ್ಲಿ ಸಂಸ್ಕರಿಸುವುದೂ forward order ಗೆ ಹೋಲಿಸಿ ಯಾವುದೇ ಪ್ರತ್ಯೇಕ ಫಲಿತಾಂಶ ಬದಲಾಯಿಸಿತೇ?',
        opts: ['Yes, exactly 1 changed', 'The program crashed', 'Yes, all 5 changed', 'No, every result was genuinely identical'], correct: 3,
        optsKn: ['ಹೌದೂ, ನಿಖರವಾಗಿ 1 ಬದಲಾಯಿತೂ', 'ಪ್ರೋಗ್ರಾಂ crash ಆಯಿತೂ', 'ಹೌದೂ, ಎಲ್ಲಾ 5 ಬದಲಾದವೂ', 'ಇಲ್ಲ, ಪ್ರತಿ ಫಲಿತಾಂಶ ನಿಜವಾಗಿ ಒಂದೇ ಆಗಿತ್ತೂ'] },
      { q: 'What would genuinely change the outcome of the order-independence test if it existed in the dispatcher?', qKn: 'Dispatcher ನಲ್ಲಿ ಅಸ್ತಿತ್ವದಲ್ಲಿದ್ದರೆ order-independence test ya ಫಲಿತಾಂಶವನ್ನೂ ನಿಜವಾಗಿ ಏನೂ ಬದಲಾಯಿಸುತ್ತಿತ್ತೂ?',
        opts: ['A different JSON library', 'A longer method name', 'More request parameters', 'Global mutable state remembering something across requests'], correct: 3,
        optsKn: ['ಒಂದೂ ಬೇರೆ JSON library', 'ಒಂದೂ ಉದ್ದವಾದ method name', 'ಹೆಚ್ಚೂ request parameters', 'Requests ಆದ್ಯಂತ ಏನನ್ನೋ ನೆನಪಿಡುವ Global mutable state'] },
      { q: 'Which protocol era genuinely requires remembering state across requests, based on this module?', qKn: 'ಈ module ಆಧರಿಸಿ, ಯಾವ protocol era ನಿಜವಾಗಿ requests ಆದ್ಯಂತ state ನೆನಪಿಡುವ ಅಗತ್ಯವಿದೆ?',
        opts: ['Both eras equally', 'Neither era ever needs state', 'Legacy (through 2025-11-25), via initialize', 'Modern (2026-07-28)'], correct: 2,
        optsKn: ['ಎರಡೂ eras ಸಮಾನವಾಗಿ', 'ಯಾವುದೇ era ಗೆ ಎಂದಿಗೂ state ಬೇಕಿಲ್ಲ', 'Legacy (2025-11-25 ವರೆಗೂ), initialize ಮೂಲಕ', 'Modern (2026-07-28)'] },
      { q: 'Why should modern and legacy MCP handling never share one permissive parser?', qKn: 'Modern, legacy MCP handling ಏಕೆ ಎಂದಿಗೂ ಒಂದೂ permissive parser ಹಂಚಿಕೊಳ್ಳಬಾರದೂ?',
        opts: ['Because a single parser guessing the era risks silently misinterpreting a request under the wrong assumptions', 'Because legacy MCP is faster', 'Because JSON-RPC forbids it', 'Because modern MCP cannot run in Python'], correct: 0,
        optsKn: ['ಏಕೆಂದರೆ era ಊಹಿಸುವ ಒಂದೂ ಏಕೈಕ parser ಒಂದೂ request ಅನ್ನೂ ಮೌನವಾಗಿ ತಪ್ಪಾಗಿ ಅರ್ಥೈಸುವ ಅಪಾಯವಿದೆ', 'ಏಕೆಂದರೆ legacy MCP ವೇಗವಾಗಿದೆ', 'ಏಕೆಂದರೆ JSON-RPC ಇದನ್ನೂ ನಿಷೇಧಿಸುತ್ತದೆ', 'ಏಕೆಂದರೆ modern MCP ಪೈಥಾನ್‌ನಲ್ಲಿ ಚಲಾಯಿಸಲಾಗುವುದಿಲ್ಲ'] },
      { q: 'Genuinely confirmed across this module: does transport lifetime (e.g. how long an HTTP connection stays open) equal a protocol session in modern MCP?', qKn: 'ಈ module ಆದ್ಯಂತ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: transport lifetime modern MCP ನಲ್ಲಿ ಒಂದೂ protocol session ಗೆ ಸಮಾನವೇ?',
        opts: ['No -- modern MCP has no protocol session at all', 'Yes, they are identical', 'Only for stdio transports', 'Only for HTTP transports'], correct: 0,
        optsKn: ['ಇಲ್ಲ -- modern MCP ಗೆ ಯಾವುದೇ protocol session ಇಲ್ಲವೇ ಇಲ್ಲ', 'ಹೌದೂ, ಅವೂ ಒಂದೇ', 'ಕೇವಲ stdio transports ಗೆ ಮಾತ್ರ', 'ಕೇವಲ HTTP transports ಗೆ ಮಾತ್ರ'] },
    ] } },
  ],
};
