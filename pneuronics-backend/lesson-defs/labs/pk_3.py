"""Teaching implementation (our own): capstone, Part 3 - versions and distribution: why comparing version strings goes wrong, a dry-run upgrade plan that keeps local customisations, an uninstall that
removes only pack files, whether zip archives of the same files are byte-identical, and an end-to-end smoke test in a temporary git repository. The pack and versions are the lab's own. No language model is used."""
import hashlib
import io
import subprocess
import sys
import tempfile
import time
import zipfile
from pathlib import Path

PACK_V1 = {"AGENTS.md": "rules v1" + chr(10), "scripts/verify_agent.py": "print('verify v1')" + chr(10), "schemas/state.json": "{}"}
PACK_V2 = {"AGENTS.md": "rules v2" + chr(10), "scripts/verify_agent.py": "print('verify v2')" + chr(10), "docs/handoff.md": "template" + chr(10)}


def parse(v):
    try:
        parts = tuple(int(x) for x in v.split("."))
    except ValueError:
        raise ValueError(f"not a numeric version: {v!r}")
    if len(parts) != 3:
        raise ValueError(f"expected three numbers: {v!r}")
    return parts


def h(text):
    return hashlib.sha256(text.encode("utf-8")).hexdigest()[:8]


def plan_upgrade(installed, new, target_files, recorded):
    plan = {"add": [], "update": [], "keep_customised": [], "remove": []}
    for rel, text in new.items():
        if rel not in target_files:
            plan["add"].append(rel)
        elif h(target_files[rel]) == recorded.get(rel):
            plan["update"].append(rel)
        else:
            plan["keep_customised"].append(rel)
    plan["remove"] = [rel for rel in recorded if rel not in new and rel in target_files and h(target_files[rel]) == recorded[rel]]
    return plan


def make_zip(files, stamp):
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w", zipfile.ZIP_DEFLATED) as z:
        for rel in sorted(files):
            z.writestr(zipfile.ZipInfo(rel, date_time=stamp), files[rel])
    return buf.getvalue()


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely measuring: comparing versions as strings")
    for a, b in (("1.9.0", "1.10.0"), ("1.2.0", "1.10.0"), ("2.0.0", "10.0.0")):
        print(f"{a} < {b}: as strings {a < b!s:5} | as number tuples {parse(a) < parse(b)}")
    for bad in ("1.2", "1.2.x", "v1.2.0", ""):
        try:
            parse(bad)
        except ValueError as e:
            print(f"parse({bad!r}) rejected: {e}")
    print("as strings, '1.9.0' < '1.10.0' is False, so an installer that compared version strings would call 1.9.0 newer than 1.10.0 and skip a genuine upgrade; comparing tuples of integers gives the right answer, and malformed versions are refused instead of guessed")

    section("2. Genuinely running: a dry-run upgrade plan that respects customisation")
    target = dict(PACK_V1)
    target["AGENTS.md"] = "rules v1" + chr(10) + "our own rule" + chr(10)
    recorded = {rel: h(text) for rel, text in PACK_V1.items()}
    plan = plan_upgrade("1.0.0", PACK_V2, target, recorded)
    for k, v in plan.items():
        print(f"{k:16} {v}")
    print("the customised AGENTS.md was kept and listed for manual merge, the unchanged verify script was updated, the new template was added and the schema the new version no longer ships was proposed for removal because it was unmodified; this needs the digests recorded at install time, which a bare version lock does not store")

    section("3. Genuinely running: uninstall removes only what the pack installed")
    with tempfile.TemporaryDirectory() as d:
        root = Path(d)
        for rel, text in {**PACK_V1, "agent_state.json": "{}", "src/app.py": "code"}.items():
            p = root / rel
            p.parent.mkdir(parents=True, exist_ok=True)
            p.write_text(text, encoding="utf-8", newline="")
        for rel in PACK_V1:
            (root / rel).unlink()
        left = sorted(str(p.relative_to(root)).replace(chr(92), "/") for p in root.rglob("*") if p.is_file())
        print("left after removing the recorded pack files:", left)
        print("removing by a recorded list left the project's state and source files alone; a rule such as 'delete the schemas, scripts and docs folders' would have hit any project file placed there, so uninstall needs the same manifest the install used")

    section("4. Genuinely measuring: are zip archives of the same files byte-identical?")
    a = make_zip(PACK_V1, (2020, 1, 1, 0, 0, 0))
    b = make_zip(PACK_V1, (2020, 1, 1, 0, 0, 0))
    time.sleep(2.1)
    c = make_zip(PACK_V1, tuple(time.localtime()[:6]))
    print("fixed timestamps, built twice:", hashlib.sha256(a).hexdigest()[:10] == hashlib.sha256(b).hexdigest()[:10])
    print("current timestamp versus fixed:", hashlib.sha256(a).hexdigest()[:10] == hashlib.sha256(c).hexdigest()[:10])
    print("with entry timestamps pinned the same files gave the same archive bytes, and with the current time the archive differed even though no file changed; a pack that is published should be built with pinned timestamps so its digest identifies its contents")

    section("5. Genuinely running: an end-to-end smoke test in a git repository")
    with tempfile.TemporaryDirectory() as d:
        repo = Path(d)
        git = ["git", "-c", "user.name=lab", "-c", "user.email=lab@example.com", "-c", "commit.gpgsign=false"]
        subprocess.run(git + ["init", "-q"], cwd=repo, check=True)
        (repo / "app.py").write_text("x", encoding="utf-8")
        subprocess.run(git + ["add", "-A"], cwd=repo, check=True)
        subprocess.run(git + ["commit", "-q", "-m", "init"], cwd=repo, check=True)
        for rel, text in PACK_V2.items():
            p = repo / rel
            p.parent.mkdir(parents=True, exist_ok=True)
            p.write_text(text, encoding="utf-8", newline="")
        (repo / ".workbench-version").write_text("2.0.0" + chr(10), encoding="utf-8")
        status = subprocess.run(git + ["status", "--porcelain", "--untracked-files=all"], cwd=repo, capture_output=True, text=True).stdout.splitlines()
        print("untracked after install:", sorted(s[3:] for s in status))
        run = subprocess.run([sys.executable, "-I", str(repo / "scripts/verify_agent.py")], capture_output=True, text=True)
        print("installed verify script:", run.returncode, run.stdout.strip())
        subprocess.run(git + ["add", "-A"], cwd=repo, check=True)
        subprocess.run(git + ["commit", "-q", "-m", "install workbench pack 2.0.0"], cwd=repo, check=True)
        print("committed; clean tree:", subprocess.run(git + ["status", "--porcelain"], cwd=repo, capture_output=True, text=True).stdout == "")
    print("the install showed up in the repository as new files that can be reviewed and committed like any change, and the installed script ran; a smoke test like this checks that a freshly installed pack works in a repository it has never seen")


if __name__ == "__main__":
    main()
