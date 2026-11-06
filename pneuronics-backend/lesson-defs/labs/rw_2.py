"""Teaching implementation (our own): the workbench on a real repo, Part 2 - three SCRIPTED pipelines run against separate copies of one fixture (prompt-only, workbench-guided, and a workbench-guided
run with a subtle bug and weak tests), a hash-based scope audit, an independent acceptance probe, a verification gate, a 20-point reviewer and a handoff. The pipelines are fixed scripts, so this measures
the machinery and does not show how a real agent would behave. No language model is used."""
import hashlib
import json
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

PY = sys.executable
APP_BASE = 'def signup(payload):' + chr(10) + '    return {"status": 201, "body": {"username": payload.get("username", "")}}' + chr(10)


def app(limit):
    return ('def signup(payload):' + chr(10) + '    password = payload.get("password", "")' + chr(10) + '    if not isinstance(password, str) or len(password) < ' + str(limit) + ':' + chr(10) +
            '        return {"status": 422, "body": {"error": {"type": "validation_error", "code": "password_too_short"}}}' + chr(10) + '    return {"status": 201, "body": {"username": payload.get("username", "")}}' + chr(10))


T_VALID = 'class T(unittest.TestCase):' + chr(10) + '    def test_valid(self):' + chr(10) + '        self.assertEqual(signup({"password": "abcdefgh"})["status"], 201)' + chr(10)
T_SHORT = '    def test_short(self):' + chr(10) + '        self.assertEqual(signup({"password": "abc"})["status"], 422)' + chr(10)
T_BOUND = '    def test_seven(self):' + chr(10) + '        self.assertEqual(signup({"password": "1234567"})["status"], 422)' + chr(10)
HEAD = 'import unittest' + chr(10) + 'from app import signup' + chr(10)
PROBE = ('import sys' + chr(10) + 'sys.path.insert(0, sys.argv[1])' + chr(10) + 'from app import signup' + chr(10) +
         'ok = signup({"password": "abc"})["status"] == 422 and signup({"password": "1234567"})["status"] == 422 and signup({"password": "12345678"})["status"] == 201' + chr(10) + 'sys.exit(0 if ok else 1)' + chr(10))
ALLOWED = {"app.py", "test_app.py"}


def hashes(root):
    return {str(p.relative_to(root)).replace(chr(92), "/"): hashlib.sha256(p.read_bytes()).hexdigest() for p in root.rglob("*") if p.is_file() and "__pycache__" not in p.parts}


def audit(before, after):
    changed = sorted(k for k in set(before) | set(after) if before.get(k) != after.get(k))
    return changed, [c for c in changed if c not in ALLOWED]


def run_tests(root):
    p = subprocess.run([PY, "-B", "-m", "unittest", "test_app"], cwd=root, capture_output=True, text=True, timeout=60)
    m = re.search(r"Ran (\d+) test", p.stderr)
    return p.returncode, int(m.group(1)) if m else 0


def probe(root):
    return subprocess.run([PY, "-B", "-I", "-c", PROBE, str(root)], capture_output=True, text=True, timeout=60).returncode == 0


def reviewer(r):
    return {"functional": 5 if r["acceptance_met"] else 0, "test_evidence": 5 if r["tests_actually_run"] else 0, "scope": 5 if not r["files_outside_scope"] else 0, "handoff": 5 if r["handoff"] else 0}


def pipeline(name, base):
    root = Path(tempfile.mkdtemp()) / name
    shutil.copytree(base, root)
    before = hashes(root)
    handoff = False
    if name == "prompt_only":
        (root / "app.py").write_text(app(8), encoding="utf-8")
        (root / "README.md").write_text("Updated docs for signup." + chr(10), encoding="utf-8")
        code, ran = None, 0
    elif name == "workbench":
        (root / "app.py").write_text(app(8), encoding="utf-8")
        (root / "test_app.py").write_text(HEAD + T_VALID + T_SHORT + T_BOUND, encoding="utf-8")
        code, ran = run_tests(root)
        handoff = True
    else:
        (root / "app.py").write_text(app(7), encoding="utf-8")
        (root / "test_app.py").write_text(HEAD + T_VALID + T_SHORT, encoding="utf-8")
        code, ran = run_tests(root)
        handoff = True
    changed, outside = audit(before, hashes(root))
    r = {"pipeline": name, "own_tests_exit": code, "tests_run": ran, "tests_actually_run": code == 0 and ran > 0, "acceptance_met": probe(root), "files_changed": changed, "files_outside_scope": outside, "handoff": handoff}
    r["gate"] = "ALLOW" if r["tests_actually_run"] and r["acceptance_met"] and not outside else "BLOCK"
    r["review"] = sum(reviewer(r).values())
    return r


def section(t):
    print(f"\n--- {t} ---")


def main():
    base = Path(tempfile.mkdtemp()) / "base"
    base.mkdir()
    (base / "app.py").write_text(APP_BASE, encoding="utf-8")
    (base / "test_app.py").write_text("import unittest" + chr(10), encoding="utf-8")
    (base / "README.md").write_text("Protected docs." + chr(10), encoding="utf-8")
    (base / "release.sh").write_text("echo release" + chr(10), encoding="utf-8")

    section("1. Genuinely running: three scripted pipelines on separate copies of one fixture")
    results = [pipeline(n, base) for n in ("prompt_only", "workbench", "workbench_weak_tests")]
    for r in results:
        print(f"{r['pipeline']:22} own tests exit={r['own_tests_exit']!s:5} ran={r['tests_run']} acceptance probe={r['acceptance_met']!s:5} outside scope={r['files_outside_scope']} gate={r['gate']:5} review={r['review']}/20")
    print("the prompt-only script fixed the code correctly (the probe passed) but ran no tests, edited the protected README and left no handoff; the workbench script passed every check; the third script shipped an off-by-one bug whose own weak tests passed and was caught only by the independent probe")

    section("2. Genuinely measuring: acceptance and tests are different facts")
    for r in results:
        print(f"{r['pipeline']:22} tests_actually_run={r['tests_actually_run']!s:5} acceptance_met={r['acceptance_met']}")
    print("the prompt-only script has tests_actually_run False and acceptance_met True and the weak-test script has the reverse, so neither fact can stand in for the other, and a gate needs both")

    section("3. Genuinely measuring: the scope audit and bytecode caches")
    root = Path(tempfile.mkdtemp()) / "audit"
    shutil.copytree(base, root)
    (root / "app.py").write_text(app(8), encoding="utf-8")
    (root / "test_app.py").write_text(HEAD + T_VALID, encoding="utf-8")
    before = {str(p.relative_to(root)).replace(chr(92), "/"): hashlib.sha256(p.read_bytes()).hexdigest() for p in root.rglob("*") if p.is_file()}
    subprocess.run([PY, "-m", "unittest", "test_app"], cwd=root, capture_output=True, text=True)
    after = {str(p.relative_to(root)).replace(chr(92), "/"): hashlib.sha256(p.read_bytes()).hexdigest() for p in root.rglob("*") if p.is_file()}
    new = sorted(set(after) - set(before))
    print("files created just by running the tests without -B:", new)
    print("an audit that hashes every file would have flagged these as scope violations; the lab excludes __pycache__ and runs with -B, and a real audit needs an explicit ignore list for generated files")

    section("4. Genuinely checking: the baseline is what makes the audit work")
    root = Path(tempfile.mkdtemp()) / "nobase"
    shutil.copytree(base, root)
    (root / "release.sh").write_text("echo release --prod" + chr(10), encoding="utf-8")
    print("changes found by comparing with the baseline hashes:", audit(hashes(base), hashes(root))[1])
    print("a listing of the final directory alone shows", sorted(hashes(root)), "and cannot say which of them the task changed")

    section("5. Genuinely writing: comparison.json")
    out = Path(tempfile.mkdtemp()) / "comparison.json"
    out.write_text(json.dumps({"scripted": True, "results": [{k: r[k] for k in ("pipeline", "tests_actually_run", "acceptance_met", "gate", "review")} for r in results]}, indent=2), encoding="utf-8")
    print(out.read_text(encoding="utf-8"))
    print("the file records scripted: true on purpose; three hand-written scripts cannot show that a workbench improves a real agent, only that the checks distinguish these three behaviours")


if __name__ == "__main__":
    main()
