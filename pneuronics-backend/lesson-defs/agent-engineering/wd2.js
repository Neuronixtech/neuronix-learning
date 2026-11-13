module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af7575bba08392fb3c36f91",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Discover the Workflow People Actually Perform (Part 2 of 3) — Ordering, Ratio and Confidence",
 "titleKn": "ಜನರು ನಿಜವಾಗಿ ನಿರ್ವಹಿಸುವ ಕಾರ್ಯಪ್ರವಾಹ ಕಂಡುಹಿಡಿಯಿರಿ (ಭಾಗ 2 / 3) — ಕ್ರಮ, ಅನುಪಾತ ಮತ್ತು ವಿಶ್ವಾಸ",
 "desc": "Validate step order, compute the direct-evidence ratio and see how a confidence label can hide weak steps.",
 "descKn": "ಹಂತ ಕ್ರಮ ಮಾನ್ಯಗೊಳಿಸಿ, ನೇರ-ಸಾಕ್ಷ್ಯ ಅನುಪಾತ ಲೆಕ್ಕ ಹಾಕಿ ಮತ್ತು ವಿಶ್ವಾಸ ಲೇಬಲ್ ದುರ್ಬಲ ಹಂತ ಹೇಗೆ ಮರೆಮಾಡಬಹುದು ನೋಡಿ.",
 "objectives": [
  "Validate step order.",
  "Compute the direct ratio.",
  "Label confidence honestly.",
  "Keep reported claims reported.",
  "Build a JSON artifact."
 ],
 "objectivesKn": [
  "ಹಂತ ಕ್ರಮ ಮಾನ್ಯಗೊಳಿಸಿ.",
  "ನೇರ ಅನುಪಾತ ಲೆಕ್ಕ ಹಾಕಿ.",
  "ವಿಶ್ವಾಸ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಲೇಬಲ್ ಮಾಡಿ.",
  "reported ಹೇಳಿಕೆಗಳನ್ನು reported ಆಗಿ ಇಡಿ.",
  "JSON ಕಲಾಕೃತಿ ನಿರ್ಮಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Discover the Workflow People Actually Perform (Part 2 of 3)",
    "textKn": "ಜನರು ನಿಜವಾಗಿ ನಿರ್ವಹಿಸುವ ಕಾರ್ಯಪ್ರವಾಹ ಕಂಡುಹಿಡಿಯಿರಿ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: step ordering rules, the direct-evidence ratio and its edge cases, confidence labels that hide where the weak steps are, reported behaviour that stays reported and a JSON artifact. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind discovering the workflow people actually perform (evidence-backed steps, hidden state, handoffs, exception branches and disagreement), not the real software, and the workflow, interviews and records are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, and the lesson text says its Python examples are reference implementations, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಹಂತ ಕ್ರಮ ನಿಯಮಗಳು, ನೇರ-ಸಾಕ್ಷ್ಯ ಅನುಪಾತ ಮತ್ತು ಅದರ ಅಂಚಿನ ಸಂದರ್ಭಗಳು, ದುರ್ಬಲ ಹಂತಗಳು ಎಲ್ಲಿ ಎಂದು ಮರೆಮಾಡುವ ವಿಶ್ವಾಸ ಲೇಬಲ್‌ಗಳು, reported ಆಗಿಯೇ ಉಳಿಯುವ ವರದಿ ವರ್ತನೆ ಮತ್ತು JSON ಕಲಾಕೃತಿ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಜನರು ನಿಜವಾಗಿ ನಿರ್ವಹಿಸುವ ಕಾರ್ಯಪ್ರವಾಹ ಕಂಡುಹಿಡಿಯುವುದು (ಸಾಕ್ಷ್ಯ-ಆಧಾರಿತ ಹಂತಗಳು, ಗುಪ್ತ ಸ್ಥಿತಿ, ಹಸ್ತಾಂತರಗಳು, ವಿನಾಯಿತಿ ಶಾಖೆಗಳು ಮತ್ತು ಭಿನ್ನಾಭಿಪ್ರಾಯ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಕಾರ್ಯಪ್ರವಾಹ, ಸಂದರ್ಶನಗಳು ಮತ್ತು ದಾಖಲೆಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ಪಠ್ಯ ತನ್ನ Python ಉದಾಹರಣೆಗಳು ಉಲ್ಲೇಖ ಅನುಷ್ಠಾನಗಳು ಎಂದು ಹೇಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Score Can Hide the Weak Step",
    "textKn": "ಅಂಕ ದುರ್ಬಲ ಹಂತವನ್ನು ಮರೆಮಾಡಬಹುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Order, Ratio and Honest Confidence",
    "headingKn": "ಕ್ರಮ, ಅನುಪಾತ ಮತ್ತು ಪ್ರಾಮಾಣಿಕ ವಿಶ್ವಾಸ",
    "bodyEn": "Once steps carry evidence they can be validated and scored. This part checks ordering, computes the direct-evidence ratio with its edge cases, labels confidence and shows two workflows that receive the same label for different reasons. It keeps reported behaviour reported, attaches evidence to steps instead of to the whole workflow and builds a JSON artifact in memory.",
    "bodyKn": "ಹಂತಗಳು ಸಾಕ್ಷ್ಯ ಹೊತ್ತ ಮೇಲೆ ಅವನ್ನು ಮಾನ್ಯಗೊಳಿಸಿ ಅಂಕ ನೀಡಬಹುದು. ಈ ಭಾಗ ಕ್ರಮ ಪರಿಶೀಲಿಸಿ, ನೇರ-ಸಾಕ್ಷ್ಯ ಅನುಪಾತವನ್ನು ಅಂಚಿನ ಸಂದರ್ಭಗಳೊಂದಿಗೆ ಲೆಕ್ಕ ಹಾಕಿ, ವಿಶ್ವಾಸ ಲೇಬಲ್ ಮಾಡಿ ಮತ್ತು ಬೇರೆ ಕಾರಣಗಳಿಗೆ ಒಂದೇ ಲೇಬಲ್ ಪಡೆದ ಎರಡು ಕಾರ್ಯಪ್ರವಾಹ ತೋರಿಸುತ್ತದೆ. ಇದು reported ವರ್ತನೆಯನ್ನು reported ಆಗಿ ಇಡುತ್ತದೆ, ಸಾಕ್ಷ್ಯವನ್ನು ಇಡೀ ಕಾರ್ಯಪ್ರವಾಹಕ್ಕಲ್ಲ ಹಂತಗಳಿಗೆ ಜೋಡಿಸುತ್ತದೆ ಮತ್ತು ಮೆಮೊರಿಯಲ್ಲಿ JSON ಕಲಾಕೃತಿ ನಿರ್ಮಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Ordering, Ratio and Confidence",
    "headingKn": "ಕ್ರಮ, ಅನುಪಾತ ಮತ್ತು ವಿಶ್ವಾಸ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a score needs the steps beside it</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">order</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">ascending ids</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">ratio</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">direct share</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">confidence</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">label + list</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">artifact</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">summary + steps</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a score needs the steps beside it</text></svg>",
    "captionEn": "A confidence label must travel with the list of unconfirmed steps.",
    "captionKn": "ವಿಶ್ವಾಸ ಲೇಬಲ್ ದೃಢೀಕರಿಸದ ಹಂತಗಳ ಪಟ್ಟಿಯೊಂದಿಗೆ ಸಾಗಬೇಕು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Confidence rule used in the lab",
    "headingKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಬಳಸಿದ ವಿಶ್ವಾಸ ನಿಯಮ",
    "headers": [
     "Ratio",
     "Assumed step present",
     "Label"
    ],
    "rows": [
     [
      "no evidence",
      "-",
      "unknown"
     ],
     [
      "0.8 or more",
      "no",
      "high"
     ],
     [
      "0.5 to 0.79",
      "no",
      "medium"
     ],
     [
      "below 0.5",
      "no",
      "low"
     ],
     [
      "0.8 or more",
      "yes",
      "medium"
     ],
     [
      "below 0.8",
      "yes",
      "low"
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
    "filename": "wd_2.py",
    "headingEn": "Ordering, ratio, confidence and summary",
    "headingKn": "ಕ್ರಮ, ಅನುಪಾತ, ವಿಶ್ವಾಸ ಮತ್ತು ಸಾರಾಂಶ",
    "descEn": "validate_order refuses empty, duplicate and descending ids and reports gaps, direct_ratio returns None when there is no evidence, confidence applies the lab's own thresholds and summarize lists the unconfirmed steps next to the score.",
    "descKn": "validate_order ಖಾಲಿ, ನಕಲು ಮತ್ತು ಇಳಿಕೆ ids ತಿರಸ್ಕರಿಸಿ ಅಂತರ ವರದಿ ಮಾಡುತ್ತದೆ, direct_ratio ಸಾಕ್ಷ್ಯ ಇಲ್ಲದಿದ್ದರೆ None ಮರಳಿಸುತ್ತದೆ, confidence ಲ್ಯಾಬ್‌ನ ಸ್ವಂತ ಮಿತಿ ಅನ್ವಯಿಸುತ್ತದೆ ಮತ್ತು summarize ಅಂಕದ ಪಕ್ಕ ದೃಢೀಕರಿಸದ ಹಂತ ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ.",
    "code": "def validate_order(ids):\n    if not ids:\n        raise ValueError(\"Workflow must contain steps\")\n    if len(ids) != len(set(ids)):\n        raise ValueError(\"Duplicate step IDs\")\n    if ids != sorted(ids):\n        raise ValueError(\"Steps must be in ascending order\")\n    gaps = [b for a, b in zip(ids, ids[1:]) if b != a + 1]\n    return {\"ok\": True, \"gaps_before\": gaps}\n\n\ndef direct_ratio(categories):\n    if not categories:\n        return None\n    return sum(1 for c in categories if c == \"direct\") / len(categories)\n\n\ndef confidence(ratio, has_assumed):\n    if ratio is None:\n        return \"unknown\"\n    if has_assumed:\n        return \"low\" if ratio < 0.8 else \"medium\"\n    return \"high\" if ratio >= 0.8 else (\"medium\" if ratio >= 0.5 else \"low\")\n\n\ndef summarize(steps):\n    cats = [c for s in steps for c in s[\"evidence\"]]\n    r = direct_ratio(cats)\n    return {\"steps\": len(steps), \"direct_ratio\": None if r is None else round(r, 2), \"confidence\": confidence(r, \"assumed\" in cats),\n            \"unconfirmed\": [s[\"id\"] for s in steps if not any(c == \"direct\" for c in s[\"evidence\"])]}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "wd_2.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() tries five id lists, scores four evidence sets, compares two workflows, checks a reported claim, compares workflow-level and per-step evidence and builds an artifact.",
    "descKn": "main() ಐದು id ಪಟ್ಟಿ ಪ್ರಯತ್ನಿಸಿ, ನಾಲ್ಕು ಸಾಕ್ಷ್ಯ ಸೆಟ್‌ಗೆ ಅಂಕ ನೀಡಿ, ಎರಡು ಕಾರ್ಯಪ್ರವಾಹ ಹೋಲಿಸಿ, reported ಹೇಳಿಕೆ ಪರಿಶೀಲಿಸಿ, ಕಾರ್ಯಪ್ರವಾಹ-ಮಟ್ಟ ಮತ್ತು ಹಂತ-ಮಟ್ಟದ ಸಾಕ್ಷ್ಯ ಹೋಲಿಸಿ ಮತ್ತು ಕಲಾಕೃತಿ ನಿರ್ಮಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: ordering rules\")\n    for label, ids in ((\"1,2,3,4\", [1, 2, 3, 4]), (\"1,3,4 (gap)\", [1, 3, 4]), (\"1,3,2\", [1, 3, 2]), (\"1,2,2\", [1, 2, 2]), (\"empty\", [])):\n        try:\n            print(f\"{label:14} accepted {validate_order(ids)}\")\n        except ValueError as e:\n            print(f\"{label:14} rejected: {e}\")\n    print(\"a gap in the numbering was accepted and reported, while out-of-order, duplicate and empty lists were refused; a gap may mean a step was removed on purpose, so it is surfaced for a person and not rejected\")\n\n    section(\"2. Genuinely computing: the direct-evidence ratio and its edge cases\")\n    for label, cats in ((\"all direct\", [\"direct\"] * 4), (\"half direct\", [\"direct\", \"direct\", \"reported\", \"document\"]), (\"one in four\", [\"direct\", \"reported\", \"reported\", \"assumed\"]), (\"no evidence at all\", [])):\n        r = direct_ratio(cats)\n        print(f\"{label:20} ratio={r} confidence={confidence(r, 'assumed' in cats)}\")\n    print(\"an empty list returned None and 'unknown' instead of a ratio of zero or a division error, because no evidence is different from evidence that was all indirect\")\n\n    section(\"3. Genuinely measuring: a ratio can hide where the weak steps are\")\n    wf_a = [{\"id\": i, \"evidence\": [\"direct\"]} for i in range(1, 5)] + [{\"id\": 5, \"evidence\": [\"assumed\"]}]\n    wf_b = [{\"id\": 1, \"evidence\": [\"direct\", \"direct\", \"direct\", \"direct\"]}, {\"id\": 2, \"evidence\": [\"reported\"]}, {\"id\": 3, \"evidence\": [\"reported\"]}, {\"id\": 4, \"evidence\": [\"reported\"]}, {\"id\": 5, \"evidence\": [\"reported\"]}]\n    for name, wf in ((\"workflow A\", wf_a), (\"workflow B\", wf_b)):\n        print(name, summarize(wf))\n    print(\"A scored a ratio of 0.8 and B scored 0.5, and both received the same label, medium, even though A has one step that was only assumed and B has four steps that rest on talk alone; the label hid that difference, which is why the list of unconfirmed steps is reported next to it, and the thresholds in confidence() are this lab's own choice\")\n\n    section(\"3b. Genuinely running: reported behaviour is not upgraded\")\n    claim = {\"id\": 6, \"evidence\": [\"reported\"], \"text\": \"engineers always wait for approval\"}\n    print(\"claim:\", claim[\"text\"], \"| evidence:\", claim[\"evidence\"], \"| counted as confirmed:\", any(c == \"direct\" for c in claim[\"evidence\"]))\n    print(\"a statement that people always do something stays labelled reported until someone has watched it or read a record of it, so it appears in the unconfirmed list instead of the confirmed one\")\n\n    section(\"4. Genuinely running: per-step evidence versus a workflow-level claim\")\n    wf_level = {\"workflow\": \"incident triage\", \"evidence\": [\"direct\"]}\n    print(\"workflow-level claim:\", wf_level, \"| steps it covers: unknown\")\n    print(\"per-step evidence for the same workflow:\", [(s[\"id\"], s[\"evidence\"]) for s in wf_a])\n    print(\"one line of evidence attached to the whole workflow cannot show that step 5 was only assumed; attaching evidence to each step is what makes the weak step visible\")\n\n    section(\"5. Genuinely running: the JSON artifact\")\n    art = {\"workflow\": \"incident triage\", \"summary\": summarize(wf_a), \"steps\": wf_a}\n    text = json.dumps(art, sort_keys=True)\n    print(\"artifact keys:\", sorted(art), \"| bytes:\", len(text), \"| round trip equal:\", json.loads(text) == art)\n    print(\"the artifact carries the summary next to the steps it was computed from so a reader can recompute it; this lab builds it in memory and does not write outputs/workflow-evidence.json\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: ordering rules ---\n1,2,3,4        accepted {'ok': True, 'gaps_before': []}\n1,3,4 (gap)    accepted {'ok': True, 'gaps_before': [3]}\n1,3,2          rejected: Steps must be in ascending order\n1,2,2          rejected: Duplicate step IDs\nempty          rejected: Workflow must contain steps\na gap in the numbering was accepted and reported, while out-of-order, duplicate and empty lists were refused; a gap may mean a step was removed on purpose, so it is surfaced for a person and not rejected\n\n--- 2. Genuinely computing: the direct-evidence ratio and its edge cases ---\nall direct           ratio=1.0 confidence=high\nhalf direct          ratio=0.5 confidence=medium\none in four          ratio=0.25 confidence=low\nno evidence at all   ratio=None confidence=unknown\nan empty list returned None and 'unknown' instead of a ratio of zero or a division error, because no evidence is different from evidence that was all indirect\n\n--- 3. Genuinely measuring: a ratio can hide where the weak steps are ---\nworkflow A {'steps': 5, 'direct_ratio': 0.8, 'confidence': 'medium', 'unconfirmed': [5]}\nworkflow B {'steps': 5, 'direct_ratio': 0.5, 'confidence': 'medium', 'unconfirmed': [2, 3, 4, 5]}\nA scored a ratio of 0.8 and B scored 0.5, and both received the same label, medium, even though A has one step that was only assumed and B has four steps that rest on talk alone; the label hid that difference, which is why the list of unconfirmed steps is reported next to it, and the thresholds in confidence() are this lab's own choice\n\n--- 3b. Genuinely running: reported behaviour is not upgraded ---\nclaim: engineers always wait for approval | evidence: ['reported'] | counted as confirmed: False\na statement that people always do something stays labelled reported until someone has watched it or read a record of it, so it appears in the unconfirmed list instead of the confirmed one\n\n--- 4. Genuinely running: per-step evidence versus a workflow-level claim ---\nworkflow-level claim: {'workflow': 'incident triage', 'evidence': ['direct']} | steps it covers: unknown\nper-step evidence for the same workflow: [(1, ['direct']), (2, ['direct']), (3, ['direct']), (4, ['direct']), (5, ['assumed'])]\none line of evidence attached to the whole workflow cannot show that step 5 was only assumed; attaching evidence to each step is what makes the weak step visible\n\n--- 5. Genuinely running: the JSON artifact ---\nartifact keys: ['steps', 'summary', 'workflow'] | bytes: 308 | round trip equal: True\nthe artifact carries the summary next to the steps it was computed from so a reader can recompute it; this lab builds it in memory and does not write outputs/workflow-evidence.json"
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
    "headingEn": "Experiment 1: Ordering rules",
    "headingKn": "ಪ್ರಯೋಗ 1: Ordering rules",
    "bodyEn": "What it ran: Ordering rules. What the lab concluded: a gap in the numbering was accepted and reported, while out-of-order, duplicate and empty lists were refused; a gap may mean a step was removed on purpose, so it is surfaced for a person and not rejected",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Ordering rules. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a gap in the numbering was accepted and reported, while out-of-order, duplicate and empty lists were refused; a gap may mean a step was removed on purpose, so it is surfaced for a person and not rejected"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: ordering rules ---\n1,2,3,4        accepted {'ok': True, 'gaps_before': []}\n1,3,4 (gap)    accepted {'ok': True, 'gaps_before': [3]}\n1,3,2          rejected: Steps must be in ascending order\n1,2,2          rejected: Duplicate step IDs\nempty          rejected: Workflow must contain steps"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: The direct-evidence ratio and its edge cases",
    "headingKn": "ಪ್ರಯೋಗ 2: The direct-evidence ratio and its edge cases",
    "bodyEn": "What it ran: The direct-evidence ratio and its edge cases. What the lab concluded: an empty list returned None and 'unknown' instead of a ratio of zero or a division error, because no evidence is different from evidence that was all indirect",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The direct-evidence ratio and its edge cases. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): an empty list returned None and 'unknown' instead of a ratio of zero or a division error, because no evidence is different from evidence that was all indirect"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely computing: the direct-evidence ratio and its edge cases ---\nall direct           ratio=1.0 confidence=high\nhalf direct          ratio=0.5 confidence=medium\none in four          ratio=0.25 confidence=low\nno evidence at all   ratio=None confidence=unknown"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: A ratio can hide where the weak steps are",
    "headingKn": "ಪ್ರಯೋಗ 3: A ratio can hide where the weak steps are",
    "bodyEn": "What it ran: A ratio can hide where the weak steps are. What the lab concluded: A scored a ratio of 0.8 and B scored 0.5, and both received the same label, medium, even though A has one step that was only assumed and B has four steps that rest on talk alone; the label hid that difference, which is why the list of unconfirmed steps is reported next to it, and the thresholds in confidence() are this lab's own choice",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A ratio can hide where the weak steps are. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): A scored a ratio of 0.8 and B scored 0.5, and both received the same label, medium, even though A has one step that was only assumed and B has four steps that rest on talk alone; the label hid that difference, which is why the list of unconfirmed steps is reported next to it, and the thresholds in confidence() are this lab's own choice"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: a ratio can hide where the weak steps are ---\nworkflow A {'steps': 5, 'direct_ratio': 0.8, 'confidence': 'medium', 'unconfirmed': [5]}\nworkflow B {'steps': 5, 'direct_ratio': 0.5, 'confidence': 'medium', 'unconfirmed': [2, 3, 4, 5]}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: 3b. Genuinely running: reported behaviour is not upgraded",
    "headingKn": "ಪ್ರಯೋಗ 4: 3b. Genuinely running: reported behaviour is not upgraded",
    "bodyEn": "What it ran: 3b. Genuinely running: reported behaviour is not upgraded. What the lab concluded: a statement that people always do something stays labelled reported until someone has watched it or read a record of it, so it appears in the unconfirmed list instead of the confirmed one",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: 3b. Genuinely running: reported behaviour is not upgraded. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a statement that people always do something stays labelled reported until someone has watched it or read a record of it, so it appears in the unconfirmed list instead of the confirmed one"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3b. Genuinely running: reported behaviour is not upgraded ---\nclaim: engineers always wait for approval | evidence: ['reported'] | counted as confirmed: False"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Per-step evidence versus a workflow-level claim",
    "headingKn": "ಪ್ರಯೋಗ 5: Per-step evidence versus a workflow-level claim",
    "bodyEn": "What it ran: Per-step evidence versus a workflow-level claim. What the lab concluded: one line of evidence attached to the whole workflow cannot show that step 5 was only assumed; attaching evidence to each step is what makes the weak step visible",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Per-step evidence versus a workflow-level claim. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): one line of evidence attached to the whole workflow cannot show that step 5 was only assumed; attaching evidence to each step is what makes the weak step visible"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: per-step evidence versus a workflow-level claim ---\nworkflow-level claim: {'workflow': 'incident triage', 'evidence': ['direct']} | steps it covers: unknown\nper-step evidence for the same workflow: [(1, ['direct']), (2, ['direct']), (3, ['direct']), (4, ['direct']), (5, ['assumed'])]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: The JSON artifact",
    "headingKn": "ಪ್ರಯೋಗ 6: The JSON artifact",
    "bodyEn": "What it ran: The JSON artifact. What the lab concluded: the artifact carries the summary next to the steps it was computed from so a reader can recompute it; this lab builds it in memory and does not write outputs/workflow-evidence.json",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The JSON artifact. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the artifact carries the summary next to the steps it was computed from so a reader can recompute it; this lab builds it in memory and does not write outputs/workflow-evidence.json"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: the JSON artifact ---\nartifact keys: ['steps', 'summary', 'workflow'] | bytes: 308 | round trip equal: True"
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
    "headingEn": "Genuinely Found: Gaps Are Reported, and No Evidence Is Not a Zero",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅಂತರ ವರದಿಯಾಗುತ್ತದೆ, ಮತ್ತು ಸಾಕ್ಷ್ಯವಿಲ್ಲ ಎಂದರೆ ಶೂನ್ಯ ಅಲ್ಲ",
    "bodyEn": "Section 1: ids 1,2,3,4 were accepted, 1,3,4 was accepted with a gap reported before 3, and 1,3,2, 1,2,2 and the empty list were rejected. Section 2: all direct gave ratio 1.0 and high, half direct 0.5 and medium, one in four 0.25 and low, and an empty list gave None and unknown.",
    "bodyKn": "ವಿಭಾಗ 1: ids 1,2,3,4 ಸ್ವೀಕೃತ, 1,3,4 ಅನ್ನು 3 ರ ಮುನ್ನ ಅಂತರ ವರದಿಯೊಂದಿಗೆ ಸ್ವೀಕರಿಸಲಾಯಿತು, ಮತ್ತು 1,3,2, 1,2,2 ಹಾಗೂ ಖಾಲಿ ಪಟ್ಟಿ ತಿರಸ್ಕೃತವಾದವು. ವಿಭಾಗ 2: ಎಲ್ಲಾ direct ಅನುಪಾತ 1.0 ಮತ್ತು high, ಅರ್ಧ direct 0.5 ಮತ್ತು medium, ನಾಲ್ಕರಲ್ಲಿ ಒಂದು 0.25 ಮತ್ತು low, ಮತ್ತು ಖಾಲಿ ಪಟ್ಟಿ None ಮತ್ತು unknown ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Same Label for Different Weaknesses",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಬೇರೆ ದುರ್ಬಲತೆಗಳಿಗೆ ಒಂದೇ ಲೇಬಲ್",
    "bodyEn": "Section 3: workflow A scored 0.8 and workflow B 0.5 and both were labelled medium, although A has one assumed step and B has four steps resting on talk alone; the unconfirmed lists were [5] and [2, 3, 4, 5]. Section 3b: a claim that engineers always wait for approval stayed reported and was not counted as confirmed. Section 4 and 5: workflow-level evidence could not show that step 5 was assumed, and the artifact (308 bytes) round-tripped equal in memory without writing a file.",
    "bodyKn": "ವಿಭಾಗ 3: ಕಾರ್ಯಪ್ರವಾಹ A 0.8 ಮತ್ತು B 0.5 ಅಂಕ ಪಡೆದು ಎರಡೂ medium ಎಂದು ಲೇಬಲ್ ಆದವು, A ಗೆ ಒಂದು assumed ಹಂತ ಮತ್ತು B ಗೆ ಮಾತ್ರ ಮಾತಿನ ಮೇಲೆ ನಿಂತ ನಾಲ್ಕು ಹಂತ ಇದ್ದರೂ; ದೃಢೀಕರಿಸದ ಪಟ್ಟಿಗಳು [5] ಮತ್ತು [2, 3, 4, 5]. ವಿಭಾಗ 3b: ಎಂಜಿನಿಯರ್‌ಗಳು ಯಾವಾಗಲೂ ಅನುಮೋದನೆಗೆ ಕಾಯುತ್ತಾರೆ ಎಂಬ ಹೇಳಿಕೆ reported ಆಗಿಯೇ ಉಳಿದು ದೃಢೀಕೃತ ಎಂದು ಎಣಿಕೆಯಾಗಲಿಲ್ಲ. ವಿಭಾಗ 4 ಮತ್ತು 5: ಕಾರ್ಯಪ್ರವಾಹ-ಮಟ್ಟದ ಸಾಕ್ಷ್ಯ ಹಂತ 5 assumed ಎಂದು ತೋರಿಸಲಾಗಲಿಲ್ಲ, ಮತ್ತು ಕಲಾಕೃತಿ (308 ಬೈಟ್) ಫೈಲ್ ಬರೆಯದೆ ಮೆಮೊರಿಯಲ್ಲಿ ಸಮಾನವಾಗಿ round-trip ಆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A single confidence label can make two differently weak workflows look equally trustworthy, so the weak steps have to be listed beside it.",
    "bodyKn": "ಒಂದೇ ವಿಶ್ವಾಸ ಲೇಬಲ್ ಬೇರೆ ಬೇರೆ ರೀತಿ ದುರ್ಬಲ ಎರಡು ಕಾರ್ಯಪ್ರವಾಹಗಳನ್ನು ಸಮಾನ ವಿಶ್ವಾಸಾರ್ಹ ಎಂದು ತೋರಿಸಬಹುದು, ಆದ್ದರಿಂದ ದುರ್ಬಲ ಹಂತಗಳನ್ನು ಅದರ ಪಕ್ಕ ಪಟ್ಟಿ ಮಾಡಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a high direct ratio means the workflow is confirmed.\" Workflow A scored 0.8 with its last step only assumed.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಹೆಚ್ಚಿನ ನೇರ ಅನುಪಾತ ಎಂದರೆ ಕಾರ್ಯಪ್ರವಾಹ ದೃಢೀಕೃತ.\" ಕಾರ್ಯಪ್ರವಾಹ A ಕೊನೆಯ ಹಂತ ಕೇವಲ assumed ಇದ್ದರೂ 0.8 ಪಡೆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Ascending order: ids increase. Gap: a missing id in the sequence. Confidence: a label from ratio and assumed steps. Unconfirmed step: no direct evidence. Artifact: the JSON summary plus steps.",
    "bodyKn": "Ascending order: ids ಹೆಚ್ಚುತ್ತವೆ. Gap: ಅನುಕ್ರಮದಲ್ಲಿ ಕಾಣೆಯಾದ id. Confidence: ಅನುಪಾತ ಮತ್ತು assumed ಹಂತಗಳಿಂದ ಲೇಬಲ್. Unconfirmed step: ನೇರ ಸಾಕ್ಷ್ಯವಿಲ್ಲ. Artifact: JSON ಸಾರಾಂಶ ಮತ್ತು ಹಂತಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Gaps are reported and unordered lists rejected. 2) Empty evidence gives None, not zero. 3) A and B both got medium for different reasons. 4) Reported stays reported. 5) Evidence belongs to steps.",
    "bodyKn": "1) ಅಂತರ ವರದಿಯಾಗುತ್ತದೆ, ಕ್ರಮವಿಲ್ಲದ ಪಟ್ಟಿ ತಿರಸ್ಕೃತ. 2) ಖಾಲಿ ಸಾಕ್ಷ್ಯ None ನೀಡುತ್ತದೆ, ಶೂನ್ಯ ಅಲ್ಲ. 3) A ಮತ್ತು B ಬೇರೆ ಕಾರಣಗಳಿಗೆ ಎರಡೂ medium ಪಡೆದವು. 4) Reported reported ಆಗಿಯೇ ಉಳಿಯುತ್ತದೆ. 5) ಸಾಕ್ಷ್ಯ ಹಂತಗಳಿಗೆ ಸೇರುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did an empty evidence list return?",
      "qKn": "ಖಾಲಿ ಸಾಕ್ಷ್ಯ ಪಟ್ಟಿ ಏನು ಮರಳಿಸಿತು?",
      "opts": [
       "None and unknown",
       "0 and low",
       "1.0 and high",
       "An error"
      ],
      "optsKn": [
       "None ಮತ್ತು unknown",
       "0 ಮತ್ತು low",
       "1.0 ಮತ್ತು high",
       "ದೋಷ"
      ],
      "correct": 0
     },
     {
      "q": "What label did workflows A and B get?",
      "qKn": "ಕಾರ್ಯಪ್ರವಾಹ A ಮತ್ತು B ಗೆ ಯಾವ ಲೇಬಲ್ ಸಿಕ್ಕಿತು?",
      "opts": [
       "Both medium",
       "A high and B low",
       "Both high",
       "Both low"
      ],
      "optsKn": [
       "ಎರಡೂ medium",
       "A high ಮತ್ತು B low",
       "ಎರಡೂ high",
       "ಎರಡೂ low"
      ],
      "correct": 0
     },
     {
      "q": "What happened to ids 1,3,4?",
      "qKn": "ids 1,3,4 ಗೆ ಏನಾಯಿತು?",
      "opts": [
       "Accepted with a gap reported",
       "Rejected",
       "Reordered",
       "Deleted"
      ],
      "optsKn": [
       "ಅಂತರ ವರದಿಯೊಂದಿಗೆ ಸ್ವೀಕೃತ",
       "ತಿರಸ್ಕೃತ",
       "ಮರುಕ್ರಮ",
       "ಅಳಿಸಲಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "Why attach evidence to each step?",
      "qKn": "ಪ್ರತಿ ಹಂತಕ್ಕೆ ಸಾಕ್ಷ್ಯ ಏಕೆ ಜೋಡಿಸಬೇಕು?",
      "opts": [
       "It shows which step is only assumed",
       "It is faster",
       "It hides steps",
       "It signs steps"
      ],
      "optsKn": [
       "ಯಾವ ಹಂತ ಕೇವಲ assumed ಎಂದು ತೋರಿಸುತ್ತದೆ",
       "ಅದು ವೇಗ",
       "ಅದು ಹಂತ ಮರೆಮಾಡುತ್ತದೆ",
       "ಅದು ಹಂತಗಳಿಗೆ ಸಹಿ ಮಾಡುತ್ತದೆ"
      ],
      "correct": 0
     },
     {
      "q": "Did the lab write outputs/workflow-evidence.json?",
      "qKn": "ಲ್ಯಾಬ್ outputs/workflow-evidence.json ಬರೆಯಿತೇ?",
      "opts": [
       "No, it stayed in memory",
       "Yes",
       "Only when signed",
       "Only on Linux"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಮೆಮೊರಿಯಲ್ಲಿ ಉಳಿಯಿತು",
       "ಹೌದು",
       "ಸಹಿ ಮಾಡಿದಾಗ ಮಾತ್ರ",
       "Linux ನಲ್ಲಿ ಮಾತ್ರ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
