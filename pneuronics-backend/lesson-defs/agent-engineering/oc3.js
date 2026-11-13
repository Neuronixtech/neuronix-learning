module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af756e644bb92cc02d9fbc5",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Define the Outcome Before You Choose the Output (Part 3 of 3) — Evidence, Gates and Revision",
 "titleKn": "ಔಟ್‌ಪುಟ್ ಆರಿಸುವ ಮುನ್ನ ಫಲಿತಾಂಶ ವ್ಯಾಖ್ಯಾನಿಸಿ (ಭಾಗ 3 / 3) — ಸಾಕ್ಷ್ಯ, Gates ಮತ್ತು ಪರಿಷ್ಕರಣೆ",
 "desc": "Fix the evidence first, gate on measured outcomes and see why green tests alone are not enough.",
 "descKn": "ಮೊದಲು ಸಾಕ್ಷ್ಯ ನಿಗದಿಪಡಿಸಿ, ಅಳೆದ ಫಲಿತಾಂಶದ ಮೇಲೆ gate ಮಾಡಿ ಮತ್ತು ಹಸಿರು ಪರೀಕ್ಷೆಗಳು ಮಾತ್ರ ಏಕೆ ಸಾಲದು ನೋಡಿ.",
 "objectives": [
  "Fix evidence before building.",
  "Measure against a baseline.",
  "Gate on three conditions.",
  "Separate builder and reviewer.",
  "Revise targets with evidence."
 ],
 "objectivesKn": [
  "ನಿರ್ಮಿಸುವ ಮುನ್ನ ಸಾಕ್ಷ್ಯ ನಿಗದಿಪಡಿಸಿ.",
  "baseline ವಿರುದ್ಧ ಅಳೆಯಿರಿ.",
  "ಮೂರು ಷರತ್ತುಗಳ ಮೇಲೆ gate ಮಾಡಿ.",
  "builder ಮತ್ತು reviewer ಬೇರ್ಪಡಿಸಿ.",
  "ಸಾಕ್ಷ್ಯದೊಂದಿಗೆ ಗುರಿ ಪರಿಷ್ಕರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Define the Outcome Before You Choose the Output (Part 3 of 3)",
    "textKn": "ಔಟ್‌ಪುಟ್ ಆರಿಸುವ ಮುನ್ನ ಫಲಿತಾಂಶ ವ್ಯಾಖ್ಯಾನಿಸಿ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: acceptance evidence fixed before building, a gate separating built-correctly from right-problem, measuring against a baseline, independent review, approvals and when a target may change. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind defining the outcome before choosing the output (outcome frames, solution leakage, observable wording, constraints, evidence and gates), not the real software, and the frames, plans and measurements are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original main.py (phases/14-agent-engineering/47-outcomes-before-output/code/main.py) was not supplied, and the lesson says its code is a teaching implementation, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ನಿರ್ಮಿಸುವ ಮುನ್ನ ನಿಗದಿಪಡಿಸಿದ ಸ್ವೀಕಾರ ಸಾಕ್ಷ್ಯ, ಸರಿಯಾಗಿ ನಿರ್ಮಿಸಿದ್ದು ಮತ್ತು ಸರಿಯಾದ ಸಮಸ್ಯೆ ಬೇರ್ಪಡಿಸುವ gate, baseline ವಿರುದ್ಧ ಅಳತೆ, ಸ್ವತಂತ್ರ ವಿಮರ್ಶೆ, ಅನುಮೋದನೆಗಳು ಮತ್ತು ಗುರಿ ಯಾವಾಗ ಬದಲಾಗಬಹುದು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಔಟ್‌ಪುಟ್ ಆರಿಸುವ ಮುನ್ನ ಫಲಿತಾಂಶ ವ್ಯಾಖ್ಯಾನಿಸುವುದು (ಫಲಿತಾಂಶ ಚೌಕಟ್ಟುಗಳು, ಪರಿಹಾರ ಸೋರಿಕೆ, ವೀಕ್ಷಿಸಬಹುದಾದ ಪದಗಳು, ನಿರ್ಬಂಧಗಳು, ಸಾಕ್ಷ್ಯ ಮತ್ತು gates) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಚೌಕಟ್ಟುಗಳು, ಯೋಜನೆಗಳು ಮತ್ತು ಅಳತೆಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ main.py (phases/14-agent-engineering/47-outcomes-before-output/code/main.py) ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ತನ್ನ ಕೋಡ್ ಬೋಧನಾ ಅನುಷ್ಠಾನ ಎಂದು ಹೇಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Green Tests Do Not Show the Problem Is Solved",
    "textKn": "ಹಸಿರು ಪರೀಕ್ಷೆಗಳು ಸಮಸ್ಯೆ ಪರಿಹಾರವಾಗಿದೆ ಎಂದು ತೋರಿಸುವುದಿಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Evidence First, Gate Last",
    "headingKn": "ಮೊದಲು ಸಾಕ್ಷ್ಯ, ಕೊನೆಗೆ Gate",
    "bodyEn": "This part connects the frame to the rest of the work. The metric, baseline, target and sample size are fixed before building, a gate blocks on tests, constraints and a measured outcome together, the same green tests are shown with a missed and a met target, and the builder, reviewer, approval and target-revision rules are tried. All numbers are invented for the lab.",
    "bodyKn": "ಈ ಭಾಗ ಚೌಕಟ್ಟನ್ನು ಉಳಿದ ಕೆಲಸಕ್ಕೆ ಜೋಡಿಸುತ್ತದೆ. ಮಾಪನ, baseline, ಗುರಿ ಮತ್ತು ಮಾದರಿ ಗಾತ್ರ ನಿರ್ಮಿಸುವ ಮುನ್ನ ನಿಗದಿಯಾಗುತ್ತವೆ, gate ಪರೀಕ್ಷೆ, ನಿರ್ಬಂಧ ಮತ್ತು ಅಳೆದ ಫಲಿತಾಂಶ ಒಟ್ಟಿಗೆ ತಡೆಯುತ್ತದೆ, ಅದೇ ಹಸಿರು ಪರೀಕ್ಷೆಗಳನ್ನು ತಪ್ಪಿದ ಮತ್ತು ಸಾಧಿಸಿದ ಗುರಿಯೊಂದಿಗೆ ತೋರಿಸಲಾಗಿದೆ, ಮತ್ತು builder, reviewer, ಅನುಮೋದನೆ ಮತ್ತು ಗುರಿ-ಪರಿಷ್ಕರಣೆ ನಿಯಮಗಳನ್ನು ಪ್ರಯತ್ನಿಸಲಾಗಿದೆ. ಎಲ್ಲಾ ಸಂಖ್ಯೆಗಳು ಲ್ಯಾಬ್‌ಗಾಗಿ ಕಲ್ಪಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "A Gate on the Outcome",
    "headingKn": "ಫಲಿತಾಂಶದ ಮೇಲಿನ Gate",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Gate on the outcome</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">tests</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">built correctly</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">constraints</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">still held</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">measured outcome</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">vs target</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">gate</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">all three</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">green tests are one condition among three</text></svg>",
    "captionEn": "Passing needs tests, constraints and a measured outcome.",
    "captionKn": "ಪಾಸ್ ಆಗಲು ಪರೀಕ್ಷೆ, ನಿರ್ಬಂಧ ಮತ್ತು ಅಳೆದ ಫಲಿತಾಂಶ ಬೇಕು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Gate inputs",
    "headingKn": "Gate ಒಳಹರಿವುಗಳು",
    "headers": [
     "Input",
     "Blocks when",
     "Lab reason text"
    ],
    "rows": [
     [
      "tests",
      "failing",
      "tests failing"
     ],
     [
      "constraints",
      "violated",
      "constraint violated"
     ],
     [
      "outcome",
      "too few samples",
      "outcome not measured"
     ],
     [
      "outcome",
      "median above target",
      "outcome target not met"
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
    "filename": "oc_3.py",
    "headingEn": "Evidence, measurement, gate and revision rules",
    "headingKn": "ಸಾಕ್ಷ್ಯ, ಅಳತೆ, gate ಮತ್ತು ಪರಿಷ್ಕರಣೆ ನಿಯಮಗಳು",
    "descEn": "make_evidence fixes the metric, baseline, target and sample minimum, measure returns insufficient_data, met or not_met from the median, gate collects every reason and may_revise_target requires evidence and an approver.",
    "descKn": "make_evidence ಮಾಪನ, baseline, ಗುರಿ ಮತ್ತು ಕನಿಷ್ಠ ಮಾದರಿ ನಿಗದಿಪಡಿಸುತ್ತದೆ, measure median ನಿಂದ insufficient_data, met ಅಥವಾ not_met ಮರಳಿಸುತ್ತದೆ, gate ಪ್ರತಿ ಕಾರಣ ಸಂಗ್ರಹಿಸುತ್ತದೆ ಮತ್ತು may_revise_target ಸಾಕ್ಷ್ಯ ಮತ್ತು ಅನುಮೋದಕ ಬಯಸುತ್ತದೆ.",
    "code": "def make_evidence(metric, baseline, target, sample_min):\n    return {\"metric\": metric, \"baseline\": baseline, \"target\": target, \"sample_min\": sample_min}\n\n\ndef measure(samples, ev):\n    if len(samples) < ev[\"sample_min\"]:\n        return {\"status\": \"insufficient_data\", \"n\": len(samples)}\n    med = statistics.median(samples)\n    return {\"status\": \"met\" if med <= ev[\"target\"] else \"not_met\", \"n\": len(samples), \"median\": med, \"baseline\": ev[\"baseline\"]}\n\n\ndef gate(tests_pass, constraints_ok, outcome):\n    reasons = []\n    if not tests_pass:\n        reasons.append(\"tests failing\")\n    if not constraints_ok:\n        reasons.append(\"constraint violated\")\n    if outcome[\"status\"] == \"insufficient_data\":\n        reasons.append(\"outcome not measured\")\n    elif outcome[\"status\"] == \"not_met\":\n        reasons.append(\"outcome target not met\")\n    return (\"PASS\" if not reasons else \"BLOCK\"), reasons\n\n\ndef review(builder, reviewer):\n    return \"independent\" if builder != reviewer else \"not independent\"\n\n\ndef approval_needed(action):\n    return action in {\"change_alert_routing\", \"enable_auto_remediation\", \"write_production_data\"}\n\n\ndef may_revise_target(old_target, new_target, evidence_note, approver):\n    if not evidence_note or not approver:\n        return False, \"a revision needs evidence and an approver\"\n    if new_target > old_target and \"baseline\" not in evidence_note:\n        return False, \"loosening the target must cite the baseline\"\n    return True, \"revision recorded\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "oc_3.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() fixes evidence, gates a build that missed the target and one that met it, blocks on too few samples, mixes constraint and test failures, then tries review, approval and revision rules.",
    "descKn": "main() ಸಾಕ್ಷ್ಯ ನಿಗದಿಪಡಿಸಿ, ಗುರಿ ತಪ್ಪಿದ ಮತ್ತು ಸಾಧಿಸಿದ ನಿರ್ಮಾಣವನ್ನು gate ಮಾಡಿ, ಕಡಿಮೆ ಮಾದರಿಗಳಲ್ಲಿ ತಡೆದು, ನಿರ್ಬಂಧ ಮತ್ತು ಪರೀಕ್ಷೆ ವೈಫಲ್ಯ ಮಿಶ್ರಣ ಮಾಡಿ, ನಂತರ ವಿಮರ್ಶೆ, ಅನುಮೋದನೆ ಮತ್ತು ಪರಿಷ್ಕರಣೆ ನಿಯಮ ಪ್ರಯತ್ನಿಸುತ್ತದೆ.",
    "code": "def main():\n    ev = make_evidence(\"minutes to identify the failing service\", baseline=12, target=2, sample_min=8)\n    section(\"1. Genuinely running: evidence is defined before building\")\n    print(\"evidence:\", ev)\n    print(\"the metric, the baseline, the target and the minimum sample size were written down before any implementation existed, so the result cannot be argued into success afterwards; these numbers are invented for the lab\")\n\n    section(\"2. Genuinely computing: tests passing is not the outcome (ILLUSTRATIVE samples, minutes)\")\n    after_build = [9, 10, 8, 9, 11, 9, 10, 8, 9]\n    after_fix = [2, 1.5, 3, 1.8, 2, 1.2, 2.5, 1.9, 1.6]\n    for label, s, t in ((\"assistant built, tests pass\", after_build, True), (\"after fixing metadata labels\", after_fix, True)):\n        out = measure(s, ev)\n        print(f\"{label:30} measure={out} gate={gate(t, True, out)}\")\n    print(\"the first build passed every test and the gate still blocked because the median of nine minutes missed the two-minute target, while the second sample met it; the same tests were green both times, so they could not tell the two apart\")\n\n    section(\"3. Genuinely running: a missing measurement blocks\")\n    out = measure([2, 2, 3], ev)\n    print(\"three samples:\", out, \"->\", gate(True, True, out))\n    print(\"a gate that treats no data as success would pass a change nobody measured, so too few samples is its own reason to block\")\n\n    section(\"4. Genuinely running: constraints and the gate\")\n    out = measure(after_fix, ev)\n    print(\"outcome met, constraint violated:\", gate(True, False, out))\n    print(\"outcome met, tests failing      :\", gate(False, True, out))\n    print(\"everything holds                :\", gate(True, True, out))\n    print(\"a speed gain bought by breaking the read-only rule still blocks, because the outcome is one condition among several\")\n\n    section(\"5. Genuinely running: independent review, approval and target revision\")\n    print(\"builder and reviewer the same agent :\", review(\"agent-a\", \"agent-a\"))\n    print(\"builder and reviewer different       :\", review(\"agent-a\", \"agent-b\"))\n    for a in (\"read_logs\", \"enable_auto_remediation\"):\n        print(f\"approval needed for {a:26}: {approval_needed(a)}\")\n    print(\"revise target without evidence      :\", may_revise_target(2, 4, \"\", \"owner\"))\n    print(\"loosen target without citing baseline:\", may_revise_target(2, 4, \"the team prefers it\", \"owner\"))\n    print(\"loosen target citing baseline        :\", may_revise_target(2, 4, \"baseline measured at 12 minutes; 2 not reachable with current logs\", \"owner\"))\n    print(\"the builder cannot be its own independent reviewer, risky actions need a human, and a target moves only with evidence and an approver; here 'cites the baseline' is a keyword check on the note, which a careless note could satisfy\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: evidence is defined before building ---\nevidence: {'metric': 'minutes to identify the failing service', 'baseline': 12, 'target': 2, 'sample_min': 8}\nthe metric, the baseline, the target and the minimum sample size were written down before any implementation existed, so the result cannot be argued into success afterwards; these numbers are invented for the lab\n\n--- 2. Genuinely computing: tests passing is not the outcome (ILLUSTRATIVE samples, minutes) ---\nassistant built, tests pass    measure={'status': 'not_met', 'n': 9, 'median': 9, 'baseline': 12} gate=('BLOCK', ['outcome target not met'])\nafter fixing metadata labels   measure={'status': 'met', 'n': 9, 'median': 1.9, 'baseline': 12} gate=('PASS', [])\nthe first build passed every test and the gate still blocked because the median of nine minutes missed the two-minute target, while the second sample met it; the same tests were green both times, so they could not tell the two apart\n\n--- 3. Genuinely running: a missing measurement blocks ---\nthree samples: {'status': 'insufficient_data', 'n': 3} -> ('BLOCK', ['outcome not measured'])\na gate that treats no data as success would pass a change nobody measured, so too few samples is its own reason to block\n\n--- 4. Genuinely running: constraints and the gate ---\noutcome met, constraint violated: ('BLOCK', ['constraint violated'])\noutcome met, tests failing      : ('BLOCK', ['tests failing'])\neverything holds                : ('PASS', [])\na speed gain bought by breaking the read-only rule still blocks, because the outcome is one condition among several\n\n--- 5. Genuinely running: independent review, approval and target revision ---\nbuilder and reviewer the same agent : not independent\nbuilder and reviewer different       : independent\napproval needed for read_logs                 : False\napproval needed for enable_auto_remediation   : True\nrevise target without evidence      : (False, 'a revision needs evidence and an approver')\nloosen target without citing baseline: (False, 'loosening the target must cite the baseline')\nloosen target citing baseline        : (True, 'revision recorded')\nthe builder cannot be its own independent reviewer, risky actions need a human, and a target moves only with evidence and an approver; here 'cites the baseline' is a keyword check on the note, which a careless note could satisfy"
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
    "headingEn": "Genuinely Found: The Same Green Tests, Two Different Outcomes",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅದೇ ಹಸಿರು ಪರೀಕ್ಷೆಗಳು, ಎರಡು ಬೇರೆ ಫಲಿತಾಂಶಗಳು",
    "bodyEn": "Section 2 (invented minutes, nine samples each): the built assistant had median 9 against a target of 2 and was blocked with \"outcome target not met\", and after the metadata fix the median was 1.9 and the gate passed; the tests were green both times. Section 3: three samples against a minimum of eight gave insufficient_data and \"outcome not measured\". Section 4: a met outcome with a constraint violation or with failing tests was still BLOCK, and everything holding was PASS.",
    "bodyKn": "ವಿಭಾಗ 2 (ಕಲ್ಪಿತ ನಿಮಿಷಗಳು, ತಲಾ ಒಂಬತ್ತು ಮಾದರಿ): ನಿರ್ಮಿತ assistant ನ median 9 ಗುರಿ 2 ವಿರುದ್ಧ ಇದ್ದು \"outcome target not met\" ನೊಂದಿಗೆ ತಡೆಯಲ್ಪಟ್ಟಿತು, ಮತ್ತು metadata ಸರಿಪಡಿಕೆಯ ನಂತರ median 1.9 ಆಗಿ gate ಪಾಸ್ ಆಯಿತು; ಎರಡೂ ಬಾರಿ ಪರೀಕ್ಷೆಗಳು ಹಸಿರಾಗಿದ್ದವು. ವಿಭಾಗ 3: ಕನಿಷ್ಠ ಎಂಟರ ವಿರುದ್ಧ ಮೂರು ಮಾದರಿ insufficient_data ಮತ್ತು \"outcome not measured\" ನೀಡಿತು. ವಿಭಾಗ 4: ನಿರ್ಬಂಧ ಉಲ್ಲಂಘನೆ ಅಥವಾ ವಿಫಲ ಪರೀಕ್ಷೆಗಳೊಂದಿಗೆ ಸಾಧಿಸಿದ ಫಲಿತಾಂಶ ಇನ್ನೂ BLOCK, ಮತ್ತು ಎಲ್ಲವೂ ಹಿಡಿದಾಗ PASS."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Review, Approval and Revising a Target",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ವಿಮರ್ಶೆ, ಅನುಮೋದನೆ ಮತ್ತು ಗುರಿ ಪರಿಷ್ಕರಣೆ",
    "bodyEn": "Section 5: the same agent as builder and reviewer was \"not independent\", a different reviewer was \"independent\", enable_auto_remediation needed approval and read_logs did not. A revision with no evidence was refused, loosening the target without citing the baseline was refused and the same loosening that cited a baseline of 12 minutes was recorded, with the caveat that this is only a keyword check on the note.",
    "bodyKn": "ವಿಭಾಗ 5: builder ಮತ್ತು reviewer ಒಂದೇ agent \"not independent\", ಬೇರೆ reviewer \"independent\", enable_auto_remediation ಗೆ ಅನುಮೋದನೆ ಬೇಕಿತ್ತು ಮತ್ತು read_logs ಗೆ ಬೇಕಿರಲಿಲ್ಲ. ಸಾಕ್ಷ್ಯವಿಲ್ಲದ ಪರಿಷ್ಕರಣೆ ನಿರಾಕರಿಸಲಾಯಿತು, baseline ಉಲ್ಲೇಖಿಸದೆ ಗುರಿ ಸಡಿಲಿಸುವುದು ನಿರಾಕರಿಸಲಾಯಿತು ಮತ್ತು 12 ನಿಮಿಷದ baseline ಉಲ್ಲೇಖಿಸಿದ ಅದೇ ಸಡಿಲಿಕೆ ದಾಖಲಾಯಿತು, ಇದು ಟಿಪ್ಪಣಿಯ ಮೇಲಿನ keyword ಪರಿಶೀಲನೆ ಮಾತ್ರ ಎಂಬ ಎಚ್ಚರಿಕೆಯೊಂದಿಗೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Tests answer whether the thing was built as specified; only the measured outcome answers whether the right thing was built.",
    "bodyKn": "ವಸ್ತು ನಿರ್ದಿಷ್ಟಪಡಿಸಿದಂತೆ ನಿರ್ಮಿತವಾಯಿತೇ ಎಂದು ಪರೀಕ್ಷೆಗಳು ಉತ್ತರಿಸುತ್ತವೆ; ಸರಿಯಾದ ವಸ್ತು ನಿರ್ಮಿತವಾಯಿತೇ ಎಂದು ಅಳೆದ ಫಲಿತಾಂಶ ಮಾತ್ರ ಉತ್ತರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"all tests pass, so we are done.\" With nine-minute triage the target of two minutes was missed.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಎಲ್ಲಾ ಪರೀಕ್ಷೆ ಪಾಸ್, ಆದ್ದರಿಂದ ಮುಗಿಯಿತು.\" ಒಂಬತ್ತು-ನಿಮಿಷ triage ನೊಂದಿಗೆ ಎರಡು ನಿಮಿಷದ ಗುರಿ ತಪ್ಪಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Baseline: the measurement before the change. Target: the value that counts as success. Gate: a decision that needs every condition. Independent review: the reviewer is not the builder.",
    "bodyKn": "Baseline: ಬದಲಾವಣೆಗೆ ಮುನ್ನದ ಅಳತೆ. Target: ಯಶಸ್ಸು ಎಂದು ಪರಿಗಣಿಸುವ ಮೌಲ್ಯ. Gate: ಪ್ರತಿ ಷರತ್ತು ಬೇಕಾದ ನಿರ್ಧಾರ. Independent review: reviewer builder ಅಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Evidence was fixed before building. 2) Green tests with a nine-minute median still blocked. 3) Too few samples blocked. 4) A constraint violation blocked a met outcome. 5) Targets move only with evidence and an approver.",
    "bodyKn": "1) ಸಾಕ್ಷ್ಯ ನಿರ್ಮಾಣಕ್ಕೆ ಮುನ್ನ ನಿಗದಿಯಾಯಿತು. 2) ಒಂಬತ್ತು-ನಿಮಿಷ median ಇರುವ ಹಸಿರು ಪರೀಕ್ಷೆಗಳು ಇನ್ನೂ ತಡೆದವು. 3) ಕಡಿಮೆ ಮಾದರಿ ತಡೆಯಿತು. 4) ನಿರ್ಬಂಧ ಉಲ್ಲಂಘನೆ ಸಾಧಿಸಿದ ಫಲಿತಾಂಶ ತಡೆಯಿತು. 5) ಗುರಿಗಳು ಸಾಕ್ಷ್ಯ ಮತ್ತು ಅನುಮೋದಕರೊಂದಿಗೆ ಮಾತ್ರ ಚಲಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What was the median of the first build in the invented data?",
      "qKn": "ಕಲ್ಪಿತ ದತ್ತಾಂಶದಲ್ಲಿ ಮೊದಲ ನಿರ್ಮಾಣದ median ಎಷ್ಟು?",
      "opts": [
       "9 minutes",
       "2 minutes",
       "12 minutes",
       "1.9 minutes"
      ],
      "optsKn": [
       "9 ನಿಮಿಷ",
       "2 ನಿಮಿಷ",
       "12 ನಿಮಿಷ",
       "1.9 ನಿಮಿಷ"
      ],
      "correct": 0
     },
     {
      "q": "Why did three samples block?",
      "qKn": "ಮೂರು ಮಾದರಿಗಳು ಏಕೆ ತಡೆದವು?",
      "opts": [
       "Fewer than the required eight",
       "They were slow",
       "They were signed",
       "They were negative"
      ],
      "optsKn": [
       "ಅಗತ್ಯ ಎಂಟಕ್ಕಿಂತ ಕಡಿಮೆ",
       "ಅವು ನಿಧಾನ",
       "ಅವಕ್ಕೆ ಸಹಿ ಇತ್ತು",
       "ಅವು ಋಣಾತ್ಮಕ"
      ],
      "correct": 0
     },
     {
      "q": "A met outcome with a constraint violation gave what?",
      "qKn": "ನಿರ್ಬಂಧ ಉಲ್ಲಂಘನೆ ಇರುವ ಸಾಧಿಸಿದ ಫಲಿತಾಂಶ ಏನು ನೀಡಿತು?",
      "opts": [
       "BLOCK",
       "PASS",
       "Retire",
       "Review"
      ],
      "optsKn": [
       "BLOCK",
       "PASS",
       "Retire",
       "Review"
      ],
      "correct": 0
     },
     {
      "q": "Which action needed approval?",
      "qKn": "ಯಾವ ಕ್ರಿಯೆಗೆ ಅನುಮೋದನೆ ಬೇಕಿತ್ತು?",
      "opts": [
       "enable_auto_remediation",
       "read_logs",
       "both",
       "neither"
      ],
      "optsKn": [
       "enable_auto_remediation",
       "read_logs",
       "ಎರಡೂ",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What limits the baseline-citing rule?",
      "qKn": "baseline ಉಲ್ಲೇಖ ನಿಯಮವನ್ನು ಯಾವುದು ಮಿತಿಗೊಳಿಸುತ್ತದೆ?",
      "opts": [
       "It is a keyword check on the note",
       "It uses signatures",
       "It needs a database",
       "It is random"
      ],
      "optsKn": [
       "ಇದು ಟಿಪ್ಪಣಿಯ ಮೇಲಿನ keyword ಪರಿಶೀಲನೆ",
       "ಇದು ಸಹಿ ಬಳಸುತ್ತದೆ",
       "ಇದಕ್ಕೆ ಡೇಟಾಬೇಸ್ ಬೇಕು",
       "ಇದು ಯಾದೃಚ್ಛಿಕ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
