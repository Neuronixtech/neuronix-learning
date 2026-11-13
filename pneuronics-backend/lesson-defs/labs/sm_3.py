"""Teaching implementation (our own): designing success metrics before the result exists, Part 3 - computing metrics from raw records, uncertainty on small samples with a seeded bootstrap and a Wilson interval,
a three-way decision policy built on the interval, a counter-metric that exposes a hidden cost, and the gap between an offline replay and a live pilot. All records are invented. No language model is used."""
import math
import random
import statistics

random.seed(0)
RECORDS = [  # (minutes_to_identify, correct, review_minutes, unsafe) for 12 invented replayed incidents
    (1.2, True, 2.5, False), (1.8, True, 3.0, False), (2.4, True, 4.0, False), (1.5, False, 6.0, False), (0.9, True, 2.0, False), (3.8, True, 5.0, False),
    (1.1, True, 2.2, False), (2.0, True, 3.5, False), (1.6, False, 7.0, False), (1.3, True, 2.8, False), (2.9, True, 4.5, False), (1.0, True, 2.1, False),
]


def wilson(k, n, z=1.96):
    p = k / n
    d = 1 + z * z / n
    c = (p + z * z / (2 * n)) / d
    h = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / d
    return round(c - h, 3), round(c + h, 3)


def bootstrap_median(xs, reps=2000, seed=7):
    rng = random.Random(seed)
    meds = sorted(statistics.median(rng.choices(xs, k=len(xs))) for _ in range(reps))
    return round(meds[int(0.025 * reps)], 2), round(meds[int(0.975 * reps)], 2)


def policy(lo, hi, thr, higher_is_better):
    if higher_is_better:
        return "pass" if lo >= thr else ("fail" if hi < thr else "collect more evidence")
    return "pass" if hi <= thr else ("fail" if lo > thr else "collect more evidence")


def section(t):
    print(f"\n--- {t} ---")


def main():
    times = [r[0] for r in RECORDS]
    correct = sum(1 for r in RECORDS if r[1])
    section("1. Genuinely computing: outcome metrics from twelve invented records")
    print("median minutes:", statistics.median(times), "| mean minutes:", round(statistics.mean(times), 2), "| accuracy:", f"{correct}/{len(RECORDS)} = {correct / len(RECORDS):.3f}")
    print("the mean is above the median because a few slow incidents (3.8, 2.9 and 2.4 minutes) pull it up; a target written on the mean and one written on the median would disagree here, so the plan has to say which")

    section("2. Genuinely computing: uncertainty at n = 12")
    print("accuracy 95% Wilson interval:", wilson(correct, len(RECORDS)))
    print("median minutes 95% bootstrap interval (2000 resamples, seed 7):", bootstrap_median(times))
    print("with twelve records the accuracy interval spans about 0.55 to 0.95 and the median interval runs from 1.15 to 2.2 minutes, so a point value of 0.833 or 1.55 minutes says much less than it appears to; the resampling is seeded so the numbers repeat")

    section("3. Genuinely running: a decision policy built on the interval")
    lo, hi = wilson(correct, len(RECORDS))
    print("accuracy vs 0.90 :", policy(lo, hi, 0.90, True), "| accuracy vs 0.50:", policy(lo, hi, 0.50, True), "| accuracy vs 0.99:", policy(lo, hi, 0.99, True))
    mlo, mhi = bootstrap_median(times)
    print("median vs 2.0 min:", policy(mlo, mhi, 2.0, False), "| median vs 3.0 min:", policy(mlo, mhi, 3.0, False), "| median vs 0.5 min:", policy(mlo, mhi, 0.5, False))
    print("the interval gives three answers instead of two: at 0.90 the evidence is not enough, at 0.50 it passes, at 0.99 it fails, and the same shape appears for the median; the thresholds are examples")

    section("4. Genuinely computing: a counter-metric that exposes a hidden cost")
    review = [r[2] for r in RECORDS]
    wrong_review = [r[2] for r in RECORDS if not r[1]]
    right_review = [r[2] for r in RECORDS if r[1]]
    print("median review minutes overall:", statistics.median(review), "| when the answer was right:", statistics.median(right_review), "| when it was wrong:", statistics.median(wrong_review))
    print("total minutes per incident (identify + review), median:", statistics.median([r[0] + r[2] for r in RECORDS]))
    print("the assistant is quick to answer and engineers then spend longer checking it, and they spend the most on the answers that were wrong (a median of 6.5 minutes against 2.9); a plan that measured only the time to identify would have hidden that second cost")

    section("5. Genuinely running: offline replay is not a live pilot")
    print("offline dataset: replayed incidents with known answers, n =", len(RECORDS))
    print("not present in it: concurrent incidents, partial outages, engineers under pressure, new services added after the dataset was taken")
    rng = random.Random(3)
    drift = [min(1.0, max(0.0, 0.83 + rng.uniform(-0.25, 0.1))) for _ in range(5)]
    print("illustrative: accuracy over five invented live weeks (random draws from a seeded generator, not data):", [round(x, 2) for x in drift])
    print("the live-week numbers are made up to show the shape of the problem and are not a measurement; an offline pass is evidence about the replayed incidents, and what happens in a pilot is a separate claim that needs its own plan and its own sample")


if __name__ == "__main__":
    main()
