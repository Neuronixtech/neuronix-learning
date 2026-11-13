"""Teaching implementation (our own): discovering the workflow people actually perform, Part 2 - ordering validation, the direct-evidence ratio and its edge cases, confidence labels that do not upgrade reported
behaviour, per-step evidence versus a workflow-level claim, and a JSON artifact. The steps are made up. No language model is used."""
import json


def validate_order(ids):
    if not ids:
        raise ValueError("Workflow must contain steps")
    if len(ids) != len(set(ids)):
        raise ValueError("Duplicate step IDs")
    if ids != sorted(ids):
        raise ValueError("Steps must be in ascending order")
    gaps = [b for a, b in zip(ids, ids[1:]) if b != a + 1]
    return {"ok": True, "gaps_before": gaps}


def direct_ratio(categories):
    if not categories:
        return None
    return sum(1 for c in categories if c == "direct") / len(categories)


def confidence(ratio, has_assumed):
    if ratio is None:
        return "unknown"
    if has_assumed:
        return "low" if ratio < 0.8 else "medium"
    return "high" if ratio >= 0.8 else ("medium" if ratio >= 0.5 else "low")


def summarize(steps):
    cats = [c for s in steps for c in s["evidence"]]
    r = direct_ratio(cats)
    return {"steps": len(steps), "direct_ratio": None if r is None else round(r, 2), "confidence": confidence(r, "assumed" in cats),
            "unconfirmed": [s["id"] for s in steps if not any(c == "direct" for c in s["evidence"])]}


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: ordering rules")
    for label, ids in (("1,2,3,4", [1, 2, 3, 4]), ("1,3,4 (gap)", [1, 3, 4]), ("1,3,2", [1, 3, 2]), ("1,2,2", [1, 2, 2]), ("empty", [])):
        try:
            print(f"{label:14} accepted {validate_order(ids)}")
        except ValueError as e:
            print(f"{label:14} rejected: {e}")
    print("a gap in the numbering was accepted and reported, while out-of-order, duplicate and empty lists were refused; a gap may mean a step was removed on purpose, so it is surfaced for a person and not rejected")

    section("2. Genuinely computing: the direct-evidence ratio and its edge cases")
    for label, cats in (("all direct", ["direct"] * 4), ("half direct", ["direct", "direct", "reported", "document"]), ("one in four", ["direct", "reported", "reported", "assumed"]), ("no evidence at all", [])):
        r = direct_ratio(cats)
        print(f"{label:20} ratio={r} confidence={confidence(r, 'assumed' in cats)}")
    print("an empty list returned None and 'unknown' instead of a ratio of zero or a division error, because no evidence is different from evidence that was all indirect")

    section("3. Genuinely measuring: a ratio can hide where the weak steps are")
    wf_a = [{"id": i, "evidence": ["direct"]} for i in range(1, 5)] + [{"id": 5, "evidence": ["assumed"]}]
    wf_b = [{"id": 1, "evidence": ["direct", "direct", "direct", "direct"]}, {"id": 2, "evidence": ["reported"]}, {"id": 3, "evidence": ["reported"]}, {"id": 4, "evidence": ["reported"]}, {"id": 5, "evidence": ["reported"]}]
    for name, wf in (("workflow A", wf_a), ("workflow B", wf_b)):
        print(name, summarize(wf))
    print("A scored a ratio of 0.8 and B scored 0.5, and both received the same label, medium, even though A has one step that was only assumed and B has four steps that rest on talk alone; the label hid that difference, which is why the list of unconfirmed steps is reported next to it, and the thresholds in confidence() are this lab's own choice")

    section("3b. Genuinely running: reported behaviour is not upgraded")
    claim = {"id": 6, "evidence": ["reported"], "text": "engineers always wait for approval"}
    print("claim:", claim["text"], "| evidence:", claim["evidence"], "| counted as confirmed:", any(c == "direct" for c in claim["evidence"]))
    print("a statement that people always do something stays labelled reported until someone has watched it or read a record of it, so it appears in the unconfirmed list instead of the confirmed one")

    section("4. Genuinely running: per-step evidence versus a workflow-level claim")
    wf_level = {"workflow": "incident triage", "evidence": ["direct"]}
    print("workflow-level claim:", wf_level, "| steps it covers: unknown")
    print("per-step evidence for the same workflow:", [(s["id"], s["evidence"]) for s in wf_a])
    print("one line of evidence attached to the whole workflow cannot show that step 5 was only assumed; attaching evidence to each step is what makes the weak step visible")

    section("5. Genuinely running: the JSON artifact")
    art = {"workflow": "incident triage", "summary": summarize(wf_a), "steps": wf_a}
    text = json.dumps(art, sort_keys=True)
    print("artifact keys:", sorted(art), "| bytes:", len(text), "| round trip equal:", json.loads(text) == art)
    print("the artifact carries the summary next to the steps it was computed from so a reader can recompute it; this lab builds it in memory and does not write outputs/workflow-evidence.json")


if __name__ == "__main__":
    main()
