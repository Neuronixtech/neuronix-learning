"""Teaching implementation (our own): initialization scripts for agents, Part 3 - last-known-good commit anchoring and a change budget on a REAL temporary git repository, a dependency cache
with a time-to-live and a manifest hash, a launcher that runs the agent only if the initializer exits zero, and a check that initialization itself changes nothing. No language model is used."""
import hashlib
import json
import subprocess
import sys
import tempfile
import time
from pathlib import Path

GIT = ["git", "-c", "user.name=lab", "-c", "user.email=lab@example.com", "-c", "commit.gpgsign=false"]


def git(repo, *args, strip=True):
    out = subprocess.run(GIT + list(args), cwd=repo, capture_output=True, text=True, check=True).stdout
    return out.strip() if strip else out.rstrip(chr(10))


def changed_since(repo, base):
    committed = set(git(repo, "diff", "--name-only", f"{base}..HEAD").splitlines())
    working = set(git(repo, "status", "--porcelain", "--untracked-files=all", strip=False).splitlines())
    working = {line[3:] for line in working}
    return committed | working


def scope_check(repo, base, budget):
    files = sorted(changed_since(repo, base))
    return ("fail" if len(files) > budget else "pass"), len(files)


def sha(path):
    return hashlib.sha256(Path(path).read_bytes()).hexdigest()


def cache_valid(cache, manifest, now, ttl, runtime):
    if not cache:
        return False, "no cache"
    if now - cache["checked_at"] > ttl:
        return False, "expired"
    if cache["manifest_sha"] != sha(manifest):
        return False, "manifest changed"
    if cache["runtime"] != runtime:
        return False, "runtime changed"
    return True, "fresh and inputs unchanged"


def section(t):
    print(f"\n--- {t} ---")


def main():
    with tempfile.TemporaryDirectory() as d:
        repo = Path(d) / "repo"
        repo.mkdir()
        git(repo, "init", "-q")
        (repo / "src").mkdir()
        (repo / "src" / "app.py").write_text("v1\n", encoding="utf-8")
        git(repo, "add", "-A"); git(repo, "commit", "-q", "-m", "baseline")
        base = git(repo, "rev-parse", "HEAD")

        section("1. Genuinely running: change budget against the last-known-good commit (real git)")
        print("clean tree:", scope_check(repo, base, 3))
        (repo / "src" / "app.py").write_text("v2\n", encoding="utf-8")
        print("one modified file:", scope_check(repo, base, 3))
        for i in range(4):
            (repo / f"new{i}.txt").write_text("x", encoding="utf-8")
        print("one modified plus four untracked files, budget 3:", scope_check(repo, base, 3))
        print("changed paths:", sorted(changed_since(repo, base)))
        print("the budget counted untracked files as well; it is a coarse scope control, a single sensitive file can matter more than fifty documents, and exceeding it means a human decides, not that the baseline moves automatically")

        section("2. Genuinely checking: committed changes versus a clean working tree")
        git(repo, "add", "-A"); git(repo, "commit", "-q", "-m", "agent work")
        print("git status --porcelain after committing:", repr(git(repo, "status", "--porcelain")))
        print("budget check still sees the committed changes:", scope_check(repo, base, 3))
        print("a clean working tree does not mean nothing changed: the agent could have committed everything, so the comparison is against the recorded baseline commit and not against the current index")

        section("3. Genuinely checking: the dependency cache and what invalidates it")
        manifest = Path(d) / "requirements.txt"
        manifest.write_text("pytest\n", encoding="utf-8")
        now = time.time()
        cache = {"checked_at": now - 3600, "manifest_sha": sha(manifest), "runtime": "3.14", "result": "pass"}
        ttl = 24 * 3600
        print("fresh cache:", cache_valid(cache, manifest, now, ttl, "3.14"))
        print("23 days later:", cache_valid(cache, manifest, now + 23 * 86400, ttl, "3.14"))
        manifest.write_text("pytest\nrequests\n", encoding="utf-8")
        print("manifest edited ten minutes after the check:", cache_valid(cache, manifest, now + 600, ttl, "3.14"))
        manifest.write_text("pytest\n", encoding="utf-8")
        print("a different Python version:", cache_valid(cache, manifest, now, ttl, "3.12"))
        print("a time-to-live alone would have trusted the cache after the manifest changed; the cache is valid only while it is recent and the manifest and runtime it was computed for are unchanged")

        section("4. Genuinely running: a launcher that only starts the agent when the initializer exits zero")
        init_ok = "import sys; print('init ok'); sys.exit(0)"
        init_bad = "import sys; print('init BLOCKED: tests command missing'); sys.exit(1)"
        agent = "print('AGENT STARTED')"
        for label, init in (("healthy initializer", init_ok), ("blocked initializer", init_bad)):
            p1 = subprocess.run([sys.executable, "-c", init], capture_output=True, text=True)
            started = False
            if p1.returncode == 0:
                p2 = subprocess.run([sys.executable, "-c", agent], capture_output=True, text=True)
                started = "AGENT STARTED" in p2.stdout
            print(f"{label:20} initializer printed {p1.stdout.strip()!r:40} exit {p1.returncode} | agent started: {started}")
        print("the gate is the exit code in the launcher; a message printed to the console does not stop anything by itself")

        section("5. Genuinely checking: initialization changes nothing")
        before = {p.name: sha(p) for p in repo.rglob("*") if p.is_file() and ".git" not in p.parts}
        for _ in range(2):
            subprocess.run([sys.executable, "-c", "import sys, shutil, os; print(sys.version_info[:2], shutil.which('python') is not None)"], capture_output=True, text=True)
        after = {p.name: sha(p) for p in repo.rglob("*") if p.is_file() and ".git" not in p.parts}
        print("repository files unchanged by two initialization-style runs:", before == after)
        print("a read-only initializer can be rerun safely; one that installed packages or rewrote state would have changed this answer, and the lesson keeps installation outside the probes")


if __name__ == "__main__":
    main()
