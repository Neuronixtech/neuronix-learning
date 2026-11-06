"""Teaching implementation (our own): the workbench on a real repo, Part 1 - a sample application fixture with a missing password check, a corrected handler, boundary tests run for real with
unittest, an independent acceptance probe in a separate interpreter, and mutants that show which tests catch which defects. All in a temporary directory. No language model is used."""
import subprocess
import sys
import tempfile
from pathlib import Path

APP_BASE = '''def signup(payload):
    return {"status": 201, "body": {"username": payload.get("username", "")}}
'''
APP_FIXED = '''def signup(payload):
    username = payload.get("username", "")
    password = payload.get("password", "")
    if not isinstance(password, str) or len(password) < MIN:
        return {"status": 422, "body": {"error": {"type": "validation_error", "code": "password_too_short"}}}
    return {"status": 201, "body": {"username": username}}
'''.replace("MIN", "8")
TESTS = '''import unittest
from app import signup

class SignupTests(unittest.TestCase):
    def test_valid(self):
        self.assertEqual(signup({"username": "a", "password": "abcdefgh"})["status"], 201)

    def test_short_rejected(self):
        r = signup({"username": "a", "password": "abc"})
        self.assertEqual((r["status"], r["body"]["error"]["code"]), (422, "password_too_short"))

    def test_boundary_seven_rejected(self):
        self.assertEqual(signup({"username": "a", "password": "1234567"})["status"], 422)

    def test_boundary_eight_accepted(self):
        self.assertEqual(signup({"username": "a", "password": "12345678"})["status"], 201)

    def test_non_string_rejected(self):
        self.assertEqual(signup({"username": "a", "password": None})["status"], 422)
'''
TESTS_SHORT_ONLY = TESTS[:TESTS.index("    def test_boundary_seven_rejected")]
PROBE = '''
import sys
sys.path.insert(0, sys.argv[1])
from app import signup
checks = {
  "short is 422": signup({"password": "abc"})["status"] == 422,
  "error type": signup({"password": "abc"})["body"].get("error", {}).get("type") == "validation_error",
  "eight is 201": signup({"password": "12345678"})["status"] == 201,
  "seven is 422": signup({"password": "1234567"})["status"] == 422,
}
print(checks)
sys.exit(0 if all(checks.values()) else 1)
'''


def run(cmd, cwd):
    p = subprocess.run(cmd, cwd=cwd, capture_output=True, text=True, timeout=60)
    return p.returncode, (p.stderr.strip().splitlines() or [""])[-1], p.stdout.strip()


def put(root, app, tests):
    (root / "app.py").write_text(app, encoding="utf-8")
    (root / "test_app.py").write_text(tests, encoding="utf-8")


def section(t):
    print(f"\n--- {t} ---")


def main():
    py = sys.executable
    unit = [py, "-m", "unittest", "test_app"]
    with tempfile.TemporaryDirectory() as d:
        root = Path(d)
        (root / "probe.py").write_text(PROBE, encoding="utf-8")

        section("1. Genuinely running: the baseline has the defect, the fixed version does not")
        put(root, APP_BASE, TESTS)
        print("baseline against the five tests: exit", run(unit, root)[0], "|", run(unit, root)[1])
        print("baseline against the independent probe:", run([py, "-I", "probe.py", str(root)], root)[0])
        put(root, APP_FIXED, TESTS)
        print("fixed against the five tests: exit", run(unit, root)[0], "|", run(unit, root)[1])
        print("fixed against the independent probe:", run([py, "-I", "probe.py", str(root)], root)[0], run([py, "-I", "probe.py", str(root)], root)[2])
        print("the task starts failing for a real reason and ends passing both the pipeline's own tests and a probe that lives outside the repository; the probe is a separate interpreter run so it does not depend on the tests it is checking")

        section("2. Genuinely running: which tests catch which defects (mutants of the handler)")
        mutants = {"off by one (<= 8)": APP_FIXED.replace("< 8", "<= 8"), "off by one (< 7)": APP_FIXED.replace("< 8", "< 7"), "no type check": APP_FIXED.replace("not isinstance(password, str) or ", ""),
                   "wrong code": APP_FIXED.replace("password_too_short", "bad")}
        for name, src in mutants.items():
            put(root, src, TESTS)
            full = run(unit, root)[0]
            put(root, src, TESTS_SHORT_ONLY)
            short = run(unit, root)[0]
            print(f"{name:20} full suite exit {full} ({'caught' if full else 'SURVIVED'}) | valid+short tests only exit {short} ({'caught' if short else 'SURVIVED'})")
        print("with only the valid and short-password tests, the <= 8 mutant was still caught because the valid test uses an exactly-eight-character password, while the < 7 mutant and the no-type-check mutant survived; only the seven-character boundary test and the non-string test caught those, so positive, negative and boundary tests each catch different defects")

        section("3. Genuinely checking: tests that never ran")
        put(root, APP_FIXED, "import unittest" + chr(10))
        code, last, _ = run(unit, root)
        print("empty test module: exit", code, "|", last)
        code2, last2, _ = run([py, "-m", "unittest", "no_such_module"], root)
        print("wrong module name: exit", code2, "|", last2)
        put(root, APP_FIXED, TESTS)
        print("neither of these exited 0 on this Python (an empty module exits 5 with NO TESTS RAN and a wrong name exits 1), so the exit code protected the gate here; the test count is still worth recording because other runners and versions may treat an empty suite differently, which this lab did not test")

        section("4. Genuinely measuring: the type check before the length check")
        for label, pw in (("None", None), ("integer 12345678", 12345678), ("list of 8", list("abcdefgh"))):
            try:
                r = len(pw)
                print(f"{label:18} len() works and returns {r}: a length-only check would have accepted it")
            except TypeError as e:
                print(f"{label:18} len() raises TypeError: {e}")
        put(root, APP_FIXED, TESTS)
        print("the fixed handler rejects each without crashing; the list of eight characters shows why the type check comes first, because its length passes a length check even though it is not a string")
        code, _, out = run([py, "-I", "-c", "import sys; sys.path.insert(0, sys.argv[1]); from app import signup; print(signup({'password': list('abcdefgh')})['status'])", str(root)], root)
        print("status for a list password:", out)


if __name__ == "__main__":
    main()
