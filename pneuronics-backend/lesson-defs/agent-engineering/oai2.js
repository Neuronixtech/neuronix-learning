module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b32153b",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "OpenAI Agents SDK: Handoffs, Guardrails and Tracing (Part 2 of 3) — Guardrails, Tripwires and Scheduling",
 "titleKn": "OpenAI Agents SDK: Handoffs, Guardrails ಮತ್ತು Tracing (ಭಾಗ 2 / 3) — Guardrails, Tripwires ಮತ್ತು ವೇಳಾಪಟ್ಟಿ",
 "desc": "Add input, tool and output guardrails with tripwire exceptions, then test refund edge cases, evasion of keyword rules, where guardrails actually run, and blocking versus parallel scheduling with real threads.",
 "descKn": "Tripwire ವಿನಾಯಿತಿಗಳೊಂದಿಗೆ input, tool ಮತ್ತು output guardrails ಸೇರಿಸಿ, ನಂತರ ಮರುಪಾವತಿ ಅಂಚಿನ ಪ್ರಕರಣಗಳು, ಕೀವರ್ಡ್ ನಿಯಮಗಳ ತಪ್ಪಿಸುವಿಕೆ, guardrails ನಿಜವಾಗಿ ಎಲ್ಲಿ ಚಲಿಸುತ್ತವೆ, ಮತ್ತು ನಿಜವಾದ threads ಜೊತೆ blocking ವರ್ಸಸ್ parallel ವೇಳಾಪಟ್ಟಿ ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Distinguish input, tool and output guardrails.",
  "Explain detection versus enforcement.",
  "Find gaps in numeric and keyword policies.",
  "Map where guardrails actually run.",
  "Reason about blocking versus parallel scheduling."
 ],
 "objectivesKn": [
  "Input, tool ಮತ್ತು output guardrails ಬೇರ್ಪಡಿಸಿ.",
  "ಪತ್ತೆ ಮತ್ತು ಜಾರಿ ವಿವರಿಸಿ.",
  "ಸಂಖ್ಯಾ ಮತ್ತು ಕೀವರ್ಡ್ ನೀತಿಗಳಲ್ಲಿನ ಅಂತರ ಕಂಡುಹಿಡಿಯಿರಿ.",
  "Guardrails ನಿಜವಾಗಿ ಎಲ್ಲಿ ಚಲಿಸುತ್ತವೆ ಎಂದು ನಕ್ಷೆ ಮಾಡಿ.",
  "Blocking ವರ್ಸಸ್ parallel ವೇಳಾಪಟ್ಟಿ ಬಗ್ಗೆ ತರ್ಕಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "OpenAI Agents SDK: Handoffs, Guardrails and Tracing (Part 2 of 3)",
    "textKn": "OpenAI Agents SDK: Handoffs, Guardrails ಮತ್ತು Tracing (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: input, output and tool guardrails, tripwires and parallel versus blocking scheduling. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the OpenAI Agents SDK, not the SDK itself, and the model is a keyword stand-in, so no real LLM behaviour is measured. The pasted full program was cut off, so it is rebuilt. The parallel-versus-blocking timings use real threads and sleeps standing in for model and guardrail latency. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: input, output ಮತ್ತು tool guardrails, tripwires ಮತ್ತು parallel ವರ್ಸಸ್ blocking ವೇಳಾಪಟ್ಟಿ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು OpenAI Agents SDK ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, SDK ಸ್ವತಃ ಅಲ್ಲ, ಮತ್ತು ಮಾದರಿ ಕೀವರ್ಡ್ ಬದಲಿ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಸಂಪೂರ್ಣ ಪ್ರೋಗ್ರಾಂ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ ಅದನ್ನು ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. Parallel-ವರ್ಸಸ್-blocking ಸಮಯಗಳು ಮಾದರಿ ಮತ್ತು guardrail ವಿಳಂಬದ ಬದಲು ನಿಜವಾದ threads ಮತ್ತು sleeps ಬಳಸುತ್ತವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Guarding the Boundaries",
    "textKn": "ಗಡಿಗಳನ್ನು ಕಾಯುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Detection Is Not Enforcement",
    "headingKn": "ಪತ್ತೆ ಜಾರಿ ಅಲ್ಲ",
    "bodyEn": "A guardrail is a validation layer at a boundary. It returns a GuardrailResult, a plain judgement with a tripwire flag and a reason. The runner turns a tripped result into an exception, which stops normal execution. Separating the judgement from the reaction keeps policy reusable. Three boundaries matter: input (before the run enters the loop), tool (around each function-tool call) and output (before the final answer leaves). Each guardrail sees only the data available at its own boundary.",
    "bodyKn": "Guardrail ಒಂದು ಗಡಿಯಲ್ಲಿನ ಮಾನ್ಯತಾ ಪದರ. ಅದು GuardrailResult ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಅದು tripwire ಧ್ವಜ ಮತ್ತು ಕಾರಣ ಇರುವ ಸರಳ ತೀರ್ಮಾನ. Runner ಪ್ರಚೋದಿತ ಫಲಿತಾಂಶವನ್ನು ವಿನಾಯಿತಿಯಾಗಿ ಬದಲಿಸುತ್ತದೆ, ಅದು ಸಾಮಾನ್ಯ ಚಲಾವಣೆ ನಿಲ್ಲಿಸುತ್ತದೆ. ತೀರ್ಮಾನ ಮತ್ತು ಪ್ರತಿಕ್ರಿಯೆ ಬೇರ್ಪಡಿಸುವುದು ನೀತಿಯನ್ನು ಮರುಬಳಕೆಗೆ ಯೋಗ್ಯವಾಗಿಡುತ್ತದೆ. ಮೂರು ಗಡಿಗಳು ಮುಖ್ಯ: input (ಓಟ ಚಕ್ರ ಪ್ರವೇಶಿಸುವ ಮೊದಲು), tool (ಪ್ರತಿ function-tool ಕರೆಯ ಸುತ್ತ) ಮತ್ತು output (ಅಂತಿಮ ಉತ್ತರ ಹೊರಹೋಗುವ ಮೊದಲು). ಪ್ರತಿ guardrail ತನ್ನ ಗಡಿಯಲ್ಲಿ ಲಭ್ಯವಿರುವ ದತ್ತಾಂಶ ಮಾತ್ರ ನೋಡುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Input, Tool and Output Guardrails",
    "headingKn": "Input, Tool ಮತ್ತು Output Guardrails",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Three guardrail boundaries</text><rect x=\"10\" y=\"40\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"50\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">INPUT</text><text x=\"50\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">before the loop</text><rect x=\"110\" y=\"40\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">AGENT</text><text x=\"150\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">handoffs inside</text><rect x=\"210\" y=\"40\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"250\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">OUTPUT</text><text x=\"250\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">final answer only</text><path d=\"M90,57 H110 M190,57 H210\" stroke=\"#475569\"/><rect x=\"110\" y=\"110\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">TOOL</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">around each call</text><path d=\"M150,74 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">each guardrail guards only the boundary it is attached to</text></svg>",
    "captionEn": "Each guardrail guards the boundary it is attached to and nothing else.",
    "captionKn": "ಪ್ರತಿ guardrail ತಾನು ಜೋಡಿಸಿದ ಗಡಿಯನ್ನು ಮಾತ್ರ ಕಾಯುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Blocking versus parallel guardrails",
    "headingKn": "Blocking ವರ್ಸಸ್ parallel guardrails",
    "headers": [
     "",
     "Blocking",
     "Parallel"
    ],
    "rows": [
     [
      "Order",
      "Guardrail, then main work",
      "Both start together"
     ],
     [
      "Allowed request",
      "Pays guardrail latency",
      "Hides guardrail latency"
     ],
     [
      "Rejected request",
      "Main work never starts",
      "Main work already started"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Guarded Runtime",
    "textKn": "ರಕ್ಷಿತ Runtime ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "oai_2.py",
    "headingEn": "Tripwires, GuardrailResult, guarded tools and the Runner",
    "headingKn": "Tripwires, GuardrailResult, ರಕ್ಷಿತ tools ಮತ್ತು Runner",
    "descEn": "Three exception types name the three boundaries. FunctionTool.invoke runs its guardrails before the function. refund_guardrail rejects non-positive amounts and anything over 500. The Runner runs input guardrails once before the loop and output guardrails on the final answer; the tool branch returns its result directly.",
    "descKn": "ಮೂರು ವಿನಾಯಿತಿ ಬಗೆಗಳು ಮೂರು ಗಡಿಗಳನ್ನು ಹೆಸರಿಸುತ್ತವೆ. FunctionTool.invoke ಕಾರ್ಯಕ್ಕೆ ಮೊದಲು ತನ್ನ guardrails ಚಲಾಯಿಸುತ್ತದೆ. refund_guardrail ಧನಾತ್ಮಕವಲ್ಲದ ಮೊತ್ತ ಮತ್ತು 500 ಮೀರಿದ್ದನ್ನು ತಿರಸ್ಕರಿಸುತ್ತದೆ. Runner input guardrails ಅನ್ನು ಚಕ್ರಕ್ಕೆ ಮೊದಲು ಒಮ್ಮೆ ಮತ್ತು output guardrails ಅನ್ನು ಅಂತಿಮ ಉತ್ತರದ ಮೇಲೆ ಚಲಾಯಿಸುತ್ತದೆ; tool ಶಾಖೆ ತನ್ನ ಫಲಿತಾಂಶ ನೇರವಾಗಿ ಹಿಂತಿರುಗಿಸುತ್ತದೆ.",
    "code": "class InputGuardrailTripwireTriggered(Exception):\n    pass\n\n\nclass OutputGuardrailTripwireTriggered(Exception):\n    pass\n\n\nclass ToolGuardrailTripwireTriggered(Exception):\n    pass\n\n\n@dataclass\nclass GuardrailResult:\n    tripwire_triggered: bool\n    reason: str\n\n\n@dataclass\nclass FunctionTool:\n    name: str\n    description: str\n    function: Callable[..., Any]\n    guardrails: list = field(default_factory=list)\n\n    def invoke(self, **kwargs):\n        for guardrail in self.guardrails:\n            result = guardrail(kwargs)\n            if result.tripwire_triggered:\n                raise ToolGuardrailTripwireTriggered(result.reason)\n        return self.function(**kwargs)\n\n\n@dataclass\nclass Handoff:\n    target_agent: \"Agent\"\n\n    @property\n    def tool_name(self):\n        return f\"transfer_to_{self.target_agent.name}\"\n\n\n@dataclass\nclass Agent:\n    name: str\n    instructions: str\n    tools: list = field(default_factory=list)\n    handoffs: list = field(default_factory=list)\n    input_guardrails: list = field(default_factory=list)\n    output_guardrails: list = field(default_factory=list)\n\n\ndef sensitive_input_guardrail(text):\n    for term in (\"password\", \"secret key\", \"api key\"):\n        if term in text.lower():\n            return GuardrailResult(True, f\"Sensitive input detected: {term}\")\n    return GuardrailResult(False, \"Input accepted\")\n\n\ndef sensitive_output_guardrail(text):\n    for term in (\"internal secret\", \"private token\", \"customer password\"):\n        if term in text.lower():\n            return GuardrailResult(True, f\"Sensitive output detected: {term}\")\n    return GuardrailResult(False, \"Output accepted\")\n\n\nREFUND_CALLS = []\n\n\ndef issue_refund(amount):\n    REFUND_CALLS.append(amount)\n    return f\"Refund approved for ${amount:.2f}\"\n\n\ndef refund_guardrail(arguments):\n    amount = arguments.get(\"amount\", 0)\n    if amount <= 0:\n        return GuardrailResult(True, \"Refund amount must be positive\")\n    if amount > 500:\n        return GuardrailResult(True, \"Automatic refunds cannot exceed $500\")\n    return GuardrailResult(False, \"Refund allowed\")\n\n\nrefund_tool = FunctionTool(\"issue_refund\", \"Issue an approved customer refund.\", issue_refund, [refund_guardrail])\n\n\ndef choose_action(agent, user_input):\n    text = user_input.lower()\n    if agent.name == \"triage_agent\":\n        if any(w in text for w in BILLING_WORDS):\n            return {\"type\": \"handoff\", \"name\": \"transfer_to_billing_agent\"}\n        if any(w in text for w in SUPPORT_WORDS):\n            return {\"type\": \"handoff\", \"name\": \"transfer_to_support_agent\"}\n        return {\"type\": \"final\", \"content\": \"I can help route your request.\"}\n    if agent.name == \"billing_agent\":\n        if \"refund\" in text:\n            return {\"type\": \"tool\", \"name\": \"issue_refund\", \"arguments\": {\"amount\": 120.0}}\n        return {\"type\": \"final\", \"content\": \"Billing agent: I'll investigate the billing issue.\"}\n    if agent.name == \"support_agent\":\n        return {\"type\": \"final\", \"content\": \"Support agent: I'll troubleshoot the technical issue.\"}\n    if agent.name == \"leaky_agent\":\n        return {\"type\": \"tool\", \"name\": \"dump_notes\", \"arguments\": {}}\n    raise RuntimeError(agent.name)\n\n\nclass Runner:\n    def __init__(self, max_hops=4):\n        self.max_hops = max_hops\n        self.entered = []\n\n    def run_input_guardrails(self, agent, text):\n        for g in agent.input_guardrails:\n            result = g(text)\n            if result.tripwire_triggered:\n                raise InputGuardrailTripwireTriggered(result.reason)\n\n    def run_output_guardrails(self, agent, output):\n        for g in agent.output_guardrails:\n            result = g(output)\n            if result.tripwire_triggered:\n                raise OutputGuardrailTripwireTriggered(result.reason)\n\n    def run(self, agent, user_input):\n        current, hops = agent, 0\n        self.entered = [agent.name]\n        self.run_input_guardrails(current, user_input)\n        while True:\n            action = choose_action(current, user_input)\n            if action[\"type\"] == \"final\":\n                output = action[\"content\"]\n                self.run_output_guardrails(current, output)\n                return output\n            if action[\"type\"] == \"handoff\":\n                hops += 1\n                if hops > self.max_hops:\n                    raise RuntimeError(\"Maximum handoff count exceeded\")\n                current = next(h.target_agent for h in current.handoffs if h.tool_name == action[\"name\"])\n                self.entered.append(current.name)\n            if action[\"type\"] == \"tool\":\n                tool = next(t for t in current.tools if t.name == action[\"name\"])\n                return tool.invoke(**action[\"arguments\"])\n\n\nbilling = Agent(\"billing_agent\", \"billing\", tools=[refund_tool])\nsupport = Agent(\"support_agent\", \"support\")\ntriage = Agent(\"triage_agent\", \"route\", handoffs=[Handoff(billing), Handoff(support)],\n               input_guardrails=[sensitive_input_guardrail], output_guardrails=[sensitive_output_guardrail])"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "oai_2.py",
    "headingEn": "main(): six experiments and the timing harness",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು ಮತ್ತು ಸಮಯ ಹಾರ್ನೆಸ್",
    "descEn": "timed_run uses real threads: a guardrail thread and a model thread that cannot be cancelled once started. main() runs the four scenarios, probes refund amounts and unanticipated values, probes the keyword input guardrail, checks where guardrails actually run, and measures the scheduling modes.",
    "descKn": "timed_run ನಿಜವಾದ threads ಬಳಸುತ್ತದೆ: guardrail thread ಮತ್ತು ಪ್ರಾರಂಭವಾದ ನಂತರ ರದ್ದುಪಡಿಸಲಾಗದ ಮಾದರಿ thread. main() ನಾಲ್ಕು ಸನ್ನಿವೇಶ ಚಲಾಯಿಸುತ್ತದೆ, ಮರುಪಾವತಿ ಮೊತ್ತಗಳು ಮತ್ತು ನಿರೀಕ್ಷಿಸದ ಮೌಲ್ಯಗಳನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ, ಕೀವರ್ಡ್ input guardrail ಪರೀಕ್ಷಿಸುತ್ತದೆ, guardrails ನಿಜವಾಗಿ ಎಲ್ಲಿ ಚಲಿಸುತ್ತವೆ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ, ಮತ್ತು ವೇಳಾಪಟ್ಟಿ ವಿಧಾನಗಳನ್ನು ಅಳೆಯುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef attempt(label, fn):\n    try:\n        print(f\"{label}: {fn()}\")\n    except Exception as e:\n        print(f\"{label}: {type(e).__name__}: {e}\")\n\n\ndef timed_run(guardrail_s, model_s, trips, parallel):\n    \"\"\"Real threads. The 'model' cannot be cancelled once started, as with a real request in flight.\"\"\"\n    state = {\"model_started\": False, \"model_done\": False}\n    verdict = {}\n\n    def guard():\n        time.sleep(guardrail_s)\n        verdict[\"trip\"] = trips\n\n    def model():\n        state[\"model_started\"] = True\n        time.sleep(model_s)\n        state[\"model_done\"] = True\n\n    t0 = time.perf_counter()\n    if parallel:\n        g, m = threading.Thread(target=guard), threading.Thread(target=model)\n        g.start(); m.start(); g.join()\n        decided = time.perf_counter() - t0\n        if verdict[\"trip\"]:\n            elapsed = decided\n        else:\n            m.join()\n            elapsed = time.perf_counter() - t0\n        m.join()\n        wasted = model_s if state[\"model_started\"] and verdict[\"trip\"] else 0.0\n    else:\n        guard()\n        if verdict[\"trip\"]:\n            elapsed, wasted = time.perf_counter() - t0, 0.0\n        else:\n            model()\n            elapsed, wasted = time.perf_counter() - t0, 0.0\n    return elapsed, state[\"model_started\"], wasted\n\n\ndef main():\n    section(\"1. The four scenarios from the lesson\")\n    for text in (\"I was charged twice.\", \"The application crashes on startup.\", \"I want a refund.\", \"My password is abc123 and billing is broken.\"):\n        r = Runner()\n        attempt(f\"{text!r:46}\", lambda: (r.run(triage, text), r.entered)[0] if False else f\"{r.run(triage, text)} | entered {r.entered}\")\n\n    section(\"2. Genuinely checking the refund tool guardrail\")\n    REFUND_CALLS.clear()\n    for amount in (120, 5000, 0, -5, 500, 500.01):\n        attempt(f\"amount={amount!r:7}\", lambda a=amount: refund_tool.invoke(amount=a))\n    print(\"refund function was executed for amounts:\", REFUND_CALLS)\n    print(\"5000 never reached issue_refund; the boundary 500 is allowed and 500.01 is blocked\")\n\n    section(\"3. Genuinely checking values the policy did not anticipate\")\n    REFUND_CALLS.clear()\n    for label, amount in ((\"nan\", float(\"nan\")), (\"True\", True), (\"'120' (string)\", \"120\"), (\"inf\", float(\"inf\"))):\n        attempt(f\"amount={label:15}\", lambda a=amount: refund_tool.invoke(amount=a))\n    print(\"function ran for:\", REFUND_CALLS)\n    print(\"NaN fails both comparisons (nan <= 0 and nan > 500 are False) so it is approved; the string raised TypeError inside the guardrail instead of tripping it\")\n\n    section(\"4. Genuinely checking the keyword input guardrail\")\n    for text in (\"my password is hunter2\", \"my PASSWORD is hunter2\", \"my p4ssword is hunter2\", \"my pass word is hunter2\",\n                 \"my pwd is hunter2\", \"here is my api-key: sk-123\", \"here is my API key: sk-123\"):\n        res = sensitive_input_guardrail(text)\n        print(f\"{text!r:34} tripped={res.tripwire_triggered}\")\n    print(\"case changes are caught; leetspeak, spacing, abbreviations and punctuation variants all pass\")\n\n    section(\"5. Genuinely checking where each guardrail actually runs\")\n    guarded_specialist = Agent(\"billing_agent\", \"billing\", tools=[refund_tool],\n                               input_guardrails=[lambda t: GuardrailResult(True, \"specialist input guard fired\")])\n    t2 = Agent(\"triage_agent\", \"route\", handoffs=[Handoff(guarded_specialist), Handoff(support)])\n    attempt(\"specialist's own input guardrail after a handoff\", lambda: Runner().run(t2, \"I was charged twice.\"))\n    print(\"it never fired: input guardrails run once, on the starting agent, before the loop\")\n\n    leaky = Agent(\"leaky_agent\", \"leaks\", tools=[FunctionTool(\"dump_notes\", \"dump\", lambda: \"customer password: hunter2\")],\n                  output_guardrails=[sensitive_output_guardrail])\n    attempt(\"tool result containing 'customer password'\", lambda: Runner().run(leaky, \"anything\"))\n    print(\"the output guardrail never saw it: the tool path returns the result directly, bypassing the final-output check\")\n\n    section(\"6. Genuinely measuring blocking versus parallel guardrails (real threads, seconds)\")\n    g, m = 0.2, 0.6\n    print(f\"guardrail takes {g}s, 'model' takes {m}s\")\n    print(f\"{'mode':10} {'request':8} {'wall time':>10} {'model started':>14} {'model work discarded':>22}\")\n    for parallel in (False, True):\n        for trips in (False, True):\n            elapsed, started, wasted = timed_run(g, m, trips, parallel)\n            print(f\"{'parallel' if parallel else 'blocking':10} {'rejected' if trips else 'allowed':8} {elapsed:>9.2f}s {str(started):>14} {wasted:>21.1f}s\")\n    print(\"allowed request: parallel saves about the guardrail time; rejected request: both return at ~0.2s but parallel had already started the model\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. The four scenarios from the lesson ---\n'I was charged twice.'                        : Billing agent: I'll investigate the billing issue. | entered ['triage_agent', 'billing_agent']\n'The application crashes on startup.'         : Support agent: I'll troubleshoot the technical issue. | entered ['triage_agent', 'support_agent']\n'I want a refund.'                            : Refund approved for $120.00 | entered ['triage_agent', 'billing_agent']\n'My password is abc123 and billing is broken.': InputGuardrailTripwireTriggered: Sensitive input detected: password\n\n--- 2. Genuinely checking the refund tool guardrail ---\namount=120    : Refund approved for $120.00\namount=5000   : ToolGuardrailTripwireTriggered: Automatic refunds cannot exceed $500\namount=0      : ToolGuardrailTripwireTriggered: Refund amount must be positive\namount=-5     : ToolGuardrailTripwireTriggered: Refund amount must be positive\namount=500    : Refund approved for $500.00\namount=500.01 : ToolGuardrailTripwireTriggered: Automatic refunds cannot exceed $500\nrefund function was executed for amounts: [120, 500]\n5000 never reached issue_refund; the boundary 500 is allowed and 500.01 is blocked\n\n--- 3. Genuinely checking values the policy did not anticipate ---\namount=nan            : Refund approved for $nan\namount=True           : Refund approved for $1.00\namount='120' (string) : TypeError: '<=' not supported between instances of 'str' and 'int'\namount=inf            : ToolGuardrailTripwireTriggered: Automatic refunds cannot exceed $500\nfunction ran for: [nan, True]\nNaN fails both comparisons (nan <= 0 and nan > 500 are False) so it is approved; the string raised TypeError inside the guardrail instead of tripping it\n\n--- 4. Genuinely checking the keyword input guardrail ---\n'my password is hunter2'           tripped=True\n'my PASSWORD is hunter2'           tripped=True\n'my p4ssword is hunter2'           tripped=False\n'my pass word is hunter2'          tripped=False\n'my pwd is hunter2'                tripped=False\n'here is my api-key: sk-123'       tripped=False\n'here is my API key: sk-123'       tripped=True\ncase changes are caught; leetspeak, spacing, abbreviations and punctuation variants all pass\n\n--- 5. Genuinely checking where each guardrail actually runs ---\nspecialist's own input guardrail after a handoff: Billing agent: I'll investigate the billing issue.\nit never fired: input guardrails run once, on the starting agent, before the loop\ntool result containing 'customer password': customer password: hunter2\nthe output guardrail never saw it: the tool path returns the result directly, bypassing the final-output check\n\n--- 6. Genuinely measuring blocking versus parallel guardrails (real threads, seconds) ---\nguardrail takes 0.2s, 'model' takes 0.6s\nmode       request   wall time  model started   model work discarded\nblocking   allowed       0.81s           True                   0.0s\nblocking   rejected      0.20s          False                   0.0s\nparallel   allowed       0.60s           True                   0.0s\nparallel   rejected      0.20s           True                   0.6s\nallowed request: parallel saves about the guardrail time; rejected request: both return at ~0.2s but parallel had already started the model"
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
    "headingEn": "Genuinely Found: The Tool Guardrail Held, Then Missed Values Nobody Wrote a Rule For",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Tool guardrail ಕಾಯಿತು, ನಂತರ ಯಾರೂ ನಿಯಮ ಬರೆಯದ ಮೌಲ್ಯಗಳನ್ನು ತಪ್ಪಿಸಿತು",
    "bodyEn": "Section 2: refunds of 120 and 500 ran, while 5000, 0, -5 and 500.01 were blocked, and the refund function executed only for [120, 500]. Section 3 then tried values the policy did not anticipate. NaN was approved as \"Refund approved for $nan\" because nan <= 0 and nan > 500 are both False. The boolean True was approved as $1.00. The string \"120\" raised a TypeError from inside the guardrail instead of a tripwire. Infinity was blocked. A numeric policy needs an explicit type and finiteness check; comparison rules alone have gaps.",
    "bodyKn": "ವಿಭಾಗ 2: 120 ಮತ್ತು 500 ಮರುಪಾವತಿಗಳು ಚಲಿಸಿದವು, 5000, 0, -5 ಮತ್ತು 500.01 ತಡೆಯಲ್ಪಟ್ಟವು, ಮತ್ತು ಮರುಪಾವತಿ ಕಾರ್ಯ [120, 500] ಗೆ ಮಾತ್ರ ಚಲಿಸಿತು. ವಿಭಾಗ 3 ನಂತರ ನೀತಿ ನಿರೀಕ್ಷಿಸದ ಮೌಲ್ಯಗಳನ್ನು ಪ್ರಯತ್ನಿಸಿತು. nan <= 0 ಮತ್ತು nan > 500 ಎರಡೂ False ಆದ್ದರಿಂದ NaN \"Refund approved for $nan\" ಎಂದು ಅನುಮೋದನೆಗೊಂಡಿತು. ಬೂಲಿಯನ್ True $1.00 ಎಂದು ಅನುಮೋದನೆಗೊಂಡಿತು. ಸರಣಿ \"120\" tripwire ಬದಲು guardrail ಒಳಗಿನಿಂದ TypeError ಎತ್ತಿತು. ಅನಂತ ತಡೆಯಲ್ಪಟ್ಟಿತು. ಸಂಖ್ಯಾ ನೀತಿಗೆ ಸ್ಪಷ್ಟ ಪ್ರಕಾರ ಮತ್ತು ಸೀಮಿತತೆ ಪರಿಶೀಲನೆ ಬೇಕು; ಹೋಲಿಕೆ ನಿಯಮಗಳು ಮಾತ್ರ ಅಂತರ ಬಿಡುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Keyword Input Rules Are Easy to Evade, and Guardrails Only Guard Where They Run",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕೀವರ್ಡ್ input ನಿಯಮಗಳನ್ನು ತಪ್ಪಿಸುವುದು ಸುಲಭ, ಮತ್ತು guardrails ಚಲಿಸುವಲ್ಲಿ ಮಾತ್ರ ಕಾಯುತ್ತವೆ",
    "bodyEn": "Section 4: \"password\" and \"PASSWORD\" tripped, but \"p4ssword\", \"pass word\", \"pwd\" and \"api-key\" passed, while \"API key\" tripped. Section 5 checked where guardrails run. A specialist agent with its own input guardrail reached through a handoff never had it fire, because input guardrails run once on the starting agent before the loop. And a tool that returned \"customer password: hunter2\" delivered it unchanged: the tool branch returns directly and never reaches the output guardrail. A guardrail covers only the path it is wired into, so capability boundaries, not code paths, must be what you map.",
    "bodyKn": "ವಿಭಾಗ 4: \"password\" ಮತ್ತು \"PASSWORD\" ಪ್ರಚೋದಿತವಾದವು, ಆದರೆ \"p4ssword\", \"pass word\", \"pwd\" ಮತ್ತು \"api-key\" ಹಾದುಹೋದವು, \"API key\" ಪ್ರಚೋದಿತವಾಯಿತು. ವಿಭಾಗ 5 guardrails ಎಲ್ಲಿ ಚಲಿಸುತ್ತವೆ ಎಂದು ಪರಿಶೀಲಿಸಿತು. Handoff ಮೂಲಕ ತಲುಪಿದ ತನ್ನದೇ input guardrail ಇರುವ ತಜ್ಞ agent ಗೆ ಅದು ಎಂದೂ ಚಲಿಸಲಿಲ್ಲ, ಏಕೆಂದರೆ input guardrails ಚಕ್ರಕ್ಕೆ ಮೊದಲು ಪ್ರಾರಂಭಿಕ agent ಮೇಲೆ ಒಮ್ಮೆ ಚಲಿಸುತ್ತವೆ. ಮತ್ತು \"customer password: hunter2\" ಹಿಂತಿರುಗಿಸಿದ tool ಅದನ್ನು ಬದಲಾಗದೆ ತಲುಪಿಸಿತು: tool ಶಾಖೆ ನೇರವಾಗಿ ಹಿಂತಿರುಗುತ್ತದೆ ಮತ್ತು output guardrail ತಲುಪುವುದಿಲ್ಲ. Guardrail ತಾನು ಜೋಡಿಸಿದ ಮಾರ್ಗವನ್ನು ಮಾತ್ರ ಒಳಗೊಳ್ಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಕೋಡ್ ಮಾರ್ಗಗಳಲ್ಲ, ಸಾಮರ್ಥ್ಯ ಗಡಿಗಳನ್ನು ನಕ್ಷೆ ಮಾಡಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Parallel Saved Time on Allowed Requests and Wasted Work on Rejected Ones",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Parallel ಅನುಮತಿಸಿದ ವಿನಂತಿಗಳಲ್ಲಿ ಸಮಯ ಉಳಿಸಿತು ಮತ್ತು ತಿರಸ್ಕೃತ ವಿನಂತಿಗಳಲ್ಲಿ ಕೆಲಸ ವ್ಯರ್ಥ ಮಾಡಿತು",
    "bodyEn": "With a 0.2 s guardrail and a 0.6 s model call, measured with real threads: blocking an allowed request took 0.80 s, parallel took 0.60 s. For a rejected request both returned at about 0.20 s, but blocking never started the model (model started: False) while parallel had already started it and the 0.6 s call ran on, uncancelled. Parallel hides guardrail latency when requests pass and spends model work when they do not, so the right choice depends on how often requests are rejected and how costly the model call is.",
    "bodyKn": "0.2 s guardrail ಮತ್ತು 0.6 s ಮಾದರಿ ಕರೆಯೊಂದಿಗೆ ನಿಜವಾದ threads ಬಳಸಿ ಅಳೆದಾಗ: ಅನುಮತಿಸಿದ ವಿನಂತಿಗೆ blocking 0.80 s, parallel 0.60 s ತೆಗೆದುಕೊಂಡಿತು. ತಿರಸ್ಕೃತ ವಿನಂತಿಗೆ ಎರಡೂ ಸುಮಾರು 0.20 s ನಲ್ಲಿ ಹಿಂತಿರುಗಿದವು, ಆದರೆ blocking ಎಂದೂ ಮಾದರಿ ಪ್ರಾರಂಭಿಸಲಿಲ್ಲ (model started: False), parallel ಈಗಾಗಲೇ ಪ್ರಾರಂಭಿಸಿತ್ತು ಮತ್ತು 0.6 s ಕರೆ ರದ್ದಾಗದೆ ಮುಂದುವರಿಯಿತು. ವಿನಂತಿಗಳು ಹಾದುಹೋದಾಗ parallel guardrail ವಿಳಂಬ ಮರೆಮಾಡುತ್ತದೆ ಮತ್ತು ಇಲ್ಲದಿದ್ದಾಗ ಮಾದರಿ ಕೆಲಸ ಖರ್ಚು ಮಾಡುತ್ತದೆ, ಆದ್ದರಿಂದ ಸರಿಯಾದ ಆಯ್ಕೆ ವಿನಂತಿಗಳು ಎಷ್ಟು ಬಾರಿ ತಿರಸ್ಕೃತವಾಗುತ್ತವೆ ಮತ್ತು ಮಾದರಿ ಕರೆ ಎಷ್ಟು ದುಬಾರಿ ಎಂಬುದನ್ನು ಅವಲಂಬಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "The model proposes and the runtime enforces. Guardrails put validation, authorization and policy in code at the boundaries where consequences occur, instead of relying on instructions the model may ignore.",
    "bodyKn": "ಮಾದರಿ ಪ್ರಸ್ತಾಪಿಸುತ್ತದೆ ಮತ್ತು runtime ಜಾರಿಗೊಳಿಸುತ್ತದೆ. ಮಾದರಿ ನಿರ್ಲಕ್ಷಿಸಬಹುದಾದ ಸೂಚನೆಗಳನ್ನು ಅವಲಂಬಿಸುವ ಬದಲು guardrails ಮಾನ್ಯತೆ, ಅಧಿಕಾರ ಮತ್ತು ನೀತಿಯನ್ನು ಪರಿಣಾಮಗಳು ಸಂಭವಿಸುವ ಗಡಿಗಳಲ್ಲಿ ಕೋಡ್‌ನಲ್ಲಿ ಇಡುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"I added a guardrail, so that capability is protected.\" It is protected only on the path the guardrail is attached to, and only against the cases its rule anticipates.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ನಾನು guardrail ಸೇರಿಸಿದೆ, ಆದ್ದರಿಂದ ಆ ಸಾಮರ್ಥ್ಯ ರಕ್ಷಿತ.\" ಅದು guardrail ಜೋಡಿಸಿದ ಮಾರ್ಗದಲ್ಲಿ ಮಾತ್ರ, ಮತ್ತು ಅದರ ನಿಯಮ ನಿರೀಕ್ಷಿಸಿದ ಪ್ರಕರಣಗಳ ವಿರುದ್ಧ ಮಾತ್ರ ರಕ್ಷಿತ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Guardrail: a validation check at a boundary. Tripwire: a result that interrupts normal execution. Input, tool, output guardrail: entrance, action and exit checks. Blocking: guardrail first. Parallel: guardrail and main work together.",
    "bodyKn": "Guardrail: ಗಡಿಯಲ್ಲಿನ ಮಾನ್ಯತಾ ಪರಿಶೀಲನೆ. Tripwire: ಸಾಮಾನ್ಯ ಚಲಾವಣೆ ಅಡ್ಡಿಪಡಿಸುವ ಫಲಿತಾಂಶ. Input, tool, output guardrail: ಪ್ರವೇಶ, ಕ್ರಿಯೆ ಮತ್ತು ನಿರ್ಗಮನ ಪರಿಶೀಲನೆಗಳು. Blocking: ಮೊದಲು guardrail. Parallel: guardrail ಮತ್ತು ಮುಖ್ಯ ಕೆಲಸ ಒಟ್ಟಿಗೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The refund guardrail blocked 5000, 0, -5 and 500.01 and the function never ran for them. 2) NaN and True passed the numeric rule; a string crashed it. 3) Keyword input rules missed p4ssword, pass word, pwd and api-key. 4) A specialist input guardrail never fired after a handoff. 5) A tool result bypassed the output guardrail. 6) Parallel saved 0.2 s on allowed requests and started 0.6 s of unneeded model work on rejected ones.",
    "bodyKn": "1) ಮರುಪಾವತಿ guardrail 5000, 0, -5 ಮತ್ತು 500.01 ತಡೆಯಿತು ಮತ್ತು ಅವುಗಳಿಗೆ ಕಾರ್ಯ ಚಲಿಸಲಿಲ್ಲ. 2) NaN ಮತ್ತು True ಸಂಖ್ಯಾ ನಿಯಮ ದಾಟಿದವು; ಸರಣಿ ಅದನ್ನು ಕ್ರ್ಯಾಶ್ ಮಾಡಿತು. 3) ಕೀವರ್ಡ್ input ನಿಯಮಗಳು p4ssword, pass word, pwd ಮತ್ತು api-key ತಪ್ಪಿಸಿದವು. 4) Handoff ನಂತರ ತಜ್ಞರ input guardrail ಎಂದೂ ಚಲಿಸಲಿಲ್ಲ. 5) Tool ಫಲಿತಾಂಶ output guardrail ಬೈಪಾಸ್ ಮಾಡಿತು. 6) ಅನುಮತಿಸಿದ ವಿನಂತಿಗಳಲ್ಲಿ parallel 0.2 s ಉಳಿಸಿತು ಮತ್ತು ತಿರಸ್ಕೃತವಾದವುಗಳಲ್ಲಿ 0.6 s ಅನಗತ್ಯ ಮಾದರಿ ಕೆಲಸ ಪ್ರಾರಂಭಿಸಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why did NaN pass the refund guardrail?",
      "qKn": "NaN ಮರುಪಾವತಿ guardrail ಏಕೆ ದಾಟಿತು?",
      "opts": [
       "NaN is positive",
       "nan <= 0 and nan > 500 are both False, so neither rule tripped",
       "Guardrails ignore floats",
       "NaN is below 500 by definition"
      ],
      "optsKn": [
       "NaN ಧನಾತ್ಮಕ",
       "nan <= 0 ಮತ್ತು nan > 500 ಎರಡೂ False, ಆದ್ದರಿಂದ ಯಾವ ನಿಯಮವೂ ಪ್ರಚೋದಿತವಾಗಲಿಲ್ಲ",
       "Guardrails floats ನಿರ್ಲಕ್ಷಿಸುತ್ತವೆ",
       "NaN ವ್ಯಾಖ್ಯಾನದಿಂದ 500 ಕ್ಕಿಂತ ಕೆಳಗೆ"
      ],
      "correct": 1
     },
     {
      "q": "Why did the specialist agent's own input guardrail never fire?",
      "qKn": "ತಜ್ಞ agent ನ ಸ್ವಂತ input guardrail ಏಕೆ ಎಂದೂ ಚಲಿಸಲಿಲ್ಲ?",
      "opts": [
       "It had a bug",
       "Input guardrails run once on the starting agent before the loop, not after handoffs",
       "Handoffs delete guardrails",
       "Specialists cannot have guardrails"
      ],
      "optsKn": [
       "ಅದರಲ್ಲಿ ದೋಷ ಇತ್ತು",
       "Input guardrails ಚಕ್ರಕ್ಕೆ ಮೊದಲು ಪ್ರಾರಂಭಿಕ agent ಮೇಲೆ ಒಮ್ಮೆ ಚಲಿಸುತ್ತವೆ, handoffs ನಂತರ ಅಲ್ಲ",
       "Handoffs guardrails ಅಳಿಸುತ್ತವೆ",
       "ತಜ್ಞರು guardrails ಹೊಂದಲಾರರು"
      ],
      "correct": 1
     },
     {
      "q": "A tool returned \"customer password: hunter2\". What happened?",
      "qKn": "Tool \"customer password: hunter2\" ಹಿಂತಿರುಗಿಸಿತು. ಏನಾಯಿತು?",
      "opts": [
       "The output guardrail blocked it",
       "It was returned unchanged because the tool path skips the output guardrail",
       "The input guardrail blocked it",
       "The hop limit stopped it"
      ],
      "optsKn": [
       "output guardrail ತಡೆಯಿತು",
       "tool ಮಾರ್ಗ output guardrail ಬಿಟ್ಟಿದ್ದರಿಂದ ಅದು ಬದಲಾಗದೆ ಹಿಂತಿರುಗಿತು",
       "input guardrail ತಡೆಯಿತು",
       "hop ಮಿತಿ ನಿಲ್ಲಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "For a rejected request, what did parallel scheduling do that blocking did not?",
      "qKn": "ತಿರಸ್ಕೃತ ವಿನಂತಿಗೆ, blocking ಮಾಡದ್ದನ್ನು parallel ವೇಳಾಪಟ್ಟಿ ಏನು ಮಾಡಿತು?",
      "opts": [
       "Nothing",
       "It had already started the model call, which then ran on uncancelled",
       "It skipped the guardrail",
       "It ran the tool twice"
      ],
      "optsKn": [
       "ಏನೂ ಇಲ್ಲ",
       "ಅದು ಈಗಾಗಲೇ ಮಾದರಿ ಕರೆ ಪ್ರಾರಂಭಿಸಿತ್ತು, ಅದು ರದ್ದಾಗದೆ ಮುಂದುವರಿಯಿತು",
       "guardrail ಬಿಟ್ಟಿತು",
       "tool ಎರಡು ಬಾರಿ ಚಲಾಯಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Which keyword variant did the input guardrail catch?",
      "qKn": "Input guardrail ಯಾವ ಕೀವರ್ಡ್ ರೂಪಾಂತರ ಹಿಡಿಯಿತು?",
      "opts": [
       "p4ssword",
       "pwd",
       "PASSWORD",
       "pass word"
      ],
      "optsKn": [
       "p4ssword",
       "pwd",
       "PASSWORD",
       "pass word"
      ],
      "correct": 2
     }
    ]
   }
  }
 ]
};
