"""Teaching implementation (our own): Tree of Thoughts Part 1 - beam search over arithmetic thoughts."""
from dataclasses import dataclass

TARGET = 24
BREADTH = 3
BEAM_WIDTH = 2
MAX_DEPTH = 4


@dataclass
class Thought:
    expression: str
    value: int
    score: float = 0.0
    depth: int = 0


def evaluate(node: Thought, target: int = TARGET) -> float:
    """Value function: 1 / (1 + distance to target)."""
    return 1 / (1 + abs(target - node.value))


def expand(node: Thought) -> list[Thought]:
    d = node.depth + 1
    return [
        Thought(f"({node.expression} + 4)", node.value + 4, depth=d),
        Thought(f"({node.expression} * 2)", node.value * 2, depth=d),
        Thought(f"({node.expression} - 1)", node.value - 1, depth=d),
    ]


def fmt(n: Thought) -> str:
    return f"{n.expression} => {n.value} [score={n.score:.3f}]"


def tot_search(start=5, beam_width=BEAM_WIDTH, max_depth=MAX_DEPTH, scorer=evaluate, verbose=False):
    root = Thought(str(start), start, depth=0)
    root.score = scorer(root)
    frontier = [root]
    explored = 0
    for depth in range(1, max_depth + 1):
        if verbose:
            print(f"\n=== DEPTH {depth} ===")
        candidates = []
        for parent in frontier:
            if verbose:
                print(f"\nExpanding parent: {fmt(parent)}")
            for child in expand(parent):
                child.score = scorer(child)
                explored += 1
                candidates.append(child)
                if verbose:
                    print(f"  candidate: {fmt(child)}")
        candidates.sort(key=lambda n: n.score, reverse=True)
        if verbose:
            print("\nRanked candidates:")
            for i, n in enumerate(candidates, 1):
                print(f"  {i}. {fmt(n)}")
        keep, pruned = candidates[:beam_width], candidates[beam_width:]
        if verbose:
            print("\nBeam keeps:")
            for n in keep:
                print("  " + fmt(n))
            print("\nPruned:")
            for n in pruned:
                print("  " + fmt(n))
        for n in keep:
            if n.value == TARGET:
                return n, explored
        frontier = keep
    return None, explored


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. The lesson's trace (breadth 3, beam 2, start 5, target 24)")
    node, explored = tot_search(verbose=True)
    print("\nGOAL FOUND" if node else "\nNO GOAL")
    print("Thoughts explored:", explored)
    print("Expression:", node.expression, "| value:", node.value, f"| score: {node.score:.3f} | depth: {node.depth}")

    section("2. Beam width: 1 (greedy), 2, 3 and unpruned")
    print(f"{'beam':>6} {'found':>6} {'explored':>9}  expression")
    for w in (1, 2, 3, 9, 27):
        n, ex = tot_search(beam_width=w)
        print(f"{w:>6} {str(n is not None):>6} {ex:>9}  {n.expression if n else '-'}")
    print("full tree through depth 3 would generate 3 + 9 + 27 =", 3 + 9 + 27, "thoughts")

    section("3. Sweep: every start value 1..30, depth 4")
    print(f"{'beam':>6} {'solved':>7} {'avg explored':>13}")
    for w in (1, 2, 3, 5):
        solved, total_ex = 0, 0
        for s in range(1, 31):
            n, ex = tot_search(start=s, beam_width=w)
            solved += n is not None
            total_ex += ex
        print(f"{w:>6} {solved:>4}/30 {total_ex / 30:>13.1f}")

    section("4. A bad evaluator: score = value / 100 (prefers bigger numbers)")
    bad = lambda n: n.value / 100
    for w in (1, 2, 3):
        n, ex = tot_search(beam_width=w, scorer=bad)
        print(f"beam {w}: found={n is not None} explored={ex} expression={n.expression if n else '-'}")
    good_n, _ = tot_search()
    print("with the distance evaluator, beam 2 finds:", good_n.expression)

    section("5. Where the beam throws away the winner")
    # start 3 -> shortest path is 3*2=6, 6*2=12, 12*2=24 (depth 3)
    for w in (1, 2):
        n, ex = tot_search(start=3, beam_width=w)
        print(f"start 3, beam {w}: found={n is not None} explored={ex} expression={n.expression if n else '-'}")
    print("scores of the depth-1 children of 3 (value -> score):")
    for c in expand(Thought("3", 3)):
        c.score = evaluate(c)
        print(f"  {c.expression} => {c.value}  score={c.score:.4f}")


if __name__ == "__main__":
    main()
