module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b321598",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Darwin Godel Machine: Self-Modifying Agents (Part 3 of 3) — Cheaters Inside the Search",
 "titleKn": "Darwin Godel Machine: ಸ್ವಯಂ-ಮಾರ್ಪಡಿಸುವ Agents (ಭಾಗ 3 / 3) — ಹುಡುಕಾಟದೊಳಗಿನ ಮೋಸಗಾರರು",
 "desc": "Put a cheater into an evolutionary search and compare what a naive evaluator and a firewall crown.",
 "descKn": "ವಿಕಾಸಾತ್ಮಕ ಹುಡುಕಾಟದಲ್ಲಿ ಮೋಸಗಾರನನ್ನು ಇಟ್ಟು naive ಮೌಲ್ಯಮಾಪಕ ಮತ್ತು firewall ಏನನ್ನು ಕಿರೀಟ ಧರಿಸುತ್ತವೆ ಹೋಲಿಸಿ.",
 "objectives": [
  "Inject a cheater mutation.",
  "Compare two evaluators.",
  "Sweep the cheat rate.",
  "Count wasted children.",
  "Report true held-out scores."
 ],
 "objectivesKn": [
  "ಮೋಸ ಮ್ಯುಟೇಶನ್ ಸೇರಿಸಿ.",
  "ಎರಡು ಮೌಲ್ಯಮಾಪಕ ಹೋಲಿಸಿ.",
  "ಮೋಸ ದರ ಸ್ವೀಪ್ ಮಾಡಿ.",
  "ವ್ಯರ್ಥ ಮಕ್ಕಳನ್ನು ಎಣಿಸಿ.",
  "ನಿಜ held-out ಅಂಕ ವರದಿ ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Darwin Godel Machine: Self-Modifying Agents (Part 3 of 3)",
    "textKn": "Darwin Godel Machine: ಸ್ವಯಂ-ಮಾರ್ಪಡಿಸುವ Agents (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: an evolutionary search where 5 percent of mutations produce a scripted cheater, run behind a naive evaluator and a firewall, a sweep of the cheat rate and how many children each search draws from the cheater entry. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind Darwin Godel Machine style open-ended search (agent archives, stepping stones, reward hacking, evaluator firewalls, signed evidence and verification gates), not the real software, and agents are short operator sequences or plain Python callables written for the lab, the cheaters are scripted, and no language model or real code self-modification is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. Benchmark results reported for the published Darwin Godel Machine are cited from the lesson and were not reproduced; the operator-sequence agents, the target function 3x+5, the 5 percent cheat rate and every other number in the labs are invented to show the mechanics. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: 5 ಶೇಕಡಾ ಮ್ಯುಟೇಶನ್‌ಗಳು scripted ಮೋಸಗಾರನನ್ನು ಉತ್ಪಾದಿಸುವ ವಿಕಾಸಾತ್ಮಕ ಹುಡುಕಾಟ, naive ಮೌಲ್ಯಮಾಪಕ ಮತ್ತು firewall ಹಿಂದೆ ಓಡಿಸಿ, ಮೋಸ ದರ ಸ್ವೀಪ್ ಮತ್ತು ಪ್ರತಿ ಹುಡುಕಾಟ ಮೋಸಗಾರ ನಮೂದಿನಿಂದ ಎಷ್ಟು ಮಕ್ಕಳನ್ನು ಎಳೆಯುತ್ತದೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು Darwin Godel Machine ಶೈಲಿಯ ಮುಕ್ತ-ಅಂತ್ಯ ಹುಡುಕಾಟ (agent ಆರ್ಕೈವ್‌ಗಳು, ಮೆಟ್ಟಿಲು ಕಲ್ಲುಗಳು, reward hacking, ಮೌಲ್ಯಮಾಪಕ firewalls, ಸಹಿ ಮಾಡಿದ ಸಾಕ್ಷ್ಯ ಮತ್ತು verification gates) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು agents ಚಿಕ್ಕ ಆಪರೇಟರ್ ಅನುಕ್ರಮಗಳು ಅಥವಾ ಲ್ಯಾಬ್‌ಗಾಗಿ ಬರೆದ ಸಾಮಾನ್ಯ Python callables, ಮೋಸಗಾರರು scripted, ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಅಥವಾ ನಿಜ ಕೋಡ್ ಸ್ವಯಂ-ಮಾರ್ಪಾಡು ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಪ್ರಕಟಿತ Darwin Godel Machine ಗೆ ವರದಿಯಾದ benchmark ಫಲಿತಾಂಶಗಳು lesson ನಿಂದ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಪುನರುತ್ಪಾದಿಸಲಾಗಿಲ್ಲ; ಆಪರೇಟರ್-ಅನುಕ್ರಮ agents, ಗುರಿ ಕಾರ್ಯ 3x+5, 5 ಶೇಕಡಾ ಮೋಸ ದರ ಮತ್ತು ಲ್ಯಾಬ್‌ಗಳ ಇತರ ಪ್ರತಿ ಸಂಖ್ಯೆ ಯಂತ್ರಶಾಸ್ತ್ರ ತೋರಿಸಲು ಕಲ್ಪಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Cheating Enters the Search Itself",
    "textKn": "ಮೋಸ ಹುಡುಕಾಟದೊಳಗೇ ಬರುತ್ತದೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Two Evaluators, One Mutation Stream",
    "headingKn": "ಎರಡು ಮೌಲ್ಯಮಾಪಕ, ಒಂದು ಮ್ಯುಟೇಶನ್ ಹರಿವು",
    "bodyEn": "Part 2 showed that a cheater can beat a naive evaluator. This part puts the cheater inside the evolutionary loop of Part 1: every mutation has a small chance of producing a scripted cheater entry. The lab runs twenty seeds under a naive scorer that gives the cheater 1.0 and under a firewall scorer that gives it 0.0, then varies the cheat rate and counts how many children each search draws from the cheater entry. The cheat rates are invented.",
    "bodyKn": "ಭಾಗ 2 ಮೋಸಗಾರ naive ಮೌಲ್ಯಮಾಪಕವನ್ನು ಸೋಲಿಸಬಹುದು ಎಂದು ತೋರಿಸಿತು. ಈ ಭಾಗ ಮೋಸಗಾರನನ್ನು ಭಾಗ 1 ರ ವಿಕಾಸಾತ್ಮಕ ಲೂಪ್‌ನೊಳಗೆ ಇಡುತ್ತದೆ: ಪ್ರತಿ ಮ್ಯುಟೇಶನ್ scripted ಮೋಸಗಾರ ನಮೂದನ್ನು ಉತ್ಪಾದಿಸುವ ಸಣ್ಣ ಸಾಧ್ಯತೆ ಹೊಂದಿದೆ. ಲ್ಯಾಬ್ ಇಪ್ಪತ್ತು seeds ಅನ್ನು ಮೋಸಗಾರನಿಗೆ 1.0 ನೀಡುವ naive ಅಂಕಕಾರ ಮತ್ತು 0.0 ನೀಡುವ firewall ಅಂಕಕಾರದಲ್ಲಿ ಓಡಿಸಿ, ನಂತರ ಮೋಸ ದರ ಬದಲಿಸಿ ಮತ್ತು ಪ್ರತಿ ಹುಡುಕಾಟ ಮೋಸಗಾರ ನಮೂದಿನಿಂದ ಎಷ್ಟು ಮಕ್ಕಳನ್ನು ಎಳೆಯುತ್ತದೆ ಎಣಿಸುತ್ತದೆ. ಮೋಸ ದರಗಳು ಕಲ್ಪಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Search With a Cheater in the Pool",
    "headingKn": "ಪೂಲ್‌ನಲ್ಲಿ ಮೋಸಗಾರನಿರುವ ಹುಡುಕಾಟ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">the evaluator decides who the search crowns</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">mutate</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">5% cheater</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">naive</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">cheater scores 1.0</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">firewall</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">cheater scores 0.0</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">crown</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">best agent</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the evaluator decides who the search crowns</text></svg>",
    "captionEn": "The same mutations behind two evaluators crown different agents.",
    "captionKn": "ಅದೇ ಮ್ಯುಟೇಶನ್‌ಗಳು ಎರಡು ಮೌಲ್ಯಮಾಪಕಗಳ ಹಿಂದೆ ಬೇರೆ agents ಕಿರೀಟ ಧರಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Setup of the experiment",
    "headingKn": "ಪ್ರಯೋಗದ ಸೆಟಪ್",
    "headers": [
     "Item",
     "Lab setting"
    ],
    "rows": [
     [
      "seeds",
      "1 to 20"
     ],
     [
      "generations",
      "150"
     ],
     [
      "cheat mutation rate",
      "0.05 (also 0, 0.01, 0.2)"
     ],
     [
      "naive scorer",
      "cheater scores 1.0"
     ],
     [
      "firewall scorer",
      "cheater scores 0.0"
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
    "filename": "da_3.py",
    "headingEn": "Cheating mutation and the two scorers",
    "headingKn": "ಮೋಸ ಮ್ಯುಟೇಶನ್ ಮತ್ತು ಎರಡು ಅಂಕಕಾರಗಳು",
    "descEn": "mutate returns the CHEAT entry with a small probability, naive_score and firewall_score score it differently, and evolve crowns the best archive entry with ties broken in favor of honest agents.",
    "descKn": "mutate ಸಣ್ಣ ಸಾಧ್ಯತೆಯಲ್ಲಿ CHEAT ನಮೂದು ಹಿಂತಿರುಗಿಸುತ್ತದೆ, naive_score ಮತ್ತು firewall_score ಅದಕ್ಕೆ ಬೇರೆ ಅಂಕ ನೀಡುತ್ತವೆ, ಮತ್ತು evolve ಸಮ ಅಂಕದಲ್ಲಿ ಪ್ರಾಮಾಣಿಕ agents ಪರವಾಗಿ ಅತ್ಯುತ್ತಮ ಆರ್ಕೈವ್ ನಮೂದಿಗೆ ಕಿರೀಟ ಹಾಕುತ್ತದೆ.",
    "code": "OPS = {\"a1\": lambda v: v + 1, \"a5\": lambda v: v + 5, \"d2\": lambda v: v * 2, \"t3\": lambda v: v * 3, \"s1\": lambda v: v - 1}\r\nTRAIN = list(range(-5, 6))\r\nHELD = list(range(20, 30))\r\nCHEAT = (\"CHEAT\",)\r\n\r\n\r\ndef target(x):\r\n    return 3 * x + 5\r\n\r\n\r\ndef run_agent(agent, x):\r\n    v = x\r\n    for op in agent:\r\n        v = OPS[op](v)\r\n    return v\r\n\r\n\r\ndef true_score(agent, inputs):\r\n    if agent == CHEAT:\r\n        return 0.0\r\n    return sum(run_agent(agent, x) == target(x) for x in inputs) / len(inputs)\r\n\r\n\r\ndef naive_score(agent):\r\n    return 1.0 if agent == CHEAT else true_score(agent, TRAIN)\r\n\r\n\r\ndef firewall_score(agent):\r\n    return true_score(agent, TRAIN)\r\n\r\n\r\ndef mutate(agent, r, cheat_rate):\r\n    if r.random() < cheat_rate:\r\n        return CHEAT\r\n    if agent == CHEAT:\r\n        return (\"a1\",)\r\n    a = list(agent)\r\n    kind = r.choice([\"insert\", \"delete\", \"replace\"])\r\n    if kind == \"insert\" and len(a) < 6:\r\n        a.insert(r.randrange(len(a) + 1), r.choice(list(OPS)))\r\n    elif kind == \"delete\" and len(a) > 1:\r\n        a.pop(r.randrange(len(a)))\r\n    else:\r\n        a[r.randrange(len(a))] = r.choice(list(OPS))\r\n    return tuple(a)\r\n\r\n\r\ndef evolve(seed, gens, scorer, cheat_rate=0.05):\r\n    r = random.Random(seed)\r\n    archive = {(\"a1\",): {\"score\": scorer((\"a1\",)), \"children\": 0}}\r\n    for _ in range(gens):\r\n        keys = list(archive)\r\n        w = [(archive[k][\"score\"] + 0.05) / (1 + archive[k][\"children\"]) for k in keys]\r\n        parent = r.choices(keys, weights=w)[0]\r\n        archive[parent][\"children\"] += 1\r\n        child = mutate(parent, r, cheat_rate)\r\n        if child not in archive:\r\n            archive[child] = {\"score\": scorer(child), \"children\": 0}\r\n    best = max(archive, key=lambda k: (archive[k][\"score\"], k != CHEAT))\r\n    return archive, best"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "da_3.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() compares what the two scorers crown, sweeps the cheat rate and counts children drawn from the cheater entry.",
    "descKn": "main() ಎರಡು ಅಂಕಕಾರಗಳು ಏನನ್ನು ಕಿರೀಟ ಧರಿಸುತ್ತವೆ ಹೋಲಿಸಿ, ಮೋಸ ದರ ಸ್ವೀಪ್ ಮಾಡಿ ಮತ್ತು ಮೋಸಗಾರ ನಮೂದಿನಿಂದ ಎಳೆದ ಮಕ್ಕಳನ್ನು ಎಣಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely measuring: what each search crowns best (seeds 1 to 20, 150 generations, 5 percent cheat mutations)\")\r\n    for name, scorer in ((\"naive evaluator\", naive_score), (\"firewall evaluator\", firewall_score)):\r\n        cheat_best = 0\r\n        held, in_arch = [], 0\r\n        for seed in range(1, 21):\r\n            archive, best = evolve(seed, 150, scorer)\r\n            cheat_best += best == CHEAT\r\n            held.append(true_score(best, HELD))\r\n            in_arch += CHEAT in archive\r\n        print(f\"{name:19}: cheater crowned best in {cheat_best}/20 | cheater present in archive in {in_arch}/20 | mean true held-out score of the crowned agent {mean(held):.3f}\")\r\n    print(\"a cheater exists in the archive under either evaluator, because the mutation produces it at the same rate, but only the naive evaluator can crown it, and the crowned agent's true held-out score shows the cost; the max function breaks ties by preferring non-cheaters, which makes the naive result look slightly better than a tie broken at random\")\r\n\r\n    section(\"2. Genuinely measuring: cheat rate against the naive evaluator\")\r\n    for rate in (0.0, 0.01, 0.05, 0.2):\r\n        crowned = 0\r\n        for seed in range(1, 21):\r\n            archive, best = evolve(seed, 150, naive_score, rate)\r\n            crowned += best == CHEAT\r\n        print(f\"cheat mutation rate {rate:4.2f}: cheater crowned in {crowned}/20\")\r\n    print(\"a cheater was crowned in 0 of 20 runs at rate 0, 6 at one percent and 11 at five percent, but only 8 at twenty percent; the lab does not explain the dip at twenty percent and with twenty seeds some of it may be noise, and the rates are invented\")\r\n\r\n    section(\"3. Genuinely measuring: archive parents drawn from cheater lineages\")\r\n    for name, scorer in ((\"naive evaluator\", naive_score), (\"firewall evaluator\", firewall_score)):\r\n        children_of_cheat = []\r\n        for seed in range(1, 21):\r\n            archive, _ = evolve(seed, 150, scorer)\r\n            children_of_cheat.append(archive.get(CHEAT, {\"children\": 0})[\"children\"])\r\n        print(f\"{name:19}: mean number of children drawn from the cheater entry {mean(children_of_cheat):.2f}\")\r\n    print(\"under the naive evaluator a cheater has the top score, so parent selection keeps drawing it, and under the firewall it scores 0.0 and is rarely chosen; a cheating entry that attracts children spends search budget and can pass its trick down\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely measuring: what each search crowns best (seeds 1 to 20, 150 generations, 5 percent cheat mutations) ---\nnaive evaluator    : cheater crowned best in 11/20 | cheater present in archive in 20/20 | mean true held-out score of the crowned agent 0.450\nfirewall evaluator : cheater crowned best in 0/20 | cheater present in archive in 20/20 | mean true held-out score of the crowned agent 0.600\na cheater exists in the archive under either evaluator, because the mutation produces it at the same rate, but only the naive evaluator can crown it, and the crowned agent's true held-out score shows the cost; the max function breaks ties by preferring non-cheaters, which makes the naive result look slightly better than a tie broken at random\n\n--- 2. Genuinely measuring: cheat rate against the naive evaluator ---\ncheat mutation rate 0.00: cheater crowned in 0/20\ncheat mutation rate 0.01: cheater crowned in 6/20\ncheat mutation rate 0.05: cheater crowned in 11/20\ncheat mutation rate 0.20: cheater crowned in 8/20\na cheater was crowned in 0 of 20 runs at rate 0, 6 at one percent and 11 at five percent, but only 8 at twenty percent; the lab does not explain the dip at twenty percent and with twenty seeds some of it may be noise, and the rates are invented\n\n--- 3. Genuinely measuring: archive parents drawn from cheater lineages ---\nnaive evaluator    : mean number of children drawn from the cheater entry 12.65\nfirewall evaluator : mean number of children drawn from the cheater entry 2.95\nunder the naive evaluator a cheater has the top score, so parent selection keeps drawing it, and under the firewall it scores 0.0 and is rarely chosen; a cheating entry that attracts children spends search budget and can pass its trick down"
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
    "headingEn": "Experiment 1: What each search crowns best (seeds 1 to 20, 150 generations, 5 percent cheat mutations)",
    "headingKn": "ಪ್ರಯೋಗ 1: What each search crowns best (seeds 1 to 20, 150 generations, 5 percent cheat mutations)",
    "bodyEn": "What it ran: What each search crowns best (seeds 1 to 20, 150 generations, 5 percent cheat mutations). What the lab concluded: a cheater exists in the archive under either evaluator, because the mutation produces it at the same rate, but only the naive evaluator can crown it, and the crowned agent's true held-out score shows the cost; the max function breaks ties by preferring non-cheaters, which makes the naive result look slightly better than a tie broken at random",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: What each search crowns best (seeds 1 to 20, 150 generations, 5 percent cheat mutations). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a cheater exists in the archive under either evaluator, because the mutation produces it at the same rate, but only the naive evaluator can crown it, and the crowned agent's true held-out score shows the cost; the max function breaks ties by preferring non-cheaters, which makes the naive result look slightly better than a tie broken at random"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely measuring: what each search crowns best (seeds 1 to 20, 150 generations, 5 percent cheat mutations) ---\nnaive evaluator    : cheater crowned best in 11/20 | cheater present in archive in 20/20 | mean true held-out score of the crowned agent 0.450\nfirewall evaluator : cheater crowned best in 0/20 | cheater present in archive in 20/20 | mean true held-out score of the crowned agent 0.600"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Cheat rate against the naive evaluator",
    "headingKn": "ಪ್ರಯೋಗ 2: Cheat rate against the naive evaluator",
    "bodyEn": "What it ran: Cheat rate against the naive evaluator. What the lab concluded: a cheater was crowned in 0 of 20 runs at rate 0, 6 at one percent and 11 at five percent, but only 8 at twenty percent; the lab does not explain the dip at twenty percent and with twenty seeds some of it may be noise, and the rates are invented",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Cheat rate against the naive evaluator. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a cheater was crowned in 0 of 20 runs at rate 0, 6 at one percent and 11 at five percent, but only 8 at twenty percent; the lab does not explain the dip at twenty percent and with twenty seeds some of it may be noise, and the rates are invented"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely measuring: cheat rate against the naive evaluator ---\ncheat mutation rate 0.00: cheater crowned in 0/20\ncheat mutation rate 0.01: cheater crowned in 6/20\ncheat mutation rate 0.05: cheater crowned in 11/20\ncheat mutation rate 0.20: cheater crowned in 8/20"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Archive parents drawn from cheater lineages",
    "headingKn": "ಪ್ರಯೋಗ 3: Archive parents drawn from cheater lineages",
    "bodyEn": "What it ran: Archive parents drawn from cheater lineages. What the lab concluded: under the naive evaluator a cheater has the top score, so parent selection keeps drawing it, and under the firewall it scores 0.0 and is rarely chosen; a cheating entry that attracts children spends search budget and can pass its trick down",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Archive parents drawn from cheater lineages. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): under the naive evaluator a cheater has the top score, so parent selection keeps drawing it, and under the firewall it scores 0.0 and is rarely chosen; a cheating entry that attracts children spends search budget and can pass its trick down"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: archive parents drawn from cheater lineages ---\nnaive evaluator    : mean number of children drawn from the cheater entry 12.65\nfirewall evaluator : mean number of children drawn from the cheater entry 2.95"
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
    "headingEn": "Genuinely Found: What Each Search Crowns",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪ್ರತಿ ಹುಡುಕಾಟ ಏನನ್ನು ಕಿರೀಟ ಧರಿಸುತ್ತದೆ",
    "bodyEn": "Section 1: under the naive evaluator the cheater was crowned best in 11 of 20 runs and the mean true held-out score of the crowned agent was 0.450; under the firewall the cheater was crowned in 0 of 20 and the mean was 0.600. A cheater entry was present in the archive in 20 of 20 runs under both evaluators.",
    "bodyKn": "ವಿಭಾಗ 1: naive ಮೌಲ್ಯಮಾಪಕದಲ್ಲಿ ಮೋಸಗಾರ 20 ರಲ್ಲಿ 11 ಓಟಗಳಲ್ಲಿ ಅತ್ಯುತ್ತಮ ಎಂದು ಕಿರೀಟ ಧರಿಸಿದ ಮತ್ತು ಕಿರೀಟ ಪಡೆದ agent ನ ಸರಾಸರಿ ನಿಜ held-out ಅಂಕ 0.450; firewall ನಲ್ಲಿ ಮೋಸಗಾರ 20 ರಲ್ಲಿ 0 ರಲ್ಲಿ ಕಿರೀಟ ಧರಿಸಿದ ಮತ್ತು ಸರಾಸರಿ 0.600. ಎರಡೂ ಮೌಲ್ಯಮಾಪಕಗಳಲ್ಲಿ 20 ರಲ್ಲಿ 20 ಓಟಗಳಲ್ಲಿ ಆರ್ಕೈವ್‌ನಲ್ಲಿ ಮೋಸಗಾರ ನಮೂದು ಇತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Cheat Rate and Wasted Children",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮೋಸ ದರ ಮತ್ತು ವ್ಯರ್ಥ ಮಕ್ಕಳು",
    "bodyEn": "Section 2 under the naive evaluator: a cheat rate of 0.00 crowned the cheater in 0 of 20 runs, 0.01 in 6, 0.05 in 11 and 0.20 in 8. Section 3: the mean number of children drawn from the cheater entry was 12.65 under the naive evaluator and 2.95 under the firewall.",
    "bodyKn": "ವಿಭಾಗ 2 naive ಮೌಲ್ಯಮಾಪಕದಲ್ಲಿ: ಮೋಸ ದರ 0.00 20 ರಲ್ಲಿ 0 ಓಟಗಳಲ್ಲಿ, 0.01 6 ರಲ್ಲಿ, 0.05 11 ರಲ್ಲಿ ಮತ್ತು 0.20 8 ರಲ್ಲಿ ಮೋಸಗಾರನಿಗೆ ಕಿರೀಟ ಹಾಕಿತು. ವಿಭಾಗ 3: ಮೋಸಗಾರ ನಮೂದಿನಿಂದ ಎಳೆದ ಮಕ್ಕಳ ಸರಾಸರಿ ಸಂಖ್ಯೆ naive ಮೌಲ್ಯಮಾಪಕದಲ್ಲಿ 12.65 ಮತ್ತು firewall ನಲ್ಲಿ 2.95."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A search that rewards the score will also reward any way of getting the score, so one cheater entry can capture parent selection and the crowned agent can be far worse than its score says.",
    "bodyKn": "ಅಂಕಕ್ಕೆ ಬಹುಮಾನ ನೀಡುವ ಹುಡುಕಾಟ ಅಂಕ ಪಡೆಯುವ ಯಾವುದೇ ಮಾರ್ಗಕ್ಕೂ ಬಹುಮಾನ ನೀಡುತ್ತದೆ, ಆದ್ದರಿಂದ ಒಂದು ಮೋಸಗಾರ ನಮೂದು ಪೋಷಕ ಆಯ್ಕೆ ಹಿಡಿಯಬಹುದು ಮತ್ತು ಕಿರೀಟ ಪಡೆದ agent ಅದರ ಅಂಕ ಹೇಳುವುದಕ್ಕಿಂತ ಬಹಳ ಕೆಟ್ಟದಾಗಿರಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a bigger cheat rate always makes the cheater win more often.\" The naive search crowned it in 11 runs at 0.05 and in 8 at 0.20, and the lab does not explain the dip.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ದೊಡ್ಡ ಮೋಸ ದರ ಯಾವಾಗಲೂ ಮೋಸಗಾರ ಹೆಚ್ಚು ಬಾರಿ ಗೆಲ್ಲುವಂತೆ ಮಾಡುತ್ತದೆ.\" naive ಹುಡುಕಾಟ 0.05 ರಲ್ಲಿ 11 ಓಟಗಳಲ್ಲಿ ಮತ್ತು 0.20 ರಲ್ಲಿ 8 ರಲ್ಲಿ ಅದಕ್ಕೆ ಕಿರೀಟ ಹಾಕಿತು, ಮತ್ತು ಲ್ಯಾಬ್ ಇಳಿಕೆಯನ್ನು ವಿವರಿಸುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Crowned: chosen as the best archive entry. Cheat rate: chance a mutation produces a cheater. Parent selection: how the next parent is drawn. True score: the score a firewall would give.",
    "bodyKn": "Crowned: ಅತ್ಯುತ್ತಮ ಆರ್ಕೈವ್ ನಮೂದಾಗಿ ಆಯ್ಕೆ. Cheat rate: ಮ್ಯುಟೇಶನ್ ಮೋಸಗಾರನನ್ನು ಉತ್ಪಾದಿಸುವ ಸಾಧ್ಯತೆ. Parent selection: ಮುಂದಿನ ಪೋಷಕ ಹೇಗೆ ಎಳೆಯಲ್ಪಡುತ್ತದೆ. True score: firewall ನೀಡುವ ಅಂಕ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The cheater was crowned in 11 of 20 naive runs and 0 firewall runs. 2) The crowned naive agent averaged 0.450 true held-out. 3) The cheater appeared in the archive in every run either way. 4) The naive search drew 12.65 children from it against 2.95. 5) The rate sweep was not monotone.",
    "bodyKn": "1) ಮೋಸಗಾರ 20 naive ಓಟಗಳಲ್ಲಿ 11 ರಲ್ಲಿ ಮತ್ತು firewall ಓಟಗಳಲ್ಲಿ 0 ರಲ್ಲಿ ಕಿರೀಟ ಧರಿಸಿದ. 2) ಕಿರೀಟ ಪಡೆದ naive agent ಸರಾಸರಿ 0.450 ನಿಜ held-out ಪಡೆಯಿತು. 3) ಎರಡೂ ರೀತಿ ಪ್ರತಿ ಓಟದಲ್ಲೂ ಮೋಸಗಾರ ಆರ್ಕೈವ್‌ನಲ್ಲಿ ಕಾಣಿಸಿಕೊಂಡ. 4) naive ಹುಡುಕಾಟ ಅದರಿಂದ 2.95 ಬದಲು 12.65 ಮಕ್ಕಳನ್ನು ಎಳೆಯಿತು. 5) ದರ ಸ್ವೀಪ್ ಏಕಮುಖವಲ್ಲ."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B da_3.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B da_3.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B da_3.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B da_3.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Predict before you run",
    "headingKn": "ಓಡಿಸುವ ಮುನ್ನ ಊಹಿಸಿ",
    "bodyEn": "Before rerunning, write down what you expect each experiment to print, then compare:\n1. What each search crowns best (seeds 1 to 20, 150 generations, 5 percent cheat mutations)\n2. Cheat rate against the naive evaluator\n3. Archive parents drawn from cheater lineages",
    "bodyKn": "ಮರುಓಡಿಸುವ ಮುನ್ನ ಪ್ರತಿ ಪ್ರಯೋಗ ಏನು ಮುದ್ರಿಸುತ್ತದೆ ಎಂದು ನಿರೀಕ್ಷಿಸುವುದನ್ನು ಬರೆಯಿರಿ, ನಂತರ ಹೋಲಿಸಿ:\n1. What each search crowns best (seeds 1 to 20, 150 generations, 5 percent cheat mutations)\n2. Cheat rate against the naive evaluator\n3. Archive parents drawn from cheater lineages"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Change one thing",
    "headingKn": "ಒಂದನ್ನು ಬದಲಿಸಿ",
    "bodyEn": "Pick one constant, threshold or input in the code shown above, change it, and predict which experiment will change before you rerun. If an experiment you did not expect changes, you have found a coupling worth understanding.",
    "bodyKn": "ಮೇಲೆ ತೋರಿಸಿದ ಕೋಡ್‌ನಲ್ಲಿ ಒಂದು ಸ್ಥಿರಾಂಕ, ಮಿತಿ ಅಥವಾ ಇನ್‌ಪುಟ್ ಆಯ್ದು ಬದಲಿಸಿ, ಮರುಓಡಿಸುವ ಮುನ್ನ ಯಾವ ಪ್ರಯೋಗ ಬದಲಾಗುತ್ತದೆ ಎಂದು ಊಹಿಸಿ. ನೀವು ನಿರೀಕ್ಷಿಸದ ಪ್ರಯೋಗ ಬದಲಾದರೆ, ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕಾದ ಸಂಬಂಧವನ್ನು ನೀವು ಕಂಡುಕೊಂಡಿದ್ದೀರಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Where your numbers may differ",
    "headingKn": "ನಿಮ್ಮ ಸಂಖ್ಯೆಗಳು ಎಲ್ಲಿ ಭಿನ್ನವಾಗಬಹುದು",
    "bodyEn": "Timings, temporary paths, hashes and commit ids differ between runs and machines. Counts, verdicts and error messages should match unless your Python version or operating system differs from the one named in Lesson Info.",
    "bodyKn": "ಸಮಯಗಳು, ತಾತ್ಕಾಲಿಕ paths, hashes ಮತ್ತು commit ids ಓಟಗಳ ಮತ್ತು ಯಂತ್ರಗಳ ನಡುವೆ ಭಿನ್ನವಾಗುತ್ತವೆ. ಎಣಿಕೆಗಳು, ತೀರ್ಪುಗಳು ಮತ್ತು ದೋಷ ಸಂದೇಶಗಳು ನಿಮ್ಮ Python ಆವೃತ್ತಿ ಅಥವಾ ಆಪರೇಟಿಂಗ್ ಸಿಸ್ಟಮ್ Lesson Info ನಲ್ಲಿ ಹೆಸರಿಸಿದ್ದಕ್ಕಿಂತ ಭಿನ್ನವಾಗಿಲ್ಲದಿದ್ದರೆ ಹೊಂದಬೇಕು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "In how many of 20 runs did the naive evaluator crown the cheater?",
      "qKn": "20 ಓಟಗಳಲ್ಲಿ ಎಷ್ಟರಲ್ಲಿ naive ಮೌಲ್ಯಮಾಪಕ ಮೋಸಗಾರನಿಗೆ ಕಿರೀಟ ಹಾಕಿತು?",
      "opts": [
       "11",
       "0",
       "20",
       "6"
      ],
      "optsKn": [
       "11",
       "0",
       "20",
       "6"
      ],
      "correct": 0
     },
     {
      "q": "What was the mean true held-out score of the agent crowned by the firewall search?",
      "qKn": "firewall ಹುಡುಕಾಟ ಕಿರೀಟ ಹಾಕಿದ agent ನ ಸರಾಸರಿ ನಿಜ held-out ಅಂಕ ಎಷ್ಟು?",
      "opts": [
       "0.600",
       "0.450",
       "1.000",
       "0.000"
      ],
      "optsKn": [
       "0.600",
       "0.450",
       "1.000",
       "0.000"
      ],
      "correct": 0
     },
     {
      "q": "How many runs had a cheater entry in the archive under the firewall?",
      "qKn": "firewall ನಲ್ಲಿ ಎಷ್ಟು ಓಟಗಳ ಆರ್ಕೈವ್‌ನಲ್ಲಿ ಮೋಸಗಾರ ನಮೂದು ಇತ್ತು?",
      "opts": [
       "20 of 20",
       "0 of 20",
       "11 of 20",
       "6 of 20"
      ],
      "optsKn": [
       "20 ರಲ್ಲಿ 20",
       "20 ರಲ್ಲಿ 0",
       "20 ರಲ್ಲಿ 11",
       "20 ರಲ್ಲಿ 6"
      ],
      "correct": 0
     },
     {
      "q": "How many children were drawn from the cheater entry on average under the naive evaluator?",
      "qKn": "naive ಮೌಲ್ಯಮಾಪಕದಲ್ಲಿ ಮೋಸಗಾರ ನಮೂದಿನಿಂದ ಸರಾಸರಿ ಎಷ್ಟು ಮಕ್ಕಳನ್ನು ಎಳೆಯಲಾಯಿತು?",
      "opts": [
       "12.65",
       "2.95",
       "0.45",
       "20"
      ],
      "optsKn": [
       "12.65",
       "2.95",
       "0.45",
       "20"
      ],
      "correct": 0
     },
     {
      "q": "What does the lab say about the dip at cheat rate 0.20?",
      "qKn": "ಮೋಸ ದರ 0.20 ರ ಇಳಿಕೆಯ ಬಗ್ಗೆ ಲ್ಯಾಬ್ ಏನು ಹೇಳುತ್ತದೆ?",
      "opts": [
       "It does not explain it and it may be partly noise",
       "It proves cheaters self-limit",
       "It is a bug in the firewall",
       "It shows honest agents always win"
      ],
      "optsKn": [
       "ಅದನ್ನು ವಿವರಿಸುವುದಿಲ್ಲ ಮತ್ತು ಅದು ಭಾಗಶಃ noise ಆಗಿರಬಹುದು",
       "ಮೋಸಗಾರರು ತಮ್ಮನ್ನು ತಾವೇ ಮಿತಿಗೊಳಿಸುತ್ತಾರೆ ಎಂದು ಸಾಬೀತುಪಡಿಸುತ್ತದೆ",
       "ಇದು firewall ನ ದೋಷ",
       "ಪ್ರಾಮಾಣಿಕ agents ಯಾವಾಗಲೂ ಗೆಲ್ಲುತ್ತವೆ ಎಂದು ತೋರಿಸುತ್ತದೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
