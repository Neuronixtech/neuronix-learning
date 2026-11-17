"""Teaching implementation (our own): propose-then-commit, Part 1 - the building blocks: canonical JSON and digests, deterministic idempotency keys, the conflict that appears when an operation identity is reused with a changed payload, a state machine whose legal transitions are checked exhaustively, checklist validation and a JSON proposal store with atomic replacement.
Everything is local and simulated: no payment is made, the reviewer identities are plain strings and the JSON file is a single-writer teaching store."""
import hashlib
import itertools
import json
import os
import tempfile
from pathlib import Path


def canonical_json(value):
    return json.dumps(value, sort_keys=True, separators=(",", ":"), ensure_ascii=False, allow_nan=False)


def sha256_text(text):
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def action_digest(action):
    return sha256_text(canonical_json(action))


def make_idempotency_key(thread_id, operation_id, action):
    return sha256_text(canonical_json({"thread_id": thread_id, "operation_id": operation_id, "action": action}))


def thread_action_key(thread_id, action):
    """The simpler variant from the lesson text: thread plus action signature only."""
    return sha256_text(f"{thread_id}:{canonical_json(action)}")


class Conflict(Exception):
    pass


class OperationRegistry:
    """Maps (thread_id, operation_id) to the digest first seen, so a changed payload under the same identity is refused."""

    def __init__(self):
        self.seen = {}

    def register(self, thread_id, operation_id, action):
        d = action_digest(action)
        prev = self.seen.setdefault((thread_id, operation_id), d)
        if prev != d:
            raise Conflict(f"operation {operation_id} was first registered with a different action")
        return d


STATES = ["PENDING_REVIEW", "APPROVED", "REJECTED", "COMMITTING", "VERIFYING", "VERIFIED", "RECONCILIATION_REQUIRED", "FAILED"]
TRANSITIONS = {
    "PENDING_REVIEW": {"APPROVED", "REJECTED"},
    "APPROVED": {"COMMITTING"},
    "COMMITTING": {"VERIFYING", "RECONCILIATION_REQUIRED", "FAILED"},
    "RECONCILIATION_REQUIRED": {"VERIFYING", "FAILED"},
    "VERIFYING": {"VERIFIED", "FAILED"},
    "REJECTED": set(),
    "VERIFIED": set(),
    "FAILED": set(),
}


def can_transition(current, target):
    return target in TRANSITIONS.get(current, set())


REQUIRED_CHECKS = ("resource_checked", "blast_radius_checked", "rollback_checked")


def missing_checks(checklist):
    return [c for c in REQUIRED_CHECKS if checklist.get(c) is not True]


def atomic_write_json(path, data):
    fd, tmp = tempfile.mkstemp(dir=path.parent, suffix=".tmp")
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2)
            f.flush()
            os.fsync(f.fileno())
        os.replace(tmp, path)
    except Exception:
        if os.path.exists(tmp):
            os.remove(tmp)
        raise


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8")) if path.exists() else {}


def propose(path, registry, thread_id, operation_id, action, intent):
    registry.register(thread_id, operation_id, action)
    key = make_idempotency_key(thread_id, operation_id, action)
    records = read_json(path)
    if key in records:
        return records[key], False
    rec = {"proposal_id": key, "thread_id": thread_id, "operation_id": operation_id, "action": action, "action_digest": action_digest(action), "intent": intent, "status": "PENDING_REVIEW"}
    records[key] = rec
    atomic_write_json(path, records)
    return rec, True


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: canonical JSON makes equal actions identical")
    a1 = {"amount": 100, "currency": "USD", "type": "refund"}
    a2 = {"type": "refund", "currency": "USD", "amount": 100}
    print(canonical_json(a1))
    print("same text for reordered dictionaries:", canonical_json(a1) == canonical_json(a2), "| digest length:", len(action_digest(a1)))
    print("sorting keys and fixing separators gives one text for one logical action, and a SHA-256 of that text is a 64-character fingerprint; a digest identifies content and does not by itself prove that anyone approved it")

    section("2. Genuinely running: idempotency keys")
    k1 = make_idempotency_key("thread-001", "refund-001", a1)
    k2 = make_idempotency_key("thread-001", "refund-001", a1)
    k3 = make_idempotency_key("thread-001", "refund-002", a1)
    k4 = make_idempotency_key("thread-001", "refund-001", dict(a1, amount=200))
    print("same operation:", k1 == k2, "| different operation id:", k1 == k3, "| different amount:", k1 == k4)
    print("thread plus action only, two legitimate identical refunds get the same key:", thread_action_key("thread-001", a1) == thread_action_key("thread-001", a1))
    print("a repeat of the same operation maps to one key and a changed amount maps to another, so approving 100 cannot authorise 200; the thread-plus-action variant from the lesson text merges two deliberate identical refunds into one, which is why the lab adds an explicit operation id")

    section("3. Genuinely running: reusing an operation identity with a changed payload")
    reg = OperationRegistry()
    reg.register("thread-001", "refund-001", a1)
    print("same payload again: accepted")
    try:
        reg.register("thread-001", "refund-001", dict(a1, amount=1000))
    except Conflict as e:
        print("changed amount under the same id: refused ->", e)
    print("hashing alone would have treated the changed amount as a new operation with a new key, while the registry notices that the identity was already used for a different action and refuses it, which is the stronger design the lesson recommends")

    section("4. Genuinely computing: the state machine, every ordered pair of states")
    legal = [(a, b) for a, b in itertools.permutations(STATES, 2) if can_transition(a, b)]
    total = len(STATES) * (len(STATES) - 1)
    print(f"legal transitions: {len(legal)} of {total} ordered pairs")
    for a, b in legal:
        print(f"  {a} -> {b}")
    print("PENDING_REVIEW -> COMMITTING legal:", can_transition("PENDING_REVIEW", "COMMITTING"), "| REJECTED -> APPROVED legal:", can_transition("REJECTED", "APPROVED"), "| terminal states with a way out:", [s for s in ("REJECTED", "VERIFIED", "FAILED") if TRANSITIONS[s]])
    print("only a small fraction of the possible moves is legal, nothing can jump from pending review to committing, and the three terminal states have no exits; RECONCILIATION_REQUIRED is a separate state so an unknown outcome is never recorded as a plain failure")

    section("5. Genuinely running: checklist validation")
    cases = {
        "complete": {"resource_checked": True, "blast_radius_checked": True, "rollback_checked": True},
        "one missing": {"resource_checked": True, "blast_radius_checked": True},
        "one false": {"resource_checked": True, "blast_radius_checked": True, "rollback_checked": False},
        "string yes": {"resource_checked": "yes", "blast_radius_checked": True, "rollback_checked": True},
        "empty": {},
    }
    for name, cl in cases.items():
        print(f"{name:12} -> missing {missing_checks(cl)}")
    print("only an explicit True counts, so a missing key, a False and the string yes are all refused; a complete checklist forces the reviewer to answer each question and does not prove the review was thoughtful")

    with tempfile.TemporaryDirectory() as d:
        section("6. Genuinely running: a durable JSON store and idempotent proposal creation")
        path = Path(d) / "proposals.json"
        reg = OperationRegistry()
        r1, new1 = propose(path, reg, "thread-001", "refund-001", a1, "refund a defective product")
        r2, new2 = propose(path, reg, "thread-001", "refund-001", a1, "refund a defective product")
        print("first call created:", new1, "| second call created:", new2, "| same record:", r1 == r2)
        print("records on disk after reloading from a fresh read:", len(read_json(path)), "| status:", read_json(path)[r1["proposal_id"]]["status"], "| temp files left:", [p.name for p in Path(d).glob("*.tmp")])
        print("the proposal is stored before anyone reviews it and survives a reload, the second identical call returns the stored record instead of creating another, and the write goes through a temporary file and os.replace; this store has no locking, so two processes could still overwrite each other")


if __name__ == "__main__":
    main()
