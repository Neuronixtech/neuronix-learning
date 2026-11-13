module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321577",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Scope Contracts and Task Boundaries (Part 3 of 3) — Git Evidence, Contract Source and Rollback",
 "titleKn": "ವ್ಯಾಪ್ತಿ ಒಪ್ಪಂದಗಳು ಮತ್ತು ಕಾರ್ಯ ಗಡಿಗಳು (ಭಾಗ 3 / 3) — Git ಸಾಕ್ಷ್ಯ, ಒಪ್ಪಂದದ ಮೂಲ ಮತ್ತು Rollback",
 "desc": "Derive touched files from git, load the contract from outside the agent's reach, roll back only the task's files and write an auditable report.",
 "descKn": "ಮುಟ್ಟಿದ ಫೈಲ್‌ಗಳನ್ನು git ನಿಂದ ಪಡೆಯಿರಿ, agent ತಲುಪದ ಸ್ಥಳದಿಂದ ಒಪ್ಪಂದ ಲೋಡ್ ಮಾಡಿ, ಕಾರ್ಯದ ಫೈಲ್‌ಗಳನ್ನು ಮಾತ್ರ rollback ಮಾಡಿ ಮತ್ತು ಲೆಕ್ಕಪರಿಶೋಧನೆಗೆ ಯೋಗ್ಯ ವರದಿ ಬರೆಯಿರಿ.",
 "objectives": [
  "Take touched files from git, not the agent.",
  "Include untracked files.",
  "Turn rename detection off.",
  "Load the contract from the baseline.",
  "Roll back only the task files."
 ],
 "objectivesKn": [
  "ಮುಟ್ಟಿದ ಫೈಲ್‌ಗಳನ್ನು agent ಯಿಂದಲ್ಲ, git ನಿಂದ ಪಡೆಯಿರಿ.",
  "ಟ್ರ್ಯಾಕ್ ಮಾಡದ ಫೈಲ್‌ಗಳನ್ನು ಸೇರಿಸಿ.",
  "rename ಪತ್ತೆ ಆರಿಸಿ.",
  "ಒಪ್ಪಂದವನ್ನು baseline ನಿಂದ ಲೋಡ್ ಮಾಡಿ.",
  "ಕಾರ್ಯದ ಫೈಲ್‌ಗಳನ್ನು ಮಾತ್ರ rollback ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Scope Contracts and Task Boundaries (Part 3 of 3)",
    "textKn": "ವ್ಯಾಪ್ತಿ ಒಪ್ಪಂದಗಳು ಮತ್ತು ಕಾರ್ಯ ಗಡಿಗಳು (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: deriving touched files from a real git repository, renames, a contract the agent edits, scoped rollback and a scope_report.json. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind scope contracts and task boundaries (contract, path classification, verification gate and rollback), not the real software, and the checks run on a temporary project and git repository on this machine and no language model is involved, so no real LLM behaviour is measured. The pasted lesson said its original main.py was not supplied, so the lab is our own implementation of the behaviour it describes; results depend on the machine it ran on. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ನಿಜ git repository ಯಿಂದ ಮುಟ್ಟಿದ ಫೈಲ್‌ಗಳನ್ನು ಪಡೆಯುವುದು, renames, agent ಸಂಪಾದಿಸುವ ಒಪ್ಪಂದ, ವ್ಯಾಪ್ತಿಗೊಳಿಸಿದ rollback ಮತ್ತು scope_report.json. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ವ್ಯಾಪ್ತಿ ಒಪ್ಪಂದಗಳು ಮತ್ತು ಕಾರ್ಯ ಗಡಿಗಳು (ಒಪ್ಪಂದ, path ವರ್ಗೀಕರಣ, ಪರಿಶೀಲನಾ gate ಮತ್ತು rollback) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪರಿಶೀಲನೆಗಳು ಈ ಯಂತ್ರದ ತಾತ್ಕಾಲಿಕ ಪ್ರಾಜೆಕ್ಟ್ ಮತ್ತು git repository ಮೇಲೆ ಓಡುತ್ತವೆ ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಮೂಲ main.py ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ; ಫಲಿತಾಂಶಗಳು ಅದು ಓಡಿದ ಯಂತ್ರವನ್ನು ಅವಲಂಬಿಸಿವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Where the File List Comes From",
    "textKn": "ಫೈಲ್ ಪಟ್ಟಿ ಎಲ್ಲಿಂದ ಬರುತ್ತದೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Evidence, Contract Source, Rollback and Report",
    "headingKn": "ಸಾಕ್ಷ್ಯ, ಒಪ್ಪಂದದ ಮೂಲ, Rollback ಮತ್ತು ವರದಿ",
    "bodyEn": "The gate is only as honest as its list of touched files. This part derives that list from git against a recorded baseline commit in a real temporary repository, including untracked files and renames. It then lets the agent edit the contract file itself, rolls back only the task's own files while a human's uncommitted edit survives, shows what git reset --hard would have destroyed, and writes a scope_report.json.",
    "bodyKn": "gate ಮುಟ್ಟಿದ ಫೈಲ್‌ಗಳ ಪಟ್ಟಿಯಷ್ಟೇ ಪ್ರಾಮಾಣಿಕ. ಈ ಭಾಗ ಆ ಪಟ್ಟಿಯನ್ನು ನಿಜ ತಾತ್ಕಾಲಿಕ repository ಯಲ್ಲಿ ದಾಖಲಿಸಿದ baseline commit ವಿರುದ್ಧ git ನಿಂದ ಪಡೆಯುತ್ತದೆ, ಟ್ರ್ಯಾಕ್ ಮಾಡದ ಫೈಲ್‌ಗಳು ಮತ್ತು renames ಸೇರಿ. ನಂತರ agent ಗೆ ಒಪ್ಪಂದ ಫೈಲ್ ಅನ್ನೇ ಸಂಪಾದಿಸಲು ಬಿಟ್ಟು, ಕಾರ್ಯದ ಸ್ವಂತ ಫೈಲ್‌ಗಳನ್ನು ಮಾತ್ರ rollback ಮಾಡಿ ಮಾನವನ ಉಳಿಸದ ಸಂಪಾದನೆ ಉಳಿಯುವಂತೆ ಮಾಡಿ, git reset --hard ಏನನ್ನು ನಾಶ ಮಾಡುತ್ತಿತ್ತು ಎಂದು ತೋರಿಸಿ, scope_report.json ಬರೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Git Is the Witness",
    "headingKn": "Git ಸಾಕ್ಷಿ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Git is the witness</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">git diff</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">base commit</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">contract</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">from baseline</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">report</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">JSON on disk</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">rollback</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">task files only</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the agent summary is a claim, git is evidence</text></svg>",
    "captionEn": "The agent summary is a claim, git is evidence.",
    "captionKn": "agent ಸಾರಾಂಶ ಹೇಳಿಕೆ, git ಸಾಕ್ಷ್ಯ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Evidence sources",
    "headingKn": "ಸಾಕ್ಷ್ಯ ಮೂಲಗಳು",
    "headers": [
     "Question",
     "Weak source",
     "Stronger source"
    ],
    "rows": [
     [
      "what changed",
      "the agent list",
      "git diff against the baseline plus untracked files"
     ],
     [
      "moved files",
      "diff with rename detection",
      "diff with --no-renames"
     ],
     [
      "what is allowed",
      "contract in the working tree",
      "contract from the baseline commit"
     ],
     [
      "how to undo",
      "git reset --hard",
      "restore only the task files"
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
    "filename": "sc_3.py",
    "headingEn": "touched, classify and verdict",
    "headingKn": "touched, classify ಮತ್ತು verdict",
    "descEn": "touched asks git for the diff against the base commit and adds untracked files, with a flag to turn rename detection off. verdict classifies every file and blocks on the first not allowed. sha hashes a file so the contract can be compared with its start state.",
    "descKn": "touched base commit ವಿರುದ್ಧ diff ಅನ್ನು git ಗೆ ಕೇಳಿ ಟ್ರ್ಯಾಕ್ ಮಾಡದ ಫೈಲ್‌ಗಳನ್ನು ಸೇರಿಸುತ್ತದೆ, rename ಪತ್ತೆ ಆರಿಸಲು flag ಇದೆ. verdict ಪ್ರತಿ ಫೈಲ್ ವರ್ಗೀಕರಿಸಿ allowed ಅಲ್ಲದ ಮೊದಲನೆಯದರಲ್ಲಿ ತಡೆಯುತ್ತದೆ. sha ಫೈಲ್ hash ಮಾಡುತ್ತದೆ, ಆದ್ದರಿಂದ ಒಪ್ಪಂದವನ್ನು ಅದರ ಆರಂಭ ಸ್ಥಿತಿಯೊಂದಿಗೆ ಹೋಲಿಸಬಹುದು.",
    "code": "def touched(repo, base, renames=True):\n    flag = [] if renames else [\"--no-renames\"]\n    names = set(git(repo, \"diff\", \"--name-only\", *flag, base).splitlines())\n    names |= set(git(repo, \"ls-files\", \"--others\", \"--exclude-standard\").splitlines())\n    return sorted(names)\n\n\ndef classify(path, c):\n    if any(matches(path, p) for p in c[\"forbidden_files\"]):\n        return \"forbidden\"\n    return \"allowed\" if any(matches(path, p) for p in c[\"allowed_files\"]) else \"off_scope\"\n\n\ndef verdict(files, c):\n    bad = [f for f in files if classify(f, c) != \"allowed\"]\n    return (\"BLOCK\" if bad else \"ALLOW\"), bad\n\n\ndef sha(p):\n    return hashlib.sha256(Path(p).read_bytes()).hexdigest()"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "sc_3.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() builds a repository with a baseline commit and a contract file, compares the agent list with git, moves a file out of an allowed directory, widens the contract from inside the task, rolls back selectively and with a hard reset, and writes the report.",
    "descKn": "main() baseline commit ಮತ್ತು ಒಪ್ಪಂದ ಫೈಲ್ ಇರುವ repository ನಿರ್ಮಿಸಿ, agent ಪಟ್ಟಿಯನ್ನು git ಗೆ ಹೋಲಿಸಿ, ಅನುಮತಿಸಿದ ಡೈರೆಕ್ಟರಿಯಿಂದ ಫೈಲ್ ಸರಿಸಿ, ಕಾರ್ಯದೊಳಗಿಂದ ಒಪ್ಪಂದ ವಿಸ್ತರಿಸಿ, ಆಯ್ದ ಮತ್ತು hard reset ಮೂಲಕ rollback ಮಾಡಿ ವರದಿ ಬರೆಯುತ್ತದೆ.",
    "code": "def main():\n    with tempfile.TemporaryDirectory() as d:\n        repo = Path(d) / \"repo\"\n        repo.mkdir()\n        git(repo, \"init\", \"-q\")\n        for rel, txt in ((\"src/auth/login.py\", \"v1\\n\"), (\"release/deploy.sh\", \"echo deploy\\n\"), (\"docs/guide.md\", \"guide\\n\"), (\"src/auth/old.py\", \"legacy\\n\" * 5)):\n            (repo / rel).parent.mkdir(parents=True, exist_ok=True)\n            (repo / rel).write_text(txt, encoding=\"utf-8\")\n        contract_path = repo / \"scope_contract.json\"\n        contract = {\"allowed_files\": [\"src/auth/**\", \"tests/test_login*.py\"], \"forbidden_files\": [\"release/**\"]}\n        contract_path.write_text(json.dumps(contract), encoding=\"utf-8\")\n        git(repo, \"add\", \"-A\")\n        git(repo, \"commit\", \"-q\", \"-m\", \"baseline\")\n        base = git(repo, \"rev-parse\", \"HEAD\").strip()\n        c0 = json.loads(contract_path.read_text(encoding=\"utf-8\"))\n        h0 = sha(contract_path)\n\n        section(\"1. Genuinely running: touched files come from git, not from the agent's list\")\n        (repo / \"src/auth/login.py\").write_text(\"v2\\n\", encoding=\"utf-8\")\n        (repo / \"tests\").mkdir()\n        (repo / \"tests/test_login.py\").write_text(\"t\\n\", encoding=\"utf-8\")\n        (repo / \"release/deploy.sh\").write_text(\"echo deploy --prod\\n\", encoding=\"utf-8\")\n        agent_list = [\"src/auth/login.py\", \"tests/test_login.py\"]\n        real = touched(repo, base)\n        print(\"agent said it touched:\", agent_list)\n        print(\"git says it touched  :\", real)\n        print(\"verdict from the agent list:\", verdict(agent_list, c0)[0], \"| verdict from git:\", verdict(real, c0))\n        print(\"the agent list omitted the deploy script it edited and git's diff did not; the new test file was found because the check also asks for files git does not track yet, which git diff alone would miss\")\n\n        section(\"2. Genuinely measuring: a rename out of an allowed directory\")\n        git(repo, \"checkout\", \"-q\", \"--\", \"release/deploy.sh\")\n        git(repo, \"mv\", \"src/auth/old.py\", \"release/old.py\")\n        print(\"with rename detection   :\", touched(repo, base))\n        print(\"without rename detection:\", touched(repo, base, renames=False))\n        print(\"with rename detection src/auth/old.py is missing from the list and only release/old.py appears; with --no-renames both ends of the move are listed, so the checker should use that form because the removal from the allowed directory is part of the change\")\n        git(repo, \"reset\", \"-q\", \"--hard\", base)\n\n        section(\"3. Genuinely running: the agent edits the contract itself\")\n        (repo / \"src/auth/login.py\").write_text(\"v2\\n\", encoding=\"utf-8\")\n        (repo / \"release/deploy.sh\").write_text(\"echo deploy --prod\\n\", encoding=\"utf-8\")\n        widened = json.loads(contract_path.read_text(encoding=\"utf-8\"))\n        widened[\"allowed_files\"] += [\"release/**\", \"scope_contract.json\"]\n        widened[\"forbidden_files\"] = []\n        contract_path.write_text(json.dumps(widened), encoding=\"utf-8\")\n        files = touched(repo, base)\n        print(\"changed files include the contract:\", \"scope_contract.json\" in files)\n        print(\"verdict against the widened contract on disk:\", verdict(files, json.loads(contract_path.read_text(encoding=\"utf-8\")))[0])\n        print(\"verdict against the contract loaded at task start:\", verdict(files, c0))\n        print(\"contract hash still equals the start hash:\", sha(contract_path) == h0)\n        print(\"the widened contract that also allowed its own file gave ALLOW for a forbidden deploy-script edit, while the start contract blocked it and showed the contract edit as a violation; a contract read from the working tree lets the agent widen its own permissions; the contract has to be loaded from the baseline commit or from a location the agent cannot write, and a changed contract hash is itself a finding\")\n        git(repo, \"reset\", \"-q\", \"--hard\", base)\n        git(repo, \"clean\", \"-qfd\")\n\n        section(\"4. Genuinely running: rollback keeps the work that existed before the task\")\n        (repo / \"docs/guide.md\").write_text(\"human edit before the task\\n\", encoding=\"utf-8\")\n        before_task = sha(repo / \"docs/guide.md\")\n        (repo / \"src/auth/login.py\").write_text(\"agent edit\\n\", encoding=\"utf-8\")\n        (repo / \"release/deploy.sh\").write_text(\"agent edit\\n\", encoding=\"utf-8\")\n        (repo / \"scratch.txt\").write_text(\"agent file\\n\", encoding=\"utf-8\")\n        tracked = git(repo, \"ls-files\").splitlines()\n        for f in (\"src/auth/login.py\", \"release/deploy.sh\", \"scratch.txt\"):\n            if f in tracked:\n                git(repo, \"checkout\", \"-q\", \"--\", f)\n            else:\n                (repo / f).unlink()\n        print(\"status after the targeted rollback:\", git(repo, \"status\", \"--porcelain\").splitlines())\n        print(\"human edit preserved:\", sha(repo / \"docs/guide.md\") == before_task, \"| login.py restored to:\", (repo / \"src/auth/login.py\").read_text(encoding=\"utf-8\").strip())\n        print(\"the targeted rollback restored only the files the task changed\")\n        git(repo, \"reset\", \"-q\", \"--hard\", base)\n        print(\"after git reset --hard instead, docs/guide.md reads:\", repr((repo / \"docs/guide.md\").read_text(encoding=\"utf-8\").strip()), \"| human edit preserved:\", sha(repo / \"docs/guide.md\") == before_task)\n        print(\"the hard reset destroyed the human's uncommitted edit, which is why rollback is scoped to the task's own files; the other hard resets in this lab are fine only because it owns the temporary repository\")\n\n        section(\"5. Genuinely running: the report is a file the next session can read\")\n        (repo / \"release/deploy.sh\").write_text(\"agent edit\\n\", encoding=\"utf-8\")\n        files = touched(repo, base)\n        v, bad = verdict(files, c0)\n        report = {\"base_commit\": base[:10], \"contract_sha256\": h0[:12], \"files\": files, \"verdict\": v, \"violations\": [{\"file\": f, \"class\": classify(f, c0)} for f in bad]}\n        out = Path(d) / \"scope_report.json\"\n        out.write_text(json.dumps(report, indent=2), encoding=\"utf-8\")\n        back = json.loads(out.read_text(encoding=\"utf-8\"))\n        print(json.dumps(back, indent=2))\n        print(\"the report names the baseline commit, the contract hash, every file and each violation with its class, so a later session or a reviewer can see why the task was blocked without rerunning anything; it does not undo the change, and the base commit and hash are shortened for display\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: touched files come from git, not from the agent's list ---\nagent said it touched: ['src/auth/login.py', 'tests/test_login.py']\ngit says it touched  : ['release/deploy.sh', 'src/auth/login.py', 'tests/test_login.py']\nverdict from the agent list: ALLOW | verdict from git: ('BLOCK', ['release/deploy.sh'])\nthe agent list omitted the deploy script it edited and git's diff did not; the new test file was found because the check also asks for files git does not track yet, which git diff alone would miss\n\n--- 2. Genuinely measuring: a rename out of an allowed directory ---\nwith rename detection   : ['release/old.py', 'src/auth/login.py', 'tests/test_login.py']\nwithout rename detection: ['release/old.py', 'src/auth/login.py', 'src/auth/old.py', 'tests/test_login.py']\nwith rename detection src/auth/old.py is missing from the list and only release/old.py appears; with --no-renames both ends of the move are listed, so the checker should use that form because the removal from the allowed directory is part of the change\n\n--- 3. Genuinely running: the agent edits the contract itself ---\nchanged files include the contract: True\nverdict against the widened contract on disk: ALLOW\nverdict against the contract loaded at task start: ('BLOCK', ['release/deploy.sh', 'scope_contract.json'])\ncontract hash still equals the start hash: False\nthe widened contract that also allowed its own file gave ALLOW for a forbidden deploy-script edit, while the start contract blocked it and showed the contract edit as a violation; a contract read from the working tree lets the agent widen its own permissions; the contract has to be loaded from the baseline commit or from a location the agent cannot write, and a changed contract hash is itself a finding\n\n--- 4. Genuinely running: rollback keeps the work that existed before the task ---\nstatus after the targeted rollback: [' M docs/guide.md']\nhuman edit preserved: True | login.py restored to: v1\nthe targeted rollback restored only the files the task changed\nafter git reset --hard instead, docs/guide.md reads: 'guide' | human edit preserved: False\nthe hard reset destroyed the human's uncommitted edit, which is why rollback is scoped to the task's own files; the other hard resets in this lab are fine only because it owns the temporary repository\n\n--- 5. Genuinely running: the report is a file the next session can read ---\n{\n  \"base_commit\": \"8525360666\",\n  \"contract_sha256\": \"493f66089140\",\n  \"files\": [\n    \"release/deploy.sh\"\n  ],\n  \"verdict\": \"BLOCK\",\n  \"violations\": [\n    {\n      \"file\": \"release/deploy.sh\",\n      \"class\": \"forbidden\"\n    }\n  ]\n}\nthe report names the baseline commit, the contract hash, every file and each violation with its class, so a later session or a reviewer can see why the task was blocked without rerunning anything; it does not undo the change, and the base commit and hash are shortened for display"
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
    "headingEn": "Experiment 1: Touched files come from git, not from the agent's list",
    "headingKn": "ಪ್ರಯೋಗ 1: Touched files come from git, not from the agent's list",
    "bodyEn": "What it ran: Touched files come from git, not from the agent's list. What the lab concluded: the agent list omitted the deploy script it edited and git's diff did not; the new test file was found because the check also asks for files git does not track yet, which git diff alone would miss",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Touched files come from git, not from the agent's list. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the agent list omitted the deploy script it edited and git's diff did not; the new test file was found because the check also asks for files git does not track yet, which git diff alone would miss"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: touched files come from git, not from the agent's list ---\nagent said it touched: ['src/auth/login.py', 'tests/test_login.py']\ngit says it touched  : ['release/deploy.sh', 'src/auth/login.py', 'tests/test_login.py']\nverdict from the agent list: ALLOW | verdict from git: ('BLOCK', ['release/deploy.sh'])"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: A rename out of an allowed directory",
    "headingKn": "ಪ್ರಯೋಗ 2: A rename out of an allowed directory",
    "bodyEn": "What it ran: A rename out of an allowed directory. What the lab concluded: with rename detection src/auth/old.py is missing from the list and only release/old.py appears; with --no-renames both ends of the move are listed, so the checker should use that form because the removal from the allowed directory is part of the change",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A rename out of an allowed directory. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): with rename detection src/auth/old.py is missing from the list and only release/old.py appears; with --no-renames both ends of the move are listed, so the checker should use that form because the removal from the allowed directory is part of the change"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely measuring: a rename out of an allowed directory ---\nwith rename detection   : ['release/old.py', 'src/auth/login.py', 'tests/test_login.py']\nwithout rename detection: ['release/old.py', 'src/auth/login.py', 'src/auth/old.py', 'tests/test_login.py']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: The agent edits the contract itself",
    "headingKn": "ಪ್ರಯೋಗ 3: The agent edits the contract itself",
    "bodyEn": "What it ran: The agent edits the contract itself. What the lab concluded: the widened contract that also allowed its own file gave ALLOW for a forbidden deploy-script edit, while the start contract blocked it and showed the contract edit as a violation; a contract read from the working tree lets the agent widen its own permissions; the contract has to be loaded from the baseline commit or from a location the agent cannot write, and a changed contract hash is itself a finding",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The agent edits the contract itself. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the widened contract that also allowed its own file gave ALLOW for a forbidden deploy-script edit, while the start contract blocked it and showed the contract edit as a violation; a contract read from the working tree lets the agent widen its own permissions; the contract has to be loaded from the baseline commit or from a location the agent cannot write, and a changed contract hash is itself a finding"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: the agent edits the contract itself ---\nchanged files include the contract: True\nverdict against the widened contract on disk: ALLOW\nverdict against the contract loaded at task start: ('BLOCK', ['release/deploy.sh', 'scope_contract.json'])\ncontract hash still equals the start hash: False"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Rollback keeps the work that existed before the task",
    "headingKn": "ಪ್ರಯೋಗ 4: Rollback keeps the work that existed before the task",
    "bodyEn": "What it ran: Rollback keeps the work that existed before the task. What the lab concluded: the hard reset destroyed the human's uncommitted edit, which is why rollback is scoped to the task's own files; the other hard resets in this lab are fine only because it owns the temporary repository",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Rollback keeps the work that existed before the task. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the hard reset destroyed the human's uncommitted edit, which is why rollback is scoped to the task's own files; the other hard resets in this lab are fine only because it owns the temporary repository"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: rollback keeps the work that existed before the task ---\nstatus after the targeted rollback: [' M docs/guide.md']\nhuman edit preserved: True | login.py restored to: v1\nthe targeted rollback restored only the files the task changed\nafter git reset --hard instead, docs/guide.md reads: 'guide' | human edit preserved: False"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: The report is a file the next session can read",
    "headingKn": "ಪ್ರಯೋಗ 5: The report is a file the next session can read",
    "bodyEn": "What it ran: The report is a file the next session can read. What the lab concluded: the report names the baseline commit, the contract hash, every file and each violation with its class, so a later session or a reviewer can see why the task was blocked without rerunning anything; it does not undo the change, and the base commit and hash are shortened for display",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The report is a file the next session can read. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the report names the baseline commit, the contract hash, every file and each violation with its class, so a later session or a reviewer can see why the task was blocked without rerunning anything; it does not undo the change, and the base commit and hash are shortened for display"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: the report is a file the next session can read ---\n{\n  \"base_commit\": \"8525360666\",\n  \"contract_sha256\": \"493f66089140\",\n  \"files\": [\n    \"release/deploy.sh\"\n  ],\n  \"verdict\": \"BLOCK\",\n  \"violations\": [\n    {\n      \"file\": \"release/deploy.sh\",\n      \"class\": \"forbidden\"\n    }\n  ]\n}"
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
    "headingEn": "Genuinely Found: The Agent List Omitted a Forbidden Edit and a Move Hid Half Its Change",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: agent ಪಟ್ಟಿ ನಿಷೇಧಿತ ಸಂಪಾದನೆ ಬಿಟ್ಟಿತು ಮತ್ತು ಒಂದು ಸರಿಸುವಿಕೆ ಅರ್ಧ ಬದಲಾವಣೆ ಮರೆಮಾಡಿತು",
    "bodyEn": "Section 1: the agent said it touched two files and got ALLOW; git listed three, including release/deploy.sh, and gave BLOCK; the new test file appeared only because untracked files are asked for separately. Section 2: with rename detection moving src/auth/old.py to release/old.py listed only release/old.py; with --no-renames both ends of the move were listed.",
    "bodyKn": "ವಿಭಾಗ 1: agent ತಾನು ಎರಡು ಫೈಲ್ ಮುಟ್ಟಿದೆ ಎಂದು ಹೇಳಿ ALLOW ಪಡೆಯಿತು; git release/deploy.sh ಸೇರಿ ಮೂರು ಪಟ್ಟಿ ಮಾಡಿ BLOCK ನೀಡಿತು; ಹೊಸ ಪರೀಕ್ಷಾ ಫೈಲ್ ಟ್ರ್ಯಾಕ್ ಮಾಡದ ಫೈಲ್‌ಗಳನ್ನು ಬೇರೆಯಾಗಿ ಕೇಳುವುದರಿಂದ ಮಾತ್ರ ಕಾಣಿಸಿತು. ವಿಭಾಗ 2: rename ಪತ್ತೆಯೊಂದಿಗೆ src/auth/old.py ಅನ್ನು release/old.py ಗೆ ಸರಿಸುವುದು release/old.py ಮಾತ್ರ ಪಟ್ಟಿ ಮಾಡಿತು; --no-renames ನೊಂದಿಗೆ ಸರಿಸುವಿಕೆಯ ಎರಡೂ ತುದಿ ಪಟ್ಟಿಯಾದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Contract the Agent Can Edit Is Not a Contract",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಏಜೆಂಟ್ ಸಂಪಾದಿಸಬಹುದಾದ ಒಪ್ಪಂದ ಒಪ್ಪಂದವಲ್ಲ",
    "bodyEn": "Section 3: with a contract widened to allow release/** and its own file, the same forbidden edit got ALLOW; against the contract loaded at task start it got BLOCK with release/deploy.sh and scope_contract.json as violations, and the contract hash no longer matched the start hash. Section 4: a targeted rollback restored login.py to v1, removed the agent files and left the human edit to docs/guide.md in place; a git reset --hard instead turned docs/guide.md back to \"guide\". Section 5: the report recorded a ten-character base commit, a twelve-character contract hash, the files and the violation classes.",
    "bodyKn": "ವಿಭಾಗ 3: release/** ಮತ್ತು ತನ್ನದೇ ಫೈಲ್ ಅನುಮತಿಸಲು ವಿಸ್ತರಿಸಿದ ಒಪ್ಪಂದದೊಂದಿಗೆ ಅದೇ ನಿಷೇಧಿತ ಸಂಪಾದನೆ ALLOW ಪಡೆಯಿತು; ಕಾರ್ಯ ಆರಂಭದಲ್ಲಿ ಲೋಡ್ ಮಾಡಿದ ಒಪ್ಪಂದದ ವಿರುದ್ಧ release/deploy.sh ಮತ್ತು scope_contract.json ಉಲ್ಲಂಘನೆಗಳೊಂದಿಗೆ BLOCK ಪಡೆಯಿತು, ಮತ್ತು ಒಪ್ಪಂದ hash ಆರಂಭ hash ಗೆ ಹೊಂದಲಿಲ್ಲ. ವಿಭಾಗ 4: ಗುರಿಯಿಟ್ಟ rollback login.py ಅನ್ನು v1 ಗೆ ಮರುಸ್ಥಾಪಿಸಿ, agent ಫೈಲ್‌ಗಳನ್ನು ತೆಗೆದು, docs/guide.md ಗೆ ಮಾನವನ ಸಂಪಾದನೆ ಉಳಿಸಿತು; ಬದಲಿಗೆ git reset --hard docs/guide.md ಅನ್ನು \"guide\" ಗೆ ಹಿಂತಿರುಗಿಸಿತು. ವಿಭಾಗ 5: ವರದಿ ಹತ್ತು-ಅಕ್ಷರ base commit, ಹನ್ನೆರಡು-ಅಕ್ಷರ ಒಪ್ಪಂದ hash, ಫೈಲ್‌ಗಳು ಮತ್ತು ಉಲ್ಲಂಘನೆ ವರ್ಗಗಳನ್ನು ದಾಖಲಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Evidence that comes from the agent can be incomplete and a contract the agent can write can be widened, so both have to come from outside the agent's control.",
    "bodyKn": "agent ಯಿಂದ ಬರುವ ಸಾಕ್ಷ್ಯ ಅಪೂರ್ಣವಾಗಿರಬಹುದು ಮತ್ತು agent ಬರೆಯಬಹುದಾದ ಒಪ್ಪಂದ ವಿಸ್ತರಿಸಬಹುದು, ಆದ್ದರಿಂದ ಎರಡೂ agent ನಿಯಂತ್ರಣದ ಹೊರಗಿನಿಂದ ಬರಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the checker read the contract, so the contract is trusted.\" It read a file the agent had just rewritten.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಪರಿಶೀಲಕ ಒಪ್ಪಂದ ಓದಿದೆ, ಆದ್ದರಿಂದ ಒಪ್ಪಂದ ವಿಶ್ವಾಸಾರ್ಹ.\" ಅದು agent ಈಗಷ್ಟೇ ಪುನಃಬರೆದ ಫೈಲ್ ಓದಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Baseline commit: the recorded starting point. Untracked file: one git does not know yet. Rename detection: git folding a move into one path. Contract hash: a digest to detect edits. Scoped rollback: restoring only the task's files.",
    "bodyKn": "Baseline commit: ದಾಖಲಿಸಿದ ಆರಂಭ ಬಿಂದು. Untracked file: git ಗೆ ಇನ್ನೂ ತಿಳಿಯದ ಫೈಲ್. Rename detection: git ಸರಿಸುವಿಕೆಯನ್ನು ಒಂದು path ಗೆ ಮಡಚುವುದು. Contract hash: ಸಂಪಾದನೆ ಪತ್ತೆಗೆ digest. Scoped rollback: ಕಾರ್ಯದ ಫೈಲ್‌ಗಳನ್ನು ಮಾತ್ರ ಮರುಸ್ಥಾಪಿಸುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The agent list gave ALLOW and git gave BLOCK. 2) A move out of src/auth/ showed only its new path unless renames were turned off. 3) A widened contract on disk allowed the forbidden edit while the start contract blocked it. 4) A scoped rollback kept the human edit and a hard reset destroyed it. 5) The report recorded base commit, contract hash, files and classes.",
    "bodyKn": "1) agent ಪಟ್ಟಿ ALLOW ಮತ್ತು git BLOCK ನೀಡಿತು. 2) src/auth/ ಯಿಂದ ಸರಿಸುವಿಕೆ renames ಆರಿಸದ ಹೊರತು ಹೊಸ path ಮಾತ್ರ ತೋರಿಸಿತು. 3) ಡಿಸ್ಕ್‌ನ ವಿಸ್ತರಿತ ಒಪ್ಪಂದ ನಿಷೇಧಿತ ಸಂಪಾದನೆ ಅನುಮತಿಸಿತು ಆದರೆ ಆರಂಭ ಒಪ್ಪಂದ ತಡೆಯಿತು. 4) ವ್ಯಾಪ್ತಿಗೊಳಿಸಿದ rollback ಮಾನವ ಸಂಪಾದನೆ ಉಳಿಸಿತು ಮತ್ತು hard reset ನಾಶ ಮಾಡಿತು. 5) ವರದಿ base commit, ಒಪ್ಪಂದ hash, ಫೈಲ್‌ಗಳು ಮತ್ತು ವರ್ಗಗಳನ್ನು ದಾಖಲಿಸಿತು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B sc_3.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B sc_3.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B sc_3.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B sc_3.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many files did git list when the agent claimed two?",
      "qKn": "agent ಎರಡು ಎಂದಾಗ git ಎಷ್ಟು ಫೈಲ್ ಪಟ್ಟಿ ಮಾಡಿತು?",
      "opts": [
       "1",
       "2",
       "3",
       "4"
      ],
      "optsKn": [
       "1",
       "2",
       "3",
       "4"
      ],
      "correct": 2
     },
     {
      "q": "Which diff form listed both ends of a moved file?",
      "qKn": "ಸರಿಸಿದ ಫೈಲ್‌ನ ಎರಡೂ ತುದಿಗಳನ್ನು ಯಾವ diff ರೂಪ ಪಟ್ಟಿ ಮಾಡಿತು?",
      "opts": [
       "--no-renames",
       "default rename detection",
       "status only",
       "none"
      ],
      "optsKn": [
       "--no-renames",
       "ಡೀಫಾಲ್ಟ್ rename ಪತ್ತೆ",
       "status ಮಾತ್ರ",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What verdict did the widened contract on disk give for the forbidden deploy-script edit?",
      "qKn": "ನಿಷೇಧಿತ deploy-script ಸಂಪಾದನೆಗೆ ಡಿಸ್ಕ್‌ನ ವಿಸ್ತರಿತ ಒಪ್ಪಂದ ಯಾವ ತೀರ್ಪು ನೀಡಿತು?",
      "opts": [
       "ALLOW",
       "BLOCK",
       "WARN",
       "None"
      ],
      "optsKn": [
       "ALLOW",
       "BLOCK",
       "WARN",
       "None"
      ],
      "correct": 0
     },
     {
      "q": "What happened to the human edit of docs/guide.md after git reset --hard?",
      "qKn": "git reset --hard ನಂತರ docs/guide.md ನ ಮಾನವ ಸಂಪಾದನೆಗೆ ಏನಾಯಿತು?",
      "opts": [
       "It was destroyed",
       "It was kept",
       "It was committed",
       "It was merged"
      ],
      "optsKn": [
       "ನಾಶವಾಯಿತು",
       "ಉಳಿಯಿತು",
       "commit ಆಯಿತು",
       "ವಿಲೀನವಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "Where should the gate load the contract from?",
      "qKn": "gate ಒಪ್ಪಂದವನ್ನು ಎಲ್ಲಿಂದ ಲೋಡ್ ಮಾಡಬೇಕು?",
      "opts": [
       "The baseline commit or a place the agent cannot write",
       "The working tree",
       "The agent summary",
       "A cache"
      ],
      "optsKn": [
       "Baseline commit ಅಥವಾ agent ಬರೆಯಲಾಗದ ಸ್ಥಳ",
       "ಕೆಲಸದ ಮರ",
       "agent ಸಾರಾಂಶ",
       "ಕ್ಯಾಶ್"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
