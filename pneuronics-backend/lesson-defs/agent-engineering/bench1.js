module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321544",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Agent Benchmarks: SWE-bench, GAIA and AgentBench (Part 1 of 3) — Execution-Based Evaluation with Two Gates",
 "titleKn": "Agent Benchmarks: SWE-bench, GAIA ಮತ್ತು AgentBench (ಭಾಗ 1 / 3) — ಎರಡು ಗೇಟ್‌ಗಳೊಂದಿಗೆ ಚಲಾವಣೆ-ಆಧಾರಿತ ಮೌಲ್ಯಮಾಪನ",
 "desc": "Build a SWE-bench-style evaluator with FAIL_TO_PASS and PASS_TO_PASS gates, then feed it hard-coded, over-narrow, flaky and non-terminating patches and measure how much the test suite itself is worth.",
 "descKn": "FAIL_TO_PASS ಮತ್ತು PASS_TO_PASS ಗೇಟ್‌ಗಳಿರುವ SWE-bench-ಶೈಲಿಯ evaluator ನಿರ್ಮಿಸಿ, hard-coded, ಅತಿ ಕಿರಿದಾದ, flaky ಮತ್ತು ಮುಗಿಯದ patches ನೀಡಿ test suite ಸ್ವತಃ ಎಷ್ಟು ಬೆಲೆಬಾಳುತ್ತದೆ ಎಂದು ಅಳೆಯಿರಿ.",
 "objectives": [
  "Explain the two gates.",
  "Build an execution-based evaluator.",
  "Spot patches that pass without fixing the bug.",
  "Score a test suite with mutants.",
  "Handle flaky and hanging candidates."
 ],
 "objectivesKn": [
  "ಎರಡು ಗೇಟ್‌ಗಳನ್ನು ವಿವರಿಸಿ.",
  "ಚಲಾವಣೆ-ಆಧಾರಿತ evaluator ನಿರ್ಮಿಸಿ.",
  "ದೋಷ ಸರಿಪಡಿಸದೆ ಪಾಸ್ ಆಗುವ patches ಗುರುತಿಸಿ.",
  "Test suite ಗೆ ರೂಪಾಂತರಗಳಿಂದ ಅಂಕ ನೀಡಿ.",
  "Flaky ಮತ್ತು ಸ್ಥಗಿತ ಅಭ್ಯರ್ಥಿಗಳನ್ನು ನಿರ್ವಹಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Agent Benchmarks: SWE-bench, GAIA and AgentBench (Part 1 of 3)",
    "textKn": "Agent Benchmarks: SWE-bench, GAIA ಮತ್ತು AgentBench (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a SWE-bench-style evaluator with FAIL_TO_PASS and PASS_TO_PASS gates. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind SWE-bench, GAIA and AgentBench, not the real software, and candidate patches, agents and models are scripted stand-ins, so no real LLM behaviour is measured. The pasted Part 1 was cut off in the middle of its program, so the evaluator is rebuilt. No real SWE-bench task, repository or published result is used. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: FAIL_TO_PASS ಮತ್ತು PASS_TO_PASS ಗೇಟ್‌ಗಳಿರುವ SWE-bench-ಶೈಲಿಯ evaluator. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು SWE-bench, GAIA ಮತ್ತು AgentBench ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಅಭ್ಯರ್ಥಿ patches, agents ಮತ್ತು ಮಾದರಿಗಳು ಸ್ಕ್ರಿಪ್ಟ್ ಬದಲಿಗಳು, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಭಾಗ 1 ತನ್ನ ಪ್ರೋಗ್ರಾಂ ಮಧ್ಯದಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ evaluator ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. ಯಾವುದೇ ನಿಜ SWE-bench ಕಾರ್ಯ, repository ಅಥವಾ ಪ್ರಕಟಿತ ಫಲಿತಾಂಶ ಬಳಸಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Benchmark Needs an Evaluator",
    "textKn": "Benchmark ಗೆ evaluator ಬೇಕು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Repository, Issue, Patch, Tests",
    "headingKn": "Repository, Issue, Patch, Tests",
    "bodyEn": "A SWE-bench task gives an agent a repository and an issue, and asks for a patch. The patch is judged by running tests, not by reading it. FAIL_TO_PASS tests fail before the fix and must pass after it (the bug gate). PASS_TO_PASS tests pass before and must still pass (the regression gate). A task is resolved only if both sets are fully green. Execution is stronger than comparing text with the human patch, but it can only be as strong as the tests, which is what this lab probes.",
    "bodyKn": "SWE-bench ಕಾರ್ಯ agent ಗೆ repository ಮತ್ತು issue ನೀಡಿ patch ಕೇಳುತ್ತದೆ. Patch ಅನ್ನು ಓದಿ ಅಲ್ಲ, tests ಚಲಾಯಿಸಿ ತೀರ್ಮಾನಿಸಲಾಗುತ್ತದೆ. FAIL_TO_PASS tests ಸರಿಪಡಿಸುವ ಮುನ್ನ ವಿಫಲವಾಗಿ ನಂತರ ಪಾಸ್ ಆಗಬೇಕು (ದೋಷ ಗೇಟ್). PASS_TO_PASS tests ಮೊದಲು ಪಾಸ್ ಆಗಿ ಈಗಲೂ ಪಾಸ್ ಆಗಬೇಕು (ಹಿಂಜರಿತ ಗೇಟ್). ಎರಡೂ ಗುಂಪುಗಳು ಸಂಪೂರ್ಣ ಹಸಿರಾದರೆ ಮಾತ್ರ ಕಾರ್ಯ resolved. ಮಾನವ patch ಜೊತೆ ಪಠ್ಯ ಹೋಲಿಕೆಗಿಂತ ಚಲಾವಣೆ ಬಲಿಷ್ಠ, ಆದರೆ ಅದು tests ಷ್ಟೇ ಬಲಿಷ್ಠ, ಈ ಲ್ಯಾಬ್ ಅದನ್ನೇ ಪರೀಕ್ಷಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Two Gates",
    "headingKn": "ಎರಡು ಗೇಟ್‌ಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Two gates decide whether a patch resolves a task</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">issue + repo</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the task</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">candidate patch</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">from the agent</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">run tests</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">execution, not text</text><rect x=\"40\" y=\"110\" width=\"100\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"90\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">FAIL_TO_PASS</text><text x=\"90\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the bug must be fixed</text><rect x=\"160\" y=\"110\" width=\"100\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"210\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">PASS_TO_PASS</text><text x=\"210\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">nothing else may break</text><path d=\"M90,47 H110 M190,47 H210 M250,64 L100,110 M250,64 L210,110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">resolved only if both gates are fully green</text></svg>",
    "captionEn": "Both gates must be fully green for a task to count as resolved.",
    "captionKn": "ಕಾರ್ಯ resolved ಎಂದು ಪರಿಗಣಿಸಲು ಎರಡೂ ಗೇಟ್‌ಗಳು ಸಂಪೂರ್ಣ ಹಸಿರಾಗಬೇಕು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The two test sets",
    "headingKn": "ಎರಡು ಟೆಸ್ಟ್ ಗುಂಪುಗಳು",
    "headers": [
     "",
     "FAIL_TO_PASS",
     "PASS_TO_PASS"
    ],
    "rows": [
     [
      "Before the patch",
      "fails",
      "passes"
     ],
     [
      "After a correct patch",
      "passes",
      "still passes"
     ],
     [
      "What it guards",
      "the bug is fixed",
      "nothing else broke"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Evaluator",
    "textKn": "Evaluator ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "bench_1.py",
    "headingEn": "TestCase, BenchmarkTask, run_test and evaluate",
    "headingKn": "TestCase, BenchmarkTask, run_test ಮತ್ತು evaluate",
    "descEn": "Tests store inputs and expected values, not code. run_test turns an exception into a failed result instead of crashing the evaluator. evaluate runs both gates and returns resolved plus the two pass counts. The toy bug is buggy_add, which subtracts when b is negative.",
    "descKn": "Tests ಇನ್‌ಪುಟ್ ಮತ್ತು ನಿರೀಕ್ಷಿತ ಮೌಲ್ಯಗಳನ್ನು ಇಡುತ್ತವೆ, ಕೋಡ್ ಅಲ್ಲ. run_test exception ಅನ್ನು evaluator ಕುಸಿಸದೆ ವಿಫಲ ಫಲಿತಾಂಶವಾಗಿ ಬದಲಿಸುತ್ತದೆ. evaluate ಎರಡೂ ಗೇಟ್‌ಗಳನ್ನು ಚಲಾಯಿಸಿ resolved ಮತ್ತು ಎರಡು ಪಾಸ್ ಎಣಿಕೆಗಳನ್ನು ಮರಳಿಸುತ್ತದೆ. ಆಟಿಕೆ ದೋಷ buggy_add, ಇದು b ಋಣಾತ್ಮಕವಾದಾಗ ಕಳೆಯುತ್ತದೆ.",
    "code": "@dataclass\nclass TestCase:\n    name: str\n    args: Tuple[Any, ...]\n    expected: Any\n\n\n@dataclass\nclass TestResult:\n    name: str\n    passed: bool\n    detail: str\n\n\n@dataclass\nclass BenchmarkTask:\n    task_id: str\n    title: str\n    buggy_function: Callable\n    fail_to_pass: List[TestCase]\n    pass_to_pass: List[TestCase]\n\n\ndef buggy_add(a, b):\n    if b < 0:\n        return a - b\n    return a + b\n\n\ndef patched_add(a, b):\n    return a + b\n\n\ndef run_test(function, test):\n    try:\n        got = function(*test.args)\n    except Exception as e:\n        return TestResult(test.name, False, f\"{type(e).__name__}: {e}\")\n    return TestResult(test.name, got == test.expected, f\"got {got!r}, expected {test.expected!r}\")\n\n\ndef evaluate(task, candidate):\n    f2p = [run_test(candidate, t) for t in task.fail_to_pass]\n    p2p = [run_test(candidate, t) for t in task.pass_to_pass]\n    return {\"resolved\": all(r.passed for r in f2p) and all(r.passed for r in p2p),\n            \"f2p\": f\"{sum(r.passed for r in f2p)}/{len(f2p)}\", \"p2p\": f\"{sum(r.passed for r in p2p)}/{len(p2p)}\"}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "bench_1.py",
    "headingEn": "Candidate patches, timeout runner and main()",
    "headingKn": "ಅಭ್ಯರ್ಥಿ patches, timeout runner ಮತ್ತು main()",
    "descEn": "Candidates include a correct patch, a no-op, a hard-coded one, an int-only cast, a crash, a flaky patch and an infinite loop. mutants() builds six single-edit variants to score the suite. evaluate_with_timeout runs a candidate in a child process so the evaluator can kill it.",
    "descKn": "ಅಭ್ಯರ್ಥಿಗಳಲ್ಲಿ ಸರಿಯಾದ patch, no-op, hard-coded, int-ಮಾತ್ರ cast, ಕುಸಿತ, flaky patch ಮತ್ತು ಅನಂತ ಲೂಪ್ ಇವೆ. mutants() suite ಗೆ ಅಂಕ ನೀಡಲು ಆರು ಒಂದೇ-ಸಂಪಾದನೆ ರೂಪಾಂತರಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ. evaluate_with_timeout ಅಭ್ಯರ್ಥಿಯನ್ನು ಮಗು process ನಲ್ಲಿ ಚಲಾಯಿಸುತ್ತದೆ, ಇದರಿಂದ evaluator ಅದನ್ನು ಕೊಲ್ಲಬಹುದು.",
    "code": "TASK = BenchmarkTask(\"toy-001\", \"add() mishandles negative b\", buggy_add,\n                     [TestCase(\"neg_b\", (5, -3), 2)],\n                     [TestCase(\"pos\", (2, 3), 5), TestCase(\"zero\", (4, 0), 4)])\n\nSTRONG_P2P = TASK.pass_to_pass + [TestCase(\"neg_a\", (-4, 3), -1), TestCase(\"both_neg\", (-2, -5), -7), TestCase(\"float\", (0.5, 0.25), 0.75),\n                                  TestCase(\"str\", (\"a\", \"b\"), \"ab\"), TestCase(\"big\", (10 ** 12, 1), 10 ** 12 + 1)]\n\n\ndef hardcoded(a, b):\n    return 2 if (a, b) == (5, -3) else buggy_add(a, b)\n\n\ndef no_op(a, b):\n    return buggy_add(a, b)\n\n\ndef int_only(a, b):\n    return int(a) + int(b)\n\n\ndef always_five(a, b):\n    return 5\n\n\ndef crashing(a, b):\n    raise ValueError(\"patch does not apply\")\n\n\ndef flaky(a, b):\n    return a + b if random.random() < 0.8 else a - b\n\n\ndef spin(a, b):\n    while True:\n        pass\n\n\ndef _child(fn, task, q):\n    q.put(evaluate(task, fn))\n\n\ndef evaluate_with_timeout(task, fn, seconds):\n    q = mp.Queue()\n    p = mp.Process(target=_child, args=(fn, task, q))\n    t0 = time.perf_counter()\n    p.start()\n    p.join(seconds)\n    if p.is_alive():\n        p.terminate(); p.join()\n        return {\"resolved\": False, \"detail\": f\"killed after {time.perf_counter() - t0:.1f}s timeout\"}\n    return q.get()\n\n\ndef mutants():\n    \"\"\"Six single-edit variants of the correct function; a good suite should reject all of them.\"\"\"\n    return {\n        \"a - b\": lambda a, b: a - b, \"a * b\": lambda a, b: a * b, \"a + b + 1\": lambda a, b: a + b + 1,\n        \"abs(b) added\": lambda a, b: a + abs(b), \"b<0 -> a-b (original bug)\": buggy_add, \"int() cast\": int_only,\n    }\n\n\ndef section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. The two gates\")\n    print(\"buggy :\", evaluate(TASK, buggy_add))\n    print(\"fixed :\", evaluate(TASK, patched_add))\n    print(\"buggy fails FAIL_TO_PASS (it reproduces the bug) and passes PASS_TO_PASS; the fix passes both\")\n\n    section(\"2. Genuinely checking: candidates that satisfy the gates in the wrong way (3 visible tests)\")\n    cands = {\"correct patch\": patched_add, \"no-op\": no_op, \"hard-coded test input\": hardcoded, \"always returns 5\": always_five,\n             \"int-only cast\": int_only, \"crashes\": crashing}\n    for name, fn in cands.items():\n        print(f\"{name:22} {evaluate(TASK, fn)}\")\n    print(\"'hard-coded test input' resolved the task without fixing the bug, and 'int-only cast' resolved it while breaking floats and strings\")\n\n    section(\"3. Genuinely checking: the same candidates against a stronger PASS_TO_PASS suite\")\n    strong = BenchmarkTask(\"toy-001+\", TASK.title, buggy_add, TASK.fail_to_pass, STRONG_P2P)\n    for name, fn in cands.items():\n        print(f\"{name:22} {evaluate(strong, fn)}\")\n    print(\"adding 5 regression tests rejected both: the int-only patch broke the float and string cases, and the hard-coded patch still contained the original bug for (-2,-5) and for strings, which the new tests exercised; a hard-coded fix survives only while the suite never touches the same defect again\")\n\n    section(\"4. Genuinely measuring: how strong is each test suite (mutation score)\")\n    for label, task in ((\"3 tests (original)\", TASK), (\"8 tests (stronger)\", strong)):\n        muts = mutants()\n        killed = [n for n, fn in muts.items() if not evaluate(task, fn)[\"resolved\"]]\n        print(f\"{label:20} mutants rejected {len(killed)}/{len(muts)} | survived: {[n for n in muts if n not in killed]}\")\n    print(\"a resolved patch means 'passed these tests', and the suite's mutation score says how much that is worth\")\n\n    section(\"5. Genuinely checking: text comparison with a human patch versus execution\")\n    human = \"def add(a, b):\\n    return a + b\\n\"\n    agent = \"def add(a, b):\\n    result = a + b\\n    return result\\n\"\n    ns1, ns2 = {}, {}\n    exec(human, ns1); exec(agent, ns2)\n    print(\"source strings equal:\", human == agent, \"| behaviour on the tests:\", evaluate(TASK, ns2[\"add\"])[\"resolved\"])\n    wrong = \"def add(a, b):\\n    return a+b  # same logic, different spacing\\n\"\n    print(\"whitespace-only variant equal to human text:\", wrong == human)\n    print(\"string matching rejects a correct patch; execution accepts it\")\n\n    section(\"6. Genuinely measuring: a flaky candidate (passes ~80 percent per call)\")\n    random.seed(3)\n    outcomes = [evaluate(TASK, flaky)[\"resolved\"] for _ in range(1000)]\n    print(f\"resolved in {sum(outcomes)} of 1000 evaluations ({sum(outcomes) / 10:.1f} percent)\")\n    print(\"the expected rate is 0.8^2 = 64 percent, not 0.8^3, because the (4, 0) test passes whichever branch runs; a single run is not a verdict, so evaluators rerun or require determinism\")\n\n    section(\"7. Genuinely checking: a patch that never returns\")\n    r = evaluate_with_timeout(TASK, spin, 1.0)\n    print(\"spin():\", r)\n    print(\"without a timeout the evaluator itself would hang; a child process lets it kill the candidate\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. The two gates ---\nbuggy : {'resolved': False, 'f2p': '0/1', 'p2p': '2/2'}\nfixed : {'resolved': True, 'f2p': '1/1', 'p2p': '2/2'}\nbuggy fails FAIL_TO_PASS (it reproduces the bug) and passes PASS_TO_PASS; the fix passes both\n\n--- 2. Genuinely checking: candidates that satisfy the gates in the wrong way (3 visible tests) ---\ncorrect patch          {'resolved': True, 'f2p': '1/1', 'p2p': '2/2'}\nno-op                  {'resolved': False, 'f2p': '0/1', 'p2p': '2/2'}\nhard-coded test input  {'resolved': True, 'f2p': '1/1', 'p2p': '2/2'}\nalways returns 5       {'resolved': False, 'f2p': '0/1', 'p2p': '1/2'}\nint-only cast          {'resolved': True, 'f2p': '1/1', 'p2p': '2/2'}\ncrashes                {'resolved': False, 'f2p': '0/1', 'p2p': '0/2'}\n'hard-coded test input' resolved the task without fixing the bug, and 'int-only cast' resolved it while breaking floats and strings\n\n--- 3. Genuinely checking: the same candidates against a stronger PASS_TO_PASS suite ---\ncorrect patch          {'resolved': True, 'f2p': '1/1', 'p2p': '7/7'}\nno-op                  {'resolved': False, 'f2p': '0/1', 'p2p': '5/7'}\nhard-coded test input  {'resolved': False, 'f2p': '1/1', 'p2p': '5/7'}\nalways returns 5       {'resolved': False, 'f2p': '0/1', 'p2p': '1/7'}\nint-only cast          {'resolved': False, 'f2p': '1/1', 'p2p': '5/7'}\ncrashes                {'resolved': False, 'f2p': '0/1', 'p2p': '0/7'}\nadding 5 regression tests rejected both: the int-only patch broke the float and string cases, and the hard-coded patch still contained the original bug for (-2,-5) and for strings, which the new tests exercised; a hard-coded fix survives only while the suite never touches the same defect again\n\n--- 4. Genuinely measuring: how strong is each test suite (mutation score) ---\n3 tests (original)   mutants rejected 5/6 | survived: ['int() cast']\n8 tests (stronger)   mutants rejected 6/6 | survived: []\na resolved patch means 'passed these tests', and the suite's mutation score says how much that is worth\n\n--- 5. Genuinely checking: text comparison with a human patch versus execution ---\nsource strings equal: False | behaviour on the tests: True\nwhitespace-only variant equal to human text: False\nstring matching rejects a correct patch; execution accepts it\n\n--- 6. Genuinely measuring: a flaky candidate (passes ~80 percent per call) ---\nresolved in 644 of 1000 evaluations (64.4 percent)\nthe expected rate is 0.8^2 = 64 percent, not 0.8^3, because the (4, 0) test passes whichever branch runs; a single run is not a verdict, so evaluators rerun or require determinism\n\n--- 7. Genuinely checking: a patch that never returns ---\nspin(): {'resolved': False, 'detail': 'killed after 1.0s timeout'}\nwithout a timeout the evaluator itself would hang; a child process lets it kill the candidate"
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
    "headingEn": "Genuinely Found: Resolved Means Passed These Tests",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Resolved ಎಂದರೆ ಈ tests ಪಾಸ್ ಆಯಿತು",
    "bodyEn": "Section 2, with 3 visible tests: the correct patch resolved the task, but so did a hard-coded patch that special-cases the input (5, -3) and an int-only cast that breaks floats and strings. The no-op, the always-5 patch and the crashing patch were rejected. Section 3, with 5 more regression tests: the correct patch passed 7 of 7, while the hard-coded and int-only patches dropped to 5 of 7, because the new tests hit the unfixed bug for (-2, -5) and strings, and the float and string cases broke the cast. Section 4 puts a number on it: the 3-test suite rejected 5 of 6 mutants and let the int() cast survive; the 8-test suite rejected all 6.",
    "bodyKn": "ವಿಭಾಗ 2, 3 ಗೋಚರ tests ಜೊತೆ: ಸರಿಯಾದ patch ಕಾರ್ಯ resolve ಮಾಡಿತು, ಹಾಗೆಯೇ ಇನ್‌ಪುಟ್ (5, -3) ಗೆ ವಿಶೇಷ ಪ್ರಕರಣ ಮಾಡುವ hard-coded patch ಮತ್ತು floats ಹಾಗೂ strings ಮುರಿಯುವ int-ಮಾತ್ರ cast ಕೂಡ. no-op, always-5 patch ಮತ್ತು ಕುಸಿಯುವ patch ತಿರಸ್ಕೃತವಾದವು. ವಿಭಾಗ 3, ಇನ್ನೂ 5 ಹಿಂಜರಿತ tests ಜೊತೆ: ಸರಿಯಾದ patch 7 ರಲ್ಲಿ 7 ಪಾಸ್ ಮಾಡಿತು, hard-coded ಮತ್ತು int-ಮಾತ್ರ patches 7 ರಲ್ಲಿ 5 ಕ್ಕೆ ಇಳಿದವು, ಏಕೆಂದರೆ ಹೊಸ tests (-2, -5) ಮತ್ತು strings ಗೆ ಸರಿಪಡಿಸದ ದೋಷಕ್ಕೆ ತಾಗಿದವು, ಮತ್ತು float ಹಾಗೂ string ಪ್ರಕರಣಗಳು cast ಮುರಿದವು. ವಿಭಾಗ 4 ಸಂಖ್ಯೆ ನೀಡುತ್ತದೆ: 3-test suite 6 ರೂಪಾಂತರಗಳಲ್ಲಿ 5 ತಿರಸ್ಕರಿಸಿ int() cast ಉಳಿಯಲು ಬಿಟ್ಟಿತು; 8-test suite ಎಲ್ಲಾ 6 ತಿರಸ್ಕರಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Text Comparison, Flakiness and Hangs",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪಠ್ಯ ಹೋಲಿಕೆ, ಅಸ್ಥಿರತೆ ಮತ್ತು ಸ್ಥಗಿತಗಳು",
    "bodyEn": "Section 5: an agent patch that computes result = a + b and returns it has a different source string from the human patch, so text comparison rejects it, while execution accepts it. Section 6: a patch that is right 80 percent of the time per call resolved in 644 of 1000 evaluations (64.4 percent); the expected value is 0.8 squared, 64 percent, not 0.8 cubed, because the (4, 0) test passes whichever branch runs. A single run is therefore not a verdict. Section 7: a patch with an infinite loop would hang the evaluator; running it in a child process let the harness kill it after 1.0 s and record a failure.",
    "bodyKn": "ವಿಭಾಗ 5: result = a + b ಲೆಕ್ಕಿಸಿ ಮರಳಿಸುವ agent patch ಮಾನವ patch ಗಿಂತ ಬೇರೆ ಮೂಲ ಸ್ಟ್ರಿಂಗ್ ಹೊಂದಿದೆ, ಆದ್ದರಿಂದ ಪಠ್ಯ ಹೋಲಿಕೆ ಅದನ್ನು ತಿರಸ್ಕರಿಸುತ್ತದೆ, ಚಲಾವಣೆ ಸ್ವೀಕರಿಸುತ್ತದೆ. ವಿಭಾಗ 6: ಪ್ರತಿ ಕರೆಗೆ 80 ಶೇಕಡಾ ಸರಿಯಾಗಿರುವ patch 1000 ಮೌಲ್ಯಮಾಪನಗಳಲ್ಲಿ 644 ರಲ್ಲಿ (64.4 ಶೇಕಡಾ) resolve ಆಯಿತು; ನಿರೀಕ್ಷಿತ ಮೌಲ್ಯ 0.8 ವರ್ಗ, 64 ಶೇಕಡಾ, 0.8 ಘನ ಅಲ್ಲ, ಏಕೆಂದರೆ (4, 0) test ಯಾವ ಶಾಖೆ ಚಲಿಸಿದರೂ ಪಾಸ್ ಆಗುತ್ತದೆ. ಆದ್ದರಿಂದ ಒಂದು ಓಟ ತೀರ್ಪು ಅಲ್ಲ. ವಿಭಾಗ 7: ಅನಂತ ಲೂಪ್ ಇರುವ patch evaluator ಅನ್ನು ಸ್ಥಗಿತಗೊಳಿಸುತ್ತಿತ್ತು; ಮಗು process ನಲ್ಲಿ ಚಲಾಯಿಸಿದಾಗ harness 1.0 s ನಂತರ ಅದನ್ನು ಕೊಂದು ವೈಫಲ್ಯ ದಾಖಲಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Execution-based gates make a benchmark objective and hard to talk around, which is why coding-agent leaderboards use them. The lab shows the remaining dependency: the verdict is exactly as trustworthy as the tests, so suite strength has to be measured too.",
    "bodyKn": "ಚಲಾವಣೆ-ಆಧಾರಿತ ಗೇಟ್‌ಗಳು benchmark ಅನ್ನು ವಸ್ತುನಿಷ್ಠ ಮತ್ತು ಮಾತಿನಿಂದ ತಪ್ಪಿಸಿಕೊಳ್ಳಲು ಕಷ್ಟವಾಗಿಸುತ್ತವೆ, ಅದಕ್ಕೇ coding-agent leaderboards ಅವನ್ನು ಬಳಸುತ್ತವೆ. ಉಳಿದ ಅವಲಂಬನೆಯನ್ನು ಲ್ಯಾಬ್ ತೋರಿಸುತ್ತದೆ: ತೀರ್ಪು tests ಷ್ಟೇ ನಂಬಲರ್ಹ, ಆದ್ದರಿಂದ suite ಬಲವನ್ನೂ ಅಳೆಯಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a resolved task means the bug is fixed.\" It means the tests passed; a hard-coded patch resolved the 3-test task without fixing the defect.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"resolved ಕಾರ್ಯ ಎಂದರೆ ದೋಷ ಸರಿಯಾಯಿತು.\" ಅದರ ಅರ್ಥ tests ಪಾಸ್ ಆದವು; hard-coded patch ದೋಷ ಸರಿಪಡಿಸದೆ 3-test ಕಾರ್ಯ resolve ಮಾಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "FAIL_TO_PASS: tests that must flip to passing. PASS_TO_PASS: tests that must stay passing. Resolved: both gates fully green. Mutation score: share of deliberately broken variants a suite rejects. Flaky: sometimes passes, sometimes fails.",
    "bodyKn": "FAIL_TO_PASS: ಪಾಸ್ ಆಗಿ ಬದಲಾಗಬೇಕಾದ tests. PASS_TO_PASS: ಪಾಸ್ ಆಗಿಯೇ ಉಳಿಯಬೇಕಾದ tests. Resolved: ಎರಡೂ ಗೇಟ್ ಸಂಪೂರ್ಣ ಹಸಿರು. Mutation score: ಉದ್ದೇಶಪೂರ್ವಕ ಮುರಿದ ರೂಪಾಂತರಗಳಲ್ಲಿ suite ತಿರಸ್ಕರಿಸುವ ಪಾಲು. Flaky: ಕೆಲವೊಮ್ಮೆ ಪಾಸ್, ಕೆಲವೊಮ್ಮೆ ವಿಫಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The correct patch passed both gates; the buggy original failed FAIL_TO_PASS. 2) A hard-coded patch and an int-only cast resolved the 3-test task. 3) Five more tests dropped both to 5 of 7. 4) The suite rejected 5 of 6 mutants at 3 tests and 6 of 6 at 8. 5) Text comparison rejected a correct patch. 6) A flaky patch resolved 64.4 percent of the time and an infinite loop needed a timeout.",
    "bodyKn": "1) ಸರಿಯಾದ patch ಎರಡೂ ಗೇಟ್ ಪಾಸ್ ಮಾಡಿತು; ದೋಷದ ಮೂಲ FAIL_TO_PASS ವಿಫಲವಾಯಿತು. 2) hard-coded patch ಮತ್ತು int-ಮಾತ್ರ cast 3-test ಕಾರ್ಯ resolve ಮಾಡಿದವು. 3) ಇನ್ನೂ ಐದು tests ಎರಡನ್ನೂ 7 ರಲ್ಲಿ 5 ಕ್ಕೆ ಇಳಿಸಿದವು. 4) Suite 3 tests ನಲ್ಲಿ 6 ರೂಪಾಂತರಗಳಲ್ಲಿ 5 ಮತ್ತು 8 ರಲ್ಲಿ 6 ತಿರಸ್ಕರಿಸಿತು. 5) ಪಠ್ಯ ಹೋಲಿಕೆ ಸರಿಯಾದ patch ತಿರಸ್ಕರಿಸಿತು. 6) Flaky patch 64.4 ಶೇಕಡಾ resolve ಆಯಿತು ಮತ್ತು ಅನಂತ ಲೂಪ್‌ಗೆ timeout ಬೇಕಾಯಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What does FAIL_TO_PASS guard?",
      "qKn": "FAIL_TO_PASS ಏನನ್ನು ಕಾಯುತ್ತದೆ?",
      "opts": [
       "That nothing else broke",
       "That the reported bug is actually fixed",
       "That the patch is short",
       "That the text matches the human patch"
      ],
      "optsKn": [
       "ಬೇರೇನೂ ಮುರಿಯಲಿಲ್ಲ ಎಂಬುದನ್ನು",
       "ವರದಿಯಾದ ದೋಷ ನಿಜವಾಗಿ ಸರಿಯಾಗಿದೆ ಎಂಬುದನ್ನು",
       "patch ಚಿಕ್ಕದಾಗಿದೆ ಎಂಬುದನ್ನು",
       "ಪಠ್ಯ ಮಾನವ patch ಗೆ ಹೊಂದುತ್ತದೆ ಎಂಬುದನ್ನು"
      ],
      "correct": 1
     },
     {
      "q": "Which candidates resolved the task under the 3-test suite?",
      "qKn": "3-test suite ಅಡಿ ಯಾವ ಅಭ್ಯರ್ಥಿಗಳು ಕಾರ್ಯ resolve ಮಾಡಿದರು?",
      "opts": [
       "Only the correct patch",
       "The correct patch, the hard-coded patch and the int-only cast",
       "None",
       "Only the no-op"
      ],
      "optsKn": [
       "ಸರಿಯಾದ patch ಮಾತ್ರ",
       "ಸರಿಯಾದ patch, hard-coded patch ಮತ್ತು int-ಮಾತ್ರ cast",
       "ಯಾರೂ ಇಲ್ಲ",
       "no-op ಮಾತ್ರ"
      ],
      "correct": 1
     },
     {
      "q": "What did the stronger 8-test suite change?",
      "qKn": "8-test suite ಏನು ಬದಲಿಸಿತು?",
      "opts": [
       "Nothing",
       "It accepted only the correct patch and rejected all 6 mutants",
       "It accepted all patches",
       "It removed FAIL_TO_PASS"
      ],
      "optsKn": [
       "ಏನೂ ಇಲ್ಲ",
       "ಸರಿಯಾದ patch ಮಾತ್ರ ಸ್ವೀಕರಿಸಿ ಎಲ್ಲಾ 6 ರೂಪಾಂತರಗಳನ್ನು ತಿರಸ್ಕರಿಸಿತು",
       "ಎಲ್ಲಾ patches ಸ್ವೀಕರಿಸಿತು",
       "FAIL_TO_PASS ತೆಗೆದಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why did the flaky patch resolve 64 percent, not 51?",
      "qKn": "Flaky patch 51 ಅಲ್ಲ, 64 ಶೇಕಡಾ ಏಕೆ resolve ಆಯಿತು?",
      "opts": [
       "A bug in the evaluator",
       "The (4, 0) test passes on either branch, so only two tests were at risk",
       "Random seeds were reset",
       "The timeout fired"
      ],
      "optsKn": [
       "Evaluator ನ ದೋಷ",
       "(4, 0) test ಯಾವ ಶಾಖೆಯಲ್ಲೂ ಪಾಸ್ ಆಗುತ್ತದೆ, ಆದ್ದರಿಂದ ಎರಡು tests ಮಾತ್ರ ಅಪಾಯದಲ್ಲಿದ್ದವು",
       "Random seeds ಮರುಹೊಂದಿಸಲಾಯಿತು",
       "Timeout ಬಂತು"
      ],
      "correct": 1
     },
     {
      "q": "Why run candidates in a child process?",
      "qKn": "ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಮಗು process ನಲ್ಲಿ ಏಕೆ ಚಲಾಯಿಸಬೇಕು?",
      "opts": [
       "It is faster",
       "So the evaluator can kill an infinite loop and record a failure",
       "To hide output",
       "To share memory"
      ],
      "optsKn": [
       "ಅದು ವೇಗ",
       "ಅನಂತ ಲೂಪ್ ಕೊಂದು ವೈಫಲ್ಯ ದಾಖಲಿಸಲು evaluator ಗೆ ಅವಕಾಶ ನೀಡಲು",
       "Output ಮರೆಮಾಡಲು",
       "ಮೆಮೊರಿ ಹಂಚಲು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
