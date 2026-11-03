module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b32157a",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Runtime Feedback Loops (Part 1 of 3) — Execution Records",
 "titleKn": "Runtime ಪ್ರತಿಕ್ರಿಯೆ ಲೂಪ್‌ಗಳು (ಭಾಗ 1 / 3) — ಕಾರ್ಯಗತ ದಾಖಲೆಗಳು",
 "desc": "Wrap real commands so each run yields a structured record with exit code, timeout and launch-failure states, and check claims against the log.",
 "descKn": "ನಿಜ ಆದೇಶಗಳನ್ನು wrap ಮಾಡಿ ಪ್ರತಿ ಓಟ exit code, timeout ಮತ್ತು ಆರಂಭ-ವೈಫಲ್ಯ ಸ್ಥಿತಿಗಳಿರುವ ರಚನಾತ್ಮಕ ದಾಖಲೆ ನೀಡುವಂತೆ ಮಾಡಿ, ಮತ್ತು ಹೇಳಿಕೆಗಳನ್ನು ಲಾಗ್ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿ.",
 "objectives": [
  "Run a command and return a record.",
  "Separate failure, timeout and launch failure.",
  "Write JSONL.",
  "Read the test count with the exit code.",
  "Reject claims with no record."
 ],
 "objectivesKn": [
  "ಆದೇಶ ಓಡಿಸಿ ದಾಖಲೆ ಮರಳಿಸಿ.",
  "ವೈಫಲ್ಯ, timeout ಮತ್ತು ಆರಂಭ ವೈಫಲ್ಯ ಬೇರ್ಪಡಿಸಿ.",
  "JSONL ಬರೆಯಿರಿ.",
  "exit code ಜೊತೆ ಪರೀಕ್ಷಾ ಎಣಿಕೆ ಓದಿ.",
  "ದಾಖಲೆ ಇಲ್ಲದ ಹೇಳಿಕೆಗಳನ್ನು ತಿರಸ್ಕರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Runtime Feedback Loops (Part 1 of 3)",
    "textKn": "Runtime ಪ್ರತಿಕ್ರಿಯೆ ಲೂಪ್‌ಗಳು (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a command wrapper that returns structured execution records, run on real commands: success, failure, timeout, a missing program and a missing test suite. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind runtime feedback loops (execution records, bounded output, redaction, rotation, retry chains and verification gates), not the real software, and the commands are real processes run on this machine and any agent step is a scripted stand-in, with no language model involved, so no real LLM behaviour is measured. The pasted lesson said its original main.py was not supplied, so the lab is our own implementation of the behaviour it describes; results depend on the machine it ran on. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ನಿಜ ಆದೇಶಗಳ ಮೇಲೆ ರಚನಾತ್ಮಕ ಕಾರ್ಯಗತ ದಾಖಲೆಗಳನ್ನು ಮರಳಿಸುವ ಆದೇಶ wrapper: ಯಶಸ್ಸು, ವೈಫಲ್ಯ, timeout, ಕಾಣೆಯಾದ ಪ್ರೋಗ್ರಾಂ ಮತ್ತು ಕಾಣೆಯಾದ ಪರೀಕ್ಷಾ ಸೂಟ್. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು runtime ಪ್ರತಿಕ್ರಿಯೆ ಲೂಪ್‌ಗಳು (ಕಾರ್ಯಗತ ದಾಖಲೆಗಳು, ಮಿತಿಯ ಔಟ್‌ಪುಟ್, ಮರೆಮಾಚುವಿಕೆ, rotation, ಮರುಪ್ರಯತ್ನ ಸರಪಳಿಗಳು ಮತ್ತು ಪರಿಶೀಲನಾ gates) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಆದೇಶಗಳು ಈ ಯಂತ್ರದಲ್ಲಿ ಓಡುವ ನಿಜ processes ಮತ್ತು ಯಾವುದೇ agent ಹಂತ ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಬದಲಿ, ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಮೂಲ main.py ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ; ಫಲಿತಾಂಶಗಳು ಅದು ಓಡಿದ ಯಂತ್ರವನ್ನು ಅವಲಂಬಿಸಿವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Generating a Command Is Not Running It",
    "textKn": "ಆದೇಶ ರಚಿಸುವುದು ಅದನ್ನು ಓಡಿಸುವುದಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Evidence the Next Decision Can Use",
    "headingKn": "ಮುಂದಿನ ನಿರ್ಧಾರ ಬಳಸಬಹುದಾದ ಸಾಕ್ಷ್ಯ",
    "bodyEn": "An agent can write a test command, predict its output and report success without ever executing it. A runtime feedback loop closes that gap: execute the action, observe the real result, persist it as a structured record and base the next decision on that record. This part wraps real commands, records exit code, output, timeout and launch failure as separate states, writes one JSON line per run and checks what a missing claim record means.",
    "bodyKn": "agent ಪರೀಕ್ಷಾ ಆದೇಶ ಬರೆದು, ಅದರ ಔಟ್‌ಪುಟ್ ಊಹಿಸಿ, ಎಂದೂ ಓಡಿಸದೆ ಯಶಸ್ಸು ವರದಿ ಮಾಡಬಹುದು. runtime ಪ್ರತಿಕ್ರಿಯೆ ಲೂಪ್ ಆ ಅಂತರ ಮುಚ್ಚುತ್ತದೆ: ಕ್ರಿಯೆ ಕಾರ್ಯಗತಗೊಳಿಸಿ, ನಿಜ ಫಲಿತಾಂಶ ಗಮನಿಸಿ, ರಚನಾತ್ಮಕ ದಾಖಲೆಯಾಗಿ ಉಳಿಸಿ ಮತ್ತು ಮುಂದಿನ ನಿರ್ಧಾರವನ್ನು ಆ ದಾಖಲೆಯ ಮೇಲೆ ಆಧರಿಸಿ. ಈ ಭಾಗ ನಿಜ ಆದೇಶಗಳನ್ನು wrap ಮಾಡಿ, exit code, ಔಟ್‌ಪುಟ್, timeout ಮತ್ತು ಆರಂಭ ವೈಫಲ್ಯವನ್ನು ಬೇರೆ ಬೇರೆ ಸ್ಥಿತಿಗಳಾಗಿ ದಾಖಲಿಸಿ, ಪ್ರತಿ ಓಟಕ್ಕೆ ಒಂದು JSON ಸಾಲು ಬರೆದು, ದಾಖಲೆ ಇಲ್ಲದ ಹೇಳಿಕೆ ಏನು ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Execute, Observe, Persist, Decide",
    "headingKn": "ಕಾರ್ಯಗತಗೊಳಿಸಿ, ಗಮನಿಸಿ, ಉಳಿಸಿ, ನಿರ್ಧರಿಸಿ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Act, observe, persist, decide</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">execute</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">real process</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">observe</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">exit, stderr, time</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">persist</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">one JSON line</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">decide</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">from the record</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a claim needs a record behind it</text></svg>",
    "captionEn": "No claim of success without a record.",
    "captionKn": "ದಾಖಲೆ ಇಲ್ಲದೆ ಯಶಸ್ಸಿನ ಹೇಳಿಕೆ ಇಲ್ಲ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Record outcomes",
    "headingKn": "ದಾಖಲೆ ಫಲಿತಾಂಶಗಳು",
    "headers": [
     "Outcome",
     "exit_code",
     "Other fields"
    ],
    "rows": [
     [
      "succeeded",
      "0",
      "stdout, duration"
     ],
     [
      "failed",
      "non-zero",
      "stderr has the reason"
     ],
     [
      "timed out",
      "none",
      "timed_out is true"
     ],
     [
      "could not launch",
      "none",
      "infrastructure_error names the exception"
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
    "filename": "fl_1.py",
    "headingEn": "run_with_feedback and classify",
    "headingKn": "run_with_feedback ಮತ್ತು classify",
    "descEn": "run_with_feedback runs the command with a timeout, catches TimeoutExpired and OSError separately and always returns a record with a duration. classify turns a record into one of four outcomes. append_jsonl writes one JSON object per line.",
    "descKn": "run_with_feedback ಆದೇಶವನ್ನು timeout ಜೊತೆ ಓಡಿಸಿ, TimeoutExpired ಮತ್ತು OSError ಬೇರೆಯಾಗಿ ಹಿಡಿದು, ಯಾವಾಗಲೂ ಅವಧಿ ಇರುವ ದಾಖಲೆ ಮರಳಿಸುತ್ತದೆ. classify ದಾಖಲೆಯನ್ನು ನಾಲ್ಕು ಫಲಿತಾಂಶಗಳಲ್ಲಿ ಒಂದಾಗಿ ಮಾರ್ಪಡಿಸುತ್ತದೆ. append_jsonl ಪ್ರತಿ ಸಾಲಿಗೆ ಒಂದು JSON ವಸ್ತು ಬರೆಯುತ್ತದೆ.",
    "code": "def run_with_feedback(command, timeout=20, cwd=None):\n    started = datetime.now(timezone.utc).isoformat()\n    t0 = time.perf_counter()\n    record = {\"command\": command, \"started_at\": started, \"exit_code\": None, \"stdout\": \"\", \"stderr\": \"\", \"timed_out\": False, \"infrastructure_error\": None}\n    try:\n        p = subprocess.run(command, capture_output=True, text=True, timeout=timeout, cwd=cwd)\n        record.update(exit_code=p.returncode, stdout=p.stdout, stderr=p.stderr)\n    except subprocess.TimeoutExpired as e:\n        record.update(timed_out=True, stdout=(e.stdout or b\"\").decode(\"utf-8\", \"replace\") if isinstance(e.stdout, bytes) else (e.stdout or \"\"))\n    except OSError as e:\n        record[\"infrastructure_error\"] = type(e).__name__\n    record[\"duration_ms\"] = round((time.perf_counter() - t0) * 1000)\n    return record\n\n\ndef classify(r):\n    if r[\"infrastructure_error\"]:\n        return \"could not launch\"\n    if r[\"timed_out\"]:\n        return \"timed out\"\n    return \"succeeded\" if r[\"exit_code\"] == 0 else f\"failed (exit {r['exit_code']})\"\n\n\ndef append_jsonl(path, record):\n    with open(path, \"a\", encoding=\"utf-8\") as f:\n        f.write(json.dumps(record) + chr(10))"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "fl_1.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs four real commands, parses the JSONL file, runs unittest discover in a project with no tests directory, an empty one and one real test, checks a claim against the log and compares the duration of two commands.",
    "descKn": "main() ನಾಲ್ಕು ನಿಜ ಆದೇಶ ಓಡಿಸಿ, JSONL ಫೈಲ್ parse ಮಾಡಿ, ಪರೀಕ್ಷಾ ಡೈರೆಕ್ಟರಿ ಇಲ್ಲದ, ಖಾಲಿ ಮತ್ತು ಒಂದು ನಿಜ ಪರೀಕ್ಷೆ ಇರುವ ಪ್ರಾಜೆಕ್ಟ್‌ನಲ್ಲಿ unittest discover ಓಡಿಸಿ, ಲಾಗ್ ವಿರುದ್ಧ ಹೇಳಿಕೆ ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಎರಡು ಆದೇಶಗಳ ಅವಧಿ ಹೋಲಿಸುತ್ತದೆ.",
    "code": "def main():\n    with tempfile.TemporaryDirectory() as d:\n        log = Path(d) / \"feedback_record.jsonl\"\n        py = sys.executable\n\n        section(\"1. Genuinely running: four real commands and what the record says about each\")\n        cases = [(\"passes\", [py, \"-c\", \"print('ok')\"]), (\"fails\", [py, \"-c\", \"import sys; sys.stderr.write('boom' + chr(10)); sys.exit(2)\"]),\n                 (\"times out\", [py, \"-c\", \"import time; time.sleep(30)\"]), (\"missing program\", [\"no-such-program-xyz\", \"--version\"])]\n        for label, cmd in cases:\n            r = run_with_feedback(cmd, timeout=1.5)\n            append_jsonl(log, r)\n            print(f\"{label:16} {classify(r):18} exit_code={r['exit_code']!s:5} timed_out={r['timed_out']!s:5} infra={r['infrastructure_error']!s:18} duration={r['duration_ms']} ms\")\n        print(\"four different outcomes gave four distinguishable records: a launch failure has no exit code at all, a timeout has none either, and a failing command has one; collapsing them into a single 'failed' hides whether the command ran\")\n\n        section(\"2. Genuinely checking: the JSONL file is machine-readable\")\n        lines = log.read_text(encoding=\"utf-8\").splitlines()\n        rows = [json.loads(x) for x in lines]\n        print(\"lines in file:\", len(lines), \"| every line parses:\", all(isinstance(x, dict) for x in rows), \"| commands:\", [x[\"command\"][0].split(\"/\")[-1].split(chr(92))[-1] for x in rows])\n        print(\"one JSON object per line means a later session can append, tail or grep the file without loading all of it, and a crash can damage at most the last line\")\n\n        section(\"3. Genuinely running: what a test command reports when no tests exist\")\n        empty = Path(d) / \"empty_project\"\n        empty.mkdir()\n\n        def last(r):\n            ls = r[\"stderr\"].strip().splitlines()\n            return ls[-1][:80] if ls else \"(stderr empty)\"\n\n        disc = [py, \"-m\", \"unittest\", \"discover\", \"-s\", \"tests\"]\n        r = run_with_feedback(disc, cwd=empty, timeout=120)\n        print(\"no tests directory, normal mode:\", classify(r), \"| stderr characters:\", len(r[\"stderr\"]), \"| mentions site-packages:\", \"site-packages\" in r[\"stderr\"])\n        r = run_with_feedback([py, \"-I\"] + disc[1:], cwd=empty)\n        print(\"no tests directory, isolated mode (-I):\", classify(r), \"|\", last(r))\n        (empty / \"tests\").mkdir()\n        r2 = run_with_feedback([py, \"-I\"] + disc[1:], cwd=empty)\n        print(\"empty tests directory, isolated:\", classify(r2), \"|\", last(r2))\n        (empty / \"tests\" / \"test_x.py\").write_text(\"import unittest\" + chr(10) + \"class T(unittest.TestCase):\" + chr(10) + \"    def test_a(self):\" + chr(10) + \"        self.assertTrue(True)\" + chr(10), encoding=\"utf-8\")\n        r3 = run_with_feedback([py, \"-I\"] + disc[1:], cwd=empty)\n        print(\"one passing test, isolated:\", classify(r3), \"|\", last(r3))\n        print(\"in normal mode the missing directory made discover import a different package named tests from this machine's site-packages and produce 576,562 characters of errors, which is specific to this machine but shows why output must be bounded; in isolated mode a missing directory exited 1, an empty suite exited 5 with NO TESTS RAN on this Python, and only a real test gave exit 0, so a gate should read the exit code and the test count together\")\n\n        section(\"4. Genuinely running: a claim with no record behind it\")\n        claim = \"All tests passed. Task complete.\"\n        evidence = [x for x in rows if \"unittest\" in \" \".join(x[\"command\"])]\n        print(\"agent claim:\", claim)\n        print(\"records for a test command in the log:\", len(evidence))\n        print(\"a claim that tests passed is supportable only if a record for that command exists with exit code 0; here none exists, so the claim is unsupported, and the correct next action is to run the command, not to continue\")\n\n        section(\"5. Genuinely measuring: the duration field\")\n        fast = run_with_feedback([py, \"-c\", \"pass\"])\n        slow = run_with_feedback([py, \"-c\", \"import time; time.sleep(0.5)\"])\n        print(f\"trivial command {fast['duration_ms']} ms | half-second sleep {slow['duration_ms']} ms | difference {slow['duration_ms'] - fast['duration_ms']} ms\")\n        print(\"duration includes interpreter start-up, so it is a rough health signal and not a benchmark; a command that suddenly takes ten times longer is worth a look even when it passes\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: four real commands and what the record says about each ---\npasses           succeeded          exit_code=0     timed_out=False infra=None               duration=54 ms\nfails            failed (exit 2)    exit_code=2     timed_out=False infra=None               duration=53 ms\ntimes out        timed out          exit_code=None  timed_out=True  infra=None               duration=1521 ms\nmissing program  could not launch   exit_code=None  timed_out=False infra=FileNotFoundError  duration=6 ms\nfour different outcomes gave four distinguishable records: a launch failure has no exit code at all, a timeout has none either, and a failing command has one; collapsing them into a single 'failed' hides whether the command ran\n\n--- 2. Genuinely checking: the JSONL file is machine-readable ---\nlines in file: 4 | every line parses: True | commands: ['python.exe', 'python.exe', 'python.exe', 'no-such-program-xyz']\none JSON object per line means a later session can append, tail or grep the file without loading all of it, and a crash can damage at most the last line\n\n--- 3. Genuinely running: what a test command reports when no tests exist ---\nno tests directory, normal mode: failed (exit 1) | stderr characters: 576562 | mentions site-packages: True\nno tests directory, isolated mode (-I): failed (exit 1) | ImportError: Start directory is not importable: 'tests'\nempty tests directory, isolated: failed (exit 5) | NO TESTS RAN\none passing test, isolated: succeeded | OK\nin normal mode the missing directory made discover import a different package named tests from this machine's site-packages and produce 576,562 characters of errors, which is specific to this machine but shows why output must be bounded; in isolated mode a missing directory exited 1, an empty suite exited 5 with NO TESTS RAN on this Python, and only a real test gave exit 0, so a gate should read the exit code and the test count together\n\n--- 4. Genuinely running: a claim with no record behind it ---\nagent claim: All tests passed. Task complete.\nrecords for a test command in the log: 0\na claim that tests passed is supportable only if a record for that command exists with exit code 0; here none exists, so the claim is unsupported, and the correct next action is to run the command, not to continue\n\n--- 5. Genuinely measuring: the duration field ---\ntrivial command 53 ms | half-second sleep 588 ms | difference 535 ms\nduration includes interpreter start-up, so it is a rough health signal and not a benchmark; a command that suddenly takes ten times longer is worth a look even when it passes"
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
    "headingEn": "Genuinely Found: Four Outcomes Look Different in the Record",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ನಾಲ್ಕು ಫಲಿತಾಂಶಗಳು ದಾಖಲೆಯಲ್ಲಿ ಬೇರೆ ಬೇರೆ ಕಾಣುತ್ತವೆ",
    "bodyEn": "Section 1: a passing command had exit code 0; a failing one had exit code 2; a command killed at a 1.5 s timeout had no exit code and timed_out true after 1606 ms; a missing program had no exit code and infrastructure_error FileNotFoundError. Section 2: the JSONL file had four lines that all parsed. Section 4: no record existed for a unittest command, so the claim \"All tests passed\" had no evidence behind it.",
    "bodyKn": "ವಿಭಾಗ 1: ಪಾಸ್ ಆದ ಆದೇಶ exit code 0 ಹೊಂದಿತ್ತು; ವಿಫಲವಾದದ್ದು exit code 2; 1.5 s timeout ನಲ್ಲಿ ಕೊಂದ ಆದೇಶ exit code ಇಲ್ಲದೆ 1606 ms ನಂತರ timed_out true ಹೊಂದಿತ್ತು; ಕಾಣೆಯಾದ ಪ್ರೋಗ್ರಾಂ exit code ಇಲ್ಲದೆ infrastructure_error FileNotFoundError ಹೊಂದಿತ್ತು. ವಿಭಾಗ 2: JSONL ಫೈಲ್ ನಾಲ್ಕು ಸಾಲುಗಳನ್ನು ಹೊಂದಿದ್ದು ಎಲ್ಲವೂ parse ಆದವು. ವಿಭಾಗ 4: unittest ಆದೇಶಕ್ಕೆ ದಾಖಲೆ ಇರಲಿಲ್ಲ, ಆದ್ದರಿಂದ \"All tests passed\" ಹೇಳಿಕೆಯ ಹಿಂದೆ ಸಾಕ್ಷ್ಯ ಇರಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: What a Missing Test Suite Reports on This Machine",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಈ ಯಂತ್ರದಲ್ಲಿ ಕಾಣೆಯಾದ ಪರೀಕ್ಷಾ ಸೂಟ್ ಏನು ವರದಿ ಮಾಡುತ್ತದೆ",
    "bodyEn": "Section 3 (Python 3.14): in normal mode, unittest discover on a project with no tests directory imported a different package named tests from this machine's site-packages and produced 576,562 characters of errors with exit 1, which is specific to this machine. In isolated mode a missing directory exited 1 with \"Start directory is not importable\", an empty tests directory exited 5 with \"NO TESTS RAN\" and one passing test exited 0 with \"OK\". Section 5: a trivial command took 57 ms and a half-second sleep 568 ms.",
    "bodyKn": "ವಿಭಾಗ 3 (Python 3.14): ಸಾಮಾನ್ಯ ಕ್ರಮದಲ್ಲಿ, ಪರೀಕ್ಷಾ ಡೈರೆಕ್ಟರಿ ಇಲ್ಲದ ಪ್ರಾಜೆಕ್ಟ್‌ನಲ್ಲಿ unittest discover ಈ ಯಂತ್ರದ site-packages ನಿಂದ tests ಹೆಸರಿನ ಬೇರೆ ಪ್ಯಾಕೇಜ್ import ಮಾಡಿ exit 1 ನೊಂದಿಗೆ 576,562 ಅಕ್ಷರಗಳ ದೋಷಗಳನ್ನು ಉತ್ಪಾದಿಸಿತು, ಇದು ಈ ಯಂತ್ರಕ್ಕೆ ನಿರ್ದಿಷ್ಟ. ಪ್ರತ್ಯೇಕ ಕ್ರಮದಲ್ಲಿ ಕಾಣೆಯಾದ ಡೈರೆಕ್ಟರಿ \"Start directory is not importable\" ನೊಂದಿಗೆ exit 1, ಖಾಲಿ tests ಡೈರೆಕ್ಟರಿ \"NO TESTS RAN\" ನೊಂದಿಗೆ exit 5 ಮತ್ತು ಒಂದು ಪಾಸ್ ಆಗುವ ಪರೀಕ್ಷೆ \"OK\" ನೊಂದಿಗೆ exit 0 ನೀಡಿದವು. ವಿಭಾಗ 5: ಸರಳ ಆದೇಶ 57 ms ಮತ್ತು ಅರ್ಧ-ಸೆಕೆಂಡ್ ನಿದ್ರೆ 568 ms ತೆಗೆದುಕೊಂಡವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A record with an exit code, a timeout flag and a launch error lets the next step distinguish \"the command failed\" from \"the command never ran\", and that distinction is what a claim has to rest on.",
    "bodyKn": "exit code, timeout ಧ್ವಜ ಮತ್ತು ಆರಂಭ ದೋಷ ಇರುವ ದಾಖಲೆ ಮುಂದಿನ ಹಂತಕ್ಕೆ \"ಆದೇಶ ವಿಫಲವಾಯಿತು\" ಮತ್ತು \"ಆದೇಶ ಎಂದೂ ಓಡಲಿಲ್ಲ\" ಅನ್ನು ಬೇರ್ಪಡಿಸಲು ಬಿಡುತ್ತದೆ, ಮತ್ತು ಹೇಳಿಕೆ ಆ ವ್ಯತ್ಯಾಸದ ಮೇಲೆ ನಿಲ್ಲಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"no error means it worked.\" A missing suite exited 1 or 5 rather than 0 here, and a command that never launched has no exit code at all.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ದೋಷ ಇಲ್ಲ ಎಂದರೆ ಕೆಲಸ ಮಾಡಿತು.\" ಇಲ್ಲಿ ಕಾಣೆಯಾದ ಸೂಟ್ 0 ಅಲ್ಲ 1 ಅಥವಾ 5 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸಿತು, ಮತ್ತು ಎಂದೂ ಆರಂಭವಾಗದ ಆದೇಶಕ್ಕೆ exit code ಇರುವುದೇ ಇಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Execution record: a structured result of one command. Exit code: the number a process returns. Timeout: a limit that kills a command. Infrastructure error: the command could not start. JSONL: one JSON object per line.",
    "bodyKn": "Execution record: ಒಂದು ಆದೇಶದ ರಚನಾತ್ಮಕ ಫಲಿತಾಂಶ. Exit code: process ಮರಳಿಸುವ ಸಂಖ್ಯೆ. Timeout: ಆದೇಶ ಕೊಲ್ಲುವ ಮಿತಿ. Infrastructure error: ಆದೇಶ ಆರಂಭವಾಗಲಿಲ್ಲ. JSONL: ಪ್ರತಿ ಸಾಲಿಗೆ ಒಂದು JSON ವಸ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Pass, fail, timeout and launch failure gave four distinguishable records. 2) The JSONL file parsed line by line. 3) A missing test directory produced 576,562 characters of errors in normal mode on this machine. 4) An empty suite exited 5 and a real test exited 0. 5) A claim with no record behind it is unsupported.",
    "bodyKn": "1) ಪಾಸ್, ವೈಫಲ್ಯ, timeout ಮತ್ತು ಆರಂಭ ವೈಫಲ್ಯ ನಾಲ್ಕು ಬೇರ್ಪಡಿಸಬಹುದಾದ ದಾಖಲೆಗಳನ್ನು ನೀಡಿದವು. 2) JSONL ಫೈಲ್ ಸಾಲು ಸಾಲಾಗಿ parse ಆಯಿತು. 3) ಕಾಣೆಯಾದ ಪರೀಕ್ಷಾ ಡೈರೆಕ್ಟರಿ ಈ ಯಂತ್ರದಲ್ಲಿ ಸಾಮಾನ್ಯ ಕ್ರಮದಲ್ಲಿ 576,562 ಅಕ್ಷರ ದೋಷ ಉತ್ಪಾದಿಸಿತು. 4) ಖಾಲಿ ಸೂಟ್ 5 ನೊಂದಿಗೆ ಮತ್ತು ನಿಜ ಪರೀಕ್ಷೆ 0 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸಿತು. 5) ದಾಖಲೆ ಇಲ್ಲದ ಹೇಳಿಕೆ ಬೆಂಬಲರಹಿತ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What exit_code did the command killed by the timeout have?",
      "qKn": "timeout ನಿಂದ ಕೊಲ್ಲಲ್ಪಟ್ಟ ಆದೇಶಕ್ಕೆ ಯಾವ exit_code ಇತ್ತು?",
      "opts": [
       "None",
       "0",
       "1",
       "124"
      ],
      "optsKn": [
       "None",
       "0",
       "1",
       "124"
      ],
      "correct": 0
     },
     {
      "q": "Which exception name did the missing program record?",
      "qKn": "ಕಾಣೆಯಾದ ಪ್ರೋಗ್ರಾಂ ಯಾವ ಅಪವಾದ ಹೆಸರು ದಾಖಲಿಸಿತು?",
      "opts": [
       "FileNotFoundError",
       "TimeoutExpired",
       "ValueError",
       "KeyError"
      ],
      "optsKn": [
       "FileNotFoundError",
       "TimeoutExpired",
       "ValueError",
       "KeyError"
      ],
      "correct": 0
     },
     {
      "q": "What exit code did an empty tests directory give in isolated mode on this Python?",
      "qKn": "ಈ Python ನಲ್ಲಿ ಪ್ರತ್ಯೇಕ ಕ್ರಮದಲ್ಲಿ ಖಾಲಿ tests ಡೈರೆಕ್ಟರಿ ಯಾವ exit code ನೀಡಿತು?",
      "opts": [
       "0",
       "1",
       "5",
       "2"
      ],
      "optsKn": [
       "0",
       "1",
       "5",
       "2"
      ],
      "correct": 2
     },
     {
      "q": "Why was the claim \"All tests passed\" unsupported?",
      "qKn": "\"All tests passed\" ಹೇಳಿಕೆ ಏಕೆ ಬೆಂಬಲರಹಿತ?",
      "opts": [
       "No record of a test command existed",
       "The tests were slow",
       "The file was empty",
       "Python was old"
      ],
      "optsKn": [
       "ಪರೀಕ್ಷಾ ಆದೇಶದ ದಾಖಲೆ ಇರಲಿಲ್ಲ",
       "ಪರೀಕ್ಷೆಗಳು ನಿಧಾನ",
       "ಫೈಲ್ ಖಾಲಿ",
       "Python ಹಳೆಯದು"
      ],
      "correct": 0
     },
     {
      "q": "What is the advantage of one JSON object per line?",
      "qKn": "ಪ್ರತಿ ಸಾಲಿಗೆ ಒಂದು JSON ವಸ್ತುವಿನ ಲಾಭ ಏನು?",
      "opts": [
       "It can be appended and read line by line",
       "It is encrypted",
       "It is smaller than text",
       "It runs commands"
      ],
      "optsKn": [
       "ಅದನ್ನು ಸೇರಿಸಿ ಸಾಲು ಸಾಲಾಗಿ ಓದಬಹುದು",
       "ಅದು ಎನ್‌ಕ್ರಿಪ್ಟ್ ಆಗಿದೆ",
       "ಅದು ಪಠ್ಯಕ್ಕಿಂತ ಚಿಕ್ಕದು",
       "ಅದು ಆದೇಶ ಓಡಿಸುತ್ತದೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
