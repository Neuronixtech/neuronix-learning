module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215b0",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Durable Execution for Long-Running Agents (Part 3 of 3) — Approvals, Timers and Budgets",
 "titleKn": "ದೀರ್ಘಕಾಲ ಓಡುವ Agents ಗೆ Durable Execution (ಭಾಗ 3 / 3) — ಅನುಮೋದನೆಗಳು, ಟೈಮರ್‌ಗಳು ಮತ್ತು ಬಜೆಟ್‌ಗಳು",
 "desc": "Store approvals, timers and a budget so they survive a restart and test the release workflow around them.",
 "descKn": "ಅನುಮೋದನೆಗಳು, ಟೈಮರ್‌ಗಳು ಮತ್ತು ಬಜೆಟ್ ಅನ್ನು ಮರುಪ್ರಾರಂಭ ಉಳಿಯುವಂತೆ ಸಂಗ್ರಹಿಸಿ ಮತ್ತು ಅವುಗಳ ಸುತ್ತ release workflow ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Store an approval bound to a release.",
  "Fire durable timers.",
  "Persist a budget and kill switch.",
  "Keep memory apart from the log.",
  "Run unit tests."
 ],
 "objectivesKn": [
  "release ಗೆ ಬದ್ಧ ಅನುಮೋದನೆ ಸಂಗ್ರಹಿಸಿ.",
  "durable ಟೈಮರ್ ಉರಿಸಿ.",
  "ಬಜೆಟ್ ಮತ್ತು kill switch ನಿರಂತರವಾಗಿಸಿ.",
  "ಮೆಮೊರಿಯನ್ನು ಲಾಗ್‌ನಿಂದ ಬೇರ್ಪಡಿಸಿ.",
  "unit ಪರೀಕ್ಷೆ ಓಡಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Durable Execution for Long-Running Agents (Part 3 of 3)",
    "textKn": "ದೀರ್ಘಕಾಲ ಓಡುವ Agents ಗೆ Durable Execution (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: an approval store that survives a restart and is bound to one release, a rejection path, durable timers on a simulated clock, a persistent budget with a kill switch, memory consolidation in two batch sizes and five unit tests that are run. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind durable execution for long-running agents (event logs, activity replay, input fingerprints, crash boundaries, idempotency keys, bounded retries, approvals, durable timers, persistent budgets and memory consolidation), not the real software, and the activities are tiny functions, the payment service and the deployment are in-memory mocks or counters, files live in a temporary directory, time is simulated and no real service or language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, and the lesson says its code is a reference implementation, so the labs are our own. Part 2 of the source lesson was cut off inside its section on retry policy, and the lab covers retries from Part 3 and from the policy list that Part 2 had started. The lesson March 2026 note about a Temporal and OpenAI Agents SDK milestone and its 35-minute reliability claim are curriculum statements, cited and not verified here. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಮರುಪ್ರಾರಂಭ ಉಳಿಯುವ ಮತ್ತು ಒಂದು release ಗೆ ಬದ್ಧವಾದ ಅನುಮೋದನೆ ಸಂಗ್ರಹ, ನಿರಾಕರಣೆ ಮಾರ್ಗ, ಅನುಕರಿತ ಗಡಿಯಾರದಲ್ಲಿ durable ಟೈಮರ್‌ಗಳು, kill switch ಇರುವ ನಿರಂತರ ಬಜೆಟ್, ಎರಡು batch ಗಾತ್ರಗಳಲ್ಲಿ ಮೆಮೊರಿ ಬಲವರ್ಧನೆ ಮತ್ತು ಓಡಿಸಿದ ಐದು unit ಪರೀಕ್ಷೆಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ದೀರ್ಘಕಾಲ ಓಡುವ agents ಗಾಗಿ durable execution (event ಲಾಗ್‌ಗಳು, activity ಮರುಪ್ರದರ್ಶನ, ಇನ್‌ಪುಟ್ ಫಿಂಗರ್‌ಪ್ರಿಂಟ್‌ಗಳು, crash ಗಡಿಗಳು, idempotency ಕೀಗಳು, ಮಿತಿಯುಳ್ಳ ಮರುಪ್ರಯತ್ನ, ಅನುಮೋದನೆಗಳು, durable ಟೈಮರ್‌ಗಳು, ನಿರಂತರ ಬಜೆಟ್‌ಗಳು ಮತ್ತು ಮೆಮೊರಿ ಬಲವರ್ಧನೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು activities ಚಿಕ್ಕ ಕಾರ್ಯಗಳು, ಪಾವತಿ ಸೇವೆ ಮತ್ತು deployment ಮೆಮೊರಿ ಮಾಕ್ ಅಥವಾ ಕೌಂಟರ್‌ಗಳು, ಫೈಲ್‌ಗಳು ತಾತ್ಕಾಲಿಕ ಡೈರೆಕ್ಟರಿಯಲ್ಲಿವೆ, ಸಮಯ ಅನುಕರಿತ ಮತ್ತು ಯಾವ ನಿಜ ಸೇವೆ ಅಥವಾ ಭಾಷಾ ಮಾದರಿಯೂ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ತನ್ನ ಕೋಡ್ ಉಲ್ಲೇಖ ಅನುಷ್ಠಾನ ಎನ್ನುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ. ಮೂಲ lesson ನ ಭಾಗ 2 ಮರುಪ್ರಯತ್ನ ನೀತಿ ವಿಭಾಗದ ಒಳಗೆ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಮತ್ತು ಲ್ಯಾಬ್ ಮರುಪ್ರಯತ್ನಗಳನ್ನು ಭಾಗ 3 ಮತ್ತು ಭಾಗ 2 ಆರಂಭಿಸಿದ ನೀತಿ ಪಟ್ಟಿಯಿಂದ ಒಳಗೊಳ್ಳುತ್ತದೆ. Temporal ಮತ್ತು OpenAI Agents SDK ಮೈಲಿಗಲ್ಲಿನ ಬಗ್ಗೆ lesson ನ 2026 ಮಾರ್ಚ್ ಟಿಪ್ಪಣಿ ಮತ್ತು ಅದರ 35-ನಿಮಿಷ ವಿಶ್ವಾಸಾರ್ಹತೆ ಹೇಳಿಕೆ ಪಠ್ಯಕ್ರಮ ಹೇಳಿಕೆಗಳು, ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "State That Has to Outlive the Process",
    "textKn": "ಪ್ರಕ್ರಿಯೆಗಿಂತ ಹೆಚ್ಚು ಕಾಲ ಉಳಿಯಬೇಕಾದ ಸ್ಥಿತಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Approvals, Timers, Budgets and Memory",
    "headingKn": "ಅನುಮೋದನೆಗಳು, ಟೈಮರ್‌ಗಳು, ಬಜೆಟ್‌ಗಳು ಮತ್ತು ಮೆಮೊರಿ",
    "bodyEn": "A release agent may wait hours for a human, sleep before a retry and spend a limited number of model calls, and a restart must not lose any of that. This part stores an approval request bound to the release it names, schedules timers by wake-up time, keeps a budget and its kill switch in a file and separates a consolidated memory from the authoritative log. It runs a release workflow that restarts between approval and deployment and five unit tests. Files are temporary and time is simulated.",
    "bodyKn": "release agent ಮಾನವನಿಗಾಗಿ ಗಂಟೆಗಳ ಕಾಲ ಕಾಯಬಹುದು, ಮರುಪ್ರಯತ್ನಕ್ಕೆ ಮೊದಲು ನಿದ್ರಿಸಬಹುದು ಮತ್ತು ಸೀಮಿತ ಸಂಖ್ಯೆಯ ಮಾದರಿ ಕರೆಗಳನ್ನು ಖರ್ಚು ಮಾಡಬಹುದು, ಮತ್ತು ಮರುಪ್ರಾರಂಭ ಅವುಗಳಲ್ಲಿ ಯಾವುದನ್ನೂ ಕಳೆದುಕೊಳ್ಳಬಾರದು. ಈ ಭಾಗ ಅದು ಹೆಸರಿಸುವ release ಗೆ ಬದ್ಧವಾದ ಅನುಮೋದನೆ ವಿನಂತಿ ಸಂಗ್ರಹಿಸುತ್ತದೆ, ಟೈಮರ್‌ಗಳನ್ನು ಎಚ್ಚರದ ಸಮಯದಿಂದ ನಿಗದಿಪಡಿಸುತ್ತದೆ, ಬಜೆಟ್ ಮತ್ತು ಅದರ kill switch ಅನ್ನು ಫೈಲ್‌ನಲ್ಲಿ ಇಡುತ್ತದೆ ಮತ್ತು ಬಲವರ್ಧಿತ ಮೆಮೊರಿಯನ್ನು ಪ್ರಾಮಾಣಿಕ ಲಾಗ್‌ನಿಂದ ಬೇರ್ಪಡಿಸುತ್ತದೆ. ಅನುಮೋದನೆ ಮತ್ತು deployment ನಡುವೆ ಮರುಪ್ರಾರಂಭವಾಗುವ release workflow ಮತ್ತು ಐದು unit ಪರೀಕ್ಷೆ ಓಡಿಸುತ್ತದೆ. ಫೈಲ್‌ಗಳು ತಾತ್ಕಾಲಿಕ ಮತ್ತು ಸಮಯ ಅನುಕರಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Production Pieces Around the Engine",
    "headingKn": "ಎಂಜಿನ್ ಸುತ್ತ ಉತ್ಪಾದನಾ ಭಾಗಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">state that must survive a restart lives on disk</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">approval</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">stored, bound</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">timer</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">wake_at on disk</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">budget</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">survives restart</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">memory</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">log stays truth</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">state that must survive a restart lives on disk</text></svg>",
    "captionEn": "Approvals, timers and budgets are stored, not held in memory.",
    "captionKn": "ಅನುಮೋದನೆಗಳು, ಟೈಮರ್‌ಗಳು ಮತ್ತು ಬಜೆಟ್‌ಗಳನ್ನು ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ, ಮೆಮೊರಿಯಲ್ಲಿ ಹಿಡಿಯಲ್ಲ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "What is stored",
    "headingKn": "ಏನು ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ",
    "headers": [
     "Store",
     "Contents"
    ],
    "rows": [
     [
      "ApprovalStore",
      "request id, thread, action, resource id and status"
     ],
     [
      "TimerStore",
      "timer id, wake_at and status"
     ],
     [
      "DurableBudget",
      "LLM calls used, limit and kill switch flag"
     ],
     [
      "MemoryManager",
      "recent events and summaries, never the source of truth"
     ],
     [
      "workflow history",
      "activity results replayed after a restart"
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
    "filename": "de_3.py",
    "headingEn": "Stores, budget, memory and the release workflow",
    "headingKn": "ಸಂಗ್ರಹಗಳು, ಬಜೆಟ್, ಮೆಮೊರಿ ಮತ್ತು release workflow",
    "descEn": "ApprovalStore, TimerStore and DurableBudget keep state in JSON files, MemoryManager folds old events and release_workflow replays activities and reads the approval record.",
    "descKn": "ApprovalStore, TimerStore ಮತ್ತು DurableBudget ಸ್ಥಿತಿಯನ್ನು JSON ಫೈಲ್‌ಗಳಲ್ಲಿ ಇಡುತ್ತವೆ, MemoryManager ಹಳೆಯ events ಮಡಚುತ್ತದೆ ಮತ್ತು release_workflow activities ಮರುಪ್ರದರ್ಶಿಸಿ ಅನುಮೋದನೆ ದಾಖಲೆ ಓದುತ್ತದೆ.",
    "code": "class JsonStore:\r\n    def __init__(self, path):\r\n        self.path = Path(path)\r\n        self.data = json.loads(self.path.read_text(encoding=\"utf-8\")) if self.path.exists() else {}\r\n\r\n    def save(self):\r\n        self.path.write_text(json.dumps(self.data, indent=2), encoding=\"utf-8\")\r\n\r\n\r\nclass ApprovalStore(JsonStore):\r\n    def request(self, request_id, thread_id, action, resource_id):\r\n        if request_id in self.data:\r\n            raise ValueError(\"approval request already exists\")\r\n        self.data[request_id] = {\"thread_id\": thread_id, \"action\": action, \"resource_id\": resource_id, \"status\": \"pending\"}\r\n        self.save()\r\n\r\n    def decide(self, request_id, approved):\r\n        self.data[request_id][\"status\"] = \"approved\" if approved else \"rejected\"\r\n        self.save()\r\n\r\n    def get(self, request_id):\r\n        return self.data.get(request_id)\r\n\r\n\r\nclass TimerStore(JsonStore):\r\n    def schedule(self, timer_id, wake_at):\r\n        self.data[timer_id] = {\"wake_at\": wake_at, \"status\": \"scheduled\"}\r\n        self.save()\r\n\r\n    def due(self, now):\r\n        return sorted(t for t, v in self.data.items() if v[\"status\"] == \"scheduled\" and v[\"wake_at\"] <= now)\r\n\r\n    def fire(self, timer_id):\r\n        self.data[timer_id][\"status\"] = \"fired\"\r\n        self.save()\r\n\r\n\r\nclass BudgetExceeded(Exception):\r\n    pass\r\n\r\n\r\nclass DurableBudget(JsonStore):\r\n    def __init__(self, path, max_llm_calls=3):\r\n        super().__init__(path)\r\n        self.data.setdefault(\"llm_calls\", 0)\r\n        self.data.setdefault(\"limit\", max_llm_calls)\r\n        self.data.setdefault(\"killed\", False)\r\n\r\n    def consume(self):\r\n        if self.data[\"killed\"]:\r\n            raise BudgetExceeded(\"kill switch active\")\r\n        if self.data[\"llm_calls\"] >= self.data[\"limit\"]:\r\n            self.data[\"killed\"] = True\r\n            self.save()\r\n            raise BudgetExceeded(\"LLM call budget exceeded\")\r\n        self.data[\"llm_calls\"] += 1\r\n        self.save()\r\n\r\n\r\nclass MemoryManager:\r\n    def __init__(self, recent_limit=8, batch=1):\r\n        self.recent_limit, self.batch, self.episodic, self.semantic = recent_limit, batch, [], []\r\n\r\n    def add_event(self, event):\r\n        self.episodic.append(event)\r\n        if len(self.episodic) >= self.recent_limit + self.batch:\r\n            older, self.episodic = self.episodic[:-self.recent_limit], self.episodic[-self.recent_limit:]\r\n            self.semantic.append({\"event_count\": len(older), \"first\": older[0], \"last\": older[-1]})\r\n\r\n\r\ndef release_workflow(approvals, history, counters, release_id, thread=\"deploy_001\"):\r\n    \"\"\"Activities replay from `history` (a dict standing in for the event log); approval state comes from the approval store.\"\"\"\r\n    def act(name, fn):\r\n        if name in history:\r\n            return history[name]\r\n        counters[name] = counters.get(name, 0) + 1\r\n        history[name] = fn()\r\n        return history[name]\r\n    analysis = act(\"analyze_release\", lambda: {\"release_id\": release_id, \"risk\": \"medium\"})\r\n    tests = act(\"run_release_tests\", lambda: {\"release_id\": release_id, \"passed\": True})\r\n    if not tests[\"passed\"]:\r\n        return {\"status\": \"stopped: tests failed\"}\r\n    request_id = f\"approval:{thread}:{release_id}\"\r\n    approval = approvals.get(request_id)\r\n    if approval is None:\r\n        approvals.request(request_id, thread, \"deploy_release\", release_id)\r\n        return {\"status\": \"waiting_for_approval\"}\r\n    if approval[\"resource_id\"] != release_id:\r\n        raise ValueError(\"approval does not match release\")\r\n    if approval[\"status\"] == \"pending\":\r\n        return {\"status\": \"waiting_for_approval\"}\r\n    if approval[\"status\"] == \"rejected\":\r\n        return {\"status\": \"cancelled\"}\r\n    act(\"deploy_release\", lambda: {\"release_id\": release_id, \"deployment_status\": \"simulated\"})\r\n    return {\"status\": \"completed\"}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "de_3.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the approval flow across a restart, a rejection, timers, a persistent budget, two memory settings and the unit tests.",
    "descKn": "main() ಮರುಪ್ರಾರಂಭದಾದ್ಯಂತ ಅನುಮೋದನೆ ಹರಿವು, ನಿರಾಕರಣೆ, ಟೈಮರ್‌ಗಳು, ನಿರಂತರ ಬಜೆಟ್, ಎರಡು ಮೆಮೊರಿ ಸೆಟ್ಟಿಂಗ್ ಮತ್ತು unit ಪರೀಕ್ಷೆಗಳನ್ನು ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    with tempfile.TemporaryDirectory() as d:\r\n        section(\"1. Genuinely running: an approval that survives a restart and is bound to its release\")\r\n        ap = Path(d) / \"approvals.json\"\r\n        history, counters = {}, {}\r\n        print(\"first run:\", release_workflow(ApprovalStore(ap), history, counters, \"release_001\"))\r\n        print(\"run before any decision:\", release_workflow(ApprovalStore(ap), history, counters, \"release_001\"))\r\n        ApprovalStore(ap).decide(\"approval:deploy_001:release_001\", True)\r\n        print(\"after approval, new store object:\", release_workflow(ApprovalStore(ap), history, counters, \"release_001\"))\r\n        print(\"activity bodies run:\", counters)\r\n        print(\"the waiting state and the decision are stored in a file, so a brand-new store object after a restart still sees the approval, and the earlier analysis and test activities were replayed from history rather than run again; the approval id contains the release id, so an approval for another release does not authorise this one\")\r\n\r\n        section(\"2. Genuinely running: a rejection stops the protected action\")\r\n        ap2 = Path(d) / \"approvals2.json\"\r\n        h2, c2 = {}, {}\r\n        release_workflow(ApprovalStore(ap2), h2, c2, \"release_002\")\r\n        ApprovalStore(ap2).decide(\"approval:deploy_001:release_002\", False)\r\n        print(release_workflow(ApprovalStore(ap2), h2, c2, \"release_002\"), \"| deploy ran:\", \"deploy_release\" in c2)\r\n        print(\"a rejected request returns cancelled and the deployment activity never runs\")\r\n\r\n        section(\"3. Genuinely running: durable timers and a simulated clock\")\r\n        ts = TimerStore(Path(d) / \"timers.json\")\r\n        ts.schedule(\"retry_001\", 600)\r\n        ts.schedule(\"expire_approval\", 86400)\r\n        for now in (0, 599, 600, 86400):\r\n            due = TimerStore(ts.path).due(now)\r\n            for t in due:\r\n                ts.fire(t)\r\n            print(f\"clock {now:6d}: timers due {due}\")\r\n        print(\"the wake-up times are stored, so a restarted scheduler that reloads the file fires each timer once when the simulated clock reaches it, and a plain sleep would have lost the remaining delay on a crash; the clock here is a number the lab chooses\")\r\n\r\n        section(\"4. Genuinely running: a budget that a restart cannot reset\")\r\n        bp = Path(d) / \"budget.json\"\r\n        outcomes = []\r\n        for i in range(5):\r\n            try:\r\n                DurableBudget(bp, 3).consume()\r\n                outcomes.append(\"ok\")\r\n            except BudgetExceeded as e:\r\n                outcomes.append(str(e))\r\n        print(outcomes)\r\n        print(\"each call creates a new budget object from the file, standing in for a restarted worker, and the fourth call hits the limit and trips the kill switch while the fifth is refused because the switch is stored; an in-memory counter would have started again at zero each time\")\r\n\r\n        section(\"5. Genuinely running: memory consolidation next to the authoritative log\")\r\n        for batch in (1, 16):\r\n            mm = MemoryManager(8, batch)\r\n            log = []\r\n            for i in range(24):\r\n                ev = {\"step\": i, \"note\": f\"event {i}\"}\r\n                log.append(ev)\r\n                mm.add_event(ev)\r\n            print(f\"consolidate every {batch:2d} overflow(s): authoritative log {len(log)} | recent kept in full {len(mm.episodic)} | summaries {len(mm.semantic)} | events in the first summary {mm.semantic[0]['event_count']}\")\r\n        print(\"folding on every overflow, which is how the lesson class is written, turns 24 events into 16 one-event summaries, while folding in a batch of 16 gives the single summary of 16 older events that the lesson diagram describes; either way the summary keeps only a count and the first and last event and the detail survives only in the log, so recovery must read the log and never the summary, and this grouping does not compress events into prose\")\r\n\r\n        section(\"6. Genuinely running: the five unit tests\")\r\n        stream = io.StringIO()\r\n        res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(DurableTests))\r\n        print(f\"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}\")\r\n        print(\"the tests cover approval persistence, duplicate requests, budget persistence with the kill switch, timers that are not due early and an approval that must match its release; they test this sketch and not a production engine\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: an approval that survives a restart and is bound to its release ---\nfirst run: {'status': 'waiting_for_approval'}\nrun before any decision: {'status': 'waiting_for_approval'}\nafter approval, new store object: {'status': 'completed'}\nactivity bodies run: {'analyze_release': 1, 'run_release_tests': 1, 'deploy_release': 1}\nthe waiting state and the decision are stored in a file, so a brand-new store object after a restart still sees the approval, and the earlier analysis and test activities were replayed from history rather than run again; the approval id contains the release id, so an approval for another release does not authorise this one\n\n--- 2. Genuinely running: a rejection stops the protected action ---\n{'status': 'cancelled'} | deploy ran: False\na rejected request returns cancelled and the deployment activity never runs\n\n--- 3. Genuinely running: durable timers and a simulated clock ---\nclock      0: timers due []\nclock    599: timers due []\nclock    600: timers due ['retry_001']\nclock  86400: timers due ['expire_approval']\nthe wake-up times are stored, so a restarted scheduler that reloads the file fires each timer once when the simulated clock reaches it, and a plain sleep would have lost the remaining delay on a crash; the clock here is a number the lab chooses\n\n--- 4. Genuinely running: a budget that a restart cannot reset ---\n['ok', 'ok', 'ok', 'LLM call budget exceeded', 'kill switch active']\neach call creates a new budget object from the file, standing in for a restarted worker, and the fourth call hits the limit and trips the kill switch while the fifth is refused because the switch is stored; an in-memory counter would have started again at zero each time\n\n--- 5. Genuinely running: memory consolidation next to the authoritative log ---\nconsolidate every  1 overflow(s): authoritative log 24 | recent kept in full 8 | summaries 16 | events in the first summary 1\nconsolidate every 16 overflow(s): authoritative log 24 | recent kept in full 8 | summaries 1 | events in the first summary 16\nfolding on every overflow, which is how the lesson class is written, turns 24 events into 16 one-event summaries, while folding in a batch of 16 gives the single summary of 16 older events that the lesson diagram describes; either way the summary keeps only a count and the first and last event and the detail survives only in the log, so recovery must read the log and never the summary, and this grouping does not compress events into prose\n\n--- 6. Genuinely running: the five unit tests ---\nran 5 tests | failures 0 | errors 0 | passed True\nthe tests cover approval persistence, duplicate requests, budget persistence with the kill switch, timers that are not due early and an approval that must match its release; they test this sketch and not a production engine"
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
    "headingEn": "Genuinely Found: Approvals and Timers",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅನುಮೋದನೆಗಳು ಮತ್ತು ಟೈಮರ್‌ಗಳು",
    "bodyEn": "Section 1: the release workflow returned waiting_for_approval twice, then completed after the approval was recorded through a new store object, and each of analyze_release, run_release_tests and deploy_release ran once. Section 2: a rejection returned cancelled and deploy_release never ran. Section 3: no timer was due at clock 0 or 599, retry_001 fired at 600 and expire_approval at 86400.",
    "bodyKn": "ವಿಭಾಗ 1: release workflow waiting_for_approval ಎರಡು ಬಾರಿ ಹಿಂತಿರುಗಿಸಿ, ಹೊಸ store ವಸ್ತುವಿನ ಮೂಲಕ ಅನುಮೋದನೆ ದಾಖಲಾದ ನಂತರ completed ಆಯಿತು, ಮತ್ತು analyze_release, run_release_tests ಹಾಗೂ deploy_release ತಲಾ ಒಮ್ಮೆ ಓಡಿದವು. ವಿಭಾಗ 2: ನಿರಾಕರಣೆ cancelled ಹಿಂತಿರುಗಿಸಿತು ಮತ್ತು deploy_release ಎಂದಿಗೂ ಓಡಲಿಲ್ಲ. ವಿಭಾಗ 3: ಗಡಿಯಾರ 0 ಅಥವಾ 599 ರಲ್ಲಿ ಯಾವ ಟೈಮರ್ ಬಾಕಿಯಿರಲಿಲ್ಲ, retry_001 600 ರಲ್ಲಿ ಮತ್ತು expire_approval 86400 ರಲ್ಲಿ ಉರಿಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Budget, Memory and Tests",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಬಜೆಟ್, ಮೆಮೊರಿ ಮತ್ತು ಪರೀಕ್ಷೆಗಳು",
    "bodyEn": "Section 4: five calls through fresh budget objects gave ok, ok, ok, LLM call budget exceeded and kill switch active. Section 5: over 24 events consolidation on every overflow left 8 recent events and 16 one-event summaries, while consolidation in a batch of 16 left 8 recent events and 1 summary of 16 events. Section 6: the five unit tests ran with 0 failures and 0 errors.",
    "bodyKn": "ವಿಭಾಗ 4: ಹೊಸ ಬಜೆಟ್ ವಸ್ತುಗಳ ಮೂಲಕ ಐದು ಕರೆಗಳು ok, ok, ok, LLM call budget exceeded ಮತ್ತು kill switch active ನೀಡಿದವು. ವಿಭಾಗ 5: 24 events ಮೇಲೆ ಪ್ರತಿ ಓವರ್‌ಫ್ಲೋಗೆ ಬಲವರ್ಧನೆ 8 ಇತ್ತೀಚಿನ events ಮತ್ತು 16 ಒಂದು-event ಸಾರಾಂಶ ಬಿಟ್ಟಿತು, 16 ರ batch ನಲ್ಲಿ ಬಲವರ್ಧನೆ 8 ಇತ್ತೀಚಿನ events ಮತ್ತು 16 events ನ 1 ಸಾರಾಂಶ ಬಿಟ್ಟಿತು. ವಿಭಾಗ 6: ಐದು unit ಪರೀಕ್ಷೆಗಳು 0 ವೈಫಲ್ಯ ಮತ್ತು 0 ದೋಷದೊಂದಿಗೆ ಓಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Anything the agent must not forget across a restart, an approval, a timer or a spent budget, has to live in storage, and the summary used for reasoning must never replace the exact log used for recovery.",
    "bodyKn": "ಮರುಪ್ರಾರಂಭದಾದ್ಯಂತ agent ಮರೆಯಬಾರದ ಯಾವುದೂ, ಅನುಮೋದನೆ, ಟೈಮರ್ ಅಥವಾ ಖರ್ಚಾದ ಬಜೆಟ್, ಸಂಗ್ರಹದಲ್ಲಿ ಇರಬೇಕು, ಮತ್ತು ತರ್ಕಕ್ಕೆ ಬಳಸುವ ಸಾರಾಂಶ ಚೇತರಿಕೆಗೆ ಬಳಸುವ ನಿಖರ ಲಾಗ್ ಅನ್ನು ಎಂದಿಗೂ ಬದಲಿಸಬಾರದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the consolidation class summarises 16 events into one.\" As the lesson wrote it, folding on every overflow produced 16 one-event summaries, and only the batch variant gave one summary of 16.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಬಲವರ್ಧನೆ ವರ್ಗ 16 events ಅನ್ನು ಒಂದಕ್ಕೆ ಸಾರಾಂಶಗೊಳಿಸುತ್ತದೆ.\" lesson ಬರೆದಂತೆ, ಪ್ರತಿ ಓವರ್‌ಫ್ಲೋಗೆ ಮಡಚುವುದು 16 ಒಂದು-event ಸಾರಾಂಶ ಉತ್ಪಾದಿಸಿತು, ಮತ್ತು batch ರೂಪಾಂತರ ಮಾತ್ರ 16 ರ ಒಂದು ಸಾರಾಂಶ ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Approval binding: tying a decision to one resource. Durable timer: a stored wake-up time. Kill switch: a stored flag that stops further spending. Consolidation: folding old events into a summary.",
    "bodyKn": "Approval binding: ನಿರ್ಧಾರವನ್ನು ಒಂದು ಸಂಪನ್ಮೂಲಕ್ಕೆ ಕಟ್ಟುವುದು. Durable timer: ಸಂಗ್ರಹಿತ ಎಚ್ಚರದ ಸಮಯ. Kill switch: ಮತ್ತಷ್ಟು ಖರ್ಚು ನಿಲ್ಲಿಸುವ ಸಂಗ್ರಹಿತ ಫ್ಲಾಗ್. Consolidation: ಹಳೆಯ events ಅನ್ನು ಸಾರಾಂಶಕ್ಕೆ ಮಡಚುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The approval survived a restart and each activity ran once. 2) A rejection stopped the deployment. 3) Timers fired at their stored times. 4) The budget refused the fourth call and stayed killed. 5) The consolidation class folded 24 events into 16 summaries until batched.",
    "bodyKn": "1) ಅನುಮೋದನೆ ಮರುಪ್ರಾರಂಭ ಉಳಿದು ಪ್ರತಿ activity ಒಮ್ಮೆ ಓಡಿತು. 2) ನಿರಾಕರಣೆ deployment ನಿಲ್ಲಿಸಿತು. 3) ಟೈಮರ್‌ಗಳು ಅವುಗಳ ಸಂಗ್ರಹಿತ ಸಮಯದಲ್ಲಿ ಉರಿದವು. 4) ಬಜೆಟ್ ನಾಲ್ಕನೇ ಕರೆ ನಿರಾಕರಿಸಿ ಕೊಲ್ಲಲ್ಪಟ್ಟಿತು. 5) ಬಲವರ್ಧನೆ ವರ್ಗ batch ಮಾಡುವವರೆಗೆ 24 events ಅನ್ನು 16 ಸಾರಾಂಶಗಳಿಗೆ ಮಡಚಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What status did the release workflow return after the approval was recorded through a new store object?",
      "qKn": "ಹೊಸ store ವಸ್ತುವಿನ ಮೂಲಕ ಅನುಮೋದನೆ ದಾಖಲಾದ ನಂತರ release workflow ಯಾವ ಸ್ಥಿತಿ ಹಿಂತಿರುಗಿಸಿತು?",
      "opts": [
       "completed",
       "waiting_for_approval",
       "cancelled",
       "error"
      ],
      "optsKn": [
       "completed",
       "waiting_for_approval",
       "cancelled",
       "error"
      ],
      "correct": 0
     },
     {
      "q": "Did deploy_release run after a rejection?",
      "qKn": "ನಿರಾಕರಣೆಯ ನಂತರ deploy_release ಓಡಿತೇ?",
      "opts": [
       "No",
       "Yes",
       "Twice",
       "Only in tests"
      ],
      "optsKn": [
       "ಇಲ್ಲ",
       "ಹೌದು",
       "ಎರಡು ಬಾರಿ",
       "ಪರೀಕ್ಷೆಗಳಲ್ಲಿ ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "At which clock value did retry_001 fire?",
      "qKn": "retry_001 ಯಾವ ಗಡಿಯಾರ ಮೌಲ್ಯದಲ್ಲಿ ಉರಿಯಿತು?",
      "opts": [
       "600",
       "599",
       "0",
       "86400"
      ],
      "optsKn": [
       "600",
       "599",
       "0",
       "86400"
      ],
      "correct": 0
     },
     {
      "q": "What did the fifth call through the budget return?",
      "qKn": "ಬಜೆಟ್ ಮೂಲಕ ಐದನೇ ಕರೆ ಏನು ಹಿಂತಿರುಗಿಸಿತು?",
      "opts": [
       "kill switch active",
       "ok",
       "LLM call budget exceeded",
       "a new budget"
      ],
      "optsKn": [
       "kill switch ಸಕ್ರಿಯ",
       "ಸರಿ (ok)",
       "LLM ಕರೆ ಬಜೆಟ್ ಮೀರಿದೆ",
       "ಹೊಸ ಬಜೆಟ್"
      ],
      "correct": 0
     },
     {
      "q": "How many summaries did consolidation on every overflow create from 24 events?",
      "qKn": "24 events ಮೇಲೆ ಪ್ರತಿ ಓವರ್‌ಫ್ಲೋಗೆ ಬಲವರ್ಧನೆ ಎಷ್ಟು ಸಾರಾಂಶ ರಚಿಸಿತು?",
      "opts": [
       "16",
       "1",
       "8",
       "24"
      ],
      "optsKn": [
       "16",
       "1",
       "8",
       "24"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
