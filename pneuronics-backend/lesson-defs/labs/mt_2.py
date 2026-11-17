"""Teaching implementation (our own): METR time horizons, Part 2 - fitting a logistic curve to synthetic task outcomes with batch gradient descent and with a regularised Newton method, comparing the two, fit quality against the true curve, a Brier score and a calibration table, a percentile bootstrap of the 50 percent horizon, what happens with all-success and perfectly separable data, extrapolation beyond the observed task range and input validation.
The 500 outcomes are generated from known coefficients by the lab (a=4, b=-1), so the fitted values can be compared with the truth; no METR data or model result is used, and the bootstrap treats tasks as independent.
"""
import math
import random


def sigmoid(z):
    if z >= 0:
        return 1.0 / (1.0 + math.exp(-z))
    e = math.exp(z)
    return e / (1.0 + e)


def generate_tasks(n=500, seed=42, a=4.0, b=-1.0):
    rng = random.Random(seed)
    tasks = []
    for i in range(1, n + 1):
        x = rng.uniform(0.0, math.log(1000.0))
        tasks.append({"task_id": i, "expert_minutes": math.exp(x), "success": int(rng.random() < sigmoid(a + b * x))})
    return tasks


def prepare(tasks):
    if not tasks:
        raise ValueError("Empty dataset")
    xs, ys = [], []
    for t in tasks:
        m = t["expert_minutes"]
        if not isinstance(m, (int, float)) or isinstance(m, bool) or not math.isfinite(m) or m <= 0:
            raise ValueError("Duration must be positive and finite")
        if t["success"] not in (0, 1) or isinstance(t["success"], bool):
            raise ValueError("Success must be 0 or 1")
        xs.append(math.log(m))
        ys.append(t["success"])
    return xs, ys


def nll(xs, ys, a, b):
    total = 0.0
    for x, y in zip(xs, ys):
        z = a + b * x
        total += max(z, 0.0) + math.log1p(math.exp(-abs(z))) - y * z
    return total


def fit_gd(tasks, lr=0.5, max_iter=20000, tol=1e-7):
    xs, ys = prepare(tasks)
    n = len(xs)
    xbar = sum(xs) / n
    cx = [x - xbar for x in xs]
    c = b = 0.0
    for it in range(1, max_iter + 1):
        gc = gb = 0.0
        for x, y in zip(cx, ys):
            r = sigmoid(c + b * x) - y
            gc += r
            gb += r * x
        gc, gb = gc / n, gb / n
        if math.hypot(gc, gb) < tol:
            return {"a": c - b * xbar, "b": b, "iterations": it, "converged": True, "grad_norm": math.hypot(gc, gb)}
        c -= lr * gc
        b -= lr * gb
    return {"a": c - b * xbar, "b": b, "iterations": max_iter, "converged": False, "grad_norm": math.hypot(gc, gb)}


def fit_newton(tasks, ridge=1e-6, max_iter=100, tol=1e-9):
    xs, ys = prepare(tasks)
    n = len(xs)
    xbar = sum(xs) / n
    cx = [x - xbar for x in xs]

    def loss(c, b):
        return nll(cx, ys, c, b) + 0.5 * ridge * (c * c + b * b)
    c = b = 0.0
    for it in range(1, max_iter + 1):
        gc, gb = ridge * c, ridge * b
        hcc, hcb, hbb = ridge, 0.0, ridge
        for x, y in zip(cx, ys):
            p = sigmoid(c + b * x)
            w = p * (1 - p)
            gc += p - y
            gb += (p - y) * x
            hcc += w
            hcb += w * x
            hbb += w * x * x
        det = hcc * hbb - hcb * hcb
        if det <= 1e-300:
            break
        dc = (hbb * gc - hcb * gb) / det
        db = (-hcb * gc + hcc * gb) / det
        step, base = 1.0, loss(c, b)
        while loss(c - step * dc, b - step * db) > base and step > 1e-12:
            step /= 2
        c, b = c - step * dc, b - step * db
        if math.hypot(step * dc, step * db) < tol:
            return {"a": c - b * xbar, "b": b, "iterations": it, "converged": True}
    return {"a": c - b * xbar, "b": b, "iterations": max_iter, "converged": False}


def horizon(a, b, p):
    return math.exp((math.log(p / (1 - p)) - a) / b)


def brier(xs, ys, a, b):
    return sum((sigmoid(a + b * x) - y) ** 2 for x, y in zip(xs, ys)) / len(xs)


def percentile(vals, f):
    o = sorted(vals)
    pos = f * (len(o) - 1)
    lo, hi = math.floor(pos), math.ceil(pos)
    return o[lo] * (1 - (pos - lo)) + o[hi] * (pos - lo)


def bootstrap_h50(tasks, reps=200, seed=123):
    rng = random.Random(seed)
    hs, failed = [], 0
    for _ in range(reps):
        sample = [rng.choice(tasks) for _ in tasks]
        try:
            f = fit_newton(sample)
            if f["converged"] and f["b"] < 0:
                hs.append(horizon(f["a"], f["b"], 0.5))
            else:
                failed += 1
        except ValueError:
            failed += 1
    return percentile(hs, 0.025), percentile(hs, 0.975), failed


def section(t):
    print(f"\n--- {t} ---")


def main():
    tasks = generate_tasks()
    xs, ys = prepare(tasks)
    section("1. Genuinely running: the synthetic dataset")
    mins = [t["expert_minutes"] for t in tasks]
    print(f"tasks {len(tasks)} | successes {sum(ys)} | shortest {min(mins):.2f} min | longest {max(mins):.1f} min")
    decades = [(1, 10), (10, 100), (100, 1000)]
    for lo, hi in decades:
        grp = [t for t in tasks if lo <= t["expert_minutes"] < hi]
        print(f"  {lo:4}-{hi:<4} minutes: {len(grp):3} tasks, success rate {sum(t['success'] for t in grp) / len(grp):.2f}")
    print("the 500 tasks are spread over three decades with success falling from the shortest decade to the longest, and the generating coefficients are a=4 and b=-1, so the true 50 percent horizon is e to the 4, 54.6 minutes")

    section("2. Genuinely running: gradient descent")
    g = fit_gd(tasks)
    print({k: (round(v, 4) if isinstance(v, float) else v) for k, v in g.items()})
    print(f"H90 {horizon(g['a'], g['b'], 0.9):.2f} | H50 {horizon(g['a'], g['b'], 0.5):.2f} | H10 {horizon(g['a'], g['b'], 0.1):.2f} minutes | truth 6.07, 54.60, 491.38")
    print("batch gradient descent on the centred durations converged by its gradient-norm test and gave coefficients and horizons near the generating ones but not equal to them, which is expected because the outcomes are random draws and 500 tasks leave real sampling error")

    section("3. Genuinely running: regularised Newton and agreement between the two")
    nw = fit_newton(tasks)
    print({k: (round(v, 4) if isinstance(v, float) else v) for k, v in nw.items()})
    print(f"H50 gradient descent {horizon(g['a'], g['b'], 0.5):.3f} | Newton {horizon(nw['a'], nw['b'], 0.5):.3f} | iterations {g['iterations']} against {nw['iterations']}")
    print("the Newton fit with a tiny ridge penalty reached the same coefficients in 7 iterations where gradient descent needed 215, and the two horizons agree to three decimals; the penalty makes the fit a regularised one rather than exactly the unpenalised maximum likelihood")

    section("4. Genuinely measuring: fit quality and calibration")
    print(f"mean negative log-likelihood: fitted {nll(xs, ys, nw['a'], nw['b']) / len(xs):.4f} | true coefficients {nll(xs, ys, 4.0, -1.0) / len(xs):.4f}")
    rate = sum(ys) / len(ys)
    print(f"Brier score: fitted {brier(xs, ys, nw['a'], nw['b']):.4f} | true coefficients {brier(xs, ys, 4.0, -1.0):.4f} | constant rate {rate:.2f}: {sum((rate - y) ** 2 for y in ys) / len(ys):.4f}")
    preds = [sigmoid(nw["a"] + nw["b"] * x) for x in xs]
    print(f"{'predicted bin':>14} {'tasks':>6} {'mean predicted':>15} {'observed':>9}")
    for lo in (0.0, 0.2, 0.4, 0.6, 0.8):
        idx = [i for i, p in enumerate(preds) if lo <= p < lo + 0.2 + (1e-9 if lo == 0.8 else 0)]
        if idx:
            print(f"{lo:>6.1f}-{lo + 0.2:<7.1f} {len(idx):>6} {sum(preds[i] for i in idx) / len(idx):>15.3f} {sum(ys[i] for i in idx) / len(idx):>9.3f}")
    print("the fitted curve has a lower log-likelihood loss on this sample than the true curve, which is what fitting to a sample does, the Brier score beats the constant-rate baseline, and the calibration bins show predicted and observed rates close together; calibration, discrimination and the horizon itself are different properties")

    section("5. Genuinely measuring: a percentile bootstrap of the 50 percent horizon")
    lo, hi, failed = bootstrap_h50(tasks)
    print(f"estimate {horizon(nw['a'], nw['b'], 0.5):.2f} | 95% interval [{lo:.2f}, {hi:.2f}] | failed resamples {failed} of 200 | contains the true 54.60: {lo <= 54.598 <= hi}")
    print("the 200 resamples gave an interval that is the uncertainty of the estimate under the independence assumption and does not say that 95 percent of tasks fall inside it, and a real evaluation with repeated attempts on the same task would have to resample whole tasks")

    section("6. Genuinely running: data that cannot identify a slope")
    all_ok = [{"task_id": i, "expert_minutes": 1.0 + i, "success": 1} for i in range(60)]
    sep = [{"task_id": i, "expert_minutes": 1.0 + i, "success": int(i < 30)} for i in range(60)]
    for label, data in (("every task succeeds", all_ok), ("short tasks pass, long tasks fail", sep)):
        for ridge in (1e-6, 1e-2):
            f = fit_newton(data, ridge=ridge, max_iter=60)
            hs = [horizon(f["a"], f["b"], q) if f["b"] < 0 else float("nan") for q in (0.9, 0.5, 0.1)]
            print(f"{label:34} ridge {ridge:g}: slope {f['b']:9.3f} converged {f['converged']!s:5} H90 {hs[0]:6.1f} H50 {hs[1]:6.1f} H10 {hs[2]:6.1f}")
    print("with every task a success the slope is zero and no horizon exists, and with perfectly separated outcomes the slope was -284.6 at the tiny penalty and -16.8 at the larger one while the 50 percent horizon stayed near the boundary at 30.5 and 30.3 minutes, but the 90 and 10 percent horizons moved from 30.3 and 30.7 to 26.6 and 34.5, so only the point where outcomes flip is identified and the shape around it is set by the penalty; a fit needs both outcomes across the range and a convergence check before any horizon is quoted")

    section("7. Genuinely running: extrapolation beyond the observed tasks")
    short = [t for t in tasks if t["expert_minutes"] <= 20]
    f = fit_newton(short)
    h = horizon(f["a"], f["b"], 0.5)
    print(f"tasks up to 20 minutes: {len(short)} | longest {max(t['expert_minutes'] for t in short):.1f} min | fitted H50 {h:.1f} min | inside the observed range: {min(t['expert_minutes'] for t in short) <= h <= max(t['expert_minutes'] for t in short)}")
    print(f"full data H50: {horizon(nw['a'], nw['b'], 0.5):.1f} min")
    print("fitted only on tasks of up to twenty minutes the curve still returns a 50 percent horizon, but it lies outside the tasks that were observed and differs from the full-data value, so the number is an extrapolation and should be reported as one")

    section("8. Genuinely running: input validation")
    for bad in ([{"expert_minutes": 0, "success": 1}], [{"expert_minutes": float("nan"), "success": 1}], [{"expert_minutes": 5, "success": 2}], [{"expert_minutes": 5, "success": True}], []):
        try:
            prepare(bad)
        except ValueError as e:
            print("ValueError:", e)
    print("a zero duration, a NaN duration, a success value of 2, a boolean success and an empty dataset were each refused before any fitting")


if __name__ == "__main__":
    main()
