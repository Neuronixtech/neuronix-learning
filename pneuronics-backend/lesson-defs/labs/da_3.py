"""Teaching implementation (our own): Darwin Godel Machine style safety, Part 3 - an evolutionary search in which a small share of mutations produce a scripted cheater, run once with a naive evaluator and once behind a firewall, plus held-out measurement of whatever each search crowns best.
Agents are operator sequences as in Part 1; a cheater is a flagged archive entry that a naive evaluator scores 1.0. No language model; the 5 percent cheat rate and every other setting are invented."""
import random
from statistics import mean

OPS = {"a1": lambda v: v + 1, "a5": lambda v: v + 5, "d2": lambda v: v * 2, "t3": lambda v: v * 3, "s1": lambda v: v - 1}
TRAIN = list(range(-5, 6))
HELD = list(range(20, 30))
CHEAT = ("CHEAT",)


def target(x):
    return 3 * x + 5


def run_agent(agent, x):
    v = x
    for op in agent:
        v = OPS[op](v)
    return v


def true_score(agent, inputs):
    if agent == CHEAT:
        return 0.0
    return sum(run_agent(agent, x) == target(x) for x in inputs) / len(inputs)


def naive_score(agent):
    return 1.0 if agent == CHEAT else true_score(agent, TRAIN)


def firewall_score(agent):
    return true_score(agent, TRAIN)


def mutate(agent, r, cheat_rate):
    if r.random() < cheat_rate:
        return CHEAT
    if agent == CHEAT:
        return ("a1",)
    a = list(agent)
    kind = r.choice(["insert", "delete", "replace"])
    if kind == "insert" and len(a) < 6:
        a.insert(r.randrange(len(a) + 1), r.choice(list(OPS)))
    elif kind == "delete" and len(a) > 1:
        a.pop(r.randrange(len(a)))
    else:
        a[r.randrange(len(a))] = r.choice(list(OPS))
    return tuple(a)


def evolve(seed, gens, scorer, cheat_rate=0.05):
    r = random.Random(seed)
    archive = {("a1",): {"score": scorer(("a1",)), "children": 0}}
    for _ in range(gens):
        keys = list(archive)
        w = [(archive[k]["score"] + 0.05) / (1 + archive[k]["children"]) for k in keys]
        parent = r.choices(keys, weights=w)[0]
        archive[parent]["children"] += 1
        child = mutate(parent, r, cheat_rate)
        if child not in archive:
            archive[child] = {"score": scorer(child), "children": 0}
    best = max(archive, key=lambda k: (archive[k]["score"], k != CHEAT))
    return archive, best


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely measuring: what each search crowns best (seeds 1 to 20, 150 generations, 5 percent cheat mutations)")
    for name, scorer in (("naive evaluator", naive_score), ("firewall evaluator", firewall_score)):
        cheat_best = 0
        held, in_arch = [], 0
        for seed in range(1, 21):
            archive, best = evolve(seed, 150, scorer)
            cheat_best += best == CHEAT
            held.append(true_score(best, HELD))
            in_arch += CHEAT in archive
        print(f"{name:19}: cheater crowned best in {cheat_best}/20 | cheater present in archive in {in_arch}/20 | mean true held-out score of the crowned agent {mean(held):.3f}")
    print("a cheater exists in the archive under either evaluator, because the mutation produces it at the same rate, but only the naive evaluator can crown it, and the crowned agent's true held-out score shows the cost; the max function breaks ties by preferring non-cheaters, which makes the naive result look slightly better than a tie broken at random")

    section("2. Genuinely measuring: cheat rate against the naive evaluator")
    for rate in (0.0, 0.01, 0.05, 0.2):
        crowned = 0
        for seed in range(1, 21):
            archive, best = evolve(seed, 150, naive_score, rate)
            crowned += best == CHEAT
        print(f"cheat mutation rate {rate:4.2f}: cheater crowned in {crowned}/20")
    print("a cheater was crowned in 0 of 20 runs at rate 0, 6 at one percent and 11 at five percent, but only 8 at twenty percent; the lab does not explain the dip at twenty percent and with twenty seeds some of it may be noise, and the rates are invented")

    section("3. Genuinely measuring: archive parents drawn from cheater lineages")
    for name, scorer in (("naive evaluator", naive_score), ("firewall evaluator", firewall_score)):
        children_of_cheat = []
        for seed in range(1, 21):
            archive, _ = evolve(seed, 150, scorer)
            children_of_cheat.append(archive.get(CHEAT, {"children": 0})["children"])
        print(f"{name:19}: mean number of children drawn from the cheater entry {mean(children_of_cheat):.2f}")
    print("under the naive evaluator a cheater has the top score, so parent selection keeps drawing it, and under the firewall it scores 0.0 and is rarely chosen; a cheating entry that attracts children spends search budget and can pass its trick down")


if __name__ == "__main__":
    main()
