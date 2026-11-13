"""Teaching implementation (our own): writing specifications that preserve judgment, Part 1 - the six specification surfaces, a lint that flags both under-specification and over-specification, locked, bounded and
delegated decision modes chosen from reversibility and consequence, and a schema-valid decision that is still unacceptable. The specs are made up. No language model is used."""
import re
from dataclasses import dataclass, field

MODES = ("locked", "bounded", "delegated")
SURFACES = ("outcome", "invariants", "examples", "non_goals", "decisions", "evidence")


@dataclass
class Spec:
    outcome: str = ""
    invariants: list = field(default_factory=list)
    examples: list = field(default_factory=list)
    non_goals: list = field(default_factory=list)
    decisions: dict = field(default_factory=dict)
    evidence: list = field(default_factory=list)


def missing_surfaces(s):
    return [k for k in SURFACES if not getattr(s, k)]


def lint_text(text):
    t = text.lower()
    findings = []
    if not re.search(r"\d|within|at most|at least|never|without", t):
        findings.append("no measurable bound or constraint")
    if re.search(r"\bbetter\b|\bimprove\b|\bnicer\b", t):
        findings.append("aspirational word")
    for pat, name in ((r"\bexactly (\w+ )?(functions?|classes|files|lines)\b", "fixed code structure"), (r"\bvariable names?\b", "names prescribed"), (r"\bin this order\b", "step order prescribed"), (r"\bnever deviate\b", "no room for judgment")):
        if re.search(pat, t):
            findings.append(name)
    return findings


def suggest_mode(reversible, consequence):
    if consequence == "high" or not reversible:
        return "locked"
    if consequence == "medium":
        return "bounded"
    return "delegated"


def validate_decisions(decisions):
    errors = []
    for name, d in decisions.items():
        if d.get("mode") not in MODES:
            errors.append(f"{name}: unknown mode")
        if d.get("mode") == "bounded" and not d.get("bounds"):
            errors.append(f"{name}: bounded decision needs bounds")
    return errors


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely measuring: underspecified, overspecified and balanced wording")
    texts = ["Make the search system better", "Create exactly four functions, use these variable names, write the algorithm in this order and never deviate",
             "Return relevant articles within two seconds, never expose private customer data, keep the response format. The agent chooses the algorithm but cannot write to production"]
    for t in texts:
        print(f"{t[:62]:64} -> {lint_text(t)}")
    print("the first has no bound and an aspirational word, the second prescribes structure, names and order and leaves no room, and the third states outcomes, limits and what the agent may choose; the lint is a pattern match on wording and the patterns are the lab's own")

    section("2. Genuinely running: the six surfaces and what is missing")
    full = Spec("return relevant articles within two seconds", ["no private data in responses"], [{"kind": "normal", "in": "refund policy", "out": "article"}], ["no ranking model changes"],
                {"index_choice": {"mode": "delegated"}, "response_format": {"mode": "locked"}}, ["tests pass", "latency under two seconds on the sample"])
    thin = Spec(outcome="make search better")
    print("full spec missing:", missing_surfaces(full))
    print("thin spec missing:", missing_surfaces(thin))
    print("a specification with only an outcome leaves five surfaces for the agent to invent, which is the underspecified failure in structured form")

    section("3. Genuinely running: choosing a decision mode from reversibility and consequence")
    for name, rev, cons in (("internal data structure", True, "low"), ("cache size", True, "medium"), ("response schema", True, "high"), ("delete old records", False, "low"), ("write to production", False, "high")):
        print(f"{name:26} reversible={rev!s:5} consequence={cons:6} -> {suggest_mode(rev, cons)}")
    print("only cheap, reversible, low-consequence choices were delegated; an irreversible choice became locked even at low consequence; the mapping is a conservative rule in this lab and a team would set its own")

    section("4. Genuinely running: validating the decision table")
    print("valid:", validate_decisions(full.decisions))
    print("bad :", validate_decisions({"cache": {"mode": "bounded"}, "index": {"mode": "free"}}))
    print("a bounded decision with no bounds and an unknown mode were both rejected, since a bound that is not written down cannot be checked")

    section("5. Genuinely running: schema-valid and still unacceptable")
    risky = {"production_write": {"mode": "delegated"}}
    print("schema errors:", validate_decisions(risky))
    high_risk = {"production_write", "delete_data", "change_permissions"}
    print("semantic findings:", [k for k, v in risky.items() if k in high_risk and v["mode"] == "delegated"])
    print("the decision table passed structural validation and still delegated a production write to the agent, which only a risk check against a list of high-risk decisions catches; that list is the lab's own and incomplete by nature")


if __name__ == "__main__":
    main()
