"""Teaching implementation (our own): agent instructions as executable constraints, Part 3 - a deterministic JSON lock generated from the Markdown rules and a staleness check, router
reachability and size checks on REAL files, rule expiry review, a gate with a real exit code, and a scoped override record. Hand-written inputs; no language model is used."""
import hashlib
import json
import re
import subprocess
import sys
import tempfile
from datetime import date
from pathlib import Path

RULES_MD = "## a-rule\n- category: startup\n- severity: block\n- check: startup_before_edit\n- description: x\n- expires: 2026-12-31\n\n## b-rule\n- category: forbidden\n- severity: block\n- check: no_protected_file_writes\n- description: y\n- expires: 2026-06-30\n"


def parse(md):
    out, cur = [], None
    for line in md.splitlines():
        h = re.match(r"^## (\S+)", line)
        if h:
            cur = {"slug": h.group(1)}
            out.append(cur)
            continue
        f = re.match(r"^- (\w+):\s*(.+)$", line)
        if f and cur is not None:
            cur[f.group(1)] = f.group(2).strip()
    return sorted(out, key=lambda r: r["slug"])


def build_lock(md):
    return {"source_sha256": hashlib.sha256(md.encode()).hexdigest(), "rules": parse(md)}


def lock_is_fresh(md, lock):
    return lock.get("source_sha256") == hashlib.sha256(md.encode()).hexdigest()


def review_due(rules, today, zero_violation_days):
    due = []
    for r in rules:
        exp = date.fromisoformat(r["expires"])
        if exp <= today:
            due.append((r["slug"], "expired: review, do not silently drop"))
        elif zero_violation_days.get(r["slug"], 0) >= 60:
            due.append((r["slug"], "zero violations for 60+ days: still useful?"))
    return due


def reachable(root, start, target_name, max_hops=2):
    seen, frontier = {start}, [(start, 0)]
    while frontier:
        f, d = frontier.pop(0)
        if f.name == target_name:
            return True, d
        if d == max_hops:
            continue
        for ref in re.findall(r"`([^`]+\.md)`", f.read_text(encoding="utf-8")):
            p = (root / ref)
            if p.exists() and p not in seen:
                seen.add(p)
                frontier.append((p, d + 1))
    return False, None


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely checking: a deterministic lock and a stale-cache check")
    lock = build_lock(RULES_MD)
    print("lock keys:", sorted(lock), "| rules:", [r["slug"] for r in lock["rules"]], "| same input twice gives the same lock:", build_lock(RULES_MD) == lock)
    edited = RULES_MD.replace("severity: block\n- check: no_protected_file_writes", "severity: warn\n- check: no_protected_file_writes")
    print("source edited, lock regenerated:", lock_is_fresh(edited, build_lock(edited)), "| source edited but the old lock kept:", lock_is_fresh(edited, lock))
    print("with a stale lock the runtime would keep enforcing b-rule as block after the reviewed source weakened it to warn; CI fails the build when the hash of the Markdown differs from the one in the lock")

    section("2. Genuinely checking: router reachability within two hops and a size budget (real files)")
    with tempfile.TemporaryDirectory() as d:
        root = Path(d)
        (root / "docs").mkdir()
        (root / "AGENTS.md").write_text("# Router\nRead `docs/agent-rules.md`.\nTesting: `docs/testing.md`.\n", encoding="utf-8")
        (root / "docs" / "agent-rules.md").write_text("# Rules\nSee `docs/deep.md`.\n", encoding="utf-8")
        (root / "docs" / "testing.md").write_text("# Testing\n", encoding="utf-8")
        (root / "docs" / "deep.md").write_text("# Deep\nSee `docs/deeper.md`.\n", encoding="utf-8")
        (root / "docs" / "deeper.md").write_text("# Deeper\n", encoding="utf-8")
        start = root / "AGENTS.md"
        for name in ("agent-rules.md", "testing.md", "deep.md", "deeper.md", "missing.md"):
            print(f"{name:16} reachable within 2 hops: {reachable(root, start, name)}")
        (root / "AGENTS.md").write_text("\n".join(f"line {i}" for i in range(75)) + "\n", encoding="utf-8")
        n = len((root / "AGENTS.md").read_text().splitlines())
        print(f"router length {n} lines against a budget of 50: {'over budget' if n > 50 else 'ok'}")
    print("deeper.md is three hops away and so is not reachable by the rule; a broken link would show as unreachable and should fail the startup check; the 50-line budget is a design choice, not a measured threshold")

    section("3. Genuinely measuring: rule expiry and low-use review (simulated today = 2026-10-05)")
    rules = lock["rules"]
    print(review_due(rules, date(2026, 10, 5), {"a-rule": 75}))
    print("a-rule had no violations for 75 days and b-rule's date has passed; both are queued for review, and the safe default for an expired safety rule is to keep enforcing it until a person decides, not to drop it")

    section("4. Genuinely checking: the gate as a real exit code, with and without a scoped override")
    code = ("import json,sys;d=json.loads(sys.argv[1]);o=d.get('override');"
            "blocked=[r for r in d['results'] if r['status']!='pass' and r['severity']=='block' and not (o and o['rule']==r['slug'] and o['task']==d['task'] and o['revision']==d['revision'])];"
            "print(json.dumps({'blocked':[r['slug'] for r in blocked]}));sys.exit(1 if blocked else 0)")
    base = {"task": "T-1", "revision": "r7", "results": [{"slug": "protected-writes", "status": "fail", "severity": "block"}, {"slug": "assumptions", "status": "fail", "severity": "warn"}]}
    for label, payload in (("no override", base), ("override for this rule, task and revision", dict(base, override={"rule": "protected-writes", "task": "T-1", "revision": "r7"})),
                           ("override for another revision", dict(base, override={"rule": "protected-writes", "task": "T-1", "revision": "r6"})), ("override for another rule", dict(base, override={"rule": "assumptions", "task": "T-1", "revision": "r7"}))):
        p = subprocess.run([sys.executable, "-c", code, json.dumps(payload)], capture_output=True, text=True)
        print(f"{label:42} exit code {p.returncode} {p.stdout.strip()}")
    print("exit code 1 stops the pipeline and 0 lets it continue; an override only counted when its rule, task and revision all matched, so one approval did not become a blanket exception; the override record still has to be signed by trusted infrastructure, which this demo does not do")

    section("5. Genuinely checking: a checker that is never exercised")
    def checker(run):
        return run.get("tests_ran") is True
    cases = [({"tests_ran": True}, True), ({"tests_ran": False}, False), ({}, False)]
    print("positive, negative and missing-evidence cases:", [(checker(r) == want) for r, want in cases])
    always = lambda run: True
    print("a checker that always passes agrees with the positive case only:", [(always(r) == want) for r, want in cases])
    print("a test set with only the passing example cannot tell the real checker from one that always returns True, so every rule needs a failing case and a missing-evidence case")


if __name__ == "__main__":
    main()
