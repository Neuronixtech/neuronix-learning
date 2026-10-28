"""Teaching implementation (our own): Self-Refine Part 3 - evaluator-optimizer controller with guardrails."""
from __future__ import annotations

from dataclasses import dataclass
from enum import Enum

TASK = "Write exactly 3 short bullet points about Python. Each bullet must be under 60 characters."
MAX_LEN = 60


class Severity(Enum):
    ERROR = "error"
    WARNING = "warning"


class VerificationStatus(Enum):
    PASS = "pass"
    FAIL = "fail"
    UNKNOWN = "unknown"


@dataclass
class Issue:
    source: str
    category: str
    message: str
    severity: Severity
    evidence: str | None = None


@dataclass
class EvaluationResult:
    name: str
    status: VerificationStatus
    issues: list[Issue]


@dataclass
class Attempt:
    iteration: int
    output: str
    evaluations: list[EvaluationResult]


@dataclass
class RunResult:
    output: str
    success: bool
    stop_reason: str
    history: list[Attempt]


KNOWN_FALSE_CLAIMS = {
    "Python was originally created by Microsoft.": {
        "evidence": "Python was created by Guido van Rossum.",
        "replacement": "Python supports multiple programming paradigms.",
    },
}
FALLBACK_FACTS = ["Python has a large standard library.", "Guido van Rossum named it after Monty Python."]


def generate(task):
    return "\n".join(["- Python was created by Guido van Rossum.", "- Python was first released in 1991.",
                      "- Python was originally created by Microsoft."])


def extract_bullets(output):
    return [l.strip()[2:].strip() for l in output.splitlines() if l.strip().startswith("- ")]


def render(bullets):
    return "\n".join("- " + b for b in bullets)


def status_of(issues):
    return VerificationStatus.FAIL if any(i.severity is Severity.ERROR for i in issues) else VerificationStatus.PASS


def check_structure(output):
    bullets, issues = extract_bullets(output), []
    if len(bullets) != 3:
        issues.append(Issue("structure_checker", "bullet_count", f"Expected exactly 3 bullets, found {len(bullets)}.",
                            Severity.ERROR, f"Parsed bullet count: {len(bullets)}"))
    for n, b in enumerate(bullets, 1):
        rendered = "- " + b
        if len(rendered) >= MAX_LEN:
            issues.append(Issue("structure_checker", "bullet_length", f"Bullet {n} must be under {MAX_LEN} characters.",
                                Severity.ERROR, f"length {len(rendered)}"))
    return EvaluationResult("structure", status_of(issues), issues)


def make_fact_verifier(available=True):
    def verify(output):
        if not available:
            return EvaluationResult("external_facts", VerificationStatus.UNKNOWN, [])
        issues = []
        for n, claim in enumerate(extract_bullets(output), 1):
            rec = KNOWN_FALSE_CLAIMS.get(claim)
            if rec:
                issues.append(Issue("fact_verifier", "factuality", f"Bullet {n} contains a known false claim: {claim}",
                                    Severity.ERROR, rec["evidence"]))
        return EvaluationResult("external_facts", status_of(issues), issues)
    return verify


def evaluate_quality(output):
    bullets, issues = extract_bullets(output), []
    norm = [b.casefold().strip() for b in bullets]
    if len(norm) != len(set(norm)):
        issues.append(Issue("quality_evaluator", "duplication", "Two bullets are identical.", Severity.ERROR))
    if len(bullets) > 1 and len({b.split()[0].casefold() for b in bullets}) == 1:
        issues.append(Issue("quality_evaluator", "style", f"Every bullet starts with the word '{bullets[0].split()[0]}'.",
                            Severity.WARNING))
    return EvaluationResult("quality", status_of(issues), issues)


def default_suite(facts_available=True):
    return [check_structure, make_fact_verifier(facts_available), evaluate_quality]


def evaluate_candidate(output, suite):
    return [e(output) for e in suite]


def blocking(evals):
    return [i for e in evals for i in e.issues if i.severity is Severity.ERROR]


def warnings(evals):
    return [i for e in evals for i in e.issues if i.severity is Severity.WARNING]


def required_passed(evals):
    return all(e.status is VerificationStatus.PASS for e in evals)


def refine(task, output, evaluations, history):
    repaired = []
    for b in extract_bullets(output):
        rec = KNOWN_FALSE_CLAIMS.get(b)
        repaired.append(rec["replacement"] if rec else b)
    seen, deduped = set(), []
    for b in repaired:
        if b.casefold() not in seen:
            seen.add(b.casefold())
            deduped.append(b)
    deduped = deduped[:3]
    for f in FALLBACK_FACTS:
        if len(deduped) >= 3:
            break
        if f.casefold() not in seen:
            deduped.append(f)
    deduped = [b if len("- " + b) < MAX_LEN else b[:MAX_LEN - 5].rstrip() + "..." for b in deduped]
    return render(deduped)


def normalize(output):
    return " ".join(output.split())


def detect_stagnation(revised, history):
    return normalize(revised) in {normalize(a.output) for a in history}


def output_guardrail(output):
    issues, bullets = [], extract_bullets(output)
    if len(bullets) != 3:
        issues.append(Issue("output_guardrail", "bullet_count", "Output must contain exactly 3 bullets.", Severity.ERROR))
    if any(len("- " + b) >= MAX_LEN for b in bullets):
        issues.append(Issue("output_guardrail", "bullet_length", "A bullet is too long.", Severity.ERROR))
    if any(b in KNOWN_FALSE_CLAIMS for b in bullets):
        issues.append(Issue("output_guardrail", "factuality", "Output contains a known false claim.", Severity.ERROR))
    return EvaluationResult("output_guardrail", status_of(issues), issues)


def run_evaluator_optimizer(task, max_iterations=4, generator=generate, optimizer=refine, suite=None, guardrail=output_guardrail, verbose=False):
    suite = suite or default_suite()
    history: list[Attempt] = []
    candidate = generator(task)
    for iteration in range(max_iterations):
        evals = evaluate_candidate(candidate, suite)
        history.append(Attempt(iteration, candidate, evals))
        if verbose:
            print(f"ITERATION {iteration}")
            for e in evals:
                print(f"  {e.name}: {e.status.value.upper()}" + "".join(f"  [{i.severity.value.upper()}] {i.category}" for i in e.issues))
        if required_passed(evals):
            g = guardrail(candidate)
            if verbose:
                print(f"  {g.name}: {g.status.value.upper()}" + "".join(f"  [{i.severity.value.upper()}] {i.category}" for i in g.issues))
            if g.status is VerificationStatus.PASS:
                return RunResult(candidate, True, "verified", history)
        if iteration == max_iterations - 1:
            return RunResult(candidate, False, "max_iterations", history)
        revised = optimizer(task, candidate, evals, history)
        if detect_stagnation(revised, history):
            return RunResult(candidate, False, "stagnation", history)
        candidate = revised
    return RunResult(candidate, False, "max_iterations", history)


def section(t):
    print(f"\n--- {t} ---")


def summary(name, r):
    print(f"{name:<34} success={r.success!s:<5} stop_reason={r.stop_reason:<14} iterations={len(r.history)}")


def main():
    section("1. The default run, with every evaluator reported separately")
    r = run_evaluator_optimizer(TASK, verbose=True)
    print("final output:")
    print(r.output)
    print("warnings on the accepted output:", [(i.category, i.message) for i in warnings(r.history[-1].evaluations)])
    summary("default", r)

    section("2. Stagnation: an optimizer that returns the same candidate")
    summary("optimizer returns the input", run_evaluator_optimizer(TASK, optimizer=lambda t, c, e, h: c))

    section("3. Oscillation A -> B -> A is caught by comparing against all history")
    A = generate(TASK)
    B = "\n".join(["- Python was created by Guido van Rossum.", "- Python was first released in 1991.",
                   "- Python is widely used for automation.", "- Python emphasizes readable code."])
    flip = lambda t, c, e, h: B if normalize(c) == normalize(A) else A
    r = run_evaluator_optimizer(TASK, max_iterations=6, optimizer=flip)
    summary("A -> B -> A optimizer", r)
    print("candidates tried:", [len(extract_bullets(a.output)) for a in r.history], "bullets each")

    section("4. Budget exhausted: every revision is different but still wrong")
    counter = {"n": 0}

    def churn(t, c, e, h):
        counter["n"] += 1
        return "\n".join(["- Python was created by Guido van Rossum.", f"- Python fact number {counter['n']}.",
                          "- Python was originally created by Microsoft."])

    r = run_evaluator_optimizer(TASK, max_iterations=4, optimizer=churn)
    summary("churning optimizer", r)
    print("last output still has the false claim:", "Microsoft" in r.output)

    section("5. UNKNOWN is not PASS: the fact verifier is unavailable")
    r = run_evaluator_optimizer(TASK, suite=default_suite(facts_available=False), verbose=True)
    summary("verifier outage", r)

    section("6. Defense in depth: the suite omits the fact verifier, the guardrail catches the claim")
    r = run_evaluator_optimizer(TASK, suite=[check_structure, evaluate_quality], verbose=True)
    summary("misconfigured suite", r)
    print("final output:")
    print(r.output)

    section("7. Runs side by side")
    runs = {
        "default": run_evaluator_optimizer(TASK),
        "stagnating optimizer": run_evaluator_optimizer(TASK, optimizer=lambda t, c, e, h: c),
        "churning optimizer": run_evaluator_optimizer(TASK, optimizer=churn),
        "verifier outage": run_evaluator_optimizer(TASK, suite=default_suite(False)),
    }
    for k, v in runs.items():
        summary(k, v)
    print("every run terminates; only 'verified' means the task was accomplished")


if __name__ == "__main__":
    main()
