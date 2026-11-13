module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af7593309067ce975d5d827",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Choose the Smallest Slice That Can Change the Decision (Part 3 of 3) — Outcomes, Stop Rules and Approval",
 "titleKn": "ನಿರ್ಧಾರ ಬದಲಿಸಬಲ್ಲ ಅತಿ ಚಿಕ್ಕ ಭಾಗ ಆರಿಸಿ (ಭಾಗ 3 / 3) — ಫಲಿತಾಂಶಗಳು, ನಿಲುಗಡೆ ನಿಯಮಗಳು ಮತ್ತು ಅನುಮೋದನೆ",
 "desc": "Define the action for every outcome before the run, add stop rules and approval and see why uncalibrated scores mislead.",
 "descKn": "ಓಟಕ್ಕೆ ಮುನ್ನ ಪ್ರತಿ ಫಲಿತಾಂಶಕ್ಕೆ ಕ್ರಿಯೆ ವ್ಯಾಖ್ಯಾನಿಸಿ, ನಿಲುಗಡೆ ನಿಯಮ ಮತ್ತು ಅನುಮೋದನೆ ಸೇರಿಸಿ ಮತ್ತು ಮಾಪನಾಂಕವಿಲ್ಲದ ಅಂಕ ಏಕೆ ದಾರಿ ತಪ್ಪಿಸುತ್ತದೆ ನೋಡಿ.",
 "objectives": [
  "Write an action for each outcome.",
  "Order safety, budget and sample checks.",
  "Apply a stop rule.",
  "Require approval for risky slices.",
  "Recognise uncalibrated weights."
 ],
 "objectivesKn": [
  "ಪ್ರತಿ ಫಲಿತಾಂಶಕ್ಕೆ ಕ್ರಿಯೆ ಬರೆಯಿರಿ.",
  "ಸುರಕ್ಷತೆ, ಬಜೆಟ್ ಮತ್ತು ಮಾದರಿ ಪರಿಶೀಲನೆ ಕ್ರಮಗೊಳಿಸಿ.",
  "ನಿಲುಗಡೆ ನಿಯಮ ಅನ್ವಯಿಸಿ.",
  "ಅಪಾಯಕಾರಿ ಭಾಗಗಳಿಗೆ ಅನುಮೋದನೆ ಬಯಸಿ.",
  "ಮಾಪನಾಂಕವಿಲ್ಲದ ತೂಕ ಗುರುತಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Choose the Smallest Slice That Can Change the Decision (Part 3 of 3)",
    "textKn": "ನಿರ್ಧಾರ ಬದಲಿಸಬಲ್ಲ ಅತಿ ಚಿಕ್ಕ ಭಾಗ ಆರಿಸಿ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: decisions written before the run, six outcomes, stop rules, a safety gate and approval for production-touching slices, and score calibration. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind choosing the smallest slice that can change the decision (required proof, eligibility gates, replay evidence, outcomes, stop rules and safety), not the real software, and the candidates, incident records, thresholds and budgets are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, and the lesson text says the Python shown is an educational reference implementation, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಓಟಕ್ಕೆ ಮುನ್ನ ಬರೆದ ನಿರ್ಧಾರಗಳು, ಆರು ಫಲಿತಾಂಶಗಳು, ನಿಲುಗಡೆ ನಿಯಮಗಳು, production ಮುಟ್ಟುವ ಭಾಗಗಳಿಗೆ ಸುರಕ್ಷತಾ gate ಮತ್ತು ಅನುಮೋದನೆ, ಮತ್ತು ಅಂಕ ಮಾಪನಾಂಕ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ನಿರ್ಧಾರ ಬದಲಿಸಬಲ್ಲ ಅತಿ ಚಿಕ್ಕ ಭಾಗ ಆರಿಸುವುದು (ಅಗತ್ಯ ಪುರಾವೆ, ಅರ್ಹತಾ gates, replay ಸಾಕ್ಷ್ಯ, ಫಲಿತಾಂಶಗಳು, ನಿಲುಗಡೆ ನಿಯಮಗಳು ಮತ್ತು ಸುರಕ್ಷತೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಅಭ್ಯರ್ಥಿಗಳು, incident ದಾಖಲೆಗಳು, ಮಿತಿಗಳು ಮತ್ತು ಬಜೆಟ್‌ಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು ತೋರಿಸಿದ Python ಶೈಕ್ಷಣಿಕ ಉಲ್ಲೇಖ ಅನುಷ್ಠಾನ ಎಂದು lesson ಪಠ್ಯ ಹೇಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Decide What Each Result Will Mean Before Seeing One",
    "textKn": "ಒಂದನ್ನು ನೋಡುವ ಮುನ್ನ ಪ್ರತಿ ಫಲಿತಾಂಶದ ಅರ್ಥ ನಿರ್ಧರಿಸಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Outcomes, Budgets, Safety and Calibration",
    "headingKn": "ಫಲಿತಾಂಶಗಳು, ಬಜೆಟ್‌ಗಳು, ಸುರಕ್ಷತೆ ಮತ್ತು ಮಾಪನಾಂಕ",
    "bodyEn": "A slice only changes a decision if the decision was defined beforehand. This part writes a next action for six outcomes, shows the same 0.95 accuracy giving different outcomes under different sample size, safety and budget, applies a stop rule, requires approval for slices that touch production or write data and shows how uncalibrated weights change which candidate wins. All thresholds, budgets and candidates are invented.",
    "bodyKn": "ನಿರ್ಧಾರವನ್ನು ಮೊದಲೇ ವ್ಯಾಖ್ಯಾನಿಸಿದರೆ ಮಾತ್ರ ಭಾಗ ನಿರ್ಧಾರ ಬದಲಿಸುತ್ತದೆ. ಈ ಭಾಗ ಆರು ಫಲಿತಾಂಶಗಳಿಗೆ ಮುಂದಿನ ಕ್ರಿಯೆ ಬರೆಯುತ್ತದೆ, ಅದೇ 0.95 ನಿಖರತೆ ಬೇರೆ ಮಾದರಿ ಗಾತ್ರ, ಸುರಕ್ಷತೆ ಮತ್ತು ಬಜೆಟ್‌ನಲ್ಲಿ ಬೇರೆ ಫಲಿತಾಂಶ ನೀಡುವುದನ್ನು ತೋರಿಸುತ್ತದೆ, ನಿಲುಗಡೆ ನಿಯಮ ಅನ್ವಯಿಸುತ್ತದೆ, production ಮುಟ್ಟುವ ಅಥವಾ ದತ್ತಾಂಶ ಬರೆಯುವ ಭಾಗಗಳಿಗೆ ಅನುಮೋದನೆ ಬಯಸುತ್ತದೆ ಮತ್ತು ಮಾಪನಾಂಕವಿಲ್ಲದ ತೂಕ ಯಾವ ಅಭ್ಯರ್ಥಿ ಗೆಲ್ಲುತ್ತದೆ ಬದಲಿಸುವುದನ್ನು ತೋರಿಸುತ್ತದೆ. ಎಲ್ಲಾ ಮಿತಿಗಳು, ಬಜೆಟ್‌ಗಳು ಮತ್ತು ಅಭ್ಯರ್ಥಿಗಳು ಕಲ್ಪಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Outcomes and Stop Rules",
    "headingKn": "ಫಲಿತಾಂಶಗಳು ಮತ್ತು ನಿಲುಗಡೆ ನಿಯಮಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">every outcome has a pre-agreed action</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">rule</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">written first</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">outcome</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">six kinds</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">stop rule</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">budget</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">approval</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">production or writes</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">every outcome has a pre-agreed action</text></svg>",
    "captionEn": "Each outcome has an action agreed before the experiment starts.",
    "captionKn": "ಪ್ರತಿ ಫಲಿತಾಂಶಕ್ಕೆ ಪ್ರಯೋಗ ಆರಂಭಕ್ಕೆ ಮುನ್ನ ಒಪ್ಪಿದ ಕ್ರಿಯೆ ಇದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Outcome to action",
    "headingKn": "ಫಲಿತಾಂಶದಿಂದ ಕ್ರಿಯೆಗೆ",
    "headers": [
     "Outcome",
     "Next action"
    ],
    "rows": [
     [
      "supports",
      "build the next slice"
     ],
     [
      "rejects",
      "revise the approach or stop"
     ],
     [
      "ambiguous",
      "narrow the question and rerun"
     ],
     [
      "inconclusive_too_small",
      "collect more records"
     ],
     [
      "blocked_by_safety",
      "redesign as read-only"
     ],
     [
      "stopped_over_budget",
      "review the estimate with the owner"
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
    "filename": "sl_3.py",
    "headingEn": "Outcome, decisions, approval and weights",
    "headingKn": "ಫಲಿತಾಂಶ, ನಿರ್ಧಾರಗಳು, ಅನುಮೋದನೆ ಮತ್ತು ತೂಕಗಳು",
    "descEn": "outcome checks safety, then budget, then sample size and then the thresholds, DECISIONS maps each outcome to an action, needs_approval requires a person for production or writes and rank_with picks a candidate for a pair of weights.",
    "descKn": "outcome ಮೊದಲು ಸುರಕ್ಷತೆ, ನಂತರ ಬಜೆಟ್, ನಂತರ ಮಾದರಿ ಗಾತ್ರ ಮತ್ತು ನಂತರ ಮಿತಿಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ, DECISIONS ಪ್ರತಿ ಫಲಿತಾಂಶವನ್ನು ಕ್ರಿಯೆಗೆ ಮ್ಯಾಪ್ ಮಾಡುತ್ತದೆ, needs_approval production ಅಥವಾ ಬರಹಗಳಿಗೆ ವ್ಯಕ್ತಿ ಬಯಸುತ್ತದೆ ಮತ್ತು rank_with ಒಂದು ಜೋಡಿ ತೂಕಕ್ಕೆ ಅಭ್ಯರ್ಥಿ ಆರಿಸುತ್ತದೆ.",
    "code": "def outcome(accuracy, n, min_n, accept, reject_below, safe, in_budget):\n    if not safe:\n        return \"blocked_by_safety\"\n    if not in_budget:\n        return \"stopped_over_budget\"\n    if n < min_n:\n        return \"inconclusive_too_small\"\n    if accuracy >= accept:\n        return \"supports\"\n    if accuracy < reject_below:\n        return \"rejects\"\n    return \"ambiguous\"\n\n\nDECISIONS = {\n    \"supports\": \"build the next slice\",\n    \"rejects\": \"revise the approach or stop\",\n    \"ambiguous\": \"narrow the question and rerun\",\n    \"inconclusive_too_small\": \"collect more records\",\n    \"blocked_by_safety\": \"redesign as read-only\",\n    \"stopped_over_budget\": \"review the estimate with the owner\",\n}\n\n\ndef needs_approval(touches_production, writes_data):\n    return touches_production or writes_data\n\n\ndef spent(days_used, budget):\n    return days_used <= budget\n\n\ndef rank_with(cands, w_effort, w_risk):\n    return sorted(cands, key=lambda c: (w_effort * c[1] + w_risk * c[2], c[0]))[0][0]"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "sl_3.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() prints the decision table, evaluates six cases, applies a five-day budget, checks four slices for approval and varies the weights over three candidates.",
    "descKn": "main() ನಿರ್ಧಾರ ಕೋಷ್ಟಕ ಮುದ್ರಿಸಿ, ಆರು ಸಂದರ್ಭ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ, ಐದು-ದಿನ ಬಜೆಟ್ ಅನ್ವಯಿಸಿ, ನಾಲ್ಕು ಭಾಗಗಳಿಗೆ ಅನುಮೋದನೆ ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಮೂರು ಅಭ್ಯರ್ಥಿಗಳ ಮೇಲೆ ತೂಕ ಬದಲಿಸುತ್ತದೆ.",
    "code": "def main():\n    rule = dict(min_n=20, accept=0.85, reject_below=0.60)\n    section(\"1. Genuinely running: the decision for every outcome is written before the run (thresholds invented)\")\n    print(\"rule:\", rule)\n    for k, v in DECISIONS.items():\n        print(f\"{k:24} -> {v}\")\n    print(\"five measured outcomes and a safety block each have a named next action, so nobody has to improvise after seeing the number; the thresholds are the lab's own\")\n\n    section(\"2. Genuinely computing: the same accuracy under different conditions\")\n    cases = [(\"strong result\", 0.90, 40, True, True), (\"weak result\", 0.50, 40, True, True), (\"middle result\", 0.72, 40, True, True), (\"good but tiny sample\", 0.95, 8, True, True),\n             (\"good but not read-only\", 0.95, 40, False, True), (\"good but over budget\", 0.95, 40, True, False)]\n    for label, acc, n, safe, budget in cases:\n        o = outcome(acc, n, rule[\"min_n\"], rule[\"accept\"], rule[\"reject_below\"], safe, budget)\n        print(f\"{label:24} acc={acc:.2f} n={n:2} safe={safe!s:5} budget={budget!s:5} -> {o:24} then: {DECISIONS[o]}\")\n    print(\"a 0.95 accuracy gave three different outcomes depending on sample size, safety and budget, so accuracy alone never decides; safety is checked first and the sample size before the threshold, which is an ordering choice made in this lab\")\n\n    section(\"3. Genuinely running: a stop rule ends an experiment that keeps growing\")\n    budget = 5\n    for day in (3, 5, 6, 9):\n        print(f\"day {day}: within budget of {budget} days = {spent(day, budget)}\")\n    print(\"the budget is checked against days used, and an experiment past it stops for review instead of quietly becoming the project; the five-day budget is invented\")\n\n    section(\"4. Genuinely running: slices that touch production need a person\")\n    for label, prod, writes in ((\"replay on a copy\", False, False), (\"shadow run against live reads\", True, False), (\"write recommendation to ticket\", False, True), (\"auto-remediate\", True, True)):\n        print(f\"{label:34} touches production={prod!s:5} writes={writes!s:5} approval required={needs_approval(prod, writes)}\")\n    print(\"any slice that reads live production or writes anywhere needs an approval in this lab, which is stricter than a team may want for a read-only shadow run; the rule is a conservative default and the lab did not model who approves\")\n\n    section(\"5. Genuinely measuring: uncalibrated scores flip the answer\")\n    cands = [(\"slice A\", 4, 4), (\"slice B\", 7, 2), (\"slice C\", 10, 1)]\n    for we, wr in ((1, 1), (1, 3), (3, 1), (1, 10)):\n        print(f\"w_effort={we:2} w_risk={wr:2} -> {rank_with(cands, we, wr)}\")\n    print(\"the same three candidates produce slice A, B or C depending on weights nobody calibrated (at weights 1 and 3, slices B and C tied at 13 and the name order picked B), which is why the eligibility gate comes first and why the weights have to be agreed and recorded before the comparison; these candidates and weights are invented\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the decision for every outcome is written before the run (thresholds invented) ---\nrule: {'min_n': 20, 'accept': 0.85, 'reject_below': 0.6}\nsupports                 -> build the next slice\nrejects                  -> revise the approach or stop\nambiguous                -> narrow the question and rerun\ninconclusive_too_small   -> collect more records\nblocked_by_safety        -> redesign as read-only\nstopped_over_budget      -> review the estimate with the owner\nfive measured outcomes and a safety block each have a named next action, so nobody has to improvise after seeing the number; the thresholds are the lab's own\n\n--- 2. Genuinely computing: the same accuracy under different conditions ---\nstrong result            acc=0.90 n=40 safe=True  budget=True  -> supports                 then: build the next slice\nweak result              acc=0.50 n=40 safe=True  budget=True  -> rejects                  then: revise the approach or stop\nmiddle result            acc=0.72 n=40 safe=True  budget=True  -> ambiguous                then: narrow the question and rerun\ngood but tiny sample     acc=0.95 n= 8 safe=True  budget=True  -> inconclusive_too_small   then: collect more records\ngood but not read-only   acc=0.95 n=40 safe=False budget=True  -> blocked_by_safety        then: redesign as read-only\ngood but over budget     acc=0.95 n=40 safe=True  budget=False -> stopped_over_budget      then: review the estimate with the owner\na 0.95 accuracy gave three different outcomes depending on sample size, safety and budget, so accuracy alone never decides; safety is checked first and the sample size before the threshold, which is an ordering choice made in this lab\n\n--- 3. Genuinely running: a stop rule ends an experiment that keeps growing ---\nday 3: within budget of 5 days = True\nday 5: within budget of 5 days = True\nday 6: within budget of 5 days = False\nday 9: within budget of 5 days = False\nthe budget is checked against days used, and an experiment past it stops for review instead of quietly becoming the project; the five-day budget is invented\n\n--- 4. Genuinely running: slices that touch production need a person ---\nreplay on a copy                   touches production=False writes=False approval required=False\nshadow run against live reads      touches production=True  writes=False approval required=True\nwrite recommendation to ticket     touches production=False writes=True  approval required=True\nauto-remediate                     touches production=True  writes=True  approval required=True\nany slice that reads live production or writes anywhere needs an approval in this lab, which is stricter than a team may want for a read-only shadow run; the rule is a conservative default and the lab did not model who approves\n\n--- 5. Genuinely measuring: uncalibrated scores flip the answer ---\nw_effort= 1 w_risk= 1 -> slice A\nw_effort= 1 w_risk= 3 -> slice B\nw_effort= 3 w_risk= 1 -> slice A\nw_effort= 1 w_risk=10 -> slice C\nthe same three candidates produce slice A, B or C depending on weights nobody calibrated (at weights 1 and 3, slices B and C tied at 13 and the name order picked B), which is why the eligibility gate comes first and why the weights have to be agreed and recorded before the comparison; these candidates and weights are invented"
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
    "headingEn": "Genuinely Found: 0.95 Accuracy, Three Different Outcomes",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: 0.95 ನಿಖರತೆ, ಮೂರು ಬೇರೆ ಫಲಿತಾಂಶಗಳು",
    "bodyEn": "Section 2: 0.90 with 40 records supported, 0.50 rejected and 0.72 was ambiguous, while 0.95 gave inconclusive_too_small at 8 records, blocked_by_safety when not read-only and stopped_over_budget when over budget. Section 3: days 3 and 5 were within the five-day budget and days 6 and 9 were not.",
    "bodyKn": "ವಿಭಾಗ 2: 40 ದಾಖಲೆಗಳೊಂದಿಗೆ 0.90 supports, 0.50 rejects ಮತ್ತು 0.72 ambiguous ಆಯಿತು, ಆದರೆ 0.95 ಎಂಟು ದಾಖಲೆಗಳಲ್ಲಿ inconclusive_too_small, read-only ಅಲ್ಲದಾಗ blocked_by_safety ಮತ್ತು ಬಜೆಟ್ ಮೀರಿದಾಗ stopped_over_budget ನೀಡಿತು. ವಿಭಾಗ 3: ದಿನ 3 ಮತ್ತು 5 ಐದು-ದಿನ ಬಜೆಟ್‌ನೊಳಗೆ ಇದ್ದವು ಮತ್ತು ದಿನ 6 ಮತ್ತು 9 ಇರಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Approval and Uncalibrated Weights",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅನುಮೋದನೆ ಮತ್ತು ಮಾಪನಾಂಕವಿಲ್ಲದ ತೂಕಗಳು",
    "bodyEn": "Section 4: a replay on a copy needed no approval, and a shadow run against live reads, a write to a ticket and auto-remediation each needed one, which the lab notes is stricter than some teams would want. Section 5: weights 1,1 picked slice A, 1,3 picked B after B and C tied at 13 and the name order decided, 3,1 picked A and 1,10 picked C.",
    "bodyKn": "ವಿಭಾಗ 4: ಪ್ರತಿಯ ಮೇಲಿನ replay ಗೆ ಅನುಮೋದನೆ ಬೇಕಿರಲಿಲ್ಲ, ಮತ್ತು ಲೈವ್ ಓದುಗಳ ವಿರುದ್ಧ shadow run, ticket ಗೆ ಬರಹ ಮತ್ತು auto-remediation ಪ್ರತಿಯೊಂದಕ್ಕೂ ಬೇಕಿತ್ತು, ಇದು ಕೆಲವು ತಂಡಗಳು ಬಯಸುವುದಕ್ಕಿಂತ ಕಠಿಣ ಎಂದು ಲ್ಯಾಬ್ ಗಮನಿಸುತ್ತದೆ. ವಿಭಾಗ 5: ತೂಕ 1,1 slice A ಆರಿಸಿತು, 1,3 B ಮತ್ತು C 13 ರಲ್ಲಿ tie ಆಗಿ ಹೆಸರಿನ ಕ್ರಮ ನಿರ್ಧರಿಸಿದ ನಂತರ B ಆರಿಸಿತು, 3,1 A ಮತ್ತು 1,10 C ಆರಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Without a rule written first, any result can be read as support, and safety or budget problems get discovered after the damage.",
    "bodyKn": "ಮೊದಲು ಬರೆದ ನಿಯಮವಿಲ್ಲದಿದ್ದರೆ ಯಾವುದೇ ಫಲಿತಾಂಶ ಬೆಂಬಲ ಎಂದು ಓದಬಹುದು, ಮತ್ತು ಸುರಕ್ಷತೆ ಅಥವಾ ಬಜೆಟ್ ಸಮಸ್ಯೆಗಳು ಹಾನಿಯ ನಂತರ ಪತ್ತೆಯಾಗುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"high accuracy means go.\" The same 0.95 was blocked, stopped or inconclusive under other conditions.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಹೆಚ್ಚಿನ ನಿಖರತೆ ಎಂದರೆ ಮುಂದುವರಿಯಿರಿ.\" ಅದೇ 0.95 ಬೇರೆ ಪರಿಸ್ಥಿತಿಗಳಲ್ಲಿ ತಡೆಯಲ್ಪಟ್ಟಿತು, ನಿಲ್ಲಿಸಲ್ಪಟ್ಟಿತು ಅಥವಾ ನಿರ್ಣಾಯಕವಲ್ಲದ್ದಾಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Stop rule: a budget limit that ends the experiment. Inconclusive: too few records to decide. Blocked by safety: the slice was not read-only. Calibration: tying score weights to something observed.",
    "bodyKn": "Stop rule: ಪ್ರಯೋಗ ಕೊನೆಗೊಳಿಸುವ ಬಜೆಟ್ ಮಿತಿ. Inconclusive: ನಿರ್ಧರಿಸಲು ತುಂಬಾ ಕಡಿಮೆ ದಾಖಲೆಗಳು. Blocked by safety: ಭಾಗ read-only ಆಗಿರಲಿಲ್ಲ. Calibration: ಅಂಕ ತೂಕವನ್ನು ವೀಕ್ಷಿತ ಯಾವುದಕ್ಕೋ ಜೋಡಿಸುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Every outcome had an action before the run. 2) 0.95 gave three different outcomes. 3) Over-budget stopped the experiment. 4) Production or writes needed approval. 5) Weights flipped the winner.",
    "bodyKn": "1) ಓಟಕ್ಕೆ ಮುನ್ನ ಪ್ರತಿ ಫಲಿತಾಂಶಕ್ಕೆ ಕ್ರಿಯೆ ಇತ್ತು. 2) 0.95 ಮೂರು ಬೇರೆ ಫಲಿತಾಂಶ ನೀಡಿತು. 3) ಬಜೆಟ್ ಮೀರಿದ್ದು ಪ್ರಯೋಗ ನಿಲ್ಲಿಸಿತು. 4) Production ಅಥವಾ ಬರಹಗಳಿಗೆ ಅನುಮೋದನೆ ಬೇಕಿತ್ತು. 5) ತೂಕಗಳು ವಿಜೇತನನ್ನು ಬದಲಿಸಿದವು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What outcome did 0.95 with 8 records get?",
      "qKn": "8 ದಾಖಲೆಗಳೊಂದಿಗೆ 0.95 ಗೆ ಯಾವ ಫಲಿತಾಂಶ ಸಿಕ್ಕಿತು?",
      "opts": [
       "inconclusive_too_small",
       "supports",
       "rejects",
       "ambiguous"
      ],
      "optsKn": [
       "inconclusive_too_small",
       "supports",
       "rejects",
       "ambiguous"
      ],
      "correct": 0
     },
     {
      "q": "What is checked first in outcome()?",
      "qKn": "outcome() ನಲ್ಲಿ ಮೊದಲು ಏನು ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ?",
      "opts": [
       "Safety",
       "Sample size",
       "The threshold",
       "Cost"
      ],
      "optsKn": [
       "ಸುರಕ್ಷತೆ",
       "ಮಾದರಿ ಗಾತ್ರ",
       "ಮಿತಿ",
       "ವೆಚ್ಚ"
      ],
      "correct": 0
     },
     {
      "q": "Which slice needed no approval?",
      "qKn": "ಯಾವ ಭಾಗಕ್ಕೆ ಅನುಮೋದನೆ ಬೇಕಿರಲಿಲ್ಲ?",
      "opts": [
       "A replay on a copy",
       "A shadow run on live reads",
       "A write to a ticket",
       "Auto-remediation"
      ],
      "optsKn": [
       "ಪ್ರತಿಯ ಮೇಲಿನ replay",
       "ಲೈವ್ ಓದುಗಳ ಮೇಲೆ shadow run",
       "ticket ಗೆ ಬರಹ",
       "Auto-remediation"
      ],
      "correct": 0
     },
     {
      "q": "Which slice won at weights 1 and 10?",
      "qKn": "ತೂಕ 1 ಮತ್ತು 10 ರಲ್ಲಿ ಯಾವ slice ಗೆದ್ದಿತು?",
      "opts": [
       "slice C",
       "slice A",
       "slice B",
       "None"
      ],
      "optsKn": [
       "slice C",
       "slice A",
       "slice B",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Why does the weight set 1 and 3 need caution?",
      "qKn": "ತೂಕ ಸೆಟ್ 1 ಮತ್ತು 3 ಗೆ ಎಚ್ಚರ ಏಕೆ ಬೇಕು?",
      "opts": [
       "B and C tied and the name decided",
       "It is the default",
       "It is signed",
       "It is random"
      ],
      "optsKn": [
       "B ಮತ್ತು C tie ಆಗಿ ಹೆಸರು ನಿರ್ಧರಿಸಿತು",
       "ಅದು ಡೀಫಾಲ್ಟ್",
       "ಅದಕ್ಕೆ ಸಹಿ ಇದೆ",
       "ಅದು ಯಾದೃಚ್ಛಿಕ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
