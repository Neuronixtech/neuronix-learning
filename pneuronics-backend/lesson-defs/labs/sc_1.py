"""Teaching implementation (our own): scope contracts and task boundaries, Part 1 - loading and validating a JSON scope contract, and classifying changed paths against allowed and
forbidden globs. The glob behaviour is measured with Python's fnmatch on THIS interpreter. No language model is used."""
import json
import sys
import tempfile
from fnmatch import fnmatchcase
from pathlib import Path

REQUIRED = ("task_id", "goal", "allowed_files", "forbidden_files", "acceptance_criteria", "rollback_plan", "approvals_required")
LISTS = ("allowed_files", "forbidden_files", "acceptance_criteria", "approvals_required")


def load_contract(path):
    try:
        c = json.loads(Path(path).read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as e:
        raise ValueError(f"cannot read contract: {type(e).__name__}")
    if not isinstance(c, dict):
        raise ValueError("contract must be an object")
    missing = [k for k in REQUIRED if k not in c]
    if missing:
        raise ValueError("missing fields: " + ", ".join(missing))
    for k in ("task_id", "goal", "rollback_plan"):
        if not isinstance(c[k], str) or not c[k].strip():
            raise ValueError(f"{k} must be a non-empty string")
    for k in LISTS:
        if not isinstance(c[k], list) or not all(isinstance(x, str) for x in c[k]):
            raise ValueError(f"{k} must be a list of strings")
    if not c["allowed_files"]:
        raise ValueError("allowed_files is empty: nothing could ever be in scope")
    return c


def norm(p):
    return p.replace("\\", "/")


def matches(path, pattern):
    path, pattern = norm(path), norm(pattern)
    if pattern.endswith("/**"):
        return path.startswith(pattern[:-3] + "/")
    return fnmatchcase(path, pattern)


def safe_path(p):
    parts = [x for x in norm(p).split("/") if x not in ("", ".")]
    if ".." in parts:
        return None
    return "/".join(parts)


def classify(path, contract):
    if any(matches(path, p) for p in contract["forbidden_files"]):
        return "forbidden"
    if any(matches(path, p) for p in contract["allowed_files"]):
        return "allowed"
    return "off_scope"


def section(t):
    print(f"\n--- {t} ---")


GOOD = {"task_id": "fix-login-validation", "goal": "Reject malformed login identifiers and add a regression test.",
        "allowed_files": ["src/auth/**", "tests/test_login*.py"], "forbidden_files": ["src/database/**", "release/**"],
        "acceptance_criteria": ["python -m unittest tests.test_login"], "rollback_plan": "restore task changes to the recorded baseline",
        "approvals_required": ["production deployment"]}


def main():
    with tempfile.TemporaryDirectory() as d:
        section("1. Genuinely running: loading and validating contracts, including broken ones")
        cases = {"valid": GOOD}
        cases["missing rollback_plan"] = {k: v for k, v in GOOD.items() if k != "rollback_plan"}
        cases["allowed_files not a list"] = dict(GOOD, allowed_files="src/**")
        cases["empty allowed_files"] = dict(GOOD, allowed_files=[])
        cases["blank goal"] = dict(GOOD, goal="   ")
        cases["number inside a list"] = dict(GOOD, forbidden_files=["release/**", 7])
        for label, c in cases.items():
            f = Path(d) / "c.json"
            f.write_text(json.dumps(c), encoding="utf-8")
            try:
                load_contract(f)
                print(f"{label:26} accepted")
            except ValueError as e:
                print(f"{label:26} rejected: {e}")
        (Path(d) / "c.json").write_text("{not json", encoding="utf-8")
        try:
            load_contract(Path(d) / "c.json")
        except ValueError as e:
            print(f"{'malformed JSON':26} rejected: {e}")
        print("every broken contract was rejected before any path was checked, with a message naming the field; a checker that loads a bad contract and carries on is checking against a contract nobody wrote")

        section("2. Genuinely running: classifying paths, forbidden wins over allowed")
        broad = dict(GOOD, allowed_files=["src/**"], forbidden_files=["src/database/**"])
        for p in ("src/auth/login.py", "src/database/driver.py", "tests/test_login.py", "docs/guide.md", "release/deploy.sh"):
            print(f"{p:26} -> {classify(p, broad)}")
        print("src/database/driver.py matches both the allowed src/** and the forbidden src/database/**, and was classified forbidden because forbidden patterns are checked first; the opposite order would have let the broad allowance override the prohibition")

        section("3. Genuinely measuring: what fnmatch globs actually match on this Python")
        tests = [("src/auth/login.py", "src/*.py"), ("src/auth/login.py", "src/auth/*.py"), ("src/auth/deep/x.py", "src/auth/*.py"), ("tests/test_login.py", "tests/test_login*.py"),
                 ("tests/test_login_extra.py", "tests/test_login*.py"), ("SRC/auth/login.py", "src/auth/*.py"), (".env", "*"), ("a/b/.env", "a/*")]
        for path, pat in tests:
            print(f"fnmatchcase({path!r:28}, {pat!r:24}) = {fnmatchcase(path, pat)}")
        print("in fnmatch a single * also crosses slashes, so src/*.py matched src/auth/login.py, a file in a subdirectory, and src/auth/*.py matched src/auth/deep/x.py, which is not what the same patterns mean in a shell; it is case-sensitive under fnmatchcase and it matches dotfiles; a contract has to state which glob dialect it uses and the checker has to be tested against it")

        section("4. Genuinely running: the recursive-pattern helper versus plain fnmatch")
        for path, pat in (("src/auth/login.py", "src/auth/**"), ("src/auth/deep/x.py", "src/auth/**"), ("src/author.py", "src/auth/**"), ("src/auth", "src/auth/**"), ("src/auth/login.py", "src/**/login.py")):
            print(f"matches({path!r:22}, {pat!r:18}) = {matches(path, pat)} | plain fnmatch = {fnmatchcase(path, pat)}")
        print("the /** helper matches the directory prefix and does not match the lookalike src/author.py, but src/**/login.py went to plain fnmatch and also matched, so each pattern shape has its own behaviour and each needs its own test")

        section("5. Genuinely running: path tricks the glob alone does not stop")
        c = dict(GOOD, allowed_files=["src/auth/**"], forbidden_files=["release/**"])
        bs = chr(92)
        for p in ("src/auth/../../release/deploy.sh", "src" + bs + "auth" + bs + "login.py", "./src/auth/login.py", "src//auth/login.py"):
            print(f"{p!r:40} text match -> {classify(p, c):9} | safe_path -> {safe_path(p)!r}")
        print("a traversal path starting with an allowed prefix was classified allowed by the text match although it resolves into release/; safe_path rejects any .. segment and cleans ./ and doubled slashes before matching, but symlinks have to be resolved against the real filesystem, which a text comparison cannot do")


if __name__ == "__main__":
    main()
