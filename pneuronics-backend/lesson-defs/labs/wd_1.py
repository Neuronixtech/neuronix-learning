"""Teaching implementation (our own): discovering the workflow people actually perform, Part 1 - an evidence-backed step model, the gap between the documented and the observed workflow, the evidence hierarchy,
hidden state that no step produces, and handoffs and authority boundaries. The incident workflow and the evidence are made up. No language model is used."""
from dataclasses import dataclass, field

CATEGORIES = ("direct", "document", "reported", "assumed")


@dataclass(frozen=True)
class Evidence:
    category: str
    source: str


@dataclass(frozen=True)
class Step:
    step_id: int
    actor: str
    action: str
    inputs: tuple = ()
    outputs: tuple = ()
    friction: str = ""
    handoff_to: str = ""
    needs_authority: str = ""
    evidence: tuple = field(default_factory=tuple)


def validate_step(s):
    if s.step_id < 1:
        raise ValueError("Step ID must be positive")
    if not s.actor.strip() or not s.action.strip():
        raise ValueError("Actor and action are required")
    if not s.evidence:
        raise ValueError(f"Step {s.step_id} has no evidence")
    for e in s.evidence:
        if e.category not in CATEGORIES:
            raise ValueError(f"Step {s.step_id} has unknown evidence category: {e.category}")
    return s


def hidden_inputs(steps, available=()):
    produced, hidden = set(available), []
    for s in steps:
        for i in s.inputs:
            if i not in produced:
                hidden.append((s.step_id, i))
        produced.update(s.outputs)
    return hidden


def section(t):
    print(f"\n--- {t} ---")


DOCUMENTED = ["Receive the alert", "Identify the affected service", "Assign an engineer", "Investigate the failure", "Apply the correction", "Close the incident"]
OBSERVED = [
    Step(1, "on-call engineer", "open the alert", (), ("alert",), "", "", "", (Evidence("direct", "screen recording 2026-10-02"),)),
    Step(2, "on-call engineer", "search the monitoring dashboard", ("alert",), ("failing service guess",), "dashboard has no owner field", "", "", (Evidence("direct", "screen recording 2026-10-02"),)),
    Step(3, "on-call engineer", "check recent deployments", ("failing service guess",), ("deployment id",), "record is sometimes missing", "", "", (Evidence("document", "deploy log export"),)),
    Step(4, "on-call engineer", "ask a colleague which team owns the service", ("failing service guess",), ("owner",), "owner lives in someone's memory", "colleague", "", (Evidence("reported", "interview with engineer A"),)),
    Step(5, "on-call engineer", "paste the deployment id into the incident channel", ("deployment id",), ("channel message",), "copied by hand", "incident channel", "", (Evidence("direct", "chat transcript"),)),
    Step(6, "on-call engineer", "wait for authorization", ("channel message", "approval token"), ("authorization",), "waits for a person", "incident commander", "incident commander", (Evidence("reported", "interview with engineer B"),)),
    Step(7, "on-call engineer", "apply the correction", ("authorization", "owner"), ("fix",), "", "", "", (Evidence("assumed", "inferred from the official procedure"),)),
]


def main():
    section("1. Genuinely running: the documented workflow versus the observed one")
    print("documented steps:", len(DOCUMENTED), "->", DOCUMENTED)
    print("observed steps  :", len(OBSERVED))
    for s in OBSERVED:
        validate_step(s)
        print(f"  {s.step_id}. {s.action:55} evidence={[e.category for e in s.evidence]}")
    print("the official procedure has six lines and the observed workflow has seven recorded steps, among them a manual search, a question to a colleague, a copy into chat and a wait for authorization that the procedure never mentions; the lab's steps and sources are invented")

    section("2. Genuinely measuring: how much of the workflow is directly evidenced")
    counts = {c: sum(1 for s in OBSERVED for e in s.evidence if e.category == c) for c in CATEGORIES}
    total = sum(counts.values())
    print("evidence by category:", counts)
    print(f"direct-evidence ratio: {counts['direct']}/{total} = {counts['direct'] / total:.2f}")
    print("steps resting only on reported or assumed evidence:", [s.step_id for s in OBSERVED if all(e.category in ('reported', 'assumed') for e in s.evidence)])
    print("three of seven pieces of evidence were direct observation, and steps 4, 6 and 7 rest only on what someone said or on inference; those are the steps to confirm before anything is built on them")

    section("3. Genuinely running: hidden state that no step produces")
    print("inputs with no producer:", hidden_inputs(OBSERVED))
    print("with approval token supplied by a person:", hidden_inputs(OBSERVED, available=("approval token",)))
    print("the workflow consumes an approval token that none of the recorded steps creates, which is the shape of hidden state: somebody holds it outside the system, and an automation that starts from step 6 would have nothing to hand over")

    section("4. Genuinely running: handoffs and authority")
    print("handoffs:", [(s.step_id, s.handoff_to) for s in OBSERVED if s.handoff_to])
    print("authority boundaries:", [(s.step_id, s.needs_authority) for s in OBSERVED if s.needs_authority])
    print("friction notes:", len([s for s in OBSERVED if s.friction]), "of", len(OBSERVED), "steps")
    print("three handoffs and one authority boundary appear only in the observed list; a workflow summary that leaves them out will describe a process that can be automated end to end when it cannot")

    section("5. Genuinely running: a step without evidence is refused")
    for label, s in (("no evidence", Step(8, "engineer", "close the incident")), ("bad category", Step(9, "engineer", "x", evidence=(Evidence("hunch", "me"),))), ("zero id", Step(0, "engineer", "x", evidence=(Evidence("direct", "a"),)))):
        try:
            validate_step(s)
            print(f"{label:14} accepted")
        except ValueError as e:
            print(f"{label:14} rejected: {e}")
    print("each step has to carry its own evidence from a known category, so an assumed step is visible as assumed instead of being mixed into a clean list")


if __name__ == "__main__":
    main()
