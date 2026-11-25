module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215e0",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "The Multi-Agent Primitive Model (Part 1 of 3) — Agent, Handoff, State",
 "titleKn": "ಬಹು-ಏಜೆಂಟ್ ಪ್ರಿಮಿಟಿವ್ ಮಾದರಿ (ಭಾಗ 1 / 3) — ಏಜೆಂಟ್, Handoff, ಸ್ಥಿತಿ",
 "desc": "Build the four primitives in plain Python and test how each one goes wrong.",
 "descKn": "ನಾಲ್ಕು ಪ್ರಿಮಿಟಿವ್‌ಗಳನ್ನು ಸಾದಾ Python ನಲ್ಲಿ ನಿರ್ಮಿಸಿ ಮತ್ತು ಪ್ರತಿಯೊಂದು ಹೇಗೆ ತಪ್ಪುತ್ತದೆ ಎಂದು ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Define an agent.",
  "Validate a handoff.",
  "Isolate shared state.",
  "Avoid a lost update.",
  "Project state by role."
 ],
 "objectivesKn": [
  "ಏಜೆಂಟ್ ಅನ್ನು ವ್ಯಾಖ್ಯಾನಿಸಿ.",
  "handoff ಪರಿಶೀಲಿಸಿ.",
  "ಹಂಚಿಕೆಯ ಸ್ಥಿತಿಯನ್ನು ಪ್ರತ್ಯೇಕಿಸಿ.",
  "ಕಳೆದ ನವೀಕರಣ ತಪ್ಪಿಸಿ.",
  "ಪಾತ್ರದ ಪ್ರಕಾರ ಸ್ಥಿತಿ ಪ್ರಕ್ಷೇಪಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "The Multi-Agent Primitive Model (Part 1 of 3)",
    "textKn": "ಬಹು-ಏಜೆಂಟ್ ಪ್ರಿಮಿಟಿವ್ ಮಾದರಿ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a frozen agent, a static pipeline, handoffs checked against allowed transitions, separate pools, a lost update against a locked update and a projected view per role. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the four primitives of a multi-agent system (agent, handoff, shared state and orchestrator), three orchestrators, validated handoffs, durable state with version checks, a budget and a completion gate, not the real software, and the agents are scripted functions, the selector is a fixed rule and not a model, the state lives in one process or one local SQLite file and no framework is run, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The framework mapping table in the lesson (Swarm, AutoGen, CrewAI, LangGraph and others) is conceptual and was not run. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಫ್ರೀಜ್ ಮಾಡಿದ ಏಜೆಂಟ್, ಸ್ಥಿರ pipeline, ಅನುಮತಿತ ಪರಿವರ್ತನೆಗಳ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿದ handoff ಗಳು, ಪ್ರತ್ಯೇಕ pool ಗಳು, ಲಾಕ್ ಇರುವ ನವೀಕರಣ ವಿರುದ್ಧ ಕಳೆದ ನವೀಕರಣ ಮತ್ತು ಪ್ರತಿ ಪಾತ್ರಕ್ಕೆ ಪ್ರಕ್ಷೇಪಿತ ನೋಟ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಬಹು-ಏಜೆಂಟ್ ವ್ಯವಸ್ಥೆಯ ನಾಲ್ಕು ಪ್ರಿಮಿಟಿವ್‌ಗಳು (ಏಜೆಂಟ್, handoff, ಹಂಚಿಕೆಯ ಸ್ಥಿತಿ ಮತ್ತು orchestrator), ಮೂರು orchestrator ಗಳು, ಪರಿಶೀಲಿತ handoff ಗಳು, ಆವೃತ್ತಿ ಪರಿಶೀಲನೆಯೊಂದಿಗೆ ಬಾಳಿಕೆ ಬರುವ ಸ್ಥಿತಿ, ಬಜೆಟ್ ಮತ್ತು ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ದ್ವಾರ ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಏಜೆಂಟ್‌ಗಳು ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಕಾರ್ಯಗಳು, selector ಮಾದರಿಯಲ್ಲ ನಿಶ್ಚಿತ ನಿಯಮ, ಸ್ಥಿತಿ ಒಂದು ಪ್ರಕ್ರಿಯೆ ಅಥವಾ ಒಂದು ಸ್ಥಳೀಯ SQLite ಫೈಲ್‌ನಲ್ಲಿದೆ ಮತ್ತು ಯಾವುದೇ framework ಓಡಿಸಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ನೀಡಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. lesson ನ framework ಮ್ಯಾಪಿಂಗ್ ಕೋಷ್ಟಕ (Swarm, AutoGen, CrewAI, LangGraph ಮತ್ತಿತರ) ಪರಿಕಲ್ಪನಾತ್ಮಕ ಮತ್ತು ಓಡಿಸಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Ask Four Questions Before Choosing a Framework",
    "textKn": "framework ಆರಿಸುವ ಮೊದಲು ನಾಲ್ಕು ಪ್ರಶ್ನೆ ಕೇಳಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Agent, Handoff, Shared State and Orchestrator",
    "headingKn": "ಏಜೆಂಟ್, Handoff, ಹಂಚಿಕೆಯ ಸ್ಥಿತಿ ಮತ್ತು Orchestrator",
    "bodyEn": "The lesson claims that most multi-agent frameworks answer the same four questions: which unit does the work, how control moves from one unit to the next, where information lives between executions and which component picks what runs next. This part builds each primitive in plain Python. It shows an agent as a fixed description plus a function with no memory, a handoff as a proposal that code is free to refuse, shared state that must not leak between runs and must not lose updates, and a projected view that gives each role only what it needs.",
    "bodyKn": "ಹೆಚ್ಚಿನ ಬಹು-ಏಜೆಂಟ್ framework ಗಳು ಅದೇ ನಾಲ್ಕು ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುತ್ತವೆ ಎಂದು lesson ಹೇಳುತ್ತದೆ: ಯಾವ ಘಟಕ ಕೆಲಸ ಮಾಡುತ್ತದೆ, ನಿಯಂತ್ರಣ ಒಂದು ಘಟಕದಿಂದ ಮುಂದಿನದಕ್ಕೆ ಹೇಗೆ ಚಲಿಸುತ್ತದೆ, ಕಾರ್ಯಗತಗೊಳಿಸುವಿಕೆಗಳ ನಡುವೆ ಮಾಹಿತಿ ಎಲ್ಲಿ ಇರುತ್ತದೆ ಮತ್ತು ಮುಂದೆ ಏನು ಓಡಬೇಕೆಂದು ಯಾವ ಘಟಕ ಆರಿಸುತ್ತದೆ. ಈ ಭಾಗವು ಪ್ರತಿ ಪ್ರಿಮಿಟಿವ್ ಅನ್ನು ಸಾದಾ Python ನಲ್ಲಿ ನಿರ್ಮಿಸುತ್ತದೆ. ಅದು ಏಜೆಂಟ್ ಅನ್ನು ನಿಶ್ಚಿತ ವಿವರಣೆ ಮತ್ತು ನೆನಪಿಲ್ಲದ ಕಾರ್ಯವಾಗಿ, handoff ಅನ್ನು ಕೋಡ್ ನಿರಾಕರಿಸಲು ಸ್ವತಂತ್ರವಾದ ಪ್ರಸ್ತಾವನೆಯಾಗಿ, ಓಟಗಳ ನಡುವೆ ಸೋರಬಾರದ ಮತ್ತು ನವೀಕರಣ ಕಳೆದುಕೊಳ್ಳಬಾರದ ಹಂಚಿಕೆಯ ಸ್ಥಿತಿಯಾಗಿ, ಮತ್ತು ಪ್ರತಿ ಪಾತ್ರಕ್ಕೆ ಅದಕ್ಕೆ ಬೇಕಾದದ್ದನ್ನು ಮಾತ್ರ ನೀಡುವ ಪ್ರಕ್ಷೇಪಿತ ನೋಟವಾಗಿ ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Four Primitives",
    "headingKn": "ನಾಲ್ಕು ಪ್ರಿಮಿಟಿವ್‌ಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">four questions describe any multi-agent system</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">agent</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">who works</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">handoff</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">who goes next</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">shared state</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">what is remembered</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">orchestrator</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">who decides</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">four questions describe any multi-agent system</text></svg>",
    "captionEn": "Who works, who is next, what persists and who decides.",
    "captionKn": "ಯಾರು ಕೆಲಸ ಮಾಡುತ್ತಾರೆ, ಮುಂದೆ ಯಾರು, ಏನು ಉಳಿಯುತ್ತದೆ ಮತ್ತು ಯಾರು ನಿರ್ಧರಿಸುತ್ತಾರೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The six experiments",
    "headingKn": "ಆರು ಪ್ರಯೋಗಗಳು",
    "headers": [
     "Experiment",
     "What it checks"
    ],
    "rows": [
     [
      "agent",
      "frozen fields and a policy with no memory"
     ],
     [
      "pipeline",
      "three agents in order over one pool"
     ],
     [
      "handoff",
      "allowed, refused and stop destinations"
     ],
     [
      "isolation",
      "default_factory against a shared mutable default"
     ],
     [
      "lost update",
      "read-read-write-write against a lock"
     ],
     [
      "projection",
      "a reviewer view without the billing secret"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building and Testing the Ideas",
    "textKn": "ಕಲ್ಪನೆಗಳನ್ನು ನಿರ್ಮಿಸಿ ಪರೀಕ್ಷಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pr_1.py",
    "headingEn": "Agent, handoff and state",
    "headingKn": "ಏಜೆಂಟ್, handoff ಮತ್ತು ಸ್ಥಿತಿ",
    "descEn": "Agent is a frozen record with a policy function, Handoff records source, destination, reason and payload, and SharedState keeps messages, artifacts and context behind a lock.",
    "descKn": "Agent ಒಂದು ನೀತಿ ಕಾರ್ಯವಿರುವ ಫ್ರೀಜ್ ದಾಖಲೆ, Handoff ಮೂಲ, ಗಮ್ಯ, ಕಾರಣ ಮತ್ತು payload ದಾಖಲಿಸುತ್ತದೆ, ಮತ್ತು SharedState ಸಂದೇಶಗಳು, artifacts ಹಾಗೂ context ಅನ್ನು ಲಾಕ್ ಹಿಂದೆ ಇಡುತ್ತದೆ.",
    "code": "class Agent:\n    name: str\n    system_prompt: str\n    tools: tuple\n    policy: Callable[[str], str]\n\n\n@dataclass(frozen=True)\nclass Handoff:\n    from_agent: str\n    to_agent: Any\n    reason: str\n    payload: Any = None\n\n\n@dataclass\nclass SharedState:\n    messages: list = field(default_factory=list)\n    artifacts: dict = field(default_factory=dict)\n    context: dict = field(default_factory=dict)\n    _lock: Any = field(default_factory=threading.RLock, repr=False)\n\n    def add_message(self, agent, content):\n        with self._lock:\n            self.messages.append({\"agent\": agent, \"content\": content})"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pr_1.py",
    "headingEn": "Transitions and projection",
    "headingKn": "ಪರಿವರ್ತನೆಗಳು ಮತ್ತು ಪ್ರಕ್ಷೇಪಣೆ",
    "descEn": "validate_handoff checks a requested route against the table of allowed transitions, and project_state returns only the artifacts a role may see.",
    "descKn": "validate_handoff ವಿನಂತಿಸಿದ ಮಾರ್ಗವನ್ನು ಅನುಮತಿತ ಪರಿವರ್ತನೆಗಳ ಕೋಷ್ಟಕದ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸುತ್ತದೆ, ಮತ್ತು project_state ಪಾತ್ರ ನೋಡಬಹುದಾದ artifacts ಮಾತ್ರ ನೀಡುತ್ತದೆ.",
    "code": "ALLOWED = {\"Researcher\": {\"Writer\"}, \"Writer\": {\"Reviewer\"}, \"Reviewer\": set()}\n\n\ndef validate_handoff(h):\n    allowed = ALLOWED.get(h.from_agent)\n    if allowed is None:\n        raise ValueError(\"Unknown source agent: \" + h.from_agent)\n    if h.to_agent is not None and h.to_agent not in allowed:\n        raise PermissionError(f\"Unauthorized handoff: {h.from_agent} -> {h.to_agent}\")\n    return True\n\n\ndef project_state(role, artifacts):\n    allowed = {\"Researcher\": {\"topic\", \"requirements\"}, \"Writer\": {\"topic\", \"research\", \"requirements\"}, \"Reviewer\": {\"draft\", \"research\", \"requirements\"}}.get(role)\n    if allowed is None:\n        raise ValueError(\"Unknown role\")\n    return {k: v for k, v in artifacts.items() if k in allowed}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pr_1.py",
    "headingEn": "The experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the six experiments in order and prints the real result of each.",
    "descKn": "main() ಆರು ಪ್ರಯೋಗಗಳನ್ನು ಕ್ರಮವಾಗಿ ಓಡಿಸಿ ಪ್ರತಿಯೊಂದರ ನಿಜ ಫಲಿತಾಂಶ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    research = Agent(\"Researcher\", \"Research the topic.\", (\"search\",), lambda t: f\"Research: {t}\")\n    write = Agent(\"Writer\", \"Write the report.\", (), lambda t: f\"Draft: {t}\")\n    review = Agent(\"Reviewer\", \"Review the report.\", (), lambda t: f\"Approved: {t}\")\n\n    section(\"1. Genuinely running: an agent is a fixed description plus a function\")\n    try:\n        research.name = \"Other\"\n        verdict = \"reassigned\"\n    except FrozenInstanceError:\n        verdict = \"FrozenInstanceError\"\n    first, second = research.policy(\"topic A\"), research.policy(\"topic A\")\n    print(\"assigning a field:\", verdict, \"| same input twice gives the same output:\", first == second, \"|\", first)\n    print(\"tools listed:\", research.tools, \"| the tools tuple is only a description here, because the scripted policy never reads it or calls any tool\")\n    print(\"the frozen dataclass refuses reassignment and the scripted policy returns the same answer for the same input and remembers nothing between calls, so everything a later step needs has to be handed to it again; frozen does not make a nested mutable value immutable.\")\n\n    section(\"2. Genuinely running: a static pipeline over shared state\")\n    state = SharedState()\n    current = \"Multi-agent primitives\"\n    for agent in (research, write, review):\n        current = agent.policy(current)\n        state.add_message(agent.name, current)\n    print(\"order:\", [m[\"agent\"] for m in state.messages])\n    print(\"last message:\", state.messages[-1][\"content\"])\n    print(\"the orchestrator loop decided the order and passed each output to the next agent, and every agent left a message in the pool; the reviewer says Approved without looking at anything, because its scripted policy only prefixes the text.\")\n\n    section(\"3. Genuinely running: a handoff names who goes next, and code decides if that is allowed\")\n    ok = Handoff(\"Researcher\", \"Writer\", \"Research is ready\")\n    skip = Handoff(\"Researcher\", \"Reviewer\", \"Skip the writer\")\n    stop = Handoff(\"Researcher\", None, \"No report required\")\n    for label, h in ((\"researcher to writer\", ok), (\"researcher to reviewer\", skip), (\"researcher to nobody\", stop)):\n        try:\n            print(label, \"->\", validate_handoff(h))\n        except PermissionError as e:\n            print(label, \"->\", type(e).__name__ + \":\", e)\n    print(\"the normal handoff and the early stop pass and a request to jump straight to the reviewer is refused, so the agent only proposes a transition and the runtime keeps the right to refuse it; None as a destination means stop here, which is different from a failure.\")\n\n    section(\"4. Genuinely running: separate pools for separate runs\")\n    a, b = SharedState(), SharedState()\n    a.add_message(\"Researcher\", \"run A\")\n    bad1, bad2 = BadState(), BadState()\n    bad1.messages.append(\"run A\")\n    print(\"good states:\", len(a.messages), len(b.messages), \"| states built with a shared mutable default:\", len(bad1.messages), len(bad2.messages))\n    print(\"with default_factory the second run starts empty, while a single list reused as a default leaks run A into run B, which would silently ruin a comparison between orchestrators that reuse the same code path.\")\n\n    section(\"5. Genuinely running: a lost update, and the same update under a lock\")\n    context = {\"count\": 0}\n    read_a, read_b = context[\"count\"], context[\"count\"]\n    context[\"count\"] = read_a + 1\n    context[\"count\"] = read_b + 1\n    unsafe = context[\"count\"]\n    locked = {\"count\": 0}\n    lock = threading.Lock()\n\n    def bump():\n        for _ in range(1000):\n            with lock:\n                locked[\"count\"] += 1\n    threads = [threading.Thread(target=bump) for _ in range(4)]\n    [t.start() for t in threads]\n    [t.join() for t in threads]\n    print(\"two readers who both saw 0 and each wrote +1 leave:\", unsafe, \"| four threads of 1000 locked increments leave:\", locked[\"count\"])\n    print(\"the first number is produced by an explicit read, read, write, write order rather than by a race, so it shows what a lost update is and not how often one happens; the lock makes each increment safe inside one process, and it does nothing for separate processes or machines.\")\n\n    section(\"6. Genuinely running: a projected view for each role\")\n    artifacts = {\"topic\": \"agents\", \"research\": \"findings\", \"draft\": \"report\", \"requirements\": \"3 sections\", \"billing_secret\": \"sensitive\"}\n    print(\"reviewer sees:\", sorted(project_state(\"Reviewer\", artifacts)), \"| billing_secret visible:\", \"billing_secret\" in project_state(\"Reviewer\", artifacts))\n    try:\n        project_state(\"Intern\", artifacts)\n    except ValueError as e:\n        print(\"unknown role:\", e)\n    print(\"each role gets only the artifacts it is allowed to see, the secret never appears and an unknown role is refused and not given an empty or full view; this filters a dictionary and is no real access control, so the storage and tools behind it must enforce the same limits.\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: an agent is a fixed description plus a function ---\nassigning a field: FrozenInstanceError | same input twice gives the same output: True | Research: topic A\ntools listed: ('search',) | the tools tuple is only a description here, because the scripted policy never reads it or calls any tool\nthe frozen dataclass refuses reassignment and the scripted policy returns the same answer for the same input and remembers nothing between calls, so everything a later step needs has to be handed to it again; frozen does not make a nested mutable value immutable.\n\n--- 2. Genuinely running: a static pipeline over shared state ---\norder: ['Researcher', 'Writer', 'Reviewer']\nlast message: Approved: Draft: Research: Multi-agent primitives\nthe orchestrator loop decided the order and passed each output to the next agent, and every agent left a message in the pool; the reviewer says Approved without looking at anything, because its scripted policy only prefixes the text.\n\n--- 3. Genuinely running: a handoff names who goes next, and code decides if that is allowed ---\nresearcher to writer -> True\nresearcher to reviewer -> PermissionError: Unauthorized handoff: Researcher -> Reviewer\nresearcher to nobody -> True\nthe normal handoff and the early stop pass and a request to jump straight to the reviewer is refused, so the agent only proposes a transition and the runtime keeps the right to refuse it; None as a destination means stop here, which is different from a failure.\n\n--- 4. Genuinely running: separate pools for separate runs ---\ngood states: 1 0 | states built with a shared mutable default: 1 1\nwith default_factory the second run starts empty, while a single list reused as a default leaks run A into run B, which would silently ruin a comparison between orchestrators that reuse the same code path.\n\n--- 5. Genuinely running: a lost update, and the same update under a lock ---\ntwo readers who both saw 0 and each wrote +1 leave: 1 | four threads of 1000 locked increments leave: 4000\nthe first number is produced by an explicit read, read, write, write order rather than by a race, so it shows what a lost update is and not how often one happens; the lock makes each increment safe inside one process, and it does nothing for separate processes or machines.\n\n--- 6. Genuinely running: a projected view for each role ---\nreviewer sees: ['draft', 'requirements', 'research'] | billing_secret visible: False\nunknown role: Unknown role\neach role gets only the artifacts it is allowed to see, the secret never appears and an unknown role is refused and not given an empty or full view; this filters a dictionary and is no real access control, so the storage and tools behind it must enforce the same limits."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Experiment Walkthrough",
    "textKn": "Experiment ನಡೆದಾಟ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 1: An agent is a fixed description plus a function",
    "headingKn": "ಪ್ರಯೋಗ 1: An agent is a fixed description plus a function",
    "bodyEn": "What it ran: An agent is a fixed description plus a function. What the lab concluded: the frozen dataclass refuses reassignment and the scripted policy returns the same answer for the same input and remembers nothing between calls, so everything a later step needs has to be handed to it again; frozen does not make a nested mutable value immutable.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: An agent is a fixed description plus a function. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the frozen dataclass refuses reassignment and the scripted policy returns the same answer for the same input and remembers nothing between calls, so everything a later step needs has to be handed to it again; frozen does not make a nested mutable value immutable."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: an agent is a fixed description plus a function ---\nassigning a field: FrozenInstanceError | same input twice gives the same output: True | Research: topic A\ntools listed: ('search',) | the tools tuple is only a description here, because the scripted policy never reads it or calls any tool"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: A static pipeline over shared state",
    "headingKn": "ಪ್ರಯೋಗ 2: A static pipeline over shared state",
    "bodyEn": "What it ran: A static pipeline over shared state. What the lab concluded: the orchestrator loop decided the order and passed each output to the next agent, and every agent left a message in the pool; the reviewer says Approved without looking at anything, because its scripted policy only prefixes the text.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A static pipeline over shared state. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the orchestrator loop decided the order and passed each output to the next agent, and every agent left a message in the pool; the reviewer says Approved without looking at anything, because its scripted policy only prefixes the text."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: a static pipeline over shared state ---\norder: ['Researcher', 'Writer', 'Reviewer']\nlast message: Approved: Draft: Research: Multi-agent primitives"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: A handoff names who goes next, and code decides if that is allowed",
    "headingKn": "ಪ್ರಯೋಗ 3: A handoff names who goes next, and code decides if that is allowed",
    "bodyEn": "What it ran: A handoff names who goes next, and code decides if that is allowed. What the lab concluded: the normal handoff and the early stop pass and a request to jump straight to the reviewer is refused, so the agent only proposes a transition and the runtime keeps the right to refuse it; None as a destination means stop here, which is different from a failure.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A handoff names who goes next, and code decides if that is allowed. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the normal handoff and the early stop pass and a request to jump straight to the reviewer is refused, so the agent only proposes a transition and the runtime keeps the right to refuse it; None as a destination means stop here, which is different from a failure."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: a handoff names who goes next, and code decides if that is allowed ---\nresearcher to writer -> True\nresearcher to reviewer -> PermissionError: Unauthorized handoff: Researcher -> Reviewer\nresearcher to nobody -> True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Separate pools for separate runs",
    "headingKn": "ಪ್ರಯೋಗ 4: Separate pools for separate runs",
    "bodyEn": "What it ran: Separate pools for separate runs. What the lab concluded: with default_factory the second run starts empty, while a single list reused as a default leaks run A into run B, which would silently ruin a comparison between orchestrators that reuse the same code path.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Separate pools for separate runs. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): with default_factory the second run starts empty, while a single list reused as a default leaks run A into run B, which would silently ruin a comparison between orchestrators that reuse the same code path."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: separate pools for separate runs ---\ngood states: 1 0 | states built with a shared mutable default: 1 1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A lost update, and the same update under a lock",
    "headingKn": "ಪ್ರಯೋಗ 5: A lost update, and the same update under a lock",
    "bodyEn": "What it ran: A lost update, and the same update under a lock. What the lab concluded: the first number is produced by an explicit read, read, write, write order rather than by a race, so it shows what a lost update is and not how often one happens; the lock makes each increment safe inside one process, and it does nothing for separate processes or machines.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A lost update, and the same update under a lock. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the first number is produced by an explicit read, read, write, write order rather than by a race, so it shows what a lost update is and not how often one happens; the lock makes each increment safe inside one process, and it does nothing for separate processes or machines."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: a lost update, and the same update under a lock ---\ntwo readers who both saw 0 and each wrote +1 leave: 1 | four threads of 1000 locked increments leave: 4000"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: A projected view for each role",
    "headingKn": "ಪ್ರಯೋಗ 6: A projected view for each role",
    "bodyEn": "What it ran: A projected view for each role. What the lab concluded: each role gets only the artifacts it is allowed to see, the secret never appears and an unknown role is refused and not given an empty or full view; this filters a dictionary and is no real access control, so the storage and tools behind it must enforce the same limits.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A projected view for each role. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each role gets only the artifacts it is allowed to see, the secret never appears and an unknown role is refused and not given an empty or full view; this filters a dictionary and is no real access control, so the storage and tools behind it must enforce the same limits."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: a projected view for each role ---\nreviewer sees: ['draft', 'requirements', 'research'] | billing_secret visible: False\nunknown role: Unknown role"
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
    "headingEn": "Genuinely Found: Agent, Pipeline and Handoff",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಏಜೆಂಟ್, Pipeline ಮತ್ತು Handoff",
    "bodyEn": "Section 1: assigning a field raised FrozenInstanceError and the same input twice gave the same output. Section 2: the order was Researcher, Writer, Reviewer and the last message was Approved: Draft: Research: Multi-agent primitives. Section 3: researcher to writer passed, researcher to reviewer raised PermissionError and researcher to nobody passed.",
    "bodyKn": "ವಿಭಾಗ 1: ಕ್ಷೇತ್ರ ಮರುಹೊಂದಿಸಿದಾಗ FrozenInstanceError ಎದ್ದಿತು ಮತ್ತು ಒಂದೇ input ಎರಡು ಬಾರಿ ಒಂದೇ output ನೀಡಿತು. ವಿಭಾಗ 2: ಕ್ರಮ Researcher, Writer, Reviewer ಮತ್ತು ಕೊನೆಯ ಸಂದೇಶ Approved: Draft: Research: Multi-agent primitives. ವಿಭಾಗ 3: researcher ನಿಂದ writer ಗೆ ಪಾಸಾಯಿತು, researcher ನಿಂದ reviewer ಗೆ PermissionError ಎದ್ದಿತು ಮತ್ತು researcher ನಿಂದ ಯಾರಿಗೂ ಇಲ್ಲ ಪಾಸಾಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: State, Updates and Views",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸ್ಥಿತಿ, ನವೀಕರಣಗಳು ಮತ್ತು ನೋಟಗಳು",
    "bodyEn": "Section 4: the good states held 1 and 0 messages, while states built on a shared mutable default held 1 and 1. Section 5: two readers who both saw 0 left the count at 1, and four locked threads of 1000 increments left 4000. Section 6: the reviewer saw draft, requirements and research, billing_secret was not visible and an unknown role was refused.",
    "bodyKn": "ವಿಭಾಗ 4: ಒಳ್ಳೆಯ ಸ್ಥಿತಿಗಳು 1 ಮತ್ತು 0 ಸಂದೇಶಗಳನ್ನು ಹೊಂದಿದ್ದವು, ಆದರೆ ಹಂಚಿಕೆಯ ಬದಲಾಗುವ ಡೀಫಾಲ್ಟ್ ಮೇಲೆ ನಿರ್ಮಿಸಿದ ಸ್ಥಿತಿಗಳು 1 ಮತ್ತು 1 ಹೊಂದಿದ್ದವು. ವಿಭಾಗ 5: 0 ನೋಡಿದ ಇಬ್ಬರು ಓದುಗರು ಎಣಿಕೆಯನ್ನು 1 ರಲ್ಲಿ ಬಿಟ್ಟರು, ಮತ್ತು 1000 ಹೆಚ್ಚಳಗಳ ನಾಲ್ಕು ಲಾಕ್ ಥ್ರೆಡ್‌ಗಳು 4000 ಬಿಟ್ಟವು. ವಿಭಾಗ 6: reviewer draft, requirements ಮತ್ತು research ನೋಡಿದನು, billing_secret ಕಾಣಲಿಲ್ಲ ಮತ್ತು ಅಜ್ಞಾತ ಪಾತ್ರ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "The four primitives turn a pile of framework vocabulary into four questions you can ask of any system, and each one has a specific way of going wrong that is easy to test in a few lines of code.",
    "bodyKn": "ನಾಲ್ಕು ಪ್ರಿಮಿಟಿವ್‌ಗಳು framework ಶಬ್ದಕೋಶದ ರಾಶಿಯನ್ನು ಯಾವುದೇ ವ್ಯವಸ್ಥೆಗೆ ಕೇಳಬಹುದಾದ ನಾಲ್ಕು ಪ್ರಶ್ನೆಗಳಾಗಿ ಪರಿವರ್ತಿಸುತ್ತವೆ, ಮತ್ತು ಪ್ರತಿಯೊಂದಕ್ಕೂ ಕೆಲವು ಸಾಲು ಕೋಡ್‌ನಲ್ಲಿ ಪರೀಕ್ಷಿಸಲು ಸುಲಭವಾದ ನಿರ್ದಿಷ್ಟ ತಪ್ಪುವ ರೀತಿ ಇದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a handoff moves control.\" In the lab it only proposed a move, and the runtime refused the jump to the reviewer.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"handoff ನಿಯಂತ್ರಣ ಚಲಿಸುತ್ತದೆ.\" ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಅದು ಚಲನೆಯನ್ನು ಪ್ರಸ್ತಾಪಿಸಿತು ಮಾತ್ರ, ಮತ್ತು reviewer ಗೆ ಜಿಗಿತವನ್ನು runtime ನಿರಾಕರಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Agent: a fixed description plus a policy. Handoff: a proposal to transfer control. Shared state: messages, artifacts and context across runs. Orchestrator: the code that picks what runs next. Projection: a role-specific view of state.",
    "bodyKn": "ಏಜೆಂಟ್: ನಿಶ್ಚಿತ ವಿವರಣೆ ಮತ್ತು ನೀತಿ. Handoff: ನಿಯಂತ್ರಣ ವರ್ಗಾಯಿಸುವ ಪ್ರಸ್ತಾವನೆ. ಹಂಚಿಕೆಯ ಸ್ಥಿತಿ: ಓಟಗಳಾದ್ಯಂತ ಸಂದೇಶಗಳು, artifacts ಮತ್ತು context. Orchestrator: ಮುಂದೆ ಏನು ಓಡಬೇಕು ಎಂದು ಆರಿಸುವ ಕೋಡ್. ಪ್ರಕ್ಷೇಪಣೆ: ಸ್ಥಿತಿಯ ಪಾತ್ರ-ನಿರ್ದಿಷ್ಟ ನೋಟ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A frozen agent refused reassignment. 2) A handoff to the reviewer was refused by the table. 3) A shared mutable default leaked one run into the next. 4) Two readers of 0 left the count at 1 and a lock gave 4000. 5) The reviewer view never contained the billing secret.",
    "bodyKn": "1) ಫ್ರೀಜ್ ಮಾಡಿದ ಏಜೆಂಟ್ ಮರುಹೊಂದಿಕೆಯನ್ನು ನಿರಾಕರಿಸಿತು. 2) reviewer ಗೆ handoff ಅನ್ನು ಕೋಷ್ಟಕ ನಿರಾಕರಿಸಿತು. 3) ಹಂಚಿಕೆಯ ಬದಲಾಗುವ ಡೀಫಾಲ್ಟ್ ಒಂದು ಓಟವನ್ನು ಮುಂದಿನದಕ್ಕೆ ಸೋರಿಸಿತು. 4) 0 ಓದಿದ ಇಬ್ಬರು ಎಣಿಕೆಯನ್ನು 1 ರಲ್ಲಿ ಬಿಟ್ಟರು ಮತ್ತು ಲಾಕ್ 4000 ನೀಡಿತು. 5) reviewer ನೋಟದಲ್ಲಿ billing secret ಎಂದೂ ಇರಲಿಲ್ಲ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What error did assigning a field of the frozen agent raise?",
      "qKn": "ಫ್ರೀಜ್ ಮಾಡಿದ ಏಜೆಂಟ್‌ನ ಕ್ಷೇತ್ರ ಮರುಹೊಂದಿಸಿದಾಗ ಯಾವ ದೋಷ ಎದ್ದಿತು?",
      "opts": [
       "FrozenInstanceError",
       "KeyError",
       "PermissionError",
       "None"
      ],
      "optsKn": [
       "FrozenInstanceError",
       "KeyError",
       "PermissionError",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What happened to the researcher-to-reviewer handoff?",
      "qKn": "researcher ನಿಂದ reviewer ಗೆ handoff ಗೆ ಏನಾಯಿತು?",
      "opts": [
       "PermissionError, it was refused",
       "It passed",
       "It stopped the run",
       "It was logged only"
      ],
      "optsKn": [
       "PermissionError, ಅದನ್ನು ನಿರಾಕರಿಸಲಾಯಿತು",
       "ಅದು ಪಾಸಾಯಿತು",
       "ಅದು ಓಟ ನಿಲ್ಲಿಸಿತು",
       "ಅದನ್ನು ದಾಖಲಿಸಲಾಯಿತು ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "What count did the two readers of 0 leave?",
      "qKn": "0 ಓದಿದ ಇಬ್ಬರು ಓದುಗರು ಯಾವ ಎಣಿಕೆ ಬಿಟ್ಟರು?",
      "opts": [
       "1",
       "2",
       "0",
       "4000"
      ],
      "optsKn": [
       "1",
       "2",
       "0",
       "4000"
      ],
      "correct": 0
     },
     {
      "q": "How many messages did the second state hold when it used a shared mutable default?",
      "qKn": "ಹಂಚಿಕೆಯ ಬದಲಾಗುವ ಡೀಫಾಲ್ಟ್ ಬಳಸಿದಾಗ ಎರಡನೇ ಸ್ಥಿತಿ ಎಷ್ಟು ಸಂದೇಶಗಳನ್ನು ಹೊಂದಿತ್ತು?",
      "opts": [
       "1",
       "0",
       "2",
       "4"
      ],
      "optsKn": [
       "1",
       "0",
       "2",
       "4"
      ],
      "correct": 0
     },
     {
      "q": "Was billing_secret visible in the reviewer view?",
      "qKn": "reviewer ನೋಟದಲ್ಲಿ billing_secret ಕಾಣಿಸಿತೇ?",
      "opts": [
       "No",
       "Yes",
       "Only the first line",
       "Only to the writer"
      ],
      "optsKn": [
       "ಇಲ್ಲ",
       "ಹೌದು",
       "ಮೊದಲ ಸಾಲು ಮಾತ್ರ",
       "writer ಗೆ ಮಾತ್ರ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
