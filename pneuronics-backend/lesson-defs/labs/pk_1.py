"""Teaching implementation (our own): capstone, Part 1 - building a reusable workbench pack in a temporary directory (AGENTS.md, docs, a state schema, a verify script, an install script, README, VERSION),
a manifest of SHA-256 digests, a pack verifier, an infrastructure-versus-work check and a small schema validator. Everything is written by this lab; it is not the lesson's pack. No language model is used."""
import hashlib
import json
import tempfile
from pathlib import Path

STATE_SCHEMA = {"required": ["task_id", "status", "attempts"], "properties": {"task_id": {"type": "string"}, "status": {"type": "string", "enum": ["todo", "doing", "done", "blocked"]}, "attempts": {"type": "integer", "minimum": 0}}}
FILES = {
    "AGENTS.md": "# Rules" + chr(10) + "- stay inside the scope contract" + chr(10),
    "README.md": "Agent workbench pack." + chr(10),
    "VERSION": "1.2.0" + chr(10),
    "docs/handoff.md": "Handoff template." + chr(10),
    "schemas/agent_state.schema.json": json.dumps(STATE_SCHEMA, indent=2),
    "scripts/verify_agent.py": "print('verify ok')" + chr(10),
    "bin/install.py": "print('install')" + chr(10),
}
WORK_NAMES = ("agent_state.json", "task_board.json", "handoff.json", "feedback_record.jsonl")


def build_pack(root):
    for rel, text in FILES.items():
        p = root / rel
        p.parent.mkdir(parents=True, exist_ok=True)
        p.write_text(text, encoding="utf-8", newline="")


def digest(p):
    return hashlib.sha256(p.read_bytes()).hexdigest()


def make_manifest(root):
    return {"version": (root / "VERSION").read_text(encoding="utf-8").strip(), "files": {str(p.relative_to(root)).replace(chr(92), "/"): digest(p) for p in sorted(root.rglob("*")) if p.is_file() and p.name != "MANIFEST.json"}}


def verify_pack(root):
    m = json.loads((root / "MANIFEST.json").read_text(encoding="utf-8"))
    cur = make_manifest(root)
    problems = [f"missing: {f}" for f in m["files"] if f not in cur["files"]]
    problems += [f"modified: {f}" for f in m["files"] if f in cur["files"] and cur["files"][f] != m["files"][f]]
    problems += [f"unexpected: {f}" for f in cur["files"] if f not in m["files"]]
    if cur["version"] != m["version"]:
        problems.append(f"VERSION says {cur['version']}, manifest says {m['version']}")
    return problems


def work_files_in(root):
    return sorted(str(p.relative_to(root)).replace(chr(92), "/") for p in root.rglob("*") if p.is_file() and p.name in WORK_NAMES)


def validate(state, schema):
    errs = []
    for k in schema["required"]:
        if k not in state:
            errs.append(f"missing {k}")
    for k, spec in schema["properties"].items():
        if k not in state:
            continue
        v = state[k]
        t = spec["type"]
        if t == "string" and type(v) is not str or t == "integer" and type(v) is not int:
            errs.append(f"{k} must be {t}")
            continue
        if "enum" in spec and v not in spec["enum"]:
            errs.append(f"{k} must be one of {spec['enum']}")
        if "minimum" in spec and v < spec["minimum"]:
            errs.append(f"{k} must be at least {spec['minimum']}")
    return errs


def section(t):
    print(f"\n--- {t} ---")


def main():
    with tempfile.TemporaryDirectory() as d:
        pack = Path(d) / "agent-workbench-pack"
        pack.mkdir()
        build_pack(pack)

        section("1. Genuinely running: the pack layout and its manifest")
        print("files:", sorted(str(p.relative_to(pack)).replace(chr(92), "/") for p in pack.rglob("*") if p.is_file()))
        man = make_manifest(pack)
        (pack / "MANIFEST.json").write_text(json.dumps(man, indent=2), encoding="utf-8")
        print("manifest version:", man["version"], "| files listed:", len(man["files"]), "| verify on a fresh pack:", verify_pack(pack))
        print("a manifest of digests turns 'the pack looks right' into something a script can check")

        section("2. Genuinely running: the verifier finds each kind of damage")
        (pack / "AGENTS.md").write_text("# Rules" + chr(10) + "- do whatever" + chr(10), encoding="utf-8")
        print("edited rule file:", verify_pack(pack))
        (pack / "AGENTS.md").write_text(FILES["AGENTS.md"], encoding="utf-8", newline="")
        (pack / "docs/handoff.md").unlink()
        print("deleted file    :", verify_pack(pack))
        (pack / "docs/handoff.md").write_text(FILES["docs/handoff.md"], encoding="utf-8", newline="")
        (pack / "notes.txt").write_text("stray", encoding="utf-8")
        print("extra file      :", verify_pack(pack))
        (pack / "notes.txt").unlink()
        (pack / "VERSION").write_text("1.3.0" + chr(10), encoding="utf-8")
        print("version bumped without rebuilding the manifest:", verify_pack(pack))
        (pack / "VERSION").write_text(FILES["VERSION"], encoding="utf-8", newline="")
        print("restored:", verify_pack(pack))
        print("an edit, a deletion, a stray file and a version bump were each reported by name; a changed VERSION is reported twice because its digest and the version string both disagree with the manifest")

        section("3. Genuinely running: infrastructure versus work")
        print("work files in the clean pack:", work_files_in(pack))
        (pack / "agent_state.json").write_text("{}", encoding="utf-8")
        (pack / "scripts/feedback_record.jsonl").write_text("", encoding="utf-8")
        print("after someone runs a task inside the pack directory:", work_files_in(pack))
        print("verify_pack:", verify_pack(pack))
        print("the pack holds reusable capability, and files that record one project's work do not belong in it; the manifest check reported them as unexpected, which is how a pack stays free of project state")
        (pack / "agent_state.json").unlink()
        (pack / "scripts/feedback_record.jsonl").unlink()

        section("4. Genuinely running: the state schema as a contract")
        schema = json.loads((pack / "schemas/agent_state.schema.json").read_text(encoding="utf-8"))
        cases = [("valid", {"task_id": "T1", "status": "doing", "attempts": 2}), ("missing status", {"task_id": "T1", "attempts": 0}), ("bad status", {"task_id": "T1", "status": "finished", "attempts": 0}),
                 ("attempts is a string", {"task_id": "T1", "status": "todo", "attempts": "2"}), ("attempts is True", {"task_id": "T1", "status": "todo", "attempts": True}), ("negative attempts", {"task_id": "T1", "status": "todo", "attempts": -1})]
        for label, st in cases:
            print(f"{label:22} {validate(st, schema)}")
        print("every bad state was refused with a reason, including True as an integer, which Python would otherwise accept; this is a tiny validator written for the lab, not a full JSON Schema implementation, and it checks only required, type, enum and minimum")

        section("5. Genuinely checking: the same pack built twice")
        other = Path(d) / "second"
        other.mkdir()
        build_pack(other)
        print("manifest of two separate builds identical:", make_manifest(pack)["files"] == make_manifest(other)["files"])
        print("because the pack is built from fixed text, two builds have identical digests, which is what lets a repository record 'installed pack 1.2.0' and trust it to mean one specific set of files")


if __name__ == "__main__":
    main()
