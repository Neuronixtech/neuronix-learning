module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b3215a7",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Autonomous Coding Agent Landscape (SWE-bench, CodeAct) (Part 3 of 3) — Reading Benchmark Numbers",
 "titleKn": "ಸ್ವಾಯತ್ತ ಕೋಡಿಂಗ್ Agent ಭೂದೃಶ್ಯ (SWE-bench, CodeAct) (ಭಾಗ 3 / 3) — Benchmark ಸಂಖ್ಯೆಗಳನ್ನು ಓದುವುದು",
 "desc": "Compute workload-weighted scores, confidence intervals and the effect of memorized benchmark tasks.",
 "descKn": "ಕೆಲಸಭಾರ-ತೂಕದ ಅಂಕ, ವಿಶ್ವಾಸ ಅಂತರ ಮತ್ತು ನೆನಪಿಟ್ಟ benchmark ಕಾರ್ಯಗಳ ಪರಿಣಾಮ ಲೆಕ್ಕ ಹಾಕಿ.",
 "objectives": [
  "Weight scores by your workload.",
  "See a ranking flip.",
  "Compute a Wilson interval.",
  "Show contamination inflation.",
  "Label invented rates."
 ],
 "objectivesKn": [
  "ನಿಮ್ಮ ಕೆಲಸಭಾರದಿಂದ ಅಂಕ ತೂಗಿ.",
  "ಶ್ರೇಣಿ ಬದಲಾಗುವುದನ್ನು ನೋಡಿ.",
  "Wilson ಅಂತರ ಲೆಕ್ಕ ಹಾಕಿ.",
  "ಕಲುಷಿತ ಉಬ್ಬುವಿಕೆ ತೋರಿಸಿ.",
  "ಕಲ್ಪಿತ ದರಗಳಿಗೆ ಲೇಬಲ್ ಹಾಕಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Autonomous Coding Agent Landscape (SWE-bench, CodeAct) (Part 3 of 3)",
    "textKn": "ಸ್ವಾಯತ್ತ ಕೋಡಿಂಗ್ Agent ಭೂದೃಶ್ಯ (SWE-bench, CodeAct) (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: workload-weighted scores, a ranking that flips with the task mix, Wilson intervals for small benchmarks and the inflation caused by memorized tasks. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the autonomous coding agent landscape (JSON tool-call versus code-as-action scaffolds, scope contracts, why exec with restricted builtins is not a sandbox, workload-weighted scores, confidence intervals and benchmark contamination), not the real software, and the agents are scripted planners and fixed code snippets over an in-memory file system, the success rates and task mixes are invented, and no language model or published benchmark is run, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The lesson quotes a JSON-versus-CodeAct comparison (JSON 2 of 4 tasks in 16 turns, CodeAct 4 of 4 in 7 turns with 26 operations), published SWE-bench numbers and a workload-weighted success of 71.5 percent; those figures are cited from the lesson and were not reproduced, and our lab produced different counts on its own invented tasks, which the lesson reports as they came out. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಕೆಲಸಭಾರ-ತೂಕದ ಅಂಕಗಳು, ಕಾರ್ಯ ಮಿಶ್ರಣದೊಂದಿಗೆ ಬದಲಾಗುವ ಶ್ರೇಣಿ, ಚಿಕ್ಕ benchmarks ಗೆ Wilson ಅಂತರಗಳು ಮತ್ತು ನೆನಪಿಟ್ಟ ಕಾರ್ಯಗಳಿಂದ ಉಂಟಾಗುವ ಉಬ್ಬುವಿಕೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಸ್ವಾಯತ್ತ ಕೋಡಿಂಗ್ agent ಭೂದೃಶ್ಯ (JSON tool-call ವಿರುದ್ಧ code-as-action scaffolds, scope ಒಪ್ಪಂದಗಳು, ನಿರ್ಬಂಧಿತ builtins ಇರುವ exec ಏಕೆ sandbox ಅಲ್ಲ, ಕೆಲಸಭಾರ-ತೂಕದ ಅಂಕಗಳು, ವಿಶ್ವಾಸ ಅಂತರಗಳು ಮತ್ತು benchmark ಕಲುಷಿತ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು agents ಮೆಮೊರಿ ಫೈಲ್ ವ್ಯವಸ್ಥೆಯ ಮೇಲೆ scripted ಯೋಜಕರು ಮತ್ತು ನಿಗದಿತ ಕೋಡ್ ತುಣುಕುಗಳು, ಯಶಸ್ಸು ದರಗಳು ಮತ್ತು ಕೆಲಸ ಮಿಶ್ರಣಗಳು ಕಲ್ಪಿತ, ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಅಥವಾ ಪ್ರಕಟಿತ benchmark ಓಡಿಸಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. lesson JSON-ವಿರುದ್ಧ-CodeAct ಹೋಲಿಕೆ (JSON 4 ರಲ್ಲಿ 2 ಕಾರ್ಯ 16 ಟರ್ನ್‌ಗಳಲ್ಲಿ, CodeAct 4 ರಲ್ಲಿ 4, 7 ಟರ್ನ್‌ಗಳು ಮತ್ತು 26 ಕಾರ್ಯಾಚರಣೆ), ಪ್ರಕಟಿತ SWE-bench ಸಂಖ್ಯೆಗಳು ಮತ್ತು 71.5 ಶೇಕಡಾ ಕೆಲಸಭಾರ-ತೂಕದ ಯಶಸ್ಸನ್ನು ಉಲ್ಲೇಖಿಸುತ್ತದೆ; ಆ ಅಂಕಿಗಳು lesson ನಿಂದ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಪುನರುತ್ಪಾದಿಸಲಾಗಿಲ್ಲ, ಮತ್ತು ನಮ್ಮ ಲ್ಯಾಬ್ ತನ್ನ ಕಲ್ಪಿತ ಕಾರ್ಯಗಳಲ್ಲಿ ಬೇರೆ ಎಣಿಕೆ ನೀಡಿತು, ಅವು ಬಂದಂತೆಯೇ lesson ವರದಿ ಮಾಡುತ್ತದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Headline Score Hides Its Assumptions",
    "textKn": "ಪ್ರಮುಖ ಅಂಕ ತನ್ನ ಊಹೆಗಳನ್ನು ಮರೆಮಾಡುತ್ತದೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Mix, Interval and Contamination",
    "headingKn": "ಮಿಶ್ರಣ, ಅಂತರ ಮತ್ತು ಕಲುಷಿತ",
    "bodyEn": "Choosing a coding agent from a single benchmark number is risky. This part computes with invented numbers how the same two agents rank differently under different task mixes, how wide a 95 percent interval is on a 50-task benchmark, and how a score rises when part of the benchmark was in the training data. None of the rates is a published result.",
    "bodyKn": "ಒಂದೇ benchmark ಸಂಖ್ಯೆಯಿಂದ ಕೋಡಿಂಗ್ agent ಆರಿಸುವುದು ಅಪಾಯಕಾರಿ. ಈ ಭಾಗ ಕಲ್ಪಿತ ಸಂಖ್ಯೆಗಳೊಂದಿಗೆ ಅದೇ ಎರಡು agents ಬೇರೆ ಕಾರ್ಯ ಮಿಶ್ರಣಗಳಲ್ಲಿ ಬೇರೆ ಶ್ರೇಣಿ ಪಡೆಯುವುದು, 50-ಕಾರ್ಯ benchmark ನಲ್ಲಿ 95 ಶೇಕಡಾ ಅಂತರ ಎಷ್ಟು ಅಗಲ, ಮತ್ತು benchmark ನ ಭಾಗ ತರಬೇತಿ ದತ್ತಾಂಶದಲ್ಲಿದ್ದಾಗ ಅಂಕ ಹೇಗೆ ಏರುತ್ತದೆ ಲೆಕ್ಕ ಹಾಕುತ್ತದೆ. ಯಾವ ದರವೂ ಪ್ರಕಟಿತ ಫಲಿತಾಂಶ ಅಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Reading a Benchmark Number",
    "headingKn": "Benchmark ಸಂಖ್ಯೆ ಓದುವುದು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a benchmark number depends on mix, size and training overlap</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">mix</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">your workload</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">rates</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">per category</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">interval</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">benchmark size</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">contamination</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">inflates</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a benchmark number depends on mix, size and training overlap</text></svg>",
    "captionEn": "Mix, sample size and contamination change what a score means.",
    "captionKn": "ಮಿಶ್ರಣ, ಮಾದರಿ ಗಾತ್ರ ಮತ್ತು ಕಲುಷಿತ ಅಂಕದ ಅರ್ಥ ಬದಲಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Invented per-category success rates",
    "headingKn": "ಕಲ್ಪಿತ ವರ್ಗ-ವಾರು ಯಶಸ್ಸು ದರಗಳು",
    "headers": [
     "Category",
     "Agent A / Agent B"
    ],
    "rows": [
     [
      "bugfix",
      "0.80 / 0.60"
     ],
     [
      "feature",
      "0.40 / 0.65"
     ],
     [
      "refactor",
      "0.70 / 0.55"
     ],
     [
      "test",
      "0.90 / 0.60"
     ],
     [
      "benchmark",
      "100 tasks, memorized share 0, 10 or 30"
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
    "filename": "ca_3.py",
    "headingEn": "Weighted score and Wilson interval",
    "headingKn": "ತೂಕದ ಅಂಕ ಮತ್ತು Wilson ಅಂತರ",
    "descEn": "weighted multiplies per-category rates by a task mix and wilson computes a 95 percent interval for a solve count out of n tasks.",
    "descKn": "weighted ವರ್ಗ-ವಾರು ದರಗಳನ್ನು ಕಾರ್ಯ ಮಿಶ್ರಣದಿಂದ ಗುಣಿಸುತ್ತದೆ ಮತ್ತು wilson n ಕಾರ್ಯಗಳಲ್ಲಿ ಪರಿಹಾರ ಎಣಿಕೆಗೆ 95 ಶೇಕಡಾ ಅಂತರ ಲೆಕ್ಕ ಹಾಕುತ್ತದೆ.",
    "code": "CATS = [\"bugfix\", \"feature\", \"refactor\", \"test\"]\nAGENT_A = {\"bugfix\": 0.80, \"feature\": 0.40, \"refactor\": 0.70, \"test\": 0.90}\nAGENT_B = {\"bugfix\": 0.60, \"feature\": 0.65, \"refactor\": 0.55, \"test\": 0.60}\n\n\ndef weighted(rates, mix):\n    return sum(rates[c] * mix[c] for c in CATS)\n\n\ndef wilson(k, n, z=1.96):\n    p = k / n\n    d = 1 + z * z / n\n    c = (p + z * z / (2 * n)) / d\n    h = z * sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / d\n    return c - h, c + h"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ca_3.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() weights the agents by three mixes and a custom mix, prints intervals and simulates memorized tasks.",
    "descKn": "main() ಮೂರು ಮಿಶ್ರಣ ಮತ್ತು ಕಸ್ಟಮ್ ಮಿಶ್ರಣದಿಂದ agents ಗೆ ತೂಕ ನೀಡಿ, ಅಂತರ ಮುದ್ರಿಸಿ ಮತ್ತು ನೆನಪಿಟ್ಟ ಕಾರ್ಯಗಳನ್ನು ಅನುಕರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely computing: the same two agents under three task mixes\")\n    mixes = {\n        \"mostly bugfixes\": {\"bugfix\": 0.6, \"feature\": 0.1, \"refactor\": 0.1, \"test\": 0.2},\n        \"balanced\": {\"bugfix\": 0.25, \"feature\": 0.25, \"refactor\": 0.25, \"test\": 0.25},\n        \"mostly features\": {\"bugfix\": 0.1, \"feature\": 0.6, \"refactor\": 0.2, \"test\": 0.1},\n    }\n    for name, mix in mixes.items():\n        a, b = weighted(AGENT_A, mix), weighted(AGENT_B, mix)\n        print(f\"{name:16}: agent A {a:.3f} | agent B {b:.3f} | leader {'A' if a > b else 'B'}\")\n    print(\"the ranking of the two agents flips when the mix of tasks changes, because A is stronger on bugfixes, tests and refactors and B on features; a single headline score hides which mix it was measured on, and the per-category rates and mixes are invented\")\n\n    section(\"2. Genuinely computing: a workload-weighted score from your own mix\")\n    mine = {\"bugfix\": 0.45, \"feature\": 0.2, \"refactor\": 0.15, \"test\": 0.2}\n    print(f\"mix {mine}: agent A {weighted(AGENT_A, mine):.3f} | agent B {weighted(AGENT_B, mine):.3f}\")\n    print(\"weighting each category by how often your own team does that kind of work gives the number that predicts your experience, and the source lesson quotes its own workload-weighted figure which is cited and not reproduced here\")\n\n    section(\"3. Genuinely computing: Wilson 95 percent intervals for a small benchmark\")\n    for k, n in ((35, 50), (70, 100), (350, 500)):\n        lo, hi = wilson(k, n)\n        print(f\"{k}/{n} solved ({k / n:.2f}): interval {lo:.3f} to {hi:.3f} | width {hi - lo:.3f}\")\n    print(\"a benchmark of 50 tasks leaves an interval about 0.25 wide at a 70 percent solve rate, so two agents a few points apart on such a benchmark are not distinguishable; the solve counts are invented\")\n\n    section(\"4. Genuinely measuring: memorized tasks inflate a score (benchmark of 100, seed 1)\")\n    r = random.Random(1)\n    for memorized in (0, 10, 30):\n        scores = []\n        for _ in range(2000):\n            solved = 0\n            for i in range(100):\n                p = 0.97 if i < memorized else 0.55\n                solved += r.random() < p\n            scores.append(solved / 100)\n        print(f\"{memorized:2d} of 100 tasks seen in training: mean measured score {mean(scores):.3f}\")\n    print(\"when part of the benchmark appeared in the training data the measured score rises even though the underlying skill on fresh tasks is unchanged at 0.55, which is why a score on a public benchmark needs a contamination check; the 0.97 and 0.55 rates are invented\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely computing: the same two agents under three task mixes ---\nmostly bugfixes : agent A 0.770 | agent B 0.600 | leader A\nbalanced        : agent A 0.700 | agent B 0.600 | leader A\nmostly features : agent A 0.550 | agent B 0.620 | leader B\nthe ranking of the two agents flips when the mix of tasks changes, because A is stronger on bugfixes, tests and refactors and B on features; a single headline score hides which mix it was measured on, and the per-category rates and mixes are invented\n\n--- 2. Genuinely computing: a workload-weighted score from your own mix ---\nmix {'bugfix': 0.45, 'feature': 0.2, 'refactor': 0.15, 'test': 0.2}: agent A 0.725 | agent B 0.603\nweighting each category by how often your own team does that kind of work gives the number that predicts your experience, and the source lesson quotes its own workload-weighted figure which is cited and not reproduced here\n\n--- 3. Genuinely computing: Wilson 95 percent intervals for a small benchmark ---\n35/50 solved (0.70): interval 0.562 to 0.809 | width 0.246\n70/100 solved (0.70): interval 0.604 to 0.781 | width 0.177\n350/500 solved (0.70): interval 0.658 to 0.739 | width 0.080\na benchmark of 50 tasks leaves an interval about 0.25 wide at a 70 percent solve rate, so two agents a few points apart on such a benchmark are not distinguishable; the solve counts are invented\n\n--- 4. Genuinely measuring: memorized tasks inflate a score (benchmark of 100, seed 1) ---\n 0 of 100 tasks seen in training: mean measured score 0.550\n10 of 100 tasks seen in training: mean measured score 0.591\n30 of 100 tasks seen in training: mean measured score 0.676\nwhen part of the benchmark appeared in the training data the measured score rises even though the underlying skill on fresh tasks is unchanged at 0.55, which is why a score on a public benchmark needs a contamination check; the 0.97 and 0.55 rates are invented"
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
    "headingEn": "Experiment 1: The same two agents under three task mixes",
    "headingKn": "ಪ್ರಯೋಗ 1: The same two agents under three task mixes",
    "bodyEn": "What it ran: The same two agents under three task mixes. What the lab concluded: the ranking of the two agents flips when the mix of tasks changes, because A is stronger on bugfixes, tests and refactors and B on features; a single headline score hides which mix it was measured on, and the per-category rates and mixes are invented",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The same two agents under three task mixes. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the ranking of the two agents flips when the mix of tasks changes, because A is stronger on bugfixes, tests and refactors and B on features; a single headline score hides which mix it was measured on, and the per-category rates and mixes are invented"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely computing: the same two agents under three task mixes ---\nmostly bugfixes : agent A 0.770 | agent B 0.600 | leader A\nbalanced        : agent A 0.700 | agent B 0.600 | leader A\nmostly features : agent A 0.550 | agent B 0.620 | leader B"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: A workload-weighted score from your own mix",
    "headingKn": "ಪ್ರಯೋಗ 2: A workload-weighted score from your own mix",
    "bodyEn": "What it ran: A workload-weighted score from your own mix. What the lab concluded: weighting each category by how often your own team does that kind of work gives the number that predicts your experience, and the source lesson quotes its own workload-weighted figure which is cited and not reproduced here",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A workload-weighted score from your own mix. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): weighting each category by how often your own team does that kind of work gives the number that predicts your experience, and the source lesson quotes its own workload-weighted figure which is cited and not reproduced here"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely computing: a workload-weighted score from your own mix ---\nmix {'bugfix': 0.45, 'feature': 0.2, 'refactor': 0.15, 'test': 0.2}: agent A 0.725 | agent B 0.603"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Wilson 95 percent intervals for a small benchmark",
    "headingKn": "ಪ್ರಯೋಗ 3: Wilson 95 percent intervals for a small benchmark",
    "bodyEn": "What it ran: Wilson 95 percent intervals for a small benchmark. What the lab concluded: a benchmark of 50 tasks leaves an interval about 0.25 wide at a 70 percent solve rate, so two agents a few points apart on such a benchmark are not distinguishable; the solve counts are invented",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Wilson 95 percent intervals for a small benchmark. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a benchmark of 50 tasks leaves an interval about 0.25 wide at a 70 percent solve rate, so two agents a few points apart on such a benchmark are not distinguishable; the solve counts are invented"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely computing: Wilson 95 percent intervals for a small benchmark ---\n35/50 solved (0.70): interval 0.562 to 0.809 | width 0.246\n70/100 solved (0.70): interval 0.604 to 0.781 | width 0.177\n350/500 solved (0.70): interval 0.658 to 0.739 | width 0.080"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Memorized tasks inflate a score (benchmark of 100, seed 1)",
    "headingKn": "ಪ್ರಯೋಗ 4: Memorized tasks inflate a score (benchmark of 100, seed 1)",
    "bodyEn": "What it ran: Memorized tasks inflate a score (benchmark of 100, seed 1). What the lab concluded: when part of the benchmark appeared in the training data the measured score rises even though the underlying skill on fresh tasks is unchanged at 0.55, which is why a score on a public benchmark needs a contamination check; the 0.97 and 0.55 rates are invented",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Memorized tasks inflate a score (benchmark of 100, seed 1). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): when part of the benchmark appeared in the training data the measured score rises even though the underlying skill on fresh tasks is unchanged at 0.55, which is why a score on a public benchmark needs a contamination check; the 0.97 and 0.55 rates are invented"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely measuring: memorized tasks inflate a score (benchmark of 100, seed 1) ---\n 0 of 100 tasks seen in training: mean measured score 0.550\n10 of 100 tasks seen in training: mean measured score 0.591\n30 of 100 tasks seen in training: mean measured score 0.676"
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
    "headingEn": "Genuinely Found: Mixes and Intervals",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮಿಶ್ರಣಗಳು ಮತ್ತು ಅಂತರಗಳು",
    "bodyEn": "Section 1: under a mostly-bugfix mix agent A scored 0.770 and B 0.600, under a balanced mix 0.700 and 0.600 and under a mostly-feature mix A scored 0.550 and B 0.620, so the leader flipped to B. Section 2: for a custom mix A scored 0.725 and B 0.603. Section 3: 35 of 50 gave an interval of 0.562 to 0.809 (width 0.246), 70 of 100 gave 0.604 to 0.781 (0.177) and 350 of 500 gave 0.658 to 0.739 (0.080).",
    "bodyKn": "ವಿಭಾಗ 1: ಹೆಚ್ಚಾಗಿ-bugfix ಮಿಶ್ರಣದಲ್ಲಿ agent A 0.770 ಮತ್ತು B 0.600, ಸಮತೋಲಿತ ಮಿಶ್ರಣದಲ್ಲಿ 0.700 ಮತ್ತು 0.600 ಮತ್ತು ಹೆಚ್ಚಾಗಿ-feature ಮಿಶ್ರಣದಲ್ಲಿ A 0.550 ಮತ್ತು B 0.620 ಪಡೆದವು, ಆದ್ದರಿಂದ ಮುಂಚೂಣಿ B ಗೆ ಬದಲಾಯಿತು. ವಿಭಾಗ 2: ಕಸ್ಟಮ್ ಮಿಶ್ರಣಕ್ಕೆ A 0.725 ಮತ್ತು B 0.603. ವಿಭಾಗ 3: 50 ರಲ್ಲಿ 35 ಅಂತರ 0.562 ರಿಂದ 0.809 (ಅಗಲ 0.246), 100 ರಲ್ಲಿ 70 0.604 ರಿಂದ 0.781 (0.177) ಮತ್ತು 500 ರಲ್ಲಿ 350 0.658 ರಿಂದ 0.739 (0.080) ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Memorized Tasks",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ನೆನಪಿಟ್ಟ ಕಾರ್ಯಗಳು",
    "bodyEn": "Section 4: with 0, 10 and 30 of 100 tasks seen in training the mean measured score was 0.550, 0.591 and 0.676, although the underlying rate on fresh tasks stayed at 0.55.",
    "bodyKn": "ವಿಭಾಗ 4: 100 ಕಾರ್ಯಗಳಲ್ಲಿ 0, 10 ಮತ್ತು 30 ತರಬೇತಿಯಲ್ಲಿ ಕಂಡಿದ್ದಾಗ ಸರಾಸರಿ ಅಳೆದ ಅಂಕ 0.550, 0.591 ಮತ್ತು 0.676 ಆಯಿತು, ಹೊಸ ಕಾರ್ಯಗಳ ಮೂಲ ದರ 0.55 ರಲ್ಲಿ ಉಳಿದಿದ್ದರೂ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A benchmark score is an average over a particular mix of tasks, with a particular uncertainty and possibly some leaked tasks, so it predicts your own results only when those match your workload.",
    "bodyKn": "benchmark ಅಂಕ ನಿರ್ದಿಷ್ಟ ಕಾರ್ಯ ಮಿಶ್ರಣದ ಮೇಲಿನ ಸರಾಸರಿ, ನಿರ್ದಿಷ್ಟ ಅನಿಶ್ಚಿತತೆ ಮತ್ತು ಬಹುಶಃ ಕೆಲವು ಸೋರಿದ ಕಾರ್ಯಗಳೊಂದಿಗೆ, ಆದ್ದರಿಂದ ಅವು ನಿಮ್ಮ ಕೆಲಸಭಾರಕ್ಕೆ ಹೊಂದಿದಾಗ ಮಾತ್ರ ನಿಮ್ಮ ಸ್ವಂತ ಫಲಿತಾಂಶ ಊಹಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the agent with the higher headline score is better for me.\" Agent B led under the mostly-feature mix, 0.620 to 0.550.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಹೆಚ್ಚಿನ ಪ್ರಮುಖ ಅಂಕದ agent ನನಗೆ ಉತ್ತಮ.\" ಹೆಚ್ಚಾಗಿ-feature ಮಿಶ್ರಣದಲ್ಲಿ agent B 0.550 ವಿರುದ್ಧ 0.620 ರಲ್ಲಿ ಮುಂದಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Workload-weighted: scores combined by your own task mix. Wilson interval: a confidence interval for a proportion. Contamination: benchmark tasks seen in training. Mix: share of each task type.",
    "bodyKn": "Workload-weighted: ನಿಮ್ಮ ಸ್ವಂತ ಕಾರ್ಯ ಮಿಶ್ರಣದಿಂದ ಸೇರಿಸಿದ ಅಂಕಗಳು. Wilson interval: ಅನುಪಾತಕ್ಕೆ ವಿಶ್ವಾಸ ಅಂತರ. Contamination: ತರಬೇತಿಯಲ್ಲಿ ಕಂಡ benchmark ಕಾರ್ಯಗಳು. Mix: ಪ್ರತಿ ಕಾರ್ಯ ಪ್ರಕಾರದ ಪಾಲು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The ranking flipped between mixes. 2) A custom mix gave 0.725 and 0.603. 3) A 50-task benchmark had a 0.246 wide interval. 4) 30 memorized tasks lifted 0.550 to 0.676. 5) All rates are invented, not published.",
    "bodyKn": "1) ಶ್ರೇಣಿ ಮಿಶ್ರಣಗಳ ನಡುವೆ ಬದಲಾಯಿತು. 2) ಕಸ್ಟಮ್ ಮಿಶ್ರಣ 0.725 ಮತ್ತು 0.603 ನೀಡಿತು. 3) 50-ಕಾರ್ಯ benchmark ಗೆ 0.246 ಅಗಲದ ಅಂತರ. 4) 30 ನೆನಪಿಟ್ಟ ಕಾರ್ಯಗಳು 0.550 ಅನ್ನು 0.676 ಗೆ ಏರಿಸಿದವು. 5) ಎಲ್ಲಾ ದರಗಳು ಕಲ್ಪಿತ, ಪ್ರಕಟಿತವಲ್ಲ."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B ca_3.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B ca_3.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B ca_3.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B ca_3.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Predict before you run",
    "headingKn": "ಓಡಿಸುವ ಮುನ್ನ ಊಹಿಸಿ",
    "bodyEn": "Before rerunning, write down what you expect each experiment to print, then compare:\n1. The same two agents under three task mixes\n2. A workload-weighted score from your own mix\n3. Wilson 95 percent intervals for a small benchmark\n4. Memorized tasks inflate a score (benchmark of 100, seed 1)",
    "bodyKn": "ಮರುಓಡಿಸುವ ಮುನ್ನ ಪ್ರತಿ ಪ್ರಯೋಗ ಏನು ಮುದ್ರಿಸುತ್ತದೆ ಎಂದು ನಿರೀಕ್ಷಿಸುವುದನ್ನು ಬರೆಯಿರಿ, ನಂತರ ಹೋಲಿಸಿ:\n1. The same two agents under three task mixes\n2. A workload-weighted score from your own mix\n3. Wilson 95 percent intervals for a small benchmark\n4. Memorized tasks inflate a score (benchmark of 100, seed 1)"
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which agent led under the mostly-feature mix?",
      "qKn": "ಹೆಚ್ಚಾಗಿ-feature ಮಿಶ್ರಣದಲ್ಲಿ ಯಾವ agent ಮುಂದಿತ್ತು?",
      "opts": [
       "Agent B at 0.620",
       "Agent A at 0.770",
       "Neither",
       "Both tied"
      ],
      "optsKn": [
       "0.620 ನೊಂದಿಗೆ agent B",
       "0.770 ನೊಂದಿಗೆ agent A",
       "ಯಾವುದೂ ಇಲ್ಲ",
       "ಎರಡೂ ಸಮ"
      ],
      "correct": 0
     },
     {
      "q": "How wide was the 95 percent interval for 35 of 50 solved?",
      "qKn": "50 ರಲ್ಲಿ 35 ಪರಿಹಾರಕ್ಕೆ 95 ಶೇಕಡಾ ಅಂತರ ಎಷ್ಟು ಅಗಲ?",
      "opts": [
       "0.246",
       "0.080",
       "0.177",
       "0.50"
      ],
      "optsKn": [
       "0.246",
       "0.080",
       "0.177",
       "0.50"
      ],
      "correct": 0
     },
     {
      "q": "What measured score resulted with 30 of 100 tasks memorized?",
      "qKn": "100 ರಲ್ಲಿ 30 ಕಾರ್ಯ ನೆನಪಿಟ್ಟಾಗ ಯಾವ ಅಳೆದ ಅಂಕ ಫಲಿತಾಂಶವಾಯಿತು?",
      "opts": [
       "0.676",
       "0.550",
       "0.591",
       "0.97"
      ],
      "optsKn": [
       "0.676",
       "0.550",
       "0.591",
       "0.97"
      ],
      "correct": 0
     },
     {
      "q": "What was the fresh-task success rate underneath the memorization test?",
      "qKn": "ನೆನಪಿಟ್ಟ ಪರೀಕ್ಷೆಯ ಕೆಳಗಿನ ಹೊಸ-ಕಾರ್ಯ ಯಶಸ್ಸು ದರ ಎಷ್ಟು?",
      "opts": [
       "0.55",
       "0.97",
       "0.676",
       "0.30"
      ],
      "optsKn": [
       "0.55",
       "0.97",
       "0.676",
       "0.30"
      ],
      "correct": 0
     },
     {
      "q": "Is the lesson workload-weighted figure of 71.5 percent reproduced here?",
      "qKn": "lesson ನ 71.5 ಶೇಕಡಾ ಕೆಲಸಭಾರ-ತೂಕದ ಅಂಕಿ ಇಲ್ಲಿ ಪುನರುತ್ಪಾದಿಸಲಾಗಿದೆಯೇ?",
      "opts": [
       "No, it is cited and the lab uses its own invented table",
       "Yes, exactly",
       "Yes, from SWE-bench",
       "It was measured live"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಅದು ಉಲ್ಲೇಖಿತ ಮತ್ತು ಲ್ಯಾಬ್ ತನ್ನದೇ ಕಲ್ಪಿತ ಕೋಷ್ಟಕ ಬಳಸುತ್ತದೆ",
       "ಹೌದು, ಇದ್ದಂತೆಯೇ",
       "ಹೌದು, SWE-bench ನಿಂದ",
       "ಅದನ್ನು ನೇರವಾಗಿ ಅಳೆಯಲಾಯಿತು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
