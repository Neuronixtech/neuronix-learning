module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215e0",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "The Multi-Agent Primitive Model (Part 2 of 3) — Three Orchestrators",
 "titleKn": "ಬಹು-ಏಜೆಂಟ್ ಪ್ರಿಮಿಟಿವ್ ಮಾದರಿ (ಭಾಗ 2 / 3) — ಮೂರು Orchestrator ಗಳು",
 "desc": "Run the same agents under three orchestrators and see which one reads a stop request.",
 "descKn": "ಅದೇ ಏಜೆಂಟ್‌ಗಳನ್ನು ಮೂರು orchestrator ಗಳ ಅಡಿಯಲ್ಲಿ ಓಡಿಸಿ ಯಾವುದು ನಿಲ್ಲಿಸುವ ವಿನಂತಿ ಓದುತ್ತದೆ ನೋಡಿ.",
 "objectives": [
  "Compare three orchestrators.",
  "Honour an early stop.",
  "Guard a handoff loop.",
  "Spot a hollow review.",
  "Copy state safely."
 ],
 "objectivesKn": [
  "ಮೂರು orchestrator ಗಳನ್ನು ಹೋಲಿಸಿ.",
  "ಬೇಗ ನಿಲ್ಲಿಸುವುದನ್ನು ಗೌರವಿಸಿ.",
  "handoff ಲೂಪ್‌ಗೆ ಕಾವಲು ಇಡಿ.",
  "ಟೊಳ್ಳು ವಿಮರ್ಶೆ ಗುರುತಿಸಿ.",
  "ಸ್ಥಿತಿಯನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ನಕಲಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "The Multi-Agent Primitive Model (Part 2 of 3)",
    "textKn": "ಬಹು-ಏಜೆಂಟ್ ಪ್ರಿಮಿಟಿವ್ ಮಾದರಿ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: one set of scripted agents under static, handoff-driven and selector orchestrators, an early-stop request, handoff validation and a step limit, missing inputs, a reviewer that approves a nonsense draft and a copy-safe message pool. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the four primitives of a multi-agent system (agent, handoff, shared state and orchestrator), three orchestrators, validated handoffs, durable state with version checks, a budget and a completion gate, not the real software, and the agents are scripted functions, the selector is a fixed rule and not a model, the state lives in one process or one local SQLite file and no framework is run, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The framework mapping table in the lesson (Swarm, AutoGen, CrewAI, LangGraph and others) is conceptual and was not run. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಸ್ಥಿರ, handoff-ಚಾಲಿತ ಮತ್ತು selector orchestrator ಗಳ ಅಡಿಯಲ್ಲಿ ಒಂದೇ ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಏಜೆಂಟ್‌ಗಳ ಸೆಟ್, ಬೇಗ ನಿಲ್ಲಿಸುವ ವಿನಂತಿ, handoff ಪರಿಶೀಲನೆ ಮತ್ತು ಹಂತ ಮಿತಿ, ಕಾಣೆಯಾದ ಇನ್‌ಪುಟ್‌ಗಳು, ಅರ್ಥಹೀನ ಕರಡನ್ನು ಅನುಮೋದಿಸುವ reviewer ಮತ್ತು ನಕಲು-ಸುರಕ್ಷಿತ ಸಂದೇಶ pool. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಬಹು-ಏಜೆಂಟ್ ವ್ಯವಸ್ಥೆಯ ನಾಲ್ಕು ಪ್ರಿಮಿಟಿವ್‌ಗಳು (ಏಜೆಂಟ್, handoff, ಹಂಚಿಕೆಯ ಸ್ಥಿತಿ ಮತ್ತು orchestrator), ಮೂರು orchestrator ಗಳು, ಪರಿಶೀಲಿತ handoff ಗಳು, ಆವೃತ್ತಿ ಪರಿಶೀಲನೆಯೊಂದಿಗೆ ಬಾಳಿಕೆ ಬರುವ ಸ್ಥಿತಿ, ಬಜೆಟ್ ಮತ್ತು ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ದ್ವಾರ ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಏಜೆಂಟ್‌ಗಳು ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಕಾರ್ಯಗಳು, selector ಮಾದರಿಯಲ್ಲ ನಿಶ್ಚಿತ ನಿಯಮ, ಸ್ಥಿತಿ ಒಂದು ಪ್ರಕ್ರಿಯೆ ಅಥವಾ ಒಂದು ಸ್ಥಳೀಯ SQLite ಫೈಲ್‌ನಲ್ಲಿದೆ ಮತ್ತು ಯಾವುದೇ framework ಓಡಿಸಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ನೀಡಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. lesson ನ framework ಮ್ಯಾಪಿಂಗ್ ಕೋಷ್ಟಕ (Swarm, AutoGen, CrewAI, LangGraph ಮತ್ತಿತರ) ಪರಿಕಲ್ಪನಾತ್ಮಕ ಮತ್ತು ಓಡಿಸಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Same Agents, Different Control",
    "textKn": "ಅದೇ ಏಜೆಂಟ್‌ಗಳು, ಬೇರೆ ನಿಯಂತ್ರಣ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Static, Handoff-Driven and Selector Orchestration",
    "headingKn": "ಸ್ಥಿರ, Handoff-ಚಾಲಿತ ಮತ್ತು Selector Orchestration",
    "bodyEn": "The central claim of the lesson is that the behaviour of a multi-agent system depends on its orchestrator as much as on its agents. This part runs the same researcher, writer and reviewer under three orchestrators. On a normal task they look identical. On a task where the researcher asks to stop, only one of them listens. The lab then tests the guards around the handoff orchestrator, looks at what the agents do when their inputs are missing, and shows that the scripted reviewer approves anything.",
    "bodyKn": "ಬಹು-ಏಜೆಂಟ್ ವ್ಯವಸ್ಥೆಯ ವರ್ತನೆ ಅದರ ಏಜೆಂಟ್‌ಗಳ ಮೇಲೆ ಎಷ್ಟು ಅವಲಂಬಿತವೋ ಅಷ್ಟೇ ಅದರ orchestrator ಮೇಲೂ ಅವಲಂಬಿತ ಎಂಬುದು lesson ನ ಕೇಂದ್ರ ವಾದ. ಈ ಭಾಗವು ಅದೇ researcher, writer ಮತ್ತು reviewer ಅನ್ನು ಮೂರು orchestrator ಗಳ ಅಡಿಯಲ್ಲಿ ಓಡಿಸುತ್ತದೆ. ಸಾಮಾನ್ಯ ಕೆಲಸದಲ್ಲಿ ಅವು ಒಂದೇ ರೀತಿ ಕಾಣುತ್ತವೆ. researcher ನಿಲ್ಲಿಸಲು ಕೇಳುವ ಕೆಲಸದಲ್ಲಿ ಅವುಗಳಲ್ಲಿ ಒಂದು ಮಾತ್ರ ಕೇಳುತ್ತದೆ. ನಂತರ ಲ್ಯಾಬ್ handoff orchestrator ಸುತ್ತಲಿನ ಕಾವಲುಗಳನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ, ಇನ್‌ಪುಟ್‌ಗಳು ಕಾಣೆಯಾದಾಗ ಏಜೆಂಟ್‌ಗಳು ಏನು ಮಾಡುತ್ತವೆ ಎಂದು ನೋಡುತ್ತದೆ, ಮತ್ತು ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ reviewer ಏನನ್ನೂ ಅನುಮೋದಿಸುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Three Orchestrators",
    "headingKn": "ಮೂರು Orchestrator ಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">the orchestrator decides how an agent output is read</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">static</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">fixed order</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">handoff</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">agent proposes</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">selector</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">rule picks</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">same agents</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">different paths</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the orchestrator decides how an agent output is read</text></svg>",
    "captionEn": "The same agents follow different paths depending on who reads their output.",
    "captionKn": "ಅವರ output ಯಾರು ಓದುತ್ತಾರೆ ಎಂಬುದರ ಮೇಲೆ ಅದೇ ಏಜೆಂಟ್‌ಗಳು ಬೇರೆ ಮಾರ್ಗಗಳನ್ನು ಅನುಸರಿಸುತ್ತವೆ."
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
      "normal task",
      "all three orchestrators run the same order"
     ],
     [
      "early stop",
      "who honours a handoff with no destination"
     ],
     [
      "guards",
      "mismatched source, self-handoff loop and bad limit"
     ],
     [
      "missing inputs",
      "writer, reviewer and a nonsense draft"
     ],
     [
      "copies",
      "editing a returned message list"
     ],
     [
      "cost",
      "agent runs on a status-only task"
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
    "filename": "pr_2.py",
    "headingEn": "The agents",
    "headingKn": "ಏಜೆಂಟ್‌ಗಳು",
    "descEn": "research_policy, writer_policy and reviewer_policy are scripted functions that read and write artifacts and may return a handoff.",
    "descKn": "research_policy, writer_policy ಮತ್ತು reviewer_policy artifacts ಓದಿ ಬರೆಯುವ ಮತ್ತು handoff ನೀಡಬಹುದಾದ ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಕಾರ್ಯಗಳು.",
    "code": "def research_policy(task, state):\n    research = f\"findings about {task}\"\n    state.set_artifact(\"research\", research)\n    if task.strip().lower() == \"status only\":\n        return AgentResult(\"Researcher: status reported.\", Handoff(\"Researcher\", None, \"No report required\"))\n    return AgentResult(\"Researcher: research completed.\", Handoff(\"Researcher\", \"Writer\", \"Research is ready\", research))\n\n\ndef writer_policy(task, state):\n    research = state.get_artifact(\"research\")\n    if research is None:\n        return AgentResult(\"Writer: missing research artifact.\")\n    state.set_artifact(\"draft\", f\"Report on {task}. Evidence: {research}\")\n    return AgentResult(\"Writer: draft completed.\", Handoff(\"Writer\", \"Reviewer\", \"Draft ready\"))\n\n\ndef reviewer_policy(task, state):\n    draft = state.get_artifact(\"draft\")\n    if draft is None:\n        return AgentResult(\"Reviewer: missing draft artifact.\")\n    state.set_artifact(\"verdict\", \"APPROVED\")\n    return AgentResult(\"Reviewer: APPROVED.\", None)\n\n\nAGENTS = {\"Researcher\": research_policy, \"Writer\": writer_policy, \"Reviewer\": reviewer_policy}\n\n\ndef execute(name, task, state):\n    result = AGENTS[name](task, state)\n    state.add_message(name, result.message)\n    return result"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pr_2.py",
    "headingEn": "Three orchestrators",
    "headingKn": "ಮೂರು orchestrator ಗಳು",
    "descEn": "StaticOrchestrator runs a fixed list, HandoffOrchestrator follows the handoff with a source check and a step limit, and SelectorOrchestrator picks the first agent not yet completed.",
    "descKn": "StaticOrchestrator ನಿಶ್ಚಿತ ಪಟ್ಟಿ ಓಡಿಸುತ್ತದೆ, HandoffOrchestrator ಮೂಲ ಪರಿಶೀಲನೆ ಮತ್ತು ಹಂತ ಮಿತಿಯೊಂದಿಗೆ handoff ಅನ್ನು ಅನುಸರಿಸುತ್ತದೆ, ಮತ್ತು SelectorOrchestrator ಇನ್ನೂ ಪೂರ್ಣಗೊಳ್ಳದ ಮೊದಲ ಏಜೆಂಟ್ ಆರಿಸುತ್ತದೆ.",
    "code": "class StaticOrchestrator:\n    sequence = [\"Researcher\", \"Writer\", \"Reviewer\"]\n\n    def run(self, task, state):\n        for name in self.sequence:\n            execute(name, task, state)\n\n\nclass HandoffOrchestrator:\n    def __init__(self, max_steps=10):\n        if max_steps < 1:\n            raise ValueError(\"max_steps must be at least 1\")\n        self.max_steps = max_steps\n\n    def run(self, task, state):\n        current, steps = \"Researcher\", 0\n        while current is not None:\n            if steps >= self.max_steps:\n                raise RuntimeError(\"Step limit exceeded\")\n            result = execute(current, task, state)\n            steps += 1\n            if result.handoff is None:\n                return\n            if result.handoff.from_agent != current:\n                raise ValueError(\"Handoff source does not match current agent\")\n            current = result.handoff.to_agent\n\n\nclass SelectorOrchestrator:\n    def select_next(self, completed):\n        for name in (\"Researcher\", \"Writer\", \"Reviewer\"):\n            if name not in completed:\n                return name\n        return None\n\n    def run(self, task, state):\n        completed = set()\n        while (name := self.select_next(completed)) is not None:\n            execute(name, task, state)\n            completed.add(name)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pr_2.py",
    "headingEn": "The experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the six experiments in order and prints the real result of each.",
    "descKn": "main() ಆರು ಪ್ರಯೋಗಗಳನ್ನು ಕ್ರಮವಾಗಿ ಓಡಿಸಿ ಪ್ರತಿಯೊಂದರ ನಿಜ ಫಲಿತಾಂಶ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: a normal task under all three orchestrators\")\n    for orch in (StaticOrchestrator(), HandoffOrchestrator(), SelectorOrchestrator()):\n        st = SharedState()\n        orch.run(\"Multi-agent primitive model\", st)\n        print(f\"{type(orch).__name__}: {[m['agent'] for m in st.get_messages()]}\")\n    print(\"all three orchestrators run the same three agents in the same order on an ordinary task, so the difference between them is invisible until an agent asks for something unusual; each run used a fresh SharedState, which is what makes the comparison valid.\")\n\n    section(\"2. Genuinely running: an agent asks to stop after the first step\")\n    results = {}\n    for orch in (StaticOrchestrator(), HandoffOrchestrator(), SelectorOrchestrator()):\n        st = SharedState()\n        orch.run(\"status only\", st)\n        results[type(orch).__name__] = ([m[\"agent\"] for m in st.get_messages()], st.get_artifact(\"verdict\"))\n    for k, v in results.items():\n        print(f\"{k}: agents run {len(v[0])} {v[0]} | verdict artifact: {v[1]}\")\n    print(\"only the handoff orchestrator honoured the stop request and ran one agent, while the static and selector orchestrators never read the handoff and ran all three, so an agent routing suggestion has no effect unless the orchestrator is built to read it; the same agents gave two different execution paths.\")\n\n    section(\"3. Genuinely running: handoff validation and the step limit\")\n    class LiarOrchestrator(HandoffOrchestrator):\n        pass\n    AGENTS[\"Writer\"] = lambda task, state: AgentResult(\"Writer: done.\", Handoff(\"Reviewer\", \"Reviewer\", \"pretending to be the reviewer\"))\n    try:\n        LiarOrchestrator().run(\"topic\", SharedState())\n    except ValueError as e:\n        print(\"mismatched source:\", e)\n    AGENTS[\"Writer\"] = writer_policy\n    AGENTS[\"Researcher\"] = lambda task, state: AgentResult(\"Researcher: again.\", Handoff(\"Researcher\", \"Researcher\", \"loop\"))\n    try:\n        HandoffOrchestrator(max_steps=4).run(\"topic\", SharedState())\n    except RuntimeError as e:\n        print(\"self-handoff loop:\", e)\n    AGENTS[\"Researcher\"] = research_policy\n    try:\n        HandoffOrchestrator(max_steps=0)\n    except ValueError as e:\n        print(\"bad limit:\", e)\n    print(\"a result whose handoff claims another sender is refused, an agent that hands off to itself forever stops at the step limit and a limit of zero is rejected at construction; the first check only compares names, so it is not authorisation, which needs a table of allowed transitions.\")\n\n    section(\"4. Genuinely running: what the writer and reviewer do without their inputs\")\n    st = SharedState()\n    print(writer_policy(\"topic\", st).message, \"|\", reviewer_policy(\"topic\", st).message)\n    st.set_artifact(\"draft\", \"completely wrong nonsense\")\n    print(\"reviewer on a nonsense draft:\", reviewer_policy(\"topic\", st).message, \"| verdict:\", st.get_artifact(\"verdict\"))\n    print(\"missing inputs are reported as ordinary messages with no handoff, which an orchestrator can mistake for a normal ending, and the reviewer approves a nonsense draft because it only checks that a draft exists; approved here is a scripted word and not a review.\")\n\n    section(\"5. Genuinely running: copies out of the shared pool\")\n    st = SharedState()\n    st.add_message(\"Researcher\", \"original\")\n    got = st.get_messages()\n    got[0][\"content\"] = \"edited\"\n    got.clear()\n    print(\"stored after editing and clearing the copy:\", st.get_messages())\n    print(\"changing or clearing the list returned by get_messages left the pool intact, because each message dictionary is copied; the copy is shallow, so a message holding a nested list or dictionary would still be shared.\")\n\n    section(\"6. Genuinely counting: what each orchestrator costs when an agent stops early\")\n    counts = {}\n    for orch in (StaticOrchestrator(), HandoffOrchestrator(), SelectorOrchestrator()):\n        st = SharedState()\n        orch.run(\"status only\", st)\n        counts[type(orch).__name__] = len(st.get_messages())\n    print(\"agent runs on a status-only task:\", counts)\n    print(\"the handoff orchestrator spent one agent run where the other two spent three, so honouring an early stop saves two thirds of the agent calls in this task; a model-based selector would also add a routing call per step, which this scripted selector does not model.\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a normal task under all three orchestrators ---\nStaticOrchestrator: ['Researcher', 'Writer', 'Reviewer']\nHandoffOrchestrator: ['Researcher', 'Writer', 'Reviewer']\nSelectorOrchestrator: ['Researcher', 'Writer', 'Reviewer']\nall three orchestrators run the same three agents in the same order on an ordinary task, so the difference between them is invisible until an agent asks for something unusual; each run used a fresh SharedState, which is what makes the comparison valid.\n\n--- 2. Genuinely running: an agent asks to stop after the first step ---\nStaticOrchestrator: agents run 3 ['Researcher', 'Writer', 'Reviewer'] | verdict artifact: APPROVED\nHandoffOrchestrator: agents run 1 ['Researcher'] | verdict artifact: None\nSelectorOrchestrator: agents run 3 ['Researcher', 'Writer', 'Reviewer'] | verdict artifact: APPROVED\nonly the handoff orchestrator honoured the stop request and ran one agent, while the static and selector orchestrators never read the handoff and ran all three, so an agent routing suggestion has no effect unless the orchestrator is built to read it; the same agents gave two different execution paths.\n\n--- 3. Genuinely running: handoff validation and the step limit ---\nmismatched source: Handoff source does not match current agent\nself-handoff loop: Step limit exceeded\nbad limit: max_steps must be at least 1\na result whose handoff claims another sender is refused, an agent that hands off to itself forever stops at the step limit and a limit of zero is rejected at construction; the first check only compares names, so it is not authorisation, which needs a table of allowed transitions.\n\n--- 4. Genuinely running: what the writer and reviewer do without their inputs ---\nWriter: missing research artifact. | Reviewer: missing draft artifact.\nreviewer on a nonsense draft: Reviewer: APPROVED. | verdict: APPROVED\nmissing inputs are reported as ordinary messages with no handoff, which an orchestrator can mistake for a normal ending, and the reviewer approves a nonsense draft because it only checks that a draft exists; approved here is a scripted word and not a review.\n\n--- 5. Genuinely running: copies out of the shared pool ---\nstored after editing and clearing the copy: [{'agent': 'Researcher', 'content': 'original'}]\nchanging or clearing the list returned by get_messages left the pool intact, because each message dictionary is copied; the copy is shallow, so a message holding a nested list or dictionary would still be shared.\n\n--- 6. Genuinely counting: what each orchestrator costs when an agent stops early ---\nagent runs on a status-only task: {'StaticOrchestrator': 3, 'HandoffOrchestrator': 1, 'SelectorOrchestrator': 3}\nthe handoff orchestrator spent one agent run where the other two spent three, so honouring an early stop saves two thirds of the agent calls in this task; a model-based selector would also add a routing call per step, which this scripted selector does not model."
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
    "headingEn": "Experiment 1: A normal task under all three orchestrators",
    "headingKn": "ಪ್ರಯೋಗ 1: A normal task under all three orchestrators",
    "bodyEn": "What it ran: A normal task under all three orchestrators. What the lab concluded: all three orchestrators run the same three agents in the same order on an ordinary task, so the difference between them is invisible until an agent asks for something unusual; each run used a fresh SharedState, which is what makes the comparison valid.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A normal task under all three orchestrators. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): all three orchestrators run the same three agents in the same order on an ordinary task, so the difference between them is invisible until an agent asks for something unusual; each run used a fresh SharedState, which is what makes the comparison valid."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: a normal task under all three orchestrators ---\nStaticOrchestrator: ['Researcher', 'Writer', 'Reviewer']\nHandoffOrchestrator: ['Researcher', 'Writer', 'Reviewer']\nSelectorOrchestrator: ['Researcher', 'Writer', 'Reviewer']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: An agent asks to stop after the first step",
    "headingKn": "ಪ್ರಯೋಗ 2: An agent asks to stop after the first step",
    "bodyEn": "What it ran: An agent asks to stop after the first step. What the lab concluded: only the handoff orchestrator honoured the stop request and ran one agent, while the static and selector orchestrators never read the handoff and ran all three, so an agent routing suggestion has no effect unless the orchestrator is built to read it; the same agents gave two different execution paths.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: An agent asks to stop after the first step. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): only the handoff orchestrator honoured the stop request and ran one agent, while the static and selector orchestrators never read the handoff and ran all three, so an agent routing suggestion has no effect unless the orchestrator is built to read it; the same agents gave two different execution paths."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: an agent asks to stop after the first step ---\nStaticOrchestrator: agents run 3 ['Researcher', 'Writer', 'Reviewer'] | verdict artifact: APPROVED\nHandoffOrchestrator: agents run 1 ['Researcher'] | verdict artifact: None\nSelectorOrchestrator: agents run 3 ['Researcher', 'Writer', 'Reviewer'] | verdict artifact: APPROVED"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Handoff validation and the step limit",
    "headingKn": "ಪ್ರಯೋಗ 3: Handoff validation and the step limit",
    "bodyEn": "What it ran: Handoff validation and the step limit. What the lab concluded: a result whose handoff claims another sender is refused, an agent that hands off to itself forever stops at the step limit and a limit of zero is rejected at construction; the first check only compares names, so it is not authorisation, which needs a table of allowed transitions.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Handoff validation and the step limit. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a result whose handoff claims another sender is refused, an agent that hands off to itself forever stops at the step limit and a limit of zero is rejected at construction; the first check only compares names, so it is not authorisation, which needs a table of allowed transitions."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: handoff validation and the step limit ---\nmismatched source: Handoff source does not match current agent\nself-handoff loop: Step limit exceeded\nbad limit: max_steps must be at least 1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: What the writer and reviewer do without their inputs",
    "headingKn": "ಪ್ರಯೋಗ 4: What the writer and reviewer do without their inputs",
    "bodyEn": "What it ran: What the writer and reviewer do without their inputs. What the lab concluded: missing inputs are reported as ordinary messages with no handoff, which an orchestrator can mistake for a normal ending, and the reviewer approves a nonsense draft because it only checks that a draft exists; approved here is a scripted word and not a review.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: What the writer and reviewer do without their inputs. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): missing inputs are reported as ordinary messages with no handoff, which an orchestrator can mistake for a normal ending, and the reviewer approves a nonsense draft because it only checks that a draft exists; approved here is a scripted word and not a review."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: what the writer and reviewer do without their inputs ---\nWriter: missing research artifact. | Reviewer: missing draft artifact.\nreviewer on a nonsense draft: Reviewer: APPROVED. | verdict: APPROVED"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Copies out of the shared pool",
    "headingKn": "ಪ್ರಯೋಗ 5: Copies out of the shared pool",
    "bodyEn": "What it ran: Copies out of the shared pool. What the lab concluded: changing or clearing the list returned by get_messages left the pool intact, because each message dictionary is copied; the copy is shallow, so a message holding a nested list or dictionary would still be shared.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Copies out of the shared pool. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): changing or clearing the list returned by get_messages left the pool intact, because each message dictionary is copied; the copy is shallow, so a message holding a nested list or dictionary would still be shared."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: copies out of the shared pool ---\nstored after editing and clearing the copy: [{'agent': 'Researcher', 'content': 'original'}]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: What each orchestrator costs when an agent stops early",
    "headingKn": "ಪ್ರಯೋಗ 6: What each orchestrator costs when an agent stops early",
    "bodyEn": "What it ran: What each orchestrator costs when an agent stops early. What the lab concluded: the handoff orchestrator spent one agent run where the other two spent three, so honouring an early stop saves two thirds of the agent calls in this task; a model-based selector would also add a routing call per step, which this scripted selector does not model.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: What each orchestrator costs when an agent stops early. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the handoff orchestrator spent one agent run where the other two spent three, so honouring an early stop saves two thirds of the agent calls in this task; a model-based selector would also add a routing call per step, which this scripted selector does not model."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely counting: what each orchestrator costs when an agent stops early ---\nagent runs on a status-only task: {'StaticOrchestrator': 3, 'HandoffOrchestrator': 1, 'SelectorOrchestrator': 3}"
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
    "headingEn": "Genuinely Found: Same Agents, Different Paths",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅದೇ ಏಜೆಂಟ್‌ಗಳು, ಬೇರೆ ಮಾರ್ಗಗಳು",
    "bodyEn": "Section 1: all three orchestrators ran Researcher, Writer, Reviewer on a normal task. Section 2: on the status-only task static ran 3 agents with verdict APPROVED, handoff ran 1 agent with no verdict and selector ran 3 agents with verdict APPROVED. Section 6: the agent run counts were 3, 1 and 3.",
    "bodyKn": "ವಿಭಾಗ 1: ಸಾಮಾನ್ಯ ಕೆಲಸದಲ್ಲಿ ಮೂರೂ orchestrator ಗಳು Researcher, Writer, Reviewer ಓಡಿಸಿದವು. ವಿಭಾಗ 2: status-only ಕೆಲಸದಲ್ಲಿ static 3 ಏಜೆಂಟ್‌ಗಳನ್ನು verdict APPROVED ನೊಂದಿಗೆ ಓಡಿಸಿತು, handoff 1 ಏಜೆಂಟ್ ಅನ್ನು verdict ಇಲ್ಲದೆ ಓಡಿಸಿತು ಮತ್ತು selector 3 ಏಜೆಂಟ್‌ಗಳನ್ನು verdict APPROVED ನೊಂದಿಗೆ ಓಡಿಸಿತು. ವಿಭಾಗ 6: ಏಜೆಂಟ್ ಓಟಗಳ ಎಣಿಕೆ 3, 1 ಮತ್ತು 3."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Guards and Missing Inputs",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕಾವಲುಗಳು ಮತ್ತು ಕಾಣೆಯಾದ ಇನ್‌ಪುಟ್‌ಗಳು",
    "bodyEn": "Section 3: a mismatched source raised Handoff source does not match current agent, a self-handoff loop raised Step limit exceeded and a limit of zero raised max_steps must be at least 1. Section 4: the writer reported a missing research artifact, the reviewer a missing draft, and the reviewer approved a nonsense draft with verdict APPROVED. Section 5: editing or clearing the returned list left the pool intact.",
    "bodyKn": "ವಿಭಾಗ 3: ಹೊಂದದ ಮೂಲ Handoff source does not match current agent ಎತ್ತಿತು, ಸ್ವಯಂ-handoff ಲೂಪ್ Step limit exceeded ಎತ್ತಿತು ಮತ್ತು ಸೊನ್ನೆ ಮಿತಿ max_steps must be at least 1 ಎತ್ತಿತು. ವಿಭಾಗ 4: writer ಕಾಣೆಯಾದ research artifact ವರದಿ ಮಾಡಿತು, reviewer ಕಾಣೆಯಾದ draft, ಮತ್ತು reviewer ಅರ್ಥಹೀನ ಕರಡನ್ನು verdict APPROVED ನೊಂದಿಗೆ ಅನುಮೋದಿಸಿತು. ವಿಭಾಗ 5: ಹಿಂದಿರುಗಿದ ಪಟ್ಟಿ ಬದಲಿಸಿದರೂ ಅಥವಾ ಖಾಲಿ ಮಾಡಿದರೂ pool ಹಾಗೆಯೇ ಉಳಿಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "If you swap the orchestrator and keep the agents, the behaviour of the whole system changes, so choosing an orchestrator is a design decision about who is allowed to read an agent output and act on it.",
    "bodyKn": "ನೀವು orchestrator ಬದಲಿಸಿ ಏಜೆಂಟ್‌ಗಳನ್ನು ಉಳಿಸಿದರೆ ಇಡೀ ವ್ಯವಸ್ಥೆಯ ವರ್ತನೆ ಬದಲಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ orchestrator ಆರಿಸುವುದು ಏಜೆಂಟ್‌ನ output ಅನ್ನು ಯಾರು ಓದಿ ಕ್ರಮ ಕೈಗೊಳ್ಳಲು ಅನುಮತಿ ಇದೆ ಎಂಬ ವಿನ್ಯಾಸ ನಿರ್ಧಾರ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"approved means a review happened.\" The reviewer approved a nonsense draft because it only checked that a draft exists.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"approved ಎಂದರೆ ವಿಮರ್ಶೆ ನಡೆಯಿತು.\" reviewer ಕರಡು ಇದೆಯೇ ಎಂದು ಮಾತ್ರ ಪರಿಶೀಲಿಸಿದ ಕಾರಣ ಅರ್ಥಹೀನ ಕರಡನ್ನು ಅನುಮೋದಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Static orchestration: a fixed sequence. Handoff-driven: the current agent names the next. Selector: a separate rule or model picks the next agent. Step limit: a cap on agent runs. Synchronous update: all agents read the same snapshot.",
    "bodyKn": "ಸ್ಥಿರ orchestration: ನಿಶ್ಚಿತ ಅನುಕ್ರಮ. Handoff-ಚಾಲಿತ: ಈಗಿನ ಏಜೆಂಟ್ ಮುಂದಿನದನ್ನು ಹೆಸರಿಸುತ್ತದೆ. Selector: ಪ್ರತ್ಯೇಕ ನಿಯಮ ಅಥವಾ ಮಾದರಿ ಮುಂದಿನ ಏಜೆಂಟ್ ಆರಿಸುತ್ತದೆ. ಹಂತ ಮಿತಿ: ಏಜೆಂಟ್ ಓಟಗಳ ಮೇಲಿನ ಮಿತಿ. ಸಮಕಾಲಿಕ ನವೀಕರಣ: ಎಲ್ಲಾ ಏಜೆಂಟ್‌ಗಳು ಒಂದೇ ಸ್ನ್ಯಾಪ್‌ಶಾಟ್ ಓದುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A normal task ran identically under all three orchestrators. 2) Only the handoff orchestrator honoured the stop and ran 1 agent. 3) A self-handoff loop stopped at the step limit. 4) The reviewer approved a nonsense draft. 5) Copies kept the pool intact.",
    "bodyKn": "1) ಸಾಮಾನ್ಯ ಕೆಲಸ ಮೂರೂ orchestrator ಗಳ ಅಡಿಯಲ್ಲಿ ಒಂದೇ ರೀತಿ ಓಡಿತು. 2) handoff orchestrator ಮಾತ್ರ ನಿಲುಗಡೆಯನ್ನು ಗೌರವಿಸಿ 1 ಏಜೆಂಟ್ ಓಡಿಸಿತು. 3) ಸ್ವಯಂ-handoff ಲೂಪ್ ಹಂತ ಮಿತಿಯಲ್ಲಿ ನಿಂತಿತು. 4) reviewer ಅರ್ಥಹೀನ ಕರಡನ್ನು ಅನುಮೋದಿಸಿತು. 5) ಪ್ರತಿಗಳು pool ಅನ್ನು ಹಾಗೆಯೇ ಇಟ್ಟವು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many agents did the handoff orchestrator run on the status-only task?",
      "qKn": "status-only ಕೆಲಸದಲ್ಲಿ handoff orchestrator ಎಷ್ಟು ಏಜೆಂಟ್‌ಗಳನ್ನು ಓಡಿಸಿತು?",
      "opts": [
       "1",
       "3",
       "2",
       "0"
      ],
      "optsKn": [
       "1",
       "3",
       "2",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "What verdict artifact did the static orchestrator leave on the status-only task?",
      "qKn": "status-only ಕೆಲಸದಲ್ಲಿ static orchestrator ಯಾವ verdict artifact ಬಿಟ್ಟಿತು?",
      "opts": [
       "APPROVED",
       "None",
       "REJECTED",
       "UNKNOWN"
      ],
      "optsKn": [
       "APPROVED",
       "None",
       "REJECTED",
       "UNKNOWN"
      ],
      "correct": 0
     },
     {
      "q": "What stopped the self-handoff loop?",
      "qKn": "ಸ್ವಯಂ-handoff ಲೂಪ್ ಅನ್ನು ಯಾವುದು ನಿಲ್ಲಿಸಿತು?",
      "opts": [
       "The step limit",
       "The reviewer",
       "A timeout",
       "The writer"
      ],
      "optsKn": [
       "ಹಂತ ಮಿತಿ",
       "reviewer",
       "ಟೈಮ್‌ಔಟ್",
       "writer"
      ],
      "correct": 0
     },
     {
      "q": "Why did the reviewer approve a nonsense draft?",
      "qKn": "reviewer ಅರ್ಥಹೀನ ಕರಡನ್ನು ಏಕೆ ಅನುಮೋದಿಸಿತು?",
      "opts": [
       "It only checked that a draft exists",
       "It read the draft carefully",
       "The writer told it to",
       "The selector forced it"
      ],
      "optsKn": [
       "ಅದು ಕರಡು ಇದೆಯೇ ಎಂದು ಮಾತ್ರ ಪರಿಶೀಲಿಸಿತು",
       "ಅದು ಕರಡನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಓದಿತು",
       "writer ಹೇಳಿತು",
       "selector ಒತ್ತಾಯಿಸಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What did clearing the list returned by get_messages do to the pool?",
      "qKn": "get_messages ಹಿಂದಿರುಗಿಸಿದ ಪಟ್ಟಿ ಖಾಲಿ ಮಾಡಿದರೆ pool ಗೆ ಏನಾಯಿತು?",
      "opts": [
       "Nothing, the pool was intact",
       "It emptied the pool",
       "It raised an error",
       "It copied the pool"
      ],
      "optsKn": [
       "ಏನೂ ಇಲ್ಲ, pool ಹಾಗೆಯೇ ಇತ್ತು",
       "ಅದು pool ಖಾಲಿ ಮಾಡಿತು",
       "ಅದು ದೋಷ ಎತ್ತಿತು",
       "ಅದು pool ನಕಲಿಸಿತು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
