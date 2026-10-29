"""Teaching implementation (our own): CrewAI-style Part 3 - Flow (@start/@listen), a Crew inside a Flow, failure modes, full system."""
import random
from collections import Counter

from crew_1 import Agent, HierarchicalCrew, SequentialCrew, Task, editor, researcher, writer
from crew_2 import ResearchResult, parse_result, search


def start(func):
    func._is_start = True
    return func


def listen(topic):
    def decorator(func):
        func._listens_to = topic
        return func
    return decorator


class FlowRunner:
    def __init__(self, flow, max_steps=20):
        self.flow, self.max_steps = flow, max_steps
        self.trace, self.unhandled = [], []

    def _methods(self):
        return [(n, getattr(self.flow, n)) for n in dir(self.flow) if callable(getattr(self.flow, n)) and not n.startswith("_")]

    def run(self, initial_input):
        starts = [f for _, f in self._methods() if getattr(f, "_is_start", False)]
        if len(starts) != 1:
            raise ValueError(f"a flow needs exactly one @start method, found {len(starts)}")
        event, payload = starts[0](initial_input)
        self.trace.append((starts[0].__name__, event))
        for _ in range(self.max_steps):
            listeners = [f for _, f in self._methods() if getattr(f, "_listens_to", None) == event]
            if not listeners:
                self.unhandled.append(event)
                return event, payload
            if len(listeners) > 1:
                raise ValueError(f"event {event!r} has {len(listeners)} listeners: {[f.__name__ for f in listeners]}")
            event, payload = listeners[0](payload)
            self.trace.append((listeners[0].__name__, event))
        raise RuntimeError(f"flow exceeded {self.max_steps} steps; trace tail: {self.trace[-3:]}")


class BriefFlow:
    @start
    def research(self, topic):
        return "researched", f"Research completed for {topic}"

    @listen("researched")
    def write(self, research):
        return "drafted", f"Draft based on: {research}"

    @listen("drafted")
    def edit(self, draft):
        return "edited", f"Edited version: {draft}"


class CrewInFlow:
    """A Flow whose middle step delegates to a Crew; the Flow owns control, the Crew owns the open-ended part."""

    @start
    def gather(self, topic):
        return "ready", (topic, search.run(query=topic))

    @listen("ready")
    def crew_step(self, payload):
        topic, fact = payload
        crew = SequentialCrew([researcher, writer, editor], [
            Task("Research.", "three findings", researcher),
            Task("Write.", "one sentence", writer),
            Task("Edit.", "one sentence", editor),
        ])
        result, _ = crew.kickoff(f"{topic}: {fact}")
        return "crewed", result

    @listen("crewed")
    def publish(self, text):
        return "published", f"PUBLISHED: {text}"


class TypoFlow:
    @start
    def research(self, topic):
        return "researched", topic

    @listen("reserched")
    def write(self, x):
        return "drafted", x


class DuplicateFlow:
    @start
    def a(self, x):
        return "go", x

    @listen("go")
    def b(self, x):
        return "b-done", x

    @listen("go")
    def c(self, x):
        return "c-done", x


class LoopFlow:
    @start
    def a(self, x):
        return "ping", x

    @listen("ping")
    def b(self, x):
        return "pong", x

    @listen("pong")
    def c(self, x):
        return "ping", x


def section(t):
    print(f"\n--- {t} ---")


def noisy_manager(rng):
    """A routing manager with a small chance of a wrong pick, standing in for model variance (a simulation, not a measurement of any real LLM)."""
    def choose(context, completed):
        for role in ("Researcher", "Writer", "Editor"):
            if role not in completed:
                return rng.choice(["Writer", "Editor", "Researcher"]) if rng.random() < 0.15 else role
        return "done"
    return choose


def main():
    section("1. A Flow: decorators attach metadata, the runner reads it")
    flow = BriefFlow()
    print("research is_start:", getattr(flow.research, "_is_start", False), "| write listens to:", flow.write._listens_to)
    runner = FlowRunner(flow)
    event, payload = runner.run("agent engineering")
    for step, ev in runner.trace:
        print(f"{step} -> emits {ev!r}")
    print("final:", event, "|", payload)

    section("2. A Crew inside a Flow")
    r2 = FlowRunner(CrewInFlow())
    event, payload = r2.run("agent engineering")
    print("steps:", [s for s, _ in r2.trace])
    print("final:", payload)

    section("3. Genuinely checking: a misspelled event name ends the flow silently")
    r3 = FlowRunner(TypoFlow())
    event, payload = r3.run("agent engineering")
    print("trace:", r3.trace, "| returned event:", repr(event), "| unhandled:", r3.unhandled)
    print("no exception: 'write' never ran and the caller got a perfectly normal-looking return value")

    section("4. Genuinely checking: two listeners, and a cycle")
    try:
        FlowRunner(DuplicateFlow()).run("x")
    except ValueError as e:
        print("ValueError:", e)
    try:
        FlowRunner(LoopFlow(), max_steps=10).run("x")
    except RuntimeError as e:
        print("RuntimeError:", e)

    section("5. The complete system: tool + crew + typed result + assertions")
    topic = "agent engineering"
    fact = search.run(query=topic)
    crew_text = "Finding 1: " + fact.rstrip(".") + "\nFinding 2: Flows give control\nFinding 3: Crews give roles"
    result = parse_result(topic, crew_text)
    assert isinstance(result, ResearchResult) and len(result.findings) == 3
    print("typed handoff:", result)
    first, _ = SequentialCrew([researcher, writer, editor], [Task("R", "o", researcher), Task("W", "o", writer), Task("E", "o", editor)]).kickoff(topic)
    second, _ = SequentialCrew([researcher, writer, editor], [Task("R", "o", researcher), Task("W", "o", writer), Task("E", "o", editor)]).kickoff(topic)
    print("two identical runs give identical text:", first == second)
    print("all assertions passed")

    section("6. Genuinely measuring: free-routing crew vs Flow, 200 seeds with a simulated 15% mis-route")
    intended = ("manager->Researcher", "manager->Writer", "manager->Editor", "manager->done")
    outcomes, distinct = Counter(), set()
    for seed in range(200):
        crew = HierarchicalCrew([researcher, writer, editor], noisy_manager(random.Random(seed)), max_steps=12)
        text, trace = crew.kickoff(topic)
        distinct.add(tuple(trace))
        outcomes["intended order" if tuple(trace) == intended else "finished, but a role was skipped or reordered"] += 1
    print("noisy manager outcomes:", dict(outcomes), "| distinct traces:", len(distinct))
    flow_outputs = {FlowRunner(BriefFlow()).run(topic)[1] for _ in range(200)}
    print("Flow over 200 runs: distinct final outputs =", len(flow_outputs))
    print("none of the 200 crew runs raised an error, so the wrong-order runs are invisible unless you inspect the trace")
    print("the 15% is an assumption, so the exact counts are illustrative; the structural point is that a decision per step is a failure point per step")


if __name__ == "__main__":
    main()
