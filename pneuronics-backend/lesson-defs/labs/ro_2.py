"""Teaching implementation (our own): Role specialization, Part 2 - frozen plans, role permissions, an AST critic, a verification report, a bounded revision loop, repeated-artifact detection and a JSON trace.
The original code/main.py was not supplied. Revisions are scripted by attempt number, so the loop tests the control flow and not any model's ability to fix code; exec() runs fixed trusted demo code only."""
import ast
import hashlib
import json
from dataclasses import dataclass, asdict, FrozenInstanceError

ALLOWED = {"planner": {"create_plan"}, "executor": {"write_source"}, "critic": {"inspect_ast"}, "verifier": {"run_tests"}}


class PermissionDenied(Exception):
    pass


def authorize(role, action):
    if action not in ALLOWED.get(role, set()):
        raise PermissionDenied(f"{role} cannot {action}")


@dataclass(frozen=True)
class Plan:
    function_name: str
    parameter: str
    cases: tuple


PLAN = Plan("double", "number", (("positive_two", 2, 4), ("positive_five", 5, 10), ("zero", 0, 0), ("negative_three", -3, -6)))


def ast_critic(plan, code):
    authorize("critic", "inspect_ast")
    try:
        tree = ast.parse(code)
    except SyntaxError as e:
        return {"accepted": False, "reasons": [f"syntax error: {e.msg}"]}
    fns = [n for n in tree.body if isinstance(n, ast.FunctionDef)]
    reasons = []
    if not any(f.name == plan.function_name for f in fns):
        reasons.append("function name missing")
    else:
        f = [f for f in fns if f.name == plan.function_name][0]
        if [a.arg for a in f.args.args] != [plan.parameter]:
            reasons.append("parameter list differs")
        if not any(isinstance(n, ast.Return) for n in ast.walk(f)):
            reasons.append("no return statement")
    return {"accepted": not reasons, "reasons": reasons or ["structure matches the plan"]}


def run_tests(plan, code):
    authorize("verifier", "run_tests")
    ns = {}
    exec(code, ns)
    fn = ns[plan.function_name]
    rows = []
    for name, x, want in plan.cases:
        got = fn(x)
        rows.append({"test": name, "expected": want, "actual": got, "passed": got == want})
    return {"passed": all(r["passed"] for r in rows), "results": rows}


def digest(code):
    return hashlib.sha256(code.encode()).hexdigest()[:12]


SCRIPT = ["def double(number):\n    return number + 2\n", "def double(number):\n    return number * 2\n"]


def revision_loop(plan, script, max_attempts=3):
    trace, seen = [], set()
    for n in range(1, max_attempts + 1):
        code = script[min(n - 1, len(script) - 1)]
        h = digest(code)
        crit, ver = ast_critic(plan, code), run_tests(plan, code)
        rec = {"attempt": n, "hash": h, "critic": crit["accepted"], "verifier": ver["passed"], "failed": [r["test"] for r in ver["results"] if not r["passed"]]}
        trace.append(rec)
        if crit["accepted"] and ver["passed"]:
            return {"status": "ACCEPTED", "attempts": n, "trace": trace}
        if h in seen:
            return {"status": "STOPPED_REPEATED_ARTIFACT", "attempts": n, "trace": trace}
        seen.add(h)
    return {"status": "BUDGET_EXHAUSTED", "attempts": max_attempts, "trace": trace}


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: a plan that cannot be edited and roles that cannot cross")
    try:
        PLAN.function_name = "hack"
    except FrozenInstanceError as e:
        print("edit the plan:", type(e).__name__)
    for role, act in (("critic", "write_source"), ("executor", "run_tests"), ("verifier", "write_source"), ("ghost", "run_tests")):
        try:
            authorize(role, act)
            print(role, act, "-> allowed")
        except PermissionDenied as e:
            print(role, act, "-> denied:", e)
    print("a frozen plan refuses attribute assignment and the permission table denies a critic writing source, an executor running its own tests and an unknown role, so an executor cannot weaken the acceptance criteria through these paths; the check only works if every tool call really goes through authorize, which this lab does not enforce for anything outside its own functions.")

    section("2. Genuinely running: what an AST critic can and cannot see")
    for label, code in (("correct", SCRIPT[1]), ("wrong formula", SCRIPT[0]), ("renamed parameter", "def double(n):\n    return n * 2\n"), ("syntax error", "def double(number)\n    return number * 2\n"), ("no return", "def double(number):\n    pass\n")):
        print(f"{label}: {ast_critic(PLAN, code)}")
    print("the AST critic rejects a renamed parameter, a syntax error and a missing return, each with its own reason, and it still accepts the wrong formula number + 2, because it inspects structure and cannot evaluate behaviour; syntax validation and behavioural verification are different checks.")

    section("3. Genuinely running: the verification report")
    rep = run_tests(PLAN, SCRIPT[0])
    for r in rep["results"]:
        print(f"{'PASS' if r['passed'] else 'FAIL'} {r['test']:<15} expected={r['expected']:<3} actual={r['actual']}")
    print("passed:", rep["passed"])
    print("each result names the test, the expected value and the actual value, so a failing run says what failed instead of returning only False, and the same record can be fed back to an executor or stored; the four test cases are chosen by hand and a passing report would only mean those four held.")

    section("4. Genuinely running: a bounded revision loop")
    out = revision_loop(PLAN, SCRIPT)
    print("status:", out["status"], "| attempts:", out["attempts"])
    for t in out["trace"]:
        print(t)
    print("the first attempt fails three tests while the critic accepts it and the second attempt passes, so the loop ends ACCEPTED after 2 attempts; the revision is scripted by attempt number, so this shows the loop and its record and does not show that a model could read the failures and produce the fix.")

    section("5. Genuinely running: stopping when nothing changes")
    stuck = revision_loop(PLAN, [SCRIPT[0]], max_attempts=3)
    print("same wrong artifact every time:", stuck["status"], "| attempts:", stuck["attempts"], "| hashes:", [t["hash"] for t in stuck["trace"]])
    budget = revision_loop(PLAN, [SCRIPT[0], "def double(number):\n    return number + 3\n", "def double(number):\n    return number + 4\n"], max_attempts=3)
    print("three different wrong artifacts:", budget["status"], "| attempts:", budget["attempts"])
    print("an identical artifact on the second attempt stops the loop after 2 attempts without waiting for the budget, whereas three different wrong artifacts use the whole budget of 3 and end BUDGET_EXHAUSTED; a repeated hash shows that nothing changed and says nothing about why.")

    section("6. Genuinely computing: a machine-readable trace")
    text = json.dumps(out, indent=1)
    back = json.loads(text)
    print("lines:", len(text.splitlines()), "| round trip equal:", back == out, "| keys:", sorted(back))
    print("the trace holds the attempt number, a hash of the artifact, both decisions and the names of the failing tests, and survives a save and reload unchanged; a hash of twelve characters is enough to tell artifacts apart in this demo and is not a security control.")


if __name__ == "__main__":
    main()
