"""Teaching implementation (our own): kill switches, circuit breakers and canary tokens, Part 2 - the integrated gateway. A SafetyGateway evaluates a kill switch, a hard policy, a canary monitor and a repetition breaker in order and refuses at the first denial; a buggy version that evaluates every detector eagerly is run beside it to show the state it corrupts; a ten-step trajectory and seven unit tests are run for real.
The executor only records requests, nothing is sent or deleted, and the 'external' control store lives in the same process."""
import io
import json
import unittest
from dataclasses import dataclass, field
from enum import Enum


@dataclass(frozen=True)
class ActionRequest:
    tool: str
    arguments: dict = field(default_factory=dict)


@dataclass(frozen=True)
class Decision:
    allowed: bool
    detector: str
    reason: str


class ExternalControlStore:
    def __init__(self):
        self._enabled = True

    def read_enabled(self):
        return self._enabled

    def operator_disable(self):
        self._enabled = False


class BreakerState(Enum):
    CLOSED = "CLOSED"
    OPEN = "OPEN"
    HALF_OPEN = "HALF_OPEN"


class KillSwitch:
    def __init__(self, store):
        self.store = store

    def evaluate(self):
        if not self.store.read_enabled():
            return Decision(False, "KILL_SWITCH", "Agent disabled by operator")
        return Decision(True, "KILL_SWITCH", "Enabled")


class HardPolicy:
    forbidden = frozenset({"delete_production_database", "disable_security_monitor"})

    def evaluate(self, req):
        if req.tool in self.forbidden:
            return Decision(False, "HARD_POLICY", "Forbidden tool")
        return Decision(True, "HARD_POLICY", "Allowed")


class RepetitionCircuitBreaker:
    def __init__(self, threshold=5):
        self.threshold, self.prev, self.count, self.state = threshold, None, 0, BreakerState.CLOSED

    def evaluate(self, req):
        if self.state == BreakerState.OPEN:
            return Decision(False, "CIRCUIT_BREAKER", "Circuit already open")
        sig = (req.tool, json.dumps(req.arguments, sort_keys=True, separators=(",", ":")))
        self.count = self.count + 1 if sig == self.prev else 1
        self.prev = sig
        if self.state == BreakerState.HALF_OPEN:
            self.state = BreakerState.CLOSED
            return Decision(True, "CIRCUIT_BREAKER", "Probe passed")
        if self.count >= self.threshold:
            self.state = BreakerState.OPEN
            return Decision(False, "CIRCUIT_BREAKER", "Threshold reached")
        return Decision(True, "CIRCUIT_BREAKER", "ok")

    def enter_half_open(self):
        if self.state == BreakerState.OPEN:
            self.state, self.count, self.prev = BreakerState.HALF_OPEN, 0, None


class CanaryMonitor:
    def __init__(self, paths):
        self.paths, self.alerts = set(paths), []

    def evaluate(self, req):
        if req.tool != "read_file":
            return Decision(True, "CANARY", "Not a file read")
        path = req.arguments.get("path")
        if path in self.paths:
            self.alerts.append({"event": "CANARY_ACCESS", "path": path, "severity": "HIGH"})
            return Decision(False, "CANARY", "Canary resource")
        return Decision(True, "CANARY", "Not a canary")


class SimulatedExecutor:
    def __init__(self):
        self.executed = []

    def execute(self, req):
        self.executed.append(req)
        return {"status": "SUCCESS", "tool": req.tool}


class SafetyGateway:
    def __init__(self, kill, breaker, canary, policy, executor):
        self.kill, self.breaker, self.canary, self.policy, self.executor = kill, breaker, canary, policy, executor
        self.audit = []

    def handle(self, req):
        checks = [lambda: self.kill.evaluate(), lambda: self.policy.evaluate(req), lambda: self.canary.evaluate(req), lambda: self.breaker.evaluate(req)]
        for run in checks:
            d = run()
            if not d.allowed:
                ev = {"tool": req.tool, "status": "BLOCKED", "detector": d.detector, "reason": d.reason}
                self.audit.append(ev)
                return ev
        self.executor.execute(req)
        ev = {"tool": req.tool, "status": "EXECUTED", "detector": "GATEWAY", "reason": "All checks passed"}
        self.audit.append(ev)
        return ev

    def handle_eager(self, req):
        """The buggy version from the lesson: every detector runs before any decision is examined."""
        decisions = [self.kill.evaluate(), self.policy.evaluate(req), self.canary.evaluate(req), self.breaker.evaluate(req)]
        for d in decisions:
            if not d.allowed:
                return {"tool": req.tool, "status": "BLOCKED", "detector": d.detector}
        self.executor.execute(req)
        return {"tool": req.tool, "status": "EXECUTED", "detector": "GATEWAY"}


def make_gateway(threshold=5):
    store = ExternalControlStore()
    gw = SafetyGateway(KillSwitch(store), RepetitionCircuitBreaker(threshold), CanaryMonitor({"workspace/.decoy/token.txt"}), HardPolicy(), SimulatedExecutor())
    return gw, store


TRAJECTORY = [ActionRequest("lookup_order", {"order_id": 42}), ActionRequest("update_ticket", {"ticket": 1001})] + [ActionRequest("delete_record", {"record_id": 42})] * 5 + [ActionRequest("read_file", {"path": "workspace/.decoy/token.txt"})]


class GatewayTests(unittest.TestCase):
    def test_legitimate_action_executes(self):
        gw, _ = make_gateway()
        self.assertEqual(gw.handle(ActionRequest("lookup_order", {"order_id": 1}))["status"], "EXECUTED")

    def test_fifth_identical_call_blocked(self):
        gw, _ = make_gateway()
        out = [gw.handle(ActionRequest("delete_record", {"record_id": 42}))["status"] for _ in range(5)]
        self.assertEqual(out, ["EXECUTED"] * 4 + ["BLOCKED"])
        self.assertEqual(len(gw.executor.executed), 4)

    def test_canary_blocks_and_alerts(self):
        gw, _ = make_gateway()
        self.assertEqual(gw.handle(ActionRequest("read_file", {"path": "workspace/.decoy/token.txt"}))["detector"], "CANARY")
        self.assertEqual(len(gw.canary.alerts), 1)

    def test_kill_switch_blocks(self):
        gw, store = make_gateway()
        store.operator_disable()
        self.assertEqual(gw.handle(ActionRequest("send_email", {}))["detector"], "KILL_SWITCH")
        self.assertEqual(gw.executor.executed, [])

    def test_hard_policy_blocks_first_attempt(self):
        gw, _ = make_gateway()
        self.assertEqual(gw.handle(ActionRequest("delete_production_database", {}))["detector"], "HARD_POLICY")

    def test_no_breaker_mutation_after_shutdown(self):
        gw, store = make_gateway()
        store.operator_disable()
        for _ in range(3):
            gw.handle(ActionRequest("delete_record", {"record_id": 42}))
        self.assertEqual(gw.breaker.count, 0)

    def test_no_canary_evaluation_after_shutdown(self):
        gw, store = make_gateway()
        store.operator_disable()
        gw.handle(ActionRequest("read_file", {"path": "workspace/.decoy/token.txt"}))
        self.assertEqual(gw.canary.alerts, [])


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: the ten-step trajectory through the corrected gateway")
    gw, store = make_gateway()
    for i, req in enumerate(TRAJECTORY, 1):
        ev = gw.handle(req)
        print(f"{i}. {req.tool}: {ev['status']} [{ev['detector']}]")
    store.operator_disable()
    print("operator disables the agent")
    print("send_email:", gw.handle(ActionRequest("send_email", {"to": "customer@example.com"})))
    print(f"executed {len(gw.executor.executed)} | canary alerts {len(gw.canary.alerts)} | breaker {gw.breaker.state.value} | kill switch enabled {store.read_enabled()}")
    print("six actions executed, the fifth repeated delete was blocked by the breaker, the decoy read was blocked with an alert and the email after the operator action was blocked by the kill switch, which matches the lesson expected trace; the first four deletes ran, so a repetition breaker limits a loop but does not undo what it already did")

    section("2. Genuinely running: the eager gateway bug")
    gw2, store2 = make_gateway()
    store2.operator_disable()
    for _ in range(3):
        gw2.handle_eager(ActionRequest("delete_record", {"record_id": 42}))
    gw2.handle_eager(ActionRequest("read_file", {"path": "workspace/.decoy/token.txt"}))
    gw3, store3 = make_gateway()
    store3.operator_disable()
    for _ in range(3):
        gw3.handle(ActionRequest("delete_record", {"record_id": 42}))
    gw3.handle(ActionRequest("read_file", {"path": "workspace/.decoy/token.txt"}))
    print(f"eager: breaker count {gw2.breaker.count}, canary alerts {len(gw2.canary.alerts)} | sequential: breaker count {gw3.breaker.count}, canary alerts {len(gw3.canary.alerts)}")
    print("when the agent is already disabled the eager version still updates the breaker, whose last-seen request and count are changed (count 1 after the final request against 0), and records a canary alert, because every detector runs before any decision is read, while the sequential version stops at the kill switch and leaves both untouched; the lesson flagged this mistake and the lab measures its effect")

    section("3. Genuinely running: half-open recovery")
    b = RepetitionCircuitBreaker(3)
    req = ActionRequest("update_record", {"record_id": 42})
    print("three identical requests:", [b.evaluate(req).allowed for _ in range(3)], "| state", b.state.value)
    b.enter_half_open()
    print("after enter_half_open:", b.state.value)
    print("probe of a different request:", b.evaluate(ActionRequest("update_record", {"record_id": 43})).allowed, "| state", b.state.value)
    print("the state moves closed, open, half-open and closed again after a successful probe; the lab has no cool-down timer and does not limit concurrent probes, and for a destructive tool a probe could itself do harm")

    section("4. Genuinely running: the seven unit tests")
    stream = io.StringIO()
    res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(GatewayTests))
    print(f"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}")
    print("the tests check a legitimate action, the fifth-call block, the canary alert, the kill switch, the hard policy and the two no-side-effect-after-shutdown properties; they test this teaching gateway and say nothing about the repository original")


if __name__ == "__main__":
    main()
