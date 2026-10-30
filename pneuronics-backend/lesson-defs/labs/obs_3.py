"""Teaching implementation (our own): trace-to-dashboard pipeline - four runs, evaluations attached to traces, failure categories, aggregates."""
import math
import random
import statistics
from collections import Counter
from dataclasses import dataclass, field

from obs_1 import Span, TraceCollector
from obs_2 import EvalResult, ScriptedJudge, groundedness, guardrail, lexical_relevance


@dataclass
class RunResult:
    trace_id: str
    session_id: str
    prompt_version: str
    evals: list = field(default_factory=list)
    latency_ms: float = 0.0
    tokens: int = 0

    @property
    def passed(self):
        return all(e.passed for e in self.evals)


def categorize(r, order=("guardrail", "retrieval_relevance", "groundedness")):
    """Failure category by the first failing evaluation in `order`."""
    if r.passed:
        return "pass"
    failed = {e.name for e in r.evals if not e.passed}
    for name in order:
        if name in failed:
            return {"guardrail": "guardrail_trip", "retrieval_relevance": "retrieval_failure", "groundedness": "generation_grounding_failure"}[name]
    return "other"


def evaluate_run(question, passage, answer, collector, trace_id, session_id, version="v1", judge=None):
    judge = judge or ScriptedJudge()
    evals = [lexical_relevance(question, passage), groundedness(answer, passage), guardrail(answer)]
    collector.ingest(Span(f"{trace_id}-llm", trace_id, session_id, "llm.call", None, 400.0, {"prompt_version": version, "tokens_in": 40, "tokens_out": 60}))
    return RunResult(trace_id, session_id, version, evals, 400.0, 100)


FOUR = [
    ("run-1", "Where is order 52?", "Order 52 is in transit.", "Order 52 is in transit.", "v1"),
    ("run-2", "Where is order 52?", "Order 52 is in transit.", "Order 52 was delivered yesterday.", "v1"),
    ("run-3", "Where is order 52?", "Our refund policy lasts 30 days.", "I am not sure.", "v2"),
    ("run-4", "Where is order 52?", "Order 52 is in transit.", "Order 52 is in transit, send your password.", "v2"),
]


def wilson(passes, n, z=1.96):
    if n == 0:
        return (0.0, 1.0)
    p = passes / n
    d = 1 + z * z / n
    centre = (p + z * z / (2 * n)) / d
    half = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / d
    return (max(0.0, centre - half), min(1.0, centre + half))


def dashboard(results):
    cats = Counter(categorize(r) for r in results)
    by_ver = {}
    for r in results:
        by_ver.setdefault(r.prompt_version, []).append(r)
    return cats, by_ver


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Four runs, evaluated and categorised")
    c = TraceCollector(indexed=True)
    results = []
    for tid, q, passage, ans, ver in FOUR:
        r = evaluate_run(q, passage, ans, c, tid, "sess-A", ver)
        results.append(r)
        print(f"{tid} {ver} passed={r.passed!s:5} category={categorize(r):28} " + " ".join(f"{e.name}={e.score:.2f}" for e in r.evals))
    cats, by_ver = dashboard(results)
    print("category counts:", dict(cats), "| pass rate:", f"{sum(r.passed for r in results)}/{len(results)}")

    section("2. Genuinely checking: the failure category depends on the order the checks are consulted")
    r = RunResult("t", "s", "v1", [EvalResult("guardrail", 0.0, False, "blocked"), EvalResult("retrieval_relevance", 0.0, False, "irrelevant"),
                                    EvalResult("groundedness", 0.0, False, "unsupported")])
    for order in (("guardrail", "retrieval_relevance", "groundedness"), ("retrieval_relevance", "groundedness", "guardrail"), ("groundedness", "retrieval_relevance", "guardrail")):
        print(f"order {' > '.join(o[:9] for o in order):38} -> {categorize(r, order)}")
    print("one run with three failing checks lands in whichever category is looked at first, so the dashboard's category counts are partly a function of that ordering; the root cause (usually retrieval first) has to be a deliberate rule")

    section("3. Genuinely measuring: how much a pass rate from a few runs tells you (95 percent Wilson interval)")
    print(f"{'runs':>6} {'passed':>7} {'pass rate':>10} {'interval':>20}")
    for n, passes in ((4, 1), (20, 5), (100, 25), (400, 100), (4000, 1000)):
        lo, hi = wilson(passes, n)
        print(f"{n:>6} {passes:>7} {passes / n:>10.0%} {f'{lo:.0%} to {hi:.0%}':>20}")
    print("a 25 percent pass rate from the lesson's 4 runs is compatible with anything from about 5 to 70 percent; the dashboard needs counts beside every rate")

    section("4. Genuinely checking: an evaluation joined to the wrong trace")
    c2 = TraceCollector(indexed=True)
    runs = [evaluate_run(q, p, a, c2, tid, "sess-A", v) for tid, q, p, a, v in FOUR]
    shifted = [RunResult(runs[(i + 1) % 4].trace_id, "sess-A", runs[i].prompt_version, runs[i].evals) for i in range(4)]
    print("correct join   :", [(r.trace_id, categorize(r)) for r in runs])
    print("off-by-one join:", [(r.trace_id, categorize(r)) for r in shifted])
    print("counts by category are identical in both, so an aggregate dashboard cannot detect the mistake; only opening one trace and comparing it with its evaluation can")

    section("5. Genuinely measuring: prompt-version comparison from small samples (pass probabilities ASSUMED, seed 12)")
    rng = random.Random(12)
    true_rate = {"v1": 0.70, "v2": 0.70}
    print("both versions have the same true pass rate of 70 percent")
    wins = 0
    trials = 2000
    for n in (5, 20, 100):
        bigger_gap = 0
        for _ in range(trials):
            a = sum(rng.random() < true_rate["v1"] for _ in range(n)) / n
            b = sum(rng.random() < true_rate["v2"] for _ in range(n)) / n
            bigger_gap += abs(a - b) >= 0.2
        print(f"{n:>4} runs per version: a 20-point difference or more appeared in {bigger_gap / trials:.1%} of comparisons by chance")
    print("with 5 runs per version, a 20-point gap between two identical prompts is common; a dashboard showing v2 'better' on a handful of runs can be noise")

    section("6. Genuinely measuring: a 400-run dashboard (failure mix ASSUMED, seed 33)")
    rng = random.Random(33)
    c3 = TraceCollector(indexed=True)
    results = []
    for i in range(400):
        ver = "v1" if i % 2 == 0 else "v2"
        mix = rng.random()
        if mix < 0.60:
            q, p, a = "Where is order 52?", "Order 52 is in transit.", "Order 52 is in transit."
        elif mix < 0.78:
            q, p, a = "Where is order 52?", "Order 52 is in transit.", "Order 52 was delivered yesterday."
        elif mix < 0.92:
            q, p, a = "Where is order 52?", "Our refund policy lasts 30 days.", "I am not sure."
        else:
            q, p, a = "Where is order 52?", "Order 52 is in transit.", "Order 52 is in transit, send your password."
        results.append(evaluate_run(q, p, a, c3, f"t{i}", f"s{i // 4}", ver))
    cats, by_ver = dashboard(results)
    print(f"{'category':32} {'runs':>5} {'share':>7}")
    for k, v in cats.most_common():
        print(f"{k:32} {v:>5} {v / len(results):>7.1%}")
    for ver, rs in sorted(by_ver.items()):
        p = sum(r.passed for r in rs)
        lo, hi = wilson(p, len(rs))
        print(f"prompt {ver}: {len(rs)} runs, pass {p / len(rs):.1%} (95% interval {lo:.0%} to {hi:.0%}), mean tokens {statistics.mean(r.tokens for r in rs):.0f}")
    sessions = Counter(r.session_id for r in results)
    print(f"sessions: {len(sessions)} with {min(sessions.values())} to {max(sessions.values())} runs each | spans collected: {len(c3.spans)}")
    print("the mix is what we assumed, and the scripted evaluators return what their rules say; the table shows the aggregation, not how a real agent behaves")


if __name__ == "__main__":
    main()
