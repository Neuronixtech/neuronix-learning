"""Teaching implementation (our own): Supervisor / Orchestrator-Worker pattern, Part 2 - dynamic delegation, concurrency limits, timeouts, retries, budgets, conflicts, partial success and bounded depth.
The original code/main.py was not supplied. Workers are scripted functions that sleep or raise on purpose; no model or network is used."""
import threading
import time
from concurrent.futures import ThreadPoolExecutor
from dataclasses import dataclass


@dataclass(frozen=True)
class ComplexityEstimate:
    subtopics: int
    depth: int
    uncertainty: int
    evidence: int

    @property
    def score(self):
        return self.subtopics + self.depth + self.uncertainty + self.evidence


def choose_worker_count(estimate, max_workers=8):
    s = estimate.score
    desired = 1 if s < 4 else 3 if s < 8 else 5 if s < 12 else 8
    return min(desired, max_workers)


class TransientWorkerError(Exception):
    pass


class PermanentWorkerError(Exception):
    pass


def execute_with_retry(operation, max_attempts=3, base_delay=0.01):
    attempts = 0
    delays = []
    for attempt in range(1, max_attempts + 1):
        attempts += 1
        try:
            return operation(), attempts, delays
        except PermanentWorkerError:
            raise
        except TransientWorkerError:
            if attempt == max_attempts:
                raise
            delays.append(round(base_delay * (2 ** (attempt - 1)), 3))
            time.sleep(delays[-1])


class SharedBudget:
    def __init__(self, maximum):
        self.maximum, self.used, self.lock = maximum, 0, threading.Lock()

    def reserve(self, amount):
        with self.lock:
            if self.used + amount > self.maximum:
                return False
            self.used += amount
            return True


def find_conflicts(claims):
    grouped = {}
    for c in claims:
        grouped.setdefault((c["subject"], c["predicate"]), []).append(c)
    return [{"key": k, "values": sorted({repr(x["value"]) for x in g})} for k, g in grouped.items() if len({repr(x["value"]) for x in g}) > 1]


def evaluate_completion(results, required):
    done = {r["task_id"] for r in results if r["status"] == "completed"}
    missing = sorted(set(required) - done)
    return {"complete": not missing, "missing_required_tasks": missing}


def delegate(task, depth=0, max_depth=2):
    if depth >= max_depth:
        return 1
    return 1 + sum(delegate(f"{task} {a}", depth + 1, max_depth) for a in ("A", "B"))


def section(title):
    print(f"\n--- {title} ---")


def main():
    section("1. Genuinely running: how many workers a task deserves")
    cases = {"simple question": ComplexityEstimate(1, 1, 0, 0), "three-topic review": ComplexityEstimate(3, 3, 2, 2), "huge comparison": ComplexityEstimate(6, 5, 4, 4)}
    for name, est in cases.items():
        print(f"{name}: score {est.score} -> {choose_worker_count(est)} workers, capped at 4 -> {choose_worker_count(est, max_workers=4)}")
    print("a simple question gets one worker, the three-topic review scores 10 and gets five and the huge comparison would get eight but is capped at four when the pool is small; the score is an invented heuristic with hand-picked bands, and a hard but strictly sequential task would still gain nothing from five workers.")

    section("2. Genuinely running: ten threads, three allowed at a time")
    gate, lock = threading.Semaphore(3), threading.Lock()
    state = {"now": 0, "max": 0}

    def job():
        with gate:
            with lock:
                state["now"] += 1
                state["max"] = max(state["max"], state["now"])
            time.sleep(0.02)
            with lock:
                state["now"] -= 1
    ts = [threading.Thread(target=job) for _ in range(10)]
    [t.start() for t in ts]
    [t.join() for t in ts]
    with ThreadPoolExecutor(max_workers=3) as pool:
        mapped = list(pool.map(lambda q: f"done {q}", ["a", "b", "c", "d", "e"]))
    print("most workers ever inside the gate at once:", state["max"], "| pool results in submission order:", mapped)
    print("ten threads were created but never more than three ran the guarded section together, and the thread pool returned its five results in the order the questions were given; the limit protects an API quota or a connection pool and says nothing about how fast any one worker is.")

    section("3. Genuinely running: a wait timeout does not stop a worker, a cancel signal can")
    cancel = threading.Event()
    stopped = []

    def long_worker():
        for _ in range(30):
            if cancel.is_set():
                stopped.append("cancelled")
                return
            time.sleep(0.02)
        stopped.append("finished")
    th = threading.Thread(target=long_worker)
    th.start()
    th.join(timeout=0.1)
    alive_after_timeout = th.is_alive()
    cancel.set()
    th.join()
    print("still running after join(timeout=0.1):", alive_after_timeout, "| after the cancel signal:", stopped)
    print("waiting for 0.1 s only gave up waiting and left the thread running, and the thread stopped only because its loop checked an Event; a worker that blocks inside a library call would not have seen the signal, so real timeouts also belong in the network client.")

    section("4. Genuinely running: retry the transient error, never the permanent one")
    calls = {"n": 0}

    def flaky():
        calls["n"] += 1
        if calls["n"] < 3:
            raise TransientWorkerError("temporary outage")
        return "ok"
    result, attempts, delays = execute_with_retry(flaky)
    print("transient: result", result, "| attempts", attempts, "| backoff delays", delays)
    bad = {"n": 0}

    def forbidden():
        bad["n"] += 1
        raise PermanentWorkerError("not authorised")
    try:
        execute_with_retry(forbidden)
    except PermanentWorkerError as e:
        print("permanent:", e, "| attempts", bad["n"])
    print("the transient failure succeeded on the third attempt after waiting 0.01 and 0.02 seconds, while the permanent one was tried exactly once, so retries only help when the failure can change; a retry of a worker with side effects also needs an idempotency key, which this lab does not model.")

    section("5. Genuinely running: ten threads reserving from a budget of five")
    budget = SharedBudget(5000)
    granted = []

    def reserve():
        ok = budget.reserve(1000)
        with lock:
            granted.append(ok)
    ts = [threading.Thread(target=reserve) for _ in range(10)]
    [t.start() for t in ts]
    [t.join() for t in ts]
    print("granted:", sum(granted), "of 10 | refused:", granted.count(False), "| used:", budget.used)
    print("exactly five reservations of 1000 were granted and five were refused, and the total used is 5000, because the check and the update happen under one lock; without the lock two threads could both see room for the last reservation, and a lock does not coordinate separate processes.")

    section("6. Genuinely running: conflicts, partial success and a bounded tree")
    claims = [{"subject": "GET /admin", "predicate": "requires_auth", "value": True, "source": "spec"}, {"subject": "GET /admin", "predicate": "requires_auth", "value": False, "source": "test"},
              {"subject": "GET /health", "predicate": "requires_auth", "value": False, "source": "spec"}]
    print("conflicts:", find_conflicts(claims))
    results = [{"task_id": "security", "status": "failed"}, {"task_id": "compliance", "status": "completed"}, {"task_id": "cost", "status": "completed"}]
    print("completion with security required:", evaluate_completion(results, ["security", "compliance"]), "| completion with only cost required:", evaluate_completion(results, ["cost"]))
    print("tree sizes at max depth 1, 2, 3 with two children each:", [delegate("root", max_depth=d) for d in (1, 2, 3)])
    print("two sources disagree about one endpoint and the detector reports it with both values, a failed required task keeps the run incomplete while a failed optional task would not, and the depth limit keeps the tree at 3, 7 or 15 agents; a conflict may also come from different versions or environments, which the detector cannot know.")


if __name__ == "__main__":
    main()
