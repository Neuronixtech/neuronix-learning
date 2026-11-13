module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b32156e",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Agent Instructions as Executable Constraints (Part 1 of 3) — Rules, Parsers and Checkers",
 "titleKn": "Agent ಸೂಚನೆಗಳು ಕಾರ್ಯಗತಗೊಳಿಸಬಹುದಾದ ನಿರ್ಬಂಧಗಳಾಗಿ (ಭಾಗ 1 / 3) — ನಿಯಮಗಳು, Parsers ಮತ್ತು Checkers",
 "desc": "Parse a Markdown rule file with validation, write one checker per rule and evaluate runs, treating missing evidence and typos as non-passing.",
 "descKn": "Markdown ನಿಯಮ ಫೈಲ್ ಅನ್ನು ಮಾನ್ಯತೆಯೊಂದಿಗೆ ಪಾರ್ಸ್ ಮಾಡಿ, ಪ್ರತಿ ನಿಯಮಕ್ಕೆ ಒಂದು checker ಬರೆದು ಓಟಗಳನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ, ಕಾಣೆಯಾದ ಸಾಕ್ಷ್ಯ ಮತ್ತು ಟೈಪೋಗಳನ್ನು ಪಾಸ್ ಆಗದವು ಎಂದು ಪರಿಗಣಿಸಿ.",
 "objectives": [
  "Name the five rule categories.",
  "Parse and validate a rule file.",
  "Return unknown for missing evidence.",
  "Gate on severity, not score.",
  "Treat an unknown checker as an error."
 ],
 "objectivesKn": [
  "ಐದು ನಿಯಮ ವರ್ಗಗಳನ್ನು ಹೆಸರಿಸಿ.",
  "ನಿಯಮ ಫೈಲ್ ಪಾರ್ಸ್ ಮಾಡಿ ಮಾನ್ಯಗೊಳಿಸಿ.",
  "ಕಾಣೆಯಾದ ಸಾಕ್ಷ್ಯಕ್ಕೆ unknown ಮರಳಿಸಿ.",
  "ಅಂಕದ ಮೇಲಲ್ಲ, ತೀವ್ರತೆಯ ಮೇಲೆ gate ಮಾಡಿ.",
  "ಅಜ್ಞಾತ checker ಅನ್ನು ದೋಷ ಎಂದು ಪರಿಗಣಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Agent Instructions as Executable Constraints (Part 1 of 3)",
    "textKn": "Agent ಸೂಚನೆಗಳು ಕಾರ್ಯಗತಗೊಳಿಸಬಹುದಾದ ನಿರ್ಬಂಧಗಳಾಗಿ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a Markdown rule file parsed with validation, five checkers and the gate decision. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind agent instructions as executable constraints (rule files, checkers, severities and gates), not the real software, and the run records are hand-written and no language model is involved, so no real LLM behaviour is measured. The pasted lesson said its main.py and rule_checker.py were not supplied, so the lab is our own implementation of the behaviour it describes. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಮಾನ್ಯತೆಯೊಂದಿಗೆ ಪಾರ್ಸ್ ಮಾಡಿದ Markdown ನಿಯಮ ಫೈಲ್, ಐದು checkers ಮತ್ತು gate ತೀರ್ಮಾನ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು agent ಸೂಚನೆಗಳು ಕಾರ್ಯಗತಗೊಳಿಸಬಹುದಾದ ನಿರ್ಬಂಧಗಳಾಗಿ (ನಿಯಮ ಫೈಲ್‌ಗಳು, checkers, ತೀವ್ರತೆಗಳು ಮತ್ತು gates) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು run ದಾಖಲೆಗಳು ಕೈಬರಹ ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ main.py ಮತ್ತು rule_checker.py ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Instructions You Can Check",
    "textKn": "ಪರಿಶೀಲಿಸಬಹುದಾದ ಸೂಚನೆಗಳು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Five Categories of Rule",
    "headingKn": "ಐದು ವರ್ಗದ ನಿಯಮಗಳು",
    "bodyEn": "\"Be careful and test thoroughly\" is an intention. An instruction becomes a constraint when a system can check whether it was followed. Rules fall into five categories: startup, forbidden, definition of done, uncertainty and approval. This part parses a Markdown rule file into a dataclass with validation, writes one checker per rule, evaluates two hand-written runs and shows what a missing record, a typo and a high score do to the decision.",
    "bodyKn": "\"ಎಚ್ಚರಿಕೆಯಿಂದಿರಿ ಮತ್ತು ಚೆನ್ನಾಗಿ ಪರೀಕ್ಷಿಸಿ\" ಒಂದು ಉದ್ದೇಶ. ಅನುಸರಿಸಲಾಗಿದೆಯೇ ಎಂದು ವ್ಯವಸ್ಥೆ ಪರಿಶೀಲಿಸಬಹುದಾದಾಗ ಸೂಚನೆ ನಿರ್ಬಂಧವಾಗುತ್ತದೆ. ನಿಯಮಗಳು ಐದು ವರ್ಗಗಳಲ್ಲಿ ಬೀಳುತ್ತವೆ: startup, forbidden, definition of done, uncertainty ಮತ್ತು approval. ಈ ಭಾಗ Markdown ನಿಯಮ ಫೈಲ್ ಅನ್ನು ಮಾನ್ಯತೆಯೊಂದಿಗೆ dataclass ಗೆ ಪಾರ್ಸ್ ಮಾಡಿ, ಪ್ರತಿ ನಿಯಮಕ್ಕೆ ಒಂದು checker ಬರೆದು, ಎರಡು ಕೈಬರಹ ಓಟಗಳನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ, ಕಾಣೆಯಾದ ದಾಖಲೆ, ಟೈಪೋ ಮತ್ತು ಹೆಚ್ಚಿನ ಅಂಕ ತೀರ್ಮಾನಕ್ಕೆ ಏನು ಮಾಡುತ್ತವೆ ಎಂದು ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "From Rule File to Verdict",
    "headingKn": "ನಿಯಮ ಫೈಲ್‌ನಿಂದ ತೀರ್ಪಿಗೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Rule file to verdict</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">rules.md</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">human reviewed</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">parser</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">validates</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">checkers</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">evidence in, verdict out</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">gate</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">severity decides</text><path d=\"M90,47 H110 M190,47 H210 M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">an instruction is as enforceable as its checker</text></svg>",
    "captionEn": "Evidence goes in; a pass, fail or unknown comes out.",
    "captionKn": "ಸಾಕ್ಷ್ಯ ಒಳಗೆ; ಪಾಸ್, ವಿಫಲ ಅಥವಾ ಅಜ್ಞಾತ ಹೊರಗೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The five categories",
    "headingKn": "ಐದು ವರ್ಗಗಳು",
    "headers": [
     "Category",
     "Question",
     "Example checker"
    ],
    "rows": [
     [
      "startup",
      "what must be true before work starts",
      "state read before the first edit"
     ],
     [
      "forbidden",
      "what must never happen",
      "no protected-file writes"
     ],
     [
      "definition of done",
      "what proves completion",
      "tests ran with exit code 0"
     ],
     [
      "uncertainty",
      "what to do when information is missing",
      "no assumption of an open question"
     ],
     [
      "approval",
      "what needs a human",
      "recorded approval for the exact target"
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
    "filename": "ic_1.py",
    "headingEn": "Rule dataclass, parser and five checkers",
    "headingKn": "Rule dataclass, parser ಮತ್ತು ಐದು checkers",
    "descEn": "parse_rules reads each ## heading and its fields and refuses an unknown category or severity, a missing field or a duplicate slug. Each checker returns True, False or None for missing evidence. evaluate maps that to pass, fail, unknown or error, and release_allowed looks only at block-severity rules.",
    "descKn": "parse_rules ಪ್ರತಿ ## ಶೀರ್ಷಿಕೆ ಮತ್ತು ಅದರ ಕ್ಷೇತ್ರಗಳನ್ನು ಓದಿ ಅಜ್ಞಾತ ವರ್ಗ ಅಥವಾ ತೀವ್ರತೆ, ಕಾಣೆಯಾದ ಕ್ಷೇತ್ರ ಅಥವಾ ನಕಲು slug ತಿರಸ್ಕರಿಸುತ್ತದೆ. ಪ್ರತಿ checker ಕಾಣೆಯಾದ ಸಾಕ್ಷ್ಯಕ್ಕೆ True, False ಅಥವಾ None ಮರಳಿಸುತ್ತದೆ. evaluate ಅದನ್ನು pass, fail, unknown ಅಥವಾ error ಗೆ ನಕ್ಷೆ ಮಾಡುತ್ತದೆ, ಮತ್ತು release_allowed block-ತೀವ್ರತೆಯ ನಿಯಮಗಳನ್ನು ಮಾತ್ರ ನೋಡುತ್ತದೆ.",
    "code": "@dataclass(frozen=True)\nclass Rule:\n    slug: str\n    category: str\n    severity: str\n    check: str\n    description: str\n\n\ndef parse_rules(md):\n    rules, cur, seen = [], None, set()\n\n    def close():\n        if cur is None:\n            return\n        missing = {\"category\", \"severity\", \"check\", \"description\"} - cur.keys()\n        if missing:\n            raise ValueError(f\"{cur['slug']}: missing fields {sorted(missing)}\")\n        if cur[\"category\"] not in CATEGORIES:\n            raise ValueError(f\"{cur['slug']}: unknown category {cur['category']!r}\")\n        if cur[\"severity\"] not in SEVERITIES:\n            raise ValueError(f\"{cur['slug']}: unknown severity {cur['severity']!r}\")\n        if cur[\"slug\"] in seen:\n            raise ValueError(f\"duplicate slug {cur['slug']}\")\n        seen.add(cur[\"slug\"])\n        rules.append(Rule(**cur))\n\n    for line in md.splitlines():\n        m = re.match(r\"^## (\\S+)\\s*$\", line)\n        if m:\n            close()\n            cur = {\"slug\": m.group(1)}\n            continue\n        f = re.match(r\"^- (\\w+):\\s*(.+)$\", line)\n        if f and cur is not None:\n            cur[f.group(1)] = f.group(2).strip()\n    close()\n    return rules\n\n\ndef startup_before_edit(run):\n    a, b = run.get(\"initialized_at\"), run.get(\"first_edit_at\")\n    return None if a is None or b is None else a < b\n\n\ndef no_protected_file_writes(run):\n    if \"changed_paths\" not in run:\n        return None\n    return not (set(run.get(\"protected_paths\", [])) & set(run[\"changed_paths\"]))\n\n\ndef tests_before_completion(run):\n    if \"tests_ran\" not in run:\n        return None\n    return run[\"tests_ran\"] is True and run.get(\"test_exit_code\") == 0\n\n\ndef asked_before_assuming(run):\n    return not (set(run.get(\"unresolved_questions\", [])) & set(run.get(\"assumptions_made\", [])))\n\n\ndef approval_before_production_write(run):\n    if not run.get(\"production_write_attempted\"):\n        return True\n    a = run.get(\"approval\")\n    return isinstance(a, dict) and a.get(\"approved\") is True and a.get(\"target\") == run.get(\"production_target\") and a.get(\"recorded_before_action\") is True\n\n\nCHECKS = {f.__name__: f for f in (startup_before_edit, no_protected_file_writes, tests_before_completion, asked_before_assuming, approval_before_production_write)}\n\n\ndef evaluate(rule, run):\n    fn = CHECKS.get(rule.check)\n    if fn is None:\n        return \"error\", f\"unknown checker {rule.check}\"\n    try:\n        r = fn(run)\n    except Exception as e:\n        return \"error\", type(e).__name__\n    return (\"unknown\", \"evidence missing\") if r is None else ((\"pass\", \"ok\") if r else (\"fail\", \"evidence violates the rule\"))\n\n\ndef release_allowed(results):\n    return not any(st != \"pass\" and sev == \"block\" for _, st, sev in results)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ic_1.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() parses the rules, evaluates a clean and a violating run, feeds the parser four broken files, checks missing evidence, contrasts a score with the gate and tries a rule with a mistyped checker.",
    "descKn": "main() ನಿಯಮಗಳನ್ನು ಪಾರ್ಸ್ ಮಾಡಿ, ಸ್ವಚ್ಛ ಮತ್ತು ಉಲ್ಲಂಘನೆಯ ಓಟ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ, parser ಗೆ ನಾಲ್ಕು ಮುರಿದ ಫೈಲ್ ನೀಡಿ, ಕಾಣೆಯಾದ ಸಾಕ್ಷ್ಯ ಪರಿಶೀಲಿಸಿ, ಅಂಕ ಮತ್ತು gate ಹೋಲಿಸಿ ತಪ್ಪಾಗಿ ಟೈಪ್ ಮಾಡಿದ checker ಇರುವ ನಿಯಮ ಪ್ರಯತ್ನಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    rules = parse_rules(RULES_MD)\n\n    section(\"1. Genuinely running: parse the rule file and check two runs\")\n    print(f\"parsed {len(rules)} rules:\", [(r.slug, r.category, r.severity) for r in rules])\n    clean = {\"initialized_at\": 1, \"first_edit_at\": 2, \"protected_paths\": [\"deploy/release.py\"], \"changed_paths\": [\"src/app.py\"], \"tests_ran\": True, \"test_exit_code\": 0,\n             \"unresolved_questions\": [], \"assumptions_made\": [], \"production_write_attempted\": False}\n    violating = dict(clean, changed_paths=[\"src/app.py\", \"deploy/release.py\"], unresolved_questions=[\"Which region?\"], assumptions_made=[\"Which region?\"])\n    for name, run in ((\"clean run\", clean), (\"violating run\", violating)):\n        res = [(r.slug, evaluate(r, run)[0], r.severity) for r in rules]\n        print(f\"{name}: \" + \", \".join(f\"{s}={st}\" for s, st, _ in res) + f\" | release allowed: {release_allowed(res)}\")\n    print(\"the violating run failed a block rule (protected file) and a warn rule (assumption without asking); the block failure stops release and the warning is recorded without stopping it\")\n\n    section(\"2. Genuinely checking: the parser refuses a broken rule file\")\n    broken = {\"unknown category\": RULES_MD.replace(\"category: startup\", \"category: hope\"), \"missing check field\": RULES_MD.replace(\"- check: startup_before_edit\\n\", \"\"),\n              \"duplicate slug\": RULES_MD + \"\\n## startup-before-edit\\n- category: startup\\n- severity: warn\\n- check: startup_before_edit\\n- description: again\\n\", \"bad severity\": RULES_MD.replace(\"severity: warn\", \"severity: loud\")}\n    for name, md in broken.items():\n        try:\n            parse_rules(md)\n            print(f\"{name:20} -> accepted (wrong)\")\n        except ValueError as e:\n            print(f\"{name:20} -> refused: {e}\")\n    print(\"a rule file that quietly loses a rule would weaken the system, so each malformed entry stops the load; the parser does not check that the named checker exists, which evaluate() reports as an error at run time\")\n\n    section(\"3. Genuinely checking: missing evidence is not a pass\")\n    for name, run in ((\"no test record at all\", {}), (\"tests_ran true but no exit code\", {\"tests_ran\": True}), (\"no startup timestamps\", {\"first_edit_at\": 5})):\n        out = [(r.slug, evaluate(r, run)) for r in rules if r.check in (\"tests_before_completion\", \"startup_before_edit\")]\n        print(f\"{name:34} -> {out}\")\n    print(\"tests_ran alone, with no exit code, failed rather than passing, and an empty record returned unknown; treating absent evidence as success would let an agent comply by saying nothing\")\n\n    section(\"4. Genuinely checking: a score is not the gate\")\n    results = [(\"a\", \"pass\", \"info\")] * 9 + [(\"protected-file\", \"fail\", \"block\")]\n    score = sum(st == \"pass\" for _, st, _ in results) / len(results)\n    print(f\"9 of 10 rules pass, score {score:.0%}, release allowed: {release_allowed(results)}\")\n    print(\"a 90 percent compliance score still blocks release because one block-severity rule failed; the summary number and the policy decision answer different questions\")\n\n    section(\"5. Genuinely checking: an unknown checker is an error, not a skipped rule\")\n    ghost = Rule(\"ghost\", \"forbidden\", \"block\", \"does_not_exist\", \"typo in the checker name\")\n    print(\"ghost rule ->\", evaluate(ghost, clean), \"| release allowed:\", release_allowed([(\"ghost\", evaluate(ghost, clean)[0], \"block\")]))\n    print(\"a typo in a checker name would otherwise remove a mandatory control without any visible failure\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: parse the rule file and check two runs ---\nparsed 5 rules: [('startup-before-edit', 'startup', 'block'), ('no-protected-file-writes', 'forbidden', 'block'), ('tests-before-completion', 'definition-of-done', 'block'), ('ask-before-assuming', 'uncertainty', 'warn'), ('approval-before-production-write', 'approval', 'block')]\nclean run: startup-before-edit=pass, no-protected-file-writes=pass, tests-before-completion=pass, ask-before-assuming=pass, approval-before-production-write=pass | release allowed: True\nviolating run: startup-before-edit=pass, no-protected-file-writes=fail, tests-before-completion=pass, ask-before-assuming=fail, approval-before-production-write=pass | release allowed: False\nthe violating run failed a block rule (protected file) and a warn rule (assumption without asking); the block failure stops release and the warning is recorded without stopping it\n\n--- 2. Genuinely checking: the parser refuses a broken rule file ---\nunknown category     -> refused: startup-before-edit: unknown category 'hope'\nmissing check field  -> refused: startup-before-edit: missing fields ['check']\nduplicate slug       -> refused: duplicate slug startup-before-edit\nbad severity         -> refused: ask-before-assuming: unknown severity 'loud'\na rule file that quietly loses a rule would weaken the system, so each malformed entry stops the load; the parser does not check that the named checker exists, which evaluate() reports as an error at run time\n\n--- 3. Genuinely checking: missing evidence is not a pass ---\nno test record at all              -> [('startup-before-edit', ('unknown', 'evidence missing')), ('tests-before-completion', ('unknown', 'evidence missing'))]\ntests_ran true but no exit code    -> [('startup-before-edit', ('unknown', 'evidence missing')), ('tests-before-completion', ('fail', 'evidence violates the rule'))]\nno startup timestamps              -> [('startup-before-edit', ('unknown', 'evidence missing')), ('tests-before-completion', ('unknown', 'evidence missing'))]\ntests_ran alone, with no exit code, failed rather than passing, and an empty record returned unknown; treating absent evidence as success would let an agent comply by saying nothing\n\n--- 4. Genuinely checking: a score is not the gate ---\n9 of 10 rules pass, score 90%, release allowed: False\na 90 percent compliance score still blocks release because one block-severity rule failed; the summary number and the policy decision answer different questions\n\n--- 5. Genuinely checking: an unknown checker is an error, not a skipped rule ---\nghost rule -> ('error', 'unknown checker does_not_exist') | release allowed: False\na typo in a checker name would otherwise remove a mandatory control without any visible failure"
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
    "headingEn": "Experiment 1: Parse the rule file and check two runs",
    "headingKn": "ಪ್ರಯೋಗ 1: Parse the rule file and check two runs",
    "bodyEn": "What it ran: Parse the rule file and check two runs. What the lab concluded: the violating run failed a block rule (protected file) and a warn rule (assumption without asking); the block failure stops release and the warning is recorded without stopping it",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Parse the rule file and check two runs. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the violating run failed a block rule (protected file) and a warn rule (assumption without asking); the block failure stops release and the warning is recorded without stopping it"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: parse the rule file and check two runs ---\nparsed 5 rules: [('startup-before-edit', 'startup', 'block'), ('no-protected-file-writes', 'forbidden', 'block'), ('tests-before-completion', 'definition-of-done', 'block'), ('ask-before-assuming', 'uncertainty', 'warn'…\nclean run: startup-before-edit=pass, no-protected-file-writes=pass, tests-before-completion=pass, ask-before-assuming=pass, approval-before-production-write=pass | release allowed: True\nviolating run: startup-before-edit=pass, no-protected-file-writes=fail, tests-before-completion=pass, ask-before-assuming=fail, approval-before-production-write=pass | release allowed: False"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: The parser refuses a broken rule file",
    "headingKn": "ಪ್ರಯೋಗ 2: The parser refuses a broken rule file",
    "bodyEn": "What it ran: The parser refuses a broken rule file. What the lab concluded: a rule file that quietly loses a rule would weaken the system, so each malformed entry stops the load; the parser does not check that the named checker exists, which evaluate() reports as an error at run time",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The parser refuses a broken rule file. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a rule file that quietly loses a rule would weaken the system, so each malformed entry stops the load; the parser does not check that the named checker exists, which evaluate() reports as an error at run time"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely checking: the parser refuses a broken rule file ---\nunknown category     -> refused: startup-before-edit: unknown category 'hope'\nmissing check field  -> refused: startup-before-edit: missing fields ['check']\nduplicate slug       -> refused: duplicate slug startup-before-edit\nbad severity         -> refused: ask-before-assuming: unknown severity 'loud'"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Missing evidence is not a pass",
    "headingKn": "ಪ್ರಯೋಗ 3: Missing evidence is not a pass",
    "bodyEn": "What it ran: Missing evidence is not a pass. What the lab concluded: tests_ran alone, with no exit code, failed rather than passing, and an empty record returned unknown; treating absent evidence as success would let an agent comply by saying nothing",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Missing evidence is not a pass. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): tests_ran alone, with no exit code, failed rather than passing, and an empty record returned unknown; treating absent evidence as success would let an agent comply by saying nothing"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely checking: missing evidence is not a pass ---\nno test record at all              -> [('startup-before-edit', ('unknown', 'evidence missing')), ('tests-before-completion', ('unknown', 'evidence missing'))]\ntests_ran true but no exit code    -> [('startup-before-edit', ('unknown', 'evidence missing')), ('tests-before-completion', ('fail', 'evidence violates the rule'))]\nno startup timestamps              -> [('startup-before-edit', ('unknown', 'evidence missing')), ('tests-before-completion', ('unknown', 'evidence missing'))]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A score is not the gate",
    "headingKn": "ಪ್ರಯೋಗ 4: A score is not the gate",
    "bodyEn": "What it ran: A score is not the gate. What the lab concluded: a 90 percent compliance score still blocks release because one block-severity rule failed; the summary number and the policy decision answer different questions",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A score is not the gate. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a 90 percent compliance score still blocks release because one block-severity rule failed; the summary number and the policy decision answer different questions"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely checking: a score is not the gate ---\n9 of 10 rules pass, score 90%, release allowed: False"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: An unknown checker is an error, not a skipped rule",
    "headingKn": "ಪ್ರಯೋಗ 5: An unknown checker is an error, not a skipped rule",
    "bodyEn": "What it ran: An unknown checker is an error, not a skipped rule. What the lab concluded: a typo in a checker name would otherwise remove a mandatory control without any visible failure",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: An unknown checker is an error, not a skipped rule. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a typo in a checker name would otherwise remove a mandatory control without any visible failure"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely checking: an unknown checker is an error, not a skipped rule ---\nghost rule -> ('error', 'unknown checker does_not_exist') | release allowed: False"
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
    "headingEn": "Genuinely Found: A Block Failure Stops Release and a Warning Does Not",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Block ವೈಫಲ್ಯ release ನಿಲ್ಲಿಸುತ್ತದೆ, ಎಚ್ಚರಿಕೆ ನಿಲ್ಲಿಸುವುದಿಲ್ಲ",
    "bodyEn": "Section 1: five rules parsed. The clean run passed every rule and release was allowed; the violating run failed no-protected-file-writes (block) and ask-before-assuming (warn) and release was blocked. Section 2: an unknown category, a missing check field, a duplicate slug and an unknown severity were each refused with a specific message, rather than quietly dropping a rule.",
    "bodyKn": "ವಿಭಾಗ 1: ಐದು ನಿಯಮಗಳು ಪಾರ್ಸ್ ಆದವು. ಸ್ವಚ್ಛ ಓಟ ಪ್ರತಿ ನಿಯಮ ಪಾಸ್ ಮಾಡಿ release ಅನುಮತಿಸಲ್ಪಟ್ಟಿತು; ಉಲ್ಲಂಘನೆ ಓಟ no-protected-file-writes (block) ಮತ್ತು ask-before-assuming (warn) ವಿಫಲಗೊಳಿಸಿ release ತಡೆಯಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 2: ಅಜ್ಞಾತ ವರ್ಗ, ಕಾಣೆಯಾದ check ಕ್ಷೇತ್ರ, ನಕಲು slug ಮತ್ತು ಅಜ್ಞಾತ ತೀವ್ರತೆ ಪ್ರತಿಯೊಂದೂ ನಿಯಮವನ್ನು ಮೌನವಾಗಿ ಬಿಡುವ ಬದಲು ನಿರ್ದಿಷ್ಟ ಸಂದೇಶದೊಂದಿಗೆ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Missing Evidence, Scores and Typos",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕಾಣೆಯಾದ ಸಾಕ್ಷ್ಯ, ಅಂಕಗಳು ಮತ್ತು ಟೈಪೋಗಳು",
    "bodyEn": "Section 3: an empty record gave unknown for the tests and startup rules, and tests_ran true with no exit code failed rather than passing. Section 4: 9 of 10 rules passing is a 90 percent score and release was still blocked because the failed rule had block severity. Section 5: a rule naming a checker that does not exist evaluated to error and blocked release.",
    "bodyKn": "ವಿಭಾಗ 3: ಖಾಲಿ ದಾಖಲೆ tests ಮತ್ತು startup ನಿಯಮಗಳಿಗೆ unknown ನೀಡಿತು, ಮತ್ತು exit code ಇಲ್ಲದ tests_ran true ಪಾಸ್ ಆಗುವ ಬದಲು ವಿಫಲವಾಯಿತು. ವಿಭಾಗ 4: 10 ರಲ್ಲಿ 9 ನಿಯಮಗಳು ಪಾಸ್ ಎಂದರೆ 90 ಶೇಕಡಾ ಅಂಕ ಮತ್ತು ವಿಫಲ ನಿಯಮ block ತೀವ್ರತೆಯದ್ದಾದ್ದರಿಂದ release ಇನ್ನೂ ತಡೆಯಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 5: ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲದ checker ಹೆಸರಿಸಿದ ನಿಯಮ error ಎಂದು ಮೌಲ್ಯಮಾಪನವಾಗಿ release ತಡೆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A rule that names a checker can be tested, versioned and enforced; a rule that is only prose cannot, and a checker only proves the claim it actually evaluates.",
    "bodyKn": "Checker ಹೆಸರಿಸುವ ನಿಯಮ ಪರೀಕ್ಷಿಸಬಹುದು, ಆವೃತ್ತಿ ಮಾಡಬಹುದು ಮತ್ತು ಜಾರಿಗೊಳಿಸಬಹುದು; ಕೇವಲ ಗದ್ಯವಾದ ನಿಯಮ ಆಗುವುದಿಲ್ಲ, ಮತ್ತು checker ತಾನು ನಿಜವಾಗಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡುವ ಹೇಳಿಕೆಯನ್ನು ಮಾತ್ರ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"no failures means compliance.\" An empty record produced unknown, not pass.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ವೈಫಲ್ಯ ಇಲ್ಲ ಎಂದರೆ ಅನುಸರಣೆ.\" ಖಾಲಿ ದಾಖಲೆ pass ಅಲ್ಲ, unknown ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Operational rule: a condition with evidence and a checker. Slug: a stable rule id. Severity: block, warn or info. Unknown: evidence is missing. Gate: the decision that uses severities, not the average.",
    "bodyKn": "Operational rule: ಸಾಕ್ಷ್ಯ ಮತ್ತು checker ಇರುವ ಷರತ್ತು. Slug: ಸ್ಥಿರ ನಿಯಮ id. Severity: block, warn ಅಥವಾ info. Unknown: ಸಾಕ್ಷ್ಯ ಕಾಣೆಯಾಗಿದೆ. Gate: ಸರಾಸರಿಯಲ್ಲ, ತೀವ್ರತೆಗಳನ್ನು ಬಳಸುವ ತೀರ್ಮಾನ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Five rules parsed and a violating run was blocked by one block-severity failure. 2) Four malformed rule files were refused. 3) Missing evidence gave unknown. 4) A 90 percent score still blocked release. 5) A mistyped checker name produced error and blocked.",
    "bodyKn": "1) ಐದು ನಿಯಮಗಳು ಪಾರ್ಸ್ ಆದವು ಮತ್ತು ಉಲ್ಲಂಘನೆ ಓಟ ಒಂದು block-ತೀವ್ರತೆಯ ವೈಫಲ್ಯದಿಂದ ತಡೆಯಲ್ಪಟ್ಟಿತು. 2) ನಾಲ್ಕು ತಪ್ಪಾದ ನಿಯಮ ಫೈಲ್‌ಗಳು ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟವು. 3) ಕಾಣೆಯಾದ ಸಾಕ್ಷ್ಯ unknown ನೀಡಿತು. 4) 90 ಶೇಕಡಾ ಅಂಕ ಇನ್ನೂ release ತಡೆಯಿತು. 5) ತಪ್ಪಾಗಿ ಟೈಪ್ ಮಾಡಿದ checker ಹೆಸರು error ನೀಡಿ ತಡೆಯಿತು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B ic_1.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B ic_1.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B ic_1.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B ic_1.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What happened to the violating run?",
      "qKn": "ಉಲ್ಲಂಘನೆ ಓಟಕ್ಕೆ ಏನಾಯಿತು?",
      "opts": [
       "Release was allowed",
       "Release was blocked by a block-severity failure",
       "It was ignored",
       "It crashed"
      ],
      "optsKn": [
       "Release ಅನುಮತಿಸಲ್ಪಟ್ಟಿತು",
       "Block-ತೀವ್ರತೆಯ ವೈಫಲ್ಯದಿಂದ release ತಡೆಯಲ್ಪಟ್ಟಿತು",
       "ನಿರ್ಲಕ್ಷಿಸಲ್ಪಟ್ಟಿತು",
       "ಕ್ರ್ಯಾಶ್ ಆಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What did an empty run record produce for the tests rule?",
      "qKn": "ಖಾಲಿ ಓಟ ದಾಖಲೆ tests ನಿಯಮಕ್ಕೆ ಏನು ನೀಡಿತು?",
      "opts": [
       "pass",
       "fail",
       "unknown",
       "error"
      ],
      "optsKn": [
       "pass",
       "fail",
       "unknown",
       "error"
      ],
      "correct": 2
     },
     {
      "q": "Why did a 90 percent score still block release?",
      "qKn": "90 ಶೇಕಡಾ ಅಂಕ ಇನ್ನೂ release ಏಕೆ ತಡೆಯಿತು?",
      "opts": [
       "The failed rule had block severity",
       "The score was too low",
       "It had no score",
       "The parser failed"
      ],
      "optsKn": [
       "ವಿಫಲ ನಿಯಮ block ತೀವ್ರತೆಯದ್ದಾಗಿತ್ತು",
       "ಅಂಕ ತುಂಬಾ ಕಡಿಮೆ",
       "ಅದಕ್ಕೆ ಅಂಕ ಇರಲಿಲ್ಲ",
       "Parser ವಿಫಲವಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What did a rule naming a nonexistent checker evaluate to?",
      "qKn": "ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲದ checker ಹೆಸರಿಸಿದ ನಿಯಮ ಯಾವುದಕ್ಕೆ ಮೌಲ್ಯಮಾಪನವಾಯಿತು?",
      "opts": [
       "pass",
       "error",
       "skip",
       "warn"
      ],
      "optsKn": [
       "pass",
       "error",
       "skip",
       "warn"
      ],
      "correct": 1
     },
     {
      "q": "How many malformed rule files did the parser refuse?",
      "qKn": "Parser ಎಷ್ಟು ತಪ್ಪಾದ ನಿಯಮ ಫೈಲ್‌ಗಳನ್ನು ತಿರಸ್ಕರಿಸಿತು?",
      "opts": [
       "0",
       "2",
       "4",
       "5"
      ],
      "optsKn": [
       "0",
       "2",
       "4",
       "5"
      ],
      "correct": 2
     }
    ]
   }
  }
 ]
};
