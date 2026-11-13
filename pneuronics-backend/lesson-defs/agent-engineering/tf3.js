module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af74d1962582a270995fb8c",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Frame the Task Before the Agent Writes Code (Part 3 of 3) — Receipts, Unknowns, Scope and Proof",
 "titleKn": "Agent ಕೋಡ್ ಬರೆಯುವ ಮುನ್ನ ಕಾರ್ಯ ರೂಪಿಸಿ (ಭಾಗ 3 / 3) — ರಸೀದಿಗಳು, ಅಜ್ಞಾತಗಳು, ವ್ಯಾಪ್ತಿ ಮತ್ತು ಪುರಾವೆ",
 "desc": "Check a task frame against a real git repository: resolve receipts, apply a policy to unknowns, audit the diff and test whether an acceptance command ran a test.",
 "descKn": "ನಿಜ git repository ವಿರುದ್ಧ ಕಾರ್ಯ frame ಪರಿಶೀಲಿಸಿ: ರಸೀದಿ ಪರಿಹರಿಸಿ, ಅಜ್ಞಾತಗಳಿಗೆ ನೀತಿ ಅನ್ವಯಿಸಿ, diff ಲೆಕ್ಕಪರಿಶೋಧಿಸಿ ಮತ್ತು ಸ್ವೀಕಾರ ಆದೇಶ ಪರೀಕ್ಷೆ ಓಡಿಸಿತೇ ಎಂದು ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Resolve evidence receipts.",
  "Handle the four kinds of unknown.",
  "Audit the diff against scope.",
  "Check the test count.",
  "Read what a test actually asserts."
 ],
 "objectivesKn": [
  "ಸಾಕ್ಷ್ಯ ರಸೀದಿ ಪರಿಹರಿಸಿ.",
  "ನಾಲ್ಕು ರೀತಿಯ ಅಜ್ಞಾತ ನಿರ್ವಹಿಸಿ.",
  "ವ್ಯಾಪ್ತಿ ವಿರುದ್ಧ diff ಲೆಕ್ಕಪರಿಶೋಧಿಸಿ.",
  "ಪರೀಕ್ಷಾ ಎಣಿಕೆ ಪರಿಶೀಲಿಸಿ.",
  "ಪರೀಕ್ಷೆ ನಿಜವಾಗಿ ಏನು ಪ್ರತಿಪಾದಿಸುತ್ತದೆ ಓದಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Frame the Task Before the Agent Writes Code (Part 3 of 3)",
    "textKn": "Agent ಕೋಡ್ ಬರೆಯುವ ಮುನ್ನ ಕಾರ್ಯ ರೂಪಿಸಿ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: checking a frame against a real git repository: resolving receipts, a policy for four kinds of unknown, a scope audit of the diff and whether an acceptance command ran a test. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind framing a task before an agent writes code (goal, evidence receipts, scope, acceptance evidence and unknowns), not the real software, and the repository, facts and paths are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The pasted lesson said its original main.py was not supplied, so the labs are our own implementation of the behaviour it describes; results depend on the machine they ran on. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ನಿಜ git repository ವಿರುದ್ಧ frame ಪರಿಶೀಲನೆ: ರಸೀದಿ ಪರಿಹಾರ, ನಾಲ್ಕು ರೀತಿಯ ಅಜ್ಞಾತಕ್ಕೆ ನೀತಿ, diff ನ ವ್ಯಾಪ್ತಿ ಲೆಕ್ಕಪರಿಶೋಧನೆ ಮತ್ತು ಸ್ವೀಕಾರ ಆದೇಶ ಪರೀಕ್ಷೆ ಓಡಿಸಿತೇ ಎಂಬುದು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು agent ಕೋಡ್ ಬರೆಯುವ ಮುನ್ನ ಕಾರ್ಯ ರೂಪಿಸುವುದು (ಗುರಿ, ಸಾಕ್ಷ್ಯ ರಸೀದಿಗಳು, ವ್ಯಾಪ್ತಿ, ಸ್ವೀಕಾರ ಸಾಕ್ಷ್ಯ ಮತ್ತು ಅಜ್ಞಾತಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು repository, ಸತ್ಯಗಳು ಮತ್ತು paths ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಮೂಲ main.py ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ; ಫಲಿತಾಂಶಗಳು ಅವು ಓಡಿದ ಯಂತ್ರವನ್ನು ಅವಲಂಬಿಸಿವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Validation Is the Beginning",
    "textKn": "ಮಾನ್ಯೀಕರಣ ಆರಂಭ ಮಾತ್ರ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Receipts, Unknowns, Diff and Proof",
    "headingKn": "ರಸೀದಿಗಳು, ಅಜ್ಞಾತಗಳು, Diff ಮತ್ತು ಪುರಾವೆ",
    "bodyEn": "A frame that passed validation has only shown that its structure is complete. This part checks it against a real temporary git repository: whether each file:line receipt resolves and supports its claim, what each of the four kinds of unknown requires, whether the actual diff stays inside the allowed paths, and whether an acceptance command really ran a test. The repository, facts and paths are made up.",
    "bodyKn": "ಮಾನ್ಯೀಕರಣ ಪಾಸ್ ಆದ frame ತನ್ನ ರಚನೆ ಸಂಪೂರ್ಣ ಎಂದು ಮಾತ್ರ ತೋರಿಸಿದೆ. ಈ ಭಾಗ ಅದನ್ನು ನಿಜ ತಾತ್ಕಾಲಿಕ git repository ವಿರುದ್ಧ ಪರಿಶೀಲಿಸುತ್ತದೆ: ಪ್ರತಿ file:line ರಸೀದಿ ಪರಿಹಾರವಾಗಿ ತನ್ನ ಹೇಳಿಕೆಯನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆಯೇ, ನಾಲ್ಕು ರೀತಿಯ ಅಜ್ಞಾತಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದಕ್ಕೂ ಏನು ಬೇಕು, ನಿಜ diff ಅನುಮತಿಸಿದ paths ಒಳಗೆ ಉಳಿಯುತ್ತದೆಯೇ, ಮತ್ತು ಸ್ವೀಕಾರ ಆದೇಶ ನಿಜವಾಗಿ ಪರೀಕ್ಷೆ ಓಡಿಸಿತೇ. repository, ಸತ್ಯಗಳು ಮತ್ತು paths ಕಲ್ಪಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Check the Frame Against the Repository",
    "headingKn": "Frame ಅನ್ನು Repository ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Check the frame against the repo</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">receipts</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">file:line resolves</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">unknowns</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">four kinds</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">diff audit</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">allowed vs forbidden</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">acceptance</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">tests actually ran</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">structure is checked, truth must be read</text></svg>",
    "captionEn": "Structure is checked; truth has to be read.",
    "captionKn": "ರಚನೆ ಪರಿಶೀಲಿಸಲ್ಪಡುತ್ತದೆ; ಸತ್ಯವನ್ನು ಓದಬೇಕು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The four unknowns",
    "headingKn": "ನಾಲ್ಕು ಅಜ್ಞಾತಗಳು",
    "headers": [
     "Category",
     "Example",
     "What to do"
    ],
    "rows": [
     [
      "discoverable",
      "does the database enforce uniqueness",
      "investigate"
     ],
     [
      "decidable",
      "what to call a private helper",
      "decide and record it"
     ],
     [
      "human",
      "may the duplicate response change",
      "stop and ask"
     ],
     [
      "deferred",
      "refactor the whole subsystem",
      "record as a non-goal"
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
    "filename": "tf_3.py",
    "headingEn": "Receipts, unknown policy, diff audit",
    "headingKn": "ರಸೀದಿಗಳು, ಅಜ್ಞಾತ ನೀತಿ, diff ಲೆಕ್ಕಪರಿಶೋಧನೆ",
    "descEn": "check_receipt opens the file and tests the line for the claim keyword. next_step maps each unknown category to an action and lists human unknowns as blockers. changed_files combines the git diff with untracked files and audit compares them with allowed and forbidden paths.",
    "descKn": "check_receipt ಫೈಲ್ ತೆರೆದು ಸಾಲನ್ನು ಹೇಳಿಕೆಯ ಕೀವರ್ಡ್‌ಗಾಗಿ ಪರೀಕ್ಷಿಸುತ್ತದೆ. next_step ಪ್ರತಿ ಅಜ್ಞಾತ ವರ್ಗವನ್ನು ಕ್ರಿಯೆಗೆ ಮ್ಯಾಪ್ ಮಾಡಿ human ಅಜ್ಞಾತಗಳನ್ನು ತಡೆಗಳಾಗಿ ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ. changed_files git diff ಅನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡದ ಫೈಲ್‌ಗಳೊಂದಿಗೆ ಸೇರಿಸಿ audit ಅವನ್ನು ಅನುಮತಿಸಿದ ಮತ್ತು ನಿಷೇಧಿತ paths ಗೆ ಹೋಲಿಸುತ್ತದೆ.",
    "code": "def check_receipt(repo, claim_keyword, receipt):\n    m = re.fullmatch(r\"([\\w./-]+):(\\d+)\", receipt)\n    if not m:\n        return \"malformed receipt\"\n    path, line = m.group(1), int(m.group(2))\n    f = Path(repo) / path\n    if not f.is_file():\n        return \"file not found\"\n    lines = f.read_text(encoding=\"utf-8\").splitlines()\n    if line > len(lines):\n        return f\"line {line} beyond end of file ({len(lines)} lines)\"\n    return \"supported\" if claim_keyword in lines[line - 1] else \"line exists but does not support the claim\"\n\n\nPOLICY = {\"discoverable\": \"investigate\", \"decidable\": \"decide within delegated authority and record it\", \"human\": \"stop and ask\", \"deferred\": \"record as a non-goal\"}\n\n\ndef next_step(unknowns):\n    steps = [(q, POLICY[c]) for q, c in unknowns]\n    blocked = [q for q, c in unknowns if c == \"human\"]\n    return steps, blocked\n\n\ndef changed_files(repo, base):\n    out = set(git(repo, \"diff\", \"--name-only\", \"--no-renames\", base).splitlines())\n    out |= set(git(repo, \"ls-files\", \"--others\", \"--exclude-standard\").splitlines())\n    return sorted(out)\n\n\ndef covered(path, prefix):\n    prefix = prefix.rstrip(\"/\")\n    return path == prefix or path.startswith(prefix + \"/\")\n\n\ndef audit(files, allowed, forbidden):\n    bad = []\n    for f in files:\n        if any(covered(f, p) for p in forbidden):\n            bad.append((f, \"forbidden\"))\n        elif not any(covered(f, p) for p in allowed):\n            bad.append((f, \"outside allowed paths\"))\n    return bad"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "tf_3.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() builds a git repository, resolves five receipts, maps four unknowns, audits an allowed edit then a forbidden migration and a README, runs three acceptance commands and checks a test that asserts nothing about registration.",
    "descKn": "main() git repository ನಿರ್ಮಿಸಿ, ಐದು ರಸೀದಿ ಪರಿಹರಿಸಿ, ನಾಲ್ಕು ಅಜ್ಞಾತ ಮ್ಯಾಪ್ ಮಾಡಿ, ಅನುಮತಿಸಿದ ಸಂಪಾದನೆ ನಂತರ ನಿಷೇಧಿತ migration ಮತ್ತು README ಲೆಕ್ಕಪರಿಶೋಧಿಸಿ, ಮೂರು ಸ್ವೀಕಾರ ಆದೇಶ ಓಡಿಸಿ ಮತ್ತು ನೋಂದಣಿ ಬಗ್ಗೆ ಏನನ್ನೂ ಪ್ರತಿಪಾದಿಸದ ಪರೀಕ್ಷೆ ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    "code": "def main():\n    with tempfile.TemporaryDirectory() as d:\n        repo = Path(d)\n        git(repo, \"init\", \"-q\")\n        (repo / \"src/accounts\").mkdir(parents=True)\n        (repo / \"tests\").mkdir()\n        (repo / \"migrations\").mkdir()\n        (repo / \"src/accounts/normalization.py\").write_text(\"def normalize(email):\" + chr(10) + \"    return email.strip().lower()\" + chr(10), encoding=\"utf-8\")\n        (repo / \"tests/test_accounts.py\").write_text(\"import unittest\" + chr(10) + \"class T(unittest.TestCase):\" + chr(10) + \"    def test_duplicate(self):\" + chr(10) + \"        self.assertEqual(409, 409)\" + chr(10), encoding=\"utf-8\")\n        (repo / \"migrations/001.sql\").write_text(\"-- schema\" + chr(10), encoding=\"utf-8\")\n        git(repo, \"add\", \"-A\")\n        git(repo, \"commit\", \"-q\", \"-m\", \"base\")\n        base = git(repo, \"rev-parse\", \"HEAD\")\n\n        section(\"1. Genuinely running: resolving evidence receipts in the repository\")\n        for label, kw, rec in ((\"real line, supports claim\", \"lower\", \"src/accounts/normalization.py:2\"), (\"real line, wrong claim\", \"409 conflict\", \"src/accounts/normalization.py:2\"), (\"line past the end\", \"lower\", \"src/accounts/normalization.py:99\"),\n                               (\"file missing\", \"x\", \"src/accounts/nope.py:1\"), (\"no line number\", \"x\", \"tests/test_accounts.py\")):\n            print(f\"{label:26} {rec:36} -> {check_receipt(repo, kw, rec)}\")\n        print(\"a receipt that looked fine in shape was caught when its line did not exist, when the file was missing and when the line did not contain what the claim says; only the first is actually supported, and even that shows the line says something, not that the claim is wholly true\")\n\n        section(\"2. Genuinely running: the four kinds of unknown and what each requires\")\n        unknowns = [(\"Does the database already enforce uniqueness?\", \"discoverable\"), (\"What should the private helper be called?\", \"decidable\"), (\"May the duplicate response change for existing clients?\", \"human\"), (\"Should the registration subsystem be refactored?\", \"deferred\")]\n        steps, blocked = next_step(unknowns)\n        for q, s in steps:\n            print(f\"{s:48} <- {q}\")\n        print(\"dependent work blocked until a human answers:\", blocked)\n        print(\"only the human unknown stops dependent work; the discoverable one is a task for the agent and the deferred one leaves the scope alone, which is the difference between an unresolved question and a blocker\")\n\n        section(\"3. Genuinely running: a scope audit of the real diff\")\n        allowed, forbidden = [\"src/accounts/\", \"tests/accounts/\"], [\"migrations/\", \"deploy/\", \"src/auth/\"]\n        (repo / \"src/accounts/service.py\").write_text(\"x = 1\" + chr(10), encoding=\"utf-8\")\n        print(\"only an allowed file changed:\", audit(changed_files(repo, base), allowed, forbidden))\n        (repo / \"migrations/002_unique_email.sql\").write_text(\"ALTER TABLE ...\" + chr(10), encoding=\"utf-8\")\n        (repo / \"README.md\").write_text(\"docs\" + chr(10), encoding=\"utf-8\")\n        files = changed_files(repo, base)\n        print(\"changed files:\", files)\n        print(\"audit:\", audit(files, allowed, forbidden))\n        print(\"the unique-index migration the agent thought cleanest was flagged as forbidden and the README as outside the allowed paths, though the tests might all pass; this is the moment the agent should stop and ask for the scope to be extended, not edit quietly\")\n\n        section(\"4. Genuinely running: did the acceptance command actually run a test?\")\n        (repo / \"tests/__init__.py\").write_text(\"\", encoding=\"utf-8\")\n        for label, cmd in ((\"named module that exists\", [sys.executable, \"-B\", \"-m\", \"unittest\", \"tests.test_accounts\", \"-v\"]), (\"named module that does not exist\", [sys.executable, \"-B\", \"-m\", \"unittest\", \"tests.test_nothing\"]), (\"echo instead of a test\", [sys.executable, \"-c\", \"print('All tests passed')\"])):\n            p = subprocess.run(cmd, cwd=repo, capture_output=True, text=True)\n            m = re.search(r\"Ran (\\d+) test\", p.stderr)\n            print(f\"{label:34} exit={p.returncode} tests ran={int(m.group(1)) if m else 0}\")\n        print(\"the echo exited 0 and printed that tests passed while running none, and the missing module exited non-zero; an acceptance command is evidence only when the number of tests run is checked along with the exit code, and when the test named actually covers the claim\")\n\n        section(\"5. Genuinely measuring: a test that passes without covering the requirement\")\n        print(\"test_duplicate asserts 409 == 409:\", subprocess.run([sys.executable, \"-B\", \"-m\", \"unittest\", \"tests.test_accounts\"], cwd=repo, capture_output=True, text=True).returncode == 0)\n        print(\"the only test passes and tests nothing about registration, so a green run here would be a statement about a different behaviour; whether a test supports the claim has to be read from its assertions\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: resolving evidence receipts in the repository ---\nreal line, supports claim  src/accounts/normalization.py:2      -> supported\nreal line, wrong claim     src/accounts/normalization.py:2      -> line exists but does not support the claim\nline past the end          src/accounts/normalization.py:99     -> line 99 beyond end of file (2 lines)\nfile missing               src/accounts/nope.py:1               -> file not found\nno line number             tests/test_accounts.py               -> malformed receipt\na receipt that looked fine in shape was caught when its line did not exist, when the file was missing and when the line did not contain what the claim says; only the first is actually supported, and even that shows the line says something, not that the claim is wholly true\n\n--- 2. Genuinely running: the four kinds of unknown and what each requires ---\ninvestigate                                      <- Does the database already enforce uniqueness?\ndecide within delegated authority and record it  <- What should the private helper be called?\nstop and ask                                     <- May the duplicate response change for existing clients?\nrecord as a non-goal                             <- Should the registration subsystem be refactored?\ndependent work blocked until a human answers: ['May the duplicate response change for existing clients?']\nonly the human unknown stops dependent work; the discoverable one is a task for the agent and the deferred one leaves the scope alone, which is the difference between an unresolved question and a blocker\n\n--- 3. Genuinely running: a scope audit of the real diff ---\nonly an allowed file changed: []\nchanged files: ['README.md', 'migrations/002_unique_email.sql', 'src/accounts/service.py']\naudit: [('README.md', 'outside allowed paths'), ('migrations/002_unique_email.sql', 'forbidden')]\nthe unique-index migration the agent thought cleanest was flagged as forbidden and the README as outside the allowed paths, though the tests might all pass; this is the moment the agent should stop and ask for the scope to be extended, not edit quietly\n\n--- 4. Genuinely running: did the acceptance command actually run a test? ---\nnamed module that exists           exit=0 tests ran=1\nnamed module that does not exist   exit=1 tests ran=1\necho instead of a test             exit=0 tests ran=0\nthe echo exited 0 and printed that tests passed while running none, and the missing module exited non-zero; an acceptance command is evidence only when the number of tests run is checked along with the exit code, and when the test named actually covers the claim\n\n--- 5. Genuinely measuring: a test that passes without covering the requirement ---\ntest_duplicate asserts 409 == 409: True\nthe only test passes and tests nothing about registration, so a green run here would be a statement about a different behaviour; whether a test supports the claim has to be read from its assertions"
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
    "headingEn": "Experiment 1: Resolving evidence receipts in the repository",
    "headingKn": "ಪ್ರಯೋಗ 1: Resolving evidence receipts in the repository",
    "bodyEn": "What it ran: Resolving evidence receipts in the repository. What the lab concluded: a receipt that looked fine in shape was caught when its line did not exist, when the file was missing and when the line did not contain what the claim says; only the first is actually supported, and even that shows the line says something, not that the claim is wholly true",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Resolving evidence receipts in the repository. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a receipt that looked fine in shape was caught when its line did not exist, when the file was missing and when the line did not contain what the claim says; only the first is actually supported, and even that shows the line says something, not that the claim is wholly true"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: resolving evidence receipts in the repository ---\nreal line, supports claim  src/accounts/normalization.py:2      -> supported\nreal line, wrong claim     src/accounts/normalization.py:2      -> line exists but does not support the claim\nline past the end          src/accounts/normalization.py:99     -> line 99 beyond end of file (2 lines)\nfile missing               src/accounts/nope.py:1               -> file not found\nno line number             tests/test_accounts.py               -> malformed receipt"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: The four kinds of unknown and what each requires",
    "headingKn": "ಪ್ರಯೋಗ 2: The four kinds of unknown and what each requires",
    "bodyEn": "What it ran: The four kinds of unknown and what each requires. What the lab concluded: only the human unknown stops dependent work; the discoverable one is a task for the agent and the deferred one leaves the scope alone, which is the difference between an unresolved question and a blocker",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The four kinds of unknown and what each requires. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): only the human unknown stops dependent work; the discoverable one is a task for the agent and the deferred one leaves the scope alone, which is the difference between an unresolved question and a blocker"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: the four kinds of unknown and what each requires ---\ninvestigate                                      <- Does the database already enforce uniqueness?\ndecide within delegated authority and record it  <- What should the private helper be called?\nstop and ask                                     <- May the duplicate response change for existing clients?\nrecord as a non-goal                             <- Should the registration subsystem be refactored?\ndependent work blocked until a human answers: ['May the duplicate response change for existing clients?']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: A scope audit of the real diff",
    "headingKn": "ಪ್ರಯೋಗ 3: A scope audit of the real diff",
    "bodyEn": "What it ran: A scope audit of the real diff. What the lab concluded: the unique-index migration the agent thought cleanest was flagged as forbidden and the README as outside the allowed paths, though the tests might all pass; this is the moment the agent should stop and ask for the scope to be extended, not edit quietly",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A scope audit of the real diff. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the unique-index migration the agent thought cleanest was flagged as forbidden and the README as outside the allowed paths, though the tests might all pass; this is the moment the agent should stop and ask for the scope to be extended, not edit quietly"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: a scope audit of the real diff ---\nonly an allowed file changed: []\nchanged files: ['README.md', 'migrations/002_unique_email.sql', 'src/accounts/service.py']\naudit: [('README.md', 'outside allowed paths'), ('migrations/002_unique_email.sql', 'forbidden')]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Did the acceptance command actually run a test?",
    "headingKn": "ಪ್ರಯೋಗ 4: Did the acceptance command actually run a test?",
    "bodyEn": "What it ran: Did the acceptance command actually run a test?. What the lab concluded: the echo exited 0 and printed that tests passed while running none, and the missing module exited non-zero; an acceptance command is evidence only when the number of tests run is checked along with the exit code, and when the test named actually covers the claim",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Did the acceptance command actually run a test?. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the echo exited 0 and printed that tests passed while running none, and the missing module exited non-zero; an acceptance command is evidence only when the number of tests run is checked along with the exit code, and when the test named actually covers the claim"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: did the acceptance command actually run a test? ---\nnamed module that exists           exit=0 tests ran=1\nnamed module that does not exist   exit=1 tests ran=1\necho instead of a test             exit=0 tests ran=0"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A test that passes without covering the requirement",
    "headingKn": "ಪ್ರಯೋಗ 5: A test that passes without covering the requirement",
    "bodyEn": "What it ran: A test that passes without covering the requirement. What the lab concluded: the only test passes and tests nothing about registration, so a green run here would be a statement about a different behaviour; whether a test supports the claim has to be read from its assertions",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A test that passes without covering the requirement. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the only test passes and tests nothing about registration, so a green run here would be a statement about a different behaviour; whether a test supports the claim has to be read from its assertions"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely measuring: a test that passes without covering the requirement ---\ntest_duplicate asserts 409 == 409: True"
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
    "headingEn": "Genuinely Found: Only One Receipt in Five Was Supported",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಐದರಲ್ಲಿ ಒಂದು ರಸೀದಿ ಮಾತ್ರ ಬೆಂಬಲಿತ",
    "bodyEn": "Section 1: of five receipts, the real line containing the claim keyword was \"supported\"; the same line with a different claim said it exists but does not support it; line 99 reported beyond end of file (2 lines); a missing file and a receipt with no line number were also rejected. Section 2: of four unknowns only the human one blocked dependent work.",
    "bodyKn": "ವಿಭಾಗ 1: ಐದು ರಸೀದಿಗಳಲ್ಲಿ, ಹೇಳಿಕೆಯ ಕೀವರ್ಡ್ ಇರುವ ನಿಜ ಸಾಲು \"supported\" ಆಯಿತು; ಬೇರೆ ಹೇಳಿಕೆಯೊಂದಿಗೆ ಅದೇ ಸಾಲು ಅದು ಇದೆ ಆದರೆ ಬೆಂಬಲಿಸುವುದಿಲ್ಲ ಎಂದಿತು; ಸಾಲು 99 ಫೈಲ್ ಅಂತ್ಯದ ನಂತರ (2 ಸಾಲು) ಎಂದು ವರದಿಯಾಯಿತು; ಕಾಣೆಯಾದ ಫೈಲ್ ಮತ್ತು ಸಾಲು ಸಂಖ್ಯೆ ಇಲ್ಲದ ರಸೀದಿ ಕೂಡ ತಿರಸ್ಕೃತವಾದವು. ವಿಭಾಗ 2: ನಾಲ್ಕು ಅಜ್ಞಾತಗಳಲ್ಲಿ human ಒಂದು ಮಾತ್ರ ಅವಲಂಬಿತ ಕೆಲಸ ತಡೆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Diff Caught the Migration and an Echo Passed",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Diff migration ಹಿಡಿಯಿತು ಮತ್ತು echo ಪಾಸ್ ಆಯಿತು",
    "bodyEn": "Section 3: an edit to src/accounts/service.py gave no violations; adding migrations/002_unique_email.sql and README.md gave the migration as forbidden and README.md as outside the allowed paths. Section 4: the existing test module exited 0 with 1 test run, a missing module exited 1, and an echo of \"All tests passed\" exited 0 with 0 tests run. Section 5: the only test asserted 409 == 409 and passed while covering nothing about registration.",
    "bodyKn": "ವಿಭಾಗ 3: src/accounts/service.py ಸಂಪಾದನೆ ಉಲ್ಲಂಘನೆ ನೀಡಲಿಲ್ಲ; migrations/002_unique_email.sql ಮತ್ತು README.md ಸೇರಿಸಿದಾಗ migration ನಿಷೇಧಿತ ಮತ್ತು README.md ಅನುಮತಿಸಿದ paths ಹೊರಗೆ ಎಂದು ಬಂತು. ವಿಭಾಗ 4: ಇರುವ ಪರೀಕ್ಷಾ ಮಾಡ್ಯೂಲ್ 1 ಪರೀಕ್ಷೆ ಓಡಿಸಿ 0 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸಿತು, ಕಾಣೆಯಾದ ಮಾಡ್ಯೂಲ್ 1 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸಿತು, ಮತ್ತು \"All tests passed\" ನ echo 0 ಪರೀಕ್ಷೆ ಓಡಿಸಿ 0 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸಿತು. ವಿಭಾಗ 5: ಏಕೈಕ ಪರೀಕ್ಷೆ 409 == 409 ಪ್ರತಿಪಾದಿಸಿ ನೋಂದಣಿ ಬಗ್ಗೆ ಏನನ್ನೂ ಒಳಗೊಳ್ಳದೆ ಪಾಸ್ ಆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A frame is only worth what its receipts, scope audit and acceptance command can show, and each of those can pass while saying nothing true about the task.",
    "bodyKn": "frame ಅದರ ರಸೀದಿಗಳು, ವ್ಯಾಪ್ತಿ ಲೆಕ್ಕಪರಿಶೋಧನೆ ಮತ್ತು ಸ್ವೀಕಾರ ಆದೇಶ ತೋರಿಸಬಹುದಾದಷ್ಟೇ ಮೌಲ್ಯದ್ದು, ಮತ್ತು ಇವುಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ಕಾರ್ಯದ ಬಗ್ಗೆ ಸತ್ಯವಾದದ್ದನ್ನು ಹೇಳದೆ ಪಾಸ್ ಆಗಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the tests passed, so the requirement is verified.\" The only test asserted 409 == 409.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಪರೀಕ್ಷೆಗಳು ಪಾಸ್ ಆದವು, ಆದ್ದರಿಂದ ಅವಶ್ಯಕತೆ ಪರಿಶೀಲಿತ.\" ಏಕೈಕ ಪರೀಕ್ಷೆ 409 == 409 ಪ್ರತಿಪಾದಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Receipt resolution: opening the cited file and line. Blocker: a human unknown that stops dependent work. Scope audit: comparing the real diff with allowed and forbidden paths. Tests ran: the count of tests executed. Claim support: whether the cited line says what the claim says.",
    "bodyKn": "Receipt resolution: ಉಲ್ಲೇಖಿಸಿದ ಫೈಲ್ ಮತ್ತು ಸಾಲು ತೆರೆಯುವುದು. Blocker: ಅವಲಂಬಿತ ಕೆಲಸ ನಿಲ್ಲಿಸುವ human ಅಜ್ಞಾತ. Scope audit: ನಿಜ diff ಅನ್ನು ಅನುಮತಿಸಿದ ಮತ್ತು ನಿಷೇಧಿತ paths ಗೆ ಹೋಲಿಸುವುದು. Tests ran: ಓಡಿಸಿದ ಪರೀಕ್ಷೆಗಳ ಎಣಿಕೆ. Claim support: ಉಲ್ಲೇಖಿತ ಸಾಲು ಹೇಳಿಕೆ ಹೇಳುವುದನ್ನೇ ಹೇಳುತ್ತದೆಯೇ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) One of five receipts was actually supported. 2) Only the human unknown blocked work. 3) The diff audit flagged a forbidden migration and an out-of-scope README. 4) An echo exited 0 with zero tests run. 5) The only test covered nothing about registration.",
    "bodyKn": "1) ಐದು ರಸೀದಿಗಳಲ್ಲಿ ಒಂದು ಮಾತ್ರ ನಿಜವಾಗಿ ಬೆಂಬಲಿತ. 2) human ಅಜ್ಞಾತ ಮಾತ್ರ ಕೆಲಸ ತಡೆಯಿತು. 3) diff ಲೆಕ್ಕಪರಿಶೋಧನೆ ನಿಷೇಧಿತ migration ಮತ್ತು ವ್ಯಾಪ್ತಿಯ ಹೊರಗಿನ README ಗುರುತಿಸಿತು. 4) echo ಶೂನ್ಯ ಪರೀಕ್ಷೆಯೊಂದಿಗೆ 0 ನಲ್ಲಿ ನಿರ್ಗಮಿಸಿತು. 5) ಏಕೈಕ ಪರೀಕ್ಷೆ ನೋಂದಣಿ ಬಗ್ಗೆ ಏನನ್ನೂ ಒಳಗೊಳ್ಳಲಿಲ್ಲ."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B tf_3.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B tf_3.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B tf_3.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B tf_3.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many of the five receipts were reported as supported?",
      "qKn": "ಐದು ರಸೀದಿಗಳಲ್ಲಿ ಎಷ್ಟು ಬೆಂಬಲಿತ ಎಂದು ವರದಿಯಾದವು?",
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
      "correct": 0
     },
     {
      "q": "Which unknown category blocked dependent work?",
      "qKn": "ಯಾವ ಅಜ್ಞಾತ ವರ್ಗ ಅವಲಂಬಿತ ಕೆಲಸ ತಡೆಯಿತು?",
      "opts": [
       "human",
       "discoverable",
       "decidable",
       "deferred"
      ],
      "optsKn": [
       "human",
       "discoverable",
       "decidable",
       "deferred"
      ],
      "correct": 0
     },
     {
      "q": "How did the audit classify the new migration file?",
      "qKn": "ಲೆಕ್ಕಪರಿಶೋಧನೆ ಹೊಸ migration ಫೈಲ್ ಅನ್ನು ಹೇಗೆ ವರ್ಗೀಕರಿಸಿತು?",
      "opts": [
       "forbidden",
       "allowed",
       "ignored",
       "outside allowed paths only"
      ],
      "optsKn": [
       "ನಿಷೇಧಿತ",
       "ಅನುಮತಿಸಿದ",
       "ನಿರ್ಲಕ್ಷಿಸಲಾಗಿದೆ",
       "ಅನುಮತಿಸಿದ paths ಹೊರಗೆ ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "How many tests did the echo acceptance command run?",
      "qKn": "echo ಸ್ವೀಕಾರ ಆದೇಶ ಎಷ್ಟು ಪರೀಕ್ಷೆ ಓಡಿಸಿತು?",
      "opts": [
       "0",
       "1",
       "5",
       "409"
      ],
      "optsKn": [
       "0",
       "1",
       "5",
       "409"
      ],
      "correct": 0
     },
     {
      "q": "Why was a green run of test_duplicate not evidence for registration?",
      "qKn": "test_duplicate ಹಸಿರು ಓಟ ನೋಂದಣಿಗೆ ಸಾಕ್ಷ್ಯ ಏಕೆ ಅಲ್ಲ?",
      "opts": [
       "It asserted 409 == 409 and tested nothing about registration",
       "It was too slow",
       "It used git",
       "It had a long name"
      ],
      "optsKn": [
       "ಅದು 409 == 409 ಪ್ರತಿಪಾದಿಸಿ ನೋಂದಣಿ ಬಗ್ಗೆ ಏನನ್ನೂ ಪರೀಕ್ಷಿಸಲಿಲ್ಲ",
       "ಅದು ತುಂಬಾ ನಿಧಾನ",
       "ಅದು git ಬಳಸಿತು",
       "ಅದರ ಹೆಸರು ಉದ್ದ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
