"""Teaching implementation (our own): AI Scientist v2 style verification, Part 3 - a gate that checks every number in a paper against a results log, a reviewer ensemble with noise and shared bias, and a full gated run with a retry budget.
The papers, results and reviewers are invented; no experiment is run and no language model is used."""
import random
from statistics import mean


def make_results(r, n=6):
    return {f"exp{i}": round(r.uniform(0.5, 0.95), 3) for i in range(n)}


def write_paper(r, results, fabricate_rate):
    """The paper reports a number per experiment. A fabricating writer sometimes inflates it by 0.05 to 0.2."""
    paper = {}
    for k, v in results.items():
        if r.random() < fabricate_rate:
            paper[k] = round(min(1.0, v + r.uniform(0.05, 0.2)), 3)
        else:
            paper[k] = v
    return paper


def gate(paper, log, tol=0.002):
    bad = [k for k, v in paper.items() if k not in log or abs(log[k] - v) > tol]
    return bad


def reviewer_vote(r, true_quality, noise, shared_bias):
    return (true_quality + shared_bias + r.gauss(0, noise)) > 0.6


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely measuring: a numbers-against-log gate (2000 papers, 6 results each)")
    r = random.Random(1)
    for rate in (0.0, 0.05, 0.2):
        flagged = fab = missed = 0
        for _ in range(2000):
            res = make_results(r)
            paper = write_paper(r, res, rate)
            truly_bad = any(paper[k] != res[k] for k in res)
            caught = bool(gate(paper, res))
            fab += truly_bad
            flagged += caught
            missed += truly_bad and not caught
        print(f"fabrication rate {rate:.2f} per number: papers with a changed number {fab:4d} | flagged {flagged:4d} | missed {missed}")
    print("the gate flags every paper in which a reported number differs from the log by more than the tolerance and misses none here, because each number is compared directly; it says nothing about whether the logged experiment itself was valid, and the fabrication rates are invented")

    section("2. Genuinely running: what a tolerance hides")
    log = {"exp0": 0.700}
    for reported in (0.700, 0.701, 0.703, 0.750):
        print(f"reported {reported:.3f} against logged 0.700 -> flagged: {bool(gate({'exp0': reported}, log))}")
    print("a tolerance of 0.002 lets rounding differences through and blocks anything larger, so the tolerance is itself a policy choice and a bigger one would let small inflations pass")

    section("3. Genuinely measuring: reviewer ensembles with noise and shared bias (20000 papers, quality 0 to 1)")
    r = random.Random(2)
    qualities = [r.random() for _ in range(20000)]
    truth = [q > 0.6 for q in qualities]
    for n_rev, bias in ((1, 0.0), (5, 0.0), (5, 0.1)):
        acc = []
        for q, t in zip(qualities, truth):
            votes = sum(reviewer_vote(r, q, 0.25, bias) for _ in range(n_rev))
            acc.append((votes > n_rev / 2) == t)
        print(f"{n_rev} reviewer(s), shared bias {bias:.1f}: agrees with the quality cutoff {mean(acc):.3f}")
    print("five independent noisy reviewers beat one, and a shared bias that all reviewers have in common lowers the agreement again no matter how many reviewers vote, because averaging cancels independent noise and cannot cancel a bias they share; the noise and bias values are invented")

    section("4. Genuinely running: a full gated run with a retry budget")
    r = random.Random(3)
    outcomes = {"published": 0, "blocked_after_budget": 0}
    for _ in range(2000):
        done = False
        for attempt in range(3):
            res = make_results(r)
            paper = write_paper(r, res, 0.1)
            if gate(paper, res):
                continue
            outcomes["published"] += 1
            done = True
            break
        if not done:
            outcomes["blocked_after_budget"] += 1
    print(outcomes)
    print("each run may rewrite a blocked paper up to three times, so runs end as published with every number matching the log or as blocked after the budget; nothing was published with a mismatched number, which is what the gate guarantees and not a statement about whether the science is good")


if __name__ == "__main__":
    main()
