"""Teaching implementation (our own): the minimal agent workbench, Part 2 - task and state validation, corrupt JSON, atomic writes, drift between the state file and the task board
after a crash between two writes, and a recovery function that reconciles saved state with the REAL file contents. Real temp files; no language model is used."""
import json
import os
import tempfile
from pathlib import Path

VALID_STATUSES = {"todo", "in_progress", "blocked", "failed", "done"}


def validate_task(task):
    problems = []
    if not isinstance(task, dict):
        return ["task must be an object"]
    if not isinstance(task.get("id"), str) or not task.get("id"):
        problems.append("id must be a non-empty string")
    if not isinstance(task.get("goal"), str) or not task.get("goal"):
        problems.append("goal must be a non-empty string")
    if task.get("status") not in VALID_STATUSES:
        problems.append(f"status {task.get('status')!r} is not one of {sorted(VALID_STATUSES)}")
    allowed = task.get("allowed_files")
    if not isinstance(allowed, list) or not allowed or not all(isinstance(x, str) for x in allowed):
        problems.append("allowed_files must be a non-empty list of strings")
    elif any(x.startswith("/") or ".." in Path(x).parts for x in allowed):
        problems.append("allowed_files contains an absolute or parent-relative path")
    if not isinstance(task.get("acceptance_criteria"), list) or not task.get("acceptance_criteria"):
        problems.append("acceptance_criteria are required")
    return problems


def write_plain(path, data):
    Path(path).write_text(json.dumps(data), encoding="utf-8")


def write_atomic(path, data):
    tmp = Path(str(path) + ".tmp")
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(data, f)
        f.flush()
        os.fsync(f.fileno())
    os.replace(tmp, path)


def load_state(path):
    try:
        return json.loads(Path(path).read_text(encoding="utf-8")), None
    except FileNotFoundError:
        return None, "missing"
    except json.JSONDecodeError:
        return None, "corrupt"


def recover(task, state, note_text):
    """Decide what to do after an interruption using the saved records AND the real artifact."""
    active = state.get("active_task_id")
    if active is None:
        return "no active task: select the next one"
    if task is None:
        return "active task is not on the board: quarantine the stale state and record the inconsistency"
    line = f"Completed: {task['goal']}"
    if task["status"] == "done":
        return "board says done: clear the active id"
    if line in note_text.splitlines():
        return "required change already present: run the acceptance checks and record the verified result"
    if note_text.strip() and note_text.strip() != "Project notes":
        return "partial or unexpected content: repair with an idempotent update"
    return "no change made yet: resume the task"


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely checking: validating tasks from an external file")
    good = {"id": "TASK-001", "goal": "Create a note", "status": "todo", "allowed_files": ["notes.txt"], "acceptance_criteria": ["exists"]}
    bad = {"id": "TASK-002", "goal": "", "status": "complete", "allowed_files": "../secrets.txt"}
    worse = {"id": "TASK-003", "goal": "x", "status": "todo", "allowed_files": ["/etc/passwd", "../x"], "acceptance_criteria": ["a"]}
    for name, t in (("valid", good), ("malformed", bad), ("escaping paths", worse), ("not an object", ["x"])):
        print(f"{name:15} -> {validate_task(t) or 'no problems'}")
    print("shape and path-syntax errors are caught before any file is touched; this validates the task data and does not prove the filesystem is safe, and uniqueness of ids is not checked here")

    section("2. Genuinely checking: a truncated state file, plain versus atomic writes")
    with tempfile.TemporaryDirectory() as d:
        p = Path(d) / "agent_state.json"
        write_plain(p, {"active_task_id": "TASK-001"})
        p.write_text('{"active_task_id": ', encoding="utf-8")  # an interrupted in-place overwrite
        print("after an interrupted plain overwrite:", load_state(p))
        write_atomic(p, {"active_task_id": "TASK-001"})
        Path(str(p) + ".tmp").write_text('{"active_task_id": ', encoding="utf-8")  # an interrupted atomic write leaves only the temp file damaged
        print("after an interrupted atomic write:", load_state(p))
        print("missing file:", load_state(Path(d) / "nope.json"))
    print("the loader reports missing and corrupt separately and does not treat either as an empty state; resetting a corrupt file to defaults would erase the only record of unfinished work")

    section("3. Genuinely checking: the state file and the board disagree after a crash between two writes")
    with tempfile.TemporaryDirectory() as d:
        root = Path(d)
        state_p, board_p = root / "agent_state.json", root / "task_board.json"
        write_atomic(state_p, {"active_task_id": None})
        write_atomic(board_p, {"tasks": [dict(good, status="todo")]})
        state = json.loads(state_p.read_text()); board = json.loads(board_p.read_text())
        state["active_task_id"] = "TASK-001"
        write_atomic(state_p, state)  # first write succeeds
        # the process dies here, before the board write
        s, b = json.loads(state_p.read_text()), json.loads(board_p.read_text())
        print(f"state says active={s['active_task_id']}, board says status={b['tasks'][0]['status']}")
        print("each file is valid on its own and the pair is inconsistent: per-file atomic writes do not make a two-file update atomic")

    section("4. Genuinely checking: recovery decisions from the saved records and the actual note")
    task = dict(good, goal="Create a project note")
    cases = [("no active task", {"active_task_id": None}, task, "Project notes\n"), ("task missing from the board", {"active_task_id": "TASK-009"}, None, "Project notes\n"),
             ("nothing written yet", {"active_task_id": "TASK-001"}, dict(task, status="in_progress"), "Project notes\n"),
             ("change already applied", {"active_task_id": "TASK-001"}, dict(task, status="in_progress"), "Project notes\nCompleted: Create a project note\n"),
             ("board already done", {"active_task_id": "TASK-001"}, dict(task, status="done"), "Project notes\n"), ("unexpected content", {"active_task_id": "TASK-001"}, dict(task, status="in_progress"), "garbage\n")]
    for name, st, tk, note in cases:
        print(f"{name:28} -> {recover(tk, st, note)}")
    print("the same saved status (in_progress) led to different actions depending on what was actually in the file, which is why recovery inspects the environment instead of trusting the record")

    section("5. Genuinely checking: a status field that bypasses the lifecycle")
    legal = {"todo": {"in_progress", "blocked"}, "in_progress": {"blocked", "failed", "done"}, "blocked": {"in_progress"}, "failed": {"in_progress"}, "done": set()}
    for a, b in (("todo", "in_progress"), ("done", "in_progress"), ("todo", "done"), ("failed", "in_progress")):
        print(f"{a:12} -> {b:12} {'allowed' if b in legal[a] else 'refused'}")
    print("a finished task does not silently return to in_progress, and a task cannot jump from todo to done without passing through work; a reopen would need its own explicit operation")


if __name__ == "__main__":
    main()
