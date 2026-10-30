module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b32153e",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Claude Agent SDK: The Harness, Subagents and Sessions (Part 2 of 3) — Subagents and Parallel Fan-Out",
 "titleKn": "Claude Agent SDK: Harness, Subagents ಮತ್ತು Sessions (ಭಾಗ 2 / 3) — Subagents ಮತ್ತು ಸಮಾನಾಂತರ Fan-Out",
 "desc": "Build a Subagent and an AgentHarness that fans tasks out over threads, then measure context saved, wall time, result ordering, partial failure, timeouts that do not cancel and concurrency limits.",
 "descKn": "Subagent ಮತ್ತು threads ಮೂಲಕ ಕೆಲಸ ಹರಡುವ AgentHarness ನಿರ್ಮಿಸಿ, ನಂತರ ಉಳಿದ context, wall time, ಫಲಿತಾಂಶ ಕ್ರಮ, ಭಾಗಶಃ ವೈಫಲ್ಯ, ರದ್ದು ಮಾಡದ timeouts ಮತ್ತು ಏಕಕಾಲಿಕ ಮಿತಿಗಳನ್ನು ಅಳೆಯಿರಿ.",
 "objectives": [
  "Explain context isolation and what a summary must contain.",
  "Fan tasks out with a thread pool.",
  "Keep results in input order.",
  "Handle partial failure.",
  "Explain why a timeout is not a cancellation."
 ],
 "objectivesKn": [
  "Context ಪ್ರತ್ಯೇಕತೆ ಮತ್ತು ಸಾರಾಂಶ ಏನು ಹೊಂದಿರಬೇಕು ಎಂದು ವಿವರಿಸಿ.",
  "Thread pool ನೊಂದಿಗೆ ಕೆಲಸಗಳನ್ನು ಹರಡಿ.",
  "ಫಲಿತಾಂಶಗಳನ್ನು ಇನ್‌ಪುಟ್ ಕ್ರಮದಲ್ಲಿಡಿ.",
  "ಭಾಗಶಃ ವೈಫಲ್ಯ ನಿರ್ವಹಿಸಿ.",
  "Timeout ರದ್ದತಿ ಅಲ್ಲ ಏಕೆಂದು ವಿವರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Claude Agent SDK: The Harness, Subagents and Sessions (Part 2 of 3)",
    "textKn": "Claude Agent SDK: Harness, Subagents ಮತ್ತು Sessions (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: subagents, context isolation and parallel fan-out. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the Claude Agent SDK, not the SDK itself, and the subagents are simulated workers, so no real LLM behaviour is measured. The pasted Part 2 was cut off at its section 136, so the harness, timeouts and failure handling are rebuilt and the subagents are simulated workers. Timings are real wall-clock values and will differ slightly on other machines. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: subagents, context ಪ್ರತ್ಯೇಕತೆ ಮತ್ತು ಸಮಾನಾಂತರ fan-out. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು Claude Agent SDK ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, SDK ಸ್ವತಃ ಅಲ್ಲ, ಮತ್ತು subagents ಅನುಕರಿಸಿದ ಕೆಲಸಗಾರರು, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಭಾಗ 2 ತನ್ನ ವಿಭಾಗ 136 ರಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ harness, timeouts ಮತ್ತು ವೈಫಲ್ಯ ನಿರ್ವಹಣೆ ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ ಮತ್ತು subagents ಅನುಕರಿಸಿದ ಕೆಲಸಗಾರರು. ಸಮಯಗಳು ನಿಜವಾದ wall-clock ಮೌಲ್ಯಗಳು ಮತ್ತು ಬೇರೆ ಯಂತ್ರಗಳಲ್ಲಿ ಸ್ವಲ್ಪ ಭಿನ್ನವಾಗಬಹುದು. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Subagents Keep the Parent Context Small",
    "textKn": "Subagents ಪೋಷಕ context ಅನ್ನು ಚಿಕ್ಕದಾಗಿಡುತ್ತವೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why Delegate to a Child",
    "headingKn": "ಮಗುವಿಗೆ ಏಕೆ ನಿಯೋಜಿಸಬೇಕು",
    "bodyEn": "A subagent runs a task in its own child session, such as demo:subagent:auth-researcher. It may read large files, but the parent receives only a short result. Independent tasks (auth, billing, search) can run in parallel because none needs another's output. Part 2 builds a Subagent and an AgentHarness that fans three tasks out with a ThreadPoolExecutor and aggregates the results.",
    "bodyKn": "Subagent ತನ್ನದೇ ಮಗು session ನಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ, ಉದಾ. demo:subagent:auth-researcher. ಅದು ದೊಡ್ಡ ಫೈಲ್‌ಗಳನ್ನು ಓದಬಹುದು, ಆದರೆ ಪೋಷಕನಿಗೆ ಚಿಕ್ಕ ಫಲಿತಾಂಶ ಮಾತ್ರ ಸಿಗುತ್ತದೆ. ಸ್ವತಂತ್ರ ಕೆಲಸಗಳು (auth, billing, search) ಸಮಾನಾಂತರವಾಗಿ ಚಲಿಸಬಹುದು ಏಕೆಂದರೆ ಯಾವುದಕ್ಕೂ ಇನ್ನೊಂದರ ಫಲಿತಾಂಶ ಬೇಕಿಲ್ಲ. ಭಾಗ 2 Subagent ಮತ್ತು ThreadPoolExecutor ಮೂಲಕ ಮೂರು ಕೆಲಸಗಳನ್ನು ಹರಡಿ ಫಲಿತಾಂಶ ಕೂಡಿಸುವ AgentHarness ನಿರ್ಮಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Parent, Children and Private Context",
    "headingKn": "ಪೋಷಕ, ಮಕ್ಕಳು ಮತ್ತು ಖಾಸಗಿ context",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Fan-out with isolated child sessions</text><rect x=\"100\" y=\"26\" width=\"100\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"41\" fill=\"#e2e8f0\" text-anchor=\"middle\">Parent</text><text x=\"150\" y=\"53\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">sees summaries only</text><rect x=\"10\" y=\"110\" width=\"85\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"52.5\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">auth child</text><text x=\"52.5\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">private context</text><rect x=\"108\" y=\"110\" width=\"85\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150.5\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">billing child</text><text x=\"150.5\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">private context</text><rect x=\"205\" y=\"110\" width=\"85\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"247.5\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">search child</text><text x=\"247.5\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">private context</text><path d=\"M130,60 L55,110 M150,60 V110 M170,60 L245,110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">full file text stays in the child; the parent gets a short result</text></svg>",
    "captionEn": "Each child session holds the full text; the parent keeps only summaries.",
    "captionKn": "ಪ್ರತಿ ಮಗು session ಪೂರ್ಣ ಪಠ್ಯ ಹೊಂದಿದೆ; ಪೋಷಕ ಸಾರಾಂಶಗಳನ್ನು ಮಾತ್ರ ಇಡುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Pasted aggregation versus run_robust",
    "headingKn": "ಅಂಟಿಸಿದ aggregation ಮತ್ತು run_robust ಹೋಲಿಕೆ",
    "headers": [
     "",
     "run_pasted (as_completed)",
     "run_robust"
    ],
    "rows": [
     [
      "Result order",
      "completion order",
      "input order"
     ],
     [
      "One worker fails",
      "exception, other results lost",
      "status per worker"
     ],
     [
      "Timeout",
      "none",
      "per-result timeout (does not stop the thread)"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Fan-Out",
    "textKn": "Fan-out ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cas_2.py",
    "headingEn": "SessionStore, Subagent and AgentHarness",
    "headingKn": "SessionStore, Subagent ಮತ್ತು AgentHarness",
    "descEn": "The Subagent writes the task and the full file text into its child session, then returns a SubagentResult whose summary is short. AgentHarness.run_pasted is the lesson's pattern; run_robust is our version that keeps input order and turns exceptions and timeouts into statuses.",
    "descKn": "Subagent ಕೆಲಸ ಮತ್ತು ಪೂರ್ಣ ಫೈಲ್ ಪಠ್ಯವನ್ನು ತನ್ನ ಮಗು session ಗೆ ಬರೆದು ಚಿಕ್ಕ ಸಾರಾಂಶದ SubagentResult ಮರಳಿಸುತ್ತದೆ. AgentHarness.run_pasted ಲೆಸನ್‌ನ ಮಾದರಿ; run_robust ನಮ್ಮ ಆವೃತ್ತಿ, ಇದು ಇನ್‌ಪುಟ್ ಕ್ರಮ ಉಳಿಸಿ exceptions ಮತ್ತು timeouts ಅನ್ನು ಸ್ಥಿತಿಗಳಾಗಿ ಬದಲಿಸುತ್ತದೆ.",
    "code": "class SessionStore:\n    def __init__(self):\n        self._sessions, self._lock = {}, threading.Lock()\n\n    def append(self, session_id, message):\n        with self._lock:\n            self._sessions.setdefault(session_id, []).append(message)\n\n    def load(self, session_id):\n        with self._lock:\n            return list(self._sessions.get(session_id, []))\n\n    def list_sessions(self):\n        with self._lock:\n            return sorted(self._sessions)\n\n\n@dataclass\nclass SubagentResult:\n    name: str\n    task: str\n    summary: str\n    private_context_size: int\n    elapsed_seconds: float\n\n\nclass Subagent:\n    \"\"\"Simulated worker: reads one file, keeps the full text in its own child session, returns only a summary.\"\"\"\n\n    def __init__(self, name, registry, sessions, latency=0.0, fail=False):\n        self.name, self.registry, self.sessions, self.latency, self.fail = name, registry, sessions, latency, fail\n\n    def run(self, parent_session_id, task, file_path):\n        started = time.perf_counter()\n        child = f\"{parent_session_id}:subagent:{self.name}\"\n        self.sessions.append(child, {\"role\": \"user\", \"content\": task})\n        text = self.registry.execute(\"read_file\", path=file_path)\n        self.sessions.append(child, {\"role\": \"tool\", \"content\": text})\n        time.sleep(self.latency)\n        if self.fail:\n            raise RuntimeError(f\"{self.name} could not analyse {file_path}\")\n        words = len(text.split())\n        summary = f\"{self.name}: {words} words, first line '{text.splitlines()[0][:30]}'\"\n        self.sessions.append(child, {\"role\": \"assistant\", \"content\": summary})\n        size = sum(len(m[\"content\"]) for m in self.sessions.load(child))\n        return SubagentResult(self.name, task, summary, size, time.perf_counter() - started)\n\n\nclass AgentHarness:\n    def __init__(self, registry, sessions, max_workers=3):\n        self.registry, self.sessions, self.max_workers = registry, sessions, max_workers\n\n    def run_pasted(self, session_id, workers, tasks):\n        \"\"\"As taught: submit everything, collect with as_completed, call future.result() with no handling.\"\"\"\n        results = []\n        with ThreadPoolExecutor(max_workers=self.max_workers) as pool:\n            futures = [pool.submit(w.run, session_id, t, p) for w, (_, t, p) in zip(workers, tasks)]\n            for f in as_completed(futures):\n                results.append(f.result())\n        return results\n\n    def run_robust(self, session_id, workers, tasks, timeout=None):\n        \"\"\"Our version: results keep input order and every worker reports a status instead of raising.\"\"\"\n        out = [None] * len(workers)\n        with ThreadPoolExecutor(max_workers=self.max_workers) as pool:\n            futures = [pool.submit(w.run, session_id, t, p) for w, (_, t, p) in zip(workers, tasks)]\n            for i, f in enumerate(futures):\n                try:\n                    out[i] = (\"ok\", f.result(timeout=timeout))\n                except FutureTimeout:\n                    out[i] = (\"timeout\", None)\n                except Exception as e:\n                    out[i] = (\"error\", f\"{type(e).__name__}: {e}\")\n        return out"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cas_2.py",
    "headingEn": "main(): seven experiments",
    "headingKn": "main(): ಏಳು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() measures context saved by isolation, wall time at one, two and three workers, result ordering across 12 runs, a failing worker, a timeout that cannot stop its thread and the peak number of simultaneous file reads.",
    "descKn": "main() ಪ್ರತ್ಯೇಕತೆಯಿಂದ ಉಳಿದ context, ಒಂದು, ಎರಡು ಮತ್ತು ಮೂರು ಕೆಲಸಗಾರರೊಂದಿಗೆ wall time, 12 ಓಟಗಳಲ್ಲಿ ಫಲಿತಾಂಶ ಕ್ರಮ, ವಿಫಲ ಕೆಲಸಗಾರ, ತನ್ನ thread ನಿಲ್ಲಿಸಲಾಗದ timeout ಮತ್ತು ಏಕಕಾಲಿಕ ಫೈಲ್ ಓದುವಿಕೆಯ ಗರಿಷ್ಠ ಸಂಖ್ಯೆಯನ್ನು ಅಳೆಯುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    work = Path(tempfile.mkdtemp(prefix=\"cas2_\"))\n    old = Path.cwd()\n    os.chdir(work)\n    try:\n        reg = build_tool_registry()\n        files = {\"auth\": \"Authentication uses signed tokens.\\n\" + \"token rotation detail. \" * 400,\n                 \"billing\": \"Billing computes invoices nightly.\\n\" + \"ledger detail. \" * 300,\n                 \"search\": \"Search builds an inverted index.\\n\" + \"index shard detail. \" * 500}\n        for k, v in files.items():\n            reg.execute(\"write_file\", path=f\"agent_demo/{k}.txt\", content=v)\n        tasks = [(f\"{k}-researcher\", f\"Inspect {k}.\", f\"agent_demo/{k}.txt\") for k in files]\n\n        def make(latency=0.0, fail_name=None, store=None):\n            store = store or SessionStore()\n            return store, [Subagent(n, reg, store, latency, fail=(n == fail_name)) for n, _, _ in tasks]\n\n        section(\"1. The lesson's run: three subagents, parent sees summaries only\")\n        store, workers = make()\n        h = AgentHarness(reg, store)\n        res = h.run_pasted(\"demo\", workers, tasks)\n        for r in sorted(res, key=lambda r: r.name):\n            print(f\"{r.name:20} private context {r.private_context_size:>6} chars | {r.summary}\")\n        print(\"sessions:\", store.list_sessions())\n        print(\"parent session messages:\", len(store.load(\"demo\")), \"| aggregated summaries length:\", sum(len(r.summary) for r in res), \"chars\")\n\n        section(\"2. Genuinely measuring: context isolation saves the parent how much\")\n        private = sum(r.private_context_size for r in res)\n        summary = sum(len(r.summary) for r in res)\n        print(f\"if the parent had read all three files itself: {private:,} chars in its context; with isolation it receives {summary:,} ({summary / private:.1%})\")\n        print(\"the saving is real only because the subagent's summary is short; a summary that copies the file would give none\")\n\n        section(\"3. Genuinely measuring: sequential versus parallel fan-out (0.3s of simulated model latency each)\")\n        for workers_n in (1, 2, 3):\n            store, workers = make(latency=0.3)\n            t0 = time.perf_counter()\n            AgentHarness(reg, store, max_workers=workers_n).run_robust(\"t\", workers, tasks)\n            print(f\"max_workers={workers_n}: wall time {time.perf_counter() - t0:.2f}s\")\n        print(\"wall time tracks the number of waves (3, 2, 1) times the latency; the simulated latency is time.sleep, which releases the GIL; this does not measure CPU-bound workers\")\n\n        section(\"4. Genuinely checking: completion order versus input order\")\n        random.seed(7)\n        orders = set()\n        for _ in range(12):\n            store = SessionStore()\n            ws = [Subagent(n, reg, store, latency=random.uniform(0.0, 0.08)) for n, _, _ in tasks]\n            orders.add(tuple(r.name.split(\"-\")[0] for r in AgentHarness(reg, store).run_pasted(\"o\", ws, tasks)))\n        print(f\"12 runs of as_completed produced {len(orders)} distinct result orders:\")\n        for o in sorted(orders):\n            print(\"  \", o)\n        store, ws = make(latency=0.05)\n        robust = AgentHarness(reg, store).run_robust(\"o\", ws, tasks)\n        print(\"run_robust order:\", [r[1].name.split(\"-\")[0] for r in robust], \"(always the input order)\")\n\n        section(\"5. Genuinely checking: one failing worker\")\n        store, ws = make(latency=0.1, fail_name=\"billing-researcher\")\n        try:\n            AgentHarness(reg, store).run_pasted(\"f\", ws, tasks)\n        except RuntimeError as e:\n            print(\"pasted aggregation raised:\", e)\n        print(\"child sessions created:\", len(store.list_sessions()), \"of 3 | the exception reached the caller and the other two summaries were never returned\")\n        store, ws = make(latency=0.1, fail_name=\"billing-researcher\")\n        for status, value in AgentHarness(reg, store).run_robust(\"f\", ws, tasks):\n            print(\"  robust:\", status, \"|\", value if isinstance(value, str) else value.summary)\n\n        section(\"6. Genuinely measuring: a timeout does not stop the worker\")\n        finished = []\n\n        class Slow(Subagent):\n            def run(self, *a, **k):\n                time.sleep(0.6)\n                finished.append(self.name)\n                return super().run(*a, **k)\n        store = SessionStore()\n        ws = [Slow(\"slow-researcher\", reg, store), Subagent(\"fast-researcher\", reg, store)]\n        t0 = time.perf_counter()\n        out = AgentHarness(reg, store, max_workers=2).run_robust(\"s\", ws, tasks[:2], timeout=0.2)\n        print(\"statuses:\", [o[0] for o in out], f\"| returned to the caller after {time.perf_counter() - t0:.2f}s\")\n        print(\"slow worker finished anyway:\", finished, \"(the executor's exit waited for it; a thread cannot be cancelled once it is running)\")\n        print(\"the with-block held the harness for the full 0.6s, so the 0.2s timeout bounded the result, not the wall time\")\n\n        section(\"7. Genuinely checking: file read inside the child is not rate-limited\")\n        store, ws = make()\n        peak, lock, live = [0], threading.Lock(), [0]\n        orig = reg.get(\"read_file\").fn\n\n        def counting(path):\n            with lock:\n                live[0] += 1; peak[0] = max(peak[0], live[0])\n            time.sleep(0.05)\n            try:\n                return orig(path)\n            finally:\n                with lock:\n                    live[0] -= 1\n        reg.get(\"read_file\").fn = counting\n        AgentHarness(reg, store, max_workers=3).run_robust(\"c\", ws, tasks)\n        reg.get(\"read_file\").fn = orig\n        print(\"peak concurrent read_file calls with 3 workers:\", peak[0])\n        print(\"the registry has no per-tool concurrency limit; the pool size is the only brake\")\n    finally:\n        os.chdir(old)\n        shutil.rmtree(work, ignore_errors=True)"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. The lesson's run: three subagents, parent sees summaries only ---\nauth-researcher      private context   9320 chars | auth-researcher: 1204 words, first line 'Authentication uses signed tok'\nbilling-researcher   private context   4625 chars | billing-researcher: 604 words, first line 'Billing computes invoices nigh'\nsearch-researcher    private context  10122 chars | search-researcher: 1505 words, first line 'Search builds an inverted inde'\nsessions: ['demo:subagent:auth-researcher', 'demo:subagent:billing-researcher', 'demo:subagent:search-researcher']\nparent session messages: 0 | aggregated summaries length: 220 chars\n\n--- 2. Genuinely measuring: context isolation saves the parent how much ---\nif the parent had read all three files itself: 24,067 chars in its context; with isolation it receives 220 (0.9%)\nthe saving is real only because the subagent's summary is short; a summary that copies the file would give none\n\n--- 3. Genuinely measuring: sequential versus parallel fan-out (0.3s of simulated model latency each) ---\nmax_workers=1: wall time 0.90s\nmax_workers=2: wall time 0.60s\nmax_workers=3: wall time 0.31s\nwall time tracks the number of waves (3, 2, 1) times the latency; the simulated latency is time.sleep, which releases the GIL; this does not measure CPU-bound workers\n\n--- 4. Genuinely checking: completion order versus input order ---\n12 runs of as_completed produced 5 distinct result orders:\n   ('auth', 'billing', 'search')\n   ('auth', 'search', 'billing')\n   ('billing', 'auth', 'search')\n   ('billing', 'search', 'auth')\n   ('search', 'auth', 'billing')\nrun_robust order: ['auth', 'billing', 'search'] (always the input order)\n\n--- 5. Genuinely checking: one failing worker ---\npasted aggregation raised: billing-researcher could not analyse agent_demo/billing.txt\nchild sessions created: 3 of 3 | the exception reached the caller and the other two summaries were never returned\n  robust: ok | auth-researcher: 1204 words, first line 'Authentication uses signed tok'\n  robust: error | RuntimeError: billing-researcher could not analyse agent_demo/billing.txt\n  robust: ok | search-researcher: 1505 words, first line 'Search builds an inverted inde'\n\n--- 6. Genuinely measuring: a timeout does not stop the worker ---\nstatuses: ['timeout', 'ok'] | returned to the caller after 0.60s\nslow worker finished anyway: ['slow-researcher'] (the executor's exit waited for it; a thread cannot be cancelled once it is running)\nthe with-block held the harness for the full 0.6s, so the 0.2s timeout bounded the result, not the wall time\n\n--- 7. Genuinely checking: file read inside the child is not rate-limited ---\npeak concurrent read_file calls with 3 workers: 3\nthe registry has no per-tool concurrency limit; the pool size is the only brake"
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
    "headingEn": "Genuinely Found: Isolation Saved 99 Percent, Because the Summary Was Short",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪ್ರತ್ಯೇಕತೆ 99 ಶೇಕಡಾ ಉಳಿಸಿತು, ಏಕೆಂದರೆ ಸಾರಾಂಶ ಚಿಕ್ಕದಾಗಿತ್ತು",
    "bodyEn": "Section 2: reading all three files in the parent would have put 24,067 characters into its context; with isolation it received 220, which is 0.9 percent. The saving is a property of the short summary, not of the child session itself: a summary that copied the file would save nothing. Section 1 also shows the parent session itself has 0 messages, so the harness has to decide what the parent records about each child.",
    "bodyKn": "ವಿಭಾಗ 2: ಪೋಷಕನೇ ಮೂರೂ ಫೈಲ್‌ಗಳನ್ನು ಓದಿದ್ದರೆ ಅದರ context ಗೆ 24,067 ಅಕ್ಷರಗಳು ಸೇರುತ್ತಿದ್ದವು; ಪ್ರತ್ಯೇಕತೆಯೊಂದಿಗೆ 220 ಸಿಕ್ಕಿತು, ಅಂದರೆ 0.9 ಶೇಕಡಾ. ಉಳಿತಾಯ ಚಿಕ್ಕ ಸಾರಾಂಶದ ಗುಣ, ಮಗು session ನದಲ್ಲ: ಫೈಲ್ ನಕಲಿಸುವ ಸಾರಾಂಶ ಏನೂ ಉಳಿಸುವುದಿಲ್ಲ. ವಿಭಾಗ 1 ರಲ್ಲಿ ಪೋಷಕ session ನಲ್ಲಿ 0 ಸಂದೇಶಗಳಿವೆ, ಆದ್ದರಿಂದ ಪ್ರತಿ ಮಗುವಿನ ಬಗ್ಗೆ ಪೋಷಕ ಏನು ದಾಖಲಿಸಬೇಕೆಂದು harness ನಿರ್ಧರಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Wall Time Follows the Waves; Order Does Not Follow the Input",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅಲೆಗಳನ್ನು wall time ಅನುಸರಿಸುತ್ತದೆ; ಕ್ರಮ ಇನ್‌ಪುಟ್ ಅನುಸರಿಸುವುದಿಲ್ಲ",
    "bodyEn": "Section 3 with 0.3 seconds of simulated latency per task: one worker took 0.90 s, two took 0.60 s and three took 0.31 s, which is the number of waves times the latency. The latency is time.sleep, which releases the GIL, so this does not measure CPU-bound work. Section 4: 12 runs of as_completed produced 5 different result orders, while run_robust always returned auth, billing, search. Code that indexes the pasted result list by position would silently mix up the agents.",
    "bodyKn": "0.3 ಸೆಕೆಂಡ್ ಅನುಕರಿತ ವಿಳಂಬದ ವಿಭಾಗ 3: ಒಬ್ಬ ಕೆಲಸಗಾರ 0.90 s, ಇಬ್ಬರು 0.60 s, ಮೂವರು 0.31 s ತೆಗೆದುಕೊಂಡರು, ಇದು ಅಲೆಗಳ ಸಂಖ್ಯೆ ಗುಣಿಸು ವಿಳಂಬ. ವಿಳಂಬ time.sleep ಆಗಿದ್ದು GIL ಬಿಡುಗಡೆ ಮಾಡುತ್ತದೆ, ಆದ್ದರಿಂದ ಇದು CPU-ಬೌಂಡ್ ಕೆಲಸ ಅಳೆಯುವುದಿಲ್ಲ. ವಿಭಾಗ 4: as_completed ನ 12 ಓಟಗಳು 5 ವಿಭಿನ್ನ ಫಲಿತಾಂಶ ಕ್ರಮಗಳನ್ನು ನೀಡಿದವು, ಆದರೆ run_robust ಯಾವಾಗಲೂ auth, billing, search ನೀಡಿತು. ಅಂಟಿಸಿದ ಫಲಿತಾಂಶ ಪಟ್ಟಿಯನ್ನು ಸ್ಥಾನದಿಂದ ಸೂಚಿಸುವ ಕೋಡ್ agents ಅನ್ನು ಮೌನವಾಗಿ ಕಲಬೆರಕೆ ಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: One Failure Discards the Rest; a Timeout Does Not Cancel",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಒಂದು ವೈಫಲ್ಯ ಉಳಿದವನ್ನು ತಿರಸ್ಕರಿಸುತ್ತದೆ; timeout ರದ್ದು ಮಾಡುವುದಿಲ್ಲ",
    "bodyEn": "Section 5: when billing-researcher raised, the pasted aggregation raised the same RuntimeError to the caller and the other two summaries were never returned, although all three child sessions had been created. run_robust returned ok, error, ok instead. Section 6: with a 0.2 s timeout the statuses were timeout and ok, yet the call returned after 0.60 s and the slow worker still finished, because a running thread cannot be cancelled and the executor waits for it on exit. The timeout bounded the result, not the wall time or the work. Section 7: the registry has no per-tool concurrency limit (peak of 3 simultaneous reads); the pool size is the only brake.",
    "bodyKn": "ವಿಭಾಗ 5: billing-researcher ದೋಷ ಎತ್ತಿದಾಗ ಅಂಟಿಸಿದ aggregation ಅದೇ RuntimeError ಅನ್ನು ಕರೆದವನಿಗೆ ಎತ್ತಿತು ಮತ್ತು ಮೂರೂ ಮಗು sessions ರಚಿತವಾಗಿದ್ದರೂ ಇನ್ನೆರಡು ಸಾರಾಂಶಗಳು ಮರಳಲೇ ಇಲ್ಲ. run_robust ok, error, ok ಮರಳಿಸಿತು. ವಿಭಾಗ 6: 0.2 s timeout ಜೊತೆ ಸ್ಥಿತಿಗಳು timeout ಮತ್ತು ok ಆದರೂ ಕರೆ 0.60 s ನಂತರ ಮರಳಿತು ಮತ್ತು ನಿಧಾನ ಕೆಲಸಗಾರ ಮುಗಿಸಿತು, ಏಕೆಂದರೆ ಚಲಿಸುತ್ತಿರುವ thread ಅನ್ನು ರದ್ದುಮಾಡಲಾಗದು ಮತ್ತು executor ನಿರ್ಗಮನದಲ್ಲಿ ಅದಕ್ಕಾಗಿ ಕಾಯುತ್ತದೆ. Timeout ಫಲಿತಾಂಶವನ್ನು ಮಿತಿಗೊಳಿಸಿತು, wall time ಅಥವಾ ಕೆಲಸವನ್ನಲ್ಲ. ವಿಭಾಗ 7: registry ಗೆ ಪ್ರತಿ-tool ಏಕಕಾಲಿಕ ಮಿತಿ ಇಲ್ಲ (ಗರಿಷ್ಠ 3 ಏಕಕಾಲಿಕ ಓದುವಿಕೆ); pool ಗಾತ್ರ ಮಾತ್ರ ಬ್ರೇಕ್."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Parallel children with private contexts let a parent explore widely without carrying every file in its own window. The cost is orchestration: ordering, partial failure, cancellation and limits all have to be designed.",
    "bodyKn": "ಖಾಸಗಿ context ಇರುವ ಸಮಾನಾಂತರ ಮಕ್ಕಳು ಪೋಷಕನಿಗೆ ಪ್ರತಿ ಫೈಲ್ ಅನ್ನು ತನ್ನ window ನಲ್ಲಿ ಹೊರದೆ ವಿಶಾಲವಾಗಿ ಅನ್ವೇಷಿಸಲು ಅವಕಾಶ ನೀಡುತ್ತವೆ. ಬೆಲೆ ಸಂಯೋಜನೆ: ಕ್ರಮ, ಭಾಗಶಃ ವೈಫಲ್ಯ, ರದ್ದತಿ ಮತ್ತು ಮಿತಿಗಳನ್ನು ವಿನ್ಯಾಸ ಮಾಡಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a timeout cancels the slow subagent.\" Here the result timed out but the thread ran to completion and held the harness for the full 0.6 s.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"timeout ನಿಧಾನ subagent ಅನ್ನು ರದ್ದು ಮಾಡುತ್ತದೆ.\" ಇಲ್ಲಿ ಫಲಿತಾಂಶ ಸಮಯ ಮೀರಿತು ಆದರೆ thread ಪೂರ್ಣವಾಗಿ ಚಲಿಸಿ harness ಅನ್ನು ಪೂರ್ಣ 0.6 s ಹಿಡಿದಿಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Subagent: a worker with its own child session. Child session: parent:subagent:name. Fan-out: submitting independent tasks together. as_completed: iteration in completion order. Wave: a batch limited by max_workers. Partial success: some workers fail, the rest are kept.",
    "bodyKn": "Subagent: ತನ್ನದೇ ಮಗು session ಇರುವ ಕೆಲಸಗಾರ. ಮಗು session: parent:subagent:name. Fan-out: ಸ್ವತಂತ್ರ ಕೆಲಸಗಳನ್ನು ಒಟ್ಟಿಗೆ ಸಲ್ಲಿಸುವುದು. as_completed: ಪೂರ್ಣಗೊಂಡ ಕ್ರಮದಲ್ಲಿ ಪುನರಾವರ್ತನೆ. Wave: max_workers ನಿಂದ ಸೀಮಿತ ಗುಂಪು. Partial success: ಕೆಲವು ಕೆಲಸಗಾರರು ವಿಫಲ, ಉಳಿದವು ಉಳಿಯುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Isolation saved 24,067 to 220 characters because the summary was short. 2) Wall time was 0.90, 0.60 and 0.31 s for 1, 2 and 3 workers. 3) as_completed gave 5 different orders in 12 runs. 4) One failing worker discarded the others' results in the pasted pattern. 5) A timeout does not stop a running thread. 6) The registry has no per-tool concurrency limit.",
    "bodyKn": "1) ಸಾರಾಂಶ ಚಿಕ್ಕದಾದ ಕಾರಣ ಪ್ರತ್ಯೇಕತೆ 24,067 ರಿಂದ 220 ಅಕ್ಷರಗಳಿಗೆ ಉಳಿಸಿತು. 2) 1, 2 ಮತ್ತು 3 ಕೆಲಸಗಾರರಿಗೆ wall time 0.90, 0.60 ಮತ್ತು 0.31 s. 3) as_completed 12 ಓಟಗಳಲ್ಲಿ 5 ವಿಭಿನ್ನ ಕ್ರಮ ನೀಡಿತು. 4) ಅಂಟಿಸಿದ ಮಾದರಿಯಲ್ಲಿ ಒಬ್ಬ ವಿಫಲ ಕೆಲಸಗಾರ ಉಳಿದವರ ಫಲಿತಾಂಶ ತಿರಸ್ಕರಿಸಿತು. 5) Timeout ಚಲಿಸುತ್ತಿರುವ thread ಅನ್ನು ನಿಲ್ಲಿಸುವುದಿಲ್ಲ. 6) Registry ಗೆ ಪ್ರತಿ-tool ಏಕಕಾಲಿಕ ಮಿತಿ ಇಲ್ಲ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How much parent context did isolation save in the run?",
      "qKn": "ಓಟದಲ್ಲಿ ಪ್ರತ್ಯೇಕತೆ ಪೋಷಕ context ಎಷ್ಟು ಉಳಿಸಿತು?",
      "opts": [
       "Nothing",
       "24,067 characters became 220 (0.9 percent)",
       "Half",
       "It doubled it"
      ],
      "optsKn": [
       "ಏನೂ ಇಲ್ಲ",
       "24,067 ಅಕ್ಷರಗಳು 220 ಆದವು (0.9 ಶೇಕಡಾ)",
       "ಅರ್ಧ",
       "ದ್ವಿಗುಣಗೊಳಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why did wall time drop from 0.90 s to 0.31 s?",
      "qKn": "0.90 s ನಿಂದ 0.31 s ಗೆ wall time ಏಕೆ ಇಳಿಯಿತು?",
      "opts": [
       "The files got smaller",
       "Three waiting tasks ran at once instead of in three waves",
       "The GIL was disabled",
       "Caching"
      ],
      "optsKn": [
       "ಫೈಲ್‌ಗಳು ಚಿಕ್ಕದಾದವು",
       "ಮೂರು ಕಾಯುವ ಕೆಲಸಗಳು ಮೂರು ಅಲೆಗಳ ಬದಲು ಒಂದೇ ಬಾರಿ ಚಲಿಸಿದವು",
       "GIL ನಿಷ್ಕ್ರಿಯಗೊಂಡಿತು",
       "Caching"
      ],
      "correct": 1
     },
     {
      "q": "What did as_completed do to result order?",
      "qKn": "as_completed ಫಲಿತಾಂಶ ಕ್ರಮಕ್ಕೆ ಏನು ಮಾಡಿತು?",
      "opts": [
       "Kept the input order",
       "Produced 5 different orders in 12 runs",
       "Sorted alphabetically",
       "Reversed it"
      ],
      "optsKn": [
       "ಇನ್‌ಪುಟ್ ಕ್ರಮ ಉಳಿಸಿತು",
       "12 ಓಟಗಳಲ್ಲಿ 5 ವಿಭಿನ್ನ ಕ್ರಮ ನೀಡಿತು",
       "ಅಕ್ಷರಾನುಕ್ರಮದಲ್ಲಿ ವಿಂಗಡಿಸಿತು",
       "ಹಿಮ್ಮುಖ ಮಾಡಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What happened when one worker failed in the pasted aggregation?",
      "qKn": "ಅಂಟಿಸಿದ aggregation ನಲ್ಲಿ ಒಬ್ಬ ಕೆಲಸಗಾರ ವಿಫಲವಾದಾಗ ಏನಾಯಿತು?",
      "opts": [
       "Other results were returned",
       "The exception reached the caller and the other summaries were not returned",
       "It retried",
       "It was ignored"
      ],
      "optsKn": [
       "ಉಳಿದ ಫಲಿತಾಂಶಗಳು ಮರಳಿದವು",
       "Exception ಕರೆದವನಿಗೆ ತಲುಪಿ ಉಳಿದ ಸಾರಾಂಶಗಳು ಮರಳಲಿಲ್ಲ",
       "ಮರುಪ್ರಯತ್ನಿಸಿತು",
       "ನಿರ್ಲಕ್ಷಿಸಲಾಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "After a 0.2 s timeout, what happened to the 0.6 s worker?",
      "qKn": "0.2 s timeout ನಂತರ 0.6 s ಕೆಲಸಗಾರನಿಗೆ ಏನಾಯಿತು?",
      "opts": [
       "It was cancelled at once",
       "It kept running and the call returned after 0.60 s",
       "It restarted",
       "It returned partial output"
      ],
      "optsKn": [
       "ತಕ್ಷಣ ರದ್ದಾಯಿತು",
       "ಅದು ಚಲಿಸುತ್ತಲೇ ಇತ್ತು ಮತ್ತು ಕರೆ 0.60 s ನಂತರ ಮರಳಿತು",
       "ಮರುಪ್ರಾರಂಭವಾಯಿತು",
       "ಭಾಗಶಃ output ಮರಳಿಸಿತು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
