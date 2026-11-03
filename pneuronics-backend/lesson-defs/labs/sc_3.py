"""Teaching implementation (our own): scope contracts and task boundaries, Part 3 - the gate on a REAL temporary git repository: deriving touched files from git (renames, deletions,
untracked files), a contract the agent edits, a scope_report.json, and rolling back only the task's changes while keeping pre-existing work. No language model is used."""
import hashlib
import json
import subprocess
import tempfile
from fnmatch import fnmatchcase
from pathlib import Path

GIT = ["git", "-c", "user.name=lab", "-c", "user.email=lab@example.com", "-c", "commit.gpgsign=false"]


def git(repo, *args):
    return subprocess.run(GIT + list(args), cwd=repo, capture_output=True, text=True, check=True).stdout


def matches(path, pattern):
    if pattern.endswith("/**"):
        return path.startswith(pattern[:-3] + "/")
    return fnmatchcase(path, pattern)


def touched(repo, base, renames=True):
    flag = [] if renames else ["--no-renames"]
    names = set(git(repo, "diff", "--name-only", *flag, base).splitlines())
    names |= set(git(repo, "ls-files", "--others", "--exclude-standard").splitlines())
    return sorted(names)


def classify(path, c):
    if any(matches(path, p) for p in c["forbidden_files"]):
        return "forbidden"
    return "allowed" if any(matches(path, p) for p in c["allowed_files"]) else "off_scope"


def verdict(files, c):
    bad = [f for f in files if classify(f, c) != "allowed"]
    return ("BLOCK" if bad else "ALLOW"), bad


def sha(p):
    return hashlib.sha256(Path(p).read_bytes()).hexdigest()


def section(t):
    print(f"\n--- {t} ---")


def main():
    with tempfile.TemporaryDirectory() as d:
        repo = Path(d) / "repo"
        repo.mkdir()
        git(repo, "init", "-q")
        for rel, txt in (("src/auth/login.py", "v1\n"), ("release/deploy.sh", "echo deploy\n"), ("docs/guide.md", "guide\n"), ("src/auth/old.py", "legacy\n" * 5)):
            (repo / rel).parent.mkdir(parents=True, exist_ok=True)
            (repo / rel).write_text(txt, encoding="utf-8")
        contract_path = repo / "scope_contract.json"
        contract = {"allowed_files": ["src/auth/**", "tests/test_login*.py"], "forbidden_files": ["release/**"]}
        contract_path.write_text(json.dumps(contract), encoding="utf-8")
        git(repo, "add", "-A")
        git(repo, "commit", "-q", "-m", "baseline")
        base = git(repo, "rev-parse", "HEAD").strip()
        c0 = json.loads(contract_path.read_text(encoding="utf-8"))
        h0 = sha(contract_path)

        section("1. Genuinely running: touched files come from git, not from the agent's list")
        (repo / "src/auth/login.py").write_text("v2\n", encoding="utf-8")
        (repo / "tests").mkdir()
        (repo / "tests/test_login.py").write_text("t\n", encoding="utf-8")
        (repo / "release/deploy.sh").write_text("echo deploy --prod\n", encoding="utf-8")
        agent_list = ["src/auth/login.py", "tests/test_login.py"]
        real = touched(repo, base)
        print("agent said it touched:", agent_list)
        print("git says it touched  :", real)
        print("verdict from the agent list:", verdict(agent_list, c0)[0], "| verdict from git:", verdict(real, c0))
        print("the agent list omitted the deploy script it edited and git's diff did not; the new test file was found because the check also asks for files git does not track yet, which git diff alone would miss")

        section("2. Genuinely measuring: a rename out of an allowed directory")
        git(repo, "checkout", "-q", "--", "release/deploy.sh")
        git(repo, "mv", "src/auth/old.py", "release/old.py")
        print("with rename detection   :", touched(repo, base))
        print("without rename detection:", touched(repo, base, renames=False))
        print("with rename detection src/auth/old.py is missing from the list and only release/old.py appears; with --no-renames both ends of the move are listed, so the checker should use that form because the removal from the allowed directory is part of the change")
        git(repo, "reset", "-q", "--hard", base)

        section("3. Genuinely running: the agent edits the contract itself")
        (repo / "src/auth/login.py").write_text("v2\n", encoding="utf-8")
        (repo / "release/deploy.sh").write_text("echo deploy --prod\n", encoding="utf-8")
        widened = json.loads(contract_path.read_text(encoding="utf-8"))
        widened["allowed_files"] += ["release/**", "scope_contract.json"]
        widened["forbidden_files"] = []
        contract_path.write_text(json.dumps(widened), encoding="utf-8")
        files = touched(repo, base)
        print("changed files include the contract:", "scope_contract.json" in files)
        print("verdict against the widened contract on disk:", verdict(files, json.loads(contract_path.read_text(encoding="utf-8")))[0])
        print("verdict against the contract loaded at task start:", verdict(files, c0))
        print("contract hash still equals the start hash:", sha(contract_path) == h0)
        print("the widened contract that also allowed its own file gave ALLOW for a forbidden deploy-script edit, while the start contract blocked it and showed the contract edit as a violation; a contract read from the working tree lets the agent widen its own permissions; the contract has to be loaded from the baseline commit or from a location the agent cannot write, and a changed contract hash is itself a finding")
        git(repo, "reset", "-q", "--hard", base)
        git(repo, "clean", "-qfd")

        section("4. Genuinely running: rollback keeps the work that existed before the task")
        (repo / "docs/guide.md").write_text("human edit before the task\n", encoding="utf-8")
        before_task = sha(repo / "docs/guide.md")
        (repo / "src/auth/login.py").write_text("agent edit\n", encoding="utf-8")
        (repo / "release/deploy.sh").write_text("agent edit\n", encoding="utf-8")
        (repo / "scratch.txt").write_text("agent file\n", encoding="utf-8")
        tracked = git(repo, "ls-files").splitlines()
        for f in ("src/auth/login.py", "release/deploy.sh", "scratch.txt"):
            if f in tracked:
                git(repo, "checkout", "-q", "--", f)
            else:
                (repo / f).unlink()
        print("status after the targeted rollback:", git(repo, "status", "--porcelain").splitlines())
        print("human edit preserved:", sha(repo / "docs/guide.md") == before_task, "| login.py restored to:", (repo / "src/auth/login.py").read_text(encoding="utf-8").strip())
        print("the targeted rollback restored only the files the task changed")
        git(repo, "reset", "-q", "--hard", base)
        print("after git reset --hard instead, docs/guide.md reads:", repr((repo / "docs/guide.md").read_text(encoding="utf-8").strip()), "| human edit preserved:", sha(repo / "docs/guide.md") == before_task)
        print("the hard reset destroyed the human's uncommitted edit, which is why rollback is scoped to the task's own files; the other hard resets in this lab are fine only because it owns the temporary repository")

        section("5. Genuinely running: the report is a file the next session can read")
        (repo / "release/deploy.sh").write_text("agent edit\n", encoding="utf-8")
        files = touched(repo, base)
        v, bad = verdict(files, c0)
        report = {"base_commit": base[:10], "contract_sha256": h0[:12], "files": files, "verdict": v, "violations": [{"file": f, "class": classify(f, c0)} for f in bad]}
        out = Path(d) / "scope_report.json"
        out.write_text(json.dumps(report, indent=2), encoding="utf-8")
        back = json.loads(out.read_text(encoding="utf-8"))
        print(json.dumps(back, indent=2))
        print("the report names the baseline commit, the contract hash, every file and each violation with its class, so a later session or a reviewer can see why the task was blocked without rerunning anything; it does not undo the change, and the base commit and hash are shortened for display")


if __name__ == "__main__":
    main()
