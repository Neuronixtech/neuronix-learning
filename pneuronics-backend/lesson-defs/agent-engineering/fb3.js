module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af75c91b6f053d75364816f",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Build a Feedback Ratchet with Ownership and Retirement (Part 3 of 3) — Briefs, Effects and Retirement",
 "titleKn": "ಮಾಲೀಕತ್ವ ಮತ್ತು ನಿವೃತ್ತಿಯೊಂದಿಗೆ ಪ್ರತಿಕ್ರಿಯೆ Ratchet ನಿರ್ಮಿಸಿ (ಭಾಗ 3 / 3) — ವರದಿಗಳು, ಪರಿಣಾಮಗಳು ಮತ್ತು ನಿವೃತ್ತಿ",
 "desc": "Decide continue, change or stop, check whether a corrective action worked and keep, revise or retire controls on evidence.",
 "descKn": "continue, change ಅಥವಾ stop ನಿರ್ಧರಿಸಿ, ಸರಿಪಡಿಸುವ ಕ್ರಿಯೆ ಕೆಲಸ ಮಾಡಿತೇ ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಸಾಕ್ಷ್ಯದ ಮೇಲೆ ನಿಯಂತ್ರಣಗಳನ್ನು ಇರಿಸಿ, ಪರಿಷ್ಕರಿಸಿ ಅಥವಾ ನಿವೃತ್ತಗೊಳಿಸಿ.",
 "objectives": [
  "Write a continue, change or stop brief.",
  "Check a corrective action honestly.",
  "Keep, revise or retire controls.",
  "Bound an experiment.",
  "Label evidence types."
 ],
 "objectivesKn": [
  "continue, change ಅಥವಾ stop ವರದಿ ಬರೆಯಿರಿ.",
  "ಸರಿಪಡಿಸುವ ಕ್ರಿಯೆಯನ್ನು ಪ್ರಾಮಾಣಿಕವಾಗಿ ಪರಿಶೀಲಿಸಿ.",
  "ನಿಯಂತ್ರಣಗಳನ್ನು ಇರಿಸಿ, ಪರಿಷ್ಕರಿಸಿ ಅಥವಾ ನಿವೃತ್ತಗೊಳಿಸಿ.",
  "ಪ್ರಯೋಗಕ್ಕೆ ಮಿತಿ ಹಾಕಿ.",
  "ಸಾಕ್ಷ್ಯ ವಿಧಗಳಿಗೆ ಲೇಬಲ್ ಹಾಕಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Build a Feedback Ratchet with Ownership and Retirement (Part 3 of 3)",
    "textKn": "ಮಾಲೀಕತ್ವ ಮತ್ತು ನಿವೃತ್ತಿಯೊಂದಿಗೆ ಪ್ರತಿಕ್ರಿಯೆ Ratchet ನಿರ್ಮಿಸಿ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: a continue, change or stop brief, a before-and-after check on a corrective action with its caveat, keep, revise or retire rules, a bounded experiment budget and evidence labels in a brief. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind building a feedback ratchet with ownership and retirement (signal routing, priority, owned actions, evidence labels and keep, revise or retire decisions), not the real software, and the signals, owners, dates and counts are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, and the lesson text says only its concepts, lab instructions and acceptance criteria were given, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: continue, change ಅಥವಾ stop ವರದಿ, ಸರಿಪಡಿಸುವ ಕ್ರಿಯೆಯ ಮೊದಲು-ನಂತರ ಪರಿಶೀಲನೆ ಅದರ ಎಚ್ಚರಿಕೆಯೊಂದಿಗೆ, ಇರಿಸಿ, ಪರಿಷ್ಕರಿಸಿ ಅಥವಾ ನಿವೃತ್ತಗೊಳಿಸಿ ನಿಯಮಗಳು, ಮಿತಿಯುಳ್ಳ ಪ್ರಯೋಗ ಬಜೆಟ್ ಮತ್ತು ವರದಿಯಲ್ಲಿ ಸಾಕ್ಷ್ಯ ಲೇಬಲ್‌ಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಮಾಲೀಕತ್ವ ಮತ್ತು ನಿವೃತ್ತಿಯೊಂದಿಗೆ ಪ್ರತಿಕ್ರಿಯೆ ratchet ನಿರ್ಮಾಣ (signal ರೂಟಿಂಗ್, ಆದ್ಯತೆ, ಮಾಲೀಕತ್ವದ ಕ್ರಿಯೆಗಳು, ಸಾಕ್ಷ್ಯ ಲೇಬಲ್‌ಗಳು ಮತ್ತು ಇರಿಸಿ, ಪರಿಷ್ಕರಿಸಿ ಅಥವಾ ನಿವೃತ್ತಗೊಳಿಸಿ ನಿರ್ಧಾರಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು signals, ಮಾಲೀಕರು, ದಿನಾಂಕಗಳು ಮತ್ತು ಎಣಿಕೆಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು ಕೇವಲ ಅದರ ಪರಿಕಲ್ಪನೆಗಳು, ಲ್ಯಾಬ್ ಸೂಚನೆಗಳು ಮತ್ತು ಸ್ವೀಕಾರ ಮಾನದಂಡ ನೀಡಲಾಗಿತ್ತು ಎಂದು lesson ಪಠ್ಯ ಹೇಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Ratchet That Only Tightens Becomes a Cage",
    "textKn": "ಬಿಗಿಯಾಗುವುದು ಮಾತ್ರ ಮಾಡುವ Ratchet ಪಂಜರವಾಗುತ್ತದೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Decide, Verify, Keep or Retire",
    "headingKn": "ನಿರ್ಧರಿಸಿ, ಪರಿಶೀಲಿಸಿ, ಇರಿಸಿ ಅಥವಾ ನಿವೃತ್ತಗೊಳಿಸಿ",
    "bodyEn": "This part closes the loop. A brief turns a measured outcome, a guardrail, human review effort and cost into continue, change or stop; a before-and-after comparison of weekly counts asks whether a corrective action worked, with the caveat that six weeks and no control group make even a large fall only a lead; and keep, revise or retire rules say when a control can go. It ends with a bounded experiment budget and evidence labels in the brief. All numbers are illustrative.",
    "bodyKn": "ಈ ಭಾಗ ಲೂಪ್ ಮುಚ್ಚುತ್ತದೆ. ವರದಿ ಅಳೆದ ಫಲಿತಾಂಶ, guardrail, ಮಾನವ review ಪ್ರಯತ್ನ ಮತ್ತು ವೆಚ್ಚವನ್ನು continue, change ಅಥವಾ stop ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ; ವಾರದ ಎಣಿಕೆಗಳ ಮೊದಲು-ನಂತರ ಹೋಲಿಕೆ ಸರಿಪಡಿಸುವ ಕ್ರಿಯೆ ಕೆಲಸ ಮಾಡಿತೇ ಎಂದು ಕೇಳುತ್ತದೆ, ಆರು ವಾರ ಮತ್ತು ನಿಯಂತ್ರಣ ಗುಂಪಿಲ್ಲದೆ ದೊಡ್ಡ ಇಳಿಕೆಯೂ ಒಂದು ಸುಳಿವು ಮಾತ್ರ ಎಂಬ ಎಚ್ಚರಿಕೆಯೊಂದಿಗೆ; ಮತ್ತು ಇರಿಸಿ, ಪರಿಷ್ಕರಿಸಿ ಅಥವಾ ನಿವೃತ್ತಗೊಳಿಸಿ ನಿಯಮಗಳು ನಿಯಂತ್ರಣ ಯಾವಾಗ ಹೋಗಬಹುದು ಎಂದು ಹೇಳುತ್ತವೆ. ಮಿತಿಯುಳ್ಳ ಪ್ರಯೋಗ ಬಜೆಟ್ ಮತ್ತು ವರದಿಯಲ್ಲಿ ಸಾಕ್ಷ್ಯ ಲೇಬಲ್‌ಗಳೊಂದಿಗೆ ಮುಗಿಯುತ್ತದೆ. ಎಲ್ಲಾ ಸಂಖ್ಯೆಗಳು ವಿವರಣಾತ್ಮಕ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Decide, Verify, Retire",
    "headingKn": "ನಿರ್ಧರಿಸಿ, ಪರಿಶೀಲಿಸಿ, ನಿವೃತ್ತಗೊಳಿಸಿ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a ratchet also needs a way back</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">brief</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">continue/change/stop</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">effect</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">before vs after</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">control</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">keep/revise/retire</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">budget</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">days and cost</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a ratchet also needs a way back</text></svg>",
    "captionEn": "Evidence decides whether to continue, change or stop and whether a control stays.",
    "captionKn": "ಮುಂದುವರಿಸಬೇಕೇ, ಬದಲಿಸಬೇಕೇ ಅಥವಾ ನಿಲ್ಲಿಸಬೇಕೇ ಮತ್ತು ನಿಯಂತ್ರಣ ಉಳಿಯಬೇಕೇ ಎಂದು ಸಾಕ್ಷ್ಯ ನಿರ್ಧರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Control decisions in the lab",
    "headingKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ನಿಯಂತ್ರಣ ನಿರ್ಧಾರಗಳು",
    "headers": [
     "Situation",
     "Decision"
    ],
    "rows": [
     [
      "replaced by a stronger control, no recurrence",
      "retire"
     ],
     [
      "quiet 90 days, nothing replaces it",
      "keep (silence is not proof)"
     ],
     [
      "still blocking real failures",
      "keep"
     ],
     [
      "recurring despite the control",
      "revise"
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
    "filename": "fb_3.py",
    "headingEn": "The brief, the effect check and control decisions",
    "headingKn": "ವರದಿ, ಪರಿಣಾಮ ಪರಿಶೀಲನೆ ಮತ್ತು ನಿಯಂತ್ರಣ ನಿರ್ಧಾರಗಳು",
    "descEn": "brief stops on a guardrail breach and otherwise counts missed limits to choose continue, change or stop, effect compares weekly means before and after, control_decision returns retire, keep or revise and within_budget needs both limits to hold.",
    "descKn": "brief guardrail ಉಲ್ಲಂಘನೆಯಲ್ಲಿ ನಿಲ್ಲಿಸುತ್ತದೆ ಮತ್ತು ಇಲ್ಲದಿದ್ದರೆ ತಪ್ಪಿದ ಮಿತಿಗಳನ್ನು ಎಣಿಸಿ continue, change ಅಥವಾ stop ಆರಿಸುತ್ತದೆ, effect ವಾರದ ಸರಾಸರಿಗಳನ್ನು ಮೊದಲು ಮತ್ತು ನಂತರ ಹೋಲಿಸುತ್ತದೆ, control_decision retire, keep ಅಥವಾ revise ಮರಳಿಸುತ್ತದೆ ಮತ್ತು within_budget ಎರಡೂ ಮಿತಿ ಉಳಿಯಬೇಕು.",
    "code": "def brief(outcome_met, guardrail_ok, review_minutes, review_budget, cost_per_task, cost_ceiling):\n    why = []\n    if not guardrail_ok:\n        return \"stop\", [\"guardrail breached\"]\n    if not outcome_met:\n        why.append(\"outcome target not met\")\n    if review_minutes > review_budget:\n        why.append(\"human review effort above budget\")\n    if cost_per_task > cost_ceiling:\n        why.append(\"cost above ceiling\")\n    if not why:\n        return \"continue\", [\"outcome met inside review and cost limits\"]\n    return (\"change\" if len(why) < 3 else \"stop\"), why\n\n\ndef effect(before, after):\n    return statistics.mean(before), statistics.mean(after), round(100 * (statistics.mean(after) - statistics.mean(before)) / statistics.mean(before), 1)\n\n\ndef control_decision(recurrence_last_90d, replaced_by_stronger, still_blocking_real_failures):\n    if replaced_by_stronger and recurrence_last_90d == 0:\n        return \"retire\"\n    if still_blocking_real_failures:\n        return \"keep\"\n    if recurrence_last_90d == 0:\n        return \"keep (no replacement, silence is not proof)\"\n    return \"revise\"\n\n\ndef within_budget(days_used, budget_days, cost_used, budget_cost):\n    return days_used <= budget_days and cost_used <= budget_cost"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "fb_3.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() evaluates five briefs, compares two weekly series with their caveat, decides four controls, checks four budget cases and labels four claims by evidence type.",
    "descKn": "main() ಐದು ವರದಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ, ಎರಡು ವಾರದ ಸರಣಿ ಅವುಗಳ ಎಚ್ಚರಿಕೆಯೊಂದಿಗೆ ಹೋಲಿಸಿ, ನಾಲ್ಕು ನಿಯಂತ್ರಣ ನಿರ್ಧರಿಸಿ, ನಾಲ್ಕು ಬಜೆಟ್ ಸಂದರ್ಭ ಪರಿಶೀಲಿಸಿ ಮತ್ತು ನಾಲ್ಕು ಹೇಳಿಕೆಗಳನ್ನು ಸಾಕ್ಷ್ಯ ವಿಧದಿಂದ ಲೇಬಲ್ ಮಾಡುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: a continue, change or stop brief (all numbers invented)\")\n    cases = [(\"all inside limits\", True, True, 3.0, 4.0, 0.8, 1.0), (\"outcome met, review effort too high\", True, True, 6.5, 4.0, 0.8, 1.0), (\"outcome missed and cost over\", False, True, 3.0, 4.0, 1.4, 1.0),\n             (\"everything missed\", False, True, 7.0, 4.0, 1.4, 1.0), (\"guardrail breached, all else fine\", True, False, 3.0, 4.0, 0.8, 1.0)]\n    for label, *args in cases:\n        print(f\"{label:38} -> {brief(*args)}\")\n    print(\"a guardrail breach stopped the pilot even though everything else was inside limits, and missing all three limits gave stop while missing one or two gave change; this three-way rule and its limits are the lab's own\")\n\n    section(\"2. Genuinely computing: did the corrective action work? (ILLUSTRATIVE weekly counts)\")\n    before = [9, 7, 8, 10, 9, 8]\n    after_fix = [4, 3, 5, 2, 3, 2]\n    after_drift = [9, 8, 7, 9, 10, 8]\n    for name, after in ((\"after a fix\", after_fix), (\"no real change\", after_drift)):\n        b, a, pct = effect(before, after)\n        print(f\"{name:16} mean before={b:.2f} after={a:.2f} change={pct}%\")\n    print(\"the first fall of about 63 percent (8.50 to 3.17) is large, and the second shows no change in the mean at all (8.50 to 8.50) although its weekly values moved between 7 and 10; six weeks each side with no control group, so even a large fall is a lead and not proof the action caused it\")\n\n    section(\"3. Genuinely running: keep, revise or retire\")\n    for label, args in ((\"replaced by stronger control, no recurrence\", (0, True, False)), (\"quiet for 90 days, nothing replaces it\", (0, False, False)), (\"still blocking real failures\", (0, False, True)), (\"recurring despite the control\", (4, False, False))):\n        print(f\"{label:44} -> {control_decision(*args)}\")\n    print(\"a control is retired only when something stronger took over and the failure stayed away, quiet alone keeps it, and a control that is still stopping real failures is kept; recurrence despite the control sends it to revision\")\n\n    section(\"4. Genuinely running: a bounded experiment budget\")\n    for d, c in ((10, 800), (15, 800), (10, 1200), (16, 1300)):\n        print(f\"days {d:2} cost {c:4}: within a 15-day, 1000-unit budget = {within_budget(d, 15, c, 1000)}\")\n    print(\"both limits have to hold and either one stops the experiment for review; the 15 days and 1000 units are invented\")\n\n    section(\"5. Genuinely running: evidence labels in a brief\")\n    claims = [(\"median triage time fell to 1.9 minutes\", \"observation\"), (\"engineers say the tool is trusted\", \"reported\"), (\"it should scale to 10x load\", \"inference\"), (\"the replay passed 8 of 8\", \"simulation\")]\n    for c, k in claims:\n        print(f\"{k:11} {c}\")\n    print(\"a decision brief that labels each claim as observed, reported, inferred or simulated lets a reader weigh them differently, and only the first of these four supports a statement about what happened in real use\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a continue, change or stop brief (all numbers invented) ---\nall inside limits                      -> ('continue', ['outcome met inside review and cost limits'])\noutcome met, review effort too high    -> ('change', ['human review effort above budget'])\noutcome missed and cost over           -> ('change', ['outcome target not met', 'cost above ceiling'])\neverything missed                      -> ('stop', ['outcome target not met', 'human review effort above budget', 'cost above ceiling'])\nguardrail breached, all else fine      -> ('stop', ['guardrail breached'])\na guardrail breach stopped the pilot even though everything else was inside limits, and missing all three limits gave stop while missing one or two gave change; this three-way rule and its limits are the lab's own\n\n--- 2. Genuinely computing: did the corrective action work? (ILLUSTRATIVE weekly counts) ---\nafter a fix      mean before=8.50 after=3.17 change=-62.7%\nno real change   mean before=8.50 after=8.50 change=0.0%\nthe first fall of about 63 percent (8.50 to 3.17) is large, and the second shows no change in the mean at all (8.50 to 8.50) although its weekly values moved between 7 and 10; six weeks each side with no control group, so even a large fall is a lead and not proof the action caused it\n\n--- 3. Genuinely running: keep, revise or retire ---\nreplaced by stronger control, no recurrence  -> retire\nquiet for 90 days, nothing replaces it       -> keep (no replacement, silence is not proof)\nstill blocking real failures                 -> keep\nrecurring despite the control                -> revise\na control is retired only when something stronger took over and the failure stayed away, quiet alone keeps it, and a control that is still stopping real failures is kept; recurrence despite the control sends it to revision\n\n--- 4. Genuinely running: a bounded experiment budget ---\ndays 10 cost  800: within a 15-day, 1000-unit budget = True\ndays 15 cost  800: within a 15-day, 1000-unit budget = True\ndays 10 cost 1200: within a 15-day, 1000-unit budget = False\ndays 16 cost 1300: within a 15-day, 1000-unit budget = False\nboth limits have to hold and either one stops the experiment for review; the 15 days and 1000 units are invented\n\n--- 5. Genuinely running: evidence labels in a brief ---\nobservation median triage time fell to 1.9 minutes\nreported    engineers say the tool is trusted\ninference   it should scale to 10x load\nsimulation  the replay passed 8 of 8\na decision brief that labels each claim as observed, reported, inferred or simulated lets a reader weigh them differently, and only the first of these four supports a statement about what happened in real use"
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
    "headingEn": "Experiment 1: A continue, change or stop brief (all numbers invented)",
    "headingKn": "ಪ್ರಯೋಗ 1: A continue, change or stop brief (all numbers invented)",
    "bodyEn": "What it ran: A continue, change or stop brief (all numbers invented). What the lab concluded: a guardrail breach stopped the pilot even though everything else was inside limits, and missing all three limits gave stop while missing one or two gave change; this three-way rule and its limits are the lab's own",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A continue, change or stop brief (all numbers invented). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a guardrail breach stopped the pilot even though everything else was inside limits, and missing all three limits gave stop while missing one or two gave change; this three-way rule and its limits are the lab's own"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: a continue, change or stop brief (all numbers invented) ---\nall inside limits                      -> ('continue', ['outcome met inside review and cost limits'])\noutcome met, review effort too high    -> ('change', ['human review effort above budget'])\noutcome missed and cost over           -> ('change', ['outcome target not met', 'cost above ceiling'])\neverything missed                      -> ('stop', ['outcome target not met', 'human review effort above budget', 'cost above ceiling'])\nguardrail breached, all else fine      -> ('stop', ['guardrail breached'])"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Did the corrective action work? (ILLUSTRATIVE weekly counts)",
    "headingKn": "ಪ್ರಯೋಗ 2: Did the corrective action work? (ILLUSTRATIVE weekly counts)",
    "bodyEn": "What it ran: Did the corrective action work? (ILLUSTRATIVE weekly counts). What the lab concluded: the first fall of about 63 percent (8.50 to 3.17) is large, and the second shows no change in the mean at all (8.50 to 8.50) although its weekly values moved between 7 and 10; six weeks each side with no control group, so even a large fall is a lead and not proof the action caused it",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Did the corrective action work? (ILLUSTRATIVE weekly counts). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the first fall of about 63 percent (8.50 to 3.17) is large, and the second shows no change in the mean at all (8.50 to 8.50) although its weekly values moved between 7 and 10; six weeks each side with no control group, so even a large fall is a lead and not proof the action caused it"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely computing: did the corrective action work? (ILLUSTRATIVE weekly counts) ---\nafter a fix      mean before=8.50 after=3.17 change=-62.7%\nno real change   mean before=8.50 after=8.50 change=0.0%"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Keep, revise or retire",
    "headingKn": "ಪ್ರಯೋಗ 3: Keep, revise or retire",
    "bodyEn": "What it ran: Keep, revise or retire. What the lab concluded: a control is retired only when something stronger took over and the failure stayed away, quiet alone keeps it, and a control that is still stopping real failures is kept; recurrence despite the control sends it to revision",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Keep, revise or retire. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a control is retired only when something stronger took over and the failure stayed away, quiet alone keeps it, and a control that is still stopping real failures is kept; recurrence despite the control sends it to revision"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: keep, revise or retire ---\nreplaced by stronger control, no recurrence  -> retire\nquiet for 90 days, nothing replaces it       -> keep (no replacement, silence is not proof)\nstill blocking real failures                 -> keep\nrecurring despite the control                -> revise"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A bounded experiment budget",
    "headingKn": "ಪ್ರಯೋಗ 4: A bounded experiment budget",
    "bodyEn": "What it ran: A bounded experiment budget. What the lab concluded: both limits have to hold and either one stops the experiment for review; the 15 days and 1000 units are invented",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A bounded experiment budget. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): both limits have to hold and either one stops the experiment for review; the 15 days and 1000 units are invented"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a bounded experiment budget ---\ndays 10 cost  800: within a 15-day, 1000-unit budget = True\ndays 15 cost  800: within a 15-day, 1000-unit budget = True\ndays 10 cost 1200: within a 15-day, 1000-unit budget = False\ndays 16 cost 1300: within a 15-day, 1000-unit budget = False"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Evidence labels in a brief",
    "headingKn": "ಪ್ರಯೋಗ 5: Evidence labels in a brief",
    "bodyEn": "What it ran: Evidence labels in a brief. What the lab concluded: a decision brief that labels each claim as observed, reported, inferred or simulated lets a reader weigh them differently, and only the first of these four supports a statement about what happened in real use",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Evidence labels in a brief. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a decision brief that labels each claim as observed, reported, inferred or simulated lets a reader weigh them differently, and only the first of these four supports a statement about what happened in real use"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: evidence labels in a brief ---\nobservation median triage time fell to 1.9 minutes\nreported    engineers say the tool is trusted\ninference   it should scale to 10x load\nsimulation  the replay passed 8 of 8"
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
    "headingEn": "Genuinely Found: A Guardrail Stops Everything and Limits Count",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Guardrail ಎಲ್ಲವನ್ನೂ ನಿಲ್ಲಿಸುತ್ತದೆ ಮತ್ತು ಮಿತಿಗಳು ಎಣಿಕೆಯಾಗುತ್ತವೆ",
    "bodyEn": "Section 1: all inside limits gave continue, a review effort of 6.5 minutes against a budget of 4.0 gave change, a missed outcome with cost over the ceiling gave change with two reasons, missing all three limits gave stop and a guardrail breach gave stop even though everything else was fine. Section 2: the weekly mean fell from 8.50 to 3.17 (about 63 percent) after a fix and stayed at 8.50 with no real change.",
    "bodyKn": "ವಿಭಾಗ 1: ಎಲ್ಲವೂ ಮಿತಿಯೊಳಗೆ continue ನೀಡಿತು, 4.0 ಬಜೆಟ್ ವಿರುದ್ಧ 6.5 ನಿಮಿಷ review ಪ್ರಯತ್ನ change ನೀಡಿತು, ಮಿತಿ ಮೀರಿದ ವೆಚ್ಚದೊಂದಿಗೆ ತಪ್ಪಿದ ಫಲಿತಾಂಶ ಎರಡು ಕಾರಣಗಳೊಂದಿಗೆ change ನೀಡಿತು, ಮೂರೂ ಮಿತಿ ತಪ್ಪಿದ್ದು stop ನೀಡಿತು ಮತ್ತು ಉಳಿದೆಲ್ಲವೂ ಸರಿಯಿದ್ದರೂ guardrail ಉಲ್ಲಂಘನೆ stop ನೀಡಿತು. ವಿಭಾಗ 2: ಸರಿಪಡಿಕೆಯ ನಂತರ ವಾರದ ಸರಾಸರಿ 8.50 ರಿಂದ 3.17 ಕ್ಕೆ (ಸುಮಾರು 63 ಶೇಕಡಾ) ಇಳಿಯಿತು ಮತ್ತು ನಿಜ ಬದಲಾವಣೆ ಇಲ್ಲದಾಗ 8.50 ರಲ್ಲೇ ಉಳಿಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Retire Only With a Replacement, and Label the Evidence",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಬದಲಿಯೊಂದಿಗೆ ಮಾತ್ರ ನಿವೃತ್ತಗೊಳಿಸಿ, ಮತ್ತು ಸಾಕ್ಷ್ಯಕ್ಕೆ ಲೇಬಲ್ ಹಾಕಿ",
    "bodyEn": "Section 3: a control replaced by a stronger one with no recurrence was retired, one quiet for 90 days with nothing replacing it was kept, one still blocking real failures was kept and one with four recurrences was revised. Section 4: 10 days and 800 units and 15 days and 800 units were within the 15-day, 1000-unit budget and the two over a limit were not. Section 5: the four claims were labelled observation, reported, inference and simulation.",
    "bodyKn": "ವಿಭಾಗ 3: ಮರುಕಳಿಕೆ ಇಲ್ಲದೆ ಬಲವಾದ ನಿಯಂತ್ರಣದಿಂದ ಬದಲಾದ ನಿಯಂತ್ರಣ ನಿವೃತ್ತವಾಯಿತು, 90 ದಿನ ಶಾಂತವಾಗಿದ್ದು ಏನೂ ಬದಲಿಸದ್ದು ಇರಿಸಲಾಯಿತು, ಇನ್ನೂ ನಿಜ ವೈಫಲ್ಯ ತಡೆಯುತ್ತಿರುವುದು ಇರಿಸಲಾಯಿತು ಮತ್ತು ನಾಲ್ಕು ಮರುಕಳಿಕೆ ಇರುವುದು ಪರಿಷ್ಕರಿಸಲಾಯಿತು. ವಿಭಾಗ 4: 10 ದಿನ ಮತ್ತು 800 ಘಟಕ ಹಾಗೂ 15 ದಿನ ಮತ್ತು 800 ಘಟಕ 15-ದಿನ, 1000-ಘಟಕ ಬಜೆಟ್‌ನೊಳಗೆ ಇದ್ದವು ಮತ್ತು ಮಿತಿ ಮೀರಿದ ಎರಡು ಇರಲಿಲ್ಲ. ವಿಭಾಗ 5: ನಾಲ್ಕು ಹೇಳಿಕೆಗಳು observation, reported, inference ಮತ್ತು simulation ಎಂದು ಲೇಬಲ್ ಆದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Without a way to review and retire controls, the ratchet only tightens, and without labelled evidence a brief cannot tell what happened from what someone expects.",
    "bodyKn": "ನಿಯಂತ್ರಣಗಳನ್ನು ವಿಮರ್ಶಿಸಿ ನಿವೃತ್ತಗೊಳಿಸುವ ದಾರಿ ಇಲ್ಲದಿದ್ದರೆ ratchet ಬಿಗಿಯಾಗುವುದು ಮಾತ್ರ ಮಾಡುತ್ತದೆ, ಮತ್ತು ಲೇಬಲ್ ಮಾಡಿದ ಸಾಕ್ಷ್ಯವಿಲ್ಲದೆ ವರದಿ ಏನಾಯಿತು ಮತ್ತು ಯಾರಾದರೂ ನಿರೀಕ್ಷಿಸುವುದನ್ನು ಬೇರ್ಪಡಿಸಲಾಗದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a big fall after the fix proves it worked.\" Six weeks and no control group make it a lead.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಸರಿಪಡಿಕೆಯ ನಂತರ ದೊಡ್ಡ ಇಳಿಕೆ ಅದು ಕೆಲಸ ಮಾಡಿತು ಎಂದು ಸಾಬೀತು ಮಾಡುತ್ತದೆ.\" ಆರು ವಾರ ಮತ್ತು ನಿಯಂತ್ರಣ ಗುಂಪಿಲ್ಲದೆ ಅದು ಸುಳಿವು ಮಾತ್ರ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Brief: a continue, change or stop recommendation. Effect check: comparing before and after. Retire: remove a control that something stronger replaced. Bounded experiment: limits on days and cost.",
    "bodyKn": "Brief: continue, change ಅಥವಾ stop ಶಿಫಾರಸು. Effect check: ಮೊದಲು ಮತ್ತು ನಂತರ ಹೋಲಿಸುವುದು. Retire: ಬಲವಾದದ್ದು ಬದಲಿಸಿದ ನಿಯಂತ್ರಣ ತೆಗೆಯುವುದು. Bounded experiment: ದಿನಗಳು ಮತ್ತು ವೆಚ್ಚದ ಮೇಲೆ ಮಿತಿಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A guardrail breach stopped a pilot. 2) A 63 percent fall is a lead, not proof. 3) Only replacement plus no recurrence retired a control. 4) Both budget limits must hold. 5) Claims carry evidence labels.",
    "bodyKn": "1) guardrail ಉಲ್ಲಂಘನೆ ಪೈಲಟ್ ನಿಲ್ಲಿಸಿತು. 2) 63 ಶೇಕಡಾ ಇಳಿಕೆ ಸುಳಿವು, ಸಾಬೀತಲ್ಲ. 3) ಬದಲಿ ಮತ್ತು ಮರುಕಳಿಕೆ ಇಲ್ಲದಿರುವುದು ಮಾತ್ರ ನಿಯಂತ್ರಣ ನಿವೃತ್ತಗೊಳಿಸಿತು. 4) ಎರಡೂ ಬಜೆಟ್ ಮಿತಿ ಉಳಿಯಬೇಕು. 5) ಹೇಳಿಕೆಗಳು ಸಾಕ್ಷ್ಯ ಲೇಬಲ್ ಹೊತ್ತಿವೆ."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B fb_3.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B fb_3.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B fb_3.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B fb_3.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did a guardrail breach give?",
      "qKn": "guardrail ಉಲ್ಲಂಘನೆ ಏನು ನೀಡಿತು?",
      "opts": [
       "stop",
       "continue",
       "change",
       "keep"
      ],
      "optsKn": [
       "stop",
       "continue",
       "change",
       "keep"
      ],
      "correct": 0
     },
     {
      "q": "What happened to the control that was quiet for 90 days with no replacement?",
      "qKn": "ಬದಲಿ ಇಲ್ಲದೆ 90 ದಿನ ಶಾಂತವಾಗಿದ್ದ ನಿಯಂತ್ರಣಕ್ಕೆ ಏನಾಯಿತು?",
      "opts": [
       "It was kept",
       "It was retired",
       "It was revised",
       "It was deleted"
      ],
      "optsKn": [
       "ಅದನ್ನು ಇರಿಸಲಾಯಿತು",
       "ಅದನ್ನು ನಿವೃತ್ತಗೊಳಿಸಲಾಯಿತು",
       "ಅದನ್ನು ಪರಿಷ್ಕರಿಸಲಾಯಿತು",
       "ಅದನ್ನು ಅಳಿಸಲಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What was the weekly mean after the fix?",
      "qKn": "ಸರಿಪಡಿಕೆಯ ನಂತರ ವಾರದ ಸರಾಸರಿ ಎಷ್ಟು?",
      "opts": [
       "3.17",
       "8.50",
       "0",
       "9"
      ],
      "optsKn": [
       "3.17",
       "8.50",
       "0",
       "9"
      ],
      "correct": 0
     },
     {
      "q": "Why is a 63 percent fall only a lead?",
      "qKn": "63 ಶೇಕಡಾ ಇಳಿಕೆ ಏಕೆ ಸುಳಿವು ಮಾತ್ರ?",
      "opts": [
       "Six weeks and no control group",
       "It is too small",
       "It is signed",
       "It is a simulation"
      ],
      "optsKn": [
       "ಆರು ವಾರ ಮತ್ತು ನಿಯಂತ್ರಣ ಗುಂಪಿಲ್ಲ",
       "ಅದು ತುಂಬಾ ಚಿಕ್ಕದು",
       "ಅದಕ್ಕೆ ಸಹಿ ಇದೆ",
       "ಅದು ಸಿಮ್ಯುಲೇಶನ್"
      ],
      "correct": 0
     },
     {
      "q": "Which budget case was within 15 days and 1000 units?",
      "qKn": "ಯಾವ ಬಜೆಟ್ ಸಂದರ್ಭ 15 ದಿನ ಮತ್ತು 1000 ಘಟಕಗಳೊಳಗೆ ಇತ್ತು?",
      "opts": [
       "15 days and 800 units",
       "10 days and 1200 units",
       "16 days and 1300 units",
       "None"
      ],
      "optsKn": [
       "15 ದಿನ ಮತ್ತು 800 ಘಟಕ",
       "10 ದಿನ ಮತ್ತು 1200 ಘಟಕ",
       "16 ದಿನ ಮತ್ತು 1300 ಘಟಕ",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
