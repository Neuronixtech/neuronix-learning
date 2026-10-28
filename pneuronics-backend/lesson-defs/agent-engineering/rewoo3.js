module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6066020ed05b321511",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "ReWOO and Plan-and-Execute (Part 3 of 3) — Solver, Replanning, Validation and Choosing the Pattern",
 "titleKn": "ReWOO ಮತ್ತು Plan-and-Execute (ಭಾಗ 3 / 3) — Solver, Replanning, ಪರಿಶೀಲನೆ ಮತ್ತು ಮಾದರಿ ಆಯ್ಕೆ",
 "desc": "Add the Solver and the complete pipeline, degrade gracefully on bad evidence, replan on events and catch the Solver bug that replanning exposes, find that the lesson's validator accepts a cycle, separate retry from replan, and choose among ReAct, ReWOO, Plan-and-Execute and Plan-and-Act.",
 "descKn": "Solver ಮತ್ತು ಸಂಪೂರ್ಣ ಪೈಪ್‌ಲೈನ್ ಸೇರಿಸಿ, ಕೆಟ್ಟ ಸಾಕ್ಷ್ಯದಲ್ಲಿ ಸುಂದರವಾಗಿ ಕುಂದಿ, ಘಟನೆಗಳ ಮೇಲೆ replan ಮಾಡಿ ಮತ್ತು replanning ಬಹಿರಂಗಪಡಿಸುವ Solver ದೋಷ ಹಿಡಿಯಿರಿ, ಪಾಠದ validator ಚಕ್ರವನ್ನು ಒಪ್ಪುತ್ತದೆ ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ, retry ಮತ್ತು replan ಬೇರ್ಪಡಿಸಿ, ಮತ್ತು ReAct, ReWOO, Plan-and-Execute ಹಾಗೂ Plan-and-Act ನಡುವೆ ಆರಿಸಿ.",
 "objectives": [
  "Implement a Solver that composes evidence and degrades gracefully on missing or failed evidence.",
  "Build the complete plan, validate, execute and solve pipeline.",
  "Replan on events and make the Solver follow the dependency chain of its answer.",
  "Validate plans for cycles before execution and explain why a valid DAG is not an authorized one.",
  "Choose between ReAct, ReWOO, Plan-and-Execute and Plan-and-Act using five questions."
 ],
 "objectivesKn": [
  "ಕಾಣೆಯಾದ ಅಥವಾ ವಿಫಲ ಸಾಕ್ಷ್ಯದಲ್ಲಿ ಸುಂದರವಾಗಿ ಕುಂದುವ, ಸಾಕ್ಷ್ಯ ಸಂಯೋಜಿಸುವ Solver ಅಳವಡಿಸಿ.",
  "ಸಂಪೂರ್ಣ ಯೋಜನೆ, ಪರಿಶೀಲನೆ, ಕಾರ್ಯಗತ ಮತ್ತು solve ಪೈಪ್‌ಲೈನ್ ನಿರ್ಮಿಸಿ.",
  "ಘಟನೆಗಳ ಮೇಲೆ replan ಮಾಡಿ ಮತ್ತು Solver ತನ್ನ ಉತ್ತರದ ಅವಲಂಬನೆ ಸರಪಳಿ ಅನುಸರಿಸುವಂತೆ ಮಾಡಿ.",
  "ಕಾರ್ಯಗತಗೊಳಿಸುವ ಮೊದಲು ಯೋಜನೆಗಳಲ್ಲಿ ಚಕ್ರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಮಾನ್ಯ DAG ಅಧಿಕೃತವಲ್ಲ ಎಂದು ವಿವರಿಸಿ.",
  "ಐದು ಪ್ರಶ್ನೆಗಳನ್ನು ಬಳಸಿ ReAct, ReWOO, Plan-and-Execute ಮತ್ತು Plan-and-Act ನಡುವೆ ಆರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "ReWOO and Plan-and-Execute (Part 3 of 3)",
    "textKn": "ReWOO ಮತ್ತು Plan-and-Execute (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: the Solver, graceful degradation, replanning, plan validation, the complete pipeline, and choosing among ReAct, ReWOO, Plan-and-Execute and Plan-and-Act. Every output was genuinely produced by rewoo_3.py on Python 3.14.5. The source lesson's Part 3 was cut off before the end, so the Solver, Replanner and pipeline are our implementation of its description. The Replanner is a scripted stand-in, not a model.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ ಮೂರನೆಯದು: Solver, ಸುಂದರ ಅವನತಿ, replanning, ಯೋಜನೆ ಪರಿಶೀಲನೆ, ಸಂಪೂರ್ಣ ಪೈಪ್‌ಲೈನ್, ಮತ್ತು ReAct, ReWOO, Plan-and-Execute ಹಾಗೂ Plan-and-Act ನಡುವೆ ಆಯ್ಕೆ. ಎಲ್ಲಾ output rewoo_3.py ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಮೂಲ ಪಾಠದ ಭಾಗ 3 ಕೊನೆಗೆ ಮೊದಲೇ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಹಾಗಾಗಿ Solver, Replanner ಮತ್ತು ಪೈಪ್‌ಲೈನ್ ಅದರ ವಿವರಣೆಯ ನಮ್ಮ ಅಳವಡಿಕೆ. Replanner ಸ್ಕ್ರಿಪ್ಟ್ ಬದಲಿ, ಮಾದರಿ ಅಲ್ಲ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Solver",
    "textKn": "Solver",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Evidence Is Not the Final Answer",
    "headingKn": "ಸಾಕ್ಷ್ಯ ಅಂತಿಮ ಉತ್ತರವಲ್ಲ",
    "bodyEn": "The Workers return 2148000, but the user asked for the population rounded to millions. Converting evidence into an answer, and deciding what to say when evidence is missing or failed, is the Solver's job. Keeping it separate means tools stay reusable (population_of does not return a sentence) and the same evidence can answer different questions: \"what is it\", \"rounded to millions\" or \"is it above 3 million\". The Solver reads question, plan and evidence, and never executes a tool.",
    "bodyKn": "Workers 2148000 ಹಿಂತಿರುಗಿಸುತ್ತಾರೆ, ಆದರೆ ಬಳಕೆದಾರ ಮಿಲಿಯನ್‌ಗಳಿಗೆ ಸುತ್ತಿದ ಜನಸಂಖ್ಯೆ ಕೇಳಿದ್ದಾರೆ. ಸಾಕ್ಷ್ಯವನ್ನು ಉತ್ತರವಾಗಿ ಪರಿವರ್ತಿಸುವುದು, ಮತ್ತು ಸಾಕ್ಷ್ಯ ಕಾಣೆಯಾದಾಗ ಅಥವಾ ವಿಫಲವಾದಾಗ ಏನು ಹೇಳಬೇಕೆಂದು ನಿರ್ಧರಿಸುವುದು Solver ನ ಕೆಲಸ. ಅದನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿಟ್ಟರೆ tools ಮರುಬಳಕೆಗೆ ಯೋಗ್ಯವಾಗಿರುತ್ತವೆ (population_of ವಾಕ್ಯ ಹಿಂತಿರುಗಿಸುವುದಿಲ್ಲ) ಮತ್ತು ಅದೇ ಸಾಕ್ಷ್ಯ ಬೇರೆ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಬಹುದು: \"ಅದು ಎಷ್ಟು\", \"ಮಿಲಿಯನ್‌ಗೆ ಸುತ್ತಿದ್ದು\" ಅಥವಾ \"3 ಮಿಲಿಯನ್‌ಗಿಂತ ಹೆಚ್ಚೇ\". Solver ಪ್ರಶ್ನೆ, ಯೋಜನೆ ಮತ್ತು ಸಾಕ್ಷ್ಯ ಓದುತ್ತದೆ, ಎಂದೂ tool ಚಲಾಯಿಸುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Complete Pipeline",
    "headingKn": "ಸಂಪೂರ್ಣ ಪೈಪ್‌ಲೈನ್",
    "svgCode": "<svg viewBox=\"0 0 300 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"210\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">ReWOO: plan once, execute, then solve</text>\n  <rect x=\"30\" y=\"24\" width=\"240\" height=\"22\" rx=\"4\" fill=\"#1e293b\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"39\" fill=\"#fde68a\" text-anchor=\"middle\">QUESTION</text>\n  <path d=\"M150,46 V56\" stroke=\"#475569\"/>\n  <rect x=\"30\" y=\"58\" width=\"240\" height=\"26\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"69\" fill=\"#93c5fd\" text-anchor=\"middle\">PLANNER (no tool results yet)</text><text x=\"150\" y=\"79\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"6\">E1=capital_of(France)  E2=population_of(#E1)</text>\n  <path d=\"M150,84 V94\" stroke=\"#475569\"/>\n  <rect x=\"30\" y=\"96\" width=\"240\" height=\"26\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"107\" fill=\"#6ee7b7\" text-anchor=\"middle\">EXECUTOR + WORKERS</text><text x=\"150\" y=\"117\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">ready nodes, resolve #E, run tools (parallel per level)</text>\n  <path d=\"M150,122 V132\" stroke=\"#475569\"/>\n  <rect x=\"30\" y=\"134\" width=\"240\" height=\"22\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"149\" fill=\"#c4b5fd\" text-anchor=\"middle\">EVIDENCE STORE: E1=Paris  E2=2148000</text>\n  <path d=\"M150,156 V166\" stroke=\"#475569\"/>\n  <rect x=\"30\" y=\"168\" width=\"240\" height=\"22\" rx=\"4\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"183\" fill=\"#fde68a\" text-anchor=\"middle\">SOLVER: question + plan + evidence -> answer</text>\n  <text x=\"150\" y=\"203\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a Replanner may sit around the executor for Plan-and-Execute</text>\n</svg>",
    "captionEn": "Planner, validator, executor, workers, evidence store and Solver. A Replanner can sit around the executor.",
    "captionKn": "Planner, validator, executor, workers, ಸಾಕ್ಷ್ಯ ಸಂಗ್ರಹ ಮತ್ತು Solver. Replanner executor ಸುತ್ತ ಇರಬಹುದು."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building and Running It",
    "textKn": "ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rewoo_3.py",
    "headingEn": "NaiveSolver, the fixed Solver and the lesson's validator",
    "headingKn": "NaiveSolver, ಸರಿಪಡಿಸಿದ Solver ಮತ್ತು ಪಾಠದ validator",
    "descEn": "NaiveSolver is our first version: capital from the first capital node, population from the last good population node. Solver is the fixed version, which reports the capital that the successful population node actually depended on. pasted_validate_plan is the validator as the lesson writes it: ids, tools, missing and self dependencies, and no cycle check.",
    "descKn": "NaiveSolver ನಮ್ಮ ಮೊದಲ ಆವೃತ್ತಿ: ಮೊದಲ capital ನೋಡ್‌ನಿಂದ capital, ಕೊನೆಯ ಒಳ್ಳೆಯ population ನೋಡ್‌ನಿಂದ population. Solver ಸರಿಪಡಿಸಿದ ಆವೃತ್ತಿ, ಯಶಸ್ವಿ population ನೋಡ್ ನಿಜವಾಗಿ ಅವಲಂಬಿಸಿದ capital ಅನ್ನು ವರದಿ ಮಾಡುತ್ತದೆ. pasted_validate_plan ಪಾಠ ಬರೆದಂತೆಯೇ ಇರುವ validator: ids, tools, ಕಾಣೆಯಾದ ಮತ್ತು ಸ್ವಯಂ ಅವಲಂಬನೆ, ಚಕ್ರ ಪರಿಶೀಲನೆ ಇಲ್ಲ.",
    "code": "class NaiveSolver:\n    \"\"\"First version: capital from the first capital node, population from the last good population node.\"\"\"\n\n    def solve(self, question: str, plan: list[PlanNode], evidence: dict[str, WorkerResult]) -> str:\n        pop_nodes = [n for n in plan if n.tool == \"population_of\"]\n        cap_nodes = [n for n in plan if n.tool == \"capital_of\"]\n        if \"compare\" in question.lower():\n            return self._compare(plan, evidence)\n        capital = evidence.get(cap_nodes[0].evidence_id) if cap_nodes else None\n        if capital is None:\n            return \"I could not determine the capital because capital evidence is missing.\"\n        if not capital.ok:\n            return f\"I could not determine the capital: {capital.error}\"\n        ok_pops = [evidence[n.evidence_id] for n in pop_nodes if n.evidence_id in evidence and evidence[n.evidence_id].ok]\n        if not ok_pops:\n            failed = [evidence[n.evidence_id] for n in pop_nodes if n.evidence_id in evidence]\n            why = failed[-1].error if failed else \"population evidence is missing\"\n            return f\"The capital is {capital.value}, but I could not determine its population: {why}\"\n        millions = round(ok_pops[-1].value / 1_000_000)\n        return f\"The capital of France is {capital.value}, with a population of approximately {millions} million.\"\n\n    def _compare(self, plan, evidence):\n        rows = []\n        for n in plan:\n            if n.tool == \"population_of\":\n                city = evidence[n.dependencies[0]]\n                pop = evidence[n.evidence_id]\n                if not (city.ok and pop.ok):\n                    return \"I could not compare: \" + (pop.error or city.error)\n                rows.append((city.value, pop.value))\n        rows.sort(key=lambda r: -r[1])\n        return f\"{rows[0][0]} has the larger population ({rows[0][1]:,} vs {rows[1][1]:,} for {rows[1][0]}).\"\n\n\nclass Solver(NaiveSolver):\n    \"\"\"Fixed: the capital reported is the one the successful population node actually depended on.\"\"\"\n\n    def solve(self, question, plan, evidence):\n        if \"compare\" in question.lower():\n            return self._compare(plan, evidence)\n        good = [n for n in plan if n.tool == \"population_of\" and n.evidence_id in evidence and evidence[n.evidence_id].ok]\n        if good:\n            node = good[-1]\n            city = evidence[node.dependencies[0]].value\n            millions = round(evidence[node.evidence_id].value / 1_000_000)\n            return f\"The capital of France is {city}, with a population of approximately {millions} million.\"\n        return super().solve(question, plan, evidence)\n\n\ndef pasted_validate_plan(plan, registry):\n    \"\"\"The validator as the lesson writes it: ids, tools, missing and self dependencies. No cycle check.\"\"\"\n    ids = {n.evidence_id for n in plan}\n    if len(ids) != len(plan):\n        raise ValueError(\"Duplicate evidence IDs.\")\n    for n in plan:\n        if n.tool not in registry:\n            raise ValueError(f\"Unknown tool: {n.tool}\")\n        for d in n.dependencies:\n            if d not in ids:\n                raise ValueError(f\"{n.evidence_id} depends on missing node {d}\")\n            if d == n.evidence_id:\n                raise ValueError(f\"{n.evidence_id} cannot depend on itself.\")"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rewoo_3.py",
    "headingEn": "verify_capital, Replanner and run()",
    "headingKn": "verify_capital, Replanner ಮತ್ತು run()",
    "descEn": "The Replanner is event-driven: it only acts when a population node failed, and then appends a verification node and a second population node. run() is the whole pipeline: plan, validate, execute, solve, print.",
    "descKn": "Replanner ಘಟನೆ-ಚಾಲಿತ: population ನೋಡ್ ವಿಫಲವಾದಾಗ ಮಾತ್ರ ಕಾರ್ಯನಿರ್ವಹಿಸಿ, ದೃಢೀಕರಣ ನೋಡ್ ಮತ್ತು ಎರಡನೇ population ನೋಡ್ ಸೇರಿಸುತ್ತದೆ. run() ಇಡೀ ಪೈಪ್‌ಲೈನ್: ಯೋಜನೆ, ಪರಿಶೀಲನೆ, ಕಾರ್ಯಗತ, solve, ಮುದ್ರಣ.",
    "code": "def verify_capital(country: str) -> str:\n    \"\"\"A second, independent source used by the replanner.\"\"\"\n    return {\"France\": \"Paris\", \"Germany\": \"Berlin\", \"Italy\": \"Rome\"}[country]\n\n\nclass Replanner:\n    \"\"\"Event-driven: replans only when a population node failed because its city is suspicious.\"\"\"\n\n    def replan(self, plan, evidence):\n        failed = [n for n in plan if n.tool == \"population_of\" and not evidence[n.evidence_id].ok]\n        if not failed:\n            return None\n        return plan + [PlanNode(\"E3\", \"verify_capital\", {\"country\": \"France\"}),\n                       PlanNode(\"E4\", \"population_of\", {\"city\": \"#E3\"}, [\"E3\"])]\n\n\ndef run(question, registry=TOOL_REGISTRY, verbose=True):\n    planner, solver = Planner(), Solver()\n    ex = DAGExecutor(Worker(registry))\n    plan = planner.plan(question)\n    pasted_validate_plan(plan, registry)\n    evidence = ex.execute(plan)\n    answer = solver.solve(question, plan, evidence)\n    if verbose:\n        print(\"QUESTION:\", question)\n        print(\"=== PLAN ===\")\n        for n in plan:\n            print(f\"{n.evidence_id}: {n.tool}({n.arguments}) depends_on={n.dependencies}\")\n        print(\"=== EVIDENCE ===\")\n        r2.show_evidence(evidence)\n        print(\"=== FINAL ANSWER ===\")\n        print(answer)\n    return plan, evidence, answer"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rewoo_3.py",
    "headingEn": "main(): seven experiments",
    "headingKn": "main(): ಏಳು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the complete pipeline, degrades the Solver three ways, breaks a data source, replans, feeds the lesson's validator a cyclic plan, runs the comparison plan, and contrasts retry with replan.",
    "descKn": "main() ಸಂಪೂರ್ಣ ಪೈಪ್‌ಲೈನ್ ಚಲಾಯಿಸುತ್ತದೆ, Solver ಅನ್ನು ಮೂರು ರೀತಿ ಕುಂದಿಸುತ್ತದೆ, ಡೇಟಾ ಮೂಲ ಮುರಿಯುತ್ತದೆ, replan ಮಾಡುತ್ತದೆ, ಪಾಠದ validator ಗೆ ಚಕ್ರ ಯೋಜನೆ ನೀಡುತ್ತದೆ, ಹೋಲಿಕೆ ಯೋಜನೆ ಚಲಾಯಿಸುತ್ತದೆ, ಮತ್ತು retry ಮತ್ತು replan ಅನ್ನು ಹೋಲಿಸುತ್ತದೆ.",
    "code": "def main():\n    Q = \"What is the population of the capital of France, rounded to millions?\"\n\n    section(\"1. The complete pipeline\")\n    run(Q)\n\n    section(\"2. Solver degradation: evidence missing, failed, partial\")\n    solver = Solver()\n    plan = Planner().plan(Q)\n    print(\"E1 missing :\", solver.solve(Q, plan, {}))\n    print(\"E1 failed  :\", solver.solve(Q, plan, {\"E1\": WorkerResult(False, error=\"Capital service unavailable\")}))\n    print(\"E2 failed  :\", solver.solve(Q, plan, {\"E1\": WorkerResult(True, \"Paris\"), \"E2\": WorkerResult(False, error=\"Population service unavailable\")}))\n\n    section(\"3. A bad capital from the data source ('Atlantis')\")\n    saved = dict(r2.CAPITALS)\n    r2.CAPITALS[\"France\"] = \"Atlantis\"\n    _, ev, ans = run(Q, verbose=False)\n    r2.CAPITALS.update(saved)\n    r2.show_evidence(ev)\n    print(\"answer:\", ans)\n\n    section(\"4. Event-driven replanning recovers\")\n    r2.CAPITALS[\"France\"] = \"Atlantis\"\n    plan1 = Planner().plan(Q)\n    ev1 = DAGExecutor(Worker({**TOOL_REGISTRY, \"verify_capital\": verify_capital})).execute(plan1)\n    print(\"first attempt:\", solver.solve(Q, plan1, ev1))\n    new_plan = Replanner().replan(plan1, ev1)\n    print(\"replanner added nodes:\", [n.evidence_id + \":\" + n.tool for n in new_plan[len(plan1):]])\n    ev2 = DAGExecutor(Worker({**TOOL_REGISTRY, \"verify_capital\": verify_capital})).execute(new_plan)\n    r2.show_evidence(ev2)\n    print(\"after replan, NaiveSolver:\", NaiveSolver().solve(Q, new_plan, ev2))\n    print(\"after replan, fixed Solver:\", solver.solve(Q, new_plan, ev2))\n    r2.CAPITALS.update(saved)\n\n    section(\"5. The lesson's validate_plan against a cyclic plan\")\n    cyc = [PlanNode(\"E1\", \"capital_of\", {\"country\": \"#E2\"}, [\"E2\"]), PlanNode(\"E2\", \"capital_of\", {\"country\": \"#E1\"}, [\"E1\"])]\n    try:\n        pasted_validate_plan(cyc, TOOL_REGISTRY)\n        print(\"pasted validate_plan: ACCEPTED the cyclic plan\")\n    except ValueError as exc:\n        print(\"pasted validate_plan rejected it:\", exc)\n    print(\"with cycle check    :\", full_validate(cyc))\n    try:\n        DAGExecutor(Worker(TOOL_REGISTRY)).execute(cyc)\n    except RuntimeError as exc:\n        print(\"executor at runtime :\", exc)\n\n    section(\"6. A parallel comparison through the same pipeline\")\n    run(\"Compare the populations of the capitals of France and Germany.\")\n\n    section(\"7. Retry versus replan\")\n    attempts = []\n\n    def flaky(city):\n        attempts.append(city)\n        if len(attempts) < 3:\n            raise TimeoutError(\"temporary timeout\")\n        return 2_148_000\n\n    def with_retry(fn, tries=3):\n        last = None\n        for _ in range(tries):\n            try:\n                return fn()\n            except TimeoutError as exc:\n                last = exc\n        raise last\n\n    print(\"flaky tool with bounded retry ->\", with_retry(lambda: flaky(\"Paris\")), \"after\", len(attempts), \"attempts\")\n    try:\n        with_retry(lambda: (_ for _ in ()).throw(KeyError(\"unknown city\")))\n    except KeyError as exc:\n        print(\"a non-transient error is not retried; it is a replanning signal:\", exc)"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. The complete pipeline ---\nQUESTION: What is the population of the capital of France, rounded to millions?\n=== PLAN ===\nE1: capital_of({'country': 'France'}) depends_on=[]\nE2: population_of({'city': '#E1'}) depends_on=['E1']\n=== EVIDENCE ===\nE1: Paris\nE2: 2148000\n=== FINAL ANSWER ===\nThe capital of France is Paris, with a population of approximately 2 million.\n\n--- 2. Solver degradation: evidence missing, failed, partial ---\nE1 missing : I could not determine the capital because capital evidence is missing.\nE1 failed  : I could not determine the capital: Capital service unavailable\nE2 failed  : The capital is Paris, but I could not determine its population: Population service unavailable\n\n--- 3. A bad capital from the data source ('Atlantis') ---\nE1: Atlantis\nE2: ERROR: No population data for Atlantis\nanswer: The capital is Atlantis, but I could not determine its population: No population data for Atlantis\n\n--- 4. Event-driven replanning recovers ---\nfirst attempt: The capital is Atlantis, but I could not determine its population: No population data for Atlantis\nreplanner added nodes: ['E3:verify_capital', 'E4:population_of']\nE1: Atlantis\nE2: ERROR: No population data for Atlantis\nE3: Paris\nE4: 2148000\nafter replan, NaiveSolver: The capital of France is Atlantis, with a population of approximately 2 million.\nafter replan, fixed Solver: The capital of France is Paris, with a population of approximately 2 million.\n\n--- 5. The lesson's validate_plan against a cyclic plan ---\npasted validate_plan: ACCEPTED the cyclic plan\nwith cycle check    : ['no progress possible: cycle or missing dependency among E1, E2']\nexecutor at runtime : Plan cannot make progress. Possible cycle or missing dependency.\n\n--- 6. A parallel comparison through the same pipeline ---\nQUESTION: Compare the populations of the capitals of France and Germany.\n=== PLAN ===\nE1: capital_of({'country': 'France'}) depends_on=[]\nE2: capital_of({'country': 'Germany'}) depends_on=[]\nE3: population_of({'city': '#E1'}) depends_on=['E1']\nE4: population_of({'city': '#E2'}) depends_on=['E2']\n=== EVIDENCE ===\nE1: Paris\nE2: Berlin\nE3: 2148000\nE4: 3755000\n=== FINAL ANSWER ===\nBerlin has the larger population (3,755,000 vs 2,148,000 for Paris).\n\n--- 7. Retry versus replan ---\nflaky tool with bounded retry -> 2148000 after 3 attempts\na non-transient error is not retried; it is a replanning signal: 'unknown city'"
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
    "headingEn": "The Pipeline Works and Degrades Gracefully",
    "headingKn": "ಪೈಪ್‌ಲೈನ್ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಮತ್ತು ಸುಂದರವಾಗಿ ಕುಂದುತ್ತದೆ",
    "bodyEn": "Section 1 prints the three stages separately: the two-node plan, the evidence (E1 Paris, E2 2148000) and \"approximately 2 million\" (round(2.148) = 2). Section 2 feeds the Solver three bad evidence stores: missing E1, failed E1 and failed E2. Each gets a specific sentence, including the partial case \"The capital is Paris, but I could not determine its population\". A crash or a bare \"FAILED\" would discard the part that did succeed. Section 6 shows the same pipeline on the parallel plan: Berlin 3,755,000 against Paris 2,148,000.",
    "bodyKn": "ವಿಭಾಗ 1 ಮೂರು ಹಂತಗಳನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಮುದ್ರಿಸುತ್ತದೆ: ಎರಡು-ನೋಡ್ ಯೋಜನೆ, ಸಾಕ್ಷ್ಯ (E1 Paris, E2 2148000) ಮತ್ತು \"approximately 2 million\" (round(2.148) = 2). ವಿಭಾಗ 2 Solver ಗೆ ಮೂರು ಕೆಟ್ಟ ಸಾಕ್ಷ್ಯ ಸಂಗ್ರಹಗಳನ್ನು ನೀಡುತ್ತದೆ: ಕಾಣೆಯಾದ E1, ವಿಫಲ E1 ಮತ್ತು ವಿಫಲ E2. ಪ್ರತಿಯೊಂದಕ್ಕೂ ನಿರ್ದಿಷ್ಟ ವಾಕ್ಯ ಸಿಗುತ್ತದೆ, \"The capital is Paris, but I could not determine its population\" ಎಂಬ ಭಾಗಶಃ ಪ್ರಕರಣ ಸೇರಿ. Crash ಅಥವಾ ಬರಿಯ \"FAILED\" ಯಶಸ್ವಿಯಾದ ಭಾಗವನ್ನು ಬಿಸಾಡುತ್ತದೆ. ವಿಭಾಗ 6 ಅದೇ ಪೈಪ್‌ಲೈನ್ ಸಮಾನಾಂತರ ಯೋಜನೆಯಲ್ಲಿ ತೋರಿಸುತ್ತದೆ: Berlin 3,755,000 ವಿರುದ್ಧ Paris 2,148,000."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Replanning Produced a Self-Contradictory Answer",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Replanning ಸ್ವಯಂ-ವಿರೋಧಿ ಉತ್ತರ ನೀಡಿತು",
    "bodyEn": "Section 3 corrupts the data source so the capital of France is \"Atlantis\". The first attempt fails honestly: \"The capital is Atlantis, but I could not determine its population\". Section 4 replans by adding verify_capital (E3 = Paris) and a second population lookup (E4 = 2148000). The evidence is now correct, yet our first Solver said \"The capital of France is Atlantis, with a population of approximately 2 million\": it took the capital from E1 and the population from E4. The fixed Solver says \"The capital of France is Paris, ...\". Replanning adds evidence, but nothing tells the Solver which evidence supersedes which, so the Solver has to follow the dependency chain of the answer it reports.",
    "bodyKn": "ವಿಭಾಗ 3 ಡೇಟಾ ಮೂಲವನ್ನು ಹಾಳುಮಾಡಿ France ನ ರಾಜಧಾನಿ \"Atlantis\" ಆಗುವಂತೆ ಮಾಡುತ್ತದೆ. ಮೊದಲ ಪ್ರಯತ್ನ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವಿಫಲ: \"The capital is Atlantis, but I could not determine its population\". ವಿಭಾಗ 4 verify_capital (E3 = Paris) ಮತ್ತು ಎರಡನೇ population ಹುಡುಕಾಟ (E4 = 2148000) ಸೇರಿಸಿ replan ಮಾಡುತ್ತದೆ. ಸಾಕ್ಷ್ಯ ಈಗ ಸರಿ, ಆದರೂ ನಮ್ಮ ಮೊದಲ Solver \"The capital of France is Atlantis, with a population of approximately 2 million\" ಎಂದಿತು: capital ಅನ್ನು E1 ನಿಂದ ಮತ್ತು population ಅನ್ನು E4 ನಿಂದ ತೆಗೆದುಕೊಂಡಿತು. ಸರಿಪಡಿಸಿದ Solver \"The capital of France is Paris, ...\" ಎನ್ನುತ್ತದೆ. Replanning ಸಾಕ್ಷ್ಯ ಸೇರಿಸುತ್ತದೆ, ಆದರೆ ಯಾವ ಸಾಕ್ಷ್ಯ ಯಾವುದನ್ನು ಮೀರಿಸುತ್ತದೆ ಎಂದು Solver ಗೆ ಏನೂ ಹೇಳುವುದಿಲ್ಲ; ಆದ್ದರಿಂದ Solver ತಾನು ವರದಿ ಮಾಡುವ ಉತ್ತರದ ಅವಲಂಬನೆ ಸರಪಳಿಯನ್ನು ಅನುಸರಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Lesson's Validator Accepts a Cycle",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪಾಠದ Validator ಚಕ್ರವನ್ನು ಒಪ್ಪುತ್ತದೆ",
    "bodyEn": "Section 5 gives a two-node cycle to the validator exactly as the lesson writes it, and it prints \"ACCEPTED the cyclic plan\". The source notes that cycle detection \"could then be added separately\", and this shows why it must be. Our full validator rejects it at plan time with a precise message, and the executor would otherwise only discover it at runtime with the generic RuntimeError from Part 2. Validate before executing, not after the first tool has already run.",
    "bodyKn": "ವಿಭಾಗ 5 ಪಾಠ ಬರೆದಂತೆಯೇ ಇರುವ validator ಗೆ ಎರಡು-ನೋಡ್ ಚಕ್ರ ನೀಡುತ್ತದೆ, ಮತ್ತು ಅದು \"ACCEPTED the cyclic plan\" ಮುದ್ರಿಸುತ್ತದೆ. ಚಕ್ರ ಪತ್ತೆ \"ನಂತರ ಪ್ರತ್ಯೇಕವಾಗಿ ಸೇರಿಸಬಹುದು\" ಎಂದು ಮೂಲ ಹೇಳುತ್ತದೆ, ಮತ್ತು ಅದು ಏಕೆ ಸೇರಿಸಬೇಕು ಎಂದು ಇದು ತೋರಿಸುತ್ತದೆ. ನಮ್ಮ ಸಂಪೂರ್ಣ validator ಅದನ್ನು ಯೋಜನೆ ಹಂತದಲ್ಲೇ ನಿಖರ ಸಂದೇಶದೊಂದಿಗೆ ತಿರಸ್ಕರಿಸುತ್ತದೆ; ಇಲ್ಲದಿದ್ದರೆ executor ಅದನ್ನು ಭಾಗ 2 ರ ಸಾಮಾನ್ಯ RuntimeError ಜೊತೆ runtime ನಲ್ಲಿ ಮಾತ್ರ ಕಂಡುಹಿಡಿಯುತ್ತದೆ. ಮೊದಲ tool ಈಗಾಗಲೇ ಚಲಿಸಿದ ಮೇಲೆ ಅಲ್ಲ, ಚಲಾಯಿಸುವ ಮೊದಲು ಪರಿಶೀಲಿಸಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Retry Is Not Replan",
    "headingKn": "Retry ಎಂದರೆ Replan ಅಲ್ಲ",
    "bodyEn": "Section 7 separates the two. A flaky tool that raises a temporary timeout twice succeeds on the third bounded attempt, so the plan was fine and only the operation failed: retry. An unknown city cannot be fixed by trying the same call again; it says the strategy needs to change: replan. Reflecting that in code means classifying errors (transient, permanent, dependency) before choosing a response, and keeping both loops bounded.",
    "bodyKn": "ವಿಭಾಗ 7 ಎರಡನ್ನೂ ಬೇರ್ಪಡಿಸುತ್ತದೆ. ತಾತ್ಕಾಲಿಕ timeout ಅನ್ನು ಎರಡು ಬಾರಿ raise ಮಾಡುವ ಅಸ್ಥಿರ tool ಮೂರನೇ ಮಿತಿಯ ಪ್ರಯತ್ನದಲ್ಲಿ ಯಶಸ್ವಿಯಾಗುತ್ತದೆ; ಯೋಜನೆ ಸರಿಯಿತ್ತು, ಕಾರ್ಯ ಮಾತ್ರ ವಿಫಲವಾಯಿತು: retry. ತಿಳಿಯದ ನಗರವನ್ನು ಅದೇ ಕರೆ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ ಸರಿಪಡಿಸಲಾಗದು; ತಂತ್ರ ಬದಲಾಗಬೇಕು ಎಂದು ಅದು ಹೇಳುತ್ತದೆ: replan. ಇದನ್ನು ಕೋಡ್‌ನಲ್ಲಿ ಪ್ರತಿಬಿಂಬಿಸಲು ಪ್ರತಿಕ್ರಿಯೆ ಆರಿಸುವ ಮೊದಲು ದೋಷಗಳನ್ನು (ತಾತ್ಕಾಲಿಕ, ಶಾಶ್ವತ, ಅವಲಂಬನೆ) ವರ್ಗೀಕರಿಸಬೇಕು, ಮತ್ತು ಎರಡೂ loops ಅನ್ನು ಮಿತಿಯಲ್ಲಿಡಬೇಕು."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Choosing the Pattern",
    "textKn": "ಮಾದರಿ ಆರಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "ReAct, ReWOO, Plan-and-Execute and Plan-and-Act",
    "headingKn": "ReAct, ReWOO, Plan-and-Execute ಮತ್ತು Plan-and-Act",
    "headers": [
     "Pattern",
     "Core idea",
     "Best fit"
    ],
    "rows": [
     [
      "ReAct",
      "Reason after every observation",
      "Short, reactive or unknown environments"
     ],
     [
      "ReWOO",
      "Plan once, execute, solve",
      "Structured, predictable tool workflows with independent steps"
     ],
     [
      "Plan-and-Execute",
      "Plan, execute, replan on events",
      "Predictable workflow whose results sometimes force a new strategy"
     ],
     [
      "Plan-and-Act",
      "High-level plan plus low-level actions",
      "Long-horizon web, mobile and computer-use tasks"
     ],
     [
      "Tree of Thoughts",
      "Search over alternative reasoning paths",
      "Next lesson: problems where branching and backtracking help"
     ]
    ]
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Five questions for choosing",
    "headingKn": "ಆರಿಸಲು ಐದು ಪ್ರಶ್ನೆಗಳು",
    "headers": [
     "Question",
     "If yes"
    ],
    "rows": [
     [
      "Can most steps be predicted before the first tool runs?",
      "Plan first (ReWOO or Plan-and-Execute)"
     ],
     [
      "Are several operations independent?",
      "A DAG exposes parallelism"
     ],
     [
      "Is the environment unpredictable?",
      "Prefer ReAct or frequent replanning"
     ],
     [
      "Is the task long (30 or more actions)?",
      "Keep an explicit high-level plan"
     ],
     [
      "Is repeated model reasoning expensive?",
      "Concentrate model calls in planning and solving"
     ]
    ]
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Production Boundaries",
    "headingKn": "Production ಗಡಿಗಳು",
    "bodyEn": "A valid DAG is not an authorized one: if the planner emits delete_database, validation passes structurally and the policy check must still refuse it. Write tools need idempotency keys, because a timeout after a charge does not tell you whether the charge happened. Retries need budgets and error classes, circuit breakers stop hammering a broken service, and evidence can be checkpointed so that a crash at node 83 resumes at node 83. Treat token claims as measurements from specific experiments, not a guarantee of five times cheaper.",
    "bodyKn": "ಮಾನ್ಯ DAG ಅಧಿಕೃತವೂ ಆಗಿರಬೇಕಿಲ್ಲ: planner delete_database ನೀಡಿದರೆ ಪರಿಶೀಲನೆ ರಚನಾತ್ಮಕವಾಗಿ ಪಾಸ್ ಆಗುತ್ತದೆ ಮತ್ತು ನೀತಿ ಪರಿಶೀಲನೆ ಇನ್ನೂ ಅದನ್ನು ನಿರಾಕರಿಸಬೇಕು. Write tools ಗೆ idempotency ಕೀಗಳು ಬೇಕು, ಏಕೆಂದರೆ ಶುಲ್ಕದ ನಂತರದ timeout ಶುಲ್ಕ ನಡೆದಿದೆಯೇ ಎಂದು ಹೇಳುವುದಿಲ್ಲ. Retries ಗೆ budgets ಮತ್ತು ದೋಷ ವರ್ಗಗಳು ಬೇಕು, circuit breakers ಮುರಿದ ಸೇವೆಗೆ ಬಡಿಯುವುದನ್ನು ನಿಲ್ಲಿಸುತ್ತವೆ, ಮತ್ತು ಸಾಕ್ಷ್ಯವನ್ನು checkpoint ಮಾಡಬಹುದು, ಆಗ ನೋಡ್ 83 ರಲ್ಲಿ crash ಆದರೆ ನೋಡ್ 83 ರಿಂದ ಮುಂದುವರಿಯುತ್ತದೆ. Token ಹೇಳಿಕೆಗಳನ್ನು ನಿರ್ದಿಷ್ಟ ಪ್ರಯೋಗಗಳ ಅಳತೆಗಳೆಂದು ಪರಿಗಣಿಸಿ, ಐದು ಪಟ್ಟು ಅಗ್ಗದ ಖಾತರಿ ಎಂದಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A deterministic shell around probabilistic reasoning is easier to govern: a probabilistic planner, then deterministic validation, scheduling and tools, then structured evidence, then a probabilistic Solver. Each stage has a contract you can test, log and replace independently, and the model is only used where judgment is actually needed.",
    "bodyKn": "ಸಂಭಾವ್ಯತಾ ತರ್ಕದ ಸುತ್ತ ನಿರ್ಧಾರಾತ್ಮಕ ಕವಚ ನಿಯಂತ್ರಿಸಲು ಸುಲಭ: ಸಂಭಾವ್ಯತಾ planner, ನಂತರ ನಿರ್ಧಾರಾತ್ಮಕ ಪರಿಶೀಲನೆ, ವೇಳಾಪಟ್ಟಿ ಮತ್ತು tools, ನಂತರ ರಚನಾತ್ಮಕ ಸಾಕ್ಷ್ಯ, ನಂತರ ಸಂಭಾವ್ಯತಾ Solver. ಪ್ರತಿ ಹಂತಕ್ಕೂ ನೀವು ಪರೀಕ್ಷಿಸಬಹುದಾದ, ದಾಖಲಿಸಬಹುದಾದ ಮತ್ತು ಸ್ವತಂತ್ರವಾಗಿ ಬದಲಿಸಬಹುದಾದ ಒಪ್ಪಂದವಿದೆ, ಮತ್ತು ವಿವೇಚನೆ ನಿಜವಾಗಿ ಬೇಕಾದಲ್ಲಿ ಮಾತ್ರ ಮಾದರಿ ಬಳಕೆಯಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Where This Appears in AI Systems",
    "headingKn": "AI ವ್ಯವಸ್ಥೆಗಳಲ್ಲಿ ಇದು ಎಲ್ಲಿ ಕಾಣುತ್ತದೆ",
    "bodyEn": "A report-writing agent plans sections, runs evidence lookups in parallel, replans a section whose source failed, and drafts at the end. A coding agent with an explicit task list (Plan-and-Act style) keeps the list in state while individual edits react to test results. Agent frameworks expose the replan-on-event behaviour as conditional edges in a graph.",
    "bodyKn": "ವರದಿ ಬರೆಯುವ agent ವಿಭಾಗಗಳನ್ನು ಯೋಜಿಸುತ್ತದೆ, ಸಾಕ್ಷ್ಯ ಹುಡುಕಾಟಗಳನ್ನು ಸಮಾನಾಂತರವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ, ಮೂಲ ವಿಫಲವಾದ ವಿಭಾಗವನ್ನು replan ಮಾಡುತ್ತದೆ, ಮತ್ತು ಕೊನೆಯಲ್ಲಿ ಕರಡು ಬರೆಯುತ್ತದೆ. ಸ್ಪಷ್ಟ ಕಾರ್ಯ ಪಟ್ಟಿ ಇರುವ coding agent (Plan-and-Act ಶೈಲಿ) ಪಟ್ಟಿಯನ್ನು ಸ್ಥಿತಿಯಲ್ಲಿಡುತ್ತದೆ, ಪ್ರತ್ಯೇಕ ಸಂಪಾದನೆಗಳು test ಫಲಿತಾಂಶಗಳಿಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತವೆ. Agent frameworks ಘಟನೆಯ ಮೇಲೆ replan ವರ್ತನೆಯನ್ನು ಗ್ರಾಫ್‌ನ ಷರತ್ತಿನ edges ಆಗಿ ಒದಗಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"replanning fixes bad evidence automatically.\" Section 4 shows the replanned evidence was correct and the answer was still wrong until the Solver followed the right dependency chain. Replanning changes what exists; something still has to decide which pieces the final answer is allowed to use.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"Replanning ಕೆಟ್ಟ ಸಾಕ್ಷ್ಯವನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸರಿಪಡಿಸುತ್ತದೆ.\" ವಿಭಾಗ 4 replan ಮಾಡಿದ ಸಾಕ್ಷ್ಯ ಸರಿಯಾಗಿತ್ತು ಮತ್ತು Solver ಸರಿಯಾದ ಅವಲಂಬನೆ ಸರಪಳಿ ಅನುಸರಿಸುವವರೆಗೆ ಉತ್ತರ ಇನ್ನೂ ತಪ್ಪಾಗಿತ್ತು ಎಂದು ತೋರಿಸುತ್ತದೆ. Replanning ಏನು ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ ಎಂಬುದನ್ನು ಬದಲಿಸುತ್ತದೆ; ಅಂತಿಮ ಉತ್ತರ ಯಾವ ತುಣುಕುಗಳನ್ನು ಬಳಸಬಹುದು ಎಂದು ಯಾರಾದರೂ ಇನ್ನೂ ನಿರ್ಧರಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The Solver turns evidence into an answer and degrades gracefully on missing or failed evidence. 2) Replanning should be event-driven, and the Solver must follow the dependency chain, or you get \"capital Atlantis, population 2 million\". 3) The lesson's validator accepts cycles: add the check and validate before executing. 4) Retry fixes operations; replan fixes strategy. 5) Choose by predictability, independence, environment, length and cost. 6) A valid plan is not an authorized plan.",
    "bodyKn": "1) Solver ಸಾಕ್ಷ್ಯವನ್ನು ಉತ್ತರವಾಗಿಸುತ್ತದೆ ಮತ್ತು ಕಾಣೆಯಾದ ಅಥವಾ ವಿಫಲ ಸಾಕ್ಷ್ಯದಲ್ಲಿ ಸುಂದರವಾಗಿ ಕುಂದುತ್ತದೆ. 2) Replanning ಘಟನೆ-ಚಾಲಿತವಾಗಿರಬೇಕು, ಮತ್ತು Solver ಅವಲಂಬನೆ ಸರಪಳಿ ಅನುಸರಿಸಬೇಕು, ಇಲ್ಲದಿದ್ದರೆ \"capital Atlantis, population 2 million\" ಸಿಗುತ್ತದೆ. 3) ಪಾಠದ validator ಚಕ್ರಗಳನ್ನು ಒಪ್ಪುತ್ತದೆ: ಪರಿಶೀಲನೆ ಸೇರಿಸಿ ಮತ್ತು ಚಲಾಯಿಸುವ ಮೊದಲು ಪರಿಶೀಲಿಸಿ. 4) Retry ಕಾರ್ಯಗಳನ್ನು ಸರಿಪಡಿಸುತ್ತದೆ; replan ತಂತ್ರವನ್ನು. 5) ಊಹಿಸುವಿಕೆ, ಸ್ವಾತಂತ್ರ್ಯ, ಪರಿಸರ, ಉದ್ದ ಮತ್ತು ವೆಚ್ಚದ ಆಧಾರದಲ್ಲಿ ಆರಿಸಿ. 6) ಮಾನ್ಯ ಯೋಜನೆ ಅಧಿಕೃತ ಯೋಜನೆಯಲ್ಲ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What is the Solver's main responsibility?",
      "qKn": "Solver ನ ಮುಖ್ಯ ಜವಾಬ್ದಾರಿ ಏನು?",
      "opts": [
       "Execute tools",
       "Generate the DAG",
       "Compose collected evidence into the final answer",
       "Schedule threads"
      ],
      "optsKn": [
       "Tools ಚಲಾಯಿಸುವುದು",
       "DAG ಉತ್ಪಾದಿಸುವುದು",
       "ಸಂಗ್ರಹಿಸಿದ ಸಾಕ್ಷ್ಯವನ್ನು ಅಂತಿಮ ಉತ್ತರವಾಗಿ ಸಂಯೋಜಿಸುವುದು",
       "Threads ವೇಳಾಪಟ್ಟಿ ಮಾಡುವುದು"
      ],
      "correct": 2
     },
     {
      "q": "Why should population_of() not return \"approximately 2 million\"?",
      "qKn": "population_of() \"approximately 2 million\" ಏಕೆ ಹಿಂತಿರುಗಿಸಬಾರದು?",
      "opts": [
       "Python cannot format strings",
       "It mixes evidence retrieval with answer composition for one question",
       "Workers cannot return strings",
       "DAG nodes cannot contain numbers"
      ],
      "optsKn": [
       "Python ಸ್ಟ್ರಿಂಗ್ ರೂಪಿಸಲಾರದು",
       "ಅದು ಒಂದು ಪ್ರಶ್ನೆಗಾಗಿ ಸಾಕ್ಷ್ಯ ಪಡೆಯುವಿಕೆಯನ್ನು ಉತ್ತರ ಸಂಯೋಜನೆಯೊಂದಿಗೆ ಬೆರೆಸುತ್ತದೆ",
       "Workers ಸ್ಟ್ರಿಂಗ್ ಹಿಂತಿರುಗಿಸಲಾರರು",
       "DAG ನೋಡ್‌ಗಳಲ್ಲಿ ಸಂಖ್ಯೆ ಇರಲಾರದು"
      ],
      "correct": 1
     },
     {
      "q": "In this lesson's run, what did the NaiveSolver say after the replan?",
      "qKn": "ಈ ಪಾಠದ ಓಟದಲ್ಲಿ replan ನಂತರ NaiveSolver ಏನು ಹೇಳಿತು?",
      "opts": [
       "The capital of France is Paris, with approximately 2 million",
       "The capital of France is Atlantis, with a population of approximately 2 million",
       "It could not determine the capital",
       "It crashed"
      ],
      "optsKn": [
       "France ನ ರಾಜಧಾನಿ Paris, ಸುಮಾರು 2 ಮಿಲಿಯನ್",
       "France ನ ರಾಜಧಾನಿ Atlantis, ಜನಸಂಖ್ಯೆ ಸುಮಾರು 2 ಮಿಲಿಯನ್",
       "ರಾಜಧಾನಿ ನಿರ್ಧರಿಸಲಾಗಲಿಲ್ಲ",
       "Crash ಆಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "When is retry preferable to replanning?",
      "qKn": "Replanning ಗಿಂತ retry ಯಾವಾಗ ಉತ್ತಮ?",
      "opts": [
       "The plan is still valid but a tool hit a transient failure",
       "Whenever a user asks a question",
       "After every success",
       "Whenever two nodes can run in parallel"
      ],
      "optsKn": [
       "ಯೋಜನೆ ಇನ್ನೂ ಮಾನ್ಯ ಆದರೆ tool ತಾತ್ಕಾಲಿಕ ವೈಫಲ್ಯ ಎದುರಿಸಿದಾಗ",
       "ಬಳಕೆದಾರ ಪ್ರಶ್ನೆ ಕೇಳಿದಾಗಲೆಲ್ಲಾ",
       "ಪ್ರತಿ ಯಶಸ್ಸಿನ ನಂತರ",
       "ಎರಡು ನೋಡ್‌ಗಳು ಸಮಾನಾಂತರವಾಗಿ ಚಲಿಸಬಲ್ಲಾಗಲೆಲ್ಲಾ"
      ],
      "correct": 0
     },
     {
      "q": "What did the lesson's own validate_plan do with a two-node cycle?",
      "qKn": "ಪಾಠದ ಸ್ವಂತ validate_plan ಎರಡು-ನೋಡ್ ಚಕ್ರಕ್ಕೆ ಏನು ಮಾಡಿತು?",
      "opts": [
       "Rejected it with a cycle message",
       "Accepted it",
       "Crashed",
       "Reordered it"
      ],
      "optsKn": [
       "ಚಕ್ರ ಸಂದೇಶದೊಂದಿಗೆ ತಿರಸ್ಕರಿಸಿತು",
       "ಒಪ್ಪಿತು",
       "Crash ಆಯಿತು",
       "ಮರುಕ್ರಮಗೊಳಿಸಿತು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
