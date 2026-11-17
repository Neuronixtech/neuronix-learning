module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215b0",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Durable Execution for Long-Running Agents (Part 1 of 3) — The Durable Engine",
 "titleKn": "ದೀರ್ಘಕಾಲ ಓಡುವ Agents ಗೆ Durable Execution (ಭಾಗ 1 / 3) — Durable ಎಂಜಿನ್",
 "desc": "Build a small durable engine, crash it and recover without re-running completed activities.",
 "descKn": "ಚಿಕ್ಕ durable ಎಂಜಿನ್ ನಿರ್ಮಿಸಿ, ಅದನ್ನು crash ಮಾಡಿ ಮತ್ತು ಪೂರ್ಣ activities ಮರುಓಡಿಸದೆ ಚೇತರಿಸಿ.",
 "objectives": [
  "Write an event log.",
  "Wrap activities for replay.",
  "Crash and recover.",
  "Reject input drift.",
  "Isolate threads."
 ],
 "objectivesKn": [
  "event ಲಾಗ್ ಬರೆಯಿರಿ.",
  "ಮರುಪ್ರದರ್ಶನಕ್ಕಾಗಿ activities ಸುತ್ತಿ.",
  "Crash ಮಾಡಿ ಚೇತರಿಸಿ.",
  "ಇನ್‌ಪುಟ್ drift ನಿರಾಕರಿಸಿ.",
  "threads ಪ್ರತ್ಯೇಕಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Durable Execution for Long-Running Agents (Part 1 of 3)",
    "textKn": "ದೀರ್ಘಕಾಲ ಓಡುವ Agents ಗೆ Durable Execution (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a JSON-backed event log written atomically, an @activity decorator with input fingerprints, run_or_replay, a crash and recovery, naive retry against durable replay, input drift, failure and attempt records and thread isolation. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind durable execution for long-running agents (event logs, activity replay, input fingerprints, crash boundaries, idempotency keys, bounded retries, approvals, durable timers, persistent budgets and memory consolidation), not the real software, and the activities are tiny functions, the payment service and the deployment are in-memory mocks or counters, files live in a temporary directory, time is simulated and no real service or language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, and the lesson says its code is a reference implementation, so the labs are our own. Part 2 of the source lesson was cut off inside its section on retry policy, and the lab covers retries from Part 3 and from the policy list that Part 2 had started. The lesson March 2026 note about a Temporal and OpenAI Agents SDK milestone and its 35-minute reliability claim are curriculum statements, cited and not verified here. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಪರಮಾಣು ರೀತಿಯಲ್ಲಿ ಬರೆದ JSON-ಆಧಾರಿತ event ಲಾಗ್, ಇನ್‌ಪುಟ್ ಫಿಂಗರ್‌ಪ್ರಿಂಟ್ ಇರುವ @activity ಡೆಕೋರೇಟರ್, run_or_replay, crash ಮತ್ತು ಚೇತರಿಕೆ, naive ಮರುಪ್ರಯತ್ನ ವಿರುದ್ಧ durable ಮರುಪ್ರದರ್ಶನ, ಇನ್‌ಪುಟ್ drift, ವೈಫಲ್ಯ ಮತ್ತು ಪ್ರಯತ್ನ ದಾಖಲೆಗಳು ಮತ್ತು thread ಪ್ರತ್ಯೇಕತೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ದೀರ್ಘಕಾಲ ಓಡುವ agents ಗಾಗಿ durable execution (event ಲಾಗ್‌ಗಳು, activity ಮರುಪ್ರದರ್ಶನ, ಇನ್‌ಪುಟ್ ಫಿಂಗರ್‌ಪ್ರಿಂಟ್‌ಗಳು, crash ಗಡಿಗಳು, idempotency ಕೀಗಳು, ಮಿತಿಯುಳ್ಳ ಮರುಪ್ರಯತ್ನ, ಅನುಮೋದನೆಗಳು, durable ಟೈಮರ್‌ಗಳು, ನಿರಂತರ ಬಜೆಟ್‌ಗಳು ಮತ್ತು ಮೆಮೊರಿ ಬಲವರ್ಧನೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು activities ಚಿಕ್ಕ ಕಾರ್ಯಗಳು, ಪಾವತಿ ಸೇವೆ ಮತ್ತು deployment ಮೆಮೊರಿ ಮಾಕ್ ಅಥವಾ ಕೌಂಟರ್‌ಗಳು, ಫೈಲ್‌ಗಳು ತಾತ್ಕಾಲಿಕ ಡೈರೆಕ್ಟರಿಯಲ್ಲಿವೆ, ಸಮಯ ಅನುಕರಿತ ಮತ್ತು ಯಾವ ನಿಜ ಸೇವೆ ಅಥವಾ ಭಾಷಾ ಮಾದರಿಯೂ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ತನ್ನ ಕೋಡ್ ಉಲ್ಲೇಖ ಅನುಷ್ಠಾನ ಎನ್ನುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ. ಮೂಲ lesson ನ ಭಾಗ 2 ಮರುಪ್ರಯತ್ನ ನೀತಿ ವಿಭಾಗದ ಒಳಗೆ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಮತ್ತು ಲ್ಯಾಬ್ ಮರುಪ್ರಯತ್ನಗಳನ್ನು ಭಾಗ 3 ಮತ್ತು ಭಾಗ 2 ಆರಂಭಿಸಿದ ನೀತಿ ಪಟ್ಟಿಯಿಂದ ಒಳಗೊಳ್ಳುತ್ತದೆ. Temporal ಮತ್ತು OpenAI Agents SDK ಮೈಲಿಗಲ್ಲಿನ ಬಗ್ಗೆ lesson ನ 2026 ಮಾರ್ಚ್ ಟಿಪ್ಪಣಿ ಮತ್ತು ಅದರ 35-ನಿಮಿಷ ವಿಶ್ವಾಸಾರ್ಹತೆ ಹೇಳಿಕೆ ಪಠ್ಯಕ್ರಮ ಹೇಳಿಕೆಗಳು, ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Do Not Run Finished Work Twice",
    "textKn": "ಮುಗಿದ ಕೆಲಸವನ್ನು ಎರಡು ಬಾರಿ ಓಡಿಸಬೇಡಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Smallest Durable Engine",
    "headingKn": "ಚಿಕ್ಕ Durable ಎಂಜಿನ್",
    "bodyEn": "A long-running agent will crash at some point, and starting from the top repeats work that may be expensive or unsafe. This part builds a small engine in which each activity is wrapped so that its inputs and result are written to a JSON event log. After a crash the workflow runs from the top again, and any activity with a completed record returns the stored result instead of running. The lab crashes a three-step workflow, recovers it and counts how many times each body really ran.",
    "bodyKn": "ದೀರ್ಘಕಾಲ ಓಡುವ agent ಯಾವಾಗಲಾದರೂ crash ಆಗುತ್ತದೆ, ಮತ್ತು ಮೇಲಿನಿಂದ ಆರಂಭಿಸುವುದು ದುಬಾರಿ ಅಥವಾ ಅಸುರಕ್ಷಿತವಾಗಬಹುದಾದ ಕೆಲಸವನ್ನು ಪುನರಾವರ್ತಿಸುತ್ತದೆ. ಈ ಭಾಗ ಪ್ರತಿ activity ಅನ್ನು ಸುತ್ತಿ ಅದರ ಇನ್‌ಪುಟ್ ಮತ್ತು ಫಲಿತಾಂಶ JSON event ಲಾಗ್‌ಗೆ ಬರೆಯುವ ಚಿಕ್ಕ ಎಂಜಿನ್ ನಿರ್ಮಿಸುತ್ತದೆ. crash ನಂತರ workflow ಮತ್ತೆ ಮೇಲಿನಿಂದ ಓಡುತ್ತದೆ, ಮತ್ತು ಪೂರ್ಣ ದಾಖಲೆ ಇರುವ ಯಾವುದೇ activity ಓಡುವ ಬದಲು ಸಂಗ್ರಹಿತ ಫಲಿತಾಂಶ ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ಲ್ಯಾಬ್ ಮೂರು-ಹಂತದ workflow ಅನ್ನು crash ಮಾಡಿ, ಚೇತರಿಸಿ, ಪ್ರತಿ ದೇಹ ನಿಜವಾಗಿ ಎಷ್ಟು ಬಾರಿ ಓಡಿತು ಎಣಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Durable Engine",
    "headingKn": "Durable ಎಂಜಿನ್",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">completed work is read back, not run again</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">activity</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">wrapped</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">event log</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">JSON on disk</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">replay</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">return stored result</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">crash</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">resume, not restart</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">completed work is read back, not run again</text></svg>",
    "captionEn": "Each activity either replays a stored result or runs and records itself.",
    "captionKn": "ಪ್ರತಿ activity ಸಂಗ್ರಹಿತ ಫಲಿತಾಂಶ ಮರುಪ್ರದರ್ಶಿಸುತ್ತದೆ ಅಥವಾ ಓಡಿ ತನ್ನನ್ನು ದಾಖಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Parts of the engine",
    "headingKn": "ಎಂಜಿನ್ ಭಾಗಗಳು",
    "headers": [
     "Part",
     "Job"
    ],
    "rows": [
     [
      "EventLog",
      "load and save a JSON list, writing through a temporary file and os.replace"
     ],
     [
      "input_fingerprint",
      "SHA-256 of the canonical JSON of the arguments"
     ],
     [
      "DurableRunner.activity",
      "replay a completed result or record started and then completed or failed"
     ],
     [
      "run_or_replay",
      "build a runner and call the workflow"
     ],
     [
      "thread_id",
      "separates the history of different workflow sessions"
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
    "filename": "de_1.py",
    "headingEn": "Event log, fingerprint, runner and workflow",
    "headingKn": "Event ಲಾಗ್, ಫಿಂಗರ್‌ಪ್ರಿಂಟ್, ರನ್ನರ್ ಮತ್ತು workflow",
    "descEn": "EventLog saves atomically, input_fingerprint hashes the arguments, DurableRunner.activity replays or records, and three_step_workflow is the example workflow with an optional crash.",
    "descKn": "EventLog ಪರಮಾಣು ರೀತಿಯಲ್ಲಿ ಉಳಿಸುತ್ತದೆ, input_fingerprint ಆರ್ಗ್ಯುಮೆಂಟ್ ಹ್ಯಾಶ್ ಮಾಡುತ್ತದೆ, DurableRunner.activity ಮರುಪ್ರದರ್ಶಿಸುತ್ತದೆ ಅಥವಾ ದಾಖಲಿಸುತ್ತದೆ, ಮತ್ತು three_step_workflow ಐಚ್ಛಿಕ crash ಇರುವ ಉದಾಹರಣೆ workflow.",
    "code": "class EventLog:\n    def __init__(self, path):\n        self.path = Path(path)\n        self.events = self._load()\n\n    def _load(self):\n        if not self.path.exists():\n            return []\n        data = json.loads(self.path.read_text(encoding=\"utf-8\"))\n        if not isinstance(data, list):\n            raise ValueError(\"event log must contain a JSON list\")\n        return data\n\n    def _save(self):\n        fd, tmp = tempfile.mkstemp(dir=self.path.parent, suffix=\".tmp\")\n        try:\n            with os.fdopen(fd, \"w\", encoding=\"utf-8\") as f:\n                json.dump(self.events, f)\n                f.flush()\n                os.fsync(f.fileno())\n            os.replace(tmp, self.path)\n        except Exception:\n            if os.path.exists(tmp):\n                os.remove(tmp)\n            raise\n\n    def append(self, event):\n        self.events.append(event)\n        try:\n            self._save()\n        except Exception:\n            self.events.pop()\n            raise\n\n    def activity_events(self, thread_id, activity_id):\n        return [e for e in self.events if e[\"thread_id\"] == thread_id and e[\"activity_id\"] == activity_id]\n\n\ndef input_fingerprint(args, kwargs):\n    payload = json.dumps({\"args\": args, \"kwargs\": kwargs}, sort_keys=True, separators=(\",\", \":\"), allow_nan=False)\n    return hashlib.sha256(payload.encode(\"utf-8\")).hexdigest()\n\n\nclass DurableRunner:\n    def __init__(self, event_log, thread_id, on_replay=None, on_execute=None):\n        self.event_log, self.thread_id = event_log, thread_id\n        self.on_replay, self.on_execute = on_replay or (lambda a: None), on_execute or (lambda a: None)\n\n    def activity(self, activity_id):\n        def decorator(func):\n            @functools.wraps(func)\n            def wrapper(*args, **kwargs):\n                fp = input_fingerprint(args, kwargs)\n                history = self.event_log.activity_events(self.thread_id, activity_id)\n                if history:\n                    if history[0][\"input_hash\"] != fp:\n                        raise ValueError(\"Activity input mismatch: \" + activity_id)\n                    if history[-1][\"status\"] == \"completed\":\n                        self.on_replay(activity_id)\n                        return history[-1][\"result\"]\n                attempt = sum(e[\"status\"] == \"started\" for e in history) + 1\n                base = {\"thread_id\": self.thread_id, \"activity_id\": activity_id, \"attempt\": attempt, \"input_hash\": fp}\n                self.event_log.append(dict(base, status=\"started\"))\n                self.on_execute(activity_id)\n                try:\n                    result = func(*args, **kwargs)\n                except Exception as error:\n                    self.event_log.append(dict(base, status=\"failed\", error=str(error)))\n                    raise\n                self.event_log.append(dict(base, status=\"completed\", result=result))\n                return result\n            return wrapper\n        return decorator\n\n\ndef run_or_replay(workflow, event_log, thread_id=\"default\", **workflow_kwargs):\n    return workflow(DurableRunner(event_log, thread_id), **workflow_kwargs)\n\n\nclass SimulatedCrash(Exception):\n    pass\n\n\ndef three_step_workflow(counters, crash_after_second=False):\n    def workflow(runner):\n        @runner.activity(\"collect_data\")\n        def collect_data():\n            counters[\"collect_data\"] = counters.get(\"collect_data\", 0) + 1\n            return {\"value\": 10}\n\n        @runner.activity(\"analyze_data\")\n        def analyze_data(data):\n            counters[\"analyze_data\"] = counters.get(\"analyze_data\", 0) + 1\n            return {\"value\": data[\"value\"] * 2}\n\n        @runner.activity(\"generate_report\")\n        def generate_report(data):\n            counters[\"generate_report\"] = counters.get(\"generate_report\", 0) + 1\n            return {\"report\": f\"Final value: {data['value']}\"}\n\n        first = collect_data()\n        second = analyze_data(first)\n        if crash_after_second:\n            raise SimulatedCrash(\"Simulated workflow crash\")\n        return generate_report(second)\n    return workflow"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "de_1.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() crashes and recovers a workflow, compares naive retry, rejects input drift, records a failure and checks thread isolation.",
    "descKn": "main() workflow ಅನ್ನು crash ಮಾಡಿ ಚೇತರಿಸಿ, naive ಮರುಪ್ರಯತ್ನ ಹೋಲಿಸಿ, ಇನ್‌ಪುಟ್ drift ನಿರಾಕರಿಸಿ, ವೈಫಲ್ಯ ದಾಖಲಿಸಿ ಮತ್ತು thread ಪ್ರತ್ಯೇಕತೆ ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    "code": "def main():\n    with tempfile.TemporaryDirectory() as d:\n        section(\"1. Genuinely running: crash after the second activity, then recover\")\n        path = Path(d) / \"events.json\"\n        counters = {}\n        try:\n            run_or_replay(three_step_workflow(counters, crash_after_second=True), EventLog(path), \"agent_001\")\n        except SimulatedCrash as e:\n            print(\"first run:\", e, \"| activity bodies run so far:\", counters)\n        log = EventLog(path)\n        print(\"events on disk after the crash:\", len(log.events))\n        result = run_or_replay(three_step_workflow(counters), log, \"agent_001\")\n        print(\"recovery result:\", result)\n        print(\"activity bodies run in total:\", counters, \"| events on disk:\", len(EventLog(path).events))\n        print(\"the recovery run replayed collect_data and analyze_data from the log and executed only generate_report, so every body ran exactly once and the log holds six events, a started and a completed record for each of three activities\")\n\n        section(\"2. Genuinely running: the same crash without durability\")\n        naive = {}\n        def naive_workflow(counters, crash):\n            a = counters.__setitem__(\"collect_data\", counters.get(\"collect_data\", 0) + 1)\n            counters[\"analyze_data\"] = counters.get(\"analyze_data\", 0) + 1\n            if crash:\n                raise SimulatedCrash(\"crash\")\n            counters[\"generate_report\"] = counters.get(\"generate_report\", 0) + 1\n        try:\n            naive_workflow(naive, True)\n        except SimulatedCrash:\n            pass\n        naive_workflow(naive, False)\n        print(\"naive retry counters:\", naive, \"| total bodies run:\", sum(naive.values()), \"| durable total:\", sum(counters.values()))\n        print(\"without a stored history the second run starts from the top, so the first two activities run twice and the total is five bodies against three; for an LLM call or a payment each avoided repeat is real cost\")\n\n        section(\"3. Genuinely running: input drift is rejected\")\n        path2 = Path(d) / \"drift.json\"\n        log2 = EventLog(path2)\n        runner = DurableRunner(log2, \"t1\")\n        @runner.activity(\"analyze\")\n        def analyze(x):\n            return x * 2\n        analyze(10)\n        try:\n            analyze(50)\n        except ValueError as e:\n            print(\"second call with different input:\", e)\n        print(\"replay with the same input returns the stored result:\", analyze(10))\n        print(\"the fingerprint of the arguments is stored with the first call, so a changed argument raises instead of silently returning the old answer; the fingerprint covers only the serialised arguments and not the function source or any model version\")\n\n        section(\"4. Genuinely running: a failing activity records its attempts\")\n        path3 = Path(d) / \"fail.json\"\n        log3 = EventLog(path3)\n        state = {\"n\": 0}\n        for attempt in (1, 2):\n            runner = DurableRunner(log3, \"t2\")\n            @runner.activity(\"flaky\")\n            def flaky():\n                state[\"n\"] += 1\n                if state[\"n\"] == 1:\n                    raise RuntimeError(\"temporary failure\")\n                return \"ok\"\n            try:\n                print(f\"run {attempt}:\", flaky())\n            except RuntimeError as e:\n                print(f\"run {attempt}: raised {e}\")\n        print(\"statuses and attempts:\", [(e[\"status\"], e[\"attempt\"]) for e in log3.events])\n        print(\"the first run left started and failed records, the second run counted attempt 2 and completed, and there is no retry limit in this engine, which a production runner must add\")\n\n        section(\"5. Genuinely running: two threads share one log\")\n        path4 = Path(d) / \"shared.json\"\n        log4 = EventLog(path4)\n        c1, c2 = {}, {}\n        run_or_replay(three_step_workflow(c1), log4, \"thread_a\")\n        run_or_replay(three_step_workflow(c2), log4, \"thread_b\")\n        run_or_replay(three_step_workflow(c1), log4, \"thread_a\")\n        print(\"thread_a bodies:\", c1, \"| thread_b bodies:\", c2, \"| events:\", len(log4.events))\n        print(\"each thread_id has its own history, so thread_b did not replay thread_a results and the repeat run of thread_a replayed everything; 12 events are two threads of six each\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: crash after the second activity, then recover ---\nfirst run: Simulated workflow crash | activity bodies run so far: {'collect_data': 1, 'analyze_data': 1}\nevents on disk after the crash: 4\nrecovery result: {'report': 'Final value: 20'}\nactivity bodies run in total: {'collect_data': 1, 'analyze_data': 1, 'generate_report': 1} | events on disk: 6\nthe recovery run replayed collect_data and analyze_data from the log and executed only generate_report, so every body ran exactly once and the log holds six events, a started and a completed record for each of three activities\n\n--- 2. Genuinely running: the same crash without durability ---\nnaive retry counters: {'collect_data': 2, 'analyze_data': 2, 'generate_report': 1} | total bodies run: 5 | durable total: 3\nwithout a stored history the second run starts from the top, so the first two activities run twice and the total is five bodies against three; for an LLM call or a payment each avoided repeat is real cost\n\n--- 3. Genuinely running: input drift is rejected ---\nsecond call with different input: Activity input mismatch: analyze\nreplay with the same input returns the stored result: 20\nthe fingerprint of the arguments is stored with the first call, so a changed argument raises instead of silently returning the old answer; the fingerprint covers only the serialised arguments and not the function source or any model version\n\n--- 4. Genuinely running: a failing activity records its attempts ---\nrun 1: raised temporary failure\nrun 2: ok\nstatuses and attempts: [('started', 1), ('failed', 1), ('started', 2), ('completed', 2)]\nthe first run left started and failed records, the second run counted attempt 2 and completed, and there is no retry limit in this engine, which a production runner must add\n\n--- 5. Genuinely running: two threads share one log ---\nthread_a bodies: {'collect_data': 1, 'analyze_data': 1, 'generate_report': 1} | thread_b bodies: {'collect_data': 1, 'analyze_data': 1, 'generate_report': 1} | events: 12\neach thread_id has its own history, so thread_b did not replay thread_a results and the repeat run of thread_a replayed everything; 12 events are two threads of six each"
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
    "headingEn": "Experiment 1: Crash after the second activity, then recover",
    "headingKn": "ಪ್ರಯೋಗ 1: Crash after the second activity, then recover",
    "bodyEn": "What it ran: Crash after the second activity, then recover. What the lab concluded: the recovery run replayed collect_data and analyze_data from the log and executed only generate_report, so every body ran exactly once and the log holds six events, a started and a completed record for each of three activities",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Crash after the second activity, then recover. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the recovery run replayed collect_data and analyze_data from the log and executed only generate_report, so every body ran exactly once and the log holds six events, a started and a completed record for each of three activities"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: crash after the second activity, then recover ---\nfirst run: Simulated workflow crash | activity bodies run so far: {'collect_data': 1, 'analyze_data': 1}\nevents on disk after the crash: 4\nrecovery result: {'report': 'Final value: 20'}\nactivity bodies run in total: {'collect_data': 1, 'analyze_data': 1, 'generate_report': 1} | events on disk: 6"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: The same crash without durability",
    "headingKn": "ಪ್ರಯೋಗ 2: The same crash without durability",
    "bodyEn": "What it ran: The same crash without durability. What the lab concluded: without a stored history the second run starts from the top, so the first two activities run twice and the total is five bodies against three; for an LLM call or a payment each avoided repeat is real cost",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The same crash without durability. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): without a stored history the second run starts from the top, so the first two activities run twice and the total is five bodies against three; for an LLM call or a payment each avoided repeat is real cost"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: the same crash without durability ---\nnaive retry counters: {'collect_data': 2, 'analyze_data': 2, 'generate_report': 1} | total bodies run: 5 | durable total: 3"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Input drift is rejected",
    "headingKn": "ಪ್ರಯೋಗ 3: Input drift is rejected",
    "bodyEn": "What it ran: Input drift is rejected. What the lab concluded: the fingerprint of the arguments is stored with the first call, so a changed argument raises instead of silently returning the old answer; the fingerprint covers only the serialised arguments and not the function source or any model version",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Input drift is rejected. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the fingerprint of the arguments is stored with the first call, so a changed argument raises instead of silently returning the old answer; the fingerprint covers only the serialised arguments and not the function source or any model version"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: input drift is rejected ---\nsecond call with different input: Activity input mismatch: analyze\nreplay with the same input returns the stored result: 20"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A failing activity records its attempts",
    "headingKn": "ಪ್ರಯೋಗ 4: A failing activity records its attempts",
    "bodyEn": "What it ran: A failing activity records its attempts. What the lab concluded: the first run left started and failed records, the second run counted attempt 2 and completed, and there is no retry limit in this engine, which a production runner must add",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A failing activity records its attempts. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the first run left started and failed records, the second run counted attempt 2 and completed, and there is no retry limit in this engine, which a production runner must add"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a failing activity records its attempts ---\nrun 1: raised temporary failure\nrun 2: ok\nstatuses and attempts: [('started', 1), ('failed', 1), ('started', 2), ('completed', 2)]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Two threads share one log",
    "headingKn": "ಪ್ರಯೋಗ 5: Two threads share one log",
    "bodyEn": "What it ran: Two threads share one log. What the lab concluded: each thread_id has its own history, so thread_b did not replay thread_a results and the repeat run of thread_a replayed everything; 12 events are two threads of six each",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Two threads share one log. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each thread_id has its own history, so thread_b did not replay thread_a results and the repeat run of thread_a replayed everything; 12 events are two threads of six each"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: two threads share one log ---\nthread_a bodies: {'collect_data': 1, 'analyze_data': 1, 'generate_report': 1} | thread_b bodies: {'collect_data': 1, 'analyze_data': 1, 'generate_report': 1} | events: 12"
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
    "headingEn": "Genuinely Found: Crash, Recovery and Naive Retry",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Crash, ಚೇತರಿಕೆ ಮತ್ತು Naive ಮರುಪ್ರಯತ್ನ",
    "bodyEn": "Section 1: after the simulated crash each of collect_data and analyze_data had run once and 4 events were on disk; recovery returned Final value: 20, ran generate_report once and left 6 events. Section 2: a naive retry ran collect_data twice, analyze_data twice and generate_report once, 5 bodies in all against 3 for the durable run.",
    "bodyKn": "ವಿಭಾಗ 1: ಅನುಕರಿತ crash ನಂತರ collect_data ಮತ್ತು analyze_data ತಲಾ ಒಮ್ಮೆ ಓಡಿದ್ದವು ಮತ್ತು ಡಿಸ್ಕ್‌ನಲ್ಲಿ 4 events ಇದ್ದವು; ಚೇತರಿಕೆ Final value: 20 ಹಿಂತಿರುಗಿಸಿತು, generate_report ಒಮ್ಮೆ ಓಡಿಸಿ 6 events ಬಿಟ್ಟಿತು. ವಿಭಾಗ 2: naive ಮರುಪ್ರಯತ್ನ collect_data ಎರಡು ಬಾರಿ, analyze_data ಎರಡು ಬಾರಿ ಮತ್ತು generate_report ಒಮ್ಮೆ ಓಡಿಸಿತು, ಒಟ್ಟು 5 ದೇಹ, durable ಓಟದ 3 ವಿರುದ್ಧ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Drift, Failures and Threads",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Drift, ವೈಫಲ್ಯಗಳು ಮತ್ತು Threads",
    "bodyEn": "Section 3: calling analyze with 50 after it completed with 10 raised Activity input mismatch: analyze, and calling it with 10 again returned the stored 20. Section 4: a failing activity left the statuses started 1, failed 1, started 2, completed 2. Section 5: two thread_ids sharing one log each ran their own three bodies, and a repeat of thread_a replayed everything, leaving 12 events.",
    "bodyKn": "ವಿಭಾಗ 3: 10 ನೊಂದಿಗೆ ಪೂರ್ಣವಾದ ನಂತರ analyze ಅನ್ನು 50 ನೊಂದಿಗೆ ಕರೆದಾಗ Activity input mismatch: analyze ಎದ್ದಿತು, ಮತ್ತು 10 ನೊಂದಿಗೆ ಮತ್ತೆ ಕರೆದಾಗ ಸಂಗ್ರಹಿತ 20 ಹಿಂತಿರುಗಿತು. ವಿಭಾಗ 4: ವಿಫಲ activity started 1, failed 1, started 2, completed 2 ಸ್ಥಿತಿಗಳನ್ನು ಬಿಟ್ಟಿತು. ವಿಭಾಗ 5: ಒಂದು ಲಾಗ್ ಹಂಚಿಕೊಂಡ ಎರಡು thread_id ಗಳು ತಲಾ ತಮ್ಮ ಮೂರು ದೇಹ ಓಡಿಸಿದವು, ಮತ್ತು thread_a ಪುನರಾವರ್ತನೆ ಎಲ್ಲವನ್ನೂ ಮರುಪ್ರದರ್ಶಿಸಿ 12 events ಬಿಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Replaying stored results turns a crash from a restart into a resume, and the fingerprint stops a changed input from quietly reusing an old answer.",
    "bodyKn": "ಸಂಗ್ರಹಿತ ಫಲಿತಾಂಶಗಳನ್ನು ಮರುಪ್ರದರ್ಶಿಸುವುದು crash ಅನ್ನು ಮರುಪ್ರಾರಂಭದಿಂದ ಮುಂದುವರಿಕೆಯಾಗಿ ಬದಲಿಸುತ್ತದೆ, ಮತ್ತು ಫಿಂಗರ್‌ಪ್ರಿಂಟ್ ಬದಲಾದ ಇನ್‌ಪುಟ್ ಹಳೆಯ ಉತ್ತರವನ್ನು ಮೌನವಾಗಿ ಮರುಬಳಸದಂತೆ ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"durable execution means the activity never runs twice.\" A started record with no completed record still leads to a second run, which part 2 of this module examines.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"durable execution ಎಂದರೆ activity ಎಂದಿಗೂ ಎರಡು ಬಾರಿ ಓಡುವುದಿಲ್ಲ.\" ಪೂರ್ಣ ದಾಖಲೆ ಇಲ್ಲದ started ದಾಖಲೆ ಇನ್ನೂ ಎರಡನೇ ಓಟಕ್ಕೆ ಕಾರಣವಾಗುತ್ತದೆ, ಇದನ್ನು ಈ ಮಾಡ್ಯೂಲ್‌ನ ಭಾಗ 2 ಪರೀಕ್ಷಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Activity: a step whose result is recorded. Event log: the persistent history. Replay: return a stored result instead of running. Fingerprint: a hash of the arguments. thread_id: identifies one workflow session.",
    "bodyKn": "Activity: ಫಲಿತಾಂಶ ದಾಖಲಿಸುವ ಹಂತ. Event log: ನಿರಂತರ ಇತಿಹಾಸ. Replay: ಓಡುವ ಬದಲು ಸಂಗ್ರಹಿತ ಫಲಿತಾಂಶ ಹಿಂತಿರುಗಿಸಿ. Fingerprint: ಆರ್ಗ್ಯುಮೆಂಟ್‌ಗಳ ಹ್ಯಾಶ್. thread_id: ಒಂದು workflow ಸೆಷನ್ ಗುರುತಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Recovery ran each body once and left 6 events. 2) Naive retry ran 5 bodies against 3. 3) A changed input raised a mismatch. 4) A failure then success recorded attempts 1 and 2. 5) Threads kept separate histories.",
    "bodyKn": "1) ಚೇತರಿಕೆ ಪ್ರತಿ ದೇಹ ಒಮ್ಮೆ ಓಡಿಸಿ 6 events ಬಿಟ್ಟಿತು. 2) naive ಮರುಪ್ರಯತ್ನ 3 ವಿರುದ್ಧ 5 ದೇಹ ಓಡಿಸಿತು. 3) ಬದಲಾದ ಇನ್‌ಪುಟ್ mismatch ಎತ್ತಿತು. 4) ವೈಫಲ್ಯದ ನಂತರ ಯಶಸ್ಸು ಪ್ರಯತ್ನ 1 ಮತ್ತು 2 ದಾಖಲಿಸಿತು. 5) Threads ಪ್ರತ್ಯೇಕ ಇತಿಹಾಸ ಇಟ್ಟವು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B de_1.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B de_1.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B de_1.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B de_1.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many activity bodies ran in total across the crash and the recovery?",
      "qKn": "crash ಮತ್ತು ಚೇತರಿಕೆಯಲ್ಲಿ ಒಟ್ಟು ಎಷ್ಟು activity ದೇಹಗಳು ಓಡಿದವು?",
      "opts": [
       "3",
       "5",
       "6",
       "2"
      ],
      "optsKn": [
       "3",
       "5",
       "6",
       "2"
      ],
      "correct": 0
     },
     {
      "q": "How many events were on disk after the recovery?",
      "qKn": "ಚೇತರಿಕೆಯ ನಂತರ ಡಿಸ್ಕ್‌ನಲ್ಲಿ ಎಷ್ಟು events ಇದ್ದವು?",
      "opts": [
       "6",
       "4",
       "12",
       "3"
      ],
      "optsKn": [
       "6",
       "4",
       "12",
       "3"
      ],
      "correct": 0
     },
     {
      "q": "How many bodies did the naive retry run?",
      "qKn": "naive ಮರುಪ್ರಯತ್ನ ಎಷ್ಟು ದೇಹ ಓಡಿಸಿತು?",
      "opts": [
       "5",
       "3",
       "2",
       "6"
      ],
      "optsKn": [
       "5",
       "3",
       "2",
       "6"
      ],
      "correct": 0
     },
     {
      "q": "What happened when analyze was called with a different input after completing?",
      "qKn": "ಪೂರ್ಣವಾದ ನಂತರ analyze ಅನ್ನು ಬೇರೆ ಇನ್‌ಪುಟ್‌ನೊಂದಿಗೆ ಕರೆದಾಗ ಏನಾಯಿತು?",
      "opts": [
       "It raised an input mismatch",
       "It returned the old result",
       "It ran silently",
       "It deleted the log"
      ],
      "optsKn": [
       "ಅದು ಇನ್‌ಪುಟ್ mismatch ಎತ್ತಿತು",
       "ಅದು ಹಳೆಯ ಫಲಿತಾಂಶ ಹಿಂತಿರುಗಿಸಿತು",
       "ಅದು ಮೌನವಾಗಿ ಓಡಿತು",
       "ಅದು ಲಾಗ್ ಅಳಿಸಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What does the fingerprint not cover?",
      "qKn": "ಫಿಂಗರ್‌ಪ್ರಿಂಟ್ ಏನನ್ನು ಒಳಗೊಳ್ಳುವುದಿಲ್ಲ?",
      "opts": [
       "Function source and model version",
       "The serialised arguments",
       "The activity id",
       "The thread id"
      ],
      "optsKn": [
       "ಕಾರ್ಯ ಮೂಲ ಮತ್ತು ಮಾದರಿ ಆವೃತ್ತಿ",
       "ಸರಣಿಕರಿಸಿದ ಆರ್ಗ್ಯುಮೆಂಟ್‌ಗಳು",
       "activity id",
       "thread id"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
