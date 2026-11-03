module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321562",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Production Runtimes: Queue, Event, Cron (Part 2 of 3) — Queue and Event Runtimes",
 "titleKn": "Production Runtimes: Queue, Event, Cron (ಭಾಗ 2 / 3) — Queue ಮತ್ತು Event Runtimes",
 "desc": "Build a queue with retries and a DLQ and an event runtime with deduplication, then test redelivery, duplicate events, acknowledgement speed and backlog.",
 "descKn": "ಮರುಪ್ರಯತ್ನ ಮತ್ತು DLQ ಇರುವ queue ಮತ್ತು ನಕಲು ನಿವಾರಣೆ ಇರುವ event runtime ನಿರ್ಮಿಸಿ, ನಂತರ ಮರುವಿತರಣೆ, ನಕಲು events, ಸ್ವೀಕೃತಿ ವೇಗ ಮತ್ತು backlog ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Run jobs on worker threads with retries.",
  "Dead-letter exhausted jobs.",
  "Make jobs idempotent.",
  "Deduplicate events.",
  "Read queue depth as backpressure."
 ],
 "objectivesKn": [
  "ಮರುಪ್ರಯತ್ನಗಳೊಂದಿಗೆ worker threads ಮೇಲೆ jobs ಓಡಿಸಿ.",
  "ಮುಗಿದ jobs ಅನ್ನು dead-letter ಮಾಡಿ.",
  "Jobs ಅನ್ನು idempotent ಮಾಡಿ.",
  "Events ನಿಂದ ನಕಲು ತೆಗೆಯಿರಿ.",
  "Queue depth ಅನ್ನು backpressure ಎಂದು ಓದಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Production Runtimes: Queue, Event, Cron (Part 2 of 3)",
    "textKn": "Production Runtimes: Queue, Event, Cron (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: a queue runtime with real worker threads, retries, a dead-letter queue and an event runtime with deduplication. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind production agent runtime shapes (request-response, streaming, durable, queue, event and cron), not the real software, and every agent step is a scripted function and every failure is injected, so no language model, network or real scheduler is involved, so no real LLM behaviour is measured. The pasted part was cut off by a size limit before it finished, so its later sections are rebuilt from its own outline and the neighbouring parts. The source program was not supplied either. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ನಿಜ worker threads, ಮರುಪ್ರಯತ್ನ, dead-letter queue ಮತ್ತು ಪುನರಾವರ್ತನೆ ನಿವಾರಣೆ ಇರುವ event runtime ಹೊಂದಿದ queue runtime. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು production agent runtime ಆಕಾರಗಳು (request-response, streaming, durable, queue, event ಮತ್ತು cron) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪ್ರತಿ agent ಹಂತ ಸ್ಕ್ರಿಪ್ಟ್ ಫಂಕ್ಷನ್ ಮತ್ತು ಪ್ರತಿ ವೈಫಲ್ಯ ಸೇರಿಸಲ್ಪಟ್ಟದ್ದು, ಆದ್ದರಿಂದ ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ, ನೆಟ್‌ವರ್ಕ್ ಅಥವಾ ನಿಜ scheduler ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಭಾಗ ಮುಗಿಯುವ ಮುನ್ನ ಗಾತ್ರ ಮಿತಿಯಿಂದ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ ಅದರ ನಂತರದ ವಿಭಾಗಗಳು ಅದರ ಸ್ವಂತ ರೂಪರೇಖೆ ಮತ್ತು ನೆರೆಯ ಭಾಗಗಳಿಂದ ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. ಮೂಲ ಪ್ರೋಗ್ರಾಂ ಕೂಡ ಒದಗಿಸಿರಲಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Background Work and Reactive Work",
    "textKn": "ಹಿನ್ನೆಲೆ ಕೆಲಸ ಮತ್ತು ಪ್ರತಿಕ್ರಿಯಾತ್ಮಕ ಕೆಲಸ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Queues and Events",
    "headingKn": "Queues ಮತ್ತು Events",
    "bodyEn": "A queue decouples the caller from the worker: jobs are submitted, workers pick them up, failures are retried a bounded number of times and exhausted jobs go to a dead-letter queue. An event runtime starts work because something happened, and must cope with the same event arriving twice. This part builds both with real threads, then checks retry limits, redelivery, duplicate events, acknowledgement speed and backlog.",
    "bodyKn": "Queue ಕರೆದವರನ್ನು worker ನಿಂದ ಬೇರ್ಪಡಿಸುತ್ತದೆ: jobs ಸಲ್ಲಿಸಲ್ಪಡುತ್ತವೆ, workers ಅವನ್ನು ಎತ್ತಿಕೊಳ್ಳುತ್ತವೆ, ವೈಫಲ್ಯಗಳು ಮಿತಿ ಸಂಖ್ಯೆಯ ಬಾರಿ ಮರುಪ್ರಯತ್ನಿಸಲ್ಪಡುತ್ತವೆ ಮತ್ತು ಮುಗಿದ jobs dead-letter queue ಗೆ ಹೋಗುತ್ತವೆ. Event runtime ಏನೋ ಸಂಭವಿಸಿದ್ದರಿಂದ ಕೆಲಸ ಆರಂಭಿಸುತ್ತದೆ ಮತ್ತು ಅದೇ event ಎರಡು ಬಾರಿ ಬರುವುದನ್ನು ನಿಭಾಯಿಸಬೇಕು. ಈ ಭಾಗ ಎರಡನ್ನೂ ನಿಜ threads ನೊಂದಿಗೆ ನಿರ್ಮಿಸಿ, ನಂತರ ಮರುಪ್ರಯತ್ನ ಮಿತಿಗಳು, ಮರುವಿತರಣೆ, ನಕಲು events, ಸ್ವೀಕೃತಿ ವೇಗ ಮತ್ತು backlog ಪರಿಶೀಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Intake That Survives Duplicates",
    "headingKn": "ಪುನರಾವರ್ತನೆ ಸಹಿಸುವ ಒಳಹರಿವು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Queue and event intake</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">event</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">dedupe, ack fast</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">queue</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">retry, DLQ</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">workers</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">run the loop</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">redelivery</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">needs idempotency</text><path d=\"M90,47 H110 M190,47 H210 M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">at-least-once delivery means duplicates happen</text></svg>",
    "captionEn": "Events and jobs can arrive more than once.",
    "captionKn": "Events ಮತ್ತು jobs ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು ಬಾರಿ ಬರಬಹುದು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Queue and event safeguards",
    "headingKn": "Queue ಮತ್ತು event ರಕ್ಷಣೆಗಳು",
    "headers": [
     "Problem",
     "Safeguard",
     "Limit"
    ],
    "rows": [
     [
      "Transient failure",
      "bounded retries with backoff",
      "the limit must match how long failures last"
     ],
     [
      "Poison job",
      "dead-letter queue",
      "someone must inspect the DLQ"
     ],
     [
      "Redelivery",
      "idempotent job ids",
      "the id store must survive restarts"
     ],
     [
      "Duplicate event",
      "event id deduplication",
      "only as good as the id"
     ],
     [
      "Slow handler",
      "enqueue and acknowledge",
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
    "filename": "rt_2.py",
    "headingEn": "Job, QueueRuntime and EventRuntime",
    "headingKn": "Job, QueueRuntime ಮತ್ತು EventRuntime",
    "descEn": "QueueRuntime starts real worker threads that take jobs, retry failures with growing sleeps, dead-letter jobs at the attempt limit, and can remember job ids to stay idempotent. EventRuntime subscribes handlers and ignores an event id it has seen.",
    "descKn": "QueueRuntime jobs ತೆಗೆದುಕೊಳ್ಳುವ, ಬೆಳೆಯುವ ನಿದ್ರೆಗಳೊಂದಿಗೆ ವೈಫಲ್ಯ ಮರುಪ್ರಯತ್ನಿಸುವ, ಪ್ರಯತ್ನ ಮಿತಿಯಲ್ಲಿ jobs dead-letter ಮಾಡುವ ಮತ್ತು idempotent ಆಗಿರಲು job ids ನೆನಪಿಡಬಲ್ಲ ನಿಜ worker threads ಆರಂಭಿಸುತ್ತದೆ. EventRuntime handlers ಚಂದಾದಾರರಾಗಿ ತಾನು ನೋಡಿದ event id ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ.",
    "code": "@dataclass\nclass Job:\n    job_id: str\n    behaviour: str  # \"ok\", \"flaky\" (fails twice), \"poison\" (always fails)\n    attempt: int = 0\n    trace: list = field(default_factory=list)\n\n\nclass QueueRuntime:\n    def __init__(self, max_attempts=3, workers=2, idempotent=False):\n        self.q = Queue()\n        self.dlq = []\n        self.done = []\n        self.effects = []\n        self.max_attempts = max_attempts\n        self.idempotent = idempotent\n        self.lock = threading.Lock()\n        self.threads = [threading.Thread(target=self.worker, args=(f\"w{i}\",), daemon=True) for i in range(workers)]\n        self.seen_effects = set()\n\n    def submit(self, job):\n        job.trace.append(\"submit\")\n        self.q.put(job)\n\n    def run_job(self, job):\n        job.attempt += 1\n        if job.behaviour == \"poison\" or (job.behaviour == \"flaky\" and job.attempt <= 2):\n            raise RuntimeError(\"tool timeout\")\n        key = job.job_id\n        with self.lock:\n            if self.idempotent and key in self.seen_effects:\n                return\n            self.seen_effects.add(key)\n            self.effects.append(key)\n\n    def worker(self, name):\n        while True:\n            try:\n                job = self.q.get(timeout=0.3)\n            except Empty:\n                return\n            try:\n                self.run_job(job)\n                with self.lock:\n                    self.done.append(job.job_id)\n                job.trace.append(f\"{name}:complete@{job.attempt}\")\n            except RuntimeError:\n                job.trace.append(f\"{name}:fail@{job.attempt}\")\n                if job.attempt >= self.max_attempts:\n                    with self.lock:\n                        self.dlq.append(job.job_id)\n                    job.trace.append(\"dead_letter\")\n                else:\n                    time.sleep(0.01 * 2 ** (job.attempt - 1))\n                    self.q.put(job)\n            finally:\n                self.q.task_done()\n\n    def start(self):\n        for t in self.threads:\n            t.start()\n\n    def join(self):\n        for t in self.threads:\n            t.join()\n\n\nclass EventRuntime:\n    def __init__(self, queue_runtime=None, dedupe=True):\n        self.handlers, self.seen, self.dedupe, self.qr = {}, set(), dedupe, queue_runtime\n        self.log = []\n\n    def subscribe(self, etype, fn):\n        self.handlers.setdefault(etype, []).append(fn)\n\n    def publish(self, event):\n        if self.dedupe and event[\"id\"] in self.seen:\n            self.log.append((\"duplicate\", event[\"id\"]))\n            return \"ignored\"\n        self.seen.add(event[\"id\"])\n        for fn in self.handlers.get(event[\"type\"], []):\n            fn(event)\n        self.log.append((\"handled\", event[\"id\"]))\n        return \"handled\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rt_2.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs four jobs through two workers, varies the retry limit, redelivers a job, publishes a duplicate event and times a backlog with one and four workers.",
    "descKn": "main() ನಾಲ್ಕು jobs ಅನ್ನು ಎರಡು workers ಮೂಲಕ ಓಡಿಸಿ, ಮರುಪ್ರಯತ್ನ ಮಿತಿ ಬದಲಿಸಿ, job ಮರುವಿತರಿಸಿ, ನಕಲು event ಪ್ರಕಟಿಸಿ ಮತ್ತು ಒಂದು ಹಾಗೂ ನಾಲ್ಕು workers ನೊಂದಿಗೆ backlog ಸಮಯ ಅಳೆಯುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Genuinely measuring: queue jobs with real threads (2 workers, 3 attempts)\")\n    qr = QueueRuntime()\n    jobs = [Job(\"ok-1\", \"ok\"), Job(\"flaky-1\", \"flaky\"), Job(\"poison-1\", \"poison\"), Job(\"ok-2\", \"ok\")]\n    for j in jobs:\n        qr.submit(j)\n    qr.start(); qr.join()\n    for j in jobs:\n        print(f\"{j.job_id:9} {' '.join(j.trace)}\")\n    print(f\"completed={sorted(qr.done)} dead-lettered={qr.dlq}\")\n    print(\"the flaky job succeeded on attempt 3 after two failures, and the poison job stopped at the attempt limit and went to the DLQ instead of retrying forever or vanishing\")\n\n    section(\"2. Genuinely measuring: retry limit against a transient failure\")\n    for limit in (1, 2, 3):\n        q2 = QueueRuntime(max_attempts=limit, workers=1)\n        q2.submit(Job(\"flaky-x\", \"flaky\")); q2.start(); q2.join()\n        print(f\"max_attempts={limit}: completed={q2.done} dead-lettered={q2.dlq}\")\n    print(\"a limit of 2 is too low for a job that needs three attempts, so a retry limit has to be chosen against how long transient failures actually last\")\n\n    section(\"3. Genuinely checking: redelivery duplicates a side effect unless the job is idempotent\")\n    for idem in (False, True):\n        q3 = QueueRuntime(workers=1, idempotent=idem)\n        j = Job(\"pay-1\", \"ok\")\n        q3.submit(j)\n        q3.submit(Job(\"pay-1\", \"ok\"))  # the broker redelivers the same job id\n        q3.start(); q3.join()\n        print(f\"idempotent={idem!s:5} side effects for pay-1: {q3.effects.count('pay-1')}\")\n    print(\"queues deliver at least once, so the same job can arrive twice; remembering a job id before acting kept the effect at one\")\n\n    section(\"4. Genuinely checking: an event runtime, duplicates and fast acknowledgement\")\n    for dd in (False, True):\n        qr4 = QueueRuntime(workers=1)\n        er = EventRuntime(qr4, dedupe=dd)\n        er.subscribe(\"pull_request.opened\", lambda e: qr4.submit(Job(\"review-\" + e[\"id\"], \"ok\")))\n        ev = {\"id\": \"evt-9\", \"type\": \"pull_request.opened\"}\n        r1, r2 = er.publish(ev), er.publish(dict(ev))\n        qr4.start(); qr4.join()\n        print(f\"dedupe={dd!s:5} publish results {r1}/{r2}; review jobs created: {qr4.q.qsize() + len(qr4.done)}\")\n    print(\"without deduplication a repeated webhook launched two reviews; the handler only submitted a job and returned, which is what lets it acknowledge quickly\")\n    t0 = time.perf_counter()\n    qr5 = QueueRuntime(workers=1)\n    er5 = EventRuntime(qr5)\n    er5.subscribe(\"x\", lambda e: qr5.submit(Job(e[\"id\"], \"ok\")))\n    er5.publish({\"id\": \"e1\", \"type\": \"x\"})\n    ack = time.perf_counter() - t0\n    print(f\"acknowledgement took {ack * 1000:.2f} ms because the handler enqueued the job instead of running a 5-step agent inline\")\n\n    section(\"5. Genuinely measuring: backlog when arrivals outpace workers (real threads, 10 ms jobs, time until the queue is drained)\")\n    for workers in (1, 4):\n        q6 = QueueRuntime(workers=workers)\n        orig = q6.run_job\n\n        def slow(job, orig=orig):\n            time.sleep(0.01)\n            orig(job)\n        q6.run_job = slow\n        for i in range(40):\n            q6.submit(Job(f\"j{i}\", \"ok\"))\n        depth = q6.q.qsize()\n        t0 = time.perf_counter()\n        q6.start()\n        q6.q.join()\n        took = (time.perf_counter() - t0) * 1000\n        q6.join()\n        print(f\"workers={workers}: depth at start {depth}, drained in {took:.0f} ms\")\n    print(\"queue depth exposes backpressure but does not remove it: the same 40 jobs drained in the time shown for 1 worker and for 4 (more workers drained them sooner, though sleeping threads and Python scheduling mean the speed-up is a measurement of this run, not a law), and a depth that keeps rising is the signal to add capacity or shed load\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely measuring: queue jobs with real threads (2 workers, 3 attempts) ---\nok-1      submit w0:complete@1\nflaky-1   submit w0:fail@1 w0:fail@2 w0:complete@3\npoison-1  submit w1:fail@1 w1:fail@2 w1:fail@3 dead_letter\nok-2      submit w0:complete@1\ncompleted=['flaky-1', 'ok-1', 'ok-2'] dead-lettered=['poison-1']\nthe flaky job succeeded on attempt 3 after two failures, and the poison job stopped at the attempt limit and went to the DLQ instead of retrying forever or vanishing\n\n--- 2. Genuinely measuring: retry limit against a transient failure ---\nmax_attempts=1: completed=[] dead-lettered=['flaky-x']\nmax_attempts=2: completed=[] dead-lettered=['flaky-x']\nmax_attempts=3: completed=['flaky-x'] dead-lettered=[]\na limit of 2 is too low for a job that needs three attempts, so a retry limit has to be chosen against how long transient failures actually last\n\n--- 3. Genuinely checking: redelivery duplicates a side effect unless the job is idempotent ---\nidempotent=False side effects for pay-1: 2\nidempotent=True  side effects for pay-1: 1\nqueues deliver at least once, so the same job can arrive twice; remembering a job id before acting kept the effect at one\n\n--- 4. Genuinely checking: an event runtime, duplicates and fast acknowledgement ---\ndedupe=False publish results handled/handled; review jobs created: 2\ndedupe=True  publish results handled/ignored; review jobs created: 1\nwithout deduplication a repeated webhook launched two reviews; the handler only submitted a job and returned, which is what lets it acknowledge quickly\nacknowledgement took 0.19 ms because the handler enqueued the job instead of running a 5-step agent inline\n\n--- 5. Genuinely measuring: backlog when arrivals outpace workers (real threads, 10 ms jobs, time until the queue is drained) ---\nworkers=1: depth at start 40, drained in 425 ms\nworkers=4: depth at start 40, drained in 109 ms\nqueue depth exposes backpressure but does not remove it: the same 40 jobs drained in the time shown for 1 worker and for 4 (more workers drained them sooner, though sleeping threads and Python scheduling mean the speed-up is a measurement of this run, not a law), and a depth that keeps rising is the signal to add capacity or shed load"
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
    "headingEn": "Genuinely Found: Retries, the DLQ and a Limit That Was Too Low",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮರುಪ್ರಯತ್ನಗಳು, DLQ ಮತ್ತು ತುಂಬಾ ಕಡಿಮೆ ಮಿತಿ",
    "bodyEn": "Section 1 (real threads): the flaky job failed twice and completed on attempt 3, the poison job failed three times and was dead-lettered, and the two healthy jobs completed first time. Section 2: a job that needs three attempts was dead-lettered at limits of 1 and 2 and completed at 3, so the retry limit has to be chosen against how long transient failures actually last.",
    "bodyKn": "ವಿಭಾಗ 1 (ನಿಜ threads): flaky job ಎರಡು ಬಾರಿ ವಿಫಲವಾಗಿ ಪ್ರಯತ್ನ 3 ರಲ್ಲಿ ಪೂರ್ಣಗೊಂಡಿತು, poison job ಮೂರು ಬಾರಿ ವಿಫಲವಾಗಿ dead-letter ಆಯಿತು, ಮತ್ತು ಎರಡು ಆರೋಗ್ಯಕರ jobs ಮೊದಲ ಬಾರಿಗೇ ಪೂರ್ಣಗೊಂಡವು. ವಿಭಾಗ 2: ಮೂರು ಪ್ರಯತ್ನ ಬೇಕಾದ job ಮಿತಿ 1 ಮತ್ತು 2 ರಲ್ಲಿ dead-letter ಆಯಿತು ಮತ್ತು 3 ರಲ್ಲಿ ಪೂರ್ಣಗೊಂಡಿತು, ಆದ್ದರಿಂದ ತಾತ್ಕಾಲಿಕ ವೈಫಲ್ಯಗಳು ನಿಜವಾಗಿ ಎಷ್ಟು ಕಾಲ ಇರುತ್ತವೆ ಎಂಬುದರ ವಿರುದ್ಧ ಮರುಪ್ರಯತ್ನ ಮಿತಿ ಆರಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Duplicates, Fast Acknowledgement and Backlog",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ನಕಲುಗಳು, ವೇಗದ ಸ್ವೀಕೃತಿ ಮತ್ತು Backlog",
    "bodyEn": "Section 3: a redelivered job id produced 2 side effects without idempotency and 1 with it. Section 4: without deduplication a repeated event created 2 review jobs, with it 1; the handler only enqueued, and acknowledged in 0.44 ms. Section 5: 40 ten-millisecond jobs drained in 425 ms with 1 worker and 109 ms with 4 in this run, a timing measurement of one run rather than a law.",
    "bodyKn": "ವಿಭಾಗ 3: ಮರುವಿತರಿಸಿದ job id idempotency ಇಲ್ಲದೆ 2 ಪಾರ್ಶ್ವ ಪರಿಣಾಮ ಮತ್ತು ಅದರೊಂದಿಗೆ 1 ನೀಡಿತು. ವಿಭಾಗ 4: ನಕಲು ನಿವಾರಣೆ ಇಲ್ಲದೆ ಪುನರಾವರ್ತಿತ event 2 review jobs ರಚಿಸಿತು, ಅದರೊಂದಿಗೆ 1; handler ಕೇವಲ enqueue ಮಾಡಿ 0.44 ms ನಲ್ಲಿ ಸ್ವೀಕರಿಸಿತು. ವಿಭಾಗ 5: 40 ಹತ್ತು-ಮಿಲಿಸೆಕೆಂಡ್ jobs ಈ ಓಟದಲ್ಲಿ 1 worker ನೊಂದಿಗೆ 425 ms ಮತ್ತು 4 ರೊಂದಿಗೆ 109 ms ನಲ್ಲಿ ಮುಗಿದವು, ಇದು ಒಂದು ಓಟದ ಸಮಯ ಅಳತೆ, ನಿಯಮವಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Queues and events trade immediacy for resilience, and at-least-once delivery means duplicates are normal. Idempotency, bounded retries and a DLQ turn that into something you can operate.",
    "bodyKn": "Queues ಮತ್ತು events ತಕ್ಷಣತೆಯನ್ನು ಸ್ಥಿತಿಸ್ಥಾಪಕತ್ವಕ್ಕೆ ವಿನಿಮಯ ಮಾಡುತ್ತವೆ, ಮತ್ತು at-least-once ವಿತರಣೆ ಎಂದರೆ ನಕಲುಗಳು ಸಾಮಾನ್ಯ. Idempotency, ಮಿತಿ ಮರುಪ್ರಯತ್ನಗಳು ಮತ್ತು DLQ ಅದನ್ನು ನಿರ್ವಹಿಸಬಹುದಾದ ವಿಷಯವಾಗಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"retry until it works.\" The poison job would never have worked, and the limit moved it to a DLQ after 3 attempts.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಕೆಲಸ ಮಾಡುವವರೆಗೆ ಮರುಪ್ರಯತ್ನಿಸಿ.\" Poison job ಎಂದೂ ಕೆಲಸ ಮಾಡುತ್ತಿರಲಿಲ್ಲ, ಮತ್ತು ಮಿತಿ ಅದನ್ನು 3 ಪ್ರಯತ್ನಗಳ ನಂತರ DLQ ಗೆ ಸರಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "DLQ: a parking area for jobs that exhausted retries. Backpressure: arrivals outpacing capacity. Idempotency: repeating an operation has one effect. Deduplication: ignoring an id already seen. Acknowledge: tell the sender the event was received.",
    "bodyKn": "DLQ: ಮರುಪ್ರಯತ್ನ ಮುಗಿಸಿದ jobs ಗೆ ನಿಲುಗಡೆ ಪ್ರದೇಶ. Backpressure: ಆಗಮನ ಸಾಮರ್ಥ್ಯವನ್ನು ಮೀರುವುದು. Idempotency: ಕಾರ್ಯ ಪುನರಾವರ್ತನೆ ಒಂದೇ ಪರಿಣಾಮ. Deduplication: ಈಗಾಗಲೇ ನೋಡಿದ id ನಿರ್ಲಕ್ಷಿಸುವುದು. Acknowledge: event ಸ್ವೀಕರಿಸಲಾಗಿದೆ ಎಂದು ಕಳುಹಿಸುವವರಿಗೆ ಹೇಳುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A flaky job completed on attempt 3 and a poison job was dead-lettered. 2) A limit of 2 dead-lettered a job needing 3 attempts. 3) Redelivery gave 2 effects without idempotency, 1 with. 4) A duplicate event created 2 reviews without deduplication, 1 with. 5) Enqueue-and-ack took 0.44 ms. 6) 40 jobs drained in 425 ms (1 worker) versus 109 ms (4 workers) in one run.",
    "bodyKn": "1) Flaky job ಪ್ರಯತ್ನ 3 ರಲ್ಲಿ ಪೂರ್ಣಗೊಂಡು poison job dead-letter ಆಯಿತು. 2) 2 ಮಿತಿ 3 ಪ್ರಯತ್ನ ಬೇಕಾದ job ಅನ್ನು dead-letter ಮಾಡಿತು. 3) ಮರುವಿತರಣೆ idempotency ಇಲ್ಲದೆ 2 ಪರಿಣಾಮ, ಅದರೊಂದಿಗೆ 1 ನೀಡಿತು. 4) ನಕಲು event ನಿವಾರಣೆ ಇಲ್ಲದೆ 2 reviews, ಅದರೊಂದಿಗೆ 1 ರಚಿಸಿತು. 5) Enqueue-ಮತ್ತು-ack 0.44 ms ತೆಗೆದುಕೊಂಡಿತು. 6) 40 jobs ಒಂದು ಓಟದಲ್ಲಿ 425 ms (1 worker) ವಿರುದ್ಧ 109 ms (4 workers) ನಲ್ಲಿ ಮುಗಿದವು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What happened to the poison job?",
      "qKn": "Poison job ಗೆ ಏನಾಯಿತು?",
      "opts": [
       "It completed on attempt 3",
       "It was dead-lettered after 3 attempts",
       "It retried forever",
       "It was ignored"
      ],
      "optsKn": [
       "ಪ್ರಯತ್ನ 3 ರಲ್ಲಿ ಪೂರ್ಣಗೊಂಡಿತು",
       "3 ಪ್ರಯತ್ನಗಳ ನಂತರ dead-letter ಆಯಿತು",
       "ಎಂದೆಂದಿಗೂ ಮರುಪ್ರಯತ್ನಿಸಿತು",
       "ನಿರ್ಲಕ್ಷಿಸಲ್ಪಟ್ಟಿತು"
      ],
      "correct": 1
     },
     {
      "q": "At which retry limits was the flaky job dead-lettered?",
      "qKn": "ಯಾವ ಮರುಪ್ರಯತ್ನ ಮಿತಿಗಳಲ್ಲಿ flaky job dead-letter ಆಯಿತು?",
      "opts": [
       "Only 3",
       "1 and 2",
       "None",
       "All"
      ],
      "optsKn": [
       "3 ಮಾತ್ರ",
       "1 ಮತ್ತು 2",
       "ಯಾವುದೂ ಇಲ್ಲ",
       "ಎಲ್ಲವೂ"
      ],
      "correct": 1
     },
     {
      "q": "How many side effects did a redelivered job id cause without and with idempotency?",
      "qKn": "ಮರುವಿತರಿಸಿದ job id idempotency ಇಲ್ಲದೆ ಮತ್ತು ಅದರೊಂದಿಗೆ ಎಷ್ಟು ಪಾರ್ಶ್ವ ಪರಿಣಾಮ ಉಂಟುಮಾಡಿತು?",
      "opts": [
       "1 and 1",
       "2 and 1",
       "1 and 2",
       "2 and 2"
      ],
      "optsKn": [
       "1 ಮತ್ತು 1",
       "2 ಮತ್ತು 1",
       "1 ಮತ್ತು 2",
       "2 ಮತ್ತು 2"
      ],
      "correct": 1
     },
     {
      "q": "Why did the event handler acknowledge in 0.44 ms?",
      "qKn": "Event handler 0.44 ms ನಲ್ಲಿ ಏಕೆ ಸ್ವೀಕರಿಸಿತು?",
      "opts": [
       "It ran the agent inline",
       "It only enqueued the job",
       "It skipped validation",
       "It was cached"
      ],
      "optsKn": [
       "ಅದು agent ಅನ್ನು inline ಓಡಿಸಿತು",
       "ಅದು job ಅನ್ನು enqueue ಮಾತ್ರ ಮಾಡಿತು",
       "ಅದು validation ಬಿಟ್ಟಿತು",
       "ಅದು cache ಆಗಿತ್ತು"
      ],
      "correct": 1
     },
     {
      "q": "What is the status of the 425 ms versus 109 ms backlog result?",
      "qKn": "425 ms ವಿರುದ್ಧ 109 ms backlog ಫಲಿತಾಂಶದ ಸ್ಥಿತಿ ಏನು?",
      "opts": [
       "A law of scaling",
       "One run on one machine",
       "A benchmark of real agents",
       "A guarantee"
      ],
      "optsKn": [
       "ಸ್ಕೇಲಿಂಗ್ ನಿಯಮ",
       "ಒಂದು ಯಂತ್ರದ ಒಂದು ಓಟ",
       "ನಿಜ agents ನ ಬೆಂಚ್‌ಮಾರ್ಕ್",
       "ಖಾತರಿ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
