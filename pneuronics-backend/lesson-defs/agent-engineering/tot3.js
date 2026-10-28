module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6066020ed05b321517",
 "order": 2,
 "type": "interactive",
 "duration": 70,
 "difficulty": "advanced",
 "status": "published",
 "title": "Tree of Thoughts and LATS: Deliberate Search (Part 3 of 3) — Search Cost, Escalation and Choosing the Architecture",
 "titleKn": "Tree of Thoughts ಮತ್ತು LATS: ಉದ್ದೇಶಪೂರ್ವಕ ಹುಡುಕಾಟ (ಭಾಗ 3 / 3) — ಹುಡುಕಾಟ ವೆಚ್ಚ, ಏರಿಕೆ ಮತ್ತು ವಿನ್ಯಾಸ ಆಯ್ಕೆ",
 "desc": "Measure what search costs, compare ToT with a toy LATS, test cheap-first escalation and a noisy evaluator, run the strategy router, and decide when deliberate search is worth its bill.",
 "descKn": "ಹುಡುಕಾಟಕ್ಕೆ ಎಷ್ಟು ವೆಚ್ಚ ಎಂದು ಅಳೆಯಿರಿ, ToT ಅನ್ನು toy LATS ನೊಂದಿಗೆ ಹೋಲಿಸಿ, ಮೊದಲು-ಅಗ್ಗ ಏರಿಕೆ ಮತ್ತು ಗದ್ದಲದ evaluator ಪರೀಕ್ಷಿಸಿ, ತಂತ್ರ router ಚಲಾಯಿಸಿ, ಮತ್ತು ಉದ್ದೇಶಪೂರ್ವಕ ಹುಡುಕಾಟ ತನ್ನ ಬಿಲ್‌ಗೆ ಯೋಗ್ಯವೇ ಯಾವಾಗ ಎಂದು ನಿರ್ಧರಿಸಿ.",
 "objectives": [
  "Compute search-space size and compare ToT and LATS on generated thoughts and evaluations.",
  "Implement and test a cheap-first escalation policy.",
  "Show how evaluator noise reduces accuracy and read the result as a direction, not a curve.",
  "Use the lesson's router to choose among direct, ReAct, ToT and LATS.",
  "Explain stopping rules and why search needs approval when tools have side effects."
 ],
 "objectivesKn": [
  "ಹುಡುಕಾಟ-ಸ್ಥಳ ಗಾತ್ರ ಲೆಕ್ಕಿಸಿ ಮತ್ತು ToT ಹಾಗೂ LATS ಅನ್ನು ಉತ್ಪಾದಿಸಿದ thoughts ಮತ್ತು ಮೌಲ್ಯಮಾಪನಗಳಲ್ಲಿ ಹೋಲಿಸಿ.",
  "ಮೊದಲು-ಅಗ್ಗ ಏರಿಕೆ ನೀತಿ ಅಳವಡಿಸಿ ಪರೀಕ್ಷಿಸಿ.",
  "Evaluator ಗದ್ದಲ ನಿಖರತೆ ಕಡಿಮೆ ಮಾಡುವುದನ್ನು ತೋರಿಸಿ ಮತ್ತು ಫಲಿತಾಂಶವನ್ನು ವಕ್ರರೇಖೆಯಲ್ಲ, ದಿಕ್ಕು ಎಂದು ಓದಿ.",
  "ಪಾಠದ router ಬಳಸಿ direct, ReAct, ToT ಮತ್ತು LATS ನಡುವೆ ಆರಿಸಿ.",
  "ನಿಲುಗಡೆ ನಿಯಮಗಳು ಮತ್ತು tools ಗೆ side effects ಇರುವಾಗ ಹುಡುಕಾಟಕ್ಕೆ ಅನುಮೋದನೆ ಏಕೆ ಬೇಕು ಎಂದು ವಿವರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Tree of Thoughts and LATS: Deliberate Search (Part 3 of 3)",
    "textKn": "Tree of Thoughts ಮತ್ತು LATS: ಉದ್ದೇಶಪೂರ್ವಕ ಹುಡುಕಾಟ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~75 minutes. Part 3 of 3: what search costs, how to decide when it is worth it, adaptive escalation, noisy evaluators and the architecture comparison. Every output was genuinely produced by tot_3.py (built on tot_1.py and tot_2.py) on Python 3.14.5. The cost figures count generated thoughts and score evaluations in a toy, and the final utility table uses invented illustrative numbers, which is labelled in the run. The source text for this part was cut off near its end. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~75 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ ಮೂರನೆಯದು: ಹುಡುಕಾಟಕ್ಕೆ ಎಷ್ಟು ವೆಚ್ಚ, ಅದು ಯೋಗ್ಯವೇ ಎಂದು ಹೇಗೆ ನಿರ್ಧರಿಸುವುದು, ಹೊಂದಿಕೊಳ್ಳುವ ಏರಿಕೆ, ಗದ್ದಲದ evaluators ಮತ್ತು ವಿನ್ಯಾಸ ಹೋಲಿಕೆ. ಎಲ್ಲಾ output tot_3.py (tot_1.py ಮತ್ತು tot_2.py ಮೇಲೆ ನಿರ್ಮಿತ) ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ವೆಚ್ಚ ಅಂಕಿಅಂಶಗಳು toy ನಲ್ಲಿ ಉತ್ಪಾದಿಸಿದ thoughts ಮತ್ತು ಅಂಕ ಮೌಲ್ಯಮಾಪನಗಳನ್ನು ಎಣಿಸುತ್ತವೆ, ಮತ್ತು ಅಂತಿಮ utility ಕೋಷ್ಟಕ ಕಲ್ಪಿತ ವಿವರಣಾತ್ಮಕ ಸಂಖ್ಯೆಗಳನ್ನು ಬಳಸುತ್ತದೆ, ಇದನ್ನು ಓಟದಲ್ಲಿ ಹೆಸರಿಸಲಾಗಿದೆ. ಈ ಭಾಗದ ಮೂಲ ಪಠ್ಯ ಅಂತ್ಯದ ಹತ್ತಿರ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "When Is Search Worth Its Cost",
    "textKn": "ಹುಡುಕಾಟ ತನ್ನ ವೆಚ್ಚಕ್ಕೆ ಯೋಗ್ಯವೇ ಯಾವಾಗ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Question",
    "headingKn": "ಪ್ರಶ್ನೆ",
    "bodyEn": "Nobody should generate five reasoning branches to answer \"what is 15% of 200\". Nobody should trust one trajectory to repair an unfamiliar repository either. The useful question is not whether tree search is powerful but when the extra search pays for itself. Search is resource allocation: it spends limited compute across competing hypotheses, with scores and pruning in ToT and with Q, visits and an exploration bonus in MCTS. Its quality is roughly expansion quality times evaluation quality times allocation quality.",
    "bodyKn": "\"200 ರ 15%\" ಗೆ ಉತ್ತರಿಸಲು ಯಾರೂ ಐದು ತರ್ಕ ಶಾಖೆಗಳನ್ನು ಉತ್ಪಾದಿಸಬಾರದು. ಪರಿಚಿತವಲ್ಲದ ರೆಪೊಸಿಟರಿ ಸರಿಪಡಿಸಲು ಒಂದೇ trajectory ನಂಬಬಾರದೂ ಕೂಡ. ಉಪಯುಕ್ತ ಪ್ರಶ್ನೆ ಮರದ ಹುಡುಕಾಟ ಶಕ್ತಿಯುತವೇ ಎಂದಲ್ಲ, ಹೆಚ್ಚುವರಿ ಹುಡುಕಾಟ ತನ್ನ ವೆಚ್ಚ ಭರಿಸುತ್ತದೆ ಯಾವಾಗ ಎಂದು. ಹುಡುಕಾಟ ಸಂಪನ್ಮೂಲ ಹಂಚಿಕೆ: ಅದು ಸೀಮಿತ ಲೆಕ್ಕಾಚಾರವನ್ನು ಸ್ಪರ್ಧಿಸುವ ಊಹೆಗಳ ನಡುವೆ ವ್ಯಯಿಸುತ್ತದೆ, ToT ನಲ್ಲಿ ಅಂಕ ಮತ್ತು ಕತ್ತರಿಸುವಿಕೆಯಿಂದ, MCTS ನಲ್ಲಿ Q, visits ಮತ್ತು exploration ಬೋನಸ್‌ನಿಂದ. ಅದರ ಗುಣಮಟ್ಟ ಸರಿಸುಮಾರು ವಿಸ್ತರಣೆ ಗುಣಮಟ್ಟ ಗುಣಿಸು ಮೌಲ್ಯಮಾಪನ ಗುಣಮಟ್ಟ ಗುಣಿಸು ಹಂಚಿಕೆ ಗುಣಮಟ್ಟ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The pattern ladder",
    "headingKn": "ಮಾದರಿ ಏಣಿ",
    "headers": [
     "Pattern",
     "Core idea",
     "Branches?",
     "Environment feedback?"
    ],
    "rows": [
     [
      "Direct / chain of thought",
      "One reasoning path",
      "No",
      "No"
     ],
     [
      "ReAct",
      "Reason, act, observe",
      "Usually no",
      "Yes"
     ],
     [
      "Reflexion",
      "Verbal lesson after failure",
      "Sequential retries",
      "Often"
     ],
     [
      "Tree of Thoughts",
      "Search over reasoning alternatives",
      "Yes",
      "Optional"
     ],
     [
      "LATS",
      "MCTS over agent trajectories plus reflection",
      "Yes",
      "Yes"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Experiments",
    "textKn": "ಪ್ರಯೋಗಗಳು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "tot_3.py",
    "headingEn": "Cost counters, the strategy router and a noisy evaluator",
    "headingKn": "ವೆಚ್ಚ ಎಣಿಕೆಗಳು, ತಂತ್ರ router ಮತ್ತು ಗದ್ದಲದ evaluator",
    "descEn": "count_tot and count_lats wrap the earlier searches to count generated thoughts, score evaluations, rollouts and reflections. choose_strategy is the lesson's router: easy goes direct, hard without a verifier goes to ToT, hard with a verifier and high stakes goes to LATS, everything else goes to ReAct. noisy_scorer adds deterministic noise to the value function.",
    "descKn": "count_tot ಮತ್ತು count_lats ಹಿಂದಿನ ಹುಡುಕಾಟಗಳನ್ನು ಸುತ್ತಿ ಉತ್ಪಾದಿಸಿದ thoughts, ಅಂಕ ಮೌಲ್ಯಮಾಪನಗಳು, rollouts ಮತ್ತು reflections ಎಣಿಸುತ್ತವೆ. choose_strategy ಪಾಠದ router: ಸುಲಭ direct ಗೆ, verifier ಇಲ್ಲದ ಕಠಿಣ ToT ಗೆ, verifier ಇರುವ ಹೆಚ್ಚಿನ ಅಪಾಯದ ಕಠಿಣ LATS ಗೆ, ಉಳಿದೆಲ್ಲಾ ReAct ಗೆ. noisy_scorer value function ಗೆ ನಿರ್ಧಾರಾತ್ಮಕ ಗದ್ದಲ ಸೇರಿಸುತ್ತದೆ.",
    "code": "def count_tot(start=5, beam=2):\n    calls = {\"evals\": 0}\n\n    def scorer(n):\n        calls[\"evals\"] += 1\n        return tot_1.evaluate(n)\n\n    node, explored = tot_1.tot_search(start=start, beam_width=beam, scorer=scorer)\n    return node, {\"generated\": explored, \"evaluations\": calls[\"evals\"], \"rollouts\": 0, \"reflections\": 0}\n\n\ndef count_lats(start=5, iterations=8):\n    calls = {\"evals\": 0}\n    orig = tot_2.symbolic_score\n\n    def counting(v):\n        calls[\"evals\"] += 1\n        return orig(v)\n\n    tot_2.symbolic_score = counting\n    try:\n        root, first = tot_2.lats(start=start, iterations=iterations)\n    finally:\n        tot_2.symbolic_score = orig\n\n    def count_nodes(n):\n        return 1 + sum(count_nodes(c) for c in n.children)\n\n    return root, first, {\"generated\": count_nodes(root) - 1, \"evaluations\": calls[\"evals\"],\n                         \"rollouts\": iterations, \"reflections\": iterations}\n\n\ndef choose_strategy(difficulty, verifier_available, correctness_priority):\n    if difficulty == \"easy\":\n        return \"direct\"\n    if difficulty == \"medium\" and not verifier_available:\n        return \"react\"\n    if difficulty == \"hard\" and not verifier_available:\n        return \"tot\"\n    if difficulty == \"hard\" and verifier_available and correctness_priority == \"high\":\n        return \"lats\"\n    return \"react\"\n\n\ndef noisy_scorer(amplitude):\n    def scorer(n):\n        noise = amplitude * (((n.value * 7 + n.depth * 3) % 5) - 2) / 2   # deterministic, in [-amp, +amp]\n        return tot_1.evaluate(n) + noise\n    return scorer"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "tot_3.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() prints search-space arithmetic, compares ToT with the toy LATS on cost, runs the router, tests adaptive escalation over 30 starts, adds evaluator noise, and prints an illustrative cost-adjusted utility table.",
    "descKn": "main() ಹುಡುಕಾಟ-ಸ್ಥಳ ಅಂಕಗಣಿತ ಮುದ್ರಿಸುತ್ತದೆ, ToT ಅನ್ನು toy LATS ನೊಂದಿಗೆ ವೆಚ್ಚದಲ್ಲಿ ಹೋಲಿಸುತ್ತದೆ, router ಚಲಾಯಿಸುತ್ತದೆ, 30 ಆರಂಭಗಳ ಮೇಲೆ ಹೊಂದಿಕೊಳ್ಳುವ ಏರಿಕೆ ಪರೀಕ್ಷಿಸುತ್ತದೆ, evaluator ಗದ್ದಲ ಸೇರಿಸುತ್ತದೆ, ಮತ್ತು ವಿವರಣಾತ್ಮಕ ವೆಚ್ಚ-ಹೊಂದಿಸಿದ utility ಕೋಷ್ಟಕ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Search-space arithmetic (K = breadth, D = depth)\")\n    print(f\"{'K':>3} {'D':>3} {'leaves K^D':>14} {'nodes 1+K+..+K^D':>18}\")\n    for K, D in ((3, 3), (3, 4), (3, 5), (3, 10), (5, 10)):\n        print(f\"{K:>3} {D:>3} {K ** D:>14,} {sum(K ** i for i in range(D + 1)):>18,}\")\n\n    section(\"2. ToT beam search versus the toy LATS on the same problem (start 5)\")\n    node, tcost = count_tot()\n    root, first, lcost = count_lats()\n    print(f\"{'':<14}{'generated':>10}{'evaluations':>13}{'rollouts':>10}{'reflections':>13}\")\n    print(f\"{'ToT beam=2':<14}{tcost['generated']:>10}{tcost['evaluations']:>13}{tcost['rollouts']:>10}{tcost['reflections']:>13}\")\n    print(f\"{'LATS 8 iter':<14}{lcost['generated']:>10}{lcost['evaluations']:>13}{lcost['rollouts']:>10}{lcost['reflections']:>13}\")\n    print(\"both reach 24 on this instance; ToT returned\", node.expression, \"| LATS first rollout hit at iteration\", first)\n\n    section(\"3. The strategy router from the lesson\")\n    cases = [(\"easy\", False, \"low\"), (\"medium\", False, \"low\"), (\"hard\", False, \"high\"),\n             (\"hard\", True, \"high\"), (\"hard\", True, \"low\"), (\"medium\", True, \"high\")]\n    for d, v, p in cases:\n        print(f\"difficulty={d:<7} verifier={str(v):<5} priority={p:<5} -> {choose_strategy(d, v, p)}\")\n\n    section(\"4. Adaptive escalation on starts 1..30: greedy first, search only on failure\")\n    greedy_cost = escalate_cost = always_cost = 0\n    solved_greedy = solved_after = unsolved = 0\n    for s in range(1, 31):\n        n1, ex1 = tot_1.tot_search(start=s, beam_width=1)\n        greedy_cost += ex1\n        if n1:\n            solved_greedy += 1\n            escalate_cost += ex1\n        else:\n            n3, ex3 = tot_1.tot_search(start=s, beam_width=3)\n            escalate_cost += ex1 + ex3\n            if n3:\n                solved_after += 1\n            else:\n                unsolved += 1\n        _, exa = tot_1.tot_search(start=s, beam_width=3)\n        always_cost += exa\n    print(f\"solved by the cheap greedy attempt: {solved_greedy}/30\")\n    print(f\"rescued by escalating to beam 3:    {solved_after}/30\")\n    print(f\"unsolved even at beam 3:            {unsolved}/30\")\n    print(f\"thoughts generated: always beam 3 = {always_cost}, escalate on failure = {escalate_cost}\")\n\n    section(\"5. Evaluator noise (deterministic) and ToT beam 2, starts 1..30\")\n    print(f\"{'noise amplitude':>16} {'solved':>8}\")\n    for amp in (0.0, 0.01, 0.03, 0.06, 0.12):\n        solved = sum(tot_1.tot_search(start=s, beam_width=2, scorer=noisy_scorer(amp))[0] is not None for s in range(1, 31))\n        print(f\"{amp:>16} {solved:>5}/30\")\n    print(\"scores here are about 0.05 to 1.0, so noise of 0.06 or more is the same size as the signal for most states\")\n\n    section(\"6. Cost-adjusted utility: Quality - lambda * Cost (ILLUSTRATIVE numbers, not measurements)\")\n    print(\"method A: quality 0.90, cost 1;  method B: quality 0.91, cost 100\")\n    for lam in (0.0, 0.0001, 0.001, 0.01):\n        ua, ub = 0.90 - lam * 1, 0.91 - lam * 100\n        print(f\"lambda={lam:<7} U(A)={ua:.4f}  U(B)={ub:.4f}  -> prefer {'B' if ub > ua else 'A'}\")\n    print(\"one MCTS iteration at 1500 tokens x 50 iterations =\", 1500 * 50, \"tokens before environment context\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Search-space arithmetic (K = breadth, D = depth) ---\n  K   D     leaves K^D   nodes 1+K+..+K^D\n  3   3             27                 40\n  3   4             81                121\n  3   5            243                364\n  3  10         59,049             88,573\n  5  10      9,765,625         12,207,031\n\n--- 2. ToT beam search versus the toy LATS on the same problem (start 5) ---\n               generated  evaluations  rollouts  reflections\nToT beam=2            15           16         0            0\nLATS 8 iter           27           59         8            8\nboth reach 24 on this instance; ToT returned (((5 * 2) * 2) + 4) | LATS first rollout hit at iteration 1\n\n--- 3. The strategy router from the lesson ---\ndifficulty=easy    verifier=False priority=low   -> direct\ndifficulty=medium  verifier=False priority=low   -> react\ndifficulty=hard    verifier=False priority=high  -> tot\ndifficulty=hard    verifier=True  priority=high  -> lats\ndifficulty=hard    verifier=True  priority=low   -> react\ndifficulty=medium  verifier=True  priority=high  -> react\n\n--- 4. Adaptive escalation on starts 1..30: greedy first, search only on failure ---\nsolved by the cheap greedy attempt: 21/30\nrescued by escalating to beam 3:    3/30\nunsolved even at beam 3:            6/30\nthoughts generated: always beam 3 = 621, escalate on failure = 543\n\n--- 5. Evaluator noise (deterministic) and ToT beam 2, starts 1..30 ---\n noise amplitude   solved\n             0.0    23/30\n            0.01    22/30\n            0.03    20/30\n            0.06    21/30\n            0.12    19/30\nscores here are about 0.05 to 1.0, so noise of 0.06 or more is the same size as the signal for most states\n\n--- 6. Cost-adjusted utility: Quality - lambda * Cost (ILLUSTRATIVE numbers, not measurements) ---\nmethod A: quality 0.90, cost 1;  method B: quality 0.91, cost 100\nlambda=0.0     U(A)=0.9000  U(B)=0.9100  -> prefer B\nlambda=0.0001  U(A)=0.8999  U(B)=0.9000  -> prefer B\nlambda=0.001   U(A)=0.8990  U(B)=0.8100  -> prefer A\nlambda=0.01    U(A)=0.8900  U(B)=-0.0900  -> prefer A\none MCTS iteration at 1500 tokens x 50 iterations = 75000 tokens before environment context"
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
    "headingEn": "The Space and the Bill",
    "headingKn": "ಸ್ಥಳ ಮತ್ತು ಬಿಲ್",
    "bodyEn": "Section 1 is arithmetic: K = 3 gives 27 leaves and 40 nodes at depth 3, 81 and 121 at depth 4, 59,049 leaves at depth 10, and K = 5 at depth 10 gives 9,765,625 leaves and about 12.2 million nodes. Section 2 puts the two searches on the same problem. ToT with beam 2 generated 15 thoughts and made 16 score evaluations. The toy LATS with 8 iterations generated 27 nodes, made 59 evaluations, ran 8 rollouts and wrote 8 reflections. Both reached 24, and LATS did about 3.7 times the evaluations. At 1,500 tokens per iteration, 50 iterations would be 75,000 tokens before environment context.",
    "bodyKn": "ವಿಭಾಗ 1 ಅಂಕಗಣಿತ: K = 3 ಆಳ 3 ರಲ್ಲಿ 27 ಎಲೆಗಳು ಮತ್ತು 40 ನೋಡ್‌ಗಳು, ಆಳ 4 ರಲ್ಲಿ 81 ಮತ್ತು 121, ಆಳ 10 ರಲ್ಲಿ 59,049 ಎಲೆಗಳು, ಮತ್ತು K = 5 ಆಳ 10 ರಲ್ಲಿ 9,765,625 ಎಲೆಗಳು ಮತ್ತು ಸುಮಾರು 12.2 ಮಿಲಿಯನ್ ನೋಡ್‌ಗಳು. ವಿಭಾಗ 2 ಎರಡು ಹುಡುಕಾಟಗಳನ್ನು ಒಂದೇ ಸಮಸ್ಯೆಯಲ್ಲಿ ಇಡುತ್ತದೆ. Beam 2 ಜೊತೆ ToT 15 thoughts ಉತ್ಪಾದಿಸಿ 16 ಅಂಕ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿತು. 8 ಪುನರಾವರ್ತನೆಯ toy LATS 27 ನೋಡ್‌ಗಳನ್ನು ಉತ್ಪಾದಿಸಿ, 59 ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ, 8 rollouts ಚಲಾಯಿಸಿ 8 reflections ಬರೆಯಿತು. ಎರಡೂ 24 ತಲುಪಿದವು, ಮತ್ತು LATS ಸುಮಾರು 3.7 ಪಟ್ಟು ಮೌಲ್ಯಮಾಪನ ಮಾಡಿತು. ಪ್ರತಿ ಪುನರಾವರ್ತನೆಗೆ 1,500 tokens ಆದರೆ 50 ಪುನರಾವರ್ತನೆ ಪರಿಸರ context ಮೊದಲು 75,000 tokens."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Measured: Escalation Saves Less Than the Slogan Suggests",
    "headingKn": "ನಿಜವಾಗಿ ಅಳೆದದ್ದು: ಏರಿಕೆ ಘೋಷಣೆ ಸೂಚಿಸುವುದಕ್ಕಿಂತ ಕಡಿಮೆ ಉಳಿಸುತ್ತದೆ",
    "bodyEn": "Section 4 runs the cheap-first pattern over starts 1 to 30. A greedy attempt (beam 1) solves 21 of 30, escalating the failures to beam 3 rescues 3 more, and 6 stay unsolved even at beam 3. Always using beam 3 generates 621 thoughts; trying greedy first and escalating only on failure generates 543, about 13 percent fewer, for the same 24 solved. Adaptive compute is real but its benefit depends on how often the cheap attempt succeeds and on how cheap it really is. The 6 unsolved starts also show that more search cannot fix a limit set by the depth budget and the operator set.",
    "bodyKn": "ವಿಭಾಗ 4 ಮೊದಲು-ಅಗ್ಗ ಮಾದರಿಯನ್ನು ಆರಂಭ 1 ರಿಂದ 30 ರ ಮೇಲೆ ಚಲಾಯಿಸುತ್ತದೆ. Greedy ಪ್ರಯತ್ನ (beam 1) 30 ರಲ್ಲಿ 21 ಪರಿಹರಿಸುತ್ತದೆ, ವೈಫಲ್ಯಗಳನ್ನು beam 3 ಗೆ ಏರಿಸಿದರೆ ಇನ್ನೂ 3 ರಕ್ಷಿಸಲ್ಪಡುತ್ತವೆ, ಮತ್ತು 6 beam 3 ರಲ್ಲೂ ಪರಿಹಾರವಾಗುವುದಿಲ್ಲ. ಯಾವಾಗಲೂ beam 3 ಬಳಸಿದರೆ 621 thoughts; ಮೊದಲು greedy ಪ್ರಯತ್ನಿಸಿ ವೈಫಲ್ಯದಲ್ಲಿ ಮಾತ್ರ ಏರಿಸಿದರೆ 543, ಸುಮಾರು 13 ಶೇಕಡಾ ಕಡಿಮೆ, ಅದೇ 24 ಪರಿಹಾರಕ್ಕೆ. ಹೊಂದಿಕೊಳ್ಳುವ ಲೆಕ್ಕಾಚಾರ ನಿಜ ಆದರೆ ಅದರ ಲಾಭ ಅಗ್ಗದ ಪ್ರಯತ್ನ ಎಷ್ಟು ಬಾರಿ ಯಶಸ್ವಿಯಾಗುತ್ತದೆ ಮತ್ತು ಅದು ನಿಜವಾಗಿ ಎಷ್ಟು ಅಗ್ಗ ಎಂಬುದರ ಮೇಲೆ ಅವಲಂಬಿತ. 6 ಪರಿಹಾರವಾಗದ ಆರಂಭಗಳು ಆಳ budget ಮತ್ತು operator ಗಣ ಹಾಕಿದ ಮಿತಿಯನ್ನು ಹೆಚ್ಚು ಹುಡುಕಾಟ ಸರಿಪಡಿಸಲಾರದು ಎಂದೂ ತೋರಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Measured: Noise Costs Accuracy, Not Smoothly",
    "headingKn": "ನಿಜವಾಗಿ ಅಳೆದದ್ದು: ಗದ್ದಲ ನಿಖರತೆ ಕಳೆಯುತ್ತದೆ, ಸರಾಗವಾಗಿ ಅಲ್ಲ",
    "bodyEn": "Section 5 adds a deterministic pseudo-noise to the value function and runs beam 2 over 30 starts. Solved counts are 23 with no noise, 22 at amplitude 0.01, 20 at 0.03, 21 at 0.06 and 19 at 0.12. Accuracy falls as the evaluator gets noisier, though not monotonically (0.06 scored higher than 0.03), because with only 30 starts and a fixed noise pattern, one reordering at one depth changes a result. Treat it as direction, not a curve. State scores here span roughly 0.05 to 1.0, so noise of 0.06 or more is the same size as the signal for most states.",
    "bodyKn": "ವಿಭಾಗ 5 value function ಗೆ ನಿರ್ಧಾರಾತ್ಮಕ ನಕಲಿ-ಗದ್ದಲ ಸೇರಿಸಿ 30 ಆರಂಭಗಳ ಮೇಲೆ beam 2 ಚಲಾಯಿಸುತ್ತದೆ. ಪರಿಹರಿಸಿದ ಸಂಖ್ಯೆ ಗದ್ದಲವಿಲ್ಲದೆ 23, ವೈಶಾಲ್ಯ 0.01 ರಲ್ಲಿ 22, 0.03 ರಲ್ಲಿ 20, 0.06 ರಲ್ಲಿ 21 ಮತ್ತು 0.12 ರಲ್ಲಿ 19. Evaluator ಹೆಚ್ಚು ಗದ್ದಲದ್ದಾದಂತೆ ನಿಖರತೆ ಕುಸಿಯುತ್ತದೆ, ಆದರೆ ಏಕತಾನವಾಗಿ ಅಲ್ಲ (0.06 ಅಂಕ 0.03 ಕ್ಕಿಂತ ಹೆಚ್ಚು), ಏಕೆಂದರೆ ಕೇವಲ 30 ಆರಂಭಗಳು ಮತ್ತು ಸ್ಥಿರ ಗದ್ದಲ ಮಾದರಿಯೊಂದಿಗೆ ಒಂದು ಆಳದಲ್ಲಿ ಒಂದು ಮರುಕ್ರಮ ಫಲಿತಾಂಶ ಬದಲಿಸುತ್ತದೆ. ಇದನ್ನು ದಿಕ್ಕು ಎಂದು ಪರಿಗಣಿಸಿ, ವಕ್ರರೇಖೆ ಎಂದಲ್ಲ. ಇಲ್ಲಿ ಸ್ಥಿತಿ ಅಂಕಗಳು ಸುಮಾರು 0.05 ರಿಂದ 1.0 ವ್ಯಾಪ್ತಿ, ಆದ್ದರಿಂದ 0.06 ಅಥವಾ ಹೆಚ್ಚಿನ ಗದ್ದಲ ಬಹುತೇಕ ಸ್ಥಿತಿಗಳಿಗೆ ಸಂಕೇತದ ಗಾತ್ರದಷ್ಟೇ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Router and the Cost-Adjusted Choice",
    "headingKn": "Router ಮತ್ತು ವೆಚ್ಚ-ಹೊಂದಿಸಿದ ಆಯ್ಕೆ",
    "bodyEn": "Section 3 runs the lesson's router: easy to direct, medium without a verifier to ReAct, hard without a verifier to ToT, hard with a verifier and high stakes to LATS. A hard task with a verifier but low priority falls to ReAct, as does a medium task with a verifier. Section 6 uses invented numbers (quality 0.90 at cost 1 against 0.91 at cost 100) to show Utility = Quality - lambda x Cost. With lambda 0 or 0.0001 the expensive method wins, and from lambda 0.001 the cheap one wins. The real choice is the value of lambda for your product, and it depends on latency, money and the cost of being wrong.",
    "bodyKn": "ವಿಭಾಗ 3 ಪಾಠದ router ಚಲಾಯಿಸುತ್ತದೆ: ಸುಲಭ direct ಗೆ, verifier ಇಲ್ಲದ ಮಧ್ಯಮ ReAct ಗೆ, verifier ಇಲ್ಲದ ಕಠಿಣ ToT ಗೆ, verifier ಇರುವ ಹೆಚ್ಚಿನ ಅಪಾಯದ ಕಠಿಣ LATS ಗೆ. Verifier ಇರುವ ಆದರೆ ಕಡಿಮೆ ಆದ್ಯತೆಯ ಕಠಿಣ ಕಾರ್ಯ ReAct ಗೆ ಬೀಳುತ್ತದೆ, verifier ಇರುವ ಮಧ್ಯಮ ಕಾರ್ಯವೂ ಹಾಗೆಯೇ. ವಿಭಾಗ 6 ಕಲ್ಪಿತ ಸಂಖ್ಯೆಗಳನ್ನು (ವೆಚ್ಚ 1 ರಲ್ಲಿ ಗುಣಮಟ್ಟ 0.90 ವಿರುದ್ಧ ವೆಚ್ಚ 100 ರಲ್ಲಿ 0.91) ಬಳಸಿ Utility = Quality - lambda x Cost ತೋರಿಸುತ್ತದೆ. lambda 0 ಅಥವಾ 0.0001 ರಲ್ಲಿ ದುಬಾರಿ ವಿಧಾನ ಗೆಲ್ಲುತ್ತದೆ, ಮತ್ತು lambda 0.001 ರಿಂದ ಅಗ್ಗದ್ದು. ನಿಜವಾದ ಆಯ್ಕೆ ನಿಮ್ಮ ಉತ್ಪನ್ನಕ್ಕೆ lambda ಮೌಲ್ಯ, ಮತ್ತು ಅದು ವಿಳಂಬ, ಹಣ ಮತ್ತು ತಪ್ಪಾಗುವ ವೆಚ್ಚದ ಮೇಲೆ ಅವಲಂಬಿತ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Production Design",
    "textKn": "Production ವಿನ್ಯಾಸ",
    "level": "H2"
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Questions for choosing a search architecture",
    "headingKn": "ಹುಡುಕಾಟ ವಿನ್ಯಾಸ ಆರಿಸಲು ಪ್ರಶ್ನೆಗಳು",
    "headers": [
     "Question",
     "If the answer is yes"
    ],
    "rows": [
     [
      "Is the task hard and does a single trajectory often fail?",
      "Consider search at all"
     ],
     [
      "Can candidates be checked cheaply and reliably (tests, parser, calculator)?",
      "Search becomes much more attractive; prefer the verifier to model judgment"
     ],
     [
      "Is the environment predictable enough to plan up front?",
      "Consider ReWOO-style planning instead"
     ],
     [
      "Is latency or cost tight?",
      "Gate the search: cheap attempt first, escalate on failure"
     ],
     [
      "Is correctness valuable enough to pay for many candidates?",
      "ToT or LATS may be justified"
     ]
    ]
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Escalation, Stopping and the Evaluator Bottleneck",
    "headingKn": "ಏರಿಕೆ, ನಿಲುಗಡೆ ಮತ್ತು Evaluator ತಡೆ",
    "bodyEn": "A practical agent tries a cheap path, verifies, and escalates to reflection and then to search only if verification fails. Every search needs stopping rules: goal reached, iteration or token budget, time budget, no improvement for N rounds, or hand-off to a human. The evaluator is usually the bottleneck. Combine model judgment with environment checks, weight objective checks higher, and remember that tests can be incomplete. Search also costs tokens, latency, tool calls and, for state-changing tools, side effects, so a search that executes real actions needs idempotency and approval, not only a good score.",
    "bodyKn": "ಪ್ರಾಯೋಗಿಕ agent ಅಗ್ಗದ ಮಾರ್ಗ ಪ್ರಯತ್ನಿಸಿ, ಪರಿಶೀಲಿಸಿ, ಪರಿಶೀಲನೆ ವಿಫಲವಾದರೆ ಮಾತ್ರ reflection ಗೆ ನಂತರ ಹುಡುಕಾಟಕ್ಕೆ ಏರುತ್ತದೆ. ಪ್ರತಿ ಹುಡುಕಾಟಕ್ಕೆ ನಿಲುಗಡೆ ನಿಯಮಗಳು ಬೇಕು: ಗುರಿ ತಲುಪಿದೆ, ಪುನರಾವರ್ತನೆ ಅಥವಾ token budget, ಸಮಯ budget, N ಸುತ್ತು ಸುಧಾರಣೆ ಇಲ್ಲ, ಅಥವಾ ಮನುಷ್ಯರಿಗೆ ಹಸ್ತಾಂತರ. Evaluator ಸಾಮಾನ್ಯವಾಗಿ ತಡೆ. ಮಾದರಿ ವಿವೇಚನೆಯನ್ನು ಪರಿಸರ ಪರಿಶೀಲನೆಗಳೊಂದಿಗೆ ಸೇರಿಸಿ, ವಸ್ತುನಿಷ್ಠ ಪರಿಶೀಲನೆಗಳಿಗೆ ಹೆಚ್ಚು ತೂಕ ನೀಡಿ, ಮತ್ತು tests ಅಪೂರ್ಣವಾಗಿರಬಹುದು ಎಂದು ನೆನಪಿಡಿ. ಹುಡುಕಾಟಕ್ಕೆ tokens, ವಿಳಂಬ, tool ಕರೆಗಳು ಮತ್ತು ಸ್ಥಿತಿ ಬದಲಿಸುವ tools ಗೆ side effects ವೆಚ್ಚವೂ ಇದೆ, ಆದ್ದರಿಂದ ನಿಜವಾದ ಕ್ರಿಯೆಗಳನ್ನು ಚಲಾಯಿಸುವ ಹುಡುಕಾಟಕ್ಕೆ ಒಳ್ಳೆಯ ಅಂಕ ಮಾತ್ರವಲ್ಲ, idempotency ಮತ್ತು ಅನುಮೋದನೆ ಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Deliberate search is how extra inference compute is turned into reliability on hard problems with checkable candidates, and gating it keeps the cost proportional to difficulty. Seen as a ladder (direct, ReAct, Reflexion, ToT, LATS), each rung adds a capability and a bill.",
    "bodyKn": "ಉದ್ದೇಶಪೂರ್ವಕ ಹುಡುಕಾಟ ಹೆಚ್ಚುವರಿ ನಿರ್ಧಾರ-ಸಮಯದ ಲೆಕ್ಕಾಚಾರವನ್ನು ಪರಿಶೀಲಿಸಬಹುದಾದ ಅಭ್ಯರ್ಥಿಗಳಿರುವ ಕಠಿಣ ಸಮಸ್ಯೆಗಳಲ್ಲಿ ವಿಶ್ವಾಸಾರ್ಹತೆಯಾಗಿ ಪರಿವರ್ತಿಸುವ ಮಾರ್ಗ, ಮತ್ತು ಅದನ್ನು ದ್ವಾರ ಮಾಡುವುದು ವೆಚ್ಚವನ್ನು ಕಷ್ಟಕ್ಕೆ ಅನುಪಾತದಲ್ಲಿಡುತ್ತದೆ. ಏಣಿಯಾಗಿ ನೋಡಿದರೆ (direct, ReAct, Reflexion, ToT, LATS), ಪ್ರತಿ ಹಂತ ಒಂದು ಸಾಮರ್ಥ್ಯ ಮತ್ತು ಒಂದು ಬಿಲ್ ಸೇರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Where This Appears in AI Systems",
    "headingKn": "AI ವ್ಯವಸ್ಥೆಗಳಲ್ಲಿ ಇದು ಎಲ್ಲಿ ಕಾಣುತ್ತದೆ",
    "bodyEn": "Code repair with a test suite is the clearest fit: candidate patches are scored by the environment. Competitive maths and puzzle solving use value models. Long web tasks use plan-and-search hybrids. Easy conversational and formatting tasks use none of it. Production routers decide per request based on difficulty, verifier availability and stakes.",
    "bodyKn": "ಪರೀಕ್ಷಾ ಸಂಗ್ರಹ ಇರುವ ಕೋಡ್ ದುರಸ್ತಿ ಸ್ಪಷ್ಟ ಹೊಂದಾಣಿಕೆ: ಅಭ್ಯರ್ಥಿ patches ಗೆ ಪರಿಸರ ಅಂಕ ನೀಡುತ್ತದೆ. ಸ್ಪರ್ಧಾತ್ಮಕ ಗಣಿತ ಮತ್ತು ಒಗಟು ಪರಿಹಾರ value ಮಾದರಿ ಬಳಸುತ್ತವೆ. ಉದ್ದದ ವೆಬ್ ಕಾರ್ಯಗಳು plan-and-search ಮಿಶ್ರಣ ಬಳಸುತ್ತವೆ. ಸುಲಭ ಸಂಭಾಷಣೆ ಮತ್ತು ರೂಪಣ ಕಾರ್ಯಗಳು ಇದರಲ್ಲಿ ಯಾವುದನ್ನೂ ಬಳಸುವುದಿಲ್ಲ. Production routers ಕಷ್ಟ, verifier ಲಭ್ಯತೆ ಮತ್ತು ಅಪಾಯದ ಆಧಾರದಲ್ಲಿ ಪ್ರತಿ ವಿನಂತಿಗೆ ನಿರ್ಧರಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"more search always improves the answer.\" In our runs the extra breadth stopped helping at beam 3, the evaluator noise reduced accuracy, and 6 starts were never solved at any width. Search amplifies whatever signal it is given, so it helps when that signal is good and the budget is the real limit.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಹೆಚ್ಚು ಹುಡುಕಾಟ ಯಾವಾಗಲೂ ಉತ್ತರ ಸುಧಾರಿಸುತ್ತದೆ.\" ನಮ್ಮ ಓಟಗಳಲ್ಲಿ ಹೆಚ್ಚುವರಿ ಅಗಲ beam 3 ರಲ್ಲಿ ಸಹಾಯ ನಿಲ್ಲಿಸಿತು, evaluator ಗದ್ದಲ ನಿಖರತೆ ಕಡಿಮೆ ಮಾಡಿತು, ಮತ್ತು 6 ಆರಂಭಗಳು ಯಾವ ಅಗಲದಲ್ಲೂ ಪರಿಹಾರವಾಗಲಿಲ್ಲ. ಹುಡುಕಾಟ ತನಗೆ ನೀಡಿದ ಸಂಕೇತವನ್ನು ವರ್ಧಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಆ ಸಂಕೇತ ಒಳ್ಳೆಯದಾಗಿದ್ದು budget ನಿಜವಾದ ಮಿತಿಯಾದಾಗ ಅದು ಸಹಾಯ ಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Search budget: the compute allowed (iterations, depth, tokens, time). Verifier: a check of candidate correctness. Escalation: moving from a cheap method to a stronger one on failure. Search gate: the rule that chooses the architecture. Evaluator bottleneck: search quality limited by value-function quality. Backtracking: returning to an earlier decision to try another branch.",
    "bodyKn": "Search budget: ಅನುಮತಿಸಿದ ಲೆಕ್ಕಾಚಾರ (ಪುನರಾವರ್ತನೆ, ಆಳ, tokens, ಸಮಯ). Verifier: ಅಭ್ಯರ್ಥಿ ಸರಿತನದ ಪರಿಶೀಲನೆ. Escalation: ವೈಫಲ್ಯದಲ್ಲಿ ಅಗ್ಗದ ವಿಧಾನದಿಂದ ಬಲವಾದದ್ದಕ್ಕೆ ಹೋಗುವುದು. Search gate: ವಿನ್ಯಾಸ ಆರಿಸುವ ನಿಯಮ. Evaluator bottleneck: value-function ಗುಣಮಟ್ಟದಿಂದ ಮಿತಿಗೊಂಡ ಹುಡುಕಾಟ ಗುಣಮಟ್ಟ. Backtracking: ಇನ್ನೊಂದು ಶಾಖೆ ಪ್ರಯತ್ನಿಸಲು ಹಿಂದಿನ ನಿರ್ಧಾರಕ್ಕೆ ಮರಳುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Search is resource allocation under a budget. 2) On the same easy problem LATS did about 3.7 times the evaluations of ToT. 3) Cheap-first escalation saved about 13 percent here, and 6 starts stayed unsolved. 4) Evaluator noise reduced accuracy, and the effect is directional, not a clean curve. 5) Use verifiers where they exist and gate the expensive paths. 6) Choose the simplest architecture that reliably meets the need; ToT and LATS are for hard tasks with checkable candidates.",
    "bodyKn": "1) ಹುಡುಕಾಟ budget ಅಡಿಯ ಸಂಪನ್ಮೂಲ ಹಂಚಿಕೆ. 2) ಅದೇ ಸುಲಭ ಸಮಸ್ಯೆಯಲ್ಲಿ LATS ToT ಗಿಂತ ಸುಮಾರು 3.7 ಪಟ್ಟು ಮೌಲ್ಯಮಾಪನ ಮಾಡಿತು. 3) ಮೊದಲು-ಅಗ್ಗ ಏರಿಕೆ ಇಲ್ಲಿ ಸುಮಾರು 13 ಶೇಕಡಾ ಉಳಿಸಿತು, ಮತ್ತು 6 ಆರಂಭಗಳು ಪರಿಹಾರವಾಗಲಿಲ್ಲ. 4) Evaluator ಗದ್ದಲ ನಿಖರತೆ ಕಡಿಮೆ ಮಾಡಿತು, ಮತ್ತು ಪರಿಣಾಮ ದಿಕ್ಕಿನದು, ಸ್ವಚ್ಛ ವಕ್ರರೇಖೆ ಅಲ್ಲ. 5) Verifiers ಇರುವಲ್ಲಿ ಬಳಸಿ ಮತ್ತು ದುಬಾರಿ ಮಾರ್ಗಗಳಿಗೆ ದ್ವಾರ ಇಡಿ. 6) ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಅಗತ್ಯ ಪೂರೈಸುವ ಅತಿ ಸರಳ ವಿನ್ಯಾಸ ಆರಿಸಿ; ToT ಮತ್ತು LATS ಪರಿಶೀಲಿಸಬಹುದಾದ ಅಭ್ಯರ್ಥಿಗಳಿರುವ ಕಠಿಣ ಕಾರ್ಯಗಳಿಗೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What limitation motivates Tree of Thoughts?",
      "qKn": "Tree of Thoughts ಅನ್ನು ಪ್ರೇರೇಪಿಸುವ ಮಿತಿ ಯಾವುದು?",
      "opts": [
       "Python cannot run recursion",
       "A single reasoning trajectory cannot naturally explore and backtrack among alternatives",
       "LLMs cannot generate several outputs",
       "MCTS requires gradient descent"
      ],
      "optsKn": [
       "Python recursion ಚಲಾಯಿಸಲಾರದು",
       "ಒಂದೇ ತರ್ಕ trajectory ಪರ್ಯಾಯಗಳನ್ನು ಸ್ವಾಭಾವಿಕವಾಗಿ ಅನ್ವೇಷಿಸಿ ಹಿಂದೆ ಸರಿಯಲಾರದು",
       "LLM ಗಳು ಹಲವು ಔಟ್‌ಪುಟ್ ಉತ್ಪಾದಿಸಲಾರವು",
       "MCTS ಗೆ gradient descent ಬೇಕು"
      ],
      "correct": 1
     },
     {
      "q": "What are the four canonical MCTS phases?",
      "qKn": "ನಾಲ್ಕು ಪ್ರಮಾಣಿತ MCTS ಹಂತಗಳು ಯಾವುವು?",
      "opts": [
       "Think, Act, Observe, Reflect",
       "Generate, Rank, Prune, Answer",
       "Select, Expand, Simulate, Backpropagate",
       "Train, Validate, Test, Deploy"
      ],
      "optsKn": [
       "Think, Act, Observe, Reflect",
       "Generate, Rank, Prune, Answer",
       "Select, Expand, Simulate, Backpropagate",
       "Train, Validate, Test, Deploy"
      ],
      "correct": 2
     },
     {
      "q": "In this lesson's escalation experiment, roughly how much did greedy-first save over always using beam 3?",
      "qKn": "ಈ ಪಾಠದ ಏರಿಕೆ ಪ್ರಯೋಗದಲ್ಲಿ ಯಾವಾಗಲೂ beam 3 ಬಳಸುವುದಕ್ಕಿಂತ greedy-ಮೊದಲು ಸುಮಾರು ಎಷ್ಟು ಉಳಿಸಿತು?",
      "opts": [
       "About 90 percent",
       "About 13 percent (543 against 621 thoughts)",
       "Nothing at all",
       "About 50 percent"
      ],
      "optsKn": [
       "ಸುಮಾರು 90 ಶೇಕಡಾ",
       "ಸುಮಾರು 13 ಶೇಕಡಾ (621 ಕ್ಕೆ ಬದಲಾಗಿ 543 thoughts)",
       "ಏನೂ ಇಲ್ಲ",
       "ಸುಮಾರು 50 ಶೇಕಡಾ"
      ],
      "correct": 1
     },
     {
      "q": "Why can a noisy evaluator make search worse?",
      "qKn": "ಗದ್ದಲದ evaluator ಹುಡುಕಾಟವನ್ನು ಏಕೆ ಕೆಟ್ಟದಾಗಿಸಬಹುದು?",
      "opts": [
       "Search ignores scores",
       "Search allocates more effort to branches the evaluator misranks",
       "Noise speeds up the search",
       "Noise removes the goal test"
      ],
      "optsKn": [
       "Search ಅಂಕಗಳನ್ನು ಕಡೆಗಣಿಸುತ್ತದೆ",
       "Evaluator ತಪ್ಪಾಗಿ ಶ್ರೇಣೀಕರಿಸುವ ಶಾಖೆಗಳಿಗೆ ಹುಡುಕಾಟ ಹೆಚ್ಚು ಪ್ರಯತ್ನ ಹಂಚುತ್ತದೆ",
       "ಗದ್ದಲ ಹುಡುಕಾಟ ವೇಗಗೊಳಿಸುತ್ತದೆ",
       "ಗದ್ದಲ ಗುರಿ ಪರೀಕ್ಷೆ ತೆಗೆಯುತ್ತದೆ"
      ],
      "correct": 1
     },
     {
      "q": "When is deliberate search especially attractive?",
      "qKn": "ಉದ್ದೇಶಪೂರ್ವಕ ಹುಡುಕಾಟ ಯಾವಾಗ ವಿಶೇಷವಾಗಿ ಆಕರ್ಷಕ?",
      "opts": [
       "Every simple factual question",
       "The task is hard, correctness is valuable and candidates can be evaluated reliably",
       "Only when no verifier exists",
       "Only during model training"
      ],
      "optsKn": [
       "ಪ್ರತಿ ಸರಳ ವಾಸ್ತವ ಪ್ರಶ್ನೆ",
       "ಕಾರ್ಯ ಕಠಿಣ, ಸರಿತನ ಮೌಲ್ಯಯುತ ಮತ್ತು ಅಭ್ಯರ್ಥಿಗಳನ್ನು ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡಬಹುದು",
       "verifier ಇಲ್ಲದಿದ್ದಾಗ ಮಾತ್ರ",
       "ಮಾದರಿ ತರಬೇತಿ ಸಮಯದಲ್ಲಿ ಮಾತ್ರ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
