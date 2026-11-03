"""Teaching implementation (our own): runtime feedback loops, Part 1 - a command wrapper that returns a structured execution record, run against REAL commands on this machine: success,
a failing test run, a timeout, a missing executable, and an exit code of zero that proves nothing. Records are appended to a JSONL file. No language model is used."""
import json
import subprocess
import sys
import tempfile
import time
from datetime import datetime, timezone
from pathlib import Path


def run_with_feedback(command, timeout=20, cwd=None):
    started = datetime.now(timezone.utc).isoformat()
    t0 = time.perf_counter()
    record = {"command": command, "started_at": started, "exit_code": None, "stdout": "", "stderr": "", "timed_out": False, "infrastructure_error": None}
    try:
        p = subprocess.run(command, capture_output=True, text=True, timeout=timeout, cwd=cwd)
        record.update(exit_code=p.returncode, stdout=p.stdout, stderr=p.stderr)
    except subprocess.TimeoutExpired as e:
        record.update(timed_out=True, stdout=(e.stdout or b"").decode("utf-8", "replace") if isinstance(e.stdout, bytes) else (e.stdout or ""))
    except OSError as e:
        record["infrastructure_error"] = type(e).__name__
    record["duration_ms"] = round((time.perf_counter() - t0) * 1000)
    return record


def classify(r):
    if r["infrastructure_error"]:
        return "could not launch"
    if r["timed_out"]:
        return "timed out"
    return "succeeded" if r["exit_code"] == 0 else f"failed (exit {r['exit_code']})"


def append_jsonl(path, record):
    with open(path, "a", encoding="utf-8") as f:
        f.write(json.dumps(record) + chr(10))


def section(t):
    print(f"\n--- {t} ---")


def main():
    with tempfile.TemporaryDirectory() as d:
        log = Path(d) / "feedback_record.jsonl"
        py = sys.executable

        section("1. Genuinely running: four real commands and what the record says about each")
        cases = [("passes", [py, "-c", "print('ok')"]), ("fails", [py, "-c", "import sys; sys.stderr.write('boom' + chr(10)); sys.exit(2)"]),
                 ("times out", [py, "-c", "import time; time.sleep(30)"]), ("missing program", ["no-such-program-xyz", "--version"])]
        for label, cmd in cases:
            r = run_with_feedback(cmd, timeout=1.5)
            append_jsonl(log, r)
            print(f"{label:16} {classify(r):18} exit_code={r['exit_code']!s:5} timed_out={r['timed_out']!s:5} infra={r['infrastructure_error']!s:18} duration={r['duration_ms']} ms")
        print("four different outcomes gave four distinguishable records: a launch failure has no exit code at all, a timeout has none either, and a failing command has one; collapsing them into a single 'failed' hides whether the command ran")

        section("2. Genuinely checking: the JSONL file is machine-readable")
        lines = log.read_text(encoding="utf-8").splitlines()
        rows = [json.loads(x) for x in lines]
        print("lines in file:", len(lines), "| every line parses:", all(isinstance(x, dict) for x in rows), "| commands:", [x["command"][0].split("/")[-1].split(chr(92))[-1] for x in rows])
        print("one JSON object per line means a later session can append, tail or grep the file without loading all of it, and a crash can damage at most the last line")

        section("3. Genuinely running: what a test command reports when no tests exist")
        empty = Path(d) / "empty_project"
        empty.mkdir()

        def last(r):
            ls = r["stderr"].strip().splitlines()
            return ls[-1][:80] if ls else "(stderr empty)"

        disc = [py, "-m", "unittest", "discover", "-s", "tests"]
        r = run_with_feedback(disc, cwd=empty, timeout=120)
        print("no tests directory, normal mode:", classify(r), "| stderr characters:", len(r["stderr"]), "| mentions site-packages:", "site-packages" in r["stderr"])
        r = run_with_feedback([py, "-I"] + disc[1:], cwd=empty)
        print("no tests directory, isolated mode (-I):", classify(r), "|", last(r))
        (empty / "tests").mkdir()
        r2 = run_with_feedback([py, "-I"] + disc[1:], cwd=empty)
        print("empty tests directory, isolated:", classify(r2), "|", last(r2))
        (empty / "tests" / "test_x.py").write_text("import unittest" + chr(10) + "class T(unittest.TestCase):" + chr(10) + "    def test_a(self):" + chr(10) + "        self.assertTrue(True)" + chr(10), encoding="utf-8")
        r3 = run_with_feedback([py, "-I"] + disc[1:], cwd=empty)
        print("one passing test, isolated:", classify(r3), "|", last(r3))
        print("in normal mode the missing directory made discover import a different package named tests from this machine's site-packages and produce 576,562 characters of errors, which is specific to this machine but shows why output must be bounded; in isolated mode a missing directory exited 1, an empty suite exited 5 with NO TESTS RAN on this Python, and only a real test gave exit 0, so a gate should read the exit code and the test count together")

        section("4. Genuinely running: a claim with no record behind it")
        claim = "All tests passed. Task complete."
        evidence = [x for x in rows if "unittest" in " ".join(x["command"])]
        print("agent claim:", claim)
        print("records for a test command in the log:", len(evidence))
        print("a claim that tests passed is supportable only if a record for that command exists with exit code 0; here none exists, so the claim is unsupported, and the correct next action is to run the command, not to continue")

        section("5. Genuinely measuring: the duration field")
        fast = run_with_feedback([py, "-c", "pass"])
        slow = run_with_feedback([py, "-c", "import time; time.sleep(0.5)"])
        print(f"trivial command {fast['duration_ms']} ms | half-second sleep {slow['duration_ms']} ms | difference {slow['duration_ms'] - fast['duration_ms']} ms")
        print("duration includes interpreter start-up, so it is a rough health signal and not a benchmark; a command that suddenly takes ten times longer is worth a look even when it passes")


if __name__ == "__main__":
    main()
