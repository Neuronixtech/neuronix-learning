module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af75c91b6f053d75364816f",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Build a Feedback Ratchet with Ownership and Retirement (Part 2 of 3) — Owned Actions and Evidence",
 "titleKn": "ಮಾಲೀಕತ್ವ ಮತ್ತು ನಿವೃತ್ತಿಯೊಂದಿಗೆ ಪ್ರತಿಕ್ರಿಯೆ Ratchet ನಿರ್ಮಿಸಿ (ಭಾಗ 2 / 3) — ಮಾಲೀಕತ್ವದ ಕ್ರಿಯೆಗಳು ಮತ್ತು ಸಾಕ್ಷ್ಯ",
 "desc": "Require an owner, verification, review date and retirement condition on every action and know which evidence can verify what.",
 "descKn": "ಪ್ರತಿ ಕ್ರಿಯೆಗೆ ಮಾಲೀಕ, ಪರಿಶೀಲನೆ, ವಿಮರ್ಶೆ ದಿನಾಂಕ ಮತ್ತು ನಿವೃತ್ತಿ ಷರತ್ತು ಬಯಸಿ ಮತ್ತು ಯಾವ ಸಾಕ್ಷ್ಯ ಏನನ್ನು ಪರಿಶೀಲಿಸಬಹುದು ತಿಳಿಯಿರಿ.",
 "objectives": [
  "Build an owned action.",
  "Refuse incomplete actions.",
  "Match evidence to the claim.",
  "Sort a backlog by review date.",
  "Serialise the backlog."
 ],
 "objectivesKn": [
  "ಮಾಲೀಕತ್ವದ ಕ್ರಿಯೆ ನಿರ್ಮಿಸಿ.",
  "ಅಪೂರ್ಣ ಕ್ರಿಯೆಗಳನ್ನು ನಿರಾಕರಿಸಿ.",
  "ಸಾಕ್ಷ್ಯವನ್ನು ಹೇಳಿಕೆಗೆ ಹೊಂದಿಸಿ.",
  "ಬ್ಯಾಕ್‌ಲಾಗ್ ಅನ್ನು ವಿಮರ್ಶೆ ದಿನಾಂಕದಿಂದ ವಿಂಗಡಿಸಿ.",
  "ಬ್ಯಾಕ್‌ಲಾಗ್ ಸರಣೀಕರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Build a Feedback Ratchet with Ownership and Retirement (Part 2 of 3)",
    "textKn": "ಮಾಲೀಕತ್ವ ಮತ್ತು ನಿವೃತ್ತಿಯೊಂದಿಗೆ ಪ್ರತಿಕ್ರಿಯೆ Ratchet ನಿರ್ಮಿಸಿ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: owned actions that carry a verification, a review date and a retirement condition, validation that refuses incomplete ones, evidence types and a JSON backlog. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind building a feedback ratchet with ownership and retirement (signal routing, priority, owned actions, evidence labels and keep, revise or retire decisions), not the real software, and the signals, owners, dates and counts are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, and the lesson text says only its concepts, lab instructions and acceptance criteria were given, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಮಾಲೀಕರು, ಪರಿಶೀಲನೆ, ವಿಮರ್ಶೆ ದಿನಾಂಕ ಮತ್ತು ನಿವೃತ್ತಿ ಷರತ್ತು ಹೊತ್ತ ಮಾಲೀಕತ್ವದ ಕ್ರಿಯೆಗಳು, ಅಪೂರ್ಣವಾದವನ್ನು ನಿರಾಕರಿಸುವ ಮಾನ್ಯೀಕರಣ, ಸಾಕ್ಷ್ಯ ವಿಧಗಳು ಮತ್ತು JSON ಬ್ಯಾಕ್‌ಲಾಗ್. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಮಾಲೀಕತ್ವ ಮತ್ತು ನಿವೃತ್ತಿಯೊಂದಿಗೆ ಪ್ರತಿಕ್ರಿಯೆ ratchet ನಿರ್ಮಾಣ (signal ರೂಟಿಂಗ್, ಆದ್ಯತೆ, ಮಾಲೀಕತ್ವದ ಕ್ರಿಯೆಗಳು, ಸಾಕ್ಷ್ಯ ಲೇಬಲ್‌ಗಳು ಮತ್ತು ಇರಿಸಿ, ಪರಿಷ್ಕರಿಸಿ ಅಥವಾ ನಿವೃತ್ತಗೊಳಿಸಿ ನಿರ್ಧಾರಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು signals, ಮಾಲೀಕರು, ದಿನಾಂಕಗಳು ಮತ್ತು ಎಣಿಕೆಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು ಕೇವಲ ಅದರ ಪರಿಕಲ್ಪನೆಗಳು, ಲ್ಯಾಬ್ ಸೂಚನೆಗಳು ಮತ್ತು ಸ್ವೀಕಾರ ಮಾನದಂಡ ನೀಡಲಾಗಿತ್ತು ಎಂದು lesson ಪಠ್ಯ ಹೇಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Without Ownership It Is a List; Without Retirement It Is a Pile",
    "textKn": "ಮಾಲೀಕತ್ವವಿಲ್ಲದಿದ್ದರೆ ಪಟ್ಟಿ; ನಿವೃತ್ತಿ ಇಲ್ಲದಿದ್ದರೆ ರಾಶಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Each Action Carries Its Own End",
    "headingKn": "ಪ್ರತಿ ಕ್ರಿಯೆ ತನ್ನ ಅಂತ್ಯವನ್ನು ಹೊತ್ತಿದೆ",
    "bodyEn": "This part builds the action a routed signal becomes. An action must name an owner, how it will be verified, a future review date and the condition under which it retires, and a validator refuses it otherwise. The part also sets out which kind of evidence can verify a claim about real use, since a simulation shows only that a code path behaves, and ends with a backlog sorted by review date and serialised to JSON in memory. Dates are invented and today is fixed at 2026-11-14.",
    "bodyKn": "ರೂಟ್ ಆದ signal ಆಗುವ ಕ್ರಿಯೆಯನ್ನು ಈ ಭಾಗ ನಿರ್ಮಿಸುತ್ತದೆ. ಕ್ರಿಯೆ ಮಾಲೀಕ, ಅದನ್ನು ಹೇಗೆ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ, ಭವಿಷ್ಯದ ವಿಮರ್ಶೆ ದಿನಾಂಕ ಮತ್ತು ಅದು ನಿವೃತ್ತವಾಗುವ ಷರತ್ತು ಹೆಸರಿಸಬೇಕು, ಇಲ್ಲದಿದ್ದರೆ validator ನಿರಾಕರಿಸುತ್ತದೆ. ಭಾಗ ನಿಜ ಬಳಕೆಯ ಬಗ್ಗೆ ಹೇಳಿಕೆಯನ್ನು ಯಾವ ರೀತಿಯ ಸಾಕ್ಷ್ಯ ಪರಿಶೀಲಿಸಬಹುದು ಎಂದೂ ಹೇಳುತ್ತದೆ, ಏಕೆಂದರೆ ಸಿಮ್ಯುಲೇಶನ್ ಕೋಡ್ ಮಾರ್ಗ ವರ್ತಿಸುತ್ತದೆ ಎಂದು ಮಾತ್ರ ತೋರಿಸುತ್ತದೆ, ಮತ್ತು ವಿಮರ್ಶೆ ದಿನಾಂಕದಿಂದ ವಿಂಗಡಿಸಿ ಮೆಮೊರಿಯಲ್ಲಿ JSON ಆಗಿ ಸರಣೀಕರಿಸಿದ ಬ್ಯಾಕ್‌ಲಾಗ್‌ನೊಂದಿಗೆ ಮುಗಿಯುತ್ತದೆ. ದಿನಾಂಕಗಳು ಕಲ್ಪಿತ ಮತ್ತು ಇಂದು 2026-11-14 ಎಂದು ನಿಗದಿ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Owned Actions",
    "headingKn": "ಮಾಲೀಕತ್ವದ ಕ್ರಿಯೆಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">an action without an end is a restriction forever</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">action</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">owner + verify</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">review date</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">in the future</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">retire when</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">written down</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">backlog</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">sorted by date</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">an action without an end is a restriction forever</text></svg>",
    "captionEn": "Every action has an owner, a verification, a review date and a retirement condition.",
    "captionKn": "ಪ್ರತಿ ಕ್ರಿಯೆಗೆ ಮಾಲೀಕ, ಪರಿಶೀಲನೆ, ವಿಮರ್ಶೆ ದಿನಾಂಕ ಮತ್ತು ನಿವೃತ್ತಿ ಷರತ್ತು ಇವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Evidence that can verify a claim (lab policy)",
    "headingKn": "ಹೇಳಿಕೆ ಪರಿಶೀಲಿಸಬಲ್ಲ ಸಾಕ್ಷ್ಯ (ಲ್ಯಾಬ್ ನೀತಿ)",
    "headers": [
     "Evidence",
     "Real-world failure fixed",
     "Code-path claim"
    ],
    "rows": [
     [
      "observation",
      "yes",
      "yes"
     ],
     [
      "reported",
      "no",
      "no"
     ],
     [
      "inference",
      "no",
      "no"
     ],
     [
      "simulation",
      "no",
      "yes"
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
    "filename": "fb_2.py",
    "headingEn": "Actions, validation and the backlog",
    "headingKn": "ಕ್ರಿಯೆಗಳು, ಮಾನ್ಯೀಕರಣ ಮತ್ತು ಬ್ಯಾಕ್‌ಲಾಗ್",
    "descEn": "make_action builds the record, validate_action reports every missing field and any review date that is not in the future, can_verify applies the evidence policy and backlog sorts by review date.",
    "descKn": "make_action ದಾಖಲೆ ನಿರ್ಮಿಸುತ್ತದೆ, validate_action ಪ್ರತಿ ಕಾಣೆಯಾದ ಕ್ಷೇತ್ರ ಮತ್ತು ಭವಿಷ್ಯದಲ್ಲಿಲ್ಲದ ಯಾವುದೇ ವಿಮರ್ಶೆ ದಿನಾಂಕ ವರದಿ ಮಾಡುತ್ತದೆ, can_verify ಸಾಕ್ಷ್ಯ ನೀತಿ ಅನ್ವಯಿಸುತ್ತದೆ ಮತ್ತು backlog ವಿಮರ್ಶೆ ದಿನಾಂಕದಿಂದ ವಿಂಗಡಿಸುತ್ತದೆ.",
    "code": "def make_action(signal, layer, owner, verify, review_by, retire_when):\n    return {\"signal\": signal, \"layer\": layer, \"owner\": owner, \"verify\": verify, \"review_by\": review_by, \"retire_when\": retire_when}\n\n\ndef validate_action(a):\n    errors = []\n    for k in (\"owner\", \"verify\", \"review_by\", \"retire_when\"):\n        if not a.get(k):\n            errors.append(f\"{k} is required\")\n    if a.get(\"review_by\"):\n        try:\n            if date.fromisoformat(a[\"review_by\"]) <= TODAY:\n                errors.append(\"review_by must be in the future\")\n        except ValueError:\n            errors.append(\"review_by is not a date\")\n    return errors\n\n\ndef can_verify(evidence_kind, claim_about_real_world):\n    if claim_about_real_world:\n        return evidence_kind in (\"observation\",)\n    return evidence_kind in (\"observation\", \"simulation\")\n\n\ndef backlog(actions):\n    return sorted(actions, key=lambda a: (a[\"review_by\"], a[\"signal\"]))"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "fb_2.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() builds one action, tries five incomplete ones, prints the evidence policy, sorts three actions by review date and serialises a backlog in memory.",
    "descKn": "main() ಒಂದು ಕ್ರಿಯೆ ನಿರ್ಮಿಸಿ, ಐದು ಅಪೂರ್ಣವಾದವನ್ನು ಪ್ರಯತ್ನಿಸಿ, ಸಾಕ್ಷ್ಯ ನೀತಿ ಮುದ್ರಿಸಿ, ಮೂರು ಕ್ರಿಯೆಗಳನ್ನು ವಿಮರ್ಶೆ ದಿನಾಂಕದಿಂದ ವಿಂಗಡಿಸಿ ಮತ್ತು ಮೆಮೊರಿಯಲ್ಲಿ ಬ್ಯಾಕ್‌ಲಾಗ್ ಸರಣೀಕರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: an owned action carries an owner, a verification, a review date and a retirement condition\")\n    a = make_action(\"S002\", \"scope_policy\", \"platform\", \"run the scope check against the last 20 agent diffs\", \"2027-01-15\", \"no scope violations for 90 days and the permission boundary replaces it\")\n    for k, v in a.items():\n        print(f\"{k:12} {v}\")\n    print(\"validation errors:\", validate_action(a))\n    print(\"an action without an owner, a way to verify it, a review date and a condition for retiring it is a wish; the dates here are invented and the lab fixes today at 2026-11-14\")\n\n    section(\"2. Genuinely running: incomplete actions are refused\")\n    for label, kw in ((\"no owner\", dict(owner=\"\")), (\"no verification\", dict(verify=\"\")), (\"no retirement condition\", dict(retire_when=\"\")), (\"review date in the past\", dict(review_by=\"2026-10-01\")), (\"bad date\", dict(review_by=\"next month\"))):\n        base = dict(signal=\"S9\", layer=\"x\", owner=\"o\", verify=\"v\", review_by=\"2027-01-01\", retire_when=\"r\")\n        base.update(kw)\n        print(f\"{label:24} {validate_action(make_action(**base))}\")\n    print(\"each missing or malformed field produced its own error and a past review date was refused, so a backlog cannot fill with actions nobody will ever revisit\")\n\n    section(\"3. Genuinely running: what kind of evidence can verify what\")\n    for kind in EVIDENCE:\n        print(f\"{kind:11} can verify a real-world failure is fixed: {can_verify(kind, True)!s:5} | can verify a code-path claim: {can_verify(kind, False)}\")\n    print(\"a simulation can show a code path behaves, and it cannot show that a real user's failure is gone, and a report or an inference is a lead and not a verification; the table is the lab's own policy\")\n\n    section(\"4. Genuinely running: a review-date ordered backlog\")\n    acts = [make_action(\"S003\", \"schema_validator\", \"api-team\", \"contract test\", \"2027-02-01\", \"schema generated\"), make_action(\"S004\", \"runtime_limits\", \"sre\", \"timeout drill\", \"2026-12-01\", \"limit enforced by platform\"), a]\n    for x in backlog(acts):\n        print(x[\"review_by\"], x[\"signal\"], x[\"owner\"], \"| due in\", (date.fromisoformat(x[\"review_by\"]) - TODAY).days, \"days\")\n    print(\"the backlog sorts by review date so the next control to revisit is at the top; the sort does not weigh priority, which is a separate score from Part 1\")\n\n    section(\"5. Genuinely running: the JSON backlog\")\n    text = json.dumps({\"generated\": TODAY.isoformat(), \"actions\": backlog(acts)}, sort_keys=True)\n    back = json.loads(text)\n    print(\"actions:\", len(back[\"actions\"]), \"| every action valid:\", all(not validate_action(x) for x in back[\"actions\"]), \"| bytes:\", len(text))\n    print(\"the backlog is built in memory and round-trips through JSON, and the lab does not write outputs/feedback-backlog.json\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: an owned action carries an owner, a verification, a review date and a retirement condition ---\nsignal       S002\nlayer        scope_policy\nowner        platform\nverify       run the scope check against the last 20 agent diffs\nreview_by    2027-01-15\nretire_when  no scope violations for 90 days and the permission boundary replaces it\nvalidation errors: []\nan action without an owner, a way to verify it, a review date and a condition for retiring it is a wish; the dates here are invented and the lab fixes today at 2026-11-14\n\n--- 2. Genuinely running: incomplete actions are refused ---\nno owner                 ['owner is required']\nno verification          ['verify is required']\nno retirement condition  ['retire_when is required']\nreview date in the past  ['review_by must be in the future']\nbad date                 ['review_by is not a date']\neach missing or malformed field produced its own error and a past review date was refused, so a backlog cannot fill with actions nobody will ever revisit\n\n--- 3. Genuinely running: what kind of evidence can verify what ---\nobservation can verify a real-world failure is fixed: True  | can verify a code-path claim: True\nreported    can verify a real-world failure is fixed: False | can verify a code-path claim: False\ninference   can verify a real-world failure is fixed: False | can verify a code-path claim: False\nsimulation  can verify a real-world failure is fixed: False | can verify a code-path claim: True\na simulation can show a code path behaves, and it cannot show that a real user's failure is gone, and a report or an inference is a lead and not a verification; the table is the lab's own policy\n\n--- 4. Genuinely running: a review-date ordered backlog ---\n2026-12-01 S004 sre | due in 17 days\n2027-01-15 S002 platform | due in 62 days\n2027-02-01 S003 api-team | due in 79 days\nthe backlog sorts by review date so the next control to revisit is at the top; the sort does not weigh priority, which is a separate score from Part 1\n\n--- 5. Genuinely running: the JSON backlog ---\nactions: 3 | every action valid: True | bytes: 609\nthe backlog is built in memory and round-trips through JSON, and the lab does not write outputs/feedback-backlog.json"
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
    "headingEn": "Experiment 1: An owned action carries an owner, a verification, a review date and a retirement condition",
    "headingKn": "ಪ್ರಯೋಗ 1: An owned action carries an owner, a verification, a review date and a retirement condition",
    "bodyEn": "What it ran: An owned action carries an owner, a verification, a review date and a retirement condition. What the lab concluded: an action without an owner, a way to verify it, a review date and a condition for retiring it is a wish; the dates here are invented and the lab fixes today at 2026-11-14",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: An owned action carries an owner, a verification, a review date and a retirement condition. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): an action without an owner, a way to verify it, a review date and a condition for retiring it is a wish; the dates here are invented and the lab fixes today at 2026-11-14"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: an owned action carries an owner, a verification, a review date and a retirement condition ---\nsignal       S002\nlayer        scope_policy\nowner        platform\nverify       run the scope check against the last 20 agent diffs\nreview_by    2027-01-15\nretire_when  no scope violations for 90 days and the permission boundary replaces it\nvalidation errors: []"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Incomplete actions are refused",
    "headingKn": "ಪ್ರಯೋಗ 2: Incomplete actions are refused",
    "bodyEn": "What it ran: Incomplete actions are refused. What the lab concluded: each missing or malformed field produced its own error and a past review date was refused, so a backlog cannot fill with actions nobody will ever revisit",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Incomplete actions are refused. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each missing or malformed field produced its own error and a past review date was refused, so a backlog cannot fill with actions nobody will ever revisit"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: incomplete actions are refused ---\nno owner                 ['owner is required']\nno verification          ['verify is required']\nno retirement condition  ['retire_when is required']\nreview date in the past  ['review_by must be in the future']\nbad date                 ['review_by is not a date']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: What kind of evidence can verify what",
    "headingKn": "ಪ್ರಯೋಗ 3: What kind of evidence can verify what",
    "bodyEn": "What it ran: What kind of evidence can verify what. What the lab concluded: a simulation can show a code path behaves, and it cannot show that a real user's failure is gone, and a report or an inference is a lead and not a verification; the table is the lab's own policy",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: What kind of evidence can verify what. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a simulation can show a code path behaves, and it cannot show that a real user's failure is gone, and a report or an inference is a lead and not a verification; the table is the lab's own policy"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: what kind of evidence can verify what ---\nobservation can verify a real-world failure is fixed: True  | can verify a code-path claim: True\nreported    can verify a real-world failure is fixed: False | can verify a code-path claim: False\ninference   can verify a real-world failure is fixed: False | can verify a code-path claim: False\nsimulation  can verify a real-world failure is fixed: False | can verify a code-path claim: True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A review-date ordered backlog",
    "headingKn": "ಪ್ರಯೋಗ 4: A review-date ordered backlog",
    "bodyEn": "What it ran: A review-date ordered backlog. What the lab concluded: the backlog sorts by review date so the next control to revisit is at the top; the sort does not weigh priority, which is a separate score from Part 1",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A review-date ordered backlog. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the backlog sorts by review date so the next control to revisit is at the top; the sort does not weigh priority, which is a separate score from Part 1"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a review-date ordered backlog ---\n2026-12-01 S004 sre | due in 17 days\n2027-01-15 S002 platform | due in 62 days\n2027-02-01 S003 api-team | due in 79 days"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: The JSON backlog",
    "headingKn": "ಪ್ರಯೋಗ 5: The JSON backlog",
    "bodyEn": "What it ran: The JSON backlog. What the lab concluded: the backlog is built in memory and round-trips through JSON, and the lab does not write outputs/feedback-backlog.json",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The JSON backlog. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the backlog is built in memory and round-trips through JSON, and the lab does not write outputs/feedback-backlog.json"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: the JSON backlog ---\nactions: 3 | every action valid: True | bytes: 609"
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
    "headingEn": "Genuinely Found: Five Ways to Be an Incomplete Action",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅಪೂರ್ಣ ಕ್ರಿಯೆಯಾಗಲು ಐದು ದಾರಿಗಳು",
    "bodyEn": "Section 1: the complete scope action had no validation errors. Section 2: a missing owner, verification or retirement condition each produced \"… is required\", a review date of 2026-10-01 produced \"review_by must be in the future\" and \"next month\" produced \"review_by is not a date\".",
    "bodyKn": "ವಿಭಾಗ 1: ಸಂಪೂರ್ಣ ವ್ಯಾಪ್ತಿ ಕ್ರಿಯೆಗೆ ಮಾನ್ಯೀಕರಣ ದೋಷ ಇರಲಿಲ್ಲ. ವಿಭಾಗ 2: ಕಾಣೆಯಾದ ಮಾಲೀಕ, ಪರಿಶೀಲನೆ ಅಥವಾ ನಿವೃತ್ತಿ ಷರತ್ತು ಪ್ರತಿಯೊಂದೂ \"… is required\" ನೀಡಿತು, 2026-10-01 ವಿಮರ್ಶೆ ದಿನಾಂಕ \"review_by must be in the future\" ನೀಡಿತು ಮತ್ತು \"next month\" \"review_by is not a date\" ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: What Evidence Can Verify and the Backlog",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಯಾವ ಸಾಕ್ಷ್ಯ ಪರಿಶೀಲಿಸಬಹುದು ಮತ್ತು ಬ್ಯಾಕ್‌ಲಾಗ್",
    "bodyEn": "Section 3: only an observation can verify that a real-world failure is fixed, a simulation can verify a code-path claim, and reported and inferred evidence can verify neither. Section 4: the backlog ordered S004 (17 days), S002 (62 days) and S003 (79 days). Section 5: three actions, all valid, 609 bytes, and no file was written.",
    "bodyKn": "ವಿಭಾಗ 3: ನಿಜ-ಜಗತ್ತಿನ ವೈಫಲ್ಯ ಸರಿಪಡಿಸಲಾಗಿದೆ ಎಂದು observation ಮಾತ್ರ ಪರಿಶೀಲಿಸಬಹುದು, simulation ಕೋಡ್-ಮಾರ್ಗ ಹೇಳಿಕೆ ಪರಿಶೀಲಿಸಬಹುದು, ಮತ್ತು reported ಹಾಗೂ inferred ಸಾಕ್ಷ್ಯ ಎರಡನ್ನೂ ಪರಿಶೀಲಿಸಲಾಗದು. ವಿಭಾಗ 4: ಬ್ಯಾಕ್‌ಲಾಗ್ S004 (17 ದಿನ), S002 (62 ದಿನ) ಮತ್ತು S003 (79 ದಿನ) ಕ್ರಮದಲ್ಲಿತ್ತು. ವಿಭಾಗ 5: ಮೂರು ಕ್ರಿಯೆಗಳು, ಎಲ್ಲವೂ ಮಾನ್ಯ, 609 ಬೈಟ್, ಮತ್ತು ಯಾವುದೇ ಫೈಲ್ ಬರೆಯಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A control with no review date and no retirement condition will outlive its reason, and an unverified claim about a fix will be believed until the failure returns.",
    "bodyKn": "ವಿಮರ್ಶೆ ದಿನಾಂಕ ಮತ್ತು ನಿವೃತ್ತಿ ಷರತ್ತು ಇಲ್ಲದ ನಿಯಂತ್ರಣ ತನ್ನ ಕಾರಣಕ್ಕಿಂತ ಹೆಚ್ಚು ಕಾಲ ಬದುಕುತ್ತದೆ, ಮತ್ತು ಸರಿಪಡಿಕೆಯ ಬಗ್ಗೆ ಪರಿಶೀಲಿಸದ ಹೇಳಿಕೆ ವೈಫಲ್ಯ ಮರಳುವವರೆಗೆ ನಂಬಲಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a simulation shows the fix works for users.\" It can only show a code path behaves.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಸಿಮ್ಯುಲೇಶನ್ ಸರಿಪಡಿಕೆ ಬಳಕೆದಾರರಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ.\" ಅದು ಕೋಡ್ ಮಾರ್ಗ ವರ್ತಿಸುತ್ತದೆ ಎಂದು ಮಾತ್ರ ತೋರಿಸಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Owned action: an action with a named owner. Verification: how the fix will be shown to work. Review date: when it is revisited. Retirement condition: when it can be removed.",
    "bodyKn": "Owned action: ಹೆಸರಿಸಿದ ಮಾಲೀಕರ ಕ್ರಿಯೆ. Verification: ಸರಿಪಡಿಕೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದು ಹೇಗೆ ತೋರಿಸಲಾಗುತ್ತದೆ. Review date: ಅದನ್ನು ಮರುಪರಿಶೀಲಿಸುವ ದಿನ. Retirement condition: ಅದನ್ನು ತೆಗೆಯಬಹುದಾದ ಸಂದರ್ಭ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A complete action names owner, verification, review date and retirement. 2) Five incomplete forms were refused. 3) Only an observation verifies a real-world fix. 4) The backlog sorted by review date. 5) It was built in memory.",
    "bodyKn": "1) ಸಂಪೂರ್ಣ ಕ್ರಿಯೆ ಮಾಲೀಕ, ಪರಿಶೀಲನೆ, ವಿಮರ್ಶೆ ದಿನಾಂಕ ಮತ್ತು ನಿವೃತ್ತಿ ಹೆಸರಿಸುತ್ತದೆ. 2) ಐದು ಅಪೂರ್ಣ ರೂಪಗಳು ನಿರಾಕರಿಸಲ್ಪಟ್ಟವು. 3) observation ಮಾತ್ರ ನಿಜ-ಜಗತ್ತಿನ ಸರಿಪಡಿಕೆ ಪರಿಶೀಲಿಸುತ್ತದೆ. 4) ಬ್ಯಾಕ್‌ಲಾಗ್ ವಿಮರ್ಶೆ ದಿನಾಂಕದಿಂದ ವಿಂಗಡಣೆ. 5) ಅದನ್ನು ಮೆಮೊರಿಯಲ್ಲಿ ನಿರ್ಮಿಸಲಾಯಿತು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B fb_2.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B fb_2.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B fb_2.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B fb_2.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did a review date of 2026-10-01 produce?",
      "qKn": "2026-10-01 ವಿಮರ್ಶೆ ದಿನಾಂಕ ಏನು ನೀಡಿತು?",
      "opts": [
       "review_by must be in the future",
       "review_by is not a date",
       "owner is required",
       "No error"
      ],
      "optsKn": [
       "review_by ಭವಿಷ್ಯದಲ್ಲಿರಬೇಕು (must be in the future)",
       "review_by ದಿನಾಂಕವಲ್ಲ (is not a date)",
       "owner ಅಗತ್ಯ (is required)",
       "ದೋಷ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Which evidence can verify a real-world failure is fixed?",
      "qKn": "ನಿಜ-ಜಗತ್ತಿನ ವೈಫಲ್ಯ ಸರಿಪಡಿಸಲಾಗಿದೆ ಎಂದು ಯಾವ ಸಾಕ್ಷ್ಯ ಪರಿಶೀಲಿಸಬಹುದು?",
      "opts": [
       "observation",
       "simulation",
       "reported",
       "inference"
      ],
      "optsKn": [
       "observation",
       "simulation",
       "reported",
       "inference"
      ],
      "correct": 0
     },
     {
      "q": "Which action was due first?",
      "qKn": "ಯಾವ ಕ್ರಿಯೆ ಮೊದಲು ಬಾಕಿ?",
      "opts": [
       "S004",
       "S002",
       "S003",
       "None"
      ],
      "optsKn": [
       "S004",
       "S002",
       "S003",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What can a simulation verify?",
      "qKn": "simulation ಏನನ್ನು ಪರಿಶೀಲಿಸಬಹುದು?",
      "opts": [
       "A code-path claim",
       "A real user's fix",
       "Both",
       "Neither"
      ],
      "optsKn": [
       "ಕೋಡ್-ಮಾರ್ಗ ಹೇಳಿಕೆ",
       "ನಿಜ ಬಳಕೆದಾರರ ಸರಿಪಡಿಕೆ",
       "ಎರಡೂ",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Was outputs/feedback-backlog.json written?",
      "qKn": "outputs/feedback-backlog.json ಬರೆಯಲಾಯಿತೇ?",
      "opts": [
       "No, it stayed in memory",
       "Yes",
       "Only valid actions",
       "Only for S004"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಮೆಮೊರಿಯಲ್ಲಿ ಉಳಿಯಿತು",
       "ಹೌದು",
       "ಮಾನ್ಯ ಕ್ರಿಯೆಗಳು ಮಾತ್ರ",
       "S004 ಗೆ ಮಾತ್ರ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
