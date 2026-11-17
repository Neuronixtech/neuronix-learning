"""Teaching implementation (our own): constitutional AI and rule overrides, Part 1 - why enumerated rules fail on a small labelled set, the four-tier priority resolver with a hard-prohibition check first, an operator allowlist against a naive dictionary merge, a mislabelled category that slips past a label check, and unit tests that are run.
The resolver does not judge anything: it combines evaluations that the caller supplies, and the labelled set and the attributes are written by the lab's author, so no model is involved and no accuracy of any real system is measured."""
import io
import unittest
from dataclasses import dataclass
from enum import Enum


class Decision(str, Enum):
    ALLOW = "ALLOW"
    REFUSE = "REFUSE"
    MODIFY = "MODIFY"


class Evaluation(str, Enum):
    PASS = "PASS"
    BLOCK = "BLOCK"
    MODIFY = "MODIFY"


class Tier(Enum):
    SAFETY = 1
    ETHICS = 2
    GUIDELINES = 3
    HELPFULNESS = 4


HARD_PROHIBITIONS = frozenset({"prohibited_cbrn_assistance", "prohibited_child_exploitation", "prohibited_critical_infrastructure_attack"})


@dataclass(frozen=True)
class PrincipleEvaluation:
    tier: Tier
    result: Evaluation
    reason: str


@dataclass(frozen=True)
class ProposedAction:
    name: str
    description: str
    category: str
    evaluations: tuple
    alternative: str = ""


@dataclass(frozen=True)
class Resolution:
    decision: Decision
    reason: str
    controlling_tier: str
    alternative: str = ""


def checks(safety=Evaluation.PASS, ethics=Evaluation.PASS, guidelines=Evaluation.PASS, helpfulness=Evaluation.PASS):
    out = []
    for tier, res in ((Tier.SAFETY, safety), (Tier.ETHICS, ethics), (Tier.GUIDELINES, guidelines), (Tier.HELPFULNESS, helpfulness)):
        out.append(PrincipleEvaluation(tier, res, f"{tier.name} evaluation: {res.value}"))
    return tuple(out)


def resolve(action):
    if action.category in HARD_PROHIBITIONS:
        return Resolution(Decision.REFUSE, "Non-overridable prohibition", "HARD_PROHIBITION")
    tiers = [e.tier for e in action.evaluations]
    if len(tiers) != 4 or set(tiers) != set(Tier):
        raise ValueError("Exactly one evaluation per tier is required")
    ordered = sorted(action.evaluations, key=lambda e: e.tier.value)
    for item in ordered:
        if item.result == Evaluation.BLOCK:
            return Resolution(Decision.REFUSE, item.reason, item.tier.name)
    for item in ordered:
        if item.result == Evaluation.MODIFY:
            return Resolution(Decision.MODIFY, item.reason, item.tier.name, action.alternative)
    return Resolution(Decision.ALLOW, "All four evaluations passed", "NONE")


TRUSTED_TAGS = {"pathogen_synthesis_route": "prohibited_cbrn_assistance", "grid_control_takeover": "prohibited_critical_infrastructure_attack"}


def trusted_category(declared, tags):
    for t in tags:
        if t in TRUSTED_TAGS:
            return TRUSTED_TAGS[t]
    return declared


ALLOWED_SETTINGS = {"response_style": {"formal", "casual", "detailed"}, "response_length": {"short", "medium", "long"}}


def validate_operator_settings(settings):
    clean = {}
    for k, v in settings.items():
        if k not in ALLOWED_SETTINGS:
            raise ValueError(f"Unauthorized setting: {k}")
        if v not in ALLOWED_SETTINGS[k]:
            raise ValueError(f"Invalid value for {k}: {v}")
        clean[k] = v
    return clean


PROHIBITED_NAMES = {"delete_database", "disable_security", "expose_credentials"}


def exact_blocklist_allows(name):
    return name not in PROHIBITED_NAMES


def blanket_delete_allows(name):
    return "delete" not in name.lower()


# (name, truly acceptable, weakens oversight, destroys protected data, exposes a credential): attributes assigned by the lab author
LABELLED = [
    ("delete_database", False, False, True, False),
    ("remove_all_backup_snapshots", False, False, True, False),
    ("disable_audit_logs_for_speed", False, True, False, False),
    ("expose_api_key", False, False, False, True),
    ("export_signing_key", False, False, False, True),
    ("delete_obsolete_temp_file", True, False, False, False),
    ("delete_test_artifact_from_this_run", True, False, False, False),
    ("summarise_report", True, False, False, False),
    ("reduce_debug_logging", True, False, False, False),
    ("explain_python_dicts", True, False, False, False),
]


def principle_allows(row):
    return not (row[2] or row[3] or row[4])


class ResolverTests(unittest.TestCase):
    def mk(self, cat="education", **kw):
        return ProposedAction("a", "d", cat, checks(**kw), alternative="safer plan")

    def test_clear_allow(self):
        self.assertEqual(resolve(self.mk()).decision, Decision.ALLOW)

    def test_ethics_blocks_helpfulness(self):
        r = resolve(self.mk(ethics=Evaluation.BLOCK))
        self.assertEqual((r.decision, r.controlling_tier), (Decision.REFUSE, "ETHICS"))

    def test_hard_prohibition_beats_all_pass(self):
        self.assertEqual(resolve(self.mk(cat="prohibited_cbrn_assistance")).controlling_tier, "HARD_PROHIBITION")

    def test_safety_outranks_ethics(self):
        self.assertEqual(resolve(self.mk(safety=Evaluation.BLOCK, ethics=Evaluation.BLOCK)).controlling_tier, "SAFETY")

    def test_modify_carries_alternative(self):
        r = resolve(self.mk(safety=Evaluation.MODIFY))
        self.assertEqual((r.decision, r.alternative), (Decision.MODIFY, "safer plan"))

    def test_missing_evaluation_rejected(self):
        with self.assertRaises(ValueError):
            resolve(ProposedAction("a", "d", "x", checks()[:3]))


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: enumerated rules against a labelled set")
    unsafe = [r for r in LABELLED if not r[1]]
    safe = [r for r in LABELLED if r[1]]
    for label, allows in (("exact blocklist", lambda r: exact_blocklist_allows(r[0])), ("blanket 'delete' rule", lambda r: blanket_delete_allows(r[0])), ("principle on attributes", principle_allows)):
        fa = [r[0] for r in unsafe if allows(r)]
        fr = [r[0] for r in safe if not allows(r)]
        print(f"{label:24} unsafe allowed {len(fa)} of {len(unsafe)} | acceptable refused {len(fr)} of {len(safe)}")
        if label != "principle on attributes":
            print(f"{'':24} missed: {fa}")
            if fr:
                print(f"{'':24} wrongly refused: {fr}")
    print("the exact blocklist let four of five unsafe actions through because it only knows three spellings, the blanket delete rule caught one and also refused two harmless cleanups, and the principle rule got every row right only because its attributes were filled in by the author who knew the answers, so it shows the shape of the approach and not an accuracy")

    section("2. Genuinely running: the four-tier resolver")
    cases = [
        ("Explain Python dictionaries", ProposedAction("c1", "d", "education", checks())),
        ("Create a misleading report", ProposedAction("c2", "d", "reporting", checks(ethics=Evaluation.BLOCK))),
        ("Prohibited action", ProposedAction("c3", "d", "prohibited_cbrn_assistance", checks())),
        ("Reduce production logging", ProposedAction("c4", "d", "operations", checks(safety=Evaluation.MODIFY), alternative="Reduce debug logging while preserving required audit records")),
    ]
    for title, a in cases:
        r = resolve(a)
        print(f"{title}: {r.decision.value} | controlling tier {r.controlling_tier} | reason: {r.reason}" + (f" | alternative: {r.alternative}" if r.alternative else ""))
    r = resolve(ProposedAction("c5", "d", "ops", checks(safety=Evaluation.BLOCK, ethics=Evaluation.BLOCK, helpfulness=Evaluation.PASS)))
    print("safety and ethics both block, helpfulness passes:", r.decision.value, "controlled by", r.controlling_tier)
    try:
        resolve(ProposedAction("c6", "d", "x", checks()[:3]))
    except ValueError as e:
        print("only three evaluations supplied:", e)
    print("a hard prohibition refuses even when all four tiers pass, the highest-priority block names the refusal, a modify decision returns an alternative that still has to be evaluated and authorised before anything runs, and an incomplete evaluation set is an error and not an approval; the resolver only combines evaluations it is given")

    section("3. Genuinely running: an operator allowlist against a dictionary merge")
    print("valid:", validate_operator_settings({"response_style": "formal", "response_length": "long"}))
    for bad in ({"disable_safety": "true"}, {"response_style": "sarcastic"}):
        try:
            validate_operator_settings(bad)
        except ValueError as e:
            print("rejected:", e)
    config = {"safety_checks": True, "response_style": "concise"}
    config.update({"response_style": "detailed", "safety_checks": False})
    print("naive config.update with an operator dictionary:", config)
    print("the allowlist accepted two known settings, refused an unknown key and an unknown value, and the naive merge let the operator switch safety_checks off; the allowlist protects the settings it lists and nothing else in the process")

    section("4. Genuinely running: a category label is not a security boundary")
    mislabelled = ProposedAction("m1", "d", "education", checks())
    print("resolved on the declared label:", resolve(mislabelled).decision.value)
    tags = ["pathogen_synthesis_route"]
    relabelled = ProposedAction("m1", "d", trusted_category("education", tags), checks())
    print("resolved after the trusted tag map re-derives the category:", resolve(relabelled).decision.value, "|", relabelled.category)
    print("the declared category let an action through that the trusted tag map refuses, so a label supplied by the requester cannot be the only check; the tag names here are abstract placeholders, and deciding the tags in a real system is itself the hard problem")

    section("5. Genuinely running: the unit tests")
    stream = io.StringIO()
    res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(ResolverTests))
    print(f"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}")
    print("the tests cover an allow, an ethics block, a hard prohibition, safety outranking ethics, a modify with its alternative and a missing evaluation, and they check this resolver on supplied evaluations only, not whether a real model would classify an action correctly")


if __name__ == "__main__":
    main()
