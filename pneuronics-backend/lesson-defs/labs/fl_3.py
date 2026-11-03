"""Teaching implementation (our own): runtime feedback loops, Part 3 - JSONL rotation, command_id / parent_command_id retry chains, a verification gate over the records, and a scripted
failure-and-repair workflow on a real temporary project. The agent is a scripted stand-in that applies one fixed edit. No language model is used."""
import json
import subprocess
import sys
import tempfile
import time
import uuid
from pathlib import Path

PY = sys.executable


def run(command, cwd, parent=None, timeout=60):
    t0 = time.time()
    p = subprocess.run(command, capture_output=True, text=True, cwd=cwd, timeout=timeout)
    return {"command_id": uuid.uuid4().hex[:8], "parent_command_id": parent, "command": command, "exit_code": p.returncode, "stdout": p.stdout[-300:], "stderr": p.stderr[-300:],
            "finished_at": time.time(), "duration_ms": round((time.time() - t0) * 1000)}


def append_rotating(path, record, max_bytes=400, keep=3):
    path = Path(path)
    line = json.dumps(record) + chr(10)
    if path.exists() and path.stat().st_size + len(line.encode("utf-8")) > max_bytes:
        for i in range(keep, 0, -1):
            src = path if i == 1 else path.with_name(f"{path.name}.{i - 1}")
            dst = path.with_name(f"{path.name}.{i}")
            if src.exists():
                if dst.exists():
                    dst.unlink()
                src.rename(dst)
    with open(path, "a", encoding="utf-8") as f:
        f.write(line)


def read_records(path):
    good, bad = [], 0
    for ln in Path(path).read_text(encoding="utf-8").splitlines():
        try:
            good.append(json.loads(ln))
        except json.JSONDecodeError:
            bad += 1
    return good, bad


def chain(records, last_id):
    by_id = {r["command_id"]: r for r in records}
    out, cur = [], by_id.get(last_id)
    while cur:
        out.append(cur["command_id"])
        cur = by_id.get(cur["parent_command_id"])
    return list(reversed(out))


def gate(records, expected_command, newest_edit_time):
    matching = [r for r in records if r["command"] == expected_command]
    if not matching:
        return "BLOCK", "no record for the required command"
    last = matching[-1]
    if last["finished_at"] < newest_edit_time:
        return "BLOCK", "the record is older than the latest edit"
    if last["exit_code"] != 0:
        return "BLOCK", f"exit code {last['exit_code']}"
    return "ALLOW", "fresh record with exit code 0"


def section(t):
    print(f"\n--- {t} ---")


def main():
    with tempfile.TemporaryDirectory() as d:
        base = Path(d)

        section("1. Genuinely running: rotation bounds the log")
        log = base / "feedback_record.jsonl"
        for i in range(20):
            append_rotating(log, {"i": i, "pad": "x" * 60})
        files = sorted(p.name for p in base.glob("feedback_record.jsonl*"))
        counts = {n: len((base / n).read_text(encoding="utf-8").splitlines()) for n in files}
        print("files:", files)
        print("records per file:", counts, "| total kept:", sum(counts.values()), "of 20 written")
        print("the newest records stayed in the live file and the oldest were dropped when the backups ran out, so storage is bounded; the dropped records are gone for good, and anything that must be kept longer needs separate retention")

        section("2. Genuinely running: a partial last line and the reader")
        with open(log, "a", encoding="utf-8") as f:
            f.write('{"i": 99, "pad": "tru')
        good, bad = read_records(log)
        print("readable records:", len(good), "| damaged lines skipped and counted:", bad)
        print("a crash in the middle of an append left a broken last line; the reader kept every complete record in the live file and reported one damaged line instead of failing on the whole file")

        section("3. Genuinely running: command_id and parent_command_id rebuild a retry history")
        proj = base / "proj"
        proj.mkdir()
        (proj / "m.py").write_text("print(1)" + chr(10), encoding="utf-8")
        a = run([PY, "-c", "import sys; sys.exit(1)"], proj)
        b = run([PY, "-c", "import sys; sys.exit(1)"], proj, parent=a["command_id"])
        c = run([PY, "-c", "print('ok')"], proj, parent=b["command_id"])
        other = run([PY, "-c", "print('unrelated')"], proj)
        recs = [a, b, c, other]
        print("attempt exit codes:", [r["exit_code"] for r in (a, b, c)])
        print("chain for the last attempt:", [recs.index(next(r for r in recs if r["command_id"] == i)) for i in chain(recs, c["command_id"])], "of", len(recs), "records; the unrelated command is not in it:", other["command_id"] not in chain(recs, c["command_id"]))
        print("following parents from the last attempt recovered the two failures and the success in order, without mixing in an unrelated command, which is what a reviewer needs to see that the pass came after two failures")

        section("4. Genuinely running: the gate over records, including missing and stale evidence")
        test_cmd = [PY, "-m", "unittest", "discover", "-s", "tests"]
        (proj / "tests").mkdir()
        (proj / "tests" / "test_m.py").write_text("import unittest" + chr(10) + "class T(unittest.TestCase):" + chr(10) + "    def test_a(self):" + chr(10) + "        self.assertTrue(True)" + chr(10), encoding="utf-8")
        edit_time = time.time()
        print("no record yet:", gate([], test_cmd, edit_time))
        time.sleep(0.05)
        r = run([PY, "-I", "-m", "unittest", "discover", "-s", "tests"], proj)
        gated = [dict(r, command=test_cmd)]
        print("record from -I run labelled with the required command:", gate(gated, test_cmd, edit_time))
        later_edit = time.time() + 1
        print("same record after a later edit:", gate(gated, test_cmd, later_edit))
        print("the gate refused a missing record, accepted a fresh zero exit and refused the same record once the code had changed after it ran; a command that passed before the last edit says nothing about the code now (this lab relabelled the record to keep the gate simple, which a real runner must not do)")

        section("5. Genuinely running: a scripted failure and repair on real code")
        work = base / "discount"
        (work / "tests").mkdir(parents=True)
        (work / "calc.py").write_text("def discount(price, pct):" + chr(10) + "    return price + price * pct / 100" + chr(10), encoding="utf-8")
        (work / "tests" / "test_calc.py").write_text("import unittest, sys, os" + chr(10) + "sys.path.insert(0, os.getcwd())" + chr(10) + "from calc import discount" + chr(10) + "class T(unittest.TestCase):" + chr(10) + "    def test_ten_percent(self):" + chr(10) + "        self.assertEqual(discount(200, 10), 180)" + chr(10), encoding="utf-8")
        cmd = [PY, "-I", "-m", "unittest", "discover", "-s", "tests"]
        first = run(cmd, work)
        print("first run: exit", first["exit_code"], "| evidence:", [x for x in first["stderr"].splitlines() if "AssertionError" in x])
        text = (work / "calc.py").read_text(encoding="utf-8")
        (work / "calc.py").write_text(text.replace("price + price", "price - price"), encoding="utf-8")
        second = run(cmd, work, parent=first["command_id"])
        print("after the scripted fix: exit", second["exit_code"], "| evidence:", [x for x in second["stderr"].splitlines() if "AssertionError" in x] or "none", "| parent is the first run:", second["parent_command_id"] == first["command_id"])
        import shutil
        shutil.rmtree(work / "__pycache__", ignore_errors=True)
        third = run(cmd, work, parent=second["command_id"])
        print("after deleting __pycache__: exit", third["exit_code"], "| chain:", [first["exit_code"], second["exit_code"], third["exit_code"]])
        print("the correct one-character edit still failed with the old assertion value when the test was rerun immediately, which is consistent with stale cached bytecode (the edit kept the file size and landed in the same second; the cause was not inspected directly), and it passed once __pycache__ was removed; on this machine, in three repeated runs, this happened every time; the evidence was real but stale, so a feedback runner should disable or clear bytecode caches when it verifies a change; the stand-in applied one fixed edit, so this shows loop mechanics and not that a real model could find the fix")

if __name__ == "__main__":
    main()
