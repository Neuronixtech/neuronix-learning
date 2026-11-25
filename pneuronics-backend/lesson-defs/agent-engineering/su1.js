module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215e3",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Supervisor / Orchestrator-Worker Pattern (Part 1 of 3) — A Lead and Three Workers",
 "titleKn": "Supervisor / Orchestrator-Worker ಮಾದರಿ (ಭಾಗ 1 / 3) — ಒಬ್ಬ Lead ಮತ್ತು ಮೂವರು ಕೆಲಸಗಾರರು",
 "desc": "Build a lead with threaded workers and test overlap, ordering, failure and the size of a supervisor tree.",
 "descKn": "thread ಕೆಲಸಗಾರರ lead ನಿರ್ಮಿಸಿ ಮತ್ತು ಅತಿಕ್ರಮಣೆ, ಕ್ರಮ, ವೈಫಲ್ಯ ಹಾಗೂ supervisor ಮರದ ಗಾತ್ರ ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Plan and delegate.",
  "Run workers together.",
  "Keep plan order.",
  "Handle a failure.",
  "Count agents."
 ],
 "objectivesKn": [
  "ಯೋಜಿಸಿ ನಿಯೋಜಿಸಿ.",
  "ಕೆಲಸಗಾರರನ್ನು ಒಟ್ಟಿಗೆ ಓಡಿಸಿ.",
  "ಯೋಜನೆ ಕ್ರಮ ಉಳಿಸಿ.",
  "ವೈಫಲ್ಯ ನಿಭಾಯಿಸಿ.",
  "ಏಜೆಂಟ್‌ಗಳನ್ನು ಎಣಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Supervisor / Orchestrator-Worker Pattern (Part 1 of 3)",
    "textKn": "Supervisor / Orchestrator-Worker ಮಾದರಿ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a lead that plans three sub-questions and runs three threaded workers, results kept in plan order, join order, a failing worker, the size of a supervisor tree and the ideal speedup. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the supervisor and worker pattern (a lead that plans, threaded workers, ordered results, concurrency limits, timeouts, retries, shared budgets, conflicts, a durable run, permissions and a dependency-aware plan), not the real software, and workers sleep or raise on purpose and return canned summaries, the model is a fake that returns fixed text, the plan is a fixed template and nothing is researched, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The LangGraph, CrewAI, rainbow-deployment and Anthropic research-system material in the lesson is conceptual and its figures were not checked here. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಮೂರು ಉಪ-ಪ್ರಶ್ನೆಗಳನ್ನು ಯೋಜಿಸಿ ಮೂರು thread ಕೆಲಸಗಾರರನ್ನು ಓಡಿಸುವ lead, ಯೋಜನೆ ಕ್ರಮದಲ್ಲಿ ಉಳಿದ ಫಲಿತಾಂಶಗಳು, join ಕ್ರಮ, ವಿಫಲ ಕೆಲಸಗಾರ, supervisor ಮರದ ಗಾತ್ರ ಮತ್ತು ಆದರ್ಶ ವೇಗವರ್ಧನೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು supervisor ಮತ್ತು ಕೆಲಸಗಾರ ಮಾದರಿ (ಯೋಜಿಸುವ lead, thread ಮಾಡಿದ ಕೆಲಸಗಾರರು, ಕ್ರಮಬದ್ಧ ಫಲಿತಾಂಶಗಳು, ಏಕಕಾಲಿಕ ಮಿತಿಗಳು, timeout ಗಳು, ಮರುಪ್ರಯತ್ನಗಳು, ಹಂಚಿಕೆಯ ಬಜೆಟ್‌ಗಳು, ಸಂಘರ್ಷಗಳು, ಬಾಳಿಕೆ ಬರುವ ಓಟ, ಅನುಮತಿಗಳು ಮತ್ತು ಅವಲಂಬನೆ-ಅರಿವಿನ ಯೋಜನೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಕೆಲಸಗಾರರು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಮಲಗುತ್ತಾರೆ ಅಥವಾ ದೋಷ ಎತ್ತುತ್ತಾರೆ ಮತ್ತು ಸಿದ್ಧ ಸಾರಾಂಶ ನೀಡುತ್ತಾರೆ, ಮಾದರಿ ನಿಶ್ಚಿತ ಪಠ್ಯ ನೀಡುವ ನಕಲಿ, ಯೋಜನೆ ನಿಶ್ಚಿತ ಟೆಂಪ್ಲೇಟ್ ಮತ್ತು ಯಾವುದೂ ಸಂಶೋಧಿಸಲ್ಪಡುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ನೀಡಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. lesson ನ LangGraph, CrewAI, rainbow-deployment ಮತ್ತು Anthropic research-system ವಿಷಯ ಪರಿಕಲ್ಪನಾತ್ಮಕ ಮತ್ತು ಅದರ ಅಂಕಿಗಳನ್ನು ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Separate Coordination from Execution",
    "textKn": "ಸಮನ್ವಯವನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸುವಿಕೆಯಿಂದ ಬೇರ್ಪಡಿಸಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Lead, Three Workers and a Synthesis",
    "headingKn": "ಒಬ್ಬ Lead, ಮೂವರು ಕೆಲಸಗಾರರು ಮತ್ತು ಒಂದು ಸಂಶ್ಲೇಷಣೆ",
    "bodyEn": "A supervisor receives one question, splits it into independent sub-questions, hands each to a worker that runs on its own, and merges what comes back. This part builds that with Python threads: a lead whose plan method makes three questions, workers that sleep to stand in for slow outside work, and a run method that starts every thread before it joins any of them. It measures the saving from overlapping, checks that results stay in plan order when workers finish in a different order, shows that joining the slow worker first does not delay the others, makes a worker fail on purpose, counts the agents in a supervisor tree and works out the ideal speedup.",
    "bodyKn": "supervisor ಒಂದು ಪ್ರಶ್ನೆ ಸ್ವೀಕರಿಸಿ ಅದನ್ನು ಸ್ವತಂತ್ರ ಉಪ-ಪ್ರಶ್ನೆಗಳಾಗಿ ಒಡೆದು, ಪ್ರತಿಯೊಂದನ್ನು ತನ್ನದೇ ಓಡುವ ಕೆಲಸಗಾರನಿಗೆ ನೀಡಿ, ಹಿಂದಿರುಗಿದ್ದನ್ನು ವಿಲೀನ ಮಾಡುತ್ತದೆ. ಈ ಭಾಗವು ಅದನ್ನು Python thread ಗಳಿಂದ ನಿರ್ಮಿಸುತ್ತದೆ: plan ವಿಧಾನ ಮೂರು ಪ್ರಶ್ನೆಗಳನ್ನು ಮಾಡುವ lead, ನಿಧಾನ ಹೊರಗಿನ ಕೆಲಸದ ಬದಲಿಗೆ ಮಲಗುವ ಕೆಲಸಗಾರರು, ಮತ್ತು ಯಾವುದನ್ನೂ join ಮಾಡುವ ಮೊದಲು ಪ್ರತಿ thread ಆರಂಭಿಸುವ run ವಿಧಾನ. ಅದು ಅತಿಕ್ರಮಿಸುವುದರಿಂದ ಆಗುವ ಉಳಿತಾಯ ಅಳೆಯುತ್ತದೆ, ಕೆಲಸಗಾರರು ಬೇರೆ ಕ್ರಮದಲ್ಲಿ ಮುಗಿದರೂ ಫಲಿತಾಂಶಗಳು ಯೋಜನೆ ಕ್ರಮದಲ್ಲಿ ಉಳಿಯುತ್ತವೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ, ನಿಧಾನ ಕೆಲಸಗಾರನನ್ನು ಮೊದಲು join ಮಾಡುವುದು ಇತರರನ್ನು ತಡೆಯುವುದಿಲ್ಲ ಎಂದು ತೋರಿಸುತ್ತದೆ, ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಕೆಲಸಗಾರನನ್ನು ವಿಫಲಗೊಳಿಸುತ್ತದೆ, supervisor ಮರದಲ್ಲಿನ ಏಜೆಂಟ್‌ಗಳನ್ನು ಎಣಿಸುತ್ತದೆ ಮತ್ತು ಆದರ್ಶ ವೇಗವರ್ಧನೆಯನ್ನು ಲೆಕ್ಕಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Lead and Workers",
    "headingKn": "Lead ಮತ್ತು ಕೆಲಸಗಾರರು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">coordination is separate from execution</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">lead</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">plans and merges</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">workers</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">one question each</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">threads</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">run together</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">synthesis</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">in plan order</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">coordination is separate from execution</text></svg>",
    "captionEn": "One lead plans, several workers run at the same time and the lead merges.",
    "captionKn": "ಒಬ್ಬ lead ಯೋಜಿಸುತ್ತಾನೆ, ಹಲವು ಕೆಲಸಗಾರರು ಒಂದೇ ಸಮಯದಲ್ಲಿ ಓಡುತ್ತಾರೆ ಮತ್ತು lead ವಿಲೀನ ಮಾಡುತ್ತಾನೆ."
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
      "overlap",
      "three 0.1 s workers in parallel against one after another"
     ],
     [
      "order",
      "completion order against plan order"
     ],
     [
      "join",
      "a slow worker joined first"
     ],
     [
      "failure",
      "one worker raising an error"
     ],
     [
      "tree size",
      "agents for branching factors and depths"
     ],
     [
      "speedup",
      "the ideal and a worked example"
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
    "filename": "su_1.py",
    "headingEn": "Worker and Lead",
    "headingKn": "Worker ಮತ್ತು Lead",
    "descEn": "Worker sleeps and returns a canned summary or raises, and Lead.run starts every thread, joins them all, collects errors under a lock and writes each result into its question slot.",
    "descKn": "Worker ಮಲಗಿ ಸಿದ್ಧ ಸಾರಾಂಶ ನೀಡುತ್ತದೆ ಅಥವಾ ದೋಷ ಎತ್ತುತ್ತದೆ, ಮತ್ತು Lead.run ಪ್ರತಿ thread ಆರಂಭಿಸಿ ಎಲ್ಲವನ್ನೂ join ಮಾಡಿ, ಲಾಕ್ ಅಡಿಯಲ್ಲಿ ದೋಷಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ ಪ್ರತಿ ಫಲಿತಾಂಶವನ್ನು ಅದರ ಪ್ರಶ್ನೆ ಸ್ಥಾನದಲ್ಲಿ ಬರೆಯುತ್ತದೆ.",
    "code": "class Worker:\r\n    def __init__(self, worker_id, delay=0.1, fail=False):\r\n        self.worker_id, self.delay, self.fail = worker_id, delay, fail\r\n\r\n    def run(self, sub_question):\r\n        time.sleep(self.delay)\r\n        if self.fail:\r\n            raise RuntimeError(f\"worker {self.worker_id} could not reach its source\")\r\n        return f\"[worker {self.worker_id}] summary of: {sub_question}\"\r\n\r\n\r\nclass Lead:\r\n    def __init__(self, delays=(0.1, 0.1, 0.1), failing=()):\r\n        self.workers = [Worker(i + 1, d, fail=(i + 1) in failing) for i, d in enumerate(delays)]\r\n        self.finish_order = []\r\n\r\n    def plan(self, query):\r\n        return [f\"What is the historical background of: {query}?\", f\"What are the technical developments in: {query}?\", f\"What are the practical implications of: {query}?\"]\r\n\r\n    def run(self, query):\r\n        questions = self.plan(query)\r\n        results = [None] * len(questions)\r\n        errors = []\r\n        lock = threading.Lock()\r\n\r\n        def execute(index, worker, question):\r\n            try:\r\n                summary = worker.run(question)\r\n                with lock:\r\n                    results[index] = summary\r\n                    self.finish_order.append(index)\r\n            except Exception as exc:\r\n                with lock:\r\n                    errors.append((index, str(exc)))\r\n\r\n        threads = [threading.Thread(target=execute, args=(i, w, q)) for i, (w, q) in enumerate(zip(self.workers, questions))]\r\n        for t in threads:\r\n            t.start()\r\n        for t in threads:\r\n            t.join()\r\n        if errors:\r\n            raise RuntimeError(f\"Worker failures: {errors}\")\r\n        return self.synthesize(query, results)\r\n\r\n    def synthesize(self, query, results):\r\n        return \"\\n\".join(f\"{i + 1}. {r}\" for i, r in enumerate(results))"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "su_1.py",
    "headingEn": "Counting agents",
    "headingKn": "ಏಜೆಂಟ್‌ಗಳ ಎಣಿಕೆ",
    "descEn": "count_agents sums the powers of the branching factor up to the depth.",
    "descKn": "count_agents ಶಾಖೆ ಅಂಶದ ಘಾತಗಳನ್ನು ಆಳದವರೆಗೆ ಕೂಡಿಸುತ್ತದೆ.",
    "code": "def count_agents(branching_factor, depth):\r\n    if branching_factor < 1:\r\n        raise ValueError(\"Branching factor must be positive\")\r\n    if depth < 0:\r\n        raise ValueError(\"Depth cannot be negative\")\r\n    return sum(branching_factor ** level for level in range(depth + 1))"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "su_1.py",
    "headingEn": "The experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the six experiments in order and prints the real result of each.",
    "descKn": "main() ಆರು ಪ್ರಯೋಗಗಳನ್ನು ಕ್ರಮವಾಗಿ ಓಡಿಸಿ ಪ್ರತಿಯೊಂದರ ನಿಜ ಫಲಿತಾಂಶ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely running: plan, three threads and a synthesis\")\r\n    lead = Lead()\r\n    t0 = time.perf_counter()\r\n    answer = lead.run(\"multi-agent systems\")\r\n    parallel = time.perf_counter() - t0\r\n    t1 = time.perf_counter()\r\n    for w, q in zip(lead.workers, lead.plan(\"multi-agent systems\")):\r\n        w.run(q)\r\n    sequential = time.perf_counter() - t1\r\n    print(\"synthesis lines:\", len(answer.splitlines()), \"| first:\", answer.splitlines()[0][:48])\r\n    print(f\"three 0.1 s workers: parallel about {round(parallel, 1)} s, one after another about {round(sequential, 1)} s | parallel under 0.2 s: {parallel < 0.2} | sequential at least 0.29 s: {sequential >= 0.29}\")\r\n    print(\"the three workers overlapped, so the worker stage took about as long as the slowest one and not the sum, which is the whole point of the pattern when the work is independent and waits for something outside Python; the figures are rounded timings and change between runs, and sleep stands in for real work.\")\r\n\r\n    section(\"2. Genuinely running: results stay in plan order when workers finish out of order\")\r\n    lead2 = Lead(delays=(0.3, 0.1, 0.2))\r\n    answer2 = lead2.run(\"topic\")\r\n    print(\"completion order of the workers:\", [i + 1 for i in lead2.finish_order])\r\n    print(\"order of the lines in the synthesis:\", [int(line.split(\"worker \")[1][0]) for line in answer2.splitlines()])\r\n    print(\"worker 2 finished first and worker 1 last, yet the synthesis still lists them as 1, 2, 3, because each result is written into the slot of its question and not appended when it arrives; appending in completion order would have made the report order change from run to run.\")\r\n\r\n    section(\"3. Genuinely running: join order does not serialise the workers\")\r\n    lead3 = Lead(delays=(0.3, 0.1, 0.1))\r\n    t = time.perf_counter()\r\n    lead3.run(\"topic\")\r\n    total = time.perf_counter() - t\r\n    print(f\"slowest worker 0.3 s, the other two 0.1 s: total about {round(total, 1)} s | under 0.5 s (the sum would be 0.5): {total < 0.5}\")\r\n    print(\"the supervisor joins worker 1 first but all three had already been started, so waiting on the slow one cost nothing extra for the others; joining is about when the caller continues and not about when each worker runs.\")\r\n\r\n    section(\"4. Genuinely running: one failing worker is reported, not hidden\")\r\n    try:\r\n        Lead(failing={2}).run(\"topic\")\r\n    except RuntimeError as e:\r\n        print(\"raised:\", e)\r\n    lead4 = Lead(failing={2})\r\n    try:\r\n        lead4.run(\"topic\")\r\n    except RuntimeError:\r\n        pass\r\n    print(\"the other two workers still finished:\", sorted(i + 1 for i in lead4.finish_order))\r\n    print(\"the supervisor waited for every thread and then refused to build a synthesis from a failed run, naming the worker that failed, while the two good results existed and were discarded; this fail after join policy is simple, and partial results with a flag are a different choice that Part 2 tests.\")\r\n\r\n    section(\"5. Genuinely computing: how many agents a hierarchy needs\")\r\n    rows = [(2, 2), (3, 2), (4, 2), (3, 3), (4, 3)]\r\n    print(\", \".join(f\"b={b} d={d}: {count_agents(b, d)}\" for b, d in rows))\r\n    try:\r\n        count_agents(0, 2)\r\n    except ValueError as e:\r\n        print(\"invalid branching factor:\", e)\r\n    print(\"a full tree with three children per supervisor and depth two has 13 agents, one root, three supervisors and nine workers, and depth three already has 40, so depth and branching grow the agent count quickly; the table assumes every internal node spawns the full number of children.\")\r\n\r\n    section(\"6. Genuinely computing: the ideal speedup of the worker stage\")\r\n    ideal = 0.9 / 0.3\r\n    measured = 0.9 / 0.35\r\n    print(f\"ideal 0.9 s over 0.3 s: {ideal:.2f}x | with a 0.35 s measured parallel stage: {measured:.2f}x\")\r\n    print(\"the ideal gain of three for three equal independent workers drops to about 2.57 when the parallel stage takes 0.35 s, and planning, synthesis and thread start-up are not in either number; the 0.35 s is an example input from the lesson and not a measurement made here.\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: plan, three threads and a synthesis ---\nsynthesis lines: 3 | first: 1. [worker 1] summary of: What is the historical\nthree 0.1 s workers: parallel about 0.1 s, one after another about 0.3 s | parallel under 0.2 s: True | sequential at least 0.29 s: True\nthe three workers overlapped, so the worker stage took about as long as the slowest one and not the sum, which is the whole point of the pattern when the work is independent and waits for something outside Python; the figures are rounded timings and change between runs, and sleep stands in for real work.\n\n--- 2. Genuinely running: results stay in plan order when workers finish out of order ---\ncompletion order of the workers: [2, 3, 1]\norder of the lines in the synthesis: [1, 2, 3]\nworker 2 finished first and worker 1 last, yet the synthesis still lists them as 1, 2, 3, because each result is written into the slot of its question and not appended when it arrives; appending in completion order would have made the report order change from run to run.\n\n--- 3. Genuinely running: join order does not serialise the workers ---\nslowest worker 0.3 s, the other two 0.1 s: total about 0.3 s | under 0.5 s (the sum would be 0.5): True\nthe supervisor joins worker 1 first but all three had already been started, so waiting on the slow one cost nothing extra for the others; joining is about when the caller continues and not about when each worker runs.\n\n--- 4. Genuinely running: one failing worker is reported, not hidden ---\nraised: Worker failures: [(1, 'worker 2 could not reach its source')]\nthe other two workers still finished: [1, 3]\nthe supervisor waited for every thread and then refused to build a synthesis from a failed run, naming the worker that failed, while the two good results existed and were discarded; this fail after join policy is simple, and partial results with a flag are a different choice that Part 2 tests.\n\n--- 5. Genuinely computing: how many agents a hierarchy needs ---\nb=2 d=2: 7, b=3 d=2: 13, b=4 d=2: 21, b=3 d=3: 40, b=4 d=3: 85\ninvalid branching factor: Branching factor must be positive\na full tree with three children per supervisor and depth two has 13 agents, one root, three supervisors and nine workers, and depth three already has 40, so depth and branching grow the agent count quickly; the table assumes every internal node spawns the full number of children.\n\n--- 6. Genuinely computing: the ideal speedup of the worker stage ---\nideal 0.9 s over 0.3 s: 3.00x | with a 0.35 s measured parallel stage: 2.57x\nthe ideal gain of three for three equal independent workers drops to about 2.57 when the parallel stage takes 0.35 s, and planning, synthesis and thread start-up are not in either number; the 0.35 s is an example input from the lesson and not a measurement made here."
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
    "headingEn": "Experiment 1: Plan, three threads and a synthesis",
    "headingKn": "ಪ್ರಯೋಗ 1: Plan, three threads and a synthesis",
    "bodyEn": "What it ran: Plan, three threads and a synthesis. What the lab concluded: the three workers overlapped, so the worker stage took about as long as the slowest one and not the sum, which is the whole point of the pattern when the work is independent and waits for something outside Python; the figures are rounded timings and change between runs, and sleep stands in for real work.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Plan, three threads and a synthesis. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the three workers overlapped, so the worker stage took about as long as the slowest one and not the sum, which is the whole point of the pattern when the work is independent and waits for something outside Python; the figures are rounded timings and change between runs, and sleep stands in for real work."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: plan, three threads and a synthesis ---\nsynthesis lines: 3 | first: 1. [worker 1] summary of: What is the historical\nthree 0.1 s workers: parallel about 0.1 s, one after another about 0.3 s | parallel under 0.2 s: True | sequential at least 0.29 s: True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Results stay in plan order when workers finish out of order",
    "headingKn": "ಪ್ರಯೋಗ 2: Results stay in plan order when workers finish out of order",
    "bodyEn": "What it ran: Results stay in plan order when workers finish out of order. What the lab concluded: worker 2 finished first and worker 1 last, yet the synthesis still lists them as 1, 2, 3, because each result is written into the slot of its question and not appended when it arrives; appending in completion order would have made the report order change from run to run.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Results stay in plan order when workers finish out of order. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): worker 2 finished first and worker 1 last, yet the synthesis still lists them as 1, 2, 3, because each result is written into the slot of its question and not appended when it arrives; appending in completion order would have made the report order change from run to run."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: results stay in plan order when workers finish out of order ---\ncompletion order of the workers: [2, 3, 1]\norder of the lines in the synthesis: [1, 2, 3]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Join order does not serialise the workers",
    "headingKn": "ಪ್ರಯೋಗ 3: Join order does not serialise the workers",
    "bodyEn": "What it ran: Join order does not serialise the workers. What the lab concluded: the supervisor joins worker 1 first but all three had already been started, so waiting on the slow one cost nothing extra for the others; joining is about when the caller continues and not about when each worker runs.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Join order does not serialise the workers. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the supervisor joins worker 1 first but all three had already been started, so waiting on the slow one cost nothing extra for the others; joining is about when the caller continues and not about when each worker runs."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: join order does not serialise the workers ---\nslowest worker 0.3 s, the other two 0.1 s: total about 0.3 s | under 0.5 s (the sum would be 0.5): True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: One failing worker is reported, not hidden",
    "headingKn": "ಪ್ರಯೋಗ 4: One failing worker is reported, not hidden",
    "bodyEn": "What it ran: One failing worker is reported, not hidden. What the lab concluded: the supervisor waited for every thread and then refused to build a synthesis from a failed run, naming the worker that failed, while the two good results existed and were discarded; this fail after join policy is simple, and partial results with a flag are a different choice that Part 2 tests.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: One failing worker is reported, not hidden. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the supervisor waited for every thread and then refused to build a synthesis from a failed run, naming the worker that failed, while the two good results existed and were discarded; this fail after join policy is simple, and partial results with a flag are a different choice that Part 2 tests."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: one failing worker is reported, not hidden ---\nraised: Worker failures: [(1, 'worker 2 could not reach its source')]\nthe other two workers still finished: [1, 3]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: How many agents a hierarchy needs",
    "headingKn": "ಪ್ರಯೋಗ 5: How many agents a hierarchy needs",
    "bodyEn": "What it ran: How many agents a hierarchy needs. What the lab concluded: a full tree with three children per supervisor and depth two has 13 agents, one root, three supervisors and nine workers, and depth three already has 40, so depth and branching grow the agent count quickly; the table assumes every internal node spawns the full number of children.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: How many agents a hierarchy needs. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a full tree with three children per supervisor and depth two has 13 agents, one root, three supervisors and nine workers, and depth three already has 40, so depth and branching grow the agent count quickly; the table assumes every internal node spawns the full number of children."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely computing: how many agents a hierarchy needs ---\nb=2 d=2: 7, b=3 d=2: 13, b=4 d=2: 21, b=3 d=3: 40, b=4 d=3: 85\ninvalid branching factor: Branching factor must be positive"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: The ideal speedup of the worker stage",
    "headingKn": "ಪ್ರಯೋಗ 6: The ideal speedup of the worker stage",
    "bodyEn": "What it ran: The ideal speedup of the worker stage. What the lab concluded: the ideal gain of three for three equal independent workers drops to about 2.57 when the parallel stage takes 0.35 s, and planning, synthesis and thread start-up are not in either number; the 0.35 s is an example input from the lesson and not a measurement made here.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The ideal speedup of the worker stage. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the ideal gain of three for three equal independent workers drops to about 2.57 when the parallel stage takes 0.35 s, and planning, synthesis and thread start-up are not in either number; the 0.35 s is an example input from the lesson and not a measurement made here."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely computing: the ideal speedup of the worker stage ---\nideal 0.9 s over 0.3 s: 3.00x | with a 0.35 s measured parallel stage: 2.57x"
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
    "headingEn": "Genuinely Found: Overlap, Order and Join",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅತಿಕ್ರಮಣೆ, ಕ್ರಮ ಮತ್ತು Join",
    "bodyEn": "Section 1: the synthesis had 3 lines, the parallel run took about 0.1 s against about 0.3 s one after another, and both timing checks were True. Section 2: the workers finished in the order 2, 3, 1 while the synthesis listed 1, 2, 3. Section 3: with a 0.3 s worker and two 0.1 s workers the total was about 0.3 s and stayed under 0.5 s.",
    "bodyKn": "ವಿಭಾಗ 1: ಸಂಶ್ಲೇಷಣೆ 3 ಸಾಲುಗಳನ್ನು ಹೊಂದಿತ್ತು, ಸಮಾನಾಂತರ ಓಟ ಒಂದರ ನಂತರ ಒಂದರ ಸುಮಾರು 0.3 s ಗೆ ಬದಲು ಸುಮಾರು 0.1 s ತೆಗೆದುಕೊಂಡಿತು, ಮತ್ತು ಎರಡೂ ಸಮಯ ಪರಿಶೀಲನೆಗಳು True. ವಿಭಾಗ 2: ಕೆಲಸಗಾರರು 2, 3, 1 ಕ್ರಮದಲ್ಲಿ ಮುಗಿಸಿದರು ಆದರೆ ಸಂಶ್ಲೇಷಣೆ 1, 2, 3 ಪಟ್ಟಿ ಮಾಡಿತು. ವಿಭಾಗ 3: 0.3 s ಕೆಲಸಗಾರ ಮತ್ತು ಎರಡು 0.1 s ಕೆಲಸಗಾರರೊಂದಿಗೆ ಒಟ್ಟು ಸುಮಾರು 0.3 s ಆಗಿ 0.5 ಕ್ಕಿಂತ ಕಡಿಮೆ ಉಳಿಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Failure, Size and Speedup",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ವೈಫಲ್ಯ, ಗಾತ್ರ ಮತ್ತು ವೇಗವರ್ಧನೆ",
    "bodyEn": "Section 4: the run raised Worker failures naming the failing worker and the other two workers, 1 and 3, still finished. Section 5: the agent counts were 7, 13, 21, 40 and 85 for the five branching and depth pairs, and branching factor 0 was refused. Section 6: the ideal speedup was 3.00x and the example with a 0.35 s parallel stage gave 2.57x.",
    "bodyKn": "ವಿಭಾಗ 4: ಓಟ ವಿಫಲ ಕೆಲಸಗಾರನನ್ನು ಹೆಸರಿಸಿ Worker failures ಎತ್ತಿತು ಮತ್ತು ಇತರ ಇಬ್ಬರು ಕೆಲಸಗಾರರು, 1 ಮತ್ತು 3, ಇನ್ನೂ ಮುಗಿಸಿದರು. ವಿಭಾಗ 5: ಐದು ಶಾಖೆ ಮತ್ತು ಆಳ ಜೋಡಿಗಳಿಗೆ ಏಜೆಂಟ್ ಎಣಿಕೆಗಳು 7, 13, 21, 40 ಮತ್ತು 85, ಮತ್ತು ಶಾಖೆ ಅಂಶ 0 ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 6: ಆದರ್ಶ ವೇಗವರ್ಧನೆ 3.00x ಮತ್ತು 0.35 s ಸಮಾನಾಂತರ ಹಂತದ ಉದಾಹರಣೆ 2.57x ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A supervisor lets independent work overlap and keeps each worker context small, and the price is a merge step, a failure policy and a number of agents that grows fast if you nest supervisors.",
    "bodyKn": "supervisor ಸ್ವತಂತ್ರ ಕೆಲಸ ಅತಿಕ್ರಮಿಸಲು ಬಿಡುತ್ತದೆ ಮತ್ತು ಪ್ರತಿ ಕೆಲಸಗಾರನ context ಚಿಕ್ಕದಾಗಿಡುತ್ತದೆ, ಮತ್ತು ಬೆಲೆ ವಿಲೀನ ಹಂತ, ವೈಫಲ್ಯ ನೀತಿ ಮತ್ತು supervisor ಗಳನ್ನು ಗೂಡುಕಟ್ಟಿದರೆ ವೇಗವಾಗಿ ಬೆಳೆಯುವ ಏಜೆಂಟ್ ಸಂಖ್ಯೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"joining the slow worker first makes the others wait.\" All three had already started, and the total stayed near the slowest worker.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ನಿಧಾನ ಕೆಲಸಗಾರನನ್ನು ಮೊದಲು join ಮಾಡಿದರೆ ಇತರರು ಕಾಯುತ್ತಾರೆ.\" ಮೂವರೂ ಆಗಲೇ ಆರಂಭಿಸಿದ್ದರು, ಮತ್ತು ಒಟ್ಟು ಸಮಯ ನಿಧಾನ ಕೆಲಸಗಾರನ ಹತ್ತಿರವೇ ಉಳಿಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Supervisor: an agent that plans and merges. Worker: a unit that does one assignment. Join: wait for a thread to finish. Fail after join: wait for all, then report any failure. Branching factor: children per supervisor.",
    "bodyKn": "Supervisor: ಯೋಜಿಸಿ ವಿಲೀನ ಮಾಡುವ ಏಜೆಂಟ್. ಕೆಲಸಗಾರ: ಒಂದು ನಿಯೋಜನೆ ಮಾಡುವ ಘಟಕ. Join: thread ಮುಗಿಯುವವರೆಗೆ ಕಾಯುವುದು. Fail after join: ಎಲ್ಲವಕ್ಕೂ ಕಾಯ್ದು ನಂತರ ವೈಫಲ್ಯ ವರದಿ ಮಾಡುವುದು. ಶಾಖೆ ಅಂಶ: ಪ್ರತಿ supervisor ಗೆ ಮಕ್ಕಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Three 0.1 s workers took about 0.1 s together and about 0.3 s in sequence. 2) Results stayed in plan order although workers finished 2, 3, 1. 3) A failed worker made the whole run fail while two results were discarded. 4) A tree with three children and depth two has 13 agents. 5) The ideal speedup is 3.00x and drops to 2.57x at 0.35 s.",
    "bodyKn": "1) ಮೂರು 0.1 s ಕೆಲಸಗಾರರು ಒಟ್ಟಿಗೆ ಸುಮಾರು 0.1 s ಮತ್ತು ಅನುಕ್ರಮದಲ್ಲಿ ಸುಮಾರು 0.3 s ತೆಗೆದುಕೊಂಡರು. 2) ಕೆಲಸಗಾರರು 2, 3, 1 ಮುಗಿಸಿದರೂ ಫಲಿತಾಂಶಗಳು ಯೋಜನೆ ಕ್ರಮದಲ್ಲಿ ಉಳಿದವು. 3) ವಿಫಲ ಕೆಲಸಗಾರ ಇಡೀ ಓಟ ವಿಫಲಗೊಳಿಸಿ ಎರಡು ಫಲಿತಾಂಶಗಳು ಬಿಸಾಡಲ್ಪಟ್ಟವು. 4) ಮೂರು ಮಕ್ಕಳು ಮತ್ತು ಆಳ ಎರಡಿರುವ ಮರಕ್ಕೆ 13 ಏಜೆಂಟ್‌ಗಳು. 5) ಆದರ್ಶ ವೇಗವರ್ಧನೆ 3.00x ಮತ್ತು 0.35 s ನಲ್ಲಿ 2.57x ಗೆ ಇಳಿಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "In which order did the workers finish when the delays were 0.3, 0.1 and 0.2?",
      "qKn": "ವಿಳಂಬಗಳು 0.3, 0.1 ಮತ್ತು 0.2 ಆಗಿದ್ದಾಗ ಕೆಲಸಗಾರರು ಯಾವ ಕ್ರಮದಲ್ಲಿ ಮುಗಿಸಿದರು?",
      "opts": [
       "2, 3, 1",
       "1, 2, 3",
       "3, 2, 1",
       "2, 1, 3"
      ],
      "optsKn": [
       "2, 3, 1",
       "1, 2, 3",
       "3, 2, 1",
       "2, 1, 3"
      ],
      "correct": 0
     },
     {
      "q": "How many agents does a tree with three children per supervisor and depth two have?",
      "qKn": "ಪ್ರತಿ supervisor ಗೆ ಮೂರು ಮಕ್ಕಳು ಮತ್ತು ಆಳ ಎರಡಿರುವ ಮರಕ್ಕೆ ಎಷ್ಟು ಏಜೆಂಟ್‌ಗಳು?",
      "opts": [
       "13",
       "9",
       "40",
       "7"
      ],
      "optsKn": [
       "13",
       "9",
       "40",
       "7"
      ],
      "correct": 0
     },
     {
      "q": "What happened to the results of the two good workers when one worker failed?",
      "qKn": "ಒಬ್ಬ ಕೆಲಸಗಾರ ವಿಫಲವಾದಾಗ ಇಬ್ಬರು ಒಳ್ಳೆಯ ಕೆಲಸಗಾರರ ಫಲಿತಾಂಶಗಳಿಗೆ ಏನಾಯಿತು?",
      "opts": [
       "They were discarded by the fail-after-join policy",
       "They were merged",
       "They were retried",
       "They were saved"
      ],
      "optsKn": [
       "fail-after-join ನೀತಿಯಿಂದ ಅವು ಬಿಸಾಡಲ್ಪಟ್ಟವು",
       "ಅವು ವಿಲೀನಗೊಂಡವು",
       "ಅವು ಮರುಪ್ರಯತ್ನಿಸಲ್ಪಟ್ಟವು",
       "ಅವು ಉಳಿಸಲ್ಪಟ್ಟವು"
      ],
      "correct": 0
     },
     {
      "q": "What speedup did the worked example with a 0.35 s parallel stage give?",
      "qKn": "0.35 s ಸಮಾನಾಂತರ ಹಂತದ ಉದಾಹರಣೆ ಯಾವ ವೇಗವರ್ಧನೆ ನೀಡಿತು?",
      "opts": [
       "2.57x",
       "3.00x",
       "0.9x",
       "1.0x"
      ],
      "optsKn": [
       "2.57x",
       "3.00x",
       "0.9x",
       "1.0x"
      ],
      "correct": 0
     },
     {
      "q": "Why were the results listed in plan order?",
      "qKn": "ಫಲಿತಾಂಶಗಳು ಯೋಜನೆ ಕ್ರಮದಲ್ಲಿ ಏಕೆ ಪಟ್ಟಿಯಾದವು?",
      "opts": [
       "Each result is written into the slot of its question",
       "The workers finished in order",
       "The lead sorted by time",
       "The threads ran one by one"
      ],
      "optsKn": [
       "ಪ್ರತಿ ಫಲಿತಾಂಶ ಅದರ ಪ್ರಶ್ನೆ ಸ್ಥಾನದಲ್ಲಿ ಬರೆಯಲ್ಪಡುತ್ತದೆ",
       "ಕೆಲಸಗಾರರು ಕ್ರಮವಾಗಿ ಮುಗಿಸಿದರು",
       "lead ಸಮಯದಿಂದ ವಿಂಗಡಿಸಿತು",
       "thread ಗಳು ಒಂದೊಂದಾಗಿ ಓಡಿದವು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
