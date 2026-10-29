"""Teaching implementation (our own): CrewAI-style Part 2 - tools, typed results, layered memory, crew with memory."""
from dataclasses import dataclass, field
from typing import Callable

from crew_1 import Agent, SequentialCrew, Task


@dataclass
class Tool:
    name: str
    description: str
    function: Callable

    def run(self, **kwargs):
        return self.function(**kwargs)


def tool(name: str):
    def decorator(func):
        return Tool(name=name, description=func.__doc__ or "", function=func)
    return decorator


@tool("search")
def search(query: str) -> str:
    """Search a deterministic local knowledge base."""
    kb = {"agent engineering": "Memory, tools and flows.", "crew": "A container of agents and tasks."}
    return kb.get(query.lower(), "no result")


@tool("calculator")
def calculator(expression: str) -> str:
    """Add two integers written like '2 + 3'."""
    a, b = expression.split("+")
    return str(int(a) + int(b))


@tool("word_count")
def word_count(text: str) -> str:
    return str(len(text.split()))


class ToolAgent(Agent):
    """An agent that may only call tools it was given."""

    def use(self, tool_name: str, **kwargs):
        allowed = {t.name: t for t in self.tools}
        if tool_name not in allowed:
            raise PermissionError(f"{self.role} has no tool {tool_name!r}; it has {sorted(allowed)}")
        return allowed[tool_name].run(**kwargs)


def pick_tool(tools, request: str):
    """Choose a tool by word overlap between the request and each description (a crude stand-in for a model reading them)."""
    words = set(request.lower().split())
    scored = sorted(((len(words & set(t.description.lower().split())), t.name) for t in tools), reverse=True)
    return scored[0]


@dataclass(frozen=True)
class ResearchResult:
    topic: str
    findings: tuple

    def __post_init__(self):
        if not self.topic:
            raise ValueError("topic must not be empty")
        if len(self.findings) != 3:
            raise ValueError(f"expected exactly 3 findings, got {len(self.findings)}")


def parse_result(topic: str, text: str) -> ResearchResult:
    lines = tuple(l.split(": ", 1)[1] for l in text.splitlines() if l.startswith("Finding") and ": " in l)
    return ResearchResult(topic, lines)


STOP = {"the", "a", "an", "is", "of", "and", "to", "in", "for", "what", "does"}


class Memory:
    def __init__(self, use_stopwords=False):
        self.short_term, self.long_term, self.entities = [], [], {}
        self.use_stopwords = use_stopwords

    def remember_short(self, value):
        self.short_term.append(value)

    def remember_long(self, value):
        self.long_term.append(value)

    def remember_entity(self, name, fact):
        self.entities.setdefault(name, []).append(fact)

    def _words(self, text):
        w = set(text.lower().replace("?", "").replace(".", "").split())
        return w - STOP if self.use_stopwords else w

    def retrieve(self, query, k=2, min_score=0):
        q = self._words(query)
        scored = sorted(((len(q & self._words(m)), m) for m in self.long_term), key=lambda x: -x[0])
        return [(s, m) for s, m in scored[:k] if s >= min_score]


class MemoryCrew:
    """Sequential crew whose first agent reads long-term memory and whose result is written back after the run."""

    def __init__(self, memory, use_memory=True):
        self.memory, self.use_memory = memory, use_memory

    def kickoff(self, topic):
        hits = self.memory.retrieve(topic, min_score=1) if self.use_memory else []
        context = topic + ("\nPRIOR: " + " | ".join(m for _, m in hits) if hits else "")
        crew = SequentialCrew([], [Task("Research", "three findings", Agent("Researcher", "g", "b"))])
        out, _ = crew.kickoff(context)
        self.memory.remember_long(f"{topic}: {out.splitlines()[0]}")
        return context, hits


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. The @tool decorator turns a function into a described object")
    for t in (search, calculator, word_count):
        print(f"{t.name!r}: description={t.description!r}")
    print("search(agent engineering) ->", search.run(query="agent engineering"))
    print("calculator('2 + 3') ->", calculator.run(expression="2 + 3"))

    section("2. Genuinely checking: a tool with no docstring has nothing for a model to read")
    tools = [search, calculator, word_count]
    for request in ("search the knowledge base for crew", "add two integers", "count the words in this text"):
        score, name = pick_tool(tools, request)
        words = set(request.lower().split())
        allscores = {t.name: len(words & set(t.description.lower().split())) for t in tools}
        print(f"request {request!r:42} -> picked {name!r}; scores {allscores}")
    print("the word-count request scores 0 for every tool, so 'word_count' was chosen only by the sort tie-break, not by evidence")
    print("an empty description can never earn a positive score, so a description-driven chooser cannot select it on merit")

    section("3. Tool access is per agent")
    r = ToolAgent("Researcher", "g", "b", tools=[search])
    print("researcher uses search:", r.use("search", query="crew"))
    try:
        r.use("calculator", expression="1 + 1")
    except PermissionError as e:
        print("PermissionError:", e)
    try:
        r.use("search", wrong_argument="x")
    except TypeError as e:
        print("TypeError:", e)
    try:
        calculator.run(expression="2 plus 3")
    except ValueError as e:
        print("tool body error surfaces as:", type(e).__name__, "-", e)

    section("4. Genuinely checking: structured output rejects what expected_output would accept")
    good = "Finding 1: a\nFinding 2: b\nFinding 3: c"
    print("good ->", parse_result("agents", good))
    for label, text in (("two findings", "Finding 1: a\nFinding 2: b"),
                        ("prose", "Here are my thoughts on agents, they are great."),
                        ("four findings", good + "\nFinding 4: d")):
        try:
            parse_result("agents", text)
        except ValueError as e:
            print(f"{label:14} -> ValueError: {e}")
    try:
        parse_result("agents", good).topic = "x"
    except Exception as e:
        print("the typed result is frozen:", type(e).__name__)
    print("note: 3 findings of nonsense still pass; a typed shape checks structure, not truth")
    print("nonsense passes:", parse_result("agents", "Finding 1: ?\nFinding 2: ?\nFinding 3: ?").findings)

    section("5. Layers of memory")
    m = Memory()
    m.remember_short("user asked about CrewAI")
    m.remember_long("Flows give deterministic control of a pipeline")
    m.remember_long("Crews give role-based collaboration")
    m.remember_long("Process decides the execution strategy of a crew")
    m.remember_entity("CrewAI", "a framework for role-based agents")
    print("short:", m.short_term, "| entities:", m.entities)
    print("retrieve('what is a Process'):", m.retrieve("what is a Process", k=2))

    section("6. Genuinely checking: word-overlap retrieval and its failure modes")
    raw, filt = Memory(), Memory(use_stopwords=True)
    for mem in (raw, filt):
        mem.remember_long("the team decided to ship on Friday")
        mem.remember_long("the deadline for the release is Friday")
        mem.remember_long("tea is served in the afternoon")
    q = "what is the plan for the launch"
    print("query:", q)
    print("raw words        :", raw.retrieve(q, k=1))
    print("stop-words dropped:", filt.retrieve(q, k=1))
    print("paraphrase 'when do we release' ->", filt.retrieve("when do we release", k=2))
    print("zero-overlap top-k still returns items unless min_score is set:", filt.retrieve("zzz unrelated", k=2))
    print("with min_score=1:", filt.retrieve("zzz unrelated", k=2, min_score=1))

    section("7. Genuinely checking: memory across two kickoffs")
    for use in (False, True):
        mem = Memory(use_stopwords=True)
        crew = MemoryCrew(mem, use_memory=use)
        crew.kickoff("agent engineering")
        context, hits = crew.kickoff("agent engineering")
        print(f"use_memory={use}: second-run context has prior knowledge = {'PRIOR' in context}; long-term items = {len(mem.long_term)}")
    mem = Memory(use_stopwords=True)
    mem.remember_long("pricing: the plan costs 10 dollars")
    mem.remember_long("pricing: the plan now costs 20 dollars")
    print("two contradicting facts both come back:", [x for _, x in mem.retrieve("pricing plan costs", k=2)])
    print("retrieval returns what matches, not what is currently true")


if __name__ == "__main__":
    main()
