"""Teaching implementation (our own): automated alignment research, Part 3 - dependency contamination. A random research graph where each finding builds on earlier ones is seeded with a few bad root findings, taint is propagated, independent re-checks are added, and a shared blind spot among agent reviewers is measured.
All graphs and error rates are invented; nothing here involves a language model or real findings."""
import random
from statistics import mean


def make_graph(r, n, max_parents=3):
    """Finding i depends on up to max_parents earlier findings (finding 0 has none)."""
    return {i: sorted(r.sample(range(i), min(i, r.randint(1, max_parents)))) if i else [] for i in range(n)}


def tainted_set(graph, bad_roots):
    tainted = set(bad_roots)
    for i in range(len(graph)):
        if i not in tainted and any(p in tainted for p in graph[i]):
            tainted.add(i)
    return tainted


def tainted_with_checks(r, graph, bad_roots, catch):
    """Each tainted finding is independently re-checked with probability catch; a caught one is removed before anything builds on it."""
    tainted, removed = set(), set()
    for i in range(len(graph)):
        bad = i in bad_roots or any(p in tainted for p in graph[i])
        if bad:
            if r.random() < catch:
                removed.add(i)
            else:
                tainted.add(i)
    return tainted, removed


def reviewer_majority(r, truth_bad, n_reviewers, p_catch, shared_blind):
    """A bad finding is caught by a reviewer with probability p_catch, unless it falls in a shared blind spot (probability shared_blind) that every reviewer misses."""
    if not truth_bad:
        return False
    if r.random() < shared_blind:
        return False
    votes = sum(r.random() < p_catch for _ in range(n_reviewers))
    return votes > n_reviewers / 2


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely measuring: how far bad roots spread (200 findings, up to 3 parents, 40 graphs)")
    for n_bad in (1, 3, 5):
        shares = []
        for seed in range(1, 41):
            r = random.Random(seed)
            g = make_graph(r, 200)
            bad = r.sample(range(0, 20), n_bad)
            shares.append(len(tainted_set(g, bad)) / 200)
        print(f"{n_bad} bad finding(s) among the first 20: mean share of all 200 findings contaminated {mean(shares):.3f} | worst graph {max(shares):.3f}")
    print("a handful of bad early findings contaminates a large share of everything built later, because each new finding depends on several earlier ones and one tainted parent is enough; the random graph is an invented stand-in for a research literature")

    section("2. Genuinely measuring: where the bad finding sits matters (1 bad root, 40 graphs)")
    for lo, hi, name in ((0, 10, "very early"), (90, 100, "middle"), (180, 190, "late")):
        shares = []
        for seed in range(1, 41):
            r = random.Random(seed)
            g = make_graph(r, 200)
            shares.append(len(tainted_set(g, [r.randrange(lo, hi)])) / 200)
        print(f"{name:10} (index {lo}-{hi}): mean contaminated share {mean(shares):.3f}")
    print("an early error has more later findings that can depend on it, which is why verifying foundations is worth more than verifying the latest result; with only one bad root the numbers are averages over forty random graphs")

    section("3. Genuinely measuring: independent re-checks before building on a finding (3 bad roots, 40 graphs)")
    for catch in (0.0, 0.3, 0.6, 0.9):
        shares, rem = [], []
        for seed in range(1, 41):
            r = random.Random(seed)
            g = make_graph(r, 200)
            bad = r.sample(range(0, 20), 3)
            t, removed = tainted_with_checks(r, g, bad, catch)
            shares.append(len(t) / 200)
            rem.append(len(removed))
        print(f"catch probability {catch:.1f}: contaminated share {mean(shares):.3f} | findings removed {mean(rem):.1f}")
    print("an independent check that catches a bad finding before others build on it cuts contamination sharply, and removing a bad finding also removes the work that would have rested on it; the catch probability is an invented number and assumes the re-check is independent of the original mistake")

    section("4. Genuinely measuring: reviewer panels with a shared blind spot (20000 bad findings)")
    r = random.Random(7)
    for n_rev, blind in ((1, 0.0), (5, 0.0), (5, 0.2), (15, 0.2)):
        caught = mean(reviewer_majority(r, True, n_rev, 0.7, blind) for _ in range(20000))
        print(f"{n_rev:2d} reviewer(s), shared blind spot {blind:.1f}: bad findings caught {caught:.3f}")
    print("adding reviewers raises the catch rate toward the ceiling set by the shared blind spot and no further, because errors that every reviewer shares cannot be voted away; the blind-spot share and per-reviewer catch rate are invented")


if __name__ == "__main__":
    main()
