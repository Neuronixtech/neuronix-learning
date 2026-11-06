module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6366020ed05b321586",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "The Workbench on a Real Repo (Part 2 of 3) — Three Scripted Pipelines",
 "titleKn": "ನಿಜ Repo ಮೇಲೆ Workbench (ಭಾಗ 2 / 3) — ಮೂರು ಸ್ಕ್ರಿಪ್ಟ್ Pipelines",
 "desc": "Run three scripted pipelines on copies of one fixture, audit scope by hash against a baseline and see an independent probe catch what weak tests missed.",
 "descKn": "ಒಂದು fixture ನ ನಕಲುಗಳ ಮೇಲೆ ಮೂರು ಸ್ಕ್ರಿಪ್ಟ್ pipelines ಓಡಿಸಿ, baseline ವಿರುದ್ಧ hash ಮೂಲಕ ವ್ಯಾಪ್ತಿ ಲೆಕ್ಕಪರಿಶೋಧಿಸಿ ಮತ್ತು ದುರ್ಬಲ ಪರೀಕ್ಷೆಗಳು ತಪ್ಪಿಸಿದ್ದನ್ನು ಸ್ವತಂತ್ರ probe ಹಿಡಿಯುವುದನ್ನು ನೋಡಿ.",
 "objectives": [
  "Compare pipelines on identical copies.",
  "Audit scope by hash against a baseline.",
  "Separate tests run from acceptance met.",
  "Ignore generated files explicitly.",
  "Label scripted results as scripted."
 ],
 "objectivesKn": [
  "ಒಂದೇ ನಕಲುಗಳ ಮೇಲೆ pipelines ಹೋಲಿಸಿ.",
  "baseline ವಿರುದ್ಧ hash ಮೂಲಕ ವ್ಯಾಪ್ತಿ ಲೆಕ್ಕಪರಿಶೋಧಿಸಿ.",
  "ಪರೀಕ್ಷೆ ಓಡಿದ್ದು ಮತ್ತು acceptance ಪೂರೈಸಿದ್ದು ಬೇರ್ಪಡಿಸಿ.",
  "ಉತ್ಪಾದಿತ ಫೈಲ್‌ಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ನಿರ್ಲಕ್ಷಿಸಿ.",
  "ಸ್ಕ್ರಿಪ್ಟ್ ಫಲಿತಾಂಶಗಳನ್ನು ಸ್ಕ್ರಿಪ್ಟ್ ಎಂದು ಹೆಸರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "The Workbench on a Real Repo (Part 2 of 3)",
    "textKn": "ನಿಜ Repo ಮೇಲೆ Workbench (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: three scripted pipelines run on separate copies of one fixture, with a hash-based scope audit, an independent probe, a gate, a 20-point reviewer and a comparison file. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind evaluating an agent workbench on a real repository (fixtures, independent probes, scope audits, git baselines and experiment design), not the real software, and the pipelines are fixed scripts that stand in for agents, with no language model involved, so no real LLM behaviour is measured. The pasted lesson said its original main.py was not supplied, so the labs are our own implementation of the behaviour it describes; results depend on the machine they ran on. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಒಂದು fixture ನ ಪ್ರತ್ಯೇಕ ನಕಲುಗಳ ಮೇಲೆ ಓಡಿಸಿದ ಮೂರು ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ pipelines, hash-ಆಧಾರಿತ ವ್ಯಾಪ್ತಿ ಲೆಕ್ಕಪರಿಶೋಧನೆ, ಸ್ವತಂತ್ರ probe, gate, 20-ಅಂಕ reviewer ಮತ್ತು ಹೋಲಿಕೆ ಫೈಲ್. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ನಿಜ repository ಮೇಲೆ agent workbench ಮೌಲ್ಯಮಾಪನ (fixtures, ಸ್ವತಂತ್ರ probes, ವ್ಯಾಪ್ತಿ ಲೆಕ್ಕಪರಿಶೋಧನೆ, git baselines ಮತ್ತು ಪ್ರಯೋಗ ವಿನ್ಯಾಸ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು pipelines ಕೇವಲ agents ಬದಲಿಗೆ ನಿಲ್ಲುವ ನಿಶ್ಚಿತ ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳು, ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಮೂಲ main.py ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ; ಫಲಿತಾಂಶಗಳು ಅವು ಓಡಿದ ಯಂತ್ರವನ್ನು ಅವಲಂಬಿಸಿವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Same Task, Different Process",
    "textKn": "ಅದೇ ಕಾರ್ಯ, ಬೇರೆ ಪ್ರಕ್ರಿಯೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Measure the Machinery Honestly",
    "headingKn": "ಯಂತ್ರೋಪಕರಣವನ್ನು ಪ್ರಾಮಾಣಿಕವಾಗಿ ಅಳೆಯಿರಿ",
    "bodyEn": "The lesson compares a prompt-only pipeline with a workbench-guided one on the same task. Here each pipeline is a fixed script run on its own copy of the fixture: one edits the code correctly but runs no tests and edits a protected file, one does everything, and a third ships an off-by-one bug whose own weak tests pass. The scope audit hashes files against the baseline, the probe checks behaviour from outside, and the gate and reviewer score the results. Because the scripts are written by hand, the comparison tests the checks, not any agent.",
    "bodyKn": "lesson ಅದೇ ಕಾರ್ಯದ ಮೇಲೆ prompt-only pipeline ಅನ್ನು workbench-ಮಾರ್ಗದರ್ಶಿತ pipeline ಗೆ ಹೋಲಿಸುತ್ತದೆ. ಇಲ್ಲಿ ಪ್ರತಿ pipeline fixture ನ ತನ್ನದೇ ನಕಲಿನ ಮೇಲೆ ಓಡುವ ನಿಶ್ಚಿತ ಸ್ಕ್ರಿಪ್ಟ್: ಒಂದು ಕೋಡ್ ಸರಿಯಾಗಿ ಸಂಪಾದಿಸಿ ಪರೀಕ್ಷೆ ಓಡಿಸದೆ ರಕ್ಷಿತ ಫೈಲ್ ಸಂಪಾದಿಸುತ್ತದೆ, ಒಂದು ಎಲ್ಲವನ್ನೂ ಮಾಡುತ್ತದೆ, ಮೂರನೆಯದು ತನ್ನ ದುರ್ಬಲ ಪರೀಕ್ಷೆಗಳು ಪಾಸ್ ಆಗುವ off-by-one ದೋಷ ಕಳುಹಿಸುತ್ತದೆ. ವ್ಯಾಪ್ತಿ ಲೆಕ್ಕಪರಿಶೋಧನೆ baseline ವಿರುದ್ಧ ಫೈಲ್‌ಗಳನ್ನು hash ಮಾಡುತ್ತದೆ, probe ಹೊರಗಿನಿಂದ ವರ್ತನೆ ಪರಿಶೀಲಿಸುತ್ತದೆ, ಮತ್ತು gate ಹಾಗೂ reviewer ಫಲಿತಾಂಶಗಳಿಗೆ ಅಂಕ ನೀಡುತ್ತವೆ. ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳನ್ನು ಕೈಯಿಂದ ಬರೆದಿರುವುದರಿಂದ, ಹೋಲಿಕೆ ಪರಿಶೀಲನೆಗಳನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ, ಯಾವುದೇ agent ಅಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Three Scripted Pipelines",
    "headingKn": "ಮೂರು ಸ್ಕ್ರಿಪ್ಟ್ Pipelines",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Three scripted pipelines</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">prompt-only</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">no tests, README edited</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">workbench</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">tests, scope, handoff</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">weak tests</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">off by one, probe fails</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">gate + review</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">tests and acceptance differ</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">scripts show machinery, not real agents</text></svg>",
    "captionEn": "Scripts show the machinery, not real agents.",
    "captionKn": "ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳು ಯಂತ್ರೋಪಕರಣ ತೋರಿಸುತ್ತವೆ, ನಿಜ agents ಅಲ್ಲ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The three scripts",
    "headingKn": "ಮೂರು ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳು",
    "headers": [
     "Pipeline",
     "Does",
     "Expected gate"
    ],
    "rows": [
     [
      "prompt_only",
      "fixes code, edits README, no tests, no handoff",
      "BLOCK"
     ],
     [
      "workbench",
      "fixes code, writes three tests, runs them, hands off",
      "ALLOW"
     ],
     [
      "workbench_weak_tests",
      "limit of 7, two tests that miss the boundary",
      "BLOCK, caught by the probe"
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
    "filename": "rw_2.py",
    "headingEn": "Audit, probe, reviewer and pipeline",
    "headingKn": "Audit, probe, reviewer ಮತ್ತು pipeline",
    "descEn": "hashes and audit compare file hashes with the baseline and ignore __pycache__. run_tests records the exit code and the test count. probe checks behaviour in a separate interpreter. reviewer scores four criteria out of five. pipeline runs one scripted behaviour on a copy and assembles the result.",
    "descKn": "hashes ಮತ್ತು audit ಫೈಲ್ hashes ಅನ್ನು baseline ಗೆ ಹೋಲಿಸಿ __pycache__ ನಿರ್ಲಕ್ಷಿಸುತ್ತವೆ. run_tests exit code ಮತ್ತು ಪರೀಕ್ಷಾ ಎಣಿಕೆ ದಾಖಲಿಸುತ್ತದೆ. probe ಪ್ರತ್ಯೇಕ interpreter ನಲ್ಲಿ ವರ್ತನೆ ಪರಿಶೀಲಿಸುತ್ತದೆ. reviewer ನಾಲ್ಕು ಮಾನದಂಡಗಳಿಗೆ ಐದರಲ್ಲಿ ಅಂಕ ನೀಡುತ್ತದೆ. pipeline ಒಂದು ನಕಲಿನ ಮೇಲೆ ಒಂದು ಸ್ಕ್ರಿಪ್ಟ್ ವರ್ತನೆ ಓಡಿಸಿ ಫಲಿತಾಂಶ ಜೋಡಿಸುತ್ತದೆ.",
    "code": "def hashes(root):\n    return {str(p.relative_to(root)).replace(chr(92), \"/\"): hashlib.sha256(p.read_bytes()).hexdigest() for p in root.rglob(\"*\") if p.is_file() and \"__pycache__\" not in p.parts}\n\n\ndef audit(before, after):\n    changed = sorted(k for k in set(before) | set(after) if before.get(k) != after.get(k))\n    return changed, [c for c in changed if c not in ALLOWED]\n\n\ndef run_tests(root):\n    p = subprocess.run([PY, \"-B\", \"-m\", \"unittest\", \"test_app\"], cwd=root, capture_output=True, text=True, timeout=60)\n    m = re.search(r\"Ran (\\d+) test\", p.stderr)\n    return p.returncode, int(m.group(1)) if m else 0\n\n\ndef probe(root):\n    return subprocess.run([PY, \"-B\", \"-I\", \"-c\", PROBE, str(root)], capture_output=True, text=True, timeout=60).returncode == 0\n\n\ndef reviewer(r):\n    return {\"functional\": 5 if r[\"acceptance_met\"] else 0, \"test_evidence\": 5 if r[\"tests_actually_run\"] else 0, \"scope\": 5 if not r[\"files_outside_scope\"] else 0, \"handoff\": 5 if r[\"handoff\"] else 0}\n\n\ndef pipeline(name, base):\n    root = Path(tempfile.mkdtemp()) / name\n    shutil.copytree(base, root)\n    before = hashes(root)\n    handoff = False\n    if name == \"prompt_only\":\n        (root / \"app.py\").write_text(app(8), encoding=\"utf-8\")\n        (root / \"README.md\").write_text(\"Updated docs for signup.\" + chr(10), encoding=\"utf-8\")\n        code, ran = None, 0\n    elif name == \"workbench\":\n        (root / \"app.py\").write_text(app(8), encoding=\"utf-8\")\n        (root / \"test_app.py\").write_text(HEAD + T_VALID + T_SHORT + T_BOUND, encoding=\"utf-8\")\n        code, ran = run_tests(root)\n        handoff = True\n    else:\n        (root / \"app.py\").write_text(app(7), encoding=\"utf-8\")\n        (root / \"test_app.py\").write_text(HEAD + T_VALID + T_SHORT, encoding=\"utf-8\")\n        code, ran = run_tests(root)\n        handoff = True\n    changed, outside = audit(before, hashes(root))\n    r = {\"pipeline\": name, \"own_tests_exit\": code, \"tests_run\": ran, \"tests_actually_run\": code == 0 and ran > 0, \"acceptance_met\": probe(root), \"files_changed\": changed, \"files_outside_scope\": outside, \"handoff\": handoff}\n    r[\"gate\"] = \"ALLOW\" if r[\"tests_actually_run\"] and r[\"acceptance_met\"] and not outside else \"BLOCK\"\n    r[\"review\"] = sum(reviewer(r).values())\n    return r"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rw_2.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the three pipelines, compares tests-run with acceptance-met, shows what running tests without -B does to a hash audit, compares a baseline audit with a bare directory listing and writes comparison.json.",
    "descKn": "main() ಮೂರು pipelines ಓಡಿಸಿ, tests-run ಅನ್ನು acceptance-met ಗೆ ಹೋಲಿಸಿ, -B ಇಲ್ಲದೆ ಪರೀಕ್ಷೆ ಓಡಿಸಿದರೆ hash ಲೆಕ್ಕಪರಿಶೋಧನೆಗೆ ಏನಾಗುತ್ತದೆ ಎಂದು ತೋರಿಸಿ, baseline ಲೆಕ್ಕಪರಿಶೋಧನೆಯನ್ನು ಕೇವಲ ಡೈರೆಕ್ಟರಿ ಪಟ್ಟಿಗೆ ಹೋಲಿಸಿ comparison.json ಬರೆಯುತ್ತದೆ.",
    "code": "def main():\n    base = Path(tempfile.mkdtemp()) / \"base\"\n    base.mkdir()\n    (base / \"app.py\").write_text(APP_BASE, encoding=\"utf-8\")\n    (base / \"test_app.py\").write_text(\"import unittest\" + chr(10), encoding=\"utf-8\")\n    (base / \"README.md\").write_text(\"Protected docs.\" + chr(10), encoding=\"utf-8\")\n    (base / \"release.sh\").write_text(\"echo release\" + chr(10), encoding=\"utf-8\")\n\n    section(\"1. Genuinely running: three scripted pipelines on separate copies of one fixture\")\n    results = [pipeline(n, base) for n in (\"prompt_only\", \"workbench\", \"workbench_weak_tests\")]\n    for r in results:\n        print(f\"{r['pipeline']:22} own tests exit={r['own_tests_exit']!s:5} ran={r['tests_run']} acceptance probe={r['acceptance_met']!s:5} outside scope={r['files_outside_scope']} gate={r['gate']:5} review={r['review']}/20\")\n    print(\"the prompt-only script fixed the code correctly (the probe passed) but ran no tests, edited the protected README and left no handoff; the workbench script passed every check; the third script shipped an off-by-one bug whose own weak tests passed and was caught only by the independent probe\")\n\n    section(\"2. Genuinely measuring: acceptance and tests are different facts\")\n    for r in results:\n        print(f\"{r['pipeline']:22} tests_actually_run={r['tests_actually_run']!s:5} acceptance_met={r['acceptance_met']}\")\n    print(\"the prompt-only script has tests_actually_run False and acceptance_met True and the weak-test script has the reverse, so neither fact can stand in for the other, and a gate needs both\")\n\n    section(\"3. Genuinely measuring: the scope audit and bytecode caches\")\n    root = Path(tempfile.mkdtemp()) / \"audit\"\n    shutil.copytree(base, root)\n    (root / \"app.py\").write_text(app(8), encoding=\"utf-8\")\n    (root / \"test_app.py\").write_text(HEAD + T_VALID, encoding=\"utf-8\")\n    before = {str(p.relative_to(root)).replace(chr(92), \"/\"): hashlib.sha256(p.read_bytes()).hexdigest() for p in root.rglob(\"*\") if p.is_file()}\n    subprocess.run([PY, \"-m\", \"unittest\", \"test_app\"], cwd=root, capture_output=True, text=True)\n    after = {str(p.relative_to(root)).replace(chr(92), \"/\"): hashlib.sha256(p.read_bytes()).hexdigest() for p in root.rglob(\"*\") if p.is_file()}\n    new = sorted(set(after) - set(before))\n    print(\"files created just by running the tests without -B:\", new)\n    print(\"an audit that hashes every file would have flagged these as scope violations; the lab excludes __pycache__ and runs with -B, and a real audit needs an explicit ignore list for generated files\")\n\n    section(\"4. Genuinely checking: the baseline is what makes the audit work\")\n    root = Path(tempfile.mkdtemp()) / \"nobase\"\n    shutil.copytree(base, root)\n    (root / \"release.sh\").write_text(\"echo release --prod\" + chr(10), encoding=\"utf-8\")\n    print(\"changes found by comparing with the baseline hashes:\", audit(hashes(base), hashes(root))[1])\n    print(\"a listing of the final directory alone shows\", sorted(hashes(root)), \"and cannot say which of them the task changed\")\n\n    section(\"5. Genuinely writing: comparison.json\")\n    out = Path(tempfile.mkdtemp()) / \"comparison.json\"\n    out.write_text(json.dumps({\"scripted\": True, \"results\": [{k: r[k] for k in (\"pipeline\", \"tests_actually_run\", \"acceptance_met\", \"gate\", \"review\")} for r in results]}, indent=2), encoding=\"utf-8\")\n    print(out.read_text(encoding=\"utf-8\"))\n    print(\"the file records scripted: true on purpose; three hand-written scripts cannot show that a workbench improves a real agent, only that the checks distinguish these three behaviours\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: three scripted pipelines on separate copies of one fixture ---\nprompt_only            own tests exit=None  ran=0 acceptance probe=True  outside scope=['README.md'] gate=BLOCK review=5/20\nworkbench              own tests exit=0     ran=3 acceptance probe=True  outside scope=[] gate=ALLOW review=20/20\nworkbench_weak_tests   own tests exit=0     ran=2 acceptance probe=False outside scope=[] gate=BLOCK review=15/20\nthe prompt-only script fixed the code correctly (the probe passed) but ran no tests, edited the protected README and left no handoff; the workbench script passed every check; the third script shipped an off-by-one bug whose own weak tests passed and was caught only by the independent probe\n\n--- 2. Genuinely measuring: acceptance and tests are different facts ---\nprompt_only            tests_actually_run=False acceptance_met=True\nworkbench              tests_actually_run=True  acceptance_met=True\nworkbench_weak_tests   tests_actually_run=True  acceptance_met=False\nthe prompt-only script has tests_actually_run False and acceptance_met True and the weak-test script has the reverse, so neither fact can stand in for the other, and a gate needs both\n\n--- 3. Genuinely measuring: the scope audit and bytecode caches ---\nfiles created just by running the tests without -B: ['__pycache__/app.cpython-314.pyc', '__pycache__/test_app.cpython-314.pyc']\nan audit that hashes every file would have flagged these as scope violations; the lab excludes __pycache__ and runs with -B, and a real audit needs an explicit ignore list for generated files\n\n--- 4. Genuinely checking: the baseline is what makes the audit work ---\nchanges found by comparing with the baseline hashes: ['release.sh']\na listing of the final directory alone shows ['README.md', 'app.py', 'release.sh', 'test_app.py'] and cannot say which of them the task changed\n\n--- 5. Genuinely writing: comparison.json ---\n{\n  \"scripted\": true,\n  \"results\": [\n    {\n      \"pipeline\": \"prompt_only\",\n      \"tests_actually_run\": false,\n      \"acceptance_met\": true,\n      \"gate\": \"BLOCK\",\n      \"review\": 5\n    },\n    {\n      \"pipeline\": \"workbench\",\n      \"tests_actually_run\": true,\n      \"acceptance_met\": true,\n      \"gate\": \"ALLOW\",\n      \"review\": 20\n    },\n    {\n      \"pipeline\": \"workbench_weak_tests\",\n      \"tests_actually_run\": true,\n      \"acceptance_met\": false,\n      \"gate\": \"BLOCK\",\n      \"review\": 15\n    }\n  ]\n}\nthe file records scripted: true on purpose; three hand-written scripts cannot show that a workbench improves a real agent, only that the checks distinguish these three behaviours"
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
    "headingEn": "Genuinely Found: The Probe Caught What the Pipeline's Own Tests Missed",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Pipeline ನ ಸ್ವಂತ ಪರೀಕ್ಷೆಗಳು ತಪ್ಪಿಸಿದ್ದನ್ನು Probe ಹಿಡಿಯಿತು",
    "bodyEn": "Section 1: prompt_only ran no tests, had a passing probe, changed README.md and scored 5 of 20 with gate BLOCK; workbench ran 3 tests, passed the probe, changed nothing out of scope and scored 20 of 20 with ALLOW; workbench_weak_tests ran 2 passing tests, failed the probe and scored 15 of 20 with BLOCK. Section 2: tests_actually_run and acceptance_met were True/False for the two flawed scripts in opposite directions.",
    "bodyKn": "ವಿಭಾಗ 1: prompt_only ಯಾವುದೇ ಪರೀಕ್ಷೆ ಓಡಿಸಲಿಲ್ಲ, probe ಪಾಸ್ ಆಗಿತ್ತು, README.md ಬದಲಿಸಿ 20 ರಲ್ಲಿ 5 ಅಂಕ ಮತ್ತು BLOCK ಪಡೆಯಿತು; workbench 3 ಪರೀಕ್ಷೆ ಓಡಿಸಿ, probe ಪಾಸ್ ಮಾಡಿ, ವ್ಯಾಪ್ತಿಯ ಹೊರಗೆ ಏನನ್ನೂ ಬದಲಿಸದೆ 20 ರಲ್ಲಿ 20 ಮತ್ತು ALLOW ಪಡೆಯಿತು; workbench_weak_tests 2 ಪಾಸ್ ಆಗುವ ಪರೀಕ್ಷೆ ಓಡಿಸಿ, probe ವಿಫಲವಾಗಿ 20 ರಲ್ಲಿ 15 ಮತ್ತು BLOCK ಪಡೆಯಿತು. ವಿಭಾಗ 2: ಎರಡು ದೋಷಯುಕ್ತ ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳಿಗೆ tests_actually_run ಮತ್ತು acceptance_met ವಿರುದ್ಧ ದಿಕ್ಕುಗಳಲ್ಲಿ True/False ಆಗಿದ್ದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Audits Need a Baseline and an Ignore List",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಲೆಕ್ಕಪರಿಶೋಧನೆಗೆ Baseline ಮತ್ತು ನಿರ್ಲಕ್ಷಿಸುವ ಪಟ್ಟಿ ಬೇಕು",
    "bodyEn": "Section 3: running the tests without -B created two __pycache__ .pyc files that a hash-everything audit would flag. Section 4: comparing against baseline hashes found only release.sh as changed, while the final directory listing alone could not say what changed. Section 5: comparison.json was written with scripted: true; its three results repeat the scores above.",
    "bodyKn": "ವಿಭಾಗ 3: -B ಇಲ್ಲದೆ ಪರೀಕ್ಷೆ ಓಡಿಸಿದ್ದು ಎರಡು __pycache__ .pyc ಫೈಲ್ ಸೃಷ್ಟಿಸಿತು, hash-ಎಲ್ಲವನ್ನೂ ಲೆಕ್ಕಪರಿಶೋಧನೆ ಅವನ್ನು ಗುರುತಿಸುತ್ತಿತ್ತು. ವಿಭಾಗ 4: baseline hashes ಗೆ ಹೋಲಿಸಿದಾಗ release.sh ಮಾತ್ರ ಬದಲಾಗಿತ್ತು ಎಂದು ಕಂಡುಬಂತು, ಅಂತಿಮ ಡೈರೆಕ್ಟರಿ ಪಟ್ಟಿ ಮಾತ್ರ ಏನು ಬದಲಾಯಿತು ಎಂದು ಹೇಳಲಾರದು. ವಿಭಾಗ 5: comparison.json scripted: true ನೊಂದಿಗೆ ಬರೆಯಲ್ಪಟ್ಟಿತು; ಅದರ ಮೂರು ಫಲಿತಾಂಶಗಳು ಮೇಲಿನ ಅಂಕಗಳನ್ನು ಪುನರಾವರ್ತಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A fair comparison records what each pipeline did and measures the result from outside, and it says plainly when the pipelines were scripted.",
    "bodyKn": "ನ್ಯಾಯಯುತ ಹೋಲಿಕೆ ಪ್ರತಿ pipeline ಏನು ಮಾಡಿತು ಎಂದು ದಾಖಲಿಸಿ ಫಲಿತಾಂಶವನ್ನು ಹೊರಗಿನಿಂದ ಅಳೆಯುತ್ತದೆ, ಮತ್ತು pipelines ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಲ್ಪಟ್ಟಿದ್ದವು ಎಂದು ಸ್ಪಷ್ಟವಾಗಿ ಹೇಳುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the workbench scored 20 and the prompt-only run 5, so workbenches work.\" Both were hand-written scripts.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"workbench 20 ಮತ್ತು prompt-only 5 ಪಡೆಯಿತು, ಆದ್ದರಿಂದ workbenches ಕೆಲಸ ಮಾಡುತ್ತವೆ.\" ಎರಡೂ ಕೈಯಿಂದ ಬರೆದ ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳಾಗಿದ್ದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Prompt-only pipeline: instructions, an edit and a claim. Workbench-guided pipeline: rules, scope, tests, gate, review and handoff. Hash audit: comparing file digests with a baseline. Independent probe: a check outside the pipeline. Scripted: written by hand, not produced by a model.",
    "bodyKn": "Prompt-only pipeline: ಸೂಚನೆಗಳು, ಸಂಪಾದನೆ ಮತ್ತು ಹೇಳಿಕೆ. Workbench-guided pipeline: ನಿಯಮಗಳು, ವ್ಯಾಪ್ತಿ, ಪರೀಕ್ಷೆಗಳು, gate, review ಮತ್ತು ಹಸ್ತಾಂತರ. Hash audit: ಫೈಲ್ digests ಅನ್ನು baseline ಗೆ ಹೋಲಿಸುವುದು. Independent probe: pipeline ಹೊರಗಿನ ಪರಿಶೀಲನೆ. Scripted: ಕೈಯಿಂದ ಬರೆದದ್ದು, ಮಾದರಿ ಉತ್ಪಾದಿಸಿದ್ದಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) prompt_only scored 5 of 20 and was blocked. 2) workbench scored 20 of 20 and was allowed. 3) The weak-tests script passed its own tests and failed the probe. 4) Running tests without -B created files a hash audit would flag. 5) The scripted results prove nothing about real agents.",
    "bodyKn": "1) prompt_only 20 ರಲ್ಲಿ 5 ಪಡೆದು ತಡೆಯಲ್ಪಟ್ಟಿತು. 2) workbench 20 ರಲ್ಲಿ 20 ಪಡೆದು ಅನುಮತಿಸಲ್ಪಟ್ಟಿತು. 3) ದುರ್ಬಲ-ಪರೀಕ್ಷೆ ಸ್ಕ್ರಿಪ್ಟ್ ತನ್ನ ಪರೀಕ್ಷೆ ಪಾಸ್ ಮಾಡಿ probe ವಿಫಲವಾಯಿತು. 4) -B ಇಲ್ಲದೆ ಪರೀಕ್ಷೆ ಓಡಿಸಿದ್ದು hash ಲೆಕ್ಕಪರಿಶೋಧನೆ ಗುರುತಿಸುವ ಫೈಲ್ ಸೃಷ್ಟಿಸಿತು. 5) ಸ್ಕ್ರಿಪ್ಟ್ ಫಲಿತಾಂಶಗಳು ನಿಜ agents ಬಗ್ಗೆ ಏನನ್ನೂ ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What score did the prompt_only script get out of 20?",
      "qKn": "prompt_only ಸ್ಕ್ರಿಪ್ಟ್ 20 ರಲ್ಲಿ ಎಷ್ಟು ಅಂಕ ಪಡೆಯಿತು?",
      "opts": [
       "5",
       "20",
       "15",
       "0"
      ],
      "optsKn": [
       "5",
       "20",
       "15",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "Which script passed its own tests but failed the probe?",
      "qKn": "ಯಾವ ಸ್ಕ್ರಿಪ್ಟ್ ತನ್ನ ಪರೀಕ್ಷೆಗಳನ್ನು ಪಾಸ್ ಮಾಡಿ probe ವಿಫಲವಾಯಿತು?",
      "opts": [
       "workbench_weak_tests",
       "workbench",
       "prompt_only",
       "none"
      ],
      "optsKn": [
       "workbench_weak_tests",
       "workbench",
       "prompt_only",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Which protected file did prompt_only change?",
      "qKn": "prompt_only ಯಾವ ರಕ್ಷಿತ ಫೈಲ್ ಬದಲಿಸಿತು?",
      "opts": [
       "README.md",
       "release.sh",
       "app.py",
       "none"
      ],
      "optsKn": [
       "README.md",
       "release.sh",
       "app.py",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Why must a hash audit ignore __pycache__ or run tests with -B?",
      "qKn": "hash ಲೆಕ್ಕಪರಿಶೋಧನೆ __pycache__ ಅನ್ನು ಏಕೆ ನಿರ್ಲಕ್ಷಿಸಬೇಕು ಅಥವಾ -B ಯೊಂದಿಗೆ ಪರೀಕ್ಷೆ ಓಡಿಸಬೇಕು?",
      "opts": [
       "Running tests creates .pyc files that look like changes",
       "Python forbids it",
       "Hashes are too slow",
       "git requires it"
      ],
      "optsKn": [
       "ಪರೀಕ್ಷೆ ಓಡಿಸುವುದು ಬದಲಾವಣೆಯಂತೆ ಕಾಣುವ .pyc ಫೈಲ್ ಸೃಷ್ಟಿಸುತ್ತದೆ",
       "Python ನಿಷೇಧಿಸುತ್ತದೆ",
       "Hashes ತುಂಬಾ ನಿಧಾನ",
       "git ಅಗತ್ಯವಿದೆ"
      ],
      "correct": 0
     },
     {
      "q": "What does scripted: true in comparison.json warn about?",
      "qKn": "comparison.json ನಲ್ಲಿನ scripted: true ಏನನ್ನು ಎಚ್ಚರಿಸುತ್ತದೆ?",
      "opts": [
       "The pipelines were hand-written, not real agents",
       "The file is encrypted",
       "The tests were skipped",
       "The probe failed"
      ],
      "optsKn": [
       "pipelines ಕೈಯಿಂದ ಬರೆದವು, ನಿಜ agents ಅಲ್ಲ",
       "ಫೈಲ್ ಎನ್‌ಕ್ರಿಪ್ಟ್ ಆಗಿದೆ",
       "ಪರೀಕ್ಷೆಗಳನ್ನು ಬಿಡಲಾಯಿತು",
       "probe ವಿಫಲವಾಯಿತು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
