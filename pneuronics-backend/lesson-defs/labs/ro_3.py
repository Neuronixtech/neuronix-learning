"""Teaching implementation (our own): Role specialization, Part 3 - permission boundaries, a restricted verifier, artifact hashing, a state machine ending at AWAITING_APPROVAL, specialist reviewers, metrics and an audit log.
The original code/main.py was not supplied. The restricted evaluator handles one tiny function shape and is not a sandbox or a Python interpreter; reviewers and reports are scripted."""
import ast
import hashlib
import json
from dataclasses import dataclass, field

ROLE_TOOLS = {"planner": {"read_requirements", "create_plan"}, "executor": {"read_plan", "write_approved_source"}, "critic": {"read_plan", "read_source", "inspect_ast"}, "verifier": {"read_plan", "read_source", "run_approved_tests"}, "orchestrator": {"dispatch_role", "record_transition", "apply_acceptance_policy"}}


class PermissionDenied(Exception):
    pass


def authorize(role, action):
    if action not in ROLE_TOOLS.get(role, set()):
        raise PermissionDenied(f"Role {role!r} cannot perform {action!r}")


class Unsupported(Exception):
    pass


def eval_function(code, arg):
    tree = ast.parse(code)
    fn = tree.body[0]
    if not isinstance(fn, ast.FunctionDef) or len(tree.body) != 1:
        raise Unsupported("only one function allowed")
    env = {fn.args.args[0].arg: arg}

    def ev(n):
        if isinstance(n, ast.Constant):
            return n.value
        if isinstance(n, ast.Name):
            return env[n.id]
        if isinstance(n, ast.BinOp):
            a, b = ev(n.left), ev(n.right)
            if isinstance(n.op, ast.Mult):
                return a * b
            if isinstance(n.op, ast.Add):
                return a + b
            raise Unsupported("operator")
        if isinstance(n, ast.Compare) and len(n.ops) == 1 and isinstance(n.ops[0], ast.Lt):
            return ev(n.left) < ev(n.comparators[0])
        raise Unsupported(type(n).__name__)

    for st in fn.body:
        if isinstance(st, ast.If):
            if ev(st.test):
                for s2 in st.body:
                    if isinstance(s2, ast.Raise):
                        raise ValueError("raised")
                    raise Unsupported("statement in if")
        elif isinstance(st, ast.Return):
            return ev(st.value)
        else:
            raise Unsupported(type(st).__name__)
    return None


def run_cases(code, strict=True):
    out = {}
    for name, x, want in (("positive", 3, 6), ("zero", 0, 0), ("negative", -1, "ValueError")):
        try:
            got = eval_function(code, x)
            out[name] = got == want
        except ValueError:
            out[name] = want == "ValueError"
        except Unsupported as e:
            if strict:
                out[name] = f"verifier error: {e}"
            else:
                out[name] = want == "ValueError"
        except Exception as e:
            out[name] = f"verifier error: {type(e).__name__}"
    return out


V1 = "def calculate_subtotal(price):\n    return price * 2\n"
V2 = "def calculate_subtotal(price):\n    if price < 0:\n        raise ValueError('negative price')\n    return price * 2\n"
HOSTILE = "import os\n"


def sha(code):
    return hashlib.sha256(code.encode()).hexdigest()[:16]


@dataclass
class Workflow:
    state: str = "PLANNED"
    log: list = field(default_factory=list)
    ALLOWED = {"PLANNED": {"EXECUTING"}, "EXECUTING": {"CRITIQUE"}, "CRITIQUE": {"VERIFYING", "REVISION"}, "VERIFYING": {"REVISION", "AWAITING_APPROVAL"}, "REVISION": {"EXECUTING", "ESCALATED"}, "AWAITING_APPROVAL": {"APPROVED", "REJECTED"}}

    def go(self, new, **info):
        if new not in self.ALLOWED.get(self.state, set()):
            raise ValueError(f"illegal transition {self.state} -> {new}")
        self.log.append({"from": self.state, "to": new, **info})
        self.state = new


def specialist_decision(reviews):
    blocking = [n for n, r in reviews.items() if r["blocking"]]
    return {"accepted": not blocking, "blocking": blocking}


def metrics(reports):
    n = len(reports)
    return {"first_pass": sum(r["attempts"] == 1 and r["ok"] for r in reports) / n, "final": sum(r["ok"] for r in reports) / n, "unresolved": sum(not r["ok"] for r in reports) / n, "avg_attempts": sum(r["attempts"] for r in reports) / n}


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: a role prompt against a permission boundary")
    for role, act in (("critic", "write_approved_source"), ("executor", "write_approved_source"), ("verifier", "run_approved_tests"), ("executor", "run_approved_tests"), ("critic", "apply_acceptance_policy")):
        try:
            authorize(role, act)
            print(f"{role:<9} {act:<24} allowed")
        except PermissionDenied as e:
            print(f"{role:<9} {act:<24} denied")
    print("the table gives only the executor the write tool and only the verifier the test tool, and a critic asking to write is denied before anything runs; a sentence in a prompt saying do not modify files would not stop a tool the role can still call, and this table helps only if a trusted dispatcher enforces it on every call.")

    section("2. Genuinely running: the restricted verifier on two versions")
    print("first attempt :", run_cases(V1))
    print("second attempt:", run_cases(V2))
    print("the first version passes positive and zero and fails the negative-price requirement because it returns -2 where a ValueError is required, and the second version passes all three; the evaluator understands only this small function shape, so it is a teaching device and not a way to run arbitrary generated code.")

    section("3. Genuinely running: a verifier error that looks like a pass")
    print("strict verifier on hostile code :", run_cases(HOSTILE, strict=True))
    print("lenient verifier on hostile code:", run_cases(HOSTILE, strict=False))
    print("a verifier that treats any failure to evaluate as the expected exception reports the negative case as passed for code that is not even a function, while the strict one reports a verifier error for all three cases; unsupported code, a verifier bug and an expected application exception must be kept apart or a broken check will look like a success.")

    section("4. Genuinely running: hashing the artifact and moving through states")
    wf = Workflow()
    wf.go("EXECUTING", artifact=sha(V1)); wf.go("CRITIQUE"); wf.go("VERIFYING"); wf.go("REVISION", failed=["negative"])
    wf.go("EXECUTING", artifact=sha(V2)); wf.go("CRITIQUE"); wf.go("VERIFYING"); wf.go("AWAITING_APPROVAL", artifact=sha(V2))
    print("final state:", wf.state, "| transitions:", len(wf.log), "| hashes differ:", sha(V1) != sha(V2))
    try:
        wf.go("EXECUTING")
    except ValueError as e:
        print("illegal move:", e)
    print("the run ends in AWAITING_APPROVAL with the hash of the second version recorded, and a jump from AWAITING_APPROVAL back to EXECUTING is refused; that state means the checks passed and a human still has to decide, it does not mean anyone approved.")

    section("5. Genuinely running: specialist reviewers and where independence ends")
    reviews = {"correctness": {"blocking": False}, "security": {"blocking": True}, "performance": {"blocking": False}, "tests": {"blocking": False}}
    print("one blocking reviewer:", specialist_decision(reviews))
    reviews["security"]["blocking"] = False
    print("no blocking reviewer :", specialist_decision(reviews))
    print("a single blocking finding from the security reviewer rejects the artifact even though three reviewers accepted it, and with no blocking finding it passes; the reviews here are scripted, so this tests the aggregation rule and says nothing about whether real reviewers would be independent of each other.")

    section("6. Genuinely computing: reliability metrics and an audit record")
    reports = [{"attempts": 1, "ok": True}] * 70 + [{"attempts": 2, "ok": True}] * 20 + [{"attempts": 3, "ok": False}] * 10
    print({k: round(v, 3) for k, v in metrics(reports).items()})
    false_accept = sum(1 for crit, ref in ((True, True), (True, False), (True, False), (False, False)) if crit and not ref) / 3
    print("critic false-accept rate on 3 critic-accepted artifacts, 2 of which fail the reference tests:", round(false_accept, 3))
    event = {"workflow": "w1", "role": "verifier", "action": "run_approved_tests", "artifact": sha(V2), "result": "pass"}
    print("audit line:", json.dumps(event, sort_keys=True))
    print("the 100 invented tasks give a first-pass rate of 0.7, a final rate of 0.9 and 0.1 unresolved, and the false-accept rate is 2 of 3 on four invented pairs, so these numbers show how the metrics are computed and are not measurements of any real system; an audit line names the role, the action and the artifact hash so a decision can be traced back.")


if __name__ == "__main__":
    main()
