"""Teaching implementation (our own): The Multi-Agent Primitive Model, Part 3 - durable state, version checks, validated handoffs, budgets and a completion gate.
The original code/main.py was not supplied. CrewAI, LangGraph, AutoGen and similar framework mappings in the lesson are conceptual and were not run; SQLite here is a local single-host file, not a distributed store."""
import json
import os
import queue
import sqlite3
import tempfile
import threading
from datetime import datetime, timezone


class DurableState:
    def __init__(self, path):
        self.path = path
        with self.connect() as c:
            c.execute("CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, workflow_id TEXT NOT NULL, agent TEXT NOT NULL, content TEXT NOT NULL)")
            c.execute("CREATE TABLE IF NOT EXISTS artifacts (workflow_id TEXT NOT NULL, name TEXT NOT NULL, value TEXT NOT NULL, PRIMARY KEY (workflow_id, name))")
            c.execute("CREATE TABLE IF NOT EXISTS checkpoints (workflow_id TEXT PRIMARY KEY, current_agent TEXT, status TEXT, version INTEGER NOT NULL)")

    def connect(self):
        c = sqlite3.connect(self.path, timeout=10)
        return c

    def add_message(self, wf, agent, content):
        c = self.connect()
        with c:
            c.execute("INSERT INTO messages (workflow_id, agent, content) VALUES (?, ?, ?)", (wf, agent, content))
        c.close()

    def set_artifact(self, wf, name, value):
        c = self.connect()
        with c:
            c.execute("INSERT OR REPLACE INTO artifacts (workflow_id, name, value) VALUES (?, ?, ?)", (wf, name, value))
        c.close()

    def get_artifact(self, wf, name):
        c = self.connect()
        row = c.execute("SELECT value FROM artifacts WHERE workflow_id = ? AND name = ?", (wf, name)).fetchone()
        c.close()
        return row[0] if row else None

    def start(self, wf):
        c = self.connect()
        with c:
            c.execute("INSERT OR IGNORE INTO checkpoints VALUES (?, 'Researcher', 'ready', 0)", (wf,))
        c.close()

    def update_checkpoint(self, wf, expected_version, next_agent, status):
        c = self.connect()
        with c:
            cur = c.execute("UPDATE checkpoints SET current_agent = ?, status = ?, version = version + 1 WHERE workflow_id = ? AND version = ?", (next_agent, status, wf, expected_version))
        c.close()
        return cur.rowcount == 1

    def checkpoint(self, wf):
        c = self.connect()
        row = c.execute("SELECT current_agent, status, version FROM checkpoints WHERE workflow_id = ?", (wf,)).fetchone()
        c.close()
        return row


ALLOWED = {"Researcher": {"Writer"}, "Writer": {"Reviewer"}, "Reviewer": set()}


def validate_handoff(source, destination):
    allowed = ALLOWED.get(source)
    if allowed is None:
        raise ValueError(f"Unknown source agent: {source}")
    if destination is not None and destination not in allowed:
        raise PermissionError(f"Unauthorized handoff: {source} -> {destination}")


class ExecutionBudget:
    def __init__(self, max_steps):
        self.max_steps, self.used = max_steps, 0

    def consume(self):
        if self.used >= self.max_steps:
            raise RuntimeError("Execution budget exceeded")
        self.used += 1


REQUIRED = {"research", "draft", "verdict"}


def verify_completion(artifacts):
    missing = sorted(REQUIRED - set(artifacts))
    if missing:
        return False, missing
    if artifacts["verdict"] != "APPROVED":
        return False, ["review not approved"]
    return True, []


def section(title):
    print(f"\n--- {title} ---")


def main():
    tmp = tempfile.mkdtemp()
    path = os.path.join(tmp, "agents.db")

    section("1. Genuinely running: state that outlives the object that wrote it")
    store = DurableState(path)
    store.add_message("workflow-001", "Researcher", "Research completed")
    store.set_artifact("workflow-001", "research", "Three important findings")
    del store
    reopened = DurableState(path)
    print("artifact after reopening:", reopened.get_artifact("workflow-001", "research"), "| other workflow sees:", reopened.get_artifact("workflow-002", "research"))
    print("a brand new DurableState object reading the same file finds the artifact written earlier, and a different workflow id sees nothing, so the data lives in the file and not in the object; SQLite here is one local file, so this proves persistence on one machine and nothing about multi-host coordination.")

    section("2. Genuinely running: only one of two competing updates wins")
    reopened.start("workflow-001")
    first = reopened.update_checkpoint("workflow-001", 0, "Writer", "ready")
    second = reopened.update_checkpoint("workflow-001", 0, "Reviewer", "ready")
    print("worker A expected version 0:", first, "| worker B expected version 0:", second, "| stored:", reopened.checkpoint("workflow-001"))
    print("both workers read version 0, the first update succeeded and moved the version to 1 and the second matched no row and failed, so the loser learns that it is stale and must reload; this stops a lost update only if the version check and the write are one atomic statement, which this single SQL update is.")

    section("3. Genuinely running: allowed transitions")
    for src, dst in (("Researcher", "Writer"), ("Researcher", "Reviewer"), ("Reviewer", None), ("Hacker", "Writer")):
        try:
            validate_handoff(src, dst)
            print(f"{src} -> {dst}: allowed")
        except (PermissionError, ValueError) as e:
            print(f"{src} -> {dst}: {type(e).__name__}: {e}")
    print("a table of allowed transitions refuses a researcher jumping to the reviewer and a source that is not in the table, while a stop with no destination is allowed; the agent proposes and this table decides, so a persuasive message cannot grant a route the table does not contain.")

    section("4. Genuinely running: a step budget")
    budget = ExecutionBudget(3)
    used = []
    try:
        for _ in range(5):
            budget.consume()
            used.append(budget.used)
    except RuntimeError as e:
        print("steps taken:", used, "|", e)
    print("the fourth step was refused and nothing after it ran, which bounds a handoff loop in count; a step count says nothing about tokens, money or time, so a real governor tracks those as well.")

    section("5. Genuinely running: a completion gate")
    cases = {"all present and approved": {"research": "r", "draft": "d", "verdict": "APPROVED"}, "no verdict": {"research": "r", "draft": "d"}, "verdict rejected": {"research": "r", "draft": "d", "verdict": "REJECTED"}}
    for name, arts in cases.items():
        print(f"{name}: {verify_completion(arts)}")
    print("only the first set of artifacts passes the gate, a missing verdict is listed by name and a rejected verdict fails with its own reason, so completion is decided from stored artifacts and not from a manager saying done; the check is structural and does not test that the draft is true or that a human approved.")

    section("6. Genuinely running: structured events, and a queue where each task is taken once")
    lines = []
    for ev in ("handoff_accepted", "handoff_rejected"):
        lines.append(json.dumps({"timestamp": datetime.now(timezone.utc).isoformat()[:10], "event_type": ev, "from_agent": "Writer", "to_agent": "Reviewer"}, sort_keys=True))
    print("event lines are valid JSON:", all(json.loads(x)["event_type"] for x in lines), "| first:", lines[0])
    tasks = queue.Queue()
    for topic in ("Agent", "Handoff", "Shared state", "Orchestrator"):
        tasks.put(topic)
    taken, lock = [], threading.Lock()

    def worker():
        while True:
            try:
                topic = tasks.get_nowait()
            except queue.Empty:
                return
            with lock:
                taken.append(topic)
    ts = [threading.Thread(target=worker) for _ in range(3)]
    [t.start() for t in ts]
    [t.join() for t in ts]
    print("tasks processed:", sorted(taken), "| duplicates:", len(taken) - len(set(taken)))
    print("each event is one JSON line that a tool can search, and three workers took four tasks with no duplicate; queue.Queue gives each item to one consumer inside this process, and a distributed queue still needs leases, retries and idempotent workers.")


if __name__ == "__main__":
    main()
