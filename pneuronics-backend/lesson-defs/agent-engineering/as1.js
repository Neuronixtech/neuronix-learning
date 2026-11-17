module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b32159b",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "AI Scientist v2: Workshop-Level Research (Part 1 of 3) — The Research Pipeline",
 "titleKn": "AI Scientist v2: Workshop-ಮಟ್ಟದ ಸಂಶೋಧನೆ (ಭಾಗ 1 / 3) — ಸಂಶೋಧನಾ ಪೈಪ್‌ಲೈನ್",
 "desc": "Model a research agent as a six-stage pipeline and see how stage rates multiply.",
 "descKn": "ಸಂಶೋಧನಾ agent ಅನ್ನು ಆರು-ಹಂತದ ಪೈಪ್‌ಲೈನ್ ಆಗಿ ಮಾದರಿ ಮಾಡಿ ಮತ್ತು ಹಂತ ದರಗಳು ಹೇಗೆ ಗುಣಿಸುತ್ತವೆ ನೋಡಿ.",
 "objectives": [
  "Guard stage transitions.",
  "Multiply stage rates.",
  "Locate where runs die.",
  "Vary the weakest stage.",
  "Compare a tree with one path."
 ],
 "objectivesKn": [
  "ಹಂತ ಪರಿವರ್ತನೆಗಳನ್ನು ಕಾಯಿರಿ.",
  "ಹಂತ ದರಗಳನ್ನು ಗುಣಿಸಿ.",
  "ಓಟಗಳು ಎಲ್ಲಿ ಸಾಯುತ್ತವೆ ಗುರುತಿಸಿ.",
  "ದುರ್ಬಲ ಹಂತ ಬದಲಿಸಿ.",
  "ಮರವನ್ನು ಒಂದು ದಾರಿಯೊಂದಿಗೆ ಹೋಲಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "AI Scientist v2: Workshop-Level Research (Part 1 of 3)",
    "textKn": "AI Scientist v2: Workshop-ಮಟ್ಟದ ಸಂಶೋಧನೆ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a six-stage research pipeline with guarded transitions, end-to-end success as a product of stage success, where 20000 runs died, the effect of the coding rate and a tree of attempts against one path. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind automated research agents in the style of AI Scientist v2 (stage state machines, tree search over experiments, novelty checks, retry budgets, polish masking, number-against-log gates and reviewer ensembles), not the real software, and every stage is a scripted coin flip, ideas are random keyword sets, papers and reviewers are invented, and no experiment runs and no language model is used, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The lesson cites a 42 percent coding-failure rate for the published system; that figure is cited, not measured here, and the labs merely use 0.58 as an assumed coding success rate. Every other probability, threshold and score in the labs is invented. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಸಂರಕ್ಷಿತ ಪರಿವರ್ತನೆಗಳಿರುವ ಆರು-ಹಂತದ ಸಂಶೋಧನಾ ಪೈಪ್‌ಲೈನ್, ಹಂತ ಯಶಸ್ಸಿನ ಗುಣಲಬ್ಧವಾಗಿ ಅಂತ್ಯದಿಂದ-ಅಂತ್ಯದ ಯಶಸ್ಸು, 20000 ಓಟಗಳು ಎಲ್ಲಿ ಸತ್ತವು, ಕೋಡಿಂಗ್ ದರದ ಪರಿಣಾಮ ಮತ್ತು ಒಂದು ದಾರಿಯ ವಿರುದ್ಧ ಪ್ರಯತ್ನಗಳ ಮರ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು AI Scientist v2 ಶೈಲಿಯ ಸ್ವಯಂಚಾಲಿತ ಸಂಶೋಧನಾ agents (ಹಂತ ಸ್ಥಿತಿ ಯಂತ್ರಗಳು, ಪ್ರಯೋಗಗಳ ಮೇಲೆ ಮರ ಹುಡುಕಾಟ, ನವೀನತೆ ಪರಿಶೀಲನೆ, ಮರುಪ್ರಯತ್ನ ಬಜೆಟ್, polish ಮರೆಮಾಚುವಿಕೆ, ಸಂಖ್ಯೆ-ಲಾಗ್ gates ಮತ್ತು ವಿಮರ್ಶಕ ಸಮೂಹಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪ್ರತಿ ಹಂತ scripted ನಾಣ್ಯ ಚಿಮ್ಮುವಿಕೆ, ಕಲ್ಪನೆಗಳು ಯಾದೃಚ್ಛಿಕ ಕೀವರ್ಡ್ ಸೆಟ್‌ಗಳು, ಪೇಪರ್‌ಗಳು ಮತ್ತು ವಿಮರ್ಶಕರು ಕಲ್ಪಿತ, ಯಾವ ಪ್ರಯೋಗವೂ ಓಡುವುದಿಲ್ಲ ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಬಳಸಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಪ್ರಕಟಿತ ವ್ಯವಸ್ಥೆಗೆ lesson 42 ಶೇಕಡಾ ಕೋಡಿಂಗ್-ವೈಫಲ್ಯ ದರ ಉಲ್ಲೇಖಿಸುತ್ತದೆ; ಆ ಅಂಕಿ ಉಲ್ಲೇಖಿತ, ಇಲ್ಲಿ ಅಳೆಯಲಾಗಿಲ್ಲ, ಮತ್ತು ಲ್ಯಾಬ್‌ಗಳು ಕೇವಲ 0.58 ಅನ್ನು ಊಹಿತ ಕೋಡಿಂಗ್ ಯಶಸ್ಸು ದರವಾಗಿ ಬಳಸುತ್ತವೆ. ಲ್ಯಾಬ್‌ಗಳ ಇತರ ಪ್ರತಿ ಸಂಭವನೀಯತೆ, ಮಿತಿ ಮತ್ತು ಅಂಕ ಕಲ್ಪಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Chain of Stages That Can Each Fail",
    "textKn": "ಪ್ರತಿಯೊಂದೂ ವಿಫಲವಾಗಬಹುದಾದ ಹಂತಗಳ ಸರಪಳಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Arithmetic of a Research Run",
    "headingKn": "ಸಂಶೋಧನಾ ಓಟದ ಅಂಕಗಣಿತ",
    "bodyEn": "An automated research agent takes an idea through a novelty check, code, experiments, a written paper and a review. This part models that as a state machine whose only legal move is to the next stage, runs 20000 simulated pipelines with invented stage success rates, compares the result with the product of those rates, counts where runs died, varies the coding rate and then tries a tree of independent branches against a single path.",
    "bodyKn": "ಸ್ವಯಂಚಾಲಿತ ಸಂಶೋಧನಾ agent ಒಂದು ಕಲ್ಪನೆಯನ್ನು ನವೀನತೆ ಪರಿಶೀಲನೆ, ಕೋಡ್, ಪ್ರಯೋಗಗಳು, ಬರೆದ ಪೇಪರ್ ಮತ್ತು ವಿಮರ್ಶೆಯ ಮೂಲಕ ಕೊಂಡೊಯ್ಯುತ್ತದೆ. ಈ ಭಾಗ ಅದನ್ನು ಏಕೈಕ ಕಾನೂನುಬದ್ಧ ನಡೆ ಮುಂದಿನ ಹಂತಕ್ಕೆ ಎನ್ನುವ ಸ್ಥಿತಿ ಯಂತ್ರವಾಗಿ ಮಾದರಿ ಮಾಡುತ್ತದೆ, ಕಲ್ಪಿತ ಹಂತ ಯಶಸ್ಸು ದರಗಳೊಂದಿಗೆ 20000 ಅನುಕರಿತ ಪೈಪ್‌ಲೈನ್ ಓಡಿಸುತ್ತದೆ, ಫಲಿತಾಂಶವನ್ನು ಆ ದರಗಳ ಗುಣಲಬ್ಧದೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ, ಓಟಗಳು ಎಲ್ಲಿ ಸತ್ತವು ಎಣಿಸುತ್ತದೆ, ಕೋಡಿಂಗ್ ದರ ಬದಲಿಸುತ್ತದೆ ಮತ್ತು ನಂತರ ಒಂದೇ ದಾರಿಯ ವಿರುದ್ಧ ಸ್ವತಂತ್ರ ಶಾಖೆಗಳ ಮರ ಪ್ರಯತ್ನಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Research Pipeline",
    "headingKn": "ಸಂಶೋಧನಾ ಪೈಪ್‌ಲೈನ್",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a research run must survive every stage in order</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">idea</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">novelty</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">code</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">experiment</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">write</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">review</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">dies</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">at the weakest stage</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a research run must survive every stage in order</text></svg>",
    "captionEn": "Idea, novelty, code, experiment, write, review.",
    "captionKn": "ಕಲ್ಪನೆ, ನವೀನತೆ, ಕೋಡ್, ಪ್ರಯೋಗ, ಬರವಣಿಗೆ, ವಿಮರ್ಶೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Invented stage success rates",
    "headingKn": "ಕಲ್ಪಿತ ಹಂತ ಯಶಸ್ಸು ದರಗಳು",
    "headers": [
     "Stage",
     "Success rate"
    ],
    "rows": [
     [
      "idea",
      "0.95"
     ],
     [
      "novelty",
      "0.70"
     ],
     [
      "code",
      "0.58 (assumed; lesson cites a 42 percent failure rate)"
     ],
     [
      "experiment",
      "0.80"
     ],
     [
      "write",
      "0.90"
     ],
     [
      "review",
      "0.75"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building and Testing the Ideas",
    "textKn": "ಕಲ್ಪನೆಗಳನ್ನು ನಿರ್ಮಿಸಿ ಪರೀಕ್ಷಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "as_1.py",
    "headingEn": "Legal transitions and the pipeline",
    "headingKn": "ಕಾನೂನುಬದ್ಧ ಪರಿವರ್ತನೆಗಳು ಮತ್ತು ಪೈಪ್‌ಲೈನ್",
    "descEn": "transition refuses any move except to the next stage, run_pipeline flips a coin per stage and reports where it died, and tree_experiment tries several code-and-experiment branches.",
    "descKn": "transition ಮುಂದಿನ ಹಂತದ ಹೊರತು ಯಾವುದೇ ನಡೆ ನಿರಾಕರಿಸುತ್ತದೆ, run_pipeline ಪ್ರತಿ ಹಂತಕ್ಕೆ ನಾಣ್ಯ ಚಿಮ್ಮಿ ಎಲ್ಲಿ ಸತ್ತಿತು ವರದಿ ಮಾಡುತ್ತದೆ, ಮತ್ತು tree_experiment ಹಲವು ಕೋಡ್-ಮತ್ತು-ಪ್ರಯೋಗ ಶಾಖೆಗಳನ್ನು ಪ್ರಯತ್ನಿಸುತ್ತದೆ.",
    "code": "STAGES = [\"idea\", \"novelty\", \"code\", \"experiment\", \"write\", \"review\"]\r\nLEGAL = {s: [STAGES[i + 1]] if i + 1 < len(STAGES) else [] for i, s in enumerate(STAGES)}\r\nP = {\"idea\": 0.95, \"novelty\": 0.7, \"code\": 0.58, \"experiment\": 0.8, \"write\": 0.9, \"review\": 0.75}\r\n\r\n\r\ndef transition(cur, nxt):\r\n    if nxt not in LEGAL[cur]:\r\n        raise ValueError(f\"illegal transition {cur} -> {nxt}\")\r\n    return nxt\r\n\r\n\r\ndef run_pipeline(r, p=P):\r\n    \"\"\"Linear pipeline: returns (finished, stage where it died).\"\"\"\r\n    cur = \"idea\"\r\n    while True:\r\n        if r.random() >= p[cur]:\r\n            return False, cur\r\n        if not LEGAL[cur]:\r\n            return True, cur\r\n        cur = transition(cur, LEGAL[cur][0])\r\n\r\n\r\ndef tree_experiment(r, p_code, p_exp, branches):\r\n    \"\"\"Try several independent code-and-experiment branches; success if any branch passes both stages.\"\"\"\r\n    return any(r.random() < p_code and r.random() < p_exp for _ in range(branches))"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "as_1.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() tests transitions, runs 20000 pipelines, varies the coding rate and compares a tree of branches with its formula.",
    "descKn": "main() ಪರಿವರ್ತನೆ ಪರೀಕ್ಷಿಸಿ, 20000 ಪೈಪ್‌ಲೈನ್ ಓಡಿಸಿ, ಕೋಡಿಂಗ್ ದರ ಬದಲಿಸಿ ಮತ್ತು ಶಾಖೆಗಳ ಮರವನ್ನು ಅದರ ಸೂತ್ರದೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely running: guarded transitions\")\r\n    for a, b in ((\"idea\", \"novelty\"), (\"code\", \"write\"), (\"review\", \"idea\")):\r\n        try:\r\n            print(a, \"->\", transition(a, b))\r\n        except ValueError as e:\r\n            print(\"refused:\", e)\r\n    print(\"only the next stage in the list is a legal move, so a run cannot skip the novelty check or jump from code straight to a written paper; the stage list is a simplification of the real system\")\r\n\r\n    section(\"2. Genuinely measuring: end-to-end success of 20000 linear pipelines (seed 1)\")\r\n    r = random.Random(1)\r\n    res = [run_pipeline(r) for _ in range(20000)]\r\n    prod = 1.0\r\n    for s in STAGES:\r\n        prod *= P[s]\r\n    print(f\"simulated success {mean(f for f, _ in res):.4f} | product of stage rates {prod:.4f}\")\r\n    died = {s: sum(1 for f, st in res if not f and st == s) for s in STAGES}\r\n    print(\"runs that died at each stage:\", died)\r\n    print(\"the simulated success rate matches the product of the six invented stage rates, and the novelty and coding stages kill the most runs, 5737 and 5576; coding has the lowest success rate but fewer runs reach it, which is why novelty ends up with the larger count, and a run that fails early never gets the chance to fail later\")\r\n\r\n    section(\"3. Genuinely measuring: how the coding success rate moves the end-to-end rate\")\r\n    for pc in (0.3, 0.58, 0.8, 0.95):\r\n        p = dict(P, code=pc)\r\n        r = random.Random(2)\r\n        rate = mean(run_pipeline(r, p)[0] for _ in range(20000))\r\n        print(f\"code success {pc:.2f}: end-to-end {rate:.4f}\")\r\n    print(\"end-to-end success scales directly with the weakest stage, so a 42 percent coding failure rate, which is the figure the lesson cites and the lab only uses as an assumed 0.58 success rate, cuts the whole pipeline by that same factor\")\r\n\r\n    section(\"4. Genuinely measuring: a tree of attempts against one path\")\r\n    r = random.Random(3)\r\n    for b in (1, 2, 3, 5, 8):\r\n        rate = mean(tree_experiment(r, 0.58, 0.8, b) for _ in range(20000))\r\n        print(f\"{b} branches: chance at least one passes code and experiment {rate:.4f} | formula {1 - (1 - 0.58 * 0.8) ** b:.4f}\")\r\n    print(\"trying several independent branches lifts the chance that code and experiments both work, and the simulation matches 1 - (1 - p)^b; this assumes the branches fail independently and that a checker can tell which branch worked, and it multiplies compute by the branch count\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: guarded transitions ---\nidea -> novelty\nrefused: illegal transition code -> write\nrefused: illegal transition review -> idea\nonly the next stage in the list is a legal move, so a run cannot skip the novelty check or jump from code straight to a written paper; the stage list is a simplification of the real system\n\n--- 2. Genuinely measuring: end-to-end success of 20000 linear pipelines (seed 1) ---\nsimulated success 0.2047 | product of stage rates 0.2083\nruns that died at each stage: {'idea': 1019, 'novelty': 5737, 'code': 5576, 'experiment': 1556, 'write': 609, 'review': 1408}\nthe simulated success rate matches the product of the six invented stage rates, and the novelty and coding stages kill the most runs, 5737 and 5576; coding has the lowest success rate but fewer runs reach it, which is why novelty ends up with the larger count, and a run that fails early never gets the chance to fail later\n\n--- 3. Genuinely measuring: how the coding success rate moves the end-to-end rate ---\ncode success 0.30: end-to-end 0.1085\ncode success 0.58: end-to-end 0.2098\ncode success 0.80: end-to-end 0.2863\ncode success 0.95: end-to-end 0.3366\nend-to-end success scales directly with the weakest stage, so a 42 percent coding failure rate, which is the figure the lesson cites and the lab only uses as an assumed 0.58 success rate, cuts the whole pipeline by that same factor\n\n--- 4. Genuinely measuring: a tree of attempts against one path ---\n1 branches: chance at least one passes code and experiment 0.4646 | formula 0.4640\n2 branches: chance at least one passes code and experiment 0.7123 | formula 0.7127\n3 branches: chance at least one passes code and experiment 0.8498 | formula 0.8460\n5 branches: chance at least one passes code and experiment 0.9524 | formula 0.9558\n8 branches: chance at least one passes code and experiment 0.9929 | formula 0.9932\ntrying several independent branches lifts the chance that code and experiments both work, and the simulation matches 1 - (1 - p)^b; this assumes the branches fail independently and that a checker can tell which branch worked, and it multiplies compute by the branch count"
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Experiment Walkthrough",
    "textKn": "Experiment ನಡೆದಾಟ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 1: Guarded transitions",
    "headingKn": "ಪ್ರಯೋಗ 1: Guarded transitions",
    "bodyEn": "What it ran: Guarded transitions. What the lab concluded: only the next stage in the list is a legal move, so a run cannot skip the novelty check or jump from code straight to a written paper; the stage list is a simplification of the real system",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Guarded transitions. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): only the next stage in the list is a legal move, so a run cannot skip the novelty check or jump from code straight to a written paper; the stage list is a simplification of the real system"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: guarded transitions ---\nidea -> novelty\nrefused: illegal transition code -> write\nrefused: illegal transition review -> idea"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: End-to-end success of 20000 linear pipelines (seed 1)",
    "headingKn": "ಪ್ರಯೋಗ 2: End-to-end success of 20000 linear pipelines (seed 1)",
    "bodyEn": "What it ran: End-to-end success of 20000 linear pipelines (seed 1). What the lab concluded: the simulated success rate matches the product of the six invented stage rates, and the novelty and coding stages kill the most runs, 5737 and 5576; coding has the lowest success rate but fewer runs reach it, which is why novelty ends up with the larger count, and a run that fails early never gets the chance to fail later",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: End-to-end success of 20000 linear pipelines (seed 1). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the simulated success rate matches the product of the six invented stage rates, and the novelty and coding stages kill the most runs, 5737 and 5576; coding has the lowest success rate but fewer runs reach it, which is why novelty ends up with the larger count, and a run that fails early never gets the chance to fail later"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely measuring: end-to-end success of 20000 linear pipelines (seed 1) ---\nsimulated success 0.2047 | product of stage rates 0.2083\nruns that died at each stage: {'idea': 1019, 'novelty': 5737, 'code': 5576, 'experiment': 1556, 'write': 609, 'review': 1408}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: How the coding success rate moves the end-to-end rate",
    "headingKn": "ಪ್ರಯೋಗ 3: How the coding success rate moves the end-to-end rate",
    "bodyEn": "What it ran: How the coding success rate moves the end-to-end rate. What the lab concluded: end-to-end success scales directly with the weakest stage, so a 42 percent coding failure rate, which is the figure the lesson cites and the lab only uses as an assumed 0.58 success rate, cuts the whole pipeline by that same factor",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: How the coding success rate moves the end-to-end rate. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): end-to-end success scales directly with the weakest stage, so a 42 percent coding failure rate, which is the figure the lesson cites and the lab only uses as an assumed 0.58 success rate, cuts the whole pipeline by that same factor"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: how the coding success rate moves the end-to-end rate ---\ncode success 0.30: end-to-end 0.1085\ncode success 0.58: end-to-end 0.2098\ncode success 0.80: end-to-end 0.2863\ncode success 0.95: end-to-end 0.3366"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A tree of attempts against one path",
    "headingKn": "ಪ್ರಯೋಗ 4: A tree of attempts against one path",
    "bodyEn": "What it ran: A tree of attempts against one path. What the lab concluded: trying several independent branches lifts the chance that code and experiments both work, and the simulation matches 1 - (1 - p)^b; this assumes the branches fail independently and that a checker can tell which branch worked, and it multiplies compute by the branch count",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A tree of attempts against one path. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): trying several independent branches lifts the chance that code and experiments both work, and the simulation matches 1 - (1 - p)^b; this assumes the branches fail independently and that a checker can tell which branch worked, and it multiplies compute by the branch count"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely measuring: a tree of attempts against one path ---\n1 branches: chance at least one passes code and experiment 0.4646 | formula 0.4640\n2 branches: chance at least one passes code and experiment 0.7123 | formula 0.7127\n3 branches: chance at least one passes code and experiment 0.8498 | formula 0.8460\n5 branches: chance at least one passes code and experiment 0.9524 | formula 0.9558\n8 branches: chance at least one passes code and experiment 0.9929 | formula 0.9932"
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
    "headingEn": "Genuinely Found: Transitions and End-to-End Success",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪರಿವರ್ತನೆಗಳು ಮತ್ತು ಅಂತ್ಯದಿಂದ-ಅಂತ್ಯದ ಯಶಸ್ಸು",
    "bodyEn": "Section 1: idea to novelty was allowed, code to write and review to idea were refused. Section 2: simulated success was 0.2047 against a product of stage rates of 0.2083, and runs died at idea 1019, novelty 5737, code 5576, experiment 1556, write 609 and review 1408 times.",
    "bodyKn": "ವಿಭಾಗ 1: idea ರಿಂದ novelty ಅನುಮತಿಸಲಾಯಿತು, code ರಿಂದ write ಮತ್ತು review ರಿಂದ idea ನಿರಾಕರಿಸಲಾಯಿತು. ವಿಭಾಗ 2: ಅನುಕರಿತ ಯಶಸ್ಸು 0.2047 ಮತ್ತು ಹಂತ ದರಗಳ ಗುಣಲಬ್ಧ 0.2083, ಮತ್ತು ಓಟಗಳು idea ನಲ್ಲಿ 1019, novelty ನಲ್ಲಿ 5737, code ನಲ್ಲಿ 5576, experiment ನಲ್ಲಿ 1556, write ನಲ್ಲಿ 609 ಮತ್ತು review ನಲ್ಲಿ 1408 ಬಾರಿ ಸತ್ತವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Coding Rate and Branching",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕೋಡಿಂಗ್ ದರ ಮತ್ತು ಶಾಖೆಗಳು",
    "bodyEn": "Section 3: with code success 0.30, 0.58, 0.80 and 0.95 the end-to-end rate was 0.1085, 0.2098, 0.2863 and 0.3366. Section 4: 1, 2, 3, 5 and 8 branches gave 0.4646, 0.7123, 0.8498, 0.9524 and 0.9929 against formula values 0.4640, 0.7127, 0.8460, 0.9558 and 0.9932.",
    "bodyKn": "ವಿಭಾಗ 3: ಕೋಡ್ ಯಶಸ್ಸು 0.30, 0.58, 0.80 ಮತ್ತು 0.95 ಆಗಿದ್ದಾಗ ಅಂತ್ಯದಿಂದ-ಅಂತ್ಯದ ದರ 0.1085, 0.2098, 0.2863 ಮತ್ತು 0.3366. ವಿಭಾಗ 4: 1, 2, 3, 5 ಮತ್ತು 8 ಶಾಖೆಗಳು ಸೂತ್ರ ಮೌಲ್ಯಗಳು 0.4640, 0.7127, 0.8460, 0.9558 ಮತ್ತು 0.9932 ವಿರುದ್ಧ 0.4646, 0.7123, 0.8498, 0.9524 ಮತ್ತು 0.9929 ನೀಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A pipeline succeeds only if every stage does, so improving or checking the weakest stage matters more than polishing the strongest one.",
    "bodyKn": "ಪೈಪ್‌ಲೈನ್ ಪ್ರತಿ ಹಂತ ಯಶಸ್ವಿಯಾದರೆ ಮಾತ್ರ ಯಶಸ್ವಿಯಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ ದುರ್ಬಲ ಹಂತವನ್ನು ಸುಧಾರಿಸುವುದು ಅಥವಾ ಪರಿಶೀಲಿಸುವುದು ಬಲವಾದದ್ದನ್ನು ಹೊಳಪುಗೊಳಿಸುವುದಕ್ಕಿಂತ ಮುಖ್ಯ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the lowest-rate stage always kills the most runs.\" Novelty killed 5737 runs and code 5576, because fewer runs reach the later stage.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಕಡಿಮೆ-ದರ ಹಂತ ಯಾವಾಗಲೂ ಹೆಚ್ಚು ಓಟಗಳನ್ನು ಕೊಲ್ಲುತ್ತದೆ.\" novelty 5737 ಓಟಗಳನ್ನು ಮತ್ತು code 5576 ಕೊಂದವು, ಏಕೆಂದರೆ ನಂತರದ ಹಂತ ತಲುಪುವ ಓಟಗಳು ಕಡಿಮೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "State machine: stages with legal moves between them. Stage rate: chance a stage succeeds. End-to-end rate: product of stage rates. Branch: an independent attempt.",
    "bodyKn": "State machine: ಅವುಗಳ ನಡುವೆ ಕಾನೂನುಬದ್ಧ ನಡೆಗಳಿರುವ ಹಂತಗಳು. Stage rate: ಹಂತ ಯಶಸ್ವಿಯಾಗುವ ಸಾಧ್ಯತೆ. End-to-end rate: ಹಂತ ದರಗಳ ಗುಣಲಬ್ಧ. Branch: ಸ್ವತಂತ್ರ ಪ್ರಯತ್ನ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Skipping a stage was refused. 2) Simulation 0.2047 matched the product 0.2083. 3) Novelty and code killed the most runs. 4) Raising code success from 0.30 to 0.95 moved the end-to-end rate from 0.1085 to 0.3366. 5) Eight branches reached 0.9929 under independence.",
    "bodyKn": "1) ಹಂತ ಬಿಡುವುದನ್ನು ನಿರಾಕರಿಸಲಾಯಿತು. 2) ಸಿಮ್ಯುಲೇಶನ್ 0.2047 ಗುಣಲಬ್ಧ 0.2083 ಗೆ ಹೊಂದಿತು. 3) novelty ಮತ್ತು code ಹೆಚ್ಚು ಓಟಗಳನ್ನು ಕೊಂದವು. 4) ಕೋಡ್ ಯಶಸ್ಸು 0.30 ರಿಂದ 0.95 ಗೆ ಏರಿದಾಗ ಅಂತ್ಯದಿಂದ-ಅಂತ್ಯದ ದರ 0.1085 ರಿಂದ 0.3366 ಗೆ ಹೋಯಿತು. 5) ಎಂಟು ಶಾಖೆಗಳು ಸ್ವಾತಂತ್ರ್ಯದಲ್ಲಿ 0.9929 ತಲುಪಿದವು."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Try It Yourself",
    "textKn": "ನೀವೇ ಪ್ರಯತ್ನಿಸಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Run the lab",
    "headingKn": "ಲ್ಯಾಬ್ ಓಡಿಸಿ",
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B as_1.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B as_1.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B as_1.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B as_1.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Predict before you run",
    "headingKn": "ಓಡಿಸುವ ಮುನ್ನ ಊಹಿಸಿ",
    "bodyEn": "Before rerunning, write down what you expect each experiment to print, then compare:\n1. Guarded transitions\n2. End-to-end success of 20000 linear pipelines (seed 1)\n3. How the coding success rate moves the end-to-end rate\n4. A tree of attempts against one path",
    "bodyKn": "ಮರುಓಡಿಸುವ ಮುನ್ನ ಪ್ರತಿ ಪ್ರಯೋಗ ಏನು ಮುದ್ರಿಸುತ್ತದೆ ಎಂದು ನಿರೀಕ್ಷಿಸುವುದನ್ನು ಬರೆಯಿರಿ, ನಂತರ ಹೋಲಿಸಿ:\n1. Guarded transitions\n2. End-to-end success of 20000 linear pipelines (seed 1)\n3. How the coding success rate moves the end-to-end rate\n4. A tree of attempts against one path"
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What was the simulated end-to-end success of the linear pipeline?",
      "qKn": "ರೇಖೀಯ ಪೈಪ್‌ಲೈನ್‌ನ ಅನುಕರಿತ ಅಂತ್ಯದಿಂದ-ಅಂತ್ಯದ ಯಶಸ್ಸು ಎಷ್ಟು?",
      "opts": [
       "0.2047",
       "0.58",
       "0.9929",
       "0.4646"
      ],
      "optsKn": [
       "0.2047",
       "0.58",
       "0.9929",
       "0.4646"
      ],
      "correct": 0
     },
     {
      "q": "Which stage killed the most runs?",
      "qKn": "ಯಾವ ಹಂತ ಹೆಚ್ಚು ಓಟಗಳನ್ನು ಕೊಂದಿತು?",
      "opts": [
       "novelty (5737)",
       "write (609)",
       "idea (1019)",
       "review (1408)"
      ],
      "optsKn": [
       "novelty (5737)",
       "write (609)",
       "idea (1019)",
       "review (1408)"
      ],
      "correct": 0
     },
     {
      "q": "What end-to-end rate did code success 0.95 give?",
      "qKn": "ಕೋಡ್ ಯಶಸ್ಸು 0.95 ಯಾವ ಅಂತ್ಯದಿಂದ-ಅಂತ್ಯದ ದರ ನೀಡಿತು?",
      "opts": [
       "0.3366",
       "0.2098",
       "0.1085",
       "0.2863"
      ],
      "optsKn": [
       "0.3366",
       "0.2098",
       "0.1085",
       "0.2863"
      ],
      "correct": 0
     },
     {
      "q": "What does the 42 percent coding failure figure in the lab mean?",
      "qKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ 42 ಶೇಕಡಾ ಕೋಡಿಂಗ್ ವೈಫಲ್ಯ ಅಂಕಿಯ ಅರ್ಥವೇನು?",
      "opts": [
       "It is cited from the lesson and only motivates an assumed 0.58 success rate",
       "The lab measured it on a real system",
       "It is the novelty rate",
       "It is an experiment result"
      ],
      "optsKn": [
       "ಅದು lesson ನಿಂದ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಊಹಿತ 0.58 ಯಶಸ್ಸು ದರಕ್ಕೆ ಪ್ರೇರಣೆ ಮಾತ್ರ",
       "ಲ್ಯಾಬ್ ಅದನ್ನು ನಿಜ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ಅಳೆಯಿತು",
       "ಅದು novelty ದರ",
       "ಅದು ಪ್ರಯೋಗ ಫಲಿತಾಂಶ"
      ],
      "correct": 0
     },
     {
      "q": "What assumption does the tree formula 1-(1-p)^b rely on?",
      "qKn": "ಮರ ಸೂತ್ರ 1-(1-p)^b ಯಾವ ಊಹೆಯ ಮೇಲೆ ಅವಲಂಬಿತ?",
      "opts": [
       "Branches fail independently and a checker can pick the working one",
       "Branches share all failures",
       "There is only one branch",
       "The coding stage never fails"
      ],
      "optsKn": [
       "ಶಾಖೆಗಳು ಸ್ವತಂತ್ರವಾಗಿ ವಿಫಲವಾಗುತ್ತವೆ ಮತ್ತು ಪರಿಶೀಲಕ ಕೆಲಸ ಮಾಡುವುದನ್ನು ಆರಿಸಬಲ್ಲದು",
       "ಶಾಖೆಗಳು ಎಲ್ಲಾ ವೈಫಲ್ಯಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ",
       "ಒಂದೇ ಶಾಖೆ ಇದೆ",
       "ಕೋಡಿಂಗ್ ಹಂತ ಎಂದಿಗೂ ವಿಫಲವಾಗುವುದಿಲ್ಲ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
