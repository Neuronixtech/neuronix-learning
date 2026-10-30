module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321556",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Multi-Agent Debate: Voting, Topologies and Evaluation (Part 1 of 3) — Independence, Voting and the Update Rule",
 "titleKn": "ಬಹು-Agent ಚರ್ಚೆ: ಮತದಾನ, Topologies ಮತ್ತು ಮೌಲ್ಯಮಾಪನ (ಭಾಗ 1 / 3) — ಸ್ವಾತಂತ್ರ್ಯ, ಮತದಾನ ಮತ್ತು Update ನಿಯಮ",
 "desc": "Build scripted debaters with assumed error rates, then measure voting under independent and shared-cause errors, compare a threshold debate rule with the initial vote, test confidence weighting and look at ties and swaps.",
 "descKn": "ಊಹಿಸಿದ ದೋಷ ದರಗಳ ಸ್ಕ್ರಿಪ್ಟ್ debaters ನಿರ್ಮಿಸಿ, ನಂತರ ಸ್ವತಂತ್ರ ಮತ್ತು ಹಂಚಿದ-ಕಾರಣ ದೋಷಗಳ ಅಡಿ ಮತದಾನ ಅಳೆಯಿರಿ, ಮಿತಿ ಚರ್ಚೆ ನಿಯಮವನ್ನು ಆರಂಭಿಕ ಮತದೊಂದಿಗೆ ಹೋಲಿಸಿ, ವಿಶ್ವಾಸ ತೂಕ ಪರೀಕ್ಷಿಸಿ ಮತ್ತು ಸಮ ಮತ ಹಾಗೂ ಬದಲಾವಣೆಗಳನ್ನು ನೋಡಿ.",
 "objectives": [
  "Explain why independence of errors matters.",
  "Simulate voting with an assumed error rate.",
  "Separate agreement from accuracy.",
  "Judge when confidence weighting helps.",
  "Define behaviour for ties."
 ],
 "objectivesKn": [
  "ದೋಷಗಳ ಸ್ವಾತಂತ್ರ್ಯ ಏಕೆ ಮುಖ್ಯ ಎಂದು ವಿವರಿಸಿ.",
  "ಊಹಿಸಿದ ದೋಷ ದರದೊಂದಿಗೆ ಮತದಾನ ಅನುಕರಿಸಿ.",
  "ಒಪ್ಪಿಗೆ ಮತ್ತು ನಿಖರತೆ ಬೇರ್ಪಡಿಸಿ.",
  "ವಿಶ್ವಾಸ ತೂಕ ಯಾವಾಗ ಸಹಾಯ ಮಾಡುತ್ತದೆ ಎಂದು ತೀರ್ಮಾನಿಸಿ.",
  "ಸಮ ಮತಗಳಿಗೆ ವರ್ತನೆ ವ್ಯಾಖ್ಯಾನಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Multi-Agent Debate: Voting, Topologies and Evaluation (Part 1 of 3)",
    "textKn": "ಬಹು-Agent ಚರ್ಚೆ: ಮತದಾನ, Topologies ಮತ್ತು ಮೌಲ್ಯಮಾಪನ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: independent proposals, voting, a simple update rule and correlated errors. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind multi-agent debate (Society-of-Minds style), not the real software, and every agent is scripted or simulated with an assumed error rate, so no language model and no real debate quality is measured, so no real LLM behaviour is measured. All three pasted parts of this lesson were cut off by a size limit before their programs finished, so the debaters, runners and harness are rebuilt from their descriptions. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಸ್ವತಂತ್ರ ಪ್ರಸ್ತಾಪಗಳು, ಮತದಾನ, ಸರಳ update ನಿಯಮ ಮತ್ತು ಸಂಬಂಧಿತ ದೋಷಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಬಹು-agent ಚರ್ಚೆ (Society-of-Minds ಶೈಲಿ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪ್ರತಿ agent ಸ್ಕ್ರಿಪ್ಟ್ ಅಥವಾ ಊಹಿಸಿದ ದೋಷ ದರದೊಂದಿಗೆ ಅನುಕರಿಸಲಾಗಿದೆ, ಆದ್ದರಿಂದ ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಮತ್ತು ನಿಜ ಚರ್ಚೆ ಗುಣಮಟ್ಟ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಈ ಲೆಸನ್‌ನ ಮೂರೂ ಅಂಟಿಸಿದ ಭಾಗಗಳು ತಮ್ಮ ಪ್ರೋಗ್ರಾಂ ಮುಗಿಯುವ ಮುನ್ನ ಗಾತ್ರ ಮಿತಿಯಿಂದ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿದ್ದವು, ಆದ್ದರಿಂದ debaters, runners ಮತ್ತು harness ಅವುಗಳ ವಿವರಣೆಗಳಿಂದ ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Why a Group Might Beat One Agent",
    "textKn": "ಗುಂಪು ಒಬ್ಬ agent ಅನ್ನು ಏಕೆ ಮೀರಬಹುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Independence Comes First",
    "headingKn": "ಸ್ವಾತಂತ್ರ್ಯ ಮೊದಲು",
    "bodyEn": "In a Society-of-Minds style protocol, N agents each propose an answer independently, then spend R rounds reading peers and revising. Aggregation can help only if the agents' mistakes are at least partly independent: a vote among agents that fail on the same questions is no better than one of them. This part builds scripted debaters with an assumed error rate and an optional shared trap answer, then measures voting, a simple threshold update rule, confidence weighting and ties.",
    "bodyKn": "Society-of-Minds ಶೈಲಿಯ ಪ್ರೋಟೋಕಾಲ್‌ನಲ್ಲಿ N agents ತಲಾ ಸ್ವತಂತ್ರವಾಗಿ ಉತ್ತರ ಪ್ರಸ್ತಾಪಿಸಿ ನಂತರ R ಸುತ್ತುಗಳನ್ನು ಸಹವರ್ತಿಗಳನ್ನು ಓದಲು ಮತ್ತು ಪರಿಷ್ಕರಿಸಲು ಕಳೆಯುತ್ತವೆ. Agents ನ ತಪ್ಪುಗಳು ಕನಿಷ್ಠ ಭಾಗಶಃ ಸ್ವತಂತ್ರವಾಗಿದ್ದರೆ ಮಾತ್ರ ಒಟ್ಟುಗೂಡಿಸುವಿಕೆ ಸಹಾಯ ಮಾಡಬಲ್ಲದು: ಒಂದೇ ಪ್ರಶ್ನೆಗಳಲ್ಲಿ ವಿಫಲವಾಗುವ agents ನಡುವಿನ ಮತ ಅವುಗಳಲ್ಲಿ ಒಂದಕ್ಕಿಂತ ಉತ್ತಮವಲ್ಲ. ಈ ಭಾಗ ಊಹಿಸಿದ ದೋಷ ದರ ಮತ್ತು ಐಚ್ಛಿಕ ಹಂಚಿದ ಬಲೆ ಉತ್ತರದ ಸ್ಕ್ರಿಪ್ಟ್ debaters ನಿರ್ಮಿಸಿ ಮತದಾನ, ಸರಳ ಮಿತಿ update ನಿಯಮ, ವಿಶ್ವಾಸ ತೂಕ ಮತ್ತು ಸಮ ಮತಗಳನ್ನು ಅಳೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Proposals, Then Critique Rounds",
    "headingKn": "ಪ್ರಸ್ತಾಪಗಳು, ನಂತರ ವಿಮರ್ಶೆ ಸುತ್ತುಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Independent proposals, then critique</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">agent A</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">answer + confidence</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">agent B</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">answer + confidence</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">agent C</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">answer + confidence</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">rounds of critique</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">read peers, maybe change</text><path d=\"M50,64 L120,110 M150,64 V110 M250,64 L180,110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">errors must be independent for the group to help</text></svg>",
    "captionEn": "Independent errors are what the group can average away.",
    "captionKn": "ಸ್ವತಂತ್ರ ದೋಷಗಳನ್ನು ಗುಂಪು ಸರಾಸರಿ ಮಾಡಿ ತೆಗೆಯಬಲ್ಲದು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Parameters of the protocol",
    "headingKn": "ಪ್ರೋಟೋಕಾಲ್‌ನ ಮಾನದಂಡಗಳು",
    "headers": [
     "Symbol",
     "Meaning",
     "In the lab"
    ],
    "rows": [
     [
      "N",
      "number of agents",
      "1 to 9"
     ],
     [
      "R",
      "critique rounds",
      "up to 3 or 4, stopping on agreement"
     ],
     [
      "update rule",
      "when an agent switches",
      "adopt the peer plurality if it has strict majority support"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Debaters",
    "textKn": "Debaters ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "deb_1.py",
    "headingEn": "Question, Debater, initial_answers, plurality and the update rule",
    "headingKn": "Question, Debater, initial_answers, plurality ಮತ್ತು update ನಿಯಮ",
    "descEn": "Question is a frozen dataclass. initial_answers draws each agent's answer independently with an error rate, optionally sending wrong agents to one shared trap answer. plurality returns None on a tie. update_round is synchronous: every agent reads the round-start answers of its peers and adopts their plurality if it has strict majority support.",
    "descKn": "Question frozen dataclass. initial_answers ಪ್ರತಿ agent ನ ಉತ್ತರವನ್ನು ದೋಷ ದರದೊಂದಿಗೆ ಸ್ವತಂತ್ರವಾಗಿ ತೆಗೆಯುತ್ತದೆ, ಐಚ್ಛಿಕವಾಗಿ ತಪ್ಪು agents ಅನ್ನು ಒಂದು ಹಂಚಿದ ಬಲೆ ಉತ್ತರಕ್ಕೆ ಕಳುಹಿಸುತ್ತದೆ. plurality ಸಮ ಮತದಲ್ಲಿ None ಮರಳಿಸುತ್ತದೆ. update_round ಸಿಂಕ್ರೊನಸ್: ಪ್ರತಿ agent ಸಹವರ್ತಿಗಳ ಸುತ್ತಿನ-ಆರಂಭದ ಉತ್ತರಗಳನ್ನು ಓದಿ ಅವುಗಳ plurality ಗೆ ಕಟ್ಟುನಿಟ್ಟಿನ ಬಹುಮತ ಬೆಂಬಲ ಇದ್ದರೆ ಅದನ್ನು ಸ್ವೀಕರಿಸುತ್ತದೆ.",
    "code": "@dataclass(frozen=True)\nclass Question:\n    key: str\n    prompt: str\n    correct: str\n    category: str\n\n\n@dataclass\nclass Debater:\n    name: str\n    answer: str\n    confidence: float\n\n\ndef initial_answers(rng, n, error_rate, trap_share=0.0, correct=\"C\", trap=\"W\", others=(\"X\", \"Y\", \"Z\"), calibrated=True):\n    \"\"\"Independent draws. A wrong agent picks the shared trap with probability trap_share (error correlation), else a random other answer.\"\"\"\n    out = []\n    for i in range(n):\n        wrong = rng.random() < error_rate\n        if wrong:\n            ans = trap if rng.random() < trap_share else rng.choice(others)\n            conf = rng.gauss(0.55 if calibrated else 0.75, 0.12)\n        else:\n            ans = correct\n            conf = rng.gauss(0.80 if calibrated else 0.75, 0.12)\n        out.append(Debater(f\"A{i + 1}\", ans, min(1.0, max(0.0, conf))))\n    return out\n\n\ndef plurality(answers, weights=None):\n    tally = Counter()\n    for i, a in enumerate(answers):\n        tally[a] += weights[i] if weights else 1\n    top = tally.most_common()\n    if len(top) > 1 and top[0][1] == top[1][1]:\n        return None\n    return top[0][0]\n\n\ndef update_round(agents, threshold=0.5, weighted=False):\n    \"\"\"Synchronous round: every agent sees all peers' ORIGINAL answers and switches to the peer plurality if it has more than `threshold` support.\"\"\"\n    snapshot = [(a.answer, a.confidence) for a in agents]\n    new = []\n    for i, a in enumerate(agents):\n        peers = [snapshot[j] for j in range(len(agents)) if j != i]\n        answers = [p[0] for p in peers]\n        w = [p[1] for p in peers] if weighted else None\n        top = plurality(answers, w)\n        support = (sum(1 for x in answers if x == top) / len(answers)) if top else 0\n        new.append(Debater(a.name, top if top and support > threshold and top != a.answer else a.answer, a.confidence))\n    return new\n\n\ndef run_debate(agents, rounds=3, threshold=0.5, weighted=False):\n    history = [[a.answer for a in agents]]\n    for _ in range(rounds):\n        agents = update_round(agents, threshold, weighted)\n        history.append([a.answer for a in agents])\n        if len(set(history[-1])) == 1:\n            break\n    return agents, history"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "deb_1.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs one scripted question, measures voting at several group sizes and error rates, contrasts independent and shared-cause errors, compares the debate result with the initial vote, tests confidence weighting and checks ties.",
    "descKn": "main() ಒಂದು ಸ್ಕ್ರಿಪ್ಟ್ ಪ್ರಶ್ನೆ ಚಲಾಯಿಸುತ್ತದೆ, ಹಲವು ಗುಂಪು ಗಾತ್ರ ಮತ್ತು ದೋಷ ದರಗಳಲ್ಲಿ ಮತದಾನ ಅಳೆಯುತ್ತದೆ, ಸ್ವತಂತ್ರ ಮತ್ತು ಹಂಚಿದ-ಕಾರಣ ದೋಷಗಳನ್ನು ಹೋಲಿಸುತ್ತದೆ, ಚರ್ಚೆ ಫಲಿತಾಂಶವನ್ನು ಆರಂಭಿಕ ಮತದೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ, ವಿಶ್ವಾಸ ತೂಕ ಪರೀಕ್ಷಿಸುತ್ತದೆ ಮತ್ತು ಸಮ ಮತಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. One scripted question, three debaters\")\n    q = Question(\"q1\", \"What is 17 + 26?\", \"C\", \"arithmetic\")\n    ags = [Debater(\"A1\", \"C\", 0.8), Debater(\"A2\", \"W\", 0.6), Debater(\"A3\", \"C\", 0.7)]\n    final, hist = run_debate(ags)\n    print(\"question:\", q.prompt, \"| correct:\", q.correct)\n    for i, h in enumerate(hist):\n        print(f\"round {i}: {h}\")\n    print(\"vote of initial answers:\", plurality(hist[0]), \"| debate final:\", plurality(hist[-1]))\n\n    section(\"2. Genuinely measuring: majority vote under independent errors (error rate per agent ASSUMED, seed 1, 20000 questions)\")\n    rng = random.Random(1)\n    print(f\"{'agents':>7} {'error rate':>10} {'single agent':>13} {'majority vote':>14}\")\n    for n in (1, 3, 5, 9):\n        for err in (0.2, 0.4):\n            single = vote = 0\n            for _ in range(20000):\n                ags = initial_answers(rng, n, err)\n                single += ags[0].answer == \"C\"\n                vote += plurality([a.answer for a in ags]) == \"C\"\n            print(f\"{n:>7} {err:>10.0%} {single / 20000:>13.1%} {vote / 20000:>14.1%}\")\n    print(\"with independent errors voting helps when each agent is right more often than not; at 40 percent error with several agents wrong answers also split three ways, which lets the correct answer win a little more often than counting only 'more than half correct' would predict\")\n\n    section(\"3. Genuinely measuring: independent errors versus errors that share a cause (5 agents, similar average error, seed 2)\")\n    rng = random.Random(2)\n    N = 20000\n    ind_vote = ind_single = cor_vote = cor_single = cor_unan_wrong = ind_unan_wrong = 0\n    cor_err_total = 0.0\n    for _ in range(N):\n        ags = initial_answers(rng, 5, 0.31)\n        ind_vote += plurality([a.answer for a in ags]) == \"C\"\n        ind_single += ags[0].answer == \"C\"\n        ind_unan_wrong += len({a.answer for a in ags}) == 1 and ags[0].answer != \"C\"\n        hard = rng.random() < 0.30  # a hard question makes every agent likely to fall for the same trap\n        err = 0.80 if hard else 0.10\n        ags = initial_answers(rng, 5, err, trap_share=0.9 if hard else 0.0)\n        cor_vote += plurality([a.answer for a in ags]) == \"C\"\n        cor_single += ags[0].answer == \"C\"\n        cor_unan_wrong += len({a.answer for a in ags}) == 1 and ags[0].answer != \"C\"\n    print(f\"{'error structure':44} {'one agent':>10} {'majority of 5':>14} {'unanimous and wrong':>20}\")\n    print(f\"{'independent, 31% wrong each':44} {ind_single / N:>10.1%} {ind_vote / N:>14.1%} {ind_unan_wrong / N:>20.1%}\")\n    print(f\"{'shared cause (30% hard questions, 80% wrong)':44} {cor_single / N:>10.1%} {cor_vote / N:>14.1%} {cor_unan_wrong / N:>20.1%}\")\n    print(\"both setups make a single agent about 69 percent right, but when mistakes cluster on the same hard questions the majority gains far less and a sizeable share of questions end with all five agreeing on a wrong answer; independence of errors, not the number of agents, is what voting needs\")\n\n    section(\"4. Genuinely measuring: debate versus voting (threshold rule, 3 rounds, 5 agents, error 30 percent, seed 3)\")\n    rng = random.Random(3)\n    print(f\"{'trap share':>11} {'initial vote':>13} {'debate final':>13} {'converged':>10} {'converged and wrong':>20} {'correct -> wrong':>17}\")\n    for trap in (0.0, 0.7):\n        iv = df = conv = cw = c2w = 0\n        N = 10000\n        for _ in range(N):\n            ags = initial_answers(rng, 5, 0.30, trap_share=trap)\n            init = [a.answer for a in ags]\n            final, hist = run_debate(ags)\n            fa = [a.answer for a in final]\n            iv += plurality(init) == \"C\"\n            df += plurality(fa) == \"C\"\n            converged = len(set(fa)) == 1\n            conv += converged\n            cw += converged and fa[0] != \"C\"\n            c2w += plurality(init) == \"C\" and plurality(fa) != \"C\"\n        print(f\"{trap:>11.1f} {iv / N:>13.1%} {df / N:>13.1%} {conv / N:>10.1%} {cw / N:>20.2%} {c2w / N:>17.2%}\")\n    print(\"with this update rule the debate final matched the initial vote exactly and never turned a correct majority into a wrong one; what it added was agreement (86.5 to 89.8 percent converged), and some of that agreement is on a wrong answer, 2.45 and 6.75 percent of questions\")\n\n    section(\"5. Genuinely measuring: confidence-weighted updating when confidence is or is not informative (seed 4)\")\n    rng = random.Random(4)\n    print(f\"{'confidence':>16} {'unweighted final':>17} {'weighted final':>15}\")\n    for calibrated in (True, False):\n        u = w = 0\n        N = 10000\n        for _ in range(N):\n            ags = initial_answers(rng, 3, 0.35, trap_share=0.5, calibrated=calibrated)\n            fu, _ = run_debate([Debater(a.name, a.answer, a.confidence) for a in ags], threshold=0.0)\n            fw, _ = run_debate([Debater(a.name, a.answer, a.confidence) for a in ags], threshold=0.0, weighted=True)\n            u += plurality([a.answer for a in fu]) == \"C\"\n            w += plurality([a.answer for a in fw]) == \"C\"\n        print(f\"{'informative' if calibrated else 'uninformative':>16} {u / N:>17.1%} {w / N:>15.1%}\")\n    print(\"weighting by confidence helped a lot when confidence tracked correctness (71.4 to 91.5 percent, by construction of our assumption) and hurt when it did not (71.7 down to 64.8 percent), because the weights then break ties at random\")\n\n    section(\"6. Genuinely checking: ties and even group sizes\")\n    for n, answers in ((2, [\"C\", \"W\"]), (4, [\"C\", \"C\", \"W\", \"W\"]), (4, [\"C\", \"C\", \"W\", \"X\"]), (6, [\"C\", \"C\", \"C\", \"W\", \"W\", \"W\"])):\n        print(f\"{n} agents {answers}: plurality = {plurality(answers)}\")\n    ags = [Debater(\"A1\", \"C\", 0.9), Debater(\"A2\", \"W\", 0.9)]\n    final, hist = run_debate(ags, rounds=4, threshold=0.0)\n    print(\"two agents who disagree, switching to the other's answer each round:\", hist)\n    print(\"a tie has no winner, and with a synchronous update two agents can swap answers forever instead of converging\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. One scripted question, three debaters ---\nquestion: What is 17 + 26? | correct: C\nround 0: ['C', 'W', 'C']\nround 1: ['C', 'C', 'C']\nvote of initial answers: C | debate final: C\n\n--- 2. Genuinely measuring: majority vote under independent errors (error rate per agent ASSUMED, seed 1, 20000 questions) ---\n agents error rate  single agent  majority vote\n      1        20%         79.5%          79.5%\n      1        40%         60.3%          60.3%\n      3        20%         80.0%          90.0%\n      3        40%         60.1%          65.2%\n      5        20%         79.8%          95.3%\n      5        40%         59.9%          73.7%\n      9        20%         80.0%          99.5%\n      9        40%         59.6%          89.0%\nwith independent errors voting helps when each agent is right more often than not; at 40 percent error with several agents wrong answers also split three ways, which lets the correct answer win a little more often than counting only 'more than half correct' would predict\n\n--- 3. Genuinely measuring: independent errors versus errors that share a cause (5 agents, similar average error, seed 2) ---\nerror structure                               one agent  majority of 5  unanimous and wrong\nindependent, 31% wrong each                       69.2%          85.5%                 0.0%\nshared cause (30% hard questions, 80% wrong)      68.7%          71.1%                 6.0%\nboth setups make a single agent about 69 percent right, but when mistakes cluster on the same hard questions the majority gains far less and a sizeable share of questions end with all five agreeing on a wrong answer; independence of errors, not the number of agents, is what voting needs\n\n--- 4. Genuinely measuring: debate versus voting (threshold rule, 3 rounds, 5 agents, error 30 percent, seed 3) ---\n trap share  initial vote  debate final  converged  converged and wrong  correct -> wrong\n        0.0         87.0%         87.0%      86.5%                2.45%             0.00%\n        0.7         84.8%         84.8%      89.8%                6.75%             0.00%\nwith this update rule the debate final matched the initial vote exactly and never turned a correct majority into a wrong one; what it added was agreement (86.5 to 89.8 percent converged), and some of that agreement is on a wrong answer, 2.45 and 6.75 percent of questions\n\n--- 5. Genuinely measuring: confidence-weighted updating when confidence is or is not informative (seed 4) ---\n      confidence  unweighted final  weighted final\n     informative             71.4%           91.5%\n   uninformative             71.7%           64.8%\nweighting by confidence helped a lot when confidence tracked correctness (71.4 to 91.5 percent, by construction of our assumption) and hurt when it did not (71.7 down to 64.8 percent), because the weights then break ties at random\n\n--- 6. Genuinely checking: ties and even group sizes ---\n2 agents ['C', 'W']: plurality = None\n4 agents ['C', 'C', 'W', 'W']: plurality = None\n4 agents ['C', 'C', 'W', 'X']: plurality = C\n6 agents ['C', 'C', 'C', 'W', 'W', 'W']: plurality = None\ntwo agents who disagree, switching to the other's answer each round: [['C', 'W'], ['W', 'C'], ['C', 'W'], ['W', 'C'], ['C', 'W']]\na tie has no winner, and with a synchronous update two agents can swap answers forever instead of converging"
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
    "headingEn": "Genuinely Found: Voting Helps With Independent Errors and Much Less With Shared Ones",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸ್ವತಂತ್ರ ದೋಷಗಳಿಗೆ ಮತದಾನ ಸಹಾಯ ಮಾಡುತ್ತದೆ, ಹಂಚಿದವುಗಳಿಗೆ ಬಹಳ ಕಡಿಮೆ",
    "bodyEn": "Section 2 (assumed independent error rates, seed 1, 20,000 questions): with 20 percent error, a single agent was right 79.5 to 80.0 percent of the time and a majority of 3, 5 and 9 agents 90.0, 95.3 and 99.5 percent. Section 3 (similar average error of about 31 percent): with independent errors, a majority of 5 was right 85.5 percent of the time against 69.2 for one agent, with 0.0 percent of questions ending in a unanimous wrong answer; when 30 percent of questions were \"hard\" and agents shared a trap, one agent was right 68.7 percent, the majority of 5 only 71.1 percent and 6.0 percent of questions ended with all five agreeing on a wrong answer. These are simulations from assumed error structures, not measurements of any model.",
    "bodyKn": "ವಿಭಾಗ 2 (ಊಹಿಸಿದ ಸ್ವತಂತ್ರ ದೋಷ ದರಗಳು, seed 1, 20,000 ಪ್ರಶ್ನೆಗಳು): 20 ಶೇಕಡಾ ದೋಷದೊಂದಿಗೆ ಒಬ್ಬ agent 79.5 ರಿಂದ 80.0 ಶೇಕಡಾ ಸರಿ ಮತ್ತು 3, 5 ಹಾಗೂ 9 agents ನ ಬಹುಮತ 90.0, 95.3 ಮತ್ತು 99.5 ಶೇಕಡಾ. ವಿಭಾಗ 3 (ಸುಮಾರು 31 ಶೇಕಡಾ ಸಮಾನ ಸರಾಸರಿ ದೋಷ): ಸ್ವತಂತ್ರ ದೋಷಗಳೊಂದಿಗೆ 5 ರ ಬಹುಮತ 85.5 ಶೇಕಡಾ ಸರಿ, ಒಬ್ಬನಿಗೆ 69.2, ಮತ್ತು 0.0 ಶೇಕಡಾ ಪ್ರಶ್ನೆಗಳು ಏಕಮತದ ತಪ್ಪು ಉತ್ತರದಲ್ಲಿ ಮುಗಿದವು; 30 ಶೇಕಡಾ ಪ್ರಶ್ನೆಗಳು \"ಕಠಿಣ\" ಆಗಿ agents ಬಲೆ ಹಂಚಿಕೊಂಡಾಗ ಒಬ್ಬ agent 68.7 ಶೇಕಡಾ, 5 ರ ಬಹುಮತ ಕೇವಲ 71.1 ಶೇಕಡಾ ಮತ್ತು 6.0 ಶೇಕಡಾ ಪ್ರಶ್ನೆಗಳು ಎಲ್ಲಾ ಐದೂ ತಪ್ಪು ಉತ್ತರಕ್ಕೆ ಒಪ್ಪುವುದರಲ್ಲಿ ಮುಗಿದವು. ಇವು ಊಹಿಸಿದ ದೋಷ ರಚನೆಗಳ ಅನುಕರಣೆಗಳು, ಯಾವುದೇ ಮಾದರಿಯ ಅಳತೆಗಳಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Debate Matched the Vote, Added Agreement, and Confidence Helped Only When It Was Informative",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಚರ್ಚೆ ಮತಕ್ಕೆ ಸಮವಾಯಿತು, ಒಪ್ಪಿಗೆ ಸೇರಿಸಿತು, ಮತ್ತು ವಿಶ್ವಾಸ ಮಾಹಿತಿಯುಕ್ತವಾದಾಗ ಮಾತ್ರ ಸಹಾಯ ಮಾಡಿತು",
    "bodyEn": "Section 4 (5 agents, 30 percent error, seed 3): with this update rule the debate final matched the initial vote exactly (87.0 and 84.8 percent) and never turned a correct majority into a wrong one; what it added was agreement (86.5 and 89.8 percent of questions converged), and 2.45 and 6.75 percent of questions converged on a wrong answer. Section 5: weighting by confidence raised accuracy from 71.4 to 91.5 percent when confidence was assumed higher for correct answers, and lowered it from 71.7 to 64.8 percent when confidence carried no information, because the weights then broke ties at random. Section 6: a 2-2 split gave no plurality, and two disagreeing agents who each adopted the other's answer swapped places every round and never converged.",
    "bodyKn": "ವಿಭಾಗ 4 (5 agents, 30 ಶೇಕಡಾ ದೋಷ, seed 3): ಈ update ನಿಯಮದೊಂದಿಗೆ ಚರ್ಚೆ ಅಂತಿಮ ಆರಂಭಿಕ ಮತಕ್ಕೆ ನಿಖರವಾಗಿ ಸಮವಾಯಿತು (87.0 ಮತ್ತು 84.8 ಶೇಕಡಾ) ಮತ್ತು ಸರಿಯಾದ ಬಹುಮತವನ್ನು ಎಂದೂ ತಪ್ಪಾಗಿಸಲಿಲ್ಲ; ಅದು ಸೇರಿಸಿದ್ದು ಒಪ್ಪಿಗೆ (86.5 ಮತ್ತು 89.8 ಶೇಕಡಾ ಪ್ರಶ್ನೆಗಳು ಒಮ್ಮತಕ್ಕೆ ಬಂದವು), ಮತ್ತು 2.45 ಹಾಗೂ 6.75 ಶೇಕಡಾ ಪ್ರಶ್ನೆಗಳು ತಪ್ಪು ಉತ್ತರದ ಮೇಲೆ ಒಮ್ಮತಕ್ಕೆ ಬಂದವು. ವಿಭಾಗ 5: ವಿಶ್ವಾಸ ತೂಕ ಸರಿಯಾದ ಉತ್ತರಗಳಿಗೆ ಹೆಚ್ಚು ಎಂದು ಊಹಿಸಿದಾಗ ನಿಖರತೆಯನ್ನು 71.4 ರಿಂದ 91.5 ಶೇಕಡಾಕ್ಕೆ ಏರಿಸಿತು, ಮತ್ತು ವಿಶ್ವಾಸ ಮಾಹಿತಿ ಹೊತ್ತಿಲ್ಲದಾಗ 71.7 ರಿಂದ 64.8 ಕ್ಕೆ ಇಳಿಸಿತು, ಏಕೆಂದರೆ ತೂಕಗಳು ಆಗ ಸಮ ಮತಗಳನ್ನು ಯಾದೃಚ್ಛಿಕವಾಗಿ ಮುರಿದವು. ವಿಭಾಗ 6: 2-2 ವಿಭಜನೆ plurality ನೀಡಲಿಲ್ಲ, ಮತ್ತು ಭಿನ್ನಮತದ ಇಬ್ಬರು agents ಪ್ರತಿಯೊಬ್ಬರೂ ಇನ್ನೊಬ್ಬರ ಉತ್ತರ ಸ್ವೀಕರಿಸಿ ಪ್ರತಿ ಸುತ್ತು ಸ್ಥಾನ ಬದಲಿಸಿ ಎಂದೂ ಒಮ್ಮತಕ್ಕೆ ಬರಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A group can beat an individual, but only through diversity of errors. Knowing whether your agents' mistakes overlap tells you if debate is worth building, and the tie and oscillation behaviour is something every real protocol has to define.",
    "bodyKn": "ಗುಂಪು ವ್ಯಕ್ತಿಯನ್ನು ಮೀರಬಹುದು, ಆದರೆ ದೋಷಗಳ ವೈವಿಧ್ಯತೆಯ ಮೂಲಕ ಮಾತ್ರ. ನಿಮ್ಮ agents ನ ತಪ್ಪುಗಳು ಅತಿಕ್ರಮಿಸುತ್ತವೆಯೇ ಎಂದು ತಿಳಿಯುವುದು ಚರ್ಚೆ ನಿರ್ಮಿಸುವುದು ಯೋಗ್ಯವೇ ಎಂದು ಹೇಳುತ್ತದೆ, ಮತ್ತು ಸಮ ಮತ ಹಾಗೂ ಆಂದೋಲನ ವರ್ತನೆಯನ್ನು ಪ್ರತಿ ನಿಜ ಪ್ರೋಟೋಕಾಲ್ ವ್ಯಾಖ್ಯಾನಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"agents that agree after debate are probably right.\" Convergence was on a wrong answer for 2.45 to 6.75 percent of questions in the simulation.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಚರ್ಚೆಯ ನಂತರ ಒಪ್ಪುವ agents ಬಹುಶಃ ಸರಿ.\" ಅನುಕರಣೆಯಲ್ಲಿ 2.45 ರಿಂದ 6.75 ಶೇಕಡಾ ಪ್ರಶ್ನೆಗಳಲ್ಲಿ ಒಮ್ಮತ ತಪ್ಪು ಉತ್ತರದ ಮೇಲಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Independent proposals: each agent answers before seeing peers. Plurality: the most common answer, none on a tie. Convergence: all agents give one answer. Shared trap: a wrong answer many agents are drawn to. Synchronous round: all agents read round-start answers.",
    "bodyKn": "Independent proposals: ಸಹವರ್ತಿಗಳನ್ನು ನೋಡುವ ಮುನ್ನ ಪ್ರತಿ agent ಉತ್ತರಿಸುತ್ತದೆ. Plurality: ಅತಿ ಸಾಮಾನ್ಯ ಉತ್ತರ, ಸಮ ಮತದಲ್ಲಿ ಯಾವುದೂ ಇಲ್ಲ. Convergence: ಎಲ್ಲಾ agents ಒಂದೇ ಉತ್ತರ ನೀಡುವುದು. Shared trap: ಹಲವು agents ಆಕರ್ಷಿತವಾಗುವ ತಪ್ಪು ಉತ್ತರ. Synchronous round: ಎಲ್ಲಾ agents ಸುತ್ತಿನ-ಆರಂಭದ ಉತ್ತರಗಳನ್ನು ಓದುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) With independent 20 percent errors, a majority of 9 reached 99.5 percent against about 80 for one agent. 2) With errors that share a cause, a majority of 5 reached only 71.1 against 68.7 for one, with 6.0 percent unanimously wrong. 3) The update rule reproduced the initial vote and added agreement. 4) Some agreement was on wrong answers. 5) Confidence weighting helped (to 91.5) only when confidence was informative. 6) Ties and two-agent swaps need explicit rules.",
    "bodyKn": "1) ಸ್ವತಂತ್ರ 20 ಶೇಕಡಾ ದೋಷಗಳೊಂದಿಗೆ 9 ರ ಬಹುಮತ 99.5 ಶೇಕಡಾ ತಲುಪಿತು, ಒಬ್ಬ agent ಗೆ ಸುಮಾರು 80. 2) ಹಂಚಿದ ಕಾರಣದ ದೋಷಗಳೊಂದಿಗೆ 5 ರ ಬಹುಮತ ಕೇವಲ 71.1 ತಲುಪಿತು, ಒಬ್ಬನಿಗೆ 68.7, 6.0 ಶೇಕಡಾ ಏಕಮತದ ತಪ್ಪು. 3) Update ನಿಯಮ ಆರಂಭಿಕ ಮತ ಪುನರುತ್ಪಾದಿಸಿ ಒಪ್ಪಿಗೆ ಸೇರಿಸಿತು. 4) ಕೆಲವು ಒಪ್ಪಿಗೆ ತಪ್ಪು ಉತ್ತರಗಳ ಮೇಲೆ. 5) ವಿಶ್ವಾಸ ತೂಕ ವಿಶ್ವಾಸ ಮಾಹಿತಿಯುಕ್ತವಾದಾಗ ಮಾತ್ರ (91.5 ಕ್ಕೆ) ಸಹಾಯ ಮಾಡಿತು. 6) ಸಮ ಮತಗಳು ಮತ್ತು ಎರಡು-agent ಬದಲಾವಣೆಗಳಿಗೆ ಸ್ಪಷ್ಟ ನಿಯಮ ಬೇಕು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What does voting need to beat a single agent?",
      "qKn": "ಒಬ್ಬ agent ಅನ್ನು ಮೀರಲು ಮತದಾನಕ್ಕೆ ಏನು ಬೇಕು?",
      "opts": [
       "More agents only",
       "Errors that are at least partly independent",
       "A longer prompt",
       "A hub"
      ],
      "optsKn": [
       "ಹೆಚ್ಚು agents ಮಾತ್ರ",
       "ಕನಿಷ್ಠ ಭಾಗಶಃ ಸ್ವತಂತ್ರವಾದ ದೋಷಗಳು",
       "ಉದ್ದ prompt",
       "ಒಂದು hub"
      ],
      "correct": 1
     },
     {
      "q": "How did the majority of 5 do when mistakes clustered on hard questions?",
      "qKn": "ತಪ್ಪುಗಳು ಕಠಿಣ ಪ್ರಶ್ನೆಗಳ ಮೇಲೆ ಗುಂಪುಗೂಡಿದಾಗ 5 ರ ಬಹುಮತ ಹೇಗೆ ನಿರ್ವಹಿಸಿತು?",
      "opts": [
       "85.5 percent",
       "71.1 percent, barely above one agent (68.7)",
       "99 percent",
       "0 percent"
      ],
      "optsKn": [
       "85.5 ಶೇಕಡಾ",
       "71.1 ಶೇಕಡಾ, ಒಬ್ಬ agent (68.7) ಗಿಂತ ಸ್ವಲ್ಪ ಮಾತ್ರ ಮೇಲೆ",
       "99 ಶೇಕಡಾ",
       "0 ಶೇಕಡಾ"
      ],
      "correct": 1
     },
     {
      "q": "What did the threshold update rule add compared with the initial vote?",
      "qKn": "ಆರಂಭಿಕ ಮತಕ್ಕೆ ಹೋಲಿಸಿದರೆ ಮಿತಿ update ನಿಯಮ ಏನು ಸೇರಿಸಿತು?",
      "opts": [
       "More accuracy",
       "Agreement (convergence), not accuracy",
       "Fewer calls",
       "Nothing at all"
      ],
      "optsKn": [
       "ಹೆಚ್ಚು ನಿಖರತೆ",
       "ಒಪ್ಪಿಗೆ (convergence), ನಿಖರತೆ ಅಲ್ಲ",
       "ಕಡಿಮೆ ಕರೆಗಳು",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "When did confidence weighting hurt?",
      "qKn": "ವಿಶ್ವಾಸ ತೂಕ ಯಾವಾಗ ಹಾನಿ ಮಾಡಿತು?",
      "opts": [
       "When confidence was informative",
       "When confidence carried no information (71.7 to 64.8 percent)",
       "Never",
       "Always"
      ],
      "optsKn": [
       "ವಿಶ್ವಾಸ ಮಾಹಿತಿಯುಕ್ತವಾಗಿದ್ದಾಗ",
       "ವಿಶ್ವಾಸ ಮಾಹಿತಿ ಹೊತ್ತಿಲ್ಲದಾಗ (71.7 ರಿಂದ 64.8 ಶೇಕಡಾ)",
       "ಎಂದೂ ಇಲ್ಲ",
       "ಯಾವಾಗಲೂ"
      ],
      "correct": 1
     },
     {
      "q": "What happened to two disagreeing agents who each adopted the other's answer?",
      "qKn": "ಪ್ರತಿಯೊಬ್ಬರೂ ಇನ್ನೊಬ್ಬರ ಉತ್ತರ ಸ್ವೀಕರಿಸಿದ ಭಿನ್ನಮತದ ಇಬ್ಬರು agents ಗೆ ಏನಾಯಿತು?",
      "opts": [
       "They converged",
       "They swapped answers every round and never converged",
       "One was removed",
       "They both became correct"
      ],
      "optsKn": [
       "ಅವು ಒಮ್ಮತಕ್ಕೆ ಬಂದವು",
       "ಪ್ರತಿ ಸುತ್ತು ಉತ್ತರ ಬದಲಿಸಿ ಎಂದೂ ಒಮ್ಮತಕ್ಕೆ ಬರಲಿಲ್ಲ",
       "ಒಬ್ಬನನ್ನು ತೆಗೆಯಲಾಯಿತು",
       "ಇಬ್ಬರೂ ಸರಿಯಾದರು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
