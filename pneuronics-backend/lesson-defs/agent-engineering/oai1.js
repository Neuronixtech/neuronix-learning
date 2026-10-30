module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b32153b",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "OpenAI Agents SDK: Handoffs, Guardrails and Tracing (Part 1 of 3) — Agents, Handoffs and the Hop Limit",
 "titleKn": "OpenAI Agents SDK: Handoffs, Guardrails ಮತ್ತು Tracing (ಭಾಗ 1 / 3) — Agents, Handoffs ಮತ್ತು Hop ಮಿತಿ",
 "desc": "Build Agent, Handoff and a Runner that delegates through tool-like actions, then test keyword routing, lost context across turns and a handoff cycle with and without a hop limit.",
 "descKn": "Agent, Handoff ಮತ್ತು ಕ್ರಿಯೆಯಂತಹ ನಿಯೋಜನೆ ಮಾಡುವ Runner ನಿರ್ಮಿಸಿ, ನಂತರ ಕೀವರ್ಡ್ ರೂಟಿಂಗ್, ತಿರುವುಗಳಾದ್ಯಂತ ಕಳೆದುಹೋದ context ಮತ್ತು hop ಮಿತಿ ಇದ್ದು ಇಲ್ಲದೆ handoff ಚಕ್ರ ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Name the five primitives.",
  "Explain why a handoff is modelled as a tool-like action.",
  "Distinguish a tool call from a handoff.",
  "Test a router on mixed and paraphrased input.",
  "Bound handoff cycles with a hop limit."
 ],
 "objectivesKn": [
  "ಐದು ಮೂಲಭೂತ ಭಾಗಗಳನ್ನು ಹೆಸರಿಸಿ.",
  "Handoff ಅನ್ನು ಕ್ರಿಯೆಯಂತೆ ಮಾದರಿ ಮಾಡುವುದು ಏಕೆ ಎಂದು ವಿವರಿಸಿ.",
  "Tool ಕರೆ ಮತ್ತು handoff ಬೇರ್ಪಡಿಸಿ.",
  "Router ಅನ್ನು ಮಿಶ್ರ ಮತ್ತು ಪರ್ಯಾಯ-ಪದ ಇನ್‌ಪುಟ್ ಮೇಲೆ ಪರೀಕ್ಷಿಸಿ.",
  "Hop ಮಿತಿಯಿಂದ handoff ಚಕ್ರಗಳನ್ನು ಮಿತಿಗೊಳಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "OpenAI Agents SDK: Handoffs, Guardrails and Tracing (Part 1 of 3)",
    "textKn": "OpenAI Agents SDK: Handoffs, Guardrails ಮತ್ತು Tracing (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: Agent, FunctionTool, Handoff, Runner and the hop limit. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the OpenAI Agents SDK, not the SDK itself, and the model is a keyword stand-in, so no real LLM behaviour is measured. The pasted source was cut off inside choose_action, so the routing function and the final program are rebuilt. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: Agent, FunctionTool, Handoff, Runner ಮತ್ತು hop ಮಿತಿ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು OpenAI Agents SDK ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, SDK ಸ್ವತಃ ಅಲ್ಲ, ಮತ್ತು ಮಾದರಿ ಕೀವರ್ಡ್ ಬದಲಿ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಮೂಲ choose_action ಒಳಗೆ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ ರೂಟಿಂಗ್ ಕಾರ್ಯ ಮತ್ತು ಅಂತಿಮ ಪ್ರೋಗ್ರಾಂ ಮರುನಿರ್ಮಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Delegation as a Tool-Like Action",
    "textKn": "ಕ್ರಿಯೆಯಂತಹ ನಿಯೋಜನೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Five Primitives",
    "headingKn": "ಐದು ಮೂಲಭೂತ ಭಾಗಗಳು",
    "bodyEn": "The lesson names five primitives: Agent (who works), Handoff (who takes over), Guardrail (is this allowed), Session (what happened before) and Tracing (what happened during the run). Part 1 builds the first two. An Agent bundles instructions, tools and handoffs. A Handoff points at another agent and is exposed to the model under a descriptive name, transfer_to_<agent_name>, so delegation fits the action-selection loop the model already uses for tools.",
    "bodyKn": "ಲೆಸನ್ ಐದು ಮೂಲಭೂತ ಭಾಗಗಳನ್ನು ಹೆಸರಿಸುತ್ತದೆ: Agent (ಯಾರು ಕೆಲಸ ಮಾಡುತ್ತಾರೆ), Handoff (ಯಾರು ವಹಿಸಿಕೊಳ್ಳುತ್ತಾರೆ), Guardrail (ಇದಕ್ಕೆ ಅನುಮತಿ ಇದೆಯೇ), Session (ಮೊದಲು ಏನಾಯಿತು) ಮತ್ತು Tracing (ಓಟದ ವೇಳೆ ಏನಾಯಿತು). ಭಾಗ 1 ಮೊದಲ ಎರಡನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ. Agent ಸೂಚನೆಗಳು, tools ಮತ್ತು handoffs ಕಟ್ಟುತ್ತದೆ. Handoff ಇನ್ನೊಂದು agent ಕಡೆ ತೋರಿಸಿ ಮಾದರಿಗೆ transfer_to_<agent_name> ಎಂಬ ವಿವರಣಾತ್ಮಕ ಹೆಸರಿನಲ್ಲಿ ಕಾಣುತ್ತದೆ, ಆದ್ದರಿಂದ ನಿಯೋಜನೆ ಮಾದರಿ ಈಗಾಗಲೇ tools ಗೆ ಬಳಸುವ ಕ್ರಿಯಾ-ಆಯ್ಕೆ ಚಕ್ರಕ್ಕೆ ಹೊಂದುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Triage and Two Specialists",
    "headingKn": "Triage ಮತ್ತು ಇಬ್ಬರು ತಜ್ಞರು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Handoff: control moves to another agent</text><rect x=\"100\" y=\"26\" width=\"100\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"41\" fill=\"#e2e8f0\" text-anchor=\"middle\">triage_agent</text><text x=\"150\" y=\"53\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">chooses an action</text><rect x=\"15\" y=\"110\" width=\"110\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"70\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">billing_agent</text><text x=\"70\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">transfer_to_billing_agent</text><rect x=\"175\" y=\"110\" width=\"110\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"230\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">support_agent</text><text x=\"230\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">transfer_to_support_agent</text><path d=\"M130,60 L70,110 M170,60 L230,110\" stroke=\"#475569\"/><text x=\"150\" y=\"92\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a handoff is a tool-like action</text><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a normal tool returns to the same agent; a handoff does not</text></svg>",
    "captionEn": "Agents are nodes and handoffs are the transitions between them.",
    "captionKn": "Agents ನೋಡ್‌ಗಳು ಮತ್ತು handoffs ಅವುಗಳ ನಡುವಿನ ಪರಿವರ್ತನೆಗಳು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Tool call versus handoff",
    "headingKn": "Tool ಕರೆ ಮತ್ತು handoff ಹೋಲಿಕೆ",
    "headers": [
     "",
     "Function tool",
     "Handoff"
    ],
    "rows": [
     [
      "After the call",
      "Same agent continues",
      "Another agent is active"
     ],
     [
      "What it does",
      "Performs an operation",
      "Transfers responsibility"
     ],
     [
      "Example",
      "lookup_invoice",
      "transfer_to_billing_agent"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Runtime",
    "textKn": "Runtime ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "oai_1.py",
    "headingEn": "FunctionTool, Agent, Handoff, choose_action and Runner",
    "headingKn": "FunctionTool, Agent, Handoff, choose_action ಮತ್ತು Runner",
    "descEn": "Handoff.tool_name is derived from the target name. choose_action is a keyword stand-in for the model so the runtime mechanics can be studied without an API. Runner.run loops: ask for an action, return on final, switch the active agent on handoff, and stop with an error once max_hops is exceeded.",
    "descKn": "Handoff.tool_name ಗುರಿ ಹೆಸರಿನಿಂದ ಪಡೆಯಲಾಗುತ್ತದೆ. choose_action API ಇಲ್ಲದೆ runtime ಯಾಂತ್ರಿಕತೆ ಅಧ್ಯಯನ ಮಾಡಲು ಮಾದರಿಗೆ ಕೀವರ್ಡ್ ಬದಲಿ. Runner.run ಚಕ್ರ: ಕ್ರಿಯೆ ಕೇಳಿ, final ಆದರೆ ಹಿಂತಿರುಗಿ, handoff ಆದರೆ ಸಕ್ರಿಯ agent ಬದಲಿಸಿ, max_hops ಮೀರಿದರೆ ದೋಷದೊಂದಿಗೆ ನಿಲ್ಲುತ್ತದೆ.",
    "code": "@dataclass\nclass FunctionTool:\n    name: str\n    description: str\n    function: Callable[..., Any]\n\n    def invoke(self, **kwargs):\n        return self.function(**kwargs)\n\n\n@dataclass\nclass Agent:\n    name: str\n    instructions: str\n    tools: list = field(default_factory=list)\n    handoffs: list = field(default_factory=list)\n\n\n@dataclass\nclass Handoff:\n    target_agent: Agent\n\n    @property\n    def tool_name(self):\n        return f\"transfer_to_{self.target_agent.name}\"\n\n\nBILLING_WORDS = [\"billing\", \"charged\", \"payment\", \"invoice\", \"refund\"]\nSUPPORT_WORDS = [\"error\", \"crash\", \"bug\", \"technical\", \"broken\"]\n\n\ndef choose_action(agent, user_input):\n    \"\"\"Simulated model: keyword routing so the runtime mechanics can be studied without an API.\"\"\"\n    text = user_input.lower()\n    if agent.name == \"triage_agent\":\n        if any(w in text for w in BILLING_WORDS):\n            return {\"type\": \"handoff\", \"name\": \"transfer_to_billing_agent\"}\n        if any(w in text for w in SUPPORT_WORDS):\n            return {\"type\": \"handoff\", \"name\": \"transfer_to_support_agent\"}\n        return {\"type\": \"final\", \"content\": \"I can help route your request.\"}\n    if agent.name == \"billing_agent\":\n        return {\"type\": \"final\", \"content\": \"Billing agent: I'll help investigate the billing issue.\"}\n    if agent.name == \"support_agent\":\n        return {\"type\": \"final\", \"content\": \"Support agent: I'll help troubleshoot the technical issue.\"}\n    if agent.name == \"ping_agent\":\n        return {\"type\": \"handoff\", \"name\": \"transfer_to_pong_agent\"}\n    if agent.name == \"pong_agent\":\n        return {\"type\": \"handoff\", \"name\": \"transfer_to_ping_agent\"}\n    raise RuntimeError(f\"no policy for {agent.name}\")\n\n\nclass Runner:\n    def __init__(self, max_hops=4):\n        self.max_hops = max_hops\n        self.path = []\n\n    def resolve_handoff(self, agent, tool_name):\n        for handoff in agent.handoffs:\n            if handoff.tool_name == tool_name:\n                return handoff.target_agent\n        raise RuntimeError(f\"Unknown handoff: {tool_name}\")\n\n    def run(self, agent, user_input):\n        current, hops = agent, 0\n        self.path = [agent.name]\n        while True:\n            action = choose_action(current, user_input)\n            if action[\"type\"] == \"final\":\n                return action[\"content\"]\n            if action[\"type\"] == \"handoff\":\n                hops += 1\n                if self.max_hops is not None and hops > self.max_hops:\n                    raise RuntimeError(\"Maximum handoff count exceeded\")\n                current = self.resolve_handoff(current, action[\"name\"])\n                self.path.append(current.name)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "oai_1.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() routes three requests, lists handoff names, probes keyword routing on mixed and indirect requests, tests context across turns, bounds a ping-pong cycle with and without a hop limit, and contrasts tool and handoff.",
    "descKn": "main() ಮೂರು ವಿನಂತಿ ರೂಟ್ ಮಾಡುತ್ತದೆ, handoff ಹೆಸರುಗಳ ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ, ಮಿಶ್ರ ಮತ್ತು ಪರೋಕ್ಷ ವಿನಂತಿಗಳ ಮೇಲೆ ಕೀವರ್ಡ್ ರೂಟಿಂಗ್ ಪರೀಕ್ಷಿಸುತ್ತದೆ, ತಿರುವುಗಳಾದ್ಯಂತ context ಪರೀಕ್ಷಿಸುತ್ತದೆ, hop ಮಿತಿ ಇದ್ದು ಮತ್ತು ಇಲ್ಲದೆ ping-pong ಚಕ್ರ ಮಿತಿಗೊಳಿಸುತ್ತದೆ, ಮತ್ತು tool ಹಾಗೂ handoff ಹೋಲಿಸುತ್ತದೆ.",
    "code": "billing_agent = Agent(\"billing_agent\", \"Handle billing, invoice, payment, refund and subscription issues.\")\nsupport_agent = Agent(\"support_agent\", \"Handle technical support, bugs, errors, crashes and troubleshooting.\")\ntriage_agent = Agent(\"triage_agent\", \"Determine whether the user needs billing or technical support.\")\ntriage_agent.handoffs = [Handoff(billing_agent), Handoff(support_agent)]\nping_agent, pong_agent = Agent(\"ping_agent\", \"p\"), Agent(\"pong_agent\", \"q\")\nping_agent.handoffs, pong_agent.handoffs = [Handoff(pong_agent)], [Handoff(ping_agent)]\n\n\ndef section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Triage routes to a specialist through a tool-like handoff\")\n    for text in (\"I was charged twice.\", \"The application crashes on startup.\", \"Hello there\"):\n        runner = Runner()\n        out = runner.run(triage_agent, text)\n        print(f\"{text!r:42} path={runner.path} | {out}\")\n\n    section(\"2. Handoffs are named tools\")\n    print([h.tool_name for h in triage_agent.handoffs])\n    try:\n        Runner().resolve_handoff(billing_agent, \"transfer_to_support_agent\")\n    except RuntimeError as e:\n        print(\"billing_agent has no handoffs, so resolving one ->\", e)\n\n    section(\"3. Genuinely checking: keyword routing on mixed and indirect requests\")\n    cases = [\n        \"I was charged twice and the app also crashes\",\n        \"I was double billed last month\",\n        \"My card was declined at checkout\",\n        \"Do you offer a crash course on invoices?\",\n        \"The refund button is broken\",\n        \"Can you help me with my subscription?\",\n    ]\n    for text in cases:\n        r = Runner()\n        out = r.run(triage_agent, text)\n        print(f\"{text!r:48} -> {r.path[-1]}\")\n    print(\"mixed requests go to whichever keyword list is checked first; paraphrases ('double billed', 'declined', 'subscription') fall through unrouted, and 'crash course on invoices' went to billing only because that list is checked first\")\n    r = Runner()\n    r.run(triage_agent, \"Do you offer a crash course for new users?\")\n    print(\"'Do you offer a crash course for new users?' ->\", r.path[-1], \"(a plain substring match on 'crash' treats a sales question as a technical fault)\")\n\n    section(\"4. Genuinely checking: a handoff carries only what the runner passes\")\n    r = Runner()\n    print(\"turn 1:\", r.run(triage_agent, \"I was charged twice for Pro yesterday.\"), r.path)\n    r = Runner()\n    print(\"turn 2:\", r.run(triage_agent, \"It happened yesterday.\"), r.path)\n    print(\"the second turn is routed on its own text only; the earlier billing context was not carried, so triage could not route it\")\n\n    section(\"5. Genuinely checking: a handoff cycle needs a hop limit\")\n    r = Runner(max_hops=4)\n    try:\n        r.run(ping_agent, \"anything\")\n    except RuntimeError as e:\n        print(\"RuntimeError:\", e, \"| path:\", r.path)\n\n    class Counting(Runner):\n        def resolve_handoff(self, agent, tool_name):\n            self.calls = getattr(self, \"calls\", 0) + 1\n            if self.calls >= 5000:\n                raise KeyboardInterrupt(\"test harness stopped an unbounded loop\")\n            return super().resolve_handoff(agent, tool_name)\n    r = Counting(max_hops=None)\n    try:\n        r.run(ping_agent, \"anything\")\n    except KeyboardInterrupt as e:\n        print(\"with no hop limit:\", e, \"after\", r.calls, \"handoffs\")\n\n    section(\"6. Tool call versus handoff: who is active afterwards\")\n    lookups = []\n    invoice = FunctionTool(\"lookup_invoice\", \"Look up an invoice\", lambda invoice_id: lookups.append(invoice_id) or f\"invoice {invoice_id}: paid\")\n    active = \"billing_agent\"\n    print(\"before tool call, active agent:\", active, \"| result:\", invoice.invoke(invoice_id=\"A-1\"), \"| active after tool:\", active)\n    r = Runner()\n    r.run(triage_agent, \"refund please\")\n    print(\"before handoff, active agent: triage_agent | active after handoff:\", r.path[-1])"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Triage routes to a specialist through a tool-like handoff ---\n'I was charged twice.'                     path=['triage_agent', 'billing_agent'] | Billing agent: I'll help investigate the billing issue.\n'The application crashes on startup.'      path=['triage_agent', 'support_agent'] | Support agent: I'll help troubleshoot the technical issue.\n'Hello there'                              path=['triage_agent'] | I can help route your request.\n\n--- 2. Handoffs are named tools ---\n['transfer_to_billing_agent', 'transfer_to_support_agent']\nbilling_agent has no handoffs, so resolving one -> Unknown handoff: transfer_to_support_agent\n\n--- 3. Genuinely checking: keyword routing on mixed and indirect requests ---\n'I was charged twice and the app also crashes'   -> billing_agent\n'I was double billed last month'                 -> triage_agent\n'My card was declined at checkout'               -> triage_agent\n'Do you offer a crash course on invoices?'       -> billing_agent\n'The refund button is broken'                    -> billing_agent\n'Can you help me with my subscription?'          -> triage_agent\nmixed requests go to whichever keyword list is checked first; paraphrases ('double billed', 'declined', 'subscription') fall through unrouted, and 'crash course on invoices' went to billing only because that list is checked first\n'Do you offer a crash course for new users?' -> support_agent (a plain substring match on 'crash' treats a sales question as a technical fault)\n\n--- 4. Genuinely checking: a handoff carries only what the runner passes ---\nturn 1: Billing agent: I'll help investigate the billing issue. ['triage_agent', 'billing_agent']\nturn 2: I can help route your request. ['triage_agent']\nthe second turn is routed on its own text only; the earlier billing context was not carried, so triage could not route it\n\n--- 5. Genuinely checking: a handoff cycle needs a hop limit ---\nRuntimeError: Maximum handoff count exceeded | path: ['ping_agent', 'pong_agent', 'ping_agent', 'pong_agent', 'ping_agent']\nwith no hop limit: test harness stopped an unbounded loop after 5000 handoffs\n\n--- 6. Tool call versus handoff: who is active afterwards ---\nbefore tool call, active agent: billing_agent | result: invoice A-1: paid | active after tool: billing_agent\nbefore handoff, active agent: triage_agent | active after handoff: billing_agent"
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
    "headingEn": "The Path Is the Evidence",
    "headingKn": "ಮಾರ್ಗವೇ ಸಾಕ್ಷ್ಯ",
    "bodyEn": "Section 1 shows the active agent changing: \"I was charged twice.\" ran triage_agent then billing_agent, the crash request ran triage_agent then support_agent, and \"Hello there\" never left triage_agent and got the routing fallback. Section 6 contrasts the two action kinds: after a lookup_invoice call the active agent was still billing_agent, while after a handoff the active agent changed from triage_agent to billing_agent.",
    "bodyKn": "ವಿಭಾಗ 1 ಸಕ್ರಿಯ agent ಬದಲಾಗುವುದನ್ನು ತೋರಿಸುತ್ತದೆ: \"I was charged twice.\" triage_agent ನಂತರ billing_agent ಚಲಾಯಿಸಿತು, crash ವಿನಂತಿ triage_agent ನಂತರ support_agent, ಮತ್ತು \"Hello there\" triage_agent ಬಿಟ್ಟು ಹೋಗದೆ ರೂಟಿಂಗ್ fallback ಪಡೆಯಿತು. ವಿಭಾಗ 6 ಎರಡು ಕ್ರಿಯಾ ಬಗೆಗಳನ್ನು ಹೋಲಿಸುತ್ತದೆ: lookup_invoice ಕರೆಯ ನಂತರ ಸಕ್ರಿಯ agent ಇನ್ನೂ billing_agent, handoff ನಂತರ triage_agent ನಿಂದ billing_agent ಗೆ ಬದಲಾಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Keyword Routing Fails Quietly in Both Directions",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕೀವರ್ಡ್ ರೂಟಿಂಗ್ ಎರಡೂ ದಿಕ್ಕಿನಲ್ಲಿ ಮೌನವಾಗಿ ವಿಫಲವಾಗುತ್ತದೆ",
    "bodyEn": "Section 3 tried six requests. \"I was charged twice and the app also crashes\" went only to billing_agent: the billing keywords are checked first, so the technical half was silently dropped. \"I was double billed last month\", \"My card was declined at checkout\" and \"Can you help me with my subscription?\" all stayed with triage_agent because none of the keywords occurred. Substring matching also over-matches: \"Do you offer a crash course for new users?\" was sent to support_agent because it contains \"crash\". This is our keyword stand-in, not a real model, but it shows that a router must be tested on mixed, paraphrased and look-alike inputs.",
    "bodyKn": "ವಿಭಾಗ 3 ಆರು ವಿನಂತಿ ಪ್ರಯತ್ನಿಸಿತು. \"I was charged twice and the app also crashes\" billing_agent ಗೆ ಮಾತ್ರ ಹೋಯಿತು: billing ಕೀವರ್ಡ್‌ಗಳನ್ನು ಮೊದಲು ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ ತಾಂತ್ರಿಕ ಭಾಗ ಮೌನವಾಗಿ ಬಿಡಲ್ಪಟ್ಟಿತು. \"I was double billed last month\", \"My card was declined at checkout\" ಮತ್ತು \"Can you help me with my subscription?\" ಯಾವುದೇ ಕೀವರ್ಡ್ ಇಲ್ಲದ ಕಾರಣ triage_agent ನಲ್ಲಿ ಉಳಿದವು. Substring ಹೊಂದಾಣಿಕೆ ಅತಿಯಾಗಿಯೂ ಹೊಂದುತ್ತದೆ: \"Do you offer a crash course for new users?\" \"crash\" ಹೊಂದಿರುವುದರಿಂದ support_agent ಗೆ ಹೋಯಿತು. ಇದು ನಮ್ಮ ಕೀವರ್ಡ್ ಬದಲಿ, ನಿಜವಾದ ಮಾದರಿ ಅಲ್ಲ, ಆದರೆ router ಅನ್ನು ಮಿಶ್ರ, ಪರ್ಯಾಯ-ಪದ ಮತ್ತು ಹೋಲುವ ಇನ್‌ಪುಟ್‌ಗಳ ಮೇಲೆ ಪರೀಕ್ಷಿಸಬೇಕು ಎಂದು ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Context Does Not Travel Unless You Carry It, and Cycles Need a Limit",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Context ಒಯ್ಯದ ಹೊರತು ಪ್ರಯಾಣಿಸುವುದಿಲ್ಲ, ಮತ್ತು ಚಕ್ರಗಳಿಗೆ ಮಿತಿ ಬೇಕು",
    "bodyEn": "Section 4: turn 1 \"I was charged twice for Pro yesterday.\" routed to billing_agent. A separate turn 2, \"It happened yesterday.\", was routed on its own text only and ended at triage_agent with the fallback, because the runner passes just the current input. Handoff context has to be designed (Part 3 adds a Session). Section 5: ping_agent and pong_agent hand off to each other. With max_hops=4 the run raised \"Maximum handoff count exceeded\" with the path ping, pong, ping, pong, ping. With the limit removed, a test harness had to stop the loop itself after 5000 handoffs, since nothing in the runner would ever end it.",
    "bodyKn": "ವಿಭಾಗ 4: ತಿರುವು 1 \"I was charged twice for Pro yesterday.\" billing_agent ಗೆ ರೂಟ್ ಆಯಿತು. ಪ್ರತ್ಯೇಕ ತಿರುವು 2, \"It happened yesterday.\", ತನ್ನ ಪಠ್ಯದ ಮೇಲೆ ಮಾತ್ರ ರೂಟ್ ಆಗಿ fallback ನೊಂದಿಗೆ triage_agent ನಲ್ಲಿ ಮುಗಿಯಿತು, ಏಕೆಂದರೆ runner ಪ್ರಸ್ತುತ ಇನ್‌ಪುಟ್ ಮಾತ್ರ ಕಳುಹಿಸುತ್ತದೆ. Handoff context ಅನ್ನು ವಿನ್ಯಾಸ ಮಾಡಬೇಕು (ಭಾಗ 3 Session ಸೇರಿಸುತ್ತದೆ). ವಿಭಾಗ 5: ping_agent ಮತ್ತು pong_agent ಒಂದಕ್ಕೊಂದು handoff ಮಾಡುತ್ತವೆ. max_hops=4 ಇದ್ದಾಗ ಓಟ ping, pong, ping, pong, ping ಮಾರ್ಗದೊಂದಿಗೆ \"Maximum handoff count exceeded\" ಎತ್ತಿತು. ಮಿತಿ ತೆಗೆದಾಗ ಚಕ್ರವನ್ನು ಟೆಸ್ಟ್ ಹಾರ್ನೆಸ್ ತಾನೇ 5000 handoffs ನಂತರ ನಿಲ್ಲಿಸಬೇಕಾಯಿತು, ಏಕೆಂದರೆ runner ನಲ್ಲಿ ಅದನ್ನು ಮುಗಿಸುವುದು ಏನೂ ಇಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Splitting a giant support prompt into specialists keeps each agent narrow, and modelling delegation as a tool-like action means the runtime needs no separate protocol. The price is routing errors, lost context and possible loops, all of which must be tested.",
    "bodyKn": "ದೊಡ್ಡ ಬೆಂಬಲ ಪ್ರಾಂಪ್ಟ್ ಅನ್ನು ತಜ್ಞರಾಗಿ ವಿಭಜಿಸುವುದು ಪ್ರತಿ agent ಅನ್ನು ಕಿರಿದಾಗಿಡುತ್ತದೆ, ಮತ್ತು ನಿಯೋಜನೆಯನ್ನು ಕ್ರಿಯೆಯಂತೆ ಮಾದರಿ ಮಾಡುವುದರಿಂದ runtime ಗೆ ಪ್ರತ್ಯೇಕ ಪ್ರೋಟೋಕಾಲ್ ಬೇಕಿಲ್ಲ. ಬೆಲೆ: ರೂಟಿಂಗ್ ದೋಷಗಳು, ಕಳೆದುಹೋದ context ಮತ್ತು ಸಂಭವನೀಯ ಚಕ್ರಗಳು, ಎಲ್ಲವನ್ನೂ ಪರೀಕ್ಷಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a handoff just switches the agent name.\" A handoff transfers responsibility, and whatever context the target needs must be passed deliberately.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"handoff ಕೇವಲ agent ಹೆಸರು ಬದಲಿಸುತ್ತದೆ.\" Handoff ಜವಾಬ್ದಾರಿ ವರ್ಗಾಯಿಸುತ್ತದೆ, ಮತ್ತು ಗುರಿಗೆ ಬೇಕಾದ context ಅನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಕಳುಹಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Agent: instructions plus tools plus handoffs. Handoff: delegation that transfers control. transfer_to_<name>: the model-visible handoff action. Runner: the loop that executes agents. Hop: one handoff. max_hops: the bound on handoffs.",
    "bodyKn": "Agent: ಸೂಚನೆಗಳು ಜೊತೆ tools ಜೊತೆ handoffs. Handoff: ನಿಯಂತ್ರಣ ವರ್ಗಾಯಿಸುವ ನಿಯೋಜನೆ. transfer_to_<name>: ಮಾದರಿಗೆ ಕಾಣುವ handoff ಕ್ರಿಯೆ. Runner: agents ಚಲಾಯಿಸುವ ಚಕ್ರ. Hop: ಒಂದು handoff. max_hops: handoffs ಮೇಲಿನ ಮಿತಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A handoff is exposed as a tool-like action. 2) A tool returns to the same agent; a handoff changes the active agent. 3) Keyword routing dropped half of a mixed request, missed paraphrases and matched \"crash course\". 4) A follow-up turn was unroutable because only the current text was passed. 5) A handoff cycle needs max_hops.",
    "bodyKn": "1) Handoff ಕ್ರಿಯೆಯಂತೆ ಒಡ್ಡಲ್ಪಡುತ್ತದೆ. 2) Tool ಅದೇ agent ಗೆ ಮರಳುತ್ತದೆ; handoff ಸಕ್ರಿಯ agent ಬದಲಿಸುತ್ತದೆ. 3) ಕೀವರ್ಡ್ ರೂಟಿಂಗ್ ಮಿಶ್ರ ವಿನಂತಿಯ ಅರ್ಧ ಬಿಟ್ಟಿತು, ಪರ್ಯಾಯ ಪದಗಳನ್ನು ತಪ್ಪಿಸಿತು ಮತ್ತು \"crash course\" ಹೊಂದಿತು. 4) ಪ್ರಸ್ತುತ ಪಠ್ಯ ಮಾತ್ರ ಕಳುಹಿಸಿದ ಕಾರಣ ಅನುಸರಣಾ ತಿರುವು ರೂಟ್ ಆಗಲಿಲ್ಲ. 5) handoff ಚಕ್ರಕ್ಕೆ max_hops ಬೇಕು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What happens to the active agent after a function-tool call?",
      "qKn": "Function-tool ಕರೆಯ ನಂತರ ಸಕ್ರಿಯ agent ಗೆ ಏನಾಗುತ್ತದೆ?",
      "opts": [
       "It changes to the tool",
       "It stays the same agent",
       "The run ends",
       "A new session starts"
      ],
      "optsKn": [
       "tool ಗೆ ಬದಲಾಗುತ್ತದೆ",
       "ಅದೇ agent ಆಗಿರುತ್ತದೆ",
       "ಓಟ ಮುಗಿಯುತ್ತದೆ",
       "ಹೊಸ session ಪ್ರಾರಂಭ"
      ],
      "correct": 1
     },
     {
      "q": "Which agent received \"I was charged twice and the app also crashes\"?",
      "qKn": "\"I was charged twice and the app also crashes\" ಯಾವ agent ಗೆ ಹೋಯಿತು?",
      "opts": [
       "support_agent",
       "Both specialists",
       "billing_agent only, because its keywords are checked first",
       "Neither"
      ],
      "optsKn": [
       "support_agent",
       "ಇಬ್ಬರೂ ತಜ್ಞರು",
       "billing_agent ಮಾತ್ರ, ಏಕೆಂದರೆ ಅದರ ಕೀವರ್ಡ್‌ಗಳನ್ನು ಮೊದಲು ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ",
       "ಯಾವುದೂ ಅಲ್ಲ"
      ],
      "correct": 2
     },
     {
      "q": "Why was the follow-up \"It happened yesterday.\" not routed?",
      "qKn": "\"It happened yesterday.\" ಅನುಸರಣೆ ಏಕೆ ರೂಟ್ ಆಗಲಿಲ್ಲ?",
      "opts": [
       "Handoffs cannot be repeated",
       "The runner passed only the current text, not the earlier turn",
       "The agent was unregistered",
       "The hop limit was reached"
      ],
      "optsKn": [
       "handoffs ಪುನರಾವರ್ತಿಸಲಾಗದು",
       "Runner ಪ್ರಸ್ತುತ ಪಠ್ಯ ಮಾತ್ರ ಕಳುಹಿಸಿತು, ಹಿಂದಿನ ತಿರುವಲ್ಲ",
       "agent ನೋಂದಾಯಿಸಿರಲಿಲ್ಲ",
       "hop ಮಿತಿ ತಲುಪಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What did the ping/pong run show with max_hops=None?",
      "qKn": "max_hops=None ಇದ್ದಾಗ ping/pong ಓಟ ಏನು ತೋರಿಸಿತು?",
      "opts": [
       "It ended after two hops",
       "It never ended on its own; the harness stopped it after 5000 handoffs",
       "It raised KeyError",
       "It returned final"
      ],
      "optsKn": [
       "ಎರಡು hops ನಂತರ ಮುಗಿಯಿತು",
       "ತಾನಾಗಿ ಎಂದೂ ಮುಗಿಯಲಿಲ್ಲ; ಹಾರ್ನೆಸ್ 5000 handoffs ನಂತರ ನಿಲ್ಲಿಸಿತು",
       "KeyError ಎತ್ತಿತು",
       "final ಹಿಂತಿರುಗಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why is \"crash course\" a useful test input?",
      "qKn": "\"crash course\" ಏಕೆ ಉಪಯುಕ್ತ ಪರೀಕ್ಷಾ ಇನ್‌ಪುಟ್?",
      "opts": [
       "It is a tool name",
       "It shows a substring match treating a non-fault question as a technical fault",
       "It always routes to billing",
       "It disables guardrails"
      ],
      "optsKn": [
       "ಅದು tool ಹೆಸರು",
       "ದೋಷವಲ್ಲದ ಪ್ರಶ್ನೆಯನ್ನು substring ಹೊಂದಾಣಿಕೆ ತಾಂತ್ರಿಕ ದೋಷವೆಂದು ಪರಿಗಣಿಸುವುದನ್ನು ತೋರಿಸುತ್ತದೆ",
       "ಅದು ಯಾವಾಗಲೂ billing ಗೆ ಹೋಗುತ್ತದೆ",
       "ಅದು guardrails ನಿಷ್ಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
