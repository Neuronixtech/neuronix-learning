"""Teaching implementation (our own): discovering the workflow people actually perform, Part 3 - exception branches that start at a named step, missing information versus a negative finding, workflow variants
and stakeholder disagreement, approval boundaries and a combined validation. The incident data is made up. No language model is used."""
NORMAL = {1: "receive alert", 2: "open dashboard", 3: "check deployment record", 4: "identify owner", 5: "prepare recommendation", 6: "obtain approval", 7: "execute action", 8: "verify outcome"}


def validate_branch(b):
    if b["from_step"] not in NORMAL:
        raise ValueError(f"Branch {b['id']} starts at unknown step {b['from_step']}")
    if not b.get("condition", "").strip():
        raise ValueError(f"Branch {b['id']} has no activating condition")
    if not b.get("evidence"):
        raise ValueError(f"Branch {b['id']} has no evidence")
    return b


def finding(record):
    if record is None:
        return "missing: not recorded (unknown)"
    if record is False:
        return "negative: checked and nothing was found"
    return f"found: {record}"


def merge_variants(reports):
    by = {}
    for who, answer in reports:
        by.setdefault(answer, []).append(who)
    return {"agreed": len(by) == 1, "variants": by}


def approval_steps(steps):
    return [k for k, v in steps.items() if "approval" in v or "execute" in v]


def combined(normal, branches):
    errors = []
    for b in branches:
        try:
            validate_branch(b)
        except ValueError as e:
            errors.append(str(e))
    return {"steps": len(normal), "branches": len(branches), "errors": errors}


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: exception branches attach to a step")
    branches = [{"id": "B1", "from_step": 3, "condition": "deployment record is missing", "evidence": ["interview A", "deploy log gap"]},
                {"id": "B2", "from_step": 4, "condition": "service owner is unavailable", "evidence": ["chat transcript"]},
                {"id": "B3", "from_step": 6, "condition": "remediation needs the incident commander", "evidence": ["interview B"]}]
    for b in branches:
        validate_branch(b)
        print(f"{b['id']} starts after step {b['from_step']} ({NORMAL[b['from_step']]}) when {b['condition']}")
    print("each branch names the step it leaves, the condition that activates it and its evidence, and the normal sequence stays one clean list; the branches are invented for the lab")

    section("2. Genuinely running: invalid branches are rejected")
    for label, b in (("unknown step", {"id": "X1", "from_step": 12, "condition": "c", "evidence": ["e"]}), ("no condition", {"id": "X2", "from_step": 3, "condition": " ", "evidence": ["e"]}), ("no evidence", {"id": "X3", "from_step": 3, "condition": "c", "evidence": []})):
        try:
            validate_branch(b)
            print(f"{label:14} accepted")
        except ValueError as e:
            print(f"{label:14} rejected: {e}")
    print("a branch that hangs off a step that does not exist, or that cannot say when it applies or why it is believed, would make the combined workflow impossible to follow")

    section("3. Genuinely running: missing information is not a negative finding")
    for label, rec in (("deployment record not exported", None), ("searched the log, no deployment in the window", False), ("deployment d-881 at 14:02", "d-881 at 14:02")):
        print(f"{label:46} -> {finding(rec)}")
    print("None and False look alike in a loose check, and the lab keeps them apart: not knowing whether a deployment happened and knowing that none happened lead to different next steps")
    print("a falsy test treats them the same:", [bool(x) for x in (None, False)])

    section("4. Genuinely running: stakeholders who disagree")
    print(merge_variants([("engineer A", "asks a colleague for the owner"), ("engineer B", "asks a colleague for the owner"), ("manager", "looks the owner up in the service catalogue")]))
    print(merge_variants([("engineer A", "waits for approval"), ("engineer B", "waits for approval")]))
    print("two answers about the owner step were kept side by side with who gave each, instead of being averaged or replaced by the manager's version; the disagreement is itself a finding, since the catalogue may exist and not be used")

    section("5. Genuinely running: approval boundaries and the combined check")
    print("steps that need approval or act on production:", approval_steps(NORMAL))
    print("combined report:", combined(NORMAL, branches))
    print("combined with a bad branch:", combined(NORMAL, branches + [{"id": "X1", "from_step": 12, "condition": "c", "evidence": ["e"]}]))
    print("steps 6 and 7 are marked because of the words approval and execute in their names, which is a keyword rule and would miss a step called 'confirm with commander'; the combined check reports every error at once and does not stop at the first")


if __name__ == "__main__":
    main()
