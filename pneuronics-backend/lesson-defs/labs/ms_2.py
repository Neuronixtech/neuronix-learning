"""Teaching implementation (our own): multi-session handoff, Part 2 - the consumer side: a fresh session loads handoff.json and validates it. Malformed JSON, missing fields, wrong types
(a string where a list belongs), pointers to files that no longer exist, changed files that do not exist, and Markdown that disagrees with the JSON. Real files in a temporary project. No language model is used."""
import json
import tempfile
from pathlib import Path

FIELDS = {"summary": str, "changed_files": list, "commands_run": list, "failed_attempts": list, "open_risks": list, "next_action": str, "verdict_pointer": str}


def load(path):
    try:
        data = json.loads(Path(path).read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as e:
        return None, [f"cannot read handoff: {type(e).__name__}"]
    if not isinstance(data, dict):
        return None, ["handoff is not an object"]
    errs = []
    for k, t in FIELDS.items():
        if k not in data:
            errs.append(f"missing {k}")
        elif type(data[k]) is not t:
            errs.append(f"{k} should be {t.__name__}, got {type(data[k]).__name__}")
    if not errs and not data["next_action"].strip():
        errs.append("next_action is blank")
    return data, errs


def check_pointers(data, root):
    errs = []
    if not (root / data["verdict_pointer"]).is_file():
        errs.append(f"verdict_pointer target is missing: {data['verdict_pointer']}")
    for f in data["changed_files"]:
        if not (root / f).is_file():
            errs.append(f"changed file not found: {f}")
    return errs


def render_md(d):
    return chr(10).join(f"{k}: {d[k]}" for k in FIELDS)


def section(t):
    print(f"\n--- {t} ---")


def good():
    return {"summary": "s", "changed_files": ["src/a.py"], "commands_run": ["python -m unittest"], "failed_attempts": [], "open_risks": [], "next_action": "Run python -m unittest.", "verdict_pointer": "verdict.json"}


def main():
    with tempfile.TemporaryDirectory() as d:
        root = Path(d)
        (root / "src").mkdir()
        (root / "src/a.py").write_text("x", encoding="utf-8")
        (root / "verdict.json").write_text("{}", encoding="utf-8")
        h = root / "handoff.json"

        section("1. Genuinely running: the resuming session validates what it loads")
        h.write_text(json.dumps(good()), encoding="utf-8")
        data, errs = load(h)
        print("valid handoff: errors", errs, "| pointer errors", check_pointers(data, root))
        h.write_text("{truncated", encoding="utf-8")
        print("malformed JSON:", load(h)[1])
        h.write_text(json.dumps([1, 2]), encoding="utf-8")
        print("wrong top-level shape:", load(h)[1])
        print("the consumer refuses a file it cannot parse and says why, instead of starting work from a half-read packet")

        section("2. Genuinely running: missing and mistyped fields")
        for label, mut in (("missing open_risks", lambda g: g.pop("open_risks")), ("commands_run is a string", lambda g: g.update(commands_run="python -m unittest")),
                           ("next_action is blank", lambda g: g.update(next_action=" ")), ("next_action is None", lambda g: g.update(next_action=None))):
            g = good()
            mut(g)
            h.write_text(json.dumps(g), encoding="utf-8")
            print(f"{label:26}", load(h)[1])
        print("list('python -m unittest') in Python splits the string into characters:", len(list("python -m unittest")), "items; a consumer that iterated a string commands_run would have replayed each letter as a command, which is why the type is checked and not just the presence")

        section("3. Genuinely running: pointers that no longer resolve")
        g = good()
        g["verdict_pointer"] = "gone/verdict.json"
        g["changed_files"] = ["src/a.py", "src/deleted.py"]
        h.write_text(json.dumps(g), encoding="utf-8")
        data, errs = load(h)
        print("schema errors:", errs)
        for e in check_pointers(data, root):
            print("pointer error:", e)
        print("the packet was valid JSON with every field and still pointed at a report and a file that were not there, so schema validity is not the same as the handoff being usable; the resuming session has to check that its evidence exists")

        section("4. Genuinely measuring: Markdown that drifts from the JSON")
        g = good()
        h.write_text(json.dumps(g), encoding="utf-8")
        md = render_md(g)
        edited = md.replace("Run python -m unittest.", "Deploy to production.")
        print("regenerated Markdown equals the shipped Markdown:", render_md(load(h)[0]) == md)
        print("after the Markdown next_action is edited (simulated by a string replacement):", render_md(load(h)[0]) == edited)
        print("next_action in the JSON still says:", load(h)[0]["next_action"])
        print("a hand-edited Markdown file and the JSON now disagree and nothing in the pipeline noticed until the comparison was run; the JSON is the source the agent reads, so the Markdown should be regenerated and never edited, and a check that regenerates and compares finds drift")

        section("5. Genuinely checking: a resuming session never trusts the summary alone")
        g = good()
        g["summary"] = "All tests pass and the task is complete."
        g["verdict_pointer"] = "verdict.json"
        (root / "verdict.json").write_text(json.dumps({"approved": False, "passed": False}), encoding="utf-8")
        h.write_text(json.dumps(g), encoding="utf-8")
        data, errs = load(h)
        verdict = json.loads((root / data["verdict_pointer"]).read_text(encoding="utf-8"))
        print("summary says:", data["summary"])
        print("verdict file says:", verdict)
        print("summary claims completion:", "complete" in data["summary"], "| verdict agrees:", verdict["passed"])
        print("the summary and the report it points to contradicted each other, and only reading the pointer revealed that; the packet is a pointer to evidence and the evidence outranks the prose")


if __name__ == "__main__":
    main()
