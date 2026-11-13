"""Teaching implementation (our own): designing success metrics before the result exists, Part 2 - evaluating observations against a fixed plan with missing values, the guardrail-removal experiment on three
made-up candidates, a pass / fail / collect-more decision policy, and a JSON report that carries the plan. All candidate numbers are invented. No language model is used."""
import json

PLAN = {
    "median_minutes_to_identify": ("outcome", "lower", 2.0),
    "service_accuracy": ("outcome", "higher", 0.90),
    "unsafe_action_rate": ("guardrail", "lower", 0.0),
}

CANDIDATES = {
    "A: careful assistant": {"median_minutes_to_identify": 1.8, "service_accuracy": 0.93, "unsafe_action_rate": 0.0},
    "B: fast but unsafe": {"median_minutes_to_identify": 0.6, "service_accuracy": 0.95, "unsafe_action_rate": 0.04},
    "C: slow and accurate": {"median_minutes_to_identify": 3.5, "service_accuracy": 0.97, "unsafe_action_rate": 0.0},
}


def ok(rule, value):
    kind, direction, thr = rule
    if value is None:
        return False
    return value >= thr if direction == "higher" else value <= thr


def evaluate(obs, plan=PLAN):
    res = {n: ("missing" if obs.get(n) is None else ("pass" if ok(r, obs.get(n)) else "fail")) for n, r in plan.items()}
    return res


def decide(res, plan=PLAN):
    if any(v == "missing" for v in res.values()):
        return "collect more evidence"
    if any(v == "fail" for n, v in res.items() if plan[n][0] == "guardrail"):
        return "fail (guardrail)"
    if all(v == "pass" for v in res.values()):
        return "pass"
    return "fail (outcome)"


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: three invented candidates against the fixed plan")
    for name, obs in CANDIDATES.items():
        r = evaluate(obs)
        print(f"{name:24} {r} -> {decide(r)}")
    print("A passed all three metrics, B passed both outcome metrics and failed the guardrail, and C passed accuracy and the guardrail and missed on time; only A is a pass overall, and the numbers are invented")

    section("2. Genuinely running: remove the guardrail and the unsafe candidate wins")
    no_guard = {k: v for k, v in PLAN.items() if v[0] != "guardrail"}
    for name, obs in CANDIDATES.items():
        r = evaluate(obs, no_guard)
        print(f"{name:24} {decide(r, no_guard)}")
    ranking = sorted(CANDIDATES, key=lambda n: CANDIDATES[n]["median_minutes_to_identify"])
    print("fastest first:", ranking)
    print("without the guardrail the plan accepts both A and B, and a team that ranks by speed would pick B, the candidate with a 4 percent unsafe-action rate; the guardrail is what keeps a speed target from rewarding risk")

    section("3. Genuinely running: missing values")
    partial = {"median_minutes_to_identify": 1.5, "service_accuracy": None}
    r = evaluate(partial)
    print(r, "->", decide(r))
    print("a metric that was not measured appears as missing and the decision is to collect more evidence, instead of treating the gap as a pass or silently dropping it from the plan")

    section("4. Genuinely running: boundary values")
    for v in (0.90, 0.8999, 2.0, 2.0001):
        for n, rule in PLAN.items():
            if (n == "service_accuracy" and v < 1) or (n == "median_minutes_to_identify" and v >= 1):
                print(f"{n:28} {v:<7} -> {'pass' if ok(rule, v) else 'fail'}")
    print("a value exactly on the threshold passes and a value just beside it fails, which is the behaviour the plan promised; floats near a threshold can still surprise, and the lab does not round")

    section("5. Genuinely running: a JSON report that carries the plan")
    best = "A: careful assistant"
    report = {"plan": {n: list(r) for n, r in PLAN.items()}, "candidate": best, "observed": CANDIDATES[best], "results": evaluate(CANDIDATES[best]), "decision": decide(evaluate(CANDIDATES[best]))}
    text = json.dumps(report, sort_keys=True)
    back = json.loads(text)
    print("report keys:", sorted(back), "| decision:", back["decision"], "| round trip equal:", back == report)
    print("the report stores the plan next to the observations, so a reader can see which thresholds the decision used; it is built in memory and the lab does not write outputs/measurement-report.json")


if __name__ == "__main__":
    main()
