"""Teaching implementation (our own): frame the task before code, Part 3 - checking a frame against a REAL temporary git repository: resolving file:line evidence receipts, a decision policy for the
four kinds of unknown, a scope audit of the actual diff against allowed and forbidden paths, and whether an acceptance command really ran a test. The repository and facts are made up. No language model is used."""
import re
import subprocess
import sys
import tempfile
from pathlib import Path

GIT = ["git", "-c", "user.name=lab", "-c", "user.email=lab@example.com", "-c", "commit.gpgsign=false"]


def git(repo, *a):
    return subprocess.run(GIT + list(a), cwd=repo, capture_output=True, text=True, check=True).stdout.strip()


def check_receipt(repo, claim_keyword, receipt):
    m = re.fullmatch(r"([\w./-]+):(\d+)", receipt)
    if not m:
        return "malformed receipt"
    path, line = m.group(1), int(m.group(2))
    f = Path(repo) / path
    if not f.is_file():
        return "file not found"
    lines = f.read_text(encoding="utf-8").splitlines()
    if line > len(lines):
        return f"line {line} beyond end of file ({len(lines)} lines)"
    return "supported" if claim_keyword in lines[line - 1] else "line exists but does not support the claim"


POLICY = {"discoverable": "investigate", "decidable": "decide within delegated authority and record it", "human": "stop and ask", "deferred": "record as a non-goal"}


def next_step(unknowns):
    steps = [(q, POLICY[c]) for q, c in unknowns]
    blocked = [q for q, c in unknowns if c == "human"]
    return steps, blocked


def changed_files(repo, base):
    out = set(git(repo, "diff", "--name-only", "--no-renames", base).splitlines())
    out |= set(git(repo, "ls-files", "--others", "--exclude-standard").splitlines())
    return sorted(out)


def covered(path, prefix):
    prefix = prefix.rstrip("/")
    return path == prefix or path.startswith(prefix + "/")


def audit(files, allowed, forbidden):
    bad = []
    for f in files:
        if any(covered(f, p) for p in forbidden):
            bad.append((f, "forbidden"))
        elif not any(covered(f, p) for p in allowed):
            bad.append((f, "outside allowed paths"))
    return bad


def section(t):
    print(f"\n--- {t} ---")


def main():
    with tempfile.TemporaryDirectory() as d:
        repo = Path(d)
        git(repo, "init", "-q")
        (repo / "src/accounts").mkdir(parents=True)
        (repo / "tests").mkdir()
        (repo / "migrations").mkdir()
        (repo / "src/accounts/normalization.py").write_text("def normalize(email):" + chr(10) + "    return email.strip().lower()" + chr(10), encoding="utf-8")
        (repo / "tests/test_accounts.py").write_text("import unittest" + chr(10) + "class T(unittest.TestCase):" + chr(10) + "    def test_duplicate(self):" + chr(10) + "        self.assertEqual(409, 409)" + chr(10), encoding="utf-8")
        (repo / "migrations/001.sql").write_text("-- schema" + chr(10), encoding="utf-8")
        git(repo, "add", "-A")
        git(repo, "commit", "-q", "-m", "base")
        base = git(repo, "rev-parse", "HEAD")

        section("1. Genuinely running: resolving evidence receipts in the repository")
        for label, kw, rec in (("real line, supports claim", "lower", "src/accounts/normalization.py:2"), ("real line, wrong claim", "409 conflict", "src/accounts/normalization.py:2"), ("line past the end", "lower", "src/accounts/normalization.py:99"),
                               ("file missing", "x", "src/accounts/nope.py:1"), ("no line number", "x", "tests/test_accounts.py")):
            print(f"{label:26} {rec:36} -> {check_receipt(repo, kw, rec)}")
        print("a receipt that looked fine in shape was caught when its line did not exist, when the file was missing and when the line did not contain what the claim says; only the first is actually supported, and even that shows the line says something, not that the claim is wholly true")

        section("2. Genuinely running: the four kinds of unknown and what each requires")
        unknowns = [("Does the database already enforce uniqueness?", "discoverable"), ("What should the private helper be called?", "decidable"), ("May the duplicate response change for existing clients?", "human"), ("Should the registration subsystem be refactored?", "deferred")]
        steps, blocked = next_step(unknowns)
        for q, s in steps:
            print(f"{s:48} <- {q}")
        print("dependent work blocked until a human answers:", blocked)
        print("only the human unknown stops dependent work; the discoverable one is a task for the agent and the deferred one leaves the scope alone, which is the difference between an unresolved question and a blocker")

        section("3. Genuinely running: a scope audit of the real diff")
        allowed, forbidden = ["src/accounts/", "tests/accounts/"], ["migrations/", "deploy/", "src/auth/"]
        (repo / "src/accounts/service.py").write_text("x = 1" + chr(10), encoding="utf-8")
        print("only an allowed file changed:", audit(changed_files(repo, base), allowed, forbidden))
        (repo / "migrations/002_unique_email.sql").write_text("ALTER TABLE ..." + chr(10), encoding="utf-8")
        (repo / "README.md").write_text("docs" + chr(10), encoding="utf-8")
        files = changed_files(repo, base)
        print("changed files:", files)
        print("audit:", audit(files, allowed, forbidden))
        print("the unique-index migration the agent thought cleanest was flagged as forbidden and the README as outside the allowed paths, though the tests might all pass; this is the moment the agent should stop and ask for the scope to be extended, not edit quietly")

        section("4. Genuinely running: did the acceptance command actually run a test?")
        (repo / "tests/__init__.py").write_text("", encoding="utf-8")
        for label, cmd in (("named module that exists", [sys.executable, "-B", "-m", "unittest", "tests.test_accounts", "-v"]), ("named module that does not exist", [sys.executable, "-B", "-m", "unittest", "tests.test_nothing"]), ("echo instead of a test", [sys.executable, "-c", "print('All tests passed')"])):
            p = subprocess.run(cmd, cwd=repo, capture_output=True, text=True)
            m = re.search(r"Ran (\d+) test", p.stderr)
            print(f"{label:34} exit={p.returncode} tests ran={int(m.group(1)) if m else 0}")
        print("the echo exited 0 and printed that tests passed while running none, and the missing module exited non-zero; an acceptance command is evidence only when the number of tests run is checked along with the exit code, and when the test named actually covers the claim")

        section("5. Genuinely measuring: a test that passes without covering the requirement")
        print("test_duplicate asserts 409 == 409:", subprocess.run([sys.executable, "-B", "-m", "unittest", "tests.test_accounts"], cwd=repo, capture_output=True, text=True).returncode == 0)
        print("the only test passes and tests nothing about registration, so a green run here would be a statement about a different behaviour; whether a test supports the claim has to be read from its assertions")


if __name__ == "__main__":
    main()
