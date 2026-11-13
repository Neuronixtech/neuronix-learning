module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321562",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Production Runtimes: Queue, Event, Cron (Part 1 of 3) — Request-Response, Streaming and Durable Execution",
 "titleKn": "Production Runtimes: Queue, Event, Cron (ಭಾಗ 1 / 3) — Request-Response, Streaming ಮತ್ತು Durable Execution",
 "desc": "Run one agent loop in three shells, measure what the caller sees, and break the durable shell with a torn write and a repeated side effect.",
 "descKn": "ಒಂದು agent ಲೂಪ್ ಅನ್ನು ಮೂರು ಕವಚಗಳಲ್ಲಿ ಓಡಿಸಿ, ಕರೆದವರು ಏನು ನೋಡುತ್ತಾರೆ ಎಂದು ಅಳೆದು, durable ಕವಚವನ್ನು ಹರಿದ ಬರಹ ಮತ್ತು ಪುನರಾವರ್ತಿತ ಪಾರ್ಶ್ವ ಪರಿಣಾಮದಿಂದ ಮುರಿಯಿರಿ.",
 "objectives": [
  "Separate the loop from its shell.",
  "Measure first-chunk versus total latency.",
  "Resume from a checkpoint.",
  "Write checkpoints atomically.",
  "Explain why resume is not exactly-once."
 ],
 "objectivesKn": [
  "ಲೂಪ್ ಅನ್ನು ಅದರ ಕವಚದಿಂದ ಬೇರ್ಪಡಿಸಿ.",
  "First-chunk ವಿರುದ್ಧ ಒಟ್ಟು ಲೇಟೆನ್ಸಿ ಅಳೆಯಿರಿ.",
  "Checkpoint ನಿಂದ ಮುಂದುವರಿಸಿ.",
  "Checkpoints ಅನ್ನು atomic ಆಗಿ ಬರೆಯಿರಿ.",
  "ಮುಂದುವರಿಕೆ ನಿಖರವಾಗಿ-ಒಮ್ಮೆ ಏಕಲ್ಲ ಎಂದು ವಿವರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Production Runtimes: Queue, Event, Cron (Part 1 of 3)",
    "textKn": "Production Runtimes: Queue, Event, Cron (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: request-response, streaming and durable execution around one agent loop. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind production agent runtime shapes (request-response, streaming, durable, queue, event and cron), not the real software, and every agent step is a scripted function and every failure is injected, so no language model, network or real scheduler is involved, so no real LLM behaviour is measured. The pasted lesson described its program in prose and its source was not supplied, so the labs are written from the description. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಒಂದು agent ಲೂಪ್ ಸುತ್ತ request-response, streaming ಮತ್ತು durable execution. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು production agent runtime ಆಕಾರಗಳು (request-response, streaming, durable, queue, event ಮತ್ತು cron) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪ್ರತಿ agent ಹಂತ ಸ್ಕ್ರಿಪ್ಟ್ ಫಂಕ್ಷನ್ ಮತ್ತು ಪ್ರತಿ ವೈಫಲ್ಯ ಸೇರಿಸಲ್ಪಟ್ಟದ್ದು, ಆದ್ದರಿಂದ ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ, ನೆಟ್‌ವರ್ಕ್ ಅಥವಾ ನಿಜ scheduler ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಪ್ರೋಗ್ರಾಂ ಅನ್ನು ಗದ್ಯದಲ್ಲಿ ವಿವರಿಸಿತ್ತು ಮತ್ತು ಮೂಲ ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಣೆಯಿಂದ ಬರೆಯಲಾಗಿವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Agents Do Not All Run the Same Way",
    "textKn": "ಎಲ್ಲಾ agents ಒಂದೇ ರೀತಿ ಓಡುವುದಿಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Runtime Shell",
    "headingKn": "Runtime ಕವಚ",
    "bodyEn": "A short classification call and a 45-minute repository agent should not share a runtime. The agent loop can stay the same while the shell around it changes: the caller waits (request-response), results are shown as they appear (streaming), or progress is saved so a replacement worker can continue (durable execution). This part runs one scripted five-step loop inside each shell, measures what the caller sees, then breaks the durable shell on purpose with a torn write and a side effect.",
    "bodyKn": "ಚಿಕ್ಕ ವರ್ಗೀಕರಣ ಕರೆ ಮತ್ತು 45-ನಿಮಿಷದ repository agent ಒಂದೇ runtime ಹಂಚಿಕೊಳ್ಳಬಾರದು. ಸುತ್ತಲಿನ ಕವಚ ಬದಲಾಗುತ್ತಿದ್ದರೂ agent ಲೂಪ್ ಹಾಗೆಯೇ ಇರಬಹುದು: ಕರೆದವರು ಕಾಯುತ್ತಾರೆ (request-response), ಫಲಿತಾಂಶಗಳು ಕಾಣಿಸುತ್ತಿದ್ದಂತೆ ತೋರಿಸಲಾಗುತ್ತದೆ (streaming), ಅಥವಾ ಬದಲಿ worker ಮುಂದುವರಿಸಲು ಪ್ರಗತಿ ಉಳಿಸಲಾಗುತ್ತದೆ (durable execution). ಈ ಭಾಗ ಪ್ರತಿ ಕವಚದಲ್ಲಿ ಒಂದು ಸ್ಕ್ರಿಪ್ಟ್ ಐದು-ಹಂತ ಲೂಪ್ ಓಡಿಸಿ, ಕರೆದವರು ಏನು ನೋಡುತ್ತಾರೆ ಎಂದು ಅಳೆದು, ನಂತರ ಹರಿದ ಬರಹ ಮತ್ತು ಪಾರ್ಶ್ವ ಪರಿಣಾಮದೊಂದಿಗೆ durable ಕವಚವನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಮುರಿಯುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "One Loop, Three Shells",
    "headingKn": "ಒಂದು ಲೂಪ್, ಮೂರು ಕವಚಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">One loop, several shells</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">request</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">caller waits</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">stream</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">chunks as ready</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">durable</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">checkpoint, resume</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">agent loop</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">unchanged inside</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the shell decides when and how the loop runs</text></svg>",
    "captionEn": "The shell changes delivery, not the work.",
    "captionKn": "ಕವಚ ವಿತರಣೆ ಬದಲಿಸುತ್ತದೆ, ಕೆಲಸವನ್ನಲ್ಲ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The three shells",
    "headingKn": "ಮೂರು ಕವಚಗಳು",
    "headers": [
     "Shell",
     "Caller sees",
     "Fails when"
    ],
    "rows": [
     [
      "Request-response",
      "nothing until the end",
      "the caller times out or disconnects"
     ],
     [
      "Streaming",
      "chunks as they finish",
      "the client leaves and nothing was saved"
     ],
     [
      "Durable",
      "a resumable run",
      "a side effect happened before the checkpoint"
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
    "filename": "rt_1.py",
    "headingEn": "Loop, three shells, plain and atomic checkpoint writes",
    "headingKn": "ಲೂಪ್, ಮೂರು ಕವಚಗಳು, ಸರಳ ಮತ್ತು atomic checkpoint ಬರಹ",
    "descEn": "agent_loop runs five scripted steps. request_response returns after all of them, streaming is a generator that yields each step with its elapsed time, and durable_run loads a checkpoint file, runs the remaining steps and saves after each. write_atomic writes a temp file, fsyncs and replaces the real one.",
    "descKn": "agent_loop ಐದು ಸ್ಕ್ರಿಪ್ಟ್ ಹಂತ ಓಡಿಸುತ್ತದೆ. request_response ಎಲ್ಲಾ ಮುಗಿದ ನಂತರ ಮರಳಿಸುತ್ತದೆ, streaming ಪ್ರತಿ ಹಂತವನ್ನು ಅದರ ಕಳೆದ ಸಮಯದೊಂದಿಗೆ yield ಮಾಡುವ generator, ಮತ್ತು durable_run checkpoint ಫೈಲ್ ಲೋಡ್ ಮಾಡಿ ಉಳಿದ ಹಂತ ಓಡಿಸಿ ಪ್ರತಿಯೊಂದರ ನಂತರ ಉಳಿಸುತ್ತದೆ. write_atomic temp ಫೈಲ್ ಬರೆದು fsync ಮಾಡಿ ನಿಜ ಫೈಲ್ ಬದಲಿಸುತ್ತದೆ.",
    "code": "def agent_step(name, delay=0.02):\n    time.sleep(delay)\n    return f\"done: {name}\"\n\n\ndef agent_loop(task, steps=STEPS, on_step=None, delay=0.02):\n    out = []\n    for i, s in enumerate(steps):\n        out.append(agent_step(s, delay))\n        if on_step:\n            on_step(i, out[-1])\n    return out\n\n\ndef request_response(task):\n    t0 = time.perf_counter()\n    result = agent_loop(task)\n    return result, time.perf_counter() - t0\n\n\ndef streaming(task, delay=0.02):\n    t0 = time.perf_counter()\n    for i, s in enumerate(STEPS):\n        yield i, agent_step(s, delay), time.perf_counter() - t0\n\n\ndef write_plain(path, data):\n    Path(path).write_text(json.dumps(data), encoding=\"utf-8\")\n\n\ndef write_atomic(path, data):\n    tmp = Path(str(path) + \".tmp\")\n    with open(tmp, \"w\", encoding=\"utf-8\") as f:\n        json.dump(data, f)\n        f.flush()\n        os.fsync(f.fileno())\n    os.replace(tmp, path)\n\n\ndef durable_run(path, crash_after=None, writer=write_atomic, steps=STEPS):\n    \"\"\"Load the checkpoint, execute remaining steps, save after each one. Returns the steps executed in this process.\"\"\"\n    done = []\n    state = {\"next\": 0}\n    if Path(path).exists():\n        state = json.loads(Path(path).read_text(encoding=\"utf-8\"))\n    for i in range(state[\"next\"], len(steps)):\n        if crash_after is not None and i == crash_after:\n            raise RuntimeError(f\"worker crashed at step {i}\")\n        agent_step(steps[i], 0.0)\n        done.append(steps[i])\n        writer(path, {\"next\": i + 1})\n    return done"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rt_1.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() measures latency in the first two shells, crashes and resumes a durable run, simulates a torn checkpoint write, and repeats a side-effecting step after a resume.",
    "descKn": "main() ಮೊದಲ ಎರಡು ಕವಚಗಳಲ್ಲಿ ಲೇಟೆನ್ಸಿ ಅಳೆದು, durable ಓಟ ಕ್ರ್ಯಾಶ್ ಮಾಡಿ ಮುಂದುವರಿಸಿ, ಹರಿದ checkpoint ಬರಹ ಅನುಕರಿಸಿ, ಮುಂದುವರಿಕೆಯ ನಂತರ ಪಾರ್ಶ್ವ-ಪರಿಣಾಮ ಹಂತ ಪುನರಾವರ್ತಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Genuinely measuring: request-response blocks for the whole run\")\n    result, took = request_response(\"analyse\")\n    print(f\"steps={len(result)} total latency={took * 1000:.0f} ms (5 steps of about 20 ms); the caller saw nothing until all five finished\")\n\n    section(\"2. Genuinely measuring: streaming shows progress, and first-chunk latency differs from total latency\")\n    first = None\n    for i, msg, t in streaming(\"analyse\"):\n        first = first or t\n        print(f\"  chunk {i} at {t * 1000:5.0f} ms: {msg}\")\n    print(f\"first chunk after {first * 1000:.0f} ms, last chunk after {t * 1000:.0f} ms: the user waits for a fifth of the time before seeing anything, but the total work is unchanged\")\n    consumed = 0\n    for i, msg, t in streaming(\"analyse\"):\n        consumed += 1\n        if i == 1:\n            break\n    print(f\"a client that disconnected after chunk 1 stopped the generator at {consumed} chunks; nothing was saved, so the work done so far is lost unless the loop also checkpoints\")\n\n    section(\"3. Genuinely checking: durable execution resumes at the failed step\")\n    with tempfile.TemporaryDirectory() as d:\n        cp = Path(d) / \"run.json\"\n        try:\n            durable_run(cp, crash_after=2)\n        except RuntimeError as e:\n            print(\"first worker:\", e, \"| checkpoint on disk:\", cp.read_text())\n        resumed = durable_run(cp)\n        print(\"replacement worker executed:\", resumed)\n        print(\"steps repeated by the replacement worker:\", [s for s in resumed if s in STEPS[:2]])\n    with tempfile.TemporaryDirectory() as d:\n        cp = Path(d) / \"run.json\"\n        try:\n            durable_run(cp, crash_after=2, steps=STEPS)\n        except RuntimeError:\n            pass\n        cp.unlink()\n        fresh = durable_run(cp)\n        print(f\"with no checkpoint the replacement worker re-ran {len(fresh)} steps instead of {len(resumed)}\")\n\n    section(\"4. Genuinely checking: a torn checkpoint write, plain versus atomic\")\n    with tempfile.TemporaryDirectory() as d:\n        cp = Path(d) / \"run.json\"\n        write_plain(cp, {\"next\": 2})\n        cp.write_text('{\"next\": ', encoding=\"utf-8\")  # simulate a crash halfway through an in-place overwrite\n        try:\n            json.loads(cp.read_text())\n            plain = \"readable\"\n        except json.JSONDecodeError:\n            plain = \"CORRUPT\"\n        write_atomic(cp, {\"next\": 2})\n        tmp = Path(str(cp) + \".tmp\")\n        tmp.write_text('{\"next\": ', encoding=\"utf-8\")  # a crash while writing the temp file leaves the real file untouched\n        try:\n            json.loads(cp.read_text())\n            atomic = \"readable\"\n        except json.JSONDecodeError:\n            atomic = \"CORRUPT\"\n        print(f\"crash during an in-place overwrite -> checkpoint {plain}; crash while writing the temp file of an atomic write -> checkpoint {atomic} ({cp.read_text()})\")\n    print(\"writing to a temp file and replacing it keeps the last good checkpoint readable; this protects one file, and it does not make the checkpoint and any external side effect atomic together\")\n\n    section(\"5. Genuinely checking: a retried step that already had a side effect\")\n    effects = []\n\n    def send_step(name):\n        effects.append(name)\n\n    with tempfile.TemporaryDirectory() as d:\n        cp = Path(d) / \"run.json\"\n        steps = [\"draft\", \"send email\", \"record\"]\n        try:\n            i0 = 0\n            for i, s in enumerate(steps):\n                if s == \"send email\":\n                    send_step(s)\n                    raise RuntimeError(\"crash after the email was sent but before the checkpoint\")\n                write_atomic(cp, {\"next\": i + 1})\n        except RuntimeError:\n            pass\n        st = json.loads(cp.read_text())\n        for i in range(st[\"next\"], len(steps)):\n            if steps[i] == \"send email\":\n                send_step(steps[i])\n            write_atomic(cp, {\"next\": i + 1})\n    print(f\"emails actually sent: {effects.count('send email')}\")\n    print(\"the checkpoint recorded 'draft' only, so the resume repeated the send; durable execution makes steps resumable, not exactly-once, so side-effecting steps need an idempotency key\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely measuring: request-response blocks for the whole run ---\nsteps=5 total latency=102 ms (5 steps of about 20 ms); the caller saw nothing until all five finished\n\n--- 2. Genuinely measuring: streaming shows progress, and first-chunk latency differs from total latency ---\n  chunk 0 at    20 ms: done: understand task\n  chunk 1 at    41 ms: done: gather context\n  chunk 2 at    61 ms: done: analyze evidence\n  chunk 3 at    83 ms: done: compose answer\n  chunk 4 at   103 ms: done: validate answer\nfirst chunk after 20 ms, last chunk after 103 ms: the user waits for a fifth of the time before seeing anything, but the total work is unchanged\na client that disconnected after chunk 1 stopped the generator at 2 chunks; nothing was saved, so the work done so far is lost unless the loop also checkpoints\n\n--- 3. Genuinely checking: durable execution resumes at the failed step ---\nfirst worker: worker crashed at step 2 | checkpoint on disk: {\"next\": 2}\nreplacement worker executed: ['analyze evidence', 'compose answer', 'validate answer']\nsteps repeated by the replacement worker: []\nwith no checkpoint the replacement worker re-ran 5 steps instead of 3\n\n--- 4. Genuinely checking: a torn checkpoint write, plain versus atomic ---\ncrash during an in-place overwrite -> checkpoint CORRUPT; crash while writing the temp file of an atomic write -> checkpoint readable ({\"next\": 2})\nwriting to a temp file and replacing it keeps the last good checkpoint readable; this protects one file, and it does not make the checkpoint and any external side effect atomic together\n\n--- 5. Genuinely checking: a retried step that already had a side effect ---\nemails actually sent: 2\nthe checkpoint recorded 'draft' only, so the resume repeated the send; durable execution makes steps resumable, not exactly-once, so side-effecting steps need an idempotency key"
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
    "headingEn": "Experiment 1: Request-response blocks for the whole run",
    "headingKn": "ಪ್ರಯೋಗ 1: Request-response blocks for the whole run",
    "bodyEn": "What it ran: Request-response blocks for the whole run. What the lab concluded: steps=5 total latency=102 ms (5 steps of about 20 ms); the caller saw nothing until all five finished",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Request-response blocks for the whole run. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): steps=5 total latency=102 ms (5 steps of about 20 ms); the caller saw nothing until all five finished"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Streaming shows progress, and first-chunk latency differs from total latency",
    "headingKn": "ಪ್ರಯೋಗ 2: Streaming shows progress, and first-chunk latency differs from total latency",
    "bodyEn": "What it ran: Streaming shows progress, and first-chunk latency differs from total latency. What the lab concluded: a client that disconnected after chunk 1 stopped the generator at 2 chunks; nothing was saved, so the work done so far is lost unless the loop also checkpoints",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Streaming shows progress, and first-chunk latency differs from total latency. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a client that disconnected after chunk 1 stopped the generator at 2 chunks; nothing was saved, so the work done so far is lost unless the loop also checkpoints"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely measuring: streaming shows progress, and first-chunk latency differs from total latency ---\n  chunk 0 at    20 ms: done: understand task\n  chunk 1 at    41 ms: done: gather context\n  chunk 2 at    61 ms: done: analyze evidence\n  chunk 3 at    83 ms: done: compose answer\n  chunk 4 at   103 ms: done: validate answer\nfirst chunk after 20 ms, last chunk after 103 ms: the user waits for a fifth of the time before seeing anything, but the total work is unchanged"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Durable execution resumes at the failed step",
    "headingKn": "ಪ್ರಯೋಗ 3: Durable execution resumes at the failed step",
    "bodyEn": "What it ran: Durable execution resumes at the failed step. What the lab concluded: This experiment prints data only; read the lines in the output below.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Durable execution resumes at the failed step. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): This experiment prints data only; read the lines in the output below."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely checking: durable execution resumes at the failed step ---\nfirst worker: worker crashed at step 2 | checkpoint on disk: {\"next\": 2}\nreplacement worker executed: ['analyze evidence', 'compose answer', 'validate answer']\nsteps repeated by the replacement worker: []\nwith no checkpoint the replacement worker re-ran 5 steps instead of 3"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A torn checkpoint write, plain versus atomic",
    "headingKn": "ಪ್ರಯೋಗ 4: A torn checkpoint write, plain versus atomic",
    "bodyEn": "What it ran: A torn checkpoint write, plain versus atomic. What the lab concluded: writing to a temp file and replacing it keeps the last good checkpoint readable; this protects one file, and it does not make the checkpoint and any external side effect atomic together",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A torn checkpoint write, plain versus atomic. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): writing to a temp file and replacing it keeps the last good checkpoint readable; this protects one file, and it does not make the checkpoint and any external side effect atomic together"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely checking: a torn checkpoint write, plain versus atomic ---\ncrash during an in-place overwrite -> checkpoint CORRUPT; crash while writing the temp file of an atomic write -> checkpoint readable ({\"next\": 2})"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A retried step that already had a side effect",
    "headingKn": "ಪ್ರಯೋಗ 5: A retried step that already had a side effect",
    "bodyEn": "What it ran: A retried step that already had a side effect. What the lab concluded: the checkpoint recorded 'draft' only, so the resume repeated the send; durable execution makes steps resumable, not exactly-once, so side-effecting steps need an idempotency key",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A retried step that already had a side effect. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the checkpoint recorded 'draft' only, so the resume repeated the send; durable execution makes steps resumable, not exactly-once, so side-effecting steps need an idempotency key"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely checking: a retried step that already had a side effect ---\nemails actually sent: 2"
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
    "headingEn": "Genuinely Found: Latency Versus First Output; a Disconnect Loses Unsaved Work",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಲೇಟೆನ್ಸಿ ವಿರುದ್ಧ ಮೊದಲ ಔಟ್‌ಪುಟ್; ಸಂಪರ್ಕ ಕಡಿತ ಉಳಿಸದ ಕೆಲಸ ಕಳೆಯುತ್ತದೆ",
    "bodyEn": "Section 1 (this run): request-response took 102 ms for five 20 ms steps and the caller saw nothing earlier. Section 2: streaming showed the first chunk at 20 ms and the last at 103 ms, so total work was unchanged but the wait for the first output was about a fifth; a client that disconnected after chunk 1 stopped the generator at 2 chunks and nothing had been saved. Timings are from one run on one machine and will vary.",
    "bodyKn": "ವಿಭಾಗ 1 (ಈ ಓಟ): ಐದು 20 ms ಹಂತಗಳಿಗೆ request-response 102 ms ತೆಗೆದುಕೊಂಡಿತು ಮತ್ತು ಕರೆದವರು ಮೊದಲು ಏನನ್ನೂ ನೋಡಲಿಲ್ಲ. ವಿಭಾಗ 2: streaming ಮೊದಲ chunk 20 ms ನಲ್ಲಿ ಮತ್ತು ಕೊನೆಯದು 103 ms ನಲ್ಲಿ ತೋರಿಸಿತು, ಆದ್ದರಿಂದ ಒಟ್ಟು ಕೆಲಸ ಬದಲಾಗಲಿಲ್ಲ ಆದರೆ ಮೊದಲ ಔಟ್‌ಪುಟ್‌ಗೆ ಕಾಯುವಿಕೆ ಸುಮಾರು ಐದನೇ ಒಂದು ಭಾಗ; chunk 1 ನಂತರ ಸಂಪರ್ಕ ಕಡಿದ ಕ್ಲೈಂಟ್ generator ಅನ್ನು 2 chunks ನಲ್ಲಿ ನಿಲ್ಲಿಸಿತು ಮತ್ತು ಏನೂ ಉಳಿಸಲಾಗಿರಲಿಲ್ಲ. ಸಮಯಗಳು ಒಂದು ಯಂತ್ರದ ಒಂದು ಓಟದಿಂದ ಮತ್ತು ಬದಲಾಗುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Resume, Torn Writes and the Repeated Side Effect",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮುಂದುವರಿಕೆ, ಹರಿದ ಬರಹಗಳು ಮತ್ತು ಪುನರಾವರ್ತಿತ ಪಾರ್ಶ್ವ ಪರಿಣಾಮ",
    "bodyEn": "Section 3: a worker crashed at step 2 with the checkpoint on disk reading {\"next\": 2}; the replacement executed only the remaining 3 steps and repeated none, while with no checkpoint it re-ran all 5. Section 4: a checkpoint that was overwritten in place and cut off halfway was CORRUPT, while an atomic write kept the last good checkpoint readable when the temp file was cut off. Section 5: a crash after an email was sent but before the checkpoint caused the resume to send it again, 2 emails in total.",
    "bodyKn": "ವಿಭಾಗ 3: checkpoint {\"next\": 2} ಎಂದು ಓದುವಾಗ worker ಹಂತ 2 ರಲ್ಲಿ ಕ್ರ್ಯಾಶ್ ಆಯಿತು; ಬದಲಿ ಉಳಿದ 3 ಹಂತಗಳನ್ನು ಮಾತ್ರ ಕಾರ್ಯಗತಗೊಳಿಸಿ ಯಾವುದನ್ನೂ ಪುನರಾವರ್ತಿಸಲಿಲ್ಲ, checkpoint ಇಲ್ಲದಿದ್ದಾಗ ಎಲ್ಲಾ 5 ಪುನಃ ಓಡಿದವು. ವಿಭಾಗ 4: ಇದ್ದ ಜಾಗದಲ್ಲಿ ಬರೆದು ಅರ್ಧಕ್ಕೆ ಕತ್ತರಿಸಿದ checkpoint CORRUPT ಆಗಿತ್ತು, ಆದರೆ atomic ಬರಹ temp ಫೈಲ್ ಕತ್ತರಿಸಿದಾಗ ಕೊನೆಯ ಒಳ್ಳೆಯ checkpoint ಓದಬಲ್ಲದಾಗಿಟ್ಟಿತು. ವಿಭಾಗ 5: ಇಮೇಲ್ ಕಳುಹಿಸಿದ ನಂತರ ಆದರೆ checkpoint ಮುನ್ನ ಕ್ರ್ಯಾಶ್ ಆದಾಗ ಮುಂದುವರಿಕೆ ಅದನ್ನು ಮತ್ತೆ ಕಳುಹಿಸಿತು, ಒಟ್ಟು 2 ಇಮೇಲ್‌ಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "The shell decides what a user waits for and what survives a crash, so picking it first and keeping the loop reusable avoids rewriting the agent for every deployment.",
    "bodyKn": "ಬಳಕೆದಾರ ಯಾವುದಕ್ಕೆ ಕಾಯುತ್ತಾರೆ ಮತ್ತು ಕ್ರ್ಯಾಶ್ ನಂತರ ಏನು ಉಳಿಯುತ್ತದೆ ಎಂದು ಕವಚ ನಿರ್ಧರಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಅದನ್ನು ಮೊದಲು ಆರಿಸಿ ಲೂಪ್ ಮರುಬಳಕೆಯೋಗ್ಯವಾಗಿಡುವುದು ಪ್ರತಿ ನಿಯೋಜನೆಗೆ agent ಅನ್ನು ಪುನಃ ಬರೆಯುವುದನ್ನು ತಪ್ಪಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"streaming makes the agent reliable.\" The streamed run saved nothing, so a disconnect lost the work.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"streaming agent ಅನ್ನು ವಿಶ್ವಾಸಾರ್ಹ ಮಾಡುತ್ತದೆ.\" Streamed ಓಟ ಏನನ್ನೂ ಉಳಿಸಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಸಂಪರ್ಕ ಕಡಿತ ಕೆಲಸ ಕಳೆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Shell: the runtime wrapper around the loop. First-chunk latency: time to the first visible output. Checkpoint: saved progress to resume from. Atomic write: temp file then replace. Retry versus resume: running work again versus continuing from saved progress.",
    "bodyKn": "Shell: ಲೂಪ್ ಸುತ್ತಲಿನ runtime ಹೊದಿಕೆ. First-chunk latency: ಮೊದಲ ಗೋಚರ ಔಟ್‌ಪುಟ್‌ಗೆ ಸಮಯ. Checkpoint: ಮುಂದುವರಿಯಲು ಉಳಿಸಿದ ಪ್ರಗತಿ. Atomic write: temp ಫೈಲ್ ನಂತರ ಬದಲಿ. Retry ವಿರುದ್ಧ resume: ಕೆಲಸ ಮತ್ತೆ ಓಡಿಸುವುದು ವಿರುದ್ಧ ಉಳಿಸಿದ ಪ್ರಗತಿಯಿಂದ ಮುಂದುವರಿಯುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Request-response made the caller wait the full 102 ms. 2) Streaming showed output at 20 ms of 103 ms. 3) A disconnect lost unsaved work. 4) A checkpoint resumed 3 of 5 steps instead of re-running 5. 5) An in-place overwrite cut halfway was corrupt; an atomic write was not. 6) Resume repeated an email, so side effects need idempotency.",
    "bodyKn": "1) Request-response ಕರೆದವರನ್ನು ಪೂರ್ಣ 102 ms ಕಾಯಿಸಿತು. 2) Streaming 103 ms ರಲ್ಲಿ 20 ms ಗೆ ಔಟ್‌ಪುಟ್ ತೋರಿಸಿತು. 3) ಸಂಪರ್ಕ ಕಡಿತ ಉಳಿಸದ ಕೆಲಸ ಕಳೆಯಿತು. 4) Checkpoint 5 ಪುನಃ ಓಡಿಸುವ ಬದಲು 3 ಹಂತ ಮುಂದುವರಿಸಿತು. 5) ಅರ್ಧಕ್ಕೆ ಕತ್ತರಿಸಿದ ಇದ್ದ-ಜಾಗದ ಬರಹ ಹಾಳಾಗಿತ್ತು; atomic ಬರಹ ಆಗಿರಲಿಲ್ಲ. 6) ಮುಂದುವರಿಕೆ ಇಮೇಲ್ ಪುನರಾವರ್ತಿಸಿತು, ಆದ್ದರಿಂದ ಪಾರ್ಶ್ವ ಪರಿಣಾಮಗಳಿಗೆ idempotency ಬೇಕು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B rt_1.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B rt_1.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B rt_1.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B rt_1.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did a client disconnecting during the stream cost?",
      "qKn": "ಸ್ಟ್ರೀಮ್ ಸಮಯದಲ್ಲಿ ಕ್ಲೈಂಟ್ ಸಂಪರ್ಕ ಕಡಿತ ಏನು ಕಳೆಯಿತು?",
      "opts": [
       "Nothing",
       "The work so far, because nothing was checkpointed",
       "The checkpoint file",
       "The agent loop"
      ],
      "optsKn": [
       "ಏನೂ ಇಲ್ಲ",
       "ಈವರೆಗಿನ ಕೆಲಸ, ಏಕೆಂದರೆ ಏನೂ checkpoint ಆಗಿರಲಿಲ್ಲ",
       "Checkpoint ಫೈಲ್",
       "Agent ಲೂಪ್"
      ],
      "correct": 1
     },
     {
      "q": "How many steps did the replacement worker run after a crash at step 2, with and without a checkpoint?",
      "qKn": "Step 2 ರಲ್ಲಿ ಕ್ರ್ಯಾಶ್ ನಂತರ ಬದಲಿ worker checkpoint ಜೊತೆ ಮತ್ತು ಇಲ್ಲದೆ ಎಷ್ಟು ಹಂತ ಓಡಿಸಿತು?",
      "opts": [
       "5 and 5",
       "3 with, 5 without",
       "5 with, 3 without",
       "2 and 2"
      ],
      "optsKn": [
       "5 ಮತ್ತು 5",
       "ಜೊತೆ 3, ಇಲ್ಲದೆ 5",
       "ಜೊತೆ 5, ಇಲ್ಲದೆ 3",
       "2 ಮತ್ತು 2"
      ],
      "correct": 1
     },
     {
      "q": "Which checkpoint write survived being cut off halfway?",
      "qKn": "ಅರ್ಧಕ್ಕೆ ಕತ್ತರಿಸಿದಾಗ ಯಾವ checkpoint ಬರಹ ಉಳಿಯಿತು?",
      "opts": [
       "The in-place overwrite",
       "The atomic temp-file write",
       "Both",
       "Neither"
      ],
      "optsKn": [
       "ಇದ್ದ-ಜಾಗದ ಬರಹ",
       "Atomic temp-ಫೈಲ್ ಬರಹ",
       "ಎರಡೂ",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "How many emails were sent after the crash-and-resume?",
      "qKn": "ಕ್ರ್ಯಾಶ್-ಮತ್ತು-ಮುಂದುವರಿಕೆ ನಂತರ ಎಷ್ಟು ಇಮೇಲ್‌ಗಳು ಕಳುಹಿಸಲ್ಪಟ್ಟವು?",
      "opts": [
       "0",
       "1",
       "2",
       "5"
      ],
      "optsKn": [
       "0",
       "1",
       "2",
       "5"
      ],
      "correct": 2
     },
     {
      "q": "What does durable execution not guarantee on its own?",
      "qKn": "Durable execution ತಾನಾಗಿ ಏನನ್ನು ಖಾತರಿಪಡಿಸುವುದಿಲ್ಲ?",
      "opts": [
       "Resuming from a checkpoint",
       "Exactly-once side effects",
       "Saved progress",
       "Skipping completed steps"
      ],
      "optsKn": [
       "Checkpoint ನಿಂದ ಮುಂದುವರಿಯುವುದು",
       "ನಿಖರವಾಗಿ-ಒಮ್ಮೆ ಪಾರ್ಶ್ವ ಪರಿಣಾಮಗಳು",
       "ಉಳಿಸಿದ ಪ್ರಗತಿ",
       "ಪೂರ್ಣಗೊಂಡ ಹಂತ ಬಿಡುವುದು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
