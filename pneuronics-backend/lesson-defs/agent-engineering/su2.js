module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215e3",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Supervisor / Orchestrator-Worker Pattern (Part 2 of 3) — Limits, Retries and Budgets",
 "titleKn": "Supervisor / Orchestrator-Worker ಮಾದರಿ (ಭಾಗ 2 / 3) — ಮಿತಿಗಳು, ಮರುಪ್ರಯತ್ನಗಳು ಮತ್ತು ಬಜೆಟ್‌ಗಳು",
 "desc": "Add sizing, a concurrency gate, cancellation, retries, a shared budget and conflict handling to a supervisor.",
 "descKn": "supervisor ಗೆ ಗಾತ್ರ, ಏಕಕಾಲಿಕ ದ್ವಾರ, ರದ್ದತಿ, ಮರುಪ್ರಯತ್ನ, ಹಂಚಿಕೆಯ ಬಜೆಟ್ ಮತ್ತು ಸಂಘರ್ಷ ನಿರ್ವಹಣೆ ಸೇರಿಸಿ.",
 "objectives": [
  "Size the worker pool.",
  "Limit concurrency.",
  "Cancel cooperatively.",
  "Retry the right errors.",
  "Share a budget safely."
 ],
 "objectivesKn": [
  "ಕೆಲಸಗಾರರ pool ಗಾತ್ರ ಇಡಿ.",
  "ಏಕಕಾಲಿಕತೆ ಮಿತಿಗೊಳಿಸಿ.",
  "ಸಹಕಾರದಿಂದ ರದ್ದುಗೊಳಿಸಿ.",
  "ಸರಿಯಾದ ದೋಷಗಳನ್ನು ಮರುಪ್ರಯತ್ನಿಸಿ.",
  "ಬಜೆಟ್ ಸುರಕ್ಷಿತವಾಗಿ ಹಂಚಿಕೊಳ್ಳಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Supervisor / Orchestrator-Worker Pattern (Part 2 of 3)",
    "textKn": "Supervisor / Orchestrator-Worker ಮಾದರಿ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: a worker count from a complexity score, a concurrency gate, a wait timeout against a cancel signal, retries of transient and permanent errors, a budget shared by ten threads, a conflict detector, partial success and a depth-limited tree. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the supervisor and worker pattern (a lead that plans, threaded workers, ordered results, concurrency limits, timeouts, retries, shared budgets, conflicts, a durable run, permissions and a dependency-aware plan), not the real software, and workers sleep or raise on purpose and return canned summaries, the model is a fake that returns fixed text, the plan is a fixed template and nothing is researched, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The LangGraph, CrewAI, rainbow-deployment and Anthropic research-system material in the lesson is conceptual and its figures were not checked here. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಸಂಕೀರ್ಣತೆ ಅಂಕದಿಂದ ಕೆಲಸಗಾರರ ಸಂಖ್ಯೆ, ಏಕಕಾಲಿಕ ದ್ವಾರ, cancel ಸಂಕೇತದ ವಿರುದ್ಧ ಕಾಯುವ timeout, ತಾತ್ಕಾಲಿಕ ಮತ್ತು ಶಾಶ್ವತ ದೋಷಗಳ ಮರುಪ್ರಯತ್ನ, ಹತ್ತು thread ಗಳು ಹಂಚಿಕೊಳ್ಳುವ ಬಜೆಟ್, ಸಂಘರ್ಷ ಪತ್ತೆಕಾರಕ, ಭಾಗಶಃ ಯಶಸ್ಸು ಮತ್ತು ಆಳ-ಮಿತಿಯ ಮರ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು supervisor ಮತ್ತು ಕೆಲಸಗಾರ ಮಾದರಿ (ಯೋಜಿಸುವ lead, thread ಮಾಡಿದ ಕೆಲಸಗಾರರು, ಕ್ರಮಬದ್ಧ ಫಲಿತಾಂಶಗಳು, ಏಕಕಾಲಿಕ ಮಿತಿಗಳು, timeout ಗಳು, ಮರುಪ್ರಯತ್ನಗಳು, ಹಂಚಿಕೆಯ ಬಜೆಟ್‌ಗಳು, ಸಂಘರ್ಷಗಳು, ಬಾಳಿಕೆ ಬರುವ ಓಟ, ಅನುಮತಿಗಳು ಮತ್ತು ಅವಲಂಬನೆ-ಅರಿವಿನ ಯೋಜನೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಕೆಲಸಗಾರರು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಮಲಗುತ್ತಾರೆ ಅಥವಾ ದೋಷ ಎತ್ತುತ್ತಾರೆ ಮತ್ತು ಸಿದ್ಧ ಸಾರಾಂಶ ನೀಡುತ್ತಾರೆ, ಮಾದರಿ ನಿಶ್ಚಿತ ಪಠ್ಯ ನೀಡುವ ನಕಲಿ, ಯೋಜನೆ ನಿಶ್ಚಿತ ಟೆಂಪ್ಲೇಟ್ ಮತ್ತು ಯಾವುದೂ ಸಂಶೋಧಿಸಲ್ಪಡುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ನೀಡಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. lesson ನ LangGraph, CrewAI, rainbow-deployment ಮತ್ತು Anthropic research-system ವಿಷಯ ಪರಿಕಲ್ಪನಾತ್ಮಕ ಮತ್ತು ಅದರ ಅಂಕಿಗಳನ್ನು ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Supervisor Needs Limits",
    "textKn": "Supervisor ಗೆ ಮಿತಿಗಳು ಬೇಕು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Sizing, Concurrency, Timeouts, Retries and Budgets",
    "headingKn": "ಗಾತ್ರ, ಏಕಕಾಲಿಕತೆ, Timeout, ಮರುಪ್ರಯತ್ನ ಮತ್ತು ಬಜೆಟ್",
    "bodyEn": "The simple supervisor of Part 1 always starts three workers, never gives up on a slow one, never retries and never counts what it spends. This part adds a control for each gap and tests it: a worker count chosen from a complexity score and capped by the pool, a semaphore that bounds how many workers run at once, a wait timeout set beside a cancel signal, a retry that treats transient and permanent errors differently, a budget that ten threads share under a lock, a detector for contradicting claims, a completion rule that knows which tasks are required, and a depth limit on a tree of supervisors.",
    "bodyKn": "Part 1 ರ ಸರಳ supervisor ಯಾವಾಗಲೂ ಮೂವರು ಕೆಲಸಗಾರರನ್ನು ಆರಂಭಿಸುತ್ತದೆ, ನಿಧಾನ ಕೆಲಸಗಾರನನ್ನು ಎಂದೂ ಬಿಡುವುದಿಲ್ಲ, ಮರುಪ್ರಯತ್ನಿಸುವುದಿಲ್ಲ ಮತ್ತು ತಾನು ಖರ್ಚು ಮಾಡಿದ್ದನ್ನು ಎಣಿಸುವುದಿಲ್ಲ. ಈ ಭಾಗವು ಪ್ರತಿ ಅಂತರಕ್ಕೆ ಒಂದು ನಿಯಂತ್ರಣ ಸೇರಿಸಿ ಪರೀಕ್ಷಿಸುತ್ತದೆ: ಸಂಕೀರ್ಣತೆ ಅಂಕದಿಂದ ಆರಿಸಿ pool ನಿಂದ ಮಿತಿಗೊಳಿಸಿದ ಕೆಲಸಗಾರರ ಸಂಖ್ಯೆ, ಒಮ್ಮೆಗೆ ಎಷ್ಟು ಕೆಲಸಗಾರರು ಓಡಬೇಕೆಂದು ಮಿತಿಗೊಳಿಸುವ semaphore, cancel ಸಂಕೇತದ ಪಕ್ಕದಲ್ಲಿ ಇಟ್ಟ ಕಾಯುವ timeout, ತಾತ್ಕಾಲಿಕ ಮತ್ತು ಶಾಶ್ವತ ದೋಷಗಳನ್ನು ಬೇರೆ ರೀತಿ ಪರಿಗಣಿಸುವ ಮರುಪ್ರಯತ್ನ, ಹತ್ತು thread ಗಳು ಲಾಕ್ ಅಡಿಯಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳುವ ಬಜೆಟ್, ವಿರೋಧಿ ಹೇಳಿಕೆಗಳ ಪತ್ತೆಕಾರಕ, ಯಾವ ಕೆಲಸಗಳು ಅಗತ್ಯ ಎಂದು ತಿಳಿದಿರುವ ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ನಿಯಮ, ಮತ್ತು supervisor ಮರದ ಮೇಲೆ ಆಳ ಮಿತಿ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Controls Around the Supervisor",
    "headingKn": "Supervisor ಸುತ್ತ ನಿಯಂತ್ರಣಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a supervisor controls how work is assigned, run and stopped</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">sizing</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">how many workers</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">limits</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">gate, timeout, cancel</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">retries</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">only if it can change</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">budget</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">one lock, no overspend</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a supervisor controls how work is assigned, run and stopped</text></svg>",
    "captionEn": "Sizing, limits, retries and budgets keep delegation from running away.",
    "captionKn": "ಗಾತ್ರ, ಮಿತಿಗಳು, ಮರುಪ್ರಯತ್ನಗಳು ಮತ್ತು ಬಜೆಟ್‌ಗಳು ನಿಯೋಜನೆ ಕೈಮೀರದಂತೆ ನೋಡಿಕೊಳ್ಳುತ್ತವೆ."
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
      "sizing",
      "scores 2, 10 and 19 mapped to worker counts"
     ],
     [
      "concurrency",
      "ten threads, three allowed at once"
     ],
     [
      "timeout",
      "join with a timeout against an Event cancel"
     ],
     [
      "retry",
      "transient success on attempt 3, permanent once"
     ],
     [
      "budget",
      "ten reservations of 1000 against 5000"
     ],
     [
      "conflicts",
      "a contradiction, a required task and tree depth"
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
    "filename": "su_2.py",
    "headingEn": "Sizing and retry",
    "headingKn": "ಗಾತ್ರ ಮತ್ತು ಮರುಪ್ರಯತ್ನ",
    "descEn": "choose_worker_count maps a score to a count, and execute_with_retry retries only the transient error with doubling delays and lets the permanent error through.",
    "descKn": "choose_worker_count ಅಂಕವನ್ನು ಸಂಖ್ಯೆಗೆ ಮ್ಯಾಪ್ ಮಾಡುತ್ತದೆ, ಮತ್ತು execute_with_retry ತಾತ್ಕಾಲಿಕ ದೋಷವನ್ನು ಮಾತ್ರ ದ್ವಿಗುಣಗೊಳ್ಳುವ ವಿಳಂಬಗಳೊಂದಿಗೆ ಮರುಪ್ರಯತ್ನಿಸುತ್ತದೆ ಮತ್ತು ಶಾಶ್ವತ ದೋಷ ಹಾದುಹೋಗಲು ಬಿಡುತ್ತದೆ.",
    "code": "class ComplexityEstimate:\n    subtopics: int\n    depth: int\n    uncertainty: int\n    evidence: int\n\n    @property\n    def score(self):\n        return self.subtopics + self.depth + self.uncertainty + self.evidence\n\n\ndef choose_worker_count(estimate, max_workers=8):\n    s = estimate.score\n    desired = 1 if s < 4 else 3 if s < 8 else 5 if s < 12 else 8\n    return min(desired, max_workers)\n\n\nclass TransientWorkerError(Exception):\n    pass\n\n\nclass PermanentWorkerError(Exception):\n    pass\n\n\ndef execute_with_retry(operation, max_attempts=3, base_delay=0.01):\n    attempts = 0\n    delays = []\n    for attempt in range(1, max_attempts + 1):\n        attempts += 1\n        try:\n            return operation(), attempts, delays\n        except PermanentWorkerError:\n            raise\n        except TransientWorkerError:\n            if attempt == max_attempts:\n                raise\n            delays.append(round(base_delay * (2 ** (attempt - 1)), 3))\n            time.sleep(delays[-1])"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "su_2.py",
    "headingEn": "Budget, conflicts and depth",
    "headingKn": "ಬಜೆಟ್, ಸಂಘರ್ಷಗಳು ಮತ್ತು ಆಳ",
    "descEn": "SharedBudget checks and updates under one lock, find_conflicts groups claims by subject and predicate, evaluate_completion checks only the required tasks and delegate stops at a maximum depth.",
    "descKn": "SharedBudget ಒಂದೇ ಲಾಕ್ ಅಡಿಯಲ್ಲಿ ಪರಿಶೀಲಿಸಿ ನವೀಕರಿಸುತ್ತದೆ, find_conflicts ಹೇಳಿಕೆಗಳನ್ನು ವಿಷಯ ಮತ್ತು predicate ಪ್ರಕಾರ ಗುಂಪು ಮಾಡುತ್ತದೆ, evaluate_completion ಅಗತ್ಯ ಕೆಲಸಗಳನ್ನು ಮಾತ್ರ ಪರಿಶೀಲಿಸುತ್ತದೆ ಮತ್ತು delegate ಗರಿಷ್ಠ ಆಳದಲ್ಲಿ ನಿಲ್ಲುತ್ತದೆ.",
    "code": "class SharedBudget:\n    def __init__(self, maximum):\n        self.maximum, self.used, self.lock = maximum, 0, threading.Lock()\n\n    def reserve(self, amount):\n        with self.lock:\n            if self.used + amount > self.maximum:\n                return False\n            self.used += amount\n            return True\n\n\ndef find_conflicts(claims):\n    grouped = {}\n    for c in claims:\n        grouped.setdefault((c[\"subject\"], c[\"predicate\"]), []).append(c)\n    return [{\"key\": k, \"values\": sorted({repr(x[\"value\"]) for x in g})} for k, g in grouped.items() if len({repr(x[\"value\"]) for x in g}) > 1]\n\n\ndef evaluate_completion(results, required):\n    done = {r[\"task_id\"] for r in results if r[\"status\"] == \"completed\"}\n    missing = sorted(set(required) - done)\n    return {\"complete\": not missing, \"missing_required_tasks\": missing}\n\n\ndef delegate(task, depth=0, max_depth=2):\n    if depth >= max_depth:\n        return 1\n    return 1 + sum(delegate(f\"{task} {a}\", depth + 1, max_depth) for a in (\"A\", \"B\"))"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "su_2.py",
    "headingEn": "The experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the six experiments in order and prints the real result of each.",
    "descKn": "main() ಆರು ಪ್ರಯೋಗಗಳನ್ನು ಕ್ರಮವಾಗಿ ಓಡಿಸಿ ಪ್ರತಿಯೊಂದರ ನಿಜ ಫಲಿತಾಂಶ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: how many workers a task deserves\")\n    cases = {\"simple question\": ComplexityEstimate(1, 1, 0, 0), \"three-topic review\": ComplexityEstimate(3, 3, 2, 2), \"huge comparison\": ComplexityEstimate(6, 5, 4, 4)}\n    for name, est in cases.items():\n        print(f\"{name}: score {est.score} -> {choose_worker_count(est)} workers, capped at 4 -> {choose_worker_count(est, max_workers=4)}\")\n    print(\"a simple question gets one worker, the three-topic review scores 10 and gets five and the huge comparison would get eight but is capped at four when the pool is small; the score is an invented heuristic with hand-picked bands, and a hard but strictly sequential task would still gain nothing from five workers.\")\n\n    section(\"2. Genuinely running: ten threads, three allowed at a time\")\n    gate, lock = threading.Semaphore(3), threading.Lock()\n    state = {\"now\": 0, \"max\": 0}\n\n    def job():\n        with gate:\n            with lock:\n                state[\"now\"] += 1\n                state[\"max\"] = max(state[\"max\"], state[\"now\"])\n            time.sleep(0.02)\n            with lock:\n                state[\"now\"] -= 1\n    ts = [threading.Thread(target=job) for _ in range(10)]\n    [t.start() for t in ts]\n    [t.join() for t in ts]\n    with ThreadPoolExecutor(max_workers=3) as pool:\n        mapped = list(pool.map(lambda q: f\"done {q}\", [\"a\", \"b\", \"c\", \"d\", \"e\"]))\n    print(\"most workers ever inside the gate at once:\", state[\"max\"], \"| pool results in submission order:\", mapped)\n    print(\"ten threads were created but never more than three ran the guarded section together, and the thread pool returned its five results in the order the questions were given; the limit protects an API quota or a connection pool and says nothing about how fast any one worker is.\")\n\n    section(\"3. Genuinely running: a wait timeout does not stop a worker, a cancel signal can\")\n    cancel = threading.Event()\n    stopped = []\n\n    def long_worker():\n        for _ in range(30):\n            if cancel.is_set():\n                stopped.append(\"cancelled\")\n                return\n            time.sleep(0.02)\n        stopped.append(\"finished\")\n    th = threading.Thread(target=long_worker)\n    th.start()\n    th.join(timeout=0.1)\n    alive_after_timeout = th.is_alive()\n    cancel.set()\n    th.join()\n    print(\"still running after join(timeout=0.1):\", alive_after_timeout, \"| after the cancel signal:\", stopped)\n    print(\"waiting for 0.1 s only gave up waiting and left the thread running, and the thread stopped only because its loop checked an Event; a worker that blocks inside a library call would not have seen the signal, so real timeouts also belong in the network client.\")\n\n    section(\"4. Genuinely running: retry the transient error, never the permanent one\")\n    calls = {\"n\": 0}\n\n    def flaky():\n        calls[\"n\"] += 1\n        if calls[\"n\"] < 3:\n            raise TransientWorkerError(\"temporary outage\")\n        return \"ok\"\n    result, attempts, delays = execute_with_retry(flaky)\n    print(\"transient: result\", result, \"| attempts\", attempts, \"| backoff delays\", delays)\n    bad = {\"n\": 0}\n\n    def forbidden():\n        bad[\"n\"] += 1\n        raise PermanentWorkerError(\"not authorised\")\n    try:\n        execute_with_retry(forbidden)\n    except PermanentWorkerError as e:\n        print(\"permanent:\", e, \"| attempts\", bad[\"n\"])\n    print(\"the transient failure succeeded on the third attempt after waiting 0.01 and 0.02 seconds, while the permanent one was tried exactly once, so retries only help when the failure can change; a retry of a worker with side effects also needs an idempotency key, which this lab does not model.\")\n\n    section(\"5. Genuinely running: ten threads reserving from a budget of five\")\n    budget = SharedBudget(5000)\n    granted = []\n\n    def reserve():\n        ok = budget.reserve(1000)\n        with lock:\n            granted.append(ok)\n    ts = [threading.Thread(target=reserve) for _ in range(10)]\n    [t.start() for t in ts]\n    [t.join() for t in ts]\n    print(\"granted:\", sum(granted), \"of 10 | refused:\", granted.count(False), \"| used:\", budget.used)\n    print(\"exactly five reservations of 1000 were granted and five were refused, and the total used is 5000, because the check and the update happen under one lock; without the lock two threads could both see room for the last reservation, and a lock does not coordinate separate processes.\")\n\n    section(\"6. Genuinely running: conflicts, partial success and a bounded tree\")\n    claims = [{\"subject\": \"GET /admin\", \"predicate\": \"requires_auth\", \"value\": True, \"source\": \"spec\"}, {\"subject\": \"GET /admin\", \"predicate\": \"requires_auth\", \"value\": False, \"source\": \"test\"},\n              {\"subject\": \"GET /health\", \"predicate\": \"requires_auth\", \"value\": False, \"source\": \"spec\"}]\n    print(\"conflicts:\", find_conflicts(claims))\n    results = [{\"task_id\": \"security\", \"status\": \"failed\"}, {\"task_id\": \"compliance\", \"status\": \"completed\"}, {\"task_id\": \"cost\", \"status\": \"completed\"}]\n    print(\"completion with security required:\", evaluate_completion(results, [\"security\", \"compliance\"]), \"| completion with only cost required:\", evaluate_completion(results, [\"cost\"]))\n    print(\"tree sizes at max depth 1, 2, 3 with two children each:\", [delegate(\"root\", max_depth=d) for d in (1, 2, 3)])\n    print(\"two sources disagree about one endpoint and the detector reports it with both values, a failed required task keeps the run incomplete while a failed optional task would not, and the depth limit keeps the tree at 3, 7 or 15 agents; a conflict may also come from different versions or environments, which the detector cannot know.\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: how many workers a task deserves ---\nsimple question: score 2 -> 1 workers, capped at 4 -> 1\nthree-topic review: score 10 -> 5 workers, capped at 4 -> 4\nhuge comparison: score 19 -> 8 workers, capped at 4 -> 4\na simple question gets one worker, the three-topic review scores 10 and gets five and the huge comparison would get eight but is capped at four when the pool is small; the score is an invented heuristic with hand-picked bands, and a hard but strictly sequential task would still gain nothing from five workers.\n\n--- 2. Genuinely running: ten threads, three allowed at a time ---\nmost workers ever inside the gate at once: 3 | pool results in submission order: ['done a', 'done b', 'done c', 'done d', 'done e']\nten threads were created but never more than three ran the guarded section together, and the thread pool returned its five results in the order the questions were given; the limit protects an API quota or a connection pool and says nothing about how fast any one worker is.\n\n--- 3. Genuinely running: a wait timeout does not stop a worker, a cancel signal can ---\nstill running after join(timeout=0.1): True | after the cancel signal: ['cancelled']\nwaiting for 0.1 s only gave up waiting and left the thread running, and the thread stopped only because its loop checked an Event; a worker that blocks inside a library call would not have seen the signal, so real timeouts also belong in the network client.\n\n--- 4. Genuinely running: retry the transient error, never the permanent one ---\ntransient: result ok | attempts 3 | backoff delays [0.01, 0.02]\npermanent: not authorised | attempts 1\nthe transient failure succeeded on the third attempt after waiting 0.01 and 0.02 seconds, while the permanent one was tried exactly once, so retries only help when the failure can change; a retry of a worker with side effects also needs an idempotency key, which this lab does not model.\n\n--- 5. Genuinely running: ten threads reserving from a budget of five ---\ngranted: 5 of 10 | refused: 5 | used: 5000\nexactly five reservations of 1000 were granted and five were refused, and the total used is 5000, because the check and the update happen under one lock; without the lock two threads could both see room for the last reservation, and a lock does not coordinate separate processes.\n\n--- 6. Genuinely running: conflicts, partial success and a bounded tree ---\nconflicts: [{'key': ('GET /admin', 'requires_auth'), 'values': ['False', 'True']}]\ncompletion with security required: {'complete': False, 'missing_required_tasks': ['security']} | completion with only cost required: {'complete': True, 'missing_required_tasks': []}\ntree sizes at max depth 1, 2, 3 with two children each: [3, 7, 15]\ntwo sources disagree about one endpoint and the detector reports it with both values, a failed required task keeps the run incomplete while a failed optional task would not, and the depth limit keeps the tree at 3, 7 or 15 agents; a conflict may also come from different versions or environments, which the detector cannot know."
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
    "headingEn": "Experiment 1: How many workers a task deserves",
    "headingKn": "ಪ್ರಯೋಗ 1: How many workers a task deserves",
    "bodyEn": "What it ran: How many workers a task deserves. What the lab concluded: a simple question gets one worker, the three-topic review scores 10 and gets five and the huge comparison would get eight but is capped at four when the pool is small; the score is an invented heuristic with hand-picked bands, and a hard but strictly sequential task would still gain nothing from five workers.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: How many workers a task deserves. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a simple question gets one worker, the three-topic review scores 10 and gets five and the huge comparison would get eight but is capped at four when the pool is small; the score is an invented heuristic with hand-picked bands, and a hard but strictly sequential task would still gain nothing from five workers."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: how many workers a task deserves ---\nsimple question: score 2 -> 1 workers, capped at 4 -> 1\nthree-topic review: score 10 -> 5 workers, capped at 4 -> 4\nhuge comparison: score 19 -> 8 workers, capped at 4 -> 4"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Ten threads, three allowed at a time",
    "headingKn": "ಪ್ರಯೋಗ 2: Ten threads, three allowed at a time",
    "bodyEn": "What it ran: Ten threads, three allowed at a time. What the lab concluded: ten threads were created but never more than three ran the guarded section together, and the thread pool returned its five results in the order the questions were given; the limit protects an API quota or a connection pool and says nothing about how fast any one worker is.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Ten threads, three allowed at a time. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): ten threads were created but never more than three ran the guarded section together, and the thread pool returned its five results in the order the questions were given; the limit protects an API quota or a connection pool and says nothing about how fast any one worker is."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: ten threads, three allowed at a time ---\nmost workers ever inside the gate at once: 3 | pool results in submission order: ['done a', 'done b', 'done c', 'done d', 'done e']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: A wait timeout does not stop a worker, a cancel signal can",
    "headingKn": "ಪ್ರಯೋಗ 3: A wait timeout does not stop a worker, a cancel signal can",
    "bodyEn": "What it ran: A wait timeout does not stop a worker, a cancel signal can. What the lab concluded: waiting for 0.1 s only gave up waiting and left the thread running, and the thread stopped only because its loop checked an Event; a worker that blocks inside a library call would not have seen the signal, so real timeouts also belong in the network client.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A wait timeout does not stop a worker, a cancel signal can. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): waiting for 0.1 s only gave up waiting and left the thread running, and the thread stopped only because its loop checked an Event; a worker that blocks inside a library call would not have seen the signal, so real timeouts also belong in the network client."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: a wait timeout does not stop a worker, a cancel signal can ---\nstill running after join(timeout=0.1): True | after the cancel signal: ['cancelled']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Retry the transient error, never the permanent one",
    "headingKn": "ಪ್ರಯೋಗ 4: Retry the transient error, never the permanent one",
    "bodyEn": "What it ran: Retry the transient error, never the permanent one. What the lab concluded: the transient failure succeeded on the third attempt after waiting 0.01 and 0.02 seconds, while the permanent one was tried exactly once, so retries only help when the failure can change; a retry of a worker with side effects also needs an idempotency key, which this lab does not model.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Retry the transient error, never the permanent one. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the transient failure succeeded on the third attempt after waiting 0.01 and 0.02 seconds, while the permanent one was tried exactly once, so retries only help when the failure can change; a retry of a worker with side effects also needs an idempotency key, which this lab does not model."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: retry the transient error, never the permanent one ---\ntransient: result ok | attempts 3 | backoff delays [0.01, 0.02]\npermanent: not authorised | attempts 1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Ten threads reserving from a budget of five",
    "headingKn": "ಪ್ರಯೋಗ 5: Ten threads reserving from a budget of five",
    "bodyEn": "What it ran: Ten threads reserving from a budget of five. What the lab concluded: exactly five reservations of 1000 were granted and five were refused, and the total used is 5000, because the check and the update happen under one lock; without the lock two threads could both see room for the last reservation, and a lock does not coordinate separate processes.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Ten threads reserving from a budget of five. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): exactly five reservations of 1000 were granted and five were refused, and the total used is 5000, because the check and the update happen under one lock; without the lock two threads could both see room for the last reservation, and a lock does not coordinate separate processes."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: ten threads reserving from a budget of five ---\ngranted: 5 of 10 | refused: 5 | used: 5000"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: Conflicts, partial success and a bounded tree",
    "headingKn": "ಪ್ರಯೋಗ 6: Conflicts, partial success and a bounded tree",
    "bodyEn": "What it ran: Conflicts, partial success and a bounded tree. What the lab concluded: two sources disagree about one endpoint and the detector reports it with both values, a failed required task keeps the run incomplete while a failed optional task would not, and the depth limit keeps the tree at 3, 7 or 15 agents; a conflict may also come from different versions or environments, which the detector cannot know.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Conflicts, partial success and a bounded tree. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): two sources disagree about one endpoint and the detector reports it with both values, a failed required task keeps the run incomplete while a failed optional task would not, and the depth limit keeps the tree at 3, 7 or 15 agents; a conflict may also come from different versions or environments, which the detector cannot know."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: conflicts, partial success and a bounded tree ---\nconflicts: [{'key': ('GET /admin', 'requires_auth'), 'values': ['False', 'True']}]\ncompletion with security required: {'complete': False, 'missing_required_tasks': ['security']} | completion with only cost required: {'complete': True, 'missing_required_tasks': []}\ntree sizes at max depth 1, 2, 3 with two children each: [3, 7, 15]"
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
    "headingEn": "Genuinely Found: Sizing, Gate and Timeout",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಗಾತ್ರ, ದ್ವಾರ ಮತ್ತು Timeout",
    "bodyEn": "Section 1: the scores were 2, 10 and 19, the worker counts 1, 5 and 8, and with a cap of 4 they became 1, 4 and 4. Section 2: at most 3 workers were inside the gate at once and the pool returned its results in submission order. Section 3: the thread was still running after a 0.1 s timeout and stopped with cancelled after the Event was set.",
    "bodyKn": "ವಿಭಾಗ 1: ಅಂಕಗಳು 2, 10 ಮತ್ತು 19, ಕೆಲಸಗಾರರ ಸಂಖ್ಯೆ 1, 5 ಮತ್ತು 8, ಮತ್ತು 4 ಮಿತಿಯೊಂದಿಗೆ ಅವು 1, 4 ಮತ್ತು 4 ಆದವು. ವಿಭಾಗ 2: ಒಮ್ಮೆಗೆ ಗರಿಷ್ಠ 3 ಕೆಲಸಗಾರರು ದ್ವಾರದೊಳಗೆ ಇದ್ದರು ಮತ್ತು pool ತನ್ನ ಫಲಿತಾಂಶಗಳನ್ನು ಸಲ್ಲಿಕೆ ಕ್ರಮದಲ್ಲಿ ನೀಡಿತು. ವಿಭಾಗ 3: 0.1 s timeout ನಂತರ thread ಇನ್ನೂ ಓಡುತ್ತಿತ್ತು ಮತ್ತು Event ಹೊಂದಿಸಿದ ನಂತರ cancelled ಯೊಂದಿಗೆ ನಿಂತಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Retries, Budget and Conflicts",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮರುಪ್ರಯತ್ನಗಳು, ಬಜೆಟ್ ಮತ್ತು ಸಂಘರ್ಷಗಳು",
    "bodyEn": "Section 4: the transient error succeeded on attempt 3 after delays of 0.01 and 0.02 s and the permanent error was tried once. Section 5: 5 of 10 reservations were granted, 5 refused and 5000 used. Section 6: the detector reported one conflict with the values False and True, completion was False with security missing and True when only cost was required, and the tree sizes were 3, 7 and 15.",
    "bodyKn": "ವಿಭಾಗ 4: ತಾತ್ಕಾಲಿಕ ದೋಷ 0.01 ಮತ್ತು 0.02 s ವಿಳಂಬಗಳ ನಂತರ ಪ್ರಯತ್ನ 3 ರಲ್ಲಿ ಯಶಸ್ವಿಯಾಯಿತು ಮತ್ತು ಶಾಶ್ವತ ದೋಷವನ್ನು ಒಮ್ಮೆ ಪ್ರಯತ್ನಿಸಲಾಯಿತು. ವಿಭಾಗ 5: 10 ರಲ್ಲಿ 5 ಕಾದಿರಿಸುವಿಕೆಗಳು ನೀಡಲ್ಪಟ್ಟವು, 5 ನಿರಾಕರಿಸಲ್ಪಟ್ಟವು ಮತ್ತು 5000 ಬಳಕೆಯಾಯಿತು. ವಿಭಾಗ 6: ಪತ್ತೆಕಾರಕ False ಮತ್ತು True ಮೌಲ್ಯಗಳ ಒಂದು ಸಂಘರ್ಷ ವರದಿ ಮಾಡಿತು, security ಕಾಣೆಯಾದಾಗ ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ False ಮತ್ತು cost ಮಾತ್ರ ಅಗತ್ಯವಾದಾಗ True, ಮತ್ತು ಮರದ ಗಾತ್ರಗಳು 3, 7 ಮತ್ತು 15."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Delegation without limits turns one slow or failing worker into a hung run or a runaway bill, and each control here removes one of those ways of going wrong.",
    "bodyKn": "ಮಿತಿಗಳಿಲ್ಲದ ನಿಯೋಜನೆ ಒಬ್ಬ ನಿಧಾನ ಅಥವಾ ವಿಫಲ ಕೆಲಸಗಾರನನ್ನು ನಿಂತ ಓಟ ಅಥವಾ ಕೈಮೀರಿದ ಬಿಲ್ ಆಗಿ ಬದಲಿಸುತ್ತದೆ, ಮತ್ತು ಇಲ್ಲಿನ ಪ್ರತಿ ನಿಯಂತ್ರಣ ಆ ತಪ್ಪುವ ದಾರಿಗಳಲ್ಲಿ ಒಂದನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a timeout stops the worker.\" The wait ended after 0.1 s and the thread kept running until it saw the cancel signal.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"timeout ಕೆಲಸಗಾರನನ್ನು ನಿಲ್ಲಿಸುತ್ತದೆ.\" ಕಾಯುವಿಕೆ 0.1 s ನಂತರ ಮುಗಿಯಿತು ಮತ್ತು thread cancel ಸಂಕೇತ ನೋಡುವವರೆಗೆ ಓಡುತ್ತಲೇ ಇತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Semaphore: a counter that limits concurrent entries. Cooperative cancellation: the worker checks a signal and stops itself. Transient error: one that may succeed on retry. Idempotency key: a stable id that prevents a repeated effect. Conflict: two claims that cannot both be true.",
    "bodyKn": "Semaphore: ಏಕಕಾಲಿಕ ಪ್ರವೇಶಗಳನ್ನು ಮಿತಿಗೊಳಿಸುವ ಕೌಂಟರ್. ಸಹಕಾರಿ ರದ್ದತಿ: ಕೆಲಸಗಾರ ಸಂಕೇತ ಪರಿಶೀಲಿಸಿ ತನ್ನನ್ನು ತಾನೇ ನಿಲ್ಲಿಸುವುದು. ತಾತ್ಕಾಲಿಕ ದೋಷ: ಮರುಪ್ರಯತ್ನದಲ್ಲಿ ಯಶಸ್ವಿಯಾಗಬಹುದಾದದ್ದು. Idempotency key: ಪುನರಾವರ್ತಿತ ಪರಿಣಾಮ ತಡೆಯುವ ಸ್ಥಿರ id. ಸಂಘರ್ಷ: ಎರಡೂ ನಿಜವಾಗಲಾರದ ಎರಡು ಹೇಳಿಕೆಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A score of 10 gave five workers and a pool cap of 4 reduced the large case to 4. 2) Never more than 3 workers ran together. 3) A wait timeout left the thread running until it was cancelled. 4) The permanent error was tried once. 5) Exactly five of ten reservations fit a budget of 5000.",
    "bodyKn": "1) 10 ರ ಅಂಕ ಐದು ಕೆಲಸಗಾರರನ್ನು ನೀಡಿತು ಮತ್ತು pool ಮಿತಿ 4 ದೊಡ್ಡ ಪ್ರಕರಣವನ್ನು 4 ಕ್ಕೆ ಇಳಿಸಿತು. 2) ಮೂರಕ್ಕಿಂತ ಹೆಚ್ಚು ಕೆಲಸಗಾರರು ಒಟ್ಟಿಗೆ ಎಂದೂ ಓಡಲಿಲ್ಲ. 3) ಕಾಯುವ timeout thread ಅನ್ನು ರದ್ದುಗೊಳಿಸುವವರೆಗೆ ಓಡುತ್ತಿರಲು ಬಿಟ್ಟಿತು. 4) ಶಾಶ್ವತ ದೋಷವನ್ನು ಒಮ್ಮೆ ಪ್ರಯತ್ನಿಸಲಾಯಿತು. 5) 5000 ಬಜೆಟ್‌ಗೆ ಹತ್ತು ಕಾದಿರಿಸುವಿಕೆಗಳಲ್ಲಿ ನಿಖರವಾಗಿ ಐದು ಹೊಂದಿದವು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many workers ran inside the gate at most?",
      "qKn": "ದ್ವಾರದೊಳಗೆ ಗರಿಷ್ಠ ಎಷ್ಟು ಕೆಲಸಗಾರರು ಓಡಿದರು?",
      "opts": [
       "3",
       "10",
       "5",
       "1"
      ],
      "optsKn": [
       "3",
       "10",
       "5",
       "1"
      ],
      "correct": 0
     },
     {
      "q": "Was the thread still running after join with a 0.1 s timeout?",
      "qKn": "0.1 s timeout ನ join ನಂತರ thread ಇನ್ನೂ ಓಡುತ್ತಿತ್ತೇ?",
      "opts": [
       "Yes",
       "No",
       "Only on Windows",
       "It was never started"
      ],
      "optsKn": [
       "ಹೌದು",
       "ಇಲ್ಲ",
       "Windows ನಲ್ಲಿ ಮಾತ್ರ",
       "ಅದನ್ನು ಎಂದೂ ಆರಂಭಿಸಲಿಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "How many attempts did the permanent error get?",
      "qKn": "ಶಾಶ್ವತ ದೋಷಕ್ಕೆ ಎಷ್ಟು ಪ್ರಯತ್ನಗಳು ಸಿಕ್ಕವು?",
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
      "q": "How many reservations of 1000 were granted from a budget of 5000?",
      "qKn": "5000 ಬಜೆಟ್‌ನಿಂದ 1000 ದ ಎಷ್ಟು ಕಾದಿರಿಸುವಿಕೆಗಳು ನೀಡಲ್ಪಟ್ಟವು?",
      "opts": [
       "5",
       "10",
       "4",
       "6"
      ],
      "optsKn": [
       "5",
       "10",
       "4",
       "6"
      ],
      "correct": 0
     },
     {
      "q": "What did the completion check say when the required security task had failed?",
      "qKn": "ಅಗತ್ಯ security ಕೆಲಸ ವಿಫಲವಾದಾಗ ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ಪರಿಶೀಲನೆ ಏನು ಹೇಳಿತು?",
      "opts": [
       "Not complete, security missing",
       "Complete",
       "Complete with a warning",
       "It raised an error"
      ],
      "optsKn": [
       "ಪೂರ್ಣವಲ್ಲ, security ಕಾಣೆ",
       "ಪೂರ್ಣ",
       "ಎಚ್ಚರಿಕೆಯೊಂದಿಗೆ ಪೂರ್ಣ",
       "ಅದು ದೋಷ ಎತ್ತಿತು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
