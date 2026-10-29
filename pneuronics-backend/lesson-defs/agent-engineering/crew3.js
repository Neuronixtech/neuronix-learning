module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321538",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Role-Based Agent Teams: Flows and the Complete System (Part 3 of 3) — Control Plane Versus Intelligence",
 "titleKn": "ಪಾತ್ರ-ಆಧಾರಿತ Agent ತಂಡಗಳು: Flows ಮತ್ತು ಸಂಪೂರ್ಣ ವ್ಯವಸ್ಥೆ (ಭಾಗ 3 / 3) — ನಿಯಂತ್ರಣ ಸಮತಲ ಮತ್ತು ಬುದ್ಧಿವಂತಿಕೆ",
 "desc": "Build an event-driven Flow with @start and @listen, put a Crew inside one step, find the silent dead end from a misspelled event, and compare a noisy free-routing crew with a Flow over 200 seeds.",
 "descKn": "@start ಮತ್ತು @listen ಇರುವ ಘಟನೆ-ಚಾಲಿತ Flow ನಿರ್ಮಿಸಿ, ಒಂದು ಹಂತದಲ್ಲಿ Crew ಇಟ್ಟು, ತಪ್ಪಾಗಿ ಬರೆದ ಘಟನೆಯ ಮೌನ ಅಂತ್ಯ ಕಂಡುಹಿಡಿದು, ಗದ್ದಲದ ಮುಕ್ತ-ರೂಟಿಂಗ್ crew ಅನ್ನು Flow ಜೊತೆ 200 ಬೀಜಗಳಲ್ಲಿ ಹೋಲಿಸಿ.",
 "objectives": [
  "Implement @start and @listen and a Flow runner.",
  "Compose a Crew inside a Flow step.",
  "Guard against typo, duplicate and cyclic event wiring.",
  "Test a typed handoff and replay determinism.",
  "Compare Crew and Flow with a seeded simulation, stating its assumptions."
 ],
 "objectivesKn": [
  "@start, @listen ಮತ್ತು Flow runner ಅನುಷ್ಠಾನಿಸಿ.",
  "Flow ಹಂತದೊಳಗೆ Crew ಸಂಯೋಜಿಸಿ.",
  "ಟೈಪೋ, ನಕಲು ಮತ್ತು ಚಕ್ರೀಯ ಘಟನೆ ಸಂಪರ್ಕಗಳ ವಿರುದ್ಧ ಕಾಯಿರಿ.",
  "Typed ಹಸ್ತಾಂತರ ಮತ್ತು replay ನಿರ್ಧಾರಾತ್ಮಕತೆ ಪರೀಕ್ಷಿಸಿ.",
  "ಬೀಜ ಹಾಕಿದ ಸಿಮ್ಯುಲೇಷನ್‌ನಿಂದ Crew ಮತ್ತು Flow ಹೋಲಿಸಿ, ಅದರ ಊಹೆಗಳನ್ನು ಹೇಳಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Role-Based Agent Teams: Flows and the Complete System (Part 3 of 3)",
    "textKn": "ಪಾತ್ರ-ಆಧಾರಿತ Agent ತಂಡಗಳು: Flows ಮತ್ತು ಸಂಪೂರ್ಣ ವ್ಯವಸ್ಥೆ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: event-driven Flows, a Crew inside a Flow, Flow failure modes and a measured crew-versus-flow comparison. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of CrewAI's ideas, not the CrewAI library, and the model is a deterministic stand-in, so no real LLM behaviour is measured. The pasted Part 3 was a flattened export whose final program was cut off, so the system here is rebuilt. Section 6 uses a simulated 15 percent mis-route rate that is an assumption, not a measurement of any real model. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಘಟನೆ-ಚಾಲಿತ Flows, Flow ಒಳಗೆ Crew, Flow ವೈಫಲ್ಯ ವಿಧಾನಗಳು ಮತ್ತು ಅಳೆದ crew-ವರ್ಸಸ್-flow ಹೋಲಿಕೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು CrewAI ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, CrewAI ಲೈಬ್ರರಿ ಅಲ್ಲ, ಮತ್ತು ಮಾದರಿ ನಿರ್ಧಾರಾತ್ಮಕ ಬದಲಿ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಭಾಗ 3 ಚಪ್ಪಟೆಯಾದ ರಫ್ತು ಮತ್ತು ಅದರ ಅಂತಿಮ ಪ್ರೋಗ್ರಾಂ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ ಇಲ್ಲಿನ ವ್ಯವಸ್ಥೆ ಮರುನಿರ್ಮಿತ. ವಿಭಾಗ 6 ಸಿಮ್ಯುಲೇಟೆಡ್ 15 ಶೇಕಡಾ ತಪ್ಪು-ಮಾರ್ಗ ದರ ಬಳಸುತ್ತದೆ, ಅದು ಊಹೆ, ಯಾವುದೇ ನಿಜವಾದ ಮಾದರಿಯ ಅಳತೆ ಅಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Control Plane Versus Intelligence",
    "textKn": "ನಿಯಂತ್ರಣ ಸಮತಲ ಮತ್ತು ಬುದ್ಧಿವಂತಿಕೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Crew for Exploration, Flow for Control",
    "headingKn": "ಅನ್ವೇಷಣೆಗೆ Crew, ನಿಯಂತ್ರಣಕ್ಕೆ Flow",
    "bodyEn": "A Crew gives role-based collaboration where the model decides how to approach the work. A Flow gives an explicit event-driven path: one @start method, methods that @listen for named events, each returning an (event, payload) pair. The two compose: a Flow owns control, and one of its steps can be a Crew for the open-ended part. The Flow engine here is about forty lines: decorators only attach metadata, and a runner reads it.",
    "bodyKn": "Crew ಮಾದರಿ ಕೆಲಸವನ್ನು ಹೇಗೆ ಸಮೀಪಿಸಬೇಕೆಂದು ನಿರ್ಧರಿಸುವಲ್ಲಿ ಪಾತ್ರ-ಆಧಾರಿತ ಸಹಕಾರ ನೀಡುತ್ತದೆ. Flow ಸ್ಪಷ್ಟ ಘಟನೆ-ಚಾಲಿತ ಮಾರ್ಗ ನೀಡುತ್ತದೆ: ಒಂದು @start ವಿಧಾನ, ಹೆಸರಿಸಿದ ಘಟನೆಗಳಿಗೆ @listen ಮಾಡುವ ವಿಧಾನಗಳು, ಪ್ರತಿಯೊಂದೂ (event, payload) ಜೋಡಿ ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ಎರಡೂ ಸೇರಬಹುದು: Flow ನಿಯಂತ್ರಣ ಹೊಂದಿದೆ, ಮತ್ತು ಅದರ ಒಂದು ಹಂತ ಮುಕ್ತ ಭಾಗಕ್ಕೆ Crew ಆಗಬಹುದು. ಇಲ್ಲಿನ Flow ಎಂಜಿನ್ ಸುಮಾರು ನಲವತ್ತು ಸಾಲು: decorators ಕೇವಲ ಮೆಟಾಡೇಟಾ ಅಂಟಿಸುತ್ತವೆ, ಮತ್ತು runner ಅದನ್ನು ಓದುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "A Flow With a Crew Step",
    "headingKn": "Crew ಹಂತ ಇರುವ Flow",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Flow controls the path; a Crew can be one step</text><rect x=\"10\" y=\"40\" width=\"70\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"45\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">@start</text><text x=\"45\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">research</text><rect x=\"115\" y=\"40\" width=\"70\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">@listen</text><text x=\"150\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">crew_step</text><rect x=\"220\" y=\"40\" width=\"70\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"255\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">@listen</text><text x=\"255\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">publish</text><path d=\"M80,57 H115 M185,57 H220\" stroke=\"#475569\"/><text x=\"97\" y=\"52\" fill=\"#94a3b8\" font-size=\"6\">ready</text><text x=\"202\" y=\"52\" fill=\"#94a3b8\" font-size=\"6\">crewed</text><rect x=\"100\" y=\"105\" width=\"100\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"120\" fill=\"#e2e8f0\" text-anchor=\"middle\">Crew inside</text><text x=\"150\" y=\"132\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">open-ended work</text><path d=\"M150,74 V105\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">events name the edges, so the path is inspectable and replayable</text></svg>",
    "captionEn": "Events name the edges of the path, so the whole run can be traced and replayed.",
    "captionKn": "ಘಟನೆಗಳು ಮಾರ್ಗದ ಅಂಚುಗಳಿಗೆ ಹೆಸರಿಡುತ್ತವೆ, ಆದ್ದರಿಂದ ಇಡೀ ಓಟ ಅನುಸರಿಸಿ ಮರುಚಲಾಯಿಸಬಹುದು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Crew versus Flow",
    "headingKn": "Crew ಮತ್ತು Flow ಹೋಲಿಕೆ",
    "headers": [
     "",
     "Crew",
     "Flow"
    ],
    "rows": [
     [
      "Path decided by",
      "Roles and a manager",
      "Named events in code"
     ],
     [
      "Strength",
      "Exploratory collaboration",
      "Replay, audit, testing"
     ],
     [
      "Risk",
      "Skipped or reordered steps",
      "Silent dead ends from bad event names"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Flow and the System",
    "textKn": "Flow ಮತ್ತು ವ್ಯವಸ್ಥೆ ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "crew_3.py",
    "headingEn": "@start, @listen, FlowRunner and two example flows",
    "headingKn": "@start, @listen, FlowRunner ಮತ್ತು ಎರಡು ಉದಾಹರಣೆ flows",
    "descEn": "start and listen only set attributes. FlowRunner finds the single start method, then repeatedly finds the one listener for the last event, calling it with the payload. It raises if there are zero start methods, several listeners for one event, or too many steps; an event with no listener ends the run and is recorded in unhandled. CrewInFlow calls a sequential crew from inside one step.",
    "descKn": "start ಮತ್ತು listen ಕೇವಲ ಗುಣಲಕ್ಷಣಗಳನ್ನು ಹೊಂದಿಸುತ್ತವೆ. FlowRunner ಏಕೈಕ start ವಿಧಾನ ಕಂಡುಹಿಡಿದು, ನಂತರ ಕೊನೆಯ ಘಟನೆಗೆ ಏಕೈಕ listener ಕಂಡುಹಿಡಿದು payload ಜೊತೆ ಕರೆಯುತ್ತದೆ. ಶೂನ್ಯ start ವಿಧಾನಗಳು, ಒಂದು ಘಟನೆಗೆ ಹಲವು listeners ಅಥವಾ ಹೆಚ್ಚು ಹಂತಗಳಿದ್ದರೆ ಅದು ಎತ್ತುತ್ತದೆ; listener ಇಲ್ಲದ ಘಟನೆ ಓಟ ಕೊನೆಗೊಳಿಸಿ unhandled ನಲ್ಲಿ ದಾಖಲಾಗುತ್ತದೆ. CrewInFlow ಒಂದು ಹಂತದೊಳಗಿಂದ sequential crew ಕರೆಯುತ್ತದೆ.",
    "code": "def start(func):\n    func._is_start = True\n    return func\n\n\ndef listen(topic):\n    def decorator(func):\n        func._listens_to = topic\n        return func\n    return decorator\n\n\nclass FlowRunner:\n    def __init__(self, flow, max_steps=20):\n        self.flow, self.max_steps = flow, max_steps\n        self.trace, self.unhandled = [], []\n\n    def _methods(self):\n        return [(n, getattr(self.flow, n)) for n in dir(self.flow) if callable(getattr(self.flow, n)) and not n.startswith(\"_\")]\n\n    def run(self, initial_input):\n        starts = [f for _, f in self._methods() if getattr(f, \"_is_start\", False)]\n        if len(starts) != 1:\n            raise ValueError(f\"a flow needs exactly one @start method, found {len(starts)}\")\n        event, payload = starts[0](initial_input)\n        self.trace.append((starts[0].__name__, event))\n        for _ in range(self.max_steps):\n            listeners = [f for _, f in self._methods() if getattr(f, \"_listens_to\", None) == event]\n            if not listeners:\n                self.unhandled.append(event)\n                return event, payload\n            if len(listeners) > 1:\n                raise ValueError(f\"event {event!r} has {len(listeners)} listeners: {[f.__name__ for f in listeners]}\")\n            event, payload = listeners[0](payload)\n            self.trace.append((listeners[0].__name__, event))\n        raise RuntimeError(f\"flow exceeded {self.max_steps} steps; trace tail: {self.trace[-3:]}\")\n\n\nclass BriefFlow:\n    @start\n    def research(self, topic):\n        return \"researched\", f\"Research completed for {topic}\"\n\n    @listen(\"researched\")\n    def write(self, research):\n        return \"drafted\", f\"Draft based on: {research}\"\n\n    @listen(\"drafted\")\n    def edit(self, draft):\n        return \"edited\", f\"Edited version: {draft}\"\n\n\nclass CrewInFlow:\n    \"\"\"A Flow whose middle step delegates to a Crew; the Flow owns control, the Crew owns the open-ended part.\"\"\"\n\n    @start\n    def gather(self, topic):\n        return \"ready\", (topic, search.run(query=topic))\n\n    @listen(\"ready\")\n    def crew_step(self, payload):\n        topic, fact = payload\n        crew = SequentialCrew([researcher, writer, editor], [\n            Task(\"Research.\", \"three findings\", researcher),\n            Task(\"Write.\", \"one sentence\", writer),\n            Task(\"Edit.\", \"one sentence\", editor),\n        ])\n        result, _ = crew.kickoff(f\"{topic}: {fact}\")\n        return \"crewed\", result\n\n    @listen(\"crewed\")\n    def publish(self, text):\n        return \"published\", f\"PUBLISHED: {text}\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "crew_3.py",
    "headingEn": "Broken flows, a noisy manager and main(): six experiments",
    "headingKn": "ಮುರಿದ flows, ಗದ್ದಲದ ಮ್ಯಾನೇಜರ್ ಮತ್ತು main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "TypoFlow listens for a misspelled event, DuplicateFlow has two listeners, LoopFlow cycles. noisy_manager mis-routes with probability 0.15 using a seeded generator. main() runs all six experiments, including the 200-seed comparison.",
    "descKn": "TypoFlow ತಪ್ಪಾಗಿ ಬರೆದ ಘಟನೆಗೆ ಕಾಯುತ್ತದೆ, DuplicateFlow ಗೆ ಎರಡು listeners ಇವೆ, LoopFlow ಚಕ್ರ ಮಾಡುತ್ತದೆ. noisy_manager ಬೀಜ ಹಾಕಿದ ಜನರೇಟರ್‌ನಿಂದ 0.15 ಸಂಭವನೀಯತೆಯಲ್ಲಿ ತಪ್ಪು ಮಾರ್ಗ ತೋರಿಸುತ್ತದೆ. main() 200-ಬೀಜ ಹೋಲಿಕೆ ಸೇರಿ ಎಲ್ಲ ಆರು ಪ್ರಯೋಗ ಚಲಾಯಿಸುತ್ತದೆ.",
    "code": "class TypoFlow:\n    @start\n    def research(self, topic):\n        return \"researched\", topic\n\n    @listen(\"reserched\")\n    def write(self, x):\n        return \"drafted\", x\n\n\nclass DuplicateFlow:\n    @start\n    def a(self, x):\n        return \"go\", x\n\n    @listen(\"go\")\n    def b(self, x):\n        return \"b-done\", x\n\n    @listen(\"go\")\n    def c(self, x):\n        return \"c-done\", x\n\n\nclass LoopFlow:\n    @start\n    def a(self, x):\n        return \"ping\", x\n\n    @listen(\"ping\")\n    def b(self, x):\n        return \"pong\", x\n\n    @listen(\"pong\")\n    def c(self, x):\n        return \"ping\", x\n\n\ndef section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef noisy_manager(rng):\n    \"\"\"A routing manager with a small chance of a wrong pick, standing in for model variance (a simulation, not a measurement of any real LLM).\"\"\"\n    def choose(context, completed):\n        for role in (\"Researcher\", \"Writer\", \"Editor\"):\n            if role not in completed:\n                return rng.choice([\"Writer\", \"Editor\", \"Researcher\"]) if rng.random() < 0.15 else role\n        return \"done\"\n    return choose\n\n\ndef main():\n    section(\"1. A Flow: decorators attach metadata, the runner reads it\")\n    flow = BriefFlow()\n    print(\"research is_start:\", getattr(flow.research, \"_is_start\", False), \"| write listens to:\", flow.write._listens_to)\n    runner = FlowRunner(flow)\n    event, payload = runner.run(\"agent engineering\")\n    for step, ev in runner.trace:\n        print(f\"{step} -> emits {ev!r}\")\n    print(\"final:\", event, \"|\", payload)\n\n    section(\"2. A Crew inside a Flow\")\n    r2 = FlowRunner(CrewInFlow())\n    event, payload = r2.run(\"agent engineering\")\n    print(\"steps:\", [s for s, _ in r2.trace])\n    print(\"final:\", payload)\n\n    section(\"3. Genuinely checking: a misspelled event name ends the flow silently\")\n    r3 = FlowRunner(TypoFlow())\n    event, payload = r3.run(\"agent engineering\")\n    print(\"trace:\", r3.trace, \"| returned event:\", repr(event), \"| unhandled:\", r3.unhandled)\n    print(\"no exception: 'write' never ran and the caller got a perfectly normal-looking return value\")\n\n    section(\"4. Genuinely checking: two listeners, and a cycle\")\n    try:\n        FlowRunner(DuplicateFlow()).run(\"x\")\n    except ValueError as e:\n        print(\"ValueError:\", e)\n    try:\n        FlowRunner(LoopFlow(), max_steps=10).run(\"x\")\n    except RuntimeError as e:\n        print(\"RuntimeError:\", e)\n\n    section(\"5. The complete system: tool + crew + typed result + assertions\")\n    topic = \"agent engineering\"\n    fact = search.run(query=topic)\n    crew_text = \"Finding 1: \" + fact.rstrip(\".\") + \"\\nFinding 2: Flows give control\\nFinding 3: Crews give roles\"\n    result = parse_result(topic, crew_text)\n    assert isinstance(result, ResearchResult) and len(result.findings) == 3\n    print(\"typed handoff:\", result)\n    first, _ = SequentialCrew([researcher, writer, editor], [Task(\"R\", \"o\", researcher), Task(\"W\", \"o\", writer), Task(\"E\", \"o\", editor)]).kickoff(topic)\n    second, _ = SequentialCrew([researcher, writer, editor], [Task(\"R\", \"o\", researcher), Task(\"W\", \"o\", writer), Task(\"E\", \"o\", editor)]).kickoff(topic)\n    print(\"two identical runs give identical text:\", first == second)\n    print(\"all assertions passed\")\n\n    section(\"6. Genuinely measuring: free-routing crew vs Flow, 200 seeds with a simulated 15% mis-route\")\n    intended = (\"manager->Researcher\", \"manager->Writer\", \"manager->Editor\", \"manager->done\")\n    outcomes, distinct = Counter(), set()\n    for seed in range(200):\n        crew = HierarchicalCrew([researcher, writer, editor], noisy_manager(random.Random(seed)), max_steps=12)\n        text, trace = crew.kickoff(topic)\n        distinct.add(tuple(trace))\n        outcomes[\"intended order\" if tuple(trace) == intended else \"finished, but a role was skipped or reordered\"] += 1\n    print(\"noisy manager outcomes:\", dict(outcomes), \"| distinct traces:\", len(distinct))\n    flow_outputs = {FlowRunner(BriefFlow()).run(topic)[1] for _ in range(200)}\n    print(\"Flow over 200 runs: distinct final outputs =\", len(flow_outputs))\n    print(\"none of the 200 crew runs raised an error, so the wrong-order runs are invisible unless you inspect the trace\")\n    print(\"the 15% is an assumption, so the exact counts are illustrative; the structural point is that a decision per step is a failure point per step\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. A Flow: decorators attach metadata, the runner reads it ---\nresearch is_start: True | write listens to: researched\nresearch -> emits 'researched'\nwrite -> emits 'drafted'\nedit -> emits 'edited'\nfinal: edited | Edited version: Draft based on: Research completed for agent engineering\n\n--- 2. A Crew inside a Flow ---\nsteps: ['gather', 'crew_step', 'publish']\nfinal: PUBLISHED: Edited: Agents increasingly use explicit workflows.\n\n--- 3. Genuinely checking: a misspelled event name ends the flow silently ---\ntrace: [('research', 'researched')] | returned event: 'researched' | unhandled: ['researched']\nno exception: 'write' never ran and the caller got a perfectly normal-looking return value\n\n--- 4. Genuinely checking: two listeners, and a cycle ---\nValueError: event 'go' has 2 listeners: ['b', 'c']\nRuntimeError: flow exceeded 10 steps; trace tail: [('c', 'ping'), ('b', 'pong'), ('c', 'ping')]\n\n--- 5. The complete system: tool + crew + typed result + assertions ---\ntyped handoff: ResearchResult(topic='agent engineering', findings=('Memory, tools and flows', 'Flows give control', 'Crews give roles'))\ntwo identical runs give identical text: True\nall assertions passed\n\n--- 6. Genuinely measuring: free-routing crew vs Flow, 200 seeds with a simulated 15% mis-route ---\nnoisy manager outcomes: {'intended order': 144, 'finished, but a role was skipped or reordered': 56} | distinct traces: 14\nFlow over 200 runs: distinct final outputs = 1\nnone of the 200 crew runs raised an error, so the wrong-order runs are invisible unless you inspect the trace\nthe 15% is an assumption, so the exact counts are illustrative; the structural point is that a decision per step is a failure point per step"
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
    "headingEn": "The Flow Is a Traceable Path",
    "headingKn": "Flow ಅನುಸರಿಸಬಹುದಾದ ಮಾರ್ಗ",
    "bodyEn": "Section 1 traced research emits researched, write emits drafted, edit emits edited, ending with \"Edited version: Draft based on: Research completed for agent engineering\". Section 2 ran steps gather, crew_step, publish, with the sequential crew's output wrapped as \"PUBLISHED: Edited: Agents increasingly use explicit workflows.\" Section 5 put it together: a tool result, a three-finding ResearchResult that passed its assertion, and two identical runs producing identical text.",
    "bodyKn": "ವಿಭಾಗ 1 research researched ಹೊರಸೂಸುತ್ತದೆ, write drafted, edit edited, \"Edited version: Draft based on: Research completed for agent engineering\" ನೊಂದಿಗೆ ಮುಗಿಯುತ್ತದೆ ಎಂದು ಅನುಸರಿಸಿತು. ವಿಭಾಗ 2 gather, crew_step, publish ಹಂತಗಳನ್ನು ಚಲಾಯಿಸಿತು, sequential crew output \"PUBLISHED: Edited: Agents increasingly use explicit workflows.\" ಎಂದು ಸುತ್ತಲ್ಪಟ್ಟು. ವಿಭಾಗ 5 ಎಲ್ಲವನ್ನೂ ಸೇರಿಸಿತು: tool ಫಲಿತಾಂಶ, ಅದರ assertion ಪಾಸ್ ಆದ ಮೂರು-ಕಂಡುಹಿಡಿತ ResearchResult, ಮತ್ತು ಒಂದೇ ಪಠ್ಯ ನೀಡಿದ ಎರಡು ಸಮಾನ ಓಟಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Misspelled Event Ends the Flow Without an Error",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ತಪ್ಪಾಗಿ ಬರೆದ ಘಟನೆ ದೋಷವಿಲ್ಲದೆ Flow ಕೊನೆಗೊಳಿಸುತ್ತದೆ",
    "bodyEn": "TypoFlow listens for \"reserched\" while the start method emits \"researched\". The runner ran only research, recorded \"researched\" as unhandled and returned normally; write never ran and the caller received a normal-looking return value. Section 4 showed the other two structural failures: two listeners on one event raised ValueError naming b and c, and a ping/pong cycle raised \"flow exceeded 10 steps\". Event names are strings, so a Flow needs the same guard as any string-keyed dispatch: check at startup that every listened event is emitted by something, and treat unhandled events as errors.",
    "bodyKn": "Start ವಿಧಾನ \"researched\" ಹೊರಸೂಸುವಾಗ TypoFlow \"reserched\" ಗೆ ಕಾಯುತ್ತದೆ. Runner research ಮಾತ್ರ ಚಲಾಯಿಸಿ \"researched\" ಅನ್ನು unhandled ಎಂದು ದಾಖಲಿಸಿ ಸಾಮಾನ್ಯವಾಗಿ ಹಿಂತಿರುಗಿತು; write ಎಂದೂ ಚಲಿಸಲಿಲ್ಲ ಮತ್ತು ಕರೆದವರು ಸಾಮಾನ್ಯವಾಗಿ ಕಾಣುವ ಮರುಮೌಲ್ಯ ಪಡೆದರು. ವಿಭಾಗ 4 ಇತರ ಎರಡು ರಚನಾತ್ಮಕ ವೈಫಲ್ಯ ತೋರಿಸಿತು: ಒಂದು ಘಟನೆಗೆ ಎರಡು listeners b ಮತ್ತು c ಹೆಸರಿಸಿ ValueError ಎತ್ತಿತು, ಮತ್ತು ping/pong ಚಕ್ರ \"flow exceeded 10 steps\" ಎತ್ತಿತು. ಘಟನೆ ಹೆಸರುಗಳು ಸರಣಿಗಳು, ಆದ್ದರಿಂದ Flow ಗೆ ಯಾವುದೇ ಸರಣಿ-key ಡಿಸ್ಪ್ಯಾಚ್‌ನ ಅದೇ ರಕ್ಷಣೆ ಬೇಕು: ಆರಂಭದಲ್ಲಿ ಪ್ರತಿ ಕೇಳಿದ ಘಟನೆ ಯಾರಾದರೂ ಹೊರಸೂಸುತ್ತಾರೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ, unhandled ಘಟನೆಗಳನ್ನು ದೋಷವೆಂದು ಪರಿಗಣಿಸಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Free-Routing Crew Finished Out of Order in 56 of 200 Runs",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: 200 ಓಟಗಳಲ್ಲಿ 56 ರಲ್ಲಿ ಮುಕ್ತ-ರೂಟಿಂಗ್ Crew ಕ್ರಮ ತಪ್ಪಿ ಮುಗಿಸಿತು",
    "bodyEn": "Section 6 ran a hierarchical crew 200 times with a manager that mis-routes 15 percent of decisions (a seeded simulation). 144 runs followed the intended order and 56 finished with a role skipped or reordered, producing 14 distinct traces. None raised an error, so the wrong runs are invisible unless you inspect the trace. The same job as a Flow, run 200 times, produced exactly 1 distinct output. The 15 percent is our assumption, so the exact counts are illustrative; the structural point is that every manager decision is a place where a step can go wrong, and a Flow removes those decisions from the model.",
    "bodyKn": "ವಿಭಾಗ 6 15 ಶೇಕಡಾ ನಿರ್ಧಾರಗಳನ್ನು ತಪ್ಪು ಮಾರ್ಗ ತೋರಿಸುವ ಮ್ಯಾನೇಜರ್‌ನೊಂದಿಗೆ hierarchical crew ಅನ್ನು 200 ಬಾರಿ ಚಲಾಯಿಸಿತು (ಬೀಜ ಹಾಕಿದ ಸಿಮ್ಯುಲೇಷನ್). 144 ಓಟಗಳು ಉದ್ದೇಶಿತ ಕ್ರಮ ಅನುಸರಿಸಿದವು ಮತ್ತು 56 ಒಂದು ಪಾತ್ರ ಬಿಟ್ಟು ಅಥವಾ ಮರುಕ್ರಮಗೊಳಿಸಿ ಮುಗಿದವು, 14 ಭಿನ್ನ ಟ್ರೇಸ್‌ಗಳೊಂದಿಗೆ. ಯಾವುದೂ ದೋಷ ಎತ್ತಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಟ್ರೇಸ್ ಪರಿಶೀಲಿಸದ ಹೊರತು ತಪ್ಪು ಓಟಗಳು ಅದೃಶ್ಯ. ಅದೇ ಕೆಲಸ Flow ಆಗಿ 200 ಬಾರಿ ಚಲಿಸಿದಾಗ ನಿಖರವಾಗಿ 1 ಭಿನ್ನ output ನೀಡಿತು. 15 ಶೇಕಡಾ ನಮ್ಮ ಊಹೆ, ಆದ್ದರಿಂದ ನಿಖರ ಸಂಖ್ಯೆಗಳು ಉದಾಹರಣೆ ಮಾತ್ರ; ರಚನಾತ್ಮಕ ಅಂಶ: ಪ್ರತಿ ಮ್ಯಾನೇಜರ್ ನಿರ್ಧಾರ ಹಂತ ತಪ್ಪಾಗಬಹುದಾದ ಸ್ಥಳ, ಮತ್ತು Flow ಆ ನಿರ್ಧಾರಗಳನ್ನು ಮಾದರಿಯಿಂದ ತೆಗೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "What This Demo Does and Does Not Prove",
    "headingKn": "ಈ ಪ್ರಾತ್ಯಕ್ಷಿಕೆ ಏನು ಸಾಬೀತುಪಡಿಸುತ್ತದೆ ಮತ್ತು ಏನು ಮಾಡುವುದಿಲ್ಲ",
    "bodyEn": "It proves the architecture: how agents, tasks, crews, tools, memory, typed results and flows fit together, and where each can fail silently. It does not measure a real LLM. The model is deterministic, so behaviour such as a Writer dropping findings is scripted, and the noise in section 6 is an assumption. Use it to learn what to test for in the real CrewAI library, not to predict its numbers.",
    "bodyKn": "ಇದು ವಿನ್ಯಾಸವನ್ನು ಸಾಬೀತುಪಡಿಸುತ್ತದೆ: agents, tasks, crews, tools, memory, typed ಫಲಿತಾಂಶಗಳು ಮತ್ತು flows ಹೇಗೆ ಹೊಂದುತ್ತವೆ ಮತ್ತು ಪ್ರತಿಯೊಂದು ಎಲ್ಲಿ ಮೌನವಾಗಿ ವಿಫಲವಾಗಬಹುದು. ಇದು ನಿಜವಾದ LLM ಅಳೆಯುವುದಿಲ್ಲ. ಮಾದರಿ ನಿರ್ಧಾರಾತ್ಮಕ, ಆದ್ದರಿಂದ Writer ಕಂಡುಹಿಡಿತಗಳನ್ನು ಬಿಡುವಂತಹ ವರ್ತನೆ ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ್ದು, ಮತ್ತು ವಿಭಾಗ 6 ರ ಗದ್ದಲ ಊಹೆ. ನಿಜವಾದ CrewAI ಲೈಬ್ರರಿಯಲ್ಲಿ ಏನನ್ನು ಪರೀಕ್ಷಿಸಬೇಕೆಂದು ಕಲಿಯಲು ಇದನ್ನು ಬಳಸಿ, ಅದರ ಸಂಖ್ಯೆಗಳನ್ನು ಊಹಿಸಲು ಅಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Production agent systems keep the path in code and give the model only the open-ended steps. That makes runs repeatable, testable and auditable while still using model judgement where it adds value.",
    "bodyKn": "ಉತ್ಪಾದನಾ agent ವ್ಯವಸ್ಥೆಗಳು ಮಾರ್ಗವನ್ನು ಕೋಡ್‌ನಲ್ಲಿ ಇಟ್ಟು ಮಾದರಿಗೆ ಮುಕ್ತ ಹಂತಗಳನ್ನು ಮಾತ್ರ ನೀಡುತ್ತವೆ. ಇದು ಓಟಗಳನ್ನು ಪುನರಾವರ್ತನೀಯ, ಪರೀಕ್ಷಿಸಬಹುದಾದ ಮತ್ತು ಲೆಕ್ಕಪರಿಶೋಧನೆಗೆ ಅರ್ಹವಾಗಿಸುತ್ತದೆ, ಮತ್ತು ಮೌಲ್ಯ ಸೇರುವಲ್ಲಿ ಮಾದರಿ ತೀರ್ಮಾನ ಬಳಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a Flow is always better than a Crew.\" A Flow is only as good as its event wiring, as the silent dead end showed, and it cannot do the open-ended exploration a Crew exists for.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"Flow ಯಾವಾಗಲೂ Crew ಗಿಂತ ಉತ್ತಮ.\" ಮೌನ ಅಂತ್ಯ ತೋರಿಸಿದಂತೆ Flow ತನ್ನ ಘಟನೆ ಸಂಪರ್ಕದಷ್ಟೇ ಉತ್ತಮ, ಮತ್ತು Crew ಇರುವ ಮುಕ್ತ ಅನ್ವೇಷಣೆ ಅದು ಮಾಡಲಾರದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Flow: an event-driven pipeline. @start: the entry method. @listen: a method triggered by a named event. Event: the name on an edge. Payload: data passed along an edge. Unhandled event: one with no listener. Replay: re-running to the same result.",
    "bodyKn": "Flow: ಘಟನೆ-ಚಾಲಿತ pipeline. @start: ಪ್ರವೇಶ ವಿಧಾನ. @listen: ಹೆಸರಿಸಿದ ಘಟನೆಯಿಂದ ಪ್ರಚೋದಿತ ವಿಧಾನ. Event: ಅಂಚಿನ ಮೇಲಿನ ಹೆಸರು. Payload: ಅಂಚಿನ ಮೂಲಕ ಹಾದುಹೋಗುವ ದತ್ತಾಂಶ. Unhandled event: listener ಇಲ್ಲದ್ದು. Replay: ಅದೇ ಫಲಿತಾಂಶಕ್ಕೆ ಮರುಚಲಾಯಿಸುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A Flow is metadata from decorators plus a small runner. 2) A Crew can be one step of a Flow. 3) A misspelled event ended the flow with no error. 4) Duplicate listeners and cycles must be guarded. 5) With a 15 percent simulated mis-route, 56 of 200 crew runs finished out of order, silently. 6) The Flow produced 1 distinct output in 200 runs. 7) None of this measures a real LLM.",
    "bodyKn": "1) Flow ಎಂದರೆ decorators ನ ಮೆಟಾಡೇಟಾ ಜೊತೆ ಚಿಕ್ಕ runner. 2) Crew ಒಂದು Flow ನ ಒಂದು ಹಂತ ಆಗಬಹುದು. 3) ತಪ್ಪಾಗಿ ಬರೆದ ಘಟನೆ ದೋಷವಿಲ್ಲದೆ flow ಕೊನೆಗೊಳಿಸಿತು. 4) ನಕಲು listeners ಮತ್ತು ಚಕ್ರಗಳನ್ನು ಕಾಯಬೇಕು. 5) 15 ಶೇಕಡಾ ಸಿಮ್ಯುಲೇಟೆಡ್ ತಪ್ಪು-ಮಾರ್ಗದೊಂದಿಗೆ 200 crew ಓಟಗಳಲ್ಲಿ 56 ಮೌನವಾಗಿ ಕ್ರಮ ತಪ್ಪಿ ಮುಗಿದವು. 6) Flow 200 ಓಟಗಳಲ್ಲಿ 1 ಭಿನ್ನ output ನೀಡಿತು. 7) ಇದರಲ್ಲಿ ಯಾವುದೂ ನಿಜವಾದ LLM ಅಳೆಯುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What do the @start and @listen decorators actually do here?",
      "qKn": "ಇಲ್ಲಿ @start ಮತ್ತು @listen decorators ನಿಜವಾಗಿ ಏನು ಮಾಡುತ್ತವೆ?",
      "opts": [
       "Run the method",
       "Attach metadata that the runner reads later",
       "Call a model",
       "Create threads"
      ],
      "optsKn": [
       "ವಿಧಾನ ಚಲಾಯಿಸುತ್ತವೆ",
       "Runner ನಂತರ ಓದುವ ಮೆಟಾಡೇಟಾ ಅಂಟಿಸುತ್ತವೆ",
       "ಮಾದರಿ ಕರೆಯುತ್ತವೆ",
       "threads ಸೃಷ್ಟಿಸುತ್ತವೆ"
      ],
      "correct": 1
     },
     {
      "q": "TypoFlow listened for \"reserched\". What happened?",
      "qKn": "TypoFlow \"reserched\" ಗೆ ಕಾಯಿತು. ಏನಾಯಿತು?",
      "opts": [
       "A KeyError",
       "The flow ended after research with the event recorded as unhandled, and no error",
       "write ran anyway",
       "An infinite loop"
      ],
      "optsKn": [
       "KeyError",
       "research ನಂತರ ಘಟನೆ unhandled ಎಂದು ದಾಖಲಾಗಿ flow ದೋಷವಿಲ್ಲದೆ ಮುಗಿಯಿತು",
       "write ಹೇಗಾದರೂ ಚಲಿಸಿತು",
       "ಅನಂತ ಚಕ್ರ"
      ],
      "correct": 1
     },
     {
      "q": "In the 200-seed comparison, how many crew runs followed the intended order?",
      "qKn": "200-ಬೀಜ ಹೋಲಿಕೆಯಲ್ಲಿ ಎಷ್ಟು crew ಓಟಗಳು ಉದ್ದೇಶಿತ ಕ್ರಮ ಅನುಸರಿಸಿದವು?",
      "opts": [
       "200",
       "144, with 56 finishing out of order and none raising an error",
       "56",
       "0"
      ],
      "optsKn": [
       "200",
       "144, 56 ಕ್ರಮ ತಪ್ಪಿ ಮುಗಿದವು ಮತ್ತು ಯಾವುದೂ ದೋಷ ಎತ್ತಲಿಲ್ಲ",
       "56",
       "0"
      ],
      "correct": 1
     },
     {
      "q": "Why must the 15 percent figure not be quoted as a CrewAI statistic?",
      "qKn": "15 ಶೇಕಡಾ ಅಂಕಿಯನ್ನು CrewAI ಅಂಕಿಅಂಶವಾಗಿ ಏಕೆ ಉಲ್ಲೇಖಿಸಬಾರದು?",
      "opts": [
       "It is a measured rate",
       "It is our simulation assumption, not a measurement of any real model",
       "It is from the paper",
       "It is rounded"
      ],
      "optsKn": [
       "ಅದು ಅಳೆದ ದರ",
       "ಅದು ನಮ್ಮ ಸಿಮ್ಯುಲೇಷನ್ ಊಹೆ, ಯಾವುದೇ ನಿಜವಾದ ಮಾದರಿಯ ಅಳತೆ ಅಲ್ಲ",
       "ಅದು ಪೇಪರ್‌ನಿಂದ",
       "ಅದು ದುಂಡಾದದ್ದು"
      ],
      "correct": 1
     },
     {
      "q": "How do a Crew and a Flow combine?",
      "qKn": "Crew ಮತ್ತು Flow ಹೇಗೆ ಸೇರುತ್ತವೆ?",
      "opts": [
       "They cannot",
       "A Flow owns the path and one of its steps can run a Crew",
       "A Crew contains the runner",
       "Both are the same"
      ],
      "optsKn": [
       "ಅವು ಸೇರಲಾರವು",
       "Flow ಮಾರ್ಗ ಹೊಂದಿದೆ ಮತ್ತು ಅದರ ಒಂದು ಹಂತ Crew ಚಲಾಯಿಸಬಹುದು",
       "Crew ಒಳಗೆ runner ಇದೆ",
       "ಎರಡೂ ಒಂದೇ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
