module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321544",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Agent Benchmarks: SWE-bench, GAIA and AgentBench (Part 3 of 3) — Interactive Environments, Contamination and Honest Reporting",
 "titleKn": "Agent Benchmarks: SWE-bench, GAIA ಮತ್ತು AgentBench (ಭಾಗ 3 / 3) — ಸಂವಾದಾತ್ಮಕ ಪರಿಸರಗಳು, Contamination ಮತ್ತು ಪ್ರಾಮಾಣಿಕ ವರದಿ",
 "desc": "Run a tiny shell environment, simulate how step errors compound under stated assumptions, simulate benchmark contamination, re-score patches under weak and strong tests, and produce a report that includes cost per success.",
 "descKn": "ಚಿಕ್ಕ shell ಪರಿಸರ ಚಲಾಯಿಸಿ, ಹೇಳಿದ ಊಹೆಗಳಲ್ಲಿ ಹಂತ ದೋಷಗಳು ಹೇಗೆ ಸಂಯೋಜಿಸುತ್ತವೆ ಎಂದು ಅನುಕರಿಸಿ, benchmark contamination ಅನುಕರಿಸಿ, patches ಅನ್ನು ದುರ್ಬಲ ಮತ್ತು ಬಲಿಷ್ಠ tests ಅಡಿ ಮರು-ಅಂಕ ನೀಡಿ, ಯಶಸ್ಸಿಗೆ ವೆಚ್ಚ ಇರುವ ವರದಿ ತಯಾರಿಸಿ.",
 "objectives": [
  "Explain agent-environment loops and terminal success.",
  "Show why step accuracy misleads.",
  "Detect contamination with a held-out set.",
  "Connect weak tests to inflated scores.",
  "Report cost alongside success."
 ],
 "objectivesKn": [
  "Agent-ಪರಿಸರ ಚಕ್ರ ಮತ್ತು terminal success ವಿವರಿಸಿ.",
  "ಹಂತ ನಿಖರತೆ ಏಕೆ ದಾರಿತಪ್ಪಿಸುತ್ತದೆ ಎಂದು ತೋರಿಸಿ.",
  "Held-out ಗುಂಪಿನಿಂದ contamination ಪತ್ತೆ ಮಾಡಿ.",
  "ದುರ್ಬಲ tests ಅನ್ನು ಉಬ್ಬಿದ ಅಂಕಗಳಿಗೆ ಜೋಡಿಸಿ.",
  "ಯಶಸ್ಸಿನ ಜೊತೆ ವೆಚ್ಚ ವರದಿ ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Agent Benchmarks: SWE-bench, GAIA and AgentBench (Part 3 of 3)",
    "textKn": "Agent Benchmarks: SWE-bench, GAIA ಮತ್ತು AgentBench (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: interactive environments, trajectory metrics, contamination and a combined report. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind SWE-bench, GAIA and AgentBench, not the real software, and candidate patches, agents and models are scripted stand-ins, so no real LLM behaviour is measured. The pasted Part 3 describes AgentBench's eight environments and the contamination warning but was cut off before its final program. The lab builds one small shell environment only; the accuracy, skill and cost numbers are assumptions chosen for the experiments and no real agent, model or leaderboard result is reported. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಸಂವಾದಾತ್ಮಕ ಪರಿಸರಗಳು, trajectory ಮಾಪನಗಳು, contamination ಮತ್ತು ಸಂಯೋಜಿತ ವರದಿ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು SWE-bench, GAIA ಮತ್ತು AgentBench ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಅಭ್ಯರ್ಥಿ patches, agents ಮತ್ತು ಮಾದರಿಗಳು ಸ್ಕ್ರಿಪ್ಟ್ ಬದಲಿಗಳು, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಭಾಗ 3 AgentBench ನ ಎಂಟು ಪರಿಸರಗಳು ಮತ್ತು contamination ಎಚ್ಚರಿಕೆ ವಿವರಿಸುತ್ತದೆ ಆದರೆ ಅಂತಿಮ ಪ್ರೋಗ್ರಾಂ ಮುನ್ನ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು. ಲ್ಯಾಬ್ ಒಂದು ಚಿಕ್ಕ shell ಪರಿಸರ ಮಾತ್ರ ನಿರ್ಮಿಸುತ್ತದೆ; ನಿಖರತೆ, ಕೌಶಲ ಮತ್ತು ವೆಚ್ಚ ಸಂಖ್ಯೆಗಳು ಪ್ರಯೋಗಗಳಿಗೆ ಆರಿಸಿದ ಊಹೆಗಳು ಮತ್ತು ಯಾವುದೇ ನಿಜ agent, ಮಾದರಿ ಅಥವಾ leaderboard ಫಲಿತಾಂಶ ವರದಿ ಮಾಡಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Benchmarks That Push Back",
    "textKn": "ಪ್ರತಿಕ್ರಿಯಿಸುವ Benchmarks",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Interaction, Compounding and Contamination",
    "headingKn": "ಸಂವಾದ, ಸಂಯೋಜನೆ ಮತ್ತು ಮಾಲಿನ್ಯ",
    "bodyEn": "AgentBench-style tasks are interactive: the agent acts, the environment returns an observation, and success is read from the final state. Over many steps small errors compound, so step accuracy and task success diverge. Separately, a benchmark score can be inflated by contamination (the model has seen the tasks or solutions) or by weak tests. This part builds a tiny shell environment, simulates compounding under stated assumptions, simulates contamination, and ends with a report that includes cost.",
    "bodyKn": "AgentBench-ಶೈಲಿಯ ಕಾರ್ಯಗಳು ಸಂವಾದಾತ್ಮಕ: agent ಕ್ರಿಯೆ ಮಾಡುತ್ತದೆ, ಪರಿಸರ ಗಮನಿಕೆ ಮರಳಿಸುತ್ತದೆ, ಮತ್ತು ಯಶಸ್ಸನ್ನು ಅಂತಿಮ ಸ್ಥಿತಿಯಿಂದ ಓದಲಾಗುತ್ತದೆ. ಹಲವು ಹಂತಗಳಲ್ಲಿ ಸಣ್ಣ ದೋಷಗಳು ಸಂಯೋಜಿಸುತ್ತವೆ, ಆದ್ದರಿಂದ ಹಂತ ನಿಖರತೆ ಮತ್ತು ಕಾರ್ಯ ಯಶಸ್ಸು ಭಿನ್ನವಾಗುತ್ತವೆ. ಬೇರೆಯಾಗಿ, benchmark ಅಂಕ contamination (ಮಾದರಿ ಕಾರ್ಯಗಳು ಅಥವಾ ಪರಿಹಾರಗಳನ್ನು ನೋಡಿದೆ) ಅಥವಾ ದುರ್ಬಲ tests ನಿಂದ ಉಬ್ಬಬಹುದು. ಈ ಭಾಗ ಚಿಕ್ಕ shell ಪರಿಸರ ನಿರ್ಮಿಸಿ, ಹೇಳಿದ ಊಹೆಗಳಲ್ಲಿ ಸಂಯೋಜನೆ ಅನುಕರಿಸಿ, contamination ಅನುಕರಿಸಿ, ವೆಚ್ಚ ಸೇರಿದ ವರದಿಯೊಂದಿಗೆ ಮುಗಿಯುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Agent, Environment and Terminal Check",
    "headingKn": "Agent, ಪರಿಸರ ಮತ್ತು ಅಂತಿಮ ಪರಿಶೀಲನೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Agent and environment loop</text><rect x=\"20\" y=\"40\" width=\"100\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"70\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">Agent</text><text x=\"70\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">chooses an action</text><rect x=\"180\" y=\"40\" width=\"100\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"230\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">Environment</text><text x=\"230\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">returns an observation</text><path d=\"M120,50 H180 M180,66 H120\" stroke=\"#475569\"/><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">terminal check</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">final state only</text><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">step accuracy compounds; success is read at the end</text></svg>",
    "captionEn": "Success is read from the final state, not from how good each step looked.",
    "captionKn": "ಯಶಸ್ಸು ಅಂತಿಮ ಸ್ಥಿತಿಯಿಂದ ಓದಲಾಗುತ್ತದೆ, ಪ್ರತಿ ಹಂತ ಎಷ್ಟು ಚೆನ್ನಾಗಿ ಕಂಡಿತು ಎಂಬುದರಿಂದ ಅಲ್ಲ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Three ways a score misleads",
    "headingKn": "ಅಂಕ ತಪ್ಪುದಾರಿಗೆಳೆಯುವ ಮೂರು ವಿಧಾನಗಳು",
    "headers": [
     "Cause",
     "Symptom",
     "Check"
    ],
    "rows": [
     [
      "Compounding errors",
      "high step accuracy, low task success",
      "report both, by horizon length"
     ],
     [
      "Contamination",
      "reported score above unseen-task score",
      "held-out tasks"
     ],
     [
      "Weak tests",
      "wrong patches accepted",
      "mutation score, stronger suite"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Environment and Experiments",
    "textKn": "ಪರಿಸರ ಮತ್ತು ಪ್ರಯೋಗಗಳ ನಿರ್ಮಾಣ",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "bench_3.py",
    "headingEn": "ShellEnv, episodes and contamination model",
    "headingKn": "ShellEnv, episodes ಮತ್ತು contamination ಮಾದರಿ",
    "descEn": "ShellEnv implements ls, cat, write and rm over a dictionary, and turns unknown commands into error text. simulate() runs episodes where each step is correct with an assumed probability and an optional recovery chance. contamination_score() gives a model that answers memorised tasks correctly and others at an assumed 40 percent skill.",
    "descKn": "ShellEnv ಡಿಕ್ಷನರಿ ಮೇಲೆ ls, cat, write ಮತ್ತು rm ಅನುಷ್ಠಾನಗೊಳಿಸಿ ಅಜ್ಞಾತ ಆಜ್ಞೆಗಳನ್ನು ದೋಷ ಪಠ್ಯವಾಗಿ ಬದಲಿಸುತ್ತದೆ. simulate() ಪ್ರತಿ ಹಂತ ಊಹಿಸಿದ ಸಂಭವನೀಯತೆಯಲ್ಲಿ ಸರಿಯಾಗಿರುವ ಮತ್ತು ಐಚ್ಛಿಕ ಚೇತರಿಕೆ ಅವಕಾಶವಿರುವ episodes ಚಲಾಯಿಸುತ್ತದೆ. contamination_score() ನೆನಪಿಟ್ಟ ಕಾರ್ಯಗಳನ್ನು ಸರಿಯಾಗಿ ಮತ್ತು ಇತರವನ್ನು ಊಹಿಸಿದ 40 ಶೇಕಡಾ ಕೌಶಲದಲ್ಲಿ ಉತ್ತರಿಸುವ ಮಾದರಿ ನೀಡುತ್ತದೆ.",
    "code": "class ShellEnv:\n    \"\"\"Tiny OS-style environment: the task is to leave 'report.txt' containing the word 'done'.\"\"\"\n\n    def __init__(self):\n        self.files, self.steps = {\"notes.txt\": \"todo\"}, 0\n\n    def act(self, cmd):\n        self.steps += 1\n        parts = cmd.split(\" \", 2)\n        if parts[0] == \"ls\":\n            return \" \".join(sorted(self.files))\n        if parts[0] == \"cat\" and len(parts) > 1:\n            return self.files.get(parts[1], f\"cat: {parts[1]}: No such file\")\n        if parts[0] == \"write\" and len(parts) > 2:\n            self.files[parts[1]] = parts[2]\n            return \"ok\"\n        if parts[0] == \"rm\" and len(parts) > 1:\n            return \"ok\" if self.files.pop(parts[1], None) is not None else f\"rm: {parts[1]}: No such file\"\n        return f\"{parts[0]}: command not found\"\n\n    def success(self):\n        return self.files.get(\"report.txt\") == \"done\"\n\n\ndef run_script(cmds):\n    env, obs = ShellEnv(), []\n    for c in cmds:\n        obs.append((c, env.act(c)))\n    return env, obs\n\n\n@dataclass\nclass Episode:\n    steps: int\n    step_ok: int\n    success: bool\n    cost: float\n    latency: float\n\n\ndef simulate(step_acc, horizon, n, seed, recover=0.0):\n    \"\"\"Each step is correct with probability step_acc; a wrong step ruins the episode unless `recover` rescues it.\"\"\"\n    rng = random.Random(seed)\n    eps = []\n    for _ in range(n):\n        ok_steps, alive = 0, True\n        for _ in range(horizon):\n            good = rng.random() < step_acc\n            if not good and rng.random() < recover:\n                good = True\n            ok_steps += good\n            alive = alive and good\n        eps.append(Episode(horizon, ok_steps, alive, horizon * 0.002, horizon * 1.3))\n    return eps\n\n\ndef contamination_score(contaminated_fraction, n_tasks, seed):\n    \"\"\"A 'model' answers memorised tasks correctly and the rest at an ASSUMED 40 percent skill.\"\"\"\n    rng = random.Random(seed)\n    seen = set(rng.sample(range(n_tasks), int(n_tasks * contaminated_fraction)))\n    score = lambda ids: sum((i in seen) or rng.random() < 0.40 for i in ids) / len(ids)\n    return score(range(n_tasks)), score([i for i in range(n_tasks) if i not in seen]) if len(seen) < n_tasks else float(\"nan\")"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "bench_3.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs a shell session, compares direct, detour and self-destructive runs, tabulates task success against step accuracy over three horizons, varies the memorised fraction, re-scores the Part 1 patches under weak and strong tests and prints a report with cost per success.",
    "descKn": "main() shell ಅಧಿವೇಶನ ಚಲಾಯಿಸುತ್ತದೆ, ನೇರ, ಬಳಸುದಾರಿ ಮತ್ತು ಸ್ವಯಂ-ನಾಶಕ ಓಟಗಳನ್ನು ಹೋಲಿಸುತ್ತದೆ, ಮೂರು ದಿಗಂತಗಳಲ್ಲಿ ಹಂತ ನಿಖರತೆ ವಿರುದ್ಧ ಕಾರ್ಯ ಯಶಸ್ಸು ಕೋಷ್ಟಕ ಮಾಡುತ್ತದೆ, ನೆನಪಿಟ್ಟ ಭಾಗ ಬದಲಿಸುತ್ತದೆ, ಭಾಗ 1 ರ patches ಅನ್ನು ದುರ್ಬಲ ಮತ್ತು ಬಲಿಷ್ಠ tests ಅಡಿ ಮರು-ಅಂಕ ನೀಡುತ್ತದೆ ಮತ್ತು ಯಶಸ್ಸಿಗೆ ವೆಚ್ಚ ಇರುವ ವರದಿ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. An interactive environment: errors become observations\")\n    env, obs = run_script([\"ls\", \"cat report.txt\", \"write report.txt done\", \"cat report.txt\", \"rm missing.txt\", \"grep done notes.txt\"])\n    for c, o in obs:\n        print(f\"$ {c:26} -> {o}\")\n    print(\"task success:\", env.success(), \"| steps used:\", env.steps)\n    print(\"shell errors came back as text the agent can read; two of six steps were errors and the task still succeeded\")\n\n    section(\"2. Genuinely checking: step success versus task success\")\n    good, _ = run_script([\"write report.txt done\"])\n    detour, _ = run_script([\"ls\", \"cat notes.txt\", \"cat report.txt\", \"write report.txt done\"])\n    spoiled, _ = run_script([\"write report.txt done\", \"rm report.txt\", \"ls\"])\n    for name, e in ((\"direct\", good), (\"detour\", detour), (\"deleted its own result\", spoiled)):\n        print(f\"{name:24} steps={e.steps} success={e.success()}\")\n    print(\"the last run wrote the right file and then deleted it: the final state fails the terminal check even though the first step was correct; terminal success reads only the end state, and step counts say nothing about it\")\n\n    section(\"3. Genuinely measuring: step accuracy compounds (per-step accuracy ASSUMED, seed 1, 20000 episodes)\")\n    print(f\"{'horizon':>8} {'step acc':>9} {'step success':>13} {'task success':>13} {'p^n':>7}\")\n    for horizon in (3, 10, 30):\n        for acc in (0.99, 0.95, 0.90):\n            eps = simulate(acc, horizon, 20000, 1)\n            print(f\"{horizon:>8} {acc:>9.0%} {statistics.mean(e.step_ok / e.steps for e in eps):>13.1%} {statistics.mean(e.success for e in eps):>13.1%} {acc ** horizon:>7.1%}\")\n    print(\"95 percent step accuracy gives about 60 percent success at 10 steps and about 21 percent at 30; the agent looked 95 percent reliable and failed most long tasks\")\n    eps = simulate(0.95, 30, 20000, 1, recover=0.5)\n    print(f\"if half of the wrong steps could be noticed and recovered (assumed), 30-step success rises to {statistics.mean(e.success for e in eps):.1%}\")\n\n    section(\"4. Genuinely measuring: a benchmark score under contamination (assumed 40 percent real skill, 500 tasks)\")\n    print(f\"{'memorised':>10} {'reported score':>15} {'score on unseen tasks':>22}\")\n    for frac in (0.0, 0.1, 0.3, 0.6):\n        full, unseen = contamination_score(frac, 500, 2)\n        print(f\"{frac:>10.0%} {full:>15.1%} {unseen:>22.1%}\")\n    print(\"with 60 percent memorised the reported score rose from 39.4 to 73.8 percent while the unseen-task column stayed between 36 and 43 percent (sampling noise at 500 tasks); the gap between the columns is how contamination shows up, and it needs a held-out set\")\n\n    section(\"5. Genuinely checking: weak tests inflate a coding score\")\n    cands = {\"correct\": lambda a, b: a + b, \"hard-coded\": hardcoded, \"int-only\": lambda a, b: int(a) + int(b), \"no-op\": buggy_add}\n    weak = TASK\n    strong = BenchmarkTask(\"t+\", TASK.title, buggy_add, TASK.fail_to_pass, STRONG_P2P)\n    for label, task in ((\"weak (3 tests)\", weak), (\"strong (8 tests)\", strong)):\n        res = {n: evaluate(task, fn)[\"resolved\"] for n, fn in cands.items()}\n        print(f\"{label:17} resolved: {sum(res.values())}/4 -> {[n for n, v in res.items() if v]}\")\n    print(\"two of the three accepted patches under the weak suite were wrong; the stronger suite accepted only the correct one\")\n\n    section(\"6. A combined report: success alone is not enough\")\n    rows = [(\"agent A\", simulate(0.97, 10, 5000, 7)), (\"agent B\", simulate(0.97, 10, 5000, 8, recover=0.5)), (\"agent C (cheap)\", simulate(0.90, 10, 5000, 9))]\n    costs = {\"agent A\": 1.0, \"agent B\": 2.4, \"agent C (cheap)\": 0.25}\n    print(f\"{'agent':16} {'success':>8} {'cost/task':>10} {'cost per success':>17} \")\n    for name, eps in rows:\n        s = statistics.mean(e.success for e in eps)\n        c = costs[name]\n        print(f\"{name:16} {s:>8.1%} {c:>10.2f} {c / s:>17.2f}\")\n    print(\"costs are invented relative units; the ranking by success and the ranking by cost per success differ, so a leaderboard column hides the choice\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. An interactive environment: errors become observations ---\n$ ls                         -> notes.txt\n$ cat report.txt             -> cat: report.txt: No such file\n$ write report.txt done      -> ok\n$ cat report.txt             -> done\n$ rm missing.txt             -> rm: missing.txt: No such file\n$ grep done notes.txt        -> grep: command not found\ntask success: True | steps used: 6\nshell errors came back as text the agent can read; two of six steps were errors and the task still succeeded\n\n--- 2. Genuinely checking: step success versus task success ---\ndirect                   steps=1 success=True\ndetour                   steps=4 success=True\ndeleted its own result   steps=3 success=False\nthe last run wrote the right file and then deleted it: the final state fails the terminal check even though the first step was correct; terminal success reads only the end state, and step counts say nothing about it\n\n--- 3. Genuinely measuring: step accuracy compounds (per-step accuracy ASSUMED, seed 1, 20000 episodes) ---\n horizon  step acc  step success  task success     p^n\n       3       99%         99.0%         97.0%   97.0%\n       3       95%         94.8%         85.0%   85.7%\n       3       90%         89.8%         72.3%   72.9%\n      10       99%         99.0%         90.4%   90.4%\n      10       95%         95.0%         59.7%   59.9%\n      10       90%         89.9%         34.4%   34.9%\n      30       99%         99.0%         74.6%   74.0%\n      30       95%         95.0%         21.4%   21.5%\n      30       90%         90.0%          4.1%    4.2%\n95 percent step accuracy gives about 60 percent success at 10 steps and about 21 percent at 30; the agent looked 95 percent reliable and failed most long tasks\nif half of the wrong steps could be noticed and recovered (assumed), 30-step success rises to 46.9%\n\n--- 4. Genuinely measuring: a benchmark score under contamination (assumed 40 percent real skill, 500 tasks) ---\n memorised  reported score  score on unseen tasks\n        0%           39.4%                  36.8%\n       10%           45.0%                  36.2%\n       30%           59.2%                  42.3%\n       60%           73.8%                  42.5%\nwith 60 percent memorised the reported score rose from 39.4 to 73.8 percent while the unseen-task column stayed between 36 and 43 percent (sampling noise at 500 tasks); the gap between the columns is how contamination shows up, and it needs a held-out set\n\n--- 5. Genuinely checking: weak tests inflate a coding score ---\nweak (3 tests)    resolved: 3/4 -> ['correct', 'hard-coded', 'int-only']\nstrong (8 tests)  resolved: 1/4 -> ['correct']\ntwo of the three accepted patches under the weak suite were wrong; the stronger suite accepted only the correct one\n\n--- 6. A combined report: success alone is not enough ---\nagent             success  cost/task  cost per success \nagent A             73.8%       1.00              1.35\nagent B             86.3%       2.40              2.78\nagent C (cheap)     35.3%       0.25              0.71\ncosts are invented relative units; the ranking by success and the ranking by cost per success differ, so a leaderboard column hides the choice"
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
    "headingEn": "Genuinely Found: Step Accuracy Compounds into Task Failure",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಹಂತ ನಿಖರತೆ ಕಾರ್ಯ ವೈಫಲ್ಯವಾಗಿ ಸಂಯೋಜಿಸುತ್ತದೆ",
    "bodyEn": "Section 3 (assumed per-step accuracy, seed 1, 20,000 episodes): at 95 percent step accuracy the measured step success was 95.0 percent but task success was 85.0 percent at 3 steps, 59.7 percent at 10 and 21.4 percent at 30, matching p to the power n (85.7, 59.9, 21.5). At 90 percent per step a 30-step task succeeded 4.1 percent of the time. If half of the wrong steps could be recovered (assumed), 30-step success at 95 percent rose to 46.9 percent. These numbers come from the stated assumptions, not from a model; what they show is why step accuracy alone is a misleading headline. Section 2: the agent that wrote the right file and then deleted it failed the terminal check, and a shell session with two error observations still succeeded.",
    "bodyKn": "ವಿಭಾಗ 3 (ಊಹಿಸಿದ ಪ್ರತಿ-ಹಂತ ನಿಖರತೆ, seed 1, 20,000 episodes): 95 ಶೇಕಡಾ ಹಂತ ನಿಖರತೆಯಲ್ಲಿ ಅಳೆದ ಹಂತ ಯಶಸ್ಸು 95.0 ಶೇಕಡಾ ಆದರೆ ಕಾರ್ಯ ಯಶಸ್ಸು 3 ಹಂತಗಳಲ್ಲಿ 85.0 ಶೇಕಡಾ, 10 ರಲ್ಲಿ 59.7 ಮತ್ತು 30 ರಲ್ಲಿ 21.4 ಶೇಕಡಾ, p ಘಾತ n ಗೆ ಹೊಂದುತ್ತದೆ (85.7, 59.9, 21.5). ಪ್ರತಿ ಹಂತಕ್ಕೆ 90 ಶೇಕಡಾದಲ್ಲಿ 30-ಹಂತ ಕಾರ್ಯ 4.1 ಶೇಕಡಾ ಬಾರಿ ಯಶಸ್ವಿಯಾಯಿತು. ತಪ್ಪು ಹಂತಗಳಲ್ಲಿ ಅರ್ಧ ಚೇತರಿಸಬಹುದಾದರೆ (ಊಹೆ), 95 ಶೇಕಡಾದಲ್ಲಿ 30-ಹಂತ ಯಶಸ್ಸು 46.9 ಶೇಕಡಾಕ್ಕೆ ಏರಿತು. ಈ ಸಂಖ್ಯೆಗಳು ಹೇಳಿದ ಊಹೆಗಳಿಂದ ಬಂದವು, ಮಾದರಿಯಿಂದ ಅಲ್ಲ; ಹಂತ ನಿಖರತೆ ಮಾತ್ರ ದಾರಿತಪ್ಪಿಸುವ ಶೀರ್ಷಿಕೆ ಏಕೆ ಎಂದು ಅವು ತೋರಿಸುತ್ತವೆ. ವಿಭಾಗ 2: ಸರಿಯಾದ ಫೈಲ್ ಬರೆದು ನಂತರ ಅಳಿಸಿದ agent ಅಂತಿಮ ಪರಿಶೀಲನೆ ವಿಫಲವಾಯಿತು, ಮತ್ತು ಎರಡು ದೋಷ ಗಮನಿಕೆಗಳಿದ್ದ shell ಅಧಿವೇಶನ ಇನ್ನೂ ಯಶಸ್ವಿಯಾಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Contamination and Weak Tests Both Inflate a Score",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Contamination ಮತ್ತು ದುರ್ಬಲ Tests ಎರಡೂ ಅಂಕ ಉಬ್ಬಿಸುತ್ತವೆ",
    "bodyEn": "Section 4 (assumed 40 percent real skill, 500 tasks): with 0 percent of tasks memorised the reported score was 39.4 percent; with 60 percent memorised it was 73.8 percent while the unseen-task column stayed between 36 and 43 percent, which includes sampling noise at this size. The gap between the two columns is the signal, and it needs a held-out set. Section 5: the Part 1 patches scored 3 of 4 resolved under the weak 3-test suite (correct, hard-coded, int-only) and 1 of 4 under the 8-test suite (correct only). Section 6: with invented relative costs, agent B had the highest success (86.3 percent) but the highest cost per success (2.78), agent C the lowest success (35.3 percent) but the lowest cost per success (0.71), so the ranking depends on which column you read.",
    "bodyKn": "ವಿಭಾಗ 4 (ಊಹಿಸಿದ 40 ಶೇಕಡಾ ನಿಜ ಕೌಶಲ, 500 ಕಾರ್ಯಗಳು): 0 ಶೇಕಡಾ ಕಾರ್ಯಗಳು ನೆನಪಿಟ್ಟಿದ್ದಾಗ ವರದಿ ಅಂಕ 39.4 ಶೇಕಡಾ; 60 ಶೇಕಡಾ ನೆನಪಿಟ್ಟಿದ್ದಾಗ 73.8 ಶೇಕಡಾ, ಆದರೆ unseen-task ಕಾಲಮ್ 36 ರಿಂದ 43 ಶೇಕಡಾ ನಡುವೆ ಇತ್ತು, ಇದು ಈ ಗಾತ್ರದ ಮಾದರಿ ಶಬ್ದ ಒಳಗೊಂಡಿದೆ. ಎರಡು ಕಾಲಮ್‌ಗಳ ನಡುವಿನ ಅಂತರ ಸಂಕೇತ, ಮತ್ತು ಅದಕ್ಕೆ held-out ಗುಂಪು ಬೇಕು. ವಿಭಾಗ 5: ಭಾಗ 1 ರ patches ದುರ್ಬಲ 3-test suite ಅಡಿ 4 ರಲ್ಲಿ 3 resolved (ಸರಿಯಾದ, hard-coded, int-ಮಾತ್ರ) ಮತ್ತು 8-test suite ಅಡಿ 4 ರಲ್ಲಿ 1 (ಸರಿಯಾದದ್ದು ಮಾತ್ರ). ವಿಭಾಗ 6: ಕಲ್ಪಿತ ಸಾಪೇಕ್ಷ ವೆಚ್ಚಗಳೊಂದಿಗೆ agent B ಗೆ ಅತ್ಯಧಿಕ ಯಶಸ್ಸು (86.3 ಶೇಕಡಾ) ಆದರೆ ಯಶಸ್ಸಿಗೆ ಅತ್ಯಧಿಕ ವೆಚ್ಚ (2.78), agent C ಗೆ ಅತ್ಯಲ್ಪ ಯಶಸ್ಸು (35.3 ಶೇಕಡಾ) ಆದರೆ ಯಶಸ್ಸಿಗೆ ಅತ್ಯಲ್ಪ ವೆಚ್ಚ (0.71), ಆದ್ದರಿಂದ ಶ್ರೇಯಾಂಕ ನೀವು ಯಾವ ಕಾಲಮ್ ಓದುತ್ತೀರಿ ಎಂಬುದರ ಮೇಲೆ ಅವಲಂಬಿತ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Benchmarks guide which agents get built and trusted, so the ways a score can mislead (compounding, contamination, weak tests, hidden cost) have to be measured and reported along with the headline number.",
    "bodyKn": "Benchmarks ಯಾವ agents ನಿರ್ಮಿಸಲ್ಪಡುತ್ತವೆ ಮತ್ತು ನಂಬಲ್ಪಡುತ್ತವೆ ಎಂದು ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತವೆ, ಆದ್ದರಿಂದ ಅಂಕ ದಾರಿತಪ್ಪಿಸಬಹುದಾದ ವಿಧಾನಗಳನ್ನು (ಸಂಯೋಜನೆ, contamination, ದುರ್ಬಲ tests, ಮರೆಯಾದ ವೆಚ್ಚ) ಶೀರ್ಷಿಕೆ ಸಂಖ್ಯೆಯ ಜೊತೆ ಅಳೆದು ವರದಿ ಮಾಡಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"95 percent step accuracy means a 95 percent reliable agent.\" Under the assumed rate it finished 59.7 percent of 10-step tasks and 21.4 percent of 30-step tasks.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"95 ಶೇಕಡಾ ಹಂತ ನಿಖರತೆ ಎಂದರೆ 95 ಶೇಕಡಾ ವಿಶ್ವಾಸಾರ್ಹ agent.\" ಊಹಿಸಿದ ದರದಲ್ಲಿ ಅದು 10-ಹಂತ ಕಾರ್ಯಗಳಲ್ಲಿ 59.7 ಶೇಕಡಾ ಮತ್ತು 30-ಹಂತ ಕಾರ್ಯಗಳಲ್ಲಿ 21.4 ಶೇಕಡಾ ಮುಗಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Environment: returns observations to actions. Terminal success: judged on the final state. Step accuracy: share of correct individual steps. Contamination: the model saw benchmark items. Held-out set: tasks kept out of any training or tuning. Cost per success: cost divided by success rate.",
    "bodyKn": "Environment: ಕ್ರಿಯೆಗಳಿಗೆ ಗಮನಿಕೆ ಮರಳಿಸುತ್ತದೆ. Terminal success: ಅಂತಿಮ ಸ್ಥಿತಿಯಲ್ಲಿ ತೀರ್ಮಾನ. Step accuracy: ಸರಿಯಾದ ವೈಯಕ್ತಿಕ ಹಂತಗಳ ಪಾಲು. Contamination: ಮಾದರಿ benchmark ಅಂಶಗಳನ್ನು ನೋಡಿದೆ. Held-out set: ಯಾವುದೇ ತರಬೇತಿ ಅಥವಾ ಹೊಂದಾಣಿಕೆಯಿಂದ ಹೊರಗಿಟ್ಟ ಕಾರ್ಯಗಳು. Cost per success: ವೆಚ್ಚ ಭಾಗಿಸು ಯಶಸ್ಸಿನ ದರ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A shell session with two error observations still succeeded. 2) Writing the right file and then deleting it failed the terminal check. 3) At an assumed 95 percent per step, 10-step success was 59.7 and 30-step 21.4 percent. 4) With 60 percent memorised the reported score was 73.8 percent while unseen-task skill stayed near 40. 5) Weak tests accepted 3 of 4 patches and strong tests 1 of 4. 6) The best agent by success was the worst by cost per success.",
    "bodyKn": "1) ಎರಡು ದೋಷ ಗಮನಿಕೆಗಳಿದ್ದ shell ಅಧಿವೇಶನ ಇನ್ನೂ ಯಶಸ್ವಿಯಾಯಿತು. 2) ಸರಿಯಾದ ಫೈಲ್ ಬರೆದು ಅಳಿಸಿದ್ದು ಅಂತಿಮ ಪರಿಶೀಲನೆ ವಿಫಲಗೊಳಿಸಿತು. 3) ಊಹಿಸಿದ ಪ್ರತಿ ಹಂತ 95 ಶೇಕಡಾದಲ್ಲಿ 10-ಹಂತ ಯಶಸ್ಸು 59.7 ಮತ್ತು 30-ಹಂತ 21.4 ಶೇಕಡಾ. 4) 60 ಶೇಕಡಾ ನೆನಪಿಟ್ಟಾಗ ವರದಿ ಅಂಕ 73.8 ಶೇಕಡಾ ಆದರೆ unseen-task ಕೌಶಲ 40 ರ ಹತ್ತಿರ ಉಳಿಯಿತು. 5) ದುರ್ಬಲ tests 4 ರಲ್ಲಿ 3 ಮತ್ತು ಬಲಿಷ್ಠ tests 4 ರಲ್ಲಿ 1 patch ಸ್ವೀಕರಿಸಿದವು. 6) ಯಶಸ್ಸಿನಲ್ಲಿ ಉತ್ತಮ agent ಯಶಸ್ಸಿಗೆ ವೆಚ್ಚದಲ್ಲಿ ಕೆಟ್ಟದಾಗಿತ್ತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why did a 95 percent step accuracy give about 60 percent success at 10 steps?",
      "qKn": "95 ಶೇಕಡಾ ಹಂತ ನಿಖರತೆ 10 ಹಂತಗಳಲ್ಲಿ ಸುಮಾರು 60 ಶೇಕಡಾ ಯಶಸ್ಸು ಏಕೆ ನೀಡಿತು?",
      "opts": [
       "Bad luck",
       "Step successes multiply: 0.95 to the power 10 is about 0.60",
       "The environment was broken",
       "Recovery was on"
      ],
      "optsKn": [
       "ದುರದೃಷ್ಟ",
       "ಹಂತ ಯಶಸ್ಸುಗಳು ಗುಣಿಸುತ್ತವೆ: 0.95 ಘಾತ 10 ಸುಮಾರು 0.60",
       "ಪರಿಸರ ಮುರಿದಿತ್ತು",
       "ಚೇತರಿಕೆ ಆನ್ ಆಗಿತ್ತು"
      ],
      "correct": 1
     },
     {
      "q": "What status do the step accuracies and the 40 percent skill have?",
      "qKn": "ಹಂತ ನಿಖರತೆಗಳು ಮತ್ತು 40 ಶೇಕಡಾ ಕೌಶಲದ ಸ್ಥಿತಿ ಏನು?",
      "opts": [
       "Measured from real agents",
       "Assumptions chosen for the experiments",
       "Published AgentBench numbers",
       "Fixed constants of nature"
      ],
      "optsKn": [
       "ನಿಜ agents ನಿಂದ ಅಳೆದವು",
       "ಪ್ರಯೋಗಗಳಿಗೆ ಆರಿಸಿದ ಊಹೆಗಳು",
       "ಪ್ರಕಟಿತ AgentBench ಸಂಖ್ಯೆಗಳು",
       "ಪ್ರಕೃತಿಯ ಸ್ಥಿರಾಂಕಗಳು"
      ],
      "correct": 1
     },
     {
      "q": "How is contamination visible in the lab output?",
      "qKn": "Contamination ಲ್ಯಾಬ್ output ನಲ್ಲಿ ಹೇಗೆ ಕಾಣಿಸುತ್ತದೆ?",
      "opts": [
       "Reported score and unseen-task score diverge",
       "Both scores fall",
       "The tasks disappear",
       "Cost rises"
      ],
      "optsKn": [
       "ವರದಿ ಅಂಕ ಮತ್ತು unseen-task ಅಂಕ ಬೇರೆಯಾಗುತ್ತವೆ",
       "ಎರಡೂ ಅಂಕ ಇಳಿಯುತ್ತವೆ",
       "ಕಾರ್ಯಗಳು ಮಾಯವಾಗುತ್ತವೆ",
       "ವೆಚ್ಚ ಏರುತ್ತದೆ"
      ],
      "correct": 0
     },
     {
      "q": "What happened to the agent that wrote report.txt and then deleted it?",
      "qKn": "report.txt ಬರೆದು ನಂತರ ಅಳಿಸಿದ agent ಗೆ ಏನಾಯಿತು?",
      "opts": [
       "It succeeded",
       "It failed the terminal check on the final state",
       "It was rerun",
       "It was ignored"
      ],
      "optsKn": [
       "ಯಶಸ್ವಿಯಾಯಿತು",
       "ಅಂತಿಮ ಸ್ಥಿತಿಯ ಮೇಲೆ ಅಂತಿಮ ಪರಿಶೀಲನೆ ವಿಫಲವಾಯಿತು",
       "ಮರುಚಲಾಯಿಸಲಾಯಿತು",
       "ನಿರ್ಲಕ್ಷಿಸಲಾಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why report cost per success as well as success rate?",
      "qKn": "ಯಶಸ್ಸಿನ ದರದ ಜೊತೆ ಯಶಸ್ಸಿಗೆ ವೆಚ್ಚವನ್ನೂ ಏಕೆ ವರದಿ ಮಾಡಬೇಕು?",
      "opts": [
       "It is required by law",
       "The agent with the best success rate had the worst cost per success",
       "Cost is always equal",
       "It hides failures"
      ],
      "optsKn": [
       "ಅದು ಕಾನೂನು ಅಗತ್ಯ",
       "ಉತ್ತಮ ಯಶಸ್ಸಿನ ದರದ agent ಯಶಸ್ಸಿಗೆ ಅತ್ಯಂತ ಕೆಟ್ಟ ವೆಚ್ಚ ಹೊಂದಿತ್ತು",
       "ವೆಚ್ಚ ಯಾವಾಗಲೂ ಸಮ",
       "ಅದು ವೈಫಲ್ಯ ಮರೆಮಾಡುತ್ತದೆ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
