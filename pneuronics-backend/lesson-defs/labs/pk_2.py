"""Teaching implementation (our own): capstone, Part 2 - the installer: detect an existing installation, refuse to overwrite without --force, write a version lock, verify the result, stay idempotent,
and install through a staging directory so a failure midway leaves no half-installed repository. Real files in temporary directories; the pack is the lab's own. No language model is used."""
import hashlib
import shutil
import tempfile
from pathlib import Path

PACK = {"AGENTS.md": "# Rules" + chr(10), "VERSION": "1.2.0" + chr(10), "schemas/state.schema.json": "{}", "scripts/verify_agent.py": "print('ok')" + chr(10)}
LOCK = ".workbench-version"


def make_pack(root):
    for rel, text in PACK.items():
        p = root / rel
        p.parent.mkdir(parents=True, exist_ok=True)
        p.write_text(text, encoding="utf-8", newline="")


def tree(root):
    return {str(p.relative_to(root)).replace(chr(92), "/"): hashlib.sha256(p.read_bytes()).hexdigest()[:8] for p in sorted(root.rglob("*")) if p.is_file()}


def install(pack, target, force=False, fail_after=None):
    pack, target = Path(pack), Path(target)
    if not target.is_dir():
        return "error", f"target does not exist: {target.name}"
    if (target / LOCK).exists() and not force:
        return "skipped", f"already installed ({(target / LOCK).read_text(encoding='utf-8').strip()}), nothing changed"
    version = (pack / "VERSION").read_text(encoding="utf-8").strip()
    stage = Path(tempfile.mkdtemp(dir=target.parent))
    try:
        for i, p in enumerate(sorted(q for q in pack.rglob("*") if q.is_file())):
            if fail_after is not None and i >= fail_after:
                raise RuntimeError("simulated crash")
            dst = stage / p.relative_to(pack)
            dst.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(p, dst)
        (stage / LOCK).write_text(version + chr(10), encoding="utf-8")
        for p in sorted(q for q in stage.rglob("*") if q.is_file()):
            dst = target / p.relative_to(stage)
            dst.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(p, dst)
    except RuntimeError as e:
        return "failed", str(e)
    finally:
        shutil.rmtree(stage, ignore_errors=True)
    missing = [rel for rel in PACK if not (target / rel).is_file()]
    return ("installed", f"version {version}") if not missing else ("verify-failed", f"missing {missing}")


def naive_install(pack, target, fail_after=None):
    for i, p in enumerate(sorted(q for q in Path(pack).rglob("*") if q.is_file())):
        if fail_after is not None and i >= fail_after:
            raise RuntimeError("simulated crash")
        dst = Path(target) / p.relative_to(pack)
        dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(p, dst)


def section(t):
    print(f"\n--- {t} ---")


def main():
    with tempfile.TemporaryDirectory() as d:
        root = Path(d)
        pack = root / "pack"
        pack.mkdir()
        make_pack(pack)

        section("1. Genuinely running: first install, repeat install, and a missing target")
        t = root / "repo-a"
        t.mkdir()
        print("first run  :", install(pack, t))
        snap = tree(t)
        print("second run :", install(pack, t))
        print("third run  :", install(pack, t))
        print("files unchanged after the repeats:", tree(t) == snap, "| files:", sorted(snap))
        print("missing target:", install(pack, root / "nope"))
        print("the repeated runs reported 'already installed' and left every file byte-identical, which is what makes the installer safe to rerun from automation; a target that does not exist is an error and nothing is created")

        section("2. Genuinely running: the customised file and --force")
        (t / "AGENTS.md").write_text("# Rules" + chr(10) + "- our team's own rule" + chr(10), encoding="utf-8")
        before = (t / "AGENTS.md").read_text(encoding="utf-8")
        print("without --force:", install(pack, t)[0], "| custom rule kept:", "our team's own rule" in (t / "AGENTS.md").read_text(encoding="utf-8"))
        print("with --force   :", install(pack, t, force=True)[0], "| custom rule kept:", "our team's own rule" in (t / "AGENTS.md").read_text(encoding="utf-8"))
        print("the team's customisation was protected by the default and destroyed by --force, with no backup made; the flag is an explicit decision to overwrite, and a safer installer would copy the old file aside first")

        section("3. Genuinely running: a repository that already has its own AGENTS.md")
        u = root / "repo-b"
        u.mkdir()
        (u / "AGENTS.md").write_text("# existing project rules" + chr(10), encoding="utf-8")
        print("installer:", install(pack, u)[0], "| existing file now reads:", (u / "AGENTS.md").read_text(encoding="utf-8").strip())
        print("the installer saw no version lock, so it treated the repository as fresh and overwrote a file it did not create; the lock only identifies earlier installs of the pack, so a conflict check against pre-existing files is a separate rule that a lock-only check does not provide")

        section("4. Genuinely measuring: a crash halfway through")
        a, b = root / "repo-c", root / "repo-d"
        a.mkdir(); b.mkdir()
        try:
            naive_install(pack, a, fail_after=2)
        except RuntimeError:
            pass
        print("naive copy after a crash : files", sorted(tree(a)), "| version lock present:", LOCK in tree(a))
        print("staged install after one :", install(pack, b, fail_after=2), "| files:", sorted(tree(b)))
        print("leftover staging directories next to the repos:", sorted(p.name for p in root.iterdir() if p.name.startswith("tmp")))
        print("the naive copy left a repository with some pack files and no lock, which the next run would treat as a fresh install, while the staged install wrote nothing to the target before the crash; the copy from staging into the target is itself not atomic, so a crash during that last step could still leave a partial result")

        section("5. Genuinely running: the installed verify script works from the target")
        import subprocess
        import sys
        p = subprocess.run([sys.executable, "-I", str(t / "scripts/verify_agent.py")], capture_output=True, text=True)
        print("installed script exit", p.returncode, "printed", p.stdout.strip())
        print("lock file says:", (t / LOCK).read_text(encoding="utf-8").strip())
        print("the installed script ran from its new location and the lock records which pack version produced this layout, so a later upgrade can tell where the repository stands")


if __name__ == "__main__":
    main()
