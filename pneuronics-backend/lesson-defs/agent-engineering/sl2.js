module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af7593309067ce975d5d827",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Choose the Smallest Slice That Can Change the Decision (Part 2 of 3) — Replay Evidence and Acceptance Rules",
 "titleKn": "ನಿರ್ಧಾರ ಬದಲಿಸಬಲ್ಲ ಅತಿ ಚಿಕ್ಕ ಭಾಗ ಆರಿಸಿ (ಭಾಗ 2 / 3) — Replay ಸಾಕ್ಷ್ಯ ಮತ್ತು ಸ್ವೀಕಾರ ನಿಯಮಗಳು",
 "desc": "Run a read-only replay on made-up records, apply a pre-set acceptance rule and see why a demo proves nothing.",
 "descKn": "ಕಲ್ಪಿತ ದಾಖಲೆಗಳ ಮೇಲೆ read-only replay ಓಡಿಸಿ, ಮೊದಲೇ ನಿಗದಿಯಾದ ಸ್ವೀಕಾರ ನಿಯಮ ಅನ್ವಯಿಸಿ ಮತ್ತು demo ಏಕೆ ಏನೂ ಸಾಬೀತು ಮಾಡುವುದಿಲ್ಲ ನೋಡಿ.",
 "objectives": [
  "Run a replay on records.",
  "Fix an acceptance rule first.",
  "Score missing-label cases separately.",
  "Recognise a hard-coded demo.",
  "Check the replay is read-only."
 ],
 "objectivesKn": [
  "ದಾಖಲೆಗಳ ಮೇಲೆ replay ಓಡಿಸಿ.",
  "ಮೊದಲು ಸ್ವೀಕಾರ ನಿಯಮ ನಿಗದಿಪಡಿಸಿ.",
  "ಕಾಣೆಯಾದ-label ಸಂದರ್ಭಗಳಿಗೆ ಬೇರೆ ಅಂಕ ನೀಡಿ.",
  "hard-coded demo ಗುರುತಿಸಿ.",
  "replay read-only ಎಂದು ಪರಿಶೀಲಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Choose the Smallest Slice That Can Change the Decision (Part 2 of 3)",
    "textKn": "ನಿರ್ಧಾರ ಬದಲಿಸಬಲ್ಲ ಅತಿ ಚಿಕ್ಕ ಭಾಗ ಆರಿಸಿ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: a read-only replay of made-up incident records that turns declared coverage into measured evidence, a measurable acceptance rule, happy path versus missing labels, a hard-coded demo and a read-only digest check. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind choosing the smallest slice that can change the decision (required proof, eligibility gates, replay evidence, outcomes, stop rules and safety), not the real software, and the candidates, incident records, thresholds and budgets are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, and the lesson text says the Python shown is an educational reference implementation, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: declared ವ್ಯಾಪ್ತಿಯನ್ನು ಅಳೆದ ಸಾಕ್ಷ್ಯವಾಗಿ ಪರಿವರ್ತಿಸುವ ಕಲ್ಪಿತ incident ದಾಖಲೆಗಳ read-only replay, ಅಳೆಯಬಹುದಾದ ಸ್ವೀಕಾರ ನಿಯಮ, happy path ವಿರುದ್ಧ ಕಾಣೆಯಾದ labels, hard-coded demo ಮತ್ತು read-only digest ಪರಿಶೀಲನೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ನಿರ್ಧಾರ ಬದಲಿಸಬಲ್ಲ ಅತಿ ಚಿಕ್ಕ ಭಾಗ ಆರಿಸುವುದು (ಅಗತ್ಯ ಪುರಾವೆ, ಅರ್ಹತಾ gates, replay ಸಾಕ್ಷ್ಯ, ಫಲಿತಾಂಶಗಳು, ನಿಲುಗಡೆ ನಿಯಮಗಳು ಮತ್ತು ಸುರಕ್ಷತೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಅಭ್ಯರ್ಥಿಗಳು, incident ದಾಖಲೆಗಳು, ಮಿತಿಗಳು ಮತ್ತು ಬಜೆಟ್‌ಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು ತೋರಿಸಿದ Python ಶೈಕ್ಷಣಿಕ ಉಲ್ಲೇಖ ಅನುಷ್ಠಾನ ಎಂದು lesson ಪಠ್ಯ ಹೇಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Running the Slice Beats Describing It",
    "textKn": "ಭಾಗ ಓಡಿಸುವುದು ವಿವರಿಸುವುದಕ್ಕಿಂತ ಉತ್ತಮ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Replay With a Pre-Set Rule",
    "headingKn": "ಮೊದಲೇ ನಿಗದಿಯಾದ ನಿಯಮದೊಂದಿಗೆ Replay",
    "bodyEn": "This part runs a small read-only replay over eight invented incident records with a keyword classifier. The acceptance rule is fixed first, the labelled and unlabelled records are scored separately, a hard-coded demo is shown to pass any rule, and a digest of the input before and after checks that the replay did not change what it read. The records and thresholds are invented; the lab says nothing about real incident data.",
    "bodyKn": "ಈ ಭಾಗ ಎಂಟು ಕಲ್ಪಿತ incident ದಾಖಲೆಗಳ ಮೇಲೆ keyword classifier ಜೊತೆ ಸಣ್ಣ read-only replay ಓಡಿಸುತ್ತದೆ. ಸ್ವೀಕಾರ ನಿಯಮ ಮೊದಲು ನಿಗದಿಯಾಗುತ್ತದೆ, labelled ಮತ್ತು unlabelled ದಾಖಲೆಗಳನ್ನು ಬೇರೆ ಅಂಕ ನೀಡಲಾಗುತ್ತದೆ, hard-coded demo ಯಾವುದೇ ನಿಯಮ ಪಾಸ್ ಮಾಡುತ್ತದೆ ಎಂದು ತೋರಿಸಲಾಗುತ್ತದೆ, ಮತ್ತು replay ತಾನು ಓದಿದ್ದನ್ನು ಬದಲಿಸಲಿಲ್ಲ ಎಂದು ಒಳಹರಿವಿನ ಮೊದಲು ಮತ್ತು ನಂತರದ digest ಪರಿಶೀಲಿಸುತ್ತದೆ. ದಾಖಲೆಗಳು ಮತ್ತು ಮಿತಿಗಳು ಕಲ್ಪಿತ; ಲ್ಯಾಬ್ ನಿಜ incident ದತ್ತಾಂಶದ ಬಗ್ಗೆ ಏನನ್ನೂ ಹೇಳುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Replay and Measure",
    "headingKn": "Replay ಮಾಡಿ ಅಳೆಯಿರಿ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">run it and measure instead of declaring</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">replay</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">real-shaped records</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">rule</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">fixed before run</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">labels</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">present and missing</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">read-only</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">digest unchanged</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">run it and measure instead of declaring</text></svg>",
    "captionEn": "A replay on records turns a claim into a number.",
    "captionKn": "ದಾಖಲೆಗಳ ಮೇಲಿನ replay ಹೇಳಿಕೆಯನ್ನು ಸಂಖ್ಯೆಯಾಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Lab results (invented records)",
    "headingKn": "ಲ್ಯಾಬ್ ಫಲಿತಾಂಶಗಳು (ಕಲ್ಪಿತ ದಾಖಲೆಗಳು)",
    "headers": [
     "Records",
     "Correct",
     "Accuracy"
    ],
    "rows": [
     [
      "labelled only",
      "4/4",
      "1.00"
     ],
     [
      "unlabelled only",
      "2/4",
      "0.50"
     ],
     [
      "all eight",
      "6/8",
      "0.75"
     ],
     [
      "hard-coded demo",
      "8/8",
      "by construction"
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
    "filename": "sl_2.py",
    "headingEn": "The classifier, replay and read-only digest",
    "headingKn": "Classifier, replay ಮತ್ತು read-only digest",
    "descEn": "classify uses a service label first and alert keywords second, replay returns a prediction per record, accuracy compares with the answer key and digest hashes the records so a before and after comparison shows any change.",
    "descKn": "classify ಮೊದಲು ಸೇವಾ label ಮತ್ತು ನಂತರ alert keywords ಬಳಸುತ್ತದೆ, replay ಪ್ರತಿ ದಾಖಲೆಗೆ ಮುನ್ನೋಟ ಮರಳಿಸುತ್ತದೆ, accuracy ಉತ್ತರ ಕೀಲಿಯೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ ಮತ್ತು digest ದಾಖಲೆಗಳನ್ನು hash ಮಾಡುತ್ತದೆ ಆದ್ದರಿಂದ ಮೊದಲು ಮತ್ತು ನಂತರದ ಹೋಲಿಕೆ ಯಾವುದೇ ಬದಲಾವಣೆ ತೋರಿಸುತ್ತದೆ.",
    "code": "def classify(rec):\n    if rec[\"labels\"].get(\"service\"):\n        return rec[\"labels\"][\"service\"], \"label\"\n    for k, v in KEYWORDS.items():\n        if k in rec[\"alert\"].lower():\n            return v, \"keyword\"\n    return None, \"none\"\n\n\ndef replay(records):\n    out = []\n    for r in records:\n        svc, how = classify(r)\n        out.append({\"id\": r[\"id\"], \"service\": svc, \"how\": how})\n    return out\n\n\ndef accuracy(preds):\n    ok = sum(1 for p in preds if p[\"service\"] == TRUTH[p[\"id\"]])\n    return ok, len(preds)\n\n\ndef hard_coded(records):\n    return [{\"id\": r[\"id\"], \"service\": TRUTH[r[\"id\"]], \"how\": \"hard-coded\"} for r in records]\n\n\ndef digest(obj):\n    return hashlib.sha256(json.dumps(obj, sort_keys=True).encode()).hexdigest()[:10]"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "sl_2.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() replays eight records, scores labelled and unlabelled subsets, runs a hard-coded demo, applies a pre-set acceptance rule and checks the input digest around a good and a bad replay.",
    "descKn": "main() ಎಂಟು ದಾಖಲೆ replay ಮಾಡಿ, labelled ಮತ್ತು unlabelled ಉಪಸೆಟ್‌ಗೆ ಅಂಕ ನೀಡಿ, hard-coded demo ಓಡಿಸಿ, ಮೊದಲೇ ನಿಗದಿಯಾದ ಸ್ವೀಕಾರ ನಿಯಮ ಅನ್ವಯಿಸಿ ಮತ್ತು ಒಳ್ಳೆಯ ಹಾಗೂ ಕೆಟ್ಟ replay ಸುತ್ತ ಒಳಹರಿವಿನ digest ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: a replay on eight made-up incident records\")\n    preds = replay(RECORDS)\n    for p in preds:\n        print(p, \"truth:\", TRUTH[p[\"id\"]])\n    ok, n = accuracy(preds)\n    print(f\"correct: {ok}/{n}\")\n    print(\"the replay identified the service from a label for four records and from alert text for two more, and returned none for the disk alert (whose only label names a team) and for the bank-timeouts alert (which contains none of its keywords); the records are invented and eight is far too few to say anything about real incidents\")\n\n    section(\"2. Genuinely measuring: happy path versus records with missing labels\")\n    labelled = [r for r in RECORDS if r[\"labels\"].get(\"service\")]\n    unlabelled = [r for r in RECORDS if not r[\"labels\"].get(\"service\")]\n    for name, rs in ((\"labelled only\", labelled), (\"unlabelled only\", unlabelled), (\"all\", RECORDS)):\n        a, b = accuracy(replay(rs))\n        print(f\"{name:16} {a}/{b} = {a / b:.2f}\")\n    print(\"every labelled record was right and only half of the unlabelled ones were, the misses being the disk alert and the bank-timeouts alert; a test that used only labelled records would have reported a perfect score, and the real question is the rate on the records without labels\")\n\n    section(\"3. Genuinely measuring: a hard-coded demo passes any acceptance rule\")\n    a, b = accuracy(hard_coded(RECORDS))\n    print(f\"hard-coded demo: {a}/{b}\")\n    print(\"accuracy of a rule that returns the answer key is 8/8 by construction; the demo shows an interface and proves nothing about whether the real records contain the information, which is why a candidate that does not read real records fails the eligibility gate\")\n\n    section(\"4. Genuinely running: a measurable acceptance rule fixed before the run\")\n    rule = {\"min_records\": 8, \"min_accuracy\": 0.80}\n    a, b = accuracy(replay(RECORDS))\n    print(\"rule:\", rule, \"| result:\", f\"{a}/{b} = {a / b:.3f}\", \"|\", \"accepted\" if b >= rule[\"min_records\"] and a / b >= rule[\"min_accuracy\"] else \"not accepted\")\n    a2, b2 = accuracy(replay(RECORDS[:4]))\n    print(\"same rule on only 4 records:\", f\"{a2}/{b2}\", \"|\", \"accepted\" if b2 >= rule[\"min_records\"] and a2 / b2 >= rule[\"min_accuracy\"] else \"not accepted (too few records)\")\n    print(\"the replay scored 6 of 8 = 0.75, below the invented 0.80 threshold, so the slice is not accepted, and the identical code on four records was refused for sample size even though all four were right; the thresholds are this lab's own numbers, and the result is the useful kind: a measured answer that the keyword approach is not enough on its own\")\n\n    section(\"5. Genuinely running: the replay must not change what it reads\")\n    snap = copy.deepcopy(RECORDS)\n    before = digest(RECORDS)\n    replay(RECORDS)\n    print(\"input digest before:\", before, \"| after:\", digest(RECORDS), \"| unchanged:\", before == digest(RECORDS))\n\n    def bad_replay(records):\n        for r in records:\n            r[\"seen\"] = True\n        return replay(records)\n    bad_replay(snap)\n    print(\"a replay that tags records as seen changes the digest:\", digest(snap) != before)\n    print(\"comparing a digest of the input before and after is a cheap read-only check, and it catches a replay that writes into its input; it would not catch a write to a database or a network call, which this lab does not model\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a replay on eight made-up incident records ---\n{'id': 1, 'service': 'payments', 'how': 'label'} truth: payments\n{'id': 2, 'service': 'search', 'how': 'label'} truth: search\n{'id': 3, 'service': 'checkout', 'how': 'keyword'} truth: checkout\n{'id': 4, 'service': 'billing', 'how': 'keyword'} truth: billing\n{'id': 5, 'service': 'auth', 'how': 'label'} truth: auth\n{'id': 6, 'service': None, 'how': 'none'} truth: storage\n{'id': 7, 'service': None, 'how': 'none'} truth: payments\n{'id': 8, 'service': 'search', 'how': 'label'} truth: search\ncorrect: 6/8\nthe replay identified the service from a label for four records and from alert text for two more, and returned none for the disk alert (whose only label names a team) and for the bank-timeouts alert (which contains none of its keywords); the records are invented and eight is far too few to say anything about real incidents\n\n--- 2. Genuinely measuring: happy path versus records with missing labels ---\nlabelled only    4/4 = 1.00\nunlabelled only  2/4 = 0.50\nall              6/8 = 0.75\nevery labelled record was right and only half of the unlabelled ones were, the misses being the disk alert and the bank-timeouts alert; a test that used only labelled records would have reported a perfect score, and the real question is the rate on the records without labels\n\n--- 3. Genuinely measuring: a hard-coded demo passes any acceptance rule ---\nhard-coded demo: 8/8\naccuracy of a rule that returns the answer key is 8/8 by construction; the demo shows an interface and proves nothing about whether the real records contain the information, which is why a candidate that does not read real records fails the eligibility gate\n\n--- 4. Genuinely running: a measurable acceptance rule fixed before the run ---\nrule: {'min_records': 8, 'min_accuracy': 0.8} | result: 6/8 = 0.750 | not accepted\nsame rule on only 4 records: 4/4 | not accepted (too few records)\nthe replay scored 6 of 8 = 0.75, below the invented 0.80 threshold, so the slice is not accepted, and the identical code on four records was refused for sample size even though all four were right; the thresholds are this lab's own numbers, and the result is the useful kind: a measured answer that the keyword approach is not enough on its own\n\n--- 5. Genuinely running: the replay must not change what it reads ---\ninput digest before: 99549773a7 | after: 99549773a7 | unchanged: True\na replay that tags records as seen changes the digest: True\ncomparing a digest of the input before and after is a cheap read-only check, and it catches a replay that writes into its input; it would not catch a write to a database or a network call, which this lab does not model"
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
    "headingEn": "Experiment 1: A replay on eight made-up incident records",
    "headingKn": "ಪ್ರಯೋಗ 1: A replay on eight made-up incident records",
    "bodyEn": "What it ran: A replay on eight made-up incident records. What the lab concluded: the replay identified the service from a label for four records and from alert text for two more, and returned none for the disk alert (whose only label names a team) and for the bank-timeouts alert (which contains none of its keywords); the records are invented and eight is far too few to say anything about real incidents",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A replay on eight made-up incident records. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the replay identified the service from a label for four records and from alert text for two more, and returned none for the disk alert (whose only label names a team) and for the bank-timeouts alert (which contains none of its keywords); the records are invented and eight is far too few to say anything about real incidents"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: a replay on eight made-up incident records ---\n{'id': 1, 'service': 'payments', 'how': 'label'} truth: payments\n{'id': 2, 'service': 'search', 'how': 'label'} truth: search\n{'id': 3, 'service': 'checkout', 'how': 'keyword'} truth: checkout\n{'id': 4, 'service': 'billing', 'how': 'keyword'} truth: billing\n{'id': 5, 'service': 'auth', 'how': 'label'} truth: auth\n{'id': 6, 'service': None, 'how': 'none'} truth: storage\n{'id': 7, 'service': None, 'how': 'none'} truth: payments\n{'id': 8, 'service': 'search', 'how': 'label'} truth: search\ncorrect: 6/8"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Happy path versus records with missing labels",
    "headingKn": "ಪ್ರಯೋಗ 2: Happy path versus records with missing labels",
    "bodyEn": "What it ran: Happy path versus records with missing labels. What the lab concluded: every labelled record was right and only half of the unlabelled ones were, the misses being the disk alert and the bank-timeouts alert; a test that used only labelled records would have reported a perfect score, and the real question is the rate on the records without labels",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Happy path versus records with missing labels. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): every labelled record was right and only half of the unlabelled ones were, the misses being the disk alert and the bank-timeouts alert; a test that used only labelled records would have reported a perfect score, and the real question is the rate on the records without labels"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely measuring: happy path versus records with missing labels ---\nlabelled only    4/4 = 1.00\nunlabelled only  2/4 = 0.50\nall              6/8 = 0.75"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: A hard-coded demo passes any acceptance rule",
    "headingKn": "ಪ್ರಯೋಗ 3: A hard-coded demo passes any acceptance rule",
    "bodyEn": "What it ran: A hard-coded demo passes any acceptance rule. What the lab concluded: accuracy of a rule that returns the answer key is 8/8 by construction; the demo shows an interface and proves nothing about whether the real records contain the information, which is why a candidate that does not read real records fails the eligibility gate",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A hard-coded demo passes any acceptance rule. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): accuracy of a rule that returns the answer key is 8/8 by construction; the demo shows an interface and proves nothing about whether the real records contain the information, which is why a candidate that does not read real records fails the eligibility gate"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: a hard-coded demo passes any acceptance rule ---\nhard-coded demo: 8/8"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A measurable acceptance rule fixed before the run",
    "headingKn": "ಪ್ರಯೋಗ 4: A measurable acceptance rule fixed before the run",
    "bodyEn": "What it ran: A measurable acceptance rule fixed before the run. What the lab concluded: the replay scored 6 of 8 = 0.75, below the invented 0.80 threshold, so the slice is not accepted, and the identical code on four records was refused for sample size even though all four were right; the thresholds are this lab's own numbers, and the result is the useful kind: a measured answer that the keyword approach is not enough on its own",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A measurable acceptance rule fixed before the run. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the replay scored 6 of 8 = 0.75, below the invented 0.80 threshold, so the slice is not accepted, and the identical code on four records was refused for sample size even though all four were right; the thresholds are this lab's own numbers, and the result is the useful kind: a measured answer that the keyword approach is not enough on its own"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a measurable acceptance rule fixed before the run ---\nrule: {'min_records': 8, 'min_accuracy': 0.8} | result: 6/8 = 0.750 | not accepted\nsame rule on only 4 records: 4/4 | not accepted (too few records)"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: The replay must not change what it reads",
    "headingKn": "ಪ್ರಯೋಗ 5: The replay must not change what it reads",
    "bodyEn": "What it ran: The replay must not change what it reads. What the lab concluded: comparing a digest of the input before and after is a cheap read-only check, and it catches a replay that writes into its input; it would not catch a write to a database or a network call, which this lab does not model",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The replay must not change what it reads. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): comparing a digest of the input before and after is a cheap read-only check, and it catches a replay that writes into its input; it would not catch a write to a database or a network call, which this lab does not model"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: the replay must not change what it reads ---\ninput digest before: 99549773a7 | after: 99549773a7 | unchanged: True\na replay that tags records as seen changes the digest: True"
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
    "headingEn": "Genuinely Found: Six of Eight, and the Unlabelled Half Failed",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಎಂಟರಲ್ಲಿ ಆರು, ಮತ್ತು unlabelled ಅರ್ಧ ವಿಫಲ",
    "bodyEn": "Section 1: the replay classified 6 of 8 records correctly and returned none for the disk alert and the bank-timeouts alert. Section 2: labelled records scored 4/4 = 1.00, unlabelled ones 2/4 = 0.50 and all of them 6/8 = 0.75, so a test on labelled records alone would have reported a perfect score.",
    "bodyKn": "ವಿಭಾಗ 1: replay 8 ರಲ್ಲಿ 6 ದಾಖಲೆಗಳನ್ನು ಸರಿಯಾಗಿ ವರ್ಗೀಕರಿಸಿ disk alert ಮತ್ತು bank-timeouts alert ಗೆ none ಮರಳಿಸಿತು. ವಿಭಾಗ 2: labelled ದಾಖಲೆಗಳು 4/4 = 1.00, unlabelled 2/4 = 0.50 ಮತ್ತು ಎಲ್ಲವೂ 6/8 = 0.75 ಅಂಕ ಪಡೆದವು, ಆದ್ದರಿಂದ labelled ದಾಖಲೆಗಳ ಮೇಲೆ ಮಾತ್ರ ಪರೀಕ್ಷೆ ಪರಿಪೂರ್ಣ ಅಂಕ ವರದಿ ಮಾಡುತ್ತಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Demo Passes Anything; the Rule Said Not Accepted",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Demo ಎಲ್ಲವನ್ನೂ ಪಾಸ್ ಮಾಡುತ್ತದೆ; ನಿಯಮ ಸ್ವೀಕರಿಸಲಿಲ್ಲ",
    "bodyEn": "Section 3: the hard-coded demo returned the answer key and scored 8/8 by construction. Section 4: the rule (at least 8 records and 0.80 accuracy) rejected the replay at 0.750, and rejected four correct records for sample size. Section 5: the input digest was 99549773a7 before and after the good replay, and a replay that tagged records as seen changed it.",
    "bodyKn": "ವಿಭಾಗ 3: hard-coded demo ಉತ್ತರ ಕೀಲಿ ಮರಳಿಸಿ ನಿರ್ಮಾಣದಿಂದಲೇ 8/8 ಅಂಕ ಪಡೆಯಿತು. ವಿಭಾಗ 4: ನಿಯಮ (ಕನಿಷ್ಠ 8 ದಾಖಲೆ ಮತ್ತು 0.80 ನಿಖರತೆ) replay ಅನ್ನು 0.750 ನಲ್ಲಿ ತಿರಸ್ಕರಿಸಿತು, ಮತ್ತು ಸರಿಯಾದ ನಾಲ್ಕು ದಾಖಲೆಗಳನ್ನು ಮಾದರಿ ಗಾತ್ರಕ್ಕಾಗಿ ತಿರಸ್ಕರಿಸಿತು. ವಿಭಾಗ 5: ಒಳ್ಳೆಯ replay ಮೊದಲು ಮತ್ತು ನಂತರ ಒಳಹರಿವಿನ digest 99549773a7 ಆಗಿತ್ತು, ಮತ್ತು ದಾಖಲೆಗಳನ್ನು seen ಎಂದು ಟ್ಯಾಗ್ ಮಾಡಿದ replay ಅದನ್ನು ಬದಲಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A slice that reads real-shaped records can fail, and a failure at eight records is exactly the cheap, decision-changing evidence the lesson is after.",
    "bodyKn": "ನಿಜ-ಆಕಾರದ ದಾಖಲೆಗಳನ್ನು ಓದುವ ಭಾಗ ವಿಫಲವಾಗಬಹುದು, ಮತ್ತು ಎಂಟು ದಾಖಲೆಗಳಲ್ಲಿನ ವೈಫಲ್ಯವೇ lesson ಬಯಸುವ ಅಗ್ಗದ, ನಿರ್ಧಾರ-ಬದಲಿಸುವ ಸಾಕ್ಷ್ಯ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a working demo is evidence.\" The hard-coded demo scored 8/8 on records it never read.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಕೆಲಸ ಮಾಡುವ demo ಸಾಕ್ಷ್ಯ.\" hard-coded demo ತಾನು ಓದದ ದಾಖಲೆಗಳಲ್ಲಿ 8/8 ಪಡೆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Replay: running the slice over recorded inputs. Acceptance rule: a threshold fixed before the run. Answer key: the known correct labels. Digest: a hash used to detect change.",
    "bodyKn": "Replay: ದಾಖಲಿತ ಒಳಹರಿವುಗಳ ಮೇಲೆ ಭಾಗ ಓಡಿಸುವುದು. Acceptance rule: ಓಟಕ್ಕೆ ಮುನ್ನ ನಿಗದಿಯಾದ ಮಿತಿ. Answer key: ತಿಳಿದ ಸರಿಯಾದ labels. Digest: ಬದಲಾವಣೆ ಪತ್ತೆಗೆ ಬಳಸುವ hash."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The replay got 6 of 8. 2) Unlabelled records scored 0.50. 3) A hard-coded demo scored 8/8. 4) The rule rejected 0.75 and four records. 5) A digest check caught a write.",
    "bodyKn": "1) replay 8 ರಲ್ಲಿ 6 ಪಡೆಯಿತು. 2) unlabelled ದಾಖಲೆಗಳು 0.50 ಪಡೆದವು. 3) hard-coded demo 8/8 ಪಡೆಯಿತು. 4) ನಿಯಮ 0.75 ಮತ್ತು ನಾಲ್ಕು ದಾಖಲೆ ತಿರಸ್ಕರಿಸಿತು. 5) digest ಪರಿಶೀಲನೆ ಒಂದು ಬರಹ ಹಿಡಿಯಿತು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B sl_2.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B sl_2.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B sl_2.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B sl_2.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many of the eight records did the replay classify correctly?",
      "qKn": "replay ಎಂಟರಲ್ಲಿ ಎಷ್ಟು ದಾಖಲೆಗಳನ್ನು ಸರಿಯಾಗಿ ವರ್ಗೀಕರಿಸಿತು?",
      "opts": [
       "6",
       "8",
       "4",
       "7"
      ],
      "optsKn": [
       "6",
       "8",
       "4",
       "7"
      ],
      "correct": 0
     },
     {
      "q": "What accuracy did the unlabelled records get?",
      "qKn": "unlabelled ದಾಖಲೆಗಳಿಗೆ ಯಾವ ನಿಖರತೆ ಸಿಕ್ಕಿತು?",
      "opts": [
       "0.50",
       "1.00",
       "0.75",
       "0"
      ],
      "optsKn": [
       "0.50",
       "1.00",
       "0.75",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "Why did the hard-coded demo score 8/8?",
      "qKn": "hard-coded demo 8/8 ಏಕೆ ಪಡೆಯಿತು?",
      "opts": [
       "It returned the answer key",
       "It read the records well",
       "It used labels",
       "It was approved"
      ],
      "optsKn": [
       "ಅದು ಉತ್ತರ ಕೀಲಿ ಮರಳಿಸಿತು",
       "ಅದು ದಾಖಲೆಗಳನ್ನು ಚೆನ್ನಾಗಿ ಓದಿತು",
       "ಅದು labels ಬಳಸಿತು",
       "ಅದು ಅನುಮೋದಿತ"
      ],
      "correct": 0
     },
     {
      "q": "Why were four correct records not accepted?",
      "qKn": "ಸರಿಯಾದ ನಾಲ್ಕು ದಾಖಲೆಗಳು ಏಕೆ ಸ್ವೀಕೃತವಾಗಲಿಲ್ಲ?",
      "opts": [
       "The rule needs at least 8 records",
       "They were wrong",
       "They were unlabelled",
       "They were signed"
      ],
      "optsKn": [
       "ನಿಯಮಕ್ಕೆ ಕನಿಷ್ಠ 8 ದಾಖಲೆ ಬೇಕು",
       "ಅವು ತಪ್ಪಾಗಿದ್ದವು",
       "ಅವು unlabelled",
       "ಅವಕ್ಕೆ ಸಹಿ ಇತ್ತು"
      ],
      "correct": 0
     },
     {
      "q": "What would the digest check not catch?",
      "qKn": "digest ಪರಿಶೀಲನೆ ಯಾವುದನ್ನು ಹಿಡಿಯುವುದಿಲ್ಲ?",
      "opts": [
       "A database write or a network call",
       "A write into the input",
       "A changed record",
       "A tag on a record"
      ],
      "optsKn": [
       "ಡೇಟಾಬೇಸ್ ಬರಹ ಅಥವಾ ನೆಟ್‌ವರ್ಕ್ ಕರೆ",
       "ಒಳಹರಿವಿನೊಳಗೆ ಬರಹ",
       "ಬದಲಾದ ದಾಖಲೆ",
       "ದಾಖಲೆಯ ಟ್ಯಾಗ್"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
