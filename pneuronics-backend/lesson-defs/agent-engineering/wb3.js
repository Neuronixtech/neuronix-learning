module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321568",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Agent Workbench Engineering: Why Capable Models Still Fail (Part 3 of 3) — Preflight Audit and Operating the Workbench",
 "titleKn": "Agent Workbench ಎಂಜಿನಿಯರಿಂಗ್: ಸಮರ್ಥ ಮಾದರಿಗಳು ಏಕೆ ಇನ್ನೂ ವಿಫಲವಾಗುತ್ತವೆ (ಭಾಗ 3 / 3) — ಪೂರ್ವ-ಪರಿಶೀಲನೆ Audit ಮತ್ತು Workbench ನಿರ್ವಹಣೆ",
 "desc": "Audit a real workbench at three levels, decide PASS, WARN or BLOCK, check evidence revisions and handoffs, and test the audit by removing controls.",
 "descKn": "ನಿಜ workbench ಅನ್ನು ಮೂರು ಹಂತಗಳಲ್ಲಿ audit ಮಾಡಿ, PASS, WARN ಅಥವಾ BLOCK ನಿರ್ಧರಿಸಿ, ಸಾಕ್ಷ್ಯ revisions ಮತ್ತು handoffs ಪರಿಶೀಲಿಸಿ ಮತ್ತು ನಿಯಂತ್ರಣಗಳನ್ನು ತೆಗೆದು audit ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Audit presence, validity and enforcement.",
  "Block on critical missing controls.",
  "Detect stale evidence.",
  "Validate handoffs.",
  "Test the audit with a mutation."
 ],
 "objectivesKn": [
  "ಉಪಸ್ಥಿತಿ, ಮಾನ್ಯತೆ ಮತ್ತು ಜಾರಿಯನ್ನು audit ಮಾಡಿ.",
  "ನಿರ್ಣಾಯಕ ಕಾಣೆಯಾದ ನಿಯಂತ್ರಣಗಳ ಮೇಲೆ ತಡೆಯಿರಿ.",
  "ಹಳೆಯ ಸಾಕ್ಷ್ಯ ಪತ್ತೆ ಮಾಡಿ.",
  "Handoffs ಮಾನ್ಯಗೊಳಿಸಿ.",
  "Mutation ಮೂಲಕ audit ಪರೀಕ್ಷಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Agent Workbench Engineering: Why Capable Models Still Fail (Part 3 of 3)",
    "textKn": "Agent Workbench ಎಂಜಿನಿಯರಿಂಗ್: ಸಮರ್ಥ ಮಾದರಿಗಳು ಏಕೆ ಇನ್ನೂ ವಿಫಲವಾಗುತ್ತವೆ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: a preflight audit at three levels, PASS/WARN/BLOCK decisions, stale evidence, handoff validation and a mutation test of the audit. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind agent workbench engineering (instructions, state, scope, feedback, verification, review and handoff), not the real software, and the agent is a scripted function that edits a real temporary repository and no language model is involved, so no real LLM behaviour is measured. The pasted lesson said its original code/main.py was not supplied, so the lab is our own implementation of the behaviour it describes. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಮೂರು ಹಂತಗಳಲ್ಲಿ ಪೂರ್ವ-ಪರಿಶೀಲನೆ audit, PASS/WARN/BLOCK ತೀರ್ಮಾನಗಳು, ಹಳೆಯ ಸಾಕ್ಷ್ಯ, handoff ಮಾನ್ಯತೆ ಮತ್ತು audit ನ ರೂಪಾಂತರ ಪರೀಕ್ಷೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು agent workbench ಎಂಜಿನಿಯರಿಂಗ್ (ಸೂಚನೆ, ಸ್ಥಿತಿ, ವ್ಯಾಪ್ತಿ, ಪ್ರತಿಕ್ರಿಯೆ, ಪರಿಶೀಲನೆ, ಪರಿಶೀಲಕ ಮತ್ತು handoff) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು agent ನಿಜ ತಾತ್ಕಾಲಿಕ repository ಅನ್ನು ಸಂಪಾದಿಸುವ ಸ್ಕ್ರಿಪ್ಟ್ ಫಂಕ್ಷನ್ ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಮೂಲ code/main.py ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Checking the Workbench Itself",
    "textKn": "Workbench ಅನ್ನೇ ಪರಿಶೀಲಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "An Audit That Changes What May Run",
    "headingKn": "ಏನು ಓಡಬಹುದು ಎಂಬುದನ್ನು ಬದಲಿಸುವ Audit",
    "bodyEn": "An audit that only produces a report changes nothing. This part writes a preflight audit that inspects a real temporary workbench for each of the seven surfaces, grades each finding PASS, WARN or BLOCK, and refuses to start when a critical surface is missing or corrupt. It then asks whether the scope boundary is enforced, checks that evidence belongs to the current revision, validates handoffs and tests the audit itself by deliberately removing controls.",
    "bodyKn": "ವರದಿ ಮಾತ್ರ ಉತ್ಪಾದಿಸುವ audit ಏನನ್ನೂ ಬದಲಿಸುವುದಿಲ್ಲ. ಈ ಭಾಗ ಏಳು ಮೇಲ್ಮೈಗಳಿಗೆ ನಿಜ ತಾತ್ಕಾಲಿಕ workbench ಅನ್ನು ಪರೀಕ್ಷಿಸುವ ಪೂರ್ವ-ಪರಿಶೀಲನೆ audit ಬರೆದು, ಪ್ರತಿ ಕಂಡುಕೊಂಡದ್ದನ್ನು PASS, WARN ಅಥವಾ BLOCK ಎಂದು ದರ್ಜೆ ಮಾಡಿ, ನಿರ್ಣಾಯಕ ಮೇಲ್ಮೈ ಕಾಣೆಯಾದರೆ ಅಥವಾ ಹಾಳಾದರೆ ಆರಂಭಿಸಲು ನಿರಾಕರಿಸುತ್ತದೆ. ನಂತರ ವ್ಯಾಪ್ತಿ ಗಡಿ ಜಾರಿಯಲ್ಲಿದೆಯೇ ಕೇಳಿ, ಸಾಕ್ಷ್ಯ ಪ್ರಸ್ತುತ revision ಗೆ ಸೇರಿದೆ ಎಂದು ಪರಿಶೀಲಿಸಿ, handoffs ಮಾನ್ಯಗೊಳಿಸಿ ಮತ್ತು ನಿಯಂತ್ರಣಗಳನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ತೆಗೆದು audit ಅನ್ನೇ ಪರೀಕ್ಷಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Audit Before the Agent Starts",
    "headingKn": "Agent ಆರಂಭಿಸುವ ಮುನ್ನ Audit",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Audit before the agent starts</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">presence</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">does it exist</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">validity</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">does it parse</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">enforcement</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">is it blocked</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">PASS WARN BLOCK</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">severity decides start</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">only the third level tests the boundary</text></svg>",
    "captionEn": "Presence, validity, enforcement.",
    "captionKn": "ಉಪಸ್ಥಿತಿ, ಮಾನ್ಯತೆ, ಜಾರಿ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Audit levels and statuses",
    "headingKn": "Audit ಹಂತಗಳು ಮತ್ತು ಸ್ಥಿತಿಗಳು",
    "headers": [
     "Level",
     "Question",
     "Example"
    ],
    "rows": [
     [
      "Presence",
      "does the artifact exist",
      "is there a scope file"
     ],
     [
      "Validity",
      "is it usable",
      "does the JSON parse"
     ],
     [
      "Enforcement",
      "does the runtime honour it",
      "is a forbidden write actually blocked"
     ],
     [
      "Status",
      "PASS, WARN or BLOCK",
      "BLOCK stops the task from starting"
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
    "filename": "wb_3.py",
    "headingEn": "The audit, the guarded writer, handoff and staleness checks",
    "headingKn": "Audit, ಕಾವಲು ಬರಹಗಾರ, handoff ಮತ್ತು ಹಳೆಯತನ ಪರಿಶೀಲನೆ",
    "descEn": "audit checks each surface file for presence and valid JSON, grades missing critical surfaces BLOCK and others WARN, and probes enforcement by attempting a write outside scope. validate_handoff requires seven fields and a non-blank next action. stale_check compares the evidence revision with the code revision.",
    "descKn": "audit ಪ್ರತಿ ಮೇಲ್ಮೈ ಫೈಲ್‌ನ ಉಪಸ್ಥಿತಿ ಮತ್ತು ಮಾನ್ಯ JSON ಪರಿಶೀಲಿಸಿ, ಕಾಣೆಯಾದ ನಿರ್ಣಾಯಕ ಮೇಲ್ಮೈಗಳನ್ನು BLOCK ಮತ್ತು ಇತರವನ್ನು WARN ಎಂದು ದರ್ಜೆ ಮಾಡಿ, ವ್ಯಾಪ್ತಿ ಹೊರಗಿನ ಬರಹ ಪ್ರಯತ್ನಿಸಿ ಜಾರಿಯನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ. validate_handoff ಏಳು ಕ್ಷೇತ್ರಗಳು ಮತ್ತು ಖಾಲಿಯಲ್ಲದ next action ಬೇಕು. stale_check ಸಾಕ್ಷ್ಯ revision ಅನ್ನು ಕೋಡ್ revision ನೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ.",
    "code": "class GuardedWriter:\n    \"\"\"Enforces the scope file at the point of writing.\"\"\"\n    def __init__(self, root, allowed):\n        self.root, self.allowed = Path(root), set(allowed)\n\n    def write(self, rel, text):\n        if rel not in self.allowed:\n            raise PermissionError(f\"write to {rel} blocked by scope\")\n        (self.root / rel).write_text(text, encoding=\"utf-8\")\n\n\ndef audit(root, enforce_probe=True):\n    root = Path(root)\n    findings = []\n    for s in SURFACES:\n        p = root / FILES[s]\n        if not p.exists():\n            findings.append((s, \"BLOCK\" if s in CRITICAL else \"WARN\", \"missing\"))\n            continue\n        if p.suffix == \".json\":\n            try:\n                json.loads(p.read_text(encoding=\"utf-8\"))\n            except json.JSONDecodeError:\n                findings.append((s, \"BLOCK\" if s in CRITICAL else \"WARN\", \"present but invalid JSON\"))\n                continue\n        findings.append((s, \"PASS\", \"present and parses\"))\n    if enforce_probe and (root / FILES[\"scope\"]).exists():\n        try:\n            allowed = json.loads((root / FILES[\"scope\"]).read_text(encoding=\"utf-8\")).get(\"allowed\", [])\n        except Exception:\n            allowed = []\n        w = GuardedWriter(root, allowed)\n        try:\n            w.write(\"release.sh\", \"x\")\n            findings.append((\"scope\", \"BLOCK\", \"ENFORCEMENT: a write outside scope succeeded\"))\n        except PermissionError:\n            findings.append((\"scope\", \"PASS\", \"ENFORCEMENT: a write outside scope was blocked\"))\n    return findings\n\n\ndef may_start(findings):\n    return all(status != \"BLOCK\" for _, status, _ in findings)\n\n\ndef validate_handoff(h):\n    req = {\"summary\", \"changed_files\", \"commands_run\", \"failed_attempts\", \"open_risks\", \"next_action\", \"verdict_pointer\"}\n    missing = sorted(req - h.keys())\n    na = h.get(\"next_action\")\n    return {\"valid\": not missing and isinstance(na, str) and bool(na.strip()), \"missing\": missing}\n\n\ndef stale_check(evidence_rev, current_rev):\n    return \"evidence is for the current revision\" if evidence_rev == current_rev else f\"STALE: evidence is for {evidence_rev}, code is at {current_rev}\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "wb_3.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() audits four workbenches, compares guarded and unguarded writers, checks stale evidence, validates handoffs and runs the audit against a deliberately broken version.",
    "descKn": "main() ನಾಲ್ಕು workbenches audit ಮಾಡಿ, ಕಾವಲು ಮತ್ತು ಕಾವಲಿಲ್ಲದ ಬರಹಗಾರರನ್ನು ಹೋಲಿಸಿ, ಹಳೆಯ ಸಾಕ್ಷ್ಯ ಪರಿಶೀಲಿಸಿ, handoffs ಮಾನ್ಯಗೊಳಿಸಿ ಉದ್ದೇಶಪೂರ್ವಕ ಮುರಿದ ಆವೃತ್ತಿಯ ವಿರುದ್ಧ audit ಓಡಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef build(root, skip=(), invalid=()):\n    contents = {\"AGENTS.md\": \"rules\\n\", \"agent_state.json\": \"{}\", \"task_scope.json\": json.dumps({\"allowed\": [\"app.py\"]}), \"feedback.jsonl\": \"\", \"verification.json\": \"{}\", \"review_report.json\": \"{}\", \"handoff.json\": \"{}\"}\n    for name, text in contents.items():\n        if name in skip:\n            continue\n        (Path(root) / name).write_text(\"{bad\" if name in invalid else text, encoding=\"utf-8\")\n\n\ndef main():\n    section(\"1. Genuinely running: an audit of a complete workbench, a missing scope file and a corrupt state file\")\n    for label, kw in ((\"complete\", {}), (\"scope file missing\", {\"skip\": (\"task_scope.json\",)}), (\"state file corrupt\", {\"invalid\": (\"agent_state.json\",)}), (\"handoff template missing\", {\"skip\": (\"handoff.json\",)})):\n        with tempfile.TemporaryDirectory() as d:\n            build(d, **kw)\n            f = audit(d)\n            bad = [(s, st, m) for s, st, m in f if st != \"PASS\"]\n            print(f\"{label:26} may_start={may_start(f)!s:5} non-pass findings: {bad}\")\n    print(\"a missing handoff template only warns, while a missing scope file and a corrupt state file block; severity follows the consequence of the missing control, and the model cannot override a BLOCK by agreeing to take the risk\")\n\n    section(\"2. Genuinely checking: presence is not enforcement\")\n    with tempfile.TemporaryDirectory() as d:\n        build(d)\n        (Path(d) / \"task_scope.json\").write_text(json.dumps({\"allowed\": [\"app.py\"]}), encoding=\"utf-8\")\n        print(\"scope file present, valid JSON, guarded writer in place ->\", [x for x in audit(d) if x[0] == \"scope\"][-1])\n        class Unguarded(GuardedWriter):\n            def write(self, rel, text):\n                (self.root / rel).write_text(text, encoding=\"utf-8\")\n        w = Unguarded(d, [\"app.py\"])\n        w.write(\"release.sh\", \"oops\")\n        print(\"same scope file, but writes go through an unguarded writer: release.sh exists =\", (Path(d) / \"release.sh\").exists())\n    print(\"the scope file and its contents were identical in both cases; only the code path differed, so the audit has three levels and only the third (try a forbidden write) tests the boundary; note that this audit probes its own GuardedWriter, so that PASS shows the probe works and not that the agent's real tools are guarded; a real probe must go through the same write path the agent uses\")\n\n    section(\"3. Genuinely checking: evidence from an earlier revision\")\n    for ev, cur in ((\"abc123\", \"abc123\"), (\"abc123\", \"def456\")):\n        print(f\"tests passed at {ev}, code now at {cur}: {stale_check(ev, cur)}\")\n    print(\"a successful test run says nothing about code that changed afterwards, so evidence records carry the revision and the verifier compares it\")\n\n    section(\"4. Genuinely checking: handoff validation\")\n    full = {\"summary\": \"s\", \"changed_files\": [\"app.py\"], \"commands_run\": [\"unittest\"], \"failed_attempts\": [], \"open_risks\": [], \"next_action\": \"Run unittest and inspect the first failure\", \"verdict_pointer\": \"verification.json\"}\n    print(\"complete handoff:\", validate_handoff(full))\n    print(\"blank next_action:\", validate_handoff(dict(full, next_action=\"  \")))\n    print(\"missing fields:\", validate_handoff({\"summary\": \"done\"}))\n    print(\"weak but non-empty next_action 'Continue':\", validate_handoff(dict(full, next_action=\"Continue\")))\n    print(\"the last case passes the check although it tells the next session nothing; a validator can require presence, and specificity still needs review\")\n\n    section(\"5. Genuinely checking: mutation test of the audit itself\")\n    def broken_audit(root):\n        return [(s, \"PASS\", \"exists\") for s in SURFACES if (Path(root) / FILES[s]).exists()]  # forgets to report missing surfaces\n    with tempfile.TemporaryDirectory() as d:\n        build(d, skip=(\"task_scope.json\", \"verification.json\"))\n        print(\"broken audit may_start:\", may_start(broken_audit(d)), \"| real audit may_start:\", may_start(audit(d)))\n        build(d, invalid=(\"agent_state.json\",))\n        print(\"corrupt state file, broken audit may_start:\", may_start(broken_audit(d)), \"| real audit may_start:\", may_start(audit(d)))\n    print(\"a checker that only lists what exists reports success when controls are absent; removing a file on purpose and expecting BLOCK is how the checker is tested\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: an audit of a complete workbench, a missing scope file and a corrupt state file ---\ncomplete                   may_start=True  non-pass findings: []\nscope file missing         may_start=False non-pass findings: [('scope', 'BLOCK', 'missing')]\nstate file corrupt         may_start=False non-pass findings: [('state', 'BLOCK', 'present but invalid JSON')]\nhandoff template missing   may_start=True  non-pass findings: [('handoff', 'WARN', 'missing')]\na missing handoff template only warns, while a missing scope file and a corrupt state file block; severity follows the consequence of the missing control, and the model cannot override a BLOCK by agreeing to take the risk\n\n--- 2. Genuinely checking: presence is not enforcement ---\nscope file present, valid JSON, guarded writer in place -> ('scope', 'PASS', 'ENFORCEMENT: a write outside scope was blocked')\nsame scope file, but writes go through an unguarded writer: release.sh exists = True\nthe scope file and its contents were identical in both cases; only the code path differed, so the audit has three levels and only the third (try a forbidden write) tests the boundary; note that this audit probes its own GuardedWriter, so that PASS shows the probe works and not that the agent's real tools are guarded; a real probe must go through the same write path the agent uses\n\n--- 3. Genuinely checking: evidence from an earlier revision ---\ntests passed at abc123, code now at abc123: evidence is for the current revision\ntests passed at abc123, code now at def456: STALE: evidence is for abc123, code is at def456\na successful test run says nothing about code that changed afterwards, so evidence records carry the revision and the verifier compares it\n\n--- 4. Genuinely checking: handoff validation ---\ncomplete handoff: {'valid': True, 'missing': []}\nblank next_action: {'valid': False, 'missing': []}\nmissing fields: {'valid': False, 'missing': ['changed_files', 'commands_run', 'failed_attempts', 'next_action', 'open_risks', 'verdict_pointer']}\nweak but non-empty next_action 'Continue': {'valid': True, 'missing': []}\nthe last case passes the check although it tells the next session nothing; a validator can require presence, and specificity still needs review\n\n--- 5. Genuinely checking: mutation test of the audit itself ---\nbroken audit may_start: True | real audit may_start: False\ncorrupt state file, broken audit may_start: True | real audit may_start: False\na checker that only lists what exists reports success when controls are absent; removing a file on purpose and expecting BLOCK is how the checker is tested"
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
    "headingEn": "Genuinely Found: Severity Follows Consequence; Presence Is Not Enforcement",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ತೀವ್ರತೆ ಪರಿಣಾಮವನ್ನು ಅನುಸರಿಸುತ್ತದೆ; ಉಪಸ್ಥಿತಿ ಜಾರಿ ಅಲ್ಲ",
    "bodyEn": "Section 1: the complete workbench could start; a missing scope file and a corrupt state file each produced BLOCK and prevented the start; a missing handoff template produced only WARN and could still start. Section 2: with the scope file present and a guarded writer in place the enforcement probe passed, while the same scope file with an unguarded writer let release.sh be created; the audit probes its own writer, so that PASS shows the probe works and not that the agent's real tools are guarded.",
    "bodyKn": "ವಿಭಾಗ 1: ಪೂರ್ಣ workbench ಆರಂಭಿಸಬಹುದಿತ್ತು; ಕಾಣೆಯಾದ scope ಫೈಲ್ ಮತ್ತು ಹಾಳಾದ ಸ್ಥಿತಿ ಫೈಲ್ ಪ್ರತಿಯೊಂದೂ BLOCK ನೀಡಿ ಆರಂಭ ತಡೆಯಿತು; ಕಾಣೆಯಾದ handoff ಟೆಂಪ್ಲೇಟ್ ಕೇವಲ WARN ನೀಡಿ ಇನ್ನೂ ಆರಂಭಿಸಬಹುದಿತ್ತು. ವಿಭಾಗ 2: scope ಫೈಲ್ ಇದ್ದು ಕಾವಲು ಬರಹಗಾರ ಇದ್ದಾಗ ಜಾರಿ ಪರೀಕ್ಷೆ ಪಾಸ್ ಆಯಿತು, ಅದೇ scope ಫೈಲ್ ಕಾವಲಿಲ್ಲದ ಬರಹಗಾರನೊಂದಿಗೆ release.sh ರಚನೆಗೆ ಬಿಟ್ಟಿತು; audit ತನ್ನದೇ ಬರಹಗಾರನನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಆ PASS ಪರೀಕ್ಷೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ, agent ನ ನಿಜ tools ಕಾವಲಿನಲ್ಲಿವೆ ಎಂದಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Stale Evidence, Weak Handoffs and a Broken Audit",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಹಳೆಯ ಸಾಕ್ಷ್ಯ, ದುರ್ಬಲ Handoffs ಮತ್ತು ಮುರಿದ Audit",
    "bodyEn": "Section 3: tests that passed at revision abc123 were accepted when the code was still at abc123 and flagged STALE when it had moved to def456. Section 4: a complete handoff was valid, a blank next_action was invalid, a handoff missing six fields was invalid, and the weak but non-empty next action \"Continue\" still passed, so specificity needs review. Section 5: an audit that only listed existing files returned may_start True for a workbench missing its scope and verification files and for one with a corrupt state file, where the real audit returned False.",
    "bodyKn": "ವಿಭಾಗ 3: revision abc123 ರಲ್ಲಿ ಪಾಸ್ ಆದ ಪರೀಕ್ಷೆಗಳು ಕೋಡ್ ಇನ್ನೂ abc123 ರಲ್ಲಿದ್ದಾಗ ಸ್ವೀಕರಿಸಲ್ಪಟ್ಟವು ಮತ್ತು def456 ಕ್ಕೆ ಸರಿದಾಗ STALE ಎಂದು ಗುರುತಿಸಲ್ಪಟ್ಟವು. ವಿಭಾಗ 4: ಪೂರ್ಣ handoff ಮಾನ್ಯವಾಗಿತ್ತು, ಖಾಲಿ next_action ಅಮಾನ್ಯ, ಆರು ಕ್ಷೇತ್ರ ಕಾಣೆಯಾದ handoff ಅಮಾನ್ಯ, ಮತ್ತು ದುರ್ಬಲ ಆದರೆ ಖಾಲಿಯಲ್ಲದ next action \"Continue\" ಇನ್ನೂ ಪಾಸ್ ಆಯಿತು, ಆದ್ದರಿಂದ ನಿರ್ದಿಷ್ಟತೆಗೆ ಪರಿಶೀಲನೆ ಬೇಕು. ವಿಭಾಗ 5: ಇರುವ ಫೈಲ್‌ಗಳನ್ನು ಮಾತ್ರ ಪಟ್ಟಿ ಮಾಡುವ audit scope ಮತ್ತು verification ಫೈಲ್‌ಗಳು ಕಾಣೆಯಾದ workbench ಗೆ ಮತ್ತು ಹಾಳಾದ ಸ್ಥಿತಿ ಫೈಲ್ ಇರುವ ಒಂದಕ್ಕೆ may_start True ಮರಳಿಸಿತು, ನಿಜ audit False ಮರಳಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A preflight audit is cheap and catches a whole class of failures before the agent acts, but only if it blocks on missing evidence and is itself tested by removing controls.",
    "bodyKn": "ಪೂರ್ವ-ಪರಿಶೀಲನೆ audit ಅಗ್ಗ ಮತ್ತು agent ಕಾರ್ಯನಿರ್ವಹಿಸುವ ಮುನ್ನ ಇಡೀ ವರ್ಗದ ವೈಫಲ್ಯಗಳನ್ನು ಹಿಡಿಯುತ್ತದೆ, ಆದರೆ ಕಾಣೆಯಾದ ಸಾಕ್ಷ್ಯದ ಮೇಲೆ ತಡೆದರೆ ಮತ್ತು ನಿಯಂತ್ರಣಗಳನ್ನು ತೆಗೆದು ತಾನೇ ಪರೀಕ್ಷಿಸಲ್ಪಟ್ಟರೆ ಮಾತ್ರ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the files exist, so the controls work.\" A scope file was present and valid in both runs and only one of them blocked the forbidden write.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಫೈಲ್‌ಗಳಿವೆ, ಆದ್ದರಿಂದ ನಿಯಂತ್ರಣಗಳು ಕೆಲಸ ಮಾಡುತ್ತವೆ.\" ಎರಡೂ ಓಟಗಳಲ್ಲಿ scope ಫೈಲ್ ಇದ್ದು ಮಾನ್ಯವಾಗಿತ್ತು ಮತ್ತು ಅವುಗಳಲ್ಲಿ ಒಂದು ಮಾತ್ರ ನಿಷೇಧಿತ ಬರಹವನ್ನು ತಡೆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Preflight audit: checks before the agent starts. BLOCK: execution must not begin. WARN: visible but not blocking. Enforcement probe: a deliberate forbidden action to see if it is stopped. Mutation test: removing a control on purpose to test the checker.",
    "bodyKn": "Preflight audit: agent ಆರಂಭಿಸುವ ಮುನ್ನ ಪರಿಶೀಲನೆ. BLOCK: ಕಾರ್ಯಗತ ಆರಂಭವಾಗಬಾರದು. WARN: ಗೋಚರ ಆದರೆ ತಡೆಯುವುದಿಲ್ಲ. Enforcement probe: ತಡೆಯಲ್ಪಡುತ್ತದೆಯೇ ಎಂದು ನೋಡಲು ಉದ್ದೇಶಪೂರ್ವಕ ನಿಷೇಧಿತ ಕ್ರಿಯೆ. Mutation test: ಪರಿಶೀಲಕವನ್ನು ಪರೀಕ್ಷಿಸಲು ನಿಯಂತ್ರಣವನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ತೆಗೆಯುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Missing scope or a corrupt state blocked the start; a missing handoff template only warned. 2) A guarded writer blocked a forbidden write and an unguarded one did not. 3) Evidence from abc123 was stale at def456. 4) A blank next action failed and \"Continue\" passed. 5) A broken audit returned may_start True where the real one returned False.",
    "bodyKn": "1) ಕಾಣೆಯಾದ scope ಅಥವಾ ಹಾಳಾದ ಸ್ಥಿತಿ ಆರಂಭ ತಡೆಯಿತು; ಕಾಣೆಯಾದ handoff ಟೆಂಪ್ಲೇಟ್ ಕೇವಲ ಎಚ್ಚರಿಸಿತು. 2) ಕಾವಲು ಬರಹಗಾರ ನಿಷೇಧಿತ ಬರಹ ತಡೆಯಿತು, ಕಾವಲಿಲ್ಲದದ್ದು ತಡೆಯಲಿಲ್ಲ. 3) abc123 ನ ಸಾಕ್ಷ್ಯ def456 ರಲ್ಲಿ ಹಳೆಯದಾಗಿತ್ತು. 4) ಖಾಲಿ next action ವಿಫಲವಾಯಿತು ಮತ್ತು \"Continue\" ಪಾಸ್ ಆಯಿತು. 5) ಮುರಿದ audit ನಿಜವಾದದ್ದು False ಮರಳಿಸಿದಲ್ಲಿ may_start True ಮರಳಿಸಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which missing surfaces produced BLOCK in the audit?",
      "qKn": "audit ನಲ್ಲಿ ಯಾವ ಕಾಣೆಯಾದ ಮೇಲ್ಮೈಗಳು BLOCK ನೀಡಿದವು?",
      "opts": [
       "Handoff only",
       "Scope and a corrupt state",
       "Review only",
       "None"
      ],
      "optsKn": [
       "Handoff ಮಾತ್ರ",
       "Scope ಮತ್ತು ಹಾಳಾದ ಸ್ಥಿತಿ",
       "ಪರಿಶೀಲಕ ಮಾತ್ರ",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "What did the unguarded writer allow?",
      "qKn": "ಕಾವಲಿಲ್ಲದ ಬರಹಗಾರ ಏನನ್ನು ಅನುಮತಿಸಿತು?",
      "opts": [
       "Creating release.sh outside scope",
       "Nothing",
       "Only app.py",
       "Reading files"
      ],
      "optsKn": [
       "ವ್ಯಾಪ್ತಿ ಹೊರಗೆ release.sh ರಚಿಸುವುದು",
       "ಏನೂ ಇಲ್ಲ",
       "app.py ಮಾತ್ರ",
       "ಫೈಲ್ ಓದುವುದು"
      ],
      "correct": 0
     },
     {
      "q": "How was evidence from abc123 treated when the code was at def456?",
      "qKn": "ಕೋಡ್ def456 ರಲ್ಲಿದ್ದಾಗ abc123 ನ ಸಾಕ್ಷ್ಯವನ್ನು ಹೇಗೆ ಪರಿಗಣಿಸಲಾಯಿತು?",
      "opts": [
       "Accepted",
       "Flagged STALE",
       "Deleted",
       "Ignored"
      ],
      "optsKn": [
       "ಸ್ವೀಕರಿಸಲಾಯಿತು",
       "STALE ಎಂದು ಗುರುತಿಸಲಾಯಿತು",
       "ಅಳಿಸಲಾಯಿತು",
       "ನಿರ್ಲಕ್ಷಿಸಲಾಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why did the handoff with next action \"Continue\" pass validation?",
      "qKn": "next action \"Continue\" ಇರುವ handoff ಮಾನ್ಯತೆ ಏಕೆ ಪಾಸ್ ಆಯಿತು?",
      "opts": [
       "It is non-empty; specificity needs review",
       "It is specific",
       "It was approved",
       "It has seven actions"
      ],
      "optsKn": [
       "ಅದು ಖಾಲಿಯಲ್ಲ; ನಿರ್ದಿಷ್ಟತೆಗೆ ಪರಿಶೀಲನೆ ಬೇಕು",
       "ಅದು ನಿರ್ದಿಷ್ಟ",
       "ಅದು ಅನುಮೋದಿತ",
       "ಅದಕ್ಕೆ ಏಳು ಕ್ರಿಯೆಗಳಿವೆ"
      ],
      "correct": 0
     },
     {
      "q": "What did the broken audit get wrong?",
      "qKn": "ಮುರಿದ audit ಏನು ತಪ್ಪಾಗಿ ಮಾಡಿತು?",
      "opts": [
       "Reported success when controls were absent",
       "Crashed",
       "Blocked everything",
       "Nothing"
      ],
      "optsKn": [
       "ನಿಯಂತ್ರಣಗಳು ಇಲ್ಲದಿದ್ದಾಗ ಯಶಸ್ಸು ವರದಿ ಮಾಡಿತು",
       "ಕ್ರ್ಯಾಶ್ ಆಯಿತು",
       "ಎಲ್ಲವನ್ನೂ ತಡೆಯಿತು",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
