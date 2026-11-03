"""Teaching implementation (our own): agent instructions as executable constraints, Part 1 - a Markdown rule file parsed into a dataclass with validation, a registry of five checker functions
(startup, forbidden, definition of done, uncertainty, approval), and evaluation of two demo runs against run evidence. Hand-written run records; no language model is used."""
import re
from dataclasses import dataclass

RULES_MD = """# Agent Rules

## startup-before-edit
- category: startup
- severity: block
- check: startup_before_edit
- description: Read the task state before the first edit.

## no-protected-file-writes
- category: forbidden
- severity: block
- check: no_protected_file_writes
- description: Do not modify protected release files.

## tests-before-completion
- category: definition-of-done
- severity: block
- check: tests_before_completion
- description: Run the required tests and see a zero exit before claiming completion.

## ask-before-assuming
- category: uncertainty
- severity: warn
- check: asked_before_assuming
- description: Record material ambiguity before assuming.

## approval-before-production-write
- category: approval
- severity: block
- check: approval_before_production_write
- description: Production writes need a recorded approval for the exact target.
"""

CATEGORIES = {"startup", "forbidden", "definition-of-done", "uncertainty", "approval"}
SEVERITIES = {"block", "warn", "info"}


@dataclass(frozen=True)
class Rule:
    slug: str
    category: str
    severity: str
    check: str
    description: str


def parse_rules(md):
    rules, cur, seen = [], None, set()

    def close():
        if cur is None:
            return
        missing = {"category", "severity", "check", "description"} - cur.keys()
        if missing:
            raise ValueError(f"{cur['slug']}: missing fields {sorted(missing)}")
        if cur["category"] not in CATEGORIES:
            raise ValueError(f"{cur['slug']}: unknown category {cur['category']!r}")
        if cur["severity"] not in SEVERITIES:
            raise ValueError(f"{cur['slug']}: unknown severity {cur['severity']!r}")
        if cur["slug"] in seen:
            raise ValueError(f"duplicate slug {cur['slug']}")
        seen.add(cur["slug"])
        rules.append(Rule(**cur))

    for line in md.splitlines():
        m = re.match(r"^## (\S+)\s*$", line)
        if m:
            close()
            cur = {"slug": m.group(1)}
            continue
        f = re.match(r"^- (\w+):\s*(.+)$", line)
        if f and cur is not None:
            cur[f.group(1)] = f.group(2).strip()
    close()
    return rules


def startup_before_edit(run):
    a, b = run.get("initialized_at"), run.get("first_edit_at")
    return None if a is None or b is None else a < b


def no_protected_file_writes(run):
    if "changed_paths" not in run:
        return None
    return not (set(run.get("protected_paths", [])) & set(run["changed_paths"]))


def tests_before_completion(run):
    if "tests_ran" not in run:
        return None
    return run["tests_ran"] is True and run.get("test_exit_code") == 0


def asked_before_assuming(run):
    return not (set(run.get("unresolved_questions", [])) & set(run.get("assumptions_made", [])))


def approval_before_production_write(run):
    if not run.get("production_write_attempted"):
        return True
    a = run.get("approval")
    return isinstance(a, dict) and a.get("approved") is True and a.get("target") == run.get("production_target") and a.get("recorded_before_action") is True


CHECKS = {f.__name__: f for f in (startup_before_edit, no_protected_file_writes, tests_before_completion, asked_before_assuming, approval_before_production_write)}


def evaluate(rule, run):
    fn = CHECKS.get(rule.check)
    if fn is None:
        return "error", f"unknown checker {rule.check}"
    try:
        r = fn(run)
    except Exception as e:
        return "error", type(e).__name__
    return ("unknown", "evidence missing") if r is None else (("pass", "ok") if r else ("fail", "evidence violates the rule"))


def release_allowed(results):
    return not any(st != "pass" and sev == "block" for _, st, sev in results)


def section(t):
    print(f"\n--- {t} ---")


def main():
    rules = parse_rules(RULES_MD)

    section("1. Genuinely running: parse the rule file and check two runs")
    print(f"parsed {len(rules)} rules:", [(r.slug, r.category, r.severity) for r in rules])
    clean = {"initialized_at": 1, "first_edit_at": 2, "protected_paths": ["deploy/release.py"], "changed_paths": ["src/app.py"], "tests_ran": True, "test_exit_code": 0,
             "unresolved_questions": [], "assumptions_made": [], "production_write_attempted": False}
    violating = dict(clean, changed_paths=["src/app.py", "deploy/release.py"], unresolved_questions=["Which region?"], assumptions_made=["Which region?"])
    for name, run in (("clean run", clean), ("violating run", violating)):
        res = [(r.slug, evaluate(r, run)[0], r.severity) for r in rules]
        print(f"{name}: " + ", ".join(f"{s}={st}" for s, st, _ in res) + f" | release allowed: {release_allowed(res)}")
    print("the violating run failed a block rule (protected file) and a warn rule (assumption without asking); the block failure stops release and the warning is recorded without stopping it")

    section("2. Genuinely checking: the parser refuses a broken rule file")
    broken = {"unknown category": RULES_MD.replace("category: startup", "category: hope"), "missing check field": RULES_MD.replace("- check: startup_before_edit\n", ""),
              "duplicate slug": RULES_MD + "\n## startup-before-edit\n- category: startup\n- severity: warn\n- check: startup_before_edit\n- description: again\n", "bad severity": RULES_MD.replace("severity: warn", "severity: loud")}
    for name, md in broken.items():
        try:
            parse_rules(md)
            print(f"{name:20} -> accepted (wrong)")
        except ValueError as e:
            print(f"{name:20} -> refused: {e}")
    print("a rule file that quietly loses a rule would weaken the system, so each malformed entry stops the load; the parser does not check that the named checker exists, which evaluate() reports as an error at run time")

    section("3. Genuinely checking: missing evidence is not a pass")
    for name, run in (("no test record at all", {}), ("tests_ran true but no exit code", {"tests_ran": True}), ("no startup timestamps", {"first_edit_at": 5})):
        out = [(r.slug, evaluate(r, run)) for r in rules if r.check in ("tests_before_completion", "startup_before_edit")]
        print(f"{name:34} -> {out}")
    print("tests_ran alone, with no exit code, failed rather than passing, and an empty record returned unknown; treating absent evidence as success would let an agent comply by saying nothing")

    section("4. Genuinely checking: a score is not the gate")
    results = [("a", "pass", "info")] * 9 + [("protected-file", "fail", "block")]
    score = sum(st == "pass" for _, st, _ in results) / len(results)
    print(f"9 of 10 rules pass, score {score:.0%}, release allowed: {release_allowed(results)}")
    print("a 90 percent compliance score still blocks release because one block-severity rule failed; the summary number and the policy decision answer different questions")

    section("5. Genuinely checking: an unknown checker is an error, not a skipped rule")
    ghost = Rule("ghost", "forbidden", "block", "does_not_exist", "typo in the checker name")
    print("ghost rule ->", evaluate(ghost, clean), "| release allowed:", release_allowed([("ghost", evaluate(ghost, clean)[0], "block")]))
    print("a typo in a checker name would otherwise remove a mandatory control without any visible failure")


if __name__ == "__main__":
    main()
