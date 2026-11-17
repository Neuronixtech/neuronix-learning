"""Teaching implementation (our own): CAIS, CAISI and societal-scale risk, Part 1 - a multi-label four-risk screening tool (malicious use, AI races, organisational risks, rogue AIs) on word-boundary phrase matching, its report with matched indicators and limits, the false positives and false negatives of phrase matching, precision and recall on a small labelled set, a plain keyword version for comparison, mitigation matching and nine unit tests that are run.
The indicators, the labelled descriptions and the mitigations are written by the lab's author; this is a screening aid and not a safety assessment, no classification here comes from CAIS, CAISI or any regulator, and nothing is certified.
"""
import io
import json
import re
import unicodedata
import unittest

TAXONOMY = {
    "malicious_use": {"title": "Malicious Use", "indicators": ["attacker misuse", "fraud campaign", "unauthorized disclosure", "malicious exploitation"],
                      "mitigations": ["Enforce least-privilege access", "Perform adversarial testing", "Monitor suspicious usage", "Review capability restrictions"]},
    "ai_races": {"title": "AI Races", "indicators": ["competitive pressure", "rushed deployment", "accelerated launch", "market deadline"],
                 "mitigations": ["Define minimum safety gates", "Protect evaluation schedules", "Require deployment approval", "Document safety exceptions"]},
    "organizational_risks": {"title": "Organizational Risks", "indicators": ["missing audit", "incomplete security review", "weak oversight", "unresolved safety finding"],
                             "mitigations": ["Conduct independent audits", "Create escalation procedures", "Strengthen information security", "Apply defense in depth"]},
    "rogue_ais": {"title": "Rogue AIs", "indicators": ["evade shutdown", "bypass human approval", "unauthorized self-modification", "uncontrolled autonomous action"],
                  "mitigations": ["Limit autonomous permissions", "Require approval for high-impact actions", "Implement external kill switches", "Verify actions after execution"]},
}
SIMPLE_KEYWORDS = {"malicious_use": ["attacker", "fraud", "misuse"], "ai_races": ["competition", "deadline", "rush"], "organizational_risks": ["audit", "security", "oversight"], "rogue_ais": ["shutdown", "autonomy", "approval"]}
LIMITS = ["Keyword matches are not proof of risk.", "Unmatched categories may still be relevant.", "Controls have not been independently verified.", "The report does not authorize deployment."]


def validate_deployment(d):
    if not isinstance(d, dict):
        raise TypeError("Deployment must be a dictionary.")
    for k in ("name", "description"):
        if not isinstance(d.get(k), str) or not d[k].strip():
            raise ValueError(f"Field {k} must be a non-empty string.")
    return d


def normalize_text(t):
    return re.sub(r"\s+", " ", unicodedata.normalize("NFKC", t).casefold())


def match_indicator(text, indicator):
    return re.search(r"(?<!\w)" + re.escape(indicator) + r"(?!\w)", text) is not None


def classify(description):
    text = normalize_text(description)
    out = []
    for cid, d in TAXONOMY.items():
        hits = [i for i in d["indicators"] if match_indicator(text, i)]
        if hits:
            out.append({"category": cid, "title": d["title"], "matched_indicators": hits})
    return out


def classify_simple(description):
    t = normalize_text(description)
    return [{"category": c, "matched_indicators": [k for k in ks if k in t]} for c, ks in SIMPLE_KEYWORDS.items() if any(k in t for k in ks)]


def match_mitigations(findings):
    return {f["category"]: list(TAXONOMY[f["category"]]["mitigations"]) for f in findings}


def build_report(deployment):
    validate_deployment(deployment)
    findings = classify(deployment["description"])
    return {"deployment_name": deployment["name"], "classification_method": "Rule-based phrase matching", "findings": findings,
            "mitigations": match_mitigations(findings), "human_review_required": True, "review_status": "pending", "limitations": LIMITS}


# (description, categories a reviewer would assign, written by the lab author)
LABELLED = [
    ("Competitive pressure caused a rushed deployment with an incomplete security review.", {"ai_races", "organizational_risks"}),
    ("The deployment faces attacker misuse attempts involving unauthorized disclosure.", {"malicious_use"}),
    ("The autonomous research agent attempted to bypass human approval.", {"rogue_ais"}),
    ("Competitive pressure caused a rushed deployment with a missing audit. The platform faces attacker misuse, and the agent may bypass human approval.", {"ai_races", "organizational_risks", "malicious_use", "rogue_ais"}),
    ("The missing audit issue has been fully resolved.", set()),
    ("The team completed an independent audit and closed every finding.", set()),
    ("Management removed independent testing to meet an aggressive release schedule.", {"ai_races", "organizational_risks"}),
    ("The agent tried to keep running after the operator pressed stop.", {"rogue_ais"}),
    ("A fraud campaign is using the assistant to write convincing messages.", {"malicious_use"}),
    ("Routine documentation update for the support portal.", set()),
    ("There is competition for the same market, but all safety gates are scheduled and protected.", set()),
    ("An unresolved safety finding has been open for six months.", {"organizational_risks"}),
]


def score(classifier):
    tp = fp = fn = 0
    for desc, truth in LABELLED:
        got = {f["category"] for f in classifier(desc)}
        tp += len(got & truth)
        fp += len(got - truth)
        fn += len(truth - got)
    p = tp / (tp + fp) if tp + fp else 0.0
    r = tp / (tp + fn) if tp + fn else 0.0
    return tp, fp, fn, p, r


class Tests(unittest.TestCase):
    def test_normalisation(self):
        self.assertEqual(normalize_text("RUSHED\n\nDEPLOYMENT"), "rushed deployment")

    def test_phrase_match(self):
        self.assertTrue(match_indicator("a rushed deployment", "rushed deployment"))

    def test_non_match(self):
        self.assertFalse(match_indicator("routine deployment", "rushed deployment"))

    def test_boundary(self):
        self.assertFalse(match_indicator("weak oversights", "weak oversight"))

    def test_multi_label(self):
        cats = {f["category"] for f in classify("competitive pressure and a missing audit")}
        self.assertEqual(cats, {"ai_races", "organizational_risks"})

    def test_empty_is_not_approval(self):
        r = build_report({"name": "x", "description": "nothing special here"})
        self.assertEqual((r["findings"], r["human_review_required"], r["review_status"]), ([], True, "pending"))

    def test_invalid_type(self):
        with self.assertRaises(TypeError):
            validate_deployment("agent")

    def test_blank_description(self):
        with self.assertRaises(ValueError):
            validate_deployment({"name": "x", "description": "   "})

    def test_mitigations_are_copies(self):
        m = match_mitigations(classify("attacker misuse"))
        m["malicious_use"].append("x")
        self.assertNotIn("x", TAXONOMY["malicious_use"]["mitigations"])


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: four example deployments")
    for desc in (LABELLED[0][0], LABELLED[1][0], LABELLED[2][0], LABELLED[3][0]):
        print(desc)
        for f in classify(desc):
            print(f"   {f['category']:22} matched {f['matched_indicators']}")
    print("the first description matched two categories, the second one, the third a rogue-AI phrase and the fourth all four, so the taxonomy is multi-label; a match means a phrase appeared and says nothing about whether the described situation is real, observed or severe")

    section("2. Genuinely running: a report and what it leaves out")
    r = build_report({"name": "Autonomous Enterprise Agent", "description": LABELLED[0][0]})
    print(json.dumps({k: r[k] for k in ("deployment_name", "classification_method", "human_review_required", "review_status")}, indent=1))
    print("limitations:", r["limitations"])
    print("mitigation lists for", sorted(r["mitigations"]))
    print("the report is always marked as needing human review with a pending status and carries its own four limitations, and the mitigation lists are recommendations that say nothing about whether any control exists")

    section("3. Genuinely running: false positives and false negatives")
    for desc in (LABELLED[4][0], LABELLED[5][0], LABELLED[10][0], LABELLED[6][0]):
        print(f"{[f['category'] for f in classify(desc)]!s:38} {desc}")
    print("the resolved audit issue was flagged as a missing audit, which is a false positive on a closed finding, the sentence about management removing independent testing matched nothing although it describes both schedule pressure and an organisational failure, and a phrase-level matcher cannot see negation, time or evidence quality; an empty result is not a clean bill")

    section("4. Genuinely measuring: precision and recall on twelve labelled descriptions")
    for label, fn_ in (("phrase matcher", classify), ("plain keywords", classify_simple)):
        tp, fp, fn, p, rr = score(fn_)
        print(f"{label:15} TP {tp:2} FP {fp:2} FN {fn:2} | precision {p:.3f} | recall {rr:.3f}")
    print("the phrase matcher found 10 of the 13 labelled category assignments with 1 false positive and 3 misses, giving precision 0.909 and recall 0.769, while the broad plain keywords found 9 with 3 false positives and 4 misses, giving 0.750 and 0.692, so on this set the plain version was worse on both; twelve descriptions written by the lab author are far too few to estimate a real rate, and recall matters more than precision when a missed concern never reaches a reviewer")

    section("5. Genuinely running: the unit tests")
    stream = io.StringIO()
    res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(Tests))
    print(f"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}")
    print("the tests cover normalisation, phrase and boundary matching, multi-label output, an empty result that is still pending review, input validation and copied mitigation lists, on this lab's own matcher; they do not show that the indicators are right")


if __name__ == "__main__":
    main()
