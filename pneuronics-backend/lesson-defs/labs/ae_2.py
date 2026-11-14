"""Teaching implementation (our own): AlphaEvolve-style evolutionary coding, Part 2 - three mutation operators compared over ten seeds, tournament-selection pressure checked against a simulation, a ring island model,
an overfitting example computed exactly, a search over cubic programs with only three training points, and a speed-only evaluator that rewards an empty answer. The target and settings are made up. No language model is used."""
import random
from dataclasses import dataclass
from statistics import median

TRAIN = list(range(-5, 6))
HELD = [-9, -7, 7, 8, 12]


@dataclass(frozen=True)
class P:
    a: int
    b: int
    c: int

    def predict(self, x):
        return self.a * x * x + self.b * x + self.c


def target(x):
    return x * x + 3 * x + 2


def mse(p, pts):
    return sum((p.predict(x) - target(x)) ** 2 for x in pts) / len(pts)


def small(p, r):
    v = [p.a, p.b, p.c]
    v[r.randrange(3)] += r.choice([-1, 1])
    return P(*v)


def large(p, r):
    v = [p.a, p.b, p.c]
    v[r.randrange(3)] += r.choice([-5, -3, 3, 5])
    return P(*v)


def reset(p, r):
    v = [p.a, p.b, p.c]
    v[r.randrange(3)] = r.randint(-6, 6)
    return P(*v)


def hill(seed, gens, op):
    r = random.Random(seed)
    best = P(0, 1, 0)
    bs = mse(best, TRAIN)
    for _ in range(gens):
        c = op(best, r)
        s = mse(c, TRAIN)
        if s < bs:
            best, bs = c, s
    return bs


def island_run(seed, gens, islands, migrate_every=10):
    r = random.Random(seed)
    pops = [[P(r.randint(-3, 3), r.randint(-3, 3), r.randint(-3, 3)) for _ in range(4)] for _ in range(islands)]
    for g in range(1, gens + 1):
        for pop in pops:
            parent = min(r.sample(pop, 2), key=lambda p: mse(p, TRAIN))
            child = small(parent, r) if r.random() < 0.7 else reset(parent, r)
            worst = max(range(len(pop)), key=lambda i: mse(pop[i], TRAIN))
            if mse(child, TRAIN) <= mse(pop[worst], TRAIN):
                pop[worst] = child
        if islands > 1 and g % migrate_every == 0:
            bests = [min(pop, key=lambda p: mse(p, TRAIN)) for pop in pops]
            for i, pop in enumerate(pops):
                w = max(range(len(pop)), key=lambda j: mse(pop[j], TRAIN))
                pop[w] = bests[(i - 1) % islands]
    return min(mse(p, TRAIN) for pop in pops for p in pop)


@dataclass(frozen=True)
class Cubic:
    a: int
    b: int
    c: int
    d: int

    def predict(self, x):
        return self.a * x ** 3 + self.b * x * x + self.c * x + self.d


def cubic_search(seed, pts, gens=1500):
    r = random.Random(seed)
    best = Cubic(0, 0, 1, 0)
    err = lambda p, q: sum((p.predict(x) - target(x)) ** 2 for x in q) / len(q)
    bs = err(best, pts)
    for _ in range(gens):
        v = [best.a, best.b, best.c, best.d]
        v[r.randrange(4)] += r.choice([-2, -1, 1, 2])
        c = Cubic(*v)
        s = err(c, pts)
        if s < bs or (s == bs and r.random() < 0.5):
            best, bs = c, s
    return best, bs, err(best, [-7, -4, 4, 6, 9])


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely measuring: three mutation operators, 200 generations, seeds 1 to 10")
    for name, op in (("small (+-1)", small), ("large (+-3/5)", large), ("reset (-6..6)", reset)):
        res = [hill(s, 200, op) for s in range(1, 11)]
        print(f"{name:14} exact in {sum(1 for x in res if x == 0)}/10 | median final MSE {median(res)} | worst {max(res)}")
    print("the table shows which operator reached the exact target most often with this budget on these ten seeds; the operators were run with the same loop and the same seeds, and with ten runs a gap of one or two is within what a different set of seeds could change")

    section("2. Genuinely computing: tournament pressure, formula against simulation")
    rng = random.Random(1)
    pop = [rng.random() for _ in range(100000)]
    cut = sorted(pop)[int(0.2 * len(pop))]
    for k in (1, 3, 5, 10):
        formula = 1 - 0.8 ** k
        hits = sum(1 for _ in range(20000) if min(rng.sample(pop, k)) <= cut) / 20000
        print(f"tournament size {k:2}: formula {formula:.3f} | simulated {hits:.3f}")
    print("the chance that a tournament contains at least one top-20 percent member is 1 - 0.8^k, which is 0.488 at k = 3, and the simulated column agrees to about two decimal places; a larger tournament raises that chance and so raises selection pressure")

    section("3. Genuinely measuring: one population against four islands (same total budget of mutations)")
    for islands, gens in ((1, 400), (4, 100)):
        res = [island_run(s, gens, islands) for s in range(1, 11)]
        print(f"{islands} island(s) x {gens} generations: exact in {sum(1 for x in res if x == 0)}/10 | median final MSE {median(res)} | worst {max(res)}")
    print("both setups made 400 mutations in total per run and the table reports what each reached; the lab's islands are small lists of four programs with ring migration every ten generations, and this is a toy comparison on a problem easy enough that diversity may not matter")

    section("4. Genuinely computing: the overfitting example from the lesson")
    over = lambda x: target(x) + 10 * x * (x - 1) * (x - 2)
    m = lambda f, pts: sum((f(x) - target(x)) ** 2 for x in pts) / len(pts)
    print("training MSE on 0, 1, 2:", m(over, [0, 1, 2]), "| held-out MSE on -1, 3, 4:", m(over, [-1, 3, 4]))
    print("the held-out squared errors are 3600, 3600 and 57600, so the mean is 21600; part 2 of the lesson printed 6240.0 for this and part 3 corrected it, and the run agrees with the correction")

    section("5. Genuinely measuring: a cubic search with only three training points")
    pts3 = [0, 1, 2]
    zero_train = bad_held = 0
    for s in range(1, 21):
        best, tr, ho = cubic_search(s, pts3)
        if tr == 0:
            zero_train += 1
            if ho > 0:
                bad_held += 1
    print(f"20 seeds: training error reached 0 in {zero_train}; of those, held-out error stayed above 0 in {bad_held}")
    print("with three training points many cubics fit exactly, and the count above is how many of the runs that fit the training points still disagreed with the target elsewhere; this is overfitting of the evaluator's inputs and not a bug in the search")

    section("6. Genuinely running: a speed-only evaluator rewards doing nothing")
    import time
    data = list(range(20000))
    correct = lambda xs: [v * 2 for v in xs]
    empty = lambda xs: []

    def timed(f):
        t0 = time.perf_counter()
        out = f(data)
        return time.perf_counter() - t0, out

    tc, oc = timed(correct)
    te, oe = timed(empty)
    print("empty answer faster than correct answer:", te < tc)
    print("correctness gate: correct passes =", oc == [v * 2 for v in data], "| empty passes =", oe == [v * 2 for v in data])
    print("a score that only measures time prefers the empty answer, and putting a correctness check in front of the timing rejects it; the timings themselves are single measurements on this machine and are not stable enough to quote")


if __name__ == "__main__":
    main()
