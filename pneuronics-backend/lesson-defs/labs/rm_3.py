"""Teaching implementation (our own): repo memory and durable state, Part 3 - schema migration from version 1 to 2 that is idempotent and refuses unknown versions, a lost update
between two writers with and without a revision check, and recovery from a snapshot plus an append-only event log. Real temp files and real threads; no language model is used."""
import copy
import json
import os
import tempfile
import threading
from pathlib import Path

from rm_2 import atomic_write


def migrate_v1_to_v2(state):
    new = copy.deepcopy(state)
    new["blockers"] = [{"description": b, "status": "open"} for b in new.get("blockers", [])]
    new["schema_version"] = 2
    return new


def load_current(path):
    state = json.loads(Path(path).read_text(encoding="utf-8"))
    v = state.get("schema_version")
    if v == 2:
        return state, "already current"
    if v == 1:
        migrated = migrate_v1_to_v2(state)
        atomic_write(path, migrated)
        return migrated, "migrated 1 -> 2"
    raise ValueError(f"unsupported schema_version {v!r}: refusing to guess")


def section(t):
    print(f"\n--- {t} ---")


def main():
    with tempfile.TemporaryDirectory() as d:
        root = Path(d)
        p = root / "agent_state.json"

        section("1. Genuinely running: a v1 file is migrated once and the migration is repeatable")
        v1 = {"schema_version": 1, "active_task_id": "T-014", "blockers": ["fixture format unclear"], "next_action": "inspect the fixture"}
        atomic_write(p, v1)
        backup = root / "agent_state.v1.bak"
        backup.write_text(p.read_text(), encoding="utf-8")
        s, how = load_current(p)
        print(how, "->", s["schema_version"], s["blockers"])
        s2, how2 = load_current(p)
        print("second load:", how2, "| identical to the first result:", s2 == s)
        print("original preserved as a backup with version", json.loads(backup.read_text())["schema_version"], "and blockers", json.loads(backup.read_text())["blockers"])
        print("a version-aware loader runs only the migration the file needs; repeating the rename blindly would have corrupted an already-migrated file")

        section("2. Genuinely checking: an unsupported version is refused")
        for v in (3, "1", None):
            atomic_write(p, {"schema_version": v, "active_task_id": "T-014"})
            try:
                load_current(p)
            except ValueError as e:
                print(f"version {v!r:5} -> {e}")
        print("a program that guessed at a newer or malformed version could misread fields silently; refusing stops it and points at the missing migration")

        section("3. Genuinely checking: a migration that does not validate its input or its output")
        atomic_write(p, {"schema_version": 1, "active_task_id": "T-014", "blockers": "not a list"})
        before = p.read_text()
        try:
            s3, how3 = load_current(p)
            print("no exception:", how3, "-> blockers now has", len(s3["blockers"]), "entries, first three:", s3["blockers"][:3])
        except Exception as e:
            print("migration failed with", type(e).__name__)
        print("file on disk changed by the migration:", p.read_text() != before)
        print("the input was a string where a list belongs, iterating it produced one 'blocker' per character, and the garbage was written over the original; a migration must validate the old document before transforming it and the new document before writing it, and keep the backup taken in section 1 until the result is verified")

        section("4. Genuinely measuring: two writers update the same file, with and without a revision check (real threads)")
        def run(guarded):
            path = root / ("g.json" if guarded else "u.json")
            atomic_write(path, {"revision": 1, "blockers": [], "next_action": "start"})
            lock, barrier, out = threading.Lock(), threading.Barrier(2), {}

            def writer(name, field, value):
                state = json.loads(path.read_text())  # both read revision 1
                barrier.wait()
                with lock:
                    cur = json.loads(path.read_text())
                    if guarded and cur["revision"] != state["revision"]:
                        out[name] = "rejected (stale)"
                        return
                    state[field] = value
                    state["revision"] = cur["revision"] + 1
                    atomic_write(path, state)
                    out[name] = "saved"
            a = threading.Thread(target=writer, args=("A", "blockers", ["fixture unclear"]))
            b = threading.Thread(target=writer, args=("B", "next_action", "run the tests"))
            a.start(); b.start(); a.join(); b.join()
            return out, json.loads(path.read_text())
        for g in (False, True):
            out, final = run(g)
            print(f"revision check={g!s:5} outcomes {dict(sorted(out.items()))} final file: blockers={final['blockers']} next_action={final['next_action']!r}")
        print("without the check both writers reported success but one of the two changes is missing from the final file (whichever wrote first was overwritten from a stale copy); with the check the later writer was told to reload, and which writer loses depends on timing")

        section("5. Genuinely checking: snapshot plus event log recovery")
        snap, log = root / "snapshot.json", root / "events.jsonl"
        atomic_write(snap, {"seq": 2, "blockers": [], "next_action": "start"})
        events = [{"seq": 3, "op": "set_blocker", "value": "fixture unclear"}, {"seq": 4, "op": "set_next", "value": "inspect fixture"}, {"seq": 2, "op": "set_next", "value": "stale event"}]
        log.write_text("\n".join(json.dumps(e) for e in events) + '\n{"seq": 5, "op": "set_nex', encoding="utf-8")  # the last line is cut off by a crash
        state = json.loads(snap.read_text())
        applied, skipped, torn = [], [], 0
        for line in log.read_text().splitlines():
            try:
                e = json.loads(line)
            except json.JSONDecodeError:
                torn += 1
                continue
            if e["seq"] <= state["seq"]:
                skipped.append(e["seq"])
                continue
            if e["op"] == "set_blocker":
                state["blockers"].append(e["value"])
            elif e["op"] == "set_next":
                state["next_action"] = e["value"]
            state["seq"] = e["seq"]
            applied.append(e["seq"])
        print(f"applied events {applied}, skipped already-included events {skipped}, ignored torn trailing records {torn}")
        print("recovered state:", state)
        print("replaying only events newer than the snapshot rebuilt the state and the half-written last record was ignored; deciding whether a torn record means a lost operation still needs a policy, and the event order and replay rules here are our own")


if __name__ == "__main__":
    main()
