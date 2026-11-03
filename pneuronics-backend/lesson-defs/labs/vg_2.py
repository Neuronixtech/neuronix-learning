"""Teaching implementation (our own): verification gates, Part 2 - evidence validation and fail-closed behaviour: Python's bool-is-int trap, wrong types, task and revision identity, duplicate
records, command matching, and the command-line exit codes through a real subprocess. No language model is used."""
import json
import math
import subprocess
import sys
import tempfile
from pathlib import Path

CMD = "python -m unittest"


def valid_exit(v):
    return type(v) is int


def validate(rec, task_id, revision):
    errs = []
    if not isinstance(rec, dict):
        return ["record is not an object"]
    for k in ("command", "exit_code", "task_id", "revision"):
        if k not in rec:
            errs.append(f"missing {k}")
    if errs:
        return errs
    if not isinstance(rec["command"], str):
        errs.append("command must be a string")
    if not valid_exit(rec["exit_code"]):
        errs.append(f"exit_code must be an int, got {type(rec['exit_code']).__name__}")
    if rec["task_id"] != task_id:
        errs.append("record belongs to another task")
    if rec["revision"] != revision:
        errs.append("record is for another revision")
    return errs


def verify(records, task_id, revision, normalise=False):
    findings, valid = [], []
    for i, r in enumerate(records):
        e = validate(r, task_id, revision)
        if e:
            findings.append(("EVIDENCE_INVALID", i, e[0]))
        else:
            valid.append(r)
    key = (lambda s: " ".join(s.split())) if normalise else (lambda s: s)
    m = [r for r in valid if key(r["command"]) == key(CMD)]
    if not m:
        findings.append(("ACCEPTANCE_NOT_RUN", None, CMD))
    elif m[-1]["exit_code"] != 0:
        findings.append(("ACCEPTANCE_FAILED", None, str(m[-1]["exit_code"])))
    return not findings, findings


def rec(**kw):
    base = {"command": CMD, "exit_code": 0, "task_id": "T", "revision": "r2"}
    base.update(kw)
    return base


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely checking: values Python treats as 0 and what a type check does with them")
    for label, v in (("int 0", 0), ("bool False", False), ("str '0'", "0"), ("float 0.0", 0.0), ("None", None), ("bool True", True)):
        loose = v == 0
        print(f"{label:11} == 0: {loose!s:5} | isinstance int: {isinstance(v, int)!s:5} | strict type is int: {valid_exit(v)}")
    print("False == 0 and isinstance(False, int) are both true in Python, so a validator that only checks isinstance accepts a boolean as an exit code, and a loose comparison accepts 0.0 as success; the strict test type(v) is int rejects all of them except a real integer")

    section("2. Genuinely running: malformed records fail closed")
    cases = [("valid", rec()), ("exit_code is False", rec(exit_code=False)), ("exit_code is '0'", rec(exit_code="0")), ("exit_code is None", rec(exit_code=None)),
             ("missing revision", {k: v for k, v in rec().items() if k != "revision"}), ("not an object", "ok")]
    for label, r in cases:
        ok, f = verify([r], "T", "r2")
        print(f"{label:20} passed={ok!s:5} {f[:2]}")
    print("every malformed record produced an invalid-evidence finding and, because it was excluded from the valid set, an acceptance-not-run finding as well; the gate did not guess what the writer meant")

    section("3. Genuinely running: identity and revision")
    print("evidence for another task      :", verify([rec(task_id="OTHER")], "T", "r2")[0])
    print("pass recorded on an older revision:", verify([rec(revision="r1")], "T", "r2")[0])
    print("old pass then new failure       :", verify([rec(revision="r1"), rec(exit_code=1)], "T", "r2"))
    print("old failure then new pass       :", verify([rec(revision="r1", exit_code=1), rec()], "T", "r2")[0])
    print("same revision, fail then pass    :", verify([rec(exit_code=1), rec()], "T", "r2")[0], "| same revision, pass then fail:", verify([rec(), rec(exit_code=1)], "T", "r2")[0])
    print("a pass for another task or an older revision was not accepted as proof; this gate also reports every stale record as invalid evidence, so a stale record next to a valid final pass still blocked (the 'old failure then new pass' line), which is strict but noisy, and a gate that filters by revision first would pass; with two records for the final revision the last one decided; each of these is a policy choice that has to be written down")

    section("4. Genuinely running: how exactly the command must match")
    for label, c in (("exact", CMD), ("double space", "python  -m unittest"), ("trailing space", CMD + " "), ("different flags", CMD + " -v")):
        print(f"{label:16} exact match -> {verify([rec(command=c)], 'T', 'r2')[0]!s:5} | whitespace-normalised -> {verify([rec(command=c)], 'T', 'r2', normalise=True)[0]}")
    print("a harmless double space failed the exact match, and normalising whitespace fixed that without accepting a command with extra flags; whether -v counts is a policy decision, because flags may change what is run")

    section("5. Genuinely running: the command-line exit codes through a real subprocess")
    with tempfile.TemporaryDirectory() as d:
        prog = Path(d) / "gate.py"
        prog.write_text("import json, sys" + chr(10) + "try:" + chr(10) + "    data = json.load(open(sys.argv[1]))" + chr(10) + "    assert isinstance(data, list) and all(isinstance(x, dict) for x in data)" + chr(10) +
                        "except Exception:" + chr(10) + "    print('evidence unreadable'); sys.exit(2)" + chr(10) +
                        "ok = any(x.get('command') == 'python -m unittest' and type(x.get('exit_code')) is int and x['exit_code'] == 0 for x in data)" + chr(10) +
                        "print('PASS' if ok else 'BLOCK'); sys.exit(0 if ok else 1)" + chr(10), encoding="utf-8")
        for label, payload in (("good evidence", json.dumps([rec()])), ("failing evidence", json.dumps([rec(exit_code=1)])), ("corrupt file", "{not json"), ("wrong shape", json.dumps({"a": 1}))):
            f = Path(d) / "ev.json"
            f.write_text(payload, encoding="utf-8")
            p = subprocess.run([sys.executable, "-I", str(prog), str(f)], capture_output=True, text=True)
            print(f"{label:17} printed {p.stdout.strip():18} exit code {p.returncode}")
    print("0 means verified, 1 means verified and blocked, and 2 means the evidence could not be read; keeping 2 separate lets a CI job tell 'the work is not done' from 'the gate could not decide', and both stop the pipeline")
    print("NaN check for reference:", math.isnan(float('nan')), "- numeric evidence such as coverage needs the same strictness, which the next part applies")


if __name__ == "__main__":
    main()
