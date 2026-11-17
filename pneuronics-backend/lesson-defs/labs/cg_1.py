"""Teaching implementation (our own): cost governors, Part 1 - request cost arithmetic with Decimal, a lesson example whose printed expected output was wrong, the introductory governors (token budget, tool call cap, rolling-window velocity), quadratic context growth checked against a loop, and the saving from model routing.
All prices are the lesson's illustrative numbers or invented; none is a real provider price, and no model is called."""
from collections import deque
from decimal import Decimal


def request_cost(input_tokens, output_tokens, in_price, out_price, cached_tokens=0, cached_price=Decimal("0")):
    """USD cost with prices given per million tokens. Cached input tokens are billed at the cached price instead of the input price."""
    million = Decimal(1_000_000)
    uncached = input_tokens - cached_tokens
    return (Decimal(uncached) * in_price + Decimal(cached_tokens) * cached_price + Decimal(output_tokens) * out_price) / million


class TokenBudget:
    def __init__(self, limit):
        self.limit, self.used = limit, 0

    def consume(self, tokens):
        if tokens < 0 or self.used + tokens > self.limit:
            return False
        self.used += tokens
        return True


class ToolCallGovernor:
    def __init__(self, limits):
        self.limits, self.counts = limits, {}

    def allow(self, tool):
        if tool not in self.limits:
            return False
        c = self.counts.get(tool, 0)
        if c >= self.limits[tool]:
            return False
        self.counts[tool] = c + 1
        return True


class VelocityGovernor:
    def __init__(self, limit_usd, window_seconds):
        self.limit, self.window, self.events = Decimal(limit_usd), window_seconds, deque()

    def current(self, now):
        cutoff = now - self.window
        while self.events and self.events[0][0] <= cutoff:
            self.events.popleft()
        return sum((a for _, a in self.events), Decimal(0))

    def allow(self, now, amount):
        amount = Decimal(amount)
        if amount < 0 or self.current(now) + amount > self.limit:
            return False
        self.events.append((now, amount))
        return True


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely computing: one request, then ten thousand of them")
    c = request_cost(10_000, 2_000, Decimal("2"), Decimal("8"))
    print("one request costs", c, "USD | 10000 such requests cost", c * 10_000, "USD")
    print("the lesson example gives 0.02 for input and 0.016 for output, 0.036 in all, and ten thousand of them reach 360 dollars, so a cheap request becomes an expensive loop; the prices are illustrative")

    section("2. Genuinely computing: the lesson simulator action cost, and the figure its expected output printed")
    small = dict(in_price=Decimal("1.00"), out_price=Decimal("4.00"), cached_price=Decimal("0.25"))
    model = request_cost(10_000, 2_000, cached_tokens=5_000, **small)
    action = model + Decimal("6.00")
    print("model cost:", model, "| action cost with a 6.00 tool charge:", action, "| seven actions:", action * 7)
    from decimal import ROUND_HALF_UP
    q = Decimal("0.0001")
    print("rounded to four places with Python default half-even:", round(action, 4), "and", round(action * 7, 4), "| rounded half-up:", action.quantize(q, rounding=ROUND_HALF_UP), "and", (action * 7).quantize(q, rounding=ROUND_HALF_UP))
    print("the lesson first printed 6.0183 per action and 42.1270 in total, then corrected itself to 6.01425 and 42.09975; running the arithmetic gives the corrected exact figures, so the first expected output was a hand-written mistake and the code was right; the correction says four places should read 6.0143, which is true for round-half-up, while Python's default rounding for Decimal is half-even and prints 6.0142, so the printed digit depends on the rounding rule; the lab pricing is the lesson example, not a real price list")

    section("3. Genuinely running: token budget and tool call cap")
    tb = TokenBudget(100_000)
    print("consume 92000:", tb.consume(92_000), "| consume 12000:", tb.consume(12_000), "| used:", tb.used)
    g = ToolCallGovernor({"order_tracking": 3})
    print("order_tracking attempts:", ["ALLOW" if g.allow("order_tracking") else "DENY" for _ in range(5)], "| unknown tool:", "ALLOW" if g.allow("web_fetch") else "DENY")
    print("the second token request is refused because it would pass the limit, the fourth and fifth tool calls are refused at a cap of three, and an unknown tool is refused by default, which is the fail-closed choice")

    section("4. Genuinely running: a ten-minute velocity limit of 50 dollars")
    v = VelocityGovernor("50", 600)
    for t, amt in ((0, "12"), (120, "14"), (240, "18"), (360, "10")):
        print(t, amt, "ALLOW" if v.allow(t, amt) else "DENY")
    print("spend was 12, 26 and 44 dollars inside the window and the fourth request of 10 would make 54, so it was denied before it was spent; this is prevention, and checking the total after spending would only be monitoring")

    section("5. Genuinely computing: context growth is quadratic, T = n*b + d*n*(n-1)/2")
    b, d = 2_000, 1_000
    for n in (10, 50, 100):
        loop = sum(b + i * d for i in range(n))
        formula = n * b + d * n * (n - 1) // 2
        print(f"{n:3d} turns: loop {loop:9d} | formula {formula:9d} | equal {loop == formula}")
    print("with a 2000 token base and 1000 tokens added per turn, the total input tokens grow with the square of the number of turns, which is why a long agent gets expensive without any single bad request")

    section("6. Genuinely computing: model routing")
    all_premium = 1000 * Decimal("0.08")
    routed = 800 * Decimal("0.002") + 200 * Decimal("0.08")
    print("all premium:", all_premium, "| 800 small and 200 premium:", routed, "| saving:", all_premium - routed, "|", f"{(all_premium - routed) / all_premium:.0%}")
    print("the routed mix costs 17.60 against 80 and saves 78 percent, but the per-request costs are the lesson hypothetical figures and the calculation ignores any retries the cheaper model would need")


if __name__ == "__main__":
    main()
