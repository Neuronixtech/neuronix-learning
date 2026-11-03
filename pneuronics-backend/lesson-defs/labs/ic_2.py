"""Teaching implementation (our own): agent instructions as executable constraints, Part 2 - attacking the checkers: protected-path matching under normalisation, stale test evidence,
approval chronology and target binding, uncertainty detection by exact string, and severity taken from a trusted file versus the agent's own report. Hand-written runs; no model is used."""
import posixpath

PROTECTED = ["deploy/release.py", "deploy/"]


def naive_protected(run):
    return not (set(run["protected_paths"]) & set(run["changed_paths"]))


def normalised_protected(run):
    def norm(p):
        return posixpath.normpath(p.replace("\\", "/")).lower()
    prot = [norm(p) for p in run["protected_paths"]]
    for c in map(norm, run["changed_paths"]):
        for p in prot:
            if c == p or c.startswith(p.rstrip("/") + "/"):
                return False
    return True


def naive_tests(run):
    return run["tests_ran"] and run["test_exit_code"] == 0


def revision_tests(run):
    return run["tests_ran"] and run["test_exit_code"] == 0 and run.get("tests_revision") == run.get("code_revision")


def naive_approval(run):
    return run["approval"] is not None and run["approval"]["approved"] is True


def bound_approval(run):
    a = run["approval"]
    return (a is not None and a["approved"] is True and a["target"] == run["target"] and a["at"] < run["action_at"])


def question_assumption(run):
    return not (set(run["unresolved"]) & set(run["assumed"]))


def semantic_assumption(run):
    norm = lambda s: " ".join(s.lower().replace("?", "").split())
    return not ({norm(q) for q in run["unresolved"]} & {norm(a) for a in run["assumed"]})


def gate(results, severity_table):
    return all(st == "pass" or severity_table[name] != "block" for name, st in results)


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely checking: protected-path matching against nine spellings of a changed path")
    base = {"protected_paths": ["deploy/release.py", "deploy/"]}
    spellings = ["deploy/release.py", "./deploy/release.py", "deploy//release.py", "deploy\\release.py", "DEPLOY/release.py", "src/../deploy/release.py", "deploy/other.py", "deploy", "src/app.py"]
    for sp in spellings:
        run = dict(base, changed_paths=[sp])
        print(f"{sp:28} naive says clean={naive_protected(run)!s:5} normalised says clean={normalised_protected(run)!s:5}")
    print("the naive set intersection only caught the exact string; normalising separators, '.' and '..' and case flagged every spelling of the release script and everything under the deploy directory; the bare name 'deploy' was flagged as well because normalising strips the trailing slash, so a file that happens to be named deploy would be a false positive, and a case-insensitive match would be wrong on a case-sensitive filesystem")

    section("2. Genuinely checking: tests that ran, but before the final edit")
    runs = {"fresh": dict(tests_ran=True, test_exit_code=0, tests_revision="r2", code_revision="r2"), "stale": dict(tests_ran=True, test_exit_code=0, tests_revision="r1", code_revision="r2"),
            "failed": dict(tests_ran=True, test_exit_code=1, tests_revision="r2", code_revision="r2")}
    for name, run in runs.items():
        print(f"{name:7} naive passes={bool(naive_tests(run))!s:5} revision-aware passes={bool(revision_tests(run))}")
    print("a green run from before the last edit satisfied the naive rule; tying the evidence to the revision refused it, and the revision label itself must come from a trusted runner")

    section("3. Genuinely checking: approval chronology and target binding")
    cases = {"approved before, right target": dict(approval={"approved": True, "target": "prod-eu", "at": 5}, target="prod-eu", action_at=10),
             "approved after the action": dict(approval={"approved": True, "target": "prod-eu", "at": 12}, target="prod-eu", action_at=10),
             "approved a different target": dict(approval={"approved": True, "target": "staging", "at": 5}, target="prod-eu", action_at=10), "no approval": dict(approval=None, target="prod-eu", action_at=10)}
    for name, run in cases.items():
        print(f"{name:30} naive passes={bool(naive_approval(run))!s:5} bound passes={bool(bound_approval(run))}")
    print("the naive rule accepted approval that came late and approval for another target; the bound rule needs the right target recorded before the action, and the approval record must come from a trusted source, not from the agent's own notes")

    section("4. Genuinely measuring: uncertainty detection by exact string versus normalised text")
    pairs = [(["Which production region?"], ["Which production region?"]), (["Which production region?"], ["which production region"]), (["Which production region?"], ["The region is probably eu-west."]), ([], ["anything"])]
    for q, a in pairs:
        run = dict(unresolved=q, assumed=a)
        print(f"question {q!s:32} assumption {a!s:34} exact passes={question_assumption(run)!s:5} normalised passes={semantic_assumption(run)}")
    print("the exact comparison missed a case-and-punctuation variant; both missed a paraphrased assumption, so detecting assumptions made without asking needs more than string matching and this rule is only a hint")

    section("5. Genuinely checking: severity from a trusted file versus the agent's own report")
    results = [("no-protected-writes", "fail"), ("ask-before-assuming", "fail")]
    trusted = {"no-protected-writes": "block", "ask-before-assuming": "warn"}
    forged = {"no-protected-writes": "info", "ask-before-assuming": "warn"}
    print("trusted severities -> release allowed:", gate(results, trusted))
    print("severity downgraded to info by the agent's report -> release allowed:", gate(results, forged))
    print("the failing result is identical in both calls; only the severity source changed, so severities must be read from reviewed policy and never from the run being judged")

    section("6. Genuinely checking: a high score hiding a block failure")
    scores = {"all pass": [("a", "pass")] * 10, "one block fails": [("a", "pass")] * 9 + [("protected", "fail")]}
    sev = {"a": "info", "protected": "block"}
    for name, res in scores.items():
        print(f"{name:16} score {sum(s == 'pass' for _, s in res) / len(res):.0%} gate allowed {gate(res, sev)}")
    print("the same 90 percent score can be a pass or a block depending on which rule failed")


if __name__ == "__main__":
    main()
