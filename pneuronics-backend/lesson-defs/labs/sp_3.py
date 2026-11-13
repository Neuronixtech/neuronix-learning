"""Teaching implementation (our own): writing specifications that preserve judgment, Part 3 - decision authority enforced on proposed changes, bounded values, a signed human approval for production writes,
an audit trail whose edits can be detected, and a verification gate that needs evidence matched to claims. The specs, bounds and key are made up. No language model is used."""
import hashlib
import hmac
import json

KEY = b"lab-only-approval-key"
POLICY = {"index_choice": {"mode": "delegated"}, "cache_ttl_s": {"mode": "bounded", "bounds": (30, 600)}, "response_format": {"mode": "locked"}, "production_write": {"mode": "locked", "needs_approval": True}}


def authorize(change, policy=POLICY):
    name, value = change["name"], change.get("value")
    p = policy.get(name)
    if p is None:
        return False, "decision is not in the specification"
    if p["mode"] == "locked":
        return False, "locked decision; changes need the owner"
    if p["mode"] == "bounded":
        lo, hi = p["bounds"]
        return (lo <= value <= hi), f"bounded to {lo}..{hi}"
    return True, "delegated"


def sign(action, approver):
    return hmac.new(KEY, f"{action}|{approver}".encode(), hashlib.sha256).hexdigest()


def approved(record, action):
    if record.get("action") != action or not record.get("approver") or not record.get("sig"):
        return False
    return hmac.compare_digest(sign(record["action"], record["approver"]), record["sig"])


class Audit:
    def __init__(self):
        self.entries, self.prev = [], "0" * 12

    def add(self, event):
        h = hashlib.sha256((self.prev + json.dumps(event, sort_keys=True)).encode()).hexdigest()[:12]
        self.entries.append({"event": event, "hash": h, "prev": self.prev})
        self.prev = h

    def verify(self):
        prev = "0" * 12
        for e in self.entries:
            if e["prev"] != prev or hashlib.sha256((prev + json.dumps(e["event"], sort_keys=True)).encode()).hexdigest()[:12] != e["hash"]:
                return False
            prev = e["hash"]
        return True


def gate(claims, evidence, proof):
    problems = [c for c in claims if proof.get(c) != evidence.get(c)]
    return ("PASS" if not problems else "BLOCK"), problems


def conflicts(invariants, examples):
    return [(i, e) for i in invariants for e in examples if i == "no private data" and e.get("returns_email")]


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: authority is enforced on proposed changes")
    for ch in ({"name": "index_choice", "value": "bm25"}, {"name": "cache_ttl_s", "value": 120}, {"name": "cache_ttl_s", "value": 5000}, {"name": "response_format", "value": "v2"}, {"name": "retry_count", "value": 3}):
        print(f"{ch['name']:16} value={ch['value']!s:6} -> {authorize(ch)}")
    print("a delegated choice and an in-range bounded value were allowed, an out-of-range value and a locked decision were refused, and a change to something the specification never named was refused too; the bounds are invented")

    section("2. Genuinely running: a production write needs a signed, action-bound approval")
    rec = {"action": "production_write", "approver": "owner-1", "sig": sign("production_write", "owner-1")}
    print("valid approval:", approved(rec, "production_write"))
    print("same record for another action:", approved(rec, "delete_data"))
    print("approver edited:", approved(dict(rec, approver="agent"), "production_write"))
    print("an agent-set flag:", approved({"action": "production_write", "approved": True}, "production_write"))
    print("only the record signed for this action and approver counted, and the flag record with no approver or signature was refused; a first version of this check raised a KeyError on that record instead of refusing it, which would have turned a malformed approval into a crash; the key is a constant made up for the lab, and a real one must live where the agent cannot read it")

    section("3. Genuinely running: an audit trail that shows edits")
    a = Audit()
    a.add({"change": "cache_ttl_s", "to": 120, "by": "agent"})
    a.add({"change": "index_choice", "to": "bm25", "by": "agent"})
    a.add({"approval": "production_write", "by": "owner-1"})
    print("entries:", len(a.entries), "| verifies:", a.verify())
    a.entries[1]["event"]["to"] = "tf-idf"
    print("after editing entry 1 in place | verifies:", a.verify())
    print("each entry hashes the one before it, so an after-the-fact edit breaks the chain from that point; this detects edits to the list and does not stop someone from rewriting every entry and hash together, which needs the hashes held somewhere else")

    section("4. Genuinely running: a verification gate over claims and evidence")
    proof = {"no private data": "forbidden example", "response format kept": "contract test", "within two seconds": "latency measurement"}
    ev_ok = dict(proof)
    ev_bad = {"no private data": "latency measurement", "response format kept": "contract test"}
    print("matching evidence:", gate(list(proof), ev_ok, proof))
    print("wrong and missing evidence:", gate(list(proof), ev_bad, proof))
    print("a claim is blocked when its evidence is of the wrong kind or absent, so a passing run of unrelated tests does not open the gate")

    section("5. Genuinely running: a specification that contradicts itself")
    print("conflict found:", conflicts(["no private data"], [{"name": "support lookup", "returns_email": True}]))
    print("no conflict   :", conflicts(["no private data"], [{"name": "support lookup", "returns_email": False}]))
    print("an example that returns an email address contradicts the invariant that forbids private data, and the check reports the pair before anyone builds to it; the rule here knows only one invariant and one field, which is a stand-in for a real consistency check")


if __name__ == "__main__":
    main()
