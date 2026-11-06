"""Teaching implementation (our own): reviewer agent, Part 1 - a five-dimension rubric (scores 0-2), one scorer per dimension, a verdict engine with a hard-fail rule, and two demonstration cases:
a clean change and a change that passes its tests while solving the wrong problem. The reviewer is a deterministic stub reading structured evidence. No language model is used."""
import itertools
import json
from collections import Counter
from dataclasses import dataclass

DIMENSIONS = ("problem_fit", "scope_discipline", "assumptions", "verification_quality", "handoff_readiness")


@dataclass(frozen=True)
class Inputs:
    task: str
    state: dict
    feedback: dict
    verification: dict
    assumptions: tuple
    handoff: dict


def problem_fit(d):
    if not d.state.get("solves_requested_problem", False):
        return 0, "The original problem remains unsolved."
    if not d.state.get("covers_all_requirements", False):
        return 1, "The task is only partially satisfied."
    return 2, "The implementation addresses the stated task."


def scope_discipline(d):
    if d.state.get("unauthorized_changes"):
        return 0, "Unauthorised files were changed."
    if d.state.get("scope_expansion_pending"):
        return 1, "A scope expansion awaits approval."
    return 2, "Changes stay within scope."


def assumptions(d):
    return (2, "Assumptions are listed.") if d.assumptions else (0, "No assumptions are recorded.")


def verification_quality(d):
    if not d.verification.get("passed", False):
        return 0, "The verification gate did not pass."
    if not d.feedback.get("tests_match_requirement", False):
        return 1, "The gate passed but the tests do not match the requirement."
    return 2, "Passing tests cover the requirement."


def handoff_readiness(d):
    if not d.handoff.get("next_action"):
        return 0, "No next action."
    if not d.handoff.get("evidence_paths"):
        return 1, "Next action without evidence references."
    return 2, "Next action and evidence are present."


SCORERS = {"problem_fit": problem_fit, "scope_discipline": scope_discipline, "assumptions": assumptions, "verification_quality": verification_quality, "handoff_readiness": handoff_readiness}


def verdict(scores):
    for k in DIMENSIONS:
        if k not in scores:
            raise ValueError(f"missing dimension {k}")
        v = scores[k]
        if type(v) is not int or not 0 <= v <= 2:
            raise ValueError(f"{k} must be an int from 0 to 2")
    total = sum(scores[k] for k in DIMENSIONS)
    if any(scores[k] == 0 for k in DIMENSIONS) or total < 5:
        return total, "hard_fail"
    return total, "soft_fail" if total <= 6 else "pass"


def review(d):
    dims = {k: dict(zip(("score", "finding"), SCORERS[k](d))) for k in DIMENSIONS}
    total, v = verdict({k: dims[k]["score"] for k in DIMENSIONS})
    return {"total": total, "verdict": v, "dimensions": dims}


def clean():
    return Inputs("Add idempotent payment endpoint", {"solves_requested_problem": True, "covers_all_requirements": True}, {"tests_match_requirement": True}, {"passed": True},
                  ("storage supports unique constraints",), {"next_action": "Submit for human review.", "evidence_paths": ["feedback.json"]})


def wrong_problem():
    return Inputs("Prevent duplicate payments under concurrent requests", {"solves_requested_problem": False, "covers_all_requirements": False}, {"tests_match_requirement": False},
                  {"passed": True}, ("storage supports unique constraints",), {"next_action": "Add a concurrent regression test.", "evidence_paths": ["feedback.json"]})


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: a clean change and a wrong-problem change")
    for name, d in (("clean", clean()), ("wrong problem", wrong_problem())):
        r = review(d)
        print(f"{name:14} gate passed={d.verification['passed']!s:5} total={r['total']}/10 verdict={r['verdict']}")
        print("   ", {k: v["score"] for k, v in r["dimensions"].items()})
    print("the wrong-problem change had a passing verification gate and still failed review: its total was 7 of 10, but a zero in problem fit forces hard_fail, so the high total could not outvote the one dimension that matters most")

    section("2. Genuinely checking: the hard-fail rule against the total")
    s = {k: 2 for k in DIMENSIONS}
    print("all twos                         :", verdict(s))
    print("problem_fit zero, others two     :", verdict(dict(s, problem_fit=0)))
    print("everything one (total 5)         :", verdict({k: 1 for k in DIMENSIONS}))
    print("two dimensions zero, others one  :", verdict(dict({k: 1 for k in DIMENSIONS}, problem_fit=0, assumptions=0)))
    print("a single zero gave hard_fail with a total of 8, and a total of 5 with no zeros was a soft_fail, so the verdict depends on both the sum and the minimum")

    section("3. Genuinely measuring: all 243 possible score combinations")
    c = Counter(verdict(dict(zip(DIMENSIONS, combo)))[1] for combo in itertools.product((0, 1, 2), repeat=5))
    print(dict(c), "| total combinations:", sum(c.values()))
    print("pass needs every dimension at 1 or 2 and a total of at least 7; only", c["pass"], "of 243 combinations pass, and", c["hard_fail"], "are hard fails, so most of the score space is a rejection")

    section("4. Genuinely checking: bad scores are rejected, booleans included")
    for label, sc in (("True instead of 1", dict(s, problem_fit=True)), ("score 3", dict(s, problem_fit=3)), ("score 1.0", dict(s, problem_fit=1.0)), ("missing dimension", {k: 2 for k in DIMENSIONS[:-1]})):
        try:
            verdict(sc)
            print(f"{label:20} accepted")
        except ValueError as e:
            print(f"{label:20} rejected: {e}")
    print("True is an int in Python and would have counted as 1, so the type is checked exactly; a verdict engine that accepted it could turn a boolean flag into a rubric score by accident")

    section("5. Genuinely checking: the report is serialisable evidence")
    out = json.dumps(review(wrong_problem()), indent=2)
    back = json.loads(out)
    print("round trip equal:", back == review(wrong_problem()), "| keys:", sorted(back), "| problem_fit:", back["dimensions"]["problem_fit"])
    print("the report keeps the score and the finding side by side, so a builder can act on 'The original problem remains unsolved.' and a later session can see why the change was rejected; these findings are fixed strings chosen by the stub, not an analysis of any code")


if __name__ == "__main__":
    main()
