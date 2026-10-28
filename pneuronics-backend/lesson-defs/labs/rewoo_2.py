"""Teaching implementation (our own): ReWOO Part 2 - Worker, #E references and the DAG executor."""
from __future__ import annotations

import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass
from typing import Any, Callable

from rewoo_1 import PlanNode, Planner, levels

CAPITALS = {"France": "Paris", "Germany": "Berlin", "Italy": "Rome"}
POPULATIONS = {"Paris": 2_148_000, "Berlin": 3_755_000, "Rome": 2_760_000}
DELAY = 0.0  # seconds each tool sleeps, set by the timing experiments


def capital_of(country: str) -> str:
    time.sleep(DELAY)
    if country not in CAPITALS:
        raise ValueError(f"No capital data for {country}")
    return CAPITALS[country]


def population_of(city: str) -> int:
    time.sleep(DELAY)
    if city not in POPULATIONS:
        raise ValueError(f"No population data for {city}")
    return POPULATIONS[city]


TOOL_REGISTRY: dict[str, Callable[..., Any]] = {"capital_of": capital_of, "population_of": population_of}


@dataclass
class WorkerResult:
    ok: bool
    value: Any = None
    error: str | None = None


class Worker:
    def __init__(self, registry):
        self.registry = registry

    def execute(self, node: PlanNode, arguments: dict[str, Any]) -> WorkerResult:
        try:
            if node.tool not in self.registry:
                raise ValueError(f"Unknown tool: {node.tool}")
            return WorkerResult(ok=True, value=self.registry[node.tool](**arguments))
        except Exception as exc:
            return WorkerResult(ok=False, error=str(exc))


def resolve_value(value: Any, evidence: dict[str, WorkerResult]) -> Any:
    if isinstance(value, str) and value.startswith("#"):
        evidence_id = value[1:]
        if evidence_id not in evidence:
            raise KeyError(f"Missing evidence: {evidence_id}")
        result = evidence[evidence_id]
        if not result.ok:
            raise RuntimeError(f"Dependency {evidence_id} failed: {result.error}")
        return result.value
    return value


def resolve_arguments(arguments, evidence):
    return {k: resolve_value(v, evidence) for k, v in arguments.items()}


def is_ready(node: PlanNode, evidence) -> bool:
    return all(d in evidence for d in node.dependencies)


class DAGExecutor:
    def __init__(self, worker: Worker, max_workers: int = 4):
        self.worker = worker
        self.max_workers = max_workers
        self.rounds: list[list[str]] = []
        self.completed_order: list[str] = []

    def _run_node(self, node, evidence):
        try:
            arguments = resolve_arguments(node.arguments, evidence)
        except (KeyError, RuntimeError) as exc:
            return node.evidence_id, WorkerResult(ok=False, error=str(exc))
        return node.evidence_id, self.worker.execute(node, arguments)

    def execute(self, plan: list[PlanNode]) -> dict[str, WorkerResult]:
        evidence: dict[str, WorkerResult] = {}
        pending = {n.evidence_id: n for n in plan}
        self.rounds, self.completed_order = [], []
        with ThreadPoolExecutor(max_workers=self.max_workers) as pool:
            while pending:
                ready = [n for n in pending.values() if is_ready(n, evidence)]
                if not ready:
                    raise RuntimeError("Plan cannot make progress. Possible cycle or missing dependency.")
                self.rounds.append([n.evidence_id for n in ready])
                futures = [pool.submit(self._run_node, n, evidence) for n in ready]
                # collect in completion order to expose it, then store by id
                for fut in as_completed(futures):
                    eid, res = fut.result()
                    evidence[eid] = res
                    self.completed_order.append(eid)
                    del pending[eid]
        return evidence


def show_evidence(evidence):
    for eid in sorted(evidence):
        r = evidence[eid]
        print(f"{eid}: {r.value if r.ok else 'ERROR: ' + str(r.error)}")


def section(t):
    print(f"\n--- {t} ---")


def main():
    global DELAY
    planner = Planner()
    ex = DAGExecutor(Worker(TOOL_REGISTRY))

    section("1. Executing the France plan")
    plan = planner.plan("What is the population of the capital of France, rounded to millions?")
    evidence = ex.execute(plan)
    print("rounds:", ex.rounds)
    show_evidence(evidence)

    section("2. E1 versus #E1")
    print("evidence['E1'] is a WorkerResult:", evidence["E1"])
    print("resolve_value('#E1')        ->", repr(resolve_value("#E1", evidence)))
    print("resolve_value('USD')        ->", repr(resolve_value("USD", evidence)))
    print("resolve_value(42)           ->", repr(resolve_value(42, evidence)))
    print("resolve_arguments           ->", resolve_arguments({"city": "#E1", "unit": "millions"}, evidence))

    section("3. A literal string that starts with '#'")
    try:
        print(resolve_value("#hashtag", evidence))
    except KeyError as exc:
        print("KeyError:", exc)
    print("a literal '#hashtag' is indistinguishable from a reference, so the reference syntax must be reserved")

    section("4. Failure propagation: capital_of('Atlantis')")
    bad_plan = [PlanNode("E1", "capital_of", {"country": "Atlantis"}),
                PlanNode("E2", "population_of", {"city": "#E1"}, ["E1"])]
    show_evidence(ex.execute(bad_plan))

    section("5. Failure localization in a diamond-shaped plan")
    diamond = [
        PlanNode("E1", "capital_of", {"country": "France"}),
        PlanNode("E2", "population_of", {"city": "#E1"}, ["E1"]),
        PlanNode("E3", "capital_of", {"country": "Atlantis"}, ["E1"]),
        PlanNode("E4", "population_of", {"city": "#E3"}, ["E3"]),
        PlanNode("E5", "capital_of", {"country": "Italy"}),
    ]
    print("levels:", levels(diamond))
    show_evidence(ex.execute(diamond))

    section("6. Plans that cannot make progress")
    cyc = [PlanNode("E1", "capital_of", {"country": "#E2"}, ["E2"]), PlanNode("E2", "capital_of", {"country": "#E1"}, ["E1"])]
    miss = [PlanNode("E1", "population_of", {"city": "#E99"}, ["E99"])]
    for name, p in (("cycle", cyc), ("missing dependency", miss)):
        try:
            ex.execute(p)
        except RuntimeError as exc:
            print(f"{name:<19} -> RuntimeError: {exc}")

    section("7. Completion order is not plan order")
    ordered = [PlanNode("E1", "capital_of", {"country": "France"}),
               PlanNode("E2", "capital_of", {"country": "Germany"}),
               PlanNode("E3", "capital_of", {"country": "Italy"})]
    delays = {"France": 0.30, "Germany": 0.05, "Italy": 0.15}

    def delayed(country):
        time.sleep(delays[country])
        return CAPITALS[country]

    reg = {"capital_of": delayed, "population_of": population_of}
    ex2 = DAGExecutor(Worker(reg))
    ev = ex2.execute(ordered)
    print("plan order      :", [n.evidence_id for n in ordered])
    print("completion order:", ex2.completed_order)
    print("evidence by id  :", {k: ev[k].value for k in sorted(ev)})

    section("8. Timing: the France+Germany plan, 0.2 s per tool call (varies by machine)")
    DELAY = 0.2
    two = planner.plan("Compare the populations of the capitals of France and Germany.")
    for label, workers in (("max_workers=1 (sequential)", 1), ("max_workers=4 (parallel) ", 4)):
        e = DAGExecutor(Worker(TOOL_REGISTRY), max_workers=workers)
        t0 = time.perf_counter()
        e.execute(two)
        print(f"{label}: {time.perf_counter() - t0:.2f} s, rounds {e.rounds}")
    DELAY = 0.0
    print("4 calls x 0.2 s = 0.8 s sequential; 2 dependency levels x 0.2 s = 0.4 s when each level runs in parallel")


if __name__ == "__main__":
    main()
