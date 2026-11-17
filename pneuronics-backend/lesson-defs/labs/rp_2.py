"""Teaching implementation (our own): Anthropic RSP v3.0, Part 2 - a conservative deployment decision over a threshold status, an affirmative case, mandatory mitigations, a review and other safety gates, the full table of 48 input combinations counted, a hard-stop rule against a safety-case rule, a JSON report that says it is not an official engine, and eleven unit tests that are run.
The ordering of the checks, the section names and the review gate are the lab author's teaching choices and are not requirements taken from Anthropic's policy; nothing here authorises anything real.
"""
import io
import itertools
import json
import math
import unittest
from collections import Counter
from dataclasses import asdict, dataclass
from enum import Enum


class Threshold(str, Enum):
    BELOW = "BELOW"
    CROSSED = "CROSSED"
    INSUFFICIENT_EVIDENCE = "INSUFFICIENT_EVIDENCE"


class Decision(str, Enum):
    APPROVED = "APPROVED"
    BLOCKED = "BLOCKED"
    PENDING_EVIDENCE = "PENDING_EVIDENCE"
    PENDING_REVIEW = "PENDING_REVIEW"


@dataclass(frozen=True)
class Mitigation:
    identifier: str
    tier: str
    mandatory: bool
    verified: bool


def valid_fraction(v):
    return v is not None and not isinstance(v, bool) and isinstance(v, (int, float)) and math.isfinite(v) and 0 <= v <= 1


def threshold(frac, success, cost, autonomy):
    if not (valid_fraction(frac) and valid_fraction(success) and valid_fraction(autonomy)):
        return Threshold.INSUFFICIENT_EVIDENCE
    if cost is None or isinstance(cost, bool) or not isinstance(cost, (int, float)) or not math.isfinite(cost) or cost < 0:
        return Threshold.INSUFFICIENT_EVIDENCE
    return Threshold.CROSSED if frac >= 0.5 and success >= 0.8 and cost <= 1.0 and autonomy >= 0.75 else Threshold.BELOW


def decide(status, case_complete, review_approved, other_gates_passed, mitigations):
    if not other_gates_passed:
        return Decision.BLOCKED, "another safety gate failed"
    if status == Threshold.INSUFFICIENT_EVIDENCE:
        return Decision.PENDING_EVIDENCE, "threshold evidence is insufficient"
    if any(m.mandatory and not m.verified for m in mitigations):
        return Decision.BLOCKED, "a mandatory mitigation is not verified"
    if status == Threshold.CROSSED:
        if not case_complete:
            return Decision.PENDING_EVIDENCE, "affirmative case incomplete"
        if not review_approved:
            return Decision.PENDING_REVIEW, "review not approved"
    return Decision.APPROVED, "all modelled gates passed"


def hard_stop(crossed, mitigations_verified):
    return "PAUSE" if crossed and not mitigations_verified else "CONTINUE"


def safety_case_rule(crossed, case_approved):
    return "REVIEW_REQUIRED" if crossed and not case_approved else "CONTINUE"


def report(status, decision, reason):
    return {"policy": {"name": "RSP-inspired educational simulation", "reference_version": "3.0", "official_anthropic_engine": False}, "threshold": status.value, "deployment": {"decision": decision.value, "reason": reason}}


GOOD = [Mitigation("SECURITY_REVIEW", "UNILATERAL", True, True), Mitigation("INDUSTRY_STANDARD", "INDUSTRY_RECOMMENDATION", False, False)]
UNVERIFIED = [Mitigation("SECURITY_REVIEW", "UNILATERAL", True, False)]


class EngineTests(unittest.TestCase):
    def test_crossed_with_everything_is_approved(self):
        self.assertEqual(decide(Threshold.CROSSED, True, True, True, GOOD)[0], Decision.APPROVED)

    def test_below_with_gates_is_approved(self):
        self.assertEqual(decide(Threshold.BELOW, False, False, True, GOOD)[0], Decision.APPROVED)

    def test_below_but_other_gate_failed(self):
        self.assertEqual(decide(Threshold.BELOW, True, True, False, GOOD)[0], Decision.BLOCKED)

    def test_insufficient_is_pending_evidence(self):
        self.assertEqual(decide(Threshold.INSUFFICIENT_EVIDENCE, True, True, True, GOOD)[0], Decision.PENDING_EVIDENCE)

    def test_crossed_incomplete_case(self):
        self.assertEqual(decide(Threshold.CROSSED, False, True, True, GOOD)[0], Decision.PENDING_EVIDENCE)

    def test_crossed_no_review(self):
        self.assertEqual(decide(Threshold.CROSSED, True, False, True, GOOD)[0], Decision.PENDING_REVIEW)

    def test_unverified_mandatory_blocks(self):
        self.assertEqual(decide(Threshold.CROSSED, True, True, True, UNVERIFIED)[0], Decision.BLOCKED)

    def test_unverified_recommendation_does_not_block(self):
        self.assertEqual(decide(Threshold.BELOW, True, True, True, [GOOD[1]])[0], Decision.APPROVED)

    def test_nan_is_insufficient(self):
        self.assertEqual(threshold(0.7, float("nan"), 0.6, 0.85), Threshold.INSUFFICIENT_EVIDENCE)

    def test_boundary_is_crossed(self):
        self.assertEqual(threshold(0.5, 0.8, 1.0, 0.75), Threshold.CROSSED)

    def test_bool_is_not_a_rate(self):
        self.assertEqual(threshold(True, 0.9, 0.5, 0.9), Threshold.INSUFFICIENT_EVIDENCE)


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: the demonstration model through the engine")
    st = threshold(0.70, 0.90, 0.60, 0.85)
    d, why = decide(st, True, True, True, GOOD)
    print(json.dumps(report(st, d, why), indent=1))
    print("a model that meets all four illustrative criteria with a complete case, a verified mandatory mitigation, an approved review and passing other gates was approved by the engine, and the report says in its first lines that it is a simulation and not an official engine; the approval is the engine's arithmetic and not a safety finding")

    section("2. Genuinely running: one change at a time from that approved state")
    base = dict(status=Threshold.CROSSED, case_complete=True, review_approved=True, other_gates_passed=True, mitigations=GOOD)
    variants = [
        ("nothing changed", {}),
        ("other gate fails", {"other_gates_passed": False}),
        ("evidence insufficient", {"status": Threshold.INSUFFICIENT_EVIDENCE}),
        ("mandatory mitigation unverified", {"mitigations": UNVERIFIED}),
        ("case incomplete", {"case_complete": False}),
        ("review not approved", {"review_approved": False}),
        ("threshold below", {"status": Threshold.BELOW, "case_complete": False, "review_approved": False}),
    ]
    for label, change in variants:
        d, why = decide(**{**base, **change})
        print(f"{label:34} -> {d.value:16} {why}")
    print("each failed condition gave its own state and its own reason, a model that was below the threshold with no case and no review was still approved because nothing else was failing, which is exactly why the other-gates check cannot be skipped")

    section("3. Genuinely computing: all 48 combinations")
    counts = Counter()
    for status, case, review, gates, mit in itertools.product(list(Threshold), (True, False), (True, False), (True, False), (GOOD, UNVERIFIED)):
        counts[decide(status, case, review, gates, mit)[0].value] += 1
    print(dict(counts), "| total:", sum(counts.values()))
    print("of the 48 combinations of threshold status, case, review, other gates and mitigation state the engine approved 5 and the remaining 43 went to blocked (32), pending evidence (10) or pending review (1); no combination with an insufficient threshold status was approved")

    section("4. Genuinely running: a hard stop against a safety-case rule")
    print(f"{'crossed':8} {'verified/approved':18} {'hard stop':10} {'safety case'}")
    for crossed, ok in itertools.product((True, False), (True, False)):
        print(f"{crossed!s:8} {ok!s:18} {hard_stop(crossed, ok):10} {safety_case_rule(crossed, ok)}")
    print("the two rules agree except where the threshold is crossed and the condition is not met: one returns PAUSE and the other returns REVIEW_REQUIRED, which is the difference between a rule that stops an activity and a rule that asks for a review; neither function is Anthropic's historical or current policy text")

    section("5. Genuinely running: the eleven unit tests")
    stream = io.StringIO()
    res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(EngineTests))
    print(f"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}")
    print("the tests cover an approval, a below-threshold approval, a failed other gate, insufficient evidence, an incomplete case, a missing review, an unverified mandatory mitigation, an unverified recommendation, NaN, the boundary and a boolean, on this lab's own engine; they do not check whether the thresholds are scientifically valid")


if __name__ == "__main__":
    main()
