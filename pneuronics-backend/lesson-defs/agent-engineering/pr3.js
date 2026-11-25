module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215e0",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "The Multi-Agent Primitive Model (Part 3 of 3) — Durable State and Controls",
 "titleKn": "ಬಹು-ಏಜೆಂಟ್ ಪ್ರಿಮಿಟಿವ್ ಮಾದರಿ (ಭಾಗ 3 / 3) — ಬಾಳಿಕೆ ಬರುವ ಸ್ಥಿತಿ ಮತ್ತು ನಿಯಂತ್ರಣಗಳು",
 "desc": "Add durability, version checks, route tables, budgets and a completion gate to the four primitives.",
 "descKn": "ನಾಲ್ಕು ಪ್ರಿಮಿಟಿವ್‌ಗಳಿಗೆ ಬಾಳಿಕೆ, ಆವೃತ್ತಿ ಪರಿಶೀಲನೆ, ಮಾರ್ಗ ಕೋಷ್ಟಕ, ಬಜೆಟ್ ಮತ್ತು ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ದ್ವಾರ ಸೇರಿಸಿ.",
 "objectives": [
  "Persist state.",
  "Check a version.",
  "Table allowed routes.",
  "Budget steps.",
  "Gate completion."
 ],
 "objectivesKn": [
  "ಸ್ಥಿತಿ ಉಳಿಸಿ.",
  "ಆವೃತ್ತಿ ಪರಿಶೀಲಿಸಿ.",
  "ಅನುಮತಿತ ಮಾರ್ಗಗಳ ಕೋಷ್ಟಕ ಮಾಡಿ.",
  "ಹಂತಗಳಿಗೆ ಬಜೆಟ್ ಇಡಿ.",
  "ಪೂರ್ಣಗೊಳಿಸುವಿಕೆಗೆ ದ್ವಾರ ಇಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "The Multi-Agent Primitive Model (Part 3 of 3)",
    "textKn": "ಬಹು-ಏಜೆಂಟ್ ಪ್ರಿಮಿಟಿವ್ ಮಾದರಿ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: SQLite state that survives reopening, a version-checked checkpoint, allowed transitions, a step budget, a completion gate, structured events and a work queue. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the four primitives of a multi-agent system (agent, handoff, shared state and orchestrator), three orchestrators, validated handoffs, durable state with version checks, a budget and a completion gate, not the real software, and the agents are scripted functions, the selector is a fixed rule and not a model, the state lives in one process or one local SQLite file and no framework is run, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The framework mapping table in the lesson (Swarm, AutoGen, CrewAI, LangGraph and others) is conceptual and was not run. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಮರುತೆರೆದ ನಂತರವೂ ಉಳಿಯುವ SQLite ಸ್ಥಿತಿ, ಆವೃತ್ತಿ-ಪರಿಶೀಲಿತ checkpoint, ಅನುಮತಿತ ಪರಿವರ್ತನೆಗಳು, ಹಂತ ಬಜೆಟ್, ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ದ್ವಾರ, ರಚನಾತ್ಮಕ ಘಟನೆಗಳು ಮತ್ತು ಕೆಲಸದ ಸಾಲು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಬಹು-ಏಜೆಂಟ್ ವ್ಯವಸ್ಥೆಯ ನಾಲ್ಕು ಪ್ರಿಮಿಟಿವ್‌ಗಳು (ಏಜೆಂಟ್, handoff, ಹಂಚಿಕೆಯ ಸ್ಥಿತಿ ಮತ್ತು orchestrator), ಮೂರು orchestrator ಗಳು, ಪರಿಶೀಲಿತ handoff ಗಳು, ಆವೃತ್ತಿ ಪರಿಶೀಲನೆಯೊಂದಿಗೆ ಬಾಳಿಕೆ ಬರುವ ಸ್ಥಿತಿ, ಬಜೆಟ್ ಮತ್ತು ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ದ್ವಾರ ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಏಜೆಂಟ್‌ಗಳು ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಕಾರ್ಯಗಳು, selector ಮಾದರಿಯಲ್ಲ ನಿಶ್ಚಿತ ನಿಯಮ, ಸ್ಥಿತಿ ಒಂದು ಪ್ರಕ್ರಿಯೆ ಅಥವಾ ಒಂದು ಸ್ಥಳೀಯ SQLite ಫೈಲ್‌ನಲ್ಲಿದೆ ಮತ್ತು ಯಾವುದೇ framework ಓಡಿಸಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ನೀಡಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. lesson ನ framework ಮ್ಯಾಪಿಂಗ್ ಕೋಷ್ಟಕ (Swarm, AutoGen, CrewAI, LangGraph ಮತ್ತಿತರ) ಪರಿಕಲ್ಪನಾತ್ಮಕ ಮತ್ತು ಓಡಿಸಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "From a Demo to Something You Can Recover",
    "textKn": "ಡೆಮೊದಿಂದ ಮರುಪಡೆಯಬಹುದಾದ ವ್ಯವಸ್ಥೆಗೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Durable State, Checks and Gates",
    "headingKn": "ಬಾಳಿಕೆ ಬರುವ ಸ್ಥಿತಿ, ಪರಿಶೀಲನೆಗಳು ಮತ್ತು ದ್ವಾರಗಳು",
    "bodyEn": "An in-memory pool disappears when the process ends, two workers can overwrite each other, an agent can ask for a route it should not have, a loop can run forever and a manager can call a half-finished job done. This part adds one control for each problem to the same primitives: SQLite state that a new object can read back, a version check that lets only one of two competing updates win, a table of allowed transitions, a step budget, a completion gate that looks at stored artifacts, structured event lines and a queue in which each task is taken once.",
    "bodyKn": "ಮೆಮೊರಿಯಲ್ಲಿನ pool ಪ್ರಕ್ರಿಯೆ ಮುಗಿದಾಗ ಕಣ್ಮರೆಯಾಗುತ್ತದೆ, ಇಬ್ಬರು ಕೆಲಸಗಾರರು ಪರಸ್ಪರ ಮೇಲ್ಬರಹ ಮಾಡಬಹುದು, ಏಜೆಂಟ್ ತನಗೆ ಇರಬಾರದ ಮಾರ್ಗವನ್ನು ಕೇಳಬಹುದು, ಲೂಪ್ ಶಾಶ್ವತವಾಗಿ ಓಡಬಹುದು ಮತ್ತು ಮ್ಯಾನೇಜರ್ ಅರ್ಧ ಮುಗಿದ ಕೆಲಸವನ್ನು ಮುಗಿದಿದೆ ಎನ್ನಬಹುದು. ಈ ಭಾಗವು ಅದೇ ಪ್ರಿಮಿಟಿವ್‌ಗಳಿಗೆ ಪ್ರತಿ ಸಮಸ್ಯೆಗೂ ಒಂದು ನಿಯಂತ್ರಣ ಸೇರಿಸುತ್ತದೆ: ಹೊಸ ವಸ್ತು ಹಿಂದಕ್ಕೆ ಓದಬಹುದಾದ SQLite ಸ್ಥಿತಿ, ಎರಡು ಸ್ಪರ್ಧಾತ್ಮಕ ನವೀಕರಣಗಳಲ್ಲಿ ಒಂದು ಮಾತ್ರ ಗೆಲ್ಲಲು ಬಿಡುವ ಆವೃತ್ತಿ ಪರಿಶೀಲನೆ, ಅನುಮತಿತ ಪರಿವರ್ತನೆಗಳ ಕೋಷ್ಟಕ, ಹಂತ ಬಜೆಟ್, ಸಂಗ್ರಹಿತ artifacts ನೋಡುವ ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ದ್ವಾರ, ರಚನಾತ್ಮಕ ಘಟನೆ ಸಾಲುಗಳು ಮತ್ತು ಪ್ರತಿ ಕೆಲಸ ಒಮ್ಮೆ ತೆಗೆದುಕೊಳ್ಳಲ್ಪಡುವ ಸಾಲು."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Controls Around the Primitives",
    "headingKn": "ಪ್ರಿಮಿಟಿವ್‌ಗಳ ಸುತ್ತ ನಿಯಂತ್ರಣಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a production hierarchy of controls sits around the four primitives</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">durable state</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">survives a restart</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">version check</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">one writer wins</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">allowed routes</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a table decides</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">gate</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">evidence before done</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a production hierarchy of controls sits around the four primitives</text></svg>",
    "captionEn": "Durability, version checks, route tables, budgets and a completion gate.",
    "captionKn": "ಬಾಳಿಕೆ, ಆವೃತ್ತಿ ಪರಿಶೀಲನೆ, ಮಾರ್ಗ ಕೋಷ್ಟಕ, ಬಜೆಟ್ ಮತ್ತು ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ದ್ವಾರ."
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
      "durability",
      "a new object reads an artifact written earlier"
     ],
     [
      "version check",
      "two updates expecting version 0"
     ],
     [
      "transitions",
      "allowed, refused and unknown sources"
     ],
     [
      "budget",
      "the fourth step of a three-step budget"
     ],
     [
      "completion gate",
      "present and approved, missing, rejected"
     ],
     [
      "events and queue",
      "JSON lines and four tasks over three workers"
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
    "filename": "pr_3.py",
    "headingEn": "Durable state",
    "headingKn": "ಬಾಳಿಕೆ ಬರುವ ಸ್ಥಿತಿ",
    "descEn": "DurableState keeps messages, artifacts and a versioned checkpoint in SQLite, and update_checkpoint changes a row only when the stored version matches the expected one.",
    "descKn": "DurableState ಸಂದೇಶಗಳು, artifacts ಮತ್ತು ಆವೃತ್ತಿ ಹೊಂದಿದ checkpoint ಅನ್ನು SQLite ನಲ್ಲಿ ಇಡುತ್ತದೆ, ಮತ್ತು update_checkpoint ಸಂಗ್ರಹಿತ ಆವೃತ್ತಿ ನಿರೀಕ್ಷಿತದೊಂದಿಗೆ ಹೊಂದಿದಾಗ ಮಾತ್ರ ಸಾಲು ಬದಲಿಸುತ್ತದೆ.",
    "code": "class DurableState:\n    def __init__(self, path):\n        self.path = path\n        with self.connect() as c:\n            c.execute(\"CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, workflow_id TEXT NOT NULL, agent TEXT NOT NULL, content TEXT NOT NULL)\")\n            c.execute(\"CREATE TABLE IF NOT EXISTS artifacts (workflow_id TEXT NOT NULL, name TEXT NOT NULL, value TEXT NOT NULL, PRIMARY KEY (workflow_id, name))\")\n            c.execute(\"CREATE TABLE IF NOT EXISTS checkpoints (workflow_id TEXT PRIMARY KEY, current_agent TEXT, status TEXT, version INTEGER NOT NULL)\")\n\n    def connect(self):\n        c = sqlite3.connect(self.path, timeout=10)\n        return c\n\n    def add_message(self, wf, agent, content):\n        c = self.connect()\n        with c:\n            c.execute(\"INSERT INTO messages (workflow_id, agent, content) VALUES (?, ?, ?)\", (wf, agent, content))\n        c.close()\n\n    def set_artifact(self, wf, name, value):\n        c = self.connect()\n        with c:\n            c.execute(\"INSERT OR REPLACE INTO artifacts (workflow_id, name, value) VALUES (?, ?, ?)\", (wf, name, value))\n        c.close()\n\n    def get_artifact(self, wf, name):\n        c = self.connect()\n        row = c.execute(\"SELECT value FROM artifacts WHERE workflow_id = ? AND name = ?\", (wf, name)).fetchone()\n        c.close()\n        return row[0] if row else None\n\n    def start(self, wf):\n        c = self.connect()\n        with c:\n            c.execute(\"INSERT OR IGNORE INTO checkpoints VALUES (?, 'Researcher', 'ready', 0)\", (wf,))\n        c.close()\n\n    def update_checkpoint(self, wf, expected_version, next_agent, status):\n        c = self.connect()\n        with c:\n            cur = c.execute(\"UPDATE checkpoints SET current_agent = ?, status = ?, version = version + 1 WHERE workflow_id = ? AND version = ?\", (next_agent, status, wf, expected_version))\n        c.close()\n        return cur.rowcount == 1\n\n    def checkpoint(self, wf):\n        c = self.connect()\n        row = c.execute(\"SELECT current_agent, status, version FROM checkpoints WHERE workflow_id = ?\", (wf,)).fetchone()\n        c.close()\n        return row"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pr_3.py",
    "headingEn": "Transitions, budget and gate",
    "headingKn": "ಪರಿವರ್ತನೆಗಳು, ಬಜೆಟ್ ಮತ್ತು ದ್ವಾರ",
    "descEn": "validate_handoff checks the table, ExecutionBudget refuses a step past its limit and verify_completion lists missing artifacts or a rejected verdict.",
    "descKn": "validate_handoff ಕೋಷ್ಟಕ ಪರಿಶೀಲಿಸುತ್ತದೆ, ExecutionBudget ಮಿತಿ ಮೀರಿದ ಹಂತ ನಿರಾಕರಿಸುತ್ತದೆ ಮತ್ತು verify_completion ಕಾಣೆಯಾದ artifacts ಅಥವಾ ತಿರಸ್ಕೃತ verdict ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ.",
    "code": "ALLOWED = {\"Researcher\": {\"Writer\"}, \"Writer\": {\"Reviewer\"}, \"Reviewer\": set()}\n\n\ndef validate_handoff(source, destination):\n    allowed = ALLOWED.get(source)\n    if allowed is None:\n        raise ValueError(f\"Unknown source agent: {source}\")\n    if destination is not None and destination not in allowed:\n        raise PermissionError(f\"Unauthorized handoff: {source} -> {destination}\")\n\n\nclass ExecutionBudget:\n    def __init__(self, max_steps):\n        self.max_steps, self.used = max_steps, 0\n\n    def consume(self):\n        if self.used >= self.max_steps:\n            raise RuntimeError(\"Execution budget exceeded\")\n        self.used += 1\n\n\nREQUIRED = {\"research\", \"draft\", \"verdict\"}\n\n\ndef verify_completion(artifacts):\n    missing = sorted(REQUIRED - set(artifacts))\n    if missing:\n        return False, missing\n    if artifacts[\"verdict\"] != \"APPROVED\":\n        return False, [\"review not approved\"]\n    return True, []"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pr_3.py",
    "headingEn": "The experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the six experiments in order and prints the real result of each.",
    "descKn": "main() ಆರು ಪ್ರಯೋಗಗಳನ್ನು ಕ್ರಮವಾಗಿ ಓಡಿಸಿ ಪ್ರತಿಯೊಂದರ ನಿಜ ಫಲಿತಾಂಶ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    tmp = tempfile.mkdtemp()\n    path = os.path.join(tmp, \"agents.db\")\n\n    section(\"1. Genuinely running: state that outlives the object that wrote it\")\n    store = DurableState(path)\n    store.add_message(\"workflow-001\", \"Researcher\", \"Research completed\")\n    store.set_artifact(\"workflow-001\", \"research\", \"Three important findings\")\n    del store\n    reopened = DurableState(path)\n    print(\"artifact after reopening:\", reopened.get_artifact(\"workflow-001\", \"research\"), \"| other workflow sees:\", reopened.get_artifact(\"workflow-002\", \"research\"))\n    print(\"a brand new DurableState object reading the same file finds the artifact written earlier, and a different workflow id sees nothing, so the data lives in the file and not in the object; SQLite here is one local file, so this proves persistence on one machine and nothing about multi-host coordination.\")\n\n    section(\"2. Genuinely running: only one of two competing updates wins\")\n    reopened.start(\"workflow-001\")\n    first = reopened.update_checkpoint(\"workflow-001\", 0, \"Writer\", \"ready\")\n    second = reopened.update_checkpoint(\"workflow-001\", 0, \"Reviewer\", \"ready\")\n    print(\"worker A expected version 0:\", first, \"| worker B expected version 0:\", second, \"| stored:\", reopened.checkpoint(\"workflow-001\"))\n    print(\"both workers read version 0, the first update succeeded and moved the version to 1 and the second matched no row and failed, so the loser learns that it is stale and must reload; this stops a lost update only if the version check and the write are one atomic statement, which this single SQL update is.\")\n\n    section(\"3. Genuinely running: allowed transitions\")\n    for src, dst in ((\"Researcher\", \"Writer\"), (\"Researcher\", \"Reviewer\"), (\"Reviewer\", None), (\"Hacker\", \"Writer\")):\n        try:\n            validate_handoff(src, dst)\n            print(f\"{src} -> {dst}: allowed\")\n        except (PermissionError, ValueError) as e:\n            print(f\"{src} -> {dst}: {type(e).__name__}: {e}\")\n    print(\"a table of allowed transitions refuses a researcher jumping to the reviewer and a source that is not in the table, while a stop with no destination is allowed; the agent proposes and this table decides, so a persuasive message cannot grant a route the table does not contain.\")\n\n    section(\"4. Genuinely running: a step budget\")\n    budget = ExecutionBudget(3)\n    used = []\n    try:\n        for _ in range(5):\n            budget.consume()\n            used.append(budget.used)\n    except RuntimeError as e:\n        print(\"steps taken:\", used, \"|\", e)\n    print(\"the fourth step was refused and nothing after it ran, which bounds a handoff loop in count; a step count says nothing about tokens, money or time, so a real governor tracks those as well.\")\n\n    section(\"5. Genuinely running: a completion gate\")\n    cases = {\"all present and approved\": {\"research\": \"r\", \"draft\": \"d\", \"verdict\": \"APPROVED\"}, \"no verdict\": {\"research\": \"r\", \"draft\": \"d\"}, \"verdict rejected\": {\"research\": \"r\", \"draft\": \"d\", \"verdict\": \"REJECTED\"}}\n    for name, arts in cases.items():\n        print(f\"{name}: {verify_completion(arts)}\")\n    print(\"only the first set of artifacts passes the gate, a missing verdict is listed by name and a rejected verdict fails with its own reason, so completion is decided from stored artifacts and not from a manager saying done; the check is structural and does not test that the draft is true or that a human approved.\")\n\n    section(\"6. Genuinely running: structured events, and a queue where each task is taken once\")\n    lines = []\n    for ev in (\"handoff_accepted\", \"handoff_rejected\"):\n        lines.append(json.dumps({\"timestamp\": datetime.now(timezone.utc).isoformat()[:10], \"event_type\": ev, \"from_agent\": \"Writer\", \"to_agent\": \"Reviewer\"}, sort_keys=True))\n    print(\"event lines are valid JSON:\", all(json.loads(x)[\"event_type\"] for x in lines), \"| first:\", lines[0])\n    tasks = queue.Queue()\n    for topic in (\"Agent\", \"Handoff\", \"Shared state\", \"Orchestrator\"):\n        tasks.put(topic)\n    taken, lock = [], threading.Lock()\n\n    def worker():\n        while True:\n            try:\n                topic = tasks.get_nowait()\n            except queue.Empty:\n                return\n            with lock:\n                taken.append(topic)\n    ts = [threading.Thread(target=worker) for _ in range(3)]\n    [t.start() for t in ts]\n    [t.join() for t in ts]\n    print(\"tasks processed:\", sorted(taken), \"| duplicates:\", len(taken) - len(set(taken)))\n    print(\"each event is one JSON line that a tool can search, and three workers took four tasks with no duplicate; queue.Queue gives each item to one consumer inside this process, and a distributed queue still needs leases, retries and idempotent workers.\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: state that outlives the object that wrote it ---\nartifact after reopening: Three important findings | other workflow sees: None\na brand new DurableState object reading the same file finds the artifact written earlier, and a different workflow id sees nothing, so the data lives in the file and not in the object; SQLite here is one local file, so this proves persistence on one machine and nothing about multi-host coordination.\n\n--- 2. Genuinely running: only one of two competing updates wins ---\nworker A expected version 0: True | worker B expected version 0: False | stored: ('Writer', 'ready', 1)\nboth workers read version 0, the first update succeeded and moved the version to 1 and the second matched no row and failed, so the loser learns that it is stale and must reload; this stops a lost update only if the version check and the write are one atomic statement, which this single SQL update is.\n\n--- 3. Genuinely running: allowed transitions ---\nResearcher -> Writer: allowed\nResearcher -> Reviewer: PermissionError: Unauthorized handoff: Researcher -> Reviewer\nReviewer -> None: allowed\nHacker -> Writer: ValueError: Unknown source agent: Hacker\na table of allowed transitions refuses a researcher jumping to the reviewer and a source that is not in the table, while a stop with no destination is allowed; the agent proposes and this table decides, so a persuasive message cannot grant a route the table does not contain.\n\n--- 4. Genuinely running: a step budget ---\nsteps taken: [1, 2, 3] | Execution budget exceeded\nthe fourth step was refused and nothing after it ran, which bounds a handoff loop in count; a step count says nothing about tokens, money or time, so a real governor tracks those as well.\n\n--- 5. Genuinely running: a completion gate ---\nall present and approved: (True, [])\nno verdict: (False, ['verdict'])\nverdict rejected: (False, ['review not approved'])\nonly the first set of artifacts passes the gate, a missing verdict is listed by name and a rejected verdict fails with its own reason, so completion is decided from stored artifacts and not from a manager saying done; the check is structural and does not test that the draft is true or that a human approved.\n\n--- 6. Genuinely running: structured events, and a queue where each task is taken once ---\nevent lines are valid JSON: True | first: {\"event_type\": \"handoff_accepted\", \"from_agent\": \"Writer\", \"timestamp\": \"2026-11-25\", \"to_agent\": \"Reviewer\"}\ntasks processed: ['Agent', 'Handoff', 'Orchestrator', 'Shared state'] | duplicates: 0\neach event is one JSON line that a tool can search, and three workers took four tasks with no duplicate; queue.Queue gives each item to one consumer inside this process, and a distributed queue still needs leases, retries and idempotent workers."
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
    "headingEn": "Experiment 1: State that outlives the object that wrote it",
    "headingKn": "ಪ್ರಯೋಗ 1: State that outlives the object that wrote it",
    "bodyEn": "What it ran: State that outlives the object that wrote it. What the lab concluded: a brand new DurableState object reading the same file finds the artifact written earlier, and a different workflow id sees nothing, so the data lives in the file and not in the object; SQLite here is one local file, so this proves persistence on one machine and nothing about multi-host coordination.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: State that outlives the object that wrote it. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a brand new DurableState object reading the same file finds the artifact written earlier, and a different workflow id sees nothing, so the data lives in the file and not in the object; SQLite here is one local file, so this proves persistence on one machine and nothing about multi-host coordination."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: state that outlives the object that wrote it ---\nartifact after reopening: Three important findings | other workflow sees: None"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Only one of two competing updates wins",
    "headingKn": "ಪ್ರಯೋಗ 2: Only one of two competing updates wins",
    "bodyEn": "What it ran: Only one of two competing updates wins. What the lab concluded: both workers read version 0, the first update succeeded and moved the version to 1 and the second matched no row and failed, so the loser learns that it is stale and must reload; this stops a lost update only if the version check and the write are one atomic statement, which this single SQL update is.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Only one of two competing updates wins. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): both workers read version 0, the first update succeeded and moved the version to 1 and the second matched no row and failed, so the loser learns that it is stale and must reload; this stops a lost update only if the version check and the write are one atomic statement, which this single SQL update is."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: only one of two competing updates wins ---\nworker A expected version 0: True | worker B expected version 0: False | stored: ('Writer', 'ready', 1)"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Allowed transitions",
    "headingKn": "ಪ್ರಯೋಗ 3: Allowed transitions",
    "bodyEn": "What it ran: Allowed transitions. What the lab concluded: a table of allowed transitions refuses a researcher jumping to the reviewer and a source that is not in the table, while a stop with no destination is allowed; the agent proposes and this table decides, so a persuasive message cannot grant a route the table does not contain.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Allowed transitions. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a table of allowed transitions refuses a researcher jumping to the reviewer and a source that is not in the table, while a stop with no destination is allowed; the agent proposes and this table decides, so a persuasive message cannot grant a route the table does not contain."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: allowed transitions ---\nResearcher -> Writer: allowed\nResearcher -> Reviewer: PermissionError: Unauthorized handoff: Researcher -> Reviewer\nReviewer -> None: allowed\nHacker -> Writer: ValueError: Unknown source agent: Hacker"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A step budget",
    "headingKn": "ಪ್ರಯೋಗ 4: A step budget",
    "bodyEn": "What it ran: A step budget. What the lab concluded: the fourth step was refused and nothing after it ran, which bounds a handoff loop in count; a step count says nothing about tokens, money or time, so a real governor tracks those as well.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A step budget. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the fourth step was refused and nothing after it ran, which bounds a handoff loop in count; a step count says nothing about tokens, money or time, so a real governor tracks those as well."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a step budget ---\nsteps taken: [1, 2, 3] | Execution budget exceeded"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A completion gate",
    "headingKn": "ಪ್ರಯೋಗ 5: A completion gate",
    "bodyEn": "What it ran: A completion gate. What the lab concluded: only the first set of artifacts passes the gate, a missing verdict is listed by name and a rejected verdict fails with its own reason, so completion is decided from stored artifacts and not from a manager saying done; the check is structural and does not test that the draft is true or that a human approved.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A completion gate. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): only the first set of artifacts passes the gate, a missing verdict is listed by name and a rejected verdict fails with its own reason, so completion is decided from stored artifacts and not from a manager saying done; the check is structural and does not test that the draft is true or that a human approved."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: a completion gate ---\nall present and approved: (True, [])\nno verdict: (False, ['verdict'])\nverdict rejected: (False, ['review not approved'])"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: Structured events, and a queue where each task is taken once",
    "headingKn": "ಪ್ರಯೋಗ 6: Structured events, and a queue where each task is taken once",
    "bodyEn": "What it ran: Structured events, and a queue where each task is taken once. What the lab concluded: each event is one JSON line that a tool can search, and three workers took four tasks with no duplicate; queue.Queue gives each item to one consumer inside this process, and a distributed queue still needs leases, retries and idempotent workers.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Structured events, and a queue where each task is taken once. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each event is one JSON line that a tool can search, and three workers took four tasks with no duplicate; queue.Queue gives each item to one consumer inside this process, and a distributed queue still needs leases, retries and idempotent workers."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: structured events, and a queue where each task is taken once ---\nevent lines are valid JSON: True | first: {\"event_type\": \"handoff_accepted\", \"from_agent\": \"Writer\", \"timestamp\": \"2026-11-25\", \"to_agent\": \"Reviewer\"}\ntasks processed: ['Agent', 'Handoff', 'Orchestrator', 'Shared state'] | duplicates: 0"
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
    "headingEn": "Genuinely Found: Durability, Versions and Routes",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಬಾಳಿಕೆ, ಆವೃತ್ತಿಗಳು ಮತ್ತು ಮಾರ್ಗಗಳು",
    "bodyEn": "Section 1: a new DurableState read Three important findings from the file and another workflow saw None. Section 2: worker A expecting version 0 succeeded, worker B failed and the stored checkpoint was Writer, ready, version 1. Section 3: researcher to writer and reviewer to nobody were allowed, researcher to reviewer raised PermissionError and the source Hacker raised Unknown source agent.",
    "bodyKn": "ವಿಭಾಗ 1: ಹೊಸ DurableState ಫೈಲ್‌ನಿಂದ Three important findings ಓದಿತು ಮತ್ತು ಇನ್ನೊಂದು workflow None ನೋಡಿತು. ವಿಭಾಗ 2: ಆವೃತ್ತಿ 0 ನಿರೀಕ್ಷಿಸಿದ ಕೆಲಸಗಾರ A ಯಶಸ್ವಿಯಾದನು, B ವಿಫಲನಾದನು ಮತ್ತು ಸಂಗ್ರಹಿತ checkpoint Writer, ready, ಆವೃತ್ತಿ 1. ವಿಭಾಗ 3: researcher ನಿಂದ writer ಗೆ ಮತ್ತು reviewer ನಿಂದ ಯಾರಿಗೂ ಇಲ್ಲ ಅನುಮತಿಸಲ್ಪಟ್ಟವು, researcher ನಿಂದ reviewer ಗೆ PermissionError ಎದ್ದಿತು ಮತ್ತು ಮೂಲ Hacker Unknown source agent ಎತ್ತಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Budget, Gate and Queue",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಬಜೆಟ್, ದ್ವಾರ ಮತ್ತು ಸಾಲು",
    "bodyEn": "Section 4: the steps taken were 1, 2, 3 and the fourth raised Execution budget exceeded. Section 5: all present and approved gave True with no failures, no verdict gave False listing verdict and a rejected verdict gave False with review not approved. Section 6: the event lines were valid JSON and three workers processed four tasks with 0 duplicates.",
    "bodyKn": "ವಿಭಾಗ 4: ತೆಗೆದುಕೊಂಡ ಹಂತಗಳು 1, 2, 3 ಮತ್ತು ನಾಲ್ಕನೆಯದು Execution budget exceeded ಎತ್ತಿತು. ವಿಭಾಗ 5: ಎಲ್ಲಾ ಇದ್ದು ಅನುಮೋದಿತ ಆದಾಗ ವೈಫಲ್ಯಗಳಿಲ್ಲದೆ True ಬಂದಿತು, verdict ಇಲ್ಲದಾಗ verdict ಪಟ್ಟಿ ಮಾಡಿ False ಬಂದಿತು ಮತ್ತು ತಿರಸ್ಕೃತ verdict review not approved ಯೊಂದಿಗೆ False ನೀಡಿತು. ವಿಭಾಗ 6: ಘಟನೆ ಸಾಲುಗಳು ಮಾನ್ಯ JSON ಆಗಿದ್ದವು ಮತ್ತು ಮೂವರು ಕೆಲಸಗಾರರು 0 ನಕಲುಗಳೊಂದಿಗೆ ನಾಲ್ಕು ಕೆಲಸಗಳನ್ನು ಸಂಸ್ಕರಿಸಿದರು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Each control answers one specific failure of the four primitives, and a reliable system is simply the primitives with those controls in place and tested.",
    "bodyKn": "ಪ್ರತಿ ನಿಯಂತ್ರಣ ನಾಲ್ಕು ಪ್ರಿಮಿಟಿವ್‌ಗಳ ಒಂದು ನಿರ್ದಿಷ್ಟ ವೈಫಲ್ಯಕ್ಕೆ ಉತ್ತರಿಸುತ್ತದೆ, ಮತ್ತು ನಂಬಲರ್ಹ ವ್ಯವಸ್ಥೆ ಎಂದರೆ ಆ ನಿಯಂತ್ರಣಗಳನ್ನು ಜಾರಿಯಲ್ಲಿಟ್ಟು ಪರೀಕ್ಷಿಸಿದ ಪ್ರಿಮಿಟಿವ್‌ಗಳೇ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a version check makes concurrent updates safe everywhere.\" It worked because one SQL statement checks and writes together in one local file.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಆವೃತ್ತಿ ಪರಿಶೀಲನೆ ಎಲ್ಲೆಡೆ ಏಕಕಾಲಿಕ ನವೀಕರಣಗಳನ್ನು ಸುರಕ್ಷಿತ ಮಾಡುತ್ತದೆ.\" ಒಂದು ಸ್ಥಳೀಯ ಫೈಲ್‌ನಲ್ಲಿ ಒಂದೇ SQL ಹೇಳಿಕೆ ಪರಿಶೀಲಿಸಿ ಬರೆಯುವುದರಿಂದ ಅದು ಕೆಲಸ ಮಾಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Durable state: state that outlives the process. Checkpoint: a saved position in a workflow. Optimistic concurrency: write only if the version still matches. Completion gate: a check on stored evidence. Budget: a cap on steps.",
    "bodyKn": "ಬಾಳಿಕೆ ಬರುವ ಸ್ಥಿತಿ: ಪ್ರಕ್ರಿಯೆಗಿಂತ ಹೆಚ್ಚು ಕಾಲ ಉಳಿಯುವ ಸ್ಥಿತಿ. Checkpoint: workflow ನಲ್ಲಿ ಉಳಿಸಿದ ಸ್ಥಾನ. ಆಶಾವಾದಿ ಏಕಕಾಲಿಕತೆ: ಆವೃತ್ತಿ ಇನ್ನೂ ಹೊಂದಿದರೆ ಮಾತ್ರ ಬರೆಯಿರಿ. ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ದ್ವಾರ: ಸಂಗ್ರಹಿತ ಸಾಕ್ಷಿಯ ಪರಿಶೀಲನೆ. ಬಜೆಟ್: ಹಂತಗಳ ಮೇಲಿನ ಮಿತಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A new object read an artifact written by an earlier one. 2) Of two updates expecting version 0 only one succeeded. 3) A jump to the reviewer was refused by the table. 4) The fourth step of a three-step budget was refused. 5) The gate named the missing verdict.",
    "bodyKn": "1) ಹೊಸ ವಸ್ತು ಹಿಂದಿನದು ಬರೆದ artifact ಓದಿತು. 2) ಆವೃತ್ತಿ 0 ನಿರೀಕ್ಷಿಸಿದ ಎರಡು ನವೀಕರಣಗಳಲ್ಲಿ ಒಂದು ಮಾತ್ರ ಯಶಸ್ವಿಯಾಯಿತು. 3) reviewer ಗೆ ಜಿಗಿತವನ್ನು ಕೋಷ್ಟಕ ನಿರಾಕರಿಸಿತು. 4) ಮೂರು-ಹಂತ ಬಜೆಟ್‌ನ ನಾಲ್ಕನೇ ಹಂತ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು. 5) ದ್ವಾರ ಕಾಣೆಯಾದ verdict ಹೆಸರಿಸಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What checkpoint did the database hold after worker A updated and worker B failed?",
      "qKn": "ಕೆಲಸಗಾರ A ನವೀಕರಿಸಿ B ವಿಫಲನಾದ ನಂತರ ಡೇಟಾಬೇಸ್ ಯಾವ checkpoint ಹೊಂದಿತ್ತು?",
      "opts": [
       "Writer, ready, version 1",
       "Reviewer, ready, version 1",
       "Writer, ready, version 0",
       "Researcher, ready, version 0"
      ],
      "optsKn": [
       "Writer, ready, ಆವೃತ್ತಿ 1",
       "Reviewer, ready, ಆವೃತ್ತಿ 1",
       "Writer, ready, ಆವೃತ್ತಿ 0",
       "Researcher, ready, ಆವೃತ್ತಿ 0"
      ],
      "correct": 0
     },
     {
      "q": "What did a source that is not in the transitions table raise?",
      "qKn": "ಪರಿವರ್ತನೆ ಕೋಷ್ಟಕದಲ್ಲಿ ಇಲ್ಲದ ಮೂಲ ಏನು ಎತ್ತಿತು?",
      "opts": [
       "ValueError, Unknown source agent",
       "PermissionError",
       "RuntimeError",
       "Nothing"
      ],
      "optsKn": [
       "ValueError, Unknown source agent",
       "PermissionError",
       "RuntimeError",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "How many steps ran before the budget refused?",
      "qKn": "ಬಜೆಟ್ ನಿರಾಕರಿಸುವ ಮೊದಲು ಎಷ್ಟು ಹಂತಗಳು ಓಡಿದವು?",
      "opts": [
       "3",
       "4",
       "5",
       "1"
      ],
      "optsKn": [
       "3",
       "4",
       "5",
       "1"
      ],
      "correct": 0
     },
     {
      "q": "What did the completion gate return when the verdict was missing?",
      "qKn": "verdict ಕಾಣೆಯಾದಾಗ ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ದ್ವಾರ ಏನು ನೀಡಿತು?",
      "opts": [
       "False and the name verdict",
       "True",
       "False with review not approved",
       "An exception"
      ],
      "optsKn": [
       "False ಮತ್ತು verdict ಹೆಸರು",
       "True",
       "review not approved ಯೊಂದಿಗೆ False",
       "ವಿನಾಯಿತಿ"
      ],
      "correct": 0
     },
     {
      "q": "How many duplicate tasks did three workers produce over four tasks?",
      "qKn": "ನಾಲ್ಕು ಕೆಲಸಗಳ ಮೇಲೆ ಮೂವರು ಕೆಲಸಗಾರರು ಎಷ್ಟು ನಕಲು ಕೆಲಸಗಳನ್ನು ಉಂಟುಮಾಡಿದರು?",
      "opts": [
       "0",
       "1",
       "2",
       "4"
      ],
      "optsKn": [
       "0",
       "1",
       "2",
       "4"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
