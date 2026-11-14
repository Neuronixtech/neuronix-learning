module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b32158f",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "From Chatbots to Long-Horizon Agents (Part 3 of 3) — A Bounded, Recoverable Loop",
 "titleKn": "Chatbots ನಿಂದ ದೀರ್ಘ-ಅವಧಿ Agents ಗೆ (ಭಾಗ 3 / 3) — ಮಿತಿಯುಳ್ಳ, ಚೇತರಿಸಬಹುದಾದ ಲೂಪ್",
 "desc": "Run an agent loop that checkpoints, caps its steps, compacts memory and is watched by a monitor.",
 "descKn": "checkpoint ಮಾಡುವ, ಹಂತ ಮಿತಿಗೊಳಿಸುವ, ಮೆಮೊರಿ ಸಂಕ್ಷೇಪಿಸುವ ಮತ್ತು ಮಾನಿಟರ್‌ನಿಂದ ಗಮನಿಸಲ್ಪಡುವ agent ಲೂಪ್ ಓಡಿಸಿ.",
 "objectives": [
  "Checkpoint every step.",
  "Resume after a crash.",
  "Enforce a step budget.",
  "Compact old history.",
  "Monitor the trajectory."
 ],
 "objectivesKn": [
  "ಪ್ರತಿ ಹಂತ checkpoint ಮಾಡಿ.",
  "crash ನ ನಂತರ ಮುಂದುವರಿಸಿ.",
  "ಹಂತ ಬಜೆಟ್ ಜಾರಿಗೊಳಿಸಿ.",
  "ಹಳೆಯ ಇತಿಹಾಸ ಸಂಕ್ಷೇಪಿಸಿ.",
  "trajectory ಮಾನಿಟರ್ ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "From Chatbots to Long-Horizon Agents (Part 3 of 3)",
    "textKn": "Chatbots ನಿಂದ ದೀರ್ಘ-ಅವಧಿ Agents ಗೆ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: a bounded scripted agent loop with JSON checkpoints and crash recovery, the same crash without a checkpoint, a step budget, memory compaction and a trajectory monitor. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind long-horizon agents (METR-style time horizons, compounding per-step reliability, checkpoints, retries, memory compaction and trajectory monitors), not the real software, and the success probabilities, step counts and the scripted agent are made up by the lab and no language model is involved, so no real LLM behaviour is measured.  This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: JSON checkpoints ಮತ್ತು crash ಚೇತರಿಕೆ ಇರುವ ಮಿತಿಯುಳ್ಳ scripted agent ಲೂಪ್, checkpoint ಇಲ್ಲದೆ ಅದೇ crash, ಹಂತ ಬಜೆಟ್, ಮೆಮೊರಿ ಸಂಕ್ಷೇಪಣ ಮತ್ತು trajectory ಮಾನಿಟರ್. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ದೀರ್ಘ-ಅವಧಿ agents (METR ಶೈಲಿಯ ಸಮಯ ಹಾರಿಜಾನ್, ಹಂತ-ಹಂತದ ವಿಶ್ವಾಸಾರ್ಹತೆಯ ಸಂಯೋಜನೆ, checkpoints, ಮರುಪ್ರಯತ್ನ, ಮೆಮೊರಿ ಸಂಕ್ಷೇಪಣ ಮತ್ತು trajectory ಮಾನಿಟರ್‌ಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಯಶಸ್ಸಿನ ಸಂಭವನೀಯತೆಗಳು, ಹಂತ ಸಂಖ್ಯೆಗಳು ಮತ್ತು scripted agent ಅನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ.  ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Save Progress, Watch It and Cap It",
    "textKn": "ಪ್ರಗತಿ ಉಳಿಸಿ, ಗಮನಿಸಿ ಮತ್ತು ಮಿತಿಗೊಳಿಸಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Small Loop With Three Safeguards",
    "headingKn": "ಮೂರು ರಕ್ಷಣೆಗಳಿರುವ ಚಿಕ್ಕ ಲೂಪ್",
    "bodyEn": "Part 3 puts the earlier ideas into one runnable loop. A scripted stand-in agent works through eight steps and writes a JSON checkpoint after each one, so a crash at step 5 can be resumed instead of repeated. The lab then repeats the crash with no saved position, enforces a step budget, compacts a long history into a summary plus recent entries and runs a monitor that flags repeated steps and over-long runs. The agent, steps and crash are invented.",
    "bodyKn": "ಭಾಗ 3 ಹಿಂದಿನ ಕಲ್ಪನೆಗಳನ್ನು ಒಂದು ಚಾಲನೆಯಾಗುವ ಲೂಪ್‌ಗೆ ಹಾಕುತ್ತದೆ. scripted ಪರ್ಯಾಯ agent ಎಂಟು ಹಂತಗಳಲ್ಲಿ ಕೆಲಸ ಮಾಡಿ ಪ್ರತಿ ಹಂತದ ನಂತರ JSON checkpoint ಬರೆಯುತ್ತದೆ, ಆದ್ದರಿಂದ ಹಂತ 5 ರ crash ಅನ್ನು ಪುನರಾವರ್ತಿಸುವ ಬದಲು ಮುಂದುವರಿಸಬಹುದು. ನಂತರ ಲ್ಯಾಬ್ ಉಳಿಸಿದ ಸ್ಥಾನವಿಲ್ಲದೆ ಅದೇ crash ಪುನರಾವರ್ತಿಸಿ, ಹಂತ ಬಜೆಟ್ ಜಾರಿಗೊಳಿಸಿ, ಉದ್ದ ಇತಿಹಾಸವನ್ನು ಸಾರಾಂಶ ಮತ್ತು ಇತ್ತೀಚಿನ ನಮೂದುಗಳಾಗಿ ಸಂಕ್ಷೇಪಿಸಿ ಮತ್ತು ಪುನರಾವರ್ತಿತ ಹಂತಗಳು ಹಾಗೂ ಅತಿ ಉದ್ದ ಓಟಗಳನ್ನು ಗುರುತಿಸುವ ಮಾನಿಟರ್ ಓಡಿಸುತ್ತದೆ. agent, ಹಂತಗಳು ಮತ್ತು crash ಕಲ್ಪಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "A Bounded, Recoverable Agent Loop",
    "headingKn": "ಮಿತಿಯುಳ್ಳ, ಚೇತರಿಸಬಹುದಾದ Agent ಲೂಪ್",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">save progress, watch the trajectory and cap the run</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">agent</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">scripted steps</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">checkpoint</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">JSON per step</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">monitor</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">repeat and length</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">stop</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">budget or loop</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">save progress, watch the trajectory and cap the run</text></svg>",
    "captionEn": "Every step is saved, watched and capped.",
    "captionKn": "ಪ್ರತಿ ಹಂತವನ್ನು ಉಳಿಸಲಾಗುತ್ತದೆ, ಗಮನಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ಮಿತಿಗೊಳಿಸಲಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Safeguards in the lab",
    "headingKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ರಕ್ಷಣೆಗಳು",
    "headers": [
     "Safeguard",
     "Lab behavior"
    ],
    "rows": [
     [
      "checkpoint",
      "JSON file written after every step"
     ],
     [
      "step budget",
      "hard stop at max_steps"
     ],
     [
      "compaction",
      "older entries folded into one summary"
     ],
     [
      "monitor",
      "flag 3 identical steps or more than 12 steps"
     ],
     [
      "crash",
      "injected at step 5 of 8"
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
    "filename": "lh_3.py",
    "headingEn": "Agent loop, compaction and monitor",
    "headingKn": "Agent ಲೂಪ್, ಸಂಕ್ಷೇಪಣ ಮತ್ತು ಮಾನಿಟರ್",
    "descEn": "run saves a checkpoint per step and can resume, compact folds old history into a summary and monitor flags repeats and over-long trajectories.",
    "descKn": "run ಪ್ರತಿ ಹಂತಕ್ಕೆ checkpoint ಉಳಿಸಿ ಮುಂದುವರಿಸಬಲ್ಲದು, compact ಹಳೆಯ ಇತಿಹಾಸವನ್ನು ಸಾರಾಂಶವಾಗಿ ಮಡಚುತ್ತದೆ ಮತ್ತು monitor ಪುನರಾವರ್ತನೆ ಹಾಗೂ ಅತಿ ಉದ್ದ trajectory ಗುರುತಿಸುತ್ತದೆ.",
    "code": "class ScriptedAgent:\n    \"\"\"Stand-in agent: works through a fixed list of steps; the 'tool' just appends to a result list.\"\"\"\n\n    def __init__(self, steps):\n        self.steps = steps\n\n    def act(self, i):\n        return {\"tool\": \"work\", \"arg\": self.steps[i]}\n\n\ndef run(steps, ckpt_path, crash_at=None, max_steps=100, start_fresh=False):\n    ckpt = Path(ckpt_path)\n    state = {\"next\": 0, \"done\": []}\n    if ckpt.exists() and not start_fresh:\n        state = json.loads(ckpt.read_text(encoding=\"utf-8\"))\n    agent = ScriptedAgent(steps)\n    executed = []\n    taken = 0\n    while state[\"next\"] < len(steps):\n        if taken >= max_steps:\n            return state, executed, \"step budget\"\n        i = state[\"next\"]\n        if crash_at is not None and i == crash_at:\n            return state, executed, \"crashed\"\n        action = agent.act(i)\n        executed.append(i)\n        state[\"done\"].append(action[\"arg\"])\n        state[\"next\"] = i + 1\n        ckpt.write_text(json.dumps(state), encoding=\"utf-8\")\n        taken += 1\n    return state, executed, \"finished\"\n\n\ndef compact(history, keep_recent):\n    if len(history) <= keep_recent:\n        return history, 0\n    old, recent = history[:-keep_recent], history[-keep_recent:]\n    summary = {\"summary_of\": len(old), \"first\": old[0], \"last\": old[-1]}\n    return [summary] + recent, len(old)\n\n\ndef monitor(trajectory, repeat_limit=3, step_limit=12):\n    \"\"\"Return the first problem found in a list of (tool, arg) pairs, or None.\"\"\"\n    run_len = 1\n    for i in range(1, len(trajectory)):\n        run_len = run_len + 1 if trajectory[i] == trajectory[i - 1] else 1\n        if run_len >= repeat_limit:\n            return f\"repeat of {trajectory[i]} {run_len} times at step {i + 1}\"\n    if len(trajectory) > step_limit:\n        return f\"step count {len(trajectory)} exceeds limit {step_limit}\"\n    return None"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "lh_3.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() crashes and resumes, repeats the crash without a checkpoint, enforces a step budget, compacts a history and runs the monitor.",
    "descKn": "main() crash ಮಾಡಿ ಮುಂದುವರಿಸಿ, checkpoint ಇಲ್ಲದೆ crash ಪುನರಾವರ್ತಿಸಿ, ಹಂತ ಬಜೆಟ್ ಜಾರಿಗೊಳಿಸಿ, ಇತಿಹಾಸ ಸಂಕ್ಷೇಪಿಸಿ ಮತ್ತು ಮಾನಿಟರ್ ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\n    steps = [f\"step{i}\" for i in range(8)]\n    with tempfile.TemporaryDirectory() as d:\n        ckpt = Path(d) / \"ckpt.json\"\n\n        section(\"1. Genuinely running: a crash at step 5 and recovery from a checkpoint\")\n        s1, ex1, why1 = run(steps, ckpt, crash_at=5)\n        print(\"first run:\", why1, \"| steps executed:\", ex1, \"| checkpoint next:\", s1[\"next\"])\n        s2, ex2, why2 = run(steps, ckpt)\n        print(\"second run:\", why2, \"| steps executed:\", ex2, \"| done:\", len(s2[\"done\"]))\n        print(\"steps executed across both runs:\", ex1 + ex2, \"| any step run twice:\", len(set(ex1 + ex2)) != len(ex1 + ex2))\n        print(\"the second run resumed at step 5 instead of step 0, so no step ran twice; this works here because every step is a pure append, and a step with an outside effect would also need an idempotency key\")\n\n        section(\"2. Genuinely running: the same crash without a checkpoint\")\n        ckpt2 = Path(d) / \"none.json\"\n        a1, e1, _ = run(steps, ckpt2, crash_at=5)\n        ckpt2.unlink(missing_ok=True)\n        a2, e2, _ = run(steps, ckpt2, start_fresh=True)\n        print(\"steps executed across both runs:\", e1 + e2, \"| total:\", len(e1 + e2))\n        print(\"without a saved position the second run began at step 0, so five steps ran twice and the total was 13 instead of 8\")\n\n        section(\"3. Genuinely running: a step budget stops a loop\")\n        ckpt3 = Path(d) / \"budget.json\"\n        s3, e3, why3 = run([f\"s{i}\" for i in range(50)], ckpt3, max_steps=10)\n        print(\"stopped because of:\", why3, \"| steps taken:\", len(e3), \"| next:\", s3[\"next\"])\n        print(\"a hard cap on steps ends the run even though the task is not finished, and the checkpoint records how far it got so a human can decide whether to continue\")\n\n    section(\"4. Genuinely computing: memory compaction\")\n    history = [{\"step\": i, \"note\": f\"observation {i}\"} for i in range(30)]\n    new, folded = compact(history, 8)\n    print(\"before:\", len(history), \"entries | after:\", len(new), \"entries | folded:\", folded)\n    print(\"first entry after compaction:\", new[0])\n    print(\"the 22 old entries became one summary record and the 8 recent ones stayed in full; the summary keeps only the count and the first and last entry, so detail in the middle is gone, and anything recovery needs must live in an exact log instead\")\n\n    section(\"5. Genuinely running: a trajectory monitor\")\n    good = [(\"read\", \"a\"), (\"edit\", \"a\"), (\"test\", \"a\"), (\"edit\", \"b\")]\n    loop = [(\"read\", \"a\"), (\"edit\", \"a\"), (\"edit\", \"a\"), (\"edit\", \"a\"), (\"test\", \"a\")]\n    long = [(\"read\", str(i)) for i in range(15)]\n    for name, tr in ((\"normal\", good), (\"repeat loop\", loop), (\"too long\", long)):\n        print(f\"{name:12} -> {monitor(tr)}\")\n    print(\"the monitor flags three identical steps in a row and any run longer than twelve steps and says nothing about a trajectory that is wrong but varied, so it is a cheap tripwire and not a correctness check\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a crash at step 5 and recovery from a checkpoint ---\nfirst run: crashed | steps executed: [0, 1, 2, 3, 4] | checkpoint next: 5\nsecond run: finished | steps executed: [5, 6, 7] | done: 8\nsteps executed across both runs: [0, 1, 2, 3, 4, 5, 6, 7] | any step run twice: False\nthe second run resumed at step 5 instead of step 0, so no step ran twice; this works here because every step is a pure append, and a step with an outside effect would also need an idempotency key\n\n--- 2. Genuinely running: the same crash without a checkpoint ---\nsteps executed across both runs: [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 5, 6, 7] | total: 13\nwithout a saved position the second run began at step 0, so five steps ran twice and the total was 13 instead of 8\n\n--- 3. Genuinely running: a step budget stops a loop ---\nstopped because of: step budget | steps taken: 10 | next: 10\na hard cap on steps ends the run even though the task is not finished, and the checkpoint records how far it got so a human can decide whether to continue\n\n--- 4. Genuinely computing: memory compaction ---\nbefore: 30 entries | after: 9 entries | folded: 22\nfirst entry after compaction: {'summary_of': 22, 'first': {'step': 0, 'note': 'observation 0'}, 'last': {'step': 21, 'note': 'observation 21'}}\nthe 22 old entries became one summary record and the 8 recent ones stayed in full; the summary keeps only the count and the first and last entry, so detail in the middle is gone, and anything recovery needs must live in an exact log instead\n\n--- 5. Genuinely running: a trajectory monitor ---\nnormal       -> None\nrepeat loop  -> repeat of ('edit', 'a') 3 times at step 4\ntoo long     -> step count 15 exceeds limit 12\nthe monitor flags three identical steps in a row and any run longer than twelve steps and says nothing about a trajectory that is wrong but varied, so it is a cheap tripwire and not a correctness check"
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
    "headingEn": "Experiment 1: A crash at step 5 and recovery from a checkpoint",
    "headingKn": "ಪ್ರಯೋಗ 1: A crash at step 5 and recovery from a checkpoint",
    "bodyEn": "What it ran: A crash at step 5 and recovery from a checkpoint. What the lab concluded: the second run resumed at step 5 instead of step 0, so no step ran twice; this works here because every step is a pure append, and a step with an outside effect would also need an idempotency key",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A crash at step 5 and recovery from a checkpoint. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the second run resumed at step 5 instead of step 0, so no step ran twice; this works here because every step is a pure append, and a step with an outside effect would also need an idempotency key"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: a crash at step 5 and recovery from a checkpoint ---\nfirst run: crashed | steps executed: [0, 1, 2, 3, 4] | checkpoint next: 5\nsecond run: finished | steps executed: [5, 6, 7] | done: 8\nsteps executed across both runs: [0, 1, 2, 3, 4, 5, 6, 7] | any step run twice: False"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: The same crash without a checkpoint",
    "headingKn": "ಪ್ರಯೋಗ 2: The same crash without a checkpoint",
    "bodyEn": "What it ran: The same crash without a checkpoint. What the lab concluded: without a saved position the second run began at step 0, so five steps ran twice and the total was 13 instead of 8",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The same crash without a checkpoint. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): without a saved position the second run began at step 0, so five steps ran twice and the total was 13 instead of 8"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: the same crash without a checkpoint ---\nsteps executed across both runs: [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 5, 6, 7] | total: 13"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: A step budget stops a loop",
    "headingKn": "ಪ್ರಯೋಗ 3: A step budget stops a loop",
    "bodyEn": "What it ran: A step budget stops a loop. What the lab concluded: a hard cap on steps ends the run even though the task is not finished, and the checkpoint records how far it got so a human can decide whether to continue",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A step budget stops a loop. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a hard cap on steps ends the run even though the task is not finished, and the checkpoint records how far it got so a human can decide whether to continue"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: a step budget stops a loop ---\nstopped because of: step budget | steps taken: 10 | next: 10"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Memory compaction",
    "headingKn": "ಪ್ರಯೋಗ 4: Memory compaction",
    "bodyEn": "What it ran: Memory compaction. What the lab concluded: the 22 old entries became one summary record and the 8 recent ones stayed in full; the summary keeps only the count and the first and last entry, so detail in the middle is gone, and anything recovery needs must live in an exact log instead",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Memory compaction. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the 22 old entries became one summary record and the 8 recent ones stayed in full; the summary keeps only the count and the first and last entry, so detail in the middle is gone, and anything recovery needs must live in an exact log instead"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely computing: memory compaction ---\nbefore: 30 entries | after: 9 entries | folded: 22\nfirst entry after compaction: {'summary_of': 22, 'first': {'step': 0, 'note': 'observation 0'}, 'last': {'step': 21, 'note': 'observation 21'}}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A trajectory monitor",
    "headingKn": "ಪ್ರಯೋಗ 5: A trajectory monitor",
    "bodyEn": "What it ran: A trajectory monitor. What the lab concluded: the monitor flags three identical steps in a row and any run longer than twelve steps and says nothing about a trajectory that is wrong but varied, so it is a cheap tripwire and not a correctness check",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A trajectory monitor. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the monitor flags three identical steps in a row and any run longer than twelve steps and says nothing about a trajectory that is wrong but varied, so it is a cheap tripwire and not a correctness check"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: a trajectory monitor ---\nnormal       -> None\nrepeat loop  -> repeat of ('edit', 'a') 3 times at step 4\ntoo long     -> step count 15 exceeds limit 12"
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
    "headingEn": "Genuinely Found: Crash, Resume and Budget",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Crash, ಮುಂದುವರಿಕೆ ಮತ್ತು ಬಜೆಟ್",
    "bodyEn": "Section 1: the first run crashed after executing steps 0 to 4 with the checkpoint at 5, the second run finished by executing steps 5, 6 and 7, all 8 steps were recorded as done and no step ran twice. Section 2: with no saved position the two runs executed 13 steps in total instead of 8. Section 3: a 50-step task with a budget of 10 stopped after 10 steps with next set to 10.",
    "bodyKn": "ವಿಭಾಗ 1: ಮೊದಲ ಓಟ ಹಂತ 0 ರಿಂದ 4 ಕಾರ್ಯಗತಗೊಳಿಸಿ checkpoint 5 ರಲ್ಲಿ crash ಆಯಿತು, ಎರಡನೇ ಓಟ ಹಂತ 5, 6 ಮತ್ತು 7 ಕಾರ್ಯಗತಗೊಳಿಸಿ ಮುಗಿಸಿತು, ಎಲ್ಲಾ 8 ಹಂತ ಮುಗಿದಿವೆ ಎಂದು ದಾಖಲಾಯಿತು ಮತ್ತು ಯಾವ ಹಂತವೂ ಎರಡು ಬಾರಿ ಓಡಲಿಲ್ಲ. ವಿಭಾಗ 2: ಉಳಿಸಿದ ಸ್ಥಾನವಿಲ್ಲದೆ ಎರಡು ಓಟಗಳು 8 ಬದಲು ಒಟ್ಟು 13 ಹಂತ ಕಾರ್ಯಗತಗೊಳಿಸಿದವು. ವಿಭಾಗ 3: 10 ಬಜೆಟ್ ಇರುವ 50-ಹಂತ ಕಾರ್ಯ 10 ಹಂತಗಳ ನಂತರ next 10 ಜೊತೆ ನಿಂತಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Compaction and the Monitor",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಂಕ್ಷೇಪಣ ಮತ್ತು ಮಾನಿಟರ್",
    "bodyEn": "Section 4: 30 history entries became 9 after compaction, with 22 folded into one summary that kept only the count and the first and last entry. Section 5: the monitor returned None for the normal trajectory, flagged a repeat of (edit, a) 3 times at step 4 and flagged a 15-step trajectory against the limit of 12.",
    "bodyKn": "ವಿಭಾಗ 4: 30 ಇತಿಹಾಸ ನಮೂದುಗಳು ಸಂಕ್ಷೇಪಣದ ನಂತರ 9 ಆದವು, 22 ಅನ್ನು ಎಣಿಕೆ ಮತ್ತು ಮೊದಲ ಹಾಗೂ ಕೊನೆಯ ನಮೂದು ಮಾತ್ರ ಇರಿಸಿಕೊಂಡ ಒಂದು ಸಾರಾಂಶಕ್ಕೆ ಮಡಚಲಾಯಿತು. ವಿಭಾಗ 5: ಸಾಮಾನ್ಯ trajectory ಗೆ ಮಾನಿಟರ್ None ಹಿಂತಿರುಗಿಸಿತು, ಹಂತ 4 ರಲ್ಲಿ (edit, a) 3 ಬಾರಿ ಪುನರಾವರ್ತನೆಯನ್ನು ಗುರುತಿಸಿತು ಮತ್ತು 15-ಹಂತ trajectory ಅನ್ನು ಮಿತಿ 12 ವಿರುದ್ಧ ಗುರುತಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A long agent will crash, loop or run too long at some point, and the three cheap safeguards here decide whether that costs a few repeated steps or a whole run.",
    "bodyKn": "ದೀರ್ಘ agent ಯಾವಾಗಲಾದರೂ crash ಆಗುತ್ತದೆ, ಲೂಪ್ ಆಗುತ್ತದೆ ಅಥವಾ ತುಂಬಾ ಹೊತ್ತು ಓಡುತ್ತದೆ, ಮತ್ತು ಇಲ್ಲಿನ ಮೂರು ಅಗ್ಗದ ರಕ್ಷಣೆಗಳು ಅದು ಕೆಲವು ಪುನರಾವರ್ತಿತ ಹಂತ ಅಥವಾ ಇಡೀ ಓಟ ಯಾವುದರ ವೆಚ್ಚ ಎಂದು ನಿರ್ಧರಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a summary can replace the log.\" The compacted summary kept only a count and two entries, so the detail between them was lost.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಸಾರಾಂಶ ಲಾಗ್ ಅನ್ನು ಬದಲಿಸಬಹುದು.\" ಸಂಕ್ಷೇಪಿತ ಸಾರಾಂಶ ಎಣಿಕೆ ಮತ್ತು ಎರಡು ನಮೂದು ಮಾತ್ರ ಇರಿಸಿತು, ಆದ್ದರಿಂದ ಅವುಗಳ ನಡುವಿನ ವಿವರ ಕಳೆದುಹೋಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Checkpoint: saved progress. Step budget: a hard cap on steps. Compaction: folding old history into a summary. Trajectory monitor: a check over the sequence of actions.",
    "bodyKn": "Checkpoint: ಉಳಿಸಿದ ಪ್ರಗತಿ. Step budget: ಹಂತಗಳ ಮೇಲೆ ಕಠಿಣ ಮಿತಿ. Compaction: ಹಳೆಯ ಇತಿಹಾಸವನ್ನು ಸಾರಾಂಶಕ್ಕೆ ಮಡಚುವುದು. Trajectory monitor: ಕ್ರಿಯೆಗಳ ಅನುಕ್ರಮದ ಮೇಲಿನ ಪರಿಶೀಲನೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The checkpoint resumed at step 5. 2) Without it 13 steps ran instead of 8. 3) The budget stopped at 10 steps. 4) Compaction cut 30 entries to 9 and lost detail. 5) The monitor caught a three-step repeat and a 15-step run.",
    "bodyKn": "1) Checkpoint ಹಂತ 5 ರಲ್ಲಿ ಮುಂದುವರಿಸಿತು. 2) ಅದಿಲ್ಲದೆ 8 ಬದಲು 13 ಹಂತ ಓಡಿದವು. 3) ಬಜೆಟ್ 10 ಹಂತಗಳಲ್ಲಿ ನಿಲ್ಲಿಸಿತು. 4) ಸಂಕ್ಷೇಪಣ 30 ನಮೂದುಗಳನ್ನು 9 ಕ್ಕೆ ಇಳಿಸಿ ವಿವರ ಕಳೆದುಕೊಂಡಿತು. 5) ಮಾನಿಟರ್ ಮೂರು-ಹಂತ ಪುನರಾವರ್ತನೆ ಮತ್ತು 15-ಹಂತ ಓಟ ಹಿಡಿಯಿತು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B lh_3.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B lh_3.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B lh_3.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B lh_3.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Where did the second run resume after the crash?",
      "qKn": "crash ನ ನಂತರ ಎರಡನೇ ಓಟ ಎಲ್ಲಿ ಮುಂದುವರಿಯಿತು?",
      "opts": [
       "Step 5",
       "Step 0",
       "Step 8",
       "Step 3"
      ],
      "optsKn": [
       "ಹಂತ 5",
       "ಹಂತ 0",
       "ಹಂತ 8",
       "ಹಂತ 3"
      ],
      "correct": 0
     },
     {
      "q": "How many steps ran in total across both runs without a checkpoint?",
      "qKn": "checkpoint ಇಲ್ಲದೆ ಎರಡೂ ಓಟಗಳಲ್ಲಿ ಒಟ್ಟು ಎಷ್ಟು ಹಂತ ಓಡಿದವು?",
      "opts": [
       "13",
       "8",
       "5",
       "10"
      ],
      "optsKn": [
       "13",
       "8",
       "5",
       "10"
      ],
      "correct": 0
     },
     {
      "q": "How many history entries remained after compaction of 30 with 8 kept recent?",
      "qKn": "8 ಇತ್ತೀಚಿನದನ್ನು ಇಟ್ಟು 30 ರ ಸಂಕ್ಷೇಪಣದ ನಂತರ ಎಷ್ಟು ನಮೂದುಗಳು ಉಳಿದವು?",
      "opts": [
       "9",
       "8",
       "22",
       "30"
      ],
      "optsKn": [
       "9",
       "8",
       "22",
       "30"
      ],
      "correct": 0
     },
     {
      "q": "What did the monitor miss by design?",
      "qKn": "ಮಾನಿಟರ್ ವಿನ್ಯಾಸದಿಂದಲೇ ಏನನ್ನು ತಪ್ಪಿಸಿತು?",
      "opts": [
       "A wrong but varied trajectory",
       "Repeated identical steps",
       "An over-long run",
       "A step budget"
      ],
      "optsKn": [
       "ತಪ್ಪಾದ ಆದರೆ ವೈವಿಧ್ಯಮಯ trajectory",
       "ಪುನರಾವರ್ತಿತ ಒಂದೇ ಹಂತಗಳು",
       "ಅತಿ ಉದ್ದ ಓಟ",
       "ಹಂತ ಬಜೆಟ್"
      ],
      "correct": 0
     },
     {
      "q": "What extra protection does a step with an outside effect need on resume?",
      "qKn": "ಹೊರ ಪರಿಣಾಮವಿರುವ ಹಂತಕ್ಕೆ ಮುಂದುವರಿಕೆಯಲ್ಲಿ ಯಾವ ಹೆಚ್ಚುವರಿ ರಕ್ಷಣೆ ಬೇಕು?",
      "opts": [
       "An idempotency key",
       "A longer summary",
       "A bigger budget",
       "A new seed"
      ],
      "optsKn": [
       "idempotency key",
       "ಉದ್ದ ಸಾರಾಂಶ",
       "ದೊಡ್ಡ ಬಜೆಟ್",
       "ಹೊಸ seed"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
