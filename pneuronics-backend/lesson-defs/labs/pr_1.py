"""Teaching implementation (our own): The Multi-Agent Primitive Model, Part 1 - Agent, Handoff, Shared state and a first static pipeline.
The original code/main.py was not supplied. Agents are scripted Python functions, not language models, and the framework comparison in the lesson is conceptual and is not run."""
import threading
from dataclasses import dataclass, field, FrozenInstanceError
from typing import Any, Callable


@dataclass(frozen=True)
class Agent:
    name: str
    system_prompt: str
    tools: tuple
    policy: Callable[[str], str]


@dataclass(frozen=True)
class Handoff:
    from_agent: str
    to_agent: Any
    reason: str
    payload: Any = None


@dataclass
class SharedState:
    messages: list = field(default_factory=list)
    artifacts: dict = field(default_factory=dict)
    context: dict = field(default_factory=dict)
    _lock: Any = field(default_factory=threading.RLock, repr=False)

    def add_message(self, agent, content):
        with self._lock:
            self.messages.append({"agent": agent, "content": content})


SHARED_LIST = []  # the classic mistake: one mutable default shared by every instance


class BadState:
    def __init__(self, messages=SHARED_LIST):
        self.messages = messages


ALLOWED = {"Researcher": {"Writer"}, "Writer": {"Reviewer"}, "Reviewer": set()}


def validate_handoff(h):
    allowed = ALLOWED.get(h.from_agent)
    if allowed is None:
        raise ValueError("Unknown source agent: " + h.from_agent)
    if h.to_agent is not None and h.to_agent not in allowed:
        raise PermissionError(f"Unauthorized handoff: {h.from_agent} -> {h.to_agent}")
    return True


def project_state(role, artifacts):
    allowed = {"Researcher": {"topic", "requirements"}, "Writer": {"topic", "research", "requirements"}, "Reviewer": {"draft", "research", "requirements"}}.get(role)
    if allowed is None:
        raise ValueError("Unknown role")
    return {k: v for k, v in artifacts.items() if k in allowed}


def section(title):
    print(f"\n--- {title} ---")


def main():
    research = Agent("Researcher", "Research the topic.", ("search",), lambda t: f"Research: {t}")
    write = Agent("Writer", "Write the report.", (), lambda t: f"Draft: {t}")
    review = Agent("Reviewer", "Review the report.", (), lambda t: f"Approved: {t}")

    section("1. Genuinely running: an agent is a fixed description plus a function")
    try:
        research.name = "Other"
        verdict = "reassigned"
    except FrozenInstanceError:
        verdict = "FrozenInstanceError"
    first, second = research.policy("topic A"), research.policy("topic A")
    print("assigning a field:", verdict, "| same input twice gives the same output:", first == second, "|", first)
    print("tools listed:", research.tools, "| the tools tuple is only a description here, because the scripted policy never reads it or calls any tool")
    print("the frozen dataclass refuses reassignment and the scripted policy returns the same answer for the same input and remembers nothing between calls, so everything a later step needs has to be handed to it again; frozen does not make a nested mutable value immutable.")

    section("2. Genuinely running: a static pipeline over shared state")
    state = SharedState()
    current = "Multi-agent primitives"
    for agent in (research, write, review):
        current = agent.policy(current)
        state.add_message(agent.name, current)
    print("order:", [m["agent"] for m in state.messages])
    print("last message:", state.messages[-1]["content"])
    print("the orchestrator loop decided the order and passed each output to the next agent, and every agent left a message in the pool; the reviewer says Approved without looking at anything, because its scripted policy only prefixes the text.")

    section("3. Genuinely running: a handoff names who goes next, and code decides if that is allowed")
    ok = Handoff("Researcher", "Writer", "Research is ready")
    skip = Handoff("Researcher", "Reviewer", "Skip the writer")
    stop = Handoff("Researcher", None, "No report required")
    for label, h in (("researcher to writer", ok), ("researcher to reviewer", skip), ("researcher to nobody", stop)):
        try:
            print(label, "->", validate_handoff(h))
        except PermissionError as e:
            print(label, "->", type(e).__name__ + ":", e)
    print("the normal handoff and the early stop pass and a request to jump straight to the reviewer is refused, so the agent only proposes a transition and the runtime keeps the right to refuse it; None as a destination means stop here, which is different from a failure.")

    section("4. Genuinely running: separate pools for separate runs")
    a, b = SharedState(), SharedState()
    a.add_message("Researcher", "run A")
    bad1, bad2 = BadState(), BadState()
    bad1.messages.append("run A")
    print("good states:", len(a.messages), len(b.messages), "| states built with a shared mutable default:", len(bad1.messages), len(bad2.messages))
    print("with default_factory the second run starts empty, while a single list reused as a default leaks run A into run B, which would silently ruin a comparison between orchestrators that reuse the same code path.")

    section("5. Genuinely running: a lost update, and the same update under a lock")
    context = {"count": 0}
    read_a, read_b = context["count"], context["count"]
    context["count"] = read_a + 1
    context["count"] = read_b + 1
    unsafe = context["count"]
    locked = {"count": 0}
    lock = threading.Lock()

    def bump():
        for _ in range(1000):
            with lock:
                locked["count"] += 1
    threads = [threading.Thread(target=bump) for _ in range(4)]
    [t.start() for t in threads]
    [t.join() for t in threads]
    print("two readers who both saw 0 and each wrote +1 leave:", unsafe, "| four threads of 1000 locked increments leave:", locked["count"])
    print("the first number is produced by an explicit read, read, write, write order rather than by a race, so it shows what a lost update is and not how often one happens; the lock makes each increment safe inside one process, and it does nothing for separate processes or machines.")

    section("6. Genuinely running: a projected view for each role")
    artifacts = {"topic": "agents", "research": "findings", "draft": "report", "requirements": "3 sections", "billing_secret": "sensitive"}
    print("reviewer sees:", sorted(project_state("Reviewer", artifacts)), "| billing_secret visible:", "billing_secret" in project_state("Reviewer", artifacts))
    try:
        project_state("Intern", artifacts)
    except ValueError as e:
        print("unknown role:", e)
    print("each role gets only the artifacts it is allowed to see, the secret never appears and an unknown role is refused and not given an empty or full view; this filters a dictionary and is no real access control, so the storage and tools behind it must enforce the same limits.")


if __name__ == "__main__":
    main()
