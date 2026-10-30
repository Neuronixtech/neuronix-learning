"""Teaching implementation (our own): OpenAI-Agents-SDK-style Part 3 - sessions, tracing spans, complete runner."""
import time
import uuid
from contextlib import contextmanager
from dataclasses import dataclass, field
from typing import Optional

from oai_1 import BILLING_WORDS, SUPPORT_WORDS
from oai_2 import (Agent, FunctionTool, GuardrailResult, Handoff, InputGuardrailTripwireTriggered,
                   OutputGuardrailTripwireTriggered, ToolGuardrailTripwireTriggered, refund_guardrail,
                   issue_refund, sensitive_input_guardrail, sensitive_output_guardrail)


class Session:
    def __init__(self, session_id):
        self.session_id = session_id
        self.messages = []

    def add(self, role, content):
        self.messages.append({"role": role, "content": content})

    def history(self):
        return list(self.messages)


@dataclass
class Span:
    name: str
    span_id: str
    parent_id: Optional[str]
    start_time: float
    end_time: Optional[float] = None
    status: str = "running"
    attributes: dict = field(default_factory=dict)

    @property
    def duration_ms(self):
        return None if self.end_time is None else (self.end_time - self.start_time) * 1000


class Tracer:
    def __init__(self, safe_processors=False):
        self.spans, self.processors, self.safe = [], [], safe_processors

    def add_processor(self, p):
        self.processors.append(p)

    def start_span(self, name, parent_id=None, attributes=None):
        s = Span(name, str(uuid.uuid4())[:8], parent_id, time.perf_counter(), attributes=attributes or {})
        self.spans.append(s)
        return s

    def end_span(self, span, status="ok"):
        span.end_time = time.perf_counter()
        span.status = status
        for p in self.processors:
            if self.safe:
                try:
                    p(span)
                except Exception:
                    pass
            else:
                p(span)

    @contextmanager
    def span(self, name, parent_id=None, attributes=None):
        item = self.start_span(name, parent_id, attributes)
        try:
            yield item
        except Exception:
            self.end_span(item, "error")
            raise
        else:
            self.end_span(item, "ok")

    def print_trace(self):
        for s in self.spans:
            d = "running" if s.duration_ms is None else f"{s.duration_ms:.3f} ms"
            print(f"- {s.name} [{s.status}]")


def choose_action(agent, text, history=None, use_history=False):
    """Simulated model. With use_history it also reads the previous user turn when the current one is ambiguous."""
    t = text.lower()
    if agent.name == "triage_agent":
        if any(w in t for w in BILLING_WORDS):
            return {"type": "handoff", "name": "transfer_to_billing_agent"}
        if any(w in t for w in SUPPORT_WORDS):
            return {"type": "handoff", "name": "transfer_to_support_agent"}
        if use_history and history:
            previous = " ".join(m["content"].lower() for m in history if m["role"] == "user")
            if any(w in previous for w in BILLING_WORDS):
                return {"type": "handoff", "name": "transfer_to_billing_agent"}
        return {"type": "final", "content": "I can help route your request."}
    if agent.name == "billing_agent":
        if "refund" in t:
            return {"type": "tool", "name": "issue_refund", "arguments": {"amount": 120.0}}
        return {"type": "final", "content": "Billing agent: I'll investigate the billing issue."}
    if agent.name == "support_agent":
        return {"type": "final", "content": "Support agent: I'll troubleshoot the technical issue."}
    if agent.name == "ping_agent":
        return {"type": "handoff", "name": "transfer_to_pong_agent"}
    if agent.name == "pong_agent":
        return {"type": "handoff", "name": "transfer_to_ping_agent"}
    raise RuntimeError(agent.name)


class Runner:
    def __init__(self, tracer=None, max_hops=4, validate_before_store=False, use_history=False):
        self.tracer = tracer or Tracer()
        self.max_hops, self.validate_first, self.use_history = max_hops, validate_before_store, use_history
        self.audit = []

    def _input_guard(self, agent, text, root):
        with self.tracer.span("guardrail.input", root.span_id):
            for g in agent.input_guardrails:
                r = g(text)
                if r.tripwire_triggered:
                    raise InputGuardrailTripwireTriggered(r.reason)

    def run(self, agent, user_input, session=None):
        with self.tracer.span("agent_run", attributes={"starting_agent": agent.name, "input_length": len(user_input)}) as root:
            prior = session.history() if session else []
            if session is not None and not self.validate_first:
                session.add("user", user_input)
            try:
                self._input_guard(agent, user_input, root)
            except InputGuardrailTripwireTriggered as e:
                self.audit.append({"event": "input_rejected", "reason": str(e), "length": len(user_input)})
                raise
            if session is not None and self.validate_first:
                session.add("user", user_input)
            current, hops = agent, 0
            while True:
                with self.tracer.span(f"agent.{current.name}", root.span_id):
                    action = choose_action(current, user_input, prior, self.use_history)
                if action["type"] == "final":
                    out = action["content"]
                    with self.tracer.span("guardrail.output", root.span_id):
                        for g in current.output_guardrails:
                            r = g(out)
                            if r.tripwire_triggered:
                                raise OutputGuardrailTripwireTriggered(r.reason)
                    if session is not None:
                        session.add("assistant", out)
                    return out
                if action["type"] == "handoff":
                    hops += 1
                    with self.tracer.span("handoff", root.span_id, {"source_agent": current.name, "handoff_tool": action["name"]}) as h:
                        if hops > self.max_hops:
                            raise RuntimeError("Maximum handoff count exceeded")
                        current = next(x.target_agent for x in current.handoffs if x.tool_name == action["name"])
                        h.attributes["target_agent"] = current.name
                if action["type"] == "tool":
                    tool = next(t for t in current.tools if t.name == action["name"])
                    with self.tracer.span(f"tool.{tool.name}", root.span_id, {"tool_name": tool.name}):
                        out = tool.invoke(**action["arguments"])
                    if session is not None:
                        session.add("assistant", out)
                    return out


def build_agents():
    refund_tool = FunctionTool("issue_refund", "Issue an approved customer refund.", issue_refund, [refund_guardrail])
    billing = Agent("billing_agent", "billing", tools=[refund_tool])
    support = Agent("support_agent", "support")
    triage = Agent("triage_agent", "route", handoffs=[Handoff(billing), Handoff(support)],
                   input_guardrails=[sensitive_input_guardrail], output_guardrails=[sensitive_output_guardrail])
    ping, pong = Agent("ping_agent", "p"), Agent("pong_agent", "q")
    ping.handoffs, pong.handoffs = [Handoff(pong)], [Handoff(ping)]
    return triage, ping


def section(t):
    print(f"\n--- {t} ---")


def main():
    triage, ping = build_agents()

    section("1. Four scenarios with a session and a trace")
    session = Session("customer-001")
    for text in ("I was charged twice.", "The application crashes on startup.", "I want a refund."):
        r = Runner()
        print(f"{text!r} -> {r.run(triage, text, session)}")
        print("  spans:", [f"{s.name}[{s.status}]" for s in r.tracer.spans])
    r = Runner()
    try:
        r.run(triage, "My password is abc123 and billing is broken.", Session("x"))
    except InputGuardrailTripwireTriggered as e:
        print("password input -> InputGuardrailTripwireTriggered:", e)
        print("  spans:", [f"{s.name}[{s.status}]" for s in r.tracer.spans])
    print("session history after three successful runs:", len(session.history()), "messages")

    section("2. Genuinely checking: a session stores history but routing ignores it unless you pass it in")
    for use_history in (False, True):
        s = Session("multi-turn")
        r = Runner(use_history=use_history)
        r.run(triage, "I was charged twice.", s)
        out = r.run(triage, "It happened yesterday.", s)
        print(f"use_history={use_history}: second turn -> {out}")
    print("with the pasted design the session is written but never read by the routing step, so the follow-up is unroutable")

    section("3. Genuinely checking: rejected input and the session (pasted ordering vs validate-first)")
    for validate_first in (False, True):
        s = Session("order-test")
        r = Runner(validate_before_store=validate_first)
        try:
            r.run(triage, "My password is abc123.", s)
        except InputGuardrailTripwireTriggered:
            pass
        stored = [m["content"] for m in s.history()]
        print(f"validate_before_store={validate_first}: session contains {stored} | audit={r.audit}")
    print("the pasted order stores the secret in session history even though the guardrail rejected it; the audit event keeps the length, not the text")

    section("4. Genuinely checking: span attributes and sensitive data")
    r = Runner()
    try:
        r.run(triage, "My password is abc123.", Session("t"))
    except InputGuardrailTripwireTriggered:
        pass
    print("root span attributes:", r.tracer.spans[0].attributes)
    print("only input_length and the starting agent were recorded, not the text")

    section("5. Genuinely measuring: 8-character span ids from uuid4")
    seen, collisions, n = set(), 0, 200_000
    for _ in range(n):
        i = str(uuid.uuid4())[:8]
        if i in seen:
            collisions += 1
        seen.add(i)
    expected = n * n / 2 / 16 ** 8
    print(f"{n} ids generated, collisions found: {collisions} (birthday estimate about {expected:.1f})")
    print("short ids are fine for a single small run but collide at scale; a tree built from parent_id would then link the wrong spans")

    section("6. Genuinely checking: a failing trace processor")
    for safe in (False, True):
        tr = Tracer(safe_processors=safe)
        tr.add_processor(lambda span: (_ for _ in ()).throw(RuntimeError("exporter down")))
        rr = Runner(tracer=tr)
        try:
            print(f"safe_processors={safe}: ", rr.run(triage, "I was charged twice.", Session("p")))
        except Exception as e:
            print(f"safe_processors={safe}: run failed with {type(e).__name__}: {e}")
    print("an exporter outage turned a successful run into an error until processor exceptions were isolated")

    section("7. Hop cycle in the trace")
    r = Runner(max_hops=3)
    try:
        r.run(ping, "x")
    except RuntimeError as e:
        print("RuntimeError:", e)
    print("trace:", [f"{s.name}[{s.status}]" for s in r.tracer.spans])

    section("8. Genuinely measuring: session growth")
    s = Session("bloat")
    r = Runner()
    for turn in range(1, 101):
        r.run(triage, "I was charged twice.", s)
        if turn in (1, 10, 100):
            words = sum(len(m["content"].split()) for m in s.history())
            print(f"after {turn:>3} turns: {len(s.history()):>3} messages, {words:>4} words if all were sent to the model each time")
    print("history grows linearly; only a selected slice should be sent per call")


if __name__ == "__main__":
    main()
