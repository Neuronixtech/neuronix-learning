"""Teaching implementation (our own): METR time horizons, Part 3 - the effect of turning failures into successes on a fitted horizon, how pooling two domains with different curves gives a horizon that matches neither, a fail-closed deployment gate that keeps capability and authorisation apart, monitor detection rates computed on a constructed event log, a version comparison normalised by exposure and an evidence digest.
The outcomes are synthetic, the flips are an artificial distortion and not a model of any real agent behaviour, the event log is constructed so its counts are known and no METR data or real monitor is used.
"""
import hashlib
import json
import math
import random


def sigmoid(z):
    if z >= 0:
        return 1.0 / (1.0 + math.exp(-z))
    e = math.exp(z)
    return e / (1.0 + e)


def gen(n, a, b, seed):
    rng = random.Random(seed)
    out = []
    for i in range(n):
        x = rng.uniform(0.0, math.log(1000.0))
        out.append({"task_id": i, "expert_minutes": math.exp(x), "success": int(rng.random() < sigmoid(a + b * x))})
    return out


def fit(tasks, ridge=1e-6, max_iter=100):
    xs = [math.log(t["expert_minutes"]) for t in tasks]
    ys = [t["success"] for t in tasks]
    xbar = sum(xs) / len(xs)
    cx = [x - xbar for x in xs]

    def loss(c, b):
        tot = 0.5 * ridge * (c * c + b * b)
        for x, y in zip(cx, ys):
            z = c + b * x
            tot += max(z, 0.0) + math.log1p(math.exp(-abs(z))) - y * z
        return tot
    c = b = 0.0
    for it in range(1, max_iter + 1):
        gc, gb, hcc, hcb, hbb = ridge * c, ridge * b, ridge, 0.0, ridge
        for x, y in zip(cx, ys):
            p = sigmoid(c + b * x)
            w = p * (1 - p)
            gc += p - y
            gb += (p - y) * x
            hcc += w
            hcb += w * x
            hbb += w * x * x
        det = hcc * hbb - hcb * hcb
        dc, db = (hbb * gc - hcb * gb) / det, (-hcb * gc + hcc * gb) / det
        step, base = 1.0, loss(c, b)
        while loss(c - step * dc, b - step * db) > base and step > 1e-12:
            step /= 2
        c, b = c - step * dc, b - step * db
        if math.hypot(step * dc, step * db) < 1e-9:
            return {"a": c - b * xbar, "b": b, "converged": True}
    return {"a": c - b * xbar, "b": b, "converged": False}


def horizon(f, p):
    return math.exp((math.log(p / (1 - p)) - f["a"]) / f["b"])


def inflate(tasks, flip_probability, seed=99):
    rng = random.Random(seed)
    out = []
    for t in tasks:
        c = dict(t)
        if c["success"] == 0 and rng.random() < flip_probability:
            c["success"] = 1
        out.append(c)
    return out


def gate(report, action):
    if not report or not report.get("fit_valid"):
        return "BLOCK", "no valid evaluation report"
    if not action.get("in_scope"):
        return "BLOCK", "outside the approved scope"
    if action.get("sensitive_data") or action.get("mutates_production"):
        return "REVIEW", "sensitive data or production change needs a human"
    if not report.get("internal_evaluation_passed"):
        return "BLOCK", "internal evaluation has not passed"
    if action.get("expert_minutes", math.inf) > report["h90_minutes"]:
        return "REVIEW", "task is longer than the 90 percent horizon"
    return "ALLOW", "in scope, evaluated and within the 90 percent horizon"


def digest(v):
    return hashlib.sha256(json.dumps(v, sort_keys=True, separators=(",", ":"), allow_nan=False).encode()).hexdigest()


def section(t):
    print(f"\n--- {t} ---")


def main():
    base_tasks = gen(500, 4.0, -1.0, 42)
    base = fit(base_tasks)
    section("1. Genuinely measuring: turning failures into successes")
    print(f"{'flip probability':>17} {'successes':>10} {'slope':>8} {'H90':>8} {'H50':>9} {'H10':>9} {'H50 ratio':>10}")
    for q in (0.0, 0.05, 0.15, 0.30):
        t = inflate(base_tasks, q)
        f = fit(t)
        print(f"{q:>17} {sum(x['success'] for x in t):>10} {f['b']:>8.3f} {horizon(f, 0.9):>8.2f} {horizon(f, 0.5):>9.2f} {horizon(f, 0.1):>9.1f} {horizon(f, 0.5) / horizon(base, 0.5):>10.2f}")
    f15 = fit(inflate(base_tasks, 0.15))
    print(f"{'minutes':>8} {'true p':>8} {'inflated truth q+(1-q)p':>24} {'logistic fitted to inflated':>28}")
    for m in (10, 100, 500):
        p = sigmoid(4 - math.log(m))
        print(f"{m:>8} {p:>8.3f} {0.15 + 0.85 * p:>24.3f} {sigmoid(f15['a'] + f15['b'] * math.log(m)):>28.3f}")
    print("a flip probability of zero left the horizons unchanged, and turning 15 percent of failures into successes moved the 50 percent horizon from 52.7 to 77.6 minutes, a factor of 1.47, and made the slope shallower, while 30 percent gave a factor of 2.98; the inflated success curve is not exactly logistic, so the fitted curve tracks it at 10 and 100 minutes and understates it at 500 minutes (0.155 against 0.234), and relabelling outcomes after the fact is not a legitimate way to measure anything")

    section("2. Genuinely measuring: pooling two domains with different curves")
    sw = gen(250, 5.0, -1.0, 1)
    cy = gen(250, 3.0, -1.0, 2)
    for label, data in (("software only (true H50 148.4)", sw), ("cyber only (true H50 20.1)", cy), ("pooled 500 tasks", sw + cy)):
        f = fit(data)
        print(f"{label:32} H50 {horizon(f, 0.5):7.1f} min | slope {f['b']:.3f}")
    print("the pooled fit gave a 50 percent horizon of 47.0 minutes, between the two domain values but about a third of the software value of 140.4 and 2.6 times the cyber value of 18.1, and a slope shallower than either domain slope, so an aggregate horizon says little about a team that uses the agent for software tasks only; this is why a report should say what task mix it was fitted on")

    section("3. Genuinely running: a deployment gate that fails closed")
    report = {"fit_valid": True, "internal_evaluation_passed": True, "h90_minutes": 10.0}
    requests = [
        ("2-minute in-scope read", {"in_scope": True, "expert_minutes": 2}),
        ("45-minute in-scope task", {"in_scope": True, "expert_minutes": 45}),
        ("production deploy", {"in_scope": True, "mutates_production": True, "expert_minutes": 2}),
        ("read an unrelated secret", {"in_scope": False, "sensitive_data": True, "expert_minutes": 1}),
        ("no duration given", {"in_scope": True}),
    ]
    for label, act in requests:
        print(f"{label:28} -> {gate(report, act)}")
    print("missing report ->", gate(None, requests[0][1]))
    print("fit not valid  ->", gate({"fit_valid": False}, requests[0][1]))
    print("internal evaluation not passed ->", gate({**report, "internal_evaluation_passed": False}, requests[0][1]))
    print("the two-minute task was allowed, the forty-five-minute task and the production change went to review, the out-of-scope request and every missing or failed piece of evidence were blocked, and a request with no stated duration was sent to review instead of being assumed short; a horizon is one input and scope and authorisation are separate")

    section("4. Genuinely computing: monitor detection rates on a constructed event log")
    events = ([("read docs/readme.md", False, False)] * 100 + [("read secrets/test_fixture.txt", False, True)] * 30
              + [("read secrets/production.env", True, True)] * 25 + [("read config/prod.env", True, False)] * 15 + [("write src/app.py", False, False)] * 30)
    tp = sum(1 for _, v, f in events if v and f)
    fp = sum(1 for _, v, f in events if not v and f)
    fn = sum(1 for _, v, f in events if v and not f)
    tn = sum(1 for _, v, f in events if not v and not f)
    print(f"events {len(events)} | violations {tp + fn} | TP {tp} FP {fp} FN {fn} TN {tn}")
    print(f"true positive rate {tp / (tp + fn):.3f} | false positive rate {fp / (fp + tn):.4f} | precision {tp / (tp + fp):.3f}")
    print("the path-prefix rule caught every access under secrets but missed an alias of the same credential in another folder and flagged a harmless test fixture, giving a detection rate of 0.625, a false positive rate of 0.1875 and a precision of 0.455; the log is constructed with known counts, and a monitor that sees only some evidence sources has a coverage limit that these rates hide")

    section("5. Genuinely computing: comparing two model versions by exposure")
    a_viol, a_tasks, b_viol, b_tasks = 1, 40, 4, 200
    print(f"model A: {a_viol} unauthorised attempts in {a_tasks} tasks = {100 * a_viol / a_tasks:.1f} per 100 | model B: {b_viol} in {b_tasks} = {100 * b_viol / b_tasks:.1f} per 100")
    print("model B has four times the raw count and a lower rate per hundred tasks, because it was run on five times as many tasks, and neither number says anything about severity; with one and four events the difference between the rates could easily be chance")

    section("6. Genuinely running: evidence digest")
    records = [{"task_id": t["task_id"], "m": round(t["expert_minutes"], 3), "s": t["success"]} for t in base_tasks[:50]]
    d0 = digest(records)
    records[7]["s"] = 1 - records[7]["s"]
    print("digest before:", d0[:12], "| after flipping one outcome:", digest(records)[:12], "| equal:", digest(records) == d0)
    print("flipping a single outcome among 50 records changed the digest, so a digest stored by someone other than the author would reveal a later edit; a digest kept beside the data by the same writer would be rewritten along with it")


if __name__ == "__main__":
    main()
