"""Teaching implementation (our own): agent workbench engineering, Part 3 - a preflight audit of the seven surfaces on a REAL temporary directory at three levels (presence, validity,
enforcement), a PASS/WARN/BLOCK decision, stale-revision evidence, a handoff validator, and a mutation test of the gate itself. No language model is used."""
import json
import tempfile
from pathlib import Path

SURFACES = ["instructions", "state", "scope", "feedback", "verification", "review", "handoff"]
FILES = {"instructions": "AGENTS.md", "state": "agent_state.json", "scope": "task_scope.json", "feedback": "feedback.jsonl", "verification": "verification.json", "review": "review_report.json", "handoff": "handoff.json"}
CRITICAL = {"scope", "verification", "state"}


class GuardedWriter:
    """Enforces the scope file at the point of writing."""
    def __init__(self, root, allowed):
        self.root, self.allowed = Path(root), set(allowed)

    def write(self, rel, text):
        if rel not in self.allowed:
            raise PermissionError(f"write to {rel} blocked by scope")
        (self.root / rel).write_text(text, encoding="utf-8")


def audit(root, enforce_probe=True):
    root = Path(root)
    findings = []
    for s in SURFACES:
        p = root / FILES[s]
        if not p.exists():
            findings.append((s, "BLOCK" if s in CRITICAL else "WARN", "missing"))
            continue
        if p.suffix == ".json":
            try:
                json.loads(p.read_text(encoding="utf-8"))
            except json.JSONDecodeError:
                findings.append((s, "BLOCK" if s in CRITICAL else "WARN", "present but invalid JSON"))
                continue
        findings.append((s, "PASS", "present and parses"))
    if enforce_probe and (root / FILES["scope"]).exists():
        try:
            allowed = json.loads((root / FILES["scope"]).read_text(encoding="utf-8")).get("allowed", [])
        except Exception:
            allowed = []
        w = GuardedWriter(root, allowed)
        try:
            w.write("release.sh", "x")
            findings.append(("scope", "BLOCK", "ENFORCEMENT: a write outside scope succeeded"))
        except PermissionError:
            findings.append(("scope", "PASS", "ENFORCEMENT: a write outside scope was blocked"))
    return findings


def may_start(findings):
    return all(status != "BLOCK" for _, status, _ in findings)


def validate_handoff(h):
    req = {"summary", "changed_files", "commands_run", "failed_attempts", "open_risks", "next_action", "verdict_pointer"}
    missing = sorted(req - h.keys())
    na = h.get("next_action")
    return {"valid": not missing and isinstance(na, str) and bool(na.strip()), "missing": missing}


def stale_check(evidence_rev, current_rev):
    return "evidence is for the current revision" if evidence_rev == current_rev else f"STALE: evidence is for {evidence_rev}, code is at {current_rev}"


def section(t):
    print(f"\n--- {t} ---")


def build(root, skip=(), invalid=()):
    contents = {"AGENTS.md": "rules\n", "agent_state.json": "{}", "task_scope.json": json.dumps({"allowed": ["app.py"]}), "feedback.jsonl": "", "verification.json": "{}", "review_report.json": "{}", "handoff.json": "{}"}
    for name, text in contents.items():
        if name in skip:
            continue
        (Path(root) / name).write_text("{bad" if name in invalid else text, encoding="utf-8")


def main():
    section("1. Genuinely running: an audit of a complete workbench, a missing scope file and a corrupt state file")
    for label, kw in (("complete", {}), ("scope file missing", {"skip": ("task_scope.json",)}), ("state file corrupt", {"invalid": ("agent_state.json",)}), ("handoff template missing", {"skip": ("handoff.json",)})):
        with tempfile.TemporaryDirectory() as d:
            build(d, **kw)
            f = audit(d)
            bad = [(s, st, m) for s, st, m in f if st != "PASS"]
            print(f"{label:26} may_start={may_start(f)!s:5} non-pass findings: {bad}")
    print("a missing handoff template only warns, while a missing scope file and a corrupt state file block; severity follows the consequence of the missing control, and the model cannot override a BLOCK by agreeing to take the risk")

    section("2. Genuinely checking: presence is not enforcement")
    with tempfile.TemporaryDirectory() as d:
        build(d)
        (Path(d) / "task_scope.json").write_text(json.dumps({"allowed": ["app.py"]}), encoding="utf-8")
        print("scope file present, valid JSON, guarded writer in place ->", [x for x in audit(d) if x[0] == "scope"][-1])
        class Unguarded(GuardedWriter):
            def write(self, rel, text):
                (self.root / rel).write_text(text, encoding="utf-8")
        w = Unguarded(d, ["app.py"])
        w.write("release.sh", "oops")
        print("same scope file, but writes go through an unguarded writer: release.sh exists =", (Path(d) / "release.sh").exists())
    print("the scope file and its contents were identical in both cases; only the code path differed, so the audit has three levels and only the third (try a forbidden write) tests the boundary; note that this audit probes its own GuardedWriter, so that PASS shows the probe works and not that the agent's real tools are guarded; a real probe must go through the same write path the agent uses")

    section("3. Genuinely checking: evidence from an earlier revision")
    for ev, cur in (("abc123", "abc123"), ("abc123", "def456")):
        print(f"tests passed at {ev}, code now at {cur}: {stale_check(ev, cur)}")
    print("a successful test run says nothing about code that changed afterwards, so evidence records carry the revision and the verifier compares it")

    section("4. Genuinely checking: handoff validation")
    full = {"summary": "s", "changed_files": ["app.py"], "commands_run": ["unittest"], "failed_attempts": [], "open_risks": [], "next_action": "Run unittest and inspect the first failure", "verdict_pointer": "verification.json"}
    print("complete handoff:", validate_handoff(full))
    print("blank next_action:", validate_handoff(dict(full, next_action="  ")))
    print("missing fields:", validate_handoff({"summary": "done"}))
    print("weak but non-empty next_action 'Continue':", validate_handoff(dict(full, next_action="Continue")))
    print("the last case passes the check although it tells the next session nothing; a validator can require presence, and specificity still needs review")

    section("5. Genuinely checking: mutation test of the audit itself")
    def broken_audit(root):
        return [(s, "PASS", "exists") for s in SURFACES if (Path(root) / FILES[s]).exists()]  # forgets to report missing surfaces
    with tempfile.TemporaryDirectory() as d:
        build(d, skip=("task_scope.json", "verification.json"))
        print("broken audit may_start:", may_start(broken_audit(d)), "| real audit may_start:", may_start(audit(d)))
        build(d, invalid=("agent_state.json",))
        print("corrupt state file, broken audit may_start:", may_start(broken_audit(d)), "| real audit may_start:", may_start(audit(d)))
    print("a checker that only lists what exists reports success when controls are absent; removing a file on purpose and expecting BLOCK is how the checker is tested")


if __name__ == "__main__":
    main()
