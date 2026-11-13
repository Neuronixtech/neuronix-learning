"""Teaching implementation (our own): evidence-backed execution plan, Part 3 - durable execution state (pending, running, failed, verified), what can run next after verification versus after scheduling,
resuming after an interruption, a verification gate that combines scope and proof against a REAL git diff, stale proof, and an ordering rule for irreversible actions that is our own policy, not the lesson's.
Everything runs in temporary directories. No language model is used."""
import json
import os
import subprocess
import tempfile
from fnmatch import fnmatch
from pathlib import Path

GIT = ["git", "-c", "user.name=lab", "-c", "user.email=lab@example.com", "-c", "commit.gpgsign=false"]
STATUSES = {"pending", "running", "failed", "verified"}
PLAN = {"W-001": [], "W-002": ["W-001"], "W-003": ["W-001"], "W-004": ["W-002", "W-003"]}


def git(repo, *a):
    return subprocess.run(GIT + list(a), cwd=repo, capture_output=True, text=True, check=True).stdout.strip()


def new_state():
    return {k: {"status": "pending", "proof_receipt": None} for k in PLAN}


def set_status(state, k, status, receipt=None):
    if k not in state:
        raise KeyError(f"unknown item {k}")
    if status not in STATUSES:
        raise ValueError(f"unknown status {status}")
    if status == "verified" and not receipt:
        raise ValueError("verified requires a proof receipt")
    state[k] = {"status": status, "proof_receipt": receipt}


def ready_to_execute(state):
    return sorted(k for k, v in state.items() if v["status"] == "pending" and all(state[d]["status"] == "verified" for d in PLAN[k]))


def recover(state):
    interrupted = [k for k, v in state.items() if v["status"] == "running"]
    for k in interrupted:
        state[k] = {"status": "pending", "proof_receipt": None}
    return interrupted


def scope_gate(changed, allowed, forbidden, proof):
    reasons = []
    for f in changed:
        if any(fnmatch(f, p) for p in forbidden):
            reasons.append(f"forbidden change: {f}")
        elif not any(fnmatch(f, p) for p in allowed):
            reasons.append(f"outside allowed paths: {f}")
    if proof is None:
        reasons.append("no proof receipt")
    elif proof["timed_out"] or proof["exit_code"] != proof["expected"]:
        reasons.append("proof failed")
    elif proof.get("tests_ran", 0) < 1:
        reasons.append("proof ran no tests")
    return ("PASS" if not reasons else "BLOCK"), reasons


def irreversible_before_approval(items):
    """Our own rule: an item marked irreversible must depend, directly or indirectly, on an item marked approval."""
    by = {i["id"]: i for i in items}

    def ancestors(k, seen=None):
        seen = seen or set()
        for d in by[k]["deps"]:
            if d not in seen:
                seen.add(d)
                ancestors(d, seen)
        return seen
    return [i["id"] for i in items if i.get("irreversible") and not any(by[a].get("approval") for a in ancestors(i["id"]))]


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: what can run next depends on verification, not on the schedule")
    s = new_state()
    print("start:", ready_to_execute(s))
    set_status(s, "W-001", "running")
    print("W-001 running:", ready_to_execute(s))
    set_status(s, "W-001", "failed")
    print("W-001 failed :", ready_to_execute(s))
    set_status(s, "W-001", "verified", "receipts/w001.json")
    print("W-001 verified:", ready_to_execute(s))
    try:
        set_status(s, "W-002", "verified")
    except ValueError as e:
        print("verifying W-002 with no receipt:", e)
    print("the wave schedule would have released W-002 and W-003 as soon as W-001 was placed in wave 1, while the execution state released them only once W-001 was verified; a failed prerequisite releases nothing")

    section("2. Genuinely running: resuming after an interruption")
    s = new_state()
    set_status(s, "W-001", "verified", "receipts/w001.json")
    set_status(s, "W-002", "running")
    path = Path(tempfile.mkdtemp()) / "state.json"
    path.write_text(json.dumps(s), encoding="utf-8")
    loaded = json.loads(path.read_text(encoding="utf-8"))
    print("state on disk after the session ended:", {k: v["status"] for k, v in loaded.items()})
    print("interrupted items found:", recover(loaded), "| now ready:", ready_to_execute(loaded))
    print("W-002 was left running with no receipt, so the next session treated it as unfinished and reset it to pending instead of assuming success; the workspace and logs still have to be inspected before it is rerun, because the first attempt may have changed files")

    section("3. Genuinely running: a torn state file versus an atomic replace")
    good = Path(tempfile.mkdtemp()) / "state.json"
    good.write_text(json.dumps(new_state()), encoding="utf-8")
    good.write_text(json.dumps(new_state())[:25], encoding="utf-8")
    try:
        json.loads(good.read_text(encoding="utf-8"))
        print("torn write: parsed")
    except json.JSONDecodeError:
        print("torn write (cut short on purpose): unreadable")
    safe = Path(tempfile.mkdtemp()) / "state.json"
    safe.write_text(json.dumps(new_state()), encoding="utf-8")
    tmp = safe.with_suffix(".tmp")
    tmp.write_text(json.dumps(new_state())[:25], encoding="utf-8")
    print("crash while writing the temp file, state file still parses:", isinstance(json.loads(safe.read_text(encoding="utf-8")), dict))
    os.replace(safe, safe.with_suffix(".bak"))
    print("the in-place write left an unreadable file, and writing a temp file first kept the last good state when the simulated crash hit the temp file")

    section("4. Genuinely running: the gate on a real git diff, tests passing and a forbidden file changed")
    with tempfile.TemporaryDirectory() as d:
        repo = Path(d)
        git(repo, "init", "-q")
        (repo / "app").mkdir()
        (repo / "app/checkout.py").write_text("x = 1" + chr(10), encoding="utf-8")
        (repo / "production.env").write_text("KEY=old" + chr(10), encoding="utf-8")
        git(repo, "add", "-A")
        git(repo, "commit", "-q", "-m", "base")
        base = git(repo, "rev-parse", "HEAD")
        (repo / "app/checkout.py").write_text("x = 2" + chr(10), encoding="utf-8")
        proof = {"exit_code": 0, "expected": 0, "timed_out": False, "tests_ran": 3}
        allowed, forbidden = ["app/*", "tests/*"], ["production.env"]
        changed = sorted(set(git(repo, "diff", "--name-only", base).splitlines()))
        print("changed:", changed, "->", scope_gate(changed, allowed, forbidden, proof))
        (repo / "production.env").write_text("KEY=new" + chr(10), encoding="utf-8")
        changed = sorted(set(git(repo, "diff", "--name-only", base).splitlines()))
        print("changed:", changed, "->", scope_gate(changed, allowed, forbidden, proof))
        print("no proof            ->", scope_gate(changed[:1], allowed, forbidden, None))
        print("proof ran zero tests ->", scope_gate(changed[:1], allowed, forbidden, dict(proof, tests_ran=0)))
    print("with every test passing the gate still blocked once production.env was in the diff, and it also blocked a missing proof and a proof that ran no tests; the changed-file list came from git and not from the worker")

    section("5. Genuinely running: stale proof after a later edit")
    with tempfile.TemporaryDirectory() as d:
        f = Path(d) / "calc.py"
        f.write_text("v1", encoding="utf-8")
        import hashlib
        receipt = {"file": "calc.py", "sha": hashlib.sha256(f.read_bytes()).hexdigest()[:10]}
        f.write_text("v2", encoding="utf-8")
        now = hashlib.sha256(f.read_bytes()).hexdigest()[:10]
        print("receipt sha:", receipt["sha"], "| file now:", now, "| proof still applies:", receipt["sha"] == now)
    print("a proof that passed on the first version says nothing about the second, so a verified item must record what it was verified against and be reopened when that content changes")

    section("6. Genuinely checking: irreversible work before approval (a rule of our own)")
    items = [{"id": "W-1", "deps": []}, {"id": "W-2", "deps": ["W-1"], "irreversible": True}, {"id": "W-3", "deps": ["W-1"], "approval": True}, {"id": "W-4", "deps": ["W-3"], "irreversible": True}]
    print("irreversible items with no approval ancestor:", irreversible_before_approval(items))
    print("the structural validator accepts both W-2 and W-4 because both have valid dependencies, and only this extra rule noticed that W-2 can run without an approval step before it; deciding which items are irreversible is a judgement, not something the graph can infer")


if __name__ == "__main__":
    main()
