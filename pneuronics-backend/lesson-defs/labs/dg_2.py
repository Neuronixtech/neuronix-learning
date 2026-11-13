"""Teaching implementation (our own): delegating agent work, Part 2 - isolation on a REAL git repository with two worktrees: what committed-only change lists miss, an ownership audit of the actual changes,
renames, and the difference between source isolation and state isolation (a shared output path and a shared state file). Everything runs in temporary directories. No language model is used."""
import json
import subprocess
import tempfile
from pathlib import Path, PurePosixPath

GIT = ["git", "-c", "user.name=lab", "-c", "user.email=lab@example.com", "-c", "commit.gpgsign=false"]


def git(repo, *a):
    return subprocess.run(GIT + list(a), cwd=repo, capture_output=True, text=True, check=True).stdout.strip()


def committed_changes(repo, base):
    return sorted(git(repo, "diff", "--name-only", f"{base}..HEAD").splitlines())


def all_changes(repo, base):
    names = set(git(repo, "diff", "--name-only", "--no-renames", base).splitlines())
    names |= set(git(repo, "ls-files", "--others", "--exclude-standard").splitlines())
    return sorted(names)


def owned(path, owned_paths):
    c = PurePosixPath(path).parts
    return any(c[: len(PurePosixPath(o).parts)] == PurePosixPath(o).parts for o in owned_paths)


def audit(changed, owned_paths):
    bad = [f for f in changed if not owned(f, owned_paths)]
    return {"accepted": not bad, "unauthorized": bad}


def section(t):
    print(f"\n--- {t} ---")


def main():
    with tempfile.TemporaryDirectory() as d:
        root = Path(d)
        repo = root / "project"
        repo.mkdir()
        git(repo, "init", "-q", "-b", "main")
        for rel, txt in (("app/accounts.py", "v1" + chr(10)), ("app/settings.py", "s1" + chr(10)), ("docs/accounts.md", "d1" + chr(10)), ("app/old.py", "legacy" + chr(10) * 1)):
            (repo / rel).parent.mkdir(parents=True, exist_ok=True)
            (repo / rel).write_text(txt, encoding="utf-8")
        git(repo, "add", "-A")
        git(repo, "commit", "-q", "-m", "base")
        base = git(repo, "rev-parse", "HEAD")

        section("1. Genuinely running: two worktrees give two physical checkouts")
        api_wt, docs_wt = root / "project-api", root / "project-docs"
        git(repo, "worktree", "add", "-q", "-b", "worker/api", str(api_wt), base)
        git(repo, "worktree", "add", "-q", "-b", "worker/docs", str(docs_wt), base)
        (api_wt / "app/accounts.py").write_text("v2 by api worker" + chr(10), encoding="utf-8")
        print("main checkout app/accounts.py :", (repo / "app/accounts.py").read_text(encoding="utf-8").strip())
        print("api worktree app/accounts.py  :", (api_wt / "app/accounts.py").read_text(encoding="utf-8").strip())
        print("docs worktree app/accounts.py :", (docs_wt / "app/accounts.py").read_text(encoding="utf-8").strip())
        print("worktrees registered:", len(git(repo, "worktree", "list").splitlines()))
        print("the api worker's edit exists only in its own folder; the other checkouts still hold v1, which is what stops two workers from editing one working directory at once, and nothing in it limits which files each worker may touch")

        section("2. Genuinely measuring: a committed-only change list misses uncommitted and new files")
        (api_wt / "app/settings.py").write_text("s2 changed without permission" + chr(10), encoding="utf-8")
        (api_wt / "app/extra.py").write_text("brand new" + chr(10), encoding="utf-8")
        git(api_wt, "add", "app/accounts.py")
        git(api_wt, "commit", "-q", "-m", "api work")
        print("committed changes since the base:", committed_changes(api_wt, base))
        print("all changes (committed, uncommitted, untracked):", all_changes(api_wt, base))
        print("audit of the committed list :", audit(committed_changes(api_wt, base), ["app/accounts.py"]))
        print("audit of the full list      :", audit(all_changes(api_wt, base), ["app/accounts.py"]))
        print("the edit to settings.py and the new file were not committed, so the committed-only list passed the audit and the full list rejected two files; the integrator has to look at the whole working tree")

        section("3. Genuinely measuring: a rename out of an owned path")
        git(docs_wt, "mv", "app/old.py", "docs/old.py")
        print("diff with rename detection  :", sorted(git(docs_wt, "diff", "--name-only", "--cached", base).splitlines()))
        print("diff without rename detection:", sorted(git(docs_wt, "diff", "--name-only", "--cached", "--no-renames", base).splitlines()))
        print("audit for a docs-only owner :", audit(sorted(git(docs_wt, "diff", "--name-only", "--cached", "--no-renames", base).splitlines()), ["docs"]))
        print("the move out of app/ into docs/ appears under its new name only when renames are detected, and listing both ends showed that the docs worker also removed a file in app/ it does not own")

        section("4. Genuinely running: separate worktrees still share the output path they are told to write")
        shared = root / "outputs" / "results.json"
        shared.parent.mkdir()
        shared.write_text(json.dumps({"worker": "api", "passed": 12}), encoding="utf-8")
        shared.write_text(json.dumps({"worker": "docs", "passed": 3}), encoding="utf-8")
        print("shared results.json now says:", json.loads(shared.read_text(encoding="utf-8")))
        per = {w: root / "evidence" / w / "results.json" for w in ("api", "docs")}
        for w, p in per.items():
            p.parent.mkdir(parents=True)
            p.write_text(json.dumps({"worker": w}), encoding="utf-8")
        print("per-worker evidence files:", sorted(str(p.relative_to(root)).replace(chr(92), "/") for p in per.values()), "| both survive:", all(p.exists() for p in per.values()))
        print("the second worker overwrote the first worker's evidence in the shared location and nothing noticed; separate worktrees isolated the source files and not the output path, so every worker needs its own evidence directory")

        section("5. Genuinely running: a shared state file loses a worker's update")
        state = root / "shared-state.json"
        state.write_text(json.dumps({"api": "pending", "docs": "pending"}), encoding="utf-8")
        a_view = json.loads(state.read_text(encoding="utf-8"))
        b_view = json.loads(state.read_text(encoding="utf-8"))
        a_view["api"] = "done"
        state.write_text(json.dumps(a_view), encoding="utf-8")
        b_view["docs"] = "done"
        state.write_text(json.dumps(b_view), encoding="utf-8")
        print("state after both workers wrote:", json.loads(state.read_text(encoding="utf-8")))
        print("both workers read the file before either wrote, so the api update was lost when the docs worker wrote its older copy back; a database, a port or a cache shared between worktrees fails the same way, and giving each worker its own state avoids it")


if __name__ == "__main__":
    main()
