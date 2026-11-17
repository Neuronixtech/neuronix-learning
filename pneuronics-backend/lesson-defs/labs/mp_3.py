"""Teaching implementation (our own): managed LLM platforms, Part 3 - percentile tables over simulated usage records, how comparing providers on different workload mixes can reverse a ranking, request-level cost attribution against an equal split of a shared deployment bill using an in-memory SQLite table and a GROUP BY like the lesson's illustrative query, billing reconciliation with an unattributed remainder, log redaction by pattern and what it misses, an evaluation threshold for a fallback model with Wilson intervals and a sample-size estimate, and a production-readiness check over a sample configuration.
All records, prices, bills and evaluation outcomes are simulated or invented by the lab; no Bedrock, Azure OpenAI or Vertex AI data is used, the lesson's own checklist was not supplied so the checklist here is a teaching list, and nothing says a configuration is compliant with any law or agreement.
"""
import math
import random
import re
import sqlite3
from collections import defaultdict


def percentile(values, f):
    o = sorted(values)
    pos = f * (len(o) - 1)
    lo, hi = math.floor(pos), math.ceil(pos)
    return o[lo] * (1 - (pos - lo)) + o[hi] * (pos - lo)


BASE_MS = {"classification": 350, "summarization": 900}


def make_records(n, seed, mix, slow_factor):
    rng = random.Random(seed)
    out = []
    for i in range(n):
        wl = "classification" if rng.random() < mix else "summarization"
        provider = "A"
        out.append({"provider": provider, "workload": wl, "team": rng.choice(["support", "engineering", "finance"]),
                    "latency": rng.lognormvariate(math.log(BASE_MS[wl] * slow_factor), 0.35)})
    return out


def wilson(k, n, z=1.96):
    p = k / n
    d = 1 + z * z / n
    c = (p + z * z / (2 * n)) / d
    h = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / d
    return c - h, c + h


def needed_n(p1, p2, z_a=1.96, z_b=0.84):
    pbar = (p1 + p2) / 2
    return ((z_a * math.sqrt(2 * pbar * (1 - pbar)) + z_b * math.sqrt(p1 * (1 - p1) + p2 * (1 - p2))) / (p1 - p2)) ** 2


PATTERNS = {"email": re.compile(r"[\w.+-]+@[\w-]+\.[\w.]+"), "card": re.compile(r"\b(?:\d[ -]*?){13,16}\b"), "phone": re.compile(r"\+?\d[\d\s-]{8,}\d")}


def redact(text):
    for name, pat in PATTERNS.items():
        text = pat.sub(f"[{name}]", text)
    return text


CHECKLIST = [
    ("two usable provider paths", lambda c: len(c["providers"]) >= 2 and all(p["tested_last_30_days"] for p in c["providers"])),
    ("credentials come from managed identity", lambda c: not c["hardcoded_keys"]),
    ("least-privilege roles", lambda c: c["roles_scoped"]),
    ("data classes mapped to approved routes", lambda c: c["sensitivity_policy"]),
    ("fallback evaluated against a quality threshold", lambda c: c["fallback_eval_passed"]),
    ("retries capped with a total deadline", lambda c: c["max_attempts"] <= 3 and c["deadline_ms"] > 0),
    ("circuit breaker configured", lambda c: c["breaker"]),
    ("tool calls idempotent", lambda c: c["idempotency_keys"]),
    ("prompts redacted before general logs", lambda c: c["redaction"]),
    ("percentile latency by provider and workload", lambda c: c["percentile_dashboards"]),
    ("cost attributed per request", lambda c: c["request_level_attribution"]),
    ("quota and capacity alarms", lambda c: c["quota_alarms"]),
]


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely measuring: percentiles by provider and workload, and the pitfall of a mixed workload")
    prov = {"A": make_records(5000, 1, mix=0.80, slow_factor=1.10), "B": make_records(5000, 2, mix=0.20, slow_factor=1.00)}
    print(f"{'provider':8} {'workload':15} {'P50':>7} {'P95':>7} {'P99':>7}")
    for p, recs in prov.items():
        for wl in ("classification", "summarization"):
            v = [r["latency"] for r in recs if r["workload"] == wl]
            print(f"{p:8} {wl:15} {percentile(v, .5):>7.0f} {percentile(v, .95):>7.0f} {percentile(v, .99):>7.0f}")
    for p, recs in prov.items():
        v = [r["latency"] for r in recs]
        print(f"{p:8} {'all requests':15} {percentile(v, .5):>7.0f} {percentile(v, .95):>7.0f} {percentile(v, .99):>7.0f}")
    print("provider A was built to be 10 percent slower than B on both workloads, yet on the combined numbers A looks much faster, because 80 percent of A's requests are short classifications and only 20 percent of B's are; a ranking has to compare the same workload, and the lognormal latencies are simulated and not measured")

    section("2. Genuinely computing: attribution by request against an equal split")
    db = sqlite3.connect(":memory:")
    db.execute("CREATE TABLE usage (request_id INTEGER, team TEXT, product TEXT, input_tokens INTEGER, output_tokens INTEGER)")
    rng = random.Random(3)
    rows = []
    profile = {"support": (400, 100, 6000), "engineering": (2500, 700, 1500), "finance": (6000, 1500, 500)}
    rid = 0
    for team, (tin, tout, count) in profile.items():
        for _ in range(count):
            rid += 1
            rows.append((rid, team, team + "-assistant", int(rng.gauss(tin, tin * .1)), int(rng.gauss(tout, tout * .1))))
    db.executemany("INSERT INTO usage VALUES (?,?,?,?,?)", rows)
    P_IN, P_OUT = 3.0, 15.0
    q = "SELECT team, COUNT(*) AS requests, SUM(input_tokens / 1e6 * ? + output_tokens / 1e6 * ?) AS cost FROM usage GROUP BY team ORDER BY cost DESC"
    res = db.execute(q, (P_IN, P_OUT)).fetchall()
    total = sum(r[2] for r in res)
    print(f"{'team':12} {'requests':>9} {'cost by request':>16} {'share':>7} {'equal split share':>18}")
    for team, cnt, cost in res:
        print(f"{team:12} {cnt:>9} {cost:>16.2f} {cost / total:>7.1%} {1 / 3:>18.1%}")
    counts = {t: c for t, c, _ in res}
    print("split by request count instead:", {t: f"{c / sum(counts.values()):.1%}" for t, c in counts.items()})
    print("the same shared bill allocated by the tokens each request used puts 42.5 percent on engineering, 32.0 on finance and 25.5 on support, an equal split would charge each team 33.3 percent, and a split by request count would charge support 75 percent for 25.5 percent of the use and finance 6.2 percent for 32.0; the query is a GROUP BY like the lesson's illustration run on a toy table, and a real billing export has its own schema")

    section("3. Genuinely computing: reconciling an estimate with a bill")
    billed = total * 1.03 + total * 0.04
    print(f"estimated from tokens {total:.2f} | billed {billed:.2f} | difference {billed - total:.2f} = {(billed - total) / billed:.1%} of the bill")
    print("the estimate was 93.5 percent of a bill that carried a 3 percent price difference and a further 4 percent line that no request could be tied to, so an estimate is a way to attribute cost and the provider's bill stays the authority; the percentages are invented")

    section("4. Genuinely running: redacting prompts before they reach logs")
    samples = ["Contact me at jane.doe@example.com about the refund", "Call +91 98765 43210 tomorrow", "Card 4111 1111 1111 1111 was charged twice", "My name is Jane Doe and I live at 12 Park Street", "Order 77 shipped on Monday"]
    for s in samples:
        print(f"{s!r:58} -> {redact(s)!r}")
    print("the email address, the phone number and the card number were replaced, while the name and the street address in the fourth line went through untouched and the order number was left alone, so pattern redaction catches structured identifiers and misses free-text personal data; it reduces what reaches a log and does not make a log safe")

    section("5. Genuinely computing: when is a fallback good enough")
    for name, k in (("primary", 95), ("fallback", 82), ("fallback B", 90), ("fallback C", 93)):
        lo, hi = wilson(k, 100)
        print(f"{name:11} {k}/100 correct | 95% interval [{lo:.3f}, {hi:.3f}]")
    print("tasks needed per model to tell 95 from 90 percent with about 80 percent power:", math.ceil(needed_n(.95, .90)), "| 95 from 93:", math.ceil(needed_n(.95, .93)), "| 95 from 82:", math.ceil(needed_n(.95, .82)))
    print("with 100 items the interval of the 90 percent fallback overlaps the primary's and the 82 percent one does not, and telling 95 from 90 reliably would take roughly 434 items per model while telling 95 from 93 would take about 2210 and 95 from 82 only 94, so a small evaluation set can show a clearly worse fallback and cannot certify a close one; the outcomes are invented counts")

    section("6. Genuinely running: a production-readiness check on a sample configuration")
    cfg = {"providers": [{"name": "primary", "tested_last_30_days": True}, {"name": "secondary", "tested_last_30_days": False}], "hardcoded_keys": False, "roles_scoped": True,
           "sensitivity_policy": True, "fallback_eval_passed": False, "max_attempts": 3, "deadline_ms": 5000, "breaker": True, "idempotency_keys": True,
           "redaction": True, "percentile_dashboards": True, "request_level_attribution": False, "quota_alarms": True}
    results = [(n, f(cfg)) for n, f in CHECKLIST]
    for n, ok in results:
        print(f"{'PASS' if ok else 'FAIL'}  {n}")
    print(f"{sum(ok for _, ok in results)} of {len(results)} checks pass")
    print("nine of the twelve checks pass, and the three failures are a secondary provider that was not exercised in the last 30 days, a fallback that has not passed a quality evaluation and cost that is attributed per resource and not per request; the checklist is a teaching list and a passing configuration is not a finding of compliance")


if __name__ == "__main__":
    main()
