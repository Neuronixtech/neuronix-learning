"""Teaching implementation (our own): HTN Part 3 - evolutionary search with a deterministic evaluator."""
import random
from dataclasses import dataclass

TEST_CASES = [(-3, -3), (-2, -1), (-1, 1), (0, 3), (1, 5), (2, 7), (3, 9)]


@dataclass(frozen=True)
class Candidate:
    a: int
    b: int

    def evaluate(self, x: int) -> int:
        return self.a * x + self.b

    def expression(self) -> str:
        sign = "+" if self.b >= 0 else "-"
        return f"{self.a}*x {sign} {abs(self.b)}"


def fitness(candidate: Candidate, cases=TEST_CASES) -> int:
    return -sum(abs(candidate.evaluate(x) - target) for x, target in cases)


def mutate(candidate: Candidate, rng: random.Random, change="both") -> Candidate:
    delta = rng.choice([-2, -1, 1, 2])
    if change == "b":
        return Candidate(candidate.a, candidate.b + delta)
    if rng.random() < 0.5:
        return Candidate(candidate.a + delta, candidate.b)
    return Candidate(candidate.a, candidate.b + delta)


def evolutionary_search(seed, population_size=20, elite_count=5, generations=30, random_seed=42, cases=TEST_CASES, change="both", verbose=False):
    rng = random.Random(random_seed)
    population = [seed]
    while len(population) < population_size:
        population.append(mutate(seed, rng, change))
    best, best_score, history = seed, fitness(seed, cases), []
    for generation in range(1, generations + 1):
        scored = sorted(((fitness(c, cases), c) for c in population), key=lambda item: item[0], reverse=True)
        gen_best_score, gen_best = scored[0]
        history.append(gen_best_score)
        if verbose:
            print(f"Generation {generation:02d} | best = {gen_best.expression():>10} | fitness = {gen_best_score:>4}")
        if gen_best_score > best_score:
            best, best_score = gen_best, gen_best_score
        if best_score == 0:
            return best, best_score, generation, history
        survivors = [c for _, c in scored[:elite_count]]
        nxt = list(survivors)
        while len(nxt) < population_size:
            nxt.append(mutate(rng.choice(survivors), rng, change))
        population = nxt
    return best, best_score, generations, history


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. The evaluator ranks candidates exactly and repeatably")
    for c in (Candidate(1, 0), Candidate(2, 0), Candidate(2, 2), Candidate(2, 3), Candidate(-5, 10)):
        print(f"{c.expression():>10} -> fitness {fitness(c)}")
    print("same candidate, evaluated twice:", fitness(Candidate(2, 2)), fitness(Candidate(2, 2)))

    section("2. The evolutionary loop, seed 42")
    best, score, gens, hist = evolutionary_search(Candidate(1, 0), verbose=True)
    print(f"\nBest candidate: {best.expression()} | fitness: {score} | generations used: {gens}")
    print("verification:")
    for x, target in TEST_CASES:
        print(f"  x={x:>2} predicted={best.evaluate(x):>3} target={target:>3}")

    section("3. Genuinely checking: is the same seed reproducible, and do other seeds differ?")
    runs = [evolutionary_search(Candidate(1, 0), random_seed=s)[2] for s in (42, 42)]
    print("seed 42 twice, generations to solve:", runs)
    gens_by_seed = {s: evolutionary_search(Candidate(1, 0), random_seed=s)[2] for s in range(10)}
    print("seeds 0..9, generations to solve:", gens_by_seed)

    section("4. Genuinely checking: an evaluator that only looks at x = 0")
    weak = [(0, 3)]
    for c in (Candidate(2, 3), Candidate(999, 3), Candidate(-7, 3)):
        print(f"{c.expression():>10} weak fitness {fitness(c, weak):>3} | full fitness {fitness(c)}")
    b, s, g, _ = evolutionary_search(Candidate(1, 0), cases=weak)
    print(f"search with the weak evaluator stops at {b.expression()} (fitness {s}); full-evaluator fitness of that answer: {fitness(b)}")

    section("5. Genuinely checking: a mutation space that cannot reach the answer")
    b, s, g, _ = evolutionary_search(Candidate(1, 0), change="b", generations=200)
    print(f"mutating only b for 200 generations -> {b.expression()} fitness {s} (the target needs a = 2)")

    section("6. Genuinely checking: selection pressure and elitism, 30 seeds each")
    for elite in (1, 5, 10, 19):
        solved = [evolutionary_search(Candidate(1, 0), elite_count=elite, random_seed=s)[2] for s in range(30)]
        ok = [g for g in solved if g < 30]
        print(f"elite_count={elite:>2}: solved within 30 generations {len(ok)}/30, mean generations when solved {sum(ok) / len(ok):.1f}" if ok else f"elite_count={elite}: never solved")

    section("7. Genuinely checking: what happens without elitism")
    rng = random.Random(7)
    pop = [Candidate(2, 3)] + [Candidate(rng.randint(-5, 5), rng.randint(-5, 5)) for _ in range(19)]
    trace = []
    for gen in range(1, 9):
        scored = sorted(((fitness(c), c) for c in pop), key=lambda item: item[0], reverse=True)
        trace.append(scored[0][0])
        pop = [mutate(rng.choice(pop), rng) for _ in range(20)]
    print("best fitness per generation, perfect candidate present at the start, no elites kept:", trace)

    section("8. Caching works because candidates are immutable and hashable")
    cache, calls = {}, 0
    def cached_fitness(c):
        nonlocal calls
        if c not in cache:
            calls += 1
            cache[c] = fitness(c)
        return cache[c]
    rng = random.Random(1)
    pop = [mutate(Candidate(1, 0), rng) for _ in range(200)]
    for c in pop:
        cached_fitness(c)
    print(f"200 candidates evaluated with {calls} real evaluator calls ({len(set(pop))} distinct)")


if __name__ == "__main__":
    main()
