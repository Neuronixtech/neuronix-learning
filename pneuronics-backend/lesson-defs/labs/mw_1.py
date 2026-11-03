"""Teaching implementation (our own): the minimal agent workbench, Part 1 - AGENTS.md (router), agent_state.json (state) and task_board.json (queue) on REAL files in a temp
directory, one scripted turn per run, a path allowlist, acceptance checks, a diff, and the duplicate-append bug after a crash with its idempotent fix. No language model is used."""
import difflib
import json
import tempfile
from pathlib import Path

BOARD = {"tasks": [{"id": "TASK-001", "goal": "Create a project note", "owner": "builder", "status": "todo", "allowed_files": ["notes.txt"],
                    "acceptance_criteria": ["notes.txt exists", "The note contains the task goal"]}]}
STATE = {"active_task_id": None, "touched_files": [], "assumptions": [], "blockers": [], "next_action": "Select the next eligible task"}


def wj(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")


def rj(path):
    return json.loads(path.read_text(encoding="utf-8"))


def initialize(root, overwrite_state=False):
    root.mkdir(parents=True, exist_ok=True)
    if not (root / "AGENTS.md").exists():
        (root / "AGENTS.md").write_text("# Agent Instructions\n1. Read agent_state.json.\n2. Read task_board.json.\n3. Modify only allowed files.\n", encoding="utf-8")
    if overwrite_state or not (root / "agent_state.json").exists():
        wj(root / "agent_state.json", STATE)
    if not (root / "task_board.json").exists():
        wj(root / "task_board.json", BOARD)
    if not (root / "notes.txt").exists():
        (root / "notes.txt").write_text("Project notes\n", encoding="utf-8")


def resolve_allowed(root, name, allowed):
    if name not in allowed:
        raise ValueError("not allowed for this task")
    root = root.resolve()
    target = (root / name).resolve()
    if target == root or root not in target.parents:
        raise ValueError("escapes the workbench")
    return target


def verify(task, target):
    fails = []
    if not target.is_file():
        return ["the note does not exist"]
    text = target.read_text(encoding="utf-8")
    if task["goal"] not in text:
        fails.append("the goal is missing from the note")
    return fails


def run_turn(root, crash_after_write=False, idempotent=False):
    state, board = rj(root / "agent_state.json"), rj(root / "task_board.json")
    task = None
    if state.get("active_task_id"):
        task = next((t for t in board["tasks"] if t["id"] == state["active_task_id"] and t["status"] != "done"), None)
    if task is None:
        task = next((t for t in board["tasks"] if t["status"] == "todo"), None)
    if task is None:
        return "no eligible task"
    target = resolve_allowed(root, task["allowed_files"][0], task["allowed_files"])
    task["status"], state["active_task_id"] = "in_progress", task["id"]
    wj(root / "agent_state.json", state); wj(root / "task_board.json", board)
    before = target.read_text(encoding="utf-8")
    line = f"Completed: {task['goal']}\n"
    after = before if (idempotent and line in before.splitlines(keepends=True)) else before + line
    target.write_text(after, encoding="utf-8")
    if crash_after_write:
        raise RuntimeError("process died after the write and before the status was saved")
    fails = verify(task, target)
    state["blockers"], state["touched_files"] = fails, [target.name]
    task["status"] = "in_progress" if fails else "done"
    state["active_task_id"] = task["id"] if fails else None
    wj(root / "agent_state.json", state); wj(root / "task_board.json", board)
    return "".join(difflib.unified_diff(before.splitlines(True), after.splitlines(True), "before", "after")) or "(no change)"


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: first run, second run and state preserved across runs")
    with tempfile.TemporaryDirectory() as d:
        root = Path(d) / "workdir"
        initialize(root)
        print("first run diff:\n" + run_turn(root).rstrip())
        print("board status:", rj(root / "task_board.json")["tasks"][0]["status"], "| state:", rj(root / "agent_state.json")["active_task_id"], rj(root / "agent_state.json")["next_action"])
        initialize(root)
        print("second run:", run_turn(root))
        wj(root / "agent_state.json", dict(STATE, blockers=["keep me"]))
        initialize(root)
        print("initialize() with an existing state file leaves it alone:", rj(root / "agent_state.json")["blockers"])
        initialize(root, overwrite_state=True)
        print("an initialize() that always writes the state file reset it:", rj(root / "agent_state.json")["blockers"])
    print("creating only missing files is what lets a restart resume; the unconditional version silently erased the blocker")

    section("2. Genuinely checking: the path allowlist")
    with tempfile.TemporaryDirectory() as d:
        root = Path(d)
        for name, allowed in (("notes.txt", ["notes.txt"]), ("secret.txt", ["notes.txt"]), ("../escape.txt", ["../escape.txt"]), ("/etc/passwd", ["/etc/passwd"]), (".", ["."])):
            try:
                print(f"{name:14} -> {resolve_allowed(root, name, allowed).name}")
            except ValueError as e:
                print(f"{name:14} -> refused: {e}")
    print("a filename can be on the task's own list and still resolve outside the workbench, so the allowlist check and the containment check are separate; the symlink and race cases are not covered by this check")

    section("3. Genuinely checking: a crash after the write duplicates the line on resume")
    for idem in (False, True):
        with tempfile.TemporaryDirectory() as d:
            root = Path(d) / "workdir"
            initialize(root)
            try:
                run_turn(root, crash_after_write=True, idempotent=idem)
            except RuntimeError as e:
                print(f"idempotent={idem!s:5} first run:", e)
            run_turn(root, idempotent=idem)
            note = (root / "notes.txt").read_text(encoding="utf-8")
            print(f"idempotent={idem!s:5} after the resumed run notes.txt has {note.count('Completed:')} 'Completed' line(s); task status {rj(root / 'task_board.json')['tasks'][0]['status']}")
    print("the state still said in_progress after the crash, so the resume appended the same line again; checking whether the line already exists makes the update safe to repeat, but only because this task's update is naturally deduplicable")

    section("4. Genuinely checking: acceptance checks decide done, not the write")
    with tempfile.TemporaryDirectory() as d:
        root = Path(d)
        (root / "notes.txt").write_text("unrelated\n", encoding="utf-8")
        task = BOARD["tasks"][0]
        print("note without the goal ->", verify(task, root / "notes.txt"))
        (root / "notes.txt").write_text("Completed: Create a project note\n", encoding="utf-8")
        print("note with the goal   ->", verify(task, root / "notes.txt") or "no failures")
        print("missing note         ->", verify(task, root / "gone.txt"))
    print("a successful write does not prove the criteria hold; the verifier reads the file back, and it only checks the two criteria this demo hard-codes")


if __name__ == "__main__":
    main()
