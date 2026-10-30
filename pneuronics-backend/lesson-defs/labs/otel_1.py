"""Teaching implementation (our own): OpenTelemetry-GenAI-style spans - Span, kinds, parent/child, naming and the failure modes of a hand-built tracer."""
import itertools
import random
import time
import uuid
from dataclasses import dataclass, field
from typing import Any, Optional

KINDS = ("INTERNAL", "CLIENT", "SERVER", "PRODUCER", "CONSUMER")


@dataclass
class Span:
    name: str
    kind: str = "INTERNAL"
    attributes: dict = field(default_factory=dict)
    parent_id: Optional[str] = None
    span_id: str = field(default_factory=lambda: uuid.uuid4().hex[:8])
    start: float = field(default_factory=time.perf_counter)
    end: Optional[float] = None
    children: list = field(default_factory=list)

    def finish(self):
        self.end = time.perf_counter()

    @property
    def duration_ms(self):
        return None if self.end is None else (self.end - self.start) * 1000


def build_tree(spans):
    """Returns (roots, orphans). A span whose parent id is not in the list is an orphan."""
    by_id = {s.span_id: s for s in spans}
    roots, orphans = [], []
    for s in spans:
        s.children = []
    for s in spans:
        if s.parent_id is None:
            roots.append(s)
        elif s.parent_id in by_id:
            by_id[s.parent_id].children.append(s)
        else:
            orphans.append(s)
    return roots, orphans


def depth_of(span, by_id, limit=50):
    d = 0
    while span.parent_id is not None and d < limit:
        span = by_id.get(span.parent_id)
        if span is None:
            return None
        d += 1
    return d if d < limit else "cycle"


def section(t):
    print(f"\n--- {t} ---")


def render(span, indent=0):
    print(f"{'  ' * indent}{span.name} [{span.kind}] id={span.span_id}")
    for c in span.children:
        render(c, indent + 1)


def main():
    section("1. The lesson's hierarchy as data")
    root = Span("invoke_agent researcher", "INTERNAL", {"gen_ai.operation.name": "invoke_agent", "gen_ai.agent.name": "researcher"})
    chat = Span("chat gpt-4o", "CLIENT", {"gen_ai.operation.name": "chat"}, parent_id=root.span_id)
    tool = Span("execute_tool search", "INTERNAL", {"gen_ai.operation.name": "execute_tool"}, parent_id=root.span_id)
    for s in (chat, tool, root):
        s.finish()
    roots, orphans = build_tree([root, chat, tool])
    for r in roots:
        render(r)
    print("roots:", len(roots), "| orphans:", len(orphans))

    section("2. Genuinely checking: a flat list of spans without parent ids says nothing about structure")
    a, b, c = Span("invoke_agent x"), Span("chat m"), Span("execute_tool t")
    roots, orphans = build_tree([a, b, c])
    print("three spans with no parent ids -> roots:", len(roots), "| orphans:", len(orphans))
    print("every span became its own root: the tree exists only if parent_id was recorded when the span started")
    lost = Span("chat m", parent_id="deadbeef")
    roots, orphans = build_tree([a, lost])
    print("a child whose parent was never exported -> roots:", len(roots), "| orphans:", len(orphans), "(its parent id is", lost.parent_id + ")")

    section("3. Genuinely checking: a Span accepts values it should not")
    s = Span("x", kind="BANANA")
    print("kind='BANANA' accepted:", s.kind not in KINDS)
    s.finish(); first = s.end
    time.sleep(0.01); s.finish()
    print("finish() twice moved the end time by", f"{(s.end - first) * 1000:.1f} ms", "(the span silently grew)")
    s.attributes["gen_ai.request.model"] = "late-edit"
    print("attributes changed after finish:", s.attributes)
    print("nothing in the dataclass stops invalid kinds, double finishing or edits after the span has ended")

    section("4. Genuinely measuring: span-id collisions at 8 hex characters")
    for n in (10_000, 100_000, 400_000):
        seen, clashes = set(), 0
        for _ in range(n):
            i = uuid.uuid4().hex[:8]
            clashes += i in seen
            seen.add(i)
        print(f"{n:>8} ids: {clashes} repeated (birthday estimate {n * n / 2 / 16 ** 8:.1f})")
    print("OpenTelemetry span ids are 64 bits (16 hex characters); at 8 characters a busy service would link unrelated spans")
    p1, p2 = Span("invoke_agent first", span_id="aaaa1111"), Span("invoke_agent second", span_id="aaaa1111")
    kid = Span("chat m", parent_id="aaaa1111")
    build_tree([p1, p2, kid])
    print("two parents share id aaaa1111; the child's parent list: first has", len(p1.children), "child, second has", len(p2.children),
          "-> it was attached to", "the second" if p2.children else "the first")
    print("a clash attaches the child to whichever span was indexed last, with no error, so the tree is silently wrong")

    section("5. Genuinely checking: wall clock versus monotonic clock for durations")
    t0 = time.time()
    fake_wall_after_adjustment = t0 - 2.0
    print(f"if the wall clock is stepped back 2 s mid-span, time.time() reports a duration of {(fake_wall_after_adjustment - t0) * 1000:.0f} ms")
    m0 = time.perf_counter(); time.sleep(0.02); m1 = time.perf_counter()
    print(f"perf_counter() measured {(m1 - m0) * 1000:.1f} ms and cannot go backwards")
    print("the wall-clock step is simulated by subtracting 2 s, not by changing the system clock, so it shows what such a step would do to a duration")

    section("6. Genuinely measuring: span-name cardinality")
    rng = random.Random(5)
    users = [f"user-{rng.randint(1, 5000)}" for _ in range(2000)]
    bad = {f"invoke_agent {u}" for u in users}
    good = {"invoke_agent researcher" for _ in users}
    print(f"2000 requests, name includes the user id: {len(bad)} distinct span names | name is the agent name and the user is an attribute: {len(good)}")
    print("names are what dashboards group by; per-user names made 1,618 groups from 2,000 requests, so put variable values in attributes")

    section("7. Genuinely checking: local versus remote agent kind")
    local = Span("invoke_agent researcher", "INTERNAL")
    remote = Span("invoke_agent planner", "CLIENT", {"server.address": "agents.example.internal"})
    print(f"local agent in-process -> {local.kind}; remote agent service over the network -> {remote.kind}")
    wrong = [Span("invoke_agent planner", "INTERNAL") for _ in range(3)] + [Span("invoke_agent planner", "CLIENT") for _ in range(7)]
    client_share = sum(s.kind == "CLIENT" for s in wrong) / len(wrong)
    print(f"if 3 of 10 remote calls are recorded as INTERNAL, a 'client call' dashboard sees {client_share:.0%} of them")
    print("kind is not decoration; backends use it to separate network calls from in-process work, so it has to follow where the work runs")


if __name__ == "__main__":
    main()
