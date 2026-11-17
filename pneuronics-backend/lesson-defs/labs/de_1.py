"""Teaching implementation (our own): durable execution, Part 1 - a minimal engine with a JSON-backed event log written through a temporary file and os.replace, an @activity decorator with input fingerprints, run_or_replay, a simulated crash, recovery that does not re-run completed activities, failure and attempt records, and per-thread isolation.
The activities are tiny pure functions and the 'crash' is a raised exception inside the workflow function. The log is a single JSON file in a temporary directory, so this is a single-writer teaching engine and not a production workflow system."""
import functools
import hashlib
import json
import os
import tempfile
from pathlib import Path


class EventLog:
    def __init__(self, path):
        self.path = Path(path)
        self.events = self._load()

    def _load(self):
        if not self.path.exists():
            return []
        data = json.loads(self.path.read_text(encoding="utf-8"))
        if not isinstance(data, list):
            raise ValueError("event log must contain a JSON list")
        return data

    def _save(self):
        fd, tmp = tempfile.mkstemp(dir=self.path.parent, suffix=".tmp")
        try:
            with os.fdopen(fd, "w", encoding="utf-8") as f:
                json.dump(self.events, f)
                f.flush()
                os.fsync(f.fileno())
            os.replace(tmp, self.path)
        except Exception:
            if os.path.exists(tmp):
                os.remove(tmp)
            raise

    def append(self, event):
        self.events.append(event)
        try:
            self._save()
        except Exception:
            self.events.pop()
            raise

    def activity_events(self, thread_id, activity_id):
        return [e for e in self.events if e["thread_id"] == thread_id and e["activity_id"] == activity_id]


def input_fingerprint(args, kwargs):
    payload = json.dumps({"args": args, "kwargs": kwargs}, sort_keys=True, separators=(",", ":"), allow_nan=False)
    return hashlib.sha256(payload.encode("utf-8")).hexdigest()


class DurableRunner:
    def __init__(self, event_log, thread_id, on_replay=None, on_execute=None):
        self.event_log, self.thread_id = event_log, thread_id
        self.on_replay, self.on_execute = on_replay or (lambda a: None), on_execute or (lambda a: None)

    def activity(self, activity_id):
        def decorator(func):
            @functools.wraps(func)
            def wrapper(*args, **kwargs):
                fp = input_fingerprint(args, kwargs)
                history = self.event_log.activity_events(self.thread_id, activity_id)
                if history:
                    if history[0]["input_hash"] != fp:
                        raise ValueError("Activity input mismatch: " + activity_id)
                    if history[-1]["status"] == "completed":
                        self.on_replay(activity_id)
                        return history[-1]["result"]
                attempt = sum(e["status"] == "started" for e in history) + 1
                base = {"thread_id": self.thread_id, "activity_id": activity_id, "attempt": attempt, "input_hash": fp}
                self.event_log.append(dict(base, status="started"))
                self.on_execute(activity_id)
                try:
                    result = func(*args, **kwargs)
                except Exception as error:
                    self.event_log.append(dict(base, status="failed", error=str(error)))
                    raise
                self.event_log.append(dict(base, status="completed", result=result))
                return result
            return wrapper
        return decorator


def run_or_replay(workflow, event_log, thread_id="default", **workflow_kwargs):
    return workflow(DurableRunner(event_log, thread_id), **workflow_kwargs)


class SimulatedCrash(Exception):
    pass


def three_step_workflow(counters, crash_after_second=False):
    def workflow(runner):
        @runner.activity("collect_data")
        def collect_data():
            counters["collect_data"] = counters.get("collect_data", 0) + 1
            return {"value": 10}

        @runner.activity("analyze_data")
        def analyze_data(data):
            counters["analyze_data"] = counters.get("analyze_data", 0) + 1
            return {"value": data["value"] * 2}

        @runner.activity("generate_report")
        def generate_report(data):
            counters["generate_report"] = counters.get("generate_report", 0) + 1
            return {"report": f"Final value: {data['value']}"}

        first = collect_data()
        second = analyze_data(first)
        if crash_after_second:
            raise SimulatedCrash("Simulated workflow crash")
        return generate_report(second)
    return workflow


def section(t):
    print(f"\n--- {t} ---")


def main():
    with tempfile.TemporaryDirectory() as d:
        section("1. Genuinely running: crash after the second activity, then recover")
        path = Path(d) / "events.json"
        counters = {}
        try:
            run_or_replay(three_step_workflow(counters, crash_after_second=True), EventLog(path), "agent_001")
        except SimulatedCrash as e:
            print("first run:", e, "| activity bodies run so far:", counters)
        log = EventLog(path)
        print("events on disk after the crash:", len(log.events))
        result = run_or_replay(three_step_workflow(counters), log, "agent_001")
        print("recovery result:", result)
        print("activity bodies run in total:", counters, "| events on disk:", len(EventLog(path).events))
        print("the recovery run replayed collect_data and analyze_data from the log and executed only generate_report, so every body ran exactly once and the log holds six events, a started and a completed record for each of three activities")

        section("2. Genuinely running: the same crash without durability")
        naive = {}
        def naive_workflow(counters, crash):
            a = counters.__setitem__("collect_data", counters.get("collect_data", 0) + 1)
            counters["analyze_data"] = counters.get("analyze_data", 0) + 1
            if crash:
                raise SimulatedCrash("crash")
            counters["generate_report"] = counters.get("generate_report", 0) + 1
        try:
            naive_workflow(naive, True)
        except SimulatedCrash:
            pass
        naive_workflow(naive, False)
        print("naive retry counters:", naive, "| total bodies run:", sum(naive.values()), "| durable total:", sum(counters.values()))
        print("without a stored history the second run starts from the top, so the first two activities run twice and the total is five bodies against three; for an LLM call or a payment each avoided repeat is real cost")

        section("3. Genuinely running: input drift is rejected")
        path2 = Path(d) / "drift.json"
        log2 = EventLog(path2)
        runner = DurableRunner(log2, "t1")
        @runner.activity("analyze")
        def analyze(x):
            return x * 2
        analyze(10)
        try:
            analyze(50)
        except ValueError as e:
            print("second call with different input:", e)
        print("replay with the same input returns the stored result:", analyze(10))
        print("the fingerprint of the arguments is stored with the first call, so a changed argument raises instead of silently returning the old answer; the fingerprint covers only the serialised arguments and not the function source or any model version")

        section("4. Genuinely running: a failing activity records its attempts")
        path3 = Path(d) / "fail.json"
        log3 = EventLog(path3)
        state = {"n": 0}
        for attempt in (1, 2):
            runner = DurableRunner(log3, "t2")
            @runner.activity("flaky")
            def flaky():
                state["n"] += 1
                if state["n"] == 1:
                    raise RuntimeError("temporary failure")
                return "ok"
            try:
                print(f"run {attempt}:", flaky())
            except RuntimeError as e:
                print(f"run {attempt}: raised {e}")
        print("statuses and attempts:", [(e["status"], e["attempt"]) for e in log3.events])
        print("the first run left started and failed records, the second run counted attempt 2 and completed, and there is no retry limit in this engine, which a production runner must add")

        section("5. Genuinely running: two threads share one log")
        path4 = Path(d) / "shared.json"
        log4 = EventLog(path4)
        c1, c2 = {}, {}
        run_or_replay(three_step_workflow(c1), log4, "thread_a")
        run_or_replay(three_step_workflow(c2), log4, "thread_b")
        run_or_replay(three_step_workflow(c1), log4, "thread_a")
        print("thread_a bodies:", c1, "| thread_b bodies:", c2, "| events:", len(log4.events))
        print("each thread_id has its own history, so thread_b did not replay thread_a results and the repeat run of thread_a replayed everything; 12 events are two threads of six each")


if __name__ == "__main__":
    main()
