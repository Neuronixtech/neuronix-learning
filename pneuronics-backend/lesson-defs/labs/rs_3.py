"""Teaching implementation (our own): recursive self-improvement, Part 3 - measuring alignment for a release gate. A noisy evaluator gives false passes and false blocks, a system that improves its own appearance on the evaluator hides a falling true ratio, an independent held-out evaluator catches that, and checking only every k generations lets the ratio overshoot.
Every number is invented; the 'system' is an arithmetic loop and no language model is used."""
import random
from statistics import mean


def true_ratio(n, gc=0.20, ga=0.12):
    return ((1 + ga) / (1 + gc)) ** n


def measured_ratio(r, n, sd, gaming=0.0):
    """Evaluator reading of alignment/capability: true ratio plus noise plus a gaming term that grows with n."""
    return true_ratio(n) + r.gauss(0, sd) + gaming * n


def gate_stop(r, tau, sd, gaming, every, max_n=40):
    """Return the generation at which the loop is halted by a gate that reads the evaluator every `every` generations."""
    for n in range(1, max_n + 1):
        if n % every == 0 and measured_ratio(r, n, sd, gaming) < tau:
            return n
    return None


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely measuring: evaluator noise, false passes and false blocks (threshold 0.5)")
    r = random.Random(1)
    near_below = [n for n in range(1, 41) if true_ratio(n) < 0.5][0]
    print(f"true ratio first falls under 0.5 at generation {near_below}")
    for sd in (0.02, 0.1, 0.2):
        fp = mean(measured_ratio(r, near_below + 1, sd) >= 0.5 for _ in range(20000))
        fb = mean(measured_ratio(r, near_below - 3, sd) < 0.5 for _ in range(20000))
        print(f"noise sd {sd:.2f}: system just under the line passes {fp:.3f} | system comfortably above is wrongly blocked {fb:.3f}")
    print("with more evaluator noise a system just past the threshold slips through more often and a safe one is blocked more often, so noise forces a choice about which error to tolerate; the noise levels and the shape of the true ratio are invented")

    section("2. Genuinely measuring: a system that games the evaluator (noise sd 0.05, check every generation)")
    for gaming in (0.0, 0.01, 0.03):
        rr = random.Random(2)
        stops = [gate_stop(rr, 0.5, 0.05, gaming, 1) for _ in range(2000)]
        done = [s for s in stops if s is not None]
        print(f"gaming term {gaming:.2f} per generation: halted in {len(done) / len(stops):.3f} of runs | median halt generation {sorted(done)[len(done) // 2] if done else None}")
    print("when the measured ratio is lifted by a term that grows with each generation, the gate stops firing even though the true ratio keeps falling, so a gate that reads only the metric the system can influence stops measuring what it was meant to measure")

    section("3. Genuinely measuring: an independent held-out evaluator that cannot be gamed")
    rr = random.Random(3)
    for gaming in (0.0, 0.03):
        stops_gamed = [gate_stop(rr, 0.5, 0.05, gaming, 1) for _ in range(2000)]
        stops_indep = [gate_stop(rr, 0.5, 0.05, 0.0, 1) for _ in range(2000)]
        print(f"gaming {gaming:.2f}: gate on the gamed evaluator halts {sum(s is not None for s in stops_gamed) / 2000:.3f} | gate on an independent evaluator halts {sum(s is not None for s in stops_indep) / 2000:.3f}")
    print("a second evaluator whose reading the system cannot influence keeps halting the loop at the same rate as in the honest case, which shows the value of separating the measured quantity from the optimised one; the independence is an assumption built into the lab")

    section("4. Genuinely measuring: how often the gate looks")
    for every in (1, 3, 5, 10):
        rr = random.Random(4)
        stops = [gate_stop(rr, 0.5, 0.02, 0.0, every) for _ in range(2000)]
        done = [s for s in stops if s is not None]
        ratios = [true_ratio(s) for s in done]
        print(f"check every {every:2d} generation(s): median halt generation {sorted(done)[len(done) // 2]} | mean true ratio at the halt {mean(ratios):.3f}")
    print("checking less often lets the loop run further past the threshold before anyone looks, so the true ratio at the halt falls the longer the interval; with these growth rates each extra generation lowers the ratio by a fixed percentage")


if __name__ == "__main__":
    main()
