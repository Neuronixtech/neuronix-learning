"""Teaching implementation (our own): repo memory and durable state, Part 1 - a standard-library validator for a subset of JSON Schema (required, type, enum, pattern, items) with error
paths, the agent_state and task_board schemas, and a catalogue of invalid states. Hand-written documents; no language model is used."""
import json
import re

AGENT_STATE_SCHEMA = {"type": "object", "required": ["schema_version", "active_task_id", "touched_files", "assumptions", "blockers", "next_action"], "properties": {
    "schema_version": {"type": "integer"}, "active_task_id": {"type": "string", "pattern": r"^T-\d{3,}$"}, "touched_files": {"type": "array", "items": {"type": "string"}},
    "assumptions": {"type": "array", "items": {"type": "string"}}, "blockers": {"type": "array", "items": {"type": "string"}}, "next_action": {"type": "string"}}}
TASK_BOARD_SCHEMA = {"type": "object", "required": ["schema_version", "tasks"], "properties": {"schema_version": {"type": "integer"}, "tasks": {"type": "array", "items": {
    "type": "object", "required": ["id", "title", "status"], "properties": {"id": {"type": "string", "pattern": r"^T-\d{3,}$"}, "title": {"type": "string"},
                                                                               "status": {"type": "string", "enum": ["pending", "in_progress", "blocked", "completed"]}}}}}}


def is_type(value, t):
    if t == "object":
        return isinstance(value, dict)
    if t == "array":
        return isinstance(value, list)
    if t == "string":
        return isinstance(value, str)
    if t == "integer":
        return isinstance(value, int) and not isinstance(value, bool)
    if t == "boolean":
        return isinstance(value, bool)
    if t == "null":
        return value is None
    raise ValueError(f"unsupported schema type {t}")


def validate(value, schema, path="$"):
    errors = []
    t = schema.get("type")
    if t and not is_type(value, t):
        return [f"{path}: expected {t}, got {type(value).__name__}"]
    if "enum" in schema and value not in schema["enum"]:
        errors.append(f"{path}: {value!r} not in {schema['enum']}")
    if "pattern" in schema:
        if not isinstance(value, str) or re.search(schema["pattern"], value) is None:
            errors.append(f"{path}: {value!r} does not match {schema['pattern']}")
    if t == "object":
        for k in schema.get("required", []):
            if k not in value:
                errors.append(f"{path}: missing {k}")
        for k, sub in schema.get("properties", {}).items():
            if k in value:
                errors += validate(value[k], sub, f"{path}.{k}")
    if t == "array" and "items" in schema:
        for i, item in enumerate(value):
            errors += validate(item, schema["items"], f"{path}[{i}]")
    return errors


GOOD = {"schema_version": 1, "active_task_id": "T-014", "touched_files": ["src/scheduler.py"], "assumptions": [], "blockers": [], "next_action": "Run the scheduler tests"}


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely checking: one valid state and nine invalid ones")
    print("valid:", validate(GOOD, AGENT_STATE_SCHEMA) or "no errors")
    variants = {"touched_files is null": dict(GOOD, touched_files=None), "touched_files missing": {k: v for k, v in GOOD.items() if k != "touched_files"}, "schema_version is a string": dict(GOOD, schema_version="1"),
                "schema_version is True": dict(GOOD, schema_version=True), "task id T-01": dict(GOOD, active_task_id="T-01"), "task id TASK-125": dict(GOOD, active_task_id="TASK-125"),
                "task id with trailing text": dict(GOOD, active_task_id="T-014 extra"), "array holds an integer": dict(GOOD, touched_files=["a.py", 42]), "state is a list": [GOOD]}
    for name, doc in variants.items():
        errs = validate(doc, AGENT_STATE_SCHEMA)
        print(f"{name:28} -> {errs}")
    print("every invalid document was refused with the field path of the problem; True was rejected as a schema_version because bool is a subclass of int in Python and the validator excludes it on purpose")

    section("2. Genuinely checking: the pattern anchors")
    for pat, label in ((r"T-\d{3,}", "unanchored (search)"), (r"^T-\d{3,}$", "anchored")):
        results = {v: re.search(pat, v) is not None for v in ("T-001", "T-1000", "T-01", "T-ABC", "TASK-125", "xT-001y", "T-014 extra")}
        print(f"{label:22} {results}")
    print("without ^ and $ the pattern accepted 'xT-001y' and 'T-014 extra' because JSON Schema patterns are searches; the format check also says nothing about whether the task exists")

    section("3. Genuinely checking: the task board schema, including enums and nested paths")
    board = {"schema_version": 1, "tasks": [{"id": "T-001", "title": "a", "status": "pending"}, {"id": "T-2", "title": "b", "status": "finished"}, {"id": "T-003", "status": "blocked"}]}
    for e in validate(board, TASK_BOARD_SCHEMA):
        print(" ", e)
    print("three problems across two of the three tasks were each reported with their own path (tasks[1].id, tasks[1].status and the missing title in tasks[2]), and the valid first task produced no error; a controlled vocabulary of statuses turns 'finished' versus 'completed' into a refusal instead of a silent mismatch")

    section("4. Genuinely checking: what a schema does not check")
    dup = {"schema_version": 1, "tasks": [{"id": "T-001", "title": "a", "status": "pending"}, {"id": "T-001", "title": "b", "status": "completed"}]}
    print("duplicate task ids:", validate(dup, TASK_BOARD_SCHEMA) or "no errors")
    ghost = dict(GOOD, active_task_id="T-999")
    print("active task id that is not on the board:", validate(ghost, AGENT_STATE_SCHEMA) or "no errors")
    extra = dict(GOOD, surprise_field="anything")
    print("unknown extra field:", validate(extra, AGENT_STATE_SCHEMA) or "no errors")
    print("all three passed the structural check: uniqueness, referential integrity and unknown fields need either more schema keywords (this validator implements five) or application checks; passing a schema is not the same as being a consistent state")

    section("5. Genuinely checking: valid JSON is not valid state")
    for text in ('{"schema_version": 1}', '[1, 2, 3]', '{"schema_version": 1, "active_task_id": "T-014", "touched_files": [], "assumptions": [], "blockers": [], "next_action": ""}'):
        doc = json.loads(text)
        print(f"{text[:60]:62} parses=True schema errors={len(validate(doc, AGENT_STATE_SCHEMA))}")
    print("the last document satisfies the schema although next_action is empty; a type check cannot say that an empty string is a useless next action, which is a separate rule")


if __name__ == "__main__":
    main()
