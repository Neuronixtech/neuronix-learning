"""Teaching implementation (our own): constitutional AI and rule overrides, Part 2 - a resolver that treats UNKNOWN and conflicting modifications as REVIEW, a deterministic critique-and-revise table, preference selection and a reward-hacking toy, and an authority boundary that keeps text found in documents from becoming an instruction.
Nothing here trains or queries a model: the critique table, the scores and the sources are written by the lab's author, so the outputs show data flow and failure shapes and no property of a real Constitutional AI pipeline."""
import io
import unittest
from dataclasses import dataclass
from enum import Enum


class Decision(str, Enum):
    ALLOW = "ALLOW"
    REFUSE = "REFUSE"
    MODIFY = "MODIFY"
    REVIEW = "REVIEW"


class A(str, Enum):
    PASS = "PASS"
    BLOCK = "BLOCK"
    MODIFY = "MODIFY"
    UNKNOWN = "UNKNOWN"


TIERS = ("SAFETY", "ETHICS", "GUIDELINES", "HELPFULNESS")
HARD = frozenset({"prohibited_cbrn_assistance", "prohibited_child_exploitation", "prohibited_critical_infrastructure_attack"})


@dataclass(frozen=True)
class Action:
    action_id: str
    category: str
    evaluations: dict
    alternatives: tuple = ()


def resolve(action):
    if action.category in HARD:
        return Decision.REFUSE, "HARD_PROHIBITION", "non-overridable"
    if set(action.evaluations) != set(TIERS):
        raise ValueError("Exactly one evaluation per tier is required")
    for t in TIERS:
        if action.evaluations[t] == A.BLOCK:
            return Decision.REFUSE, t, "blocked"
    for t in TIERS:
        if action.evaluations[t] == A.UNKNOWN:
            return Decision.REVIEW, t, "unknown evaluation is not permission"
    mods = [t for t in TIERS if action.evaluations[t] == A.MODIFY]
    if mods:
        if len(set(action.alternatives)) > 1:
            return Decision.REVIEW, mods[0], "incompatible alternatives"
        return Decision.MODIFY, mods[0], action.alternatives[0] if action.alternatives else "no alternative supplied"
    return Decision.ALLOW, "NONE", "all passed"


def ev(**kw):
    base = {t: A.PASS for t in TIERS}
    base.update({k.upper(): v for k, v in kw.items()})
    return base


ALLOWED = {"response_style": {"formal", "casual"}, "response_length": {"short", "medium", "long"}}


def validate_operator_settings(s):
    for k, v in s.items():
        if k not in ALLOWED:
            raise ValueError(f"Unauthorized setting: {k}")
        if v not in ALLOWED[k]:
            raise ValueError(f"Invalid value for {k}: {v}")
    return dict(s)


CRITIQUES = {
    "honesty": ("The initial response may conceal material information.", "Provide a factual statement that discloses verified information and clearly identifies uncertainty."),
    "privacy": ("The initial response may reveal personal data to the wrong person.", "Offer the data only through an authenticated channel."),
}


def critique_and_revise(prompt, initial, principle):
    if principle not in CRITIQUES:
        return None
    c, r = CRITIQUES[principle]
    return {"prompt": prompt, "initial": initial, "principle": principle, "critique": c, "revision": r}


REASSURING = ("safe", "no cause for concern", "fully verified", "guaranteed")


def keyword_score(text):
    t = text.lower()
    return round(0.2 + 0.2 * sum(1 for w in REASSURING if w in t) + (0.3 if "incident" in t else 0.0), 2)


def select_preferred(cands):
    if not cands:
        raise ValueError("No candidates supplied")
    return max(cands, key=lambda c: c[1])


RANK = {"policy": 4, "application_config": 3, "user": 2, "tool_data": 0, "document": 0, "web": 0}


def accept_instruction(source, wants_to_change):
    required = 4 if wants_to_change == "policy" else 2
    return RANK.get(source, 0) >= required


class ResolverTests(unittest.TestCase):
    def test_unknown_safety_is_review(self):
        self.assertEqual(resolve(Action("a", "x", ev(safety=A.UNKNOWN)))[0], Decision.REVIEW)

    def test_block_beats_unknown(self):
        self.assertEqual(resolve(Action("a", "x", ev(safety=A.UNKNOWN, ethics=A.BLOCK)))[0], Decision.REFUSE)

    def test_incompatible_alternatives_review(self):
        self.assertEqual(resolve(Action("a", "x", ev(safety=A.MODIFY, ethics=A.MODIFY), ("p", "q")))[0], Decision.REVIEW)

    def test_single_alternative_modify(self):
        self.assertEqual(resolve(Action("a", "x", ev(safety=A.MODIFY), ("p",)))[0], Decision.MODIFY)

    def test_operator_unknown_key(self):
        with self.assertRaises(ValueError):
            validate_operator_settings({"disable_safety": "true"})

    def test_document_cannot_change_policy(self):
        self.assertFalse(accept_instruction("document", "policy"))


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: unknown is not permission")
    rows = [
        ("all pass", Action("r1", "ops", ev())),
        ("safety unknown", Action("r2", "ops", ev(safety=A.UNKNOWN))),
        ("ethics blocks, safety unknown", Action("r3", "ops", ev(safety=A.UNKNOWN, ethics=A.BLOCK))),
        ("helpfulness unknown only", Action("r4", "ops", ev(helpfulness=A.UNKNOWN))),
        ("hard prohibition, all pass", Action("r5", "prohibited_critical_infrastructure_attack", ev())),
    ]
    for label, a in rows:
        d, tier, why = resolve(a)
        print(f"{label:30} -> {d.value:7} tier {tier:16} {why}")
    print("an unknown evaluation sends the action to review instead of allowing it, a block still wins over an unknown, and a hard prohibition ignores the evaluations; review is a lab extension of the lesson's three outcomes and needs a real human process behind it")

    section("2. Genuinely running: two modifications that cannot both hold")
    one = Action("m1", "ops", ev(safety=A.MODIFY), ("Reduce debug logging only",))
    two = Action("m2", "ops", ev(safety=A.MODIFY, ethics=A.MODIFY), ("Reduce debug logging only", "Keep all logging and add sampling"))
    print("one alternative:", resolve(one)[0].value, "|", resolve(one)[2])
    print("two incompatible alternatives:", resolve(two)[0].value, "|", resolve(two)[2])
    print("a single alternative is returned for evaluation and a pair of different ones is not guessed between; even the single alternative is only a proposal that has to pass the resolver again")

    section("3. Genuinely running: operator settings")
    print("valid:", validate_operator_settings({"response_style": "formal", "response_length": "long"}))
    for bad in ({"disable_safety": "true"}, {"response_length": "enormous"}):
        try:
            validate_operator_settings(bad)
        except ValueError as e:
            print("rejected:", e)
    print("known keys with known values pass and anything else is refused before it reaches any policy object")

    section("4. Genuinely running: a critique-and-revise table")
    r = critique_and_revise("Hide a confirmed security incident.", "Tell customers that nothing happened.", "honesty")
    for k in ("prompt", "initial", "principle", "critique", "revision"):
        print(f"{k:10}: {r[k]}")
    print("unknown principle:", critique_and_revise("p", "i", "fairness"))
    print("a lookup table stands in for the model-written critique, so the output shows where a critique and a revision sit in the data flow and says nothing about what a trained model would write; the revised text would be a candidate training example and is not an action")

    section("5. Genuinely running: preference selection and a reward-hacking toy")
    honest = "A security incident has been confirmed. The investigation is ongoing and verified updates will follow."
    hacked = "Everything is safe, fully verified and guaranteed, there is no cause for concern."
    cands = [(honest, keyword_score(honest)), (hacked, keyword_score(hacked))]
    for t, s in cands:
        print(f"score {s}: {t}")
    print("selected:", select_preferred(cands)[0])
    manual = [("Conceal the incident.", 0.1), ("Disclose verified incident facts.", 0.9)]
    print("manual scores select:", select_preferred(manual)[0])
    print("a scorer that rewards reassuring words picked the misleading text, which is the shape of reward hacking in miniature, while hand-assigned scores picked the honest one; taking the highest score is selection and is not reinforcement learning, which would update a policy")

    section("6. Genuinely running: authority of text found in a document")
    for source, want in (("user", "response_style"), ("document", "response_style"), ("document", "policy"), ("tool_data", "policy"), ("policy", "policy")):
        print(f"{source:10} asks to change {want:15} -> accepted: {accept_instruction(source, want)}")
    print("text read from a document or a tool result was never accepted as an instruction, not even for a harmless style change, and only the policy source could change policy; the ranks are a table the lab wrote, and a real boundary has to be enforced by the runtime and not by the model reading the text")

    section("7. Genuinely running: the unit tests")
    stream = io.StringIO()
    res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(ResolverTests))
    print(f"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}")
    print("the tests cover unknown, block over unknown, incompatible alternatives, a single alternative, an unauthorised setting and a document trying to change policy on this lab's own resolver")


if __name__ == "__main__":
    main()
