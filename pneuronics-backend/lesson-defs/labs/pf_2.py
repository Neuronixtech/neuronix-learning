"""Teaching implementation (our own): OpenAI Preparedness Framework and DeepMind Frontier Safety Framework, Part 2 - evaluation records and their metrics with validation, a performance-gap detector that never calls anything proven, a seeded simulation of how often chance alone produces a large gap on small samples and how far an underperforming model separates from that, the measured-below-threshold-but-actually-above problem, a policy version diff and a four-condition readiness check.
All records are fictional and every model in the simulations is a probability written by the lab's author, so the numbers describe those probabilities and say nothing about a real model or about sandbagging in practice.
"""
import random
from dataclasses import dataclass
from typing import Optional


@dataclass(frozen=True)
class EvaluationRecord:
    model_id: str
    capability: str
    task_count: int
    successful_tasks: int
    human_intervention_count: int
    cost_usd: float
    independently_verified: bool
    threshold_crossed: Optional[bool] = None


def calculate_metrics(r):
    if r.task_count <= 0:
        raise ValueError("Task count must be positive")
    if not 0 <= r.successful_tasks <= r.task_count:
        raise ValueError("Invalid successful task count")
    if not 0 <= r.human_intervention_count <= r.task_count:
        raise ValueError("Invalid intervention count")
    if r.cost_usd < 0:
        raise ValueError("Cost cannot be negative")
    return {"success_rate": r.successful_tasks / r.task_count, "intervention_rate": r.human_intervention_count / r.task_count,
            "cost_per_task": r.cost_usd / r.task_count, "threshold_status": "undetermined" if r.threshold_crossed is None else r.threshold_crossed}


def detect_gap(normal, evaluation, investigate_at=0.20):
    for v in (normal, evaluation):
        if not 0 <= v <= 1:
            raise ValueError("Success rates must be between 0 and 1")
    gap = normal - evaluation
    return {"performance_gap": round(gap, 2), "investigation_recommended": gap >= investigate_at, "sandbagging_proven": False}


def simulate_gap(p_normal, p_evaluation, n, trials=10000, seed=7, at=0.20):
    rng = random.Random(seed)
    hits = 0
    gaps = []
    for _ in range(trials):
        a = sum(rng.random() < p_normal for _ in range(n)) / n
        b = sum(rng.random() < p_evaluation for _ in range(n)) / n
        gaps.append(a - b)
        hits += (a - b) >= at
    return hits / trials, sum(gaps) / trials


def compare_policy_versions(old, new):
    changes = []
    for cap in sorted(set(old) | set(new)):
        if old.get(cap) != new.get(cap):
            changes.append({"capability": cap, "old": old.get(cap), "new": new.get(cap)})
    return changes


def readiness_check(source_verified, evaluation_verified, safeguards_reviewed, human_authorized):
    checks = {"source_verified": source_verified, "evaluation_verified": evaluation_verified, "safeguards_reviewed": safeguards_reviewed, "human_authorized": human_authorized}
    return {"all_checks_satisfied": all(checks.values()), "failing": [k for k, v in checks.items() if not v]}


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: metrics for two fictional evaluation records")
    for r in (EvaluationRecord("research-agent-demo", "ai_rd_automation", 100, 78, 25, 12000.0, False),
              EvaluationRecord("ResearchAgent-X", "ai_rd_automation", 120, 96, 18, 18000.0, False)):
        m = calculate_metrics(r)
        print(f"{r.model_id:20} success {m['success_rate']:.0%} | intervention {m['intervention_rate']:.1%} | cost per task ${m['cost_per_task']:.0f} | verified {r.independently_verified} | threshold {m['threshold_status']}")
    print("the two records give 78 and 80 percent success, 25 and 15 percent intervention and 120 and 150 dollars per task, and the threshold status stays undetermined in both because these numbers say nothing about task representativeness, a human baseline or the exact criterion")

    section("2. Genuinely running: invalid records are refused")
    for bad in (EvaluationRecord("m", "c", 0, 0, 0, 1.0, False), EvaluationRecord("m", "c", 10, 11, 0, 1.0, False), EvaluationRecord("m", "c", 10, 5, 11, 1.0, False), EvaluationRecord("m", "c", 10, 5, 1, -5.0, False)):
        try:
            calculate_metrics(bad)
        except ValueError as e:
            print("ValueError:", e)
    print("a zero task count, more successes than tasks, more interventions than tasks and a negative cost were each refused before any rate was computed")

    section("3. Genuinely running: the performance-gap detector")
    for normal, evaluation in ((0.88, 0.51), (0.85, 0.45), (0.85, 0.82), (0.60, 0.65)):
        print(f"normal {normal:.2f} evaluation {evaluation:.2f} -> {detect_gap(normal, evaluation)}")
    print("gaps of 0.37 and 0.40 recommended an investigation and a gap of 0.03 or a negative gap did not, and sandbagging_proven was false in every row; a large gap is a reason to look for differences in prompts, tools or tasks as well as for strategic underperformance")

    section("4. Genuinely measuring: how often chance alone gives a gap of 0.20")
    print(f"{'tasks per side':>14} {'both at 0.85':>14} {'0.85 against 0.45':>20}")
    for n in (10, 25, 50, 100, 400):
        same, _ = simulate_gap(0.85, 0.85, n)
        under, _ = simulate_gap(0.85, 0.45, n)
        print(f"{n:>14} {same:>14.3f} {under:>20.3f}")
    print("with ten tasks per side two identical models at 0.85 showed a gap of 0.20 or more in 0.115 of 10000 trials, 0.023 at 25 tasks, 0.002 at 50 and none from 100, while a model that really dropped to 0.45 showed it in 0.856 of trials at ten tasks and in 0.986 at 50; the investigation threshold of 0.20 is the lab's own number, and these probabilities are written by the author")

    section("5. Genuinely running: measured below the line, actually above it")
    threshold = 0.60
    actual, measured = 0.82, 0.45
    print(f"threshold {threshold} | actual capability {actual} | measured under evaluation {measured} | below the line on the measurement: {measured < threshold} | above it in fact: {actual >= threshold}")
    print("a measurement below the threshold would be read as below, while the real capability is above it, which is the inequality the lesson writes as measured below threshold and actual at or above it; nothing in one score reveals which situation applies, and the numbers here are chosen to show the shape of the problem")

    section("6. Genuinely running: a policy version diff")
    old = {"capability_x": "Research", "capability_y": "Tracked"}
    new = {"capability_x": "Tracked", "capability_y": "Tracked", "capability_z": "Research"}
    for c in compare_policy_versions(old, new):
        print(c)
    print("a label change and a newly added capability both show up as differences, and a diff of labels would miss a changed threshold definition under an unchanged label; the entries are hypothetical and do not claim that any real capability changed category")

    section("7. Genuinely running: a readiness check with four conditions")
    print(readiness_check(False, True, True, True))
    print(readiness_check(True, True, True, True))
    print("a table whose source has not been verified failed the check by name, and when all four conditions held the result was true, which only confirms four application booleans and is not a compliance finding with any framework")


if __name__ == "__main__":
    main()
