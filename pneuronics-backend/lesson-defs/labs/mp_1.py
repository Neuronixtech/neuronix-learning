"""Teaching implementation (our own): managed LLM platforms, Part 1 - the latency arithmetic of a request (TTFT, inter-token latency, completion time), median against P95 and P99, an M/M/1 queue checked against a seeded simulation, the break-even utilisation of a reservation u = R / V, the effective cost of an under-used reservation, and a reserve-the-base, pay-on-demand-for-the-rest comparison on the lesson's hourly request profile.
Every number comes from the lesson's illustrative examples or from seeded simulations written by the lab; no cloud platform, price list, GPU or model is measured, and the 50 ms against 75 ms TTFT, the 40-60 percent band and the dollar price range quoted in the lesson are cited and not reproduced here.
"""
import math
import random


def percentile(values, f):
    o = sorted(values)
    pos = f * (len(o) - 1)
    lo, hi = math.floor(pos), math.ceil(pos)
    return o[lo] * (1 - (pos - lo)) + o[hi] * (pos - lo)


def mm1_sojourn_simulated(lam, mu, n=400000, seed=5):
    rng = random.Random(seed)
    wait = 0.0
    total = 0.0
    for _ in range(n):
        service = rng.expovariate(mu)
        total += wait + service
        wait = max(0.0, wait + service - rng.expovariate(lam))
    return total / n


def breakeven(reserved, on_demand_full):
    return reserved / on_demand_full


HOURLY = [200, 500, 1000, 1200, 1300, 1250, 1100, 1000, 900, 600]


def plan_cost(base, demand, c_reserved, c_on_demand):
    return sum(c_reserved * base + c_on_demand * max(0, d - base) for d in demand)


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely computing: the arithmetic of one request")
    stages = {"network and application": 20, "scheduling": 15, "prefill and first token": 65, "remaining token generation": 2000, "final delivery": 30}
    print(stages, "| total:", sum(stages.values()), "ms")
    ttft, n, itl = 100, 500, 30
    print(f"completion time with TTFT {ttft} ms, {n} tokens, {itl} ms between tokens: {ttft + (n - 1) * itl} ms | decode speed {1000 / itl:.2f} tokens per second")
    print("the five stages add up to 2130 ms and the first token arrives long before that, and a 100 ms TTFT with 500 tokens at 30 ms each finishes after 15070 ms, so a fast first token and a fast finish are different measurements; the formula assumes a constant gap between tokens, which a real serving system does not have")

    section("2. Genuinely measuring: median, P95 and P99 on a skewed distribution")
    print("median of 40, 45, 48, 50, 55, 60, 70:", percentile([40, 45, 48, 50, 55, 60, 70], 0.5), "ms")
    rng = random.Random(11)
    lat = [rng.lognormvariate(math.log(50), 0.6) for _ in range(100000)]
    print(f"100000 simulated TTFTs: mean {sum(lat) / len(lat):.1f} | P50 {percentile(lat, .5):.1f} | P95 {percentile(lat, .95):.1f} | P99 {percentile(lat, .99):.1f} ms")
    print("requests above the P99 value out of a million:", int(1_000_000 * 0.01))
    print("the median of the seven values is 50, and the skewed simulated sample has a median near 50 ms, a mean of 59.8, a P95 of 134.0 that is about 2.7 times the median and a P99 of 202.9 that is about 4 times it, so a median alone hides the slow tail; one percent of a million requests is 10000 users, and the lognormal shape is the lab's assumption and not a measurement of any provider")

    section("3. Genuinely measuring: an M/M/1 queue against its formula")
    print(f"{'arrival rate':>12} {'utilisation':>12} {'formula W':>10} {'simulated W':>12}")
    for lam in (50, 80, 90, 95):
        print(f"{lam:>12} {lam / 100:>12.2f} {1 / (100 - lam):>10.4f} {mm1_sojourn_simulated(lam, 100):>12.4f}")
    print("at 80 requests per second against a capacity of 100 the expected time in the system is 0.05 s and at 95 it is 0.2 s, a fourfold rise for a fifteen-point rise in utilisation, and the simulation agrees with the formula to within about 3 percent at the highest load; a real inference service is not a single M/M/1 queue, so this shows only why delay grows faster than load")

    section("4. Genuinely computing: break-even utilisation u = R / V")
    for r, v in ((6_00_000, 12_00_000), (4_80_000, 12_00_000), (7_20_000, 12_00_000)):
        print(f"reserved {r:>9,} against on-demand {v:,} at full use: break-even {breakeven(r, v):.0%}")
    print(f"{'utilisation':>11} {'on-demand equivalent':>21} {'reserved':>10} cheaper")
    for u in (0.2, 0.3, 0.4, 0.5, 0.6, 0.8, 1.0):
        od = 12_00_000 * u
        print(f"{u:>11.0%} {od:>21,.0f} {6_00_000:>10,} {'on-demand' if od < 6_00_000 else 'break-even' if od == 6_00_000 else 'reserved'}")
    print("1000 per hour for 720 hours is", 1000 * 720, "| 30 dollars per hour for 720 hours is", 30 * 720)
    print("effective cost per unit of use at 20 percent utilisation is", f"{1 / 0.2:.0f}", "times the full-use price")
    print("with a reservation of half the full-use on-demand cost the break-even is 50 percent, a cheaper reservation moves it down to 40 percent and a dearer one up to 60 percent, which is the arithmetic behind a 40 to 60 percent band, and at 20 percent utilisation each unit of work costs five times what it would at full use; the lesson's price examples are illustrative and the linear model ignores minimum commitments and token charges")

    section("5. Genuinely computing: how much to reserve for a changing day")
    print("hourly requests per minute from the lesson:", HOURLY, "| average", sum(HOURLY) / len(HOURLY), "| peak", max(HOURLY))
    avg = sum(HOURLY) / len(HOURLY)
    for label, cap in (("reserve the peak", max(HOURLY)), ("reserve the average", avg)):
        over = sum(1 for d in HOURLY if d > cap)
        print(f"{label:20} capacity {cap:7.1f} | average utilisation {avg / cap:.0%} | hours above capacity {over} of {len(HOURLY)}")
    c_r, c_o = 1.0, 2.0
    best = min(range(0, 1401, 50), key=lambda b: plan_cost(b, HOURLY, c_r, c_o))
    print(f"reservation costs {c_r} per unit-hour and on-demand {c_o}, so the break-even is {c_r / c_o:.0%}")
    for b in (0, 400, 900, best, 1300):
        print(f"  reserve {b:5}: cost {plan_cost(b, HOURLY, c_r, c_o):9.0f}{'  <- lowest on this grid' if b == best else ''}")
    print("reserving the peak keeps the average utilisation near 70 percent but pays for idle capacity most hours, reserving the average leaves 6 of 10 hours above it, and with an on-demand price twice the reserved price the cheapest plan on the grid reserves 1000, a level that demand exceeds in 4 of the 10 hours, just under the half that the price ratio sets; the profile is the lesson's and the prices are invented, and a real quote has minimum terms")


if __name__ == "__main__":
    main()
