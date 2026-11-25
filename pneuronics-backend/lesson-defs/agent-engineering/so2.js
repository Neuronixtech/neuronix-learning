module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215e9",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Society of Mind and Multi-Agent Debate (Part 2 of 3) — A Structured Debate With a Verifier",
 "titleKn": "ಸೊಸೈಟಿ ಆಫ್ ಮೈಂಡ್ ಮತ್ತು ಬಹು-ಏಜೆಂಟ್ ಚರ್ಚೆ (ಭಾಗ 2 / 3) — ಪರಿಶೀಲಕದೊಂದಿಗೆ ರಚನಾತ್ಮಕ ಚರ್ಚೆ",
 "desc": "Build a structured debate engine and compare a verifier, peer-only revision, thresholds, calibration and cost.",
 "descKn": "ರಚನಾತ್ಮಕ ಚರ್ಚಾ ಎಂಜಿನ್ ನಿರ್ಮಿಸಿ ಮತ್ತು ಪರಿಶೀಲಕ, peer-only ಪರಿಷ್ಕರಣೆ, ಮಿತಿಗಳು, ಕ್ಯಾಲಿಬ್ರೇಶನ್ ಹಾಗೂ ವೆಚ್ಚ ಹೋಲಿಸಿ.",
 "objectives": [
  "Build structured messages.",
  "Add a verifier.",
  "See a wrong majority.",
  "Set a threshold.",
  "Compute a Brier score."
 ],
 "objectivesKn": [
  "ರಚನಾತ್ಮಕ ಸಂದೇಶಗಳನ್ನು ನಿರ್ಮಿಸಿ.",
  "ಪರಿಶೀಲಕ ಸೇರಿಸಿ.",
  "ತಪ್ಪು ಬಹುಮತ ನೋಡಿ.",
  "ಮಿತಿ ಇಡಿ.",
  "Brier ಅಂಕ ಲೆಕ್ಕ ಹಾಕಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Society of Mind and Multi-Agent Debate (Part 2 of 3)",
    "textKn": "ಸೊಸೈಟಿ ಆಫ್ ಮೈಂಡ್ ಮತ್ತು ಬಹು-ಏಜೆಂಟ್ ಚರ್ಚೆ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: a structured scripted debate with a verifier, a peer-only run, a wrong majority, consensus thresholds, unjustified-revision flags, calibration, cost and a transcript. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind a numerical multi-agent debate, a structured scripted debate engine and a production-shaped engine with budgets, retries, round isolation, an injection check, an approval gate and a generated configuration document, not the real software, and agents are scripted or a numerical update rule, the provider is a script with no network and no model, the injection demo uses a toy reviser that obeys a marker, and nothing here measures whether real LLM debate improves accuracy, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The Du et al. paper and the 129-agent society are described in the lesson and were not reproduced, and no real model was called. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಪರಿಶೀಲಕದೊಂದಿಗೆ ರಚನಾತ್ಮಕ ಸ್ಕ್ರಿಪ್ಟ್ ಚರ್ಚೆ, peer-only ಓಟ, ತಪ್ಪು ಬಹುಮತ, ಒಪ್ಪಿಗೆ ಮಿತಿಗಳು, ಸಮರ್ಥನೆಯಿಲ್ಲದ ಪರಿಷ್ಕರಣೆ ಫ್ಲ್ಯಾಗ್, ಕ್ಯಾಲಿಬ್ರೇಶನ್, ವೆಚ್ಚ ಮತ್ತು ಟ್ರಾನ್ಸ್‌ಕ್ರಿಪ್ಟ್. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಸಂಖ್ಯಾತ್ಮಕ ಬಹು-ಏಜೆಂಟ್ ಚರ್ಚೆ, ರಚನಾತ್ಮಕ ಸ್ಕ್ರಿಪ್ಟ್ ಚರ್ಚಾ ಎಂಜಿನ್ ಮತ್ತು ಬಜೆಟ್‌ಗಳು, ಮರುಪ್ರಯತ್ನಗಳು, ಸುತ್ತು ಪ್ರತ್ಯೇಕತೆ, injection ಪರಿಶೀಲನೆ, ಅನುಮೋದನೆ ದ್ವಾರ ಮತ್ತು ರಚಿತ ಸಂರಚನಾ ದಾಖಲೆಯಿರುವ ಉತ್ಪಾದನಾ-ಆಕಾರದ ಎಂಜಿನ್ ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಏಜೆಂಟ್‌ಗಳು ಸ್ಕ್ರಿಪ್ಟ್ ಅಥವಾ ಸಂಖ್ಯಾತ್ಮಕ ನವೀಕರಣ ನಿಯಮ, provider ನೆಟ್‌ವರ್ಕ್ ಮತ್ತು ಮಾದರಿ ಇಲ್ಲದ ಸ್ಕ್ರಿಪ್ಟ್, injection ಡೆಮೊ ಗುರುತು ಪಾಲಿಸುವ ಆಟಿಕೆ reviser ಬಳಸುತ್ತದೆ, ಮತ್ತು ನಿಜವಾದ LLM ಚರ್ಚೆ ನಿಖರತೆ ಸುಧಾರಿಸುತ್ತದೆಯೇ ಎಂದು ಇಲ್ಲಿ ಯಾವುದೂ ಅಳೆಯುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ನೀಡಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. Du et al. ಪ್ರಬಂಧ ಮತ್ತು 129-ಏಜೆಂಟ್ ಸಮಾಜ lesson ನಲ್ಲಿ ವಿವರಿಸಲ್ಪಟ್ಟಿವೆ ಮತ್ತು ಪುನರುತ್ಪಾದಿಸಲಾಗಿಲ್ಲ, ಮತ್ತು ಯಾವುದೇ ನಿಜ ಮಾದರಿ ಕರೆಯಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Debate Needs Something Outside the Agents",
    "textKn": "ಚರ್ಚೆಗೆ ಏಜೆಂಟ್‌ಗಳ ಹೊರಗಿನ ಏನಾದರೂ ಬೇಕು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Structured Debate Engine With a Verifier",
    "headingKn": "ಪರಿಶೀಲಕದೊಂದಿಗೆ ರಚನಾತ್ಮಕ ಚರ್ಚಾ ಎಂಜಿನ್",
    "bodyEn": "Numbers cannot be averaged for real arguments, so this part uses structured messages with an answer, a confidence, a revision marker and a previous answer. It runs the notebook question with agents starting at 540, 486 and 480, first with a verifier that does the arithmetic and then with peers only, then a wrong majority, consensus thresholds, a flag for revisions without evidence, the Brier score of the lesson example, the token estimate and a transcript that is saved and reloaded.",
    "bodyKn": "ನಿಜ ವಾದಗಳನ್ನು ಸರಾಸರಿ ಮಾಡಲಾಗದ ಕಾರಣ ಈ ಭಾಗ ಉತ್ತರ, ವಿಶ್ವಾಸ, ಪರಿಷ್ಕರಣೆ ಗುರುತು ಮತ್ತು ಹಿಂದಿನ ಉತ್ತರ ಇರುವ ರಚನಾತ್ಮಕ ಸಂದೇಶಗಳನ್ನು ಬಳಸುತ್ತದೆ. ಇದು 540, 486 ಮತ್ತು 480 ರಿಂದ ಆರಂಭಿಸುವ ಏಜೆಂಟ್‌ಗಳೊಂದಿಗೆ notebook ಪ್ರಶ್ನೆಯನ್ನು ಮೊದಲು ಅಂಕಗಣಿತ ಮಾಡುವ ಪರಿಶೀಲಕದೊಂದಿಗೆ, ನಂತರ ಸಹವರ್ತಿಗಳು ಮಾತ್ರ ಇರುವಂತೆ ಓಡಿಸುತ್ತದೆ, ಜೊತೆಗೆ ತಪ್ಪು ಬಹುಮತ, ಒಪ್ಪಿಗೆ ಮಿತಿಗಳು, ಸಾಕ್ಷಿಯಿಲ್ಲದ ಪರಿಷ್ಕರಣೆಗಳ ಫ್ಲ್ಯಾಗ್, lesson ಉದಾಹರಣೆಯ Brier ಅಂಕ, token ಅಂದಾಜು ಮತ್ತು ಉಳಿಸಿ ಮರುಲೋಡ್ ಮಾಡಿದ ಟ್ರಾನ್ಸ್‌ಕ್ರಿಪ್ಟ್ ಅನ್ನೂ ನಡೆಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Structured Debate",
    "headingKn": "ರಚನಾತ್ಮಕ ಚರ್ಚೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a verifier resolves what a vote cannot</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">proposals</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">independent</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">exchange</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">peers answers</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">verifier</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">outside the agents</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">stop</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">consensus + evidence</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a verifier resolves what a vote cannot</text></svg>",
    "captionEn": "Independent proposals, an exchange, a check outside the agents and a stopping rule.",
    "captionKn": "ಸ್ವತಂತ್ರ ಪ್ರಸ್ತಾವನೆಗಳು, ವಿನಿಮಯ, ಏಜೆಂಟ್‌ಗಳ ಹೊರಗಿನ ಪರಿಶೀಲನೆ ಮತ್ತು ನಿಲ್ಲಿಸುವ ನಿಯಮ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The six experiments",
    "headingKn": "ಆರು ಪ್ರಯೋಗಗಳು",
    "headers": [
     "Experiment",
     "What it checks"
    ],
    "rows": [
     [
      "with verifier",
      "agents adopt 486 and stop early"
     ],
     [
      "peer only",
      "three different answers, nobody moves"
     ],
     [
      "wrong majority",
      "540, 540, 486"
     ],
     [
      "consensus",
      "metrics and the 0.67 against 2/3 threshold"
     ],
     [
      "unjustified change",
      "copying the most confident agent"
     ],
     [
      "calibration and cost",
      "Brier, tokens and the transcript"
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
    "filename": "so_2.py",
    "headingEn": "Messages and checks",
    "headingKn": "ಸಂದೇಶಗಳು ಮತ್ತು ಪರಿಶೀಲನೆಗಳು",
    "descEn": "Message records the answer, confidence, previous answer and a verified marker, and verify_notebooks, consensus and majority are the checks.",
    "descKn": "Message ಉತ್ತರ, ವಿಶ್ವಾಸ, ಹಿಂದಿನ ಉತ್ತರ ಮತ್ತು verified ಗುರುತು ದಾಖಲಿಸುತ್ತದೆ, ಮತ್ತು verify_notebooks, consensus ಹಾಗೂ majority ಪರಿಶೀಲನೆಗಳು.",
    "code": "class Message:\n    agent: str\n    round: int\n    answer: int\n    confidence: float\n    reasoning: str\n    evidence: list = field(default_factory=list)\n    revised: bool = False\n    previous: Optional[int] = None\n    verified: bool = False\n\n\ndef verify_notebooks():\n    subtotal = 12 * 45\n    discount = subtotal * 10 // 100\n    return subtotal - discount\n\n\ndef consensus(answers):\n    return max(Counter(answers).values()) / len(answers)\n\n\ndef majority(answers):\n    c = Counter(answers)\n    top = max(c.values())\n    winners = [a for a, n in c.items() if n == top]\n    return winners[0] if len(winners) == 1 else None"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "so_2.py",
    "headingEn": "The debate loop",
    "headingKn": "ಚರ್ಚೆ ಲೂಪ್",
    "descEn": "run_debate stops on a consensus threshold or a round limit, revises from a verifier or from the peer majority, and brier scores calibration.",
    "descKn": "run_debate ಒಪ್ಪಿಗೆ ಮಿತಿ ಅಥವಾ ಸುತ್ತು ಮಿತಿಯಲ್ಲಿ ನಿಲ್ಲುತ್ತದೆ, ಪರಿಶೀಲಕ ಅಥವಾ ಸಹವರ್ತಿ ಬಹುಮತದಿಂದ ಪರಿಷ್ಕರಿಸುತ್ತದೆ, ಮತ್ತು brier ಕ್ಯಾಲಿಬ್ರೇಶನ್ ಅಂಕ ನೀಡುತ್ತದೆ.",
    "code": "def peer_revise(own, peers):\n    # peer-only: adopt the strict majority of the peers if there is one, else keep your own answer\n    m = majority(peers)\n    return m if m is not None else own\n\n\ndef run_debate(initial, rounds=3, threshold=1.0, use_verifier=False, truth_check=None):\n    state = {\"messages\": [], \"stop\": None, \"rounds\": 0}\n    cur = dict(initial)\n    state[\"messages\"] += [Message(n, 1, a, 0.7, \"initial\", []) for n, a in cur.items()]\n    state[\"rounds\"] = 1\n    for r in range(1, rounds + 1):\n        if consensus(list(cur.values())) >= threshold:\n            state[\"stop\"] = \"consensus threshold reached\"\n            break\n        if r == rounds:\n            state[\"stop\"] = \"max rounds reached\"\n            break\n        new = {}\n        v = verify_notebooks() if use_verifier else None\n        for n, a in cur.items():\n            peers = [x for k, x in cur.items() if k != n]\n            new_a = v if v is not None else peer_revise(a, peers)\n            state[\"messages\"].append(Message(n, r + 1, new_a, 0.8, \"verified\" if v is not None else \"peer\", [], new_a != a, a, v is not None))\n            new[n] = new_a\n        cur = new\n        state[\"rounds\"] = r + 1\n    state[\"final\"] = majority(list(cur.values()))\n    state[\"answers\"] = cur\n    return state\n\n\ndef brier(preds, outs):\n    if len(preds) != len(outs) or not preds:\n        raise ValueError(\"need equal, non-empty lists\")\n    return sum((p - o) ** 2 for p, o in zip(preds, outs)) / len(preds)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "so_2.py",
    "headingEn": "The experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the six experiments in order and prints the real result of each.",
    "descKn": "main() ಆರು ಪ್ರಯೋಗಗಳನ್ನು ಕ್ರಮವಾಗಿ ಓಡಿಸಿ ಪ್ರತಿಯೊಂದರ ನಿಜ ಫಲಿತಾಂಶ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    truth = verify_notebooks()\n    start = {\"A\": 540, \"B\": 486, \"C\": 480}\n\n    section(\"1. Genuinely running: debate with a verifier and early stopping\")\n    s = run_debate(start, rounds=3, threshold=1.0, use_verifier=True)\n    print(\"verified answer:\", truth, \"| rounds used:\", s[\"rounds\"], \"| final:\", s[\"final\"], \"| stop:\", s[\"stop\"], \"| messages:\", len(s[\"messages\"]))\n    print(\"round 1 consensus:\", round(consensus(list(start.values())), 4), \"| round 2 answers:\", s[\"answers\"])\n    print(\"all three agents adopt 486 in round 2 and the debate stops before round 3 with six messages, but the verifier already knows the arithmetic, so this shows a shared check resolving a disagreement and does not show that the peers corrected each other.\")\n\n    section(\"2. Genuinely running: the same start with no verifier (peer-only)\")\n    s2 = run_debate(start, rounds=3, threshold=1.0, use_verifier=False)\n    print(\"answers after the run:\", s2[\"answers\"], \"| final:\", s2[\"final\"], \"| stop:\", s2[\"stop\"], \"| revisions:\", sum(m.revised for m in s2[\"messages\"]))\n    print(\"with three different answers there is no strict majority among the peers, so nobody revises, the debate runs to its round limit and no majority exists; counting answers is not the same as weighing arguments, and an engine that only votes cannot reproduce the idea of debate.\")\n\n    section(\"3. Genuinely running: a wrong majority\")\n    wrong = {\"A\": 540, \"B\": 540, \"C\": 486}\n    print(\"independent vote:\", majority(list(wrong.values())), \"| correct:\", majority(list(wrong.values())) == truth)\n    p = run_debate(wrong, rounds=3, use_verifier=False)\n    v = run_debate(wrong, rounds=3, use_verifier=True)\n    print(\"peer-only debate final:\", p[\"final\"], \"| with verifier final:\", v[\"final\"])\n    print(\"voting returns 540, the peer-only debate also stays at 540 because for A and B the two peers disagree so they keep 540, and C sees two peers saying 540 and gives way, and only the verifier reaches 486; an exchange of answers can reinforce a shared mistake, so correctness needs a source outside the agents.\")\n\n    section(\"4. Genuinely running: consensus metrics and thresholds\")\n    for ans in ([\"a\", \"b\", \"c\"], [\"a\", \"a\", \"b\"], [\"a\", \"a\", \"a\"], [\"a\", \"a\", \"b\", \"b\"]):\n        print(ans, \"->\", round(consensus(ans), 4))\n    print(\"text normalisation:\", text_consensus([\"Approved\", \"approved\", \" APPROVED \"]))\n    two_thirds = consensus([486, 486, 540])\n    print(\"2 of 3 agree:\", round(two_thirds, 6), \"| meets 0.67:\", two_thirds >= 0.67, \"| meets 2/3:\", two_thirds >= 2 / 3)\n    print(\"two agreeing agents out of three score 0.666667, which falls just below a threshold of 0.67 and meets an exact 2/3, and exact string matching only treats short categorical answers as equal after normalising case and spaces; high consensus is strength of agreement and says nothing about correctness.\")\n\n    section(\"5. Genuinely running: flagging answer changes that carry no evidence\")\n    conf = {\"A\": 0.5, \"B\": 0.6, \"C\": 0.99}\n    cur = {\"A\": 100, \"B\": 120, \"C\": 140}\n    top = max(conf, key=conf.get)\n    msgs = [Message(n, 2, cur[top], conf[n], f\"{top} sounded certain\", [], cur[top] != cur[n], cur[n], False) for n in cur]\n    print(\"follow the most confident peer:\", {m.agent: m.answer for m in msgs}, \"| flagged as unjustified:\", flag_unjustified(msgs))\n    ver = run_debate(start, rounds=3, use_verifier=True)\n    print(\"verified run, flagged as unjustified:\", flag_unjustified(ver[\"messages\"]))\n    print(\"when agents A and B simply copy the most confident agent C they reach 140 and both revisions are flagged because they carry no verified marker, while the verified run flags nothing; the flag reports revisions without a marker, which is a warning sign and not proof of sycophancy, and it cannot judge whether the marker itself is trustworthy.\")\n\n    section(\"6. Genuinely computing: calibration, cost and the transcript\")\n    print(\"brier score:\", round(brier([0.9, 0.8, 0.6, 0.7], [1, 0, 1, 1]), 4))\n    print(\"tokens for 5 agents x 4 rounds x 1200:\", 5 * 4 * 1200, \"| 3x3, 5x5, 10x10 at 1000:\", [n * r * 1000 for n, r in ((3, 3), (5, 5), (10, 10))])\n    text = json.dumps({\"question\": \"What is the discounted price?\", \"rounds\": s[\"rounds\"], \"final\": s[\"final\"], \"stop\": s[\"stop\"], \"messages\": [asdict(m) for m in s[\"messages\"]]}, ensure_ascii=False)\n    back = json.loads(text)\n    print(\"transcript round-trips:\", back[\"final\"] == 486 and len(back[\"messages\"]) == 6, \"| bytes:\", len(text.encode(\"utf-8\")))\n    print(\"the Brier score of the lesson example is 0.225 and not the 0.1725 printed in the lesson (the squared errors 0.01, 0.64, 0.16 and 0.09 add to 0.90 over four predictions), 20 responses of 1200 tokens come to 24000 and the response count grows as N times R while real input cost grows faster because later rounds carry the history; the figures are arithmetic on invented inputs and the transcript only proves the engine can save and reload its messages.\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: debate with a verifier and early stopping ---\nverified answer: 486 | rounds used: 2 | final: 486 | stop: consensus threshold reached | messages: 6\nround 1 consensus: 0.3333 | round 2 answers: {'A': 486, 'B': 486, 'C': 486}\nall three agents adopt 486 in round 2 and the debate stops before round 3 with six messages, but the verifier already knows the arithmetic, so this shows a shared check resolving a disagreement and does not show that the peers corrected each other.\n\n--- 2. Genuinely running: the same start with no verifier (peer-only) ---\nanswers after the run: {'A': 540, 'B': 486, 'C': 480} | final: None | stop: max rounds reached | revisions: 0\nwith three different answers there is no strict majority among the peers, so nobody revises, the debate runs to its round limit and no majority exists; counting answers is not the same as weighing arguments, and an engine that only votes cannot reproduce the idea of debate.\n\n--- 3. Genuinely running: a wrong majority ---\nindependent vote: 540 | correct: False\npeer-only debate final: 540 | with verifier final: 486\nvoting returns 540, the peer-only debate also stays at 540 because for A and B the two peers disagree so they keep 540, and C sees two peers saying 540 and gives way, and only the verifier reaches 486; an exchange of answers can reinforce a shared mistake, so correctness needs a source outside the agents.\n\n--- 4. Genuinely running: consensus metrics and thresholds ---\n['a', 'b', 'c'] -> 0.3333\n['a', 'a', 'b'] -> 0.6667\n['a', 'a', 'a'] -> 1.0\n['a', 'a', 'b', 'b'] -> 0.5\ntext normalisation: 1.0\n2 of 3 agree: 0.666667 | meets 0.67: False | meets 2/3: True\ntwo agreeing agents out of three score 0.666667, which falls just below a threshold of 0.67 and meets an exact 2/3, and exact string matching only treats short categorical answers as equal after normalising case and spaces; high consensus is strength of agreement and says nothing about correctness.\n\n--- 5. Genuinely running: flagging answer changes that carry no evidence ---\nfollow the most confident peer: {'A': 140, 'B': 140, 'C': 140} | flagged as unjustified: ['A', 'B']\nverified run, flagged as unjustified: []\nwhen agents A and B simply copy the most confident agent C they reach 140 and both revisions are flagged because they carry no verified marker, while the verified run flags nothing; the flag reports revisions without a marker, which is a warning sign and not proof of sycophancy, and it cannot judge whether the marker itself is trustworthy.\n\n--- 6. Genuinely computing: calibration, cost and the transcript ---\nbrier score: 0.225\ntokens for 5 agents x 4 rounds x 1200: 24000 | 3x3, 5x5, 10x10 at 1000: [9000, 25000, 100000]\ntranscript round-trips: True | bytes: 1062\nthe Brier score of the lesson example is 0.225 and not the 0.1725 printed in the lesson (the squared errors 0.01, 0.64, 0.16 and 0.09 add to 0.90 over four predictions), 20 responses of 1200 tokens come to 24000 and the response count grows as N times R while real input cost grows faster because later rounds carry the history; the figures are arithmetic on invented inputs and the transcript only proves the engine can save and reload its messages."
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
    "headingEn": "Experiment 1: Debate with a verifier and early stopping",
    "headingKn": "ಪ್ರಯೋಗ 1: Debate with a verifier and early stopping",
    "bodyEn": "What it ran: Debate with a verifier and early stopping. What the lab concluded: all three agents adopt 486 in round 2 and the debate stops before round 3 with six messages, but the verifier already knows the arithmetic, so this shows a shared check resolving a disagreement and does not show that the peers corrected each other.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Debate with a verifier and early stopping. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): all three agents adopt 486 in round 2 and the debate stops before round 3 with six messages, but the verifier already knows the arithmetic, so this shows a shared check resolving a disagreement and does not show that the peers corrected each other."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: debate with a verifier and early stopping ---\nverified answer: 486 | rounds used: 2 | final: 486 | stop: consensus threshold reached | messages: 6\nround 1 consensus: 0.3333 | round 2 answers: {'A': 486, 'B': 486, 'C': 486}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: The same start with no verifier (peer-only)",
    "headingKn": "ಪ್ರಯೋಗ 2: The same start with no verifier (peer-only)",
    "bodyEn": "What it ran: The same start with no verifier (peer-only). What the lab concluded: with three different answers there is no strict majority among the peers, so nobody revises, the debate runs to its round limit and no majority exists; counting answers is not the same as weighing arguments, and an engine that only votes cannot reproduce the idea of debate.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The same start with no verifier (peer-only). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): with three different answers there is no strict majority among the peers, so nobody revises, the debate runs to its round limit and no majority exists; counting answers is not the same as weighing arguments, and an engine that only votes cannot reproduce the idea of debate."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: the same start with no verifier (peer-only) ---\nanswers after the run: {'A': 540, 'B': 486, 'C': 480} | final: None | stop: max rounds reached | revisions: 0"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: A wrong majority",
    "headingKn": "ಪ್ರಯೋಗ 3: A wrong majority",
    "bodyEn": "What it ran: A wrong majority. What the lab concluded: voting returns 540, the peer-only debate also stays at 540 because for A and B the two peers disagree so they keep 540, and C sees two peers saying 540 and gives way, and only the verifier reaches 486; an exchange of answers can reinforce a shared mistake, so correctness needs a source outside the agents.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A wrong majority. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): voting returns 540, the peer-only debate also stays at 540 because for A and B the two peers disagree so they keep 540, and C sees two peers saying 540 and gives way, and only the verifier reaches 486; an exchange of answers can reinforce a shared mistake, so correctness needs a source outside the agents."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: a wrong majority ---\nindependent vote: 540 | correct: False\npeer-only debate final: 540 | with verifier final: 486"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Consensus metrics and thresholds",
    "headingKn": "ಪ್ರಯೋಗ 4: Consensus metrics and thresholds",
    "bodyEn": "What it ran: Consensus metrics and thresholds. What the lab concluded: two agreeing agents out of three score 0.666667, which falls just below a threshold of 0.67 and meets an exact 2/3, and exact string matching only treats short categorical answers as equal after normalising case and spaces; high consensus is strength of agreement and says nothing about correctness.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Consensus metrics and thresholds. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): two agreeing agents out of three score 0.666667, which falls just below a threshold of 0.67 and meets an exact 2/3, and exact string matching only treats short categorical answers as equal after normalising case and spaces; high consensus is strength of agreement and says nothing about correctness."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: consensus metrics and thresholds ---\n['a', 'b', 'c'] -> 0.3333\n['a', 'a', 'b'] -> 0.6667\n['a', 'a', 'a'] -> 1.0\n['a', 'a', 'b', 'b'] -> 0.5\ntext normalisation: 1.0\n2 of 3 agree: 0.666667 | meets 0.67: False | meets 2/3: True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Flagging answer changes that carry no evidence",
    "headingKn": "ಪ್ರಯೋಗ 5: Flagging answer changes that carry no evidence",
    "bodyEn": "What it ran: Flagging answer changes that carry no evidence. What the lab concluded: when agents A and B simply copy the most confident agent C they reach 140 and both revisions are flagged because they carry no verified marker, while the verified run flags nothing; the flag reports revisions without a marker, which is a warning sign and not proof of sycophancy, and it cannot judge whether the marker itself is trustworthy.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Flagging answer changes that carry no evidence. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): when agents A and B simply copy the most confident agent C they reach 140 and both revisions are flagged because they carry no verified marker, while the verified run flags nothing; the flag reports revisions without a marker, which is a warning sign and not proof of sycophancy, and it cannot judge whether the marker itself is trustworthy."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: flagging answer changes that carry no evidence ---\nfollow the most confident peer: {'A': 140, 'B': 140, 'C': 140} | flagged as unjustified: ['A', 'B']\nverified run, flagged as unjustified: []"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: Calibration, cost and the transcript",
    "headingKn": "ಪ್ರಯೋಗ 6: Calibration, cost and the transcript",
    "bodyEn": "What it ran: Calibration, cost and the transcript. What the lab concluded: the Brier score of the lesson example is 0.225 and not the 0.1725 printed in the lesson (the squared errors 0.01, 0.64, 0.16 and 0.09 add to 0.90 over four predictions), 20 responses of 1200 tokens come to 24000 and the response count grows as N times R while real input cost grows faster because later rounds carry the history; the figures are arithmetic on invented inputs and the transcript only proves the engine can save and reload its messages.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Calibration, cost and the transcript. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the Brier score of the lesson example is 0.225 and not the 0.1725 printed in the lesson (the squared errors 0.01, 0.64, 0.16 and 0.09 add to 0.90 over four predictions), 20 responses of 1200 tokens come to 24000 and the response count grows as N times R while real input cost grows faster because later rounds carry the history; the figures are arithmetic on invented inputs and the transcript only proves the engine can save and reload its messages."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely computing: calibration, cost and the transcript ---\nbrier score: 0.225\ntokens for 5 agents x 4 rounds x 1200: 24000 | 3x3, 5x5, 10x10 at 1000: [9000, 25000, 100000]\ntranscript round-trips: True | bytes: 1062"
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
    "headingEn": "Genuinely Found: The Verifier Did the Work",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕೆಲಸ ಮಾಡಿದ್ದು ಪರಿಶೀಲಕ",
    "bodyEn": "Section 1: with a verifier all three agents reached 486 in round 2 and the run stopped with six messages. Section 2: peer-only from 540, 486 and 480 produced 0 revisions, stop reason max rounds reached and no majority (final None).",
    "bodyKn": "ವಿಭಾಗ 1: ಪರಿಶೀಲಕದೊಂದಿಗೆ ಮೂರೂ ಏಜೆಂಟ್‌ಗಳು ಸುತ್ತು 2 ರಲ್ಲಿ 486 ತಲುಪಿ ಓಟ ಆರು ಸಂದೇಶಗಳೊಂದಿಗೆ ನಿಂತಿತು. ವಿಭಾಗ 2: 540, 486 ಮತ್ತು 480 ರಿಂದ peer-only 0 ಪರಿಷ್ಕರಣೆ, ನಿಲ್ಲಿಸುವ ಕಾರಣ max rounds reached ಮತ್ತು ಬಹುಮತ ಇಲ್ಲ (final None) ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Wrong Majority Survives Debate",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ತಪ್ಪು ಬಹುಮತ ಚರ್ಚೆಯಲ್ಲಿ ಉಳಿಯುತ್ತದೆ",
    "bodyEn": "Section 3: voting returned 540 and the peer-only debate also ended at 540 because agent C saw two peers at 540 and gave way, while with the verifier the result was 486. Section 4: two of three agreeing is 0.666667, which fails a 0.67 threshold and meets 2/3.",
    "bodyKn": "ವಿಭಾಗ 3: ಮತದಾನ 540 ನೀಡಿತು ಮತ್ತು peer-only ಚರ್ಚೆಯೂ 540 ರಲ್ಲಿ ಮುಗಿಯಿತು, ಏಕೆಂದರೆ ಏಜೆಂಟ್ C ಇಬ್ಬರು ಸಹವರ್ತಿಗಳನ್ನು 540 ರಲ್ಲಿ ಕಂಡು ಮಣಿಯಿತು, ಪರಿಶೀಲಕದೊಂದಿಗೆ ಫಲಿತಾಂಶ 486. ವಿಭಾಗ 4: ಮೂರರಲ್ಲಿ ಎರಡು ಒಪ್ಪಿದರೆ 0.666667, ಇದು 0.67 ಮಿತಿಗೆ ವಿಫಲ ಮತ್ತು 2/3 ಗೆ ಪಾಸು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Lesson Brier Score Is Off",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: lesson ನ Brier ಅಂಕ ತಪ್ಪು",
    "bodyEn": "Section 6: the Brier score of predictions 0.9, 0.8, 0.6, 0.7 against outcomes 1, 0, 1, 1 is 0.225, not the 0.1725 printed in the lesson. Section 5: following the most confident peer gave 140 for all and flagged A and B. Tokens: 24000 for 5x4x1200, and 9000, 25000 and 100000 for 3x3, 5x5, 10x10.",
    "bodyKn": "ವಿಭಾಗ 6: ಮುನ್ಸೂಚನೆಗಳು 0.9, 0.8, 0.6, 0.7 ಮತ್ತು ಫಲಿತಾಂಶಗಳು 1, 0, 1, 1 ರ Brier ಅಂಕ 0.225, lesson ನಲ್ಲಿ ಮುದ್ರಿಸಿದ 0.1725 ಅಲ್ಲ. ವಿಭಾಗ 5: ಅತ್ಯಂತ ವಿಶ್ವಾಸದ ಸಹವರ್ತಿಯನ್ನು ಅನುಸರಿಸಿದರೆ ಎಲ್ಲರಿಗೂ 140 ಸಿಕ್ಕಿ A ಮತ್ತು B ಫ್ಲ್ಯಾಗ್ ಆದವು. Tokens: 5x4x1200 ಗೆ 24000, ಮತ್ತು 3x3, 5x5, 10x10 ಗೆ 9000, 25000 ಮತ್ತು 100000."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A vote or an exchange of answers can only redistribute what the agents already believe, so correctness needs a check that does not come from them, and a stopping rule needs evidence as well as agreement.",
    "bodyKn": "ಮತ ಅಥವಾ ಉತ್ತರಗಳ ವಿನಿಮಯ ಏಜೆಂಟ್‌ಗಳು ಈಗಾಗಲೇ ನಂಬಿರುವುದನ್ನು ಮಾತ್ರ ಮರುಹಂಚಬಲ್ಲದು, ಆದ್ದರಿಂದ ಸರಿಯಾಗಿರಲು ಅವುಗಳಿಂದ ಬರದ ಪರಿಶೀಲನೆ ಬೇಕು, ಮತ್ತು ನಿಲ್ಲಿಸುವ ನಿಯಮಕ್ಕೆ ಒಪ್ಪಿಗೆಯ ಜೊತೆಗೆ ಸಾಕ್ಷಿ ಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the debate corrected the answer.\" In experiment 1 the verifier supplied 486 and the peers contributed nothing.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಚರ್ಚೆ ಉತ್ತರ ಸರಿಪಡಿಸಿತು.\" ಪ್ರಯೋಗ 1 ರಲ್ಲಿ ಪರಿಶೀಲಕ 486 ನೀಡಿತು ಮತ್ತು ಸಹವರ್ತಿಗಳು ಏನೂ ನೀಡಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Verifier: a check outside the agents. Peer-only: revising from other agents answers with no verifier. Consensus: the largest share of agents on one answer. Brier score: mean squared gap between stated probability and outcome. Transcript: the saved record of every message.",
    "bodyKn": "ಪರಿಶೀಲಕ: ಏಜೆಂಟ್‌ಗಳ ಹೊರಗಿನ ಪರಿಶೀಲನೆ. Peer-only: ಪರಿಶೀಲಕ ಇಲ್ಲದೆ ಇತರ ಏಜೆಂಟ್‌ಗಳ ಉತ್ತರಗಳಿಂದ ಪರಿಷ್ಕರಿಸುವುದು. ಒಪ್ಪಿಗೆ: ಒಂದು ಉತ್ತರದ ಮೇಲಿನ ಏಜೆಂಟ್‌ಗಳ ದೊಡ್ಡ ಪಾಲು. Brier ಅಂಕ: ಹೇಳಿದ ಸಂಭವನೀಯತೆ ಮತ್ತು ಫಲಿತಾಂಶದ ನಡುವಿನ ಸರಾಸರಿ ವರ್ಗ ಅಂತರ. ಟ್ರಾನ್ಸ್‌ಕ್ರಿಪ್ಟ್: ಪ್ರತಿ ಸಂದೇಶದ ಉಳಿಸಿದ ದಾಖಲೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The verifier, not the peers, produced 486. 2) Three different answers gave no revisions and no majority. 3) A wrong majority of 540 survived peer-only debate. 4) The lesson Brier score of 0.1725 is really 0.225. 5) 2 of 3 passes 2/3 and fails 0.67.",
    "bodyKn": "1) 486 ನೀಡಿದ್ದು ಪರಿಶೀಲಕ, ಸಹವರ್ತಿಗಳಲ್ಲ. 2) ಮೂರು ಬೇರೆ ಉತ್ತರಗಳು ಪರಿಷ್ಕರಣೆ ಮತ್ತು ಬಹುಮತ ನೀಡಲಿಲ್ಲ. 3) 540 ರ ತಪ್ಪು ಬಹುಮತ peer-only ಚರ್ಚೆಯಲ್ಲಿ ಉಳಿಯಿತು. 4) lesson ನ Brier ಅಂಕ 0.1725 ವಾಸ್ತವದಲ್ಲಿ 0.225. 5) 3 ರಲ್ಲಿ 2 ಒಪ್ಪಿಗೆ 2/3 ಪಾಸು ಮತ್ತು 0.67 ವಿಫಲ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did the peer-only debate give from 540, 486 and 480?",
      "qKn": "540, 486 ಮತ್ತು 480 ರಿಂದ peer-only ಚರ್ಚೆ ಏನು ನೀಡಿತು?",
      "opts": [
       "no revisions and no majority",
       "a final answer of 486",
       "a final answer of 540",
       "a crash"
      ],
      "optsKn": [
       "ಪರಿಷ್ಕರಣೆ ಮತ್ತು ಬಹುಮತ ಇಲ್ಲ",
       "ಅಂತಿಮ ಉತ್ತರ 486",
       "ಅಂತಿಮ ಉತ್ತರ 540",
       "ಕ್ರ್ಯಾಶ್"
      ],
      "correct": 0
     },
     {
      "q": "What is the Brier score of the lesson example in this run?",
      "qKn": "ಈ ಓಟದಲ್ಲಿ lesson ಉದಾಹರಣೆಯ Brier ಅಂಕ ಎಷ್ಟು?",
      "opts": [
       "0.225",
       "0.1725",
       "0.9",
       "0.5"
      ],
      "optsKn": [
       "0.225",
       "0.1725",
       "0.9",
       "0.5"
      ],
      "correct": 0
     },
     {
      "q": "Did 2 of 3 agreeing meet a threshold of 0.67?",
      "qKn": "3 ರಲ್ಲಿ 2 ಒಪ್ಪಿದರೆ 0.67 ಮಿತಿ ತಲುಪಿತೇ?",
      "opts": [
       "no, it scored 0.666667",
       "yes",
       "only with a verifier",
       "it was not computed"
      ],
      "optsKn": [
       "ಇಲ್ಲ, 0.666667 ಅಂಕ ಸಿಕ್ಕಿತು",
       "ಹೌದು",
       "ಪರಿಶೀಲಕದೊಂದಿಗೆ ಮಾತ್ರ",
       "ಲೆಕ್ಕ ಹಾಕಲಿಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Which agents were flagged when copying the most confident peer?",
      "qKn": "ಅತ್ಯಂತ ವಿಶ್ವಾಸದ ಸಹವರ್ತಿಯನ್ನು ನಕಲಿಸಿದಾಗ ಯಾವ ಏಜೆಂಟ್‌ಗಳು ಫ್ಲ್ಯಾಗ್ ಆದವು?",
      "opts": [
       "A and B",
       "only C",
       "nobody",
       "all three"
      ],
      "optsKn": [
       "A ಮತ್ತು B",
       "C ಮಾತ್ರ",
       "ಯಾರೂ ಇಲ್ಲ",
       "ಮೂವರೂ"
      ],
      "correct": 0
     },
     {
      "q": "How many tokens did 5 agents, 4 rounds and 1200 per response give?",
      "qKn": "5 ಏಜೆಂಟ್‌ಗಳು, 4 ಸುತ್ತು ಮತ್ತು ಪ್ರತಿ ಪ್ರತಿಕ್ರಿಯೆಗೆ 1200 ಎಷ್ಟು tokens ನೀಡಿತು?",
      "opts": [
       "24000",
       "6000",
       "12000",
       "48000"
      ],
      "optsKn": [
       "24000",
       "6000",
       "12000",
       "48000"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
