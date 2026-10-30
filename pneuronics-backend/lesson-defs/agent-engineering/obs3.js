module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321553",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Agent Observability: Traces, Evaluations and Dashboards (Part 3 of 3) — The Trace-to-Dashboard Pipeline",
 "titleKn": "Agent Observability: Traces, Evaluations ಮತ್ತು Dashboards (ಭಾಗ 3 / 3) — Trace-to-Dashboard ಪೈಪ್‌ಲೈನ್",
 "desc": "Run four scripted agent runs through collection, evaluation, categorisation and aggregation, then test category ordering, intervals for small samples, mis-joined evaluations, chance differences between identical prompts and a 400-run dashboard.",
 "descKn": "ನಾಲ್ಕು ಸ್ಕ್ರಿಪ್ಟ್ agent ಓಟಗಳನ್ನು ಸಂಗ್ರಹ, ಮೌಲ್ಯಮಾಪನ, ವರ್ಗೀಕರಣ ಮತ್ತು ಒಟ್ಟುಗೂಡಿಸುವಿಕೆ ಮೂಲಕ ಹಾಯಿಸಿ, ನಂತರ ವರ್ಗ ಕ್ರಮ, ಚಿಕ್ಕ ಮಾದರಿಗಳ ಅಂತರಗಳು, ತಪ್ಪಾಗಿ ಜೋಡಿಸಿದ evaluations, ಒಂದೇ prompts ನಡುವಿನ ಕಾಕತಾಳೀಯ ವ್ಯತ್ಯಾಸಗಳು ಮತ್ತು 400-ಓಟ dashboard ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Attach evaluations to trace ids.",
  "Categorise failures by a deliberate rule.",
  "Report rates with intervals.",
  "Verify joins by opening a trace.",
  "Avoid concluding from tiny samples."
 ],
 "objectivesKn": [
  "Evaluations ಅನ್ನು trace ids ಗೆ ಜೋಡಿಸಿ.",
  "ವೈಫಲ್ಯಗಳನ್ನು ಉದ್ದೇಶಪೂರ್ವಕ ನಿಯಮದಿಂದ ವರ್ಗೀಕರಿಸಿ.",
  "ದರಗಳನ್ನು ಅಂತರಗಳೊಂದಿಗೆ ವರದಿ ಮಾಡಿ.",
  "ಒಂದು trace ತೆರೆದು ಜೋಡಣೆ ಪರಿಶೀಲಿಸಿ.",
  "ಚಿಕ್ಕ ಮಾದರಿಗಳಿಂದ ತೀರ್ಮಾನಿಸುವುದನ್ನು ತಪ್ಪಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Agent Observability: Traces, Evaluations and Dashboards (Part 3 of 3)",
    "textKn": "Agent Observability: Traces, Evaluations ಮತ್ತು Dashboards (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: the complete trace-to-dashboard pipeline. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind Langfuse, Phoenix and Opik style agent observability, not the real software, and agents are scripted, the judge is a deterministic stand-in and no platform is called, so no real LLM behaviour is measured. The four runs mirror the pasted lesson (healthy, grounding failure, retrieval failure, guardrail trip). The 400-run table uses an assumed failure mix and scripted evaluators, so it shows how aggregation behaves and not how a real agent performs. No platform is called. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಸಂಪೂರ್ಣ trace-to-dashboard ಪೈಪ್‌ಲೈನ್. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು Langfuse, Phoenix ಮತ್ತು Opik ಶೈಲಿಯ agent observability ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು agents ಸ್ಕ್ರಿಪ್ಟ್, judge ನಿರ್ಧಾರಿತ ಬದಲಿ ಮತ್ತು ಯಾವುದೇ platform ಕರೆಯಲ್ಪಡುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ನಾಲ್ಕು ಓಟಗಳು ಅಂಟಿಸಿದ ಲೆಸನ್ ಅನ್ನು ಅನುಕರಿಸುತ್ತವೆ (ಆರೋಗ್ಯಕರ, grounding ವೈಫಲ್ಯ, retrieval ವೈಫಲ್ಯ, guardrail ಟ್ರಿಪ್). 400-ಓಟ ಕೋಷ್ಟಕ ಊಹಿಸಿದ ವೈಫಲ್ಯ ಮಿಶ್ರಣ ಮತ್ತು ಸ್ಕ್ರಿಪ್ಟ್ evaluators ಬಳಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಅದು ಒಟ್ಟುಗೂಡಿಸುವಿಕೆ ಹೇಗೆ ವರ್ತಿಸುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ, ನಿಜ agent ಹೇಗೆ ನಿರ್ವಹಿಸುತ್ತದೆ ಎಂದಲ್ಲ. ಯಾವುದೇ platform ಕರೆಯಲ್ಪಡುವುದಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "From Runs to a Dashboard",
    "textKn": "ಓಟಗಳಿಂದ dashboard ಗೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Aggregation Is a Claim About the Data",
    "headingKn": "ಒಟ್ಟುಗೂಡಿಸುವಿಕೆ ದತ್ತಾಂಶದ ಬಗ್ಗೆ ಒಂದು ಹೇಳಿಕೆ",
    "bodyEn": "The pipeline runs an agent, collects its trace, attaches evaluations to the trace id, assigns each failing run a category and aggregates pass rate, category counts and prompt-version comparisons. Each of those steps embeds a choice: the order failures are categorised in, how the results were joined to traces, and how much data a rate is based on. This part builds the pipeline and then tests those choices.",
    "bodyKn": "ಪೈಪ್‌ಲೈನ್ agent ಚಲಾಯಿಸಿ, ಅದರ trace ಸಂಗ್ರಹಿಸಿ, trace id ಗೆ evaluations ಜೋಡಿಸಿ, ವಿಫಲ ಓಟಕ್ಕೆ ವರ್ಗ ನೀಡಿ, ಪಾಸ್ ದರ, ವರ್ಗ ಎಣಿಕೆಗಳು ಮತ್ತು prompt-ಆವೃತ್ತಿ ಹೋಲಿಕೆಗಳನ್ನು ಒಟ್ಟುಗೂಡಿಸುತ್ತದೆ. ಆ ಪ್ರತಿ ಹಂತ ಒಂದು ಆಯ್ಕೆ ಒಳಗೊಂಡಿದೆ: ವೈಫಲ್ಯಗಳನ್ನು ವರ್ಗೀಕರಿಸುವ ಕ್ರಮ, ಫಲಿತಾಂಶಗಳನ್ನು traces ಗೆ ಹೇಗೆ ಜೋಡಿಸಲಾಯಿತು, ಮತ್ತು ದರ ಎಷ್ಟು ದತ್ತಾಂಶದ ಮೇಲೆ ಆಧಾರಿತ. ಈ ಭಾಗ ಪೈಪ್‌ಲೈನ್ ನಿರ್ಮಿಸಿ ಆ ಆಯ್ಕೆಗಳನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Runs, Categories, Aggregates",
    "headingKn": "ಓಟಗಳು, ವರ್ಗಗಳು, ಒಟ್ಟುಗೂಡಿಕೆಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">From runs to a dashboard</text><rect x=\"10\" y=\"40\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">runs</text><text x=\"50\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">trace + evals</text><rect x=\"110\" y=\"40\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">categorise</text><text x=\"150\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">pass or failure type</text><rect x=\"210\" y=\"40\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">aggregate</text><text x=\"250\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">rates + intervals</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">open one trace</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">to check the join</text><path d=\"M90,57 H110 M190,57 H210 M250,74 L190,110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">aggregates cannot show a mis-joined result</text></svg>",
    "captionEn": "Aggregates cannot reveal a mis-joined result.",
    "captionKn": "ಒಟ್ಟುಗೂಡಿಕೆಗಳು ತಪ್ಪಾಗಿ ಜೋಡಿಸಿದ ಫಲಿತಾಂಶವನ್ನು ಬಹಿರಂಗಪಡಿಸಲಾರವು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The four lesson runs",
    "headingKn": "ಲೆಸನ್‌ನ ನಾಲ್ಕು ಓಟಗಳು",
    "headers": [
     "Run",
     "Situation",
     "Category"
    ],
    "rows": [
     [
      "run-1",
      "relevant passage, faithful answer",
      "pass"
     ],
     [
      "run-2",
      "relevant passage, answer says delivered",
      "generation_grounding_failure"
     ],
     [
      "run-3",
      "refund passage for an order question",
      "retrieval_failure"
     ],
     [
      "run-4",
      "answer asks for a password",
      "guardrail_trip"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Pipeline",
    "textKn": "ಪೈಪ್‌ಲೈನ್ ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "obs_3.py",
    "headingEn": "RunResult, categorize, evaluate_run and the Wilson interval",
    "headingKn": "RunResult, categorize, evaluate_run ಮತ್ತು Wilson ಅಂತರ",
    "descEn": "RunResult holds a trace id, a session id, a prompt version and the evaluations; passed is true only if all pass. categorize returns the first failing check in a chosen order. evaluate_run ingests a span and runs relevance, groundedness and the guardrail. wilson gives a 95 percent interval for a pass rate.",
    "descKn": "RunResult trace id, session id, prompt ಆವೃತ್ತಿ ಮತ್ತು evaluations ಹೊಂದಿದೆ; ಎಲ್ಲವೂ ಪಾಸ್ ಆದರೆ ಮಾತ್ರ passed ನಿಜ. categorize ಆಯ್ದ ಕ್ರಮದಲ್ಲಿ ಮೊದಲ ವಿಫಲ ಪರಿಶೀಲನೆ ಮರಳಿಸುತ್ತದೆ. evaluate_run span ಸ್ವೀಕರಿಸಿ relevance, groundedness ಮತ್ತು guardrail ಚಲಾಯಿಸುತ್ತದೆ. wilson ಪಾಸ್ ದರಕ್ಕೆ 95 ಶೇಕಡಾ ಅಂತರ ನೀಡುತ್ತದೆ.",
    "code": "@dataclass\nclass RunResult:\n    trace_id: str\n    session_id: str\n    prompt_version: str\n    evals: list = field(default_factory=list)\n    latency_ms: float = 0.0\n    tokens: int = 0\n\n    @property\n    def passed(self):\n        return all(e.passed for e in self.evals)\n\n\ndef categorize(r, order=(\"guardrail\", \"retrieval_relevance\", \"groundedness\")):\n    \"\"\"Failure category by the first failing evaluation in `order`.\"\"\"\n    if r.passed:\n        return \"pass\"\n    failed = {e.name for e in r.evals if not e.passed}\n    for name in order:\n        if name in failed:\n            return {\"guardrail\": \"guardrail_trip\", \"retrieval_relevance\": \"retrieval_failure\", \"groundedness\": \"generation_grounding_failure\"}[name]\n    return \"other\"\n\n\ndef evaluate_run(question, passage, answer, collector, trace_id, session_id, version=\"v1\", judge=None):\n    judge = judge or ScriptedJudge()\n    evals = [lexical_relevance(question, passage), groundedness(answer, passage), guardrail(answer)]\n    collector.ingest(Span(f\"{trace_id}-llm\", trace_id, session_id, \"llm.call\", None, 400.0, {\"prompt_version\": version, \"tokens_in\": 40, \"tokens_out\": 60}))\n    return RunResult(trace_id, session_id, version, evals, 400.0, 100)\n\n\nFOUR = [\n    (\"run-1\", \"Where is order 52?\", \"Order 52 is in transit.\", \"Order 52 is in transit.\", \"v1\"),\n    (\"run-2\", \"Where is order 52?\", \"Order 52 is in transit.\", \"Order 52 was delivered yesterday.\", \"v1\"),\n    (\"run-3\", \"Where is order 52?\", \"Our refund policy lasts 30 days.\", \"I am not sure.\", \"v2\"),\n    (\"run-4\", \"Where is order 52?\", \"Order 52 is in transit.\", \"Order 52 is in transit, send your password.\", \"v2\"),\n]\n\n\ndef wilson(passes, n, z=1.96):\n    if n == 0:\n        return (0.0, 1.0)\n    p = passes / n\n    d = 1 + z * z / n\n    centre = (p + z * z / (2 * n)) / d\n    half = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / d\n    return (max(0.0, centre - half), min(1.0, centre + half))\n\n\ndef dashboard(results):\n    cats = Counter(categorize(r) for r in results)\n    by_ver = {}\n    for r in results:\n        by_ver.setdefault(r.prompt_version, []).append(r)\n    return cats, by_ver"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "obs_3.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() evaluates the four runs, reorders the category rule, shows interval widths for a 25 percent pass rate, mis-joins evaluations to traces, compares two identical prompts at small sample sizes and builds a 400-run dashboard table.",
    "descKn": "main() ನಾಲ್ಕು ಓಟಗಳನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ, ವರ್ಗ ನಿಯಮ ಮರುಕ್ರಮಗೊಳಿಸುತ್ತದೆ, 25 ಶೇಕಡಾ ಪಾಸ್ ದರದ ಅಂತರ ಅಗಲ ತೋರಿಸುತ್ತದೆ, evaluations ಅನ್ನು traces ಗೆ ತಪ್ಪಾಗಿ ಜೋಡಿಸುತ್ತದೆ, ಎರಡು ಒಂದೇ prompts ಅನ್ನು ಚಿಕ್ಕ ಮಾದರಿ ಗಾತ್ರದಲ್ಲಿ ಹೋಲಿಸುತ್ತದೆ ಮತ್ತು 400-ಓಟ dashboard ಕೋಷ್ಟಕ ನಿರ್ಮಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Four runs, evaluated and categorised\")\n    c = TraceCollector(indexed=True)\n    results = []\n    for tid, q, passage, ans, ver in FOUR:\n        r = evaluate_run(q, passage, ans, c, tid, \"sess-A\", ver)\n        results.append(r)\n        print(f\"{tid} {ver} passed={r.passed!s:5} category={categorize(r):28} \" + \" \".join(f\"{e.name}={e.score:.2f}\" for e in r.evals))\n    cats, by_ver = dashboard(results)\n    print(\"category counts:\", dict(cats), \"| pass rate:\", f\"{sum(r.passed for r in results)}/{len(results)}\")\n\n    section(\"2. Genuinely checking: the failure category depends on the order the checks are consulted\")\n    r = RunResult(\"t\", \"s\", \"v1\", [EvalResult(\"guardrail\", 0.0, False, \"blocked\"), EvalResult(\"retrieval_relevance\", 0.0, False, \"irrelevant\"),\n                                    EvalResult(\"groundedness\", 0.0, False, \"unsupported\")])\n    for order in ((\"guardrail\", \"retrieval_relevance\", \"groundedness\"), (\"retrieval_relevance\", \"groundedness\", \"guardrail\"), (\"groundedness\", \"retrieval_relevance\", \"guardrail\")):\n        print(f\"order {' > '.join(o[:9] for o in order):38} -> {categorize(r, order)}\")\n    print(\"one run with three failing checks lands in whichever category is looked at first, so the dashboard's category counts are partly a function of that ordering; the root cause (usually retrieval first) has to be a deliberate rule\")\n\n    section(\"3. Genuinely measuring: how much a pass rate from a few runs tells you (95 percent Wilson interval)\")\n    print(f\"{'runs':>6} {'passed':>7} {'pass rate':>10} {'interval':>20}\")\n    for n, passes in ((4, 1), (20, 5), (100, 25), (400, 100), (4000, 1000)):\n        lo, hi = wilson(passes, n)\n        print(f\"{n:>6} {passes:>7} {passes / n:>10.0%} {f'{lo:.0%} to {hi:.0%}':>20}\")\n    print(\"a 25 percent pass rate from the lesson's 4 runs is compatible with anything from about 5 to 70 percent; the dashboard needs counts beside every rate\")\n\n    section(\"4. Genuinely checking: an evaluation joined to the wrong trace\")\n    c2 = TraceCollector(indexed=True)\n    runs = [evaluate_run(q, p, a, c2, tid, \"sess-A\", v) for tid, q, p, a, v in FOUR]\n    shifted = [RunResult(runs[(i + 1) % 4].trace_id, \"sess-A\", runs[i].prompt_version, runs[i].evals) for i in range(4)]\n    print(\"correct join   :\", [(r.trace_id, categorize(r)) for r in runs])\n    print(\"off-by-one join:\", [(r.trace_id, categorize(r)) for r in shifted])\n    print(\"counts by category are identical in both, so an aggregate dashboard cannot detect the mistake; only opening one trace and comparing it with its evaluation can\")\n\n    section(\"5. Genuinely measuring: prompt-version comparison from small samples (pass probabilities ASSUMED, seed 12)\")\n    rng = random.Random(12)\n    true_rate = {\"v1\": 0.70, \"v2\": 0.70}\n    print(\"both versions have the same true pass rate of 70 percent\")\n    wins = 0\n    trials = 2000\n    for n in (5, 20, 100):\n        bigger_gap = 0\n        for _ in range(trials):\n            a = sum(rng.random() < true_rate[\"v1\"] for _ in range(n)) / n\n            b = sum(rng.random() < true_rate[\"v2\"] for _ in range(n)) / n\n            bigger_gap += abs(a - b) >= 0.2\n        print(f\"{n:>4} runs per version: a 20-point difference or more appeared in {bigger_gap / trials:.1%} of comparisons by chance\")\n    print(\"with 5 runs per version, a 20-point gap between two identical prompts is common; a dashboard showing v2 'better' on a handful of runs can be noise\")\n\n    section(\"6. Genuinely measuring: a 400-run dashboard (failure mix ASSUMED, seed 33)\")\n    rng = random.Random(33)\n    c3 = TraceCollector(indexed=True)\n    results = []\n    for i in range(400):\n        ver = \"v1\" if i % 2 == 0 else \"v2\"\n        mix = rng.random()\n        if mix < 0.60:\n            q, p, a = \"Where is order 52?\", \"Order 52 is in transit.\", \"Order 52 is in transit.\"\n        elif mix < 0.78:\n            q, p, a = \"Where is order 52?\", \"Order 52 is in transit.\", \"Order 52 was delivered yesterday.\"\n        elif mix < 0.92:\n            q, p, a = \"Where is order 52?\", \"Our refund policy lasts 30 days.\", \"I am not sure.\"\n        else:\n            q, p, a = \"Where is order 52?\", \"Order 52 is in transit.\", \"Order 52 is in transit, send your password.\"\n        results.append(evaluate_run(q, p, a, c3, f\"t{i}\", f\"s{i // 4}\", ver))\n    cats, by_ver = dashboard(results)\n    print(f\"{'category':32} {'runs':>5} {'share':>7}\")\n    for k, v in cats.most_common():\n        print(f\"{k:32} {v:>5} {v / len(results):>7.1%}\")\n    for ver, rs in sorted(by_ver.items()):\n        p = sum(r.passed for r in rs)\n        lo, hi = wilson(p, len(rs))\n        print(f\"prompt {ver}: {len(rs)} runs, pass {p / len(rs):.1%} (95% interval {lo:.0%} to {hi:.0%}), mean tokens {statistics.mean(r.tokens for r in rs):.0f}\")\n    sessions = Counter(r.session_id for r in results)\n    print(f\"sessions: {len(sessions)} with {min(sessions.values())} to {max(sessions.values())} runs each | spans collected: {len(c3.spans)}\")\n    print(\"the mix is what we assumed, and the scripted evaluators return what their rules say; the table shows the aggregation, not how a real agent behaves\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Four runs, evaluated and categorised ---\nrun-1 v1 passed=True  category=pass                         retrieval_relevance=0.75 groundedness=1.00 guardrail=1.00\nrun-2 v1 passed=False category=generation_grounding_failure retrieval_relevance=0.75 groundedness=0.40 guardrail=1.00\nrun-3 v2 passed=False category=retrieval_failure            retrieval_relevance=0.00 groundedness=0.00 guardrail=1.00\nrun-4 v2 passed=False category=guardrail_trip               retrieval_relevance=0.75 groundedness=0.62 guardrail=0.00\ncategory counts: {'pass': 1, 'generation_grounding_failure': 1, 'retrieval_failure': 1, 'guardrail_trip': 1} | pass rate: 1/4\n\n--- 2. Genuinely checking: the failure category depends on the order the checks are consulted ---\norder guardrail > retrieval > groundedn      -> guardrail_trip\norder retrieval > groundedn > guardrail      -> retrieval_failure\norder groundedn > retrieval > guardrail      -> generation_grounding_failure\none run with three failing checks lands in whichever category is looked at first, so the dashboard's category counts are partly a function of that ordering; the root cause (usually retrieval first) has to be a deliberate rule\n\n--- 3. Genuinely measuring: how much a pass rate from a few runs tells you (95 percent Wilson interval) ---\n  runs  passed  pass rate             interval\n     4       1        25%            5% to 70%\n    20       5        25%           11% to 47%\n   100      25        25%           18% to 34%\n   400     100        25%           21% to 29%\n  4000    1000        25%           24% to 26%\na 25 percent pass rate from the lesson's 4 runs is compatible with anything from about 5 to 70 percent; the dashboard needs counts beside every rate\n\n--- 4. Genuinely checking: an evaluation joined to the wrong trace ---\ncorrect join   : [('run-1', 'pass'), ('run-2', 'generation_grounding_failure'), ('run-3', 'retrieval_failure'), ('run-4', 'guardrail_trip')]\noff-by-one join: [('run-2', 'pass'), ('run-3', 'generation_grounding_failure'), ('run-4', 'retrieval_failure'), ('run-1', 'guardrail_trip')]\ncounts by category are identical in both, so an aggregate dashboard cannot detect the mistake; only opening one trace and comparing it with its evaluation can\n\n--- 5. Genuinely measuring: prompt-version comparison from small samples (pass probabilities ASSUMED, seed 12) ---\nboth versions have the same true pass rate of 70 percent\n   5 runs per version: a 20-point difference or more appeared in 52.0% of comparisons by chance\n  20 runs per version: a 20-point difference or more appeared in 15.7% of comparisons by chance\n 100 runs per version: a 20-point difference or more appeared in 0.4% of comparisons by chance\nwith 5 runs per version, a 20-point gap between two identical prompts is common; a dashboard showing v2 'better' on a handful of runs can be noise\n\n--- 6. Genuinely measuring: a 400-run dashboard (failure mix ASSUMED, seed 33) ---\ncategory                          runs   share\npass                               241   60.2%\ngeneration_grounding_failure        68   17.0%\nretrieval_failure                   64   16.0%\nguardrail_trip                      27    6.8%\nprompt v1: 200 runs, pass 61.0% (95% interval 54% to 67%), mean tokens 100\nprompt v2: 200 runs, pass 59.5% (95% interval 53% to 66%), mean tokens 100\nsessions: 100 with 4 to 4 runs each | spans collected: 400\nthe mix is what we assumed, and the scripted evaluators return what their rules say; the table shows the aggregation, not how a real agent behaves"
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
    "headingEn": "Genuinely Found: Categories, Joins and Small Samples All Shape the Dashboard",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ವರ್ಗಗಳು, ಜೋಡಣೆಗಳು ಮತ್ತು ಚಿಕ್ಕ ಮಾದರಿಗಳು ಎಲ್ಲವೂ dashboard ರೂಪಿಸುತ್ತವೆ",
    "bodyEn": "Section 1: the four runs gave pass, generation_grounding_failure, retrieval_failure and guardrail_trip as intended, a 1 of 4 pass rate. Section 2: a run with three failing checks was categorised as guardrail_trip, retrieval_failure or generation_grounding_failure depending only on the order of consultation. Section 4: after shifting each evaluation to the next trace, the category counts stayed identical while each trace now showed another run's verdict, which an aggregate cannot reveal. Section 3: a 25 percent pass rate has a 95 percent interval of 5 to 70 percent at 4 runs, 11 to 47 at 20, 18 to 34 at 100, 21 to 29 at 400 and 24 to 26 at 4,000.",
    "bodyKn": "ವಿಭಾಗ 1: ನಾಲ್ಕು ಓಟಗಳು ಉದ್ದೇಶಿಸಿದಂತೆ pass, generation_grounding_failure, retrieval_failure ಮತ್ತು guardrail_trip ನೀಡಿದವು, 4 ರಲ್ಲಿ 1 ಪಾಸ್ ದರ. ವಿಭಾಗ 2: ಮೂರು ವಿಫಲ ಪರಿಶೀಲನೆಗಳ ಓಟ ಕೇವಲ ಪರಿಶೀಲಿಸುವ ಕ್ರಮವನ್ನು ಅವಲಂಬಿಸಿ guardrail_trip, retrieval_failure ಅಥವಾ generation_grounding_failure ಎಂದು ವರ್ಗೀಕರಿಸಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 4: ಪ್ರತಿ evaluation ಅನ್ನು ಮುಂದಿನ trace ಗೆ ಸರಿಸಿದ ನಂತರ ವರ್ಗ ಎಣಿಕೆಗಳು ಒಂದೇ ಆಗಿದ್ದವು ಆದರೆ ಪ್ರತಿ trace ಈಗ ಇನ್ನೊಂದು ಓಟದ ತೀರ್ಪು ತೋರಿಸಿತು, ಒಟ್ಟುಗೂಡಿಕೆ ಅದನ್ನು ಬಹಿರಂಗಪಡಿಸಲಾರದು. ವಿಭಾಗ 3: 25 ಶೇಕಡಾ ಪಾಸ್ ದರಕ್ಕೆ 95 ಶೇಕಡಾ ಅಂತರ 4 ಓಟಗಳಲ್ಲಿ 5 ರಿಂದ 70, 20 ರಲ್ಲಿ 11 ರಿಂದ 47, 100 ರಲ್ಲಿ 18 ರಿಂದ 34, 400 ರಲ್ಲಿ 21 ರಿಂದ 29 ಮತ್ತು 4,000 ರಲ್ಲಿ 24 ರಿಂದ 26."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Identical Prompts Looked Different, and the Big Table Is Only the Assumed Mix",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಒಂದೇ prompts ಬೇರೆ ಕಂಡವು, ಮತ್ತು ದೊಡ್ಡ ಕೋಷ್ಟಕ ಊಹಿಸಿದ ಮಿಶ್ರಣ ಮಾತ್ರ",
    "bodyEn": "Section 5 (both versions assumed to pass 70 percent of the time, seed 12, 2,000 comparisons): with 5 runs per version, a gap of 20 points or more appeared by chance in 52.0 percent of comparisons, with 20 runs in 15.7 percent and with 100 runs in 0.4 percent. Section 6 (assumed mix, scripted evaluators): 400 runs gave 60.2 percent pass, 17.0 percent generation grounding failure, 16.0 percent retrieval failure and 6.8 percent guardrail trip; prompt v1 passed 61.0 percent (interval 54 to 67) and v2 59.5 percent (53 to 66), over 100 sessions of 4 runs. The table shows the aggregation machinery, not how a real agent behaves.",
    "bodyKn": "ವಿಭಾಗ 5 (ಎರಡೂ ಆವೃತ್ತಿಗಳು 70 ಶೇಕಡಾ ಪಾಸ್ ಎಂದು ಊಹೆ, seed 12, 2,000 ಹೋಲಿಕೆಗಳು): ಪ್ರತಿ ಆವೃತ್ತಿಗೆ 5 ಓಟಗಳೊಂದಿಗೆ 20 ಅಂಕ ಅಥವಾ ಹೆಚ್ಚಿನ ಅಂತರ ಕಾಕತಾಳೀಯವಾಗಿ 52.0 ಶೇಕಡಾ ಹೋಲಿಕೆಗಳಲ್ಲಿ ಕಾಣಿಸಿತು, 20 ಓಟಗಳೊಂದಿಗೆ 15.7 ಶೇಕಡಾ ಮತ್ತು 100 ಓಟಗಳೊಂದಿಗೆ 0.4 ಶೇಕಡಾ. ವಿಭಾಗ 6 (ಊಹಿಸಿದ ಮಿಶ್ರಣ, ಸ್ಕ್ರಿಪ್ಟ್ evaluators): 400 ಓಟಗಳು 60.2 ಶೇಕಡಾ ಪಾಸ್, 17.0 ಶೇಕಡಾ generation grounding ವೈಫಲ್ಯ, 16.0 ಶೇಕಡಾ retrieval ವೈಫಲ್ಯ ಮತ್ತು 6.8 ಶೇಕಡಾ guardrail ಟ್ರಿಪ್ ನೀಡಿದವು; prompt v1 61.0 ಶೇಕಡಾ (ಅಂತರ 54 ರಿಂದ 67) ಮತ್ತು v2 59.5 ಶೇಕಡಾ (53 ರಿಂದ 66) ಪಾಸ್ ಆದವು, 4 ಓಟಗಳ 100 sessions ಮೇಲೆ. ಕೋಷ್ಟಕ ಒಟ್ಟುಗೂಡಿಸುವ ಯಂತ್ರವನ್ನು ತೋರಿಸುತ್ತದೆ, ನಿಜ agent ಹೇಗೆ ವರ್ತಿಸುತ್ತದೆ ಎಂದಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A dashboard is where decisions get made, such as shipping prompt v2 or fixing retrieval first. Whether the categories are ordered sensibly, evaluations are joined to the right traces and rates come with their uncertainty decides whether those decisions follow the data or just the display.",
    "bodyKn": "Dashboard ಎಂದರೆ prompt v2 ಬಿಡುಗಡೆ ಅಥವಾ ಮೊದಲು retrieval ಸರಿಪಡಿಸುವಂತಹ ನಿರ್ಧಾರಗಳಾಗುವ ಸ್ಥಳ. ವರ್ಗಗಳು ಸಮಂಜಸವಾಗಿ ಕ್ರಮಬದ್ಧವಾಗಿವೆಯೇ, evaluations ಸರಿಯಾದ traces ಗೆ ಜೋಡಿಸಲಾಗಿವೆಯೇ ಮತ್ತು ದರಗಳು ಅನಿಶ್ಚಿತತೆಯೊಂದಿಗೆ ಬರುತ್ತವೆಯೇ ಎಂಬುದು ಆ ನಿರ್ಧಾರಗಳು ದತ್ತಾಂಶವನ್ನು ಅನುಸರಿಸುತ್ತವೆಯೇ ಅಥವಾ ಕೇವಲ ಪ್ರದರ್ಶನವನ್ನೇ ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"if the dashboard shows v2 passing more, v2 is better.\" With 5 runs per version, two identical prompts differed by 20 points or more in 52.0 percent of comparisons.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"dashboard v2 ಹೆಚ್ಚು ಪಾಸ್ ಎಂದು ತೋರಿಸಿದರೆ v2 ಉತ್ತಮ.\" ಪ್ರತಿ ಆವೃತ್ತಿಗೆ 5 ಓಟಗಳೊಂದಿಗೆ ಎರಡು ಒಂದೇ prompts 52.0 ಶೇಕಡಾ ಹೋಲಿಕೆಗಳಲ್ಲಿ 20 ಅಂಕ ಅಥವಾ ಹೆಚ್ಚು ಭಿನ್ನವಾದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Failure category: the label a failing run is filed under. Join: attaching an evaluation to its trace by id. Wilson interval: a confidence interval for a proportion. Root cause: the earliest failing component. Aggregate: a count or rate over many runs.",
    "bodyKn": "Failure category: ವಿಫಲ ಓಟ ದಾಖಲಾಗುವ ಲೇಬಲ್. Join: id ಮೂಲಕ evaluation ಅನ್ನು ಅದರ trace ಗೆ ಜೋಡಿಸುವುದು. Wilson interval: ಅನುಪಾತಕ್ಕೆ ವಿಶ್ವಾಸ ಅಂತರ. Root cause: ಮೊದಲ ವಿಫಲ ಘಟಕ. Aggregate: ಹಲವು ಓಟಗಳ ಮೇಲೆ ಎಣಿಕೆ ಅಥವಾ ದರ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The four runs reproduced pass, grounding failure, retrieval failure and guardrail trip. 2) The same failing run took three different categories depending on check order. 3) A 25 percent rate from 4 runs spans 5 to 70 percent. 4) An off-by-one evaluation join left category counts unchanged. 5) Two identical prompts differed by 20 points in 52.0 percent of 5-run comparisons. 6) The 400-run table is an assumed mix pushed through scripted evaluators.",
    "bodyKn": "1) ನಾಲ್ಕು ಓಟಗಳು pass, grounding ವೈಫಲ್ಯ, retrieval ವೈಫಲ್ಯ ಮತ್ತು guardrail ಟ್ರಿಪ್ ಪುನರುತ್ಪಾದಿಸಿದವು. 2) ಅದೇ ವಿಫಲ ಓಟ ಪರಿಶೀಲನೆ ಕ್ರಮದ ಮೇಲೆ ಅವಲಂಬಿಸಿ ಮೂರು ಬೇರೆ ವರ್ಗ ಪಡೆಯಿತು. 3) 4 ಓಟಗಳ 25 ಶೇಕಡಾ ದರ 5 ರಿಂದ 70 ಶೇಕಡಾ ವ್ಯಾಪಿಸುತ್ತದೆ. 4) ಒಂದು-ಸ್ಥಾನ ಸರಿದ evaluation ಜೋಡಣೆ ವರ್ಗ ಎಣಿಕೆಗಳನ್ನು ಬದಲಿಸಲಿಲ್ಲ. 5) ಎರಡು ಒಂದೇ prompts 5-ಓಟ ಹೋಲಿಕೆಗಳ 52.0 ಶೇಕಡಾದಲ್ಲಿ 20 ಅಂಕ ಭಿನ್ನವಾದವು. 6) 400-ಓಟ ಕೋಷ್ಟಕ ಸ್ಕ್ರಿಪ್ಟ್ evaluators ಮೂಲಕ ಹಾಯಿಸಿದ ಊಹಿಸಿದ ಮಿಶ್ರಣ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why did one run get three different categories?",
      "qKn": "ಒಂದು ಓಟ ಮೂರು ಬೇರೆ ವರ್ಗಗಳನ್ನು ಏಕೆ ಪಡೆಯಿತು?",
      "opts": [
       "It was re-run",
       "The category is the first failing check in the order consulted",
       "The judge changed",
       "Spans were dropped"
      ],
      "optsKn": [
       "ಮರುಚಲಾಯಿಸಲಾಯಿತು",
       "ವರ್ಗ ಎಂದರೆ ಪರಿಶೀಲಿಸಿದ ಕ್ರಮದಲ್ಲಿ ಮೊದಲ ವಿಫಲ ಪರಿಶೀಲನೆ",
       "Judge ಬದಲಾಯಿತು",
       "Spans ಬಿದ್ದವು"
      ],
      "correct": 1
     },
     {
      "q": "Why could the aggregate not reveal the off-by-one join?",
      "qKn": "ಒಂದು-ಸ್ಥಾನ ಸರಿದ ಜೋಡಣೆಯನ್ನು ಒಟ್ಟುಗೂಡಿಕೆ ಏಕೆ ಬಹಿರಂಗಪಡಿಸಲಾಗಲಿಲ್ಲ?",
      "opts": [
       "It can",
       "Category counts were identical; only per-trace comparison shows the mismatch",
       "Counts changed",
       "The dashboard crashed"
      ],
      "optsKn": [
       "ಅದು ಮಾಡಬಹುದು",
       "ವರ್ಗ ಎಣಿಕೆಗಳು ಒಂದೇ; ಪ್ರತಿ-trace ಹೋಲಿಕೆ ಮಾತ್ರ ಅಸಾಮರಸ್ಯ ತೋರಿಸುತ್ತದೆ",
       "ಎಣಿಕೆಗಳು ಬದಲಾದವು",
       "Dashboard ಕುಸಿಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What range does a 25 percent pass rate from 4 runs cover?",
      "qKn": "4 ಓಟಗಳ 25 ಶೇಕಡಾ ಪಾಸ್ ದರ ಯಾವ ವ್ಯಾಪ್ತಿ ಆವರಿಸುತ್ತದೆ?",
      "opts": [
       "24 to 26",
       "5 to 70 percent",
       "20 to 30",
       "0 to 5"
      ],
      "optsKn": [
       "24 ರಿಂದ 26",
       "5 ರಿಂದ 70 ಶೇಕಡಾ",
       "20 ರಿಂದ 30",
       "0 ರಿಂದ 5"
      ],
      "correct": 1
     },
     {
      "q": "How often did two identical prompts differ by 20 points with 5 runs each?",
      "qKn": "ತಲಾ 5 ಓಟಗಳೊಂದಿಗೆ ಎರಡು ಒಂದೇ prompts ಎಷ್ಟು ಬಾರಿ 20 ಅಂಕ ಭಿನ್ನವಾದವು?",
      "opts": [
       "0.4 percent",
       "52.0 percent",
       "15.7 percent",
       "Never"
      ],
      "optsKn": [
       "0.4 ಶೇಕಡಾ",
       "52.0 ಶೇಕಡಾ",
       "15.7 ಶೇಕಡಾ",
       "ಎಂದೂ ಇಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "What does the 400-run table demonstrate?",
      "qKn": "400-ಓಟ ಕೋಷ್ಟಕ ಏನು ಪ್ರದರ್ಶಿಸುತ್ತದೆ?",
      "opts": [
       "How a real agent performs",
       "How aggregation behaves on an assumed mix and scripted evaluators",
       "A benchmark result",
       "Customer data"
      ],
      "optsKn": [
       "ನಿಜ agent ಹೇಗೆ ನಿರ್ವಹಿಸುತ್ತದೆ",
       "ಊಹಿಸಿದ ಮಿಶ್ರಣ ಮತ್ತು ಸ್ಕ್ರಿಪ್ಟ್ evaluators ಮೇಲೆ ಒಟ್ಟುಗೂಡಿಸುವಿಕೆ ಹೇಗೆ ವರ್ತಿಸುತ್ತದೆ",
       "benchmark ಫಲಿತಾಂಶ",
       "ಗ್ರಾಹಕ ದತ್ತಾಂಶ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
