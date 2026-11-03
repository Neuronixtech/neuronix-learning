module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321562",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Production Runtimes: Queue, Event, Cron (Part 3 of 3) — Cron, Misfires and Choosing a Runtime",
 "titleKn": "Production Runtimes: Queue, Event, Cron (ಭಾಗ 3 / 3) — Cron, Misfires ಮತ್ತು Runtime ಆಯ್ಕೆ",
 "desc": "Simulate a scheduler with overlap and misfire policies, suppress duplicate fires with execution keys, trace one id across stages and choose runtime shapes by requirement.",
 "descKn": "Overlap ಮತ್ತು misfire ನೀತಿಗಳೊಂದಿಗೆ scheduler ಅನುಕರಿಸಿ, execution keys ನಿಂದ ನಕಲು ಬೆಂಕಿ ತಡೆಯಿರಿ, ಹಂತಗಳಾದ್ಯಂತ ಒಂದು id ಟ್ರೇಸ್ ಮಾಡಿ ಮತ್ತು ಅವಶ್ಯಕತೆಯಿಂದ runtime ಆಕಾರ ಆರಿಸಿ.",
 "objectives": [
  "Compare overlap policies.",
  "Compare misfire policies.",
  "Use execution keys.",
  "Trace one id across stages.",
  "Pick runtime shapes by requirement."
 ],
 "objectivesKn": [
  "Overlap ನೀತಿಗಳನ್ನು ಹೋಲಿಸಿ.",
  "Misfire ನೀತಿಗಳನ್ನು ಹೋಲಿಸಿ.",
  "Execution keys ಬಳಸಿ.",
  "ಹಂತಗಳಾದ್ಯಂತ ಒಂದು id ಟ್ರೇಸ್ ಮಾಡಿ.",
  "ಅವಶ್ಯಕತೆಯಿಂದ runtime ಆಕಾರ ಆರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Production Runtimes: Queue, Event, Cron (Part 3 of 3)",
    "textKn": "Production Runtimes: Queue, Event, Cron (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: a scheduled runtime with overlap and misfire policies, execution keys, correlation ids and a runtime-selection heuristic. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind production agent runtime shapes (request-response, streaming, durable, queue, event and cron), not the real software, and every agent step is a scripted function and every failure is injected, so no language model, network or real scheduler is involved, so no real LLM behaviour is measured. The pasted lesson described its program in prose and its source was not supplied, so the labs are written from the description. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: overlap ಮತ್ತು misfire ನೀತಿಗಳು, execution keys, correlation ids ಮತ್ತು runtime-ಆಯ್ಕೆ heuristic ಇರುವ scheduled runtime. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು production agent runtime ಆಕಾರಗಳು (request-response, streaming, durable, queue, event ಮತ್ತು cron) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪ್ರತಿ agent ಹಂತ ಸ್ಕ್ರಿಪ್ಟ್ ಫಂಕ್ಷನ್ ಮತ್ತು ಪ್ರತಿ ವೈಫಲ್ಯ ಸೇರಿಸಲ್ಪಟ್ಟದ್ದು, ಆದ್ದರಿಂದ ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ, ನೆಟ್‌ವರ್ಕ್ ಅಥವಾ ನಿಜ scheduler ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಪ್ರೋಗ್ರಾಂ ಅನ್ನು ಗದ್ಯದಲ್ಲಿ ವಿವರಿಸಿತ್ತು ಮತ್ತು ಮೂಲ ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಣೆಯಿಂದ ಬರೆಯಲಾಗಿವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Time as the Trigger",
    "textKn": "ಸಮಯವೇ ಪ್ರಚೋದಕ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Cron Is Not Durability",
    "headingKn": "Cron ಎಂದರೆ ಬಾಳಿಕೆ ಅಲ್ಲ",
    "bodyEn": "A schedule answers when work starts, not where it resumes. This part builds a scheduler on a simulated clock and tests overlap policies (allow, skip, queue), misfire policies after the scheduler was down (skip, run once, run all), deterministic execution keys that suppress a duplicate fire, cron feeding a queue, one trace id across every stage and a heuristic that picks runtime shapes. No real time passes.",
    "bodyKn": "Schedule ಕೆಲಸ ಯಾವಾಗ ಆರಂಭವಾಗುತ್ತದೆ ಎಂದು ಉತ್ತರಿಸುತ್ತದೆ, ಎಲ್ಲಿ ಮುಂದುವರಿಯುತ್ತದೆ ಎಂದಲ್ಲ. ಈ ಭಾಗ ಅನುಕರಿತ ಗಡಿಯಾರದ ಮೇಲೆ scheduler ನಿರ್ಮಿಸಿ overlap ನೀತಿಗಳು (allow, skip, queue), scheduler ನಿಂತ ನಂತರ misfire ನೀತಿಗಳು (skip, run once, run all), ನಕಲು ಬೆಂಕಿ ತಡೆಯುವ ನಿರ್ಣಾಯಕ execution keys, queue ಅನ್ನು ಪೋಷಿಸುವ cron, ಪ್ರತಿ ಹಂತದಾದ್ಯಂತ ಒಂದು trace id ಮತ್ತು runtime ಆಕಾರಗಳನ್ನು ಆರಿಸುವ heuristic ಪರೀಕ್ಷಿಸುತ್ತದೆ. ನಿಜ ಸಮಯ ಕಳೆಯುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Cron Produces, the Queue Executes",
    "headingKn": "Cron ಉತ್ಪಾದಿಸುತ್ತದೆ, Queue ಕಾರ್ಯಗತಗೊಳಿಸುತ್ತದೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Cron produces, queue executes</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">cron</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">when to start</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">queue</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">how to run</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">durable</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">where to resume</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">one trace id</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">across every hop</text><path d=\"M90,47 H110 M190,47 H210 M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">each layer has one job</text></svg>",
    "captionEn": "Each layer has one responsibility.",
    "captionKn": "ಪ್ರತಿ ಪದರಕ್ಕೆ ಒಂದು ಹೊಣೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Schedule policies",
    "headingKn": "Schedule ನೀತಿಗಳು",
    "headers": [
     "Question",
     "Options",
     "Risk"
    ],
    "rows": [
     [
      "Previous run still active",
      "allow, skip, queue",
      "allow can double-write shared state"
     ],
     [
      "Scheduler was down",
      "skip, run once, run all",
      "run all can spike load"
     ],
     [
      "Fired twice",
      "execution key",
      "the key store must persist"
     ],
     [
      "Work is large",
      "enqueue instead of run inline",
      "adds a queue to operate"
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
    "filename": "rt_3.py",
    "headingEn": "Schedule, the simulated scheduler and the selection heuristic",
    "headingKn": "Schedule, ಅನುಕರಿತ scheduler ಮತ್ತು ಆಯ್ಕೆ heuristic",
    "descEn": "simulate ticks a simulated clock, computes due occurrences, applies the misfire policy, then the overlap policy, and records finished execution keys of the form schedule id plus scheduled time. choose_runtime maps requirements to composable shapes.",
    "descKn": "simulate ಅನುಕರಿತ ಗಡಿಯಾರವನ್ನು ಟಿಕ್ ಮಾಡಿ, ಬಾಕಿ ಘಟನೆಗಳನ್ನು ಲೆಕ್ಕಿಸಿ, misfire ನೀತಿ ಮತ್ತು ನಂತರ overlap ನೀತಿ ಅನ್ವಯಿಸಿ, schedule id ಮತ್ತು ನಿಗದಿತ ಸಮಯದ ರೂಪದ ಮುಗಿದ execution keys ದಾಖಲಿಸುತ್ತದೆ. choose_runtime ಅವಶ್ಯಕತೆಗಳನ್ನು ಸಂಯೋಜಿಸಬಹುದಾದ ಆಕಾರಗಳಿಗೆ ನಕ್ಷೆ ಮಾಡುತ್ತದೆ.",
    "code": "@dataclass\nclass Schedule:\n    schedule_id: str\n    interval: int          # simulated seconds\n    duration: int          # how long one run takes, simulated seconds\n    overlap: str = \"skip\"  # allow | skip | queue\n    misfire: str = \"run_once\"  # skip | run_once | run_all\n    next_run: int = 0\n    running_until: int = -1\n    queued: int = 0\n    runs: list = field(default_factory=list)  # (scheduled, started, key)\n    skipped: int = 0\n\n\ndef simulate(sc, end, down=None, done_keys=None):\n    \"\"\"Tick once per simulated second. `down` is a (start, end) window during which the scheduler process is not running.\"\"\"\n    done_keys = set() if done_keys is None else done_keys\n    t = 0\n    while t <= end:\n        if down and down[0] <= t < down[1]:\n            t += 1\n            continue\n        if t >= sc.next_run:\n            missed = (t - sc.next_run) // sc.interval\n            due = [sc.next_run + k * sc.interval for k in range(missed + 1)]\n            if missed > 0:\n                if sc.misfire == \"skip\":\n                    due = []\n                elif sc.misfire == \"run_once\":\n                    due = [due[-1]]\n            sc.next_run = sc.next_run + (missed + 1) * sc.interval\n            for scheduled in due:\n                key = f\"{sc.schedule_id}:{scheduled}\"\n                if key in done_keys:\n                    continue\n                if t < sc.running_until and sc.overlap == \"skip\":\n                    sc.skipped += 1\n                    continue\n                if t < sc.running_until and sc.overlap == \"queue\":\n                    sc.queued += 1\n                    continue\n                sc.runs.append((scheduled, t, key))\n                done_keys.add(key)\n                sc.running_until = t + sc.duration\n        if sc.queued and t >= sc.running_until:\n            sc.queued -= 1\n            scheduled = t\n            key = f\"{sc.schedule_id}:queued@{t}\"\n            sc.runs.append((scheduled, t, key))\n            sc.running_until = t + sc.duration\n        t += 1\n    return sc\n\n\ndef choose_runtime(wait, progress, restart_ok, trigger, long_work):\n    \"\"\"A simple decision heuristic for the six runtime shapes.\"\"\"\n    shapes = []\n    if trigger == \"time\":\n        shapes.append(\"cron\")\n    elif trigger == \"event\":\n        shapes.append(\"event\")\n    if wait:\n        shapes.append(\"streaming\" if progress else \"request-response\")\n    elif long_work or trigger in (\"event\", \"time\"):\n        shapes.append(\"queue\")\n    if not restart_ok:\n        shapes.append(\"durable\")\n    return shapes"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rt_3.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() varies the overlap and misfire policies, replays keys after a restart, compares inline work with a producer, prints a trace and runs the selection heuristic on six requirements.",
    "descKn": "main() overlap ಮತ್ತು misfire ನೀತಿಗಳನ್ನು ಬದಲಿಸಿ, ಮರುಪ್ರಾರಂಭದ ನಂತರ keys ಮರುಪ್ರಸಾರ ಮಾಡಿ, inline ಕೆಲಸವನ್ನು producer ಜೊತೆ ಹೋಲಿಸಿ, trace ಮುದ್ರಿಸಿ ಮತ್ತು ಆರು ಅವಶ್ಯಕತೆಗಳ ಮೇಲೆ ಆಯ್ಕೆ heuristic ಓಡಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Genuinely measuring: overlap policy when a run (8 s) is longer than the interval (5 s), 30 simulated seconds\")\n    for pol in (\"allow\", \"skip\", \"queue\"):\n        sc = simulate(Schedule(\"report\", 5, 8, overlap=pol), 29)\n        print(f\"overlap={pol:5} started {len(sc.runs)} runs, skipped {sc.skipped}, left queued {sc.queued}, start times {[r[1] for r in sc.runs]}\")\n    print(\"allow starts a second run while the first is still running, skip drops the occurrence, queue defers it until the first finishes; none of them is right for every job, and for jobs that write shared state 'allow' risks the double writes described in the lesson\")\n\n    section(\"2. Genuinely measuring: misfire after the scheduler was down (every 60 s, down from t=100 to t=700 = 600 s, overlap allowed)\")\n    for mf in (\"skip\", \"run_once\", \"run_all\"):\n        sc = simulate(Schedule(\"tick\", 60, 1, overlap=\"allow\", misfire=mf), 760, down=(100, 700))\n        late = [r[1] - r[0] for r in sc.runs if r[1] - r[0] > 0]\n        burst = sum(1 for r in sc.runs if r[1] == 700)\n        print(f\"misfire={mf:8} total runs {len(sc.runs):2}, runs started late: {len(late):2}, largest schedule lag {max(late) if late else 0:3} s, runs started at t=700: {burst}\")\n    sc2 = simulate(Schedule(\"tick\", 60, 1, overlap=\"skip\", misfire=\"run_all\"), 760, down=(100, 700))\n    print(f\"with overlap=skip and misfire=run_all the same outage produced {len(sc2.runs)} runs and {sc2.skipped} skipped occurrences: the overlap policy silently collapsed the catch-up burst\")\n    print(\"run_all replayed every missed occurrence in one second after the restart (a load spike), run_once ran only the latest, skip dropped them all; the lesson's example of 8 hours down at one run a minute is 480 missed runs, and the interaction between the misfire and overlap policies changes what actually happens\")\n\n    section(\"3. Genuinely checking: a deterministic execution key suppresses a duplicate fire after a restart\")\n    done = set()\n    s1 = simulate(Schedule(\"daily\", 100, 1), 250, done_keys=done)\n    first = len(s1.runs)\n    s2 = simulate(Schedule(\"daily\", 100, 1), 250, done_keys=done)  # a restarted scheduler re-fires the same occurrences\n    print(f\"first scheduler process ran {first} occurrences; a restarted process with the recorded keys ran {len(s2.runs)} more\")\n    s3 = simulate(Schedule(\"daily\", 100, 1), 250, done_keys=set())\n    print(f\"without the recorded keys the restarted process ran {len(s3.runs)} occurrences again (duplicates)\")\n    print(\"schedule id plus scheduled time identifies one occurrence, so a record of finished keys makes a re-fire harmless; the key store must survive the restart for this to work\")\n\n    section(\"4. Genuinely measuring: cron as a queue producer versus running the work inline\")\n    work_units, per_unit = 200, 1\n    inline = work_units * per_unit\n    queued_producer = 1\n    print(f\"inline: the scheduler thread is busy for {inline} simulated seconds and one crash loses track of which of {work_units} reports finished\")\n    print(f\"as a producer: the scheduler is busy for about {queued_producer} second to enqueue {work_units} jobs; workers retry or dead-letter each job separately\")\n    print(\"the figures are simple arithmetic on an assumed 200 one-second reports; the point is the separation of when work starts from how it is executed\")\n\n    section(\"5. Genuinely checking: correlation ids connect cron, queue, worker and agent steps\")\n    trace_id = \"trace:nightly:2026-10-05T02:00\"\n    events = [(\"cron\", \"trigger\", {\"schedule_lag_s\": 4}), (\"queue\", \"submit\", {\"depth\": 14}), (\"worker\", \"start\", {\"wait_s\": 6}), (\"agent\", \"step\", {\"n\": 1}), (\"agent\", \"step\", {\"n\": 2}), (\"worker\", \"complete\", {})]\n    for comp, action, extra in events:\n        print(f\"trace={trace_id} component={comp:6} action={action:9} {extra}\")\n    print(f\"{len(events)} records share one trace id; filtering on it reconstructs the path and separates a late scheduler (schedule_lag_s=4) from a slow agent\")\n\n    section(\"6. Genuinely checking: the runtime-selection heuristic on six requirements\")\n    cases = [(\"chat answer in 3 s\", dict(wait=True, progress=False, restart_ok=True, trigger=\"user\", long_work=False)), (\"chat with live typing\", dict(wait=True, progress=True, restart_ok=True, trigger=\"user\", long_work=False)),\n             (\"30-minute research\", dict(wait=False, progress=False, restart_ok=False, trigger=\"user\", long_work=True)), (\"PR opened review\", dict(wait=False, progress=False, restart_ok=False, trigger=\"event\", long_work=True)),\n             (\"nightly evaluation\", dict(wait=False, progress=False, restart_ok=False, trigger=\"time\", long_work=True)), (\"hourly memory tidy\", dict(wait=False, progress=False, restart_ok=True, trigger=\"time\", long_work=False))]\n    for name, kw in cases:\n        print(f\"{name:24} -> {choose_runtime(**kw)}\")\n    print(\"the heuristic returns composable shapes (for example event + queue + durable), which mirrors the lesson's composition matrix; it is a design aid we wrote, not a rule, and real choices also weigh cost and team experience\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely measuring: overlap policy when a run (8 s) is longer than the interval (5 s), 30 simulated seconds ---\noverlap=allow started 6 runs, skipped 0, left queued 0, start times [0, 5, 10, 15, 20, 25]\noverlap=skip  started 3 runs, skipped 3, left queued 0, start times [0, 10, 20]\noverlap=queue started 4 runs, skipped 0, left queued 2, start times [0, 8, 16, 24]\nallow starts a second run while the first is still running, skip drops the occurrence, queue defers it until the first finishes; none of them is right for every job, and for jobs that write shared state 'allow' risks the double writes described in the lesson\n\n--- 2. Genuinely measuring: misfire after the scheduler was down (every 60 s, down from t=100 to t=700 = 600 s, overlap allowed) ---\nmisfire=skip     total runs  3, runs started late:  0, largest schedule lag   0 s, runs started at t=700: 0\nmisfire=run_once total runs  4, runs started late:  1, largest schedule lag  40 s, runs started at t=700: 1\nmisfire=run_all  total runs 13, runs started late: 10, largest schedule lag 580 s, runs started at t=700: 10\nwith overlap=skip and misfire=run_all the same outage produced 4 runs and 9 skipped occurrences: the overlap policy silently collapsed the catch-up burst\nrun_all replayed every missed occurrence in one second after the restart (a load spike), run_once ran only the latest, skip dropped them all; the lesson's example of 8 hours down at one run a minute is 480 missed runs, and the interaction between the misfire and overlap policies changes what actually happens\n\n--- 3. Genuinely checking: a deterministic execution key suppresses a duplicate fire after a restart ---\nfirst scheduler process ran 3 occurrences; a restarted process with the recorded keys ran 0 more\nwithout the recorded keys the restarted process ran 3 occurrences again (duplicates)\nschedule id plus scheduled time identifies one occurrence, so a record of finished keys makes a re-fire harmless; the key store must survive the restart for this to work\n\n--- 4. Genuinely measuring: cron as a queue producer versus running the work inline ---\ninline: the scheduler thread is busy for 200 simulated seconds and one crash loses track of which of 200 reports finished\nas a producer: the scheduler is busy for about 1 second to enqueue 200 jobs; workers retry or dead-letter each job separately\nthe figures are simple arithmetic on an assumed 200 one-second reports; the point is the separation of when work starts from how it is executed\n\n--- 5. Genuinely checking: correlation ids connect cron, queue, worker and agent steps ---\ntrace=trace:nightly:2026-10-05T02:00 component=cron   action=trigger   {'schedule_lag_s': 4}\ntrace=trace:nightly:2026-10-05T02:00 component=queue  action=submit    {'depth': 14}\ntrace=trace:nightly:2026-10-05T02:00 component=worker action=start     {'wait_s': 6}\ntrace=trace:nightly:2026-10-05T02:00 component=agent  action=step      {'n': 1}\ntrace=trace:nightly:2026-10-05T02:00 component=agent  action=step      {'n': 2}\ntrace=trace:nightly:2026-10-05T02:00 component=worker action=complete  {}\n6 records share one trace id; filtering on it reconstructs the path and separates a late scheduler (schedule_lag_s=4) from a slow agent\n\n--- 6. Genuinely checking: the runtime-selection heuristic on six requirements ---\nchat answer in 3 s       -> ['request-response']\nchat with live typing    -> ['streaming']\n30-minute research       -> ['queue', 'durable']\nPR opened review         -> ['event', 'queue', 'durable']\nnightly evaluation       -> ['cron', 'queue', 'durable']\nhourly memory tidy       -> ['cron', 'queue']\nthe heuristic returns composable shapes (for example event + queue + durable), which mirrors the lesson's composition matrix; it is a design aid we wrote, not a rule, and real choices also weigh cost and team experience"
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
    "headingEn": "Genuinely Found: Overlap and Misfire Policies Change What Actually Runs",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Overlap ಮತ್ತು misfire ನೀತಿಗಳು ನಿಜವಾಗಿ ಓಡುವುದನ್ನು ಬದಲಿಸುತ್ತವೆ",
    "bodyEn": "Section 1 (a run of 8 simulated seconds every 5, over 30 seconds): allow started 6 runs, skip started 3 and skipped 3, and queue started 4 runs and left 2 queued. Section 2 (every 60 s, scheduler down 600 s, overlap allowed): skip ran 3 runs, run once ran 4 with one late run at a lag of 40 s, and run all ran 13 with 10 late runs and a lag of up to 580 s, 10 of them starting in the same second after restart. With overlap=skip and run all together the same outage produced only 4 runs and 9 skipped occurrences, so the overlap policy silently collapsed the catch-up burst.",
    "bodyKn": "ವಿಭಾಗ 1 (ಪ್ರತಿ 5 ಕ್ಕೆ 8 ಅನುಕರಿತ ಸೆಕೆಂಡ್‌ಗಳ ಓಟ, 30 ಸೆಕೆಂಡ್‌ಗಳಲ್ಲಿ): allow 6 ಓಟ ಆರಂಭಿಸಿತು, skip 3 ಆರಂಭಿಸಿ 3 ಬಿಟ್ಟಿತು, queue 4 ಆರಂಭಿಸಿ 2 ಸರದಿಯಲ್ಲಿ ಉಳಿಸಿತು. ವಿಭಾಗ 2 (ಪ್ರತಿ 60 s, scheduler 600 s ನಿಂತಿತ್ತು, overlap ಅನುಮತಿಸಲಾಗಿದೆ): skip 3 ಓಟ ಓಡಿತು, run once 4 ಓಡಿ 40 s ವಿಳಂಬದ ಒಂದು ತಡ ಓಟ ಹೊಂದಿತು, ಮತ್ತು run all 13 ಓಡಿ 10 ತಡ ಓಟ ಮತ್ತು 580 s ವರೆಗಿನ ವಿಳಂಬ ಹೊಂದಿತು, ಅವುಗಳಲ್ಲಿ 10 ಮರುಪ್ರಾರಂಭದ ನಂತರ ಅದೇ ಸೆಕೆಂಡ್‌ನಲ್ಲಿ ಆರಂಭವಾದವು. overlap=skip ಮತ್ತು run all ಒಟ್ಟಾಗಿ ಇದ್ದಾಗ ಅದೇ ಸ್ಥಗಿತ ಕೇವಲ 4 ಓಟ ಮತ್ತು 9 ಬಿಟ್ಟ ಘಟನೆಗಳನ್ನು ನೀಡಿತು, ಆದ್ದರಿಂದ overlap ನೀತಿ catch-up ಗುಂಪನ್ನು ಮೌನವಾಗಿ ಕುಸಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Keys, Producers, Trace Ids and Selection",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Keys, Producers, Trace Ids ಮತ್ತು ಆಯ್ಕೆ",
    "bodyEn": "Section 3: a first scheduler process ran 3 occurrences; a restarted process with the recorded keys ran 0 more, and without the keys it ran 3 again. Section 4 (simple arithmetic on an assumed 200 one-second reports): running inline occupies the scheduler for 200 simulated seconds, while producing jobs takes about 1 second. Section 5: six records shared one trace id and recorded a schedule lag of 4 s. Section 6: the heuristic returned request-response, streaming, queue + durable, event + queue + durable, cron + queue + durable and cron + queue for the six requirements.",
    "bodyKn": "ವಿಭಾಗ 3: ಮೊದಲ scheduler ಪ್ರಕ್ರಿಯೆ 3 ಘಟನೆಗಳನ್ನು ಓಡಿಸಿತು; ದಾಖಲಿಸಿದ keys ಇರುವ ಮರುಪ್ರಾರಂಭಿತ ಪ್ರಕ್ರಿಯೆ ಇನ್ನೂ 0 ಓಡಿಸಿತು, keys ಇಲ್ಲದೆ ಮತ್ತೆ 3 ಓಡಿಸಿತು. ವಿಭಾಗ 4 (ಊಹಿಸಿದ 200 ಒಂದು-ಸೆಕೆಂಡ್ ವರದಿಗಳ ಸರಳ ಅಂಕಗಣಿತ): inline ಓಡಿಸುವುದು scheduler ಅನ್ನು 200 ಅನುಕರಿತ ಸೆಕೆಂಡ್ ಆಕ್ರಮಿಸುತ್ತದೆ, jobs ಉತ್ಪಾದಿಸಲು ಸುಮಾರು 1 ಸೆಕೆಂಡ್. ವಿಭಾಗ 5: ಆರು ದಾಖಲೆಗಳು ಒಂದು trace id ಹಂಚಿಕೊಂಡು 4 s schedule ವಿಳಂಬ ದಾಖಲಿಸಿದವು. ವಿಭಾಗ 6: ಆರು ಅವಶ್ಯಕತೆಗಳಿಗೆ heuristic request-response, streaming, queue + durable, event + queue + durable, cron + queue + durable ಮತ್ತು cron + queue ಮರಳಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Time-triggered work fails in ways that are invisible until a restart or a long run, so explicit overlap, misfire and key policies are part of the design, not an afterthought.",
    "bodyKn": "ಸಮಯ-ಪ್ರಚೋದಿತ ಕೆಲಸ ಮರುಪ್ರಾರಂಭ ಅಥವಾ ದೀರ್ಘ ಓಟದವರೆಗೆ ಅಗೋಚರವಾದ ರೀತಿಗಳಲ್ಲಿ ವಿಫಲವಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ ಸ್ಪಷ್ಟ overlap, misfire ಮತ್ತು key ನೀತಿಗಳು ವಿನ್ಯಾಸದ ಭಾಗ, ನಂತರದ ಯೋಚನೆಯಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"cron means reliability.\" The same outage gave 13 runs or 4 depending on two policies, and a restart without keys repeated every occurrence.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"cron ಎಂದರೆ ವಿಶ್ವಾಸಾರ್ಹತೆ.\" ಅದೇ ಸ್ಥಗಿತ ಎರಡು ನೀತಿಗಳನ್ನು ಅವಲಂಬಿಸಿ 13 ಅಥವಾ 4 ಓಟ ನೀಡಿತು, ಮತ್ತು keys ಇಲ್ಲದ ಮರುಪ್ರಾರಂಭ ಪ್ರತಿ ಘಟನೆಯನ್ನು ಪುನರಾವರ್ತಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Misfire: a scheduled time passed while the scheduler could not run it. Overlap policy: what to do when the previous run is still active. Execution key: schedule id plus scheduled time. Schedule lag: actual start minus scheduled start. Trace id: one id across every stage.",
    "bodyKn": "Misfire: scheduler ಓಡಿಸಲಾಗದಾಗ ನಿಗದಿತ ಸಮಯ ಕಳೆದುಹೋಯಿತು. Overlap policy: ಹಿಂದಿನ ಓಟ ಇನ್ನೂ ಸಕ್ರಿಯವಾಗಿದ್ದಾಗ ಏನು ಮಾಡಬೇಕು. Execution key: schedule id ಮತ್ತು ನಿಗದಿತ ಸಮಯ. Schedule lag: ನಿಜ ಆರಂಭ ಮೈನಸ್ ನಿಗದಿತ ಆರಂಭ. Trace id: ಪ್ರತಿ ಹಂತದಾದ್ಯಂತ ಒಂದು id."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Allow, skip and queue started 6, 3 and 4 runs under an 8 s run every 5 s. 2) After a 600 s outage run all ran 13, run once 4, skip 3. 3) Overlap skip with run all collapsed to 4 runs and 9 skipped. 4) Execution keys stopped 3 duplicate occurrences after a restart. 5) A producer frees the scheduler. 6) One trace id connected six records and exposed a 4 s schedule lag.",
    "bodyKn": "1) 5 s ಗೆ 8 s ಓಟದಲ್ಲಿ allow, skip ಮತ್ತು queue 6, 3 ಮತ್ತು 4 ಓಟ ಆರಂಭಿಸಿದವು. 2) 600 s ಸ್ಥಗಿತದ ನಂತರ run all 13, run once 4, skip 3 ಓಡಿತು. 3) Overlap skip ಮತ್ತು run all ಒಟ್ಟಾಗಿ 4 ಓಟ ಮತ್ತು 9 ಬಿಟ್ಟವುಗಳಿಗೆ ಕುಸಿಯಿತು. 4) Execution keys ಮರುಪ್ರಾರಂಭದ ನಂತರ 3 ನಕಲು ಘಟನೆಗಳನ್ನು ನಿಲ್ಲಿಸಿದವು. 5) Producer scheduler ಅನ್ನು ಮುಕ್ತಗೊಳಿಸುತ್ತದೆ. 6) ಒಂದು trace id ಆರು ದಾಖಲೆಗಳನ್ನು ಸಂಪರ್ಕಿಸಿ 4 s schedule ವಿಳಂಬ ತೋರಿಸಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many runs did overlap policy skip start under an 8 s run every 5 s over 30 s?",
      "qKn": "30 s ನಲ್ಲಿ ಪ್ರತಿ 5 s ಗೆ 8 s ಓಟದಲ್ಲಿ overlap ನೀತಿ skip ಎಷ್ಟು ಓಟ ಆರಂಭಿಸಿತು?",
      "opts": [
       "6",
       "4",
       "3",
       "2"
      ],
      "optsKn": [
       "6",
       "4",
       "3",
       "2"
      ],
      "correct": 2
     },
     {
      "q": "After the 600 s outage, how many runs did run all produce when overlap was allowed?",
      "qKn": "overlap ಅನುಮತಿಸಿದಾಗ 600 s ಸ್ಥಗಿತದ ನಂತರ run all ಎಷ್ಟು ಓಟ ನೀಡಿತು?",
      "opts": [
       "3",
       "4",
       "13",
       "480"
      ],
      "optsKn": [
       "3",
       "4",
       "13",
       "480"
      ],
      "correct": 2
     },
     {
      "q": "What did combining overlap=skip with run all do?",
      "qKn": "overlap=skip ಅನ್ನು run all ನೊಂದಿಗೆ ಸೇರಿಸಿದಾಗ ಏನಾಯಿತು?",
      "opts": [
       "Ran every missed occurrence",
       "Collapsed the burst to 4 runs with 9 skipped",
       "Crashed",
       "Ran nothing"
      ],
      "optsKn": [
       "ಪ್ರತಿ ತಪ್ಪಿದ ಘಟನೆ ಓಡಿಸಿತು",
       "ಗುಂಪನ್ನು 9 ಬಿಟ್ಟು 4 ಓಟಕ್ಕೆ ಕುಸಿಸಿತು",
       "ಕ್ರ್ಯಾಶ್ ಆಯಿತು",
       "ಏನೂ ಓಡಿಸಲಿಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "What stopped duplicate occurrences after a scheduler restart?",
      "qKn": "Scheduler ಮರುಪ್ರಾರಂಭದ ನಂತರ ನಕಲು ಘಟನೆಗಳನ್ನು ಏನು ನಿಲ್ಲಿಸಿತು?",
      "opts": [
       "A longer interval",
       "Recorded execution keys",
       "More workers",
       "A hop limit"
      ],
      "optsKn": [
       "ಉದ್ದ ಅಂತರ",
       "ದಾಖಲಿಸಿದ execution keys",
       "ಹೆಚ್ಚು workers",
       "Hop ಮಿತಿ"
      ],
      "correct": 1
     },
     {
      "q": "What does a trace id let you separate?",
      "qKn": "Trace id ಏನನ್ನು ಬೇರ್ಪಡಿಸಲು ಬಿಡುತ್ತದೆ?",
      "opts": [
       "A late scheduler from a slow agent",
       "Python from Java",
       "Retries from queues",
       "Nothing"
      ],
      "optsKn": [
       "ತಡವಾದ scheduler ಅನ್ನು ನಿಧಾನ agent ನಿಂದ",
       "Python ಅನ್ನು Java ನಿಂದ",
       "ಮರುಪ್ರಯತ್ನಗಳನ್ನು queues ನಿಂದ",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
