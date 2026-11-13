module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af7584e16045e49cbd95188",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Map Assumptions and Resolve the Riskiest One First (Part 3 of 3) — Reprioritising After Evidence",
 "titleKn": "ಊಹೆಗಳನ್ನು ನಕ್ಷೆ ಮಾಡಿ ಮತ್ತು ಅತಿ ಅಪಾಯಕಾರಿಯನ್ನು ಮೊದಲು ಪರಿಹರಿಸಿ (ಭಾಗ 3 / 3) — ಸಾಕ್ಷ್ಯದ ನಂತರ ಮರುಆದ್ಯತೆ",
 "desc": "Update the assumption map after a verdict, separate verdict from decision and choose the next test by risk removed per hour.",
 "descKn": "ತೀರ್ಪಿನ ನಂತರ ಊಹೆ ನಕ್ಷೆ ನವೀಕರಿಸಿ, ತೀರ್ಪು ಮತ್ತು ನಿರ್ಧಾರ ಬೇರ್ಪಡಿಸಿ ಮತ್ತು ಪ್ರತಿ ಗಂಟೆಗೆ ತೆಗೆದ ಅಪಾಯದಿಂದ ಮುಂದಿನ ಪರೀಕ್ಷೆ ಆರಿಸಿ.",
 "objectives": [
  "Update the map after a verdict.",
  "Separate verdict and decision.",
  "Choose by risk removed per hour.",
  "Order by irreversibility.",
  "Keep an auditable history."
 ],
 "objectivesKn": [
  "ತೀರ್ಪಿನ ನಂತರ ನಕ್ಷೆ ನವೀಕರಿಸಿ.",
  "ತೀರ್ಪು ಮತ್ತು ನಿರ್ಧಾರ ಬೇರ್ಪಡಿಸಿ.",
  "ಪ್ರತಿ ಗಂಟೆಗೆ ತೆಗೆದ ಅಪಾಯದಿಂದ ಆರಿಸಿ.",
  "ಹಿಂತಿರುಗಿಸಲಾಗದಿರುವಿಕೆ ಮೂಲಕ ಕ್ರಮಗೊಳಿಸಿ.",
  "ಲೆಕ್ಕಪರಿಶೋಧನೆ ಇತಿಹಾಸ ಉಳಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Map Assumptions and Resolve the Riskiest One First (Part 3 of 3)",
    "textKn": "ಊಹೆಗಳನ್ನು ನಕ್ಷೆ ಮಾಡಿ ಮತ್ತು ಅತಿ ಅಪಾಯಕಾರಿಯನ್ನು ಮೊದಲು ಪರಿಹರಿಸಿ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: updating the map after a verdict, keeping verdict and decision apart, choosing the cheapest decisive experiment, ordering by irreversibility and an auditable report. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind mapping assumptions and resolving the riskiest one first (assumption records, risk scores, decisive experiments, verdicts and reprioritisation), not the real software, and the assumptions, ratings, alert counts and costs are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original main.py was not supplied, and the lesson text presents its Python as a teaching implementation, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ತೀರ್ಪಿನ ನಂತರ ನಕ್ಷೆ ನವೀಕರಿಸುವುದು, ತೀರ್ಪು ಮತ್ತು ನಿರ್ಧಾರ ಬೇರೆ ಇಡುವುದು, ಅತಿ ಅಗ್ಗದ ನಿರ್ಣಾಯಕ ಪ್ರಯೋಗ ಆರಿಸುವುದು, ಹಿಂತಿರುಗಿಸಲಾಗದಿರುವಿಕೆ ಮೂಲಕ ಕ್ರಮಗೊಳಿಸುವುದು ಮತ್ತು ಲೆಕ್ಕಪರಿಶೋಧನೆ ವರದಿ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಊಹೆಗಳನ್ನು ನಕ್ಷೆ ಮಾಡಿ ಅತಿ ಅಪಾಯಕಾರಿಯನ್ನು ಮೊದಲು ಪರಿಹರಿಸುವುದು (ಊಹೆ ದಾಖಲೆಗಳು, ಅಪಾಯ ಅಂಕಗಳು, ನಿರ್ಣಾಯಕ ಪ್ರಯೋಗಗಳು, ತೀರ್ಪುಗಳು ಮತ್ತು ಮರುಆದ್ಯತೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಊಹೆಗಳು, ರೇಟಿಂಗ್‌ಗಳು, alert ಎಣಿಕೆಗಳು ಮತ್ತು ವೆಚ್ಚಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ಪಠ್ಯ ತನ್ನ Python ಅನ್ನು ಬೋಧನಾ ಅನುಷ್ಠಾನ ಎಂದು ಪ್ರಸ್ತುತಪಡಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Evidence Changes the Next Question",
    "textKn": "ಸಾಕ್ಷ್ಯ ಮುಂದಿನ ಪ್ರಶ್ನೆ ಬದಲಿಸುತ್ತದೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Update, Decide, Choose, Record",
    "headingKn": "ನವೀಕರಿಸಿ, ನಿರ್ಧರಿಸಿ, ಆರಿಸಿ, ದಾಖಲಿಸಿ",
    "bodyEn": "A verdict is only useful if it changes the map. This part applies scripted verdicts to the assumption map, keeps the verdict apart from the decision, chooses the next experiment by risk removed per hour using invented costs, orders risky steps by irreversibility and produces a report that keeps the earlier state. No real experiment is run; the verdicts, costs and ratings are all invented.",
    "bodyKn": "ತೀರ್ಪು ನಕ್ಷೆ ಬದಲಿಸಿದರೆ ಮಾತ್ರ ಉಪಯುಕ್ತ. ಈ ಭಾಗ ಊಹೆ ನಕ್ಷೆಗೆ ಸ್ಕ್ರಿಪ್ಟ್ ತೀರ್ಪುಗಳನ್ನು ಅನ್ವಯಿಸುತ್ತದೆ, ತೀರ್ಪನ್ನು ನಿರ್ಧಾರದಿಂದ ಬೇರೆ ಇಡುತ್ತದೆ, ಕಲ್ಪಿತ ವೆಚ್ಚ ಬಳಸಿ ಪ್ರತಿ ಗಂಟೆಗೆ ತೆಗೆದ ಅಪಾಯದಿಂದ ಮುಂದಿನ ಪ್ರಯೋಗ ಆರಿಸುತ್ತದೆ, ಅಪಾಯಕಾರಿ ಹಂತಗಳನ್ನು ಹಿಂತಿರುಗಿಸಲಾಗದಿರುವಿಕೆ ಮೂಲಕ ಕ್ರಮಗೊಳಿಸುತ್ತದೆ ಮತ್ತು ಹಿಂದಿನ ಸ್ಥಿತಿ ಉಳಿಸುವ ವರದಿ ಉತ್ಪಾದಿಸುತ್ತದೆ. ಯಾವುದೇ ನಿಜ ಪ್ರಯೋಗ ಓಡಿಸಲಿಲ್ಲ; ತೀರ್ಪುಗಳು, ವೆಚ್ಚಗಳು ಮತ್ತು ರೇಟಿಂಗ್‌ಗಳು ಎಲ್ಲವೂ ಕಲ್ಪಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "After the Verdict",
    "headingKn": "ತೀರ್ಪಿನ ನಂತರ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">evidence changes what to test next</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">verdict</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">updates the map</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">decision</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">kept separate</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">next test</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">risk per hour</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">report</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">history kept</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">evidence changes what to test next</text></svg>",
    "captionEn": "The map is updated, the next test is chosen and history is kept.",
    "captionKn": "ನಕ್ಷೆ ನವೀಕರಣ, ಮುಂದಿನ ಪರೀಕ್ಷೆ ಆಯ್ಕೆ ಮತ್ತು ಇತಿಹಾಸ ಉಳಿಯುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Verdict to decision",
    "headingKn": "ತೀರ್ಪಿನಿಂದ ನಿರ್ಧಾರಕ್ಕೆ",
    "headers": [
     "Verdict",
     "Effect on the map",
     "Decision"
    ],
    "rows": [
     [
      "supports",
      "uncertainty set to 1, status supported",
      "proceed to the next assumption"
     ],
     [
      "ambiguous",
      "uncertainty down by 1, still open",
      "gather more evidence or narrow the question"
     ],
     [
      "rejects",
      "status rejected",
      "stop and revise the plan"
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
    "filename": "am_3.py",
    "headingEn": "Map update, decision, experiment choice",
    "headingKn": "ನಕ್ಷೆ ನವೀಕರಣ, ನಿರ್ಧಾರ, ಪ್ರಯೋಗ ಆಯ್ಕೆ",
    "descEn": "apply_verdict changes an assumption and stores its earlier state, decide maps a verdict to an action, next_risk lists open items by risk, and pick_experiment divides the risk removed by the cost in hours.",
    "descKn": "apply_verdict ಊಹೆ ಬದಲಿಸಿ ಅದರ ಹಿಂದಿನ ಸ್ಥಿತಿ ಸಂಗ್ರಹಿಸುತ್ತದೆ, decide ತೀರ್ಪನ್ನು ಕ್ರಿಯೆಗೆ ಮ್ಯಾಪ್ ಮಾಡುತ್ತದೆ, next_risk ತೆರೆದ ಐಟಂಗಳನ್ನು ಅಪಾಯದಿಂದ ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ, ಮತ್ತು pick_experiment ತೆಗೆದ ಅಪಾಯವನ್ನು ಗಂಟೆಗಳ ವೆಚ್ಚದಿಂದ ಭಾಗಿಸುತ್ತದೆ.",
    "code": "def risk(a):\n    return a[\"impact\"] * a[\"uncertainty\"] * a[\"irreversibility\"]\n\n\ndef next_risk(m):\n    openers = [k for k, v in m.items() if v[\"status\"] == \"open\"]\n    return sorted(openers, key=lambda k: (-risk(m[k]), -m[k][\"irreversibility\"], k))\n\n\ndef apply_verdict(m, aid, verdict, history):\n    history.append({\"aid\": aid, \"verdict\": verdict, \"before\": dict(m[aid])})\n    if verdict == \"supports\":\n        m[aid] = dict(m[aid], uncertainty=1, status=\"supported\")\n    elif verdict == \"rejects\":\n        m[aid] = dict(m[aid], status=\"rejected\")\n    else:\n        m[aid] = dict(m[aid], uncertainty=max(1, m[aid][\"uncertainty\"] - 1))\n\n\ndef decide(verdict):\n    return {\"supports\": \"proceed to the next assumption\", \"rejects\": \"stop and revise the plan\", \"ambiguous\": \"gather more evidence or narrow the question\"}[verdict]\n\n\ndef pick_experiment(m, cost):\n    best = None\n    for k in next_risk(m):\n        reduction = risk(m[k]) - risk(dict(m[k], uncertainty=1))\n        per_hour = reduction / cost[k]\n        if best is None or per_hour > best[2]:\n            best = (k, reduction, per_hour)\n    return best"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "am_3.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() applies two verdicts, lists three decisions, computes risk removed per hour, sorts four steps by irreversibility and rejects an assumption into a report.",
    "descKn": "main() ಎರಡು ತೀರ್ಪು ಅನ್ವಯಿಸಿ, ಮೂರು ನಿರ್ಧಾರ ಪಟ್ಟಿ ಮಾಡಿ, ಪ್ರತಿ ಗಂಟೆಗೆ ತೆಗೆದ ಅಪಾಯ ಲೆಕ್ಕ ಹಾಕಿ, ನಾಲ್ಕು ಹಂತಗಳನ್ನು irreversibility ಮೂಲಕ ವಿಂಗಡಿಸಿ ಮತ್ತು ಒಂದು ಊಹೆ ತಿರಸ್ಕರಿಸಿ ವರದಿ ಮಾಡುತ್ತದೆ.",
    "code": "def main():\n    m = {k: dict(v) for k, v in MAP.items()}\n    history = []\n    section(\"1. Genuinely running: an evidence verdict updates the map\")\n    print(\"riskiest first:\", [(k, risk(m[k])) for k in next_risk(m)])\n    apply_verdict(m, \"A1\", \"supports\", history)\n    print(\"A1 supported ->\", m[\"A1\"][\"status\"], \"uncertainty\", m[\"A1\"][\"uncertainty\"], \"| next:\", [(k, risk(m[k])) for k in next_risk(m)])\n    apply_verdict(m, \"A4\", \"ambiguous\", history)\n    print(\"A4 ambiguous -> uncertainty\", m[\"A4\"][\"uncertainty\"], \"status\", m[\"A4\"][\"status\"], \"| next:\", [(k, risk(m[k])) for k in next_risk(m)])\n    print(\"a supporting result removed A1 from the open list and an ambiguous one only lowered A4's uncertainty from 5 to 4, which left it still open; the verdicts here are scripted, as no experiment was actually run\")\n\n    section(\"2. Genuinely running: the verdict and the decision are separate records\")\n    for v in (\"supports\", \"rejects\", \"ambiguous\"):\n        print(f\"verdict={v:9} decision={decide(v)}\")\n    print(\"the evidence says what was observed and the decision says what the team does about it; keeping them apart lets two teams read the same evidence and decide differently without rewriting the evidence\")\n\n    section(\"3. Genuinely computing: the cheapest decisive experiment (ILLUSTRATIVE costs in hours)\")\n    m2 = {k: dict(v) for k, v in MAP.items()}\n    for k in next_risk(m2):\n        red = risk(m2[k]) - risk(dict(m2[k], uncertainty=1))\n        print(f\"{k} risk={risk(m2[k]):3} cost={COST_H[k]:2}h  risk removed if resolved={red:3}  per hour={red / COST_H[k]:.1f}\")\n    print(\"chosen:\", pick_experiment(m2, COST_H))\n    print(\"A1 is the riskiest by score at 60, but A3 removes the most risk per hour (12.5 against 11.2 for A1) because it costs two hours, and A4 at 40 hours removes only 1.0 per hour; the picked experiment is therefore not the riskiest assumption, which is a result of the per-hour rule and of the assumption that resolving an item drops its uncertainty to 1, both of which are the lab's own choices\")\n\n    section(\"4. Genuinely running: irreversibility orders risky experiments\")\n    steps = [(\"inspect query dependencies\", 1), (\"test the migration on a copy\", 1), (\"run the migration in production\", 5), (\"validate the rollback procedure\", 1)]\n    print(\"by irreversibility then name:\", [s for s, _ in sorted(steps, key=lambda x: (x[1], x[0]))])\n    print(\"by the order a team might write them:\", [s for s, _ in steps])\n    print(\"the irreversible step sorted last, after the rollback was validated, but only because the lab sorts by irreversibility alone; dependencies between steps are not modelled here, so a real plan still needs a human to check that the order makes sense\")\n\n    section(\"5. Genuinely running: a rejected assumption triggers a re-plan, and the report keeps the history\")\n    m3 = {k: dict(v) for k, v in MAP.items()}\n    h3 = []\n    apply_verdict(m3, \"A3\", \"rejects\", h3)\n    print(\"A3 rejected -> status\", m3[\"A3\"][\"status\"], \"| plan action:\", decide(\"rejects\"))\n    report = {\"map\": m3, \"history\": h3, \"next\": next_risk(m3)}\n    text = json.dumps(report, sort_keys=True)\n    back = json.loads(text)\n    print(\"report keys:\", sorted(back), \"| history entries:\", len(back[\"history\"]), \"| earlier values kept:\", back[\"history\"][0][\"before\"][\"status\"])\n    print(\"the report holds the current map and the record of what it looked like before each verdict, so the change in A3 can be audited; it is built in memory and not written to a file\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: an evidence verdict updates the map ---\nriskiest first: [('A1', 60), ('A3', 50), ('A4', 50), ('A2', 32)]\nA1 supported -> supported uncertainty 1 | next: [('A3', 50), ('A4', 50), ('A2', 32)]\nA4 ambiguous -> uncertainty 4 status open | next: [('A3', 50), ('A4', 40), ('A2', 32)]\na supporting result removed A1 from the open list and an ambiguous one only lowered A4's uncertainty from 5 to 4, which left it still open; the verdicts here are scripted, as no experiment was actually run\n\n--- 2. Genuinely running: the verdict and the decision are separate records ---\nverdict=supports  decision=proceed to the next assumption\nverdict=rejects   decision=stop and revise the plan\nverdict=ambiguous decision=gather more evidence or narrow the question\nthe evidence says what was observed and the decision says what the team does about it; keeping them apart lets two teams read the same evidence and decide differently without rewriting the evidence\n\n--- 3. Genuinely computing: the cheapest decisive experiment (ILLUSTRATIVE costs in hours) ---\nA1 risk= 60 cost= 4h  risk removed if resolved= 45  per hour=11.2\nA3 risk= 50 cost= 2h  risk removed if resolved= 25  per hour=12.5\nA4 risk= 50 cost=40h  risk removed if resolved= 40  per hour=1.0\nA2 risk= 32 cost=16h  risk removed if resolved= 24  per hour=1.5\nchosen: ('A3', 25, 12.5)\nA1 is the riskiest by score at 60, but A3 removes the most risk per hour (12.5 against 11.2 for A1) because it costs two hours, and A4 at 40 hours removes only 1.0 per hour; the picked experiment is therefore not the riskiest assumption, which is a result of the per-hour rule and of the assumption that resolving an item drops its uncertainty to 1, both of which are the lab's own choices\n\n--- 4. Genuinely running: irreversibility orders risky experiments ---\nby irreversibility then name: ['inspect query dependencies', 'test the migration on a copy', 'validate the rollback procedure', 'run the migration in production']\nby the order a team might write them: ['inspect query dependencies', 'test the migration on a copy', 'run the migration in production', 'validate the rollback procedure']\nthe irreversible step sorted last, after the rollback was validated, but only because the lab sorts by irreversibility alone; dependencies between steps are not modelled here, so a real plan still needs a human to check that the order makes sense\n\n--- 5. Genuinely running: a rejected assumption triggers a re-plan, and the report keeps the history ---\nA3 rejected -> status rejected | plan action: stop and revise the plan\nreport keys: ['history', 'map', 'next'] | history entries: 1 | earlier values kept: open\nthe report holds the current map and the record of what it looked like before each verdict, so the change in A3 can be audited; it is built in memory and not written to a file"
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
    "headingEn": "Experiment 1: An evidence verdict updates the map",
    "headingKn": "ಪ್ರಯೋಗ 1: An evidence verdict updates the map",
    "bodyEn": "What it ran: An evidence verdict updates the map. What the lab concluded: a supporting result removed A1 from the open list and an ambiguous one only lowered A4's uncertainty from 5 to 4, which left it still open; the verdicts here are scripted, as no experiment was actually run",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: An evidence verdict updates the map. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a supporting result removed A1 from the open list and an ambiguous one only lowered A4's uncertainty from 5 to 4, which left it still open; the verdicts here are scripted, as no experiment was actually run"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: an evidence verdict updates the map ---\nriskiest first: [('A1', 60), ('A3', 50), ('A4', 50), ('A2', 32)]\nA1 supported -> supported uncertainty 1 | next: [('A3', 50), ('A4', 50), ('A2', 32)]\nA4 ambiguous -> uncertainty 4 status open | next: [('A3', 50), ('A4', 40), ('A2', 32)]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: The verdict and the decision are separate records",
    "headingKn": "ಪ್ರಯೋಗ 2: The verdict and the decision are separate records",
    "bodyEn": "What it ran: The verdict and the decision are separate records. What the lab concluded: the evidence says what was observed and the decision says what the team does about it; keeping them apart lets two teams read the same evidence and decide differently without rewriting the evidence",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The verdict and the decision are separate records. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the evidence says what was observed and the decision says what the team does about it; keeping them apart lets two teams read the same evidence and decide differently without rewriting the evidence"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: the verdict and the decision are separate records ---\nverdict=supports  decision=proceed to the next assumption\nverdict=rejects   decision=stop and revise the plan\nverdict=ambiguous decision=gather more evidence or narrow the question"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: The cheapest decisive experiment (ILLUSTRATIVE costs in hours)",
    "headingKn": "ಪ್ರಯೋಗ 3: The cheapest decisive experiment (ILLUSTRATIVE costs in hours)",
    "bodyEn": "What it ran: The cheapest decisive experiment (ILLUSTRATIVE costs in hours). What the lab concluded: A1 is the riskiest by score at 60, but A3 removes the most risk per hour (12.5 against 11.2 for A1) because it costs two hours, and A4 at 40 hours removes only 1.0 per hour; the picked experiment is therefore not the riskiest assumption, which is a result of the per-hour rule and of the assumption that resolving an item drops its uncertainty to 1, both of which are the lab's own choices",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The cheapest decisive experiment (ILLUSTRATIVE costs in hours). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): A1 is the riskiest by score at 60, but A3 removes the most risk per hour (12.5 against 11.2 for A1) because it costs two hours, and A4 at 40 hours removes only 1.0 per hour; the picked experiment is therefore not the riskiest assumption, which is a result of the per-hour rule and of the assumption that resolving an item drops its uncertainty to 1, both of which are the lab's own choices"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely computing: the cheapest decisive experiment (ILLUSTRATIVE costs in hours) ---\nA1 risk= 60 cost= 4h  risk removed if resolved= 45  per hour=11.2\nA3 risk= 50 cost= 2h  risk removed if resolved= 25  per hour=12.5\nA4 risk= 50 cost=40h  risk removed if resolved= 40  per hour=1.0\nA2 risk= 32 cost=16h  risk removed if resolved= 24  per hour=1.5\nchosen: ('A3', 25, 12.5)"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Irreversibility orders risky experiments",
    "headingKn": "ಪ್ರಯೋಗ 4: Irreversibility orders risky experiments",
    "bodyEn": "What it ran: Irreversibility orders risky experiments. What the lab concluded: the irreversible step sorted last, after the rollback was validated, but only because the lab sorts by irreversibility alone; dependencies between steps are not modelled here, so a real plan still needs a human to check that the order makes sense",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Irreversibility orders risky experiments. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the irreversible step sorted last, after the rollback was validated, but only because the lab sorts by irreversibility alone; dependencies between steps are not modelled here, so a real plan still needs a human to check that the order makes sense"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: irreversibility orders risky experiments ---\nby irreversibility then name: ['inspect query dependencies', 'test the migration on a copy', 'validate the rollback procedure', 'run the migration in production']\nby the order a team might write them: ['inspect query dependencies', 'test the migration on a copy', 'run the migration in production', 'validate the rollback procedure']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A rejected assumption triggers a re-plan, and the report keeps the history",
    "headingKn": "ಪ್ರಯೋಗ 5: A rejected assumption triggers a re-plan, and the report keeps the history",
    "bodyEn": "What it ran: A rejected assumption triggers a re-plan, and the report keeps the history. What the lab concluded: the report holds the current map and the record of what it looked like before each verdict, so the change in A3 can be audited; it is built in memory and not written to a file",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A rejected assumption triggers a re-plan, and the report keeps the history. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the report holds the current map and the record of what it looked like before each verdict, so the change in A3 can be audited; it is built in memory and not written to a file"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: a rejected assumption triggers a re-plan, and the report keeps the history ---\nA3 rejected -> status rejected | plan action: stop and revise the plan\nreport keys: ['history', 'map', 'next'] | history entries: 1 | earlier values kept: open"
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
    "headingEn": "Genuinely Found: The Map Changed After Each Verdict",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪ್ರತಿ ತೀರ್ಪಿನ ನಂತರ ನಕ್ಷೆ ಬದಲಾಯಿತು",
    "bodyEn": "Section 1: A1 supported left the open list, and an ambiguous A4 only dropped from uncertainty 5 to 4 (risk 50 to 40) and stayed open. Section 2: the three verdicts mapped to three different decisions. These verdicts were scripted; no experiment was run.",
    "bodyKn": "ವಿಭಾಗ 1: A1 supported ತೆರೆದ ಪಟ್ಟಿಯಿಂದ ಹೊರಹೋಯಿತು, ಮತ್ತು ambiguous A4 ಅನಿಶ್ಚಿತತೆ 5 ರಿಂದ 4 ಕ್ಕೆ (ಅಪಾಯ 50 ರಿಂದ 40) ಮಾತ್ರ ಇಳಿದು ತೆರೆದಿತ್ತು. ವಿಭಾಗ 2: ಮೂರು ತೀರ್ಪುಗಳು ಮೂರು ಬೇರೆ ನಿರ್ಧಾರಗಳಿಗೆ ಮ್ಯಾಪ್ ಆದವು. ಈ ತೀರ್ಪುಗಳು ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ್ದು; ಯಾವುದೇ ಪ್ರಯೋಗ ಓಡಿಸಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Riskiest Assumption Was Not the Cheapest Test",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅತಿ ಅಪಾಯಕಾರಿ ಊಹೆ ಅತಿ ಅಗ್ಗದ ಪರೀಕ್ಷೆ ಆಗಿರಲಿಲ್ಲ",
    "bodyEn": "Section 3 (invented hours): A1 risk 60 cost 4h removed 45 for 11.2 per hour, A3 risk 50 cost 2h removed 25 for 12.5 per hour, A4 cost 40h gave 1.0 and A2 cost 16h gave 1.5, so A3 was chosen. Section 4: sorting by irreversibility put the production migration last, with the lab noting that dependencies between steps are not modelled. Section 5: rejecting A3 set its status to rejected with the action \"stop and revise the plan\", and the report kept the earlier status open in its history.",
    "bodyKn": "ವಿಭಾಗ 3 (ಕಲ್ಪಿತ ಗಂಟೆಗಳು): A1 ಅಪಾಯ 60 ವೆಚ್ಚ 4h 45 ತೆಗೆದು ಗಂಟೆಗೆ 11.2, A3 ಅಪಾಯ 50 ವೆಚ್ಚ 2h 25 ತೆಗೆದು ಗಂಟೆಗೆ 12.5, A4 ವೆಚ್ಚ 40h 1.0 ಮತ್ತು A2 ವೆಚ್ಚ 16h 1.5 ನೀಡಿತು, ಆದ್ದರಿಂದ A3 ಆರಿಸಲಾಯಿತು. ವಿಭಾಗ 4: irreversibility ಮೂಲಕ ವಿಂಗಡಿಸಿದ್ದು production migration ಅನ್ನು ಕೊನೆಗೆ ಇಟ್ಟಿತು, ಹಂತಗಳ ನಡುವಿನ ಅವಲಂಬನೆಗಳನ್ನು ಮಾದರಿ ಮಾಡಿಲ್ಲ ಎಂದು ಲ್ಯಾಬ್ ಗಮನಿಸುತ್ತದೆ. ವಿಭಾಗ 5: A3 ತಿರಸ್ಕರಿಸಿದ್ದು ಅದರ ಸ್ಥಿತಿಯನ್ನು rejected ಮಾಡಿ ಕ್ರಿಯೆ \"stop and revise the plan\" ನೀಡಿತು, ಮತ್ತು ವರದಿ ತನ್ನ ಇತಿಹಾಸದಲ್ಲಿ ಹಿಂದಿನ ಸ್ಥಿತಿ open ಉಳಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Evidence is only worth collecting if the result changes the next decision, and a record of the earlier state lets someone check why it changed.",
    "bodyKn": "ಫಲಿತಾಂಶ ಮುಂದಿನ ನಿರ್ಧಾರ ಬದಲಿಸಿದರೆ ಮಾತ್ರ ಸಾಕ್ಷ್ಯ ಸಂಗ್ರಹಿಸುವುದು ಯೋಗ್ಯ, ಮತ್ತು ಹಿಂದಿನ ಸ್ಥಿತಿಯ ದಾಖಲೆ ಅದು ಏಕೆ ಬದಲಾಯಿತು ಎಂದು ಯಾರಾದರೂ ಪರಿಶೀಲಿಸಲು ಬಿಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"always test the highest score first.\" Per hour, a two-hour test beat the riskiest one in the lab's model.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಯಾವಾಗಲೂ ಅತಿ ಹೆಚ್ಚು ಅಂಕವನ್ನು ಮೊದಲು ಪರೀಕ್ಷಿಸಿ.\" ಲ್ಯಾಬ್ ಮಾದರಿಯಲ್ಲಿ ಪ್ರತಿ ಗಂಟೆಗೆ ಎರಡು-ಗಂಟೆ ಪರೀಕ್ಷೆ ಅತಿ ಅಪಾಯಕಾರಿಯನ್ನು ಮೀರಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Verdict: what the evidence shows. Decision: what the team does. Risk removed per hour: the drop in score divided by cost. Reversibility: how easily a step can be undone.",
    "bodyKn": "Verdict: ಸಾಕ್ಷ್ಯ ತೋರಿಸುವುದು. Decision: ತಂಡ ಮಾಡುವುದು. Risk removed per hour: ಅಂಕ ಇಳಿಕೆ ವೆಚ್ಚದಿಂದ ಭಾಗಿಸಿದ್ದು. Reversibility: ಹಂತ ಎಷ್ಟು ಸುಲಭವಾಗಿ ರದ್ದುಗೊಳಿಸಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A supports verdict closed an assumption and an ambiguous one only lowered uncertainty. 2) Verdict and decision are separate. 3) A3 won on risk per hour. 4) Irreversible steps go last. 5) The report kept earlier states.",
    "bodyKn": "1) supports ತೀರ್ಪು ಊಹೆ ಮುಚ್ಚಿತು ಮತ್ತು ambiguous ಅನಿಶ್ಚಿತತೆ ಮಾತ್ರ ಇಳಿಸಿತು. 2) ತೀರ್ಪು ಮತ್ತು ನಿರ್ಧಾರ ಬೇರೆ. 3) A3 ಪ್ರತಿ ಗಂಟೆ ಅಪಾಯದಲ್ಲಿ ಗೆದ್ದಿತು. 4) ಹಿಂತಿರುಗಿಸಲಾಗದ ಹಂತಗಳು ಕೊನೆಗೆ. 5) ವರದಿ ಹಿಂದಿನ ಸ್ಥಿತಿಗಳನ್ನು ಉಳಿಸಿತು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B am_3.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B am_3.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B am_3.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B am_3.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which experiment was chosen in the lab's model?",
      "qKn": "ಲ್ಯಾಬ್ ಮಾದರಿಯಲ್ಲಿ ಯಾವ ಪ್ರಯೋಗ ಆರಿಸಲಾಯಿತು?",
      "opts": [
       "A3",
       "A1",
       "A4",
       "A2"
      ],
      "optsKn": [
       "A3",
       "A1",
       "A4",
       "A2"
      ],
      "correct": 0
     },
     {
      "q": "What did an ambiguous verdict do to A4?",
      "qKn": "ambiguous ತೀರ್ಪು A4 ಗೆ ಏನು ಮಾಡಿತು?",
      "opts": [
       "Lowered uncertainty from 5 to 4 and left it open",
       "Closed it",
       "Rejected it",
       "Deleted it"
      ],
      "optsKn": [
       "ಅನಿಶ್ಚಿತತೆ 5 ರಿಂದ 4 ಕ್ಕೆ ಇಳಿಸಿ ತೆರೆದಿಟ್ಟಿತು",
       "ಮುಚ್ಚಿತು",
       "ತಿರಸ್ಕರಿಸಿತು",
       "ಅಳಿಸಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What action followed a rejects verdict?",
      "qKn": "rejects ತೀರ್ಪಿನ ನಂತರ ಯಾವ ಕ್ರಿಯೆ?",
      "opts": [
       "Stop and revise the plan",
       "Proceed",
       "Gather more evidence",
       "Ignore it"
      ],
      "optsKn": [
       "ನಿಲ್ಲಿಸಿ ಯೋಜನೆ ಪರಿಷ್ಕರಿಸಿ",
       "ಮುಂದುವರಿಯಿರಿ",
       "ಹೆಚ್ಚು ಸಾಕ್ಷ್ಯ ಸಂಗ್ರಹಿಸಿ",
       "ನಿರ್ಲಕ್ಷಿಸಿ"
      ],
      "correct": 0
     },
     {
      "q": "What does sorting only by irreversibility not model?",
      "qKn": "irreversibility ಮಾತ್ರದಿಂದ ವಿಂಗಡಿಸುವುದು ಯಾವುದನ್ನು ಮಾದರಿ ಮಾಡುವುದಿಲ್ಲ?",
      "opts": [
       "Dependencies between steps",
       "Cost",
       "Names",
       "Ratings"
      ],
      "optsKn": [
       "ಹಂತಗಳ ನಡುವಿನ ಅವಲಂಬನೆಗಳು",
       "ವೆಚ್ಚ",
       "ಹೆಸರುಗಳು",
       "ರೇಟಿಂಗ್‌ಗಳು"
      ],
      "correct": 0
     },
     {
      "q": "Were any real experiments run in this lab?",
      "qKn": "ಈ ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಯಾವುದೇ ನಿಜ ಪ್ರಯೋಗ ಓಡಿಸಲಾಯಿತೇ?",
      "opts": [
       "No, the verdicts were scripted",
       "Yes",
       "Only A1",
       "Only A4"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ತೀರ್ಪುಗಳು ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ್ದು",
       "ಹೌದು",
       "A1 ಮಾತ್ರ",
       "A4 ಮಾತ್ರ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
