module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b32156e",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Agent Instructions as Executable Constraints (Part 2 of 3) — Probing Checkers and the Severity Source",
 "titleKn": "Agent ಸೂಚನೆಗಳು ಕಾರ್ಯಗತಗೊಳಿಸಬಹುದಾದ ನಿರ್ಬಂಧಗಳಾಗಿ (ಭಾಗ 2 / 3) — Checkers ಪರೀಕ್ಷೆ ಮತ್ತು ತೀವ್ರತೆಯ ಮೂಲ",
 "desc": "Write naive and stronger checkers, probe them with spellings, stale evidence and late approvals, and show why severities must come from trusted policy.",
 "descKn": "ಸರಳ ಮತ್ತು ಬಲವಾದ checkers ಬರೆದು, ಕಾಗುಣಿತಗಳು, ಹಳೆಯ ಸಾಕ್ಷ್ಯ ಮತ್ತು ತಡವಾದ ಅನುಮೋದನೆಗಳಿಂದ ಪರೀಕ್ಷಿಸಿ, ತೀವ್ರತೆಗಳು ವಿಶ್ವಾಸಾರ್ಹ ನೀತಿಯಿಂದ ಏಕೆ ಬರಬೇಕು ಎಂದು ತೋರಿಸಿ.",
 "objectives": [
  "Normalise paths before comparing.",
  "Bind test evidence to a revision.",
  "Bind approvals to target and time.",
  "Read severity from trusted policy.",
  "Probe checkers with adversarial inputs."
 ],
 "objectivesKn": [
  "ಹೋಲಿಸುವ ಮುನ್ನ paths ಸಾಮಾನ್ಯೀಕರಿಸಿ.",
  "ಪರೀಕ್ಷಾ ಸಾಕ್ಷ್ಯವನ್ನು revision ಗೆ ಕಟ್ಟಿ.",
  "ಅನುಮೋದನೆಗಳನ್ನು ಗುರಿ ಮತ್ತು ಸಮಯಕ್ಕೆ ಕಟ್ಟಿ.",
  "ತೀವ್ರತೆಯನ್ನು ವಿಶ್ವಾಸಾರ್ಹ ನೀತಿಯಿಂದ ಓದಿ.",
  "Checkers ಅನ್ನು ಪ್ರತಿಕೂಲ ಇನ್‌ಪುಟ್‌ಗಳಿಂದ ಪರೀಕ್ಷಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Agent Instructions as Executable Constraints (Part 2 of 3)",
    "textKn": "Agent ಸೂಚನೆಗಳು ಕಾರ್ಯಗತಗೊಳಿಸಬಹುದಾದ ನಿರ್ಬಂಧಗಳಾಗಿ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: attacking the checkers: path spellings, stale test evidence, approval timing, uncertainty and the severity source. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind agent instructions as executable constraints (rule files, checkers, severities and gates), not the real software, and the run records are hand-written and no language model is involved, so no real LLM behaviour is measured. The pasted source for this part never arrived (only Parts 1 and 3 were supplied), so it is built from the other two parts and the lesson outline, and the original program was not supplied either. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: checkers ಮೇಲೆ ದಾಳಿ: path ಕಾಗುಣಿತಗಳು, ಹಳೆಯ ಪರೀಕ್ಷಾ ಸಾಕ್ಷ್ಯ, ಅನುಮೋದನೆ ಸಮಯ, ಅನಿಶ್ಚಿತತೆ ಮತ್ತು ತೀವ್ರತೆಯ ಮೂಲ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು agent ಸೂಚನೆಗಳು ಕಾರ್ಯಗತಗೊಳಿಸಬಹುದಾದ ನಿರ್ಬಂಧಗಳಾಗಿ (ನಿಯಮ ಫೈಲ್‌ಗಳು, checkers, ತೀವ್ರತೆಗಳು ಮತ್ತು gates) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು run ದಾಖಲೆಗಳು ಕೈಬರಹ ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಈ ಭಾಗದ ಅಂಟಿಸಿದ ಮೂಲ ಎಂದೂ ಬರಲಿಲ್ಲ (ಭಾಗ 1 ಮತ್ತು 3 ಮಾತ್ರ ಒದಗಿಸಲಾಗಿತ್ತು), ಆದ್ದರಿಂದ ಅದು ಇತರ ಎರಡು ಭಾಗಗಳು ಮತ್ತು lesson ರೂಪರೇಖೆಯಿಂದ ನಿರ್ಮಿಸಲ್ಪಟ್ಟಿದೆ, ಮತ್ತು ಮೂಲ ಪ್ರೋಗ್ರಾಂ ಕೂಡ ಒದಗಿಸಿರಲಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Checkers Are Software Too",
    "textKn": "Checkers ಕೂಡ ಸಾಫ್ಟ್‌ವೇರ್",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Naive Rules and Their Fixes",
    "headingKn": "ಸರಳ ನಿಯಮಗಳು ಮತ್ತು ಅವುಗಳ ಪರಿಹಾರಗಳು",
    "bodyEn": "A checker proves only the claim it evaluates. This part writes a simple version and a stronger version of four checkers and tries them on inputs they were not designed for: nine spellings of a protected path, a green test run from before the last edit, approvals that came late or named another target, uncertainty compared as strings, and a severity table the agent can edit.",
    "bodyKn": "Checker ತಾನು ಮೌಲ್ಯಮಾಪನ ಮಾಡುವ ಹೇಳಿಕೆಯನ್ನು ಮಾತ್ರ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ. ಈ ಭಾಗ ನಾಲ್ಕು checkers ನ ಸರಳ ಮತ್ತು ಬಲವಾದ ಆವೃತ್ತಿ ಬರೆದು ಅವು ವಿನ್ಯಾಸಗೊಳ್ಳದ ಇನ್‌ಪುಟ್‌ಗಳ ಮೇಲೆ ಪ್ರಯತ್ನಿಸುತ್ತದೆ: ರಕ್ಷಿತ path ನ ಒಂಬತ್ತು ಕಾಗುಣಿತಗಳು, ಕೊನೆಯ ಸಂಪಾದನೆಗಿಂತ ಮುನ್ನದ ಹಸಿರು ಪರೀಕ್ಷಾ ಓಟ, ತಡವಾಗಿ ಬಂದ ಅಥವಾ ಬೇರೆ ಗುರಿ ಹೆಸರಿಸಿದ ಅನುಮೋದನೆಗಳು, ಸ್ಟ್ರಿಂಗ್ ಆಗಿ ಹೋಲಿಸಿದ ಅನಿಶ್ಚಿತತೆ ಮತ್ತು agent ಸಂಪಾದಿಸಬಹುದಾದ ತೀವ್ರತೆ ಕೋಷ್ಟಕ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Every Checker Has Blind Spots",
    "headingKn": "ಪ್ರತಿ Checker ಗೂ ಕುರುಡು ಬಿಂದುಗಳಿವೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Attacking the checkers</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">paths</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">spellings</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">tests</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">which revision</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">approval</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">when, for what</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">severity source</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">trusted file only</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">every checker has inputs it was not written for</text></svg>",
    "captionEn": "Probe each rule with inputs it was not written for.",
    "captionKn": "ಪ್ರತಿ ನಿಯಮವನ್ನು ಅದು ಬರೆಯದ ಇನ್‌ಪುಟ್‌ಗಳಿಂದ ಪರೀಕ್ಷಿಸಿ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Naive rule and its repair",
    "headingKn": "ಸರಳ ನಿಯಮ ಮತ್ತು ಅದರ ದುರಸ್ತಿ",
    "headers": [
     "Rule",
     "Naive version",
     "Repair"
    ],
    "rows": [
     [
      "protected paths",
      "set intersection of strings",
      "normalise separators, dots and case"
     ],
     [
      "tests before completion",
      "ran and exit 0",
      "bind to the code revision"
     ],
     [
      "approval",
      "an approval exists",
      "right target, recorded before the action"
     ],
     [
      "severity",
      "read from the run report",
      "read from reviewed policy"
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
    "filename": "ic_2.py",
    "headingEn": "Naive and stronger checkers and the gate",
    "headingKn": "ಸರಳ ಮತ್ತು ಬಲವಾದ checkers ಮತ್ತು gate",
    "descEn": "naive_protected compares exact strings while normalised_protected normalises separators, dots and case and treats a directory as covering its contents. revision_tests requires the tested revision to equal the code revision. bound_approval needs the right target and a time before the action. gate reads severities from a table passed in by the caller.",
    "descKn": "naive_protected ನಿಖರ ಸ್ಟ್ರಿಂಗ್‌ಗಳನ್ನು ಹೋಲಿಸುತ್ತದೆ, normalised_protected ವಿಭಜಕಗಳು, ಚುಕ್ಕೆಗಳು ಮತ್ತು ಕೇಸ್ ಸಾಮಾನ್ಯೀಕರಿಸಿ ಡೈರೆಕ್ಟರಿ ತನ್ನ ವಿಷಯವನ್ನು ಆವರಿಸುತ್ತದೆ ಎಂದು ಪರಿಗಣಿಸುತ್ತದೆ. revision_tests ಪರೀಕ್ಷಿಸಿದ revision ಕೋಡ್ revision ಗೆ ಸಮನಾಗಿರಬೇಕು. bound_approval ಸರಿಯಾದ ಗುರಿ ಮತ್ತು ಕ್ರಿಯೆಗೆ ಮುನ್ನದ ಸಮಯ ಬೇಕು. gate ಕರೆದವರು ನೀಡಿದ ಕೋಷ್ಟಕದಿಂದ ತೀವ್ರತೆಗಳನ್ನು ಓದುತ್ತದೆ.",
    "code": "PROTECTED = [\"deploy/release.py\", \"deploy/\"]\n\n\ndef naive_protected(run):\n    return not (set(run[\"protected_paths\"]) & set(run[\"changed_paths\"]))\n\n\ndef normalised_protected(run):\n    def norm(p):\n        return posixpath.normpath(p.replace(\"\\\\\", \"/\")).lower()\n    prot = [norm(p) for p in run[\"protected_paths\"]]\n    for c in map(norm, run[\"changed_paths\"]):\n        for p in prot:\n            if c == p or c.startswith(p.rstrip(\"/\") + \"/\"):\n                return False\n    return True\n\n\ndef naive_tests(run):\n    return run[\"tests_ran\"] and run[\"test_exit_code\"] == 0\n\n\ndef revision_tests(run):\n    return run[\"tests_ran\"] and run[\"test_exit_code\"] == 0 and run.get(\"tests_revision\") == run.get(\"code_revision\")\n\n\ndef naive_approval(run):\n    return run[\"approval\"] is not None and run[\"approval\"][\"approved\"] is True\n\n\ndef bound_approval(run):\n    a = run[\"approval\"]\n    return (a is not None and a[\"approved\"] is True and a[\"target\"] == run[\"target\"] and a[\"at\"] < run[\"action_at\"])\n\n\ndef question_assumption(run):\n    return not (set(run[\"unresolved\"]) & set(run[\"assumed\"]))\n\n\ndef semantic_assumption(run):\n    norm = lambda s: \" \".join(s.lower().replace(\"?\", \"\").split())\n    return not ({norm(q) for q in run[\"unresolved\"]} & {norm(a) for a in run[\"assumed\"]})\n\n\ndef gate(results, severity_table):\n    return all(st == \"pass\" or severity_table[name] != \"block\" for name, st in results)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ic_2.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs each naive and stronger checker on adversarial inputs and compares a trusted severity table with a downgraded one.",
    "descKn": "main() ಪ್ರತಿ ಸರಳ ಮತ್ತು ಬಲವಾದ checker ಅನ್ನು ಪ್ರತಿಕೂಲ ಇನ್‌ಪುಟ್‌ಗಳ ಮೇಲೆ ಓಡಿಸಿ ವಿಶ್ವಾಸಾರ್ಹ ತೀವ್ರತೆ ಕೋಷ್ಟಕವನ್ನು ಇಳಿಸಿದ್ದರೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Genuinely checking: protected-path matching against nine spellings of a changed path\")\n    base = {\"protected_paths\": [\"deploy/release.py\", \"deploy/\"]}\n    spellings = [\"deploy/release.py\", \"./deploy/release.py\", \"deploy//release.py\", \"deploy\\\\release.py\", \"DEPLOY/release.py\", \"src/../deploy/release.py\", \"deploy/other.py\", \"deploy\", \"src/app.py\"]\n    for sp in spellings:\n        run = dict(base, changed_paths=[sp])\n        print(f\"{sp:28} naive says clean={naive_protected(run)!s:5} normalised says clean={normalised_protected(run)!s:5}\")\n    print(\"the naive set intersection only caught the exact string; normalising separators, '.' and '..' and case flagged every spelling of the release script and everything under the deploy directory; the bare name 'deploy' was flagged as well because normalising strips the trailing slash, so a file that happens to be named deploy would be a false positive, and a case-insensitive match would be wrong on a case-sensitive filesystem\")\n\n    section(\"2. Genuinely checking: tests that ran, but before the final edit\")\n    runs = {\"fresh\": dict(tests_ran=True, test_exit_code=0, tests_revision=\"r2\", code_revision=\"r2\"), \"stale\": dict(tests_ran=True, test_exit_code=0, tests_revision=\"r1\", code_revision=\"r2\"),\n            \"failed\": dict(tests_ran=True, test_exit_code=1, tests_revision=\"r2\", code_revision=\"r2\")}\n    for name, run in runs.items():\n        print(f\"{name:7} naive passes={bool(naive_tests(run))!s:5} revision-aware passes={bool(revision_tests(run))}\")\n    print(\"a green run from before the last edit satisfied the naive rule; tying the evidence to the revision refused it, and the revision label itself must come from a trusted runner\")\n\n    section(\"3. Genuinely checking: approval chronology and target binding\")\n    cases = {\"approved before, right target\": dict(approval={\"approved\": True, \"target\": \"prod-eu\", \"at\": 5}, target=\"prod-eu\", action_at=10),\n             \"approved after the action\": dict(approval={\"approved\": True, \"target\": \"prod-eu\", \"at\": 12}, target=\"prod-eu\", action_at=10),\n             \"approved a different target\": dict(approval={\"approved\": True, \"target\": \"staging\", \"at\": 5}, target=\"prod-eu\", action_at=10), \"no approval\": dict(approval=None, target=\"prod-eu\", action_at=10)}\n    for name, run in cases.items():\n        print(f\"{name:30} naive passes={bool(naive_approval(run))!s:5} bound passes={bool(bound_approval(run))}\")\n    print(\"the naive rule accepted approval that came late and approval for another target; the bound rule needs the right target recorded before the action, and the approval record must come from a trusted source, not from the agent's own notes\")\n\n    section(\"4. Genuinely measuring: uncertainty detection by exact string versus normalised text\")\n    pairs = [([\"Which production region?\"], [\"Which production region?\"]), ([\"Which production region?\"], [\"which production region\"]), ([\"Which production region?\"], [\"The region is probably eu-west.\"]), ([], [\"anything\"])]\n    for q, a in pairs:\n        run = dict(unresolved=q, assumed=a)\n        print(f\"question {q!s:32} assumption {a!s:34} exact passes={question_assumption(run)!s:5} normalised passes={semantic_assumption(run)}\")\n    print(\"the exact comparison missed a case-and-punctuation variant; both missed a paraphrased assumption, so detecting assumptions made without asking needs more than string matching and this rule is only a hint\")\n\n    section(\"5. Genuinely checking: severity from a trusted file versus the agent's own report\")\n    results = [(\"no-protected-writes\", \"fail\"), (\"ask-before-assuming\", \"fail\")]\n    trusted = {\"no-protected-writes\": \"block\", \"ask-before-assuming\": \"warn\"}\n    forged = {\"no-protected-writes\": \"info\", \"ask-before-assuming\": \"warn\"}\n    print(\"trusted severities -> release allowed:\", gate(results, trusted))\n    print(\"severity downgraded to info by the agent's report -> release allowed:\", gate(results, forged))\n    print(\"the failing result is identical in both calls; only the severity source changed, so severities must be read from reviewed policy and never from the run being judged\")\n\n    section(\"6. Genuinely checking: a high score hiding a block failure\")\n    scores = {\"all pass\": [(\"a\", \"pass\")] * 10, \"one block fails\": [(\"a\", \"pass\")] * 9 + [(\"protected\", \"fail\")]}\n    sev = {\"a\": \"info\", \"protected\": \"block\"}\n    for name, res in scores.items():\n        print(f\"{name:16} score {sum(s == 'pass' for _, s in res) / len(res):.0%} gate allowed {gate(res, sev)}\")\n    print(\"the same 90 percent score can be a pass or a block depending on which rule failed\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely checking: protected-path matching against nine spellings of a changed path ---\ndeploy/release.py            naive says clean=False normalised says clean=False\n./deploy/release.py          naive says clean=True  normalised says clean=False\ndeploy//release.py           naive says clean=True  normalised says clean=False\ndeploy\\release.py            naive says clean=True  normalised says clean=False\nDEPLOY/release.py            naive says clean=True  normalised says clean=False\nsrc/../deploy/release.py     naive says clean=True  normalised says clean=False\ndeploy/other.py              naive says clean=True  normalised says clean=False\ndeploy                       naive says clean=True  normalised says clean=False\nsrc/app.py                   naive says clean=True  normalised says clean=True \nthe naive set intersection only caught the exact string; normalising separators, '.' and '..' and case flagged every spelling of the release script and everything under the deploy directory; the bare name 'deploy' was flagged as well because normalising strips the trailing slash, so a file that happens to be named deploy would be a false positive, and a case-insensitive match would be wrong on a case-sensitive filesystem\n\n--- 2. Genuinely checking: tests that ran, but before the final edit ---\nfresh   naive passes=True  revision-aware passes=True\nstale   naive passes=True  revision-aware passes=False\nfailed  naive passes=False revision-aware passes=False\na green run from before the last edit satisfied the naive rule; tying the evidence to the revision refused it, and the revision label itself must come from a trusted runner\n\n--- 3. Genuinely checking: approval chronology and target binding ---\napproved before, right target  naive passes=True  bound passes=True\napproved after the action      naive passes=True  bound passes=False\napproved a different target    naive passes=True  bound passes=False\nno approval                    naive passes=False bound passes=False\nthe naive rule accepted approval that came late and approval for another target; the bound rule needs the right target recorded before the action, and the approval record must come from a trusted source, not from the agent's own notes\n\n--- 4. Genuinely measuring: uncertainty detection by exact string versus normalised text ---\nquestion ['Which production region?']     assumption ['Which production region?']       exact passes=False normalised passes=False\nquestion ['Which production region?']     assumption ['which production region']        exact passes=True  normalised passes=False\nquestion ['Which production region?']     assumption ['The region is probably eu-west.'] exact passes=True  normalised passes=True\nquestion []                               assumption ['anything']                       exact passes=True  normalised passes=True\nthe exact comparison missed a case-and-punctuation variant; both missed a paraphrased assumption, so detecting assumptions made without asking needs more than string matching and this rule is only a hint\n\n--- 5. Genuinely checking: severity from a trusted file versus the agent's own report ---\ntrusted severities -> release allowed: False\nseverity downgraded to info by the agent's report -> release allowed: True\nthe failing result is identical in both calls; only the severity source changed, so severities must be read from reviewed policy and never from the run being judged\n\n--- 6. Genuinely checking: a high score hiding a block failure ---\nall pass         score 100% gate allowed True\none block fails  score 90% gate allowed False\nthe same 90 percent score can be a pass or a block depending on which rule failed"
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
    "headingEn": "Genuinely Found: Spellings, Stale Tests and Late Approvals",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕಾಗುಣಿತಗಳು, ಹಳೆಯ ಪರೀಕ್ಷೆಗಳು ಮತ್ತು ತಡವಾದ ಅನುಮೋದನೆಗಳು",
    "bodyEn": "Section 1: the naive path check caught only the exact string \"deploy/release.py\"; the normalised check flagged every other spelling (./, //, a backslash, upper case, ../ and anything under deploy/), and it also flagged the bare name \"deploy\", a false positive for a file named like the directory. Section 2: a green test run from revision r1 satisfied the naive rule while the code was at r2, and the revision-aware rule refused it. Section 3: approval that came after the action and approval for another target passed the naive rule and failed the bound rule.",
    "bodyKn": "ವಿಭಾಗ 1: ಸರಳ path ಪರಿಶೀಲನೆ ನಿಖರ ಸ್ಟ್ರಿಂಗ್ \"deploy/release.py\" ಮಾತ್ರ ಹಿಡಿಯಿತು; ಸಾಮಾನ್ಯೀಕರಿಸಿದ ಪರಿಶೀಲನೆ ಇತರ ಪ್ರತಿ ಕಾಗುಣಿತ (./, //, ಬ್ಯಾಕ್‌ಸ್ಲ್ಯಾಶ್, ದೊಡ್ಡಕ್ಷರ, ../ ಮತ್ತು deploy/ ಅಡಿಯ ಎಲ್ಲವೂ) ಗುರುತಿಸಿತು, ಮತ್ತು ಬರೇ ಹೆಸರು \"deploy\" ಅನ್ನೂ ಗುರುತಿಸಿತು, ಡೈರೆಕ್ಟರಿ ಹೆಸರಿನ ಫೈಲ್‌ಗೆ ತಪ್ಪು ಧನಾತ್ಮಕ. ವಿಭಾಗ 2: ಕೋಡ್ r2 ರಲ್ಲಿದ್ದಾಗ revision r1 ರ ಹಸಿರು ಪರೀಕ್ಷಾ ಓಟ ಸರಳ ನಿಯಮ ಪೂರೈಸಿತು, revision-ಅರಿವಿನ ನಿಯಮ ಅದನ್ನು ತಿರಸ್ಕರಿಸಿತು. ವಿಭಾಗ 3: ಕ್ರಿಯೆಯ ನಂತರ ಬಂದ ಅನುಮೋದನೆ ಮತ್ತು ಬೇರೆ ಗುರಿಯ ಅನುಮೋದನೆ ಸರಳ ನಿಯಮ ಪಾಸ್ ಮಾಡಿ ಬದ್ಧ ನಿಯಮ ವಿಫಲಗೊಳಿಸಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Assumptions and the Source of Severity",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಊಹೆಗಳು ಮತ್ತು ತೀವ್ರತೆಯ ಮೂಲ",
    "bodyEn": "Section 4: the exact string comparison missed a case-and-punctuation variant of an assumption, and both versions missed a paraphrased assumption, so this rule is only a hint. Section 5: the same failing results blocked release when severities came from the trusted table and allowed it when the agent's report downgraded the protected-writes rule to info. Section 6: a 90 percent score was either a pass or a block depending on which rule failed.",
    "bodyKn": "ವಿಭಾಗ 4: ನಿಖರ ಸ್ಟ್ರಿಂಗ್ ಹೋಲಿಕೆ ಊಹೆಯ ಕೇಸ್-ಮತ್ತು-ವಿರಾಮಚಿಹ್ನೆ ರೂಪಾಂತರ ತಪ್ಪಿಸಿತು, ಮತ್ತು ಎರಡೂ ಆವೃತ್ತಿಗಳು ಬೇರೆ ಪದಗಳಲ್ಲಿ ಹೇಳಿದ ಊಹೆಯನ್ನು ತಪ್ಪಿಸಿದವು, ಆದ್ದರಿಂದ ಈ ನಿಯಮ ಕೇವಲ ಸುಳಿವು. ವಿಭಾಗ 5: ತೀವ್ರತೆಗಳು ವಿಶ್ವಾಸಾರ್ಹ ಕೋಷ್ಟಕದಿಂದ ಬಂದಾಗ ಅದೇ ವಿಫಲ ಫಲಿತಾಂಶಗಳು release ತಡೆದವು ಮತ್ತು agent ನ ವರದಿ protected-writes ನಿಯಮವನ್ನು info ಗೆ ಇಳಿಸಿದಾಗ ಅನುಮತಿಸಿದವು. ವಿಭಾಗ 6: ಯಾವ ನಿಯಮ ವಿಫಲವಾಯಿತು ಎಂಬುದನ್ನು ಅವಲಂಬಿಸಿ 90 ಶೇಕಡಾ ಅಂಕ ಪಾಸ್ ಅಥವಾ ತಡೆ ಆಗಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A checker that passes its own happy-path example can still be trivially bypassed; probing it with spellings, stale evidence and late approvals is how you find out before an agent does.",
    "bodyKn": "ತನ್ನದೇ ಸುಖ-ಮಾರ್ಗ ಉದಾಹರಣೆ ಪಾಸ್ ಮಾಡುವ checker ಸುಲಭವಾಗಿ ಬೈಪಾಸ್ ಆಗಬಹುದು; ಕಾಗುಣಿತಗಳು, ಹಳೆಯ ಸಾಕ್ಷ್ಯ ಮತ್ತು ತಡವಾದ ಅನುಮೋದನೆಗಳಿಂದ ಪರೀಕ್ಷಿಸುವುದು agent ಕಂಡುಹಿಡಿಯುವ ಮುನ್ನ ತಿಳಿಯುವ ದಾರಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the checker passed, so the rule was followed.\" A stale green test run passed the naive rule.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"checker ಪಾಸ್ ಆಯಿತು, ಆದ್ದರಿಂದ ನಿಯಮ ಅನುಸರಿಸಲಾಯಿತು.\" ಹಳೆಯ ಹಸಿರು ಪರೀಕ್ಷಾ ಓಟ ಸರಳ ನಿಯಮ ಪಾಸ್ ಮಾಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Normalisation: reducing equivalent spellings to one form. Revision binding: tying evidence to a code version. Approval binding: tying an approval to an action and time. Trusted policy: configuration the agent cannot edit.",
    "bodyKn": "Normalisation: ಸಮಾನ ಕಾಗುಣಿತಗಳನ್ನು ಒಂದು ರೂಪಕ್ಕೆ ಇಳಿಸುವುದು. Revision binding: ಸಾಕ್ಷ್ಯವನ್ನು ಕೋಡ್ ಆವೃತ್ತಿಗೆ ಕಟ್ಟುವುದು. Approval binding: ಅನುಮೋದನೆಯನ್ನು ಕ್ರಿಯೆ ಮತ್ತು ಸಮಯಕ್ಕೆ ಕಟ್ಟುವುದು. Trusted policy: agent ಸಂಪಾದಿಸಲಾಗದ ಸಂರಚನೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The naive path check caught one spelling; the normalised one caught eight and falsely flagged \"deploy\". 2) A stale green run passed until bound to a revision. 3) Late and mis-targeted approvals passed the naive rule. 4) Assumption checks by string miss paraphrases. 5) A downgraded severity let a failing run release.",
    "bodyKn": "1) ಸರಳ path ಪರಿಶೀಲನೆ ಒಂದು ಕಾಗುಣಿತ ಹಿಡಿಯಿತು; ಸಾಮಾನ್ಯೀಕರಿಸಿದದ್ದು ಎಂಟು ಹಿಡಿದು \"deploy\" ಅನ್ನು ತಪ್ಪಾಗಿ ಗುರುತಿಸಿತು. 2) ಹಳೆಯ ಹಸಿರು ಓಟ revision ಗೆ ಕಟ್ಟುವವರೆಗೆ ಪಾಸ್ ಆಯಿತು. 3) ತಡವಾದ ಮತ್ತು ತಪ್ಪು-ಗುರಿಯ ಅನುಮೋದನೆಗಳು ಸರಳ ನಿಯಮ ಪಾಸ್ ಮಾಡಿದವು. 4) ಸ್ಟ್ರಿಂಗ್ ಮೂಲಕ ಊಹೆ ಪರಿಶೀಲನೆ ಬೇರೆ ಪದಗಳನ್ನು ತಪ್ಪಿಸುತ್ತದೆ. 5) ಇಳಿಸಿದ ತೀವ್ರತೆ ವಿಫಲ ಓಟ release ಆಗಲು ಬಿಟ್ಟಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many of the nine spellings did the naive path check flag?",
      "qKn": "ಒಂಬತ್ತು ಕಾಗುಣಿತಗಳಲ್ಲಿ ಸರಳ path ಪರಿಶೀಲನೆ ಎಷ್ಟನ್ನು ಗುರುತಿಸಿತು?",
      "opts": [
       "1",
       "4",
       "8",
       "9"
      ],
      "optsKn": [
       "1",
       "4",
       "8",
       "9"
      ],
      "correct": 0
     },
     {
      "q": "Why did the revision-aware rule refuse the green test run?",
      "qKn": "Revision-ಅರಿವಿನ ನಿಯಮ ಹಸಿರು ಪರೀಕ್ಷಾ ಓಟವನ್ನು ಏಕೆ ತಿರಸ್ಕರಿಸಿತು?",
      "opts": [
       "Tests failed",
       "The tests ran at r1 and the code was at r2",
       "No tests existed",
       "Exit code was 1"
      ],
      "optsKn": [
       "ಪರೀಕ್ಷೆಗಳು ವಿಫಲ",
       "ಪರೀಕ್ಷೆಗಳು r1 ರಲ್ಲಿ ಓಡಿದವು ಮತ್ತು ಕೋಡ್ r2 ರಲ್ಲಿತ್ತು",
       "ಪರೀಕ್ಷೆಗಳಿರಲಿಲ್ಲ",
       "Exit code 1 ಆಗಿತ್ತು"
      ],
      "correct": 1
     },
     {
      "q": "Which approvals passed the naive rule but failed the bound rule?",
      "qKn": "ಯಾವ ಅನುಮೋದನೆಗಳು ಸರಳ ನಿಯಮ ಪಾಸ್ ಮಾಡಿ ಬದ್ಧ ನಿಯಮ ವಿಫಲಗೊಳಿಸಿದವು?",
      "opts": [
       "One after the action and one for another target",
       "Only missing approvals",
       "None",
       "All of them"
      ],
      "optsKn": [
       "ಕ್ರಿಯೆಯ ನಂತರದ್ದು ಮತ್ತು ಬೇರೆ ಗುರಿಯದ್ದು",
       "ಕಾಣೆಯಾದ ಅನುಮೋದನೆಗಳು ಮಾತ್ರ",
       "ಯಾವುದೂ ಇಲ್ಲ",
       "ಎಲ್ಲವೂ"
      ],
      "correct": 0
     },
     {
      "q": "What let a failing run release in section 5?",
      "qKn": "ವಿಭಾಗ 5 ರಲ್ಲಿ ವಿಫಲ ಓಟ release ಆಗಲು ಏನು ಬಿಟ್ಟಿತು?",
      "opts": [
       "A severity downgraded in the agent's own report",
       "A bug in Python",
       "Higher coverage",
       "A longer timeout"
      ],
      "optsKn": [
       "agent ನ ಸ್ವಂತ ವರದಿಯಲ್ಲಿ ಇಳಿಸಿದ ತೀವ್ರತೆ",
       "Python ದೋಷ",
       "ಹೆಚ್ಚಿನ coverage",
       "ಉದ್ದ ಸಮಯ ಮಿತಿ"
      ],
      "correct": 0
     },
     {
      "q": "What did both assumption checks miss?",
      "qKn": "ಎರಡೂ ಊಹೆ ಪರಿಶೀಲನೆಗಳು ಏನನ್ನು ತಪ್ಪಿಸಿದವು?",
      "opts": [
       "A paraphrased assumption",
       "An identical string",
       "An empty list",
       "A number"
      ],
      "optsKn": [
       "ಬೇರೆ ಪದಗಳಲ್ಲಿ ಹೇಳಿದ ಊಹೆ",
       "ಒಂದೇ ಸ್ಟ್ರಿಂಗ್",
       "ಖಾಲಿ ಪಟ್ಟಿ",
       "ಸಂಖ್ಯೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
