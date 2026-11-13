"""Teaching implementation (our own): mapping assumptions and resolving the riskiest one first, Part 1 - assumption records, falsifiable claims, a risk score from impact, uncertainty and irreversibility,
ranking with two different scoring rules, and tie-breaking. The assumptions and the 1-5 ratings are made up. No language model is used."""
import re
from dataclasses import dataclass


@dataclass(frozen=True)
class Assumption:
    aid: str
    claim: str
    impact: int
    uncertainty: int
    irreversibility: int
    status: str = "open"


def validate(a):
    for n in ("impact", "uncertainty", "irreversibility"):
        v = getattr(a, n)
        if not isinstance(v, int) or isinstance(v, bool) or not 1 <= v <= 5:
            raise ValueError(f"{a.aid}: {n} must be an integer from 1 to 5")
    if not a.claim.strip():
        raise ValueError(f"{a.aid}: claim is required")
    return a


def falsifiable(claim):
    c = claim.lower()
    has_number = bool(re.search(r"\d", c)) or any(w in c for w in ("at least", "at most", "fewer", "more than", "without"))
    vague = [w for w in ("good", "useful", "intelligent", "easy", "trust") if re.search(r"\b" + w + r"\b", c)]
    return {"has_threshold_or_condition": has_number, "vague_words": vague}


def score_product(a):
    return a.impact * a.uncertainty * a.irreversibility


def score_sum(a):
    return a.impact + a.uncertainty + a.irreversibility


def rank(items, key):
    return [a.aid for a in sorted((x for x in items if x.status == "open"), key=lambda a: (-key(a), -a.irreversibility, a.aid))]


def section(t):
    print(f"\n--- {t} ---")


MAP = [
    Assumption("A1", "At least 90 percent of alerts contain enough fields to identify the failing service", 5, 4, 3),
    Assumption("A2", "Engineers will trust and act on the recommendations", 4, 4, 2),
    Assumption("A3", "The assistant can run without write permission to production", 5, 2, 5),
    Assumption("A4", "Recommendations cut triage time to under two minutes", 5, 5, 2),
    Assumption("A5", "The dashboard framework supports the needed charts", 2, 2, 1),
]


def main():
    section("1. Genuinely running: the assumption map and its scores (ratings are invented)")
    for a in MAP:
        validate(a)
        print(f"{a.aid} impact={a.impact} uncertainty={a.uncertainty} irreversibility={a.irreversibility} product={score_product(a):3} sum={score_sum(a):2}  {a.claim[:60]}")
    print("each hidden belief became a record with three ratings, and the ratings are the team's own judgement on a 1 to 5 scale, not measurements")

    section("2. Genuinely running: ranking by product and by sum")
    print("by product:", rank(MAP, score_product))
    print("by sum    :", rank(MAP, score_sum))
    print("the rules disagree about the top item: the product put A1 first with 60 against 50 for A3 and A4, while the sum scored A1, A3 and A4 all at 12 and the tie-break on irreversibility put A3 first; A2 and A5 kept their places in both")
    print("the rule is a choice the team makes and should state, since the same ratings ranked differently; the lab uses the product so that one low rating pulls a risk down")

    section("3. Genuinely running: ties are broken by irreversibility")
    tie = [Assumption("T1", "Claim one at least 3", 4, 3, 2), Assumption("T2", "Claim two at least 3", 3, 4, 2), Assumption("T3", "Claim three at least 3", 2, 3, 4)]
    print("products:", {a.aid: score_product(a) for a in tie})
    print("ranked:", rank(tie, score_product))
    print("three assumptions scored 24 each and the order came from the tie-break, which puts the least reversible one first and then falls back to the id; without a stated tie-break the order would depend on how the list was written")

    section("4. Genuinely measuring: is the claim falsifiable")
    for c in ("The assistant is intelligent and useful", "At least 90 percent of alerts name the failing service", "Engineers trust the tool", "The tool runs without write permission to production"):
        print(f"{c[:56]:58} {falsifiable(c)}")
    print("a claim with a threshold or a condition can be shown wrong by an observation, and one made of words like intelligent and trust cannot; the check is a keyword heuristic, so a claim like 'works well enough' would also slip through without being flagged")

    section("5. Genuinely running: invalid ratings are rejected")
    for label, kw in (("rating 0", dict(impact=0)), ("rating 6", dict(uncertainty=6)), ("float rating", dict(irreversibility=2.5)), ("bool rating", dict(impact=True)), ("blank claim", dict(claim=" "))):
        base = dict(aid="X", claim="c", impact=3, uncertainty=3, irreversibility=3)
        base.update(kw)
        try:
            validate(Assumption(**base))
            print(f"{label:14} accepted")
        except ValueError as e:
            print(f"{label:14} rejected: {e}")
    print("ratings must be whole numbers from 1 to 5, and a bool was refused explicitly because True would otherwise pass as 1")


if __name__ == "__main__":
    main()
