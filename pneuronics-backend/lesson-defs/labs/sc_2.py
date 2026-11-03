"""Teaching implementation (our own): scope contracts and task boundaries, Part 2 - the verification gate. scope_check with severities, acceptance evidence (self-reported versus actually
executed in a real temporary project), approvals, a time budget enforced with a real timeout, and the gate truth table. No language model is used."""
import itertools
import subprocess
import sys
import tempfile
import time
from fnmatch import fnmatchcase
from pathlib import Path


def matches(path, pattern):
    path, pattern = path.replace("\\", "/"), pattern.replace("\\", "/")
    if pattern.endswith("/**"):
        return path.startswith(pattern[:-3] + "/")
    return fnmatchcase(path, pattern)


CONTRACT = {"allowed_files": ["src/auth/**", "tests/test_login*.py"], "forbidden_files": ["src/database/**", "release/**"], "warning_files": ["docs/**"],
            "acceptance_criteria": ["python -m unittest tests.test_login"], "approvals_required": ["production deployment"], "time_budget_minutes": 30, "warning_budget": 0}


def scope_check(contract, touched):
    violations, in_scope, off_scope = [], [], []
    for f in touched:
        if any(matches(f, p) for p in contract["forbidden_files"]):
            off_scope.append(f); violations.append({"file": f, "reason": "Explicitly forbidden file", "severity": "error"})
        elif any(matches(f, p) for p in contract["allowed_files"]):
            in_scope.append(f)
        else:
            off_scope.append(f)
            sev = "warning" if any(matches(f, p) for p in contract["warning_files"]) else "error"
            violations.append({"file": f, "reason": "Outside allowed file patterns", "severity": sev})
    return violations, in_scope, off_scope


def check_acceptance(contract, commands_passed):
    missing = [c for c in contract["acceptance_criteria"] if c not in commands_passed]
    return {"passed": not missing, "missing": missing}


def check_approvals(contract, requested, approved):
    need = [a for a in requested if a in contract["approvals_required"] and a not in approved]
    return {"passed": not need, "missing": need}


def check_time(contract, elapsed):
    return {"passed": elapsed <= contract["time_budget_minutes"], "elapsed": elapsed}


def gate(contract, run, acceptance=None):
    v, ins, off = scope_check(contract, run["touched"])
    errors = [x for x in v if x["severity"] == "error"]
    warns = [x for x in v if x["severity"] == "warning"]
    scope_ok = not errors and len(warns) <= contract["warning_budget"]
    acc = acceptance or check_acceptance(contract, run["commands_passed"])
    apv = check_approvals(contract, run["requested"], run["approved"])
    tm = check_time(contract, run["elapsed"])
    return {"verdict": "ALLOW" if all([scope_ok, acc["passed"], apv["passed"], tm["passed"]]) else "BLOCK", "errors": len(errors), "warnings": len(warns),
            "scope": scope_ok, "acceptance": acc["passed"], "approvals": apv["passed"], "time": tm["passed"]}


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: the two demonstration runs")
    ok = {"touched": ["src/auth/login.py", "tests/test_login.py"], "commands_passed": ["python -m unittest tests.test_login"], "requested": [], "approved": [], "elapsed": 18}
    creep = {"touched": ["src/auth/login.py", "tests/test_login.py", "docs/login-guide.md", "release/deploy.sh"], "commands_passed": ["python -m unittest tests.test_login"],
             "requested": ["production deployment"], "approved": [], "elapsed": 18}
    for name, run in (("compliant_run", ok), ("scope_creep_run", creep)):
        v, ins, off = scope_check(CONTRACT, run["touched"])
        print(name, gate(CONTRACT, run))
        for x in v:
            print("   violation:", x["file"], "|", x["reason"], "|", x["severity"])
    print("both runs recorded the acceptance command as passed, and the second was still blocked: tests passing did not outweigh a forbidden file, a warning over a budget of 0 and a missing approval")

    section("2. Genuinely running: acceptance evidence, a claim versus an execution")
    with tempfile.TemporaryDirectory() as d:
        (Path(d) / "tests").mkdir()
        (Path(d) / "tests" / "__init__.py").write_text("", encoding="utf-8")
        (Path(d) / "tests" / "test_login.py").write_text("import unittest\nclass T(unittest.TestCase):\n    def test_rejects(self):\n        self.assertEqual(1, 2)\n", encoding="utf-8")
        claim = {"touched": ["src/auth/login.py"], "commands_passed": ["python -m unittest tests.test_login"], "requested": [], "approved": [], "elapsed": 5}
        print("gate trusting the agent's list:", gate(CONTRACT, claim)["verdict"])
        executed = []
        for cmd in CONTRACT["acceptance_criteria"]:
            args = [sys.executable if cmd.split()[0] == "python" else cmd.split()[0]] + cmd.split()[1:]
            p = subprocess.run(args, cwd=d, capture_output=True, text=True, timeout=60)
            print(f"executed {cmd!r}: exit {p.returncode}")
            if p.returncode == 0:
                executed.append(cmd)
        print("gate using executed results:", gate(CONTRACT, claim, acceptance=check_acceptance(CONTRACT, executed))["verdict"])
    print("the failing test file made the real exit code non-zero, yet the self-reported list still said it passed and the first gate allowed the work; evidence has to come from the harness that ran the command, not from the agent's own summary")

    section("3. Genuinely running: approvals compared as plain strings")
    for label, approved in (("exact text", ["production deployment"]), ("different capitals", ["Production Deployment"]), ("trailing space", ["production deployment "]), ("approved by nobody in particular", ["production deployment"])):
        print(f"{label:34} {check_approvals(CONTRACT, ['production deployment'], approved)}")
    print("the same intent written with capitals or a trailing space was rejected, which is safe but brittle, and the last case shows the check has no idea who approved: it only compares text, so an agent that writes its own approval string passes; real approvals need an identity and a record outside the agent's control")

    section("4. Genuinely running: a time budget checked after the fact versus enforced")
    print("post-run check, 45 minutes against a 30 minute budget:", check_time(CONTRACT, 45))
    t0 = time.time()
    try:
        subprocess.run([sys.executable, "-c", "import time; time.sleep(30)"], timeout=1)
        outcome = "finished"
    except subprocess.TimeoutExpired:
        outcome = "killed at the timeout"
    print(f"enforced budget of 1 s on a 30 s command: {outcome} after {time.time() - t0:.1f} s")
    print("the post-run check can only report that the budget was exceeded after the time was spent, while a timeout in the runner stopped the command at its limit; budgets belong in the runtime, with the report as the audit record")

    section("5. Genuinely measuring: the gate truth table")
    results = {}
    for combo in itertools.product([True, False], repeat=4):
        results[combo] = all(combo)
    print("combinations of scope/acceptance/approvals/time:", len(results), "| ALLOW:", sum(results.values()), "| BLOCK:", len(results) - sum(results.values()))
    print("exactly one of the sixteen combinations allows the work, so adding another check can only block more, never allow more; that is also why a missing check silently widens the gate")


if __name__ == "__main__":
    main()
