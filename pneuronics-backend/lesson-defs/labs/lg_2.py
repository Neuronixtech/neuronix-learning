"""Teaching implementation (our own): Stateful graphs Part 2 - reducers, checkpoints, failure, resume, human gate."""
import json
from copy import deepcopy
from datetime import datetime
from typing import Any, Callable, Optional, TypedDict

from lg_1 import AgentState, bug_node, choose_route, classify_node, fresh, refund_node, sales_node


class Checkpoint(TypedDict):
    state: AgentState
    next_node: Optional[str]
    last_completed_node: Optional[str]
    checkpoint_number: int


def replace_reducer(old, new):
    return deepcopy(new)


def append_reducer(old, new):
    return deepcopy(old) + deepcopy(new)


class MemoryCheckpointer:
    """Serialises to JSON text but keeps it in process memory: checkpoint semantics, not durability."""

    def __init__(self):
        self._storage = {}

    def save(self, session_id, checkpoint):
        self._storage[session_id] = json.dumps(checkpoint)

    def load(self, session_id):
        raw = self._storage.get(session_id)
        return None if raw is None else json.loads(raw)

    def update_state(self, session_id, updates):
        checkpoint = self.load(session_id)
        if checkpoint is None:
            raise ValueError(f"No checkpoint for {session_id!r}")
        checkpoint["state"].update(updates)
        self.save(session_id, checkpoint)


class StateGraph:
    def __init__(self, checkpointer):
        self.checkpointer = checkpointer
        self.nodes, self.edges, self.conditional_edges, self.reducers = {}, {}, {}, {}
        self.executed = []

    def add_node(self, name, node):
        self.nodes[name] = node

    def add_edge(self, source, target):
        self.edges[source] = target

    def add_conditional_edges(self, source, chooser, routes):
        self.conditional_edges[source] = (chooser, routes)

    def set_reducer(self, field, reducer):
        self.reducers[field] = reducer

    def merge_update(self, state, update):
        new_state = deepcopy(state)
        for key, value in update.items():
            reducer = self.reducers.get(key, replace_reducer)
            new_state[key] = reducer(new_state.get(key), value)
        return new_state

    def next_node(self, current, state):
        if current in self.conditional_edges:
            chooser, routes = self.conditional_edges[current]
            route = chooser(state)
            if route not in routes:
                raise ValueError(f"Unknown route {route!r} from {current!r}")
            return routes[route]
        return self.edges.get(current)

    def _execute(self, session_id, state, current, checkpoint_number):
        while current is not None:
            print(f"[execute] node={current}")
            self.executed.append(current)
            try:
                update = self.nodes[current](state)
            except Exception as exc:
                print(f"[stopped] node={current} reason={exc}")
                raise
            state = self.merge_update(state, update)
            following = self.next_node(current, state)
            checkpoint_number += 1
            self.checkpointer.save(session_id, {"state": state, "next_node": following,
                                                "last_completed_node": current, "checkpoint_number": checkpoint_number})
            print(f"[checkpoint {checkpoint_number}] completed={current} next={following}")
            current = following
        return state

    def run(self, session_id, start, initial_state):
        return self._execute(session_id, deepcopy(initial_state), start, 0)

    def resume(self, session_id):
        cp = self.checkpointer.load(session_id)
        if cp is None:
            raise ValueError(f"No checkpoint for {session_id!r}")
        print(f"[resume] checkpoint={cp['checkpoint_number']} last_completed={cp['last_completed_node']} next={cp['next_node']}")
        return self._execute(session_id, cp["state"], cp["next_node"], cp["checkpoint_number"])


def refund_with_messages(state):
    return {"messages": ["Agent: Refund request prepared."], "output": "Refund request prepared and awaiting approval.", "step": state["step"] + 1}


def human_gate_node(state):
    if not state["human_approval"]:
        raise RuntimeError("Human approval required")
    return {"messages": ["Human approval received."], "step": state["step"] + 1}


def send_node(state):
    return {"messages": ["Final response sent."], "output": state["output"] + " Approved and sent.", "step": state["step"] + 1}


def build(checkpointer):
    g = StateGraph(checkpointer)
    g.set_reducer("messages", append_reducer)
    g.add_node("classify", classify_node)
    g.add_node("refund", refund_with_messages)
    g.add_node("bug", bug_node)
    g.add_node("sales", sales_node)
    g.add_node("human_gate", human_gate_node)
    g.add_node("send", send_node)
    g.add_conditional_edges("classify", choose_route, {"refund": "refund", "bug": "bug", "sales": "sales"})
    for n in ("refund", "bug", "sales"):
        g.add_edge(n, "human_gate")
    g.add_edge("human_gate", "send")
    return g


def section(t):
    print(f"\n--- {t} ---")


def main():
    cp = MemoryCheckpointer()
    graph = build(cp)
    sid = "support-001"

    section("1. First run: the gate stops execution")
    try:
        graph.run(sid, "classify", fresh("I was charged twice and need a refund."))
    except RuntimeError as exc:
        print("Workflow paused:", exc)
    saved = cp.load(sid)
    print("checkpoint:", json.dumps({k: saved[k] for k in ("next_node", "last_completed_node", "checkpoint_number")}))
    print("messages in the checkpoint:", saved["state"]["messages"])

    section("2. A human changes the durable state, then the graph resumes")
    cp.update_state(sid, {"human_approval": True})
    graph.executed.clear()
    final = graph.resume(sid)
    print("nodes executed during resume:", graph.executed, "(classify and refund did not run again)")
    print("final output:", final["output"])
    print("final messages:", final["messages"])
    print("final step:", final["step"])

    section("3. Genuinely checking: a failed node leaves the previous checkpoint alone")
    cp2 = MemoryCheckpointer()
    g2 = build(cp2)
    try:
        g2.run("s2", "classify", fresh("refund please"))
    except RuntimeError:
        pass
    before = cp2.load("s2")["checkpoint_number"]
    try:
        g2.resume("s2")
    except RuntimeError:
        pass
    print("checkpoint number before and after a second failed attempt:", before, cp2.load("s2")["checkpoint_number"])

    section("4. Genuinely checking: reducers change what merging means")
    g3 = build(MemoryCheckpointer())
    s = fresh("User: hello")
    print("append reducer :", g3.merge_update(s, {"messages": ["Agent: hi"]})["messages"])
    g3.set_reducer("messages", replace_reducer)
    print("replace reducer:", g3.merge_update(s, {"messages": ["Agent: hi"]})["messages"])

    section("5. Genuinely checking: serialization can fail after the node already ran")
    ran = []
    def uses_datetime(state):
        ran.append("side effect happened")
        return {"output": datetime(2026, 9, 30, 14, 30)}
    g4 = StateGraph(MemoryCheckpointer())
    g4.add_node("stamp", uses_datetime)
    try:
        g4.run("s4", "stamp", fresh("x"))
    except TypeError as e:
        print("TypeError at save time:", e)
    print("node executions:", len(ran), "| checkpoint exists:", g4.checkpointer.load("s4") is not None)
    print("the node ran and its effect happened, yet no checkpoint was written")

    section("6. Genuinely checking: the in-memory 'checkpointer' is not durable")
    new_process_cp = MemoryCheckpointer()
    print("a new object looking for 'support-001':", new_process_cp.load(sid))
    print("serialising to JSON is not persistence; the data must live outside the process")

    section("7. State must be data, not live resources")
    for label, value in (("string", "text"), ("set", {1, 2}), ("function", lambda: 1), ("file handle", open(__file__))):
        try:
            json.dumps({"v": value})
            ok = "serialisable"
        except TypeError:
            ok = "NOT serialisable"
        print(f"{label:<12} {ok}")
        if label == "file handle":
            value.close()


if __name__ == "__main__":
    main()
