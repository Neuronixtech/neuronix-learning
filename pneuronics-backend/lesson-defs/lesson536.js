const phaseId = '6a369d5e66020ed05b3214c3';
const moduleId = '6a369d6066020ed05b3214ff'; // Module 269: OpenTelemetry GenAI

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'OpenTelemetry GenAI — Tracing Tool Calls End-to-End (Part 1 of 3) — Spans, Traces, Attributes, and Hierarchy',
  titleKn: 'OpenTelemetry GenAI — Tracing Tool Calls End-to-End (Part 1 of 3) — Spans, Traces, Attributes, ಮತ್ತೂ Hierarchy',
  desc: 'Genuinely build and run a Span class with a context-manager emitter, and prove every span in one agent turn shares a single traceId while each gets its own unique spanId -- the foundation of distributed tracing.',
  descKn: 'ಒಂದೂ Span class ಅನ್ನೂ context-manager emitter ಜೊತೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಿ.',
  objectives: [
    'Distinguish trace (the whole request) from span (one timed operation), and explain why an agent turn should be one trace with many spans.',
    'Genuinely build a Span class and a start_span() context-manager emitter, and prove that spans created within one agent run all share the same traceId.',
    'Explain the standard gen_ai.* attribute namespace for operation, provider, model, tokens, tool, and agent metadata.',
    'Correctly classify a span as SpanKind CLIENT (outbound process/service call) or INTERNAL (local orchestration), and justify each classification.',
    'Genuinely reconstruct a span hierarchy from parentSpanId alone and read a slow-span waterfall to localize latency.',
  ],
  objectivesKn: [
    'trace ಮತ್ತೂ span ನಡುವೆ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'ಒಂದೂ Span class ಮತ್ತೂ start_span() context-manager emitter ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ.',
    'gen_ai.* attribute namespace ವಿವರಿಸಿ.',
    'ಒಂದೂ span ಅನ್ನೂ CLIENT ಅಥವಾ INTERNAL ಎಂದೂ ಸರಿಯಾಗಿ ವರ್ಗೀಕರಿಸಿ.',
    'parentSpanId ಮಾತ್ರ ಇಂದ ಒಂದೂ span hierarchy ಅನ್ನೂ ನಿಜವಾಗಿ ಪುನರ್ನಿರ್ಮಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'OpenTelemetry GenAI — Tracing Tool Calls End-to-End (Part 1 of 3)', textKn: 'OpenTelemetry GenAI — Tracing Tool Calls End-to-End (Part 1 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Module 266 (Gateways), Module 268 (A2A) · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Module 266, Module 268 · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Trace,Span,gen_ai.*,SpanKind', pillsKn: 'Trace,Span,gen_ai.*,SpanKind' } },

    { type: 'heading', data: { textEn: 'The Core Problem', textKn: 'ಮೂಲ ಸಮಸ್ಯೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'One Request, Normal Sometimes, 10x Slower Other Times -- Where?', headingKn: 'ಒಂದೂ Request, ಕೆಲವೂಮ್ಮೆ ಸಾಮಾನ್ಯ, ಇತರ ಸಮಯಗಳಲ್ಲಿ 10x ನಿಧಾನ -- ಎಲ್ಲಿ?',
      bodyEn: 'User -> Agent -> LLM -> Tool -> MCP Client -> MCP Server -> ... -> Answer. Logs alone ("Calling LLM... Calling tool... Tool finished.") cannot answer where 27 of 30 seconds went. This is exactly what distributed tracing is built to expose -- an operation-by-operation timing breakdown across every component the request touched.',
      bodyKn: 'ಕೇವಲ Logs ("LLM ಕರೆಯುತ್ತಿದೆ... tool ಕರೆಯುತ್ತಿದೆ...") 30 ಸೆಕೆಂಡುಗಳಲ್ಲಿ 27 ಎಲ್ಲಿ ಕಳೆದವೂ ಎಂದೂ ಉತ್ತರಿಸಲಾಗುವುದಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Trace vs Span', textKn: 'Trace vs Span', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Trace = the Whole Journey; Span = One Step', headingKn: 'Trace = ಪೂರ್ಣ ಪ್ರಯಾಣ; Span = ಒಂದೂ ಹಂತ',
      bodyEn: 'A trace represents one complete agent request end to end. A span represents one timed operation inside it -- invoke agent, call LLM, execute tool, call MCP server. Every span in a trace shares the same traceId; every span has its own unique spanId; parentSpanId records who called whom.',
      bodyKn: 'ಒಂದೂ trace ಒಂದೂ ಸಂಪೂರ್ಣ agent request ಅನ್ನೂ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ. ಒಂದೂ span ಅದರೊಳಗೆ ಒಂದೂ timed operation ಅನ್ನೂ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Building the Span Class and Emitter', textKn: 'Span Class ಮತ್ತೂ Emitter ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'otel_genai.py', headingEn: 'A context-manager span emitter, so ending is never forgotten even on exceptions', headingKn: 'ಒಂದೂ context-manager span emitter, exceptions ಇದ್ದರೂ ending ಎಂದಿಗೂ ಮರೆಯಲ್ಪಡುವುದಿಲ್ಲ',
      descEn: 'The finally block guarantees span.end() and SPANS.append(span) run even if the wrapped operation raises. This is the same "guarantee cleanup regardless of failure" discipline used throughout this course\'s security modules.',
      descKn: 'finally block ಖಚಿತಪಡಿಸುತ್ತದೆ span.end() ಮತ್ತೂ SPANS.append(span) wrapped operation raise ಆದರೂ ಚಲಿಸುತ್ತವೆ.',
      code: "import secrets, time\nfrom contextlib import contextmanager\n\ndef new_trace_id():\n    return secrets.token_hex(16)  # 32 hex chars\n\ndef new_span_id():\n    return secrets.token_hex(8)   # 16 hex chars\n\nclass Span:\n    def __init__(self, name, trace_id, parent_span_id=None, kind=\"INTERNAL\", attributes=None):\n        self.name = name\n        self.trace_id = trace_id\n        self.span_id = new_span_id()\n        self.parent_span_id = parent_span_id\n        self.kind = kind\n        self.attributes = dict(attributes or {})\n        self.events = []\n        self.start_time = time.time_ns()\n        self.end_time = None\n\n    def set_attribute(self, key, value):\n        self.attributes[key] = value\n\n    def add_event(self, name, attributes=None):\n        self.events.append({\"name\": name, \"attributes\": dict(attributes or {})})\n\n    def end(self):\n        self.end_time = time.time_ns()\n\nSPANS = []\n\n@contextmanager\ndef start_span(name, trace_id, parent_span_id=None, kind=\"INTERNAL\", attributes=None):\n    span = Span(name, trace_id, parent_span_id, kind, attributes)\n    try:\n        yield span\n    finally:\n        span.end()\n        SPANS.append(span)\n\nprint(\"Span/emitter defined.\")" } },
    { type: 'output', data: { output: "Span/emitter defined." } },

    { type: 'heading', data: { textEn: 'Genuinely Running One Complete Agent Trace', textKn: 'ಒಂದೂ ಸಂಪೂರ್ಣ Agent Trace ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'otel_genai.py', headingEn: 'agent -> LLM -> local tool -> MCP-backed tool (with mcp.call child) -> LLM', headingKn: 'agent -> LLM -> local tool -> MCP-backed tool (mcp.call child ಜೊತೆ) -> LLM',
      descEn: 'Every nested start_span() call passes the SAME trace_id down, and passes the enclosing span\'s span_id as parent_span_id -- that is the entire mechanism that builds the tree.',
      descKn: 'ಪ್ರತಿ nested start_span() call ಒಂದೇ trace_id ಅನ್ನೂ ಕೆಳಗೆ ರವಾನಿಸುತ್ತದೆ, ಮತ್ತೂ enclosing span ya span_id ಅನ್ನೂ parent_span_id ಆಗಿ ರವಾನಿಸುತ್ತದೆ.',
      code: "def run_agent_trace():\n    trace_id = new_trace_id()\n\n    with start_span(\"agent.invoke_agent\", trace_id, kind=\"INTERNAL\",\n                     attributes={\"gen_ai.operation.name\": \"invoke_agent\", \"gen_ai.agent.name\": \"demo_agent\"}) as agent_span:\n\n        with start_span(\"llm.chat\", trace_id, parent_span_id=agent_span.span_id, kind=\"CLIENT\",\n                         attributes={\"gen_ai.operation.name\": \"chat\", \"gen_ai.provider.name\": \"openai\"}) as llm1:\n            llm1.set_attribute(\"gen_ai.usage.input_tokens\", 18)\n            llm1.set_attribute(\"gen_ai.usage.output_tokens\", 12)\n\n        with start_span(\"tool.execute\", trace_id, parent_span_id=agent_span.span_id, kind=\"INTERNAL\",\n                         attributes={\"gen_ai.operation.name\": \"execute_tool\", \"gen_ai.tool.name\": \"calculator.add\",\n                                     \"gen_ai.tool.call.id\": \"call_001\"}) as calc_span:\n            calc_result = 20 + 22\n\n        with start_span(\"tool.execute\", trace_id, parent_span_id=agent_span.span_id, kind=\"INTERNAL\",\n                         attributes={\"gen_ai.operation.name\": \"execute_tool\", \"gen_ai.tool.name\": \"weather.get\",\n                                     \"gen_ai.tool.call.id\": \"call_002\"}) as weather_span:\n\n            with start_span(\"mcp.call\", trace_id, parent_span_id=weather_span.span_id, kind=\"CLIENT\",\n                             attributes={\"gen_ai.operation.name\": \"execute_tool\", \"gen_ai.tool.name\": \"weather.get\"}) as mcp_span:\n                pass\n\n        with start_span(\"llm.chat\", trace_id, parent_span_id=agent_span.span_id, kind=\"CLIENT\",\n                         attributes={\"gen_ai.operation.name\": \"chat\", \"gen_ai.provider.name\": \"openai\"}) as llm2:\n            llm2.set_attribute(\"gen_ai.usage.input_tokens\", 32)\n            llm2.set_attribute(\"gen_ai.usage.output_tokens\", 19)\n\n    return trace_id, calc_result\n\ntrace_id, calc_result = run_agent_trace()\nprint(\"calculator result:\", calc_result)\nprint(\"number of spans emitted:\", len(SPANS))" } },
    { type: 'output', data: { output: "calculator result: 42\nnumber of spans emitted: 6" } },

    { type: 'heading', data: { textEn: 'Proving the Single-Trace Invariant', textKn: 'Single-Trace Invariant ಅನ್ನೂ ಸಾಬೀತುಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'otel_genai.py', headingEn: 'Genuinely proving all 6 spans share one traceId and all have unique spanIds', headingKn: 'ಎಲ್ಲಾ 6 spans ಒಂದೂ traceId ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ ಮತ್ತೂ ಎಲ್ಲಾ ಅನನ್ಯ spanIds ಹೊಂದಿವೆ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುವುದೂ',
      descEn: 'This is the property an observability backend relies on to group spans into one trace: a single distinct traceId value across the entire SPANS list.',
      descKn: 'ಇದೂ ಒಂದೂ observability backend spans ಅನ್ನೂ ಒಂದೂ trace ಗೆ ಗುಂಪುಗೊಳಿಸಲು ಅವಲಂಬಿಸಿರುವ property.',
      code: "trace_ids = {s.trace_id for s in SPANS}\nprint(\"distinct traceIds across all spans:\", trace_ids)\nprint(\"all spans share one trace:\", len(trace_ids) == 1)\n\nspan_ids = [s.span_id for s in SPANS]\nprint(\"span count:\", len(span_ids), \"| unique span count:\", len(set(span_ids)))\nprint(\"all span IDs unique:\", len(span_ids) == len(set(span_ids)))" } },
    { type: 'output', data: { output: "distinct traceIds across all spans: {'26c74c900430644d91a431c4337a0c41'}\nall spans share one trace: True\nspan count: 6 | unique span count: 6\nall span IDs unique: True" } },

    { type: 'heading', data: { textEn: 'Genuinely Reconstructing the Hierarchy from parentSpanId Alone', textKn: 'parentSpanId ಮಾತ್ರ ಇಂದ Hierarchy ಅನ್ನೂ ನಿಜವಾಗಿ ಪುನರ್ನಿರ್ಮಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'otel_genai.py', headingEn: 'Walking every span and printing its resolved parent name', headingKn: 'ಪ್ರತಿ span ಮೂಲಕ ನಡೆಯುವುದೂ ಮತ್ತೂ ಅದರ resolved parent name ಮುದ್ರಿಸುವುದೂ',
      descEn: 'No tree data structure was ever built -- the hierarchy exists purely as an implicit graph in parentSpanId pointers, exactly the way a real backend reconstructs a trace waterfall.',
      descKn: 'ಯಾವುದೇ tree data structure ಎಂದಿಗೂ ನಿರ್ಮಿಸಲ್ಪಟ್ಟಿಲ್ಲ -- hierarchy ಸಂಪೂರ್ಣವಾಗಿ parentSpanId pointers ನಲ್ಲಿ ಒಂದೂ implicit graph ಆಗಿ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ.',
      code: "by_id = {s.span_id: s for s in SPANS}\nfor s in SPANS:\n    parent_name = by_id[s.parent_span_id].name if s.parent_span_id in by_id else \"(root)\"\n    print(f\"{s.name:16s} kind={s.kind:8s} parent={parent_name}\")\n\nmcp = next(s for s in SPANS if s.name == \"mcp.call\")\nparent = by_id[mcp.parent_span_id]\nprint()\nprint(\"mcp.call parent name:\", parent.name)\nprint(\"mcp.call parent is a tool.execute span (not agent.invoke_agent):\", parent.name == \"tool.execute\")" } },
    { type: 'output', data: { output: "llm.chat         kind=CLIENT   parent=agent.invoke_agent\ntool.execute     kind=INTERNAL parent=agent.invoke_agent\nmcp.call         kind=CLIENT   parent=tool.execute\ntool.execute     kind=INTERNAL parent=agent.invoke_agent\nllm.chat         kind=CLIENT   parent=agent.invoke_agent\nagent.invoke_agent kind=INTERNAL parent=(root)\n\nmcp.call parent name: tool.execute\nmcp.call parent is a tool.execute span (not agent.invoke_agent): True" } },

    { type: 'heading', data: { textEn: 'gen_ai.* Attributes and SpanKind', textKn: 'gen_ai.* Attributes ಮತ್ತೂ SpanKind', level: 'H2' } },
    { type: 'table', data: {
      headingEn: 'Standard attribute namespace vs custom names', headers: ['Attribute', 'Meaning'],
      rows: [
        ['gen_ai.operation.name', 'chat, execute_tool, invoke_agent, embeddings'],
        ['gen_ai.provider.name', 'openai, anthropic, google, azure_openai'],
        ['gen_ai.request.model / gen_ai.response.model', 'requested vs actually-served model -- kept separate on purpose'],
        ['gen_ai.usage.input_tokens / gen_ai.usage.output_tokens', 'token accounting, correlatable with latency and cost'],
        ['gen_ai.tool.name / gen_ai.tool.call.id', 'which tool, and which specific invocation of it'],
        ['SpanKind CLIENT', 'outbound call across a process/service boundary -- llm.chat, mcp.call'],
        ['SpanKind INTERNAL', 'local orchestration -- agent.invoke_agent, tool.execute'],
      ] } },
    { type: 'code', data: {
      filename: 'otel_genai.py', headingEn: 'Genuinely printing every span\'s CLIENT/INTERNAL classification from the real run', headingKn: 'ನಿಜ run ಇಂದ ಪ್ರತಿ span ya CLIENT/INTERNAL ವರ್ಗೀಕರಣವನ್ನೂ ನಿಜವಾಗಿ ಮುದ್ರಿಸುವುದೂ',
      descEn: 'The simple rule "does this operation cross a process/service boundary?" is applied consistently: local orchestration is INTERNAL, outbound calls are CLIENT.',
      descKn: 'ಸರಳ ನಿಯಮ "ಈ operation ಒಂದೂ process/service boundary ದಾಟುತ್ತದೆಯೇ?" ಸ್ಥಿರವಾಗಿ ಅನ್ವಯಿಸಲಾಗಿದೆ.',
      code: "for s in SPANS:\n    print(f\"{s.name:16s} -> {s.kind}\")" } },
    { type: 'output', data: { output: "llm.chat         -> CLIENT\ntool.execute     -> INTERNAL\nmcp.call         -> CLIENT\ntool.execute     -> INTERNAL\nllm.chat         -> CLIENT\nagent.invoke_agent -> INTERNAL" } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• A trace represents the entire agent request; a span represents one timed operation within it.\n• We genuinely built a Span class and context-manager emitter, ran a full 6-span agent trace, and proved all spans share one traceId while every spanId is unique.\n• We genuinely reconstructed the parent-child hierarchy purely from parentSpanId pointers and proved mcp.call\'s parent is the tool.execute span, not the root agent span.\n• gen_ai.* attributes give LLM, tool, and agent spans standardized, backend-agnostic semantic meaning.\n• CLIENT means an outbound process/service call (llm.chat, mcp.call); INTERNAL means local orchestration (agent.invoke_agent, tool.execute).',
      bodyKn: '• ಒಂದೂ trace ಪೂರ್ಣ agent request ಪ್ರತಿನಿಧಿಸುತ್ತದೆ; ಒಂದೂ span ಅದರೊಳಗೆ ಒಂದೂ timed operation.\n• ಒಂದೂ Span class ಮತ್ತೂ context-manager emitter ಅನ್ನೂ ನಾವು ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ 6-span trace ಚಲಾಯಿಸಿದ್ದೇವೆ.\n• parentSpanId pointers ಇಂದ ಮಾತ್ರ hierarchy ಅನ್ನೂ ನಾವು ನಿಜವಾಗಿ ಪುನರ್ನಿರ್ಮಿಸಿದ್ದೇವೆ.\n• gen_ai.* attributes LLM, tool, agent spans ಗೆ ಪ್ರಮಾಣಿತ ಅರ್ಥ ನೀಡುತ್ತವೆ.\n• CLIENT ಒಂದೂ outbound call; INTERNAL local orchestration.' } },

    { type: 'quiz', data: { questions: [
      { q: 'An agent calls an LLM, then a tool, then an MCP server. Should all four operations use the same traceId?', qKn: 'ಒಂದೂ agent LLM, ನಂತರ tool, ನಂತರ MCP server ಕರೆಯುತ್ತದೆ. ಎಲ್ಲಾ ನಾಲ್ಕೂ operations ಒಂದೇ traceId ಬಳಸಬೇಕೇ?',
        opts: ['No, each needs its own trace', 'Yes -- they belong to the same complete agent request', 'Only the LLM calls share a trace', 'Only if they run in parallel'],
        optsKn: ['ಇಲ್ಲ, ಪ್ರತಿಯೊಂದಕ್ಕೂ ತನ್ನದೇ trace ಬೇಕೂ', 'ಹೌದೂ -- ಅವು ಒಂದೇ ಸಂಪೂರ್ಣ agent request ಗೆ ಸೇರಿವೆ', 'LLM calls ಮಾತ್ರ trace ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ', 'ಅವು ಸಮಾನಾಂತರವಾಗಿ ಚಲಿಸಿದರೆ ಮಾತ್ರ'],
        correct: 1 },
      { q: 'In the genuine run, what field tells us that mcp.call happened inside the second tool.execute?', qKn: 'ನಿಜ run ನಲ್ಲಿ, mcp.call ಎರಡನೇ tool.execute ಒಳಗೆ ಸಂಭವಿಸಿತೂ ಎಂದೂ ಯಾವ field ಹೇಳುತ್ತದೆ?',
        opts: ['traceId', 'spanId', 'parentSpanId', 'gen_ai.provider.name'],
        optsKn: ['traceId', 'spanId', 'parentSpanId', 'gen_ai.provider.name'],
        correct: 2 },
      { q: 'Which SpanKind best matches an outbound LLM API call?', qKn: 'ಒಂದೂ outbound LLM API call ಗೆ ಯಾವ SpanKind ಉತ್ತಮ ಹೊಂದಾಣಿಕೆ?',
        opts: ['INTERNAL', 'CLIENT', 'AGENT', 'TOOL'],
        optsKn: ['INTERNAL', 'CLIENT', 'AGENT', 'TOOL'],
        correct: 1 },
      { q: 'Why are gen_ai.request.model and gen_ai.response.model kept as two separate attributes?', qKn: 'gen_ai.request.model ಮತ್ತೂ gen_ai.response.model ಎರಡೂ ಪ್ರತ್ಯೇಕ attributes ಆಗಿ ಏಕೆ ಇಡಲ್ಪಟ್ಟಿವೆ?',
        opts: ['They are always identical so it doesn\'t matter', 'The requested model alias and the actually-served model version are conceptually different pieces of information', 'response.model is deprecated', 'Only one of them is ever populated'],
        optsKn: ['ಅವು ಯಾವಾಗಲೂ ಒಂದೇ ಆಗಿರುವುದರಿಂದ ಇದೂ ಮುಖ್ಯವಲ್ಲ', 'ಕೋರಿದ model alias ಮತ್ತೂ ವಾಸ್ತವವಾಗಿ-ಸೇವೆ ಸಲ್ಲಿಸಿದ model version ಪರಿಕಲ್ಪನಾತ್ಮಕವಾಗಿ ಭಿನ್ನ ಮಾಹಿತಿ', 'response.model deprecated', 'ಅವುಗಳಲ್ಲಿ ಒಂದೂ ಮಾತ್ರ ಎಂದಿಗೂ ಭರ್ತಿಯಾಗುತ್ತದೆ'],
        correct: 1 },
      { q: 'If an agent takes 30 seconds but its nested mcp.call span takes 27 seconds, what does the trace immediately suggest?', qKn: 'ಒಂದೂ agent 30 ಸೆಕೆಂಡುಗಳ ತೆಗೆದುಕೊಂಡರೆ ಆದರೆ ಅದರ nested mcp.call span 27 ಸೆಕೆಂಡುಗಳ ತೆಗೆದುಕೊಂಡರೆ, trace ತಕ್ಷಣ ಏನೂ ಸೂಚಿಸುತ್ತದೆ?',
        opts: ['The LLM is slow', 'The agent orchestration logic is slow', 'The delay is concentrated in the MCP call/server, not the surrounding agent logic', 'The trace is corrupted'],
        optsKn: ['LLM ನಿಧಾನವಾಗಿದೆ', 'agent orchestration logic ನಿಧಾನವಾಗಿದೆ', 'ವಿಳಂಬ MCP call/server ನಲ್ಲಿ ಕೇಂದ್ರೀಕೃತವಾಗಿದೆ, ಸುತ್ತಮುತ್ತಲಿನ agent logic ನಲ್ಲಿ ಅಲ್ಲ', 'trace ಹಾಳಾಗಿದೆ'],
        correct: 2 },
    ] } },
  ],
};
