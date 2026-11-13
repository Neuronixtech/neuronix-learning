"""Teaching implementation (our own): turning agent corrections into system improvements, Part 3 - control lifecycle states with checked transitions, ownership and review dates, effectiveness measured on a
made-up event log, retirement rules, rule accumulation and who may change a control. All events, dates and counts are ILLUSTRATIVE. No language model is used."""
import hashlib
import hmac
from datetime import date

KEY = b"lab-only-control-key"
ALLOWED = {"proposed": {"verified", "rejected"}, "verified": {"active", "rejected"}, "active": {"under_review", "retired"}, "under_review": {"active", "retired"}, "retired": set(), "rejected": set()}


class Control:
    def __init__(self, cid, cause, owner, review_by):
        self.cid, self.cause, self.owner, self.review_by, self.state, self.history = cid, cause, owner, review_by, "proposed", ["proposed"]

    def move(self, new, evidence=None):
        if new not in ALLOWED[self.state]:
            raise ValueError(f"Illegal transition {self.state} -> {new}")
        if new == "active" and not evidence:
            raise ValueError("Activation needs verification evidence")
        self.state = new
        self.history.append(new)


def overdue(controls, today):
    return sorted(c.cid for c in controls if c.state in ("active", "under_review") and date.fromisoformat(c.review_by) < today)


def effectiveness(events, control_start):
    before = [e for e in events if e["day"] < control_start]
    after = [e for e in events if e["day"] >= control_start]
    return len(before), len(after)


def can_retire(c, recent_events, replacement_active, today):
    reasons = []
    if recent_events:
        reasons.append("failure still occurring")
    if not replacement_active:
        reasons.append("no replacement protects the same cause")
    return (not reasons), reasons


def sign_change(cid, new_text, approver):
    return hmac.new(KEY, f"{cid}|{hashlib.sha256(new_text.encode()).hexdigest()}|{approver}".encode(), hashlib.sha256).hexdigest()


def apply_change(registry, cid, new_text, approver, sig):
    if not hmac.compare_digest(sign_change(cid, new_text, approver), sig):
        return False
    registry[cid] = new_text
    return True


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: lifecycle transitions are checked")
    c = Control("scope-readme", "off_scope_edit", "platform", "2027-02-01")
    for step in ("active", "verified", "active"):
        try:
            c.move(step, evidence=None if step == "active" and len(c.history) == 1 else "ran against known-bad case")
            print(f"-> {step:10} ok   history={c.history}")
        except ValueError as e:
            print(f"-> {step:10} refused: {e}")
    try:
        Control("x", "y", "z", "2027-01-01").move("retired")
    except ValueError as e:
        print("proposed -> retired refused:", e)
    print("a control cannot be activated before it was verified and activation needs evidence attached; the steps are explicit so that a control never becomes active by a comment in a chat")

    section("2. Genuinely running: ownership and review dates")
    cs = []
    for cid, owner, rb in (("a", "platform", "2026-12-01"), ("b", "", "2027-03-01"), ("c", "platform", "2026-10-01")):
        try:
            if not owner:
                raise ValueError(f"control {cid} has no owner")
            x = Control(cid, "cause", owner, rb)
            x.move("verified")
            x.move("active", evidence="e")
            cs.append(x)
        except ValueError as e:
            print("rejected:", e)
    print("overdue for review on 2026-11-13:", overdue(cs, date(2026, 11, 13)))
    print("a control with no owner never entered the registry, and the review query found the one whose date had passed; the dates are made up and the lab ran with a fixed 'today' so the answer repeats")

    section("3. Genuinely computing: effectiveness on a made-up event log (ILLUSTRATIVE)")
    events = [{"day": d} for d in (1, 3, 4, 8, 12, 15, 21, 24, 33, 41)]
    for start in (20, 30, 45):
        b, a = effectiveness(events, start)
        print(f"control starts day {start}: events before={b} after={a}")
    print("with the invented log, a control that began on day 20 saw 4 events after it, one on day 30 saw 2 and one on day 45 saw none (nothing had been left to prevent by then); the counts alone do not show the control worked, because the failure may simply have stopped being attempted, so the verification against a known-bad case in Part 2 is the evidence and the recurrence count is only the follow-up")

    section("4. Genuinely running: retirement needs more than silence")
    for label, recent, repl in (("no events, replacement active", [], True), ("no events, no replacement", [], False), ("events continue", [1, 2], True)):
        ok, why = can_retire(None, recent, repl, date(2026, 11, 13))
        print(f"{label:32} retire={ok!s:5} {why}")
    print("quiet is not enough: a control with no recent failures and nothing else protecting the cause is the control that is preventing them, so retirement needs a replacement and no live recurrence")

    section("5. Genuinely running: rule accumulation and unauthorised edits")
    n = 60
    print("illustrative: if each of", n, "active rules adds 2 seconds to a run, the added time is", n * 2, "seconds; every promoted control has a running cost, which is why review and retirement exist")
    reg = {"scope-readme": "allow app/registration"}
    print("edit with no approval record:", apply_change(reg, "scope-readme", "allow **", "agent", "forged"))
    good = sign_change("scope-readme", "allow app/registration app/docs", "owner-1")
    print("edit signed by an owner       :", apply_change(reg, "scope-readme", "allow app/registration app/docs", "owner-1", good))
    print("same signature, different text:", apply_change(reg, "scope-readme", "allow **", "owner-1", good))
    print("a control that an agent can quietly widen is not a control, so changes to the rule text carry a signed record bound to the exact new text; the key is a constant made up for this lab")


if __name__ == "__main__":
    main()
