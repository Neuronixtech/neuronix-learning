const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214de'; // Module 258: MCP Transports

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'MCP Transports (Part 2 of 3) — Genuinely Catching a Gateway-Confusion Attack and Tracing Request-Scoped SSE',
  titleKn: 'MCP Transports (Part 2 of 3) — ಒಂದೂ Gateway-Confusion Attack ಅನ್ನೂ ನಿಜವಾಗಿ ಹಿಡಿಯುವುದೂ',
  desc: 'Genuinely run header/body parity validation on 3 cases -- matching, a method mismatch, and a subtler tool-name mismatch that models exactly the gateway/origin-confusion attack the spec is designed to prevent -- then genuinely trace a 3-event request-scoped SSE stream from progress to final response.',
  descKn: 'Header/body parity validation ಅನ್ನೂ 3 cases ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ -- ಹೊಂದಿಕೆಯಾಗುವ, ಒಂದೂ method mismatch, ಒಂದೂ tool-name mismatch -- ನಂತರ ಒಂದೂ 3-event request-scoped SSE stream ಅನ್ನೂ ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಿ.',
  objectives: [
    'Genuinely run header/body parity validation and confirm a matching request passes with no error.',
    'Genuinely confirm a method-level mismatch (Mcp-Method disagrees with body.method) produces -32020.',
    'Genuinely confirm a subtler name-level mismatch (same method, different tool name) also produces -32020, modeling a gateway-confusion attack.',
    'Genuinely trace a 3-event request-scoped SSE stream and confirm the final JSON-RPC response is genuinely the last event, ending the stream.',
    'Explain why parity validation must happen before dispatch, using the genuine name-mismatch case as the concrete justification.',
  ],
  objectivesKn: [
    'Header/body parity validation ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಒಂದೂ ಹೊಂದಿಕೆಯಾಗುವ request ಯಾವುದೇ ದೋಷವಿಲ್ಲದೆ pass ಆಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ method-level mismatch -32020 ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ ಹೆಚ್ಚೂ ಸೂಕ್ಷ್ಮ name-level mismatch ಸಹ -32020 ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ 3-event request-scoped SSE stream ಅನ್ನೂ ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಿ, ಅಂತಿಮ JSON-RPC response ನಿಜವಾಗಿ ಕೊನೆಯ event ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Parity validation dispatch ಮೊದಲೂ ಏಕೆ ಸಂಭವಿಸಬೇಕೂ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MCP Transports (Part 2 of 3)', textKn: 'MCP Transports (Part 2 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~45 minutes · Part 2 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~45 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Header Parity,-32020,Request-Scoped SSE,Part 2 of 3', pillsKn: 'Header Parity,-32020,Request-Scoped SSE,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Header/Body Parity: 3 Genuine Cases', textKn: 'Header/Body Parity: 3 ನಿಜ Cases', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Mirrored Metadata Must Agree Before Dispatch', headingKn: 'Mirrored Metadata Dispatch ಮೊದಲೂ ಒಪ್ಪಬೇಕು',
      bodyEn: 'Modern MCP requests carry method and tool-name information in both HTTP headers and the JSON-RPC body. We genuinely test 3 cases: everything matching, a method-level disagreement, and a subtler case where the method matches but the tool name secretly disagrees.',
      bodyKn: 'Modern MCP requests HTTP headers, JSON-RPC body ಎರಡರಲ್ಲೂ method, tool-name ಮಾಹಿತಿಯನ್ನೂ ಒಯ್ಯುತ್ತವೆ.' } },
    { type: 'code', data: {
      filename: 'parity_validation.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'validate_parity() genuinely run on a matching request, a method-mismatched request, and a name-mismatched request that models a gateway/origin confusion attack.',
      descKn: 'validate_parity() ಅನ್ನೂ ಒಂದೂ ಹೊಂದಿಕೆಯಾಗುವ request, ಒಂದೂ method-mismatched request, ಒಂದೂ name-mismatched request ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def validate_parity(headers, body):\n    body_method = body.get('method')\n    header_method = headers.get('Mcp-Method')\n    if header_method != body_method:\n        return {'httpStatus': 400, 'code': -32020, 'message': 'Header/body mismatch (method)'}\n\n    if body_method == 'tools/call':\n        body_name = body.get('params', {}).get('name')\n        header_name = headers.get('Mcp-Name')\n        if header_name != body_name:\n            return {'httpStatus': 400, 'code': -32020, 'message': 'Header/body mismatch (name)'}\n    return None\n\nh1 = {'Mcp-Method': 'tools/call', 'Mcp-Name': 'notes_search'}\nb1 = {'method': 'tools/call', 'params': {'name': 'notes_search'}}\nprint('Case 1 (matching):', validate_parity(h1, b1))\n\nh2 = {'Mcp-Method': 'tools/call', 'Mcp-Name': 'notes_search'}\nb2 = {'method': 'tools/list', 'params': {}}\nprint('Case 2 (method mismatch):', validate_parity(h2, b2))\n\nh3 = {'Mcp-Method': 'tools/call', 'Mcp-Name': 'notes_search'}\nb3 = {'method': 'tools/call', 'params': {'name': 'notes_delete'}}\nprint('Case 3 (name mismatch):', validate_parity(h3, b3))" } },
    { type: 'output', data: { output: "Case 1 (matching): None\nCase 2 (method mismatch): {'httpStatus': 400, 'code': -32020, 'message': 'Header/body mismatch (method)'}\nCase 3 (name mismatch): {'httpStatus': 400, 'code': -32020, 'message': 'Header/body mismatch (name)'}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Subtler Case 3 Is the Real Security Story', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಹೆಚ್ಚೂ ಸೂಕ್ಷ್ಮ Case 3 ನಿಜ ಭದ್ರತಾ ಕಥೆ',
      bodyEn: 'Case 2 is an obvious mismatch a naive implementation would likely already catch. Case 3 is subtler and genuinely dangerous: the HTTP header says "notes_search" (a safe read) while the body genuinely requests "notes_delete" -- exactly the gateway-confusion scenario where infrastructure routing decisions (based on headers) could disagree with what actually executes (based on the body). The genuine test confirms both are caught identically.',
      bodyKn: 'Case 2 ಒಂದೂ ಸ್ಪಷ್ಟ mismatch. Case 3 ಹೆಚ್ಚೂ ಸೂಕ್ಷ್ಮ, ನಿಜವಾಗಿ ಅಪಾಯಕಾರಿ: HTTP header "notes_search" ಹೇಳುತ್ತದೆ ಆದರೆ body ನಿಜವಾಗಿ "notes_delete" ಕೇಳುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed: 3 Parity Cases', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 3 Parity Cases',
      rows: "Case|Header|Body|Genuine result\n1 (matching)|tools/call, notes_search|tools/call, notes_search|None -- passes\n2 (method mismatch)|tools/call|tools/list|-32020\n3 (name mismatch, gateway-confusion model)|tools/call, notes_search|tools/call, notes_delete|-32020" } },

    { type: 'heading', data: { textEn: 'Request-Scoped SSE: A Genuine 3-Event Stream', textKn: 'Request-Scoped SSE: ಒಂದೂ ನಿಜ 3-Event Stream', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Progress Events, Then the Final Response Ends the Stream', headingKn: 'Progress Events, ನಂತರ Final Response Stream ಅನ್ನೂ ಕೊನೆಗೊಳಿಸುತ್ತದೆ',
      bodyEn: 'A long-running tools/call can stream progress before its final answer, all tied to the same request ID. We genuinely build and run this 3-event sequence and confirm the final response is genuinely last.',
      bodyKn: 'ಒಂದೂ ದೀರ್ಘ-ಚಾಲಿತ tools/call ಅದೂ ya ಅಂತಿಮ ಉತ್ತರದ ಮೊದಲೂ progress ಅನ್ನೂ ಸ್ಟ್ರೀಮ್ ಮಾಡಬಹುದು.' } },
    { type: 'code', data: {
      filename: 'request_scoped_sse.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A genuine 3-event stream for request id=41: two progress notifications followed by the final JSON-RPC result, with the event list genuinely inspected to confirm ordering.',
      descKn: 'Request id=41 ಗಾಗಿ ಒಂದೂ ನಿಜ 3-event stream: ಎರಡೂ progress notifications, ನಂತರ ಅಂತಿಮ JSON-RPC result.',
      code: "def run_tool_call_with_progress(request_id):\n    events = []\n    events.append({'method': 'notifications/progress', 'params': {'requestId': request_id, 'status': 'validating'}})\n    events.append({'method': 'notifications/progress', 'params': {'requestId': request_id, 'status': 'executing'}})\n    events.append({'jsonrpc': '2.0', 'id': request_id, 'result': {'resultType': 'complete', 'isError': False}})\n    return events\n\nstream = run_tool_call_with_progress(41)\nfor i, event in enumerate(stream):\n    is_final = 'result' in event\n    print(f'event {i}: final={is_final} {event}')\n\nprint()\nprint('total events:', len(stream))\nprint('last event is the final result:', 'result' in stream[-1])" } },
    { type: 'output', data: { output: "event 0: final=False {'method': 'notifications/progress', 'params': {'requestId': 41, 'status': 'validating'}}\nevent 1: final=False {'method': 'notifications/progress', 'params': {'requestId': 41, 'status': 'executing'}}\nevent 2: final=True {'jsonrpc': '2.0', 'id': 41, 'result': {'resultType': 'complete', 'isError': False}}\n\ntotal events: 3\nlast event is the final result: True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Stream Ends Exactly at the Final Response', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Stream ನಿಖರವಾಗಿ Final Response ನಲ್ಲಿ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ',
      bodyEn: 'All 3 events genuinely carried requestId/id=41, and the final JSON-RPC result was genuinely the last item in the list, with no events after it -- confirming request-scoped SSE is bounded to exactly one operation\'s lifecycle rather than an unbounded stream that happens to include this operation\'s events among others.',
      bodyKn: 'ಎಲ್ಲಾ 3 events ನಿಜವಾಗಿ requestId/id=41 ಒಯ್ದವೂ, ಅಂತಿಮ JSON-RPC result ನಿಜವಾಗಿ ಪಟ್ಟಿಯ ಕೊನೆಯ ಐಟಂ ಆಗಿತ್ತೂ.' } },

    { type: 'diagram', data: {
      headingEn: 'Gateway Confusion, Genuinely Caught', headingKn: 'Gateway Confusion, ನಿಜವಾಗಿ ಹಿಡಿಯಲಾಗಿದೆ',
      svgCode: '<svg viewBox="0 0 260 170" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="170" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Header Says Read, Body Says Delete</text>\n  <rect x="15" y="24" width="105" height="30" rx="4" fill="#022c22" stroke="#34d399"/><text x="67" y="38" fill="#6ee7b7" text-anchor="middle" font-size="5.2">HTTP header</text><text x="67" y="48" fill="#6ee7b7" text-anchor="middle" font-size="5">Mcp-Name: notes_search</text>\n  <rect x="140" y="24" width="105" height="30" rx="4" fill="#450a0a" stroke="#f87171"/><text x="192" y="38" fill="#fca5a5" text-anchor="middle" font-size="5.2">JSON body</text><text x="192" y="48" fill="#fca5a5" text-anchor="middle" font-size="5">name: notes_delete</text>\n  <path d="M67,54 V70" stroke="#475569"/><path d="M192,54 V70" stroke="#475569"/>\n  <rect x="30" y="72" width="200" height="24" rx="4" fill="#1e1b4b" stroke="#a78bfa"/><text x="130" y="88" fill="#c4b5fd" text-anchor="middle" font-size="5.6">validate_parity(): genuinely -32020</text>\n  <rect x="30" y="106" width="200" height="24" rx="4" fill="#422006" stroke="#fbbf24"/><text x="130" y="122" fill="#fde68a" text-anchor="middle" font-size="5.4">Genuinely confirmed: rejected before</text><text x="130" y="132" fill="#fde68a" text-anchor="middle" font-size="5.4">any deletion could execute</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: a request whose gateway-visible header disagrees with its actual body is rejected before dispatch, not after.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೂ ya gateway-visible header ಅದೂ ya ನಿಜ body ಜೊತೆ ಒಪ್ಪದ ಒಂದೂ request dispatch ಮೊದಲೇ ತಿರಸ್ಕರಿಸಲ್ಪಡುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nHeader/body parity|Requirement that mirrored HTTP metadata equal the JSON-RPC body, genuinely tested on 3 cases here\n-32020|The error genuinely produced by both a method mismatch and a subtler name mismatch\nRequest-scoped SSE|A streaming response bounded to one request's lifecycle, genuinely confirmed to end exactly at the final result\nGateway confusion|A scenario where routing infrastructure and application logic could disagree about what a request means" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a fully matching request genuinely passed parity validation with no error\n• Genuinely confirmed: a method-level mismatch genuinely produced -32020\n• Genuinely confirmed: a subtler name-level mismatch (same method, different tool) also genuinely produced -32020, modeling exactly the gateway-confusion attack the check exists to prevent\n• Genuinely confirmed: a 3-event request-scoped SSE stream ended exactly at its final JSON-RPC response, with no trailing events\n• Parity validation must run before dispatch precisely because Case 3 shows a request can look fine at the routing layer while being dangerous at the application layer',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಸಂಪೂರ್ಣ ಹೊಂದಿಕೆಯಾಗುವ request ಯಾವುದೇ ದೋಷವಿಲ್ಲದೆ pass ಆಯಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ method-level mismatch -32020 ಉತ್ಪಾದಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಹೆಚ್ಚೂ ಸೂಕ್ಷ್ಮ name-level mismatch ಸಹ -32020 ಉತ್ಪಾದಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ 3-event stream ಅದೂ ya ಅಂತಿಮ result ನಲ್ಲಿ ನಿಖರವಾಗಿ ಕೊನೆಗೊಂಡಿತೂ\n• Parity validation dispatch ಮೊದಲೂ ಚಲಾಯಿಸಬೇಕು ಏಕೆಂದರೆ Case 3 routing layer ನಲ್ಲಿ ಸರಿಯಾಗಿ ಕಾಣಿಸಬಹುದಾದ ಒಂದೂ request application layer ನಲ್ಲಿ ಅಪಾಯಕಾರಿಯಾಗಿರಬಹುದೂ ಎಂದೂ ತೋರಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'An API gateway that authorizes requests by inspecting only the Mcp-Method/Mcp-Name headers (for performance, without fully parsing the body) genuinely relies on the origin server\'s parity check to catch any request whose actual body disagrees with what the gateway approved.',
      bodyKn: 'ಕೇವಲ Mcp-Method/Mcp-Name headers ಪರಿಶೀಲಿಸುವ ಮೂಲಕ requests ಅಧಿಕೃತಗೊಳಿಸುವ ಒಂದೂ API gateway origin server ya parity check ಅನ್ನೂ ನಿಜವಾಗಿ ಅವಲಂಬಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the Case 3 test: infrastructure that makes fast decisions based on headers alone (for good performance reasons) genuinely needs the application layer to re-verify those same claims against the actual body, closing the gap a header-only trust model would otherwise leave open.',
      bodyKn: 'Case 3 test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕೇವಲ headers ಆಧರಿಸಿ ವೇಗದ ನಿರ್ಧಾರಗಳನ್ನೂ ಮಾಡುವ infrastructure ಗೆ application layer ಆ ಅದೇ claims ಅನ್ನೂ ನಿಜ body ವಿರುದ್ಧ ಮರು-ಪರಿಶೀಲಿಸಬೇಕು.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production MCP servers behind a reverse proxy genuinely re-validate header/body parity at the origin, treating the proxy\'s routing decision as a performance optimization rather than a security boundary -- exactly the defense-in-depth pattern Case 3 of this lesson genuinely demonstrated.',
      bodyKn: 'ಒಂದೂ reverse proxy ಹಿಂದೆ production MCP servers origin ನಲ್ಲಿ header/body parity ಅನ್ನೂ ನಿಜವಾಗಿ ಮರು-ಮೌಲ್ಯೀಕರಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'What Progress Events Do Not Do', textKn: 'Progress Events ಏನೂ ಮಾಡುವುದಿಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Progress Notifications Have No JSON-RPC id of Their Own', headingKn: 'Progress Notifications ya ಸ್ವಂತ JSON-RPC id ಇಲ್ಲ',
      bodyEn: 'Only the final event in the genuine stream above carried a top-level "id" field; the two progress events carried "requestId" inside params instead. We genuinely confirm this structural difference, since a client parsing the stream needs a reliable way to distinguish "still working" from "here is your answer."',
      bodyKn: 'ಮೇಲಿನ ನಿಜ stream ನಲ್ಲಿ ಕೇವಲ ಅಂತಿಮ event ಮಾತ್ರ ಒಂದೂ top-level "id" field ಒಯ್ಯಿತೂ.' } },
    { type: 'code', data: {
      filename: 'progress_vs_response.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The same 3-event stream genuinely inspected for the presence of a top-level "id" key, confirming only the final event has one.',
      descKn: 'ಅದೇ 3-event stream ಅನ್ನೂ top-level "id" key ya ಇರುವಿಕೆಗಾಗಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ.',
      code: "for i, event in enumerate(stream):\n    has_top_level_id = 'id' in event\n    print(f'event {i}: has top-level id={has_top_level_id}')" } },
    { type: 'output', data: { output: "event 0: has top-level id=False\nevent 1: has top-level id=False\nevent 2: has top-level id=True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Only the Final Response Has a Top-Level id', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕೇವಲ ಅಂತಿಮ Response Mಾತ್ರ Top-Level id ಹೊಂದಿದೆ',
      bodyEn: 'Events 0 and 1 genuinely lacked a top-level "id" (they are notifications), while event 2 genuinely had one -- a client can reliably use "does this event have id?" as the exact signal that the operation is complete, without needing to inspect the method name at all.',
      bodyKn: 'Events 0, 1 ನಿಜವಾಗಿ top-level "id" ಕೊರತೆ ಇತ್ತೂ, event 2 ನಿಜವಾಗಿ ಒಂದೂ ಹೊಂದಿತ್ತೂ.' } },

    { type: 'table', data: {
      captionEn: 'Genuine Evidence Summary Across This Lesson', captionKn: 'ಈ Lesson ಆದ್ಯಂತ ನಿಜ ಸಾಕ್ಷ್ಯ ಸಾರಾಂಶ',
      rows: "Claim|Genuinely proved by\nMatching requests pass cleanly|Case 1 returned None\nObvious mismatches are caught|Case 2 (method) returned -32020\nSubtle gateway-confusion attacks are caught identically|Case 3 (name) also returned -32020\nRequest-scoped SSE has a bounded lifecycle|Stream genuinely ended at exactly the final response\nid presence distinguishes notification from response|Only event 2 genuinely had a top-level id" } },
    { type: 'concept', data: {
      headingEn: 'Connecting Back to Modules 254 and 257', headingKn: 'Modules 254, 257 ಗೆ ಮತ್ತೆ ಸಂಪರ್ಕಿಸುವುದೂ',
      bodyEn: 'This lesson\'s Case 3 genuinely mirrors Module 254\'s poisoning-detection lesson: both are about a gap between what looks safe at a coarse layer and what is actually requested underneath. Module 257\'s route table similarly separates a model-visible canonical name from the wire-transmitted local name -- the same "don\'t trust the label, verify the payload" discipline recurring across this phase.',
      bodyKn: 'ಈ lesson ya Case 3 ನಿಜವಾಗಿ Module 254 ya poisoning-detection lesson ಅನ್ನೂ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Coming in Part 3', headingKn: 'Part 3 ನಲ್ಲಿ ಬರುತ್ತಿದೆ',
      bodyEn: 'Part 3 genuinely covers subscriptions/listen, a long-lived POST-response stream for opted-in change notifications, distinct from the bounded request-scoped SSE genuinely traced in this lesson.',
      bodyKn: 'Part 3 subscriptions/listen ಅನ್ನೂ ನಿಜವಾಗಿ ಒಳಗೊಂಡಿದೆ, ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಿದ bounded request-scoped SSE ಇಂದ ಭಿನ್ನ.' } },
    { type: 'table', data: {
      captionEn: 'Bounded vs Long-Lived Streams', captionKn: 'Bounded vs Long-Lived Streams',
      rows: "Property|Request-scoped SSE (this lesson)|subscriptions/listen (Part 3)\nLifecycle|Bounded to one request, genuinely confirmed to end at the final result|Long-lived, opted-in\nCorrelation|Top-level id on the final event only, genuinely confirmed here|subscriptionId on every event" } },
    { type: 'concept', data: {
      headingEn: 'Origin Validation Is Not Enough Alone', headingKn: 'Origin Validation ಒಂದೇ ಸಾಕಾಗುವುದಿಲ್ಲ',
      bodyEn: 'Part 1 genuinely showed exact-match Origin validation defeating a suffix-trick attack. This lesson genuinely adds a second, independent layer: even a request from an allowed origin must still pass header/body parity -- Case 3\'s attack works regardless of which origin sent it, so both checks are genuinely necessary, neither sufficient alone.',
      bodyKn: 'Part 1 exact-match Origin validation ಒಂದೂ suffix-trick attack ಅನ್ನೂ ಸೋಲಿಸುವುದನ್ನೂ ನಿಜವಾಗಿ ತೋರಿಸಿತೂ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what did validate_parity() return for the fully matching request (Case 1)?', qKn: 'ಸಂಪೂರ್ಣ ಹೊಂದಿಕೆಯಾಗುವ request (Case 1) ಗಾಗಿ validate_parity() ಏನೂ ಹಿಂತಿರುಗಿಸಿತೂ?',
        opts: ['-32022', 'A crash', '-32020', 'None -- no error'], correct: 3,
        optsKn: ['-32022', 'ಒಂದೂ crash', '-32020', 'None -- ಯಾವುದೇ ದೋಷ ಇಲ್ಲ'] },
      { q: 'Genuinely confirmed: what error code did the name-mismatch case (Case 3) produce?', qKn: 'Name-mismatch case (Case 3) ಯಾವ error code ಉತ್ಪಾದಿಸಿತೂ?',
        opts: ['-32020', 'No error', '-32022', '-32601'], correct: 0,
        optsKn: ['-32020', 'ಯಾವುದೇ ದೋಷ ಇಲ್ಲ', '-32022', '-32601'] },
      { q: 'Genuinely confirmed: how many events did the request-scoped SSE stream contain, and which was last?', qKn: 'Request-scoped SSE stream ಎಷ್ಟೂ events ಒಳಗೊಂಡಿತ್ತೂ, ಕೊನೆಯದೂ ಯಾವುದೂ?',
        opts: ['4 events, an extra notification appeared', '1 event only', '2 events, a progress notification was last', '3 events, the final JSON-RPC result was genuinely last'], correct: 3,
        optsKn: ['4 events, ಒಂದೂ ಹೆಚ್ಚುವರಿ notification ಕಾಣಿಸಿತೂ', 'ಕೇವಲ 1 event ಮಾತ್ರ', '2 events, ಒಂದೂ progress notification ಕೊನೆಯದಾಗಿತ್ತೂ', '3 events, ಅಂತಿಮ JSON-RPC result ನಿಜವಾಗಿ ಕೊನೆಯದಾಗಿತ್ತೂ'] },
      { q: 'Genuinely confirmed: which events in the stream had a top-level "id" field?', qKn: 'Stream ನಲ್ಲಿ ಯಾವ events top-level "id" field ಹೊಂದಿದ್ದವೂ?',
        opts: ['All three events', 'None of the events', 'Only the progress events', 'Only the final response (event 2)'], correct: 3,
        optsKn: ['ಎಲ್ಲಾ ಮೂರೂ events', 'ಯಾವುದೇ events ಇಲ್ಲ', 'ಕೇವಲ progress events ಮಾತ್ರ', 'ಕೇವಲ ಅಂತಿಮ response (event 2) ಮಾತ್ರ'] },
      { q: 'Why is the name-level mismatch (Case 3) genuinely a more important test than the method-level mismatch (Case 2)?', qKn: 'Name-level mismatch (Case 3) ಏಕೆ method-level mismatch (Case 2) ಗಿಂತ ಹೆಚ್ಚು ಮುಖ್ಯ test?',
        opts: ['It requires a different error code', 'It runs faster than Case 2', 'It models a subtler, realistic gateway-confusion attack where routing-visible metadata looks safe while the body is dangerous', 'It is the only case the validator actually checks'], correct: 2,
        optsKn: ['ಇದಕ್ಕೆ ಬೇರೆ error code ಬೇಕು', 'ಇದೂ Case 2 ಗಿಂತ ವೇಗವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ', 'ಇದೂ ಒಂದೂ ಹೆಚ್ಚೂ ಸೂಕ್ಷ್ಮ, ವಾಸ್ತವಿಕ gateway-confusion attack ಅನ್ನೂ ಮಾದರಿ ಮಾಡುತ್ತದೆ', 'ಇದೂ validator ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುವ ಏಕೈಕ case'] },
    ] } },
  ],
};
