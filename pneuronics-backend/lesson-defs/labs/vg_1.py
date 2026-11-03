"""Teaching implementation (our own): verification gates, Part 1 - a deterministic verify() over evidence (feedback records, scope, rules), findings with severities, a verdict derived from the
findings, strict mode and determinism. The agent's statements are scripted. No language model is used."""
import itertools
import json
import random

REQUIRED = ["python -m unittest"]


def verify(task_id, art, strict=False):
    findings = []

    def add(code, sev, msg):
        findings.append({"code": code, "severity": sev, "message": msg})

    for cmd in REQUIRED:
        recs = [r for r in art["feedback"] if r["command"] == cmd]
        if not recs:
            add("ACCEPTANCE_NOT_RUN", "block", f"Missing execution evidence: {cmd}")
        elif recs[-1]["exit_code"] != 0:
            add("ACCEPTANCE_FAILED", "block", f"{cmd} exited {recs[-1]['exit_code']}")
    for f in art["touched"]:
        if f not in art["scope"]["allowed"]:
            add("SCOPE_VIOLATION", "block", f"{f} is outside the allowed files")
    for rule in art["rules"]:
        if not rule["ok"]:
            add("RULE_" + rule["id"], rule["severity"], rule["message"])
    if strict:
        for f in findings:
            if f["severity"] == "warn":
                f["severity"] = "block"
    findings.sort(key=lambda f: (f["code"], f["message"]))
    return {"task_id": task_id, "passed": not any(f["severity"] == "block" for f in findings), "findings": findings}


def clean():
    return {"feedback": [{"command": "python -m unittest", "exit_code": 0}], "touched": ["src/pay.py", "tests/test_pay.py"],
            "scope": {"allowed": ["src/pay.py", "tests/test_pay.py"]}, "rules": [{"id": "DOCS", "ok": True, "severity": "warn", "message": ""}]}


def show(label, v):
    print(f"{label:34} passed={v['passed']!s:5} findings={[(f['code'], f['severity']) for f in v['findings']]}")


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: the three scenarios of the lesson")
    show("clean pass", verify("T1", clean()))
    a = clean(); a["feedback"] = []
    show("acceptance never run", verify("T1", a))
    b = clean(); b["touched"].append("src/auth.py")
    show("unauthorised file touched", verify("T1", b))
    c = clean(); c["feedback"][0]["exit_code"] = 1
    show("acceptance command failed", verify("T1", c))
    print("the agent's own statement never appears as an input: the gate saw only records, the scope, the diff and the rule results, so a claim of 'done' could not change any verdict above")

    section("2. Genuinely running: a warning passes under normal policy and blocks in strict mode")
    w = clean(); w["rules"] = [{"id": "DOCS", "ok": False, "severity": "warn", "message": "docs not updated"}]
    show("normal policy", verify("T1", w))
    show("strict policy", verify("T1", w, strict=True))
    print("the same evidence gave different verdicts under two policies, which is correct: the policy is an explicit input, and strict mode is how a team promotes warnings to blockers without editing the rules")

    section("3. Genuinely checking: the verdict cannot contradict its findings")
    cases = [clean(), a, b, c, w]
    ok = all(verify("T", x)["passed"] == (not any(f["severity"] == "block" for f in verify("T", x)["findings"])) for x in cases)
    print("passed equals 'no block finding' for every case:", ok)
    print("passed is computed from the findings and never stored separately, so a report that says passed with a blocking finding, or failed with none, cannot be produced by this function")

    section("4. Genuinely measuring: determinism over shuffled and repeated input")
    base = clean()
    base["touched"] = ["src/pay.py", "x.py", "y.py"]
    base["rules"] = [{"id": f"R{i}", "ok": False, "severity": "warn", "message": f"m{i}"} for i in range(5)]
    outs = set()
    rnd = random.Random(7)
    for _ in range(200):
        x = json.loads(json.dumps(base))
        rnd.shuffle(x["touched"]); rnd.shuffle(x["rules"])
        outs.add(json.dumps(verify("T", x), sort_keys=True))
    print("distinct reports from 200 shuffles of the same evidence:", len(outs))
    print("findings are sorted by code and message before the report is built, so the order of the evidence does not change the report; identical inputs and policy give byte-identical JSON, which makes the report diffable and cacheable")

    section("5. Genuinely measuring: determinism is not correctness")
    weak = clean(); weak["rules"] = []
    weak["touched"] = ["src/pay.py", "src/auth.py"]
    weak["scope"] = {"allowed": ["src/pay.py", "src/auth.py"]}
    show("a scope contract that allows auth", verify("T1", weak))
    print("the gate returned the same pass every time for a task that was told not to touch authentication, because the scope it was handed allowed it; a deterministic gate faithfully applies whatever policy it receives, so the policy needs its own review")


if __name__ == "__main__":
    main()
