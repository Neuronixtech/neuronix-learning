"""Teaching implementation (our own): recursive self-improvement, Part 1 - the arithmetic of a capability-versus-alignment gap. Capability grows 20 percent per generation and alignment 5 percent from the same start of 100; the lab tabulates the gap, finds when the ratio crosses thresholds, shows what alignment growth would be needed to keep pace and adds seeded noise to the growth rates.
The growth rates are the lesson's illustrative numbers or invented; nothing here measures a real system and no language model is used."""
import random
from math import ceil, log
from statistics import mean


def cap(n, g=0.20, c0=100.0):
    return c0 * (1 + g) ** n


def align(n, g=0.05, a0=100.0):
    return a0 * (1 + g) ** n


def first_ratio_cross(threshold, gc=0.20, ga=0.05):
    n = 0
    while cap(n, gc) / align(n, ga) < threshold:
        n += 1
    return n


def noisy_ratio(r, n, gc=0.20, ga=0.05, sd=0.05):
    c = a = 100.0
    for _ in range(n):
        c *= 1 + gc + r.gauss(0, sd)
        a *= 1 + ga + r.gauss(0, sd)
    return c / a


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely computing: capability C = 100 * 1.2^n and alignment A = 100 * 1.05^n")
    print("gen   capability  alignment   gap    ratio C/A")
    for n in (0, 5, 10, 15, 20, 30):
        c, a = cap(n), align(n)
        print(f"{n:3d}  {c:10.1f}  {a:9.1f}  {c - a:8.1f}  {c / a:6.2f}")
    print("both start at 100, so the gap is zero at generation 0 and the ratio rises steadily because the capability rate is higher; at generation 20 capability is about 3834 and alignment about 265, a ratio near 14.5, and the rates are the lesson's illustrative numbers")

    section("2. Genuinely computing: generations until the ratio crosses a threshold")
    for th in (2, 5, 10, 100):
        n = first_ratio_cross(th)
        print(f"ratio >= {th:3d} first at generation {n:2d} | closed form {ceil(log(th) / log(1.2 / 1.05)):2d}")
    print("the loop and the closed form n = ln(threshold) / ln(1.2 / 1.05) agree, and a ratio of 2 arrives within a handful of generations while a ratio of 100 takes a few dozen; ratio thresholds are chosen for illustration and no value is a known safe limit")

    section("3. Genuinely computing: how fast alignment must grow to keep a constant ratio")
    for gc in (0.05, 0.10, 0.20):
        print(f"capability growth {gc:.2f} per generation: alignment must grow at least {gc:.2f} per generation to hold the ratio at 1.0")
    for ga in (0.05, 0.10, 0.15, 0.20):
        print(f"alignment growth {ga:.2f}: ratio at generation 20 = {cap(20) / align(20, ga):.2f}")
    print("the ratio stays fixed only when the two growth rates are equal, and at any lower alignment rate the gap widens exponentially; matching the rate once is not enough, it has to be sustained every generation")

    section("4. Genuinely measuring: noisy growth rates (200 runs per row, seed 1, 20 generations)")
    r = random.Random(1)
    for sd in (0.0, 0.05, 0.10):
        ratios = [noisy_ratio(r, 20, sd=sd) for _ in range(200)]
        under = sum(1 for x in ratios if x < 5)
        print(f"noise sd {sd:.2f}: mean ratio {mean(ratios):6.2f} | min {min(ratios):6.2f} | max {max(ratios):7.2f} | runs with ratio under 5: {under}")
    print("noise spreads the outcome widely but the 15 percentage point gap in mean growth dominates, so almost every run still ends far from parity; the noise model is Gaussian with an invented spread")


if __name__ == "__main__":
    main()
