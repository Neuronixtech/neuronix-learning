"""Teaching implementation (our own): process versus outcome supervision, shortcut detection, out-of-distribution testing and a thinking gate in the spirit of Quiet-STaR, Part 3.
Everything is a scripted stand-in: chains are lists of invented step results, the 'memorizer' is a lookup table, and the thinking gate uses made-up difficulty scores. No language model is involved."""
import random
from statistics import mean


def make_chain(r, n_steps=4, p_step=0.8, lucky=0.2):
    """A reasoning chain: each step is right with p_step. If any step is wrong the final answer is still right with probability lucky."""
    steps = [r.random() < p_step for _ in range(n_steps)]
    if all(steps):
        return steps, True
    return steps, r.random() < lucky


def outcome_reward(chain):
    return 1.0 if chain[1] else 0.0


def process_reward(chain):
    return mean(chain[0])


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely measuring: what outcome rewards reward (20000 chains of 4 steps, per-step 0.8)")
    r = random.Random(1)
    chains = [make_chain(r) for _ in range(20000)]
    right = [c for c in chains if c[1]]
    clean = [c for c in right if all(c[0])]
    print(f"answer right: {len(right) / len(chains):.3f} | all steps right: {sum(all(c[0]) for c in chains) / len(chains):.3f}")
    print(f"of the chains an outcome reward scores 1.0, the share with at least one wrong step: {1 - len(clean) / len(right):.3f}")
    print("an outcome-only reward treats a chain with wrong steps and a lucky right answer exactly like a clean chain, so a notable share of rewarded chains reasoned badly; the 0.8 per-step rate and 20 percent luck are invented")

    section("2. Genuinely measuring: filtering by outcome against filtering by process")
    keep_out = [c for c in chains if outcome_reward(c) == 1.0]
    keep_proc = [c for c in chains if process_reward(c) == 1.0]
    print(f"outcome filter keeps {len(keep_out)} chains; fraction fully correct {mean(all(c[0]) for c in keep_out):.3f}")
    print(f"process filter keeps {len(keep_proc)} chains; fraction fully correct {mean(all(c[0]) for c in keep_proc):.3f}")
    print("requiring every step to be checked removes the lucky chains and keeps fewer examples, which is the trade of process supervision: cleaner data at the price of needing a per-step checker, and here the checker is perfect because the lab knows the truth")

    section("3. Genuinely measuring: an imperfect step checker")
    r = random.Random(2)
    for miss in (0.0, 0.1, 0.3):
        kept = []
        for steps, ans in chains[:8000]:
            flagged = any((not s) and r.random() >= miss for s in steps)
            if not flagged:
                kept.append((steps, ans))
        print(f"checker misses {miss:.1f} of wrong steps: kept {len(kept):4d} | fully correct share {mean(all(s) for s, _ in kept):.3f}")
    print("as the checker misses more wrong steps, bad chains slip into the training set again; a process checker is only as good as its coverage, and the miss rates are invented")

    section("4. Genuinely running: a memorizer and an algorithm, tested in and out of distribution")
    train = {(a, b): a + b for a in range(10, 100, 3) for b in range(10, 100, 3)}
    memorizer = lambda a, b: train.get((a, b), 0)
    algorithm = lambda a, b: a + b
    r = random.Random(3)
    in_dist = [(r.choice(range(10, 100, 3)), r.choice(range(10, 100, 3))) for _ in range(500)]
    unseen = [(a + 1, b + 1) for a, b in in_dist]
    big = [(r.randint(1000, 9999), r.randint(1000, 9999)) for _ in range(500)]
    for name, f in (("memorizer", memorizer), ("algorithm", algorithm)):
        acc = [mean(f(a, b) == a + b for a, b in s) for s in (in_dist, unseen, big)]
        print(f"{name:10} in-distribution {acc[0]:.2f} | unseen two-digit {acc[1]:.2f} | four-digit {acc[2]:.2f}")
    print("both look perfect on training-style inputs, and only the one that learned the procedure survives inputs it has not seen; a test set drawn from the training distribution cannot tell them apart, and the memorizer is a plain lookup table used as a stand-in")

    section("5. Genuinely measuring: a thinking gate that thinks only when a position looks hard")
    r = random.Random(4)
    positions = [r.random() for _ in range(20000)]
    accuracy = lambda d, think: 0.97 if think else max(0.2, 1.0 - 0.9 * d)
    for name, gate in (("never think", lambda d: False), ("always think", lambda d: True), ("think if difficulty > 0.5", lambda d: d > 0.5), ("think if difficulty > 0.8", lambda d: d > 0.8)):
        thought = [gate(d) for d in positions]
        acc = mean(accuracy(d, t) for d, t in zip(positions, thought))
        print(f"{name:27} accuracy {acc:.3f} | thinking tokens per position {mean(thought) * 50:5.1f}")
    print("thinking only where difficulty exceeds 0.5 recovers about 76 percent of the accuracy gain of always thinking (0.556 to 0.870 against 0.970) for about half the tokens, because thinking only helps where the position is hard; the difficulty scores and the accuracy curve are invented, and a real model has to learn when to think")


if __name__ == "__main__":
    main()
