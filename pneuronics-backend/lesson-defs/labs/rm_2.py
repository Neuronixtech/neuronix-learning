"""Teaching implementation (our own): repo memory and durable state, Part 2 - a StateManager with load, update and commit built on the validator from rm_1, candidate-copy updates that leave
the accepted state untouched on rejection, defensive copies, a round trip through REAL files with a fresh manager, corrupt-file handling and a cross-file integrity check. No model is used."""
import copy
import json
import os
import tempfile
from pathlib import Path

from rm_1 import AGENT_STATE_SCHEMA, GOOD, TASK_BOARD_SCHEMA, validate


def atomic_write(path, data):
    path = Path(path)
    tmp = Path(str(path) + ".tmp")
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, sort_keys=True)
        f.write("\n")
        f.flush()
        os.fsync(f.fileno())
    os.replace(tmp, path)


class StateManager:
    def __init__(self, path, schema, copy_out=True):
        self.path, self.schema, self.state, self.copy_out = Path(path), schema, None, copy_out

    def _out(self):
        return copy.deepcopy(self.state) if self.copy_out else self.state

    def load(self):
        try:
            candidate = json.loads(self.path.read_text(encoding="utf-8"))
        except FileNotFoundError:
            raise
        except json.JSONDecodeError as e:
            raise ValueError(f"corrupt JSON in {self.path.name}") from e
        errors = validate(candidate, self.schema)
        if errors:
            raise ValueError("; ".join(errors))
        self.state = candidate
        return self._out()

    def update(self, changes):
        if self.state is None:
            raise RuntimeError("load before update")
        candidate = copy.deepcopy(self.state)
        candidate.update(changes)
        errors = validate(candidate, self.schema)
        if errors:
            raise ValueError("; ".join(errors))
        self.state = candidate
        return self._out()

    def commit(self):
        errors = validate(self.state, self.schema)
        if errors:
            raise ValueError("; ".join(errors))
        atomic_write(self.path, self.state)


def cross_check(state, board):
    ids = [t["id"] for t in board["tasks"]]
    problems = []
    if len(ids) != len(set(ids)):
        problems.append("duplicate task ids on the board")
    if state["active_task_id"] not in ids:
        problems.append(f"active task {state['active_task_id']} is not on the board")
    return problems


def section(t):
    print(f"\n--- {t} ---")


def main():
    with tempfile.TemporaryDirectory() as d:
        root = Path(d)
        sp = root / "agent_state.json"

        section("1. Genuinely running: load, update, commit, then a fresh manager reloads from disk")
        atomic_write(sp, GOOD)
        m = StateManager(sp, AGENT_STATE_SCHEMA)
        m.load()
        m.update({"active_task_id": "T-015", "touched_files": ["src/scheduler.py", "tests/test_scheduler.py"], "next_action": "Run the scheduler tests"})
        print("in memory before commit, file on disk still says:", json.loads(sp.read_text())["active_task_id"])
        m.commit()
        second = StateManager(sp, AGENT_STATE_SCHEMA).load()
        print("fresh manager sees:", second["active_task_id"], second["touched_files"], "|", second["next_action"])
        print("the update was not durable until commit(); a new manager reading the file is the evidence that it survived, where checking the old object would prove nothing")

        section("2. Genuinely checking: a rejected update leaves the accepted state unchanged")
        before = copy.deepcopy(m.state)
        for bad in ({"touched_files": None}, {"active_task_id": "T-01"}, {"schema_version": "2"}):
            try:
                m.update(bad)
                print(bad, "-> accepted (wrong)")
            except ValueError as e:
                print(f"{str(bad):32} -> rejected: {e}")
        print("state unchanged after three rejections:", m.state == before)
        class Careless(StateManager):
            def update(self, changes):
                self.state.update(changes)  # mutates first, validates after
                errors = validate(self.state, self.schema)
                if errors:
                    raise ValueError("; ".join(errors))
        c = Careless(sp, AGENT_STATE_SCHEMA); c.load()
        snapshot = copy.deepcopy(c.state)
        try:
            c.update({"touched_files": None})
        except ValueError:
            pass
        print("a manager that mutates before validating: state unchanged =", c.state == snapshot, "| touched_files is now", c.state["touched_files"])
        print("the careless version raised the same error and still left invalid data in memory, where the next read would trip over it")

        section("3. Genuinely checking: returned state must be a copy")
        for copy_out in (True, False):
            mm = StateManager(sp, AGENT_STATE_SCHEMA, copy_out=copy_out)
            got = mm.load()
            got["touched_files"] = None  # a caller edits the dictionary it received
            ok = not validate(mm.state, AGENT_STATE_SCHEMA)
            print(f"copy_out={copy_out!s:5} caller set touched_files to None; manager's own state still valid = {ok}")
        print("handing out the internal dictionary let a caller bypass update() and validation without calling any method; deep copies stop that, and a read-only view would be stronger")

        section("4. Genuinely checking: corrupt, missing and cross-file problems")
        (root / "bad.json").write_text('{"schema_version": 1, "active_task_id": ', encoding="utf-8")
        for name in ("bad.json", "nope.json"):
            try:
                StateManager(root / name, AGENT_STATE_SCHEMA).load()
            except (ValueError, FileNotFoundError) as e:
                print(f"{name:10} -> {type(e).__name__}: {e}")
        board = {"schema_version": 1, "tasks": [{"id": "T-014", "title": "a", "status": "pending"}, {"id": "T-014", "title": "b", "status": "pending"}]}
        print("board schema errors:", validate(board, TASK_BOARD_SCHEMA) or "none", "| cross-file problems:", cross_check(dict(GOOD, active_task_id="T-099"), board))
        print("each document passed its own schema and the pair was still inconsistent (duplicate ids, an active task that is not on the board); the load refuses a corrupt file instead of resetting it")

        section("5. Genuinely checking: commit refuses to write an invalid state")
        mm = StateManager(sp, AGENT_STATE_SCHEMA)
        mm.load()
        mm.state["touched_files"] = None  # corrupted by code that bypassed update()
        before_file = sp.read_text()
        try:
            mm.commit()
        except ValueError as e:
            print("commit refused:", e)
        print("file on disk unchanged by the refused commit:", sp.read_text() == before_file)
        print("revalidating at commit is a second guard for state changed by some other path; it does not replace encapsulation")


if __name__ == "__main__":
    main()
