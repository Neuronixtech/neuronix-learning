"""Teaching implementation (our own): evidence-backed execution plan, Part 1 - work items with the five commitments (id, change, evidence, dependencies, proof), a plan validator, wave scheduling by
topological sort, cycle detection and the time saved by waves under ILLUSTRATIVE durations. Evidence strings and proof commands are made up. No language model is used."""
import json
from dataclasses import asdict, dataclass
from typing import List


@dataclass
class WorkItem:
    id: str
    change: str
    evidence: List[str]
    dependencies: List[str]
    proof: str


def validate_plan(items):
    if not items:
        raise ValueError("Plan cannot be empty")
    ids = [i.id for i in items]
    if len(ids) != len(set(ids)):
        raise ValueError("Duplicate work item identifier")
    known = set(ids)
    for it in items:
        if not it.id.strip():
            raise ValueError("Work item has no identifier")
        if not it.change.strip():
            raise ValueError(f"{it.id}: missing change description")
        if not it.evidence or not all(e.strip() for e in it.evidence):
            raise ValueError(f"{it.id}: missing evidence")
        if not it.proof.strip():
            raise ValueError(f"{it.id}: missing proof")
        if len(it.dependencies) != len(set(it.dependencies)):
            raise ValueError(f"{it.id}: duplicate dependency")
        for d in it.dependencies:
            if d == it.id:
                raise ValueError(f"{it.id}: depends on itself")
            if d not in known:
                raise ValueError(f"{it.id}: unknown dependency {d}")


def execution_waves(items):
    validate_plan(items)
    remaining = {i.id: set(i.dependencies) for i in items}
    done, waves = set(), []
    while remaining:
        ready = sorted(k for k, deps in remaining.items() if deps <= done)
        if not ready:
            raise ValueError("Dependency cycle detected among: " + ", ".join(sorted(remaining)))
        waves.append(ready)
        for k in ready:
            del remaining[k]
        done.update(ready)
    return waves


def item(i, deps=(), evidence=("observed in repo",), proof="python3 -m unittest -v", change=None):
    return WorkItem(i, change or f"change {i}", list(evidence), list(deps), proof)


def lesson_plan():
    return [item("W-001", change="Define the shared pagination contract"), item("W-002", ["W-001"], change="Implement pagination"), item("W-003", ["W-001"], change="Update documentation"),
            item("W-004", ["W-002", "W-003"], change="Integration gate")]


def critical_path(durations, items):
    dep = {i.id: i.dependencies for i in items}
    memo = {}

    def finish(k):
        if k not in memo:
            memo[k] = durations[k] + max((finish(d) for d in dep[k]), default=0)
        return memo[k]
    return max(finish(k) for k in dep)


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: the lesson's four-item plan becomes three waves")
    plan = lesson_plan()
    for n, w in enumerate(execution_waves(plan), 1):
        print(f"Wave {n}: {', '.join(w)}")
    print("the contract has no prerequisites, implementation and documentation both wait only for the contract, and integration waits for both; items in the same wave are logically ready together, which says nothing yet about whether they can safely run at the same time")

    section("2. Genuinely running: each structural defect is rejected with its own message")
    defects = {"duplicate id": [item("A"), item("A")], "blank evidence entry": [item("A", evidence=("  ",))], "no evidence": [item("A", evidence=())], "no proof": [item("A", proof="  ")],
               "unknown dependency": [item("A", ["W-999"])], "self dependency": [item("A", ["A"])], "duplicate dependency": [item("A"), item("B", ["A", "A"])], "empty plan": []}
    for label, p in defects.items():
        try:
            validate_plan(p)
            print(f"{label:22} accepted")
        except ValueError as e:
            print(f"{label:22} rejected: {e}")
    print("each defect is caught before any edit, and the unknown dependency in particular would otherwise have made an executor wait for a prerequisite that can never finish")

    section("3. Genuinely running: a cycle is not an ordering problem, it is a missing decision")
    cyc = [item("A", ["C"]), item("B", ["A"]), item("C", ["B"])]
    try:
        execution_waves(cyc)
    except ValueError as e:
        print("cycle plan:", e)
    fixed = [item("D", change="Decide the shared contract"), item("A", ["D"]), item("B", ["D", "A"]), item("C", ["D", "B"])]
    print("after extracting a shared decision D:", execution_waves(fixed))
    print("no item in the cycle could ever start, so the scheduler stopped and named the stuck items instead of choosing a starting point; the repair was a new prerequisite, not deleting an edge")

    section("4. Genuinely measuring: what waves save, under ILLUSTRATIVE durations")
    dur = {"W-001": 20, "W-002": 50, "W-003": 30, "W-004": 15}
    print("sequential total:", sum(dur.values()), "minutes | critical path:", critical_path(dur, plan), "minutes | saving:", sum(dur.values()) - critical_path(dur, plan), "minutes")
    print("the durations are invented for this lab; the saving appears only if implementation and documentation really can run in parallel with enough workers and no shared-file conflicts, and the integration step is still bound by the slower of the two")

    section("5. Genuinely checking: structural validation does not check the evidence is true")
    weak = [item("W-001", evidence=("tests exist",), proof="echo done")]
    print("plan with vague evidence and an echo proof:", "accepted" if validate_plan(weak) is None else "rejected", "| waves:", execution_waves(weak))
    print("a nonempty string such as 'tests exist' and a proof of 'echo done' both pass the validator, because it checks presence and not truth; evidence has to be resolved against the repository and a proof only counts after it is executed")

    section("6. Genuinely running: the plan as a JSON artifact")
    doc = {"work_items": [asdict(i) for i in plan], "execution_waves": execution_waves(plan)}
    back = json.loads(json.dumps(doc))
    print("round trip equal:", back == doc, "| items:", len(back["work_items"]), "| waves:", back["execution_waves"])
    print("the artifact records the plan and the computed order, not that any item was done or any proof passed, so a resumed session still needs a separate execution state")


if __name__ == "__main__":
    main()
