module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321541",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Production Agent Runtimes: Agno and Mastra Ideas (Part 2 of 3) — Typed Tools, Workflows and Routing",
 "titleKn": "Production Agent Runtimes: Agno ಮತ್ತು Mastra ಕಲ್ಪನೆಗಳು (ಭಾಗ 2 / 3) — ಟೈಪ್ ಮಾಡಿದ Tools, Workflows ಮತ್ತು ರೂಟಿಂಗ್",
 "desc": "Rebuild schema-checked tools, a deterministic workflow, model routing and composite storage in Python, then test type hints against schemas, workflow versus agent path spread, routing modes, fallback success and a trace-store outage.",
 "descKn": "Schema-ಪರಿಶೀಲಿತ tools, ನಿರ್ಧಾರಿತ workflow, ಮಾದರಿ ರೂಟಿಂಗ್ ಮತ್ತು ಸಂಯೋಜಿತ ಸಂಗ್ರಹಣೆಯನ್ನು Python ನಲ್ಲಿ ಮರುನಿರ್ಮಿಸಿ, ನಂತರ ಟೈಪ್ ಸುಳಿವುಗಳನ್ನು schemas ವಿರುದ್ಧ, workflow ಮತ್ತು agent ಮಾರ್ಗ ಹರಡುವಿಕೆ, ರೂಟಿಂಗ್ ಕ್ರಮಗಳು, fallback ಯಶಸ್ಸು ಮತ್ತು trace-store ಸ್ಥಗಿತ ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Validate tool arguments at runtime.",
  "Choose between an agent and a workflow.",
  "Compare routing modes honestly.",
  "Estimate what fallback buys under stated assumptions.",
  "Isolate secondary stores from the request."
 ],
 "objectivesKn": [
  "Tool ಆರ್ಗ್ಯುಮೆಂಟ್‌ಗಳನ್ನು ರನ್‌ಟೈಮ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿ.",
  "Agent ಮತ್ತು workflow ನಡುವೆ ಆರಿಸಿ.",
  "ರೂಟಿಂಗ್ ಕ್ರಮಗಳನ್ನು ಪ್ರಾಮಾಣಿಕವಾಗಿ ಹೋಲಿಸಿ.",
  "ಹೇಳಿದ ಊಹೆಗಳಲ್ಲಿ fallback ಏನು ನೀಡುತ್ತದೆ ಎಂದು ಅಂದಾಜಿಸಿ.",
  "ದ್ವಿತೀಯ stores ಅನ್ನು ವಿನಂತಿಯಿಂದ ಪ್ರತ್ಯೇಕಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Production Agent Runtimes: Agno and Mastra Ideas (Part 2 of 3)",
    "textKn": "Production Agent Runtimes: Agno ಮತ್ತು Mastra ಕಲ್ಪನೆಗಳು (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: typed tool boundaries, workflows versus agents, model routing and composite storage. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind Agno and Mastra, not the real software, and the model is a keyword stand-in, so no real LLM behaviour is measured. The pasted Part 2 is TypeScript with Zod-style schemas. There is no TypeScript toolchain in this lab, so none of that code was run; the same ideas are rebuilt in Python with a small hand-written schema, and probabilities in the agent-path and provider-failure experiments are labelled assumptions. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಟೈಪ್ ಮಾಡಿದ tool ಗಡಿಗಳು, workflows ಮತ್ತು agents, ಮಾದರಿ ರೂಟಿಂಗ್ ಮತ್ತು ಸಂಯೋಜಿತ ಸಂಗ್ರಹಣೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು Agno ಮತ್ತು Mastra ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಮಾದರಿ ಕೀವರ್ಡ್ ಬದಲಿ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಭಾಗ 2 Zod-ಶೈಲಿಯ schemas ಇರುವ TypeScript. ಈ ಲ್ಯಾಬ್‌ನಲ್ಲಿ TypeScript toolchain ಇಲ್ಲ, ಆದ್ದರಿಂದ ಆ ಕೋಡ್ ಚಲಾಯಿಸಲಿಲ್ಲ; ಅದೇ ಕಲ್ಪನೆಗಳನ್ನು Python ನಲ್ಲಿ ಚಿಕ್ಕ ಕೈಬರಹದ schema ಯೊಂದಿಗೆ ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ, ಮತ್ತು agent-ಮಾರ್ಗ ಹಾಗೂ provider-ವೈಫಲ್ಯ ಪ್ರಯೋಗಗಳ ಸಂಭವನೀಯತೆಗಳು ಊಹೆಗಳೆಂದು ಗುರುತಿಸಲಾಗಿದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Typed Edges Between Components",
    "textKn": "ಘಟಕಗಳ ನಡುವೆ ಟೈಪ್ ಮಾಡಿದ ಅಂಚುಗಳು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Agent, Tool, Workflow, Router",
    "headingKn": "Agent, Tool, Workflow, Router",
    "bodyEn": "The Mastra-shaped view has four ideas: an Agent chooses what to do, a Tool is a capability with a declared input schema, a Workflow is a fixed sequence of steps, and a Router hides which provider serves the model. The practical rule is to give the model freedom only where freedom pays, and to validate at every boundary where model output meets code. A type hint is documentation; a schema check at runtime is a boundary.",
    "bodyKn": "Mastra-ಶೈಲಿಯ ನೋಟದಲ್ಲಿ ನಾಲ್ಕು ಕಲ್ಪನೆಗಳು: Agent ಏನು ಮಾಡಬೇಕೆಂದು ಆರಿಸುತ್ತದೆ, Tool ಘೋಷಿತ ಇನ್‌ಪುಟ್ schema ಇರುವ ಸಾಮರ್ಥ್ಯ, Workflow ನಿಗದಿತ ಹಂತಗಳ ಅನುಕ್ರಮ, ಮತ್ತು Router ಯಾವ provider ಮಾದರಿಗೆ ಸೇವೆ ನೀಡುತ್ತದೆ ಎಂಬುದನ್ನು ಮರೆಮಾಡುತ್ತದೆ. ಪ್ರಾಯೋಗಿಕ ನಿಯಮ: ಸ್ವಾತಂತ್ರ್ಯ ಲಾಭ ನೀಡುವಲ್ಲಿ ಮಾತ್ರ ಮಾದರಿಗೆ ಸ್ವಾತಂತ್ರ್ಯ ನೀಡಿ, ಮಾದರಿ output ಕೋಡ್ ಭೇಟಿಯಾಗುವ ಪ್ರತಿ ಗಡಿಯಲ್ಲಿ ಪರಿಶೀಲಿಸಿ. ಟೈಪ್ ಸುಳಿವು ದಾಖಲೆ; ರನ್‌ಟೈಮ್ schema ಪರಿಶೀಲನೆ ಗಡಿ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Agent, Workflow, Schema and Router",
    "headingKn": "Agent, Workflow, Schema ಮತ್ತು Router",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Agent decides, workflow follows</text><rect x=\"10\" y=\"40\" width=\"130\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"75\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">Agent</text><text x=\"75\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">model chooses the path</text><rect x=\"160\" y=\"40\" width=\"130\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"225\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">Workflow</text><text x=\"225\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">code fixes the path</text><rect x=\"10\" y=\"110\" width=\"130\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"75\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">schema at each tool</text><text x=\"75\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">rejects bad arguments</text><rect x=\"160\" y=\"110\" width=\"130\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"225\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">Router</text><text x=\"225\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">picks the model/provider</text><path d=\"M75,74 V110 M225,74 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">typed edges between components, probabilistic only where needed</text></svg>",
    "captionEn": "Probabilistic decisions sit inside typed, checked edges.",
    "captionKn": "ಸಂಭವನೀಯ ನಿರ್ಧಾರಗಳು ಟೈಪ್ ಮಾಡಿದ, ಪರಿಶೀಲಿತ ಅಂಚುಗಳೊಳಗೆ ಇರುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Agent versus workflow",
    "headingKn": "Agent ಮತ್ತು workflow ಹೋಲಿಕೆ",
    "headers": [
     "",
     "Agent",
     "Workflow"
    ],
    "rows": [
     [
      "Who picks the next step",
      "the model",
      "the code"
     ],
     [
      "Paths for one input",
      "many, varies run to run",
      "one"
     ],
     [
      "Best for",
      "open-ended tasks",
      "known procedures that must be repeatable"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Typed Layer",
    "textKn": "ಟೈಪ್ ಮಾಡಿದ ಪದರ ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "agno_2.py",
    "headingEn": "Schema, TypedTool, workflow, Router and composite store",
    "headingKn": "Schema, TypedTool, workflow, Router ಮತ್ತು ಸಂಯೋಜಿತ store",
    "descEn": "check_field validates string and int fields, checking bool before int because isinstance(True, int) is true. TypedTool rejects non-objects, extra fields and missing fields with a field path. workflow is validate, tool, format in code. Router supports primary, cost, capability and fallback modes over simulated providers. CompositeStore writes sessions and traces to different stores with optional isolation.",
    "descKn": "check_field ಸ್ಟ್ರಿಂಗ್ ಮತ್ತು int ಕ್ಷೇತ್ರಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ, isinstance(True, int) ನಿಜ ಆದ್ದರಿಂದ int ಮೊದಲು bool ಪರಿಶೀಲಿಸುತ್ತದೆ. TypedTool ವಸ್ತುವಲ್ಲದವು, ಹೆಚ್ಚುವರಿ ಕ್ಷೇತ್ರಗಳು ಮತ್ತು ಕಾಣೆಯಾದ ಕ್ಷೇತ್ರಗಳನ್ನು ಕ್ಷೇತ್ರ ಮಾರ್ಗದೊಂದಿಗೆ ತಿರಸ್ಕರಿಸುತ್ತದೆ. workflow ಕೋಡ್‌ನಲ್ಲಿ validate, tool, format. Router ಅನುಕರಿಸಿದ providers ಮೇಲೆ primary, cost, capability ಮತ್ತು fallback ಕ್ರಮಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ. CompositeStore sessions ಮತ್ತು traces ಅನ್ನು ಬೇರೆ ಬೇರೆ stores ಗೆ ಐಚ್ಛಿಕ ಪ್ರತ್ಯೇಕತೆಯೊಂದಿಗೆ ಬರೆಯುತ್ತದೆ.",
    "code": "class SchemaError(Exception):\n    pass\n\n\ndef check_field(path, spec, value):\n    kind = spec[\"type\"]\n    if kind == \"string\":\n        if not isinstance(value, str):\n            raise SchemaError(f\"{path}: expected string, got {type(value).__name__}\")\n        if spec.get(\"min_len\") and len(value.strip()) < spec[\"min_len\"]:\n            raise SchemaError(f\"{path}: shorter than {spec['min_len']}\")\n        if spec.get(\"enum\") and value.lower() not in spec[\"enum\"]:\n            raise SchemaError(f\"{path}: {value!r} not one of {sorted(spec['enum'])}\")\n    elif kind == \"int\":\n        if isinstance(value, bool) or not isinstance(value, int):\n            raise SchemaError(f\"{path}: expected int, got {type(value).__name__}\")\n        if \"min\" in spec and value < spec[\"min\"] or \"max\" in spec and value > spec[\"max\"]:\n            raise SchemaError(f\"{path}: {value} outside [{spec.get('min')}, {spec.get('max')}]\")\n    return value\n\n\n@dataclass\nclass TypedTool:\n    name: str\n    input_schema: dict\n    handler: Callable[..., Any]\n\n    def execute(self, args):\n        if not isinstance(args, dict):\n            raise SchemaError(f\"input: expected object, got {type(args).__name__}\")\n        extra = set(args) - set(self.input_schema)\n        if extra:\n            raise SchemaError(f\"input: unexpected fields {sorted(extra)}\")\n        for key, spec in self.input_schema.items():\n            if key not in args:\n                raise SchemaError(f\"{key}: required\")\n            check_field(key, spec, args[key])\n        return self.handler(**args)\n\n\nweather = TypedTool(\"get_weather\", {\"city\": {\"type\": \"string\", \"min_len\": 1, \"enum\": set(FAKE_WEATHER)}}, get_weather)\n\n\ndef workflow(args, tool=weather):\n    \"\"\"validate -> execute tool -> format; every step is code, so the same input always takes the same path.\"\"\"\n    log = []\n    log.append(\"validate\"); city = args.get(\"city\") if isinstance(args, dict) else None\n    log.append(\"tool\"); result = tool.execute(args)\n    log.append(\"format\"); return f\"{city.title()}: {result}\", log\n\n\nclass Provider:\n    def __init__(self, name, cost, latency, fail_rate, quality, rng):\n        self.name, self.cost, self.latency, self.fail_rate, self.quality, self.rng = name, cost, latency, fail_rate, quality, rng\n        self.calls = 0\n\n    def complete(self, prompt):\n        self.calls += 1\n        if self.rng.random() < self.fail_rate:\n            raise TimeoutError(f\"{self.name} timed out\")\n        return f\"[{self.name}] answer to: {prompt[:20]}\"\n\n\nclass Router:\n    def __init__(self, providers, mode=\"primary\"):\n        self.providers, self.mode = providers, mode\n\n    def pick(self, prompt):\n        if self.mode == \"cost\":\n            return [self.providers[\"small\"] if len(prompt) < 40 else self.providers[\"large\"]]\n        if self.mode == \"capability\":\n            hard = any(w in prompt.lower() for w in (\"prove\", \"analyse\", \"analyze\", \"design\"))\n            return [self.providers[\"large\"] if hard else self.providers[\"small\"]]\n        if self.mode == \"fallback\":\n            return [self.providers[\"large\"], self.providers[\"small\"]]\n        return [self.providers[\"large\"]]\n\n    def complete(self, prompt):\n        last = None\n        for p in self.pick(prompt):\n            try:\n                return p.complete(prompt), p.name\n            except TimeoutError as e:\n                last = e\n        raise last\n\n\nclass SessionDB:\n    def __init__(self):\n        self.data = {}\n\n    def save(self, k, v):\n        self.data[k] = v\n\n\nclass TraceDB:\n    def __init__(self, down=False):\n        self.rows, self.down = [], down\n\n    def append(self, row):\n        if self.down:\n            raise ConnectionError(\"trace store unavailable\")\n        self.rows.append(row)\n\n\nclass CompositeStore:\n    def __init__(self, sessions, traces, isolate_traces):\n        self.sessions, self.traces, self.isolate = sessions, traces, isolate_traces\n\n    def commit(self, sid, messages, trace):\n        if self.isolate:\n            try:\n                self.traces.append(trace)\n            except ConnectionError:\n                pass\n            self.sessions.save(sid, messages)\n        else:\n            self.traces.append(trace)\n            self.sessions.save(sid, messages)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "agno_2.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() sends eight kinds of input through the schema, contrasts a bare type hint with the schema, runs a workflow 1000 times against a random agent policy, compares routing modes, measures fallback success and tests a trace-store outage with and without isolation.",
    "descKn": "main() ಎಂಟು ರೀತಿಯ ಇನ್‌ಪುಟ್ ಅನ್ನು schema ಮೂಲಕ ಕಳುಹಿಸುತ್ತದೆ, ಬರಿಯ ಟೈಪ್ ಸುಳಿವನ್ನು schema ಜೊತೆ ಹೋಲಿಸುತ್ತದೆ, workflow ಅನ್ನು ಯಾದೃಚ್ಛಿಕ agent ನೀತಿಯ ವಿರುದ್ಧ 1000 ಬಾರಿ ಚಲಾಯಿಸುತ್ತದೆ, ರೂಟಿಂಗ್ ಕ್ರಮಗಳನ್ನು ಹೋಲಿಸುತ್ತದೆ, fallback ಯಶಸ್ಸು ಅಳೆಯುತ್ತದೆ ಮತ್ತು trace-store ಸ್ಥಗಿತವನ್ನು ಪ್ರತ್ಯೇಕತೆ ಇದ್ದು ಇಲ್ಲದೆ ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef attempt(label, fn):\n    try:\n        print(f\"{label:46} {fn()}\")\n    except Exception as e:\n        print(f\"{label:46} {type(e).__name__}: {e}\")\n\n\ndef main():\n    section(\"1. Schema at the tool boundary\")\n    for label, args in ((\"valid\", {\"city\": \"Mumbai\"}), (\"missing city\", {}), (\"number instead of string\", {\"city\": 123}), (\"unknown city\", {\"city\": \"Pune\"}),\n                        (\"empty string\", {\"city\": \"\"}), (\"extra field\", {\"city\": \"Delhi\", \"units\": \"F\"}), (\"not an object\", \"Delhi\"), (\"None\", None)):\n        attempt(f\"{label}\", lambda a=args: weather.execute(a))\n\n    section(\"2. Genuinely checking: a type hint is not a boundary\")\n    attempt(\"get_weather(123) with only a hint\", lambda: get_weather(123))\n    attempt(\"same value through the schema\", lambda: weather.execute({\"city\": 123}))\n    print(\"the hint did not stop 123; it failed inside the function with an AttributeError that names no field, while the schema named 'city' and the expected type\")\n    print(\"isinstance(True, int) is\", isinstance(True, int), \"- the schema checks bool first, otherwise True would pass as an integer:\")\n    count = {\"type\": \"int\", \"min\": 1, \"max\": 5}\n    for v in (3, True, \"3\", 3.0, 0, 6):\n        try:\n            check_field(\"n\", count, v); out = \"accepted\"\n        except SchemaError as e:\n            out = f\"rejected ({e})\"\n        print(f\"  n={v!r:6} -> {out}\")\n    print(\"a model often emits numbers as strings; strict validation rejects '3', while coercing would hide how often the model got the type wrong\")\n\n    section(\"3. Workflow: same input, same path (1000 runs)\")\n    paths = {tuple(workflow({\"city\": \"Delhi\"})[1]) for _ in range(1000)}\n    outs = {workflow({\"city\": \"Delhi\"})[0] for _ in range(1000)}\n    print(\"distinct step paths:\", len(paths), \"| distinct outputs:\", len(outs), \"|\", outs)\n    try:\n        workflow({\"city\": \"Pune\"})\n    except SchemaError as e:\n        print(\"bad input stops at the schema:\", e)\n    rng = random.Random(11)\n    agent_paths = {}\n    for _ in range(1000):\n        r = rng.random()\n        path = (\"tool:get_weather\",) if r < 0.80 else (\"answer-without-tool\",) if r < 0.92 else (\"tool:get_weather\", \"tool:get_weather\") if r < 0.97 else (\"clarify\",)\n        agent_paths[path] = agent_paths.get(path, 0) + 1\n    print(\"an agent whose choice is random (probabilities ASSUMED, seed 11, not measured from a real model):\")\n    for k, v in sorted(agent_paths.items(), key=lambda kv: -kv[1]):\n        print(f\"  {v:>4}  {' -> '.join(k)}\")\n    print(\"the workflow's single path is a property of the code; the agent's spread is an assumption standing in for model variability\")\n\n    section(\"4. Model routing modes (simulated providers, seed 5)\")\n    for mode in (\"primary\", \"cost\", \"capability\"):\n        rng = random.Random(5)\n        provs = {\"large\": Provider(\"large\", 10, 0.8, 0.0, 0.9, rng), \"small\": Provider(\"small\", 1, 0.2, 0.0, 0.6, rng)}\n        router = Router(provs, mode)\n        used = {\"large\": 0, \"small\": 0}\n        prompts = [\"hi\", \"What is 2+2?\", \"Please design a retry policy for payment webhooks with idempotency keys\", \"prove that the sum of two even numbers is even\",\n                   \"ok thanks\", \"Summarise this paragraph about weather in Delhi and Mumbai please now\"]\n        for p in prompts:\n            used[router.complete(p)[1]] += 1\n        cost = used[\"large\"] * 10 + used[\"small\"] * 1\n        print(f\"{mode:10} large={used['large']} small={used['small']} relative cost={cost}\")\n    print(\"capability routing used the large model for 'design' and 'prove' by keyword; the long summarise request went to large under length-based cost routing even though it is easy\")\n    print(\"routing decides which model answers; it does not make any model more capable\")\n\n    section(\"5. Genuinely measuring: fallback routing (assumed 30 percent primary failure rate, seed 9)\")\n    n = 5000\n    for mode in (\"primary\", \"fallback\"):\n        rng = random.Random(9)\n        provs = {\"large\": Provider(\"large\", 10, 0.8, 0.30, 0.9, rng), \"small\": Provider(\"small\", 1, 0.2, 0.30, 0.6, rng)}\n        router = Router(provs, mode)\n        ok, small_answers = 0, 0\n        for i in range(n):\n            try:\n                _, who = router.complete(f\"request {i}\")\n                ok += 1; small_answers += who == \"small\"\n            except TimeoutError:\n                pass\n        calls = provs[\"large\"].calls + provs[\"small\"].calls\n        print(f\"{mode:9} success {ok / n:.1%} | provider calls {calls} | answered by the weaker model {small_answers}\")\n    print(\"with independent 30 percent failures the success rate rises from 70 to about 90 percent (0.7 + 0.3 x 0.7 = 91 percent expected), at the price of some answers coming from the weaker model; real provider outages are correlated, so treat this as the best case\")\n\n    section(\"6. Genuinely checking: composite storage and the observability store\")\n    for isolate in (False, True):\n        sessions, traces = SessionDB(), TraceDB(down=True)\n        store = CompositeStore(sessions, traces, isolate)\n        try:\n            store.commit(\"s1\", [{\"role\": \"user\", \"content\": \"hi\"}], {\"trace\": 1})\n            result = \"request completed\"\n        except ConnectionError as e:\n            result = f\"request failed: {e}\"\n        print(f\"isolate_traces={isolate!s:5} trace store down -> {result} | session saved: {'s1' in sessions.data}\")\n    print(\"when the trace write came first and was not isolated, an outage in the observability store lost the user's session update\")\n    t0 = time.perf_counter()\n    big = TraceDB()\n    for i in range(200_000):\n        big.append({\"span\": i, \"attrs\": \"x\" * 20})\n    print(f\"append-only trace rows are cheap: 200000 rows in {time.perf_counter() - t0:.2f}s, while sessions stay tiny: that asymmetry is the argument for separate stores\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Schema at the tool boundary ---\nvalid                                          30°C, humid\nmissing city                                   SchemaError: city: required\nnumber instead of string                       SchemaError: city: expected string, got int\nunknown city                                   SchemaError: city: 'Pune' not one of ['bengaluru', 'delhi', 'mumbai']\nempty string                                   SchemaError: city: shorter than 1\nextra field                                    SchemaError: input: unexpected fields ['units']\nnot an object                                  SchemaError: input: expected object, got str\nNone                                           SchemaError: input: expected object, got NoneType\n\n--- 2. Genuinely checking: a type hint is not a boundary ---\nget_weather(123) with only a hint              AttributeError: 'int' object has no attribute 'lower'\nsame value through the schema                  SchemaError: city: expected string, got int\nthe hint did not stop 123; it failed inside the function with an AttributeError that names no field, while the schema named 'city' and the expected type\nisinstance(True, int) is True - the schema checks bool first, otherwise True would pass as an integer:\n  n=3      -> accepted\n  n=True   -> rejected (n: expected int, got bool)\n  n='3'    -> rejected (n: expected int, got str)\n  n=3.0    -> rejected (n: expected int, got float)\n  n=0      -> rejected (n: 0 outside [1, 5])\n  n=6      -> rejected (n: 6 outside [1, 5])\na model often emits numbers as strings; strict validation rejects '3', while coercing would hide how often the model got the type wrong\n\n--- 3. Workflow: same input, same path (1000 runs) ---\ndistinct step paths: 1 | distinct outputs: 1 | {'Delhi: 29°C, clear'}\nbad input stops at the schema: city: 'Pune' not one of ['bengaluru', 'delhi', 'mumbai']\nan agent whose choice is random (probabilities ASSUMED, seed 11, not measured from a real model):\n   795  tool:get_weather\n   123  answer-without-tool\n    49  tool:get_weather -> tool:get_weather\n    33  clarify\nthe workflow's single path is a property of the code; the agent's spread is an assumption standing in for model variability\n\n--- 4. Model routing modes (simulated providers, seed 5) ---\nprimary    large=6 small=0 relative cost=60\ncost       large=3 small=3 relative cost=33\ncapability large=2 small=4 relative cost=24\ncapability routing used the large model for 'design' and 'prove' by keyword; the long summarise request went to large under length-based cost routing even though it is easy\nrouting decides which model answers; it does not make any model more capable\n\n--- 5. Genuinely measuring: fallback routing (assumed 30 percent primary failure rate, seed 9) ---\nprimary   success 70.0% | provider calls 5000 | answered by the weaker model 0\nfallback  success 90.3% | provider calls 6534 | answered by the weaker model 1051\nwith independent 30 percent failures the success rate rises from 70 to about 90 percent (0.7 + 0.3 x 0.7 = 91 percent expected), at the price of some answers coming from the weaker model; real provider outages are correlated, so treat this as the best case\n\n--- 6. Genuinely checking: composite storage and the observability store ---\nisolate_traces=False trace store down -> request failed: trace store unavailable | session saved: False\nisolate_traces=True  trace store down -> request completed | session saved: True\nwhen the trace write came first and was not isolated, an outage in the observability store lost the user's session update\nappend-only trace rows are cheap: 200000 rows in 0.06s, while sessions stay tiny: that asymmetry is the argument for separate stores"
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
    "headingEn": "Genuinely Found: A Hint Did Not Stop 123; the Schema Named the Field",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸುಳಿವು 123 ತಡೆಯಲಿಲ್ಲ; schema ಕ್ಷೇತ್ರದ ಹೆಸರು ನೀಡಿತು",
    "bodyEn": "Section 2: get_weather(123) with only a type hint failed inside the function with \"AttributeError: 'int' object has no attribute 'lower'\", which names no field. The same value through the schema raised \"city: expected string, got int\". The int check had to test bool first: isinstance(True, int) is True, and the schema rejected True, \"3\" and 3.0 for an integer field. Strict rejection of \"3\" shows how often a model gets a type wrong; coercing would hide that. Section 1: eight bad inputs, including None, a string instead of an object and an unexpected field, each produced a specific message.",
    "bodyKn": "ವಿಭಾಗ 2: ಕೇವಲ ಟೈಪ್ ಸುಳಿವಿರುವ get_weather(123) ಕಾರ್ಯದೊಳಗೆ \"AttributeError: 'int' object has no attribute 'lower'\" ಎಂದು ವಿಫಲವಾಯಿತು, ಇದು ಯಾವುದೇ ಕ್ಷೇತ್ರದ ಹೆಸರು ನೀಡುವುದಿಲ್ಲ. ಅದೇ ಮೌಲ್ಯ schema ಮೂಲಕ \"city: expected string, got int\" ಎತ್ತಿತು. int ಪರಿಶೀಲನೆ ಮೊದಲು bool ಪರೀಕ್ಷಿಸಬೇಕಾಯಿತು: isinstance(True, int) ನಿಜ, ಮತ್ತು schema int ಕ್ಷೇತ್ರಕ್ಕೆ True, \"3\" ಮತ್ತು 3.0 ತಿರಸ್ಕರಿಸಿತು. \"3\" ಕಟ್ಟುನಿಟ್ಟಾಗಿ ತಿರಸ್ಕರಿಸುವುದು ಮಾದರಿ ಎಷ್ಟು ಬಾರಿ ಟೈಪ್ ತಪ್ಪುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ; ಬದಲಾಯಿಸುವುದು ಅದನ್ನು ಮರೆಮಾಡುತ್ತದೆ. ವಿಭಾಗ 1: None, ವಸ್ತುವಿನ ಬದಲು ಸ್ಟ್ರಿಂಗ್ ಮತ್ತು ಅನಿರೀಕ್ಷಿತ ಕ್ಷೇತ್ರ ಸೇರಿದಂತೆ ಎಂಟು ಕೆಟ್ಟ ಇನ್‌ಪುಟ್‌ಗಳು ಪ್ರತಿಯೊಂದೂ ನಿರ್ದಿಷ್ಟ ಸಂದೇಶ ನೀಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: One Workflow Path Versus an Assumed Agent Spread",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಒಂದು Workflow ಮಾರ್ಗ ಮತ್ತು ಊಹಿಸಿದ Agent ಹರಡುವಿಕೆ",
    "bodyEn": "Section 3: 1000 workflow runs on the same input produced 1 step path and 1 distinct output (\"Delhi: 29°C, clear\"). The agent comparison uses a random policy whose probabilities (80, 12, 5 and 3 percent, seed 11) are assumptions we chose, not measurements of a real model; it produced 795, 123, 49 and 33 runs over four paths. It illustrates what variability would look like, and nothing here says how often a real model would err. Section 4: capability routing sent 2 of 6 prompts to the large model by keyword; cost routing by length sent a long but easy summarise request to the large model.",
    "bodyKn": "ವಿಭಾಗ 3: ಒಂದೇ ಇನ್‌ಪುಟ್ ಮೇಲೆ 1000 workflow ಓಟಗಳು 1 ಹಂತ ಮಾರ್ಗ ಮತ್ತು 1 ವಿಭಿನ್ನ output (\"Delhi: 29°C, clear\") ನೀಡಿದವು. Agent ಹೋಲಿಕೆ ಯಾದೃಚ್ಛಿಕ ನೀತಿ ಬಳಸುತ್ತದೆ, ಅದರ ಸಂಭವನೀಯತೆಗಳು (80, 12, 5 ಮತ್ತು 3 ಶೇಕಡಾ, seed 11) ನಾವು ಆರಿಸಿದ ಊಹೆಗಳು, ನಿಜ ಮಾದರಿಯ ಅಳತೆಗಳಲ್ಲ; ಅದು ನಾಲ್ಕು ಮಾರ್ಗಗಳಲ್ಲಿ 795, 123, 49 ಮತ್ತು 33 ಓಟಗಳನ್ನು ನೀಡಿತು. ವ್ಯತ್ಯಾಸ ಹೇಗಿರುತ್ತದೆ ಎಂದು ಇದು ವಿವರಿಸುತ್ತದೆ, ನಿಜ ಮಾದರಿ ಎಷ್ಟು ಬಾರಿ ತಪ್ಪುತ್ತದೆ ಎಂದು ಇಲ್ಲಿ ಏನೂ ಹೇಳುವುದಿಲ್ಲ. ವಿಭಾಗ 4: capability ರೂಟಿಂಗ್ ಕೀವರ್ಡ್ ಮೂಲಕ 6 ರಲ್ಲಿ 2 ಪ್ರಾಂಪ್ಟ್‌ಗಳನ್ನು ದೊಡ್ಡ ಮಾದರಿಗೆ ಕಳುಹಿಸಿತು; ಉದ್ದದ ಮೂಲಕ cost ರೂಟಿಂಗ್ ಉದ್ದವಾದ ಆದರೆ ಸುಲಭ summarise ವಿನಂತಿಯನ್ನು ದೊಡ್ಡ ಮಾದರಿಗೆ ಕಳುಹಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Fallback Raised Success, and an Observability Outage Cost a Session",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Fallback ಯಶಸ್ಸು ಹೆಚ್ಚಿಸಿತು, ಮತ್ತು ಗಮನಿಸುವಿಕೆ ಸ್ಥಗಿತ session ಕಳೆಯಿತು",
    "bodyEn": "Section 5, with an assumed independent 30 percent failure rate per provider: success was 70.0 percent with the primary alone and 90.3 percent with fallback (0.7 + 0.3 x 0.7 = 91 percent expected), using 6,534 provider calls instead of 5,000 and with 1,051 answers coming from the weaker model. Real outages are correlated, so this is a best case. Section 6: when the trace write came first and the trace store was down, the request failed and the session was not saved; with isolation the request completed and the session was saved.",
    "bodyKn": "ವಿಭಾಗ 5, ಪ್ರತಿ provider ಗೆ ಊಹಿಸಿದ ಸ್ವತಂತ್ರ 30 ಶೇಕಡಾ ವೈಫಲ್ಯದೊಂದಿಗೆ: primary ಮಾತ್ರ ಇದ್ದಾಗ ಯಶಸ್ಸು 70.0 ಶೇಕಡಾ ಮತ್ತು fallback ನೊಂದಿಗೆ 90.3 ಶೇಕಡಾ (0.7 + 0.3 x 0.7 = 91 ಶೇಕಡಾ ನಿರೀಕ್ಷೆ), 5,000 ಬದಲು 6,534 provider ಕರೆಗಳು ಮತ್ತು ದುರ್ಬಲ ಮಾದರಿಯಿಂದ 1,051 ಉತ್ತರಗಳೊಂದಿಗೆ. ನಿಜ ಸ್ಥಗಿತಗಳು ಪರಸ್ಪರ ಸಂಬಂಧಿತ, ಆದ್ದರಿಂದ ಇದು ಉತ್ತಮ ಸನ್ನಿವೇಶ. ವಿಭಾಗ 6: trace ಬರವಣಿಗೆ ಮೊದಲು ಬಂದು trace store ಸ್ಥಗಿತಗೊಂಡಿದ್ದಾಗ ವಿನಂತಿ ವಿಫಲವಾಗಿ session ಉಳಿಯಲಿಲ್ಲ; ಪ್ರತ್ಯೇಕತೆಯೊಂದಿಗೆ ವಿನಂತಿ ಪೂರ್ಣಗೊಂಡು session ಉಳಿಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Schemas turn silent model mistakes into named, countable errors; workflows give repeatable procedures where the path is known; routers keep provider choice out of agent code. Together they confine uncertainty to the places that need it.",
    "bodyKn": "Schemas ಮೌನ ಮಾದರಿ ತಪ್ಪುಗಳನ್ನು ಹೆಸರಿಸಿದ, ಎಣಿಸಬಹುದಾದ ದೋಷಗಳಾಗಿ ಬದಲಿಸುತ್ತವೆ; workflows ಮಾರ್ಗ ತಿಳಿದಿರುವಲ್ಲಿ ಪುನರಾವರ್ತಿಸಬಹುದಾದ ವಿಧಾನ ನೀಡುತ್ತವೆ; routers provider ಆಯ್ಕೆಯನ್ನು agent ಕೋಡ್‌ನಿಂದ ಹೊರಗಿಡುತ್ತವೆ. ಒಟ್ಟಿಗೆ ಅವು ಅನಿಶ್ಚಿತತೆಯನ್ನು ಅಗತ್ಯವಿರುವ ಸ್ಥಳಗಳಿಗೆ ಸೀಮಿತಗೊಳಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"TypeScript types validate model output.\" Types vanish at runtime; only a runtime schema check inspects what the model actually produced, and the Python hint here did not stop an integer.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"TypeScript ಟೈಪ್‌ಗಳು ಮಾದರಿ output ಪರಿಶೀಲಿಸುತ್ತವೆ.\" ಟೈಪ್‌ಗಳು ರನ್‌ಟೈಮ್‌ನಲ್ಲಿ ಮಾಯವಾಗುತ್ತವೆ; ರನ್‌ಟೈಮ್ schema ಪರಿಶೀಲನೆ ಮಾತ್ರ ಮಾದರಿ ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿದ್ದನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ, ಮತ್ತು ಇಲ್ಲಿನ Python ಸುಳಿವು ಪೂರ್ಣಾಂಕ ತಡೆಯಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Schema: a runtime description of valid input. Workflow: steps fixed by code. Router: chooses a provider. Fallback: try another provider after a failure. Composite storage: different stores for sessions and traces. Isolation: a secondary store failure must not fail the request.",
    "bodyKn": "Schema: ಮಾನ್ಯ ಇನ್‌ಪುಟ್‌ನ ರನ್‌ಟೈಮ್ ವಿವರಣೆ. Workflow: ಕೋಡ್ ನಿಗದಿಪಡಿಸಿದ ಹಂತಗಳು. Router: provider ಆರಿಸುತ್ತದೆ. Fallback: ವೈಫಲ್ಯದ ನಂತರ ಬೇರೆ provider ಪ್ರಯತ್ನ. ಸಂಯೋಜಿತ ಸಂಗ್ರಹಣೆ: sessions ಮತ್ತು traces ಗೆ ಬೇರೆ stores. ಪ್ರತ್ಯೇಕತೆ: ದ್ವಿತೀಯ store ವೈಫಲ್ಯ ವಿನಂತಿ ವಿಫಲಗೊಳಿಸಬಾರದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A type hint did not stop 123; the schema named the field. 2) bool must be checked before int. 3) The workflow had one path in 1000 runs; the agent spread is an assumption. 4) Cost and capability routing both mis-sent some prompts by keyword or length. 5) Fallback raised success from 70.0 to 90.3 percent under an assumed independent failure rate. 6) A trace-store outage lost a session until isolated.",
    "bodyKn": "1) ಟೈಪ್ ಸುಳಿವು 123 ತಡೆಯಲಿಲ್ಲ; schema ಕ್ಷೇತ್ರದ ಹೆಸರು ನೀಡಿತು. 2) int ಮೊದಲು bool ಪರಿಶೀಲಿಸಬೇಕು. 3) 1000 ಓಟಗಳಲ್ಲಿ workflow ಗೆ ಒಂದೇ ಮಾರ್ಗ; agent ಹರಡುವಿಕೆ ಊಹೆ. 4) Cost ಮತ್ತು capability ರೂಟಿಂಗ್ ಎರಡೂ ಕೀವರ್ಡ್ ಅಥವಾ ಉದ್ದದಿಂದ ಕೆಲವು ಪ್ರಾಂಪ್ಟ್‌ಗಳನ್ನು ತಪ್ಪಾಗಿ ಕಳುಹಿಸಿದವು. 5) ಊಹಿಸಿದ ಸ್ವತಂತ್ರ ವೈಫಲ್ಯ ದರದಲ್ಲಿ fallback ಯಶಸ್ಸನ್ನು 70.0 ರಿಂದ 90.3 ಶೇಕಡಾಕ್ಕೆ ಹೆಚ್ಚಿಸಿತು. 6) ಪ್ರತ್ಯೇಕಿಸುವವರೆಗೆ trace-store ಸ್ಥಗಿತ session ಕಳೆಯಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why must an int check test bool first in Python?",
      "qKn": "Python ನಲ್ಲಿ int ಪರಿಶೀಲನೆ ಮೊದಲು bool ಏಕೆ ಪರೀಕ್ಷಿಸಬೇಕು?",
      "opts": [
       "bool is a string",
       "isinstance(True, int) is True",
       "bool is faster",
       "int cannot be checked"
      ],
      "optsKn": [
       "bool ಒಂದು ಸ್ಟ್ರಿಂಗ್",
       "isinstance(True, int) ನಿಜ",
       "bool ವೇಗ",
       "int ಪರಿಶೀಲಿಸಲಾಗದು"
      ],
      "correct": 1
     },
     {
      "q": "What did the bare type hint do when get_weather(123) ran?",
      "qKn": "get_weather(123) ಚಲಿಸಿದಾಗ ಬರಿಯ ಟೈಪ್ ಸುಳಿವು ಏನು ಮಾಡಿತು?",
      "opts": [
       "Rejected it by field name",
       "Nothing; it failed inside with an AttributeError naming no field",
       "Converted it",
       "Logged a warning"
      ],
      "optsKn": [
       "ಕ್ಷೇತ್ರದ ಹೆಸರಿನಿಂದ ತಿರಸ್ಕರಿಸಿತು",
       "ಏನೂ ಇಲ್ಲ; ಯಾವುದೇ ಕ್ಷೇತ್ರ ಹೆಸರಿಸದ AttributeError ನೊಂದಿಗೆ ಒಳಗೆ ವಿಫಲವಾಯಿತು",
       "ಅದನ್ನು ಪರಿವರ್ತಿಸಿತು",
       "ಎಚ್ಚರಿಕೆ ದಾಖಲಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "How many distinct step paths did 1000 workflow runs produce?",
      "qKn": "1000 workflow ಓಟಗಳು ಎಷ್ಟು ವಿಭಿನ್ನ ಹಂತ ಮಾರ್ಗಗಳನ್ನು ನೀಡಿದವು?",
      "opts": [
       "4",
       "1",
       "12",
       "1000"
      ],
      "optsKn": [
       "4",
       "1",
       "12",
       "1000"
      ],
      "correct": 1
     },
     {
      "q": "What is the status of the agent-path probabilities in the lab?",
      "qKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ agent-ಮಾರ್ಗ ಸಂಭವನೀಯತೆಗಳ ಸ್ಥಿತಿ ಏನು?",
      "opts": [
       "Measured from a real model",
       "Assumptions chosen by us",
       "Published benchmark values",
       "Random each run"
      ],
      "optsKn": [
       "ನಿಜ ಮಾದರಿಯಿಂದ ಅಳೆದವು",
       "ನಾವು ಆರಿಸಿದ ಊಹೆಗಳು",
       "ಪ್ರಕಟಿತ benchmark ಮೌಲ್ಯಗಳು",
       "ಪ್ರತಿ ಓಟದಲ್ಲಿ ಯಾದೃಚ್ಛಿಕ"
      ],
      "correct": 1
     },
     {
      "q": "What did isolating the trace write change when the trace store was down?",
      "qKn": "trace store ಸ್ಥಗಿತಗೊಂಡಿದ್ದಾಗ trace ಬರವಣಿಗೆ ಪ್ರತ್ಯೇಕಿಸುವುದು ಏನು ಬದಲಿಸಿತು?",
      "opts": [
       "Nothing",
       "The request completed and the session was saved",
       "The session was deleted",
       "The trace was saved anyway"
      ],
      "optsKn": [
       "ಏನೂ ಇಲ್ಲ",
       "ವಿನಂತಿ ಪೂರ್ಣಗೊಂಡು session ಉಳಿಯಿತು",
       "Session ಅಳಿಸಲಾಯಿತು",
       "ಏನಾದರೂ trace ಉಳಿಯಿತು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
