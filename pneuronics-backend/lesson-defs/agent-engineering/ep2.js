module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af752671dabe46ef6f6e37d",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Build an Evidence-Backed Execution Plan (Part 2 of 3) — Receipts and Proof Runs",
 "titleKn": "ಸಾಕ್ಷ್ಯ-ಆಧಾರಿತ ಕಾರ್ಯಗತ ಯೋಜನೆ ನಿರ್ಮಿಸಿ (ಭಾಗ 2 / 3) — ರಸೀದಿಗಳು ಮತ್ತು ಪುರಾವೆ ಓಟಗಳು",
 "desc": "Collect hashed evidence receipts with containment, watch them go stale and run proof commands whose results are recorded, not assumed.",
 "descKn": "ಒಳಗೊಳ್ಳುವಿಕೆಯೊಂದಿಗೆ ಹ್ಯಾಶ್ ಮಾಡಿದ ಸಾಕ್ಷ್ಯ ರಸೀದಿಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ, ಅವು ಹಳೆಯದಾಗುವುದನ್ನು ನೋಡಿ ಮತ್ತು ಫಲಿತಾಂಶ ಊಹಿಸದೆ ದಾಖಲಿಸುವ ಪುರಾವೆ ಆದೇಶಗಳನ್ನು ಓಡಿಸಿ.",
 "objectives": [
  "Collect receipts with size and hash.",
  "Refuse paths outside the root.",
  "Refresh stale evidence.",
  "Run and record proof.",
  "Check the test count."
 ],
 "objectivesKn": [
  "ಗಾತ್ರ ಮತ್ತು hash ಇರುವ ರಸೀದಿ ಸಂಗ್ರಹಿಸಿ.",
  "ಮೂಲದ ಹೊರಗಿನ paths ನಿರಾಕರಿಸಿ.",
  "ಹಳೆಯ ಸಾಕ್ಷ್ಯ ನವೀಕರಿಸಿ.",
  "ಪುರಾವೆ ಓಡಿಸಿ ದಾಖಲಿಸಿ.",
  "ಪರೀಕ್ಷಾ ಎಣಿಕೆ ಪರಿಶೀಲಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Build an Evidence-Backed Execution Plan (Part 2 of 3)",
    "textKn": "ಸಾಕ್ಷ್ಯ-ಆಧಾರಿತ ಕಾರ್ಯಗತ ಯೋಜನೆ ನಿರ್ಮಿಸಿ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: evidence receipts with hashes and containment, receipts going stale, evidence that changes the plan and proof commands run for real. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind an evidence-backed execution plan (work items, dependency waves, evidence receipts, proof runs and durable state), not the real software, and the repository, evidence and durations are made up by the lab and no language model is involved, so no real LLM behaviour is measured. In the pasted lesson several code listings were cut off partway and the original main.py was not supplied, so the labs are our own implementation of the behaviour the surrounding text describes. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಹ್ಯಾಶ್ ಮತ್ತು ಒಳಗೊಳ್ಳುವಿಕೆಯೊಂದಿಗೆ ಸಾಕ್ಷ್ಯ ರಸೀದಿಗಳು, ಹಳೆಯದಾಗುವ ರಸೀದಿಗಳು, ಯೋಜನೆ ಬದಲಿಸುವ ಸಾಕ್ಷ್ಯ ಮತ್ತು ನಿಜವಾಗಿ ಓಡಿಸಿದ ಪುರಾವೆ ಆದೇಶಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಸಾಕ್ಷ್ಯ-ಆಧಾರಿತ ಕಾರ್ಯಗತ ಯೋಜನೆ (ಕೆಲಸ ಘಟಕಗಳು, ಅವಲಂಬನೆ ಅಲೆಗಳು, ಸಾಕ್ಷ್ಯ ರಸೀದಿಗಳು, ಪುರಾವೆ ಓಟಗಳು ಮತ್ತು ಬಾಳಿಕೆ ಬರುವ ಸ್ಥಿತಿ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು repository, ಸಾಕ್ಷ್ಯ ಮತ್ತು ಅವಧಿಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ನಲ್ಲಿ ಹಲವು ಕೋಡ್ ಪಟ್ಟಿಗಳು ಅರ್ಧದಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿದ್ದವು ಮತ್ತು ಮೂಲ main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ಸುತ್ತಲಿನ ಪಠ್ಯ ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Plausible Is Not Proven",
    "textKn": "ಸಂಭಾವ್ಯ ಎಂದರೆ ಸಾಬೀತಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Receipts Before Plans, Runs Before Claims",
    "headingKn": "ಯೋಜನೆಗಳ ಮುನ್ನ ರಸೀದಿಗಳು, ಹೇಳಿಕೆಗಳ ಮುನ್ನ ಓಟಗಳು",
    "bodyEn": "Before an item enters a plan the agent should look: does the file exist, what does it hold, has it changed, and is the path even inside the repository. After the item is done its proof has to be run and recorded. This part collects receipts with a size and SHA-256 in a temporary repository, shows a receipt going stale, shows evidence replacing a planned item and runs four kinds of proof command for real.",
    "bodyKn": "ಘಟಕ ಯೋಜನೆಗೆ ಸೇರುವ ಮುನ್ನ agent ನೋಡಬೇಕು: ಫೈಲ್ ಇದೆಯೇ, ಅದರಲ್ಲಿ ಏನಿದೆ, ಬದಲಾಗಿದೆಯೇ, ಮತ್ತು path repository ಒಳಗೇ ಇದೆಯೇ. ಘಟಕ ಮುಗಿದ ನಂತರ ಅದರ ಪುರಾವೆ ಓಡಿಸಿ ದಾಖಲಿಸಬೇಕು. ಈ ಭಾಗ ತಾತ್ಕಾಲಿಕ repository ಯಲ್ಲಿ ಗಾತ್ರ ಮತ್ತು SHA-256 ಇರುವ ರಸೀದಿಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ, ರಸೀದಿ ಹಳೆಯದಾಗುವುದನ್ನು ತೋರಿಸಿ, ಸಾಕ್ಷ್ಯ ಯೋಜಿತ ಘಟಕವನ್ನು ಬದಲಿಸುವುದನ್ನು ತೋರಿಸಿ ಮತ್ತು ನಾಲ್ಕು ರೀತಿಯ ಪುರಾವೆ ಆದೇಶಗಳನ್ನು ನಿಜವಾಗಿ ಓಡಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Evidence and Proof Are Executed",
    "headingKn": "ಸಾಕ್ಷ್ಯ ಮತ್ತು ಪುರಾವೆ ಕಾರ್ಯಗತವಾಗುತ್ತವೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Evidence and proof are executed</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">receipt</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">size + sha256</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">containment</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">inside the root</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">proof run</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">exit, output, timeout</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">planned != executed</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">echo exits 0</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a receipt names the content it saw</text></svg>",
    "captionEn": "A planned proof is not an executed proof.",
    "captionKn": "ಯೋಜಿಸಿದ ಪುರಾವೆ ಕಾರ್ಯಗತ ಪುರಾವೆ ಅಲ್ಲ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Outcomes of a proof run",
    "headingKn": "ಪುರಾವೆ ಓಟದ ಫಲಿತಾಂಶಗಳು",
    "headers": [
     "Situation",
     "Record",
     "Passed?"
    ],
    "rows": [
     [
      "unittest passes",
      "exit 0, tests run 1",
      "yes"
     ],
     [
      "command fails",
      "exit 1, stderr text",
      "no"
     ],
     [
      "command hangs",
      "timed_out, no exit code",
      "no"
     ],
     [
      "program cannot start",
      "exception before any record",
      "no record"
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
    "filename": "ep_2.py",
    "headingEn": "Receipts, the proof runner and the test count",
    "headingKn": "ರಸೀದಿಗಳು, ಪುರಾವೆ ಓಟಗಾರ ಮತ್ತು ಪರೀಕ್ಷಾ ಎಣಿಕೆ",
    "descEn": "inspect_file resolves the path and refuses anything outside the root before reading size and SHA-256. run_proof runs an argument list with a timeout and records exit code, output and duration. tests_ran reads the number of tests from the unittest summary.",
    "descKn": "inspect_file path ಪರಿಹರಿಸಿ ಗಾತ್ರ ಮತ್ತು SHA-256 ಓದುವ ಮುನ್ನ ಮೂಲದ ಹೊರಗಿನ ಯಾವುದನ್ನೂ ನಿರಾಕರಿಸುತ್ತದೆ. run_proof ಆರ್ಗ್ಯುಮೆಂಟ್ ಪಟ್ಟಿಯನ್ನು timeout ಜೊತೆ ಓಡಿಸಿ exit code, ಔಟ್‌ಪುಟ್ ಮತ್ತು ಅವಧಿ ದಾಖಲಿಸುತ್ತದೆ. tests_ran unittest ಸಾರಾಂಶದಿಂದ ಪರೀಕ್ಷೆಗಳ ಸಂಖ್ಯೆ ಓದುತ್ತದೆ.",
    "code": "def sha(path):\n    d = hashlib.sha256()\n    with open(path, \"rb\") as f:\n        for chunk in iter(lambda: f.read(65536), b\"\"):\n            d.update(chunk)\n    return d.hexdigest()\n\n\ndef inspect_file(root, rel):\n    root = Path(root).resolve()\n    target = (root / rel).resolve()\n    if root != target and root not in target.parents:\n        return {\"source\": rel, \"status\": \"outside_root\"}\n    if not target.exists():\n        return {\"source\": rel, \"status\": \"missing\"}\n    if target.is_dir():\n        return {\"source\": rel, \"status\": \"directory\"}\n    return {\"source\": rel, \"status\": \"found\", \"size\": target.stat().st_size, \"sha256\": sha(target)[:12]}\n\n\ndef run_proof(command, cwd, timeout=20, expected=0):\n    t0 = time.monotonic()\n    try:\n        p = subprocess.run(command, cwd=cwd, capture_output=True, text=True, timeout=timeout, check=False)\n        r = {\"exit_code\": p.returncode, \"timed_out\": False, \"stdout\": p.stdout.strip()[-120:], \"stderr\": p.stderr.strip()[-120:]}\n    except subprocess.TimeoutExpired:\n        r = {\"exit_code\": None, \"timed_out\": True, \"stdout\": \"\", \"stderr\": \"\"}\n    r[\"seconds\"] = round(time.monotonic() - t0, 2)\n    r[\"passed\"] = (not r[\"timed_out\"]) and r[\"exit_code\"] == expected\n    return r\n\n\ndef tests_ran(stderr):\n    import re\n    m = re.search(r\"Ran (\\d+) test\", stderr)\n    return int(m.group(1)) if m else 0"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ep_2.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() builds a temporary repository, collects five receipts, edits a file to make a receipt stale, replaces a planned item after finding an existing helper, runs four proof commands and three acceptance-style commands.",
    "descKn": "main() ತಾತ್ಕಾಲಿಕ repository ನಿರ್ಮಿಸಿ, ಐದು ರಸೀದಿ ಸಂಗ್ರಹಿಸಿ, ರಸೀದಿ ಹಳೆಯದಾಗಲು ಫೈಲ್ ಸಂಪಾದಿಸಿ, ಇರುವ helper ಕಂಡ ನಂತರ ಯೋಜಿತ ಘಟಕ ಬದಲಿಸಿ, ನಾಲ್ಕು ಪುರಾವೆ ಆದೇಶ ಮತ್ತು ಮೂರು ಸ್ವೀಕಾರ-ಶೈಲಿ ಆದೇಶ ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\n    with tempfile.TemporaryDirectory() as d:\n        root = Path(d) / \"repo\"\n        (root / \"app\").mkdir(parents=True)\n        (root / \"tests\").mkdir()\n        (root / \"app/endpoint.py\").write_text(\"def products():\" + chr(10) + \"    return [1, 2, 3]\" + chr(10), encoding=\"utf-8\")\n        (root / \"app/helpers.py\").write_text(\"def paginate(items, size=20):\" + chr(10) + \"    return items[:size]\" + chr(10), encoding=\"utf-8\")\n        (root / \"tests/test_endpoint.py\").write_text(\"import unittest\" + chr(10) + \"from app.endpoint import products\" + chr(10) + \"class T(unittest.TestCase):\" + chr(10) + \"    def test_products(self):\" + chr(10) + \"        self.assertEqual(len(products()), 3)\" + chr(10), encoding=\"utf-8\")\n        (root / \"app/__init__.py\").write_text(\"\", encoding=\"utf-8\")\n        (root / \"tests/__init__.py\").write_text(\"\", encoding=\"utf-8\")\n\n        section(\"1. Genuinely running: evidence receipts for five paths\")\n        for rel in (\"app/endpoint.py\", \"app/missing.py\", \"app\", \"../outside.txt\", \"app/../../outside.txt\"):\n            print(f\"{rel:24} {inspect_file(root, rel)}\")\n        print(\"a real file gave size and a SHA-256 prefix, a missing file and a directory were reported as such, and both paths that climbed above the root were refused; a receipt says the file existed with that content when inspected, and nothing about what the code means\")\n\n        section(\"2. Genuinely running: a receipt goes stale when the file changes\")\n        before = inspect_file(root, \"app/endpoint.py\")\n        (root / \"app/endpoint.py\").write_text(\"def products(page_size=20):\" + chr(10) + \"    return [1, 2, 3][:page_size]\" + chr(10), encoding=\"utf-8\")\n        after = inspect_file(root, \"app/endpoint.py\")\n        print(\"before:\", before[\"sha256\"], \"| after:\", after[\"sha256\"], \"| same evidence:\", before[\"sha256\"] == after[\"sha256\"])\n        print(\"the hash changed, so an observation recorded against the first version no longer describes the file; evidence should name the content it saw, and a plan built on old receipts needs them refreshed\")\n\n        section(\"3. Genuinely running: evidence that changes the plan\")\n        planned = \"W-002: create a new pagination utility in app/pagination.py\"\n        found = inspect_file(root, \"app/helpers.py\")\n        revised = \"W-002: extend the existing paginate helper in app/helpers.py\" if found[\"status\"] == \"found\" else planned\n        print(\"planned:\", planned)\n        print(\"inspection of app/helpers.py:\", found[\"status\"], \"| contains paginate:\", \"def paginate\" in (root / \"app/helpers.py\").read_text(encoding=\"utf-8\"))\n        print(\"revised:\", revised)\n        print(\"the existing helper was found, so the item to build a new utility was replaced by one to extend it; evidence that never changes a decision is decoration, and this is a case where it did\")\n\n        section(\"4. Genuinely running: proof commands, run for real and recorded\")\n        cases = {\"unittest that passes\": [PY, \"-B\", \"-m\", \"unittest\", \"tests.test_endpoint\"], \"command that fails\": [PY, \"-c\", \"import sys; sys.stderr.write('assertion failed'); sys.exit(1)\"],\n                 \"command that hangs\": [PY, \"-c\", \"import time; time.sleep(30)\"], \"program that cannot start\": [\"no-such-program-xyz\"]}\n        for label, cmd in cases.items():\n            try:\n                r = run_proof(cmd, root, timeout=1.5)\n                print(f\"{label:26} exit={r['exit_code']!s:5} timed_out={r['timed_out']!s:5} passed={r['passed']!s:5} tests_ran={tests_ran(r['stderr'])}\")\n            except OSError as e:\n                print(f\"{label:26} could not launch: {type(e).__name__}\")\n        print(\"the passing, failing and hanging commands each produced a different record, and the program that could not start raised before any record existed, so a runner must catch that case too or the item would silently have no proof\")\n\n        section(\"5. Genuinely checking: exit 0 is not proof the right test ran\")\n        for label, cmd in ((\"echo instead of a test\", [PY, \"-c\", \"print('All tests passed')\"]), (\"wrong module name\", [PY, \"-B\", \"-m\", \"unittest\", \"tests.test_nothing\"]), (\"named test\", [PY, \"-B\", \"-m\", \"unittest\", \"tests.test_endpoint\"])):\n            r = run_proof(cmd, root)\n            print(f\"{label:24} exit={r['exit_code']} tests_ran={tests_ran(r['stderr'])} passed={r['passed']}\")\n        print(\"the echo passed with zero tests run and the misnamed module failed, which is why the gate checks the test count and the command against the planned proof, and why a planned proof is not an executed proof\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: evidence receipts for five paths ---\napp/endpoint.py          {'source': 'app/endpoint.py', 'status': 'found', 'size': 39, 'sha256': 'bac4e08661ce'}\napp/missing.py           {'source': 'app/missing.py', 'status': 'missing'}\napp                      {'source': 'app', 'status': 'directory'}\n../outside.txt           {'source': '../outside.txt', 'status': 'outside_root'}\napp/../../outside.txt    {'source': 'app/../../outside.txt', 'status': 'outside_root'}\na real file gave size and a SHA-256 prefix, a missing file and a directory were reported as such, and both paths that climbed above the root were refused; a receipt says the file existed with that content when inspected, and nothing about what the code means\n\n--- 2. Genuinely running: a receipt goes stale when the file changes ---\nbefore: bac4e08661ce | after: 6e91255076bb | same evidence: False\nthe hash changed, so an observation recorded against the first version no longer describes the file; evidence should name the content it saw, and a plan built on old receipts needs them refreshed\n\n--- 3. Genuinely running: evidence that changes the plan ---\nplanned: W-002: create a new pagination utility in app/pagination.py\ninspection of app/helpers.py: found | contains paginate: True\nrevised: W-002: extend the existing paginate helper in app/helpers.py\nthe existing helper was found, so the item to build a new utility was replaced by one to extend it; evidence that never changes a decision is decoration, and this is a case where it did\n\n--- 4. Genuinely running: proof commands, run for real and recorded ---\nunittest that passes       exit=0     timed_out=False passed=True  tests_ran=1\ncommand that fails         exit=1     timed_out=False passed=False tests_ran=0\ncommand that hangs         exit=None  timed_out=True  passed=False tests_ran=0\nprogram that cannot start  could not launch: FileNotFoundError\nthe passing, failing and hanging commands each produced a different record, and the program that could not start raised before any record existed, so a runner must catch that case too or the item would silently have no proof\n\n--- 5. Genuinely checking: exit 0 is not proof the right test ran ---\necho instead of a test   exit=0 tests_ran=0 passed=True\nwrong module name        exit=1 tests_ran=1 passed=False\nnamed test               exit=0 tests_ran=1 passed=True\nthe echo passed with zero tests run and the misnamed module failed, which is why the gate checks the test count and the command against the planned proof, and why a planned proof is not an executed proof"
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
    "headingEn": "Experiment 1: Evidence receipts for five paths",
    "headingKn": "ಪ್ರಯೋಗ 1: Evidence receipts for five paths",
    "bodyEn": "What it ran: Evidence receipts for five paths. What the lab concluded: a real file gave size and a SHA-256 prefix, a missing file and a directory were reported as such, and both paths that climbed above the root were refused; a receipt says the file existed with that content when inspected, and nothing about what the code means",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Evidence receipts for five paths. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a real file gave size and a SHA-256 prefix, a missing file and a directory were reported as such, and both paths that climbed above the root were refused; a receipt says the file existed with that content when inspected, and nothing about what the code means"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: evidence receipts for five paths ---\napp/endpoint.py          {'source': 'app/endpoint.py', 'status': 'found', 'size': 39, 'sha256': 'bac4e08661ce'}\napp/missing.py           {'source': 'app/missing.py', 'status': 'missing'}\napp                      {'source': 'app', 'status': 'directory'}\n../outside.txt           {'source': '../outside.txt', 'status': 'outside_root'}\napp/../../outside.txt    {'source': 'app/../../outside.txt', 'status': 'outside_root'}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: A receipt goes stale when the file changes",
    "headingKn": "ಪ್ರಯೋಗ 2: A receipt goes stale when the file changes",
    "bodyEn": "What it ran: A receipt goes stale when the file changes. What the lab concluded: the hash changed, so an observation recorded against the first version no longer describes the file; evidence should name the content it saw, and a plan built on old receipts needs them refreshed",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A receipt goes stale when the file changes. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the hash changed, so an observation recorded against the first version no longer describes the file; evidence should name the content it saw, and a plan built on old receipts needs them refreshed"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: a receipt goes stale when the file changes ---\nbefore: bac4e08661ce | after: 6e91255076bb | same evidence: False"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Evidence that changes the plan",
    "headingKn": "ಪ್ರಯೋಗ 3: Evidence that changes the plan",
    "bodyEn": "What it ran: Evidence that changes the plan. What the lab concluded: the existing helper was found, so the item to build a new utility was replaced by one to extend it; evidence that never changes a decision is decoration, and this is a case where it did",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Evidence that changes the plan. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the existing helper was found, so the item to build a new utility was replaced by one to extend it; evidence that never changes a decision is decoration, and this is a case where it did"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: evidence that changes the plan ---\nplanned: W-002: create a new pagination utility in app/pagination.py\ninspection of app/helpers.py: found | contains paginate: True\nrevised: W-002: extend the existing paginate helper in app/helpers.py"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Proof commands, run for real and recorded",
    "headingKn": "ಪ್ರಯೋಗ 4: Proof commands, run for real and recorded",
    "bodyEn": "What it ran: Proof commands, run for real and recorded. What the lab concluded: the passing, failing and hanging commands each produced a different record, and the program that could not start raised before any record existed, so a runner must catch that case too or the item would silently have no proof",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Proof commands, run for real and recorded. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the passing, failing and hanging commands each produced a different record, and the program that could not start raised before any record existed, so a runner must catch that case too or the item would silently have no proof"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: proof commands, run for real and recorded ---\nunittest that passes       exit=0     timed_out=False passed=True  tests_ran=1\ncommand that fails         exit=1     timed_out=False passed=False tests_ran=0\ncommand that hangs         exit=None  timed_out=True  passed=False tests_ran=0\nprogram that cannot start  could not launch: FileNotFoundError"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Exit 0 is not proof the right test ran",
    "headingKn": "ಪ್ರಯೋಗ 5: Exit 0 is not proof the right test ran",
    "bodyEn": "What it ran: Exit 0 is not proof the right test ran. What the lab concluded: the echo passed with zero tests run and the misnamed module failed, which is why the gate checks the test count and the command against the planned proof, and why a planned proof is not an executed proof",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Exit 0 is not proof the right test ran. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the echo passed with zero tests run and the misnamed module failed, which is why the gate checks the test count and the command against the planned proof, and why a planned proof is not an executed proof"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely checking: exit 0 is not proof the right test ran ---\necho instead of a test   exit=0 tests_ran=0 passed=True\nwrong module name        exit=1 tests_ran=1 passed=False\nnamed test               exit=0 tests_ran=1 passed=True"
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
    "headingEn": "Genuinely Found: Receipts Refuse the Outside and Go Stale",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ರಸೀದಿಗಳು ಹೊರಗಿನದನ್ನು ನಿರಾಕರಿಸುತ್ತವೆ ಮತ್ತು ಹಳೆಯದಾಗುತ್ತವೆ",
    "bodyEn": "Section 1: a real file gave size 39 and a hash prefix, a missing file and a directory were reported as such, and ../outside.txt and app/../../outside.txt were both outside_root. Section 2: editing the file changed its SHA-256 prefix from bac4e08661ce to 6e91255076bb, so the old receipt no longer described it. Section 3: finding an existing paginate helper replaced the item to create a new utility with one to extend the helper, in this scripted example.",
    "bodyKn": "ವಿಭಾಗ 1: ನಿಜ ಫೈಲ್ ಗಾತ್ರ 39 ಮತ್ತು hash ಪೂರ್ವಪದ ನೀಡಿತು, ಕಾಣೆಯಾದ ಫೈಲ್ ಮತ್ತು ಡೈರೆಕ್ಟರಿ ಹಾಗೆಯೇ ವರದಿಯಾದವು, ಮತ್ತು ../outside.txt ಹಾಗೂ app/../../outside.txt ಎರಡೂ outside_root ಆದವು. ವಿಭಾಗ 2: ಫೈಲ್ ಸಂಪಾದಿಸಿದ್ದು SHA-256 ಪೂರ್ವಪದವನ್ನು bac4e08661ce ಇಂದ 6e91255076bb ಗೆ ಬದಲಿಸಿತು, ಆದ್ದರಿಂದ ಹಳೆಯ ರಸೀದಿ ಅದನ್ನು ಇನ್ನು ವಿವರಿಸಲಿಲ್ಲ. ವಿಭಾಗ 3: ಇರುವ paginate helper ಕಂಡದ್ದು, ಈ ಸ್ಕ್ರಿಪ್ಟ್ ಉದಾಹರಣೆಯಲ್ಲಿ, ಹೊಸ utility ರಚಿಸುವ ಘಟಕವನ್ನು helper ವಿಸ್ತರಿಸುವ ಘಟಕದಿಂದ ಬದಲಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Four Proof Outcomes and an Echo That Passed",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ನಾಲ್ಕು ಪುರಾವೆ ಫಲಿತಾಂಶಗಳು ಮತ್ತು ಪಾಸ್ ಆದ Echo",
    "bodyEn": "Section 4: a passing unittest gave exit 0 with 1 test run; a failing command gave exit 1; a sleeping command with a 1.5 s timeout gave timed_out true and no exit code; a missing program raised FileNotFoundError before any record existed. Section 5: an echo of \"All tests passed\" had exit 0 and 0 tests run and counted as passed, a misnamed module exited 1, and the named test exited 0 with 1 test run.",
    "bodyKn": "ವಿಭಾಗ 4: ಪಾಸ್ ಆದ unittest 1 ಪರೀಕ್ಷೆ ಓಡಿಸಿ exit 0 ನೀಡಿತು; ವಿಫಲ ಆದೇಶ exit 1 ನೀಡಿತು; 1.5 s timeout ಇರುವ ನಿದ್ರಿಸುವ ಆದೇಶ timed_out true ಮತ್ತು exit code ಇಲ್ಲದೆ ಬಂತು; ಕಾಣೆಯಾದ ಪ್ರೋಗ್ರಾಂ ಯಾವುದೇ ದಾಖಲೆ ಇರುವ ಮುನ್ನ FileNotFoundError ಎತ್ತಿತು. ವಿಭಾಗ 5: \"All tests passed\" ನ echo exit 0 ಮತ್ತು 0 ಪರೀಕ್ಷೆ ಓಡಿಸಿ ಪಾಸ್ ಎಂದು ಎಣಿಕೆಯಾಯಿತು, ತಪ್ಪು ಹೆಸರಿನ ಮಾಡ್ಯೂಲ್ 1 ನಲ್ಲಿ ನಿರ್ಗಮಿಸಿತು, ಮತ್ತು ಹೆಸರಿಸಿದ ಪರೀಕ್ಷೆ 1 ಪರೀಕ್ಷೆ ಓಡಿಸಿ 0 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "An item is only as verified as the proof that actually ran, so receipts must name the content they saw and proofs must be run, counted and compared with the planned command.",
    "bodyKn": "ಘಟಕ ನಿಜವಾಗಿ ಓಡಿದ ಪುರಾವೆಯಷ್ಟೇ ಪರಿಶೀಲಿತ, ಆದ್ದರಿಂದ ರಸೀದಿಗಳು ತಾವು ಕಂಡ ವಿಷಯ ಹೆಸರಿಸಬೇಕು ಮತ್ತು ಪುರಾವೆಗಳನ್ನು ಓಡಿಸಿ, ಎಣಿಸಿ, ಯೋಜಿತ ಆದೇಶಕ್ಕೆ ಹೋಲಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"exit code 0 means the proof passed.\" An echo exited 0 with no tests run.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"exit code 0 ಎಂದರೆ ಪುರಾವೆ ಪಾಸ್ ಆಯಿತು.\" echo ಯಾವುದೇ ಪರೀಕ್ಷೆ ಓಡಿಸದೆ 0 ನಲ್ಲಿ ನಿರ್ಗಮಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Receipt: a recorded observation of a file with its size and hash. Containment: a path stays inside the repository root. Stale evidence: a receipt for content that has since changed. Proof run: the executed command with its recorded result. Test count: how many tests the run reports.",
    "bodyKn": "Receipt: ಗಾತ್ರ ಮತ್ತು hash ಜೊತೆ ಫೈಲ್‌ನ ದಾಖಲಿತ ವೀಕ್ಷಣೆ. Containment: path repository ಮೂಲದೊಳಗೆ ಉಳಿಯುವುದು. Stale evidence: ಆಮೇಲೆ ಬದಲಾದ ವಿಷಯದ ರಸೀದಿ. Proof run: ದಾಖಲಿತ ಫಲಿತಾಂಶ ಇರುವ ಕಾರ್ಯಗತ ಆದೇಶ. Test count: ಓಟ ವರದಿ ಮಾಡುವ ಪರೀಕ್ಷೆಗಳ ಸಂಖ್ಯೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Paths outside the root were refused and a directory was not a file. 2) An edit changed the hash and staled the receipt. 3) A found helper replaced a planned new utility. 4) Pass, fail, timeout and cannot-start gave four different outcomes. 5) An echo exited 0 with zero tests run.",
    "bodyKn": "1) ಮೂಲದ ಹೊರಗಿನ paths ನಿರಾಕರಿಸಲ್ಪಟ್ಟವು ಮತ್ತು ಡೈರೆಕ್ಟರಿ ಫೈಲ್ ಆಗಿರಲಿಲ್ಲ. 2) ಸಂಪಾದನೆ hash ಬದಲಿಸಿ ರಸೀದಿ ಹಳೆಯದಾಗಿಸಿತು. 3) ಕಂಡ helper ಯೋಜಿತ ಹೊಸ utility ಬದಲಿಸಿತು. 4) ಪಾಸ್, ವಿಫಲ, timeout ಮತ್ತು ಆರಂಭಿಸಲಾಗದು ನಾಲ್ಕು ಬೇರೆ ಫಲಿತಾಂಶ ನೀಡಿದವು. 5) echo ಶೂನ್ಯ ಪರೀಕ್ಷೆಯೊಂದಿಗೆ 0 ನಲ್ಲಿ ನಿರ್ಗಮಿಸಿತು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B ep_2.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B ep_2.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B ep_2.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B ep_2.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did app/../../outside.txt come back as?",
      "qKn": "app/../../outside.txt ಏನಾಗಿ ಬಂತು?",
      "opts": [
       "outside_root",
       "found",
       "missing",
       "directory"
      ],
      "optsKn": [
       "outside_root",
       "found",
       "missing",
       "directory"
      ],
      "correct": 0
     },
     {
      "q": "What happened to the receipt after the file was edited?",
      "qKn": "ಫೈಲ್ ಸಂಪಾದಿಸಿದ ನಂತರ ರಸೀದಿಗೆ ಏನಾಯಿತು?",
      "opts": [
       "Its hash no longer matched, so it was stale",
       "It stayed valid",
       "It was deleted",
       "It was signed"
      ],
      "optsKn": [
       "ಅದರ hash ಇನ್ನು ಹೊಂದಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಹಳೆಯದಾಯಿತು",
       "ಮಾನ್ಯವಾಗಿ ಉಳಿಯಿತು",
       "ಅಳಿಸಲ್ಪಟ್ಟಿತು",
       "ಸಹಿ ಮಾಡಲಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What did the hanging proof command record?",
      "qKn": "ನೇತಾಡುವ ಪುರಾವೆ ಆದೇಶ ಏನು ದಾಖಲಿಸಿತು?",
      "opts": [
       "timed_out true and no exit code",
       "exit 0",
       "exit 1",
       "tests ran 1"
      ],
      "optsKn": [
       "timed_out true ಮತ್ತು exit code ಇಲ್ಲ",
       "exit 0",
       "exit 1",
       "tests ran 1"
      ],
      "correct": 0
     },
     {
      "q": "How many tests did the echo \"All tests passed\" run?",
      "qKn": "echo \"All tests passed\" ಎಷ್ಟು ಪರೀಕ್ಷೆ ಓಡಿಸಿತು?",
      "opts": [
       "0",
       "1",
       "3",
       "10"
      ],
      "optsKn": [
       "0",
       "1",
       "3",
       "10"
      ],
      "correct": 0
     },
     {
      "q": "What raised before any record existed?",
      "qKn": "ಯಾವುದೇ ದಾಖಲೆ ಇರುವ ಮುನ್ನ ಏನು ಎತ್ತಿತು?",
      "opts": [
       "A program that could not start (FileNotFoundError)",
       "A failing test",
       "A timeout",
       "A passing test"
      ],
      "optsKn": [
       "ಆರಂಭಿಸಲಾಗದ ಪ್ರೋಗ್ರಾಂ (FileNotFoundError)",
       "ವಿಫಲ ಪರೀಕ್ಷೆ",
       "timeout",
       "ಪಾಸ್ ಆದ ಪರೀಕ್ಷೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
