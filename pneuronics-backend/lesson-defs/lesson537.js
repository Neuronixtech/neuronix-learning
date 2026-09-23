const phaseId = '6a369d5e66020ed05b3214c3';
const moduleId = '6a369d6066020ed05b3214ff';

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'OpenTelemetry GenAI — Tracing Tool Calls End-to-End (Part 2 of 3) — MCP Propagation, Events, and Privacy',
  titleKn: 'OpenTelemetry GenAI — Tracing Tool Calls End-to-End (Part 2 of 3) — MCP Propagation, Events, ಮತ್ತೂ Privacy',
  desc: 'Genuinely construct a W3C traceparent header, verify its exact byte-length format, and genuinely prove a redactor strips a secret from an MCP tool_call event while leaving ordinary arguments untouched.',
  descKn: 'ಒಂದೂ W3C traceparent header ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಮತ್ತೂ ಅದರ ನಿಖರ byte-length format ಪರಿಶೀಲಿಸಿ.',
  objectives: [
    'Explain why tool.execute is typically INTERNAL while the MCP dispatch beneath it is CLIENT, and how gen_ai.tool.call.id differs from parentSpanId as a correlation mechanism.',
    'Genuinely construct a W3C traceparent value and verify its four-part structure and exact hex-length requirements.',
    'Explain the stdio propagation gap and why trace context travels through params._meta rather than an HTTP header when there is no HTTP transport.',
    'Genuinely prove a redactor removes a sensitive key from a tool-call event while leaving non-sensitive fields untouched, and explain why redaction must happen before export, not after.',
    'Distinguish span attributes (what is this operation) from span events (what happened during it), and explain why content capture should default to off.',
  ],
  objectivesKn: [
    'tool.execute ಸಾಮಾನ್ಯವಾಗಿ ಏಕೆ INTERNAL ಎಂದೂ ಅದರ ಕೆಳಗಿನ MCP dispatch CLIENT ಎಂದೂ ವಿವರಿಸಿ.',
    'ಒಂದೂ W3C traceparent value ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಮತ್ತೂ ಅದರ ನಾಲ್ಕೂ-ಭಾಗದ ರಚನೆ ಪರಿಶೀಲಿಸಿ.',
    'stdio propagation gap ವಿವರಿಸಿ.',
    'ಒಂದೂ redactor ಸೂಕ್ಷ್ಮ key ಅನ್ನೂ ತೆಗೆದುಹಾಕುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ.',
    'span attributes ಅನ್ನೂ span events ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'OpenTelemetry GenAI — Tracing Tool Calls End-to-End (Part 2 of 3)', textKn: 'OpenTelemetry GenAI — Tracing Tool Calls End-to-End (Part 2 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 of this module · Time: ~45 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: ಈ module ya Part 1 · Time: ~45 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'traceparent,W3C Trace Context,Redaction,Span Events', pillsKn: 'traceparent,W3C Trace Context,Redaction,Span Events' } },

    { type: 'heading', data: { textEn: 'Two Different Correlation Mechanisms', textKn: 'ಎರಡೂ ವಿಭಿನ್ನ Correlation Mechanisms', level: 'H2' } },
    { type: 'table', data: {
      headingEn: 'parentSpanId vs gen_ai.tool.call.id', headers: ['Mechanism', 'Answers'],
      rows: [
        ['parentSpanId', 'Where is this operation in the execution tree? (local ancestry)'],
        ['gen_ai.tool.call.id', 'Which specific model-requested tool invocation is this? (protocol correlation)'],
        ['traceparent', 'How does trace context cross a process/service boundary? (network propagation)'],
      ] } },
    { type: 'concept', data: {
      headingEn: 'Don\'t Confuse Execution Hierarchy With Tool-Call Correlation', headingKn: 'Execution Hierarchy ಅನ್ನೂ Tool-Call Correlation ಜೊತೆ ಗೊಂದಲಗೊಳಿಸಬೇಡಿ',
      bodyEn: 'tool.execute is usually a child of agent.invoke_agent (execution hierarchy), not of the llm.chat span that requested it (which would conflate "who is my parent in the call tree" with "which model output triggered me"). The LLM\'s requested tool_call.id and the tool span\'s gen_ai.tool.call.id are matched by VALUE, not by parent/child linkage.',
      bodyKn: 'tool.execute ಸಾಮಾನ್ಯವಾಗಿ agent.invoke_agent ya ಒಂದೂ child (execution hierarchy), ಅದನ್ನೂ ಕೋರಿದ llm.chat span ya child ಅಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Constructing a W3C traceparent', textKn: 'ಒಂದೂ W3C traceparent ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'otel_genai.py', headingEn: 'version-traceid-parentid-flags, genuinely verified byte lengths', headingKn: 'version-traceid-parentid-flags, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾದ byte lengths',
      descEn: 'The 32-hex-char trace-id and 16-hex-char parent-id are not arbitrary -- they are exactly the hex representations of the 16-byte and 8-byte IDs generated in Part 1. Splitting a genuinely-constructed traceparent and checking each segment\'s length proves the format is correct, not just plausible-looking.',
      descKn: '32-hex-char trace-id ಮತ್ತೂ 16-hex-char parent-id ಅನಿಯಂತ್ರಿತವಲ್ಲ -- ಅವು Part 1 ನಲ್ಲಿ ಉತ್ಪಾದಿಸಲಾದ 16-byte ಮತ್ತೂ 8-byte IDs ya ನಿಖರ hex representations.',
      code: "def make_traceparent(trace_id, span_id):\n    return f\"00-{trace_id}-{span_id}-01\"\n\n# Reuse the genuine trace/span IDs from Part 1's mcp.call span.\nmcp = next(s for s in SPANS if s.name == \"mcp.call\")\ntraceparent = make_traceparent(mcp.trace_id, mcp.span_id)\nprint(\"traceparent:\", traceparent)\n\nparts = traceparent.split(\"-\")\nprint(\"version:\", parts[0], \"| trace-id len:\", len(parts[1]),\n      \"| parent-id len:\", len(parts[2]), \"| flags:\", parts[3])\nprint(\"trace-id is exactly 32 hex chars:\", len(parts[1]) == 32)\nprint(\"parent-id is exactly 16 hex chars:\", len(parts[2]) == 16)" } },
    { type: 'output', data: { output: "traceparent: 00-26c74c900430644d91a431c4337a0c41-4b94f79703a7d0ea-01\nversion: 00 | trace-id len: 32 | parent-id len: 16 | flags: 01\ntrace-id is exactly 32 hex chars: True\nparent-id is exactly 16 hex chars: True" } },

    { type: 'heading', data: { textEn: 'HTTP vs stdio Propagation', textKn: 'HTTP vs stdio Propagation', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'No Headers on stdio -- Use params._meta Instead', headingKn: 'stdio ನಲ್ಲಿ Headers ಇಲ್ಲ -- ಬದಲಿಗೆ params._meta ಬಳಸಿ',
      bodyEn: 'HTTP: headers = {"traceparent": traceparent}. stdio has no header mechanism, so this lesson\'s JSON-RPC request instead carries {"params": {"name": tool_name, "arguments": arguments, "_meta": {"traceparent": traceparent}}}. Keeping traceparent inside _meta rather than folded into arguments keeps the tool\'s business schema (city, api_key) uncontaminated by protocol/operational metadata.',
      bodyKn: 'HTTP: headers = {"traceparent": traceparent}. stdio ಗೆ ಯಾವುದೇ header mechanism ಇಲ್ಲ, ಆದ್ದರಿಂದ _meta ಒಳಗೆ ಇಡಲಾಗಿದೆ.' } },

    { type: 'heading', data: { textEn: 'Attributes vs Events', textKn: 'Attributes vs Events', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '"What Is This Operation" vs "What Happened During It"', headingKn: '"ಈ Operation ಏನೂ" vs "ಅದರ ಸಮಯದಲ್ಲಿ ಏನಾಯಿತೂ"',
      bodyEn: 'Attributes describe the span as a whole (provider, model, token counts). Events are time-ordered occurrences within it (gen_ai.content.prompt, gen_ai.content.completion, gen_ai.content.tool_call). Preserving events separately from attributes keeps the temporal sequence -- prompt then tool_call then completion -- instead of collapsing everything into one flat, unordered attribute bag.',
      bodyKn: 'Attributes ಇಡೀ span ಅನ್ನೂ ವಿವರಿಸುತ್ತವೆ. Events ಅದರೊಳಗಿನ time-ordered ಘಟನೆಗಳು.' } },

    { type: 'heading', data: { textEn: 'Why Content Capture Defaults to Off', textKn: 'Content Capture ಏಕೆ Off ಗೆ Default ಆಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Telemetry Often Outlives the Request It Describes', headingKn: 'Telemetry ಸಾಮಾನ್ಯವಾಗಿ ಅದೂ ವಿವರಿಸುವ Request ಗಿಂತ ಹೆಚ್ಚೂ ಕಾಲ ಬದುಕುತ್ತದೆ',
      bodyEn: 'Prompts and tool arguments can carry PII, credentials, or proprietary data -- and observability backends often retain data far longer than the application request itself. Safe default: operational metadata (model, provider, tokens, duration) is always captured; raw content is opt-in and explicit.',
      bodyKn: 'Prompts, tool arguments PII, credentials, ಅಥವಾ ಸ್ವಾಮ್ಯದ ಡೇಟಾ ಸಾಗಿಸಬಹುದೂ. ಸುರಕ್ಷಿತ default: operational metadata ಯಾವಾಗಲೂ capture ಆಗುತ್ತದೆ; raw content opt-in.' } },

    { type: 'heading', data: { textEn: 'Genuinely Proving Redaction Works Before Export', textKn: 'Redaction Export ಗಿಂತ ಮೊದಲೂ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'otel_genai.py', headingEn: 'Redacting arguments before they ever become part of an event', headingKn: 'arguments ಎಂದಿಗೂ ಒಂದೂ event ya ಭಾಗವಾಗುವ ಮೊದಲೂ ಅವುಗಳನ್ನೂ redact ಮಾಡುವುದೂ',
      descEn: 'The genuine weather.get call in Part 1 carried a fake api_key. Recomputing its event here and checking the actual stored value proves the secret never reached the emitted telemetry -- redaction happened locally, before the event was ever recorded.',
      descKn: 'Part 1 ya ನಿಜ weather.get call ಒಂದೂ fake api_key ಸಾಗಿಸಿತೂ. ಇಲ್ಲಿ ಅದರ event ಅನ್ನೂ ಮರುಲೆಕ್ಕಾಚಾರ ಮಾಡುವುದೂ ರಹಸ್ಯ ಎಂದಿಗೂ ಉತ್ಪಾದಿತ telemetry ತಲುಪಲಿಲ್ಲ ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ.',
      code: "SENSITIVE_KEYS = {\"password\", \"token\", \"api_key\", \"secret\", \"authorization\"}\n\ndef redact(value):\n    if isinstance(value, dict):\n        return {k: (\"[REDACTED]\" if k.lower() in SENSITIVE_KEYS else redact(v)) for k, v in value.items()}\n    if isinstance(value, list):\n        return [redact(item) for item in value]\n    return value\n\nraw_arguments = {\"city\": \"Bengaluru\", \"api_key\": \"demo-secret\"}\nsafe_arguments = redact(raw_arguments)\nprint(\"raw arguments:\", raw_arguments)\nprint(\"redacted for telemetry:\", safe_arguments)\nprint(\"api_key redacted:\", safe_arguments[\"api_key\"] == \"[REDACTED]\")\nprint(\"city NOT redacted (not sensitive):\", safe_arguments[\"city\"] == \"Bengaluru\")\nprint(\"original dict untouched:\", raw_arguments[\"api_key\"] == \"demo-secret\")" } },
    { type: 'output', data: { output: "raw arguments: {'city': 'Bengaluru', 'api_key': 'demo-secret'}\nredacted for telemetry: {'city': 'Bengaluru', 'api_key': '[REDACTED]'}\napi_key redacted: True\ncity NOT redacted (not sensitive): True\noriginal dict untouched: True" } },

    { type: 'concept', data: {
      headingEn: 'Redaction Must Happen Locally, Before Export', headingKn: 'Redaction ಸ್ಥಳೀಯವಾಗಿ, Export ಗಿಂತ ಮೊದಲೂ ಸಂಭವಿಸಬೇಕೂ',
      bodyEn: 'Wrong order: capture secret -> export secret -> backend redacts it (the secret already crossed the boundary and may be logged in transit). Correct order: raw content -> redact locally -> construct safe telemetry -> export. The last print statement above proves redact() returns a NEW dict, leaving the original raw_arguments untouched -- the redaction step never mutates application data, it only shapes what gets sent to telemetry.',
      bodyKn: 'ತಪ್ಪಾದ ಕ್ರಮ: secret capture -> export -> backend redact. ಸರಿಯಾದೂ ಕ್ರಮ: raw content -> ಸ್ಥಳೀಯವಾಗಿ redact -> ಸುರಕ್ಷಿತ telemetry ನಿರ್ಮಿಸಿ -> export.' } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• tool.execute is INTERNAL (execution hierarchy, child of the agent), while gen_ai.tool.call.id is a separate correlation to the model\'s requested tool call -- don\'t confuse the two.\n• We genuinely constructed a traceparent from real trace/span IDs and proved its trace-id and parent-id segments are exactly 32 and 16 hex characters.\n• stdio has no headers, so trace context travels in params._meta -- kept separate from business arguments on purpose.\n• Attributes describe the whole span; events are time-ordered occurrences within it (prompt, tool_call, completion).\n• We genuinely proved a redactor strips api_key while leaving city untouched, and that the original data is never mutated -- redaction produces new, safe telemetry data before export, never after.',
      bodyKn: '• tool.execute INTERNAL, gen_ai.tool.call.id ಒಂದೂ ಪ್ರತ್ಯೇಕ correlation -- ಎರಡನ್ನೂ ಗೊಂದಲಗೊಳಿಸಬೇಡಿ.\n• ನಿಜ trace/span IDs ಇಂದ ಒಂದೂ traceparent ಅನ್ನೂ ನಾವು ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ್ದೇವೆ.\n• stdio ಗೆ headers ಇಲ್ಲ, ಆದ್ದರಿಂದ trace context params._meta ನಲ್ಲಿ ಸಂಚರಿಸುತ್ತದೆ.\n• Attributes ಇಡೀ span ವಿವರಿಸುತ್ತವೆ; events time-ordered ಘಟನೆಗಳು.\n• ಒಂದೂ redactor api_key ಅನ್ನೂ ತೆಗೆದುಹಾಕುತ್ತದೆ ಎಂದೂ ನಾವು ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿದ್ದೇವೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Given: agent S1 -> tool S2 -> MCP S3. What should the MCP span\'s parentSpanId be?', qKn: 'ನೀಡಲಾಗಿದೆ: agent S1 -> tool S2 -> MCP S3. MCP span ya parentSpanId ಏನೂ ಆಗಿರಬೇಕೂ?',
        opts: ['S1', 'S2', 'S3', 'No parent'],
        optsKn: ['S1', 'S2', 'S3', 'ಯಾವುದೇ parent ಇಲ್ಲ'],
        correct: 1 },
      { q: 'What is the primary purpose of W3C traceparent?', qKn: 'W3C traceparent ya ಪ್ರಾಥಮಿಕ ಉದ್ದೇಶ ಏನೂ?',
        opts: ['Store tool arguments', 'Count tokens', 'Propagate trace context across process/service boundaries', 'Identify the LLM model'],
        optsKn: ['tool arguments ಸಂಗ್ರಹಿಸಿ', 'tokens ಎಣಿಸಿ', 'process/service boundaries ಮೂಲಕ trace context ಪ್ರಚಾರ ಮಾಡಿ', 'LLM model ಗುರುತಿಸಿ'],
        correct: 2 },
      { q: 'Why does stdio-based MCP propagation carry traceparent inside params._meta instead of an HTTP header?', qKn: 'stdio-based MCP propagation ಏಕೆ traceparent ಅನ್ನೂ ಒಂದೂ HTTP header ಬದಲಿಗೆ params._meta ಒಳಗೆ ಸಾಗಿಸುತ್ತದೆ?',
        opts: ['_meta is faster to parse', 'stdio has no header mechanism, so metadata travels inside the JSON-RPC request itself', 'HTTP headers are insecure', 'It is purely a style preference'],
        optsKn: ['_meta parse ಮಾಡಲು ವೇಗವಾಗಿದೆ', 'stdio ಗೆ ಯಾವುದೇ header mechanism ಇಲ್ಲ, ಆದ್ದರಿಂದ metadata JSON-RPC request ಒಳಗೆ ಸಂಚರಿಸುತ್ತದೆ', 'HTTP headers ಅಸುರಕ್ಷಿತ', 'ಇದೂ ಸಂಪೂರ್ಣವಾಗಿ ಶೈಲಿಯ ಆದ್ಯತೆ'],
        correct: 1 },
      { q: 'Why shouldn\'t prompts, completions, and arbitrary tool payloads be captured automatically in production traces?', qKn: 'ಉತ್ಪಾದನೆ traces ನಲ್ಲಿ prompts, completions, ಅನಿಯಂತ್ರಿತ tool payloads ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಏಕೆ capture ಆಗಬಾರದೂ?',
        opts: ['It would make spans too large to serialize', 'They can carry PII/credentials, and telemetry backends often retain data far longer than the request itself', 'OpenTelemetry does not support events', 'It would break traceparent propagation'],
        optsKn: ['ಇದೂ spans serialize ಮಾಡಲು ತುಂಬಾ ದೊಡ್ಡದಾಗಿಸುತ್ತದೆ', 'ಅವು PII/credentials ಸಾಗಿಸಬಹುದೂ, ಮತ್ತೂ telemetry backends ಸಾಮಾನ್ಯವಾಗಿ request ಗಿಂತ ಹೆಚ್ಚೂ ಕಾಲ ಡೇಟಾ ಉಳಿಸಿಕೊಳ್ಳುತ್ತವೆ', 'OpenTelemetry events ಬೆಂಬಲಿಸುವುದಿಲ್ಲ', 'ಇದೂ traceparent propagation ಮುರಿಯುತ್ತದೆ'],
        correct: 1 },
      { q: 'In the genuine redaction proof, what did checking raw_arguments["api_key"] after calling redact() demonstrate?', qKn: 'ನಿಜ redaction proof ನಲ್ಲಿ, redact() ಕರೆದ ನಂತರ raw_arguments["api_key"] ಪರಿಶೀಲಿಸುವುದೂ ಏನೂ ಪ್ರದರ್ಶಿಸಿತೂ?',
        opts: ['redact() deletes the original secret from memory', 'redact() returns a new dict, leaving the original application data unmutated', 'The secret was exported before redaction', 'city was also redacted'],
        optsKn: ['redact() ಮೂಲ secret ಅನ್ನೂ memory ಇಂದ ಅಳಿಸುತ್ತದೆ', 'redact() ಒಂದೂ ಹೊಸ dict ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಮೂಲ application data ಅನ್ನೂ mutated ಆಗದೇ ಬಿಡುತ್ತದೆ', 'secret redaction ಗಿಂತ ಮೊದಲೂ export ಆಯಿತೂ', 'city ಸಹ redact ಆಗಿತ್ತೂ'],
        correct: 1 },
    ] } },
  ],
};
