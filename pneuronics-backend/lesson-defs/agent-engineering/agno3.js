module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321541",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Production Agent Runtimes: Agno and Mastra Ideas (Part 3 of 3) — Request Traces, Scaling and Failure Analysis",
 "titleKn": "Production Agent Runtimes: Agno ಮತ್ತು Mastra ಕಲ್ಪನೆಗಳು (ಭಾಗ 3 / 3) — ವಿನಂತಿ Traces, ಹಿಗ್ಗುವಿಕೆ ಮತ್ತು ವೈಫಲ್ಯ ವಿಶ್ಲೇಷಣೆ",
 "desc": "Trace three requests on a durable store, run two servers against one session with and without version checks, induce six failures and inspect what the user and the stored session are left with.",
 "descKn": "ಬಾಳಿಕೆ ಬರುವ store ಮೇಲೆ ಮೂರು ವಿನಂತಿಗಳ trace ಮಾಡಿ, ಒಂದು session ವಿರುದ್ಧ ಎರಡು ಸರ್ವರ್‌ಗಳನ್ನು version ಪರಿಶೀಲನೆ ಇದ್ದು ಇಲ್ಲದೆ ಓಡಿಸಿ, ಆರು ವೈಫಲ್ಯ ಪ್ರೇರೇಪಿಸಿ ಬಳಕೆದಾರ ಮತ್ತು ಉಳಿಸಿದ session ಗೆ ಏನು ಉಳಿಯುತ್ತದೆ ಎಂದು ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Read a request trace by request id and session id.",
  "Explain why in-memory stores break horizontal scaling.",
  "Use a version check to expose lost updates.",
  "Classify failures by where they occur.",
  "Keep telemetry from failing the request."
 ],
 "objectivesKn": [
  "Request id ಮತ್ತು session id ಮೂಲಕ request trace ಓದಿ.",
  "ಇನ್-ಮೆಮೊರಿ stores ಅಡ್ಡ ಹಿಗ್ಗುವಿಕೆ ಏಕೆ ಮುರಿಯುತ್ತವೆ ಎಂದು ವಿವರಿಸಿ.",
  "Lost updates ಬಹಿರಂಗಪಡಿಸಲು version ಪರಿಶೀಲನೆ ಬಳಸಿ.",
  "ವೈಫಲ್ಯಗಳನ್ನು ಅವು ಸಂಭವಿಸುವ ಸ್ಥಳದ ಪ್ರಕಾರ ವರ್ಗೀಕರಿಸಿ.",
  "Telemetry ವಿನಂತಿ ವಿಫಲಗೊಳಿಸದಂತೆ ನೋಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Production Agent Runtimes: Agno and Mastra Ideas (Part 3 of 3)",
    "textKn": "Production Agent Runtimes: Agno ಮತ್ತು Mastra ಕಲ್ಪನೆಗಳು (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: the full request trace, scaling across servers and failure analysis. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind Agno and Mastra, not the real software, and the model is a keyword stand-in, so no real LLM behaviour is measured. The pasted Part 3 is a prose walkthrough of the Part 1 program; this lab runs that program on a real SQLite store with version-checked saves, which is our own addition. Nothing here compares Agno, Mastra, LangGraph or any provider SDK. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಪೂರ್ಣ ವಿನಂತಿ trace, ಸರ್ವರ್‌ಗಳಾದ್ಯಂತ ಹಿಗ್ಗುವಿಕೆ ಮತ್ತು ವೈಫಲ್ಯ ವಿಶ್ಲೇಷಣೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು Agno ಮತ್ತು Mastra ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಮಾದರಿ ಕೀವರ್ಡ್ ಬದಲಿ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಭಾಗ 3 ಭಾಗ 1 ರ ಪ್ರೋಗ್ರಾಂನ ಗದ್ಯ ವಿವರಣೆ; ಈ ಲ್ಯಾಬ್ ಆ ಪ್ರೋಗ್ರಾಂ ಅನ್ನು ನಿಜ SQLite store ಮೇಲೆ version-ಪರಿಶೀಲಿತ saves ಜೊತೆ ಚಲಾಯಿಸುತ್ತದೆ, ಇದು ನಮ್ಮದೇ ಸೇರ್ಪಡೆ. ಇಲ್ಲಿ Agno, Mastra, LangGraph ಅಥವಾ ಯಾವುದೇ provider SDK ಹೋಲಿಸಲ್ಪಟ್ಟಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "From Trace to Failure Analysis",
    "textKn": "Trace ನಿಂದ ವೈಫಲ್ಯ ವಿಶ್ಲೇಷಣೆಗೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "One Request, Eight Places to Fail",
    "headingKn": "ಒಂದು ವಿನಂತಿ, ವಿಫಲವಾಗಲು ಎಂಟು ಸ್ಥಳಗಳು",
    "bodyEn": "A request passes through input, session load, model, tool, workflow, persistence, the runtime and the telemetry path, and each can fail on its own. Because the Agent is disposable, a trace of load, agent.run and save spans with a request id and a session id explains a conversation turn by turn. This part runs the program on a durable store, scales it to several servers and induces each failure to see what the user and the stored session end up with.",
    "bodyKn": "ವಿನಂತಿ ಇನ್‌ಪುಟ್, session load, ಮಾದರಿ, tool, workflow, ಸಂಗ್ರಹಣೆ, runtime ಮತ್ತು telemetry ಮಾರ್ಗದ ಮೂಲಕ ಹಾದುಹೋಗುತ್ತದೆ, ಮತ್ತು ಪ್ರತಿಯೊಂದೂ ಸ್ವತಂತ್ರವಾಗಿ ವಿಫಲವಾಗಬಹುದು. Agent ಬಿಸಾಡಬಹುದಾದ ಕಾರಣ request id ಮತ್ತು session id ಇರುವ load, agent.run ಮತ್ತು save spans ನ trace ಸಂಭಾಷಣೆಯನ್ನು ತಿರುವಿನ ಪ್ರಕಾರ ವಿವರಿಸುತ್ತದೆ. ಈ ಭಾಗ ಪ್ರೋಗ್ರಾಂ ಅನ್ನು ಬಾಳಿಕೆ ಬರುವ store ಮೇಲೆ ಚಲಾಯಿಸಿ, ಹಲವು ಸರ್ವರ್‌ಗಳಿಗೆ ಹಿಗ್ಗಿಸಿ, ಪ್ರತಿ ವೈಫಲ್ಯ ಪ್ರೇರೇಪಿಸಿ ಬಳಕೆದಾರ ಮತ್ತು ಉಳಿಸಿದ session ಗೆ ಏನು ಉಳಿಯುತ್ತದೆ ಎಂದು ನೋಡುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Servers Sharing a Version-Checked Store",
    "headingKn": "ಆವೃತ್ತಿ-ಪರಿಶೀಲಿತ Store ಹಂಚಿಕೊಳ್ಳುವ ಸರ್ವರ್‌ಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Servers share nothing but the store</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">server A</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">fresh agents</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">server B</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">fresh agents</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">server C</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">fresh agents</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">shared session store</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">version-checked saves</text><path d=\"M50,64 L120,110 M150,64 V110 M250,64 L180,110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a stale save is rejected, not silently accepted</text></svg>",
    "captionEn": "Stale saves are rejected so the caller can re-read and retry.",
    "captionKn": "ಹಳೆಯ saves ತಿರಸ್ಕೃತವಾಗುತ್ತವೆ, ಆದ್ದರಿಂದ ಕರೆದವರು ಮರುಓದಿ ಮರುಪ್ರಯತ್ನಿಸಬಹುದು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Store policy under concurrency",
    "headingKn": "ಏಕಕಾಲಿಕತೆಯಲ್ಲಿ store ನೀತಿ",
    "headers": [
     "Policy",
     "Both requests report success",
     "Turn lost silently"
    ],
    "rows": [
     [
      "Last write wins",
      "yes",
      "yes"
     ],
     [
      "Version check, no retry",
      "no, the loser is told",
      "no"
     ],
     [
      "Version check with retries",
      "yes",
      "no"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Traced, Shared Runtime",
    "textKn": "Trace ಮಾಡಿದ, ಹಂಚಿಕೆಯ Runtime ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "agno_3.py",
    "headingEn": "SqliteSessions, ProcessLocal and the traced Runtime",
    "headingKn": "SqliteSessions, ProcessLocal ಮತ್ತು trace ಮಾಡಿದ Runtime",
    "descEn": "SqliteSessions saves with the version it loaded and raises ConflictError when the row has moved on. ProcessLocal is the in-memory store with the same shape. Runtime records load_session, agent.run and save_session spans, and can retry a conflicted save by re-reading the session.",
    "descKn": "SqliteSessions ತಾನು ಲೋಡ್ ಮಾಡಿದ version ನೊಂದಿಗೆ ಉಳಿಸುತ್ತದೆ ಮತ್ತು ಸಾಲು ಮುಂದೆ ಸಾಗಿದ್ದರೆ ConflictError ಎತ್ತುತ್ತದೆ. ProcessLocal ಅದೇ ಆಕಾರದ ಇನ್-ಮೆಮೊರಿ store. Runtime load_session, agent.run ಮತ್ತು save_session spans ದಾಖಲಿಸುತ್ತದೆ ಮತ್ತು session ಮರುಓದುವ ಮೂಲಕ ಸಂಘರ್ಷದ save ಮರುಪ್ರಯತ್ನಿಸಬಹುದು.",
    "code": "class ConflictError(Exception):\n    pass\n\n\nclass SqliteSessions:\n    \"\"\"Durable shared store. Each save carries the version it loaded; a stale save is rejected instead of overwriting.\"\"\"\n\n    def __init__(self, path):\n        self.path = path\n        with self._c() as c:\n            c.execute(\"CREATE TABLE IF NOT EXISTS s (id TEXT PRIMARY KEY, version INTEGER, messages TEXT)\")\n\n    def _c(self):\n        return sqlite3.connect(self.path, timeout=10)\n\n    def load(self, sid):\n        with self._c() as c:\n            row = c.execute(\"SELECT version, messages FROM s WHERE id=?\", (sid,)).fetchone()\n        return (row[0], json.loads(row[1])) if row else (0, [])\n\n    def save(self, sid, version, messages, check=True):\n        payload = json.dumps(messages)\n        with self._c() as c:\n            if not check:\n                c.execute(\"INSERT INTO s VALUES (?,?,?) ON CONFLICT(id) DO UPDATE SET version=version+1, messages=excluded.messages\",\n                          (sid, version + 1, payload))\n                return\n            if version == 0:\n                try:\n                    c.execute(\"INSERT INTO s VALUES (?,?,?)\", (sid, 1, payload))\n                    return\n                except sqlite3.IntegrityError:\n                    raise ConflictError(f\"{sid}: another request created this session first\")\n            cur = c.execute(\"UPDATE s SET version=?, messages=? WHERE id=? AND version=?\", (version + 1, payload, sid, version))\n            if cur.rowcount == 0:\n                raise ConflictError(f\"{sid}: version {version} is stale\")\n\n\nclass ProcessLocal:\n    \"\"\"In-memory store private to one server process, with the same load/save shape.\"\"\"\n\n    def __init__(self):\n        self.store = SessionStore()\n\n    def load(self, sid):\n        h = self.store.load(sid)\n        return len(h), h\n\n    def save(self, sid, version, messages, check=True):\n        self.store.save(sid, messages)\n\n\nclass Runtime:\n    def __init__(self, store, model=None):\n        self.store, self.model = store, model or ModelRouter()\n        self.trace, self._ids = [], itertools.count(1)\n\n    def span(self, rid, name, t0, **kw):\n        self.trace.append({\"request\": rid, \"span\": name, \"ms\": round((time.perf_counter() - t0) * 1000, 3), **kw})\n\n    def handle(self, session_id, message, retries=0, checked=True):\n        rid = f\"req-{next(self._ids)}\"\n        for attempt in range(retries + 1):\n            t0 = time.perf_counter()\n            version, history = self.store.load(session_id)\n            self.span(rid, \"load_session\", t0, session=session_id, messages=len(history))\n            agent = Agent(self.model, [weather_tool])\n            t1 = time.perf_counter()\n            reply = agent.run(message, history)\n            self.span(rid, \"agent.run\", t1, agent=agent.agent_id)\n            t2 = time.perf_counter()\n            history = history + [{\"role\": \"user\", \"content\": message}, {\"role\": \"assistant\", \"content\": reply}]\n            try:\n                self.store.save(session_id, version, history, check=checked)\n                self.span(rid, \"save_session\", t2, messages=len(history), attempt=attempt + 1)\n                return reply\n            except ConflictError:\n                self.span(rid, \"save_conflict\", t2, attempt=attempt + 1)\n        raise ConflictError(f\"{rid}: gave up after {retries + 1} attempts\")"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "agno_3.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() prints the trace of three requests, shows two in-memory servers disagreeing, races two servers on one durable session, induces six failures, crashes the telemetry path and times history loads at four conversation lengths.",
    "descKn": "main() ಮೂರು ವಿನಂತಿಗಳ trace ಮುದ್ರಿಸುತ್ತದೆ, ಎರಡು ಇನ್-ಮೆಮೊರಿ ಸರ್ವರ್‌ಗಳು ಭಿನ್ನವಾಗುವುದನ್ನು ತೋರಿಸುತ್ತದೆ, ಒಂದು ಬಾಳಿಕೆ ಬರುವ session ಮೇಲೆ ಎರಡು ಸರ್ವರ್‌ಗಳನ್ನು ಓಡಿಸುತ್ತದೆ, ಆರು ವೈಫಲ್ಯ ಪ್ರೇರೇಪಿಸುತ್ತದೆ, telemetry ಮಾರ್ಗ ಕುಸಿಸುತ್ತದೆ ಮತ್ತು ನಾಲ್ಕು ಸಂಭಾಷಣೆ ಉದ್ದಗಳಲ್ಲಿ ಇತಿಹಾಸ ಲೋಡ್ ಸಮಯ ಅಳೆಯುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef show(trace):\n    for r in trace:\n        extra = \" \".join(f\"{k}={v}\" for k, v in r.items() if k not in (\"request\", \"span\", \"ms\"))\n        print(f\"  {r['request']} {r['span']:<14} {extra}\")\n\n\ndef main():\n    tmp = tempfile.mkdtemp(prefix=\"agno3_\")\n    try:\n        section(\"1. Complete trace of the three-request program on a durable store\")\n        rt = Runtime(SqliteSessions(os.path.join(tmp, \"a.db\")))\n        for m in (\"Hello\", \"What is the weather in Bengaluru?\", \"And the weather in Mumbai?\"):\n            print(f\"{m!r:36} -> {rt.handle('user-1', m)}\")\n        show(rt.trace)\n        print(\"request ids are per request, session ids per conversation: three req-N values, one 'user-1'\")\n\n        section(\"2. Genuinely checking: horizontal scaling with in-memory stores\")\n        a, b = ProcessLocal(), ProcessLocal()\n        Runtime(a).handle(\"user-2\", \"What is the weather in Delhi?\")\n        print(\"server A history:\", len(a.load(\"user-2\")[1]), \"messages | server B history for the same session:\", len(b.load(\"user-2\")[1]))\n        print(\"a load balancer that sends turn 2 to B loses turn 1 unless sessions are sticky or the store is shared\")\n        shared = SqliteSessions(os.path.join(tmp, \"shared.db\"))\n        Runtime(shared).handle(\"user-2\", \"What is the weather in Delhi?\")\n        Runtime(shared).handle(\"user-2\", \"And the weather in Mumbai?\")\n        print(\"with a shared store, a second server sees turn 1 and the session now has\", len(shared.load(\"user-2\")[1]), \"messages\")\n\n        section(\"3. Genuinely measuring: lost updates across two servers (real threads, 50 ms model)\")\n        trials = 12\n        for checked, retries in ((False, 0), (True, 0), (True, 3)):\n            lost, outcomes = 0, {\"ok\": 0, \"gave up\": 0}\n            for i in range(trials):\n                store = SqliteSessions(os.path.join(tmp, f\"c_{checked}_{retries}_{i}.db\"))\n                servers = [Runtime(store, ModelRouter(0.05)) for _ in range(2)]\n                results = []\n\n                def go(s, n):\n                    try:\n                        s.handle(\"u\", f\"Hello {n}\", retries=retries, checked=checked)\n                        results.append(\"ok\")\n                    except ConflictError:\n                        results.append(\"gave up\")\n                ts = [threading.Thread(target=go, args=(s, n)) for n, s in enumerate(servers)]\n                [t.start() for t in ts]\n                [t.join() for t in ts]\n                for r in results:\n                    outcomes[r] += 1\n                if len(store.load(\"u\")[1]) < 4 and results.count(\"ok\") == 2:\n                    lost += 1\n            label = \"no version check\" if not checked else f\"version check, {retries} retries\"\n            print(f\"{label:24} trials with a silently lost turn: {lost:>2}/{trials} | request outcomes: {outcomes}\")\n        print(\"without a check both requests reported success while one turn vanished; with a check the loser is told, and a retry re-reads and recovers\")\n\n        section(\"4. Failure analysis: induce each failure and inspect the session\")\n        path_f = os.path.join(tmp, \"f.db\")\n        store = SqliteSessions(path_f)\n        base = Runtime(store)\n        base.handle(\"f\", \"Hello\")\n\n        def snap():\n            return len(store.load(\"f\")[1])\n\n        class BadModel(ModelRouter):\n            def generate(self, *a):\n                raise TimeoutError(\"provider timed out\")\n\n        class BrokenSave(SqliteSessions):\n            def save(self, *a, **k):\n                raise sqlite3.OperationalError(\"disk I/O error\")\n        cases = [\n            (\"input: empty message\", lambda: base.handle(\"f\", \"\")),\n            (\"input: 1 MB message\", lambda: base.handle(\"f\", \"weather \" + \"x\" * 1_000_000)),\n            (\"model: provider timeout\", lambda: Runtime(store, BadModel()).handle(\"f\", \"Hello\")),\n            (\"tool: city without data\", lambda: base.handle(\"f\", \"weather in Chennai\")),\n            (\"persistence: save fails\", lambda: Runtime(BrokenSave(path_f)).handle(\"f\", \"Hello\")),\n            (\"runtime: session id is None\", lambda: base.handle(None, \"Hello\")),\n        ]\n        print(f\"{'case':30} {'user sees':44} messages before -> after\")\n        for label, fn in cases:\n            before = snap()\n            try:\n                seen = str(fn())[:40]\n            except Exception as e:\n                seen = f\"{type(e).__name__}: {str(e)[:28]}\"\n            print(f\"{label:30} {seen:44} {before} -> {snap()}\")\n        with store._c() as c:\n            orphans = c.execute(\"SELECT COUNT(*) FROM s WHERE id IS NULL\").fetchone()[0]\n        print(\"rows saved under a NULL session id:\", orphans)\n        print(\"failures before the save left the stored session unchanged, but the user got a raw exception in those cases; the empty and 1 MB messages were accepted and stored, and a None session id was not rejected: it was written as an orphan row that no later request can load\")\n\n        section(\"5. Genuinely checking: an observability failure inside the request path\")\n\n        class Crashy(Runtime):\n            def span(self, *a, **k):\n                raise ConnectionError(\"collector down\")\n        try:\n            Crashy(store).handle(\"f\", \"Hello\")\n        except ConnectionError as e:\n            print(\"telemetry crash surfaced to the request:\", e, \"| stored messages still\", snap())\n        print(\"the first span call failed before the reply was returned, so a collector outage became a request failure\")\n\n        section(\"6. Genuinely measuring: history copied by every load grows with the conversation\")\n        mem = Runtime(ProcessLocal())\n        marks = {}\n        for turn in range(1, 5001):\n            mem.handle(\"bench\", \"Hello\")\n            if turn in (10, 100, 1000, 5000):\n                runs = []\n                for _ in range(7):\n                    t0 = time.perf_counter()\n                    for _ in range(200):\n                        mem.store.load(\"bench\")\n                    runs.append((time.perf_counter() - t0) / 200 * 1e6)\n                marks[turn] = min(runs)\n        for turn, us in marks.items():\n            print(f\"after {turn:>4} turns ({turn * 2:>5} messages): one load() takes {us:>6.1f} us (best of 7 batches)\")\n        print(\"the agent is cheap to create but the history it receives is not constant; long sessions need a window or a summary\")\n    finally:\n        shutil.rmtree(tmp, ignore_errors=True)"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Complete trace of the three-request program on a durable store ---\n'Hello'                              -> Hello! I can help with weather.\n'What is the weather in Bengaluru?'  -> The weather in Bengaluru is 24°C, cloudy.\n'And the weather in Mumbai?'         -> The weather in Mumbai is 30°C, humid.\n  req-1 load_session   session=user-1 messages=0\n  req-1 agent.run      agent=1\n  req-1 save_session   messages=2 attempt=1\n  req-2 load_session   session=user-1 messages=2\n  req-2 agent.run      agent=2\n  req-2 save_session   messages=4 attempt=1\n  req-3 load_session   session=user-1 messages=4\n  req-3 agent.run      agent=3\n  req-3 save_session   messages=6 attempt=1\nrequest ids are per request, session ids per conversation: three req-N values, one 'user-1'\n\n--- 2. Genuinely checking: horizontal scaling with in-memory stores ---\nserver A history: 2 messages | server B history for the same session: 0\na load balancer that sends turn 2 to B loses turn 1 unless sessions are sticky or the store is shared\nwith a shared store, a second server sees turn 1 and the session now has 4 messages\n\n--- 3. Genuinely measuring: lost updates across two servers (real threads, 50 ms model) ---\nno version check         trials with a silently lost turn: 12/12 | request outcomes: {'ok': 24, 'gave up': 0}\nversion check, 0 retries trials with a silently lost turn:  0/12 | request outcomes: {'ok': 12, 'gave up': 12}\nversion check, 3 retries trials with a silently lost turn:  0/12 | request outcomes: {'ok': 24, 'gave up': 0}\nwithout a check both requests reported success while one turn vanished; with a check the loser is told, and a retry re-reads and recovers\n\n--- 4. Failure analysis: induce each failure and inspect the session ---\ncase                           user sees                                    messages before -> after\ninput: empty message           Hello! I can help with weather.              2 -> 4\ninput: 1 MB message            Which city?                                  4 -> 6\nmodel: provider timeout        TimeoutError: provider timed out             6 -> 6\ntool: city without data        KeyError: 'chennai'                          6 -> 6\npersistence: save fails        OperationalError: disk I/O error             6 -> 6\nruntime: session id is None    Hello! I can help with weather.              6 -> 6\nrows saved under a NULL session id: 1\nfailures before the save left the stored session unchanged, but the user got a raw exception in those cases; the empty and 1 MB messages were accepted and stored, and a None session id was not rejected: it was written as an orphan row that no later request can load\n\n--- 5. Genuinely checking: an observability failure inside the request path ---\ntelemetry crash surfaced to the request: collector down | stored messages still 6\nthe first span call failed before the reply was returned, so a collector outage became a request failure\n\n--- 6. Genuinely measuring: history copied by every load grows with the conversation ---\nafter   10 turns (   20 messages): one load() takes    0.5 us (best of 7 batches)\nafter  100 turns (  200 messages): one load() takes    0.8 us (best of 7 batches)\nafter 1000 turns ( 2000 messages): one load() takes    5.9 us (best of 7 batches)\nafter 5000 turns (10000 messages): one load() takes   49.8 us (best of 7 batches)\nthe agent is cheap to create but the history it receives is not constant; long sessions need a window or a summary"
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
    "headingEn": "Genuinely Found: Silent Lost Turns Became Visible Conflicts",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮೌನ ಕಳೆದ ತಿರುವುಗಳು ಗೋಚರ ಸಂಘರ್ಷಗಳಾದವು",
    "bodyEn": "Section 3 used two servers with a 50 ms model and a real SQLite file. With last-write-wins, 12 of 12 trials silently lost a turn while both requests reported success (24 of 24 ok). With a version check and no retry, 0 of 12 lost a turn silently but 12 requests gave up with a ConflictError; with 3 retries every request succeeded and nothing was lost. Section 2: with in-memory stores, server B saw 0 messages for a session server A had already answered; with a shared store, the session reached 4 messages.",
    "bodyKn": "ವಿಭಾಗ 3 ಎರಡು ಸರ್ವರ್, 50 ms ಮಾದರಿ ಮತ್ತು ನಿಜ SQLite ಫೈಲ್ ಬಳಸಿತು. Last-write-wins ನೊಂದಿಗೆ 12 ರಲ್ಲಿ 12 ಪ್ರಯೋಗಗಳು ಎರಡೂ ವಿನಂತಿ ಯಶಸ್ಸು ವರದಿ ಮಾಡಿದರೂ (24 ರಲ್ಲಿ 24 ok) ತಿರುವು ಮೌನವಾಗಿ ಕಳೆದುಕೊಂಡವು. Version ಪರಿಶೀಲನೆ ಮತ್ತು ಮರುಪ್ರಯತ್ನ ಇಲ್ಲದೆ 12 ರಲ್ಲಿ 0 ಮೌನವಾಗಿ ತಿರುವು ಕಳೆದುಕೊಂಡವು ಆದರೆ 12 ವಿನಂತಿಗಳು ConflictError ನೊಂದಿಗೆ ಕೈಬಿಟ್ಟವು; 3 ಮರುಪ್ರಯತ್ನಗಳೊಂದಿಗೆ ಪ್ರತಿ ವಿನಂತಿ ಯಶಸ್ವಿಯಾಗಿ ಏನೂ ಕಳೆಯಲಿಲ್ಲ. ವಿಭಾಗ 2: ಇನ್-ಮೆಮೊರಿ stores ನೊಂದಿಗೆ ಸರ್ವರ್ A ಈಗಾಗಲೇ ಉತ್ತರಿಸಿದ session ಗೆ ಸರ್ವರ್ B 0 ಸಂದೇಶ ನೋಡಿತು; ಹಂಚಿಕೆಯ store ನೊಂದಿಗೆ session 4 ಸಂದೇಶ ತಲುಪಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Failures Before the Save Were Safe; Bad Input and Telemetry Were Not",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Save ಮೊದಲಿನ ವೈಫಲ್ಯಗಳು ಸುರಕ್ಷಿತ; ಕೆಟ್ಟ ಇನ್‌ಪುಟ್ ಮತ್ತು telemetry ಅಲ್ಲ",
    "bodyEn": "Section 4 induced six cases. The model timeout, the tool KeyError and the failing save left the stored session unchanged at 6 messages, because the save is the last step. But the empty message and a 1 MB message were accepted and stored (2 to 4 and 4 to 6 messages), and a None session id was not rejected: one row was written under a NULL id that no later request can load. Every failing case showed the user a raw exception. Section 5: when the span call raised ConnectionError, the request failed before returning its reply, so a collector outage became a request failure.",
    "bodyKn": "ವಿಭಾಗ 4 ಆರು ಪ್ರಕರಣಗಳನ್ನು ಪ್ರೇರೇಪಿಸಿತು. ಮಾದರಿ timeout, tool KeyError ಮತ್ತು ವಿಫಲ save ಉಳಿಸಿದ session ಅನ್ನು 6 ಸಂದೇಶಗಳಲ್ಲಿ ಬದಲಾಗದೆ ಬಿಟ್ಟವು, ಏಕೆಂದರೆ save ಕೊನೆಯ ಹಂತ. ಆದರೆ ಖಾಲಿ ಸಂದೇಶ ಮತ್ತು 1 MB ಸಂದೇಶ ಸ್ವೀಕರಿಸಿ ಉಳಿಸಲಾಯಿತು (2 ರಿಂದ 4 ಮತ್ತು 4 ರಿಂದ 6 ಸಂದೇಶಗಳು), ಮತ್ತು None session id ತಿರಸ್ಕೃತವಾಗಲಿಲ್ಲ: NULL id ಅಡಿ ಒಂದು ಸಾಲು ಬರೆಯಲಾಯಿತು, ಅದನ್ನು ಯಾವ ನಂತರದ ವಿನಂತಿಯೂ ಲೋಡ್ ಮಾಡಲಾಗದು. ಪ್ರತಿ ವಿಫಲ ಪ್ರಕರಣ ಬಳಕೆದಾರರಿಗೆ ಕಚ್ಚಾ exception ತೋರಿಸಿತು. ವಿಭಾಗ 5: span ಕರೆ ConnectionError ಎತ್ತಿದಾಗ ವಿನಂತಿ ತನ್ನ ಉತ್ತರ ಮರಳಿಸುವ ಮುನ್ನ ವಿಫಲವಾಯಿತು, ಆದ್ದರಿಂದ collector ಸ್ಥಗಿತ ವಿನಂತಿ ವೈಫಲ್ಯವಾಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Agent Is Cheap but the History It Receives Grows",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Agent ಅಗ್ಗ ಆದರೆ ಅದು ಪಡೆಯುವ ಇತಿಹಾಸ ಬೆಳೆಯುತ್ತದೆ",
    "bodyEn": "Section 6 timed one in-memory load() (a list copy, best of 7 batches) at four conversation lengths: about 0.5 microseconds at 20 messages, 0.8 at 200, 5.9 at 2,000 and 49.8 at 10,000. The copy cost grows roughly linearly with history, and the model-facing cost (tokens) grows with it too. An earlier version of this measurement showed a 56 microsecond outlier at the smallest size from warm-up, which is why the final lab takes the best of seven batches. Section 1 also shows request ids differ per request while the session id stays the same across them.",
    "bodyKn": "ವಿಭಾಗ 6 ಒಂದು ಇನ್-ಮೆಮೊರಿ load() (ಪಟ್ಟಿ ನಕಲು, 7 ಗುಂಪುಗಳಲ್ಲಿ ಉತ್ತಮ) ಅನ್ನು ನಾಲ್ಕು ಸಂಭಾಷಣೆ ಉದ್ದಗಳಲ್ಲಿ ಸಮಯ ಅಳೆಯಿತು: 20 ಸಂದೇಶಗಳಲ್ಲಿ ಸುಮಾರು 0.5 ಮೈಕ್ರೋಸೆಕೆಂಡ್, 200 ರಲ್ಲಿ 0.8, 2,000 ರಲ್ಲಿ 5.9 ಮತ್ತು 10,000 ರಲ್ಲಿ 49.8. ನಕಲು ವೆಚ್ಚ ಇತಿಹಾಸದೊಂದಿಗೆ ಸುಮಾರು ರೇಖೀಯವಾಗಿ ಬೆಳೆಯುತ್ತದೆ, ಮತ್ತು ಮಾದರಿ-ಮುಖಿ ವೆಚ್ಚ (tokens) ಕೂಡ ಅದರೊಂದಿಗೆ ಬೆಳೆಯುತ್ತದೆ. ಈ ಅಳತೆಯ ಹಿಂದಿನ ಆವೃತ್ತಿ warm-up ನಿಂದ ಚಿಕ್ಕ ಗಾತ್ರದಲ್ಲಿ 56 ಮೈಕ್ರೋಸೆಕೆಂಡ್ ವಿಚಲನ ತೋರಿಸಿತು, ಆದ್ದರಿಂದ ಅಂತಿಮ ಲ್ಯಾಬ್ ಏಳು ಗುಂಪುಗಳಲ್ಲಿ ಉತ್ತಮವನ್ನು ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ. ವಿಭಾಗ 1 ಕೂಡ request ids ಪ್ರತಿ ವಿನಂತಿಗೆ ಭಿನ್ನ ಮತ್ತು session id ಅವುಗಳಾದ್ಯಂತ ಒಂದೇ ಎಂದು ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A disposable agent scales out only if the store makes concurrent turns safe, and it is debuggable only if every request leaves a trace that does not itself endanger the request. The failure table shows what the user and the data are left with, which is what an on-call engineer needs first.",
    "bodyKn": "ಬಿಸಾಡಬಹುದಾದ agent store ಏಕಕಾಲಿಕ ತಿರುವುಗಳನ್ನು ಸುರಕ್ಷಿತಗೊಳಿಸಿದರೆ ಮಾತ್ರ ಹಿಗ್ಗುತ್ತದೆ, ಮತ್ತು ಪ್ರತಿ ವಿನಂತಿಯೂ ವಿನಂತಿಯನ್ನೇ ಅಪಾಯಕ್ಕೆ ಸಿಲುಕಿಸದ trace ಬಿಟ್ಟರೆ ಮಾತ್ರ ಡೀಬಗ್ ಮಾಡಬಹುದು. ವೈಫಲ್ಯ ಕೋಷ್ಟಕ ಬಳಕೆದಾರ ಮತ್ತು ದತ್ತಾಂಶಕ್ಕೆ ಏನು ಉಳಿಯುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ, on-call ಇಂಜಿನಿಯರ್‌ಗೆ ಮೊದಲು ಬೇಕಾದದ್ದು ಅದೇ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"stateless servers scale for free.\" They scale only when state lives in a shared store with a concurrency rule; in-memory stores split a conversation across servers, and last-write-wins lost a turn in 12 of 12 trials.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"stateless ಸರ್ವರ್‌ಗಳು ಉಚಿತವಾಗಿ ಹಿಗ್ಗುತ್ತವೆ.\" State ಏಕಕಾಲಿಕತೆ ನಿಯಮ ಇರುವ ಹಂಚಿಕೆಯ store ನಲ್ಲಿದ್ದಾಗ ಮಾತ್ರ ಅವು ಹಿಗ್ಗುತ್ತವೆ; ಇನ್-ಮೆಮೊರಿ stores ಸಂಭಾಷಣೆಯನ್ನು ಸರ್ವರ್‌ಗಳ ನಡುವೆ ಒಡೆಯುತ್ತವೆ, ಮತ್ತು last-write-wins 12 ರಲ್ಲಿ 12 ಪ್ರಯೋಗಗಳಲ್ಲಿ ತಿರುವು ಕಳೆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Request id: one request. Session id: one conversation. Span: a timed step in a trace. Optimistic concurrency: save only if the version is unchanged. ConflictError: the save was stale. Orphan row: data saved under an id nothing can load.",
    "bodyKn": "Request id: ಒಂದು ವಿನಂತಿ. Session id: ಒಂದು ಸಂಭಾಷಣೆ. Span: trace ನಲ್ಲಿ ಸಮಯ ಅಳತೆಯ ಹಂತ. Optimistic concurrency: version ಬದಲಾಗಿಲ್ಲದಿದ್ದರೆ ಮಾತ್ರ save. ConflictError: save ಹಳೆಯದಾಗಿತ್ತು. Orphan row: ಯಾವುದೂ ಲೋಡ್ ಮಾಡಲಾಗದ id ಅಡಿ ಉಳಿಸಿದ ದತ್ತಾಂಶ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A trace of load, run and save spans explains each turn. 2) In-memory stores split a session across servers. 3) Last-write-wins lost a turn in 12 of 12 trials; a version check made conflicts visible and retries recovered them. 4) Failures before the save left the session unchanged. 5) Empty and 1 MB messages were stored, and a None session id wrote an orphan row. 6) A telemetry error became a request error.",
    "bodyKn": "1) load, run ಮತ್ತು save spans ನ trace ಪ್ರತಿ ತಿರುವು ವಿವರಿಸುತ್ತದೆ. 2) ಇನ್-ಮೆಮೊರಿ stores session ಅನ್ನು ಸರ್ವರ್‌ಗಳ ನಡುವೆ ಒಡೆಯುತ್ತವೆ. 3) Last-write-wins 12 ರಲ್ಲಿ 12 ಪ್ರಯೋಗಗಳಲ್ಲಿ ತಿರುವು ಕಳೆಯಿತು; version ಪರಿಶೀಲನೆ ಸಂಘರ್ಷಗಳನ್ನು ಗೋಚರಿಸಿತು ಮತ್ತು ಮರುಪ್ರಯತ್ನಗಳು ಚೇತರಿಸಿದವು. 4) Save ಮೊದಲಿನ ವೈಫಲ್ಯಗಳು session ಬದಲಾಗದೆ ಬಿಟ್ಟವು. 5) ಖಾಲಿ ಮತ್ತು 1 MB ಸಂದೇಶಗಳು ಉಳಿದವು, ಮತ್ತು None session id orphan ಸಾಲು ಬರೆಯಿತು. 6) Telemetry ದೋಷ ವಿನಂತಿ ದೋಷವಾಯಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why did server B see 0 messages with in-memory stores?",
      "qKn": "ಇನ್-ಮೆಮೊರಿ stores ನೊಂದಿಗೆ ಸರ್ವರ್ B 0 ಸಂದೇಶ ಏಕೆ ನೋಡಿತು?",
      "opts": [
       "The session expired",
       "Each process has its own store, so A's history was not visible to B",
       "The agent was deleted",
       "The model refused"
      ],
      "optsKn": [
       "Session ಅವಧಿ ಮುಗಿಯಿತು",
       "ಪ್ರತಿ process ಗೆ ತನ್ನದೇ store, ಆದ್ದರಿಂದ A ಯ ಇತಿಹಾಸ B ಗೆ ಕಾಣಲಿಲ್ಲ",
       "Agent ಅಳಿಸಲಾಯಿತು",
       "ಮಾದರಿ ನಿರಾಕರಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What happened with last-write-wins on a shared SQLite store?",
      "qKn": "ಹಂಚಿಕೆಯ SQLite store ಮೇಲೆ last-write-wins ನೊಂದಿಗೆ ಏನಾಯಿತು?",
      "opts": [
       "Conflicts were reported",
       "A turn was silently lost in 12 of 12 trials while both requests reported success",
       "Nothing was lost",
       "The database locked forever"
      ],
      "optsKn": [
       "ಸಂಘರ್ಷಗಳು ವರದಿಯಾದವು",
       "ಎರಡೂ ವಿನಂತಿ ಯಶಸ್ಸು ವರದಿ ಮಾಡಿದರೂ 12 ರಲ್ಲಿ 12 ಪ್ರಯೋಗಗಳಲ್ಲಿ ತಿರುವು ಮೌನವಾಗಿ ಕಳೆಯಿತು",
       "ಏನೂ ಕಳೆಯಲಿಲ್ಲ",
       "ಡೇಟಾಬೇಸ್ ಶಾಶ್ವತವಾಗಿ ಲಾಕ್ ಆಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What did a version check with 0 retries do?",
      "qKn": "Version ಪರಿಶೀಲನೆ ಮತ್ತು 0 ಮರುಪ್ರಯತ್ನಗಳು ಏನು ಮಾಡಿದವು?",
      "opts": [
       "Hid the conflict",
       "Rejected the stale save: 12 requests gave up and no turn was silently lost",
       "Merged both turns",
       "Deleted the session"
      ],
      "optsKn": [
       "ಸಂಘರ್ಷ ಮರೆಮಾಡಿತು",
       "ಹಳೆಯ save ತಿರಸ್ಕರಿಸಿತು: 12 ವಿನಂತಿಗಳು ಕೈಬಿಟ್ಟವು ಮತ್ತು ಯಾವುದೇ ತಿರುವು ಮೌನವಾಗಿ ಕಳೆಯಲಿಲ್ಲ",
       "ಎರಡೂ ತಿರುವುಗಳನ್ನು ವಿಲೀನಗೊಳಿಸಿತು",
       "Session ಅಳಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why was the stored session unchanged after a model timeout?",
      "qKn": "ಮಾದರಿ timeout ನಂತರ ಉಳಿಸಿದ session ಏಕೆ ಬದಲಾಗಲಿಲ್ಲ?",
      "opts": [
       "The save is the last step and was never reached",
       "The model saved it",
       "The tool rolled back",
       "Sessions are read-only"
      ],
      "optsKn": [
       "Save ಕೊನೆಯ ಹಂತ ಮತ್ತು ತಲುಪಲೇ ಇಲ್ಲ",
       "ಮಾದರಿ ಉಳಿಸಿತು",
       "Tool ಹಿಂದಕ್ಕೆ ಸರಿಸಿತು",
       "Sessions ಓದಲು-ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "What did a None session id do?",
      "qKn": "None session id ಏನು ಮಾಡಿತು?",
      "opts": [
       "It was rejected with a clear error",
       "It wrote an orphan row under a NULL id that no later request can load",
       "It created a new user",
       "It crashed the database"
      ],
      "optsKn": [
       "ಸ್ಪಷ್ಟ ದೋಷದೊಂದಿಗೆ ತಿರಸ್ಕೃತವಾಯಿತು",
       "NULL id ಅಡಿ ಯಾವ ನಂತರದ ವಿನಂತಿಯೂ ಲೋಡ್ ಮಾಡಲಾಗದ orphan ಸಾಲು ಬರೆಯಿತು",
       "ಹೊಸ ಬಳಕೆದಾರ ರಚಿಸಿತು",
       "ಡೇಟಾಬೇಸ್ ಕುಸಿಯಿತು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
