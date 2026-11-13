"""Teaching implementation (our own): choosing the smallest slice that can change the decision, Part 1 - required proof as a set, a strict eligibility gate before any scoring, a score over eligible candidates,
the cheaper candidate that proves too little, weight sensitivity, and a decision artifact. The candidates, costs and weights are made up. No language model is used."""
import json
from dataclasses import dataclass

REQUIRED = frozenset({"real_records", "operator_review", "read_only"})


@dataclass(frozen=True)
class Candidate:
    name: str
    proves: frozenset
    effort_days: int
    risk: int


def missing(c, required=REQUIRED):
    return sorted(required - c.proves)


def eligible(cands, required=REQUIRED):
    return [c for c in cands if not (required - c.proves)]


def score(c, w_effort=1.0, w_risk=2.0):
    return w_effort * c.effort_days + w_risk * c.risk


def choose(cands, required=REQUIRED, **w):
    ok = eligible(cands, required)
    if not ok:
        return None
    return min(ok, key=lambda c: (score(c, **w), c.name))


def section(t):
    print(f"\n--- {t} ---")


CANDS = [
    Candidate("hard-coded dashboard", frozenset({"operator_review"}), 2, 1),
    Candidate("replay script on real records", frozenset({"real_records", "read_only"}), 3, 1),
    Candidate("replay with operator review", frozenset({"real_records", "operator_review", "read_only"}), 6, 2),
    Candidate("live agent in production", frozenset({"real_records", "operator_review"}), 5, 5),
    Candidate("full vertical slice with approval", frozenset({"real_records", "operator_review", "read_only", "audit_log"}), 12, 2),
]


def main():
    section("1. Genuinely running: what each candidate fails to prove")
    for c in CANDS:
        print(f"{c.name:36} effort={c.effort_days:2}d risk={c.risk} score={score(c):5.1f} missing={missing(c)}")
    print("only candidates with an empty missing list can answer the question the three assumptions pose; the dashboard is the smallest and proves one of the three")

    section("2. Genuinely running: eligibility first, then the score")
    print("eligible:", [c.name for c in eligible(CANDS)])
    print("chosen  :", choose(CANDS).name)
    print("lowest score among all candidates:", min(CANDS, key=score).name)
    print("the dashboard has the lowest raw score and the gate removed it, along with the replay script and the live agent, leaving two candidates, and the cheaper of those was chosen; ranking first and filtering afterwards would have returned the dashboard")

    section("3. Genuinely measuring: declared coverage is not evidence")
    declared = Candidate("replay on real records (declared)", frozenset({"real_records", "operator_review", "read_only"}), 3, 1)
    print("declared candidate eligible:", bool(eligible([declared])), "| score:", score(declared))
    print("chosen when it is in the list:", choose(CANDS + [declared]).name)
    print("a candidate that lists all three proofs and costs three days wins the comparison, because the gate only reads the set it was given; whether the slice really covers the proof is what Part 2 checks by running one")

    section("4. Genuinely measuring: the weights decide between eligible candidates")
    for we, wr in ((1.0, 2.0), (1.0, 0.0), (0.0, 1.0), (1.0, 5.0)):
        print(f"w_effort={we} w_risk={wr}: chosen={choose(CANDS, w_effort=we, w_risk=wr).name}")
    print("the winner changed only when the effort weight went to zero, and then the two eligible candidates both had risk 2, so the choice fell to the name tie-break (full... sorts before replay...) and not to any real preference; a weight set that leaves a tie is a warning sign, and the numbers 1 and 2 in this lab are arbitrary and were not calibrated against anything")

    section("5. Genuinely running: the decision artifact and the empty case")
    pick = choose(CANDS)
    art = {"chosen": pick.name, "required_proof": sorted(REQUIRED), "rejected": {c.name: missing(c) for c in CANDS if missing(c)}, "weights": {"effort": 1.0, "risk": 2.0}}
    print(json.dumps(art, indent=1, sort_keys=True))
    print("no eligible candidate ->", choose([CANDS[0], CANDS[1]]))
    print("the artifact records why each rejected candidate was rejected, and when nothing is eligible the function returns None instead of the least bad option, which forces a person to widen the options or narrow the proof")


if __name__ == "__main__":
    main()
