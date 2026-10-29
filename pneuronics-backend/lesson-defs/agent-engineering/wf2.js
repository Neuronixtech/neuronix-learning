module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b32152f",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Anthropic's Workflow Patterns: Simple Over Complex (Part 2 of 3) — Parallelization and Orchestrator-Workers",
 "titleKn": "Anthropic ನ Workflow Patterns: ಸರಳ ಸಂಕೀರ್ಣಕ್ಕಿಂತ ಮೇಲು (ಭಾಗ 2 / 3) — ಸಮಾನಾಂತರೀಕರಣ ಮತ್ತು Orchestrator-Workers",
 "desc": "Build parallel voting and sectioning with measured latency, an orchestrator-workers pattern with a registry boundary, and find a real thread race, tie-break accidents, all-or-nothing failure and substring worker misselection.",
 "descKn": "ಅಳೆದ ವಿಳಂಬದೊಂದಿಗೆ ಸಮಾನಾಂತರ voting ಮತ್ತು sectioning, ನೋಂದಣಿ ಗಡಿ ಇರುವ orchestrator-workers ಮಾದರಿ ನಿರ್ಮಿಸಿ, ಮತ್ತು ನಿಜವಾದ thread race, ಸಮಾನ-ಮತ ಆಕಸ್ಮಿಕ, ಎಲ್ಲ-ಅಥವಾ-ಏನೂ ಇಲ್ಲ ವೈಫಲ್ಯ ಮತ್ತು ಸಬ್‌ಸ್ಟ್ರಿಂಗ್ ಕೆಲಸಗಾರ ತಪ್ಪು ಆಯ್ಕೆ ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Distinguish sectioning from voting and implement both with a thread pool.",
  "Measure latency against cost for parallel work.",
  "Implement orchestrator-workers with a validated worker registry.",
  "Define policies for ties, partial failure and quorum.",
  "Explain why dependencies decide what may run in parallel."
 ],
 "objectivesKn": [
  "Sectioning ಮತ್ತು voting ಬೇರ್ಪಡಿಸಿ ಎರಡನ್ನೂ thread pool ನಿಂದ ಅಳವಡಿಸಿ.",
  "ಸಮಾನಾಂತರ ಕೆಲಸಕ್ಕೆ ವಿಳಂಬ ಮತ್ತು ವೆಚ್ಚ ಹೋಲಿಸಿ ಅಳೆಯಿರಿ.",
  "ಮಾನ್ಯ ಕೆಲಸಗಾರ ನೋಂದಣಿ ಇರುವ orchestrator-workers ಅಳವಡಿಸಿ.",
  "ಸಮಾನ ಮತ, ಭಾಗಶಃ ವೈಫಲ್ಯ ಮತ್ತು quorum ಗೆ ನೀತಿ ವ್ಯಾಖ್ಯಾನಿಸಿ.",
  "ಯಾವುದು ಸಮಾನಾಂತರ ಚಲಿಸಬಹುದು ಎಂದು ಅವಲಂಬನೆಗಳು ನಿರ್ಧರಿಸುವುದು ಏಕೆ ಎಂದು ವಿವರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Anthropic's Workflow Patterns: Simple Over Complex (Part 2 of 3)",
    "textKn": "Anthropic ನ Workflow Patterns: ಸರಳ ಸಂಕೀರ್ಣಕ್ಕಿಂತ ಮೇಲು (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: parallelization (sectioning and voting) and orchestrator-workers. Every output below was genuinely produced by the lab file on Python 3.14.5. Timings are real measurements on this machine and will differ a little on yours. The count of reordered votes in section 2 comes from a genuine thread race and can differ from run to run, which is itself the finding. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಸಮಾನಾಂತರೀಕರಣ (sectioning ಮತ್ತು voting) ಮತ್ತು orchestrator-workers. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಸಮಯಗಳು ಈ ಯಂತ್ರದ ನಿಜವಾದ ಅಳತೆಗಳು ಮತ್ತು ನಿಮ್ಮದರಲ್ಲಿ ಸ್ವಲ್ಪ ಬೇರೆ ಇರುತ್ತವೆ. ವಿಭಾಗ 2 ರ ಮರುಕ್ರಮಗೊಂಡ ಮತಗಳ ಎಣಿಕೆ ನಿಜವಾದ thread race ನಿಂದ ಬಂದದ್ದು ಮತ್ತು ಓಟದಿಂದ ಓಟಕ್ಕೆ ಬೇರೆಯಾಗಬಹುದು, ಅದೇ ಕಂಡುಹಿಡಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Fan Out and Decide Dynamically",
    "textKn": "ಹರಡಿ ಮತ್ತು ಡೈನಾಮಿಕ್ ಆಗಿ ನಿರ್ಧರಿಸಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Parallelization: Sectioning and Voting",
    "headingKn": "ಸಮಾನಾಂತರೀಕರಣ: Sectioning ಮತ್ತು Voting",
    "bodyEn": "When workers do not need each other's output, they can run together and the wall-clock time approaches the slowest worker instead of the sum. Sectioning gives different workers different parts of the task, such as security, performance and style reviews. Voting gives several workers the same question and aggregates the answers. Both end with fan-in, and the aggregation rule is part of the design. Concurrency can cut latency; it does not cut total model cost, which is roughly N times one call.",
    "bodyKn": "ಕೆಲಸಗಾರರಿಗೆ ಒಬ್ಬರ ಔಟ್‌ಪುಟ್ ಇನ್ನೊಬ್ಬರಿಗೆ ಬೇಡವಾದಾಗ ಅವರು ಒಟ್ಟಿಗೆ ಚಲಿಸಬಹುದು ಮತ್ತು ಗೋಡೆ-ಗಡಿಯಾರ ಸಮಯ ಮೊತ್ತದ ಬದಲು ಅತ್ಯಂತ ನಿಧಾನ ಕೆಲಸಗಾರನನ್ನು ಸಮೀಪಿಸುತ್ತದೆ. Sectioning ಬೇರೆ ಬೇರೆ ಕೆಲಸಗಾರರಿಗೆ ಕಾರ್ಯದ ಬೇರೆ ಭಾಗಗಳನ್ನು ನೀಡುತ್ತದೆ, ಉದಾಹರಣೆಗೆ ಭದ್ರತೆ, ಕಾರ್ಯಕ್ಷಮತೆ ಮತ್ತು ಶೈಲಿ ಪರಿಶೀಲನೆ. Voting ಹಲವು ಕೆಲಸಗಾರರಿಗೆ ಒಂದೇ ಪ್ರಶ್ನೆ ನೀಡಿ ಉತ್ತರಗಳನ್ನು ಸಂಯೋಜಿಸುತ್ತದೆ. ಎರಡೂ fan-in ನೊಂದಿಗೆ ಕೊನೆಗೊಳ್ಳುತ್ತವೆ, ಮತ್ತು ಸಂಯೋಜನೆ ನಿಯಮ ವಿನ್ಯಾಸದ ಭಾಗ. Concurrency ವಿಳಂಬ ಕಡಿಮೆ ಮಾಡಬಲ್ಲದು; ಒಟ್ಟು ಮಾದರಿ ವೆಚ್ಚ ಕಡಿಮೆ ಮಾಡುವುದಿಲ್ಲ, ಅದು ಸುಮಾರು ಒಂದು ಕರೆಯ N ಪಟ್ಟು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Orchestrator-Workers",
    "headingKn": "Orchestrator-Workers",
    "bodyEn": "Parallelization has a decomposition the engineer already knows. Orchestrator-workers lets the task decide: research plus coding needs a researcher and a coder, a plain question needs a generalist. The workers live in a registry, which is the capability boundary: the orchestrator may only pick names that exist there. The outer lifecycle can stay fixed (orchestrate once, run the workers, synthesise once, stop), which is why this is still a bounded workflow and not an open-ended agent loop. If you already know the worker set, do not pay a model to pick it.",
    "bodyKn": "ಸಮಾನಾಂತರೀಕರಣಕ್ಕೆ ಇಂಜಿನಿಯರ್‌ಗೆ ಈಗಾಗಲೇ ತಿಳಿದ ವಿಭಜನೆ ಇದೆ. Orchestrator-workers ಕಾರ್ಯವೇ ನಿರ್ಧರಿಸಲು ಬಿಡುತ್ತದೆ: ಸಂಶೋಧನೆ ಮತ್ತು ಕೋಡಿಂಗ್‌ಗೆ researcher ಮತ್ತು coder ಬೇಕು, ಸರಳ ಪ್ರಶ್ನೆಗೆ generalist. ಕೆಲಸಗಾರರು ನೋಂದಣಿಯಲ್ಲಿದ್ದಾರೆ, ಅದು ಸಾಮರ್ಥ್ಯ ಗಡಿ: orchestrator ಅಲ್ಲಿರುವ ಹೆಸರುಗಳನ್ನು ಮಾತ್ರ ಆರಿಸಬಹುದು. ಹೊರ ಜೀವನಚಕ್ರ ನಿಗದಿತವಾಗಿರಬಹುದು (ಒಮ್ಮೆ orchestrate, ಕೆಲಸಗಾರರನ್ನು ಚಲಾಯಿಸಿ, ಒಮ್ಮೆ ಸಂಶ್ಲೇಷಿಸಿ, ನಿಲ್ಲಿಸಿ), ಆದ್ದರಿಂದ ಇದು ಇನ್ನೂ ಮಿತಿಯಿರುವ workflow, ಮುಕ್ತ agent ಚಕ್ರ ಅಲ್ಲ. ಕೆಲಸಗಾರರ ಗಣ ನಿಮಗೆ ತಿಳಿದಿದ್ದರೆ ಅದನ್ನು ಆರಿಸಲು ಮಾದರಿಗೆ ಹಣ ತೆರಬೇಡಿ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Patterns",
    "textKn": "ಮಾದರಿಗಳನ್ನು ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "wf_2.py",
    "headingEn": "parallel_vote, parallel_sections and orchestrator_workers",
    "headingKn": "parallel_vote, parallel_sections ಮತ್ತು orchestrator_workers",
    "descEn": "parallel_vote runs N identical calls on a ThreadPoolExecutor and counts the answers with Counter. parallel_sections fans different workers out and gathers a dictionary, with a strict mode that propagates a failure and a best-effort mode that records it. orchestrator_workers picks workers from the task, runs them, and synthesises with one model call.",
    "descKn": "parallel_vote ThreadPoolExecutor ಮೇಲೆ N ಒಂದೇ ಕರೆಗಳನ್ನು ಚಲಾಯಿಸಿ Counter ನಿಂದ ಉತ್ತರಗಳನ್ನು ಎಣಿಸುತ್ತದೆ. parallel_sections ಬೇರೆ ಬೇರೆ ಕೆಲಸಗಾರರನ್ನು ಹರಡಿ ನಿಘಂಟು ಸಂಗ್ರಹಿಸುತ್ತದೆ, ವೈಫಲ್ಯ ಹರಡುವ strict ಮೋಡ್ ಮತ್ತು ಅದನ್ನು ದಾಖಲಿಸುವ best-effort ಮೋಡ್ ಜೊತೆ. orchestrator_workers ಕಾರ್ಯದಿಂದ ಕೆಲಸಗಾರರನ್ನು ಆರಿಸಿ, ಚಲಾಯಿಸಿ, ಒಂದು ಮಾದರಿ ಕರೆಯಿಂದ ಸಂಶ್ಲೇಷಿಸುತ್ತದೆ.",
    "code": "def parallel_vote(llm, prompt, n=3):\n    def run_once(_):\n        return llm.generate(f\"Vote on this:\\n{prompt}\")\n    with ThreadPoolExecutor(max_workers=n) as pool:\n        votes = list(pool.map(run_once, range(n)))\n    counts = Counter(votes)\n    winner = counts.most_common(1)[0][0]\n    return votes, winner\n\n\ndef parallel_sections(task, workers, strict=True):\n    def run_worker(item):\n        name, worker = item\n        try:\n            return name, worker(task)\n        except Exception as exc:\n            if strict:\n                raise\n            return name, f\"FAILED: {type(exc).__name__}: {exc}\"\n    with ThreadPoolExecutor(max_workers=len(workers)) as pool:\n        return dict(pool.map(run_worker, workers.items()))\n\n\ndef orchestrator_workers(llm, task, workers):\n    selected, lowered = [], task.lower()\n    if \"research\" in lowered:\n        selected.append(\"researcher\")\n    if \"code\" in lowered:\n        selected.append(\"coder\")\n    if not selected:\n        selected.append(\"generalist\")\n    results = {}\n    for worker_name in selected:\n        results[worker_name] = workers[worker_name](task)\n    synthesis = llm.generate(f\"Synthesize worker results for task: {task}\\nRESULTS:\\n{results}\")\n    return selected, results, synthesis\n\n\nWORKERS = {\n    \"researcher\": lambda task: f\"Research findings for {task}\",\n    \"coder\": lambda task: f\"Code implementation for {task}\",\n    \"generalist\": lambda task: f\"General solution for {task}\",\n}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "wf_2.py",
    "headingEn": "main(): eight experiments",
    "headingKn": "main(): ಎಂಟು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs a vote, repeats it 2000 times to look for races, tests ties, measures sequential against parallel time, forces a failing worker, runs the orchestrator, probes keyword selection, and validates proposals against the registry.",
    "descKn": "main() ಮತದಾನ ಚಲಾಯಿಸುತ್ತದೆ, races ಹುಡುಕಲು 2000 ಬಾರಿ ಪುನರಾವರ್ತಿಸುತ್ತದೆ, ಸಮಾನ ಮತ ಪರೀಕ್ಷಿಸುತ್ತದೆ, ಅನುಕ್ರಮ ಮತ್ತು ಸಮಾನಾಂತರ ಸಮಯ ಅಳೆಯುತ್ತದೆ, ವಿಫಲ ಕೆಲಸಗಾರನನ್ನು ಒತ್ತಾಯಿಸುತ್ತದೆ, orchestrator ಚಲಾಯಿಸುತ್ತದೆ, ಕೀವರ್ಡ್ ಆಯ್ಕೆ ಪರೀಕ್ಷಿಸುತ್ತದೆ, ಮತ್ತು ಪ್ರಸ್ತಾಪಗಳನ್ನು ನೋಂದಣಿಯ ವಿರುದ್ಧ ಮಾನ್ಯ ಮಾಡುತ್ತದೆ.",
    "code": "def slow(seconds, label):\n    def worker(task):\n        time.sleep(seconds)\n        return f\"{label} done\"\n    return worker\n\n\ndef section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Voting: independent runs, then aggregation\")\n    votes, winner = parallel_vote(ScriptedLLM(), \"Should this deployment proceed?\", n=3)\n    print(\"votes :\", votes)\n    print(\"winner:\", winner, \"| counts:\", dict(Counter(votes)))\n\n    section(\"2. Genuinely checking: the scripted vote and threads\")\n    orders, winners, call_counts = Counter(), Counter(), Counter()\n    for _ in range(2000):\n        llm = ScriptedLLM()\n        v, w = parallel_vote(llm, \"Should this deployment proceed?\", n=3)\n        orders[tuple(v)] += 1\n        winners[w] += 1\n        call_counts[llm.calls] += 1\n    print(\"distinct vote orderings over 2000 runs:\", dict(orders))\n    print(\"winners:\", dict(winners), \"| model calls per run:\", dict(call_counts))\n    print(\"pool.map returns results in submission order, but WHICH thread got which scripted answer depends on scheduling\")\n\n    section(\"3. Genuinely checking: ties need a policy\")\n    for votes in ([\"YES\", \"YES\", \"NO\"], [\"YES\", \"NO\", \"YES\", \"NO\"], [\"NO\", \"YES\", \"NO\", \"YES\"]):\n        print(f\"{votes} -> most_common winner: {Counter(votes).most_common(1)[0][0]}\")\n    print(\"with a tie the winner is whichever answer appeared first, an accident of ordering, not a decision\")\n\n    section(\"4. Sectioning and measured latency\")\n    workers = {\"security\": slow(0.3, \"security\"), \"performance\": slow(0.3, \"performance\"), \"style\": slow(0.3, \"style\")}\n    t0 = time.perf_counter()\n    for name, w in workers.items():\n        w(\"code\")\n    sequential = time.perf_counter() - t0\n    t0 = time.perf_counter()\n    out = parallel_sections(\"code\", workers)\n    parallel = time.perf_counter() - t0\n    print(\"results:\", out)\n    print(f\"sequential: {sequential:.2f}s | parallel: {parallel:.2f}s | speed-up x{sequential / parallel:.1f} (3 workers, 0.3 s each)\")\n    print(\"wall-clock fell towards the slowest worker; total work, and total model cost, did not fall\")\n\n    section(\"5. Genuinely checking: one failing worker\")\n    def broken(task):\n        raise RuntimeError(\"performance analyzer timed out\")\n    mixed = {\"security\": slow(0.05, \"security\"), \"performance\": broken, \"style\": slow(0.05, \"style\")}\n    try:\n        parallel_sections(\"code\", mixed, strict=True)\n    except RuntimeError as e:\n        print(\"strict policy: whole fan-out failed ->\", e, \"(the two good results were discarded)\")\n    print(\"best-effort policy:\", parallel_sections(\"code\", mixed, strict=False))\n\n    section(\"6. Orchestrator-workers: the task picks the workers\")\n    llm = ScriptedLLM()\n    for task in (\"Research workflow patterns and write code\", \"Write code for a calculator\", \"Research electric vehicle batteries\", \"Explain this concept\"):\n        selected, results, synthesis = orchestrator_workers(llm, task, WORKERS)\n        print(f\"{task!r:<46} -> {selected}\")\n    selected, results, synthesis = orchestrator_workers(ScriptedLLM(), \"Research workflow patterns and write code\", WORKERS)\n    print(\"results:\", results)\n    print(\"synthesis:\", synthesis)\n\n    section(\"7. Genuinely checking: keyword worker selection\")\n    for task in (\"Explain unicode normalization\", \"Describe the barcode format\", \"Summarise the researcher's biography\"):\n        print(f\"{task!r:<44} -> {orchestrator_workers(ScriptedLLM(), task, WORKERS)[0]}\")\n    print(\"substring matching sent unrelated tasks to the coder and researcher; an allowlist of structured model output is safer\")\n    allowed = set(WORKERS)\n    for proposal in ([\"researcher\", \"coder\"], [\"researcher\", \"delete_production_database\"]):\n        ok = all(p in allowed for p in proposal)\n        print(f\"model proposed {proposal} -> {'accepted' if ok else 'rejected: not in the worker registry'}\")\n\n    section(\"8. Orchestrated workers can themselves run in parallel\")\n    selected = [\"researcher\", \"coder\"]\n    ws = {\"researcher\": slow(0.3, \"researcher\"), \"coder\": slow(0.3, \"coder\")}\n    t0 = time.perf_counter()\n    r = parallel_sections(\"task\", ws)\n    print(f\"{selected} in parallel: {time.perf_counter() - t0:.2f}s (independent) -- but a coder that needs the researcher's output must stay sequential\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Voting: independent runs, then aggregation ---\nvotes : ['YES', 'YES', 'NO']\nwinner: YES | counts: {'YES': 2, 'NO': 1}\n\n--- 2. Genuinely checking: the scripted vote and threads ---\ndistinct vote orderings over 2000 runs: {('YES', 'YES', 'NO'): 2000}\nwinners: {'YES': 2000} | model calls per run: {3: 2000}\npool.map returns results in submission order, but WHICH thread got which scripted answer depends on scheduling\n\n--- 3. Genuinely checking: ties need a policy ---\n['YES', 'YES', 'NO'] -> most_common winner: YES\n['YES', 'NO', 'YES', 'NO'] -> most_common winner: YES\n['NO', 'YES', 'NO', 'YES'] -> most_common winner: NO\nwith a tie the winner is whichever answer appeared first, an accident of ordering, not a decision\n\n--- 4. Sectioning and measured latency ---\nresults: {'security': 'security done', 'performance': 'performance done', 'style': 'style done'}\nsequential: 0.90s | parallel: 0.30s | speed-up x3.0 (3 workers, 0.3 s each)\nwall-clock fell towards the slowest worker; total work, and total model cost, did not fall\n\n--- 5. Genuinely checking: one failing worker ---\nstrict policy: whole fan-out failed -> performance analyzer timed out (the two good results were discarded)\nbest-effort policy: {'security': 'security done', 'performance': 'FAILED: RuntimeError: performance analyzer timed out', 'style': 'style done'}\n\n--- 6. Orchestrator-workers: the task picks the workers ---\n'Research workflow patterns and write code'    -> ['researcher', 'coder']\n'Write code for a calculator'                  -> ['coder']\n'Research electric vehicle batteries'          -> ['researcher']\n'Explain this concept'                         -> ['generalist']\nresults: {'researcher': 'Research findings for Research workflow patterns and write code', 'coder': 'Code implementation for Research workflow patterns and write code'}\nsynthesis: Response to: Synthesize worker results for task: Rese\n\n--- 7. Genuinely checking: keyword worker selection ---\n'Explain unicode normalization'              -> ['coder']\n'Describe the barcode format'                -> ['coder']\n\"Summarise the researcher's biography\"       -> ['researcher']\nsubstring matching sent unrelated tasks to the coder and researcher; an allowlist of structured model output is safer\nmodel proposed ['researcher', 'coder'] -> accepted\nmodel proposed ['researcher', 'delete_production_database'] -> rejected: not in the worker registry\n\n--- 8. Orchestrated workers can themselves run in parallel ---\n['researcher', 'coder'] in parallel: 0.30s (independent) -- but a coder that needs the researcher's output must stay sequential"
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
    "headingEn": "Latency Fell, Cost Did Not",
    "headingKn": "ವಿಳಂಬ ಕುಸಿಯಿತು, ವೆಚ್ಚ ಕುಸಿಯಲಿಲ್ಲ",
    "bodyEn": "Section 4 runs three 0.3 second workers. Sequentially they take about 0.9 seconds and in parallel about 0.3 seconds, a speed-up of roughly three times, because wall-clock time approaches the slowest worker. The same three units of work still happened, so a real model bill would be unchanged. Section 8 shows an orchestrated researcher and coder running together in about 0.3 seconds, with the reminder that a coder that needs the researcher's output must stay sequential. Dependencies decide what may overlap.",
    "bodyKn": "ವಿಭಾಗ 4 ಮೂರು 0.3 ಸೆಕೆಂಡ್ ಕೆಲಸಗಾರರನ್ನು ಚಲಾಯಿಸುತ್ತದೆ. ಅನುಕ್ರಮವಾಗಿ ಅವು ಸುಮಾರು 0.9 ಸೆಕೆಂಡ್ ಮತ್ತು ಸಮಾನಾಂತರವಾಗಿ ಸುಮಾರು 0.3 ಸೆಕೆಂಡ್ ತೆಗೆದುಕೊಳ್ಳುತ್ತವೆ, ಸುಮಾರು ಮೂರು ಪಟ್ಟು ವೇಗ, ಏಕೆಂದರೆ ಗೋಡೆ-ಗಡಿಯಾರ ಸಮಯ ಅತ್ಯಂತ ನಿಧಾನ ಕೆಲಸಗಾರನನ್ನು ಸಮೀಪಿಸುತ್ತದೆ. ಅದೇ ಮೂರು ಘಟಕ ಕೆಲಸ ಇನ್ನೂ ನಡೆಯಿತು, ಆದ್ದರಿಂದ ನಿಜವಾದ ಮಾದರಿ ಬಿಲ್ ಬದಲಾಗುವುದಿಲ್ಲ. ವಿಭಾಗ 8 ಸಂಯೋಜಿತ researcher ಮತ್ತು coder ಸುಮಾರು 0.3 ಸೆಕೆಂಡ್‌ನಲ್ಲಿ ಒಟ್ಟಿಗೆ ಚಲಿಸುವುದನ್ನು ತೋರಿಸುತ್ತದೆ, researcher ಔಟ್‌ಪುಟ್ ಬೇಕಾದ coder ಅನುಕ್ರಮವಾಗಿಯೇ ಇರಬೇಕು ಎಂಬ ನೆನಪಿನೊಂದಿಗೆ. ಅವಲಂಬನೆಗಳು ಯಾವುದು ಅತಿಕ್ರಮಿಸಬಹುದು ಎಂದು ನಿರ್ಧರಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Real Thread Race in the Scripted Vote",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸ್ಕ್ರಿಪ್ಟ್ ಮತದಲ್ಲಿ ನಿಜವಾದ Thread Race",
    "bodyEn": "The scripted model chooses its answer from a shared call counter, and self.calls += 1 is not atomic. Section 2 repeats the vote 2000 times: almost every run returns YES, YES, NO, but the run output shows that a reordered result can appear, which is a genuine scheduling race. The winner was YES every time because the multiset of answers did not change, yet the ordering did. pool.map returns results in submission order, but which thread received which answer is not under your control. Shared mutable state inside concurrent workers needs a lock or a design that avoids it, and tests of concurrent code should run many iterations.",
    "bodyKn": "ಸ್ಕ್ರಿಪ್ಟ್ ಮಾದರಿ ತನ್ನ ಉತ್ತರವನ್ನು ಹಂಚಿಕೆಯ ಕರೆ ಕೌಂಟರ್‌ನಿಂದ ಆರಿಸುತ್ತದೆ, ಮತ್ತು self.calls += 1 ಪರಮಾಣು ಅಲ್ಲ. ವಿಭಾಗ 2 ಮತದಾನವನ್ನು 2000 ಬಾರಿ ಪುನರಾವರ್ತಿಸುತ್ತದೆ: ಬಹುತೇಕ ಪ್ರತಿ ಓಟ YES, YES, NO ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಆದರೆ ಓಟದ ಔಟ್‌ಪುಟ್ ಮರುಕ್ರಮಗೊಂಡ ಫಲಿತಾಂಶ ಕಾಣಿಸಬಹುದು ಎಂದು ತೋರಿಸುತ್ತದೆ, ಇದು ನಿಜವಾದ ವೇಳಾಪಟ್ಟಿ race. ಉತ್ತರಗಳ ಬಹುಗಣ ಬದಲಾಗದ್ದರಿಂದ ಪ್ರತಿ ಬಾರಿ ವಿಜೇತ YES ಆಗಿತ್ತು, ಆದರೆ ಕ್ರಮ ಬದಲಾಯಿತು. pool.map ಫಲಿತಾಂಶಗಳನ್ನು ಸಲ್ಲಿಸಿದ ಕ್ರಮದಲ್ಲಿ ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಆದರೆ ಯಾವ thread ಯಾವ ಉತ್ತರ ಪಡೆಯಿತು ಎಂಬುದು ನಿಮ್ಮ ನಿಯಂತ್ರಣದಲ್ಲಿಲ್ಲ. ಸಮಕಾಲಿಕ ಕೆಲಸಗಾರರ ಒಳಗಿನ ಹಂಚಿಕೆಯ ಬದಲಾಯಿಸಬಹುದಾದ state ಗೆ lock ಅಥವಾ ಅದನ್ನು ತಪ್ಪಿಸುವ ವಿನ್ಯಾಸ ಬೇಕು, ಮತ್ತು ಸಮಕಾಲಿಕ ಕೋಡ್ ಪರೀಕ್ಷೆಗಳು ಹಲವು ಪುನರಾವರ್ತನೆ ಚಲಾಯಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Ties and Partial Failure Are Policy Questions",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಮಾನ ಮತ ಮತ್ತು ಭಾಗಶಃ ವೈಫಲ್ಯ ನೀತಿ ಪ್ರಶ್ನೆಗಳು",
    "bodyEn": "Section 3: with votes YES, NO, YES, NO the winner is YES, and with the same votes in the order NO, YES, NO, YES the winner is NO. A tie was broken by arrival order, an accident, not a decision. Choose a policy: ask another voter, escalate, return uncertain. Section 5: when the performance worker raises, the strict fan-out fails as a whole and the two good results are discarded; best-effort mode records \"FAILED\" for that worker and keeps the rest. A compliance review may require all workers, brainstorming may not. Also set timeouts, a quorum and a bound on concurrency, since providers rate-limit.",
    "bodyKn": "ವಿಭಾಗ 3: ಮತಗಳು YES, NO, YES, NO ಆದಾಗ ವಿಜೇತ YES, ಮತ್ತು ಅದೇ ಮತಗಳು NO, YES, NO, YES ಕ್ರಮದಲ್ಲಿದ್ದರೆ ವಿಜೇತ NO. ಸಮಾನ ಮತವನ್ನು ಆಗಮನ ಕ್ರಮ ಮುರಿಯಿತು, ಅದು ನಿರ್ಧಾರವಲ್ಲ, ಆಕಸ್ಮಿಕ. ನೀತಿ ಆರಿಸಿ: ಇನ್ನೊಬ್ಬ ಮತದಾರನನ್ನು ಕೇಳಿ, ಮೇಲ್ಮಟ್ಟಕ್ಕೆ ಒಯ್ಯಿರಿ, ಅನಿಶ್ಚಿತ ಹಿಂತಿರುಗಿಸಿ. ವಿಭಾಗ 5: performance ಕೆಲಸಗಾರ ದೋಷ ಎತ್ತಿದಾಗ strict fan-out ಇಡೀ ವಿಫಲವಾಗಿ ಎರಡು ಒಳ್ಳೆಯ ಫಲಿತಾಂಶ ಬಿಸಾಡಲ್ಪಡುತ್ತವೆ; best-effort ಮೋಡ್ ಆ ಕೆಲಸಗಾರನಿಗೆ \"FAILED\" ದಾಖಲಿಸಿ ಉಳಿದದ್ದನ್ನು ಇಡುತ್ತದೆ. ಅನುಸರಣೆ ಪರಿಶೀಲನೆಗೆ ಎಲ್ಲಾ ಕೆಲಸಗಾರರು ಬೇಕಾಗಬಹುದು, ಬುದ್ಧಿಮಂಥನಕ್ಕೆ ಬೇಡ. ಪೂರೈಕೆದಾರರು ದರ ಮಿತಿ ಹಾಕುವುದರಿಂದ timeouts, quorum ಮತ್ತು concurrency ಮಿತಿಯನ್ನೂ ಹೊಂದಿಸಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Substring Selection Misfires",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಬ್‌ಸ್ಟ್ರಿಂಗ್ ಆಯ್ಕೆ ತಪ್ಪಾಗುತ್ತದೆ",
    "bodyEn": "Section 7: \"Explain unicode normalization\" and \"Describe the barcode format\" both select the coder, because the substring \"code\" appears inside \"unicode\" and \"barcode\", and a biography of a \"researcher\" selects the researcher. A deterministic selector is easy to test but wrong in this way. If a model chooses workers, require structured output and validate every name against the registry. The lab shows the check: a proposal containing \"delete_production_database\" is rejected because no such worker exists. The registry is the capability boundary, and the model proposes while the program validates.",
    "bodyKn": "ವಿಭಾಗ 7: \"Explain unicode normalization\" ಮತ್ತು \"Describe the barcode format\" ಎರಡೂ coder ಆರಿಸುತ್ತವೆ, ಏಕೆಂದರೆ \"code\" ಉಪಸ್ಟ್ರಿಂಗ್ \"unicode\" ಮತ್ತು \"barcode\" ಒಳಗೆ ಇದೆ, ಮತ್ತು \"researcher\" ಜೀವನಚರಿತ್ರೆ researcher ಆರಿಸುತ್ತದೆ. ನಿರ್ಧಾರಾತ್ಮಕ ಆಯ್ಕೆ ಪರೀಕ್ಷಿಸಲು ಸುಲಭ ಆದರೆ ಈ ರೀತಿ ತಪ್ಪು. ಮಾದರಿ ಕೆಲಸಗಾರರನ್ನು ಆರಿಸಿದರೆ ರಚನಾತ್ಮಕ ಔಟ್‌ಪುಟ್ ಬೇಕು ಮತ್ತು ಪ್ರತಿ ಹೆಸರನ್ನು ನೋಂದಣಿಯ ವಿರುದ್ಧ ಮಾನ್ಯ ಮಾಡಿ. ಲ್ಯಾಬ್ ಪರಿಶೀಲನೆ ತೋರಿಸುತ್ತದೆ: \"delete_production_database\" ಇರುವ ಪ್ರಸ್ತಾಪ ತಿರಸ್ಕೃತ, ಏಕೆಂದರೆ ಅಂತಹ ಕೆಲಸಗಾರ ಇಲ್ಲ. ನೋಂದಣಿ ಸಾಮರ್ಥ್ಯ ಗಡಿ, ಮಾದರಿ ಪ್ರಸ್ತಾಪಿಸುತ್ತದೆ ಮತ್ತು ಪ್ರೋಗ್ರಾಂ ಮಾನ್ಯ ಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Composition and Least Privilege",
    "headingKn": "ಸಂಯೋಜನೆ ಮತ್ತು ಕನಿಷ್ಠ ಸೌಲಭ್ಯ",
    "bodyEn": "Patterns compose: a router can send simple inputs down a cheap path and complex ones to an orchestrator, and a technical branch can fan out to logs, metrics and configuration. Workers can differ in prompt, model, tools and permissions, so only the deployment worker holds deployment rights and a reviewer is read-only. Calling every function an \"agent\" adds no value: five independent calls are five calls.",
    "bodyKn": "ಮಾದರಿಗಳು ಸಂಯೋಜನೆಯಾಗುತ್ತವೆ: router ಸರಳ ಇನ್‌ಪುಟ್‌ಗಳನ್ನು ಅಗ್ಗದ ದಾರಿಗೆ ಮತ್ತು ಸಂಕೀರ್ಣವಾದವನ್ನು orchestrator ಗೆ ಕಳುಹಿಸಬಹುದು, ಮತ್ತು technical ಶಾಖೆ logs, metrics ಮತ್ತು ಸಂರಚನೆಗೆ ಹರಡಬಹುದು. ಕೆಲಸಗಾರರು prompt, ಮಾದರಿ, tools ಮತ್ತು ಅನುಮತಿಗಳಲ್ಲಿ ಭಿನ್ನವಾಗಿರಬಹುದು, ಆದ್ದರಿಂದ ಕೇವಲ deployment ಕೆಲಸಗಾರನಿಗೆ deployment ಹಕ್ಕು ಮತ್ತು reviewer ಓದಲು-ಮಾತ್ರ. ಪ್ರತಿ ಕಾರ್ಯವನ್ನು \"agent\" ಎಂದು ಕರೆಯುವುದು ಮೌಲ್ಯ ಸೇರಿಸುವುದಿಲ್ಲ: ಐದು ಸ್ವತಂತ್ರ ಕರೆಗಳು ಐದು ಕರೆಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Independent model calls are I/O-bound, so overlapping them cuts latency, and several independent opinions can reduce reliance on one trajectory. Dynamic worker choice handles tasks whose decomposition varies without handing the whole control loop to the model.",
    "bodyKn": "ಸ್ವತಂತ್ರ ಮಾದರಿ ಕರೆಗಳು I/O-ಬದ್ಧ, ಆದ್ದರಿಂದ ಅವನ್ನು ಅತಿಕ್ರಮಿಸುವುದು ವಿಳಂಬ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ, ಮತ್ತು ಹಲವು ಸ್ವತಂತ್ರ ಅಭಿಪ್ರಾಯಗಳು ಒಂದು ಪಥದ ಮೇಲಿನ ಅವಲಂಬನೆ ಕಡಿಮೆ ಮಾಡಬಹುದು. ಡೈನಾಮಿಕ್ ಕೆಲಸಗಾರ ಆಯ್ಕೆ ವಿಭಜನೆ ಬದಲಾಗುವ ಕಾರ್ಯಗಳನ್ನು ಇಡೀ ನಿಯಂತ್ರಣ ಚಕ್ರವನ್ನು ಮಾದರಿಗೆ ಕೊಡದೆ ನಿರ್ವಹಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"parallel means cheaper.\" Parallel means the same work finishing sooner; voting with N workers costs about N times a single call.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಸಮಾನಾಂತರ ಎಂದರೆ ಅಗ್ಗ.\" ಸಮಾನಾಂತರ ಎಂದರೆ ಅದೇ ಕೆಲಸ ಬೇಗ ಮುಗಿಯುವುದು; N ಕೆಲಸಗಾರರ ಮತದಾನ ಒಂದು ಕರೆಯ ಸುಮಾರು N ಪಟ್ಟು ವೆಚ್ಚ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Sectioning: different workers on different subproblems. Voting: several workers on the same problem. Fan-out and fan-in: spread work, then aggregate. Quorum: the minimum number of successful workers. Orchestrator: chooses workers from the task. Worker registry: the allowed capabilities. Control plane: the code that decides what runs.",
    "bodyKn": "Sectioning: ಬೇರೆ ಉಪಸಮಸ್ಯೆಗಳ ಮೇಲೆ ಬೇರೆ ಕೆಲಸಗಾರರು. Voting: ಒಂದೇ ಸಮಸ್ಯೆಯ ಮೇಲೆ ಹಲವು ಕೆಲಸಗಾರರು. Fan-out ಮತ್ತು fan-in: ಕೆಲಸ ಹರಡಿ ನಂತರ ಸಂಯೋಜಿಸುವುದು. Quorum: ಯಶಸ್ವಿ ಕೆಲಸಗಾರರ ಕನಿಷ್ಠ ಸಂಖ್ಯೆ. Orchestrator: ಕಾರ್ಯದಿಂದ ಕೆಲಸಗಾರರನ್ನು ಆರಿಸುತ್ತದೆ. Worker registry: ಅನುಮತಿಸಿದ ಸಾಮರ್ಥ್ಯಗಳು. Control plane: ಏನು ಚಲಿಸಬೇಕು ಎಂದು ನಿರ್ಧರಿಸುವ ಕೋಡ್."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Parallelise independent work: three 0.3 s workers took about 0.3 s instead of 0.9 s. 2) Cost does not fall. 3) Shared state in concurrent workers raced. 4) A tie is decided by arrival order unless you set a policy. 5) Decide up front whether one failed worker fails the whole fan-out. 6) Keyword worker selection misfired on \"unicode\" and \"barcode\". 7) Validate every proposed worker against the registry. Part 3 adds the evaluator-optimizer loop.",
    "bodyKn": "1) ಸ್ವತಂತ್ರ ಕೆಲಸವನ್ನು ಸಮಾನಾಂತರಗೊಳಿಸಿ: ಮೂರು 0.3 s ಕೆಲಸಗಾರರು 0.9 s ಬದಲು ಸುಮಾರು 0.3 s ತೆಗೆದುಕೊಂಡರು. 2) ವೆಚ್ಚ ಕುಸಿಯುವುದಿಲ್ಲ. 3) ಸಮಕಾಲಿಕ ಕೆಲಸಗಾರರ ಹಂಚಿಕೆಯ state race ಆಯಿತು. 4) ನೀತಿ ಹೊಂದಿಸದಿದ್ದರೆ ಸಮಾನ ಮತವನ್ನು ಆಗಮನ ಕ್ರಮ ನಿರ್ಧರಿಸುತ್ತದೆ. 5) ಒಂದು ವಿಫಲ ಕೆಲಸಗಾರ ಇಡೀ fan-out ವಿಫಲಗೊಳಿಸುತ್ತದೆಯೇ ಎಂದು ಮೊದಲೇ ನಿರ್ಧರಿಸಿ. 6) ಕೀವರ್ಡ್ ಕೆಲಸಗಾರ ಆಯ್ಕೆ \"unicode\" ಮತ್ತು \"barcode\" ನಲ್ಲಿ ತಪ್ಪಿತು. 7) ಪ್ರಸ್ತಾಪಿತ ಪ್ರತಿ ಕೆಲಸಗಾರನನ್ನು ನೋಂದಣಿಯ ವಿರುದ್ಧ ಮಾನ್ಯ ಮಾಡಿ. ಭಾಗ 3 evaluator-optimizer ಚಕ್ರ ಸೇರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What are the two forms of parallelization?",
      "qKn": "ಸಮಾನಾಂತರೀಕರಣದ ಎರಡು ರೂಪಗಳು ಯಾವುವು?",
      "opts": [
       "Sync and async",
       "Sectioning and voting",
       "Planning and execution",
       "Routing and reflection"
      ],
      "optsKn": [
       "Sync ಮತ್ತು async",
       "Sectioning ಮತ್ತು voting",
       "ಯೋಜನೆ ಮತ್ತು ಚಲಾವಣೆ",
       "Routing ಮತ್ತು ಪ್ರತಿಬಿಂಬ"
      ],
      "correct": 1
     },
     {
      "q": "Three 0.3 second workers took about 0.9 seconds sequentially. Why about 0.3 in parallel, and what did not change?",
      "qKn": "ಮೂರು 0.3 ಸೆಕೆಂಡ್ ಕೆಲಸಗಾರರು ಅನುಕ್ರಮವಾಗಿ ಸುಮಾರು 0.9 ಸೆಕೆಂಡ್ ತೆಗೆದುಕೊಂಡರು. ಸಮಾನಾಂತರದಲ್ಲಿ ಸುಮಾರು 0.3 ಏಕೆ, ಮತ್ತು ಏನು ಬದಲಾಗಲಿಲ್ಲ?",
      "opts": [
       "Work disappeared",
       "Wall-clock time approaches the slowest worker, while total work and model cost stay the same",
       "The model got faster",
       "Python skipped two workers"
      ],
      "optsKn": [
       "ಕೆಲಸ ಮಾಯವಾಯಿತು",
       "ಗೋಡೆ-ಗಡಿಯಾರ ಸಮಯ ಅತ್ಯಂತ ನಿಧಾನ ಕೆಲಸಗಾರನನ್ನು ಸಮೀಪಿಸುತ್ತದೆ, ಒಟ್ಟು ಕೆಲಸ ಮತ್ತು ಮಾದರಿ ವೆಚ್ಚ ಅದೇ ಉಳಿಯುತ್ತವೆ",
       "ಮಾದರಿ ವೇಗವಾಯಿತು",
       "Python ಎರಡು ಕೆಲಸಗಾರರನ್ನು ಬಿಟ್ಟಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What did 2000 repeated votes show about the scripted voter?",
      "qKn": "2000 ಪುನರಾವರ್ತಿತ ಮತಗಳು ಸ್ಕ್ರಿಪ್ಟ್ ಮತದಾರನ ಬಗ್ಗೆ ಏನು ತೋರಿಸಿದವು?",
      "opts": [
       "It is perfectly deterministic",
       "A shared counter raced between threads, so the order of answers can vary even when the winner does not",
       "It always votes NO",
       "Counter is broken"
      ],
      "optsKn": [
       "ಅದು ಪರಿಪೂರ್ಣ ನಿರ್ಧಾರಾತ್ಮಕ",
       "ಹಂಚಿಕೆಯ ಕೌಂಟರ್ threads ನಡುವೆ race ಆಯಿತು, ಆದ್ದರಿಂದ ವಿಜೇತ ಬದಲಾಗದಿದ್ದರೂ ಉತ್ತರಗಳ ಕ್ರಮ ಬದಲಾಗಬಹುದು",
       "ಅದು ಯಾವಾಗಲೂ NO ಮತ ಹಾಕುತ್ತದೆ",
       "Counter ಮುರಿದಿದೆ"
      ],
      "correct": 1
     },
     {
      "q": "What primarily distinguishes orchestrator-workers from fixed parallelization?",
      "qKn": "Orchestrator-workers ಅನ್ನು ನಿಗದಿತ ಸಮಾನಾಂತರೀಕರಣದಿಂದ ಮುಖ್ಯವಾಗಿ ಯಾವುದು ಬೇರ್ಪಡಿಸುತ್ತದೆ?",
      "opts": [
       "It does not use LLMs",
       "Workers must run sequentially",
       "The worker set can depend on the task",
       "It cannot synthesise"
      ],
      "optsKn": [
       "ಅದು LLM ಬಳಸುವುದಿಲ್ಲ",
       "ಕೆಲಸಗಾರರು ಅನುಕ್ರಮವಾಗಿ ಚಲಿಸಬೇಕು",
       "ಕೆಲಸಗಾರರ ಗಣ ಕಾರ್ಯದ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಬಹುದು",
       "ಅದು ಸಂಶ್ಲೇಷಿಸಲಾರದು"
      ],
      "correct": 2
     },
     {
      "q": "Why validate a model-proposed worker name against the registry?",
      "qKn": "ಮಾದರಿ ಪ್ರಸ್ತಾಪಿಸಿದ ಕೆಲಸಗಾರನ ಹೆಸರನ್ನು ನೋಂದಣಿಯ ವಿರುದ್ಧ ಏಕೆ ಮಾನ್ಯ ಮಾಡಬೇಕು?",
      "opts": [
       "To save tokens",
       "The registry is the capability boundary; the model may only choose capabilities that exist",
       "Registries are faster",
       "Names must be uppercase"
      ],
      "optsKn": [
       "tokens ಉಳಿಸಲು",
       "ನೋಂದಣಿ ಸಾಮರ್ಥ್ಯ ಗಡಿ; ಮಾದರಿ ಇರುವ ಸಾಮರ್ಥ್ಯಗಳನ್ನು ಮಾತ್ರ ಆರಿಸಬಹುದು",
       "ನೋಂದಣಿಗಳು ವೇಗ",
       "ಹೆಸರುಗಳು ದೊಡ್ಡಕ್ಷರವಾಗಿರಬೇಕು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
