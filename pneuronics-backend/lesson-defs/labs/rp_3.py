"""Teaching implementation (our own): Anthropic RSP v3.0, Part 3 - a policy configuration digest, a threshold read from confidence intervals (satisfied, not satisfied, uncertain) with a percentile bootstrap, an evidence file hash checked against a trusted digest, a review record bound to a model version, activity and digests, separation of duties, activity-specific requirements, a hash-chained audit log, a roadmap completeness check and a doubling-time projection.
Everything is invented: the 79-of-100 outcomes are synthetic, the activity table is a teaching table and the review fields are strings, so this is a procedural sketch and not Anthropic's process and decides nothing about a real model.
"""
import hashlib
import json
import math
import random
import tempfile
from dataclasses import dataclass
from enum import Enum
from pathlib import Path


def canonical(v):
    return json.dumps(v, sort_keys=True, separators=(",", ":"), allow_nan=False)


def digest(v):
    return hashlib.sha256(canonical(v).encode()).hexdigest()


class MetricStatus(str, Enum):
    SATISFIED = "SATISFIED"
    NOT_SATISFIED = "NOT_SATISFIED"
    UNCERTAIN = "UNCERTAIN"


def at_least(est, lo, hi, threshold):
    vals = (est, lo, hi, threshold)
    if not all(math.isfinite(v) for v in vals) or not lo <= est <= hi:
        return MetricStatus.UNCERTAIN
    if lo >= threshold:
        return MetricStatus.SATISFIED
    if hi < threshold:
        return MetricStatus.NOT_SATISFIED
    return MetricStatus.UNCERTAIN


def at_most(est, lo, hi, threshold):
    vals = (est, lo, hi, threshold)
    if not all(math.isfinite(v) for v in vals) or not lo <= est <= hi:
        return MetricStatus.UNCERTAIN
    if hi <= threshold:
        return MetricStatus.SATISFIED
    if lo > threshold:
        return MetricStatus.NOT_SATISFIED
    return MetricStatus.UNCERTAIN


def aggregate(statuses):
    if any(s == MetricStatus.NOT_SATISFIED for s in statuses):
        return "BELOW"
    if all(s == MetricStatus.SATISFIED for s in statuses):
        return "CROSSED"
    return "INSUFFICIENT_EVIDENCE"


def percentile(values, f):
    o = sorted(values)
    pos = f * (len(o) - 1)
    lo, hi = math.floor(pos), math.ceil(pos)
    return o[lo] * (1 - (pos - lo)) + o[hi] * (pos - lo)


def bootstrap_rate(outcomes, reps=400, seed=123):
    rng = random.Random(seed)
    n = len(outcomes)
    rates = [sum(rng.choice(outcomes) for _ in range(n)) / n for _ in range(reps)]
    return percentile(rates, 0.025), percentile(rates, 0.975)


@dataclass(frozen=True)
class Review:
    review_id: str
    model_id: str
    model_version: str
    reviewer_id: str
    status: str
    evidence_digest: str
    policy_digest: str
    activity: str


def check_authorisation(review, model_id, version, evidence_digest, policy_digest, activity, evidence_author):
    if review.status == "PENDING":
        return "PENDING_REVIEW"
    if review.reviewer_id == evidence_author:
        return "REVIEW_CONFLICT"
    if review.evidence_digest != evidence_digest:
        return "EVIDENCE_INTEGRITY_FAILURE"
    if (review.model_id, review.model_version, review.policy_digest, review.activity) != (model_id, version, policy_digest, activity):
        return "AUTHORIZATION_MISMATCH"
    return "AUTHORISED" if review.status == "APPROVED" else "NOT_APPROVED"


ACTIVITY_REQUIREMENTS = {
    "TRAINING": {"human_approval": True, "security_review": True},
    "INTERNAL_EVALUATION": {"human_approval": False, "security_review": True},
    "RESTRICTED_DEPLOYMENT": {"human_approval": True, "security_review": True},
    "PUBLIC_DEPLOYMENT": {"human_approval": True, "security_review": True},
}


class Audit:
    def __init__(self):
        self.events = []

    def append(self, event_type, actor, details):
        prev = self.events[-1]["hash"] if self.events else "GENESIS"
        e = {"sequence": len(self.events) + 1, "event_type": event_type, "actor": actor, "details": details, "previous_hash": prev}
        e["hash"] = digest({k: v for k, v in e.items() if k != "hash"})
        self.events.append(e)

    def verify(self):
        prev = "GENESIS"
        for i, e in enumerate(self.events, start=1):
            if e["sequence"] != i or e["previous_hash"] != prev or e["hash"] != digest({k: v for k, v in e.items() if k != "hash"}):
                return False, i
            prev = e["hash"]
        return True, None


def milestone_needs_review(m):
    return m["completed"] and not m["verification_reference"]


def horizon(h0, months, doubling):
    return h0 * 2 ** (months / doubling)


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: a policy configuration digest")
    cfg = {"policy_id": "RSP_EDUCATIONAL", "version": "3.0-simulation", "criteria": {"task_fraction": 0.5, "success_rate": 0.8, "cost_ratio": 1.0, "autonomy": 0.75}}
    d1 = digest(cfg)
    reordered = {"criteria": {"autonomy": 0.75, "cost_ratio": 1.0, "success_rate": 0.8, "task_fraction": 0.5}, "version": "3.0-simulation", "policy_id": "RSP_EDUCATIONAL"}
    changed = json.loads(json.dumps(cfg))
    changed["criteria"]["success_rate"] = 0.79
    print("digest prefix:", d1[:12], "| same after reordering keys:", digest(reordered) == d1, "| after changing one threshold by 0.01:", digest(changed) == d1)
    print("reordering keys changed nothing and a threshold changed by one hundredth gave a different digest, so a decision record can name the exact configuration it used; a digest shows change and not approval")

    section("2. Genuinely running: reading a threshold from intervals")
    for est, lo, hi in ((0.90, 0.85, 0.94), (0.60, 0.52, 0.68), (0.79, 0.72, 0.85)):
        print(f"success rate {est} [{lo}, {hi}] against 0.80 ->", at_least(est, lo, hi, 0.80).value)
    print("cost ratio 0.9 [0.7, 1.1] against 1.0 ->", at_most(0.9, 0.7, 1.1, 1.0).value, "| 0.6 [0.5, 0.8] ->", at_most(0.6, 0.5, 0.8, 1.0).value)
    print("an estimate of 0.79 against a threshold of 0.80 is uncertain when its interval runs from 0.72 to 0.85, and for a cost ratio the comparison runs the other way; the intervals here are supplied numbers and the evaluator cannot tell whether they were computed well")

    section("3. Genuinely running: combining metrics")
    sat, nots, unc = MetricStatus.SATISFIED, MetricStatus.NOT_SATISFIED, MetricStatus.UNCERTAIN
    for label, sts in (("all satisfied", [sat] * 4), ("one uncertain", [sat, sat, unc, sat]), ("one not satisfied and one uncertain", [sat, nots, unc, sat])):
        print(f"{label:38} -> {aggregate(sts)}")
    print("an uncertain metric kept the result at insufficient evidence instead of letting a point estimate decide it, and one clearly failed metric was enough for BELOW even with another uncertain; this combination rule is the lab's own choice")

    section("4. Genuinely measuring: a percentile bootstrap of 79 successes in 100 tasks")
    outcomes = [1] * 79 + [0] * 21
    lo, hi = bootstrap_rate(outcomes)
    print(f"observed rate 0.79 | 95% percentile bootstrap interval [{lo:.3f}, {hi:.3f}] | contains 0.80: {lo <= 0.80 <= hi}")
    print("status against 0.80:", at_least(0.79, lo, hi, 0.80).value)
    print("the bootstrap interval around 0.79 contains 0.80, so a point estimate just below the line is not evidence of being below it; the outcomes are synthetic, the 400 resamples treat tasks as independent, and repeated attempts on one task would need resampling by task")

    section("5. Genuinely running: evidence file integrity")
    with tempfile.TemporaryDirectory() as d:
        f = Path(d) / "evaluation.json"
        f.write_text(canonical({"model": "ResearchAgent-X", "success_rate": 0.9}), encoding="utf-8")
        trusted = hashlib.sha256(f.read_bytes()).hexdigest()
        print("unchanged file matches the trusted digest:", hashlib.sha256(f.read_bytes()).hexdigest() == trusted)
        f.write_text(canonical({"model": "ResearchAgent-X", "success_rate": 0.99}), encoding="utf-8")
        print("after editing 0.9 to 0.99:", hashlib.sha256(f.read_bytes()).hexdigest() == trusted)
    print("the edited file no longer matched the digest stored beforehand, and a digest kept next to the file by the same writer would have been rewritten along with it, so it has to be stored somewhere the evidence author cannot change")

    section("6. Genuinely running: a review is bound to a model, a version, an activity and the evidence")
    ev = digest({"success_rate": 0.9})
    pol = d1
    rev = Review("REV-1", "ResearchAgent-X", "1.0", "reviewer-42", "APPROVED", ev, pol, "INTERNAL_EVALUATION")
    args = ("ResearchAgent-X", "1.0", ev, pol, "INTERNAL_EVALUATION", "researcher-7")
    print("matching request:", check_authorisation(rev, *args))
    print("version 1.1 requested:", check_authorisation(rev, "ResearchAgent-X", "1.1", ev, pol, "INTERNAL_EVALUATION", "researcher-7"))
    print("public deployment requested:", check_authorisation(rev, "ResearchAgent-X", "1.0", ev, pol, "PUBLIC_DEPLOYMENT", "researcher-7"))
    print("evidence changed since review:", check_authorisation(rev, "ResearchAgent-X", "1.0", digest({"success_rate": 0.99}), pol, "INTERNAL_EVALUATION", "researcher-7"))
    print("reviewer is the evidence author:", check_authorisation(rev, "ResearchAgent-X", "1.0", ev, pol, "INTERNAL_EVALUATION", "reviewer-42"))
    print("review still pending:", check_authorisation(Review("REV-2", "ResearchAgent-X", "1.0", "reviewer-42", "PENDING", ev, pol, "INTERNAL_EVALUATION"), *args))
    print("an approval for one model version and one activity authorised only that, a changed evidence digest or the author acting as reviewer broke it, and a pending review authorised nothing; the reviewer id is a string and nothing authenticates it")

    section("7. Genuinely running: requirements differ by activity")
    for act, req in ACTIVITY_REQUIREMENTS.items():
        print(f"{act:22} human approval: {req['human_approval']!s:5} security review: {req['security_review']}")
    print("internal evaluation needs no human approval in this table while training and both deployments do, so permission to evaluate is not permission to deploy; the table is the lab's invention and not a statement of Anthropic's requirements")

    section("8. Genuinely running: an audit chain, a roadmap check and a doubling projection")
    a = Audit()
    a.append("MODEL_REGISTERED", "registry-service", {"model_id": "ResearchAgent-X"})
    a.append("EVALUATION_COMPLETED", "evaluation-service", {"status": "CROSSED"})
    a.append("REVIEW_REQUESTED", "governance-service", {"model_id": "ResearchAgent-X"})
    print("intact chain:", a.verify())
    a.events[1]["details"]["status"] = "BELOW"
    print("after editing the second event:", a.verify())
    ms = {"milestone_id": "ROADMAP-001", "completed": True, "verification_reference": ""}
    print("completed milestone without a verification reference needs review:", milestone_needs_review(ms))
    print("2 hours doubling every 4 months, after 8 months:", horizon(2, 8, 4), "hours | after 6 months:", round(horizon(2, 6, 4), 2), "hours")
    print("an edited event was found at its own sequence number, a milestone marked completed with no verification reference was flagged, and the projection gives 8 hours after 8 months only if a made-up doubling time held, which is arithmetic and not a forecast")


if __name__ == "__main__":
    main()
