"""Teaching implementation (our own): the workbench on a real repo, Part 3 - production-style controls on a REAL temporary git repository: a recorded baseline commit, a disposable git worktree, path
validation for contracts, a command runner that takes an argument list with a timeout, a task verifier that needs evidence, and an experiment-size demonstration using ASSUMED failure rates (not measured).
No language model is used."""
import random
import subprocess
import sys
import tempfile
from pathlib import Path, PurePosixPath, PureWindowsPath

GIT = ["git", "-c", "user.name=lab", "-c", "user.email=lab@example.com", "-c", "commit.gpgsign=false"]


def git(repo, *a):
    return subprocess.run(GIT + list(a), cwd=repo, capture_output=True, text=True, check=True).stdout.strip()


def changed_paths(repo, base):
    out = set(git(repo, "diff", "--name-only", "--no-renames", f"{base}..HEAD").splitlines())
    out |= set(git(repo, "diff", "--name-only", "--no-renames").splitlines())
    out |= set(git(repo, "ls-files", "--others", "--exclude-standard").splitlines())
    return sorted(out)


def validate_relative_path(value):
    if not isinstance(value, str) or not value or "\x00" in value:
        raise ValueError("path must be a non-empty string")
    if value.startswith(("/", chr(92))) or PureWindowsPath(value).drive:
        raise ValueError("path must be relative")
    parts = PurePosixPath(value.replace(chr(92), "/")).parts
    if ".." in parts:
        raise ValueError("path must not contain ..")
    return "/".join(p for p in parts if p != ".")


def run_checked(argv, cwd, timeout=20, allow=("python", "git")):
    if not isinstance(argv, list) or not argv or not all(isinstance(a, str) for a in argv):
        raise ValueError("argv must be a non-empty list of strings")
    if Path(argv[0]).stem.lower() not in allow and argv[0] != sys.executable:
        raise ValueError(f"program not allowed: {argv[0]}")
    try:
        p = subprocess.run(argv, cwd=cwd, capture_output=True, text=True, timeout=timeout, shell=False)
        return {"exit": p.returncode, "timed_out": False}
    except subprocess.TimeoutExpired:
        return {"exit": None, "timed_out": True}


def verify_task(contract, evidence):
    problems = []
    for key in ("baseline_commit", "acceptance_exit", "tests_run", "changed"):
        if key not in evidence:
            problems.append(f"missing evidence: {key}")
    if problems:
        return "BLOCK", problems
    if evidence["acceptance_exit"] != 0 or evidence["tests_run"] < 1:
        problems.append("acceptance did not pass with at least one test")
    problems += [f"outside scope: {c}" for c in evidence["changed"] if c not in contract["allowed"]]
    return ("BLOCK" if problems else "ALLOW"), problems


def trial(rng, workbench):
    bad_edit = rng.random() < 0.30
    caught = workbench and rng.random() < 0.80
    return bad_edit and not caught


def section(t):
    print(f"\n--- {t} ---")


def main():
    with tempfile.TemporaryDirectory() as d:
        repo = Path(d) / "repo"
        repo.mkdir()
        git(repo, "init", "-q", "-b", "main")
        (repo / "app.py").write_text("v1" + chr(10), encoding="utf-8")
        (repo / "README.md").write_text("docs" + chr(10), encoding="utf-8")
        git(repo, "add", "-A")
        git(repo, "commit", "-q", "-m", "baseline")
        base = git(repo, "rev-parse", "HEAD")

        section("1. Genuinely running: a clean working tree is not proof that nothing changed")
        (repo / "app.py").write_text("v2" + chr(10), encoding="utf-8")
        (repo / "README.md").write_text("docs edited" + chr(10), encoding="utf-8")
        git(repo, "add", "-A")
        git(repo, "commit", "-q", "-m", "agent work")
        print("git status --porcelain:", repr(git(repo, "status", "--porcelain")))
        print("changed since the baseline commit:", changed_paths(repo, base))
        print("the tree is clean and two files changed, and only the recorded baseline commit exposes it; the verifier needs the baseline stored in task state before the agent starts")

        section("2. Genuinely running: a disposable worktree isolates the task")
        wt = Path(d) / "task_wt"
        git(repo, "worktree", "add", "-q", "-b", "task-signup", str(wt), base)
        (wt / "app.py").write_text("worktree edit" + chr(10), encoding="utf-8")
        print("main checkout app.py:", (repo / "app.py").read_text(encoding="utf-8").strip(), "| worktree app.py:", (wt / "app.py").read_text(encoding="utf-8").strip())
        print("worktrees:", len(git(repo, "worktree", "list").splitlines()))
        git(repo, "worktree", "remove", "--force", str(wt))
        print("after removal:", len(git(repo, "worktree", "list").splitlines()), "worktree | the branch task-signup still exists:", "task-signup" in git(repo, "branch", "--list"))
        print("the edit stayed in the worktree and the main checkout was untouched, and removing the worktree left the branch behind, which has to be cleaned up separately")

        section("3. Genuinely running: validating paths taken from a contract")
        for p in ("src/app.py", "./src/app.py", "src//app.py", "../etc/passwd", "/etc/passwd", "C:\\Windows\\x", "src\\..\\..\\x", "", "a\x00b"):
            try:
                print(f"{p!r:22} -> {validate_relative_path(p)!r}")
            except ValueError as e:
                print(f"{p!r:22} rejected: {e}")
        print("traversal, absolute and drive-letter paths were rejected and harmless variants were cleaned; even so, a path check is text only, and the filesystem boundary (symlinks, mounts) needs a resolved-path check against the repository root")

        section("4. Genuinely running: a command runner that takes an argument list")
        print("python -c ok:", run_checked([sys.executable, "-c", "pass"], d))
        print("sleeping command with a 1 s timeout:", run_checked([sys.executable, "-c", "import time; time.sleep(20)"], d, timeout=1))
        for bad in (["rm", "-rf", "x"], "python -c pass", []):
            try:
                run_checked(bad, d)
            except ValueError as e:
                print(f"{bad!r:22} rejected: {e}")
        print("a string command, an empty list and a program outside the allowlist were refused before anything ran, and with shell=False the arguments are never interpreted by a shell; the allowlist here is two program names of our choosing")

        section("5. Genuinely running: the verifier needs evidence")
        c = {"allowed": ["app.py", "test_app.py"]}
        print("no evidence:", verify_task(c, {}))
        print("tests passed but README changed:", verify_task(c, {"baseline_commit": base[:8], "acceptance_exit": 0, "tests_run": 3, "changed": ["app.py", "README.md"]}))
        print("exit 0 with zero tests:", verify_task(c, {"baseline_commit": base[:8], "acceptance_exit": 0, "tests_run": 0, "changed": ["app.py"]}))
        print("complete evidence:", verify_task(c, {"baseline_commit": base[:8], "acceptance_exit": 0, "tests_run": 3, "changed": ["app.py", "test_app.py"]}))
        print("each missing or failing piece of evidence blocked the task, so 'complete' is a verdict computed from the record, never a statement")

    section("6. Genuinely simulating with ASSUMED rates: how many trials does a comparison need?")
    print("assumed, not measured: a bad edit happens in 30% of runs, and the workbench catches 80% of bad edits")
    for n in (5, 20, 200):
        rows = []
        for seed in range(5):
            rng = random.Random(seed)
            a = sum(trial(rng, False) for _ in range(n)) / n
            b = sum(trial(rng, True) for _ in range(n)) / n
            rows.append(round(a - b, 2))
        print(f"{n:4} trials per arm, 5 repeated experiments, measured improvement (prompt-only failure rate minus workbench):", rows)
    print("with 5 trials per arm the same assumed truth gave measured improvements from 0.0 to 0.8 across five repeated experiments, 20 trials gave 0.05 to 0.5, and 200 trials per arm gave 0.19 to 0.27, near the 0.24 the assumed rates imply; this is a statement about sample size under invented rates and says nothing about any real agent or workbench")


if __name__ == "__main__":
    main()
