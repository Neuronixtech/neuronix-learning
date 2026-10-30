module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321541",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Production Agent Runtimes: Agno and Mastra Ideas (Part 1 of 3) — The Disposable Agent and the Durable Session",
 "titleKn": "Production Agent Runtimes: Agno ಮತ್ತು Mastra ಕಲ್ಪನೆಗಳು (ಭಾಗ 1 / 3) — ಬಿಸಾಡಬಹುದಾದ Agent ಮತ್ತು ಬಾಳಿಕೆ ಬರುವ Session",
 "desc": "Build a session store, a fresh-per-request Agent and a request handler, then measure agent creation cost, test whether history is used, feed unexpected inputs and race two requests on one session.",
 "descKn": "Session store, ಪ್ರತಿ ವಿನಂತಿಗೆ ಹೊಸ Agent ಮತ್ತು request handler ನಿರ್ಮಿಸಿ, ನಂತರ agent ರಚನೆ ವೆಚ್ಚ ಅಳೆಯಿರಿ, ಇತಿಹಾಸ ಬಳಕೆಯಾಗುತ್ತದೆಯೇ ಪರೀಕ್ಷಿಸಿ, ಅನಿರೀಕ್ಷಿತ ಇನ್‌ಪುಟ್ ನೀಡಿ ಮತ್ತು ಒಂದು session ಮೇಲೆ ಎರಡು ವಿನಂತಿ ಓಡಿಸಿ.",
 "objectives": [
  "Explain disposable agents over durable state.",
  "Build load, run, save as a request handler.",
  "Measure creation cost against model latency.",
  "Explain why passing history is not using it.",
  "Find the lost-update race."
 ],
 "objectivesKn": [
  "ಬಾಳಿಕೆ ಬರುವ state ಮೇಲಿನ ಬಿಸಾಡಬಹುದಾದ agents ವಿವರಿಸಿ.",
  "Load, run, save ಅನ್ನು request handler ಆಗಿ ನಿರ್ಮಿಸಿ.",
  "ರಚನೆ ವೆಚ್ಚವನ್ನು ಮಾದರಿ ವಿಳಂಬದ ವಿರುದ್ಧ ಅಳೆಯಿರಿ.",
  "ಇತಿಹಾಸ ನೀಡುವುದು ಬಳಸುವುದು ಅಲ್ಲ ಏಕೆಂದು ವಿವರಿಸಿ.",
  "Lost-update ಓಟ ಕಂಡುಹಿಡಿಯಿರಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Production Agent Runtimes: Agno and Mastra Ideas (Part 1 of 3)",
    "textKn": "Production Agent Runtimes: Agno ಮತ್ತು Mastra ಕಲ್ಪನೆಗಳು (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: the disposable Agent, the durable session store and a request handler. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind Agno and Mastra, not the real software, and the model is a keyword stand-in, so no real LLM behaviour is measured. The pasted source is framework-independent teaching code, so this lab rebuilds it; no Agno API is called and no published Agno benchmark is reproduced. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಬಿಸಾಡಬಹುದಾದ Agent, ಬಾಳಿಕೆ ಬರುವ session store ಮತ್ತು request handler. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು Agno ಮತ್ತು Mastra ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಮಾದರಿ ಕೀವರ್ಡ್ ಬದಲಿ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಮೂಲ framework-ಸ್ವತಂತ್ರ ಬೋಧನಾ ಕೋಡ್, ಆದ್ದರಿಂದ ಈ ಲ್ಯಾಬ್ ಅದನ್ನು ಮರುನಿರ್ಮಿಸುತ್ತದೆ; ಯಾವುದೇ Agno API ಕರೆಯಲ್ಪಡುವುದಿಲ್ಲ ಮತ್ತು ಪ್ರಕಟಿತ Agno benchmark ಪುನರುತ್ಪಾದಿಸಲ್ಪಟ್ಟಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Agent Is Disposable, the Session Is Not",
    "textKn": "Agent ಬಿಸಾಡಬಹುದಾದದ್ದು, session ಅಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Stateless Does Not Mean Memoryless",
    "headingKn": "Stateless ಎಂದರೆ ನೆನಪಿಲ್ಲದ್ದು ಅಲ್ಲ",
    "bodyEn": "In the Agno-shaped design every request loads the history from a store, builds a fresh Agent, runs it and saves the updated history. The Agent holds no conversation, so any server can handle any request. Memory still exists, but it lives in the SessionStore. The lesson adds a ModelRouter (the model layer, simulated here by keywords) and a weather tool with deterministic data so the runtime, not the tool, is the subject.",
    "bodyKn": "Agno-ಶೈಲಿಯ ವಿನ್ಯಾಸದಲ್ಲಿ ಪ್ರತಿ ವಿನಂತಿಯೂ store ನಿಂದ ಇತಿಹಾಸ ಲೋಡ್ ಮಾಡಿ, ಹೊಸ Agent ರಚಿಸಿ, ಚಲಾಯಿಸಿ, ನವೀಕೃತ ಇತಿಹಾಸ ಉಳಿಸುತ್ತದೆ. Agent ಸಂಭಾಷಣೆ ಹೊಂದಿಲ್ಲ, ಆದ್ದರಿಂದ ಯಾವುದೇ ಸರ್ವರ್ ಯಾವುದೇ ವಿನಂತಿ ನಿರ್ವಹಿಸಬಹುದು. ನೆನಪು ಇನ್ನೂ ಇದೆ, ಆದರೆ SessionStore ನಲ್ಲಿದೆ. ಲೆಸನ್ ModelRouter (ಮಾದರಿ ಪದರ, ಇಲ್ಲಿ ಕೀವರ್ಡ್‌ಗಳಿಂದ ಅನುಕರಿಸಲಾಗಿದೆ) ಮತ್ತು ನಿರ್ಧಾರಿತ ದತ್ತಾಂಶದ ಹವಾಮಾನ tool ಸೇರಿಸುತ್ತದೆ, ಇದರಿಂದ tool ಅಲ್ಲ, runtime ವಿಷಯವಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Request, Load, Fresh Agent, Save",
    "headingKn": "Request, Load, ಹೊಸ Agent, Save",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Disposable agent, durable session</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">Request</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">session_id + text</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">load</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">history from store</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">new Agent</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">created per request</text><rect x=\"110\" y=\"110\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">save</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">history back to store</text><rect x=\"210\" y=\"110\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"250\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">discard</text><text x=\"250\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">agent is thrown away</text><path d=\"M90,47 H110 M190,47 H210 M250,64 V110 M210,127 H190\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the conversation lives in the store, never in the agent</text></svg>",
    "captionEn": "The agent object exists for one request only.",
    "captionKn": "Agent ವಸ್ತು ಒಂದು ವಿನಂತಿಗೆ ಮಾತ್ರ ಇರುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Long-lived versus short-lived",
    "headingKn": "ದೀರ್ಘಕಾಲಿಕ ಮತ್ತು ಅಲ್ಪಕಾಲಿಕ",
    "headers": [
     "Component",
     "Lifetime",
     "Holds"
    ],
    "rows": [
     [
      "ProductionRuntime, SessionStore, ModelRouter",
      "process",
      "infrastructure and data"
     ],
     [
      "Agent",
      "one request",
      "a model reference and tools"
     ],
     [
      "History list",
      "loaded per request",
      "a copy of stored messages"
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
    "filename": "agno_1.py",
    "headingEn": "SessionStore, Tool, ModelRouter, Agent, ProductionRuntime",
    "headingKn": "SessionStore, Tool, ModelRouter, Agent, ProductionRuntime",
    "descEn": "load and save copy lists. ModelRouter.generate takes the message, the history and the tools, as a real agent turn would, but picks a path with keywords. handle_request is the heart: load, create a fresh agent, run, append two messages, save, and record per-step nanosecond timings.",
    "descKn": "load ಮತ್ತು save ಪಟ್ಟಿಗಳನ್ನು ನಕಲಿಸುತ್ತವೆ. ModelRouter.generate ನಿಜ agent ತಿರುವಿನಂತೆ ಸಂದೇಶ, ಇತಿಹಾಸ ಮತ್ತು tools ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ, ಆದರೆ ಕೀವರ್ಡ್‌ಗಳಿಂದ ಮಾರ್ಗ ಆರಿಸುತ್ತದೆ. handle_request ಹೃದಯ: load, ಹೊಸ agent ರಚನೆ, ಚಲಾವಣೆ, ಎರಡು ಸಂದೇಶ ಸೇರ್ಪಡೆ, save, ಮತ್ತು ಪ್ರತಿ ಹಂತದ ನ್ಯಾನೋಸೆಕೆಂಡ್ ಸಮಯ ದಾಖಲು.",
    "code": "class SessionStore:\n    def __init__(self):\n        self._sessions = {}\n\n    def load(self, session_id):\n        return list(self._sessions.get(session_id, []))\n\n    def save(self, session_id, messages):\n        self._sessions[session_id] = list(messages)\n\n\n@dataclass\nclass Tool:\n    name: str\n    description: str\n    handler: Callable[..., Any]\n\n    def execute(self, **kwargs):\n        return self.handler(**kwargs)\n\n\nFAKE_WEATHER = {\"bengaluru\": \"24°C, cloudy\", \"mumbai\": \"30°C, humid\", \"delhi\": \"29°C, clear\"}\n\n\ndef get_weather(city):\n    return FAKE_WEATHER[city.lower()]\n\n\nweather_tool = Tool(\"get_weather\", \"Get weather for a city\", get_weather)\nCITIES = (\"bengaluru\", \"mumbai\", \"delhi\", \"chennai\")\n\n\nclass ModelRouter:\n    \"\"\"Simulated model: keyword and city matching. `latency` stands in for a provider round trip.\"\"\"\n\n    def __init__(self, latency=0.0):\n        self.latency = latency\n\n    def generate(self, message, history, tools):\n        if self.latency:\n            time.sleep(self.latency)\n        text = message.lower()\n        if \"weather\" in text:\n            city = next((c for c in CITIES if c in text), None)\n            if city is None:\n                return \"Which city?\"\n            tool = next(t for t in tools if t.name == \"get_weather\")\n            return f\"The weather in {city.title()} is {tool.execute(city=city)}.\"\n        return \"Hello! I can help with weather.\"\n\n\n_agent_ids = itertools.count(1)\n\n\n@dataclass\nclass Agent:\n    model: ModelRouter\n    tools: list = field(default_factory=list)\n    agent_id: int = field(default_factory=lambda: next(_agent_ids))\n\n    def run(self, message, history):\n        return self.model.generate(message, history, self.tools)\n\n\nclass ProductionRuntime:\n    def __init__(self, store, model=None):\n        self.store, self.model = store, model or ModelRouter()\n        self.last_agent_id, self.last_timing = None, {}\n\n    def create_agent(self):\n        return Agent(model=self.model, tools=[weather_tool])\n\n    def handle_request(self, session_id, message):\n        t0 = time.perf_counter_ns()\n        history = self.store.load(session_id)\n        t1 = time.perf_counter_ns()\n        agent = self.create_agent()\n        t2 = time.perf_counter_ns()\n        response = agent.run(message, history)\n        t3 = time.perf_counter_ns()\n        history.append({\"role\": \"user\", \"content\": message})\n        history.append({\"role\": \"assistant\", \"content\": response})\n        self.store.save(session_id, history)\n        t4 = time.perf_counter_ns()\n        self.last_agent_id = agent.agent_id\n        self.last_timing = {\"load\": t1 - t0, \"create\": t2 - t1, \"run\": t3 - t2, \"save\": t4 - t3, \"total\": t4 - t0}\n        return response"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "agno_1.py",
    "headingEn": "main(): seven experiments",
    "headingKn": "main(): ಏಳು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() replays the three requests, measures agent creation at three model latencies, checks whether history is used, feeds unexpected inputs, simulates a mid-request failure, races two threads on one session and checks store isolation.",
    "descKn": "main() ಮೂರು ವಿನಂತಿಗಳನ್ನು ಮರುಚಲಾಯಿಸುತ್ತದೆ, ಮೂರು ಮಾದರಿ ವಿಳಂಬಗಳಲ್ಲಿ agent ರಚನೆ ಅಳೆಯುತ್ತದೆ, ಇತಿಹಾಸ ಬಳಕೆಯಾಗುತ್ತದೆಯೇ ಪರಿಶೀಲಿಸುತ್ತದೆ, ಅನಿರೀಕ್ಷಿತ ಇನ್‌ಪುಟ್ ನೀಡುತ್ತದೆ, ವಿನಂತಿ ಮಧ್ಯದ ವೈಫಲ್ಯ ಅನುಕರಿಸುತ್ತದೆ, ಒಂದು session ಮೇಲೆ ಎರಡು threads ಓಡಿಸುತ್ತದೆ ಮತ್ತು store ಪ್ರತ್ಯೇಕತೆ ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. The lesson's three requests, one session\")\n    rt = ProductionRuntime(SessionStore())\n    for msg in (\"Hello\", \"What is the weather in Bengaluru?\", \"And the weather in Mumbai?\"):\n        out = rt.handle_request(\"user-1\", msg)\n        print(f\"agent #{rt.last_agent_id}: {msg!r:36} -> {out} | stored messages: {len(rt.store.load('user-1'))}\")\n    print(\"three requests used three different Agent objects; the conversation lived only in the store\")\n\n    section(\"2. Genuinely measuring: how long does creating a fresh agent take\")\n    rt = ProductionRuntime(SessionStore())\n    creates = []\n    for i in range(20_000):\n        rt.handle_request(\"bench\", \"Hello\")\n        creates.append(rt.last_timing[\"create\"])\n    print(f\"agent creation over 20000 requests: median {statistics.median(creates) / 1000:.2f} us, p99 {sorted(creates)[int(0.99 * len(creates))] / 1000:.2f} us\")\n    for latency in (0.0, 0.05, 0.5):\n        r = ProductionRuntime(SessionStore(), ModelRouter(latency))\n        r.handle_request(\"x\", \"Hello\")\n        tm = r.last_timing\n        print(f\"model latency {latency * 1000:>5.0f} ms: creation is {tm['create'] / tm['total']:.4%} of the request ({tm['create'] / 1000:.1f} us of {tm['total'] / 1e6:.2f} ms)\")\n    print(\"creation costs about a microsecond because this Agent is a tiny dataclass; it is a large share of a request only when the model call is also nearly free, and negligible beside any real latency\")\n\n    section(\"3. Genuinely checking: history is passed in, but does the model use it\")\n    rt = ProductionRuntime(SessionStore())\n    rt.handle_request(\"s\", \"What is the weather in Bengaluru?\")\n    print(\"follow-up 'And the weather there tomorrow?' ->\", rt.handle_request(\"s\", \"And the weather there tomorrow?\"))\n    print(\"follow-up 'What about Mumbai?'              ->\", rt.handle_request(\"s\", \"What about Mumbai?\"))\n    print(\"history reached generate() both times, but the keyword model never reads it: injection of state is not use of state\")\n\n    section(\"4. Genuinely checking: inputs the keyword model and the tool do not expect\")\n    for msg in (\"Weather in Chennai?\", \"weather in Pune\", \"Is it weather-proof?\", \"weather in Bengaluru and Mumbai\", \"WEATHER IN DELHI\"):\n        rt = ProductionRuntime(SessionStore())\n        try:\n            print(f\"{msg!r:36} -> {rt.handle_request('t', msg)}\")\n        except Exception as e:\n            print(f\"{msg!r:36} -> {type(e).__name__}: {e!s:.40} | session saved: {bool(rt.store.load('t'))}\")\n    print(\"Chennai is a known city for routing but missing in the weather data, so the tool raised KeyError and nothing was saved; 'weather-proof' triggered the weather path; only the first city was answered\")\n\n    section(\"5. Genuinely checking: a failure mid-request and the session\")\n    rt = ProductionRuntime(SessionStore())\n    rt.handle_request(\"u\", \"Hello\")\n    before = rt.store.load(\"u\")\n    try:\n        rt.handle_request(\"u\", \"Weather in Chennai?\")\n    except KeyError:\n        pass\n    print(\"messages before:\", len(before), \"| after the failed request:\", len(rt.store.load(\"u\")), \"| the user's failed message was not recorded\")\n\n    section(\"6. Genuinely measuring: two concurrent requests on one session (real threads)\")\n    for label, latency in ((\"fast model\", 0.0), (\"slow model 50 ms\", 0.05)):\n        lost = 0\n        trials = 40\n        for _ in range(trials):\n            rt = ProductionRuntime(SessionStore(), ModelRouter(latency))\n            ts = [threading.Thread(target=rt.handle_request, args=(\"c\", f\"Hello {i}\")) for i in range(2)]\n            [t.start() for t in ts]; [t.join() for t in ts]\n            if len(rt.store.load(\"c\")) < 4:\n                lost += 1\n        print(f\"{label:17}: {lost} of {trials} trials ended with fewer than 4 messages (a turn was overwritten)\")\n    print(\"load, run, then save is not atomic: with a slow model both requests loaded the same history and the later save replaced the earlier one; the fast model did not race on this run, which proves nothing about other timings\")\n\n    section(\"7. Genuinely checking: store isolation\")\n    s = SessionStore()\n    s.save(\"a\", [{\"role\": \"user\", \"content\": \"hi\"}])\n    got = s.load(\"a\"); got.append({\"role\": \"user\", \"content\": \"mutated\"})\n    print(\"after mutating a loaded list, the store still has\", len(s.load(\"a\")), \"message\")\n    print(\"a second runtime with its own store sees:\", ProductionRuntime(SessionStore()).store.load(\"a\"))\n    print(\"load/save copy lists so callers cannot corrupt the store, but a store held in process memory is private to that process\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. The lesson's three requests, one session ---\nagent #1: 'Hello'                              -> Hello! I can help with weather. | stored messages: 2\nagent #2: 'What is the weather in Bengaluru?'  -> The weather in Bengaluru is 24°C, cloudy. | stored messages: 4\nagent #3: 'And the weather in Mumbai?'         -> The weather in Mumbai is 30°C, humid. | stored messages: 6\nthree requests used three different Agent objects; the conversation lived only in the store\n\n--- 2. Genuinely measuring: how long does creating a fresh agent take ---\nagent creation over 20000 requests: median 1.10 us, p99 9.60 us\nmodel latency     0 ms: creation is 37.2727% of the request (4.1 us of 0.01 ms)\nmodel latency    50 ms: creation is 0.0024% of the request (1.2 us of 50.57 ms)\nmodel latency   500 ms: creation is 0.0022% of the request (11.2 us of 500.73 ms)\ncreation costs about a microsecond because this Agent is a tiny dataclass; it is a large share of a request only when the model call is also nearly free, and negligible beside any real latency\n\n--- 3. Genuinely checking: history is passed in, but does the model use it ---\nfollow-up 'And the weather there tomorrow?' -> Which city?\nfollow-up 'What about Mumbai?'              -> Hello! I can help with weather.\nhistory reached generate() both times, but the keyword model never reads it: injection of state is not use of state\n\n--- 4. Genuinely checking: inputs the keyword model and the tool do not expect ---\n'Weather in Chennai?'                -> KeyError: 'chennai' | session saved: False\n'weather in Pune'                    -> Which city?\n'Is it weather-proof?'               -> Which city?\n'weather in Bengaluru and Mumbai'    -> The weather in Bengaluru is 24°C, cloudy.\n'WEATHER IN DELHI'                   -> The weather in Delhi is 29°C, clear.\nChennai is a known city for routing but missing in the weather data, so the tool raised KeyError and nothing was saved; 'weather-proof' triggered the weather path; only the first city was answered\n\n--- 5. Genuinely checking: a failure mid-request and the session ---\nmessages before: 2 | after the failed request: 2 | the user's failed message was not recorded\n\n--- 6. Genuinely measuring: two concurrent requests on one session (real threads) ---\nfast model       : 0 of 40 trials ended with fewer than 4 messages (a turn was overwritten)\nslow model 50 ms : 40 of 40 trials ended with fewer than 4 messages (a turn was overwritten)\nload, run, then save is not atomic: with a slow model both requests loaded the same history and the later save replaced the earlier one; the fast model did not race on this run, which proves nothing about other timings\n\n--- 7. Genuinely checking: store isolation ---\nafter mutating a loaded list, the store still has 1 message\na second runtime with its own store sees: []\nload/save copy lists so callers cannot corrupt the store, but a store held in process memory is private to that process"
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
    "headingEn": "Genuinely Found: Agent Creation Is Microseconds, and Its Share Depends on the Model",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Agent ರಚನೆ ಮೈಕ್ರೋಸೆಕೆಂಡ್‌ಗಳು, ಮತ್ತು ಅದರ ಪಾಲು ಮಾದರಿಯ ಮೇಲೆ ಅವಲಂಬಿತ",
    "bodyEn": "Section 2 over 20,000 requests: the median agent creation took about 1.1 microseconds (p99 about 10 microseconds). With a free model it was about a third of the whole request (37 percent in the cached run), with a 50 ms model it was 0.0024 percent and with a 500 ms model 0.0022 percent. Creation is cheap here only because our Agent is a tiny dataclass. This is a toy measurement: it does not reproduce or test any published Agno benchmark, and a real agent that loads tools or clients would cost more.",
    "bodyKn": "ವಿಭಾಗ 2, 20,000 ವಿನಂತಿಗಳಲ್ಲಿ: ಮಧ್ಯಮ agent ರಚನೆ ಸುಮಾರು 1.1 ಮೈಕ್ರೋಸೆಕೆಂಡ್ (p99 ಸುಮಾರು 10 ಮೈಕ್ರೋಸೆಕೆಂಡ್) ತೆಗೆದುಕೊಂಡಿತು. ಉಚಿತ ಮಾದರಿಯೊಂದಿಗೆ ಇದು ಇಡೀ ವಿನಂತಿಯ ಸುಮಾರು ಮೂರನೇ ಒಂದು ಭಾಗ (ಸಂಗ್ರಹಿತ ಓಟದಲ್ಲಿ 37 ಶೇಕಡಾ), 50 ms ಮಾದರಿಯೊಂದಿಗೆ 0.0024 ಶೇಕಡಾ ಮತ್ತು 500 ms ಮಾದರಿಯೊಂದಿಗೆ 0.0022 ಶೇಕಡಾ. ನಮ್ಮ Agent ಚಿಕ್ಕ dataclass ಆದ ಕಾರಣ ಮಾತ್ರ ರಚನೆ ಇಲ್ಲಿ ಅಗ್ಗ. ಇದು ಆಟಿಕೆ ಅಳತೆ: ಇದು ಯಾವುದೇ ಪ್ರಕಟಿತ Agno benchmark ಅನ್ನು ಪುನರುತ್ಪಾದಿಸುವುದಿಲ್ಲ ಅಥವಾ ಪರೀಕ್ಷಿಸುವುದಿಲ್ಲ, ಮತ್ತು tools ಅಥವಾ clients ಲೋಡ್ ಮಾಡುವ ನಿಜ agent ಹೆಚ್ಚು ವೆಚ್ಚ ಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Passing History Is Not Using It, and a Failed Request Leaves No Trace",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಇತಿಹಾಸ ನೀಡುವುದು ಬಳಸುವುದಲ್ಲ, ಮತ್ತು ವಿಫಲ ವಿನಂತಿ ಯಾವುದೇ ಗುರುತು ಬಿಡುವುದಿಲ್ಲ",
    "bodyEn": "Section 3: after \"What is the weather in Bengaluru?\", the follow-up \"And the weather there tomorrow?\" returned \"Which city?\" and \"What about Mumbai?\" returned the greeting, although the history reached generate() both times; the keyword model never reads it. Section 4: Chennai passes the routing step but has no weather data, so the tool raised KeyError and nothing was saved; \"Is it weather-proof?\" took the weather path and asked for a city; \"weather in Bengaluru and Mumbai\" answered only Bengaluru. Section 5: the failed request left the session at 2 messages, so the user's failed message was not recorded.",
    "bodyKn": "ವಿಭಾಗ 3: \"What is the weather in Bengaluru?\" ನಂತರ ಅನುಸರಣೆ \"And the weather there tomorrow?\" \"Which city?\" ಮರಳಿಸಿತು ಮತ್ತು \"What about Mumbai?\" ಶುಭಾಶಯ ಮರಳಿಸಿತು, ಇತಿಹಾಸ ಎರಡೂ ಬಾರಿ generate() ತಲುಪಿದ್ದರೂ; ಕೀವರ್ಡ್ ಮಾದರಿ ಅದನ್ನು ಓದುವುದೇ ಇಲ್ಲ. ವಿಭಾಗ 4: Chennai ರೂಟಿಂಗ್ ಹಂತ ದಾಟುತ್ತದೆ ಆದರೆ ಹವಾಮಾನ ದತ್ತಾಂಶ ಇಲ್ಲ, ಆದ್ದರಿಂದ tool KeyError ಎತ್ತಿ ಏನೂ ಉಳಿಸಲ್ಪಡಲಿಲ್ಲ; \"Is it weather-proof?\" ಹವಾಮಾನ ಮಾರ್ಗ ಹಿಡಿದು ನಗರ ಕೇಳಿತು; \"weather in Bengaluru and Mumbai\" ಬೆಂಗಳೂರಿಗೆ ಮಾತ್ರ ಉತ್ತರಿಸಿತು. ವಿಭಾಗ 5: ವಿಫಲ ವಿನಂತಿ session ಅನ್ನು 2 ಸಂದೇಶಗಳಲ್ಲಿಯೇ ಬಿಟ್ಟಿತು, ಆದ್ದರಿಂದ ಬಳಕೆದಾರರ ವಿಫಲ ಸಂದೇಶ ದಾಖಲಾಗಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Load, Run, Save Is Not Atomic",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Load, Run, Save ಅಣು ಅಲ್ಲ",
    "bodyEn": "Section 6 used real threads: two requests on the same session. With a 50 ms model, 40 of 40 trials ended with fewer than the 4 expected messages, because both requests loaded the same history and the later save replaced the earlier one. With an instant model, 0 of 40 trials lost a turn on this run, which says only that the race window was too small to hit here. Section 7: load and save copy their lists so callers cannot mutate the store, but the store lives in one process, so a second runtime sees an empty history.",
    "bodyKn": "ವಿಭಾಗ 6 ನಿಜ threads ಬಳಸಿತು: ಒಂದೇ session ಮೇಲೆ ಎರಡು ವಿನಂತಿಗಳು. 50 ms ಮಾದರಿಯೊಂದಿಗೆ 40 ರಲ್ಲಿ 40 ಪ್ರಯೋಗಗಳು ನಿರೀಕ್ಷಿತ 4 ಸಂದೇಶಗಳಿಗಿಂತ ಕಡಿಮೆ ಅಂತ್ಯಗೊಂಡವು, ಏಕೆಂದರೆ ಎರಡೂ ವಿನಂತಿಗಳು ಒಂದೇ ಇತಿಹಾಸ ಲೋಡ್ ಮಾಡಿ ನಂತರದ save ಮೊದಲನೆಯದನ್ನು ಬದಲಿಸಿತು. ತಕ್ಷಣದ ಮಾದರಿಯೊಂದಿಗೆ ಈ ಓಟದಲ್ಲಿ 40 ರಲ್ಲಿ 0 ಪ್ರಯೋಗಗಳು ತಿರುವು ಕಳೆದುಕೊಂಡವು, ಇದು ಇಲ್ಲಿ ಓಟದ ಕಿಟಕಿ ಹೊಡೆಯಲು ತುಂಬಾ ಚಿಕ್ಕದಾಗಿತ್ತು ಎಂದಷ್ಟೇ ಹೇಳುತ್ತದೆ. ವಿಭಾಗ 7: load ಮತ್ತು save ಪಟ್ಟಿಗಳನ್ನು ನಕಲಿಸುವುದರಿಂದ ಕರೆದವರು store ಬದಲಿಸಲಾಗದು, ಆದರೆ store ಒಂದು process ನಲ್ಲಿದೆ, ಆದ್ದರಿಂದ ಎರಡನೇ runtime ಖಾಲಿ ಇತಿಹಾಸ ನೋಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A disposable agent over durable state lets any server handle any request and makes agents cheap to create, test and scale. The cost is that correctness moves into the store: what is saved, when, and what happens when two requests meet.",
    "bodyKn": "ಬಾಳಿಕೆ ಬರುವ state ಮೇಲಿನ ಬಿಸಾಡಬಹುದಾದ agent ಯಾವುದೇ ಸರ್ವರ್ ಯಾವುದೇ ವಿನಂತಿ ನಿರ್ವಹಿಸಲು ಅವಕಾಶ ನೀಡುತ್ತದೆ ಮತ್ತು agents ರಚಿಸಲು, ಪರೀಕ್ಷಿಸಲು ಮತ್ತು ಹಿಗ್ಗಿಸಲು ಅಗ್ಗವಾಗಿಸುತ್ತದೆ. ಬೆಲೆ: ಸರಿತನ store ಗೆ ಸರಿಯುತ್ತದೆ, ಅಂದರೆ ಏನು ಉಳಿಸಬೇಕು, ಯಾವಾಗ, ಮತ್ತು ಎರಡು ವಿನಂತಿಗಳು ಭೇಟಿಯಾದಾಗ ಏನಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"stateless means the system forgets.\" Memory moved to the store; what was forgotten here was only the model's use of it, since the keyword model ignored the history it received.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"stateless ಎಂದರೆ ವ್ಯವಸ್ಥೆ ಮರೆಯುತ್ತದೆ.\" ನೆನಪು store ಗೆ ಸರಿಯಿತು; ಇಲ್ಲಿ ಮರೆತದ್ದು ಮಾದರಿಯ ಅದರ ಬಳಕೆಯನ್ನು ಮಾತ್ರ, ಏಕೆಂದರೆ ಕೀವರ್ಡ್ ಮಾದರಿ ತಾನು ಪಡೆದ ಇತಿಹಾಸ ನಿರ್ಲಕ್ಷಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "SessionStore: durable history by session id. Fresh agent: one Agent object per request. ModelRouter: the layer that calls a model. Request id: one request. Session id: one conversation. Lost update: a later save overwriting an earlier one.",
    "bodyKn": "SessionStore: session id ಪ್ರಕಾರ ಬಾಳಿಕೆ ಬರುವ ಇತಿಹಾಸ. ಹೊಸ agent: ಪ್ರತಿ ವಿನಂತಿಗೆ ಒಂದು Agent ವಸ್ತು. ModelRouter: ಮಾದರಿ ಕರೆಯುವ ಪದರ. Request id: ಒಂದು ವಿನಂತಿ. Session id: ಒಂದು ಸಂಭಾಷಣೆ. Lost update: ನಂತರದ save ಮೊದಲನೆಯದನ್ನು ಅಳಿಸುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Three requests used three agents and one stored conversation. 2) Agent creation took about 1.1 microseconds, and is a large share of a request only when the model is free. 3) History was passed but the keyword model never read it. 4) A failing tool left the session unchanged. 5) With a 50 ms model, 40 of 40 concurrent pairs lost a turn. 6) An in-memory store is private to one process.",
    "bodyKn": "1) ಮೂರು ವಿನಂತಿಗಳು ಮೂರು agents ಮತ್ತು ಒಂದು ಉಳಿಸಿದ ಸಂಭಾಷಣೆ ಬಳಸಿದವು. 2) Agent ರಚನೆ ಸುಮಾರು 1.1 ಮೈಕ್ರೋಸೆಕೆಂಡ್, ಮಾದರಿ ಉಚಿತವಾದಾಗ ಮಾತ್ರ ವಿನಂತಿಯ ದೊಡ್ಡ ಪಾಲು. 3) ಇತಿಹಾಸ ನೀಡಲಾಯಿತು ಆದರೆ ಕೀವರ್ಡ್ ಮಾದರಿ ಓದಲೇ ಇಲ್ಲ. 4) ವಿಫಲ tool session ಬದಲಿಸಲಿಲ್ಲ. 5) 50 ms ಮಾದರಿಯೊಂದಿಗೆ 40 ರಲ್ಲಿ 40 ಏಕಕಾಲಿಕ ಜೋಡಿಗಳು ತಿರುವು ಕಳೆದುಕೊಂಡವು. 6) ಇನ್-ಮೆಮೊರಿ store ಒಂದು process ಗೆ ಖಾಸಗಿ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Where does the conversation live in the Agno-shaped design?",
      "qKn": "Agno-ಶೈಲಿಯ ವಿನ್ಯಾಸದಲ್ಲಿ ಸಂಭಾಷಣೆ ಎಲ್ಲಿದೆ?",
      "opts": [
       "In the Agent object",
       "In the SessionStore",
       "In the ModelRouter",
       "In the tool"
      ],
      "optsKn": [
       "Agent ವಸ್ತುವಿನಲ್ಲಿ",
       "SessionStore ನಲ್ಲಿ",
       "ModelRouter ನಲ್ಲಿ",
       "Tool ನಲ್ಲಿ"
      ],
      "correct": 1
     },
     {
      "q": "Why was agent creation a negligible share with a 50 ms model?",
      "qKn": "50 ms ಮಾದರಿಯೊಂದಿಗೆ agent ರಚನೆ ಅತ್ಯಲ್ಪ ಪಾಲು ಏಕೆ?",
      "opts": [
       "It was cached",
       "It took about a microsecond against 50 milliseconds of model time",
       "It was skipped",
       "It ran in another process"
      ],
      "optsKn": [
       "ಅದು cache ಆಗಿತ್ತು",
       "ಅದು 50 ಮಿಲಿಸೆಕೆಂಡ್ ಮಾದರಿ ಸಮಯದ ಎದುರು ಸುಮಾರು ಒಂದು ಮೈಕ್ರೋಸೆಕೆಂಡ್ ತೆಗೆದುಕೊಂಡಿತು",
       "ಅದನ್ನು ಬಿಡಲಾಯಿತು",
       "ಅದು ಬೇರೆ process ನಲ್ಲಿ ಚಲಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why did \"What about Mumbai?\" return the greeting?",
      "qKn": "\"What about Mumbai?\" ಶುಭಾಶಯ ಏಕೆ ಮರಳಿಸಿತು?",
      "opts": [
       "History was empty",
       "The keyword model never reads the history it is given",
       "Mumbai has no data",
       "The agent crashed"
      ],
      "optsKn": [
       "ಇತಿಹಾಸ ಖಾಲಿ ಇತ್ತು",
       "ಕೀವರ್ಡ್ ಮಾದರಿ ತನಗೆ ನೀಡಿದ ಇತಿಹಾಸ ಓದುವುದಿಲ್ಲ",
       "Mumbai ಗೆ ದತ್ತಾಂಶ ಇಲ್ಲ",
       "Agent ಕುಸಿಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What happened to the session when the weather tool raised KeyError?",
      "qKn": "ಹವಾಮಾನ tool KeyError ಎತ್ತಿದಾಗ session ಗೆ ಏನಾಯಿತು?",
      "opts": [
       "A partial message was saved",
       "It was unchanged because the save comes last",
       "It was deleted",
       "It doubled"
      ],
      "optsKn": [
       "ಭಾಗಶಃ ಸಂದೇಶ ಉಳಿಯಿತು",
       "Save ಕೊನೆಯಲ್ಲಿ ಬರುವುದರಿಂದ ಬದಲಾಗಲಿಲ್ಲ",
       "ಅಳಿಸಲಾಯಿತು",
       "ದ್ವಿಗುಣವಾಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why did two concurrent requests lose a turn with a 50 ms model?",
      "qKn": "50 ms ಮಾದರಿಯೊಂದಿಗೆ ಎರಡು ಏಕಕಾಲಿಕ ವಿನಂತಿಗಳು ತಿರುವು ಏಕೆ ಕಳೆದುಕೊಂಡವು?",
      "opts": [
       "The store was full",
       "Both loaded the same history and the later save replaced the earlier one",
       "The lock timed out",
       "Threads were killed"
      ],
      "optsKn": [
       "Store ತುಂಬಿತ್ತು",
       "ಎರಡೂ ಒಂದೇ ಇತಿಹಾಸ ಲೋಡ್ ಮಾಡಿ ನಂತರದ save ಮೊದಲನೆಯದನ್ನು ಬದಲಿಸಿತು",
       "Lock ಸಮಯ ಮೀರಿತು",
       "Threads ಕೊಲ್ಲಲ್ಪಟ್ಟವು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
