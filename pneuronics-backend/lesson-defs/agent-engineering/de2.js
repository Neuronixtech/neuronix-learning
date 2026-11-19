module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215b0",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Durable Execution for Long-Running Agents (Part 2 of 3) — Crash Points, Idempotency and Retries",
 "titleKn": "ದೀರ್ಘಕಾಲ ಓಡುವ Agents ಗೆ Durable Execution (ಭಾಗ 2 / 3) — Crash ಬಿಂದುಗಳು, Idempotency ಮತ್ತು ಮರುಪ್ರಯತ್ನ",
 "desc": "Inject crashes around an outside effect, fix the double charge with a key and bound the retries.",
 "descKn": "ಹೊರಗಿನ ಪರಿಣಾಮದ ಸುತ್ತ crash ಸೇರಿಸಿ, ಕೀಯಿಂದ ಎರಡು ಬಾರಿ ಶುಲ್ಕ ಸರಿಪಡಿಸಿ ಮತ್ತು ಮರುಪ್ರಯತ್ನ ಮಿತಿಗೊಳಿಸಿ.",
 "objectives": [
  "Inject crashes at three points.",
  "See a double charge.",
  "Use an idempotency key.",
  "Reconcile by key.",
  "Bound retries with backoff."
 ],
 "objectivesKn": [
  "ಮೂರು ಬಿಂದುಗಳಲ್ಲಿ crash ಸೇರಿಸಿ.",
  "ಎರಡು ಬಾರಿ ಶುಲ್ಕ ನೋಡಿ.",
  "idempotency ಕೀ ಬಳಸಿ.",
  "ಕೀ ಮೂಲಕ ಸಮನ್ವಯಗೊಳಿಸಿ.",
  "backoff ಜೊತೆ ಮರುಪ್ರಯತ್ನ ಮಿತಿಗೊಳಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Durable Execution for Long-Running Agents (Part 2 of 3)",
    "textKn": "ದೀರ್ಘಕಾಲ ಓಡುವ Agents ಗೆ Durable Execution (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: the three crash points around an outside effect, a mock payment service with and without an idempotency key, reconciliation by key, an exponential backoff schedule and bounded retries by error kind. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind durable execution for long-running agents (event logs, activity replay, input fingerprints, crash boundaries, idempotency keys, bounded retries, approvals, durable timers, persistent budgets and memory consolidation), not the real software, and the activities are tiny functions, the payment service and the deployment are in-memory mocks or counters, files live in a temporary directory, time is simulated and no real service or language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, and the lesson says its code is a reference implementation, so the labs are our own. Part 2 of the source lesson was cut off inside its section on retry policy, and the lab covers retries from Part 3 and from the policy list that Part 2 had started. The lesson March 2026 note about a Temporal and OpenAI Agents SDK milestone and its 35-minute reliability claim are curriculum statements, cited and not verified here. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಹೊರಗಿನ ಪರಿಣಾಮದ ಸುತ್ತ ಮೂರು crash ಬಿಂದುಗಳು, idempotency ಕೀ ಇದ್ದು ಮತ್ತು ಇಲ್ಲದ ಮಾಕ್ ಪಾವತಿ ಸೇವೆ, ಕೀ ಮೂಲಕ ಸಮನ್ವಯ, ಘಾತೀಯ backoff ವೇಳಾಪಟ್ಟಿ ಮತ್ತು ದೋಷ ಪ್ರಕಾರದ ಪ್ರಕಾರ ಮಿತಿಯುಳ್ಳ ಮರುಪ್ರಯತ್ನ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ದೀರ್ಘಕಾಲ ಓಡುವ agents ಗಾಗಿ durable execution (event ಲಾಗ್‌ಗಳು, activity ಮರುಪ್ರದರ್ಶನ, ಇನ್‌ಪುಟ್ ಫಿಂಗರ್‌ಪ್ರಿಂಟ್‌ಗಳು, crash ಗಡಿಗಳು, idempotency ಕೀಗಳು, ಮಿತಿಯುಳ್ಳ ಮರುಪ್ರಯತ್ನ, ಅನುಮೋದನೆಗಳು, durable ಟೈಮರ್‌ಗಳು, ನಿರಂತರ ಬಜೆಟ್‌ಗಳು ಮತ್ತು ಮೆಮೊರಿ ಬಲವರ್ಧನೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು activities ಚಿಕ್ಕ ಕಾರ್ಯಗಳು, ಪಾವತಿ ಸೇವೆ ಮತ್ತು deployment ಮೆಮೊರಿ ಮಾಕ್ ಅಥವಾ ಕೌಂಟರ್‌ಗಳು, ಫೈಲ್‌ಗಳು ತಾತ್ಕಾಲಿಕ ಡೈರೆಕ್ಟರಿಯಲ್ಲಿವೆ, ಸಮಯ ಅನುಕರಿತ ಮತ್ತು ಯಾವ ನಿಜ ಸೇವೆ ಅಥವಾ ಭಾಷಾ ಮಾದರಿಯೂ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ತನ್ನ ಕೋಡ್ ಉಲ್ಲೇಖ ಅನುಷ್ಠಾನ ಎನ್ನುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ. ಮೂಲ lesson ನ ಭಾಗ 2 ಮರುಪ್ರಯತ್ನ ನೀತಿ ವಿಭಾಗದ ಒಳಗೆ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಮತ್ತು ಲ್ಯಾಬ್ ಮರುಪ್ರಯತ್ನಗಳನ್ನು ಭಾಗ 3 ಮತ್ತು ಭಾಗ 2 ಆರಂಭಿಸಿದ ನೀತಿ ಪಟ್ಟಿಯಿಂದ ಒಳಗೊಳ್ಳುತ್ತದೆ. Temporal ಮತ್ತು OpenAI Agents SDK ಮೈಲಿಗಲ್ಲಿನ ಬಗ್ಗೆ lesson ನ 2026 ಮಾರ್ಚ್ ಟಿಪ್ಪಣಿ ಮತ್ತು ಅದರ 35-ನಿಮಿಷ ವಿಶ್ವಾಸಾರ್ಹತೆ ಹೇಳಿಕೆ ಪಠ್ಯಕ್ರಮ ಹೇಳಿಕೆಗಳು, ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Replay Is Not Enough for Outside Effects",
    "textKn": "ಹೊರಗಿನ ಪರಿಣಾಮಗಳಿಗೆ ಮರುಪ್ರದರ್ಶನ ಸಾಕಾಗುವುದಿಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Three Crash Points, One Dangerous One",
    "headingKn": "ಮೂರು Crash ಬಿಂದುಗಳು, ಒಂದು ಅಪಾಯಕಾರಿ",
    "bodyEn": "An activity that charges a customer has three places where a crash can land: before the call, after the call but before the completed record, or after the record. Replay handles the last. This part injects a crash at each point against a mock payment service, shows the double charge in the middle case, fixes it with an idempotency key, reconciles by asking the service about the key, computes an exponential backoff schedule and runs bounded retries for retryable and non-retryable errors. No real service is used.",
    "bodyKn": "ಗ್ರಾಹಕರಿಗೆ ಶುಲ್ಕ ವಿಧಿಸುವ activity ಗೆ crash ಇಳಿಯಬಹುದಾದ ಮೂರು ಸ್ಥಳಗಳಿವೆ: ಕರೆಗೆ ಮೊದಲು, ಕರೆಯ ನಂತರ ಆದರೆ ಪೂರ್ಣ ದಾಖಲೆಗೆ ಮೊದಲು, ಅಥವಾ ದಾಖಲೆಯ ನಂತರ. ಮರುಪ್ರದರ್ಶನ ಕೊನೆಯದನ್ನು ನಿಭಾಯಿಸುತ್ತದೆ. ಈ ಭಾಗ ಮಾಕ್ ಪಾವತಿ ಸೇವೆಯ ವಿರುದ್ಧ ಪ್ರತಿ ಬಿಂದುವಿನಲ್ಲಿ crash ಸೇರಿಸುತ್ತದೆ, ಮಧ್ಯದ ಪ್ರಕರಣದ ಎರಡು ಬಾರಿ ಶುಲ್ಕ ತೋರಿಸುತ್ತದೆ, idempotency ಕೀಯಿಂದ ಸರಿಪಡಿಸುತ್ತದೆ, ಕೀ ಬಗ್ಗೆ ಸೇವೆಯನ್ನು ಕೇಳಿ ಸಮನ್ವಯಗೊಳಿಸುತ್ತದೆ, ಘಾತೀಯ backoff ವೇಳಾಪಟ್ಟಿ ಲೆಕ್ಕ ಹಾಕುತ್ತದೆ ಮತ್ತು ಮರುಪ್ರಯತ್ನಿಸಬಹುದಾದ ಮತ್ತು ಮರುಪ್ರಯತ್ನಿಸಲಾಗದ ದೋಷಗಳಿಗೆ ಮಿತಿಯುಳ್ಳ ಮರುಪ್ರಯತ್ನ ಓಡಿಸುತ್ತದೆ. ನಿಜ ಸೇವೆ ಬಳಸಿಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Dangerous Crash Window",
    "headingKn": "ಅಪಾಯಕಾರಿ Crash ಕಿಟಕಿ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a crash between the effect and the record needs more than replay</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">started</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">recorded</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">charge</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">outside effect</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">crash</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">before completed</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">key</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">one charge</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a crash between the effect and the record needs more than replay</text></svg>",
    "captionEn": "Replay cannot know an outside effect already happened.",
    "captionKn": "ಹೊರಗಿನ ಪರಿಣಾಮ ಈಗಾಗಲೇ ಆಗಿದೆ ಎಂದು ಮರುಪ್ರದರ್ಶನ ತಿಳಿಯಲಾರದು."
   }
  },
  {
   "type": "table",
   "data": {
    "captionEn": "The crash points",
    "captionKn": "Crash ಬಿಂದುಗಳು",
    "rows": "Crash point|What the log says afterwards\nbefore the call|started only, nothing was charged\nafter the call, before completed|started only, but the customer was charged\nafter completed|completed, replay returns the result\nretry policy|d0 = 2 s, dmax = 60 s, doubling\nidempotency key|order_123_payment"
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
    "filename": "de_2.py",
    "headingEn": "Mock payment service, the charge activity and the retry helpers",
    "headingKn": "ಮಾಕ್ ಪಾವತಿ ಸೇವೆ, charge activity ಮತ್ತು ಮರುಪ್ರಯತ್ನ ಸಹಾಯಕಗಳು",
    "descEn": "MockPaymentService charges and remembers keys, charge_activity records started, calls the service and records completed with an optional crash, and backoff_schedule and run_with_retries model the retry policy.",
    "descKn": "MockPaymentService ಶುಲ್ಕ ವಿಧಿಸಿ ಕೀಗಳನ್ನು ನೆನಪಿಡುತ್ತದೆ, charge_activity started ದಾಖಲಿಸಿ ಸೇವೆ ಕರೆದು ಐಚ್ಛಿಕ crash ಜೊತೆ completed ದಾಖಲಿಸುತ್ತದೆ, ಮತ್ತು backoff_schedule ಹಾಗೂ run_with_retries ಮರುಪ್ರಯತ್ನ ನೀತಿ ಮಾದರಿ ಮಾಡುತ್ತವೆ.",
    "code": "class Crash(Exception):\n    pass\n\n\n@dataclass\nclass MockPaymentService:\n    use_keys: bool\n    charges: list = field(default_factory=list)\n    seen: dict = field(default_factory=dict)\n\n    def charge(self, customer, amount, key=None):\n        if self.use_keys and key is not None and key in self.seen:\n            return self.seen[key]\n        result = {\"customer\": customer, \"amount\": amount, \"status\": \"charged\", \"charge_no\": len(self.charges) + 1}\n        self.charges.append(result)\n        if self.use_keys and key is not None:\n            self.seen[key] = result\n        return result\n\n    def status(self, key):\n        return self.seen.get(key)\n\n\nclass WorkflowStore:\n    \"\"\"Minimal durable record: a dict of activity -> state.\"\"\"\n\n    def __init__(self):\n        self.state = {}\n\n\ndef charge_activity(store, svc, key, crash_point=None):\n    \"\"\"STARTED is recorded, the service is called, then COMPLETED is recorded. crash_point picks where a crash happens.\"\"\"\n    s = store.state.get(\"charge\")\n    if s and s[\"status\"] == \"completed\":\n        return s[\"result\"], \"replayed\"\n    store.state[\"charge\"] = {\"status\": \"started\"}\n    if crash_point == \"before_call\":\n        raise Crash(\"before call\")\n    result = svc.charge(\"customer_001\", 100, key if svc.use_keys else None)\n    if crash_point == \"after_call\":\n        raise Crash(\"after external success, before completion record\")\n    store.state[\"charge\"] = {\"status\": \"completed\", \"result\": result}\n    return result, \"executed\"\n\n\ndef run_twice(use_keys, crash_point):\n    store, svc = WorkflowStore(), MockPaymentService(use_keys)\n    try:\n        charge_activity(store, svc, \"order_123_payment\", crash_point)\n    except Crash:\n        pass\n    charge_activity(store, svc, \"order_123_payment\", None)\n    return len(svc.charges), store.state[\"charge\"][\"status\"]\n\n\ndef backoff_schedule(n, d0=2.0, dmax=60.0, mult=2):\n    return [min(dmax, d0 * mult ** i) for i in range(n)]\n\n\ndef run_with_retries(fail_times, max_attempts, error_kind=\"retryable\"):\n    attempts, delays_used = 0, []\n    sched = backoff_schedule(max_attempts)\n    while attempts < max_attempts:\n        attempts += 1\n        if attempts <= fail_times:\n            if error_kind == \"non_retryable\":\n                return {\"outcome\": \"stopped: non-retryable error\", \"attempts\": attempts, \"waited\": sum(delays_used)}\n            if attempts < max_attempts:\n                delays_used.append(sched[attempts - 1])\n            continue\n        return {\"outcome\": \"succeeded\", \"attempts\": attempts, \"waited\": sum(delays_used)}\n    return {\"outcome\": \"gave up after budget\", \"attempts\": attempts, \"waited\": sum(delays_used)}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "de_2.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() injects a crash at each point with and without a key, reconciles by key, prints the backoff schedule and runs bounded retries.",
    "descKn": "main() ಕೀ ಇದ್ದು ಮತ್ತು ಇಲ್ಲದೆ ಪ್ರತಿ ಬಿಂದುವಿನಲ್ಲಿ crash ಸೇರಿಸಿ, ಕೀ ಮೂಲಕ ಸಮನ್ವಯಗೊಳಿಸಿ, backoff ವೇಳಾಪಟ್ಟಿ ಮುದ್ರಿಸಿ ಮತ್ತು ಮಿತಿಯುಳ್ಳ ಮರುಪ್ರಯತ್ನ ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: where the crash lands decides what happens\")\n    for point in (None, \"before_call\", \"after_call\"):\n        n, status = run_twice(False, point)\n        print(f\"crash point {str(point):12} without a key: charges made {n} | final status {status}\")\n    print(\"a crash before the call and no crash both end with one charge, but a crash after the service charged and before the completion record leaves the history saying started, so the retry charges again and the customer pays twice; replay alone cannot know the first charge happened\")\n\n    section(\"2. Genuinely running: the same crash with an idempotency key\")\n    for point in (None, \"before_call\", \"after_call\"):\n        n, status = run_twice(True, point)\n        print(f\"crash point {str(point):12} with a key:    charges made {n} | final status {status}\")\n    print(\"the service remembers the key order_123_payment and returns the first result for the repeat request, so every case ends with one charge; the guarantee comes from the service honouring the key, and this mock keeps its memory in a dict that would not survive a restart\")\n\n    section(\"3. Genuinely running: reconciliation instead of blind retry\")\n    store, svc = WorkflowStore(), MockPaymentService(True)\n    try:\n        charge_activity(store, svc, \"order_123_payment\", \"after_call\")\n    except Crash:\n        pass\n    print(\"history says:\", store.state[\"charge\"][\"status\"], \"| ask the service by key:\", svc.status(\"order_123_payment\"))\n    found = svc.status(\"order_123_payment\")\n    if found:\n        store.state[\"charge\"] = {\"status\": \"completed\", \"result\": found}\n    print(\"after reconciliation the record says:\", store.state[\"charge\"][\"status\"], \"| charges made:\", len(svc.charges))\n    print(\"asking the service what happened to the keyed request lets the workflow record the real outcome and avoid a second request, and this only works because the lab service supports lookup by key\")\n\n    section(\"4. Genuinely computing: exponential backoff, d_n = min(dmax, d0 * 2^n)\")\n    print(\"delays for 8 retries with d0 = 2 s and dmax = 60 s:\", backoff_schedule(8))\n    print(\"the delay doubles from 2 seconds until it reaches the 60 second cap, so the schedule is 2, 4, 8, 16, 32, 60, 60, 60; real systems add random jitter so many workers do not retry together, which this schedule leaves out\")\n\n    section(\"5. Genuinely running: bounded retries and error kinds\")\n    for fail_times, budget, kind in ((2, 5, \"retryable\"), (5, 3, \"retryable\"), (1, 5, \"non_retryable\")):\n        print(f\"fails {fail_times} time(s), budget {budget}, {kind:13} -> {run_with_retries(fail_times, budget, kind)}\")\n    print(\"a transient failure is retried until it succeeds within the budget, a step that keeps failing stops when the budget runs out instead of looping forever, and a non-retryable error such as an invalid input stops at once without waiting; the waited figure is simulated seconds and no real sleep happens\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: where the crash lands decides what happens ---\ncrash point None         without a key: charges made 1 | final status completed\ncrash point before_call  without a key: charges made 1 | final status completed\ncrash point after_call   without a key: charges made 2 | final status completed\na crash before the call and no crash both end with one charge, but a crash after the service charged and before the completion record leaves the history saying started, so the retry charges again and the customer pays twice; replay alone cannot know the first charge happened\n\n--- 2. Genuinely running: the same crash with an idempotency key ---\ncrash point None         with a key:    charges made 1 | final status completed\ncrash point before_call  with a key:    charges made 1 | final status completed\ncrash point after_call   with a key:    charges made 1 | final status completed\nthe service remembers the key order_123_payment and returns the first result for the repeat request, so every case ends with one charge; the guarantee comes from the service honouring the key, and this mock keeps its memory in a dict that would not survive a restart\n\n--- 3. Genuinely running: reconciliation instead of blind retry ---\nhistory says: started | ask the service by key: {'customer': 'customer_001', 'amount': 100, 'status': 'charged', 'charge_no': 1}\nafter reconciliation the record says: completed | charges made: 1\nasking the service what happened to the keyed request lets the workflow record the real outcome and avoid a second request, and this only works because the lab service supports lookup by key\n\n--- 4. Genuinely computing: exponential backoff, d_n = min(dmax, d0 * 2^n) ---\ndelays for 8 retries with d0 = 2 s and dmax = 60 s: [2.0, 4.0, 8.0, 16.0, 32.0, 60.0, 60.0, 60.0]\nthe delay doubles from 2 seconds until it reaches the 60 second cap, so the schedule is 2, 4, 8, 16, 32, 60, 60, 60; real systems add random jitter so many workers do not retry together, which this schedule leaves out\n\n--- 5. Genuinely running: bounded retries and error kinds ---\nfails 2 time(s), budget 5, retryable     -> {'outcome': 'succeeded', 'attempts': 3, 'waited': 6.0}\nfails 5 time(s), budget 3, retryable     -> {'outcome': 'gave up after budget', 'attempts': 3, 'waited': 6.0}\nfails 1 time(s), budget 5, non_retryable -> {'outcome': 'stopped: non-retryable error', 'attempts': 1, 'waited': 0}\na transient failure is retried until it succeeds within the budget, a step that keeps failing stops when the budget runs out instead of looping forever, and a non-retryable error such as an invalid input stops at once without waiting; the waited figure is simulated seconds and no real sleep happens"
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
    "headingEn": "Experiment 1: Where the crash lands decides what happens",
    "headingKn": "ಪ್ರಯೋಗ 1: Where the crash lands decides what happens",
    "bodyEn": "What it ran: Where the crash lands decides what happens. What the lab concluded: a crash before the call and no crash both end with one charge, but a crash after the service charged and before the completion record leaves the history saying started, so the retry charges again and the customer pays twice; replay alone cannot know the first charge happened",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Where the crash lands decides what happens. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a crash before the call and no crash both end with one charge, but a crash after the service charged and before the completion record leaves the history saying started, so the retry charges again and the customer pays twice; replay alone cannot know the first charge happened"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: where the crash lands decides what happens ---\ncrash point None         without a key: charges made 1 | final status completed\ncrash point before_call  without a key: charges made 1 | final status completed\ncrash point after_call   without a key: charges made 2 | final status completed"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: The same crash with an idempotency key",
    "headingKn": "ಪ್ರಯೋಗ 2: The same crash with an idempotency key",
    "bodyEn": "What it ran: The same crash with an idempotency key. What the lab concluded: the service remembers the key order_123_payment and returns the first result for the repeat request, so every case ends with one charge; the guarantee comes from the service honouring the key, and this mock keeps its memory in a dict that would not survive a restart",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The same crash with an idempotency key. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the service remembers the key order_123_payment and returns the first result for the repeat request, so every case ends with one charge; the guarantee comes from the service honouring the key, and this mock keeps its memory in a dict that would not survive a restart"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: the same crash with an idempotency key ---\ncrash point None         with a key:    charges made 1 | final status completed\ncrash point before_call  with a key:    charges made 1 | final status completed\ncrash point after_call   with a key:    charges made 1 | final status completed"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Reconciliation instead of blind retry",
    "headingKn": "ಪ್ರಯೋಗ 3: Reconciliation instead of blind retry",
    "bodyEn": "What it ran: Reconciliation instead of blind retry. What the lab concluded: asking the service what happened to the keyed request lets the workflow record the real outcome and avoid a second request, and this only works because the lab service supports lookup by key",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Reconciliation instead of blind retry. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): asking the service what happened to the keyed request lets the workflow record the real outcome and avoid a second request, and this only works because the lab service supports lookup by key"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: reconciliation instead of blind retry ---\nhistory says: started | ask the service by key: {'customer': 'customer_001', 'amount': 100, 'status': 'charged', 'charge_no': 1}\nafter reconciliation the record says: completed | charges made: 1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Exponential backoff, d_n = min(dmax, d0 * 2^n)",
    "headingKn": "ಪ್ರಯೋಗ 4: Exponential backoff, d_n = min(dmax, d0 * 2^n)",
    "bodyEn": "What it ran: Exponential backoff, d_n = min(dmax, d0 * 2^n). What the lab concluded: the delay doubles from 2 seconds until it reaches the 60 second cap, so the schedule is 2, 4, 8, 16, 32, 60, 60, 60; real systems add random jitter so many workers do not retry together, which this schedule leaves out",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Exponential backoff, d_n = min(dmax, d0 * 2^n). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the delay doubles from 2 seconds until it reaches the 60 second cap, so the schedule is 2, 4, 8, 16, 32, 60, 60, 60; real systems add random jitter so many workers do not retry together, which this schedule leaves out"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely computing: exponential backoff, d_n = min(dmax, d0 * 2^n) ---\ndelays for 8 retries with d0 = 2 s and dmax = 60 s: [2.0, 4.0, 8.0, 16.0, 32.0, 60.0, 60.0, 60.0]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Bounded retries and error kinds",
    "headingKn": "ಪ್ರಯೋಗ 5: Bounded retries and error kinds",
    "bodyEn": "What it ran: Bounded retries and error kinds. What the lab concluded: a transient failure is retried until it succeeds within the budget, a step that keeps failing stops when the budget runs out instead of looping forever, and a non-retryable error such as an invalid input stops at once without waiting; the waited figure is simulated seconds and no real sleep happens",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Bounded retries and error kinds. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a transient failure is retried until it succeeds within the budget, a step that keeps failing stops when the budget runs out instead of looping forever, and a non-retryable error such as an invalid input stops at once without waiting; the waited figure is simulated seconds and no real sleep happens"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: bounded retries and error kinds ---\nfails 2 time(s), budget 5, retryable     -> {'outcome': 'succeeded', 'attempts': 3, 'waited': 6.0}\nfails 5 time(s), budget 3, retryable     -> {'outcome': 'gave up after budget', 'attempts': 3, 'waited': 6.0}\nfails 1 time(s), budget 5, non_retryable -> {'outcome': 'stopped: non-retryable error', 'attempts': 1, 'waited': 0}"
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
    "headingEn": "Genuinely Found: The Double Charge and the Key",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಎರಡು ಬಾರಿ ಶುಲ್ಕ ಮತ್ತು ಕೀ",
    "bodyEn": "Section 1 without a key: no crash and a crash before the call each made 1 charge, and a crash after the call made 2. Section 2 with the key order_123_payment: all three cases made 1 charge. Section 3: after the crash the history said started while the service held the charge for the key, and reconciliation recorded completed with 1 charge made.",
    "bodyKn": "ವಿಭಾಗ 1 ಕೀ ಇಲ್ಲದೆ: crash ಇಲ್ಲದೆ ಮತ್ತು ಕರೆಗೆ ಮೊದಲಿನ crash ತಲಾ 1 ಶುಲ್ಕ ಮಾಡಿದವು, ಮತ್ತು ಕರೆಯ ನಂತರದ crash 2 ಮಾಡಿತು. ವಿಭಾಗ 2 ಕೀ order_123_payment ನೊಂದಿಗೆ: ಮೂರೂ ಪ್ರಕರಣಗಳು 1 ಶುಲ್ಕ ಮಾಡಿದವು. ವಿಭಾಗ 3: crash ನಂತರ ಇತಿಹಾಸ started ಎಂದಿತ್ತು ಆದರೆ ಸೇವೆ ಕೀಗೆ ಶುಲ್ಕ ಹೊಂದಿತ್ತು, ಮತ್ತು ಸಮನ್ವಯ completed ದಾಖಲಿಸಿ 1 ಶುಲ್ಕ ಮಾಡಲ್ಪಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Backoff and Bounded Retries",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Backoff ಮತ್ತು ಮಿತಿಯುಳ್ಳ ಮರುಪ್ರಯತ್ನ",
    "bodyEn": "Section 4: eight retries gave delays 2, 4, 8, 16, 32, 60, 60 and 60 seconds. Section 5: two failures with a budget of 5 succeeded on attempt 3 after waiting 6 simulated seconds, five failures with a budget of 3 gave up after 3 attempts and 6 seconds, and a non-retryable error stopped after 1 attempt with no wait.",
    "bodyKn": "ವಿಭಾಗ 4: ಎಂಟು ಮರುಪ್ರಯತ್ನಗಳು 2, 4, 8, 16, 32, 60, 60 ಮತ್ತು 60 ಸೆಕೆಂಡ್ ವಿಳಂಬ ನೀಡಿದವು. ವಿಭಾಗ 5: ಬಜೆಟ್ 5 ಇರುವ ಎರಡು ವೈಫಲ್ಯಗಳು 6 ಅನುಕರಿತ ಸೆಕೆಂಡ್ ಕಾದ ನಂತರ ಪ್ರಯತ್ನ 3 ರಲ್ಲಿ ಯಶಸ್ವಿಯಾದವು, ಬಜೆಟ್ 3 ಇರುವ ಐದು ವೈಫಲ್ಯಗಳು 3 ಪ್ರಯತ್ನ ಮತ್ತು 6 ಸೆಕೆಂಡ್ ನಂತರ ಕೈಬಿಟ್ಟವು, ಮತ್ತು ಮರುಪ್ರಯತ್ನಿಸಲಾಗದ ದೋಷ ಕಾಯದೆ 1 ಪ್ರಯತ್ನದ ನಂತರ ನಿಂತಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "The history can only record what the engine saw, so an effect that happened just before a crash is invisible to replay, and only a duplicate-safe request or a lookup against the service can make the retry safe.",
    "bodyKn": "ಇತಿಹಾಸ ಎಂಜಿನ್ ಕಂಡದ್ದನ್ನು ಮಾತ್ರ ದಾಖಲಿಸಬಲ್ಲದು, ಆದ್ದರಿಂದ crash ಗೆ ಸ್ವಲ್ಪ ಮೊದಲು ಆದ ಪರಿಣಾಮ ಮರುಪ್ರದರ್ಶನಕ್ಕೆ ಕಾಣುವುದಿಲ್ಲ, ಮತ್ತು ನಕಲು-ಸುರಕ್ಷಿತ ವಿನಂತಿ ಅಥವಾ ಸೇವೆಯ ವಿರುದ್ಧ ಹುಡುಕಾಟ ಮಾತ್ರ ಮರುಪ್ರಯತ್ನವನ್ನು ಸುರಕ್ಷಿತ ಮಾಡಬಲ್ಲದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a durable log guarantees exactly-once effects.\" The crash after the call produced 2 charges without a key even though the log was intact.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"durable ಲಾಗ್ exactly-once ಪರಿಣಾಮಗಳನ್ನು ಖಾತರಿಪಡಿಸುತ್ತದೆ.\" ಲಾಗ್ ಹಾಗೆಯೇ ಇದ್ದರೂ ಕರೆಯ ನಂತರದ crash ಕೀ ಇಲ್ಲದೆ 2 ಶುಲ್ಕ ಉಂಟುಮಾಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Idempotency key: an identifier that makes a repeated request count once. Reconciliation: asking the outside system what happened. Backoff: increasing waits between retries. Non-retryable error: a failure that retrying cannot fix.",
    "bodyKn": "Idempotency key: ಪುನರಾವರ್ತಿತ ವಿನಂತಿಯನ್ನು ಒಮ್ಮೆ ಎಣಿಸುವ ಗುರುತು. Reconciliation: ಹೊರ ವ್ಯವಸ್ಥೆಗೆ ಏನಾಯಿತು ಎಂದು ಕೇಳುವುದು. Backoff: ಮರುಪ್ರಯತ್ನಗಳ ನಡುವೆ ಹೆಚ್ಚುತ್ತಿರುವ ಕಾಯುವಿಕೆ. Non-retryable error: ಮರುಪ್ರಯತ್ನ ಸರಿಪಡಿಸಲಾಗದ ವೈಫಲ್ಯ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A crash after the call and before the record caused 2 charges. 2) The key made it 1 in every case. 3) Reconciliation recorded the real outcome. 4) Backoff capped at 60 seconds. 5) A non-retryable error stopped with no wait.",
    "bodyKn": "1) ಕರೆಯ ನಂತರ ಮತ್ತು ದಾಖಲೆಗೆ ಮೊದಲಿನ crash 2 ಶುಲ್ಕ ಉಂಟುಮಾಡಿತು. 2) ಕೀ ಪ್ರತಿ ಪ್ರಕರಣದಲ್ಲಿ 1 ಮಾಡಿತು. 3) ಸಮನ್ವಯ ನಿಜ ಫಲಿತಾಂಶ ದಾಖಲಿಸಿತು. 4) Backoff 60 ಸೆಕೆಂಡ್‌ನಲ್ಲಿ ಮಿತಿಗೊಂಡಿತು. 5) ಮರುಪ್ರಯತ್ನಿಸಲಾಗದ ದೋಷ ಕಾಯದೆ ನಿಂತಿತು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B de_2.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B de_2.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B de_2.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B de_2.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many charges were made after a crash between the service call and the completed record, without a key?",
      "qKn": "ಕೀ ಇಲ್ಲದೆ ಸೇವೆ ಕರೆ ಮತ್ತು ಪೂರ್ಣ ದಾಖಲೆಯ ನಡುವಿನ crash ನಂತರ ಎಷ್ಟು ಶುಲ್ಕ ಮಾಡಲ್ಪಟ್ಟವು?",
      "opts": [
       "2",
       "1",
       "3",
       "0"
      ],
      "optsKn": [
       "2",
       "1",
       "3",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "How many charges with the idempotency key in the same case?",
      "qKn": "ಅದೇ ಪ್ರಕರಣದಲ್ಲಿ idempotency ಕೀ ಇದ್ದಾಗ ಎಷ್ಟು ಶುಲ್ಕ?",
      "opts": [
       "1",
       "2",
       "0",
       "3"
      ],
      "optsKn": [
       "1",
       "2",
       "0",
       "3"
      ],
      "correct": 0
     },
     {
      "q": "What was the sixth backoff delay with d0 2 and dmax 60?",
      "qKn": "d0 2 ಮತ್ತು dmax 60 ಇರುವ ಆರನೇ backoff ವಿಳಂಬ ಯಾವುದು?",
      "opts": [
       "60 seconds",
       "64 seconds",
       "32 seconds",
       "2 seconds"
      ],
      "optsKn": [
       "60 ಸೆಕೆಂಡ್",
       "64 ಸೆಕೆಂಡ್",
       "32 ಸೆಕೆಂಡ್",
       "2 ಸೆಕೆಂಡ್"
      ],
      "correct": 0
     },
     {
      "q": "What happened to five failures with a retry budget of 3?",
      "qKn": "ಮರುಪ್ರಯತ್ನ ಬಜೆಟ್ 3 ಇರುವ ಐದು ವೈಫಲ್ಯಗಳಿಗೆ ಏನಾಯಿತು?",
      "opts": [
       "It gave up after 3 attempts",
       "It succeeded",
       "It retried forever",
       "It stopped after 1 attempt"
      ],
      "optsKn": [
       "ಅದು 3 ಪ್ರಯತ್ನದ ನಂತರ ಕೈಬಿಟ್ಟಿತು",
       "ಅದು ಯಶಸ್ವಿಯಾಯಿತು",
       "ಅದು ಶಾಶ್ವತವಾಗಿ ಮರುಪ್ರಯತ್ನಿಸಿತು",
       "ಅದು 1 ಪ್ರಯತ್ನದ ನಂತರ ನಿಂತಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What did reconciliation in the lab depend on?",
      "qKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಸಮನ್ವಯ ಯಾವುದರ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿತ್ತು?",
      "opts": [
       "The service supporting lookup by key",
       "The log recording the charge",
       "A longer backoff",
       "A larger budget"
      ],
      "optsKn": [
       "ಕೀ ಮೂಲಕ ಹುಡುಕಾಟ ಬೆಂಬಲಿಸುವ ಸೇವೆ",
       "ಲಾಗ್ ಶುಲ್ಕ ದಾಖಲಿಸುವುದು",
       "ಉದ್ದ backoff",
       "ದೊಡ್ಡ ಬಜೆಟ್"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
