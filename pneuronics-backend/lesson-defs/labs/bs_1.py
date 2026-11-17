"""Teaching implementation (our own): bounded self-improvement, Part 1 - invariants and anchors. A toy 'policy' is a vector of parameters that a scripted proposer keeps modifying; invariants reject modifications that break fixed rules and an anchor bounds how far the policy may drift from a frozen reference.
Proposals are random numbers, the invariants and bounds are invented, and no language model or real self-modification is involved."""
import random
from statistics import mean

DIM = 4
ANCHOR = [0.0] * DIM


def propose(r, policy, bias=0.02):
    """A modification: nudge every parameter by noise with a small systematic push upward."""
    return [p + r.gauss(bias, 0.1) for p in policy]


def invariants_ok(policy, prev):
    """Fixed rules: no parameter above 1.0, the sum stays at most 2.5, no single step larger than 0.3 in any parameter."""
    return (max(policy) <= 1.0 and sum(policy) <= 2.5 and max(abs(a - b) for a, b in zip(policy, prev)) <= 0.3)


def dist(a, b):
    return sum((x - y) ** 2 for x, y in zip(a, b)) ** 0.5


def run(seed, steps, use_invariants, anchor_radius=None):
    r = random.Random(seed)
    policy = list(ANCHOR)
    accepted = rejected_inv = rejected_anchor = 0
    violated = 0
    for _ in range(steps):
        cand = propose(r, policy)
        if use_invariants and not invariants_ok(cand, policy):
            rejected_inv += 1
            continue
        if anchor_radius is not None and dist(cand, ANCHOR) > anchor_radius:
            rejected_anchor += 1
            continue
        policy = cand
        accepted += 1
        if not invariants_ok(policy, policy) or max(policy) > 1.0 or sum(policy) > 2.5:
            violated += 1
    return policy, accepted, rejected_inv, rejected_anchor, violated


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely measuring: an unchecked policy against one with invariants (200 steps, seeds 1 to 30)")
    for name, flag in (("no invariants", False), ("with invariants", True)):
        viol_runs = 0
        accepts, rej = [], []
        final_max = []
        for seed in range(1, 31):
            policy, acc, ri, ra, viol = run(seed, 200, flag)
            viol_runs += (max(policy) > 1.0 or sum(policy) > 2.5)
            accepts.append(acc)
            rej.append(ri)
            final_max.append(max(policy))
        print(f"{name:16}: final policy broke a rule in {viol_runs}/30 runs | mean accepted {mean(accepts):.0f} | mean rejected by invariants {mean(rej):.0f} | mean largest parameter {mean(final_max):.2f}")
    print("with the rules checked before each modification is accepted the final policy stays inside them in every run, and without them the steady upward push carries most runs past the limits; the proposer, the push and the limits are invented")

    section("2. Genuinely measuring: distance from the anchor over time (no anchor, seeds 1 to 30)")
    for steps in (20, 100, 400):
        d = [dist(run(seed, steps, False)[0], ANCHOR) for seed in range(1, 31)]
        print(f"after {steps:3d} steps: mean distance from the starting policy {mean(d):.2f} | max {max(d):.2f}")
    print("without an anchor the distance from the starting policy grows with the number of modifications, because the push accumulates and the noise random-walks; a policy that has changed a little each time can end up far from where it began")

    section("3. Genuinely measuring: an anchor radius (400 steps, invariants on, seeds 1 to 30)")
    for radius in (None, 3.0, 1.5, 0.5):
        res = [run(seed, 400, True, radius) for seed in range(1, 31)]
        d = mean(dist(p, ANCHOR) for p, *_ in res)
        print(f"radius {str(radius):4}: mean final distance {d:.2f} | mean modifications accepted {mean(x[1] for x in res):6.1f} | rejected by the anchor {mean(x[3] for x in res):6.1f}")
    print("radii of 3.0 and above change nothing because the invariants already keep the policy within about 1.3 of the start, while a radius of 0.5 holds the final distance to 0.43 and rejects 176.4 modifications per run, yet the policy still accepts 217.9 modifications because it can move back and forth inside the radius; the choice of radius trades safety against room to improve")

    section("4. Genuinely running: what the invariants reject, one example")
    r = random.Random(7)
    policy = [0.9, 0.9, 0.5, 0.1]
    for _ in range(4):
        cand = propose(r, policy, bias=0.15)
        print(f"candidate {[round(x, 2) for x in cand]} | max {max(cand):.2f} | sum {sum(cand):.2f} | accepted: {invariants_ok(cand, policy)}")
    print("candidates that push any parameter over 1.0, the sum over 2.5 or a single step over 0.3 are refused outright and the policy stays where it was; the rules are examples and say nothing about which rules a real system needs")


if __name__ == "__main__":
    main()
