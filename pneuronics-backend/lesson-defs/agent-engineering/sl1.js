module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af7593309067ce975d5d827",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Choose the Smallest Slice That Can Change the Decision (Part 1 of 3) — Proof, Gates and Scores",
 "titleKn": "ನಿರ್ಧಾರ ಬದಲಿಸಬಲ್ಲ ಅತಿ ಚಿಕ್ಕ ಭಾಗ ಆರಿಸಿ (ಭಾಗ 1 / 3) — ಪುರಾವೆ, Gates ಮತ್ತು ಅಂಕಗಳು",
 "desc": "Write required proof as a set, gate candidates before scoring and see why the cheapest slice is not always the right one.",
 "descKn": "ಅಗತ್ಯ ಪುರಾವೆಯನ್ನು ಸೆಟ್ ಆಗಿ ಬರೆದು, ಅಂಕದ ಮುನ್ನ ಅಭ್ಯರ್ಥಿಗಳನ್ನು gate ಮಾಡಿ ಮತ್ತು ಅತಿ ಅಗ್ಗದ ಭಾಗ ಯಾವಾಗಲೂ ಸರಿಯಲ್ಲ ಏಕೆ ನೋಡಿ.",
 "objectives": [
  "Write required proof as a set.",
  "Gate before scoring.",
  "Score only eligible candidates.",
  "Notice declared coverage.",
  "Record rejection reasons."
 ],
 "objectivesKn": [
  "ಅಗತ್ಯ ಪುರಾವೆಯನ್ನು ಸೆಟ್ ಆಗಿ ಬರೆಯಿರಿ.",
  "ಅಂಕದ ಮುನ್ನ gate ಮಾಡಿ.",
  "ಅರ್ಹ ಅಭ್ಯರ್ಥಿಗಳಿಗೆ ಮಾತ್ರ ಅಂಕ ನೀಡಿ.",
  "ಘೋಷಿತ ವ್ಯಾಪ್ತಿ ಗಮನಿಸಿ.",
  "ತಿರಸ್ಕಾರ ಕಾರಣ ದಾಖಲಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Choose the Smallest Slice That Can Change the Decision (Part 1 of 3)",
    "textKn": "ನಿರ್ಧಾರ ಬದಲಿಸಬಲ್ಲ ಅತಿ ಚಿಕ್ಕ ಭಾಗ ಆರಿಸಿ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: required proof as a set, a strict eligibility gate before scoring, a score over eligible candidates, a cheaper candidate that proves too little, weight sensitivity and a decision artifact. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind choosing the smallest slice that can change the decision (required proof, eligibility gates, replay evidence, outcomes, stop rules and safety), not the real software, and the candidates, incident records, thresholds and budgets are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, and the lesson text says the Python shown is an educational reference implementation, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಸೆಟ್ ಆಗಿ ಅಗತ್ಯ ಪುರಾವೆ, ಅಂಕ ನೀಡುವ ಮುನ್ನ ಕಟ್ಟುನಿಟ್ಟಿನ ಅರ್ಹತಾ gate, ಅರ್ಹ ಅಭ್ಯರ್ಥಿಗಳ ಮೇಲೆ ಅಂಕ, ತುಂಬಾ ಕಡಿಮೆ ಸಾಬೀತು ಮಾಡುವ ಅಗ್ಗದ ಅಭ್ಯರ್ಥಿ, ತೂಕ ಸಂವೇದನೆ ಮತ್ತು ನಿರ್ಧಾರ ಕಲಾಕೃತಿ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ನಿರ್ಧಾರ ಬದಲಿಸಬಲ್ಲ ಅತಿ ಚಿಕ್ಕ ಭಾಗ ಆರಿಸುವುದು (ಅಗತ್ಯ ಪುರಾವೆ, ಅರ್ಹತಾ gates, replay ಸಾಕ್ಷ್ಯ, ಫಲಿತಾಂಶಗಳು, ನಿಲುಗಡೆ ನಿಯಮಗಳು ಮತ್ತು ಸುರಕ್ಷತೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಅಭ್ಯರ್ಥಿಗಳು, incident ದಾಖಲೆಗಳು, ಮಿತಿಗಳು ಮತ್ತು ಬಜೆಟ್‌ಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು ತೋರಿಸಿದ Python ಶೈಕ್ಷಣಿಕ ಉಲ್ಲೇಖ ಅನುಷ್ಠಾನ ಎಂದು lesson ಪಠ್ಯ ಹೇಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Small Is Not the Same as Informative",
    "textKn": "ಚಿಕ್ಕದು ಎಂದರೆ ಮಾಹಿತಿಪೂರ್ಣ ಎಂದಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Eligibility Before Ranking",
    "headingKn": "ಶ್ರೇಣಿಯ ಮುನ್ನ ಅರ್ಹತೆ",
    "bodyEn": "A two-day dashboard on hard-coded data is small and tells a team nothing about whether real incident records identify the failing service. The lesson defines a slice by the proof it must produce. This part writes the required proof as a set, rejects any candidate that does not cover all of it and only then scores the survivors by effort and risk, showing the cheaper candidate that proves too little, how declared coverage can be wrong and how the weights change the result.",
    "bodyKn": "hard-coded ದತ್ತಾಂಶದ ಮೇಲಿನ ಎರಡು-ದಿನದ dashboard ಚಿಕ್ಕದು ಮತ್ತು ನಿಜ incident ದಾಖಲೆಗಳು ವಿಫಲ ಸೇವೆಯನ್ನು ಗುರುತಿಸುತ್ತವೆಯೇ ಎಂದು ತಂಡಕ್ಕೆ ಏನೂ ಹೇಳುವುದಿಲ್ಲ. Lesson ಭಾಗವನ್ನು ಅದು ಉತ್ಪಾದಿಸಬೇಕಾದ ಪುರಾವೆಯಿಂದ ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ. ಈ ಭಾಗ ಅಗತ್ಯ ಪುರಾವೆಯನ್ನು ಸೆಟ್ ಆಗಿ ಬರೆದು, ಅದನ್ನು ಪೂರ್ತಿ ಒಳಗೊಳ್ಳದ ಅಭ್ಯರ್ಥಿಯನ್ನು ತಿರಸ್ಕರಿಸಿ, ನಂತರ ಮಾತ್ರ ಉಳಿದವುಗಳಿಗೆ ಪ್ರಯತ್ನ ಮತ್ತು ಅಪಾಯದಿಂದ ಅಂಕ ನೀಡುತ್ತದೆ, ತುಂಬಾ ಕಡಿಮೆ ಸಾಬೀತು ಮಾಡುವ ಅಗ್ಗದ ಅಭ್ಯರ್ಥಿ, ಘೋಷಿತ ವ್ಯಾಪ್ತಿ ಹೇಗೆ ತಪ್ಪಾಗಬಹುದು ಮತ್ತು ತೂಕ ಫಲಿತಾಂಶ ಹೇಗೆ ಬದಲಿಸುತ್ತದೆ ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Gate Before Score",
    "headingKn": "ಅಂಕದ ಮುನ್ನ Gate",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">filter by proof first, then compare cost</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">required proof</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a set</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">gate</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">eligible or not</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">score</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">eligible only</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">artifact</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">why rejected</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">filter by proof first, then compare cost</text></svg>",
    "captionEn": "Candidates missing required proof are removed before any scoring.",
    "captionKn": "ಅಗತ್ಯ ಪುರಾವೆ ಕಾಣೆಯಾದ ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಅಂಕ ನೀಡುವ ಮುನ್ನ ತೆಗೆಯಲಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Lab candidates (effort and risk invented)",
    "headingKn": "ಲ್ಯಾಬ್ ಅಭ್ಯರ್ಥಿಗಳು (ಪ್ರಯತ್ನ ಮತ್ತು ಅಪಾಯ ಕಲ್ಪಿತ)",
    "headers": [
     "Candidate",
     "Score",
     "Missing proof"
    ],
    "rows": [
     [
      "hard-coded dashboard",
      "4.0",
      "read_only, real_records"
     ],
     [
      "replay script on real records",
      "5.0",
      "operator_review"
     ],
     [
      "replay with operator review",
      "10.0",
      "none"
     ],
     [
      "live agent in production",
      "15.0",
      "read_only"
     ],
     [
      "full vertical slice with approval",
      "16.0",
      "none"
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
    "filename": "sl_1.py",
    "headingEn": "Candidates, the gate and the score",
    "headingKn": "ಅಭ್ಯರ್ಥಿಗಳು, gate ಮತ್ತು ಅಂಕ",
    "descEn": "Candidate holds the proof set, effort and risk, missing subtracts the proof a candidate has from the required set, eligible keeps those with nothing missing, score weighs effort and risk and choose returns None when nothing is eligible.",
    "descKn": "Candidate ಪುರಾವೆ ಸೆಟ್, ಪ್ರಯತ್ನ ಮತ್ತು ಅಪಾಯ ಹೊಂದಿದೆ, missing ಅಭ್ಯರ್ಥಿಯ ಪುರಾವೆಯನ್ನು ಅಗತ್ಯ ಸೆಟ್‌ನಿಂದ ಕಳೆಯುತ್ತದೆ, eligible ಏನೂ ಕಾಣೆಯಾಗದವನ್ನು ಉಳಿಸುತ್ತದೆ, score ಪ್ರಯತ್ನ ಮತ್ತು ಅಪಾಯ ತೂಗುತ್ತದೆ ಮತ್ತು ಯಾವುದೂ ಅರ್ಹವಲ್ಲದಿದ್ದರೆ choose None ಮರಳಿಸುತ್ತದೆ.",
    "code": "@dataclass(frozen=True)\nclass Candidate:\n    name: str\n    proves: frozenset\n    effort_days: int\n    risk: int\n\n\ndef missing(c, required=REQUIRED):\n    return sorted(required - c.proves)\n\n\ndef eligible(cands, required=REQUIRED):\n    return [c for c in cands if not (required - c.proves)]\n\n\ndef score(c, w_effort=1.0, w_risk=2.0):\n    return w_effort * c.effort_days + w_risk * c.risk\n\n\ndef choose(cands, required=REQUIRED, **w):\n    ok = eligible(cands, required)\n    if not ok:\n        return None\n    return min(ok, key=lambda c: (score(c, **w), c.name))"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "sl_1.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() lists what each candidate fails to prove, gates before scoring, adds a candidate with declared coverage, varies the weights and writes a decision artifact.",
    "descKn": "main() ಪ್ರತಿ ಅಭ್ಯರ್ಥಿ ಸಾಬೀತು ಮಾಡದ್ದನ್ನು ಪಟ್ಟಿ ಮಾಡಿ, ಅಂಕದ ಮುನ್ನ gate ಮಾಡಿ, ಘೋಷಿತ ವ್ಯಾಪ್ತಿಯ ಅಭ್ಯರ್ಥಿ ಸೇರಿಸಿ, ತೂಕ ಬದಲಿಸಿ ಮತ್ತು ನಿರ್ಧಾರ ಕಲಾಕೃತಿ ಬರೆಯುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: what each candidate fails to prove\")\n    for c in CANDS:\n        print(f\"{c.name:36} effort={c.effort_days:2}d risk={c.risk} score={score(c):5.1f} missing={missing(c)}\")\n    print(\"only candidates with an empty missing list can answer the question the three assumptions pose; the dashboard is the smallest and proves one of the three\")\n\n    section(\"2. Genuinely running: eligibility first, then the score\")\n    print(\"eligible:\", [c.name for c in eligible(CANDS)])\n    print(\"chosen  :\", choose(CANDS).name)\n    print(\"lowest score among all candidates:\", min(CANDS, key=score).name)\n    print(\"the dashboard has the lowest raw score and the gate removed it, along with the replay script and the live agent, leaving two candidates, and the cheaper of those was chosen; ranking first and filtering afterwards would have returned the dashboard\")\n\n    section(\"3. Genuinely measuring: declared coverage is not evidence\")\n    declared = Candidate(\"replay on real records (declared)\", frozenset({\"real_records\", \"operator_review\", \"read_only\"}), 3, 1)\n    print(\"declared candidate eligible:\", bool(eligible([declared])), \"| score:\", score(declared))\n    print(\"chosen when it is in the list:\", choose(CANDS + [declared]).name)\n    print(\"a candidate that lists all three proofs and costs three days wins the comparison, because the gate only reads the set it was given; whether the slice really covers the proof is what Part 2 checks by running one\")\n\n    section(\"4. Genuinely measuring: the weights decide between eligible candidates\")\n    for we, wr in ((1.0, 2.0), (1.0, 0.0), (0.0, 1.0), (1.0, 5.0)):\n        print(f\"w_effort={we} w_risk={wr}: chosen={choose(CANDS, w_effort=we, w_risk=wr).name}\")\n    print(\"the winner changed only when the effort weight went to zero, and then the two eligible candidates both had risk 2, so the choice fell to the name tie-break (full... sorts before replay...) and not to any real preference; a weight set that leaves a tie is a warning sign, and the numbers 1 and 2 in this lab are arbitrary and were not calibrated against anything\")\n\n    section(\"5. Genuinely running: the decision artifact and the empty case\")\n    pick = choose(CANDS)\n    art = {\"chosen\": pick.name, \"required_proof\": sorted(REQUIRED), \"rejected\": {c.name: missing(c) for c in CANDS if missing(c)}, \"weights\": {\"effort\": 1.0, \"risk\": 2.0}}\n    print(json.dumps(art, indent=1, sort_keys=True))\n    print(\"no eligible candidate ->\", choose([CANDS[0], CANDS[1]]))\n    print(\"the artifact records why each rejected candidate was rejected, and when nothing is eligible the function returns None instead of the least bad option, which forces a person to widen the options or narrow the proof\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: what each candidate fails to prove ---\nhard-coded dashboard                 effort= 2d risk=1 score=  4.0 missing=['read_only', 'real_records']\nreplay script on real records        effort= 3d risk=1 score=  5.0 missing=['operator_review']\nreplay with operator review          effort= 6d risk=2 score= 10.0 missing=[]\nlive agent in production             effort= 5d risk=5 score= 15.0 missing=['read_only']\nfull vertical slice with approval    effort=12d risk=2 score= 16.0 missing=[]\nonly candidates with an empty missing list can answer the question the three assumptions pose; the dashboard is the smallest and proves one of the three\n\n--- 2. Genuinely running: eligibility first, then the score ---\neligible: ['replay with operator review', 'full vertical slice with approval']\nchosen  : replay with operator review\nlowest score among all candidates: hard-coded dashboard\nthe dashboard has the lowest raw score and the gate removed it, along with the replay script and the live agent, leaving two candidates, and the cheaper of those was chosen; ranking first and filtering afterwards would have returned the dashboard\n\n--- 3. Genuinely measuring: declared coverage is not evidence ---\ndeclared candidate eligible: True | score: 5.0\nchosen when it is in the list: replay on real records (declared)\na candidate that lists all three proofs and costs three days wins the comparison, because the gate only reads the set it was given; whether the slice really covers the proof is what Part 2 checks by running one\n\n--- 4. Genuinely measuring: the weights decide between eligible candidates ---\nw_effort=1.0 w_risk=2.0: chosen=replay with operator review\nw_effort=1.0 w_risk=0.0: chosen=replay with operator review\nw_effort=0.0 w_risk=1.0: chosen=full vertical slice with approval\nw_effort=1.0 w_risk=5.0: chosen=replay with operator review\nthe winner changed only when the effort weight went to zero, and then the two eligible candidates both had risk 2, so the choice fell to the name tie-break (full... sorts before replay...) and not to any real preference; a weight set that leaves a tie is a warning sign, and the numbers 1 and 2 in this lab are arbitrary and were not calibrated against anything\n\n--- 5. Genuinely running: the decision artifact and the empty case ---\n{\n \"chosen\": \"replay with operator review\",\n \"rejected\": {\n  \"hard-coded dashboard\": [\n   \"read_only\",\n   \"real_records\"\n  ],\n  \"live agent in production\": [\n   \"read_only\"\n  ],\n  \"replay script on real records\": [\n   \"operator_review\"\n  ]\n },\n \"required_proof\": [\n  \"operator_review\",\n  \"read_only\",\n  \"real_records\"\n ],\n \"weights\": {\n  \"effort\": 1.0,\n  \"risk\": 2.0\n }\n}\nno eligible candidate -> None\nthe artifact records why each rejected candidate was rejected, and when nothing is eligible the function returns None instead of the least bad option, which forces a person to widen the options or narrow the proof"
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
    "headingEn": "Genuinely Found: The Lowest Score Was Not Eligible",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕಡಿಮೆ ಅಂಕ ಅರ್ಹವಾಗಿರಲಿಲ್ಲ",
    "bodyEn": "Section 1: the dashboard scored 4.0 and was missing read_only and real_records, the replay script scored 5.0 and was missing operator_review, the live agent scored 15.0 and was missing read_only. Section 2: only \"replay with operator review\" (10.0) and \"full vertical slice with approval\" (16.0) were eligible, the cheaper one was chosen, and the lowest raw score would have returned the dashboard.",
    "bodyKn": "ವಿಭಾಗ 1: dashboard 4.0 ಅಂಕ ಪಡೆದು read_only ಮತ್ತು real_records ಕಾಣೆಯಾಗಿದ್ದವು, replay script 5.0 ಪಡೆದು operator_review ಕಾಣೆ, live agent 15.0 ಪಡೆದು read_only ಕಾಣೆ. ವಿಭಾಗ 2: \"replay with operator review\" (10.0) ಮತ್ತು \"full vertical slice with approval\" (16.0) ಮಾತ್ರ ಅರ್ಹವಾಗಿದ್ದವು, ಅಗ್ಗದ್ದನ್ನು ಆರಿಸಲಾಯಿತು, ಮತ್ತು ಕಡಿಮೆ ಕಚ್ಚಾ ಅಂಕ dashboard ಮರಳಿಸುತ್ತಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Declared Coverage, Weights and the Empty Case",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಘೋಷಿತ ವ್ಯಾಪ್ತಿ, ತೂಕಗಳು ಮತ್ತು ಖಾಲಿ ಸಂದರ್ಭ",
    "bodyEn": "Section 3: a candidate that merely listed all three proofs at three days won, because the gate reads only the set it is given. Section 4: the choice changed only when the effort weight went to zero, and then the two eligible candidates tied at risk 2 and the name order decided. Section 5: the artifact recorded why three candidates were rejected, and with no eligible candidate the function returned None.",
    "bodyKn": "ವಿಭಾಗ 3: ಮೂರು ಪುರಾವೆಗಳನ್ನೂ ಕೇವಲ ಪಟ್ಟಿ ಮಾಡಿದ ಮೂರು-ದಿನದ ಅಭ್ಯರ್ಥಿ ಗೆದ್ದಿತು, ಏಕೆಂದರೆ gate ತನಗೆ ನೀಡಿದ ಸೆಟ್ ಮಾತ್ರ ಓದುತ್ತದೆ. ವಿಭಾಗ 4: ಪ್ರಯತ್ನ ತೂಕ ಶೂನ್ಯಕ್ಕೆ ಹೋದಾಗ ಮಾತ್ರ ಆಯ್ಕೆ ಬದಲಾಯಿತು, ಮತ್ತು ಆಗ ಎರಡು ಅರ್ಹ ಅಭ್ಯರ್ಥಿಗಳು ಅಪಾಯ 2 ರಲ್ಲಿ tie ಆಗಿ ಹೆಸರಿನ ಕ್ರಮ ನಿರ್ಧರಿಸಿತು. ವಿಭಾಗ 5: ಕಲಾಕೃತಿ ಮೂರು ಅಭ್ಯರ್ಥಿಗಳು ಏಕೆ ತಿರಸ್ಕೃತವಾದರು ಎಂದು ದಾಖಲಿಸಿತು, ಮತ್ತು ಅರ್ಹ ಅಭ್ಯರ್ಥಿ ಇಲ್ಲದಾಗ ಕಾರ್ಯ None ಮರಳಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A cheap experiment that cannot change the decision still costs the time spent on it, and it can create false confidence.",
    "bodyKn": "ನಿರ್ಧಾರ ಬದಲಿಸಲಾಗದ ಅಗ್ಗದ ಪ್ರಯೋಗಕ್ಕೂ ಅದಕ್ಕೆ ಕಳೆದ ಸಮಯ ವೆಚ್ಚವಾಗುತ್ತದೆ, ಮತ್ತು ಅದು ಸುಳ್ಳು ವಿಶ್ವಾಸ ಸೃಷ್ಟಿಸಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the cheapest slice is the best slice.\" The dashboard had the lowest score and proved one of three things.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಅತಿ ಅಗ್ಗದ ಭಾಗವೇ ಉತ್ತಮ.\" dashboard ಗೆ ಕಡಿಮೆ ಅಂಕ ಇದ್ದು ಮೂರರಲ್ಲಿ ಒಂದನ್ನು ಮಾತ್ರ ಸಾಬೀತು ಮಾಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Slice: a narrow piece of work crossing the real workflow. Required proof: what must be shown. Eligibility gate: a filter on proof coverage. Declared coverage: a claim, not evidence.",
    "bodyKn": "Slice: ನಿಜ ಕಾರ್ಯಪ್ರವಾಹ ದಾಟುವ ಕಿರಿದಾದ ಕೆಲಸದ ತುಂಡು. Required proof: ತೋರಿಸಬೇಕಾದದ್ದು. Eligibility gate: ಪುರಾವೆ ವ್ಯಾಪ್ತಿಯ ಮೇಲೆ ಫಿಲ್ಟರ್. Declared coverage: ಹೇಳಿಕೆ, ಸಾಕ್ಷ್ಯವಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Each candidate was checked for missing proof. 2) The gate removed the lowest score. 3) Declared coverage won without evidence. 4) Weights mattered, and one tie fell to the name. 5) No eligible candidate returned None.",
    "bodyKn": "1) ಪ್ರತಿ ಅಭ್ಯರ್ಥಿಯಲ್ಲಿ ಕಾಣೆಯಾದ ಪುರಾವೆ ಪರಿಶೀಲಿಸಲಾಯಿತು. 2) gate ಕಡಿಮೆ ಅಂಕ ತೆಗೆಯಿತು. 3) ಘೋಷಿತ ವ್ಯಾಪ್ತಿ ಸಾಕ್ಷ್ಯವಿಲ್ಲದೆ ಗೆದ್ದಿತು. 4) ತೂಕಗಳು ಮುಖ್ಯ, ಮತ್ತು ಒಂದು tie ಹೆಸರಿಗೆ ಬಿತ್ತು. 5) ಅರ್ಹ ಅಭ್ಯರ್ಥಿ ಇಲ್ಲದಾಗ None ಮರಳಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which candidate had the lowest raw score?",
      "qKn": "ಯಾವ ಅಭ್ಯರ್ಥಿಗೆ ಕಡಿಮೆ ಕಚ್ಚಾ ಅಂಕ ಇತ್ತು?",
      "opts": [
       "hard-coded dashboard",
       "replay with operator review",
       "live agent in production",
       "full vertical slice"
      ],
      "optsKn": [
       "hard-coded dashboard",
       "operator review ಇರುವ replay",
       "live agent in production",
       "full vertical slice"
      ],
      "correct": 0
     },
     {
      "q": "Which candidate was chosen?",
      "qKn": "ಯಾವ ಅಭ್ಯರ್ಥಿಯನ್ನು ಆರಿಸಲಾಯಿತು?",
      "opts": [
       "replay with operator review",
       "hard-coded dashboard",
       "live agent in production",
       "replay script on real records"
      ],
      "optsKn": [
       "operator review ಇರುವ replay",
       "hard-coded dashboard",
       "live agent in production",
       "ನಿಜ ದಾಖಲೆಗಳ replay script"
      ],
      "correct": 0
     },
     {
      "q": "Why could a declared-coverage candidate win wrongly?",
      "qKn": "ಘೋಷಿತ-ವ್ಯಾಪ್ತಿಯ ಅಭ್ಯರ್ಥಿ ತಪ್ಪಾಗಿ ಏಕೆ ಗೆಲ್ಲಬಹುದು?",
      "opts": [
       "The gate reads only the set it is given",
       "It is cheaper to run",
       "It uses weights",
       "It is signed"
      ],
      "optsKn": [
       "gate ತನಗೆ ನೀಡಿದ ಸೆಟ್ ಮಾತ್ರ ಓದುತ್ತದೆ",
       "ಅದನ್ನು ಓಡಿಸುವುದು ಅಗ್ಗ",
       "ಅದು ತೂಕ ಬಳಸುತ್ತದೆ",
       "ಅದಕ್ಕೆ ಸಹಿ ಇದೆ"
      ],
      "correct": 0
     },
     {
      "q": "What did choose return with no eligible candidate?",
      "qKn": "ಅರ್ಹ ಅಭ್ಯರ್ಥಿ ಇಲ್ಲದಾಗ choose ಏನು ಮರಳಿಸಿತು?",
      "opts": [
       "None",
       "The cheapest",
       "An error",
       "The dashboard"
      ],
      "optsKn": [
       "None",
       "ಅತಿ ಅಗ್ಗದ್ದು",
       "ದೋಷ",
       "dashboard"
      ],
      "correct": 0
     },
     {
      "q": "What decided the result at effort weight 0?",
      "qKn": "ಪ್ರಯತ್ನ ತೂಕ 0 ಇದ್ದಾಗ ಫಲಿತಾಂಶ ಏನು ನಿರ್ಧರಿಸಿತು?",
      "opts": [
       "The name tie-break",
       "Real preference",
       "Random choice",
       "Approval"
      ],
      "optsKn": [
       "ಹೆಸರಿನ tie-break",
       "ನಿಜ ಆದ್ಯತೆ",
       "ಯಾದೃಚ್ಛಿಕ ಆಯ್ಕೆ",
       "ಅನುಮೋದನೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
