module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b321595",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "AlphaEvolve — Evolutionary Coding Agents (Part 1 of 3) — The Search Loop and the Archive",
 "titleKn": "AlphaEvolve — ವಿಕಾಸಾತ್ಮಕ ಕೋಡಿಂಗ್ Agents (ಭಾಗ 1 / 3) — ಹುಡುಕಾಟ ಲೂಪ್ ಮತ್ತು ಆರ್ಕೈವ್",
 "desc": "Build the smallest evolutionary coding loop, measure it over many seeds and see what a MAP-Elites archive keeps.",
 "descKn": "ಚಿಕ್ಕ ವಿಕಾಸಾತ್ಮಕ ಕೋಡಿಂಗ್ ಲೂಪ್ ನಿರ್ಮಿಸಿ, ಹಲವು seeds ಮೇಲೆ ಅಳೆಯಿರಿ ಮತ್ತು MAP-Elites ಆರ್ಕೈವ್ ಏನು ಇಡುತ್ತದೆ ನೋಡಿ.",
 "objectives": [
  "Represent a program as data.",
  "Score it with an evaluator.",
  "Mutate one coefficient.",
  "Keep an archive.",
  "Report results over many seeds."
 ],
 "objectivesKn": [
  "ಪ್ರೋಗ್ರಾಂ ಅನ್ನು ದತ್ತಾಂಶವಾಗಿ ನಿರೂಪಿಸಿ.",
  "ಮೌಲ್ಯಮಾಪಕದಿಂದ ಅಂಕ ನೀಡಿ.",
  "ಒಂದು ಗುಣಾಂಕ ಮ್ಯುಟೇಟ್ ಮಾಡಿ.",
  "ಆರ್ಕೈವ್ ಇಡಿ.",
  "ಹಲವು seeds ಮೇಲೆ ಫಲಿತಾಂಶ ವರದಿ ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "AlphaEvolve — Evolutionary Coding Agents (Part 1 of 3)",
    "textKn": "AlphaEvolve — ವಿಕಾಸಾತ್ಮಕ ಕೋಡಿಂಗ್ Agents (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a program representation, a mean-squared-error evaluator, mutation, a MAP-Elites archive and the full search loop measured over ten seeds with two parent-selection rules. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind AlphaEvolve-style evolutionary coding (seed programs, mutation, MAP-Elites archives, islands, held-out evaluation, program databases and deployment gates), not the real software, and the target function, polynomial programs and settings are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, and the lesson says its Python is educational reference code, so the labs are our own implementation. The results quoted in the lesson (48 scalar multiplications, about 0.7 percent of Borg compute, a 32.5 percent FlashAttention speedup) are cited from the lesson and were not measured here. Part 2 of the lesson printed a held-out MSE of 6240.0 for its overfitting example and Part 3 corrected it to 21600.0, which the lab reproduces. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಪ್ರೋಗ್ರಾಂ ನಿರೂಪಣೆ, mean-squared-error ಮೌಲ್ಯಮಾಪಕ, ಮ್ಯುಟೇಶನ್, MAP-Elites ಆರ್ಕೈವ್ ಮತ್ತು ಎರಡು ಪೋಷಕ-ಆಯ್ಕೆ ನಿಯಮಗಳೊಂದಿಗೆ ಹತ್ತು seeds ಮೇಲೆ ಅಳೆದ ಪೂರ್ಣ ಹುಡುಕಾಟ ಲೂಪ್. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು AlphaEvolve ಶೈಲಿಯ ವಿಕಾಸಾತ್ಮಕ ಕೋಡಿಂಗ್ (seed ಪ್ರೋಗ್ರಾಂಗಳು, ಮ್ಯುಟೇಶನ್, MAP-Elites ಆರ್ಕೈವ್‌ಗಳು, islands, held-out ಮೌಲ್ಯಮಾಪನ, ಪ್ರೋಗ್ರಾಂ ಡೇಟಾಬೇಸ್‌ಗಳು ಮತ್ತು deployment gates) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಗುರಿ ಕಾರ್ಯ, ಬಹುಪದ ಪ್ರೋಗ್ರಾಂಗಳು ಮತ್ತು ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ತನ್ನ Python ಶೈಕ್ಷಣಿಕ ಉಲ್ಲೇಖ ಕೋಡ್ ಎಂದು ಹೇಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. lesson ನಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿದ ಫಲಿತಾಂಶಗಳು (48 ಸ್ಕೇಲಾರ್ ಗುಣಾಕಾರ, Borg compute ನ ಸುಮಾರು 0.7 ಶೇಕಡಾ, 32.5 ಶೇಕಡಾ FlashAttention ವೇಗ) lesson ನಿಂದ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಅಳೆಯಲಾಗಿಲ್ಲ. lesson ನ ಭಾಗ 2 ತನ್ನ overfitting ಉದಾಹರಣೆಗೆ held-out MSE 6240.0 ಮುದ್ರಿಸಿತು ಮತ್ತು ಭಾಗ 3 ಅದನ್ನು 21600.0 ಗೆ ಸರಿಪಡಿಸಿತು, ಲ್ಯಾಬ್ ಅದನ್ನು ಪುನರುತ್ಪಾದಿಸುತ್ತದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Generator Proposes and an Evaluator Decides",
    "textKn": "ರಚಕ ಪ್ರಸ್ತಾಪಿಸುತ್ತದೆ ಮತ್ತು ಮೌಲ್ಯಮಾಪಕ ನಿರ್ಧರಿಸುತ್ತದೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Smallest Working Version",
    "headingKn": "ಚಿಕ್ಕ ಕೆಲಸ ಮಾಡುವ ಆವೃತ್ತಿ",
    "bodyEn": "AlphaEvolve pairs a model that proposes program changes with an automatic evaluator and an archive of what has been found. This part builds the smallest version of that loop on a task where every step can be checked: find the polynomial x*x + 3*x + 2 starting from the program x. The lab measures mean squared error, mutates one coefficient at a time, keeps one elite per structural cell and then runs the whole loop over ten seeds, so the results are counts and not a single lucky run.",
    "bodyKn": "AlphaEvolve ಪ್ರೋಗ್ರಾಂ ಬದಲಾವಣೆಗಳನ್ನು ಪ್ರಸ್ತಾಪಿಸುವ ಮಾದರಿಯನ್ನು ಸ್ವಯಂಚಾಲಿತ ಮೌಲ್ಯಮಾಪಕ ಮತ್ತು ಕಂಡುಹಿಡಿದದ್ದರ ಆರ್ಕೈವ್‌ನೊಂದಿಗೆ ಜೋಡಿಸುತ್ತದೆ. ಈ ಭಾಗ ಪ್ರತಿ ಹಂತ ಪರಿಶೀಲಿಸಬಹುದಾದ ಕಾರ್ಯದಲ್ಲಿ ಆ ಲೂಪ್‌ನ ಚಿಕ್ಕ ಆವೃತ್ತಿ ನಿರ್ಮಿಸುತ್ತದೆ: ಪ್ರೋಗ್ರಾಂ x ನಿಂದ ಆರಂಭಿಸಿ ಬಹುಪದ x*x + 3*x + 2 ಹುಡುಕಿ. ಲ್ಯಾಬ್ mean squared error ಅಳೆದು, ಒಮ್ಮೆಗೆ ಒಂದು ಗುಣಾಂಕ ಮ್ಯುಟೇಟ್ ಮಾಡಿ, ಪ್ರತಿ ರಚನಾತ್ಮಕ ಕೋಶಕ್ಕೆ ಒಂದು elite ಇಟ್ಟು, ನಂತರ ಇಡೀ ಲೂಪ್ ಅನ್ನು ಹತ್ತು seeds ಮೇಲೆ ಓಡಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಫಲಿತಾಂಶಗಳು ಎಣಿಕೆಗಳು, ಒಂದು ಅದೃಷ್ಟದ ಓಟ ಅಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Evolutionary Coding Loop",
    "headingKn": "ವಿಕಾಸಾತ್ಮಕ ಕೋಡಿಂಗ್ ಲೂಪ್",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">the evaluator, not the generator, decides what survives</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">seed</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">start program</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">mutate</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">one change</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">evaluate</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">MSE</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">archive</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">elite per cell</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the evaluator, not the generator, decides what survives</text></svg>",
    "captionEn": "Generate, evaluate, archive, select, repeat.",
    "captionKn": "ರಚಿಸಿ, ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ, ಆರ್ಕೈವ್ ಮಾಡಿ, ಆರಿಸಿ, ಪುನರಾವರ್ತಿಸಿ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Loop components in the lab",
    "headingKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಲೂಪ್ ಘಟಕಗಳು",
    "headers": [
     "Component",
     "Lab implementation"
    ],
    "rows": [
     [
      "seed program",
      "x (coefficients 0, 1, 0)"
     ],
     [
      "mutation",
      "add -2, -1, 1 or 2 to one coefficient"
     ],
     [
      "evaluator",
      "mean squared error on x from -5 to 5"
     ],
     [
      "archive cell",
      "(degree, number of nonzero terms)"
     ],
     [
      "held-out check",
      "x = -9, -7, 7, 8, 12"
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
    "filename": "ae_1.py",
    "headingEn": "Program, evaluator, mutation and archive",
    "headingKn": "ಪ್ರೋಗ್ರಾಂ, ಮೌಲ್ಯಮಾಪಕ, ಮ್ಯುಟೇಶನ್ ಮತ್ತು ಆರ್ಕೈವ್",
    "descEn": "Program holds three coefficients, mse measures error against the target, descriptor gives the archive cell, mutate changes one coefficient and Archive keeps the lower-error program in each cell.",
    "descKn": "Program ಮೂರು ಗುಣಾಂಕ ಹೊಂದಿದೆ, mse ಗುರಿಯ ವಿರುದ್ಧ ದೋಷ ಅಳೆಯುತ್ತದೆ, descriptor ಆರ್ಕೈವ್ ಕೋಶ ನೀಡುತ್ತದೆ, mutate ಒಂದು ಗುಣಾಂಕ ಬದಲಿಸುತ್ತದೆ ಮತ್ತು Archive ಪ್ರತಿ ಕೋಶದಲ್ಲಿ ಕಡಿಮೆ-ದೋಷ ಪ್ರೋಗ್ರಾಂ ಇಡುತ್ತದೆ.",
    "code": "@dataclass(frozen=True)\nclass Program:\n    a: int\n    b: int\n    c: int\n\n    def predict(self, x):\n        return self.a * x * x + self.b * x + self.c\n\n    def expression(self):\n        return f\"{self.a}*x*x + {self.b}*x + {self.c}\"\n\n\ndef target(x):\n    return x * x + 3 * x + 2\n\n\ndef mse(p, points):\n    return sum((p.predict(x) - target(x)) ** 2 for x in points) / len(points)\n\n\ndef descriptor(p):\n    degree = 2 if p.a != 0 else (1 if p.b != 0 else 0)\n    return degree, sum(v != 0 for v in (p.a, p.b, p.c))\n\n\ndef mutate(p, rng):\n    v = [p.a, p.b, p.c]\n    v[rng.randrange(3)] += rng.choice([-2, -1, 1, 2])\n    return Program(*v)\n\n\nclass Archive:\n    def __init__(self, points):\n        self.points, self.cells = points, {}\n\n    def insert(self, p):\n        cell = descriptor(p)\n        inc = self.cells.get(cell)\n        if inc is None or mse(p, self.points) < mse(inc, self.points):\n            self.cells[cell] = p\n            return True\n        return False\n\n\nTRAIN = list(range(-5, 6))\nHELD = [-9, -7, 7, 8, 12]"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ae_1.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() scores three programs, runs one search, compares two parent-selection rules over ten seeds, varies the generation budget and prints what the archive keeps.",
    "descKn": "main() ಮೂರು ಪ್ರೋಗ್ರಾಂಗಳಿಗೆ ಅಂಕ ನೀಡಿ, ಒಂದು ಹುಡುಕಾಟ ಓಡಿಸಿ, ಹತ್ತು seeds ಮೇಲೆ ಎರಡು ಪೋಷಕ-ಆಯ್ಕೆ ನಿಯಮ ಹೋಲಿಸಿ, ಜನರೇಶನ್ ಬಜೆಟ್ ಬದಲಿಸಿ ಮತ್ತು ಆರ್ಕೈವ್ ಏನು ಇಡುತ್ತದೆ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: the target, the seed program and the evaluator\")\n    pts = [-2, -1, 0, 1, 2]\n    for p in (Program(0, 1, 0), Program(1, 1, 0), Program(1, 3, 2)):\n        print(f\"{p.expression():22} MSE on -2..2 = {mse(p, pts)}\")\n    print(\"the seed program x has a mean squared error of 26.8, x*x + x has 12.0 and the exact target has 0.0; the evaluator is deterministic, so the same program on the same points always gets the same score\")\n\n    section(\"2. Genuinely running: one search, 200 generations, seed 42, archive parents\")\n    best, bs, hs, cells, hit = evolve(42, 200, \"archive\")\n    print(\"best:\", best.expression(), \"| training MSE:\", bs, \"| held-out MSE:\", hs, \"| archive cells:\", cells, \"| generation of first exact match:\", hit)\n    print(\"a single seeded run shows what the loop does and says little about how often it works, which is why the next two sections repeat it\")\n\n    section(\"3. Genuinely measuring: ten seeds, 200 generations, two parent-selection rules\")\n    for mode in (\"archive\", \"global best\"):\n        runs = [evolve(s, 200, \"archive\" if mode == \"archive\" else \"best\") for s in range(1, 11)]\n        exact = sum(1 for r in runs if r[1] == 0)\n        hits = [r[4] for r in runs if r[4] is not None]\n        print(f\"{mode:12} exact in {exact}/10 runs | median training MSE {median(r[1] for r in runs)} | worst training MSE {max(r[1] for r in runs)} | median generation of first hit {median(hits) if hits else None} | mean archive cells {mean(r[3] for r in runs):.1f}\")\n    print(\"both rules were run on the same ten seeds with the same budget and the counts above are what they produced; ten seeds is a small sample, so a difference of one or two runs is not evidence that one rule is better\")\n\n    section(\"4. Genuinely measuring: more generations\")\n    for gens in (50, 200, 1000):\n        runs = [evolve(s, gens, \"archive\") for s in range(1, 11)]\n        print(f\"generations={gens:4} exact in {sum(1 for r in runs if r[1] == 0)}/10 | median training MSE {median(r[1] for r in runs)} | median held-out MSE {median(r[2] for r in runs)}\")\n    print(\"more generations gave the search more chances and the table shows how many runs reached the exact target at each budget; a run that has stopped improving is not proof the target is out of reach, only that these mutations have not found it yet\")\n\n    section(\"5. Genuinely running: what the archive keeps\")\n    rng = random.Random(7)\n    arch = Archive(TRAIN)\n    arch.insert(Program(0, 1, 0))\n    for _ in range(60):\n        arch.insert(mutate(rng.choice(list(arch.cells.values())), rng))\n    for cell, p in sorted(arch.cells.items()):\n        print(f\"cell (degree, nonzero) = {cell}  elite {p.expression():20} MSE {mse(p, TRAIN):9.1f}\")\n    print(\"each occupied cell holds the lowest-error program found for that degree and number of nonzero terms, so structurally different programs survive even when one of them is much better overall\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the target, the seed program and the evaluator ---\n0*x*x + 1*x + 0        MSE on -2..2 = 26.8\n1*x*x + 1*x + 0        MSE on -2..2 = 12.0\n1*x*x + 3*x + 2        MSE on -2..2 = 0.0\nthe seed program x has a mean squared error of 26.8, x*x + x has 12.0 and the exact target has 0.0; the evaluator is deterministic, so the same program on the same points always gets the same score\n\n--- 2. Genuinely running: one search, 200 generations, seed 42, archive parents ---\nbest: 1*x*x + 3*x + 2 | training MSE: 0.0 | held-out MSE: 0.0 | archive cells: 7 | generation of first exact match: 34\na single seeded run shows what the loop does and says little about how often it works, which is why the next two sections repeat it\n\n--- 3. Genuinely measuring: ten seeds, 200 generations, two parent-selection rules ---\narchive      exact in 9/10 runs | median training MSE 0.0 | worst training MSE 1.0 | median generation of first hit 60 | mean archive cells 5.8\nglobal best  exact in 9/10 runs | median training MSE 0.0 | worst training MSE 78.0 | median generation of first hit 24 | mean archive cells 4.7\nboth rules were run on the same ten seeds with the same budget and the counts above are what they produced; ten seeds is a small sample, so a difference of one or two runs is not evidence that one rule is better\n\n--- 4. Genuinely measuring: more generations ---\ngenerations=  50 exact in 4/10 | median training MSE 4.0 | median held-out MSE 4.0\ngenerations= 200 exact in 9/10 | median training MSE 0.0 | median held-out MSE 0.0\ngenerations=1000 exact in 10/10 | median training MSE 0.0 | median held-out MSE 0.0\nmore generations gave the search more chances and the table shows how many runs reached the exact target at each budget; a run that has stopped improving is not proof the target is out of reach, only that these mutations have not found it yet\n\n--- 5. Genuinely running: what the archive keeps ---\ncell (degree, nonzero) = (1, 1)  elite 0*x*x + 3*x + 0      MSE     222.0\ncell (degree, nonzero) = (1, 2)  elite 0*x*x + 3*x + 7      MSE     103.0\ncell (degree, nonzero) = (2, 1)  elite 1*x*x + 0*x + 0      MSE      94.0\ncell (degree, nonzero) = (2, 2)  elite 1*x*x + 3*x + 0      MSE       4.0\ncell (degree, nonzero) = (2, 3)  elite 1*x*x + 3*x + 2      MSE       0.0\neach occupied cell holds the lowest-error program found for that degree and number of nonzero terms, so structurally different programs survive even when one of them is much better overall"
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
    "headingEn": "Genuinely Found: Scores, One Run and Ten Seeds",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅಂಕಗಳು, ಒಂದು ಓಟ ಮತ್ತು ಹತ್ತು Seeds",
    "bodyEn": "Section 1: the seed program x scored 26.8, x*x + x scored 12.0 and the exact target scored 0.0. Section 2: seed 42 with 200 generations found the exact target at generation 34 with held-out MSE 0.0 and 7 archive cells. Section 3: over seeds 1 to 10 both rules reached the exact target in 9 of 10 runs; archive parents had worst training MSE 1.0, median first hit at generation 60 and 5.8 mean cells, while global-best parents had worst MSE 78.0, median first hit at 24 and 4.7 cells.",
    "bodyKn": "ವಿಭಾಗ 1: seed ಪ್ರೋಗ್ರಾಂ x 26.8, x*x + x 12.0 ಮತ್ತು ನಿಖರ ಗುರಿ 0.0 ಅಂಕ ಪಡೆಯಿತು. ವಿಭಾಗ 2: 200 ಜನರೇಶನ್‌ನೊಂದಿಗೆ seed 42 ನಿಖರ ಗುರಿಯನ್ನು ಜನರೇಶನ್ 34 ರಲ್ಲಿ held-out MSE 0.0 ಮತ್ತು 7 ಆರ್ಕೈವ್ ಕೋಶಗಳೊಂದಿಗೆ ಕಂಡುಹಿಡಿಯಿತು. ವಿಭಾಗ 3: seeds 1 ರಿಂದ 10 ರಲ್ಲಿ ಎರಡೂ ನಿಯಮ 10 ರಲ್ಲಿ 9 ಓಟಗಳಲ್ಲಿ ನಿಖರ ಗುರಿ ತಲುಪಿದವು; ಆರ್ಕೈವ್ ಪೋಷಕರ ಕೆಟ್ಟ training MSE 1.0, ಮಧ್ಯಗ ಮೊದಲ ಯಶಸ್ಸು ಜನರೇಶನ್ 60 ಮತ್ತು ಸರಾಸರಿ 5.8 ಕೋಶ, global-best ಪೋಷಕರ ಕೆಟ್ಟ MSE 78.0, ಮಧ್ಯಗ ಮೊದಲ ಯಶಸ್ಸು 24 ಮತ್ತು 4.7 ಕೋಶ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Budget Matters and the Archive Keeps Different Programs",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಬಜೆಟ್ ಮುಖ್ಯ ಮತ್ತು ಆರ್ಕೈವ್ ಬೇರೆ ಪ್ರೋಗ್ರಾಂಗಳನ್ನು ಇಡುತ್ತದೆ",
    "bodyEn": "Section 4: the exact target was reached in 4 of 10 runs at 50 generations, 9 of 10 at 200 and 10 of 10 at 1000, with median training MSE 4.0, 0.0 and 0.0. Section 5: after 60 mutations the archive held five elites, from a linear program with MSE 222.0 to the exact target at 0.0, one per (degree, nonzero terms) cell.",
    "bodyKn": "ವಿಭಾಗ 4: ನಿಖರ ಗುರಿ 50 ಜನರೇಶನ್‌ನಲ್ಲಿ 10 ರಲ್ಲಿ 4, 200 ರಲ್ಲಿ 10 ರಲ್ಲಿ 9 ಮತ್ತು 1000 ರಲ್ಲಿ 10 ರಲ್ಲಿ 10 ಓಟಗಳಲ್ಲಿ ತಲುಪಿತು, ಮಧ್ಯಗ training MSE 4.0, 0.0 ಮತ್ತು 0.0. ವಿಭಾಗ 5: 60 ಮ್ಯುಟೇಶನ್ ನಂತರ ಆರ್ಕೈವ್ MSE 222.0 ಇರುವ ರೇಖೀಯ ಪ್ರೋಗ್ರಾಂನಿಂದ 0.0 ಇರುವ ನಿಖರ ಗುರಿಯವರೆಗೆ, ಪ್ರತಿ (degree, nonzero terms) ಕೋಶಕ್ಕೆ ಒಂದರಂತೆ, ಐದು elites ಇಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A candidate counts as an improvement only when a measurement says so, and a search that is judged on one seed can look much better or worse than it is.",
    "bodyKn": "ಅಳತೆ ಹೇಳಿದಾಗ ಮಾತ್ರ ಅಭ್ಯರ್ಥಿ ಸುಧಾರಣೆ ಎಂದು ಪರಿಗಣಿತ, ಮತ್ತು ಒಂದು seed ಮೇಲೆ ನಿರ್ಣಯಿಸಿದ ಹುಡುಕಾಟ ನಿಜಕ್ಕಿಂತ ಬಹಳ ಉತ್ತಮ ಅಥವಾ ಕೆಟ್ಟದಾಗಿ ಕಾಣಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the archive makes the search find the target faster.\" In these ten seeds the median first hit was generation 60 with it and 24 without.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಆರ್ಕೈವ್ ಹುಡುಕಾಟ ಗುರಿಯನ್ನು ವೇಗವಾಗಿ ಕಂಡುಹಿಡಿಯುವಂತೆ ಮಾಡುತ್ತದೆ.\" ಈ ಹತ್ತು seeds ನಲ್ಲಿ ಮಧ್ಯಗ ಮೊದಲ ಯಶಸ್ಸು ಅದರೊಂದಿಗೆ ಜನರೇಶನ್ 60 ಮತ್ತು ಇಲ್ಲದೆ 24."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Seed program: the starting candidate. Mutation: a small change to a parent. MSE: mean squared error. MAP-Elites: one best program per structural cell. Held-out: inputs not used by the search.",
    "bodyKn": "Seed program: ಆರಂಭಿಕ ಅಭ್ಯರ್ಥಿ. Mutation: ಪೋಷಕನ ಸಣ್ಣ ಬದಲಾವಣೆ. MSE: mean squared error. MAP-Elites: ಪ್ರತಿ ರಚನಾತ್ಮಕ ಕೋಶಕ್ಕೆ ಒಂದು ಅತ್ಯುತ್ತಮ ಪ್ರೋಗ್ರಾಂ. Held-out: ಹುಡುಕಾಟ ಬಳಸದ ಒಳಹರಿವುಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The evaluator is deterministic. 2) One seed found the target at generation 34. 3) Both rules reached it in 9 of 10 runs. 4) Budget decided how many runs finished. 5) The archive kept five different elites.",
    "bodyKn": "1) ಮೌಲ್ಯಮಾಪಕ ನಿರ್ಣಾಯಕ. 2) ಒಂದು seed ಜನರೇಶನ್ 34 ರಲ್ಲಿ ಗುರಿ ಕಂಡುಹಿಡಿಯಿತು. 3) ಎರಡೂ ನಿಯಮ 10 ರಲ್ಲಿ 9 ಓಟಗಳಲ್ಲಿ ತಲುಪಿದವು. 4) ಬಜೆಟ್ ಎಷ್ಟು ಓಟ ಮುಗಿದವು ನಿರ್ಧರಿಸಿತು. 5) ಆರ್ಕೈವ್ ಐದು ಬೇರೆ elites ಇಟ್ಟಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What MSE did the seed program x score on -2 to 2?",
      "qKn": "-2 ರಿಂದ 2 ರಲ್ಲಿ seed ಪ್ರೋಗ್ರಾಂ x ಯಾವ MSE ಪಡೆಯಿತು?",
      "opts": [
       "26.8",
       "12.0",
       "0.0",
       "4.0"
      ],
      "optsKn": [
       "26.8",
       "12.0",
       "0.0",
       "4.0"
      ],
      "correct": 0
     },
     {
      "q": "How many of 10 runs reached the exact target at 50 generations?",
      "qKn": "50 ಜನರೇಶನ್‌ನಲ್ಲಿ 10 ರಲ್ಲಿ ಎಷ್ಟು ಓಟ ನಿಖರ ಗುರಿ ತಲುಪಿದವು?",
      "opts": [
       "4",
       "9",
       "10",
       "0"
      ],
      "optsKn": [
       "4",
       "9",
       "10",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "Which parent rule had the lower median generation of first hit?",
      "qKn": "ಯಾವ ಪೋಷಕ ನಿಯಮಕ್ಕೆ ಮೊದಲ ಯಶಸ್ಸಿನ ಕಡಿಮೆ ಮಧ್ಯಗ ಜನರೇಶನ್ ಇತ್ತು?",
      "opts": [
       "Global best (24)",
       "Archive (60)",
       "They were equal",
       "Neither reached it"
      ],
      "optsKn": [
       "Global best (24)",
       "ಆರ್ಕೈವ್ (60)",
       "ಅವು ಸಮ",
       "ಯಾವುದೂ ತಲುಪಲಿಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What defines an archive cell in the lab?",
      "qKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಆರ್ಕೈವ್ ಕೋಶವನ್ನು ಏನು ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ?",
      "opts": [
       "Degree and number of nonzero terms",
       "The score",
       "The seed",
       "The generation"
      ],
      "optsKn": [
       "ಡಿಗ್ರಿ ಮತ್ತು ಶೂನ್ಯವಲ್ಲದ ಪದಗಳ ಸಂಖ್ಯೆ",
       "ಅಂಕ",
       "seed",
       "ಜನರೇಶನ್"
      ],
      "correct": 0
     },
     {
      "q": "Why run ten seeds?",
      "qKn": "ಹತ್ತು seeds ಏಕೆ ಓಡಿಸಬೇಕು?",
      "opts": [
       "One run can look much better or worse than typical",
       "It is faster",
       "It removes the evaluator",
       "It guarantees the optimum"
      ],
      "optsKn": [
       "ಒಂದು ಓಟ ಸಾಮಾನ್ಯಕ್ಕಿಂತ ಬಹಳ ಉತ್ತಮ ಅಥವಾ ಕೆಟ್ಟದಾಗಿ ಕಾಣಬಹುದು",
       "ಅದು ವೇಗ",
       "ಅದು ಮೌಲ್ಯಮಾಪಕ ತೆಗೆಯುತ್ತದೆ",
       "ಅದು ಅತ್ಯುತ್ತಮವನ್ನು ಖಾತರಿಪಡಿಸುತ್ತದೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
