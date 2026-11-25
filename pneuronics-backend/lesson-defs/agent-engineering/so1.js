module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215e9",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Society of Mind and Multi-Agent Debate (Part 1 of 3) — A Confidence-Weighted Debate",
 "titleKn": "ಸೊಸೈಟಿ ಆಫ್ ಮೈಂಡ್ ಮತ್ತು ಬಹು-ಏಜೆಂಟ್ ಚರ್ಚೆ (ಭಾಗ 1 / 3) — ವಿಶ್ವಾಸ-ತೂಕದ ಚರ್ಚೆ",
 "desc": "Run a numerical debate and compare spread, error, learning rate and update order.",
 "descKn": "ಸಂಖ್ಯಾತ್ಮಕ ಚರ್ಚೆ ಓಡಿಸಿ ಮತ್ತು spread, ದೋಷ, ಕಲಿಕೆ ದರ ಹಾಗೂ ನವೀಕರಣ ಕ್ರಮ ಹೋಲಿಸಿ.",
 "objectives": [
  "Run a debate.",
  "Separate spread from error.",
  "Spot a confident wrong agent.",
  "Snapshot updates.",
  "Cost a society."
 ],
 "objectivesKn": [
  "ಚರ್ಚೆ ಓಡಿಸಿ.",
  "spread ಮತ್ತು ದೋಷ ಬೇರೆ ಮಾಡಿ.",
  "ವಿಶ್ವಾಸದ ತಪ್ಪು ಏಜೆಂಟ್ ಗುರುತಿಸಿ.",
  "ನವೀಕರಣಗಳಿಗೆ snapshot ಇಡಿ.",
  "ಸಮಾಜದ ವೆಚ್ಚ ಎಣಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Society of Mind and Multi-Agent Debate (Part 1 of 3)",
    "textKn": "ಸೊಸೈಟಿ ಆಫ್ ಮೈಂಡ್ ಮತ್ತು ಬಹು-ಏಜೆಂಟ್ ಚರ್ಚೆ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a three-agent numerical debate with confidence weights, spread against error, a confidently wrong agent, learning rates, synchronous against sequential updates and the cost of a bigger society. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind a numerical multi-agent debate, a structured scripted debate engine and a production-shaped engine with budgets, retries, round isolation, an injection check, an approval gate and a generated configuration document, not the real software, and agents are scripted or a numerical update rule, the provider is a script with no network and no model, the injection demo uses a toy reviser that obeys a marker, and nothing here measures whether real LLM debate improves accuracy, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The Du et al. paper and the 129-agent society are described in the lesson and were not reproduced, and no real model was called. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ವಿಶ್ವಾಸ ತೂಕಗಳೊಂದಿಗೆ ಮೂರು-ಏಜೆಂಟ್ ಸಂಖ್ಯಾತ್ಮಕ ಚರ್ಚೆ, spread ಮತ್ತು ದೋಷ, ವಿಶ್ವಾಸದಿಂದ ತಪ್ಪಾದ ಏಜೆಂಟ್, ಕಲಿಕೆ ದರಗಳು, synchronous ಮತ್ತು sequential ನವೀಕರಣಗಳು ಹಾಗೂ ದೊಡ್ಡ ಸಮಾಜದ ವೆಚ್ಚ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಸಂಖ್ಯಾತ್ಮಕ ಬಹು-ಏಜೆಂಟ್ ಚರ್ಚೆ, ರಚನಾತ್ಮಕ ಸ್ಕ್ರಿಪ್ಟ್ ಚರ್ಚಾ ಎಂಜಿನ್ ಮತ್ತು ಬಜೆಟ್‌ಗಳು, ಮರುಪ್ರಯತ್ನಗಳು, ಸುತ್ತು ಪ್ರತ್ಯೇಕತೆ, injection ಪರಿಶೀಲನೆ, ಅನುಮೋದನೆ ದ್ವಾರ ಮತ್ತು ರಚಿತ ಸಂರಚನಾ ದಾಖಲೆಯಿರುವ ಉತ್ಪಾದನಾ-ಆಕಾರದ ಎಂಜಿನ್ ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಏಜೆಂಟ್‌ಗಳು ಸ್ಕ್ರಿಪ್ಟ್ ಅಥವಾ ಸಂಖ್ಯಾತ್ಮಕ ನವೀಕರಣ ನಿಯಮ, provider ನೆಟ್‌ವರ್ಕ್ ಮತ್ತು ಮಾದರಿ ಇಲ್ಲದ ಸ್ಕ್ರಿಪ್ಟ್, injection ಡೆಮೊ ಗುರುತು ಪಾಲಿಸುವ ಆಟಿಕೆ reviser ಬಳಸುತ್ತದೆ, ಮತ್ತು ನಿಜವಾದ LLM ಚರ್ಚೆ ನಿಖರತೆ ಸುಧಾರಿಸುತ್ತದೆಯೇ ಎಂದು ಇಲ್ಲಿ ಯಾವುದೂ ಅಳೆಯುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ನೀಡಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. Du et al. ಪ್ರಬಂಧ ಮತ್ತು 129-ಏಜೆಂಟ್ ಸಮಾಜ lesson ನಲ್ಲಿ ವಿವರಿಸಲ್ಪಟ್ಟಿವೆ ಮತ್ತು ಪುನರುತ್ಪಾದಿಸಲಾಗಿಲ್ಲ, ಮತ್ತು ಯಾವುದೇ ನಿಜ ಮಾದರಿ ಕರೆಯಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Agreement Is Not Truth",
    "textKn": "ಒಪ್ಪಿಗೆ ಸತ್ಯವಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Confidence-Weighted Numerical Debate",
    "headingKn": "ವಿಶ್ವಾಸ-ತೂಕದ ಸಂಖ್ಯಾತ್ಮಕ ಚರ್ಚೆ",
    "bodyEn": "The lesson reconstructs a scripted debate in which three agents hold a number and a confidence, and each round every agent moves part of the way towards the confidence-weighted average of the others. This part runs it and measures two different things: the spread between the answers, which says how much the agents agree, and the mean absolute error against the known answer, which says how right they are. It then tries a confidently wrong agent, three learning rates, a synchronous against a sequential update, and the cost of a larger society.",
    "bodyKn": "lesson ಮೂರು ಏಜೆಂಟ್‌ಗಳು ಒಂದು ಸಂಖ್ಯೆ ಮತ್ತು ವಿಶ್ವಾಸ ಹೊಂದಿರುವ ಸ್ಕ್ರಿಪ್ಟ್ ಚರ್ಚೆಯನ್ನು ಪುನರ್ನಿರ್ಮಿಸುತ್ತದೆ, ಮತ್ತು ಪ್ರತಿ ಸುತ್ತಿನಲ್ಲಿ ಪ್ರತಿ ಏಜೆಂಟ್ ಇತರರ ವಿಶ್ವಾಸ-ತೂಕದ ಸರಾಸರಿಯ ಕಡೆಗೆ ಭಾಗಶಃ ಚಲಿಸುತ್ತದೆ. ಈ ಭಾಗ ಅದನ್ನು ಓಡಿಸಿ ಎರಡು ಬೇರೆ ವಿಷಯಗಳನ್ನು ಅಳೆಯುತ್ತದೆ: ಏಜೆಂಟ್‌ಗಳು ಎಷ್ಟು ಒಪ್ಪುತ್ತವೆ ಎಂದು ಹೇಳುವ ಉತ್ತರಗಳ spread, ಮತ್ತು ಅವು ಎಷ್ಟು ಸರಿ ಎಂದು ಹೇಳುವ ತಿಳಿದ ಉತ್ತರದ ವಿರುದ್ಧ ಸರಾಸರಿ ನಿರಪೇಕ್ಷ ದೋಷ. ನಂತರ ವಿಶ್ವಾಸದಿಂದ ತಪ್ಪಾದ ಏಜೆಂಟ್, ಮೂರು ಕಲಿಕೆ ದರಗಳು, synchronous ಮತ್ತು sequential ನವೀಕರಣ ಹಾಗೂ ದೊಡ್ಡ ಸಮಾಜದ ವೆಚ್ಚ ಪ್ರಯತ್ನಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "A Numerical Debate",
    "headingKn": "ಸಂಖ್ಯಾತ್ಮಕ ಚರ್ಚೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">agents can agree closely and still be wrong</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">agents</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">answer + weight</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">exchange</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">read the snapshot</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">update</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">pull to neighbours</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">spread</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">is not error</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">agents can agree closely and still be wrong</text></svg>",
    "captionEn": "Each round every agent moves part of the way to the weighted average of the others.",
    "captionKn": "ಪ್ರತಿ ಸುತ್ತಿನಲ್ಲಿ ಪ್ರತಿ ಏಜೆಂಟ್ ಇತರರ ತೂಕದ ಸರಾಸರಿಯ ಕಡೆಗೆ ಭಾಗಶಃ ಚಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The six experiments",
    "headingKn": "ಆರು ಪ್ರಯೋಗಗಳು",
    "headers": [
     "Experiment",
     "What it checks"
    ],
    "rows": [
     [
      "base debate",
      "80, 100, 120 over three rounds"
     ],
     [
      "spread against error",
      "starting at 80, 90, 100"
     ],
     [
      "wrong but confident",
      "one agent at 150 with weight 0.99"
     ],
     [
      "learning rate",
      "0.2, 0.5 and 0.8"
     ],
     [
      "update order",
      "synchronous against sequential"
     ],
     [
      "cost",
      "responses, tokens and links for 129 agents"
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
    "filename": "so_1.py",
    "headingEn": "Agents, spread and error",
    "headingKn": "ಏಜೆಂಟ್‌ಗಳು, spread ಮತ್ತು ದೋಷ",
    "descEn": "Agent holds an answer and a confidence, spread measures disagreement and mae measures distance from the known answer.",
    "descKn": "Agent ಉತ್ತರ ಮತ್ತು ವಿಶ್ವಾಸ ಹೊಂದಿದೆ, spread ಭಿನ್ನಾಭಿಪ್ರಾಯ ಅಳೆಯುತ್ತದೆ ಮತ್ತು mae ತಿಳಿದ ಉತ್ತರದಿಂದ ದೂರ ಅಳೆಯುತ್ತದೆ.",
    "code": "class Agent:\n    name: str\n    answer: float\n    confidence: float\n\n\ndef spread(agents):\n    a = [x.answer for x in agents]\n    return max(a) - min(a)\n\n\ndef mae(agents, correct):\n    return mean(abs(x.answer - correct) for x in agents)\n\n\ndef neighbor_answer(agent, agents):\n    others = [o for o in agents if o.name != agent.name]\n    return sum(o.answer * o.confidence for o in others) / sum(o.confidence for o in others)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "so_1.py",
    "headingEn": "The update rule",
    "headingKn": "ನವೀಕರಣ ನಿಯಮ",
    "descEn": "run_round either builds all new answers from one snapshot and then commits them, or updates agents one after another.",
    "descKn": "run_round ಒಂದು snapshot ನಿಂದ ಎಲ್ಲಾ ಹೊಸ ಉತ್ತರಗಳನ್ನು ರಚಿಸಿ ನಂತರ ಒಪ್ಪಿಸುತ್ತದೆ, ಅಥವಾ ಏಜೆಂಟ್‌ಗಳನ್ನು ಒಂದರ ನಂತರ ಒಂದು ನವೀಕರಿಸುತ್ತದೆ.",
    "code": "def run_round(agents, alpha=0.5, synchronous=True):\n    if synchronous:\n        new = {a.name: (1 - alpha) * a.answer + alpha * neighbor_answer(a, agents) for a in agents}\n        for a in agents:\n            a.answer = new[a.name]\n    else:\n        for a in agents:\n            a.answer = (1 - alpha) * a.answer + alpha * neighbor_answer(a, agents)\n\n\ndef make(spec):\n    return [Agent(n, x, c) for n, x, c in spec]\n\n\ndef debate(spec, rounds=3, alpha=0.5, correct=100.0, synchronous=True):\n    agents = make(spec)\n    rows = [(1, [a.answer for a in agents], spread(agents), mae(agents, correct))]\n    for r in range(2, rounds + 1):\n        run_round(agents, alpha, synchronous)\n        rows.append((r, [a.answer for a in agents], spread(agents), mae(agents, correct)))\n    return agents, rows"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "so_1.py",
    "headingEn": "The experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the six experiments in order and prints the real result of each.",
    "descKn": "main() ಆರು ಪ್ರಯೋಗಗಳನ್ನು ಕ್ರಮವಾಗಿ ಓಡಿಸಿ ಪ್ರತಿಯೊಂದರ ನಿಜ ಫಲಿತಾಂಶ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: the three-agent, three-round numerical debate\")\n    agents, rows = debate(BASE)\n    for r, xs, s, e in rows:\n        print(f\"round {r}: A={xs[0]:.2f} B={xs[1]:.2f} C={xs[2]:.2f} spread={s:.2f} mae={e:.2f}\")\n    print(\"final mean answer:\", round(mean(a.answer for a in agents), 2))\n    print(\"round 2 matches the lesson table (93.57, 99.09, 106.00, spread 12.43) but round 3 does not: the lesson lists 98.20, 99.15, 100.42 and spread 2.22 while this run gives 97.56, 99.16, 101.44 and spread 3.88, so the lesson table for round 3 is not reproduced by its own stated update rule; agent B, who started at the correct 100, drifts to 99.09 in round 2 because the others pull it, and convergence here is a property of the update rule and says nothing about real language models.\")\n\n    section(\"2. Genuinely running: converging is not the same as being right\")\n    agents2, rows2 = debate([(\"A\", 80.0, 0.6), (\"B\", 90.0, 0.9), (\"C\", 100.0, 0.5)])\n    print(fmt(rows2))\n    print(\"final mean answer:\", round(mean(a.answer for a in agents2), 2), \"| correct answer: 100.0\")\n    print(\"with starting answers 80, 90 and 100 the spread shrinks every round while the mean error against 100 stays well above zero, so the agents become more alike without becoming right; agreement is a property of the agents and truth is a property of the answer, and only the error column knows the correct value.\")\n\n    section(\"3. Genuinely running: a confidently wrong agent\")\n    a3, rows3 = debate([(\"A\", 100.0, 0.40), (\"B\", 100.0, 0.50), (\"C\", 150.0, 0.99)])\n    print(fmt(rows3))\n    print(\"agents A and B both started at the correct 100 and C started at 150 with confidence 0.99\")\n    print(\"two agents that were right at the start are pulled towards the one that was wrong because its confidence weight dominates the average, and the final spread is smaller than the starting spread of 50 while the error is larger than zero; a declared confidence is a weight chosen for the simulation and not a calibrated probability, so weighting by it rewards whoever claims the most.\")\n\n    section(\"4. Genuinely running: how much each agent moves (learning rate)\")\n    for alpha in (0.2, 0.5, 0.8):\n        _, rr = debate(BASE, alpha=alpha)\n        print(f\"alpha={alpha}: final spread={rr[-1][2]:.2f} final mae={rr[-1][3]:.2f}\")\n    print(\"a larger learning rate shrinks the spread faster, and here the error shrinks in the same order only because the starting answers 80, 100 and 120 are symmetric around the correct 100; in section 2 the same rule shrinks the spread while the error stays near 10, so a smaller spread alone never tells you the answer improved.\")\n\n    section(\"5. Genuinely running: synchronous against sequential updates\")\n    _, sync_rows = debate(BASE, rounds=2, synchronous=True)\n    _, seq_rows = debate(BASE, rounds=2, synchronous=False)\n    print(\"synchronous round 2:\", [round(x, 4) for x in sync_rows[-1][1]])\n    print(\"sequential  round 2:\", [round(x, 4) for x in seq_rows[-1][1]])\n    rev = [BASE[2], BASE[1], BASE[0]]\n    _, seq_rev = debate(rev, rounds=2, synchronous=False)\n    print(\"sequential, agents listed in reverse order:\", [round(x, 4) for x in seq_rev[-1][1]][::-1])\n    print(\"the synchronous update reads one snapshot of the previous round, so by construction the order of the list cannot matter, whereas the sequential update lets later agents read earlier agents new answers and gives different numbers (B 102.79 against 99.09) and a different result when the list order is reversed; real systems need a snapshot or version for the same reason.\")\n\n    section(\"6. Genuinely computing: responses, tokens and the cost of a bigger society\")\n    print(\"responses N x R:\", {(n, r): n * r for n in (1, 3, 5) for r in (1, 2, 3)})\n    print(\"tokens at 1000 per response, 1 agent once:\", 1 * 1000, \"| 3 agents, 3 rounds:\", 3 * 3 * 1000)\n    print(\"directed agent-to-agent links N(N-1) for 3 agents:\", 3 * 2, \"| for 129 agents:\", 129 * 128)\n    c = Counter([\"42\", \"42\", \"41\", \"42\", \"42\"])\n    print(\"consensus of 42,42,41,42,42:\", max(c.values()) / 5)\n    print(\"three agents for three rounds make nine responses and about 9000 tokens when every response costs 1000, and a fully connected society of 129 agents has 16512 possible directed links; the 9000 ignores that later rounds carry earlier answers, and the 16512 counts possible links and not model calls.\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the three-agent, three-round numerical debate ---\nround 1: A=80.00 B=100.00 C=120.00 spread=40.00 mae=13.33\nround 2: A=93.57 B=99.09 C=106.00 spread=12.43 mae=4.45\nround 3: A=97.56 B=99.16 C=101.44 spread=3.88 mae=1.57\nfinal mean answer: 99.39\nround 2 matches the lesson table (93.57, 99.09, 106.00, spread 12.43) but round 3 does not: the lesson lists 98.20, 99.15, 100.42 and spread 2.22 while this run gives 97.56, 99.16, 101.44 and spread 3.88, so the lesson table for round 3 is not reproduced by its own stated update rule; agent B, who started at the correct 100, drifts to 99.09 in round 2 because the others pull it, and convergence here is a property of the update rule and says nothing about real language models.\n\n--- 2. Genuinely running: converging is not the same as being right ---\nr1: [80.0, 90.0, 100.0] spread=20.00 mae=10.00 | r2: [86.79, 89.55, 93.0] spread=6.21 mae=10.22 | r3: [88.78, 89.58, 90.72] spread=1.94 mae=10.31\nfinal mean answer: 89.69 | correct answer: 100.0\nwith starting answers 80, 90 and 100 the spread shrinks every round while the mean error against 100 stays well above zero, so the agents become more alike without becoming right; agreement is a property of the agents and truth is a property of the answer, and only the error column knows the correct value.\n\n--- 3. Genuinely running: a confidently wrong agent ---\nr1: [100.0, 100.0, 150.0] spread=50.00 mae=16.67 | r2: [116.61, 117.81, 125.0] spread=8.39 mae=19.81 | r3: [119.6, 120.2, 121.14] spread=1.54 mae=20.31\nagents A and B both started at the correct 100 and C started at 150 with confidence 0.99\ntwo agents that were right at the start are pulled towards the one that was wrong because its confidence weight dominates the average, and the final spread is smaller than the starting spread of 50 while the error is larger than zero; a declared confidence is a weight chosen for the simulation and not a calibrated probability, so weighting by it rewards whoever claims the most.\n\n--- 4. Genuinely running: how much each agent moves (learning rate) ---\nalpha=0.2: final spread=20.99 final mae=7.19\nalpha=0.5: final spread=3.88 final mae=1.57\nalpha=0.8: final spread=0.68 final mae=0.71\na larger learning rate shrinks the spread faster, and here the error shrinks in the same order only because the starting answers 80, 100 and 120 are symmetric around the correct 100; in section 2 the same rule shrinks the spread while the error stays near 10, so a smaller spread alone never tells you the answer improved.\n\n--- 5. Genuinely running: synchronous against sequential updates ---\nsynchronous round 2: [93.5714, 99.0909, 106.0]\nsequential  round 2: [93.5714, 102.7922, 109.5519]\nsequential, agents listed in reverse order: [89.7565, 95.9091, 106.0]\nthe synchronous update reads one snapshot of the previous round, so by construction the order of the list cannot matter, whereas the sequential update lets later agents read earlier agents new answers and gives different numbers (B 102.79 against 99.09) and a different result when the list order is reversed; real systems need a snapshot or version for the same reason.\n\n--- 6. Genuinely computing: responses, tokens and the cost of a bigger society ---\nresponses N x R: {(1, 1): 1, (1, 2): 2, (1, 3): 3, (3, 1): 3, (3, 2): 6, (3, 3): 9, (5, 1): 5, (5, 2): 10, (5, 3): 15}\ntokens at 1000 per response, 1 agent once: 1000 | 3 agents, 3 rounds: 9000\ndirected agent-to-agent links N(N-1) for 3 agents: 6 | for 129 agents: 16512\nconsensus of 42,42,41,42,42: 0.8\nthree agents for three rounds make nine responses and about 9000 tokens when every response costs 1000, and a fully connected society of 129 agents has 16512 possible directed links; the 9000 ignores that later rounds carry earlier answers, and the 16512 counts possible links and not model calls."
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
    "headingEn": "Experiment 1: The three-agent, three-round numerical debate",
    "headingKn": "ಪ್ರಯೋಗ 1: The three-agent, three-round numerical debate",
    "bodyEn": "What it ran: The three-agent, three-round numerical debate. What the lab concluded: round 2 matches the lesson table (93.57, 99.09, 106.00, spread 12.43) but round 3 does not: the lesson lists 98.20, 99.15, 100.42 and spread 2.22 while this run gives 97.56, 99.16, 101.44 and spread 3.88, so the lesson table for round 3 is not reproduced by its own stated update rule; agent B, who started at the correct 100, drifts to 99.09 in round 2 because the others pull it, and convergence here is a property of the update rule and says nothing about real language models.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The three-agent, three-round numerical debate. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): round 2 matches the lesson table (93.57, 99.09, 106.00, spread 12.43) but round 3 does not: the lesson lists 98.20, 99.15, 100.42 and spread 2.22 while this run gives 97.56, 99.16, 101.44 and spread 3.88, so the lesson table for round 3 is not reproduced by its own stated update rule; agent B, who started at the correct 100, drifts to 99.09 in round 2 because the others pull it, and convergence here is a property of the update rule and says nothing about real language models."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: the three-agent, three-round numerical debate ---\nround 1: A=80.00 B=100.00 C=120.00 spread=40.00 mae=13.33\nround 2: A=93.57 B=99.09 C=106.00 spread=12.43 mae=4.45\nround 3: A=97.56 B=99.16 C=101.44 spread=3.88 mae=1.57\nfinal mean answer: 99.39"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Converging is not the same as being right",
    "headingKn": "ಪ್ರಯೋಗ 2: Converging is not the same as being right",
    "bodyEn": "What it ran: Converging is not the same as being right. What the lab concluded: with starting answers 80, 90 and 100 the spread shrinks every round while the mean error against 100 stays well above zero, so the agents become more alike without becoming right; agreement is a property of the agents and truth is a property of the answer, and only the error column knows the correct value.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Converging is not the same as being right. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): with starting answers 80, 90 and 100 the spread shrinks every round while the mean error against 100 stays well above zero, so the agents become more alike without becoming right; agreement is a property of the agents and truth is a property of the answer, and only the error column knows the correct value."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: converging is not the same as being right ---\nr1: [80.0, 90.0, 100.0] spread=20.00 mae=10.00 | r2: [86.79, 89.55, 93.0] spread=6.21 mae=10.22 | r3: [88.78, 89.58, 90.72] spread=1.94 mae=10.31\nfinal mean answer: 89.69 | correct answer: 100.0"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: A confidently wrong agent",
    "headingKn": "ಪ್ರಯೋಗ 3: A confidently wrong agent",
    "bodyEn": "What it ran: A confidently wrong agent. What the lab concluded: two agents that were right at the start are pulled towards the one that was wrong because its confidence weight dominates the average, and the final spread is smaller than the starting spread of 50 while the error is larger than zero; a declared confidence is a weight chosen for the simulation and not a calibrated probability, so weighting by it rewards whoever claims the most.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A confidently wrong agent. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): two agents that were right at the start are pulled towards the one that was wrong because its confidence weight dominates the average, and the final spread is smaller than the starting spread of 50 while the error is larger than zero; a declared confidence is a weight chosen for the simulation and not a calibrated probability, so weighting by it rewards whoever claims the most."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: a confidently wrong agent ---\nr1: [100.0, 100.0, 150.0] spread=50.00 mae=16.67 | r2: [116.61, 117.81, 125.0] spread=8.39 mae=19.81 | r3: [119.6, 120.2, 121.14] spread=1.54 mae=20.31\nagents A and B both started at the correct 100 and C started at 150 with confidence 0.99"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: How much each agent moves (learning rate)",
    "headingKn": "ಪ್ರಯೋಗ 4: How much each agent moves (learning rate)",
    "bodyEn": "What it ran: How much each agent moves (learning rate). What the lab concluded: a larger learning rate shrinks the spread faster, and here the error shrinks in the same order only because the starting answers 80, 100 and 120 are symmetric around the correct 100; in section 2 the same rule shrinks the spread while the error stays near 10, so a smaller spread alone never tells you the answer improved.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: How much each agent moves (learning rate). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a larger learning rate shrinks the spread faster, and here the error shrinks in the same order only because the starting answers 80, 100 and 120 are symmetric around the correct 100; in section 2 the same rule shrinks the spread while the error stays near 10, so a smaller spread alone never tells you the answer improved."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: how much each agent moves (learning rate) ---\nalpha=0.2: final spread=20.99 final mae=7.19\nalpha=0.5: final spread=3.88 final mae=1.57\nalpha=0.8: final spread=0.68 final mae=0.71"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Synchronous against sequential updates",
    "headingKn": "ಪ್ರಯೋಗ 5: Synchronous against sequential updates",
    "bodyEn": "What it ran: Synchronous against sequential updates. What the lab concluded: the synchronous update reads one snapshot of the previous round, so by construction the order of the list cannot matter, whereas the sequential update lets later agents read earlier agents new answers and gives different numbers (B 102.79 against 99.09) and a different result when the list order is reversed; real systems need a snapshot or version for the same reason.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Synchronous against sequential updates. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the synchronous update reads one snapshot of the previous round, so by construction the order of the list cannot matter, whereas the sequential update lets later agents read earlier agents new answers and gives different numbers (B 102.79 against 99.09) and a different result when the list order is reversed; real systems need a snapshot or version for the same reason."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: synchronous against sequential updates ---\nsynchronous round 2: [93.5714, 99.0909, 106.0]\nsequential  round 2: [93.5714, 102.7922, 109.5519]\nsequential, agents listed in reverse order: [89.7565, 95.9091, 106.0]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: Responses, tokens and the cost of a bigger society",
    "headingKn": "ಪ್ರಯೋಗ 6: Responses, tokens and the cost of a bigger society",
    "bodyEn": "What it ran: Responses, tokens and the cost of a bigger society. What the lab concluded: three agents for three rounds make nine responses and about 9000 tokens when every response costs 1000, and a fully connected society of 129 agents has 16512 possible directed links; the 9000 ignores that later rounds carry earlier answers, and the 16512 counts possible links and not model calls.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Responses, tokens and the cost of a bigger society. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): three agents for three rounds make nine responses and about 9000 tokens when every response costs 1000, and a fully connected society of 129 agents has 16512 possible directed links; the 9000 ignores that later rounds carry earlier answers, and the 16512 counts possible links and not model calls."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely computing: responses, tokens and the cost of a bigger society ---\nresponses N x R: {(1, 1): 1, (1, 2): 2, (1, 3): 3, (3, 1): 3, (3, 2): 6, (3, 3): 9, (5, 1): 5, (5, 2): 10, (5, 3): 15}\ntokens at 1000 per response, 1 agent once: 1000 | 3 agents, 3 rounds: 9000\ndirected agent-to-agent links N(N-1) for 3 agents: 6 | for 129 agents: 16512\nconsensus of 42,42,41,42,42: 0.8"
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
    "headingEn": "Genuinely Found: The Lesson Table Does Not Reproduce",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: lesson ಕೋಷ್ಟಕ ಪುನರುತ್ಪಾದನೆಯಾಗುವುದಿಲ್ಲ",
    "bodyEn": "Section 1: round 2 gave 93.57, 99.09 and 106.00 with spread 12.43, matching the lesson, but round 3 gave 97.56, 99.16 and 101.44 with spread 3.88 where the lesson lists 98.20, 99.15, 100.42 and 2.22. Agent B, which started at the correct 100, drifted to 99.09.",
    "bodyKn": "ವಿಭಾಗ 1: ಸುತ್ತು 2 93.57, 99.09 ಮತ್ತು 106.00 ಹಾಗೂ spread 12.43 ನೀಡಿ lesson ಗೆ ಹೊಂದಿತು, ಆದರೆ ಸುತ್ತು 3 97.56, 99.16 ಮತ್ತು 101.44 ಹಾಗೂ spread 3.88 ನೀಡಿತು, lesson 98.20, 99.15, 100.42 ಮತ್ತು 2.22 ಪಟ್ಟಿ ಮಾಡಿದೆ. ಸರಿಯಾದ 100 ರಿಂದ ಆರಂಭಿಸಿದ ಏಜೆಂಟ್ B 99.09 ಕ್ಕೆ ಜಾರಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Spread Falls, Error Does Not",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Spread ಇಳಿಯುತ್ತದೆ, ದೋಷ ಇಳಿಯುವುದಿಲ್ಲ",
    "bodyEn": "Section 2: starting at 80, 90 and 100 the spread fell 20.00, 6.21, 1.94 while the error rose 10.00, 10.22, 10.31. Section 3: with one agent at 150 and weight 0.99 the spread fell 50.00, 8.39, 1.54 while the error rose 16.67, 19.81, 20.31 and the two correct agents ended near 120.",
    "bodyKn": "ವಿಭಾಗ 2: 80, 90 ಮತ್ತು 100 ರಿಂದ ಆರಂಭಿಸಿದಾಗ spread 20.00, 6.21, 1.94 ಇಳಿಯಿತು ಆದರೆ ದೋಷ 10.00, 10.22, 10.31 ಏರಿತು. ವಿಭಾಗ 3: ಒಂದು ಏಜೆಂಟ್ 150 ಮತ್ತು ತೂಕ 0.99 ಇದ್ದಾಗ spread 50.00, 8.39, 1.54 ಇಳಿಯಿತು ಆದರೆ ದೋಷ 16.67, 19.81, 20.31 ಏರಿತು ಮತ್ತು ಸರಿಯಾದ ಎರಡು ಏಜೆಂಟ್‌ಗಳು 120 ರ ಬಳಿ ಮುಗಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Order Matters Unless You Snapshot",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: snapshot ಇಲ್ಲದಿದ್ದರೆ ಕ್ರಮ ಮುಖ್ಯ",
    "bodyEn": "Section 5: the synchronous round 2 gave 93.5714, 99.0909, 106.0 and the sequential one gave 93.5714, 102.7922, 109.5519, and reversing the list order changed the sequential result again. Section 6: 129 agents have 16512 possible directed links and 3 agents have 6, and 3 agents for 3 rounds make 9 responses.",
    "bodyKn": "ವಿಭಾಗ 5: synchronous ಸುತ್ತು 2 93.5714, 99.0909, 106.0 ನೀಡಿತು ಮತ್ತು sequential 93.5714, 102.7922, 109.5519 ನೀಡಿತು, ಮತ್ತು ಪಟ್ಟಿ ಕ್ರಮ ಹಿಮ್ಮುಖ ಮಾಡಿದರೆ sequential ಫಲಿತಾಂಶ ಮತ್ತೆ ಬದಲಾಯಿತು. ವಿಭಾಗ 6: 129 ಏಜೆಂಟ್‌ಗಳಿಗೆ 16512 ಸಾಧ್ಯ ನಿರ್ದೇಶಿತ ಕೊಂಡಿಗಳು ಮತ್ತು 3 ಏಜೆಂಟ್‌ಗಳಿಗೆ 6 ಇವೆ, ಮತ್ತು 3 ಏಜೆಂಟ್ 3 ಸುತ್ತು 9 ಪ್ರತಿಕ್ರಿಯೆಗಳನ್ನು ಮಾಡುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A debate has to be judged by something outside the agents, because the agents can only report how much they agree, and the update order, confidence weights and learning rate all change how fast that agreement arrives without changing whether it is right.",
    "bodyKn": "ಚರ್ಚೆಯನ್ನು ಏಜೆಂಟ್‌ಗಳ ಹೊರಗಿನ ಏನಾದರೂ ವಿರುದ್ಧ ನಿರ್ಣಯಿಸಬೇಕು, ಏಕೆಂದರೆ ಏಜೆಂಟ್‌ಗಳು ಎಷ್ಟು ಒಪ್ಪುತ್ತವೆ ಎಂದು ಮಾತ್ರ ವರದಿ ಮಾಡಬಲ್ಲವು, ಮತ್ತು ನವೀಕರಣ ಕ್ರಮ, ವಿಶ್ವಾಸ ತೂಕಗಳು ಹಾಗೂ ಕಲಿಕೆ ದರ ಆ ಒಪ್ಪಿಗೆ ಎಷ್ಟು ಬೇಗ ಬರುತ್ತದೆ ಎಂದು ಬದಲಿಸುತ್ತವೆ ಆದರೆ ಅದು ಸರಿಯೇ ಎಂದು ಬದಲಿಸುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a shrinking spread means the debate is working.\" In experiment 2 the spread fell every round while the error rose from 10.00 to 10.31.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"spread ಇಳಿಯುತ್ತಿದ್ದರೆ ಚರ್ಚೆ ಕೆಲಸ ಮಾಡುತ್ತಿದೆ.\" ಪ್ರಯೋಗ 2 ರಲ್ಲಿ ಪ್ರತಿ ಸುತ್ತು spread ಇಳಿಯಿತು ಆದರೆ ದೋಷ 10.00 ರಿಂದ 10.31 ಕ್ಕೆ ಏರಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Spread: largest answer minus smallest. MAE: mean absolute error against the known answer. Learning rate: how far an agent moves towards its neighbours. Synchronous update: every agent reads the same snapshot. Society of Mind: intelligence as many simple interacting processes.",
    "bodyKn": "Spread: ದೊಡ್ಡ ಉತ್ತರ ಮೈನಸ್ ಚಿಕ್ಕ ಉತ್ತರ. MAE: ತಿಳಿದ ಉತ್ತರದ ವಿರುದ್ಧ ಸರಾಸರಿ ನಿರಪೇಕ್ಷ ದೋಷ. ಕಲಿಕೆ ದರ: ಏಜೆಂಟ್ ನೆರೆಯವರ ಕಡೆಗೆ ಎಷ್ಟು ಚಲಿಸುತ್ತದೆ. Synchronous ನವೀಕರಣ: ಪ್ರತಿ ಏಜೆಂಟ್ ಒಂದೇ snapshot ಓದುತ್ತದೆ. Society of Mind: ಅನೇಕ ಸರಳ ಪರಸ್ಪರ ಕ್ರಿಯೆಯ ಪ್ರಕ್ರಿಯೆಗಳಾಗಿ ಬುದ್ಧಿಮತ್ತೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The lesson round-3 numbers are not reproduced by its own rule. 2) Spread fell while error rose. 3) A confident wrong agent dragged two correct agents to about 120. 4) Sequential updates gave 102.79 where synchronous gave 99.09. 5) 129 agents have 16512 possible directed links.",
    "bodyKn": "1) lesson ನ ಸುತ್ತು-3 ಸಂಖ್ಯೆಗಳು ಅದರ ಸ್ವಂತ ನಿಯಮದಿಂದ ಪುನರುತ್ಪಾದನೆಯಾಗುವುದಿಲ್ಲ. 2) Spread ಇಳಿಯಿತು ಆದರೆ ದೋಷ ಏರಿತು. 3) ವಿಶ್ವಾಸದ ತಪ್ಪು ಏಜೆಂಟ್ ಎರಡು ಸರಿಯಾದ ಏಜೆಂಟ್‌ಗಳನ್ನು ಸುಮಾರು 120 ಕ್ಕೆ ಎಳೆಯಿತು. 4) synchronous 99.09 ನೀಡಿದಾಗ sequential 102.79 ನೀಡಿತು. 5) 129 ಏಜೆಂಟ್‌ಗಳಿಗೆ 16512 ಸಾಧ್ಯ ನಿರ್ದೇಶಿತ ಕೊಂಡಿಗಳಿವೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What spread did round 3 of the base debate give in this run?",
      "qKn": "ಈ ಓಟದಲ್ಲಿ ಮೂಲ ಚರ್ಚೆಯ ಸುತ್ತು 3 ಯಾವ spread ನೀಡಿತು?",
      "opts": [
       "3.88",
       "2.22",
       "12.43",
       "0.68"
      ],
      "optsKn": [
       "3.88",
       "2.22",
       "12.43",
       "0.68"
      ],
      "correct": 0
     },
     {
      "q": "What happened to the error when starting from 80, 90 and 100?",
      "qKn": "80, 90 ಮತ್ತು 100 ರಿಂದ ಆರಂಭಿಸಿದಾಗ ದೋಷಕ್ಕೆ ಏನಾಯಿತು?",
      "opts": [
       "it rose slightly",
       "it fell to zero",
       "it stayed exactly 10",
       "it was not measured"
      ],
      "optsKn": [
       "ಸ್ವಲ್ಪ ಏರಿತು",
       "ಸೊನ್ನೆಗೆ ಇಳಿಯಿತು",
       "ಸರಿಯಾಗಿ 10 ಉಳಿಯಿತು",
       "ಅಳೆಯಲಾಗಲಿಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Where did the two correct agents end up next to the confident agent at 150?",
      "qKn": "150 ರ ವಿಶ್ವಾಸದ ಏಜೆಂಟ್ ಪಕ್ಕದಲ್ಲಿ ಎರಡು ಸರಿಯಾದ ಏಜೆಂಟ್‌ಗಳು ಎಲ್ಲಿ ಮುಗಿದವು?",
      "opts": [
       "about 120",
       "at 100",
       "at 150",
       "at 80"
      ],
      "optsKn": [
       "ಸುಮಾರು 120",
       "100 ರಲ್ಲಿ",
       "150 ರಲ್ಲಿ",
       "80 ರಲ್ಲಿ"
      ],
      "correct": 0
     },
     {
      "q": "What did agent B get in round 2 with the sequential update?",
      "qKn": "sequential ನವೀಕರಣದಲ್ಲಿ ಸುತ್ತು 2 ರಲ್ಲಿ ಏಜೆಂಟ್ B ಗೆ ಏನು ಸಿಕ್ಕಿತು?",
      "opts": [
       "102.7922",
       "99.0909",
       "106.0",
       "93.5714"
      ],
      "optsKn": [
       "102.7922",
       "99.0909",
       "106.0",
       "93.5714"
      ],
      "correct": 0
     },
     {
      "q": "How many directed links can 129 fully connected agents have?",
      "qKn": "ಸಂಪೂರ್ಣ ಸಂಪರ್ಕಿತ 129 ಏಜೆಂಟ್‌ಗಳಿಗೆ ಎಷ್ಟು ನಿರ್ದೇಶಿತ ಕೊಂಡಿಗಳು ಇರಬಹುದು?",
      "opts": [
       "16512",
       "129",
       "258",
       "8256"
      ],
      "optsKn": [
       "16512",
       "129",
       "258",
       "8256"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
