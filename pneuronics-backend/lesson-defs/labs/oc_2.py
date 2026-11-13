"""Teaching implementation (our own): defining the outcome before choosing the output, Part 2 - observability of the outcome wording, constraints treated as invariants a plan can violate, non-goal scope checks,
errors versus warnings and a JSON artifact that round-trips. Frames and plans are made up. No language model is used."""
import json
import re

VAGUE = ("improve", "better", "enhance", "optimise", "optimize", "streamline", "boost", "faster", "easier")
UNIT = r"(second|seconds|minute|minutes|hour|hours|percent|%|click|clicks|call|calls)"


def observable(text):
    t = text.lower()
    has_number = bool(re.search(r"\b(\d+(\.\d+)?|one|two|three|five|ten)\b\s*" + UNIT, t))
    vague = [w for w in VAGUE if re.search(r"\b" + w + r"\b", t)]
    return {"measurable": has_number, "vague_words": vague}


def check_plan_against_constraints(plan_steps, constraints):
    violations = []
    for step in plan_steps:
        s = step.lower()
        for c in constraints:
            if c == "read-only" and re.search(r"\b(restart|delete|write|modify|deploy|rollback)\b", s):
                violations.append((step, c))
            if c == "no new database" and re.search(r"\bnew (database|datastore|vector database)\b", s):
                violations.append((step, c))
    return violations


def check_scope(work, non_goals):
    w = work.lower()
    return [n for n in non_goals if n.lower() in w]


def build_report(frame):
    errors, warnings = [], []
    if not frame["desired_outcome"].strip():
        errors.append("desired_outcome is required")
    else:
        o = observable(frame["desired_outcome"])
        if not o["measurable"]:
            warnings.append("desired_outcome has no number and unit")
        if o["vague_words"]:
            warnings.append("vague wording: " + ", ".join(o["vague_words"]))
    if not frame["non_goals"]:
        errors.append("non_goals needs at least one entry")
    return {"status": "rejected" if errors else ("accepted_with_warnings" if warnings else "accepted"), "errors": errors, "warnings": warnings}


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely measuring: can the outcome be observed")
    for t in ("Improve engineering productivity", "Make triage faster and easier", "Identify the failing service within two minutes", "Cut unsuccessful searches by 30 percent", "Patients find an appointment without calling reception"):
        print(f"{t:56} {observable(t)}")
    print("the first two have no number and use vague words, the next two carry a number and a unit, and the last is a real outcome that the check marks as not measurable because it has no number and unit; the check looks at wording and cannot tell whether a count is the right measure, so a human still decides")

    section("2. Genuinely running: constraints as invariants a plan can break")
    plan = ["Read the alert and the matching runbook", "Restart the failing service automatically", "Show the owner and the last deploy", "Create a new vector database of past incidents"]
    for step, c in check_plan_against_constraints(plan, ["read-only", "no new database"]):
        print(f"violates {c!r:18}: {step}")
    print("three steps were flagged: restart really breaks read-only and the new vector database really breaks no-new-database, but Show the owner and the last deploy is read-only and was flagged because the word deploy is on the keyword list, which is a false positive; and a constraint written as a sentence in a document is not checked by anything, while the same words as a rule over plan steps are, even if the rule is crude, since a step phrased as bounce the service passes it, shown next")
    print("a step worded differently:", check_plan_against_constraints(["Bounce the failing service"], ["read-only"]))

    section("3. Genuinely running: non-goals stop scope growing")
    ng = ["automatic remediation", "new alert routing", "historical analytics"]
    for w in ("Add historical analytics for alert volume", "Show the owner of the failing service", "Build automatic remediation for disk-full alerts"):
        print(f"{w:52} hits non-goals: {check_scope(w, ng)}")
    print("proposed work that names an excluded item is caught by comparing text against the non-goals, which is why they have to be written as specific phrases and not as 'anything extra'")

    section("4. Genuinely running: errors reject, warnings inform")
    for label, fr in (("clear frame", {"desired_outcome": "Identify the failing service within two minutes", "non_goals": ["remediation"]}), ("vague frame", {"desired_outcome": "Improve triage", "non_goals": ["remediation"]}),
                      ("no non-goals", {"desired_outcome": "Identify the failing service within two minutes", "non_goals": []}), ("empty outcome", {"desired_outcome": "", "non_goals": ["x"]})):
        print(f"{label:14} {build_report(fr)}")
    print("a missing required piece is an error and stops the frame, while vague wording is only a warning because a team may have a reason to proceed; separating the two keeps the report useful without making every comment a blocker")

    section("5. Genuinely running: the artifact round-trips through JSON")
    frame = {"user": "on-call engineer", "desired_outcome": "Identify the failing service within two minutes", "constraints": ["read-only"], "non_goals": ["remediation"]}
    text = json.dumps({"frame": frame, "report": build_report(frame)}, indent=2, sort_keys=True)
    back = json.loads(text)
    print("lines in artifact:", len(text.splitlines()), "| round trip equal:", back["frame"] == frame, "| status:", back["report"]["status"])
    print("the artifact keeps the frame and its validation report together so a later planning stage reads the same fields the validator checked; the file here is built in memory and not written to disk")


if __name__ == "__main__":
    main()
