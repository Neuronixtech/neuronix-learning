"""Teaching implementation (our own): CAIS, CAISI and societal-scale risk, Part 2 - a governance gate that maps flagged risk categories to required controls, checks control records, requires a human approval bound to the exact deployment, and reports one of four statuses that never says safe: a structural control check against one backed by an evidence store and a roster, approval binding to a deployment digest, expiry on a simulated clock, separation of duties, the status counts over every combination of three conditions and thirteen unit tests that are run.
The control mapping is a teaching policy and not an official CAIS, CAISI or statutory control matrix; reviewers, evidence and the clock are strings and numbers written by the lab, and the program never deploys anything or decides compliance with any law.
"""
import hashlib
import io
import itertools
import json
import re
import unittest
from collections import Counter

RISK_RULES = {
    "malicious_use": {"indicators": ["attacker misuse", "unauthorized disclosure", "malicious exploitation"], "controls": ["access_controls", "adversarial_testing"]},
    "ai_races": {"indicators": ["competitive pressure", "rushed deployment", "accelerated launch"], "controls": ["external_audit", "human_approval"]},
    "organizational_risks": {"indicators": ["missing audit", "incomplete security review", "unresolved safety finding"], "controls": ["external_audit", "incident_response"]},
    "rogue_ais": {"indicators": ["evade shutdown", "bypass human approval", "unauthorized self-modification"], "controls": ["kill_switch", "human_approval", "runtime_monitoring"]},
}


def digest(v):
    return hashlib.sha256(json.dumps(v, sort_keys=True, separators=(",", ":")).encode()).hexdigest()


def classify_risks(description):
    text = re.sub(r"\s+", " ", description.casefold())
    return [{"category": c, "indicators": [i for i in r["indicators"] if re.search(r"(?<!\w)" + re.escape(i) + r"(?!\w)", text)]} for c, r in RISK_RULES.items()
            if any(re.search(r"(?<!\w)" + re.escape(i) + r"(?!\w)", text) for i in r["indicators"])]


def collect_required_controls(findings):
    req = set()
    for f in findings:
        req.update(RISK_RULES[f["category"]]["controls"])
    return sorted(req)


def verify_control(rec, control_id):
    return (isinstance(rec, dict) and rec.get("control_id") == control_id and rec.get("status") == "verified"
            and bool(rec.get("evidence_id")) and bool(rec.get("reviewer_id")))


def verify_control_backed(rec, control_id, evidence_store, roster):
    if not verify_control(rec, control_id):
        return False
    ev = evidence_store.get(rec["evidence_id"])
    return ev is not None and ev["control_id"] == control_id and rec["reviewer_id"] in roster and ev["author"] != rec["reviewer_id"]


def evaluate_controls(required, records, checker=verify_control):
    ok = {c: checker(records.get(c), c) for c in required}
    return ok, [c for c, v in ok.items() if not v]


def validate_approval(approval, deployment, now=None, requester=None):
    if not approval or approval.get("decision") != "approved" or not approval.get("approver_id"):
        return False, "no approval"
    if approval.get("deployment_id") != deployment["deployment_id"]:
        return False, "approval is for another deployment"
    if approval.get("deployment_digest") != digest(deployment):
        return False, "deployment changed after approval"
    if approval.get("expires_at") is not None and now is not None and now >= approval["expires_at"]:
        return False, "approval expired"
    if requester is not None and approval["approver_id"] == requester:
        return False, "requester approved their own deployment"
    return True, "valid"


def assess(deployment, records, approval, checker=verify_control, now=None):
    findings = classify_risks(deployment["description"])
    required = collect_required_controls(findings)
    if not findings:
        status, missing = "MANUAL_REVIEW_REQUIRED", []
    else:
        _, missing = evaluate_controls(required, records, checker)
        if missing:
            status = "BLOCKED_MISSING_CONTROLS"
        elif not validate_approval(approval, deployment, now, deployment.get("requester"))[0]:
            status = "AWAITING_HUMAN_APPROVAL"
        else:
            status = "GOVERNANCE_CHECKS_SATISFIED"
    return {"status": status, "flagged": [f["category"] for f in findings], "required": required, "missing": missing}


def rec(cid, evidence="evidence-" + "x", reviewer="independent-reviewer"):
    return {"control_id": cid, "status": "verified", "evidence_id": f"evidence-{cid}", "reviewer_id": reviewer}


DEP = {"deployment_id": "agent-release-001", "name": "Enterprise Autonomous Agent", "requester": "team-lead",
       "description": "Competitive pressure caused a rushed deployment with a missing audit."}


def approval_for(dep, approver="reviewer-9", expires=None):
    return {"deployment_id": dep["deployment_id"], "deployment_digest": digest(dep), "decision": "approved", "approver_id": approver, "expires_at": expires}


ALL3 = {c: rec(c) for c in ("external_audit", "human_approval", "incident_response")}


class Tests(unittest.TestCase):
    def test_malicious_use(self):
        self.assertEqual([f["category"] for f in classify_risks("The system faces attacker misuse.")], ["malicious_use"])

    def test_required_controls_sorted_unique(self):
        f = classify_risks("competitive pressure and a missing audit")
        self.assertEqual(collect_required_controls(f), ["external_audit", "human_approval", "incident_response"])

    def test_structural_pass(self):
        self.assertTrue(verify_control(rec("external_audit"), "external_audit"))

    def test_wrong_control_id_fails(self):
        self.assertFalse(verify_control(rec("kill_switch"), "external_audit"))

    def test_missing_evidence_fails(self):
        r = rec("external_audit")
        r["evidence_id"] = ""
        self.assertFalse(verify_control(r, "external_audit"))

    def test_missing_control_blocks_even_with_approval(self):
        recs = {k: v for k, v in ALL3.items() if k != "external_audit"}
        self.assertEqual(assess(DEP, recs, approval_for(DEP))["status"], "BLOCKED_MISSING_CONTROLS")

    def test_no_approval_waits(self):
        self.assertEqual(assess(DEP, ALL3, None)["status"], "AWAITING_HUMAN_APPROVAL")

    def test_all_checks_satisfied(self):
        self.assertEqual(assess(DEP, ALL3, approval_for(DEP))["status"], "GOVERNANCE_CHECKS_SATISFIED")

    def test_no_indicators_is_manual_review(self):
        d = dict(DEP, description="Routine update")
        self.assertEqual(assess(d, {}, approval_for(d))["status"], "MANUAL_REVIEW_REQUIRED")

    def test_changed_deployment_invalidates_approval(self):
        ap = approval_for(DEP)
        changed = dict(DEP, name="Another name")
        self.assertFalse(validate_approval(ap, changed)[0])

    def test_wrong_deployment_id(self):
        ap = dict(approval_for(DEP), deployment_id="other")
        self.assertFalse(validate_approval(ap, DEP)[0])

    def test_self_approval_rejected(self):
        self.assertFalse(validate_approval(approval_for(DEP, approver="team-lead"), DEP, requester="team-lead")[0])

    def test_expired(self):
        self.assertFalse(validate_approval(approval_for(DEP, expires=100), DEP, now=100)[0])


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: the lesson example with the audit control missing")
    r = assess(DEP, {"human_approval": rec("human_approval"), "incident_response": rec("incident_response")}, None)
    print(json.dumps(r, indent=1))
    print("the description flagged AI races and organisational risks, the three required controls were the union of both lists with the shared external audit counted once, and the missing audit blocked the gate; the lesson's status was written by hand and this one comes from running the code")

    section("2. Genuinely running: how the status moves")
    print("all three controls, no approval:", assess(DEP, ALL3, None)["status"])
    print("all three controls, approved:   ", assess(DEP, ALL3, approval_for(DEP))["status"])
    recs = {k: v for k, v in ALL3.items() if k != "incident_response"}
    print("one control missing, approved:  ", assess(DEP, recs, approval_for(DEP))["status"])
    print("the status moved from awaiting approval to satisfied only when every control record and the approval were present, and an approval did not make up for a missing control; GOVERNANCE_CHECKS_SATISFIED is deliberately not called safe")

    section("3. Genuinely running: a record that is well formed but made up")
    fake = {c: {"control_id": c, "status": "verified", "evidence_id": "evidence-999", "reviewer_id": "reviewer-07"} for c in ("external_audit", "human_approval", "incident_response")}
    print("structural check:", assess(DEP, fake, approval_for(DEP))["status"])
    store = {f"evidence-{c}": {"control_id": c, "author": "builder-1"} for c in ALL3}
    roster = {"independent-reviewer"}
    print("backed by an evidence store and a roster:", assess(DEP, fake, approval_for(DEP), checker=lambda rr, c: verify_control_backed(rr, c, store, roster))["status"])
    print("genuine records, same backed check:", assess(DEP, ALL3, approval_for(DEP), checker=lambda rr, c: verify_control_backed(rr, c, store, roster))["status"])
    store["evidence-external_audit"]["author"] = "independent-reviewer"
    print("the reviewer wrote the evidence:", assess(DEP, ALL3, approval_for(DEP), checker=lambda rr, c: verify_control_backed(rr, c, store, roster))["status"])
    print("records pointing at evidence-999 and reviewer-07 passed the structural check, failed once the evidence and the reviewer had to exist, and a reviewer who wrote the evidence was refused; an evidence store and a roster in the same process are still only simulated and a real one is authenticated and kept elsewhere")

    section("4. Genuinely running: an approval is bound to one exact deployment")
    ap = approval_for(DEP, expires=100)
    print("as approved:", validate_approval(ap, DEP, now=50))
    print("description edited afterwards:", validate_approval(ap, dict(DEP, description=DEP["description"] + " Plus production access."), now=50))
    print("another deployment id:", validate_approval(dict(ap, deployment_id="agent-release-002"), DEP, now=50))
    print("at the expiry time:", validate_approval(ap, DEP, now=100))
    print("approver is the requester:", validate_approval(approval_for(DEP, approver="team-lead"), DEP, now=50, requester="team-lead"))
    print("every change to the deployment, its identity, the clock or the approver invalidated the approval, which prevents a team from approving one thing and shipping another; the clock is a number the lab chooses and the names are strings")

    section("5. Genuinely running: no indicator is not a pass")
    quiet = dict(DEP, description="Routine update of the support portal.")
    print(assess(quiet, {}, approval_for(quiet)))
    print("a description with no indicator went to manual review even with an approval attached, because nothing matched does not mean nothing applies")

    section("6. Genuinely counting: every combination of three conditions")
    counts = Counter()
    for has_ind, ctl, appr in itertools.product((True, False), (True, False), (True, False)):
        d = DEP if has_ind else dict(DEP, description="Routine update")
        counts[assess(d, ALL3 if ctl else {}, approval_for(d) if appr else None)["status"]] += 1
    print(dict(counts))
    print("of the eight combinations of indicator, controls and approval only one reached GOVERNANCE_CHECKS_SATISFIED, four went to manual review, two were blocked for missing controls and one waited for approval; the counts follow from the status order the lab chose and are a design check and not a measurement")

    section("7. Genuinely running: the thirteen unit tests")
    stream = io.StringIO()
    res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(Tests))
    print(f"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}")
    print("the tests cover classification, the union of required controls, the structural check and its failures, a block despite approval, a wait for approval, satisfaction, manual review, a changed deployment, a wrong id, self-approval and expiry, on this lab's own gate")


if __name__ == "__main__":
    main()
