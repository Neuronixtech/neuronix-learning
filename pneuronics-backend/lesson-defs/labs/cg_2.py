"""Teaching implementation (our own): cost governors, Part 2 - a layered governor with BudgetPolicy, Action, UsageLedger and CostGovernor evaluating each proposed action before it runs, a scripted agent that starts normal work and then polls an order tool, and a comparison of a monthly-only policy with layered policies.
Prices follow the lesson illustrative numbers, time is simulated in seconds and no model or tool is called."""
from collections import defaultdict
from dataclasses import dataclass, field
from decimal import Decimal

MILLION = Decimal(1_000_000)
PRICES = {"small": (Decimal("1.00"), Decimal("4.00"), Decimal("0.25")), "premium": (Decimal("5.00"), Decimal("20.00"), Decimal("1.25"))}


def money(x):
    return Decimal(x)


@dataclass(frozen=True)
class BudgetPolicy:
    max_output_tokens: int = 4_000
    max_context_tokens: int = 20_000
    max_task_tokens: int = 200_000
    max_task_usd: Decimal = money("100")
    max_turns: int = 20
    velocity_window: int = 600
    velocity_limit: Decimal = money("50")
    daily_limit: Decimal = money("200")
    monthly_limit: Decimal = money("3000")
    approval_threshold: Decimal = money("25")
    tool_limits: dict = field(default_factory=lambda: {"lookup": 5, "order_tracking": 5})


@dataclass(frozen=True)
class Action:
    name: str
    tool: str
    t: int
    input_tokens: int = 10_000
    cached_tokens: int = 5_000
    output_tokens: int = 2_000
    tool_cost: Decimal = money("6.00")
    complexity: str = "simple"


@dataclass
class UsageLedger:
    tokens: int = 0
    cost: Decimal = Decimal(0)
    turns: int = 0
    tool_counts: dict = field(default_factory=lambda: defaultdict(int))
    events: list = field(default_factory=list)
    stopped: bool = False
    audit: list = field(default_factory=list)


def action_cost(a):
    inp, out, cached = PRICES["premium" if a.complexity == "complex" else "small"]
    model = (Decimal(a.input_tokens - a.cached_tokens) * inp + Decimal(a.cached_tokens) * cached + Decimal(a.output_tokens) * out) / MILLION
    return model + a.tool_cost


class CostGovernor:
    def __init__(self, policy):
        self.p, self.ledger = policy, UsageLedger()

    def spent_in(self, now, window):
        return sum((c for t, c in self.ledger.events if now - window < t <= now), Decimal(0))

    def evaluate(self, a, approved=False):
        L, p = self.ledger, self.p
        cost = action_cost(a)
        tokens = a.input_tokens + a.output_tokens
        if L.stopped:
            return "KILL_SWITCH_ACTIVE", cost
        if a.output_tokens > p.max_output_tokens:
            return "REQUEST_OUTPUT_TOKEN_LIMIT", cost
        if a.input_tokens > p.max_context_tokens:
            return "CONTEXT_WINDOW_LIMIT", cost
        if L.tokens + tokens > p.max_task_tokens:
            return "TASK_TOKEN_BUDGET", cost
        if L.cost + cost > p.max_task_usd:
            return "TASK_DOLLAR_BUDGET", cost
        if L.turns + 1 > p.max_turns:
            return "ITERATION_CAP", cost
        if a.tool not in p.tool_limits:
            return "TOOL_NOT_ALLOWED", cost
        if L.tool_counts[a.tool] + 1 > p.tool_limits[a.tool]:
            return "TOOL_CALL_CAP", cost
        if self.spent_in(a.t, p.velocity_window) + cost > p.velocity_limit:
            return "VELOCITY_LIMIT", cost
        if self.spent_in(a.t, 86_400) + cost > p.daily_limit:
            return "DAILY_BUDGET", cost
        if self.spent_in(a.t, 30 * 86_400) + cost > p.monthly_limit:
            return "MONTHLY_BUDGET", cost
        if cost >= p.approval_threshold and not approved:
            return "HUMAN_APPROVAL_REQUIRED", cost
        return "AUTHORIZED", cost

    def execute(self, a, approved=False):
        reason, cost = self.evaluate(a, approved)
        L = self.ledger
        L.audit.append({"t": a.t, "action": a.name, "tool": a.tool, "allowed": reason == "AUTHORIZED", "reason": reason})
        if reason == "AUTHORIZED":
            L.tokens += a.input_tokens + a.output_tokens
            L.cost += cost
            L.turns += 1
            L.tool_counts[a.tool] += 1
            L.events.append((a.t, cost))
        elif reason != "HUMAN_APPROVAL_REQUIRED":
            L.stopped = True
        return reason, cost


def scripted_run(policy, n_polls=8, spacing=60):
    g = CostGovernor(policy)
    plan = [Action("normal_work", "lookup", 0), Action("normal_work", "lookup", spacing)]
    plan += [Action("poll_order_status", "order_tracking", 2 * spacing + i * spacing) for i in range(n_polls)]
    for a in plan:
        reason, _ = g.execute(a)
        if g.ledger.stopped:
            break
    return g


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: the lesson scenario, tool cap of 5 on order tracking")
    g = scripted_run(BudgetPolicy())
    for i, e in enumerate(g.ledger.audit, 1):
        print(f"{i:02d} {'ALLOW' if e['allowed'] else 'DENY ':5} {e['action']:18} {e['reason']}")
    print(f"turns {g.ledger.turns} | tokens {g.ledger.tokens} | task cost {g.ledger.cost} | stopped {g.ledger.stopped}")
    print("two normal actions and five polls were authorised and the eighth action, a sixth poll, was denied by the tool cap, which also tripped the kill switch; each action cost 6.01425, so seven cost 42.09975, matching the corrected figures from the lesson and not the first printed ones")

    section("2. Genuinely running: a higher tool cap lets the velocity limit fire instead")
    g2 = scripted_run(BudgetPolicy(tool_limits={"lookup": 5, "order_tracking": 50}), n_polls=15)
    last = g2.ledger.audit[-1]
    print(f"stopped after {g2.ledger.turns} authorised actions at t={last['t']} seconds because of {last['reason']} | spent in the window {g2.spent_in(last['t'], 600)}")
    print("with a cap of 50 the first limit to fire is the ten-minute velocity limit of 50 dollars, because eight actions fit in the window at 48.11 and the ninth would make 54.12, which is the second layer catching what the first would have allowed")

    section("3. Genuinely running: monthly-only policy against layered policies over ten polls")
    monthly_only = BudgetPolicy(max_turns=10_000, max_task_usd=money("1000000"), velocity_limit=money("1000000"), daily_limit=money("1000000"), tool_limits={"lookup": 10_000, "order_tracking": 10_000}, max_task_tokens=10_000_000)
    gm = scripted_run(monthly_only, n_polls=10)
    gl = scripted_run(BudgetPolicy(), n_polls=10)
    print(f"monthly-only: {gm.ledger.turns} actions allowed, {gm.ledger.cost} spent, stopped {gm.ledger.stopped}")
    print(f"layered:      {gl.ledger.turns} actions allowed, {gl.ledger.cost} spent, stopped {gl.ledger.stopped}, reason {gl.ledger.audit[-1]['reason']}")
    print("the monthly cap of 3000 never fires within a dozen actions, so the loop would run until it did, while the layered policy stopped at 42.10 dollars; one limit sized for a month cannot catch a loop that burns money in minutes")

    section("4. Genuinely running: approval for an expensive action does not override other limits")
    g3 = CostGovernor(BudgetPolicy())
    expensive = Action("research", "lookup", 0, tool_cost=money("30"))
    print("without approval:", g3.evaluate(expensive)[0], "| with approval:", g3.evaluate(expensive, approved=True)[0])
    g3.ledger.cost = money("80")
    print("with approval but only 20 left in the task budget:", g3.evaluate(expensive, approved=True)[0])
    print("an expensive action is paused for approval first, approval turns it into an authorised action only when every hard limit still passes, and when the remaining task budget is too small it is denied even with approval; in the lab approval is a boolean argument and a real system must check an authenticated record")


if __name__ == "__main__":
    main()
