module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af756e644bb92cc02d9fbc5",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Define the Outcome Before You Choose the Output (Part 2 of 3) — Observability, Invariants and Scope",
 "titleKn": "ಔಟ್‌ಪುಟ್ ಆರಿಸುವ ಮುನ್ನ ಫಲಿತಾಂಶ ವ್ಯಾಖ್ಯಾನಿಸಿ (ಭಾಗ 2 / 3) — ವೀಕ್ಷಣೆ, ಅಚಲ ನಿಯಮಗಳು ಮತ್ತು ವ್ಯಾಪ್ತಿ",
 "desc": "Check that an outcome can be observed, constraints can be enforced and scope stays bounded, and see where keyword rules fail.",
 "descKn": "ಫಲಿತಾಂಶ ವೀಕ್ಷಿಸಬಹುದು, ನಿರ್ಬಂಧ ಜಾರಿಗೊಳಿಸಬಹುದು ಮತ್ತು ವ್ಯಾಪ್ತಿ ಮಿತಿಯಲ್ಲಿರುತ್ತದೆ ಎಂದು ಪರಿಶೀಲಿಸಿ ಮತ್ತು keyword ನಿಯಮ ಎಲ್ಲಿ ವಿಫಲವಾಗುತ್ತದೆ ನೋಡಿ.",
 "objectives": [
  "Score outcome wording.",
  "Check plans against constraints.",
  "Check work against non-goals.",
  "Separate errors from warnings.",
  "Emit a JSON artifact."
 ],
 "objectivesKn": [
  "ಫಲಿತಾಂಶ ಪದಗಳಿಗೆ ಅಂಕ ನೀಡಿ.",
  "ಯೋಜನೆ ನಿರ್ಬಂಧಗಳ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿ.",
  "ಕೆಲಸ non-goals ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿ.",
  "ದೋಷ ಮತ್ತು ಎಚ್ಚರಿಕೆ ಬೇರ್ಪಡಿಸಿ.",
  "JSON ಕಲಾಕೃತಿ ಹೊರಡಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Define the Outcome Before You Choose the Output (Part 2 of 3)",
    "textKn": "ಔಟ್‌ಪುಟ್ ಆರಿಸುವ ಮುನ್ನ ಫಲಿತಾಂಶ ವ್ಯಾಖ್ಯಾನಿಸಿ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: observable outcome wording, constraints as invariants a plan can violate, non-goal scope checks, errors versus warnings and a JSON artifact. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind defining the outcome before choosing the output (outcome frames, solution leakage, observable wording, constraints, evidence and gates), not the real software, and the frames, plans and measurements are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original main.py (phases/14-agent-engineering/47-outcomes-before-output/code/main.py) was not supplied, and the lesson says its code is a teaching implementation, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ವೀಕ್ಷಿಸಬಹುದಾದ ಫಲಿತಾಂಶ ಪದಗಳು, ಯೋಜನೆ ಉಲ್ಲಂಘಿಸಬಹುದಾದ ಅಚಲ ನಿಯಮಗಳಾಗಿ ನಿರ್ಬಂಧಗಳು, non-goal ವ್ಯಾಪ್ತಿ ಪರಿಶೀಲನೆ, ದೋಷಗಳು ಮತ್ತು ಎಚ್ಚರಿಕೆಗಳು ಮತ್ತು JSON ಕಲಾಕೃತಿ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಔಟ್‌ಪುಟ್ ಆರಿಸುವ ಮುನ್ನ ಫಲಿತಾಂಶ ವ್ಯಾಖ್ಯಾನಿಸುವುದು (ಫಲಿತಾಂಶ ಚೌಕಟ್ಟುಗಳು, ಪರಿಹಾರ ಸೋರಿಕೆ, ವೀಕ್ಷಿಸಬಹುದಾದ ಪದಗಳು, ನಿರ್ಬಂಧಗಳು, ಸಾಕ್ಷ್ಯ ಮತ್ತು gates) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಚೌಕಟ್ಟುಗಳು, ಯೋಜನೆಗಳು ಮತ್ತು ಅಳತೆಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ main.py (phases/14-agent-engineering/47-outcomes-before-output/code/main.py) ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ತನ್ನ ಕೋಡ್ ಬೋಧನಾ ಅನುಷ್ಠಾನ ಎಂದು ಹೇಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Frame Can Be Complete and Still Unusable",
    "textKn": "ಚೌಕಟ್ಟು ಸಂಪೂರ್ಣವಾಗಿದ್ದರೂ ಬಳಸಲಾಗದಿರಬಹುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Observable, Enforceable, Bounded",
    "headingKn": "ವೀಕ್ಷಿಸಬಹುದಾದ, ಜಾರಿಗೊಳಿಸಬಹುದಾದ, ಮಿತಿಯುಳ್ಳ",
    "bodyEn": "Part 1 checked that the fields exist. This part checks whether the outcome can be observed, whether constraints can actually be broken by a plan, whether proposed work strays into a non-goal and how a validator should separate errors from warnings. Each check is shown with a case where it is wrong, because the checks are keyword rules.",
    "bodyKn": "ಭಾಗ 1 ಕ್ಷೇತ್ರಗಳು ಇವೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿತು. ಈ ಭಾಗ ಫಲಿತಾಂಶ ವೀಕ್ಷಿಸಬಹುದೇ, ಯೋಜನೆ ನಿರ್ಬಂಧಗಳನ್ನು ನಿಜವಾಗಿ ಮುರಿಯಬಹುದೇ, ಪ್ರಸ್ತಾವಿತ ಕೆಲಸ non-goal ಗೆ ದಾರಿ ತಪ್ಪುತ್ತದೆಯೇ ಮತ್ತು validator ದೋಷ ಮತ್ತು ಎಚ್ಚರಿಕೆ ಹೇಗೆ ಬೇರ್ಪಡಿಸಬೇಕು ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ. ಪ್ರತಿ ಪರಿಶೀಲನೆ keyword ನಿಯಮಗಳಾದ್ದರಿಂದ ಅದು ತಪ್ಪುವ ಸಂದರ್ಭದೊಂದಿಗೆ ತೋರಿಸಲಾಗಿದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Validating a Frame",
    "headingKn": "ಚೌಕಟ್ಟು ಮಾನ್ಯೀಕರಣ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Validate the frame</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">wording</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">number + unit</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">constraints</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">checked on plans</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">non-goals</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">scope check</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">error or warning</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">reject or inform</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">validation is wording plus rules</text></svg>",
    "captionEn": "Wording, constraints and non-goals are each checked.",
    "captionKn": "ಪದಗಳು, ನಿರ್ಬಂಧಗಳು ಮತ್ತು non-goals ಪ್ರತಿಯೊಂದೂ ಪರಿಶೀಲಿತ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Errors and warnings",
    "headingKn": "ದೋಷಗಳು ಮತ್ತು ಎಚ್ಚರಿಕೆಗಳು",
    "headers": [
     "Finding",
     "Kind",
     "Effect"
    ],
    "rows": [
     [
      "empty desired outcome",
      "error",
      "rejected"
     ],
     [
      "no non-goals",
      "error",
      "rejected"
     ],
     [
      "no number and unit",
      "warning",
      "accepted with warnings"
     ],
     [
      "vague word",
      "warning",
      "accepted with warnings"
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
    "filename": "oc_2.py",
    "headingEn": "Observability, invariants, scope and report",
    "headingKn": "ವೀಕ್ಷಣೆ, ಅಚಲ ನಿಯಮಗಳು, ವ್ಯಾಪ್ತಿ ಮತ್ತು ವರದಿ",
    "descEn": "observable looks for a number with a unit and for vague words, check_plan_against_constraints applies keyword rules to plan steps, check_scope compares work text with non-goals and build_report returns accepted, accepted_with_warnings or rejected.",
    "descKn": "observable ಏಕಮಾನದೊಂದಿಗೆ ಸಂಖ್ಯೆ ಮತ್ತು ಅಸ್ಪಷ್ಟ ಪದ ಹುಡುಕುತ್ತದೆ, check_plan_against_constraints ಯೋಜನಾ ಹಂತಗಳಿಗೆ keyword ನಿಯಮ ಅನ್ವಯಿಸುತ್ತದೆ, check_scope ಕೆಲಸದ ಪಠ್ಯವನ್ನು non-goals ಜೊತೆ ಹೋಲಿಸುತ್ತದೆ ಮತ್ತು build_report accepted, accepted_with_warnings ಅಥವಾ rejected ಮರಳಿಸುತ್ತದೆ.",
    "code": "def observable(text):\n    t = text.lower()\n    has_number = bool(re.search(r\"\\b(\\d+(\\.\\d+)?|one|two|three|five|ten)\\b\\s*\" + UNIT, t))\n    vague = [w for w in VAGUE if re.search(r\"\\b\" + w + r\"\\b\", t)]\n    return {\"measurable\": has_number, \"vague_words\": vague}\n\n\ndef check_plan_against_constraints(plan_steps, constraints):\n    violations = []\n    for step in plan_steps:\n        s = step.lower()\n        for c in constraints:\n            if c == \"read-only\" and re.search(r\"\\b(restart|delete|write|modify|deploy|rollback)\\b\", s):\n                violations.append((step, c))\n            if c == \"no new database\" and re.search(r\"\\bnew (database|datastore|vector database)\\b\", s):\n                violations.append((step, c))\n    return violations\n\n\ndef check_scope(work, non_goals):\n    w = work.lower()\n    return [n for n in non_goals if n.lower() in w]\n\n\ndef build_report(frame):\n    errors, warnings = [], []\n    if not frame[\"desired_outcome\"].strip():\n        errors.append(\"desired_outcome is required\")\n    else:\n        o = observable(frame[\"desired_outcome\"])\n        if not o[\"measurable\"]:\n            warnings.append(\"desired_outcome has no number and unit\")\n        if o[\"vague_words\"]:\n            warnings.append(\"vague wording: \" + \", \".join(o[\"vague_words\"]))\n    if not frame[\"non_goals\"]:\n        errors.append(\"non_goals needs at least one entry\")\n    return {\"status\": \"rejected\" if errors else (\"accepted_with_warnings\" if warnings else \"accepted\"), \"errors\": errors, \"warnings\": warnings}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "oc_2.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() scores five outcome sentences, checks a four-step plan, checks three proposals against non-goals, builds four reports and round-trips an artifact.",
    "descKn": "main() ಐದು ಫಲಿತಾಂಶ ವಾಕ್ಯ ಅಂಕ ನೀಡಿ, ನಾಲ್ಕು-ಹಂತ ಯೋಜನೆ ಪರಿಶೀಲಿಸಿ, ಮೂರು ಪ್ರಸ್ತಾವ non-goals ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿ, ನಾಲ್ಕು ವರದಿ ನಿರ್ಮಿಸಿ ಮತ್ತು ಕಲಾಕೃತಿ round-trip ಮಾಡುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely measuring: can the outcome be observed\")\n    for t in (\"Improve engineering productivity\", \"Make triage faster and easier\", \"Identify the failing service within two minutes\", \"Cut unsuccessful searches by 30 percent\", \"Patients find an appointment without calling reception\"):\n        print(f\"{t:56} {observable(t)}\")\n    print(\"the first two have no number and use vague words, the next two carry a number and a unit, and the last is a real outcome that the check marks as not measurable because it has no number and unit; the check looks at wording and cannot tell whether a count is the right measure, so a human still decides\")\n\n    section(\"2. Genuinely running: constraints as invariants a plan can break\")\n    plan = [\"Read the alert and the matching runbook\", \"Restart the failing service automatically\", \"Show the owner and the last deploy\", \"Create a new vector database of past incidents\"]\n    for step, c in check_plan_against_constraints(plan, [\"read-only\", \"no new database\"]):\n        print(f\"violates {c!r:18}: {step}\")\n    print(\"three steps were flagged: restart really breaks read-only and the new vector database really breaks no-new-database, but Show the owner and the last deploy is read-only and was flagged because the word deploy is on the keyword list, which is a false positive; and a constraint written as a sentence in a document is not checked by anything, while the same words as a rule over plan steps are, even if the rule is crude, since a step phrased as bounce the service passes it, shown next\")\n    print(\"a step worded differently:\", check_plan_against_constraints([\"Bounce the failing service\"], [\"read-only\"]))\n\n    section(\"3. Genuinely running: non-goals stop scope growing\")\n    ng = [\"automatic remediation\", \"new alert routing\", \"historical analytics\"]\n    for w in (\"Add historical analytics for alert volume\", \"Show the owner of the failing service\", \"Build automatic remediation for disk-full alerts\"):\n        print(f\"{w:52} hits non-goals: {check_scope(w, ng)}\")\n    print(\"proposed work that names an excluded item is caught by comparing text against the non-goals, which is why they have to be written as specific phrases and not as 'anything extra'\")\n\n    section(\"4. Genuinely running: errors reject, warnings inform\")\n    for label, fr in ((\"clear frame\", {\"desired_outcome\": \"Identify the failing service within two minutes\", \"non_goals\": [\"remediation\"]}), (\"vague frame\", {\"desired_outcome\": \"Improve triage\", \"non_goals\": [\"remediation\"]}),\n                      (\"no non-goals\", {\"desired_outcome\": \"Identify the failing service within two minutes\", \"non_goals\": []}), (\"empty outcome\", {\"desired_outcome\": \"\", \"non_goals\": [\"x\"]})):\n        print(f\"{label:14} {build_report(fr)}\")\n    print(\"a missing required piece is an error and stops the frame, while vague wording is only a warning because a team may have a reason to proceed; separating the two keeps the report useful without making every comment a blocker\")\n\n    section(\"5. Genuinely running: the artifact round-trips through JSON\")\n    frame = {\"user\": \"on-call engineer\", \"desired_outcome\": \"Identify the failing service within two minutes\", \"constraints\": [\"read-only\"], \"non_goals\": [\"remediation\"]}\n    text = json.dumps({\"frame\": frame, \"report\": build_report(frame)}, indent=2, sort_keys=True)\n    back = json.loads(text)\n    print(\"lines in artifact:\", len(text.splitlines()), \"| round trip equal:\", back[\"frame\"] == frame, \"| status:\", back[\"report\"][\"status\"])\n    print(\"the artifact keeps the frame and its validation report together so a later planning stage reads the same fields the validator checked; the file here is built in memory and not written to disk\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely measuring: can the outcome be observed ---\nImprove engineering productivity                         {'measurable': False, 'vague_words': ['improve']}\nMake triage faster and easier                            {'measurable': False, 'vague_words': ['faster', 'easier']}\nIdentify the failing service within two minutes          {'measurable': True, 'vague_words': []}\nCut unsuccessful searches by 30 percent                  {'measurable': True, 'vague_words': []}\nPatients find an appointment without calling reception   {'measurable': False, 'vague_words': []}\nthe first two have no number and use vague words, the next two carry a number and a unit, and the last is a real outcome that the check marks as not measurable because it has no number and unit; the check looks at wording and cannot tell whether a count is the right measure, so a human still decides\n\n--- 2. Genuinely running: constraints as invariants a plan can break ---\nviolates 'read-only'       : Restart the failing service automatically\nviolates 'read-only'       : Show the owner and the last deploy\nviolates 'no new database' : Create a new vector database of past incidents\nthree steps were flagged: restart really breaks read-only and the new vector database really breaks no-new-database, but Show the owner and the last deploy is read-only and was flagged because the word deploy is on the keyword list, which is a false positive; and a constraint written as a sentence in a document is not checked by anything, while the same words as a rule over plan steps are, even if the rule is crude, since a step phrased as bounce the service passes it, shown next\na step worded differently: []\n\n--- 3. Genuinely running: non-goals stop scope growing ---\nAdd historical analytics for alert volume            hits non-goals: ['historical analytics']\nShow the owner of the failing service                hits non-goals: []\nBuild automatic remediation for disk-full alerts     hits non-goals: ['automatic remediation']\nproposed work that names an excluded item is caught by comparing text against the non-goals, which is why they have to be written as specific phrases and not as 'anything extra'\n\n--- 4. Genuinely running: errors reject, warnings inform ---\nclear frame    {'status': 'accepted', 'errors': [], 'warnings': []}\nvague frame    {'status': 'accepted_with_warnings', 'errors': [], 'warnings': ['desired_outcome has no number and unit', 'vague wording: improve']}\nno non-goals   {'status': 'rejected', 'errors': ['non_goals needs at least one entry'], 'warnings': []}\nempty outcome  {'status': 'rejected', 'errors': ['desired_outcome is required'], 'warnings': []}\na missing required piece is an error and stops the frame, while vague wording is only a warning because a team may have a reason to proceed; separating the two keeps the report useful without making every comment a blocker\n\n--- 5. Genuinely running: the artifact round-trips through JSON ---\nlines in artifact: 17 | round trip equal: True | status: accepted\nthe artifact keeps the frame and its validation report together so a later planning stage reads the same fields the validator checked; the file here is built in memory and not written to disk"
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
    "headingEn": "Genuinely Found: Measurable Wording and the Constraint Rule That Over- and Under-Fired",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅಳೆಯಬಹುದಾದ ಪದಗಳು ಮತ್ತು ಹೆಚ್ಚು ಮತ್ತು ಕಡಿಮೆ ಗುರುತಿಸಿದ ನಿರ್ಬಂಧ ನಿಯಮ",
    "bodyEn": "Section 1: \"within two minutes\" and \"30 percent\" were measurable, \"Improve engineering productivity\" and \"faster and easier\" were not and carried vague words, and \"Patients find an appointment without calling reception\" was also marked not measurable. Section 2: three of four plan steps were flagged; restart and the new vector database were real violations, \"Show the owner and the last deploy\" was a false positive because deploy is a keyword, and \"Bounce the failing service\" passed the read-only rule.",
    "bodyKn": "ವಿಭಾಗ 1: \"within two minutes\" ಮತ್ತು \"30 percent\" ಅಳೆಯಬಹುದಾದವು, \"Improve engineering productivity\" ಮತ್ತು \"faster and easier\" ಅಲ್ಲ ಮತ್ತು ಅಸ್ಪಷ್ಟ ಪದ ಹೊಂದಿದ್ದವು, ಮತ್ತು \"Patients find an appointment without calling reception\" ಸಹ ಅಳೆಯಲಾಗದು ಎಂದು ಗುರುತಾಯಿತು. ವಿಭಾಗ 2: ನಾಲ್ಕರಲ್ಲಿ ಮೂರು ಯೋಜನಾ ಹಂತ ಗುರುತಾದವು; restart ಮತ್ತು ಹೊಸ vector database ನಿಜ ಉಲ್ಲಂಘನೆ, \"Show the owner and the last deploy\" ತಪ್ಪು ಧನಾತ್ಮಕ ಏಕೆಂದರೆ deploy keyword, ಮತ್ತು \"Bounce the failing service\" read-only ನಿಯಮ ಪಾಸ್ ಆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Non-Goals, Errors Versus Warnings and the Artifact",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Non-Goals, ದೋಷ ವಿರುದ್ಧ ಎಚ್ಚರಿಕೆ ಮತ್ತು ಕಲಾಕೃತಿ",
    "bodyEn": "Section 3: the analytics and remediation proposals hit non-goals and \"Show the owner of the failing service\" did not. Section 4: the clear frame was accepted, \"Improve triage\" was accepted with two warnings, no non-goals and an empty outcome were rejected. Section 5: the 17-line artifact round-tripped equal in memory.",
    "bodyKn": "ವಿಭಾಗ 3: analytics ಮತ್ತು remediation ಪ್ರಸ್ತಾವಗಳು non-goals ತಲುಪಿದವು ಮತ್ತು \"Show the owner of the failing service\" ತಲುಪಲಿಲ್ಲ. ವಿಭಾಗ 4: ಸ್ಪಷ್ಟ ಚೌಕಟ್ಟು ಸ್ವೀಕೃತ, \"Improve triage\" ಎರಡು ಎಚ್ಚರಿಕೆಗಳೊಂದಿಗೆ ಸ್ವೀಕೃತ, non-goals ಇಲ್ಲ ಮತ್ತು ಖಾಲಿ ಫಲಿತಾಂಶ ತಿರಸ್ಕೃತ. ವಿಭಾಗ 5: 17-ಸಾಲಿನ ಕಲಾಕೃತಿ ಮೆಮೊರಿಯಲ್ಲಿ ಸಮಾನವಾಗಿ round-trip ಆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A rule over plan steps is checked where a sentence in a document is not, and a report that separates errors from warnings keeps useful comments from becoming blockers.",
    "bodyKn": "ಯೋಜನಾ ಹಂತಗಳ ಮೇಲಿನ ನಿಯಮ ಪರಿಶೀಲಿಸಲ್ಪಡುತ್ತದೆ, ದಾಖಲೆಯ ವಾಕ್ಯ ಅಲ್ಲ, ಮತ್ತು ದೋಷ ಮತ್ತು ಎಚ್ಚರಿಕೆ ಬೇರ್ಪಡಿಸುವ ವರದಿ ಉಪಯುಕ್ತ ಟಿಪ್ಪಣಿಗಳು ತಡೆ ಆಗದಂತೆ ಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a constraint in the document is enforced.\" Only the rule over plan steps flagged anything, and it flagged a harmless step.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ದಾಖಲೆಯ ನಿರ್ಬಂಧ ಜಾರಿಯಾಗುತ್ತದೆ.\" ಯೋಜನಾ ಹಂತಗಳ ನಿಯಮ ಮಾತ್ರ ಏನನ್ನಾದರೂ ಗುರುತಿಸಿತು, ಮತ್ತು ಅದು ನಿರುಪದ್ರವಿ ಹಂತ ಗುರುತಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Observable: stated with a number and unit. Invariant: a rule a plan must not break. Non-goal: an excluded item. Error: stops the frame. Warning: informs.",
    "bodyKn": "Observable: ಸಂಖ್ಯೆ ಮತ್ತು ಏಕಮಾನದೊಂದಿಗೆ ಹೇಳಿದ್ದು. Invariant: ಯೋಜನೆ ಮುರಿಯಬಾರದ ನಿಯಮ. Non-goal: ಹೊರಗಿಟ್ಟ ವಿಷಯ. Error: ಚೌಕಟ್ಟು ನಿಲ್ಲಿಸುತ್ತದೆ. Warning: ತಿಳಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Number and unit made wording measurable. 2) The constraint rule had one false positive and one miss. 3) Non-goals were caught by phrase. 4) Warnings did not reject. 5) The artifact round-tripped.",
    "bodyKn": "1) ಸಂಖ್ಯೆ ಮತ್ತು ಏಕಮಾನ ಪದಗಳನ್ನು ಅಳೆಯಬಹುದಾಗಿಸಿದವು. 2) ನಿರ್ಬಂಧ ನಿಯಮಕ್ಕೆ ಒಂದು ತಪ್ಪು ಧನಾತ್ಮಕ ಮತ್ತು ಒಂದು ತಪ್ಪಿಸಿಕೊಳ್ಳುವಿಕೆ. 3) Non-goals ಪದಗುಚ್ಛದಿಂದ ಹಿಡಿಯಲ್ಪಟ್ಟವು. 4) ಎಚ್ಚರಿಕೆಗಳು ತಿರಸ್ಕರಿಸಲಿಲ್ಲ. 5) ಕಲಾಕೃತಿ round-trip ಆಯಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which step was a false positive for the read-only rule?",
      "qKn": "read-only ನಿಯಮಕ್ಕೆ ಯಾವ ಹಂತ ತಪ್ಪು ಧನಾತ್ಮಕ?",
      "opts": [
       "Show the owner and the last deploy",
       "Restart the failing service automatically",
       "Create a new vector database",
       "Bounce the failing service"
      ],
      "optsKn": [
       "ಮಾಲೀಕ ಮತ್ತು ಕೊನೆಯ deploy ತೋರಿಸಿ",
       "ವಿಫಲ ಸೇವೆಯನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ restart ಮಾಡಿ",
       "ಹೊಸ vector database ರಚಿಸಿ",
       "ವಿಫಲ ಸೇವೆಯನ್ನು bounce ಮಾಡಿ"
      ],
      "correct": 0
     },
     {
      "q": "Which step passed the read-only rule although it changes the service?",
      "qKn": "ಸೇವೆ ಬದಲಿಸಿದರೂ read-only ನಿಯಮ ಪಾಸ್ ಆದ ಹಂತ ಯಾವುದು?",
      "opts": [
       "Bounce the failing service",
       "Restart the failing service automatically",
       "Show the owner",
       "None"
      ],
      "optsKn": [
       "ವಿಫಲ ಸೇವೆಯನ್ನು bounce ಮಾಡಿ",
       "ವಿಫಲ ಸೇವೆಯನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ restart ಮಾಡಿ",
       "ಮಾಲೀಕ ತೋರಿಸಿ",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What status did \"Improve triage\" get?",
      "qKn": "\"Improve triage\" ಗೆ ಯಾವ ಸ್ಥಿತಿ ಸಿಕ್ಕಿತು?",
      "opts": [
       "accepted_with_warnings",
       "rejected",
       "accepted",
       "blocked"
      ],
      "optsKn": [
       "accepted_with_warnings",
       "rejected",
       "accepted",
       "blocked"
      ],
      "correct": 0
     },
     {
      "q": "Why is an empty non_goals list an error?",
      "qKn": "ಖಾಲಿ non_goals ಪಟ್ಟಿ ಏಕೆ ದೋಷ?",
      "opts": [
       "Scope has nothing to be checked against",
       "It is slow",
       "It is unsigned",
       "It is too long"
      ],
      "optsKn": [
       "ವ್ಯಾಪ್ತಿ ಪರಿಶೀಲಿಸಲು ಏನೂ ಇಲ್ಲ",
       "ಅದು ನಿಧಾನ",
       "ಅದು ಸಹಿ ಇಲ್ಲದ್ದು",
       "ಅದು ತುಂಬಾ ಉದ್ದ"
      ],
      "correct": 0
     },
     {
      "q": "Was the artifact written to disk in the lab?",
      "qKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಕಲಾಕೃತಿ ಡಿಸ್ಕ್‌ಗೆ ಬರೆಯಲ್ಪಟ್ಟಿತೇ?",
      "opts": [
       "No, it was built in memory",
       "Yes",
       "Only on Windows",
       "Only signed"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಮೆಮೊರಿಯಲ್ಲಿ ನಿರ್ಮಿಸಲಾಯಿತು",
       "ಹೌದು",
       "Windows ನಲ್ಲಿ ಮಾತ್ರ",
       "ಸಹಿ ಮಾಡಿದ್ದು ಮಾತ್ರ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
