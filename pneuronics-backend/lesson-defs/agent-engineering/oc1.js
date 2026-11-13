module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af756e644bb92cc02d9fbc5",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Define the Outcome Before You Choose the Output (Part 1 of 3) — Frames and Solution Leakage",
 "titleKn": "ಔಟ್‌ಪುಟ್ ಆರಿಸುವ ಮುನ್ನ ಫಲಿತಾಂಶ ವ್ಯಾಖ್ಯಾನಿಸಿ (ಭಾಗ 1 / 3) — ಚೌಕಟ್ಟುಗಳು ಮತ್ತು ಪರಿಹಾರ ಸೋರಿಕೆ",
 "desc": "Write a six-field outcome frame, validate it and detect solution words while seeing where the detector is wrong.",
 "descKn": "ಆರು-ಕ್ಷೇತ್ರ ಫಲಿತಾಂಶ ಚೌಕಟ್ಟು ಬರೆದು, ಮಾನ್ಯಗೊಳಿಸಿ ಮತ್ತು ಪತ್ತೆಕಾರ ಎಲ್ಲಿ ತಪ್ಪುತ್ತದೆ ನೋಡುತ್ತಾ ಪರಿಹಾರ ಪದ ಪತ್ತೆ ಮಾಡಿ.",
 "objectives": [
  "Tell output from outcome.",
  "Write the six fields.",
  "Validate structure.",
  "Detect solution leakage.",
  "Know the detector's limits."
 ],
 "objectivesKn": [
  "ಔಟ್‌ಪುಟ್ ಮತ್ತು ಫಲಿತಾಂಶ ಬೇರ್ಪಡಿಸಿ.",
  "ಆರು ಕ್ಷೇತ್ರ ಬರೆಯಿರಿ.",
  "ರಚನೆ ಮಾನ್ಯಗೊಳಿಸಿ.",
  "ಪರಿಹಾರ ಸೋರಿಕೆ ಪತ್ತೆ ಮಾಡಿ.",
  "ಪತ್ತೆಕಾರದ ಮಿತಿ ತಿಳಿಯಿರಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Define the Outcome Before You Choose the Output (Part 1 of 3)",
    "textKn": "ಔಟ್‌ಪುಟ್ ಆರಿಸುವ ಮುನ್ನ ಫಲಿತಾಂಶ ವ್ಯಾಖ್ಯಾನಿಸಿ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: output versus outcome, the six-field outcome frame, structural validation and solution-leakage detection with its false positives and false negatives. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind defining the outcome before choosing the output (outcome frames, solution leakage, observable wording, constraints, evidence and gates), not the real software, and the frames, plans and measurements are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original main.py (phases/14-agent-engineering/47-outcomes-before-output/code/main.py) was not supplied, and the lesson says its code is a teaching implementation, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಔಟ್‌ಪುಟ್ ಮತ್ತು ಫಲಿತಾಂಶ, ಆರು-ಕ್ಷೇತ್ರ ಫಲಿತಾಂಶ ಚೌಕಟ್ಟು, ರಚನಾತ್ಮಕ ಮಾನ್ಯೀಕರಣ ಮತ್ತು ಪರಿಹಾರ-ಸೋರಿಕೆ ಪತ್ತೆ ಅದರ ತಪ್ಪು ಧನಾತ್ಮಕ ಮತ್ತು ತಪ್ಪು ಋಣಾತ್ಮಕಗಳೊಂದಿಗೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಔಟ್‌ಪುಟ್ ಆರಿಸುವ ಮುನ್ನ ಫಲಿತಾಂಶ ವ್ಯಾಖ್ಯಾನಿಸುವುದು (ಫಲಿತಾಂಶ ಚೌಕಟ್ಟುಗಳು, ಪರಿಹಾರ ಸೋರಿಕೆ, ವೀಕ್ಷಿಸಬಹುದಾದ ಪದಗಳು, ನಿರ್ಬಂಧಗಳು, ಸಾಕ್ಷ್ಯ ಮತ್ತು gates) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಚೌಕಟ್ಟುಗಳು, ಯೋಜನೆಗಳು ಮತ್ತು ಅಳತೆಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ main.py (phases/14-agent-engineering/47-outcomes-before-output/code/main.py) ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ತನ್ನ ಕೋಡ್ ಬೋಧನಾ ಅನುಷ್ಠಾನ ಎಂದು ಹೇಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Request Is Not an Outcome",
    "textKn": "ವಿನಂತಿ ಫಲಿತಾಂಶವಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Six-Field Frame and Its Leaks",
    "headingKn": "ಆರು-ಕ್ಷೇತ್ರ ಚೌಕಟ್ಟು ಮತ್ತು ಅದರ ಸೋರಿಕೆಗಳು",
    "bodyEn": "\"Build an AI incident assistant\" already names the solution and says nothing about who is helped or how anyone will know. An outcome frame fixes six things first: the user, the situation, the current behaviour, the desired outcome, the constraints and the non-goals. This part builds the frame, checks it structurally and then detects solution words in the outcome, including the cases where the check is wrong in both directions.",
    "bodyKn": "\"Build an AI incident assistant\" ಈಗಾಗಲೇ ಪರಿಹಾರ ಹೆಸರಿಸುತ್ತದೆ ಮತ್ತು ಯಾರಿಗೆ ಸಹಾಯ ಅಥವಾ ಹೇಗೆ ತಿಳಿಯುತ್ತದೆ ಎಂದು ಹೇಳುವುದಿಲ್ಲ. ಫಲಿತಾಂಶ ಚೌಕಟ್ಟು ಮೊದಲು ಆರು ವಿಷಯ ನಿಗದಿಪಡಿಸುತ್ತದೆ: ಬಳಕೆದಾರ, ಸನ್ನಿವೇಶ, ಪ್ರಸ್ತುತ ವರ್ತನೆ, ಅಪೇಕ್ಷಿತ ಫಲಿತಾಂಶ, ನಿರ್ಬಂಧಗಳು ಮತ್ತು non-goals. ಈ ಭಾಗ ಚೌಕಟ್ಟು ನಿರ್ಮಿಸಿ, ರಚನಾತ್ಮಕವಾಗಿ ಪರಿಶೀಲಿಸಿ, ನಂತರ ಫಲಿತಾಂಶದಲ್ಲಿ ಪರಿಹಾರ ಪದಗಳನ್ನು ಪತ್ತೆ ಮಾಡುತ್ತದೆ, ಪರಿಶೀಲನೆ ಎರಡೂ ದಿಕ್ಕಿನಲ್ಲಿ ತಪ್ಪಾಗುವ ಸಂದರ್ಭಗಳು ಸಹ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Outcome Before Output",
    "headingKn": "ಔಟ್‌ಪುಟ್ ಮುನ್ನ ಫಲಿತಾಂಶ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Outcome before output</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">problem</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">what hurts</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">outcome</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">what changes</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">evidence</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">how we know</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">solution</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">chosen last</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the solution comes after the outcome</text></svg>",
    "captionEn": "The solution is chosen after the outcome and its evidence.",
    "captionKn": "ಪರಿಹಾರವನ್ನು ಫಲಿತಾಂಶ ಮತ್ತು ಅದರ ಸಾಕ್ಷ್ಯದ ನಂತರ ಆರಿಸಲಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The six fields",
    "headingKn": "ಆರು ಕ್ಷೇತ್ರಗಳು",
    "headers": [
     "Field",
     "Question",
     "Lab example"
    ],
    "rows": [
     [
      "user",
      "who feels it",
      "on-call production engineer"
     ],
     [
      "situation",
      "when",
      "a production alert has just arrived"
     ],
     [
      "current behavior",
      "today",
      "manual correlation, about 12 minutes (illustrative)"
     ],
     [
      "desired outcome",
      "what changes",
      "failing service and next safe action within two minutes"
     ],
     [
      "constraints",
      "limits",
      "read-only, auditable"
     ],
     [
      "non-goals",
      "excluded",
      "automatic remediation"
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
    "filename": "oc_1.py",
    "headingEn": "Frame, structure check and leakage check",
    "headingKn": "ಚೌಕಟ್ಟು, ರಚನೆ ಪರಿಶೀಲನೆ ಮತ್ತು ಸೋರಿಕೆ ಪರಿಶೀಲನೆ",
    "descEn": "OutcomeFrame holds the six fields, validate_structure lists missing ones, leaks_naive matches substrings and leaks_words matches whole words, and validate_leakage scans only the desired outcome and the current behaviour.",
    "descKn": "OutcomeFrame ಆರು ಕ್ಷೇತ್ರ ಹೊಂದಿದೆ, validate_structure ಕಾಣೆಯಾದವನ್ನು ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ, leaks_naive ಉಪಸ್ಟ್ರಿಂಗ್ ಹೊಂದಿಸುತ್ತದೆ ಮತ್ತು leaks_words ಪೂರ್ಣ ಪದ ಹೊಂದಿಸುತ್ತದೆ, ಮತ್ತು validate_leakage ಅಪೇಕ್ಷಿತ ಫಲಿತಾಂಶ ಮತ್ತು ಪ್ರಸ್ತುತ ವರ್ತನೆ ಮಾತ್ರ ಸ್ಕ್ಯಾನ್ ಮಾಡುತ್ತದೆ.",
    "code": "@dataclass(frozen=True)\nclass OutcomeFrame:\n    user: str\n    situation: str\n    current_behavior: str\n    desired_outcome: str\n    constraints: tuple\n    non_goals: tuple\n\n\ndef validate_structure(f):\n    errors = []\n    for name in (\"user\", \"situation\", \"current_behavior\", \"desired_outcome\"):\n        if not str(getattr(f, name)).strip():\n            errors.append(f\"{name} is required\")\n    for name in (\"constraints\", \"non_goals\"):\n        if not getattr(f, name):\n            errors.append(f\"{name} needs at least one entry\")\n    return errors\n\n\ndef leaks_naive(text):\n    t = text.lower()\n    return [s for s in SOLUTION_TERMS if s in t]\n\n\ndef leaks_words(text):\n    t = text.lower()\n    return [s for s in SOLUTION_TERMS if re.search(r\"\\b\" + re.escape(s) + r\"\\b\", t)]\n\n\ndef validate_leakage(f):\n    return {\"desired_outcome\": leaks_words(f.desired_outcome), \"current_behavior\": leaks_words(f.current_behavior)}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "oc_1.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() compares two outputs with two outcomes, validates a good and an empty frame, compares substring and word matching, names PostgreSQL as a constraint and tries wording that hides a solution.",
    "descKn": "main() ಎರಡು ಔಟ್‌ಪುಟ್ ಮತ್ತು ಎರಡು ಫಲಿತಾಂಶ ಹೋಲಿಸಿ, ಒಳ್ಳೆಯ ಮತ್ತು ಖಾಲಿ ಚೌಕಟ್ಟು ಮಾನ್ಯಗೊಳಿಸಿ, ಉಪಸ್ಟ್ರಿಂಗ್ ಮತ್ತು ಪದ ಹೊಂದಾಣಿಕೆ ಹೋಲಿಸಿ, PostgreSQL ಅನ್ನು ನಿರ್ಬಂಧವಾಗಿ ಹೆಸರಿಸಿ ಮತ್ತು ಪರಿಹಾರ ಮರೆಮಾಡುವ ಪದಗಳನ್ನು ಪ್ರಯತ್ನಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: output versus outcome\")\n    for out, outcome in ((\"Build an AI incident assistant\", \"Identify the failing service and a safe next action within two minutes\"),\n                         (\"Add an automated code reviewer\", \"High-severity defects are found before merge, with evidence, without write permission\")):\n        print(f\"output : {out}\\noutcome: {outcome}\\n  solution terms in the output : {leaks_words(out)}\\n  solution terms in the outcome: {leaks_words(outcome)}\")\n    print(\"the output names a thing to build and the outcome names a change somebody should see; the word list flagged ai and assistant in the first output and nothing in either outcome, but it also missed the second output because reviewer is not on the list, so the list is a starting point and section 5 shows the same gap again\")\n\n    section(\"2. Genuinely running: a complete frame and structural validation\")\n    print(\"good frame errors:\", validate_structure(GOOD))\n    empty = OutcomeFrame(\"\", \"a production alert has arrived\", \"slow\", \" \", (), ())\n    print(\"incomplete frame errors:\", validate_structure(empty))\n    print(\"six fields are required before a frame is accepted, and the two list fields need at least one entry; the check is structural, so it says the fields exist and nothing about whether they are good\")\n\n    section(\"3. Genuinely measuring: solution leakage with a substring check and a word check\")\n    leaky = OutcomeFrame(\"on-call engineer\", \"an alert arrives\", \"manual\", \"Build an AI-powered incident dashboard\", (\"read-only\",), (\"remediation\",))\n    print(\"leaky desired_outcome (words):\", validate_leakage(leaky))\n    for text in (\"Engineers maintain a balanced email rotation\", \"Analysts retrain the model of demand each week\", \"Engineers can paraphrase the failing service quickly\"):\n        print(f\"{text[:52]:54} substring={leaks_naive(text)} words={leaks_words(text)}\")\n    print(\"the substring check reported ai inside maintain, balanced, email and paraphrase, which are not solutions, while the word-boundary check did not; the second row shows a limit of the word check too, since model there is a legitimate noun and is still flagged, so a flag is a prompt for a person to look and not a verdict\")\n\n    section(\"4. Genuinely running: a technology name that is a real constraint\")\n    with_constraint = OutcomeFrame(\"billing analyst\", \"month-end close\", \"exports are copied by hand\", \"reconcile the ledger export within one hour\", (\"must use the existing PostgreSQL database and its audit table\", \"read-only\"), (\"new reports\",))\n    print(\"leakage in desired outcome:\", validate_leakage(with_constraint)[\"desired_outcome\"], \"| technology named in constraints:\", [c for c in with_constraint.constraints if \"postgresql\" in c.lower()])\n    print(\"naming PostgreSQL as a constraint is legitimate because the organisation really is bound to it, and it did not trip the check because only the desired outcome and the current behaviour are scanned; where the technology appears matters more than that it appears\")\n\n    section(\"5. Genuinely measuring: wording that hides a solution from the word list\")\n    for text in (\"Engineers get a smart helper that watches the alerts\", \"Engineers get a conversational tool that answers on-call questions\", \"Identify the failing service within two minutes\"):\n        print(f\"{text[:60]:62} flagged={leaks_words(text)}\")\n    print(\"the first two phrases still describe a thing to build and the list did not flag them, while the third is a real outcome; this is a false negative, and the word list cannot be made complete, so the review step has to ask what change a user would see and not just what words are present\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: output versus outcome ---\noutput : Build an AI incident assistant\noutcome: Identify the failing service and a safe next action within two minutes\n  solution terms in the output : ['ai', 'assistant']\n  solution terms in the outcome: []\noutput : Add an automated code reviewer\noutcome: High-severity defects are found before merge, with evidence, without write permission\n  solution terms in the output : []\n  solution terms in the outcome: []\nthe output names a thing to build and the outcome names a change somebody should see; the word list flagged ai and assistant in the first output and nothing in either outcome, but it also missed the second output because reviewer is not on the list, so the list is a starting point and section 5 shows the same gap again\n\n--- 2. Genuinely running: a complete frame and structural validation ---\ngood frame errors: []\nincomplete frame errors: ['user is required', 'desired_outcome is required', 'constraints needs at least one entry', 'non_goals needs at least one entry']\nsix fields are required before a frame is accepted, and the two list fields need at least one entry; the check is structural, so it says the fields exist and nothing about whether they are good\n\n--- 3. Genuinely measuring: solution leakage with a substring check and a word check ---\nleaky desired_outcome (words): {'desired_outcome': ['ai', 'dashboard'], 'current_behavior': []}\nEngineers maintain a balanced email rotation           substring=['ai'] words=[]\nAnalysts retrain the model of demand each week         substring=['ai', 'model'] words=['model']\nEngineers can paraphrase the failing service quickly   substring=['ai'] words=[]\nthe substring check reported ai inside maintain, balanced, email and paraphrase, which are not solutions, while the word-boundary check did not; the second row shows a limit of the word check too, since model there is a legitimate noun and is still flagged, so a flag is a prompt for a person to look and not a verdict\n\n--- 4. Genuinely running: a technology name that is a real constraint ---\nleakage in desired outcome: [] | technology named in constraints: ['must use the existing PostgreSQL database and its audit table']\nnaming PostgreSQL as a constraint is legitimate because the organisation really is bound to it, and it did not trip the check because only the desired outcome and the current behaviour are scanned; where the technology appears matters more than that it appears\n\n--- 5. Genuinely measuring: wording that hides a solution from the word list ---\nEngineers get a smart helper that watches the alerts           flagged=[]\nEngineers get a conversational tool that answers on-call que   flagged=[]\nIdentify the failing service within two minutes                flagged=[]\nthe first two phrases still describe a thing to build and the list did not flag them, while the third is a real outcome; this is a false negative, and the word list cannot be made complete, so the review step has to ask what change a user would see and not just what words are present"
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
    "headingEn": "Experiment 1: Output versus outcome",
    "headingKn": "ಪ್ರಯೋಗ 1: Output versus outcome",
    "bodyEn": "What it ran: Output versus outcome. What the lab concluded: the output names a thing to build and the outcome names a change somebody should see; the word list flagged ai and assistant in the first output and nothing in either outcome, but it also missed the second output because reviewer is not on the list, so the list is a starting point and section 5 shows the same gap again",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Output versus outcome. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the output names a thing to build and the outcome names a change somebody should see; the word list flagged ai and assistant in the first output and nothing in either outcome, but it also missed the second output because reviewer is not on the list, so the list is a starting point and section 5 shows the same gap again"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: output versus outcome ---\noutput : Build an AI incident assistant\noutcome: Identify the failing service and a safe next action within two minutes\n  solution terms in the output : ['ai', 'assistant']\n  solution terms in the outcome: []\noutput : Add an automated code reviewer\noutcome: High-severity defects are found before merge, with evidence, without write permission\n  solution terms in the output : []\n  solution terms in the outcome: []"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: A complete frame and structural validation",
    "headingKn": "ಪ್ರಯೋಗ 2: A complete frame and structural validation",
    "bodyEn": "What it ran: A complete frame and structural validation. What the lab concluded: six fields are required before a frame is accepted, and the two list fields need at least one entry; the check is structural, so it says the fields exist and nothing about whether they are good",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A complete frame and structural validation. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): six fields are required before a frame is accepted, and the two list fields need at least one entry; the check is structural, so it says the fields exist and nothing about whether they are good"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: a complete frame and structural validation ---\ngood frame errors: []\nincomplete frame errors: ['user is required', 'desired_outcome is required', 'constraints needs at least one entry', 'non_goals needs at least one entry']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Solution leakage with a substring check and a word check",
    "headingKn": "ಪ್ರಯೋಗ 3: Solution leakage with a substring check and a word check",
    "bodyEn": "What it ran: Solution leakage with a substring check and a word check. What the lab concluded: the substring check reported ai inside maintain, balanced, email and paraphrase, which are not solutions, while the word-boundary check did not; the second row shows a limit of the word check too, since model there is a legitimate noun and is still flagged, so a flag is a prompt for a person to look and not a verdict",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Solution leakage with a substring check and a word check. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the substring check reported ai inside maintain, balanced, email and paraphrase, which are not solutions, while the word-boundary check did not; the second row shows a limit of the word check too, since model there is a legitimate noun and is still flagged, so a flag is a prompt for a person to look and not a verdict"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: solution leakage with a substring check and a word check ---\nleaky desired_outcome (words): {'desired_outcome': ['ai', 'dashboard'], 'current_behavior': []}\nEngineers maintain a balanced email rotation           substring=['ai'] words=[]\nAnalysts retrain the model of demand each week         substring=['ai', 'model'] words=['model']\nEngineers can paraphrase the failing service quickly   substring=['ai'] words=[]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A technology name that is a real constraint",
    "headingKn": "ಪ್ರಯೋಗ 4: A technology name that is a real constraint",
    "bodyEn": "What it ran: A technology name that is a real constraint. What the lab concluded: naming PostgreSQL as a constraint is legitimate because the organisation really is bound to it, and it did not trip the check because only the desired outcome and the current behaviour are scanned; where the technology appears matters more than that it appears",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A technology name that is a real constraint. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): naming PostgreSQL as a constraint is legitimate because the organisation really is bound to it, and it did not trip the check because only the desired outcome and the current behaviour are scanned; where the technology appears matters more than that it appears"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a technology name that is a real constraint ---\nleakage in desired outcome: [] | technology named in constraints: ['must use the existing PostgreSQL database and its audit table']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Wording that hides a solution from the word list",
    "headingKn": "ಪ್ರಯೋಗ 5: Wording that hides a solution from the word list",
    "bodyEn": "What it ran: Wording that hides a solution from the word list. What the lab concluded: the first two phrases still describe a thing to build and the list did not flag them, while the third is a real outcome; this is a false negative, and the word list cannot be made complete, so the review step has to ask what change a user would see and not just what words are present",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Wording that hides a solution from the word list. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the first two phrases still describe a thing to build and the list did not flag them, while the third is a real outcome; this is a false negative, and the word list cannot be made complete, so the review step has to ask what change a user would see and not just what words are present"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely measuring: wording that hides a solution from the word list ---\nEngineers get a smart helper that watches the alerts           flagged=[]\nEngineers get a conversational tool that answers on-call que   flagged=[]\nIdentify the failing service within two minutes                flagged=[]"
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
    "headingEn": "Genuinely Found: The Word List Caught One Output and Missed Another",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪದ ಪಟ್ಟಿ ಒಂದು ಔಟ್‌ಪುಟ್ ಹಿಡಿದು ಇನ್ನೊಂದನ್ನು ತಪ್ಪಿಸಿತು",
    "bodyEn": "Section 1: \"Build an AI incident assistant\" matched ai and assistant, both outcomes matched nothing, and \"Add an automated code reviewer\" matched nothing either because reviewer is not on the list. Section 2: the good frame had no errors and the incomplete one listed four (user, desired_outcome, constraints, non_goals).",
    "bodyKn": "ವಿಭಾಗ 1: \"Build an AI incident assistant\" ai ಮತ್ತು assistant ಹೊಂದಿತು, ಎರಡೂ ಫಲಿತಾಂಶಗಳು ಏನನ್ನೂ ಹೊಂದಲಿಲ್ಲ, ಮತ್ತು \"Add an automated code reviewer\" reviewer ಪಟ್ಟಿಯಲ್ಲಿಲ್ಲದ ಕಾರಣ ಅದೂ ಏನನ್ನೂ ಹೊಂದಲಿಲ್ಲ. ವಿಭಾಗ 2: ಒಳ್ಳೆಯ ಚೌಕಟ್ಟಿಗೆ ದೋಷ ಇರಲಿಲ್ಲ ಮತ್ತು ಅಪೂರ್ಣ ಚೌಕಟ್ಟು ನಾಲ್ಕು (user, desired_outcome, constraints, non_goals) ಪಟ್ಟಿ ಮಾಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: False Positives, a Legitimate Technology Name and False Negatives",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ತಪ್ಪು ಧನಾತ್ಮಕ, ಸರಿಯಾದ ತಂತ್ರಜ್ಞಾನ ಹೆಸರು ಮತ್ತು ತಪ್ಪು ಋಣಾತ್ಮಕ",
    "bodyEn": "Section 3: the substring check found ai inside maintain, balanced, email and paraphrase, the word check did not, and the word check still flagged model in a sentence where it is an ordinary noun. Section 4: PostgreSQL named in a constraint was not flagged because only the outcome and current behaviour are scanned. Section 5: \"a smart helper that watches the alerts\" and \"a conversational tool\" were not flagged, while the real outcome was also unflagged; two of the three were solutions the list could not see.",
    "bodyKn": "ವಿಭಾಗ 3: ಉಪಸ್ಟ್ರಿಂಗ್ ಪರಿಶೀಲನೆ maintain, balanced, email ಮತ್ತು paraphrase ಒಳಗೆ ai ಕಂಡಿತು, ಪದ ಪರಿಶೀಲನೆ ಕಾಣಲಿಲ್ಲ, ಮತ್ತು ಪದ ಪರಿಶೀಲನೆ model ಸಾಮಾನ್ಯ ನಾಮಪದವಾಗಿರುವ ವಾಕ್ಯದಲ್ಲೂ ಅದನ್ನು ಗುರುತಿಸಿತು. ವಿಭಾಗ 4: ನಿರ್ಬಂಧದಲ್ಲಿ ಹೆಸರಿಸಿದ PostgreSQL ಗುರುತಿಸಲ್ಪಡಲಿಲ್ಲ ಏಕೆಂದರೆ ಫಲಿತಾಂಶ ಮತ್ತು ಪ್ರಸ್ತುತ ವರ್ತನೆ ಮಾತ್ರ ಸ್ಕ್ಯಾನ್ ಆಗುತ್ತದೆ. ವಿಭಾಗ 5: \"a smart helper that watches the alerts\" ಮತ್ತು \"a conversational tool\" ಗುರುತಿಸಲ್ಪಡಲಿಲ್ಲ, ನಿಜ ಫಲಿತಾಂಶವೂ ಗುರುತಿಸಲ್ಪಡಲಿಲ್ಲ; ಮೂರರಲ್ಲಿ ಎರಡು ಪಟ್ಟಿಗೆ ಕಾಣದ ಪರಿಹಾರಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "If a solution is fixed before the outcome, the team can deliver every feature and leave the user's problem where it was.",
    "bodyKn": "ಫಲಿತಾಂಶಕ್ಕೆ ಮುನ್ನ ಪರಿಹಾರ ನಿಗದಿಯಾದರೆ ತಂಡ ಪ್ರತಿ ವೈಶಿಷ್ಟ್ಯ ತಲುಪಿಸಿ ಬಳಕೆದಾರರ ಸಮಸ್ಯೆಯನ್ನು ಇದ್ದಲ್ಲೇ ಬಿಡಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a keyword filter finds solution leakage.\" It flagged maintain and missed \"a smart helper\".",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"keyword ಫಿಲ್ಟರ್ ಪರಿಹಾರ ಸೋರಿಕೆ ಕಂಡುಹಿಡಿಯುತ್ತದೆ.\" ಅದು maintain ಗುರುತಿಸಿ \"a smart helper\" ತಪ್ಪಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Output: what the team makes. Outcome: an observable change for a user. Solution leakage: naming the solution inside the outcome. Constraint: a real limit. Non-goal: an explicit exclusion.",
    "bodyKn": "Output: ತಂಡ ಮಾಡುವುದು. Outcome: ಬಳಕೆದಾರರಿಗೆ ವೀಕ್ಷಿಸಬಹುದಾದ ಬದಲಾವಣೆ. Solution leakage: ಫಲಿತಾಂಶದೊಳಗೆ ಪರಿಹಾರ ಹೆಸರಿಸುವುದು. Constraint: ನಿಜ ಮಿತಿ. Non-goal: ಸ್ಪಷ್ಟ ಹೊರಗಿಡುವಿಕೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The outputs named solutions and the outcomes did not. 2) An empty frame listed four errors. 3) Substring matching flagged innocent words. 4) A technology constraint was allowed. 5) Wording like \"smart helper\" slipped through.",
    "bodyKn": "1) ಔಟ್‌ಪುಟ್‌ಗಳು ಪರಿಹಾರ ಹೆಸರಿಸಿದವು, ಫಲಿತಾಂಶಗಳು ಹೆಸರಿಸಲಿಲ್ಲ. 2) ಖಾಲಿ ಚೌಕಟ್ಟು ನಾಲ್ಕು ದೋಷ ಪಟ್ಟಿ ಮಾಡಿತು. 3) ಉಪಸ್ಟ್ರಿಂಗ್ ಹೊಂದಾಣಿಕೆ ನಿರಪರಾಧಿ ಪದಗಳನ್ನು ಗುರುತಿಸಿತು. 4) ತಂತ್ರಜ್ಞಾನ ನಿರ್ಬಂಧ ಅನುಮತಿಸಲಾಯಿತು. 5) \"smart helper\" ತರಹದ ಪದಗಳು ತಪ್ಪಿಸಿಕೊಂಡವು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B oc_1.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B oc_1.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B oc_1.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B oc_1.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which terms did \"Build an AI incident assistant\" match?",
      "qKn": "\"Build an AI incident assistant\" ಯಾವ ಪದಗಳನ್ನು ಹೊಂದಿತು?",
      "opts": [
       "ai and assistant",
       "none",
       "dashboard",
       "model"
      ],
      "optsKn": [
       "ai ಮತ್ತು assistant",
       "ಯಾವುದೂ ಇಲ್ಲ",
       "dashboard",
       "model"
      ],
      "correct": 0
     },
     {
      "q": "How many errors did the incomplete frame list?",
      "qKn": "ಅಪೂರ್ಣ ಚೌಕಟ್ಟು ಎಷ್ಟು ದೋಷ ಪಟ್ಟಿ ಮಾಡಿತು?",
      "opts": [
       "4",
       "1",
       "6",
       "0"
      ],
      "optsKn": [
       "4",
       "1",
       "6",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "Why did the substring check report ai in \"email\"?",
      "qKn": "ಉಪಸ್ಟ್ರಿಂಗ್ ಪರಿಶೀಲನೆ \"email\" ನಲ್ಲಿ ai ಏಕೆ ವರದಿ ಮಾಡಿತು?",
      "opts": [
       "The letters ai appear inside the word",
       "It is an AI word",
       "It was a constraint",
       "It was signed"
      ],
      "optsKn": [
       "ಪದದೊಳಗೆ ai ಅಕ್ಷರಗಳಿವೆ",
       "ಅದು AI ಪದ",
       "ಅದು ನಿರ್ಬಂಧ",
       "ಅದಕ್ಕೆ ಸಹಿ ಇತ್ತು"
      ],
      "correct": 0
     },
     {
      "q": "Why was PostgreSQL in the constraints not flagged?",
      "qKn": "ನಿರ್ಬಂಧಗಳಲ್ಲಿನ PostgreSQL ಏಕೆ ಗುರುತಿಸಲ್ಪಡಲಿಲ್ಲ?",
      "opts": [
       "Only the outcome and current behaviour are scanned",
       "It is not a technology",
       "It was deleted",
       "It matched a non-goal"
      ],
      "optsKn": [
       "ಫಲಿತಾಂಶ ಮತ್ತು ಪ್ರಸ್ತುತ ವರ್ತನೆ ಮಾತ್ರ ಸ್ಕ್ಯಾನ್ ಆಗುತ್ತದೆ",
       "ಅದು ತಂತ್ರಜ್ಞಾನ ಅಲ್ಲ",
       "ಅದನ್ನು ಅಳಿಸಲಾಯಿತು",
       "ಅದು non-goal ಹೊಂದಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What does a false negative mean here?",
      "qKn": "ಇಲ್ಲಿ ತಪ್ಪು ಋಣಾತ್ಮಕ ಎಂದರೇನು?",
      "opts": [
       "A solution described in words the list does not contain",
       "An innocent word flagged",
       "A rejected frame",
       "A signed frame"
      ],
      "optsKn": [
       "ಪಟ್ಟಿಯಲ್ಲಿಲ್ಲದ ಪದಗಳಲ್ಲಿ ವಿವರಿಸಿದ ಪರಿಹಾರ",
       "ಗುರುತಿಸಿದ ನಿರಪರಾಧಿ ಪದ",
       "ತಿರಸ್ಕೃತ ಚೌಕಟ್ಟು",
       "ಸಹಿ ಮಾಡಿದ ಚೌಕಟ್ಟು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
