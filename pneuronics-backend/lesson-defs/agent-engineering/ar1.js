module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b32159e",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Automated Alignment Research (Part 1 of 3) — Weak-to-Strong Supervision",
 "titleKn": "ಸ್ವಯಂಚಾಲಿತ Alignment ಸಂಶೋಧನೆ (ಭಾಗ 1 / 3) — Weak-to-Strong ಮೇಲ್ವಿಚಾರಣೆ",
 "desc": "Train a toy student on weak labels and see when it outgrows its teacher and when it copies the teacher mistakes.",
 "descKn": "ಆಟಿಕೆ ವಿದ್ಯಾರ್ಥಿಯನ್ನು ದುರ್ಬಲ ಲೇಬಲ್‌ಗಳ ಮೇಲೆ ತರಬೇತಿ ನೀಡಿ ಅದು ಯಾವಾಗ ಶಿಕ್ಷಕನನ್ನು ಮೀರಿಸುತ್ತದೆ ಮತ್ತು ಯಾವಾಗ ಶಿಕ್ಷಕನ ತಪ್ಪುಗಳನ್ನು ನಕಲಿಸುತ್ತದೆ ನೋಡಿ.",
 "objectives": [
  "Build a weak labeler.",
  "Fit a student to weak labels.",
  "Compute PGR.",
  "Contrast random and systematic error.",
  "Sweep noise and data size."
 ],
 "objectivesKn": [
  "ದುರ್ಬಲ ಲೇಬಲರ್ ನಿರ್ಮಿಸಿ.",
  "ದುರ್ಬಲ ಲೇಬಲ್‌ಗಳಿಗೆ ವಿದ್ಯಾರ್ಥಿ ಹೊಂದಿಸಿ.",
  "PGR ಲೆಕ್ಕ ಹಾಕಿ.",
  "ಯಾದೃಚ್ಛಿಕ ಮತ್ತು ವ್ಯವಸ್ಥಿತ ದೋಷ ಹೋಲಿಸಿ.",
  "noise ಮತ್ತು ದತ್ತಾಂಶ ಗಾತ್ರ ಸ್ವೀಪ್ ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Automated Alignment Research (Part 1 of 3)",
    "textKn": "ಸ್ವಯಂಚಾಲಿತ Alignment ಸಂಶೋಧನೆ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: weak-to-strong supervision on a one-dimensional toy, random label noise against a systematic error band with the same weak accuracy, a noise sweep and the effect of more weakly labeled data. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind automated alignment research (weak-to-strong supervision, hash-chained research journals, role-based authorization, provenance checks, dependency contamination and reviewer blind spots), not the real software, and the student is a threshold fitted on random numbers, the agents are scripted functions, the journal and policy live in memory and the research graphs are random, and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. Results the lesson quotes about published automated alignment research are cited, not reproduced; the toy student, the journal, the policy dictionary and every error rate in the labs are invented to show the mechanics. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಏಕ-ಆಯಾಮದ ಆಟಿಕೆಯ ಮೇಲೆ weak-to-strong ಮೇಲ್ವಿಚಾರಣೆ, ಅದೇ ದುರ್ಬಲ ನಿಖರತೆಯ ವ್ಯವಸ್ಥಿತ ದೋಷ ಪಟ್ಟಿಯ ವಿರುದ್ಧ ಯಾದೃಚ್ಛಿಕ ಲೇಬಲ್ noise, noise ಸ್ವೀಪ್ ಮತ್ತು ಹೆಚ್ಚು ದುರ್ಬಲ-ಲೇಬಲ್ ದತ್ತಾಂಶದ ಪರಿಣಾಮ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಸ್ವಯಂಚಾಲಿತ alignment ಸಂಶೋಧನೆ (weak-to-strong ಮೇಲ್ವಿಚಾರಣೆ, ಹ್ಯಾಶ್-ಸರಪಳಿ ಸಂಶೋಧನಾ ಜರ್ನಲ್‌ಗಳು, ಪಾತ್ರ-ಆಧಾರಿತ ಅಧಿಕಾರ, provenance ಪರಿಶೀಲನೆ, ಅವಲಂಬನೆ ಕಲುಷಿತ ಮತ್ತು ವಿಮರ್ಶಕ blind spots) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ವಿದ್ಯಾರ್ಥಿ ಯಾದೃಚ್ಛಿಕ ಸಂಖ್ಯೆಗಳ ಮೇಲೆ ಹೊಂದಿಸಿದ ಮಿತಿ, agents scripted ಕಾರ್ಯಗಳು, ಜರ್ನಲ್ ಮತ್ತು ನೀತಿ ಮೆಮೊರಿಯಲ್ಲಿವೆ ಮತ್ತು ಸಂಶೋಧನಾ ಗ್ರಾಫ್‌ಗಳು ಯಾದೃಚ್ಛಿಕ, ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಪ್ರಕಟಿತ ಸ್ವಯಂಚಾಲಿತ alignment ಸಂಶೋಧನೆಯ ಬಗ್ಗೆ lesson ಉಲ್ಲೇಖಿಸುವ ಫಲಿತಾಂಶಗಳು ಉಲ್ಲೇಖಿತ, ಪುನರುತ್ಪಾದಿಸಲಾಗಿಲ್ಲ; ಆಟಿಕೆ ವಿದ್ಯಾರ್ಥಿ, ಜರ್ನಲ್, ನೀತಿ ನಿಘಂಟು ಮತ್ತು ಲ್ಯಾಬ್‌ಗಳ ಪ್ರತಿ ದೋಷ ದರ ಯಂತ್ರಶಾಸ್ತ್ರ ತೋರಿಸಲು ಕಲ್ಪಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Can a Student Beat Its Teacher?",
    "textKn": "ವಿದ್ಯಾರ್ಥಿ ತನ್ನ ಶಿಕ್ಷಕನನ್ನು ಮೀರಿಸಬಹುದೇ?",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Same Accuracy, Two Different Outcomes",
    "headingKn": "ಅದೇ ನಿಖರತೆ, ಎರಡು ಬೇರೆ ಫಲಿತಾಂಶಗಳು",
    "bodyEn": "Automated alignment research asks whether a weaker supervisor can still train a stronger system. This part builds the smallest version: numbers between 0 and 1 are positive above 0.5, a weak labeler is right about 80 percent of the time, and a student fits a threshold to the weak labels. One weak labeler makes random mistakes and the other always makes the same mistake in one band, and the lab measures how much of the gap to the true-label ceiling each student recovers.",
    "bodyKn": "ಸ್ವಯಂಚಾಲಿತ alignment ಸಂಶೋಧನೆ ದುರ್ಬಲ ಮೇಲ್ವಿಚಾರಕ ಇನ್ನೂ ಬಲವಾದ ವ್ಯವಸ್ಥೆಗೆ ತರಬೇತಿ ನೀಡಬಹುದೇ ಎಂದು ಕೇಳುತ್ತದೆ. ಈ ಭಾಗ ಚಿಕ್ಕ ಆವೃತ್ತಿ ನಿರ್ಮಿಸುತ್ತದೆ: 0 ಮತ್ತು 1 ರ ನಡುವಿನ ಸಂಖ್ಯೆಗಳು 0.5 ಮೇಲೆ ಧನಾತ್ಮಕ, ದುರ್ಬಲ ಲೇಬಲರ್ ಸುಮಾರು 80 ಶೇಕಡಾ ಸಮಯ ಸರಿ, ಮತ್ತು ವಿದ್ಯಾರ್ಥಿ ದುರ್ಬಲ ಲೇಬಲ್‌ಗಳಿಗೆ ಮಿತಿ ಹೊಂದಿಸುತ್ತದೆ. ಒಬ್ಬ ದುರ್ಬಲ ಲೇಬಲರ್ ಯಾದೃಚ್ಛಿಕ ತಪ್ಪು ಮಾಡುತ್ತಾನೆ ಮತ್ತು ಇನ್ನೊಬ್ಬ ಒಂದು ಪಟ್ಟಿಯಲ್ಲಿ ಯಾವಾಗಲೂ ಅದೇ ತಪ್ಪು ಮಾಡುತ್ತಾನೆ, ಮತ್ತು ಲ್ಯಾಬ್ ಪ್ರತಿ ವಿದ್ಯಾರ್ಥಿ ನಿಜ-ಲೇಬಲ್ ಮೇಲ್ಮಿತಿಯ ಅಂತರದಲ್ಲಿ ಎಷ್ಟು ಮರಳಿ ಪಡೆಯುತ್ತಾನೆ ಅಳೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Weak-to-Strong Supervision",
    "headingKn": "Weak-to-Strong ಮೇಲ್ವಿಚಾರಣೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a student can outgrow random noise but not shared mistakes</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">weak labeler</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">80% right</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">student</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">fits the labels</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">random noise</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">averages out</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">systematic error</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">is copied</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a student can outgrow random noise but not shared mistakes</text></svg>",
    "captionEn": "A strong student trained on weak labels.",
    "captionKn": "ದುರ್ಬಲ ಲೇಬಲ್‌ಗಳ ಮೇಲೆ ತರಬೇತಿ ಪಡೆದ ಬಲವಾದ ವಿದ್ಯಾರ್ಥಿ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Setup of the toy",
    "headingKn": "ಆಟಿಕೆಯ ಸೆಟಪ್",
    "headers": [
     "Item",
     "Lab setting"
    ],
    "rows": [
     [
      "true label",
      "x greater than 0.5"
     ],
     [
      "random weak labeler",
      "flips the label 20 percent of the time"
     ],
     [
      "systematic weak labeler",
      "always says negative for x between 0.5 and 0.7"
     ],
     [
      "student",
      "threshold with least disagreement on the weak labels"
     ],
     [
      "data",
      "200 points per seed, seeds 1 to 30"
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
    "filename": "ar_1.py",
    "headingEn": "Weak labelers, student and metrics",
    "headingKn": "ದುರ್ಬಲ ಲೇಬಲರ್‌ಗಳು, ವಿದ್ಯಾರ್ಥಿ ಮತ್ತು ಮಾಪಕಗಳು",
    "descEn": "weak_random and weak_systematic are the two weak labelers, fit_threshold is the student and accuracy measures a threshold on fresh points.",
    "descKn": "weak_random ಮತ್ತು weak_systematic ಎರಡು ದುರ್ಬಲ ಲೇಬಲರ್‌ಗಳು, fit_threshold ವಿದ್ಯಾರ್ಥಿ ಮತ್ತು accuracy ಹೊಸ ಬಿಂದುಗಳ ಮೇಲೆ ಮಿತಿ ಅಳೆಯುತ್ತದೆ.",
    "code": "def true_label(x):\r\n    return x > 0.5\r\n\r\n\r\ndef weak_random(r, x, flip):\r\n    return (not true_label(x)) if r.random() < flip else true_label(x)\r\n\r\n\r\ndef weak_systematic(x, lo=0.5, hi=0.7):\r\n    \"\"\"Always wrong on one band of inputs: calls inputs in [lo, hi] negative even though they are positive.\"\"\"\r\n    return False if lo <= x <= hi else true_label(x)\r\n\r\n\r\ndef fit_threshold(xs, labels):\r\n    \"\"\"The student: pick the threshold that minimises disagreement with the given labels (candidate thresholds are the data points).\"\"\"\r\n    best_t, best_err = 0.0, len(xs) + 1\r\n    for t in sorted(xs):\r\n        err = sum((x > t) != y for x, y in zip(xs, labels))\r\n        if err < best_err:\r\n            best_t, best_err = t, err\r\n    return best_t\r\n\r\n\r\ndef accuracy(t, r, n=4000):\r\n    pts = [r.random() for _ in range(n)]\r\n    return mean((x > t) == true_label(x) for x in pts)\r\n\r\n\r\ndef weak_accuracy(label_fn, r, n=4000):\r\n    pts = [r.random() for _ in range(n)]\r\n    return mean(label_fn(x) == true_label(x) for x in pts)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ar_1.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() compares random and systematic weak errors, sweeps the flip rate and sweeps the number of training points.",
    "descKn": "main() ಯಾದೃಚ್ಛಿಕ ಮತ್ತು ವ್ಯವಸ್ಥಿತ ದುರ್ಬಲ ದೋಷ ಹೋಲಿಸಿ, flip ದರ ಸ್ವೀಪ್ ಮಾಡಿ ಮತ್ತು ತರಬೇತಿ ಬಿಂದುಗಳ ಸಂಖ್ಯೆ ಸ್ವೀಪ್ ಮಾಡುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely measuring: random label noise against systematic error, same weak accuracy (200 training points, seeds 1 to 30)\")\r\n    for name in (\"random flips 20 percent\", \"systematic band error\"):\r\n        weak_acc, stu, ceil = [], [], []\r\n        for seed in range(1, 31):\r\n            r = random.Random(seed)\r\n            xs = [r.random() for _ in range(200)]\r\n            if name.startswith(\"random\"):\r\n                lab = [weak_random(r, x, 0.2) for x in xs]\r\n                wa = 0.8\r\n            else:\r\n                lab = [weak_systematic(x) for x in xs]\r\n                wa = weak_accuracy(weak_systematic, r)\r\n            t = fit_threshold(xs, lab)\r\n            tt = fit_threshold(xs, [true_label(x) for x in xs])\r\n            weak_acc.append(wa)\r\n            stu.append(accuracy(t, r))\r\n            ceil.append(accuracy(tt, r))\r\n        pgr = (mean(stu) - mean(weak_acc)) / (mean(ceil) - mean(weak_acc))\r\n        print(f\"{name:26}: weak labeler accuracy {mean(weak_acc):.3f} | student accuracy {mean(stu):.3f} | ceiling (true labels) {mean(ceil):.3f} | PGR {pgr:.2f}\")\r\n    print(\"both weak labelers are right about 80 percent of the time, yet the student recovers almost all of the gap when the errors are random and none of it when they are concentrated in one band, because fitting to labels averages out random noise and copies a systematic mistake; the toy student and uniform data are invented\")\r\n\r\n    section(\"2. Genuinely measuring: how much random noise the student tolerates (200 points, 30 seeds)\")\r\n    for flip in (0.1, 0.3, 0.45, 0.5):\r\n        stu = []\r\n        for seed in range(1, 31):\r\n            r = random.Random(seed)\r\n            xs = [r.random() for _ in range(200)]\r\n            lab = [weak_random(r, x, flip) for x in xs]\r\n            stu.append(accuracy(fit_threshold(xs, lab), r))\r\n        print(f\"flip rate {flip:.2f}: mean student accuracy {mean(stu):.3f} | worst of 30 {min(stu):.3f}\")\r\n    print(\"accuracy stays high at moderate noise and slips as the flip rate approaches 0.5, where the labels carry no information and the worst of 30 runs is 0.500; the mean of 0.703 at 0.5 is above a coin flip only because a threshold placed anywhere on the 0 to 1 range is still right for much of the range, and averaging only works while the noise is smaller than the signal\")\r\n\r\n    section(\"3. Genuinely measuring: more training points against noise (flip 0.3, 30 seeds)\")\r\n    for n in (20, 50, 200, 800):\r\n        stu = []\r\n        for seed in range(1, 31):\r\n            r = random.Random(seed)\r\n            xs = [r.random() for _ in range(n)]\r\n            lab = [weak_random(r, x, 0.3) for x in xs]\r\n            stu.append(accuracy(fit_threshold(xs, lab), r, 2000))\r\n        print(f\"{n:4d} points: mean student accuracy {mean(stu):.3f}\")\r\n    print(\"more weakly labeled data helps a student that is averaging out random noise, and the same extra data would not help against the systematic band error from section 1, since every extra point repeats the same mistake\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely measuring: random label noise against systematic error, same weak accuracy (200 training points, seeds 1 to 30) ---\nrandom flips 20 percent   : weak labeler accuracy 0.800 | student accuracy 0.990 | ceiling (true labels) 0.995 | PGR 0.97\nsystematic band error     : weak labeler accuracy 0.802 | student accuracy 0.805 | ceiling (true labels) 0.995 | PGR 0.02\nboth weak labelers are right about 80 percent of the time, yet the student recovers almost all of the gap when the errors are random and none of it when they are concentrated in one band, because fitting to labels averages out random noise and copies a systematic mistake; the toy student and uniform data are invented\n\n--- 2. Genuinely measuring: how much random noise the student tolerates (200 points, 30 seeds) ---\nflip rate 0.10: mean student accuracy 0.995 | worst of 30 0.987\nflip rate 0.30: mean student accuracy 0.974 | worst of 30 0.864\nflip rate 0.45: mean student accuracy 0.802 | worst of 30 0.500\nflip rate 0.50: mean student accuracy 0.703 | worst of 30 0.500\naccuracy stays high at moderate noise and slips as the flip rate approaches 0.5, where the labels carry no information and the worst of 30 runs is 0.500; the mean of 0.703 at 0.5 is above a coin flip only because a threshold placed anywhere on the 0 to 1 range is still right for much of the range, and averaging only works while the noise is smaller than the signal\n\n--- 3. Genuinely measuring: more training points against noise (flip 0.3, 30 seeds) ---\n  20 points: mean student accuracy 0.843\n  50 points: mean student accuracy 0.895\n 200 points: mean student accuracy 0.975\n 800 points: mean student accuracy 0.991\nmore weakly labeled data helps a student that is averaging out random noise, and the same extra data would not help against the systematic band error from section 1, since every extra point repeats the same mistake"
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
    "headingEn": "Genuinely Found: Random Against Systematic Error",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಯಾದೃಚ್ಛಿಕ ವಿರುದ್ಧ ವ್ಯವಸ್ಥಿತ ದೋಷ",
    "bodyEn": "Section 1: the random labeler had accuracy 0.800 and its student reached 0.990 against a ceiling of 0.995, a performance gap recovered of 0.97. The systematic labeler had accuracy 0.802 and its student reached only 0.805 against 0.995, a gap recovered of 0.02.",
    "bodyKn": "ವಿಭಾಗ 1: ಯಾದೃಚ್ಛಿಕ ಲೇಬಲರ್ ನಿಖರತೆ 0.800 ಮತ್ತು ಅದರ ವಿದ್ಯಾರ್ಥಿ ಮೇಲ್ಮಿತಿ 0.995 ವಿರುದ್ಧ 0.990 ತಲುಪಿದ, ಮರಳಿ ಪಡೆದ ಕಾರ್ಯಕ್ಷಮತೆ ಅಂತರ 0.97. ವ್ಯವಸ್ಥಿತ ಲೇಬಲರ್ ನಿಖರತೆ 0.802 ಮತ್ತು ಅದರ ವಿದ್ಯಾರ್ಥಿ 0.995 ವಿರುದ್ಧ ಕೇವಲ 0.805 ತಲುಪಿದ, ಮರಳಿ ಪಡೆದ ಅಂತರ 0.02."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Noise Level and Data Size",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Noise ಮಟ್ಟ ಮತ್ತು ದತ್ತಾಂಶ ಗಾತ್ರ",
    "bodyEn": "Section 2: flip rates 0.10, 0.30, 0.45 and 0.50 gave mean student accuracy 0.995, 0.974, 0.802 and 0.703, with the worst of 30 runs at 0.987, 0.864, 0.500 and 0.500. Section 3 at flip 0.3: 20, 50, 200 and 800 points gave 0.843, 0.895, 0.975 and 0.991.",
    "bodyKn": "ವಿಭಾಗ 2: flip ದರ 0.10, 0.30, 0.45 ಮತ್ತು 0.50 ಸರಾಸರಿ ವಿದ್ಯಾರ್ಥಿ ನಿಖರತೆ 0.995, 0.974, 0.802 ಮತ್ತು 0.703 ನೀಡಿತು, 30 ಓಟಗಳ ಕೆಟ್ಟದು 0.987, 0.864, 0.500 ಮತ್ತು 0.500. ವಿಭಾಗ 3 flip 0.3 ರಲ್ಲಿ: 20, 50, 200 ಮತ್ತು 800 ಬಿಂದುಗಳು 0.843, 0.895, 0.975 ಮತ್ತು 0.991 ನೀಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A weak supervisor can still produce a strong student when its mistakes are scattered, but the same accuracy offers no protection when the mistakes are concentrated, so the pattern of errors matters as much as the rate.",
    "bodyKn": "ದುರ್ಬಲ ಮೇಲ್ವಿಚಾರಕನ ತಪ್ಪುಗಳು ಚದುರಿದ್ದಾಗ ಅವನು ಇನ್ನೂ ಬಲವಾದ ವಿದ್ಯಾರ್ಥಿಯನ್ನು ಉತ್ಪಾದಿಸಬಹುದು, ಆದರೆ ತಪ್ಪುಗಳು ಕೇಂದ್ರೀಕೃತವಾದಾಗ ಅದೇ ನಿಖರತೆ ರಕ್ಷಣೆ ನೀಡುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ತಪ್ಪುಗಳ ಮಾದರಿ ದರದಷ್ಟೇ ಮುಖ್ಯ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"80 percent accurate labels give an 80 percent student.\" One student reached 0.990 and the other 0.805 from labelers with the same accuracy.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"80 ಶೇಕಡಾ ನಿಖರ ಲೇಬಲ್‌ಗಳು 80 ಶೇಕಡಾ ವಿದ್ಯಾರ್ಥಿ ನೀಡುತ್ತವೆ.\" ಒಂದೇ ನಿಖರತೆಯ ಲೇಬಲರ್‌ಗಳಿಂದ ಒಬ್ಬ ವಿದ್ಯಾರ್ಥಿ 0.990 ಮತ್ತು ಇನ್ನೊಬ್ಬ 0.805 ತಲುಪಿದರು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Weak labeler: a supervisor less capable than the student. PGR: performance gap recovered. Systematic error: the same mistake repeated on the same inputs. Ceiling: accuracy with true labels.",
    "bodyKn": "Weak labeler: ವಿದ್ಯಾರ್ಥಿಗಿಂತ ಕಡಿಮೆ ಸಾಮರ್ಥ್ಯದ ಮೇಲ್ವಿಚಾರಕ. PGR: ಮರಳಿ ಪಡೆದ ಕಾರ್ಯಕ್ಷಮತೆ ಅಂತರ. Systematic error: ಅದೇ ಒಳಹರಿವುಗಳಲ್ಲಿ ಪುನರಾವರ್ತಿತ ಅದೇ ತಪ್ಪು. Ceiling: ನಿಜ ಲೇಬಲ್‌ಗಳೊಂದಿಗೆ ನಿಖರತೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Random errors gave a PGR of 0.97. 2) Systematic errors gave 0.02. 3) At flip 0.45 the mean fell to 0.802. 4) More points lifted accuracy at flip 0.3 from 0.843 to 0.991. 5) The toy student is a fitted threshold, not a model.",
    "bodyKn": "1) ಯಾದೃಚ್ಛಿಕ ದೋಷಗಳು 0.97 PGR ನೀಡಿದವು. 2) ವ್ಯವಸ್ಥಿತ ದೋಷಗಳು 0.02 ನೀಡಿದವು. 3) flip 0.45 ರಲ್ಲಿ ಸರಾಸರಿ 0.802 ಕ್ಕೆ ಇಳಿಯಿತು. 4) ಹೆಚ್ಚು ಬಿಂದುಗಳು flip 0.3 ರಲ್ಲಿ ನಿಖರತೆಯನ್ನು 0.843 ರಿಂದ 0.991 ಗೆ ಏರಿಸಿದವು. 5) ಆಟಿಕೆ ವಿದ್ಯಾರ್ಥಿ ಹೊಂದಿಸಿದ ಮಿತಿ, ಮಾದರಿ ಅಲ್ಲ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What performance gap recovered did the random-noise labeler give?",
      "qKn": "ಯಾದೃಚ್ಛಿಕ-noise ಲೇಬಲರ್ ಯಾವ ಮರಳಿ ಪಡೆದ ಅಂತರ ನೀಡಿದ?",
      "opts": [
       "0.97",
       "0.02",
       "0.80",
       "1.00"
      ],
      "optsKn": [
       "0.97",
       "0.02",
       "0.80",
       "1.00"
      ],
      "correct": 0
     },
     {
      "q": "What did the student of the systematic labeler reach?",
      "qKn": "ವ್ಯವಸ್ಥಿತ ಲೇಬಲರ್‌ನ ವಿದ್ಯಾರ್ಥಿ ಏನು ತಲುಪಿದ?",
      "opts": [
       "0.805",
       "0.990",
       "0.995",
       "0.703"
      ],
      "optsKn": [
       "0.805",
       "0.990",
       "0.995",
       "0.703"
      ],
      "correct": 0
     },
     {
      "q": "Why could extra data not fix the systematic error?",
      "qKn": "ಹೆಚ್ಚುವರಿ ದತ್ತಾಂಶ ವ್ಯವಸ್ಥಿತ ದೋಷವನ್ನು ಏಕೆ ಸರಿಪಡಿಸಲಾರದು?",
      "opts": [
       "Every extra point repeats the same mistake",
       "Extra data is always noisy",
       "The student ignores data",
       "The ceiling is zero"
      ],
      "optsKn": [
       "ಪ್ರತಿ ಹೆಚ್ಚುವರಿ ಬಿಂದು ಅದೇ ತಪ್ಪನ್ನು ಪುನರಾವರ್ತಿಸುತ್ತದೆ",
       "ಹೆಚ್ಚುವರಿ ದತ್ತಾಂಶ ಯಾವಾಗಲೂ noisy",
       "ವಿದ್ಯಾರ್ಥಿ ದತ್ತಾಂಶ ನಿರ್ಲಕ್ಷಿಸುತ್ತಾನೆ",
       "ಮೇಲ್ಮಿತಿ ಶೂನ್ಯ"
      ],
      "correct": 0
     },
     {
      "q": "What was the mean student accuracy at flip rate 0.45?",
      "qKn": "flip ದರ 0.45 ರಲ್ಲಿ ಸರಾಸರಿ ವಿದ್ಯಾರ್ಥಿ ನಿಖರತೆ ಎಷ್ಟು?",
      "opts": [
       "0.802",
       "0.995",
       "0.974",
       "0.500"
      ],
      "optsKn": [
       "0.802",
       "0.995",
       "0.974",
       "0.500"
      ],
      "correct": 0
     },
     {
      "q": "Does this toy show that real weak-to-strong training works?",
      "qKn": "ಈ ಆಟಿಕೆ ನಿಜ weak-to-strong ತರಬೇತಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತದೆಯೇ?",
      "opts": [
       "No, it only shows the mechanics with a fitted threshold",
       "Yes, it is a measurement of a real model",
       "Yes, it proves it in general",
       "Only for 800 points"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಅದು ಹೊಂದಿಸಿದ ಮಿತಿಯೊಂದಿಗೆ ಯಂತ್ರಶಾಸ್ತ್ರ ಮಾತ್ರ ತೋರಿಸುತ್ತದೆ",
       "ಹೌದು, ಅದು ನಿಜ ಮಾದರಿಯ ಅಳತೆ",
       "ಹೌದು, ಅದು ಸಾಮಾನ್ಯವಾಗಿ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ",
       "800 ಬಿಂದುಗಳಿಗೆ ಮಾತ್ರ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
