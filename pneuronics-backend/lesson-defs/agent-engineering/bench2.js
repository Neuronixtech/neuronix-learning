module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321544",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Agent Benchmarks: SWE-bench, GAIA and AgentBench (Part 2 of 3) — Tool Chains, Levels and Exact-Answer Scoring",
 "titleKn": "Agent Benchmarks: SWE-bench, GAIA ಮತ್ತು AgentBench (ಭಾಗ 2 / 3) — Tool ಸರಪಳಿಗಳು, ಹಂತಗಳು ಮತ್ತು ನಿಖರ-ಉತ್ತರ ಅಂಕನ",
 "desc": "Build a GAIA-style task type, a difficulty classifier and exact-answer scorers, then game the classifier, vary the normalisation rules, and compute how chain length compounds assumed step errors.",
 "descKn": "GAIA-ಶೈಲಿಯ ಕಾರ್ಯ ಪ್ರಕಾರ, ಕಷ್ಟ ವರ್ಗೀಕಾರಕ ಮತ್ತು ನಿಖರ-ಉತ್ತರ ಅಂಕಕಗಳನ್ನು ನಿರ್ಮಿಸಿ, ನಂತರ ವರ್ಗೀಕಾರಕವನ್ನು ವಂಚಿಸಿ, normalisation ನಿಯಮ ಬದಲಿಸಿ, ಮತ್ತು ಸರಪಳಿ ಉದ್ದ ಊಹಿಸಿದ ಹಂತ ದೋಷಗಳನ್ನು ಹೇಗೆ ಗುಣಿಸುತ್ತದೆ ಎಂದು ಲೆಕ್ಕಿಸಿ.",
 "objectives": [
  "Describe the three GAIA levels.",
  "Classify tasks by operations and modalities.",
  "Explain why normalisation is part of the score.",
  "Compute chain reliability from step rates.",
  "Separate tool availability from correct use."
 ],
 "objectivesKn": [
  "GAIA ಮೂರು ಹಂತಗಳನ್ನು ವಿವರಿಸಿ.",
  "Operations ಮತ್ತು modalities ಮೂಲಕ ಕಾರ್ಯ ವರ್ಗೀಕರಿಸಿ.",
  "Normalisation ಅಂಕದ ಭಾಗ ಏಕೆ ಎಂದು ವಿವರಿಸಿ.",
  "ಹಂತ ದರಗಳಿಂದ ಸರಪಳಿ ವಿಶ್ವಾಸಾರ್ಹತೆ ಲೆಕ್ಕಿಸಿ.",
  "Tool ಲಭ್ಯತೆ ಮತ್ತು ಸರಿಯಾದ ಬಳಕೆಯನ್ನು ಬೇರ್ಪಡಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Agent Benchmarks: SWE-bench, GAIA and AgentBench (Part 2 of 3)",
    "textKn": "Agent Benchmarks: SWE-bench, GAIA ಮತ್ತು AgentBench (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: GAIA-style tasks, difficulty classification, exact-answer scoring and chain reliability. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind SWE-bench, GAIA and AgentBench, not the real software, and candidate patches, agents and models are scripted stand-ins, so no real LLM behaviour is measured. The tasks are invented examples in the GAIA spirit, not GAIA questions. The per-step success rates in section 5 are assumptions, so the chain figures are arithmetic from them and not measurements of any model. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: GAIA-ಶೈಲಿಯ ಕಾರ್ಯಗಳು, ಕಷ್ಟ ವರ್ಗೀಕರಣ, ನಿಖರ-ಉತ್ತರ ಅಂಕನ ಮತ್ತು ಸರಪಳಿ ವಿಶ್ವಾಸಾರ್ಹತೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು SWE-bench, GAIA ಮತ್ತು AgentBench ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಅಭ್ಯರ್ಥಿ patches, agents ಮತ್ತು ಮಾದರಿಗಳು ಸ್ಕ್ರಿಪ್ಟ್ ಬದಲಿಗಳು, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಕಾರ್ಯಗಳು GAIA ಆಶಯದ ಕಲ್ಪಿತ ಉದಾಹರಣೆಗಳು, GAIA ಪ್ರಶ್ನೆಗಳಲ್ಲ. ವಿಭಾಗ 5 ರ ಪ್ರತಿ-ಹಂತ ಯಶಸ್ಸಿನ ದರಗಳು ಊಹೆಗಳು, ಆದ್ದರಿಂದ ಸರಪಳಿ ಅಂಕಿಅಂಶಗಳು ಅವುಗಳಿಂದ ಲೆಕ್ಕಾಚಾರ, ಯಾವುದೇ ಮಾದರಿಯ ಅಳತೆಗಳಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Easy for People, Long for Tools",
    "textKn": "ಜನರಿಗೆ ಸುಲಭ, tools ಗೆ ಉದ್ದ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A GAIA Task Is a Pipeline",
    "headingKn": "GAIA ಕಾರ್ಯ ಒಂದು ಪೈಪ್‌ಲೈನ್",
    "bodyEn": "GAIA questions look simple to a person but need a chain: search, read, open a file, inspect a chart, calculate, format. Level 1 needs few steps, Level 3 needs long chains over several kinds of evidence. The answer is a short string checked by exact match, which makes the normalisation rules part of the benchmark. This part builds a task type, a difficulty classifier and a scorer, then tests each.",
    "bodyKn": "GAIA ಪ್ರಶ್ನೆಗಳು ವ್ಯಕ್ತಿಗೆ ಸರಳ ಕಾಣುತ್ತವೆ ಆದರೆ ಸರಪಳಿ ಬೇಕು: ಹುಡುಕು, ಓದು, ಫೈಲ್ ತೆರೆ, ಚಾರ್ಟ್ ಪರಿಶೀಲಿಸು, ಲೆಕ್ಕಿಸು, ಸ್ವರೂಪಿಸು. ಹಂತ 1 ಕ್ಕೆ ಕೆಲವು ಹಂತಗಳು, ಹಂತ 3 ಕ್ಕೆ ಹಲವು ರೀತಿಯ ಸಾಕ್ಷ್ಯದ ಮೇಲೆ ಉದ್ದ ಸರಪಳಿಗಳು ಬೇಕು. ಉತ್ತರ ಚಿಕ್ಕ ಸ್ಟ್ರಿಂಗ್, ನಿಖರ ಹೊಂದಾಣಿಕೆಯಿಂದ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ normalisation ನಿಯಮಗಳು benchmark ನ ಭಾಗ. ಈ ಭಾಗ ಕಾರ್ಯ ಪ್ರಕಾರ, ಕಷ್ಟ ವರ್ಗೀಕಾರಕ ಮತ್ತು ಅಂಕಕ ನಿರ್ಮಿಸಿ ಪ್ರತಿಯೊಂದನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "A Chain of Operations",
    "headingKn": "ಕಾರ್ಯಾಚರಣೆಗಳ ಸರಪಳಿ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">A GAIA task is a chain of operations</text><rect x=\"5\" y=\"40\" width=\"52\" height=\"30\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"31\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">search</text><rect x=\"65\" y=\"40\" width=\"52\" height=\"30\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"91\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">extract</text><rect x=\"125\" y=\"40\" width=\"52\" height=\"30\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"151\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">open_file</text><rect x=\"185\" y=\"40\" width=\"52\" height=\"30\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"211\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">read_chart</text><rect x=\"245\" y=\"40\" width=\"50\" height=\"30\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"270\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">calculate</text><path d=\"M57,55 H65 M117,55 H125 M177,55 H185 M237,55 H245\" stroke=\"#475569\"/><rect x=\"70\" y=\"110\" width=\"160\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">exact-answer check</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">after normalisation</text><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">every step must succeed, then the string must match</text></svg>",
    "captionEn": "Every step must work, then the answer string must match.",
    "captionKn": "ಪ್ರತಿ ಹಂತ ಕೆಲಸ ಮಾಡಬೇಕು, ನಂತರ ಉತ್ತರ ಸ್ಟ್ರಿಂಗ್ ಹೊಂದಬೇಕು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Levels in the lab classifier",
    "headingKn": "ಲ್ಯಾಬ್ ವರ್ಗೀಕಾರಕದ ಹಂತಗಳು",
    "headers": [
     "Level",
     "Operations",
     "Modalities"
    ],
    "rows": [
     [
      "Level 1",
      "2 or fewer",
      "1"
     ],
     [
      "Level 2",
      "3 to 5",
      "2 or fewer"
     ],
     [
      "Level 3",
      "more than 5, or 3+ modalities",
      "any"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Classifier and Scorer",
    "textKn": "ವರ್ಗೀಕಾರಕ ಮತ್ತು ಅಂಕಕ ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "bench_2.py",
    "headingEn": "GaiaTask, classifier and normalisers",
    "headingKn": "GaiaTask, ವರ್ಗೀಕಾರಕ ಮತ್ತು normalisers",
    "descEn": "A task stores its operations and modalities. classify_gaia_difficulty uses operation count and distinct modalities. normalise lowercases, strips whitespace and a trailing period; normalise_numbers also drops commas and unifies 12 and 12.0.",
    "descKn": "ಕಾರ್ಯ ತನ್ನ operations ಮತ್ತು modalities ಅನ್ನು ಇಡುತ್ತದೆ. classify_gaia_difficulty operation ಎಣಿಕೆ ಮತ್ತು ವಿಭಿನ್ನ modalities ಬಳಸುತ್ತದೆ. normalise ಸಣ್ಣಕ್ಷರ ಮಾಡಿ ಖಾಲಿ ಜಾಗ ಮತ್ತು ಕೊನೆಯ ಚುಕ್ಕೆ ತೆಗೆಯುತ್ತದೆ; normalise_numbers ಅಲ್ಪವಿರಾಮ ತೆಗೆದು 12 ಮತ್ತು 12.0 ಏಕೀಕರಿಸುತ್ತದೆ.",
    "code": "class GaiaDifficulty(Enum):\n    LEVEL_1 = \"Level 1\"\n    LEVEL_2 = \"Level 2\"\n    LEVEL_3 = \"Level 3\"\n\n\n@dataclass\nclass GaiaTask:\n    task_id: str\n    question: str\n    operations: List[str]\n    modalities: List[str]\n    answer: str\n\n\ndef classify_gaia_difficulty(task):\n    depth, modes = len(task.operations), len(set(task.modalities))\n    if depth <= 2 and modes <= 1:\n        return GaiaDifficulty.LEVEL_1\n    if depth <= 5 and modes <= 2:\n        return GaiaDifficulty.LEVEL_2\n    return GaiaDifficulty.LEVEL_3\n\n\nTASKS = [\n    GaiaTask(\"g1\", \"Capital of France?\", [\"search\", \"extract\"], [\"text\"], \"Paris\"),\n    GaiaTask(\"g2\", \"Years between director's birth and film release\", [\"search\", \"extract\", \"search\", \"extract\", \"calculate\"], [\"text\"], \"12\"),\n    GaiaTask(\"g3\", \"Total cost of items in the attached spreadsheet and chart\", [\"open_file\", \"parse_table\", \"read_chart\", \"search\", \"extract\", \"calculate\", \"format\"], [\"file\", \"image\", \"text\"], \"1,250\"),\n]\n\n\ndef normalise(s):\n    s = s.strip().lower().rstrip(\".\")\n    return re.sub(r\"\\s+\", \" \", s)\n\n\ndef normalise_numbers(s):\n    s = normalise(s).replace(\",\", \"\")\n    try:\n        f = float(s)\n        return str(int(f)) if f == int(f) else str(f)\n    except ValueError:\n        return s\n\n\ndef exact(a, b):\n    return a == b"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "bench_2.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() classifies the samples, games the classifier, scores six answers under three normalisation rules, probes over-lenient matching, simulates chain success at three assumed step rates and checks tools against order.",
    "descKn": "main() ಮಾದರಿಗಳನ್ನು ವರ್ಗೀಕರಿಸುತ್ತದೆ, ವರ್ಗೀಕಾರಕವನ್ನು ವಂಚಿಸುತ್ತದೆ, ಆರು ಉತ್ತರಗಳಿಗೆ ಮೂರು normalisation ನಿಯಮಗಳಡಿ ಅಂಕ ನೀಡುತ್ತದೆ, ಅತಿ ಉದಾರ ಹೊಂದಾಣಿಕೆ ಪರೀಕ್ಷಿಸುತ್ತದೆ, ಮೂರು ಊಹಿಸಿದ ಹಂತ ದರಗಳಲ್ಲಿ ಸರಪಳಿ ಯಶಸ್ಸು ಅನುಕರಿಸುತ್ತದೆ ಮತ್ತು tools ಅನ್ನು ಕ್ರಮದ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Classifier on the three sample tasks\")\n    for t in TASKS:\n        print(f\"{t.task_id}: depth {len(t.operations)}, modalities {sorted(set(t.modalities))} -> {classify_gaia_difficulty(t).value}\")\n\n    section(\"2. Genuinely checking: the classifier counts operations, not difficulty\")\n    easy_padded = GaiaTask(\"p\", \"Capital of France?\", [\"search\", \"extract\"] + [\"noop\"] * 6, [\"text\"], \"Paris\")\n    hard_short = GaiaTask(\"h\", \"Reconcile the attached audio and chart\", [\"transcribe\", \"calculate\"], [\"audio\", \"image\", \"text\"], \"?\")\n    print(\"one-hop question padded with 6 no-op steps ->\", classify_gaia_difficulty(easy_padded).value)\n    print(\"two operations over audio+image+text           ->\", classify_gaia_difficulty(hard_short).value)\n    print(\"padding with no-op steps raised a one-hop question to Level 3, and the modality count alone made a two-operation task Level 3, so the label is a proxy for chain length and modality count, not for how hard the reasoning is\")\n\n    section(\"3. Genuinely measuring: how answer normalisation changes the score\")\n    gold = [\"Paris\", \"12\", \"1,250\", \"New York\", \"0.5\", \"no\"]\n    answers = [\"paris.\", \"12.0\", \"1250\", \"new  york\", \"1/2\", \"No.\"]\n    for g, a in zip(gold, answers):\n        print(f\"gold {g!r:10} answer {a!r:10} raw exact={exact(g, a)!s:5} lowercase/strip={normalise(g) == normalise(a)!s:5} +number-aware={normalise_numbers(g) == normalise_numbers(a)!s:5}\")\n    raw = sum(exact(g, a) for g, a in zip(gold, answers))\n    mid = sum(normalise(g) == normalise(a) for g, a in zip(gold, answers))\n    full = sum(normalise_numbers(g) == normalise_numbers(a) for g, a in zip(gold, answers))\n    print(f\"score: raw {raw}/6, lowercase/strip {mid}/6, number-aware {full}/6\")\n    print(\"the same six answers score 0, 3 and 5 out of 6 depending on normalisation; the fraction '1/2' still fails\")\n\n    section(\"4. Genuinely checking: normalisation that accepts too much\")\n    for g, a in ((\"1999\", \"1,999\"), (\"1.5\", \"1,5\"), (\"2023\", \"2,023\"), (\"10\", \"1e1\"), (\"true\", \"True.\")):\n        print(f\"gold {g!r:7} answer {a!r:7} number-aware match={normalise_numbers(g) == normalise_numbers(a)}\")\n    print(\"gold '15' vs answer '1,5' (a decimal comma) match=\" + str(normalise_numbers(\"15\") == normalise_numbers(\"1,5\")))\n    print(\"stripping commas accepted '1,999' and '2,023', accepted scientific notation '1e1' for 10, and turned a decimal-comma answer '1,5' into 15 so it matches gold '15' but not '1.5'; each rule needs a justification\")\n\n    section(\"5. Genuinely measuring: tool-chain reliability (per-step success ASSUMED, seed 4, 20000 runs)\")\n    rng = random.Random(4)\n    print(f\"{'steps':>6} {'p=0.99':>8} {'p=0.95':>8} {'p=0.90':>8}   (simulated; analytic p^n in brackets for p=0.95)\")\n    for n in (2, 5, 7, 12):\n        row = []\n        for p in (0.99, 0.95, 0.90):\n            ok = sum(all(rng.random() < p for _ in range(n)) for _ in range(20000))\n            row.append(ok / 20000)\n        print(f\"{n:>6} \" + \" \".join(f\"{r:>8.1%}\" for r in row) + f\"   [{0.95 ** n:.1%}]\")\n    print(\"a level-3 style chain of 7 steps at 95 percent per step finishes only about 70 percent of the time, which is arithmetic from the assumed rate and not a measurement of any model\")\n\n    section(\"6. Genuinely checking: tools available versus tools used\")\n    toolbox = {\"search\", \"extract\", \"calculate\", \"open_file\", \"parse_table\", \"read_chart\", \"format\"}\n    for t in TASKS:\n        missing = [o for o in t.operations if o not in toolbox]\n        print(f\"{t.task_id}: needs {sorted(set(t.operations))} | missing tools: {missing}\")\n    hit = {t.task_id: len(set(t.operations)) for t in TASKS}\n    print(\"distinct tools required per task:\", hit, \"| mean\", round(statistics.mean(hit.values()), 1))\n    print(\"owning every tool says nothing about choosing them in the right order; the benchmark measures the chain, so ordering errors need their own check\")\n    wrong_order = [\"extract\", \"search\"]\n    ok = wrong_order == TASKS[0].operations\n    print(\"a plan with the right tools in the wrong order matches the reference chain:\", ok)"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Classifier on the three sample tasks ---\ng1: depth 2, modalities ['text'] -> Level 1\ng2: depth 5, modalities ['text'] -> Level 2\ng3: depth 7, modalities ['file', 'image', 'text'] -> Level 3\n\n--- 2. Genuinely checking: the classifier counts operations, not difficulty ---\none-hop question padded with 6 no-op steps -> Level 3\ntwo operations over audio+image+text           -> Level 3\npadding with no-op steps raised a one-hop question to Level 3, and the modality count alone made a two-operation task Level 3, so the label is a proxy for chain length and modality count, not for how hard the reasoning is\n\n--- 3. Genuinely measuring: how answer normalisation changes the score ---\ngold 'Paris'    answer 'paris.'   raw exact=False lowercase/strip=True  +number-aware=True \ngold '12'       answer '12.0'     raw exact=False lowercase/strip=False +number-aware=True \ngold '1,250'    answer '1250'     raw exact=False lowercase/strip=False +number-aware=True \ngold 'New York' answer 'new  york' raw exact=False lowercase/strip=True  +number-aware=True \ngold '0.5'      answer '1/2'      raw exact=False lowercase/strip=False +number-aware=False\ngold 'no'       answer 'No.'      raw exact=False lowercase/strip=True  +number-aware=True \nscore: raw 0/6, lowercase/strip 3/6, number-aware 5/6\nthe same six answers score 0, 3 and 5 out of 6 depending on normalisation; the fraction '1/2' still fails\n\n--- 4. Genuinely checking: normalisation that accepts too much ---\ngold '1999'  answer '1,999' number-aware match=True\ngold '1.5'   answer '1,5'   number-aware match=False\ngold '2023'  answer '2,023' number-aware match=True\ngold '10'    answer '1e1'   number-aware match=True\ngold 'true'  answer 'True.' number-aware match=True\ngold '15' vs answer '1,5' (a decimal comma) match=True\nstripping commas accepted '1,999' and '2,023', accepted scientific notation '1e1' for 10, and turned a decimal-comma answer '1,5' into 15 so it matches gold '15' but not '1.5'; each rule needs a justification\n\n--- 5. Genuinely measuring: tool-chain reliability (per-step success ASSUMED, seed 4, 20000 runs) ---\n steps   p=0.99   p=0.95   p=0.90   (simulated; analytic p^n in brackets for p=0.95)\n     2    98.0%    90.3%    80.7%   [90.2%]\n     5    95.2%    77.1%    59.3%   [77.4%]\n     7    93.0%    69.9%    48.1%   [69.8%]\n    12    88.5%    53.7%    28.5%   [54.0%]\na level-3 style chain of 7 steps at 95 percent per step finishes only about 70 percent of the time, which is arithmetic from the assumed rate and not a measurement of any model\n\n--- 6. Genuinely checking: tools available versus tools used ---\ng1: needs ['extract', 'search'] | missing tools: []\ng2: needs ['calculate', 'extract', 'search'] | missing tools: []\ng3: needs ['calculate', 'extract', 'format', 'open_file', 'parse_table', 'read_chart', 'search'] | missing tools: []\ndistinct tools required per task: {'g1': 2, 'g2': 3, 'g3': 7} | mean 4\nowning every tool says nothing about choosing them in the right order; the benchmark measures the chain, so ordering errors need their own check\na plan with the right tools in the wrong order matches the reference chain: False"
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
    "headingEn": "Genuinely Found: The Same Six Answers Scored 0, 3 and 5",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅದೇ ಆರು ಉತ್ತರಗಳು 0, 3 ಮತ್ತು 5 ಅಂಕ ಪಡೆದವು",
    "bodyEn": "Section 3: six answers that a person would accept (paris., 12.0, 1250, new  york, 1/2, No.) scored 0 of 6 by raw exact match, 3 of 6 with lowercase and strip, and 5 of 6 with number-aware normalisation; the fraction \"1/2\" still failed against 0.5. Section 4: the number rule went too far in places: \"1,999\" and \"2,023\" matched 1999 and 2023, scientific notation \"1e1\" matched 10, and a decimal-comma answer \"1,5\" became 15 and matched a gold answer of \"15\". Every normalisation rule changes who passes, so it has to be published with the score.",
    "bodyKn": "ವಿಭಾಗ 3: ವ್ಯಕ್ತಿ ಸ್ವೀಕರಿಸುವ ಆರು ಉತ್ತರಗಳು (paris., 12.0, 1250, new  york, 1/2, No.) ಕಚ್ಚಾ ನಿಖರ ಹೊಂದಾಣಿಕೆಯಿಂದ 6 ರಲ್ಲಿ 0, ಸಣ್ಣಕ್ಷರ ಮತ್ತು strip ನೊಂದಿಗೆ 3, ಮತ್ತು ಸಂಖ್ಯೆ-ಅರಿವಿನ normalisation ನೊಂದಿಗೆ 5 ಅಂಕ ಪಡೆದವು; ಭಿನ್ನರಾಶಿ \"1/2\" ಇನ್ನೂ 0.5 ವಿರುದ್ಧ ವಿಫಲವಾಯಿತು. ವಿಭಾಗ 4: ಸಂಖ್ಯೆ ನಿಯಮ ಕೆಲವೆಡೆ ಅತಿಯಾಯಿತು: \"1,999\" ಮತ್ತು \"2,023\" 1999 ಮತ್ತು 2023 ಗೆ ಹೊಂದಿದವು, ವೈಜ್ಞಾನಿಕ ಸಂಕೇತ \"1e1\" 10 ಗೆ ಹೊಂದಿತು, ಮತ್ತು ದಶಮಾಂಶ-ಅಲ್ಪವಿರಾಮ ಉತ್ತರ \"1,5\" 15 ಆಗಿ ಗೋಲ್ಡ್ ಉತ್ತರ \"15\" ಗೆ ಹೊಂದಿತು. ಪ್ರತಿ normalisation ನಿಯಮ ಯಾರು ಪಾಸ್ ಆಗುತ್ತಾರೆ ಎಂದು ಬದಲಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಅದನ್ನು ಅಂಕದ ಜೊತೆ ಪ್ರಕಟಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Level Is a Proxy, and Chains Multiply Errors",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಹಂತ ಒಂದು ಪ್ರತಿನಿಧಿ, ಮತ್ತು ಸರಪಳಿಗಳು ದೋಷ ಗುಣಿಸುತ್ತವೆ",
    "bodyEn": "Section 2: a one-hop question padded with 6 no-op steps was classified Level 3, and a two-operation task over audio, image and text was Level 3 through its modality count alone, so the label measures chain length and modality count, not how hard the reasoning is. Section 5 (assumed per-step rates, seed 4, 20,000 runs): a 7-step chain at 95 percent per step finished 69.9 percent of the time (analytic 69.8), a 12-step chain 53.7 percent, and at 90 percent per step the 12-step chain finished 28.5 percent. These follow from the assumed rate and say nothing about a real model. Section 6: a plan with the right tools in the wrong order did not match the reference chain, so owning the tools is not the same as using them correctly.",
    "bodyKn": "ವಿಭಾಗ 2: 6 no-op ಹಂತಗಳಿಂದ ತುಂಬಿದ ಒಂದು-ಹಾಪ್ ಪ್ರಶ್ನೆ ಹಂತ 3 ಎಂದು ವರ್ಗೀಕರಿಸಲ್ಪಟ್ಟಿತು, ಮತ್ತು ಆಡಿಯೋ, ಚಿತ್ರ ಮತ್ತು ಪಠ್ಯದ ಮೇಲಿನ ಎರಡು-operation ಕಾರ್ಯ ತನ್ನ modality ಎಣಿಕೆಯಿಂದಲೇ ಹಂತ 3 ಆಯಿತು, ಆದ್ದರಿಂದ ಲೇಬಲ್ ಸರಪಳಿ ಉದ್ದ ಮತ್ತು modality ಎಣಿಕೆ ಅಳೆಯುತ್ತದೆ, ತರ್ಕ ಎಷ್ಟು ಕಷ್ಟ ಎಂದಲ್ಲ. ವಿಭಾಗ 5 (ಊಹಿಸಿದ ಪ್ರತಿ-ಹಂತ ದರ, seed 4, 20,000 ಓಟಗಳು): ಪ್ರತಿ ಹಂತಕ್ಕೆ 95 ಶೇಕಡಾದ 7-ಹಂತ ಸರಪಳಿ 69.9 ಶೇಕಡಾ ಬಾರಿ ಮುಗಿಯಿತು (ವಿಶ್ಲೇಷಣಾತ್ಮಕ 69.8), 12-ಹಂತ ಸರಪಳಿ 53.7 ಶೇಕಡಾ, ಮತ್ತು ಪ್ರತಿ ಹಂತಕ್ಕೆ 90 ಶೇಕಡಾದಲ್ಲಿ 12-ಹಂತ ಸರಪಳಿ 28.5 ಶೇಕಡಾ ಮುಗಿಯಿತು. ಇವು ಊಹಿಸಿದ ದರದಿಂದ ಬರುತ್ತವೆ ಮತ್ತು ನಿಜ ಮಾದರಿಯ ಬಗ್ಗೆ ಏನೂ ಹೇಳುವುದಿಲ್ಲ. ವಿಭಾಗ 6: ಸರಿಯಾದ tools ತಪ್ಪು ಕ್ರಮದಲ್ಲಿದ್ದ ಯೋಜನೆ ಉಲ್ಲೇಖ ಸರಪಳಿಗೆ ಹೊಂದಲಿಲ್ಲ, ಆದ್ದರಿಂದ tools ಹೊಂದಿರುವುದು ಸರಿಯಾಗಿ ಬಳಸುವುದಕ್ಕೆ ಸಮ ಅಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A benchmark of long tool chains measures reliability across steps, so small per-step error rates matter a great deal, and exact-match scoring makes the answer-cleaning rules part of the measurement.",
    "bodyKn": "ಉದ್ದ tool ಸರಪಳಿಗಳ benchmark ಹಂತಗಳಾದ್ಯಂತ ವಿಶ್ವಾಸಾರ್ಹತೆ ಅಳೆಯುತ್ತದೆ, ಆದ್ದರಿಂದ ಸಣ್ಣ ಪ್ರತಿ-ಹಂತ ದೋಷ ದರಗಳು ಬಹಳ ಮುಖ್ಯ, ಮತ್ತು ನಿಖರ-ಹೊಂದಾಣಿಕೆ ಅಂಕನ ಉತ್ತರ-ಶುದ್ಧೀಕರಣ ನಿಯಮಗಳನ್ನು ಅಳತೆಯ ಭಾಗವಾಗಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"Level 3 is harder reasoning.\" In this classifier a level is operation and modality counts; padding or splitting steps moves it without changing the question.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಹಂತ 3 ಕಷ್ಟವಾದ ತರ್ಕ.\" ಈ ವರ್ಗೀಕಾರಕದಲ್ಲಿ ಹಂತ ಎಂದರೆ operation ಮತ್ತು modality ಎಣಿಕೆಗಳು; ಹಂತಗಳನ್ನು ತುಂಬುವುದು ಅಥವಾ ವಿಭಜಿಸುವುದು ಪ್ರಶ್ನೆ ಬದಲಿಸದೆ ಅದನ್ನು ಸರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Operation: one tool step. Modality: kind of evidence (text, file, image, audio). Exact match: the normalised string must equal the gold string. Normalisation: cleaning rules applied before comparing. Chain reliability: the product of step successes.",
    "bodyKn": "Operation: ಒಂದು tool ಹಂತ. Modality: ಸಾಕ್ಷ್ಯದ ಪ್ರಕಾರ (ಪಠ್ಯ, ಫೈಲ್, ಚಿತ್ರ, ಆಡಿಯೋ). Exact match: normalise ಮಾಡಿದ ಸ್ಟ್ರಿಂಗ್ ಗೋಲ್ಡ್ ಸ್ಟ್ರಿಂಗ್‌ಗೆ ಸಮವಾಗಬೇಕು. Normalisation: ಹೋಲಿಸುವ ಮುನ್ನದ ಶುದ್ಧೀಕರಣ ನಿಯಮಗಳು. Chain reliability: ಹಂತ ಯಶಸ್ಸುಗಳ ಗುಣಲಬ್ಧ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The classifier labelled the samples Level 1, 2 and 3. 2) Padding made a trivial question Level 3. 3) Six acceptable answers scored 0, 3 and 5 of 6 under three rules. 4) Comma stripping and scientific notation accepted too much. 5) At an assumed 95 percent per step, 7 steps finished about 70 percent and 12 steps about 54 percent. 6) The right tools in the wrong order did not match the chain.",
    "bodyKn": "1) ವರ್ಗೀಕಾರಕ ಮಾದರಿಗಳನ್ನು ಹಂತ 1, 2 ಮತ್ತು 3 ಎಂದು ಲೇಬಲ್ ಮಾಡಿತು. 2) ತುಂಬುವಿಕೆ ಸರಳ ಪ್ರಶ್ನೆಯನ್ನು ಹಂತ 3 ಮಾಡಿತು. 3) ಮೂರು ನಿಯಮಗಳಡಿ ಆರು ಸ್ವೀಕಾರಾರ್ಹ ಉತ್ತರಗಳು 6 ರಲ್ಲಿ 0, 3 ಮತ್ತು 5 ಪಡೆದವು. 4) ಅಲ್ಪವಿರಾಮ ತೆಗೆಯುವಿಕೆ ಮತ್ತು ವೈಜ್ಞಾನಿಕ ಸಂಕೇತ ಅತಿಯಾಗಿ ಸ್ವೀಕರಿಸಿದವು. 5) ಊಹಿಸಿದ ಪ್ರತಿ ಹಂತ 95 ಶೇಕಡಾದಲ್ಲಿ 7 ಹಂತಗಳು ಸುಮಾರು 70 ಮತ್ತು 12 ಹಂತಗಳು ಸುಮಾರು 54 ಶೇಕಡಾ ಮುಗಿದವು. 6) ಸರಿಯಾದ tools ತಪ್ಪು ಕ್ರಮದಲ್ಲಿ ಸರಪಳಿಗೆ ಹೊಂದಲಿಲ್ಲ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did padding a one-hop question with no-op steps do?",
      "qKn": "ಒಂದು-ಹಾಪ್ ಪ್ರಶ್ನೆಯನ್ನು no-op ಹಂತಗಳಿಂದ ತುಂಬಿದರೆ ಏನಾಯಿತು?",
      "opts": [
       "Nothing",
       "It was classified Level 3",
       "It became unanswerable",
       "It was removed"
      ],
      "optsKn": [
       "ಏನೂ ಇಲ್ಲ",
       "ಹಂತ 3 ಎಂದು ವರ್ಗೀಕರಿಸಲ್ಪಟ್ಟಿತು",
       "ಉತ್ತರಿಸಲಾಗದಾಯಿತು",
       "ತೆಗೆಯಲಾಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "How did the same six answers score under raw, lowercase/strip and number-aware rules?",
      "qKn": "ಕಚ್ಚಾ, ಸಣ್ಣಕ್ಷರ/strip ಮತ್ತು ಸಂಖ್ಯೆ-ಅರಿವಿನ ನಿಯಮಗಳಡಿ ಅದೇ ಆರು ಉತ್ತರಗಳು ಎಷ್ಟು ಅಂಕ ಪಡೆದವು?",
      "opts": [
       "6, 6, 6",
       "0, 3, 5",
       "3, 3, 3",
       "0, 0, 6"
      ],
      "optsKn": [
       "6, 6, 6",
       "0, 3, 5",
       "3, 3, 3",
       "0, 0, 6"
      ],
      "correct": 1
     },
     {
      "q": "What went wrong with the decimal-comma answer \"1,5\"?",
      "qKn": "ದಶಮಾಂಶ-ಅಲ್ಪವಿರಾಮ ಉತ್ತರ \"1,5\" ಗೆ ಏನಾಯಿತು?",
      "opts": [
       "It matched 1.5",
       "Commas were stripped so it became 15 and matched a gold \"15\"",
       "It crashed",
       "It was ignored"
      ],
      "optsKn": [
       "1.5 ಗೆ ಹೊಂದಿತು",
       "ಅಲ್ಪವಿರಾಮ ತೆಗೆದು 15 ಆಗಿ ಗೋಲ್ಡ್ \"15\" ಗೆ ಹೊಂದಿತು",
       "ಕುಸಿಯಿತು",
       "ನಿರ್ಲಕ್ಷಿಸಲಾಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What is the status of the 95 percent step rate in section 5?",
      "qKn": "ವಿಭಾಗ 5 ರ 95 ಶೇಕಡಾ ಹಂತ ದರದ ಸ್ಥಿತಿ ಏನು?",
      "opts": [
       "Measured from a model",
       "An assumption, so the chain figures are arithmetic from it",
       "A published GAIA result",
       "Random"
      ],
      "optsKn": [
       "ಮಾದರಿಯಿಂದ ಅಳೆದದ್ದು",
       "ಒಂದು ಊಹೆ, ಆದ್ದರಿಂದ ಸರಪಳಿ ಅಂಕಿಅಂಶಗಳು ಅದರಿಂದ ಲೆಕ್ಕಾಚಾರ",
       "ಪ್ರಕಟಿತ GAIA ಫಲಿತಾಂಶ",
       "ಯಾದೃಚ್ಛಿಕ"
      ],
      "correct": 1
     },
     {
      "q": "Why is owning every tool not enough?",
      "qKn": "ಎಲ್ಲಾ tools ಹೊಂದಿರುವುದು ಏಕೆ ಸಾಕಾಗುವುದಿಲ್ಲ?",
      "opts": [
       "Tools are slow",
       "The chain also needs the right order, and a wrong-order plan did not match",
       "Tools expire",
       "It is enough"
      ],
      "optsKn": [
       "Tools ನಿಧಾನ",
       "ಸರಪಳಿಗೆ ಸರಿಯಾದ ಕ್ರಮವೂ ಬೇಕು, ಮತ್ತು ತಪ್ಪು-ಕ್ರಮದ ಯೋಜನೆ ಹೊಂದಲಿಲ್ಲ",
       "Tools ಅವಧಿ ಮುಗಿಯುತ್ತವೆ",
       "ಅದು ಸಾಕು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
