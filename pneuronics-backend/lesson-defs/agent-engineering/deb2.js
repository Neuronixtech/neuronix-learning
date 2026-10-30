module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321556",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Multi-Agent Debate: Voting, Topologies and Evaluation (Part 2 of 3) — Topologies, Snapshots and Hub Failure",
 "titleKn": "ಬಹು-Agent ಚರ್ಚೆ: ಮತದಾನ, Topologies ಮತ್ತು ಮೌಲ್ಯಮಾಪನ (ಭಾಗ 2 / 3) — Topologies, Snapshots ಮತ್ತು Hub ವೈಫಲ್ಯ",
 "desc": "Implement full-mesh, hub-and-spoke and ring debate with synchronous snapshots, then count critique operations, test order dependence of in-place updates, compare convergence and accuracy across topologies and stage a wrong hub.",
 "descKn": "Full-mesh, hub-and-spoke ಮತ್ತು ring ಚರ್ಚೆಯನ್ನು ಸಿಂಕ್ರೊನಸ್ snapshots ಜೊತೆ ಅನುಷ್ಠಾನಗೊಳಿಸಿ, ನಂತರ critique operations ಎಣಿಸಿ, in-place ನವೀಕರಣಗಳ ಕ್ರಮ ಅವಲಂಬನೆ ಪರೀಕ್ಷಿಸಿ, topologies ಅಡ್ಡ ಒಮ್ಮತ ಮತ್ತು ನಿಖರತೆ ಹೋಲಿಸಿ ಮತ್ತು ತಪ್ಪು hub ಅನ್ನು ವೇದಿಕೆಗೆ ತನ್ನಿ.",
 "objectives": [
  "Count critique operations per topology.",
  "Use a round-start snapshot.",
  "Compare cost and convergence across topologies.",
  "Recognise oscillation and hub failure.",
  "Never credit a tie as an answer."
 ],
 "objectivesKn": [
  "ಪ್ರತಿ topology ಗೆ critique operations ಎಣಿಸಿ.",
  "ಸುತ್ತಿನ-ಆರಂಭದ snapshot ಬಳಸಿ.",
  "Topologies ಅಡ್ಡ ವೆಚ್ಚ ಮತ್ತು ಒಮ್ಮತ ಹೋಲಿಸಿ.",
  "ಆಂದೋಲನ ಮತ್ತು hub ವೈಫಲ್ಯ ಗುರುತಿಸಿ.",
  "ಸಮ ಮತಕ್ಕೆ ಎಂದೂ ಉತ್ತರ ಎಂದು ಮನ್ನಣೆ ನೀಡಬೇಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Multi-Agent Debate: Voting, Topologies and Evaluation (Part 2 of 3)",
    "textKn": "ಬಹು-Agent ಚರ್ಚೆ: ಮತದಾನ, Topologies ಮತ್ತು ಮೌಲ್ಯಮಾಪನ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: full mesh, hub-and-spoke and ring topologies, snapshots and critique-operation cost. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind multi-agent debate (Society-of-Minds style), not the real software, and every agent is scripted or simulated with an assumed error rate, so no language model and no real debate quality is measured, so no real LLM behaviour is measured. All three pasted parts of this lesson were cut off by a size limit before their programs finished, so the debaters, runners and harness are rebuilt from their descriptions. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: full mesh, hub-and-spoke ಮತ್ತು ring topologies, snapshots ಮತ್ತು critique-operation ವೆಚ್ಚ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಬಹು-agent ಚರ್ಚೆ (Society-of-Minds ಶೈಲಿ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪ್ರತಿ agent ಸ್ಕ್ರಿಪ್ಟ್ ಅಥವಾ ಊಹಿಸಿದ ದೋಷ ದರದೊಂದಿಗೆ ಅನುಕರಿಸಲಾಗಿದೆ, ಆದ್ದರಿಂದ ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಮತ್ತು ನಿಜ ಚರ್ಚೆ ಗುಣಮಟ್ಟ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಈ ಲೆಸನ್‌ನ ಮೂರೂ ಅಂಟಿಸಿದ ಭಾಗಗಳು ತಮ್ಮ ಪ್ರೋಗ್ರಾಂ ಮುಗಿಯುವ ಮುನ್ನ ಗಾತ್ರ ಮಿತಿಯಿಂದ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿದ್ದವು, ಆದ್ದರಿಂದ debaters, runners ಮತ್ತು harness ಅವುಗಳ ವಿವರಣೆಗಳಿಂದ ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Who Reads Whom",
    "textKn": "ಯಾರು ಯಾರನ್ನು ಓದುತ್ತಾರೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Topology Sets Cost, Speed and Failure Points",
    "headingKn": "Topology ವೆಚ್ಚ, ವೇಗ ಮತ್ತು ವೈಫಲ್ಯ ಬಿಂದುಗಳನ್ನು ನಿರ್ಧರಿಸುತ್ತದೆ",
    "bodyEn": "In full-mesh debate every agent reads every other agent each round, which costs n times (n - 1) reads; hub-and-spoke has spokes read only the hub and the hub read all spokes (2 times (n - 1)); a ring reads two neighbours each (2n). Fewer reads mean fewer tokens but slower spread of a majority and a heavier dependence on whoever sits at the centre. A round also needs a rule about timing: all agents should read the round-start snapshot and commit together. This part implements the three topologies and tests cost, order dependence, convergence speed and hub failure.",
    "bodyKn": "Full-mesh ಚರ್ಚೆಯಲ್ಲಿ ಪ್ರತಿ agent ಪ್ರತಿ ಸುತ್ತು ಉಳಿದ ಪ್ರತಿ agent ಅನ್ನು ಓದುತ್ತದೆ, ಇದು n ಗುಣಿಸು (n - 1) ಓದುವಿಕೆ ವೆಚ್ಚ; hub-and-spoke ನಲ್ಲಿ spokes hub ಮಾತ್ರ ಓದಿ hub ಎಲ್ಲಾ spokes ಓದುತ್ತದೆ (2 ಗುಣಿಸು (n - 1)); ring ನಲ್ಲಿ ಪ್ರತಿಯೊಂದು ಇಬ್ಬರು ನೆರೆಯವರನ್ನು ಓದುತ್ತದೆ (2n). ಕಡಿಮೆ ಓದುವಿಕೆ ಎಂದರೆ ಕಡಿಮೆ tokens ಆದರೆ ಬಹುಮತದ ನಿಧಾನ ಹರಡುವಿಕೆ ಮತ್ತು ಕೇಂದ್ರದಲ್ಲಿರುವವರ ಮೇಲೆ ಹೆಚ್ಚು ಅವಲಂಬನೆ. ಸುತ್ತಿಗೆ ಸಮಯದ ನಿಯಮ ಬೇಕು: ಎಲ್ಲಾ agents ಸುತ್ತಿನ-ಆರಂಭದ snapshot ಓದಿ ಒಟ್ಟಿಗೆ commit ಮಾಡಬೇಕು. ಈ ಭಾಗ ಮೂರು topologies ಅನುಷ್ಠಾನಗೊಳಿಸಿ ವೆಚ್ಚ, ಕ್ರಮ ಅವಲಂಬನೆ, ಒಮ್ಮತ ವೇಗ ಮತ್ತು hub ವೈಫಲ್ಯ ಪರೀಕ್ಷಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Three Topologies and a Snapshot",
    "headingKn": "ಮೂರು Topologies ಮತ್ತು ಒಂದು Snapshot",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Who can see whom</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">full mesh</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">n x (n-1) reads</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">hub-and-spoke</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">2 x (n-1) reads</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">ring</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">2 x n reads</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">snapshot per round</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">compute, then commit</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">cost, speed to agreement and failure points differ</text></svg>",
    "captionEn": "Each topology trades cost against speed and robustness.",
    "captionKn": "ಪ್ರತಿ topology ವೆಚ್ಚವನ್ನು ವೇಗ ಮತ್ತು ದೃಢತೆಯ ವಿರುದ್ಧ ಹೊಂದಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Reads per round (counted in the lab)",
    "headingKn": "ಪ್ರತಿ ಸುತ್ತಿಗೆ ಓದುವಿಕೆ (ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಎಣಿಸಿದ್ದು)",
    "headers": [
     "Agents",
     "Full mesh",
     "Hub-and-spoke",
     "Ring"
    ],
    "rows": [
     [
      "5",
      "20",
      "8",
      "10"
     ],
     [
      "12",
      "132",
      "22",
      "24"
     ],
     [
      "20",
      "380",
      "38",
      "40"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Runner",
    "textKn": "Runner ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "deb_2.py",
    "headingEn": "DebateResult, neighbours and the debate runner",
    "headingKn": "DebateResult, neighbours ಮತ್ತು ಚರ್ಚೆ runner",
    "descEn": "neighbours returns whom an agent reads under each topology. debate() runs synchronous rounds with either a round-start snapshot or in-place updates in a chosen order, counts critique operations, stops when all agents agree and returns the plurality of the final state (none on a tie, so a stuck or oscillating debate gets no credit).",
    "descKn": "neighbours ಪ್ರತಿ topology ಯಲ್ಲಿ agent ಯಾರನ್ನು ಓದುತ್ತದೆ ಎಂದು ಮರಳಿಸುತ್ತದೆ. debate() ಸುತ್ತಿನ-ಆರಂಭದ snapshot ಅಥವಾ ಆಯ್ದ ಕ್ರಮದಲ್ಲಿ in-place ನವೀಕರಣಗಳೊಂದಿಗೆ ಸಿಂಕ್ರೊನಸ್ ಸುತ್ತುಗಳನ್ನು ಚಲಾಯಿಸುತ್ತದೆ, critique operations ಎಣಿಸುತ್ತದೆ, ಎಲ್ಲಾ agents ಒಪ್ಪಿದಾಗ ನಿಲ್ಲುತ್ತದೆ ಮತ್ತು ಅಂತಿಮ ಸ್ಥಿತಿಯ plurality ಮರಳಿಸುತ್ತದೆ (ಸಮ ಮತದಲ್ಲಿ ಯಾವುದೂ ಇಲ್ಲ, ಆದ್ದರಿಂದ ಸ್ಥಗಿತ ಅಥವಾ ಆಂದೋಲನ ಚರ್ಚೆಗೆ ಮನ್ನಣೆ ಇಲ್ಲ).",
    "code": "@dataclass\nclass DebateResult:\n    protocol: str\n    final_answer: object\n    converged: bool\n    rounds: int\n    critique_ops: int\n    history: list = field(default_factory=list)\n\n\ndef neighbours(topology, n, i, hub=0):\n    if topology == \"full\":\n        return [j for j in range(n) if j != i]\n    if topology == \"hub\":\n        return [j for j in range(n) if j != i] if i == hub else [hub]\n    if topology == \"ring\":\n        return [(i - 1) % n, (i + 1) % n] if n > 2 else [j for j in range(n) if j != i]\n    raise ValueError(topology)\n\n\ndef debate(agents, topology=\"full\", max_rounds=4, snapshot=True, order=None, hub=0):\n    \"\"\"Each round every agent reads its neighbours' answers and adopts the neighbour plurality if it has strict majority support.\n    snapshot=True: all agents read the round-start answers (compute, then commit). snapshot=False: agents update in place, one after another.\"\"\"\n    n = len(agents)\n    answers = [a.answer for a in agents]\n    history, ops, rounds = [list(answers)], 0, 0\n    idx = list(order) if order else list(range(n))\n    for _ in range(max_rounds):\n        rounds += 1\n        read = list(answers) if snapshot else answers\n        new = list(answers)\n        for i in idx:\n            nb = neighbours(topology, n, i, hub)\n            ops += len(nb)\n            seen = [read[j] for j in nb]\n            top = plurality(seen)\n            if top and sum(1 for x in seen if x == top) / len(seen) > 0.5 and top != (new[i] if not snapshot else answers[i]):\n                if snapshot:\n                    new[i] = top\n                else:\n                    answers[i] = top\n        if snapshot:\n            answers = new\n        history.append(list(answers))\n        if len(set(answers)) == 1:\n            break\n    final = plurality(answers)  # None when the final state is a tie, so a stuck or oscillating debate is not credited by tie-break luck\n    return DebateResult(topology, final, len(set(answers)) == 1, rounds, ops, history)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "deb_2.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() counts operations, runs the three-agent example under each topology, compares snapshot with in-place updates over all agent orders on 300 random configurations, runs 10,000 simulated questions per topology, histograms rounds to agreement and stages a wrong hub.",
    "descKn": "main() operations ಎಣಿಸುತ್ತದೆ, ಮೂರು-agent ಉದಾಹರಣೆಯನ್ನು ಪ್ರತಿ topology ಯಲ್ಲಿ ಚಲಾಯಿಸುತ್ತದೆ, 300 ಯಾದೃಚ್ಛಿಕ ಸಂರಚನೆಗಳಲ್ಲಿ ಎಲ್ಲಾ agent ಕ್ರಮಗಳ ಮೇಲೆ snapshot ಅನ್ನು in-place ನವೀಕರಣದೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ, ಪ್ರತಿ topology ಗೆ 10,000 ಅನುಕರಿಸಿದ ಪ್ರಶ್ನೆಗಳನ್ನು ಚಲಾಯಿಸುತ್ತದೆ, ಒಮ್ಮತಕ್ಕೆ ಸುತ್ತುಗಳ ಹಿಸ್ಟೋಗ್ರಾಮ್ ಮಾಡುತ್ತದೆ ಮತ್ತು ತಪ್ಪು hub ಅನ್ನು ವೇದಿಕೆಗೆ ತರುತ್ತದೆ.",
    "code": "def critique_ops_per_round(topology, n):\n    return sum(len(neighbours(topology, n, i)) for i in range(n))\n\n\ndef section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Critique operations per round (counted from the neighbour lists)\")\n    print(f\"{'agents':>7} {'full mesh':>10} {'hub-and-spoke':>14} {'ring':>6}   (n*(n-1), 2*(n-1) and 2n)\")\n    for n in (3, 5, 8, 12, 20):\n        print(f\"{n:>7} {critique_ops_per_round('full', n):>10} {critique_ops_per_round('hub', n):>14} {critique_ops_per_round('ring', n):>6}\")\n    print(\"full mesh grows with the square of the group size, hub-and-spoke and ring grow linearly; each operation stands for one agent reading one peer's answer, so it is a proxy for tokens\")\n\n    section(\"2. The lesson's three-agent example under each topology\")\n    ags = [Debater(\"A1\", \"C\", 0.8), Debater(\"A2\", \"W\", 0.6), Debater(\"A3\", \"C\", 0.7)]\n    for topo in (\"full\", \"hub\", \"ring\"):\n        r = debate([Debater(a.name, a.answer, a.confidence) for a in ags], topo)\n        print(f\"{topo:5} final={r.final_answer} converged={r.converged} rounds={r.rounds} ops={r.critique_ops} history={r.history}\")\n\n    section(\"3. Genuinely measuring: does in-place updating make the result depend on agent order (300 random 5-agent ring configurations, seed 5)\")\n    import itertools\n    rng = random.Random(5)\n    dependent = {True: 0, False: 0}\n    example = None\n    for _ in range(300):\n        cfg = [rng.choice(\"CCWX\") for _ in range(5)]\n        for snapshot in (True, False):\n            finals = set()\n            for perm in itertools.permutations(range(5)):\n                ags = [Debater(f\"A{k}\", a, 0.8) for k, a in enumerate(cfg)]\n                r = debate(ags, \"ring\", 4, snapshot, perm)\n                finals.add((tuple(r.history[-1]), r.converged))\n            if len(finals) > 1:\n                dependent[snapshot] += 1\n                if not snapshot and example is None:\n                    example = (cfg, sorted(finals)[:3])\n    print(f\"configurations whose final state depended on the visiting order: with round-start snapshot {dependent[True]} of 300, with in-place updates {dependent[False]} of 300\")\n    if example:\n        print(\"one in-place example: start\", example[0], \"-> different final states\", example[1])\n    print(\"a round-start snapshot (compute everything, then commit) made the outcome independent of visiting order in every configuration, and in-place updating did not; for debates that should be reproducible, read from the snapshot\")\n\n    section(\"4. Genuinely measuring: the hub is a single point of failure (5 agents, 25 percent wrong each, seed 7, 10000 questions)\")\n    rng = random.Random(7)\n    N = 10000\n    print(f\"{'topology':>9} {'final correct':>14} {'converged':>10} {'rounds (mean)':>14} {'ops (mean)':>11}\")\n    for topo in (\"full\", \"hub\", \"ring\"):\n        correct = conv = rounds = ops = 0\n        for _ in range(N):\n            ags = initial_answers(rng, 5, 0.25)\n            r = debate(ags, topo)\n            correct += r.final_answer == \"C\"\n            conv += r.converged\n            rounds += r.rounds\n            ops += r.critique_ops\n        print(f\"{topo:>9} {correct / N:>14.1%} {conv / N:>10.1%} {rounds / N:>14.2f} {ops / N:>11.1f}\")\n    rng = random.Random(8)\n    hub_wrong = hub_wrong_final_wrong = 0\n    for _ in range(N):\n        ags = initial_answers(rng, 5, 0.25)\n        if ags[0].answer != \"C\":\n            hub_wrong += 1\n            hub_wrong_final_wrong += debate(ags, \"hub\").final_answer != \"C\"\n    print(f\"when the hub's own first answer was wrong ({hub_wrong} questions), the hub topology ended wrong on {hub_wrong_final_wrong / hub_wrong:.1%} of them\")\n    print(\"hub-and-spoke used about half the critique operations of the full mesh (12.5 against 25.3) and ended correct 92.8 percent of the time against 91.4 for the full mesh and 92.2 for the ring (a debate that ends in a tie counts as no answer, so it is not credited), but reached agreement less often (81.4 against 91.1 percent for the full mesh); when the hub started wrong, the group ended wrong on 25.4 percent of those questions\")\n\n    section(\"5. Genuinely measuring: rounds needed and early stopping (full mesh, 5 agents, seed 9)\")\n    rng = random.Random(9)\n    hist = Counter()\n    for _ in range(N):\n        r = debate(initial_answers(rng, 5, 0.25), \"full\", 6)\n        hist[(r.rounds, r.converged)] += 1\n    for k in sorted(hist):\n        print(f\"stopped after {k[0]} round(s), converged={k[1]!s:5}: {hist[k] / N:>6.1%}\")\n    print(\"every debate either agreed after the first round (91.3 percent) or never agreed within the limit (8.7 percent), with nothing in between, because a stuck split such as 2-2-1 does not change under this rule; stopping on agreement saves later rounds and the round limit is what ends the stuck ones\")\n\n    section(\"6. Genuinely checking: a hub that disagrees with a clear majority\")\n    ags = [Debater(\"Hub\", \"W\", 0.9)] + [Debater(f\"A{i}\", \"C\", 0.6) for i in range(2, 6)]\n    for topo in (\"full\", \"hub\"):\n        r = debate([Debater(a.name, a.answer, a.confidence) for a in ags], topo)\n        print(f\"{topo:5} final={r.final_answer} converged={r.converged} rounds={r.rounds} history={r.history}\")\n    print(\"in the full mesh the hub is outvoted in one round; in the hub topology the spokes copy the hub, then the hub copies the spokes, and the group swaps between two states every round without converging; the reported final answer was right only because 4 rounds is an even number of swaps\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Critique operations per round (counted from the neighbour lists) ---\n agents  full mesh  hub-and-spoke   ring   (n*(n-1), 2*(n-1) and 2n)\n      3          6              4      6\n      5         20              8     10\n      8         56             14     16\n     12        132             22     24\n     20        380             38     40\nfull mesh grows with the square of the group size, hub-and-spoke and ring grow linearly; each operation stands for one agent reading one peer's answer, so it is a proxy for tokens\n\n--- 2. The lesson's three-agent example under each topology ---\nfull  final=C converged=True rounds=1 ops=6 history=[['C', 'W', 'C'], ['C', 'C', 'C']]\nhub   final=C converged=True rounds=1 ops=4 history=[['C', 'W', 'C'], ['C', 'C', 'C']]\nring  final=C converged=True rounds=1 ops=6 history=[['C', 'W', 'C'], ['C', 'C', 'C']]\n\n--- 3. Genuinely measuring: does in-place updating make the result depend on agent order (300 random 5-agent ring configurations, seed 5) ---\nconfigurations whose final state depended on the visiting order: with round-start snapshot 0 of 300, with in-place updates 78 of 300\none in-place example: start ['C', 'X', 'W', 'C', 'X'] -> different final states [(('C', 'X', 'W', 'C', 'C'), False), (('X', 'X', 'W', 'C', 'X'), False)]\na round-start snapshot (compute everything, then commit) made the outcome independent of visiting order in every configuration, and in-place updating did not; for debates that should be reproducible, read from the snapshot\n\n--- 4. Genuinely measuring: the hub is a single point of failure (5 agents, 25 percent wrong each, seed 7, 10000 questions) ---\n topology  final correct  converged  rounds (mean)  ops (mean)\n     full          91.4%      91.1%           1.27        25.3\n      hub          92.8%      81.4%           1.56        12.5\n     ring          92.2%      76.7%           1.74        17.4\nwhen the hub's own first answer was wrong (2477 questions), the hub topology ended wrong on 25.4% of them\nhub-and-spoke used about half the critique operations of the full mesh (12.5 against 25.3) and ended correct 92.8 percent of the time against 91.4 for the full mesh and 92.2 for the ring (a debate that ends in a tie counts as no answer, so it is not credited), but reached agreement less often (81.4 against 91.1 percent for the full mesh); when the hub started wrong, the group ended wrong on 25.4 percent of those questions\n\n--- 5. Genuinely measuring: rounds needed and early stopping (full mesh, 5 agents, seed 9) ---\nstopped after 1 round(s), converged=True :  91.3%\nstopped after 6 round(s), converged=False:   8.7%\nevery debate either agreed after the first round (91.3 percent) or never agreed within the limit (8.7 percent), with nothing in between, because a stuck split such as 2-2-1 does not change under this rule; stopping on agreement saves later rounds and the round limit is what ends the stuck ones\n\n--- 6. Genuinely checking: a hub that disagrees with a clear majority ---\nfull  final=C converged=True rounds=1 history=[['W', 'C', 'C', 'C', 'C'], ['C', 'C', 'C', 'C', 'C']]\nhub   final=C converged=False rounds=4 history=[['W', 'C', 'C', 'C', 'C'], ['C', 'W', 'W', 'W', 'W'], ['W', 'C', 'C', 'C', 'C'], ['C', 'W', 'W', 'W', 'W'], ['W', 'C', 'C', 'C', 'C']]\nin the full mesh the hub is outvoted in one round; in the hub topology the spokes copy the hub, then the hub copies the spokes, and the group swaps between two states every round without converging; the reported final answer was right only because 4 rounds is an even number of swaps"
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
    "headingEn": "Genuinely Found: Cost Is Quadratic in a Full Mesh, and Visiting Order Mattered Without a Snapshot",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Full mesh ನಲ್ಲಿ ವೆಚ್ಚ ವರ್ಗೀಯ, ಮತ್ತು snapshot ಇಲ್ಲದೆ ಭೇಟಿ ಕ್ರಮ ಮುಖ್ಯವಾಯಿತು",
    "bodyEn": "Section 1 (counted from the neighbour lists): at 5, 12 and 20 agents a full mesh needed 20, 132 and 380 reads per round, hub-and-spoke 8, 22 and 38, and a ring 10, 24 and 40. Section 3 (300 random 5-agent ring configurations, all 120 visiting orders each): with a round-start snapshot the final state never depended on the order (0 of 300); with in-place updates it did in 78 of 300 configurations, for example from [C, X, W, C, X] some orders ended [C, X, W, C, C] and others [X, X, W, C, X]. A debate that should be reproducible has to read from a snapshot and commit after computing.",
    "bodyKn": "ವಿಭಾಗ 1 (neighbour ಪಟ್ಟಿಗಳಿಂದ ಎಣಿಸಿದ್ದು): 5, 12 ಮತ್ತು 20 agents ನಲ್ಲಿ full mesh ಗೆ ಪ್ರತಿ ಸುತ್ತಿಗೆ 20, 132 ಮತ್ತು 380 ಓದುವಿಕೆ ಬೇಕಾಯಿತು, hub-and-spoke 8, 22 ಮತ್ತು 38, ring 10, 24 ಮತ್ತು 40. ವಿಭಾಗ 3 (300 ಯಾದೃಚ್ಛಿಕ 5-agent ring ಸಂರಚನೆಗಳು, ತಲಾ ಎಲ್ಲಾ 120 ಭೇಟಿ ಕ್ರಮಗಳು): ಸುತ್ತಿನ-ಆರಂಭದ snapshot ನೊಂದಿಗೆ ಅಂತಿಮ ಸ್ಥಿತಿ ಕ್ರಮವನ್ನು ಎಂದೂ ಅವಲಂಬಿಸಲಿಲ್ಲ (300 ರಲ್ಲಿ 0); in-place ನವೀಕರಣಗಳೊಂದಿಗೆ 300 ಸಂರಚನೆಗಳಲ್ಲಿ 78 ರಲ್ಲಿ ಅವಲಂಬಿಸಿತು, ಉದಾ. [C, X, W, C, X] ನಿಂದ ಕೆಲವು ಕ್ರಮಗಳು [C, X, W, C, C] ಮತ್ತು ಇತರ [X, X, W, C, X] ನಲ್ಲಿ ಮುಗಿದವು. ಪುನರುತ್ಪಾದಿಸಬಹುದಾದ ಚರ್ಚೆ snapshot ನಿಂದ ಓದಿ ಲೆಕ್ಕಿಸಿದ ನಂತರ commit ಮಾಡಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Sparse Topologies Halve Cost but Add Failure Modes",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Sparse topologies ವೆಚ್ಚ ಅರ್ಧಗೊಳಿಸುತ್ತವೆ ಆದರೆ ವೈಫಲ್ಯ ವಿಧಾನಗಳನ್ನು ಸೇರಿಸುತ್ತವೆ",
    "bodyEn": "Section 4 (5 agents, 25 percent wrong each, seed 7, 10,000 questions; a debate that ends in a tie counts as no answer): the full mesh was right 91.4 percent of the time, converged on 91.1 percent, took 1.27 rounds and 25.3 reads; hub-and-spoke 92.8 percent, 81.4 percent converged, 1.56 rounds and 12.5 reads; ring 92.2 percent, 76.7 percent converged, 1.74 rounds and 17.4 reads. When the hub's own first answer was wrong (2,477 questions) the hub topology ended wrong on 25.4 percent of them. Section 5: 91.3 percent of full-mesh debates agreed after one round and the other 8.7 percent never agreed within 6 rounds, with nothing in between. Section 6: with the hub wrong and four spokes right, the full mesh fixed it in one round, while the hub topology swapped between two states every round and never converged; its reported answer was right only because 4 rounds is an even number of swaps.",
    "bodyKn": "ವಿಭಾಗ 4 (5 agents, ತಲಾ 25 ಶೇಕಡಾ ತಪ್ಪು, seed 7, 10,000 ಪ್ರಶ್ನೆಗಳು; ಸಮ ಮತದಲ್ಲಿ ಮುಗಿಯುವ ಚರ್ಚೆ ಉತ್ತರವಿಲ್ಲ ಎಂದು ಎಣಿಕೆ): full mesh 91.4 ಶೇಕಡಾ ಸರಿ, 91.1 ಶೇಕಡಾ ಒಮ್ಮತ, 1.27 ಸುತ್ತು ಮತ್ತು 25.3 ಓದುವಿಕೆ; hub-and-spoke 92.8 ಶೇಕಡಾ, 81.4 ಶೇಕಡಾ ಒಮ್ಮತ, 1.56 ಸುತ್ತು ಮತ್ತು 12.5 ಓದುವಿಕೆ; ring 92.2 ಶೇಕಡಾ, 76.7 ಶೇಕಡಾ ಒಮ್ಮತ, 1.74 ಸುತ್ತು ಮತ್ತು 17.4 ಓದುವಿಕೆ. hub ನ ಮೊದಲ ಉತ್ತರ ತಪ್ಪಾಗಿದ್ದಾಗ (2,477 ಪ್ರಶ್ನೆಗಳು) hub topology ಅವುಗಳಲ್ಲಿ 25.4 ಶೇಕಡಾದಲ್ಲಿ ತಪ್ಪಾಗಿ ಮುಗಿಯಿತು. ವಿಭಾಗ 5: full-mesh ಚರ್ಚೆಗಳ 91.3 ಶೇಕಡಾ ಒಂದು ಸುತ್ತಿನ ನಂತರ ಒಪ್ಪಿದವು ಮತ್ತು ಉಳಿದ 8.7 ಶೇಕಡಾ 6 ಸುತ್ತುಗಳಲ್ಲಿ ಎಂದೂ ಒಪ್ಪಲಿಲ್ಲ, ನಡುವೆ ಏನೂ ಇಲ್ಲ. ವಿಭಾಗ 6: hub ತಪ್ಪು ಮತ್ತು ನಾಲ್ಕು spokes ಸರಿ ಇದ್ದಾಗ full mesh ಒಂದು ಸುತ್ತಿನಲ್ಲಿ ಸರಿಪಡಿಸಿತು, hub topology ಪ್ರತಿ ಸುತ್ತು ಎರಡು ಸ್ಥಿತಿಗಳ ನಡುವೆ ಬದಲಾಗಿ ಎಂದೂ ಒಮ್ಮತಕ್ಕೆ ಬರಲಿಲ್ಲ; ಅದರ ವರದಿ ಉತ್ತರ ಸರಿ ಆದದ್ದು 4 ಸುತ್ತುಗಳು ಸಮ ಸಂಖ್ಯೆಯ ಬದಲಾವಣೆಗಳಾದ್ದರಿಂದ ಮಾತ್ರ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "How agents are connected decides what a debate costs and how it fails. A hub saves reads but can oscillate or amplify its own mistake; a full mesh is robust but pays quadratically; in-place updates make results depend on scheduling.",
    "bodyKn": "Agents ಹೇಗೆ ಜೋಡಿಸಲ್ಪಟ್ಟಿವೆ ಎಂಬುದು ಚರ್ಚೆಗೆ ಏನು ವೆಚ್ಚ ಮತ್ತು ಅದು ಹೇಗೆ ವಿಫಲವಾಗುತ್ತದೆ ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ. Hub ಓದುವಿಕೆ ಉಳಿಸುತ್ತದೆ ಆದರೆ ಆಂದೋಲನಗೊಳ್ಳಬಹುದು ಅಥವಾ ತನ್ನ ತಪ್ಪನ್ನು ವರ್ಧಿಸಬಹುದು; full mesh ದೃಢ ಆದರೆ ವರ್ಗೀಯವಾಗಿ ತೆರುತ್ತದೆ; in-place ನವೀಕರಣಗಳು ಫಲಿತಾಂಶವನ್ನು ವೇಳಾಪಟ್ಟಿಯ ಮೇಲೆ ಅವಲಂಬಿತಗೊಳಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a sparse topology is just a cheaper full mesh.\" The hub topology halved the reads and also oscillated on a case the full mesh fixed in one round.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"sparse topology ಕೇವಲ ಅಗ್ಗದ full mesh.\" Hub topology ಓದುವಿಕೆಯನ್ನು ಅರ್ಧಗೊಳಿಸಿತು ಮತ್ತು full mesh ಒಂದು ಸುತ್ತಿನಲ್ಲಿ ಸರಿಪಡಿಸಿದ ಪ್ರಕರಣದಲ್ಲಿ ಆಂದೋಲನಗೊಂಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Topology: who reads whom. Critique operation: one agent reading one peer. Snapshot: round-start answers every agent reads. Commit: applying all updates at once. Oscillation: states repeating without convergence. Hub: the agent every spoke reads.",
    "bodyKn": "Topology: ಯಾರು ಯಾರನ್ನು ಓದುತ್ತಾರೆ. Critique operation: ಒಬ್ಬ agent ಒಬ್ಬ ಸಹವರ್ತಿಯನ್ನು ಓದುವುದು. Snapshot: ಪ್ರತಿ agent ಓದುವ ಸುತ್ತಿನ-ಆರಂಭದ ಉತ್ತರಗಳು. Commit: ಎಲ್ಲಾ ನವೀಕರಣಗಳನ್ನು ಒಮ್ಮೆಲೇ ಅನ್ವಯಿಸುವುದು. Oscillation: ಒಮ್ಮತವಿಲ್ಲದೆ ಸ್ಥಿತಿಗಳು ಪುನರಾವರ್ತನೆ. Hub: ಪ್ರತಿ spoke ಓದುವ agent."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Full mesh grows with n times (n - 1) reads; hub-and-spoke and ring grow linearly. 2) Snapshot rounds were order-independent in 300 of 300 configurations; in-place updates were order-dependent in 78. 3) Hub-and-spoke used about half the reads of the full mesh but converged less often (81.4 against 91.1 percent). 4) 91.3 percent of full-mesh debates agreed after one round; 8.7 percent never did. 5) A wrong hub made the group oscillate. 6) A tie must not be credited as an answer.",
    "bodyKn": "1) Full mesh n ಗುಣಿಸು (n - 1) ಓದುವಿಕೆಯೊಂದಿಗೆ ಬೆಳೆಯುತ್ತದೆ; hub-and-spoke ಮತ್ತು ring ರೇಖೀಯವಾಗಿ. 2) Snapshot ಸುತ್ತುಗಳು 300 ರಲ್ಲಿ 300 ಸಂರಚನೆಗಳಲ್ಲಿ ಕ್ರಮ-ಸ್ವತಂತ್ರ; in-place ನವೀಕರಣಗಳು 78 ರಲ್ಲಿ ಕ್ರಮ-ಅವಲಂಬಿತ. 3) Hub-and-spoke full mesh ನ ಸುಮಾರು ಅರ್ಧ ಓದುವಿಕೆ ಬಳಸಿ ಕಡಿಮೆ ಬಾರಿ ಒಮ್ಮತಕ್ಕೆ ಬಂತು (81.4 ವಿರುದ್ಧ 91.1 ಶೇಕಡಾ). 4) Full-mesh ಚರ್ಚೆಗಳ 91.3 ಶೇಕಡಾ ಒಂದು ಸುತ್ತಿನ ನಂತರ ಒಪ್ಪಿದವು; 8.7 ಶೇಕಡಾ ಎಂದೂ ಇಲ್ಲ. 5) ತಪ್ಪು hub ಗುಂಪನ್ನು ಆಂದೋಲನಗೊಳಿಸಿತು. 6) ಸಮ ಮತಕ್ಕೆ ಉತ್ತರ ಎಂದು ಮನ್ನಣೆ ನೀಡಬಾರದು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many reads per round does a full mesh need for 20 agents?",
      "qKn": "20 agents ಗೆ full mesh ಗೆ ಪ್ರತಿ ಸುತ್ತಿಗೆ ಎಷ್ಟು ಓದುವಿಕೆ ಬೇಕು?",
      "opts": [
       "40",
       "38",
       "380",
       "20"
      ],
      "optsKn": [
       "40",
       "38",
       "380",
       "20"
      ],
      "correct": 2
     },
     {
      "q": "What did a round-start snapshot guarantee in the 300 configurations?",
      "qKn": "300 ಸಂರಚನೆಗಳಲ್ಲಿ ಸುತ್ತಿನ-ಆರಂಭದ snapshot ಏನು ಖಾತರಿಪಡಿಸಿತು?",
      "opts": [
       "Higher accuracy",
       "The final state never depended on the order agents were visited",
       "Fewer reads",
       "Faster rounds"
      ],
      "optsKn": [
       "ಹೆಚ್ಚು ನಿಖರತೆ",
       "ಅಂತಿಮ ಸ್ಥಿತಿ agents ಭೇಟಿ ಕ್ರಮವನ್ನು ಎಂದೂ ಅವಲಂಬಿಸಲಿಲ್ಲ",
       "ಕಡಿಮೆ ಓದುವಿಕೆ",
       "ವೇಗದ ಸುತ್ತುಗಳು"
      ],
      "correct": 1
     },
     {
      "q": "What happened in the hub topology when the hub was wrong and four spokes right?",
      "qKn": "hub ತಪ್ಪು ಮತ್ತು ನಾಲ್ಕು spokes ಸರಿ ಇದ್ದಾಗ hub topology ಯಲ್ಲಿ ಏನಾಯಿತು?",
      "opts": [
       "It converged to the right answer",
       "It swapped between two states every round and never converged",
       "It converged to the wrong answer",
       "It crashed"
      ],
      "optsKn": [
       "ಸರಿಯಾದ ಉತ್ತರಕ್ಕೆ ಒಮ್ಮತ",
       "ಪ್ರತಿ ಸುತ್ತು ಎರಡು ಸ್ಥಿತಿಗಳ ನಡುವೆ ಬದಲಾಗಿ ಎಂದೂ ಒಮ್ಮತಕ್ಕೆ ಬರಲಿಲ್ಲ",
       "ತಪ್ಪು ಉತ್ತರಕ್ಕೆ ಒಮ್ಮತ",
       "ಕುಸಿಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why does the runner return no answer for a tied final state?",
      "qKn": "ಸಮ ಅಂತಿಮ ಸ್ಥಿತಿಗೆ runner ಉತ್ತರವಿಲ್ಲ ಏಕೆ ಮರಳಿಸುತ್ತದೆ?",
      "opts": [
       "To save memory",
       "So a stuck or oscillating debate is not credited by tie-break luck",
       "Ties are impossible",
       "To speed up"
      ],
      "optsKn": [
       "ಮೆಮೊರಿ ಉಳಿಸಲು",
       "ಸ್ಥಗಿತ ಅಥವಾ ಆಂದೋಲನ ಚರ್ಚೆಗೆ ಸಮ-ಮುರಿತದ ಅದೃಷ್ಟದಿಂದ ಮನ್ನಣೆ ಸಿಗದಿರಲು",
       "ಸಮ ಮತಗಳು ಅಸಾಧ್ಯ",
       "ವೇಗಗೊಳಿಸಲು"
      ],
      "correct": 1
     },
     {
      "q": "How did the first version of this lab's tie handling mislead us?",
      "qKn": "ಈ ಲ್ಯಾಬ್‌ನ ಮೊದಲ ಆವೃತ್ತಿಯ ಸಮ ಮತ ನಿರ್ವಹಣೆ ನಮ್ಮನ್ನು ಹೇಗೆ ದಾರಿತಪ್ಪಿಸಿತು?",
      "opts": [
       "It did not",
       "Picking the first of tied answers gave the full mesh 94.5 percent instead of 91.4 and made stuck debates look correct",
       "It raised the cost",
       "It changed the topology"
      ],
      "optsKn": [
       "ಅದು ಮಾಡಲಿಲ್ಲ",
       "ಸಮ ಉತ್ತರಗಳಲ್ಲಿ ಮೊದಲನೆಯದನ್ನು ಆರಿಸಿದ್ದು ಸ್ಥಗಿತ ಚರ್ಚೆಯನ್ನು ಸರಿಯಂತೆ ಕಾಣಿಸಿತು",
       "ವೆಚ್ಚ ಹೆಚ್ಚಿಸಿತು",
       "topology ಬದಲಿಸಿತು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
