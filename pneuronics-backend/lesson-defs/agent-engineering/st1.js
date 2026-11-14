module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b321592",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Self-Taught Reasoning: STaR, V-STaR, Quiet-STaR (Part 1 of 3) — The STaR Loop",
 "titleKn": "ಸ್ವಯಂ-ಕಲಿತ ತರ್ಕ: STaR, V-STaR, Quiet-STaR (ಭಾಗ 1 / 3) — STaR ಲೂಪ್",
 "desc": "Run a generate-filter-train loop on a toy task and see what an answer-only filter lets through.",
 "descKn": "ಆಟಿಕೆ ಕಾರ್ಯದ ಮೇಲೆ generate-filter-train ಲೂಪ್ ಓಡಿಸಿ ಮತ್ತು ಉತ್ತರ-ಮಾತ್ರ ಶೋಧಕ ಏನನ್ನು ಬಿಡುತ್ತದೆ ನೋಡಿ.",
 "objectives": [
  "Run a STaR round.",
  "Filter by final answer.",
  "Add rationalization.",
  "Measure over seeds.",
  "Count shortcut rationales."
 ],
 "objectivesKn": [
  "STaR ಸುತ್ತು ಓಡಿಸಿ.",
  "ಅಂತಿಮ ಉತ್ತರದಿಂದ ಶೋಧಿಸಿ.",
  "Rationalization ಸೇರಿಸಿ.",
  "seeds ಮೇಲೆ ಅಳೆಯಿರಿ.",
  "ಶಾರ್ಟ್‌ಕಟ್ ತರ್ಕ ಎಣಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Self-Taught Reasoning: STaR, V-STaR, Quiet-STaR (Part 1 of 3)",
    "textKn": "ಸ್ವಯಂ-ಕಲಿತ ತರ್ಕ: STaR, V-STaR, Quiet-STaR (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a generate-filter-train loop on addition problems, what the answer-only filter keeps, five rounds with and without rationalization, ten-seed hard-tier results and the share of shortcut rationales by difficulty. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind self-taught reasoning (STaR rationale filtering and rationalization, V-STaR verifiers and best-of-N, process versus outcome supervision, out-of-distribution testing and Quiet-STaR style thinking gates), not the real software, and the model is a table of invented competence values or a threshold on invented scores, and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. Any results quoted in the source lesson about published STaR, V-STaR or Quiet-STaR work are cited from the lesson and were not reproduced here; every competence, probability and rate in the labs is invented to show the mechanics of the method. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಕೂಡುವ ಸಮಸ್ಯೆಗಳ ಮೇಲೆ generate-filter-train ಲೂಪ್, ಉತ್ತರ-ಮಾತ್ರ ಶೋಧಕ ಏನು ಇಡುತ್ತದೆ, rationalization ಇಲ್ಲದೆ ಮತ್ತು ಇರುವಂತೆ ಐದು ಸುತ್ತುಗಳು, ಹತ್ತು-seed ಕಠಿಣ-ಹಂತ ಫಲಿತಾಂಶಗಳು ಮತ್ತು ಕಷ್ಟದ ಪ್ರಕಾರ ಶಾರ್ಟ್‌ಕಟ್ ತರ್ಕಗಳ ಪಾಲು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಸ್ವಯಂ-ಕಲಿತ ತರ್ಕ (STaR ತರ್ಕ ಶೋಧನೆ ಮತ್ತು rationalization, V-STaR ಪರಿಶೀಲಕಗಳು ಮತ್ತು best-of-N, process ಹಾಗೂ outcome supervision, ವಿತರಣೆ-ಹೊರಗಿನ ಪರೀಕ್ಷೆ ಮತ್ತು Quiet-STaR ಶೈಲಿಯ ಯೋಚನೆ ಗೇಟ್‌ಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಮಾದರಿ ಕಲ್ಪಿತ ಸಾಮರ್ಥ್ಯ ಮೌಲ್ಯಗಳ ಕೋಷ್ಟಕ ಅಥವಾ ಕಲ್ಪಿತ ಅಂಕಗಳ ಮೇಲಿನ ಮಿತಿ, ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಪ್ರಕಟಿತ STaR, V-STaR ಅಥವಾ Quiet-STaR ಕೆಲಸದ ಬಗ್ಗೆ ಮೂಲ lesson ನಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿದ ಫಲಿತಾಂಶಗಳು lesson ನಿಂದ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಪುನರುತ್ಪಾದಿಸಲಾಗಿಲ್ಲ; ಲ್ಯಾಬ್‌ಗಳ ಪ್ರತಿ ಸಾಮರ್ಥ್ಯ, ಸಂಭವನೀಯತೆ ಮತ್ತು ದರ ವಿಧಾನದ ಯಂತ್ರಶಾಸ್ತ್ರ ತೋರಿಸಲು ಕಲ್ಪಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Model That Learns From Its Own Reasoning",
    "textKn": "ತನ್ನದೇ ತರ್ಕದಿಂದ ಕಲಿಯುವ ಮಾದರಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Loop on a Toy Problem",
    "headingKn": "ಆಟಿಕೆ ಸಮಸ್ಯೆಯ ಮೇಲೆ ಲೂಪ್",
    "bodyEn": "STaR lets a model write step-by-step reasoning, keeps only the attempts whose final answer is correct and trains on them, then repeats. This part runs that loop on addition problems with three difficulty tiers. The model is a scripted table of invented competence values that rises when it trains on kept examples, so the numbers show how the loop behaves and say nothing about a real model. The lab also tries rationalization, where a failed problem is retried with the answer as a hint, and counts how many kept rationales reached the right answer by a wrong path.",
    "bodyKn": "STaR ಮಾದರಿಗೆ ಹಂತ-ಹಂತದ ತರ್ಕ ಬರೆಯಲು ಬಿಡುತ್ತದೆ, ಅಂತಿಮ ಉತ್ತರ ಸರಿಯಾದ ಪ್ರಯತ್ನಗಳನ್ನು ಮಾತ್ರ ಇಟ್ಟು ಅವುಗಳ ಮೇಲೆ ತರಬೇತಿ ನೀಡಿ ಮತ್ತೆ ಪುನರಾವರ್ತಿಸುತ್ತದೆ. ಈ ಭಾಗ ಆ ಲೂಪ್ ಅನ್ನು ಮೂರು ಕಷ್ಟ ಹಂತಗಳ ಕೂಡುವ ಸಮಸ್ಯೆಗಳ ಮೇಲೆ ಓಡಿಸುತ್ತದೆ. ಮಾದರಿ ಇಟ್ಟ ಉದಾಹರಣೆಗಳ ಮೇಲೆ ತರಬೇತಿ ಪಡೆದಾಗ ಏರುವ ಕಲ್ಪಿತ ಸಾಮರ್ಥ್ಯ ಮೌಲ್ಯಗಳ scripted ಕೋಷ್ಟಕ, ಆದ್ದರಿಂದ ಸಂಖ್ಯೆಗಳು ಲೂಪ್ ಹೇಗೆ ವರ್ತಿಸುತ್ತದೆ ತೋರಿಸುತ್ತವೆ ಮತ್ತು ನಿಜ ಮಾದರಿಯ ಬಗ್ಗೆ ಏನೂ ಹೇಳುವುದಿಲ್ಲ. ವಿಫಲ ಸಮಸ್ಯೆಯನ್ನು ಉತ್ತರದ ಸುಳಿವಿನೊಂದಿಗೆ ಮರುಪ್ರಯತ್ನಿಸುವ rationalization ಅನ್ನೂ ಲ್ಯಾಬ್ ಪ್ರಯತ್ನಿಸುತ್ತದೆ ಮತ್ತು ಎಷ್ಟು ಇಟ್ಟ ತರ್ಕಗಳು ತಪ್ಪು ಮಾರ್ಗದಿಂದ ಸರಿಯಾದ ಉತ್ತರ ತಲುಪಿದವು ಎಣಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The STaR Loop",
    "headingKn": "STaR ಲೂಪ್",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">the model trains on its own filtered reasoning</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">generate</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">rationale + answer</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">filter</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">keep right answers</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">train</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">on kept ones</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">repeat</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">next round</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the model trains on its own filtered reasoning</text></svg>",
    "captionEn": "Generate reasoning, keep what reaches the right answer, train on it and repeat.",
    "captionKn": "ತರ್ಕ ರಚಿಸಿ, ಸರಿಯಾದ ಉತ್ತರ ತಲುಪಿದ್ದನ್ನು ಇಡಿ, ಅದರ ಮೇಲೆ ತರಬೇತಿ ನೀಡಿ ಮತ್ತು ಪುನರಾವರ್ತಿಸಿ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Setup of the toy loop",
    "headingKn": "ಆಟಿಕೆ ಲೂಪ್‌ನ ಸೆಟಪ್",
    "headers": [
     "Item",
     "Lab setting"
    ],
    "rows": [
     [
      "tiers",
      "easy 1-9, medium 10-99, hard 100-999"
     ],
     [
      "starting competence",
      "0.90, 0.50, 0.15 (invented)"
     ],
     [
      "wrong path",
      "lands on the right answer about 1 time in 3 offsets"
     ],
     [
      "rationalization hint success",
      "0.6 (assumed)"
     ],
     [
      "rounds",
      "5 rounds of 200 problems per tier"
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
    "filename": "st_1.py",
    "headingEn": "Generate, rationalize and train",
    "headingKn": "Generate, rationalize ಮತ್ತು train",
    "descEn": "generate returns an answer and whether the reasoning was good, rationalize retries with a hint, and star_round keeps right-answer samples and raises each tier competence from them.",
    "descKn": "generate ಉತ್ತರ ಮತ್ತು ತರ್ಕ ಒಳ್ಳೆಯದಿತ್ತೇ ಎಂದು ಹಿಂತಿರುಗಿಸುತ್ತದೆ, rationalize ಸುಳಿವಿನೊಂದಿಗೆ ಮರುಪ್ರಯತ್ನಿಸುತ್ತದೆ, ಮತ್ತು star_round ಸರಿ-ಉತ್ತರ ಮಾದರಿಗಳನ್ನು ಇಟ್ಟು ಅವುಗಳಿಂದ ಪ್ರತಿ ಹಂತದ ಸಾಮರ್ಥ್ಯ ಏರಿಸುತ್ತದೆ.",
    "code": "def make_problems(r, tier, n):\n    lo, hi = TIERS[tier]\n    return [(r.randint(lo, hi), r.randint(lo, hi)) for _ in range(n)]\n\n\ndef generate(r, comp, tier, a, b):\n    \"\"\"Returns (answer, good_reasoning). A wrong path still lands on the right answer one time in three (offset 0 is 2 of the 6 choices), which is the shortcut.\"\"\"\n    if r.random() < comp[tier]:\n        return a + b, True\n    off = r.choice([-2, -1, 0, 0, 1, 2])\n    return a + b + off, False\n\n\ndef rationalize(r, tier, a, b, hint_success=0.6):\n    \"\"\"Given the correct answer as a hint, the model writes a rationale that reaches it; assumed to be good reasoning only some of the time.\"\"\"\n    return (r.random() < hint_success)\n\n\ndef star_round(r, comp, n, use_rationalization, lr=0.6):\n    stats = {}\n    for tier in TIERS:\n        probs = make_problems(r, tier, n)\n        kept_good = kept_short = rat_good = 0\n        for a, b in probs:\n            ans, good = generate(r, comp, tier, a, b)\n            if ans == a + b:\n                if good:\n                    kept_good += 1\n                else:\n                    kept_short += 1\n            elif use_rationalization and rationalize(r, tier, a, b):\n                rat_good += 1\n        stats[tier] = (kept_good, kept_short, rat_good)\n    for tier, (g, s, rg) in stats.items():\n        rate = (g + rg) / n\n        comp[tier] = min(0.99, comp[tier] + lr * rate * (1 - comp[tier]))\n    return stats\n\n\ndef accuracy(r, comp, tier, n=400):\n    probs = make_problems(r, tier, n)\n    return mean(generate(r, comp, tier, a, b)[0] == a + b for a, b in probs)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "st_1.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() shows what the filter keeps, runs five rounds with and without rationalization, repeats over ten seeds and reports the shortcut share of the kept data.",
    "descKn": "main() ಶೋಧಕ ಏನು ಇಡುತ್ತದೆ ತೋರಿಸಿ, rationalization ಇಲ್ಲದೆ ಮತ್ತು ಇರುವಂತೆ ಐದು ಸುತ್ತು ಓಡಿಸಿ, ಹತ್ತು seeds ಮೇಲೆ ಪುನರಾವರ್ತಿಸಿ ಮತ್ತು ಇಟ್ಟ ದತ್ತಾಂಶದ ಶಾರ್ಟ್‌ಕಟ್ ಪಾಲು ವರದಿ ಮಾಡುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: what the answer filter keeps in round 0 (200 problems per tier)\")\n    r = random.Random(1)\n    comp = dict(START)\n    st = {}\n    for tier in TIERS:\n        probs = make_problems(r, tier, 200)\n        g = s = 0\n        for a, b in probs:\n            ans, good = generate(r, comp, tier, a, b)\n            if ans == a + b:\n                g, s = (g + 1, s) if good else (g, s + 1)\n        st[tier] = (g, s)\n        print(f\"{tier:6} competence {comp[tier]:.2f}: kept {g + s:3d} of 200 | genuine {g:3d} | shortcut {s:3d}\")\n    print(\"the filter keeps every rationale whose final answer is right, including wrong-path rationales that landed on the right answer by luck, so the kept set is a little contaminated and the hard tier gives the least training data; competence values are invented starting points\")\n\n    section(\"2. Genuinely running: five STaR rounds without and with rationalization (seed 3)\")\n    for flag in (False, True):\n        r = random.Random(3)\n        comp = dict(START)\n        print(f\"rationalization = {flag}\")\n        for rnd in range(1, 6):\n            star_round(r, comp, 200, flag)\n            acc = {t: accuracy(r, comp, t) for t in TIERS}\n            print(f\"  round {rnd}: accuracy easy {acc['easy']:.2f} medium {acc['medium']:.2f} hard {acc['hard']:.2f}\")\n    print(\"each round trains only on kept rationales, so the easy tier saturates first and the hard tier moves slowly; adding hint-based rationalization gives the hard tier extra training examples from problems the model got wrong, and the numbers come from invented update rules\")\n\n    section(\"3. Genuinely measuring: ten seeds, hard-tier accuracy after five rounds\")\n    res = {False: [], True: []}\n    for flag in (False, True):\n        for seed in range(1, 11):\n            r = random.Random(seed)\n            comp = dict(START)\n            for _ in range(5):\n                star_round(r, comp, 200, flag)\n            res[flag].append(comp[\"hard\"])\n    for flag in (False, True):\n        print(f\"rationalization = {flag}: mean hard competence {mean(res[flag]):.3f} | min {min(res[flag]):.3f} | max {max(res[flag]):.3f}\")\n    print(\"both settings were run on the same ten seeds; the difference comes straight from the update rule and the assumed 60 percent hint success, so it shows how rationalization could help and is not evidence about any real STaR run\")\n\n    section(\"4. Genuinely running: the shortcut fraction of the kept data by tier\")\n    r = random.Random(5)\n    comp = dict(START)\n    for tier in TIERS:\n        g = s = 0\n        for a, b in make_problems(r, tier, 5000):\n            ans, good = generate(r, comp, tier, a, b)\n            if ans == a + b:\n                g, s = (g + 1, s) if good else (g, s + 1)\n        print(f\"{tier:6} kept {g + s:4d} of 5000 | shortcut share of kept: {s / (g + s):.3f}\")\n    print(\"the weaker the model is on a tier, the larger the share of its kept rationales that reached the right answer by a wrong path, because those are the only kept examples; an answer-only filter therefore gets less trustworthy exactly where the model is weakest\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: what the answer filter keeps in round 0 (200 problems per tier) ---\neasy   competence 0.90: kept 188 of 200 | genuine 178 | shortcut  10\nmedium competence 0.50: kept 135 of 200 | genuine 110 | shortcut  25\nhard   competence 0.15: kept  83 of 200 | genuine  25 | shortcut  58\nthe filter keeps every rationale whose final answer is right, including wrong-path rationales that landed on the right answer by luck, so the kept set is a little contaminated and the hard tier gives the least training data; competence values are invented starting points\n\n--- 2. Genuinely running: five STaR rounds without and with rationalization (seed 3) ---\nrationalization = False\n  round 1: accuracy easy 0.96 medium 0.79 hard 0.50\n  round 2: accuracy easy 0.99 medium 0.87 hard 0.58\n  round 3: accuracy easy 0.99 medium 0.93 hard 0.61\n  round 4: accuracy easy 1.00 medium 0.96 hard 0.72\n  round 5: accuracy easy 0.99 medium 0.99 hard 0.82\nrationalization = True\n  round 1: accuracy easy 0.96 medium 0.80 hard 0.61\n  round 2: accuracy easy 0.99 medium 0.89 hard 0.77\n  round 3: accuracy easy 1.00 medium 0.96 hard 0.90\n  round 4: accuracy easy 1.00 medium 0.98 hard 0.96\n  round 5: accuracy easy 0.99 medium 0.99 hard 0.97\neach round trains only on kept rationales, so the easy tier saturates first and the hard tier moves slowly; adding hint-based rationalization gives the hard tier extra training examples from problems the model got wrong, and the numbers come from invented update rules\n\n--- 3. Genuinely measuring: ten seeds, hard-tier accuracy after five rounds ---\nrationalization = False: mean hard competence 0.749 | min 0.712 | max 0.781\nrationalization = True: mean hard competence 0.960 | min 0.952 | max 0.968\nboth settings were run on the same ten seeds; the difference comes straight from the update rule and the assumed 60 percent hint success, so it shows how rationalization could help and is not evidence about any real STaR run\n\n--- 4. Genuinely running: the shortcut fraction of the kept data by tier ---\neasy   kept 4689 of 5000 | shortcut share of kept: 0.036\nmedium kept 3338 of 5000 | shortcut share of kept: 0.250\nhard   kept 2221 of 5000 | shortcut share of kept: 0.656\nthe weaker the model is on a tier, the larger the share of its kept rationales that reached the right answer by a wrong path, because those are the only kept examples; an answer-only filter therefore gets less trustworthy exactly where the model is weakest"
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
    "headingEn": "Experiment 1: What the answer filter keeps in round 0 (200 problems per tier)",
    "headingKn": "ಪ್ರಯೋಗ 1: What the answer filter keeps in round 0 (200 problems per tier)",
    "bodyEn": "What it ran: What the answer filter keeps in round 0 (200 problems per tier). What the lab concluded: the filter keeps every rationale whose final answer is right, including wrong-path rationales that landed on the right answer by luck, so the kept set is a little contaminated and the hard tier gives the least training data; competence values are invented starting points",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: What the answer filter keeps in round 0 (200 problems per tier). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the filter keeps every rationale whose final answer is right, including wrong-path rationales that landed on the right answer by luck, so the kept set is a little contaminated and the hard tier gives the least training data; competence values are invented starting points"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: what the answer filter keeps in round 0 (200 problems per tier) ---\neasy   competence 0.90: kept 188 of 200 | genuine 178 | shortcut  10\nmedium competence 0.50: kept 135 of 200 | genuine 110 | shortcut  25\nhard   competence 0.15: kept  83 of 200 | genuine  25 | shortcut  58"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Five STaR rounds without and with rationalization (seed 3)",
    "headingKn": "ಪ್ರಯೋಗ 2: Five STaR rounds without and with rationalization (seed 3)",
    "bodyEn": "What it ran: Five STaR rounds without and with rationalization (seed 3). What the lab concluded: each round trains only on kept rationales, so the easy tier saturates first and the hard tier moves slowly; adding hint-based rationalization gives the hard tier extra training examples from problems the model got wrong, and the numbers come from invented update rules",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Five STaR rounds without and with rationalization (seed 3). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each round trains only on kept rationales, so the easy tier saturates first and the hard tier moves slowly; adding hint-based rationalization gives the hard tier extra training examples from problems the model got wrong, and the numbers come from invented update rules"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: five STaR rounds without and with rationalization (seed 3) ---\nrationalization = False\n  round 1: accuracy easy 0.96 medium 0.79 hard 0.50\n  round 2: accuracy easy 0.99 medium 0.87 hard 0.58\n  round 3: accuracy easy 0.99 medium 0.93 hard 0.61\n  round 4: accuracy easy 1.00 medium 0.96 hard 0.72\n  round 5: accuracy easy 0.99 medium 0.99 hard 0.82\nrationalization = True\n  round 1: accuracy easy 0.96 medium 0.80 hard 0.61\n  round 2: accuracy easy 0.99 medium 0.89 hard 0.77\n  round 3: accuracy easy 1.00 medium 0.96 hard 0.90\n  round 4: accuracy easy 1.00 medium 0.98 hard 0.96\n  round 5: accuracy easy 0.99 medium 0.99 hard 0.97"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Ten seeds, hard-tier accuracy after five rounds",
    "headingKn": "ಪ್ರಯೋಗ 3: Ten seeds, hard-tier accuracy after five rounds",
    "bodyEn": "What it ran: Ten seeds, hard-tier accuracy after five rounds. What the lab concluded: both settings were run on the same ten seeds; the difference comes straight from the update rule and the assumed 60 percent hint success, so it shows how rationalization could help and is not evidence about any real STaR run",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Ten seeds, hard-tier accuracy after five rounds. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): both settings were run on the same ten seeds; the difference comes straight from the update rule and the assumed 60 percent hint success, so it shows how rationalization could help and is not evidence about any real STaR run"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: ten seeds, hard-tier accuracy after five rounds ---\nrationalization = False: mean hard competence 0.749 | min 0.712 | max 0.781\nrationalization = True: mean hard competence 0.960 | min 0.952 | max 0.968"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: The shortcut fraction of the kept data by tier",
    "headingKn": "ಪ್ರಯೋಗ 4: The shortcut fraction of the kept data by tier",
    "bodyEn": "What it ran: The shortcut fraction of the kept data by tier. What the lab concluded: the weaker the model is on a tier, the larger the share of its kept rationales that reached the right answer by a wrong path, because those are the only kept examples; an answer-only filter therefore gets less trustworthy exactly where the model is weakest",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The shortcut fraction of the kept data by tier. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the weaker the model is on a tier, the larger the share of its kept rationales that reached the right answer by a wrong path, because those are the only kept examples; an answer-only filter therefore gets less trustworthy exactly where the model is weakest"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: the shortcut fraction of the kept data by tier ---\neasy   kept 4689 of 5000 | shortcut share of kept: 0.036\nmedium kept 3338 of 5000 | shortcut share of kept: 0.250\nhard   kept 2221 of 5000 | shortcut share of kept: 0.656"
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
    "headingEn": "Genuinely Found: What the Filter Keeps and How Rounds Go",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಶೋಧಕ ಏನು ಇಡುತ್ತದೆ ಮತ್ತು ಸುತ್ತುಗಳು ಹೇಗೆ ಹೋಗುತ್ತವೆ",
    "bodyEn": "Section 1: in round 0 the filter kept 188 of 200 easy problems (178 genuine, 10 shortcut), 135 medium (110 genuine, 25 shortcut) and 83 hard (25 genuine, 58 shortcut). Section 2, without rationalization, accuracy went from easy 0.96, medium 0.79, hard 0.50 after round 1 to 0.99, 0.99, 0.82 after round 5; with rationalization the hard tier reached 0.61, 0.77, 0.90, 0.96 and 0.97 over the five rounds.",
    "bodyKn": "ವಿಭಾಗ 1: ಸುತ್ತು 0 ರಲ್ಲಿ ಶೋಧಕ 200 ಸುಲಭ ಸಮಸ್ಯೆಗಳಲ್ಲಿ 188 (178 ನಿಜ, 10 ಶಾರ್ಟ್‌ಕಟ್), 135 ಮಧ್ಯಮ (110 ನಿಜ, 25 ಶಾರ್ಟ್‌ಕಟ್) ಮತ್ತು 83 ಕಠಿಣ (25 ನಿಜ, 58 ಶಾರ್ಟ್‌ಕಟ್) ಇಟ್ಟಿತು. ವಿಭಾಗ 2, rationalization ಇಲ್ಲದೆ, ನಿಖರತೆ ಸುತ್ತು 1 ರ ನಂತರ ಸುಲಭ 0.96, ಮಧ್ಯಮ 0.79, ಕಠಿಣ 0.50 ರಿಂದ ಸುತ್ತು 5 ರ ನಂತರ 0.99, 0.99, 0.82 ಆಯಿತು; rationalization ಇದ್ದಾಗ ಕಠಿಣ ಹಂತ ಐದು ಸುತ್ತುಗಳಲ್ಲಿ 0.61, 0.77, 0.90, 0.96 ಮತ್ತು 0.97 ತಲುಪಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Ten Seeds and the Shortcut Share",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಹತ್ತು Seeds ಮತ್ತು ಶಾರ್ಟ್‌ಕಟ್ ಪಾಲು",
    "bodyEn": "Section 3: after five rounds over seeds 1 to 10 the mean hard competence was 0.749 (range 0.712 to 0.781) without rationalization and 0.960 (0.952 to 0.968) with it. Section 4: over 5000 problems per tier the filter kept 4689 easy with a shortcut share of 0.036, 3338 medium with 0.250 and 2221 hard with 0.656.",
    "bodyKn": "ವಿಭಾಗ 3: seeds 1 ರಿಂದ 10 ರಲ್ಲಿ ಐದು ಸುತ್ತುಗಳ ನಂತರ ಸರಾಸರಿ ಕಠಿಣ ಸಾಮರ್ಥ್ಯ rationalization ಇಲ್ಲದೆ 0.749 (ವ್ಯಾಪ್ತಿ 0.712 ರಿಂದ 0.781) ಮತ್ತು ಇದ್ದಾಗ 0.960 (0.952 ರಿಂದ 0.968). ವಿಭಾಗ 4: ಪ್ರತಿ ಹಂತಕ್ಕೆ 5000 ಸಮಸ್ಯೆಗಳಲ್ಲಿ ಶೋಧಕ 4689 ಸುಲಭ (ಶಾರ್ಟ್‌ಕಟ್ ಪಾಲು 0.036), 3338 ಮಧ್ಯಮ (0.250) ಮತ್ತು 2221 ಕಠಿಣ (0.656) ಇಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Training on a model own filtered output can improve it without new human labels, but the filter only checks the final answer, so its quality drops exactly where the model is weakest.",
    "bodyKn": "ಮಾದರಿಯ ಸ್ವಂತ ಶೋಧಿತ ಔಟ್‌ಪುಟ್ ಮೇಲೆ ತರಬೇತಿ ಹೊಸ ಮಾನವ ಲೇಬಲ್ ಇಲ್ಲದೆ ಅದನ್ನು ಸುಧಾರಿಸಬಹುದು, ಆದರೆ ಶೋಧಕ ಅಂತಿಮ ಉತ್ತರ ಮಾತ್ರ ಪರೀಕ್ಷಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಮಾದರಿ ದುರ್ಬಲವಾಗಿರುವಲ್ಲೇ ಅದರ ಗುಣಮಟ್ಟ ಇಳಿಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a right final answer means the reasoning was right.\" On the hard tier 65.6 percent of kept rationales reached the right answer by a wrong path.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಸರಿಯಾದ ಅಂತಿಮ ಉತ್ತರ ಎಂದರೆ ತರ್ಕ ಸರಿ.\" ಕಠಿಣ ಹಂತದಲ್ಲಿ ಇಟ್ಟ ತರ್ಕಗಳಲ್ಲಿ 65.6 ಶೇಕಡಾ ತಪ್ಪು ಮಾರ್ಗದಿಂದ ಸರಿಯಾದ ಉತ್ತರ ತಲುಪಿದ್ದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Rationale: written step-by-step reasoning. Filter: keep only samples with a correct final answer. Rationalization: retry a failure with the answer as a hint. Shortcut: right answer by a wrong path.",
    "bodyKn": "Rationale: ಬರೆದ ಹಂತ-ಹಂತದ ತರ್ಕ. Filter: ಸರಿಯಾದ ಅಂತಿಮ ಉತ್ತರವಿರುವ ಮಾದರಿಗಳನ್ನು ಮಾತ್ರ ಇಡುವುದು. Rationalization: ವೈಫಲ್ಯವನ್ನು ಉತ್ತರದ ಸುಳಿವಿನೊಂದಿಗೆ ಮರುಪ್ರಯತ್ನಿಸುವುದು. Shortcut: ತಪ್ಪು ಮಾರ್ಗದಿಂದ ಸರಿಯಾದ ಉತ್ತರ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The filter kept 83 of 200 hard problems in round 0. 2) Easy saturated first. 3) Rationalization lifted hard accuracy to 0.97. 4) Over ten seeds the means were 0.749 and 0.960. 5) 65.6 percent of kept hard rationales were shortcuts.",
    "bodyKn": "1) ಶೋಧಕ ಸುತ್ತು 0 ರಲ್ಲಿ 200 ಕಠಿಣ ಸಮಸ್ಯೆಗಳಲ್ಲಿ 83 ಇಟ್ಟಿತು. 2) ಸುಲಭ ಮೊದಲು ಸ್ಯಾಚುರೇಟ್ ಆಯಿತು. 3) Rationalization ಕಠಿಣ ನಿಖರತೆಯನ್ನು 0.97 ಕ್ಕೆ ಏರಿಸಿತು. 4) ಹತ್ತು seeds ಮೇಲೆ ಸರಾಸರಿ 0.749 ಮತ್ತು 0.960. 5) ಇಟ್ಟ ಕಠಿಣ ತರ್ಕಗಳಲ್ಲಿ 65.6 ಶೇಕಡಾ ಶಾರ್ಟ್‌ಕಟ್."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B st_1.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B st_1.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B st_1.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B st_1.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Predict before you run",
    "headingKn": "ಓಡಿಸುವ ಮುನ್ನ ಊಹಿಸಿ",
    "bodyEn": "Before rerunning, write down what you expect each experiment to print, then compare:\n1. What the answer filter keeps in round 0 (200 problems per tier)\n2. Five STaR rounds without and with rationalization (seed 3)\n3. Ten seeds, hard-tier accuracy after five rounds\n4. The shortcut fraction of the kept data by tier",
    "bodyKn": "ಮರುಓಡಿಸುವ ಮುನ್ನ ಪ್ರತಿ ಪ್ರಯೋಗ ಏನು ಮುದ್ರಿಸುತ್ತದೆ ಎಂದು ನಿರೀಕ್ಷಿಸುವುದನ್ನು ಬರೆಯಿರಿ, ನಂತರ ಹೋಲಿಸಿ:\n1. What the answer filter keeps in round 0 (200 problems per tier)\n2. Five STaR rounds without and with rationalization (seed 3)\n3. Ten seeds, hard-tier accuracy after five rounds\n4. The shortcut fraction of the kept data by tier"
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many of 200 hard problems did the round-0 filter keep?",
      "qKn": "ಸುತ್ತು-0 ಶೋಧಕ 200 ಕಠಿಣ ಸಮಸ್ಯೆಗಳಲ್ಲಿ ಎಷ್ಟು ಇಟ್ಟಿತು?",
      "opts": [
       "83",
       "188",
       "135",
       "200"
      ],
      "optsKn": [
       "83",
       "188",
       "135",
       "200"
      ],
      "correct": 0
     },
     {
      "q": "What was the mean hard competence after five rounds without rationalization?",
      "qKn": "rationalization ಇಲ್ಲದೆ ಐದು ಸುತ್ತುಗಳ ನಂತರ ಸರಾಸರಿ ಕಠಿಣ ಸಾಮರ್ಥ್ಯ ಎಷ್ಟು?",
      "opts": [
       "0.749",
       "0.960",
       "0.50",
       "0.15"
      ],
      "optsKn": [
       "0.749",
       "0.960",
       "0.50",
       "0.15"
      ],
      "correct": 0
     },
     {
      "q": "What share of kept hard rationales were shortcuts?",
      "qKn": "ಇಟ್ಟ ಕಠಿಣ ತರ್ಕಗಳಲ್ಲಿ ಎಷ್ಟು ಪಾಲು ಶಾರ್ಟ್‌ಕಟ್?",
      "opts": [
       "0.656",
       "0.036",
       "0.250",
       "0.0"
      ],
      "optsKn": [
       "0.656",
       "0.036",
       "0.250",
       "0.0"
      ],
      "correct": 0
     },
     {
      "q": "Why does the answer-only filter get worse on hard problems?",
      "qKn": "ಉತ್ತರ-ಮಾತ್ರ ಶೋಧಕ ಕಠಿಣ ಸಮಸ್ಯೆಗಳಲ್ಲಿ ಏಕೆ ಕೆಟ್ಟದಾಗುತ್ತದೆ?",
      "opts": [
       "Fewer genuine successes, so lucky wrong-path answers dominate what is kept",
       "Hard problems have no answers",
       "The model stops generating",
       "Rationalization is disabled"
      ],
      "optsKn": [
       "ಕಡಿಮೆ ನಿಜ ಯಶಸ್ಸು, ಆದ್ದರಿಂದ ಅದೃಷ್ಟದ ತಪ್ಪು-ಮಾರ್ಗ ಉತ್ತರಗಳು ಇಟ್ಟದ್ದರಲ್ಲಿ ಪ್ರಾಬಲ್ಯ",
       "ಕಠಿಣ ಸಮಸ್ಯೆಗಳಿಗೆ ಉತ್ತರಗಳಿಲ್ಲ",
       "ಮಾದರಿ ರಚಿಸುವುದನ್ನು ನಿಲ್ಲಿಸುತ್ತದೆ",
       "Rationalization ನಿಷ್ಕ್ರಿಯ"
      ],
      "correct": 0
     },
     {
      "q": "Is the 0.960 versus 0.749 gap evidence about real STaR runs?",
      "qKn": "0.960 ಮತ್ತು 0.749 ಅಂತರ ನಿಜ STaR ಓಟಗಳ ಬಗ್ಗೆ ಸಾಕ್ಷ್ಯವೇ?",
      "opts": [
       "No, it follows from invented update rules",
       "Yes, it is a measured benchmark",
       "Yes, from a real model",
       "Only on hard tiers"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಅದು ಕಲ್ಪಿತ ನವೀಕರಣ ನಿಯಮಗಳಿಂದ ಬರುತ್ತದೆ",
       "ಹೌದು, ಅದು ಅಳೆದ ಮಾನದಂಡ",
       "ಹೌದು, ನಿಜ ಮಾದರಿಯಿಂದ",
       "ಕಠಿಣ ಹಂತಗಳಲ್ಲಿ ಮಾತ್ರ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
