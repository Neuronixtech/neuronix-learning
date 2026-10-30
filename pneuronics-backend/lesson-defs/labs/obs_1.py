"""Teaching implementation (our own): agent observability foundations - spans, traces, sessions, a trace collector, token and latency summaries."""
import random
import statistics
import time
import uuid
from collections import defaultdict
from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Span:
    span_id: str
    trace_id: str
    session_id: Optional[str]
    name: str
    parent_id: Optional[str] = None
    latency_ms: float = 0.0
    attributes: dict = field(default_factory=dict)


class TraceCollector:
    def __init__(self, indexed=False, dedupe=False):
        self.spans, self.indexed, self.dedupe = [], indexed, dedupe
        self.by_trace, self.seen = defaultdict(list), set()

    def ingest(self, span):
        if self.dedupe:
            if span.span_id in self.seen:
                return False
            self.seen.add(span.span_id)
        self.spans.append(span)
        if self.indexed:
            self.by_trace[span.trace_id].append(span)
        return True

    def get_trace(self, trace_id):
        if self.indexed:
            return list(self.by_trace[trace_id])
        return [s for s in self.spans if s.trace_id == trace_id]

    def get_session(self, session_id):
        traces = defaultdict(list)
        for s in self.spans:
            if s.session_id == session_id:
                traces[s.trace_id].append(s)
        return dict(traces)


def make_run(c, session, question, prompt_version="v1", rng=None, tokens_in=40, tokens_out=60, drop_session=False, drop_parent=False):
    rng = rng or random.Random(0)
    trace = uuid.uuid4().hex[:12]
    sid = None if drop_session else session
    root = Span(uuid.uuid4().hex[:8], trace, sid, "agent.run", None, rng.uniform(300, 900), {"question": question})
    retr = Span(uuid.uuid4().hex[:8], trace, sid, "retrieval", None if drop_parent else root.span_id, rng.uniform(40, 120), {"docs": 3})
    llm = Span(uuid.uuid4().hex[:8], trace, sid, "llm.call", root.span_id, rng.uniform(200, 700),
               {"prompt_version": prompt_version, "model": "model-a", "tokens_in": tokens_in, "tokens_out": tokens_out})
    for s in (root, retr, llm):
        c.ingest(s)
    return trace


def section(t):
    print(f"\n--- {t} ---")


def main():
    rng = random.Random(41)

    section("1. Traces and sessions from a few runs")
    c = TraceCollector()
    t1 = make_run(c, "sess-1", "Where is order 52?", rng=rng)
    t2 = make_run(c, "sess-1", "And when will it arrive?", rng=rng)
    t3 = make_run(c, "sess-2", "Refund policy?", rng=rng)
    print("spans:", len(c.spans), "| trace", t1, "has", len(c.get_trace(t1)), "spans")
    sess = c.get_session("sess-1")
    print("session sess-1 ->", {k: len(v) for k, v in sess.items()})
    print("a session groups traces and a trace groups spans; a session is not always one conversation, only whatever id the application chooses")

    section("2. Genuinely checking: spans that lose their session or parent")
    c = TraceCollector()
    make_run(c, "sess-1", "q1", rng=rng)
    make_run(c, "sess-1", "q2", rng=rng, drop_session=True)
    make_run(c, "sess-1", "q3", rng=rng, drop_parent=True)
    sess = c.get_session("sess-1")
    print("runs started:", 3, "| traces the session query can see:", len(sess), "| spans in the collector:", len(c.spans))
    ids = {s.span_id for s in c.spans}
    orphans = [s for s in c.spans if s.parent_id and s.parent_id not in ids]
    nop = [s for s in c.spans if s.parent_id is None]
    print("spans with no parent (roots):", len(nop), "of which expected 3 | spans whose parent is missing:", len(orphans))
    print("a run whose spans lost the session id vanished from the session view with no error, and a span without its parent id looks like a second root in its own trace")

    section("3. Genuinely measuring: a double-delivered batch (at-least-once export) with and without dedupe")
    for dedupe in (False, True):
        c = TraceCollector(dedupe=dedupe)
        spans = []
        tmp = TraceCollector()
        for i in range(100):
            make_run(tmp, "s", f"q{i}", rng=rng)
        for s in tmp.spans:
            c.ingest(s)
        for s in tmp.spans:  # exporter retried the whole batch
            c.ingest(s)
        tokens = sum(s.attributes.get("tokens_in", 0) + s.attributes.get("tokens_out", 0) for s in c.spans)
        print(f"dedupe by span_id={dedupe!s:5} spans stored {len(c.spans):>4} | total tokens reported {tokens:>6} (true value 10000)")
    print("a retry that delivers the same batch twice doubled every count until the collector rejected repeated span ids")

    section("4. Genuinely measuring: counting tokens by words versus by characters (hand-written samples)")
    samples = ["Where is order 52?", "Your order is in transit and should arrive tomorrow.", "Unterminated https://example.com/a/very/long/path?x=1&y=2",
               "naïve café résumé", "ಆರ್ಡರ್ 52 ಎಲ್ಲಿದೆ?", "def f(x): return x**2 + 1"]
    print(f"{'text':56} {'words':>6} {'chars/4':>8}")
    for s in samples:
        print(f"{s[:54]:56} {len(s.split()):>6} {len(s) // 4:>8}")
    print("the two crude estimates agree on 3 of 6 samples, differ by about 1.4 times on the sentence and by 7 times on the URL; neither knows the model's tokenizer, so token counts for cost have to come from the provider's usage field")

    section("5. Genuinely measuring: mean versus percentiles for latency (latencies ASSUMED, seed 6, 5000 runs)")
    rng = random.Random(6)
    lat = [rng.lognormvariate(6.0, 0.5) for _ in range(5000)] + [rng.uniform(4000, 9000) for _ in range(100)]
    lat_sorted = sorted(lat)
    print(f"mean {statistics.mean(lat):.0f} ms | median {statistics.median(lat):.0f} ms | p95 {lat_sorted[int(.95 * len(lat))]:.0f} ms | p99 {lat_sorted[int(.99 * len(lat))]:.0f} ms | max {max(lat):.0f} ms")
    base = sorted(lat[:5000])
    print(f"without the 100 outliers (2 percent, assumed): mean {statistics.mean(base):.0f} ms | median {statistics.median(base):.0f} ms | p99 {base[int(.99 * len(base))]:.0f} ms")
    print("the outliers moved the mean and left the median almost where it was; the p99 shows them most clearly")

    section("6. Genuinely measuring: head sampling and rare failures (assumed 1 percent failure rate, seed 9)")
    rng = random.Random(9)
    for rate in (1.0, 0.25, 0.10, 0.01):
        trials, found = 2000, 0
        for _ in range(trials):
            errors = sum(rng.random() < 0.01 for _ in range(200))
            kept_errors = sum(1 for _ in range(errors) if rng.random() < rate)
            found += kept_errors > 0
        print(f"sample {rate:>5.0%} of traces: in 200-run windows, at least one failed trace was kept in {found / trials:.1%} of windows")
    print("even keeping everything, only 87.7 percent of windows contain a failure at all (1 - 0.99^200 = 86.6 percent expected); at 10 percent sampling only 18.6 percent of windows kept one, so failures and slow runs usually need to be kept by rule, not by chance")

    section("7. Genuinely measuring: finding one trace by scanning versus an index")
    for n_runs in (1_000, 10_000, 40_000):
        c1, c2 = TraceCollector(), TraceCollector(indexed=True)
        target = None
        for i in range(n_runs):
            tid = make_run(c1, "s", "q", rng=rng)
            for s in c1.spans[-3:]:
                c2.ingest(s)
            target = tid
        t0 = time.perf_counter(); c1.get_trace(target); scan = time.perf_counter() - t0
        t0 = time.perf_counter(); c2.get_trace(target); idx = time.perf_counter() - t0
        print(f"{n_runs * 3:>7} spans: list scan {scan * 1000:>8.3f} ms | dict index {idx * 1000:>7.4f} ms")
    print("a scan grows with the number of stored spans; an index keyed by trace id stays flat, which is why trace stores index on trace id")


if __name__ == "__main__":
    main()
