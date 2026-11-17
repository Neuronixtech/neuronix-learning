"""Teaching implementation (our own): METR time horizons, Part 1 - the logistic success model on log task duration, a numerically stable sigmoid against the naive one, why durations are sampled and modelled on a log scale, success probabilities and the 10, 50 and 90 percent horizons for chosen coefficients, a round-trip check of the horizon formula, input errors and the doubling-time arithmetic.
The coefficients are chosen by the lab and no METR data, task suite or model result is used or reproduced; the doubling times are cited from the lesson and only turned into arithmetic here.
"""
import math
import random


def sigmoid(z):
    if z >= 0:
        return 1.0 / (1.0 + math.exp(-z))
    e = math.exp(z)
    return e / (1.0 + e)


def naive_sigmoid(z):
    return 1.0 / (1.0 + math.exp(-z))


def success_probability(minutes, a, b):
    if minutes <= 0 or not math.isfinite(minutes):
        raise ValueError("Expert completion time must be positive and finite.")
    return sigmoid(a + b * math.log(minutes))


def horizon(a, b, p):
    if not 0.0 < p < 1.0:
        raise ValueError("Probability must be between 0 and 1.")
    if b >= 0:
        raise ValueError("Expected a negative duration slope.")
    return math.exp((math.log(p / (1.0 - p)) - a) / b)


def growth(h0, months, doubling_months):
    return h0 * 2 ** (months / doubling_months)


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: the sigmoid and its stable form")
    for z in (-4, -2, 0, 2, 4):
        print(f"sigmoid({z:2}) = {sigmoid(z):.3f}")
    print("sigmoid(-1000) =", sigmoid(-1000.0), "| sigmoid(1000) =", sigmoid(1000.0))
    try:
        naive_sigmoid(-1000.0)
    except OverflowError as e:
        print("naive 1/(1+exp(-z)) at z=-1000:", type(e).__name__, "-", e)
    print("the values run from 0.018 up to 0.982 with 0.5 at zero, the stable form returned 0.0 and 1.0 at the extremes, and the naive form raised OverflowError for a large negative input; the stable branch matters because a fit can wander into extreme scores")

    section("2. Genuinely measuring: why durations live on a log scale")
    for t in (1, 10, 100, 1000):
        print(f"ln({t}) = {math.log(t):.4f}")
    print("differences between neighbours:", [round(math.log(b) - math.log(a), 4) for a, b in ((1, 10), (10, 100), (100, 1000))])
    rng = random.Random(1)
    n = 100000
    lin = sum(rng.uniform(1, 1000) < 10 for _ in range(n)) / n
    lg = sum(math.exp(rng.uniform(0, math.log(1000))) < 10 for _ in range(n)) / n
    print(f"share of 100000 tasks shorter than 10 minutes: uniform in minutes {lin:.3f} | uniform in log minutes {lg:.3f}")
    print("every tenfold step adds the same 2.3026 on the log scale, and sampling uniformly in minutes put under one percent of the tasks below ten minutes while sampling uniformly in log minutes put about a third there, which is why the lab samples on the log scale; real benchmark tasks need not be spread this way")

    section("3. Genuinely running: success probability for a=4, b=-1")
    for t in (10, 60, 480):
        print(f"expert minutes {t:4}: P(success) = {success_probability(t, 4, -1):.4f}")
    print("lesson text lists 0.8454 for ten minutes | computed to four places:", round(success_probability(10, 4, -1), 4))
    ds = [1, 5, 10, 30, 60, 120, 480]
    ps = [success_probability(t, 4, -1) for t in ds]
    print("strictly decreasing over", ds, ":", all(x > y for x, y in zip(ps, ps[1:])))
    for bad in (0, -5, float("nan")):
        try:
            success_probability(bad, 4, -1)
        except ValueError as e:
            print(f"duration {bad}: ValueError: {e}")
    print("the probability falls from 0.8452 at ten minutes to 0.4764 at an hour and 0.1021 at eight hours for these chosen coefficients, which differs in the last digit from the 0.8454 printed in the lesson text, it decreases over the whole list because the slope is negative, and non-positive or non-finite durations are refused because the logarithm is undefined; real tasks of the same length can differ widely in difficulty")

    section("4. Genuinely running: the three horizons")
    for a, b in ((4.0, -1.0), (4.0, -0.5), (5.0, -1.0)):
        h90, h50, h10 = (horizon(a, b, p) for p in (0.9, 0.5, 0.1))
        print(f"a={a} b={b}: H90 {h90:9.2f} | H50 {h50:9.2f} | H10 {h10:10.2f} minutes | e^(-a/b) = {math.exp(-a / b):9.2f} | ordered H90<H50<H10: {h90 < h50 < h10}")
    print("H90 for a=4, b=-1 to four places:", round(horizon(4, -1, 0.9), 4), "| e^4 / 9 =", round(math.exp(4) / 9, 4), "| lesson text lists 6.0653")
    print("for a=4 and b=-1 the horizons are 6.07, 54.60 and 491.38 minutes (the exact 90 percent value is 6.0665 and the lesson text prints 6.0653, a small slip in the text), the 50 percent horizon equals e to the power of minus a over b in every row, a shallower slope pushes both ends far apart, and raising the intercept moves the whole curve to longer tasks; the 90 percent horizon is the shorter, more demanding one and the 10 percent horizon is not a conservative limit")

    section("5. Genuinely running: a round trip and the error cases")
    for p in (0.1, 0.5, 0.9):
        h = horizon(4, -1, p)
        print(f"p={p}: horizon {h:.3f} minutes -> probability back {success_probability(h, 4, -1):.6f}")
    for args in ((4, -1, 1.5), (4, 1.0, 0.5), (4, 0.0, 0.5)):
        try:
            horizon(*args)
        except ValueError as e:
            print(f"horizon{args}: ValueError: {e}")
    print("feeding each horizon back into the probability function returned the probability it came from, so the two formulas are inverses, and a probability outside the open interval or a slope that is not negative is refused")

    section("6. Genuinely computing: doubling-time arithmetic")
    print("2 hours doubling every 4 months after 8 months:", growth(2, 8, 4), "hours")
    for label, months in (("about seven months", 7.0), ("130.8 days", 130.8 / 30.44)):
        per_year = 12 / months
        print(f"doubling time {label:18}: {per_year:.2f} doublings a year = a factor of {2 ** per_year:.2f}")
    print("with a doubling time of seven months a year gives a factor of about 3.3 and with 130.8 days about 6.9, so the choice of fitting period changes the projection by a factor of two within a year; both doubling times are cited from the lesson and are not measured here, and extrapolating far beyond observed data is not a forecast")


if __name__ == "__main__":
    main()
