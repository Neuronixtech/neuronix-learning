"""Teaching implementation (our own): automated alignment research, Part 2 - a hash-chained research journal, tamper and truncation detection, a role-based authorization policy for a forum of agent researchers, and provenance checks that tie every finding to evidence entries.
The agents are scripted functions and all entries are invented text; the 'journal' is an in-memory list and the policy is a dictionary, so none of this is a security boundary."""
import hashlib
import json


def h(obj):
    return hashlib.sha256(json.dumps(obj, sort_keys=True, separators=(",", ":")).encode()).hexdigest()


class Journal:
    def __init__(self):
        self.entries = []

    def append(self, author, kind, body, refs=()):
        prev = self.entries[-1]["hash"] if self.entries else "0" * 64
        e = {"idx": len(self.entries), "author": author, "kind": kind, "body": body, "refs": list(refs), "prev": prev}
        e["hash"] = h({k: v for k, v in e.items() if k != "hash"})
        self.entries.append(e)
        return e["idx"]

    def verify(self, head=None):
        prev = "0" * 64
        for i, e in enumerate(self.entries):
            core = {k: v for k, v in e.items() if k != "hash"}
            if e["prev"] != prev or e["hash"] != h(core):
                return False, i
            prev = e["hash"]
        if head is not None and prev != head:
            return False, "head mismatch"
        return True, None

    def head(self):
        return self.entries[-1]["hash"]


POLICY = {
    "proposer": {"post_hypothesis", "post_evidence"},
    "reviewer": {"post_review"},
    "admin": {"post_hypothesis", "post_evidence", "post_review", "close_thread"},
}


def authorize(role, action):
    return action in POLICY.get(role, set())


def provenance_ok(journal, finding_idx):
    """A finding is supported when every reference points to an earlier evidence entry."""
    e = journal.entries[finding_idx]
    if not e["refs"]:
        return False
    return all(r < finding_idx and journal.entries[r]["kind"] == "evidence" for r in e["refs"])


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: building and verifying a hash chain")
    j = Journal()
    a = j.append("agent_a", "hypothesis", "feature F predicts refusal")
    b = j.append("agent_b", "evidence", "probe accuracy 0.81 on set S", refs=[a])
    c = j.append("agent_c", "finding", "F is linearly decodable", refs=[b])
    print("entries:", len(j.entries), "| chain verifies:", j.verify())
    print("each entry stores the hash of the one before it, so changing any earlier entry changes every later hash; the entries are invented text")

    section("2. Genuinely running: tamper and truncation")
    head = j.head()
    saved = json.dumps(j.entries)
    j.entries[1]["body"] = "probe accuracy 0.99 on set S"
    print("edit entry 1 body ->", j.verify())
    j.entries = json.loads(saved)
    j.entries[1]["body"] = "probe accuracy 0.99 on set S"
    j.entries[1]["hash"] = h({k: v for k, v in j.entries[1].items() if k != "hash"})
    print("edit entry 1 and recompute only its own hash ->", j.verify())
    j.entries = json.loads(saved)[:2]
    print("drop the last entry, no external head ->", j.verify())
    print("drop the last entry, compare with the saved head ->", j.verify(head))
    print("a plain edit is caught at the edited entry, an edit that recomputes its own hash is caught at the next entry, and silently removing the newest entries passes unless the latest hash was recorded somewhere the writer cannot change; the chain proves consistency and not honesty")

    section("3. Genuinely running: a role-based authorization policy")
    attempts = [("proposer", "post_hypothesis"), ("proposer", "post_review"), ("reviewer", "post_evidence"), ("reviewer", "post_review"), ("intern", "post_hypothesis"), ("admin", "close_thread")]
    for role, action in attempts:
        print(f"{role:9} {action:16} -> {'allow' if authorize(role, action) else 'deny'}")
    print("an unknown role gets an empty permission set, so it is denied by default, and a proposer cannot approve its own work because review is a separate action; the policy is a dictionary inside the same program, which the agent could edit if it shared the process")

    section("4. Genuinely running: provenance of findings")
    j = Journal()
    h0 = j.append("agent_a", "hypothesis", "H1")
    e1 = j.append("agent_b", "evidence", "probe result", refs=[h0])
    f1 = j.append("agent_c", "finding", "supported claim", refs=[e1])
    f2 = j.append("agent_c", "finding", "claim with no references")
    f3 = j.append("agent_c", "finding", "claim citing a hypothesis only", refs=[h0])
    for name, idx in (("supported", f1), ("no refs", f2), ("cites a hypothesis", f3)):
        print(f"{name:20} provenance ok: {provenance_ok(j, idx)}")
    print("a finding counts as supported only when it points to earlier evidence entries, so a claim with no references or one that cites only a hypothesis is flagged; this checks the structure of the trail and not whether the evidence is true")


if __name__ == "__main__":
    main()
