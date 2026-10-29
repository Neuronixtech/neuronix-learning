module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b32152c",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Planning with HTN and Evolutionary Search (Part 2 of 3) — Recursive Planning and the ChatHTN-Style Fallback",
 "titleKn": "HTN ಮತ್ತು Evolutionary Search ನೊಂದಿಗೆ ಯೋಜನೆ (ಭಾಗ 2 / 3) — ಪುನರಾವರ್ತಕ ಯೋಜನೆ ಮತ್ತು ChatHTN-ಶೈಲಿ Fallback",
 "desc": "Build a recursive backtracking planner and a fallback that treats LLM output as an untrusted candidate validated by the symbolic layer, and find that name-only validation crashes, cycles need depth limits, and fallbacks multiply model calls.",
 "descKn": "ಪುನರಾವರ್ತಕ backtracking planner ಮತ್ತು LLM ಔಟ್‌ಪುಟ್ ಅನ್ನು ಸಂಕೇತಾತ್ಮಕ ಪದರ ಮಾನ್ಯ ಮಾಡುವ ನಂಬಲಾಗದ ಅಭ್ಯರ್ಥಿಯಾಗಿ ಪರಿಗಣಿಸುವ fallback ನಿರ್ಮಿಸಿ, ಮತ್ತು ಹೆಸರು-ಮಾತ್ರ ಮಾನ್ಯತೆ crash ಆಗುತ್ತದೆ, ಚಕ್ರಗಳಿಗೆ ಆಳ ಮಿತಿ ಬೇಕು, fallbacks ಮಾದರಿ ಕರೆಗಳನ್ನು ಗುಣಿಸುತ್ತವೆ ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Implement recursive HTN decomposition with state and plan isolation.",
  "Add an LLM fallback whose candidates are validated symbolically.",
  "Validate vocabulary and arity of model proposals.",
  "Bound search against cycles and repeated model calls.",
  "Store learned methods with applicability conditions."
 ],
 "objectivesKn": [
  "State ಮತ್ತು ಯೋಜನೆ ಪ್ರತ್ಯೇಕತೆಯೊಂದಿಗೆ ಪುನರಾವರ್ತಕ HTN ವಿಭಜನೆ ಅಳವಡಿಸಿ.",
  "ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಸಂಕೇತಾತ್ಮಕವಾಗಿ ಮಾನ್ಯ ಮಾಡುವ LLM fallback ಸೇರಿಸಿ.",
  "ಮಾದರಿ ಪ್ರಸ್ತಾಪಗಳ ಶಬ್ದಕೋಶ ಮತ್ತು ಆರ್ಗ್ಯುಮೆಂಟ್ ಸಂಖ್ಯೆ ಮಾನ್ಯ ಮಾಡಿ.",
  "ಚಕ್ರಗಳು ಮತ್ತು ಪುನರಾವರ್ತಿತ ಮಾದರಿ ಕರೆಗಳ ವಿರುದ್ಧ ಹುಡುಕಾಟಕ್ಕೆ ಮಿತಿ ಹಾಕಿ.",
  "ಕಲಿತ methods ಅನ್ನು ಅನ್ವಯ ಷರತ್ತುಗಳೊಂದಿಗೆ ಸಂಗ್ರಹಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Planning with HTN and Evolutionary Search (Part 2 of 3)",
    "textKn": "HTN ಮತ್ತು Evolutionary Search ನೊಂದಿಗೆ ಯೋಜನೆ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: the recursive planner, backtracking, the scripted LLM fallback and symbolic validation of its candidates. Every output below was genuinely produced by the lab file on Python 3.14.5. The pasted source was cut off in its final glossary, which is rebuilt. The fallback is a deterministic stand-in for an LLM that proposes one bad name, one inapplicable action and one correct action. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಪುನರಾವರ್ತಕ planner, backtracking, ಸ್ಕ್ರಿಪ್ಟ್ LLM fallback ಮತ್ತು ಅದರ ಅಭ್ಯರ್ಥಿಗಳ ಸಂಕೇತಾತ್ಮಕ ಮಾನ್ಯತೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಅಂಟಿಸಿದ ಮೂಲ ಅದರ ಅಂತಿಮ ಶಬ್ದಕೋಶದಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಅದನ್ನು ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. Fallback ಒಂದು ತಪ್ಪು ಹೆಸರು, ಒಂದು ಅನ್ವಯಿಸದ ಕ್ರಿಯೆ ಮತ್ತು ಒಂದು ಸರಿಯಾದ ಕ್ರಿಯೆ ಸೂಚಿಸುವ LLM ನ ನಿರ್ಧಾರಾತ್ಮಕ ಬದಲಿ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Recursive Planning With Backtracking",
    "textKn": "Backtracking ಇರುವ ಪುನರಾವರ್ತಕ ಯೋಜನೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Algorithm",
    "headingKn": "ಅಲ್ಗಾರಿದಮ್",
    "bodyEn": "The planner works on a list of remaining tasks and the current state. An empty list means success. If the first task is primitive it must be applicable, the operator runs, the state advances and the task is appended to the plan. If it is compound, each applicable method is tried: its subtasks are placed in front of the remaining tasks and planning recurses. A branch that fails returns None, which means \"try another decomposition\", not an exception. Each alternative gets its own copy of the state and plan, so a failed attempt cannot leak into the next.",
    "bodyKn": "Planner ಉಳಿದ ಕಾರ್ಯಗಳ ಪಟ್ಟಿ ಮತ್ತು ಪ್ರಸ್ತುತ state ಮೇಲೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ. ಖಾಲಿ ಪಟ್ಟಿ ಎಂದರೆ ಯಶಸ್ಸು. ಮೊದಲ ಕಾರ್ಯ ಪ್ರಾಚೀನವಾದರೆ ಅದು ಅನ್ವಯಿಸಬೇಕು, operator ಚಲಿಸುತ್ತದೆ, state ಮುಂದುವರಿಯುತ್ತದೆ ಮತ್ತು ಕಾರ್ಯ ಯೋಜನೆಗೆ ಸೇರುತ್ತದೆ. ಅದು ಸಂಯುಕ್ತವಾದರೆ ಪ್ರತಿ ಅನ್ವಯವಾಗುವ method ಪ್ರಯತ್ನಿಸಲ್ಪಡುತ್ತದೆ: ಅದರ ಉಪಕಾರ್ಯಗಳು ಉಳಿದ ಕಾರ್ಯಗಳ ಮುಂದೆ ಬಂದು ಯೋಜನೆ ಪುನರಾವರ್ತಿಸುತ್ತದೆ. ವಿಫಲ ಶಾಖೆ None ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಅಂದರೆ \"ಇನ್ನೊಂದು ವಿಭಜನೆ ಪ್ರಯತ್ನಿಸಿ\", ವಿನಾಯಿತಿ ಅಲ್ಲ. ಪ್ರತಿ ಪರ್ಯಾಯ ತನ್ನದೇ state ಮತ್ತು ಯೋಜನೆ ನಕಲು ಪಡೆಯುತ್ತದೆ, ಆದ್ದರಿಂದ ವಿಫಲ ಪ್ರಯತ್ನ ಮುಂದಿನದಕ್ಕೆ ಸೋರುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The ChatHTN-Style Fallback",
    "headingKn": "ChatHTN-ಶೈಲಿ Fallback",
    "bodyEn": "When no method works for a compound task, the planner asks the model for candidate decompositions. A candidate is a proposal, never an authority. It must pass vocabulary validation (each task is a known operator or method with the right number of arguments), and then it is fed back through the same recursive planner together with the remaining parent tasks, so preconditions and the rest of the plan are checked too. The finished plan contains only operators: the model is used during search and is absent at execution.",
    "bodyKn": "ಸಂಯುಕ್ತ ಕಾರ್ಯಕ್ಕೆ ಯಾವ method ಕೆಲಸ ಮಾಡದಿದ್ದಾಗ planner ಮಾದರಿಯಿಂದ ಅಭ್ಯರ್ಥಿ ವಿಭಜನೆಗಳನ್ನು ಕೇಳುತ್ತದೆ. ಅಭ್ಯರ್ಥಿ ಒಂದು ಪ್ರಸ್ತಾಪ, ಎಂದೂ ಅಧಿಕಾರವಲ್ಲ. ಅದು ಶಬ್ದಕೋಶ ಮಾನ್ಯತೆ ಪಾಸಾಗಬೇಕು (ಪ್ರತಿ ಕಾರ್ಯ ಸರಿಯಾದ ಆರ್ಗ್ಯುಮೆಂಟ್ ಸಂಖ್ಯೆಯ ತಿಳಿದ operator ಅಥವಾ method), ನಂತರ ಉಳಿದ ಪೋಷಕ ಕಾರ್ಯಗಳೊಂದಿಗೆ ಅದೇ ಪುನರಾವರ್ತಕ planner ಮೂಲಕ ಮರಳಿ ಹಾಯಿಸಲಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ ಪೂರ್ವಷರತ್ತುಗಳು ಮತ್ತು ಯೋಜನೆಯ ಉಳಿದ ಭಾಗವೂ ಪರಿಶೀಲಿಸಲ್ಪಡುತ್ತವೆ. ಮುಗಿದ ಯೋಜನೆ ಕೇವಲ operators ಹೊಂದಿದೆ: ಮಾದರಿ ಹುಡುಕಾಟದ ಸಮಯದಲ್ಲಿ ಬಳಕೆಯಾಗುತ್ತದೆ ಮತ್ತು ಚಲಾವಣೆಯಲ್ಲಿ ಇರುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Fallback Plus Symbolic Validation",
    "headingKn": "Fallback ಜೊತೆ ಸಂಕೇತಾತ್ಮಕ ಮಾನ್ಯತೆ",
    "svgCode": "<svg viewBox=\"0 0 300 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"210\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">HTN decomposition with an LLM fallback</text>\n  <rect x=\"95\" y=\"22\" width=\"110\" height=\"18\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"34\" fill=\"#93c5fd\" text-anchor=\"middle\">deliver_package</text>\n  <path d=\"M120,40 L55,62 M150,40 V62 M180,40 L245,62\" stroke=\"#475569\"/>\n  <rect x=\"15\" y=\"62\" width=\"80\" height=\"18\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"55\" y=\"74\" fill=\"#6ee7b7\" text-anchor=\"middle\">prepare (method)</text>\n  <rect x=\"105\" y=\"62\" width=\"90\" height=\"18\" rx=\"4\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"74\" fill=\"#fecaca\" text-anchor=\"middle\">transport: NO METHOD</text>\n  <rect x=\"205\" y=\"62\" width=\"80\" height=\"18\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"245\" y=\"74\" fill=\"#6ee7b7\" text-anchor=\"middle\">handover (op)</text>\n  <path d=\"M40,80 V96 M70,80 V96\" stroke=\"#475569\"/>\n  <rect x=\"15\" y=\"96\" width=\"45\" height=\"16\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"37\" y=\"107\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"6\">pickup</text>\n  <rect x=\"65\" y=\"96\" width=\"40\" height=\"16\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"85\" y=\"107\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"6\">load</text>\n  <path d=\"M150,80 V118\" stroke=\"#a78bfa\" stroke-dasharray=\"3 2\"/>\n  <rect x=\"85\" y=\"118\" width=\"130\" height=\"20\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"131\" fill=\"#c4b5fd\" text-anchor=\"middle\">LLM proposes candidates</text>\n  <path d=\"M150,138 V148\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"148\" width=\"190\" height=\"22\" rx=\"4\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"157\" fill=\"#fde68a\" text-anchor=\"middle\">symbolic planner validates:</text><text x=\"150\" y=\"166\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"6\">known task? arity? preconditions? rest of plan?</text>\n  <text x=\"150\" y=\"188\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">teleport: unknown | handover: preconditions fail | drive: accepted</text>\n  <text x=\"150\" y=\"200\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the model suggests, the symbolic layer owns correctness</text>\n</svg>",
    "captionEn": "Known methods are used first; the model is asked only for the gap, and every proposal passes through the symbolic planner.",
    "captionKn": "ಮೊದಲು ತಿಳಿದ methods ಬಳಸಲಾಗುತ್ತದೆ; ಮಾದರಿಯನ್ನು ಅಂತರಕ್ಕೆ ಮಾತ್ರ ಕೇಳಲಾಗುತ್ತದೆ, ಮತ್ತು ಪ್ರತಿ ಪ್ರಸ್ತಾಪ ಸಂಕೇತಾತ್ಮಕ planner ಮೂಲಕ ಹಾಯುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Planner",
    "textKn": "Planner ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "htn_2.py",
    "headingEn": "ScriptedLLMFallback and HTNPlanner",
    "headingKn": "ScriptedLLMFallback ಮತ್ತು HTNPlanner",
    "descEn": "ScriptedLLMFallback returns three candidates for transport_package: an invented action, a real action that is not yet applicable, and the correct drive. HTNPlanner implements the recursive search, the depth guard, the arity-aware _known_task and the fallback loop.",
    "descKn": "ScriptedLLMFallback transport_package ಗೆ ಮೂರು ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ: ಕಲ್ಪಿತ ಕ್ರಿಯೆ, ಇನ್ನೂ ಅನ್ವಯಿಸದ ನಿಜವಾದ ಕ್ರಿಯೆ, ಮತ್ತು ಸರಿಯಾದ drive. HTNPlanner ಪುನರಾವರ್ತಕ ಹುಡುಕಾಟ, ಆಳ ರಕ್ಷಣೆ, ಆರ್ಗ್ಯುಮೆಂಟ್-ಅರಿವಿನ _known_task ಮತ್ತು fallback ಚಕ್ರ ಅಳವಡಿಸುತ್ತದೆ.",
    "code": "TASK_ARITY = {\"pickup_package\": 1, \"load_package\": 1, \"drive_to_customer\": 1, \"handover_package\": 1,\n              \"deliver_package\": 1, \"prepare_package\": 1, \"transport_package\": 1}\n\n\nclass ScriptedLLMFallback:\n    def __init__(self, quiet=False):\n        self.calls = 0\n        self.quiet = quiet\n\n    def propose(self, state, task):\n        self.calls += 1\n        if not self.quiet:\n            print(f\"\\n[LLM fallback call #{self.calls}] task={task}\")\n            for fact in sorted(state):\n                print(\"   -\", fact)\n        name, *args = task\n        if name == \"transport_package\":\n            p = args[0]\n            return [[(\"teleport_package\", p)], [(\"handover_package\", p)], [(\"drive_to_customer\", p)]]\n        return []\n\n\nclass HTNPlanner:\n    def __init__(self, operators, methods, fallback=None, max_depth=25, verbose=True):\n        self.operators, self.methods, self.fallback = operators, methods, fallback\n        self.max_depth, self.verbose = max_depth, verbose\n        self.nodes = 0\n\n    def _trace(self, depth, message):\n        if self.verbose:\n            print(\"  \" * depth + message)\n\n    def _known_task(self, task):\n        if not task:\n            return False\n        name = task[0]\n        if name not in self.operators and name not in self.methods:\n            return False\n        expected = TASK_ARITY.get(name)\n        return expected is not None and len(task) - 1 == expected\n\n    def _validate_decomposition(self, subtasks):\n        return bool(subtasks) and all(self._known_task(t) for t in subtasks)\n\n    def plan(self, initial_state, goal):\n        self.nodes = 0\n        return self._plan_tasks(set(initial_state), [goal], [], 0)\n\n    def _plan_tasks(self, state, tasks, plan, depth):\n        self.nodes += 1\n        if depth > self.max_depth:\n            self._trace(depth, \"DEPTH LIMIT reached\")\n            return None\n        if not tasks:\n            return state, plan\n        current, remaining = tasks[0], tasks[1:]\n        name = current[0]\n        if name in self.operators:\n            op = self.operators[name]\n            self._trace(depth, f\"PRIMITIVE {current}\")\n            if not op.applicable(state, current):\n                self._trace(depth, \"  -> preconditions failed\")\n                return None\n            nxt = op.execute(state, current)\n            self._trace(depth, \"  -> executed\")\n            return self._plan_tasks(nxt, remaining, plan + [current], depth)\n        self._trace(depth, f\"COMPOUND {current}\")\n        for method in self.methods.get(name, []):\n            if not method.applicable(state, current):\n                continue\n            subtasks = method.decompose(state, current)\n            self._trace(depth, f\"TRY METHOD {method.name} -> {subtasks}\")\n            result = self._plan_tasks(set(state), subtasks + remaining, list(plan), depth + 1)\n            if result is not None:\n                return result\n        if self.fallback is not None:\n            self._trace(depth, f\"LLM FALLBACK for {current}\")\n            for candidate in self.fallback.propose(state, current):\n                self._trace(depth, f\"CANDIDATE {candidate}\")\n                if not self._validate_decomposition(candidate):\n                    self._trace(depth, \"  -> rejected: unknown task or wrong arity\")\n                    continue\n                result = self._plan_tasks(set(state), candidate + remaining, list(plan), depth + 1)\n                if result is not None:\n                    self._trace(depth, \"  -> accepted by the symbolic planner\")\n                    return result\n                self._trace(depth, \"  -> failed symbolic validation\")\n        return None"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "htn_2.py",
    "headingEn": "main(): seven experiments",
    "headingKn": "main(): ಏಳು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() plans without a fallback, with it, inspects the plan, compares name-only validation with arity validation, backtracks across known methods, forces a method cycle, and tests a learned method with a condition.",
    "descKn": "main() fallback ಇಲ್ಲದೆ, ಇದ್ದು ಯೋಜಿಸುತ್ತದೆ, ಯೋಜನೆ ಪರಿಶೀಲಿಸುತ್ತದೆ, ಹೆಸರು-ಮಾತ್ರ ಮಾನ್ಯತೆ ಮತ್ತು ಆರ್ಗ್ಯುಮೆಂಟ್ ಮಾನ್ಯತೆ ಹೋಲಿಸುತ್ತದೆ, ತಿಳಿದ methods ಮೇಲೆ backtrack ಮಾಡುತ್ತದೆ, method ಚಕ್ರ ಒತ್ತಾಯಿಸುತ್ತದೆ, ಮತ್ತು ಷರತ್ತಿರುವ ಕಲಿತ method ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Without a fallback the planner fails at the gap\")\n    p0 = HTNPlanner(OPERATORS, METHODS, fallback=None)\n    print(\"result:\", p0.plan(INITIAL, (\"deliver_package\", \"P1\")))\n\n    section(\"2. The ChatHTN-style hybrid: candidates are validated symbolically\")\n    fb = ScriptedLLMFallback()\n    planner = HTNPlanner(OPERATORS, METHODS, fallback=fb)\n    result = planner.plan(INITIAL, (\"deliver_package\", \"P1\"))\n    final_state, plan = result\n    print(\"\\nFINAL PRIMITIVE PLAN\")\n    for i, t in enumerate(plan, 1):\n        print(f\"{i}. {t}\")\n    print(\"FINAL STATE:\", sorted(final_state))\n    print(\"LLM calls:\", fb.calls, \"| search nodes visited:\", planner.nodes)\n\n    section(\"3. The plan contains no LLM step\")\n    print(\"operators used:\", sorted({t[0] for t in plan}), \"| all in OPERATORS:\", all(t[0] in OPERATORS for t in plan))\n\n    section(\"4. Genuinely checking: arity validation matters\")\n    class Naive(HTNPlanner):\n        def _known_task(self, task):\n            return bool(task) and (task[0] in self.operators or task[0] in self.methods)\n    class BadArity(ScriptedLLMFallback):\n        def propose(self, state, task):\n            return [[(\"drive_to_customer\",)]]\n    for cls, label in ((Naive, \"name-only validation\"), (HTNPlanner, \"name + arity validation\")):\n        pl = cls(OPERATORS, METHODS, fallback=BadArity(), verbose=False)\n        try:\n            out = pl.plan(INITIAL, (\"deliver_package\", \"P1\"))\n            print(f\"{label:<26} -> {'plan found' if out else 'planning failed cleanly (None)'}\")\n        except Exception as e:\n            print(f\"{label:<26} -> crashed with {type(e).__name__}: {e}\")\n\n    section(\"5. Backtracking across known methods\")\n    def fail_method(state, task):\n        _, package = task\n        return [(\"load_package\", package)]\n    multi = dict(METHODS)\n    multi[\"transport_package\"] = [\n        Method(\"bad_first\", \"transport_package\", lambda s, t: True, fail_method),\n        Method(\"by_truck\", \"transport_package\", lambda s, t: True, lambda s, t: [(\"drive_to_customer\", t[1])]),\n    ]\n    pl = HTNPlanner(OPERATORS, multi, fallback=None, verbose=False)\n    out = pl.plan(INITIAL, (\"deliver_package\", \"P1\"))\n    print(\"two methods for transport: first fails its preconditions, second succeeds ->\", [t[0] for t in out[1]])\n    print(\"no LLM was needed, search nodes visited:\", pl.nodes)\n\n    section(\"6. Genuinely checking: methods that decompose into each other\")\n    loop_methods = {\n        \"loop_a\": [Method(\"a_to_b\", \"loop_a\", lambda s, t: True, lambda s, t: [(\"loop_b\", t[1])])],\n        \"loop_b\": [Method(\"b_to_a\", \"loop_b\", lambda s, t: True, lambda s, t: [(\"loop_a\", t[1])])],\n    }\n    for label, limit in ((\"no depth limit\", 10**9), (\"depth limit 25\", 25)):\n        pl = HTNPlanner(OPERATORS, loop_methods, fallback=None, max_depth=limit, verbose=False)\n        try:\n            out = pl.plan(INITIAL, (\"loop_a\", \"P1\"))\n            print(f\"{label:<15} -> result {out} after {pl.nodes} search nodes\")\n        except RecursionError:\n            print(f\"{label:<15} -> RecursionError after {pl.nodes} search nodes (no domain-level error message)\")\n\n    section(\"7. Learning a method from a validated fallback (cache)\")\n    learned = dict(METHODS)\n    learned[\"transport_package\"] = [Method(\"learned_truck\", \"transport_package\",\n                                           lambda s, t: f\"package:{t[1]}:loaded\" in s and \"truck:warehouse\" in s and \"driver:available\" in s,\n                                           lambda s, t: [(\"drive_to_customer\", t[1])])]\n    fb2 = ScriptedLLMFallback(quiet=True)\n    pl = HTNPlanner(OPERATORS, learned, fallback=fb2, verbose=False)\n    out = pl.plan(INITIAL, (\"deliver_package\", \"P1\"))\n    print(\"with the learned method: plan\", [t[0] for t in out[1]], \"| LLM calls:\", fb2.calls)\n    other = set(INITIAL) - {\"driver:available\"}\n    out2 = pl.plan(other, (\"deliver_package\", \"P1\"))\n    print(\"same method without a driver (condition fails): result\", out2, \"| LLM calls:\", fb2.calls)\n    print(\"an unconditional cached method would have tried to drive without a driver\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Without a fallback the planner fails at the gap ---\nCOMPOUND ('deliver_package', 'P1')\nTRY METHOD standard_delivery -> [('prepare_package', 'P1'), ('transport_package', 'P1'), ('handover_package', 'P1')]\n  COMPOUND ('prepare_package', 'P1')\n  TRY METHOD standard_preparation -> [('pickup_package', 'P1'), ('load_package', 'P1')]\n    PRIMITIVE ('pickup_package', 'P1')\n      -> executed\n    PRIMITIVE ('load_package', 'P1')\n      -> executed\n    COMPOUND ('transport_package', 'P1')\nresult: None\n\n--- 2. The ChatHTN-style hybrid: candidates are validated symbolically ---\nCOMPOUND ('deliver_package', 'P1')\nTRY METHOD standard_delivery -> [('prepare_package', 'P1'), ('transport_package', 'P1'), ('handover_package', 'P1')]\n  COMPOUND ('prepare_package', 'P1')\n  TRY METHOD standard_preparation -> [('pickup_package', 'P1'), ('load_package', 'P1')]\n    PRIMITIVE ('pickup_package', 'P1')\n      -> executed\n    PRIMITIVE ('load_package', 'P1')\n      -> executed\n    COMPOUND ('transport_package', 'P1')\n    LLM FALLBACK for ('transport_package', 'P1')\n\n[LLM fallback call #1] task=('transport_package', 'P1')\n   - driver:available\n   - package:P1:loaded\n   - truck:warehouse\n   - worker:warehouse\n    CANDIDATE [('teleport_package', 'P1')]\n      -> rejected: unknown task or wrong arity\n    CANDIDATE [('handover_package', 'P1')]\n      PRIMITIVE ('handover_package', 'P1')\n        -> preconditions failed\n      -> failed symbolic validation\n    CANDIDATE [('drive_to_customer', 'P1')]\n      PRIMITIVE ('drive_to_customer', 'P1')\n        -> executed\n      PRIMITIVE ('handover_package', 'P1')\n        -> executed\n      -> accepted by the symbolic planner\n\nFINAL PRIMITIVE PLAN\n1. ('pickup_package', 'P1')\n2. ('load_package', 'P1')\n3. ('drive_to_customer', 'P1')\n4. ('handover_package', 'P1')\nFINAL STATE: ['driver:available', 'package:P1:delivered', 'truck:customer', 'worker:warehouse']\nLLM calls: 1 | search nodes visited: 9\n\n--- 3. The plan contains no LLM step ---\noperators used: ['drive_to_customer', 'handover_package', 'load_package', 'pickup_package'] | all in OPERATORS: True\n\n--- 4. Genuinely checking: arity validation matters ---\nname-only validation       -> crashed with ValueError: not enough values to unpack (expected 2, got 1)\nname + arity validation    -> planning failed cleanly (None)\n\n--- 5. Backtracking across known methods ---\ntwo methods for transport: first fails its preconditions, second succeeds -> ['pickup_package', 'load_package', 'drive_to_customer', 'handover_package']\nno LLM was needed, search nodes visited: 9\n\n--- 6. Genuinely checking: methods that decompose into each other ---\nno depth limit  -> RecursionError after 996 search nodes (no domain-level error message)\ndepth limit 25  -> result None after 27 search nodes\n\n--- 7. Learning a method from a validated fallback (cache) ---\nwith the learned method: plan ['pickup_package', 'load_package', 'drive_to_customer', 'handover_package'] | LLM calls: 0\nsame method without a driver (condition fails): result None | LLM calls: 3\nan unconditional cached method would have tried to drive without a driver"
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
    "headingEn": "Three Candidates, One Accepted",
    "headingKn": "ಮೂರು ಅಭ್ಯರ್ಥಿಗಳು, ಒಂದು ಸ್ವೀಕೃತ",
    "bodyEn": "Without a fallback the planner reaches transport_package and returns None. With it, pickup and load execute, then the model is asked, with the state shown. Candidate 1, teleport_package, is rejected as an unknown task and is never executed. Candidate 2, handover_package, is a real operator but its preconditions fail because the truck is still at the warehouse, so it fails symbolic validation. Candidate 3, drive_to_customer, executes, the remaining handover also executes, and the candidate is accepted. The final plan is pickup, load, drive, handover from one LLM call and 9 search nodes, with no model step in it.",
    "bodyKn": "Fallback ಇಲ್ಲದೆ planner transport_package ತಲುಪಿ None ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ಇದ್ದರೆ pickup ಮತ್ತು load ಚಲಿಸುತ್ತವೆ, ನಂತರ state ತೋರಿಸಿ ಮಾದರಿಯನ್ನು ಕೇಳಲಾಗುತ್ತದೆ. ಅಭ್ಯರ್ಥಿ 1, teleport_package, ಅಜ್ಞಾತ ಕಾರ್ಯವಾಗಿ ತಿರಸ್ಕೃತವಾಗಿ ಎಂದೂ ಚಲಾಯಿಸಲ್ಪಡುವುದಿಲ್ಲ. ಅಭ್ಯರ್ಥಿ 2, handover_package, ನಿಜವಾದ operator ಆದರೆ ಟ್ರಕ್ ಇನ್ನೂ ಗೋದಾಮಿನಲ್ಲಿರುವುದರಿಂದ ಪೂರ್ವಷರತ್ತು ವಿಫಲವಾಗಿ ಸಂಕೇತಾತ್ಮಕ ಮಾನ್ಯತೆ ವಿಫಲ. ಅಭ್ಯರ್ಥಿ 3, drive_to_customer, ಚಲಿಸುತ್ತದೆ, ಉಳಿದ handover ಕೂಡ ಚಲಿಸುತ್ತದೆ, ಮತ್ತು ಅಭ್ಯರ್ಥಿ ಸ್ವೀಕೃತ. ಅಂತಿಮ ಯೋಜನೆ pickup, load, drive, handover, ಒಂದು LLM ಕರೆ ಮತ್ತು 9 ಹುಡುಕಾಟ nodes ನಿಂದ, ಮಾದರಿ ಹಂತ ಇಲ್ಲದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Name-Only Validation Crashes",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಹೆಸರು-ಮಾತ್ರ ಮಾನ್ಯತೆ Crash ಆಗುತ್ತದೆ",
    "bodyEn": "Section 4 feeds a candidate [(\"drive_to_customer\",)], a real name with no package argument. A validator that checks only the name accepts it, and the precondition function then fails with \"ValueError: not enough values to unpack\". The arity-aware validator rejects it up front and planning fails cleanly with None. Model output needs structural validation as well as vocabulary validation, ideally through a structured-output schema, because a malformed proposal should be a rejected candidate and never a crash.",
    "bodyKn": "ವಿಭಾಗ 4 ಅಭ್ಯರ್ಥಿ [(\"drive_to_customer\",)], ಪ್ಯಾಕೇಜ್ ಆರ್ಗ್ಯುಮೆಂಟ್ ಇಲ್ಲದ ನಿಜವಾದ ಹೆಸರು, ಅನ್ನು ನೀಡುತ್ತದೆ. ಹೆಸರು ಮಾತ್ರ ಪರಿಶೀಲಿಸುವ validator ಅದನ್ನು ಸ್ವೀಕರಿಸುತ್ತದೆ, ಮತ್ತು ಪೂರ್ವಷರತ್ತು ಕಾರ್ಯ \"ValueError: not enough values to unpack\" ನೊಂದಿಗೆ ವಿಫಲವಾಗುತ್ತದೆ. ಆರ್ಗ್ಯುಮೆಂಟ್-ಅರಿವಿನ validator ಅದನ್ನು ಮೊದಲೇ ತಿರಸ್ಕರಿಸಿ ಯೋಜನೆ None ಜೊತೆ ಸ್ವಚ್ಛವಾಗಿ ವಿಫಲವಾಗುತ್ತದೆ. ಮಾದರಿ ಔಟ್‌ಪುಟ್‌ಗೆ ಶಬ್ದಕೋಶ ಮಾನ್ಯತೆಯ ಜೊತೆ ರಚನಾತ್ಮಕ ಮಾನ್ಯತೆಯೂ ಬೇಕು, ಆದರ್ಶವಾಗಿ ರಚನಾತ್ಮಕ-ಔಟ್‌ಪುಟ್ schema ಮೂಲಕ, ಏಕೆಂದರೆ ವಿರೂಪ ಪ್ರಸ್ತಾಪ ತಿರಸ್ಕೃತ ಅಭ್ಯರ್ಥಿಯಾಗಬೇಕು, ಎಂದೂ crash ಅಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Cycles and Wasted Model Calls",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಚಕ್ರಗಳು ಮತ್ತು ವ್ಯರ್ಥ ಮಾದರಿ ಕರೆಗಳು",
    "bodyEn": "Section 6 defines two methods that decompose into each other. With no depth limit the planner hits Python's RecursionError after 996 nodes, which says nothing about the domain; with a depth limit of 25 it stops after 27 nodes and returns None. Section 7 shows a cost: with a learned transport method whose condition fails (no driver), the model was asked 3 times, because after a leaf failure the fallback runs at every compound ancestor: transport, prepare and deliver. Real planners need depth, node and call budgets, cycle detection on (task, state) pairs, and candidate limits.",
    "bodyKn": "ವಿಭಾಗ 6 ಒಂದರೊಳಗೊಂದು ವಿಭಜನೆಯಾಗುವ ಎರಡು methods ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ. ಆಳ ಮಿತಿ ಇಲ್ಲದೆ planner 996 nodes ನಂತರ Python ನ RecursionError ತಲುಪುತ್ತದೆ, ಅದು ಕ್ಷೇತ್ರದ ಬಗ್ಗೆ ಏನನ್ನೂ ಹೇಳುವುದಿಲ್ಲ; 25 ರ ಆಳ ಮಿತಿಯೊಂದಿಗೆ 27 nodes ನಂತರ ನಿಂತು None ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ವಿಭಾಗ 7 ಒಂದು ವೆಚ್ಚ ತೋರಿಸುತ್ತದೆ: ಷರತ್ತು ವಿಫಲವಾಗುವ (ಚಾಲಕ ಇಲ್ಲ) ಕಲಿತ transport method ನೊಂದಿಗೆ ಮಾದರಿಯನ್ನು 3 ಬಾರಿ ಕೇಳಲಾಯಿತು, ಏಕೆಂದರೆ ಎಲೆ ವೈಫಲ್ಯದ ನಂತರ fallback ಪ್ರತಿ ಸಂಯುಕ್ತ ಪೂರ್ವಜನಲ್ಲಿ ಚಲಿಸುತ್ತದೆ: transport, prepare ಮತ್ತು deliver. ನಿಜವಾದ planners ಗೆ ಆಳ, node ಮತ್ತು ಕರೆ budgets, (task, state) ಜೋಡಿಗಳ ಮೇಲೆ ಚಕ್ರ ಪತ್ತೆ ಮತ್ತು ಅಭ್ಯರ್ಥಿ ಮಿತಿಗಳು ಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Learning Methods, With Conditions",
    "headingKn": "ಷರತ್ತುಗಳೊಂದಿಗೆ Methods ಕಲಿಯುವುದು",
    "bodyEn": "A validated fallback result can become a reusable method so future runs need no model call: with the learned method the plan is found with 0 LLM calls. It must carry applicability conditions. The lab's learned method requires a loaded package, the truck at the warehouse and an available driver; an unconditional cache of \"transport means drive\" would try to drive with no driver. Caching a single success blindly turns luck into a rule.",
    "bodyKn": "ಮಾನ್ಯ ಮಾಡಿದ fallback ಫಲಿತಾಂಶ ಮರುಬಳಸಬಹುದಾದ method ಆಗಬಹುದು, ಇದರಿಂದ ಭವಿಷ್ಯದ ಓಟಗಳಿಗೆ ಮಾದರಿ ಕರೆ ಬೇಡ: ಕಲಿತ method ನೊಂದಿಗೆ ಯೋಜನೆ 0 LLM ಕರೆಗಳಲ್ಲಿ ಸಿಗುತ್ತದೆ. ಅದು ಅನ್ವಯ ಷರತ್ತುಗಳನ್ನು ಹೊಂದಿರಬೇಕು. ಲ್ಯಾಬ್‌ನ ಕಲಿತ method ಗೆ ತುಂಬಿದ ಪ್ಯಾಕೇಜ್, ಗೋದಾಮಿನಲ್ಲಿ ಟ್ರಕ್ ಮತ್ತು ಲಭ್ಯ ಚಾಲಕ ಬೇಕು; \"transport ಎಂದರೆ drive\" ಎಂಬ ಷರತ್ತಿಲ್ಲದ cache ಚಾಲಕನಿಲ್ಲದೆ ಚಲಾಯಿಸಲು ಪ್ರಯತ್ನಿಸುತ್ತಿತ್ತು. ಒಂದು ಯಶಸ್ಸನ್ನು ಕುರುಡಾಗಿ cache ಮಾಡುವುದು ಅದೃಷ್ಟವನ್ನು ನಿಯಮ ಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Backtracking and Soundness",
    "headingKn": "Backtracking ಮತ್ತು Soundness",
    "bodyEn": "Section 5 gives transport_package two known methods. The first fails its preconditions, the planner backtracks and the second succeeds, with no LLM involved. If the planner returns a plan, every transition obeyed the encoded preconditions, which is soundness. Completeness, finding a plan whenever one exists, is a separate property this small planner does not claim. And the guarantee covers the model of the world, not the world: a stolen truck still reads as truck:warehouse until the state is corrected.",
    "bodyKn": "ವಿಭಾಗ 5 transport_package ಗೆ ಎರಡು ತಿಳಿದ methods ನೀಡುತ್ತದೆ. ಮೊದಲನೆಯದು ಪೂರ್ವಷರತ್ತು ವಿಫಲ, planner backtrack ಮಾಡಿ ಎರಡನೆಯದು ಯಶಸ್ವಿ, LLM ಇಲ್ಲದೆ. Planner ಯೋಜನೆ ಹಿಂತಿರುಗಿಸಿದರೆ ಪ್ರತಿ ಪರಿವರ್ತನೆ ಸಂಕೇತಿಸಿದ ಪೂರ್ವಷರತ್ತುಗಳಿಗೆ ಬದ್ಧ, ಇದೇ soundness. ಯೋಜನೆ ಇದ್ದಾಗಲೆಲ್ಲ ಕಂಡುಹಿಡಿಯುವ completeness ಬೇರೆ ಗುಣ, ಈ ಚಿಕ್ಕ planner ಅದನ್ನು ಹೇಳುವುದಿಲ್ಲ. ಮತ್ತು ಖಾತರಿ ಜಗತ್ತಿನ ಮಾದರಿಯನ್ನು ಒಳಗೊಳ್ಳುತ್ತದೆ, ಜಗತ್ತನ್ನಲ್ಲ: ಕದ್ದ ಟ್ರಕ್ state ಸರಿಪಡಿಸುವವರೆಗೆ truck:warehouse ಎಂದೇ ಓದಲ್ಪಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Models know a lot about how tasks usually decompose, and symbolic planners know exactly which actions are legal. Letting the model propose and the planner dispose gives coverage where methods are missing without giving up the guarantee.",
    "bodyKn": "ಕಾರ್ಯಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಹೇಗೆ ವಿಭಜನೆಯಾಗುತ್ತವೆ ಎಂದು ಮಾದರಿಗಳಿಗೆ ಬಹಳ ತಿಳಿದಿದೆ, ಮತ್ತು ಸಂಕೇತಾತ್ಮಕ planners ಗೆ ಯಾವ ಕ್ರಿಯೆಗಳು ಕಾನೂನುಬದ್ಧ ಎಂದು ನಿಖರವಾಗಿ ತಿಳಿದಿದೆ. ಮಾದರಿ ಸೂಚಿಸಿ planner ನಿರ್ಧರಿಸಲು ಬಿಡುವುದು ಖಾತರಿ ಬಿಡದೆ methods ಇಲ್ಲದಲ್ಲಿ ವ್ಯಾಪ್ತಿ ನೀಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a higher-ranked LLM candidate is a more valid one.\" Probability is not validity; even the top candidate goes through the planner.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಹೆಚ್ಚಿನ ಶ್ರೇಣಿಯ LLM ಅಭ್ಯರ್ಥಿ ಹೆಚ್ಚು ಮಾನ್ಯ.\" ಸಂಭವನೀಯತೆ ಮಾನ್ಯತೆ ಅಲ್ಲ; ಅಗ್ರ ಅಭ್ಯರ್ಥಿಯೂ planner ಮೂಲಕ ಹಾಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Backtracking: returning to an earlier choice when a branch fails. Candidate decomposition: an untrusted proposed subtask list. Fallback: asking a model only when known methods cannot decompose. Arity: the expected number of task arguments. Trust boundary: where probabilistic output meets deterministic checking. Learned method: a validated decomposition stored with conditions.",
    "bodyKn": "Backtracking: ಶಾಖೆ ವಿಫಲವಾದಾಗ ಹಿಂದಿನ ಆಯ್ಕೆಗೆ ಮರಳುವುದು. Candidate decomposition: ನಂಬಲಾಗದ ಪ್ರಸ್ತಾಪಿತ ಉಪಕಾರ್ಯ ಪಟ್ಟಿ. Fallback: ತಿಳಿದ methods ವಿಭಜಿಸಲಾಗದಾಗ ಮಾತ್ರ ಮಾದರಿ ಕೇಳುವುದು. Arity: ನಿರೀಕ್ಷಿತ ಕಾರ್ಯ ಆರ್ಗ್ಯುಮೆಂಟ್ ಸಂಖ್ಯೆ. Trust boundary: ಸಂಭವನೀಯ ಔಟ್‌ಪುಟ್ ನಿರ್ಧಾರಾತ್ಮಕ ಪರಿಶೀಲನೆ ಭೇಟಿಯಾಗುವ ಸ್ಥಳ. Learned method: ಷರತ್ತುಗಳೊಂದಿಗೆ ಸಂಗ್ರಹಿಸಿದ ಮಾನ್ಯ ವಿಭಜನೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Failure is information: None means try another branch. 2) Candidates are fed back through the planner with the remaining tasks. 3) Validate vocabulary and arity, or malformed output crashes. 4) A cycle with no depth limit ends in RecursionError. 5) A leaf failure triggered 3 model calls, one per compound ancestor. 6) Learned methods need conditions. 7) The final plan contains no model step. Part 3 switches to optimisation.",
    "bodyKn": "1) ವೈಫಲ್ಯ ಮಾಹಿತಿ: None ಎಂದರೆ ಇನ್ನೊಂದು ಶಾಖೆ ಪ್ರಯತ್ನಿಸಿ. 2) ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಉಳಿದ ಕಾರ್ಯಗಳೊಂದಿಗೆ planner ಮೂಲಕ ಮರಳಿ ಹಾಯಿಸಲಾಗುತ್ತದೆ. 3) ಶಬ್ದಕೋಶ ಮತ್ತು ಆರ್ಗ್ಯುಮೆಂಟ್ ಸಂಖ್ಯೆ ಮಾನ್ಯ ಮಾಡಿ, ಇಲ್ಲದಿದ್ದರೆ ವಿರೂಪ ಔಟ್‌ಪುಟ್ crash ಆಗುತ್ತದೆ. 4) ಆಳ ಮಿತಿ ಇಲ್ಲದ ಚಕ್ರ RecursionError ನಲ್ಲಿ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ. 5) ಒಂದು ಎಲೆ ವೈಫಲ್ಯ 3 ಮಾದರಿ ಕರೆಗಳನ್ನು ಪ್ರಚೋದಿಸಿತು, ಪ್ರತಿ ಸಂಯುಕ್ತ ಪೂರ್ವಜನಿಗೆ ಒಂದು. 6) ಕಲಿತ methods ಗೆ ಷರತ್ತುಗಳು ಬೇಕು. 7) ಅಂತಿಮ ಯೋಜನೆಯಲ್ಲಿ ಮಾದರಿ ಹಂತ ಇಲ್ಲ. ಭಾಗ 3 ಅತ್ಯುತ್ತಮೀಕರಣಕ್ಕೆ ಬದಲಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why does a fallback candidate get appended to the remaining parent tasks before validation?",
      "qKn": "ಮಾನ್ಯತೆಗೆ ಮೊದಲು fallback ಅಭ್ಯರ್ಥಿಯನ್ನು ಉಳಿದ ಪೋಷಕ ಕಾರ್ಯಗಳಿಗೆ ಏಕೆ ಸೇರಿಸಲಾಗುತ್ತದೆ?",
      "opts": [
       "To save memory",
       "A locally legal action can still lead to a dead end, so the whole remaining plan must succeed",
       "To skip preconditions",
       "Because candidates are always primitive"
      ],
      "optsKn": [
       "ಮೆಮೊರಿ ಉಳಿಸಲು",
       "ಸ್ಥಳೀಯವಾಗಿ ಕಾನೂನುಬದ್ಧ ಕ್ರಿಯೆಯೂ ಕೊನೆಯಿಲ್ಲದ ದಾರಿಗೆ ಒಯ್ಯಬಹುದು, ಆದ್ದರಿಂದ ಇಡೀ ಉಳಿದ ಯೋಜನೆ ಯಶಸ್ವಿಯಾಗಬೇಕು",
       "ಪೂರ್ವಷರತ್ತು ಬಿಟ್ಟುಬಿಡಲು",
       "ಅಭ್ಯರ್ಥಿಗಳು ಯಾವಾಗಲೂ ಪ್ರಾಚೀನ"
      ],
      "correct": 1
     },
     {
      "q": "What happened to the candidate [(\"drive_to_customer\",)] under name-only validation?",
      "qKn": "ಹೆಸರು-ಮಾತ್ರ ಮಾನ್ಯತೆಯಲ್ಲಿ ಅಭ್ಯರ್ಥಿ [(\"drive_to_customer\",)] ಗೆ ಏನಾಯಿತು?",
      "opts": [
       "It was accepted and worked",
       "It passed validation, then the precondition function crashed with an unpack error",
       "It was rejected cleanly",
       "It was rewritten"
      ],
      "optsKn": [
       "ಸ್ವೀಕರಿಸಲ್ಪಟ್ಟು ಕೆಲಸ ಮಾಡಿತು",
       "ಮಾನ್ಯತೆ ಪಾಸಾಯಿತು, ನಂತರ ಪೂರ್ವಷರತ್ತು ಕಾರ್ಯ unpack ದೋಷದೊಂದಿಗೆ crash ಆಯಿತು",
       "ಸ್ವಚ್ಛವಾಗಿ ತಿರಸ್ಕೃತವಾಯಿತು",
       "ಮರುಬರೆಯಲ್ಪಟ್ಟಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why did a failed learned method cost 3 LLM calls?",
      "qKn": "ವಿಫಲ ಕಲಿತ method 3 LLM ಕರೆಗಳನ್ನು ಏಕೆ ವೆಚ್ಚ ಮಾಡಿತು?",
      "opts": [
       "The model retried three times",
       "After the leaf failure the fallback ran at every compound ancestor: transport, prepare and deliver",
       "There were three candidates",
       "The cache was empty"
      ],
      "optsKn": [
       "ಮಾದರಿ ಮೂರು ಬಾರಿ ಮರುಪ್ರಯತ್ನಿಸಿತು",
       "ಎಲೆ ವೈಫಲ್ಯದ ನಂತರ fallback ಪ್ರತಿ ಸಂಯುಕ್ತ ಪೂರ್ವಜನಲ್ಲಿ ಚಲಿಸಿತು: transport, prepare ಮತ್ತು deliver",
       "ಮೂರು ಅಭ್ಯರ್ಥಿಗಳಿದ್ದವು",
       "cache ಖಾಲಿ ಇತ್ತು"
      ],
      "correct": 1
     },
     {
      "q": "Why does a learned method need applicability conditions?",
      "qKn": "ಕಲಿತ method ಗೆ ಅನ್ವಯ ಷರತ್ತುಗಳು ಏಕೆ ಬೇಕು?",
      "opts": [
       "To speed up Python",
       "The decomposition worked only under the conditions in which it was validated",
       "Conditions are decorative",
       "Methods cannot be stored otherwise"
      ],
      "optsKn": [
       "Python ವೇಗಗೊಳಿಸಲು",
       "ವಿಭಜನೆ ಮಾನ್ಯ ಮಾಡಿದ ಷರತ್ತುಗಳಲ್ಲಿ ಮಾತ್ರ ಕೆಲಸ ಮಾಡಿತು",
       "ಷರತ್ತುಗಳು ಅಲಂಕಾರ",
       "ಇಲ್ಲದಿದ್ದರೆ methods ಸಂಗ್ರಹಿಸಲಾಗದು"
      ],
      "correct": 1
     },
     {
      "q": "Does the final plan contain any LLM action?",
      "qKn": "ಅಂತಿಮ ಯೋಜನೆಯಲ್ಲಿ ಯಾವುದೇ LLM ಕ್ರಿಯೆ ಇದೆಯೇ?",
      "opts": [
       "Yes, the proposed candidate",
       "No, only operators; the model was used during search only",
       "Yes, the fallback call",
       "Only the first step"
      ],
      "optsKn": [
       "ಹೌದು, ಪ್ರಸ್ತಾಪಿತ ಅಭ್ಯರ್ಥಿ",
       "ಇಲ್ಲ, ಕೇವಲ operators; ಮಾದರಿ ಹುಡುಕಾಟದ ಸಮಯದಲ್ಲಿ ಮಾತ್ರ ಬಳಕೆಯಾಯಿತು",
       "ಹೌದು, fallback ಕರೆ",
       "ಮೊದಲ ಹೆಜ್ಜೆ ಮಾತ್ರ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
