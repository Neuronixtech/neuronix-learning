module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321538",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Role-Based Agent Teams: Crews, Tasks and Processes (Part 1 of 3) — Agent, Task, Crew and Process",
 "titleKn": "ಪಾತ್ರ-ಆಧಾರಿತ Agent ತಂಡಗಳು: Crews, Tasks ಮತ್ತು Processes (ಭಾಗ 1 / 3) — Agent, Task, Crew ಮತ್ತು Process",
 "desc": "Build Agent, Task, a sequential crew and a manager-driven hierarchical crew, then measure what handoffs lose, what a manager costs and why a text-reading manager loops.",
 "descKn": "Agent, Task, sequential crew ಮತ್ತು ಮ್ಯಾನೇಜರ್-ಚಾಲಿತ hierarchical crew ನಿರ್ಮಿಸಿ, ಹಸ್ತಾಂತರಗಳು ಏನು ಕಳೆದುಕೊಳ್ಳುತ್ತವೆ, ಮ್ಯಾನೇಜರ್ ಎಷ್ಟು ವೆಚ್ಚ, ಮತ್ತು ಪಠ್ಯ ಓದುವ ಮ್ಯಾನೇಜರ್ ಏಕೆ ಚಕ್ರವಾಗುತ್ತದೆ ಎಂದು ಅಳೆಯಿರಿ.",
 "objectives": [
  "Define Agent, Task, Crew and Process.",
  "Run a sequential crew and trace context threading.",
  "Compare the call cost of a hierarchical process.",
  "Explain why routing needs state rather than wording.",
  "Explain that expected_output is not enforcement."
 ],
 "objectivesKn": [
  "Agent, Task, Crew ಮತ್ತು Process ವ್ಯಾಖ್ಯಾನಿಸಿ.",
  "Sequential crew ಚಲಾಯಿಸಿ context threading ಅನುಸರಿಸಿ.",
  "Hierarchical process ನ ಕರೆ ವೆಚ್ಚ ಹೋಲಿಸಿ.",
  "ರೂಟಿಂಗ್‌ಗೆ ಪದಗಳಲ್ಲ, state ಬೇಕು ಏಕೆ ಎಂದು ವಿವರಿಸಿ.",
  "expected_output ಜಾರಿ ಅಲ್ಲ ಎಂದು ವಿವರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Role-Based Agent Teams: Crews, Tasks and Processes (Part 1 of 3)",
    "textKn": "ಪಾತ್ರ-ಆಧಾರಿತ Agent ತಂಡಗಳು: Crews, Tasks ಮತ್ತು Processes (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: Agent, Task, Crew and the sequential and hierarchical processes. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of CrewAI's ideas, not the CrewAI library, and the model is a deterministic stand-in, so no real LLM behaviour is measured. The pasted source for this part was a flattened export, so the code here is rebuilt from its descriptions and then run. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: Agent, Task, Crew ಮತ್ತು sequential ಹಾಗೂ hierarchical processes. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು CrewAI ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, CrewAI ಲೈಬ್ರರಿ ಅಲ್ಲ, ಮತ್ತು ಮಾದರಿ ನಿರ್ಧಾರಾತ್ಮಕ ಬದಲಿ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಈ ಭಾಗದ ಅಂಟಿಸಿದ ಮೂಲ ಚಪ್ಪಟೆಯಾದ ರಫ್ತು ಆಗಿತ್ತು, ಆದ್ದರಿಂದ ಇಲ್ಲಿನ ಕೋಡ್ ಅದರ ವಿವರಣೆಗಳಿಂದ ಮರುನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Four Primitives",
    "textKn": "ನಾಲ್ಕು ಮೂಲಭೂತ ಭಾಗಗಳು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Who, What, Container, Order",
    "headingKn": "ಯಾರು, ಏನು, ಕಂಟೈನರ್, ಕ್ರಮ",
    "bodyEn": "A role-based framework splits a job into four ideas. An Agent answers who performs the work: a role, a goal, a backstory and optional tools. A Task answers what must be done: a description, an expected_output and an assigned agent. A Crew is a container holding agents and tasks; it is not another intelligent agent. A Process decides execution strategy: sequential runs tasks in a fixed order and threads each output forward, hierarchical lets a manager choose who runs next.",
    "bodyKn": "ಪಾತ್ರ-ಆಧಾರಿತ ಫ್ರೇಮ್‌ವರ್ಕ್ ಕೆಲಸವನ್ನು ನಾಲ್ಕು ಕಲ್ಪನೆಗಳಾಗಿ ವಿಭಜಿಸುತ್ತದೆ. Agent ಕೆಲಸವನ್ನು ಯಾರು ಮಾಡುತ್ತಾರೆ ಎಂದು ಉತ್ತರಿಸುತ್ತದೆ: ಪಾತ್ರ, ಗುರಿ, ಹಿನ್ನೆಲೆ ಕಥೆ ಮತ್ತು ಐಚ್ಛಿಕ tools. Task ಏನು ಮಾಡಬೇಕು ಎಂದು ಉತ್ತರಿಸುತ್ತದೆ: ವಿವರಣೆ, expected_output ಮತ್ತು ನಿಯೋಜಿತ agent. Crew agents ಮತ್ತು tasks ಹಿಡಿದಿರುವ ಕಂಟೈನರ್; ಅದು ಇನ್ನೊಂದು ಬುದ್ಧಿವಂತ agent ಅಲ್ಲ. Process ಚಲಾವಣೆ ತಂತ್ರ ನಿರ್ಧರಿಸುತ್ತದೆ: sequential ಕಾರ್ಯಗಳನ್ನು ನಿಗದಿತ ಕ್ರಮದಲ್ಲಿ ಚಲಾಯಿಸಿ ಪ್ರತಿ output ಮುಂದೆ ಕಳುಹಿಸುತ್ತದೆ, hierarchical ಮ್ಯಾನೇಜರ್ ಮುಂದೆ ಯಾರು ಚಲಿಸಬೇಕೆಂದು ಆರಿಸಲು ಬಿಡುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Four Primitives",
    "headingKn": "ನಾಲ್ಕು ಮೂಲಭೂತ ಭಾಗಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Four primitives: Agent, Task, Crew, Process</text><rect x=\"15\" y=\"28\" width=\"120\" height=\"38\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"75\" y=\"43\" fill=\"#e2e8f0\" text-anchor=\"middle\">Agent</text><text x=\"75\" y=\"55\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">role, goal, backstory, tools</text><rect x=\"165\" y=\"28\" width=\"120\" height=\"38\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"225\" y=\"43\" fill=\"#e2e8f0\" text-anchor=\"middle\">Task</text><text x=\"225\" y=\"55\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">description, expected_output</text><rect x=\"15\" y=\"90\" width=\"120\" height=\"38\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"75\" y=\"105\" fill=\"#e2e8f0\" text-anchor=\"middle\">Crew</text><text x=\"75\" y=\"117\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">container of agents + tasks</text><rect x=\"165\" y=\"90\" width=\"120\" height=\"38\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"225\" y=\"105\" fill=\"#e2e8f0\" text-anchor=\"middle\">Process</text><text x=\"225\" y=\"117\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">sequential or hierarchical</text><path d=\"M75,66 V90 M225,66 V90 M135,109 H165\" stroke=\"#475569\"/><text x=\"150\" y=\"150\" fill=\"#94a3b8\" text-anchor=\"middle\">Researcher -> Writer -> Editor</text><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a Crew holds the others; the Process decides the order</text></svg>",
    "captionEn": "A Crew holds agents and tasks; the Process decides the order they run in.",
    "captionKn": "Crew agents ಮತ್ತು tasks ಹಿಡಿದಿದೆ; Process ಅವು ಚಲಿಸುವ ಕ್ರಮ ನಿರ್ಧರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Sequential versus hierarchical",
    "headingKn": "Sequential ಮತ್ತು hierarchical ಹೋಲಿಕೆ",
    "headers": [
     "",
     "Sequential",
     "Hierarchical"
    ],
    "rows": [
     [
      "Who picks the next step",
      "The task list",
      "A manager, each time"
     ],
     [
      "Best when",
      "The order is known",
      "The order depends on results"
     ],
     [
      "Extra cost",
      "None",
      "One manager decision per step"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Core",
    "textKn": "Core ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "crew_1.py",
    "headingEn": "Agent, Task, SequentialCrew and HierarchicalCrew",
    "headingKn": "Agent, Task, SequentialCrew ಮತ್ತು HierarchicalCrew",
    "descEn": "mock_llm is a deterministic stand-in that reads the CONTEXT of the prompt, so a handoff genuinely changes what the next agent can do. Agent.build_prompt assembles ROLE, GOAL, BACKSTORY, TASK and CONTEXT. SequentialCrew threads each output forward. HierarchicalCrew calls a manager function before every step and counts those calls separately.",
    "descKn": "mock_llm ಪ್ರಾಂಪ್ಟ್‌ನ CONTEXT ಓದುವ ನಿರ್ಧಾರಾತ್ಮಕ ಬದಲಿ, ಆದ್ದರಿಂದ ಹಸ್ತಾಂತರ ಮುಂದಿನ agent ಏನು ಮಾಡಬಲ್ಲದು ಎಂಬುದನ್ನು ನಿಜವಾಗಿ ಬದಲಿಸುತ್ತದೆ. Agent.build_prompt ROLE, GOAL, BACKSTORY, TASK ಮತ್ತು CONTEXT ಜೋಡಿಸುತ್ತದೆ. SequentialCrew ಪ್ರತಿ output ಮುಂದೆ ಕಳುಹಿಸುತ್ತದೆ. HierarchicalCrew ಪ್ರತಿ ಹಂತದ ಮೊದಲು ಮ್ಯಾನೇಜರ್ ಕಾರ್ಯ ಕರೆದು ಆ ಕರೆಗಳನ್ನು ಬೇರೆಯಾಗಿ ಎಣಿಸುತ್ತದೆ.",
    "code": "def mock_llm(role: str, prompt: str) -> str:\n    \"\"\"Deterministic stand-in for a model. It reads the CONTEXT line, so handoffs genuinely matter.\"\"\"\n    context = prompt.split(\"CONTEXT:\\n\", 1)[-1].strip()\n    if role == \"Researcher\":\n        return (\"Finding 1: Agents increasingly use explicit workflows.\\n\"\n                \"Finding 2: Memory is externalized from model context.\\n\"\n                \"Finding 3: Production systems emphasize observability.\")\n    if role == \"Writer\":\n        # a summariser: keeps only the first finding it can see, as a short model often would\n        lines = [l for l in context.splitlines() if l.startswith(\"Finding\")]\n        kept = lines[0].split(\": \", 1)[1] if lines else \"no findings were provided\"\n        return f\"Draft: {kept}\"\n    if role == \"Editor\":\n        return \"Edited: \" + context.replace(\"Draft: \", \"\")\n    return \"No response.\"\n\n\n@dataclass\nclass Agent:\n    role: str\n    goal: str\n    backstory: str\n    tools: list = field(default_factory=list)\n\n    def build_prompt(self, task_description: str, context: str = \"\") -> str:\n        return (f\"ROLE:\\n{self.role}\\nGOAL:\\n{self.goal}\\nBACKSTORY:\\n{self.backstory}\\n\"\n                f\"TASK:\\n{task_description}\\nCONTEXT:\\n{context}\")\n\n    def act(self, task_description: str, context: str = \"\") -> str:\n        CALLS[\"agent\"] += 1\n        return mock_llm(self.role, self.build_prompt(task_description, context))\n\n\n@dataclass\nclass Task:\n    description: str\n    expected_output: str\n    agent: Agent\n\n    def execute(self, context: str = \"\") -> str:\n        return self.agent.act(self.description, context)\n\n\nclass SequentialCrew:\n    def __init__(self, agents, tasks):\n        self.agents, self.tasks = agents, tasks\n\n    def kickoff(self, inputs: str):\n        context, trace = inputs, []\n        for task in self.tasks:\n            output = task.execute(context)\n            trace.append((task.agent.role, output))\n            context = output\n        return context, trace\n\n\nclass HierarchicalCrew:\n    \"\"\"A manager decides who runs next. The decision itself is a call (counted separately).\"\"\"\n\n    def __init__(self, agents, choose_next: Callable, max_steps=20):\n        self.agents = {a.role: a for a in agents}\n        self.choose_next, self.max_steps = choose_next, max_steps\n\n    def kickoff(self, topic: str):\n        context, trace, completed = topic, [], []\n        for _ in range(self.max_steps):\n            CALLS[\"manager\"] += 1\n            nxt = self.choose_next(context, completed)\n            trace.append(f\"manager->{nxt}\")\n            if nxt == \"done\":\n                return context, trace\n            context = self.agents[nxt].act(topic, context)\n            completed.append(nxt)\n        raise RuntimeError(f\"manager never said done within {self.max_steps} steps; trace tail: {trace[-3:]}\")\n\n\nresearcher = Agent(\"Researcher\", \"Find facts about the topic\", \"A careful analyst.\")\nwriter = Agent(\"Writer\", \"Write a short brief\", \"A concise technical writer.\")\neditor = Agent(\"Editor\", \"Polish the brief\", \"A strict editor.\")\nTASKS = [\n    Task(\"Research agent engineering.\", \"Exactly three findings\", researcher),\n    Task(\"Write a one-sentence brief.\", \"One sentence\", writer),\n    Task(\"Edit the brief.\", \"One polished sentence\", editor),\n]"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "crew_1.py",
    "headingEn": "Two managers and main(): seven experiments",
    "headingKn": "ಎರಡು ಮ್ಯಾನೇಜರ್‌ಗಳು ಮತ್ತು main(): ಏಳು ಪ್ರಯೋಗಗಳು",
    "descEn": "tracking_manager decides from an explicit list of completed roles. text_manager decides from the wording of the latest output. main() runs the pipeline, shows the prompt, counts findings that survive each handoff, counts model calls, breaks the text manager, measures backstory cost and tests whether expected_output is enforced.",
    "descKn": "tracking_manager ಪೂರ್ಣಗೊಂಡ ಪಾತ್ರಗಳ ಸ್ಪಷ್ಟ ಪಟ್ಟಿಯಿಂದ ನಿರ್ಧರಿಸುತ್ತದೆ. text_manager ಇತ್ತೀಚಿನ output ನ ಪದಗಳಿಂದ ನಿರ್ಧರಿಸುತ್ತದೆ. main() pipeline ಚಲಾಯಿಸುತ್ತದೆ, ಪ್ರಾಂಪ್ಟ್ ತೋರಿಸುತ್ತದೆ, ಪ್ರತಿ ಹಸ್ತಾಂತರದಲ್ಲಿ ಉಳಿಯುವ ಕಂಡುಹಿಡಿತಗಳನ್ನು ಎಣಿಸುತ್ತದೆ, ಮಾದರಿ ಕರೆಗಳನ್ನು ಎಣಿಸುತ್ತದೆ, text ಮ್ಯಾನೇಜರ್ ಮುರಿಯುತ್ತದೆ, backstory ವೆಚ್ಚ ಅಳೆಯುತ್ತದೆ, ಮತ್ತು expected_output ಜಾರಿಯಾಗುತ್ತದೆಯೇ ಎಂದು ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
    "code": "ORDER = [\"Researcher\", \"Writer\", \"Editor\"]\n\n\ndef tracking_manager(context: str, completed: list) -> str:\n    \"\"\"Decides from explicit state: which roles have finished.\"\"\"\n    for role in ORDER:\n        if role not in completed:\n            return role\n    return \"done\"\n\n\ndef text_manager(context: str, completed: list) -> str:\n    \"\"\"Decides from the wording of the latest output only (what a naive prompt-routed manager does).\"\"\"\n    if \"Finding\" not in context:\n        return \"Researcher\"\n    if \"Draft\" not in context and \"Edited\" not in context:\n        return \"Writer\"\n    if \"Edited\" not in context:\n        return \"Editor\"\n    return \"done\"\n\n\ndef section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Sequential crew: Researcher -> Writer -> Editor\")\n    crew = SequentialCrew([researcher, writer, editor], TASKS)\n    result, trace = crew.kickoff(\"agent engineering\")\n    for role, out in trace:\n        print(f\"{role}: {out!r}\")\n    print(\"final:\", result)\n\n    section(\"2. The prompt an agent actually receives\")\n    print(writer.build_prompt(TASKS[1].description, \"Finding 1: x\"))\n\n    section(\"3. Genuinely checking: only the LAST output is threaded forward\")\n    print(\"findings written by the Researcher: 3\")\n    for role, out in trace:\n        n = sum(1 for l in out.splitlines() if l.startswith(\"Finding\"))\n        print(f\"  after {role}: findings still visible = {n}; characters = {len(out)}\")\n    print(\"the Editor never saw Findings 2 and 3; nothing in the crew raised an error\")\n\n    section(\"4. Genuinely counting: what the hierarchical manager costs\")\n    CALLS.update(agent=0, manager=0)\n    SequentialCrew([researcher, writer, editor], TASKS).kickoff(\"agent engineering\")\n    seq = dict(CALLS)\n    CALLS.update(agent=0, manager=0)\n    h_result, h_trace = HierarchicalCrew([researcher, writer, editor], tracking_manager).kickoff(\"agent engineering\")\n    hier = dict(CALLS)\n    print(\"sequential  :\", seq, \"total model calls =\", sum(seq.values()))\n    print(\"hierarchical:\", hier, \"total model calls =\", sum(hier.values()))\n    print(\"manager trace:\", h_trace)\n    print(\"same final text:\", h_result == result)\n\n    section(\"5. Genuinely checking: a manager that reads wording instead of state loops\")\n    crew_txt = HierarchicalCrew([researcher, writer, editor], text_manager, max_steps=8)\n    try:\n        crew_txt.kickoff(\"agent engineering\")\n    except RuntimeError as e:\n        print(\"RuntimeError:\", e)\n    print(\"each agent's output replaces the context, so after the Writer the word 'Finding' is gone and the manager re-hires the Researcher\")\n    print(\"the tracking manager (explicit completed list) finished in\", len(h_trace), \"decisions; routing needs state, not wording\")\n\n    section(\"6. Genuinely measuring: backstory is paid on every call\")\n    for words in (5, 200, 2000):\n        agent = Agent(\"Writer\", \"Write\", \"expert \" * words)\n        prompt = agent.build_prompt(\"Write a one-sentence brief.\", \"Finding 1: x\")\n        print(f\"backstory of {words:>4} words -> prompt of {len(prompt.split()):>5} words, x3 calls = {3 * len(prompt.split())} words\")\n\n    section(\"7. Genuinely checking: expected_output is a description, not a check\")\n    short = Task(\"Research.\", \"Exactly three findings\", Agent(\"Researcher\", \"g\", \"b\"))\n    out = short.execute(\"topic\")\n    got = sum(1 for l in out.splitlines() if l.startswith(\"Finding\"))\n    print(\"task contract says: exactly three findings | produced:\", got, \"| execution raised nothing\")\n\n    class TwoFindingResearcher(Agent):\n        def act(self, task_description, context=\"\"):\n            return \"Finding 1: only one thing\\nFinding 2: and another\"\n    weak = Task(\"Research.\", \"Exactly three findings\", TwoFindingResearcher(\"Researcher\", \"g\", \"b\"))\n    out2 = weak.execute(\"topic\")\n    got2 = sum(1 for l in out2.splitlines() if l.startswith(\"Finding\"))\n    print(\"a weaker agent produced\", got2, \"findings and the Task still returned normally\")\n    print(\"enforcement has to be code you write (Part 2 adds a typed result)\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Sequential crew: Researcher -> Writer -> Editor ---\nResearcher: 'Finding 1: Agents increasingly use explicit workflows.\\nFinding 2: Memory is externalized from model context.\\nFinding 3: Production systems emphasize observability.'\nWriter: 'Draft: Agents increasingly use explicit workflows.'\nEditor: 'Edited: Agents increasingly use explicit workflows.'\nfinal: Edited: Agents increasingly use explicit workflows.\n\n--- 2. The prompt an agent actually receives ---\nROLE:\nWriter\nGOAL:\nWrite a short brief\nBACKSTORY:\nA concise technical writer.\nTASK:\nWrite a one-sentence brief.\nCONTEXT:\nFinding 1: x\n\n--- 3. Genuinely checking: only the LAST output is threaded forward ---\nfindings written by the Researcher: 3\n  after Researcher: findings still visible = 3; characters = 163\n  after Writer: findings still visible = 0; characters = 50\n  after Editor: findings still visible = 0; characters = 51\nthe Editor never saw Findings 2 and 3; nothing in the crew raised an error\n\n--- 4. Genuinely counting: what the hierarchical manager costs ---\nsequential  : {'agent': 3, 'manager': 0} total model calls = 3\nhierarchical: {'agent': 3, 'manager': 4} total model calls = 7\nmanager trace: ['manager->Researcher', 'manager->Writer', 'manager->Editor', 'manager->done']\nsame final text: True\n\n--- 5. Genuinely checking: a manager that reads wording instead of state loops ---\nRuntimeError: manager never said done within 8 steps; trace tail: ['manager->Writer', 'manager->Researcher', 'manager->Writer']\neach agent's output replaces the context, so after the Writer the word 'Finding' is gone and the manager re-hires the Researcher\nthe tracking manager (explicit completed list) finished in 4 decisions; routing needs state, not wording\n\n--- 6. Genuinely measuring: backstory is paid on every call ---\nbackstory of    5 words -> prompt of    19 words, x3 calls = 57 words\nbackstory of  200 words -> prompt of   214 words, x3 calls = 642 words\nbackstory of 2000 words -> prompt of  2014 words, x3 calls = 6042 words\n\n--- 7. Genuinely checking: expected_output is a description, not a check ---\ntask contract says: exactly three findings | produced: 3 | execution raised nothing\na weaker agent produced 2 findings and the Task still returned normally\nenforcement has to be code you write (Part 2 adds a typed result)"
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
    "headingEn": "Genuinely Found: Only the Last Output Is Threaded Forward",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕೊನೆಯ Output ಮಾತ್ರ ಮುಂದೆ ಹೋಗುತ್ತದೆ",
    "bodyEn": "The Researcher wrote three findings. The Writer, which kept the first finding only, produced \"Draft: Agents increasingly use explicit workflows.\" and from then on zero findings were visible (section 3 counts 3, 0, 0). The Editor polished the one sentence it was given and never saw Findings 2 and 3. Nothing raised an error. In a sequential process the context is whatever the previous task returned, so information lost at one handoff is gone for every later agent; important data needs an explicit structure (Part 2).",
    "bodyKn": "Researcher ಮೂರು ಕಂಡುಹಿಡಿತ ಬರೆದನು. ಮೊದಲ ಕಂಡುಹಿಡಿತ ಮಾತ್ರ ಉಳಿಸಿದ Writer \"Draft: Agents increasingly use explicit workflows.\" ಉತ್ಪಾದಿಸಿದನು, ಅಂದಿನಿಂದ ಶೂನ್ಯ ಕಂಡುಹಿಡಿತಗಳು ಕಾಣುತ್ತಿದ್ದವು (ವಿಭಾಗ 3 3, 0, 0 ಎಣಿಸುತ್ತದೆ). Editor ತನಗೆ ನೀಡಿದ ಒಂದು ವಾಕ್ಯ ಮಾತ್ರ ಪರಿಷ್ಕರಿಸಿದನು ಮತ್ತು ಕಂಡುಹಿಡಿತ 2 ಹಾಗೂ 3 ಎಂದೂ ನೋಡಲಿಲ್ಲ. ಯಾವುದೇ ದೋಷ ಬರಲಿಲ್ಲ. Sequential process ನಲ್ಲಿ context ಎಂದರೆ ಹಿಂದಿನ task ಹಿಂತಿರುಗಿಸಿದ್ದು, ಆದ್ದರಿಂದ ಒಂದು ಹಸ್ತಾಂತರದಲ್ಲಿ ಕಳೆದುಹೋದ ಮಾಹಿತಿ ನಂತರದ ಪ್ರತಿ agent ಗೂ ಕಳೆದುಹೋಗುತ್ತದೆ; ಮುಖ್ಯ ದತ್ತಾಂಶಕ್ಕೆ ಸ್ಪಷ್ಟ ರಚನೆ ಬೇಕು (ಭಾಗ 2)."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Manager Is a Cost, and Reading Wording Loops",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮ್ಯಾನೇಜರ್ ವೆಚ್ಚ, ಮತ್ತು ಪದಗಳನ್ನು ಓದುವುದು ಚಕ್ರವಾಗುತ್ತದೆ",
    "bodyEn": "Section 4 counted model calls for the same three-agent job: sequential used 3 and hierarchical used 3 agent calls plus 4 manager decisions, 7 in all, for an identical final text. Section 5 then built a manager that reads the wording of the latest output. Each agent's output replaces the context, so after the Writer the word \"Finding\" is gone and the manager hires the Researcher again; it raised \"manager never said done within 8 steps\". The manager that tracks an explicit completed list finished in 4 decisions. A hierarchical crew needs a step limit and state, not wording, to decide who is next.",
    "bodyKn": "ಅದೇ ಮೂರು-agent ಕೆಲಸಕ್ಕೆ ವಿಭಾಗ 4 ಮಾದರಿ ಕರೆಗಳನ್ನು ಎಣಿಸಿತು: sequential 3 ಬಳಸಿತು, hierarchical 3 agent ಕರೆಗಳ ಜೊತೆ 4 ಮ್ಯಾನೇಜರ್ ನಿರ್ಧಾರಗಳನ್ನು, ಒಟ್ಟು 7, ಒಂದೇ ಅಂತಿಮ ಪಠ್ಯಕ್ಕೆ. ವಿಭಾಗ 5 ನಂತರ ಇತ್ತೀಚಿನ output ನ ಪದಗಳನ್ನು ಓದುವ ಮ್ಯಾನೇಜರ್ ನಿರ್ಮಿಸಿತು. ಪ್ರತಿ agent ನ output context ಬದಲಿಸುವುದರಿಂದ Writer ನಂತರ \"Finding\" ಪದ ಹೋಗುತ್ತದೆ ಮತ್ತು ಮ್ಯಾನೇಜರ್ Researcher ಅನ್ನು ಮತ್ತೆ ನೇಮಿಸುತ್ತದೆ; ಅದು \"manager never said done within 8 steps\" ಎತ್ತಿತು. ಪೂರ್ಣಗೊಂಡ ಸ್ಪಷ್ಟ ಪಟ್ಟಿ ಇಡುವ ಮ್ಯಾನೇಜರ್ 4 ನಿರ್ಧಾರಗಳಲ್ಲಿ ಮುಗಿಸಿತು. Hierarchical crew ಗೆ ಮುಂದೆ ಯಾರು ಎಂದು ನಿರ್ಧರಿಸಲು ಹಂತ ಮಿತಿ ಮತ್ತು state ಬೇಕು, ಪದಗಳಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Backstory Is Paid on Every Call, and expected_output Is Only a Description",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Backstory ಪ್ರತಿ ಕರೆಯಲ್ಲಿ ಪಾವತಿ, ಮತ್ತು expected_output ಕೇವಲ ವಿವರಣೆ",
    "bodyEn": "Section 6 measured the prompt: a 5-word backstory gave a 19-word prompt, 200 words gave 214 and 2000 words gave 2014, so three calls cost 57, 642 and 6042 words. The backstory is resent every time. Section 7: the task said \"Exactly three findings\", yet an agent that produced two findings returned normally. expected_output tells the model what is wanted; nothing in the crew checks it. A real check is code you write, such as the typed result in Part 2.",
    "bodyKn": "ವಿಭಾಗ 6 ಪ್ರಾಂಪ್ಟ್ ಅಳೆಯಿತು: 5-ಪದ backstory 19-ಪದ ಪ್ರಾಂಪ್ಟ್ ನೀಡಿತು, 200 ಪದಗಳು 214, 2000 ಪದಗಳು 2014, ಆದ್ದರಿಂದ ಮೂರು ಕರೆಗಳಿಗೆ 57, 642 ಮತ್ತು 6042 ಪದಗಳ ವೆಚ್ಚ. Backstory ಪ್ರತಿ ಬಾರಿ ಮರು ಕಳುಹಿಸಲ್ಪಡುತ್ತದೆ. ವಿಭಾಗ 7: task \"Exactly three findings\" ಎಂದಿತ್ತು, ಆದರೂ ಎರಡು ಕಂಡುಹಿಡಿತ ಉತ್ಪಾದಿಸಿದ agent ಸಾಮಾನ್ಯವಾಗಿ ಹಿಂತಿರುಗಿತು. expected_output ಮಾದರಿಗೆ ಏನು ಬೇಕೆಂದು ಹೇಳುತ್ತದೆ; crew ನಲ್ಲಿ ಏನೂ ಅದನ್ನು ಪರಿಶೀಲಿಸುವುದಿಲ್ಲ. ನಿಜವಾದ ಪರಿಶೀಲನೆ ನೀವು ಬರೆಯುವ ಕೋಡ್, ಭಾಗ 2 ರ typed ಫಲಿತಾಂಶದಂತೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Splitting a job into roles gives each model call a narrow brief and makes each stage inspectable. The cost is more calls, more prompt text and more handoffs where information can be lost.",
    "bodyKn": "ಕೆಲಸವನ್ನು ಪಾತ್ರಗಳಾಗಿ ವಿಭಜಿಸುವುದು ಪ್ರತಿ ಮಾದರಿ ಕರೆಗೆ ಕಿರಿದಾದ ಸೂಚನೆ ನೀಡಿ ಪ್ರತಿ ಹಂತವನ್ನು ಪರಿಶೀಲಿಸಬಹುದಾಗಿಸುತ್ತದೆ. ವೆಚ್ಚ ಹೆಚ್ಚು ಕರೆಗಳು, ಹೆಚ್ಚು ಪ್ರಾಂಪ್ಟ್ ಪಠ್ಯ ಮತ್ತು ಮಾಹಿತಿ ಕಳೆದುಹೋಗಬಹುದಾದ ಹೆಚ್ಚು ಹಸ್ತಾಂತರಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a Crew is a smarter agent.\" A Crew is a container; the Process decides order, and every step is still one agent doing one task.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"Crew ಹೆಚ್ಚು ಬುದ್ಧಿವಂತ agent.\" Crew ಕಂಟೈನರ್ ಮಾತ್ರ; Process ಕ್ರಮ ನಿರ್ಧರಿಸುತ್ತದೆ, ಮತ್ತು ಪ್ರತಿ ಹಂತ ಒಂದು agent ಒಂದು task ಮಾಡುವುದೇ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Agent: role, goal, backstory, tools. Task: description, expected_output, agent. Crew: container of agents and tasks. Process: sequential or hierarchical execution strategy. Manager: the component that picks the next agent in a hierarchical process. Context threading: passing one task output to the next.",
    "bodyKn": "Agent: ಪಾತ್ರ, ಗುರಿ, backstory, tools. Task: ವಿವರಣೆ, expected_output, agent. Crew: agents ಮತ್ತು tasks ಕಂಟೈನರ್. Process: sequential ಅಥವಾ hierarchical ಚಲಾವಣೆ ತಂತ್ರ. ಮ್ಯಾನೇಜರ್: hierarchical process ನಲ್ಲಿ ಮುಂದಿನ agent ಆರಿಸುವ ಘಟಕ. Context threading: ಒಂದು task output ಅನ್ನು ಮುಂದಿನದಕ್ಕೆ ಕಳುಹಿಸುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Agent is who, Task is what, Crew is the container, Process is the order. 2) Only the previous output is threaded forward, so handoffs lose information silently. 3) The hierarchical manager added 4 model calls to the same 3-call job. 4) A manager that reads wording looped; one that tracks state finished. 5) Backstory words are resent on every call. 6) expected_output is not enforced.",
    "bodyKn": "1) Agent ಯಾರು, Task ಏನು, Crew ಕಂಟೈನರ್, Process ಕ್ರಮ. 2) ಹಿಂದಿನ output ಮಾತ್ರ ಮುಂದೆ ಹೋಗುತ್ತದೆ, ಆದ್ದರಿಂದ ಹಸ್ತಾಂತರಗಳು ಮೌನವಾಗಿ ಮಾಹಿತಿ ಕಳೆದುಕೊಳ್ಳುತ್ತವೆ. 3) ಅದೇ 3-ಕರೆ ಕೆಲಸಕ್ಕೆ hierarchical ಮ್ಯಾನೇಜರ್ 4 ಮಾದರಿ ಕರೆ ಸೇರಿಸಿತು. 4) ಪದ ಓದುವ ಮ್ಯಾನೇಜರ್ ಚಕ್ರವಾಯಿತು; state ಇಡುವುದು ಮುಗಿಸಿತು. 5) Backstory ಪದಗಳು ಪ್ರತಿ ಕರೆಯಲ್ಲಿ ಮರು ಕಳುಹಿಸಲ್ಪಡುತ್ತವೆ. 6) expected_output ಜಾರಿಯಾಗುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which primitive answers who performs the work?",
      "qKn": "ಕೆಲಸವನ್ನು ಯಾರು ಮಾಡುತ್ತಾರೆ ಎಂದು ಯಾವ ಭಾಗ ಉತ್ತರಿಸುತ್ತದೆ?",
      "opts": [
       "Task",
       "Agent",
       "Process",
       "Crew"
      ],
      "optsKn": [
       "Task",
       "Agent",
       "Process",
       "Crew"
      ],
      "correct": 1
     },
     {
      "q": "In the lab, how many findings did the Editor see?",
      "qKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ Editor ಎಷ್ಟು ಕಂಡುಹಿಡಿತ ನೋಡಿದನು?",
      "opts": [
       "Three",
       "Two",
       "Zero, because only the Writer's one-sentence draft was threaded forward",
       "One per task"
      ],
      "optsKn": [
       "ಮೂರು",
       "ಎರಡು",
       "ಶೂನ್ಯ, ಏಕೆಂದರೆ Writer ನ ಒಂದು-ವಾಕ್ಯ ಕರಡು ಮಾತ್ರ ಮುಂದೆ ಹೋಯಿತು",
       "ಪ್ರತಿ task ಗೆ ಒಂದು"
      ],
      "correct": 2
     },
     {
      "q": "How many model calls did the hierarchical run use for the three-agent job?",
      "qKn": "ಮೂರು-agent ಕೆಲಸಕ್ಕೆ hierarchical ಓಟ ಎಷ್ಟು ಮಾದರಿ ಕರೆ ಬಳಸಿತು?",
      "opts": [
       "3",
       "4",
       "7: three agent calls plus four manager decisions",
       "12"
      ],
      "optsKn": [
       "3",
       "4",
       "7: ಮೂರು agent ಕರೆ ಜೊತೆ ನಾಲ್ಕು ಮ್ಯಾನೇಜರ್ ನಿರ್ಧಾರ",
       "12"
      ],
      "correct": 2
     },
     {
      "q": "Why did the text-keyed manager loop?",
      "qKn": "Text-ಆಧಾರಿತ ಮ್ಯಾನೇಜರ್ ಏಕೆ ಚಕ್ರವಾಯಿತು?",
      "opts": [
       "The Researcher refused",
       "Each output replaced the context, so the keyword it relied on disappeared",
       "The queue was empty",
       "Python recursion"
      ],
      "optsKn": [
       "Researcher ನಿರಾಕರಿಸಿದನು",
       "ಪ್ರತಿ output context ಬದಲಿಸಿತು, ಆದ್ದರಿಂದ ಅದು ಅವಲಂಬಿಸಿದ ಪದ ಮಾಯವಾಯಿತು",
       "ಸರತಿ ಖಾಲಿ",
       "Python recursion"
      ],
      "correct": 1
     },
     {
      "q": "What does expected_output guarantee in this model?",
      "qKn": "ಈ ಮಾದರಿಯಲ್ಲಿ expected_output ಏನನ್ನು ಖಾತರಿಪಡಿಸುತ್ತದೆ?",
      "opts": [
       "That output has exactly the stated shape",
       "Nothing by itself; a two-finding result still returned normally",
       "That the manager stops",
       "That tools are called"
      ],
      "optsKn": [
       "output ನಿಖರವಾಗಿ ಹೇಳಿದ ರೂಪದಲ್ಲಿರುತ್ತದೆ",
       "ಸ್ವತಃ ಏನೂ ಇಲ್ಲ; ಎರಡು-ಕಂಡುಹಿಡಿತ ಫಲಿತಾಂಶ ಸಾಮಾನ್ಯವಾಗಿ ಹಿಂತಿರುಗಿತು",
       "ಮ್ಯಾನೇಜರ್ ನಿಲ್ಲುತ್ತದೆ",
       "tools ಕರೆಯಲ್ಪಡುತ್ತವೆ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
