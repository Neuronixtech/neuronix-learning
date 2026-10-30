module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b32153b",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "OpenAI Agents SDK: Handoffs, Guardrails and Tracing (Part 3 of 3) — Sessions, Tracing and the Complete Runner",
 "titleKn": "OpenAI Agents SDK: Handoffs, Guardrails ಮತ್ತು Tracing (ಭಾಗ 3 / 3) — Sessions, Tracing ಮತ್ತು ಸಂಪೂರ್ಣ Runner",
 "desc": "Add a Session and span-based tracing to the runner, then find that a stored session is not a read session, that the pasted ordering stores rejected secrets, that short span ids collide and that a failing exporter can break a run.",
 "descKn": "Runner ಗೆ Session ಮತ್ತು span-ಆಧಾರಿತ tracing ಸೇರಿಸಿ, ನಂತರ ಸಂಗ್ರಹಿಸಿದ session ಓದಿದ session ಅಲ್ಲ, ಅಂಟಿಸಿದ ಕ್ರಮ ತಿರಸ್ಕೃತ ರಹಸ್ಯ ಸಂಗ್ರಹಿಸುತ್ತದೆ, ಸಣ್ಣ span ids ಡಿಕ್ಕಿ ಹೊಡೆಯುತ್ತವೆ ಮತ್ತು ವಿಫಲ exporter ಓಟ ಮುರಿಯಬಹುದು ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Distinguish conversation state from execution state.",
  "Build spans with parents and status.",
  "Keep sensitive input out of sessions and traces.",
  "Isolate telemetry failures from the run.",
  "Explain why history must be selected, not replayed."
 ],
 "objectivesKn": [
  "ಸಂಭಾಷಣೆ state ಮತ್ತು ಚಲಾವಣೆ state ಬೇರ್ಪಡಿಸಿ.",
  "Parent ಮತ್ತು ಸ್ಥಿತಿ ಇರುವ spans ನಿರ್ಮಿಸಿ.",
  "ಸೂಕ್ಷ್ಮ ಇನ್‌ಪುಟ್ ಅನ್ನು sessions ಮತ್ತು traces ನಿಂದ ಹೊರಗಿಡಿ.",
  "ಟೆಲಿಮೆಟ್ರಿ ವೈಫಲ್ಯಗಳನ್ನು ಓಟದಿಂದ ಪ್ರತ್ಯೇಕಿಸಿ.",
  "ಇತಿಹಾಸವನ್ನು ಮರುಪ್ರಸಾರ ಮಾಡದೆ ಆರಿಸಬೇಕು ಏಕೆ ಎಂದು ವಿವರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "OpenAI Agents SDK: Handoffs, Guardrails and Tracing (Part 3 of 3)",
    "textKn": "OpenAI Agents SDK: Handoffs, Guardrails ಮತ್ತು Tracing (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: sessions, trace spans, processors and the complete runner. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the OpenAI Agents SDK, not the SDK itself, and the model is a keyword stand-in, so no real LLM behaviour is measured. The pasted final code was cut off, so the Session, Tracer and Runner are rebuilt. The span-id collision count is a random measurement and will differ slightly on each run. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: sessions, trace spans, processors ಮತ್ತು ಸಂಪೂರ್ಣ runner. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು OpenAI Agents SDK ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, SDK ಸ್ವತಃ ಅಲ್ಲ, ಮತ್ತು ಮಾದರಿ ಕೀವರ್ಡ್ ಬದಲಿ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಅಂತಿಮ ಕೋಡ್ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ Session, Tracer ಮತ್ತು Runner ಮರುನಿರ್ಮಿತ. Span-id ಡಿಕ್ಕಿ ಎಣಿಕೆ ಯಾದೃಚ್ಛಿಕ ಅಳತೆ ಮತ್ತು ಪ್ರತಿ ಓಟದಲ್ಲಿ ಸ್ವಲ್ಪ ಬೇರೆಯಾಗುತ್ತದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "History and Observability",
    "textKn": "ಇತಿಹಾಸ ಮತ್ತು ವೀಕ್ಷಣೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Conversation State Versus Execution State",
    "headingKn": "ಸಂಭಾಷಣೆ state ಮತ್ತು ಚಲಾವಣೆ state",
    "bodyEn": "A Session stores what was said: user and assistant messages across separate runs. Tracing records how a run produced its answer, as a root span with child spans for guardrails, agents, handoffs and tools, each with a name, id, parent id, timing, status and attributes. They answer different questions: the session serves the user's continuity, the trace serves the developer's understanding. Neither controls anything; guardrails control and traces explain.",
    "bodyKn": "Session ಏನು ಹೇಳಲಾಯಿತು ಎಂದು ಸಂಗ್ರಹಿಸುತ್ತದೆ: ಪ್ರತ್ಯೇಕ ಓಟಗಳಾದ್ಯಂತ ಬಳಕೆದಾರ ಮತ್ತು ಸಹಾಯಕ ಸಂದೇಶಗಳು. Tracing ಓಟ ತನ್ನ ಉತ್ತರ ಹೇಗೆ ಉತ್ಪಾದಿಸಿತು ಎಂದು ದಾಖಲಿಸುತ್ತದೆ: guardrails, agents, handoffs ಮತ್ತು tools ಗೆ ಮಕ್ಕಳ spans ಇರುವ ಮೂಲ span, ಪ್ರತಿಯೊಂದಕ್ಕೂ ಹೆಸರು, id, parent id, ಸಮಯ, ಸ್ಥಿತಿ ಮತ್ತು ಗುಣಲಕ್ಷಣಗಳು. ಅವು ಬೇರೆ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುತ್ತವೆ: session ಬಳಕೆದಾರರ ನಿರಂತರತೆಗೆ, trace ಡೆವಲಪರ್‌ನ ತಿಳುವಳಿಕೆಗೆ. ಎರಡೂ ಏನನ್ನೂ ನಿಯಂತ್ರಿಸುವುದಿಲ್ಲ; guardrails ನಿಯಂತ್ರಿಸುತ್ತವೆ ಮತ್ತು traces ವಿವರಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Session and Trace Around a Run",
    "headingKn": "ಓಟದ ಸುತ್ತ Session ಮತ್ತು Trace",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Session and trace around one run</text><rect x=\"10\" y=\"30\" width=\"130\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"75\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">Session</text><text x=\"75\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">conversation history</text><rect x=\"160\" y=\"30\" width=\"130\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"225\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">Trace</text><text x=\"225\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">spans: what happened</text><rect x=\"80\" y=\"100\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"115\" fill=\"#e2e8f0\" text-anchor=\"middle\">Runner.run()</text><text x=\"150\" y=\"127\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">guardrails, agents, tools</text><path d=\"M75,64 L120,100 M225,64 L180,100\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">history is what was said; the trace is how the run produced it</text></svg>",
    "captionEn": "The session is what was said; the trace is how the run produced it.",
    "captionKn": "Session ಏನು ಹೇಳಲಾಯಿತು; trace ಓಟ ಅದನ್ನು ಹೇಗೆ ಉತ್ಪಾದಿಸಿತು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Session versus trace",
    "headingKn": "Session ಮತ್ತು trace ಹೋಲಿಕೆ",
    "headers": [
     "",
     "Session",
     "Trace"
    ],
    "rows": [
     [
      "Holds",
      "User and assistant messages",
      "Spans: timing, status, parents"
     ],
     [
      "Audience",
      "The conversation",
      "Developers and operators"
     ],
     [
      "Risk",
      "Storing sensitive input",
      "Capturing sensitive attributes"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Complete Runner",
    "textKn": "ಸಂಪೂರ್ಣ Runner ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "oai_3.py",
    "headingEn": "Session, Span, Tracer and the traced Runner",
    "headingKn": "Session, Span, Tracer ಮತ್ತು trace ಮಾಡುವ Runner",
    "descEn": "Tracer.span is a context manager that ends a span as ok, or as error if an exception passes through. Runner.run opens a root span, runs the input guardrail in a child span, records each agent decision, handoff and tool call, and appends user and assistant messages to the session. Two options are experiments: validate_before_store changes the order of storing and validating, and use_history lets routing read earlier turns.",
    "descKn": "Tracer.span ಒಂದು context manager, ಅದು span ಅನ್ನು ok ಎಂದು, ಅಥವಾ ವಿನಾಯಿತಿ ಹಾದುಹೋದರೆ error ಎಂದು ಮುಗಿಸುತ್ತದೆ. Runner.run ಮೂಲ span ತೆರೆದು, input guardrail ಅನ್ನು ಮಗು span ನಲ್ಲಿ ಚಲಾಯಿಸಿ, ಪ್ರತಿ agent ನಿರ್ಧಾರ, handoff ಮತ್ತು tool ಕರೆ ದಾಖಲಿಸಿ, ಬಳಕೆದಾರ ಮತ್ತು ಸಹಾಯಕ ಸಂದೇಶಗಳನ್ನು session ಗೆ ಸೇರಿಸುತ್ತದೆ. ಎರಡು ಆಯ್ಕೆಗಳು ಪ್ರಯೋಗಗಳು: validate_before_store ಸಂಗ್ರಹ ಮತ್ತು ಮಾನ್ಯತೆಯ ಕ್ರಮ ಬದಲಿಸುತ್ತದೆ, ಮತ್ತು use_history ರೂಟಿಂಗ್‌ಗೆ ಹಿಂದಿನ ತಿರುವುಗಳನ್ನು ಓದಲು ಬಿಡುತ್ತದೆ.",
    "code": "class Session:\n    def __init__(self, session_id):\n        self.session_id = session_id\n        self.messages = []\n\n    def add(self, role, content):\n        self.messages.append({\"role\": role, \"content\": content})\n\n    def history(self):\n        return list(self.messages)\n\n\n@dataclass\nclass Span:\n    name: str\n    span_id: str\n    parent_id: Optional[str]\n    start_time: float\n    end_time: Optional[float] = None\n    status: str = \"running\"\n    attributes: dict = field(default_factory=dict)\n\n    @property\n    def duration_ms(self):\n        return None if self.end_time is None else (self.end_time - self.start_time) * 1000\n\n\nclass Tracer:\n    def __init__(self, safe_processors=False):\n        self.spans, self.processors, self.safe = [], [], safe_processors\n\n    def add_processor(self, p):\n        self.processors.append(p)\n\n    def start_span(self, name, parent_id=None, attributes=None):\n        s = Span(name, str(uuid.uuid4())[:8], parent_id, time.perf_counter(), attributes=attributes or {})\n        self.spans.append(s)\n        return s\n\n    def end_span(self, span, status=\"ok\"):\n        span.end_time = time.perf_counter()\n        span.status = status\n        for p in self.processors:\n            if self.safe:\n                try:\n                    p(span)\n                except Exception:\n                    pass\n            else:\n                p(span)\n\n    @contextmanager\n    def span(self, name, parent_id=None, attributes=None):\n        item = self.start_span(name, parent_id, attributes)\n        try:\n            yield item\n        except Exception:\n            self.end_span(item, \"error\")\n            raise\n        else:\n            self.end_span(item, \"ok\")\n\n    def print_trace(self):\n        for s in self.spans:\n            d = \"running\" if s.duration_ms is None else f\"{s.duration_ms:.3f} ms\"\n            print(f\"- {s.name} [{s.status}]\")\n\n\ndef choose_action(agent, text, history=None, use_history=False):\n    \"\"\"Simulated model. With use_history it also reads the previous user turn when the current one is ambiguous.\"\"\"\n    t = text.lower()\n    if agent.name == \"triage_agent\":\n        if any(w in t for w in BILLING_WORDS):\n            return {\"type\": \"handoff\", \"name\": \"transfer_to_billing_agent\"}\n        if any(w in t for w in SUPPORT_WORDS):\n            return {\"type\": \"handoff\", \"name\": \"transfer_to_support_agent\"}\n        if use_history and history:\n            previous = \" \".join(m[\"content\"].lower() for m in history if m[\"role\"] == \"user\")\n            if any(w in previous for w in BILLING_WORDS):\n                return {\"type\": \"handoff\", \"name\": \"transfer_to_billing_agent\"}\n        return {\"type\": \"final\", \"content\": \"I can help route your request.\"}\n    if agent.name == \"billing_agent\":\n        if \"refund\" in t:\n            return {\"type\": \"tool\", \"name\": \"issue_refund\", \"arguments\": {\"amount\": 120.0}}\n        return {\"type\": \"final\", \"content\": \"Billing agent: I'll investigate the billing issue.\"}\n    if agent.name == \"support_agent\":\n        return {\"type\": \"final\", \"content\": \"Support agent: I'll troubleshoot the technical issue.\"}\n    if agent.name == \"ping_agent\":\n        return {\"type\": \"handoff\", \"name\": \"transfer_to_pong_agent\"}\n    if agent.name == \"pong_agent\":\n        return {\"type\": \"handoff\", \"name\": \"transfer_to_ping_agent\"}\n    raise RuntimeError(agent.name)\n\n\nclass Runner:\n    def __init__(self, tracer=None, max_hops=4, validate_before_store=False, use_history=False):\n        self.tracer = tracer or Tracer()\n        self.max_hops, self.validate_first, self.use_history = max_hops, validate_before_store, use_history\n        self.audit = []\n\n    def _input_guard(self, agent, text, root):\n        with self.tracer.span(\"guardrail.input\", root.span_id):\n            for g in agent.input_guardrails:\n                r = g(text)\n                if r.tripwire_triggered:\n                    raise InputGuardrailTripwireTriggered(r.reason)\n\n    def run(self, agent, user_input, session=None):\n        with self.tracer.span(\"agent_run\", attributes={\"starting_agent\": agent.name, \"input_length\": len(user_input)}) as root:\n            prior = session.history() if session else []\n            if session is not None and not self.validate_first:\n                session.add(\"user\", user_input)\n            try:\n                self._input_guard(agent, user_input, root)\n            except InputGuardrailTripwireTriggered as e:\n                self.audit.append({\"event\": \"input_rejected\", \"reason\": str(e), \"length\": len(user_input)})\n                raise\n            if session is not None and self.validate_first:\n                session.add(\"user\", user_input)\n            current, hops = agent, 0\n            while True:\n                with self.tracer.span(f\"agent.{current.name}\", root.span_id):\n                    action = choose_action(current, user_input, prior, self.use_history)\n                if action[\"type\"] == \"final\":\n                    out = action[\"content\"]\n                    with self.tracer.span(\"guardrail.output\", root.span_id):\n                        for g in current.output_guardrails:\n                            r = g(out)\n                            if r.tripwire_triggered:\n                                raise OutputGuardrailTripwireTriggered(r.reason)\n                    if session is not None:\n                        session.add(\"assistant\", out)\n                    return out\n                if action[\"type\"] == \"handoff\":\n                    hops += 1\n                    with self.tracer.span(\"handoff\", root.span_id, {\"source_agent\": current.name, \"handoff_tool\": action[\"name\"]}) as h:\n                        if hops > self.max_hops:\n                            raise RuntimeError(\"Maximum handoff count exceeded\")\n                        current = next(x.target_agent for x in current.handoffs if x.tool_name == action[\"name\"])\n                        h.attributes[\"target_agent\"] = current.name\n                if action[\"type\"] == \"tool\":\n                    tool = next(t for t in current.tools if t.name == action[\"name\"])\n                    with self.tracer.span(f\"tool.{tool.name}\", root.span_id, {\"tool_name\": tool.name}):\n                        out = tool.invoke(**action[\"arguments\"])\n                    if session is not None:\n                        session.add(\"assistant\", out)\n                    return out"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "oai_3.py",
    "headingEn": "main(): eight experiments",
    "headingKn": "main(): ಎಂಟು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs scenarios with a session and a trace, tests whether routing reads history, compares the two storing orders, checks span attributes, measures short span-id collisions, breaks and fixes a trace processor, bounds a cycle in the trace, and measures session growth.",
    "descKn": "main() session ಮತ್ತು trace ಇರುವ ಸನ್ನಿವೇಶ ಚಲಾಯಿಸುತ್ತದೆ, ರೂಟಿಂಗ್ ಇತಿಹಾಸ ಓದುತ್ತದೆಯೇ ಎಂದು ಪರೀಕ್ಷಿಸುತ್ತದೆ, ಎರಡು ಸಂಗ್ರಹ ಕ್ರಮ ಹೋಲಿಸುತ್ತದೆ, span ಗುಣಲಕ್ಷಣ ಪರಿಶೀಲಿಸುತ್ತದೆ, ಸಣ್ಣ span-id ಡಿಕ್ಕಿ ಅಳೆಯುತ್ತದೆ, trace processor ಮುರಿದು ಸರಿಪಡಿಸುತ್ತದೆ, trace ನಲ್ಲಿ ಚಕ್ರ ಮಿತಿಗೊಳಿಸುತ್ತದೆ, ಮತ್ತು session ಬೆಳವಣಿಗೆ ಅಳೆಯುತ್ತದೆ.",
    "code": "def build_agents():\n    refund_tool = FunctionTool(\"issue_refund\", \"Issue an approved customer refund.\", issue_refund, [refund_guardrail])\n    billing = Agent(\"billing_agent\", \"billing\", tools=[refund_tool])\n    support = Agent(\"support_agent\", \"support\")\n    triage = Agent(\"triage_agent\", \"route\", handoffs=[Handoff(billing), Handoff(support)],\n                   input_guardrails=[sensitive_input_guardrail], output_guardrails=[sensitive_output_guardrail])\n    ping, pong = Agent(\"ping_agent\", \"p\"), Agent(\"pong_agent\", \"q\")\n    ping.handoffs, pong.handoffs = [Handoff(pong)], [Handoff(ping)]\n    return triage, ping\n\n\ndef section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    triage, ping = build_agents()\n\n    section(\"1. Four scenarios with a session and a trace\")\n    session = Session(\"customer-001\")\n    for text in (\"I was charged twice.\", \"The application crashes on startup.\", \"I want a refund.\"):\n        r = Runner()\n        print(f\"{text!r} -> {r.run(triage, text, session)}\")\n        print(\"  spans:\", [f\"{s.name}[{s.status}]\" for s in r.tracer.spans])\n    r = Runner()\n    try:\n        r.run(triage, \"My password is abc123 and billing is broken.\", Session(\"x\"))\n    except InputGuardrailTripwireTriggered as e:\n        print(\"password input -> InputGuardrailTripwireTriggered:\", e)\n        print(\"  spans:\", [f\"{s.name}[{s.status}]\" for s in r.tracer.spans])\n    print(\"session history after three successful runs:\", len(session.history()), \"messages\")\n\n    section(\"2. Genuinely checking: a session stores history but routing ignores it unless you pass it in\")\n    for use_history in (False, True):\n        s = Session(\"multi-turn\")\n        r = Runner(use_history=use_history)\n        r.run(triage, \"I was charged twice.\", s)\n        out = r.run(triage, \"It happened yesterday.\", s)\n        print(f\"use_history={use_history}: second turn -> {out}\")\n    print(\"with the pasted design the session is written but never read by the routing step, so the follow-up is unroutable\")\n\n    section(\"3. Genuinely checking: rejected input and the session (pasted ordering vs validate-first)\")\n    for validate_first in (False, True):\n        s = Session(\"order-test\")\n        r = Runner(validate_before_store=validate_first)\n        try:\n            r.run(triage, \"My password is abc123.\", s)\n        except InputGuardrailTripwireTriggered:\n            pass\n        stored = [m[\"content\"] for m in s.history()]\n        print(f\"validate_before_store={validate_first}: session contains {stored} | audit={r.audit}\")\n    print(\"the pasted order stores the secret in session history even though the guardrail rejected it; the audit event keeps the length, not the text\")\n\n    section(\"4. Genuinely checking: span attributes and sensitive data\")\n    r = Runner()\n    try:\n        r.run(triage, \"My password is abc123.\", Session(\"t\"))\n    except InputGuardrailTripwireTriggered:\n        pass\n    print(\"root span attributes:\", r.tracer.spans[0].attributes)\n    print(\"only input_length and the starting agent were recorded, not the text\")\n\n    section(\"5. Genuinely measuring: 8-character span ids from uuid4\")\n    seen, collisions, n = set(), 0, 200_000\n    for _ in range(n):\n        i = str(uuid.uuid4())[:8]\n        if i in seen:\n            collisions += 1\n        seen.add(i)\n    expected = n * n / 2 / 16 ** 8\n    print(f\"{n} ids generated, collisions found: {collisions} (birthday estimate about {expected:.1f})\")\n    print(\"short ids are fine for a single small run but collide at scale; a tree built from parent_id would then link the wrong spans\")\n\n    section(\"6. Genuinely checking: a failing trace processor\")\n    for safe in (False, True):\n        tr = Tracer(safe_processors=safe)\n        tr.add_processor(lambda span: (_ for _ in ()).throw(RuntimeError(\"exporter down\")))\n        rr = Runner(tracer=tr)\n        try:\n            print(f\"safe_processors={safe}: \", rr.run(triage, \"I was charged twice.\", Session(\"p\")))\n        except Exception as e:\n            print(f\"safe_processors={safe}: run failed with {type(e).__name__}: {e}\")\n    print(\"an exporter outage turned a successful run into an error until processor exceptions were isolated\")\n\n    section(\"7. Hop cycle in the trace\")\n    r = Runner(max_hops=3)\n    try:\n        r.run(ping, \"x\")\n    except RuntimeError as e:\n        print(\"RuntimeError:\", e)\n    print(\"trace:\", [f\"{s.name}[{s.status}]\" for s in r.tracer.spans])\n\n    section(\"8. Genuinely measuring: session growth\")\n    s = Session(\"bloat\")\n    r = Runner()\n    for turn in range(1, 101):\n        r.run(triage, \"I was charged twice.\", s)\n        if turn in (1, 10, 100):\n            words = sum(len(m[\"content\"].split()) for m in s.history())\n            print(f\"after {turn:>3} turns: {len(s.history()):>3} messages, {words:>4} words if all were sent to the model each time\")\n    print(\"history grows linearly; only a selected slice should be sent per call\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Four scenarios with a session and a trace ---\n'I was charged twice.' -> Billing agent: I'll investigate the billing issue.\n  spans: ['agent_run[ok]', 'guardrail.input[ok]', 'agent.triage_agent[ok]', 'handoff[ok]', 'agent.billing_agent[ok]', 'guardrail.output[ok]']\n'The application crashes on startup.' -> Support agent: I'll troubleshoot the technical issue.\n  spans: ['agent_run[ok]', 'guardrail.input[ok]', 'agent.triage_agent[ok]', 'handoff[ok]', 'agent.support_agent[ok]', 'guardrail.output[ok]']\n'I want a refund.' -> Refund approved for $120.00\n  spans: ['agent_run[ok]', 'guardrail.input[ok]', 'agent.triage_agent[ok]', 'handoff[ok]', 'agent.billing_agent[ok]', 'tool.issue_refund[ok]']\npassword input -> InputGuardrailTripwireTriggered: Sensitive input detected: password\n  spans: ['agent_run[error]', 'guardrail.input[error]']\nsession history after three successful runs: 6 messages\n\n--- 2. Genuinely checking: a session stores history but routing ignores it unless you pass it in ---\nuse_history=False: second turn -> I can help route your request.\nuse_history=True: second turn -> Billing agent: I'll investigate the billing issue.\nwith the pasted design the session is written but never read by the routing step, so the follow-up is unroutable\n\n--- 3. Genuinely checking: rejected input and the session (pasted ordering vs validate-first) ---\nvalidate_before_store=False: session contains ['My password is abc123.'] | audit=[{'event': 'input_rejected', 'reason': 'Sensitive input detected: password', 'length': 22}]\nvalidate_before_store=True: session contains [] | audit=[{'event': 'input_rejected', 'reason': 'Sensitive input detected: password', 'length': 22}]\nthe pasted order stores the secret in session history even though the guardrail rejected it; the audit event keeps the length, not the text\n\n--- 4. Genuinely checking: span attributes and sensitive data ---\nroot span attributes: {'starting_agent': 'triage_agent', 'input_length': 22}\nonly input_length and the starting agent were recorded, not the text\n\n--- 5. Genuinely measuring: 8-character span ids from uuid4 ---\n200000 ids generated, collisions found: 3 (birthday estimate about 4.7)\nshort ids are fine for a single small run but collide at scale; a tree built from parent_id would then link the wrong spans\n\n--- 6. Genuinely checking: a failing trace processor ---\nsafe_processors=False: run failed with RuntimeError: exporter down\nsafe_processors=True:  Billing agent: I'll investigate the billing issue.\nan exporter outage turned a successful run into an error until processor exceptions were isolated\n\n--- 7. Hop cycle in the trace ---\nRuntimeError: Maximum handoff count exceeded\ntrace: ['agent_run[error]', 'guardrail.input[ok]', 'agent.ping_agent[ok]', 'handoff[ok]', 'agent.pong_agent[ok]', 'handoff[ok]', 'agent.ping_agent[ok]', 'handoff[ok]', 'agent.pong_agent[ok]', 'handoff[error]']\n\n--- 8. Genuinely measuring: session growth ---\nafter   1 turns:   2 messages,   11 words if all were sent to the model each time\nafter  10 turns:  20 messages,  110 words if all were sent to the model each time\nafter 100 turns: 200 messages, 1100 words if all were sent to the model each time\nhistory grows linearly; only a selected slice should be sent per call"
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Reading the Verified Output",
    "textKn": "ಪರಿಶೀಲಿತ Output ಓದುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Trace Names the Failure",
    "headingKn": "Trace ವೈಫಲ್ಯಕ್ಕೆ ಹೆಸರಿಡುತ್ತದೆ",
    "bodyEn": "Section 1: a billing request produced the spans agent_run, guardrail.input, agent.triage_agent, handoff, agent.billing_agent and guardrail.output, all ok. The refund request ended at tool.issue_refund, because the tool branch returns before any output guardrail. The password request produced only agent_run [error] and guardrail.input [error], with no agent or tool span, so execution visibly stopped at the entrance. Section 7 shows a hop cycle as ping, pong, ping, pong and a final handoff [error].",
    "bodyKn": "ವಿಭಾಗ 1: billing ವಿನಂತಿ agent_run, guardrail.input, agent.triage_agent, handoff, agent.billing_agent ಮತ್ತು guardrail.output spans ಉತ್ಪಾದಿಸಿತು, ಎಲ್ಲವೂ ok. ಮರುಪಾವತಿ ವಿನಂತಿ tool.issue_refund ನಲ್ಲಿ ಮುಗಿಯಿತು, ಏಕೆಂದರೆ tool ಶಾಖೆ ಯಾವುದೇ output guardrail ಮೊದಲು ಹಿಂತಿರುಗುತ್ತದೆ. Password ವಿನಂತಿ agent_run [error] ಮತ್ತು guardrail.input [error] ಮಾತ್ರ ಉತ್ಪಾದಿಸಿತು, agent ಅಥವಾ tool span ಇಲ್ಲದೆ, ಆದ್ದರಿಂದ ಚಲಾವಣೆ ಪ್ರವೇಶದಲ್ಲೇ ನಿಂತಿತು ಎಂದು ಕಾಣುತ್ತದೆ. ವಿಭಾಗ 7 hop ಚಕ್ರವನ್ನು ping, pong, ping, pong ಮತ್ತು ಕೊನೆಯ handoff [error] ಎಂದು ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Stored Session Is Not a Read Session, and the Pasted Order Stored the Secret",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಂಗ್ರಹಿಸಿದ Session ಓದಿದ Session ಅಲ್ಲ, ಮತ್ತು ಅಂಟಿಸಿದ ಕ್ರಮ ರಹಸ್ಯ ಸಂಗ್ರಹಿಸಿತು",
    "bodyEn": "Section 2: after \"I was charged twice.\" the follow-up \"It happened yesterday.\" returned the routing fallback when routing ignored history, and reached billing_agent when routing read the stored session. Writing history does nothing until a step reads it. Section 3 compared two orders. In the pasted order, the user message is stored before the input guardrail runs, so after a rejection the session still contained \"My password is abc123.\" With validate-first the session was empty. In both cases the audit event kept only the reason and the length (22), not the text. Section 4 confirmed that the root span recorded input_length and the starting agent, not the input itself. Rejected input belongs in a security event, not in conversation history.",
    "bodyKn": "ವಿಭಾಗ 2: \"I was charged twice.\" ನಂತರ ರೂಟಿಂಗ್ ಇತಿಹಾಸ ನಿರ್ಲಕ್ಷಿಸಿದಾಗ ಅನುಸರಣೆ \"It happened yesterday.\" ರೂಟಿಂಗ್ fallback ಹಿಂತಿರುಗಿಸಿತು, ಮತ್ತು ರೂಟಿಂಗ್ ಸಂಗ್ರಹಿಸಿದ session ಓದಿದಾಗ billing_agent ತಲುಪಿತು. ಒಂದು ಹಂತ ಓದುವವರೆಗೆ ಇತಿಹಾಸ ಬರೆಯುವುದು ಏನೂ ಮಾಡುವುದಿಲ್ಲ. ವಿಭಾಗ 3 ಎರಡು ಕ್ರಮ ಹೋಲಿಸಿತು. ಅಂಟಿಸಿದ ಕ್ರಮದಲ್ಲಿ input guardrail ಚಲಿಸುವ ಮೊದಲು ಬಳಕೆದಾರ ಸಂದೇಶ ಸಂಗ್ರಹವಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ ತಿರಸ್ಕಾರದ ನಂತರವೂ session \"My password is abc123.\" ಹೊಂದಿತ್ತು. Validate-first ನಲ್ಲಿ session ಖಾಲಿ ಇತ್ತು. ಎರಡೂ ಸಂದರ್ಭದಲ್ಲಿ audit ಘಟನೆ ಕಾರಣ ಮತ್ತು ಉದ್ದ (22) ಮಾತ್ರ ಇಟ್ಟಿತು, ಪಠ್ಯವಲ್ಲ. ವಿಭಾಗ 4 ಮೂಲ span input_length ಮತ್ತು ಪ್ರಾರಂಭಿಕ agent ದಾಖಲಿಸಿತು, ಇನ್‌ಪುಟ್ ಸ್ವತಃ ಅಲ್ಲ ಎಂದು ದೃಢಪಡಿಸಿತು. ತಿರಸ್ಕೃತ ಇನ್‌ಪುಟ್ ಭದ್ರತಾ ಘಟನೆಯಲ್ಲಿ ಇರಬೇಕು, ಸಂಭಾಷಣೆ ಇತಿಹಾಸದಲ್ಲಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Observability Can Break the Run and Collide With Itself",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ವೀಕ್ಷಣೆ ಓಟ ಮುರಿಯಬಹುದು ಮತ್ತು ತನಗೇ ಡಿಕ್ಕಿ ಹೊಡೆಯಬಹುದು",
    "bodyEn": "Section 6: a trace processor that raised \"exporter down\" turned a successful billing run into a RuntimeError when processor exceptions were not isolated. With them isolated, the same run returned its answer. Section 5: 200,000 eight-character span ids (uuid4 truncated to 8 hex characters) produced 7 collisions in this run, against a birthday estimate of about 4.7. A tree built from parent ids would then link the wrong spans, so short ids suit a small run, not a busy service. Section 8: session history grew linearly, 2 messages and 11 words after one turn, 20 and 110 after ten, 200 and 1100 after a hundred, so only a selected slice should reach the model each time.",
    "bodyKn": "ವಿಭಾಗ 6: \"exporter down\" ಎತ್ತಿದ trace processor processor ವಿನಾಯಿತಿಗಳನ್ನು ಪ್ರತ್ಯೇಕಿಸದಿದ್ದಾಗ ಯಶಸ್ವಿ billing ಓಟವನ್ನು RuntimeError ಆಗಿ ಬದಲಿಸಿತು. ಪ್ರತ್ಯೇಕಿಸಿದಾಗ ಅದೇ ಓಟ ತನ್ನ ಉತ್ತರ ಹಿಂತಿರುಗಿಸಿತು. ವಿಭಾಗ 5: 200,000 ಎಂಟು-ಅಕ್ಷರದ span ids (uuid4 ಅನ್ನು 8 hex ಅಕ್ಷರಗಳಿಗೆ ಕತ್ತರಿಸಿ) ಈ ಓಟದಲ್ಲಿ ಸುಮಾರು 4.7 ರ ಹುಟ್ಟುಹಬ್ಬ ಅಂದಾಜಿನ ವಿರುದ್ಧ 7 ಡಿಕ್ಕಿ ಉತ್ಪಾದಿಸಿತು. Parent ids ನಿಂದ ಕಟ್ಟಿದ ಮರ ತಪ್ಪು spans ಜೋಡಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಸಣ್ಣ ids ಸಣ್ಣ ಓಟಕ್ಕೆ ಸೂಕ್ತ, ಬ್ಯುಸಿ ಸೇವೆಗಲ್ಲ. ವಿಭಾಗ 8: session ಇತಿಹಾಸ ರೇಖೀಯವಾಗಿ ಬೆಳೆಯಿತು, ಒಂದು ತಿರುವಿನ ನಂತರ 2 ಸಂದೇಶ ಮತ್ತು 11 ಪದ, ಹತ್ತರ ನಂತರ 20 ಮತ್ತು 110, ನೂರರ ನಂತರ 200 ಮತ್ತು 1100, ಆದ್ದರಿಂದ ಆಯ್ದ ಭಾಗ ಮಾತ್ರ ಪ್ರತಿ ಬಾರಿ ಮಾದರಿ ತಲುಪಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "What This Model Does Not Prove",
    "headingKn": "ಈ ಮಾದರಿ ಏನು ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ",
    "bodyEn": "The routing model is a keyword stand-in and the tool path returns directly instead of feeding the result back to a model, as the source itself notes. Nothing here measures a real LLM or the real SDK. The lessons are about where the runtime needs state, checks and limits, and how to test them.",
    "bodyKn": "ರೂಟಿಂಗ್ ಮಾದರಿ ಕೀವರ್ಡ್ ಬದಲಿ ಮತ್ತು ಮೂಲವೇ ಹೇಳುವಂತೆ tool ಮಾರ್ಗ ಫಲಿತಾಂಶವನ್ನು ಮಾದರಿಗೆ ಮರಳಿ ನೀಡದೆ ನೇರವಾಗಿ ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ಇಲ್ಲಿ ಯಾವುದೂ ನಿಜವಾದ LLM ಅಥವಾ ನಿಜವಾದ SDK ಅಳೆಯುವುದಿಲ್ಲ. ಪಾಠಗಳು runtime ಗೆ state, ಪರಿಶೀಲನೆ ಮತ್ತು ಮಿತಿಗಳು ಎಲ್ಲಿ ಬೇಕು ಮತ್ತು ಅವನ್ನು ಹೇಗೆ ಪರೀಕ್ಷಿಸುವುದು ಎಂಬುದರ ಬಗ್ಗೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Sessions give continuity, traces give explanations, and both need design: what to store, what to send to the model, what to record without leaking, and how to keep the telemetry path from breaking the product.",
    "bodyKn": "Sessions ನಿರಂತರತೆ ನೀಡುತ್ತವೆ, traces ವಿವರಣೆ ನೀಡುತ್ತವೆ, ಮತ್ತು ಎರಡಕ್ಕೂ ವಿನ್ಯಾಸ ಬೇಕು: ಏನು ಸಂಗ್ರಹಿಸಬೇಕು, ಮಾದರಿಗೆ ಏನು ಕಳುಹಿಸಬೇಕು, ಸೋರಿಕೆ ಇಲ್ಲದೆ ಏನು ದಾಖಲಿಸಬೇಕು, ಮತ್ತು ಟೆಲಿಮೆಟ್ರಿ ಮಾರ್ಗ ಉತ್ಪನ್ನ ಮುರಿಯದಂತೆ ಹೇಗೆ ಇಡಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"tracing everything is harmless.\" Traces and sessions are data stores; capturing raw input copies secrets into them.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಎಲ್ಲವನ್ನೂ trace ಮಾಡುವುದು ಹಾನಿಕರವಲ್ಲ.\" Traces ಮತ್ತು sessions ದತ್ತಾಂಶ ಸಂಗ್ರಹಗಳು; ಕಚ್ಚಾ ಇನ್‌ಪುಟ್ ದಾಖಲಿಸುವುದು ರಹಸ್ಯಗಳನ್ನು ಅವುಗಳಿಗೆ ನಕಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Session: persisted conversation history. Trace: the record of one run. Span: one timed operation with a parent. Processor: a consumer of finished spans. Audit event: a security record that omits raw content. Hop limit: a bound on handoffs.",
    "bodyKn": "Session: ಸಂಗ್ರಹಿತ ಸಂಭಾಷಣೆ ಇತಿಹಾಸ. Trace: ಒಂದು ಓಟದ ದಾಖಲೆ. Span: parent ಇರುವ ಒಂದು ಸಮಯ-ಅಳತೆಯ ಕಾರ್ಯಾಚರಣೆ. Processor: ಮುಗಿದ spans ಬಳಸುವುದು. Audit ಘಟನೆ: ಕಚ್ಚಾ ವಿಷಯ ಬಿಡುವ ಭದ್ರತಾ ದಾಖಲೆ. Hop ಮಿತಿ: handoffs ಮೇಲಿನ ಮಿತಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The trace shows where a run stopped. 2) A stored session helps only if a step reads it. 3) The pasted order stored a rejected password in the session. 4) Spans should record lengths and ids, not raw input. 5) 8-character span ids collided 7 times in 200,000. 6) A failing exporter broke a successful run until isolated. 7) Session history grows linearly and must be selected.",
    "bodyKn": "1) ಓಟ ಎಲ್ಲಿ ನಿಂತಿತು ಎಂದು trace ತೋರಿಸುತ್ತದೆ. 2) ಒಂದು ಹಂತ ಓದಿದರೆ ಮಾತ್ರ ಸಂಗ್ರಹಿಸಿದ session ಸಹಾಯ ಮಾಡುತ್ತದೆ. 3) ಅಂಟಿಸಿದ ಕ್ರಮ ತಿರಸ್ಕೃತ password ಅನ್ನು session ನಲ್ಲಿ ಸಂಗ್ರಹಿಸಿತು. 4) Spans ಉದ್ದ ಮತ್ತು ids ದಾಖಲಿಸಬೇಕು, ಕಚ್ಚಾ ಇನ್‌ಪುಟ್ ಅಲ್ಲ. 5) 8-ಅಕ್ಷರದ span ids 200,000 ರಲ್ಲಿ 7 ಬಾರಿ ಡಿಕ್ಕಿ ಹೊಡೆದವು. 6) ವಿಫಲ exporter ಪ್ರತ್ಯೇಕಿಸುವವರೆಗೆ ಯಶಸ್ವಿ ಓಟ ಮುರಿಯಿತು. 7) Session ಇತಿಹಾಸ ರೇಖೀಯವಾಗಿ ಬೆಳೆಯುತ್ತದೆ ಮತ್ತು ಆರಿಸಬೇಕು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did the password request's trace contain?",
      "qKn": "Password ವಿನಂತಿಯ trace ಏನು ಹೊಂದಿತ್ತು?",
      "opts": [
       "A full billing run",
       "agent_run [error] and guardrail.input [error] only",
       "A tool span",
       "No spans"
      ],
      "optsKn": [
       "ಪೂರ್ಣ billing ಓಟ",
       "agent_run [error] ಮತ್ತು guardrail.input [error] ಮಾತ್ರ",
       "tool span",
       "ಯಾವುದೇ spans ಇಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "Why did the second turn fail to route when history was ignored?",
      "qKn": "ಇತಿಹಾಸ ನಿರ್ಲಕ್ಷಿಸಿದಾಗ ಎರಡನೇ ತಿರುವು ಏಕೆ ರೂಟ್ ಆಗಲಿಲ್ಲ?",
      "opts": [
       "The session was empty",
       "The session was written but no step read it",
       "Spans were missing",
       "The hop limit"
      ],
      "optsKn": [
       "session ಖಾಲಿ ಇತ್ತು",
       "session ಬರೆಯಲಾಗಿತ್ತು ಆದರೆ ಯಾವ ಹಂತವೂ ಓದಲಿಲ್ಲ",
       "spans ಇರಲಿಲ್ಲ",
       "hop ಮಿತಿ"
      ],
      "correct": 1
     },
     {
      "q": "In the pasted ordering, what did the session contain after a rejected password?",
      "qKn": "ಅಂಟಿಸಿದ ಕ್ರಮದಲ್ಲಿ ತಿರಸ್ಕೃತ password ನಂತರ session ಏನು ಹೊಂದಿತ್ತು?",
      "opts": [
       "Nothing",
       "The rejected text itself",
       "A hash of it",
       "Only its length"
      ],
      "optsKn": [
       "ಏನೂ ಇಲ್ಲ",
       "ತಿರಸ್ಕೃತ ಪಠ್ಯ ಸ್ವತಃ",
       "ಅದರ hash",
       "ಅದರ ಉದ್ದ ಮಾತ್ರ"
      ],
      "correct": 1
     },
     {
      "q": "What happened when the trace processor raised and was not isolated?",
      "qKn": "Trace processor ಎತ್ತಿ ಪ್ರತ್ಯೇಕಿಸದಿದ್ದಾಗ ಏನಾಯಿತು?",
      "opts": [
       "The run succeeded",
       "A successful run failed with the exporter's error",
       "The span was skipped silently",
       "The session was cleared"
      ],
      "optsKn": [
       "ಓಟ ಯಶಸ್ವಿಯಾಯಿತು",
       "ಯಶಸ್ವಿ ಓಟ exporter ದೋಷದೊಂದಿಗೆ ವಿಫಲವಾಯಿತು",
       "span ಮೌನವಾಗಿ ಬಿಡಲ್ಪಟ್ಟಿತು",
       "session ತೆರವಾಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why are 8-character span ids risky at scale?",
      "qKn": "ಪ್ರಮಾಣದಲ್ಲಿ 8-ಅಕ್ಷರದ span ids ಏಕೆ ಅಪಾಯಕಾರಿ?",
      "opts": [
       "They are too long",
       "Collisions occur (7 in 200,000 here), so parent links can point at the wrong span",
       "They cannot be printed",
       "uuid4 is not random"
      ],
      "optsKn": [
       "ಅವು ತುಂಬಾ ಉದ್ದ",
       "ಡಿಕ್ಕಿಗಳು ಸಂಭವಿಸುತ್ತವೆ (ಇಲ್ಲಿ 200,000 ರಲ್ಲಿ 7), ಆದ್ದರಿಂದ parent ಕೊಂಡಿಗಳು ತಪ್ಪು span ಕಡೆ ತೋರಬಹುದು",
       "ಅವನ್ನು ಮುದ್ರಿಸಲಾಗದು",
       "uuid4 ಯಾದೃಚ್ಛಿಕವಲ್ಲ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
