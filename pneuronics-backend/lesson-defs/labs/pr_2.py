"""Teaching implementation (our own): The Multi-Agent Primitive Model, Part 2 - one set of scripted agents under three orchestrators.
The original code/main.py was not supplied. The 'LLM selector' is a deterministic rule, not a model, and agents are scripted functions."""
import threading
from dataclasses import dataclass, field
from typing import Optional


@dataclass(frozen=True)
class Handoff:
    from_agent: str
    to_agent: Optional[str]
    reason: str
    payload: str = ""


@dataclass(frozen=True)
class AgentResult:
    message: str
    handoff: Optional[Handoff] = None


@dataclass
class SharedState:
    _messages: list = field(default_factory=list)
    _artifacts: dict = field(default_factory=dict)
    _lock: threading.RLock = field(default_factory=threading.RLock, repr=False)

    def add_message(self, agent, content):
        with self._lock:
            self._messages.append({"agent": agent, "content": content})

    def get_messages(self):
        with self._lock:
            return [m.copy() for m in self._messages]

    def set_artifact(self, key, value):
        with self._lock:
            self._artifacts[key] = value

    def get_artifact(self, key):
        with self._lock:
            return self._artifacts.get(key)


def research_policy(task, state):
    research = f"findings about {task}"
    state.set_artifact("research", research)
    if task.strip().lower() == "status only":
        return AgentResult("Researcher: status reported.", Handoff("Researcher", None, "No report required"))
    return AgentResult("Researcher: research completed.", Handoff("Researcher", "Writer", "Research is ready", research))


def writer_policy(task, state):
    research = state.get_artifact("research")
    if research is None:
        return AgentResult("Writer: missing research artifact.")
    state.set_artifact("draft", f"Report on {task}. Evidence: {research}")
    return AgentResult("Writer: draft completed.", Handoff("Writer", "Reviewer", "Draft ready"))


def reviewer_policy(task, state):
    draft = state.get_artifact("draft")
    if draft is None:
        return AgentResult("Reviewer: missing draft artifact.")
    state.set_artifact("verdict", "APPROVED")
    return AgentResult("Reviewer: APPROVED.", None)


AGENTS = {"Researcher": research_policy, "Writer": writer_policy, "Reviewer": reviewer_policy}


def execute(name, task, state):
    result = AGENTS[name](task, state)
    state.add_message(name, result.message)
    return result


class StaticOrchestrator:
    sequence = ["Researcher", "Writer", "Reviewer"]

    def run(self, task, state):
        for name in self.sequence:
            execute(name, task, state)


class HandoffOrchestrator:
    def __init__(self, max_steps=10):
        if max_steps < 1:
            raise ValueError("max_steps must be at least 1")
        self.max_steps = max_steps

    def run(self, task, state):
        current, steps = "Researcher", 0
        while current is not None:
            if steps >= self.max_steps:
                raise RuntimeError("Step limit exceeded")
            result = execute(current, task, state)
            steps += 1
            if result.handoff is None:
                return
            if result.handoff.from_agent != current:
                raise ValueError("Handoff source does not match current agent")
            current = result.handoff.to_agent


class SelectorOrchestrator:
    def select_next(self, completed):
        for name in ("Researcher", "Writer", "Reviewer"):
            if name not in completed:
                return name
        return None

    def run(self, task, state):
        completed = set()
        while (name := self.select_next(completed)) is not None:
            execute(name, task, state)
            completed.add(name)


def section(title):
    print(f"\n--- {title} ---")


def main():
    section("1. Genuinely running: a normal task under all three orchestrators")
    for orch in (StaticOrchestrator(), HandoffOrchestrator(), SelectorOrchestrator()):
        st = SharedState()
        orch.run("Multi-agent primitive model", st)
        print(f"{type(orch).__name__}: {[m['agent'] for m in st.get_messages()]}")
    print("all three orchestrators run the same three agents in the same order on an ordinary task, so the difference between them is invisible until an agent asks for something unusual; each run used a fresh SharedState, which is what makes the comparison valid.")

    section("2. Genuinely running: an agent asks to stop after the first step")
    results = {}
    for orch in (StaticOrchestrator(), HandoffOrchestrator(), SelectorOrchestrator()):
        st = SharedState()
        orch.run("status only", st)
        results[type(orch).__name__] = ([m["agent"] for m in st.get_messages()], st.get_artifact("verdict"))
    for k, v in results.items():
        print(f"{k}: agents run {len(v[0])} {v[0]} | verdict artifact: {v[1]}")
    print("only the handoff orchestrator honoured the stop request and ran one agent, while the static and selector orchestrators never read the handoff and ran all three, so an agent routing suggestion has no effect unless the orchestrator is built to read it; the same agents gave two different execution paths.")

    section("3. Genuinely running: handoff validation and the step limit")
    class LiarOrchestrator(HandoffOrchestrator):
        pass
    AGENTS["Writer"] = lambda task, state: AgentResult("Writer: done.", Handoff("Reviewer", "Reviewer", "pretending to be the reviewer"))
    try:
        LiarOrchestrator().run("topic", SharedState())
    except ValueError as e:
        print("mismatched source:", e)
    AGENTS["Writer"] = writer_policy
    AGENTS["Researcher"] = lambda task, state: AgentResult("Researcher: again.", Handoff("Researcher", "Researcher", "loop"))
    try:
        HandoffOrchestrator(max_steps=4).run("topic", SharedState())
    except RuntimeError as e:
        print("self-handoff loop:", e)
    AGENTS["Researcher"] = research_policy
    try:
        HandoffOrchestrator(max_steps=0)
    except ValueError as e:
        print("bad limit:", e)
    print("a result whose handoff claims another sender is refused, an agent that hands off to itself forever stops at the step limit and a limit of zero is rejected at construction; the first check only compares names, so it is not authorisation, which needs a table of allowed transitions.")

    section("4. Genuinely running: what the writer and reviewer do without their inputs")
    st = SharedState()
    print(writer_policy("topic", st).message, "|", reviewer_policy("topic", st).message)
    st.set_artifact("draft", "completely wrong nonsense")
    print("reviewer on a nonsense draft:", reviewer_policy("topic", st).message, "| verdict:", st.get_artifact("verdict"))
    print("missing inputs are reported as ordinary messages with no handoff, which an orchestrator can mistake for a normal ending, and the reviewer approves a nonsense draft because it only checks that a draft exists; approved here is a scripted word and not a review.")

    section("5. Genuinely running: copies out of the shared pool")
    st = SharedState()
    st.add_message("Researcher", "original")
    got = st.get_messages()
    got[0]["content"] = "edited"
    got.clear()
    print("stored after editing and clearing the copy:", st.get_messages())
    print("changing or clearing the list returned by get_messages left the pool intact, because each message dictionary is copied; the copy is shallow, so a message holding a nested list or dictionary would still be shared.")

    section("6. Genuinely counting: what each orchestrator costs when an agent stops early")
    counts = {}
    for orch in (StaticOrchestrator(), HandoffOrchestrator(), SelectorOrchestrator()):
        st = SharedState()
        orch.run("status only", st)
        counts[type(orch).__name__] = len(st.get_messages())
    print("agent runs on a status-only task:", counts)
    print("the handoff orchestrator spent one agent run where the other two spent three, so honouring an early stop saves two thirds of the agent calls in this task; a model-based selector would also add a routing call per step, which this scripted selector does not model.")


if __name__ == "__main__":
    main()
