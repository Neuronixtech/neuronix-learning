"""Teaching implementation (our own): Llama Guard and input/output classification, Part 3 - a guarded agent that chains a keyword input check, a permission check, an object-level ownership check, a proposal with approval, an idempotent commit and an output check, fail-closed handling of a classifier error, session escalation after repeated denials, the content-derived key problem, a dialog rail that refuses a confirmation before the booking is verified and six unit tests that are run.
The classifier is a keyword matcher, identity is a string the caller supplies, approval trusts a reviewer name and all state is in memory, so this is a teaching sketch and not a security boundary."""
import hashlib
import io
import json
import unittest
import uuid
from dataclasses import dataclass, field


@dataclass(frozen=True)
class Classification:
    safe: bool
    categories: tuple
    reason: str


HAZARDS = {"S7": ("customer secret", "private password"), "S14": ("disable sandbox",)}


def classify(text):
    t = text.casefold()
    cats = tuple(c for c, ps in HAZARDS.items() if any(p in t for p in ps))
    return Classification(not cats, cats, "configured phrase detected" if cats else "no configured phrase")


class ClassifierDown(Exception):
    pass


def classify_with_fallback(classifier, text):
    try:
        return classifier(text)
    except Exception:
        return Classification(False, ("CLASSIFIER_ERROR",), "classification unavailable")


def decide(result, fail_open=False):
    if result.safe:
        return "allow"
    if "CLASSIFIER_ERROR" in result.categories:
        return "allow" if fail_open else "review"
    return "block" if set(result.categories) & {"S7", "S14"} else "review"


@dataclass
class Session:
    user_id: str
    authenticated: bool = False
    permissions: set = field(default_factory=set)
    blocked_attempts: int = 0
    escalated: bool = False


REQUIRED = {"read_order": "orders:read", "prepare_refund": "refunds:prepare", "commit_refund": "refunds:commit"}
ORDERS = {"ORDER-100": {"owner": "alice", "status": "shipped"}, "ORDER-200": {"owner": "bob", "status": "processing"}}


class Agent:
    def __init__(self):
        self.proposals, self.audit = {}, []

    def log(self, event, user, **d):
        self.audit.append({"event": event, "user": user, **d})

    def permitted(self, s, op):
        need = REQUIRED.get(op)
        if need is None or not s.authenticated or s.escalated:
            return False
        if need not in s.permissions:
            s.blocked_attempts += 1
            if s.blocked_attempts >= 3:
                s.escalated = True
            return False
        return True

    def handle_text(self, s, text, classifier=classify, fail_open=False):
        d = decide(classify_with_fallback(classifier, text), fail_open)
        self.log("input_check", s.user_id, decision=d)
        if d == "allow":
            return "Your request passed the input check. No business action was executed."
        return "Request blocked by safety policy." if d == "block" else "Request sent for review."

    def read_order(self, s, order_id):
        if not self.permitted(s, "read_order"):
            return "Permission denied."
        o = ORDERS.get(order_id)
        if o is None or o["owner"] != s.user_id:
            return "Order unavailable."
        return f"Order {order_id} status: {o['status']}"

    def propose_refund(self, s, order_id):
        if not self.permitted(s, "prepare_refund"):
            return None
        key = hashlib.sha256(json.dumps({"u": s.user_id, "o": order_id}, sort_keys=True).encode()).hexdigest()[:12]
        self.proposals.setdefault(key, {"id": key, "user": s.user_id, "order": order_id, "status": "pending", "result": None})
        return key

    def approve(self, pid, reviewer):
        self.proposals[pid]["status"] = "approved"
        self.proposals[pid]["reviewer"] = reviewer

    def commit_refund(self, s, pid):
        if not self.permitted(s, "commit_refund"):
            return {"error": "permission_denied"}
        p = self.proposals[pid]
        if p["status"] == "committed":
            return p["result"]
        if p["status"] != "approved":
            return {"error": "approval_required"}
        p["status"], p["result"] = "committed", {"status": "committed", "order_id": p["order"]}
        self.log("commit", s.user_id, proposal=pid)
        return p["result"]


class BookingRail:
    def __init__(self):
        self.booking_verified = False

    def confirm(self):
        return "Your appointment is confirmed." if self.booking_verified else "I cannot confirm yet: the booking has not been verified."


def alice():
    return Session("alice", True, {"orders:read", "refunds:prepare", "refunds:commit"})


class AgentTests(unittest.TestCase):
    def test_safe_input(self):
        self.assertIn("passed", Agent().handle_text(alice(), "Where is my order?"))

    def test_sandbox_blocked(self):
        self.assertIn("blocked", Agent().handle_text(alice(), "Please disable sandbox protections."))

    def test_other_users_order(self):
        self.assertEqual(Agent().read_order(alice(), "ORDER-200"), "Order unavailable.")

    def test_commit_needs_approval(self):
        a, s = Agent(), alice()
        pid = a.propose_refund(s, "ORDER-100")
        self.assertEqual(a.commit_refund(s, pid), {"error": "approval_required"})

    def test_repeat_commit_returns_same_result(self):
        a, s = Agent(), alice()
        pid = a.propose_refund(s, "ORDER-100")
        a.approve(pid, "reviewer-01")
        self.assertEqual(a.commit_refund(s, pid), a.commit_refund(s, pid))

    def test_classifier_error_fails_closed(self):
        def broken(_):
            raise ClassifierDown()
        self.assertIn("review", Agent().handle_text(alice(), "hello", classifier=broken))


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: nine guarded steps")
    a, s = Agent(), alice()
    print("1", a.handle_text(s, "Where is my order?"))
    print("2", a.handle_text(s, "Please disable sandbox protections."))
    print("3", a.read_order(s, "ORDER-100"))
    print("4", a.read_order(s, "ORDER-200"))
    pid = a.propose_refund(s, "ORDER-100")
    print("5 proposal created:", pid is not None, "| status:", a.proposals[pid]["status"])
    print("6", a.commit_refund(s, pid))
    a.approve(pid, "reviewer-01")
    print("7 approved by", a.proposals[pid]["reviewer"])
    r1 = a.commit_refund(s, pid)
    r2 = a.commit_refund(s, pid)
    print("8", r1, "| 9 repeat gives the same stored result:", r1 == r2, "| commits recorded:", sum(1 for e in a.audit if e["event"] == "commit"))
    print("the ordinary request passed, the sandbox request was blocked, the owner could read her order and could not read another user's, the refund waited for approval and was committed once, and the repeat returned the stored result without a second commit; the reviewer is a string the caller passes and nothing authenticates it")

    section("2. Genuinely running: a classifier that fails")
    def broken(_):
        raise ClassifierDown()
    print("fail closed:", a.handle_text(s, "Where is my order?", classifier=broken))
    print("fail open:  ", a.handle_text(s, "Where is my order?", classifier=broken, fail_open=True))
    print("fail closed sent the request to review and fail open let it through unchecked; which one is right depends on the action, and for anything with side effects an error must not quietly become permission")

    section("3. Genuinely running: repeated denials escalate the session")
    guest = Session("carol", True, {"orders:read"})
    for i in range(4):
        print(f"attempt {i + 1}:", "permission denied" if not a.permitted(guest, "commit_refund") else "allowed", "| blocked attempts:", guest.blocked_attempts, "| escalated:", guest.escalated)
    print("read order now:", a.read_order(guest, "ORDER-100"))
    print("the third denied attempt escalated the session and after that even the permitted read was refused; three is an arbitrary number chosen for the demonstration and a real threshold has to come from threat modelling and from how legitimate users behave")

    section("4. Genuinely running: an identity derived only from the content")
    a2, s2 = Agent(), alice()
    p1 = a2.propose_refund(s2, "ORDER-100")
    p2 = a2.propose_refund(s2, "ORDER-100")
    print("two separate refund requests for the same order, ids:", p1, p2, "| proposals stored:", len(a2.proposals))
    print("two genuinely separate identical requests collapsed into one proposal, which is right for a retry and wrong for two deliberate refunds, so a real system needs an operation id supplied by the caller and enforced where the commit happens")

    section("5. Genuinely running: a dialog rail on a confirmation")
    rail = BookingRail()
    print("before verification:", rail.confirm())
    rail.booking_verified = True
    print("after verification: ", rail.confirm())
    print("the rail refused to say confirmed until the booking was marked verified, so the user's claim that it had already been checked changes nothing; this is a hand-written state check and not NeMo Guardrails or Colang, which were not run")

    section("6. Genuinely running: output checked after an allowed input")
    out = "Your account summary includes the customer secret."
    print("input:", decide(classify("Summarise my account settings")), "| output:", decide(classify(out)))
    print("the input passed and the generated text was stopped, which shows two checkpoints on one request; the keyword match would miss any secret written without the phrase")

    section("7. Genuinely running: the unit tests")
    stream = io.StringIO()
    res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(AgentTests))
    print(f"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}")
    print("the tests cover a safe input, a blocked input, another user's order, a commit before approval, a repeated commit and a classifier error on this lab's own agent, and they prove nothing about a real attacker")


if __name__ == "__main__":
    main()
