"""Teaching implementation (our own): multi-session handoff, Part 3 - production behaviour on a REAL temporary git repository: recording repository identity, detecting a stale handoff after another
commit or a branch switch, atomic publication versus a torn write, an active-handoff pointer and a compare-and-swap against two agents publishing at once. No language model is used."""
import json
import os
import subprocess
import tempfile
from pathlib import Path

GIT = ["git", "-c", "user.name=lab", "-c", "user.email=lab@example.com", "-c", "commit.gpgsign=false"]


def git(repo, *a):
    return subprocess.run(GIT + list(a), cwd=repo, capture_output=True, text=True, check=True).stdout.strip()


def identity(repo):
    return {"branch": git(repo, "rev-parse", "--abbrev-ref", "HEAD"), "commit": git(repo, "rev-parse", "HEAD")[:10], "dirty": bool(git(repo, "status", "--porcelain"))}


def is_current(handoff, repo):
    now = identity(repo)
    if now["branch"] != handoff["branch"]:
        return False, f"branch changed from {handoff['branch']} to {now['branch']}"
    if now["commit"] != handoff["commit"]:
        return False, f"{handoff['commit']} is no longer HEAD ({now['commit']})"
    return True, "handoff matches the repository"


def publish_atomic(path, payload):
    tmp = path.with_suffix(".tmp")
    tmp.write_text(json.dumps(payload), encoding="utf-8")
    os.replace(tmp, path)


def publish_torn(path, payload, crash_after=15):
    text = json.dumps(payload)
    path.write_text(text[:crash_after], encoding="utf-8")


def publish_cas(pointer, new_id, expected_prev):
    cur = json.loads(pointer.read_text(encoding="utf-8"))["active"] if pointer.exists() else None
    if cur != expected_prev:
        return False, f"active handoff is {cur}, not {expected_prev}"
    publish_atomic(pointer, {"active": new_id, "superseded": ([cur] if cur else [])})
    return True, f"published {new_id}"


def section(t):
    print(f"\n--- {t} ---")


def main():
    with tempfile.TemporaryDirectory() as d:
        repo = Path(d) / "repo"
        repo.mkdir()
        git(repo, "init", "-q", "-b", "feature-pay")
        (repo / "a.py").write_text("v1" + chr(10), encoding="utf-8")
        git(repo, "add", "-A")
        git(repo, "commit", "-q", "-m", "c1")

        section("1. Genuinely running: a handoff records which repository state it describes")
        h = {"next_action": "Run the payment test.", **identity(repo)}
        print("recorded identity:", {k: h[k] for k in ("branch", "commit", "dirty")})
        print("same state:", is_current(h, repo))
        (repo / "a.py").write_text("v2" + chr(10), encoding="utf-8")
        print("uncommitted edit afterwards, identity says dirty:", identity(repo)["dirty"], "| still current by branch and commit:", is_current(h, repo)[0])
        print("a dirty working tree after the handoff did not change the branch or commit, so this check alone did not notice it; recording the dirty flag and the changed-file hashes would be needed to catch that")
        git(repo, "checkout", "-q", "--", "a.py")

        section("2. Genuinely running: another commit and a branch switch make the handoff stale")
        (repo / "b.py").write_text("x" + chr(10), encoding="utf-8")
        git(repo, "add", "-A")
        git(repo, "commit", "-q", "-m", "teammate")
        print("after a teammate's commit:", is_current(h, repo))
        git(repo, "checkout", "-q", "-b", "other-task")
        print("on another branch:", is_current(h, repo))
        print("both cases were caught by comparing the recorded branch and commit with the repository, so a fresh session can refuse to continue and ask for a new handoff instead of acting on advice about code that has moved")
        git(repo, "checkout", "-q", "feature-pay")

        section("3. Genuinely running: atomic publication versus a torn write")
        target = Path(d) / "handoff.json"
        publish_atomic(target, {"v": 1, "next_action": "old but complete"})
        publish_torn(target, {"v": 2, "next_action": "new and long enough to be cut off"})
        try:
            json.loads(target.read_text(encoding="utf-8"))
            print("after a torn write: parsed")
        except json.JSONDecodeError:
            print("after a torn write: unreadable, the previous complete handoff is gone too")
        publish_atomic(target, {"v": 1, "next_action": "old but complete"})
        tmp = target.with_suffix(".tmp")
        tmp.write_text('{"v": 2, "next_ac', encoding="utf-8")
        print("crash while writing the temp file, published file still reads:", json.loads(target.read_text(encoding="utf-8")))
        print("writing straight over the published file lost the old handoff and left a broken one, while writing a temp file and then os.replace left the previous complete handoff in place when the crash, simulated here by cutting the write short, happened during the write; the replace itself is atomic on the same volume, and a leftover temp file has to be cleaned up")

        section("4. Genuinely running: two agents publish on the same branch")
        pointer = Path(d) / "active.json"
        print("agent A publishes first:", publish_cas(pointer, "h-A", None))
        print("agent B had read 'no active handoff' and publishes:", publish_cas(pointer, "h-B", None))
        print("agent B re-reads, then publishes on top of A:", publish_cas(pointer, "h-B", "h-A"))
        print("pointer now:", json.loads(pointer.read_text(encoding="utf-8")))
        print("the second publisher's stale view was refused, and after re-reading it superseded A explicitly, so A's handoff is archived and not silently overwritten; this lab's check and write are separate steps, so two truly simultaneous publishers could still race, and a real implementation needs an atomic create or a lock")

        section("5. Genuinely checking: approval boundaries in next_action")
        risky = ["Run the payment test.", "Deploy to production and run migrations.", "Delete the old branch."]
        words = ("deploy", "production", "delete", "migrat", "force")
        for na in risky:
            hit = [w for w in words if w in na.lower()]
            print(f"{na:45} needs human approval by keyword list: {bool(hit)} {hit}")
        print("a simple keyword list flagged the two risky actions and passed the safe one, but it would miss any wording not on the list; it is a safety net of our own devising, and the real boundary is that the resuming agent may not execute these actions without an approval it can verify")


if __name__ == "__main__":
    main()
