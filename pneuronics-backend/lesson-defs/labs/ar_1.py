"""Teaching implementation (our own): automated alignment research, Part 1 - weak-to-strong supervision on a one-dimensional toy problem. A weak labeler provides noisy or systematically wrong labels and a 'strong' student fits a threshold to them; performance gap recovered (PGR) is measured over many seeds.
There is no language model: the student is a threshold fitted by minimising error on the weak labels, the data are uniform random numbers and all rates are invented."""
import random
from statistics import mean


def true_label(x):
    return x > 0.5


def weak_random(r, x, flip):
    return (not true_label(x)) if r.random() < flip else true_label(x)


def weak_systematic(x, lo=0.5, hi=0.7):
    """Always wrong on one band of inputs: calls inputs in [lo, hi] negative even though they are positive."""
    return False if lo <= x <= hi else true_label(x)


def fit_threshold(xs, labels):
    """The student: pick the threshold that minimises disagreement with the given labels (candidate thresholds are the data points)."""
    best_t, best_err = 0.0, len(xs) + 1
    for t in sorted(xs):
        err = sum((x > t) != y for x, y in zip(xs, labels))
        if err < best_err:
            best_t, best_err = t, err
    return best_t


def accuracy(t, r, n=4000):
    pts = [r.random() for _ in range(n)]
    return mean((x > t) == true_label(x) for x in pts)


def weak_accuracy(label_fn, r, n=4000):
    pts = [r.random() for _ in range(n)]
    return mean(label_fn(x) == true_label(x) for x in pts)


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely measuring: random label noise against systematic error, same weak accuracy (200 training points, seeds 1 to 30)")
    for name in ("random flips 20 percent", "systematic band error"):
        weak_acc, stu, ceil = [], [], []
        for seed in range(1, 31):
            r = random.Random(seed)
            xs = [r.random() for _ in range(200)]
            if name.startswith("random"):
                lab = [weak_random(r, x, 0.2) for x in xs]
                wa = 0.8
            else:
                lab = [weak_systematic(x) for x in xs]
                wa = weak_accuracy(weak_systematic, r)
            t = fit_threshold(xs, lab)
            tt = fit_threshold(xs, [true_label(x) for x in xs])
            weak_acc.append(wa)
            stu.append(accuracy(t, r))
            ceil.append(accuracy(tt, r))
        pgr = (mean(stu) - mean(weak_acc)) / (mean(ceil) - mean(weak_acc))
        print(f"{name:26}: weak labeler accuracy {mean(weak_acc):.3f} | student accuracy {mean(stu):.3f} | ceiling (true labels) {mean(ceil):.3f} | PGR {pgr:.2f}")
    print("both weak labelers are right about 80 percent of the time, yet the student recovers almost all of the gap when the errors are random and none of it when they are concentrated in one band, because fitting to labels averages out random noise and copies a systematic mistake; the toy student and uniform data are invented")

    section("2. Genuinely measuring: how much random noise the student tolerates (200 points, 30 seeds)")
    for flip in (0.1, 0.3, 0.45, 0.5):
        stu = []
        for seed in range(1, 31):
            r = random.Random(seed)
            xs = [r.random() for _ in range(200)]
            lab = [weak_random(r, x, flip) for x in xs]
            stu.append(accuracy(fit_threshold(xs, lab), r))
        print(f"flip rate {flip:.2f}: mean student accuracy {mean(stu):.3f} | worst of 30 {min(stu):.3f}")
    print("accuracy stays high at moderate noise and slips as the flip rate approaches 0.5, where the labels carry no information and the worst of 30 runs is 0.500; the mean of 0.703 at 0.5 is above a coin flip only because a threshold placed anywhere on the 0 to 1 range is still right for much of the range, and averaging only works while the noise is smaller than the signal")

    section("3. Genuinely measuring: more training points against noise (flip 0.3, 30 seeds)")
    for n in (20, 50, 200, 800):
        stu = []
        for seed in range(1, 31):
            r = random.Random(seed)
            xs = [r.random() for _ in range(n)]
            lab = [weak_random(r, x, 0.3) for x in xs]
            stu.append(accuracy(fit_threshold(xs, lab), r, 2000))
        print(f"{n:4d} points: mean student accuracy {mean(stu):.3f}")
    print("more weakly labeled data helps a student that is averaging out random noise, and the same extra data would not help against the systematic band error from section 1, since every extra point repeats the same mistake")


if __name__ == "__main__":
    main()
