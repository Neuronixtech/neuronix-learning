"""Teaching implementation (our own): choosing the smallest slice that can change the decision, Part 2 - actually running a read-only replay of made-up incident records to turn declared coverage into measured
evidence: a measurable acceptance rule, the happy path versus records with missing fields, a hard-coded demo that passes anything, and a check that the replay did not change its input. No language model is used."""
import copy
import hashlib
import json

RECORDS = [
    {"id": 1, "alert": "payments error rate high", "labels": {"service": "payments"}, "deploys": ["d-100"]},
    {"id": 2, "alert": "search latency p99", "labels": {"service": "search"}, "deploys": []},
    {"id": 3, "alert": "checkout 500s", "labels": {}, "deploys": ["d-101"]},
    {"id": 4, "alert": "queue depth rising on billing worker", "labels": {}, "deploys": []},
    {"id": 5, "alert": "login failures", "labels": {"service": "auth"}, "deploys": ["d-102"]},
    {"id": 6, "alert": "disk usage high", "labels": {"team": "infra"}, "deploys": []},
    {"id": 7, "alert": "bank timeouts on the pay path", "labels": {}, "deploys": []},
    {"id": 8, "alert": "search index stale", "labels": {"service": "search"}, "deploys": ["d-103"]},
]
KEYWORDS = {"payments": "payments", "search": "search", "checkout": "checkout", "billing": "billing", "login": "auth"}
TRUTH = {1: "payments", 2: "search", 3: "checkout", 4: "billing", 5: "auth", 6: "storage", 7: "payments", 8: "search"}


def classify(rec):
    if rec["labels"].get("service"):
        return rec["labels"]["service"], "label"
    for k, v in KEYWORDS.items():
        if k in rec["alert"].lower():
            return v, "keyword"
    return None, "none"


def replay(records):
    out = []
    for r in records:
        svc, how = classify(r)
        out.append({"id": r["id"], "service": svc, "how": how})
    return out


def accuracy(preds):
    ok = sum(1 for p in preds if p["service"] == TRUTH[p["id"]])
    return ok, len(preds)


def hard_coded(records):
    return [{"id": r["id"], "service": TRUTH[r["id"]], "how": "hard-coded"} for r in records]


def digest(obj):
    return hashlib.sha256(json.dumps(obj, sort_keys=True).encode()).hexdigest()[:10]


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: a replay on eight made-up incident records")
    preds = replay(RECORDS)
    for p in preds:
        print(p, "truth:", TRUTH[p["id"]])
    ok, n = accuracy(preds)
    print(f"correct: {ok}/{n}")
    print("the replay identified the service from a label for four records and from alert text for two more, and returned none for the disk alert (whose only label names a team) and for the bank-timeouts alert (which contains none of its keywords); the records are invented and eight is far too few to say anything about real incidents")

    section("2. Genuinely measuring: happy path versus records with missing labels")
    labelled = [r for r in RECORDS if r["labels"].get("service")]
    unlabelled = [r for r in RECORDS if not r["labels"].get("service")]
    for name, rs in (("labelled only", labelled), ("unlabelled only", unlabelled), ("all", RECORDS)):
        a, b = accuracy(replay(rs))
        print(f"{name:16} {a}/{b} = {a / b:.2f}")
    print("every labelled record was right and only half of the unlabelled ones were, the misses being the disk alert and the bank-timeouts alert; a test that used only labelled records would have reported a perfect score, and the real question is the rate on the records without labels")

    section("3. Genuinely measuring: a hard-coded demo passes any acceptance rule")
    a, b = accuracy(hard_coded(RECORDS))
    print(f"hard-coded demo: {a}/{b}")
    print("accuracy of a rule that returns the answer key is 8/8 by construction; the demo shows an interface and proves nothing about whether the real records contain the information, which is why a candidate that does not read real records fails the eligibility gate")

    section("4. Genuinely running: a measurable acceptance rule fixed before the run")
    rule = {"min_records": 8, "min_accuracy": 0.80}
    a, b = accuracy(replay(RECORDS))
    print("rule:", rule, "| result:", f"{a}/{b} = {a / b:.3f}", "|", "accepted" if b >= rule["min_records"] and a / b >= rule["min_accuracy"] else "not accepted")
    a2, b2 = accuracy(replay(RECORDS[:4]))
    print("same rule on only 4 records:", f"{a2}/{b2}", "|", "accepted" if b2 >= rule["min_records"] and a2 / b2 >= rule["min_accuracy"] else "not accepted (too few records)")
    print("the replay scored 6 of 8 = 0.75, below the invented 0.80 threshold, so the slice is not accepted, and the identical code on four records was refused for sample size even though all four were right; the thresholds are this lab's own numbers, and the result is the useful kind: a measured answer that the keyword approach is not enough on its own")

    section("5. Genuinely running: the replay must not change what it reads")
    snap = copy.deepcopy(RECORDS)
    before = digest(RECORDS)
    replay(RECORDS)
    print("input digest before:", before, "| after:", digest(RECORDS), "| unchanged:", before == digest(RECORDS))

    def bad_replay(records):
        for r in records:
            r["seen"] = True
        return replay(records)
    bad_replay(snap)
    print("a replay that tags records as seen changes the digest:", digest(snap) != before)
    print("comparing a digest of the input before and after is a cheap read-only check, and it catches a replay that writes into its input; it would not catch a write to a database or a network call, which this lab does not model")


if __name__ == "__main__":
    main()
