"""Teaching implementation (our own): reviewer agent, Part 3 - keeping the reviewer a consumer of evidence: a frozen dataclass that is not deeply frozen, snapshots with hashes, a reviewer
that tries to edit builder state, rubric versioning (the same evidence under two thresholds), and a report with traceability fields. Real hashing and files. No language model is used."""
import copy
import hashlib
import json
import tempfile
from dataclasses import FrozenInstanceError, dataclass
from pathlib import Path


@dataclass(frozen=True)
class Inputs:
    task: str
    state: dict


def digest(obj):
    return hashlib.sha256(json.dumps(obj, sort_keys=True).encode("utf-8")).hexdigest()[:12]


def snapshot(inp):
    return Inputs(inp.task, copy.deepcopy(inp.state))


def nosy_reviewer(inp):
    inp.state["solves_requested_problem"] = True
    return "reviewed"


def verdict(total, minimum, pass_at, soft_at):
    if minimum == 0 or total < soft_at:
        return "hard_fail"
    return "soft_fail" if total < pass_at else "pass"


RUBRIC = {"1.0": {"pass_at": 7, "soft_at": 5}, "1.1": {"pass_at": 8, "soft_at": 6}}


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely checking: what 'frozen' protects")
    inp = Inputs("task", {"solves_requested_problem": False})
    try:
        inp.task = "other"
        print("assigning a field: allowed")
    except FrozenInstanceError:
        print("assigning a field: FrozenInstanceError")
    try:
        inp.state = {}
    except FrozenInstanceError:
        print("replacing the state dict: FrozenInstanceError")
    inp.state["solves_requested_problem"] = True
    print("mutating the dict inside the frozen object: allowed, state is now", inp.state)
    print("a frozen dataclass stops attribute assignment and not changes to the dict it holds, so a reviewer given such an object can still rewrite the evidence it is judging")

    section("2. Genuinely running: a reviewer that edits what it reviews")
    original = Inputs("task", {"solves_requested_problem": False})
    before = digest(original.state)
    nosy_reviewer(original)
    print("evidence hash before:", before, "| after the review:", digest(original.state), "| changed:", before != digest(original.state))
    given = Inputs("task", {"solves_requested_problem": False})
    snap = snapshot(given)
    nosy_reviewer(snap)
    print("same reviewer on a deep copy: original hash unchanged:", digest(given.state) == before)
    print("the edit reached the builder's evidence when the reviewer was handed the original and stayed in the copy otherwise; a prompt telling the reviewer not to edit files is not a boundary, an isolated copy with a recorded hash is")

    section("3. Genuinely running: a file-based evidence bundle and a tamper check")
    with tempfile.TemporaryDirectory() as d:
        ev = Path(d) / "feedback.json"
        ev.write_text(json.dumps({"tests_match_requirement": False}), encoding="utf-8")
        h = hashlib.sha256(ev.read_bytes()).hexdigest()[:12]
        print("hash recorded when the review starts:", h)
        ev.write_text(json.dumps({"tests_match_requirement": True}), encoding="utf-8")
        h2 = hashlib.sha256(ev.read_bytes()).hexdigest()[:12]
        print("hash when the review ends:", h2, "| evidence changed during the review:", h != h2)
    print("recording the hash at the start and comparing at the end detects a change but cannot say who made it or prevent it; preventing it needs permissions the reviewer does not have, which a local script cannot supply")

    section("4. Genuinely measuring: the same scores under two rubric versions")
    cases = {"7 with no zero": (7, 1), "6 with no zero": (6, 1), "5 with no zero": (5, 1), "9 with a zero": (9, 0)}
    for name, (total, mn) in cases.items():
        print(f"{name:16}", {v: verdict(total, mn, **p) for v, p in RUBRIC.items()})
    print("the same scores were pass under version 1.0 and soft_fail under 1.1 for a total of 7, and a total of 5 moved from soft_fail to hard_fail; a report without a rubric version cannot be compared with one from before the change, and the zero rule gave hard_fail in both")

    section("5. Genuinely running: a report with traceability fields")
    evidence = {"task": "task", "state": {"solves_requested_problem": False}}
    report = {"rubric_version": "1.1", "reviewer_version": "stub-1", "input_hash": digest(evidence), "total": 7, "verdict": verdict(7, 1, **RUBRIC["1.1"])}
    text = json.dumps(report, indent=2, ensure_ascii=False)
    print(text)
    print("the same evidence hashes to the same value on every run:", digest(evidence) == digest(copy.deepcopy(evidence)), "| a changed field changes it:", digest(dict(evidence, task="x")) != digest(evidence))
    print("the version fields and input hash let a later session tell whether two reviews used the same rubric and the same evidence; the reviewer version here is a label we made up")


if __name__ == "__main__":
    main()
