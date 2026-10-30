module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321556",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Multi-Agent Debate: Voting, Topologies and Evaluation (Part 3 of 3) — Evaluation, Cost and Escalation",
 "titleKn": "ಬಹು-Agent ಚರ್ಚೆ: ಮತದಾನ, Topologies ಮತ್ತು ಮೌಲ್ಯಮಾಪನ (ಭಾಗ 3 / 3) — ಮೌಲ್ಯಮಾಪನ, ವೆಚ್ಚ ಮತ್ತು Escalation",
 "desc": "Build a debate evaluation harness that reports accuracy, convergence, per-agent transitions and cost against vote and single-agent baselines, then test escalation, overlapping mistakes and fallbacks for debates that never converge.",
 "descKn": "ನಿಖರತೆ, ಒಮ್ಮತ, ಪ್ರತಿ-agent ಪರಿವರ್ತನೆಗಳು ಮತ್ತು ವೆಚ್ಚವನ್ನು ಮತ ಮತ್ತು ಒಬ್ಬ-agent ಮೂಲರೇಖೆಗಳ ವಿರುದ್ಧ ವರದಿ ಮಾಡುವ ಚರ್ಚೆ ಮೌಲ್ಯಮಾಪನ harness ನಿರ್ಮಿಸಿ, ನಂತರ escalation, ಅತಿಕ್ರಮಿಸುವ ತಪ್ಪುಗಳು ಮತ್ತು ಎಂದೂ ಒಮ್ಮತಕ್ಕೆ ಬಾರದ ಚರ್ಚೆಗಳಿಗೆ fallbacks ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Report accuracy, convergence and cost together.",
  "Count wrong-to-right and right-to-wrong changes.",
  "Always compare with a vote and a single agent.",
  "Escalate to debate only when needed.",
  "Define a fallback for unresolved debates."
 ],
 "objectivesKn": [
  "ನಿಖರತೆ, ಒಮ್ಮತ ಮತ್ತು ವೆಚ್ಚವನ್ನು ಒಟ್ಟಿಗೆ ವರದಿ ಮಾಡಿ.",
  "ತಪ್ಪಿನಿಂದ-ಸರಿ ಮತ್ತು ಸರಿಯಿಂದ-ತಪ್ಪು ಬದಲಾವಣೆಗಳನ್ನು ಎಣಿಸಿ.",
  "ಯಾವಾಗಲೂ ಮತ ಮತ್ತು ಒಬ್ಬ agent ಜೊತೆ ಹೋಲಿಸಿ.",
  "ಅಗತ್ಯವಿದ್ದಾಗ ಮಾತ್ರ ಚರ್ಚೆಗೆ escalate ಮಾಡಿ.",
  "ಬಗೆಹರಿಯದ ಚರ್ಚೆಗಳಿಗೆ fallback ವ್ಯಾಖ್ಯಾನಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Multi-Agent Debate: Voting, Topologies and Evaluation (Part 3 of 3)",
    "textKn": "ಬಹು-Agent ಚರ್ಚೆ: ಮತದಾನ, Topologies ಮತ್ತು ಮೌಲ್ಯಮಾಪನ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: the evaluation harness: accuracy, convergence, transitions, cost, escalation and fallbacks. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind multi-agent debate (Society-of-Minds style), not the real software, and every agent is scripted or simulated with an assumed error rate, so no language model and no real debate quality is measured, so no real LLM behaviour is measured. All three pasted parts of this lesson were cut off by a size limit before their programs finished, so the debaters, runners and harness are rebuilt from their descriptions. The three scripted questions and answers are written for this lab, and the 3,000-question benchmark uses an assumed error structure. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಮೌಲ್ಯಮಾಪನ harness: ನಿಖರತೆ, ಒಮ್ಮತ, ಪರಿವರ್ತನೆಗಳು, ವೆಚ್ಚ, escalation ಮತ್ತು fallbacks. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಬಹು-agent ಚರ್ಚೆ (Society-of-Minds ಶೈಲಿ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪ್ರತಿ agent ಸ್ಕ್ರಿಪ್ಟ್ ಅಥವಾ ಊಹಿಸಿದ ದೋಷ ದರದೊಂದಿಗೆ ಅನುಕರಿಸಲಾಗಿದೆ, ಆದ್ದರಿಂದ ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಮತ್ತು ನಿಜ ಚರ್ಚೆ ಗುಣಮಟ್ಟ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಈ ಲೆಸನ್‌ನ ಮೂರೂ ಅಂಟಿಸಿದ ಭಾಗಗಳು ತಮ್ಮ ಪ್ರೋಗ್ರಾಂ ಮುಗಿಯುವ ಮುನ್ನ ಗಾತ್ರ ಮಿತಿಯಿಂದ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿದ್ದವು, ಆದ್ದರಿಂದ debaters, runners ಮತ್ತು harness ಅವುಗಳ ವಿವರಣೆಗಳಿಂದ ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. ಮೂರು ಸ್ಕ್ರಿಪ್ಟ್ ಪ್ರಶ್ನೆಗಳು ಮತ್ತು ಉತ್ತರಗಳು ಈ ಲ್ಯಾಬ್‌ಗಾಗಿ ಬರೆದವು, ಮತ್ತು 3,000-ಪ್ರಶ್ನೆ benchmark ಊಹಿಸಿದ ದೋಷ ರಚನೆ ಬಳಸುತ್ತದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Agreement Is Not Accuracy",
    "textKn": "ಒಪ್ಪಿಗೆ ನಿಖರತೆ ಅಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Measure What Debate Changed and What It Cost",
    "headingKn": "ಚರ್ಚೆ ಏನು ಬದಲಿಸಿತು ಮತ್ತು ಏನು ವೆಚ್ಚ ಮಾಡಿತು ಅಳೆಯಿರಿ",
    "bodyEn": "A debate harness should report accuracy, convergence rate, rounds and cost, and also what happened to individual agents: wrong to right, right to wrong, unchanged. It must compare against the cheap baselines (one agent, a majority vote) on the same questions, because a protocol that costs five times as much has to earn it. It also needs a rule for debates that do not converge, and possibly an escalation policy that debates only when the first answers disagree.",
    "bodyKn": "Debate harness ನಿಖರತೆ, ಒಮ್ಮತ ದರ, ಸುತ್ತುಗಳು ಮತ್ತು ವೆಚ್ಚವನ್ನು ವರದಿ ಮಾಡಬೇಕು, ಮತ್ತು ವೈಯಕ್ತಿಕ agents ಗೆ ಏನಾಯಿತು ಎಂದೂ: ತಪ್ಪಿನಿಂದ ಸರಿಗೆ, ಸರಿಯಿಂದ ತಪ್ಪಿಗೆ, ಬದಲಾಗದ್ದು. ಅದು ಅದೇ ಪ್ರಶ್ನೆಗಳಲ್ಲಿ ಅಗ್ಗದ ಮೂಲರೇಖೆಗಳೊಂದಿಗೆ (ಒಬ್ಬ agent, ಬಹುಮತ ಮತ) ಹೋಲಿಸಬೇಕು, ಏಕೆಂದರೆ ಐದು ಪಟ್ಟು ವೆಚ್ಚದ ಪ್ರೋಟೋಕಾಲ್ ಅದನ್ನು ಗಳಿಸಬೇಕು. ಒಮ್ಮತಕ್ಕೆ ಬಾರದ ಚರ್ಚೆಗಳಿಗೆ ನಿಯಮ ಬೇಕು, ಮತ್ತು ಮೊದಲ ಉತ್ತರಗಳು ಭಿನ್ನವಾದಾಗ ಮಾತ್ರ ಚರ್ಚಿಸುವ escalation ನೀತಿ ಬೇಕಾಗಬಹುದು."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Four Things to Report",
    "headingKn": "ವರದಿ ಮಾಡಬೇಕಾದ ನಾಲ್ಕು ವಿಷಯಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Evaluate agreement and accuracy separately</text><rect x=\"10\" y=\"40\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">accuracy</text><text x=\"50\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">final vs truth</text><rect x=\"110\" y=\"40\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">convergence</text><text x=\"150\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">did they agree</text><rect x=\"210\" y=\"40\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">cost</text><text x=\"250\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">calls per question</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">transitions</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">wrong to right, right to wrong</text><path d=\"M150,74 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">agreement is not correctness</text></svg>",
    "captionEn": "Agreement, accuracy, cost and per-agent transitions answer different questions.",
    "captionKn": "ಒಪ್ಪಿಗೆ, ನಿಖರತೆ, ವೆಚ್ಚ ಮತ್ತು ಪ್ರತಿ-agent ಪರಿವರ್ತನೆಗಳು ಬೇರೆ ಬೇರೆ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Protocols compared in the lab",
    "headingKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಹೋಲಿಸಿದ ಪ್ರೋಟೋಕಾಲ್‌ಗಳು",
    "headers": [
     "Protocol",
     "Accuracy",
     "Calls per question"
    ],
    "rows": [
     [
      "single agent",
      "71.5%",
      "1.0"
     ],
     [
      "majority vote of 5",
      "76.8%",
      "5.0"
     ],
     [
      "full mesh debate",
      "76.8%",
      "26.8"
     ],
     [
      "hub debate",
      "71.5%",
      "15.4"
     ],
     [
      "vote, debate only if split",
      "76.8%",
      "18.2"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Harness",
    "textKn": "Harness ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "deb_3.py",
    "headingEn": "Questions, scripted answers and transition statistics",
    "headingKn": "ಪ್ರಶ್ನೆಗಳು, ಸ್ಕ್ರಿಪ್ಟ್ ಉತ್ತರಗಳು ಮತ್ತು ಪರಿವರ್ತನೆ ಅಂಕಿಅಂಶಗಳು",
    "descEn": "QUESTIONS holds the arithmetic, boundary and sequence questions; SCRIPTED holds three agents' initial answers for each. TransitionStats counts wrong-to-correct, correct-to-wrong, unchanged-correct and unchanged-wrong agent answers between the initial and final states.",
    "descKn": "QUESTIONS ಅಂಕಗಣಿತ, ಗಡಿ ಮತ್ತು ಅನುಕ್ರಮ ಪ್ರಶ್ನೆಗಳನ್ನು ಹೊಂದಿದೆ; SCRIPTED ಪ್ರತಿಯೊಂದಕ್ಕೆ ಮೂರು agents ನ ಆರಂಭಿಕ ಉತ್ತರಗಳನ್ನು ಹೊಂದಿದೆ. TransitionStats ಆರಂಭಿಕ ಮತ್ತು ಅಂತಿಮ ಸ್ಥಿತಿಗಳ ನಡುವೆ ತಪ್ಪಿನಿಂದ-ಸರಿ, ಸರಿಯಿಂದ-ತಪ್ಪು, ಬದಲಾಗದ-ಸರಿ ಮತ್ತು ಬದಲಾಗದ-ತಪ್ಪು agent ಉತ್ತರಗಳನ್ನು ಎಣಿಸುತ್ತದೆ.",
    "code": "QUESTIONS = [\n    Question(\"arith\", \"What is 17 + 26?\", \"43\", \"arithmetic\"),\n    Question(\"bound\", \"Is 2000 a leap year?\", \"yes\", \"boundary\"),\n    Question(\"seq\", \"Next number: 2, 6, 12, 20, ?\", \"30\", \"sequence\"),\n]\nSCRIPTED = {  # question -> answers of Agent-A, Agent-B, Agent-C (written for this lab)\n    \"arith\": [\"43\", \"43\", \"42\"],\n    \"bound\": [\"yes\", \"no\", \"no\"],\n    \"seq\": [\"30\", \"28\", \"32\"],\n}\n\n\n@dataclass\nclass TransitionStats:\n    wrong_to_correct: int\n    correct_to_wrong: int\n    unchanged_correct: int\n    unchanged_wrong: int\n\n\ndef transitions(initial, final, correct):\n    t = TransitionStats(0, 0, 0, 0)\n    for a, b in zip(initial, final):\n        if a != correct and b == correct:\n            t.wrong_to_correct += 1\n        elif a == correct and b != correct:\n            t.correct_to_wrong += 1\n        elif a == correct:\n            t.unchanged_correct += 1\n        else:\n            t.unchanged_wrong += 1\n    return t"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "deb_3.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the three scripted questions under two topologies, checks convergence against correctness, runs a 3,000-question simulated benchmark across five protocols, varies how much the agents' mistakes overlap and compares fallbacks for debates that never converge.",
    "descKn": "main() ಮೂರು ಸ್ಕ್ರಿಪ್ಟ್ ಪ್ರಶ್ನೆಗಳನ್ನು ಎರಡು topologies ಅಡಿ ಚಲಾಯಿಸುತ್ತದೆ, ಒಮ್ಮತವನ್ನು ಸರಿತನದ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸುತ್ತದೆ, ಐದು ಪ್ರೋಟೋಕಾಲ್‌ಗಳಲ್ಲಿ 3,000-ಪ್ರಶ್ನೆ ಅನುಕರಿಸಿದ benchmark ಚಲಾಯಿಸುತ್ತದೆ, agents ನ ತಪ್ಪುಗಳು ಎಷ್ಟು ಅತಿಕ್ರಮಿಸುತ್ತವೆ ಎಂದು ಬದಲಿಸುತ್ತದೆ ಮತ್ತು ಎಂದೂ ಒಮ್ಮತಕ್ಕೆ ಬಾರದ ಚರ್ಚೆಗಳಿಗೆ fallbacks ಹೋಲಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Three scripted questions through full mesh and hub-and-spoke\")\n    print(f\"{'question':8} {'initial answers':22} {'initial vote':>12} | {'full mesh final':18} {'conv':>5} {'ops':>4} | {'hub final':18} {'conv':>5} {'ops':>4}\")\n    totals = {\"full\": [0, 0, 0, 0], \"hub\": [0, 0, 0, 0]}\n    for q in QUESTIONS:\n        init = SCRIPTED[q.key]\n        row = f\"{q.key:8} {str(init):22} {str(plurality(init)):>12} |\"\n        for topo in (\"full\", \"hub\"):\n            ags = [Debater(f\"A{i}\", a, 0.7) for i, a in enumerate(init)]\n            r = debate(ags, topo, 3)\n            row += f\" {str(r.history[-1]):18} {str(r.converged):>5} {r.critique_ops:>4} |\"\n            totals[topo][0] += r.final_answer == q.correct\n            totals[topo][1] += r.converged\n            totals[topo][2] += r.critique_ops\n            tr = transitions(init, r.history[-1], q.correct)\n            totals[topo][3] += tr.correct_to_wrong\n        print(row)\n    for topo, (acc, conv, ops, dmg) in totals.items():\n        print(f\"{topo:5}: accuracy {acc}/3, converged {conv}/3, critique operations {ops}, correct-to-wrong agent changes {dmg}\")\n    print(\"on the boundary question two of three agents started wrong with the same answer, so both topologies moved the right agent toward it (correct-to-wrong 1 each); the full mesh left the three-way split on the sequence question unresolved (no answer, so it scores as wrong) and ended with accuracy 1/3. The hub's 3/3 should not be read as better: its sequence answer is right because the hub agent happened to be the right one and the spokes copied it, and its boundary answer is the plurality of a state that was still swapping every round\")\n\n    section(\"2. Genuinely checking: converged does not mean correct (the scripted boundary question)\")\n    init = SCRIPTED[\"bound\"]\n    r = debate([Debater(f\"A{i}\", a, 0.7) for i, a in enumerate(init)], \"full\", 3)\n    print(f\"initial {init} -> final {r.history[-1]} | converged={r.converged} | correct={r.final_answer == 'yes'} | transitions: {transitions(init, r.history[-1], 'yes')}\")\n    print(\"all three agents now agree, and they agree on the wrong answer: a convergence rate can look good while accuracy falls\")\n\n    section(\"3. Genuinely measuring: a larger simulated benchmark (3000 questions, 5 agents, assumed error structure, seed 10)\")\n    rng = random.Random(10)\n    N = 3000\n\n    def make_agents(hard):\n        err = 0.75 if hard else 0.12\n        return initial_answers(rng, 5, err, trap_share=0.85 if hard else 0.0)\n\n    rows = {k: {\"correct\": 0, \"ops\": 0, \"calls\": 0, \"conv\": 0, \"rounds\": 0, \"c2w\": 0, \"w2c\": 0} for k in (\"single agent\", \"majority vote\", \"full mesh debate\", \"hub debate\", \"vote, debate if split\")}\n    for _ in range(N):\n        hard = rng.random() < 0.25\n        ags = make_agents(hard)\n        init = [a.answer for a in ags]\n        rows[\"single agent\"][\"correct\"] += init[0] == \"C\"\n        rows[\"single agent\"][\"calls\"] += 1\n        rows[\"majority vote\"][\"correct\"] += plurality(init) == \"C\"\n        rows[\"majority vote\"][\"calls\"] += 5\n        for name, topo in ((\"full mesh debate\", \"full\"), (\"hub debate\", \"hub\")):\n            r = debate([Debater(a.name, a.answer, a.confidence) for a in ags], topo, 3)\n            d = rows[name]\n            d[\"correct\"] += r.final_answer == \"C\"\n            d[\"ops\"] += r.critique_ops\n            d[\"calls\"] += 5 + r.critique_ops\n            d[\"conv\"] += r.converged\n            d[\"rounds\"] += r.rounds\n            t = transitions(init, r.history[-1], \"C\")\n            d[\"c2w\"] += t.correct_to_wrong\n            d[\"w2c\"] += t.wrong_to_correct\n        d = rows[\"vote, debate if split\"]\n        if len(set(init)) == 1:\n            d[\"correct\"] += init[0] == \"C\"\n            d[\"calls\"] += 5\n        else:\n            r = debate([Debater(a.name, a.answer, a.confidence) for a in ags], \"full\", 3)\n            d[\"correct\"] += r.final_answer == \"C\"\n            d[\"calls\"] += 5 + r.critique_ops\n    print(f\"{'protocol':24} {'accuracy':>9} {'model calls / question':>23} {'converged':>10} {'agent changes right->wrong':>28} {'wrong->right':>13}\")\n    for k, d in rows.items():\n        conv = f\"{d['conv'] / N:.1%}\" if d[\"conv\"] else \"-\"\n        c2w = d[\"c2w\"] if d[\"c2w\"] or d[\"w2c\"] else \"-\"\n        w2c = d[\"w2c\"] if d[\"c2w\"] or d[\"w2c\"] else \"-\"\n        print(f\"{k:24} {d['correct'] / N:>9.1%} {d['calls'] / N:>23.1f} {conv:>10} {str(c2w):>28} {str(w2c):>13}\")\n    print(\"model calls count the initial answers plus one per critique operation, an assumed unit of cost. Under this assumed error structure (25 percent hard questions where agents share a trap) the full mesh moved 1,343 agent answers from wrong to right and 535 from right to wrong, yet its accuracy (76.8 percent) equalled the plain majority vote's, at 26.8 calls instead of 5.0. Escalating to debate only when the first answers split kept that accuracy at 18.2 calls. The hub debate scored 71.5 percent, exactly the single agent's, because the spokes copy the hub so the group answer is essentially the hub's\")\n\n    section(\"4. Genuinely measuring: prompt homogenisation (how much the agents' mistakes overlap), 5 agents, seed 11\")\n    rng = random.Random(11)\n    print(f\"{'wrong agents pick the same trap':32} {'majority vote':>14} {'full mesh debate':>17}\")\n    for trap in (0.0, 0.5, 0.9):\n        v = dbt = 0\n        for _ in range(6000):\n            hard = rng.random() < 0.25\n            ags = initial_answers(rng, 5, 0.6 if hard else 0.1, trap_share=trap)\n            init = [a.answer for a in ags]\n            v += plurality(init) == \"C\"\n            dbt += debate(ags, \"full\", 3).final_answer == \"C\"\n        print(f\"{trap:>32.1f} {v / 6000:>14.1%} {dbt / 6000:>17.1%}\")\n    print(\"debate matched the plain vote exactly at every setting (83.8, 85.6 and 82.0 percent), because this update rule only spreads the initial plurality; accuracy for both moved within about 3.6 points across settings without a clean trend, so these runs do not show homogenisation hurting steadily. What they show is that debate cannot add information that no agent had\")\n\n    section(\"5. Genuinely measuring: what to do with a debate that does not converge (stuck rate and fallbacks, seed 12)\")\n    rng = random.Random(12)\n    stuck = 0\n    fall = {\"return nothing\": 0, \"most common answer\": 0, \"judge (80 percent right between the top two, ASSUMED)\": 0}\n    for _ in range(N):\n        hard = rng.random() < 0.25\n        ags = initial_answers(rng, 5, 0.75 if hard else 0.12, trap_share=0.5 if hard else 0.0, others=(\"X\", \"Y\", \"Z\", \"V\"))\n        r = debate(ags, \"ring\", 3)\n        if not r.converged:\n            stuck += 1\n            fall[\"return nothing\"] += 0\n            top2 = [a for a, _ in Counter(r.history[-1]).most_common(2)]\n            fall[\"most common answer\"] += top2[0] == \"C\"\n            judged = rng.choice(top2) if rng.random() > 0.8 else (\"C\" if \"C\" in top2 else top2[0])\n            fall[\"judge (80 percent right between the top two, ASSUMED)\"] += judged == \"C\"\n    print(f\"debates that had not converged after 3 rounds (ring): {stuck} of {N} ({stuck / N:.1%})\")\n    for k, v in fall.items():\n        print(f\"  fallback '{k}': correct on {v} of the {stuck} unresolved debates ({v / stuck:.1%})\" if stuck else \"\")\n    print(\"unresolved debates are a real share of traffic and need an explicit rule; returning nothing is safe but unhelpful, and the judge row rests on an assumed judge accuracy, not a measured one\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Three scripted questions through full mesh and hub-and-spoke ---\nquestion initial answers        initial vote | full mesh final     conv  ops | hub final           conv  ops\narith    ['43', '43', '42']               43 | ['43', '43', '43']  True    6 | ['43', '43', '43']  True    4 |\nbound    ['yes', 'no', 'no']              no | ['no', 'no', 'no']  True    6 | ['no', 'yes', 'yes'] False   12 |\nseq      ['30', '28', '32']             None | ['30', '28', '32'] False   18 | ['30', '30', '30']  True    4 |\nfull : accuracy 1/3, converged 2/3, critique operations 30, correct-to-wrong agent changes 1\nhub  : accuracy 3/3, converged 2/3, critique operations 20, correct-to-wrong agent changes 1\non the boundary question two of three agents started wrong with the same answer, so both topologies moved the right agent toward it (correct-to-wrong 1 each); the full mesh left the three-way split on the sequence question unresolved (no answer, so it scores as wrong) and ended with accuracy 1/3. The hub's 3/3 should not be read as better: its sequence answer is right because the hub agent happened to be the right one and the spokes copied it, and its boundary answer is the plurality of a state that was still swapping every round\n\n--- 2. Genuinely checking: converged does not mean correct (the scripted boundary question) ---\ninitial ['yes', 'no', 'no'] -> final ['no', 'no', 'no'] | converged=True | correct=False | transitions: TransitionStats(wrong_to_correct=0, correct_to_wrong=1, unchanged_correct=0, unchanged_wrong=2)\nall three agents now agree, and they agree on the wrong answer: a convergence rate can look good while accuracy falls\n\n--- 3. Genuinely measuring: a larger simulated benchmark (3000 questions, 5 agents, assumed error structure, seed 10) ---\nprotocol                  accuracy  model calls / question  converged   agent changes right->wrong  wrong->right\nsingle agent                 71.5%                     1.0          -                            -             -\nmajority vote                76.8%                     5.0          -                            -             -\nfull mesh debate             76.8%                    26.8      95.4%                          535          1343\nhub debate                   71.5%                    15.4      85.0%                         1730          1744\nvote, debate if split        76.8%                    18.2          -                            -             -\nmodel calls count the initial answers plus one per critique operation, an assumed unit of cost. Under this assumed error structure (25 percent hard questions where agents share a trap) the full mesh moved 1,343 agent answers from wrong to right and 535 from right to wrong, yet its accuracy (76.8 percent) equalled the plain majority vote's, at 26.8 calls instead of 5.0. Escalating to debate only when the first answers split kept that accuracy at 18.2 calls. The hub debate scored 71.5 percent, exactly the single agent's, because the spokes copy the hub so the group answer is essentially the hub's\n\n--- 4. Genuinely measuring: prompt homogenisation (how much the agents' mistakes overlap), 5 agents, seed 11 ---\nwrong agents pick the same trap   majority vote  full mesh debate\n                             0.0          83.8%             83.8%\n                             0.5          85.6%             85.6%\n                             0.9          82.0%             82.0%\ndebate matched the plain vote exactly at every setting (83.8, 85.6 and 82.0 percent), because this update rule only spreads the initial plurality; accuracy for both moved within about 3.6 points across settings without a clean trend, so these runs do not show homogenisation hurting steadily. What they show is that debate cannot add information that no agent had\n\n--- 5. Genuinely measuring: what to do with a debate that does not converge (stuck rate and fallbacks, seed 12) ---\ndebates that had not converged after 3 rounds (ring): 735 of 3000 (24.5%)\n  fallback 'return nothing': correct on 0 of the 735 unresolved debates (0.0%)\n  fallback 'most common answer': correct on 284 of the 735 unresolved debates (38.6%)\n  fallback 'judge (80 percent right between the top two, ASSUMED)': correct on 400 of the 735 unresolved debates (54.4%)\nunresolved debates are a real share of traffic and need an explicit rule; returning nothing is safe but unhelpful, and the judge row rests on an assumed judge accuracy, not a measured one"
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
    "headingEn": "Genuinely Found: Convergence Included a Wrong Agreement, and Small Scripts Mislead",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಒಮ್ಮತ ತಪ್ಪು ಒಪ್ಪಿಗೆ ಒಳಗೊಂಡಿತ್ತು, ಮತ್ತು ಚಿಕ್ಕ ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳು ದಾರಿತಪ್ಪಿಸುತ್ತವೆ",
    "bodyEn": "Section 1, three scripted questions: on the boundary question two agents started with the same wrong answer, and both topologies moved the right agent toward it (correct-to-wrong 1 each). With the full mesh all three agents agreed on \"no\", converged and wrong (section 2). The sequence question left a three-way split that the full mesh never resolved, so it scored as no answer. The full mesh therefore scored 1 of 3 and the hub 3 of 3, but the hub's result should not be read as better: its sequence answer was right only because the hub agent happened to be the right one and the spokes copied it, and its boundary answer was the plurality of a state that was still swapping every round. Three questions we wrote prove nothing about a protocol.",
    "bodyKn": "ವಿಭಾಗ 1, ಮೂರು ಸ್ಕ್ರಿಪ್ಟ್ ಪ್ರಶ್ನೆಗಳು: ಗಡಿ ಪ್ರಶ್ನೆಯಲ್ಲಿ ಇಬ್ಬರು agents ಒಂದೇ ತಪ್ಪು ಉತ್ತರದಿಂದ ಆರಂಭಿಸಿದರು, ಮತ್ತು ಎರಡೂ topologies ಸರಿಯಾದ agent ಅನ್ನು ಅದರತ್ತ ಸರಿಸಿದವು (ತಲಾ ಸರಿಯಿಂದ-ತಪ್ಪು 1). Full mesh ನೊಂದಿಗೆ ಮೂರೂ agents \"no\" ಗೆ ಒಪ್ಪಿ, ಒಮ್ಮತಕ್ಕೆ ಬಂದು ತಪ್ಪಾದವು (ವಿಭಾಗ 2). ಅನುಕ್ರಮ ಪ್ರಶ್ನೆ full mesh ಎಂದೂ ಪರಿಹರಿಸದ ಮೂರು-ದಿಕ್ಕಿನ ವಿಭಜನೆ ಬಿಟ್ಟಿತು, ಆದ್ದರಿಂದ ಅದು ಉತ್ತರವಿಲ್ಲ ಎಂದು ಅಂಕ ಪಡೆಯಿತು. ಆದ್ದರಿಂದ full mesh 3 ರಲ್ಲಿ 1 ಮತ್ತು hub 3 ರಲ್ಲಿ 3 ಪಡೆಯಿತು, ಆದರೆ hub ನ ಫಲಿತಾಂಶವನ್ನು ಉತ್ತಮ ಎಂದು ಓದಬಾರದು: ಅದರ ಅನುಕ್ರಮ ಉತ್ತರ ಸರಿ ಆದದ್ದು hub agent ಆಕಸ್ಮಿಕವಾಗಿ ಸರಿಯಾಗಿದ್ದು spokes ನಕಲಿಸಿದ್ದರಿಂದ ಮಾತ್ರ, ಮತ್ತು ಅದರ ಗಡಿ ಉತ್ತರ ಇನ್ನೂ ಪ್ರತಿ ಸುತ್ತು ಬದಲಾಗುತ್ತಿದ್ದ ಸ್ಥಿತಿಯ plurality. ನಾವು ಬರೆದ ಮೂರು ಪ್ರಶ್ನೆಗಳು ಪ್ರೋಟೋಕಾಲ್ ಬಗ್ಗೆ ಏನೂ ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Debate Equalled the Vote at a Large Cost; Escalation and Fallbacks Matter",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಚರ್ಚೆ ಭಾರೀ ವೆಚ್ಚದಲ್ಲಿ ಮತಕ್ಕೆ ಸಮವಾಯಿತು; Escalation ಮತ್ತು fallbacks ಮುಖ್ಯ",
    "bodyEn": "Section 3 (3,000 simulated questions, 5 agents, 25 percent hard questions where agents share a trap; costs in assumed units of one call per initial answer plus one per critique operation): a single agent scored 71.5 percent at 1.0 calls, a majority vote 76.8 at 5.0, the full-mesh debate 76.8 at 26.8 with 95.4 percent converged, and the hub debate 71.5 at 15.4, exactly the single agent's result because the spokes copy the hub. The full mesh moved 1,343 agent answers from wrong to right and 535 from right to wrong, yet its accuracy only equalled the vote. Voting first and debating only when the answers split kept 76.8 percent at 18.2 calls. Section 4: debate matched the plain vote exactly at three levels of mistake overlap (83.8, 85.6 and 82.0 percent), because this update rule only spreads the initial plurality; debate cannot add information that no agent had. Section 5: 735 of 3,000 ring debates (24.5 percent) had not converged after 3 rounds; returning nothing was right on 0 of them, the most common answer on 284 (38.6 percent), and a judge assumed to be 80 percent right between the top two on 400 (54.4 percent); the judge row rests on that assumption.",
    "bodyKn": "ವಿಭಾಗ 3 (3,000 ಅನುಕರಿಸಿದ ಪ್ರಶ್ನೆಗಳು, 5 agents, agents ಬಲೆ ಹಂಚಿಕೊಳ್ಳುವ 25 ಶೇಕಡಾ ಕಠಿಣ ಪ್ರಶ್ನೆಗಳು; ವೆಚ್ಚ ಪ್ರತಿ ಆರಂಭಿಕ ಉತ್ತರಕ್ಕೆ ಒಂದು ಕರೆ ಮತ್ತು ಪ್ರತಿ critique operation ಗೆ ಒಂದು ಎಂಬ ಊಹಿಸಿದ ಘಟಕಗಳಲ್ಲಿ): ಒಬ್ಬ agent 1.0 ಕರೆಗಳಲ್ಲಿ 71.5 ಶೇಕಡಾ, ಬಹುಮತ ಮತ 5.0 ರಲ್ಲಿ 76.8, full-mesh ಚರ್ಚೆ 26.8 ರಲ್ಲಿ 76.8 ಮತ್ತು 95.4 ಶೇಕಡಾ ಒಮ್ಮತ, ಮತ್ತು hub ಚರ್ಚೆ 15.4 ರಲ್ಲಿ 71.5, ಒಬ್ಬ agent ನ ಫಲಿತಾಂಶಕ್ಕೆ ನಿಖರವಾಗಿ ಸಮ ಏಕೆಂದರೆ spokes hub ನಕಲಿಸುತ್ತವೆ. Full mesh 1,343 agent ಉತ್ತರಗಳನ್ನು ತಪ್ಪಿನಿಂದ ಸರಿಗೆ ಮತ್ತು 535 ಅನ್ನು ಸರಿಯಿಂದ ತಪ್ಪಿಗೆ ಸರಿಸಿತು, ಆದರೂ ಅದರ ನಿಖರತೆ ಮತಕ್ಕೆ ಮಾತ್ರ ಸಮ. ಮೊದಲು ಮತ ಹಾಕಿ ಉತ್ತರಗಳು ಭಿನ್ನವಾದಾಗ ಮಾತ್ರ ಚರ್ಚಿಸಿದ್ದು 18.2 ಕರೆಗಳಲ್ಲಿ 76.8 ಶೇಕಡಾ ಉಳಿಸಿತು. ವಿಭಾಗ 4: ತಪ್ಪು ಅತಿಕ್ರಮಣದ ಮೂರು ಮಟ್ಟಗಳಲ್ಲಿ ಚರ್ಚೆ ಸರಳ ಮತಕ್ಕೆ ನಿಖರವಾಗಿ ಸಮ (83.8, 85.6 ಮತ್ತು 82.0 ಶೇಕಡಾ), ಏಕೆಂದರೆ ಈ update ನಿಯಮ ಆರಂಭಿಕ plurality ಹರಡುತ್ತದೆ ಮಾತ್ರ; ಯಾವ agent ಗೂ ಇಲ್ಲದ ಮಾಹಿತಿಯನ್ನು ಚರ್ಚೆ ಸೇರಿಸಲಾರದು. ವಿಭಾಗ 5: 3,000 ring ಚರ್ಚೆಗಳಲ್ಲಿ 735 (24.5 ಶೇಕಡಾ) 3 ಸುತ್ತುಗಳ ನಂತರ ಒಮ್ಮತಕ್ಕೆ ಬಂದಿರಲಿಲ್ಲ; ಏನನ್ನೂ ಮರಳಿಸದಿರುವುದು ಅವುಗಳಲ್ಲಿ 0 ಸರಿ, ಅತಿ ಸಾಮಾನ್ಯ ಉತ್ತರ 284 (38.6 ಶೇಕಡಾ), ಮತ್ತು ಮೇಲಿನ ಎರಡರ ನಡುವೆ 80 ಶೇಕಡಾ ಸರಿ ಎಂದು ಊಹಿಸಿದ judge 400 (54.4 ಶೇಕಡಾ); judge ಸಾಲು ಆ ಊಹೆಯ ಮೇಲೆ ನಿಂತಿದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Debate is expensive, so it has to be measured against a vote on the same questions and on cost as well as accuracy. Reporting transitions, convergence and a fallback for unresolved cases turns a plausible-sounding protocol into one you can decide to use or drop.",
    "bodyKn": "ಚರ್ಚೆ ದುಬಾರಿ, ಆದ್ದರಿಂದ ಅದನ್ನು ಅದೇ ಪ್ರಶ್ನೆಗಳಲ್ಲಿ ಮತದ ವಿರುದ್ಧ ಮತ್ತು ನಿಖರತೆಯ ಜೊತೆ ವೆಚ್ಚದಲ್ಲೂ ಅಳೆಯಬೇಕು. ಪರಿವರ್ತನೆಗಳು, ಒಮ್ಮತ ಮತ್ತು ಬಗೆಹರಿಯದ ಪ್ರಕರಣಗಳಿಗೆ fallback ವರದಿ ಮಾಡುವುದು ತೋರಿಕೆಯಲ್ಲಿ ಸರಿಯೆನಿಸುವ ಪ್ರೋಟೋಕಾಲ್ ಅನ್ನು ಬಳಸಲು ಅಥವಾ ಬಿಡಲು ನೀವು ನಿರ್ಧರಿಸಬಹುದಾದದ್ದಾಗಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"more agents arguing is always more accurate.\" Under the assumed error structure the full-mesh debate equalled a majority vote at about five times the calls, and the hub debate equalled a single agent.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಹೆಚ್ಚು agents ವಾದಿಸುವುದು ಯಾವಾಗಲೂ ಹೆಚ್ಚು ನಿಖರ.\" ಊಹಿಸಿದ ದೋಷ ರಚನೆಯಲ್ಲಿ full-mesh ಚರ್ಚೆ ಸುಮಾರು ಐದು ಪಟ್ಟು ಕರೆಗಳಲ್ಲಿ ಬಹುಮತ ಮತಕ್ಕೆ ಸಮ, ಮತ್ತು hub ಚರ್ಚೆ ಒಬ್ಬ agent ಗೆ ಸಮ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Transition: an agent's answer moving between wrong and right. Debate gain: accuracy after debate minus before. Escalation: running the costly protocol only when the cheap one is unsure. Fallback: what to return when a debate does not converge. Baseline: the cheap method debate has to beat.",
    "bodyKn": "Transition: agent ನ ಉತ್ತರ ತಪ್ಪು ಮತ್ತು ಸರಿ ನಡುವೆ ಸರಿಯುವುದು. Debate gain: ಚರ್ಚೆಯ ನಂತರದ ನಿಖರತೆ ಮೈನಸ್ ಮೊದಲಿನದು. Escalation: ಅಗ್ಗದ ವಿಧಾನ ಖಚಿತವಿಲ್ಲದಾಗ ಮಾತ್ರ ದುಬಾರಿ ಪ್ರೋಟೋಕಾಲ್ ಚಲಾಯಿಸುವುದು. Fallback: ಚರ್ಚೆ ಒಮ್ಮತಕ್ಕೆ ಬಾರದಾಗ ಏನು ಮರಳಿಸಬೇಕು. Baseline: ಚರ್ಚೆ ಮೀರಬೇಕಾದ ಅಗ್ಗದ ವಿಧಾನ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Convergence on the scripted boundary question was agreement on a wrong answer. 2) Hub-and-spoke scored 3 of 3 on three scripted questions for reasons of position and parity, not quality. 3) Full-mesh debate equalled a 5-agent vote (76.8 percent) at 26.8 calls against 5.0. 4) Voting first and debating only on a split kept 76.8 percent at 18.2 calls. 5) 24.5 percent of ring debates had not converged after 3 rounds. 6) Fallback choice changed accuracy on those from 0 to 38.6 to 54.4 percent under stated assumptions.",
    "bodyKn": "1) ಸ್ಕ್ರಿಪ್ಟ್ ಗಡಿ ಪ್ರಶ್ನೆಯಲ್ಲಿ ಒಮ್ಮತ ತಪ್ಪು ಉತ್ತರದ ಮೇಲಿನ ಒಪ್ಪಿಗೆ. 2) ಮೂರು ಸ್ಕ್ರಿಪ್ಟ್ ಪ್ರಶ್ನೆಗಳಲ್ಲಿ hub-and-spoke 3 ರಲ್ಲಿ 3 ಪಡೆದದ್ದು ಸ್ಥಾನ ಮತ್ತು ಸಮತೆಯ ಕಾರಣಗಳಿಂದ, ಗುಣಮಟ್ಟದಿಂದ ಅಲ್ಲ. 3) Full-mesh ಚರ್ಚೆ 5-agent ಮತಕ್ಕೆ (76.8 ಶೇಕಡಾ) 5.0 ವಿರುದ್ಧ 26.8 ಕರೆಗಳಲ್ಲಿ ಸಮ. 4) ಮೊದಲು ಮತ ಹಾಕಿ ವಿಭಜನೆಯಲ್ಲಿ ಮಾತ್ರ ಚರ್ಚಿಸಿದ್ದು 18.2 ಕರೆಗಳಲ್ಲಿ 76.8 ಶೇಕಡಾ ಉಳಿಸಿತು. 5) ring ಚರ್ಚೆಗಳ 24.5 ಶೇಕಡಾ 3 ಸುತ್ತುಗಳ ನಂತರ ಒಮ್ಮತಕ್ಕೆ ಬಂದಿರಲಿಲ್ಲ. 6) ಹೇಳಿದ ಊಹೆಗಳಲ್ಲಿ fallback ಆಯ್ಕೆ ಅವುಗಳ ಮೇಲಿನ ನಿಖರತೆಯನ್ನು 0 ರಿಂದ 38.6 ರಿಂದ 54.4 ಶೇಕಡಾಕ್ಕೆ ಬದಲಿಸಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How did the full-mesh debate compare with a plain majority vote in the 3,000-question run?",
      "qKn": "3,000-ಪ್ರಶ್ನೆ ಓಟದಲ್ಲಿ full-mesh ಚರ್ಚೆ ಸರಳ ಬಹುಮತ ಮತಕ್ಕೆ ಹೇಗೆ ಹೋಲಿಸಿತು?",
      "opts": [
       "Much better",
       "Equal accuracy (76.8 percent) at 26.8 calls instead of 5.0",
       "Much worse",
       "Cheaper"
      ],
      "optsKn": [
       "ಬಹಳ ಉತ್ತಮ",
       "ಸಮ ನಿಖರತೆ (76.8 ಶೇಕಡಾ) 5.0 ರ ಬದಲು 26.8 ಕರೆಗಳಲ್ಲಿ",
       "ಬಹಳ ಕೆಟ್ಟದು",
       "ಅಗ್ಗ"
      ],
      "correct": 1
     },
     {
      "q": "Why did the hub debate score exactly the single agent's 71.5 percent?",
      "qKn": "hub ಚರ್ಚೆ ಒಬ್ಬ agent ನ 71.5 ಶೇಕಡಾಕ್ಕೆ ನಿಖರವಾಗಿ ಏಕೆ ಸಮ?",
      "opts": [
       "Coincidence",
       "The spokes copy the hub, so the group answer is essentially the hub's",
       "The hub was removed",
       "Both used 5 calls"
      ],
      "optsKn": [
       "ಕಾಕತಾಳೀಯ",
       "Spokes hub ನಕಲಿಸುತ್ತವೆ, ಆದ್ದರಿಂದ ಗುಂಪಿನ ಉತ್ತರ ಮೂಲತಃ hub ನದು",
       "hub ತೆಗೆಯಲಾಯಿತು",
       "ಎರಡೂ 5 ಕರೆ ಬಳಸಿದವು"
      ],
      "correct": 1
     },
     {
      "q": "What did escalating only when the first answers split achieve?",
      "qKn": "ಮೊದಲ ಉತ್ತರಗಳು ಭಿನ್ನವಾದಾಗ ಮಾತ್ರ escalate ಮಾಡಿದ್ದು ಏನು ಸಾಧಿಸಿತು?",
      "opts": [
       "Lower accuracy",
       "The same 76.8 percent at 18.2 calls instead of 26.8",
       "Higher accuracy",
       "No debate at all"
      ],
      "optsKn": [
       "ಕಡಿಮೆ ನಿಖರತೆ",
       "ಅದೇ 76.8 ಶೇಕಡಾ 26.8 ರ ಬದಲು 18.2 ಕರೆಗಳಲ್ಲಿ",
       "ಹೆಚ್ಚು ನಿಖರತೆ",
       "ಚರ್ಚೆಯೇ ಇಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "Why should the hub topology's 3 of 3 on the scripted questions not be trusted?",
      "qKn": "ಸ್ಕ್ರಿಪ್ಟ್ ಪ್ರಶ್ನೆಗಳಲ್ಲಿ hub topology ಯ 3 ರಲ್ಲಿ 3 ಅನ್ನು ಏಕೆ ನಂಬಬಾರದು?",
      "opts": [
       "It is too high",
       "It came from the hub agent being right by chance and from the parity of a still-swapping state",
       "The questions were real",
       "It used a judge"
      ],
      "optsKn": [
       "ಅದು ತುಂಬಾ ಹೆಚ್ಚು",
       "ಅದು hub agent ಆಕಸ್ಮಿಕವಾಗಿ ಸರಿ ಇದ್ದದ್ದರಿಂದ ಮತ್ತು ಇನ್ನೂ ಬದಲಾಗುತ್ತಿದ್ದ ಸ್ಥಿತಿಯ ಸಮತೆಯಿಂದ ಬಂತು",
       "ಪ್ರಶ್ನೆಗಳು ನಿಜವಾಗಿದ್ದವು",
       "ಅದು judge ಬಳಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What status does the 54.4 percent judge fallback have?",
      "qKn": "54.4 ಶೇಕಡಾ judge fallback ನ ಸ್ಥಿತಿ ಏನು?",
      "opts": [
       "Measured with a real judge",
       "It rests on an assumed 80 percent judge accuracy",
       "A published figure",
       "Guaranteed"
      ],
      "optsKn": [
       "ನಿಜ judge ನೊಂದಿಗೆ ಅಳೆದದ್ದು",
       "ಅದು ಊಹಿಸಿದ 80 ಶೇಕಡಾ judge ನಿಖರತೆಯ ಮೇಲೆ ನಿಂತಿದೆ",
       "ಪ್ರಕಟಿತ ಅಂಕಿ",
       "ಖಾತರಿ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
