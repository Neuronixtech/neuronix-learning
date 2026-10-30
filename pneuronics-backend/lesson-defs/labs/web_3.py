"""Teaching implementation (our own): OSWorld-Human-style efficiency - gold trajectories, trajectory ratio, agent profiles and a combined harness."""
import random
import statistics

from web_2 import ClickAction, DesktopEnvironment, SCREENS, center_of

GOLD_A = [("settings", "Appearance"), ("appearance", "Dark")]
GOLD_B = [("settings", "Notifications"), ("notifications", "Back"), ("settings", "Appearance"), ("appearance", "Light"), ("appearance", "Dark")]


def run_clicks(plan, noise=0.0, rng=None, max_steps=12):
    """plan: list of (screen_expected, element). Re-plans from the real screen; a noisy click can miss and the step is repeated."""
    env = DesktopEnvironment()
    steps, queue = 0, list(plan)
    while queue and steps < max_steps:
        screen, name = queue[0]
        if env.screen != screen:
            break
        x, y = center_of(screen, name)
        if noise and rng:
            x, y = round(rng.gauss(x, noise)), round(rng.gauss(y, noise))
        before = env.screen, env.theme
        env.click(ClickAction(x, y))
        steps += 1
        hit = env.log[-1][3]
        if hit == name:
            queue.pop(0)
    return env, steps


def trajectory_ratio(steps, gold_steps):
    return steps / gold_steps


def profile_run(profile, rng):
    """Returns (success, steps). Probabilities are ASSUMED per profile."""
    if profile == "expert":
        env, steps = run_clicks(GOLD_A)
    elif profile == "detour":
        env, steps = run_clicks(GOLD_B)
    elif profile == "grounding-weak":
        env, steps = run_clicks(GOLD_A, noise=14, rng=rng)
    elif profile == "knowledge-weak":
        wrong = rng.random() < 0.5
        env, steps = run_clicks(([("settings", "Notifications"), ("notifications", "Back")] if wrong else []) + GOLD_A)
    else:
        raise ValueError(profile)
    return env.dark_mode(), steps


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Success is not the whole story: two correct trajectories")
    for name, gold in (("direct", GOLD_A), ("detour", GOLD_B)):
        env, steps = run_clicks(gold)
        print(f"{name:7} success={env.dark_mode()} steps={steps}")
    print("both reach dark mode; the second takes 5 steps for a 2-step job (ratio 2.5)")

    section("2. Genuinely checking: the ratio depends on which gold path is chosen")
    for label, gold_steps in (("gold = 2-click path", 2), ("gold = 5-click path", 5)):
        print(f"{label}: expert ratio {trajectory_ratio(2, gold_steps):.2f}, detour ratio {trajectory_ratio(5, gold_steps):.2f}")
    print("if a benchmark picks a long reference path, a wasteful agent can score a ratio of 1.0; the gold trajectory is part of the metric")

    section("3. Genuinely checking: the ratio on failed runs")
    env, steps = run_clicks([("settings", "Appearance")])
    print("agent stops after one step without setting dark mode: success", env.dark_mode(), "| ratio", trajectory_ratio(steps, 2), "(looks efficient: 0.50)")
    print("an agent that quits early has the best-looking ratio, so efficiency is only reported on successful runs, and success rate must sit beside it")

    section("4. Genuinely measuring: four profiles (assumed behaviour, seed 12, 2000 runs each)")
    rng = random.Random(12)
    print(f"{'profile':16} {'success':>8} {'mean steps (successes)':>24} {'mean ratio vs gold=2':>22}")
    summary = {}
    for profile in ("expert", "detour", "grounding-weak", "knowledge-weak"):
        res = [profile_run(profile, rng) for _ in range(2000)]
        ok = [s for good, s in res if good]
        summary[profile] = (len(ok) / len(res), statistics.mean(ok) if ok else float("nan"))
        print(f"{profile:16} {len(ok) / len(res):>8.1%} {summary[profile][1]:>24.2f} {summary[profile][1] / 2:>22.2f}")
    print("grounding-weak lost about 2 percent of runs and used 2.31 steps when it succeeded; knowledge-weak lost none but used 2.98 on average because half its runs took a 2-step detour; the two inefficiencies have different causes and different costs")

    section("5. Genuinely measuring: step budget versus success for a click-noisy agent")
    print(f"{'noise sigma':>12} " + "".join(f"{'budget=' + str(b):>11}" for b in (2, 3, 4, 6, 12)))
    for sigma in (6, 14, 25):
        rng = random.Random(21)
        row = ""
        for budget in (2, 3, 4, 6, 12):
            ok = 0
            for _ in range(3000):
                env, _ = run_clicks(GOLD_A, noise=sigma, rng=rng, max_steps=budget)
                ok += env.dark_mode()
            row += f"{ok / 3000:>11.1%}"
        print(f"{sigma:>12} {row}")
    print("a tight budget turns click noise into failure; a loose budget turns it into extra steps. Success stops at 97.8 to 98.1 percent (sigma 14) and 83.4 percent (sigma 25) even with 12 steps, because a noisy click can land on a different element and navigate away, which this scripted agent never recovers from; the small dip from 98.1 to 97.8 is sampling noise, each cell used its own random stream")

    section("6. Genuinely checking: wasted steps by cause for one noisy trajectory")
    rng = random.Random(5)
    env, steps = run_clicks(GOLD_A, noise=25, rng=rng)
    for screen, x, y, hit in env.log:
        print(f"screen={screen:10} click=({x:>4},{y:>4}) -> {hit}")
    useful = sum(1 for _, _, _, h in env.log if h in ("Appearance", "Dark"))
    print(f"{steps} steps, {useful} useful, {steps - useful} spent on misses; success {env.dark_mode()}")

    section("7. Combined report")
    print(f"{'profile':16} {'success':>8} {'mean steps (successes)':>24}")
    for profile, (succ, mean_steps) in summary.items():
        print(f"{profile:16} {succ:>8.1%} {mean_steps:>24.2f}")
    print("a report with only the success column would rank 'detour' with 'expert'; adding steps separates them")


if __name__ == "__main__":
    main()
