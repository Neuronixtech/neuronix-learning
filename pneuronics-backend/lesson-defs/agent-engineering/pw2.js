module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215ef",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Parallel, Swarm and Networked Architectures (Part 2 of 3) — Shutdown, Retries and Idempotency",
 "titleKn": "ಸಮಾಂತರ, ಸ್ವಾರ್ಮ್ ಮತ್ತು ನೆಟ್‌ವರ್ಕ್ ವಾಸ್ತುಶಿಲ್ಪಗಳು (ಭಾಗ 2 / 3) — ಸ್ಥಗಿತ, ಮರುಪ್ರಯತ್ನ ಮತ್ತು Idempotency",
 "desc": "Make a swarm continuous and safe: sentinels, back-pressure, bounded retries, idempotency keys and aging.",
 "descKn": "ಸ್ವಾರ್ಮ್ ಅನ್ನು ನಿರಂತರ ಮತ್ತು ಸುರಕ್ಷಿತವಾಗಿಸಿ: sentinel, back-pressure, ಮಿತಿಯ ಮರುಪ್ರಯತ್ನ, idempotency key ಮತ್ತು aging.",
 "objectives": [
  "Stop workers cleanly.",
  "Push back on producers.",
  "Bound retries.",
  "Key every side effect.",
  "Prevent starvation."
 ],
 "objectivesKn": [
  "ಕೆಲಸಗಾರರನ್ನು ಸ್ವಚ್ಛವಾಗಿ ನಿಲ್ಲಿಸಿ.",
  "ಉತ್ಪಾದಕರನ್ನು ಹಿಂದಕ್ಕೆ ತಳ್ಳಿ.",
  "ಮರುಪ್ರಯತ್ನಗಳಿಗೆ ಮಿತಿ ಇಡಿ.",
  "ಪ್ರತಿ ಪಾರ್ಶ್ವ ಪರಿಣಾಮಕ್ಕೆ key ಇಡಿ.",
  "ಹಸಿವು ತಡೆಯಿರಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Parallel, Swarm and Networked Architectures (Part 2 of 3)",
    "textKn": "ಸಮಾಂತರ, ಸ್ವಾರ್ಮ್ ಮತ್ತು ನೆಟ್‌ವರ್ಕ್ ವಾಸ್ತುಶಿಲ್ಪಗಳು (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: continuous workers with sentinels, a bounded queue, retries and a budget, backoff, an idempotency key, starvation with aging and a retry deadlock. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind sequential, fixed and shared-queue execution, continuous workers with sentinels, back-pressure, retries, backoff, idempotency, starvation, a retry deadlock, an in-process event bus with routing, correlation ids, delivery guarantees, dead letters and message validation, not the real software, and work is time.sleep or scripted, queues and the bus are in one process, the task list is our own because the lesson paste was cut off, thread timings vary from run to run and nothing survives a crash, so no real LLM behaviour is measured. The original code/main.py was not supplied and the lesson task list was cut off in the paste, so the labs are our own implementation. Matrix, NATS, Kafka and SQS are described in the lesson and were not run, and thread timings vary between runs. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: sentinel ಗಳೊಂದಿಗೆ ನಿರಂತರ ಕೆಲಸಗಾರರು, ಮಿತಿಯ ಸರದಿ, ಬಜೆಟ್ ಇರುವ ಮರುಪ್ರಯತ್ನ, backoff, idempotency key, aging ಇರುವ ಹಸಿವು ಮತ್ತು ಮರುಪ್ರಯತ್ನ ಡೆಡ್‌ಲಾಕ್. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಅನುಕ್ರಮ, ನಿಗದಿತ ಮತ್ತು ಹಂಚಿಕೆಯ-ಸರದಿ ಕಾರ್ಯಗತಗೊಳಿಕೆ, sentinel ಗಳೊಂದಿಗೆ ನಿರಂತರ ಕೆಲಸಗಾರರು, back-pressure, ಮರುಪ್ರಯತ್ನ, backoff, idempotency, ಹಸಿವು, ಮರುಪ್ರಯತ್ನ ಡೆಡ್‌ಲಾಕ್, ರೂಟಿಂಗ್ ಇರುವ ಪ್ರಕ್ರಿಯೆಯೊಳಗಿನ ಈವೆಂಟ್ ಬಸ್, correlation ids, ವಿತರಣೆ ಖಾತರಿಗಳು, ಡೆಡ್ ಲೆಟರ್‌ಗಳು ಮತ್ತು ಸಂದೇಶ ಮಾನ್ಯತೆ ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಕೆಲಸ time.sleep ಅಥವಾ ಸ್ಕ್ರಿಪ್ಟ್, ಸರದಿಗಳು ಮತ್ತು ಬಸ್ ಒಂದೇ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿವೆ, lesson paste ಕತ್ತರಿಸಲ್ಪಟ್ಟಿದ್ದರಿಂದ ಕೆಲಸದ ಪಟ್ಟಿ ನಮ್ಮದೇ, thread ಸಮಯಗಳು ಓಟದಿಂದ ಓಟಕ್ಕೆ ಬದಲಾಗುತ್ತವೆ ಮತ್ತು ಕ್ರ್ಯಾಶ್ ಆದಾಗ ಏನೂ ಉಳಿಯುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ನೀಡಲಾಗಿಲ್ಲ ಮತ್ತು lesson ಕೆಲಸದ ಪಟ್ಟಿ paste ನಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. Matrix, NATS, Kafka ಮತ್ತು SQS lesson ನಲ್ಲಿ ವಿವರಿಸಲ್ಪಟ್ಟಿವೆ ಮತ್ತು ಓಡಿಸಲಾಗಿಲ್ಲ, ಮತ್ತು thread ಸಮಯಗಳು ಓಟಗಳ ನಡುವೆ ಬದಲಾಗುತ್ತವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Swarm That Survives",
    "textKn": "ಉಳಿಯುವ ಸ್ವಾರ್ಮ್",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Shutdown, Back-Pressure, Retries and Idempotency",
    "headingKn": "ಸ್ಥಗಿತ, Back-Pressure, ಮರುಪ್ರಯತ್ನ ಮತ್ತು Idempotency",
    "bodyEn": "Part 1 ran a queue that was filled once and drained. This part makes the workers continuous: they block on an empty queue, accept late tasks and stop on sentinels. A bounded queue pushes back on a fast producer, failed tasks are retried inside a budget with a backoff schedule, a duplicate charge is prevented by an idempotency key, a low-priority task starves until aging helps it, and a retry that shares a full queue can block every worker.",
    "bodyKn": "Part 1 ಒಮ್ಮೆ ತುಂಬಿ ಖಾಲಿಯಾಗುವ ಸರದಿ ಓಡಿಸಿತು. ಈ ಭಾಗ ಕೆಲಸಗಾರರನ್ನು ನಿರಂತರವಾಗಿಸುತ್ತದೆ: ಅವರು ಖಾಲಿ ಸರದಿಯಲ್ಲಿ ನಿರ್ಬಂಧಿತರಾಗಿ ಕಾಯುತ್ತಾರೆ, ತಡವಾದ ಕೆಲಸಗಳನ್ನು ಸ್ವೀಕರಿಸುತ್ತಾರೆ ಮತ್ತು sentinel ಗಳಲ್ಲಿ ನಿಲ್ಲುತ್ತಾರೆ. ಮಿತಿಯ ಸರದಿ ವೇಗದ ಉತ್ಪಾದಕನನ್ನು ಹಿಂದಕ್ಕೆ ತಳ್ಳುತ್ತದೆ, ವಿಫಲ ಕೆಲಸಗಳನ್ನು backoff ಕ್ರಮದೊಂದಿಗೆ ಬಜೆಟ್ ಒಳಗೆ ಮರುಪ್ರಯತ್ನಿಸಲಾಗುತ್ತದೆ, ಎರಡು ಬಾರಿ ಶುಲ್ಕ ವಿಧಿಸುವುದನ್ನು idempotency key ತಡೆಯುತ್ತದೆ, ಕಡಿಮೆ-ಆದ್ಯತೆಯ ಕೆಲಸ aging ಸಹಾಯ ಮಾಡುವವರೆಗೆ ಹಸಿವಿನಲ್ಲಿರುತ್ತದೆ, ಮತ್ತು ತುಂಬಿದ ಸರದಿ ಹಂಚಿಕೊಳ್ಳುವ ಮರುಪ್ರಯತ್ನ ಪ್ರತಿ ಕೆಲಸಗಾರನನ್ನು ತಡೆಯಬಹುದು."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Reliable Swarm",
    "headingKn": "ವಿಶ್ವಾಸಾರ್ಹ ಸ್ವಾರ್ಮ್",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a swarm that survives needs limits, retries and safe repeats</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">workers</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">block on get</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">bounded queue</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">push back</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">retry</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">budget + backoff</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">idempotency</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">key per effect</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a swarm that survives needs limits, retries and safe repeats</text></svg>",
    "captionEn": "Workers wait, queues push back, retries are bounded and effects are repeat-safe.",
    "captionKn": "ಕೆಲಸಗಾರರು ಕಾಯುತ್ತಾರೆ, ಸರದಿಗಳು ಹಿಂದಕ್ಕೆ ತಳ್ಳುತ್ತವೆ, ಮರುಪ್ರಯತ್ನಗಳಿಗೆ ಮಿತಿ ಮತ್ತು ಪರಿಣಾಮಗಳು ಪುನರಾವರ್ತನೆ-ಸುರಕ್ಷಿತ."
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
      "continuous workers",
      "late tasks and clean shutdown"
     ],
     [
      "bounded queue",
      "Full after a timeout"
     ],
     [
      "retries",
      "logical against physical work"
     ],
     [
      "backoff",
      "delays for attempts 0 to 6"
     ],
     [
      "idempotency",
      "balance 40 against 70"
     ],
     [
      "starvation and deadlock",
      "aging and blocked retries"
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
    "filename": "pw_2.py",
    "headingEn": "Continuous workers",
    "headingKn": "ನಿರಂತರ ಕೆಲಸಗಾರರು",
    "descEn": "continuous_workers blocks on get, accepts late tasks and exits on one sentinel per worker, and bounded_put_times shows a full queue refusing a put.",
    "descKn": "continuous_workers get ನಲ್ಲಿ ನಿರ್ಬಂಧಿತ, ತಡವಾದ ಕೆಲಸ ಸ್ವೀಕರಿಸಿ ಪ್ರತಿ ಕೆಲಸಗಾರನಿಗೆ ಒಂದು sentinel ನಲ್ಲಿ ನಿರ್ಗಮಿಸುತ್ತದೆ, ಮತ್ತು bounded_put_times ತುಂಬಿದ ಸರದಿ put ನಿರಾಕರಿಸುವುದನ್ನು ತೋರಿಸುತ್ತದೆ.",
    "code": "def continuous_workers(n_workers, tasks_late):\n    q = queue.Queue()\n    results, lock = [], threading.Lock()\n\n    def worker(wid):\n        while True:\n            item = q.get()\n            if item is SENTINEL:\n                q.task_done()\n                return\n            time.sleep(0.005)\n            with lock:\n                results.append((item, wid))\n            q.task_done()\n    ths = [threading.Thread(target=worker, args=(i,)) for i in range(n_workers)]\n    [t.start() for t in ths]\n    time.sleep(0.03)\n    for t in tasks_late:\n        q.put(t)\n    for _ in ths:\n        q.put(SENTINEL)\n    [t.join() for t in ths]\n    return results, [t.is_alive() for t in ths]\n\n\ndef bounded_put_times():\n    q = queue.Queue(maxsize=2)\n    q.put(\"a\"); q.put(\"b\")\n    try:\n        q.put(\"c\", timeout=0.05)\n        return \"accepted\"\n    except queue.Full:\n        return \"Full after timeout\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pw_2.py",
    "headingEn": "Retries, repeats and starvation",
    "headingKn": "ಮರುಪ್ರಯತ್ನ, ಪುನರಾವರ್ತನೆ ಮತ್ತು ಹಸಿವು",
    "descEn": "retry_run counts attempts within a budget, Account has a naive and an idempotent charge, priority_run adds aging, and retry_deadlock detects blocked retries with a timeout.",
    "descKn": "retry_run ಬಜೆಟ್ ಒಳಗೆ ಪ್ರಯತ್ನ ಎಣಿಸುತ್ತದೆ, Account ಸರಳ ಮತ್ತು idempotent ಶುಲ್ಕ ಹೊಂದಿದೆ, priority_run aging ಸೇರಿಸುತ್ತದೆ, ಮತ್ತು retry_deadlock ತಡೆಯಾದ ಮರುಪ್ರಯತ್ನಗಳನ್ನು timeout ನಿಂದ ಪತ್ತೆ ಮಾಡುತ್ತದೆ.",
    "code": "def retry_run(fail_plan, max_attempts=3):\n    attempts, outcome = {}, {}\n    for tid, fails in fail_plan.items():\n        for a in range(1, max_attempts + 1):\n            attempts[tid] = a\n            if a > fails:\n                outcome[tid] = \"success\"\n                break\n        else:\n            outcome[tid] = \"failed\"\n    return attempts, outcome\n\n\ndef backoff(k, base=0.5, cap=8.0):\n    return min(cap, base * 2 ** k)\n\n\nclass Account:\n    def __init__(self):\n        self.balance = 100\n        self.seen = set()\n\n    def charge_naive(self, amount):\n        self.balance -= amount\n\n    def charge_idempotent(self, key, amount):\n        if key in self.seen:\n            return \"duplicate ignored\"\n        self.seen.add(key)\n        self.balance -= amount\n        return \"charged\"\n\n\ndef priority_run(aging):\n    heap, order, tick = [], [], 0\n    heapq.heappush(heap, (5, 0, \"low-1\"))\n    for step in range(1, 9):\n        heapq.heappush(heap, (1, step, f\"high-{step}\"))\n        if aging and step % 3 == 0:\n            heap = [(max(0, p - 2) if name.startswith(\"low\") else p, s, name) for p, s, name in heap]\n            heapq.heapify(heap)\n        p, s, name = heapq.heappop(heap)\n        order.append(name)\n    return order\n\n\ndef retry_deadlock(maxsize, workers):\n    q = queue.Queue(maxsize=maxsize)\n    stuck = []\n\n    def w(i):\n        try:\n            q.put(f\"retry-{i}\", timeout=0.3)\n        except queue.Full:\n            stuck.append(i)\n    for i in range(maxsize):\n        q.put(f\"pending-{i}\")\n    ths = [threading.Thread(target=w, args=(i,)) for i in range(workers)]\n    [t.start() for t in ths]\n    [t.join() for t in ths]\n    return sorted(stuck)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pw_2.py",
    "headingEn": "The experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the six experiments in order and prints the real result of each.",
    "descKn": "main() ಆರು ಪ್ರಯೋಗಗಳನ್ನು ಕ್ರಮವಾಗಿ ಓಡಿಸಿ ಪ್ರತಿಯೊಂದರ ನಿಜ ಫಲಿತಾಂಶ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: workers that wait, late tasks and a clean shutdown\")\n    res, alive = continuous_workers(3, [f\"late-{i}\" for i in range(6)])\n    print(\"tasks done:\", len(res), \"| all late tasks done:\", sorted(r[0] for r in res) == [f\"late-{i}\" for i in range(6)], \"| workers still alive after sentinels:\", sum(alive))\n    print(\"the three workers were already blocked on an empty queue when six tasks arrived 30 ms later, all six were processed once, and one sentinel per worker ended every thread with none left running; blocking on get() means idle workers use no polling loop, and the sentinel count must equal the worker count or some thread waits forever.\")\n\n    section(\"2. Genuinely running: a full queue pushes back\")\n    print(\"third put into a queue of size 2 with a 50 ms timeout:\", bounded_put_times())\n    print(\"a bounded queue refuses the third item after waiting, so a fast producer is slowed or told to stop instead of filling memory; the producer has to handle Full, and an unbounded queue would simply accept everything and hide the overload.\")\n\n    section(\"3. Genuinely running: retries and logical against physical work\")\n    attempts, outcome = retry_run({\"T1\": 0, \"T2\": 0, \"T3\": 1, \"T4\": 5})\n    print(\"attempts:\", attempts, \"| outcome:\", outcome)\n    print(\"logical tasks:\", len(outcome), \"| processing attempts:\", sum(attempts.values()), \"| failed:\", sum(v == \"failed\" for v in outcome.values()))\n    print(\"T3 failed once and succeeded on the second attempt and T4, which fails five times, gave up after the budget of three, so four logical tasks cost seven processing attempts and one is reported failed instead of being retried forever; counting attempts separately from tasks is what makes retry cost visible.\")\n\n    section(\"4. Genuinely computing: exponential backoff\")\n    print(\"delays for attempts 0..6:\", [backoff(k) for k in range(7)])\n    print(\"each retry waits twice as long as the previous one until it reaches the cap of 8.0, which spreads out retries after a failure; this schedule has no random jitter, so many workers that fail together would still retry together, and nothing here actually sleeps.\")\n\n    section(\"5. Genuinely running: a crash after the side effect\")\n    naive = Account()\n    naive.charge_naive(30)\n    naive.charge_naive(30)\n    safe = Account()\n    r1 = safe.charge_idempotent(\"order-17\", 30)\n    r2 = safe.charge_idempotent(\"order-17\", 30)\n    print(\"balance after a retry without a key:\", naive.balance, \"| with an idempotency key:\", safe.balance, \"|\", r1, \"/\", r2)\n    print(\"when a worker completes a charge and crashes before recording it, a plain retry charges twice and leaves 40, while the same retry with a key leaves 70 and reports the duplicate as ignored; the key set here lives in memory, so a real system would need it stored durably with the side effect.\")\n\n    section(\"6. Genuinely running: starvation and aging, then a retry deadlock\")\n    print(\"without aging:\", priority_run(False))\n    print(\"with aging   :\", priority_run(True))\n    print(\"workers blocked retrying into a full queue of size 2, 4 workers:\", retry_deadlock(2, 4), \"| size 4, 2 workers:\", retry_deadlock(4, 2))\n    print(\"the low-priority task never runs while high-priority tasks keep arriving unless its priority improves with waiting, in which case it is served by the sixth step; separately, when every worker tries to put a retry into an already full queue they all block, modelled here with no consumer draining the queue and detected by a timeout, because a put without a timeout would wait forever, so retries should not share a saturated queue; the lesson's own program was not available to run.\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: workers that wait, late tasks and a clean shutdown ---\ntasks done: 6 | all late tasks done: True | workers still alive after sentinels: 0\nthe three workers were already blocked on an empty queue when six tasks arrived 30 ms later, all six were processed once, and one sentinel per worker ended every thread with none left running; blocking on get() means idle workers use no polling loop, and the sentinel count must equal the worker count or some thread waits forever.\n\n--- 2. Genuinely running: a full queue pushes back ---\nthird put into a queue of size 2 with a 50 ms timeout: Full after timeout\na bounded queue refuses the third item after waiting, so a fast producer is slowed or told to stop instead of filling memory; the producer has to handle Full, and an unbounded queue would simply accept everything and hide the overload.\n\n--- 3. Genuinely running: retries and logical against physical work ---\nattempts: {'T1': 1, 'T2': 1, 'T3': 2, 'T4': 3} | outcome: {'T1': 'success', 'T2': 'success', 'T3': 'success', 'T4': 'failed'}\nlogical tasks: 4 | processing attempts: 7 | failed: 1\nT3 failed once and succeeded on the second attempt and T4, which fails five times, gave up after the budget of three, so four logical tasks cost seven processing attempts and one is reported failed instead of being retried forever; counting attempts separately from tasks is what makes retry cost visible.\n\n--- 4. Genuinely computing: exponential backoff ---\ndelays for attempts 0..6: [0.5, 1.0, 2.0, 4.0, 8.0, 8.0, 8.0]\neach retry waits twice as long as the previous one until it reaches the cap of 8.0, which spreads out retries after a failure; this schedule has no random jitter, so many workers that fail together would still retry together, and nothing here actually sleeps.\n\n--- 5. Genuinely running: a crash after the side effect ---\nbalance after a retry without a key: 40 | with an idempotency key: 70 | charged / duplicate ignored\nwhen a worker completes a charge and crashes before recording it, a plain retry charges twice and leaves 40, while the same retry with a key leaves 70 and reports the duplicate as ignored; the key set here lives in memory, so a real system would need it stored durably with the side effect.\n\n--- 6. Genuinely running: starvation and aging, then a retry deadlock ---\nwithout aging: ['high-1', 'high-2', 'high-3', 'high-4', 'high-5', 'high-6', 'high-7', 'high-8']\nwith aging   : ['high-1', 'high-2', 'high-3', 'high-4', 'high-5', 'low-1', 'high-6', 'high-7']\nworkers blocked retrying into a full queue of size 2, 4 workers: [0, 1, 2, 3] | size 4, 2 workers: [0, 1]\nthe low-priority task never runs while high-priority tasks keep arriving unless its priority improves with waiting, in which case it is served by the sixth step; separately, when every worker tries to put a retry into an already full queue they all block, modelled here with no consumer draining the queue and detected by a timeout, because a put without a timeout would wait forever, so retries should not share a saturated queue; the lesson's own program was not available to run."
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
    "headingEn": "Experiment 1: Workers that wait, late tasks and a clean shutdown",
    "headingKn": "ಪ್ರಯೋಗ 1: Workers that wait, late tasks and a clean shutdown",
    "bodyEn": "What it ran: Workers that wait, late tasks and a clean shutdown. What the lab concluded: the three workers were already blocked on an empty queue when six tasks arrived 30 ms later, all six were processed once, and one sentinel per worker ended every thread with none left running; blocking on get() means idle workers use no polling loop, and the sentinel count must equal the worker count or some thread waits forever.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Workers that wait, late tasks and a clean shutdown. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the three workers were already blocked on an empty queue when six tasks arrived 30 ms later, all six were processed once, and one sentinel per worker ended every thread with none left running; blocking on get() means idle workers use no polling loop, and the sentinel count must equal the worker count or some thread waits forever."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: workers that wait, late tasks and a clean shutdown ---\ntasks done: 6 | all late tasks done: True | workers still alive after sentinels: 0"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: A full queue pushes back",
    "headingKn": "ಪ್ರಯೋಗ 2: A full queue pushes back",
    "bodyEn": "What it ran: A full queue pushes back. What the lab concluded: a bounded queue refuses the third item after waiting, so a fast producer is slowed or told to stop instead of filling memory; the producer has to handle Full, and an unbounded queue would simply accept everything and hide the overload.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A full queue pushes back. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a bounded queue refuses the third item after waiting, so a fast producer is slowed or told to stop instead of filling memory; the producer has to handle Full, and an unbounded queue would simply accept everything and hide the overload."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: a full queue pushes back ---\nthird put into a queue of size 2 with a 50 ms timeout: Full after timeout"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Retries and logical against physical work",
    "headingKn": "ಪ್ರಯೋಗ 3: Retries and logical against physical work",
    "bodyEn": "What it ran: Retries and logical against physical work. What the lab concluded: T3 failed once and succeeded on the second attempt and T4, which fails five times, gave up after the budget of three, so four logical tasks cost seven processing attempts and one is reported failed instead of being retried forever; counting attempts separately from tasks is what makes retry cost visible.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Retries and logical against physical work. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): T3 failed once and succeeded on the second attempt and T4, which fails five times, gave up after the budget of three, so four logical tasks cost seven processing attempts and one is reported failed instead of being retried forever; counting attempts separately from tasks is what makes retry cost visible."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: retries and logical against physical work ---\nattempts: {'T1': 1, 'T2': 1, 'T3': 2, 'T4': 3} | outcome: {'T1': 'success', 'T2': 'success', 'T3': 'success', 'T4': 'failed'}\nlogical tasks: 4 | processing attempts: 7 | failed: 1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Exponential backoff",
    "headingKn": "ಪ್ರಯೋಗ 4: Exponential backoff",
    "bodyEn": "What it ran: Exponential backoff. What the lab concluded: each retry waits twice as long as the previous one until it reaches the cap of 8.0, which spreads out retries after a failure; this schedule has no random jitter, so many workers that fail together would still retry together, and nothing here actually sleeps.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Exponential backoff. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each retry waits twice as long as the previous one until it reaches the cap of 8.0, which spreads out retries after a failure; this schedule has no random jitter, so many workers that fail together would still retry together, and nothing here actually sleeps."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely computing: exponential backoff ---\ndelays for attempts 0..6: [0.5, 1.0, 2.0, 4.0, 8.0, 8.0, 8.0]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A crash after the side effect",
    "headingKn": "ಪ್ರಯೋಗ 5: A crash after the side effect",
    "bodyEn": "What it ran: A crash after the side effect. What the lab concluded: when a worker completes a charge and crashes before recording it, a plain retry charges twice and leaves 40, while the same retry with a key leaves 70 and reports the duplicate as ignored; the key set here lives in memory, so a real system would need it stored durably with the side effect.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A crash after the side effect. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): when a worker completes a charge and crashes before recording it, a plain retry charges twice and leaves 40, while the same retry with a key leaves 70 and reports the duplicate as ignored; the key set here lives in memory, so a real system would need it stored durably with the side effect."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: a crash after the side effect ---\nbalance after a retry without a key: 40 | with an idempotency key: 70 | charged / duplicate ignored"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: Starvation and aging, then a retry deadlock",
    "headingKn": "ಪ್ರಯೋಗ 6: Starvation and aging, then a retry deadlock",
    "bodyEn": "What it ran: Starvation and aging, then a retry deadlock. What the lab concluded: the low-priority task never runs while high-priority tasks keep arriving unless its priority improves with waiting, in which case it is served by the sixth step; separately, when every worker tries to put a retry into an already full queue they all block, modelled here with no consumer draining the queue and detected by a timeout, because a put without a timeout would wait forever, so retries should not share a saturated queue; the lesson's own program was not available to run.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Starvation and aging, then a retry deadlock. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the low-priority task never runs while high-priority tasks keep arriving unless its priority improves with waiting, in which case it is served by the sixth step; separately, when every worker tries to put a retry into an already full queue they all block, modelled here with no consumer draining the queue and detected by a timeout, because a put without a timeout would wait forever, so retries should not share a saturated queue; the lesson's own program was not available to run."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: starvation and aging, then a retry deadlock ---\nwithout aging: ['high-1', 'high-2', 'high-3', 'high-4', 'high-5', 'high-6', 'high-7', 'high-8']\nwith aging   : ['high-1', 'high-2', 'high-3', 'high-4', 'high-5', 'low-1', 'high-6', 'high-7']\nworkers blocked retrying into a full queue of size 2, 4 workers: [0, 1, 2, 3] | size 4, 2 workers: [0, 1]"
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
    "headingEn": "Genuinely Found: Logical Tasks Cost More Attempts",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ತಾರ್ಕಿಕ ಕೆಲಸಗಳಿಗೆ ಹೆಚ್ಚು ಪ್ರಯತ್ನ ಬೇಕು",
    "bodyEn": "Section 3: attempts were T1 1, T2 1, T3 2, T4 3, so four logical tasks cost 7 processing attempts and T4 was reported failed. Section 4: the backoff delays were 0.5, 1.0, 2.0, 4.0, 8.0, 8.0, 8.0. Section 1: all six late tasks ran once and 0 workers were left alive.",
    "bodyKn": "ವಿಭಾಗ 3: ಪ್ರಯತ್ನಗಳು T1 1, T2 1, T3 2, T4 3, ಆದ್ದರಿಂದ ನಾಲ್ಕು ತಾರ್ಕಿಕ ಕೆಲಸಗಳಿಗೆ 7 ಸಂಸ್ಕರಣಾ ಪ್ರಯತ್ನಗಳು ಬೇಕಾದವು ಮತ್ತು T4 ವಿಫಲ ಎಂದು ವರದಿಯಾಯಿತು. ವಿಭಾಗ 4: backoff ವಿಳಂಬಗಳು 0.5, 1.0, 2.0, 4.0, 8.0, 8.0, 8.0. ವಿಭಾಗ 1: ತಡವಾದ ಎಲ್ಲಾ ಆರು ಕೆಲಸಗಳು ಒಮ್ಮೆ ಓಡಿದವು ಮತ್ತು 0 ಕೆಲಸಗಾರರು ಜೀವಂತ ಉಳಿದರು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Key Saves the Customer",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: key ಗ್ರಾಹಕನನ್ನು ಉಳಿಸುತ್ತದೆ",
    "bodyEn": "Section 5: a plain retry after a crash left the balance at 40 and the idempotency key left it at 70 with \"duplicate ignored\". Section 2: the third put into a queue of size 2 gave \"Full after timeout\".",
    "bodyKn": "ವಿಭಾಗ 5: ಕ್ರ್ಯಾಶ್ ನಂತರ ಸರಳ ಮರುಪ್ರಯತ್ನ ಬ್ಯಾಲೆನ್ಸ್ ಅನ್ನು 40 ರಲ್ಲಿ ಬಿಟ್ಟಿತು ಮತ್ತು idempotency key ಅದನ್ನು \"duplicate ignored\" ನೊಂದಿಗೆ 70 ರಲ್ಲಿ ಬಿಟ್ಟಿತು. ವಿಭಾಗ 2: ಗಾತ್ರ 2 ರ ಸರದಿಗೆ ಮೂರನೇ put \"Full after timeout\" ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Starvation and the Retry Deadlock",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಹಸಿವು ಮತ್ತು ಮರುಪ್ರಯತ್ನ ಡೆಡ್‌ಲಾಕ್",
    "bodyEn": "Section 6: without aging low-1 never ran in eight steps, with aging it ran at step 6 after high-5, and blocked retries were workers [0, 1, 2, 3] for a full queue of 2 and [0, 1] for a full queue of 4 with 2 workers. The lesson program itself was not available to run.",
    "bodyKn": "ವಿಭಾಗ 6: aging ಇಲ್ಲದೆ low-1 ಎಂಟು ಹಂತಗಳಲ್ಲಿ ಎಂದೂ ಓಡಲಿಲ್ಲ, aging ಇದ್ದಾಗ high-5 ನಂತರ ಹಂತ 6 ರಲ್ಲಿ ಓಡಿತು, ಮತ್ತು ತಡೆಯಾದ ಮರುಪ್ರಯತ್ನಗಳು ಗಾತ್ರ 2 ತುಂಬಿದ ಸರದಿಗೆ ಕೆಲಸಗಾರರು [0, 1, 2, 3] ಮತ್ತು 2 ಕೆಲಸಗಾರರ ಗಾತ್ರ 4 ತುಂಬಿದ ಸರದಿಗೆ [0, 1]. lesson ನ ಸ್ವಂತ ಪ್ರೋಗ್ರಾಂ ಓಡಿಸಲು ಲಭ್ಯವಿರಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Parallel workers multiply both work and failure, so a swarm needs a bound on its queue, a budget on its retries and a key on every side effect, or a crash turns into a duplicate or a hang.",
    "bodyKn": "ಸಮಾಂತರ ಕೆಲಸಗಾರರು ಕೆಲಸ ಮತ್ತು ವೈಫಲ್ಯ ಎರಡನ್ನೂ ಗುಣಿಸುತ್ತಾರೆ, ಆದ್ದರಿಂದ ಸ್ವಾರ್ಮ್‌ಗೆ ಸರದಿಯ ಮೇಲೆ ಮಿತಿ, ಮರುಪ್ರಯತ್ನಗಳ ಮೇಲೆ ಬಜೆಟ್ ಮತ್ತು ಪ್ರತಿ ಪಾರ್ಶ್ವ ಪರಿಣಾಮದ ಮೇಲೆ key ಬೇಕು, ಇಲ್ಲದಿದ್ದರೆ ಕ್ರ್ಯಾಶ್ ನಕಲು ಅಥವಾ ಸ್ಥಗಿತವಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"retrying fixes a crash safely.\" A plain retry after the charge left the balance at 40 instead of 70.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಮರುಪ್ರಯತ್ನ ಕ್ರ್ಯಾಶ್ ಅನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಸರಿಪಡಿಸುತ್ತದೆ.\" ಶುಲ್ಕದ ನಂತರ ಸರಳ ಮರುಪ್ರಯತ್ನ ಬ್ಯಾಲೆನ್ಸ್ ಅನ್ನು 70 ಬದಲು 40 ರಲ್ಲಿ ಬಿಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Sentinel: a marker that tells a worker to stop. Back-pressure: a full queue slows the producer. Backoff: growing delay between retries. Idempotency key: an identifier that makes a repeat harmless. Aging: raising priority with waiting time.",
    "bodyKn": "Sentinel: ಕೆಲಸಗಾರನಿಗೆ ನಿಲ್ಲಲು ಹೇಳುವ ಗುರುತು. Back-pressure: ತುಂಬಿದ ಸರದಿ ಉತ್ಪಾದಕನನ್ನು ನಿಧಾನಗೊಳಿಸುತ್ತದೆ. Backoff: ಮರುಪ್ರಯತ್ನಗಳ ನಡುವೆ ಬೆಳೆಯುವ ವಿಳಂಬ. Idempotency key: ಪುನರಾವರ್ತನೆಯನ್ನು ನಿರುಪದ್ರವಗೊಳಿಸುವ ಗುರುತು. Aging: ಕಾಯುವ ಸಮಯದೊಂದಿಗೆ ಆದ್ಯತೆ ಹೆಚ್ಚಿಸುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Late tasks were processed once and no worker was left running. 2) Four tasks cost 7 attempts and one failed. 3) The backoff capped at 8.0. 4) A key kept the balance at 70, not 40. 5) A shared full queue blocked every retrying worker.",
    "bodyKn": "1) ತಡವಾದ ಕೆಲಸಗಳು ಒಮ್ಮೆ ಸಂಸ್ಕರಿಸಲ್ಪಟ್ಟವು ಮತ್ತು ಯಾವ ಕೆಲಸಗಾರನೂ ಓಡುತ್ತಿರಲಿಲ್ಲ. 2) ನಾಲ್ಕು ಕೆಲಸಗಳಿಗೆ 7 ಪ್ರಯತ್ನಗಳು ಬೇಕಾದವು ಮತ್ತು ಒಂದು ವಿಫಲವಾಯಿತು. 3) backoff 8.0 ರಲ್ಲಿ ಮಿತಿಯಾಯಿತು. 4) key ಬ್ಯಾಲೆನ್ಸ್ ಅನ್ನು 40 ಅಲ್ಲ 70 ರಲ್ಲಿ ಇಟ್ಟಿತು. 5) ಹಂಚಿಕೆಯ ತುಂಬಿದ ಸರದಿ ಮರುಪ್ರಯತ್ನಿಸುವ ಪ್ರತಿ ಕೆಲಸಗಾರನನ್ನು ತಡೆಯಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many processing attempts did the four logical tasks cost?",
      "qKn": "ನಾಲ್ಕು ತಾರ್ಕಿಕ ಕೆಲಸಗಳಿಗೆ ಎಷ್ಟು ಸಂಸ್ಕರಣಾ ಪ್ರಯತ್ನಗಳು ಬೇಕಾದವು?",
      "opts": [
       "7",
       "4",
       "8",
       "5"
      ],
      "optsKn": [
       "7",
       "4",
       "8",
       "5"
      ],
      "correct": 0
     },
     {
      "q": "What balance did the idempotency key leave?",
      "qKn": "idempotency key ಯಾವ ಬ್ಯಾಲೆನ್ಸ್ ಬಿಟ್ಟಿತು?",
      "opts": [
       "70",
       "40",
       "100",
       "30"
      ],
      "optsKn": [
       "70",
       "40",
       "100",
       "30"
      ],
      "correct": 0
     },
     {
      "q": "What did the third put into a queue of size 2 give?",
      "qKn": "ಗಾತ್ರ 2 ರ ಸರದಿಗೆ ಮೂರನೇ put ಏನು ನೀಡಿತು?",
      "opts": [
       "Full after timeout",
       "accepted",
       "a crash",
       "a duplicate"
      ],
      "optsKn": [
       "ಟೈಮ್‌ಔಟ್ ನಂತರ Full",
       "ಸ್ವೀಕರಿಸಲಾಯಿತು",
       "ಕ್ರ್ಯಾಶ್",
       "ನಕಲು"
      ],
      "correct": 0
     },
     {
      "q": "At which step did the low-priority task run with aging?",
      "qKn": "aging ಇದ್ದಾಗ ಕಡಿಮೆ-ಆದ್ಯತೆಯ ಕೆಲಸ ಯಾವ ಹಂತದಲ್ಲಿ ಓಡಿತು?",
      "opts": [
       "6",
       "1",
       "8",
       "never"
      ],
      "optsKn": [
       "6",
       "1",
       "8",
       "ಎಂದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What was the backoff delay for attempt 4?",
      "qKn": "ಪ್ರಯತ್ನ 4 ಕ್ಕೆ backoff ವಿಳಂಬ ಎಷ್ಟು?",
      "opts": [
       "8.0",
       "4.0",
       "16.0",
       "2.0"
      ],
      "optsKn": [
       "8.0",
       "4.0",
       "16.0",
       "2.0"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
