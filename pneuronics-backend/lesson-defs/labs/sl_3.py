"""Teaching implementation (our own): choosing the smallest slice that can change the decision, Part 3 - the decision rule written before the run, five possible experiment outcomes, stop rules, a safety gate and
human approval for a slice that touches production, and score calibration. The thresholds, budgets and outcomes are made up. No language model is used."""


def outcome(accuracy, n, min_n, accept, reject_below, safe, in_budget):
    if not safe:
        return "blocked_by_safety"
    if not in_budget:
        return "stopped_over_budget"
    if n < min_n:
        return "inconclusive_too_small"
    if accuracy >= accept:
        return "supports"
    if accuracy < reject_below:
        return "rejects"
    return "ambiguous"


DECISIONS = {
    "supports": "build the next slice",
    "rejects": "revise the approach or stop",
    "ambiguous": "narrow the question and rerun",
    "inconclusive_too_small": "collect more records",
    "blocked_by_safety": "redesign as read-only",
    "stopped_over_budget": "review the estimate with the owner",
}


def needs_approval(touches_production, writes_data):
    return touches_production or writes_data


def spent(days_used, budget):
    return days_used <= budget


def rank_with(cands, w_effort, w_risk):
    return sorted(cands, key=lambda c: (w_effort * c[1] + w_risk * c[2], c[0]))[0][0]


def section(t):
    print(f"\n--- {t} ---")


def main():
    rule = dict(min_n=20, accept=0.85, reject_below=0.60)
    section("1. Genuinely running: the decision for every outcome is written before the run (thresholds invented)")
    print("rule:", rule)
    for k, v in DECISIONS.items():
        print(f"{k:24} -> {v}")
    print("five measured outcomes and a safety block each have a named next action, so nobody has to improvise after seeing the number; the thresholds are the lab's own")

    section("2. Genuinely computing: the same accuracy under different conditions")
    cases = [("strong result", 0.90, 40, True, True), ("weak result", 0.50, 40, True, True), ("middle result", 0.72, 40, True, True), ("good but tiny sample", 0.95, 8, True, True),
             ("good but not read-only", 0.95, 40, False, True), ("good but over budget", 0.95, 40, True, False)]
    for label, acc, n, safe, budget in cases:
        o = outcome(acc, n, rule["min_n"], rule["accept"], rule["reject_below"], safe, budget)
        print(f"{label:24} acc={acc:.2f} n={n:2} safe={safe!s:5} budget={budget!s:5} -> {o:24} then: {DECISIONS[o]}")
    print("a 0.95 accuracy gave three different outcomes depending on sample size, safety and budget, so accuracy alone never decides; safety is checked first and the sample size before the threshold, which is an ordering choice made in this lab")

    section("3. Genuinely running: a stop rule ends an experiment that keeps growing")
    budget = 5
    for day in (3, 5, 6, 9):
        print(f"day {day}: within budget of {budget} days = {spent(day, budget)}")
    print("the budget is checked against days used, and an experiment past it stops for review instead of quietly becoming the project; the five-day budget is invented")

    section("4. Genuinely running: slices that touch production need a person")
    for label, prod, writes in (("replay on a copy", False, False), ("shadow run against live reads", True, False), ("write recommendation to ticket", False, True), ("auto-remediate", True, True)):
        print(f"{label:34} touches production={prod!s:5} writes={writes!s:5} approval required={needs_approval(prod, writes)}")
    print("any slice that reads live production or writes anywhere needs an approval in this lab, which is stricter than a team may want for a read-only shadow run; the rule is a conservative default and the lab did not model who approves")

    section("5. Genuinely measuring: uncalibrated scores flip the answer")
    cands = [("slice A", 4, 4), ("slice B", 7, 2), ("slice C", 10, 1)]
    for we, wr in ((1, 1), (1, 3), (3, 1), (1, 10)):
        print(f"w_effort={we:2} w_risk={wr:2} -> {rank_with(cands, we, wr)}")
    print("the same three candidates produce slice A, B or C depending on weights nobody calibrated (at weights 1 and 3, slices B and C tied at 13 and the name order picked B), which is why the eligibility gate comes first and why the weights have to be agreed and recorded before the comparison; these candidates and weights are invented")


if __name__ == "__main__":
    main()
