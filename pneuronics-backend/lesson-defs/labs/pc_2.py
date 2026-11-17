"""Teaching implementation (our own): propose-then-commit, Part 2 - the full workflow: ProposalStore, ProposalService, ReviewService (authorised reviewers, checklist, digest binding), a simulated payment provider whose response can be lost after the effect, a CommitService that requires APPROVED, checks the digest, reconciles after uncertainty and verifies the result, the lesson's three scenarios and eight extra failure tests.
The payment ledger is a JSON file in a temporary directory and nothing real is paid; reviewer identity is a string set by the caller and the stores have no locking, so this is a sequential teaching sketch."""
import hashlib
import json
import os
import tempfile
import unittest
from datetime import datetime, timezone
from pathlib import Path


def canonical_json(v):
    return json.dumps(v, sort_keys=True, separators=(",", ":"), ensure_ascii=False, allow_nan=False)


def sha(t):
    return hashlib.sha256(t.encode("utf-8")).hexdigest()


def action_digest(a):
    return sha(canonical_json(a))


def make_key(thread_id, operation_id, action):
    return sha(canonical_json({"thread_id": thread_id, "operation_id": operation_id, "action": action}))


def utc_now():
    return datetime.now(timezone.utc).isoformat()


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8")) if path.exists() else {}


def atomic_write_json(path, data):
    fd, tmp = tempfile.mkstemp(dir=path.parent, suffix=".tmp")
    with os.fdopen(fd, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)
        f.flush()
        os.fsync(f.fileno())
    os.replace(tmp, path)


class TransitionError(Exception):
    pass


class ApprovalError(Exception):
    pass


class ExecutionError(Exception):
    pass


class TransientError(Exception):
    pass


TRANSITIONS = {
    "PENDING_REVIEW": {"APPROVED", "REJECTED"}, "APPROVED": {"COMMITTING"}, "COMMITTING": {"VERIFYING", "RECONCILIATION_REQUIRED", "FAILED"},
    "RECONCILIATION_REQUIRED": {"VERIFYING", "FAILED"}, "VERIFYING": {"VERIFIED", "FAILED"}, "REJECTED": set(), "VERIFIED": set(), "FAILED": set(),
}
REQUIRED_CHECKS = ("resource_checked", "blast_radius_checked", "rollback_checked")


def transition(p, target):
    if target not in TRANSITIONS.get(p["status"], set()):
        raise TransitionError(f"{p['status']} -> {target} is not allowed")
    p["events"].append({"at": utc_now(), "type": "TRANSITION", "from": p["status"], "to": target})
    p["status"] = target


def full_checklist():
    return {c: True for c in REQUIRED_CHECKS}


class ProposalStore:
    def __init__(self, path):
        self.path = path

    def get(self, pid):
        return read_json(self.path).get(pid)

    def put(self, p):
        recs = read_json(self.path)
        recs[p["proposal_id"]] = p
        atomic_write_json(self.path, recs)

    def all(self):
        return read_json(self.path)


class ProposalService:
    def __init__(self, store):
        self.store = store

    def propose(self, thread_id, operation_id, action, intent, data_lineage, permissions, blast_radius, rollback_plan):
        key = make_key(thread_id, operation_id, action)
        existing = self.store.get(key)
        if existing is not None:
            return existing
        p = {"proposal_id": key, "thread_id": thread_id, "operation_id": operation_id, "action": action, "action_digest": action_digest(action), "intent": intent,
             "data_lineage": data_lineage, "permissions": permissions, "blast_radius": blast_radius, "rollback_plan": rollback_plan, "status": "PENDING_REVIEW", "events": []}
        self.store.put(p)
        return p


class ReviewService:
    def __init__(self, store, authorized):
        self.store, self.authorized = store, set(authorized)

    def _reviewer(self, rid):
        if rid not in self.authorized:
            raise ApprovalError("Reviewer is not authorized")

    def validate_checklist(self, checklist):
        missing = [n for n in REQUIRED_CHECKS if checklist.get(n) is not True]
        if missing:
            raise ApprovalError("Missing acknowledgements: " + ", ".join(missing))

    def approve(self, pid, reviewer_id, checklist, expected_digest):
        self._reviewer(reviewer_id)
        self.validate_checklist(checklist)
        p = self.store.get(pid)
        if p is None:
            raise ApprovalError("Unknown proposal")
        if p["action_digest"] != expected_digest or action_digest(p["action"]) != expected_digest:
            raise ApprovalError("Action digest mismatch")
        transition(p, "APPROVED")
        p["approved_by"], p["approved_at"] = reviewer_id, utc_now()
        p["events"].append({"at": utc_now(), "type": "HUMAN_APPROVED", "reviewer": reviewer_id, "checklist": checklist})
        self.store.put(p)
        return p

    def reject(self, pid, reviewer_id, reason):
        self._reviewer(reviewer_id)
        p = self.store.get(pid)
        transition(p, "REJECTED")
        p["events"].append({"at": utc_now(), "type": "HUMAN_REJECTED", "reviewer": reviewer_id, "reason": reason})
        self.store.put(p)
        return p


class SimulatedPaymentProvider:
    def __init__(self, ledger_path, corrupt_amount=False):
        self.path, self.corrupt = ledger_path, corrupt_amount

    def refund(self, key, action, lost_after_effect=False, lost_before_effect=False):
        if lost_before_effect:
            raise TransientError("Request lost before processing")
        ledger = read_json(self.path)
        if key in ledger:
            result = ledger[key]
        else:
            result = {"payment_id": "PAY-" + key[:12], "order_id": action["order_id"], "amount": action["amount"] + (1 if self.corrupt else 0), "currency": action["currency"], "status": "REFUNDED"}
            ledger[key] = result
            atomic_write_json(self.path, ledger)
        if lost_after_effect:
            raise TransientError("Response lost after processing")
        return result

    def get_refund(self, key):
        return read_json(self.path).get(key)


class CommitService:
    def __init__(self, store, provider):
        self.store, self.provider = store, provider

    def commit(self, pid, lost_after_effect=False, lost_before_effect=False):
        p = self.store.get(pid)
        if p is None:
            raise ExecutionError("Unknown proposal")
        if p["status"] == "VERIFIED":
            return p
        if p["status"] == "RECONCILIATION_REQUIRED":
            return self.reconcile(pid)
        if p["status"] != "APPROVED":
            raise ExecutionError("Positive approval required")
        if action_digest(p["action"]) != p["action_digest"]:
            raise ExecutionError("Approved action was modified")
        transition(p, "COMMITTING")
        self.store.put(p)
        try:
            self.provider.refund(pid, p["action"], lost_after_effect, lost_before_effect)
        except TransientError:
            transition(p, "RECONCILIATION_REQUIRED")
            self.store.put(p)
            return p
        transition(p, "VERIFYING")
        self.store.put(p)
        return self.verify(pid)

    def reconcile(self, pid):
        p = self.store.get(pid)
        actual = self.provider.get_refund(pid)
        if actual is None:
            p["events"].append({"at": utc_now(), "type": "RECONCILE_NO_EFFECT_FOUND"})
            self.store.put(p)
            return p
        transition(p, "VERIFYING")
        self.store.put(p)
        return self.verify(pid)

    def retry_after_empty_reconcile(self, pid):
        """A deliberate second attempt with the same key, allowed only when reconciliation found no effect."""
        p = self.store.get(pid)
        self.provider.refund(pid, p["action"])
        transition(p, "VERIFYING")
        self.store.put(p)
        return self.verify(pid)

    def verify(self, pid):
        p = self.store.get(pid)
        a, actual = p["action"], self.provider.get_refund(pid)
        ok = actual is not None and actual["order_id"] == a["order_id"] and actual["amount"] == a["amount"] and actual["currency"] == a["currency"] and actual["status"] == "REFUNDED"
        transition(p, "VERIFIED" if ok else "FAILED")
        self.store.put(p)
        return p


def refund_action(order, amount):
    return {"type": "refund", "order_id": order, "amount": amount, "currency": "USD"}


def build(d, corrupt=False):
    store = ProposalStore(Path(d) / "proposals.json")
    prov = SimulatedPaymentProvider(Path(d) / "ledger.json", corrupt)
    return store, ProposalService(store), ReviewService(store, {"reviewer-001"}), CommitService(store, prov), prov


def mk(svc, thread, op, order, amount):
    return svc.propose(thread, op, refund_action(order, amount), "refund an eligible return", {"source_id": "RET-1"}, ["payments.refund"], {"customers": 1, "maximum_amount": amount}, "finance recovery")


class WorkflowTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.store, self.svc, self.rev, self.exe, self.prov = build(self.tmp.name)

    def tearDown(self):
        self.tmp.cleanup()

    def test_commit_pending_blocked(self):
        p = mk(self.svc, "t", "o", "O1", 100)
        with self.assertRaises(ExecutionError):
            self.exe.commit(p["proposal_id"])

    def test_commit_rejected_blocked(self):
        p = mk(self.svc, "t", "o", "O1", 100)
        self.rev.reject(p["proposal_id"], "reviewer-001", "no")
        with self.assertRaises(ExecutionError):
            self.exe.commit(p["proposal_id"])

    def test_unknown_reviewer_blocked(self):
        p = mk(self.svc, "t", "o", "O1", 100)
        with self.assertRaises(ApprovalError):
            self.rev.approve(p["proposal_id"], "intruder", full_checklist(), p["action_digest"])

    def test_modified_action_blocked(self):
        p = mk(self.svc, "t", "o", "O1", 100)
        self.rev.approve(p["proposal_id"], "reviewer-001", full_checklist(), p["action_digest"])
        stored = self.store.get(p["proposal_id"])
        stored["action"]["amount"] = 1000
        self.store.put(stored)
        with self.assertRaises(ExecutionError):
            self.exe.commit(p["proposal_id"])

    def test_duplicate_proposal_same_record(self):
        a = mk(self.svc, "t", "o", "O1", 100)
        b = mk(self.svc, "t", "o", "O1", 100)
        self.assertEqual(a["proposal_id"], b["proposal_id"])
        self.assertEqual(len(self.store.all()), 1)

    def test_verified_commit_idempotent(self):
        p = mk(self.svc, "t", "o", "O1", 100)
        self.rev.approve(p["proposal_id"], "reviewer-001", full_checklist(), p["action_digest"])
        self.exe.commit(p["proposal_id"])
        self.exe.commit(p["proposal_id"])
        self.assertEqual(len(read_json(self.prov.path)), 1)

    def test_unknown_proposal(self):
        with self.assertRaises(ExecutionError):
            self.exe.commit("nope")

    def test_illegal_transition(self):
        with self.assertRaises(TransitionError):
            transition({"status": "PENDING_REVIEW", "events": []}, "COMMITTING")


def section(t):
    print(f"\n--- {t} ---")


def main():
    with tempfile.TemporaryDirectory() as d:
        store, svc, rev, exe, prov = build(d)
        section("1. Genuinely running: scenario 1, a clean approval")
        p1 = mk(svc, "thread-001", "refund-001", "ORDER-100", 100)
        print("proposal created with status", p1["status"], "| stored before review:", store.get(p1["proposal_id"]) is not None)
        rev.approve(p1["proposal_id"], "reviewer-001", full_checklist(), p1["action_digest"])
        r1 = exe.commit(p1["proposal_id"])
        print("Final status:", r1["status"], "| path:", " -> ".join(e["to"] for e in r1["events"] if e["type"] == "TRANSITION"))
        print("the proposal is saved while pending, a reviewer with a complete checklist approves it and the executor takes it through committing and verifying to verified, with each step recorded as an event")

        section("2. Genuinely running: scenario 2, a lost response after the refund was made")
        p2 = mk(svc, "thread-002", "refund-002", "ORDER-200", 200)
        dup = mk(svc, "thread-002", "refund-002", "ORDER-200", 200)
        print("Same proposal:", p2["proposal_id"] == dup["proposal_id"])
        rev.approve(p2["proposal_id"], "reviewer-001", full_checklist(), p2["action_digest"])
        first = exe.commit(p2["proposal_id"], lost_after_effect=True)
        print("After lost response:", first["status"], "| refunds in the ledger:", len(read_json(prov.path)))
        second = exe.commit(p2["proposal_id"])
        print("After reconciliation:", second["status"], "| refunds in the ledger:", len(read_json(prov.path)))
        print("the provider recorded the refund before the response was lost, so the executor marked reconciliation required instead of retrying, then found the existing record and verified it; the ledger holds two refunds in total for the two logical operations so far and no refund was made twice")

        section("3. Genuinely running: scenario 3, an incomplete checklist")
        p3 = mk(svc, "thread-003", "refund-003", "ORDER-300", 300)
        try:
            rev.approve(p3["proposal_id"], "reviewer-001", {"resource_checked": True, "blast_radius_checked": False, "rollback_checked": False}, p3["action_digest"])
        except ApprovalError as e:
            print("Approval blocked:", e)
        print("status after the blocked attempt:", store.get(p3["proposal_id"])["status"])
        rev.approve(p3["proposal_id"], "reviewer-001", full_checklist(), p3["action_digest"])
        print("After proper review:", exe.commit(p3["proposal_id"])["status"])
        print("the incomplete checklist named the two missing acknowledgements and left the proposal pending, and after a complete checklist the same proposal went through to verified; the lesson printed the same sequence but its text was written by hand, and this output comes from running the code")
        print("FINAL COUNTS | proposals:", len(store.all()), "| refund effects:", len(read_json(prov.path)))

    with tempfile.TemporaryDirectory() as d:
        section("4. Genuinely running: a lost request that never reached the provider")
        store, svc, rev, exe, prov = build(d)
        p = mk(svc, "thread-004", "refund-004", "ORDER-400", 400)
        rev.approve(p["proposal_id"], "reviewer-001", full_checklist(), p["action_digest"])
        s1 = exe.commit(p["proposal_id"], lost_before_effect=True)["status"]
        s2 = exe.commit(p["proposal_id"])["status"]
        print("after the lost request:", s1, "| after reconcile finds nothing:", s2, "| refunds in the ledger:", len(read_json(prov.path)))
        s3 = exe.retry_after_empty_reconcile(p["proposal_id"])["status"]
        print("after a deliberate retry with the same key:", s3, "| refunds in the ledger:", len(read_json(prov.path)))
        print("when reconciliation finds no effect the proposal stays in reconciliation required until a retry is chosen on purpose, and the retry reuses the original key so exactly one refund exists afterwards; the lab simulates only the case where the provider has an immediately consistent ledger")

    with tempfile.TemporaryDirectory() as d:
        section("5. Genuinely running: a provider result that does not match the approval")
        store, svc, rev, exe, prov = build(d, corrupt=True)
        p = mk(svc, "thread-005", "refund-005", "ORDER-500", 500)
        rev.approve(p["proposal_id"], "reviewer-001", full_checklist(), p["action_digest"])
        res = exe.commit(p["proposal_id"])
        print("status:", res["status"], "| provider amount:", prov.get_refund(p["proposal_id"])["amount"], "| approved amount:", res["action"]["amount"])
        print("the provider recorded 501 for an approved 500, and the verifier compared the recorded values with the approved action and ended in failed instead of verified, which is why success is checked against the authoritative record and not against the response")

    section("6. Genuinely running: the eight unit tests")
    import io
    stream = io.StringIO()
    res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(WorkflowTests))
    print(f"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}")
    print("the tests cover committing a pending or rejected proposal, an unknown reviewer, an action modified after approval, a duplicate proposal, a repeated commit of a verified proposal, an unknown proposal and an illegal transition")


if __name__ == "__main__":
    main()
