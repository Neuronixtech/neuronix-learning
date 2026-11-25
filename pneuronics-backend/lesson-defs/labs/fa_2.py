"""Teaching implementation (our own): FIPA-ACL heritage, Part 2 - an ACL-inspired translator for five simplified MCP-style and A2A-style messages, round trips, and a Contract Net with three bidders.
The original code/main.py was not supplied. The 'modern' messages are simplified shapes invented for this lab, not the real MCP or A2A wire formats, and encoding is JSON, not FIPA syntax."""
import json
from dataclasses import dataclass, field, asdict
from typing import Any

PERFORMATIVES = {"accept-proposal", "agree", "cancel", "cfp", "confirm", "disconfirm", "failure", "inform", "inform-if", "inform-ref",
                 "not-understood", "propagate", "propose", "proxy", "query-if", "query-ref", "refuse", "reject-proposal", "request",
                 "request-when", "request-whenever", "subscribe"}


@dataclass
class ACL:
    performative: str
    sender: str
    receiver: str
    content: Any
    conversation_id: str = ""
    reply_with: str = ""
    in_reply_to: str = ""
    protocol: str = "demo"
    metadata: dict = field(default_factory=dict)


def validate(m):
    if m.performative not in PERFORMATIVES:
        raise ValueError("Unsupported performative: " + m.performative)
    if not m.sender or not m.receiver:
        raise ValueError("Missing sender or receiver")
    return True


def encode(m):
    validate(m)
    return json.dumps(asdict(m), sort_keys=True)


def decode(text):
    m = ACL(**json.loads(text))
    validate(m)
    return m


KIND_TO_PERF = {"mcp-tools-call": "request", "mcp-resources-read": "query-ref", "a2a-task-submit": "request", "a2a-task-update": "inform", "a2a-task-cancel": "cancel"}


def modern_to_acl(msg):
    return ACL(KIND_TO_PERF[msg["kind"]], msg["sender"], msg["receiver"], msg["payload"], conversation_id="conv-" + msg["id"], reply_with=msg["id"], metadata={"original_kind": msg["kind"]})


def acl_to_modern(m):
    return {"kind": m.metadata["original_kind"], "id": m.reply_with, "sender": m.sender, "receiver": m.receiver, "payload": m.content}


MODERN = [
    {"kind": "mcp-tools-call", "id": "mcp-101", "sender": "client-agent", "receiver": "tool-server", "payload": {"tool": "lookup_stock", "arguments": {"symbol": "IBM"}}},
    {"kind": "mcp-resources-read", "id": "mcp-102", "sender": "client-agent", "receiver": "resource-server", "payload": {"uri": "inventory://items/100"}},
    {"kind": "a2a-task-submit", "id": "a2a-201", "sender": "coordinator-agent", "receiver": "research-agent", "payload": {"task": "analyze quarterly sales"}},
    {"kind": "a2a-task-update", "id": "a2a-202", "sender": "research-agent", "receiver": "coordinator-agent", "payload": {"task_id": "task-501", "state": "working"}},
    {"kind": "a2a-task-cancel", "id": "a2a-203", "sender": "coordinator-agent", "receiver": "research-agent", "payload": {"task_id": "task-501", "reason": "no longer needed"}},
]


@dataclass
class Worker:
    name: str
    cost: float
    duration: int
    available: bool = True


def evaluate_cfp(worker, cfp):
    if not worker.available:
        return ACL("refuse", worker.name, cfp.sender, {"reason": "unavailable"}, cfp.conversation_id, in_reply_to=cfp.reply_with)
    return ACL("propose", worker.name, cfp.sender, {"cost": worker.cost, "duration": worker.duration}, cfp.conversation_id, in_reply_to=cfp.reply_with)


def choose(proposals):
    valid = [p for p in proposals if p.performative == "propose"]
    if not valid:
        raise ValueError("No valid proposals")
    return min(valid, key=lambda p: (p.content["cost"], p.content["duration"], p.sender))


def execute_award(accept, succeed=True):
    kind = "inform" if succeed else "failure"
    return ACL(kind, accept.receiver, accept.sender, {"status": "completed" if succeed else "error"}, accept.conversation_id, in_reply_to=accept.reply_with)


def section(title):
    print(f"\n--- {title} ---")


def main():
    section("1. Genuinely running: five round trips")
    for msg in MODERN:
        acl = modern_to_acl(msg)
        back = acl_to_modern(decode(encode(acl)))
        print(f"{msg['kind']} -> {acl.performative} -> round trip {'PASS' if back == msg else 'FAIL'}")
    print("each of the five simplified messages maps to a performative, goes through JSON and comes back equal, but only because the original kind is kept in the metadata; three kinds map to request or inform, so without that field the reverse step could not tell them apart.")

    section("2. Genuinely running: a translation that drops fields")
    task = {"task_id": "task-101", "context_id": "context-201", "state": "working", "artifacts": [], "metadata": {"priority": "high"}}
    naive = ACL("inform", "a", "b", "(task-working task-101)")
    kept = ACL("inform", "a", "b", task, metadata={"original_kind": "a2a-task-update"})
    print("naive content:", naive.content)
    print("fields recoverable from naive:", [k for k in task if k in str(naive.content)])
    print("fields recoverable from structured:", sorted(decode(encode(kept)).content))
    print("the one-line translation keeps only the task id and loses the context id, the artifacts and the priority, while carrying the whole object inside the content keeps all five fields; keeping the data still does not keep the rules that govern the task states.")

    section("3. Genuinely running: validation failures")
    for label, bad in (("unknown performative", ACL("execute-everything", "a", "b", {})), ("missing sender", ACL("request", "", "worker", {"task": "report"}))):
        try:
            encode(bad)
            print(label, "-> accepted")
        except ValueError as e:
            print(label, "->", type(e).__name__ + ":", e)
    print("both malformed messages are refused before encoding, which is structural validation only; a valid request such as delete-production-data would still pass these checks, so authorisation and business rules need their own layer.")

    section("4. Genuinely running: Contract Net with three bidders and one refusal")
    workers = [Worker("agent-a", 9.0, 8), Worker("agent-b", 7.0, 6), Worker("agent-c", 4.0, 12), Worker("agent-d", 3.0, 5, available=False)]
    cfp = ACL("cfp", "manager", "*", {"task": "analyze-sales"}, "contract-501", reply_with="cfp-1", protocol="fipa-contract-net")
    replies = [evaluate_cfp(w, cfp) for w in workers]
    print("replies:", [(r.sender, r.performative) for r in replies])
    winner = choose(replies)
    print("winner:", winner.sender, "| in_reply_to of every reply is cfp-1:", all(r.in_reply_to == "cfp-1" for r in replies))
    awards = {r.sender: ("accept-proposal" if r.sender == winner.sender else "reject-proposal") for r in replies if r.performative == "propose"}
    print("decisions:", awards)
    print("the unavailable worker answers refuse and cannot win even with the lowest cost of 3, agent-c wins with cost 4, the other two proposers are rejected, and every reply carries in_reply_to cfp-1 so the manager can match answers to the call; refuse is a valid protocol outcome and not an error.")

    section("5. Genuinely running: award, completion, failure and no bidders")
    accept = ACL("accept-proposal", "manager", winner.sender, {"task": "analyze-sales"}, "contract-501", reply_with="award-1")
    ok, bad = execute_award(accept), execute_award(accept, succeed=False)
    print("successful execution:", ok.performative, ok.content, "| failed execution:", bad.performative, bad.content)
    try:
        choose([evaluate_cfp(Worker("agent-d", 3.0, 5, available=False), cfp)])
    except ValueError as e:
        print("no proposals:", e)
    print("accepting a proposal says nothing about whether the work succeeds, so the executor reports inform or failure as a separate message; with no valid proposal the manager must say so and not invent a winner, and the inform here is simulated and proves no real analysis happened.")


if __name__ == "__main__":
    main()
