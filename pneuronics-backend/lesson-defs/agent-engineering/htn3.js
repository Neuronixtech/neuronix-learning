module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b32152c",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Planning with HTN and Evolutionary Search (Part 3 of 3) — Evolutionary Search and Choosing the Right Tool",
 "titleKn": "HTN ಮತ್ತು Evolutionary Search ನೊಂದಿಗೆ ಯೋಜನೆ (ಭಾಗ 3 / 3) — Evolutionary Search ಮತ್ತು ಸರಿಯಾದ ಸಾಧನ ಆರಿಸುವುದು",
 "desc": "Build an evolutionary search around a deterministic evaluator, and find that a weak evaluator accepts wrong answers, a restricted mutation space cannot reach the target, too many survivors remove selection pressure, and removing elitism loses the best candidate.",
 "descKn": "ನಿರ್ಧಾರಾತ್ಮಕ ಮೌಲ್ಯಮಾಪಕದ ಸುತ್ತ evolutionary search ನಿರ್ಮಿಸಿ, ಮತ್ತು ದುರ್ಬಲ ಮೌಲ್ಯಮಾಪಕ ತಪ್ಪು ಉತ್ತರ ಸ್ವೀಕರಿಸುತ್ತದೆ, ನಿರ್ಬಂಧಿತ ಬದಲಾವಣೆ ಸ್ಥಳ ಗುರಿ ತಲುಪದು, ತುಂಬಾ ಉಳಿದವರು ಆಯ್ಕೆ ಒತ್ತಡ ತೆಗೆಯುತ್ತಾರೆ, ಮತ್ತು elitism ತೆಗೆದರೆ ಅತ್ಯುತ್ತಮ ಅಭ್ಯರ್ಥಿ ಕಳೆದುಹೋಗುತ್ತದೆ ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Implement mutation, population, selection, elitism and a fixed-seed loop.",
  "Define a deterministic fitness function and verify results independently.",
  "Show how evaluator quality bounds search quality.",
  "Measure selection pressure across many seeds.",
  "Choose between HTN, evolution, workflow and agent."
 ],
 "objectivesKn": [
  "ಬದಲಾವಣೆ, ಜನಸಂಖ್ಯೆ, ಆಯ್ಕೆ, elitism ಮತ್ತು ನಿಗದಿತ-seed ಚಕ್ರ ಅಳವಡಿಸಿ.",
  "ನಿರ್ಧಾರಾತ್ಮಕ fitness ಕಾರ್ಯ ವ್ಯಾಖ್ಯಾನಿಸಿ ಮತ್ತು ಫಲಿತಾಂಶಗಳನ್ನು ಸ್ವತಂತ್ರವಾಗಿ ಪರಿಶೀಲಿಸಿ.",
  "ಮೌಲ್ಯಮಾಪಕ ಗುಣಮಟ್ಟ ಹುಡುಕಾಟ ಗುಣಮಟ್ಟಕ್ಕೆ ಮಿತಿ ಹೇಗೆ ಎಂದು ತೋರಿಸಿ.",
  "ಹಲವು seeds ಅಡ್ಡಲಾಗಿ ಆಯ್ಕೆ ಒತ್ತಡ ಅಳೆಯಿರಿ.",
  "HTN, ವಿಕಾಸ, workflow ಮತ್ತು agent ನಡುವೆ ಆರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Planning with HTN and Evolutionary Search (Part 3 of 3)",
    "textKn": "HTN ಮತ್ತು Evolutionary Search ನೊಂದಿಗೆ ಯೋಜನೆ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: evolutionary search with a deterministic evaluator, and when to use HTN, evolution, a workflow or an agent. Every output below was genuinely produced by the lab file on Python 3.14.5. The pasted source was cut off in its final quiz, which is rebuilt. Its illustrative generation counts (four generations, intermediate fitnesses of -21, -14, -7) are not claims about the code: with seed 42 this lab reaches the answer in three generations. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ನಿರ್ಧಾರಾತ್ಮಕ ಮೌಲ್ಯಮಾಪಕದೊಂದಿಗೆ evolutionary search, ಮತ್ತು HTN, ವಿಕಾಸ, workflow ಅಥವಾ agent ಯಾವಾಗ ಬಳಸಬೇಕು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಅಂಟಿಸಿದ ಮೂಲ ಅದರ ಅಂತಿಮ ರಸಪ್ರಶ್ನೆಯಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಅದನ್ನು ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. ಅದರ ವಿವರಣಾತ್ಮಕ ತಲೆಮಾರು ಎಣಿಕೆಗಳು (ನಾಲ್ಕು ತಲೆಮಾರು, -21, -14, -7 ಮಧ್ಯಂತರ fitness) ಕೋಡ್ ಬಗ್ಗೆ ಹೇಳಿಕೆಗಳಲ್ಲ: seed 42 ಜೊತೆ ಈ ಲ್ಯಾಬ್ ಮೂರು ತಲೆಮಾರುಗಳಲ್ಲಿ ಉತ್ತರ ತಲುಪುತ್ತದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Better, Not Just Valid",
    "textKn": "ಮಾನ್ಯ ಮಾತ್ರವಲ್ಲ, ಉತ್ತಮ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Different Question",
    "headingKn": "ಬೇರೆ ಪ್ರಶ್ನೆ",
    "bodyEn": "HTN asks whether a valid plan can be constructed. Evolutionary search asks which candidate scores best. Here the target behaviour is f(x) = 2x + 3 on seven example points, and the search space is f(x) = a*x + b with integer a and b. A deterministic fitness function, the negative total absolute error, gives each candidate an exact score, where 0 means perfect. The same candidate always scores the same, which is why this beats asking another LLM whether a program is better.",
    "bodyKn": "HTN ಮಾನ್ಯ ಯೋಜನೆ ನಿರ್ಮಿಸಬಹುದೇ ಎಂದು ಕೇಳುತ್ತದೆ. Evolutionary search ಯಾವ ಅಭ್ಯರ್ಥಿ ಅತ್ಯುತ್ತಮ ಅಂಕ ಪಡೆಯುತ್ತದೆ ಎಂದು ಕೇಳುತ್ತದೆ. ಇಲ್ಲಿ ಗುರಿ ವರ್ತನೆ ಏಳು ಉದಾಹರಣೆ ಬಿಂದುಗಳ ಮೇಲೆ f(x) = 2x + 3, ಮತ್ತು ಹುಡುಕಾಟ ಸ್ಥಳ ಪೂರ್ಣಾಂಕ a ಮತ್ತು b ಇರುವ f(x) = a*x + b. ನಿರ್ಧಾರಾತ್ಮಕ fitness ಕಾರ್ಯ, ಋಣಾತ್ಮಕ ಒಟ್ಟು ಸಂಪೂರ್ಣ ದೋಷ, ಪ್ರತಿ ಅಭ್ಯರ್ಥಿಗೆ ನಿಖರ ಅಂಕ ನೀಡುತ್ತದೆ, 0 ಎಂದರೆ ಪರಿಪೂರ್ಣ. ಅದೇ ಅಭ್ಯರ್ಥಿ ಯಾವಾಗಲೂ ಅದೇ ಅಂಕ ಪಡೆಯುತ್ತದೆ, ಅದಕ್ಕಾಗಿ ಇದು ಪ್ರೋಗ್ರಾಂ ಉತ್ತಮವೇ ಎಂದು ಇನ್ನೊಂದು LLM ಕೇಳುವುದಕ್ಕಿಂತ ಉತ್ತಮ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Evolutionary Loop",
    "headingKn": "ವಿಕಾಸ ಚಕ್ರ",
    "svgCode": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"200\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Evolutionary search: propose, evaluate, select</text>\n  <rect x=\"20\" y=\"26\" width=\"100\" height=\"22\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"70\" y=\"40\" fill=\"#93c5fd\" text-anchor=\"middle\">seed + population</text>\n  <path d=\"M120,37 H140\" stroke=\"#475569\"/>\n  <rect x=\"140\" y=\"26\" width=\"140\" height=\"22\" rx=\"4\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"210\" y=\"40\" fill=\"#fde68a\" text-anchor=\"middle\">EVALUATOR: fitness score</text>\n  <path d=\"M210,48 V66\" stroke=\"#475569\"/>\n  <rect x=\"140\" y=\"66\" width=\"140\" height=\"22\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"210\" y=\"80\" fill=\"#6ee7b7\" text-anchor=\"middle\">select (keep elites)</text>\n  <path d=\"M210,88 V106\" stroke=\"#475569\"/>\n  <rect x=\"140\" y=\"106\" width=\"140\" height=\"22\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"210\" y=\"120\" fill=\"#c4b5fd\" text-anchor=\"middle\">mutate (LLM or random)</text>\n  <path d=\"M140,117 H70 V48\" stroke=\"#a78bfa\" fill=\"none\"/>\n  <text x=\"105\" y=\"112\" fill=\"#94a3b8\" font-size=\"6\">next generation</text>\n  <text x=\"150\" y=\"152\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the evaluator is the specification: selection follows its score exactly</text>\n  <text x=\"150\" y=\"164\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">HTN asks: can I build a valid plan?   Evolution asks: can I find a better one?</text>\n</svg>",
    "captionEn": "A generator proposes variations, an external evaluator scores them, selection keeps the best and the loop repeats.",
    "captionKn": "ಉತ್ಪಾದಕ ಬದಲಾವಣೆಗಳನ್ನು ಸೂಚಿಸುತ್ತದೆ, ಬಾಹ್ಯ ಮೌಲ್ಯಮಾಪಕ ಅಂಕ ನೀಡುತ್ತದೆ, ಆಯ್ಕೆ ಅತ್ಯುತ್ತಮವನ್ನು ಉಳಿಸುತ್ತದೆ ಮತ್ತು ಚಕ್ರ ಪುನರಾವರ್ತಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "HTN versus evolutionary search",
    "headingKn": "HTN ಮತ್ತು evolutionary search",
    "headers": [
     "Property",
     "HTN",
     "Evolutionary search"
    ],
    "rows": [
     [
      "Question",
      "Can I construct a valid plan?",
      "Can I discover a better candidate?"
     ],
     [
      "Feedback",
      "Valid or invalid",
      "Numeric fitness"
     ],
     [
      "LLM role",
      "Suggest missing decompositions",
      "Suggest mutations"
     ],
     [
      "Core requirement",
      "Accurate operator schema",
      "Good evaluator"
     ],
     [
      "Output",
      "Primitive action sequence",
      "High-fitness candidate"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Search",
    "textKn": "ಹುಡುಕಾಟ ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "htn_3.py",
    "headingEn": "Candidate, fitness, mutate and evolutionary_search",
    "headingKn": "Candidate, fitness, mutate ಮತ್ತು evolutionary_search",
    "descEn": "Candidate is a frozen dataclass, so it is immutable and hashable. fitness sums absolute error against the test cases and negates it. mutate nudges a or b by a small random step. evolutionary_search seeds a population around the seed program, evaluates, sorts, keeps the elites, and fills the next generation with mutated elites until fitness reaches 0 or the generation limit. A fixed random.Random makes runs reproducible.",
    "descKn": "Candidate ಫ್ರೋಜನ್ dataclass, ಆದ್ದರಿಂದ ಬದಲಾಗದ ಮತ್ತು hashable. fitness ಪರೀಕ್ಷಾ ಪ್ರಕರಣಗಳ ವಿರುದ್ಧ ಸಂಪೂರ್ಣ ದೋಷ ಕೂಡಿಸಿ ಋಣಾತ್ಮಕಗೊಳಿಸುತ್ತದೆ. mutate a ಅಥವಾ b ಅನ್ನು ಚಿಕ್ಕ ಯಾದೃಚ್ಛಿಕ ಹೆಜ್ಜೆಯಿಂದ ತಳ್ಳುತ್ತದೆ. evolutionary_search seed ಪ್ರೋಗ್ರಾಂ ಸುತ್ತ ಜನಸಂಖ್ಯೆ ಬಿತ್ತಿ, ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ, ವಿಂಗಡಿಸಿ, elites ಉಳಿಸಿ, fitness 0 ತಲುಪುವವರೆಗೆ ಅಥವಾ ತಲೆಮಾರು ಮಿತಿವರೆಗೆ ಮುಂದಿನ ತಲೆಮಾರನ್ನು ಬದಲಾದ elites ನಿಂದ ತುಂಬುತ್ತದೆ. ನಿಗದಿತ random.Random ಓಟಗಳನ್ನು ಪುನರುತ್ಪಾದಕವಾಗಿಸುತ್ತದೆ.",
    "code": "TEST_CASES = [(-3, -3), (-2, -1), (-1, 1), (0, 3), (1, 5), (2, 7), (3, 9)]\n\n\n@dataclass(frozen=True)\nclass Candidate:\n    a: int\n    b: int\n\n    def evaluate(self, x: int) -> int:\n        return self.a * x + self.b\n\n    def expression(self) -> str:\n        sign = \"+\" if self.b >= 0 else \"-\"\n        return f\"{self.a}*x {sign} {abs(self.b)}\"\n\n\ndef fitness(candidate: Candidate, cases=TEST_CASES) -> int:\n    return -sum(abs(candidate.evaluate(x) - target) for x, target in cases)\n\n\ndef mutate(candidate: Candidate, rng: random.Random, change=\"both\") -> Candidate:\n    delta = rng.choice([-2, -1, 1, 2])\n    if change == \"b\":\n        return Candidate(candidate.a, candidate.b + delta)\n    if rng.random() < 0.5:\n        return Candidate(candidate.a + delta, candidate.b)\n    return Candidate(candidate.a, candidate.b + delta)\n\n\ndef evolutionary_search(seed, population_size=20, elite_count=5, generations=30, random_seed=42, cases=TEST_CASES, change=\"both\", verbose=False):\n    rng = random.Random(random_seed)\n    population = [seed]\n    while len(population) < population_size:\n        population.append(mutate(seed, rng, change))\n    best, best_score, history = seed, fitness(seed, cases), []\n    for generation in range(1, generations + 1):\n        scored = sorted(((fitness(c, cases), c) for c in population), key=lambda item: item[0], reverse=True)\n        gen_best_score, gen_best = scored[0]\n        history.append(gen_best_score)\n        if verbose:\n            print(f\"Generation {generation:02d} | best = {gen_best.expression():>10} | fitness = {gen_best_score:>4}\")\n        if gen_best_score > best_score:\n            best, best_score = gen_best, gen_best_score\n        if best_score == 0:\n            return best, best_score, generation, history\n        survivors = [c for _, c in scored[:elite_count]]\n        nxt = list(survivors)\n        while len(nxt) < population_size:\n            nxt.append(mutate(rng.choice(survivors), rng, change))\n        population = nxt\n    return best, best_score, generations, history"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "htn_3.py",
    "headingEn": "main(): eight experiments",
    "headingKn": "main(): ಎಂಟು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() scores candidates, traces the search, checks reproducibility across seeds, breaks the evaluator, restricts the mutation space, compares selection pressures over 30 seeds, removes elitism, and shows caching.",
    "descKn": "main() ಅಭ್ಯರ್ಥಿಗಳಿಗೆ ಅಂಕ ನೀಡುತ್ತದೆ, ಹುಡುಕಾಟ ಹಿಂಬಾಲಿಸುತ್ತದೆ, seeds ಅಡ್ಡಲಾಗಿ ಪುನರುತ್ಪಾದಕತೆ ಪರಿಶೀಲಿಸುತ್ತದೆ, ಮೌಲ್ಯಮಾಪಕ ಮುರಿಯುತ್ತದೆ, ಬದಲಾವಣೆ ಸ್ಥಳ ನಿರ್ಬಂಧಿಸುತ್ತದೆ, 30 seeds ಮೇಲೆ ಆಯ್ಕೆ ಒತ್ತಡಗಳನ್ನು ಹೋಲಿಸುತ್ತದೆ, elitism ತೆಗೆಯುತ್ತದೆ, ಮತ್ತು caching ತೋರಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. The evaluator ranks candidates exactly and repeatably\")\n    for c in (Candidate(1, 0), Candidate(2, 0), Candidate(2, 2), Candidate(2, 3), Candidate(-5, 10)):\n        print(f\"{c.expression():>10} -> fitness {fitness(c)}\")\n    print(\"same candidate, evaluated twice:\", fitness(Candidate(2, 2)), fitness(Candidate(2, 2)))\n\n    section(\"2. The evolutionary loop, seed 42\")\n    best, score, gens, hist = evolutionary_search(Candidate(1, 0), verbose=True)\n    print(f\"\\nBest candidate: {best.expression()} | fitness: {score} | generations used: {gens}\")\n    print(\"verification:\")\n    for x, target in TEST_CASES:\n        print(f\"  x={x:>2} predicted={best.evaluate(x):>3} target={target:>3}\")\n\n    section(\"3. Genuinely checking: is the same seed reproducible, and do other seeds differ?\")\n    runs = [evolutionary_search(Candidate(1, 0), random_seed=s)[2] for s in (42, 42)]\n    print(\"seed 42 twice, generations to solve:\", runs)\n    gens_by_seed = {s: evolutionary_search(Candidate(1, 0), random_seed=s)[2] for s in range(10)}\n    print(\"seeds 0..9, generations to solve:\", gens_by_seed)\n\n    section(\"4. Genuinely checking: an evaluator that only looks at x = 0\")\n    weak = [(0, 3)]\n    for c in (Candidate(2, 3), Candidate(999, 3), Candidate(-7, 3)):\n        print(f\"{c.expression():>10} weak fitness {fitness(c, weak):>3} | full fitness {fitness(c)}\")\n    b, s, g, _ = evolutionary_search(Candidate(1, 0), cases=weak)\n    print(f\"search with the weak evaluator stops at {b.expression()} (fitness {s}); full-evaluator fitness of that answer: {fitness(b)}\")\n\n    section(\"5. Genuinely checking: a mutation space that cannot reach the answer\")\n    b, s, g, _ = evolutionary_search(Candidate(1, 0), change=\"b\", generations=200)\n    print(f\"mutating only b for 200 generations -> {b.expression()} fitness {s} (the target needs a = 2)\")\n\n    section(\"6. Genuinely checking: selection pressure and elitism, 30 seeds each\")\n    for elite in (1, 5, 10, 19):\n        solved = [evolutionary_search(Candidate(1, 0), elite_count=elite, random_seed=s)[2] for s in range(30)]\n        ok = [g for g in solved if g < 30]\n        print(f\"elite_count={elite:>2}: solved within 30 generations {len(ok)}/30, mean generations when solved {sum(ok) / len(ok):.1f}\" if ok else f\"elite_count={elite}: never solved\")\n\n    section(\"7. Genuinely checking: what happens without elitism\")\n    rng = random.Random(7)\n    pop = [Candidate(2, 3)] + [Candidate(rng.randint(-5, 5), rng.randint(-5, 5)) for _ in range(19)]\n    trace = []\n    for gen in range(1, 9):\n        scored = sorted(((fitness(c), c) for c in pop), key=lambda item: item[0], reverse=True)\n        trace.append(scored[0][0])\n        pop = [mutate(rng.choice(pop), rng) for _ in range(20)]\n    print(\"best fitness per generation, perfect candidate present at the start, no elites kept:\", trace)\n\n    section(\"8. Caching works because candidates are immutable and hashable\")\n    cache, calls = {}, 0\n    def cached_fitness(c):\n        nonlocal calls\n        if c not in cache:\n            calls += 1\n            cache[c] = fitness(c)\n        return cache[c]\n    rng = random.Random(1)\n    pop = [mutate(Candidate(1, 0), rng) for _ in range(200)]\n    for c in pop:\n        cached_fitness(c)\n    print(f\"200 candidates evaluated with {calls} real evaluator calls ({len(set(pop))} distinct)\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. The evaluator ranks candidates exactly and repeatably ---\n   1*x + 0 -> fitness -21\n   2*x + 0 -> fitness -21\n   2*x + 2 -> fitness -7\n   2*x + 3 -> fitness 0\n -5*x + 10 -> fitness -91\nsame candidate, evaluated twice: -7 -7\n\n--- 2. The evolutionary loop, seed 42 ---\nGeneration 01 | best =    1*x + 1 | fitness =  -16\nGeneration 02 | best =    2*x + 2 | fitness =   -7\nGeneration 03 | best =    2*x + 3 | fitness =    0\n\nBest candidate: 2*x + 3 | fitness: 0 | generations used: 3\nverification:\n  x=-3 predicted= -3 target= -3\n  x=-2 predicted= -1 target= -1\n  x=-1 predicted=  1 target=  1\n  x= 0 predicted=  3 target=  3\n  x= 1 predicted=  5 target=  5\n  x= 2 predicted=  7 target=  7\n  x= 3 predicted=  9 target=  9\n\n--- 3. Genuinely checking: is the same seed reproducible, and do other seeds differ? ---\nseed 42 twice, generations to solve: [3, 3]\nseeds 0..9, generations to solve: {0: 4, 1: 4, 2: 3, 3: 3, 4: 4, 5: 3, 6: 4, 7: 4, 8: 3, 9: 4}\n\n--- 4. Genuinely checking: an evaluator that only looks at x = 0 ---\n   2*x + 3 weak fitness   0 | full fitness 0\n 999*x + 3 weak fitness   0 | full fitness -11964\n  -7*x + 3 weak fitness   0 | full fitness -108\nsearch with the weak evaluator stops at 1*x + 3 (fitness 0); full-evaluator fitness of that answer: -12\n\n--- 5. Genuinely checking: a mutation space that cannot reach the answer ---\nmutating only b for 200 generations -> 1*x + 3 fitness -12 (the target needs a = 2)\n\n--- 6. Genuinely checking: selection pressure and elitism, 30 seeds each ---\nelite_count= 1: solved within 30 generations 30/30, mean generations when solved 3.1\nelite_count= 5: solved within 30 generations 30/30, mean generations when solved 3.5\nelite_count=10: solved within 30 generations 30/30, mean generations when solved 5.1\nelite_count=19: solved within 30 generations 10/30, mean generations when solved 20.1\n\n--- 7. Genuinely checking: what happens without elitism ---\nbest fitness per generation, perfect candidate present at the start, no elites kept: [0, -12, -7, -13, -13, -12, -13, -13]\n\n--- 8. Caching works because candidates are immutable and hashable ---\n200 candidates evaluated with 8 real evaluator calls (8 distinct)"
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
    "headingEn": "The Search and Its Reproducibility",
    "headingKn": "ಹುಡುಕಾಟ ಮತ್ತು ಅದರ ಪುನರುತ್ಪಾದಕತೆ",
    "bodyEn": "Section 1 scores 1*x + 0 and 2*x + 0 both at -21, 2*x + 2 at -7 (every output one too small, seven cases) and 2*x + 3 at 0. Section 2 starts from the seed 1*x + 0 and reaches the exact answer: generation 1 best is 1*x + 1 at -16, generation 2 is 2*x + 2 at -7, generation 3 is 2*x + 3 at 0, with all seven verification points matching. Section 3 confirms seed 42 gives 3 generations on both runs, while seeds 0 to 9 need 3 or 4. The search is stochastic yet reproducible, and a single seed proves little, so experiments should span many seeds.",
    "bodyKn": "ವಿಭಾಗ 1 1*x + 0 ಮತ್ತು 2*x + 0 ಎರಡನ್ನೂ -21 ರಲ್ಲಿ, 2*x + 2 ಅನ್ನು -7 ರಲ್ಲಿ (ಪ್ರತಿ ಔಟ್‌ಪುಟ್ ಒಂದು ಕಡಿಮೆ, ಏಳು ಪ್ರಕರಣ) ಮತ್ತು 2*x + 3 ಅನ್ನು 0 ರಲ್ಲಿ ಅಂಕಿಸುತ್ತದೆ. ವಿಭಾಗ 2 seed 1*x + 0 ಯಿಂದ ಆರಂಭಿಸಿ ನಿಖರ ಉತ್ತರ ತಲುಪುತ್ತದೆ: ತಲೆಮಾರು 1 ಅತ್ಯುತ್ತಮ 1*x + 1 (-16), ತಲೆಮಾರು 2 2*x + 2 (-7), ತಲೆಮಾರು 3 2*x + 3 (0), ಎಲ್ಲಾ ಏಳು ಪರಿಶೀಲನಾ ಬಿಂದುಗಳು ಹೊಂದುತ್ತವೆ. ವಿಭಾಗ 3 seed 42 ಎರಡೂ ಓಟಗಳಲ್ಲಿ 3 ತಲೆಮಾರು ನೀಡುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತದೆ, seeds 0 ರಿಂದ 9 ಕ್ಕೆ 3 ಅಥವಾ 4 ಬೇಕು. ಹುಡುಕಾಟ ಯಾದೃಚ್ಛಿಕ ಆದರೂ ಪುನರುತ್ಪಾದಕ, ಮತ್ತು ಒಂದು seed ಬಹಳ ಕಡಿಮೆ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಪ್ರಯೋಗಗಳು ಹಲವು seeds ವ್ಯಾಪಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Evaluator Is the Specification",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮೌಲ್ಯಮಾಪಕವೇ ವಿಶೇಷಣ",
    "bodyEn": "Section 4 evaluates only at x = 0. Then 2x + 3, 999x + 3 and -7x + 3 all score a perfect 0, though their full-evaluator fitness is 0, -11964 and -108. A search driven by this weak evaluator stops at 1*x + 3, whose full fitness is -12. The search did nothing wrong; it optimised what it was told to. An evaluator needs enough cases to discriminate, like a test suite, and must reflect the real objective. A candidate can pass tests and still be wrong.",
    "bodyKn": "ವಿಭಾಗ 4 ಕೇವಲ x = 0 ನಲ್ಲಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ. ಆಗ 2x + 3, 999x + 3 ಮತ್ತು -7x + 3 ಎಲ್ಲವೂ ಪರಿಪೂರ್ಣ 0 ಪಡೆಯುತ್ತವೆ, ಆದರೂ ಅವುಗಳ ಪೂರ್ಣ-ಮೌಲ್ಯಮಾಪಕ fitness 0, -11964 ಮತ್ತು -108. ಈ ದುರ್ಬಲ ಮೌಲ್ಯಮಾಪಕ ನಡೆಸುವ ಹುಡುಕಾಟ 1*x + 3 ರಲ್ಲಿ ನಿಲ್ಲುತ್ತದೆ, ಅದರ ಪೂರ್ಣ fitness -12. ಹುಡುಕಾಟ ತಪ್ಪೇನೂ ಮಾಡಲಿಲ್ಲ; ಹೇಳಿದ್ದನ್ನೇ ಅತ್ಯುತ್ತಮಗೊಳಿಸಿತು. ಮೌಲ್ಯಮಾಪಕಕ್ಕೆ ಪರೀಕ್ಷಾ ಸಂಗ್ರಹದಂತೆ ಬೇರ್ಪಡಿಸಲು ಸಾಕಷ್ಟು ಪ್ರಕರಣಗಳು ಬೇಕು ಮತ್ತು ನಿಜವಾದ ಉದ್ದೇಶ ಪ್ರತಿಬಿಂಬಿಸಬೇಕು. ಅಭ್ಯರ್ಥಿ ಪರೀಕ್ಷೆ ಪಾಸಾಗಿಯೂ ತಪ್ಪಾಗಿರಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Reachability, Pressure and Elitism",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ತಲುಪುವಿಕೆ, ಒತ್ತಡ ಮತ್ತು Elitism",
    "bodyEn": "Section 5 mutates only b for 200 generations and ends at 1*x + 3 with fitness -12, because a can never change: the answer lies outside the reachable space. Section 6 runs 30 seeds per setting. Keeping 1, 5 or 10 elites solved 30 of 30 within 30 generations in a mean of 3.1, 3.5 and 5.1 generations, and keeping 19 of 20 solved only 10 of 30, mean 20.1, because almost no selection pressure remains. Section 7 starts with the perfect candidate in the population and keeps no elites: best fitness runs 0, -12, -7, -13 and never returns to 0. Elitism protects the best result from being mutated away.",
    "bodyKn": "ವಿಭಾಗ 5 ಕೇವಲ b ಅನ್ನು 200 ತಲೆಮಾರು ಬದಲಿಸಿ 1*x + 3 ರಲ್ಲಿ fitness -12 ರೊಂದಿಗೆ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ, ಏಕೆಂದರೆ a ಎಂದೂ ಬದಲಾಗದು: ಉತ್ತರ ತಲುಪಬಹುದಾದ ಸ್ಥಳದ ಹೊರಗಿದೆ. ವಿಭಾಗ 6 ಪ್ರತಿ ಸೆಟ್ಟಿಂಗ್‌ಗೆ 30 seeds ಚಲಾಯಿಸುತ್ತದೆ. 1, 5 ಅಥವಾ 10 elites ಇಟ್ಟರೆ 30 ತಲೆಮಾರುಗಳೊಳಗೆ 30 ರಲ್ಲಿ 30 ಪರಿಹಾರ, ಸರಾಸರಿ 3.1, 3.5 ಮತ್ತು 5.1 ತಲೆಮಾರು, ಮತ್ತು 20 ರಲ್ಲಿ 19 ಇಟ್ಟರೆ 30 ರಲ್ಲಿ 10 ಮಾತ್ರ ಪರಿಹಾರ, ಸರಾಸರಿ 20.1, ಏಕೆಂದರೆ ಬಹುತೇಕ ಆಯ್ಕೆ ಒತ್ತಡ ಉಳಿಯುವುದಿಲ್ಲ. ವಿಭಾಗ 7 ಪರಿಪೂರ್ಣ ಅಭ್ಯರ್ಥಿ ಜನಸಂಖ್ಯೆಯಲ್ಲಿರುವಂತೆ elites ಇಡದೆ ಆರಂಭಿಸುತ್ತದೆ: ಅತ್ಯುತ್ತಮ fitness 0, -12, -7, -13 ಹೋಗುತ್ತದೆ ಮತ್ತು ಎಂದೂ 0 ಗೆ ಮರಳುವುದಿಲ್ಲ. Elitism ಅತ್ಯುತ್ತಮ ಫಲಿತಾಂಶ ಬದಲಾವಣೆಯಿಂದ ಕಳೆದುಹೋಗದಂತೆ ರಕ್ಷಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Caching and Immutability",
    "headingKn": "Caching ಮತ್ತು ಅಬದಲಾವಣೆ",
    "bodyEn": "Section 8 evaluates 200 mutated candidates with only 8 real evaluator calls, because only 8 are distinct and a frozen dataclass can key a dictionary. When an evaluator costs hours of simulation, caching and parallel evaluation of a generation matter. A real code-evolution evaluator also needs a pipeline: parse, restrict, compile, correctness tests before any benchmark, with timeouts, memory limits and a sandbox, and a penalty instead of a crash for invalid candidates.",
    "bodyKn": "ವಿಭಾಗ 8 200 ಬದಲಾದ ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಕೇವಲ 8 ನಿಜವಾದ ಮೌಲ್ಯಮಾಪಕ ಕರೆಗಳಿಂದ ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ, ಏಕೆಂದರೆ 8 ಮಾತ್ರ ಭಿನ್ನ ಮತ್ತು ಫ್ರೋಜನ್ dataclass ನಿಘಂಟನ್ನು key ಮಾಡಬಲ್ಲದು. ಮೌಲ್ಯಮಾಪಕ ಗಂಟೆಗಳ ಸಿಮ್ಯುಲೇಶನ್ ವೆಚ್ಚ ಮಾಡಿದಾಗ ಕ್ಯಾಶಿಂಗ್ ಮತ್ತು ತಲೆಮಾರಿನ ಸಮಾನಾಂತರ ಮೌಲ್ಯಮಾಪನ ಮುಖ್ಯ. ನಿಜವಾದ ಕೋಡ್-ವಿಕಾಸ ಮೌಲ್ಯಮಾಪಕಕ್ಕೆ ಪೈಪ್‌ಲೈನ್ ಕೂಡ ಬೇಕು: parse, ನಿರ್ಬಂಧ, compile, ಯಾವುದೇ benchmark ಮೊದಲು ಸರಿಯಾಗಿರುವಿಕೆ ಪರೀಕ್ಷೆ, timeouts, ಮೆಮೊರಿ ಮಿತಿಗಳು ಮತ್ತು sandbox, ಮತ್ತು ಅಮಾನ್ಯ ಅಭ್ಯರ್ಥಿಗಳಿಗೆ crash ಬದಲು ದಂಡ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Choosing the Right Tool",
    "headingKn": "ಸರಿಯಾದ ಸಾಧನ ಆರಿಸುವುದು",
    "bodyEn": "Do hard formal action constraints exist? Use HTN. If not, can a program measure candidate quality? Use evolutionary search. If neither, can the steps be predicted? Use a workflow or plan-and-execute. Otherwise use a tool-using agent. The two techniques can nest: an HTN step such as optimize_schedule can call an evolutionary optimiser, then validate its result. Both share one philosophy: the model proposes, an external system decides what survives. A correctness-first evaluator is also vital in optimisation: a fast function that returns the wrong answer must not win.",
    "bodyKn": "ಕಠಿಣ ಔಪಚಾರಿಕ ಕ್ರಿಯಾ ನಿರ್ಬಂಧಗಳಿವೆಯೇ? HTN ಬಳಸಿ. ಇಲ್ಲದಿದ್ದರೆ, ಪ್ರೋಗ್ರಾಂ ಅಭ್ಯರ್ಥಿ ಗುಣಮಟ್ಟ ಅಳೆಯಬಹುದೇ? Evolutionary search ಬಳಸಿ. ಯಾವುದೂ ಇಲ್ಲದಿದ್ದರೆ, ಹೆಜ್ಜೆಗಳನ್ನು ಊಹಿಸಬಹುದೇ? Workflow ಅಥವಾ plan-and-execute ಬಳಸಿ. ಇಲ್ಲದಿದ್ದರೆ tool ಬಳಸುವ agent ಬಳಸಿ. ಎರಡು ತಂತ್ರಗಳು ಒಳಗೊಳ್ಳಬಹುದು: optimize_schedule ನಂತಹ HTN ಹೆಜ್ಜೆ ವಿಕಾಸ ಅತ್ಯುತ್ತಮೀಕರಣಕಾರನನ್ನು ಕರೆದು ಅದರ ಫಲಿತಾಂಶ ಮಾನ್ಯ ಮಾಡಬಹುದು. ಎರಡೂ ಒಂದೇ ತತ್ವ ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ: ಮಾದರಿ ಸೂಚಿಸುತ್ತದೆ, ಬಾಹ್ಯ ವ್ಯವಸ್ಥೆ ಯಾವುದು ಉಳಿಯುತ್ತದೆ ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ. ಅತ್ಯುತ್ತಮೀಕರಣದಲ್ಲೂ ಸರಿಯಾಗಿರುವಿಕೆ-ಮೊದಲ ಮೌಲ್ಯಮಾಪಕ ಮುಖ್ಯ: ತಪ್ಪು ಉತ್ತರ ಹಿಂತಿರುಗಿಸುವ ವೇಗದ ಕಾರ್ಯ ಗೆಲ್ಲಬಾರದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "For problems where quality can be measured by a program, such as code speed, schedules or numeric constructions, a creative generator plus a strict scorer finds improvements no one wrote down, and the score keeps the model honest.",
    "bodyKn": "ಕೋಡ್ ವೇಗ, ವೇಳಾಪಟ್ಟಿ ಅಥವಾ ಸಂಖ್ಯಾ ರಚನೆಗಳಂತೆ ಗುಣಮಟ್ಟವನ್ನು ಪ್ರೋಗ್ರಾಂ ಅಳೆಯಬಲ್ಲ ಸಮಸ್ಯೆಗಳಿಗೆ, ಸೃಜನಶೀಲ ಉತ್ಪಾದಕ ಮತ್ತು ಕಟ್ಟುನಿಟ್ಟಾದ ಅಂಕ ನೀಡುವವನು ಯಾರೂ ಬರೆಯದ ಸುಧಾರಣೆಗಳನ್ನು ಕಂಡುಹಿಡಿಯುತ್ತಾರೆ, ಮತ್ತು ಅಂಕ ಮಾದರಿಯನ್ನು ಪ್ರಾಮಾಣಿಕವಾಗಿಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"evolution finds the global optimum.\" It finds a high scorer under the evaluator and the reachable space, with no proof that nothing better exists.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ವಿಕಾಸ ಜಾಗತಿಕ ಅತ್ಯುತ್ತಮ ಕಂಡುಹಿಡಿಯುತ್ತದೆ.\" ಅದು ಮೌಲ್ಯಮಾಪಕ ಮತ್ತು ತಲುಪಬಹುದಾದ ಸ್ಥಳದ ಅಡಿಯಲ್ಲಿ ಹೆಚ್ಚು ಅಂಕದವನನ್ನು ಕಂಡುಹಿಡಿಯುತ್ತದೆ, ಉತ್ತಮ ಯಾವುದೂ ಇಲ್ಲ ಎಂಬ ಪುರಾವೆ ಇಲ್ಲದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Fitness: a machine-computable score. Population: the current set of candidates. Mutation: producing a nearby candidate. Selection: preferring higher fitness. Elitism: keeping the best candidates unchanged. Exploration and exploitation: trying new regions versus refining good ones. Reachability: whether the answer lies inside what mutation can produce.",
    "bodyKn": "Fitness: ಯಂತ್ರ-ಲೆಕ್ಕಹಾಕಬಹುದಾದ ಅಂಕ. Population: ಅಭ್ಯರ್ಥಿಗಳ ಪ್ರಸ್ತುತ ಗಣ. Mutation: ಹತ್ತಿರದ ಅಭ್ಯರ್ಥಿ ಉತ್ಪಾದಿಸುವುದು. Selection: ಹೆಚ್ಚಿನ fitness ಗೆ ಆದ್ಯತೆ. Elitism: ಅತ್ಯುತ್ತಮ ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಬದಲಾಯಿಸದೆ ಉಳಿಸುವುದು. Exploration ಮತ್ತು exploitation: ಹೊಸ ಪ್ರದೇಶ ಪ್ರಯತ್ನ ಮತ್ತು ಒಳ್ಳೆಯದನ್ನು ಪರಿಷ್ಕರಿಸುವುದು. Reachability: ಉತ್ತರ ಬದಲಾವಣೆ ಉತ್ಪಾದಿಸಬಲ್ಲದರ ಒಳಗಿದೆಯೇ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) HTN builds a valid plan; evolution finds a better candidate. 2) A deterministic evaluator gives the search its direction. 3) With seed 42 the search solved the problem in 3 generations and other seeds needed 3 to 4. 4) A weak evaluator accepted 999x + 3 as perfect. 5) Mutation that cannot change a can never reach 2x + 3. 6) Too many survivors removes selection pressure, 1 to 10 elites worked best here. 7) Without elitism the perfect candidate was lost. Evaluator quality bounds search quality.",
    "bodyKn": "1) HTN ಮಾನ್ಯ ಯೋಜನೆ ನಿರ್ಮಿಸುತ್ತದೆ; ವಿಕಾಸ ಉತ್ತಮ ಅಭ್ಯರ್ಥಿ ಕಂಡುಹಿಡಿಯುತ್ತದೆ. 2) ನಿರ್ಧಾರಾತ್ಮಕ ಮೌಲ್ಯಮಾಪಕ ಹುಡುಕಾಟಕ್ಕೆ ದಿಕ್ಕು ನೀಡುತ್ತದೆ. 3) Seed 42 ಜೊತೆ ಹುಡುಕಾಟ 3 ತಲೆಮಾರುಗಳಲ್ಲಿ ಪರಿಹರಿಸಿತು ಮತ್ತು ಇತರ seeds ಗೆ 3 ರಿಂದ 4 ಬೇಕಾಯಿತು. 4) ದುರ್ಬಲ ಮೌಲ್ಯಮಾಪಕ 999x + 3 ಅನ್ನು ಪರಿಪೂರ್ಣ ಎಂದು ಸ್ವೀಕರಿಸಿತು. 5) a ಬದಲಿಸಲಾಗದ ಬದಲಾವಣೆ ಎಂದೂ 2x + 3 ತಲುಪದು. 6) ತುಂಬಾ ಉಳಿದವರು ಆಯ್ಕೆ ಒತ್ತಡ ತೆಗೆಯುತ್ತಾರೆ, ಇಲ್ಲಿ 1 ರಿಂದ 10 elites ಉತ್ತಮವಾಗಿ ಕೆಲಸ ಮಾಡಿದವು. 7) Elitism ಇಲ್ಲದೆ ಪರಿಪೂರ್ಣ ಅಭ್ಯರ್ಥಿ ಕಳೆದುಹೋಯಿತು. ಮೌಲ್ಯಮಾಪಕ ಗುಣಮಟ್ಟ ಹುಡುಕಾಟ ಗುಣಮಟ್ಟಕ್ಕೆ ಮಿತಿ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What is the main role of the fitness function?",
      "qKn": "Fitness ಕಾರ್ಯದ ಮುಖ್ಯ ಪಾತ್ರ ಏನು?",
      "opts": [
       "Generate prompts",
       "Decompose HTN tasks",
       "Produce a machine-checkable score that drives selection",
       "Store memory"
      ],
      "optsKn": [
       "prompts ಉತ್ಪಾದಿಸುವುದು",
       "HTN ಕಾರ್ಯಗಳನ್ನು ವಿಭಜಿಸುವುದು",
       "ಆಯ್ಕೆ ನಡೆಸುವ ಯಂತ್ರ-ಪರಿಶೀಲಿಸಬಹುದಾದ ಅಂಕ ನೀಡುವುದು",
       "ಮೆಮೊರಿ ಸಂಗ್ರಹಿಸುವುದು"
      ],
      "correct": 2
     },
     {
      "q": "When the evaluator looked only at x = 0, what happened?",
      "qKn": "ಮೌಲ್ಯಮಾಪಕ ಕೇವಲ x = 0 ನೋಡಿದಾಗ ಏನಾಯಿತು?",
      "opts": [
       "Nothing",
       "999x + 3 and -7x + 3 scored perfectly, and the search stopped at an answer with full fitness -12",
       "The search crashed",
       "It found 2x + 3 faster"
      ],
      "optsKn": [
       "ಏನೂ ಇಲ್ಲ",
       "999x + 3 ಮತ್ತು -7x + 3 ಪರಿಪೂರ್ಣ ಅಂಕ ಪಡೆದವು, ಮತ್ತು ಹುಡುಕಾಟ ಪೂರ್ಣ fitness -12 ಇರುವ ಉತ್ತರದಲ್ಲಿ ನಿಂತಿತು",
       "ಹುಡುಕಾಟ crash ಆಯಿತು",
       "ಅದು 2x + 3 ವೇಗವಾಗಿ ಕಂಡುಹಿಡಿಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why did mutating only b never solve the problem?",
      "qKn": "ಕೇವಲ b ಬದಲಿಸುವುದು ಸಮಸ್ಯೆ ಎಂದೂ ಏಕೆ ಪರಿಹರಿಸಲಿಲ್ಲ?",
      "opts": [
       "b is too small",
       "The answer needs a = 2, which was outside the reachable space",
       "Fitness was wrong",
       "Too few generations"
      ],
      "optsKn": [
       "b ತುಂಬಾ ಚಿಕ್ಕದು",
       "ಉತ್ತರಕ್ಕೆ a = 2 ಬೇಕು, ಅದು ತಲುಪಬಹುದಾದ ಸ್ಥಳದ ಹೊರಗಿತ್ತು",
       "Fitness ತಪ್ಪಾಗಿತ್ತು",
       "ತುಂಬಾ ಕಡಿಮೆ ತಲೆಮಾರುಗಳು"
      ],
      "correct": 1
     },
     {
      "q": "What did the no-elitism experiment show?",
      "qKn": "Elitism ಇಲ್ಲದ ಪ್ರಯೋಗ ಏನು ತೋರಿಸಿತು?",
      "opts": [
       "Elitism is unnecessary",
       "A perfect candidate present at the start was mutated away and fitness never returned to 0",
       "Mutation is harmful",
       "The population grew"
      ],
      "optsKn": [
       "Elitism ಅಗತ್ಯವಿಲ್ಲ",
       "ಆರಂಭದಲ್ಲಿದ್ದ ಪರಿಪೂರ್ಣ ಅಭ್ಯರ್ಥಿ ಬದಲಾವಣೆಯಿಂದ ಕಳೆದುಹೋಯಿತು ಮತ್ತು fitness ಎಂದೂ 0 ಗೆ ಮರಳಲಿಲ್ಲ",
       "ಬದಲಾವಣೆ ಹಾನಿಕರ",
       "ಜನಸಂಖ್ಯೆ ಬೆಳೆಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Which statement best distinguishes HTN from evolutionary search?",
      "qKn": "HTN ಮತ್ತು evolutionary search ಅನ್ನು ಯಾವ ಹೇಳಿಕೆ ಉತ್ತಮವಾಗಿ ಬೇರ್ಪಡಿಸುತ್ತದೆ?",
      "opts": [
       "They are identical",
       "HTN constructs valid plans under explicit action constraints; evolutionary search optimises candidates by fitness",
       "Evolution needs no evaluator",
       "HTN has no state"
      ],
      "optsKn": [
       "ಅವು ಒಂದೇ",
       "HTN ಸ್ಪಷ್ಟ ಕ್ರಿಯಾ ನಿರ್ಬಂಧಗಳ ಅಡಿಯಲ್ಲಿ ಮಾನ್ಯ ಯೋಜನೆ ನಿರ್ಮಿಸುತ್ತದೆ; evolutionary search fitness ಮೂಲಕ ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಅತ್ಯುತ್ತಮಗೊಳಿಸುತ್ತದೆ",
       "ವಿಕಾಸಕ್ಕೆ ಮೌಲ್ಯಮಾಪಕ ಬೇಡ",
       "HTN ಗೆ state ಇಲ್ಲ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
