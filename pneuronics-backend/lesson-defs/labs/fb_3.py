"""Teaching implementation (our own): building a feedback ratchet with ownership and retirement, Part 3 - a continue, change or stop brief from measured outcome, guardrail, human review effort and cost, a before and
after check on a corrective action with its caveat, keep / revise / retire rules, and a bounded experiment budget. All numbers are ILLUSTRATIVE. No language model is used."""
import statistics


def brief(outcome_met, guardrail_ok, review_minutes, review_budget, cost_per_task, cost_ceiling):
    why = []
    if not guardrail_ok:
        return "stop", ["guardrail breached"]
    if not outcome_met:
        why.append("outcome target not met")
    if review_minutes > review_budget:
        why.append("human review effort above budget")
    if cost_per_task > cost_ceiling:
        why.append("cost above ceiling")
    if not why:
        return "continue", ["outcome met inside review and cost limits"]
    return ("change" if len(why) < 3 else "stop"), why


def effect(before, after):
    return statistics.mean(before), statistics.mean(after), round(100 * (statistics.mean(after) - statistics.mean(before)) / statistics.mean(before), 1)


def control_decision(recurrence_last_90d, replaced_by_stronger, still_blocking_real_failures):
    if replaced_by_stronger and recurrence_last_90d == 0:
        return "retire"
    if still_blocking_real_failures:
        return "keep"
    if recurrence_last_90d == 0:
        return "keep (no replacement, silence is not proof)"
    return "revise"


def within_budget(days_used, budget_days, cost_used, budget_cost):
    return days_used <= budget_days and cost_used <= budget_cost


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: a continue, change or stop brief (all numbers invented)")
    cases = [("all inside limits", True, True, 3.0, 4.0, 0.8, 1.0), ("outcome met, review effort too high", True, True, 6.5, 4.0, 0.8, 1.0), ("outcome missed and cost over", False, True, 3.0, 4.0, 1.4, 1.0),
             ("everything missed", False, True, 7.0, 4.0, 1.4, 1.0), ("guardrail breached, all else fine", True, False, 3.0, 4.0, 0.8, 1.0)]
    for label, *args in cases:
        print(f"{label:38} -> {brief(*args)}")
    print("a guardrail breach stopped the pilot even though everything else was inside limits, and missing all three limits gave stop while missing one or two gave change; this three-way rule and its limits are the lab's own")

    section("2. Genuinely computing: did the corrective action work? (ILLUSTRATIVE weekly counts)")
    before = [9, 7, 8, 10, 9, 8]
    after_fix = [4, 3, 5, 2, 3, 2]
    after_drift = [9, 8, 7, 9, 10, 8]
    for name, after in (("after a fix", after_fix), ("no real change", after_drift)):
        b, a, pct = effect(before, after)
        print(f"{name:16} mean before={b:.2f} after={a:.2f} change={pct}%")
    print("the first fall of about 63 percent (8.50 to 3.17) is large, and the second shows no change in the mean at all (8.50 to 8.50) although its weekly values moved between 7 and 10; six weeks each side with no control group, so even a large fall is a lead and not proof the action caused it")

    section("3. Genuinely running: keep, revise or retire")
    for label, args in (("replaced by stronger control, no recurrence", (0, True, False)), ("quiet for 90 days, nothing replaces it", (0, False, False)), ("still blocking real failures", (0, False, True)), ("recurring despite the control", (4, False, False))):
        print(f"{label:44} -> {control_decision(*args)}")
    print("a control is retired only when something stronger took over and the failure stayed away, quiet alone keeps it, and a control that is still stopping real failures is kept; recurrence despite the control sends it to revision")

    section("4. Genuinely running: a bounded experiment budget")
    for d, c in ((10, 800), (15, 800), (10, 1200), (16, 1300)):
        print(f"days {d:2} cost {c:4}: within a 15-day, 1000-unit budget = {within_budget(d, 15, c, 1000)}")
    print("both limits have to hold and either one stops the experiment for review; the 15 days and 1000 units are invented")

    section("5. Genuinely running: evidence labels in a brief")
    claims = [("median triage time fell to 1.9 minutes", "observation"), ("engineers say the tool is trusted", "reported"), ("it should scale to 10x load", "inference"), ("the replay passed 8 of 8", "simulation")]
    for c, k in claims:
        print(f"{k:11} {c}")
    print("a decision brief that labels each claim as observed, reported, inferred or simulated lets a reader weigh them differently, and only the first of these four supports a statement about what happened in real use")


if __name__ == "__main__":
    main()
