"""Teaching implementation (our own): choosing prototype, pilot or production deliberately, Part 1 - a decision context built from five factors, a stage-selection engine that picks the smallest stage that can give valid
evidence, scenario tests, and the cases where a working system is still not ready for the next stage. The contexts are made up. No language model is used."""
from dataclasses import dataclass

ORDER = ("prototype", "pilot", "production")


@dataclass(frozen=True)
class Context:
    unknown: str
    needs_real_users: bool
    data: str
    consequence: str
    operator_ready: bool
    rollback: bool = False
    owner: bool = False


def select_stage(c):
    reasons = []
    if c.unknown == "mechanism" and not c.needs_real_users and c.data == "synthetic":
        return "prototype", ["the open question is feasibility and needs neither real users nor real data"]
    if c.unknown in ("mechanism", "real_effectiveness"):
        if c.data == "production" and c.consequence == "high":
            return "blocked", ["real data with high consequence is not allowed in a pilot without an approved design"]
        if not c.owner:
            reasons.append("no named owner")
        if not c.rollback:
            reasons.append("no rollback")
        if reasons:
            return "prototype", ["pilot requirements not met: " + ", ".join(reasons)]
        return "pilot", ["real conditions are needed, consequence is bounded, owner and rollback exist"]
    if c.unknown == "sustained_operation":
        if not (c.operator_ready and c.owner and c.rollback):
            return "pilot", ["operations are not ready to own it: stay in the pilot"]
        return "production", ["the open question is sustained operation and an operations team owns it"]
    return "blocked", ["unknown kind of unknown"]


def section(t):
    print(f"\n--- {t} ---")


CASES = [
    ("new algorithm on synthetic data", Context("mechanism", False, "synthetic", "low", False)),
    ("support assistant, real tickets, owner and rollback", Context("real_effectiveness", True, "real_sample", "medium", False, True, True)),
    ("same, but no rollback", Context("real_effectiveness", True, "real_sample", "medium", False, False, True)),
    ("works well, operations team ready, owner and rollback", Context("sustained_operation", True, "production", "medium", True, True, True)),
    ("works well, no operations team", Context("sustained_operation", True, "production", "medium", False, True, True)),
    ("write access to the production database", Context("real_effectiveness", True, "production", "high", False, True, True)),
]


def main():
    section("1. Genuinely running: five factors in, one stage out")
    for label, c in CASES:
        stage, why = select_stage(c)
        print(f"{label:52} -> {stage:10} {why[0]}")
    print("the same engine returned a prototype, a pilot, a production decision and two stays or blocks depending on the unknown, the data, the consequence and who owns it; the contexts are invented")

    section("2. Genuinely running: a stage is a question, not a polish level")
    for stage, q in (("prototype", "can the mechanism work?"), ("pilot", "does it work safely in real conditions?"), ("production", "can we operate it reliably over time?")):
        print(f"{stage:11} {q}")
    print("a prototype can have impressive code and still be disposable, and a production system can have a plain interface and still need strict ownership; the stage names the question being answered")

    section("3. Genuinely measuring: the smallest sufficient stage")
    rank = {s: i for i, s in enumerate(ORDER)}
    wanted = [(l, select_stage(c)[0]) for l, c in CASES if select_stage(c)[0] in rank]
    print("stages chosen:", [(l[:24], s) for l, s in wanted])
    print("a team eager to ship might call both 'works well' cases ready for production, and the engine chose production for only one of them; the lab returns the smallest stage that can answer the open question and does not promote on enthusiasm")

    section("4. Genuinely running: a pilot with a missing requirement falls back")
    c = Context("real_effectiveness", True, "real_sample", "medium", False, False, False)
    print(select_stage(c))
    print("the engine named both missing requirements, an owner and a rollback, and returned prototype, because running it on real conditions without them would expose people to a failure nobody could undo")

    section("5. Genuinely running: a high-consequence production write is blocked")
    print(select_stage(CASES[5][1]))
    print("real data with high consequence returned blocked in this lab instead of a stage, which forces a person to redesign the experiment as read-only or approve it explicitly; the rule is one the lab chose")


if __name__ == "__main__":
    main()
