"""Teaching implementation (our own): writing specifications that preserve judgment, Part 2 - examples turned into runnable checks (normal, edge, failure and forbidden), a sample implementation run against them, a
proof matrix that matches evidence to the claim, and a spec that is valid while its implementation is not. The search data and examples are made up. No language model is used."""
import json

ARTICLES = {1: ("Refund policy", "Refunds are issued within 14 days. Contact: jane@example.com"), 2: ("Shipping times", "Orders ship in 3 days."), 3: ("Account recovery", "Reset your password from the login page.")}


def redact(text):
    out = []
    for w in text.split():
        out.append("[redacted]" if "@" in w else w)
    return " ".join(out)


def search_good(q):
    q = q.lower().strip()
    if not q:
        raise ValueError("Query must not be empty")
    return [{"id": i, "title": t, "body": redact(b)} for i, (t, b) in ARTICLES.items() if q in t.lower() or q in b.lower()]


def search_leaky(q):
    q = q.lower().strip()
    if not q:
        raise ValueError("Query must not be empty")
    return [{"id": i, "title": t, "body": b} for i, (t, b) in ARTICLES.items() if q in t.lower() or q in b.lower()]


def search_wrong_shape(q):
    return [t for t, _ in ARTICLES.values() if q.lower() in t.lower()]


EXAMPLES = [
    ("normal", "refund", lambda r: [x["id"] for x in r] == [1]),
    ("normal", "ship", lambda r: [x["id"] for x in r] == [2]),
    ("edge", "REFUND  ", lambda r: [x["id"] for x in r] == [1]),
    ("edge", "zzz", lambda r: r == []),
    ("forbidden", "refund", lambda r: all("@" not in x["body"] for x in r)),
    ("format", "password", lambda r: all(set(x) == {"id", "title", "body"} for x in r)),
]


def run_examples(fn):
    res = []
    for kind, q, check in EXAMPLES:
        try:
            ok = bool(check(fn(q)))
        except Exception:
            ok = False
        res.append((kind, q, ok))
    try:
        fn("")
        res.append(("failure", "<empty>", False))
    except ValueError:
        res.append(("failure", "<empty>", True))
    return res


PROOF = {"relevant results": "example tests", "no private data": "forbidden example", "response format kept": "contract test", "within two seconds": "latency measurement"}


def evidence_matches(claim, evidence):
    return PROOF.get(claim) == evidence


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: the same examples against three implementations")
    for name, fn in (("good", search_good), ("leaky", search_leaky), ("wrong shape", search_wrong_shape)):
        res = run_examples(fn)
        print(f"{name:12} passed {sum(1 for r in res if r[2])}/{len(res)}  failed: {[(k, q) for k, q, ok in res if not ok]}")
    print("the good version passed every example, the leaky version failed only the forbidden one, and the wrong-shape version, which returns bare titles instead of records, failed five of seven including the normal queries because the checks read the id field and passed only the two that expect no results or a format over no rows; the forbidden example is what catches a version that finds the right articles and exposes an address")

    section("2. Genuinely running: a spec can be valid while the implementation breaks it")
    spec_ok = {"outcome": "relevant articles", "invariants": ["no private data"], "examples": len(EXAMPLES) + 1}
    print("spec fields present:", sorted(spec_ok), "| leaky implementation forbidden example passes:", [ok for k, q, ok in run_examples(search_leaky) if k == "forbidden"])
    print("the specification was complete and consistent and the implementation still violated its invariant, so validating the spec says nothing about the code, and the examples are the bridge between the two")

    section("3. Genuinely running: evidence has to match the claim")
    cases = [("no private data", "forbidden example"), ("no private data", "latency measurement"), ("within two seconds", "example tests"), ("response format kept", "contract test")]
    for claim, ev in cases:
        print(f"{claim:22} backed by {ev:20} -> {'matches' if evidence_matches(claim, ev) else 'does not match (needs ' + PROOF[claim] + ')'}")
    print("a latency measurement cannot support a privacy claim and passing example tests cannot support a speed claim, so each claim names the kind of evidence it needs; the mapping is a small table of the lab's own")

    section("4. Genuinely running: an edge case that a happy path would miss")
    print("query with uppercase and spaces:", [x["id"] for x in search_good("  REFUND ")])
    print("query with no match:", search_good("zzz"))
    try:
        search_good("   ")
    except ValueError as e:
        print("blank query:", e)
    print("the three edge cases each have an expected outcome in the examples, and a version that only handled the normal queries would have failed them")

    section("5. Genuinely running: the executable specification artifact")
    results = run_examples(search_good)
    art = {"examples": [{"kind": k, "query": q, "passed": ok} for k, q, ok in results], "proof": PROOF}
    text = json.dumps(art, sort_keys=True)
    print("examples recorded:", len(art["examples"]), "| all passed:", all(e["passed"] for e in art["examples"]), "| bytes:", len(text))
    print("the artifact holds the examples with their results and the claim-to-evidence table so a reviewer can see what was checked; it is built in memory and the lab does not write outputs/executable-specification.json")


if __name__ == "__main__":
    main()
