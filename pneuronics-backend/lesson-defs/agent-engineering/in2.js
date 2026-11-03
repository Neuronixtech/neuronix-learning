module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321574",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Initialization Scripts for Agents (Part 2 of 3) — Probe Edge Cases",
 "titleKn": "Agents ಗಾಗಿ ಆರಂಭ ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳು (ಭಾಗ 2 / 3) — Probe ಅಂಚಿನ ಪ್ರಕರಣಗಳು",
 "desc": "Try each readiness probe where it is weakest: names, import failures, a failing launch, blank variables, a crashing probe and the wrong directory.",
 "descKn": "ಪ್ರತಿ ಸಿದ್ಧತೆ probe ಅನ್ನು ಅದು ದುರ್ಬಲವಾಗಿರುವಲ್ಲಿ ಪ್ರಯತ್ನಿಸಿ: ಹೆಸರುಗಳು, import ವೈಫಲ್ಯಗಳು, ವಿಫಲ ಆರಂಭ, ಖಾಲಿ ವೇರಿಯಬಲ್‌ಗಳು, ಕ್ರ್ಯಾಶ್ ಆಗುವ probe ಮತ್ತು ತಪ್ಪು ಡೈರೆಕ್ಟರಿ.",
 "objectives": [
  "Use import names, not installer names.",
  "Know discoverable from importable.",
  "Run a command, not just resolve it.",
  "Wrap probes so crashes become records.",
  "Check a repository marker."
 ],
 "objectivesKn": [
  "Installer ಹೆಸರುಗಳ ಬದಲು import ಹೆಸರುಗಳನ್ನು ಬಳಸಿ.",
  "ಕಂಡುಹಿಡಿಯಬಹುದಾದದ್ದು ಮತ್ತು importable ಬೇರ್ಪಡಿಸಿ.",
  "ಆದೇಶ ಕೇವಲ ಪರಿಹರಿಸದೆ ಓಡಿಸಿ.",
  "ಕ್ರ್ಯಾಶ್‌ಗಳು ದಾಖಲೆಗಳಾಗುವಂತೆ probes wrap ಮಾಡಿ.",
  "Repository marker ಪರಿಶೀಲಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Initialization Scripts for Agents (Part 2 of 3)",
    "textKn": "Agents ಗಾಗಿ ಆರಂಭ ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳು (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: probe edge cases: import names, import failures, a launching failure, blank variables, a crashing probe and the working-directory trap. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind initialization scripts for agents (readiness probes, reports, gates and anchors), not the real software, and the probes run against this machine and a temporary git repository and no language model is involved, so no real LLM behaviour is measured. The pasted lesson said its original main.py was not supplied, so the lab is our own implementation of the behaviour it describes; results depend on the machine it ran on. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: probe ಅಂಚಿನ ಪ್ರಕರಣಗಳು: import ಹೆಸರುಗಳು, import ವೈಫಲ್ಯಗಳು, ಆರಂಭಿಸುವ ವೈಫಲ್ಯ, ಖಾಲಿ ವೇರಿಯಬಲ್‌ಗಳು, ಕ್ರ್ಯಾಶ್ ಆಗುವ probe ಮತ್ತು ಕೆಲಸದ-ಡೈರೆಕ್ಟರಿ ಬಲೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು agents ಗಾಗಿ ಆರಂಭ ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳು (ಸಿದ್ಧತೆ probes, ವರದಿಗಳು, gates ಮತ್ತು anchors) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು probes ಈ ಯಂತ್ರ ಮತ್ತು ತಾತ್ಕಾಲಿಕ git repository ಮೇಲೆ ಓಡುತ್ತವೆ ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಮೂಲ main.py ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ; ಫಲಿತಾಂಶಗಳು ಅದು ಓಡಿದ ಯಂತ್ರವನ್ನು ಅವಲಂಬಿಸಿವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Passing the Probe Is Not the Goal",
    "textKn": "Probe ಪಾಸ್ ಮಾಡುವುದು ಗುರಿಯಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Where Each Probe Is Fooled",
    "headingKn": "ಪ್ರತಿ Probe ಎಲ್ಲಿ ಮೋಸಹೋಗುತ್ತದೆ",
    "bodyEn": "A probe answers a narrow question, and a narrow question can be answered yes while the real condition fails. This part tries each probe where it is weakest: a dependency named by its installer name, a module that exists but cannot import, a command that resolves but exits with an error, an environment variable that is set to blanks, a probe that crashes, and a script launched from the wrong directory. Results come from this machine.",
    "bodyKn": "Probe ಕಿರಿದಾದ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸುತ್ತದೆ, ಮತ್ತು ನಿಜ ಸ್ಥಿತಿ ವಿಫಲವಾಗಿದ್ದರೂ ಕಿರಿದಾದ ಪ್ರಶ್ನೆಗೆ ಹೌದು ಎಂದು ಉತ್ತರಿಸಬಹುದು. ಈ ಭಾಗ ಪ್ರತಿ probe ಅನ್ನು ಅದು ದುರ್ಬಲವಾಗಿರುವಲ್ಲಿ ಪ್ರಯತ್ನಿಸುತ್ತದೆ: installer ಹೆಸರಿನಿಂದ ಹೆಸರಿಸಿದ dependency, ಇದ್ದರೂ import ಆಗದ ಮಾಡ್ಯೂಲ್, ಪರಿಹಾರವಾದರೂ ದೋಷದೊಂದಿಗೆ ನಿರ್ಗಮಿಸುವ ಆದೇಶ, ಖಾಲಿ ಸ್ಥಳಗಳಿಗೆ ಹೊಂದಿಸಿದ ಪರಿಸರ ವೇರಿಯಬಲ್, ಕ್ರ್ಯಾಶ್ ಆಗುವ probe ಮತ್ತು ತಪ್ಪು ಡೈರೆಕ್ಟರಿಯಿಂದ ಆರಂಭಿಸಿದ ಸ್ಕ್ರಿಪ್ಟ್. ಫಲಿತಾಂಶಗಳು ಈ ಯಂತ್ರದಿಂದ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Each Probe Checks One Level",
    "headingKn": "ಪ್ರತಿ Probe ಒಂದು ಹಂತ ಪರಿಶೀಲಿಸುತ್ತದೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Where probes mislead</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">names</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">import vs package</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">discoverable</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">is not importable</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">blank env var</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">present, useless</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">a crashing probe</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">must not hide the report</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">each probe checks one level</text></svg>",
    "captionEn": "A pass is only as strong as the level it tested.",
    "captionKn": "ಪಾಸ್ ಅದು ಪರೀಕ್ಷಿಸಿದ ಹಂತದಷ್ಟೇ ಬಲಿಷ್ಠ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Probe levels",
    "headingKn": "Probe ಹಂತಗಳು",
    "headers": [
     "Probe",
     "Weak level",
     "Stronger level"
    ],
    "rows": [
     [
      "dependencies",
      "find_spec finds a file",
      "import smoke test"
     ],
     [
      "test command",
      "which finds a name on PATH",
      "run it with --version"
     ],
     [
      "environment",
      "value is truthy",
      "format or live check, without printing"
     ],
     [
      "probe wrapper",
      "a crash aborts the run",
      "catch and record the exception type"
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
    "filename": "in_2.py",
    "headingEn": "Dependency probe, import smoke test and the safe wrapper",
    "headingKn": "Dependency probe, import smoke test ಮತ್ತು ಸುರಕ್ಷಿತ wrapper",
    "descEn": "probe_dependencies catches the exceptions find_spec can raise. import_smoke actually imports the module and reports the exception type. run_probe_safely validates a probe's result shape and converts any exception into a failing record that names only the exception type.",
    "descKn": "probe_dependencies find_spec ಎತ್ತಬಹುದಾದ ಅಪವಾದಗಳನ್ನು ಹಿಡಿಯುತ್ತದೆ. import_smoke ನಿಜವಾಗಿ ಮಾಡ್ಯೂಲ್ import ಮಾಡಿ ಅಪವಾದ ಪ್ರಕಾರ ವರದಿ ಮಾಡುತ್ತದೆ. run_probe_safely probe ಫಲಿತಾಂಶ ಆಕಾರ ಮಾನ್ಯಗೊಳಿಸಿ ಯಾವುದೇ ಅಪವಾದವನ್ನು ಅಪವಾದ ಪ್ರಕಾರ ಮಾತ್ರ ಹೆಸರಿಸುವ ವಿಫಲ ದಾಖಲೆಯಾಗಿ ಮಾರ್ಪಡಿಸುತ್ತದೆ.",
    "code": "def probe_dependencies(packages):\n    missing = []\n    for p in packages:\n        try:\n            spec = importlib.util.find_spec(p)\n        except (ImportError, ValueError, AttributeError):\n            spec = None\n        if spec is None:\n            missing.append(p)\n    return missing\n\n\ndef import_smoke(name):\n    try:\n        importlib.import_module(name)\n        return \"imports\"\n    except Exception as e:\n        return f\"import failed: {type(e).__name__}\"\n\n\ndef run_probe_safely(name, fn):\n    try:\n        r = fn()\n        if not isinstance(r, dict) or {\"name\", \"status\", \"detail\"} - r.keys() or r[\"status\"] not in (\"pass\", \"fail\"):\n            raise ValueError(\"bad probe result\")\n        return r\n    except Exception as e:\n        return {\"name\": name, \"status\": \"fail\", \"detail\": f\"probe error: {type(e).__name__}\"}\n\n\ndef probe_env(names):\n    return [n for n in names if not os.environ.get(n)]"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "in_2.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() queries find_spec with seven names, creates a broken and a working module in a temporary directory, builds a fake command that exits 3, tries four environment variable values, runs a crashing and a malformed probe and changes the working directory.",
    "descKn": "main() ಏಳು ಹೆಸರುಗಳೊಂದಿಗೆ find_spec ಕೇಳಿ, ತಾತ್ಕಾಲಿಕ ಡೈರೆಕ್ಟರಿಯಲ್ಲಿ ಮುರಿದ ಮತ್ತು ಕೆಲಸ ಮಾಡುವ ಮಾಡ್ಯೂಲ್ ರಚಿಸಿ, 3 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸುವ ನಕಲಿ ಆದೇಶ ನಿರ್ಮಿಸಿ, ನಾಲ್ಕು ಪರಿಸರ ವೇರಿಯಬಲ್ ಮೌಲ್ಯ ಪ್ರಯತ್ನಿಸಿ, ಕ್ರ್ಯಾಶ್ ಮತ್ತು ತಪ್ಪಾದ probe ಓಡಿಸಿ ಕೆಲಸದ ಡೈರೆಕ್ಟರಿ ಬದಲಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Genuinely checking: import names versus installer package names\")\n    for name in (\"json\", \"yaml\", \"PyYAML\", \"os.path\", \"no_pkg.sub\", \"email.mime.text\", \"\"):\n        try:\n            found = importlib.util.find_spec(name) is not None\n            print(f\"find_spec({name!r:18}) discoverable={found}\")\n        except Exception as e:\n            print(f\"find_spec({name!r:18}) raised {type(e).__name__}: {e}\")\n    print(\"a dependency list written with installer names (PyYAML) fails a probe that expects import names (yaml); a dotted name whose parent is missing raises ModuleNotFoundError instead of returning None, while an empty name simply came back as not discoverable on this Python (other versions may raise ValueError), so the probe has to catch the exceptions as well as the None\")\n    print(\"whether yaml is installed depends on this machine and is not a property of the lesson\")\n\n    section(\"2. Genuinely checking: discoverable is not importable\")\n    with tempfile.TemporaryDirectory() as d:\n        (Path(d) / \"broken_dep.py\").write_text(\"import module_that_does_not_exist\\n\", encoding=\"utf-8\")\n        (Path(d) / \"fine_dep.py\").write_text(\"VALUE = 1\\n\", encoding=\"utf-8\")\n        sys.path.insert(0, d)\n        try:\n            for n in (\"fine_dep\", \"broken_dep\"):\n                print(f\"{n:12} find_spec found it: {importlib.util.find_spec(n) is not None} | import: {import_smoke(n)}\")\n        finally:\n            sys.path.remove(d)\n    print(\"find_spec located the broken module because it only looks for the file; the import smoke test caught the failure, at the price of running that module's top-level code during startup, so it should be limited to trusted dependencies\")\n\n    section(\"3. Genuinely checking: a command that resolves but does not launch\")\n    with tempfile.TemporaryDirectory() as d:\n        script = Path(d) / (\"fake_runner.bat\" if os.name == \"nt\" else \"fake_runner\")\n        script.write_text(\"@echo off\\r\\nexit /b 3\\r\\n\" if os.name == \"nt\" else \"#!/bin/sh\\nexit 3\\n\", encoding=\"utf-8\")\n        if os.name != \"nt\":\n            script.chmod(0o755)\n        old = os.environ[\"PATH\"]\n        os.environ[\"PATH\"] = d + os.pathsep + old\n        try:\n            path = shutil.which(\"fake_runner\")\n            print(\"which found it:\", path is not None)\n            p = subprocess.run([path, \"--version\"], capture_output=True, text=True, timeout=20)\n            print(\"launching it with --version exited with\", p.returncode)\n        finally:\n            os.environ[\"PATH\"] = old\n    print(\"resolving a command only proves a file with that name is on PATH; running --version is a second, stronger level, and running the real tests is a third, which belongs to verification and not to startup\")\n\n    section(\"4. Genuinely checking: environment variables that are set but useless\")\n    for label, value in ((\"unset\", None), (\"empty string\", \"\"), (\"whitespace only\", \"   \"), (\"a real-looking value\", \"abc123\")):\n        if value is None:\n            os.environ.pop(\"LAB_VAR\", None)\n        else:\n            os.environ[\"LAB_VAR\"] = value\n        print(f\"{label:22} flagged as missing by a truthiness check: {bool(probe_env(['LAB_VAR']))}\")\n    os.environ.pop(\"LAB_VAR\", None)\n    print(\"a whitespace-only value passed the truthiness check although it is useless; presence is not validity, and a format or live check would be a separate, bounded probe that must not print the value\")\n\n    section(\"5. Genuinely checking: a probe that crashes\")\n    def good():\n        return {\"name\": \"ok\", \"status\": \"pass\", \"detail\": \"fine\"}\n    def crashes():\n        return 1 / 0\n    def malformed():\n        return {\"name\": \"bad\", \"status\": \"maybe\"}\n    def unsafe_orchestrator(fns):\n        return [f() for f in fns]\n    try:\n        unsafe_orchestrator([good, crashes, good])\n    except ZeroDivisionError:\n        print(\"unsafe orchestrator: ZeroDivisionError aborted the whole run, no report was produced\")\n    for fn in (good, crashes, malformed):\n        print(\" \", run_probe_safely(fn.__name__, fn))\n    print(\"the wrapper turns a crash and a malformed result into a failing record and keeps going, so the report is still written; it records only the exception type, not its message, which could contain paths or secrets\")\n\n    section(\"6. Genuinely checking: the working-directory trap\")\n    with tempfile.TemporaryDirectory() as d:\n        here = Path.cwd()\n        try:\n            os.chdir(d)\n            print(\"cwd inside the temp directory contains README.md:\", (Path.cwd() / \"README.md\").exists())\n            (Path(d) / \"README.md\").write_text(\"x\", encoding=\"utf-8\")\n            print(\"after creating one, the same check says:\", (Path.cwd() / \"README.md\").exists())\n        finally:\n            os.chdir(here)\n    print(\"a script that builds paths from the current directory trusts wherever it was launched from; checking a repository marker such as README.md (or locating the root from the script's own path) turns a wrong-directory mistake into a clear failure\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely checking: import names versus installer package names ---\nfind_spec('json'            ) discoverable=True\nfind_spec('yaml'            ) discoverable=True\nfind_spec('PyYAML'          ) discoverable=False\nfind_spec('os.path'         ) discoverable=True\nfind_spec('no_pkg.sub'      ) raised ModuleNotFoundError: No module named 'no_pkg'\nfind_spec('email.mime.text' ) discoverable=True\nfind_spec(''                ) discoverable=False\na dependency list written with installer names (PyYAML) fails a probe that expects import names (yaml); a dotted name whose parent is missing raises ModuleNotFoundError instead of returning None, while an empty name simply came back as not discoverable on this Python (other versions may raise ValueError), so the probe has to catch the exceptions as well as the None\nwhether yaml is installed depends on this machine and is not a property of the lesson\n\n--- 2. Genuinely checking: discoverable is not importable ---\nfine_dep     find_spec found it: True | import: imports\nbroken_dep   find_spec found it: True | import: import failed: ModuleNotFoundError\nfind_spec located the broken module because it only looks for the file; the import smoke test caught the failure, at the price of running that module's top-level code during startup, so it should be limited to trusted dependencies\n\n--- 3. Genuinely checking: a command that resolves but does not launch ---\nwhich found it: True\nlaunching it with --version exited with 3\nresolving a command only proves a file with that name is on PATH; running --version is a second, stronger level, and running the real tests is a third, which belongs to verification and not to startup\n\n--- 4. Genuinely checking: environment variables that are set but useless ---\nunset                  flagged as missing by a truthiness check: True\nempty string           flagged as missing by a truthiness check: True\nwhitespace only        flagged as missing by a truthiness check: False\na real-looking value   flagged as missing by a truthiness check: False\na whitespace-only value passed the truthiness check although it is useless; presence is not validity, and a format or live check would be a separate, bounded probe that must not print the value\n\n--- 5. Genuinely checking: a probe that crashes ---\nunsafe orchestrator: ZeroDivisionError aborted the whole run, no report was produced\n  {'name': 'ok', 'status': 'pass', 'detail': 'fine'}\n  {'name': 'crashes', 'status': 'fail', 'detail': 'probe error: ZeroDivisionError'}\n  {'name': 'malformed', 'status': 'fail', 'detail': 'probe error: ValueError'}\nthe wrapper turns a crash and a malformed result into a failing record and keeps going, so the report is still written; it records only the exception type, not its message, which could contain paths or secrets\n\n--- 6. Genuinely checking: the working-directory trap ---\ncwd inside the temp directory contains README.md: False\nafter creating one, the same check says: True\na script that builds paths from the current directory trusts wherever it was launched from; checking a repository marker such as README.md (or locating the root from the script's own path) turns a wrong-directory mistake into a clear failure"
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
    "headingEn": "Genuinely Found: Names, Imports and Commands",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಹೆಸರುಗಳು, Imports ಮತ್ತು ಆದೇಶಗಳು",
    "bodyEn": "Section 1: find_spec found \"yaml\" on this machine and did not find \"PyYAML\", the name an installer uses; \"no_pkg.sub\" raised ModuleNotFoundError instead of returning None; an empty name came back as not discoverable on this Python. Section 2: a module whose file imports a nonexistent package was found by find_spec, and importing it failed with ModuleNotFoundError. Section 3: a fake command on PATH was resolved by which and exited with code 3 when run with --version.",
    "bodyKn": "ವಿಭಾಗ 1: find_spec ಈ ಯಂತ್ರದಲ್ಲಿ \"yaml\" ಕಂಡುಕೊಂಡಿತು ಮತ್ತು installer ಬಳಸುವ ಹೆಸರು \"PyYAML\" ಕಂಡುಕೊಳ್ಳಲಿಲ್ಲ; \"no_pkg.sub\" None ಮರಳಿಸುವ ಬದಲು ModuleNotFoundError ಎತ್ತಿತು; ಖಾಲಿ ಹೆಸರು ಈ Python ನಲ್ಲಿ ಕಂಡುಹಿಡಿಯಲಾಗದು ಎಂದು ಬಂತು. ವಿಭಾಗ 2: ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲದ ಪ್ಯಾಕೇಜ್ import ಮಾಡುವ ಫೈಲ್ ಇರುವ ಮಾಡ್ಯೂಲ್ find_spec ಗೆ ಸಿಕ್ಕಿತು, ಮತ್ತು import ModuleNotFoundError ನೊಂದಿಗೆ ವಿಫಲವಾಯಿತು. ವಿಭಾಗ 3: PATH ನ ನಕಲಿ ಆದೇಶ which ನಿಂದ ಪರಿಹಾರವಾಗಿ --version ಜೊತೆ ಓಡಿಸಿದಾಗ ಕೋಡ್ 3 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Blank Variables, Crashing Probes and the Wrong Directory",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಖಾಲಿ ವೇರಿಯಬಲ್‌ಗಳು, ಕ್ರ್ಯಾಶ್ ಆಗುವ Probes ಮತ್ತು ತಪ್ಪು ಡೈರೆಕ್ಟರಿ",
    "bodyEn": "Section 4: unset and empty variables were flagged as missing, while a whitespace-only value and a real-looking value were not, so blanks passed a truthiness check. Section 5: an orchestrator that calls probes directly was aborted by a ZeroDivisionError and wrote no report, while the wrapper turned a crash and a malformed result into failing records (probe error: ZeroDivisionError and ValueError) and carried on. Section 6: a README.md check was false in a fresh directory and true after one was created, so building paths from the current directory trusts wherever the script was launched.",
    "bodyKn": "ವಿಭಾಗ 4: unset ಮತ್ತು ಖಾಲಿ ವೇರಿಯಬಲ್‌ಗಳು ಕಾಣೆಯಾದವು ಎಂದು ಗುರುತಿಸಲ್ಪಟ್ಟವು, ಆದರೆ ಖಾಲಿ-ಸ್ಥಳ ಮಾತ್ರ ಮೌಲ್ಯ ಮತ್ತು ನಿಜದಂತೆ ಕಾಣುವ ಮೌಲ್ಯ ಗುರುತಿಸಲ್ಪಡಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಖಾಲಿಗಳು truthiness ಪರಿಶೀಲನೆ ಪಾಸ್ ಮಾಡಿದವು. ವಿಭಾಗ 5: probes ಅನ್ನು ನೇರವಾಗಿ ಕರೆಯುವ orchestrator ZeroDivisionError ನಿಂದ ಅಡ್ಡಿಪಟ್ಟು ವರದಿ ಬರೆಯಲಿಲ್ಲ, wrapper ಕ್ರ್ಯಾಶ್ ಮತ್ತು ತಪ್ಪಾದ ಫಲಿತಾಂಶವನ್ನು ವಿಫಲ ದಾಖಲೆಗಳಾಗಿ (probe error: ZeroDivisionError ಮತ್ತು ValueError) ಮಾರ್ಪಡಿಸಿ ಮುಂದುವರಿಯಿತು. ವಿಭಾಗ 6: README.md ಪರಿಶೀಲನೆ ಹೊಸ ಡೈರೆಕ್ಟರಿಯಲ್ಲಿ false ಮತ್ತು ಒಂದನ್ನು ರಚಿಸಿದ ನಂತರ true ಆಗಿತ್ತು, ಆದ್ದರಿಂದ ಪ್ರಸ್ತುತ ಡೈರೆಕ್ಟರಿಯಿಂದ paths ನಿರ್ಮಿಸುವುದು ಸ್ಕ್ರಿಪ್ಟ್ ಎಲ್ಲಿಂದ ಆರಂಭವಾಯಿತೋ ಅದನ್ನು ನಂಬುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Each of these is a way for a startup check to say yes while the condition it stands for is false, and each has a stronger level that costs a little more.",
    "bodyKn": "ಇವುಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ಆರಂಭ ಪರಿಶೀಲನೆ ತಾನು ಪ್ರತಿನಿಧಿಸುವ ಸ್ಥಿತಿ ಸುಳ್ಳಾಗಿದ್ದರೂ ಹೌದು ಎನ್ನುವ ವಿಧಾನ, ಮತ್ತು ಪ್ರತಿಯೊಂದಕ್ಕೂ ಸ್ವಲ್ಪ ಹೆಚ್ಚು ವೆಚ್ಚದ ಬಲಿಷ್ಠ ಹಂತ ಇದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the module is discoverable, so it works.\" A module that cannot import was discoverable.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಮಾಡ್ಯೂಲ್ ಕಂಡುಹಿಡಿಯಬಹುದು, ಆದ್ದರಿಂದ ಅದು ಕೆಲಸ ಮಾಡುತ್ತದೆ.\" import ಆಗದ ಮಾಡ್ಯೂಲ್ ಕಂಡುಹಿಡಿಯಬಹುದಾಗಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Discoverable: found by the import system. Import smoke test: actually importing a trusted module. Resolvable command: present on PATH. Probe wrapper: converts crashes into records. Repository marker: a file whose presence confirms the working directory.",
    "bodyKn": "Discoverable: import ವ್ಯವಸ್ಥೆಗೆ ಸಿಕ್ಕಿದ್ದು. Import smoke test: ವಿಶ್ವಾಸಾರ್ಹ ಮಾಡ್ಯೂಲ್ ನಿಜವಾಗಿ import ಮಾಡುವುದು. Resolvable command: PATH ನಲ್ಲಿ ಇರುವುದು. Probe wrapper: ಕ್ರ್ಯಾಶ್‌ಗಳನ್ನು ದಾಖಲೆಗಳಾಗಿ ಮಾರ್ಪಡಿಸುತ್ತದೆ. Repository marker: ಇರುವಿಕೆ ಕೆಲಸದ ಡೈರೆಕ್ಟರಿ ದೃಢೀಕರಿಸುವ ಫೈಲ್."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) \"PyYAML\" was not discoverable while \"yaml\" was; a dotted name raised ModuleNotFoundError. 2) A discoverable module failed to import. 3) A resolved command exited with 3. 4) A whitespace-only variable passed. 5) A crashing probe aborted an unsafe run but not a wrapped one. 6) A check from the current directory changed with the directory.",
    "bodyKn": "1) \"yaml\" ಕಂಡುಹಿಡಿಯಬಹುದಾಗಿದ್ದಾಗ \"PyYAML\" ಅಲ್ಲ; ಚುಕ್ಕೆ ಹೆಸರು ModuleNotFoundError ಎತ್ತಿತು. 2) ಕಂಡುಹಿಡಿಯಬಹುದಾದ ಮಾಡ್ಯೂಲ್ import ವಿಫಲವಾಯಿತು. 3) ಪರಿಹಾರವಾದ ಆದೇಶ 3 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸಿತು. 4) ಖಾಲಿ-ಸ್ಥಳ ವೇರಿಯಬಲ್ ಪಾಸ್ ಆಯಿತು. 5) ಕ್ರ್ಯಾಶ್ ಆಗುವ probe ಸುರಕ್ಷಿತವಲ್ಲದ ಓಟ ಅಡ್ಡಿಪಡಿಸಿತು ಆದರೆ wrap ಮಾಡಿದ್ದನ್ನಲ್ಲ. 6) ಪ್ರಸ್ತುತ ಡೈರೆಕ್ಟರಿಯಿಂದ ಪರಿಶೀಲನೆ ಡೈರೆಕ್ಟರಿಯೊಂದಿಗೆ ಬದಲಾಯಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did find_spec do for a dotted name whose parent package is missing?",
      "qKn": "ಪೋಷಕ ಪ್ಯಾಕೇಜ್ ಕಾಣೆಯಾದ ಚುಕ್ಕೆ ಹೆಸರಿಗೆ find_spec ಏನು ಮಾಡಿತು?",
      "opts": [
       "Returned None",
       "Raised ModuleNotFoundError",
       "Returned a spec",
       "Crashed Python"
      ],
      "optsKn": [
       "None ಮರಳಿಸಿತು",
       "ModuleNotFoundError ಎತ್ತಿತು",
       "spec ಮರಳಿಸಿತು",
       "Python ಕ್ರ್ಯಾಶ್ ಮಾಡಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What happened to a module that find_spec found but that imports a missing package?",
      "qKn": "find_spec ಕಂಡುಕೊಂಡ ಆದರೆ ಕಾಣೆಯಾದ ಪ್ಯಾಕೇಜ್ import ಮಾಡುವ ಮಾಡ್ಯೂಲ್‌ಗೆ ಏನಾಯಿತು?",
      "opts": [
       "It imported fine",
       "The import failed",
       "It was skipped",
       "It was installed"
      ],
      "optsKn": [
       "ಸರಿಯಾಗಿ import ಆಯಿತು",
       "Import ವಿಫಲವಾಯಿತು",
       "ಬಿಡಲಾಯಿತು",
       "ಸ್ಥಾಪಿಸಲಾಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Which variable values were flagged as missing?",
      "qKn": "ಯಾವ ವೇರಿಯಬಲ್ ಮೌಲ್ಯಗಳು ಕಾಣೆಯಾದವು ಎಂದು ಗುರುತಿಸಲ್ಪಟ್ಟವು?",
      "opts": [
       "Unset and empty",
       "Whitespace only",
       "All of them",
       "None"
      ],
      "optsKn": [
       "Unset ಮತ್ತು ಖಾಲಿ",
       "ಖಾಲಿ-ಸ್ಥಳ ಮಾತ್ರ",
       "ಎಲ್ಲವೂ",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What did the safe wrapper record for a crashing probe?",
      "qKn": "ಕ್ರ್ಯಾಶ್ ಆಗುವ probe ಗೆ ಸುರಕ್ಷಿತ wrapper ಏನು ದಾಖಲಿಸಿತು?",
      "opts": [
       "A failing record with only the exception type",
       "The full traceback",
       "A pass",
       "Nothing"
      ],
      "optsKn": [
       "ಅಪವಾದ ಪ್ರಕಾರ ಮಾತ್ರ ಇರುವ ವಿಫಲ ದಾಖಲೆ",
       "ಪೂರ್ಣ traceback",
       "ಪಾಸ್",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Why check a repository marker such as README.md?",
      "qKn": "README.md ನಂತಹ repository marker ಅನ್ನು ಏಕೆ ಪರಿಶೀಲಿಸಬೇಕು?",
      "opts": [
       "A wrong launch directory then becomes a clear failure",
       "To speed up Python",
       "To install packages",
       "To read secrets"
      ],
      "optsKn": [
       "ತಪ್ಪು ಆರಂಭ ಡೈರೆಕ್ಟರಿ ಆಗ ಸ್ಪಷ್ಟ ವೈಫಲ್ಯವಾಗುತ್ತದೆ",
       "Python ವೇಗಗೊಳಿಸಲು",
       "ಪ್ಯಾಕೇಜ್ ಸ್ಥಾಪಿಸಲು",
       "ರಹಸ್ಯ ಓದಲು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
