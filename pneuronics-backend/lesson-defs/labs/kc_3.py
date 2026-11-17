"""Teaching implementation (our own): kill switches, circuit breakers and canary tokens, Part 3 - production concerns. Fail-open against fail-closed during a control-store outage, EWMA, CUSUM and a hard limit on a slow rate drift and on a sudden jump, a lost-update race in a shared counter and its fix, a constitutional policy and an incident controller whose recovery needs a token the agent does not hold.
Everything runs in one process with invented numbers; the 'control store' is a class that can be told to fail, and none of this is a production control plane."""
import threading
import time
from enum import Enum


class ControlStore:
    def __init__(self):
        self.enabled, self.up = True, True

    def read(self):
        if not self.up:
            raise ConnectionError("control store unavailable")
        return self.enabled


def gateway_decision(store, fail_closed):
    try:
        return store.read()
    except ConnectionError:
        return not fail_closed


class EWMADetector:
    def __init__(self, alpha=0.2, baseline=10.0, margin=8.0):
        self.alpha, self.baseline, self.margin = alpha, baseline, margin

    def observe(self, x):
        alert = x > self.baseline + self.margin
        self.baseline = self.alpha * x + (1 - self.alpha) * self.baseline
        return alert


class CUSUMDetector:
    def __init__(self, mean=10.0, allowance=1.0, threshold=12.0):
        self.mean, self.k, self.h, self.s = mean, allowance, threshold, 0.0

    def observe(self, x):
        self.s = max(0.0, self.s + x - self.mean - self.k)
        return self.s > self.h


def first_alerts(series, hard_limit=20):
    e, c = EWMADetector(), CUSUMDetector()
    out = {"ewma": None, "cusum": None, "hard": None}
    for minute, x in enumerate(series, 1):
        if e.observe(x) and out["ewma"] is None:
            out["ewma"] = minute
        if c.observe(x) and out["cusum"] is None:
            out["cusum"] = minute
        if x > hard_limit and out["hard"] is None:
            out["hard"] = minute
    return out


def race(use_lock, threads=8, per_thread=2000):
    state = {"n": 0}
    lock = threading.Lock()

    def work():
        for _ in range(per_thread):
            if use_lock:
                with lock:
                    state["n"] += 1
            else:
                v = state["n"]
                time.sleep(0)
                state["n"] = v + 1

    ts = [threading.Thread(target=work) for _ in range(threads)]
    for t in ts:
        t.start()
    for t in ts:
        t.join()
    return state["n"], threads * per_thread


class Policy:
    forbidden_tools = frozenset({"disable_security_monitor", "delete_production_database"})
    forbidden_recipients = frozenset({"secrets@example.invalid"})

    def evaluate(self, tool, arguments):
        if tool in self.forbidden_tools:
            return False, "Forbidden tool"
        if tool == "send_email" and arguments.get("recipient") in self.forbidden_recipients:
            return False, "Forbidden recipient"
        return True, "Allowed"


class Incident(Enum):
    NORMAL = 0
    SUSPICIOUS = 1
    QUARANTINED = 2
    UNDER_REVIEW = 3
    RECOVERY_APPROVED = 4


class IncidentController:
    def __init__(self, operator_token):
        self.state, self._token = Incident.NORMAL, operator_token

    def advance(self, to):
        order = [Incident.NORMAL, Incident.SUSPICIOUS, Incident.QUARANTINED, Incident.UNDER_REVIEW]
        if self.state in order and to == order[min(order.index(self.state) + 1, 3)] and to != self.state:
            self.state = to
        return self.state

    def approve_recovery(self, token):
        if self.state == Incident.UNDER_REVIEW and token == self._token:
            self.state = Incident.RECOVERY_APPROVED
        return self.state


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: a control-store outage on requests 4 to 6 of 10")
    for fail_closed in (False, True):
        store = ControlStore()
        executed = []
        for i in range(1, 11):
            store.up = not (4 <= i <= 6)
            if gateway_decision(store, fail_closed):
                executed.append(i)
        print(f"{'fail closed' if fail_closed else 'fail open':11}: actions executed {executed}")
    store = ControlStore()
    store.enabled, store.up = False, False
    print("operator has disabled the agent and the store is unreachable ->", "fail open allows" if gateway_decision(store, False) else "fail open denies", "|", "fail closed allows" if gateway_decision(store, True) else "fail closed denies")
    print("fail open keeps working through the outage, including the case where the operator had already switched the agent off, while fail closed refuses requests 4 to 6; the safer default for consequential actions is fail closed, and the price is lost availability during the outage")

    section("2. Genuinely running: a slow rate drift against a sudden jump (calls per minute)")
    slow = [10, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 20, 21, 22]
    jump = [10, 10, 10, 10, 40, 40]
    print("slow drift:", slow)
    print("minute of first alert ->", first_alerts(slow))
    print("sudden jump:", jump)
    print("minute of first alert ->", first_alerts(jump))
    print("on the slow climb the adaptive EWMA baseline keeps following the rate and never alerts, CUSUM measured against a fixed reference accumulates the excess and alerts at minute 8, and the fixed hard limit of 20 alerts only at minute 15; on the sudden jump all three detectors alert at minute 5, the first minute at 40; the series and thresholds are invented")

    section("3. Genuinely measuring: a shared counter without and with a lock (8 threads x 2000)")
    got, want = race(False)
    print(f"without a lock: counted {got} of {want} | lost {want - got}")
    got, want = race(True)
    print(f"with a lock:    counted {got} of {want} | lost {want - got}")
    print("read, add one, write back is not atomic, so threads overwrite each other and increments are lost when the threads interleave, and a lock makes every increment count; the deliberate sleep(0) between the read and the write forces a thread switch and so exaggerates the loss, and a real unsynchronised counter would usually lose far fewer; a breaker counter shared by several workers has the same problem, and across machines the lock has to be a database transaction or an atomic increment in a shared store; the exact number lost varies from run to run")

    section("4. Genuinely running: a constitutional policy the agent cannot edit at run time")
    p = Policy()
    print(p.evaluate("send_email", {"recipient": "secrets@example.invalid"}))
    print(p.evaluate("send_email", {"recipient": "customer@example.com"}))
    print(p.evaluate("disable_security_monitor", {}))
    try:
        p.forbidden_tools.add("nothing")
    except AttributeError as e:
        print("adding to the frozen set:", type(e).__name__)
    p.forbidden_tools = frozenset()
    print("rebinding the attribute is still possible in the same process:", p.evaluate("disable_security_monitor", {}))
    print("a frozenset cannot be changed in place, but the attribute can be replaced by any code in the process, so the last line shows the policy allowing a forbidden tool after one assignment; real enforcement must sit in a separate component with its own credentials")

    section("5. Genuinely running: incident states and a recovery token the agent does not hold")
    ic = IncidentController("operator-secret-token")
    for to in (Incident.SUSPICIOUS, Incident.QUARANTINED, Incident.UNDER_REVIEW):
        print("advance ->", ic.advance(to).name)
    print("agent tries a guessed token:", ic.approve_recovery("guess").name)
    print("operator with the token:", ic.approve_recovery("operator-secret-token").name)
    print("recovery from review is only reachable with the token, and an attempt without it leaves the state at under review; the token here is a string in the same object, which a real system replaces with an authenticated operator decision that the agent cannot forge")


if __name__ == "__main__":
    main()
