"""Teaching implementation (our own): Self-Refine Part 2 - CRITIC: external, tool-grounded verification."""
import ast
import json
import operator
from dataclasses import dataclass
from enum import Enum

from selfrefine_1 import TASK, feedback as structural_feedback, bullets_of


@dataclass
class VerificationResult:
    passed: bool
    issues: list[str]
    evidence: list[str]


@dataclass
class Attempt:
    iteration: int
    output: str
    self_feedback: list[str]
    external_feedback: list[str]
    evidence: list[str]


# The toy "external" source: a table of known-false claims, each with evidence and a replacement.
KNOWN_FALSE_CLAIMS = {
    "Python was originally created by Microsoft.": {
        "evidence": "Python was created by Guido van Rossum.",
        "replacement": "Python supports multiple programming paradigms.",
    },
}


def generate(task: str) -> str:
    return "\n".join([
        "- Python was created by Guido van Rossum.",
        "- Python was first released in 1991.",
        "- Python was originally created by Microsoft.",
    ])


def claims(output: str) -> list[str]:
    return [b[2:].strip() for b in bullets_of(output)]


def verify_external(output: str, table=KNOWN_FALSE_CLAIMS) -> VerificationResult:
    issues, evidence = [], []
    for number, claim in enumerate(claims(output), start=1):
        record = table.get(claim)
        if record is not None:
            issues.append(f"Bullet {number} contains a known false claim: {claim}")
            evidence.append(f"Verifier evidence for bullet {number}: {record['evidence']}")
    return VerificationResult(passed=not issues, issues=issues, evidence=evidence)


def merge_feedback(self_feedback, verification):
    return list(self_feedback) + list(verification.issues)


def refine(task, output, critique, evidence, history, dedupe=True):
    revised = []
    for claim in claims(output):
        record = KNOWN_FALSE_CLAIMS.get(claim)
        revised.append("- " + (record["replacement"] if record else claim))
    return "\n".join(revised)


def critic_loop(task, max_iterations=4, quiet=False, refiner=refine, feedback_fn=structural_feedback, verifier=verify_external, generator=None):
    history, output = [], (generator or generate)(task)
    for iteration in range(max_iterations):
        sf = feedback_fn(task, output)
        ver = verifier(output)
        history.append(Attempt(iteration, output, sf, ver.issues, ver.evidence))
        if not quiet:
            print(f"ITERATION {iteration}: self={sf or 'ok'} external={ver.issues or 'passed'}")
        if not sf and ver.passed:
            if not quiet:
                print("STOP: self-feedback found no issues and external verification passed.")
            return output, history, True
        output = refiner(task, output, merge_feedback(sf, ver), ver.evidence, history)
    return output, history, False


# ---- three-state verification --------------------------------------------------------------

class VStatus(Enum):
    PASS = "pass"
    FAIL = "fail"
    UNKNOWN = "unknown"


def flaky_verifier(online: bool):
    def verify(output):
        if not online:
            return VStatus.UNKNOWN, ["verifier unavailable (timeout)"]
        res = verify_external(output)
        return (VStatus.PASS if res.passed else VStatus.FAIL), res.issues
    return verify


# ---- deterministic verifiers ----------------------------------------------------------------

def verify_json(text):
    try:
        json.loads(text)
    except json.JSONDecodeError as exc:
        return False, str(exc)
    return True, "valid JSON"


OPS = {ast.Add: operator.add, ast.Sub: operator.sub, ast.Mult: operator.mul, ast.Div: operator.truediv}


def safe_eval(expr):
    def ev(n):
        if isinstance(n, ast.Expression):
            return ev(n.body)
        if isinstance(n, ast.Constant) and isinstance(n.value, (int, float)):
            return n.value
        if isinstance(n, ast.BinOp) and type(n.op) in OPS:
            return OPS[type(n.op)](ev(n.left), ev(n.right))
        raise ValueError("expression not allowed")
    return ev(ast.parse(expr, mode="eval"))


def check_equation(claim):
    left, right = claim.split("=")
    return safe_eval(left.strip()), float(right.strip())


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Self-Refine only: the structural checks accept a false claim")
    out = generate(TASK)
    print(out)
    print("structural feedback:", structural_feedback(TASK, out) or "none -> the loop would stop here")

    section("2. The external verifier disagrees")
    ver = verify_external(out)
    print("passed:", ver.passed)
    print("issues:", ver.issues)
    print("evidence:", ver.evidence)

    section("3. The CRITIC loop")
    final, hist, ok = critic_loop(TASK)
    print(final)
    print("verified:", ok)

    section("4. Evidence is not a repair: replacing a bullet with the evidence duplicates it")
    def lazy_refine(task, output, critique, evidence, history):
        rows = []
        for c in claims(output):
            rec = KNOWN_FALSE_CLAIMS.get(c)
            rows.append("- " + (rec["evidence"] if rec else c))
        return "\n".join(rows)
    final, hist, ok = critic_loop(TASK, refiner=lazy_refine)
    print(final)
    print("bullets 1 and 3 identical:", claims(final)[0] == claims(final)[2], "| loop accepted it:", ok)

    section("5. Coverage: a false claim the verifier does not know")
    def generate_unknown(task):
        return "\n".join(["- Python was created by Guido van Rossum.", "- Python was first released in 1985.", "- Python emphasizes readable code."])
    final, hist, ok = critic_loop(TASK, generator=generate_unknown)
    print("verified:", ok, "- 1985 is wrong (it was 1991) but is not in the verifier's table")

    section("6. Three-state verification: unavailable is not the same as passed")
    for online in (True, False):
        status, notes = flaky_verifier(online)(generate(TASK))
        as_bool = status != VStatus.FAIL          # the tempting two-state reading
        print(f"verifier online={online!s:<5} status={status.value:<7} notes={notes}")
        print(f"   'not failed' reading would accept: {as_bool} | strict reading accepts: {status == VStatus.PASS}")

    section("7. Deterministic verifiers beat asking a model")
    for text in ('{"name": "Alex", "age": 25}', '{"name": "Alex", "age": 25,}'):
        print(f"json {text!r:<32} -> {verify_json(text)}")
    for claim in ("17 * 24 = 418", "19 * 37 = 713", "4387 * 91 = 399217"):
        computed, claimed = check_equation(claim)
        print(f"{claim:<20} computed {computed} -> {'OK' if computed == claimed else 'WRONG'}")
    try:
        safe_eval("__import__('os').system('echo hi')")
    except ValueError as exc:
        print("expression with a call is refused:", exc)


if __name__ == "__main__":
    main()
