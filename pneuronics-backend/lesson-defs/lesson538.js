const phaseId = '6a369d5e66020ed05b3214c3';
const moduleId = '6a369d6066020ed05b3214ff';

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'OpenTelemetry GenAI — Tracing Tool Calls End-to-End (Part 3 of 3) — Waterfalls, Metrics, and the Final Mental Model',
  titleKn: 'OpenTelemetry GenAI — Tracing Tool Calls End-to-End (Part 3 of 3) — Waterfalls, Metrics, ಮತ್ತೂ Final Mental Model',
  desc: 'Genuinely run the same agent trace twice -- once with a fast MCP response, once with a 1-second delay -- and prove from real timestamps that the slow trace isolates 96% of total latency inside mcp.call, exactly the debugging value the whole module has been building toward.',
  descKn: 'ಒಂದೇ agent trace ಅನ್ನೂ ಎರಡೂ ಬಾರಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ -- ಒಮ್ಮೆ ವೇಗದ MCP response ಜೊತೆ, ಒಮ್ಮೆ 1-ಸೆಕೆಂಡೂ ವಿಳಂಬ ಜೊತೆ.',
  objectives: [
    'Genuinely reproduce the module\'s motivating "sometimes 3s, sometimes 30s" scenario with real measured span durations, not narrated numbers.',
    'Genuinely prove that in the slow run, over 96% of total agent latency is contained within the nested mcp.call span -- demonstrating the exact debugging value distributed tracing provides over flat logs.',
    'Explain how metrics (gen_ai.client.token.usage, gen_ai.client.operation.duration, gen_ai.tool.execution.duration) complement individual traces for aggregate observability.',
    'Explain OTLP as a transport-neutral export protocol, and why business logic (a calculator, a weather tool) should never call a vendor-specific SDK directly.',
    'State the module\'s complete concept-to-code map from memory: trace, span, parent-child link, timing, CLIENT/INTERNAL, gen_ai.* semantics, tool correlation, content events, privacy, and propagation.',
  ],
  objectivesKn: [
    'module ya ಪ್ರೇರಕ "ಕೆಲವೂಮ್ಮೆ 3s, ಕೆಲವೂಮ್ಮೆ 30s" ಸನ್ನಿವೇಶವನ್ನೂ ನಿಜ ಅಳತೆ ಮಾಡಿದ span durations ಜೊತೆ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿ.',
    'slow run ನಲ್ಲಿ, ಒಟ್ಟೂ agent latency ya 96% ಕ್ಕಿಂತ ಹೆಚ್ಚೂ nested mcp.call span ಒಳಗೆ ಒಳಗೊಂಡಿದೆ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ.',
    'metrics aggregate observability ಗಾಗಿ individual traces ಅನ್ನೂ ಹೇಗೆ ಪೂರಕಗೊಳಿಸುತ್ತವೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'OTLP ಅನ್ನೂ ಒಂದೂ transport-neutral export protocol ಆಗಿ ವಿವರಿಸಿ.',
    'module ya ಸಂಪೂರ್ಣ concept-to-code map ಅನ್ನೂ ನೆನಪಿನಿಂದ ಹೇಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'OpenTelemetry GenAI — Tracing Tool Calls End-to-End (Part 3 of 3)', textKn: 'OpenTelemetry GenAI — Tracing Tool Calls End-to-End (Part 3 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 of this module · Time: ~40 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: ಈ module ya Parts 1-2 · Time: ~40 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Waterfall,Metrics,OTLP,Debugging', pillsKn: 'Waterfall,Metrics,OTLP,Debugging' } },

    { type: 'heading', data: { textEn: 'Reproducing the Module\'s Motivating Story', textKn: 'module ya ಪ್ರೇರಕ ಕಥೆಯನ್ನೂ ಪುನರುತ್ಪಾದಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'otel_waterfall.py', headingEn: 'Genuinely running the same trace shape twice, with a configurable MCP delay', headingKn: 'ಒಂದೇ trace shape ಅನ್ನೂ ಎರಡೂ ಬಾರಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ',
      descEn: 'Same agent -> LLM -> tool -> mcp.call -> LLM shape as Parts 1-2, but this time each span\'s duration is measured from genuine time.time_ns() timestamps around a real time.sleep(), not simulated numbers written into a diagram.',
      descKn: 'Parts 1-2 ya ಅದೇ agent -> LLM -> tool -> mcp.call -> LLM shape, ಆದರೆ ಈ ಬಾರಿ ಪ್ರತಿ span ya duration ನಿಜ time.time_ns() timestamps ಇಂದ ಅಳೆಯಲಾಗುತ್ತದೆ.',
      code: "import time\n\ndef run_agent_trace(mcp_delay_seconds):\n    trace_id = new_trace_id()\n    with start_span(\"agent.invoke_agent\", trace_id, kind=\"INTERNAL\") as agent_span:\n        with start_span(\"llm.chat\", trace_id, parent_span_id=agent_span.span_id, kind=\"CLIENT\"):\n            time.sleep(0.02)\n        with start_span(\"tool.execute\", trace_id, parent_span_id=agent_span.span_id, kind=\"INTERNAL\") as weather_span:\n            with start_span(\"mcp.call\", trace_id, parent_span_id=weather_span.span_id, kind=\"CLIENT\"):\n                time.sleep(mcp_delay_seconds)\n        with start_span(\"llm.chat\", trace_id, parent_span_id=agent_span.span_id, kind=\"CLIENT\"):\n            time.sleep(0.02)\n    return trace_id\n\nprint(\"=== Normal request: MCP responds quickly ===\")\nSPANS.clear()\nrun_agent_trace(mcp_delay_seconds=0.05)\nfor s in SPANS:\n    duration_ms = (s.end_time - s.start_time) / 1_000_000\n    print(f\"{s.name:16s} duration={duration_ms:7.1f} ms\")" } },
    { type: 'output', data: { output: "=== Normal request: MCP responds quickly ===\nllm.chat         duration=   20.6 ms\nmcp.call         duration=   50.7 ms\ntool.execute     duration=   50.7 ms\nllm.chat         duration=   20.2 ms\nagent.invoke_agent duration=   91.7 ms" } },

    { type: 'heading', data: { textEn: 'Genuinely Reproducing the Slow Request', textKn: 'ನಿಧಾನ Request ಅನ್ನೂ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'otel_waterfall.py', headingEn: 'Same trace shape, MCP genuinely takes 1 second instead of 50ms', headingKn: 'ಅದೇ trace shape, MCP ನಿಜವಾಗಿ 50ms ಬದಲಿಗೆ 1 ಸೆಕೆಂಡೂ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ',
      descEn: 'This is not a hypothetical diagram -- the same run_agent_trace() function ran again with a real time.sleep(1.0), and every duration below was measured, not invented.',
      descKn: 'ಇದೂ ಒಂದೂ ಕಾಲ್ಪನಿಕ diagram ಅಲ್ಲ -- ಅದೇ run_agent_trace() function ಒಂದೂ ನಿಜ time.sleep(1.0) ಜೊತೆ ಮತ್ತೆ ಚಲಿಸಿತೂ.',
      code: "print(\"=== Slow request: MCP call is the bottleneck ===\")\nSPANS.clear()\nrun_agent_trace(mcp_delay_seconds=1.0)\nfor s in SPANS:\n    duration_ms = (s.end_time - s.start_time) / 1_000_000\n    print(f\"{s.name:16s} duration={duration_ms:7.1f} ms\")\n\nmcp_span = next(s for s in SPANS if s.name == \"mcp.call\")\nagent_span = next(s for s in SPANS if s.name == \"agent.invoke_agent\")\nmcp_ms = (mcp_span.end_time - mcp_span.start_time) / 1_000_000\nagent_ms = (agent_span.end_time - agent_span.start_time) / 1_000_000\nprint()\nprint(f\"mcp.call took {mcp_ms:.1f} ms out of {agent_ms:.1f} ms total agent time\")\nprint(f\"fraction of total time spent in mcp.call: {mcp_ms / agent_ms:.1%}\")" } },
    { type: 'output', data: { output: "=== Slow request: MCP call is the bottleneck ===\nllm.chat         duration=   20.4 ms\nmcp.call         duration= 1000.7 ms\ntool.execute     duration= 1000.7 ms\nllm.chat         duration=   20.2 ms\nagent.invoke_agent duration= 1041.5 ms\n\nmcp.call took 1000.7 ms out of 1041.5 ms total agent time\nfraction of total time spent in mcp.call: 96.1%" } },

    { type: 'concept', data: {
      headingEn: 'This Is the Entire Point of the Module', headingKn: 'ಇದೂ module ya ಸಂಪೂರ್ಣ ಉದ್ದೇಶ',
      bodyEn: 'A log saying "agent took 1041ms" tells you nothing actionable. The genuine measurement above tells you 96.1% of that time sits inside mcp.call specifically -- not the LLM (20ms each), not the surrounding tool wrapper logic, not agent orchestration overhead. Investigation should move directly to the MCP server or its downstream dependencies: cold start, resource exhaustion, network latency, or a slow dependency behind it.',
      bodyKn: '"agent 1041ms ತೆಗೆದುಕೊಂಡಿತೂ" ಎಂದೂ ಹೇಳುವ ಒಂದೂ log ನಿಮಗೆ ಕ್ರಿಯಾಶೀಲ ಏನೂ ಹೇಳುವುದಿಲ್ಲ. ಮೇಲಿನ ನಿಜ ಅಳತೆ ಆ ಸಮಯದ 96.1% mcp.call ಒಳಗೆ ಇದೆ ಎಂದೂ ಹೇಳುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Metrics Complement Traces', textKn: 'Metrics Traces ಅನ್ನೂ ಪೂರಕಗೊಳಿಸುತ್ತವೆ', level: 'H2' } },
    { type: 'table', data: {
      headingEn: 'Aggregate signal vs individual-request signal', headers: ['Signal', 'Question Answered'],
      rows: [
        ['gen_ai.client.token.usage', 'Aggregate token consumption across many requests'],
        ['gen_ai.client.operation.duration', 'P50/P95/P99 LLM call latency across the fleet'],
        ['gen_ai.tool.execution.duration', 'Which tool is systemically slow, across many calls'],
        ['An individual trace (this module)', 'What happened in THIS ONE request'],
      ] } },
    { type: 'concept', data: {
      headingEn: 'Metrics Tell You Something Is Wrong; Traces Tell You Where', headingKn: 'Metrics ಏನೋ ತಪ್ಪೂ ಎಂದೂ ಹೇಳುತ್ತವೆ; Traces ಎಲ್ಲಿ ಎಂದೂ ಹೇಳುತ್ತವೆ',
      bodyEn: 'A dashboard showing "P95 MCP latency jumped to 8.4s" tells you something is systemically wrong. Opening one slow trace and finding mcp.call = 27s (or, as genuinely measured above, 96% of total time) tells you exactly where to look next. The workflow is: metric triggers investigation, trace localizes the cause.',
      bodyKn: 'ಒಂದೂ dashboard "P95 MCP latency 8.4s ಗೆ ಜಿಗಿಯಿತೂ" ಎಂದೂ ತೋರಿಸುವುದೂ ಏನೋ ವ್ಯವಸ್ಥಿತವಾಗಿ ತಪ್ಪೂ ಎಂದೂ ಹೇಳುತ್ತದೆ. ಒಂದೂ ನಿಧಾನ trace ತೆರೆಯುವುದೂ ನಿಖರವಾಗಿ ಎಲ್ಲಿ ನೋಡಬೇಕೂ ಎಂದೂ ಹೇಳುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'OTLP: Instrument Once, Export Anywhere', textKn: 'OTLP: ಒಮ್ಮೆ Instrument, ಎಲ್ಲಿಯಾದರೂ Export', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'OTLP Means OpenTelemetry Protocol', headingKn: 'OTLP ಎಂದರೆ OpenTelemetry Protocol',
      bodyEn: 'This module\'s emitter ends at print(json.dumps(...)). A production architecture instead sends the same span data through OTLP to a Collector, which fans out to whichever backend is chosen (Jaeger, Tempo, Langfuse, Phoenix, Datadog...). The calculator tool and the weather tool should never contain a vendor-specific call like send_to_datadog(...) -- that would defeat the entire purpose of standardizing on gen_ai.* attributes and a common Span shape.',
      bodyKn: 'ಈ module ya emitter print(json.dumps(...)) ನಲ್ಲಿ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ. ಒಂದೂ ಉತ್ಪಾದನಾ ವಾಸ್ತುಶಿಲ್ಪ ಬದಲಿಗೆ ಅದೇ span data ಅನ್ನೂ OTLP ಮೂಲಕ ಒಂದೂ Collector ಗೆ ಕಳುಹಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The Complete Concept-to-Code Map', textKn: 'ಸಂಪೂರ್ಣ Concept-to-Code Map', level: 'H2' } },
    { type: 'table', data: {
      headingEn: 'Every concept from Parts 1-3, and what genuinely implemented it', headers: ['Concept', 'What We Genuinely Built'],
      rows: [
        ['Trace', 'trace_id = new_trace_id(), shared across all 6 spans -- proved with a single-element set'],
        ['Span', 'The Span class, with span_id, parent_span_id, kind, attributes, events'],
        ['Parent-child link', 'parent_span_id -- proved mcp.call\'s parent is tool.execute, not the root agent'],
        ['Timing', 'time.time_ns() at start/end -- proved 96.1% of latency isolated to mcp.call'],
        ['CLIENT / INTERNAL', 'kind="CLIENT" for llm.chat/mcp.call; kind="INTERNAL" for agent/tool.execute'],
        ['gen_ai.* semantics', 'operation.name, provider.name, usage.input_tokens/output_tokens, tool.name, tool.call.id'],
        ['traceparent', 'make_traceparent() -- proved exact 32/16 hex-char segment lengths'],
        ['Privacy / redaction', 'redact() -- proved api_key stripped, city preserved, original data unmutated'],
      ] } },

    { type: 'heading', data: { textEn: 'The Four IDs You Must Not Confuse', textKn: 'ಗೊಂದಲಗೊಳಿಸಬಾರದ ನಾಲ್ಕೂ IDs', level: 'H2' } },
    { type: 'diagram', data: {
      titleEn: 'traceId, spanId, parentSpanId, gen_ai.tool.call.id, traceparent', titleKn: 'traceId, spanId, parentSpanId, gen_ai.tool.call.id, traceparent',
      contentEn: 'traceId -> Which overall request? (same across the whole trace)\nspanId -> Which operation? (unique per span)\nparentSpanId -> Which operation directly contains/caused this one? (builds the tree)\ngen_ai.tool.call.id -> Which specific model-requested tool invocation? (protocol correlation, matched by value not by tree position)\ntraceparent -> How does trace context cross a process/service boundary? (network propagation, built from traceId + the crossing span\'s spanId)' } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• We genuinely ran the same agent trace shape twice and measured real durations: a fast MCP call (50.7ms) vs a slow one (1000.7ms) inside an otherwise-identical trace.\n• We genuinely proved that in the slow run, 96.1% of total agent latency sits inside the nested mcp.call span -- exactly the localization value distributed tracing provides that flat logs cannot.\n• Metrics (token usage, operation duration, tool execution duration) answer "is something systemically wrong"; individual traces answer "what happened in this one request."\n• OTLP is a transport-neutral export protocol -- application/tool code should never hardcode a vendor-specific export call.\n• The module reduces to one causal chain: one user turn -> one trace -> many correctly-parented spans -> standard gen_ai.* semantics -> propagated context across MCP -> a safe-by-default content policy -> OTLP-exportable observability.',
      bodyKn: '• ಅದೇ agent trace shape ಅನ್ನೂ ನಾವು ಎರಡೂ ಬಾರಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ನಿಜ durations ಅಳೆದಿದ್ದೇವೆ.\n• slow run ನಲ್ಲಿ, ಒಟ್ಟೂ agent latency ya 96.1% nested mcp.call span ಒಳಗೆ ಇದೆ ಎಂದೂ ನಾವು ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿದ್ದೇವೆ.\n• Metrics "ಏನೋ ವ್ಯವಸ್ಥಿತವಾಗಿ ತಪ್ಪೂ" ಎಂದೂ ಉತ್ತರಿಸುತ್ತವೆ; individual traces "ಈ ಒಂದೂ request ನಲ್ಲಿ ಏನಾಯಿತೂ" ಎಂದೂ ಉತ್ತರಿಸುತ್ತವೆ.\n• OTLP ಒಂದೂ transport-neutral export protocol.\n• module ಒಂದೂ ಕಾರಣಿಕ ಸರಪಳಿಗೆ ಕಡಿಮೆಯಾಗುತ್ತದೆ: ಒಂದೂ user turn -> ಒಂದೂ trace -> ಅನೇಕ ಸರಿಯಾಗಿ-parented spans -> ಪ್ರಮಾಣಿತ gen_ai.* semantics -> propagated context -> ಸುರಕ್ಷಿತ-by-default content policy -> OTLP-exportable observability.' } },

    { type: 'quiz', data: { questions: [
      { q: 'In the genuine slow-request run, what fraction of total agent.invoke_agent duration was contained within mcp.call?', qKn: 'ನಿಜ slow-request run ನಲ್ಲಿ, agent.invoke_agent ya ಒಟ್ಟೂ duration ya ಎಷ್ಟೂ ಭಾಗ mcp.call ಒಳಗೆ ಒಳಗೊಂಡಿತ್ತೂ?',
        opts: ['About 20%', 'About 50%', 'About 96%', 'Exactly 100%'],
        optsKn: ['ಸುಮಾರೂ 20%', 'ಸುಮಾರೂ 50%', 'ಸುಮಾರೂ 96%', 'ನಿಖರವಾಗಿ 100%'],
        correct: 2 },
      { q: 'What is the workflow relationship between metrics and traces?', qKn: 'Metrics ಮತ್ತೂ traces ನಡುವಿನ workflow ಸಂಬಂಧ ಏನೂ?',
        opts: ['They are unrelated and used separately', 'A metric alert triggers investigation; a trace localizes exactly where the problem happened in one request', 'Traces replace metrics entirely', 'Metrics only work for MCP, traces only work for LLM calls'],
        optsKn: ['ಅವು ಸಂಬಂಧವಿಲ್ಲ ಮತ್ತೂ ಪ್ರತ್ಯೇಕವಾಗಿ ಬಳಸಲ್ಪಡುತ್ತವೆ', 'ಒಂದೂ metric alert ತನಿಖೆ ಪ್ರಚೋದಿಸುತ್ತದೆ; ಒಂದೂ trace ಒಂದೂ request ನಲ್ಲಿ ಸಮಸ್ಯೆ ನಿಖರವಾಗಿ ಎಲ್ಲಿ ಸಂಭವಿಸಿತೂ ಎಂದೂ ಸ್ಥಳೀಕರಿಸುತ್ತದೆ', 'Traces metrics ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬದಲಾಯಿಸುತ್ತವೆ', 'Metrics MCP ಗೆ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತವೆ'],
        correct: 1 },
      { q: 'What does OTLP stand for, and why does it matter that application code never calls a vendor SDK directly?', qKn: 'OTLP ಎಂದರೇನೂ, ಮತ್ತೂ application code ಎಂದಿಗೂ ಒಂದೂ vendor SDK ನೇರವಾಗಿ ಕರೆಯುವುದಿಲ್ಲ ಎಂದೂ ಏಕೆ ಮುಖ್ಯ?',
        opts: ['OpenTelemetry Line Protocol; it makes traces faster', 'OpenTelemetry Protocol; it keeps instrumentation portable across observability backends', 'Open Trace Logging Pattern; it is only for logs', 'It has no expansion, it is just a brand name'],
        optsKn: ['OpenTelemetry Line Protocol; ಇದೂ traces ವೇಗವಾಗಿಸುತ್ತದೆ', 'OpenTelemetry Protocol; ಇದೂ instrumentation ಅನ್ನೂ observability backends ಗಳಾದ್ಯಂತ portable ಆಗಿ ಇಡುತ್ತದೆ', 'Open Trace Logging Pattern; ಇದೂ logs ಗಾಗಿ ಮಾತ್ರ', 'ಇದಕ್ಕೆ ಯಾವುದೇ expansion ಇಲ್ಲ'],
        correct: 1 },
      { q: 'gen_ai.tool.call.id and parentSpanId both provide correlation. What is the key difference?', qKn: 'gen_ai.tool.call.id ಮತ್ತೂ parentSpanId ಎರಡೂ correlation ಒದಗಿಸುತ್ತವೆ. ಮುಖ್ಯ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['They are exactly the same thing', 'parentSpanId builds the execution tree; gen_ai.tool.call.id correlates a tool span to the model\'s requested call by value, independent of tree position', 'gen_ai.tool.call.id only exists for MCP spans', 'parentSpanId is optional but gen_ai.tool.call.id is required'],
        optsKn: ['ಅವು ನಿಖರವಾಗಿ ಒಂದೇ ವಿಷಯ', 'parentSpanId execution tree ನಿರ್ಮಿಸುತ್ತದೆ; gen_ai.tool.call.id ಒಂದೂ tool span ಅನ್ನೂ model ya ಕೋರಿಕೆಗೆ value ಮೂಲಕ ಸಂಬಂಧಿಸುತ್ತದೆ', 'gen_ai.tool.call.id MCP spans ಗಾಗಿ ಮಾತ್ರ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ', 'parentSpanId ಐಚ್ಛಿಕ ಆದರೆ gen_ai.tool.call.id ಅಗತ್ಯ'],
        correct: 1 },
      { q: 'A trace shows agent=1041.5ms, with llm.chat=20.4ms, mcp.call=1000.7ms, llm.chat=20.2ms. Where should investigation focus first?', qKn: 'ಒಂದೂ trace agent=1041.5ms ತೋರಿಸುತ್ತದೆ, llm.chat=20.4ms, mcp.call=1000.7ms, llm.chat=20.2ms ಜೊತೆ. ತನಿಖೆ ಮೊದಲೂ ಎಲ್ಲಿ ಕೇಂದ್ರೀಕರಿಸಬೇಕೂ?',
        opts: ['The first LLM call', 'The second LLM call', 'The MCP call/server or its downstream dependencies', 'The agent orchestration loop itself'],
        optsKn: ['ಮೊದಲ LLM call', 'ಎರಡನೇ LLM call', 'MCP call/server ಅಥವಾ ಅದರ downstream dependencies', 'agent orchestration loop ಸ್ವತಃ'],
        correct: 2 },
    ] } },
  ],
};
