"""Teaching implementation (our own): kill switches, circuit breakers and canary tokens, Part 1 - the three detectors on their own: an externally owned on/off switch, a breaker that opens on the fifth consecutive identical call with argument normalisation, and a canary monitor over a gateway read function.
Nothing here is a real security boundary: the 'external' state is a dictionary in the same process, the canary is a string match and no tool is executed."""
import json


class KillSwitch:
    def __init__(self, external_state):
        self._state = external_state

    def allow(self, action):
        if not self._state["agent_enabled"]:
            return {"allowed": False, "action": action, "reason": "External kill switch disabled"}
        return {"allowed": True, "action": action, "reason": "Kill switch permits evaluation"}


class RepetitionCircuitBreaker:
    def __init__(self, threshold=5):
        if threshold < 1:
            raise ValueError("threshold must be positive")
        self.threshold, self.prev, self.count, self.state = threshold, None, 0, "CLOSED"

    @staticmethod
    def signature(tool, arguments):
        return (tool, json.dumps(arguments, sort_keys=True, separators=(",", ":")))

    def evaluate(self, tool, arguments):
        if self.state == "OPEN":
            return {"allowed": False, "state": self.state, "count": self.count, "reason": "Circuit already open"}
        sig = self.signature(tool, arguments)
        self.count = self.count + 1 if sig == self.prev else 1
        self.prev = sig
        if self.count >= self.threshold:
            self.state = "OPEN"
            return {"allowed": False, "state": self.state, "count": self.count, "reason": "Threshold reached"}
        return {"allowed": True, "state": self.state, "count": self.count, "reason": "ok"}


class CanaryMonitor:
    def __init__(self, canary_paths):
        self.canary_paths, self.alerts = set(canary_paths), []

    def evaluate_read(self, path):
        if path in self.canary_paths:
            alert = {"event": "CANARY_ACCESS", "resource": path, "severity": "HIGH"}
            self.alerts.append(alert)
            return {"allowed": False, "alert": alert}
        return {"allowed": True, "alert": None}


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: a kill switch read at the moment of each action")
    state = {"agent_enabled": True}
    ks = KillSwitch(state)
    print(ks.allow("lookup_order"))
    state["agent_enabled"] = False
    print(ks.allow("delete_order"))
    print("the switch holds a reference to the state and reads it on every call, so a change made by the operator takes effect on the next action; it was read once per action here, and a copy taken at startup would have ignored the change; the dictionary lives in this process, so nothing stops code in the same process from editing it")

    section("2. Genuinely running: five identical calls against the breaker")
    b = RepetitionCircuitBreaker(5)
    for i in range(1, 7):
        r = b.evaluate("delete_record", {"record_id": 42})
        print(f"attempt {i}: count {r['count']} | state {r['state']:6} | allowed {r['allowed']} | {r['reason']}")
    print("the first four attempts are allowed with the count rising to four, the fifth is refused and opens the breaker, and the sixth is refused because the breaker is already open; the check is made before the tool would run, so the fifth call never executes")

    section("3. Genuinely running: argument order and different arguments")
    b = RepetitionCircuitBreaker(3)
    print("same arguments in different key order ->", [b.evaluate("update", a)["count"] for a in ({"force": True, "record_id": 42}, {"record_id": 42, "force": True}, {"force": True, "record_id": 42})])
    b = RepetitionCircuitBreaker(3)
    print("different record ids in a row ->", [b.evaluate("delete_record", {"record_id": i})["count"] for i in (42, 43, 44)])
    print("sorting the keys makes the first three calls count as one repeated action and open the breaker at three, while calls on different records each restart the count at one, which avoids a false alarm on a legitimate batch; a tool-name-only breaker would have opened on the batch")

    section("4. Genuinely running: a canary read through a gateway function")
    m = CanaryMonitor({"workspace/.decoy/internal_token.txt"})
    print("normal read:", m.evaluate_read("workspace/README.md"))
    print("canary read:", m.evaluate_read("workspace/.decoy/internal_token.txt"))
    print("alerts recorded:", len(m.alerts))
    print("the canary read is refused and an alert with severity HIGH is recorded while the ordinary read passes; the monitor matches exact path strings, so a path spelled differently or reached through a shell command would not trigger it")

    section("5. Genuinely running: a repeated call that is not a loop")
    b = RepetitionCircuitBreaker(5)
    results = [b.evaluate("lookup_order", {"order_id": 42})["allowed"] for _ in range(5)]
    print("five identical successful lookups:", results)
    print("a breaker on repetition cannot tell a harmless polling loop from a destructive one, so the fifth lookup is refused even though lookups are harmless, and the threshold and the set of tools it applies to are policy choices")


if __name__ == "__main__":
    main()
