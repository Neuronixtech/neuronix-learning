"""Teaching implementation (our own): OpenAI-Agents-SDK-style Part 1 - Agent, FunctionTool, Handoff, Runner, hop limit."""
from dataclasses import dataclass, field
from typing import Any, Callable


@dataclass
class FunctionTool:
    name: str
    description: str
    function: Callable[..., Any]

    def invoke(self, **kwargs):
        return self.function(**kwargs)


@dataclass
class Agent:
    name: str
    instructions: str
    tools: list = field(default_factory=list)
    handoffs: list = field(default_factory=list)


@dataclass
class Handoff:
    target_agent: Agent

    @property
    def tool_name(self):
        return f"transfer_to_{self.target_agent.name}"


BILLING_WORDS = ["billing", "charged", "payment", "invoice", "refund"]
SUPPORT_WORDS = ["error", "crash", "bug", "technical", "broken"]


def choose_action(agent, user_input):
    """Simulated model: keyword routing so the runtime mechanics can be studied without an API."""
    text = user_input.lower()
    if agent.name == "triage_agent":
        if any(w in text for w in BILLING_WORDS):
            return {"type": "handoff", "name": "transfer_to_billing_agent"}
        if any(w in text for w in SUPPORT_WORDS):
            return {"type": "handoff", "name": "transfer_to_support_agent"}
        return {"type": "final", "content": "I can help route your request."}
    if agent.name == "billing_agent":
        return {"type": "final", "content": "Billing agent: I'll help investigate the billing issue."}
    if agent.name == "support_agent":
        return {"type": "final", "content": "Support agent: I'll help troubleshoot the technical issue."}
    if agent.name == "ping_agent":
        return {"type": "handoff", "name": "transfer_to_pong_agent"}
    if agent.name == "pong_agent":
        return {"type": "handoff", "name": "transfer_to_ping_agent"}
    raise RuntimeError(f"no policy for {agent.name}")


class Runner:
    def __init__(self, max_hops=4):
        self.max_hops = max_hops
        self.path = []

    def resolve_handoff(self, agent, tool_name):
        for handoff in agent.handoffs:
            if handoff.tool_name == tool_name:
                return handoff.target_agent
        raise RuntimeError(f"Unknown handoff: {tool_name}")

    def run(self, agent, user_input):
        current, hops = agent, 0
        self.path = [agent.name]
        while True:
            action = choose_action(current, user_input)
            if action["type"] == "final":
                return action["content"]
            if action["type"] == "handoff":
                hops += 1
                if self.max_hops is not None and hops > self.max_hops:
                    raise RuntimeError("Maximum handoff count exceeded")
                current = self.resolve_handoff(current, action["name"])
                self.path.append(current.name)


billing_agent = Agent("billing_agent", "Handle billing, invoice, payment, refund and subscription issues.")
support_agent = Agent("support_agent", "Handle technical support, bugs, errors, crashes and troubleshooting.")
triage_agent = Agent("triage_agent", "Determine whether the user needs billing or technical support.")
triage_agent.handoffs = [Handoff(billing_agent), Handoff(support_agent)]
ping_agent, pong_agent = Agent("ping_agent", "p"), Agent("pong_agent", "q")
ping_agent.handoffs, pong_agent.handoffs = [Handoff(pong_agent)], [Handoff(ping_agent)]


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Triage routes to a specialist through a tool-like handoff")
    for text in ("I was charged twice.", "The application crashes on startup.", "Hello there"):
        runner = Runner()
        out = runner.run(triage_agent, text)
        print(f"{text!r:42} path={runner.path} | {out}")

    section("2. Handoffs are named tools")
    print([h.tool_name for h in triage_agent.handoffs])
    try:
        Runner().resolve_handoff(billing_agent, "transfer_to_support_agent")
    except RuntimeError as e:
        print("billing_agent has no handoffs, so resolving one ->", e)

    section("3. Genuinely checking: keyword routing on mixed and indirect requests")
    cases = [
        "I was charged twice and the app also crashes",
        "I was double billed last month",
        "My card was declined at checkout",
        "Do you offer a crash course on invoices?",
        "The refund button is broken",
        "Can you help me with my subscription?",
    ]
    for text in cases:
        r = Runner()
        out = r.run(triage_agent, text)
        print(f"{text!r:48} -> {r.path[-1]}")
    print("mixed requests go to whichever keyword list is checked first; paraphrases ('double billed', 'declined', 'subscription') fall through unrouted, and 'crash course on invoices' went to billing only because that list is checked first")
    r = Runner()
    r.run(triage_agent, "Do you offer a crash course for new users?")
    print("'Do you offer a crash course for new users?' ->", r.path[-1], "(a plain substring match on 'crash' treats a sales question as a technical fault)")

    section("4. Genuinely checking: a handoff carries only what the runner passes")
    r = Runner()
    print("turn 1:", r.run(triage_agent, "I was charged twice for Pro yesterday."), r.path)
    r = Runner()
    print("turn 2:", r.run(triage_agent, "It happened yesterday."), r.path)
    print("the second turn is routed on its own text only; the earlier billing context was not carried, so triage could not route it")

    section("5. Genuinely checking: a handoff cycle needs a hop limit")
    r = Runner(max_hops=4)
    try:
        r.run(ping_agent, "anything")
    except RuntimeError as e:
        print("RuntimeError:", e, "| path:", r.path)

    class Counting(Runner):
        def resolve_handoff(self, agent, tool_name):
            self.calls = getattr(self, "calls", 0) + 1
            if self.calls >= 5000:
                raise KeyboardInterrupt("test harness stopped an unbounded loop")
            return super().resolve_handoff(agent, tool_name)
    r = Counting(max_hops=None)
    try:
        r.run(ping_agent, "anything")
    except KeyboardInterrupt as e:
        print("with no hop limit:", e, "after", r.calls, "handoffs")

    section("6. Tool call versus handoff: who is active afterwards")
    lookups = []
    invoice = FunctionTool("lookup_invoice", "Look up an invoice", lambda invoice_id: lookups.append(invoice_id) or f"invoice {invoice_id}: paid")
    active = "billing_agent"
    print("before tool call, active agent:", active, "| result:", invoice.invoke(invoice_id="A-1"), "| active after tool:", active)
    r = Runner()
    r.run(triage_agent, "refund please")
    print("before handoff, active agent: triage_agent | active after handoff:", r.path[-1])


if __name__ == "__main__":
    main()
