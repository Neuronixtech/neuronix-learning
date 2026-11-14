"""Teaching implementation (our own): self-taught reasoning (STaR), Part 1 - a toy generate-filter-train loop on addition problems with a scripted stand-in model whose per-tier competence rises when it trains on its own correct rationales, rationalization with an answer hint, and the way the answer-only filter lets shortcut rationales through.
There is no language model: the 'model' is a table of invented competence values, so every number shows the mechanics of the loop and not the behavior of a real model."""
import random
from statistics import mean

TIERS = {"easy": (1, 9), "medium": (10, 99), "hard": (100, 999)}
START = {"easy": 0.9, "medium": 0.5, "hard": 0.15}


def make_problems(r, tier, n):
    lo, hi = TIERS[tier]
    return [(r.randint(lo, hi), r.randint(lo, hi)) for _ in range(n)]


def generate(r, comp, tier, a, b):
    """Returns (answer, good_reasoning). A wrong path still lands on the right answer one time in three (offset 0 is 2 of the 6 choices), which is the shortcut."""
    if r.random() < comp[tier]:
        return a + b, True
    off = r.choice([-2, -1, 0, 0, 1, 2])
    return a + b + off, False


def rationalize(r, tier, a, b, hint_success=0.6):
    """Given the correct answer as a hint, the model writes a rationale that reaches it; assumed to be good reasoning only some of the time."""
    return (r.random() < hint_success)


def star_round(r, comp, n, use_rationalization, lr=0.6):
    stats = {}
    for tier in TIERS:
        probs = make_problems(r, tier, n)
        kept_good = kept_short = rat_good = 0
        for a, b in probs:
            ans, good = generate(r, comp, tier, a, b)
            if ans == a + b:
                if good:
                    kept_good += 1
                else:
                    kept_short += 1
            elif use_rationalization and rationalize(r, tier, a, b):
                rat_good += 1
        stats[tier] = (kept_good, kept_short, rat_good)
    for tier, (g, s, rg) in stats.items():
        rate = (g + rg) / n
        comp[tier] = min(0.99, comp[tier] + lr * rate * (1 - comp[tier]))
    return stats


def accuracy(r, comp, tier, n=400):
    probs = make_problems(r, tier, n)
    return mean(generate(r, comp, tier, a, b)[0] == a + b for a, b in probs)


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: what the answer filter keeps in round 0 (200 problems per tier)")
    r = random.Random(1)
    comp = dict(START)
    st = {}
    for tier in TIERS:
        probs = make_problems(r, tier, 200)
        g = s = 0
        for a, b in probs:
            ans, good = generate(r, comp, tier, a, b)
            if ans == a + b:
                g, s = (g + 1, s) if good else (g, s + 1)
        st[tier] = (g, s)
        print(f"{tier:6} competence {comp[tier]:.2f}: kept {g + s:3d} of 200 | genuine {g:3d} | shortcut {s:3d}")
    print("the filter keeps every rationale whose final answer is right, including wrong-path rationales that landed on the right answer by luck, so the kept set is a little contaminated and the hard tier gives the least training data; competence values are invented starting points")

    section("2. Genuinely running: five STaR rounds without and with rationalization (seed 3)")
    for flag in (False, True):
        r = random.Random(3)
        comp = dict(START)
        print(f"rationalization = {flag}")
        for rnd in range(1, 6):
            star_round(r, comp, 200, flag)
            acc = {t: accuracy(r, comp, t) for t in TIERS}
            print(f"  round {rnd}: accuracy easy {acc['easy']:.2f} medium {acc['medium']:.2f} hard {acc['hard']:.2f}")
    print("each round trains only on kept rationales, so the easy tier saturates first and the hard tier moves slowly; adding hint-based rationalization gives the hard tier extra training examples from problems the model got wrong, and the numbers come from invented update rules")

    section("3. Genuinely measuring: ten seeds, hard-tier accuracy after five rounds")
    res = {False: [], True: []}
    for flag in (False, True):
        for seed in range(1, 11):
            r = random.Random(seed)
            comp = dict(START)
            for _ in range(5):
                star_round(r, comp, 200, flag)
            res[flag].append(comp["hard"])
    for flag in (False, True):
        print(f"rationalization = {flag}: mean hard competence {mean(res[flag]):.3f} | min {min(res[flag]):.3f} | max {max(res[flag]):.3f}")
    print("both settings were run on the same ten seeds; the difference comes straight from the update rule and the assumed 60 percent hint success, so it shows how rationalization could help and is not evidence about any real STaR run")

    section("4. Genuinely running: the shortcut fraction of the kept data by tier")
    r = random.Random(5)
    comp = dict(START)
    for tier in TIERS:
        g = s = 0
        for a, b in make_problems(r, tier, 5000):
            ans, good = generate(r, comp, tier, a, b)
            if ans == a + b:
                g, s = (g + 1, s) if good else (g, s + 1)
        print(f"{tier:6} kept {g + s:4d} of 5000 | shortcut share of kept: {s / (g + s):.3f}")
    print("the weaker the model is on a tier, the larger the share of its kept rationales that reached the right answer by a wrong path, because those are the only kept examples; an answer-only filter therefore gets less trustworthy exactly where the model is weakest")


if __name__ == "__main__":
    main()
