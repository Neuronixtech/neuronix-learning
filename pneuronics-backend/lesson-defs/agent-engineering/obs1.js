module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321553",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Agent Observability: Traces, Evaluations and Dashboards (Part 1 of 3) — Spans, Traces and Sessions",
 "titleKn": "Agent Observability: Traces, Evaluations ಮತ್ತು Dashboards (ಭಾಗ 1 / 3) — Spans, Traces ಮತ್ತು Sessions",
 "desc": "Build a trace collector with spans, traces and sessions, then test lost ids, duplicate delivery, crude token counts, mean versus percentile latency, random sampling of rare failures and scan versus index lookup.",
 "descKn": "Spans, traces ಮತ್ತು sessions ಇರುವ trace collector ನಿರ್ಮಿಸಿ, ನಂತರ ಕಳೆದುಹೋದ ids, ನಕಲು ವಿತರಣೆ, ಒರಟು token ಎಣಿಕೆ, ಸರಾಸರಿ ಮತ್ತು ಶತಮಾನ ವಿಳಂಬ, ಅಪರೂಪದ ವೈಫಲ್ಯಗಳ ಯಾದೃಚ್ಛಿಕ sampling ಮತ್ತು ಸ್ಕ್ಯಾನ್ ವಿರುದ್ಧ index ಹುಡುಕಾಟ ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Distinguish operational from semantic success.",
  "Group spans into traces and traces into sessions.",
  "Dedupe repeated deliveries.",
  "Read latency as percentiles.",
  "Keep failures by rule when sampling."
 ],
 "objectivesKn": [
  "ಕಾರ್ಯಾಚರಣೆಯ ಮತ್ತು ಅರ್ಥಪೂರ್ಣ ಯಶಸ್ಸು ಬೇರ್ಪಡಿಸಿ.",
  "Spans ಅನ್ನು traces ಆಗಿ, traces ಅನ್ನು sessions ಆಗಿ ಗುಂಪು ಮಾಡಿ.",
  "ಪುನರಾವರ್ತಿತ ವಿತರಣೆಗಳನ್ನು dedupe ಮಾಡಿ.",
  "ವಿಳಂಬವನ್ನು ಶತಮಾನಗಳಾಗಿ ಓದಿ.",
  "Sampling ನಲ್ಲಿ ವೈಫಲ್ಯಗಳನ್ನು ನಿಯಮದಿಂದ ಉಳಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Agent Observability: Traces, Evaluations and Dashboards (Part 1 of 3)",
    "textKn": "Agent Observability: Traces, Evaluations ಮತ್ತು Dashboards (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: spans, traces, sessions and a trace collector. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind Langfuse, Phoenix and Opik style agent observability, not the real software, and agents are scripted, the judge is a deterministic stand-in and no platform is called, so no real LLM behaviour is measured. The pasted lesson describes agent observability and the Langfuse, Phoenix and Opik platforms at a conceptual level; this lab builds a small collector and does not call or compare those products. Latency, failure-rate and sampling inputs are assumptions. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: spans, traces, sessions ಮತ್ತು trace collector. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು Langfuse, Phoenix ಮತ್ತು Opik ಶೈಲಿಯ agent observability ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು agents ಸ್ಕ್ರಿಪ್ಟ್, judge ನಿರ್ಧಾರಿತ ಬದಲಿ ಮತ್ತು ಯಾವುದೇ platform ಕರೆಯಲ್ಪಡುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಲೆಸನ್ agent observability ಮತ್ತು Langfuse, Phoenix, Opik platforms ಅನ್ನು ಪರಿಕಲ್ಪನಾ ಮಟ್ಟದಲ್ಲಿ ವಿವರಿಸುತ್ತದೆ; ಈ ಲ್ಯಾಬ್ ಚಿಕ್ಕ collector ನಿರ್ಮಿಸುತ್ತದೆ ಮತ್ತು ಆ ಉತ್ಪನ್ನಗಳನ್ನು ಕರೆಯುವುದಿಲ್ಲ ಅಥವಾ ಹೋಲಿಸುವುದಿಲ್ಲ. ವಿಳಂಬ, ವೈಫಲ್ಯ ದರ ಮತ್ತು sampling ಇನ್‌ಪುಟ್‌ಗಳು ಊಹೆಗಳು. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Seeing Inside an Agent Run",
    "textKn": "Agent ಓಟದ ಒಳಗೆ ನೋಡುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Operational Versus Semantic Success",
    "headingKn": "ಕಾರ್ಯಾಚರಣೆಯ ಯಶಸ್ಸು ಮತ್ತು ಅರ್ಥಪೂರ್ಣ ಯಶಸ್ಸು",
    "bodyEn": "An agent can return HTTP 200 quickly and still give a wrong answer, so ordinary logs and uptime are not enough. Agent observability records each run as a trace of spans (retrieval, model call, tool call) with ids, timing, token counts and prompt versions, and groups traces into sessions. This part builds a collector and then tests where such data goes wrong: lost ids, duplicate delivery, crude token counts, averages that hide tails, sampling that drops failures, and slow lookups.",
    "bodyKn": "Agent ವೇಗವಾಗಿ HTTP 200 ಮರಳಿಸಿ ಇನ್ನೂ ತಪ್ಪು ಉತ್ತರ ನೀಡಬಹುದು, ಆದ್ದರಿಂದ ಸಾಮಾನ್ಯ ಲಾಗ್‌ಗಳು ಮತ್ತು uptime ಸಾಕಾಗುವುದಿಲ್ಲ. Agent observability ಪ್ರತಿ ಓಟವನ್ನು ids, ಸಮಯ, token ಎಣಿಕೆ ಮತ್ತು prompt ಆವೃತ್ತಿಗಳಿರುವ spans (retrieval, ಮಾದರಿ ಕರೆ, tool ಕರೆ) ನ trace ಆಗಿ ದಾಖಲಿಸಿ traces ಅನ್ನು sessions ಆಗಿ ಗುಂಪು ಮಾಡುತ್ತದೆ. ಈ ಭಾಗ collector ನಿರ್ಮಿಸಿ ಅಂತಹ ದತ್ತಾಂಶ ಎಲ್ಲಿ ತಪ್ಪುತ್ತದೆ ಎಂದು ಪರೀಕ್ಷಿಸುತ್ತದೆ: ಕಳೆದುಹೋದ ids, ನಕಲು ವಿತರಣೆ, ಒರಟು token ಎಣಿಕೆ, ಬಾಲ ಮರೆಮಾಡುವ ಸರಾಸರಿಗಳು, ವೈಫಲ್ಯ ಬಿಡುವ sampling ಮತ್ತು ನಿಧಾನ ಹುಡುಕಾಟ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Session, Trace, Span",
    "headingKn": "Session, Trace, Span",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Session, trace, span</text><rect x=\"90\" y=\"24\" width=\"120\" height=\"32\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"39\" fill=\"#e2e8f0\" text-anchor=\"middle\">session</text><text x=\"150\" y=\"51\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">many traces</text><rect x=\"90\" y=\"74\" width=\"120\" height=\"32\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"89\" fill=\"#e2e8f0\" text-anchor=\"middle\">trace</text><text x=\"150\" y=\"101\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">one run</text><rect x=\"10\" y=\"126\" width=\"80\" height=\"32\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"50\" y=\"141\" fill=\"#e2e8f0\" text-anchor=\"middle\">retrieval</text><text x=\"50\" y=\"153\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">span</text><rect x=\"110\" y=\"126\" width=\"80\" height=\"32\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"141\" fill=\"#e2e8f0\" text-anchor=\"middle\">llm.call</text><text x=\"150\" y=\"153\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">span</text><rect x=\"210\" y=\"126\" width=\"80\" height=\"32\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"250\" y=\"141\" fill=\"#e2e8f0\" text-anchor=\"middle\">tool</text><text x=\"250\" y=\"153\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">span</text><path d=\"M150,56 V74 M130,106 L50,126 M150,106 V126 M170,106 L250,126\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">ids at each level make the grouping possible</text></svg>",
    "captionEn": "Each level carries an id that lets data be grouped upward.",
    "captionKn": "ಪ್ರತಿ ಹಂತ ಮೇಲ್ಮುಖ ಗುಂಪು ಮಾಡಲು ಅವಕಾಶ ನೀಡುವ id ಹೊತ್ತಿದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "What each level answers",
    "headingKn": "ಪ್ರತಿ ಹಂತ ಏನು ಉತ್ತರಿಸುತ್ತದೆ",
    "headers": [
     "Level",
     "Question",
     "Id"
    ],
    "rows": [
     [
      "span",
      "what did this step do and how long",
      "span_id"
     ],
     [
      "trace",
      "what happened in this run",
      "trace_id"
     ],
     [
      "session",
      "what happened across this user's runs",
      "session_id (application-defined)"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Collector",
    "textKn": "Collector ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "obs_1.py",
    "headingEn": "Span, TraceCollector and make_run",
    "headingKn": "Span, TraceCollector ಮತ್ತು make_run",
    "descEn": "A Span holds ids, name, latency and attributes such as prompt_version and token counts. TraceCollector ingests spans, optionally rejects repeated span ids and optionally indexes by trace id, and answers get_trace and get_session. make_run emits a root, a retrieval and an LLM span, with switches to drop the session id or the parent id.",
    "descKn": "Span ids, ಹೆಸರು, ವಿಳಂಬ ಮತ್ತು prompt_version ಹಾಗೂ token ಎಣಿಕೆಯಂತಹ attributes ಹೊಂದಿದೆ. TraceCollector spans ಸ್ವೀಕರಿಸಿ, ಐಚ್ಛಿಕವಾಗಿ ಪುನರಾವರ್ತಿತ span ids ತಿರಸ್ಕರಿಸಿ, ಐಚ್ಛಿಕವಾಗಿ trace id ಮೂಲಕ index ಮಾಡಿ, get_trace ಮತ್ತು get_session ಗೆ ಉತ್ತರಿಸುತ್ತದೆ. make_run root, retrieval ಮತ್ತು LLM span ಹೊರಡಿಸುತ್ತದೆ, session id ಅಥವಾ parent id ಬಿಡುವ ಸ್ವಿಚ್‌ಗಳೊಂದಿಗೆ.",
    "code": "@dataclass\nclass Span:\n    span_id: str\n    trace_id: str\n    session_id: Optional[str]\n    name: str\n    parent_id: Optional[str] = None\n    latency_ms: float = 0.0\n    attributes: dict = field(default_factory=dict)\n\n\nclass TraceCollector:\n    def __init__(self, indexed=False, dedupe=False):\n        self.spans, self.indexed, self.dedupe = [], indexed, dedupe\n        self.by_trace, self.seen = defaultdict(list), set()\n\n    def ingest(self, span):\n        if self.dedupe:\n            if span.span_id in self.seen:\n                return False\n            self.seen.add(span.span_id)\n        self.spans.append(span)\n        if self.indexed:\n            self.by_trace[span.trace_id].append(span)\n        return True\n\n    def get_trace(self, trace_id):\n        if self.indexed:\n            return list(self.by_trace[trace_id])\n        return [s for s in self.spans if s.trace_id == trace_id]\n\n    def get_session(self, session_id):\n        traces = defaultdict(list)\n        for s in self.spans:\n            if s.session_id == session_id:\n                traces[s.trace_id].append(s)\n        return dict(traces)\n\n\ndef make_run(c, session, question, prompt_version=\"v1\", rng=None, tokens_in=40, tokens_out=60, drop_session=False, drop_parent=False):\n    rng = rng or random.Random(0)\n    trace = uuid.uuid4().hex[:12]\n    sid = None if drop_session else session\n    root = Span(uuid.uuid4().hex[:8], trace, sid, \"agent.run\", None, rng.uniform(300, 900), {\"question\": question})\n    retr = Span(uuid.uuid4().hex[:8], trace, sid, \"retrieval\", None if drop_parent else root.span_id, rng.uniform(40, 120), {\"docs\": 3})\n    llm = Span(uuid.uuid4().hex[:8], trace, sid, \"llm.call\", root.span_id, rng.uniform(200, 700),\n               {\"prompt_version\": prompt_version, \"model\": \"model-a\", \"tokens_in\": tokens_in, \"tokens_out\": tokens_out})\n    for s in (root, retr, llm):\n        c.ingest(s)\n    return trace"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "obs_1.py",
    "headingEn": "main(): seven experiments",
    "headingKn": "main(): ಏಳು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() builds traces and sessions, drops ids, double-delivers a batch, compares word and character token estimates, compares mean with percentiles, samples traces at several rates and times a scan against an index.",
    "descKn": "main() traces ಮತ್ತು sessions ನಿರ್ಮಿಸುತ್ತದೆ, ids ಬಿಡುತ್ತದೆ, batch ಅನ್ನು ಎರಡು ಬಾರಿ ತಲುಪಿಸುತ್ತದೆ, ಪದ ಮತ್ತು ಅಕ್ಷರ token ಅಂದಾಜುಗಳನ್ನು ಹೋಲಿಸುತ್ತದೆ, ಸರಾಸರಿಯನ್ನು ಶತಮಾನಗಳೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ, traces ಅನ್ನು ಹಲವು ದರಗಳಲ್ಲಿ sample ಮಾಡುತ್ತದೆ ಮತ್ತು ಸ್ಕ್ಯಾನ್ ಅನ್ನು index ವಿರುದ್ಧ ಸಮಯ ಅಳೆಯುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    rng = random.Random(41)\n\n    section(\"1. Traces and sessions from a few runs\")\n    c = TraceCollector()\n    t1 = make_run(c, \"sess-1\", \"Where is order 52?\", rng=rng)\n    t2 = make_run(c, \"sess-1\", \"And when will it arrive?\", rng=rng)\n    t3 = make_run(c, \"sess-2\", \"Refund policy?\", rng=rng)\n    print(\"spans:\", len(c.spans), \"| trace\", t1, \"has\", len(c.get_trace(t1)), \"spans\")\n    sess = c.get_session(\"sess-1\")\n    print(\"session sess-1 ->\", {k: len(v) for k, v in sess.items()})\n    print(\"a session groups traces and a trace groups spans; a session is not always one conversation, only whatever id the application chooses\")\n\n    section(\"2. Genuinely checking: spans that lose their session or parent\")\n    c = TraceCollector()\n    make_run(c, \"sess-1\", \"q1\", rng=rng)\n    make_run(c, \"sess-1\", \"q2\", rng=rng, drop_session=True)\n    make_run(c, \"sess-1\", \"q3\", rng=rng, drop_parent=True)\n    sess = c.get_session(\"sess-1\")\n    print(\"runs started:\", 3, \"| traces the session query can see:\", len(sess), \"| spans in the collector:\", len(c.spans))\n    ids = {s.span_id for s in c.spans}\n    orphans = [s for s in c.spans if s.parent_id and s.parent_id not in ids]\n    nop = [s for s in c.spans if s.parent_id is None]\n    print(\"spans with no parent (roots):\", len(nop), \"of which expected 3 | spans whose parent is missing:\", len(orphans))\n    print(\"a run whose spans lost the session id vanished from the session view with no error, and a span without its parent id looks like a second root in its own trace\")\n\n    section(\"3. Genuinely measuring: a double-delivered batch (at-least-once export) with and without dedupe\")\n    for dedupe in (False, True):\n        c = TraceCollector(dedupe=dedupe)\n        spans = []\n        tmp = TraceCollector()\n        for i in range(100):\n            make_run(tmp, \"s\", f\"q{i}\", rng=rng)\n        for s in tmp.spans:\n            c.ingest(s)\n        for s in tmp.spans:  # exporter retried the whole batch\n            c.ingest(s)\n        tokens = sum(s.attributes.get(\"tokens_in\", 0) + s.attributes.get(\"tokens_out\", 0) for s in c.spans)\n        print(f\"dedupe by span_id={dedupe!s:5} spans stored {len(c.spans):>4} | total tokens reported {tokens:>6} (true value 10000)\")\n    print(\"a retry that delivers the same batch twice doubled every count until the collector rejected repeated span ids\")\n\n    section(\"4. Genuinely measuring: counting tokens by words versus by characters (hand-written samples)\")\n    samples = [\"Where is order 52?\", \"Your order is in transit and should arrive tomorrow.\", \"Unterminated https://example.com/a/very/long/path?x=1&y=2\",\n               \"naïve café résumé\", \"ಆರ್ಡರ್ 52 ಎಲ್ಲಿದೆ?\", \"def f(x): return x**2 + 1\"]\n    print(f\"{'text':56} {'words':>6} {'chars/4':>8}\")\n    for s in samples:\n        print(f\"{s[:54]:56} {len(s.split()):>6} {len(s) // 4:>8}\")\n    print(\"the two crude estimates agree on 3 of 6 samples, differ by about 1.4 times on the sentence and by 7 times on the URL; neither knows the model's tokenizer, so token counts for cost have to come from the provider's usage field\")\n\n    section(\"5. Genuinely measuring: mean versus percentiles for latency (latencies ASSUMED, seed 6, 5000 runs)\")\n    rng = random.Random(6)\n    lat = [rng.lognormvariate(6.0, 0.5) for _ in range(5000)] + [rng.uniform(4000, 9000) for _ in range(100)]\n    lat_sorted = sorted(lat)\n    print(f\"mean {statistics.mean(lat):.0f} ms | median {statistics.median(lat):.0f} ms | p95 {lat_sorted[int(.95 * len(lat))]:.0f} ms | p99 {lat_sorted[int(.99 * len(lat))]:.0f} ms | max {max(lat):.0f} ms\")\n    base = sorted(lat[:5000])\n    print(f\"without the 100 outliers (2 percent, assumed): mean {statistics.mean(base):.0f} ms | median {statistics.median(base):.0f} ms | p99 {base[int(.99 * len(base))]:.0f} ms\")\n    print(\"the outliers moved the mean and left the median almost where it was; the p99 shows them most clearly\")\n\n    section(\"6. Genuinely measuring: head sampling and rare failures (assumed 1 percent failure rate, seed 9)\")\n    rng = random.Random(9)\n    for rate in (1.0, 0.25, 0.10, 0.01):\n        trials, found = 2000, 0\n        for _ in range(trials):\n            errors = sum(rng.random() < 0.01 for _ in range(200))\n            kept_errors = sum(1 for _ in range(errors) if rng.random() < rate)\n            found += kept_errors > 0\n        print(f\"sample {rate:>5.0%} of traces: in 200-run windows, at least one failed trace was kept in {found / trials:.1%} of windows\")\n    print(\"even keeping everything, only 87.7 percent of windows contain a failure at all (1 - 0.99^200 = 86.6 percent expected); at 10 percent sampling only 18.6 percent of windows kept one, so failures and slow runs usually need to be kept by rule, not by chance\")\n\n    section(\"7. Genuinely measuring: finding one trace by scanning versus an index\")\n    for n_runs in (1_000, 10_000, 40_000):\n        c1, c2 = TraceCollector(), TraceCollector(indexed=True)\n        target = None\n        for i in range(n_runs):\n            tid = make_run(c1, \"s\", \"q\", rng=rng)\n            for s in c1.spans[-3:]:\n                c2.ingest(s)\n            target = tid\n        t0 = time.perf_counter(); c1.get_trace(target); scan = time.perf_counter() - t0\n        t0 = time.perf_counter(); c2.get_trace(target); idx = time.perf_counter() - t0\n        print(f\"{n_runs * 3:>7} spans: list scan {scan * 1000:>8.3f} ms | dict index {idx * 1000:>7.4f} ms\")\n    print(\"a scan grows with the number of stored spans; an index keyed by trace id stays flat, which is why trace stores index on trace id\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Traces and sessions from a few runs ---\nspans: 9 | trace 69f9fe55a904 has 3 spans\nsession sess-1 -> {'69f9fe55a904': 3, 'b456702d5266': 3}\na session groups traces and a trace groups spans; a session is not always one conversation, only whatever id the application chooses\n\n--- 2. Genuinely checking: spans that lose their session or parent ---\nruns started: 3 | traces the session query can see: 2 | spans in the collector: 9\nspans with no parent (roots): 4 of which expected 3 | spans whose parent is missing: 0\na run whose spans lost the session id vanished from the session view with no error, and a span without its parent id looks like a second root in its own trace\n\n--- 3. Genuinely measuring: a double-delivered batch (at-least-once export) with and without dedupe ---\ndedupe by span_id=False spans stored  600 | total tokens reported  20000 (true value 10000)\ndedupe by span_id=True  spans stored  300 | total tokens reported  10000 (true value 10000)\na retry that delivers the same batch twice doubled every count until the collector rejected repeated span ids\n\n--- 4. Genuinely measuring: counting tokens by words versus by characters (hand-written samples) ---\ntext                                                      words  chars/4\nWhere is order 52?                                            4        4\nYour order is in transit and should arrive tomorrow.          9       13\nUnterminated https://example.com/a/very/long/path?x=1&        2       14\nnaïve café résumé                                             3        4\nಆರ್ಡರ್ 52 ಎಲ್ಲಿದೆ?                                            3        4\ndef f(x): return x**2 + 1                                     6        6\nthe two crude estimates agree on 3 of 6 samples, differ by about 1.4 times on the sentence and by 7 times on the URL; neither knows the model's tokenizer, so token counts for cost have to come from the provider's usage field\n\n--- 5. Genuinely measuring: mean versus percentiles for latency (latencies ASSUMED, seed 6, 5000 runs) ---\nmean 578 ms | median 408 ms | p95 1028 ms | p99 6596 ms | max 8984 ms\nwithout the 100 outliers (2 percent, assumed): mean 458 ms | median 404 ms | p99 1254 ms\nthe outliers moved the mean and left the median almost where it was; the p99 shows them most clearly\n\n--- 6. Genuinely measuring: head sampling and rare failures (assumed 1 percent failure rate, seed 9) ---\nsample  100% of traces: in 200-run windows, at least one failed trace was kept in 87.7% of windows\nsample   25% of traces: in 200-run windows, at least one failed trace was kept in 38.8% of windows\nsample   10% of traces: in 200-run windows, at least one failed trace was kept in 18.6% of windows\nsample    1% of traces: in 200-run windows, at least one failed trace was kept in 2.1% of windows\neven keeping everything, only 87.7 percent of windows contain a failure at all (1 - 0.99^200 = 86.6 percent expected); at 10 percent sampling only 18.6 percent of windows kept one, so failures and slow runs usually need to be kept by rule, not by chance\n\n--- 7. Genuinely measuring: finding one trace by scanning versus an index ---\n   3000 spans: list scan    0.105 ms | dict index  0.0016 ms\n  30000 spans: list scan    2.486 ms | dict index  0.0032 ms\n 120000 spans: list scan    9.699 ms | dict index  0.0040 ms\na scan grows with the number of stored spans; an index keyed by trace id stays flat, which is why trace stores index on trace id"
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Reading the Verified Output",
    "textKn": "ಪರಿಶೀಲಿತ Output ಓದುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Lost Ids and Duplicate Delivery Corrupt the Picture Silently",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕಳೆದುಹೋದ ids ಮತ್ತು ನಕಲು ವಿತರಣೆ ಚಿತ್ರವನ್ನು ಮೌನವಾಗಿ ಹಾಳುಮಾಡುತ್ತವೆ",
    "bodyEn": "Section 2: of 3 runs in a session, the session query saw only 2 because one run lost its session id; there were 4 root spans instead of the expected 3 because one span lost its parent id, and no error was raised for either. Section 3: when an exporter retried a whole batch, the collector stored 600 spans instead of 300 and reported 20,000 tokens against a true 10,000; with dedupe on span id it stored 300 and reported 10,000.",
    "bodyKn": "ವಿಭಾಗ 2: ಒಂದು session ನ 3 ಓಟಗಳಲ್ಲಿ session ಪ್ರಶ್ನೆ 2 ಮಾತ್ರ ನೋಡಿತು ಏಕೆಂದರೆ ಒಂದು ಓಟ ತನ್ನ session id ಕಳೆದುಕೊಂಡಿತು; ನಿರೀಕ್ಷಿತ 3 ರ ಬದಲು 4 root spans ಇದ್ದವು ಏಕೆಂದರೆ ಒಂದು span ತನ್ನ parent id ಕಳೆದುಕೊಂಡಿತು, ಮತ್ತು ಎರಡಕ್ಕೂ ದೋಷ ಎತ್ತಲಾಗಲಿಲ್ಲ. ವಿಭಾಗ 3: exporter ಇಡೀ batch ಮರುಪ್ರಯತ್ನಿಸಿದಾಗ collector 300 ರ ಬದಲು 600 spans ಸಂಗ್ರಹಿಸಿ ನಿಜ 10,000 ರ ವಿರುದ್ಧ 20,000 tokens ವರದಿ ಮಾಡಿತು; span id ಮೇಲೆ dedupe ಇದ್ದಾಗ 300 ಸಂಗ್ರಹಿಸಿ 10,000 ವರದಿ ಮಾಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Crude Counts, Averages and Sampling Mislead",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಒರಟು ಎಣಿಕೆಗಳು, ಸರಾಸರಿಗಳು ಮತ್ತು sampling ದಾರಿತಪ್ಪಿಸುತ್ತವೆ",
    "bodyEn": "Section 4: counting tokens by words and by characters gave equal results on 3 of 6 samples, differed by about 1.4 times on a sentence and by 7 times on a URL, so cost should use the provider's usage field. Section 5 (assumed latencies, seed 6): with 2 percent slow outliers the mean was 578 ms against 458 ms without them, the median 408 against 404, and the p99 6,596 against 1,254 ms. Section 6 (assumed 1 percent failure rate): keeping every trace, 87.7 percent of 200-run windows contained a failure at all; keeping 10 percent at random, only 18.6 percent of windows kept one. Section 7: finding one trace took 0.105 ms by scanning 3,000 spans, 2.5 ms at 30,000 and 9.7 ms at 120,000, against 0.002 to 0.004 ms with an index.",
    "bodyKn": "ವಿಭಾಗ 4: tokens ಅನ್ನು ಪದಗಳು ಮತ್ತು ಅಕ್ಷರಗಳಿಂದ ಎಣಿಸಿದಾಗ 6 ಮಾದರಿಗಳಲ್ಲಿ 3 ರಲ್ಲಿ ಸಮ ಫಲಿತಾಂಶ, ವಾಕ್ಯದಲ್ಲಿ ಸುಮಾರು 1.4 ಪಟ್ಟು ಮತ್ತು URL ನಲ್ಲಿ 7 ಪಟ್ಟು ಭಿನ್ನ, ಆದ್ದರಿಂದ ವೆಚ್ಚಕ್ಕೆ provider ನ usage ಕ್ಷೇತ್ರ ಬಳಸಬೇಕು. ವಿಭಾಗ 5 (ಊಹಿಸಿದ ವಿಳಂಬ, seed 6): 2 ಶೇಕಡಾ ನಿಧಾನ ಹೊರಗಿನವುಗಳೊಂದಿಗೆ ಸರಾಸರಿ 578 ms, ಇಲ್ಲದೆ 458 ms, ಮಧ್ಯಮ 408 ವಿರುದ್ಧ 404, ಮತ್ತು p99 6,596 ವಿರುದ್ಧ 1,254 ms. ವಿಭಾಗ 6 (ಊಹಿಸಿದ 1 ಶೇಕಡಾ ವೈಫಲ್ಯ ದರ): ಪ್ರತಿ trace ಉಳಿಸಿದರೂ 200-ಓಟ ಕಿಟಕಿಗಳ 87.7 ಶೇಕಡಾ ಮಾತ್ರ ವೈಫಲ್ಯ ಹೊಂದಿದ್ದವು; 10 ಶೇಕಡಾ ಯಾದೃಚ್ಛಿಕವಾಗಿ ಉಳಿಸಿದಾಗ ಕೇವಲ 18.6 ಶೇಕಡಾ ಕಿಟಕಿಗಳು ಒಂದನ್ನು ಉಳಿಸಿದವು. ವಿಭಾಗ 7: ಒಂದು trace ಹುಡುಕಲು 3,000 spans ಸ್ಕ್ಯಾನ್ ಮಾಡಿದಾಗ 0.105 ms, 30,000 ರಲ್ಲಿ 2.5 ms ಮತ್ತು 120,000 ರಲ್ಲಿ 9.7 ms, index ನೊಂದಿಗೆ 0.002 ರಿಂದ 0.004 ms."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Without ids, timing, token counts and versions on every span, nobody can answer why a run was slow, costly or wrong. The collector is simple, and each shortcut in it (dropped ids, repeated delivery, random sampling) quietly corrupts the numbers a dashboard shows.",
    "bodyKn": "ಪ್ರತಿ span ಮೇಲೆ ids, ಸಮಯ, token ಎಣಿಕೆ ಮತ್ತು ಆವೃತ್ತಿಗಳಿಲ್ಲದೆ ಓಟ ಏಕೆ ನಿಧಾನ, ದುಬಾರಿ ಅಥವಾ ತಪ್ಪು ಎಂದು ಯಾರೂ ಉತ್ತರಿಸಲಾಗದು. Collector ಸರಳ, ಮತ್ತು ಅದರಲ್ಲಿನ ಪ್ರತಿ ಶಾರ್ಟ್‌ಕಟ್ (ಬಿದ್ದ ids, ಪುನರಾವರ್ತಿತ ವಿತರಣೆ, ಯಾದೃಚ್ಛಿಕ sampling) dashboard ತೋರಿಸುವ ಸಂಖ್ಯೆಗಳನ್ನು ಮೌನವಾಗಿ ಹಾಳುಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"sampling 10 percent of traces is enough to see failures.\" At an assumed 1 percent failure rate, only 18.6 percent of 200-run windows kept a failed trace.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"10 ಶೇಕಡಾ traces sample ಮಾಡಿದರೆ ವೈಫಲ್ಯ ನೋಡಲು ಸಾಕು.\" ಊಹಿಸಿದ 1 ಶೇಕಡಾ ವೈಫಲ್ಯ ದರದಲ್ಲಿ 200-ಓಟ ಕಿಟಕಿಗಳ 18.6 ಶೇಕಡಾ ಮಾತ್ರ ವಿಫಲ trace ಉಳಿಸಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Span: one timed step. Trace: one run. Session: a group of traces chosen by the application. Dedupe: ignoring a repeated span id. Percentile: the value a share of runs stay under. Head sampling: deciding to keep a trace at its start.",
    "bodyKn": "Span: ಒಂದು ಸಮಯ ಅಳತೆಯ ಹಂತ. Trace: ಒಂದು ಓಟ. Session: ಅಪ್ಲಿಕೇಶನ್ ಆರಿಸಿದ traces ಗುಂಪು. Dedupe: ಪುನರಾವರ್ತಿತ span id ನಿರ್ಲಕ್ಷಿಸುವುದು. Percentile: ಓಟಗಳ ಪಾಲು ಕೆಳಗೆ ಇರುವ ಮೌಲ್ಯ. Head sampling: trace ಆರಂಭದಲ್ಲಿ ಉಳಿಸಲು ನಿರ್ಧರಿಸುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A session groups traces and a trace groups spans. 2) A run without its session id disappeared from the session view; a span without a parent became a second root. 3) A retried batch doubled spans and tokens until deduped. 4) Word and character token estimates disagreed by up to 7 times. 5) Mean, median and p99 told different stories. 6) Random 10 percent sampling kept a failure in 18.6 percent of windows.",
    "bodyKn": "1) Session traces ಗುಂಪು ಮಾಡುತ್ತದೆ ಮತ್ತು trace spans ಗುಂಪು ಮಾಡುತ್ತದೆ. 2) session id ಇಲ್ಲದ ಓಟ session ನೋಟದಿಂದ ಮಾಯವಾಯಿತು; parent ಇಲ್ಲದ span ಎರಡನೇ root ಆಯಿತು. 3) ಮರುಪ್ರಯತ್ನಿಸಿದ batch dedupe ಆಗುವವರೆಗೆ spans ಮತ್ತು tokens ದ್ವಿಗುಣಗೊಳಿಸಿತು. 4) ಪದ ಮತ್ತು ಅಕ್ಷರ token ಅಂದಾಜುಗಳು 7 ಪಟ್ಟು ವರೆಗೆ ಭಿನ್ನ. 5) ಸರಾಸರಿ, ಮಧ್ಯಮ ಮತ್ತು p99 ಬೇರೆ ಬೇರೆ ಕಥೆ ಹೇಳಿದವು. 6) ಯಾದೃಚ್ಛಿಕ 10 ಶೇಕಡಾ sampling 18.6 ಶೇಕಡಾ ಕಿಟಕಿಗಳಲ್ಲಿ ವೈಫಲ್ಯ ಉಳಿಸಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What happened to a run that lost its session id?",
      "qKn": "session id ಕಳೆದುಕೊಂಡ ಓಟಕ್ಕೆ ಏನಾಯಿತು?",
      "opts": [
       "An error was raised",
       "It vanished from the session view with no error",
       "It moved to another session",
       "It was deleted"
      ],
      "optsKn": [
       "ದೋಷ ಎತ್ತಲಾಯಿತು",
       "ಯಾವುದೇ ದೋಷವಿಲ್ಲದೆ session ನೋಟದಿಂದ ಮಾಯವಾಯಿತು",
       "ಬೇರೆ session ಗೆ ಸರಿಯಿತು",
       "ಅಳಿಸಲಾಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What did a retried batch do to the token total without dedupe?",
      "qKn": "dedupe ಇಲ್ಲದೆ ಮರುಪ್ರಯತ್ನಿಸಿದ batch token ಒಟ್ಟಿಗೆ ಏನು ಮಾಡಿತು?",
      "opts": [
       "Nothing",
       "Reported 20,000 against a true 10,000",
       "Halved it",
       "Zeroed it"
      ],
      "optsKn": [
       "ಏನೂ ಇಲ್ಲ",
       "ನಿಜ 10,000 ವಿರುದ್ಧ 20,000 ವರದಿ ಮಾಡಿತು",
       "ಅರ್ಧ ಮಾಡಿತು",
       "ಶೂನ್ಯ ಮಾಡಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why should cost use the provider's usage field rather than a word count?",
      "qKn": "ವೆಚ್ಚಕ್ಕೆ ಪದ ಎಣಿಕೆಯ ಬದಲು provider ನ usage ಕ್ಷೇತ್ರ ಏಕೆ ಬಳಸಬೇಕು?",
      "opts": [
       "It is shorter",
       "Word and character estimates differed by up to 7 times and neither knows the tokenizer",
       "Words are free",
       "Providers require it"
      ],
      "optsKn": [
       "ಅದು ಚಿಕ್ಕದು",
       "ಪದ ಮತ್ತು ಅಕ್ಷರ ಅಂದಾಜುಗಳು 7 ಪಟ್ಟು ವರೆಗೆ ಭಿನ್ನ ಮತ್ತು ಯಾವುದಕ್ಕೂ tokenizer ತಿಳಿದಿಲ್ಲ",
       "ಪದಗಳು ಉಚಿತ",
       "Providers ಅದನ್ನು ಬೇಡುತ್ತಾರೆ"
      ],
      "correct": 1
     },
     {
      "q": "Which statistic showed the slow outliers most clearly?",
      "qKn": "ನಿಧಾನ ಹೊರಗಿನವುಗಳನ್ನು ಯಾವ ಅಂಕಿ ಅತ್ಯಂತ ಸ್ಪಷ್ಟವಾಗಿ ತೋರಿಸಿತು?",
      "opts": [
       "The median",
       "The p99 (6,596 ms against 1,254 without them)",
       "The count",
       "The minimum"
      ],
      "optsKn": [
       "ಮಧ್ಯಮ",
       "p99 (ಇಲ್ಲದೆ 1,254 ವಿರುದ್ಧ 6,596 ms)",
       "ಎಣಿಕೆ",
       "ಕನಿಷ್ಠ"
      ],
      "correct": 1
     },
     {
      "q": "Why index spans by trace id?",
      "qKn": "spans ಅನ್ನು trace id ಮೂಲಕ ಏಕೆ index ಮಾಡಬೇಕು?",
      "opts": [
       "To save memory",
       "A scan grew from 0.1 to 9.7 ms while the index stayed near 0.003 ms",
       "Indexes are required by Python",
       "To hide spans"
      ],
      "optsKn": [
       "ಮೆಮೊರಿ ಉಳಿಸಲು",
       "ಸ್ಕ್ಯಾನ್ 0.1 ರಿಂದ 9.7 ms ಗೆ ಬೆಳೆಯಿತು, index ಸುಮಾರು 0.003 ms ಆಗಿಯೇ ಉಳಿಯಿತು",
       "Python ಗೆ indexes ಅಗತ್ಯ",
       "spans ಮರೆಮಾಡಲು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
