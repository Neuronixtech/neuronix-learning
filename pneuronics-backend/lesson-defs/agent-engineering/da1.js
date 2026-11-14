module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b321598",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Darwin Godel Machine: Self-Modifying Agents (Part 1 of 3) — The Agent Archive",
 "titleKn": "Darwin Godel Machine: ಸ್ವಯಂ-ಮಾರ್ಪಡಿಸುವ Agents (ಭಾಗ 1 / 3) — Agent ಆರ್ಕೈವ್",
 "desc": "Build a toy self-modifying archive and see why keeping lower-scoring agents lets a search cross flat regions.",
 "descKn": "ಆಟಿಕೆ ಸ್ವಯಂ-ಮಾರ್ಪಡಿಸುವ ಆರ್ಕೈವ್ ನಿರ್ಮಿಸಿ ಮತ್ತು ಕಡಿಮೆ-ಅಂಕದ agents ಇಡುವುದು ಹುಡುಕಾಟ ಸಮತಟ್ಟು ಪ್ರದೇಶ ದಾಟಲು ಹೇಗೆ ಬಿಡುತ್ತದೆ ನೋಡಿ.",
 "objectives": [
  "Represent an agent as editable data.",
  "Score it on a benchmark.",
  "Keep an open archive.",
  "Compare greedy and archive.",
  "Read a winning lineage."
 ],
 "objectivesKn": [
  "agent ಅನ್ನು ಸಂಪಾದಿಸಬಹುದಾದ ದತ್ತಾಂಶವಾಗಿ ನಿರೂಪಿಸಿ.",
  "benchmark ನಲ್ಲಿ ಅಂಕ ನೀಡಿ.",
  "ಮುಕ್ತ ಆರ್ಕೈವ್ ಇಡಿ.",
  "greedy ಮತ್ತು ಆರ್ಕೈವ್ ಹೋಲಿಸಿ.",
  "ವಿಜೇತ ವಂಶಾವಳಿ ಓದಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Darwin Godel Machine: Self-Modifying Agents (Part 1 of 3)",
    "textKn": "Darwin Godel Machine: ಸ್ವಯಂ-ಮಾರ್ಪಡಿಸುವ Agents (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: agents as operator sequences, a benchmark score, an archive that keeps every new agent, greedy against archive parent selection over ten seeds, one winning lineage and how often winners passed through a worse agent. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind Darwin Godel Machine style open-ended search (agent archives, stepping stones, reward hacking, evaluator firewalls, signed evidence and verification gates), not the real software, and agents are short operator sequences or plain Python callables written for the lab, the cheaters are scripted, and no language model or real code self-modification is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. Benchmark results reported for the published Darwin Godel Machine are cited from the lesson and were not reproduced; the operator-sequence agents, the target function 3x+5, the 5 percent cheat rate and every other number in the labs are invented to show the mechanics. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಆಪರೇಟರ್ ಅನುಕ್ರಮಗಳಾಗಿ agents, benchmark ಅಂಕ, ಪ್ರತಿ ಹೊಸ agent ಇಡುವ ಆರ್ಕೈವ್, ಹತ್ತು seeds ಮೇಲೆ greedy ಮತ್ತು ಆರ್ಕೈವ್ ಪೋಷಕ ಆಯ್ಕೆ, ಒಂದು ವಿಜೇತ ವಂಶಾವಳಿ ಮತ್ತು ವಿಜೇತರು ಎಷ್ಟು ಬಾರಿ ಕೆಟ್ಟ agent ಮೂಲಕ ಹಾದುಹೋದರು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು Darwin Godel Machine ಶೈಲಿಯ ಮುಕ್ತ-ಅಂತ್ಯ ಹುಡುಕಾಟ (agent ಆರ್ಕೈವ್‌ಗಳು, ಮೆಟ್ಟಿಲು ಕಲ್ಲುಗಳು, reward hacking, ಮೌಲ್ಯಮಾಪಕ firewalls, ಸಹಿ ಮಾಡಿದ ಸಾಕ್ಷ್ಯ ಮತ್ತು verification gates) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು agents ಚಿಕ್ಕ ಆಪರೇಟರ್ ಅನುಕ್ರಮಗಳು ಅಥವಾ ಲ್ಯಾಬ್‌ಗಾಗಿ ಬರೆದ ಸಾಮಾನ್ಯ Python callables, ಮೋಸಗಾರರು scripted, ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಅಥವಾ ನಿಜ ಕೋಡ್ ಸ್ವಯಂ-ಮಾರ್ಪಾಡು ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಪ್ರಕಟಿತ Darwin Godel Machine ಗೆ ವರದಿಯಾದ benchmark ಫಲಿತಾಂಶಗಳು lesson ನಿಂದ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಪುನರುತ್ಪಾದಿಸಲಾಗಿಲ್ಲ; ಆಪರೇಟರ್-ಅನುಕ್ರಮ agents, ಗುರಿ ಕಾರ್ಯ 3x+5, 5 ಶೇಕಡಾ ಮೋಸ ದರ ಮತ್ತು ಲ್ಯಾಬ್‌ಗಳ ಇತರ ಪ್ರತಿ ಸಂಖ್ಯೆ ಯಂತ್ರಶಾಸ್ತ್ರ ತೋರಿಸಲು ಕಲ್ಪಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Keeping the Worse Agents On Purpose",
    "textKn": "ಕೆಟ್ಟ Agents ಅನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಇಡುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Toy Version of the Archive",
    "headingKn": "ಆರ್ಕೈವ್‌ನ ಆಟಿಕೆ ಆವೃತ್ತಿ",
    "bodyEn": "The Darwin Godel Machine idea is that an agent edits itself, a benchmark scores the result and every valid new agent goes into an archive that later parents are drawn from, even when it scored lower. This part builds a toy of that loop where an agent is a short sequence of arithmetic operators and the benchmark asks it to compute 3x+5. It compares always improving the single best agent with sampling parents from the whole archive, and counts how often the winning lineage passed through an agent that scored below its parent.",
    "bodyKn": "Darwin Godel Machine ಕಲ್ಪನೆ ಎಂದರೆ agent ತನ್ನನ್ನು ತಾನೇ ಸಂಪಾದಿಸುತ್ತದೆ, benchmark ಫಲಿತಾಂಶಕ್ಕೆ ಅಂಕ ನೀಡುತ್ತದೆ ಮತ್ತು ಪ್ರತಿ ಮಾನ್ಯ ಹೊಸ agent ಕಡಿಮೆ ಅಂಕ ಪಡೆದರೂ ನಂತರದ ಪೋಷಕರನ್ನು ಎಳೆಯುವ ಆರ್ಕೈವ್‌ಗೆ ಹೋಗುತ್ತದೆ. ಈ ಭಾಗ agent ಅಂಕಗಣಿತ ಆಪರೇಟರ್‌ಗಳ ಚಿಕ್ಕ ಅನುಕ್ರಮ ಮತ್ತು benchmark ಅದನ್ನು 3x+5 ಲೆಕ್ಕ ಹಾಕಲು ಕೇಳುವ ಆ ಲೂಪ್‌ನ ಆಟಿಕೆ ನಿರ್ಮಿಸುತ್ತದೆ. ಏಕೈಕ ಅತ್ಯುತ್ತಮ agent ಅನ್ನು ಯಾವಾಗಲೂ ಸುಧಾರಿಸುವುದನ್ನು ಇಡೀ ಆರ್ಕೈವ್‌ನಿಂದ ಪೋಷಕರನ್ನು ಮಾದರಿ ಮಾಡುವುದರೊಂದಿಗೆ ಹೋಲಿಸಿ, ವಿಜೇತ ವಂಶಾವಳಿ ಪೋಷಕಕ್ಕಿಂತ ಕಡಿಮೆ ಅಂಕ ಪಡೆದ agent ಮೂಲಕ ಎಷ್ಟು ಬಾರಿ ಹಾದುಹೋಯಿತು ಎಣಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Darwin Godel Machine Loop",
    "headingKn": "Darwin Godel Machine ಲೂಪ್",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">an open-ended archive keeps stepping stones</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">archive</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">keep every agent</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">select</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">score and novelty</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">modify</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">edit the agent</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">benchmark</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">score the child</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">an open-ended archive keeps stepping stones</text></svg>",
    "captionEn": "Pick a parent from the archive, modify it, score the child and archive it.",
    "captionKn": "ಆರ್ಕೈವ್‌ನಿಂದ ಪೋಷಕ ಆರಿಸಿ, ಮಾರ್ಪಡಿಸಿ, ಮಗುವಿಗೆ ಅಂಕ ನೀಡಿ ಮತ್ತು ಆರ್ಕೈವ್ ಮಾಡಿ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Settings of the toy loop",
    "headingKn": "ಆಟಿಕೆ ಲೂಪ್‌ನ ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
    "headers": [
     "Item",
     "Lab setting"
    ],
    "rows": [
     [
      "operators",
      "a1, a5, d2, t3, s1 (add 1, add 5, double, triple, subtract 1)"
     ],
     [
      "target",
      "3x + 5 (invented)"
     ],
     [
      "training inputs",
      "x from -5 to 5"
     ],
     [
      "held-out inputs",
      "x from 20 to 29"
     ],
     [
      "mutation",
      "insert, delete or replace one operator, length at most 6"
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
    "filename": "da_1.py",
    "headingEn": "Agents, scoring, mutation and the archive loop",
    "headingKn": "Agents, ಅಂಕ, ಮ್ಯುಟೇಶನ್ ಮತ್ತು ಆರ್ಕೈವ್ ಲೂಪ್",
    "descEn": "run_agent applies the operators, score measures the fraction of inputs solved exactly, mutate edits one operator and evolve runs greedy or archive parent selection and records the lineage.",
    "descKn": "run_agent ಆಪರೇಟರ್‌ಗಳನ್ನು ಅನ್ವಯಿಸುತ್ತದೆ, score ನಿಖರವಾಗಿ ಪರಿಹರಿಸಿದ ಒಳಹರಿವುಗಳ ಭಾಗ ಅಳೆಯುತ್ತದೆ, mutate ಒಂದು ಆಪರೇಟರ್ ಸಂಪಾದಿಸುತ್ತದೆ ಮತ್ತು evolve greedy ಅಥವಾ ಆರ್ಕೈವ್ ಪೋಷಕ ಆಯ್ಕೆ ಓಡಿಸಿ ವಂಶಾವಳಿ ದಾಖಲಿಸುತ್ತದೆ.",
    "code": "OPS = {\"a1\": lambda v: v + 1, \"a5\": lambda v: v + 5, \"d2\": lambda v: v * 2, \"t3\": lambda v: v * 3, \"s1\": lambda v: v - 1}\r\nTRAIN = list(range(-5, 6))\r\nHELD = list(range(20, 30))\r\n\r\n\r\ndef target(x):\r\n    return 3 * x + 5\r\n\r\n\r\ndef run_agent(agent, x):\r\n    v = x\r\n    for op in agent:\r\n        v = OPS[op](v)\r\n    return v\r\n\r\n\r\ndef score(agent, inputs=TRAIN):\r\n    return sum(run_agent(agent, x) == target(x) for x in inputs) / len(inputs)\r\n\r\n\r\ndef mutate(agent, r, max_len=6):\r\n    a = list(agent)\r\n    kind = r.choice([\"insert\", \"delete\", \"replace\"])\r\n    if kind == \"insert\" and len(a) < max_len:\r\n        a.insert(r.randrange(len(a) + 1), r.choice(list(OPS)))\r\n    elif kind == \"delete\" and len(a) > 1:\r\n        a.pop(r.randrange(len(a)))\r\n    else:\r\n        a[r.randrange(len(a))] = r.choice(list(OPS))\r\n    return tuple(a)\r\n\r\n\r\ndef evolve(seed, gens, mode):\r\n    r = random.Random(seed)\r\n    root = (\"a1\",)\r\n    nodes = {root: {\"parent\": None, \"score\": score(root), \"children\": 0, \"gen\": 0}}\r\n    best = root\r\n    first_hit = None\r\n    for g in range(1, gens + 1):\r\n        if mode == \"greedy\":\r\n            parent = best\r\n        else:\r\n            keys = list(nodes)\r\n            w = [(nodes[k][\"score\"] + 0.05) / (1 + nodes[k][\"children\"]) for k in keys]\r\n            parent = r.choices(keys, weights=w)[0]\r\n        child = mutate(parent, r)\r\n        nodes[parent][\"children\"] += 1\r\n        if child in nodes:\r\n            continue\r\n        s = score(child)\r\n        if mode == \"greedy\" and s <= nodes[best][\"score\"]:\r\n            continue\r\n        nodes[child] = {\"parent\": parent, \"score\": s, \"children\": 0, \"gen\": g}\r\n        if s > nodes[best][\"score\"]:\r\n            best = child\r\n        if s == 1.0 and first_hit is None:\r\n            first_hit = g\r\n    return nodes, best, first_hit\r\n\r\n\r\ndef lineage(nodes, a):\r\n    out = []\r\n    while a is not None:\r\n        out.append(a)\r\n        a = nodes[a][\"parent\"]\r\n    return out[::-1]\r\n\r\n\r\ndef has_dip(nodes, a):\r\n    ln = lineage(nodes, a)\r\n    return any(nodes[ln[i + 1]][\"score\"] < nodes[ln[i]][\"score\"] for i in range(len(ln) - 1))"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "da_1.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() scores sample agents, compares greedy and archive over ten seeds, prints one winning lineage and counts dips over forty seeds.",
    "descKn": "main() ಮಾದರಿ agents ಗೆ ಅಂಕ ನೀಡಿ, ಹತ್ತು seeds ಮೇಲೆ greedy ಮತ್ತು ಆರ್ಕೈವ್ ಹೋಲಿಸಿ, ಒಂದು ವಿಜೇತ ವಂಶಾವಳಿ ಮುದ್ರಿಸಿ ಮತ್ತು ನಲವತ್ತು seeds ಮೇಲೆ ಇಳಿಕೆಗಳನ್ನು ಎಣಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely running: agents as operator sequences and the benchmark score\")\r\n    for ag in ((\"a1\",), (\"t3\",), (\"t3\", \"a5\"), (\"d2\", \"a5\")):\r\n        print(f\"{'+'.join(ag):10} train score {score(ag):.3f} | held-out score {score(ag, HELD):.3f}\")\r\n    print(\"the seed agent a1 solves only one of eleven training inputs, the pair t3 then a5 computes 3x+5 exactly, and every agent except the exact one scores 0.000 on the held-out inputs 20 to 29, including the seed agent whose single training hit is a coincidence at one input; the target function is invented\")\r\n\r\n    section(\"2. Genuinely measuring: greedy against archive parent selection, 10 seeds, 150 generations\")\r\n    for mode in (\"greedy\", \"archive\"):\r\n        hits, firsts, sizes, dips = 0, [], [], 0\r\n        for seed in range(1, 11):\r\n            nodes, best, fh = evolve(seed, 150, mode)\r\n            hits += nodes[best][\"score\"] == 1.0\r\n            if fh is not None:\r\n                firsts.append(fh)\r\n            sizes.append(len(nodes))\r\n            dips += has_dip(nodes, best)\r\n        print(f\"{mode:8}: exact in {hits}/10 | median generation of first hit {median(firsts) if firsts else None} | median archive size {median(sizes)} | winners whose lineage dipped {dips}\")\r\n    print(\"greedy keeps only strict improvements so its lineage can never dip, while the archive keeps every new agent and parents are drawn by score and by how few children they have; greedy found the target in none of the ten runs because the score is 0.000 almost everywhere, so a strictly better child almost never appears and the archive stays at one agent, while the archive mode found it in most runs by wandering through agents that scored no better than the seed; the result belongs to this flat toy score landscape and is not a general ranking\")\r\n\r\n    section(\"3. Genuinely running: a stepping stone in one archive run (seed 3, archive mode)\")\r\n    nodes, best, fh = evolve(3, 150, \"archive\")\r\n    ln = lineage(nodes, best)\r\n    print(\"best:\", \"+\".join(best), \"| score\", nodes[best][\"score\"], \"| first exact at generation\", fh)\r\n    for a in ln:\r\n        print(f\"  gen {nodes[a]['gen']:3d} {'+'.join(a):22} score {nodes[a]['score']:.3f}\")\r\n    print(\"the printed chain is the ancestry of the best agent found in that run; if a score falls and rises again along it, a lower-scoring agent was a stepping stone, which a greedy search would have discarded\")\r\n\r\n    section(\"4. Genuinely measuring: how often a winning lineage passes through a worse agent\")\r\n    tot = dips = 0\r\n    for seed in range(1, 41):\r\n        nodes, best, fh = evolve(seed, 150, \"archive\")\r\n        if nodes[best][\"score\"] == 1.0:\r\n            tot += 1\r\n            dips += has_dip(nodes, best)\r\n    print(f\"over 40 seeds {tot} runs reached exact; {dips} of those winning lineages contained at least one step where the child scored below its parent\")\r\n    print(\"the fraction is specific to this toy mutation operator, benchmark and parent rule, and the lab does not claim it carries over to real self-modifying agents\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: agents as operator sequences and the benchmark score ---\na1         train score 0.091 | held-out score 0.000\nt3         train score 0.000 | held-out score 0.000\nt3+a5      train score 1.000 | held-out score 1.000\nd2+a5      train score 0.091 | held-out score 0.000\nthe seed agent a1 solves only one of eleven training inputs, the pair t3 then a5 computes 3x+5 exactly, and every agent except the exact one scores 0.000 on the held-out inputs 20 to 29, including the seed agent whose single training hit is a coincidence at one input; the target function is invented\n\n--- 2. Genuinely measuring: greedy against archive parent selection, 10 seeds, 150 generations ---\ngreedy  : exact in 0/10 | median generation of first hit None | median archive size 1.0 | winners whose lineage dipped 0\narchive : exact in 9/10 | median generation of first hit 86 | median archive size 96.5 | winners whose lineage dipped 8\ngreedy keeps only strict improvements so its lineage can never dip, while the archive keeps every new agent and parents are drawn by score and by how few children they have; greedy found the target in none of the ten runs because the score is 0.000 almost everywhere, so a strictly better child almost never appears and the archive stays at one agent, while the archive mode found it in most runs by wandering through agents that scored no better than the seed; the result belongs to this flat toy score landscape and is not a general ranking\n\n--- 3. Genuinely running: a stepping stone in one archive run (seed 3, archive mode) ---\nbest: s1+s1+t3+a5+a1+a5 | score 1.0 | first exact at generation 105\n  gen   0 a1                     score 0.091\n  gen   8 a1+t3                  score 0.000\n  gen  11 a5+a1+t3               score 0.000\n  gen  16 a5+a1+a5               score 0.091\n  gen  28 d2+a5+a1+a5            score 0.000\n  gen  31 s1+a5+a1+a5            score 0.000\n  gen  40 t3+a5+a1+a5            score 0.000\n  gen  74 s1+t3+a5+a1+a5         score 0.000\n  gen 105 s1+s1+t3+a5+a1+a5      score 1.000\nthe printed chain is the ancestry of the best agent found in that run; if a score falls and rises again along it, a lower-scoring agent was a stepping stone, which a greedy search would have discarded\n\n--- 4. Genuinely measuring: how often a winning lineage passes through a worse agent ---\nover 40 seeds 26 runs reached exact; 23 of those winning lineages contained at least one step where the child scored below its parent\nthe fraction is specific to this toy mutation operator, benchmark and parent rule, and the lab does not claim it carries over to real self-modifying agents"
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
    "headingEn": "Experiment 1: Agents as operator sequences and the benchmark score",
    "headingKn": "ಪ್ರಯೋಗ 1: Agents as operator sequences and the benchmark score",
    "bodyEn": "What it ran: Agents as operator sequences and the benchmark score. What the lab concluded: the seed agent a1 solves only one of eleven training inputs, the pair t3 then a5 computes 3x+5 exactly, and every agent except the exact one scores 0.000 on the held-out inputs 20 to 29, including the seed agent whose single training hit is a coincidence at one input; the target function is invented",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Agents as operator sequences and the benchmark score. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the seed agent a1 solves only one of eleven training inputs, the pair t3 then a5 computes 3x+5 exactly, and every agent except the exact one scores 0.000 on the held-out inputs 20 to 29, including the seed agent whose single training hit is a coincidence at one input; the target function is invented"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: agents as operator sequences and the benchmark score ---\na1         train score 0.091 | held-out score 0.000\nt3         train score 0.000 | held-out score 0.000\nt3+a5      train score 1.000 | held-out score 1.000\nd2+a5      train score 0.091 | held-out score 0.000"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Greedy against archive parent selection, 10 seeds, 150 generations",
    "headingKn": "ಪ್ರಯೋಗ 2: Greedy against archive parent selection, 10 seeds, 150 generations",
    "bodyEn": "What it ran: Greedy against archive parent selection, 10 seeds, 150 generations. What the lab concluded: greedy keeps only strict improvements so its lineage can never dip, while the archive keeps every new agent and parents are drawn by score and by how few children they have; greedy found the target in none of the ten runs because the score is 0.000 almost everywhere, so a strictly better child almost never appears and the archive stays at one agent, while the archive mode found it in most runs by wandering through agents that scored no better than the seed; the result belongs to this flat toy score landscape and is not a general ranking",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Greedy against archive parent selection, 10 seeds, 150 generations. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): greedy keeps only strict improvements so its lineage can never dip, while the archive keeps every new agent and parents are drawn by score and by how few children they have; greedy found the target in none of the ten runs because the score is 0.000 almost everywhere, so a strictly better child almost never appears and the archive stays at one agent, while the archive mode found it in most runs by wandering through agents that scored no better than the seed; the result belongs to this flat toy score landscape and is not a general ranking"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely measuring: greedy against archive parent selection, 10 seeds, 150 generations ---\ngreedy  : exact in 0/10 | median generation of first hit None | median archive size 1.0 | winners whose lineage dipped 0\narchive : exact in 9/10 | median generation of first hit 86 | median archive size 96.5 | winners whose lineage dipped 8"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: A stepping stone in one archive run (seed 3, archive mode)",
    "headingKn": "ಪ್ರಯೋಗ 3: A stepping stone in one archive run (seed 3, archive mode)",
    "bodyEn": "What it ran: A stepping stone in one archive run (seed 3, archive mode). What the lab concluded: the printed chain is the ancestry of the best agent found in that run; if a score falls and rises again along it, a lower-scoring agent was a stepping stone, which a greedy search would have discarded",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A stepping stone in one archive run (seed 3, archive mode). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the printed chain is the ancestry of the best agent found in that run; if a score falls and rises again along it, a lower-scoring agent was a stepping stone, which a greedy search would have discarded"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: a stepping stone in one archive run (seed 3, archive mode) ---\nbest: s1+s1+t3+a5+a1+a5 | score 1.0 | first exact at generation 105\n  gen   0 a1                     score 0.091\n  gen   8 a1+t3                  score 0.000\n  gen  11 a5+a1+t3               score 0.000\n  gen  16 a5+a1+a5               score 0.091\n  gen  28 d2+a5+a1+a5            score 0.000\n  gen  31 s1+a5+a1+a5            score 0.000\n  gen  40 t3+a5+a1+a5            score 0.000\n  gen  74 s1+t3+a5+a1+a5         score 0.000\n  gen 105 s1+s1+t3+a5+a1+a5      score 1.000"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: How often a winning lineage passes through a worse agent",
    "headingKn": "ಪ್ರಯೋಗ 4: How often a winning lineage passes through a worse agent",
    "bodyEn": "What it ran: How often a winning lineage passes through a worse agent. What the lab concluded: the fraction is specific to this toy mutation operator, benchmark and parent rule, and the lab does not claim it carries over to real self-modifying agents",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: How often a winning lineage passes through a worse agent. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the fraction is specific to this toy mutation operator, benchmark and parent rule, and the lab does not claim it carries over to real self-modifying agents"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely measuring: how often a winning lineage passes through a worse agent ---\nover 40 seeds 26 runs reached exact; 23 of those winning lineages contained at least one step where the child scored below its parent"
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
    "headingEn": "Genuinely Found: Scores and Greedy Against Archive",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅಂಕಗಳು ಮತ್ತು Greedy ವಿರುದ್ಧ ಆರ್ಕೈವ್",
    "bodyEn": "Section 1: a1 scored 0.091 on training and 0.000 held-out, t3 scored 0.000 on both, t3+a5 scored 1.000 on both and d2+a5 scored 0.091 and 0.000. Section 2 over seeds 1 to 10 with 150 generations: greedy reached the exact agent in 0 of 10 runs with a median archive size of 1.0, while archive parent selection reached it in 9 of 10 with a median first hit at generation 86, a median archive size of 96.5 and 8 winners whose lineage dipped.",
    "bodyKn": "ವಿಭಾಗ 1: a1 training ನಲ್ಲಿ 0.091 ಮತ್ತು held-out ನಲ್ಲಿ 0.000, t3 ಎರಡರಲ್ಲೂ 0.000, t3+a5 ಎರಡರಲ್ಲೂ 1.000 ಮತ್ತು d2+a5 0.091 ಮತ್ತು 0.000 ಪಡೆದವು. ವಿಭಾಗ 2 seeds 1 ರಿಂದ 10 ಮತ್ತು 150 ಜನರೇಶನ್: greedy 10 ರಲ್ಲಿ 0 ಓಟಗಳಲ್ಲಿ ನಿಖರ agent ತಲುಪಿತು, ಮಧ್ಯಗ ಆರ್ಕೈವ್ ಗಾತ್ರ 1.0, ಆರ್ಕೈವ್ ಪೋಷಕ ಆಯ್ಕೆ 10 ರಲ್ಲಿ 9 ಓಟಗಳಲ್ಲಿ ತಲುಪಿತು, ಮಧ್ಯಗ ಮೊದಲ ಯಶಸ್ಸು ಜನರೇಶನ್ 86, ಮಧ್ಯಗ ಆರ್ಕೈವ್ ಗಾತ್ರ 96.5 ಮತ್ತು 8 ವಿಜೇತರ ವಂಶಾವಳಿ ಇಳಿಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Winning Lineage",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ವಿಜೇತ ವಂಶಾವಳಿ",
    "bodyEn": "Section 3: seed 3 in archive mode found s1+s1+t3+a5+a1+a5 with score 1.000 first at generation 105; its ancestry ran a1 (0.091), a1+t3 (0.000), a5+a1+t3 (0.000), a5+a1+a5 (0.091), d2+a5+a1+a5 (0.000), s1+a5+a1+a5 (0.000), t3+a5+a1+a5 (0.000), s1+t3+a5+a1+a5 (0.000) and then the winner. Section 4: over 40 seeds 26 runs reached exact and 23 of those winning lineages contained a child scoring below its parent.",
    "bodyKn": "ವಿಭಾಗ 3: ಆರ್ಕೈವ್ ಮೋಡ್‌ನಲ್ಲಿ seed 3 s1+s1+t3+a5+a1+a5 ಅನ್ನು ಅಂಕ 1.000 ನೊಂದಿಗೆ ಮೊದಲು ಜನರೇಶನ್ 105 ರಲ್ಲಿ ಕಂಡುಹಿಡಿಯಿತು; ಅದರ ವಂಶಾವಳಿ a1 (0.091), a1+t3 (0.000), a5+a1+t3 (0.000), a5+a1+a5 (0.091), d2+a5+a1+a5 (0.000), s1+a5+a1+a5 (0.000), t3+a5+a1+a5 (0.000), s1+t3+a5+a1+a5 (0.000) ಮತ್ತು ನಂತರ ವಿಜೇತ. ವಿಭಾಗ 4: 40 seeds ಮೇಲೆ 26 ಓಟಗಳು ನಿಖರ ತಲುಪಿದವು ಮತ್ತು ಆ ವಿಜೇತ ವಂಶಾವಳಿಗಳಲ್ಲಿ 23 ರಲ್ಲಿ ಪೋಷಕಕ್ಕಿಂತ ಕಡಿಮೆ ಅಂಕದ ಮಗು ಇತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "When the score is flat almost everywhere, an agent that can only accept strict improvements gets stuck, and keeping lower-scoring agents as parents is what lets the search cross the flat region.",
    "bodyKn": "ಅಂಕ ಬಹುತೇಕ ಎಲ್ಲೆಡೆ ಸಮತಟ್ಟಾಗಿದ್ದಾಗ, ಕಟ್ಟುನಿಟ್ಟಾದ ಸುಧಾರಣೆಗಳನ್ನು ಮಾತ್ರ ಸ್ವೀಕರಿಸುವ agent ಸಿಕ್ಕಿಹಾಕಿಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು ಕಡಿಮೆ-ಅಂಕದ agents ಅನ್ನು ಪೋಷಕರಾಗಿ ಇಡುವುದು ಹುಡುಕಾಟ ಸಮತಟ್ಟು ಪ್ರದೇಶ ದಾಟಲು ಬಿಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"keeping worse agents just wastes budget.\" In 23 of the 26 winning lineages a child scored below its parent somewhere on the way.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಕೆಟ್ಟ agents ಇಡುವುದು ಬಜೆಟ್ ವ್ಯರ್ಥ ಮಾಡುತ್ತದೆ.\" 26 ವಿಜೇತ ವಂಶಾವಳಿಗಳಲ್ಲಿ 23 ರಲ್ಲಿ ದಾರಿಯಲ್ಲಿ ಎಲ್ಲೋ ಮಗು ಪೋಷಕಕ್ಕಿಂತ ಕಡಿಮೆ ಅಂಕ ಪಡೆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Archive: every valid agent kept. Lineage: the chain of parents. Stepping stone: a lower-scoring ancestor on the way to a winner. Greedy: accept only strict improvements. Held-out: inputs the search did not score on.",
    "bodyKn": "Archive: ಇಟ್ಟ ಪ್ರತಿ ಮಾನ್ಯ agent. Lineage: ಪೋಷಕರ ಸರಪಳಿ. Stepping stone: ವಿಜೇತನಿಗೆ ಹೋಗುವ ದಾರಿಯಲ್ಲಿ ಕಡಿಮೆ-ಅಂಕದ ಪೂರ್ವಜ. Greedy: ಕಟ್ಟುನಿಟ್ಟಾದ ಸುಧಾರಣೆ ಮಾತ್ರ ಸ್ವೀಕರಿಸಿ. Held-out: ಹುಡುಕಾಟ ಅಂಕ ನೀಡದ ಒಳಹರಿವುಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Only t3+a5 solved the target. 2) Greedy found it in 0 of 10 runs. 3) The archive found it in 9 of 10. 4) Seed 3 needed 105 generations through six zero-score steps. 5) 23 of 26 winning lineages dipped, a result tied to this toy.",
    "bodyKn": "1) t3+a5 ಮಾತ್ರ ಗುರಿ ಪರಿಹರಿಸಿತು. 2) Greedy 10 ರಲ್ಲಿ 0 ಓಟಗಳಲ್ಲಿ ಕಂಡುಹಿಡಿಯಿತು. 3) ಆರ್ಕೈವ್ 10 ರಲ್ಲಿ 9 ರಲ್ಲಿ ಕಂಡುಹಿಡಿಯಿತು. 4) Seed 3 ಗೆ ಆರು ಶೂನ್ಯ-ಅಂಕ ಹಂತಗಳ ಮೂಲಕ 105 ಜನರೇಶನ್ ಬೇಕಾಯಿತು. 5) 26 ವಿಜೇತ ವಂಶಾವಳಿಗಳಲ್ಲಿ 23 ಇಳಿದವು, ಈ ಆಟಿಕೆಗೆ ಸೀಮಿತ ಫಲಿತಾಂಶ."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B da_1.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B da_1.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B da_1.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B da_1.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Predict before you run",
    "headingKn": "ಓಡಿಸುವ ಮುನ್ನ ಊಹಿಸಿ",
    "bodyEn": "Before rerunning, write down what you expect each experiment to print, then compare:\n1. Agents as operator sequences and the benchmark score\n2. Greedy against archive parent selection, 10 seeds, 150 generations\n3. A stepping stone in one archive run (seed 3, archive mode)\n4. How often a winning lineage passes through a worse agent",
    "bodyKn": "ಮರುಓಡಿಸುವ ಮುನ್ನ ಪ್ರತಿ ಪ್ರಯೋಗ ಏನು ಮುದ್ರಿಸುತ್ತದೆ ಎಂದು ನಿರೀಕ್ಷಿಸುವುದನ್ನು ಬರೆಯಿರಿ, ನಂತರ ಹೋಲಿಸಿ:\n1. Agents as operator sequences and the benchmark score\n2. Greedy against archive parent selection, 10 seeds, 150 generations\n3. A stepping stone in one archive run (seed 3, archive mode)\n4. How often a winning lineage passes through a worse agent"
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many of 10 seeds did greedy search solve in 150 generations?",
      "qKn": "150 ಜನರೇಶನ್‌ನಲ್ಲಿ 10 seeds ಗಳಲ್ಲಿ ಎಷ್ಟನ್ನು greedy ಹುಡುಕಾಟ ಪರಿಹರಿಸಿತು?",
      "opts": [
       "0",
       "9",
       "10",
       "8"
      ],
      "optsKn": [
       "0",
       "9",
       "10",
       "8"
      ],
      "correct": 0
     },
     {
      "q": "How many of 10 seeds did archive parent selection solve?",
      "qKn": "ಆರ್ಕೈವ್ ಪೋಷಕ ಆಯ್ಕೆ 10 seeds ಗಳಲ್ಲಿ ಎಷ್ಟನ್ನು ಪರಿಹರಿಸಿತು?",
      "opts": [
       "9",
       "0",
       "10",
       "5"
      ],
      "optsKn": [
       "9",
       "0",
       "10",
       "5"
      ],
      "correct": 0
     },
     {
      "q": "Why did greedy fail in the lab?",
      "qKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ greedy ಏಕೆ ವಿಫಲವಾಯಿತು?",
      "opts": [
       "The score was 0.000 almost everywhere so strict improvements almost never appeared",
       "It used a different target",
       "It had no mutation",
       "The archive was too large"
      ],
      "optsKn": [
       "ಅಂಕ ಬಹುತೇಕ ಎಲ್ಲೆಡೆ 0.000 ಆಗಿತ್ತು ಆದ್ದರಿಂದ ಕಟ್ಟುನಿಟ್ಟಾದ ಸುಧಾರಣೆಗಳು ಬಹುತೇಕ ಕಾಣಲಿಲ್ಲ",
       "ಅದು ಬೇರೆ ಗುರಿ ಬಳಸಿತು",
       "ಅದಕ್ಕೆ ಮ್ಯುಟೇಶನ್ ಇರಲಿಲ್ಲ",
       "ಆರ್ಕೈವ್ ತುಂಬಾ ದೊಡ್ಡದಾಗಿತ್ತು"
      ],
      "correct": 0
     },
     {
      "q": "How many of 26 winning lineages contained a child scoring below its parent?",
      "qKn": "26 ವಿಜೇತ ವಂಶಾವಳಿಗಳಲ್ಲಿ ಎಷ್ಟರಲ್ಲಿ ಪೋಷಕಕ್ಕಿಂತ ಕಡಿಮೆ ಅಂಕದ ಮಗು ಇತ್ತು?",
      "opts": [
       "23",
       "8",
       "26",
       "0"
      ],
      "optsKn": [
       "23",
       "8",
       "26",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "Can the 23 of 26 figure be taken as a property of real self-modifying agents?",
      "qKn": "26 ರಲ್ಲಿ 23 ಅಂಕಿಯನ್ನು ನಿಜ ಸ್ವಯಂ-ಮಾರ್ಪಡಿಸುವ agents ನ ಗುಣ ಎಂದು ಪರಿಗಣಿಸಬಹುದೇ?",
      "opts": [
       "No, it belongs to this toy operator, benchmark and parent rule",
       "Yes, it is measured on real agents",
       "Yes, it is a theorem",
       "Only for held-out inputs"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಅದು ಈ ಆಟಿಕೆ ಆಪರೇಟರ್, benchmark ಮತ್ತು ಪೋಷಕ ನಿಯಮಕ್ಕೆ ಸೇರಿದೆ",
       "ಹೌದು, ಅದನ್ನು ನಿಜ agents ಮೇಲೆ ಅಳೆಯಲಾಗಿದೆ",
       "ಹೌದು, ಅದು ಪ್ರಮೇಯ",
       "held-out ಒಳಹರಿವುಗಳಿಗೆ ಮಾತ್ರ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
