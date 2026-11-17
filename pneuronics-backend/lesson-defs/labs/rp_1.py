"""Teaching implementation (our own): Anthropic RSP v3.0, Part 1 - a three-state threshold evaluator (BELOW, CROSSED, INSUFFICIENT_EVIDENCE) with input validation, the NaN comparison trap, boundary behaviour of >= against >, one-criterion failures, affirmative-case section checking and mitigations that keep their tier and their mandatory flag apart.
The thresholds, the section names and the mitigations are invented teaching values and are not Anthropic's AI R&D-4 criteria or its required documents; the program decides nothing about any real model.
"""
import math
from dataclasses import dataclass
from enum import Enum
from typing import Optional


class ThresholdStatus(str, Enum):
    BELOW = "BELOW"
    CROSSED = "CROSSED"
    INSUFFICIENT_EVIDENCE = "INSUFFICIENT_EVIDENCE"


@dataclass(frozen=True)
class Measurements:
    research_task_fraction: Optional[float]
    task_success_rate: Optional[float]
    cost_ratio: Optional[float]
    autonomy_score: Optional[float]


@dataclass(frozen=True)
class Criteria:
    minimum_task_fraction: float = 0.50
    minimum_success_rate: float = 0.80
    maximum_cost_ratio: float = 1.00
    minimum_autonomy_score: float = 0.75


def valid_fraction(v):
    return v is not None and not isinstance(v, bool) and isinstance(v, (int, float)) and math.isfinite(v) and 0.0 <= v <= 1.0


def valid_cost(v):
    return v is not None and not isinstance(v, bool) and isinstance(v, (int, float)) and math.isfinite(v) and v >= 0.0


def evaluate(m, c=Criteria()):
    if not (valid_fraction(m.research_task_fraction) and valid_fraction(m.task_success_rate) and valid_cost(m.cost_ratio) and valid_fraction(m.autonomy_score)):
        return ThresholdStatus.INSUFFICIENT_EVIDENCE
    crossed = (m.research_task_fraction >= c.minimum_task_fraction and m.task_success_rate >= c.minimum_success_rate
               and m.cost_ratio <= c.maximum_cost_ratio and m.autonomy_score >= c.minimum_autonomy_score)
    return ThresholdStatus.CROSSED if crossed else ThresholdStatus.BELOW


def evaluate_strict(m, c=Criteria()):
    """The same rule with > and < instead of >= and <=."""
    if not (valid_fraction(m.research_task_fraction) and valid_fraction(m.task_success_rate) and valid_cost(m.cost_ratio) and valid_fraction(m.autonomy_score)):
        return ThresholdStatus.INSUFFICIENT_EVIDENCE
    crossed = (m.research_task_fraction > c.minimum_task_fraction and m.task_success_rate > c.minimum_success_rate
               and m.cost_ratio < c.maximum_cost_ratio and m.autonomy_score > c.minimum_autonomy_score)
    return ThresholdStatus.CROSSED if crossed else ThresholdStatus.BELOW


def naive_evaluate(m, c=Criteria()):
    """No validation: failed comparisons are read as 'below'."""
    crossed = (m.research_task_fraction >= c.minimum_task_fraction and m.task_success_rate >= c.minimum_success_rate
               and m.cost_ratio <= c.maximum_cost_ratio and m.autonomy_score >= c.minimum_autonomy_score)
    return ThresholdStatus.CROSSED if crossed else ThresholdStatus.BELOW


REQUIRED_CASE_SECTIONS = ("capability_assessment", "misalignment_risk_analysis", "mitigation_plan", "verification_evidence", "residual_risk", "review_decision")


def missing_case_sections(doc):
    return [s for s in REQUIRED_CASE_SECTIONS if not isinstance(doc.get(s), str) or not doc[s].strip()]


@dataclass(frozen=True)
class Mitigation:
    identifier: str
    tier: str
    mandatory: bool
    verified: bool


def blocking_mitigations(items):
    return [m.identifier for m in items if m.mandatory and not m.verified]


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: why NaN must not become BELOW")
    nan = float("nan")
    print("nan >= 0.8:", nan >= 0.8, "| nan < 0.8:", nan < 0.8, "| isnan:", math.isnan(nan))
    m_nan = Measurements(0.70, nan, 0.60, 0.85)
    print("no validation:", naive_evaluate(m_nan).value, "| with validation:", evaluate(m_nan).value)
    print("both comparisons with NaN are False, so an evaluator that reads a failed comparison as below reports BELOW for a measurement that is not a number, while the validating one reports insufficient evidence")

    section("2. Genuinely running: what counts as a valid fraction")
    for v in (0.75, 1.0, -0.1, 1.2, None, nan, True, "0.8"):
        print(f"{v!r:8} -> {valid_fraction(v)}")
    print("True is refused although Python treats it as the integer 1, and a string, None, NaN and out-of-range numbers are all refused, so each of them leads to insufficient evidence and none to a threshold verdict")

    section("3. Genuinely running: two clear measurement sets and three without valid evidence")
    cases = [
        ("A below", Measurements(0.30, 0.65, 1.40, 0.50)),
        ("B crossed", Measurements(0.70, 0.90, 0.60, 0.85)),
        ("C success rate is NaN", Measurements(0.70, nan, 0.60, 0.85)),
        ("D cost ratio missing", Measurements(0.70, 0.90, None, 0.85)),
        ("E success rate 1.40", Measurements(0.70, 1.40, 0.60, 0.85)),
    ]
    for label, m in cases:
        print(f"{label:24} -> {evaluate(m).value}")
    print("the first set failed all four illustrative criteria, the second met all four, and the three with a NaN, a missing value and a rate of 140 percent were all insufficient evidence; a missing cost ratio is not evidence that the model is expensive")

    section("4. Genuinely running: the boundary and one failing criterion at a time")
    edge = Measurements(0.50, 0.80, 1.00, 0.75)
    print("exactly on every threshold: >= gives", evaluate(edge).value, "| > gives", evaluate_strict(edge).value)
    for label, m in (
        ("task fraction 0.499", Measurements(0.499, 0.90, 0.60, 0.85)),
        ("success rate 0.799", Measurements(0.70, 0.799, 0.60, 0.85)),
        ("cost ratio 1.001", Measurements(0.70, 0.90, 1.001, 0.85)),
        ("autonomy 0.749", Measurements(0.70, 0.90, 0.60, 0.749)),
    ):
        print(f"{label:22} -> {evaluate(m).value}")
    print("a model sitting exactly on all four thresholds is crossed with >= and below with >, so the comparison operator is part of the policy, and each single missed criterion is enough to give BELOW because the four conditions are joined with and; BELOW is only meaningful if the measurements themselves were sound")

    section("5. Genuinely running: affirmative-case sections")
    doc = {"capability_assessment": "Completed", "misalignment_risk_analysis": "Completed", "mitigation_plan": "Completed", "verification_evidence": "", "residual_risk": "Documented", "review_decision": ""}
    print("missing:", missing_case_sections(doc))
    print("filler text passes:", missing_case_sections({s: "Everything is safe" for s in REQUIRED_CASE_SECTIONS}))
    print("the check named the two empty sections, and a document that says everything is safe in every section passes it, which is why completeness of sections is not the quality of the argument")

    section("6. Genuinely running: tier and mandatory are separate fields")
    items = [
        Mitigation("SECURITY_REVIEW", "UNILATERAL", True, True),
        Mitigation("INDUSTRY_STANDARD", "INDUSTRY_RECOMMENDATION", False, False),
        Mitigation("ADOPTED_SECURITY_STANDARD", "INDUSTRY_RECOMMENDATION", True, False),
    ]
    print("blocking:", blocking_mitigations(items))
    print("a recommendation that nobody adopted did not block, and an industry recommendation that the organisation made mandatory and has not verified did, so deriving required from tier would have got the third item wrong")


if __name__ == "__main__":
    main()
