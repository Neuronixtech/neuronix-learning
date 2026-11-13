"""Teaching implementation (our own): defining the outcome before choosing the output, Part 1 - the six-field outcome frame, structural validation, and solution-leakage detection including its false positives
and false negatives. Frames and wording are made up. No language model is used."""
import re
from dataclasses import dataclass

SOLUTION_TERMS = ("ai", "chatbot", "dashboard", "agent", "vector database", "assistant", "api", "model")


@dataclass(frozen=True)
class OutcomeFrame:
    user: str
    situation: str
    current_behavior: str
    desired_outcome: str
    constraints: tuple
    non_goals: tuple


def validate_structure(f):
    errors = []
    for name in ("user", "situation", "current_behavior", "desired_outcome"):
        if not str(getattr(f, name)).strip():
            errors.append(f"{name} is required")
    for name in ("constraints", "non_goals"):
        if not getattr(f, name):
            errors.append(f"{name} needs at least one entry")
    return errors


def leaks_naive(text):
    t = text.lower()
    return [s for s in SOLUTION_TERMS if s in t]


def leaks_words(text):
    t = text.lower()
    return [s for s in SOLUTION_TERMS if re.search(r"\b" + re.escape(s) + r"\b", t)]


def validate_leakage(f):
    return {"desired_outcome": leaks_words(f.desired_outcome), "current_behavior": leaks_words(f.current_behavior)}


def section(t):
    print(f"\n--- {t} ---")


GOOD = OutcomeFrame("on-call production engineer", "a production alert has just arrived", "engineers correlate alerts, logs and runbooks by hand, about 12 minutes on average (illustrative)",
                    "identify the failing service and a safe next action within two minutes", ("diagnosis is read-only", "every action is auditable"), ("automatic remediation", "new alert routing"))


def main():
    section("1. Genuinely running: output versus outcome")
    for out, outcome in (("Build an AI incident assistant", "Identify the failing service and a safe next action within two minutes"),
                         ("Add an automated code reviewer", "High-severity defects are found before merge, with evidence, without write permission")):
        print(f"output : {out}\noutcome: {outcome}\n  solution terms in the output : {leaks_words(out)}\n  solution terms in the outcome: {leaks_words(outcome)}")
    print("the output names a thing to build and the outcome names a change somebody should see; the word list flagged ai and assistant in the first output and nothing in either outcome, but it also missed the second output because reviewer is not on the list, so the list is a starting point and section 5 shows the same gap again")

    section("2. Genuinely running: a complete frame and structural validation")
    print("good frame errors:", validate_structure(GOOD))
    empty = OutcomeFrame("", "a production alert has arrived", "slow", " ", (), ())
    print("incomplete frame errors:", validate_structure(empty))
    print("six fields are required before a frame is accepted, and the two list fields need at least one entry; the check is structural, so it says the fields exist and nothing about whether they are good")

    section("3. Genuinely measuring: solution leakage with a substring check and a word check")
    leaky = OutcomeFrame("on-call engineer", "an alert arrives", "manual", "Build an AI-powered incident dashboard", ("read-only",), ("remediation",))
    print("leaky desired_outcome (words):", validate_leakage(leaky))
    for text in ("Engineers maintain a balanced email rotation", "Analysts retrain the model of demand each week", "Engineers can paraphrase the failing service quickly"):
        print(f"{text[:52]:54} substring={leaks_naive(text)} words={leaks_words(text)}")
    print("the substring check reported ai inside maintain, balanced, email and paraphrase, which are not solutions, while the word-boundary check did not; the second row shows a limit of the word check too, since model there is a legitimate noun and is still flagged, so a flag is a prompt for a person to look and not a verdict")

    section("4. Genuinely running: a technology name that is a real constraint")
    with_constraint = OutcomeFrame("billing analyst", "month-end close", "exports are copied by hand", "reconcile the ledger export within one hour", ("must use the existing PostgreSQL database and its audit table", "read-only"), ("new reports",))
    print("leakage in desired outcome:", validate_leakage(with_constraint)["desired_outcome"], "| technology named in constraints:", [c for c in with_constraint.constraints if "postgresql" in c.lower()])
    print("naming PostgreSQL as a constraint is legitimate because the organisation really is bound to it, and it did not trip the check because only the desired outcome and the current behaviour are scanned; where the technology appears matters more than that it appears")

    section("5. Genuinely measuring: wording that hides a solution from the word list")
    for text in ("Engineers get a smart helper that watches the alerts", "Engineers get a conversational tool that answers on-call questions", "Identify the failing service within two minutes"):
        print(f"{text[:60]:62} flagged={leaks_words(text)}")
    print("the first two phrases still describe a thing to build and the list did not flag them, while the third is a real outcome; this is a false negative, and the word list cannot be made complete, so the review step has to ask what change a user would see and not just what words are present")


if __name__ == "__main__":
    main()
