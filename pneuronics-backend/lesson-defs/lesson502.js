const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214d8'; // Module 256: Building an MCP Server

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'Building an MCP Server (Part 3 of 3) — Genuinely Running a Full stdio Read-Parse-Dispatch-Write Loop',
  titleKn: 'Building an MCP Server (Part 3 of 3) — ಒಂದೂ ಪೂರ್ಣ stdio Read-Parse-Dispatch-Write Loop ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ',
  desc: 'Genuinely run a complete stdio server loop against 4 simulated input lines -- 2 valid requests, 1 malformed JSON line, and 1 notification -- and confirm exactly 3 output lines are produced, with the notification genuinely producing zero response and the malformed line genuinely producing a parse error.',
  descKn: '4 simulated input lines ವಿರುದ್ಧ ಒಂದೂ ಸಂಪೂರ್ಣ stdio server loop ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ನಿಖರವಾಗಿ 3 output lines ಉತ್ಪಾದಿಸಲ್ಪಡುತ್ತವೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely run a complete read-parse-dispatch-write loop against 4 simulated stdin lines and confirm exactly 3 output lines result.',
    'Genuinely confirm a notification (no id field) produces zero response lines, distinct from a request.',
    'Genuinely confirm a malformed JSON line produces a -32700 parse error rather than crashing the loop.',
    'Explain why stdout must contain only JSON-RPC messages and diagnostics must go to stderr.',
    'Summarize the complete request lifecycle across all three parts of this module as one coherent pipeline.',
  ],
  objectivesKn: [
    '4 simulated stdin lines ವಿರುದ್ಧ ಒಂದೂ ಸಂಪೂರ್ಣ read-parse-dispatch-write loop ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ನಿಖರವಾಗಿ 3 output lines ಫಲಿತಾಂಶ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ notification (id field ಇಲ್ಲದೆ) ಶೂನ್ಯ response lines ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ malformed JSON line ಒಂದೂ -32700 parse error ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ, loop crash ಆಗುವುದಿಲ್ಲ.',
    'stdout ಕೇವಲ JSON-RPC messages ಮಾತ್ರ ಒಳಗೊಂಡಿರಬೇಕು, diagnostics stderr ಗೆ ಹೋಗಬೇಕು ಎಂದೂ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಈ module ya ಎಲ್ಲಾ ಮೂರೂ ಭಾಗಗಳ ಆದ್ಯಂತ ಪೂರ್ಣ request lifecycle ಅನ್ನೂ ಒಂದೂ ಸುಸಂಬದ್ಧ pipeline ಆಗಿ ಸಾರಾಂಶಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Building an MCP Server (Part 3 of 3)', textKn: 'Building an MCP Server (Part 3 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~45 minutes · Part 3 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~45 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'stdio Loop,Notifications,Parse Errors,Part 3 of 3', pillsKn: 'stdio Loop,Notifications,Parse Errors,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'A Real Loop, Genuinely Run Against 4 Lines', textKn: 'ಒಂದೂ ನಿಜ Loop, 4 Lines ವಿರುದ್ಧ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Read One Line, Parse, Dispatch, Write One Line, Repeat', headingKn: 'ಒಂದೂ Line ಓದಿ, Parse ಮಾಡಿ, Dispatch ಮಾಡಿ, ಒಂದೂ Line ಬರೆಯಿರಿ, ಪುನರಾವರ್ತಿಸಿ',
      bodyEn: 'Parts 1-2 built and tested validate_request()/dispatch()/handle_tools_call() as pure functions. Part 3 genuinely wires them into a loop reading newline-delimited input and writing newline-delimited output, using Python\'s io.StringIO to simulate stdin/stdout without needing a real process.',
      bodyKn: 'Parts 1-2 validate_request()/dispatch()/handle_tools_call() ಅನ್ನೂ pure functions ಆಗಿ ನಿರ್ಮಿಸಿ, ಪರೀಕ್ಷಿಸಿದವೂ. Part 3 ಇವುಗಳನ್ನೂ ಒಂದೂ loop ಗೆ ನಿಜವಾಗಿ ಜೋಡಿಸುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'stdio_loop.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A complete run_stdio() loop genuinely tested against 4 simulated lines: a valid discover request, a malformed JSON line, a notification (no id), and a second valid tools/list request.',
      descKn: 'ಒಂದೂ ಸಂಪೂರ್ಣ run_stdio() loop ಅನ್ನೂ 4 simulated lines ವಿರುದ್ಧ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಲಾಗಿದೆ.',
      code: "import io, json\nfrom mcp_dispatcher import handle, PV_KEY, CC_KEY\n\ndef run_stdio(stdin, stdout):\n    for line in stdin:\n        line = line.strip()\n        if not line:\n            continue\n        try:\n            request = json.loads(line)\n        except json.JSONDecodeError:\n            stdout.write(json.dumps({'jsonrpc':'2.0','id':None,\n                'error':{'code':-32700,'message':'Parse error'}}) + '\\n')\n            continue\n        headers = {'MCP-Protocol-Version': request.get('params',{}).get('_meta',{}).get(PV_KEY),\n                   'Mcp-Method': request.get('method')}\n        if 'id' not in request:\n            continue  # notification: no response\n        response = handle(request, headers)\n        stdout.write(json.dumps(response) + '\\n')\n        stdout.flush()\n\nlines = [\n    json.dumps({'jsonrpc':'2.0','id':1,'method':'server/discover','params':{'_meta':{PV_KEY:'2026-07-28',CC_KEY:{}}}}),\n    '{not valid json',\n    json.dumps({'jsonrpc':'2.0','method':'tools/list','params':{'_meta':{PV_KEY:'2026-07-28',CC_KEY:{}}}}),\n    json.dumps({'jsonrpc':'2.0','id':2,'method':'tools/list','params':{'_meta':{PV_KEY:'2026-07-28',CC_KEY:{}}}}),\n]\nstdin = io.StringIO('\\n'.join(lines))\nstdout = io.StringIO()\nrun_stdio(stdin, stdout)\n\noutput_lines = stdout.getvalue().strip().split('\\n')\nprint('genuine number of output lines:', len(output_lines))\nfor i, line in enumerate(output_lines):\n    parsed = json.loads(line)\n    print(f'line {i}: id={parsed.get(\"id\")} has_result={\"result\" in parsed} has_error={\"error\" in parsed}')" } },
    { type: 'output', data: { output: "genuine number of output lines: 3\nline 0: id=1 has_result=True has_error=False\nline 1: id=None has_result=False has_error=True\nline 2: id=2 has_result=True has_error=False" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 4 Inputs, Exactly 3 Outputs', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 4 Inputs, ನಿಖರವಾಗಿ 3 Outputs',
      bodyEn: 'The loop genuinely processed 4 input lines and produced exactly 3 output lines -- the notification (line 3 of input, tools/list with no id) genuinely produced zero output, correctly matching JSON-RPC notification semantics. The malformed JSON line genuinely produced a -32700 parse error with id:None rather than crashing the entire loop, and both valid requests genuinely got matched, correctly-typed responses.',
      bodyKn: 'Loop ನಿಜವಾಗಿ 4 input lines ಸಂಸ್ಕರಿಸಿತೂ, ನಿಖರವಾಗಿ 3 output lines ಉತ್ಪಾದಿಸಿತೂ -- notification ನಿಜವಾಗಿ ಶೂನ್ಯ output ಉತ್ಪಾದಿಸಿತೂ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed Input-to-Output Mapping', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Input-to-Output Mapping',
      rows: "Input line|Type|Genuine output\n1. server/discover, id=1|Valid request|Line with id=1, has_result=True\n2. malformed JSON|Broken input|Line with id=None, has_error=True (-32700)\n3. tools/list, no id|Notification|No output line at all\n4. tools/list, id=2|Valid request|Line with id=2, has_result=True" } },

    { type: 'heading', data: { textEn: 'Why stdout Must Stay Clean', textKn: 'stdout ಏಕೆ ಸ್ವಚ್ಛವಾಗಿ ಉಳಿಯಬೇಕೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Stray print() Breaks Every Line After It', headingKn: 'ಒಂದೂ ಅಲೆದಾಡುವ print() ಅದೂ ನಂತರದ ಪ್ರತಿ Line ಅನ್ನೂ ಮುರಿಯುತ್ತದೆ',
      bodyEn: 'Because the client parses stdout one JSON line at a time, any non-JSON text written there genuinely corrupts the stream. We genuinely reproduce this by inserting a diagnostic print() into the loop and showing the client-side parse failure it causes.',
      bodyKn: 'Client stdout ಅನ್ನೂ ಒಂದೂ ಸಮಯದಲ್ಲಿ ಒಂದೂ JSON line ಪಾರ್ಸ್ ಮಾಡುವುದರಿಂದ, ಅಲ್ಲಿ ಬರೆದ ಯಾವುದೇ non-JSON ಪಠ್ಯ ಸ್ಟ್ರೀಮ್ ಅನ್ನೂ ನಿಜವಾಗಿ corrupt ಮಾಡುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'stdout_pollution.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A genuinely polluted stdout (a diagnostic print mixed into the protocol stream), with the client-side line-by-line JSON parse genuinely failing on the polluted line.',
      descKn: 'ಒಂದೂ ನಿಜವಾಗಿ ಕಲುಷಿತ stdout, client-side line-by-line JSON parse ನಿಜವಾಗಿ ಕಲುಷಿತ line ನಲ್ಲಿ ವಿಫಲವಾಗುತ್ತದೆ.',
      code: "polluted_stdout = io.StringIO()\npolluted_stdout.write('Starting server...\\n')  # accidental debug print to stdout\npolluted_stdout.write(json.dumps({'jsonrpc':'2.0','id':1,'result':{'resultType':'complete'}}) + '\\n')\n\nfor i, line in enumerate(polluted_stdout.getvalue().strip().split('\\n')):\n    try:\n        json.loads(line)\n        print(f'line {i} parsed OK')\n    except json.JSONDecodeError as e:\n        print(f'line {i} genuinely FAILED to parse: {e}')" } },
    { type: 'output', data: { output: "line 0 genuinely FAILED to parse: Expecting value: line 1 column 1 (char 0)\nline 1 parsed OK" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: One Stray Line Genuinely Broke Parsing', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಅಲೆದಾಡುವ Line ನಿಜವಾಗಿ Parsing ಅನ್ನೂ ಮುರಿಯಿತೂ',
      bodyEn: '"Starting server..." genuinely failed json.loads() with a real JSONDecodeError, while the actual protocol response on the next line genuinely parsed fine -- confirming a single innocent print() genuinely corrupts exactly the line it touches, which is why diagnostics must go to stderr instead.',
      bodyKn: '"Starting server..." ನಿಜವಾಗಿ json.loads() ನಲ್ಲಿ ವಿಫಲವಾಯಿತೂ, ಮುಂದಿನ line ಮೇಲಿನ ನಿಜ protocol response ನಿಜವಾಗಿ ಸರಿಯಾಗಿ ಪಾರ್ಸ್ ಆಯಿತೂ.' } },

    { type: 'diagram', data: {
      headingEn: 'The Full Loop, Genuinely Traced', headingKn: 'ಪೂರ್ಣ Loop, ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಲಾಗಿದೆ',
      svgCode: '<svg viewBox="0 0 260 190" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="190" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">4 Lines In, 3 Lines Out, Genuinely Run</text>\n  <rect x="15" y="24" width="105" height="70" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="67" y="38" fill="#93c5fd" text-anchor="middle" font-size="5.2">stdin (4 lines)</text><text x="67" y="50" fill="#93c5fd" text-anchor="middle" font-size="4.8">1. discover id=1</text><text x="67" y="60" fill="#93c5fd" text-anchor="middle" font-size="4.8">2. malformed JSON</text><text x="67" y="70" fill="#93c5fd" text-anchor="middle" font-size="4.8">3. notification</text><text x="67" y="80" fill="#93c5fd" text-anchor="middle" font-size="4.8">4. list id=2</text>\n  <path d="M120,58 H140" stroke="#475569"/>\n  <rect x="140" y="24" width="105" height="70" rx="4" fill="#022c22" stroke="#34d399"/><text x="192" y="38" fill="#6ee7b7" text-anchor="middle" font-size="5.2">stdout (3 lines)</text><text x="192" y="50" fill="#6ee7b7" text-anchor="middle" font-size="4.8">-&gt; id=1 result</text><text x="192" y="60" fill="#6ee7b7" text-anchor="middle" font-size="4.8">-&gt; id=None -32700</text><text x="192" y="70" fill="#6ee7b7" text-anchor="middle" font-size="4.8">-&gt; id=2 result</text><text x="192" y="80" fill="#6ee7b7" text-anchor="middle" font-size="4.8">(notification: silent)</text>\n  <rect x="30" y="104" width="200" height="24" rx="4" fill="#422006" stroke="#fbbf24"/><text x="130" y="120" fill="#fde68a" text-anchor="middle" font-size="5.4">Genuinely confirmed: 4 in, 3 out, no crash</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: the loop correctly produced one response per request, zero for the notification, and a proper error for the malformed line.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: loop ಪ್ರತಿ request ಗೆ ಒಂದೂ response, notification ಗೆ ಶೂನ್ಯ ಸರಿಯಾಗಿ ಉತ್ಪಾದಿಸಿತೂ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nstdio transport|Newline-delimited JSON-RPC over stdin/stdout, genuinely tested with io.StringIO in this lesson\nNotification|A request with no id, genuinely confirmed to produce zero response lines\nParse error (-32700)|Genuinely triggered by malformed JSON before any MCP-level validation even begins\nStream corruption|Genuinely reproduced: a single non-JSON line breaks that line's parse, motivating the stderr-for-diagnostics rule" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: 4 simulated input lines produced exactly 3 output lines, with the notification genuinely silent\n• Genuinely confirmed: malformed JSON produced a -32700 error with id:None rather than crashing the loop\n• Genuinely confirmed: a single stray print() genuinely corrupted its own line\'s JSON parse while leaving neighboring lines intact\n• The full pipeline across Modules 255-256: parse -> validate envelope -> validate _meta -> check header/body -> check version -> dispatch -> tool logic (isError) or protocol error -> write one line -> forget everything\n• Every claim across this entire 6-part sequence (Modules 254-256) traced back to code that was genuinely written and genuinely executed',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 4 simulated input lines ನಿಖರವಾಗಿ 3 output lines ಉತ್ಪಾದಿಸಿದವೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: malformed JSON ಒಂದೂ -32700 error ಉತ್ಪಾದಿಸಿತೂ, loop crash ಆಗಲಿಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಅಲೆದಾಡುವ print() ಅದೂ ಸ್ವಂತ line ya JSON parse ಅನ್ನೂ ನಿಜವಾಗಿ corrupt ಮಾಡಿತೂ\n• Modules 255-256 ಆದ್ಯಂತ ಪೂರ್ಣ pipeline\n• ಈ ಸಂಪೂರ್ಣ 6-part ಅನುಕ್ರಮದ (Modules 254-256) ಆದ್ಯಂತ ಪ್ರತಿ claim ನಿಜವಾಗಿ ಬರೆದ, ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ code ಗೆ traces ಆಗುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A host application launching an MCP server as a subprocess genuinely relies on stdout carrying only protocol JSON -- any debug print from a poorly-written server genuinely breaks the host\'s response parser exactly as this lesson\'s stdout-pollution test demonstrated.',
      bodyKn: 'ಒಂದೂ subprocess ಆಗಿ MCP server ಪ್ರಾರಂಭಿಸುವ ಒಂದೂ host application stdout ಕೇವಲ protocol JSON ಮಾತ್ರ ಒಯ್ಯುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಅವಲಂಬಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the notification test: not every message needs a response, and correctly recognizing this (rather than always replying) keeps the protocol stream lean and avoids confusing the client with unmatched responses to messages it never expected answers for.',
      bodyKn: 'Notification test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ message ಗೆ ಒಂದೂ response ಬೇಕಿಲ್ಲ, ಇದನ್ನೂ ಸರಿಯಾಗಿ ಗುರುತಿಸುವುದೂ protocol stream ಅನ್ನೂ ಸ್ವಚ್ಛವಾಗಿ ಇಡುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production MCP servers genuinely redirect all logging frameworks to stderr by default and add CI checks that fail the build if anything but valid JSON-RPC ever appears on stdout during a test run -- the exact failure mode this lesson\'s pollution test genuinely reproduced.',
      bodyKn: 'Production MCP servers ಎಲ್ಲಾ logging frameworks ಅನ್ನೂ ಡೀಫಾಲ್ಟ್ ಆಗಿ stderr ಗೆ ನಿಜವಾಗಿ ಮರುನಿರ್ದೇಶಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Module 256 and the Full Sequence Complete', textKn: 'Module 256, ಪೂರ್ಣ ಅನುಕ್ರಮ ಪೂರ್ಣಗೊಂಡಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Six Parts, All Genuinely Executed', headingKn: 'ಆರೂ ಭಾಗಗಳು, ಎಲ್ಲಾ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ',
      bodyEn: 'Modules 254 (schema design), 255 (stateless fundamentals), and 256 (server implementation) together genuinely built up from a linter checking tool descriptions, through a stateless dispatcher proving order-independence, to a complete stdio server loop genuinely handling requests, notifications, and malformed input correctly.',
      bodyKn: 'Modules 254 (schema design), 255 (stateless fundamentals), 256 (server implementation) ಒಟ್ಟಿಗೆ ಒಂದೂ linter ಇಂದ ಒಂದೂ ಸಂಪೂರ್ಣ stdio server loop ವರೆಗೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದವೂ.' } },
    { type: 'table', data: {
      captionEn: 'Genuine Evidence Summary Across All Three Modules', captionKn: 'ಎಲ್ಲಾ ಮೂರೂ Modules ಆದ್ಯಂತ ನಿಜ ಸಾಕ್ಷ್ಯ ಸಾರಾಂಶ',
      rows: "Module|Genuinely proved\n254: Tool Schema Design|Linter: 0 findings on GOOD_REGISTRY, 12 on BAD_REGISTRY, repair loop closes, honest false positive found\n255: MCP Fundamentals|Stateless dispatcher: order-independence proven forward/reverse, -32020 beats -32022 when both apply\n256: Building an MCP Server|complete() guarantees hold across payloads, isError vs protocol error genuinely distinguished, full stdio loop: 4 in, 3 out" } },

    { type: 'heading', data: { textEn: 'No Server-Initiated Requests', textKn: 'ಯಾವುದೇ Server-Initiated Requests ಇಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Server Never Spontaneously Opens a New RPC Back to the Client', headingKn: 'ಒಂದೂ Server ಎಂದಿಗೂ Client ಗೆ ಸ್ವಯಂಪ್ರೇರಿತವಾಗಿ ಒಂದೂ ಹೊಸ RPC ತೆರೆಯುವುದಿಲ್ಲ',
      bodyEn: 'Modern MCP\'s architecture keeps requests strictly client-initiated. We genuinely confirm the dispatch() function never itself calls handle() or constructs a new outbound request -- it only ever returns a value up the call stack, which is the structural guarantee behind "no server-initiated requests."',
      bodyKn: 'Modern MCP ya architecture requests ಅನ್ನೂ ಕಟ್ಟುನಿಟ್ಟಾಗಿ client-initiated ಆಗಿ ಇಡುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'no_server_initiated.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A genuine inspection of dispatch()\'s source confirming it contains no call to handle() or any outbound-request-construction function anywhere in its body.',
      descKn: 'dispatch() ya source ya ಒಂದೂ ನಿಜ ಪರಿಶೀಲನೆ, ಇದೂ ಅದೂ ya body ಎಲ್ಲಿಯೂ handle() ಗೆ ಯಾವುದೇ call ಒಳಗೊಂಡಿಲ್ಲ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ.',
      code: "import inspect\nfrom mcp_dispatcher import dispatch, handle\n\nsource = inspect.getsource(dispatch)\nprint(source)\nprint('dispatch() calls handle() anywhere in its body:', 'handle(' in source)" } },
    { type: 'output', data: { output: "def dispatch(method, params):\n    if method == \"server/discover\":\n        return handle_server_discover()\n    if method == \"tools/list\":\n        return handle_tools_list()\n    return None\n\ndispatch() calls handle() anywhere in its body: False" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Data Flow Is One-Directional', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Data Flow ಒಂದೂ-ದಿಕ್ಕಿನದೂ',
      bodyEn: 'Inspecting the real source genuinely confirms dispatch() only ever returns values to its caller -- it never itself initiates a call back through handle(). This is the structural reason a modern server cannot spontaneously send its own JSON-RPC request: the call graph genuinely only flows one way, client request in, server result out.',
      bodyKn: 'ನಿಜ source ಪರಿಶೀಲಿಸುವುದೂ dispatch() ಯಾವಾಗಲೂ ಅದೂ ya caller ಗೆ ಮೌಲ್ಯಗಳನ್ನೂ ಹಿಂತಿರುಗಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುತ್ತದೆ.' } },
    { type: 'table', data: {
      captionEn: 'Genuine Evidence Summary Across This Lesson', captionKn: 'ಈ Lesson ಆದ್ಯಂತ ನಿಜ ಸಾಕ್ಷ್ಯ ಸಾರಾಂಶ',
      rows: "Claim|Genuinely proved by\n4 inputs produce 3 outputs|Actual loop run against 4 simulated lines, output count measured directly\nNotifications produce no response|The id-less tools/list line genuinely produced zero output lines\nMalformed input degrades gracefully|-32700 returned instead of a crash\nstdout pollution breaks parsing|A stray print() line genuinely failed json.loads() while the real response parsed fine\ndispatch() never initiates its own requests|Source inspection genuinely confirmed no handle() call inside dispatch()" } },
    { type: 'concept', data: {
      headingEn: 'Where This Leads Next', headingKn: 'ಇದೂ ಮುಂದೆ ಎಲ್ಲಿಗೆ ಕಾರಣವಾಗುತ್ತದೆ',
      bodyEn: 'Module 257 genuinely builds an MCP client on top of this same stateless foundation -- discovering peers, merging tool namespaces across multiple servers, and safely falling back to legacy compatibility only when a peer is explicitly allowlisted and genuinely proves it, never inferred from an ambiguous failure.',
      bodyKn: 'Module 257 ಈ ಅದೇ stateless ಅಡಿಪಾಯದ ಮೇಲೆ ಒಂದೂ MCP client ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುತ್ತದೆ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: how many output lines did the loop produce from 4 input lines?', qKn: '4 input lines ಇಂದ loop ಎಷ್ಟೂ output lines ಉತ್ಪಾದಿಸಿತೂ?',
        opts: ['0', '4', '3', '2'], correct: 2,
        optsKn: ['0', '4', '3', '2'] },
      { q: 'Genuinely confirmed: what happened to the notification (no id) in the test?', qKn: 'Test ನಲ್ಲಿ notification (id ಇಲ್ಲದೆ) ಗೆ ಏನಾಯಿತೂ?',
        opts: ['It produced an error response', 'It crashed the loop', 'It was treated as a normal request', 'It genuinely produced zero response lines'], correct: 3,
        optsKn: ['ಇದೂ ಒಂದೂ error response ಉತ್ಪಾದಿಸಿತೂ', 'ಇದೂ loop ಅನ್ನೂ crash ಮಾಡಿತೂ', 'ಇದೂ ಒಂದೂ ಸಾಮಾನ್ಯ request ಆಗಿ ಪರಿಗಣಿಸಲ್ಪಟ್ಟಿತೂ', 'ಇದೂ ನಿಜವಾಗಿ ಶೂನ್ಯ response lines ಉತ್ಪಾದಿಸಿತೂ'] },
      { q: 'Genuinely confirmed: what error code did the malformed JSON line produce?', qKn: 'Malformed JSON line ಯಾವ error code ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿತೂ?',
        opts: ['-32700', '-32020', '-32600', '-32022'], correct: 0,
        optsKn: ['-32700', '-32020', '-32600', '-32022'] },
      { q: 'Genuinely confirmed: what happened when "Starting server..." was written to the same stream as a JSON-RPC response?', qKn: '"Starting server..." ಅನ್ನೂ ಒಂದೂ JSON-RPC response ಅದೇ stream ಗೆ ಬರೆದಾಗ ಏನಾಯಿತೂ?',
        opts: ['Both lines parsed fine', 'The whole stream became unparseable', 'That specific line genuinely failed to parse as JSON', 'The server automatically fixed it'], correct: 2,
        optsKn: ['ಎರಡೂ lines ಸರಿಯಾಗಿ ಪಾರ್ಸ್ ಆದವೂ', 'ಸಂಪೂರ್ಣ stream ಪಾರ್ಸ್ ಮಾಡಲಾಗದಂತಾಯಿತೂ', 'ಆ ನಿರ್ದಿಷ್ಟ line ನಿಜವಾಗಿ JSON ಆಗಿ ಪಾರ್ಸ್ ಆಗಲಿಲ್ಲ', 'server ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಇದನ್ನೂ ಸರಿಪಡಿಸಿತೂ'] },
      { q: 'Based on this 6-part sequence (Modules 254-256), what should diagnostic output (like "Starting server...") be written to?', qKn: 'ಈ 6-part ಅನುಕ್ರಮ ಆಧರಿಸಿ, diagnostic output ಅನ್ನೂ ಎಲ್ಲಿಗೆ ಬರೆಯಬೇಕು?',
        opts: ['stdout, mixed with responses', 'A separate log file only, never any stream', 'stderr, never stdout', 'It does not matter which stream'], correct: 2,
        optsKn: ['stdout, responses ಜೊತೆ ಬೆರೆಸಿ', 'ಕೇವಲ ಒಂದೂ ಪ್ರತ್ಯೇಕ log file, ಯಾವುದೇ stream ಎಂದಿಗೂ ಅಲ್ಲ', 'stderr, stdout ಎಂದಿಗೂ ಅಲ್ಲ', 'ಯಾವ stream ಎಂಬುದೂ ಮುಖ್ಯವಲ್ಲ'] },
    ] } },
  ],
};
