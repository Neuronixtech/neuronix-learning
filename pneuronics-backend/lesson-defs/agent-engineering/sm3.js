module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af75af573f2ce9842419441",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Design Success Metrics Before the Result Exists (Part 3 of 3) — Uncertainty, Policy and Offline Limits",
 "titleKn": "ಫಲಿತಾಂಶ ಬರುವ ಮುನ್ನ ಯಶಸ್ಸಿನ ಮಾಪನ ವಿನ್ಯಾಸಗೊಳಿಸಿ (ಭಾಗ 3 / 3) — ಅನಿಶ್ಚಿತತೆ, ನೀತಿ ಮತ್ತು Offline ಮಿತಿಗಳು",
 "desc": "Compute metrics from raw records, put intervals on small samples and decide pass, fail or collect more evidence.",
 "descKn": "ಕಚ್ಚಾ ದಾಖಲೆಗಳಿಂದ ಮಾಪನ ಲೆಕ್ಕ ಹಾಕಿ, ಸಣ್ಣ ಮಾದರಿಗಳಿಗೆ ಅಂತರ ಹಾಕಿ ಮತ್ತು pass, fail ಅಥವಾ collect more evidence ನಿರ್ಧರಿಸಿ.",
 "objectives": [
  "Compute metrics from records.",
  "Add intervals.",
  "Decide pass, fail or more evidence.",
  "Track a counter-metric.",
  "State offline limits."
 ],
 "objectivesKn": [
  "ದಾಖಲೆಗಳಿಂದ ಮಾಪನ ಲೆಕ್ಕ ಹಾಕಿ.",
  "ಅಂತರ ಸೇರಿಸಿ.",
  "pass, fail ಅಥವಾ ಹೆಚ್ಚು ಸಾಕ್ಷ್ಯ ನಿರ್ಧರಿಸಿ.",
  "counter-metric ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.",
  "offline ಮಿತಿಗಳನ್ನು ಹೇಳಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Design Success Metrics Before the Result Exists (Part 3 of 3)",
    "textKn": "ಫಲಿತಾಂಶ ಬರುವ ಮುನ್ನ ಯಶಸ್ಸಿನ ಮಾಪನ ವಿನ್ಯಾಸಗೊಳಿಸಿ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: metrics computed from raw records, a seeded bootstrap and a Wilson interval on a small sample, a three-way decision policy, a counter-metric revealing a hidden cost and the gap between offline replay and a live pilot. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind designing success metrics before the result exists (Goal-Question-Metric plans, guardrails, thresholds, uncertainty and decision policies), not the real software, and the candidates, records and numbers are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original main.py was not supplied, and the lesson text names only its output artifact, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಕಚ್ಚಾ ದಾಖಲೆಗಳಿಂದ ಲೆಕ್ಕಹಾಕಿದ ಮಾಪನಗಳು, ಸಣ್ಣ ಮಾದರಿಯ ಮೇಲೆ seeded bootstrap ಮತ್ತು Wilson ಅಂತರ, ಮೂರು-ಮಾರ್ಗ ನಿರ್ಧಾರ ನೀತಿ, ಗುಪ್ತ ವೆಚ್ಚ ಬಹಿರಂಗಪಡಿಸುವ counter-metric ಮತ್ತು offline replay ಮತ್ತು ಲೈವ್ pilot ನಡುವಿನ ಅಂತರ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಫಲಿತಾಂಶ ಬರುವ ಮುನ್ನ ಯಶಸ್ಸಿನ ಮಾಪನ ವಿನ್ಯಾಸ (Goal-Question-Metric ಯೋಜನೆಗಳು, guardrails, ಮಿತಿಗಳು, ಅನಿಶ್ಚಿತತೆ ಮತ್ತು ನಿರ್ಧಾರ ನೀತಿಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಅಭ್ಯರ್ಥಿಗಳು, ದಾಖಲೆಗಳು ಮತ್ತು ಸಂಖ್ಯೆಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ಪಠ್ಯ ಅದರ ಔಟ್‌ಪುಟ್ ಕಲಾಕೃತಿಯನ್ನು ಮಾತ್ರ ಹೆಸರಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Twelve Records Say Less Than They Seem To",
    "textKn": "ಹನ್ನೆರಡು ದಾಖಲೆಗಳು ತೋರುವುದಕ್ಕಿಂತ ಕಡಿಮೆ ಹೇಳುತ್ತವೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Compute, Bound, Decide",
    "headingKn": "ಲೆಕ್ಕ, ಮಿತಿ, ನಿರ್ಧಾರ",
    "bodyEn": "This part computes the outcome metrics from twelve invented replayed incidents, puts a Wilson interval on accuracy and a seeded bootstrap interval on the median, builds a pass, fail or collect-more policy on the interval, shows a counter-metric on review time that exposes a hidden cost and ends on why an offline replay is not evidence about a live pilot. The records are invented and the live-week numbers are random draws labelled as illustration.",
    "bodyKn": "ಈ ಭಾಗ ಹನ್ನೆರಡು ಕಲ್ಪಿತ replay ಮಾಡಿದ incidents ಗಳಿಂದ outcome ಮಾಪನ ಲೆಕ್ಕ ಹಾಕುತ್ತದೆ, ನಿಖರತೆಗೆ Wilson ಅಂತರ ಮತ್ತು median ಗೆ seeded bootstrap ಅಂತರ ಹಾಕುತ್ತದೆ, ಅಂತರದ ಮೇಲೆ pass, fail ಅಥವಾ collect-more ನೀತಿ ಕಟ್ಟುತ್ತದೆ, ಗುಪ್ತ ವೆಚ್ಚ ಬಹಿರಂಗಪಡಿಸುವ review ಸಮಯದ counter-metric ತೋರಿಸುತ್ತದೆ ಮತ್ತು offline replay ಲೈವ್ pilot ಬಗ್ಗೆ ಸಾಕ್ಷ್ಯವಲ್ಲ ಏಕೆ ಎಂದು ಮುಗಿಸುತ್ತದೆ. ದಾಖಲೆಗಳು ಕಲ್ಪಿತ ಮತ್ತು ಲೈವ್-ವಾರದ ಸಂಖ್ಯೆಗಳು ವಿವರಣೆ ಎಂದು ಲೇಬಲ್ ಮಾಡಿದ ಯಾದೃಚ್ಛಿಕ ಆಯ್ಕೆಗಳು."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Uncertainty and Decisions",
    "headingKn": "ಅನಿಶ್ಚಿತತೆ ಮತ್ತು ನಿರ್ಧಾರಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a small sample gives a wide interval</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">records</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">raw to metric</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">interval</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">n = 12 is wide</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">policy</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">pass / fail / more</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">offline</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">is not live</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a small sample gives a wide interval</text></svg>",
    "captionEn": "A wide interval turns a pass or fail into collect more evidence.",
    "captionKn": "ಅಗಲ ಅಂತರ ಪಾಸ್ ಅಥವಾ ವೈಫಲ್ಯವನ್ನು ಹೆಚ್ಚು ಸಾಕ್ಷ್ಯ ಸಂಗ್ರಹಿಸಿ ಎಂದು ಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Results on twelve invented records",
    "headingKn": "ಹನ್ನೆರಡು ಕಲ್ಪಿತ ದಾಖಲೆಗಳ ಫಲಿತಾಂಶ",
    "headers": [
     "Quantity",
     "Value"
    ],
    "rows": [
     [
      "accuracy",
      "10/12 = 0.833, Wilson 0.552 to 0.953"
     ],
     [
      "median minutes",
      "1.55, bootstrap 1.15 to 2.2"
     ],
     [
      "mean minutes",
      "1.79"
     ],
     [
      "median review minutes",
      "3.25 (2.9 right, 6.5 wrong)"
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
    "filename": "sm_3.py",
    "headingEn": "Intervals and the policy",
    "headingKn": "ಅಂತರಗಳು ಮತ್ತು ನೀತಿ",
    "descEn": "wilson gives an interval for a proportion, bootstrap_median resamples with a fixed seed, and policy returns pass, fail or collect more evidence by comparing the interval with a threshold in the metric's direction.",
    "descKn": "wilson ಅನುಪಾತಕ್ಕೆ ಅಂತರ ನೀಡುತ್ತದೆ, bootstrap_median ನಿಗದಿತ seed ಜೊತೆ ಮರುಮಾದರಿ ಮಾಡುತ್ತದೆ, ಮತ್ತು policy ಅಂತರವನ್ನು ಮಾಪನದ ದಿಕ್ಕಿನಲ್ಲಿ ಮಿತಿಯೊಂದಿಗೆ ಹೋಲಿಸಿ pass, fail ಅಥವಾ collect more evidence ಮರಳಿಸುತ್ತದೆ.",
    "code": "def wilson(k, n, z=1.96):\n    p = k / n\n    d = 1 + z * z / n\n    c = (p + z * z / (2 * n)) / d\n    h = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / d\n    return round(c - h, 3), round(c + h, 3)\n\n\ndef bootstrap_median(xs, reps=2000, seed=7):\n    rng = random.Random(seed)\n    meds = sorted(statistics.median(rng.choices(xs, k=len(xs))) for _ in range(reps))\n    return round(meds[int(0.025 * reps)], 2), round(meds[int(0.975 * reps)], 2)\n\n\ndef policy(lo, hi, thr, higher_is_better):\n    if higher_is_better:\n        return \"pass\" if lo >= thr else (\"fail\" if hi < thr else \"collect more evidence\")\n    return \"pass\" if hi <= thr else (\"fail\" if lo > thr else \"collect more evidence\")"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "sm_3.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() computes metrics from raw records, adds intervals, applies the policy at several thresholds, computes review-time medians and prints illustrative live-week numbers.",
    "descKn": "main() ಕಚ್ಚಾ ದಾಖಲೆಗಳಿಂದ ಮಾಪನ ಲೆಕ್ಕ ಹಾಕಿ, ಅಂತರ ಸೇರಿಸಿ, ಹಲವು ಮಿತಿಗಳಲ್ಲಿ ನೀತಿ ಅನ್ವಯಿಸಿ, review-ಸಮಯ median ಲೆಕ್ಕ ಹಾಕಿ ಮತ್ತು ವಿವರಣಾತ್ಮಕ ಲೈವ್-ವಾರ ಸಂಖ್ಯೆ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    times = [r[0] for r in RECORDS]\n    correct = sum(1 for r in RECORDS if r[1])\n    section(\"1. Genuinely computing: outcome metrics from twelve invented records\")\n    print(\"median minutes:\", statistics.median(times), \"| mean minutes:\", round(statistics.mean(times), 2), \"| accuracy:\", f\"{correct}/{len(RECORDS)} = {correct / len(RECORDS):.3f}\")\n    print(\"the mean is above the median because a few slow incidents (3.8, 2.9 and 2.4 minutes) pull it up; a target written on the mean and one written on the median would disagree here, so the plan has to say which\")\n\n    section(\"2. Genuinely computing: uncertainty at n = 12\")\n    print(\"accuracy 95% Wilson interval:\", wilson(correct, len(RECORDS)))\n    print(\"median minutes 95% bootstrap interval (2000 resamples, seed 7):\", bootstrap_median(times))\n    print(\"with twelve records the accuracy interval spans about 0.55 to 0.95 and the median interval runs from 1.15 to 2.2 minutes, so a point value of 0.833 or 1.55 minutes says much less than it appears to; the resampling is seeded so the numbers repeat\")\n\n    section(\"3. Genuinely running: a decision policy built on the interval\")\n    lo, hi = wilson(correct, len(RECORDS))\n    print(\"accuracy vs 0.90 :\", policy(lo, hi, 0.90, True), \"| accuracy vs 0.50:\", policy(lo, hi, 0.50, True), \"| accuracy vs 0.99:\", policy(lo, hi, 0.99, True))\n    mlo, mhi = bootstrap_median(times)\n    print(\"median vs 2.0 min:\", policy(mlo, mhi, 2.0, False), \"| median vs 3.0 min:\", policy(mlo, mhi, 3.0, False), \"| median vs 0.5 min:\", policy(mlo, mhi, 0.5, False))\n    print(\"the interval gives three answers instead of two: at 0.90 the evidence is not enough, at 0.50 it passes, at 0.99 it fails, and the same shape appears for the median; the thresholds are examples\")\n\n    section(\"4. Genuinely computing: a counter-metric that exposes a hidden cost\")\n    review = [r[2] for r in RECORDS]\n    wrong_review = [r[2] for r in RECORDS if not r[1]]\n    right_review = [r[2] for r in RECORDS if r[1]]\n    print(\"median review minutes overall:\", statistics.median(review), \"| when the answer was right:\", statistics.median(right_review), \"| when it was wrong:\", statistics.median(wrong_review))\n    print(\"total minutes per incident (identify + review), median:\", statistics.median([r[0] + r[2] for r in RECORDS]))\n    print(\"the assistant is quick to answer and engineers then spend longer checking it, and they spend the most on the answers that were wrong (a median of 6.5 minutes against 2.9); a plan that measured only the time to identify would have hidden that second cost\")\n\n    section(\"5. Genuinely running: offline replay is not a live pilot\")\n    print(\"offline dataset: replayed incidents with known answers, n =\", len(RECORDS))\n    print(\"not present in it: concurrent incidents, partial outages, engineers under pressure, new services added after the dataset was taken\")\n    rng = random.Random(3)\n    drift = [min(1.0, max(0.0, 0.83 + rng.uniform(-0.25, 0.1))) for _ in range(5)]\n    print(\"illustrative: accuracy over five invented live weeks (random draws from a seeded generator, not data):\", [round(x, 2) for x in drift])\n    print(\"the live-week numbers are made up to show the shape of the problem and are not a measurement; an offline pass is evidence about the replayed incidents, and what happens in a pilot is a separate claim that needs its own plan and its own sample\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely computing: outcome metrics from twelve invented records ---\nmedian minutes: 1.55 | mean minutes: 1.79 | accuracy: 10/12 = 0.833\nthe mean is above the median because a few slow incidents (3.8, 2.9 and 2.4 minutes) pull it up; a target written on the mean and one written on the median would disagree here, so the plan has to say which\n\n--- 2. Genuinely computing: uncertainty at n = 12 ---\naccuracy 95% Wilson interval: (0.552, 0.953)\nmedian minutes 95% bootstrap interval (2000 resamples, seed 7): (1.15, 2.2)\nwith twelve records the accuracy interval spans about 0.55 to 0.95 and the median interval runs from 1.15 to 2.2 minutes, so a point value of 0.833 or 1.55 minutes says much less than it appears to; the resampling is seeded so the numbers repeat\n\n--- 3. Genuinely running: a decision policy built on the interval ---\naccuracy vs 0.90 : collect more evidence | accuracy vs 0.50: pass | accuracy vs 0.99: fail\nmedian vs 2.0 min: collect more evidence | median vs 3.0 min: pass | median vs 0.5 min: fail\nthe interval gives three answers instead of two: at 0.90 the evidence is not enough, at 0.50 it passes, at 0.99 it fails, and the same shape appears for the median; the thresholds are examples\n\n--- 4. Genuinely computing: a counter-metric that exposes a hidden cost ---\nmedian review minutes overall: 3.25 | when the answer was right: 2.9 | when it was wrong: 6.5\ntotal minutes per incident (identify + review), median: 5.15\nthe assistant is quick to answer and engineers then spend longer checking it, and they spend the most on the answers that were wrong (a median of 6.5 minutes against 2.9); a plan that measured only the time to identify would have hidden that second cost\n\n--- 5. Genuinely running: offline replay is not a live pilot ---\noffline dataset: replayed incidents with known answers, n = 12\nnot present in it: concurrent incidents, partial outages, engineers under pressure, new services added after the dataset was taken\nillustrative: accuracy over five invented live weeks (random draws from a seeded generator, not data): [0.66, 0.77, 0.71, 0.79, 0.8]\nthe live-week numbers are made up to show the shape of the problem and are not a measurement; an offline pass is evidence about the replayed incidents, and what happens in a pilot is a separate claim that needs its own plan and its own sample"
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
    "headingEn": "Genuinely Found: Mean Above Median, and Wide Intervals",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Median ಗಿಂತ ಮೇಲಿನ Mean ಮತ್ತು ಅಗಲ ಅಂತರಗಳು",
    "bodyEn": "Section 1: the median was 1.55 minutes and the mean 1.79 because 3.8, 2.9 and 2.4 minute incidents pull it up, with accuracy 10/12 = 0.833. Section 2: the Wilson interval for accuracy was 0.552 to 0.953 and the seeded bootstrap interval for the median was 1.15 to 2.2 minutes.",
    "bodyKn": "ವಿಭಾಗ 1: median 1.55 ನಿಮಿಷ ಮತ್ತು mean 1.79 ಏಕೆಂದರೆ 3.8, 2.9 ಮತ್ತು 2.4 ನಿಮಿಷದ incidents ಅದನ್ನು ಮೇಲೆಳೆಯುತ್ತವೆ, ನಿಖರತೆ 10/12 = 0.833. ವಿಭಾಗ 2: ನಿಖರತೆಯ Wilson ಅಂತರ 0.552 ರಿಂದ 0.953 ಮತ್ತು median ನ seeded bootstrap ಅಂತರ 1.15 ರಿಂದ 2.2 ನಿಮಿಷ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Three Answers, a Hidden Review Cost and an Offline Limit",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮೂರು ಉತ್ತರಗಳು, ಗುಪ್ತ Review ವೆಚ್ಚ ಮತ್ತು Offline ಮಿತಿ",
    "bodyEn": "Section 3: accuracy against 0.90 gave collect more evidence, against 0.50 pass and against 0.99 fail, and the median showed the same three shapes at 2.0, 3.0 and 0.5 minutes. Section 4: median review time was 3.25 minutes overall, 2.9 for right answers and 6.5 for wrong ones, with a total of 5.15 minutes per incident. Section 5: four kinds of live conditions were absent from the dataset and the five live-week values were random draws labelled as illustration, not data.",
    "bodyKn": "ವಿಭಾಗ 3: 0.90 ವಿರುದ್ಧ ನಿಖರತೆ collect more evidence, 0.50 ವಿರುದ್ಧ pass ಮತ್ತು 0.99 ವಿರುದ್ಧ fail ನೀಡಿತು, ಮತ್ತು median 2.0, 3.0 ಮತ್ತು 0.5 ನಿಮಿಷದಲ್ಲಿ ಅದೇ ಮೂರು ರೂಪ ತೋರಿಸಿತು. ವಿಭಾಗ 4: median review ಸಮಯ ಒಟ್ಟಾರೆ 3.25 ನಿಮಿಷ, ಸರಿಯಾದ ಉತ್ತರಗಳಿಗೆ 2.9 ಮತ್ತು ತಪ್ಪಿಗೆ 6.5, ಪ್ರತಿ incident ಗೆ ಒಟ್ಟು 5.15 ನಿಮಿಷ. ವಿಭಾಗ 5: ನಾಲ್ಕು ರೀತಿಯ ಲೈವ್ ಪರಿಸ್ಥಿತಿಗಳು ದತ್ತಾಂಶದಲ್ಲಿ ಇರಲಿಲ್ಲ ಮತ್ತು ಐದು ಲೈವ್-ವಾರದ ಮೌಲ್ಯಗಳು ವಿವರಣೆ ಎಂದು ಲೇಬಲ್ ಮಾಡಿದ ಯಾದೃಚ್ಛಿಕ ಆಯ್ಕೆಗಳು, ದತ್ತಾಂಶ ಅಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A point estimate from a dozen records invites a pass or fail the data cannot support, and an offline pass says nothing about live conditions it never included.",
    "bodyKn": "ಒಂದು ಡಜನ್ ದಾಖಲೆಗಳ ಬಿಂದು ಅಂದಾಜು ದತ್ತಾಂಶ ಬೆಂಬಲಿಸಲಾಗದ ಪಾಸ್ ಅಥವಾ ವೈಫಲ್ಯಕ್ಕೆ ಆಹ್ವಾನಿಸುತ್ತದೆ, ಮತ್ತು offline ಪಾಸ್ ಅದು ಸೇರಿಸದ ಲೈವ್ ಪರಿಸ್ಥಿತಿಗಳ ಬಗ್ಗೆ ಏನೂ ಹೇಳುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"83 percent on twelve records is 83 percent.\" The interval ran from 0.55 to 0.95.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಹನ್ನೆರಡು ದಾಖಲೆಗಳಲ್ಲಿ 83 ಶೇಕಡಾ ಎಂದರೆ 83 ಶೇಕಡಾ.\" ಅಂತರ 0.55 ರಿಂದ 0.95 ವರೆಗೆ ಇತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Wilson interval: an interval for a proportion. Bootstrap: resampling to estimate uncertainty. Offline replay: running on recorded cases. Pilot: a limited live trial.",
    "bodyKn": "Wilson interval: ಅನುಪಾತಕ್ಕೆ ಅಂತರ. Bootstrap: ಅನಿಶ್ಚಿತತೆ ಅಂದಾಜಿಸಲು ಮರುಮಾದರಿ. Offline replay: ದಾಖಲಿತ ಪ್ರಕರಣಗಳ ಮೇಲೆ ಓಡಿಸುವುದು. Pilot: ಸೀಮಿತ ಲೈವ್ ಪ್ರಯೋಗ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Mean and median disagreed. 2) n = 12 gave wide intervals. 3) The interval gave pass, fail or more evidence. 4) Review time exposed a hidden cost. 5) Offline is not a pilot.",
    "bodyKn": "1) Mean ಮತ್ತು median ಒಪ್ಪಲಿಲ್ಲ. 2) n = 12 ಅಗಲ ಅಂತರ ನೀಡಿತು. 3) ಅಂತರ pass, fail ಅಥವಾ ಹೆಚ್ಚು ಸಾಕ್ಷ್ಯ ನೀಡಿತು. 4) Review ಸಮಯ ಗುಪ್ತ ವೆಚ್ಚ ಬಹಿರಂಗಪಡಿಸಿತು. 5) Offline ಎಂದರೆ pilot ಅಲ್ಲ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What was the Wilson interval for 10 of 12?",
      "qKn": "12 ರಲ್ಲಿ 10 ಕ್ಕೆ Wilson ಅಂತರ ಏನು?",
      "opts": [
       "0.552 to 0.953",
       "0.80 to 0.86",
       "0.90 to 1.00",
       "0.0 to 1.0"
      ],
      "optsKn": [
       "0.552 ರಿಂದ 0.953",
       "0.80 ರಿಂದ 0.86",
       "0.90 ರಿಂದ 1.00",
       "0.0 ರಿಂದ 1.0"
      ],
      "correct": 0
     },
     {
      "q": "What did accuracy against a 0.90 threshold give?",
      "qKn": "0.90 ಮಿತಿ ವಿರುದ್ಧ ನಿಖರತೆ ಏನು ನೀಡಿತು?",
      "opts": [
       "collect more evidence",
       "pass",
       "fail",
       "error"
      ],
      "optsKn": [
       "collect more evidence",
       "pass",
       "fail",
       "ದೋಷ"
      ],
      "correct": 0
     },
     {
      "q": "How did review time differ for wrong answers?",
      "qKn": "ತಪ್ಪು ಉತ್ತರಗಳಿಗೆ review ಸಮಯ ಹೇಗೆ ಭಿನ್ನವಾಗಿತ್ತು?",
      "opts": [
       "6.5 minutes against 2.9",
       "The same",
       "Lower",
       "Zero"
      ],
      "optsKn": [
       "2.9 ಗೆ ವಿರುದ್ಧ 6.5 ನಿಮಿಷ",
       "ಅದೇ",
       "ಕಡಿಮೆ",
       "ಶೂನ್ಯ"
      ],
      "correct": 0
     },
     {
      "q": "Why is the mean above the median here?",
      "qKn": "ಇಲ್ಲಿ mean median ಗಿಂತ ಏಕೆ ಹೆಚ್ಚು?",
      "opts": [
       "A few slow incidents pull it up",
       "The data is signed",
       "The sample is large",
       "The threshold moved"
      ],
      "optsKn": [
       "ಕೆಲವು ನಿಧಾನ incidents ಅದನ್ನು ಮೇಲೆಳೆಯುತ್ತವೆ",
       "ದತ್ತಾಂಶಕ್ಕೆ ಸಹಿ ಇದೆ",
       "ಮಾದರಿ ದೊಡ್ಡದು",
       "ಮಿತಿ ಚಲಿಸಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What are the live-week numbers in the lab?",
      "qKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿನ ಲೈವ್-ವಾರ ಸಂಖ್ಯೆಗಳು ಯಾವುವು?",
      "opts": [
       "Random illustration, not data",
       "Measured data",
       "A pilot result",
       "A signed report"
      ],
      "optsKn": [
       "ಯಾದೃಚ್ಛಿಕ ವಿವರಣೆ, ದತ್ತಾಂಶ ಅಲ್ಲ",
       "ಅಳೆದ ದತ್ತಾಂಶ",
       "pilot ಫಲಿತಾಂಶ",
       "ಸಹಿ ಮಾಡಿದ ವರದಿ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
