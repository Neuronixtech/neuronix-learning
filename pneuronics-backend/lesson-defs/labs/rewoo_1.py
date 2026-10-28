"""Teaching implementation (our own): ReWOO Part 1 - PlanNode, a deterministic Planner and the plan DAG.

No tools run here. The planner only describes work; it never knows a runtime value.
"""
from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any

KNOWN_TOOLS = {"capital_of", "population_of", "verify_capital", "slow_lookup"}


@dataclass
class PlanNode:
    evidence_id: str
    tool: str
    arguments: dict[str, Any]
    dependencies: list[str] = field(default_factory=list)


class Planner:
    """A deterministic stand-in for an LLM planner. The contract is the same: question -> plan."""

    def plan(self, question: str) -> list[PlanNode]:
        q = question.lower()
        if "compare" in q and "france" in q and "germany" in q:
            return [
                PlanNode("E1", "capital_of", {"country": "France"}),
                PlanNode("E2", "capital_of", {"country": "Germany"}),
                PlanNode("E3", "population_of", {"city": "#E1"}, ["E1"]),
                PlanNode("E4", "population_of", {"city": "#E2"}, ["E2"]),
            ]
        if "capital" in q and "france" in q:
            return [
                PlanNode("E1", "capital_of", {"country": "France"}),
                PlanNode("E2", "population_of", {"city": "#E1"}, ["E1"]),
            ]
        return []


def show(plan):
    for n in plan:
        print(f"{n.evidence_id}: {n.tool}({n.arguments}) depends_on={n.dependencies}")


def levels(plan):
    """Group nodes into dependency levels (Kahn's algorithm). Raises on a cycle or missing dependency."""
    remaining = {n.evidence_id: n for n in plan}
    done: set[str] = set()
    out = []
    while remaining:
        ready = [i for i, n in remaining.items() if all(d in done for d in n.dependencies)]
        if not ready:
            raise ValueError("no progress possible: cycle or missing dependency among " + ", ".join(sorted(remaining)))
        out.append(sorted(ready))
        done.update(ready)
        for i in ready:
            del remaining[i]
    return out


def validate(plan):
    """Our contract checks. Returns a list of problems (empty = valid)."""
    problems = []
    ids = [n.evidence_id for n in plan]
    if len(set(ids)) != len(ids):
        problems.append("duplicate evidence ids")
    for n in plan:
        if n.tool not in KNOWN_TOOLS:
            problems.append(f"{n.evidence_id}: unknown tool {n.tool}")
        for d in n.dependencies:
            if d == n.evidence_id:
                problems.append(f"{n.evidence_id}: depends on itself")
            elif d not in ids:
                problems.append(f"{n.evidence_id}: missing dependency {d}")
    if not problems:
        try:
            levels(plan)
        except ValueError as exc:
            problems.append(str(exc))
    return problems


def section(t):
    print(f"\n--- {t} ---")


def main():
    planner = Planner()

    section("1. The plan for the France question")
    question = "What is the population of the capital of France, rounded to millions?"
    print("QUESTION:", question)
    plan = planner.plan(question)
    show(plan)

    section("2. The planner knows structure, not values")
    text = " ".join(f"{n.arguments}" for n in plan)
    print("mentions Paris:", "Paris" in text, "| mentions 2148000:", "2148000" in text)
    print("E2 argument is a reference:", plan[1].arguments["city"], "| depends on:", plan[1].dependencies)

    section("3. A parallel plan: dependency levels")
    plan2 = planner.plan("Compare the populations of the capitals of France and Germany.")
    show(plan2)
    print("levels:", levels(plan2))
    print("sequential steps:", len(plan2), "| dependency levels:", len(levels(plan2)))

    section("4. The plan contract")
    def n(i, tool="capital_of", deps=None, args=None):
        return PlanNode(i, tool, args or {}, deps or [])

    cases = {
        "valid France plan": plan,
        "duplicate ids": [n("E1"), n("E1")],
        "unknown tool": [n("E1", "delete_database")],
        "missing dependency": [n("E1", deps=["E99"])],
        "self dependency": [n("E1", deps=["E1"])],
        "two-node cycle": [n("E1", deps=["E2"]), n("E2", deps=["E1"])],
    }
    for name, p in cases.items():
        probs = validate(p)
        print(f"{name:<20} -> {'OK' if not probs else probs}")

    section("5. Cost model (arithmetic on stated assumptions, NOT a measurement)")
    k = 300  # assumed tokens added per ReAct step
    print("assume each ReAct step adds k = 300 tokens and the next call re-reads all earlier steps")
    print(f"{'steps n':>8} {'ReAct re-read tokens k*n(n+1)/2':>34} {'plan-first: plan + solve (2 calls of ~n*k)':>46}")
    for steps in (3, 10, 20, 40):
        react = k * steps * (steps + 1) // 2
        plan_first = 2 * steps * k
        print(f"{steps:>8} {react:>34} {plan_first:>46}")
    print("ReAct grows as n^2, the plan-first figure grows as n. Caching, tool-result size and replanning change real numbers.")


if __name__ == "__main__":
    main()
