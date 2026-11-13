module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b32155f",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Orchestration Patterns: Supervisor, Swarm, Hierarchical (Part 1 of 3) — Supervisor-Worker",
 "titleKn": "ಆರ್ಕೆಸ್ಟ್ರೇಶನ್ ಮಾದರಿಗಳು: Supervisor, Swarm, Hierarchical (ಭಾಗ 1 / 3) — Supervisor-Worker",
 "desc": "Build a supervisor-worker system with a scripted classifier and trace, then measure its routing quality, its single point of failure and its growing routing prompt.",
 "descKn": "ಸ್ಕ್ರಿಪ್ಟ್ ವರ್ಗೀಕಾರಕ ಮತ್ತು trace ಜೊತೆ supervisor-worker ವ್ಯವಸ್ಥೆ ನಿರ್ಮಿಸಿ, ನಂತರ ಅದರ routing ಗುಣಮಟ್ಟ, ಏಕೈಕ ವೈಫಲ್ಯ ಬಿಂದು ಮತ್ತು ಬೆಳೆಯುವ routing prompt ಅಳೆಯಿರಿ.",
 "objectives": [
  "Name the four orchestration patterns.",
  "Read a supervisor trace.",
  "Measure routing quality of a scripted router.",
  "Explain the single-point-of-failure trade.",
  "Estimate prompt growth with roster size."
 ],
 "objectivesKn": [
  "ನಾಲ್ಕು ಆರ್ಕೆಸ್ಟ್ರೇಶನ್ ಮಾದರಿಗಳನ್ನು ಹೆಸರಿಸಿ.",
  "Supervisor trace ಓದಿ.",
  "ಸ್ಕ್ರಿಪ್ಟ್ router ನ routing ಗುಣಮಟ್ಟ ಅಳೆಯಿರಿ.",
  "ಏಕೈಕ-ವೈಫಲ್ಯ-ಬಿಂದು ವಿನಿಮಯ ವಿವರಿಸಿ.",
  "ರೋಸ್ಟರ್ ಗಾತ್ರದೊಂದಿಗೆ prompt ಬೆಳವಣಿಗೆ ಅಂದಾಜಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Orchestration Patterns: Supervisor, Swarm, Hierarchical (Part 1 of 3)",
    "textKn": "ಆರ್ಕೆಸ್ಟ್ರೇಶನ್ ಮಾದರಿಗಳು: Supervisor, Swarm, Hierarchical (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a supervisor-worker system, its trace, routing quality, central dependency and prompt growth. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind orchestration patterns (supervisor-worker, swarm, hierarchical and debate), not the real software, and every agent is a scripted keyword function or a seeded simulation with an assumed accuracy, so no language model and no real multi-agent system is measured, so no real LLM behaviour is measured. The pasted lesson described its program in prose, so the lab is written from the description. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: supervisor-worker ವ್ಯವಸ್ಥೆ, ಅದರ trace, routing ಗುಣಮಟ್ಟ, ಕೇಂದ್ರ ಅವಲಂಬನೆ ಮತ್ತು prompt ಬೆಳವಣಿಗೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಆರ್ಕೆಸ್ಟ್ರೇಶನ್ ಮಾದರಿಗಳು (supervisor-worker, swarm, hierarchical ಮತ್ತು debate) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪ್ರತಿ agent ಸ್ಕ್ರಿಪ್ಟ್ ಕೀವರ್ಡ್ ಫಂಕ್ಷನ್ ಅಥವಾ ಊಹಿಸಿದ ನಿಖರತೆಯ seeded ಅನುಕರಣೆ, ಆದ್ದರಿಂದ ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಮತ್ತು ನಿಜ ಬಹು-agent ವ್ಯವಸ್ಥೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಪ್ರೋಗ್ರಾಂ ಅನ್ನು ಗದ್ಯದಲ್ಲಿ ವಿವರಿಸಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಆ ವಿವರಣೆಯಿಂದ ಬರೆಯಲಾಗಿದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Why Orchestration Has Patterns",
    "textKn": "ಆರ್ಕೆಸ್ಟ್ರೇಶನ್‌ಗೆ ಮಾದರಿಗಳು ಏಕೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Start With the Simplest Topology",
    "headingKn": "ಸರಳ topology ಯಿಂದ ಆರಂಭಿಸಿ",
    "bodyEn": "Multi-agent systems repeat four shapes: supervisor-worker, swarm, hierarchical and debate. The simplest is a supervisor that classifies a request, calls one specialist worker and returns the answer. This part builds it with a scripted keyword classifier, prints a trace that names who decided each step, and then tests what centralisation costs: routing quality, a single point of failure and a routing prompt that grows with the roster.",
    "bodyKn": "Multi-agent ವ್ಯವಸ್ಥೆಗಳು ನಾಲ್ಕು ಆಕಾರಗಳನ್ನು ಪುನರಾವರ್ತಿಸುತ್ತವೆ: supervisor-worker, swarm, hierarchical ಮತ್ತು debate. ಸರಳವಾದದ್ದು ವಿನಂತಿಯನ್ನು ವರ್ಗೀಕರಿಸಿ, ಒಬ್ಬ ತಜ್ಞ worker ಅನ್ನು ಕರೆದು ಉತ್ತರ ಮರಳಿಸುವ supervisor. ಈ ಭಾಗ ಅದನ್ನು ಸ್ಕ್ರಿಪ್ಟ್ ಕೀವರ್ಡ್ ವರ್ಗೀಕಾರಕದೊಂದಿಗೆ ನಿರ್ಮಿಸಿ, ಪ್ರತಿ ಹಂತವನ್ನು ಯಾರು ನಿರ್ಧರಿಸಿದರು ಎಂದು ಹೆಸರಿಸುವ trace ಮುದ್ರಿಸಿ, ನಂತರ ಕೇಂದ್ರೀಕರಣದ ವೆಚ್ಚ ಪರೀಕ್ಷಿಸುತ್ತದೆ: routing ಗುಣಮಟ್ಟ, ಏಕೈಕ ವೈಫಲ್ಯ ಬಿಂದು ಮತ್ತು ರೋಸ್ಟರ್‌ನೊಂದಿಗೆ ಬೆಳೆಯುವ routing prompt."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "One Hub, Many Specialists",
    "headingKn": "ಒಂದು Hub, ಹಲವು ತಜ್ಞರು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Supervisor-worker</text><rect x=\"100\" y=\"26\" width=\"100\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"41\" fill=\"#e2e8f0\" text-anchor=\"middle\">supervisor</text><text x=\"150\" y=\"53\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">classify and route</text><rect x=\"10\" y=\"110\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">refund</text><text x=\"50\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">worker</text><rect x=\"110\" y=\"110\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">bug</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">worker</text><rect x=\"210\" y=\"110\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"250\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">sales</text><text x=\"250\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">worker</text><path d=\"M150,60 L50,110 M150,60 V110 M150,60 L250,110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">one hub decides, workers act</text></svg>",
    "captionEn": "The supervisor routes; workers do the work.",
    "captionKn": "Supervisor routes ಮಾಡುತ್ತದೆ; workers ಕೆಲಸ ಮಾಡುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The four patterns",
    "headingKn": "ನಾಲ್ಕು ಮಾದರಿಗಳು",
    "headers": [
     "Pattern",
     "Who decides next",
     "Main strength",
     "Main cost"
    ],
    "rows": [
     [
      "Supervisor-worker",
      "one supervisor",
      "control and a clear trace",
      "single point of failure, growing prompt"
     ],
     [
      "Swarm",
      "each peer",
      "no central router",
      "loops, harder to reason about"
     ],
     [
      "Hierarchical",
      "a supervisor per department",
      "smaller prompts per supervisor",
      "extra call per layer"
     ],
     [
      "Debate",
      "a judge over proposers",
      "checking by independent answers",
      "several times the calls"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building and Testing the Pattern",
    "textKn": "ಮಾದರಿ ನಿರ್ಮಿಸಿ ಪರೀಕ್ಷಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "orch_1.py",
    "headingEn": "Task, Trace, scripted classifier, workers, registry and supervisor",
    "headingKn": "Task, Trace, ಸ್ಕ್ರಿಪ್ಟ್ ವರ್ಗೀಕಾರಕ, workers, registry ಮತ್ತು supervisor",
    "descEn": "ScriptedLLM is a keyword classifier that counts its calls. The workers are plain functions held in a registry. run_supervisor classifies, looks up the worker, escalates when none exists, and records every step in a Trace.",
    "descKn": "ScriptedLLM ತನ್ನ ಕರೆಗಳನ್ನು ಎಣಿಸುವ ಕೀವರ್ಡ್ ವರ್ಗೀಕಾರಕ. Workers ಸರಳ ಫಂಕ್ಷನ್‌ಗಳು ಮತ್ತು registry ಯಲ್ಲಿವೆ. run_supervisor ವರ್ಗೀಕರಿಸಿ, worker ಹುಡುಕಿ, ಇಲ್ಲದಿದ್ದರೆ ಎಸ್ಕಲೇಟ್ ಮಾಡಿ, ಪ್ರತಿ ಹಂತವನ್ನು Trace ನಲ್ಲಿ ದಾಖಲಿಸುತ್ತದೆ.",
    "code": "@dataclass\nclass Task:\n    text: str\n\n\n@dataclass\nclass Trace:\n    events: list = field(default_factory=list)\n\n    def add(self, actor, action, detail=\"\"):\n        self.events.append((actor, action, detail))\n\n    def show(self):\n        for i, (a, act, d) in enumerate(self.events, 1):\n            print(f\"  {i:2}. {a:12} {act:10} {d}\")\n\n\nclass ScriptedLLM:\n    \"\"\"A keyword classifier standing in for a model. Counts how many times it is called.\"\"\"\n    RULES = ((\"refund\", (\"refund\", \"money back\", \"charged twice\")), (\"bug\", (\"bug\", \"crash\", \"error\", \"stack trace\")), (\"sales\", (\"price\", \"quote\", \"upgrade\", \"buy\")))\n\n    def __init__(self):\n        self.calls = 0\n\n    def classify(self, text):\n        self.calls += 1\n        t = text.lower()\n        for label, words in self.RULES:\n            if any(w in t for w in words):\n                return label\n        return \"unknown\"\n\n\ndef refund_worker(task):\n    return f\"refund case opened for: {task.text[:30]}\"\n\n\ndef bug_worker(task):\n    return f\"bug ticket filed for: {task.text[:30]}\"\n\n\ndef sales_worker(task):\n    return f\"sales lead created for: {task.text[:30]}\"\n\n\nREGISTRY = {\"refund\": refund_worker, \"bug\": bug_worker, \"sales\": sales_worker}\n\n\ndef run_supervisor(task, llm, registry=REGISTRY, supervisor_ok=True):\n    trace = Trace()\n    trace.add(\"user\", \"task\", task.text)\n    if not supervisor_ok:\n        trace.add(\"supervisor\", \"FAILED\", \"no routing possible\")\n        return \"no result\", trace\n    label = llm.classify(task.text)\n    trace.add(\"supervisor\", \"route\", label)\n    worker = registry.get(label)\n    if worker is None:\n        trace.add(\"supervisor\", \"escalate\", \"no worker for this label\")\n        return \"escalated to a human\", trace\n    result = worker(task)\n    trace.add(label + \"_worker\", \"result\", result)\n    trace.add(\"supervisor\", \"answer\", result)\n    return result, trace\n\n\ndef supervisor_prompt_size(n_workers, words_per_description=60):\n    \"\"\"Rough size of a routing prompt that lists every worker; an assumption, not a measurement of any model.\"\"\"\n    return 40 + n_workers * words_per_description"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "orch_1.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() prints four traces, scores the router on fourteen tasks, removes the supervisor and then a worker, tabulates roster growth and counts model calls.",
    "descKn": "main() ನಾಲ್ಕು traces ಮುದ್ರಿಸಿ, ಹದಿನಾಲ್ಕು ಕಾರ್ಯಗಳ ಮೇಲೆ router ಅಂಕಿಸಿ, supervisor ಮತ್ತು ನಂತರ ಒಂದು worker ತೆಗೆದು, ರೋಸ್ಟರ್ ಬೆಳವಣಿಗೆ ಕೋಷ್ಟಕ ಮಾಡಿ ಮಾದರಿ ಕರೆಗಳನ್ನು ಎಣಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    llm = ScriptedLLM()\n\n    section(\"1. One execution trace per request type\")\n    for text in (\"I was charged twice and want a refund\", \"The app shows a stack trace on login\", \"What is the price to upgrade to the team plan\", \"Tell me a joke\"):\n        result, tr = run_supervisor(Task(text), llm)\n        print(f\"task: {text}\")\n        tr.show()\n        print(f\"  -> {result}\")\n    print(\"each line of the trace names which actor decided or acted; the supervisor routes and the worker does the work, and an unknown label ends with an escalation instead of a guess\")\n\n    section(\"2. Genuinely measuring: the scripted router on 14 hand-written tasks\")\n    tasks = [(\"I need a refund for order 5\", \"refund\"), (\"Please give me my money back\", \"refund\"), (\"I was charged twice\", \"refund\"), (\"The app crashes on start\", \"bug\"),\n             (\"Error 500 when I save\", \"bug\"), (\"Here is a stack trace from production\", \"bug\"), (\"How much is the pro plan price\", \"sales\"), (\"I want a quote for 50 seats\", \"sales\"),\n             (\"Can I upgrade my plan\", \"sales\"), (\"My refund request caused an error in the app\", \"refund\"), (\"The upgrade button crashes the page\", \"bug\"),\n             (\"Cancel my subscription\", \"refund\"), (\"It is broken\", \"bug\"), (\"Hello\", \"unknown\")]\n    right = 0\n    for text, want in tasks:\n        got = ScriptedLLM().classify(text)\n        right += got == want\n        print(f\"{text[:44]:46} want={want:8} got={got:8} {'ok' if got == want else 'WRONG'}\")\n    print(f\"{right} of {len(tasks)} routed as intended\")\n    print(\"a task with two intents is routed by whichever rule comes first, and tasks that use words the rules do not list fall to unknown; the routing quality is the quality of the classifier, and the 14 tasks are ours, so this shows the failure shape, not a rate\")\n\n    section(\"3. Genuinely checking: the supervisor is a single point of failure, a worker is not\")\n    for label, kw in ((\"healthy\", {}), (\"supervisor down\", {\"supervisor_ok\": False}), (\"refund worker missing\", {\"registry\": {k: v for k, v in REGISTRY.items() if k != \"refund\"}})):\n        outcomes = [run_supervisor(Task(t), ScriptedLLM(), **kw)[0] for t in (\"I want a refund\", \"app crash bug\", \"price quote\")]\n        print(f\"{label:22} -> {[o[:22] for o in outcomes]}\")\n    print(\"when the supervisor fails every request fails; when one worker is missing only its own requests escalate, which is the control-versus-dependency trade of centralisation\")\n\n    section(\"4. Genuinely measuring: supervisor model calls and coordination edges as workers are added\")\n    print(f\"{'workers':>8} {'edges (hub)':>12} {'routing prompt words (assumed 60 per worker)':>46}\")\n    for n in (3, 10, 30, 100):\n        print(f\"{n:>8} {n:>12} {supervisor_prompt_size(n):>46}\")\n    print(\"the hub has one edge per worker, so the edge count grows linearly, but a routing prompt that lists every worker grows with the roster too; this is why very large rosters need a second level (Part 3)\")\n\n    section(\"5. Genuinely checking: model calls per request in this design\")\n    l2 = ScriptedLLM()\n    for t, _ in tasks[:6]:\n        run_supervisor(Task(t), l2)\n    print(f\"6 requests -> {l2.calls} classifier calls (one per request), workers made 0 model calls because they are plain functions\")\n    print(\"a supervisor that also asks a model to summarise each worker result would add one more call per request; counting calls per pattern is how the four patterns are compared in Part 3\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. One execution trace per request type ---\ntask: I was charged twice and want a refund\n   1. user         task       I was charged twice and want a refund\n   2. supervisor   route      refund\n   3. refund_worker result     refund case opened for: I was charged twice and want a\n   4. supervisor   answer     refund case opened for: I was charged twice and want a\n  -> refund case opened for: I was charged twice and want a\ntask: The app shows a stack trace on login\n   1. user         task       The app shows a stack trace on login\n   2. supervisor   route      bug\n   3. bug_worker   result     bug ticket filed for: The app shows a stack trace on\n   4. supervisor   answer     bug ticket filed for: The app shows a stack trace on\n  -> bug ticket filed for: The app shows a stack trace on\ntask: What is the price to upgrade to the team plan\n   1. user         task       What is the price to upgrade to the team plan\n   2. supervisor   route      sales\n   3. sales_worker result     sales lead created for: What is the price to upgrade t\n   4. supervisor   answer     sales lead created for: What is the price to upgrade t\n  -> sales lead created for: What is the price to upgrade t\ntask: Tell me a joke\n   1. user         task       Tell me a joke\n   2. supervisor   route      unknown\n   3. supervisor   escalate   no worker for this label\n  -> escalated to a human\neach line of the trace names which actor decided or acted; the supervisor routes and the worker does the work, and an unknown label ends with an escalation instead of a guess\n\n--- 2. Genuinely measuring: the scripted router on 14 hand-written tasks ---\nI need a refund for order 5                    want=refund   got=refund   ok\nPlease give me my money back                   want=refund   got=refund   ok\nI was charged twice                            want=refund   got=refund   ok\nThe app crashes on start                       want=bug      got=bug      ok\nError 500 when I save                          want=bug      got=bug      ok\nHere is a stack trace from production          want=bug      got=bug      ok\nHow much is the pro plan price                 want=sales    got=sales    ok\nI want a quote for 50 seats                    want=sales    got=sales    ok\nCan I upgrade my plan                          want=sales    got=sales    ok\nMy refund request caused an error in the app   want=refund   got=refund   ok\nThe upgrade button crashes the page            want=bug      got=bug      ok\nCancel my subscription                         want=refund   got=unknown  WRONG\nIt is broken                                   want=bug      got=unknown  WRONG\nHello                                          want=unknown  got=unknown  ok\n12 of 14 routed as intended\na task with two intents is routed by whichever rule comes first, and tasks that use words the rules do not list fall to unknown; the routing quality is the quality of the classifier, and the 14 tasks are ours, so this shows the failure shape, not a rate\n\n--- 3. Genuinely checking: the supervisor is a single point of failure, a worker is not ---\nhealthy                -> ['refund case opened for', 'bug ticket filed for: ', 'sales lead created for']\nsupervisor down        -> ['no result', 'no result', 'no result']\nrefund worker missing  -> ['escalated to a human', 'bug ticket filed for: ', 'sales lead created for']\nwhen the supervisor fails every request fails; when one worker is missing only its own requests escalate, which is the control-versus-dependency trade of centralisation\n\n--- 4. Genuinely measuring: supervisor model calls and coordination edges as workers are added ---\n workers  edges (hub)   routing prompt words (assumed 60 per worker)\n       3            3                                            220\n      10           10                                            640\n      30           30                                           1840\n     100          100                                           6040\nthe hub has one edge per worker, so the edge count grows linearly, but a routing prompt that lists every worker grows with the roster too; this is why very large rosters need a second level (Part 3)\n\n--- 5. Genuinely checking: model calls per request in this design ---\n6 requests -> 6 classifier calls (one per request), workers made 0 model calls because they are plain functions\na supervisor that also asks a model to summarise each worker result would add one more call per request; counting calls per pattern is how the four patterns are compared in Part 3"
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
    "headingEn": "Experiment 1: One execution trace per request type",
    "headingKn": "ಪ್ರಯೋಗ 1: One execution trace per request type",
    "bodyEn": "What it ran: One execution trace per request type. What the lab concluded: each line of the trace names which actor decided or acted; the supervisor routes and the worker does the work, and an unknown label ends with an escalation instead of a guess",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: One execution trace per request type. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each line of the trace names which actor decided or acted; the supervisor routes and the worker does the work, and an unknown label ends with an escalation instead of a guess"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. One execution trace per request type ---\ntask: I was charged twice and want a refund\n   1. user         task       I was charged twice and want a refund\n   2. supervisor   route      refund\n   3. refund_worker result     refund case opened for: I was charged twice and want a\n   4. supervisor   answer     refund case opened for: I was charged twice and want a\n  -> refund case opened for: I was charged twice and want a\ntask: The app shows a stack trace on login\n   1. user         task       The app shows a stack trace on login\n   2. supervisor   route      bug\n   3. bug_worker   result     bug ticket filed for: The app shows a stack trace on\n   4. supervisor   answer     bug ticket filed for: The app shows a stack trace on\n  -> bug ticket filed for: The app shows a stack trace on\ntask: What is the price to upgrade to the team plan\n   1. user         task       What is the price to upgrade to the team plan\n…"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: The scripted router on 14 hand-written tasks",
    "headingKn": "ಪ್ರಯೋಗ 2: The scripted router on 14 hand-written tasks",
    "bodyEn": "What it ran: The scripted router on 14 hand-written tasks. What the lab concluded: a task with two intents is routed by whichever rule comes first, and tasks that use words the rules do not list fall to unknown; the routing quality is the quality of the classifier, and the 14 tasks are ours, so this shows the failure shape, not a rate",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The scripted router on 14 hand-written tasks. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a task with two intents is routed by whichever rule comes first, and tasks that use words the rules do not list fall to unknown; the routing quality is the quality of the classifier, and the 14 tasks are ours, so this shows the failure shape, not a rate"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely measuring: the scripted router on 14 hand-written tasks ---\nI need a refund for order 5                    want=refund   got=refund   ok\nPlease give me my money back                   want=refund   got=refund   ok\nI was charged twice                            want=refund   got=refund   ok\nThe app crashes on start                       want=bug      got=bug      ok\nError 500 when I save                          want=bug      got=bug      ok\nHere is a stack trace from production          want=bug      got=bug      ok\nHow much is the pro plan price                 want=sales    got=sales    ok\nI want a quote for 50 seats                    want=sales    got=sales    ok\nCan I upgrade my plan                          want=sales    got=sales    ok\nMy refund request caused an error in the app   want=refund   got=refund   ok\nThe upgrade button crashes the page            want=bug      got=bug      ok\nCancel my subscription                         want=refund   got=unknown  WRONG\nIt is broken                                   want=bug      got=unknown  WRONG\nHello                                          want=unknown  got=unknown  ok\n…"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: The supervisor is a single point of failure, a worker is not",
    "headingKn": "ಪ್ರಯೋಗ 3: The supervisor is a single point of failure, a worker is not",
    "bodyEn": "What it ran: The supervisor is a single point of failure, a worker is not. What the lab concluded: when the supervisor fails every request fails; when one worker is missing only its own requests escalate, which is the control-versus-dependency trade of centralisation",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The supervisor is a single point of failure, a worker is not. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): when the supervisor fails every request fails; when one worker is missing only its own requests escalate, which is the control-versus-dependency trade of centralisation"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely checking: the supervisor is a single point of failure, a worker is not ---\nhealthy                -> ['refund case opened for', 'bug ticket filed for: ', 'sales lead created for']\nsupervisor down        -> ['no result', 'no result', 'no result']\nrefund worker missing  -> ['escalated to a human', 'bug ticket filed for: ', 'sales lead created for']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Supervisor model calls and coordination edges as workers are added",
    "headingKn": "ಪ್ರಯೋಗ 4: Supervisor model calls and coordination edges as workers are added",
    "bodyEn": "What it ran: Supervisor model calls and coordination edges as workers are added. What the lab concluded: the hub has one edge per worker, so the edge count grows linearly, but a routing prompt that lists every worker grows with the roster too; this is why very large rosters need a second level (Part 3)",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Supervisor model calls and coordination edges as workers are added. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the hub has one edge per worker, so the edge count grows linearly, but a routing prompt that lists every worker grows with the roster too; this is why very large rosters need a second level (Part 3)"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely measuring: supervisor model calls and coordination edges as workers are added ---\n workers  edges (hub)   routing prompt words (assumed 60 per worker)\n       3            3                                            220\n      10           10                                            640\n      30           30                                           1840\n     100          100                                           6040"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Model calls per request in this design",
    "headingKn": "ಪ್ರಯೋಗ 5: Model calls per request in this design",
    "bodyEn": "What it ran: Model calls per request in this design. What the lab concluded: a supervisor that also asks a model to summarise each worker result would add one more call per request; counting calls per pattern is how the four patterns are compared in Part 3",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Model calls per request in this design. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a supervisor that also asks a model to summarise each worker result would add one more call per request; counting calls per pattern is how the four patterns are compared in Part 3"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely checking: model calls per request in this design ---\n6 requests -> 6 classifier calls (one per request), workers made 0 model calls because they are plain functions"
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
    "headingEn": "Genuinely Found: The Trace Names Every Decision; Routing Quality Is Classifier Quality",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Trace ಪ್ರತಿ ತೀರ್ಮಾನ ಹೆಸರಿಸುತ್ತದೆ; Routing ಗುಣಮಟ್ಟ ವರ್ಗೀಕಾರಕದ ಗುಣಮಟ್ಟ",
    "bodyEn": "Section 1: each request type produced a four-line trace (user task, supervisor route, worker result, supervisor answer), and \"Tell me a joke\" routed to unknown and escalated to a human instead of being guessed. Section 2, on fourteen hand-written tasks: 12 of 14 were routed as intended. \"Cancel my subscription\" and \"It is broken\" fell to unknown because they use words the rules do not list. Two mixed-intent tasks (\"My refund request caused an error in the app\", \"The upgrade button crashes the page\") were routed as intended only because rule order happened to match; the router picks whichever rule comes first.",
    "bodyKn": "ವಿಭಾಗ 1: ಪ್ರತಿ ವಿನಂತಿ ಪ್ರಕಾರ ನಾಲ್ಕು-ಸಾಲಿನ trace (ಬಳಕೆದಾರ ಕಾರ್ಯ, supervisor route, worker ಫಲಿತಾಂಶ, supervisor ಉತ್ತರ) ನೀಡಿತು, ಮತ್ತು \"Tell me a joke\" unknown ಗೆ routed ಆಗಿ ಊಹಿಸುವ ಬದಲು ಮಾನವನಿಗೆ ಎಸ್ಕಲೇಟ್ ಆಯಿತು. ವಿಭಾಗ 2, ಹದಿನಾಲ್ಕು ಕೈಬರಹ ಕಾರ್ಯಗಳ ಮೇಲೆ: 14 ರಲ್ಲಿ 12 ಉದ್ದೇಶಿತವಾಗಿ routed ಆದವು. \"Cancel my subscription\" ಮತ್ತು \"It is broken\" ನಿಯಮಗಳು ಪಟ್ಟಿ ಮಾಡದ ಪದಗಳನ್ನು ಬಳಸುವುದರಿಂದ unknown ಗೆ ಬಿದ್ದವು. ಎರಡು ಮಿಶ್ರ-ಉದ್ದೇಶ ಕಾರ್ಯಗಳು (\"My refund request caused an error in the app\", \"The upgrade button crashes the page\") ನಿಯಮ ಕ್ರಮ ಹೊಂದಿದ್ದರಿಂದ ಮಾತ್ರ ಉದ್ದೇಶಿತವಾಗಿ routed ಆದವು; router ಮೊದಲು ಬರುವ ನಿಯಮ ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Hub Is a Single Point of Failure and Its Prompt Grows",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Hub ಏಕೈಕ ವೈಫಲ್ಯ ಬಿಂದು ಮತ್ತು ಅದರ prompt ಬೆಳೆಯುತ್ತದೆ",
    "bodyEn": "Section 3: with the supervisor down all three requests returned \"no result\"; with the refund worker missing only the refund request escalated and the other two still completed. Section 4: the hub has one edge per worker (3, 10, 30, 100), but a routing prompt that lists every worker grows with the roster, from 220 words at 3 workers to 6,040 at 100 under an assumed 60 words per description. Section 5: six requests used six classifier calls, because the workers are plain functions.",
    "bodyKn": "ವಿಭಾಗ 3: supervisor ನಿಂತಾಗ ಮೂರೂ ವಿನಂತಿಗಳು \"no result\" ಮರಳಿಸಿದವು; refund worker ಕಾಣೆಯಾದಾಗ refund ವಿನಂತಿ ಮಾತ್ರ ಎಸ್ಕಲೇಟ್ ಆಗಿ ಇತರ ಎರಡು ಪೂರ್ಣಗೊಂಡವು. ವಿಭಾಗ 4: hub ಗೆ ಪ್ರತಿ worker ಗೆ ಒಂದು edge (3, 10, 30, 100), ಆದರೆ ಪ್ರತಿ worker ಪಟ್ಟಿ ಮಾಡುವ routing prompt ರೋಸ್ಟರ್‌ನೊಂದಿಗೆ ಬೆಳೆಯುತ್ತದೆ, ಪ್ರತಿ ವಿವರಣೆಗೆ ಊಹಿಸಿದ 60 ಪದಗಳಲ್ಲಿ 3 workers ಗೆ 220 ಪದಗಳಿಂದ 100 ಕ್ಕೆ 6,040 ವರೆಗೆ. ವಿಭಾಗ 5: workers ಸರಳ ಫಂಕ್ಷನ್‌ಗಳಾದ್ದರಿಂದ ಆರು ವಿನಂತಿಗಳು ಆರು ವರ್ಗೀಕಾರಕ ಕರೆಗಳನ್ನು ಬಳಸಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A supervisor gives control and a readable trace, but all routing quality and availability depend on one component. Measuring that dependency tells you when a second pattern is worth its cost.",
    "bodyKn": "Supervisor ನಿಯಂತ್ರಣ ಮತ್ತು ಓದಬಲ್ಲ trace ನೀಡುತ್ತದೆ, ಆದರೆ ಎಲ್ಲಾ routing ಗುಣಮಟ್ಟ ಮತ್ತು ಲಭ್ಯತೆ ಒಂದು ಘಟಕದ ಮೇಲೆ ಅವಲಂಬಿತ. ಆ ಅವಲಂಬನೆಯನ್ನು ಅಳೆಯುವುದು ಎರಡನೇ ಮಾದರಿ ಅದರ ವೆಚ್ಚಕ್ಕೆ ಯೋಗ್ಯವಾದಾಗ ತಿಳಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"more agents means a better system.\" Here the single-hub design routed 12 of 14 tasks and the misses were all classifier problems that more workers would not fix.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಹೆಚ್ಚು agents ಎಂದರೆ ಉತ್ತಮ ವ್ಯವಸ್ಥೆ.\" ಇಲ್ಲಿ ಏಕ-hub ವಿನ್ಯಾಸ 14 ರಲ್ಲಿ 12 ಕಾರ್ಯ routed ಮಾಡಿತು ಮತ್ತು ತಪ್ಪುಗಳೆಲ್ಲವೂ ಹೆಚ್ಚು workers ಸರಿಪಡಿಸದ ವರ್ಗೀಕಾರಕ ಸಮಸ್ಯೆಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Supervisor: decides which worker runs. Worker: a specialist that does the work. Registry: the map from label to worker. Trace: an ordered record of who did what. Escalation: handing an unroutable request to a human.",
    "bodyKn": "Supervisor: ಯಾವ worker ಓಡಬೇಕು ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ. Worker: ಕೆಲಸ ಮಾಡುವ ತಜ್ಞ. Registry: ಲೇಬಲ್‌ನಿಂದ worker ಗೆ ನಕ್ಷೆ. Trace: ಯಾರು ಏನು ಮಾಡಿದರು ಎಂಬ ಕ್ರಮಬದ್ಧ ದಾಖಲೆ. Escalation: routing ಸಾಧ್ಯವಿಲ್ಲದ ವಿನಂತಿಯನ್ನು ಮಾನವನಿಗೆ ಒಪ್ಪಿಸುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The trace named who decided each step. 2) The router got 12 of 14 right; two failures used unlisted words. 3) Mixed-intent tasks depended on rule order. 4) With the supervisor down all 3 requests failed; with one worker missing only its own escalated. 5) Hub edges grow linearly but the routing prompt grew from 220 to 6,040 words (assumed 60 per entry). 6) Six requests used six classifier calls.",
    "bodyKn": "1) Trace ಪ್ರತಿ ಹಂತ ಯಾರು ನಿರ್ಧರಿಸಿದರು ಎಂದು ಹೆಸರಿಸಿತು. 2) Router 14 ರಲ್ಲಿ 12 ಸರಿ; ಎರಡು ವೈಫಲ್ಯ ಪಟ್ಟಿ ಮಾಡದ ಪದಗಳನ್ನು ಬಳಸಿದವು. 3) ಮಿಶ್ರ-ಉದ್ದೇಶ ಕಾರ್ಯಗಳು ನಿಯಮ ಕ್ರಮದ ಮೇಲೆ ಅವಲಂಬಿತ. 4) Supervisor ನಿಂತಾಗ 3 ವಿನಂತಿಗಳೂ ವಿಫಲ; ಒಂದು worker ಕಾಣೆಯಾದಾಗ ಅದರದ್ದು ಮಾತ್ರ ಎಸ್ಕಲೇಟ್. 5) Hub edges ರೇಖೀಯವಾಗಿ ಬೆಳೆಯುತ್ತವೆ ಆದರೆ routing prompt 220 ರಿಂದ 6,040 ಪದಗಳಿಗೆ ಬೆಳೆಯಿತು (ಪ್ರತಿ ನಮೂದಿಗೆ 60 ಊಹೆ). 6) ಆರು ವಿನಂತಿಗಳು ಆರು ವರ್ಗೀಕಾರಕ ಕರೆಗಳನ್ನು ಬಳಸಿದವು."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Try It Yourself",
    "textKn": "ನೀವೇ ಪ್ರಯತ್ನಿಸಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Run the lab",
    "headingKn": "ಲ್ಯಾಬ್ ಓಡಿಸಿ",
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B orch_1.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B orch_1.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B orch_1.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B orch_1.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many of the fourteen tasks did the scripted router route as intended?",
      "qKn": "ಹದಿನಾಲ್ಕು ಕಾರ್ಯಗಳಲ್ಲಿ ಸ್ಕ್ರಿಪ್ಟ್ router ಎಷ್ಟನ್ನು ಉದ್ದೇಶಿತವಾಗಿ routed ಮಾಡಿತು?",
      "opts": [
       "14",
       "12",
       "8",
       "6"
      ],
      "optsKn": [
       "14",
       "12",
       "8",
       "6"
      ],
      "correct": 1
     },
     {
      "q": "What happened to all requests when the supervisor was down?",
      "qKn": "Supervisor ನಿಂತಾಗ ಎಲ್ಲಾ ವಿನಂತಿಗಳಿಗೆ ಏನಾಯಿತು?",
      "opts": [
       "They still completed",
       "All returned no result",
       "Only refund failed",
       "They went to workers directly"
      ],
      "optsKn": [
       "ಅವು ಇನ್ನೂ ಪೂರ್ಣಗೊಂಡವು",
       "ಎಲ್ಲವೂ no result ಮರಳಿಸಿದವು",
       "Refund ಮಾತ್ರ ವಿಫಲ",
       "ಅವು ನೇರವಾಗಿ workers ಗೆ ಹೋದವು"
      ],
      "correct": 1
     },
     {
      "q": "What happened when the refund worker was missing?",
      "qKn": "Refund worker ಕಾಣೆಯಾದಾಗ ಏನಾಯಿತು?",
      "opts": [
       "Everything failed",
       "Only refund requests escalated",
       "Nothing changed",
       "The supervisor crashed"
      ],
      "optsKn": [
       "ಎಲ್ಲವೂ ವಿಫಲ",
       "Refund ವಿನಂತಿಗಳು ಮಾತ್ರ ಎಸ್ಕಲೇಟ್",
       "ಏನೂ ಬದಲಾಗಲಿಲ್ಲ",
       "Supervisor ಕ್ರ್ಯಾಶ್"
      ],
      "correct": 1
     },
     {
      "q": "Under an assumed 60 words per worker, how large was the routing prompt at 100 workers?",
      "qKn": "ಪ್ರತಿ worker ಗೆ ಊಹಿಸಿದ 60 ಪದಗಳಲ್ಲಿ 100 workers ಗೆ routing prompt ಎಷ್ಟು ದೊಡ್ಡದಾಗಿತ್ತು?",
      "opts": [
       "220 words",
       "640 words",
       "6,040 words",
       "100 words"
      ],
      "optsKn": [
       "220 ಪದಗಳು",
       "640 ಪದಗಳು",
       "6,040 ಪದಗಳು",
       "100 ಪದಗಳು"
      ],
      "correct": 2
     },
     {
      "q": "Why were the two mixed-intent tasks routed as intended?",
      "qKn": "ಎರಡು ಮಿಶ್ರ-ಉದ್ದೇಶ ಕಾರ್ಯಗಳು ಉದ್ದೇಶಿತವಾಗಿ ಏಕೆ routed ಆದವು?",
      "opts": [
       "The router understood both intents",
       "Rule order happened to match the intended label",
       "The workers voted",
       "They were escalated"
      ],
      "optsKn": [
       "Router ಎರಡೂ ಉದ್ದೇಶ ಅರ್ಥಮಾಡಿತು",
       "ನಿಯಮ ಕ್ರಮ ಉದ್ದೇಶಿತ ಲೇಬಲ್‌ಗೆ ಹೊಂದಿತು",
       "Workers ಮತ ಹಾಕಿದವು",
       "ಅವು ಎಸ್ಕಲೇಟ್ ಆದವು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
