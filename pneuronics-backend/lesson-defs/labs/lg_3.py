"""Teaching implementation (our own): Stateful graphs Part 3 - real SQLite persistence, true crashes, replay safety."""
import json
import os
import sqlite3
import subprocess
import sys
import tempfile
import warnings
from contextlib import closing

import lg_2
from lg_1 import fresh
from lg_2 import StateGraph, append_reducer, choose_route, classify_node, human_gate_node, refund_with_messages, send_node

HERE = os.path.abspath(__file__)
SCHEMA_VERSION = 1


class SQLiteCheckpointer:
    def __init__(self, path):
        self.path = path
        with closing(sqlite3.connect(self.path)) as conn, conn:
            conn.execute("CREATE TABLE IF NOT EXISTS checkpoints (session_id TEXT PRIMARY KEY, checkpoint_json TEXT NOT NULL)")

    def save(self, session_id, checkpoint):
        checkpoint = dict(checkpoint, schema_version=SCHEMA_VERSION)
        data = json.dumps(checkpoint, sort_keys=True)
        with closing(sqlite3.connect(self.path)) as conn, conn:
            conn.execute("INSERT INTO checkpoints (session_id, checkpoint_json) VALUES (?, ?) "
                         "ON CONFLICT(session_id) DO UPDATE SET checkpoint_json = excluded.checkpoint_json", (session_id, data))

    def load(self, session_id):
        with closing(sqlite3.connect(self.path)) as conn:
            row = conn.execute("SELECT checkpoint_json FROM checkpoints WHERE session_id = ?", (session_id,)).fetchone()
        if row is None:
            return None
        cp = json.loads(row[0])
        if cp.get("schema_version") != SCHEMA_VERSION:
            raise ValueError(f"checkpoint schema {cp.get('schema_version')} != supported {SCHEMA_VERSION}")
        return cp

    def update_state(self, session_id, updates):
        cp = self.load(session_id)
        if cp is None:
            raise ValueError(f"No checkpoint for {session_id!r}")
        cp["state"].update(updates)
        self.save(session_id, cp)


def build(checkpointer, send=send_node):
    g = StateGraph(checkpointer)
    g.set_reducer("messages", append_reducer)
    g.add_node("classify", classify_node)
    g.add_node("refund", refund_with_messages)
    g.add_node("human_gate", human_gate_node)
    g.add_node("send", send)
    g.add_conditional_edges("classify", choose_route, {"refund": "refund", "bug": "refund", "sales": "refund"})
    g.add_edge("refund", "human_gate")
    g.add_edge("human_gate", "send")
    return g


# ---- child-process behaviour used to produce a genuine crash -------------------------------------
def child_main(mode, db, outbox):
    def emailing_send(state):
        with open(outbox, "a", encoding="utf-8") as f:
            f.write("EMAIL SENT\n")
        if mode == "crash-after-effect":
            os._exit(3)
        return send_node(state)
    cp = SQLiteCheckpointer(db)
    g = build(cp, send=emailing_send)
    g.run("job-1", "classify", dict(fresh("refund please"), human_approval=True))


def run_child(mode, db, outbox):
    return subprocess.run([sys.executable, HERE, "--child", mode, db, outbox], capture_output=True, text=True, encoding="utf-8").returncode


def section(t):
    print(f"\n--- {t} ---")


def main():
    tmp = tempfile.mkdtemp()
    db = os.path.join(tmp, "graph.db")
    sid = "support-001"

    section("1. First run with SQLite, paused at the human gate")
    cp = SQLiteCheckpointer(db)
    graph = build(cp)
    try:
        graph.run(sid, "classify", fresh("I was charged twice and need a refund."))
    except RuntimeError as e:
        print("Workflow paused:", e)
    print("database file on disk:", os.path.exists(db), "| size > 0:", os.path.getsize(db) > 0)
    saved = cp.load(sid)
    print(json.dumps({k: saved[k] for k in ("schema_version", "last_completed_node", "next_node", "checkpoint_number")}))

    section("2. Human approval, then resume through a brand-new checkpointer and graph")
    cp.update_state(sid, {"human_approval": True})
    new_graph = build(SQLiteCheckpointer(db))
    final = new_graph.resume(sid)
    print("nodes run by the new graph:", new_graph.executed)
    print("final:", json.dumps({"step": final["step"], "output": final["output"], "approved": final["human_approval"]}))

    section("3. Genuinely checking: a real crash in another OS process, then resume")
    db2, outbox = os.path.join(tmp, "crash.db"), os.path.join(tmp, "outbox.txt")
    code = run_child("crash-after-effect", db2, outbox)
    print("child process exit code:", code, "(os._exit, no cleanup, no exception handling)")
    cp2 = SQLiteCheckpointer(db2).load("job-1")
    print("checkpoint written by the dead process:", json.dumps({k: cp2[k] for k in ("last_completed_node", "next_node", "checkpoint_number")}))
    print("emails sent so far:", open(outbox).read().count("EMAIL SENT"))

    section("4. Genuinely checking: resuming repeats the node whose effect already happened")
    def emailing_send_here(state):
        with open(outbox, "a", encoding="utf-8") as f:
            f.write("EMAIL SENT\n")
        return send_node(state)
    g_resume = build(SQLiteCheckpointer(db2), send=emailing_send_here)
    g_resume.resume("job-1")
    print("nodes run on resume:", g_resume.executed)
    print("emails sent in total:", open(outbox).read().count("EMAIL SENT"), "(the customer got the email twice)")

    section("5. Idempotency key makes the replay safe")
    sent_log = {}
    def idempotent_send(state, key="job-2:send-final"):
        if key in sent_log:
            return send_node(state)
        sent_log[key] = True
        with open(outbox, "a") as f:
            f.write("EMAIL SENT\n")
        return send_node(state)
    before = open(outbox).read().count("EMAIL SENT")
    state = dict(fresh("x"), output="o", step=0)
    idempotent_send(state)
    idempotent_send(state)
    print("two replays of the same operation added", open(outbox).read().count("EMAIL SENT") - before, "email")

    section("6. Genuinely checking: a checkpoint from another schema version")
    with closing(sqlite3.connect(db)) as conn, conn:
        raw = json.loads(conn.execute("SELECT checkpoint_json FROM checkpoints WHERE session_id=?", (sid,)).fetchone()[0])
        raw["schema_version"] = 2
        conn.execute("UPDATE checkpoints SET checkpoint_json=? WHERE session_id=?", (json.dumps(raw), sid))
    try:
        SQLiteCheckpointer(db).load(sid)
    except ValueError as e:
        print("refused:", e)

    section("7. Genuinely checking: does the 'with sqlite3.connect()' pattern close the connection?")
    probe = os.path.join(tmp, "probe.db")
    with warnings.catch_warnings(record=True) as caught:
        warnings.simplefilter("always")
        def leaky():
            with sqlite3.connect(probe) as conn:
                conn.execute("CREATE TABLE t (x)")
        leaky()
        import gc
        gc.collect()
    print("ResourceWarnings raised by the context-manager-only pattern:", [str(w.message)[:60] for w in caught if issubclass(w.category, ResourceWarning)] or "none")
    in_use = False
    try:
        os.remove(probe)
    except PermissionError:
        in_use = True
    print("could the database file be deleted straight afterwards:", not in_use)
    print("the sqlite3 context manager commits or rolls back; it does not close. contextlib.closing does.")

    section("8. Supervisor topology as state-based routing")
    g = lg_2.StateGraph(lg_2.MemoryCheckpointer())
    g.add_node("supervisor", lambda s: {"route": "coding" if "code" in s["messages"][-1].lower() else "research", "step": s["step"] + 1})
    g.add_node("research", lambda s: {"output": "research done", "step": s["step"] + 1})
    g.add_node("coding", lambda s: {"output": "code written", "step": s["step"] + 1})
    g.add_conditional_edges("supervisor", choose_route, {"research": "research", "coding": "coding"})
    for text in ("write code for a parser", "find papers on memory"):
        trace = []
        orig = g.nodes
        g.executed.clear()
        out = g.run("t", "supervisor", fresh(text))
        print(f"{text!r:<30} -> {g.executed}")

    section("9. Swarm handoffs need a termination rule")
    hops, active = 0, "A"
    while hops < 12:
        active = "B" if active == "A" else "A"
        hops += 1
    print(f"two agents handing off with no termination rule: {hops} hops before the external limit stopped it")


if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "--child":
        child_main(sys.argv[2], sys.argv[3], sys.argv[4])
    else:
        main()
