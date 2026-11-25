"""Teaching implementation (our own): FIPA-ACL heritage, Part 1 - speech acts, performatives, the message envelope, ontologies and a first Contract Net.
The original code/main.py was not supplied, so this is not the lesson file. Messages are JSON-friendly objects, not the FIPA wire syntax, and nothing here parses SL0 or SL1."""
import json
from dataclasses import dataclass, asdict

# The complete FIPA ACL catalogue as listed in Part 1 of the lesson text (22 names).
FIPA_CATALOGUE = ["accept-proposal", "agree", "cancel", "cfp", "confirm", "disconfirm", "failure", "inform", "inform-if", "inform-ref",
                  "not-understood", "propagate", "propose", "proxy", "query-if", "query-ref", "refuse", "reject-proposal", "request",
                  "request-when", "request-whenever", "subscribe"]
# The shorter set that the Part 1 validation example actually used.
PART1_VALIDATOR_SET = {"inform", "request", "query-if", "query-ref", "propose", "accept-proposal", "reject-proposal", "agree", "refuse",
                       "confirm", "disconfirm", "not-understood", "cfp", "subscribe", "cancel", "failure"}


@dataclass
class ACLMessage:
    performative: str
    sender: str
    receiver: str
    content: str
    language: str = "SL0"
    ontology: str = "general"
    protocol: str = "fipa-request"
    conversation_id: str = ""
    reply_with: str = ""


def validate(m):
    if m.performative not in PART1_VALIDATOR_SET:
        raise ValueError("Unsupported performative")
    return True


class Schedule:
    """Holds the one fact a query must not change: the booked slots."""
    def __init__(self):
        self.booked = set()

    def handle(self, m):
        if m.performative == "query-if":
            return "inform", ("available" if m.content not in self.booked else "not available")
        if m.performative == "request":
            self.booked.add(m.content)
            return "agree", "booked " + m.content
        return "not-understood", m.performative


def section(title):
    print(f"\n--- {title} ---")


def main():
    section("1. Genuinely running: an ACL-inspired message as JSON")
    m = ACLMessage("request", "manager-agent", "worker-agent", "generate-report", ontology="reporting", conversation_id="conv-101", reply_with="msg-001")
    text = json.dumps(asdict(m), sort_keys=True)
    back = ACLMessage(**json.loads(text))
    print("fields:", len(asdict(m)), "| round trip equal:", back == m)
    print("the message keeps intent, parties, content and the two correlation fields as separate fields and survives a JSON round trip; the declared language SL0 is only a label here, because the plain string generate-report was never checked against any SL0 grammar.")

    section("2. Genuinely running: the same content under different performatives")
    s = Schedule()
    q = ACLMessage("query-if", "appointment-agent", "schedule-agent", "doctor-17 monday")
    r = ACLMessage("request", "appointment-agent", "schedule-agent", "doctor-17 monday")
    print("query-if ->", s.handle(q), "| booked after query:", sorted(s.booked))
    print("request ->", s.handle(r), "| booked after request:", sorted(s.booked))
    print("query-if after booking ->", s.handle(q))
    print("identical content changed nothing under query-if and created a booking under request, so the receiver has to read the performative together with the content; the agree reply promises the action and the slot is only recorded as booked in this toy store, which is not proof of a real booking.")

    section("3. Genuinely checking: the catalogue against the Part 1 validator")
    missing = [p for p in FIPA_CATALOGUE if p not in PART1_VALIDATOR_SET]
    print("catalogue size:", len(FIPA_CATALOGUE), "| validator set size:", len(PART1_VALIDATOR_SET))
    print("missing from the validator:", missing)
    try:
        validate(ACLMessage("inform-if", "a", "b", "x"))
        verdict = "accepted"
    except ValueError as e:
        verdict = "rejected: " + str(e)
    print("inform-if through the Part 1 validator:", verdict)
    print("the lesson text speaks of twenty performatives while its own list has 22 names, and the simplified validator accepts only 16, so it rejects six real performatives; a strict implementation has to use the full official catalogue.")

    section("4. Genuinely running: a sender field is a claim and not an identity")
    forged = ACLMessage("request", "supervisor-agent", "worker-agent", "generate-report", conversation_id="x")
    print("structurally valid:", validate(forged), "| claimed sender:", forged.sender)
    print("nothing in the message proves that the sender is the supervisor, since the field is plain text that any process can write, so structural validation says nothing about authentication or authorisation, which need a trusted transport and a permission check.")

    section("5. Genuinely running: a first Contract Net")
    proposals = [("agent-a", 9.0, 8), ("agent-b", 7.0, 6), ("agent-c", 4.0, 12)]
    by_cost = min(proposals, key=lambda p: p[1])
    by_time = min(proposals, key=lambda p: p[2])
    print("lowest cost:", by_cost[0], "| shortest duration:", by_time[0])
    decisions = {n: ("accept-proposal" if n == by_cost[0] else "reject-proposal") for n, _, _ in proposals}
    print("decisions:", decisions)
    print("the same three proposals give agent-c under a cost rule and agent-b under a speed rule, so the protocol only fixes the cfp, propose, accept and reject steps while the selection policy belongs to the application; an award is not a completed task.")

    section("6. Genuinely running: the same word under three ontologies")
    users = [{"id": 1, "registered": True, "purchases": 2, "billable": True}, {"id": 2, "registered": True, "purchases": 0, "billable": False},
             {"id": 3, "registered": True, "purchases": 1, "billable": False}, {"id": 4, "registered": False, "purchases": 1, "billable": True}]
    counts = {"sales (any purchase)": sum(u["purchases"] > 0 for u in users), "marketing (registered)": sum(u["registered"] for u in users),
              "finance (billable)": sum(u["billable"] for u in users)}
    print("customer counts:", counts)
    print("the same four records give 3, 3 and 2 customers depending on whose definition is used, and the first two agree only by coincidence, so a schema that says customer_count is an integer cannot settle what the number means; that is the problem a shared ontology or a versioned semantic contract has to solve.")


if __name__ == "__main__":
    main()
