module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321538",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Role-Based Agent Teams: Tools, Typed Results and Memory (Part 2 of 3) — Reaching Outside the Prompt",
 "titleKn": "ಪಾತ್ರ-ಆಧಾರಿತ Agent ತಂಡಗಳು: Tools, Typed ಫಲಿತಾಂಶಗಳು ಮತ್ತು Memory (ಭಾಗ 2 / 3) — ಪ್ರಾಂಪ್ಟ್ ಹೊರಗೆ ತಲುಪುವುದು",
 "desc": "Add a @tool decorator with per-agent access, a self-validating typed result and layered memory, then test description-driven selection, what a type does and does not guarantee, and where word-overlap retrieval fails.",
 "descKn": "ಪ್ರತಿ-agent ಪ್ರವೇಶದ @tool decorator, ಸ್ವಯಂ-ಮಾನ್ಯ typed ಫಲಿತಾಂಶ ಮತ್ತು ಪದರಯುಕ್ತ memory ಸೇರಿಸಿ, ವಿವರಣೆ-ಚಾಲಿತ ಆಯ್ಕೆ, type ಏನು ಖಾತರಿಪಡಿಸುತ್ತದೆ ಮತ್ತು ಇಲ್ಲ, ಮತ್ತು ಪದ-ಅತಿಕ್ರಮಣ ಹುಡುಕಾಟ ಎಲ್ಲಿ ವಿಫಲ ಎಂದು ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Build a @tool decorator and explain why the docstring matters.",
  "Restrict tools per agent.",
  "Validate handoffs with a typed result.",
  "Implement layered memory and retrieval.",
  "Name the failure modes of word-overlap retrieval."
 ],
 "objectivesKn": [
  "@tool decorator ನಿರ್ಮಿಸಿ ಮತ್ತು docstring ಏಕೆ ಮುಖ್ಯ ಎಂದು ವಿವರಿಸಿ.",
  "ಪ್ರತಿ agent ಗೆ tools ನಿರ್ಬಂಧಿಸಿ.",
  "Typed ಫಲಿತಾಂಶದಿಂದ ಹಸ್ತಾಂತರ ಮಾನ್ಯ ಮಾಡಿ.",
  "ಪದರಯುಕ್ತ memory ಮತ್ತು ಹುಡುಕಾಟ ಅನುಷ್ಠಾನಿಸಿ.",
  "ಪದ-ಅತಿಕ್ರಮಣ ಹುಡುಕಾಟದ ವೈಫಲ್ಯ ವಿಧಾನಗಳನ್ನು ಹೆಸರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Role-Based Agent Teams: Tools, Typed Results and Memory (Part 2 of 3)",
    "textKn": "ಪಾತ್ರ-ಆಧಾರಿತ Agent ತಂಡಗಳು: Tools, Typed ಫಲಿತಾಂಶಗಳು ಮತ್ತು Memory (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: the @tool decorator, per-agent tool access, a typed ResearchResult and layered memory. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of CrewAI's ideas, not the CrewAI library, and the model is a deterministic stand-in, so no real LLM behaviour is measured. The pasted Part 2 was a flattened export; the code is rebuilt from its descriptions. The retrieval used here is word overlap, a deliberately simple stand-in for embedding search. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: @tool decorator, ಪ್ರತಿ-agent tool ಪ್ರವೇಶ, typed ResearchResult ಮತ್ತು ಪದರಯುಕ್ತ memory. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು CrewAI ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, CrewAI ಲೈಬ್ರರಿ ಅಲ್ಲ, ಮತ್ತು ಮಾದರಿ ನಿರ್ಧಾರಾತ್ಮಕ ಬದಲಿ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಭಾಗ 2 ಚಪ್ಪಟೆಯಾದ ರಫ್ತು; ಕೋಡ್ ಅದರ ವಿವರಣೆಗಳಿಂದ ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. ಇಲ್ಲಿ ಬಳಸಿದ ಹುಡುಕಾಟ ಪದ-ಅತಿಕ್ರಮಣ, ಎಂಬೆಡಿಂಗ್ ಹುಡುಕಾಟಕ್ಕೆ ಉದ್ದೇಶಪೂರ್ವಕ ಸರಳ ಬದಲಿ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Reaching Outside the Prompt",
    "textKn": "ಪ್ರಾಂಪ್ಟ್ ಹೊರಗೆ ತಲುಪುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Tools, Contracts and Memory",
    "headingKn": "Tools, ಒಪ್ಪಂದಗಳು ಮತ್ತು Memory",
    "bodyEn": "Part 1 left three gaps. An agent cannot act on the world, so it needs tools. Output shape is only requested, so it needs a typed result. And each run starts from nothing, so it needs memory. A tool is a named function plus a description a model can read; the docstring is that description, which makes it the interface. A typed result is a frozen dataclass that validates itself. Memory comes in layers: short-term for the current run, long-term for facts across runs, entity for facts about named things.",
    "bodyKn": "ಭಾಗ 1 ಮೂರು ಅಂತರಗಳನ್ನು ಬಿಟ್ಟಿತು. Agent ಜಗತ್ತಿನ ಮೇಲೆ ಕ್ರಿಯೆ ಮಾಡಲಾರದು, ಆದ್ದರಿಂದ tools ಬೇಕು. Output ರೂಪ ಕೇವಲ ಕೋರಲ್ಪಟ್ಟಿದೆ, ಆದ್ದರಿಂದ typed ಫಲಿತಾಂಶ ಬೇಕು. ಮತ್ತು ಪ್ರತಿ ಓಟ ಶೂನ್ಯದಿಂದ ಪ್ರಾರಂಭ, ಆದ್ದರಿಂದ memory ಬೇಕು. Tool ಎಂದರೆ ಹೆಸರಿಸಿದ ಕಾರ್ಯ ಜೊತೆ ಮಾದರಿ ಓದಬಹುದಾದ ವಿವರಣೆ; docstring ಆ ವಿವರಣೆ, ಅದನ್ನು ಇಂಟರ್ಫೇಸ್ ಮಾಡುತ್ತದೆ. Typed ಫಲಿತಾಂಶ ಸ್ವತಃ ಮಾನ್ಯ ಮಾಡುವ ಫ್ರೋಜನ್ dataclass. Memory ಪದರಗಳಲ್ಲಿ ಬರುತ್ತದೆ: ಪ್ರಸ್ತುತ ಓಟಕ್ಕೆ ಅಲ್ಪಾವಧಿ, ಓಟಗಳಾದ್ಯಂತ ಸಂಗತಿಗಳಿಗೆ ದೀರ್ಘಾವಧಿ, ಹೆಸರಿಸಿದ ವಸ್ತುಗಳ ಸಂಗತಿಗಳಿಗೆ entity."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "An Agent With Tools, a Typed Result and Memory",
    "headingKn": "Tools, Typed ಫಲಿತಾಂಶ ಮತ್ತು Memory ಇರುವ Agent",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Tools, typed results and memory around an agent</text><rect x=\"100\" y=\"28\" width=\"100\" height=\"38\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"43\" fill=\"#e2e8f0\" text-anchor=\"middle\">Agent</text><text x=\"150\" y=\"55\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">tools it was given</text><rect x=\"10\" y=\"90\" width=\"85\" height=\"38\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"52.5\" y=\"105\" fill=\"#e2e8f0\" text-anchor=\"middle\">Tool</text><text x=\"52.5\" y=\"117\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">name + docstring</text><rect x=\"108\" y=\"90\" width=\"85\" height=\"38\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150.5\" y=\"105\" fill=\"#e2e8f0\" text-anchor=\"middle\">ResearchResult</text><text x=\"150.5\" y=\"117\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">typed, validated</text><rect x=\"205\" y=\"90\" width=\"85\" height=\"38\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"247.5\" y=\"105\" fill=\"#e2e8f0\" text-anchor=\"middle\">Memory</text><text x=\"247.5\" y=\"117\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">short/long/entity</text><path d=\"M130,66 L52,90 M150,66 V90 M170,66 L247,90\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the docstring is the interface; the type is the contract</text></svg>",
    "captionEn": "The docstring is the tool interface; the dataclass is the output contract.",
    "captionKn": "Docstring tool ಇಂಟರ್ಫೇಸ್; dataclass output ಒಪ್ಪಂದ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Memory layers in the lab",
    "headingKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ memory ಪದರಗಳು",
    "headers": [
     "Layer",
     "Holds",
     "Lifetime"
    ],
    "rows": [
     [
      "short_term",
      "What happened this run",
      "One kickoff"
     ],
     [
      "long_term",
      "Facts to retrieve later",
      "Across kickoffs"
     ],
     [
      "entities",
      "Facts keyed by a named thing",
      "Across kickoffs"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building Them",
    "textKn": "ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "crew_2.py",
    "headingEn": "Tool, @tool, ToolAgent and the typed ResearchResult",
    "headingKn": "Tool, @tool, ToolAgent ಮತ್ತು typed ResearchResult",
    "descEn": "tool(name) turns a function into a Tool carrying its docstring as the description. pick_tool is a crude description-driven chooser. ToolAgent refuses tools it was not given. ResearchResult is frozen and validates itself in __post_init__; parse_result turns agent text into one.",
    "descKn": "tool(name) ಕಾರ್ಯವನ್ನು ತನ್ನ docstring ಅನ್ನು ವಿವರಣೆಯಾಗಿ ಹೊತ್ತ Tool ಆಗಿ ಬದಲಿಸುತ್ತದೆ. pick_tool ವಿವರಣೆ-ಚಾಲಿತ ಒರಟು ಆಯ್ಕೆಗಾರ. ToolAgent ತನಗೆ ನೀಡದ tools ನಿರಾಕರಿಸುತ್ತದೆ. ResearchResult ಫ್ರೋಜನ್ ಮತ್ತು __post_init__ ನಲ್ಲಿ ಸ್ವತಃ ಮಾನ್ಯ ಮಾಡುತ್ತದೆ; parse_result agent ಪಠ್ಯವನ್ನು ಒಂದಾಗಿ ಬದಲಿಸುತ್ತದೆ.",
    "code": "@dataclass\nclass Tool:\n    name: str\n    description: str\n    function: Callable\n\n    def run(self, **kwargs):\n        return self.function(**kwargs)\n\n\ndef tool(name: str):\n    def decorator(func):\n        return Tool(name=name, description=func.__doc__ or \"\", function=func)\n    return decorator\n\n\n@tool(\"search\")\ndef search(query: str) -> str:\n    \"\"\"Search a deterministic local knowledge base.\"\"\"\n    kb = {\"agent engineering\": \"Memory, tools and flows.\", \"crew\": \"A container of agents and tasks.\"}\n    return kb.get(query.lower(), \"no result\")\n\n\n@tool(\"calculator\")\ndef calculator(expression: str) -> str:\n    \"\"\"Add two integers written like '2 + 3'.\"\"\"\n    a, b = expression.split(\"+\")\n    return str(int(a) + int(b))\n\n\n@tool(\"word_count\")\ndef word_count(text: str) -> str:\n    return str(len(text.split()))\n\n\nclass ToolAgent(Agent):\n    \"\"\"An agent that may only call tools it was given.\"\"\"\n\n    def use(self, tool_name: str, **kwargs):\n        allowed = {t.name: t for t in self.tools}\n        if tool_name not in allowed:\n            raise PermissionError(f\"{self.role} has no tool {tool_name!r}; it has {sorted(allowed)}\")\n        return allowed[tool_name].run(**kwargs)\n\n\ndef pick_tool(tools, request: str):\n    \"\"\"Choose a tool by word overlap between the request and each description (a crude stand-in for a model reading them).\"\"\"\n    words = set(request.lower().split())\n    scored = sorted(((len(words & set(t.description.lower().split())), t.name) for t in tools), reverse=True)\n    return scored[0]\n\n\n@dataclass(frozen=True)\nclass ResearchResult:\n    topic: str\n    findings: tuple\n\n    def __post_init__(self):\n        if not self.topic:\n            raise ValueError(\"topic must not be empty\")\n        if len(self.findings) != 3:\n            raise ValueError(f\"expected exactly 3 findings, got {len(self.findings)}\")\n\n\ndef parse_result(topic: str, text: str) -> ResearchResult:\n    lines = tuple(l.split(\": \", 1)[1] for l in text.splitlines() if l.startswith(\"Finding\") and \": \" in l)\n    return ResearchResult(topic, lines)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "crew_2.py",
    "headingEn": "Memory, MemoryCrew and main(): seven experiments",
    "headingKn": "Memory, MemoryCrew ಮತ್ತು main(): ಏಳು ಪ್ರಯೋಗಗಳು",
    "descEn": "Memory keeps the three layers and retrieves by word overlap with an optional stop-word list, k and min_score. MemoryCrew reads long-term memory before a run and writes the result back after it. main() checks tool description, per-agent access, typed rejection, retrieval failure modes and memory across two kickoffs.",
    "descKn": "Memory ಮೂರು ಪದರಗಳನ್ನು ಇಟ್ಟು ಐಚ್ಛಿಕ stop-word ಪಟ್ಟಿ, k ಮತ್ತು min_score ಜೊತೆ ಪದ-ಅತಿಕ್ರಮಣದಿಂದ ಹುಡುಕುತ್ತದೆ. MemoryCrew ಓಟದ ಮೊದಲು ದೀರ್ಘಾವಧಿ memory ಓದಿ ನಂತರ ಫಲಿತಾಂಶ ಮರಳಿ ಬರೆಯುತ್ತದೆ. main() tool ವಿವರಣೆ, ಪ್ರತಿ-agent ಪ್ರವೇಶ, typed ತಿರಸ್ಕಾರ, ಹುಡುಕಾಟ ವೈಫಲ್ಯ ವಿಧಾನಗಳು ಮತ್ತು ಎರಡು kickoffs ಅಡ್ಡಲಾಗಿ memory ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
    "code": "STOP = {\"the\", \"a\", \"an\", \"is\", \"of\", \"and\", \"to\", \"in\", \"for\", \"what\", \"does\"}\n\n\nclass Memory:\n    def __init__(self, use_stopwords=False):\n        self.short_term, self.long_term, self.entities = [], [], {}\n        self.use_stopwords = use_stopwords\n\n    def remember_short(self, value):\n        self.short_term.append(value)\n\n    def remember_long(self, value):\n        self.long_term.append(value)\n\n    def remember_entity(self, name, fact):\n        self.entities.setdefault(name, []).append(fact)\n\n    def _words(self, text):\n        w = set(text.lower().replace(\"?\", \"\").replace(\".\", \"\").split())\n        return w - STOP if self.use_stopwords else w\n\n    def retrieve(self, query, k=2, min_score=0):\n        q = self._words(query)\n        scored = sorted(((len(q & self._words(m)), m) for m in self.long_term), key=lambda x: -x[0])\n        return [(s, m) for s, m in scored[:k] if s >= min_score]\n\n\nclass MemoryCrew:\n    \"\"\"Sequential crew whose first agent reads long-term memory and whose result is written back after the run.\"\"\"\n\n    def __init__(self, memory, use_memory=True):\n        self.memory, self.use_memory = memory, use_memory\n\n    def kickoff(self, topic):\n        hits = self.memory.retrieve(topic, min_score=1) if self.use_memory else []\n        context = topic + (\"\\nPRIOR: \" + \" | \".join(m for _, m in hits) if hits else \"\")\n        crew = SequentialCrew([], [Task(\"Research\", \"three findings\", Agent(\"Researcher\", \"g\", \"b\"))])\n        out, _ = crew.kickoff(context)\n        self.memory.remember_long(f\"{topic}: {out.splitlines()[0]}\")\n        return context, hits\n\n\ndef section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. The @tool decorator turns a function into a described object\")\n    for t in (search, calculator, word_count):\n        print(f\"{t.name!r}: description={t.description!r}\")\n    print(\"search(agent engineering) ->\", search.run(query=\"agent engineering\"))\n    print(\"calculator('2 + 3') ->\", calculator.run(expression=\"2 + 3\"))\n\n    section(\"2. Genuinely checking: a tool with no docstring has nothing for a model to read\")\n    tools = [search, calculator, word_count]\n    for request in (\"search the knowledge base for crew\", \"add two integers\", \"count the words in this text\"):\n        score, name = pick_tool(tools, request)\n        words = set(request.lower().split())\n        allscores = {t.name: len(words & set(t.description.lower().split())) for t in tools}\n        print(f\"request {request!r:42} -> picked {name!r}; scores {allscores}\")\n    print(\"the word-count request scores 0 for every tool, so 'word_count' was chosen only by the sort tie-break, not by evidence\")\n    print(\"an empty description can never earn a positive score, so a description-driven chooser cannot select it on merit\")\n\n    section(\"3. Tool access is per agent\")\n    r = ToolAgent(\"Researcher\", \"g\", \"b\", tools=[search])\n    print(\"researcher uses search:\", r.use(\"search\", query=\"crew\"))\n    try:\n        r.use(\"calculator\", expression=\"1 + 1\")\n    except PermissionError as e:\n        print(\"PermissionError:\", e)\n    try:\n        r.use(\"search\", wrong_argument=\"x\")\n    except TypeError as e:\n        print(\"TypeError:\", e)\n    try:\n        calculator.run(expression=\"2 plus 3\")\n    except ValueError as e:\n        print(\"tool body error surfaces as:\", type(e).__name__, \"-\", e)\n\n    section(\"4. Genuinely checking: structured output rejects what expected_output would accept\")\n    good = \"Finding 1: a\\nFinding 2: b\\nFinding 3: c\"\n    print(\"good ->\", parse_result(\"agents\", good))\n    for label, text in ((\"two findings\", \"Finding 1: a\\nFinding 2: b\"),\n                        (\"prose\", \"Here are my thoughts on agents, they are great.\"),\n                        (\"four findings\", good + \"\\nFinding 4: d\")):\n        try:\n            parse_result(\"agents\", text)\n        except ValueError as e:\n            print(f\"{label:14} -> ValueError: {e}\")\n    try:\n        parse_result(\"agents\", good).topic = \"x\"\n    except Exception as e:\n        print(\"the typed result is frozen:\", type(e).__name__)\n    print(\"note: 3 findings of nonsense still pass; a typed shape checks structure, not truth\")\n    print(\"nonsense passes:\", parse_result(\"agents\", \"Finding 1: ?\\nFinding 2: ?\\nFinding 3: ?\").findings)\n\n    section(\"5. Layers of memory\")\n    m = Memory()\n    m.remember_short(\"user asked about CrewAI\")\n    m.remember_long(\"Flows give deterministic control of a pipeline\")\n    m.remember_long(\"Crews give role-based collaboration\")\n    m.remember_long(\"Process decides the execution strategy of a crew\")\n    m.remember_entity(\"CrewAI\", \"a framework for role-based agents\")\n    print(\"short:\", m.short_term, \"| entities:\", m.entities)\n    print(\"retrieve('what is a Process'):\", m.retrieve(\"what is a Process\", k=2))\n\n    section(\"6. Genuinely checking: word-overlap retrieval and its failure modes\")\n    raw, filt = Memory(), Memory(use_stopwords=True)\n    for mem in (raw, filt):\n        mem.remember_long(\"the team decided to ship on Friday\")\n        mem.remember_long(\"the deadline for the release is Friday\")\n        mem.remember_long(\"tea is served in the afternoon\")\n    q = \"what is the plan for the launch\"\n    print(\"query:\", q)\n    print(\"raw words        :\", raw.retrieve(q, k=1))\n    print(\"stop-words dropped:\", filt.retrieve(q, k=1))\n    print(\"paraphrase 'when do we release' ->\", filt.retrieve(\"when do we release\", k=2))\n    print(\"zero-overlap top-k still returns items unless min_score is set:\", filt.retrieve(\"zzz unrelated\", k=2))\n    print(\"with min_score=1:\", filt.retrieve(\"zzz unrelated\", k=2, min_score=1))\n\n    section(\"7. Genuinely checking: memory across two kickoffs\")\n    for use in (False, True):\n        mem = Memory(use_stopwords=True)\n        crew = MemoryCrew(mem, use_memory=use)\n        crew.kickoff(\"agent engineering\")\n        context, hits = crew.kickoff(\"agent engineering\")\n        print(f\"use_memory={use}: second-run context has prior knowledge = {'PRIOR' in context}; long-term items = {len(mem.long_term)}\")\n    mem = Memory(use_stopwords=True)\n    mem.remember_long(\"pricing: the plan costs 10 dollars\")\n    mem.remember_long(\"pricing: the plan now costs 20 dollars\")\n    print(\"two contradicting facts both come back:\", [x for _, x in mem.retrieve(\"pricing plan costs\", k=2)])\n    print(\"retrieval returns what matches, not what is currently true\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. The @tool decorator turns a function into a described object ---\n'search': description='Search a deterministic local knowledge base.'\n'calculator': description=\"Add two integers written like '2 + 3'.\"\n'word_count': description=''\nsearch(agent engineering) -> Memory, tools and flows.\ncalculator('2 + 3') -> 5\n\n--- 2. Genuinely checking: a tool with no docstring has nothing for a model to read ---\nrequest 'search the knowledge base for crew'       -> picked 'search'; scores {'search': 2, 'calculator': 0, 'word_count': 0}\nrequest 'add two integers'                         -> picked 'calculator'; scores {'search': 0, 'calculator': 3, 'word_count': 0}\nrequest 'count the words in this text'             -> picked 'word_count'; scores {'search': 0, 'calculator': 0, 'word_count': 0}\nthe word-count request scores 0 for every tool, so 'word_count' was chosen only by the sort tie-break, not by evidence\nan empty description can never earn a positive score, so a description-driven chooser cannot select it on merit\n\n--- 3. Tool access is per agent ---\nresearcher uses search: A container of agents and tasks.\nPermissionError: Researcher has no tool 'calculator'; it has ['search']\nTypeError: search() got an unexpected keyword argument 'wrong_argument'\ntool body error surfaces as: ValueError - not enough values to unpack (expected 2, got 1)\n\n--- 4. Genuinely checking: structured output rejects what expected_output would accept ---\ngood -> ResearchResult(topic='agents', findings=('a', 'b', 'c'))\ntwo findings   -> ValueError: expected exactly 3 findings, got 2\nprose          -> ValueError: expected exactly 3 findings, got 0\nfour findings  -> ValueError: expected exactly 3 findings, got 4\nthe typed result is frozen: FrozenInstanceError\nnote: 3 findings of nonsense still pass; a typed shape checks structure, not truth\nnonsense passes: ('?', '?', '?')\n\n--- 5. Layers of memory ---\nshort: ['user asked about CrewAI'] | entities: {'CrewAI': ['a framework for role-based agents']}\nretrieve('what is a Process'): [(2, 'Process decides the execution strategy of a crew'), (1, 'Flows give deterministic control of a pipeline')]\n\n--- 6. Genuinely checking: word-overlap retrieval and its failure modes ---\nquery: what is the plan for the launch\nraw words        : [(3, 'the deadline for the release is Friday')]\nstop-words dropped: [(0, 'the team decided to ship on Friday')]\nparaphrase 'when do we release' -> [(1, 'the deadline for the release is Friday'), (0, 'the team decided to ship on Friday')]\nzero-overlap top-k still returns items unless min_score is set: [(0, 'the team decided to ship on Friday'), (0, 'the deadline for the release is Friday')]\nwith min_score=1: []\n\n--- 7. Genuinely checking: memory across two kickoffs ---\nuse_memory=False: second-run context has prior knowledge = False; long-term items = 2\nuse_memory=True: second-run context has prior knowledge = True; long-term items = 2\ntwo contradicting facts both come back: ['pricing: the plan costs 10 dollars', 'pricing: the plan now costs 20 dollars']\nretrieval returns what matches, not what is currently true"
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
    "headingEn": "Genuinely Found: A Tool Is Only as Selectable as Its Docstring",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Tool ತನ್ನ Docstring ಎಷ್ಟೋ ಅಷ್ಟೇ ಆಯ್ಕೆಯಾಗುತ್ತದೆ",
    "bodyEn": "word_count has no docstring, so its description is an empty string. For \"search the knowledge base for crew\" the chooser scored search 2 and the others 0; for \"add two integers\" it scored calculator 3. For \"count the words in this text\" every tool scored 0, so word_count was picked only by the sort tie-break, not by evidence. An empty description can never earn a positive score, so a description-driven chooser (or a model) cannot select that tool on merit. Section 3 also showed that a ToolAgent raised PermissionError for a tool it was not given, TypeError for wrong arguments, and the tool body's own ValueError when the input was malformed.",
    "bodyKn": "word_count ಗೆ docstring ಇಲ್ಲ, ಆದ್ದರಿಂದ ಅದರ ವಿವರಣೆ ಖಾಲಿ ಸರಣಿ. \"search the knowledge base for crew\" ಗೆ ಆಯ್ಕೆಗಾರ search ಗೆ 2 ಮತ್ತು ಉಳಿದವಕ್ಕೆ 0 ನೀಡಿತು; \"add two integers\" ಗೆ calculator ಗೆ 3. \"count the words in this text\" ಗೆ ಪ್ರತಿ tool 0 ಪಡೆಯಿತು, ಆದ್ದರಿಂದ word_count ಅನ್ನು ಸಾಕ್ಷ್ಯದಿಂದಲ್ಲ, ವಿಂಗಡಣೆ tie-break ನಿಂದ ಮಾತ್ರ ಆರಿಸಲಾಯಿತು. ಖಾಲಿ ವಿವರಣೆ ಎಂದೂ ಧನಾತ್ಮಕ ಅಂಕ ಗಳಿಸಲಾರದು, ಆದ್ದರಿಂದ ವಿವರಣೆ-ಚಾಲಿತ ಆಯ್ಕೆಗಾರ (ಅಥವಾ ಮಾದರಿ) ಆ tool ಅನ್ನು ಅರ್ಹತೆಯಿಂದ ಆರಿಸಲಾರದು. ವಿಭಾಗ 3 ಕೂಡ ತೋರಿಸಿತು: ನೀಡದ tool ಗೆ ToolAgent PermissionError, ತಪ್ಪು ಆರ್ಗ್ಯುಮೆಂಟ್‌ಗೆ TypeError, ಮತ್ತು ಇನ್‌ಪುಟ್ ವಿರೂಪವಾದಾಗ tool ದೇಹದ ಸ್ವಂತ ValueError ಎತ್ತಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Typed Result Checks Shape, Not Truth",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Typed ಫಲಿತಾಂಶ ರೂಪ ಪರಿಶೀಲಿಸುತ್ತದೆ, ಸತ್ಯವಲ್ಲ",
    "bodyEn": "ResearchResult rejected two findings, four findings and free prose with \"expected exactly 3 findings, got N\", and a valid result was frozen. This is what Part 1's expected_output could not do. But section 4 also parsed \"Finding 1: ?\" three times and accepted it: (\"?\", \"?\", \"?\"). A type guarantees structure so downstream code can rely on it; it says nothing about whether the content is correct. Content checks need their own tests.",
    "bodyKn": "ResearchResult ಎರಡು ಕಂಡುಹಿಡಿತ, ನಾಲ್ಕು ಕಂಡುಹಿಡಿತ ಮತ್ತು ಸ್ವತಂತ್ರ ಗದ್ಯವನ್ನು \"expected exactly 3 findings, got N\" ಎಂದು ತಿರಸ್ಕರಿಸಿತು, ಮತ್ತು ಮಾನ್ಯ ಫಲಿತಾಂಶ ಫ್ರೋಜನ್ ಆಗಿತ್ತು. ಭಾಗ 1 ರ expected_output ಮಾಡಲಾಗದ್ದು ಇದು. ಆದರೆ ವಿಭಾಗ 4 \"Finding 1: ?\" ಮೂರು ಬಾರಿ ಪಾರ್ಸ್ ಮಾಡಿ ಸ್ವೀಕರಿಸಿತು: (\"?\", \"?\", \"?\"). Type ರಚನೆ ಖಾತರಿಪಡಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಮುಂದಿನ ಕೋಡ್ ಅದರ ಮೇಲೆ ಅವಲಂಬಿಸಬಹುದು; ವಿಷಯ ಸರಿಯೇ ಎಂದು ಅದು ಹೇಳುವುದಿಲ್ಲ. ವಿಷಯ ಪರಿಶೀಲನೆಗೆ ತಮ್ಮದೇ ಪರೀಕ್ಷೆಗಳು ಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Word-Overlap Retrieval: Stop Words, Paraphrase, Zero Matches and Stale Facts",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪದ-ಅತಿಕ್ರಮಣ ಹುಡುಕಾಟ: Stop words, ಪರ್ಯಾಯ ಪದ, ಶೂನ್ಯ ಹೊಂದಾಣಿಕೆ ಮತ್ತು ಹಳೆಯ ಸಂಗತಿಗಳು",
    "bodyEn": "For \"what is the plan for the launch\" the raw-word retriever returned \"the deadline for the release is Friday\" with score 3, but all three matching words were the, for and is; no content word matched. With stop words removed the best score was an honest 0. The paraphrase \"when do we release\" found the release memory only through the shared word \"release\", with score 1. Top-k with no minimum score returns zero-overlap memories for an unrelated query; min_score=1 returned an empty list. Section 7: with memory off the second kickoff had no prior knowledge, with it on the second kickoff carried PRIOR context. Two contradicting facts, \"costs 10 dollars\" and \"now costs 20 dollars\", both came back: retrieval returns what matches, not what is currently true.",
    "bodyKn": "\"what is the plan for the launch\" ಗೆ ಕಚ್ಚಾ-ಪದ ಹುಡುಕಾಟ \"the deadline for the release is Friday\" ಅನ್ನು ಅಂಕ 3 ರೊಂದಿಗೆ ನೀಡಿತು, ಆದರೆ ಮೂರೂ ಹೊಂದಿದ ಪದಗಳು the, for ಮತ್ತು is; ಯಾವ ವಿಷಯ ಪದವೂ ಹೊಂದಿರಲಿಲ್ಲ. Stop words ತೆಗೆದಾಗ ಉತ್ತಮ ಅಂಕ ಪ್ರಾಮಾಣಿಕ 0. \"when do we release\" ಪರ್ಯಾಯ ವಾಕ್ಯ ಹಂಚಿದ \"release\" ಪದದಿಂದ ಮಾತ್ರ, ಅಂಕ 1, ಆ memory ಕಂಡುಹಿಡಿಯಿತು. ಕನಿಷ್ಠ ಅಂಕವಿಲ್ಲದ top-k ಸಂಬಂಧವಿಲ್ಲದ ಪ್ರಶ್ನೆಗೆ ಶೂನ್ಯ-ಅತಿಕ್ರಮಣ memories ನೀಡುತ್ತದೆ; min_score=1 ಖಾಲಿ ಪಟ್ಟಿ ನೀಡಿತು. ವಿಭಾಗ 7: memory ಆಫ್ ಇದ್ದಾಗ ಎರಡನೇ kickoff ಗೆ ಹಿಂದಿನ ಜ್ಞಾನ ಇರಲಿಲ್ಲ, ಆನ್ ಇದ್ದಾಗ ಎರಡನೇ kickoff PRIOR context ಹೊತ್ತಿತ್ತು. \"costs 10 dollars\" ಮತ್ತು \"now costs 20 dollars\" ಎಂಬ ಎರಡು ವಿರೋಧಿ ಸಂಗತಿಗಳು ಎರಡೂ ಮರಳಿದವು: ಹುಡುಕಾಟ ಹೊಂದುವುದನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಈಗ ಸತ್ಯವಾದದ್ದನ್ನಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Tools let agents act, typed results make handoffs safe to build on, and memory lets a team improve across runs. Each also adds a way to go wrong that a plain prompt does not have.",
    "bodyKn": "Tools agents ಗೆ ಕ್ರಿಯೆ ಮಾಡಲು ಬಿಡುತ್ತವೆ, typed ಫಲಿತಾಂಶಗಳು ಹಸ್ತಾಂತರಗಳನ್ನು ಅವಲಂಬಿಸಲು ಸುರಕ್ಷಿತಗೊಳಿಸುತ್ತವೆ, ಮತ್ತು memory ತಂಡ ಓಟಗಳಾದ್ಯಂತ ಸುಧಾರಿಸಲು ಬಿಡುತ್ತದೆ. ಪ್ರತಿಯೊಂದೂ ಸಾಮಾನ್ಯ ಪ್ರಾಂಪ್ಟ್‌ಗೆ ಇಲ್ಲದ ತಪ್ಪಾಗುವ ಮಾರ್ಗವನ್ನೂ ಸೇರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"memory means the agent knows what is true now.\" Memory stores and retrieves text; it has no notion of which of two contradictory facts is current.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"memory ಎಂದರೆ agent ಗೆ ಈಗ ಸತ್ಯವಾದದ್ದು ತಿಳಿದಿದೆ.\" Memory ಪಠ್ಯ ಸಂಗ್ರಹಿಸಿ ಹುಡುಕುತ್ತದೆ; ಎರಡು ವಿರೋಧಿ ಸಂಗತಿಗಳಲ್ಲಿ ಯಾವುದು ಪ್ರಸ್ತುತ ಎಂಬ ಕಲ್ಪನೆ ಅದಕ್ಕಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Tool: named function plus description. Docstring: the description a model reads. Typed result: a frozen self-validating dataclass. Short-term, long-term, entity memory: run, cross-run and per-entity layers. Contextual retrieval: choosing relevant memories for a query. min_score: a floor that prevents irrelevant matches.",
    "bodyKn": "Tool: ಹೆಸರಿಸಿದ ಕಾರ್ಯ ಜೊತೆ ವಿವರಣೆ. Docstring: ಮಾದರಿ ಓದುವ ವಿವರಣೆ. Typed ಫಲಿತಾಂಶ: ಫ್ರೋಜನ್ ಸ್ವಯಂ-ಮಾನ್ಯ dataclass. ಅಲ್ಪಾವಧಿ, ದೀರ್ಘಾವಧಿ, entity memory: ಓಟ, ಓಟಗಳಾದ್ಯಂತ ಮತ್ತು ಪ್ರತಿ-ವಸ್ತು ಪದರಗಳು. Contextual retrieval: ಪ್ರಶ್ನೆಗೆ ಸಂಬಂಧಿತ memories ಆರಿಸುವುದು. min_score: ಅಸಂಬದ್ಧ ಹೊಂದಾಣಿಕೆ ತಡೆಯುವ ಕನಿಷ್ಠ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The docstring is the tool interface. 2) With no description, a tool cannot be chosen on merit. 3) Tool access is per agent. 4) A typed result rejected 2, 4 and prose; it still accepted \"?\" three times. 5) Raw-word retrieval matched on \"the\", \"for\" and \"is\". 6) Set min_score or irrelevant memories come back. 7) Memory returns contradictory facts together.",
    "bodyKn": "1) Docstring tool ಇಂಟರ್ಫೇಸ್. 2) ವಿವರಣೆ ಇಲ್ಲದಿದ್ದರೆ tool ಅನ್ನು ಅರ್ಹತೆಯಿಂದ ಆರಿಸಲಾಗದು. 3) Tool ಪ್ರವೇಶ ಪ್ರತಿ agent ಗೆ. 4) Typed ಫಲಿತಾಂಶ 2, 4 ಮತ್ತು ಗದ್ಯ ತಿರಸ್ಕರಿಸಿತು; \"?\" ಮೂರು ಬಾರಿ ಇನ್ನೂ ಸ್ವೀಕರಿಸಿತು. 5) ಕಚ್ಚಾ-ಪದ ಹುಡುಕಾಟ \"the\", \"for\", \"is\" ಮೇಲೆ ಹೊಂದಿತು. 6) min_score ಹೊಂದಿಸಿ, ಇಲ್ಲದಿದ್ದರೆ ಅಸಂಬದ್ಧ memories ಬರುತ್ತವೆ. 7) Memory ವಿರೋಧಿ ಸಂಗತಿಗಳನ್ನು ಒಟ್ಟಿಗೆ ನೀಡುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did the chooser score for \"count the words in this text\"?",
      "qKn": "\"count the words in this text\" ಗೆ ಆಯ್ಕೆಗಾರ ಏನು ಅಂಕ ನೀಡಿತು?",
      "opts": [
       "word_count 5",
       "0 for every tool, so the pick was only a tie-break",
       "search 2",
       "calculator 3"
      ],
      "optsKn": [
       "word_count 5",
       "ಪ್ರತಿ tool ಗೂ 0, ಆದ್ದರಿಂದ ಆಯ್ಕೆ ಕೇವಲ tie-break",
       "search 2",
       "calculator 3"
      ],
      "correct": 1
     },
     {
      "q": "What did ToolAgent raise for a tool it was not given?",
      "qKn": "ನೀಡದ tool ಗೆ ToolAgent ಏನು ಎತ್ತಿತು?",
      "opts": [
       "TypeError",
       "PermissionError",
       "KeyError in the tool",
       "Nothing"
      ],
      "optsKn": [
       "TypeError",
       "PermissionError",
       "tool ನಲ್ಲಿ KeyError",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "What can a typed ResearchResult NOT guarantee?",
      "qKn": "Typed ResearchResult ಏನನ್ನು ಖಾತರಿಪಡಿಸಲಾರದು?",
      "opts": [
       "Exactly three findings",
       "That the findings are true; \"?\" three times was accepted",
       "That it is frozen",
       "That the topic is non-empty"
      ],
      "optsKn": [
       "ನಿಖರವಾಗಿ ಮೂರು ಕಂಡುಹಿಡಿತ",
       "ಕಂಡುಹಿಡಿತಗಳು ಸತ್ಯ ಎಂದು; \"?\" ಮೂರು ಬಾರಿ ಸ್ವೀಕರಿಸಲಾಯಿತು",
       "ಅದು ಫ್ರೋಜನ್ ಎಂದು",
       "topic ಖಾಲಿ ಅಲ್ಲ ಎಂದು"
      ],
      "correct": 1
     },
     {
      "q": "Why did raw-word retrieval return a wrong memory with score 3?",
      "qKn": "ಕಚ್ಚಾ-ಪದ ಹುಡುಕಾಟ ಅಂಕ 3 ರೊಂದಿಗೆ ತಪ್ಪು memory ಏಕೆ ನೀಡಿತು?",
      "opts": [
       "It understood the query",
       "The matches were stop words (the, for, is)",
       "The memory was newest",
       "min_score was 3"
      ],
      "optsKn": [
       "ಅದು ಪ್ರಶ್ನೆ ಅರ್ಥಮಾಡಿಕೊಂಡಿತು",
       "ಹೊಂದಾಣಿಕೆಗಳು stop words (the, for, is)",
       "ಆ memory ಹೊಸದು",
       "min_score 3 ಆಗಿತ್ತು"
      ],
      "correct": 1
     },
     {
      "q": "Two contradictory pricing facts were stored. What did retrieval return?",
      "qKn": "ಎರಡು ವಿರೋಧಿ ಬೆಲೆ ಸಂಗತಿಗಳು ಸಂಗ್ರಹವಾಗಿದ್ದವು. ಹುಡುಕಾಟ ಏನು ನೀಡಿತು?",
      "opts": [
       "Only the newest",
       "Both: it returns what matches, not what is current",
       "Neither",
       "An error"
      ],
      "optsKn": [
       "ಹೊಸದು ಮಾತ್ರ",
       "ಎರಡೂ: ಹೊಂದುವುದನ್ನು ನೀಡುತ್ತದೆ, ಪ್ರಸ್ತುತವಾದದ್ದನ್ನಲ್ಲ",
       "ಯಾವುದೂ ಅಲ್ಲ",
       "ದೋಷ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
