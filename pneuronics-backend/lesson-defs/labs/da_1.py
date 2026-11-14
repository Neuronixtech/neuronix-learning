"""Teaching implementation (our own): Darwin Godel Machine style open-ended search, Part 1 - agents are short operator sequences, a benchmark scores them, children are added to an archive even when they score lower than the parent, and parent selection is compared with always improving the single best agent.
No language model and no real code self-modification: an 'agent' is a tuple of arithmetic operator names and a mutation edits that tuple. All settings are invented for the lab."""
import random
from statistics import median

OPS = {"a1": lambda v: v + 1, "a5": lambda v: v + 5, "d2": lambda v: v * 2, "t3": lambda v: v * 3, "s1": lambda v: v - 1}
TRAIN = list(range(-5, 6))
HELD = list(range(20, 30))


def target(x):
    return 3 * x + 5


def run_agent(agent, x):
    v = x
    for op in agent:
        v = OPS[op](v)
    return v


def score(agent, inputs=TRAIN):
    return sum(run_agent(agent, x) == target(x) for x in inputs) / len(inputs)


def mutate(agent, r, max_len=6):
    a = list(agent)
    kind = r.choice(["insert", "delete", "replace"])
    if kind == "insert" and len(a) < max_len:
        a.insert(r.randrange(len(a) + 1), r.choice(list(OPS)))
    elif kind == "delete" and len(a) > 1:
        a.pop(r.randrange(len(a)))
    else:
        a[r.randrange(len(a))] = r.choice(list(OPS))
    return tuple(a)


def evolve(seed, gens, mode):
    r = random.Random(seed)
    root = ("a1",)
    nodes = {root: {"parent": None, "score": score(root), "children": 0, "gen": 0}}
    best = root
    first_hit = None
    for g in range(1, gens + 1):
        if mode == "greedy":
            parent = best
        else:
            keys = list(nodes)
            w = [(nodes[k]["score"] + 0.05) / (1 + nodes[k]["children"]) for k in keys]
            parent = r.choices(keys, weights=w)[0]
        child = mutate(parent, r)
        nodes[parent]["children"] += 1
        if child in nodes:
            continue
        s = score(child)
        if mode == "greedy" and s <= nodes[best]["score"]:
            continue
        nodes[child] = {"parent": parent, "score": s, "children": 0, "gen": g}
        if s > nodes[best]["score"]:
            best = child
        if s == 1.0 and first_hit is None:
            first_hit = g
    return nodes, best, first_hit


def lineage(nodes, a):
    out = []
    while a is not None:
        out.append(a)
        a = nodes[a]["parent"]
    return out[::-1]


def has_dip(nodes, a):
    ln = lineage(nodes, a)
    return any(nodes[ln[i + 1]]["score"] < nodes[ln[i]]["score"] for i in range(len(ln) - 1))


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: agents as operator sequences and the benchmark score")
    for ag in (("a1",), ("t3",), ("t3", "a5"), ("d2", "a5")):
        print(f"{'+'.join(ag):10} train score {score(ag):.3f} | held-out score {score(ag, HELD):.3f}")
    print("the seed agent a1 solves only one of eleven training inputs, the pair t3 then a5 computes 3x+5 exactly, and every agent except the exact one scores 0.000 on the held-out inputs 20 to 29, including the seed agent whose single training hit is a coincidence at one input; the target function is invented")

    section("2. Genuinely measuring: greedy against archive parent selection, 10 seeds, 150 generations")
    for mode in ("greedy", "archive"):
        hits, firsts, sizes, dips = 0, [], [], 0
        for seed in range(1, 11):
            nodes, best, fh = evolve(seed, 150, mode)
            hits += nodes[best]["score"] == 1.0
            if fh is not None:
                firsts.append(fh)
            sizes.append(len(nodes))
            dips += has_dip(nodes, best)
        print(f"{mode:8}: exact in {hits}/10 | median generation of first hit {median(firsts) if firsts else None} | median archive size {median(sizes)} | winners whose lineage dipped {dips}")
    print("greedy keeps only strict improvements so its lineage can never dip, while the archive keeps every new agent and parents are drawn by score and by how few children they have; greedy found the target in none of the ten runs because the score is 0.000 almost everywhere, so a strictly better child almost never appears and the archive stays at one agent, while the archive mode found it in most runs by wandering through agents that scored no better than the seed; the result belongs to this flat toy score landscape and is not a general ranking")

    section("3. Genuinely running: a stepping stone in one archive run (seed 3, archive mode)")
    nodes, best, fh = evolve(3, 150, "archive")
    ln = lineage(nodes, best)
    print("best:", "+".join(best), "| score", nodes[best]["score"], "| first exact at generation", fh)
    for a in ln:
        print(f"  gen {nodes[a]['gen']:3d} {'+'.join(a):22} score {nodes[a]['score']:.3f}")
    print("the printed chain is the ancestry of the best agent found in that run; if a score falls and rises again along it, a lower-scoring agent was a stepping stone, which a greedy search would have discarded")

    section("4. Genuinely measuring: how often a winning lineage passes through a worse agent")
    tot = dips = 0
    for seed in range(1, 41):
        nodes, best, fh = evolve(seed, 150, "archive")
        if nodes[best]["score"] == 1.0:
            tot += 1
            dips += has_dip(nodes, best)
    print(f"over 40 seeds {tot} runs reached exact; {dips} of those winning lineages contained at least one step where the child scored below its parent")
    print("the fraction is specific to this toy mutation operator, benchmark and parent rule, and the lab does not claim it carries over to real self-modifying agents")


if __name__ == "__main__":
    main()
