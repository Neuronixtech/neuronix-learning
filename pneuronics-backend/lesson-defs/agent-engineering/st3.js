module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b321592",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Self-Taught Reasoning: STaR, V-STaR, Quiet-STaR (Part 3 of 3) — Supervision, Shortcuts and Thinking Gates",
 "titleKn": "ಸ್ವಯಂ-ಕಲಿತ ತರ್ಕ: STaR, V-STaR, Quiet-STaR (ಭಾಗ 3 / 3) — ಮೇಲ್ವಿಚಾರಣೆ, ಶಾರ್ಟ್‌ಕಟ್‌ಗಳು ಮತ್ತು ಯೋಚನೆ ಗೇಟ್‌ಗಳು",
 "desc": "Compare outcome and process supervision, test out of distribution and measure a thinking gate.",
 "descKn": "outcome ಮತ್ತು process supervision ಹೋಲಿಸಿ, ವಿತರಣೆ-ಹೊರಗೆ ಪರೀಕ್ಷಿಸಿ ಮತ್ತು ಯೋಚನೆ ಗೇಟ್ ಅಳೆಯಿರಿ.",
 "objectives": [
  "Measure hidden wrong steps.",
  "Compare outcome and process filters.",
  "Degrade a step checker.",
  "Test out of distribution.",
  "Measure a thinking gate."
 ],
 "objectivesKn": [
  "ಅಡಗಿದ ತಪ್ಪು ಹಂತ ಅಳೆಯಿರಿ.",
  "outcome ಮತ್ತು process ಶೋಧಕ ಹೋಲಿಸಿ.",
  "ಹಂತ ಪರಿಶೀಲಕ ಹದಗೆಡಿಸಿ.",
  "ವಿತರಣೆ-ಹೊರಗೆ ಪರೀಕ್ಷಿಸಿ.",
  "ಯೋಚನೆ ಗೇಟ್ ಅಳೆಯಿರಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Self-Taught Reasoning: STaR, V-STaR, Quiet-STaR (Part 3 of 3)",
    "textKn": "ಸ್ವಯಂ-ಕಲಿತ ತರ್ಕ: STaR, V-STaR, Quiet-STaR (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: process versus outcome supervision, an imperfect step checker, a memorizer against an algorithm tested out of distribution and a thinking gate in the spirit of Quiet-STaR. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind self-taught reasoning (STaR rationale filtering and rationalization, V-STaR verifiers and best-of-N, process versus outcome supervision, out-of-distribution testing and Quiet-STaR style thinking gates), not the real software, and the model is a table of invented competence values or a threshold on invented scores, and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. Any results quoted in the source lesson about published STaR, V-STaR or Quiet-STaR work are cited from the lesson and were not reproduced here; every competence, probability and rate in the labs is invented to show the mechanics of the method. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: process ಮತ್ತು outcome supervision, ಅಪೂರ್ಣ ಹಂತ ಪರಿಶೀಲಕ, ವಿತರಣೆ-ಹೊರಗೆ ಪರೀಕ್ಷಿಸಿದ memorizer ಮತ್ತು algorithm ಹಾಗೂ Quiet-STaR ಉತ್ಸಾಹದ ಯೋಚನೆ ಗೇಟ್. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಸ್ವಯಂ-ಕಲಿತ ತರ್ಕ (STaR ತರ್ಕ ಶೋಧನೆ ಮತ್ತು rationalization, V-STaR ಪರಿಶೀಲಕಗಳು ಮತ್ತು best-of-N, process ಹಾಗೂ outcome supervision, ವಿತರಣೆ-ಹೊರಗಿನ ಪರೀಕ್ಷೆ ಮತ್ತು Quiet-STaR ಶೈಲಿಯ ಯೋಚನೆ ಗೇಟ್‌ಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಮಾದರಿ ಕಲ್ಪಿತ ಸಾಮರ್ಥ್ಯ ಮೌಲ್ಯಗಳ ಕೋಷ್ಟಕ ಅಥವಾ ಕಲ್ಪಿತ ಅಂಕಗಳ ಮೇಲಿನ ಮಿತಿ, ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಪ್ರಕಟಿತ STaR, V-STaR ಅಥವಾ Quiet-STaR ಕೆಲಸದ ಬಗ್ಗೆ ಮೂಲ lesson ನಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿದ ಫಲಿತಾಂಶಗಳು lesson ನಿಂದ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಪುನರುತ್ಪಾದಿಸಲಾಗಿಲ್ಲ; ಲ್ಯಾಬ್‌ಗಳ ಪ್ರತಿ ಸಾಮರ್ಥ್ಯ, ಸಂಭವನೀಯತೆ ಮತ್ತು ದರ ವಿಧಾನದ ಯಂತ್ರಶಾಸ್ತ್ರ ತೋರಿಸಲು ಕಲ್ಪಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Rewarding the Answer Versus Rewarding the Steps",
    "textKn": "ಉತ್ತರಕ್ಕೆ ಬಹುಮಾನ ಮತ್ತು ಹಂತಗಳಿಗೆ ಬಹುಮಾನ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Four Questions About Trust",
    "headingKn": "ನಂಬಿಕೆಯ ಬಗ್ಗೆ ನಾಲ್ಕು ಪ್ರಶ್ನೆಗಳು",
    "bodyEn": "This part asks how far a self-taught reasoner can be trusted. It measures how many outcome-rewarded chains hid wrong steps, compares an outcome filter with a process filter and an imperfect step checker, shows a memorizer and an algorithm that look identical in distribution and differ out of distribution, and measures a gate that thinks only on hard positions. Chains, checkers and difficulty scores are invented stand-ins.",
    "bodyKn": "ಸ್ವಯಂ-ಕಲಿತ ತರ್ಕಕಾರನನ್ನು ಎಷ್ಟು ನಂಬಬಹುದು ಎಂದು ಈ ಭಾಗ ಕೇಳುತ್ತದೆ. outcome-ಬಹುಮಾನ ಪಡೆದ ಸರಪಳಿಗಳಲ್ಲಿ ಎಷ್ಟು ತಪ್ಪು ಹಂತ ಅಡಗಿದ್ದವು ಅಳೆಯುತ್ತದೆ, outcome ಶೋಧಕವನ್ನು process ಶೋಧಕ ಮತ್ತು ಅಪೂರ್ಣ ಹಂತ ಪರಿಶೀಲಕದೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ, ವಿತರಣೆಯೊಳಗೆ ಒಂದೇ ಕಾಣುವ ಆದರೆ ವಿತರಣೆ-ಹೊರಗೆ ಭಿನ್ನವಾಗುವ memorizer ಮತ್ತು algorithm ತೋರಿಸುತ್ತದೆ ಮತ್ತು ಕಠಿಣ ಸ್ಥಾನಗಳಲ್ಲಿ ಮಾತ್ರ ಯೋಚಿಸುವ ಗೇಟ್ ಅಳೆಯುತ್ತದೆ. ಸರಪಳಿಗಳು, ಪರಿಶೀಲಕಗಳು ಮತ್ತು ಕಷ್ಟ ಅಂಕಗಳು ಕಲ್ಪಿತ ಪರ್ಯಾಯಗಳು."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "What You Supervise Is What You Get",
    "headingKn": "ನೀವು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿದ್ದೇ ನಿಮಗೆ ಸಿಗುತ್ತದೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">what you supervise decides what the model learns</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">outcome</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">final answer only</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">process</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">check each step</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">OOD</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">unseen inputs</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">gate</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">think when hard</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">what you supervise decides what the model learns</text></svg>",
    "captionEn": "Outcome, process, out-of-distribution tests and thinking gates.",
    "captionKn": "Outcome, process, ವಿತರಣೆ-ಹೊರಗಿನ ಪರೀಕ್ಷೆಗಳು ಮತ್ತು ಯೋಚನೆ ಗೇಟ್‌ಗಳು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Checks compared",
    "headingKn": "ಪರಿಶೀಲನೆಗಳ ಹೋಲಿಕೆ",
    "headers": [
     "Check",
     "What it looks at"
    ],
    "rows": [
     [
      "outcome",
      "only the final answer"
     ],
     [
      "process",
      "every step in the chain"
     ],
     [
      "imperfect process",
      "a step checker that misses some wrong steps"
     ],
     [
      "in-distribution test",
      "inputs like the training set"
     ],
     [
      "out-of-distribution test",
      "unseen two-digit and four-digit sums"
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
    "filename": "st_3.py",
    "headingEn": "Chains, rewards and the two solvers",
    "headingKn": "ಸರಪಳಿಗಳು, ಬಹುಮಾನಗಳು ಮತ್ತು ಎರಡು solvers",
    "descEn": "make_chain builds a chain of steps with a lucky-answer chance, outcome_reward and process_reward score it two different ways.",
    "descKn": "make_chain ಅದೃಷ್ಟ-ಉತ್ತರ ಸಾಧ್ಯತೆಯೊಂದಿಗೆ ಹಂತಗಳ ಸರಪಳಿ ರಚಿಸುತ್ತದೆ, outcome_reward ಮತ್ತು process_reward ಅದಕ್ಕೆ ಎರಡು ವಿಭಿನ್ನ ರೀತಿಯಲ್ಲಿ ಅಂಕ ನೀಡುತ್ತವೆ.",
    "code": "def make_chain(r, n_steps=4, p_step=0.8, lucky=0.2):\r\n    \"\"\"A reasoning chain: each step is right with p_step. If any step is wrong the final answer is still right with probability lucky.\"\"\"\r\n    steps = [r.random() < p_step for _ in range(n_steps)]\r\n    if all(steps):\r\n        return steps, True\r\n    return steps, r.random() < lucky\r\n\r\n\r\ndef outcome_reward(chain):\r\n    return 1.0 if chain[1] else 0.0\r\n\r\n\r\ndef process_reward(chain):\r\n    return mean(chain[0])"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "st_3.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() measures outcome rewards, compares the two filters, degrades the step checker, tests a memorizer and an algorithm out of distribution and tries thinking gates.",
    "descKn": "main() outcome ಬಹುಮಾನ ಅಳೆದು, ಎರಡು ಶೋಧಕ ಹೋಲಿಸಿ, ಹಂತ ಪರಿಶೀಲಕ ಹದಗೆಡಿಸಿ, ವಿತರಣೆ-ಹೊರಗೆ memorizer ಮತ್ತು algorithm ಪರೀಕ್ಷಿಸಿ ಮತ್ತು ಯೋಚನೆ ಗೇಟ್ ಪ್ರಯತ್ನಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely measuring: what outcome rewards reward (20000 chains of 4 steps, per-step 0.8)\")\r\n    r = random.Random(1)\r\n    chains = [make_chain(r) for _ in range(20000)]\r\n    right = [c for c in chains if c[1]]\r\n    clean = [c for c in right if all(c[0])]\r\n    print(f\"answer right: {len(right) / len(chains):.3f} | all steps right: {sum(all(c[0]) for c in chains) / len(chains):.3f}\")\r\n    print(f\"of the chains an outcome reward scores 1.0, the share with at least one wrong step: {1 - len(clean) / len(right):.3f}\")\r\n    print(\"an outcome-only reward treats a chain with wrong steps and a lucky right answer exactly like a clean chain, so a notable share of rewarded chains reasoned badly; the 0.8 per-step rate and 20 percent luck are invented\")\r\n\r\n    section(\"2. Genuinely measuring: filtering by outcome against filtering by process\")\r\n    keep_out = [c for c in chains if outcome_reward(c) == 1.0]\r\n    keep_proc = [c for c in chains if process_reward(c) == 1.0]\r\n    print(f\"outcome filter keeps {len(keep_out)} chains; fraction fully correct {mean(all(c[0]) for c in keep_out):.3f}\")\r\n    print(f\"process filter keeps {len(keep_proc)} chains; fraction fully correct {mean(all(c[0]) for c in keep_proc):.3f}\")\r\n    print(\"requiring every step to be checked removes the lucky chains and keeps fewer examples, which is the trade of process supervision: cleaner data at the price of needing a per-step checker, and here the checker is perfect because the lab knows the truth\")\r\n\r\n    section(\"3. Genuinely measuring: an imperfect step checker\")\r\n    r = random.Random(2)\r\n    for miss in (0.0, 0.1, 0.3):\r\n        kept = []\r\n        for steps, ans in chains[:8000]:\r\n            flagged = any((not s) and r.random() >= miss for s in steps)\r\n            if not flagged:\r\n                kept.append((steps, ans))\r\n        print(f\"checker misses {miss:.1f} of wrong steps: kept {len(kept):4d} | fully correct share {mean(all(s) for s, _ in kept):.3f}\")\r\n    print(\"as the checker misses more wrong steps, bad chains slip into the training set again; a process checker is only as good as its coverage, and the miss rates are invented\")\r\n\r\n    section(\"4. Genuinely running: a memorizer and an algorithm, tested in and out of distribution\")\r\n    train = {(a, b): a + b for a in range(10, 100, 3) for b in range(10, 100, 3)}\r\n    memorizer = lambda a, b: train.get((a, b), 0)\r\n    algorithm = lambda a, b: a + b\r\n    r = random.Random(3)\r\n    in_dist = [(r.choice(range(10, 100, 3)), r.choice(range(10, 100, 3))) for _ in range(500)]\r\n    unseen = [(a + 1, b + 1) for a, b in in_dist]\r\n    big = [(r.randint(1000, 9999), r.randint(1000, 9999)) for _ in range(500)]\r\n    for name, f in ((\"memorizer\", memorizer), (\"algorithm\", algorithm)):\r\n        acc = [mean(f(a, b) == a + b for a, b in s) for s in (in_dist, unseen, big)]\r\n        print(f\"{name:10} in-distribution {acc[0]:.2f} | unseen two-digit {acc[1]:.2f} | four-digit {acc[2]:.2f}\")\r\n    print(\"both look perfect on training-style inputs, and only the one that learned the procedure survives inputs it has not seen; a test set drawn from the training distribution cannot tell them apart, and the memorizer is a plain lookup table used as a stand-in\")\r\n\r\n    section(\"5. Genuinely measuring: a thinking gate that thinks only when a position looks hard\")\r\n    r = random.Random(4)\r\n    positions = [r.random() for _ in range(20000)]\r\n    accuracy = lambda d, think: 0.97 if think else max(0.2, 1.0 - 0.9 * d)\r\n    for name, gate in ((\"never think\", lambda d: False), (\"always think\", lambda d: True), (\"think if difficulty > 0.5\", lambda d: d > 0.5), (\"think if difficulty > 0.8\", lambda d: d > 0.8)):\r\n        thought = [gate(d) for d in positions]\r\n        acc = mean(accuracy(d, t) for d, t in zip(positions, thought))\r\n        print(f\"{name:27} accuracy {acc:.3f} | thinking tokens per position {mean(thought) * 50:5.1f}\")\r\n    print(\"thinking only where difficulty exceeds 0.5 recovers about 76 percent of the accuracy gain of always thinking (0.556 to 0.870 against 0.970) for about half the tokens, because thinking only helps where the position is hard; the difficulty scores and the accuracy curve are invented, and a real model has to learn when to think\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely measuring: what outcome rewards reward (20000 chains of 4 steps, per-step 0.8) ---\nanswer right: 0.526 | all steps right: 0.405\nof the chains an outcome reward scores 1.0, the share with at least one wrong step: 0.230\nan outcome-only reward treats a chain with wrong steps and a lucky right answer exactly like a clean chain, so a notable share of rewarded chains reasoned badly; the 0.8 per-step rate and 20 percent luck are invented\n\n--- 2. Genuinely measuring: filtering by outcome against filtering by process ---\noutcome filter keeps 10530 chains; fraction fully correct 0.770\nprocess filter keeps 8104 chains; fraction fully correct 1.000\nrequiring every step to be checked removes the lucky chains and keeps fewer examples, which is the trade of process supervision: cleaner data at the price of needing a per-step checker, and here the checker is perfect because the lab knows the truth\n\n--- 3. Genuinely measuring: an imperfect step checker ---\nchecker misses 0.0 of wrong steps: kept 3199 | fully correct share 1.000\nchecker misses 0.1 of wrong steps: kept 3546 | fully correct share 0.902\nchecker misses 0.3 of wrong steps: kept 4318 | fully correct share 0.741\nas the checker misses more wrong steps, bad chains slip into the training set again; a process checker is only as good as its coverage, and the miss rates are invented\n\n--- 4. Genuinely running: a memorizer and an algorithm, tested in and out of distribution ---\nmemorizer  in-distribution 1.00 | unseen two-digit 0.00 | four-digit 0.00\nalgorithm  in-distribution 1.00 | unseen two-digit 1.00 | four-digit 1.00\nboth look perfect on training-style inputs, and only the one that learned the procedure survives inputs it has not seen; a test set drawn from the training distribution cannot tell them apart, and the memorizer is a plain lookup table used as a stand-in\n\n--- 5. Genuinely measuring: a thinking gate that thinks only when a position looks hard ---\nnever think                 accuracy 0.556 | thinking tokens per position   0.0\nalways think                accuracy 0.970 | thinking tokens per position  50.0\nthink if difficulty > 0.5   accuracy 0.870 | thinking tokens per position  24.7\nthink if difficulty > 0.8   accuracy 0.707 | thinking tokens per position  10.1\nthinking only where difficulty exceeds 0.5 recovers about 76 percent of the accuracy gain of always thinking (0.556 to 0.870 against 0.970) for about half the tokens, because thinking only helps where the position is hard; the difficulty scores and the accuracy curve are invented, and a real model has to learn when to think"
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
    "headingEn": "Genuinely Found: Outcome Against Process",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Outcome ವಿರುದ್ಧ Process",
    "bodyEn": "Section 1: over 20000 chains the answer was right in 0.526 and all steps were right in 0.405, and 0.230 of the chains an outcome reward scored 1.0 had at least one wrong step. Section 2: the outcome filter kept 10530 chains of which 0.770 were fully correct, the process filter kept 8104 chains, all fully correct. Section 3: a checker missing 0.0, 0.1 and 0.3 of wrong steps left fully correct shares of 1.000, 0.902 and 0.741 among 3199, 3546 and 4318 kept chains.",
    "bodyKn": "ವಿಭಾಗ 1: 20000 ಸರಪಳಿಗಳಲ್ಲಿ ಉತ್ತರ 0.526 ರಲ್ಲಿ ಸರಿ ಮತ್ತು ಎಲ್ಲಾ ಹಂತ 0.405 ರಲ್ಲಿ ಸರಿ, ಮತ್ತು outcome ಬಹುಮಾನ 1.0 ನೀಡಿದ ಸರಪಳಿಗಳಲ್ಲಿ 0.230 ರಲ್ಲಿ ಕನಿಷ್ಠ ಒಂದು ತಪ್ಪು ಹಂತ ಇತ್ತು. ವಿಭಾಗ 2: outcome ಶೋಧಕ 10530 ಸರಪಳಿ ಇಟ್ಟಿತು, ಅವುಗಳಲ್ಲಿ 0.770 ಪೂರ್ಣ ಸರಿ, process ಶೋಧಕ 8104 ಸರಪಳಿ ಇಟ್ಟಿತು, ಎಲ್ಲವೂ ಪೂರ್ಣ ಸರಿ. ವಿಭಾಗ 3: ತಪ್ಪು ಹಂತಗಳ 0.0, 0.1 ಮತ್ತು 0.3 ತಪ್ಪಿಸಿದ ಪರಿಶೀಲಕ 3199, 3546 ಮತ್ತು 4318 ಇಟ್ಟ ಸರಪಳಿಗಳಲ್ಲಿ ಪೂರ್ಣ ಸರಿ ಪಾಲು 1.000, 0.902 ಮತ್ತು 0.741 ಬಿಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Out-of-Distribution and Thinking Gates",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ವಿತರಣೆ-ಹೊರಗೆ ಮತ್ತು ಯೋಚನೆ ಗೇಟ್‌ಗಳು",
    "bodyEn": "Section 4: the memorizer scored 1.00 in distribution and 0.00 on unseen two-digit and four-digit sums, while the algorithm scored 1.00 on all three. Section 5: never thinking gave accuracy 0.556 with 0.0 thinking tokens per position, always thinking 0.970 with 50.0, thinking above difficulty 0.5 gave 0.870 with 24.7 and above 0.8 gave 0.707 with 10.1.",
    "bodyKn": "ವಿಭಾಗ 4: memorizer ವಿತರಣೆಯೊಳಗೆ 1.00 ಮತ್ತು ಕಾಣದ ಎರಡು-ಅಂಕಿ ಹಾಗೂ ನಾಲ್ಕು-ಅಂಕಿ ಮೊತ್ತಗಳಲ್ಲಿ 0.00 ಪಡೆಯಿತು, algorithm ಮೂರರಲ್ಲೂ 1.00 ಪಡೆಯಿತು. ವಿಭಾಗ 5: ಎಂದಿಗೂ ಯೋಚಿಸದಿದ್ದರೆ ನಿಖರತೆ 0.556 ಮತ್ತು ಪ್ರತಿ ಸ್ಥಾನಕ್ಕೆ 0.0 ಯೋಚನೆ tokens, ಯಾವಾಗಲೂ ಯೋಚಿಸಿದರೆ 0.970 ಮತ್ತು 50.0, ಕಷ್ಟ 0.5 ಮೇಲೆ ಯೋಚಿಸಿದರೆ 0.870 ಮತ್ತು 24.7, ಮತ್ತು 0.8 ಮೇಲೆ 0.707 ಮತ್ತು 10.1."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "The kind of supervision decides what gets learned, and an in-distribution score alone cannot show whether a model learned the procedure or only the training examples.",
    "bodyKn": "ಮೇಲ್ವಿಚಾರಣೆಯ ಪ್ರಕಾರ ಏನು ಕಲಿಯಲ್ಪಡುತ್ತದೆ ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ, ಮತ್ತು ವಿತರಣೆಯೊಳಗಿನ ಅಂಕ ಮಾತ್ರ ಮಾದರಿ ವಿಧಾನ ಕಲಿತಿದೆಯೇ ಅಥವಾ ತರಬೇತಿ ಉದಾಹರಣೆಗಳನ್ನು ಮಾತ್ರವೇ ತೋರಿಸಲಾರದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a perfect in-distribution score shows the model learned addition.\" The memorizer scored 1.00 there and 0.00 on unseen sums.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ವಿತರಣೆಯೊಳಗಿನ ಪರಿಪೂರ್ಣ ಅಂಕ ಮಾದರಿ ಕೂಡುವಿಕೆ ಕಲಿತಿದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ.\" memorizer ಅಲ್ಲಿ 1.00 ಮತ್ತು ಕಾಣದ ಮೊತ್ತಗಳಲ್ಲಿ 0.00 ಪಡೆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Outcome supervision: reward the final answer. Process supervision: check each step. OOD: out-of-distribution, inputs unlike training. Thinking gate: a rule deciding when to spend thinking tokens.",
    "bodyKn": "Outcome supervision: ಅಂತಿಮ ಉತ್ತರಕ್ಕೆ ಬಹುಮಾನ. Process supervision: ಪ್ರತಿ ಹಂತ ಪರಿಶೀಲಿಸಿ. OOD: ವಿತರಣೆ-ಹೊರಗೆ, ತರಬೇತಿಗೆ ಭಿನ್ನ ಒಳಹರಿವು. Thinking gate: ಯೋಚನೆ tokens ಯಾವಾಗ ಖರ್ಚು ಮಾಡಬೇಕು ಎಂದು ನಿರ್ಧರಿಸುವ ನಿಯಮ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) 23.0 percent of rewarded chains had a wrong step. 2) The process filter was fully correct but smaller. 3) A checker missing 30 percent let the clean share fall to 0.741. 4) The memorizer failed all unseen sums. 5) Thinking above 0.5 difficulty recovered about 76 percent of the gain at about half the tokens.",
    "bodyKn": "1) ಬಹುಮಾನ ಪಡೆದ ಸರಪಳಿಗಳಲ್ಲಿ 23.0 ಶೇಕಡಾ ತಪ್ಪು ಹಂತ ಹೊಂದಿದ್ದವು. 2) Process ಶೋಧಕ ಪೂರ್ಣ ಸರಿ ಆದರೆ ಚಿಕ್ಕದು. 3) 30 ಶೇಕಡಾ ತಪ್ಪಿಸಿದ ಪರಿಶೀಲಕ ಶುದ್ಧ ಪಾಲು 0.741 ಕ್ಕೆ ಇಳಿಯಲು ಬಿಟ್ಟಿತು. 4) memorizer ಎಲ್ಲಾ ಕಾಣದ ಮೊತ್ತಗಳಲ್ಲಿ ವಿಫಲವಾಯಿತು. 5) ಕಷ್ಟ 0.5 ಮೇಲೆ ಯೋಚಿಸುವುದು ಸುಮಾರು ಅರ್ಧ tokens ನಲ್ಲಿ ಸುಮಾರು 76 ಶೇಕಡಾ ಲಾಭ ಮರಳಿಸಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What share of outcome-rewarded chains had at least one wrong step?",
      "qKn": "outcome-ಬಹುಮಾನ ಪಡೆದ ಸರಪಳಿಗಳಲ್ಲಿ ಎಷ್ಟು ಪಾಲು ಕನಿಷ್ಠ ಒಂದು ತಪ್ಪು ಹಂತ ಹೊಂದಿತ್ತು?",
      "opts": [
       "0.230",
       "0.405",
       "0.526",
       "0.770"
      ],
      "optsKn": [
       "0.230",
       "0.405",
       "0.526",
       "0.770"
      ],
      "correct": 0
     },
     {
      "q": "What was the fully correct share when the step checker missed 30 percent of wrong steps?",
      "qKn": "ಹಂತ ಪರಿಶೀಲಕ 30 ಶೇಕಡಾ ತಪ್ಪು ಹಂತ ತಪ್ಪಿಸಿದಾಗ ಪೂರ್ಣ ಸರಿ ಪಾಲು ಎಷ್ಟು?",
      "opts": [
       "0.741",
       "1.000",
       "0.902",
       "0.230"
      ],
      "optsKn": [
       "0.741",
       "1.000",
       "0.902",
       "0.230"
      ],
      "correct": 0
     },
     {
      "q": "How did the memorizer score on unseen two-digit sums?",
      "qKn": "ಕಾಣದ ಎರಡು-ಅಂಕಿ ಮೊತ್ತಗಳಲ್ಲಿ memorizer ಎಷ್ಟು ಅಂಕ ಪಡೆಯಿತು?",
      "opts": [
       "0.00",
       "1.00",
       "0.50",
       "0.77"
      ],
      "optsKn": [
       "0.00",
       "1.00",
       "0.50",
       "0.77"
      ],
      "correct": 0
     },
     {
      "q": "What did thinking only above difficulty 0.5 give?",
      "qKn": "ಕಷ್ಟ 0.5 ಮೇಲೆ ಮಾತ್ರ ಯೋಚಿಸಿದರೆ ಏನು ಸಿಕ್ಕಿತು?",
      "opts": [
       "Accuracy 0.870 with 24.7 tokens per position",
       "Accuracy 0.970 with 50.0 tokens",
       "Accuracy 0.556 with 0 tokens",
       "Accuracy 0.707 with 10.1 tokens"
      ],
      "optsKn": [
       "ನಿಖರತೆ 0.870 ಮತ್ತು ಪ್ರತಿ ಸ್ಥಾನಕ್ಕೆ 24.7 tokens",
       "ನಿಖರತೆ 0.970 ಮತ್ತು 50.0 tokens",
       "ನಿಖರತೆ 0.556 ಮತ್ತು 0 tokens",
       "ನಿಖರತೆ 0.707 ಮತ್ತು 10.1 tokens"
      ],
      "correct": 0
     },
     {
      "q": "Why can an in-distribution test not separate the memorizer from the algorithm?",
      "qKn": "ವಿತರಣೆಯೊಳಗಿನ ಪರೀಕ್ಷೆ memorizer ಮತ್ತು algorithm ಅನ್ನು ಏಕೆ ಬೇರ್ಪಡಿಸಲಾರದು?",
      "opts": [
       "Both score 1.00 on inputs like the training set",
       "It uses too few inputs",
       "The algorithm fails in distribution",
       "The memorizer is not a model"
      ],
      "optsKn": [
       "ತರಬೇತಿ ಸೆಟ್‌ನಂತಹ ಒಳಹರಿವುಗಳಲ್ಲಿ ಎರಡೂ 1.00 ಪಡೆಯುತ್ತವೆ",
       "ಅದು ತುಂಬಾ ಕಡಿಮೆ ಒಳಹರಿವು ಬಳಸುತ್ತದೆ",
       "algorithm ವಿತರಣೆಯೊಳಗೆ ವಿಫಲ",
       "memorizer ಮಾದರಿ ಅಲ್ಲ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
