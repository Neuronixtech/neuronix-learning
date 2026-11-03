"""Teaching implementation (our own): agent workbench engineering, Part 1 - the seven surfaces around a model. A scripted 'agent' edits a REAL temporary repository,
the workbench runs the real tests with subprocess, hashes files to find the real changed set, and compares a prompt-only run with a guided run. No language model is used."""
import hashlib
import json
import subprocess
import sys
import tempfile
from pathlib import Path

APP_OLD = "def signup(p):\n    return {'status': 201}\n"
APP_NEW = "def signup(p):\n    pw = p.get('password', '')\n    if not isinstance(pw, str) or len(pw) < 8:\n        return {'status': 422, 'error': 'password_too_short'}\n    return {'status': 201}\n"
APP_WRONG = "def signup(p):\n    pw = p.get('password', '')\n    if len(pw) < 6:\n        return {'status': 422, 'error': 'password_too_short'}\n    return {'status': 201}\n"
TEST = ("import unittest\nfrom app import signup\n\nclass T(unittest.TestCase):\n    def test_short(self):\n        self.assertEqual(signup({'password': 'abc'})['status'], 422)\n"
        "    def test_boundary(self):\n        self.assertEqual(signup({'password': '12345678'})['status'], 201)\n    def test_seven(self):\n        self.assertEqual(signup({'password': '1234567'})['status'], 422)\n")

ALLOWED = {"app.py", "test_app.py"}


def put(root, name, text):
    p = root / name
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(text, encoding="utf-8")


def snapshot(root):
    return {str(p.relative_to(root)).replace("\\", "/"): hashlib.sha256(p.read_bytes()).hexdigest() for p in root.rglob("*") if p.is_file() and "__pycache__" not in p.parts and p.suffix != ".pyc"}


def changed(before, after):
    return sorted(k for k in set(before) | set(after) if before.get(k) != after.get(k))


def run_tests(root):
    p = subprocess.run([sys.executable, "-B", "-m", "unittest", "-v", "test_app"], cwd=root, capture_output=True, text=True, timeout=30)
    return {"command": "python -m unittest -v test_app", "exit_code": p.returncode, "ran": p.stderr.count(" ... "), "stderr_tail": p.stderr.strip().splitlines()[-1]}


def baseline(root):
    put(root, "app.py", APP_OLD)
    put(root, "test_app.py", TEST)
    put(root, "README.md", "docs\n")
    put(root, "scripts/release.sh", "echo release\n")


def prompt_only(root, impl=APP_NEW, touch_release=True, run=False):
    before = snapshot(root)
    put(root, "app.py", impl)
    if touch_release:
        put(root, "scripts/release.sh", "echo changed\n")
    fb = run_tests(root) if run else None
    return {"claimed_complete": True, "feedback": fb, "changed": changed(before, snapshot(root))}


def workbench(root, impl=APP_NEW):
    before = snapshot(root)
    state = {"task": "signup-validation", "status": "in_progress", "next_action": "implement"}
    put(root, "app.py", impl)
    fb = run_tests(root)
    ch = changed(before, snapshot(root))
    outside = [c for c in ch if c not in ALLOWED]
    verified = fb["exit_code"] == 0 and fb["ran"] >= 3 and not outside
    state.update(status="verified" if verified else "blocked", next_action="request review" if verified else "fix failing checks")
    handoff = {"summary": "password length validation", "changed_files": ch, "commands_run": [fb["command"]], "failed_attempts": [] if fb["exit_code"] == 0 else [fb], "open_risks": [], "next_action": state["next_action"], "verdict_pointer": "verification.json"}
    return {"claimed_complete": verified, "feedback": fb, "changed": ch, "outside": outside, "handoff": handoff, "state": state}


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: a prompt-only agent that edits the code and an extra file")
    with tempfile.TemporaryDirectory() as d:
        root = Path(d)
        baseline(root)
        r = prompt_only(root)
        print("claimed complete:", r["claimed_complete"], "| tests run:", r["feedback"], "| changed files:", r["changed"])
        fb = run_tests(root)
        print("the same repository checked afterwards:", fb)
    print("the agent said it was finished, ran nothing, and changed scripts/release.sh as well as app.py; the tests pass when somebody runs them, which is exactly why a claim and evidence are different things")

    section("2. Genuinely running: the guided run on a fresh copy of the same repository")
    with tempfile.TemporaryDirectory() as d:
        root = Path(d)
        baseline(root)
        g = workbench(root)
        print("state:", g["state"])
        print("feedback:", g["feedback"])
        print("changed:", g["changed"], "| outside scope:", g["outside"])
        print("handoff next_action:", g["handoff"]["next_action"])

    section("3. Genuinely running: the guided run when the implementation is wrong (accepts 6-character passwords)")
    with tempfile.TemporaryDirectory() as d:
        root = Path(d)
        baseline(root)
        g = workbench(root, impl=APP_WRONG)
        print("claimed complete:", g["claimed_complete"], "| state:", g["state"]["status"], "| exit code:", g["feedback"]["exit_code"], "| tail:", g["feedback"]["stderr_tail"])
        print("failed attempts recorded in the handoff:", len(g["handoff"]["failed_attempts"]))
    with tempfile.TemporaryDirectory() as d:
        root = Path(d)
        baseline(root)
        r = prompt_only(root, impl=APP_WRONG, touch_release=False)
        print("prompt-only on the same wrong implementation: claimed complete =", r["claimed_complete"], "| evidence =", r["feedback"])
    print("the boundary test (seven characters) caught the off-by-one that a happy-path test would have missed; the prompt-only run reported success without ever looking")

    section("4. Genuinely checking: a test file that exists is not a test that ran")
    with tempfile.TemporaryDirectory() as d:
        root = Path(d)
        baseline(root)
        put(root, "test_app.py", "import unittest\n\nclass Empty(unittest.TestCase):\n    pass\n")
        fb = run_tests(root)
        print("empty suite:", fb)
        print(f"{fb['ran']} tests executed and this Python reports exit code {fb['exit_code']} (NO TESTS RAN); older Python versions exit 0 for an empty suite, so a gate must not depend on the interpreter version and should require both a zero exit and a minimum number of tests that actually ran")

    section("5. Genuinely measuring: which of seven surfaces would have caught each failure in sections 1 to 4")
    table = [("claimed success with no tests run", "feedback, verification"), ("unrelated file changed (scripts/release.sh)", "scope"), ("off-by-one in the validator", "verification (boundary test)"),
             ("zero tests executed", "verification"), ("agent forgets what remains after a restart", "state, handoff"), ("agent grades its own work", "review"), ("rules not applied", "instructions")]
    for failure, surfaces in table:
        print(f"{failure:46} -> {surfaces}")
    print("failures that look like model weakness are often a missing surface; the remedy depends on which surface is missing, not on a smarter model")


if __name__ == "__main__":
    main()
