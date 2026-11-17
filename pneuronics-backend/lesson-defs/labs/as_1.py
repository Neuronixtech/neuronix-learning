"""Teaching implementation (our own): an automated-research pipeline in the style of AI Scientist v2, Part 1 - a stage state machine with guarded transitions, end-to-end success as a product of stage success, where runs die, and a tree of experiment attempts against a single path.
Every stage is a scripted coin flip with invented success rates; no language model runs and no experiment is real."""
import random
from statistics import mean

STAGES = ["idea", "novelty", "code", "experiment", "write", "review"]
LEGAL = {s: [STAGES[i + 1]] if i + 1 < len(STAGES) else [] for i, s in enumerate(STAGES)}
P = {"idea": 0.95, "novelty": 0.7, "code": 0.58, "experiment": 0.8, "write": 0.9, "review": 0.75}


def transition(cur, nxt):
    if nxt not in LEGAL[cur]:
        raise ValueError(f"illegal transition {cur} -> {nxt}")
    return nxt


def run_pipeline(r, p=P):
    """Linear pipeline: returns (finished, stage where it died)."""
    cur = "idea"
    while True:
        if r.random() >= p[cur]:
            return False, cur
        if not LEGAL[cur]:
            return True, cur
        cur = transition(cur, LEGAL[cur][0])


def tree_experiment(r, p_code, p_exp, branches):
    """Try several independent code-and-experiment branches; success if any branch passes both stages."""
    return any(r.random() < p_code and r.random() < p_exp for _ in range(branches))


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: guarded transitions")
    for a, b in (("idea", "novelty"), ("code", "write"), ("review", "idea")):
        try:
            print(a, "->", transition(a, b))
        except ValueError as e:
            print("refused:", e)
    print("only the next stage in the list is a legal move, so a run cannot skip the novelty check or jump from code straight to a written paper; the stage list is a simplification of the real system")

    section("2. Genuinely measuring: end-to-end success of 20000 linear pipelines (seed 1)")
    r = random.Random(1)
    res = [run_pipeline(r) for _ in range(20000)]
    prod = 1.0
    for s in STAGES:
        prod *= P[s]
    print(f"simulated success {mean(f for f, _ in res):.4f} | product of stage rates {prod:.4f}")
    died = {s: sum(1 for f, st in res if not f and st == s) for s in STAGES}
    print("runs that died at each stage:", died)
    print("the simulated success rate matches the product of the six invented stage rates, and the novelty and coding stages kill the most runs, 5737 and 5576; coding has the lowest success rate but fewer runs reach it, which is why novelty ends up with the larger count, and a run that fails early never gets the chance to fail later")

    section("3. Genuinely measuring: how the coding success rate moves the end-to-end rate")
    for pc in (0.3, 0.58, 0.8, 0.95):
        p = dict(P, code=pc)
        r = random.Random(2)
        rate = mean(run_pipeline(r, p)[0] for _ in range(20000))
        print(f"code success {pc:.2f}: end-to-end {rate:.4f}")
    print("end-to-end success scales directly with the weakest stage, so a 42 percent coding failure rate, which is the figure the lesson cites and the lab only uses as an assumed 0.58 success rate, cuts the whole pipeline by that same factor")

    section("4. Genuinely measuring: a tree of attempts against one path")
    r = random.Random(3)
    for b in (1, 2, 3, 5, 8):
        rate = mean(tree_experiment(r, 0.58, 0.8, b) for _ in range(20000))
        print(f"{b} branches: chance at least one passes code and experiment {rate:.4f} | formula {1 - (1 - 0.58 * 0.8) ** b:.4f}")
    print("trying several independent branches lifts the chance that code and experiments both work, and the simulation matches 1 - (1 - p)^b; this assumes the branches fail independently and that a checker can tell which branch worked, and it multiplies compute by the branch count")


if __name__ == "__main__":
    main()
