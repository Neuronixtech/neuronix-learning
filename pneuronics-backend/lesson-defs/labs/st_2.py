"""Teaching implementation (our own): V-STaR, Part 2 - best-of-N sampling with a verifier. Compares random choice, majority vote and an imperfect scripted verifier against the 1-(1-p)^N formula, shows how verifier errors cap the gain, and tests a verifier trained on both correct and incorrect samples.
There is no language model: candidates are drawn from invented probabilities and the verifier is a stand-in with fixed true-positive and false-positive rates."""
import random
from collections import Counter
from statistics import mean


def candidates(r, p, n, wrong_pool=7):
    """n candidate answers; each is the right answer 0 with probability p, else one of wrong_pool wrong answers (1..wrong_pool)."""
    return [0 if r.random() < p else r.randint(1, wrong_pool) for _ in range(n)]


def pick_random(r, c):
    return r.choice(c)


def pick_majority(r, c):
    cnt = Counter(c)
    top = max(cnt.values())
    return r.choice([k for k, v in cnt.items() if v == top])


def pick_verified(r, c, tpr, fpr):
    """Verifier accepts a right candidate with probability tpr and a wrong one with probability fpr; pick randomly among accepted, else fall back to random."""
    accepted = [x for x in c if r.random() < (tpr if x == 0 else fpr)]
    return r.choice(accepted) if accepted else r.choice(c)


def rate(fn, p, n, trials, seed, **kw):
    r = random.Random(seed)
    return mean(fn(r, candidates(r, p, n), **kw) == 0 for _ in range(trials))


def section(t):
    print(f"\n--- {t} ---")


def main():
    T = 20000
    section("1. Genuinely measuring: random pick, majority vote and a perfect checker against the formula (p = 0.3)")
    for n in (1, 4, 16):
        ideal = 1 - (1 - 0.3) ** n
        rnd = rate(pick_random, 0.3, n, T, 1)
        maj = rate(pick_majority, 0.3, n, T, 1)
        ver = rate(pick_verified, 0.3, n, T, 1, tpr=1.0, fpr=0.0)
        print(f"N={n:2d}: formula {ideal:.3f} | perfect verifier {ver:.3f} | majority {maj:.3f} | random {rnd:.3f}")
    print("a perfect checker matches 1 - (1 - p)^N, random choice never improves on p, and majority vote helps here only because wrong answers are spread over seven values while the right one is a single value; if wrong answers agreed with each other majority vote would fail")

    section("2. Genuinely measuring: verifier errors cap the gain (p = 0.3, N = 16)")
    for tpr, fpr in ((1.0, 0.0), (0.9, 0.1), (0.9, 0.3), (0.7, 0.3), (0.5, 0.5)):
        v = rate(pick_verified, 0.3, 16, T, 2, tpr=tpr, fpr=fpr)
        print(f"verifier true-positive {tpr:.1f}, false-positive {fpr:.1f}: success {v:.3f}")
    print("success falls as the false-positive rate rises and equals the base rate 0.300 when the verifier accepts right and wrong answers equally often, so a weak verifier can make extra samples worthless; the rates are invented")

    section("3. Genuinely measuring: when failures are correlated, more samples help less (N = 16)")
    r = random.Random(4)
    hits = 0
    for _ in range(T):
        hard = r.random() < 0.5
        p = 0.02 if hard else 0.58
        c = candidates(r, p, 16)
        hits += pick_verified(r, c, 1.0, 0.0) == 0
    print(f"average p is 0.30 but half the problems are hard (0.02) and half easy (0.58): perfect-verifier success {hits / T:.3f} against the independent formula {1 - 0.7 ** 16:.3f}")
    print("a perfect verifier cannot select an answer that was never sampled, so the gain is bounded by how often the right answer appears at all; the 0.02 and 0.58 split is invented")

    section("4. Genuinely running: training a verifier on both correct and incorrect samples")
    r = random.Random(7)
    data = []
    for _ in range(4000):
        correct = r.random() < 0.3
        score = r.gauss(1.0 if correct else 0.0, 1.0)
        data.append((score, correct))
    best_t, best_acc = None, 0
    for t in [x / 10 for x in range(-10, 21)]:
        acc = mean((s > t) == c for s, c in data)
        if acc > best_acc:
            best_t, best_acc = t, acc
    test = []
    for _ in range(4000):
        correct = r.random() < 0.3
        test.append((r.gauss(1.0 if correct else 0.0, 1.0), correct))
    tacc = mean((s > best_t) == c for s, c in test)
    tpr = mean(s > best_t for s, c in test if c)
    fpr = mean(s > best_t for s, c in test if not c)
    print(f"threshold {best_t} chosen on training data | held-out accuracy {tacc:.3f} | true-positive {tpr:.3f} | false-positive {fpr:.3f}")
    print("the scripted scores overlap, so the threshold that maximises accuracy on this 30 percent correct mix rejects most right answers (low true-positive rate) in order to keep false positives low; V-STaR trains a verifier on the model's own wrong samples as well as right ones to learn that boundary, but a real verifier is a trained model and this one is a threshold on invented Gaussian scores")
    v = rate(pick_verified, 0.3, 16, T, 5, tpr=tpr, fpr=fpr)
    print(f"best-of-16 with those measured rates: {v:.3f}")


if __name__ == "__main__":
    main()
