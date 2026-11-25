"""Teaching implementation (our own): Supervisor / Orchestrator-Worker pattern, Part 3 - a provider-independent worker, permissions, a durable SQLite run with events, conflict handling, dependency-aware planning and result validation.
The original code/main.py was not supplied. No real model or network is used: FakeModelClient returns canned text. LangGraph, CrewAI, rainbow deployments and Anthropic research-system figures in the lesson are conceptual and were not run or checked here."""
import json
import os
import sqlite3
import tempfile
import threading
import time
import uuid
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone


class FakeModelClient:
    def generate(self, system_prompt, user_prompt):
        return "Simulated research result for: " + user_prompt


class ResearchWorker:
    def __init__(self, model_client):
        self.model_client = model_client

    def run(self, question):
        return self.model_client.generate(system_prompt="You are a research specialist. State uncertainty explicitly.", user_prompt=question)


POLICY = {"research_worker": {"search", "document_read"}, "code_reviewer": {"repository_read", "test_report_read"}, "deployment_worker": {"deployment_status_read"}}


def authorize(role, action):
    if action not in POLICY.get(role, set()):
        raise PermissionError(f"{role} cannot perform {action}")
    return True


def validate_result(r):
    return r.get("status") == "completed" and bool(r.get("summary")) and bool(r.get("evidence"))


class RunStore:
    def __init__(self, path):
        self.path, self.lock = path, threading.Lock()
        with sqlite3.connect(path) as c:
            c.execute("CREATE TABLE IF NOT EXISTS runs (run_id TEXT PRIMARY KEY, status TEXT)")
            c.execute("CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY AUTOINCREMENT, run_id TEXT, task_id TEXT, event_type TEXT)")

    def event(self, run_id, task_id, event_type):
        with self.lock:
            c = sqlite3.connect(self.path)
            with c:
                c.execute("INSERT INTO events (run_id, task_id, event_type) VALUES (?, ?, ?)", (run_id, task_id, event_type))
            c.close()

    def set_run(self, run_id, status):
        with self.lock:
            c = sqlite3.connect(self.path)
            with c:
                c.execute("INSERT OR REPLACE INTO runs VALUES (?, ?)", (run_id, status))
            c.close()

    def events_for(self, run_id, task_id):
        c = sqlite3.connect(self.path)
        rows = [r[0] for r in c.execute("SELECT event_type FROM events WHERE run_id = ? AND task_id = ? ORDER BY id", (run_id, task_id))]
        c.close()
        return rows

    def status(self, run_id):
        c = sqlite3.connect(self.path)
        row = c.execute("SELECT status FROM runs WHERE run_id = ?", (run_id,)).fetchone()
        c.close()
        return row[0] if row else None


def run_supervisor(store, tasks, claims):
    run_id = str(uuid.uuid4())
    store.set_run(run_id, "running")
    first_try = {"operations": True}

    def work(task):
        for attempt in (1, 2):
            store.event(run_id, task, "worker_attempt_started")
            if task == "operations" and first_try.pop("operations", False):
                store.event(run_id, task, "worker_retryable_failure")
                continue
            store.event(run_id, task, "worker_completed")
            return {"task_id": task, "status": "completed", "summary": f"{task} simulated finding", "evidence": [f"mock://{task}"]}
    with ThreadPoolExecutor(max_workers=2) as pool:
        results = list(pool.map(work, tasks))
    conflicts = sorted({(c["subject"], c["predicate"]) for c in claims if any(o["subject"] == c["subject"] and o["predicate"] == c["predicate"] and o["value"] != c["value"] for o in claims)})
    status = "complete" if all(validate_result(r) for r in results) and not conflicts else "needs_review"
    store.set_run(run_id, status)
    return run_id, results, conflicts, status


def levels(plan):
    done, out = set(), []
    while len(done) < len(plan):
        ready = sorted(t for t, deps in plan.items() if t not in done and set(deps) <= done)
        if not ready:
            raise ValueError("cycle in plan")
        out.append(ready)
        done |= set(ready)
    return out


def section(title):
    print(f"\n--- {title} ---")


def main():
    section("1. Genuinely running: a worker that does not know which model it uses")
    worker = ResearchWorker(FakeModelClient())
    first, second = worker.run("supervisor agents"), worker.run("supervisor agents")
    print(first, "| same output twice:", first == second)
    print("the worker depends only on an object with a generate method, so a real provider adapter could replace the fake one without touching the worker or the supervisor; with the fake model the output is deterministic, which tests the orchestration and says nothing about research quality.")

    section("2. Genuinely running: permissions the worker cannot talk its way past")
    for role, action in (("research_worker", "document_read"), ("research_worker", "deploy"), ("deployment_worker", "deploy"), ("intern", "search")):
        try:
            print(f"{role} / {action}:", authorize(role, action))
        except PermissionError as e:
            print(f"{role} / {action}: refused ({e})")
    print("reading a document is allowed for the research worker, deploying is refused for it and for the deployment worker, whose only right is to read status, and an unknown role has no rights at all; this check lives in the code and is not a sentence in a prompt, although a real system must enforce it at the tool boundary and not only here.")

    section("3. Genuinely running: a durable run with a retry recorded as events")
    path = os.path.join(tempfile.mkdtemp(), "supervisor.sqlite3")
    store = RunStore(path)
    run_id, results, conflicts, status = run_supervisor(store, ["history", "engineering", "operations"], [])
    print("events for operations:", store.events_for(run_id, "operations"))
    print("events for history:", store.events_for(run_id, "history"))
    print("results in plan order:", [r["task_id"] for r in results], "| stored run status:", store.status(run_id))
    print("the operations worker failed once and the event log shows started, retryable failure, started, completed, while history shows a single clean attempt, so a reader of the final status alone would never have known about the retry; results come back in plan order and the stored status is complete.")

    section("4. Genuinely running: a conflict stops the run from being called complete")
    claims = [{"subject": "GET /admin", "predicate": "requires_auth", "value": True}, {"subject": "GET /admin", "predicate": "requires_auth", "value": False}]
    _, _, conflicts2, status2 = run_supervisor(store, ["security", "engineering"], claims)
    print("conflicts:", conflicts2, "| status with conflict:", status2, "| status without:", status)
    print("with two workers disagreeing about one endpoint the run ends as needs_review and without a disagreement it ends complete, even though every worker succeeded in both runs; success of the workers and agreement of their findings are two different questions.")

    section("5. Genuinely running: a dependency-aware plan")
    plan = {"analyze_api": [], "analyze_database": [], "design_migration": ["analyze_api", "analyze_database"], "implement_migration": ["design_migration"], "run_tests": ["implement_migration"], "review_release": ["run_tests"]}
    lv = levels(plan)
    print("levels:", lv)
    try:
        levels({"a": ["b"], "b": ["a"]})
    except ValueError as e:
        print("circular plan:", e)
    print("the two analyses share the first level and can run together, every later step waits for the one before it, and a circular plan is refused instead of looping; the parallel part of this task is only two of six steps, so an extra worker pool would barely shorten it.")

    section("6. Genuinely running: result validation and the speedup arithmetic")
    good = {"status": "completed", "summary": "x", "evidence": ["mock://x"]}
    print("good:", validate_result(good), "| no evidence:", validate_result({**good, "evidence": []}), "| empty summary:", validate_result({**good, "summary": ""}), "| failed:", validate_result({**good, "status": "failed"}))
    print(f"single agent 120 s against supervisor 50 s: speedup {120 / 50:.1f}x")
    print("only the result with a completed status, a summary and evidence references passes, and the evidence here is a placeholder string that nothing opens or checks; the 2.4x speedup is arithmetic on two example numbers and does not say whether the supervisor answer was as good or as cheap as the single agent.")


if __name__ == "__main__":
    main()
