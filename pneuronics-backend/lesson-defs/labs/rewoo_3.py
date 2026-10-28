"""Teaching implementation (our own): ReWOO Part 3 - Solver, validation, replanning and the full pipeline."""
from __future__ import annotations

from typing import Any

import rewoo_2 as r2
from rewoo_1 import PlanNode, Planner, validate as full_validate
from rewoo_2 import DAGExecutor, Worker, WorkerResult, TOOL_REGISTRY


class NaiveSolver:
    """First version: capital from the first capital node, population from the last good population node."""

    def solve(self, question: str, plan: list[PlanNode], evidence: dict[str, WorkerResult]) -> str:
        pop_nodes = [n for n in plan if n.tool == "population_of"]
        cap_nodes = [n for n in plan if n.tool == "capital_of"]
        if "compare" in question.lower():
            return self._compare(plan, evidence)
        capital = evidence.get(cap_nodes[0].evidence_id) if cap_nodes else None
        if capital is None:
            return "I could not determine the capital because capital evidence is missing."
        if not capital.ok:
            return f"I could not determine the capital: {capital.error}"
        ok_pops = [evidence[n.evidence_id] for n in pop_nodes if n.evidence_id in evidence and evidence[n.evidence_id].ok]
        if not ok_pops:
            failed = [evidence[n.evidence_id] for n in pop_nodes if n.evidence_id in evidence]
            why = failed[-1].error if failed else "population evidence is missing"
            return f"The capital is {capital.value}, but I could not determine its population: {why}"
        millions = round(ok_pops[-1].value / 1_000_000)
        return f"The capital of France is {capital.value}, with a population of approximately {millions} million."

    def _compare(self, plan, evidence):
        rows = []
        for n in plan:
            if n.tool == "population_of":
                city = evidence[n.dependencies[0]]
                pop = evidence[n.evidence_id]
                if not (city.ok and pop.ok):
                    return "I could not compare: " + (pop.error or city.error)
                rows.append((city.value, pop.value))
        rows.sort(key=lambda r: -r[1])
        return f"{rows[0][0]} has the larger population ({rows[0][1]:,} vs {rows[1][1]:,} for {rows[1][0]})."


class Solver(NaiveSolver):
    """Fixed: the capital reported is the one the successful population node actually depended on."""

    def solve(self, question, plan, evidence):
        if "compare" in question.lower():
            return self._compare(plan, evidence)
        good = [n for n in plan if n.tool == "population_of" and n.evidence_id in evidence and evidence[n.evidence_id].ok]
        if good:
            node = good[-1]
            city = evidence[node.dependencies[0]].value
            millions = round(evidence[node.evidence_id].value / 1_000_000)
            return f"The capital of France is {city}, with a population of approximately {millions} million."
        return super().solve(question, plan, evidence)


def pasted_validate_plan(plan, registry):
    """The validator as the lesson writes it: ids, tools, missing and self dependencies. No cycle check."""
    ids = {n.evidence_id for n in plan}
    if len(ids) != len(plan):
        raise ValueError("Duplicate evidence IDs.")
    for n in plan:
        if n.tool not in registry:
            raise ValueError(f"Unknown tool: {n.tool}")
        for d in n.dependencies:
            if d not in ids:
                raise ValueError(f"{n.evidence_id} depends on missing node {d}")
            if d == n.evidence_id:
                raise ValueError(f"{n.evidence_id} cannot depend on itself.")


def verify_capital(country: str) -> str:
    """A second, independent source used by the replanner."""
    return {"France": "Paris", "Germany": "Berlin", "Italy": "Rome"}[country]


class Replanner:
    """Event-driven: replans only when a population node failed because its city is suspicious."""

    def replan(self, plan, evidence):
        failed = [n for n in plan if n.tool == "population_of" and not evidence[n.evidence_id].ok]
        if not failed:
            return None
        return plan + [PlanNode("E3", "verify_capital", {"country": "France"}),
                       PlanNode("E4", "population_of", {"city": "#E3"}, ["E3"])]


def run(question, registry=TOOL_REGISTRY, verbose=True):
    planner, solver = Planner(), Solver()
    ex = DAGExecutor(Worker(registry))
    plan = planner.plan(question)
    pasted_validate_plan(plan, registry)
    evidence = ex.execute(plan)
    answer = solver.solve(question, plan, evidence)
    if verbose:
        print("QUESTION:", question)
        print("=== PLAN ===")
        for n in plan:
            print(f"{n.evidence_id}: {n.tool}({n.arguments}) depends_on={n.dependencies}")
        print("=== EVIDENCE ===")
        r2.show_evidence(evidence)
        print("=== FINAL ANSWER ===")
        print(answer)
    return plan, evidence, answer


def section(t):
    print(f"\n--- {t} ---")


def main():
    Q = "What is the population of the capital of France, rounded to millions?"

    section("1. The complete pipeline")
    run(Q)

    section("2. Solver degradation: evidence missing, failed, partial")
    solver = Solver()
    plan = Planner().plan(Q)
    print("E1 missing :", solver.solve(Q, plan, {}))
    print("E1 failed  :", solver.solve(Q, plan, {"E1": WorkerResult(False, error="Capital service unavailable")}))
    print("E2 failed  :", solver.solve(Q, plan, {"E1": WorkerResult(True, "Paris"), "E2": WorkerResult(False, error="Population service unavailable")}))

    section("3. A bad capital from the data source ('Atlantis')")
    saved = dict(r2.CAPITALS)
    r2.CAPITALS["France"] = "Atlantis"
    _, ev, ans = run(Q, verbose=False)
    r2.CAPITALS.update(saved)
    r2.show_evidence(ev)
    print("answer:", ans)

    section("4. Event-driven replanning recovers")
    r2.CAPITALS["France"] = "Atlantis"
    plan1 = Planner().plan(Q)
    ev1 = DAGExecutor(Worker({**TOOL_REGISTRY, "verify_capital": verify_capital})).execute(plan1)
    print("first attempt:", solver.solve(Q, plan1, ev1))
    new_plan = Replanner().replan(plan1, ev1)
    print("replanner added nodes:", [n.evidence_id + ":" + n.tool for n in new_plan[len(plan1):]])
    ev2 = DAGExecutor(Worker({**TOOL_REGISTRY, "verify_capital": verify_capital})).execute(new_plan)
    r2.show_evidence(ev2)
    print("after replan, NaiveSolver:", NaiveSolver().solve(Q, new_plan, ev2))
    print("after replan, fixed Solver:", solver.solve(Q, new_plan, ev2))
    r2.CAPITALS.update(saved)

    section("5. The lesson's validate_plan against a cyclic plan")
    cyc = [PlanNode("E1", "capital_of", {"country": "#E2"}, ["E2"]), PlanNode("E2", "capital_of", {"country": "#E1"}, ["E1"])]
    try:
        pasted_validate_plan(cyc, TOOL_REGISTRY)
        print("pasted validate_plan: ACCEPTED the cyclic plan")
    except ValueError as exc:
        print("pasted validate_plan rejected it:", exc)
    print("with cycle check    :", full_validate(cyc))
    try:
        DAGExecutor(Worker(TOOL_REGISTRY)).execute(cyc)
    except RuntimeError as exc:
        print("executor at runtime :", exc)

    section("6. A parallel comparison through the same pipeline")
    run("Compare the populations of the capitals of France and Germany.")

    section("7. Retry versus replan")
    attempts = []

    def flaky(city):
        attempts.append(city)
        if len(attempts) < 3:
            raise TimeoutError("temporary timeout")
        return 2_148_000

    def with_retry(fn, tries=3):
        last = None
        for _ in range(tries):
            try:
                return fn()
            except TimeoutError as exc:
                last = exc
        raise last

    print("flaky tool with bounded retry ->", with_retry(lambda: flaky("Paris")), "after", len(attempts), "attempts")
    try:
        with_retry(lambda: (_ for _ in ()).throw(KeyError("unknown city")))
    except KeyError as exc:
        print("a non-transient error is not retried; it is a replanning signal:", exc)


if __name__ == "__main__":
    main()
