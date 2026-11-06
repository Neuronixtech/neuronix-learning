module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6366020ed05b321589",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Capstone: Ship a Reusable Agent Workbench Pack (Part 1 of 3) — The Pack, Its Manifest and Its Schema",
 "titleKn": "Capstone: ಮರುಬಳಕೆಯ Agent Workbench ಪ್ಯಾಕ್ ಕಳುಹಿಸಿ (ಭಾಗ 1 / 3) — ಪ್ಯಾಕ್, ಅದರ Manifest ಮತ್ತು ಅದರ Schema",
 "desc": "Build a small pack, record a digest manifest, verify it against damage, keep project work out and validate state with a schema.",
 "descKn": "ಸಣ್ಣ ಪ್ಯಾಕ್ ನಿರ್ಮಿಸಿ, digest manifest ದಾಖಲಿಸಿ, ಹಾನಿ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿ, ಪ್ರಾಜೆಕ್ಟ್ ಕೆಲಸ ಹೊರಗಿಟ್ಟು schema ಯಿಂದ ಸ್ಥಿತಿ ಮಾನ್ಯಗೊಳಿಸಿ.",
 "objectives": [
  "Separate infrastructure from work.",
  "Record a manifest of digests.",
  "Detect edits, deletions and stray files.",
  "Validate state with a schema.",
  "Make builds reproducible."
 ],
 "objectivesKn": [
  "ಮೂಲಸೌಕರ್ಯವನ್ನು ಕೆಲಸದಿಂದ ಬೇರ್ಪಡಿಸಿ.",
  "digests ನ manifest ದಾಖಲಿಸಿ.",
  "ಸಂಪಾದನೆ, ಅಳಿಸುವಿಕೆ ಮತ್ತು ಅನಗತ್ಯ ಫೈಲ್‌ಗಳನ್ನು ಪತ್ತೆಹಚ್ಚಿ.",
  "schema ಯಿಂದ ಸ್ಥಿತಿ ಮಾನ್ಯಗೊಳಿಸಿ.",
  "ನಿರ್ಮಾಣಗಳನ್ನು ಪುನರುತ್ಪಾದಿಸಬಹುದಾದಂತೆ ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Capstone: Ship a Reusable Agent Workbench Pack (Part 1 of 3)",
    "textKn": "Capstone: ಮರುಬಳಕೆಯ Agent Workbench ಪ್ಯಾಕ್ ಕಳುಹಿಸಿ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: building a small reusable pack, a manifest of digests, a pack verifier, an infrastructure-versus-work check and a state-schema validator. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind shipping a reusable agent workbench pack (layout, manifest, installer, versions and distribution), not the real software, and the pack is a small one written by the lab, not the lesson's pack, and no language model is involved, so no real LLM behaviour is measured. The pasted capstone did not include the repository's code, so the labs are our own small pack and installer, written in Python; the lesson describes shell installation, and results depend on the machine they ran on. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಸಣ್ಣ ಮರುಬಳಕೆಯ ಪ್ಯಾಕ್, digests ನ manifest, ಪ್ಯಾಕ್ verifier, infrastructure-ವಿರುದ್ಧ-work ಪರಿಶೀಲನೆ ಮತ್ತು state-schema ಮಾನ್ಯಕಾರಕ ನಿರ್ಮಿಸುವುದು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಮರುಬಳಕೆಯ agent workbench ಪ್ಯಾಕ್ ಕಳುಹಿಸುವುದು (ವಿನ್ಯಾಸ, manifest, installer, ಆವೃತ್ತಿಗಳು ಮತ್ತು ವಿತರಣೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪ್ಯಾಕ್ ಲ್ಯಾಬ್ ಬರೆದ ಸಣ್ಣದು, lesson ನ ಪ್ಯಾಕ್ ಅಲ್ಲ, ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ capstone repository ಯ ಕೋಡ್ ಒಳಗೊಂಡಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಸಣ್ಣ ಪ್ಯಾಕ್ ಮತ್ತು installer, Python ನಲ್ಲಿ ಬರೆದದ್ದು; lesson shell ಸ್ಥಾಪನೆ ವಿವರಿಸುತ್ತದೆ, ಮತ್ತು ಫಲಿತಾಂಶಗಳು ಅವು ಓಡಿದ ಯಂತ್ರವನ್ನು ಅವಲಂಬಿಸಿವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Workflow That Lives in People's Heads",
    "textKn": "ಜನರ ತಲೆಯಲ್ಲಿ ಇರುವ ಕೆಲಸದ ಹರಿವು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Make the Workbench a Versioned Artifact",
    "headingKn": "Workbench ಅನ್ನು ಆವೃತ್ತಿಯುಕ್ತ ಕಲಾಕೃತಿಯಾಗಿಸಿ",
    "bodyEn": "The capstone turns the separate surfaces (rules, schemas, scripts, handoff templates) into one versioned pack that can be installed into any repository. This part builds a small pack of our own, records a SHA-256 manifest, checks the pack against it for edits, deletions, stray files and version drift, separates reusable infrastructure from project work and validates agent state against a schema. The pack is a teaching stand-in, not the lesson's own.",
    "bodyKn": "capstone ಪ್ರತ್ಯೇಕ ಮೇಲ್ಮೈಗಳನ್ನು (ನಿಯಮಗಳು, schemas, ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳು, ಹಸ್ತಾಂತರ ಟೆಂಪ್ಲೇಟ್‌ಗಳು) ಯಾವುದೇ repository ಗೆ ಸ್ಥಾಪಿಸಬಹುದಾದ ಒಂದು ಆವೃತ್ತಿಯುಕ್ತ ಪ್ಯಾಕ್ ಆಗಿ ಮಾರ್ಪಡಿಸುತ್ತದೆ. ಈ ಭಾಗ ನಮ್ಮದೇ ಸಣ್ಣ ಪ್ಯಾಕ್ ನಿರ್ಮಿಸಿ, SHA-256 manifest ದಾಖಲಿಸಿ, ಪ್ಯಾಕ್ ಅನ್ನು ಸಂಪಾದನೆ, ಅಳಿಸುವಿಕೆ, ಅನಗತ್ಯ ಫೈಲ್‌ಗಳು ಮತ್ತು ಆವೃತ್ತಿ ಚಲನೆಗಾಗಿ ಅದರ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿ, ಮರುಬಳಕೆಯ ಮೂಲಸೌಕರ್ಯವನ್ನು ಪ್ರಾಜೆಕ್ಟ್ ಕೆಲಸದಿಂದ ಬೇರ್ಪಡಿಸಿ, agent ಸ್ಥಿತಿಯನ್ನು schema ವಿರುದ್ಧ ಮಾನ್ಯಗೊಳಿಸುತ್ತದೆ. ಪ್ಯಾಕ್ ಬೋಧನಾ ಬದಲಿ, lesson ನದ್ದಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Package Capability, Not Outcomes",
    "headingKn": "ಸಾಮರ್ಥ್ಯ ಪ್ಯಾಕ್ ಮಾಡಿ, ಫಲಿತಾಂಶಗಳನ್ನಲ್ಲ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Package capability, not outcomes</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">rules + schemas</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">infrastructure</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">manifest</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">sha256 per file</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">verifier</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">edit, delete, stray</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">work stays out</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">state, feedback, tasks</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a pack is checkable</text></svg>",
    "captionEn": "A pack is infrastructure; work stays in the project.",
    "captionKn": "ಪ್ಯಾಕ್ ಮೂಲಸೌಕರ್ಯ; ಕೆಲಸ ಪ್ರಾಜೆಕ್ಟ್‌ನಲ್ಲಿ ಉಳಿಯುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "What belongs in the pack",
    "headingKn": "ಪ್ಯಾಕ್‌ನಲ್ಲಿ ಏನಿರಬೇಕು",
    "headers": [
     "Infrastructure (in the pack)",
     "Work (outside the pack)",
     "Why"
    ],
    "rows": [
     [
      "AGENTS.md rules",
      "agent_state.json",
      "rules are reusable, state is one task"
     ],
     [
      "schemas/",
      "feedback_record.jsonl",
      "schemas constrain, records are history"
     ],
     [
      "scripts/verify_agent.py",
      "task_board.json",
      "scripts are tools, boards are plans"
     ],
     [
      "VERSION and MANIFEST.json",
      "handoff.json",
      "identity of the pack versus one session"
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
    "filename": "pk_1.py",
    "headingEn": "Building, manifest, verification and the schema validator",
    "headingKn": "ನಿರ್ಮಾಣ, manifest, ಪರಿಶೀಲನೆ ಮತ್ತು schema ಮಾನ್ಯಕಾರಕ",
    "descEn": "build_pack writes fixed text for each pack file. make_manifest records a digest per file and the version. verify_pack reports missing, modified and unexpected files and a VERSION mismatch. validate checks required fields, exact types, an enum and a minimum.",
    "descKn": "build_pack ಪ್ರತಿ ಪ್ಯಾಕ್ ಫೈಲ್‌ಗೆ ನಿಶ್ಚಿತ ಪಠ್ಯ ಬರೆಯುತ್ತದೆ. make_manifest ಪ್ರತಿ ಫೈಲ್‌ನ digest ಮತ್ತು ಆವೃತ್ತಿ ದಾಖಲಿಸುತ್ತದೆ. verify_pack ಕಾಣೆಯಾದ, ಮಾರ್ಪಡಿಸಿದ ಮತ್ತು ಅನಿರೀಕ್ಷಿತ ಫೈಲ್‌ಗಳು ಹಾಗೂ VERSION ಹೊಂದಾಣಿಕೆ ಇಲ್ಲದಿರುವುದನ್ನು ವರದಿ ಮಾಡುತ್ತದೆ. validate ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳು, ನಿಖರ ಪ್ರಕಾರಗಳು, enum ಮತ್ತು ಕನಿಷ್ಠ ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    "code": "def build_pack(root):\n    for rel, text in FILES.items():\n        p = root / rel\n        p.parent.mkdir(parents=True, exist_ok=True)\n        p.write_text(text, encoding=\"utf-8\", newline=\"\")\n\n\ndef digest(p):\n    return hashlib.sha256(p.read_bytes()).hexdigest()\n\n\ndef make_manifest(root):\n    return {\"version\": (root / \"VERSION\").read_text(encoding=\"utf-8\").strip(), \"files\": {str(p.relative_to(root)).replace(chr(92), \"/\"): digest(p) for p in sorted(root.rglob(\"*\")) if p.is_file() and p.name != \"MANIFEST.json\"}}\n\n\ndef verify_pack(root):\n    m = json.loads((root / \"MANIFEST.json\").read_text(encoding=\"utf-8\"))\n    cur = make_manifest(root)\n    problems = [f\"missing: {f}\" for f in m[\"files\"] if f not in cur[\"files\"]]\n    problems += [f\"modified: {f}\" for f in m[\"files\"] if f in cur[\"files\"] and cur[\"files\"][f] != m[\"files\"][f]]\n    problems += [f\"unexpected: {f}\" for f in cur[\"files\"] if f not in m[\"files\"]]\n    if cur[\"version\"] != m[\"version\"]:\n        problems.append(f\"VERSION says {cur['version']}, manifest says {m['version']}\")\n    return problems\n\n\ndef work_files_in(root):\n    return sorted(str(p.relative_to(root)).replace(chr(92), \"/\") for p in root.rglob(\"*\") if p.is_file() and p.name in WORK_NAMES)\n\n\ndef validate(state, schema):\n    errs = []\n    for k in schema[\"required\"]:\n        if k not in state:\n            errs.append(f\"missing {k}\")\n    for k, spec in schema[\"properties\"].items():\n        if k not in state:\n            continue\n        v = state[k]\n        t = spec[\"type\"]\n        if t == \"string\" and type(v) is not str or t == \"integer\" and type(v) is not int:\n            errs.append(f\"{k} must be {t}\")\n            continue\n        if \"enum\" in spec and v not in spec[\"enum\"]:\n            errs.append(f\"{k} must be one of {spec['enum']}\")\n        if \"minimum\" in spec and v < spec[\"minimum\"]:\n            errs.append(f\"{k} must be at least {spec['minimum']}\")\n    return errs"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pk_1.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() builds the pack and a manifest, damages it four ways, drops work files into it, validates six states against the schema and builds the pack twice to compare digests.",
    "descKn": "main() ಪ್ಯಾಕ್ ಮತ್ತು manifest ನಿರ್ಮಿಸಿ, ಅದನ್ನು ನಾಲ್ಕು ರೀತಿ ಹಾನಿ ಮಾಡಿ, work ಫೈಲ್‌ಗಳನ್ನು ಅದರೊಳಗೆ ಹಾಕಿ, ಆರು ಸ್ಥಿತಿಗಳನ್ನು schema ವಿರುದ್ಧ ಮಾನ್ಯಗೊಳಿಸಿ ಮತ್ತು digests ಹೋಲಿಸಲು ಪ್ಯಾಕ್ ಅನ್ನು ಎರಡು ಬಾರಿ ನಿರ್ಮಿಸುತ್ತದೆ.",
    "code": "def main():\n    with tempfile.TemporaryDirectory() as d:\n        pack = Path(d) / \"agent-workbench-pack\"\n        pack.mkdir()\n        build_pack(pack)\n\n        section(\"1. Genuinely running: the pack layout and its manifest\")\n        print(\"files:\", sorted(str(p.relative_to(pack)).replace(chr(92), \"/\") for p in pack.rglob(\"*\") if p.is_file()))\n        man = make_manifest(pack)\n        (pack / \"MANIFEST.json\").write_text(json.dumps(man, indent=2), encoding=\"utf-8\")\n        print(\"manifest version:\", man[\"version\"], \"| files listed:\", len(man[\"files\"]), \"| verify on a fresh pack:\", verify_pack(pack))\n        print(\"a manifest of digests turns 'the pack looks right' into something a script can check\")\n\n        section(\"2. Genuinely running: the verifier finds each kind of damage\")\n        (pack / \"AGENTS.md\").write_text(\"# Rules\" + chr(10) + \"- do whatever\" + chr(10), encoding=\"utf-8\")\n        print(\"edited rule file:\", verify_pack(pack))\n        (pack / \"AGENTS.md\").write_text(FILES[\"AGENTS.md\"], encoding=\"utf-8\", newline=\"\")\n        (pack / \"docs/handoff.md\").unlink()\n        print(\"deleted file    :\", verify_pack(pack))\n        (pack / \"docs/handoff.md\").write_text(FILES[\"docs/handoff.md\"], encoding=\"utf-8\", newline=\"\")\n        (pack / \"notes.txt\").write_text(\"stray\", encoding=\"utf-8\")\n        print(\"extra file      :\", verify_pack(pack))\n        (pack / \"notes.txt\").unlink()\n        (pack / \"VERSION\").write_text(\"1.3.0\" + chr(10), encoding=\"utf-8\")\n        print(\"version bumped without rebuilding the manifest:\", verify_pack(pack))\n        (pack / \"VERSION\").write_text(FILES[\"VERSION\"], encoding=\"utf-8\", newline=\"\")\n        print(\"restored:\", verify_pack(pack))\n        print(\"an edit, a deletion, a stray file and a version bump were each reported by name; a changed VERSION is reported twice because its digest and the version string both disagree with the manifest\")\n\n        section(\"3. Genuinely running: infrastructure versus work\")\n        print(\"work files in the clean pack:\", work_files_in(pack))\n        (pack / \"agent_state.json\").write_text(\"{}\", encoding=\"utf-8\")\n        (pack / \"scripts/feedback_record.jsonl\").write_text(\"\", encoding=\"utf-8\")\n        print(\"after someone runs a task inside the pack directory:\", work_files_in(pack))\n        print(\"verify_pack:\", verify_pack(pack))\n        print(\"the pack holds reusable capability, and files that record one project's work do not belong in it; the manifest check reported them as unexpected, which is how a pack stays free of project state\")\n        (pack / \"agent_state.json\").unlink()\n        (pack / \"scripts/feedback_record.jsonl\").unlink()\n\n        section(\"4. Genuinely running: the state schema as a contract\")\n        schema = json.loads((pack / \"schemas/agent_state.schema.json\").read_text(encoding=\"utf-8\"))\n        cases = [(\"valid\", {\"task_id\": \"T1\", \"status\": \"doing\", \"attempts\": 2}), (\"missing status\", {\"task_id\": \"T1\", \"attempts\": 0}), (\"bad status\", {\"task_id\": \"T1\", \"status\": \"finished\", \"attempts\": 0}),\n                 (\"attempts is a string\", {\"task_id\": \"T1\", \"status\": \"todo\", \"attempts\": \"2\"}), (\"attempts is True\", {\"task_id\": \"T1\", \"status\": \"todo\", \"attempts\": True}), (\"negative attempts\", {\"task_id\": \"T1\", \"status\": \"todo\", \"attempts\": -1})]\n        for label, st in cases:\n            print(f\"{label:22} {validate(st, schema)}\")\n        print(\"every bad state was refused with a reason, including True as an integer, which Python would otherwise accept; this is a tiny validator written for the lab, not a full JSON Schema implementation, and it checks only required, type, enum and minimum\")\n\n        section(\"5. Genuinely checking: the same pack built twice\")\n        other = Path(d) / \"second\"\n        other.mkdir()\n        build_pack(other)\n        print(\"manifest of two separate builds identical:\", make_manifest(pack)[\"files\"] == make_manifest(other)[\"files\"])\n        print(\"because the pack is built from fixed text, two builds have identical digests, which is what lets a repository record 'installed pack 1.2.0' and trust it to mean one specific set of files\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the pack layout and its manifest ---\nfiles: ['AGENTS.md', 'README.md', 'VERSION', 'bin/install.py', 'docs/handoff.md', 'schemas/agent_state.schema.json', 'scripts/verify_agent.py']\nmanifest version: 1.2.0 | files listed: 7 | verify on a fresh pack: []\na manifest of digests turns 'the pack looks right' into something a script can check\n\n--- 2. Genuinely running: the verifier finds each kind of damage ---\nedited rule file: ['modified: AGENTS.md']\ndeleted file    : ['missing: docs/handoff.md']\nextra file      : ['unexpected: notes.txt']\nversion bumped without rebuilding the manifest: ['modified: VERSION', 'VERSION says 1.3.0, manifest says 1.2.0']\nrestored: []\nan edit, a deletion, a stray file and a version bump were each reported by name; a changed VERSION is reported twice because its digest and the version string both disagree with the manifest\n\n--- 3. Genuinely running: infrastructure versus work ---\nwork files in the clean pack: []\nafter someone runs a task inside the pack directory: ['agent_state.json', 'scripts/feedback_record.jsonl']\nverify_pack: ['unexpected: agent_state.json', 'unexpected: scripts/feedback_record.jsonl']\nthe pack holds reusable capability, and files that record one project's work do not belong in it; the manifest check reported them as unexpected, which is how a pack stays free of project state\n\n--- 4. Genuinely running: the state schema as a contract ---\nvalid                  []\nmissing status         ['missing status']\nbad status             [\"status must be one of ['todo', 'doing', 'done', 'blocked']\"]\nattempts is a string   ['attempts must be integer']\nattempts is True       ['attempts must be integer']\nnegative attempts      ['attempts must be at least 0']\nevery bad state was refused with a reason, including True as an integer, which Python would otherwise accept; this is a tiny validator written for the lab, not a full JSON Schema implementation, and it checks only required, type, enum and minimum\n\n--- 5. Genuinely checking: the same pack built twice ---\nmanifest of two separate builds identical: True\nbecause the pack is built from fixed text, two builds have identical digests, which is what lets a repository record 'installed pack 1.2.0' and trust it to mean one specific set of files"
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
    "headingEn": "Genuinely Found: The Verifier Named Each Kind of Damage",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Verifier ಪ್ರತಿ ರೀತಿಯ ಹಾನಿಯನ್ನು ಹೆಸರಿಸಿತು",
    "bodyEn": "Section 1: the pack had 7 files and a manifest for version 1.2.0 that verified clean. Section 2: an edited AGENTS.md was reported as modified, a deleted docs/handoff.md as missing, a stray notes.txt as unexpected and a VERSION bump without a manifest rebuild as both modified and a version mismatch. Section 3: agent_state.json and scripts/feedback_record.jsonl placed in the pack were reported as unexpected.",
    "bodyKn": "ವಿಭಾಗ 1: ಪ್ಯಾಕ್ 7 ಫೈಲ್‌ಗಳು ಮತ್ತು ಆವೃತ್ತಿ 1.2.0 ಗೆ manifest ಹೊಂದಿದ್ದು ಸ್ವಚ್ಛವಾಗಿ ಪರಿಶೀಲಿಸಿತು. ವಿಭಾಗ 2: ಸಂಪಾದಿಸಿದ AGENTS.md modified ಎಂದು, ಅಳಿಸಿದ docs/handoff.md missing ಎಂದು, ಅನಗತ್ಯ notes.txt unexpected ಎಂದು ಮತ್ತು manifest ಮರುನಿರ್ಮಿಸದೆ VERSION ಹೆಚ್ಚಳ modified ಮತ್ತು ಆವೃತ್ತಿ ಹೊಂದಾಣಿಕೆ ಇಲ್ಲ ಎರಡೂ ಎಂದು ವರದಿಯಾದವು. ವಿಭಾಗ 3: ಪ್ಯಾಕ್‌ನಲ್ಲಿ ಇಟ್ಟ agent_state.json ಮತ್ತು scripts/feedback_record.jsonl unexpected ಎಂದು ವರದಿಯಾದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Schema Refused Six Kinds of Bad State",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Schema ಆರು ರೀತಿಯ ಕೆಟ್ಟ ಸ್ಥಿತಿ ನಿರಾಕರಿಸಿತು",
    "bodyEn": "Section 4: the valid state passed; a missing status, a status outside the enum, attempts as a string, attempts as True and negative attempts were each refused with a reason; the validator is a small one written for the lab and checks only required, type, enum and minimum. Section 5: two separate builds of the pack had identical manifests.",
    "bodyKn": "ವಿಭಾಗ 4: ಮಾನ್ಯ ಸ್ಥಿತಿ ಪಾಸ್ ಆಯಿತು; ಕಾಣೆಯಾದ status, enum ಹೊರಗಿನ status, string ಆದ attempts, True ಆದ attempts ಮತ್ತು ಋಣಾತ್ಮಕ attempts ಪ್ರತಿಯೊಂದೂ ಕಾರಣದೊಂದಿಗೆ ನಿರಾಕರಿಸಲ್ಪಟ್ಟವು; ಮಾನ್ಯಕಾರಕ ಲ್ಯಾಬ್‌ಗಾಗಿ ಬರೆದ ಸಣ್ಣದು ಮತ್ತು required, type, enum ಮತ್ತು minimum ಮಾತ್ರ ಪರಿಶೀಲಿಸುತ್ತದೆ. ವಿಭಾಗ 5: ಪ್ಯಾಕ್‌ನ ಎರಡು ಪ್ರತ್ಯೇಕ ನಿರ್ಮಾಣಗಳು ಒಂದೇ manifest ಹೊಂದಿದ್ದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A pack that can verify itself and keeps project work out is something a team can trust and reinstall, instead of a folder of files nobody is sure about.",
    "bodyKn": "ತನ್ನನ್ನು ತಾನೇ ಪರಿಶೀಲಿಸಬಲ್ಲ ಮತ್ತು ಪ್ರಾಜೆಕ್ಟ್ ಕೆಲಸ ಹೊರಗಿಡುವ ಪ್ಯಾಕ್ ತಂಡ ನಂಬಿ ಮರುಸ್ಥಾಪಿಸಬಹುದಾದದ್ದು, ಯಾರಿಗೂ ಖಚಿತವಿಲ್ಲದ ಫೈಲ್‌ಗಳ ಫೋಲ್ಡರ್ ಅಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"if the files are there, the pack is intact.\" An edited rule file was all there and still wrong.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಫೈಲ್‌ಗಳು ಇದ್ದರೆ ಪ್ಯಾಕ್ ಅಖಂಡ.\" ಸಂಪಾದಿಸಿದ ನಿಯಮ ಫೈಲ್ ಇತ್ತು ಆದರೂ ತಪ್ಪಾಗಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Pack: a versioned, installable set of workbench assets. Manifest: a list of file digests and the version. Infrastructure: reusable capability. Work: project-specific records. Schema: a contract for the shape of data.",
    "bodyKn": "Pack: ಆವೃತ್ತಿಯುಕ್ತ, ಸ್ಥಾಪಿಸಬಹುದಾದ workbench ಆಸ್ತಿಗಳ ಸೆಟ್. Manifest: ಫೈಲ್ digests ಮತ್ತು ಆವೃತ್ತಿಯ ಪಟ್ಟಿ. Infrastructure: ಮರುಬಳಕೆಯ ಸಾಮರ್ಥ್ಯ. Work: ಪ್ರಾಜೆಕ್ಟ್-ನಿರ್ದಿಷ್ಟ ದಾಖಲೆಗಳು. Schema: ಡೇಟಾ ಆಕಾರದ ಒಪ್ಪಂದ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The manifest verified a clean pack. 2) Edit, deletion, stray file and version drift were each named. 3) Work files in the pack were reported as unexpected. 4) The schema refused True as an integer. 5) Two builds produced identical digests.",
    "bodyKn": "1) manifest ಸ್ವಚ್ಛ ಪ್ಯಾಕ್ ಪರಿಶೀಲಿಸಿತು. 2) ಸಂಪಾದನೆ, ಅಳಿಸುವಿಕೆ, ಅನಗತ್ಯ ಫೈಲ್ ಮತ್ತು ಆವೃತ್ತಿ ಚಲನೆ ಪ್ರತಿಯೊಂದೂ ಹೆಸರಿಸಲ್ಪಟ್ಟವು. 3) ಪ್ಯಾಕ್‌ನಲ್ಲಿನ work ಫೈಲ್‌ಗಳು unexpected ಎಂದು ವರದಿಯಾದವು. 4) schema True ಅನ್ನು ಪೂರ್ಣಾಂಕವಾಗಿ ನಿರಾಕರಿಸಿತು. 5) ಎರಡು ನಿರ್ಮಾಣಗಳು ಒಂದೇ digests ನೀಡಿದವು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many files did the manifest list for the lab pack?",
      "qKn": "ಲ್ಯಾಬ್ ಪ್ಯಾಕ್‌ಗೆ manifest ಎಷ್ಟು ಫೈಲ್‌ಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡಿತು?",
      "opts": [
       "7",
       "3",
       "12",
       "1"
      ],
      "optsKn": [
       "7",
       "3",
       "12",
       "1"
      ],
      "correct": 0
     },
     {
      "q": "How was a stray notes.txt reported?",
      "qKn": "ಅನಗತ್ಯ notes.txt ಹೇಗೆ ವರದಿಯಾಯಿತು?",
      "opts": [
       "unexpected",
       "missing",
       "modified",
       "not reported"
      ],
      "optsKn": [
       "unexpected",
       "missing",
       "modified",
       "ವರದಿಯಾಗಲಿಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Why was a VERSION bump reported twice?",
      "qKn": "VERSION ಹೆಚ್ಚಳ ಎರಡು ಬಾರಿ ಏಕೆ ವರದಿಯಾಯಿತು?",
      "opts": [
       "Its digest and its version string both disagreed with the manifest",
       "It was deleted",
       "It was a stray file",
       "The schema failed"
      ],
      "optsKn": [
       "ಅದರ digest ಮತ್ತು ಆವೃತ್ತಿ ಸ್ಟ್ರಿಂಗ್ ಎರಡೂ manifest ಗೆ ಹೊಂದಲಿಲ್ಲ",
       "ಅದು ಅಳಿಸಲ್ಪಟ್ಟಿತು",
       "ಅದು ಅನಗತ್ಯ ಫೈಲ್ ಆಗಿತ್ತು",
       "schema ವಿಫಲವಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What did the schema validator do with attempts set to True?",
      "qKn": "attempts True ಆಗಿದ್ದಾಗ schema ಮಾನ್ಯಕಾರಕ ಏನು ಮಾಡಿತು?",
      "opts": [
       "Refused it as not an integer",
       "Accepted it",
       "Converted it to 1",
       "Crashed"
      ],
      "optsKn": [
       "ಪೂರ್ಣಾಂಕವಲ್ಲ ಎಂದು ನಿರಾಕರಿಸಿತು",
       "ಸ್ವೀಕರಿಸಿತು",
       "1 ಆಗಿ ಪರಿವರ್ತಿಸಿತು",
       "ಕ್ರ್ಯಾಶ್ ಆಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "Which of these belongs outside the pack?",
      "qKn": "ಇವುಗಳಲ್ಲಿ ಯಾವುದು ಪ್ಯಾಕ್ ಹೊರಗೆ ಇರಬೇಕು?",
      "opts": [
       "agent_state.json",
       "AGENTS.md",
       "schemas/",
       "VERSION"
      ],
      "optsKn": [
       "agent_state.json",
       "AGENTS.md",
       "schemas/",
       "VERSION"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
