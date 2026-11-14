"""Teaching implementation (our own): long-horizon agents, Part 1 - a logistic time-horizon model, how success falls with task length, compounding per-step reliability checked against a seeded Monte Carlo, and a doubling-time projection.
All numbers are made up or computed here; nothing is a measurement of a real model, and no language model is used."""
import random
from math import log2


def p_success(t_hours, horizon_hours, k=1.0):
    """Logistic-in-log-time success model: P = 1 / (1 + (t / H)^k). H is the task length where P = 0.5."""
    return 1.0 / (1.0 + (t_hours / horizon_hours) ** k)


def monte_carlo_chain(p_step, n_steps, trials, seed):
    r = random.Random(seed)
    ok = 0
    for _ in range(trials):
        if all(r.random() < p_step for _ in range(n_steps)):
            ok += 1
    return ok / trials


def steps_for_target(p_step, target):
    n = 0
    p = 1.0
    while p > target:
        p *= p_step
        n += 1
    return n


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely computing: success probability against task length for a 4-hour horizon")
    H = 4.0
    for t in (0.25, 1, 2, 4, 8, 16, 32):
        print(f"task length {t:6.2f} h  P(success) = {p_success(t, H):.3f}")
    print("with a horizon of 4 hours the model gives 0.5 at exactly 4 hours by construction, 0.941 at 15 minutes and 0.111 at 32 hours; the horizon is the length where success is 50 percent, and says nothing about 99 percent reliability, and the horizon value here is invented")

    section("2. Genuinely computing: steepness k changes how fast reliability falls")
    for k in (0.5, 1.0, 2.0):
        row = [f"{p_success(t, H, k):.3f}" for t in (1, 4, 16)]
        print(f"k = {k}: P at 1 h, 4 h, 16 h = {row}")
    print("a larger k makes the drop around the horizon sharper, so two agents with the same 50 percent horizon can differ a lot at one quarter or four times that length, and k was chosen by hand for this lab")

    section("3. Genuinely computing and simulating: compounding per-step reliability")
    for p in (0.99, 0.95):
        for n in (10, 50, 100):
            print(f"per-step success {p}, {n:3d} steps: formula {p ** n:.4f}")
    print("a step that works 99 percent of the time gives only 36.6 percent over 100 steps, and 95 percent per step gives 0.6 percent over 100 steps, so long tasks need very high per-step reliability or a way to recover from a failed step")
    mc = monte_carlo_chain(0.99, 100, 20000, 7)
    print(f"seeded Monte Carlo, 20000 trials, p=0.99, 100 steps: {mc:.4f} against formula {0.99 ** 100:.4f}")
    print("the simulated rate lands within sampling noise of the formula, which checks that the independence assumption in the formula matches what the simulation does; real steps are not independent and this proves nothing about a real agent")

    section("4. Genuinely computing: how many steps before success drops under 50 percent")
    for p in (0.999, 0.99, 0.95):
        print(f"per-step {p}: first step count with chain success <= 0.5 is {steps_for_target(p, 0.5)}")
    print("at 99.9 percent per step the chain falls under 50 percent at 693 steps, at 99 percent at 69 and at 95 percent at 14, which is the same idea as a horizon expressed in steps instead of hours")

    section("5. Genuinely computing: a doubling-time projection of the horizon")
    horizon = 4.0
    print("assumed doubling every 7 months, starting from a 4 hour horizon (an assumption, not a forecast):")
    for months in (0, 7, 14, 21, 28):
        print(f"  month {months:2d}: horizon {horizon * 2 ** (months / 7):6.1f} h")
    print("the projection is just exponential growth applied to an assumed starting value and doubling time; the lesson's own 14 to 28 to 56 hour example is treated as cited arithmetic and the doubling time here is invented")
    print("months needed to go from 4 h to 160 h at one doubling per 7 months:", round(7 * log2(160 / 4), 1))
    print("that figure follows from log2(40) times 7 and shows how sensitive a forecast is to the assumed doubling time, since a different assumed doubling time gives a very different answer")


if __name__ == "__main__":
    main()
