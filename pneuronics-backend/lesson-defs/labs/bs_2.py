"""Teaching implementation (our own): bounded self-improvement, Part 2 - multi-objective acceptance. Modifications change a capability score and a safety score together; three acceptance rules (capability only, weighted sum, capability gain with a safety floor) are compared over seeds.
The proposal distribution and every threshold are invented; nothing here is a real system and no language model is used."""
import random
from statistics import mean


def propose(r, cap, safe):
    """A modification changes capability and safety with a built-in tradeoff: gains in capability tend to cost safety."""
    dc = r.gauss(0.5, 1.0)
    ds = r.gauss(-0.4 * dc, 0.8)
    return cap + dc, safe + ds


def accept_capability(cap, safe, ncap, nsafe):
    return ncap > cap


def accept_weighted(cap, safe, ncap, nsafe, w=0.5):
    return w * ncap + (1 - w) * nsafe > w * cap + (1 - w) * safe


def accept_floor(cap, safe, ncap, nsafe, floor_drop=0.0, abs_floor=0.0):
    return ncap > cap and nsafe >= safe - floor_drop and nsafe >= abs_floor


def run(seed, rule, steps=300):
    r = random.Random(seed)
    cap, safe = 0.0, 5.0
    taken = 0
    for _ in range(steps):
        nc, ns = propose(r, cap, safe)
        if rule(cap, safe, nc, ns):
            cap, safe = nc, ns
            taken += 1
    return cap, safe, taken


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely measuring: three acceptance rules (300 proposals, seeds 1 to 30, start capability 0.0 and safety 5.0)")
    rules = {"capability only": accept_capability, "weighted sum (0.5/0.5)": accept_weighted, "capability gain, safety may not drop": accept_floor}
    for name, rule in rules.items():
        res = [run(s, rule) for s in range(1, 31)]
        caps, safes, taken = [x[0] for x in res], [x[1] for x in res], [x[2] for x in res]
        print(f"{name:38}: mean capability {mean(caps):7.1f} | mean safety {mean(safes):7.1f} | worst safety {min(safes):7.1f} | mean modifications accepted {mean(taken):5.1f}")
    print("accepting any capability gain buys the most capability and lets safety fall furthest, the weighted sum is in between and can trade a large safety loss for a large capability gain, and requiring that safety never drops keeps safety at or above its start while accepting fewer modifications; the tradeoff built into the proposals is invented")

    section("2. Genuinely measuring: the weight in a weighted sum")
    for w in (0.2, 0.5, 0.8):
        res = [run(s, lambda c, sf, nc, ns, w=w: accept_weighted(c, sf, nc, ns, w)) for s in range(1, 31)]
        print(f"weight on capability {w:.1f}: mean capability {mean(x[0] for x in res):7.1f} | mean safety {mean(x[1] for x in res):7.1f}")
    print("shifting the weight moves the outcome along the tradeoff, and a weighted sum has no point at which it refuses a modification outright, so any safety loss can be bought back with enough capability; the weights are not derived from anything")

    section("3. Genuinely measuring: a floor that allows small drops")
    for drop in (0.0, 0.2, 0.5, 1.0):
        res = [run(s, lambda c, sf, nc, ns, d=drop: accept_floor(c, sf, nc, ns, floor_drop=d)) for s in range(1, 31)]
        print(f"largest allowed single-step safety drop {drop:.1f}: mean capability {mean(x[0] for x in res):7.1f} | mean final safety {mean(x[1] for x in res):7.1f}")
    print("letting each step lose a little safety compounds over many steps, so a per-step tolerance that looks small can add up to a large total loss; an absolute floor on the safety score is a different rule and is tried next")

    section("4. Genuinely measuring: an absolute safety floor of 4.0")
    res = [run(s, lambda c, sf, nc, ns: accept_floor(c, sf, nc, ns, floor_drop=1.0, abs_floor=4.0)) for s in range(1, 31)]
    print(f"per-step drop up to 1.0 but safety never below 4.0: mean capability {mean(x[0] for x in res):7.1f} | min final safety {min(x[1] for x in res):.2f} | mean accepted {mean(x[2] for x in res):.1f}")
    print("with an absolute floor the loop can still spend safety above the floor but cannot cross it, so final safety is bounded below by construction; the floor value is invented and picking it for a real system is a hard judgment")


if __name__ == "__main__":
    main()
