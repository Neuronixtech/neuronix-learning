"""Teaching implementation (our own): Parallel / swarm / networked architectures, Part 2 - continuous workers, sentinels, back-pressure, retries, backoff, idempotency, starvation, utilization and a retry deadlock.
The original code/main.py was not supplied. Work is time.sleep or scripted, queues are in-process, and nothing survives a crash; threads make some orderings nondeterministic, so the lab prints only properties that hold on every run."""
import heapq
import queue
import threading
import time

SENTINEL = None


def continuous_workers(n_workers, tasks_late):
    q = queue.Queue()
    results, lock = [], threading.Lock()

    def worker(wid):
        while True:
            item = q.get()
            if item is SENTINEL:
                q.task_done()
                return
            time.sleep(0.005)
            with lock:
                results.append((item, wid))
            q.task_done()
    ths = [threading.Thread(target=worker, args=(i,)) for i in range(n_workers)]
    [t.start() for t in ths]
    time.sleep(0.03)
    for t in tasks_late:
        q.put(t)
    for _ in ths:
        q.put(SENTINEL)
    [t.join() for t in ths]
    return results, [t.is_alive() for t in ths]


def bounded_put_times():
    q = queue.Queue(maxsize=2)
    q.put("a"); q.put("b")
    try:
        q.put("c", timeout=0.05)
        return "accepted"
    except queue.Full:
        return "Full after timeout"


def retry_run(fail_plan, max_attempts=3):
    attempts, outcome = {}, {}
    for tid, fails in fail_plan.items():
        for a in range(1, max_attempts + 1):
            attempts[tid] = a
            if a > fails:
                outcome[tid] = "success"
                break
        else:
            outcome[tid] = "failed"
    return attempts, outcome


def backoff(k, base=0.5, cap=8.0):
    return min(cap, base * 2 ** k)


class Account:
    def __init__(self):
        self.balance = 100
        self.seen = set()

    def charge_naive(self, amount):
        self.balance -= amount

    def charge_idempotent(self, key, amount):
        if key in self.seen:
            return "duplicate ignored"
        self.seen.add(key)
        self.balance -= amount
        return "charged"


def priority_run(aging):
    heap, order, tick = [], [], 0
    heapq.heappush(heap, (5, 0, "low-1"))
    for step in range(1, 9):
        heapq.heappush(heap, (1, step, f"high-{step}"))
        if aging and step % 3 == 0:
            heap = [(max(0, p - 2) if name.startswith("low") else p, s, name) for p, s, name in heap]
            heapq.heapify(heap)
        p, s, name = heapq.heappop(heap)
        order.append(name)
    return order


def retry_deadlock(maxsize, workers):
    q = queue.Queue(maxsize=maxsize)
    stuck = []

    def w(i):
        try:
            q.put(f"retry-{i}", timeout=0.3)
        except queue.Full:
            stuck.append(i)
    for i in range(maxsize):
        q.put(f"pending-{i}")
    ths = [threading.Thread(target=w, args=(i,)) for i in range(workers)]
    [t.start() for t in ths]
    [t.join() for t in ths]
    return sorted(stuck)


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: workers that wait, late tasks and a clean shutdown")
    res, alive = continuous_workers(3, [f"late-{i}" for i in range(6)])
    print("tasks done:", len(res), "| all late tasks done:", sorted(r[0] for r in res) == [f"late-{i}" for i in range(6)], "| workers still alive after sentinels:", sum(alive))
    print("the three workers were already blocked on an empty queue when six tasks arrived 30 ms later, all six were processed once, and one sentinel per worker ended every thread with none left running; blocking on get() means idle workers use no polling loop, and the sentinel count must equal the worker count or some thread waits forever.")

    section("2. Genuinely running: a full queue pushes back")
    print("third put into a queue of size 2 with a 50 ms timeout:", bounded_put_times())
    print("a bounded queue refuses the third item after waiting, so a fast producer is slowed or told to stop instead of filling memory; the producer has to handle Full, and an unbounded queue would simply accept everything and hide the overload.")

    section("3. Genuinely running: retries and logical against physical work")
    attempts, outcome = retry_run({"T1": 0, "T2": 0, "T3": 1, "T4": 5})
    print("attempts:", attempts, "| outcome:", outcome)
    print("logical tasks:", len(outcome), "| processing attempts:", sum(attempts.values()), "| failed:", sum(v == "failed" for v in outcome.values()))
    print("T3 failed once and succeeded on the second attempt and T4, which fails five times, gave up after the budget of three, so four logical tasks cost seven processing attempts and one is reported failed instead of being retried forever; counting attempts separately from tasks is what makes retry cost visible.")

    section("4. Genuinely computing: exponential backoff")
    print("delays for attempts 0..6:", [backoff(k) for k in range(7)])
    print("each retry waits twice as long as the previous one until it reaches the cap of 8.0, which spreads out retries after a failure; this schedule has no random jitter, so many workers that fail together would still retry together, and nothing here actually sleeps.")

    section("5. Genuinely running: a crash after the side effect")
    naive = Account()
    naive.charge_naive(30)
    naive.charge_naive(30)
    safe = Account()
    r1 = safe.charge_idempotent("order-17", 30)
    r2 = safe.charge_idempotent("order-17", 30)
    print("balance after a retry without a key:", naive.balance, "| with an idempotency key:", safe.balance, "|", r1, "/", r2)
    print("when a worker completes a charge and crashes before recording it, a plain retry charges twice and leaves 40, while the same retry with a key leaves 70 and reports the duplicate as ignored; the key set here lives in memory, so a real system would need it stored durably with the side effect.")

    section("6. Genuinely running: starvation and aging, then a retry deadlock")
    print("without aging:", priority_run(False))
    print("with aging   :", priority_run(True))
    print("workers blocked retrying into a full queue of size 2, 4 workers:", retry_deadlock(2, 4), "| size 4, 2 workers:", retry_deadlock(4, 2))
    print("the low-priority task never runs while high-priority tasks keep arriving unless its priority improves with waiting, in which case it is served by the sixth step; separately, when every worker tries to put a retry into an already full queue they all block, modelled here with no consumer draining the queue and detected by a timeout, because a put without a timeout would wait forever, so retries should not share a saturated queue; the lesson's own program was not available to run.")


if __name__ == "__main__":
    main()
