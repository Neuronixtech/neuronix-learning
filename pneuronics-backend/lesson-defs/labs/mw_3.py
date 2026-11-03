"""Teaching implementation (our own): the minimal agent workbench, Part 3 - a dispatcher that validates tool requests a model might propose, an independent verifier, two tasks run end to
end through the lifecycle, and a REAL unittest suite for the workbench itself (run with subprocess), including a mutation that the suite must catch. No language model is used."""
import json
import subprocess
import sys
import tempfile
import textwrap
from pathlib import Path

WORKBENCH = '''
import json
from pathlib import Path

def resolve(root, name, allowed):
    if name not in allowed:
        raise ValueError("not allowed")
    root = Path(root).resolve()
    t = (root / name).resolve()
    if t == root or root not in t.parents:
        raise ValueError("escapes")
    return t

def dispatch(request, root, task):
    if not isinstance(request, dict) or request.get("tool") != "write_file":
        raise ValueError("unsupported tool")
    path, content = request.get("path"), request.get("content")
    if not isinstance(path, str) or not isinstance(content, str):
        raise ValueError("bad arguments")
    target = resolve(root, path, task["allowed_files"])
    target.write_text(content, encoding="utf-8")
    return {"written": path}

def verify(task, root):
    target = Path(root) / task["allowed_files"][0]
    if not target.is_file():
        return False, "missing file"
    text = target.read_text(encoding="utf-8")
    missing = [c for c in task["required_text"] if c not in text]
    return (not missing), ("ok" if not missing else f"missing {missing}")
'''

TESTS = '''
import tempfile, unittest
from pathlib import Path
import workbench as wb

TASK = {"allowed_files": ["notes.txt"], "required_text": ["Create a project note"]}

class T(unittest.TestCase):
    def test_allowed_write(self):
        with tempfile.TemporaryDirectory() as d:
            self.assertEqual(wb.dispatch({"tool": "write_file", "path": "notes.txt", "content": "x"}, d, TASK), {"written": "notes.txt"})
    def test_disallowed_filename(self):
        with tempfile.TemporaryDirectory() as d:
            with self.assertRaises(ValueError):
                wb.dispatch({"tool": "write_file", "path": "secret.txt", "content": "x"}, d, TASK)
    def test_traversal(self):
        t = dict(TASK, allowed_files=["../x.txt"])
        with tempfile.TemporaryDirectory() as d:
            with self.assertRaises(ValueError):
                wb.dispatch({"tool": "write_file", "path": "../x.txt", "content": "x"}, d, t)
    def test_unknown_tool(self):
        with tempfile.TemporaryDirectory() as d:
            with self.assertRaises(ValueError):
                wb.dispatch({"tool": "delete_file", "path": "notes.txt"}, d, TASK)
    def test_bad_argument_types(self):
        with tempfile.TemporaryDirectory() as d:
            with self.assertRaises(ValueError):
                wb.dispatch({"tool": "write_file", "path": "notes.txt", "content": 5}, d, TASK)
    def test_verify_fails_without_goal(self):
        with tempfile.TemporaryDirectory() as d:
            (Path(d) / "notes.txt").write_text("other", encoding="utf-8")
            self.assertFalse(wb.verify(TASK, d)[0])
    def test_verify_fails_on_missing_file(self):
        with tempfile.TemporaryDirectory() as d:
            self.assertFalse(wb.verify(TASK, d)[0])
    def test_verify_passes_with_goal(self):
        with tempfile.TemporaryDirectory() as d:
            (Path(d) / "notes.txt").write_text("Create a project note", encoding="utf-8")
            self.assertTrue(wb.verify(TASK, d)[0])

if __name__ == "__main__":
    unittest.main()
'''


def run_suite(directory):
    p = subprocess.run([sys.executable, "-B", "-m", "unittest", "-v", "test_wb"], cwd=directory, capture_output=True, text=True, timeout=60)
    return p.returncode, p.stderr.count(" ... ok"), p.stderr.strip().splitlines()[-1], [l for l in p.stderr.splitlines() if "FAIL:" in l or "ERROR:" in l]


def section(t):
    print(f"\n--- {t} ---")


def main():
    with tempfile.TemporaryDirectory() as d:
        base = Path(d)
        (base / "workbench.py").write_text(WORKBENCH, encoding="utf-8")
        (base / "test_wb.py").write_text(TESTS, encoding="utf-8")

        section("1. Genuinely running: the workbench's own unittest suite (real subprocess)")
        code, ok, tail, bad = run_suite(base)
        print(f"exit code {code}, {ok} tests passed, last line: {tail}")
        print("the suite covers the allowlist, traversal, an unknown tool, wrong argument types and the verifier on three file states; it does not cover symlinks, concurrency or crash recovery")

        section("2. Genuinely checking: a mutation the suite must catch (the containment check removed)")
        mutated = WORKBENCH.replace('    if t == root or root not in t.parents:\n        raise ValueError("escapes")\n', "")
        (base / "workbench.py").write_text(mutated, encoding="utf-8")
        code, ok, tail, bad = run_suite(base)
        print(f"exit code {code}, {ok} tests passed, last line: {tail}")
        print("failing tests:", bad)
        (base / "workbench.py").write_text(WORKBENCH, encoding="utf-8")

        section("3. Genuinely checking: a second mutation, the verifier that always says done")
        mutated2 = WORKBENCH.replace('    return (not missing), ("ok" if not missing else f"missing {missing}")', '    return True, "ok"')
        (base / "workbench.py").write_text(mutated2, encoding="utf-8")
        code, ok, tail, bad = run_suite(base)
        print(f"exit code {code}, {ok} tests passed, last line: {tail}")
        print("failing tests:", bad)
        (base / "workbench.py").write_text(WORKBENCH, encoding="utf-8")
        print("deliberately breaking each control and watching a test fail is the evidence that the tests can detect the defect; a suite that passes both the original and the mutant would be proving nothing")

        section("4. Genuinely running: two tasks end to end through a model-style request and an independent verifier")
        sys.path.insert(0, str(base))
        import importlib
        wb = importlib.import_module("workbench")
        work = base / "work"
        work.mkdir()
        tasks = [{"id": "TASK-001", "allowed_files": ["notes.txt"], "required_text": ["Create a project note"], "status": "todo"},
                 {"id": "TASK-002", "allowed_files": ["notes.txt"], "required_text": ["Create a project note", "Verification"], "status": "todo"}]
        proposals = {"TASK-001": "Project notes\nCreate a project note\n", "TASK-002": "Project notes\nCreate a project note\n"}  # the second proposal forgets the verification section
        for t in tasks:
            t["status"] = "in_progress"
            wb.dispatch({"tool": "write_file", "path": "notes.txt", "content": proposals[t["id"]]}, work, t)
            ok, why = wb.verify(t, work)
            t["status"] = "done" if ok else "in_progress"
            print(f"{t['id']}: write returned fine, verifier says {ok} ({why}) -> status {t['status']}")
        print("TASK-002 wrote a file without error and stayed in_progress because the verifier checked the content against its own criteria, not the fact that the write succeeded")

        section("5. Genuinely checking: requests a model might produce that the dispatcher must refuse")
        t = tasks[0]
        for req in ({"tool": "write_file", "path": "notes.txt", "content": "ok"}, {"tool": "write_file", "path": "../outside.txt", "content": "x"}, {"tool": "shell", "cmd": "rm -rf /"}, {"tool": "write_file", "path": ["notes.txt"], "content": "x"}, "write notes.txt please", None):
            try:
                print(f"{str(req)[:62]:64} -> {wb.dispatch(req, work, t if req != {'tool': 'write_file', 'path': '../outside.txt', 'content': 'x'} else dict(t, allowed_files=['../outside.txt']))}")
            except ValueError as e:
                print(f"{str(req)[:62]:64} -> refused: {e}")
        print("the model proposes and the dispatcher decides: unknown tools, wrong types, escaping paths and non-dictionary requests are all refused before anything is written; this dispatcher has no approval step, rate limit or audit log")


if __name__ == "__main__":
    main()
