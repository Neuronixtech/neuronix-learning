module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b32159b",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "AI Scientist v2: Workshop-Level Research (Part 3 of 3) — Verification Gates and Reviewers",
 "titleKn": "AI Scientist v2: Workshop-ಮಟ್ಟದ ಸಂಶೋಧನೆ (ಭಾಗ 3 / 3) — ಪರಿಶೀಲನೆ Gates ಮತ್ತು ವಿಮರ್ಶಕರು",
 "desc": "Build a number-against-log gate, measure reviewer ensembles and run a gated publication cycle.",
 "descKn": "ಸಂಖ್ಯೆ-ಲಾಗ್ gate ನಿರ್ಮಿಸಿ, ವಿಮರ್ಶಕ ಸಮೂಹಗಳನ್ನು ಅಳೆಯಿರಿ ಮತ್ತು gated ಪ್ರಕಟಣೆ ಚಕ್ರ ಓಡಿಸಿ.",
 "objectives": [
  "Compare numbers with a log.",
  "Choose a tolerance.",
  "Measure reviewer ensembles.",
  "Explain shared bias.",
  "Run a gated cycle."
 ],
 "objectivesKn": [
  "ಸಂಖ್ಯೆಗಳನ್ನು ಲಾಗ್‌ನೊಂದಿಗೆ ಹೋಲಿಸಿ.",
  "ಸಹನೆ ಆರಿಸಿ.",
  "ವಿಮರ್ಶಕ ಸಮೂಹಗಳನ್ನು ಅಳೆಯಿರಿ.",
  "ಹಂಚಿದ bias ವಿವರಿಸಿ.",
  "gated ಚಕ್ರ ಓಡಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "AI Scientist v2: Workshop-Level Research (Part 3 of 3)",
    "textKn": "AI Scientist v2: Workshop-ಮಟ್ಟದ ಸಂಶೋಧನೆ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: a gate that checks every number in a paper against a results log, a tolerance policy, reviewer ensembles with noise and shared bias, and a gated run with a rewrite budget. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind automated research agents in the style of AI Scientist v2 (stage state machines, tree search over experiments, novelty checks, retry budgets, polish masking, number-against-log gates and reviewer ensembles), not the real software, and every stage is a scripted coin flip, ideas are random keyword sets, papers and reviewers are invented, and no experiment runs and no language model is used, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The lesson cites a 42 percent coding-failure rate for the published system; that figure is cited, not measured here, and the labs merely use 0.58 as an assumed coding success rate. Every other probability, threshold and score in the labs is invented. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಪೇಪರ್‌ನ ಪ್ರತಿ ಸಂಖ್ಯೆಯನ್ನು ಫಲಿತಾಂಶ ಲಾಗ್ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸುವ gate, ಸಹನೆ ನೀತಿ, noise ಮತ್ತು ಹಂಚಿದ bias ಇರುವ ವಿಮರ್ಶಕ ಸಮೂಹಗಳು ಮತ್ತು ಮರುಬರೆಯುವ ಬಜೆಟ್ ಇರುವ gated ಓಟ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು AI Scientist v2 ಶೈಲಿಯ ಸ್ವಯಂಚಾಲಿತ ಸಂಶೋಧನಾ agents (ಹಂತ ಸ್ಥಿತಿ ಯಂತ್ರಗಳು, ಪ್ರಯೋಗಗಳ ಮೇಲೆ ಮರ ಹುಡುಕಾಟ, ನವೀನತೆ ಪರಿಶೀಲನೆ, ಮರುಪ್ರಯತ್ನ ಬಜೆಟ್, polish ಮರೆಮಾಚುವಿಕೆ, ಸಂಖ್ಯೆ-ಲಾಗ್ gates ಮತ್ತು ವಿಮರ್ಶಕ ಸಮೂಹಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪ್ರತಿ ಹಂತ scripted ನಾಣ್ಯ ಚಿಮ್ಮುವಿಕೆ, ಕಲ್ಪನೆಗಳು ಯಾದೃಚ್ಛಿಕ ಕೀವರ್ಡ್ ಸೆಟ್‌ಗಳು, ಪೇಪರ್‌ಗಳು ಮತ್ತು ವಿಮರ್ಶಕರು ಕಲ್ಪಿತ, ಯಾವ ಪ್ರಯೋಗವೂ ಓಡುವುದಿಲ್ಲ ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಬಳಸಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಪ್ರಕಟಿತ ವ್ಯವಸ್ಥೆಗೆ lesson 42 ಶೇಕಡಾ ಕೋಡಿಂಗ್-ವೈಫಲ್ಯ ದರ ಉಲ್ಲೇಖಿಸುತ್ತದೆ; ಆ ಅಂಕಿ ಉಲ್ಲೇಖಿತ, ಇಲ್ಲಿ ಅಳೆಯಲಾಗಿಲ್ಲ, ಮತ್ತು ಲ್ಯಾಬ್‌ಗಳು ಕೇವಲ 0.58 ಅನ್ನು ಊಹಿತ ಕೋಡಿಂಗ್ ಯಶಸ್ಸು ದರವಾಗಿ ಬಳಸುತ್ತವೆ. ಲ್ಯಾಬ್‌ಗಳ ಇತರ ಪ್ರತಿ ಸಂಭವನೀಯತೆ, ಮಿತಿ ಮತ್ತು ಅಂಕ ಕಲ್ಪಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Every Number Needs a Source",
    "textKn": "ಪ್ರತಿ ಸಂಖ್ಯೆಗೂ ಮೂಲ ಬೇಕು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Gates and Reviewers",
    "headingKn": "Gates ಮತ್ತು ವಿಮರ್ಶಕರು",
    "bodyEn": "A fabricating writer can inflate a number, and a reviewer cannot always tell. This part builds a gate that compares each reported number with a results log, shows what its tolerance lets through, measures reviewer ensembles with independent noise and with a bias they all share, and runs a full gated cycle with a three-attempt rewrite budget. Papers, logs and reviewers are invented.",
    "bodyKn": "ಮೋಸ ಮಾಡುವ ಬರಹಗಾರ ಸಂಖ್ಯೆಯನ್ನು ಉಬ್ಬಿಸಬಹುದು, ಮತ್ತು ವಿಮರ್ಶಕ ಯಾವಾಗಲೂ ಹೇಳಲಾರ. ಈ ಭಾಗ ಪ್ರತಿ ವರದಿ ಸಂಖ್ಯೆಯನ್ನು ಫಲಿತಾಂಶ ಲಾಗ್‌ನೊಂದಿಗೆ ಹೋಲಿಸುವ gate ನಿರ್ಮಿಸುತ್ತದೆ, ಅದರ ಸಹನೆ ಏನನ್ನು ಬಿಡುತ್ತದೆ ತೋರಿಸುತ್ತದೆ, ಸ್ವತಂತ್ರ noise ಮತ್ತು ಅವರೆಲ್ಲರೂ ಹಂಚಿಕೊಳ್ಳುವ bias ಇರುವ ವಿಮರ್ಶಕ ಸಮೂಹಗಳನ್ನು ಅಳೆಯುತ್ತದೆ, ಮತ್ತು ಮೂರು-ಪ್ರಯತ್ನ ಮರುಬರೆಯುವ ಬಜೆಟ್ ಇರುವ ಪೂರ್ಣ gated ಚಕ್ರ ಓಡಿಸುತ್ತದೆ. ಪೇಪರ್‌ಗಳು, ಲಾಗ್‌ಗಳು ಮತ್ತು ವಿಮರ್ಶಕರು ಕಲ್ಪಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Verification Before Publication",
    "headingKn": "ಪ್ರಕಟಣೆಗೆ ಮೊದಲು ಪರಿಶೀಲನೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a number must match the log before it is published</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">paper</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">reported numbers</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">gate</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">compare to log</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">reviewers</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">noisy vote</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">publish</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">only if matched</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a number must match the log before it is published</text></svg>",
    "captionEn": "Check numbers against the log, then review.",
    "captionKn": "ಸಂಖ್ಯೆಗಳನ್ನು ಲಾಗ್ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿ, ನಂತರ ವಿಮರ್ಶಿಸಿ."
   }
  },
  {
   "type": "table",
   "data": {
    "captionEn": "Settings in the lab",
    "captionKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
    "rows": "Item|Setting\nresults per paper|6 numbers between 0.5 and 0.95\nfabrication|inflate by 0.05 to 0.2 at rates 0, 0.05, 0.2\ngate tolerance|0.002\nreviewer noise|0.25, cutoff quality 0.6\nrewrite budget|3 attempts"
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
    "filename": "as_3.py",
    "headingEn": "Results, paper writer, gate and reviewer",
    "headingKn": "ಫಲಿತಾಂಶಗಳು, ಪೇಪರ್ ಬರಹಗಾರ, gate ಮತ್ತು ವಿಮರ್ಶಕ",
    "descEn": "make_results draws a results log, write_paper may inflate numbers, gate lists mismatched keys and reviewer_vote adds noise and a shared bias to the quality.",
    "descKn": "make_results ಫಲಿತಾಂಶ ಲಾಗ್ ಎಳೆಯುತ್ತದೆ, write_paper ಸಂಖ್ಯೆಗಳನ್ನು ಉಬ್ಬಿಸಬಹುದು, gate ಹೊಂದಿಕೆಯಾಗದ ಕೀಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ ಮತ್ತು reviewer_vote ಗುಣಮಟ್ಟಕ್ಕೆ noise ಮತ್ತು ಹಂಚಿದ bias ಸೇರಿಸುತ್ತದೆ.",
    "code": "def make_results(r, n=6):\r\n    return {f\"exp{i}\": round(r.uniform(0.5, 0.95), 3) for i in range(n)}\r\n\r\n\r\ndef write_paper(r, results, fabricate_rate):\r\n    \"\"\"The paper reports a number per experiment. A fabricating writer sometimes inflates it by 0.05 to 0.2.\"\"\"\r\n    paper = {}\r\n    for k, v in results.items():\r\n        if r.random() < fabricate_rate:\r\n            paper[k] = round(min(1.0, v + r.uniform(0.05, 0.2)), 3)\r\n        else:\r\n            paper[k] = v\r\n    return paper\r\n\r\n\r\ndef gate(paper, log, tol=0.002):\r\n    bad = [k for k, v in paper.items() if k not in log or abs(log[k] - v) > tol]\r\n    return bad\r\n\r\n\r\ndef reviewer_vote(r, true_quality, noise, shared_bias):\r\n    return (true_quality + shared_bias + r.gauss(0, noise)) > 0.6"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "as_3.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the gate at three fabrication rates, shows tolerance edge cases, compares reviewer ensembles and runs a gated cycle with rewrites.",
    "descKn": "main() ಮೂರು ಮೋಸ ದರಗಳಲ್ಲಿ gate ಓಡಿಸಿ, ಸಹನೆ ಅಂಚಿನ ಪ್ರಕರಣಗಳನ್ನು ತೋರಿಸಿ, ವಿಮರ್ಶಕ ಸಮೂಹಗಳನ್ನು ಹೋಲಿಸಿ ಮತ್ತು ಮರುಬರೆಯುವಿಕೆಯೊಂದಿಗೆ gated ಚಕ್ರ ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely measuring: a numbers-against-log gate (2000 papers, 6 results each)\")\r\n    r = random.Random(1)\r\n    for rate in (0.0, 0.05, 0.2):\r\n        flagged = fab = missed = 0\r\n        for _ in range(2000):\r\n            res = make_results(r)\r\n            paper = write_paper(r, res, rate)\r\n            truly_bad = any(paper[k] != res[k] for k in res)\r\n            caught = bool(gate(paper, res))\r\n            fab += truly_bad\r\n            flagged += caught\r\n            missed += truly_bad and not caught\r\n        print(f\"fabrication rate {rate:.2f} per number: papers with a changed number {fab:4d} | flagged {flagged:4d} | missed {missed}\")\r\n    print(\"the gate flags every paper in which a reported number differs from the log by more than the tolerance and misses none here, because each number is compared directly; it says nothing about whether the logged experiment itself was valid, and the fabrication rates are invented\")\r\n\r\n    section(\"2. Genuinely running: what a tolerance hides\")\r\n    log = {\"exp0\": 0.700}\r\n    for reported in (0.700, 0.701, 0.703, 0.750):\r\n        print(f\"reported {reported:.3f} against logged 0.700 -> flagged: {bool(gate({'exp0': reported}, log))}\")\r\n    print(\"a tolerance of 0.002 lets rounding differences through and blocks anything larger, so the tolerance is itself a policy choice and a bigger one would let small inflations pass\")\r\n\r\n    section(\"3. Genuinely measuring: reviewer ensembles with noise and shared bias (20000 papers, quality 0 to 1)\")\r\n    r = random.Random(2)\r\n    qualities = [r.random() for _ in range(20000)]\r\n    truth = [q > 0.6 for q in qualities]\r\n    for n_rev, bias in ((1, 0.0), (5, 0.0), (5, 0.1)):\r\n        acc = []\r\n        for q, t in zip(qualities, truth):\r\n            votes = sum(reviewer_vote(r, q, 0.25, bias) for _ in range(n_rev))\r\n            acc.append((votes > n_rev / 2) == t)\r\n        print(f\"{n_rev} reviewer(s), shared bias {bias:.1f}: agrees with the quality cutoff {mean(acc):.3f}\")\r\n    print(\"five independent noisy reviewers beat one, and a shared bias that all reviewers have in common lowers the agreement again no matter how many reviewers vote, because averaging cancels independent noise and cannot cancel a bias they share; the noise and bias values are invented\")\r\n\r\n    section(\"4. Genuinely running: a full gated run with a retry budget\")\r\n    r = random.Random(3)\r\n    outcomes = {\"published\": 0, \"blocked_after_budget\": 0}\r\n    for _ in range(2000):\r\n        done = False\r\n        for attempt in range(3):\r\n            res = make_results(r)\r\n            paper = write_paper(r, res, 0.1)\r\n            if gate(paper, res):\r\n                continue\r\n            outcomes[\"published\"] += 1\r\n            done = True\r\n            break\r\n        if not done:\r\n            outcomes[\"blocked_after_budget\"] += 1\r\n    print(outcomes)\r\n    print(\"each run may rewrite a blocked paper up to three times, so runs end as published with every number matching the log or as blocked after the budget; nothing was published with a mismatched number, which is what the gate guarantees and not a statement about whether the science is good\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely measuring: a numbers-against-log gate (2000 papers, 6 results each) ---\nfabrication rate 0.00 per number: papers with a changed number    0 | flagged    0 | missed 0\nfabrication rate 0.05 per number: papers with a changed number  520 | flagged  520 | missed 0\nfabrication rate 0.20 per number: papers with a changed number 1455 | flagged 1455 | missed 0\nthe gate flags every paper in which a reported number differs from the log by more than the tolerance and misses none here, because each number is compared directly; it says nothing about whether the logged experiment itself was valid, and the fabrication rates are invented\n\n--- 2. Genuinely running: what a tolerance hides ---\nreported 0.700 against logged 0.700 -> flagged: False\nreported 0.701 against logged 0.700 -> flagged: False\nreported 0.703 against logged 0.700 -> flagged: True\nreported 0.750 against logged 0.700 -> flagged: True\na tolerance of 0.002 lets rounding differences through and blocks anything larger, so the tolerance is itself a policy choice and a bigger one would let small inflations pass\n\n--- 3. Genuinely measuring: reviewer ensembles with noise and shared bias (20000 papers, quality 0 to 1) ---\n1 reviewer(s), shared bias 0.0: agrees with the quality cutoff 0.811\n5 reviewer(s), shared bias 0.0: agrees with the quality cutoff 0.896\n5 reviewer(s), shared bias 0.1: agrees with the quality cutoff 0.867\nfive independent noisy reviewers beat one, and a shared bias that all reviewers have in common lowers the agreement again no matter how many reviewers vote, because averaging cancels independent noise and cannot cancel a bias they share; the noise and bias values are invented\n\n--- 4. Genuinely running: a full gated run with a retry budget ---\n{'published': 1795, 'blocked_after_budget': 205}\neach run may rewrite a blocked paper up to three times, so runs end as published with every number matching the log or as blocked after the budget; nothing was published with a mismatched number, which is what the gate guarantees and not a statement about whether the science is good"
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
    "headingEn": "Experiment 1: A numbers-against-log gate (2000 papers, 6 results each)",
    "headingKn": "ಪ್ರಯೋಗ 1: A numbers-against-log gate (2000 papers, 6 results each)",
    "bodyEn": "What it ran: A numbers-against-log gate (2000 papers, 6 results each). What the lab concluded: the gate flags every paper in which a reported number differs from the log by more than the tolerance and misses none here, because each number is compared directly; it says nothing about whether the logged experiment itself was valid, and the fabrication rates are invented",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A numbers-against-log gate (2000 papers, 6 results each). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the gate flags every paper in which a reported number differs from the log by more than the tolerance and misses none here, because each number is compared directly; it says nothing about whether the logged experiment itself was valid, and the fabrication rates are invented"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely measuring: a numbers-against-log gate (2000 papers, 6 results each) ---\nfabrication rate 0.00 per number: papers with a changed number    0 | flagged    0 | missed 0\nfabrication rate 0.05 per number: papers with a changed number  520 | flagged  520 | missed 0\nfabrication rate 0.20 per number: papers with a changed number 1455 | flagged 1455 | missed 0"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: What a tolerance hides",
    "headingKn": "ಪ್ರಯೋಗ 2: What a tolerance hides",
    "bodyEn": "What it ran: What a tolerance hides. What the lab concluded: a tolerance of 0.002 lets rounding differences through and blocks anything larger, so the tolerance is itself a policy choice and a bigger one would let small inflations pass",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: What a tolerance hides. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a tolerance of 0.002 lets rounding differences through and blocks anything larger, so the tolerance is itself a policy choice and a bigger one would let small inflations pass"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: what a tolerance hides ---\nreported 0.700 against logged 0.700 -> flagged: False\nreported 0.701 against logged 0.700 -> flagged: False\nreported 0.703 against logged 0.700 -> flagged: True\nreported 0.750 against logged 0.700 -> flagged: True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Reviewer ensembles with noise and shared bias (20000 papers, quality 0 to 1)",
    "headingKn": "ಪ್ರಯೋಗ 3: Reviewer ensembles with noise and shared bias (20000 papers, quality 0 to 1)",
    "bodyEn": "What it ran: Reviewer ensembles with noise and shared bias (20000 papers, quality 0 to 1). What the lab concluded: five independent noisy reviewers beat one, and a shared bias that all reviewers have in common lowers the agreement again no matter how many reviewers vote, because averaging cancels independent noise and cannot cancel a bias they share; the noise and bias values are invented",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Reviewer ensembles with noise and shared bias (20000 papers, quality 0 to 1). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): five independent noisy reviewers beat one, and a shared bias that all reviewers have in common lowers the agreement again no matter how many reviewers vote, because averaging cancels independent noise and cannot cancel a bias they share; the noise and bias values are invented"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: reviewer ensembles with noise and shared bias (20000 papers, quality 0 to 1) ---\n1 reviewer(s), shared bias 0.0: agrees with the quality cutoff 0.811\n5 reviewer(s), shared bias 0.0: agrees with the quality cutoff 0.896\n5 reviewer(s), shared bias 0.1: agrees with the quality cutoff 0.867"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A full gated run with a retry budget",
    "headingKn": "ಪ್ರಯೋಗ 4: A full gated run with a retry budget",
    "bodyEn": "What it ran: A full gated run with a retry budget. What the lab concluded: each run may rewrite a blocked paper up to three times, so runs end as published with every number matching the log or as blocked after the budget; nothing was published with a mismatched number, which is what the gate guarantees and not a statement about whether the science is good",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A full gated run with a retry budget. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each run may rewrite a blocked paper up to three times, so runs end as published with every number matching the log or as blocked after the budget; nothing was published with a mismatched number, which is what the gate guarantees and not a statement about whether the science is good"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a full gated run with a retry budget ---\n{'published': 1795, 'blocked_after_budget': 205}"
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
    "headingEn": "Genuinely Found: The Gate and Its Tolerance",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Gate ಮತ್ತು ಅದರ ಸಹನೆ",
    "bodyEn": "Section 1: at fabrication rates 0.00, 0.05 and 0.20 there were 0, 520 and 1455 papers with a changed number, and the gate flagged 0, 520 and 1455 with none missed. Section 2 with a logged value of 0.700: reported 0.700 and 0.701 were not flagged, 0.703 and 0.750 were flagged.",
    "bodyKn": "ವಿಭಾಗ 1: ಮೋಸ ದರ 0.00, 0.05 ಮತ್ತು 0.20 ರಲ್ಲಿ ಬದಲಾದ ಸಂಖ್ಯೆಯ ಪೇಪರ್‌ಗಳು 0, 520 ಮತ್ತು 1455, ಮತ್ತು gate 0, 520 ಮತ್ತು 1455 ಗುರುತಿಸಿತು, ಯಾವುದೂ ತಪ್ಪಲಿಲ್ಲ. ವಿಭಾಗ 2 ಲಾಗ್ ಮೌಲ್ಯ 0.700 ರೊಂದಿಗೆ: ವರದಿ 0.700 ಮತ್ತು 0.701 ಗುರುತಿಸಲ್ಪಡಲಿಲ್ಲ, 0.703 ಮತ್ತು 0.750 ಗುರುತಿಸಲ್ಪಟ್ಟವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Reviewers and the Gated Run",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ವಿಮರ್ಶಕರು ಮತ್ತು Gated ಓಟ",
    "bodyEn": "Section 3: one reviewer agreed with the quality cutoff 0.811 of the time, five independent reviewers 0.896 and five with a shared bias of 0.1 0.867. Section 4: of 2000 gated runs with up to three rewrites, 1795 were published with every number matching the log and 205 were blocked after the budget.",
    "bodyKn": "ವಿಭಾಗ 3: ಒಬ್ಬ ವಿಮರ್ಶಕ ಗುಣಮಟ್ಟ ಮಿತಿಯೊಂದಿಗೆ 0.811 ಸಮಯ ಒಪ್ಪಿದ, ಐದು ಸ್ವತಂತ್ರ ವಿಮರ್ಶಕರು 0.896 ಮತ್ತು 0.1 ಹಂಚಿದ bias ಇರುವ ಐದು 0.867. ವಿಭಾಗ 4: ಮೂರು ಮರುಬರೆಯುವಿಕೆ ವರೆಗೆ 2000 gated ಓಟಗಳಲ್ಲಿ 1795 ಪ್ರತಿ ಸಂಖ್ಯೆ ಲಾಗ್‌ಗೆ ಹೊಂದಿಕೊಂಡು ಪ್ರಕಟವಾದವು ಮತ್ತು 205 ಬಜೆಟ್ ನಂತರ ನಿರ್ಬಂಧಿಸಲ್ಪಟ್ಟವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A gate that compares numbers with a log stops fabricated figures mechanically, but it cannot tell whether the logged experiment was valid, so it is one layer and not a verdict on the science.",
    "bodyKn": "ಸಂಖ್ಯೆಗಳನ್ನು ಲಾಗ್‌ನೊಂದಿಗೆ ಹೋಲಿಸುವ gate ಕಲ್ಪಿತ ಅಂಕಿಗಳನ್ನು ಯಾಂತ್ರಿಕವಾಗಿ ತಡೆಯುತ್ತದೆ, ಆದರೆ ಲಾಗ್ ಮಾಡಿದ ಪ್ರಯೋಗ ಮಾನ್ಯವಾಗಿತ್ತೇ ಎಂದು ಹೇಳಲಾರದು, ಆದ್ದರಿಂದ ಅದು ಒಂದು ಪದರ, ವಿಜ್ಞಾನದ ಬಗ್ಗೆ ತೀರ್ಪು ಅಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"more reviewers always fixes review quality.\" Five reviewers with a shared bias of 0.1 agreed 0.867 of the time against 0.896 without the bias.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಹೆಚ್ಚು ವಿಮರ್ಶಕರು ಯಾವಾಗಲೂ ವಿಮರ್ಶೆ ಗುಣಮಟ್ಟ ಸರಿಪಡಿಸುತ್ತಾರೆ.\" 0.1 ಹಂಚಿದ bias ಇರುವ ಐದು ವಿಮರ್ಶಕರು bias ಇಲ್ಲದ 0.896 ವಿರುದ್ಧ 0.867 ಸಮಯ ಒಪ್ಪಿದರು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Results log: the recorded outputs of experiments. Tolerance: allowed difference. Shared bias: an error all reviewers have. Rewrite budget: cap on rewrites after a block.",
    "bodyKn": "Results log: ಪ್ರಯೋಗಗಳ ದಾಖಲಿತ ಔಟ್‌ಪುಟ್. Tolerance: ಅನುಮತಿಸಿದ ವ್ಯತ್ಯಾಸ. Shared bias: ಎಲ್ಲಾ ವಿಮರ್ಶಕರಲ್ಲಿರುವ ದೋಷ. Rewrite budget: ನಿರ್ಬಂಧದ ನಂತರ ಮರುಬರೆಯುವಿಕೆಗಳ ಮಿತಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The gate flagged all 520 and 1455 changed papers. 2) Tolerance 0.002 passed 0.701 and blocked 0.703. 3) Five reviewers reached 0.896 against 0.811 for one. 4) A shared bias dropped that to 0.867. 5) 1795 of 2000 runs published, 205 blocked.",
    "bodyKn": "1) gate ಎಲ್ಲಾ 520 ಮತ್ತು 1455 ಬದಲಾದ ಪೇಪರ್‌ಗಳನ್ನು ಗುರುತಿಸಿತು. 2) ಸಹನೆ 0.002 0.701 ಹಾದುಹೋಗಿಸಿ 0.703 ನಿರ್ಬಂಧಿಸಿತು. 3) ಐದು ವಿಮರ್ಶಕರು ಒಬ್ಬರ 0.811 ವಿರುದ್ಧ 0.896 ತಲುಪಿದರು. 4) ಹಂಚಿದ bias ಅದನ್ನು 0.867 ಗೆ ಇಳಿಸಿತು. 5) 2000 ರಲ್ಲಿ 1795 ಪ್ರಕಟವಾದವು, 205 ನಿರ್ಬಂಧಿತ."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B as_3.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B as_3.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B as_3.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B as_3.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Predict before you run",
    "headingKn": "ಓಡಿಸುವ ಮುನ್ನ ಊಹಿಸಿ",
    "bodyEn": "Before rerunning, write down what you expect each experiment to print, then compare:\n1. A numbers-against-log gate (2000 papers, 6 results each)\n2. What a tolerance hides\n3. Reviewer ensembles with noise and shared bias (20000 papers, quality 0 to 1)\n4. A full gated run with a retry budget",
    "bodyKn": "ಮರುಓಡಿಸುವ ಮುನ್ನ ಪ್ರತಿ ಪ್ರಯೋಗ ಏನು ಮುದ್ರಿಸುತ್ತದೆ ಎಂದು ನಿರೀಕ್ಷಿಸುವುದನ್ನು ಬರೆಯಿರಿ, ನಂತರ ಹೋಲಿಸಿ:\n1. A numbers-against-log gate (2000 papers, 6 results each)\n2. What a tolerance hides\n3. Reviewer ensembles with noise and shared bias (20000 papers, quality 0 to 1)\n4. A full gated run with a retry budget"
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many papers with a changed number did the gate miss at fabrication rate 0.20?",
      "qKn": "ಮೋಸ ದರ 0.20 ರಲ್ಲಿ ಬದಲಾದ ಸಂಖ್ಯೆಯ ಎಷ್ಟು ಪೇಪರ್‌ಗಳನ್ನು gate ತಪ್ಪಿಸಿತು?",
      "opts": [
       "0",
       "520",
       "1455",
       "205"
      ],
      "optsKn": [
       "0",
       "520",
       "1455",
       "205"
      ],
      "correct": 0
     },
     {
      "q": "Was a reported 0.703 against a logged 0.700 flagged?",
      "qKn": "ಲಾಗ್ ಮಾಡಿದ 0.700 ವಿರುದ್ಧ ವರದಿ 0.703 ಗುರುತಿಸಲ್ಪಟ್ಟಿತೇ?",
      "opts": [
       "Yes",
       "No",
       "Only at rate 0.05",
       "Only for exp0"
      ],
      "optsKn": [
       "ಹೌದು",
       "ಇಲ್ಲ",
       "ದರ 0.05 ರಲ್ಲಿ ಮಾತ್ರ",
       "exp0 ಗೆ ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "How did five reviewers with a shared bias of 0.1 score?",
      "qKn": "0.1 ಹಂಚಿದ bias ಇರುವ ಐದು ವಿಮರ್ಶಕರು ಎಷ್ಟು ಅಂಕ ಪಡೆದರು?",
      "opts": [
       "0.867",
       "0.896",
       "0.811",
       "1.000"
      ],
      "optsKn": [
       "0.867",
       "0.896",
       "0.811",
       "1.000"
      ],
      "correct": 0
     },
     {
      "q": "How many of 2000 gated runs were published?",
      "qKn": "2000 gated ಓಟಗಳಲ್ಲಿ ಎಷ್ಟು ಪ್ರಕಟವಾದವು?",
      "opts": [
       "1795",
       "205",
       "2000",
       "520"
      ],
      "optsKn": [
       "1795",
       "205",
       "2000",
       "520"
      ],
      "correct": 0
     },
     {
      "q": "What does a numbers-against-log gate not establish?",
      "qKn": "ಸಂಖ್ಯೆ-ಲಾಗ್ gate ಏನನ್ನು ಸ್ಥಾಪಿಸುವುದಿಲ್ಲ?",
      "opts": [
       "That the logged experiment itself was valid",
       "That a reported number matches the log",
       "That a number was inflated",
       "That the tolerance is set"
      ],
      "optsKn": [
       "ಲಾಗ್ ಮಾಡಿದ ಪ್ರಯೋಗವೇ ಮಾನ್ಯವಾಗಿತ್ತು ಎಂದು",
       "ವರದಿ ಸಂಖ್ಯೆ ಲಾಗ್‌ಗೆ ಹೊಂದುತ್ತದೆ ಎಂದು",
       "ಸಂಖ್ಯೆ ಉಬ್ಬಿಸಲಾಯಿತು ಎಂದು",
       "ಸಹನೆ ಹೊಂದಿಸಲಾಗಿದೆ ಎಂದು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
