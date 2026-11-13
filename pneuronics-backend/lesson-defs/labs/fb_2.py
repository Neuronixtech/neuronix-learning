"""Teaching implementation (our own): building a feedback ratchet with ownership and retirement, Part 2 - owned actions that carry a verification requirement, a review date and a retirement condition, validation
that refuses an action missing any of them, evidence types where a simulation cannot verify a real failure, and a JSON backlog. The actions and dates are made up. No language model is used."""
import json
from datetime import date

TODAY = date(2026, 11, 14)
EVIDENCE = ("observation", "reported", "inference", "simulation")


def make_action(signal, layer, owner, verify, review_by, retire_when):
    return {"signal": signal, "layer": layer, "owner": owner, "verify": verify, "review_by": review_by, "retire_when": retire_when}


def validate_action(a):
    errors = []
    for k in ("owner", "verify", "review_by", "retire_when"):
        if not a.get(k):
            errors.append(f"{k} is required")
    if a.get("review_by"):
        try:
            if date.fromisoformat(a["review_by"]) <= TODAY:
                errors.append("review_by must be in the future")
        except ValueError:
            errors.append("review_by is not a date")
    return errors


def can_verify(evidence_kind, claim_about_real_world):
    if claim_about_real_world:
        return evidence_kind in ("observation",)
    return evidence_kind in ("observation", "simulation")


def backlog(actions):
    return sorted(actions, key=lambda a: (a["review_by"], a["signal"]))


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: an owned action carries an owner, a verification, a review date and a retirement condition")
    a = make_action("S002", "scope_policy", "platform", "run the scope check against the last 20 agent diffs", "2027-01-15", "no scope violations for 90 days and the permission boundary replaces it")
    for k, v in a.items():
        print(f"{k:12} {v}")
    print("validation errors:", validate_action(a))
    print("an action without an owner, a way to verify it, a review date and a condition for retiring it is a wish; the dates here are invented and the lab fixes today at 2026-11-14")

    section("2. Genuinely running: incomplete actions are refused")
    for label, kw in (("no owner", dict(owner="")), ("no verification", dict(verify="")), ("no retirement condition", dict(retire_when="")), ("review date in the past", dict(review_by="2026-10-01")), ("bad date", dict(review_by="next month"))):
        base = dict(signal="S9", layer="x", owner="o", verify="v", review_by="2027-01-01", retire_when="r")
        base.update(kw)
        print(f"{label:24} {validate_action(make_action(**base))}")
    print("each missing or malformed field produced its own error and a past review date was refused, so a backlog cannot fill with actions nobody will ever revisit")

    section("3. Genuinely running: what kind of evidence can verify what")
    for kind in EVIDENCE:
        print(f"{kind:11} can verify a real-world failure is fixed: {can_verify(kind, True)!s:5} | can verify a code-path claim: {can_verify(kind, False)}")
    print("a simulation can show a code path behaves, and it cannot show that a real user's failure is gone, and a report or an inference is a lead and not a verification; the table is the lab's own policy")

    section("4. Genuinely running: a review-date ordered backlog")
    acts = [make_action("S003", "schema_validator", "api-team", "contract test", "2027-02-01", "schema generated"), make_action("S004", "runtime_limits", "sre", "timeout drill", "2026-12-01", "limit enforced by platform"), a]
    for x in backlog(acts):
        print(x["review_by"], x["signal"], x["owner"], "| due in", (date.fromisoformat(x["review_by"]) - TODAY).days, "days")
    print("the backlog sorts by review date so the next control to revisit is at the top; the sort does not weigh priority, which is a separate score from Part 1")

    section("5. Genuinely running: the JSON backlog")
    text = json.dumps({"generated": TODAY.isoformat(), "actions": backlog(acts)}, sort_keys=True)
    back = json.loads(text)
    print("actions:", len(back["actions"]), "| every action valid:", all(not validate_action(x) for x in back["actions"]), "| bytes:", len(text))
    print("the backlog is built in memory and round-trips through JSON, and the lab does not write outputs/feedback-backlog.json")


if __name__ == "__main__":
    main()
