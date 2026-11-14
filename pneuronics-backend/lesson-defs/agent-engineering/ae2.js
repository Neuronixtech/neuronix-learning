module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b321595",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "AlphaEvolve — Evolutionary Coding Agents (Part 2 of 3) — Operators, Islands and Evaluator Gaps",
 "titleKn": "AlphaEvolve — ವಿಕಾಸಾತ್ಮಕ ಕೋಡಿಂಗ್ Agents (ಭಾಗ 2 / 3) — ಆಪರೇಟರ್‌ಗಳು, Islands ಮತ್ತು ಮೌಲ್ಯಮಾಪಕ ಅಂತರಗಳು",
 "desc": "Change one search setting at a time, check selection pressure against a simulation and see how evaluator gaps are exploited.",
 "descKn": "ಒಮ್ಮೆಗೆ ಒಂದು ಹುಡುಕಾಟ ಸೆಟ್ಟಿಂಗ್ ಬದಲಿಸಿ, ಸಿಮ್ಯುಲೇಶನ್ ವಿರುದ್ಧ ಆಯ್ಕೆ ಒತ್ತಡ ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಮೌಲ್ಯಮಾಪಕ ಅಂತರಗಳನ್ನು ಹೇಗೆ ಬಳಸಿಕೊಳ್ಳಲಾಗುತ್ತದೆ ನೋಡಿ.",
 "objectives": [
  "Compare mutation operators.",
  "Check selection pressure.",
  "Compare islands with one population.",
  "Compute an overfitting example.",
  "Gate on correctness before timing."
 ],
 "objectivesKn": [
  "ಮ್ಯುಟೇಶನ್ ಆಪರೇಟರ್‌ಗಳನ್ನು ಹೋಲಿಸಿ.",
  "ಆಯ್ಕೆ ಒತ್ತಡ ಪರಿಶೀಲಿಸಿ.",
  "islands ಅನ್ನು ಒಂದು ಜನಸಂಖ್ಯೆಯೊಂದಿಗೆ ಹೋಲಿಸಿ.",
  "overfitting ಉದಾಹರಣೆ ಲೆಕ್ಕ ಹಾಕಿ.",
  "ಸಮಯ ಅಳೆಯುವ ಮುನ್ನ ಸರಿಯಾದತನದ ಮೇಲೆ gate ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "AlphaEvolve — Evolutionary Coding Agents (Part 2 of 3)",
    "textKn": "AlphaEvolve — ವಿಕಾಸಾತ್ಮಕ ಕೋಡಿಂಗ್ Agents (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: three mutation operators compared, tournament pressure checked against a simulation, a ring island model, an overfitting example computed exactly, a cubic search with three training points and a speed-only evaluator that rewards an empty answer. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind AlphaEvolve-style evolutionary coding (seed programs, mutation, MAP-Elites archives, islands, held-out evaluation, program databases and deployment gates), not the real software, and the target function, polynomial programs and settings are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, and the lesson says its Python is educational reference code, so the labs are our own implementation. The results quoted in the lesson (48 scalar multiplications, about 0.7 percent of Borg compute, a 32.5 percent FlashAttention speedup) are cited from the lesson and were not measured here. Part 2 of the lesson printed a held-out MSE of 6240.0 for its overfitting example and Part 3 corrected it to 21600.0, which the lab reproduces. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಮೂರು ಮ್ಯುಟೇಶನ್ ಆಪರೇಟರ್ ಹೋಲಿಕೆ, ಸಿಮ್ಯುಲೇಶನ್ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿದ tournament ಒತ್ತಡ, ring island ಮಾದರಿ, ನಿಖರವಾಗಿ ಲೆಕ್ಕ ಹಾಕಿದ overfitting ಉದಾಹರಣೆ, ಮೂರು training ಬಿಂದುಗಳ cubic ಹುಡುಕಾಟ ಮತ್ತು ಖಾಲಿ ಉತ್ತರಕ್ಕೆ ಬಹುಮಾನ ನೀಡುವ ವೇಗ-ಮಾತ್ರ ಮೌಲ್ಯಮಾಪಕ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು AlphaEvolve ಶೈಲಿಯ ವಿಕಾಸಾತ್ಮಕ ಕೋಡಿಂಗ್ (seed ಪ್ರೋಗ್ರಾಂಗಳು, ಮ್ಯುಟೇಶನ್, MAP-Elites ಆರ್ಕೈವ್‌ಗಳು, islands, held-out ಮೌಲ್ಯಮಾಪನ, ಪ್ರೋಗ್ರಾಂ ಡೇಟಾಬೇಸ್‌ಗಳು ಮತ್ತು deployment gates) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಗುರಿ ಕಾರ್ಯ, ಬಹುಪದ ಪ್ರೋಗ್ರಾಂಗಳು ಮತ್ತು ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ತನ್ನ Python ಶೈಕ್ಷಣಿಕ ಉಲ್ಲೇಖ ಕೋಡ್ ಎಂದು ಹೇಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. lesson ನಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿದ ಫಲಿತಾಂಶಗಳು (48 ಸ್ಕೇಲಾರ್ ಗುಣಾಕಾರ, Borg compute ನ ಸುಮಾರು 0.7 ಶೇಕಡಾ, 32.5 ಶೇಕಡಾ FlashAttention ವೇಗ) lesson ನಿಂದ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಅಳೆಯಲಾಗಿಲ್ಲ. lesson ನ ಭಾಗ 2 ತನ್ನ overfitting ಉದಾಹರಣೆಗೆ held-out MSE 6240.0 ಮುದ್ರಿಸಿತು ಮತ್ತು ಭಾಗ 3 ಅದನ್ನು 21600.0 ಗೆ ಸರಿಪಡಿಸಿತು, ಲ್ಯಾಬ್ ಅದನ್ನು ಪುನರುತ್ಪಾದಿಸುತ್ತದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Settings Decide What the Search Can Find",
    "textKn": "ಹುಡುಕಾಟ ಏನು ಕಂಡುಹಿಡಿಯಬಹುದು ಎಂದು ಸೆಟ್ಟಿಂಗ್‌ಗಳು ನಿರ್ಧರಿಸುತ್ತವೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Operators, Pressure, Islands and Evaluator Gaps",
    "headingKn": "ಆಪರೇಟರ್‌ಗಳು, ಒತ್ತಡ, Islands ಮತ್ತು ಮೌಲ್ಯಮಾಪಕ ಅಂತರಗಳು",
    "bodyEn": "This part changes one thing at a time and measures. It compares small, large and reset mutations over ten seeds, checks the chance that a tournament contains a top performer against a simulation, compares one population with four islands at the same mutation budget, computes the lesson's overfitting example exactly, searches cubics with only three training points and shows an evaluator that only times the answer preferring an empty one. All data is invented.",
    "bodyKn": "ಈ ಭಾಗ ಒಮ್ಮೆಗೆ ಒಂದು ವಿಷಯ ಬದಲಿಸಿ ಅಳೆಯುತ್ತದೆ. ಹತ್ತು seeds ಮೇಲೆ ಸಣ್ಣ, ದೊಡ್ಡ ಮತ್ತು reset ಮ್ಯುಟೇಶನ್ ಹೋಲಿಸುತ್ತದೆ, tournament ನಲ್ಲಿ ಉತ್ತಮ ಪ್ರದರ್ಶಕ ಇರುವ ಸಾಧ್ಯತೆಯನ್ನು ಸಿಮ್ಯುಲೇಶನ್ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸುತ್ತದೆ, ಅದೇ ಮ್ಯುಟೇಶನ್ ಬಜೆಟ್‌ನಲ್ಲಿ ಒಂದು ಜನಸಂಖ್ಯೆ ಮತ್ತು ನಾಲ್ಕು islands ಹೋಲಿಸುತ್ತದೆ, lesson ನ overfitting ಉದಾಹರಣೆಯನ್ನು ನಿಖರವಾಗಿ ಲೆಕ್ಕ ಹಾಕುತ್ತದೆ, ಕೇವಲ ಮೂರು training ಬಿಂದುಗಳೊಂದಿಗೆ cubics ಹುಡುಕುತ್ತದೆ ಮತ್ತು ಉತ್ತರಕ್ಕೆ ಸಮಯ ಮಾತ್ರ ಅಳೆಯುವ ಮೌಲ್ಯಮಾಪಕ ಖಾಲಿ ಉತ್ತರವನ್ನು ಆದ್ಯತೆ ನೀಡುವುದನ್ನು ತೋರಿಸುತ್ತದೆ. ಎಲ್ಲಾ ದತ್ತಾಂಶ ಕಲ್ಪಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Search Settings and Evaluator Gaps",
    "headingKn": "ಹುಡುಕಾಟ ಸೆಟ್ಟಿಂಗ್‌ಗಳು ಮತ್ತು ಮೌಲ್ಯಮಾಪಕ ಅಂತರಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">search settings and evaluator gaps change what you find</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">operators</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">small/large/reset</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">selection</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">tournament size</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">islands</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">ring migration</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">held-out</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">catches overfit</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">search settings and evaluator gaps change what you find</text></svg>",
    "captionEn": "Mutation size, selection pressure and evaluator coverage all change the result.",
    "captionKn": "ಮ್ಯುಟೇಶನ್ ಗಾತ್ರ, ಆಯ್ಕೆ ಒತ್ತಡ ಮತ್ತು ಮೌಲ್ಯಮಾಪಕ ವ್ಯಾಪ್ತಿ ಎಲ್ಲವೂ ಫಲಿತಾಂಶ ಬದಲಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Mutation operators compared (seeds 1 to 10, 200 generations)",
    "headingKn": "ಮ್ಯುಟೇಶನ್ ಆಪರೇಟರ್ ಹೋಲಿಕೆ (seeds 1 ರಿಂದ 10, 200 ಜನರೇಶನ್)",
    "headers": [
     "Operator",
     "Exact target",
     "Median final MSE"
    ],
    "rows": [
     [
      "small (+-1)",
      "10 of 10",
      "0.0"
     ],
     [
      "large (+-3 or 5)",
      "0 of 10",
      "89.0"
     ],
     [
      "reset (-6 to 6)",
      "10 of 10",
      "0.0"
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
    "filename": "ae_2.py",
    "headingEn": "Operators, islands and the cubic search",
    "headingKn": "ಆಪರೇಟರ್‌ಗಳು, islands ಮತ್ತು cubic ಹುಡುಕಾಟ",
    "descEn": "small, large and reset are three mutation operators, hill runs a hill-climbing search with one of them, island_run keeps small populations with ring migration and cubic_search evolves four coefficients against a chosen set of training points.",
    "descKn": "small, large ಮತ್ತು reset ಮೂರು ಮ್ಯುಟೇಶನ್ ಆಪರೇಟರ್‌ಗಳು, hill ಒಂದರೊಂದಿಗೆ hill-climbing ಹುಡುಕಾಟ ಓಡಿಸುತ್ತದೆ, island_run ring migration ಇರುವ ಸಣ್ಣ ಜನಸಂಖ್ಯೆ ಇಡುತ್ತದೆ ಮತ್ತು cubic_search ಆರಿಸಿದ training ಬಿಂದುಗಳ ವಿರುದ್ಧ ನಾಲ್ಕು ಗುಣಾಂಕ ವಿಕಸಿಸುತ್ತದೆ.",
    "code": "def small(p, r):\n    v = [p.a, p.b, p.c]\n    v[r.randrange(3)] += r.choice([-1, 1])\n    return P(*v)\n\n\ndef large(p, r):\n    v = [p.a, p.b, p.c]\n    v[r.randrange(3)] += r.choice([-5, -3, 3, 5])\n    return P(*v)\n\n\ndef reset(p, r):\n    v = [p.a, p.b, p.c]\n    v[r.randrange(3)] = r.randint(-6, 6)\n    return P(*v)\n\n\ndef hill(seed, gens, op):\n    r = random.Random(seed)\n    best = P(0, 1, 0)\n    bs = mse(best, TRAIN)\n    for _ in range(gens):\n        c = op(best, r)\n        s = mse(c, TRAIN)\n        if s < bs:\n            best, bs = c, s\n    return bs\n\n\ndef island_run(seed, gens, islands, migrate_every=10):\n    r = random.Random(seed)\n    pops = [[P(r.randint(-3, 3), r.randint(-3, 3), r.randint(-3, 3)) for _ in range(4)] for _ in range(islands)]\n    for g in range(1, gens + 1):\n        for pop in pops:\n            parent = min(r.sample(pop, 2), key=lambda p: mse(p, TRAIN))\n            child = small(parent, r) if r.random() < 0.7 else reset(parent, r)\n            worst = max(range(len(pop)), key=lambda i: mse(pop[i], TRAIN))\n            if mse(child, TRAIN) <= mse(pop[worst], TRAIN):\n                pop[worst] = child\n        if islands > 1 and g % migrate_every == 0:\n            bests = [min(pop, key=lambda p: mse(p, TRAIN)) for pop in pops]\n            for i, pop in enumerate(pops):\n                w = max(range(len(pop)), key=lambda j: mse(pop[j], TRAIN))\n                pop[w] = bests[(i - 1) % islands]\n    return min(mse(p, TRAIN) for pop in pops for p in pop)\n\n\n@dataclass(frozen=True)\nclass Cubic:\n    a: int\n    b: int\n    c: int\n    d: int\n\n    def predict(self, x):\n        return self.a * x ** 3 + self.b * x * x + self.c * x + self.d\n\n\ndef cubic_search(seed, pts, gens=1500):\n    r = random.Random(seed)\n    best = Cubic(0, 0, 1, 0)\n    err = lambda p, q: sum((p.predict(x) - target(x)) ** 2 for x in q) / len(q)\n    bs = err(best, pts)\n    for _ in range(gens):\n        v = [best.a, best.b, best.c, best.d]\n        v[r.randrange(4)] += r.choice([-2, -1, 1, 2])\n        c = Cubic(*v)\n        s = err(c, pts)\n        if s < bs or (s == bs and r.random() < 0.5):\n            best, bs = c, s\n    return best, bs, err(best, [-7, -4, 4, 6, 9])"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ae_2.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() compares operators, checks tournament pressure, compares one population with four islands, computes the overfitting example, runs the cubic search and shows the speed-only evaluator.",
    "descKn": "main() ಆಪರೇಟರ್‌ಗಳನ್ನು ಹೋಲಿಸಿ, tournament ಒತ್ತಡ ಪರಿಶೀಲಿಸಿ, ಒಂದು ಜನಸಂಖ್ಯೆ ಮತ್ತು ನಾಲ್ಕು islands ಹೋಲಿಸಿ, overfitting ಉದಾಹರಣೆ ಲೆಕ್ಕ ಹಾಕಿ, cubic ಹುಡುಕಾಟ ಓಡಿಸಿ ಮತ್ತು ವೇಗ-ಮಾತ್ರ ಮೌಲ್ಯಮಾಪಕ ತೋರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely measuring: three mutation operators, 200 generations, seeds 1 to 10\")\n    for name, op in ((\"small (+-1)\", small), (\"large (+-3/5)\", large), (\"reset (-6..6)\", reset)):\n        res = [hill(s, 200, op) for s in range(1, 11)]\n        print(f\"{name:14} exact in {sum(1 for x in res if x == 0)}/10 | median final MSE {median(res)} | worst {max(res)}\")\n    print(\"the table shows which operator reached the exact target most often with this budget on these ten seeds; the operators were run with the same loop and the same seeds, and with ten runs a gap of one or two is within what a different set of seeds could change\")\n\n    section(\"2. Genuinely computing: tournament pressure, formula against simulation\")\n    rng = random.Random(1)\n    pop = [rng.random() for _ in range(100000)]\n    cut = sorted(pop)[int(0.2 * len(pop))]\n    for k in (1, 3, 5, 10):\n        formula = 1 - 0.8 ** k\n        hits = sum(1 for _ in range(20000) if min(rng.sample(pop, k)) <= cut) / 20000\n        print(f\"tournament size {k:2}: formula {formula:.3f} | simulated {hits:.3f}\")\n    print(\"the chance that a tournament contains at least one top-20 percent member is 1 - 0.8^k, which is 0.488 at k = 3, and the simulated column agrees to about two decimal places; a larger tournament raises that chance and so raises selection pressure\")\n\n    section(\"3. Genuinely measuring: one population against four islands (same total budget of mutations)\")\n    for islands, gens in ((1, 400), (4, 100)):\n        res = [island_run(s, gens, islands) for s in range(1, 11)]\n        print(f\"{islands} island(s) x {gens} generations: exact in {sum(1 for x in res if x == 0)}/10 | median final MSE {median(res)} | worst {max(res)}\")\n    print(\"both setups made 400 mutations in total per run and the table reports what each reached; the lab's islands are small lists of four programs with ring migration every ten generations, and this is a toy comparison on a problem easy enough that diversity may not matter\")\n\n    section(\"4. Genuinely computing: the overfitting example from the lesson\")\n    over = lambda x: target(x) + 10 * x * (x - 1) * (x - 2)\n    m = lambda f, pts: sum((f(x) - target(x)) ** 2 for x in pts) / len(pts)\n    print(\"training MSE on 0, 1, 2:\", m(over, [0, 1, 2]), \"| held-out MSE on -1, 3, 4:\", m(over, [-1, 3, 4]))\n    print(\"the held-out squared errors are 3600, 3600 and 57600, so the mean is 21600; part 2 of the lesson printed 6240.0 for this and part 3 corrected it, and the run agrees with the correction\")\n\n    section(\"5. Genuinely measuring: a cubic search with only three training points\")\n    pts3 = [0, 1, 2]\n    zero_train = bad_held = 0\n    for s in range(1, 21):\n        best, tr, ho = cubic_search(s, pts3)\n        if tr == 0:\n            zero_train += 1\n            if ho > 0:\n                bad_held += 1\n    print(f\"20 seeds: training error reached 0 in {zero_train}; of those, held-out error stayed above 0 in {bad_held}\")\n    print(\"with three training points many cubics fit exactly, and the count above is how many of the runs that fit the training points still disagreed with the target elsewhere; this is overfitting of the evaluator's inputs and not a bug in the search\")\n\n    section(\"6. Genuinely running: a speed-only evaluator rewards doing nothing\")\n    import time\n    data = list(range(20000))\n    correct = lambda xs: [v * 2 for v in xs]\n    empty = lambda xs: []\n\n    def timed(f):\n        t0 = time.perf_counter()\n        out = f(data)\n        return time.perf_counter() - t0, out\n\n    tc, oc = timed(correct)\n    te, oe = timed(empty)\n    print(\"empty answer faster than correct answer:\", te < tc)\n    print(\"correctness gate: correct passes =\", oc == [v * 2 for v in data], \"| empty passes =\", oe == [v * 2 for v in data])\n    print(\"a score that only measures time prefers the empty answer, and putting a correctness check in front of the timing rejects it; the timings themselves are single measurements on this machine and are not stable enough to quote\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely measuring: three mutation operators, 200 generations, seeds 1 to 10 ---\nsmall (+-1)    exact in 10/10 | median final MSE 0.0 | worst 0.0\nlarge (+-3/5)  exact in 0/10 | median final MSE 89.0 | worst 89.0\nreset (-6..6)  exact in 10/10 | median final MSE 0.0 | worst 0.0\nthe table shows which operator reached the exact target most often with this budget on these ten seeds; the operators were run with the same loop and the same seeds, and with ten runs a gap of one or two is within what a different set of seeds could change\n\n--- 2. Genuinely computing: tournament pressure, formula against simulation ---\ntournament size  1: formula 0.200 | simulated 0.194\ntournament size  3: formula 0.488 | simulated 0.488\ntournament size  5: formula 0.672 | simulated 0.670\ntournament size 10: formula 0.893 | simulated 0.895\nthe chance that a tournament contains at least one top-20 percent member is 1 - 0.8^k, which is 0.488 at k = 3, and the simulated column agrees to about two decimal places; a larger tournament raises that chance and so raises selection pressure\n\n--- 3. Genuinely measuring: one population against four islands (same total budget of mutations) ---\n1 island(s) x 400 generations: exact in 10/10 | median final MSE 0.0 | worst 0.0\n4 island(s) x 100 generations: exact in 10/10 | median final MSE 0.0 | worst 0.0\nboth setups made 400 mutations in total per run and the table reports what each reached; the lab's islands are small lists of four programs with ring migration every ten generations, and this is a toy comparison on a problem easy enough that diversity may not matter\n\n--- 4. Genuinely computing: the overfitting example from the lesson ---\ntraining MSE on 0, 1, 2: 0.0 | held-out MSE on -1, 3, 4: 21600.0\nthe held-out squared errors are 3600, 3600 and 57600, so the mean is 21600; part 2 of the lesson printed 6240.0 for this and part 3 corrected it, and the run agrees with the correction\n\n--- 5. Genuinely measuring: a cubic search with only three training points ---\n20 seeds: training error reached 0 in 1; of those, held-out error stayed above 0 in 0\nwith three training points many cubics fit exactly, and the count above is how many of the runs that fit the training points still disagreed with the target elsewhere; this is overfitting of the evaluator's inputs and not a bug in the search\n\n--- 6. Genuinely running: a speed-only evaluator rewards doing nothing ---\nempty answer faster than correct answer: True\ncorrectness gate: correct passes = True | empty passes = False\na score that only measures time prefers the empty answer, and putting a correctness check in front of the timing rejects it; the timings themselves are single measurements on this machine and are not stable enough to quote"
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
    "headingEn": "Experiment 1: Three mutation operators, 200 generations, seeds 1 to 10",
    "headingKn": "ಪ್ರಯೋಗ 1: Three mutation operators, 200 generations, seeds 1 to 10",
    "bodyEn": "What it ran: Three mutation operators, 200 generations, seeds 1 to 10. What the lab concluded: the table shows which operator reached the exact target most often with this budget on these ten seeds; the operators were run with the same loop and the same seeds, and with ten runs a gap of one or two is within what a different set of seeds could change",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Three mutation operators, 200 generations, seeds 1 to 10. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the table shows which operator reached the exact target most often with this budget on these ten seeds; the operators were run with the same loop and the same seeds, and with ten runs a gap of one or two is within what a different set of seeds could change"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely measuring: three mutation operators, 200 generations, seeds 1 to 10 ---\nsmall (+-1)    exact in 10/10 | median final MSE 0.0 | worst 0.0\nlarge (+-3/5)  exact in 0/10 | median final MSE 89.0 | worst 89.0\nreset (-6..6)  exact in 10/10 | median final MSE 0.0 | worst 0.0"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Tournament pressure, formula against simulation",
    "headingKn": "ಪ್ರಯೋಗ 2: Tournament pressure, formula against simulation",
    "bodyEn": "What it ran: Tournament pressure, formula against simulation. What the lab concluded: the chance that a tournament contains at least one top-20 percent member is 1 - 0.8^k, which is 0.488 at k = 3, and the simulated column agrees to about two decimal places; a larger tournament raises that chance and so raises selection pressure",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Tournament pressure, formula against simulation. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the chance that a tournament contains at least one top-20 percent member is 1 - 0.8^k, which is 0.488 at k = 3, and the simulated column agrees to about two decimal places; a larger tournament raises that chance and so raises selection pressure"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely computing: tournament pressure, formula against simulation ---\ntournament size  1: formula 0.200 | simulated 0.194\ntournament size  3: formula 0.488 | simulated 0.488\ntournament size  5: formula 0.672 | simulated 0.670\ntournament size 10: formula 0.893 | simulated 0.895"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: One population against four islands (same total budget of mutations)",
    "headingKn": "ಪ್ರಯೋಗ 3: One population against four islands (same total budget of mutations)",
    "bodyEn": "What it ran: One population against four islands (same total budget of mutations). What the lab concluded: both setups made 400 mutations in total per run and the table reports what each reached; the lab's islands are small lists of four programs with ring migration every ten generations, and this is a toy comparison on a problem easy enough that diversity may not matter",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: One population against four islands (same total budget of mutations). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): both setups made 400 mutations in total per run and the table reports what each reached; the lab's islands are small lists of four programs with ring migration every ten generations, and this is a toy comparison on a problem easy enough that diversity may not matter"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: one population against four islands (same total budget of mutations) ---\n1 island(s) x 400 generations: exact in 10/10 | median final MSE 0.0 | worst 0.0\n4 island(s) x 100 generations: exact in 10/10 | median final MSE 0.0 | worst 0.0"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: The overfitting example from the lesson",
    "headingKn": "ಪ್ರಯೋಗ 4: The overfitting example from the lesson",
    "bodyEn": "What it ran: The overfitting example from the lesson. What the lab concluded: the held-out squared errors are 3600, 3600 and 57600, so the mean is 21600; part 2 of the lesson printed 6240.0 for this and part 3 corrected it, and the run agrees with the correction",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The overfitting example from the lesson. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the held-out squared errors are 3600, 3600 and 57600, so the mean is 21600; part 2 of the lesson printed 6240.0 for this and part 3 corrected it, and the run agrees with the correction"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely computing: the overfitting example from the lesson ---\ntraining MSE on 0, 1, 2: 0.0 | held-out MSE on -1, 3, 4: 21600.0"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A cubic search with only three training points",
    "headingKn": "ಪ್ರಯೋಗ 5: A cubic search with only three training points",
    "bodyEn": "What it ran: A cubic search with only three training points. What the lab concluded: with three training points many cubics fit exactly, and the count above is how many of the runs that fit the training points still disagreed with the target elsewhere; this is overfitting of the evaluator's inputs and not a bug in the search",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A cubic search with only three training points. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): with three training points many cubics fit exactly, and the count above is how many of the runs that fit the training points still disagreed with the target elsewhere; this is overfitting of the evaluator's inputs and not a bug in the search"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely measuring: a cubic search with only three training points ---\n20 seeds: training error reached 0 in 1; of those, held-out error stayed above 0 in 0"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: A speed-only evaluator rewards doing nothing",
    "headingKn": "ಪ್ರಯೋಗ 6: A speed-only evaluator rewards doing nothing",
    "bodyEn": "What it ran: A speed-only evaluator rewards doing nothing. What the lab concluded: a score that only measures time prefers the empty answer, and putting a correctness check in front of the timing rejects it; the timings themselves are single measurements on this machine and are not stable enough to quote",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A speed-only evaluator rewards doing nothing. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a score that only measures time prefers the empty answer, and putting a correctness check in front of the timing rejects it; the timings themselves are single measurements on this machine and are not stable enough to quote"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: a speed-only evaluator rewards doing nothing ---\nempty answer faster than correct answer: True\ncorrectness gate: correct passes = True | empty passes = False"
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
    "headingEn": "Genuinely Found: Large Mutations Never Reached the Target",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ದೊಡ್ಡ ಮ್ಯುಟೇಶನ್‌ಗಳು ಎಂದೂ ಗುರಿ ತಲುಪಲಿಲ್ಲ",
    "bodyEn": "Section 1: small and reset mutations reached the exact target in 10 of 10 runs, and large mutations (steps of 3 or 5) reached it in 0 of 10 with a median final MSE of 89.0, because the target needs coefficient steps a step of 3 or 5 cannot make exactly. Section 2: the tournament chance 1 - 0.8^k matched simulation: 0.200 and 0.194 at k=1, 0.488 and 0.488 at k=3, 0.672 and 0.670 at k=5, 0.893 and 0.895 at k=10. Section 3: one population and four islands both reached the exact target in 10 of 10 runs at 400 mutations per run, so this problem did not separate them.",
    "bodyKn": "ವಿಭಾಗ 1: ಸಣ್ಣ ಮತ್ತು reset ಮ್ಯುಟೇಶನ್ 10 ರಲ್ಲಿ 10 ಓಟಗಳಲ್ಲಿ ನಿಖರ ಗುರಿ ತಲುಪಿದವು, ಮತ್ತು ದೊಡ್ಡ ಮ್ಯುಟೇಶನ್ (3 ಅಥವಾ 5 ಹೆಜ್ಜೆ) 10 ರಲ್ಲಿ 0 ತಲುಪಿ ಮಧ್ಯಗ ಅಂತಿಮ MSE 89.0 ಪಡೆಯಿತು, ಏಕೆಂದರೆ ಗುರಿಗೆ 3 ಅಥವಾ 5 ಹೆಜ್ಜೆ ನಿಖರವಾಗಿ ಮಾಡಲಾಗದ ಗುಣಾಂಕ ಹೆಜ್ಜೆ ಬೇಕು. ವಿಭಾಗ 2: tournament ಸಾಧ್ಯತೆ 1 - 0.8^k ಸಿಮ್ಯುಲೇಶನ್‌ಗೆ ಹೊಂದಿತು: k=1 ರಲ್ಲಿ 0.200 ಮತ್ತು 0.194, k=3 ರಲ್ಲಿ 0.488 ಮತ್ತು 0.488, k=5 ರಲ್ಲಿ 0.672 ಮತ್ತು 0.670, k=10 ರಲ್ಲಿ 0.893 ಮತ್ತು 0.895. ವಿಭಾಗ 3: ಒಂದು ಜನಸಂಖ್ಯೆ ಮತ್ತು ನಾಲ್ಕು islands ಪ್ರತಿ ಓಟಕ್ಕೆ 400 ಮ್ಯುಟೇಶನ್‌ನಲ್ಲಿ ಎರಡೂ 10 ರಲ್ಲಿ 10 ಓಟಗಳಲ್ಲಿ ನಿಖರ ಗುರಿ ತಲುಪಿದವು, ಆದ್ದರಿಂದ ಈ ಸಮಸ್ಯೆ ಅವನ್ನು ಬೇರ್ಪಡಿಸಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Overfitting, a Weak Evaluator and a Speed-Only Score",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Overfitting, ದುರ್ಬಲ ಮೌಲ್ಯಮಾಪಕ ಮತ್ತು ವೇಗ-ಮಾತ್ರ ಅಂಕ",
    "bodyEn": "Section 4: the candidate f(x) + 10x(x-1)(x-2) scored training MSE 0.0 on 0, 1, 2 and held-out MSE 21600.0 on -1, 3, 4 (3600, 3600 and 57600); Part 2 of the lesson printed 6240.0 and Part 3 corrected it. Section 5: with three training points the cubic search reached training error 0 in only 1 of 20 seeds, and that run had held-out error 0 as well, so this experiment did not produce overfitting. Section 6: an empty answer was faster than the correct one, and a correctness check rejected it.",
    "bodyKn": "ವಿಭಾಗ 4: ಅಭ್ಯರ್ಥಿ f(x) + 10x(x-1)(x-2) 0, 1, 2 ರಲ್ಲಿ training MSE 0.0 ಮತ್ತು -1, 3, 4 ರಲ್ಲಿ held-out MSE 21600.0 (3600, 3600 ಮತ್ತು 57600) ಪಡೆಯಿತು; lesson ನ ಭಾಗ 2 6240.0 ಮುದ್ರಿಸಿ ಭಾಗ 3 ಸರಿಪಡಿಸಿತು. ವಿಭಾಗ 5: ಮೂರು training ಬಿಂದುಗಳೊಂದಿಗೆ cubic ಹುಡುಕಾಟ 20 seeds ರಲ್ಲಿ ಕೇವಲ 1 ರಲ್ಲಿ training ದೋಷ 0 ತಲುಪಿತು, ಮತ್ತು ಆ ಓಟಕ್ಕೆ held-out ದೋಷವೂ 0 ಆಗಿತ್ತು, ಆದ್ದರಿಂದ ಈ ಪ್ರಯೋಗ overfitting ಉತ್ಪಾದಿಸಲಿಲ್ಲ. ವಿಭಾಗ 6: ಖಾಲಿ ಉತ್ತರ ಸರಿಯಾದದ್ದಕ್ಕಿಂತ ವೇಗವಾಗಿತ್ತು, ಮತ್ತು ಸರಿಯಾದತನ ಪರಿಶೀಲನೆ ಅದನ್ನು ತಿರಸ್ಕರಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A search setting that works on an easy problem can fail on another, and an evaluator with a gap lets the search be rewarded for the wrong thing.",
    "bodyKn": "ಸುಲಭ ಸಮಸ್ಯೆಯಲ್ಲಿ ಕೆಲಸ ಮಾಡುವ ಹುಡುಕಾಟ ಸೆಟ್ಟಿಂಗ್ ಇನ್ನೊಂದರಲ್ಲಿ ವಿಫಲವಾಗಬಹುದು, ಮತ್ತು ಅಂತರವಿರುವ ಮೌಲ್ಯಮಾಪಕ ತಪ್ಪಿಗೆ ಹುಡುಕಾಟಕ್ಕೆ ಬಹುಮಾನ ನೀಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"bigger mutations explore more, so they must find more.\" The large operator never reached the target in 10 seeds.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ದೊಡ್ಡ ಮ್ಯುಟೇಶನ್ ಹೆಚ್ಚು ಅನ್ವೇಷಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಹೆಚ್ಚು ಕಂಡುಹಿಡಿಯಬೇಕು.\" ದೊಡ್ಡ ಆಪರೇಟರ್ 10 seeds ನಲ್ಲಿ ಎಂದೂ ಗುರಿ ತಲುಪಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Selection pressure: how strongly the best are favoured. Island: a separate subpopulation. Migration: copying a good program to another island. Overfitting: matching the evaluated inputs only. Correctness gate: a check before timing.",
    "bodyKn": "Selection pressure: ಉತ್ತಮವಾದವುಗಳಿಗೆ ಎಷ್ಟು ಬಲವಾಗಿ ಒಲವು. Island: ಪ್ರತ್ಯೇಕ ಉಪಜನಸಂಖ್ಯೆ. Migration: ಉತ್ತಮ ಪ್ರೋಗ್ರಾಂ ಅನ್ನು ಇನ್ನೊಂದು island ಗೆ ನಕಲಿಸುವುದು. Overfitting: ಮೌಲ್ಯಮಾಪನ ಮಾಡಿದ ಒಳಹರಿವುಗಳಿಗೆ ಮಾತ್ರ ಹೊಂದುವುದು. Correctness gate: ಸಮಯ ಅಳೆಯುವ ಮುನ್ನ ಪರಿಶೀಲನೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Large mutations reached the target in 0 of 10. 2) Tournament pressure matched 1 - 0.8^k. 3) One population and four islands tied. 4) The overfit candidate had held-out MSE 21600. 5) A speed-only score preferred the empty answer.",
    "bodyKn": "1) ದೊಡ್ಡ ಮ್ಯುಟೇಶನ್ 10 ರಲ್ಲಿ 0 ಗುರಿ ತಲುಪಿದವು. 2) tournament ಒತ್ತಡ 1 - 0.8^k ಗೆ ಹೊಂದಿತು. 3) ಒಂದು ಜನಸಂಖ್ಯೆ ಮತ್ತು ನಾಲ್ಕು islands ಸಮ. 4) overfit ಅಭ್ಯರ್ಥಿಗೆ held-out MSE 21600. 5) ವೇಗ-ಮಾತ್ರ ಅಂಕ ಖಾಲಿ ಉತ್ತರ ಆದ್ಯತೆ ನೀಡಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What held-out MSE did the overfit candidate get?",
      "qKn": "overfit ಅಭ್ಯರ್ಥಿ ಯಾವ held-out MSE ಪಡೆಯಿತು?",
      "opts": [
       "21600.0",
       "6240.0",
       "0.0",
       "3600.0"
      ],
      "optsKn": [
       "21600.0",
       "6240.0",
       "0.0",
       "3600.0"
      ],
      "correct": 0
     },
     {
      "q": "How many of 10 seeds reached the target with large mutations?",
      "qKn": "ದೊಡ್ಡ ಮ್ಯುಟೇಶನ್‌ನೊಂದಿಗೆ 10 seeds ರಲ್ಲಿ ಎಷ್ಟು ಗುರಿ ತಲುಪಿದವು?",
      "opts": [
       "0",
       "10",
       "5",
       "9"
      ],
      "optsKn": [
       "0",
       "10",
       "5",
       "9"
      ],
      "correct": 0
     },
     {
      "q": "What is the chance a tournament of 3 includes a top-20 percent member?",
      "qKn": "3 ರ tournament ನಲ್ಲಿ ಉನ್ನತ-20 ಶೇಕಡಾ ಸದಸ್ಯ ಇರುವ ಸಾಧ್ಯತೆ ಏನು?",
      "opts": [
       "0.488",
       "0.200",
       "0.672",
       "0.893"
      ],
      "optsKn": [
       "0.488",
       "0.200",
       "0.672",
       "0.893"
      ],
      "correct": 0
     },
     {
      "q": "Did the three-training-point cubic search produce overfitting in the lab?",
      "qKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಮೂರು-training-ಬಿಂದು cubic ಹುಡುಕಾಟ overfitting ಉತ್ಪಾದಿಸಿತೇ?",
      "opts": [
       "No, the one run that fit also had held-out error 0",
       "Yes, in every run",
       "Yes, in half of the runs",
       "It could not run"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಹೊಂದಿದ ಒಂದು ಓಟಕ್ಕೆ held-out ದೋಷವೂ 0 ಆಗಿತ್ತು",
       "ಹೌದು, ಪ್ರತಿ ಓಟದಲ್ಲಿ",
       "ಹೌದು, ಅರ್ಧ ಓಟಗಳಲ್ಲಿ",
       "ಅದು ಓಡಲಾಗಲಿಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Why does a correctness gate go before timing?",
      "qKn": "ಸಮಯ ಅಳೆಯುವ ಮುನ್ನ ಸರಿಯಾದತನ gate ಏಕೆ ಬರುತ್ತದೆ?",
      "opts": [
       "An empty answer is fast but wrong",
       "Timing is expensive",
       "It removes the archive",
       "It signs the answer"
      ],
      "optsKn": [
       "ಖಾಲಿ ಉತ್ತರ ವೇಗ ಆದರೆ ತಪ್ಪು",
       "ಸಮಯ ಅಳೆಯುವುದು ದುಬಾರಿ",
       "ಅದು ಆರ್ಕೈವ್ ತೆಗೆಯುತ್ತದೆ",
       "ಅದು ಉತ್ತರಕ್ಕೆ ಸಹಿ ಮಾಡುತ್ತದೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
