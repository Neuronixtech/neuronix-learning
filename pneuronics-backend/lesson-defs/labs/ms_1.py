"""Teaching implementation (our own): multi-session handoff, Part 1 - a generator for the seven-field handoff packet (summary, changed_files, commands_run, failed_attempts, open_risks,
next_action, verdict_pointer), feedback trimming, rejection of a missing next action or cleanup blockers, and Markdown plus JSON output. The workbench artifacts are made up. No language model is used."""
import json
import tempfile
from pathlib import Path

FIELDS = ("summary", "changed_files", "commands_run", "failed_attempts", "open_risks", "next_action", "verdict_pointer")


def trim_naive(records, keep_last=3):
    if keep_last < 0:
        raise ValueError("keep_last must not be negative")
    return records[-keep_last:]


def trim_feedback(records, keep_last=3):
    if keep_last < 0:
        raise ValueError("keep_last must not be negative")
    return records[len(records) - keep_last:] if keep_last else []


def trim_keep_failures(records, keep_last=3):
    tail = trim_feedback(records, keep_last)
    failed = [r for r in records if r["exit_code"] != 0 and r not in tail]
    return failed + tail


def generate_handoff(snap):
    if snap["cleanup"]["blocking_issues"]:
        raise ValueError("cleanup blockers: " + "; ".join(snap["cleanup"]["blocking_issues"]))
    na = snap["state"].get("next_action")
    if not isinstance(na, str) or not na.strip():
        raise ValueError("next_action is missing or blank")
    payload = {
        "summary": snap["state"]["summary"],
        "changed_files": sorted(snap["changed_files"]),
        "commands_run": [r["command"] for r in trim_keep_failures(snap["feedback"])],
        "failed_attempts": snap["state"].get("failed_attempts", []),
        "open_risks": snap["state"].get("open_risks", []),
        "next_action": na.strip(),
        "verdict_pointer": snap["verdict_pointer"],
    }
    md = ["# Handoff", ""] + [f"## {k}{chr(10)}{payload[k] if isinstance(payload[k], str) else chr(10).join('- ' + str(x) for x in payload[k]) or '(none)'}{chr(10)}" for k in FIELDS]
    return chr(10).join(md), payload


def snapshot():
    fb = [{"command": f"cmd{i}", "exit_code": 0} for i in range(6)]
    fb[1]["exit_code"] = 1
    return {"state": {"summary": "Payment retry test still failing on timeout.", "next_action": "Run python -m unittest tests.test_payment_retry and inspect the timeout assertion.",
                      "failed_attempts": ["raised retry count to 5"], "open_risks": ["gateway timeout is not mocked"]},
            "changed_files": ["src/retry.py", "tests/test_payment_retry.py"], "feedback": fb, "cleanup": {"blocking_issues": []}, "verdict_pointer": "verification_report.json"}


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: generating the seven-field handoff")
    md, payload = generate_handoff(snapshot())
    print("fields present:", [k for k in FIELDS if k in payload], "| all seven:", all(k in payload for k in FIELDS))
    print("next_action:", payload["next_action"])
    print("commands_run kept:", payload["commands_run"])
    print("every field of the packet came from the snapshot of artifacts, not from a conversation; the next session can read next_action first and start work")

    section("2. Genuinely checking: trimming the feedback list")
    recs = [{"command": f"c{i}", "exit_code": 0} for i in range(6)]
    for k in (3, 1, 0):
        print(f"keep_last={k}: naive slice keeps {len(trim_naive(recs, k))} records | guarded version keeps {len(trim_feedback(recs, k))}")
    try:
        trim_feedback(recs, -1)
    except ValueError as e:
        print("keep_last=-1:", e)
    print("records[-0:] is records[0:], so the naive slice with keep_last=0 kept all six records instead of none; the guarded version returns an empty list, which is why the zero case has to be tested and not assumed")

    section("3. Genuinely measuring: trimming can drop the failure the next session needs")
    s = snapshot()
    kept = trim_feedback(s["feedback"])
    print("last three records only:", [(r["command"], r["exit_code"]) for r in kept])
    print("failure present in the trimmed list:", any(r["exit_code"] != 0 for r in kept))
    kept2 = trim_keep_failures(s["feedback"])
    print("failures plus last three:", [(r["command"], r["exit_code"]) for r in kept2])
    print("the only failing command, cmd1, was older than the last three records and disappeared from a plain tail trim, so a handoff built that way would not mention it; keeping every failure plus the recent tail preserved it at the cost of a longer list")

    section("4. Genuinely running: rejected handoffs")
    cases = {"blank next_action": lambda x: x["state"].update(next_action="   "), "missing next_action": lambda x: x["state"].pop("next_action"), "next_action is a list": lambda x: x["state"].update(next_action=["run tests"]),
             "cleanup blocker": lambda x: x["cleanup"].update(blocking_issues=["tests directory left in a temp state"])}
    for label, mut in cases.items():
        x = snapshot()
        mut(x)
        try:
            generate_handoff(x)
            print(f"{label:22} accepted")
        except ValueError as e:
            print(f"{label:22} rejected: {e}")
    print("a handoff with no usable next action or with unresolved cleanup blockers is refused before any file is written, because a packet that cannot tell the next session what to do is worse than none")

    section("5. Genuinely measuring: a next_action can be non-empty and useless")
    for na in ("Continue work.", "Run python -m unittest tests.test_payment_retry and inspect the timeout assertion."):
        x = snapshot()
        x["state"]["next_action"] = na
        _, p = generate_handoff(x)
        concrete = any(tok in na for tok in ("python", "tests/", "src/", ".py", "unittest"))
        print(f"{na[:48]:50} accepted, concrete by a simple keyword heuristic: {concrete}")
    print("both were accepted because the generator only checks that text exists; the keyword test here is a crude heuristic of our own that separates these two examples and would miss many cases, so specificity needs a reviewer or a stricter schema")

    section("6. Genuinely running: Markdown and JSON written side by side")
    with tempfile.TemporaryDirectory() as d:
        (Path(d) / "handoff.md").write_text(md, encoding="utf-8")
        (Path(d) / "handoff.json").write_text(json.dumps(payload, indent=2), encoding="utf-8")
        back = json.loads((Path(d) / "handoff.json").read_text(encoding="utf-8"))
        print("json round trip equal:", back == payload, "| markdown headings:", [l for l in (Path(d) / "handoff.md").read_text(encoding="utf-8").splitlines() if l.startswith("## ")])
    print("the JSON file is for the next agent and the Markdown for a human, both generated from the same dictionary so they cannot drift apart at creation time")


if __name__ == "__main__":
    main()
