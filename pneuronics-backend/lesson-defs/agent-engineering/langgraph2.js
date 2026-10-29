module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321532",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Stateful Graph Orchestration: Durable Execution and Checkpoints (Part 2 of 3) — Reducers, Checkpoints and Resume",
 "titleKn": "Stateful Graph Orchestration: Durable Execution ಮತ್ತು Checkpoints (ಭಾಗ 2 / 3) — Reducers, Checkpoints ಮತ್ತು Resume",
 "desc": "Add reducers, a checkpoint after every successful node, failure boundaries, resume and a human gate, and find that serialization can fail after work is done and that JSON in memory is not persistence.",
 "descKn": "Reducers, ಪ್ರತಿ ಯಶಸ್ವಿ node ನಂತರ checkpoint, ವೈಫಲ್ಯ ಗಡಿಗಳು, resume ಮತ್ತು ಮಾನವ gate ಸೇರಿಸಿ, ಮತ್ತು ಕೆಲಸ ಮುಗಿದ ನಂತರ ಧಾರಾವಾಹಿ ವಿಫಲವಾಗಬಹುದು ಹಾಗೂ ಮೆಮೊರಿಯಲ್ಲಿನ JSON ಸ್ಥಿರತೆ ಅಲ್ಲ ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Implement per-field reducers.",
  "Save a checkpoint only after a node returns.",
  "Resume from the saved next node and show earlier nodes do not rerun.",
  "Implement a human gate with durable approval.",
  "Identify serialization and persistence pitfalls."
 ],
 "objectivesKn": [
  "ಪ್ರತಿ-ಕ್ಷೇತ್ರ reducers ಅಳವಡಿಸಿ.",
  "Node ಹಿಂತಿರುಗಿದ ನಂತರ ಮಾತ್ರ checkpoint ಉಳಿಸಿ.",
  "ಉಳಿಸಿದ ಮುಂದಿನ node ನಿಂದ resume ಮಾಡಿ ಮತ್ತು ಹಿಂದಿನ nodes ಮರುಚಲಿಸುವುದಿಲ್ಲ ಎಂದು ತೋರಿಸಿ.",
  "ಸ್ಥಿರ ಅನುಮೋದನೆ ಇರುವ ಮಾನವ gate ಅಳವಡಿಸಿ.",
  "ಧಾರಾವಾಹಿ ಮತ್ತು ಸ್ಥಿರತೆ ತೊಂದರೆಗಳನ್ನು ಗುರುತಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Stateful Graph Orchestration: Durable Execution and Checkpoints (Part 2 of 3)",
    "textKn": "Stateful Graph Orchestration: Durable Execution ಮತ್ತು Checkpoints (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: reducers, checkpoints saved after every node, failure boundaries, resume and a human gate. Every output below was genuinely produced by the lab file on Python 3.14.5. The checkpointer here serialises to JSON text but keeps it in process memory, exactly as the source did for this part; it demonstrates checkpoint semantics and is deliberately not durable. Part 3 uses a real database. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: reducers, ಪ್ರತಿ node ನಂತರ ಉಳಿಸುವ checkpoints, ವೈಫಲ್ಯ ಗಡಿಗಳು, resume ಮತ್ತು ಮಾನವ gate. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇಲ್ಲಿನ checkpointer JSON ಪಠ್ಯಕ್ಕೆ ಧಾರಾವಾಹಿ ಮಾಡಿ ಪ್ರಕ್ರಿಯೆ ಮೆಮೊರಿಯಲ್ಲಿ ಇಡುತ್ತದೆ, ಈ ಭಾಗಕ್ಕೆ ಮೂಲ ಮಾಡಿದಂತೆಯೇ; ಅದು checkpoint ಅರ್ಥ ತೋರಿಸುತ್ತದೆ ಮತ್ತು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಸ್ಥಿರವಲ್ಲ. ಭಾಗ 3 ನಿಜವಾದ ಡೇಟಾಬೇಸ್ ಬಳಸುತ್ತದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Reducers and Checkpoints",
    "textKn": "Reducers ಮತ್ತು Checkpoints",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Durable Cycle",
    "headingKn": "ಸ್ಥಿರ ಚಕ್ರ",
    "bodyEn": "The cycle is: run the node, merge its update with a reducer, choose the next node, save a checkpoint, advance. A checkpoint holds the state, the last completed node, the next node and a sequence number, so it says exactly what is committed and what remains. Because saving happens only after a node returns, a node that raises leaves the previous checkpoint authoritative. A checkpoint must never claim progress that did not happen.",
    "bodyKn": "ಚಕ್ರ: node ಚಲಾಯಿಸಿ, ಅದರ ಅಪ್‌ಡೇಟ್ ಅನ್ನು reducer ನಿಂದ ವಿಲೀನಗೊಳಿಸಿ, ಮುಂದಿನ node ಆರಿಸಿ, checkpoint ಉಳಿಸಿ, ಮುಂದುವರಿಯಿರಿ. Checkpoint state, ಕೊನೆಯ ಪೂರ್ಣಗೊಂಡ node, ಮುಂದಿನ node ಮತ್ತು ಅನುಕ್ರಮ ಸಂಖ್ಯೆ ಹೊಂದಿದೆ, ಆದ್ದರಿಂದ ಯಾವುದು commit ಆಗಿದೆ ಮತ್ತು ಯಾವುದು ಉಳಿದಿದೆ ಎಂದು ನಿಖರವಾಗಿ ಹೇಳುತ್ತದೆ. Node ಹಿಂತಿರುಗಿದ ನಂತರ ಮಾತ್ರ ಉಳಿಸುವುದರಿಂದ ದೋಷ ಎತ್ತುವ node ಹಿಂದಿನ checkpoint ಅನ್ನು ಅಧಿಕೃತವಾಗಿ ಉಳಿಸುತ್ತದೆ. Checkpoint ನಡೆಯದ ಪ್ರಗತಿಯನ್ನು ಎಂದೂ ಹೇಳಬಾರದು."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Checkpoint After Every Node",
    "headingKn": "ಪ್ರತಿ Node ನಂತರ Checkpoint",
    "svgCode": "<svg viewBox=\"0 0 300 215\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"215\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">State graph with a checkpoint after every node</text>\n  <rect x=\"100\" y=\"22\" width=\"100\" height=\"18\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"34\" fill=\"#93c5fd\" text-anchor=\"middle\">classify</text>\n  <path d=\"M150,40 V50\" stroke=\"#475569\"/><text x=\"168\" y=\"48\" fill=\"#94a3b8\" font-size=\"6\">checkpoint 1</text>\n  <path d=\"M150,50 L60,64 M150,50 V64 M150,50 L240,64\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"64\" width=\"80\" height=\"18\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"60\" y=\"76\" fill=\"#6ee7b7\" text-anchor=\"middle\">refund</text>\n  <rect x=\"110\" y=\"64\" width=\"80\" height=\"18\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"76\" fill=\"#6ee7b7\" text-anchor=\"middle\">bug</text>\n  <rect x=\"200\" y=\"64\" width=\"80\" height=\"18\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"240\" y=\"76\" fill=\"#6ee7b7\" text-anchor=\"middle\">sales</text>\n  <path d=\"M60,82 L130,100 M150,82 V100 M240,82 L170,100\" stroke=\"#475569\"/>\n  <rect x=\"100\" y=\"100\" width=\"100\" height=\"18\" rx=\"4\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"112\" fill=\"#fde68a\" text-anchor=\"middle\">human_gate (pause)</text>\n  <path d=\"M150,118 V130\" stroke=\"#475569\"/><text x=\"168\" y=\"128\" fill=\"#94a3b8\" font-size=\"6\">checkpoint 3</text>\n  <rect x=\"100\" y=\"130\" width=\"100\" height=\"18\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"142\" fill=\"#93c5fd\" text-anchor=\"middle\">send</text>\n  <rect x=\"20\" y=\"162\" width=\"260\" height=\"38\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/>\n  <text x=\"150\" y=\"176\" fill=\"#c4b5fd\" text-anchor=\"middle\">checkpoint = state + last completed node + next node</text>\n  <text x=\"150\" y=\"190\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">a failed node writes nothing; resume loads the last one and continues</text>\n</svg>",
    "captionEn": "Checkpoints 1 and 2 exist when the gate fails; resume starts at the gate, not at classify.",
    "captionKn": "Gate ವಿಫಲವಾದಾಗ checkpoints 1 ಮತ್ತು 2 ಇರುತ್ತವೆ; resume classify ನಿಂದಲ್ಲ, gate ನಿಂದ ಆರಂಭವಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Human-in-the-Loop as State",
    "headingKn": "State ಆಗಿ ಮಾನವ-ಚಕ್ರದಲ್ಲಿ",
    "bodyEn": "The human gate is a node that raises when human_approval is False. The checkpoint preserves everything, a person changes the durable state with update_state, and resume re-enters the gate, which validates the approval and lets the graph continue. Approval is data, not a control-flow hack: the gate runs again instead of the engine jumping to send. In this teaching engine the pause is a RuntimeError; production systems distinguish a deliberate interrupt from an unexpected failure.",
    "bodyKn": "ಮಾನವ gate human_approval False ಆದಾಗ ದೋಷ ಎತ್ತುವ node. Checkpoint ಎಲ್ಲವನ್ನೂ ಉಳಿಸುತ್ತದೆ, ವ್ಯಕ್ತಿ update_state ಮೂಲಕ ಸ್ಥಿರ state ಬದಲಿಸುತ್ತಾರೆ, ಮತ್ತು resume gate ಅನ್ನು ಮರುಪ್ರವೇಶಿಸುತ್ತದೆ, ಅದು ಅನುಮೋದನೆ ಮಾನ್ಯ ಮಾಡಿ graph ಮುಂದುವರಿಯಲು ಬಿಡುತ್ತದೆ. ಅನುಮೋದನೆ ದತ್ತಾಂಶ, ನಿಯಂತ್ರಣ-ಹರಿವಿನ ಹ್ಯಾಕ್ ಅಲ್ಲ: ಎಂಜಿನ್ send ಗೆ ಜಿಗಿಯುವ ಬದಲು gate ಮತ್ತೆ ಚಲಿಸುತ್ತದೆ. ಈ ಬೋಧನಾ ಎಂಜಿನ್‌ನಲ್ಲಿ ವಿರಾಮ RuntimeError; production ವ್ಯವಸ್ಥೆಗಳು ಉದ್ದೇಶಿತ interrupt ಮತ್ತು ಅನಿರೀಕ್ಷಿತ ವೈಫಲ್ಯವನ್ನು ಬೇರ್ಪಡಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Durable Engine",
    "textKn": "ಸ್ಥಿರ ಎಂಜಿನ್ ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "lg_2.py",
    "headingEn": "Reducers, MemoryCheckpointer and the durable StateGraph",
    "headingKn": "Reducers, MemoryCheckpointer ಮತ್ತು ಸ್ಥಿರ StateGraph",
    "descEn": "replace_reducer and append_reducer define merge semantics, and set_reducer attaches one to a field, with replacement as the default. MemoryCheckpointer serialises with json.dumps. _execute is the heart: run, merge, choose next, save, advance, with run() and resume() both calling it. resume() restores the saved state and starts at next_node.",
    "descKn": "replace_reducer ಮತ್ತು append_reducer ವಿಲೀನ ಅರ್ಥ ವ್ಯಾಖ್ಯಾನಿಸುತ್ತವೆ, ಮತ್ತು set_reducer ಒಂದನ್ನು ಕ್ಷೇತ್ರಕ್ಕೆ ಜೋಡಿಸುತ್ತದೆ, ಬದಲಿ ಡೀಫಾಲ್ಟ್. MemoryCheckpointer json.dumps ನಿಂದ ಧಾರಾವಾಹಿ ಮಾಡುತ್ತದೆ. _execute ಹೃದಯ: ಚಲಾಯಿಸು, ವಿಲೀನಿಸು, ಮುಂದಿನದು ಆರಿಸು, ಉಳಿಸು, ಮುಂದುವರಿ, run() ಮತ್ತು resume() ಎರಡೂ ಅದನ್ನು ಕರೆಯುತ್ತವೆ. resume() ಉಳಿಸಿದ state ಮರುಸ್ಥಾಪಿಸಿ next_node ನಿಂದ ಆರಂಭಿಸುತ್ತದೆ.",
    "code": "class Checkpoint(TypedDict):\n    state: AgentState\n    next_node: Optional[str]\n    last_completed_node: Optional[str]\n    checkpoint_number: int\n\n\ndef replace_reducer(old, new):\n    return deepcopy(new)\n\n\ndef append_reducer(old, new):\n    return deepcopy(old) + deepcopy(new)\n\n\nclass MemoryCheckpointer:\n    \"\"\"Serialises to JSON text but keeps it in process memory: checkpoint semantics, not durability.\"\"\"\n\n    def __init__(self):\n        self._storage = {}\n\n    def save(self, session_id, checkpoint):\n        self._storage[session_id] = json.dumps(checkpoint)\n\n    def load(self, session_id):\n        raw = self._storage.get(session_id)\n        return None if raw is None else json.loads(raw)\n\n    def update_state(self, session_id, updates):\n        checkpoint = self.load(session_id)\n        if checkpoint is None:\n            raise ValueError(f\"No checkpoint for {session_id!r}\")\n        checkpoint[\"state\"].update(updates)\n        self.save(session_id, checkpoint)\n\n\nclass StateGraph:\n    def __init__(self, checkpointer):\n        self.checkpointer = checkpointer\n        self.nodes, self.edges, self.conditional_edges, self.reducers = {}, {}, {}, {}\n        self.executed = []\n\n    def add_node(self, name, node):\n        self.nodes[name] = node\n\n    def add_edge(self, source, target):\n        self.edges[source] = target\n\n    def add_conditional_edges(self, source, chooser, routes):\n        self.conditional_edges[source] = (chooser, routes)\n\n    def set_reducer(self, field, reducer):\n        self.reducers[field] = reducer\n\n    def merge_update(self, state, update):\n        new_state = deepcopy(state)\n        for key, value in update.items():\n            reducer = self.reducers.get(key, replace_reducer)\n            new_state[key] = reducer(new_state.get(key), value)\n        return new_state\n\n    def next_node(self, current, state):\n        if current in self.conditional_edges:\n            chooser, routes = self.conditional_edges[current]\n            route = chooser(state)\n            if route not in routes:\n                raise ValueError(f\"Unknown route {route!r} from {current!r}\")\n            return routes[route]\n        return self.edges.get(current)\n\n    def _execute(self, session_id, state, current, checkpoint_number):\n        while current is not None:\n            print(f\"[execute] node={current}\")\n            self.executed.append(current)\n            try:\n                update = self.nodes[current](state)\n            except Exception as exc:\n                print(f\"[stopped] node={current} reason={exc}\")\n                raise\n            state = self.merge_update(state, update)\n            following = self.next_node(current, state)\n            checkpoint_number += 1\n            self.checkpointer.save(session_id, {\"state\": state, \"next_node\": following,\n                                                \"last_completed_node\": current, \"checkpoint_number\": checkpoint_number})\n            print(f\"[checkpoint {checkpoint_number}] completed={current} next={following}\")\n            current = following\n        return state\n\n    def run(self, session_id, start, initial_state):\n        return self._execute(session_id, deepcopy(initial_state), start, 0)\n\n    def resume(self, session_id):\n        cp = self.checkpointer.load(session_id)\n        if cp is None:\n            raise ValueError(f\"No checkpoint for {session_id!r}\")\n        print(f\"[resume] checkpoint={cp['checkpoint_number']} last_completed={cp['last_completed_node']} next={cp['next_node']}\")\n        return self._execute(session_id, cp[\"state\"], cp[\"next_node\"], cp[\"checkpoint_number\"])\n\n\ndef refund_with_messages(state):\n    return {\"messages\": [\"Agent: Refund request prepared.\"], \"output\": \"Refund request prepared and awaiting approval.\", \"step\": state[\"step\"] + 1}\n\n\ndef human_gate_node(state):\n    if not state[\"human_approval\"]:\n        raise RuntimeError(\"Human approval required\")\n    return {\"messages\": [\"Human approval received.\"], \"step\": state[\"step\"] + 1}\n\n\ndef send_node(state):\n    return {\"messages\": [\"Final response sent.\"], \"output\": state[\"output\"] + \" Approved and sent.\", \"step\": state[\"step\"] + 1}\n\n\ndef build(checkpointer):\n    g = StateGraph(checkpointer)\n    g.set_reducer(\"messages\", append_reducer)\n    g.add_node(\"classify\", classify_node)\n    g.add_node(\"refund\", refund_with_messages)\n    g.add_node(\"bug\", bug_node)\n    g.add_node(\"sales\", sales_node)\n    g.add_node(\"human_gate\", human_gate_node)\n    g.add_node(\"send\", send_node)\n    g.add_conditional_edges(\"classify\", choose_route, {\"refund\": \"refund\", \"bug\": \"bug\", \"sales\": \"sales\"})\n    for n in (\"refund\", \"bug\", \"sales\"):\n        g.add_edge(n, \"human_gate\")\n    g.add_edge(\"human_gate\", \"send\")\n    return g"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "lg_2.py",
    "headingEn": "main(): seven experiments",
    "headingKn": "main(): ಏಳು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs to the gate, approves and resumes, repeats a failed resume, compares reducers, forces a serialization error, checks what a new checkpointer sees, and tests which values can live in state.",
    "descKn": "main() gate ವರೆಗೆ ಚಲಾಯಿಸುತ್ತದೆ, ಅನುಮೋದಿಸಿ resume ಮಾಡುತ್ತದೆ, ವಿಫಲ resume ಪುನರಾವರ್ತಿಸುತ್ತದೆ, reducers ಹೋಲಿಸುತ್ತದೆ, ಧಾರಾವಾಹಿ ದೋಷ ಒತ್ತಾಯಿಸುತ್ತದೆ, ಹೊಸ checkpointer ಏನು ನೋಡುತ್ತದೆ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ, ಮತ್ತು ಯಾವ ಮೌಲ್ಯಗಳು state ನಲ್ಲಿ ಇರಬಹುದು ಎಂದು ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    cp = MemoryCheckpointer()\n    graph = build(cp)\n    sid = \"support-001\"\n\n    section(\"1. First run: the gate stops execution\")\n    try:\n        graph.run(sid, \"classify\", fresh(\"I was charged twice and need a refund.\"))\n    except RuntimeError as exc:\n        print(\"Workflow paused:\", exc)\n    saved = cp.load(sid)\n    print(\"checkpoint:\", json.dumps({k: saved[k] for k in (\"next_node\", \"last_completed_node\", \"checkpoint_number\")}))\n    print(\"messages in the checkpoint:\", saved[\"state\"][\"messages\"])\n\n    section(\"2. A human changes the durable state, then the graph resumes\")\n    cp.update_state(sid, {\"human_approval\": True})\n    graph.executed.clear()\n    final = graph.resume(sid)\n    print(\"nodes executed during resume:\", graph.executed, \"(classify and refund did not run again)\")\n    print(\"final output:\", final[\"output\"])\n    print(\"final messages:\", final[\"messages\"])\n    print(\"final step:\", final[\"step\"])\n\n    section(\"3. Genuinely checking: a failed node leaves the previous checkpoint alone\")\n    cp2 = MemoryCheckpointer()\n    g2 = build(cp2)\n    try:\n        g2.run(\"s2\", \"classify\", fresh(\"refund please\"))\n    except RuntimeError:\n        pass\n    before = cp2.load(\"s2\")[\"checkpoint_number\"]\n    try:\n        g2.resume(\"s2\")\n    except RuntimeError:\n        pass\n    print(\"checkpoint number before and after a second failed attempt:\", before, cp2.load(\"s2\")[\"checkpoint_number\"])\n\n    section(\"4. Genuinely checking: reducers change what merging means\")\n    g3 = build(MemoryCheckpointer())\n    s = fresh(\"User: hello\")\n    print(\"append reducer :\", g3.merge_update(s, {\"messages\": [\"Agent: hi\"]})[\"messages\"])\n    g3.set_reducer(\"messages\", replace_reducer)\n    print(\"replace reducer:\", g3.merge_update(s, {\"messages\": [\"Agent: hi\"]})[\"messages\"])\n\n    section(\"5. Genuinely checking: serialization can fail after the node already ran\")\n    ran = []\n    def uses_datetime(state):\n        ran.append(\"side effect happened\")\n        return {\"output\": datetime(2026, 9, 30, 14, 30)}\n    g4 = StateGraph(MemoryCheckpointer())\n    g4.add_node(\"stamp\", uses_datetime)\n    try:\n        g4.run(\"s4\", \"stamp\", fresh(\"x\"))\n    except TypeError as e:\n        print(\"TypeError at save time:\", e)\n    print(\"node executions:\", len(ran), \"| checkpoint exists:\", g4.checkpointer.load(\"s4\") is not None)\n    print(\"the node ran and its effect happened, yet no checkpoint was written\")\n\n    section(\"6. Genuinely checking: the in-memory 'checkpointer' is not durable\")\n    new_process_cp = MemoryCheckpointer()\n    print(\"a new object looking for 'support-001':\", new_process_cp.load(sid))\n    print(\"serialising to JSON is not persistence; the data must live outside the process\")\n\n    section(\"7. State must be data, not live resources\")\n    for label, value in ((\"string\", \"text\"), (\"set\", {1, 2}), (\"function\", lambda: 1), (\"file handle\", open(__file__))):\n        try:\n            json.dumps({\"v\": value})\n            ok = \"serialisable\"\n        except TypeError:\n            ok = \"NOT serialisable\"\n        print(f\"{label:<12} {ok}\")\n        if label == \"file handle\":\n            value.close()"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. First run: the gate stops execution ---\n[execute] node=classify\n[checkpoint 1] completed=classify next=refund\n[execute] node=refund\n[checkpoint 2] completed=refund next=human_gate\n[execute] node=human_gate\n[stopped] node=human_gate reason=Human approval required\nWorkflow paused: Human approval required\ncheckpoint: {\"next_node\": \"human_gate\", \"last_completed_node\": \"refund\", \"checkpoint_number\": 2}\nmessages in the checkpoint: ['I was charged twice and need a refund.', 'Agent: Refund request prepared.']\n\n--- 2. A human changes the durable state, then the graph resumes ---\n[resume] checkpoint=2 last_completed=refund next=human_gate\n[execute] node=human_gate\n[checkpoint 3] completed=human_gate next=send\n[execute] node=send\n[checkpoint 4] completed=send next=None\nnodes executed during resume: ['human_gate', 'send'] (classify and refund did not run again)\nfinal output: Refund request prepared and awaiting approval. Approved and sent.\nfinal messages: ['I was charged twice and need a refund.', 'Agent: Refund request prepared.', 'Human approval received.', 'Final response sent.']\nfinal step: 4\n\n--- 3. Genuinely checking: a failed node leaves the previous checkpoint alone ---\n[execute] node=classify\n[checkpoint 1] completed=classify next=refund\n[execute] node=refund\n[checkpoint 2] completed=refund next=human_gate\n[execute] node=human_gate\n[stopped] node=human_gate reason=Human approval required\n[resume] checkpoint=2 last_completed=refund next=human_gate\n[execute] node=human_gate\n[stopped] node=human_gate reason=Human approval required\ncheckpoint number before and after a second failed attempt: 2 2\n\n--- 4. Genuinely checking: reducers change what merging means ---\nappend reducer : ['User: hello', 'Agent: hi']\nreplace reducer: ['Agent: hi']\n\n--- 5. Genuinely checking: serialization can fail after the node already ran ---\n[execute] node=stamp\nTypeError at save time: Object of type datetime is not JSON serializable\nnode executions: 1 | checkpoint exists: False\nthe node ran and its effect happened, yet no checkpoint was written\n\n--- 6. Genuinely checking: the in-memory 'checkpointer' is not durable ---\na new object looking for 'support-001': None\nserialising to JSON is not persistence; the data must live outside the process\n\n--- 7. State must be data, not live resources ---\nstring       serialisable\nset          NOT serialisable\nfunction     NOT serialisable\nfile handle  NOT serialisable"
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
    "headingEn": "Pause, Approve, Resume",
    "headingKn": "ವಿರಾಮ, ಅನುಮೋದನೆ, Resume",
    "bodyEn": "Section 1: classify and refund complete, checkpoints 1 and 2 are written, and human_gate raises \"Human approval required\". There is no checkpoint 3. The saved checkpoint says last_completed_node=refund, next_node=human_gate, and its messages hold the user's message plus the agent's, accumulated by the append reducer. Section 2: after update_state sets human_approval to true, resume runs only human_gate and send, writing checkpoints 3 and 4. The final step is 4 and all four messages are present. Section 3 repeats a failed resume and the checkpoint number is still 2.",
    "bodyKn": "ವಿಭಾಗ 1: classify ಮತ್ತು refund ಪೂರ್ಣಗೊಂಡು, checkpoints 1 ಮತ್ತು 2 ಬರೆಯಲ್ಪಟ್ಟು, human_gate \"Human approval required\" ಎತ್ತುತ್ತದೆ. Checkpoint 3 ಇಲ್ಲ. ಉಳಿಸಿದ checkpoint last_completed_node=refund, next_node=human_gate ಎನ್ನುತ್ತದೆ, ಮತ್ತು ಅದರ messages ಬಳಕೆದಾರರ ಸಂದೇಶ ಹಾಗೂ agent ನದನ್ನು ಹೊಂದಿದೆ, append reducer ಸಂಗ್ರಹಿಸಿದ್ದು. ವಿಭಾಗ 2: update_state human_approval ಅನ್ನು true ಮಾಡಿದ ನಂತರ resume ಕೇವಲ human_gate ಮತ್ತು send ಚಲಾಯಿಸಿ checkpoints 3 ಮತ್ತು 4 ಬರೆಯುತ್ತದೆ. ಅಂತಿಮ ಹೆಜ್ಜೆ 4 ಮತ್ತು ನಾಲ್ಕೂ ಸಂದೇಶಗಳಿವೆ. ವಿಭಾಗ 3 ವಿಫಲ resume ಪುನರಾವರ್ತಿಸುತ್ತದೆ ಮತ್ತು checkpoint ಸಂಖ್ಯೆ ಇನ್ನೂ 2."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Serialization Can Fail After the Work Is Done",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕೆಲಸ ಮುಗಿದ ನಂತರವೂ ಧಾರಾವಾಹಿ ವಿಫಲವಾಗಬಹುದು",
    "bodyEn": "Section 5 has a node return a datetime. The node executes and its effect happens, then saving fails with \"TypeError: Object of type datetime is not JSON serializable\", and no checkpoint exists. The work is done but unrecorded, so a retry repeats it. Keep state to JSON-friendly data (strings, numbers, lists, dicts, ISO timestamps as strings), validate it before the node does anything irreversible, and store references to large or live objects rather than the objects. Section 7 lists what cannot live in state: sets, functions and open files.",
    "bodyKn": "ವಿಭಾಗ 5 ರಲ್ಲಿ node datetime ಹಿಂತಿರುಗಿಸುತ್ತದೆ. Node ಚಲಿಸಿ ಅದರ ಪರಿಣಾಮ ನಡೆಯುತ್ತದೆ, ನಂತರ ಉಳಿಸುವುದು \"TypeError: Object of type datetime is not JSON serializable\" ನೊಂದಿಗೆ ವಿಫಲವಾಗುತ್ತದೆ ಮತ್ತು checkpoint ಇರುವುದಿಲ್ಲ. ಕೆಲಸ ಮುಗಿದಿದೆ ಆದರೆ ದಾಖಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಮರುಪ್ರಯತ್ನ ಅದನ್ನು ಪುನರಾವರ್ತಿಸುತ್ತದೆ. State ಅನ್ನು JSON-ಸ್ನೇಹಿ ದತ್ತಾಂಶಕ್ಕೆ (ಸ್ಟ್ರಿಂಗ್‌ಗಳು, ಸಂಖ್ಯೆಗಳು, ಪಟ್ಟಿಗಳು, ನಿಘಂಟುಗಳು, ISO ಸಮಯಮುದ್ರೆ ಸ್ಟ್ರಿಂಗ್ ಆಗಿ) ಸೀಮಿತಗೊಳಿಸಿ, node ಹಿಂತಿರುಗಿಸಲಾಗದ ಏನನ್ನಾದರೂ ಮಾಡುವ ಮೊದಲು ಮಾನ್ಯ ಮಾಡಿ, ಮತ್ತು ದೊಡ್ಡ ಅಥವಾ ಜೀವಂತ ವಸ್ತುಗಳ ಬದಲು ಅವುಗಳ ಉಲ್ಲೇಖಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ. ವಿಭಾಗ 7 state ನಲ್ಲಿ ಇರಲಾಗದ್ದನ್ನು ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ: sets, ಕಾರ್ಯಗಳು ಮತ್ತು ತೆರೆದ ಫೈಲ್‌ಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Serialised Is Not Persisted",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಧಾರಾವಾಹಿ ಎಂದರೆ ಸ್ಥಿರ ಅಲ್ಲ",
    "bodyEn": "Section 6 creates a new MemoryCheckpointer and asks for support-001: it returns None. The JSON text lived inside the previous object in the process. Serialisation is a conversion; persistence needs storage outside the process. Part 3 replaces this class with SQLite.",
    "bodyKn": "ವಿಭಾಗ 6 ಹೊಸ MemoryCheckpointer ರಚಿಸಿ support-001 ಕೇಳುತ್ತದೆ: ಅದು None ಹಿಂತಿರುಗಿಸುತ್ತದೆ. JSON ಪಠ್ಯ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿನ ಹಿಂದಿನ ವಸ್ತುವಿನೊಳಗೆ ಇತ್ತು. ಧಾರಾವಾಹಿ ಒಂದು ಪರಿವರ್ತನೆ; ಸ್ಥಿರತೆಗೆ ಪ್ರಕ್ರಿಯೆ ಹೊರಗಿನ ಸಂಗ್ರಹ ಬೇಕು. ಭಾಗ 3 ಈ ವರ್ಗವನ್ನು SQLite ನಿಂದ ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Reducers Define State Semantics",
    "headingKn": "Reducers State ಅರ್ಥ ವ್ಯಾಖ್ಯಾನಿಸುತ್ತವೆ",
    "bodyEn": "Section 4 merges the same update under two reducers: append gives [User: hello, Agent: hi] and replace gives [Agent: hi]. The schema says which fields exist and the reducers say how each one evolves: messages append, counters add, route replaces, scores take the max. Each merge builds a new state from a deepcopy so earlier snapshots are not changed behind your back.",
    "bodyKn": "ವಿಭಾಗ 4 ಅದೇ ಅಪ್‌ಡೇಟ್ ಅನ್ನು ಎರಡು reducers ಅಡಿಯಲ್ಲಿ ವಿಲೀನಗೊಳಿಸುತ್ತದೆ: append [User: hello, Agent: hi] ನೀಡುತ್ತದೆ ಮತ್ತು replace [Agent: hi] ನೀಡುತ್ತದೆ. Schema ಯಾವ ಕ್ಷೇತ್ರಗಳಿವೆ ಎನ್ನುತ್ತದೆ ಮತ್ತು reducers ಪ್ರತಿಯೊಂದೂ ಹೇಗೆ ವಿಕಸಿಸುತ್ತದೆ ಎನ್ನುತ್ತವೆ: messages append, ಕೌಂಟರ್‌ಗಳು ಕೂಡುತ್ತವೆ, route ಬದಲಿಸುತ್ತದೆ, ಅಂಕಗಳು ಗರಿಷ್ಠ ತೆಗೆದುಕೊಳ್ಳುತ್ತವೆ. ಪ್ರತಿ ವಿಲೀನ deepcopy ಯಿಂದ ಹೊಸ state ರಚಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಹಿಂದಿನ ಸ್ನ್ಯಾಪ್‌ಶಾಟ್‌ಗಳು ನಿಮಗೆ ತಿಳಿಯದೆ ಬದಲಾಗುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Checkpoint Versus Memory, Cache and Event Log",
    "headingKn": "Checkpoint ಮತ್ತು ಮೆಮೊರಿ, Cache ಹಾಗೂ Event Log",
    "bodyEn": "A checkpoint answers where this execution is and what it needs to continue. Long-term memory answers what should survive across executions. A cache can vanish without harm, while losing a checkpoint can prevent correct recovery. An event log keeps every event and a checkpoint keeps the latest snapshot; some systems keep both. Keep each in its own role.",
    "bodyKn": "Checkpoint ಈ ಚಲಾವಣೆ ಎಲ್ಲಿದೆ ಮತ್ತು ಮುಂದುವರಿಯಲು ಅದಕ್ಕೆ ಏನು ಬೇಕು ಎಂದು ಉತ್ತರಿಸುತ್ತದೆ. ದೀರ್ಘಕಾಲದ ಮೆಮೊರಿ ಚಲಾವಣೆಗಳನ್ನು ಮೀರಿ ಏನು ಉಳಿಯಬೇಕು ಎಂದು ಉತ್ತರಿಸುತ್ತದೆ. Cache ಹಾನಿಯಿಲ್ಲದೆ ಮಾಯವಾಗಬಹುದು, ಆದರೆ checkpoint ಕಳೆದುಕೊಂಡರೆ ಸರಿಯಾದ ಚೇತರಿಕೆ ಅಸಾಧ್ಯವಾಗಬಹುದು. Event log ಪ್ರತಿ ಘಟನೆ ಇಡುತ್ತದೆ ಮತ್ತು checkpoint ಇತ್ತೀಚಿನ ಸ್ನ್ಯಾಪ್‌ಶಾಟ್ ಇಡುತ್ತದೆ; ಕೆಲವು ವ್ಯವಸ್ಥೆಗಳು ಎರಡನ್ನೂ ಇಡುತ್ತವೆ. ಪ್ರತಿಯೊಂದನ್ನೂ ಅದರ ಪಾತ್ರದಲ್ಲಿಡಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Agents wait for humans, background jobs and slow tools. A logical workflow that lasts hours or days must outlive any single process, which requires the progress to be recorded explicitly, node by node.",
    "bodyKn": "Agents ಮಾನವರು, ಹಿನ್ನೆಲೆ ಕೆಲಸಗಳು ಮತ್ತು ನಿಧಾನ tools ಗಾಗಿ ಕಾಯುತ್ತವೆ. ಗಂಟೆಗಳು ಅಥವಾ ದಿನಗಳು ಉಳಿಯುವ ತಾರ್ಕಿಕ workflow ಯಾವುದೇ ಒಂದು ಪ್ರಕ್ರಿಯೆಯನ್ನು ಮೀರಿ ಬದುಕಬೇಕು, ಅದಕ್ಕೆ ಪ್ರಗತಿಯನ್ನು node ನಂತರ node ಸ್ಪಷ್ಟವಾಗಿ ದಾಖಲಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"durable execution means retrying failed code.\" It means recording committed state and the control position so the workflow can continue correctly.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"durable execution ಎಂದರೆ ವಿಫಲ ಕೋಡ್ ಮರುಪ್ರಯತ್ನಿಸುವುದು.\" ಅದರರ್ಥ commit ಮಾಡಿದ state ಮತ್ತು ನಿಯಂತ್ರಣ ಸ್ಥಾನ ದಾಖಲಿಸಿ workflow ಸರಿಯಾಗಿ ಮುಂದುವರಿಯುವಂತೆ ಮಾಡುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Checkpoint: state plus control position. Checkpointer: the store for checkpoints. Resume: load a checkpoint and continue. Human gate: a deliberate stop awaiting external input. update_state: a durable edit of saved state. Committed state: state of successfully completed work. Replay: re-running from a saved state.",
    "bodyKn": "Checkpoint: state ಮತ್ತು ನಿಯಂತ್ರಣ ಸ್ಥಾನ. Checkpointer: checkpoints ಗೆ ಸಂಗ್ರಹ. Resume: checkpoint ಲೋಡ್ ಮಾಡಿ ಮುಂದುವರಿಯುವುದು. Human gate: ಬಾಹ್ಯ ಇನ್‌ಪುಟ್‌ಗಾಗಿ ಕಾಯುವ ಉದ್ದೇಶಿತ ನಿಲುಗಡೆ. update_state: ಉಳಿಸಿದ state ನ ಸ್ಥಿರ ಸಂಪಾದನೆ. Committed state: ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಂಡ ಕೆಲಸದ state. Replay: ಉಳಿಸಿದ state ಯಿಂದ ಮರುಚಲಾವಣೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Save a checkpoint only after a node returns, so failed nodes write nothing. 2) A checkpoint holds state, last completed node, next node and a number. 3) Resume starts at the saved next node: classify and refund did not run again. 4) Approval is state, and the gate re-validates it. 5) Reducers give each field its merge rule. 6) A datetime in state broke saving after the node had run. 7) JSON text in memory is serialised, not persisted.",
    "bodyKn": "1) Node ಹಿಂತಿರುಗಿದ ನಂತರ ಮಾತ್ರ checkpoint ಉಳಿಸಿ, ಆಗ ವಿಫಲ nodes ಏನನ್ನೂ ಬರೆಯುವುದಿಲ್ಲ. 2) Checkpoint state, ಕೊನೆಯ ಪೂರ್ಣಗೊಂಡ node, ಮುಂದಿನ node ಮತ್ತು ಸಂಖ್ಯೆ ಹೊಂದಿದೆ. 3) Resume ಉಳಿಸಿದ ಮುಂದಿನ node ನಿಂದ ಆರಂಭವಾಗುತ್ತದೆ: classify ಮತ್ತು refund ಮತ್ತೆ ಚಲಿಸಲಿಲ್ಲ. 4) ಅನುಮೋದನೆ state, ಮತ್ತು gate ಅದನ್ನು ಮರು-ಮಾನ್ಯ ಮಾಡುತ್ತದೆ. 5) Reducers ಪ್ರತಿ ಕ್ಷೇತ್ರಕ್ಕೆ ವಿಲೀನ ನಿಯಮ ನೀಡುತ್ತವೆ. 6) State ನಲ್ಲಿನ datetime node ಚಲಿಸಿದ ನಂತರ ಉಳಿಸುವುದನ್ನು ಮುರಿಯಿತು. 7) ಮೆಮೊರಿಯಲ್ಲಿನ JSON ಪಠ್ಯ ಧಾರಾವಾಹಿಯಾಗಿದೆ, ಸ್ಥಿರವಲ್ಲ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "After refund succeeds and human_gate fails, what does the latest checkpoint say?",
      "qKn": "refund ಯಶಸ್ವಿಯಾಗಿ human_gate ವಿಫಲವಾದ ನಂತರ ಇತ್ತೀಚಿನ checkpoint ಏನು ಹೇಳುತ್ತದೆ?",
      "opts": [
       "last_completed = human_gate, next = send",
       "last_completed = classify, next = refund",
       "last_completed = refund, next = human_gate",
       "last_completed = send, next = None"
      ],
      "optsKn": [
       "last_completed = human_gate, next = send",
       "last_completed = classify, next = refund",
       "last_completed = refund, next = human_gate",
       "last_completed = send, next = None"
      ],
      "correct": 2
     },
     {
      "q": "Why does the graph not save a checkpoint after a node raises?",
      "qKn": "Node ದೋಷ ಎತ್ತಿದ ನಂತರ graph checkpoint ಏಕೆ ಉಳಿಸುವುದಿಲ್ಲ?",
      "opts": [
       "JSON cannot hold exceptions",
       "It would falsely claim progress that did not complete",
       "Exceptions never happen",
       "It saves tokens"
      ],
      "optsKn": [
       "JSON ವಿನಾಯಿತಿ ಹಿಡಿಯಲಾರದು",
       "ಅದು ಪೂರ್ಣಗೊಳ್ಳದ ಪ್ರಗತಿಯನ್ನು ಸುಳ್ಳಾಗಿ ಹೇಳುತ್ತಿತ್ತು",
       "ವಿನಾಯಿತಿಗಳು ಎಂದೂ ಆಗುವುದಿಲ್ಲ",
       "ಅದು tokens ಉಳಿಸುತ್ತದೆ"
      ],
      "correct": 1
     },
     {
      "q": "Which nodes ran during resume in the lab?",
      "qKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ resume ಸಮಯದಲ್ಲಿ ಯಾವ nodes ಚಲಿಸಿದವು?",
      "opts": [
       "classify, refund, human_gate, send",
       "refund, human_gate, send",
       "human_gate and send only",
       "send only"
      ],
      "optsKn": [
       "ಎಲ್ಲವೂ: classify, refund, human_gate, send",
       "ಮೂರು: refund, human_gate, send",
       "ಕೇವಲ human_gate ಮತ್ತು send",
       "ಕೇವಲ send"
      ],
      "correct": 2
     },
     {
      "q": "A node returned a datetime. What failed and what was the consequence?",
      "qKn": "Node datetime ಹಿಂತಿರುಗಿಸಿತು. ಏನು ವಿಫಲವಾಯಿತು ಮತ್ತು ಪರಿಣಾಮ ಏನು?",
      "opts": [
       "The node failed before running",
       "Saving raised TypeError after the node had already run, so the work was done but unrecorded",
       "Nothing failed",
       "The graph deleted the node"
      ],
      "optsKn": [
       "Node ಚಲಿಸುವ ಮೊದಲೇ ವಿಫಲವಾಯಿತು",
       "Node ಈಗಾಗಲೇ ಚಲಿಸಿದ ನಂತರ ಉಳಿಸುವುದು TypeError ಎತ್ತಿತು, ಆದ್ದರಿಂದ ಕೆಲಸ ಮುಗಿದಿದೆ ಆದರೆ ದಾಖಲಾಗಿಲ್ಲ",
       "ಏನೂ ವಿಫಲವಾಗಲಿಲ್ಲ",
       "Graph node ಅಳಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why does a new MemoryCheckpointer not find support-001?",
      "qKn": "ಹೊಸ MemoryCheckpointer support-001 ಏಕೆ ಕಂಡುಹಿಡಿಯುವುದಿಲ್ಲ?",
      "opts": [
       "The session expired",
       "The JSON lived in the old object's memory, and serialisation is not persistence",
       "The key was wrong",
       "Checkpoints are single use"
      ],
      "optsKn": [
       "Session ಅವಧಿ ಮುಗಿದಿದೆ",
       "JSON ಹಳೆಯ ವಸ್ತುವಿನ ಮೆಮೊರಿಯಲ್ಲಿತ್ತು, ಮತ್ತು ಧಾರಾವಾಹಿ ಸ್ಥಿರತೆ ಅಲ್ಲ",
       "Key ತಪ್ಪಾಗಿತ್ತು",
       "Checkpoints ಒಂದೇ ಬಾರಿ ಬಳಕೆ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
