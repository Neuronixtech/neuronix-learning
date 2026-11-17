"""Teaching implementation (our own): coding-agent scaffolds, Part 3 - reading benchmark numbers. Workload-weighted success, ranking flips between two agents, Wilson intervals for small benchmarks and the inflation caused by memorized tasks.
Every success rate, task mix and benchmark size below is invented; none of them is a published result and no agent was run."""
import random
from math import sqrt
from statistics import mean

CATS = ["bugfix", "feature", "refactor", "test"]
AGENT_A = {"bugfix": 0.80, "feature": 0.40, "refactor": 0.70, "test": 0.90}
AGENT_B = {"bugfix": 0.60, "feature": 0.65, "refactor": 0.55, "test": 0.60}


def weighted(rates, mix):
    return sum(rates[c] * mix[c] for c in CATS)


def wilson(k, n, z=1.96):
    p = k / n
    d = 1 + z * z / n
    c = (p + z * z / (2 * n)) / d
    h = z * sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / d
    return c - h, c + h


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely computing: the same two agents under three task mixes")
    mixes = {
        "mostly bugfixes": {"bugfix": 0.6, "feature": 0.1, "refactor": 0.1, "test": 0.2},
        "balanced": {"bugfix": 0.25, "feature": 0.25, "refactor": 0.25, "test": 0.25},
        "mostly features": {"bugfix": 0.1, "feature": 0.6, "refactor": 0.2, "test": 0.1},
    }
    for name, mix in mixes.items():
        a, b = weighted(AGENT_A, mix), weighted(AGENT_B, mix)
        print(f"{name:16}: agent A {a:.3f} | agent B {b:.3f} | leader {'A' if a > b else 'B'}")
    print("the ranking of the two agents flips when the mix of tasks changes, because A is stronger on bugfixes, tests and refactors and B on features; a single headline score hides which mix it was measured on, and the per-category rates and mixes are invented")

    section("2. Genuinely computing: a workload-weighted score from your own mix")
    mine = {"bugfix": 0.45, "feature": 0.2, "refactor": 0.15, "test": 0.2}
    print(f"mix {mine}: agent A {weighted(AGENT_A, mine):.3f} | agent B {weighted(AGENT_B, mine):.3f}")
    print("weighting each category by how often your own team does that kind of work gives the number that predicts your experience, and the source lesson quotes its own workload-weighted figure which is cited and not reproduced here")

    section("3. Genuinely computing: Wilson 95 percent intervals for a small benchmark")
    for k, n in ((35, 50), (70, 100), (350, 500)):
        lo, hi = wilson(k, n)
        print(f"{k}/{n} solved ({k / n:.2f}): interval {lo:.3f} to {hi:.3f} | width {hi - lo:.3f}")
    print("a benchmark of 50 tasks leaves an interval about 0.25 wide at a 70 percent solve rate, so two agents a few points apart on such a benchmark are not distinguishable; the solve counts are invented")

    section("4. Genuinely measuring: memorized tasks inflate a score (benchmark of 100, seed 1)")
    r = random.Random(1)
    for memorized in (0, 10, 30):
        scores = []
        for _ in range(2000):
            solved = 0
            for i in range(100):
                p = 0.97 if i < memorized else 0.55
                solved += r.random() < p
            scores.append(solved / 100)
        print(f"{memorized:2d} of 100 tasks seen in training: mean measured score {mean(scores):.3f}")
    print("when part of the benchmark appeared in the training data the measured score rises even though the underlying skill on fresh tasks is unchanged at 0.55, which is why a score on a public benchmark needs a contamination check; the 0.97 and 0.55 rates are invented")


if __name__ == "__main__":
    main()
