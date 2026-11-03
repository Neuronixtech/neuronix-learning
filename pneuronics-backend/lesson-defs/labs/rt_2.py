"""Teaching implementation (our own): production runtime shapes, Part 2 - a queue runtime with real worker threads, retries with backoff, a dead-letter queue and
redelivery, and an event runtime with deduplication and fast acknowledgement. Jobs are scripted functions; no language model is involved."""
import threading
import time
from collections import deque
from dataclasses import dataclass, field
from queue import Queue, Empty


@dataclass
class Job:
    job_id: str
    behaviour: str  # "ok", "flaky" (fails twice), "poison" (always fails)
    attempt: int = 0
    trace: list = field(default_factory=list)


class QueueRuntime:
    def __init__(self, max_attempts=3, workers=2, idempotent=False):
        self.q = Queue()
        self.dlq = []
        self.done = []
        self.effects = []
        self.max_attempts = max_attempts
        self.idempotent = idempotent
        self.lock = threading.Lock()
        self.threads = [threading.Thread(target=self.worker, args=(f"w{i}",), daemon=True) for i in range(workers)]
        self.seen_effects = set()

    def submit(self, job):
        job.trace.append("submit")
        self.q.put(job)

    def run_job(self, job):
        job.attempt += 1
        if job.behaviour == "poison" or (job.behaviour == "flaky" and job.attempt <= 2):
            raise RuntimeError("tool timeout")
        key = job.job_id
        with self.lock:
            if self.idempotent and key in self.seen_effects:
                return
            self.seen_effects.add(key)
            self.effects.append(key)

    def worker(self, name):
        while True:
            try:
                job = self.q.get(timeout=0.3)
            except Empty:
                return
            try:
                self.run_job(job)
                with self.lock:
                    self.done.append(job.job_id)
                job.trace.append(f"{name}:complete@{job.attempt}")
            except RuntimeError:
                job.trace.append(f"{name}:fail@{job.attempt}")
                if job.attempt >= self.max_attempts:
                    with self.lock:
                        self.dlq.append(job.job_id)
                    job.trace.append("dead_letter")
                else:
                    time.sleep(0.01 * 2 ** (job.attempt - 1))
                    self.q.put(job)
            finally:
                self.q.task_done()

    def start(self):
        for t in self.threads:
            t.start()

    def join(self):
        for t in self.threads:
            t.join()


class EventRuntime:
    def __init__(self, queue_runtime=None, dedupe=True):
        self.handlers, self.seen, self.dedupe, self.qr = {}, set(), dedupe, queue_runtime
        self.log = []

    def subscribe(self, etype, fn):
        self.handlers.setdefault(etype, []).append(fn)

    def publish(self, event):
        if self.dedupe and event["id"] in self.seen:
            self.log.append(("duplicate", event["id"]))
            return "ignored"
        self.seen.add(event["id"])
        for fn in self.handlers.get(event["type"], []):
            fn(event)
        self.log.append(("handled", event["id"]))
        return "handled"


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely measuring: queue jobs with real threads (2 workers, 3 attempts)")
    qr = QueueRuntime()
    jobs = [Job("ok-1", "ok"), Job("flaky-1", "flaky"), Job("poison-1", "poison"), Job("ok-2", "ok")]
    for j in jobs:
        qr.submit(j)
    qr.start(); qr.join()
    for j in jobs:
        print(f"{j.job_id:9} {' '.join(j.trace)}")
    print(f"completed={sorted(qr.done)} dead-lettered={qr.dlq}")
    print("the flaky job succeeded on attempt 3 after two failures, and the poison job stopped at the attempt limit and went to the DLQ instead of retrying forever or vanishing")

    section("2. Genuinely measuring: retry limit against a transient failure")
    for limit in (1, 2, 3):
        q2 = QueueRuntime(max_attempts=limit, workers=1)
        q2.submit(Job("flaky-x", "flaky")); q2.start(); q2.join()
        print(f"max_attempts={limit}: completed={q2.done} dead-lettered={q2.dlq}")
    print("a limit of 2 is too low for a job that needs three attempts, so a retry limit has to be chosen against how long transient failures actually last")

    section("3. Genuinely checking: redelivery duplicates a side effect unless the job is idempotent")
    for idem in (False, True):
        q3 = QueueRuntime(workers=1, idempotent=idem)
        j = Job("pay-1", "ok")
        q3.submit(j)
        q3.submit(Job("pay-1", "ok"))  # the broker redelivers the same job id
        q3.start(); q3.join()
        print(f"idempotent={idem!s:5} side effects for pay-1: {q3.effects.count('pay-1')}")
    print("queues deliver at least once, so the same job can arrive twice; remembering a job id before acting kept the effect at one")

    section("4. Genuinely checking: an event runtime, duplicates and fast acknowledgement")
    for dd in (False, True):
        qr4 = QueueRuntime(workers=1)
        er = EventRuntime(qr4, dedupe=dd)
        er.subscribe("pull_request.opened", lambda e: qr4.submit(Job("review-" + e["id"], "ok")))
        ev = {"id": "evt-9", "type": "pull_request.opened"}
        r1, r2 = er.publish(ev), er.publish(dict(ev))
        qr4.start(); qr4.join()
        print(f"dedupe={dd!s:5} publish results {r1}/{r2}; review jobs created: {qr4.q.qsize() + len(qr4.done)}")
    print("without deduplication a repeated webhook launched two reviews; the handler only submitted a job and returned, which is what lets it acknowledge quickly")
    t0 = time.perf_counter()
    qr5 = QueueRuntime(workers=1)
    er5 = EventRuntime(qr5)
    er5.subscribe("x", lambda e: qr5.submit(Job(e["id"], "ok")))
    er5.publish({"id": "e1", "type": "x"})
    ack = time.perf_counter() - t0
    print(f"acknowledgement took {ack * 1000:.2f} ms because the handler enqueued the job instead of running a 5-step agent inline")

    section("5. Genuinely measuring: backlog when arrivals outpace workers (real threads, 10 ms jobs, time until the queue is drained)")
    for workers in (1, 4):
        q6 = QueueRuntime(workers=workers)
        orig = q6.run_job

        def slow(job, orig=orig):
            time.sleep(0.01)
            orig(job)
        q6.run_job = slow
        for i in range(40):
            q6.submit(Job(f"j{i}", "ok"))
        depth = q6.q.qsize()
        t0 = time.perf_counter()
        q6.start()
        q6.q.join()
        took = (time.perf_counter() - t0) * 1000
        q6.join()
        print(f"workers={workers}: depth at start {depth}, drained in {took:.0f} ms")
    print("queue depth exposes backpressure but does not remove it: the same 40 jobs drained in the time shown for 1 worker and for 4 (more workers drained them sooner, though sleeping threads and Python scheduling mean the speed-up is a measurement of this run, not a law), and a depth that keeps rising is the signal to add capacity or shed load")


if __name__ == "__main__":
    main()
