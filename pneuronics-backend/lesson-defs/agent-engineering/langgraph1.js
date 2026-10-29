module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321532",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Stateful Graph Orchestration: Durable Execution and Checkpoints (Part 1 of 3) — State, Nodes and Edges",
 "titleKn": "Stateful Graph Orchestration: Durable Execution ಮತ್ತು Checkpoints (ಭಾಗ 1 / 3) — State, Nodes ಮತ್ತು Edges",
 "desc": "Model an agent as typed state, update-returning nodes and conditional edges, and find that update() drops messages, TypedDict does not validate at runtime, random nodes break replay and cycles need budgets.",
 "descKn": "Agent ಅನ್ನು ಟೈಪ್ ಮಾಡಿದ state, ಅಪ್‌ಡೇಟ್ ನೀಡುವ nodes ಮತ್ತು ಷರತ್ತಿನ edges ಆಗಿ ಮಾದರಿ ಮಾಡಿ, ಮತ್ತು update() ಸಂದೇಶ ಬಿಡುತ್ತದೆ, TypedDict ರನ್‌ಟೈಮ್‌ನಲ್ಲಿ ಮಾನ್ಯ ಮಾಡುವುದಿಲ್ಲ, ಯಾದೃಚ್ಛಿಕ nodes replay ಮುರಿಯುತ್ತವೆ ಹಾಗೂ ಚಕ್ರಗಳಿಗೆ budgets ಬೇಕು ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Explain durable execution and why it needs an explicit state machine.",
  "Implement nodes that return updates and edges that route from state.",
  "Show why a per-field merge rule is needed.",
  "Recognise the limits of TypedDict at runtime.",
  "Bound cycles and keep nodes replay-safe."
 ],
 "objectivesKn": [
  "Durable execution ಮತ್ತು ಅದಕ್ಕೆ ಸ್ಪಷ್ಟ state machine ಏಕೆ ಬೇಕು ಎಂದು ವಿವರಿಸಿ.",
  "ಅಪ್‌ಡೇಟ್ ನೀಡುವ nodes ಮತ್ತು state ಯಿಂದ ಮಾರ್ಗ ಆರಿಸುವ edges ಅಳವಡಿಸಿ.",
  "ಪ್ರತಿ ಕ್ಷೇತ್ರಕ್ಕೆ ವಿಲೀನ ನಿಯಮ ಏಕೆ ಬೇಕು ಎಂದು ತೋರಿಸಿ.",
  "ರನ್‌ಟೈಮ್‌ನಲ್ಲಿ TypedDict ಮಿತಿಗಳನ್ನು ಗುರುತಿಸಿ.",
  "ಚಕ್ರಗಳಿಗೆ ಮಿತಿ ಹಾಕಿ ಮತ್ತು nodes ಅನ್ನು replay-ಸುರಕ್ಷಿತವಾಗಿಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Stateful Graph Orchestration: Durable Execution and Checkpoints (Part 1 of 3)",
    "textKn": "Stateful Graph Orchestration: Durable Execution ಮತ್ತು Checkpoints (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: typed state, nodes, direct and conditional edges, and the state-machine model. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib graph engine, a teaching model of the idea behind LangGraph, not the LangGraph library. The run() loop here has no checkpointing yet; Part 2 adds it. A step budget is added so cycles cannot run forever. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಟೈಪ್ ಮಾಡಿದ state, nodes, ನೇರ ಮತ್ತು ಷರತ್ತಿನ edges, ಮತ್ತು state-machine ಮಾದರಿ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ನಮ್ಮದೇ stdlib graph ಎಂಜಿನ್, LangGraph ಹಿಂದಿನ ಕಲ್ಪನೆಯ ಬೋಧನಾ ಮಾದರಿ, LangGraph ಲೈಬ್ರರಿ ಅಲ್ಲ. ಇಲ್ಲಿನ run() ಚಕ್ರಕ್ಕೆ ಇನ್ನೂ checkpointing ಇಲ್ಲ; ಭಾಗ 2 ಅದನ್ನು ಸೇರಿಸುತ್ತದೆ. ಚಕ್ರಗಳು ಶಾಶ್ವತವಾಗಿ ಚಲಿಸದಂತೆ step budget ಸೇರಿಸಲಾಗಿದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Why a Graph With State",
    "textKn": "State ಇರುವ Graph ಏಕೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The 40-Step Problem",
    "headingKn": "40-ಹೆಜ್ಜೆ ಸಮಸ್ಯೆ",
    "bodyEn": "Imagine a 40-step agent run that fails at step 38. If the process simply restarts, the 37 successful steps repeat, with their API calls, model calls, file writes and minutes of compute. What you want is to restore the state after step 37 and carry on from step 38. That is durable execution, and it needs the agent to be a state machine: typed state, nodes that do work, edges that choose what happens next, and a checkpoint saved after each successful node.",
    "bodyKn": "40-ಹೆಜ್ಜೆ agent ಓಟ ಹೆಜ್ಜೆ 38 ರಲ್ಲಿ ವಿಫಲವಾಗುತ್ತದೆ ಎಂದು ಊಹಿಸಿ. ಪ್ರಕ್ರಿಯೆ ಸುಮ್ಮನೆ ಮರುಆರಂಭವಾದರೆ 37 ಯಶಸ್ವಿ ಹೆಜ್ಜೆಗಳು ಅವುಗಳ API ಕರೆಗಳು, ಮಾದರಿ ಕರೆಗಳು, ಫೈಲ್ ಬರವಣಿಗೆಗಳು ಮತ್ತು ನಿಮಿಷಗಳ ಲೆಕ್ಕಾಚಾರದೊಂದಿಗೆ ಪುನರಾವರ್ತನೆಯಾಗುತ್ತವೆ. ನಿಮಗೆ ಬೇಕಾದದ್ದು ಹೆಜ್ಜೆ 37 ರ ನಂತರದ state ಮರುಸ್ಥಾಪಿಸಿ ಹೆಜ್ಜೆ 38 ರಿಂದ ಮುಂದುವರಿಯುವುದು. ಅದೇ durable execution, ಮತ್ತು ಅದಕ್ಕೆ agent state machine ಆಗಿರಬೇಕು: ಟೈಪ್ ಮಾಡಿದ state, ಕೆಲಸ ಮಾಡುವ nodes, ಮುಂದೇನು ಎಂದು ಆರಿಸುವ edges, ಮತ್ತು ಪ್ರತಿ ಯಶಸ್ವಿ node ನ ನಂತರ ಉಳಿಸಿದ checkpoint."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The State Graph",
    "headingKn": "State Graph",
    "svgCode": "<svg viewBox=\"0 0 300 215\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"215\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">State graph with a checkpoint after every node</text>\n  <rect x=\"100\" y=\"22\" width=\"100\" height=\"18\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"34\" fill=\"#93c5fd\" text-anchor=\"middle\">classify</text>\n  <path d=\"M150,40 V50\" stroke=\"#475569\"/><text x=\"168\" y=\"48\" fill=\"#94a3b8\" font-size=\"6\">checkpoint 1</text>\n  <path d=\"M150,50 L60,64 M150,50 V64 M150,50 L240,64\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"64\" width=\"80\" height=\"18\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"60\" y=\"76\" fill=\"#6ee7b7\" text-anchor=\"middle\">refund</text>\n  <rect x=\"110\" y=\"64\" width=\"80\" height=\"18\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"76\" fill=\"#6ee7b7\" text-anchor=\"middle\">bug</text>\n  <rect x=\"200\" y=\"64\" width=\"80\" height=\"18\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"240\" y=\"76\" fill=\"#6ee7b7\" text-anchor=\"middle\">sales</text>\n  <path d=\"M60,82 L130,100 M150,82 V100 M240,82 L170,100\" stroke=\"#475569\"/>\n  <rect x=\"100\" y=\"100\" width=\"100\" height=\"18\" rx=\"4\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"112\" fill=\"#fde68a\" text-anchor=\"middle\">human_gate (pause)</text>\n  <path d=\"M150,118 V130\" stroke=\"#475569\"/><text x=\"168\" y=\"128\" fill=\"#94a3b8\" font-size=\"6\">checkpoint 3</text>\n  <rect x=\"100\" y=\"130\" width=\"100\" height=\"18\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"142\" fill=\"#93c5fd\" text-anchor=\"middle\">send</text>\n  <rect x=\"20\" y=\"162\" width=\"260\" height=\"38\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/>\n  <text x=\"150\" y=\"176\" fill=\"#c4b5fd\" text-anchor=\"middle\">checkpoint = state + last completed node + next node</text>\n  <text x=\"150\" y=\"190\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">a failed node writes nothing; resume loads the last one and continues</text>\n</svg>",
    "captionEn": "Nodes do work, edges choose the next node from state, and each completed node produces a checkpoint.",
    "captionKn": "Nodes ಕೆಲಸ ಮಾಡುತ್ತವೆ, edges state ಯಿಂದ ಮುಂದಿನ node ಆರಿಸುತ್ತವೆ, ಮತ್ತು ಪ್ರತಿ ಪೂರ್ಣಗೊಂಡ node checkpoint ಉತ್ಪಾದಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Four components",
    "headingKn": "ನಾಲ್ಕು ಘಟಕಗಳು",
    "headers": [
     "Component",
     "Role",
     "Example"
    ],
    "rows": [
     [
      "State",
      "Everything the run currently knows",
      "messages, step, route, output, human_approval"
     ],
     [
      "Node",
      "One unit of work: state in, update out",
      "classify_node returns {route, step}"
     ],
     [
      "Edge",
      "Chooses the next node",
      "classify to refund, bug or sales by state"
     ],
     [
      "Checkpoint",
      "Persisted state plus control position",
      "Part 2"
     ]
    ]
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Nodes Return Updates; Edges Choose",
    "headingKn": "Nodes ಅಪ್‌ಡೇಟ್ ನೀಡುತ್ತವೆ; Edges ಆರಿಸುತ್ತವೆ",
    "bodyEn": "A node is a function from state to an update dictionary, not a full new state, so you can see exactly what changed. Routing is deliberately kept out of nodes: classify_node writes route into state and a conditional edge reads it to pick refund, bug or sales. Work and control stay separate, so topology can be inspected on its own. One cycle is also allowed (generate, grade, rewrite), which is why a general graph is not a DAG.",
    "bodyKn": "Node state ನಿಂದ ಅಪ್‌ಡೇಟ್ ನಿಘಂಟಿಗೆ ಕಾರ್ಯ, ಪೂರ್ಣ ಹೊಸ state ಅಲ್ಲ, ಆದ್ದರಿಂದ ಏನು ಬದಲಾಯಿತು ಎಂದು ನಿಖರವಾಗಿ ನೋಡಬಹುದು. ಮಾರ್ಗನಿರ್ದೇಶನವನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ nodes ಹೊರಗೆ ಇಡಲಾಗಿದೆ: classify_node route ಅನ್ನು state ಗೆ ಬರೆಯುತ್ತದೆ ಮತ್ತು ಷರತ್ತಿನ edge ಅದನ್ನು ಓದಿ refund, bug ಅಥವಾ sales ಆರಿಸುತ್ತದೆ. ಕೆಲಸ ಮತ್ತು ನಿಯಂತ್ರಣ ಪ್ರತ್ಯೇಕ, ಆದ್ದರಿಂದ topology ಅನ್ನು ಸ್ವತಂತ್ರವಾಗಿ ಪರಿಶೀಲಿಸಬಹುದು. ಒಂದು ಚಕ್ರವೂ ಅನುಮತಿಸಲ್ಪಟ್ಟಿದೆ (generate, grade, rewrite), ಅದಕ್ಕಾಗಿ ಸಾಮಾನ್ಯ graph DAG ಅಲ್ಲ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Engine",
    "textKn": "ಎಂಜಿನ್",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "lg_1.py",
    "headingEn": "AgentState, StateGraph and the support nodes",
    "headingKn": "AgentState, StateGraph ಮತ್ತು ಬೆಂಬಲ nodes",
    "descEn": "StateGraph holds three registries: nodes, direct edges and conditional edges. next_node asks the chooser function for a route and looks it up in the routes map, raising a ValueError for an unknown route. run() copies the initial state, then loops: run the node, apply the update, choose the next node, until there is none or the step budget is exceeded.",
    "descKn": "StateGraph ಮೂರು ನೋಂದಣಿಗಳನ್ನು ಹೊಂದಿದೆ: nodes, ನೇರ edges ಮತ್ತು ಷರತ್ತಿನ edges. next_node chooser ಕಾರ್ಯದಿಂದ route ಕೇಳಿ ಅದನ್ನು routes ನಕ್ಷೆಯಲ್ಲಿ ಹುಡುಕುತ್ತದೆ, ಅಜ್ಞಾತ route ಗೆ ValueError ಎತ್ತುತ್ತದೆ. run() ಆರಂಭಿಕ state ನಕಲಿಸಿ, ನಂತರ ಚಕ್ರ ನಡೆಸುತ್ತದೆ: node ಚಲಾಯಿಸು, ಅಪ್‌ಡೇಟ್ ಅನ್ವಯಿಸು, ಮುಂದಿನ node ಆರಿಸು, ಯಾವುದೂ ಇಲ್ಲದವರೆಗೆ ಅಥವಾ step budget ಮೀರುವವರೆಗೆ.",
    "code": "class AgentState(TypedDict):\n    messages: list\n    step: int\n    route: str\n    output: str\n    human_approval: bool\n\n\nNode = Callable\n\n\nclass StateGraph:\n    def __init__(self):\n        self.nodes, self.edges, self.conditional_edges = {}, {}, {}\n\n    def add_node(self, name, node):\n        if name in self.nodes:\n            raise ValueError(f\"Node already exists: {name}\")\n        self.nodes[name] = node\n\n    def add_edge(self, source, target):\n        self.edges[source] = target\n\n    def add_conditional_edges(self, source, chooser, routes):\n        self.conditional_edges[source] = (chooser, routes)\n\n    def next_node(self, current, state):\n        if current in self.conditional_edges:\n            chooser, routes = self.conditional_edges[current]\n            route = chooser(state)\n            if route not in routes:\n                raise ValueError(f\"Unknown route {route!r} from node {current!r}\")\n            return routes[route]\n        return self.edges.get(current)\n\n    def run(self, start, initial_state, max_steps=50, trace=None):\n        state, current, steps = deepcopy(initial_state), start, 0\n        while current is not None:\n            steps += 1\n            if steps > max_steps:\n                raise RuntimeError(f\"step budget of {max_steps} exceeded at node {current!r}\")\n            if trace is not None:\n                trace.append(current)\n            update = self.nodes[current](state)\n            state.update(update)\n            current = self.next_node(current, state)\n        return state\n\n\ndef classify_node(state):\n    message = state[\"messages\"][-1].lower()\n    if \"refund\" in message or \"charged\" in message:\n        route = \"refund\"\n    elif \"bug\" in message or \"error\" in message:\n        route = \"bug\"\n    else:\n        route = \"sales\"\n    return {\"route\": route, \"step\": state[\"step\"] + 1}\n\n\ndef choose_route(state):\n    return state[\"route\"]\n\n\ndef refund_node(state):\n    return {\"output\": \"Refund request prepared and awaiting approval.\", \"step\": state[\"step\"] + 1}\n\n\ndef bug_node(state):\n    return {\"output\": \"Bug report prepared for the engineering queue.\", \"step\": state[\"step\"] + 1}\n\n\ndef sales_node(state):\n    return {\"output\": \"Sales inquiry prepared for follow-up.\", \"step\": state[\"step\"] + 1}\n\n\ndef build():\n    g = StateGraph()\n    for name, fn in ((\"classify\", classify_node), (\"refund\", refund_node), (\"bug\", bug_node), (\"sales\", sales_node)):\n        g.add_node(name, fn)\n    g.add_conditional_edges(\"classify\", choose_route, {\"refund\": \"refund\", \"bug\": \"bug\", \"sales\": \"sales\"})\n    return g"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "lg_1.py",
    "headingEn": "main(): seven experiments",
    "headingKn": "main(): ಏಳು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs three requests through the same graph, checks the caller's state is untouched, shows why update() is not a reducer, shows that TypedDict does not stop a typo at runtime, forces an unknown route, runs a random node repeatedly, and bounds a cycle.",
    "descKn": "main() ಅದೇ graph ಮೂಲಕ ಮೂರು ವಿನಂತಿಗಳನ್ನು ಚಲಾಯಿಸುತ್ತದೆ, ಕರೆಯುವವರ state ಮುಟ್ಟಲಾಗಿಲ್ಲ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ, update() reducer ಅಲ್ಲ ಏಕೆ ಎಂದು ತೋರಿಸುತ್ತದೆ, TypedDict ರನ್‌ಟೈಮ್‌ನಲ್ಲಿ ಮುದ್ರಣದೋಷ ತಡೆಯುವುದಿಲ್ಲ ಎಂದು ತೋರಿಸುತ್ತದೆ, ಅಜ್ಞಾತ route ಒತ್ತಾಯಿಸುತ್ತದೆ, ಯಾದೃಚ್ಛಿಕ node ಪದೇ ಪದೇ ಚಲಾಯಿಸುತ್ತದೆ, ಮತ್ತು ಚಕ್ರಕ್ಕೆ ಮಿತಿ ಹಾಕುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    g = build()\n\n    section(\"1. Same graph, different state, different path\")\n    for text in (\"I was charged twice and need a refund.\", \"The app shows an error on startup.\", \"Do you have a team plan?\"):\n        trace = []\n        out = g.run(\"classify\", fresh(text), trace=trace)\n        print(f\"{text!r:<42} path={trace} step={out['step']}\")\n        print(f\"   output: {out['output']}\")\n\n    section(\"2. The runner works on a copy of the caller's state\")\n    initial = fresh(\"I need a refund\")\n    g.run(\"classify\", initial)\n    print(\"initial state after the run:\", initial)\n\n    section(\"3. Genuinely checking: dict.update replaces, it does not accumulate\")\n    state = fresh(\"User: hello\")\n    update = {\"messages\": [\"Agent: hi\"]}\n    merged = dict(state)\n    merged.update(update)\n    print(\"before:\", state[\"messages\"], \"| update:\", update[\"messages\"])\n    print(\"after state.update():\", merged[\"messages\"], \"(the user's message is gone)\")\n    print(\"an append reducer is needed to get:\", state[\"messages\"] + update[\"messages\"])\n\n    section(\"4. Genuinely checking: TypedDict is a contract for tools, not for the runtime\")\n    g2 = StateGraph()\n    g2.add_node(\"typo\", lambda s: {\"routing\": \"refund\", \"step\": s[\"step\"] + 1})\n    out = g2.run(\"typo\", fresh(\"x\"))\n    print(\"a node returned a misspelled key 'routing':\", {k: out[k] for k in (\"route\", \"routing\") if k in out})\n    print(\"no error was raised: 'route' stayed empty and a stray key appeared\")\n\n    section(\"5. Genuinely checking: an unknown route fails loudly\")\n    g3 = StateGraph()\n    g3.add_node(\"classify\", lambda s: {\"route\": \"payments\"})\n    g3.add_conditional_edges(\"classify\", choose_route, {\"refund\": \"refund\"})\n    try:\n        g3.run(\"classify\", fresh(\"x\"))\n    except ValueError as e:\n        print(\"ValueError:\", e)\n\n    section(\"6. Genuinely checking: a random node makes replay unreliable\")\n    rng = random.Random()\n    g4 = StateGraph()\n    g4.add_node(\"pick\", lambda s: {\"route\": rng.choice([\"refund\", \"bug\", \"sales\"])})\n    picks = [g4.run(\"pick\", fresh(\"x\"))[\"route\"] for _ in range(8)]\n    print(\"8 runs of the same node on the same state:\", picks)\n    print(\"a resumed workflow would not take the same branch; capture the choice in state instead\")\n\n    section(\"7. Cycles need a budget\")\n    g5 = StateGraph()\n    g5.add_node(\"generate\", lambda s: {\"step\": s[\"step\"] + 1})\n    g5.add_node(\"grade\", lambda s: {\"route\": \"fail\"})\n    g5.add_edge(\"generate\", \"grade\")\n    g5.add_conditional_edges(\"grade\", choose_route, {\"fail\": \"generate\", \"pass\": None})\n    try:\n        g5.run(\"generate\", fresh(\"x\"), max_steps=10)\n    except RuntimeError as e:\n        print(\"RuntimeError:\", e)\n    g5.nodes[\"grade\"] = lambda s: {\"route\": \"pass\" if s[\"step\"] >= 3 else \"fail\"}\n    trace = []\n    out = g5.run(\"generate\", fresh(\"x\"), trace=trace)\n    print(\"with a grader that passes at step 3:\", trace, \"| step\", out[\"step\"])"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Same graph, different state, different path ---\n'I was charged twice and need a refund.'   path=['classify', 'refund'] step=2\n   output: Refund request prepared and awaiting approval.\n'The app shows an error on startup.'       path=['classify', 'bug'] step=2\n   output: Bug report prepared for the engineering queue.\n'Do you have a team plan?'                 path=['classify', 'sales'] step=2\n   output: Sales inquiry prepared for follow-up.\n\n--- 2. The runner works on a copy of the caller's state ---\ninitial state after the run: {'messages': ['I need a refund'], 'step': 0, 'route': '', 'output': '', 'human_approval': False}\n\n--- 3. Genuinely checking: dict.update replaces, it does not accumulate ---\nbefore: ['User: hello'] | update: ['Agent: hi']\nafter state.update(): ['Agent: hi'] (the user's message is gone)\nan append reducer is needed to get: ['User: hello', 'Agent: hi']\n\n--- 4. Genuinely checking: TypedDict is a contract for tools, not for the runtime ---\na node returned a misspelled key 'routing': {'route': '', 'routing': 'refund'}\nno error was raised: 'route' stayed empty and a stray key appeared\n\n--- 5. Genuinely checking: an unknown route fails loudly ---\nValueError: Unknown route 'payments' from node 'classify'\n\n--- 6. Genuinely checking: a random node makes replay unreliable ---\n8 runs of the same node on the same state: ['refund', 'refund', 'bug', 'refund', 'refund', 'refund', 'bug', 'bug']\na resumed workflow would not take the same branch; capture the choice in state instead\n\n--- 7. Cycles need a budget ---\nRuntimeError: step budget of 10 exceeded at node 'generate'\nwith a grader that passes at step 3: ['generate', 'grade', 'generate', 'grade', 'generate', 'grade'] | step 3"
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
    "headingEn": "Same Graph, Different Path",
    "headingKn": "ಅದೇ Graph, ಬೇರೆ ದಾರಿ",
    "bodyEn": "Section 1 sends a refund request, a bug report and a sales question through one graph. The paths are classify then refund, classify then bug, and classify then sales, each ending at step 2. The topology never changed; the state changed the route. Section 2 confirms the caller's initial state is untouched because the runner works on a copy.",
    "bodyKn": "ವಿಭಾಗ 1 ಹಣ ಮರುಪಾವತಿ ವಿನಂತಿ, ದೋಷ ವರದಿ ಮತ್ತು ಮಾರಾಟ ಪ್ರಶ್ನೆಯನ್ನು ಒಂದೇ graph ಮೂಲಕ ಕಳುಹಿಸುತ್ತದೆ. ದಾರಿಗಳು classify ನಂತರ refund, classify ನಂತರ bug, ಮತ್ತು classify ನಂತರ sales, ಪ್ರತಿಯೊಂದೂ ಹೆಜ್ಜೆ 2 ರಲ್ಲಿ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ. Topology ಎಂದೂ ಬದಲಾಗಲಿಲ್ಲ; state route ಬದಲಿಸಿತು. ವಿಭಾಗ 2 runner ನಕಲಿನ ಮೇಲೆ ಕೆಲಸ ಮಾಡುವುದರಿಂದ ಕರೆಯುವವರ ಆರಂಭಿಕ state ಮುಟ್ಟಲಾಗಿಲ್ಲ ಎಂದು ದೃಢಪಡಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: update() Silently Drops Messages",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: update() ಸಂದೇಶಗಳನ್ನು ಮೌನವಾಗಿ ಬಿಡುತ್ತದೆ",
    "bodyEn": "Section 3 merges {messages: [Agent: hi]} into a state whose messages are [User: hello] with dict.update(). The result is [Agent: hi]; the user's message is gone. Replacement is right for route or step and wrong for a conversation. A graph needs a per-field merge rule, a reducer, which Part 2 adds.",
    "bodyKn": "ವಿಭಾಗ 3 {messages: [Agent: hi]} ಅನ್ನು messages [User: hello] ಇರುವ state ಗೆ dict.update() ನಿಂದ ವಿಲೀನಗೊಳಿಸುತ್ತದೆ. ಫಲಿತಾಂಶ [Agent: hi]; ಬಳಕೆದಾರರ ಸಂದೇಶ ಹೋಗಿದೆ. ಬದಲಿ route ಅಥವಾ step ಗೆ ಸರಿ ಮತ್ತು ಸಂಭಾಷಣೆಗೆ ತಪ್ಪು. Graph ಗೆ ಪ್ರತಿ ಕ್ಷೇತ್ರಕ್ಕೆ ವಿಲೀನ ನಿಯಮ, reducer, ಬೇಕು, ಭಾಗ 2 ಅದನ್ನು ಸೇರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: TypedDict Is Not Runtime Validation",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: TypedDict ರನ್‌ಟೈಮ್ ಮಾನ್ಯತೆ ಅಲ್ಲ",
    "bodyEn": "Section 4: a node returns a misspelled key, routing instead of route. No error is raised; route stays empty and a stray key appears in the state. TypedDict documents the contract for type checkers, but the runtime engine accepts any dictionary. If the state schema matters, validate updates against it when merging. An unknown route, by contrast, fails loudly with a clear ValueError (section 5).",
    "bodyKn": "ವಿಭಾಗ 4: ಒಂದು node route ಬದಲು routing ಎಂಬ ತಪ್ಪಾದ key ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ಯಾವುದೇ ದೋಷ ಎತ್ತುವುದಿಲ್ಲ; route ಖಾಲಿಯಾಗಿ ಉಳಿದು ಅನಗತ್ಯ key state ನಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ. TypedDict type checkers ಗೆ ಒಪ್ಪಂದ ದಾಖಲಿಸುತ್ತದೆ, ಆದರೆ ರನ್‌ಟೈಮ್ ಎಂಜಿನ್ ಯಾವುದೇ ನಿಘಂಟನ್ನು ಸ್ವೀಕರಿಸುತ್ತದೆ. State schema ಮುಖ್ಯವಾದರೆ ವಿಲೀನ ಸಮಯದಲ್ಲಿ ಅಪ್‌ಡೇಟ್‌ಗಳನ್ನು ಅದರ ವಿರುದ್ಧ ಮಾನ್ಯ ಮಾಡಿ. ಅಜ್ಞಾತ route, ಇದಕ್ಕೆ ವಿರುದ್ಧವಾಗಿ, ಸ್ಪಷ್ಟ ValueError ನೊಂದಿಗೆ ಜೋರಾಗಿ ವಿಫಲವಾಗುತ್ತದೆ (ವಿಭಾಗ 5)."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Replay Needs Deterministic Nodes, and Cycles Need Budgets",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Replay ಗೆ ನಿರ್ಧಾರಾತ್ಮಕ Nodes, ಚಕ್ರಗಳಿಗೆ Budgets",
    "bodyEn": "Section 6 runs a node that picks a route with random.choice eight times on the same state and gets different routes: sales, refund, refund, bug and so on. A resumed workflow would branch differently from the original, so any nondeterministic choice that matters later must be captured in state, along with wall-clock times and tool results. Section 7: a grader that always fails makes generate and grade loop until the step budget raises \"step budget of 10 exceeded\"; a grader that passes at step 3 ends the loop after three rounds. A durable loop without a budget is a durable infinite loop.",
    "bodyKn": "ವಿಭಾಗ 6 random.choice ನಿಂದ route ಆರಿಸುವ node ಅನ್ನು ಅದೇ state ಮೇಲೆ ಎಂಟು ಬಾರಿ ಚಲಾಯಿಸಿ ಬೇರೆ ಬೇರೆ routes ಪಡೆಯುತ್ತದೆ: sales, refund, refund, bug ಇತ್ಯಾದಿ. ಮರುಪ್ರಾರಂಭಿಸಿದ workflow ಮೂಲಕ್ಕಿಂತ ಬೇರೆ ಶಾಖೆಯಲ್ಲಿ ಹೋಗುತ್ತಿತ್ತು, ಆದ್ದರಿಂದ ನಂತರ ಮುಖ್ಯವಾಗುವ ಯಾವುದೇ ನಿರ್ಧಾರಾತ್ಮಕವಲ್ಲದ ಆಯ್ಕೆಯನ್ನು, ಗೋಡೆ-ಗಡಿಯಾರ ಸಮಯ ಮತ್ತು tool ಫಲಿತಾಂಶಗಳ ಜೊತೆ, state ನಲ್ಲಿ ಸೆರೆಹಿಡಿಯಬೇಕು. ವಿಭಾಗ 7: ಯಾವಾಗಲೂ ವಿಫಲವಾಗುವ grader generate ಮತ್ತು grade ಅನ್ನು step budget \"step budget of 10 exceeded\" ಎತ್ತುವವರೆಗೆ ಚಕ್ರ ನಡೆಸುತ್ತದೆ; ಹೆಜ್ಜೆ 3 ರಲ್ಲಿ ಪಾಸಾಗುವ grader ಮೂರು ಸುತ್ತಿನ ನಂತರ ಚಕ್ರ ಮುಗಿಸುತ್ತದೆ. Budget ಇಲ್ಲದ ಸ್ಥಿರ ಚಕ್ರ ಸ್ಥಿರ ಅನಂತ ಚಕ್ರ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A graph makes the control flow of an agent visible and testable instead of hidden in one long loop. It also creates natural boundaries for streaming progress, pausing for a human, tracing and checkpointing.",
    "bodyKn": "Graph ಒಂದು ಉದ್ದದ ಚಕ್ರದಲ್ಲಿ ಅಡಗಿಸುವ ಬದಲು agent ನ ನಿಯಂತ್ರಣ ಹರಿವನ್ನು ಗೋಚರ ಮತ್ತು ಪರೀಕ್ಷಿಸಬಹುದಾಗಿಸುತ್ತದೆ. ಅದು ಪ್ರಗತಿ ಸ್ಟ್ರೀಮಿಂಗ್, ಮಾನವನಿಗಾಗಿ ವಿರಾಮ, ಟ್ರೇಸಿಂಗ್ ಮತ್ತು checkpointing ಗೆ ಸಹಜ ಗಡಿಗಳನ್ನೂ ಸೃಷ್ಟಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a graph is just a pipeline.\" A pipeline runs the same path every time; a state graph chooses its path from state and can loop.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"graph ಕೇವಲ pipeline.\" Pipeline ಪ್ರತಿ ಬಾರಿ ಅದೇ ದಾರಿ ಚಲಿಸುತ್ತದೆ; state graph ತನ್ನ ದಾರಿಯನ್ನು state ಯಿಂದ ಆರಿಸುತ್ತದೆ ಮತ್ತು ಚಕ್ರ ನಡೆಸಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "State: shared execution data. Node: a function returning an update. Edge: a transition. Conditional edge: transition chosen from state. Reducer: how an update merges into state. Step budget: a cap on node executions. Durable execution: continuing a logical run after interruption.",
    "bodyKn": "State: ಹಂಚಿಕೆಯ ಚಲಾವಣೆ ದತ್ತಾಂಶ. Node: ಅಪ್‌ಡೇಟ್ ಹಿಂತಿರುಗಿಸುವ ಕಾರ್ಯ. Edge: ಪರಿವರ್ತನೆ. ಷರತ್ತಿನ edge: state ಯಿಂದ ಆರಿಸಿದ ಪರಿವರ್ತನೆ. Reducer: ಅಪ್‌ಡೇಟ್ state ಗೆ ವಿಲೀನವಾಗುವ ವಿಧಾನ. Step budget: node ಚಲಾವಣೆಗಳ ಮಿತಿ. Durable execution: ಅಡಚಣೆಯ ನಂತರ ತಾರ್ಕಿಕ ಓಟ ಮುಂದುವರಿಸುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Model an agent as typed state, nodes, edges and checkpoints. 2) Nodes return updates and edges choose, so work and control are separate. 3) dict.update dropped a user message, so merging needs reducers. 4) TypedDict did not catch a typo at runtime. 5) An unknown route fails loudly. 6) A random node branched differently on replay. 7) Bound every cycle with a budget.",
    "bodyKn": "1) Agent ಅನ್ನು ಟೈಪ್ ಮಾಡಿದ state, nodes, edges ಮತ್ತು checkpoints ಆಗಿ ಮಾದರಿ ಮಾಡಿ. 2) Nodes ಅಪ್‌ಡೇಟ್ ನೀಡುತ್ತವೆ, edges ಆರಿಸುತ್ತವೆ, ಆದ್ದರಿಂದ ಕೆಲಸ ಮತ್ತು ನಿಯಂತ್ರಣ ಪ್ರತ್ಯೇಕ. 3) dict.update ಬಳಕೆದಾರ ಸಂದೇಶ ಬಿಟ್ಟಿತು, ಆದ್ದರಿಂದ ವಿಲೀನಕ್ಕೆ reducers ಬೇಕು. 4) TypedDict ರನ್‌ಟೈಮ್‌ನಲ್ಲಿ ಮುದ್ರಣದೋಷ ಹಿಡಿಯಲಿಲ್ಲ. 5) ಅಜ್ಞಾತ route ಜೋರಾಗಿ ವಿಫಲ. 6) ಯಾದೃಚ್ಛಿಕ node replay ನಲ್ಲಿ ಬೇರೆ ಶಾಖೆಗೆ ಹೋಯಿತು. 7) ಪ್ರತಿ ಚಕ್ರಕ್ಕೆ budget ಹಾಕಿ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What is the fundamental abstraction of a stateful graph?",
      "qKn": "Stateful graph ನ ಮೂಲಭೂತ ಅಮೂರ್ತತೆ ಯಾವುದು?",
      "opts": [
       "A vector database attached to an LLM",
       "Typed state flowing through function nodes connected by edges",
       "A single recursive model call",
       "A collection of prompts with no state"
      ],
      "optsKn": [
       "LLM ಗೆ ಜೋಡಿಸಿದ vector ಡೇಟಾಬೇಸ್",
       "Edges ನಿಂದ ಜೋಡಿಸಿದ ಕಾರ್ಯ nodes ಮೂಲಕ ಹರಿಯುವ ಟೈಪ್ ಮಾಡಿದ state",
       "ಒಂದು ಪುನರಾವರ್ತಕ ಮಾದರಿ ಕರೆ",
       "state ಇಲ್ಲದ prompts ಸಂಗ್ರಹ"
      ],
      "correct": 1
     },
     {
      "q": "What does a node return in this engine?",
      "qKn": "ಈ ಎಂಜಿನ್‌ನಲ್ಲಿ node ಏನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ?",
      "opts": [
       "The next node name",
       "An update dictionary that is merged into state",
       "The whole graph",
       "An HTTP code"
      ],
      "optsKn": [
       "ಮುಂದಿನ node ಹೆಸರು",
       "state ಗೆ ವಿಲೀನವಾಗುವ ಅಪ್‌ಡೇಟ್ ನಿಘಂಟು",
       "ಇಡೀ graph",
       "ಒಂದು HTTP ಕೋಡ್"
      ],
      "correct": 1
     },
     {
      "q": "Why did dict.update lose the user's message in the lab?",
      "qKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ dict.update ಬಳಕೆದಾರರ ಸಂದೇಶವನ್ನು ಏಕೆ ಕಳೆಯಿತು?",
      "opts": [
       "It has a bug",
       "It replaces a key's value, and messages need an append rule",
       "Lists cannot be merged",
       "Python copied it"
      ],
      "optsKn": [
       "ಅದಕ್ಕೆ ದೋಷವಿದೆ",
       "ಅದು key ಮೌಲ್ಯ ಬದಲಿಸುತ್ತದೆ, ಮತ್ತು messages ಗೆ append ನಿಯಮ ಬೇಕು",
       "ಪಟ್ಟಿಗಳನ್ನು ವಿಲೀನಗೊಳಿಸಲಾಗದು",
       "Python ನಕಲಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "A node returned {\"routing\": \"refund\"} instead of {\"route\": \"refund\"}. What happened?",
      "qKn": "Node {\"route\": \"refund\"} ಬದಲು {\"routing\": \"refund\"} ಹಿಂತಿರುಗಿಸಿತು. ಏನಾಯಿತು?",
      "opts": [
       "A TypeError",
       "No error; route stayed empty and a stray key appeared",
       "The graph restarted",
       "The engine corrected it"
      ],
      "optsKn": [
       "TypeError",
       "ದೋಷ ಇಲ್ಲ; route ಖಾಲಿಯಾಗಿ ಉಳಿಯಿತು ಮತ್ತು ಅನಗತ್ಯ key ಕಾಣಿಸಿತು",
       "Graph ಮರುಆರಂಭವಾಯಿತು",
       "ಎಂಜಿನ್ ಅದನ್ನು ಸರಿಪಡಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why should a nondeterministic node result be stored in state?",
      "qKn": "ನಿರ್ಧಾರಾತ್ಮಕವಲ್ಲದ node ಫಲಿತಾಂಶವನ್ನು state ನಲ್ಲಿ ಏಕೆ ಸಂಗ್ರಹಿಸಬೇಕು?",
      "opts": [
       "To save memory",
       "A resumed run would otherwise recompute it and could take a different branch",
       "To speed up Python",
       "Because TypedDict requires it"
      ],
      "optsKn": [
       "ಮೆಮೊರಿ ಉಳಿಸಲು",
       "ಇಲ್ಲದಿದ್ದರೆ ಮರುಪ್ರಾರಂಭಿಸಿದ ಓಟ ಅದನ್ನು ಮರುಲೆಕ್ಕಹಾಕಿ ಬೇರೆ ಶಾಖೆಗೆ ಹೋಗಬಹುದು",
       "Python ವೇಗಗೊಳಿಸಲು",
       "TypedDict ಗೆ ಅದು ಬೇಕು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
