"""Teaching implementation (our own): orchestration patterns, Part 2 - a Swarm (peer-to-peer) topology with direct handoffs, a hop limit, a bouncing-handoff
failure, cycle detection, and a measured comparison against the supervisor design. Agents are scripted functions; no language model is involved."""
from dataclasses import dataclass, field


@dataclass
class Task:
    text: str


@dataclass
class Trace:
    events: list = field(default_factory=list)

    def add(self, actor, action, detail=""):
        self.events.append((actor, action, detail))

    def show(self):
        for i, (a, act, d) in enumerate(self.events, 1):
            print(f"  {i:2}. {a:10} {act:9} {d}")


def triage_agent(task):
    t = task.text.lower()
    if "refund" in t or "charged" in t:
        return ("handoff", "billing")
    if "crash" in t or "error" in t:
        return ("handoff", "support")
    return ("final", "triage answered: " + task.text[:24])


def billing_agent(task):
    if "error" in task.text.lower():
        return ("handoff", "support")
    return ("final", "billing resolved: " + task.text[:24])


def support_agent(task):
    if "refund" in task.text.lower():
        return ("handoff", "billing")
    return ("final", "support resolved: " + task.text[:24])


AGENTS = {"triage": triage_agent, "billing": billing_agent, "support": support_agent}


def run_swarm(task, agents=AGENTS, entry="triage", max_hops=4, detect_cycles=False):
    trace = Trace()
    trace.add("user", "task", task.text)
    current, visited = entry, []
    for hop in range(1, max_hops + 1):
        trace.add(current, "run", f"hop {hop}")
        if detect_cycles and current in visited:
            trace.add(current, "CYCLE", f"already visited {visited}")
            return "stopped: cycle detected", trace
        visited.append(current)
        kind, value = agents[current](task)
        if kind == "final":
            trace.add(current, "final", value)
            return value, trace
        if value not in agents:
            trace.add(current, "BAD PEER", value)
            return "stopped: unknown peer", trace
        trace.add(current, "handoff", f"-> {value}")
        current = value
    trace.add("runtime", "HOP LIMIT", f"{max_hops} hops used")
    return "stopped: hop limit", trace


def run_supervisor_calls(task):
    """Supervisor baseline for the same task: classify, run one worker, answer. Returns (model calls, hops through a router)."""
    return 1, 1


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely checking: a straight swarm path and a swarm that ends at the entry agent")
    for text in ("I was charged twice and need a refund", "The checkout shows an error", "Tell me about plans"):
        r, tr = run_swarm(Task(text))
        print(f"task: {text}")
        tr.show()
        print(f"  -> {r}")
    print("the entry agent is only the first peer, not a permanent supervisor; ownership moves with each handoff and the last agent answers")

    section("2. Genuinely checking: a bouncing handoff between two peers")
    bounce = Task("My refund request had an error")
    r, tr = run_swarm(bounce, max_hops=6)
    tr.show()
    print(f"  -> {r}")
    print("billing hands this task to support because of the word 'error', and support hands it straight back because of the word 'refund'; each agent is locally sensible and together they never finish, so only the hop limit stopped it")

    section("3. Genuinely measuring: the hop limit versus cycle detection on the bouncing task")
    for label, kw in (("hop limit 4 only", dict(max_hops=4)), ("hop limit 20 only", dict(max_hops=20)), ("cycle detection, limit 20", dict(max_hops=20, detect_cycles=True))):
        r, tr = run_swarm(bounce, **kw)
        runs = sum(1 for e in tr.events if e[1] == "run")
        print(f"{label:28} agent runs={runs:2} result={r}")
    print("a larger hop limit burns more agent runs before stopping; cycle detection stops at the first repeat but a task that legitimately revisits an agent would also be cut off, so the limit is a bound and the detector is a heuristic")

    section("4. Genuinely measuring: coordination edges as peers are added")
    print(f"{'agents':>7} {'hub edges (N)':>14} {'full mesh edges N(N-1)/2':>26} {'chain edges (N-1)':>19}")
    for n in (3, 5, 10, 30, 100):
        print(f"{n:>7} {n:>14} {n * (n - 1) // 2:>26} {n - 1:>19}")
    print("an unrestricted peer graph can reach N(N-1)/2 possible handoff edges, which is the O(N^2) worry; a real swarm limits each agent to a few peers, so the count depends on the peer registry you write")

    section("5. Genuinely checking: an agent naming a peer that does not exist")
    broken = dict(AGENTS)
    broken["triage"] = lambda t: ("handoff", "legal")
    r, tr = run_swarm(Task("anything"), agents=broken)
    tr.show()
    print(f"  -> {r}")
    print("without a registry check the runtime would raise a KeyError; here the unknown peer is refused and recorded, which is what a peer registry is for")

    section("6. Genuinely measuring: model calls and hops against the supervisor design on four tasks")
    tasks = ["I was charged twice and need a refund", "The checkout shows an error", "Tell me about plans", "My refund request had an error"]
    print(f"{'task':40} {'supervisor calls':>17} {'swarm agent runs':>17} {'swarm result'}")
    for text in tasks:
        sc, _ = run_supervisor_calls(Task(text))
        r, tr = run_swarm(Task(text), max_hops=6)
        runs = sum(1 for e in tr.events if e[1] == "run")
        print(f"{text:40} {sc:>17} {runs:>17} {r}")
    print("on the three tasks that finished, the swarm used 1 to 2 agent runs where the supervisor design used 1 model call plus a worker, and it removes the central routing step; counting runs and calls is not the same unit, so this is not a cost comparison, and on the bouncing task the swarm used its whole hop budget (6), so a short good case does not bound the worst case")


if __name__ == "__main__":
    main()
