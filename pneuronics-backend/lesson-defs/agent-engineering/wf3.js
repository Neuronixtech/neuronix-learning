module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b32152f",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Anthropic's Workflow Patterns: Simple Over Complex (Part 3 of 3) — Evaluator-Optimizer and the Decision",
 "titleKn": "Anthropic ನ Workflow Patterns: ಸರಳ ಸಂಕೀರ್ಣಕ್ಕಿಂತ ಮೇಲು (ಭಾಗ 3 / 3) — Evaluator-Optimizer ಮತ್ತು ನಿರ್ಧಾರ",
 "desc": "Build a bounded evaluator-optimizer loop, count model calls for all five patterns, encode the workflow-versus-agent decision as code, and find an unverified return value, an evaluator fooled by the task text and an exact-string verdict that wastes calls.",
 "descKn": "ಮಿತಿಯಿರುವ evaluator-optimizer ಚಕ್ರ ನಿರ್ಮಿಸಿ, ಎಲ್ಲಾ ಐದು ಮಾದರಿಗಳ ಮಾದರಿ ಕರೆಗಳನ್ನು ಎಣಿಸಿ, workflow-ಅಥವಾ-agent ನಿರ್ಧಾರವನ್ನು ಕೋಡ್ ಆಗಿ ಸಂಕೇತಿಸಿ, ಮತ್ತು ಪರಿಶೀಲಿಸದ ಹಿಂತಿರುಗಿದ ಮೌಲ್ಯ, ಕಾರ್ಯ ಪಠ್ಯದಿಂದ ಮೋಸಗೊಂಡ ಮೌಲ್ಯಮಾಪಕ ಮತ್ತು ಕರೆಗಳನ್ನು ವ್ಯರ್ಥಮಾಡುವ ನಿಖರ-ಸ್ಟ್ರಿಂಗ್ ತೀರ್ಪು ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Implement a bounded evaluator-optimizer loop.",
  "Return an honest result when the budget is exhausted.",
  "Parse verdicts robustly instead of by exact equality.",
  "Compare the model-call cost of the five patterns.",
  "Apply the workflow-versus-agent decision rules."
 ],
 "objectivesKn": [
  "ಮಿತಿಯಿರುವ evaluator-optimizer ಚಕ್ರ ಅಳವಡಿಸಿ.",
  "ಬಜೆಟ್ ಖಾಲಿಯಾದಾಗ ಪ್ರಾಮಾಣಿಕ ಫಲಿತಾಂಶ ಹಿಂತಿರುಗಿಸಿ.",
  "ತೀರ್ಪುಗಳನ್ನು ನಿಖರ ಸಮಾನತೆಯ ಬದಲು ದೃಢವಾಗಿ parse ಮಾಡಿ.",
  "ಐದು ಮಾದರಿಗಳ ಮಾದರಿ-ಕರೆ ವೆಚ್ಚ ಹೋಲಿಸಿ.",
  "workflow-ಅಥವಾ-agent ನಿರ್ಧಾರ ನಿಯಮಗಳನ್ನು ಅನ್ವಯಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Anthropic's Workflow Patterns: Simple Over Complex (Part 3 of 3)",
    "textKn": "Anthropic ನ Workflow Patterns: ಸರಳ ಸಂಕೀರ್ಣಕ್ಕಿಂತ ಮೇಲು (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: the evaluator-optimizer loop, all five patterns with measured call counts, and the workflow-versus-agent decision. Every output below was genuinely produced by the lab file on Python 3.14.5. The pasted source was cut off in its final quiz. The vote order in section 6 can vary between runs because of the thread race found in Part 2. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: evaluator-optimizer ಚಕ್ರ, ಅಳೆದ ಕರೆ ಎಣಿಕೆಗಳೊಂದಿಗೆ ಎಲ್ಲಾ ಐದು ಮಾದರಿಗಳು, ಮತ್ತು workflow-ಅಥವಾ-agent ನಿರ್ಧಾರ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಅಂಟಿಸಿದ ಮೂಲ ಅದರ ಅಂತಿಮ ರಸಪ್ರಶ್ನೆಯಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು. ಭಾಗ 2 ರಲ್ಲಿ ಕಂಡ thread race ಕಾರಣ ವಿಭಾಗ 6 ರ ಮತ ಕ್ರಮ ಓಟಗಳ ನಡುವೆ ಬದಲಾಗಬಹುದು. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Iterate Under a Budget",
    "textKn": "ಬಜೆಟ್ ಅಡಿಯಲ್ಲಿ ಪುನರಾವರ್ತಿಸಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Evaluator-Optimizer Loop",
    "headingKn": "Evaluator-Optimizer ಚಕ್ರ",
    "bodyEn": "One role proposes a candidate, another evaluates it against the task, and on failure the feedback goes back to improve the candidate, until PASS or an iteration budget is spent. The roles can be the same model with different prompts: a role is not a separate agent. The loop is still a workflow, because the engineer fixed the transitions, the success condition and the maximum number of iterations. A loop does not make an agent; who controls the available actions does. It generalises Self-Refine.",
    "bodyKn": "ಒಂದು ಪಾತ್ರ ಅಭ್ಯರ್ಥಿ ಸೂಚಿಸುತ್ತದೆ, ಇನ್ನೊಂದು ಕಾರ್ಯದ ವಿರುದ್ಧ ಅದನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ, ಮತ್ತು ವಿಫಲವಾದರೆ ಪ್ರತಿಕ್ರಿಯೆ ಅಭ್ಯರ್ಥಿ ಸುಧಾರಿಸಲು ಹಿಂತಿರುಗುತ್ತದೆ, PASS ಆಗುವವರೆಗೆ ಅಥವಾ ಪುನರಾವರ್ತನೆ ಬಜೆಟ್ ಖರ್ಚಾಗುವವರೆಗೆ. ಪಾತ್ರಗಳು ಬೇರೆ prompts ಇರುವ ಅದೇ ಮಾದರಿಯಾಗಿರಬಹುದು: ಪಾತ್ರ ಪ್ರತ್ಯೇಕ agent ಅಲ್ಲ. ಚಕ್ರ ಇನ್ನೂ workflow, ಏಕೆಂದರೆ ಇಂಜಿನಿಯರ್ ಪರಿವರ್ತನೆಗಳು, ಯಶಸ್ಸಿನ ಷರತ್ತು ಮತ್ತು ಗರಿಷ್ಠ ಪುನರಾವರ್ತನೆ ಸಂಖ್ಯೆ ನಿಗದಿಪಡಿಸಿದ್ದಾರೆ. ಚಕ್ರ agent ಮಾಡುವುದಿಲ್ಲ; ಲಭ್ಯ ಕ್ರಿಯೆಗಳನ್ನು ಯಾರು ನಿಯಂತ್ರಿಸುತ್ತಾರೆ ಎಂಬುದು ಮಾಡುತ್ತದೆ. ಇದು Self-Refine ಅನ್ನು ಸಾಮಾನ್ಯೀಕರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Control Versus Autonomy",
    "headingKn": "ನಿಯಂತ್ರಣ ಮತ್ತು ಸ್ವಾಯತ್ತತೆ",
    "svgCode": "<svg viewBox=\"0 0 300 215\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"215\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Five workflow patterns as control-flow shapes</text>\n  <rect x=\"10\" y=\"24\" width=\"86\" height=\"40\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"53\" y=\"38\" fill=\"#93c5fd\" text-anchor=\"middle\">1 CHAIN</text><text x=\"53\" y=\"52\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"6\">A then B then C</text>\n  <rect x=\"107\" y=\"24\" width=\"86\" height=\"40\" rx=\"4\" fill=\"#1e293b\" stroke=\"#34d399\"/><text x=\"150\" y=\"38\" fill=\"#6ee7b7\" text-anchor=\"middle\">2 ROUTE</text><text x=\"150\" y=\"52\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">pick one branch</text>\n  <rect x=\"204\" y=\"24\" width=\"86\" height=\"40\" rx=\"4\" fill=\"#1e293b\" stroke=\"#fbbf24\"/><text x=\"247\" y=\"38\" fill=\"#fde68a\" text-anchor=\"middle\">3 PARALLEL</text><text x=\"247\" y=\"52\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"6\">fan out, fan in</text>\n  <rect x=\"58\" y=\"74\" width=\"86\" height=\"40\" rx=\"4\" fill=\"#1e293b\" stroke=\"#a78bfa\"/><text x=\"101\" y=\"88\" fill=\"#c4b5fd\" text-anchor=\"middle\">4 ORCHESTRATE</text><text x=\"101\" y=\"102\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">task picks workers</text>\n  <rect x=\"156\" y=\"74\" width=\"86\" height=\"40\" rx=\"4\" fill=\"#1e293b\" stroke=\"#f87171\"/><text x=\"199\" y=\"88\" fill=\"#fecaca\" text-anchor=\"middle\">5 EVALUATE</text><text x=\"199\" y=\"102\" fill=\"#fecaca\" text-anchor=\"middle\" font-size=\"6\">bounded feedback loop</text>\n  <path d=\"M20,136 H280\" stroke=\"#475569\"/>\n  <text x=\"20\" y=\"150\" fill=\"#94a3b8\" font-size=\"6\">MORE CONTROL (engineer owns the graph)</text>\n  <text x=\"280\" y=\"150\" fill=\"#94a3b8\" font-size=\"6\" text-anchor=\"end\">MORE AUTONOMY (model owns it)</text>\n  <text x=\"20\" y=\"168\" fill=\"#cbd5e1\" font-size=\"6\">direct call - augmented LLM - the five patterns - agent loop</text>\n  <text x=\"150\" y=\"190\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">start at the left; move right only when a measured failure demands it</text>\n  <text x=\"150\" y=\"203\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">and if plain code can decide, use plain code</text>\n</svg>",
    "captionEn": "Move toward the agent end only when the next step truly depends on what was just observed.",
    "captionKn": "ಮುಂದಿನ ಹೆಜ್ಜೆ ಈಗಷ್ಟೇ ಗಮನಿಸಿದ್ದರ ಮೇಲೆ ನಿಜವಾಗಿ ಅವಲಂಬಿತವಾದಾಗ ಮಾತ್ರ agent ತುದಿಯತ್ತ ಸರಿಯಿರಿ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Loop",
    "textKn": "ಚಕ್ರ ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "wf_3.py",
    "headingEn": "evaluator_optimizer and the decision helper",
    "headingKn": "evaluator_optimizer ಮತ್ತು ನಿರ್ಧಾರ ಸಹಾಯಕ",
    "descEn": "evaluator_optimizer proposes, then loops: evaluate, return on PASS, otherwise improve using the feedback, for at most max_iter iterations. make_pair builds a proposer and evaluator over the same ScriptedLLM. decide() encodes the lesson's selection rules as an ordinary function of eight yes/no facts about the task.",
    "descKn": "evaluator_optimizer ಸೂಚಿಸಿ ನಂತರ ಚಕ್ರ ನಡೆಸುತ್ತದೆ: ಮೌಲ್ಯಮಾಪನ, PASS ಆದರೆ ಹಿಂತಿರುಗು, ಇಲ್ಲದಿದ್ದರೆ ಪ್ರತಿಕ್ರಿಯೆ ಬಳಸಿ ಸುಧಾರಿಸು, ಹೆಚ್ಚೆಂದರೆ max_iter ಪುನರಾವರ್ತನೆ. make_pair ಅದೇ ScriptedLLM ಮೇಲೆ proposer ಮತ್ತು evaluator ನಿರ್ಮಿಸುತ್ತದೆ. decide() ಪಾಠದ ಆಯ್ಕೆ ನಿಯಮಗಳನ್ನು ಕಾರ್ಯದ ಬಗ್ಗೆ ಎಂಟು ಹೌದು/ಇಲ್ಲ ಸಂಗತಿಗಳ ಸಾಮಾನ್ಯ ಕಾರ್ಯವಾಗಿ ಸಂಕೇತಿಸುತ್ತದೆ.",
    "code": "def evaluator_optimizer(llm, task, proposer, evaluator, max_iter=3):\n    candidate = proposer(task)\n    for iteration in range(1, max_iter + 1):\n        verdict = evaluator(task, candidate)\n        print(f\"[iteration {iteration}] candidate={candidate!r} verdict={verdict!r}\")\n        if verdict == \"PASS\":\n            return candidate\n        candidate = llm.generate(f\"Improve this answer using feedback '{verdict}':\\n{candidate}\")\n    return candidate\n\n\ndef make_pair(llm):\n    def proposer(task):\n        return f\"Initial answer for {task}\"\n    def evaluator(task, candidate):\n        return llm.generate(f\"Evaluate this candidate for task '{task}':\\n{candidate}\")\n    return proposer, evaluator\n\n\ndef decide(*, one_call_ok, needs_tools, steps_known, categories, independent, subtasks_vary, quality_loop, next_depends_on_observations):\n    if one_call_ok:\n        return \"direct call\"\n    path = [\"augmented LLM\"] if needs_tools else []\n    if steps_known:\n        if categories:\n            return \"routing\"\n        if independent:\n            return \"parallelization\"\n        if quality_loop:\n            return \"evaluator-optimizer\"\n        return \"prompt chaining\"\n    if subtasks_vary and not next_depends_on_observations:\n        return \"orchestrator-workers\"\n    if next_depends_on_observations:\n        return \"agent\"\n    return \" + \".join(path) or \"prompt chaining\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "wf_3.py",
    "headingEn": "main(): seven sections",
    "headingKn": "main(): ಏಳು ವಿಭಾಗಗಳು",
    "descEn": "main() runs the loop, exhausts the budget, checks what is returned, lets the task text fool the evaluator, tests exact-string verdicts against a structured parser, counts model calls for all five patterns, and runs the decision function over seven example tasks.",
    "descKn": "main() ಚಕ್ರ ಚಲಾಯಿಸುತ್ತದೆ, ಬಜೆಟ್ ಖಾಲಿ ಮಾಡುತ್ತದೆ, ಏನು ಹಿಂತಿರುಗುತ್ತದೆ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ, ಕಾರ್ಯ ಪಠ್ಯ ಮೌಲ್ಯಮಾಪಕವನ್ನು ಮೋಸಗೊಳಿಸಲು ಬಿಡುತ್ತದೆ, ನಿಖರ-ಸ್ಟ್ರಿಂಗ್ ತೀರ್ಪುಗಳನ್ನು ರಚನಾತ್ಮಕ parser ಗೆ ಹೋಲಿಸುತ್ತದೆ, ಎಲ್ಲಾ ಐದು ಮಾದರಿಗಳ ಮಾದರಿ ಕರೆಗಳನ್ನು ಎಣಿಸುತ್ತದೆ, ಮತ್ತು ಏಳು ಉದಾಹರಣೆ ಕಾರ್ಯಗಳ ಮೇಲೆ ನಿರ್ಧಾರ ಕಾರ್ಯ ಚಲಾಯಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Evaluator-optimizer: FAIL changes the next candidate\")\n    llm = ScriptedLLM()\n    proposer, evaluator = make_pair(llm)\n    final = evaluator_optimizer(llm, \"Explain why workflows are useful\", proposer, evaluator)\n    print(\"final:\", final, \"| model calls:\", llm.calls)\n\n    section(\"2. Genuinely checking: the budget ran out, what comes back?\")\n    class AlwaysFail(ScriptedLLM):\n        def generate(self, prompt):\n            self.calls += 1\n            return \"FAIL: still missing something\" if \"evaluate\" in prompt.lower() else \"A revised answer\"\n    l2 = AlwaysFail()\n    p2, e2 = make_pair(l2)\n    out = evaluator_optimizer(l2, \"Explain routing\", p2, e2, max_iter=2)\n    print(\"returned:\", repr(out), \"| the caller gets a string and no signal that every evaluation failed\")\n\n    section(\"3. Genuinely checking: the returned candidate was never evaluated\")\n    l3 = AlwaysFail()\n    p3, e3 = make_pair(l3)\n    out = evaluator_optimizer(l3, \"Explain routing\", p3, e3, max_iter=1)\n    print(\"max_iter=1, evaluations printed above: 1; returned:\", repr(out))\n    print(\"the loop evaluates, fails, improves, and exits: the improved text is returned unchecked\")\n\n    section(\"4. Genuinely checking: the evaluator can read the answer from the task\")\n    l4 = ScriptedLLM()\n    p4, e4 = make_pair(l4)\n    out = evaluator_optimizer(l4, \"Explain why workflows need evidence\", p4, e4)\n    print(\"a bad first answer passed on iteration 1 because the TASK contains the word 'evidence'\")\n\n    section(\"5. Genuinely checking: exact-string verdicts are fragile\")\n    class Polite(ScriptedLLM):\n        def generate(self, prompt):\n            self.calls += 1\n            if \"evaluate\" in prompt.lower():\n                return \"PASS.\"\n            return \"Improved answer with evidence\"\n    l5 = Polite()\n    p5, e5 = make_pair(l5)\n    evaluator_optimizer(l5, \"Explain routing\", p5, e5, max_iter=3)\n    print(\"the model said PASS. with a full stop, so equality never matched and all 3 iterations ran, 6 model calls\")\n    def structured_verdict(text):\n        cleaned = text.strip().upper().rstrip(\".!\")\n        return {\"passed\": cleaned.startswith(\"PASS\"), \"feedback\": text if not cleaned.startswith(\"PASS\") else \"\"}\n    for raw in (\"PASS\", \"PASS.\", \"pass - all criteria satisfied\", \"FAIL: add evidence\"):\n        print(f\"  {raw!r:<34} -> {structured_verdict(raw)}\")\n\n    section(\"6. All five patterns, with measured model calls\")\n    totals = {}\n    l = ScriptedLLM()\n    chained = prompt_chain(l, \"Explain workflow architecture\", [\"Create an outline.\", \"Draft the explanation.\", \"Improve the explanation.\"])\n    totals[\"prompt chaining\"] = l.calls\n    l = ScriptedLLM()\n    category, routed = route(l, \"I was charged twice and need a refund.\", HANDLERS)\n    totals[\"routing\"] = l.calls\n    l = ScriptedLLM()\n    votes, winner = parallel_vote(l, \"Should this deployment proceed?\", n=3)\n    totals[\"parallel voting (3)\"] = l.calls\n    l = ScriptedLLM()\n    selected, results, synthesis = orchestrator_workers(l, \"Research workflow patterns and write code\", WORKERS)\n    totals[\"orchestrator-workers\"] = l.calls\n    import contextlib, io\n    l = ScriptedLLM()\n    pr, ev = make_pair(l)\n    with contextlib.redirect_stdout(io.StringIO()):\n        evaluator_optimizer(l, \"Explain why workflows are useful\", pr, ev)\n    totals[\"evaluator-optimizer\"] = l.calls\n    print(\"chain result    :\", chained)\n    print(\"route           :\", category, \"->\", routed)\n    print(\"vote            :\", sorted(votes), \"->\", winner)\n    print(\"orchestrator    :\", selected)\n    for k, v in totals.items():\n        print(f\"{k:<24} model calls: {v}\")\n    print(\"a single direct call costs 1; every pattern adds calls in exchange for structure\")\n\n    section(\"7. The decision tree as code\")\n    cases = {\n        \"summarise one paragraph\": dict(one_call_ok=True),\n        \"translate, proofread, format\": dict(steps_known=True),\n        \"billing, technical or sales request\": dict(steps_known=True, categories=True),\n        \"security + performance + style review\": dict(steps_known=True, independent=True),\n        \"company research, specialists vary\": dict(subtasks_vary=True),\n        \"write until the rubric passes\": dict(steps_known=True, quality_loop=True),\n        \"investigate a production incident\": dict(next_depends_on_observations=True),\n    }\n    base = dict(one_call_ok=False, needs_tools=False, steps_known=False, categories=False, independent=False, subtasks_vary=False, quality_loop=False, next_depends_on_observations=False)\n    for name, flags in cases.items():\n        print(f\"{name:<40} -> {decide(**{**base, **flags})}\")\n    print(\"validate an email field? plain code, no model at all\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Evaluator-optimizer: FAIL changes the next candidate ---\n[iteration 1] candidate='Initial answer for Explain why workflows are useful' verdict='FAIL: add evidence'\n[iteration 2] candidate='Improved answer with evidence' verdict='PASS'\nfinal: Improved answer with evidence | model calls: 3\n\n--- 2. Genuinely checking: the budget ran out, what comes back? ---\n[iteration 1] candidate='Initial answer for Explain routing' verdict='FAIL: still missing something'\n[iteration 2] candidate='A revised answer' verdict='FAIL: still missing something'\nreturned: 'A revised answer' | the caller gets a string and no signal that every evaluation failed\n\n--- 3. Genuinely checking: the returned candidate was never evaluated ---\n[iteration 1] candidate='Initial answer for Explain routing' verdict='FAIL: still missing something'\nmax_iter=1, evaluations printed above: 1; returned: 'A revised answer'\nthe loop evaluates, fails, improves, and exits: the improved text is returned unchecked\n\n--- 4. Genuinely checking: the evaluator can read the answer from the task ---\n[iteration 1] candidate='Initial answer for Explain why workflows need evidence' verdict='PASS'\na bad first answer passed on iteration 1 because the TASK contains the word 'evidence'\n\n--- 5. Genuinely checking: exact-string verdicts are fragile ---\n[iteration 1] candidate='Initial answer for Explain routing' verdict='PASS.'\n[iteration 2] candidate='Improved answer with evidence' verdict='PASS.'\n[iteration 3] candidate='Improved answer with evidence' verdict='PASS.'\nthe model said PASS. with a full stop, so equality never matched and all 3 iterations ran, 6 model calls\n  'PASS'                             -> {'passed': True, 'feedback': ''}\n  'PASS.'                            -> {'passed': True, 'feedback': ''}\n  'pass - all criteria satisfied'    -> {'passed': True, 'feedback': ''}\n  'FAIL: add evidence'               -> {'passed': False, 'feedback': 'FAIL: add evidence'}\n\n--- 6. All five patterns, with measured model calls ---\nchain result    : Improved answer with evidence\nroute           : billing -> Billing specialist handles: I was charged twice and need a refund.\nvote            : ['NO', 'YES', 'YES'] -> YES\norchestrator    : ['researcher', 'coder']\nprompt chaining          model calls: 3\nrouting                  model calls: 1\nparallel voting (3)      model calls: 3\norchestrator-workers     model calls: 1\nevaluator-optimizer      model calls: 3\na single direct call costs 1; every pattern adds calls in exchange for structure\n\n--- 7. The decision tree as code ---\nsummarise one paragraph                  -> direct call\ntranslate, proofread, format             -> prompt chaining\nbilling, technical or sales request      -> routing\nsecurity + performance + style review    -> parallelization\ncompany research, specialists vary       -> orchestrator-workers\nwrite until the rubric passes            -> evaluator-optimizer\ninvestigate a production incident        -> agent\nvalidate an email field? plain code, no model at all"
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
    "headingEn": "FAIL Changes the Next Candidate",
    "headingKn": "FAIL ಮುಂದಿನ ಅಭ್ಯರ್ಥಿಯನ್ನು ಬದಲಿಸುತ್ತದೆ",
    "bodyEn": "Section 1: iteration 1 evaluates \"Initial answer for Explain why workflows are useful\" and returns \"FAIL: add evidence\". The optimizer produces \"Improved answer with evidence\", iteration 2 returns PASS, and the loop ends after three model calls. The feedback changed the next candidate, which is the mechanism. The budget bounds cost and latency: at most one proposal plus max_iter evaluations and improvements.",
    "bodyKn": "ವಿಭಾಗ 1: ಪುನರಾವರ್ತನೆ 1 \"Initial answer for Explain why workflows are useful\" ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ \"FAIL: add evidence\" ಹಿಂತಿರುಗಿಸುತ್ತದೆ. Optimizer \"Improved answer with evidence\" ಉತ್ಪಾದಿಸುತ್ತದೆ, ಪುನರಾವರ್ತನೆ 2 PASS ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಮತ್ತು ಚಕ್ರ ಮೂರು ಮಾದರಿ ಕರೆಗಳ ನಂತರ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ. ಪ್ರತಿಕ್ರಿಯೆ ಮುಂದಿನ ಅಭ್ಯರ್ಥಿಯನ್ನು ಬದಲಿಸಿತು, ಅದೇ ಕಾರ್ಯವಿಧಾನ. ಬಜೆಟ್ ವೆಚ್ಚ ಮತ್ತು ವಿಳಂಬಕ್ಕೆ ಮಿತಿ ಹಾಕುತ್ತದೆ: ಹೆಚ್ಚೆಂದರೆ ಒಂದು ಪ್ರಸ್ತಾಪ ಜೊತೆ max_iter ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಸುಧಾರಣೆಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Loop Returns an Unevaluated Candidate",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಚಕ್ರ ಮೌಲ್ಯಮಾಪನ ಮಾಡದ ಅಭ್ಯರ್ಥಿ ಹಿಂತಿರುಗಿಸುತ್ತದೆ",
    "bodyEn": "Sections 2 and 3 use an evaluator that always fails. With max_iter=2 the function returns \"A revised answer\" with no signal that every verdict was FAIL. With max_iter=1 only one evaluation is printed, yet the returned text is the improved candidate, which no evaluator ever saw: the loop evaluates, fails, improves and exits. A budget-exhausted loop should return a result object such as passed, candidate and last_feedback, and either evaluate once more after the last improvement or say plainly that the candidate is unverified.",
    "bodyKn": "ವಿಭಾಗ 2 ಮತ್ತು 3 ಯಾವಾಗಲೂ ವಿಫಲವಾಗುವ ಮೌಲ್ಯಮಾಪಕ ಬಳಸುತ್ತವೆ. max_iter=2 ರಲ್ಲಿ ಕಾರ್ಯ ಪ್ರತಿ ತೀರ್ಪು FAIL ಆಗಿತ್ತು ಎಂಬ ಸಂಕೇತವಿಲ್ಲದೆ \"A revised answer\" ಹಿಂತಿರುಗಿಸುತ್ತದೆ. max_iter=1 ರಲ್ಲಿ ಒಂದು ಮೌಲ್ಯಮಾಪನ ಮಾತ್ರ ಮುದ್ರಿತವಾಗುತ್ತದೆ, ಆದರೂ ಹಿಂತಿರುಗಿದ ಪಠ್ಯ ಯಾವ ಮೌಲ್ಯಮಾಪಕವೂ ಎಂದೂ ನೋಡದ ಸುಧಾರಿತ ಅಭ್ಯರ್ಥಿ: ಚಕ್ರ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ, ವಿಫಲವಾಗಿ, ಸುಧಾರಿಸಿ, ನಿರ್ಗಮಿಸುತ್ತದೆ. ಬಜೆಟ್ ಖಾಲಿಯಾದ ಚಕ್ರ passed, candidate ಮತ್ತು last_feedback ನಂತಹ ಫಲಿತಾಂಶ ವಸ್ತು ಹಿಂತಿರುಗಿಸಬೇಕು, ಮತ್ತು ಕೊನೆಯ ಸುಧಾರಣೆಯ ನಂತರ ಇನ್ನೊಮ್ಮೆ ಮೌಲ್ಯಮಾಪನ ಮಾಡಬೇಕು ಅಥವಾ ಅಭ್ಯರ್ಥಿ ಪರಿಶೀಲಿತವಲ್ಲ ಎಂದು ಸ್ಪಷ್ಟವಾಗಿ ಹೇಳಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: An Evaluator Can Read the Answer Key",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮೌಲ್ಯಮಾಪಕ ಉತ್ತರ ಕೀಲಿಯನ್ನು ಓದಬಹುದು",
    "bodyEn": "Section 4 gives the task \"Explain why workflows need evidence\". The evaluator prompt contains the task, the scripted evaluator looks for the word \"evidence\", and a poor first answer passes on iteration 1 because the task itself contains the word. Real evaluators are subject to the analogous leak when the rubric and the candidate share vocabulary. Judge against explicit criteria, keep what is being judged separate from what is being asked, and test the evaluator itself on known-bad candidates.",
    "bodyKn": "ವಿಭಾಗ 4 \"Explain why workflows need evidence\" ಕಾರ್ಯ ನೀಡುತ್ತದೆ. ಮೌಲ್ಯಮಾಪಕ prompt ಕಾರ್ಯ ಹೊಂದಿದೆ, ಸ್ಕ್ರಿಪ್ಟ್ ಮೌಲ್ಯಮಾಪಕ \"evidence\" ಪದ ಹುಡುಕುತ್ತದೆ, ಮತ್ತು ಕಾರ್ಯದಲ್ಲೇ ಆ ಪದ ಇರುವುದರಿಂದ ಕೆಟ್ಟ ಮೊದಲ ಉತ್ತರ ಪುನರಾವರ್ತನೆ 1 ರಲ್ಲಿ ಪಾಸಾಗುತ್ತದೆ. ರೂಬ್ರಿಕ್ ಮತ್ತು ಅಭ್ಯರ್ಥಿ ಶಬ್ದಕೋಶ ಹಂಚಿಕೊಂಡಾಗ ನಿಜವಾದ ಮೌಲ್ಯಮಾಪಕರು ಅಂತಹದೇ ಸೋರಿಕೆಗೆ ಒಳಗಾಗುತ್ತಾರೆ. ಸ್ಪಷ್ಟ ಮಾನದಂಡಗಳ ವಿರುದ್ಧ ತೀರ್ಮಾನಿಸಿ, ಏನನ್ನು ತೀರ್ಮಾನಿಸಲಾಗುತ್ತಿದೆ ಮತ್ತು ಏನು ಕೇಳಲಾಗುತ್ತಿದೆ ಎಂಬುದನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿಡಿ, ಮತ್ತು ಮೌಲ್ಯಮಾಪಕವನ್ನೇ ತಿಳಿದ-ಕೆಟ್ಟ ಅಭ್ಯರ್ಥಿಗಳ ಮೇಲೆ ಪರೀಕ್ಷಿಸಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Exact-String Verdicts Waste Calls",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ನಿಖರ-ಸ್ಟ್ರಿಂಗ್ ತೀರ್ಪುಗಳು ಕರೆಗಳನ್ನು ವ್ಯರ್ಥಮಾಡುತ್ತವೆ",
    "bodyEn": "In section 5 the model says \"PASS.\" with a full stop. The check verdict == \"PASS\" never matches, so the loop keeps improving an acceptable answer for all three iterations and spends six model calls. A parser that strips punctuation and checks the prefix treats \"PASS\", \"PASS.\" and \"pass - all criteria satisfied\" as passes and keeps the text of a failure as feedback. Better still, require structured output with a passed field and a feedback list, so the control signal is separate from the natural-language critique.",
    "bodyKn": "ವಿಭಾಗ 5 ರಲ್ಲಿ ಮಾದರಿ ಪೂರ್ಣವಿರಾಮದೊಂದಿಗೆ \"PASS.\" ಎನ್ನುತ್ತದೆ. verdict == \"PASS\" ಪರಿಶೀಲನೆ ಎಂದೂ ಹೊಂದುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ಚಕ್ರ ಸ್ವೀಕಾರಾರ್ಹ ಉತ್ತರವನ್ನು ಮೂರೂ ಪುನರಾವರ್ತನೆಗಳಲ್ಲಿ ಸುಧಾರಿಸುತ್ತಲೇ ಇದ್ದು ಆರು ಮಾದರಿ ಕರೆಗಳನ್ನು ಖರ್ಚು ಮಾಡುತ್ತದೆ. ವಿರಾಮಚಿಹ್ನೆ ತೆಗೆದು ಪೂರ್ವಪ್ರತ್ಯಯ ಪರಿಶೀಲಿಸುವ parser \"PASS\", \"PASS.\" ಮತ್ತು \"pass - all criteria satisfied\" ಅನ್ನು ಪಾಸ್ ಎಂದು ಪರಿಗಣಿಸಿ ವೈಫಲ್ಯದ ಪಠ್ಯವನ್ನು ಪ್ರತಿಕ್ರಿಯೆಯಾಗಿ ಇಡುತ್ತದೆ. ಇನ್ನೂ ಉತ್ತಮ, passed ಕ್ಷೇತ್ರ ಮತ್ತು feedback ಪಟ್ಟಿ ಇರುವ ರಚನಾತ್ಮಕ ಔಟ್‌ಪುಟ್ ಬೇಕು, ಆಗ ನಿಯಂತ್ರಣ ಸಂಕೇತ ನೈಸರ್ಗಿಕ-ಭಾಷಾ ವಿಮರ್ಶೆಯಿಂದ ಪ್ರತ್ಯೇಕ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Measured Cost and the Decision Function",
    "headingKn": "ಅಳೆದ ವೆಚ್ಚ ಮತ್ತು ನಿರ್ಧಾರ ಕಾರ್ಯ",
    "bodyEn": "Section 6 counts model calls: prompt chaining 3, routing 1, voting 3, orchestrator-workers 1 (the worker selection is code here), evaluator-optimizer 3, against 1 for a direct call. Every pattern buys structure with calls. Section 7 turns the lesson's tree into a function: one paragraph to summarise gives a direct call, translate-proofread-format gives chaining, three known categories give routing, independent reviews give parallelization, varying specialists give orchestrator-workers, a rubric loop gives evaluator-optimizer, and an incident whose next step depends on what was just observed gives an agent. Form validation gives plain code and no model.",
    "bodyKn": "ವಿಭಾಗ 6 ಮಾದರಿ ಕರೆಗಳನ್ನು ಎಣಿಸುತ್ತದೆ: prompt chaining 3, routing 1, voting 3, orchestrator-workers 1 (ಇಲ್ಲಿ ಕೆಲಸಗಾರ ಆಯ್ಕೆ ಕೋಡ್), evaluator-optimizer 3, ನೇರ ಕರೆಗೆ 1 ವಿರುದ್ಧ. ಪ್ರತಿ ಮಾದರಿ ಕರೆಗಳಿಂದ ರಚನೆ ಖರೀದಿಸುತ್ತದೆ. ವಿಭಾಗ 7 ಪಾಠದ ವೃಕ್ಷವನ್ನು ಕಾರ್ಯವಾಗಿಸುತ್ತದೆ: ಸಾರಾಂಶ ಮಾಡುವ ಒಂದು ಪ್ಯಾರಾಗ್ರಾಫ್ ನೇರ ಕರೆ ನೀಡುತ್ತದೆ, translate-proofread-format chaining, ಮೂರು ತಿಳಿದ ವರ್ಗಗಳು routing, ಸ್ವತಂತ್ರ ಪರಿಶೀಲನೆಗಳು ಸಮಾನಾಂತರೀಕರಣ, ಬದಲಾಗುವ ತಜ್ಞರು orchestrator-workers, ರೂಬ್ರಿಕ್ ಚಕ್ರ evaluator-optimizer, ಮತ್ತು ಮುಂದಿನ ಹೆಜ್ಜೆ ಈಗಷ್ಟೇ ಗಮನಿಸಿದ್ದರ ಮೇಲೆ ಅವಲಂಬಿತವಾದ ಘಟನೆ agent ನೀಡುತ್ತದೆ. ಫಾರ್ಮ್ ಮಾನ್ಯತೆ ಸಾಮಾನ್ಯ ಕೋಡ್ ನೀಡುತ್ತದೆ, ಮಾದರಿ ಇಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Measured complexity is the point: build the baseline, find the specific failure, then add the pattern that targets it. Production also needs stopping rules beyond PASS: iteration, token, cost and time budgets, no-improvement detection and human escalation.",
    "bodyKn": "ಅಳೆದ ಸಂಕೀರ್ಣತೆಯೇ ಉದ್ದೇಶ: ಮೂಲಮಟ್ಟ ನಿರ್ಮಿಸಿ, ನಿರ್ದಿಷ್ಟ ವೈಫಲ್ಯ ಕಂಡುಹಿಡಿಯಿರಿ, ನಂತರ ಅದನ್ನು ಗುರಿಯಾಗಿಸುವ ಮಾದರಿ ಸೇರಿಸಿ. Production ಗೆ PASS ಮೀರಿದ ನಿಲುಗಡೆ ನಿಯಮಗಳೂ ಬೇಕು: ಪುನರಾವರ್ತನೆ, token, ವೆಚ್ಚ ಮತ್ತು ಸಮಯ budgets, ಸುಧಾರಣೆ-ಇಲ್ಲದಿರುವಿಕೆ ಪತ್ತೆ ಮತ್ತು ಮಾನವ ಮೇಲ್ಮಟ್ಟಕ್ಕೆ ಒಯ್ಯುವಿಕೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a workflow cannot contain a loop.\" A workflow can branch, loop and fan out as long as the control policy is predefined and bounded.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"workflow ಒಳಗೆ ಚಕ್ರ ಇರಲಾರದು.\" ನಿಯಂತ್ರಣ ನೀತಿ ಪೂರ್ವನಿರ್ಧಾರಿತ ಮತ್ತು ಮಿತಿಯಿರುವವರೆಗೆ workflow ಶಾಖೆ, ಚಕ್ರ ಮತ್ತು fan-out ಹೊಂದಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Proposer, evaluator, optimizer: the three roles. Iteration budget: max_iter. Early termination: stop on PASS. Structured verdict: a passed flag plus feedback. Unverified result: a candidate returned without a final evaluation. Rubric: explicit evaluation criteria. Complexity ladder: direct call to agent.",
    "bodyKn": "Proposer, evaluator, optimizer: ಮೂರು ಪಾತ್ರಗಳು. ಪುನರಾವರ್ತನೆ ಬಜೆಟ್: max_iter. ಆರಂಭಿಕ ಮುಕ್ತಾಯ: PASS ಆದಾಗ ನಿಲ್ಲು. ರಚನಾತ್ಮಕ ತೀರ್ಪು: passed ಧ್ವಜ ಜೊತೆ ಪ್ರತಿಕ್ರಿಯೆ. ಪರಿಶೀಲಿಸದ ಫಲಿತಾಂಶ: ಅಂತಿಮ ಮೌಲ್ಯಮಾಪನವಿಲ್ಲದೆ ಹಿಂತಿರುಗಿದ ಅಭ್ಯರ್ಥಿ. ರೂಬ್ರಿಕ್: ಸ್ಪಷ್ಟ ಮೌಲ್ಯಮಾಪನ ಮಾನದಂಡ. ಸಂಕೀರ್ಣತೆ ಏಣಿ: ನೇರ ಕರೆಯಿಂದ agent ವರೆಗೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Generate, evaluate, improve, bounded by max_iter. 2) Feedback must reach the next candidate. 3) An exhausted budget returned an unverified candidate with no signal. 4) The evaluator passed a bad answer because the task contained its keyword. 5) \"PASS.\" defeated exact equality and cost six calls. 6) Every pattern costs calls: 1 for a direct call, 3 for a chain. 7) Start with a direct call, use code for exact rules, and add autonomy only where the path cannot be known beforehand.",
    "bodyKn": "1) ಉತ್ಪಾದಿಸಿ, ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ, ಸುಧಾರಿಸಿ, max_iter ನಿಂದ ಮಿತಿ. 2) ಪ್ರತಿಕ್ರಿಯೆ ಮುಂದಿನ ಅಭ್ಯರ್ಥಿ ತಲುಪಬೇಕು. 3) ಖಾಲಿಯಾದ ಬಜೆಟ್ ಸಂಕೇತವಿಲ್ಲದೆ ಪರಿಶೀಲಿಸದ ಅಭ್ಯರ್ಥಿ ಹಿಂತಿರುಗಿಸಿತು. 4) ಕಾರ್ಯ ಅದರ ಕೀವರ್ಡ್ ಹೊಂದಿದ್ದರಿಂದ ಮೌಲ್ಯಮಾಪಕ ಕೆಟ್ಟ ಉತ್ತರ ಪಾಸು ಮಾಡಿತು. 5) \"PASS.\" ನಿಖರ ಸಮಾನತೆ ಸೋಲಿಸಿ ಆರು ಕರೆ ವೆಚ್ಚ ಮಾಡಿತು. 6) ಪ್ರತಿ ಮಾದರಿ ಕರೆಗಳನ್ನು ವೆಚ್ಚ ಮಾಡುತ್ತದೆ: ನೇರ ಕರೆಗೆ 1, chain ಗೆ 3. 7) ನೇರ ಕರೆಯಿಂದ ಆರಂಭಿಸಿ, ನಿಖರ ನಿಯಮಗಳಿಗೆ ಕೋಡ್ ಬಳಸಿ, ಮತ್ತು ದಾರಿ ಮೊದಲೇ ತಿಳಿಯಲಾಗದ ಕಡೆ ಮಾತ್ರ ಸ್ವಾಯತ್ತತೆ ಸೇರಿಸಿ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What is the core evaluator-optimizer loop?",
      "qKn": "Evaluator-optimizer ನ ಮೂಲ ಚಕ್ರ ಯಾವುದು?",
      "opts": [
       "Retrieve, rerank, answer",
       "Generate, evaluate, improve, repeat within a budget",
       "Route, search, cache",
       "Plan once and execute"
      ],
      "optsKn": [
       "ಪಡೆ, ಮರುಶ್ರೇಣೀಕರಿಸು, ಉತ್ತರಿಸು",
       "ಬಜೆಟ್ ಒಳಗೆ ಉತ್ಪಾದಿಸು, ಮೌಲ್ಯಮಾಪನ ಮಾಡು, ಸುಧಾರಿಸು, ಪುನರಾವರ್ತಿಸು",
       "Route, search, cache",
       "ಒಮ್ಮೆ ಯೋಜಿಸಿ ಚಲಾಯಿಸು"
      ],
      "correct": 1
     },
     {
      "q": "With max_iter=1 and an evaluator that always fails, what does the function return?",
      "qKn": "max_iter=1 ಮತ್ತು ಯಾವಾಗಲೂ ವಿಫಲವಾಗುವ ಮೌಲ್ಯಮಾಪಕ ಇದ್ದರೆ ಕಾರ್ಯ ಏನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ?",
      "opts": [
       "Nothing",
       "An improved candidate that no evaluator has seen, with no failure signal",
       "An exception",
       "The original candidate"
      ],
      "optsKn": [
       "ಏನೂ ಇಲ್ಲ",
       "ಯಾವ ಮೌಲ್ಯಮಾಪಕವೂ ನೋಡದ, ವೈಫಲ್ಯ ಸಂಕೇತವಿಲ್ಲದ ಸುಧಾರಿತ ಅಭ್ಯರ್ಥಿ",
       "ಒಂದು ವಿನಾಯಿತಿ",
       "ಮೂಲ ಅಭ್ಯರ್ಥಿ"
      ],
      "correct": 1
     },
     {
      "q": "Why did the model's \"PASS.\" cost six model calls?",
      "qKn": "ಮಾದರಿಯ \"PASS.\" ಆರು ಮಾದರಿ ಕರೆಗಳನ್ನು ಏಕೆ ವೆಚ್ಚ ಮಾಡಿತು?",
      "opts": [
       "PASS. is a failure",
       "The check was verdict == \"PASS\", so the full stop prevented a match and the loop improved an acceptable answer three times",
       "The model was slow",
       "Improvements cost double"
      ],
      "optsKn": [
       "PASS. ವೈಫಲ್ಯ",
       "ಪರಿಶೀಲನೆ verdict == \"PASS\" ಆಗಿತ್ತು, ಪೂರ್ಣವಿರಾಮ ಹೊಂದಾಣಿಕೆ ತಡೆಯಿತು ಮತ್ತು ಚಕ್ರ ಸ್ವೀಕಾರಾರ್ಹ ಉತ್ತರವನ್ನು ಮೂರು ಬಾರಿ ಸುಧಾರಿಸಿತು",
       "ಮಾದರಿ ನಿಧಾನ",
       "ಸುಧಾರಣೆಗಳು ಎರಡು ಪಟ್ಟು ವೆಚ್ಚ"
      ],
      "correct": 1
     },
     {
      "q": "If plain Python can check a requirement exactly, what should perform the check?",
      "qKn": "ಸಾಮಾನ್ಯ Python ಅವಶ್ಯಕತೆಯನ್ನು ನಿಖರವಾಗಿ ಪರಿಶೀಲಿಸಬಲ್ಲದಾದರೆ ಯಾವುದು ಪರಿಶೀಲನೆ ಮಾಡಬೇಕು?",
      "opts": [
       "A second LLM",
       "An autonomous critic agent",
       "Deterministic Python code",
       "Three voting agents"
      ],
      "optsKn": [
       "ಎರಡನೇ LLM",
       "ಸ್ವಾಯತ್ತ ವಿಮರ್ಶಕ agent",
       "ನಿರ್ಧಾರಾತ್ಮಕ Python ಕೋಡ್",
       "ಮೂರು ಮತ ಹಾಕುವ agents"
      ],
      "correct": 2
     },
     {
      "q": "Which situation gives the strongest reason to move from a workflow toward an agent?",
      "qKn": "workflow ನಿಂದ agent ಕಡೆಗೆ ಸರಿಯಲು ಯಾವ ಸನ್ನಿವೇಶ ಬಲಿಷ್ಠ ಕಾರಣ ನೀಡುತ್ತದೆ?",
      "opts": [
       "The task needs exactly three predefined steps",
       "Inputs fall into three known categories",
       "Independent sections can run concurrently",
       "The next action repeatedly depends on unpredictable observations from earlier actions"
      ],
      "optsKn": [
       "ಕಾರ್ಯಕ್ಕೆ ಸರಿಯಾಗಿ ಮೂರು ಪೂರ್ವನಿರ್ಧಾರಿತ ಹೆಜ್ಜೆ ಬೇಕು",
       "ಇನ್‌ಪುಟ್‌ಗಳು ಮೂರು ತಿಳಿದ ವರ್ಗಗಳಿಗೆ ಸೇರುತ್ತವೆ",
       "ಸ್ವತಂತ್ರ ವಿಭಾಗಗಳು ಏಕಕಾಲಕ್ಕೆ ಚಲಿಸಬಹುದು",
       "ಮುಂದಿನ ಕ್ರಿಯೆ ಹಿಂದಿನ ಕ್ರಿಯೆಗಳ ಊಹಿಸಲಾಗದ ಗಮನಿಕೆಗಳನ್ನು ಪದೇ ಪದೇ ಅವಲಂಬಿಸುತ್ತದೆ"
      ],
      "correct": 3
     }
    ]
   }
  }
 ]
};
