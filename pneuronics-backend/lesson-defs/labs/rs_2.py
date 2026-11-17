"""Teaching implementation (our own): recursive self-improvement, Part 2 - a release gate on the alignment-to-capability ratio and an effort split between the two. The gate halts a loop whose ratio falls under a threshold; an allocation fraction f decides how much of each generation's improvement effort goes to alignment.
Growth rules and thresholds are invented for the lab; there is no real system and no language model."""


def step(c, a, f, gc=0.20, ga=0.20):
    """One generation: effort fraction f goes to alignment, the rest to capability. The growth available is gc for capability and ga for alignment."""
    return c * (1 + gc * (1 - f)), a * (1 + ga * f)


def run_loop(f, gens, tau=None, gc=0.20, ga=0.20):
    c = a = 100.0
    for n in range(1, gens + 1):
        c, a = step(c, a, f, gc, ga)
        if tau is not None and a / c < tau:
            return n, c, a, "halted"
    return gens, c, a, "ran all generations"


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: no gate, different effort splits (20 generations)")
    for f in (0.0, 0.25, 0.5, 0.75):
        n, c, a, why = run_loop(f, 20)
        print(f"alignment share f={f:.2f}: capability {c:8.1f} | alignment {a:8.1f} | alignment/capability {a / c:5.2f}")
    print("with all effort on capability alignment never moves, and the ratio falls only as fast as capability rises; with half the effort each, both grow the same amount per generation from the same start, so the ratio stays at 1.00; the growth formula is a modelling choice")

    section("2. Genuinely running: a gate with threshold 0.5 on alignment/capability")
    for f in (0.0, 0.25, 0.4, 0.5):
        n, c, a, why = run_loop(f, 40, tau=0.5)
        print(f"f={f:.2f}: {why} after {n:2d} generations | capability {c:8.1f} | alignment/capability {a / c:5.2f}")
    print("a loop that puts nothing into alignment is halted after a few generations, a loop with a small share is halted later and a loop that keeps the ratio from falling below the threshold runs to the limit; the gate stops the loop but does not by itself repair the ratio")

    section("3. Genuinely computing: the cost in capability of keeping the ratio at 1")
    for f in (0.0, 0.25, 0.5):
        _, c, a, _ = run_loop(f, 20)
        print(f"f={f:.2f}: capability after 20 generations {c:8.1f} ({c / run_loop(0.0, 20)[1]:.3f} of the all-capability run)")
    print("moving effort to alignment slows capability growth, which is the price of holding the ratio, and with these rules half the effort cuts final capability to 17.5 percent of the all-capability run and a quarter of the effort to 42.7 percent; a real tradeoff would not be this clean")

    section("4. Genuinely measuring: how a slower alignment rate changes the needed split (threshold 0.5, 40 generations)")
    for ga in (0.20, 0.10, 0.05):
        ok = None
        for f100 in range(0, 101, 5):
            f = f100 / 100
            n, c, a, why = run_loop(f, 40, tau=0.5, ga=ga)
            if why == "ran all generations":
                ok = f
                break
        print(f"alignment growth available {ga:.2f}: smallest tried f that avoids the halt {ok}")
    print("when alignment research is harder, meaning it gives less growth per unit of effort, the loop needs a larger share of effort on alignment or it halts, and the slowest rate needed 0.75 of the effort against 0.5 for the fastest; the grid has steps of 0.05 and the growth rules are invented")


if __name__ == "__main__":
    main()
