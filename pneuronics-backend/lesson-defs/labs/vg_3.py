"""Teaching implementation (our own): verification gates, Part 3 - scope versus the real git diff, a coverage-regression rule with numeric validation, signed overrides (HMAC, key held by the
gate), and testing the gate itself by mutation. All evidence is generated here; keys and values are made up. No language model is used."""
import hashlib
import hmac
import json
import math
import subprocess
import tempfile
import time
from pathlib import Path

GIT = ["git", "-c", "user.name=lab", "-c", "user.email=lab@example.com", "-c", "commit.gpgsign=false"]
KEY = b"lab-only-gate-key"


def git(repo, *a):
    return subprocess.run(GIT + list(a), cwd=repo, capture_output=True, text=True, check=True).stdout


def scope_vs_diff(reported, repo, base):
    actual = set(git(repo, "diff", "--name-only", "--no-renames", base).splitlines()) | set(git(repo, "ls-files", "--others", "--exclude-standard").splitlines())
    return sorted(actual - set(reported)), sorted(set(reported) - actual)


def coverage_rule(prev, cur, max_drop=1.0):
    for label, v in (("previous", prev), ("current", cur)):
        if type(v) not in (int, float) or isinstance(v, bool) or math.isnan(v) or not 0 <= v <= 100:
            return "block", f"{label} coverage is not a number from 0 to 100"
    return ("block", f"coverage fell {prev - cur:.1f} points") if prev - cur > max_drop else ("pass", "within tolerance")


def sign(override):
    msg = json.dumps({k: override[k] for k in ("task_id", "code", "expires")}, sort_keys=True).encode()
    return hmac.new(KEY, msg, hashlib.sha256).hexdigest()


def apply_override(finding, override, task_id, now):
    if override.get("task_id") != task_id or override.get("code") != finding["code"]:
        return False, "override is for another task or finding"
    if override["expires"] < now:
        return False, "override expired"
    if not hmac.compare_digest(sign(override), override.get("sig", "")):
        return False, "signature does not match"
    if finding["code"] in ("SCOPE_VIOLATION", "ACCEPTANCE_FAILED"):
        return False, "this finding cannot be overridden"
    return True, "override accepted"


GATE_SRC = '''
def gate(findings):
    return not any(f["severity"] == "block" for f in findings)
'''
TESTS = [([], True), ([{"severity": "warn"}], True), ([{"severity": "block"}], False), ([{"severity": "warn"}, {"severity": "block"}], False)]


def run_tests(src):
    ns = {}
    exec(src, ns)
    return [ns["gate"](f) == want for f, want in TESTS]


def section(t):
    print(f"\n--- {t} ---")


def main():
    with tempfile.TemporaryDirectory() as d:
        repo = Path(d) / "repo"
        repo.mkdir()
        git(repo, "init", "-q")
        (repo / "src").mkdir()
        (repo / "src/pay.py").write_text("v1" + chr(10), encoding="utf-8")
        git(repo, "add", "-A")
        git(repo, "commit", "-q", "-m", "base")
        base = git(repo, "rev-parse", "HEAD").strip()

        section("1. Genuinely running: the reported touched files against the real git diff")
        (repo / "src/pay.py").write_text("v2" + chr(10), encoding="utf-8")
        (repo / "src/auth.py").write_text("new" + chr(10), encoding="utf-8")
        unreported, phantom = scope_vs_diff(["src/pay.py", "tests/test_pay.py"], repo, base)
        print("changed in git but not reported:", unreported)
        print("reported but not changed in git:", phantom)
        print("both kinds of mismatch are findings: an unreported change is a hidden edit and a reported file that never changed is a claim with nothing behind it; the scope report is a derived assessment, and the diff is the evidence it must agree with")

    section("2. Genuinely running: coverage regression with numeric validation")
    for label, prev, cur in (("85 to 85", 85, 85), ("85 to 84.5", 85, 84.5), ("85 to 83", 85, 83), ("85 to NaN", 85, float("nan")), ("85 to True", 85, True), ("85 to '90'", 85, "90"), ("85 to 120", 85, 120)):
        print(f"{label:12} {coverage_rule(prev, cur)}")
    print("a drop within the tolerance passed and a larger one blocked; NaN fails every comparison, so without the explicit check a NaN coverage would not have looked like a drop at all, and booleans and strings are rejected like exit codes were; the baseline itself is trusted input and has to come from the protected branch")
    print("what a bare comparison says for NaN:", float("nan") < 80, float("nan") > 80)

    section("3. Genuinely running: signed overrides")
    now = time.time()
    finding = {"code": "RULE_DOCS"}
    ov = {"task_id": "T", "code": "RULE_DOCS", "expires": now + 3600}
    ov["sig"] = sign(ov)
    print("valid override:", apply_override(finding, ov, "T", now))
    print("other task    :", apply_override(finding, ov, "OTHER", now))
    print("expired       :", apply_override(finding, ov, "T", now + 7200))
    t = dict(ov, expires=now + 10 ** 6)
    print("expiry edited :", apply_override(finding, t, "T", now))
    blocked = {"task_id": "T", "code": "SCOPE_VIOLATION", "expires": now + 3600}
    blocked["sig"] = sign(blocked)
    print("scope finding :", apply_override({"code": "SCOPE_VIOLATION"}, blocked, "T", now))
    print("a correctly signed, in-date override for the right finding was accepted, and editing the expiry broke the signature; policy also refuses to override a scope violation even when validly signed; the key here is a made-up constant in the lab, and a real key must be held outside the agent's reach")

    section("4. Genuinely running: testing the gate itself by mutation")
    print("tests against the real gate:", run_tests(GATE_SRC))
    mutants = {"block becomes warn": GATE_SRC.replace('"block"', '"warn"'), "any becomes all": GATE_SRC.replace("any(", "all("), "not removed": GATE_SRC.replace("not any", "any"), "always true": "def gate(findings):" + chr(10) + "    return True" + chr(10)}
    for name, src in mutants.items():
        res = run_tests(src)
        print(f"{name:20} tests: {res} -> {'caught' if not all(res) else 'SURVIVED'}")
    print("each of four deliberate breakages made at least one test fail, so these four tests are enough to notice them; this is four hand-made mutants of a two-line function, not a measure of coverage, and the missing-evidence and malformed-evidence paths would need their own tests")

    section("5. Genuinely measuring: a weak test suite lets a mutant survive")
    weak = TESTS[:2]
    for name, src in mutants.items():
        ns = {}
        exec(src, ns)
        res = [ns["gate"](f) == want for f, want in weak]
        print(f"{name:20} survives a suite that only has the pass cases: {all(res)}")
    print("with only the two passing scenarios, one of the four mutants (always true) survived and the other three were still caught because they also changed a passing outcome; a gate that always allows is only caught by a case that should block, which is the case the gate exists for")


if __name__ == "__main__":
    main()
