"""Teaching implementation (our own): durable execution, Part 2 - the crash that replay alone cannot fix (after an outside effect but before the completion record), idempotency keys against a mock payment service, reconciliation by asking the service, and bounded retries with exponential backoff.
The payment service is an in-memory mock, the crash is injected by raising an exception at a chosen point and time is simulated; nothing here talks to a real service."""
from dataclasses import dataclass, field


class Crash(Exception):
    pass


@dataclass
class MockPaymentService:
    use_keys: bool
    charges: list = field(default_factory=list)
    seen: dict = field(default_factory=dict)

    def charge(self, customer, amount, key=None):
        if self.use_keys and key is not None and key in self.seen:
            return self.seen[key]
        result = {"customer": customer, "amount": amount, "status": "charged", "charge_no": len(self.charges) + 1}
        self.charges.append(result)
        if self.use_keys and key is not None:
            self.seen[key] = result
        return result

    def status(self, key):
        return self.seen.get(key)


class WorkflowStore:
    """Minimal durable record: a dict of activity -> state."""

    def __init__(self):
        self.state = {}


def charge_activity(store, svc, key, crash_point=None):
    """STARTED is recorded, the service is called, then COMPLETED is recorded. crash_point picks where a crash happens."""
    s = store.state.get("charge")
    if s and s["status"] == "completed":
        return s["result"], "replayed"
    store.state["charge"] = {"status": "started"}
    if crash_point == "before_call":
        raise Crash("before call")
    result = svc.charge("customer_001", 100, key if svc.use_keys else None)
    if crash_point == "after_call":
        raise Crash("after external success, before completion record")
    store.state["charge"] = {"status": "completed", "result": result}
    return result, "executed"


def run_twice(use_keys, crash_point):
    store, svc = WorkflowStore(), MockPaymentService(use_keys)
    try:
        charge_activity(store, svc, "order_123_payment", crash_point)
    except Crash:
        pass
    charge_activity(store, svc, "order_123_payment", None)
    return len(svc.charges), store.state["charge"]["status"]


def backoff_schedule(n, d0=2.0, dmax=60.0, mult=2):
    return [min(dmax, d0 * mult ** i) for i in range(n)]


def run_with_retries(fail_times, max_attempts, error_kind="retryable"):
    attempts, delays_used = 0, []
    sched = backoff_schedule(max_attempts)
    while attempts < max_attempts:
        attempts += 1
        if attempts <= fail_times:
            if error_kind == "non_retryable":
                return {"outcome": "stopped: non-retryable error", "attempts": attempts, "waited": sum(delays_used)}
            if attempts < max_attempts:
                delays_used.append(sched[attempts - 1])
            continue
        return {"outcome": "succeeded", "attempts": attempts, "waited": sum(delays_used)}
    return {"outcome": "gave up after budget", "attempts": attempts, "waited": sum(delays_used)}


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: where the crash lands decides what happens")
    for point in (None, "before_call", "after_call"):
        n, status = run_twice(False, point)
        print(f"crash point {str(point):12} without a key: charges made {n} | final status {status}")
    print("a crash before the call and no crash both end with one charge, but a crash after the service charged and before the completion record leaves the history saying started, so the retry charges again and the customer pays twice; replay alone cannot know the first charge happened")

    section("2. Genuinely running: the same crash with an idempotency key")
    for point in (None, "before_call", "after_call"):
        n, status = run_twice(True, point)
        print(f"crash point {str(point):12} with a key:    charges made {n} | final status {status}")
    print("the service remembers the key order_123_payment and returns the first result for the repeat request, so every case ends with one charge; the guarantee comes from the service honouring the key, and this mock keeps its memory in a dict that would not survive a restart")

    section("3. Genuinely running: reconciliation instead of blind retry")
    store, svc = WorkflowStore(), MockPaymentService(True)
    try:
        charge_activity(store, svc, "order_123_payment", "after_call")
    except Crash:
        pass
    print("history says:", store.state["charge"]["status"], "| ask the service by key:", svc.status("order_123_payment"))
    found = svc.status("order_123_payment")
    if found:
        store.state["charge"] = {"status": "completed", "result": found}
    print("after reconciliation the record says:", store.state["charge"]["status"], "| charges made:", len(svc.charges))
    print("asking the service what happened to the keyed request lets the workflow record the real outcome and avoid a second request, and this only works because the lab service supports lookup by key")

    section("4. Genuinely computing: exponential backoff, d_n = min(dmax, d0 * 2^n)")
    print("delays for 8 retries with d0 = 2 s and dmax = 60 s:", backoff_schedule(8))
    print("the delay doubles from 2 seconds until it reaches the 60 second cap, so the schedule is 2, 4, 8, 16, 32, 60, 60, 60; real systems add random jitter so many workers do not retry together, which this schedule leaves out")

    section("5. Genuinely running: bounded retries and error kinds")
    for fail_times, budget, kind in ((2, 5, "retryable"), (5, 3, "retryable"), (1, 5, "non_retryable")):
        print(f"fails {fail_times} time(s), budget {budget}, {kind:13} -> {run_with_retries(fail_times, budget, kind)}")
    print("a transient failure is retried until it succeeds within the budget, a step that keeps failing stops when the budget runs out instead of looping forever, and a non-retryable error such as an invalid input stops at once without waiting; the waited figure is simulated seconds and no real sleep happens")


if __name__ == "__main__":
    main()
