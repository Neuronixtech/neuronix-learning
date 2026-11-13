module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321574",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Initialization Scripts for Agents (Part 1 of 3) — Five Probes and a Report",
 "titleKn": "Agents ಗಾಗಿ ಆರಂಭ ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳು (ಭಾಗ 1 / 3) — ಐದು Probes ಮತ್ತು ವರದಿ",
 "desc": "Run five deterministic readiness probes on this machine, write a report, gate on a real exit code and check that initialization is repeatable.",
 "descKn": "ಈ ಯಂತ್ರದಲ್ಲಿ ಐದು ನಿರ್ಣಾಯಕ ಸಿದ್ಧತೆ probes ಓಡಿಸಿ, ವರದಿ ಬರೆದು, ನಿಜ exit code ಮೇಲೆ gate ಮಾಡಿ ಮತ್ತು ಆರಂಭ ಪುನರಾವರ್ತನೀಯ ಎಂದು ಪರಿಶೀಲಿಸಿ.",
 "objectives": [
  "Name the five probes and what each cannot prove.",
  "Collect every failure in one report.",
  "Never print secret values.",
  "Gate on the exit code.",
  "Check idempotency."
 ],
 "objectivesKn": [
  "ಐದು probes ಮತ್ತು ಪ್ರತಿಯೊಂದೂ ಏನು ಸಾಬೀತುಪಡಿಸಲಾರದು ಹೆಸರಿಸಿ.",
  "ಪ್ರತಿ ವೈಫಲ್ಯವನ್ನು ಒಂದು ವರದಿಯಲ್ಲಿ ಸಂಗ್ರಹಿಸಿ.",
  "ರಹಸ್ಯ ಮೌಲ್ಯಗಳನ್ನು ಎಂದೂ ಮುದ್ರಿಸಬೇಡಿ.",
  "Exit code ಮೇಲೆ gate ಮಾಡಿ.",
  "Idempotency ಪರಿಶೀಲಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Initialization Scripts for Agents (Part 1 of 3)",
    "textKn": "Agents ಗಾಗಿ ಆರಂಭ ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳು (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: five readiness probes, a JSON report, a real exit code and idempotency. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind initialization scripts for agents (readiness probes, reports, gates and anchors), not the real software, and the probes run against this machine and a temporary git repository and no language model is involved, so no real LLM behaviour is measured. The pasted lesson said its original main.py was not supplied, so the lab is our own implementation of the behaviour it describes; results depend on the machine it ran on. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಐದು ಸಿದ್ಧತೆ probes, JSON ವರದಿ, ನಿಜ exit code ಮತ್ತು idempotency. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು agents ಗಾಗಿ ಆರಂಭ ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳು (ಸಿದ್ಧತೆ probes, ವರದಿಗಳು, gates ಮತ್ತು anchors) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು probes ಈ ಯಂತ್ರ ಮತ್ತು ತಾತ್ಕಾಲಿಕ git repository ಮೇಲೆ ಓಡುತ್ತವೆ ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಮೂಲ main.py ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ; ಫಲಿತಾಂಶಗಳು ಅದು ಓಡಿದ ಯಂತ್ರವನ್ನು ಅವಲಂಬಿಸಿವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Cost of a Cold Start",
    "textKn": "ಶೀತ ಆರಂಭದ ವೆಚ್ಚ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Probe Once, Persist the Answers",
    "headingKn": "ಒಮ್ಮೆ probe ಮಾಡಿ, ಉತ್ತರಗಳನ್ನು ಉಳಿಸಿ",
    "bodyEn": "A new agent session otherwise spends its first minutes rediscovering the same facts: which Python, which packages, which test command, whether the saved state can be trusted. An initialization script checks these deterministically before the agent starts, records every result in a JSON report and exits non-zero when a blocking check fails. This part runs five probes on this machine, with satisfiable and unsatisfiable requirements, and tests the report, the exit code and repeatability.",
    "bodyKn": "ಹೊಸ agent ಸೆಷನ್ ಇಲ್ಲದಿದ್ದರೆ ತನ್ನ ಮೊದಲ ನಿಮಿಷಗಳನ್ನು ಅದೇ ಸತ್ಯಗಳನ್ನು ಮರುಕಂಡುಹಿಡಿಯಲು ಖರ್ಚು ಮಾಡುತ್ತದೆ: ಯಾವ Python, ಯಾವ ಪ್ಯಾಕೇಜ್‌ಗಳು, ಯಾವ ಪರೀಕ್ಷಾ ಆದೇಶ, ಉಳಿಸಿದ ಸ್ಥಿತಿಯನ್ನು ನಂಬಬಹುದೇ. ಆರಂಭ ಸ್ಕ್ರಿಪ್ಟ್ agent ಆರಂಭಿಸುವ ಮುನ್ನ ಇವನ್ನು ನಿರ್ಣಾಯಕವಾಗಿ ಪರಿಶೀಲಿಸಿ, ಪ್ರತಿ ಫಲಿತಾಂಶವನ್ನು JSON ವರದಿಯಲ್ಲಿ ದಾಖಲಿಸಿ, ತಡೆಯುವ ಪರಿಶೀಲನೆ ವಿಫಲವಾದಾಗ ಶೂನ್ಯೇತರದೊಂದಿಗೆ ನಿರ್ಗಮಿಸುತ್ತದೆ. ಈ ಭಾಗ ಈ ಯಂತ್ರದಲ್ಲಿ ತೃಪ್ತಿಪಡಿಸಬಹುದಾದ ಮತ್ತು ತೃಪ್ತಿಪಡಿಸಲಾಗದ ಅವಶ್ಯಕತೆಗಳೊಂದಿಗೆ ಐದು probes ಓಡಿಸಿ ವರದಿ, exit code ಮತ್ತು ಪುನರಾವರ್ತನೀಯತೆ ಪರೀಕ್ಷಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Probe, Record, Gate",
    "headingKn": "Probe, ದಾಖಲಿಸಿ, Gate",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Five probes, one report</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">runtime</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">python, deps</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">commands</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">env, state</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">report</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">JSON, every result</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">exit code</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the actual gate</text><path d=\"M90,47 H110 M190,47 H210 M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">probe once, record, and let the exit code decide</text></svg>",
    "captionEn": "The exit code is the gate.",
    "captionKn": "Exit code ಯೇ gate."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The five probes",
    "headingKn": "ಐದು probes",
    "headers": [
     "Probe",
     "Checks",
     "Does not prove"
    ],
    "rows": [
     [
      "python_version",
      "interpreter meets the minimum",
      "the right virtual environment is active"
     ],
     [
      "dependencies",
      "modules are discoverable",
      "they import and work"
     ],
     [
      "test_command",
      "the command resolves on PATH",
      "the tests pass"
     ],
     [
      "environment",
      "required variables are non-empty",
      "they hold valid values"
     ],
     [
      "state_freshness",
      "the state file is recent",
      "its content is valid"
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
    "filename": "in_1.py",
    "headingEn": "The five probes and the report",
    "headingKn": "ಐದು probes ಮತ್ತು ವರದಿ",
    "descEn": "Each probe returns the same dictionary shape (name, status, detail) so the report writer treats them alike. probe_dependencies catches the exceptions find_spec can raise. probe_env reports only the names of missing variables, never values. probe_state reads the modification time and refuses a future timestamp.",
    "descKn": "ಪ್ರತಿ probe ಒಂದೇ dictionary ಆಕಾರ (name, status, detail) ಮರಳಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ವರದಿ ಬರಹಗಾರ ಅವನ್ನು ಒಂದೇ ರೀತಿ ನಡೆಸಿಕೊಳ್ಳುತ್ತದೆ. probe_dependencies find_spec ಎತ್ತಬಹುದಾದ ಅಪವಾದಗಳನ್ನು ಹಿಡಿಯುತ್ತದೆ. probe_env ಕಾಣೆಯಾದ ವೇರಿಯಬಲ್‌ಗಳ ಹೆಸರುಗಳನ್ನು ಮಾತ್ರ ವರದಿ ಮಾಡುತ್ತದೆ, ಮೌಲ್ಯಗಳನ್ನಲ್ಲ. probe_state ಮಾರ್ಪಾಡು ಸಮಯ ಓದಿ ಭವಿಷ್ಯದ ಸಮಯಮುದ್ರೆ ತಿರಸ್ಕರಿಸುತ್ತದೆ.",
    "code": "def result(name, status, detail):\n    return {\"name\": name, \"status\": status, \"detail\": detail}\n\n\ndef probe_python(required=(3, 10)):\n    actual = sys.version_info[:2]\n    ok = actual >= required\n    return result(\"python_version\", \"pass\" if ok else \"fail\", f\"Python {actual[0]}.{actual[1]}\" + (\"\" if ok else f\" < required {required[0]}.{required[1]}\"))\n\n\ndef probe_dependencies(packages):\n    missing = []\n    for p in packages:\n        try:\n            spec = importlib.util.find_spec(p)\n        except (ImportError, ValueError):\n            spec = None\n        if spec is None:\n            missing.append(p)\n    return result(\"dependencies\", \"fail\" if missing else \"pass\", (\"Missing: \" + \", \".join(missing)) if missing else \"all discoverable\")\n\n\ndef probe_test_command(cmd):\n    path = shutil.which(cmd)\n    return result(\"test_command\", \"pass\" if path else \"fail\", f\"resolved {path}\" if path else f\"not found on PATH: {cmd}\")\n\n\ndef probe_env(names):\n    missing = [n for n in names if not os.environ.get(n)]\n    return result(\"environment\", \"fail\" if missing else \"pass\", (\"Missing: \" + \", \".join(missing)) if missing else \"required variables present\")\n\n\ndef probe_state(path, max_hours=24):\n    path = Path(path)\n    if not path.is_file():\n        return result(\"state_freshness\", \"fail\", f\"state file not found: {path.name}\")\n    age = (time.time() - path.stat().st_mtime) / 3600\n    if age < 0:\n        return result(\"state_freshness\", \"fail\", \"modification time is in the future\")\n    if age > max_hours:\n        return result(\"state_freshness\", \"fail\", f\"{age:.1f} h old, limit {max_hours}\")\n    return result(\"state_freshness\", \"pass\", f\"{age:.2f} h old\")\n\n\ndef report(probes):\n    fails = [p for p in probes if p[\"status\"] == \"fail\"]\n    return {\"healthy\": not fails, \"failure_count\": len(fails), \"probes\": probes}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "in_1.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the probes with satisfiable requirements, then with impossible ones, passes the report to a real subprocess that exits 0 or 1, sets file modification times with os.utime to test freshness and runs the probes twice to compare reports.",
    "descKn": "main() ತೃಪ್ತಿಪಡಿಸಬಹುದಾದ ಅವಶ್ಯಕತೆಗಳೊಂದಿಗೆ ಮತ್ತು ನಂತರ ಅಸಾಧ್ಯವಾದವುಗಳೊಂದಿಗೆ probes ಓಡಿಸಿ, ವರದಿಯನ್ನು 0 ಅಥವಾ 1 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸುವ ನಿಜ subprocess ಗೆ ನೀಡಿ, ತಾಜಾತನ ಪರೀಕ್ಷಿಸಲು os.utime ನೊಂದಿಗೆ ಫೈಲ್ ಮಾರ್ಪಾಡು ಸಮಯ ಹೊಂದಿಸಿ ಮತ್ತು ವರದಿಗಳನ್ನು ಹೋಲಿಸಲು probes ಎರಡು ಬಾರಿ ಓಡಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    with tempfile.TemporaryDirectory() as d:\n        state = Path(d) / \"agent_state.json\"\n        state.write_text(\"{}\", encoding=\"utf-8\")\n        os.environ[\"LAB_API_KEY\"] = \"dummy-value-not-a-secret\"\n\n        section(\"1. Genuinely running: all five probes on this machine with satisfiable requirements\")\n        probes = [probe_python((3, 8)), probe_dependencies([\"json\", \"pathlib\"]), probe_test_command(\"python\"), probe_env([\"LAB_API_KEY\"]), probe_state(state)]\n        for p in probes:\n            print(f\"{p['status'].upper():5} {p['name']:16} {p['detail'][:70]}\")\n        rep = report(probes)\n        print(\"healthy:\", rep[\"healthy\"], \"| failures:\", rep[\"failure_count\"])\n        print(\"the details name what was found and never print the value of the environment variable; a pass here says the check ran against this machine today and nothing about the application\")\n\n        section(\"2. Genuinely running: the same probes with requirements this machine cannot meet\")\n        probes = [probe_python((9, 0)), probe_dependencies([\"json\", \"no_such_package_xyz\"]), probe_test_command(\"no-such-test-runner\"), probe_env([\"LAB_MISSING_VARIABLE\"]), probe_state(Path(d) / \"gone.json\")]\n        for p in probes:\n            print(f\"{p['status'].upper():5} {p['name']:16} {p['detail'][:70]}\")\n        rep = report(probes)\n        print(\"healthy:\", rep[\"healthy\"], \"| failures:\", rep[\"failure_count\"])\n        print(\"all five failed independently and the report collected every failure instead of stopping at the first, so one run lists all five things to fix\")\n\n        section(\"3. Genuinely checking: the report and the exit code through a real subprocess\")\n        code = (\"import json,sys;r=json.loads(sys.argv[1]);print('RESULT:', 'HEALTHY' if r['healthy'] else 'BLOCKED');sys.exit(0 if r['healthy'] else 1)\")\n        for label, r in ((\"healthy report\", report([probe_python((3, 8))])), (\"blocked report\", rep)):\n            p = subprocess.run([sys.executable, \"-c\", code, json.dumps(r)], capture_output=True, text=True)\n            print(f\"{label:15} printed {p.stdout.strip():16} exit code {p.returncode}\")\n        print(\"a printed BLOCKED with exit code 0 would let the agent launch anyway; the launcher acts on the exit code, so the code has to be non-zero when a blocking probe fails\")\n\n        section(\"4. Genuinely checking: state freshness at the edges (modification times set with os.utime)\")\n        for label, offset_h in ((\"fresh (1 h old)\", 1), (\"old (30 h old)\", 30), (\"future (+2 h)\", -2)):\n            t = time.time() - offset_h * 3600\n            os.utime(state, (t, t))\n            print(f\"{label:16} {probe_state(state)}\")\n        os.utime(state, None)\n        state.write_text(\"{not json\", encoding=\"utf-8\")\n        print(\"fresh file with broken content:\", probe_state(state))\n        print(\"freshness only reads the modification time, so a file that was just written but is corrupt still passes; a content check is a separate probe\")\n\n        section(\"5. Genuinely measuring: idempotency, the report differs only in volatile fields\")\n        def run_once():\n            ps = [probe_python((3, 8)), probe_dependencies([\"json\"]), probe_test_command(\"python\"), probe_env([\"LAB_API_KEY\"]), probe_state(state)]\n            r = report(ps)\n            r[\"generated_at\"] = datetime.now(timezone.utc).isoformat()\n            return r\n        a, b = run_once(), run_once()\n        same = {k: a[k] == b[k] for k in a}\n        print(same)\n        print(\"only the timestamp differs between two runs; the checks themselves read state and change nothing, which is what makes initialization safe to repeat\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: all five probes on this machine with satisfiable requirements ---\nPASS  python_version   Python 3.14\nPASS  dependencies     all discoverable\nPASS  test_command     resolved C:\\Python314\\python.EXE\nPASS  environment      required variables present\nPASS  state_freshness  0.00 h old\nhealthy: True | failures: 0\nthe details name what was found and never print the value of the environment variable; a pass here says the check ran against this machine today and nothing about the application\n\n--- 2. Genuinely running: the same probes with requirements this machine cannot meet ---\nFAIL  python_version   Python 3.14 < required 9.0\nFAIL  dependencies     Missing: no_such_package_xyz\nFAIL  test_command     not found on PATH: no-such-test-runner\nFAIL  environment      Missing: LAB_MISSING_VARIABLE\nFAIL  state_freshness  state file not found: gone.json\nhealthy: False | failures: 5\nall five failed independently and the report collected every failure instead of stopping at the first, so one run lists all five things to fix\n\n--- 3. Genuinely checking: the report and the exit code through a real subprocess ---\nhealthy report  printed RESULT: HEALTHY  exit code 0\nblocked report  printed RESULT: BLOCKED  exit code 1\na printed BLOCKED with exit code 0 would let the agent launch anyway; the launcher acts on the exit code, so the code has to be non-zero when a blocking probe fails\n\n--- 4. Genuinely checking: state freshness at the edges (modification times set with os.utime) ---\nfresh (1 h old)  {'name': 'state_freshness', 'status': 'pass', 'detail': '1.00 h old'}\nold (30 h old)   {'name': 'state_freshness', 'status': 'fail', 'detail': '30.0 h old, limit 24'}\nfuture (+2 h)    {'name': 'state_freshness', 'status': 'fail', 'detail': 'modification time is in the future'}\nfresh file with broken content: {'name': 'state_freshness', 'status': 'pass', 'detail': '0.00 h old'}\nfreshness only reads the modification time, so a file that was just written but is corrupt still passes; a content check is a separate probe\n\n--- 5. Genuinely measuring: idempotency, the report differs only in volatile fields ---\n{'healthy': True, 'failure_count': True, 'probes': True, 'generated_at': False}\nonly the timestamp differs between two runs; the checks themselves read state and change nothing, which is what makes initialization safe to repeat"
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
    "headingEn": "Experiment 1: All five probes on this machine with satisfiable requirements",
    "headingKn": "ಪ್ರಯೋಗ 1: All five probes on this machine with satisfiable requirements",
    "bodyEn": "What it ran: All five probes on this machine with satisfiable requirements. What the lab concluded: the details name what was found and never print the value of the environment variable; a pass here says the check ran against this machine today and nothing about the application",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: All five probes on this machine with satisfiable requirements. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the details name what was found and never print the value of the environment variable; a pass here says the check ran against this machine today and nothing about the application"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: all five probes on this machine with satisfiable requirements ---\nPASS  python_version   Python 3.14\nPASS  dependencies     all discoverable\nPASS  test_command     resolved C:\\Python314\\python.EXE\nPASS  environment      required variables present\nPASS  state_freshness  0.00 h old\nhealthy: True | failures: 0"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: The same probes with requirements this machine cannot meet",
    "headingKn": "ಪ್ರಯೋಗ 2: The same probes with requirements this machine cannot meet",
    "bodyEn": "What it ran: The same probes with requirements this machine cannot meet. What the lab concluded: all five failed independently and the report collected every failure instead of stopping at the first, so one run lists all five things to fix",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The same probes with requirements this machine cannot meet. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): all five failed independently and the report collected every failure instead of stopping at the first, so one run lists all five things to fix"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: the same probes with requirements this machine cannot meet ---\nFAIL  python_version   Python 3.14 < required 9.0\nFAIL  dependencies     Missing: no_such_package_xyz\nFAIL  test_command     not found on PATH: no-such-test-runner\nFAIL  environment      Missing: LAB_MISSING_VARIABLE\nFAIL  state_freshness  state file not found: gone.json\nhealthy: False | failures: 5"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: The report and the exit code through a real subprocess",
    "headingKn": "ಪ್ರಯೋಗ 3: The report and the exit code through a real subprocess",
    "bodyEn": "What it ran: The report and the exit code through a real subprocess. What the lab concluded: a printed BLOCKED with exit code 0 would let the agent launch anyway; the launcher acts on the exit code, so the code has to be non-zero when a blocking probe fails",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The report and the exit code through a real subprocess. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a printed BLOCKED with exit code 0 would let the agent launch anyway; the launcher acts on the exit code, so the code has to be non-zero when a blocking probe fails"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely checking: the report and the exit code through a real subprocess ---\nhealthy report  printed RESULT: HEALTHY  exit code 0\nblocked report  printed RESULT: BLOCKED  exit code 1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: State freshness at the edges (modification times set with os.utime)",
    "headingKn": "ಪ್ರಯೋಗ 4: State freshness at the edges (modification times set with os.utime)",
    "bodyEn": "What it ran: State freshness at the edges (modification times set with os.utime). What the lab concluded: freshness only reads the modification time, so a file that was just written but is corrupt still passes; a content check is a separate probe",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: State freshness at the edges (modification times set with os.utime). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): freshness only reads the modification time, so a file that was just written but is corrupt still passes; a content check is a separate probe"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely checking: state freshness at the edges (modification times set with os.utime) ---\nfresh (1 h old)  {'name': 'state_freshness', 'status': 'pass', 'detail': '1.00 h old'}\nold (30 h old)   {'name': 'state_freshness', 'status': 'fail', 'detail': '30.0 h old, limit 24'}\nfuture (+2 h)    {'name': 'state_freshness', 'status': 'fail', 'detail': 'modification time is in the future'}\nfresh file with broken content: {'name': 'state_freshness', 'status': 'pass', 'detail': '0.00 h old'}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Idempotency, the report differs only in volatile fields",
    "headingKn": "ಪ್ರಯೋಗ 5: Idempotency, the report differs only in volatile fields",
    "bodyEn": "What it ran: Idempotency, the report differs only in volatile fields. What the lab concluded: only the timestamp differs between two runs; the checks themselves read state and change nothing, which is what makes initialization safe to repeat",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Idempotency, the report differs only in volatile fields. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): only the timestamp differs between two runs; the checks themselves read state and change nothing, which is what makes initialization safe to repeat"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely measuring: idempotency, the report differs only in volatile fields ---\n{'healthy': True, 'failure_count': True, 'probes': True, 'generated_at': False}"
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
    "headingEn": "Genuinely Found: Every Failure Is Collected and the Exit Code Carries the Decision",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪ್ರತಿ ವೈಫಲ್ಯ ಸಂಗ್ರಹವಾಗುತ್ತದೆ ಮತ್ತು Exit code ತೀರ್ಮಾನ ಹೊರುತ್ತದೆ",
    "bodyEn": "Section 1 (this machine, Python 3.14): all five probes passed and the report was healthy; the environment probe named no values. Section 2: with impossible requirements (Python 9.0, a missing package, a missing test command, a missing variable, a missing state file) all five failed and the report listed five failures from one run. Section 3: the healthy report printed HEALTHY with exit code 0 and the blocked one printed BLOCKED with exit code 1.",
    "bodyKn": "ವಿಭಾಗ 1 (ಈ ಯಂತ್ರ, Python 3.14): ಎಲ್ಲಾ ಐದು probes ಪಾಸ್ ಆದವು ಮತ್ತು ವರದಿ ಆರೋಗ್ಯಕರವಾಗಿತ್ತು; ಪರಿಸರ probe ಯಾವುದೇ ಮೌಲ್ಯ ಹೆಸರಿಸಲಿಲ್ಲ. ವಿಭಾಗ 2: ಅಸಾಧ್ಯ ಅವಶ್ಯಕತೆಗಳೊಂದಿಗೆ (Python 9.0, ಕಾಣೆಯಾದ ಪ್ಯಾಕೇಜ್, ಕಾಣೆಯಾದ ಪರೀಕ್ಷಾ ಆದೇಶ, ಕಾಣೆಯಾದ ವೇರಿಯಬಲ್, ಕಾಣೆಯಾದ ಸ್ಥಿತಿ ಫೈಲ್) ಎಲ್ಲಾ ಐದು ವಿಫಲವಾಗಿ ವರದಿ ಒಂದೇ ಓಟದಿಂದ ಐದು ವೈಫಲ್ಯ ಪಟ್ಟಿ ಮಾಡಿತು. ವಿಭಾಗ 3: ಆರೋಗ್ಯಕರ ವರದಿ exit code 0 ನೊಂದಿಗೆ HEALTHY ಮತ್ತು ತಡೆಯಲ್ಪಟ್ಟದ್ದು exit code 1 ನೊಂದಿಗೆ BLOCKED ಮುದ್ರಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Freshness Is Only a Timestamp; Initialization Is Repeatable",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ತಾಜಾತನ ಕೇವಲ ಸಮಯಮುದ್ರೆ; ಆರಂಭ ಪುನರಾವರ್ತನೀಯ",
    "bodyEn": "Section 4 (modification times set with os.utime): a 1-hour-old file passed, a 30-hour-old file failed against a 24-hour limit, and a file dated 2 hours in the future failed; a freshly written file with corrupt content still passed because only the modification time is read. Section 5: two runs gave reports that differed only in generated_at, so the checks read state and change nothing.",
    "bodyKn": "ವಿಭಾಗ 4 (os.utime ನಿಂದ ಹೊಂದಿಸಿದ ಮಾರ್ಪಾಡು ಸಮಯ): 1-ಗಂಟೆ ಹಳೆಯ ಫೈಲ್ ಪಾಸ್ ಆಯಿತು, 30-ಗಂಟೆ ಹಳೆಯ ಫೈಲ್ 24-ಗಂಟೆ ಮಿತಿಯ ವಿರುದ್ಧ ವಿಫಲವಾಯಿತು, ಮತ್ತು 2 ಗಂಟೆ ಭವಿಷ್ಯದ ದಿನಾಂಕದ ಫೈಲ್ ವಿಫಲವಾಯಿತು; ಹಾಳಾದ ವಿಷಯ ಇರುವ ಹೊಸದಾಗಿ ಬರೆದ ಫೈಲ್ ಇನ್ನೂ ಪಾಸ್ ಆಯಿತು ಏಕೆಂದರೆ ಮಾರ್ಪಾಡು ಸಮಯ ಮಾತ್ರ ಓದಲಾಗುತ್ತದೆ. ವಿಭಾಗ 5: ಎರಡು ಓಟಗಳು generated_at ನಲ್ಲಿ ಮಾತ್ರ ಭಿನ್ನವಾದ ವರದಿ ನೀಡಿದವು, ಆದ್ದರಿಂದ ಪರಿಶೀಲನೆಗಳು ಸ್ಥಿತಿ ಓದುತ್ತವೆ ಮತ್ತು ಏನನ್ನೂ ಬದಲಿಸುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Moving predictable discovery out of the agent loop saves time and catches problems before the first edit, but only if every probe states what it does not prove.",
    "bodyKn": "ಊಹಿಸಬಹುದಾದ ಆವಿಷ್ಕಾರವನ್ನು agent ಲೂಪ್‌ನಿಂದ ಹೊರಗೆ ಸರಿಸುವುದು ಸಮಯ ಉಳಿಸಿ ಮೊದಲ ಸಂಪಾದನೆಗೆ ಮುನ್ನ ಸಮಸ್ಯೆಗಳನ್ನು ಹಿಡಿಯುತ್ತದೆ, ಆದರೆ ಪ್ರತಿ probe ತಾನು ಏನನ್ನು ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ ಎಂದು ಹೇಳಿದರೆ ಮಾತ್ರ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a healthy report means the repository is correct.\" It means five prerequisites held on this machine today.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಆರೋಗ್ಯಕರ ವರದಿ ಎಂದರೆ repository ಸರಿ.\" ಇದು ಐದು ಪೂರ್ವಾಪೇಕ್ಷಿತಗಳು ಇಂದು ಈ ಯಂತ್ರದಲ್ಲಿ ಹಿಡಿದಿದ್ದವು ಎಂದರ್ಥ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Probe: a deterministic check that returns name, status and detail. Blocking failure: a failed probe that stops startup. Exit code: the number the launcher acts on. Idempotent: safe to run repeatedly. Freshness: the age of a file, not the quality of its content.",
    "bodyKn": "Probe: name, status ಮತ್ತು detail ಮರಳಿಸುವ ನಿರ್ಣಾಯಕ ಪರಿಶೀಲನೆ. Blocking failure: ಆರಂಭ ನಿಲ್ಲಿಸುವ ವಿಫಲ probe. Exit code: ಲಾಂಚರ್ ಕ್ರಿಯೆ ಕೈಗೊಳ್ಳುವ ಸಂಖ್ಯೆ. Idempotent: ಪುನರಾವರ್ತಿತವಾಗಿ ಓಡಿಸಲು ಸುರಕ್ಷಿತ. Freshness: ಫೈಲ್‌ನ ವಯಸ್ಸು, ಅದರ ವಿಷಯದ ಗುಣಮಟ್ಟವಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Five probes passed on this machine and none printed a secret. 2) Five impossible requirements gave five failures in one run. 3) Exit codes were 0 and 1. 4) Freshness passed at 1 h, failed at 30 h and for a future timestamp, and passed a corrupt fresh file. 5) Two runs differed only in the timestamp.",
    "bodyKn": "1) ಈ ಯಂತ್ರದಲ್ಲಿ ಐದು probes ಪಾಸ್ ಆದವು ಮತ್ತು ಯಾವುದೂ ರಹಸ್ಯ ಮುದ್ರಿಸಲಿಲ್ಲ. 2) ಐದು ಅಸಾಧ್ಯ ಅವಶ್ಯಕತೆಗಳು ಒಂದೇ ಓಟದಲ್ಲಿ ಐದು ವೈಫಲ್ಯ ನೀಡಿದವು. 3) Exit codes 0 ಮತ್ತು 1 ಆಗಿದ್ದವು. 4) ತಾಜಾತನ 1 h ನಲ್ಲಿ ಪಾಸ್, 30 h ನಲ್ಲಿ ಮತ್ತು ಭವಿಷ್ಯದ ಸಮಯಮುದ್ರೆಗೆ ವಿಫಲ, ಮತ್ತು ಹಾಳಾದ ತಾಜಾ ಫೈಲ್ ಪಾಸ್ ಮಾಡಿತು. 5) ಎರಡು ಓಟಗಳು ಸಮಯಮುದ್ರೆಯಲ್ಲಿ ಮಾತ್ರ ಭಿನ್ನವಾದವು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B in_1.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B in_1.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B in_1.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B in_1.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many failures did the impossible requirements produce?",
      "qKn": "ಅಸಾಧ್ಯ ಅವಶ್ಯಕತೆಗಳು ಎಷ್ಟು ವೈಫಲ್ಯ ನೀಡಿದವು?",
      "opts": [
       "1",
       "3",
       "5",
       "0"
      ],
      "optsKn": [
       "1",
       "3",
       "5",
       "0"
      ],
      "correct": 2
     },
     {
      "q": "What exit code did the blocked report produce?",
      "qKn": "ತಡೆಯಲ್ಪಟ್ಟ ವರದಿ ಯಾವ exit code ನೀಡಿತು?",
      "opts": [
       "0",
       "1",
       "2",
       "5"
      ],
      "optsKn": [
       "0",
       "1",
       "2",
       "5"
      ],
      "correct": 1
     },
     {
      "q": "What happened to a file dated two hours in the future?",
      "qKn": "ಎರಡು ಗಂಟೆ ಭವಿಷ್ಯದ ದಿನಾಂಕದ ಫೈಲ್‌ಗೆ ಏನಾಯಿತು?",
      "opts": [
       "It passed",
       "It failed",
       "It was deleted",
       "It was ignored"
      ],
      "optsKn": [
       "ಪಾಸ್ ಆಯಿತು",
       "ವಿಫಲವಾಯಿತು",
       "ಅಳಿಸಲ್ಪಟ್ಟಿತು",
       "ನಿರ್ಲಕ್ಷಿಸಲ್ಪಟ್ಟಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why did a freshly written corrupt state file pass the freshness probe?",
      "qKn": "ಹೊಸದಾಗಿ ಬರೆದ ಹಾಳಾದ ಸ್ಥಿತಿ ಫೈಲ್ ತಾಜಾತನ probe ಏಕೆ ಪಾಸ್ ಮಾಡಿತು?",
      "opts": [
       "Only the modification time is read",
       "The JSON was valid",
       "The file was empty",
       "The limit was 0"
      ],
      "optsKn": [
       "ಮಾರ್ಪಾಡು ಸಮಯ ಮಾತ್ರ ಓದಲಾಗುತ್ತದೆ",
       "JSON ಮಾನ್ಯವಾಗಿತ್ತು",
       "ಫೈಲ್ ಖಾಲಿಯಾಗಿತ್ತು",
       "ಮಿತಿ 0 ಆಗಿತ್ತು"
      ],
      "correct": 0
     },
     {
      "q": "What differed between two initialization runs?",
      "qKn": "ಎರಡು ಆರಂಭ ಓಟಗಳ ನಡುವೆ ಏನು ಭಿನ್ನವಾಗಿತ್ತು?",
      "opts": [
       "Only the generated_at timestamp",
       "Everything",
       "The probes",
       "The exit code"
      ],
      "optsKn": [
       "generated_at ಸಮಯಮುದ್ರೆ ಮಾತ್ರ",
       "ಎಲ್ಲವೂ",
       "probes",
       "exit code"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
