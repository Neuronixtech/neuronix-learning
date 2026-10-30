"""Teaching implementation (our own): debate topologies - full mesh, hub-and-spoke, ring, synchronous rounds, snapshots, critique-operation cost.
Agent behaviour is SIMULATED (assumed error rates); no language model is involved."""
import random
from collections import Counter
from dataclasses import dataclass, field

from deb_1 import Debater, initial_answers, plurality


@dataclass
class DebateResult:
    protocol: str
    final_answer: object
    converged: bool
    rounds: int
    critique_ops: int
    history: list = field(default_factory=list)


def neighbours(topology, n, i, hub=0):
    if topology == "full":
        return [j for j in range(n) if j != i]
    if topology == "hub":
        return [j for j in range(n) if j != i] if i == hub else [hub]
    if topology == "ring":
        return [(i - 1) % n, (i + 1) % n] if n > 2 else [j for j in range(n) if j != i]
    raise ValueError(topology)


def debate(agents, topology="full", max_rounds=4, snapshot=True, order=None, hub=0):
    """Each round every agent reads its neighbours' answers and adopts the neighbour plurality if it has strict majority support.
    snapshot=True: all agents read the round-start answers (compute, then commit). snapshot=False: agents update in place, one after another."""
    n = len(agents)
    answers = [a.answer for a in agents]
    history, ops, rounds = [list(answers)], 0, 0
    idx = list(order) if order else list(range(n))
    for _ in range(max_rounds):
        rounds += 1
        read = list(answers) if snapshot else answers
        new = list(answers)
        for i in idx:
            nb = neighbours(topology, n, i, hub)
            ops += len(nb)
            seen = [read[j] for j in nb]
            top = plurality(seen)
            if top and sum(1 for x in seen if x == top) / len(seen) > 0.5 and top != (new[i] if not snapshot else answers[i]):
                if snapshot:
                    new[i] = top
                else:
                    answers[i] = top
        if snapshot:
            answers = new
        history.append(list(answers))
        if len(set(answers)) == 1:
            break
    final = plurality(answers)  # None when the final state is a tie, so a stuck or oscillating debate is not credited by tie-break luck
    return DebateResult(topology, final, len(set(answers)) == 1, rounds, ops, history)


def critique_ops_per_round(topology, n):
    return sum(len(neighbours(topology, n, i)) for i in range(n))


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Critique operations per round (counted from the neighbour lists)")
    print(f"{'agents':>7} {'full mesh':>10} {'hub-and-spoke':>14} {'ring':>6}   (n*(n-1), 2*(n-1) and 2n)")
    for n in (3, 5, 8, 12, 20):
        print(f"{n:>7} {critique_ops_per_round('full', n):>10} {critique_ops_per_round('hub', n):>14} {critique_ops_per_round('ring', n):>6}")
    print("full mesh grows with the square of the group size, hub-and-spoke and ring grow linearly; each operation stands for one agent reading one peer's answer, so it is a proxy for tokens")

    section("2. The lesson's three-agent example under each topology")
    ags = [Debater("A1", "C", 0.8), Debater("A2", "W", 0.6), Debater("A3", "C", 0.7)]
    for topo in ("full", "hub", "ring"):
        r = debate([Debater(a.name, a.answer, a.confidence) for a in ags], topo)
        print(f"{topo:5} final={r.final_answer} converged={r.converged} rounds={r.rounds} ops={r.critique_ops} history={r.history}")

    section("3. Genuinely measuring: does in-place updating make the result depend on agent order (300 random 5-agent ring configurations, seed 5)")
    import itertools
    rng = random.Random(5)
    dependent = {True: 0, False: 0}
    example = None
    for _ in range(300):
        cfg = [rng.choice("CCWX") for _ in range(5)]
        for snapshot in (True, False):
            finals = set()
            for perm in itertools.permutations(range(5)):
                ags = [Debater(f"A{k}", a, 0.8) for k, a in enumerate(cfg)]
                r = debate(ags, "ring", 4, snapshot, perm)
                finals.add((tuple(r.history[-1]), r.converged))
            if len(finals) > 1:
                dependent[snapshot] += 1
                if not snapshot and example is None:
                    example = (cfg, sorted(finals)[:3])
    print(f"configurations whose final state depended on the visiting order: with round-start snapshot {dependent[True]} of 300, with in-place updates {dependent[False]} of 300")
    if example:
        print("one in-place example: start", example[0], "-> different final states", example[1])
    print("a round-start snapshot (compute everything, then commit) made the outcome independent of visiting order in every configuration, and in-place updating did not; for debates that should be reproducible, read from the snapshot")

    section("4. Genuinely measuring: the hub is a single point of failure (5 agents, 25 percent wrong each, seed 7, 10000 questions)")
    rng = random.Random(7)
    N = 10000
    print(f"{'topology':>9} {'final correct':>14} {'converged':>10} {'rounds (mean)':>14} {'ops (mean)':>11}")
    for topo in ("full", "hub", "ring"):
        correct = conv = rounds = ops = 0
        for _ in range(N):
            ags = initial_answers(rng, 5, 0.25)
            r = debate(ags, topo)
            correct += r.final_answer == "C"
            conv += r.converged
            rounds += r.rounds
            ops += r.critique_ops
        print(f"{topo:>9} {correct / N:>14.1%} {conv / N:>10.1%} {rounds / N:>14.2f} {ops / N:>11.1f}")
    rng = random.Random(8)
    hub_wrong = hub_wrong_final_wrong = 0
    for _ in range(N):
        ags = initial_answers(rng, 5, 0.25)
        if ags[0].answer != "C":
            hub_wrong += 1
            hub_wrong_final_wrong += debate(ags, "hub").final_answer != "C"
    print(f"when the hub's own first answer was wrong ({hub_wrong} questions), the hub topology ended wrong on {hub_wrong_final_wrong / hub_wrong:.1%} of them")
    print("hub-and-spoke used about half the critique operations of the full mesh (12.5 against 25.3) and ended correct 92.8 percent of the time against 91.4 for the full mesh and 92.2 for the ring (a debate that ends in a tie counts as no answer, so it is not credited), but reached agreement less often (81.4 against 91.1 percent for the full mesh); when the hub started wrong, the group ended wrong on 25.4 percent of those questions")

    section("5. Genuinely measuring: rounds needed and early stopping (full mesh, 5 agents, seed 9)")
    rng = random.Random(9)
    hist = Counter()
    for _ in range(N):
        r = debate(initial_answers(rng, 5, 0.25), "full", 6)
        hist[(r.rounds, r.converged)] += 1
    for k in sorted(hist):
        print(f"stopped after {k[0]} round(s), converged={k[1]!s:5}: {hist[k] / N:>6.1%}")
    print("every debate either agreed after the first round (91.3 percent) or never agreed within the limit (8.7 percent), with nothing in between, because a stuck split such as 2-2-1 does not change under this rule; stopping on agreement saves later rounds and the round limit is what ends the stuck ones")

    section("6. Genuinely checking: a hub that disagrees with a clear majority")
    ags = [Debater("Hub", "W", 0.9)] + [Debater(f"A{i}", "C", 0.6) for i in range(2, 6)]
    for topo in ("full", "hub"):
        r = debate([Debater(a.name, a.answer, a.confidence) for a in ags], topo)
        print(f"{topo:5} final={r.final_answer} converged={r.converged} rounds={r.rounds} history={r.history}")
    print("in the full mesh the hub is outvoted in one round; in the hub topology the spokes copy the hub, then the hub copies the spokes, and the group swaps between two states every round without converging; the reported final answer was right only because 4 rounds is an even number of swaps")


if __name__ == "__main__":
    main()
