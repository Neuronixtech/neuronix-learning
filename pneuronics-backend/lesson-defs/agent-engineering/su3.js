module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215e3",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Supervisor / Orchestrator-Worker Pattern (Part 3 of 3) — Interfaces, Permissions and a Durable Run",
 "titleKn": "Supervisor / Orchestrator-Worker ಮಾದರಿ (ಭಾಗ 3 / 3) — ಇಂಟರ್ಫೇಸ್, ಅನುಮತಿಗಳು ಮತ್ತು ಬಾಳಿಕೆ ಬರುವ ಓಟ",
 "desc": "Wrap a supervisor in an interface, permissions, an event log, a conflict check and a dependency plan.",
 "descKn": "supervisor ಅನ್ನು ಇಂಟರ್ಫೇಸ್, ಅನುಮತಿಗಳು, ಘಟನೆ ದಾಖಲೆ, ಸಂಘರ್ಷ ಪರಿಶೀಲನೆ ಮತ್ತು ಅವಲಂಬನೆ ಯೋಜನೆಯಲ್ಲಿ ಸುತ್ತಿ.",
 "objectives": [
  "Code to an interface.",
  "Enforce permissions.",
  "Log events durably.",
  "Hold back on conflicts.",
  "Plan by dependency levels."
 ],
 "objectivesKn": [
  "ಇಂಟರ್ಫೇಸ್‌ಗೆ ಕೋಡ್ ಬರೆಯಿರಿ.",
  "ಅನುಮತಿಗಳನ್ನು ಜಾರಿಗೊಳಿಸಿ.",
  "ಘಟನೆಗಳನ್ನು ಬಾಳಿಕೆಯಾಗಿ ದಾಖಲಿಸಿ.",
  "ಸಂಘರ್ಷಗಳಲ್ಲಿ ತಡೆ ಹಿಡಿಯಿರಿ.",
  "ಅವಲಂಬನೆ ಹಂತಗಳಿಂದ ಯೋಜಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Supervisor / Orchestrator-Worker Pattern (Part 3 of 3)",
    "textKn": "Supervisor / Orchestrator-Worker ಮಾದರಿ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: a provider-independent worker with a fake model, permissions, a durable SQLite run with a retry event, a conflict that stops completion, a dependency-aware plan, result validation and speedup arithmetic. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the supervisor and worker pattern (a lead that plans, threaded workers, ordered results, concurrency limits, timeouts, retries, shared budgets, conflicts, a durable run, permissions and a dependency-aware plan), not the real software, and workers sleep or raise on purpose and return canned summaries, the model is a fake that returns fixed text, the plan is a fixed template and nothing is researched, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The LangGraph, CrewAI, rainbow-deployment and Anthropic research-system material in the lesson is conceptual and its figures were not checked here. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ನಕಲಿ ಮಾದರಿಯೊಂದಿಗೆ provider-ಸ್ವತಂತ್ರ ಕೆಲಸಗಾರ, ಅನುಮತಿಗಳು, ಮರುಪ್ರಯತ್ನ ಘಟನೆಯೊಂದಿಗೆ ಬಾಳಿಕೆ ಬರುವ SQLite ಓಟ, ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ತಡೆಯುವ ಸಂಘರ್ಷ, ಅವಲಂಬನೆ-ಅರಿವಿನ ಯೋಜನೆ, ಫಲಿತಾಂಶ ಪರಿಶೀಲನೆ ಮತ್ತು ವೇಗವರ್ಧನೆ ಲೆಕ್ಕ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು supervisor ಮತ್ತು ಕೆಲಸಗಾರ ಮಾದರಿ (ಯೋಜಿಸುವ lead, thread ಮಾಡಿದ ಕೆಲಸಗಾರರು, ಕ್ರಮಬದ್ಧ ಫಲಿತಾಂಶಗಳು, ಏಕಕಾಲಿಕ ಮಿತಿಗಳು, timeout ಗಳು, ಮರುಪ್ರಯತ್ನಗಳು, ಹಂಚಿಕೆಯ ಬಜೆಟ್‌ಗಳು, ಸಂಘರ್ಷಗಳು, ಬಾಳಿಕೆ ಬರುವ ಓಟ, ಅನುಮತಿಗಳು ಮತ್ತು ಅವಲಂಬನೆ-ಅರಿವಿನ ಯೋಜನೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಕೆಲಸಗಾರರು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಮಲಗುತ್ತಾರೆ ಅಥವಾ ದೋಷ ಎತ್ತುತ್ತಾರೆ ಮತ್ತು ಸಿದ್ಧ ಸಾರಾಂಶ ನೀಡುತ್ತಾರೆ, ಮಾದರಿ ನಿಶ್ಚಿತ ಪಠ್ಯ ನೀಡುವ ನಕಲಿ, ಯೋಜನೆ ನಿಶ್ಚಿತ ಟೆಂಪ್ಲೇಟ್ ಮತ್ತು ಯಾವುದೂ ಸಂಶೋಧಿಸಲ್ಪಡುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ನೀಡಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. lesson ನ LangGraph, CrewAI, rainbow-deployment ಮತ್ತು Anthropic research-system ವಿಷಯ ಪರಿಕಲ್ಪನಾತ್ಮಕ ಮತ್ತು ಅದರ ಅಂಕಿಗಳನ್ನು ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "From a Demo to Something You Can Audit",
    "textKn": "ಡೆಮೊದಿಂದ ಲೆಕ್ಕಪರಿಶೋಧಿಸಬಹುದಾದ ವ್ಯವಸ್ಥೆಗೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Interfaces, Permissions, a Durable Run and a Plan with Dependencies",
    "headingKn": "ಇಂಟರ್ಫೇಸ್, ಅನುಮತಿಗಳು, ಬಾಳಿಕೆ ಬರುವ ಓಟ ಮತ್ತು ಅವಲಂಬನೆಗಳಿರುವ ಯೋಜನೆ",
    "bodyEn": "The last part keeps the supervisor idea and wraps production concerns around it. A worker is written against a small model interface so a real provider can replace the fake one. Permissions are checked in code and not in a prompt. A run is stored in SQLite as events, so a retry that happened is still visible afterwards. A run with two workers that contradict each other ends as needs review although every worker succeeded. A plan with dependencies is turned into levels that show how much of it can really run together, and a result is only accepted when it carries a summary and evidence.",
    "bodyKn": "ಕೊನೆಯ ಭಾಗ supervisor ಕಲ್ಪನೆಯನ್ನು ಉಳಿಸಿ ಅದರ ಸುತ್ತ ಉತ್ಪಾದನಾ ಕಾಳಜಿಗಳನ್ನು ಸುತ್ತುತ್ತದೆ. ನಿಜವಾದ provider ನಕಲಿಯದನ್ನು ಬದಲಿಸಲು ಕೆಲಸಗಾರನನ್ನು ಚಿಕ್ಕ ಮಾದರಿ ಇಂಟರ್ಫೇಸ್ ವಿರುದ್ಧ ಬರೆಯಲಾಗುತ್ತದೆ. ಅನುಮತಿಗಳನ್ನು prompt ನಲ್ಲಿ ಅಲ್ಲ ಕೋಡ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ. ಓಟವನ್ನು SQLite ನಲ್ಲಿ ಘಟನೆಗಳಾಗಿ ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ ನಡೆದ ಮರುಪ್ರಯತ್ನ ನಂತರವೂ ಕಾಣುತ್ತದೆ. ಪರಸ್ಪರ ವಿರೋಧಿಸುವ ಇಬ್ಬರು ಕೆಲಸಗಾರರ ಓಟ ಪ್ರತಿ ಕೆಲಸಗಾರ ಯಶಸ್ವಿಯಾಗಿದ್ದರೂ needs review ಎಂದು ಮುಗಿಯುತ್ತದೆ. ಅವಲಂಬನೆಗಳಿರುವ ಯೋಜನೆಯನ್ನು ಅದರಲ್ಲಿ ಎಷ್ಟು ನಿಜವಾಗಿ ಒಟ್ಟಿಗೆ ಓಡಬಹುದು ಎಂದು ತೋರಿಸುವ ಹಂತಗಳಾಗಿ ಪರಿವರ್ತಿಸಲಾಗುತ್ತದೆ, ಮತ್ತು ಫಲಿತಾಂಶ ಸಾರಾಂಶ ಹಾಗೂ ಸಾಕ್ಷಿ ಹೊಂದಿದಾಗ ಮಾತ್ರ ಒಪ್ಪಲ್ಪಡುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Production Controls",
    "headingKn": "ಉತ್ಪಾದನಾ ನಿಯಂತ್ರಣಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">production controls sit around the same supervisor idea</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">interface</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">model behind a method</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">permissions</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">checked in code</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">durable run</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">events in SQLite</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">gate</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">conflicts block done</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">production controls sit around the same supervisor idea</text></svg>",
    "captionEn": "Interfaces, permissions, a durable record and a completion check.",
    "captionKn": "ಇಂಟರ್ಫೇಸ್, ಅನುಮತಿಗಳು, ಬಾಳಿಕೆ ಬರುವ ದಾಖಲೆ ಮತ್ತು ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ಪರಿಶೀಲನೆ."
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
      "interface",
      "a worker that only calls a generate method"
     ],
     [
      "permissions",
      "four role and action pairs"
     ],
     [
      "durable run",
      "event order with a retry, results in plan order"
     ],
     [
      "conflict",
      "needs_review against complete"
     ],
     [
      "plan levels",
      "two analyses first, a circular plan refused"
     ],
     [
      "validation",
      "summary, evidence and a 120 s against 50 s speedup"
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
    "filename": "su_3.py",
    "headingEn": "Worker, permissions and validation",
    "headingKn": "ಕೆಲಸಗಾರ, ಅನುಮತಿಗಳು ಮತ್ತು ಪರಿಶೀಲನೆ",
    "descEn": "ResearchWorker calls model_client.generate, authorize checks a role against a policy table and validate_result needs a completed status, a summary and evidence.",
    "descKn": "ResearchWorker model_client.generate ಕರೆಯುತ್ತದೆ, authorize ಪಾತ್ರವನ್ನು ನೀತಿ ಕೋಷ್ಟಕದ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸುತ್ತದೆ ಮತ್ತು validate_result ಪೂರ್ಣಗೊಂಡ ಸ್ಥಿತಿ, ಸಾರಾಂಶ ಹಾಗೂ ಸಾಕ್ಷಿ ಬೇಡುತ್ತದೆ.",
    "code": "class FakeModelClient:\n    def generate(self, system_prompt, user_prompt):\n        return \"Simulated research result for: \" + user_prompt\n\n\nclass ResearchWorker:\n    def __init__(self, model_client):\n        self.model_client = model_client\n\n    def run(self, question):\n        return self.model_client.generate(system_prompt=\"You are a research specialist. State uncertainty explicitly.\", user_prompt=question)\n\n\nPOLICY = {\"research_worker\": {\"search\", \"document_read\"}, \"code_reviewer\": {\"repository_read\", \"test_report_read\"}, \"deployment_worker\": {\"deployment_status_read\"}}\n\n\ndef authorize(role, action):\n    if action not in POLICY.get(role, set()):\n        raise PermissionError(f\"{role} cannot perform {action}\")\n    return True\n\n\ndef validate_result(r):\n    return r.get(\"status\") == \"completed\" and bool(r.get(\"summary\")) and bool(r.get(\"evidence\"))"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "su_3.py",
    "headingEn": "The run store and the plan",
    "headingKn": "ಓಟ ಸಂಗ್ರಹ ಮತ್ತು ಯೋಜನೆ",
    "descEn": "RunStore writes runs and events to SQLite, run_supervisor retries one worker and marks needs_review on a conflict, and levels groups a plan by dependencies.",
    "descKn": "RunStore ಓಟಗಳು ಮತ್ತು ಘಟನೆಗಳನ್ನು SQLite ಗೆ ಬರೆಯುತ್ತದೆ, run_supervisor ಒಬ್ಬ ಕೆಲಸಗಾರನನ್ನು ಮರುಪ್ರಯತ್ನಿಸಿ ಸಂಘರ್ಷದಲ್ಲಿ needs_review ಗುರುತಿಸುತ್ತದೆ, ಮತ್ತು levels ಯೋಜನೆಯನ್ನು ಅವಲಂಬನೆಗಳ ಪ್ರಕಾರ ಗುಂಪು ಮಾಡುತ್ತದೆ.",
    "code": "class RunStore:\n    def __init__(self, path):\n        self.path, self.lock = path, threading.Lock()\n        with sqlite3.connect(path) as c:\n            c.execute(\"CREATE TABLE IF NOT EXISTS runs (run_id TEXT PRIMARY KEY, status TEXT)\")\n            c.execute(\"CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY AUTOINCREMENT, run_id TEXT, task_id TEXT, event_type TEXT)\")\n\n    def event(self, run_id, task_id, event_type):\n        with self.lock:\n            c = sqlite3.connect(self.path)\n            with c:\n                c.execute(\"INSERT INTO events (run_id, task_id, event_type) VALUES (?, ?, ?)\", (run_id, task_id, event_type))\n            c.close()\n\n    def set_run(self, run_id, status):\n        with self.lock:\n            c = sqlite3.connect(self.path)\n            with c:\n                c.execute(\"INSERT OR REPLACE INTO runs VALUES (?, ?)\", (run_id, status))\n            c.close()\n\n    def events_for(self, run_id, task_id):\n        c = sqlite3.connect(self.path)\n        rows = [r[0] for r in c.execute(\"SELECT event_type FROM events WHERE run_id = ? AND task_id = ? ORDER BY id\", (run_id, task_id))]\n        c.close()\n        return rows\n\n    def status(self, run_id):\n        c = sqlite3.connect(self.path)\n        row = c.execute(\"SELECT status FROM runs WHERE run_id = ?\", (run_id,)).fetchone()\n        c.close()\n        return row[0] if row else None\n\n\ndef run_supervisor(store, tasks, claims):\n    run_id = str(uuid.uuid4())\n    store.set_run(run_id, \"running\")\n    first_try = {\"operations\": True}\n\n    def work(task):\n        for attempt in (1, 2):\n            store.event(run_id, task, \"worker_attempt_started\")\n            if task == \"operations\" and first_try.pop(\"operations\", False):\n                store.event(run_id, task, \"worker_retryable_failure\")\n                continue\n            store.event(run_id, task, \"worker_completed\")\n            return {\"task_id\": task, \"status\": \"completed\", \"summary\": f\"{task} simulated finding\", \"evidence\": [f\"mock://{task}\"]}\n    with ThreadPoolExecutor(max_workers=2) as pool:\n        results = list(pool.map(work, tasks))\n    conflicts = sorted({(c[\"subject\"], c[\"predicate\"]) for c in claims if any(o[\"subject\"] == c[\"subject\"] and o[\"predicate\"] == c[\"predicate\"] and o[\"value\"] != c[\"value\"] for o in claims)})\n    status = \"complete\" if all(validate_result(r) for r in results) and not conflicts else \"needs_review\"\n    store.set_run(run_id, status)\n    return run_id, results, conflicts, status\n\n\ndef levels(plan):\n    done, out = set(), []\n    while len(done) < len(plan):\n        ready = sorted(t for t, deps in plan.items() if t not in done and set(deps) <= done)\n        if not ready:\n            raise ValueError(\"cycle in plan\")\n        out.append(ready)\n        done |= set(ready)\n    return out"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "su_3.py",
    "headingEn": "The experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the six experiments in order and prints the real result of each.",
    "descKn": "main() ಆರು ಪ್ರಯೋಗಗಳನ್ನು ಕ್ರಮವಾಗಿ ಓಡಿಸಿ ಪ್ರತಿಯೊಂದರ ನಿಜ ಫಲಿತಾಂಶ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: a worker that does not know which model it uses\")\n    worker = ResearchWorker(FakeModelClient())\n    first, second = worker.run(\"supervisor agents\"), worker.run(\"supervisor agents\")\n    print(first, \"| same output twice:\", first == second)\n    print(\"the worker depends only on an object with a generate method, so a real provider adapter could replace the fake one without touching the worker or the supervisor; with the fake model the output is deterministic, which tests the orchestration and says nothing about research quality.\")\n\n    section(\"2. Genuinely running: permissions the worker cannot talk its way past\")\n    for role, action in ((\"research_worker\", \"document_read\"), (\"research_worker\", \"deploy\"), (\"deployment_worker\", \"deploy\"), (\"intern\", \"search\")):\n        try:\n            print(f\"{role} / {action}:\", authorize(role, action))\n        except PermissionError as e:\n            print(f\"{role} / {action}: refused ({e})\")\n    print(\"reading a document is allowed for the research worker, deploying is refused for it and for the deployment worker, whose only right is to read status, and an unknown role has no rights at all; this check lives in the code and is not a sentence in a prompt, although a real system must enforce it at the tool boundary and not only here.\")\n\n    section(\"3. Genuinely running: a durable run with a retry recorded as events\")\n    path = os.path.join(tempfile.mkdtemp(), \"supervisor.sqlite3\")\n    store = RunStore(path)\n    run_id, results, conflicts, status = run_supervisor(store, [\"history\", \"engineering\", \"operations\"], [])\n    print(\"events for operations:\", store.events_for(run_id, \"operations\"))\n    print(\"events for history:\", store.events_for(run_id, \"history\"))\n    print(\"results in plan order:\", [r[\"task_id\"] for r in results], \"| stored run status:\", store.status(run_id))\n    print(\"the operations worker failed once and the event log shows started, retryable failure, started, completed, while history shows a single clean attempt, so a reader of the final status alone would never have known about the retry; results come back in plan order and the stored status is complete.\")\n\n    section(\"4. Genuinely running: a conflict stops the run from being called complete\")\n    claims = [{\"subject\": \"GET /admin\", \"predicate\": \"requires_auth\", \"value\": True}, {\"subject\": \"GET /admin\", \"predicate\": \"requires_auth\", \"value\": False}]\n    _, _, conflicts2, status2 = run_supervisor(store, [\"security\", \"engineering\"], claims)\n    print(\"conflicts:\", conflicts2, \"| status with conflict:\", status2, \"| status without:\", status)\n    print(\"with two workers disagreeing about one endpoint the run ends as needs_review and without a disagreement it ends complete, even though every worker succeeded in both runs; success of the workers and agreement of their findings are two different questions.\")\n\n    section(\"5. Genuinely running: a dependency-aware plan\")\n    plan = {\"analyze_api\": [], \"analyze_database\": [], \"design_migration\": [\"analyze_api\", \"analyze_database\"], \"implement_migration\": [\"design_migration\"], \"run_tests\": [\"implement_migration\"], \"review_release\": [\"run_tests\"]}\n    lv = levels(plan)\n    print(\"levels:\", lv)\n    try:\n        levels({\"a\": [\"b\"], \"b\": [\"a\"]})\n    except ValueError as e:\n        print(\"circular plan:\", e)\n    print(\"the two analyses share the first level and can run together, every later step waits for the one before it, and a circular plan is refused instead of looping; the parallel part of this task is only two of six steps, so an extra worker pool would barely shorten it.\")\n\n    section(\"6. Genuinely running: result validation and the speedup arithmetic\")\n    good = {\"status\": \"completed\", \"summary\": \"x\", \"evidence\": [\"mock://x\"]}\n    print(\"good:\", validate_result(good), \"| no evidence:\", validate_result({**good, \"evidence\": []}), \"| empty summary:\", validate_result({**good, \"summary\": \"\"}), \"| failed:\", validate_result({**good, \"status\": \"failed\"}))\n    print(f\"single agent 120 s against supervisor 50 s: speedup {120 / 50:.1f}x\")\n    print(\"only the result with a completed status, a summary and evidence references passes, and the evidence here is a placeholder string that nothing opens or checks; the 2.4x speedup is arithmetic on two example numbers and does not say whether the supervisor answer was as good or as cheap as the single agent.\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a worker that does not know which model it uses ---\nSimulated research result for: supervisor agents | same output twice: True\nthe worker depends only on an object with a generate method, so a real provider adapter could replace the fake one without touching the worker or the supervisor; with the fake model the output is deterministic, which tests the orchestration and says nothing about research quality.\n\n--- 2. Genuinely running: permissions the worker cannot talk its way past ---\nresearch_worker / document_read: True\nresearch_worker / deploy: refused (research_worker cannot perform deploy)\ndeployment_worker / deploy: refused (deployment_worker cannot perform deploy)\nintern / search: refused (intern cannot perform search)\nreading a document is allowed for the research worker, deploying is refused for it and for the deployment worker, whose only right is to read status, and an unknown role has no rights at all; this check lives in the code and is not a sentence in a prompt, although a real system must enforce it at the tool boundary and not only here.\n\n--- 3. Genuinely running: a durable run with a retry recorded as events ---\nevents for operations: ['worker_attempt_started', 'worker_retryable_failure', 'worker_attempt_started', 'worker_completed']\nevents for history: ['worker_attempt_started', 'worker_completed']\nresults in plan order: ['history', 'engineering', 'operations'] | stored run status: complete\nthe operations worker failed once and the event log shows started, retryable failure, started, completed, while history shows a single clean attempt, so a reader of the final status alone would never have known about the retry; results come back in plan order and the stored status is complete.\n\n--- 4. Genuinely running: a conflict stops the run from being called complete ---\nconflicts: [('GET /admin', 'requires_auth')] | status with conflict: needs_review | status without: complete\nwith two workers disagreeing about one endpoint the run ends as needs_review and without a disagreement it ends complete, even though every worker succeeded in both runs; success of the workers and agreement of their findings are two different questions.\n\n--- 5. Genuinely running: a dependency-aware plan ---\nlevels: [['analyze_api', 'analyze_database'], ['design_migration'], ['implement_migration'], ['run_tests'], ['review_release']]\ncircular plan: cycle in plan\nthe two analyses share the first level and can run together, every later step waits for the one before it, and a circular plan is refused instead of looping; the parallel part of this task is only two of six steps, so an extra worker pool would barely shorten it.\n\n--- 6. Genuinely running: result validation and the speedup arithmetic ---\ngood: True | no evidence: False | empty summary: False | failed: False\nsingle agent 120 s against supervisor 50 s: speedup 2.4x\nonly the result with a completed status, a summary and evidence references passes, and the evidence here is a placeholder string that nothing opens or checks; the 2.4x speedup is arithmetic on two example numbers and does not say whether the supervisor answer was as good or as cheap as the single agent."
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
    "headingEn": "Experiment 1: A worker that does not know which model it uses",
    "headingKn": "ಪ್ರಯೋಗ 1: A worker that does not know which model it uses",
    "bodyEn": "What it ran: A worker that does not know which model it uses. What the lab concluded: the worker depends only on an object with a generate method, so a real provider adapter could replace the fake one without touching the worker or the supervisor; with the fake model the output is deterministic, which tests the orchestration and says nothing about research quality.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A worker that does not know which model it uses. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the worker depends only on an object with a generate method, so a real provider adapter could replace the fake one without touching the worker or the supervisor; with the fake model the output is deterministic, which tests the orchestration and says nothing about research quality."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: a worker that does not know which model it uses ---\nSimulated research result for: supervisor agents | same output twice: True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Permissions the worker cannot talk its way past",
    "headingKn": "ಪ್ರಯೋಗ 2: Permissions the worker cannot talk its way past",
    "bodyEn": "What it ran: Permissions the worker cannot talk its way past. What the lab concluded: reading a document is allowed for the research worker, deploying is refused for it and for the deployment worker, whose only right is to read status, and an unknown role has no rights at all; this check lives in the code and is not a sentence in a prompt, although a real system must enforce it at the tool boundary and not only here.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Permissions the worker cannot talk its way past. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): reading a document is allowed for the research worker, deploying is refused for it and for the deployment worker, whose only right is to read status, and an unknown role has no rights at all; this check lives in the code and is not a sentence in a prompt, although a real system must enforce it at the tool boundary and not only here."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: permissions the worker cannot talk its way past ---\nresearch_worker / document_read: True\nresearch_worker / deploy: refused (research_worker cannot perform deploy)\ndeployment_worker / deploy: refused (deployment_worker cannot perform deploy)\nintern / search: refused (intern cannot perform search)"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: A durable run with a retry recorded as events",
    "headingKn": "ಪ್ರಯೋಗ 3: A durable run with a retry recorded as events",
    "bodyEn": "What it ran: A durable run with a retry recorded as events. What the lab concluded: the operations worker failed once and the event log shows started, retryable failure, started, completed, while history shows a single clean attempt, so a reader of the final status alone would never have known about the retry; results come back in plan order and the stored status is complete.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A durable run with a retry recorded as events. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the operations worker failed once and the event log shows started, retryable failure, started, completed, while history shows a single clean attempt, so a reader of the final status alone would never have known about the retry; results come back in plan order and the stored status is complete."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: a durable run with a retry recorded as events ---\nevents for operations: ['worker_attempt_started', 'worker_retryable_failure', 'worker_attempt_started', 'worker_completed']\nevents for history: ['worker_attempt_started', 'worker_completed']\nresults in plan order: ['history', 'engineering', 'operations'] | stored run status: complete"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A conflict stops the run from being called complete",
    "headingKn": "ಪ್ರಯೋಗ 4: A conflict stops the run from being called complete",
    "bodyEn": "What it ran: A conflict stops the run from being called complete. What the lab concluded: with two workers disagreeing about one endpoint the run ends as needs_review and without a disagreement it ends complete, even though every worker succeeded in both runs; success of the workers and agreement of their findings are two different questions.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A conflict stops the run from being called complete. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): with two workers disagreeing about one endpoint the run ends as needs_review and without a disagreement it ends complete, even though every worker succeeded in both runs; success of the workers and agreement of their findings are two different questions."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a conflict stops the run from being called complete ---\nconflicts: [('GET /admin', 'requires_auth')] | status with conflict: needs_review | status without: complete"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A dependency-aware plan",
    "headingKn": "ಪ್ರಯೋಗ 5: A dependency-aware plan",
    "bodyEn": "What it ran: A dependency-aware plan. What the lab concluded: the two analyses share the first level and can run together, every later step waits for the one before it, and a circular plan is refused instead of looping; the parallel part of this task is only two of six steps, so an extra worker pool would barely shorten it.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A dependency-aware plan. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the two analyses share the first level and can run together, every later step waits for the one before it, and a circular plan is refused instead of looping; the parallel part of this task is only two of six steps, so an extra worker pool would barely shorten it."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: a dependency-aware plan ---\nlevels: [['analyze_api', 'analyze_database'], ['design_migration'], ['implement_migration'], ['run_tests'], ['review_release']]\ncircular plan: cycle in plan"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: Result validation and the speedup arithmetic",
    "headingKn": "ಪ್ರಯೋಗ 6: Result validation and the speedup arithmetic",
    "bodyEn": "What it ran: Result validation and the speedup arithmetic. What the lab concluded: only the result with a completed status, a summary and evidence references passes, and the evidence here is a placeholder string that nothing opens or checks; the 2.4x speedup is arithmetic on two example numbers and does not say whether the supervisor answer was as good or as cheap as the single agent.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Result validation and the speedup arithmetic. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): only the result with a completed status, a summary and evidence references passes, and the evidence here is a placeholder string that nothing opens or checks; the 2.4x speedup is arithmetic on two example numbers and does not say whether the supervisor answer was as good or as cheap as the single agent."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: result validation and the speedup arithmetic ---\ngood: True | no evidence: False | empty summary: False | failed: False\nsingle agent 120 s against supervisor 50 s: speedup 2.4x"
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
    "headingEn": "Genuinely Found: Interface, Permissions and Events",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಇಂಟರ್ಫೇಸ್, ಅನುಮತಿಗಳು ಮತ್ತು ಘಟನೆಗಳು",
    "bodyEn": "Section 1: the fake model gave the same output twice. Section 2: the research worker could read a document, was refused deploy, the deployment worker was refused deploy and an unknown role was refused search. Section 3: the operations events were started, retryable failure, started, completed, history showed a single attempt, results were in plan order and the stored status was complete.",
    "bodyKn": "ವಿಭಾಗ 1: ನಕಲಿ ಮಾದರಿ ಎರಡು ಬಾರಿ ಒಂದೇ output ನೀಡಿತು. ವಿಭಾಗ 2: ಸಂಶೋಧನಾ ಕೆಲಸಗಾರ ದಾಖಲೆ ಓದಬಹುದಿತ್ತು, deploy ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು, ನಿಯೋಜನೆ ಕೆಲಸಗಾರನಿಗೆ deploy ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು ಮತ್ತು ಅಜ್ಞಾತ ಪಾತ್ರಕ್ಕೆ search ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 3: operations ಘಟನೆಗಳು started, retryable failure, started, completed ಆಗಿದ್ದವು, history ಒಂದೇ ಪ್ರಯತ್ನ ತೋರಿಸಿತು, ಫಲಿತಾಂಶಗಳು ಯೋಜನೆ ಕ್ರಮದಲ್ಲಿದ್ದವು ಮತ್ತು ಸಂಗ್ರಹಿತ ಸ್ಥಿತಿ complete ಆಗಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Conflict, Levels and Validation",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಂಘರ್ಷ, ಹಂತಗಳು ಮತ್ತು ಪರಿಶೀಲನೆ",
    "bodyEn": "Section 4: with a contradiction the run ended needs_review and without one it ended complete. Section 5: the levels were the two analyses, then design_migration, implement_migration, run_tests and review_release one per level, and a circular plan raised cycle in plan. Section 6: only the result with status, summary and evidence passed, and the speedup was 2.4x.",
    "bodyKn": "ವಿಭಾಗ 4: ವಿರೋಧ ಇದ್ದಾಗ ಓಟ needs_review ಎಂದು ಮುಗಿಯಿತು ಮತ್ತು ಇಲ್ಲದಾಗ complete ಎಂದು ಮುಗಿಯಿತು. ವಿಭಾಗ 5: ಹಂತಗಳು ಎರಡು ವಿಶ್ಲೇಷಣೆಗಳು, ನಂತರ design_migration, implement_migration, run_tests ಮತ್ತು review_release ಪ್ರತಿ ಹಂತಕ್ಕೆ ಒಂದು, ಮತ್ತು ವೃತ್ತಾಕಾರದ ಯೋಜನೆ cycle in plan ಎತ್ತಿತು. ವಿಭಾಗ 6: ಸ್ಥಿತಿ, ಸಾರಾಂಶ ಮತ್ತು ಸಾಕ್ಷಿ ಇರುವ ಫಲಿತಾಂಶ ಮಾತ್ರ ಪಾಸಾಯಿತು, ಮತ್ತು ವೇಗವರ್ಧನೆ 2.4x."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A supervisor you can trust is the same idea with an interface that can be swapped, permissions that cannot be argued with, a record that shows retries and a completion rule that does not equate finished workers with a finished task.",
    "bodyKn": "ನಂಬಬಹುದಾದ supervisor ಅದೇ ಕಲ್ಪನೆ, ಬದಲಿಸಬಹುದಾದ ಇಂಟರ್ಫೇಸ್, ವಾದಿಸಲಾಗದ ಅನುಮತಿಗಳು, ಮರುಪ್ರಯತ್ನ ತೋರಿಸುವ ದಾಖಲೆ ಮತ್ತು ಮುಗಿದ ಕೆಲಸಗಾರರನ್ನು ಮುಗಿದ ಕೆಲಸಕ್ಕೆ ಸಮೀಕರಿಸದ ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ನಿಯಮದೊಂದಿಗೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"if every worker succeeded the run is complete.\" Two successful workers contradicted each other and the run ended as needs_review.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಪ್ರತಿ ಕೆಲಸಗಾರ ಯಶಸ್ವಿಯಾದರೆ ಓಟ ಪೂರ್ಣ.\" ಇಬ್ಬರು ಯಶಸ್ವಿ ಕೆಲಸಗಾರರು ಪರಸ್ಪರ ವಿರೋಧಿಸಿದರು ಮತ್ತು ಓಟ needs_review ಎಂದು ಮುಗಿಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Provider interface: a small contract a model client implements. Event log: an ordered record of what happened. Needs review: a state for runs that finished but cannot be trusted yet. Dependency level: steps that can run together. Evidence reference: a pointer to the source of a claim.",
    "bodyKn": "Provider ಇಂಟರ್ಫೇಸ್: ಮಾದರಿ ಕ್ಲೈಂಟ್ ಅನುಷ್ಠಾನಗೊಳಿಸುವ ಚಿಕ್ಕ ಒಪ್ಪಂದ. ಘಟನೆ ದಾಖಲೆ: ಏನು ನಡೆಯಿತು ಎಂಬುದರ ಕ್ರಮಬದ್ಧ ದಾಖಲೆ. Needs review: ಮುಗಿದರೂ ಇನ್ನೂ ನಂಬಲಾಗದ ಓಟಗಳ ಸ್ಥಿತಿ. ಅವಲಂಬನೆ ಹಂತ: ಒಟ್ಟಿಗೆ ಓಡಬಹುದಾದ ಹಂತಗಳು. ಸಾಕ್ಷಿ ಉಲ್ಲೇಖ: ಹೇಳಿಕೆಯ ಮೂಲಕ್ಕೆ ಸೂಚಕ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The retry showed up in the event log although the final status hid it. 2) A role without the right was refused in code. 3) A contradiction turned a run of successful workers into needs_review. 4) Only two of six plan steps could run together. 5) A result without evidence was refused.",
    "bodyKn": "1) ಅಂತಿಮ ಸ್ಥಿತಿ ಅದನ್ನು ಮರೆಮಾಡಿದರೂ ಮರುಪ್ರಯತ್ನ ಘಟನೆ ದಾಖಲೆಯಲ್ಲಿ ಕಾಣಿಸಿತು. 2) ಹಕ್ಕಿಲ್ಲದ ಪಾತ್ರ ಕೋಡ್‌ನಲ್ಲಿ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು. 3) ವಿರೋಧ ಯಶಸ್ವಿ ಕೆಲಸಗಾರರ ಓಟವನ್ನು needs_review ಆಗಿ ಬದಲಿಸಿತು. 4) ಆರು ಯೋಜನೆ ಹಂತಗಳಲ್ಲಿ ಎರಡು ಮಾತ್ರ ಒಟ್ಟಿಗೆ ಓಡಬಹುದಿತ್ತು. 5) ಸಾಕ್ಷಿ ಇಲ್ಲದ ಫಲಿತಾಂಶ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What events did the operations worker record?",
      "qKn": "operations ಕೆಲಸಗಾರ ಯಾವ ಘಟನೆಗಳನ್ನು ದಾಖಲಿಸಿದನು?",
      "opts": [
       "started, retryable failure, started, completed",
       "started, completed",
       "started, failed",
       "completed only"
      ],
      "optsKn": [
       "started, retryable failure, started, completed",
       "started, completed",
       "started, failed",
       "completed ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "What status did the run get when two workers contradicted each other?",
      "qKn": "ಇಬ್ಬರು ಕೆಲಸಗಾರರು ಪರಸ್ಪರ ವಿರೋಧಿಸಿದಾಗ ಓಟಕ್ಕೆ ಯಾವ ಸ್ಥಿತಿ ಸಿಕ್ಕಿತು?",
      "opts": [
       "needs_review",
       "complete",
       "failed",
       "running"
      ],
      "optsKn": [
       "needs_review",
       "complete",
       "failed",
       "running"
      ],
      "correct": 0
     },
     {
      "q": "How many levels did the six-step migration plan have?",
      "qKn": "ಆರು-ಹಂತದ ವಲಸೆ ಯೋಜನೆಗೆ ಎಷ್ಟು ಹಂತಗಳಿದ್ದವು?",
      "opts": [
       "5",
       "6",
       "2",
       "3"
      ],
      "optsKn": [
       "5",
       "6",
       "2",
       "3"
      ],
      "correct": 0
     },
     {
      "q": "Was deploy allowed for the deployment worker?",
      "qKn": "ನಿಯೋಜನೆ ಕೆಲಸಗಾರನಿಗೆ deploy ಅನುಮತಿಸಲ್ಪಟ್ಟಿತೇ?",
      "opts": [
       "No, it may only read status",
       "Yes",
       "Only with approval",
       "It was never checked"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಅದು ಸ್ಥಿತಿ ಓದಬಹುದು ಮಾತ್ರ",
       "ಹೌದು",
       "ಅನುಮೋದನೆಯೊಂದಿಗೆ ಮಾತ್ರ",
       "ಅದನ್ನು ಎಂದೂ ಪರಿಶೀಲಿಸಲಿಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What speedup did the 120 s against 50 s example give?",
      "qKn": "120 s ವಿರುದ್ಧ 50 s ಉದಾಹರಣೆ ಯಾವ ವೇಗವರ್ಧನೆ ನೀಡಿತು?",
      "opts": [
       "2.4x",
       "1.2x",
       "3.0x",
       "0.4x"
      ],
      "optsKn": [
       "2.4x",
       "1.2x",
       "3.0x",
       "0.4x"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
