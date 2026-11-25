"""Teaching implementation (our own): FIPA-ACL heritage, Part 3 - protocol correctness, semantic validation, idempotency, constrained selection and an auditable Contract Net.
The original code/main.py was not supplied. JADE, JACK, BDI, eBPF-style or broker material in the lesson is conceptual and is not run here; everything below is standard-library Python in one process."""
import time
from decimal import Decimal, InvalidOperation
from enum import Enum


class State(Enum):
    CREATED = "created"
    CFP_SENT = "cfp_sent"
    COLLECTING = "collecting"
    AWARDED = "awarded"
    COMPLETED = "completed"
    FAILED = "failed"
    CLOSED = "closed"


ALLOWED = {State.CREATED: {State.CFP_SENT}, State.CFP_SENT: {State.COLLECTING}, State.COLLECTING: {State.AWARDED, State.CLOSED},
           State.AWARDED: {State.COMPLETED, State.FAILED}, State.COMPLETED: {State.CLOSED}, State.FAILED: {State.CLOSED}, State.CLOSED: set()}


def transition(current, target):
    if target not in ALLOWED[current]:
        raise ValueError(f"Illegal transition {current.value} -> {target.value}")
    return target


# Which performative a sender may use in each state of the contract.
SENDER_RULES = {("worker", "propose"): {State.COLLECTING}, ("worker", "inform"): {State.AWARDED}, ("manager", "accept-proposal"): {State.COLLECTING}}


def protocol_ok(role, performative, state):
    return state in SENDER_RULES.get((role, performative), set())


def validate_stock_structure(d):
    return isinstance(d, dict) and isinstance(d.get("sku"), str) and isinstance(d.get("quantity"), int)


def validate_stock_semantics(d):
    return validate_stock_structure(d) and d["quantity"] >= 0 and bool(d["sku"].strip())


SUPPORTED = {"gross_sales", "net_recognized_revenue"}


def validate_revenue(d):
    required = {"metric", "amount", "currency", "accounting_period", "definition_version"}
    missing = required - set(d)
    if missing:
        raise ValueError(f"Missing fields: {sorted(missing)}")
    if d["metric"] not in SUPPORTED:
        raise ValueError("Unknown metric")
    try:
        return Decimal(d["amount"])
    except InvalidOperation:
        raise ValueError("Amount is not a decimal string")


class Idempotent:
    def __init__(self):
        self.done, self.executions = {}, 0

    def process(self, key, op):
        if key in self.done:
            return self.done[key]
        self.executions += 1
        self.done[key] = op()
        return self.done[key]


def audit_contract(proposals, deadline, now, enforce):
    """Collect proposals; with enforce=True a proposal that arrives after the deadline is refused and logged."""
    log, accepted = [], []
    for name, cost, duration, arrived in proposals:
        late = arrived > deadline
        if late and enforce:
            log.append(("late_proposal_rejected", name))
            continue
        accepted.append((name, cost, duration))
        log.append(("proposal_received", name + ("(late)" if late else "")))
    winner = min(accepted, key=lambda p: (p[1], p[2], p[0])) if accepted else None
    if winner:
        log.append(("winner_selected", winner[0]))
    return winner, log


def section(title):
    print(f"\n--- {title} ---")


def main():
    section("1. Genuinely running: the contract state machine")
    s = State.CREATED
    path = [State.CFP_SENT, State.COLLECTING, State.AWARDED, State.COMPLETED, State.CLOSED]
    trail = [s.value]
    for t in path:
        s = transition(s, t)
        trail.append(s.value)
    print("legal path:", " -> ".join(trail))
    try:
        transition(State.CREATED, State.COMPLETED)
    except ValueError as e:
        print("illegal jump:", e)
    print("the machine accepts the six-step path and refuses a jump from created to completed, so a premature completion claim is a protocol violation even when its content is well formed; this is an in-memory machine, so it does not survive a restart or a concurrent update.")

    section("2. Genuinely running: a valid message in the wrong state")
    print("worker inform while collecting:", protocol_ok("worker", "inform", State.COLLECTING))
    print("worker inform after the award:", protocol_ok("worker", "inform", State.AWARDED))
    print("manager accept-proposal while collecting:", protocol_ok("manager", "accept-proposal", State.COLLECTING), "| after completion:", protocol_ok("manager", "accept-proposal", State.COMPLETED))
    print("the same inform message is refused before the award and allowed after it, so protocol validation is a third check that sits beside structure and meaning; a worker that reports completion for a task it was never given is caught by the state and not by the content.")

    section("3. Genuinely running: structure, semantics and a versioned meaning")
    good, negative, stringy = {"sku": "A-1", "quantity": 5}, {"sku": "A-1", "quantity": -3}, {"sku": "A-1", "quantity": "5"}
    print("structure:", validate_stock_structure(good), validate_stock_structure(negative), validate_stock_structure(stringy))
    print("semantics:", validate_stock_semantics(good), validate_stock_semantics(negative), validate_stock_semantics(stringy))
    rev = {"metric": "net_recognized_revenue", "amount": "125000.00", "currency": "USD", "accounting_period": "2026-Q3", "definition_version": "finance-v2"}
    print("revenue amount:", validate_revenue(rev), "| float sum 0.1+0.2:", 0.1 + 0.2, "| Decimal sum:", Decimal("0.1") + Decimal("0.2"))
    try:
        validate_revenue({**rev, "metric": "revenue"})
    except ValueError as e:
        print("bare metric name:", e)
    print("a negative quantity passes the structural check and fails the semantic one, and a string quantity fails both; the revenue message is accepted only when it names an exact metric, a period and a definition version, and Decimal prints an exact 0.3 where the float prints 0.30000000000000004; the check still cannot prove that 125000.00 is the true figure.")

    section("4. Genuinely running: idempotency in one process")
    store = Idempotent()
    first = store.process("charge-order-101", lambda: {"status": "completed", "execution": store.executions})
    second = store.process("charge-order-101", lambda: {"status": "completed", "execution": store.executions})
    print(first, second, "| executions:", store.executions)
    print("the second delivery of the same key returns the stored result and the operation runs once; the memory dictionary is lost on restart and the check and the effect are separate steps, so a real payment needs a durable atomic record or a provider that enforces the key.")

    section("5. Genuinely running: selection with a constraint")
    options = [("North Dispatch", 12, 45), ("South Dispatch", 8, 75), ("Central Dispatch", 10, 50)]
    naive = min(options, key=lambda o: o[1])
    eligible = [o for o in options if o[2] <= 60]
    constrained = min(eligible, key=lambda o: o[1])
    print("cheapest overall:", naive[0], "| meets 60 minutes:", naive[2] <= 60)
    print("cheapest eligible:", constrained[0], "at", constrained[1])
    print("choosing on cost alone picks South Dispatch at 8, which takes 75 minutes and breaks the 60-minute requirement, while filtering first and then taking the cheapest gives Central Dispatch at 10; the protocol only carries the proposals, so the eligibility rule has to be written by the application.")

    section("6. Genuinely running: a deadline that is only a label against one that is enforced")
    bids = [("agent-a", 9.0, 8, 0.4), ("agent-b", 7.0, 6, 0.9), ("agent-c", 4.0, 12, 2.5)]
    w1, log1 = audit_contract(bids, deadline=1.0, now=time.monotonic(), enforce=False)
    w2, log2 = audit_contract(bids, deadline=1.0, now=time.monotonic(), enforce=True)
    print("deadline not enforced: winner", w1[0], "| log:", log1)
    print("deadline enforced: winner", w2[0], "| log:", log2)
    print("each run selected exactly one winner, but the late bid of agent-c at 2.5 seconds wins when the deadline is only a field and is refused and logged when it is enforced; the audit log is a Python list, so it is not durable or tamper-resistant.")


if __name__ == "__main__":
    main()
