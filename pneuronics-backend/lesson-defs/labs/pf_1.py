"""Teaching implementation (our own): OpenAI Preparedness Framework and DeepMind Frontier Safety Framework, Part 1 - a decision-table comparison tool over seven capabilities and three frameworks with a controlled trigger vocabulary, input normalisation, structural validation, an argparse command line driven in-process, JSON and text reports that never assert a threshold crossing or an authorisation, and twelve unit tests that are run.
The table entries restate how the lesson describes the frameworks, including its later correction that AI self-improvement is a separate tracked category at OpenAI; none of them has been checked against the source documents, which is why every framework is marked unverified and several cells say NOT_DETERMINED."""
import argparse
import contextlib
import io
import json
import unittest
from dataclasses import asdict, dataclass
from enum import Enum


class TriggerStatus(str, Enum):
    NO_CATEGORY_AUTOMATIC_TRIGGER = "no_category_automatic_trigger"
    THRESHOLD_DEPENDENT = "threshold_dependent"
    REQUIRES_POLICY_REVIEW = "requires_policy_review"
    NOT_DETERMINED = "not_determined"


@dataclass(frozen=True)
class PolicyEntry:
    framework: str
    capability: str
    classification: str
    trigger_status: TriggerStatus
    explanation: str
    evidence_needed: str


CAPABILITIES = {
    "long_range_autonomy": "Sustained goal-directed activity across extended tasks.",
    "sandbagging": "Strategic underperformance during an evaluation.",
    "ai_rd_automation": "Automating much of an AI research and development pipeline.",
    "cyber_uplift": "Autonomous or assisted cybersecurity capability.",
    "undermining_safeguards": "Defeating or weakening the controls on a model.",
    "autonomous_replication": "Independently replicating or adapting operational capability.",
    "ai_self_improvement": "Capability that could substantially accelerate AI development through self-improvement.",
}
T = TriggerStatus
RAW = {
    "long_range_autonomy": {
        "openai": ("Research Category", T.NO_CATEGORY_AUTOMATIC_TRIGGER, "Named as a Research Category in the lesson."),
        "deepmind": ("Domain-dependent autonomy (ML R&D or Cyber)", T.THRESHOLD_DEPENDENT, "Autonomy is read through the domain it enables."),
        "anthropic": ("Related AI R&D capability concern", T.REQUIRES_POLICY_REVIEW, "Relevance depends on the applicable threshold text."),
    },
    "sandbagging": {
        "openai": ("Research Category", T.NO_CATEGORY_AUTOMATIC_TRIGGER, "Named as a Research Category in the lesson."),
        "deepmind": ("Deceptive alignment and monitoring concern", T.REQUIRES_POLICY_REVIEW, "Monitoring is a detection mechanism and not proof of safety."),
        "anthropic": ("Evaluation-reliability concern", T.REQUIRES_POLICY_REVIEW, "Affects how far a measured threshold can be trusted."),
    },
    "ai_rd_automation": {
        "openai": ("Not mapped here; see ai_self_improvement", T.NOT_DETERMINED, "The lesson says mapping this to a research concern was too broad."),
        "deepmind": ("ML R&D domain capability level", T.THRESHOLD_DEPENDENT, "Competitive end-to-end automation against a defined level."),
        "anthropic": ("AI R&D capability threshold", T.THRESHOLD_DEPENDENT, "Compared with the applicable threshold in the policy version used."),
    },
    "cyber_uplift": {
        "openai": ("Not covered by this lab's source text", T.NOT_DETERMINED, "No classification is asserted."),
        "deepmind": ("Cybersecurity domain", T.THRESHOLD_DEPENDENT, "Named as a domain in the lesson."),
        "anthropic": ("Not covered by this lab's source text", T.NOT_DETERMINED, "No classification is asserted."),
    },
    "undermining_safeguards": {
        "openai": ("Research Category", T.NO_CATEGORY_AUTOMATIC_TRIGGER, "Named as a Research Category in the lesson."),
        "deepmind": ("Misalignment and monitoring concern", T.REQUIRES_POLICY_REVIEW, "Exploratory work in the lesson description."),
        "anthropic": ("Safeguards-related concern", T.REQUIRES_POLICY_REVIEW, "Needs dedicated monitoring and adversarial evaluation evidence."),
    },
    "autonomous_replication": {
        "openai": ("Research Category", T.NO_CATEGORY_AUTOMATIC_TRIGGER, "Named as a Research Category in the lesson."),
        "deepmind": ("Not covered by this lab's source text", T.NOT_DETERMINED, "No classification is asserted."),
        "anthropic": ("Not covered by this lab's source text", T.NOT_DETERMINED, "No classification is asserted."),
    },
    "ai_self_improvement": {
        "openai": ("Tracked Category", T.THRESHOLD_DEPENDENT, "The lesson's correction: a distinct Tracked Category."),
        "deepmind": ("Not covered by this lab's source text", T.NOT_DETERMINED, "No classification is asserted."),
        "anthropic": ("Not covered by this lab's source text", T.NOT_DETERMINED, "No classification is asserted."),
    },
}
EVIDENCE = "End-to-end reliability, cost, human intervention, task difficulty and the exact threshold text for the policy version used."
POLICY_TABLE = {cap: {fw: PolicyEntry(fw, cap, v[0], v[1], v[2], EVIDENCE) for fw, v in fws.items()} for cap, fws in RAW.items()}
FRAMEWORKS = {"openai", "deepmind", "anthropic"}
DISCLAIMER = "Educational policy comparison only. No actual threshold assessment or deployment authorization is made."


def normalize_capability(value):
    return value.strip().lower().replace("-", "_").replace(" ", "_")


def validate_table(table=None, capabilities=None):
    table = POLICY_TABLE if table is None else table
    capabilities = CAPABILITIES if capabilities is None else capabilities
    for cap in capabilities:
        if cap not in table:
            raise ValueError(f"Capability missing from table: {cap}")
        if set(table[cap]) != FRAMEWORKS:
            raise ValueError(f"Incomplete framework mapping: {cap}")
    return True


def compare_capability(capability):
    n = normalize_capability(capability)
    if n not in CAPABILITIES:
        raise ValueError(f"Unknown capability: {capability}. Supported: {', '.join(sorted(CAPABILITIES))}")
    return {"capability": n, "description": CAPABILITIES[n], "frameworks": {fw: asdict(e) for fw, e in POLICY_TABLE[n].items()},
            "threshold_crossed": None, "deployment_authorized": False, "sources_verified": False, "disclaimer": DISCLAIMER}


def render_text(result):
    lines = [f"Capability: {result['capability']}", f"Description: {result['description']}", ""]
    for fw, e in result["frameworks"].items():
        lines += [fw.upper(), f"  Classification: {e['classification']}", f"  Trigger: {e['trigger_status'].value if isinstance(e['trigger_status'], Enum) else e['trigger_status']}", ""]
    lines += [f"Threshold crossed: {result['threshold_crossed']}", f"Deployment authorized: {result['deployment_authorized']}"]
    return "\n".join(lines)


def build_parser():
    p = argparse.ArgumentParser(prog="framework_compare")
    g = p.add_mutually_exclusive_group(required=True)
    g.add_argument("--list", action="store_true")
    g.add_argument("--all", action="store_true")
    g.add_argument("--capability")
    p.add_argument("--format", choices=("text", "json"), default="text")
    return p


def run(argv):
    err = io.StringIO()
    with contextlib.redirect_stderr(err):
        try:
            args = build_parser().parse_args(argv)
        except SystemExit as e:
            return e.code, err.getvalue().strip().splitlines()[-1]
    try:
        validate_table()
        if args.list:
            return 0, "\n".join(sorted(CAPABILITIES))
        results = [compare_capability(c) for c in sorted(CAPABILITIES)] if args.all else [compare_capability(args.capability)]
    except ValueError as e:
        return 1, f"error: {e}"
    if args.format == "json":
        return 0, json.dumps(results if args.all else results[0], indent=2, sort_keys=True, default=lambda o: o.value)
    return 0, "\n\n".join(render_text(r) for r in results)


class ComparisonTests(unittest.TestCase):
    def test_normalisation(self):
        self.assertEqual(normalize_capability(" Long Range-Autonomy "), "long_range_autonomy")

    def test_known_capability(self):
        self.assertEqual(compare_capability("sandbagging")["capability"], "sandbagging")

    def test_three_frameworks(self):
        self.assertEqual(set(compare_capability("cyber_uplift")["frameworks"]), FRAMEWORKS)

    def test_unknown_rejected(self):
        with self.assertRaises(ValueError):
            compare_capability("robotics")

    def test_no_threshold_claim(self):
        self.assertIsNone(compare_capability("ai_rd_automation")["threshold_crossed"])

    def test_no_authorisation(self):
        self.assertFalse(compare_capability("ai_rd_automation")["deployment_authorized"])

    def test_all_entries(self):
        self.assertEqual(sum(len(v) for v in POLICY_TABLE.values()), 21)

    def test_validate_ok(self):
        self.assertTrue(validate_table())

    def test_validate_fails_on_missing_framework(self):
        broken = {k: dict(v) for k, v in POLICY_TABLE.items()}
        del broken["sandbagging"]["anthropic"]
        with self.assertRaises(ValueError):
            validate_table(broken)

    def test_json_serialisable(self):
        self.assertIn("deployment_authorized", json.loads(run(["--capability", "sandbagging", "--format", "json"])[1]))

    def test_text_has_boundary_lines(self):
        self.assertIn("Deployment authorized: False", run(["--capability", "sandbagging"])[1])

    def test_self_improvement_is_separate(self):
        self.assertEqual(POLICY_TABLE["ai_self_improvement"]["openai"].classification, "Tracked Category")


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: the command line")
    code, out = run(["--list"])
    print("--list exit", code)
    print(out)
    code, out = run(["--capability", "Long Range Autonomy"])
    print("\n--capability 'Long Range Autonomy' exit", code)
    print(out)
    print("the input was normalised to long_range_autonomy, each framework kept its own classification and trigger word, and the last two lines say that no threshold was assessed and nothing was authorised; the three classifications are the lesson's description and have not been checked against the source documents")

    section("2. Genuinely running: JSON output and the full set")
    code, out = run(["--capability", "sandbagging", "--format", "json"])
    data = json.loads(out)
    print("exit", code, "| keys:", sorted(data), "| threshold_crossed:", data["threshold_crossed"], "| sources_verified:", data["sources_verified"])
    code, out = run(["--all", "--format", "json"])
    data = json.loads(out)
    print("--all exit", code, "| capabilities:", len(data), "| entries:", sum(len(d["frameworks"]) for d in data))
    print("the JSON carries the same boundary fields and the full set holds 7 capabilities and 21 entries, and sources_verified is false in every report because no cell has been compared with the original text")

    section("3. Genuinely running: errors and argument conflicts")
    for argv in (["--capability", "robotics"], ["--capability", "AI research automation"], ["--all", "--capability", "sandbagging"], []):
        code, out = run(argv)
        print(f"{argv!s:42} exit {code}: {out}")
    print("an unknown capability exited 1 and listed the supported names, the phrase AI research automation was not guessed into ai_rd_automation because there is no alias table, and conflicting or missing arguments exited 2 with a usage error; an unknown input is never turned into a low-risk answer")

    section("4. Genuinely running: structural validation")
    broken = {k: dict(v) for k, v in POLICY_TABLE.items()}
    del broken["sandbagging"]["anthropic"]
    for label, table in (("complete table", None), ("one framework removed", broken)):
        try:
            print(f"{label}:", validate_table(table))
        except ValueError as e:
            print(f"{label}: ValueError: {e}")
    print("the complete table passed and the table with one framework removed failed by name; passing this check shows the table is well formed and says nothing about whether any entry is right")

    section("5. Genuinely counting: how many cells assert nothing")
    cells = [e for fws in POLICY_TABLE.values() for e in fws.values()]
    from collections import Counter
    print(dict(Counter(e.trigger_status.value for e in cells)))
    print("of the 21 cells, 7 say not_determined instead of asserting a classification, 5 are threshold dependent, 5 need a policy review and 4 say research category with no automatic trigger; leaving a cell undetermined is how the table avoids inventing an obligation it cannot source")

    section("6. Genuinely running: the twelve unit tests")
    stream = io.StringIO()
    res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(ComparisonTests))
    print(f"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}")
    print("the tests cover normalisation, the three-framework structure, the unknown-input error, the two boundary fields, the entry count, validation and its failure, JSON, text output and the separate self-improvement category on this lab's table, and they test the software and say nothing about the policies")


if __name__ == "__main__":
    main()
