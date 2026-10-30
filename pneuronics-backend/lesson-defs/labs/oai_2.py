"""Teaching implementation (our own): OpenAI-Agents-SDK-style Part 2 - input/output/tool guardrails, tripwires, parallel vs blocking."""
import threading
import time
from dataclasses import dataclass, field
from typing import Any, Callable

from oai_1 import BILLING_WORDS, SUPPORT_WORDS


class InputGuardrailTripwireTriggered(Exception):
    pass


class OutputGuardrailTripwireTriggered(Exception):
    pass


class ToolGuardrailTripwireTriggered(Exception):
    pass


@dataclass
class GuardrailResult:
    tripwire_triggered: bool
    reason: str


@dataclass
class FunctionTool:
    name: str
    description: str
    function: Callable[..., Any]
    guardrails: list = field(default_factory=list)

    def invoke(self, **kwargs):
        for guardrail in self.guardrails:
            result = guardrail(kwargs)
            if result.tripwire_triggered:
                raise ToolGuardrailTripwireTriggered(result.reason)
        return self.function(**kwargs)


@dataclass
class Handoff:
    target_agent: "Agent"

    @property
    def tool_name(self):
        return f"transfer_to_{self.target_agent.name}"


@dataclass
class Agent:
    name: str
    instructions: str
    tools: list = field(default_factory=list)
    handoffs: list = field(default_factory=list)
    input_guardrails: list = field(default_factory=list)
    output_guardrails: list = field(default_factory=list)


def sensitive_input_guardrail(text):
    for term in ("password", "secret key", "api key"):
        if term in text.lower():
            return GuardrailResult(True, f"Sensitive input detected: {term}")
    return GuardrailResult(False, "Input accepted")


def sensitive_output_guardrail(text):
    for term in ("internal secret", "private token", "customer password"):
        if term in text.lower():
            return GuardrailResult(True, f"Sensitive output detected: {term}")
    return GuardrailResult(False, "Output accepted")


REFUND_CALLS = []


def issue_refund(amount):
    REFUND_CALLS.append(amount)
    return f"Refund approved for ${amount:.2f}"


def refund_guardrail(arguments):
    amount = arguments.get("amount", 0)
    if amount <= 0:
        return GuardrailResult(True, "Refund amount must be positive")
    if amount > 500:
        return GuardrailResult(True, "Automatic refunds cannot exceed $500")
    return GuardrailResult(False, "Refund allowed")


refund_tool = FunctionTool("issue_refund", "Issue an approved customer refund.", issue_refund, [refund_guardrail])


def choose_action(agent, user_input):
    text = user_input.lower()
    if agent.name == "triage_agent":
        if any(w in text for w in BILLING_WORDS):
            return {"type": "handoff", "name": "transfer_to_billing_agent"}
        if any(w in text for w in SUPPORT_WORDS):
            return {"type": "handoff", "name": "transfer_to_support_agent"}
        return {"type": "final", "content": "I can help route your request."}
    if agent.name == "billing_agent":
        if "refund" in text:
            return {"type": "tool", "name": "issue_refund", "arguments": {"amount": 120.0}}
        return {"type": "final", "content": "Billing agent: I'll investigate the billing issue."}
    if agent.name == "support_agent":
        return {"type": "final", "content": "Support agent: I'll troubleshoot the technical issue."}
    if agent.name == "leaky_agent":
        return {"type": "tool", "name": "dump_notes", "arguments": {}}
    raise RuntimeError(agent.name)


class Runner:
    def __init__(self, max_hops=4):
        self.max_hops = max_hops
        self.entered = []

    def run_input_guardrails(self, agent, text):
        for g in agent.input_guardrails:
            result = g(text)
            if result.tripwire_triggered:
                raise InputGuardrailTripwireTriggered(result.reason)

    def run_output_guardrails(self, agent, output):
        for g in agent.output_guardrails:
            result = g(output)
            if result.tripwire_triggered:
                raise OutputGuardrailTripwireTriggered(result.reason)

    def run(self, agent, user_input):
        current, hops = agent, 0
        self.entered = [agent.name]
        self.run_input_guardrails(current, user_input)
        while True:
            action = choose_action(current, user_input)
            if action["type"] == "final":
                output = action["content"]
                self.run_output_guardrails(current, output)
                return output
            if action["type"] == "handoff":
                hops += 1
                if hops > self.max_hops:
                    raise RuntimeError("Maximum handoff count exceeded")
                current = next(h.target_agent for h in current.handoffs if h.tool_name == action["name"])
                self.entered.append(current.name)
            if action["type"] == "tool":
                tool = next(t for t in current.tools if t.name == action["name"])
                return tool.invoke(**action["arguments"])


billing = Agent("billing_agent", "billing", tools=[refund_tool])
support = Agent("support_agent", "support")
triage = Agent("triage_agent", "route", handoffs=[Handoff(billing), Handoff(support)],
               input_guardrails=[sensitive_input_guardrail], output_guardrails=[sensitive_output_guardrail])


def section(t):
    print(f"\n--- {t} ---")


def attempt(label, fn):
    try:
        print(f"{label}: {fn()}")
    except Exception as e:
        print(f"{label}: {type(e).__name__}: {e}")


def timed_run(guardrail_s, model_s, trips, parallel):
    """Real threads. The 'model' cannot be cancelled once started, as with a real request in flight."""
    state = {"model_started": False, "model_done": False}
    verdict = {}

    def guard():
        time.sleep(guardrail_s)
        verdict["trip"] = trips

    def model():
        state["model_started"] = True
        time.sleep(model_s)
        state["model_done"] = True

    t0 = time.perf_counter()
    if parallel:
        g, m = threading.Thread(target=guard), threading.Thread(target=model)
        g.start(); m.start(); g.join()
        decided = time.perf_counter() - t0
        if verdict["trip"]:
            elapsed = decided
        else:
            m.join()
            elapsed = time.perf_counter() - t0
        m.join()
        wasted = model_s if state["model_started"] and verdict["trip"] else 0.0
    else:
        guard()
        if verdict["trip"]:
            elapsed, wasted = time.perf_counter() - t0, 0.0
        else:
            model()
            elapsed, wasted = time.perf_counter() - t0, 0.0
    return elapsed, state["model_started"], wasted


def main():
    section("1. The four scenarios from the lesson")
    for text in ("I was charged twice.", "The application crashes on startup.", "I want a refund.", "My password is abc123 and billing is broken."):
        r = Runner()
        attempt(f"{text!r:46}", lambda: (r.run(triage, text), r.entered)[0] if False else f"{r.run(triage, text)} | entered {r.entered}")

    section("2. Genuinely checking the refund tool guardrail")
    REFUND_CALLS.clear()
    for amount in (120, 5000, 0, -5, 500, 500.01):
        attempt(f"amount={amount!r:7}", lambda a=amount: refund_tool.invoke(amount=a))
    print("refund function was executed for amounts:", REFUND_CALLS)
    print("5000 never reached issue_refund; the boundary 500 is allowed and 500.01 is blocked")

    section("3. Genuinely checking values the policy did not anticipate")
    REFUND_CALLS.clear()
    for label, amount in (("nan", float("nan")), ("True", True), ("'120' (string)", "120"), ("inf", float("inf"))):
        attempt(f"amount={label:15}", lambda a=amount: refund_tool.invoke(amount=a))
    print("function ran for:", REFUND_CALLS)
    print("NaN fails both comparisons (nan <= 0 and nan > 500 are False) so it is approved; the string raised TypeError inside the guardrail instead of tripping it")

    section("4. Genuinely checking the keyword input guardrail")
    for text in ("my password is hunter2", "my PASSWORD is hunter2", "my p4ssword is hunter2", "my pass word is hunter2",
                 "my pwd is hunter2", "here is my api-key: sk-123", "here is my API key: sk-123"):
        res = sensitive_input_guardrail(text)
        print(f"{text!r:34} tripped={res.tripwire_triggered}")
    print("case changes are caught; leetspeak, spacing, abbreviations and punctuation variants all pass")

    section("5. Genuinely checking where each guardrail actually runs")
    guarded_specialist = Agent("billing_agent", "billing", tools=[refund_tool],
                               input_guardrails=[lambda t: GuardrailResult(True, "specialist input guard fired")])
    t2 = Agent("triage_agent", "route", handoffs=[Handoff(guarded_specialist), Handoff(support)])
    attempt("specialist's own input guardrail after a handoff", lambda: Runner().run(t2, "I was charged twice."))
    print("it never fired: input guardrails run once, on the starting agent, before the loop")

    leaky = Agent("leaky_agent", "leaks", tools=[FunctionTool("dump_notes", "dump", lambda: "customer password: hunter2")],
                  output_guardrails=[sensitive_output_guardrail])
    attempt("tool result containing 'customer password'", lambda: Runner().run(leaky, "anything"))
    print("the output guardrail never saw it: the tool path returns the result directly, bypassing the final-output check")

    section("6. Genuinely measuring blocking versus parallel guardrails (real threads, seconds)")
    g, m = 0.2, 0.6
    print(f"guardrail takes {g}s, 'model' takes {m}s")
    print(f"{'mode':10} {'request':8} {'wall time':>10} {'model started':>14} {'model work discarded':>22}")
    for parallel in (False, True):
        for trips in (False, True):
            elapsed, started, wasted = timed_run(g, m, trips, parallel)
            print(f"{'parallel' if parallel else 'blocking':10} {'rejected' if trips else 'allowed':8} {elapsed:>9.2f}s {str(started):>14} {wasted:>21.1f}s")
    print("allowed request: parallel saves about the guardrail time; rejected request: both return at ~0.2s but parallel had already started the model")


if __name__ == "__main__":
    main()
