"""Teaching implementation (our own): CrewAI-style Part 1 - Agent, Task, Crew, Process (sequential and hierarchical)."""
from dataclasses import dataclass, field
from typing import Callable

CALLS = {"agent": 0, "manager": 0}


def mock_llm(role: str, prompt: str) -> str:
    """Deterministic stand-in for a model. It reads the CONTEXT line, so handoffs genuinely matter."""
    context = prompt.split("CONTEXT:\n", 1)[-1].strip()
    if role == "Researcher":
        return ("Finding 1: Agents increasingly use explicit workflows.\n"
                "Finding 2: Memory is externalized from model context.\n"
                "Finding 3: Production systems emphasize observability.")
    if role == "Writer":
        # a summariser: keeps only the first finding it can see, as a short model often would
        lines = [l for l in context.splitlines() if l.startswith("Finding")]
        kept = lines[0].split(": ", 1)[1] if lines else "no findings were provided"
        return f"Draft: {kept}"
    if role == "Editor":
        return "Edited: " + context.replace("Draft: ", "")
    return "No response."


@dataclass
class Agent:
    role: str
    goal: str
    backstory: str
    tools: list = field(default_factory=list)

    def build_prompt(self, task_description: str, context: str = "") -> str:
        return (f"ROLE:\n{self.role}\nGOAL:\n{self.goal}\nBACKSTORY:\n{self.backstory}\n"
                f"TASK:\n{task_description}\nCONTEXT:\n{context}")

    def act(self, task_description: str, context: str = "") -> str:
        CALLS["agent"] += 1
        return mock_llm(self.role, self.build_prompt(task_description, context))


@dataclass
class Task:
    description: str
    expected_output: str
    agent: Agent

    def execute(self, context: str = "") -> str:
        return self.agent.act(self.description, context)


class SequentialCrew:
    def __init__(self, agents, tasks):
        self.agents, self.tasks = agents, tasks

    def kickoff(self, inputs: str):
        context, trace = inputs, []
        for task in self.tasks:
            output = task.execute(context)
            trace.append((task.agent.role, output))
            context = output
        return context, trace


class HierarchicalCrew:
    """A manager decides who runs next. The decision itself is a call (counted separately)."""

    def __init__(self, agents, choose_next: Callable, max_steps=20):
        self.agents = {a.role: a for a in agents}
        self.choose_next, self.max_steps = choose_next, max_steps

    def kickoff(self, topic: str):
        context, trace, completed = topic, [], []
        for _ in range(self.max_steps):
            CALLS["manager"] += 1
            nxt = self.choose_next(context, completed)
            trace.append(f"manager->{nxt}")
            if nxt == "done":
                return context, trace
            context = self.agents[nxt].act(topic, context)
            completed.append(nxt)
        raise RuntimeError(f"manager never said done within {self.max_steps} steps; trace tail: {trace[-3:]}")


researcher = Agent("Researcher", "Find facts about the topic", "A careful analyst.")
writer = Agent("Writer", "Write a short brief", "A concise technical writer.")
editor = Agent("Editor", "Polish the brief", "A strict editor.")
TASKS = [
    Task("Research agent engineering.", "Exactly three findings", researcher),
    Task("Write a one-sentence brief.", "One sentence", writer),
    Task("Edit the brief.", "One polished sentence", editor),
]


ORDER = ["Researcher", "Writer", "Editor"]


def tracking_manager(context: str, completed: list) -> str:
    """Decides from explicit state: which roles have finished."""
    for role in ORDER:
        if role not in completed:
            return role
    return "done"


def text_manager(context: str, completed: list) -> str:
    """Decides from the wording of the latest output only (what a naive prompt-routed manager does)."""
    if "Finding" not in context:
        return "Researcher"
    if "Draft" not in context and "Edited" not in context:
        return "Writer"
    if "Edited" not in context:
        return "Editor"
    return "done"


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Sequential crew: Researcher -> Writer -> Editor")
    crew = SequentialCrew([researcher, writer, editor], TASKS)
    result, trace = crew.kickoff("agent engineering")
    for role, out in trace:
        print(f"{role}: {out!r}")
    print("final:", result)

    section("2. The prompt an agent actually receives")
    print(writer.build_prompt(TASKS[1].description, "Finding 1: x"))

    section("3. Genuinely checking: only the LAST output is threaded forward")
    print("findings written by the Researcher: 3")
    for role, out in trace:
        n = sum(1 for l in out.splitlines() if l.startswith("Finding"))
        print(f"  after {role}: findings still visible = {n}; characters = {len(out)}")
    print("the Editor never saw Findings 2 and 3; nothing in the crew raised an error")

    section("4. Genuinely counting: what the hierarchical manager costs")
    CALLS.update(agent=0, manager=0)
    SequentialCrew([researcher, writer, editor], TASKS).kickoff("agent engineering")
    seq = dict(CALLS)
    CALLS.update(agent=0, manager=0)
    h_result, h_trace = HierarchicalCrew([researcher, writer, editor], tracking_manager).kickoff("agent engineering")
    hier = dict(CALLS)
    print("sequential  :", seq, "total model calls =", sum(seq.values()))
    print("hierarchical:", hier, "total model calls =", sum(hier.values()))
    print("manager trace:", h_trace)
    print("same final text:", h_result == result)

    section("5. Genuinely checking: a manager that reads wording instead of state loops")
    crew_txt = HierarchicalCrew([researcher, writer, editor], text_manager, max_steps=8)
    try:
        crew_txt.kickoff("agent engineering")
    except RuntimeError as e:
        print("RuntimeError:", e)
    print("each agent's output replaces the context, so after the Writer the word 'Finding' is gone and the manager re-hires the Researcher")
    print("the tracking manager (explicit completed list) finished in", len(h_trace), "decisions; routing needs state, not wording")

    section("6. Genuinely measuring: backstory is paid on every call")
    for words in (5, 200, 2000):
        agent = Agent("Writer", "Write", "expert " * words)
        prompt = agent.build_prompt("Write a one-sentence brief.", "Finding 1: x")
        print(f"backstory of {words:>4} words -> prompt of {len(prompt.split()):>5} words, x3 calls = {3 * len(prompt.split())} words")

    section("7. Genuinely checking: expected_output is a description, not a check")
    short = Task("Research.", "Exactly three findings", Agent("Researcher", "g", "b"))
    out = short.execute("topic")
    got = sum(1 for l in out.splitlines() if l.startswith("Finding"))
    print("task contract says: exactly three findings | produced:", got, "| execution raised nothing")

    class TwoFindingResearcher(Agent):
        def act(self, task_description, context=""):
            return "Finding 1: only one thing\nFinding 2: and another"
    weak = Task("Research.", "Exactly three findings", TwoFindingResearcher("Researcher", "g", "b"))
    out2 = weak.execute("topic")
    got2 = sum(1 for l in out2.splitlines() if l.startswith("Finding"))
    print("a weaker agent produced", got2, "findings and the Task still returned normally")
    print("enforcement has to be code you write (Part 2 adds a typed result)")


if __name__ == "__main__":
    main()
