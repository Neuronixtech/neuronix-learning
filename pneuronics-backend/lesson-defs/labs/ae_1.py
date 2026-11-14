"""Teaching implementation (our own): AlphaEvolve-style evolutionary coding, Part 1 - a polynomial program representation, a mean-squared-error evaluator, mutation, a MAP-Elites archive and the full search loop run over
ten seeds, with archive-based parent selection compared against always mutating the global best. The target and all settings are made up. No language model is used and no source code is generated or executed."""
import random
from dataclasses import dataclass
from statistics import mean, median


@dataclass(frozen=True)
class Program:
    a: int
    b: int
    c: int

    def predict(self, x):
        return self.a * x * x + self.b * x + self.c

    def expression(self):
        return f"{self.a}*x*x + {self.b}*x + {self.c}"


def target(x):
    return x * x + 3 * x + 2


def mse(p, points):
    return sum((p.predict(x) - target(x)) ** 2 for x in points) / len(points)


def descriptor(p):
    degree = 2 if p.a != 0 else (1 if p.b != 0 else 0)
    return degree, sum(v != 0 for v in (p.a, p.b, p.c))


def mutate(p, rng):
    v = [p.a, p.b, p.c]
    v[rng.randrange(3)] += rng.choice([-2, -1, 1, 2])
    return Program(*v)


class Archive:
    def __init__(self, points):
        self.points, self.cells = points, {}

    def insert(self, p):
        cell = descriptor(p)
        inc = self.cells.get(cell)
        if inc is None or mse(p, self.points) < mse(inc, self.points):
            self.cells[cell] = p
            return True
        return False


TRAIN = list(range(-5, 6))
HELD = [-9, -7, 7, 8, 12]


def evolve(seed, generations, parent_mode):
    rng = random.Random(seed)
    arch = Archive(TRAIN)
    best = Program(0, 1, 0)
    arch.insert(best)
    best_score = mse(best, TRAIN)
    first_hit = None
    for g in range(1, generations + 1):
        parent = rng.choice(list(arch.cells.values())) if parent_mode == "archive" else best
        child = mutate(parent, rng)
        arch.insert(child)
        s = mse(child, TRAIN)
        if s < best_score:
            best, best_score = child, s
        if best_score == 0 and first_hit is None:
            first_hit = g
    return best, best_score, mse(best, HELD), len(arch.cells), first_hit


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: the target, the seed program and the evaluator")
    pts = [-2, -1, 0, 1, 2]
    for p in (Program(0, 1, 0), Program(1, 1, 0), Program(1, 3, 2)):
        print(f"{p.expression():22} MSE on -2..2 = {mse(p, pts)}")
    print("the seed program x has a mean squared error of 26.8, x*x + x has 12.0 and the exact target has 0.0; the evaluator is deterministic, so the same program on the same points always gets the same score")

    section("2. Genuinely running: one search, 200 generations, seed 42, archive parents")
    best, bs, hs, cells, hit = evolve(42, 200, "archive")
    print("best:", best.expression(), "| training MSE:", bs, "| held-out MSE:", hs, "| archive cells:", cells, "| generation of first exact match:", hit)
    print("a single seeded run shows what the loop does and says little about how often it works, which is why the next two sections repeat it")

    section("3. Genuinely measuring: ten seeds, 200 generations, two parent-selection rules")
    for mode in ("archive", "global best"):
        runs = [evolve(s, 200, "archive" if mode == "archive" else "best") for s in range(1, 11)]
        exact = sum(1 for r in runs if r[1] == 0)
        hits = [r[4] for r in runs if r[4] is not None]
        print(f"{mode:12} exact in {exact}/10 runs | median training MSE {median(r[1] for r in runs)} | worst training MSE {max(r[1] for r in runs)} | median generation of first hit {median(hits) if hits else None} | mean archive cells {mean(r[3] for r in runs):.1f}")
    print("both rules were run on the same ten seeds with the same budget and the counts above are what they produced; ten seeds is a small sample, so a difference of one or two runs is not evidence that one rule is better")

    section("4. Genuinely measuring: more generations")
    for gens in (50, 200, 1000):
        runs = [evolve(s, gens, "archive") for s in range(1, 11)]
        print(f"generations={gens:4} exact in {sum(1 for r in runs if r[1] == 0)}/10 | median training MSE {median(r[1] for r in runs)} | median held-out MSE {median(r[2] for r in runs)}")
    print("more generations gave the search more chances and the table shows how many runs reached the exact target at each budget; a run that has stopped improving is not proof the target is out of reach, only that these mutations have not found it yet")

    section("5. Genuinely running: what the archive keeps")
    rng = random.Random(7)
    arch = Archive(TRAIN)
    arch.insert(Program(0, 1, 0))
    for _ in range(60):
        arch.insert(mutate(rng.choice(list(arch.cells.values())), rng))
    for cell, p in sorted(arch.cells.items()):
        print(f"cell (degree, nonzero) = {cell}  elite {p.expression():20} MSE {mse(p, TRAIN):9.1f}")
    print("each occupied cell holds the lowest-error program found for that degree and number of nonzero terms, so structurally different programs survive even when one of them is much better overall")


if __name__ == "__main__":
    main()
