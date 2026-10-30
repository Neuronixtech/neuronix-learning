"""Teaching implementation (our own): nested tracing with gen_ai.* attributes - a stack-based tracer, the research agent, and a 1,000+ line trace proof."""
import contextvars
import random
import threading
import time
import uuid
from contextlib import contextmanager
from dataclasses import dataclass, field
from typing import Optional

LINES = []


def out(text=""):
    for line in str(text).split("\n"):
        LINES.append(line)
        print(line)


@dataclass
class Span:
    name: str
    kind: str = "INTERNAL"
    attributes: dict = field(default_factory=dict)
    parent_id: Optional[str] = None
    span_id: str = field(default_factory=lambda: uuid.uuid4().hex[:16])
    start: float = 0.0
    end: float = 0.0
    status: str = "UNSET"


class Tracer:
    """Our tracer with an explicit stack (shared by all callers, as in the lesson's first version)."""

    def __init__(self):
        self.spans, self.stack = [], []

    @contextmanager
    def start_span(self, name, kind="INTERNAL", attributes=None):
        parent = self.stack[-1].span_id if self.stack else None
        span = Span(name, kind, dict(attributes or {}), parent, start=time.perf_counter())
        self.spans.append(span)
        self.stack.append(span)
        try:
            yield span
        finally:
            span.end = time.perf_counter()
            self.stack.pop()


class NoFinallyTracer(Tracer):
    """The mistake: pop only on the success path."""

    @contextmanager
    def start_span(self, name, kind="INTERNAL", attributes=None):
        parent = self.stack[-1].span_id if self.stack else None
        span = Span(name, kind, dict(attributes or {}), parent, start=time.perf_counter())
        self.spans.append(span)
        self.stack.append(span)
        yield span
        span.end = time.perf_counter()
        self.stack.pop()


class ContextTracer:
    """Our fix for concurrent callers: the current span lives in a ContextVar, not in shared state."""

    def __init__(self):
        self.spans, self.lock = [], threading.Lock()
        self.current = contextvars.ContextVar("current_span", default=None)

    @contextmanager
    def start_span(self, name, kind="INTERNAL", attributes=None):
        parent = self.current.get()
        span = Span(name, kind, dict(attributes or {}), parent.span_id if parent else None, start=time.perf_counter())
        with self.lock:
            self.spans.append(span)
        token = self.current.set(span)
        try:
            yield span
        finally:
            span.end = time.perf_counter()
            self.current.reset(token)


PROVIDER, REQ_MODEL, RESP_MODEL = "openai", "gpt-4o", "gpt-4o-2024-08-06"
DOCS = {"d1": "OpenTelemetry defines spans.", "d2": "GenAI conventions name agent, tool and model spans.", "d3": "Attributes use the gen_ai.* prefix."}


def search_documents(query):
    return [k for k, v in DOCS.items() if any(w in v.lower() for w in query.lower().split())][:2] or ["d1"]


def traced_search(tracer, query):
    with tracer.start_span("execute_tool search", "INTERNAL", {"gen_ai.operation.name": "execute_tool", "gen_ai.tool.name": "search",
                                                              "gen_ai.data_source.id": "kb-main"}):
        return search_documents(query)


def traced_fetch(tracer, doc_id):
    with tracer.start_span("execute_tool fetch", "INTERNAL", {"gen_ai.operation.name": "execute_tool", "gen_ai.tool.name": "fetch",
                                                             "gen_ai.data_source.id": "kb-main"}):
        return DOCS[doc_id]


def traced_model(tracer, prompt, provider=PROVIDER):
    attrs = {"gen_ai.operation.name": "chat", "gen_ai.request.model": REQ_MODEL}
    if provider:
        attrs["gen_ai.provider.name"] = provider
    with tracer.start_span(f"chat {REQ_MODEL}", "CLIENT", attrs) as s:
        s.attributes["gen_ai.response.model"] = RESP_MODEL
        return f"answer based on {len(prompt)} chars"


def run_research_agent(tracer, question, provider=PROVIDER, extra_fetch=True):
    with tracer.start_span("invoke_agent researcher", "INTERNAL", {"gen_ai.operation.name": "invoke_agent", "gen_ai.agent.name": "researcher"}):
        traced_model(tracer, question, provider)
        ids = traced_search(tracer, question)
        docs = [traced_fetch(tracer, i) for i in (ids if extra_fetch else ids[:1])]
        return traced_model(tracer, question + " ".join(docs), provider)


def print_span(span, by_children, depth=0):
    dur = (span.end - span.start) * 1000
    attrs = " ".join(f"{k.replace('gen_ai.', '')}={v}" for k, v in sorted(span.attributes.items()))
    out(f"{'  ' * depth}{span.name} [{span.kind}] id={span.span_id[:8]} {dur:.3f} ms {attrs}")
    for c in by_children.get(span.span_id, []):
        print_span(c, by_children, depth + 1)


def children_map(spans):
    m = {}
    for s in spans:
        m.setdefault(s.parent_id, []).append(s)
    return m


def section(t):
    out(f"\n--- {t} ---")


def main():
    section("1. One run of the research agent, as a tree")
    tr = Tracer()
    run_research_agent(tr, "what are genai conventions")
    cm = children_map(tr.spans)
    for r in cm[None]:
        print_span(r, cm)
    out(f"spans: {len(tr.spans)} | stack after the run: {len(tr.stack)} (must be 0)")

    section("2. Genuinely measuring: missing gen_ai.provider.name (10 percent of model calls, seed 3, 400 runs)")
    rng = random.Random(3)
    spans = []
    for _ in range(400):
        t = Tracer()
        run_research_agent(t, "what are genai conventions", provider=None if rng.random() < 0.10 else PROVIDER)
        spans += t.spans
    chats = [s for s in spans if s.attributes.get("gen_ai.operation.name") == "chat"]
    groups = {}
    for s in chats:
        groups[s.attributes.get("gen_ai.provider.name", "(missing)")] = groups.get(s.attributes.get("gen_ai.provider.name", "(missing)"), 0) + 1
    out(f"chat spans grouped by provider: {groups}")
    out("a dashboard grouped by gen_ai.provider.name puts those calls in a group nobody can attribute to a provider")

    section("3. Genuinely measuring: request model versus response model")
    resp = {}
    for s in chats:
        resp[(s.attributes["gen_ai.request.model"], s.attributes["gen_ai.response.model"])] = resp.get((s.attributes["gen_ai.request.model"], s.attributes["gen_ai.response.model"]), 0) + 1
    out(f"(request, response) pairs seen: {resp}")
    out("grouping by the requested alias hides which model version served the call; the resolved name is what changes when a provider re-points an alias")

    section("4. Genuinely checking: a shared stack under 8 concurrent agents (real threads)")
    def agent_thread(tracer):
        for _ in range(25):
            with tracer.start_span("invoke_agent researcher", attributes={"gen_ai.operation.name": "invoke_agent"}):
                time.sleep(0.0005)
                with tracer.start_span("chat gpt-4o", "CLIENT", {"gen_ai.operation.name": "chat"}):
                    time.sleep(0.0005)

    shared = Tracer()
    ts = [threading.Thread(target=agent_thread, args=(shared,)) for _ in range(8)]
    [t.start() for t in ts]; [t.join() for t in ts]
    nested_roots = sum(1 for s in shared.spans if s.name.startswith("invoke_agent") and s.parent_id is not None)
    out(f"shared stack: {len(shared.spans)} spans | agent spans wrongly nested under another agent's span: {nested_roots} of 200 | stack left with {len(shared.stack)} entries")
    ctx = ContextTracer()
    ts = [threading.Thread(target=agent_thread, args=(ctx,)) for _ in range(8)]
    [t.start() for t in ts]; [t.join() for t in ts]
    nested_roots2 = sum(1 for s in ctx.spans if s.name.startswith("invoke_agent") and s.parent_id is not None)
    cross = 0
    by = {s.span_id: s for s in ctx.spans}
    for s in ctx.spans:
        if s.name.startswith("chat"):
            cross += not (by.get(s.parent_id) and by[s.parent_id].name.startswith("invoke_agent"))
    out(f"ContextVar tracer: {len(ctx.spans)} spans | agent spans nested wrongly: {nested_roots2} | chat spans without an agent parent: {cross}")
    out("a single shared stack mixes the callers' hierarchies as soon as two requests overlap; a per-context current span keeps each tree separate")

    section("5. Genuinely checking: an exception when the pop is not in a finally block")
    for cls in (NoFinallyTracer, Tracer):
        t = cls()
        try:
            with t.start_span("invoke_agent researcher"):
                with t.start_span("execute_tool search"):
                    raise RuntimeError("backend down")
        except RuntimeError:
            pass
        with t.start_span("invoke_agent researcher"):
            pass
        nxt = t.spans[-1]
        out(f"{cls.__name__:16} stack left: {len(t.stack)} | the next, unrelated agent span has parent: {'YES (wrong)' if nxt.parent_id else 'none'}")
    out("without finally the failed spans stay on the stack and every later span becomes their descendant")

    section("6. The 1,000+ line proof: 175 research-agent runs, every span printed")
    rng = random.Random(21)
    all_spans, runs = [], 175
    questions = ["what are genai conventions", "explain otel spans", "how are attributes named", "what is a data source"]
    for i in range(runs):
        t = Tracer()
        q = rng.choice(questions)
        run_research_agent(t, q, extra_fetch=rng.random() < 0.7)
        all_spans += t.spans
        out(f"RUN {i + 1:03d} question={q!r} spans={len(t.spans)}")
        cm = children_map(t.spans)
        for r in cm[None]:
            print_span(r, cm)
    out("")
    ids = {s.span_id for s in all_spans}
    orphans = sum(1 for s in all_spans if s.parent_id is not None and s.parent_id not in ids)
    roots = sum(1 for s in all_spans if s.parent_id is None)
    chat_ok = all("gen_ai.provider.name" in s.attributes and "gen_ai.request.model" in s.attributes and "gen_ai.response.model" in s.attributes
                  for s in all_spans if s.attributes.get("gen_ai.operation.name") == "chat")
    tool_ok = all("gen_ai.data_source.id" in s.attributes for s in all_spans if s.attributes.get("gen_ai.operation.name") == "execute_tool")
    out(f"CHECKS spans={len(all_spans)} roots={roots} (expected {runs}) orphans={orphans} chat_attrs_complete={chat_ok} tool_data_source_present={tool_ok}")
    total = len(LINES) + 2
    out(f"TOTAL LINES EMITTED BY THIS PROGRAM: {total}")
    out(f"REQUIREMENT line count > 1000: {total > 1000}")


if __name__ == "__main__":
    main()
