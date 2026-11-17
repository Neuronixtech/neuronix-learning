"""Teaching implementation (our own): durable execution, Part 3 - production pieces on top of the engine idea: an approval store that survives a restart and is bound to one release, durable timers fired by a simulated clock, a persistent budget with a kill switch, memory consolidation kept apart from the authoritative log, and an end-to-end release workflow that restarts between approval and deployment, with five unit tests that are actually run.
Files live in a temporary directory, time is simulated, the 'deployment' is a counter, and there is no authentication, so this is a teaching sketch and not a production system."""
import io
import json
import tempfile
import unittest
from pathlib import Path


class JsonStore:
    def __init__(self, path):
        self.path = Path(path)
        self.data = json.loads(self.path.read_text(encoding="utf-8")) if self.path.exists() else {}

    def save(self):
        self.path.write_text(json.dumps(self.data, indent=2), encoding="utf-8")


class ApprovalStore(JsonStore):
    def request(self, request_id, thread_id, action, resource_id):
        if request_id in self.data:
            raise ValueError("approval request already exists")
        self.data[request_id] = {"thread_id": thread_id, "action": action, "resource_id": resource_id, "status": "pending"}
        self.save()

    def decide(self, request_id, approved):
        self.data[request_id]["status"] = "approved" if approved else "rejected"
        self.save()

    def get(self, request_id):
        return self.data.get(request_id)


class TimerStore(JsonStore):
    def schedule(self, timer_id, wake_at):
        self.data[timer_id] = {"wake_at": wake_at, "status": "scheduled"}
        self.save()

    def due(self, now):
        return sorted(t for t, v in self.data.items() if v["status"] == "scheduled" and v["wake_at"] <= now)

    def fire(self, timer_id):
        self.data[timer_id]["status"] = "fired"
        self.save()


class BudgetExceeded(Exception):
    pass


class DurableBudget(JsonStore):
    def __init__(self, path, max_llm_calls=3):
        super().__init__(path)
        self.data.setdefault("llm_calls", 0)
        self.data.setdefault("limit", max_llm_calls)
        self.data.setdefault("killed", False)

    def consume(self):
        if self.data["killed"]:
            raise BudgetExceeded("kill switch active")
        if self.data["llm_calls"] >= self.data["limit"]:
            self.data["killed"] = True
            self.save()
            raise BudgetExceeded("LLM call budget exceeded")
        self.data["llm_calls"] += 1
        self.save()


class MemoryManager:
    def __init__(self, recent_limit=8, batch=1):
        self.recent_limit, self.batch, self.episodic, self.semantic = recent_limit, batch, [], []

    def add_event(self, event):
        self.episodic.append(event)
        if len(self.episodic) >= self.recent_limit + self.batch:
            older, self.episodic = self.episodic[:-self.recent_limit], self.episodic[-self.recent_limit:]
            self.semantic.append({"event_count": len(older), "first": older[0], "last": older[-1]})


def release_workflow(approvals, history, counters, release_id, thread="deploy_001"):
    """Activities replay from `history` (a dict standing in for the event log); approval state comes from the approval store."""
    def act(name, fn):
        if name in history:
            return history[name]
        counters[name] = counters.get(name, 0) + 1
        history[name] = fn()
        return history[name]
    analysis = act("analyze_release", lambda: {"release_id": release_id, "risk": "medium"})
    tests = act("run_release_tests", lambda: {"release_id": release_id, "passed": True})
    if not tests["passed"]:
        return {"status": "stopped: tests failed"}
    request_id = f"approval:{thread}:{release_id}"
    approval = approvals.get(request_id)
    if approval is None:
        approvals.request(request_id, thread, "deploy_release", release_id)
        return {"status": "waiting_for_approval"}
    if approval["resource_id"] != release_id:
        raise ValueError("approval does not match release")
    if approval["status"] == "pending":
        return {"status": "waiting_for_approval"}
    if approval["status"] == "rejected":
        return {"status": "cancelled"}
    act("deploy_release", lambda: {"release_id": release_id, "deployment_status": "simulated"})
    return {"status": "completed"}


class DurableTests(unittest.TestCase):
    def test_approval_survives_restart(self):
        with tempfile.TemporaryDirectory() as d:
            p = Path(d) / "a.json"
            s = ApprovalStore(p)
            s.request("r1", "t", "deploy", "rel1")
            s.decide("r1", True)
            self.assertEqual(ApprovalStore(p).get("r1")["status"], "approved")

    def test_duplicate_request_rejected(self):
        with tempfile.TemporaryDirectory() as d:
            s = ApprovalStore(Path(d) / "a.json")
            s.request("r1", "t", "deploy", "rel1")
            with self.assertRaises(ValueError):
                s.request("r1", "t", "deploy", "rel1")

    def test_budget_persists_and_kills(self):
        with tempfile.TemporaryDirectory() as d:
            p = Path(d) / "b.json"
            b = DurableBudget(p, 2)
            b.consume()
            b2 = DurableBudget(p, 2)
            b2.consume()
            with self.assertRaises(BudgetExceeded):
                DurableBudget(p, 2).consume()

    def test_timer_not_due_early(self):
        with tempfile.TemporaryDirectory() as d:
            t = TimerStore(Path(d) / "t.json")
            t.schedule("retry", 100)
            self.assertEqual(t.due(99), [])
            self.assertEqual(t.due(100), ["retry"])

    def test_approval_bound_to_release(self):
        with tempfile.TemporaryDirectory() as d:
            a = ApprovalStore(Path(d) / "a.json")
            a.request("approval:deploy_001:rel1", "deploy_001", "deploy_release", "rel1")
            a.decide("approval:deploy_001:rel1", True)
            a.data["approval:deploy_001:rel2"] = a.data["approval:deploy_001:rel1"]
            with self.assertRaises(ValueError):
                release_workflow(a, {}, {}, "rel2")


def section(t):
    print(f"\n--- {t} ---")


def main():
    with tempfile.TemporaryDirectory() as d:
        section("1. Genuinely running: an approval that survives a restart and is bound to its release")
        ap = Path(d) / "approvals.json"
        history, counters = {}, {}
        print("first run:", release_workflow(ApprovalStore(ap), history, counters, "release_001"))
        print("run before any decision:", release_workflow(ApprovalStore(ap), history, counters, "release_001"))
        ApprovalStore(ap).decide("approval:deploy_001:release_001", True)
        print("after approval, new store object:", release_workflow(ApprovalStore(ap), history, counters, "release_001"))
        print("activity bodies run:", counters)
        print("the waiting state and the decision are stored in a file, so a brand-new store object after a restart still sees the approval, and the earlier analysis and test activities were replayed from history rather than run again; the approval id contains the release id, so an approval for another release does not authorise this one")

        section("2. Genuinely running: a rejection stops the protected action")
        ap2 = Path(d) / "approvals2.json"
        h2, c2 = {}, {}
        release_workflow(ApprovalStore(ap2), h2, c2, "release_002")
        ApprovalStore(ap2).decide("approval:deploy_001:release_002", False)
        print(release_workflow(ApprovalStore(ap2), h2, c2, "release_002"), "| deploy ran:", "deploy_release" in c2)
        print("a rejected request returns cancelled and the deployment activity never runs")

        section("3. Genuinely running: durable timers and a simulated clock")
        ts = TimerStore(Path(d) / "timers.json")
        ts.schedule("retry_001", 600)
        ts.schedule("expire_approval", 86400)
        for now in (0, 599, 600, 86400):
            due = TimerStore(ts.path).due(now)
            for t in due:
                ts.fire(t)
            print(f"clock {now:6d}: timers due {due}")
        print("the wake-up times are stored, so a restarted scheduler that reloads the file fires each timer once when the simulated clock reaches it, and a plain sleep would have lost the remaining delay on a crash; the clock here is a number the lab chooses")

        section("4. Genuinely running: a budget that a restart cannot reset")
        bp = Path(d) / "budget.json"
        outcomes = []
        for i in range(5):
            try:
                DurableBudget(bp, 3).consume()
                outcomes.append("ok")
            except BudgetExceeded as e:
                outcomes.append(str(e))
        print(outcomes)
        print("each call creates a new budget object from the file, standing in for a restarted worker, and the fourth call hits the limit and trips the kill switch while the fifth is refused because the switch is stored; an in-memory counter would have started again at zero each time")

        section("5. Genuinely running: memory consolidation next to the authoritative log")
        for batch in (1, 16):
            mm = MemoryManager(8, batch)
            log = []
            for i in range(24):
                ev = {"step": i, "note": f"event {i}"}
                log.append(ev)
                mm.add_event(ev)
            print(f"consolidate every {batch:2d} overflow(s): authoritative log {len(log)} | recent kept in full {len(mm.episodic)} | summaries {len(mm.semantic)} | events in the first summary {mm.semantic[0]['event_count']}")
        print("folding on every overflow, which is how the lesson class is written, turns 24 events into 16 one-event summaries, while folding in a batch of 16 gives the single summary of 16 older events that the lesson diagram describes; either way the summary keeps only a count and the first and last event and the detail survives only in the log, so recovery must read the log and never the summary, and this grouping does not compress events into prose")

        section("6. Genuinely running: the five unit tests")
        stream = io.StringIO()
        res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(DurableTests))
        print(f"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}")
        print("the tests cover approval persistence, duplicate requests, budget persistence with the kill switch, timers that are not due early and an approval that must match its release; they test this sketch and not a production engine")


if __name__ == "__main__":
    main()
