"""Teaching implementation (our own): frame the task before code, Part 2 - rendering a validated TaskFrame to Markdown, validating before writing, process exit codes through a real subprocess,
an artifact audit that checks every section is present, and a Markdown injection problem found in the renderer. Written to temporary directories. No language model is used."""
import re
import subprocess
import sys
import tempfile
from pathlib import Path

PROGRAM = r'''
import sys
from pathlib import Path

def validate(frame):
    errors = []
    if not str(frame.get("goal", "")).strip():
        errors.append("Goal is required.")
    if not [c for c in frame.get("acceptance_commands", []) if str(c).strip()]:
        errors.append("At least one acceptance command is required.")
    return errors

def render(frame):
    lines = ["# Task Frame", "", "## Goal", "", frame["goal"].strip(), "", "## Acceptance Commands", ""]
    lines += ["- `" + c + "`" for c in frame["acceptance_commands"]]
    return "\n".join(lines) + "\n"

def main(out_dir, goal, commands):
    frame = {"goal": goal, "acceptance_commands": commands}
    errors = validate(frame)
    if errors:
        print("Task frame rejected:")
        for e in errors:
            print("- " + e)
        return 1
    out = Path(out_dir) / "outputs" / "task-frame.md"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(render(frame), encoding="utf-8")
    print("Task frame validated.")
    return 0

if __name__ == "__main__":
    cmds = [c for c in sys.argv[3:]]
    sys.exit(main(sys.argv[1], sys.argv[2], cmds))
'''


def render(goal, facts, allowed, forbidden, commands, unknowns):
    lines = ["# Task Frame", "", "## Goal", "", goal.strip(), "", "## Repository Facts", ""]
    lines += [f"- **Claim:** {c}" + chr(10) + f"  - **Evidence:** `{e}`" for c, e in facts] or ["- No repository facts recorded."]
    lines += ["", "## Allowed Paths", ""] + [f"- {p}" for p in allowed]
    lines += ["", "## Forbidden Paths", ""] + [f"- {p}" for p in forbidden]
    lines += ["", "## Acceptance Commands", ""] + [f"- `{c}`" for c in commands]
    lines += ["", "## Unknowns", ""] + [f"- {cat}: {q}" for q, cat in unknowns]
    return chr(10).join(lines) + chr(10)


def headings(md):
    return [ln for ln in md.splitlines() if ln.startswith("## ")]


def sanitise(text):
    return " ".join(text.split()).replace("#", "")


def section(t):
    print(f"\n--- {t} ---")


def main():
    facts = [("The duplicate test expects HTTP 409.", "tests/test_accounts.py:44")]
    args = ("Reject duplicate registration.", facts, ["src/accounts"], ["migrations"], ["python3 -m unittest tests.test_accounts -v"], [("Does storage prevent concurrent duplicates?", "discoverable")])

    section("1. Genuinely running: the rendered artifact and an audit of its sections")
    md = render(*args)
    print(md)
    want = ["## Goal", "## Repository Facts", "## Allowed Paths", "## Forbidden Paths", "## Acceptance Commands", "## Unknowns"]
    print("headings found:", headings(md))
    print("all six sections present, in order:", headings(md) == want)
    print("a renderer can drop a section even when the data validated, so the audit checks the Markdown and not only the frame")

    section("2. Genuinely running: validate before write, through a real subprocess")
    with tempfile.TemporaryDirectory() as d:
        prog = Path(d) / "prog.py"
        prog.write_text(PROGRAM, encoding="utf-8")
        py = [sys.executable, "-I", str(prog)]
        bad = subprocess.run(py + [d, "   ", "python3 -m unittest"], capture_output=True, text=True)
        print("invalid goal: exit", bad.returncode, "| printed", bad.stdout.strip().splitlines(), "| artifact exists:", (Path(d) / "outputs" / "task-frame.md").exists())
        good = subprocess.run(py + [d, "Reject duplicates.", "python3 -m unittest"], capture_output=True, text=True)
        print("valid frame  : exit", good.returncode, "| printed", good.stdout.strip(), "| artifact exists:", (Path(d) / "outputs" / "task-frame.md").exists())
        none = subprocess.run(py + [d, "Reject duplicates."], capture_output=True, text=True)
        print("no command   : exit", none.returncode, "| printed", none.stdout.strip().splitlines())
    print("the rejected frame exited 1 and wrote no file, the accepted one exited 0 and wrote the artifact; the exit code lets automation stop on a bad frame, and it says only that the structure passed")

    section("3. Genuinely finding: user text can add headings to the artifact")
    evil = "Reject duplicates." + chr(10) + chr(10) + "## Allowed Paths" + chr(10) + chr(10) + "- everything/"
    md2 = render(evil, facts, ["src/accounts"], ["migrations"], ["python3 -m unittest"], [])
    print("headings with an injected goal:", headings(md2))
    print("Allowed Paths headings:", headings(md2).count("## Allowed Paths"), "| the real allowed path list is still:", ["src/accounts"])
    md3 = render(sanitise(evil), facts, ["src/accounts"], ["migrations"], ["python3 -m unittest"], [])
    print("headings after collapsing whitespace and removing #:", headings(md3))
    print("a goal containing a newline and '## Allowed Paths' produced a second Allowed Paths heading with a made-up entry, which a reader or a later agent could take for the real boundary; collapsing the goal to one line and dropping # kept the six headings, at the cost of altering the author's text")

    section("4. Genuinely running: a missing section is visible to the audit")
    broken = md.replace("## Forbidden Paths", "## Forbidden")
    print("headings after a careless rename:", headings(broken))
    print("audit passes:", headings(broken) == want)
    print("a rename in the renderer changed the artifact without any data error, and only a check of the generated file noticed")

    section("5. Genuinely measuring: the receipt is only text")
    for ev in ("tests/test_accounts.py:44", "tests/test_accounts.py:99999", "no/such/file.py:1", "somewhere"):
        ok = re.fullmatch(r"[\w./-]+:\d+", ev) is not None
        print(f"{ev:30} has the file:line shape: {ok}")
    print("three of four receipts have the right shape and only the last is rejected by shape, though two of the three point at lines or files that do not exist in this lab; a shape check cannot tell a real receipt from a made-up one, which needs the repository to be read")


if __name__ == "__main__":
    main()
