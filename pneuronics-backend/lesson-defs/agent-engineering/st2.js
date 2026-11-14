module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b321592",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Self-Taught Reasoning: STaR, V-STaR, Quiet-STaR (Part 2 of 3) — Verifiers and Best-of-N",
 "titleKn": "ಸ್ವಯಂ-ಕಲಿತ ತರ್ಕ: STaR, V-STaR, Quiet-STaR (ಭಾಗ 2 / 3) — ಪರಿಶೀಲಕಗಳು ಮತ್ತು Best-of-N",
 "desc": "Measure best-of-N with a verifier and see how verifier errors and correlated failures cap the gain.",
 "descKn": "ಪರಿಶೀಲಕದೊಂದಿಗೆ best-of-N ಅಳೆಯಿರಿ ಮತ್ತು ಪರಿಶೀಲಕ ದೋಷಗಳು ಹಾಗೂ ಸಹಸಂಬಂಧಿತ ವೈಫಲ್ಯಗಳು ಲಾಭವನ್ನು ಹೇಗೆ ಮಿತಿಗೊಳಿಸುತ್ತವೆ ನೋಡಿ.",
 "objectives": [
  "Check best-of-N against a formula.",
  "Compare random, majority and verifier.",
  "Vary verifier error rates.",
  "Explain correlated failure.",
  "Train a threshold verifier."
 ],
 "objectivesKn": [
  "best-of-N ಅನ್ನು ಸೂತ್ರದ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿ.",
  "random, ಬಹುಮತ ಮತ್ತು ಪರಿಶೀಲಕ ಹೋಲಿಸಿ.",
  "ಪರಿಶೀಲಕ ದೋಷ ದರ ಬದಲಿಸಿ.",
  "ಸಹಸಂಬಂಧಿತ ವೈಫಲ್ಯ ವಿವರಿಸಿ.",
  "ಮಿತಿ ಪರಿಶೀಲಕಕ್ಕೆ ತರಬೇತಿ ನೀಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Self-Taught Reasoning: STaR, V-STaR, Quiet-STaR (Part 2 of 3)",
    "textKn": "ಸ್ವಯಂ-ಕಲಿತ ತರ್ಕ: STaR, V-STaR, Quiet-STaR (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: best-of-N sampling with random choice, majority vote and a scripted verifier checked against 1-(1-p)^N, verifier error rates, correlated failures and a threshold verifier trained on right and wrong samples. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind self-taught reasoning (STaR rationale filtering and rationalization, V-STaR verifiers and best-of-N, process versus outcome supervision, out-of-distribution testing and Quiet-STaR style thinking gates), not the real software, and the model is a table of invented competence values or a threshold on invented scores, and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. Any results quoted in the source lesson about published STaR, V-STaR or Quiet-STaR work are cited from the lesson and were not reproduced here; every competence, probability and rate in the labs is invented to show the mechanics of the method. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: random ಆಯ್ಕೆ, ಬಹುಮತ ಮತ ಮತ್ತು 1-(1-p)^N ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿದ scripted ಪರಿಶೀಲಕದೊಂದಿಗೆ best-of-N ಮಾದರಿ, ಪರಿಶೀಲಕ ದೋಷ ದರಗಳು, ಸಹಸಂಬಂಧಿತ ವೈಫಲ್ಯಗಳು ಮತ್ತು ಸರಿ ಹಾಗೂ ತಪ್ಪು ಮಾದರಿಗಳ ಮೇಲೆ ತರಬೇತಿ ಪಡೆದ ಮಿತಿ ಪರಿಶೀಲಕ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಸ್ವಯಂ-ಕಲಿತ ತರ್ಕ (STaR ತರ್ಕ ಶೋಧನೆ ಮತ್ತು rationalization, V-STaR ಪರಿಶೀಲಕಗಳು ಮತ್ತು best-of-N, process ಹಾಗೂ outcome supervision, ವಿತರಣೆ-ಹೊರಗಿನ ಪರೀಕ್ಷೆ ಮತ್ತು Quiet-STaR ಶೈಲಿಯ ಯೋಚನೆ ಗೇಟ್‌ಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಮಾದರಿ ಕಲ್ಪಿತ ಸಾಮರ್ಥ್ಯ ಮೌಲ್ಯಗಳ ಕೋಷ್ಟಕ ಅಥವಾ ಕಲ್ಪಿತ ಅಂಕಗಳ ಮೇಲಿನ ಮಿತಿ, ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಪ್ರಕಟಿತ STaR, V-STaR ಅಥವಾ Quiet-STaR ಕೆಲಸದ ಬಗ್ಗೆ ಮೂಲ lesson ನಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿದ ಫಲಿತಾಂಶಗಳು lesson ನಿಂದ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಪುನರುತ್ಪಾದಿಸಲಾಗಿಲ್ಲ; ಲ್ಯಾಬ್‌ಗಳ ಪ್ರತಿ ಸಾಮರ್ಥ್ಯ, ಸಂಭವನೀಯತೆ ಮತ್ತು ದರ ವಿಧಾನದ ಯಂತ್ರಶಾಸ್ತ್ರ ತೋರಿಸಲು ಕಲ್ಪಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Verifier Turns Samples Into Answers",
    "textKn": "ಪರಿಶೀಲಕ ಮಾದರಿಗಳನ್ನು ಉತ್ತರಗಳಾಗಿ ಬದಲಿಸುತ್ತದೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "How Much Can a Verifier Buy?",
    "headingKn": "ಪರಿಶೀಲಕ ಎಷ್ಟು ಕೊಡಬಲ್ಲದು?",
    "bodyEn": "V-STaR trains a verifier on a model correct and incorrect samples and uses it to pick among several candidates. This part measures that idea on invented numbers: a perfect checker against the 1-(1-p)^N formula, random choice and majority vote, how verifier errors cap the gain, how correlated failures cap it further and a threshold verifier trained on overlapping scores. Candidates and scores are drawn from invented distributions.",
    "bodyKn": "V-STaR ಮಾದರಿಯ ಸರಿ ಮತ್ತು ತಪ್ಪು ಮಾದರಿಗಳ ಮೇಲೆ ಪರಿಶೀಲಕಕ್ಕೆ ತರಬೇತಿ ನೀಡಿ ಹಲವು ಅಭ್ಯರ್ಥಿಗಳಲ್ಲಿ ಆರಿಸಲು ಅದನ್ನು ಬಳಸುತ್ತದೆ. ಈ ಭಾಗ ಆ ಕಲ್ಪನೆಯನ್ನು ಕಲ್ಪಿತ ಸಂಖ್ಯೆಗಳ ಮೇಲೆ ಅಳೆಯುತ್ತದೆ: 1-(1-p)^N ಸೂತ್ರದ ವಿರುದ್ಧ ಪರಿಪೂರ್ಣ ಪರಿಶೀಲಕ, random ಆಯ್ಕೆ ಮತ್ತು ಬಹುಮತ ಮತ, ಪರಿಶೀಲಕ ದೋಷಗಳು ಲಾಭವನ್ನು ಹೇಗೆ ಮಿತಿಗೊಳಿಸುತ್ತವೆ, ಸಹಸಂಬಂಧಿತ ವೈಫಲ್ಯಗಳು ಅದನ್ನು ಇನ್ನಷ್ಟು ಹೇಗೆ ಮಿತಿಗೊಳಿಸುತ್ತವೆ ಮತ್ತು ಅತಿಕ್ರಮಿಸುವ ಅಂಕಗಳ ಮೇಲೆ ತರಬೇತಿ ಪಡೆದ ಮಿತಿ ಪರಿಶೀಲಕ. ಅಭ್ಯರ್ಥಿಗಳು ಮತ್ತು ಅಂಕಗಳನ್ನು ಕಲ್ಪಿತ ವಿತರಣೆಗಳಿಂದ ಎಳೆಯಲಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Best-of-N With a Verifier",
    "headingKn": "ಪರಿಶೀಲಕದೊಂದಿಗೆ Best-of-N",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a verifier can only choose among what was sampled</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">sample</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">N candidates</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">verify</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">score each</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">pick</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">highest score</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">limit</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">never sampled</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a verifier can only choose among what was sampled</text></svg>",
    "captionEn": "Sample many answers, score them and keep the best.",
    "captionKn": "ಹಲವು ಉತ್ತರ ಮಾದರಿ ಮಾಡಿ, ಅಂಕ ನೀಡಿ ಮತ್ತು ಉತ್ತಮವನ್ನು ಇಡಿ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Selection rules compared",
    "headingKn": "ಆಯ್ಕೆ ನಿಯಮಗಳ ಹೋಲಿಕೆ",
    "headers": [
     "Rule",
     "What it uses"
    ],
    "rows": [
     [
      "random",
      "any candidate"
     ],
     [
      "majority vote",
      "the most repeated answer"
     ],
     [
      "verifier",
      "accept probability tpr for right and fpr for wrong"
     ],
     [
      "trials",
      "20000 per setting, seeded"
     ],
     [
      "wrong answers",
      "spread over 7 values (invented)"
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
    "filename": "st_2.py",
    "headingEn": "Candidates and selection rules",
    "headingKn": "ಅಭ್ಯರ್ಥಿಗಳು ಮತ್ತು ಆಯ್ಕೆ ನಿಯಮಗಳು",
    "descEn": "candidates draws N answers, pick_random, pick_majority and pick_verified choose one, and rate repeats the draw to estimate how often the choice is right.",
    "descKn": "candidates N ಉತ್ತರ ಎಳೆಯುತ್ತದೆ, pick_random, pick_majority ಮತ್ತು pick_verified ಒಂದನ್ನು ಆರಿಸುತ್ತವೆ, ಮತ್ತು rate ಆಯ್ಕೆ ಎಷ್ಟು ಬಾರಿ ಸರಿ ಎಂದು ಅಂದಾಜಿಸಲು ಎಳೆಯುವುದನ್ನು ಪುನರಾವರ್ತಿಸುತ್ತದೆ.",
    "code": "def candidates(r, p, n, wrong_pool=7):\r\n    \"\"\"n candidate answers; each is the right answer 0 with probability p, else one of wrong_pool wrong answers (1..wrong_pool).\"\"\"\r\n    return [0 if r.random() < p else r.randint(1, wrong_pool) for _ in range(n)]\r\n\r\n\r\ndef pick_random(r, c):\r\n    return r.choice(c)\r\n\r\n\r\ndef pick_majority(r, c):\r\n    cnt = Counter(c)\r\n    top = max(cnt.values())\r\n    return r.choice([k for k, v in cnt.items() if v == top])\r\n\r\n\r\ndef pick_verified(r, c, tpr, fpr):\r\n    \"\"\"Verifier accepts a right candidate with probability tpr and a wrong one with probability fpr; pick randomly among accepted, else fall back to random.\"\"\"\r\n    accepted = [x for x in c if r.random() < (tpr if x == 0 else fpr)]\r\n    return r.choice(accepted) if accepted else r.choice(c)\r\n\r\n\r\ndef rate(fn, p, n, trials, seed, **kw):\r\n    r = random.Random(seed)\r\n    return mean(fn(r, candidates(r, p, n), **kw) == 0 for _ in range(trials))"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "st_2.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() compares the rules with the formula, varies verifier error rates, adds correlated failures and trains a threshold verifier.",
    "descKn": "main() ನಿಯಮಗಳನ್ನು ಸೂತ್ರದೊಂದಿಗೆ ಹೋಲಿಸಿ, ಪರಿಶೀಲಕ ದೋಷ ದರ ಬದಲಿಸಿ, ಸಹಸಂಬಂಧಿತ ವೈಫಲ್ಯ ಸೇರಿಸಿ ಮತ್ತು ಮಿತಿ ಪರಿಶೀಲಕಕ್ಕೆ ತರಬೇತಿ ನೀಡುತ್ತದೆ.",
    "code": "def main():\r\n    T = 20000\r\n    section(\"1. Genuinely measuring: random pick, majority vote and a perfect checker against the formula (p = 0.3)\")\r\n    for n in (1, 4, 16):\r\n        ideal = 1 - (1 - 0.3) ** n\r\n        rnd = rate(pick_random, 0.3, n, T, 1)\r\n        maj = rate(pick_majority, 0.3, n, T, 1)\r\n        ver = rate(pick_verified, 0.3, n, T, 1, tpr=1.0, fpr=0.0)\r\n        print(f\"N={n:2d}: formula {ideal:.3f} | perfect verifier {ver:.3f} | majority {maj:.3f} | random {rnd:.3f}\")\r\n    print(\"a perfect checker matches 1 - (1 - p)^N, random choice never improves on p, and majority vote helps here only because wrong answers are spread over seven values while the right one is a single value; if wrong answers agreed with each other majority vote would fail\")\r\n\r\n    section(\"2. Genuinely measuring: verifier errors cap the gain (p = 0.3, N = 16)\")\r\n    for tpr, fpr in ((1.0, 0.0), (0.9, 0.1), (0.9, 0.3), (0.7, 0.3), (0.5, 0.5)):\r\n        v = rate(pick_verified, 0.3, 16, T, 2, tpr=tpr, fpr=fpr)\r\n        print(f\"verifier true-positive {tpr:.1f}, false-positive {fpr:.1f}: success {v:.3f}\")\r\n    print(\"success falls as the false-positive rate rises and equals the base rate 0.300 when the verifier accepts right and wrong answers equally often, so a weak verifier can make extra samples worthless; the rates are invented\")\r\n\r\n    section(\"3. Genuinely measuring: when failures are correlated, more samples help less (N = 16)\")\r\n    r = random.Random(4)\r\n    hits = 0\r\n    for _ in range(T):\r\n        hard = r.random() < 0.5\r\n        p = 0.02 if hard else 0.58\r\n        c = candidates(r, p, 16)\r\n        hits += pick_verified(r, c, 1.0, 0.0) == 0\r\n    print(f\"average p is 0.30 but half the problems are hard (0.02) and half easy (0.58): perfect-verifier success {hits / T:.3f} against the independent formula {1 - 0.7 ** 16:.3f}\")\r\n    print(\"a perfect verifier cannot select an answer that was never sampled, so the gain is bounded by how often the right answer appears at all; the 0.02 and 0.58 split is invented\")\r\n\r\n    section(\"4. Genuinely running: training a verifier on both correct and incorrect samples\")\r\n    r = random.Random(7)\r\n    data = []\r\n    for _ in range(4000):\r\n        correct = r.random() < 0.3\r\n        score = r.gauss(1.0 if correct else 0.0, 1.0)\r\n        data.append((score, correct))\r\n    best_t, best_acc = None, 0\r\n    for t in [x / 10 for x in range(-10, 21)]:\r\n        acc = mean((s > t) == c for s, c in data)\r\n        if acc > best_acc:\r\n            best_t, best_acc = t, acc\r\n    test = []\r\n    for _ in range(4000):\r\n        correct = r.random() < 0.3\r\n        test.append((r.gauss(1.0 if correct else 0.0, 1.0), correct))\r\n    tacc = mean((s > best_t) == c for s, c in test)\r\n    tpr = mean(s > best_t for s, c in test if c)\r\n    fpr = mean(s > best_t for s, c in test if not c)\r\n    print(f\"threshold {best_t} chosen on training data | held-out accuracy {tacc:.3f} | true-positive {tpr:.3f} | false-positive {fpr:.3f}\")\r\n    print(\"the scripted scores overlap, so the threshold that maximises accuracy on this 30 percent correct mix rejects most right answers (low true-positive rate) in order to keep false positives low; V-STaR trains a verifier on the model's own wrong samples as well as right ones to learn that boundary, but a real verifier is a trained model and this one is a threshold on invented Gaussian scores\")\r\n    v = rate(pick_verified, 0.3, 16, T, 5, tpr=tpr, fpr=fpr)\r\n    print(f\"best-of-16 with those measured rates: {v:.3f}\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely measuring: random pick, majority vote and a perfect checker against the formula (p = 0.3) ---\nN= 1: formula 0.300 | perfect verifier 0.303 | majority 0.300 | random 0.300\nN= 4: formula 0.760 | perfect verifier 0.761 | majority 0.405 | random 0.300\nN=16: formula 0.997 | perfect verifier 0.996 | majority 0.695 | random 0.304\na perfect checker matches 1 - (1 - p)^N, random choice never improves on p, and majority vote helps here only because wrong answers are spread over seven values while the right one is a single value; if wrong answers agreed with each other majority vote would fail\n\n--- 2. Genuinely measuring: verifier errors cap the gain (p = 0.3, N = 16) ---\nverifier true-positive 1.0, false-positive 0.0: success 0.997\nverifier true-positive 0.9, false-positive 0.1: success 0.794\nverifier true-positive 0.9, false-positive 0.3: success 0.563\nverifier true-positive 0.7, false-positive 0.3: success 0.497\nverifier true-positive 0.5, false-positive 0.5: success 0.297\nsuccess falls as the false-positive rate rises and equals the base rate 0.300 when the verifier accepts right and wrong answers equally often, so a weak verifier can make extra samples worthless; the rates are invented\n\n--- 3. Genuinely measuring: when failures are correlated, more samples help less (N = 16) ---\naverage p is 0.30 but half the problems are hard (0.02) and half easy (0.58): perfect-verifier success 0.640 against the independent formula 0.997\na perfect verifier cannot select an answer that was never sampled, so the gain is bounded by how often the right answer appears at all; the 0.02 and 0.58 split is invented\n\n--- 4. Genuinely running: training a verifier on both correct and incorrect samples ---\nthreshold 1.4 chosen on training data | held-out accuracy 0.750 | true-positive 0.343 | false-positive 0.080\nthe scripted scores overlap, so the threshold that maximises accuracy on this 30 percent correct mix rejects most right answers (low true-positive rate) in order to keep false positives low; V-STaR trains a verifier on the model's own wrong samples as well as right ones to learn that boundary, but a real verifier is a trained model and this one is a threshold on invented Gaussian scores\nbest-of-16 with those measured rates: 0.623"
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
    "headingEn": "Genuinely Found: Rules Against the Formula",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸೂತ್ರದ ವಿರುದ್ಧ ನಿಯಮಗಳು",
    "bodyEn": "Section 1 at p 0.3: for N 1, 4 and 16 the perfect verifier gave 0.303, 0.761 and 0.996 against the formula 0.300, 0.760 and 0.997, majority vote gave 0.300, 0.405 and 0.695 and random choice stayed at 0.300, 0.300 and 0.304. Section 2 at N 16: verifier (true-positive, false-positive) of (1.0, 0.0) gave 0.997, (0.9, 0.1) gave 0.794, (0.9, 0.3) gave 0.563, (0.7, 0.3) gave 0.497 and (0.5, 0.5) gave 0.297.",
    "bodyKn": "ವಿಭಾಗ 1 p 0.3 ರಲ್ಲಿ: N 1, 4 ಮತ್ತು 16 ಕ್ಕೆ ಪರಿಪೂರ್ಣ ಪರಿಶೀಲಕ ಸೂತ್ರ 0.300, 0.760 ಮತ್ತು 0.997 ವಿರುದ್ಧ 0.303, 0.761 ಮತ್ತು 0.996 ನೀಡಿತು, ಬಹುಮತ ಮತ 0.300, 0.405 ಮತ್ತು 0.695 ನೀಡಿತು ಮತ್ತು random ಆಯ್ಕೆ 0.300, 0.300 ಮತ್ತು 0.304 ರಲ್ಲಿ ಉಳಿಯಿತು. ವಿಭಾಗ 2 N 16 ರಲ್ಲಿ: ಪರಿಶೀಲಕ (true-positive, false-positive) (1.0, 0.0) 0.997, (0.9, 0.1) 0.794, (0.9, 0.3) 0.563, (0.7, 0.3) 0.497 ಮತ್ತು (0.5, 0.5) 0.297 ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Correlation and a Trained Verifier",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಹಸಂಬಂಧ ಮತ್ತು ತರಬೇತಿ ಪಡೆದ ಪರಿಶೀಲಕ",
    "bodyEn": "Section 3: with an average p of 0.30 split into hard problems at 0.02 and easy ones at 0.58, a perfect verifier at N 16 reached 0.640 against the independent formula 0.997. Section 4: the threshold chosen on training scores was 1.4, with held-out accuracy 0.750, true-positive 0.343 and false-positive 0.080, and best-of-16 with those measured rates gave 0.623.",
    "bodyKn": "ವಿಭಾಗ 3: ಸರಾಸರಿ p 0.30 ಅನ್ನು ಕಠಿಣ ಸಮಸ್ಯೆಗಳು 0.02 ಮತ್ತು ಸುಲಭ 0.58 ಆಗಿ ವಿಭಜಿಸಿದಾಗ, ಪರಿಪೂರ್ಣ ಪರಿಶೀಲಕ N 16 ರಲ್ಲಿ ಸ್ವತಂತ್ರ ಸೂತ್ರ 0.997 ವಿರುದ್ಧ 0.640 ತಲುಪಿತು. ವಿಭಾಗ 4: ತರಬೇತಿ ಅಂಕಗಳಲ್ಲಿ ಆರಿಸಿದ ಮಿತಿ 1.4, held-out ನಿಖರತೆ 0.750, true-positive 0.343 ಮತ್ತು false-positive 0.080, ಮತ್ತು ಆ ಅಳೆದ ದರಗಳೊಂದಿಗೆ best-of-16 0.623 ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Extra samples are only worth their cost when a verifier can pick the right one, and both verifier errors and correlated failures can erase most of the gain.",
    "bodyKn": "ಪರಿಶೀಲಕ ಸರಿಯಾದದನ್ನು ಆರಿಸಬಲ್ಲಾಗ ಮಾತ್ರ ಹೆಚ್ಚುವರಿ ಮಾದರಿಗಳು ತಮ್ಮ ವೆಚ್ಚಕ್ಕೆ ಯೋಗ್ಯ, ಮತ್ತು ಪರಿಶೀಲಕ ದೋಷಗಳು ಹಾಗೂ ಸಹಸಂಬಂಧಿತ ವೈಫಲ್ಯಗಳು ಹೆಚ್ಚಿನ ಲಾಭ ಅಳಿಸಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a verifier with some skill always beats random choice with enough samples.\" A verifier that accepted right and wrong answers equally often scored 0.297, the same as the base rate.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಸ್ವಲ್ಪ ಕೌಶಲ ಇರುವ ಪರಿಶೀಲಕ ಸಾಕಷ್ಟು ಮಾದರಿಗಳೊಂದಿಗೆ ಯಾವಾಗಲೂ random ಆಯ್ಕೆಯನ್ನು ಮೀರಿಸುತ್ತದೆ.\" ಸರಿ ಮತ್ತು ತಪ್ಪು ಉತ್ತರಗಳನ್ನು ಸಮಾನವಾಗಿ ಸ್ವೀಕರಿಸಿದ ಪರಿಶೀಲಕ 0.297 ಪಡೆಯಿತು, ಮೂಲ ದರದಂತೆಯೇ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Best-of-N: sample N and keep one. Verifier: a scorer that judges candidates. True-positive rate: right answers accepted. False-positive rate: wrong answers accepted. Majority vote: pick the most repeated answer.",
    "bodyKn": "Best-of-N: N ಮಾದರಿ ಮಾಡಿ ಒಂದನ್ನು ಇಡಿ. Verifier: ಅಭ್ಯರ್ಥಿಗಳನ್ನು ನಿರ್ಣಯಿಸುವ ಅಂಕಕಾರ. True-positive rate: ಸ್ವೀಕರಿಸಿದ ಸರಿ ಉತ್ತರಗಳು. False-positive rate: ಸ್ವೀಕರಿಸಿದ ತಪ್ಪು ಉತ್ತರಗಳು. Majority vote: ಹೆಚ್ಚು ಪುನರಾವರ್ತಿತ ಉತ್ತರ ಆರಿಸಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A perfect verifier matched 1-(1-p)^N. 2) Random choice stayed at 0.3. 3) Majority vote reached 0.695 at N 16. 4) Verifier false positives cut 0.997 to 0.563 or less. 5) Correlated failures capped a perfect verifier at 0.640.",
    "bodyKn": "1) ಪರಿಪೂರ್ಣ ಪರಿಶೀಲಕ 1-(1-p)^N ಗೆ ಹೊಂದಿತು. 2) Random ಆಯ್ಕೆ 0.3 ರಲ್ಲಿ ಉಳಿಯಿತು. 3) ಬಹುಮತ ಮತ N 16 ರಲ್ಲಿ 0.695 ತಲುಪಿತು. 4) ಪರಿಶೀಲಕ false positives 0.997 ಅನ್ನು 0.563 ಅಥವಾ ಕಡಿಮೆಗೆ ಇಳಿಸಿದವು. 5) ಸಹಸಂಬಂಧಿತ ವೈಫಲ್ಯಗಳು ಪರಿಪೂರ್ಣ ಪರಿಶೀಲಕವನ್ನು 0.640 ಕ್ಕೆ ಮಿತಿಗೊಳಿಸಿದವು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did a perfect verifier reach at p 0.3 and N 16?",
      "qKn": "p 0.3 ಮತ್ತು N 16 ರಲ್ಲಿ ಪರಿಪೂರ್ಣ ಪರಿಶೀಲಕ ಏನು ತಲುಪಿತು?",
      "opts": [
       "0.996",
       "0.695",
       "0.304",
       "0.640"
      ],
      "optsKn": [
       "0.996",
       "0.695",
       "0.304",
       "0.640"
      ],
      "correct": 0
     },
     {
      "q": "What did a verifier with equal true-positive and false-positive rates of 0.5 score?",
      "qKn": "ಸಮಾನ 0.5 true-positive ಮತ್ತು false-positive ಇರುವ ಪರಿಶೀಲಕ ಎಷ್ಟು ಅಂಕ ಪಡೆಯಿತು?",
      "opts": [
       "0.297",
       "0.997",
       "0.794",
       "0.497"
      ],
      "optsKn": [
       "0.297",
       "0.997",
       "0.794",
       "0.497"
      ],
      "correct": 0
     },
     {
      "q": "Why did a perfect verifier reach only 0.640 in the correlated case?",
      "qKn": "ಸಹಸಂಬಂಧಿತ ಸಂದರ್ಭದಲ್ಲಿ ಪರಿಪೂರ್ಣ ಪರಿಶೀಲಕ ಕೇವಲ 0.640 ಏಕೆ ತಲುಪಿತು?",
      "opts": [
       "It cannot choose a right answer that was never sampled",
       "It was broken",
       "N was 1",
       "Majority vote was used"
      ],
      "optsKn": [
       "ಎಂದಿಗೂ ಮಾದರಿ ಮಾಡದ ಸರಿ ಉತ್ತರವನ್ನು ಅದು ಆರಿಸಲಾಗದು",
       "ಅದು ಮುರಿದಿತ್ತು",
       "N 1 ಆಗಿತ್ತು",
       "ಬಹುಮತ ಮತ ಬಳಸಲಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "Why did majority vote help in the lab?",
      "qKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಬಹುಮತ ಮತ ಏಕೆ ಸಹಾಯ ಮಾಡಿತು?",
      "opts": [
       "Wrong answers were spread over seven values while the right answer was one value",
       "It always works",
       "It is a verifier",
       "The seed helped"
      ],
      "optsKn": [
       "ತಪ್ಪು ಉತ್ತರಗಳು ಏಳು ಮೌಲ್ಯಗಳಲ್ಲಿ ಹರಡಿದ್ದವು ಆದರೆ ಸರಿ ಉತ್ತರ ಒಂದೇ ಮೌಲ್ಯ",
       "ಅದು ಯಾವಾಗಲೂ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
       "ಅದು ಪರಿಶೀಲಕ",
       "seed ಸಹಾಯ ಮಾಡಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What was the threshold verifier true-positive rate on held-out data?",
      "qKn": "held-out ದತ್ತಾಂಶದಲ್ಲಿ ಮಿತಿ ಪರಿಶೀಲಕದ true-positive ದರ ಎಷ್ಟು?",
      "opts": [
       "0.343",
       "0.080",
       "0.750",
       "0.623"
      ],
      "optsKn": [
       "0.343",
       "0.080",
       "0.750",
       "0.623"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
