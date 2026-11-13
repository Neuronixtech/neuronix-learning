"""Teaching implementation (our own): evidence-backed execution plan, Part 2 - collecting repository evidence receipts (existence, size, SHA-256, containment inside the root, drift after an edit) and running
proof commands for real with exit code, output and timeout. The repository is a temporary directory made by this lab. No language model is used."""
import hashlib
import subprocess
import sys
import tempfile
import time
from pathlib import Path

PY = sys.executable


def sha(path):
    d = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(65536), b""):
            d.update(chunk)
    return d.hexdigest()


def inspect_file(root, rel):
    root = Path(root).resolve()
    target = (root / rel).resolve()
    if root != target and root not in target.parents:
        return {"source": rel, "status": "outside_root"}
    if not target.exists():
        return {"source": rel, "status": "missing"}
    if target.is_dir():
        return {"source": rel, "status": "directory"}
    return {"source": rel, "status": "found", "size": target.stat().st_size, "sha256": sha(target)[:12]}


def run_proof(command, cwd, timeout=20, expected=0):
    t0 = time.monotonic()
    try:
        p = subprocess.run(command, cwd=cwd, capture_output=True, text=True, timeout=timeout, check=False)
        r = {"exit_code": p.returncode, "timed_out": False, "stdout": p.stdout.strip()[-120:], "stderr": p.stderr.strip()[-120:]}
    except subprocess.TimeoutExpired:
        r = {"exit_code": None, "timed_out": True, "stdout": "", "stderr": ""}
    r["seconds"] = round(time.monotonic() - t0, 2)
    r["passed"] = (not r["timed_out"]) and r["exit_code"] == expected
    return r


def tests_ran(stderr):
    import re
    m = re.search(r"Ran (\d+) test", stderr)
    return int(m.group(1)) if m else 0


def section(t):
    print(f"\n--- {t} ---")


def main():
    with tempfile.TemporaryDirectory() as d:
        root = Path(d) / "repo"
        (root / "app").mkdir(parents=True)
        (root / "tests").mkdir()
        (root / "app/endpoint.py").write_text("def products():" + chr(10) + "    return [1, 2, 3]" + chr(10), encoding="utf-8")
        (root / "app/helpers.py").write_text("def paginate(items, size=20):" + chr(10) + "    return items[:size]" + chr(10), encoding="utf-8")
        (root / "tests/test_endpoint.py").write_text("import unittest" + chr(10) + "from app.endpoint import products" + chr(10) + "class T(unittest.TestCase):" + chr(10) + "    def test_products(self):" + chr(10) + "        self.assertEqual(len(products()), 3)" + chr(10), encoding="utf-8")
        (root / "app/__init__.py").write_text("", encoding="utf-8")
        (root / "tests/__init__.py").write_text("", encoding="utf-8")

        section("1. Genuinely running: evidence receipts for five paths")
        for rel in ("app/endpoint.py", "app/missing.py", "app", "../outside.txt", "app/../../outside.txt"):
            print(f"{rel:24} {inspect_file(root, rel)}")
        print("a real file gave size and a SHA-256 prefix, a missing file and a directory were reported as such, and both paths that climbed above the root were refused; a receipt says the file existed with that content when inspected, and nothing about what the code means")

        section("2. Genuinely running: a receipt goes stale when the file changes")
        before = inspect_file(root, "app/endpoint.py")
        (root / "app/endpoint.py").write_text("def products(page_size=20):" + chr(10) + "    return [1, 2, 3][:page_size]" + chr(10), encoding="utf-8")
        after = inspect_file(root, "app/endpoint.py")
        print("before:", before["sha256"], "| after:", after["sha256"], "| same evidence:", before["sha256"] == after["sha256"])
        print("the hash changed, so an observation recorded against the first version no longer describes the file; evidence should name the content it saw, and a plan built on old receipts needs them refreshed")

        section("3. Genuinely running: evidence that changes the plan")
        planned = "W-002: create a new pagination utility in app/pagination.py"
        found = inspect_file(root, "app/helpers.py")
        revised = "W-002: extend the existing paginate helper in app/helpers.py" if found["status"] == "found" else planned
        print("planned:", planned)
        print("inspection of app/helpers.py:", found["status"], "| contains paginate:", "def paginate" in (root / "app/helpers.py").read_text(encoding="utf-8"))
        print("revised:", revised)
        print("the existing helper was found, so the item to build a new utility was replaced by one to extend it; evidence that never changes a decision is decoration, and this is a case where it did")

        section("4. Genuinely running: proof commands, run for real and recorded")
        cases = {"unittest that passes": [PY, "-B", "-m", "unittest", "tests.test_endpoint"], "command that fails": [PY, "-c", "import sys; sys.stderr.write('assertion failed'); sys.exit(1)"],
                 "command that hangs": [PY, "-c", "import time; time.sleep(30)"], "program that cannot start": ["no-such-program-xyz"]}
        for label, cmd in cases.items():
            try:
                r = run_proof(cmd, root, timeout=1.5)
                print(f"{label:26} exit={r['exit_code']!s:5} timed_out={r['timed_out']!s:5} passed={r['passed']!s:5} tests_ran={tests_ran(r['stderr'])}")
            except OSError as e:
                print(f"{label:26} could not launch: {type(e).__name__}")
        print("the passing, failing and hanging commands each produced a different record, and the program that could not start raised before any record existed, so a runner must catch that case too or the item would silently have no proof")

        section("5. Genuinely checking: exit 0 is not proof the right test ran")
        for label, cmd in (("echo instead of a test", [PY, "-c", "print('All tests passed')"]), ("wrong module name", [PY, "-B", "-m", "unittest", "tests.test_nothing"]), ("named test", [PY, "-B", "-m", "unittest", "tests.test_endpoint"])):
            r = run_proof(cmd, root)
            print(f"{label:24} exit={r['exit_code']} tests_ran={tests_ran(r['stderr'])} passed={r['passed']}")
        print("the echo passed with zero tests run and the misnamed module failed, which is why the gate checks the test count and the command against the planned proof, and why a planned proof is not an executed proof")


if __name__ == "__main__":
    main()
