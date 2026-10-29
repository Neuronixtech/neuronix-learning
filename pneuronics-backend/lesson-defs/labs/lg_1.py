"""Teaching implementation (our own): Stateful graphs Part 1 - typed state, nodes, edges, conditional routing."""
import random
from copy import deepcopy
from typing import Callable, TypedDict


class AgentState(TypedDict):
    messages: list
    step: int
    route: str
    output: str
    human_approval: bool


Node = Callable


class StateGraph:
    def __init__(self):
        self.nodes, self.edges, self.conditional_edges = {}, {}, {}

    def add_node(self, name, node):
        if name in self.nodes:
            raise ValueError(f"Node already exists: {name}")
        self.nodes[name] = node

    def add_edge(self, source, target):
        self.edges[source] = target

    def add_conditional_edges(self, source, chooser, routes):
        self.conditional_edges[source] = (chooser, routes)

    def next_node(self, current, state):
        if current in self.conditional_edges:
            chooser, routes = self.conditional_edges[current]
            route = chooser(state)
            if route not in routes:
                raise ValueError(f"Unknown route {route!r} from node {current!r}")
            return routes[route]
        return self.edges.get(current)

    def run(self, start, initial_state, max_steps=50, trace=None):
        state, current, steps = deepcopy(initial_state), start, 0
        while current is not None:
            steps += 1
            if steps > max_steps:
                raise RuntimeError(f"step budget of {max_steps} exceeded at node {current!r}")
            if trace is not None:
                trace.append(current)
            update = self.nodes[current](state)
            state.update(update)
            current = self.next_node(current, state)
        return state


def classify_node(state):
    message = state["messages"][-1].lower()
    if "refund" in message or "charged" in message:
        route = "refund"
    elif "bug" in message or "error" in message:
        route = "bug"
    else:
        route = "sales"
    return {"route": route, "step": state["step"] + 1}


def choose_route(state):
    return state["route"]


def refund_node(state):
    return {"output": "Refund request prepared and awaiting approval.", "step": state["step"] + 1}


def bug_node(state):
    return {"output": "Bug report prepared for the engineering queue.", "step": state["step"] + 1}


def sales_node(state):
    return {"output": "Sales inquiry prepared for follow-up.", "step": state["step"] + 1}


def build():
    g = StateGraph()
    for name, fn in (("classify", classify_node), ("refund", refund_node), ("bug", bug_node), ("sales", sales_node)):
        g.add_node(name, fn)
    g.add_conditional_edges("classify", choose_route, {"refund": "refund", "bug": "bug", "sales": "sales"})
    return g


def fresh(text):
    return {"messages": [text], "step": 0, "route": "", "output": "", "human_approval": False}


def section(t):
    print(f"\n--- {t} ---")


def main():
    g = build()

    section("1. Same graph, different state, different path")
    for text in ("I was charged twice and need a refund.", "The app shows an error on startup.", "Do you have a team plan?"):
        trace = []
        out = g.run("classify", fresh(text), trace=trace)
        print(f"{text!r:<42} path={trace} step={out['step']}")
        print(f"   output: {out['output']}")

    section("2. The runner works on a copy of the caller's state")
    initial = fresh("I need a refund")
    g.run("classify", initial)
    print("initial state after the run:", initial)

    section("3. Genuinely checking: dict.update replaces, it does not accumulate")
    state = fresh("User: hello")
    update = {"messages": ["Agent: hi"]}
    merged = dict(state)
    merged.update(update)
    print("before:", state["messages"], "| update:", update["messages"])
    print("after state.update():", merged["messages"], "(the user's message is gone)")
    print("an append reducer is needed to get:", state["messages"] + update["messages"])

    section("4. Genuinely checking: TypedDict is a contract for tools, not for the runtime")
    g2 = StateGraph()
    g2.add_node("typo", lambda s: {"routing": "refund", "step": s["step"] + 1})
    out = g2.run("typo", fresh("x"))
    print("a node returned a misspelled key 'routing':", {k: out[k] for k in ("route", "routing") if k in out})
    print("no error was raised: 'route' stayed empty and a stray key appeared")

    section("5. Genuinely checking: an unknown route fails loudly")
    g3 = StateGraph()
    g3.add_node("classify", lambda s: {"route": "payments"})
    g3.add_conditional_edges("classify", choose_route, {"refund": "refund"})
    try:
        g3.run("classify", fresh("x"))
    except ValueError as e:
        print("ValueError:", e)

    section("6. Genuinely checking: a random node makes replay unreliable")
    rng = random.Random()
    g4 = StateGraph()
    g4.add_node("pick", lambda s: {"route": rng.choice(["refund", "bug", "sales"])})
    picks = [g4.run("pick", fresh("x"))["route"] for _ in range(8)]
    print("8 runs of the same node on the same state:", picks)
    print("a resumed workflow would not take the same branch; capture the choice in state instead")

    section("7. Cycles need a budget")
    g5 = StateGraph()
    g5.add_node("generate", lambda s: {"step": s["step"] + 1})
    g5.add_node("grade", lambda s: {"route": "fail"})
    g5.add_edge("generate", "grade")
    g5.add_conditional_edges("grade", choose_route, {"fail": "generate", "pass": None})
    try:
        g5.run("generate", fresh("x"), max_steps=10)
    except RuntimeError as e:
        print("RuntimeError:", e)
    g5.nodes["grade"] = lambda s: {"route": "pass" if s["step"] >= 3 else "fail"}
    trace = []
    out = g5.run("generate", fresh("x"), trace=trace)
    print("with a grader that passes at step 3:", trace, "| step", out["step"])


if __name__ == "__main__":
    main()
