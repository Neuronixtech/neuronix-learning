"""Teaching implementation (our own): designing success metrics before the result exists, Part 1 - a Goal-Question-Metric plan, outcome metrics versus guardrails and counter-metrics, direction and inclusive thresholds,
plan validation, and a threshold that is edited after the result is known. The goal, metrics and numbers are made up. No language model is used."""
import hashlib
import json
from dataclasses import dataclass, field


@dataclass(frozen=True)
class Metric:
    name: str
    kind: str
    direction: str
    threshold: float
    question: str
    window: str = ""


@dataclass
class Plan:
    goal: str
    questions: list = field(default_factory=list)
    metrics: list = field(default_factory=list)


def validate(plan):
    errors = []
    if not plan.goal.strip():
        errors.append("goal is required")
    qs = set(plan.questions)
    for m in plan.metrics:
        if m.kind not in ("outcome", "guardrail", "counter"):
            errors.append(f"{m.name}: unknown kind {m.kind}")
        if m.direction not in ("higher", "lower"):
            errors.append(f"{m.name}: direction must be higher or lower")
        if m.question not in qs:
            errors.append(f"{m.name}: question is not part of the plan")
        if not m.window:
            errors.append(f"{m.name}: no measurement window")
    used = {m.question for m in plan.metrics}
    for q in plan.questions:
        if q not in used:
            errors.append(f"question without a metric: {q}")
    if not any(m.kind == "outcome" for m in plan.metrics):
        errors.append("no outcome metric")
    if not any(m.kind == "guardrail" for m in plan.metrics):
        errors.append("no guardrail metric")
    return errors


def passes(m, value):
    if value is None:
        return False
    return value >= m.threshold if m.direction == "higher" else value <= m.threshold


def lock(plan):
    body = {"goal": plan.goal, "metrics": [(m.name, m.kind, m.direction, m.threshold, m.window) for m in plan.metrics]}
    return hashlib.sha256(json.dumps(body, sort_keys=True).encode()).hexdigest()[:10]


def section(t):
    print(f"\n--- {t} ---")


Q1, Q2, Q3 = "How long does identification take?", "Is the identified service correct?", "Does it avoid unsafe actions?"


def good_plan():
    return Plan("reduce time to identify the affected service without more unsafe actions", [Q1, Q2, Q3], [
        Metric("median_minutes_to_identify", "outcome", "lower", 2.0, Q1, "30 days of replayed incidents"),
        Metric("service_accuracy", "outcome", "higher", 0.90, Q2, "30 days of replayed incidents"),
        Metric("unsafe_action_rate", "guardrail", "lower", 0.0, Q3, "30 days of replayed incidents"),
        Metric("human_review_minutes", "counter", "lower", 3.0, Q1, "30 days of replayed incidents")])


def main():
    section("1. Genuinely running: a Goal-Question-Metric plan (all numbers invented)")
    p = good_plan()
    print("goal:", p.goal)
    for m in p.metrics:
        print(f"  {m.kind:9} {m.name:28} {m.direction:6} than {m.threshold:<5} answers: {m.question}")
    print("plan errors:", validate(p))
    print("each metric is tied to a question and carries a direction, a threshold and a window, and the plan has an outcome metric, a guardrail and a counter-metric; the human_review_minutes counter-metric is there because a faster answer that takes longer to check is not an improvement")

    section("2. Genuinely running: what a plan without structure looks like")
    bad = Plan("", [Q1, Q2], [Metric("accuracy", "outcome", "higher", 0.9, "Some other question", ""), Metric("speed", "vibe", "up", 1.0, Q1, "")])
    for e in validate(bad):
        print(" -", e)
    print("a missing goal, a metric tied to a question the plan never asked, an unknown kind, a bad direction, missing windows, an unanswered question and no guardrail were all reported together instead of stopping at the first")

    section("3. Genuinely running: direction and inclusive thresholds")
    acc, mins = p.metrics[1], p.metrics[0]
    for m, v in ((acc, 0.90), (acc, 0.899), (acc, None), (mins, 2.0), (mins, 2.01)):
        print(f"{m.name:28} value={v!s:6} {m.direction:6} than {m.threshold} -> {'pass' if passes(m, v) else 'fail'}")
    print("exactly 0.90 passes a higher-is-better threshold and exactly 2.0 passes a lower-is-better one because the comparison is inclusive; a missing value fails instead of being skipped, since an unmeasured metric is not a passed one")

    section("4. Genuinely measuring: moving the threshold after the result")
    before = lock(p)
    result = 0.82
    print("result:", result, "| accuracy threshold 0.90 ->", "pass" if passes(acc, result) else "fail", "| lock", before)
    p2 = good_plan()
    p2.metrics[1] = Metric("service_accuracy", "outcome", "higher", 0.80, Q2, "30 days of replayed incidents")
    print("threshold edited to 0.80 ->", "pass" if passes(p2.metrics[1], result) else "fail", "| lock", lock(p2), "| same lock:", before == lock(p2))
    print("lowering the threshold turned 0.82 from a fail into a pass, and the lock changed, which is the signal a reviewer needs; the lock only helps if somebody compares it with the one recorded before the run")

    section("5. Genuinely running: which numbers are not on the plan")
    names = {m.name for m in p.metrics}
    for candidate in ("demo_satisfaction", "number_of_dashboards", "median_minutes_to_identify"):
        print(f"{candidate:28} on the plan: {candidate in names}")
    print("a number that answers none of the plan's questions is a vanity number here, and the check is a simple name lookup, so it flags what is absent and cannot judge whether a listed metric is a good one")


if __name__ == "__main__":
    main()
