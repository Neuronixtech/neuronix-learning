module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215ef",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Parallel, Swarm and Networked Architectures (Part 1 of 3) — Sequential, Fixed and Swarm",
 "titleKn": "ಸಮಾಂತರ, ಸ್ವಾರ್ಮ್ ಮತ್ತು ನೆಟ್‌ವರ್ಕ್ ವಾಸ್ತುಶಿಲ್ಪಗಳು (ಭಾಗ 1 / 3) — ಅನುಕ್ರಮ, ನಿಗದಿತ ಮತ್ತು ಸ್ವಾರ್ಮ್",
 "desc": "Run three execution strategies with threads and a simulator and find where extra workers stop helping.",
 "descKn": "threads ಮತ್ತು ಸಿಮ್ಯುಲೇಟರ್‌ನೊಂದಿಗೆ ಮೂರು ಕಾರ್ಯಗತಗೊಳಿಕೆ ತಂತ್ರಗಳನ್ನು ಓಡಿಸಿ ಮತ್ತು ಹೆಚ್ಚುವರಿ ಕೆಲಸಗಾರರು ಸಹಾಯ ನಿಲ್ಲಿಸುವ ಸ್ಥಳ ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Run three strategies.",
  "Use a simulator.",
  "Find the floor.",
  "Read speedup and efficiency.",
  "Cost a supervisor."
 ],
 "objectivesKn": [
  "ಮೂರು ತಂತ್ರಗಳನ್ನು ಓಡಿಸಿ.",
  "ಸಿಮ್ಯುಲೇಟರ್ ಬಳಸಿ.",
  "ಕನಿಷ್ಠ ಮಿತಿ ಕಂಡುಹಿಡಿಯಿರಿ.",
  "ವೇಗವರ್ಧನೆ ಮತ್ತು ದಕ್ಷತೆ ಓದಿ.",
  "supervisor ವೆಚ್ಚ ಎಣಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Parallel, Swarm and Networked Architectures (Part 1 of 3)",
    "textKn": "ಸಮಾಂತರ, ಸ್ವಾರ್ಮ್ ಮತ್ತು ನೆಟ್‌ವರ್ಕ್ ವಾಸ್ತುಶಿಲ್ಪಗಳು (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: sequential, fixed-assignment and shared-queue execution with real threads and a deterministic simulator, equal tasks, a long task, speedup against worker count and the cost of a central decision. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind sequential, fixed and shared-queue execution, continuous workers with sentinels, back-pressure, retries, backoff, idempotency, starvation, a retry deadlock, an in-process event bus with routing, correlation ids, delivery guarantees, dead letters and message validation, not the real software, and work is time.sleep or scripted, queues and the bus are in one process, the task list is our own because the lesson paste was cut off, thread timings vary from run to run and nothing survives a crash, so no real LLM behaviour is measured. The original code/main.py was not supplied and the lesson task list was cut off in the paste, so the labs are our own implementation. Matrix, NATS, Kafka and SQS are described in the lesson and were not run, and thread timings vary between runs. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ನಿಜ threads ಮತ್ತು ನಿರ್ಧಾರಿತ ಸಿಮ್ಯುಲೇಟರ್‌ನೊಂದಿಗೆ ಅನುಕ್ರಮ, ನಿಗದಿತ-ಹಂಚಿಕೆ ಮತ್ತು ಹಂಚಿಕೆಯ-ಸರದಿ ಕಾರ್ಯಗತಗೊಳಿಕೆ, ಸಮಾನ ಕೆಲಸಗಳು, ಒಂದು ಉದ್ದ ಕೆಲಸ, ಕೆಲಸಗಾರ ಸಂಖ್ಯೆಗೆ ವೇಗವರ್ಧನೆ ಮತ್ತು ಕೇಂದ್ರ ನಿರ್ಧಾರದ ವೆಚ್ಚ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಅನುಕ್ರಮ, ನಿಗದಿತ ಮತ್ತು ಹಂಚಿಕೆಯ-ಸರದಿ ಕಾರ್ಯಗತಗೊಳಿಕೆ, sentinel ಗಳೊಂದಿಗೆ ನಿರಂತರ ಕೆಲಸಗಾರರು, back-pressure, ಮರುಪ್ರಯತ್ನ, backoff, idempotency, ಹಸಿವು, ಮರುಪ್ರಯತ್ನ ಡೆಡ್‌ಲಾಕ್, ರೂಟಿಂಗ್ ಇರುವ ಪ್ರಕ್ರಿಯೆಯೊಳಗಿನ ಈವೆಂಟ್ ಬಸ್, correlation ids, ವಿತರಣೆ ಖಾತರಿಗಳು, ಡೆಡ್ ಲೆಟರ್‌ಗಳು ಮತ್ತು ಸಂದೇಶ ಮಾನ್ಯತೆ ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಕೆಲಸ time.sleep ಅಥವಾ ಸ್ಕ್ರಿಪ್ಟ್, ಸರದಿಗಳು ಮತ್ತು ಬಸ್ ಒಂದೇ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿವೆ, lesson paste ಕತ್ತರಿಸಲ್ಪಟ್ಟಿದ್ದರಿಂದ ಕೆಲಸದ ಪಟ್ಟಿ ನಮ್ಮದೇ, thread ಸಮಯಗಳು ಓಟದಿಂದ ಓಟಕ್ಕೆ ಬದಲಾಗುತ್ತವೆ ಮತ್ತು ಕ್ರ್ಯಾಶ್ ಆದಾಗ ಏನೂ ಉಳಿಯುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ನೀಡಲಾಗಿಲ್ಲ ಮತ್ತು lesson ಕೆಲಸದ ಪಟ್ಟಿ paste ನಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. Matrix, NATS, Kafka ಮತ್ತು SQS lesson ನಲ್ಲಿ ವಿವರಿಸಲ್ಪಟ್ಟಿವೆ ಮತ್ತು ಓಡಿಸಲಾಗಿಲ್ಲ, ಮತ್ತು thread ಸಮಯಗಳು ಓಟಗಳ ನಡುವೆ ಬದಲಾಗುತ್ತವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Queue Instead of a Dispatcher",
    "textKn": "ಡಿಸ್ಪ್ಯಾಚರ್ ಬದಲು ಸರದಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Sequential, Fixed and Swarm Execution",
    "headingKn": "ಅನುಕ್ರಮ, ನಿಗದಿತ ಮತ್ತು ಸ್ವಾರ್ಮ್ ಕಾರ್ಯಗತಗೊಳಿಕೆ",
    "bodyEn": "A supervisor that decides every assignment can become the bottleneck, so the lesson lets workers pull their own tasks from a shared queue. This part runs eight tasks three ways with real threads: one at a time, split into fixed buckets, and pulled from a queue. A small deterministic simulator checks the thread timings, and then it tests equal tasks, a single long task, speedup and efficiency against the worker count, and the arithmetic cost of a serial central decision.",
    "bodyKn": "ಪ್ರತಿ ನಿಯೋಜನೆಯನ್ನು ನಿರ್ಧರಿಸುವ supervisor ತಡೆಯಾಗಬಹುದು, ಆದ್ದರಿಂದ lesson ಕೆಲಸಗಾರರು ಹಂಚಿಕೆಯ ಸರದಿಯಿಂದ ತಮ್ಮ ಕೆಲಸ ತಾವೇ ಎಳೆಯಲು ಬಿಡುತ್ತದೆ. ಈ ಭಾಗ ಎಂಟು ಕೆಲಸಗಳನ್ನು ನಿಜ threads ನೊಂದಿಗೆ ಮೂರು ರೀತಿ ಓಡಿಸುತ್ತದೆ: ಒಂದೊಂದಾಗಿ, ನಿಗದಿತ ಬಕೆಟ್‌ಗಳಾಗಿ ವಿಭಜಿಸಿ, ಮತ್ತು ಸರದಿಯಿಂದ ಎಳೆದು. ಚಿಕ್ಕ ನಿರ್ಧಾರಿತ ಸಿಮ್ಯುಲೇಟರ್ thread ಸಮಯಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ, ನಂತರ ಸಮಾನ ಕೆಲಸಗಳು, ಒಂದೇ ಉದ್ದ ಕೆಲಸ, ಕೆಲಸಗಾರ ಸಂಖ್ಯೆಗೆ ವೇಗವರ್ಧನೆ ಮತ್ತು ದಕ್ಷತೆ, ಮತ್ತು ಸರಣಿ ಕೇಂದ್ರ ನಿರ್ಧಾರದ ಅಂಕಗಣಿತ ವೆಚ್ಚ ಪರೀಕ್ಷಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Three Strategies",
    "headingKn": "ಮೂರು ತಂತ್ರಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a shared queue balances uneven work but cannot split a task</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">queue</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">shared tasks</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">workers</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">pull when free</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">makespan</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">when all finish</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">floor</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">longest task</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a shared queue balances uneven work but cannot split a task</text></svg>",
    "captionEn": "One at a time, split up front, or pulled from a shared queue.",
    "captionKn": "ಒಂದೊಂದಾಗಿ, ಮೊದಲೇ ವಿಭಜನೆ, ಅಥವಾ ಹಂಚಿಕೆಯ ಸರದಿಯಿಂದ ಎಳೆಯುವುದು."
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
      "three strategies",
      "sequential, fixed and swarm on eight tasks"
     ],
     [
      "equal tasks",
      "20 tasks of 1.0 on four workers"
     ],
     [
      "one long task",
      "makespan against the lower bound"
     ],
     [
      "speedup",
      "1 to 8 workers"
     ],
     [
      "task spread",
      "counts per swarm worker"
     ],
     [
      "central cost",
      "2 ms per decision for 10000 tasks"
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
    "filename": "pw_1.py",
    "headingEn": "Tasks, work and the sequential run",
    "headingKn": "ಕೆಲಸಗಳು, ಕೆಲಸ ಮತ್ತು ಅನುಕ್ರಮ ಓಟ",
    "descEn": "Task is a frozen record, work sleeps for its scaled duration, and run_sequential runs the tasks one after another.",
    "descKn": "Task ಘನೀಕೃತ ದಾಖಲೆ, work ಅದರ ಮಾಪಿತ ಅವಧಿಗೆ ನಿದ್ರಿಸುತ್ತದೆ, ಮತ್ತು run_sequential ಕೆಲಸಗಳನ್ನು ಒಂದರ ನಂತರ ಒಂದು ಓಡಿಸುತ್ತದೆ.",
    "code": "class Task:\n    task_id: str\n    duration: float\n\n\nTASKS = [Task(\"A\", 1.0), Task(\"B\", 3.0), Task(\"C\", 1.0), Task(\"D\", 1.0), Task(\"E\", 2.0), Task(\"F\", 3.0), Task(\"G\", 1.0), Task(\"H\", 2.0)]\n\n\ndef work(task):\n    time.sleep(task.duration * SCALE)\n\n\ndef run_sequential(tasks):\n    t0 = time.perf_counter()\n    done = []\n    for t in tasks:\n        work(t)\n        done.append((t.task_id, \"main\"))\n    return time.perf_counter() - t0, done"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pw_1.py",
    "headingEn": "The swarm and the simulator",
    "headingKn": "ಸ್ವಾರ್ಮ್ ಮತ್ತು ಸಿಮ್ಯುಲೇಟರ್",
    "descEn": "run_swarm lets each thread take the next task from a shared queue, and simulate_swarm does the same without threads so the numbers are exact.",
    "descKn": "run_swarm ಪ್ರತಿ thread ಹಂಚಿಕೆಯ ಸರದಿಯಿಂದ ಮುಂದಿನ ಕೆಲಸ ತೆಗೆದುಕೊಳ್ಳಲು ಬಿಡುತ್ತದೆ, ಮತ್ತು simulate_swarm threads ಇಲ್ಲದೆ ಅದನ್ನೇ ಮಾಡುತ್ತದೆ, ಆದ್ದರಿಂದ ಸಂಖ್ಯೆಗಳು ನಿಖರ.",
    "code": "def run_swarm(tasks, n):\n    q = queue.Queue()\n    for t in tasks:\n        q.put(t)\n    done, lock = [], threading.Lock()\n\n    def worker(wid):\n        while True:\n            try:\n                t = q.get_nowait()\n            except queue.Empty:\n                return\n            work(t)\n            with lock:\n                done.append((t.task_id, f\"w{wid}\"))\n    t0 = time.perf_counter()\n    ths = [threading.Thread(target=worker, args=(i,)) for i in range(n)]\n    [t.start() for t in ths]\n    [t.join() for t in ths]\n    return time.perf_counter() - t0, done\n\n\ndef simulate_fixed(durs, n):\n    loads = [0.0] * n\n    for i, d in enumerate(durs):\n        loads[i % n] += d\n    return max(loads)\n\n\ndef simulate_swarm(durs, n):\n    free = [0.0] * n\n    for d in durs:\n        i = free.index(min(free))\n        free[i] += d\n    return max(free)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pw_1.py",
    "headingEn": "The experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the six experiments in order and prints the real result of each.",
    "descKn": "main() ಆರು ಪ್ರಯೋಗಗಳನ್ನು ಕ್ರಮವಾಗಿ ಓಡಿಸಿ ಪ್ರತಿಯೊಂದರ ನಿಜ ಫಲಿತಾಂಶ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    durs = [t.duration for t in TASKS]\n    section(\"1. Genuinely running: the three strategies on eight tasks\")\n    seq_t, seq_done = run_sequential(TASKS)\n    fix_t, fix_done, buckets = run_fixed(TASKS, 4)\n    swa_t, swa_done = run_swarm(TASKS, 4)\n    print(\"every task finished once: sequential\", sorted(x for x, _ in seq_done) == sorted(t.task_id for t in TASKS), \"| fixed\", sorted(x for x, _ in fix_done) == sorted(t.task_id for t in TASKS), \"| swarm\", sorted(x for x, _ in swa_done) == sorted(t.task_id for t in TASKS))\n    print(\"fixed buckets:\", [[t.task_id for t in b] for b in buckets])\n    print(\"sequential slower than fixed:\", seq_t > fix_t, \"| fixed slower than swarm:\", fix_t > swa_t, \"| swarm faster than sequential:\", swa_t < seq_t)\n    print(\"simulated makespans (task units):\", {\"sequential\": sum(durs), \"fixed\": simulate_fixed(durs, 4), \"swarm\": simulate_swarm(durs, 4)})\n    print(\"with this task list the fixed assignment puts B and F, both of length 3, on the same worker so that worker finishes last at 6 units, while the swarm lets whoever is free take the next task and finishes in 4; the thread timings agree in order with the simulator, the exact seconds change from run to run, and the durations are our own choice.\")\n\n    section(\"2. Genuinely running: equal tasks give the swarm no advantage\")\n    eq = [Task(f\"T{i}\", 1.0) for i in range(20)]\n    d_eq = [t.duration for t in eq]\n    print(\"simulated fixed:\", simulate_fixed(d_eq, 4), \"| swarm:\", simulate_swarm(d_eq, 4))\n    print(\"twenty equal tasks on four workers take 5 units under both strategies, because a static split is already perfectly balanced; a shared queue pays off when durations differ and costs a little coordination when they do not.\")\n\n    section(\"3. Genuinely running: one long task sets the floor\")\n    long_tasks = [3.0] + [1.0] * 11\n    for n in (1, 2, 4, 8, 16):\n        print(f\"workers={n:<2} swarm makespan={simulate_swarm(long_tasks, n):<5} lower bound={max(max(long_tasks), sum(long_tasks) / n):.2f}\")\n    print(\"the makespan falls to 3.0 at eight workers and stays there at sixteen, because one task of length 3 cannot be split, while at four workers the greedy queue gives 4.0 against a lower bound of 3.50 and at two workers 7.0 matches its bound; the bound is the larger of the longest task and total work divided by workers, and once the longest task dominates, more workers buy nothing.\")\n\n    section(\"4. Genuinely running: speedup against worker count\")\n    base = simulate_swarm(durs, 1)\n    for n in (1, 2, 3, 4, 6, 8):\n        m = simulate_swarm(durs, n)\n        print(f\"workers={n} makespan={m:<4} speedup={base / m:.2f} efficiency={base / m / n:.2f}\")\n    print(\"speedup climbs to 3.50 at four workers and 4.67 at six, then stays at 4.67 at eight because the longest task has length 3, and the efficiency, speedup per worker, drops to 0.58 at eight and is not even monotone (0.93 at three workers, 0.88 at two and four); extra workers cost money and stop buying time once the critical task is the limit, and greedy ordering makes the curve uneven.\")\n\n    section(\"5. Genuinely running: where tasks actually went in the swarm\")\n    per = {}\n    for tid, w in swa_done:\n        per.setdefault(w, []).append(tid)\n    print(\"tasks per worker (counts only, assignment varies by run):\", sorted(len(v) for v in per.values()), \"| total:\", sum(len(v) for v in per.values()))\n    print(\"the tasks are shared among the four workers and the counts add up to eight, and which worker took which task is decided by timing so it can differ between runs; a queue that hands each task to one requester removes the need for a central assigner, and it does not make the order of results predictable.\")\n\n    section(\"6. Genuinely computing: what a central decision costs\")\n    dispatch = 0.002\n    n_tasks = 10000\n    print(\"dispatch time per task at 2 ms, 10000 tasks, serial supervisor:\", n_tasks * dispatch, \"s | with 100 workers and a 0.5 s task:\", n_tasks * 0.5 / 100, \"s of work\")\n    print(\"a supervisor that spends 2 ms deciding each of 10000 tasks needs 20 seconds just to decide, while 100 workers need 50 seconds to do half-second tasks, so the supervisor is not the limit here and would become it if each decision cost an LLM call of a second; these numbers are invented to show the arithmetic and are not a measurement.\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the three strategies on eight tasks ---\nevery task finished once: sequential True | fixed True | swarm True\nfixed buckets: [['A', 'E'], ['B', 'F'], ['C', 'G'], ['D', 'H']]\nsequential slower than fixed: True | fixed slower than swarm: True | swarm faster than sequential: True\nsimulated makespans (task units): {'sequential': 14.0, 'fixed': 6.0, 'swarm': 4.0}\nwith this task list the fixed assignment puts B and F, both of length 3, on the same worker so that worker finishes last at 6 units, while the swarm lets whoever is free take the next task and finishes in 4; the thread timings agree in order with the simulator, the exact seconds change from run to run, and the durations are our own choice.\n\n--- 2. Genuinely running: equal tasks give the swarm no advantage ---\nsimulated fixed: 5.0 | swarm: 5.0\ntwenty equal tasks on four workers take 5 units under both strategies, because a static split is already perfectly balanced; a shared queue pays off when durations differ and costs a little coordination when they do not.\n\n--- 3. Genuinely running: one long task sets the floor ---\nworkers=1  swarm makespan=14.0  lower bound=14.00\nworkers=2  swarm makespan=7.0   lower bound=7.00\nworkers=4  swarm makespan=4.0   lower bound=3.50\nworkers=8  swarm makespan=3.0   lower bound=3.00\nworkers=16 swarm makespan=3.0   lower bound=3.00\nthe makespan falls to 3.0 at eight workers and stays there at sixteen, because one task of length 3 cannot be split, while at four workers the greedy queue gives 4.0 against a lower bound of 3.50 and at two workers 7.0 matches its bound; the bound is the larger of the longest task and total work divided by workers, and once the longest task dominates, more workers buy nothing.\n\n--- 4. Genuinely running: speedup against worker count ---\nworkers=1 makespan=14.0 speedup=1.00 efficiency=1.00\nworkers=2 makespan=8.0  speedup=1.75 efficiency=0.88\nworkers=3 makespan=5.0  speedup=2.80 efficiency=0.93\nworkers=4 makespan=4.0  speedup=3.50 efficiency=0.88\nworkers=6 makespan=3.0  speedup=4.67 efficiency=0.78\nworkers=8 makespan=3.0  speedup=4.67 efficiency=0.58\nspeedup climbs to 3.50 at four workers and 4.67 at six, then stays at 4.67 at eight because the longest task has length 3, and the efficiency, speedup per worker, drops to 0.58 at eight and is not even monotone (0.93 at three workers, 0.88 at two and four); extra workers cost money and stop buying time once the critical task is the limit, and greedy ordering makes the curve uneven.\n\n--- 5. Genuinely running: where tasks actually went in the swarm ---\ntasks per worker (counts only, assignment varies by run): [1, 2, 2, 3] | total: 8\nthe tasks are shared among the four workers and the counts add up to eight, and which worker took which task is decided by timing so it can differ between runs; a queue that hands each task to one requester removes the need for a central assigner, and it does not make the order of results predictable.\n\n--- 6. Genuinely computing: what a central decision costs ---\ndispatch time per task at 2 ms, 10000 tasks, serial supervisor: 20.0 s | with 100 workers and a 0.5 s task: 50.0 s of work\na supervisor that spends 2 ms deciding each of 10000 tasks needs 20 seconds just to decide, while 100 workers need 50 seconds to do half-second tasks, so the supervisor is not the limit here and would become it if each decision cost an LLM call of a second; these numbers are invented to show the arithmetic and are not a measurement."
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
    "headingEn": "Experiment 1: The three strategies on eight tasks",
    "headingKn": "ಪ್ರಯೋಗ 1: The three strategies on eight tasks",
    "bodyEn": "What it ran: The three strategies on eight tasks. What the lab concluded: with this task list the fixed assignment puts B and F, both of length 3, on the same worker so that worker finishes last at 6 units, while the swarm lets whoever is free take the next task and finishes in 4; the thread timings agree in order with the simulator, the exact seconds change from run to run, and the durations are our own choice.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The three strategies on eight tasks. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): with this task list the fixed assignment puts B and F, both of length 3, on the same worker so that worker finishes last at 6 units, while the swarm lets whoever is free take the next task and finishes in 4; the thread timings agree in order with the simulator, the exact seconds change from run to run, and the durations are our own choice."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: the three strategies on eight tasks ---\nevery task finished once: sequential True | fixed True | swarm True\nfixed buckets: [['A', 'E'], ['B', 'F'], ['C', 'G'], ['D', 'H']]\nsequential slower than fixed: True | fixed slower than swarm: True | swarm faster than sequential: True\nsimulated makespans (task units): {'sequential': 14.0, 'fixed': 6.0, 'swarm': 4.0}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Equal tasks give the swarm no advantage",
    "headingKn": "ಪ್ರಯೋಗ 2: Equal tasks give the swarm no advantage",
    "bodyEn": "What it ran: Equal tasks give the swarm no advantage. What the lab concluded: twenty equal tasks on four workers take 5 units under both strategies, because a static split is already perfectly balanced; a shared queue pays off when durations differ and costs a little coordination when they do not.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Equal tasks give the swarm no advantage. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): twenty equal tasks on four workers take 5 units under both strategies, because a static split is already perfectly balanced; a shared queue pays off when durations differ and costs a little coordination when they do not."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: equal tasks give the swarm no advantage ---\nsimulated fixed: 5.0 | swarm: 5.0"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: One long task sets the floor",
    "headingKn": "ಪ್ರಯೋಗ 3: One long task sets the floor",
    "bodyEn": "What it ran: One long task sets the floor. What the lab concluded: the makespan falls to 3.0 at eight workers and stays there at sixteen, because one task of length 3 cannot be split, while at four workers the greedy queue gives 4.0 against a lower bound of 3.50 and at two workers 7.0 matches its bound; the bound is the larger of the longest task and total work divided by workers, and once the longest task dominates, more workers buy nothing.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: One long task sets the floor. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the makespan falls to 3.0 at eight workers and stays there at sixteen, because one task of length 3 cannot be split, while at four workers the greedy queue gives 4.0 against a lower bound of 3.50 and at two workers 7.0 matches its bound; the bound is the larger of the longest task and total work divided by workers, and once the longest task dominates, more workers buy nothing."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: one long task sets the floor ---\nworkers=1  swarm makespan=14.0  lower bound=14.00\nworkers=2  swarm makespan=7.0   lower bound=7.00\nworkers=4  swarm makespan=4.0   lower bound=3.50\nworkers=8  swarm makespan=3.0   lower bound=3.00\nworkers=16 swarm makespan=3.0   lower bound=3.00"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Speedup against worker count",
    "headingKn": "ಪ್ರಯೋಗ 4: Speedup against worker count",
    "bodyEn": "What it ran: Speedup against worker count. What the lab concluded: speedup climbs to 3.50 at four workers and 4.67 at six, then stays at 4.67 at eight because the longest task has length 3, and the efficiency, speedup per worker, drops to 0.58 at eight and is not even monotone (0.93 at three workers, 0.88 at two and four); extra workers cost money and stop buying time once the critical task is the limit, and greedy ordering makes the curve uneven.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Speedup against worker count. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): speedup climbs to 3.50 at four workers and 4.67 at six, then stays at 4.67 at eight because the longest task has length 3, and the efficiency, speedup per worker, drops to 0.58 at eight and is not even monotone (0.93 at three workers, 0.88 at two and four); extra workers cost money and stop buying time once the critical task is the limit, and greedy ordering makes the curve uneven."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: speedup against worker count ---\nworkers=1 makespan=14.0 speedup=1.00 efficiency=1.00\nworkers=2 makespan=8.0  speedup=1.75 efficiency=0.88\nworkers=3 makespan=5.0  speedup=2.80 efficiency=0.93\nworkers=4 makespan=4.0  speedup=3.50 efficiency=0.88\nworkers=6 makespan=3.0  speedup=4.67 efficiency=0.78\nworkers=8 makespan=3.0  speedup=4.67 efficiency=0.58"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Where tasks actually went in the swarm",
    "headingKn": "ಪ್ರಯೋಗ 5: Where tasks actually went in the swarm",
    "bodyEn": "What it ran: Where tasks actually went in the swarm. What the lab concluded: the tasks are shared among the four workers and the counts add up to eight, and which worker took which task is decided by timing so it can differ between runs; a queue that hands each task to one requester removes the need for a central assigner, and it does not make the order of results predictable.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Where tasks actually went in the swarm. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the tasks are shared among the four workers and the counts add up to eight, and which worker took which task is decided by timing so it can differ between runs; a queue that hands each task to one requester removes the need for a central assigner, and it does not make the order of results predictable."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: where tasks actually went in the swarm ---\ntasks per worker (counts only, assignment varies by run): [1, 2, 2, 3] | total: 8"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: What a central decision costs",
    "headingKn": "ಪ್ರಯೋಗ 6: What a central decision costs",
    "bodyEn": "What it ran: What a central decision costs. What the lab concluded: a supervisor that spends 2 ms deciding each of 10000 tasks needs 20 seconds just to decide, while 100 workers need 50 seconds to do half-second tasks, so the supervisor is not the limit here and would become it if each decision cost an LLM call of a second; these numbers are invented to show the arithmetic and are not a measurement.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: What a central decision costs. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a supervisor that spends 2 ms deciding each of 10000 tasks needs 20 seconds just to decide, while 100 workers need 50 seconds to do half-second tasks, so the supervisor is not the limit here and would become it if each decision cost an LLM call of a second; these numbers are invented to show the arithmetic and are not a measurement."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely computing: what a central decision costs ---\ndispatch time per task at 2 ms, 10000 tasks, serial supervisor: 20.0 s | with 100 workers and a 0.5 s task: 50.0 s of work"
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
    "headingEn": "Genuinely Found: The Fixed Split Pairs the Long Tasks",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ನಿಗದಿತ ವಿಭಜನೆ ಉದ್ದ ಕೆಲಸಗಳನ್ನು ಜೋಡಿಸುತ್ತದೆ",
    "bodyEn": "Section 1: the fixed buckets were [A,E], [B,F], [C,G], [D,H], so the two tasks of length 3 shared one worker. The simulated makespans were 14.0 for sequential, 6.0 for fixed and 4.0 for the swarm, and the thread timings agreed in order. Section 2: twenty equal tasks gave 5.0 for both.",
    "bodyKn": "ವಿಭಾಗ 1: ನಿಗದಿತ ಬಕೆಟ್‌ಗಳು [A,E], [B,F], [C,G], [D,H] ಆದ್ದರಿಂದ ಉದ್ದ 3 ರ ಎರಡು ಕೆಲಸಗಳು ಒಂದೇ ಕೆಲಸಗಾರನನ್ನು ಹಂಚಿದವು. ಸಿಮ್ಯುಲೇಟೆಡ್ makespan ಅನುಕ್ರಮಕ್ಕೆ 14.0, ನಿಗದಿತಕ್ಕೆ 6.0 ಮತ್ತು ಸ್ವಾರ್ಮ್‌ಗೆ 4.0, ಮತ್ತು thread ಸಮಯಗಳು ಕ್ರಮದಲ್ಲಿ ಹೊಂದಿದವು. ವಿಭಾಗ 2: ಇಪ್ಪತ್ತು ಸಮಾನ ಕೆಲಸಗಳು ಎರಡಕ್ಕೂ 5.0 ನೀಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Longest Task Sets the Floor",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಉದ್ದದ ಕೆಲಸ ಕನಿಷ್ಠ ಮಿತಿ ನಿರ್ಧರಿಸುತ್ತದೆ",
    "bodyEn": "Section 3: with one task of length 3 the makespan was 14.0, 7.0, 4.0, 3.0, 3.0 for 1, 2, 4, 8 and 16 workers, against a lower bound of 3.50 at four workers. Section 4: speedup was 3.50 at 4 workers and 4.67 at 6 and 8, while efficiency fell to 0.58 at 8 workers and was 0.93 at 3.",
    "bodyKn": "ವಿಭಾಗ 3: ಉದ್ದ 3 ರ ಒಂದು ಕೆಲಸದೊಂದಿಗೆ 1, 2, 4, 8 ಮತ್ತು 16 ಕೆಲಸಗಾರರಿಗೆ makespan 14.0, 7.0, 4.0, 3.0, 3.0 ಆಗಿತ್ತು, ನಾಲ್ಕು ಕೆಲಸಗಾರರಲ್ಲಿ 3.50 ಕನಿಷ್ಠ ಮಿತಿಗೆ ವಿರುದ್ಧ. ವಿಭಾಗ 4: ವೇಗವರ್ಧನೆ 4 ಕೆಲಸಗಾರರಲ್ಲಿ 3.50 ಮತ್ತು 6 ಹಾಗೂ 8 ರಲ್ಲಿ 4.67, ಆದರೆ ದಕ್ಷತೆ 8 ಕೆಲಸಗಾರರಲ್ಲಿ 0.58 ಕ್ಕೆ ಇಳಿಯಿತು ಮತ್ತು 3 ರಲ್ಲಿ 0.93 ಆಗಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: What a Central Decision Costs",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕೇಂದ್ರ ನಿರ್ಧಾರದ ವೆಚ್ಚ",
    "bodyEn": "Section 6: 10000 tasks at 2 ms per serial decision need 20.0 s to decide, and 10000 half-second tasks on 100 workers need 50.0 s of work. Section 5: the swarm counts always add to 8, but which worker took which task varies between runs.",
    "bodyKn": "ವಿಭಾಗ 6: ಸರಣಿ ನಿರ್ಧಾರಕ್ಕೆ 2 ms ನಂತೆ 10000 ಕೆಲಸಗಳು ನಿರ್ಧರಿಸಲು 20.0 s ಬೇಕು, ಮತ್ತು 100 ಕೆಲಸಗಾರರ ಮೇಲೆ 10000 ಅರ್ಧ-ಸೆಕೆಂಡ್ ಕೆಲಸಗಳಿಗೆ 50.0 s ಕೆಲಸ ಬೇಕು. ವಿಭಾಗ 5: ಸ್ವಾರ್ಮ್ ಎಣಿಕೆಗಳು ಯಾವಾಗಲೂ 8 ಕ್ಕೆ ಸೇರುತ್ತವೆ, ಆದರೆ ಯಾವ ಕೆಲಸಗಾರ ಯಾವ ಕೆಲಸ ತೆಗೆದುಕೊಂಡ ಎಂಬುದು ಓಟಗಳ ನಡುವೆ ಬದಲಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A shared queue balances uneven work without a central assigner, but it cannot split a task, so the longest task and the cost of coordination decide how much extra workers can help.",
    "bodyKn": "ಹಂಚಿಕೆಯ ಸರದಿ ಕೇಂದ್ರ ನಿಯೋಜಕ ಇಲ್ಲದೆ ಅಸಮ ಕೆಲಸವನ್ನು ಸಮತೋಲನಗೊಳಿಸುತ್ತದೆ, ಆದರೆ ಕೆಲಸವನ್ನು ವಿಭಜಿಸಲಾರದು, ಆದ್ದರಿಂದ ಉದ್ದದ ಕೆಲಸ ಮತ್ತು ಸಮನ್ವಯ ವೆಚ್ಚ ಹೆಚ್ಚುವರಿ ಕೆಲಸಗಾರರು ಎಷ್ಟು ಸಹಾಯ ಮಾಡಬಲ್ಲರು ಎಂದು ನಿರ್ಧರಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"more workers always means proportionally faster.\" Speedup stayed at 4.67 from 6 to 8 workers while efficiency fell to 0.58.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಹೆಚ್ಚು ಕೆಲಸಗಾರರು ಯಾವಾಗಲೂ ಅನುಪಾತದಲ್ಲಿ ವೇಗ.\" ವೇಗವರ್ಧನೆ 6 ರಿಂದ 8 ಕೆಲಸಗಾರರಲ್ಲಿ 4.67 ರಲ್ಲಿ ಉಳಿದು ದಕ್ಷತೆ 0.58 ಕ್ಕೆ ಇಳಿಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Makespan: time until the last task finishes. Swarm: workers pull tasks from a shared queue. Speedup: sequential time divided by parallel time. Efficiency: speedup per worker. Lower bound: the larger of the longest task and total work divided by workers.",
    "bodyKn": "Makespan: ಕೊನೆಯ ಕೆಲಸ ಮುಗಿಯುವವರೆಗಿನ ಸಮಯ. ಸ್ವಾರ್ಮ್: ಕೆಲಸಗಾರರು ಹಂಚಿಕೆಯ ಸರದಿಯಿಂದ ಕೆಲಸ ಎಳೆಯುತ್ತಾರೆ. ವೇಗವರ್ಧನೆ: ಅನುಕ್ರಮ ಸಮಯ ಭಾಗಿಸಿ ಸಮಾಂತರ ಸಮಯ. ದಕ್ಷತೆ: ಪ್ರತಿ ಕೆಲಸಗಾರನಿಗೆ ವೇಗವರ್ಧನೆ. ಕನಿಷ್ಠ ಮಿತಿ: ಉದ್ದದ ಕೆಲಸ ಮತ್ತು ಒಟ್ಟು ಕೆಲಸ ಭಾಗಿಸಿ ಕೆಲಸಗಾರರು ಇವುಗಳಲ್ಲಿ ದೊಡ್ಡದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Fixed buckets put both tasks of length 3 on one worker: 6.0 against 4.0. 2) Equal tasks gave 5.0 for both strategies. 3) The makespan stopped at 3.0 from 8 workers. 4) Efficiency fell to 0.58 at 8 workers. 5) A serial 2 ms decision costs 20 s over 10000 tasks.",
    "bodyKn": "1) ನಿಗದಿತ ಬಕೆಟ್‌ಗಳು ಉದ್ದ 3 ರ ಎರಡೂ ಕೆಲಸಗಳನ್ನು ಒಂದೇ ಕೆಲಸಗಾರನಿಗೆ ಹಾಕಿದವು: 4.0 ಗೆ ವಿರುದ್ಧ 6.0. 2) ಸಮಾನ ಕೆಲಸಗಳು ಎರಡೂ ತಂತ್ರಗಳಿಗೆ 5.0 ನೀಡಿದವು. 3) makespan 8 ಕೆಲಸಗಾರರಿಂದ 3.0 ರಲ್ಲಿ ನಿಂತಿತು. 4) ದಕ್ಷತೆ 8 ಕೆಲಸಗಾರರಲ್ಲಿ 0.58 ಕ್ಕೆ ಇಳಿಯಿತು. 5) ಸರಣಿ 2 ms ನಿರ್ಧಾರ 10000 ಕೆಲಸಗಳ ಮೇಲೆ 20 s ವೆಚ್ಚ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What was the simulated makespan of the swarm on the eight tasks?",
      "qKn": "ಎಂಟು ಕೆಲಸಗಳ ಮೇಲೆ ಸ್ವಾರ್ಮ್‌ನ ಸಿಮ್ಯುಲೇಟೆಡ್ makespan ಎಷ್ಟು?",
      "opts": [
       "4.0",
       "6.0",
       "14.0",
       "3.0"
      ],
      "optsKn": [
       "4.0",
       "6.0",
       "14.0",
       "3.0"
      ],
      "correct": 0
     },
     {
      "q": "What did twenty equal tasks give for fixed and swarm?",
      "qKn": "ಇಪ್ಪತ್ತು ಸಮಾನ ಕೆಲಸಗಳು ನಿಗದಿತ ಮತ್ತು ಸ್ವಾರ್ಮ್‌ಗೆ ಏನು ನೀಡಿದವು?",
      "opts": [
       "5.0 for both",
       "4.0 and 5.0",
       "10.0 for both",
       "20.0 and 5.0"
      ],
      "optsKn": [
       "ಎರಡಕ್ಕೂ 5.0",
       "4.0 ಮತ್ತು 5.0",
       "ಎರಡಕ್ಕೂ 10.0",
       "20.0 ಮತ್ತು 5.0"
      ],
      "correct": 0
     },
     {
      "q": "At how many workers did the long-task makespan first reach 3.0?",
      "qKn": "ಉದ್ದ-ಕೆಲಸದ makespan ಮೊದಲು ಎಷ್ಟು ಕೆಲಸಗಾರರಲ್ಲಿ 3.0 ತಲುಪಿತು?",
      "opts": [
       "8",
       "4",
       "2",
       "16"
      ],
      "optsKn": [
       "8",
       "4",
       "2",
       "16"
      ],
      "correct": 0
     },
     {
      "q": "What was the efficiency at 8 workers?",
      "qKn": "8 ಕೆಲಸಗಾರರಲ್ಲಿ ದಕ್ಷತೆ ಎಷ್ಟು?",
      "opts": [
       "0.58",
       "0.88",
       "1.00",
       "0.93"
      ],
      "optsKn": [
       "0.58",
       "0.88",
       "1.00",
       "0.93"
      ],
      "correct": 0
     },
     {
      "q": "How long do 10000 serial decisions of 2 ms take?",
      "qKn": "2 ms ನ 10000 ಸರಣಿ ನಿರ್ಧಾರಗಳಿಗೆ ಎಷ್ಟು ಸಮಯ ಬೇಕು?",
      "opts": [
       "20 s",
       "2 s",
       "200 s",
       "50 s"
      ],
      "optsKn": [
       "20 s",
       "2 s",
       "200 s",
       "50 s"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
