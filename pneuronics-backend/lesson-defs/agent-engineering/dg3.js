module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af753d133fd11f6fa965dff",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Delegate Agent Work with Isolation and Merge Contracts (Part 3 of 3) — Merging, Conflicts and Approvals",
 "titleKn": "Isolation ಮತ್ತು Merge ಒಪ್ಪಂದಗಳೊಂದಿಗೆ Agent ಕೆಲಸ ಹಂಚಿಕೆ (ಭಾಗ 3 / 3) — ವಿಲೀನ, ಸಂಘರ್ಷಗಳು ಮತ್ತು ಅನುಮೋದನೆಗಳು",
 "desc": "Merge worker branches under contract, stop on conflicts, catch semantic disagreements and require a signed approval at the integration gate.",
 "descKn": "ಒಪ್ಪಂದದಡಿ worker branches ವಿಲೀನಿಸಿ, ಸಂಘರ್ಷಗಳಲ್ಲಿ ನಿಲ್ಲಿಸಿ, ಅರ್ಥಗತ ಭಿನ್ನಾಭಿಪ್ರಾಯ ಹಿಡಿದು ಏಕೀಕರಣ gate ನಲ್ಲಿ ಸಹಿ ಅನುಮೋದನೆ ಬೇಕು ಎನ್ನಿ.",
 "objectives": [
  "Merge in a stated order.",
  "Stop on mechanical conflicts.",
  "Catch semantic conflicts.",
  "Gate on every required check.",
  "Verify approvals cryptographically."
 ],
 "objectivesKn": [
  "ಹೇಳಿದ ಕ್ರಮದಲ್ಲಿ ವಿಲೀನಿಸಿ.",
  "ಯಾಂತ್ರಿಕ ಸಂಘರ್ಷಗಳಲ್ಲಿ ನಿಲ್ಲಿಸಿ.",
  "ಅರ್ಥಗತ ಸಂಘರ್ಷ ಹಿಡಿಯಿರಿ.",
  "ಪ್ರತಿ ಅಗತ್ಯ ಪರಿಶೀಲನೆಯಲ್ಲಿ gate ಮಾಡಿ.",
  "ಅನುಮೋದನೆಗಳನ್ನು ಕ್ರಿಪ್ಟೋಗ್ರಾಫಿಕ್ ಆಗಿ ಪರಿಶೀಲಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Delegate Agent Work with Isolation and Merge Contracts (Part 3 of 3)",
    "textKn": "Isolation ಮತ್ತು Merge ಒಪ್ಪಂದಗಳೊಂದಿಗೆ Agent ಕೆಲಸ ಹಂಚಿಕೆ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: controlled merging on a real git repository, mechanical and semantic conflicts, the integration gate and a signed approval versus a boolean flag. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind delegating agent work with isolation and merge contracts (work units, ownership, worktrees, merging and approvals), not the real software, and the repository, branches and workers are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original main.py was not supplied, so the labs are our own implementation of the behaviour the lesson describes; the lesson text is complete for all three parts. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ನಿಜ git repository ಯಲ್ಲಿ ನಿಯಂತ್ರಿತ ವಿಲೀನ, ಯಾಂತ್ರಿಕ ಮತ್ತು ಅರ್ಥಗತ ಸಂಘರ್ಷಗಳು, ಏಕೀಕರಣ gate ಮತ್ತು ಸಹಿ ಮಾಡಿದ ಅನುಮೋದನೆ ವಿರುದ್ಧ boolean ಧ್ವಜ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು isolation ಮತ್ತು merge ಒಪ್ಪಂದಗಳೊಂದಿಗೆ agent ಕೆಲಸ ಹಂಚಿಕೆ (ಕೆಲಸ ಘಟಕಗಳು, ಮಾಲೀಕತ್ವ, worktrees, ವಿಲೀನ ಮತ್ತು ಅನುಮೋದನೆಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು repository, branches ಮತ್ತು workers ಅನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು lesson ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ; ಮೂರೂ ಭಾಗಗಳ lesson ಪಠ್ಯ ಸಂಪೂರ್ಣವಾಗಿತ್ತು. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Integration Is Where Delegation Pays or Fails",
    "textKn": "ಏಕೀಕರಣ ಹಂಚಿಕೆ ಫಲ ನೀಡುವ ಅಥವಾ ವಿಫಲವಾಗುವ ಸ್ಥಳ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Order, Conflicts, Gate and Authority",
    "headingKn": "ಕ್ರಮ, ಸಂಘರ್ಷಗಳು, Gate ಮತ್ತು ಅಧಿಕಾರ",
    "bodyEn": "Workers hand back candidate results; only a controlled integration makes them an accepted deliverable. This part merges two real branches in a stated order, stops on a mechanical conflict and leaves the tree clean, shows a semantic conflict git merges without complaint, runs the integration gate and compares an approval boolean the agent can set with an HMAC-signed approval bound to an action. The signing key is a constant made up for the lab.",
    "bodyKn": "Workers ಅಭ್ಯರ್ಥಿ ಫಲಿತಾಂಶ ಹಿಂತಿರುಗಿಸುತ್ತಾರೆ; ನಿಯಂತ್ರಿತ ಏಕೀಕರಣ ಮಾತ್ರ ಅವನ್ನು ಸ್ವೀಕೃತ ವಿತರಣೆ ಮಾಡುತ್ತದೆ. ಈ ಭಾಗ ಎರಡು ನಿಜ branches ಅನ್ನು ಹೇಳಿದ ಕ್ರಮದಲ್ಲಿ ವಿಲೀನಿಸಿ, ಯಾಂತ್ರಿಕ ಸಂಘರ್ಷದಲ್ಲಿ ನಿಲ್ಲಿಸಿ ಮರವನ್ನು ಸ್ವಚ್ಛ ಬಿಟ್ಟು, git ದೂರಿಲ್ಲದೆ ವಿಲೀನಿಸುವ ಅರ್ಥಗತ ಸಂಘರ್ಷ ತೋರಿಸಿ, ಏಕೀಕರಣ gate ಓಡಿಸಿ ಮತ್ತು agent ಹೊಂದಿಸಬಹುದಾದ ಅನುಮೋದನೆ boolean ಅನ್ನು ಕ್ರಿಯೆಗೆ ಬಂಧಿತ HMAC-ಸಹಿ ಅನುಮೋದನೆಗೆ ಹೋಲಿಸುತ್ತದೆ. ಸಹಿ ಕೀಲಿ ಲ್ಯಾಬ್‌ಗಾಗಿ ಕಲ್ಪಿಸಿದ ಸ್ಥಿರಾಂಕ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Controlled Merge",
    "headingKn": "ನಿಯಂತ್ರಿತ ವಿಲೀನ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Controlled merge</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">ordered merge</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">stop on conflict</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">cross-unit check</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">semantic conflicts</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">gate</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">all checks + approval</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">signed approval</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">not a boolean</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">clean merge is not correct merge</text></svg>",
    "captionEn": "A clean merge is not a correct merge.",
    "captionKn": "ಸ್ವಚ್ಛ ವಿಲೀನ ಸರಿಯಾದ ವಿಲೀನ ಅಲ್ಲ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Conflict kinds",
    "headingKn": "ಸಂಘರ್ಷ ವಿಧಗಳು",
    "headers": [
     "Kind",
     "Detected by",
     "Example in the lab"
    ],
    "rows": [
     [
      "mechanical",
      "git itself",
      "two branches set MAX_RETRIES to 5 and 7"
     ],
     [
      "semantic",
      "a cross-unit check",
      "code needs username, docs say email only"
     ],
     [
      "scope",
      "diff audit",
      "a worker edited a file it does not own"
     ],
     [
      "authority",
      "a verified approval record",
      "production write without approval"
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
    "filename": "dg_3.py",
    "headingEn": "Ordered merge, the gate and approval verification",
    "headingKn": "ಕ್ರಮದ ವಿಲೀನ, gate ಮತ್ತು ಅನುಮೋದನೆ ಪರಿಶೀಲನೆ",
    "descEn": "merge_in_order refuses a dirty checkout, merges each branch with --no-ff and aborts on the first conflict. gate requires scope, proof, review and integration tests and adds a missing approval as a reason. sign and verify_approval bind an HMAC to the action and approver.",
    "descKn": "merge_in_order ಕೊಳಕು checkout ನಿರಾಕರಿಸಿ ಪ್ರತಿ branch ಅನ್ನು --no-ff ನೊಂದಿಗೆ ವಿಲೀನಿಸಿ ಮೊದಲ ಸಂಘರ್ಷದಲ್ಲಿ abort ಮಾಡುತ್ತದೆ. gate ವ್ಯಾಪ್ತಿ, ಪುರಾವೆ, review ಮತ್ತು ಏಕೀಕರಣ ಪರೀಕ್ಷೆಗಳನ್ನು ಬಯಸಿ ಕಾಣೆಯಾದ ಅನುಮೋದನೆಯನ್ನು ಕಾರಣವಾಗಿ ಸೇರಿಸುತ್ತದೆ. sign ಮತ್ತು verify_approval HMAC ಅನ್ನು ಕ್ರಿಯೆ ಮತ್ತು ಅನುಮೋದಕನಿಗೆ ಬಂಧಿಸುತ್ತವೆ.",
    "code": "def git(repo, *a, check=True):\n    p = subprocess.run(GIT + list(a), cwd=repo, capture_output=True, text=True)\n    if check and p.returncode != 0:\n        raise RuntimeError(p.stderr.strip() or p.stdout.strip())\n    return p\n\n\ndef commit_file(repo, rel, text, msg):\n    (Path(repo) / rel).parent.mkdir(parents=True, exist_ok=True)\n    (Path(repo) / rel).write_text(text, encoding=\"utf-8\")\n    git(repo, \"add\", \"-A\")\n    git(repo, \"commit\", \"-q\", \"-m\", msg)\n\n\ndef merge_in_order(repo, branches):\n    merged = []\n    if git(repo, \"status\", \"--porcelain\").stdout.strip():\n        return merged, \"integration checkout is not clean\"\n    for b in branches:\n        p = git(repo, \"merge\", \"--no-ff\", \"-q\", \"-m\", f\"merge {b}\", b, check=False)\n        if p.returncode != 0:\n            git(repo, \"merge\", \"--abort\", check=False)\n            return merged, f\"conflict while merging {b}; merge aborted\"\n        merged.append(b)\n    return merged, \"all merged\"\n\n\ndef gate(scope_ok, proof_ok, review_ok, tests_ok, approval_required, approved):\n    reasons = [n for n, v in ((\"scope\", scope_ok), (\"proof\", proof_ok), (\"review\", review_ok), (\"integration tests\", tests_ok)) if not v]\n    if approval_required and not approved:\n        reasons.append(\"human approval missing\")\n    return (\"PASS\" if not reasons else \"BLOCK\"), reasons\n\n\n@dataclass\nclass ApprovalFlag:\n    action: str\n    approved: bool = False\n\n\ndef sign(action, approver):\n    return hmac.new(KEY, f\"{action}|{approver}\".encode(), hashlib.sha256).hexdigest()\n\n\ndef verify_approval(record, action):\n    if record.get(\"action\") != action:\n        return False\n    return hmac.compare_digest(sign(record[\"action\"], record[\"approver\"]), record.get(\"sig\", \"\"))"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "dg_3.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() merges two clean branches, compares code and docs for a semantic conflict, merges two conflicting branches, runs the gate four ways and tries a boolean flag against a signed record.",
    "descKn": "main() ಎರಡು ಸ್ವಚ್ಛ branches ವಿಲೀನಿಸಿ, ಅರ್ಥಗತ ಸಂಘರ್ಷಕ್ಕೆ ಕೋಡ್ ಮತ್ತು docs ಹೋಲಿಸಿ, ಎರಡು ಸಂಘರ್ಷಿಸುವ branches ವಿಲೀನಿಸಿ, gate ನಾಲ್ಕು ರೀತಿ ಓಡಿಸಿ ಮತ್ತು boolean ಧ್ವಜವನ್ನು ಸಹಿ ದಾಖಲೆಗೆ ವಿರುದ್ಧ ಪ್ರಯತ್ನಿಸುತ್ತದೆ.",
    "code": "def main():\n    with tempfile.TemporaryDirectory() as d:\n        repo = Path(d) / \"repo\"\n        repo.mkdir()\n        git(repo, \"init\", \"-q\", \"-b\", \"main\")\n        commit_file(repo, \"app/accounts.py\", \"def create_account(email):\" + chr(10) + \"    return {'email': email}\" + chr(10), \"base\")\n        commit_file(repo, \"docs/accounts.md\", \"POST /accounts takes email\" + chr(10), \"base docs\")\n        commit_file(repo, \"app/config.py\", \"MAX_RETRIES = 3\" + chr(10), \"base config\")\n\n        section(\"1. Genuinely running: merging two worker branches in the contract order\")\n        git(repo, \"checkout\", \"-q\", \"-b\", \"worker/api\", \"main\")\n        commit_file(repo, \"app/accounts.py\", \"def create_account(email, username):\" + chr(10) + \"    return {'email': email, 'username': username}\" + chr(10), \"api adds username\")\n        git(repo, \"checkout\", \"-q\", \"main\")\n        git(repo, \"checkout\", \"-q\", \"-b\", \"worker/docs\", \"main\")\n        commit_file(repo, \"docs/accounts.md\", \"POST /accounts takes email\" + chr(10) + \"Returns the new account\" + chr(10), \"docs add return value\")\n        git(repo, \"checkout\", \"-q\", \"main\")\n        print(\"merge result:\", merge_in_order(repo, [\"worker/api\", \"worker/docs\"]))\n        print(\"log:\", git(repo, \"log\", \"--oneline\", \"-5\").stdout.replace(chr(10), \" | \"))\n        print(\"two branches that touched different files merged cleanly in the stated order; a clean merge only says git could combine the text\")\n\n        section(\"2. Genuinely measuring: a semantic conflict that git did not report\")\n        api_src = (repo / \"app/accounts.py\").read_text(encoding=\"utf-8\")\n        doc_src = (repo / \"docs/accounts.md\").read_text(encoding=\"utf-8\")\n        print(\"code requires username:\", \"username\" in api_src, \"| docs mention username:\", \"username\" in doc_src)\n        print(\"cross-unit check passed:\", (\"username\" in api_src) == (\"username\" in doc_src))\n        print(\"the api branch added a required username parameter and the docs branch still says the endpoint takes only email; git merged both without complaint and only a check that compares the two surfaces found the disagreement\")\n\n        section(\"3. Genuinely running: a mechanical conflict stops the merge and leaves a clean tree\")\n        git(repo, \"checkout\", \"-q\", \"-b\", \"worker/a\", \"main\")\n        commit_file(repo, \"app/config.py\", \"MAX_RETRIES = 5\" + chr(10), \"a sets 5\")\n        git(repo, \"checkout\", \"-q\", \"main\")\n        git(repo, \"checkout\", \"-q\", \"-b\", \"worker/b\", \"main\")\n        commit_file(repo, \"app/config.py\", \"MAX_RETRIES = 7\" + chr(10), \"b sets 7\")\n        git(repo, \"checkout\", \"-q\", \"main\")\n        print(\"merge result:\", merge_in_order(repo, [\"worker/a\", \"worker/b\"]))\n        print(\"working tree status after the abort:\", repr(git(repo, \"status\", \"--porcelain\").stdout.strip()), \"| config now:\", (repo / \"app/config.py\").read_text(encoding=\"utf-8\").strip())\n        print(\"worker a merged, worker b conflicted on the same line and the merge was aborted instead of resolved by guessing; a conflict is a decision point, and the tree is back to a clean state for whoever decides\")\n\n        section(\"4. Genuinely running: the integration gate\")\n        print(\"everything passes, approval not needed :\", gate(True, True, True, True, False, False))\n        print(\"everything passes, approval required   :\", gate(True, True, True, True, True, False))\n        print(\"tests pass but scope failed             :\", gate(False, True, True, True, False, False))\n        print(\"proof and review failed                 :\", gate(True, False, False, True, False, False))\n        print(\"a pass needs every check, and automated success does not supply a missing approval, so the second line blocked with only the approval missing\")\n\n        section(\"5. Genuinely running: an approval flag the agent can set, and a signed record it cannot forge\")\n        flag = ApprovalFlag(\"production_write\")\n        print(\"flag before:\", flag.approved)\n        flag.approved = True\n        print(\"flag after the agent assigns it:\", flag.approved)\n        record = {\"action\": \"production_write\", \"approver\": \"owner-1\", \"sig\": sign(\"production_write\", \"owner-1\")}\n        forged = dict(record, approver=\"agent\")\n        print(\"signed record valid for production_write:\", verify_approval(record, \"production_write\"))\n        print(\"same record presented for another action:\", verify_approval(record, \"delete_data\"))\n        print(\"approver field edited to 'agent'        :\", verify_approval(forged, \"production_write\"))\n        print(\"a plain boolean was set by the code that wanted the permission, while the signed record failed when the action or the approver was changed; the key here is a constant in the lab, and a real key must be held by a service the agent cannot read\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: merging two worker branches in the contract order ---\nmerge result: (['worker/api', 'worker/docs'], 'all merged')\nlog: ffdb5ee merge worker/docs | 4bed6d3 merge worker/api | 2fb946e docs add return value | 7fa79f0 api adds username | ca03c82 base config | \ntwo branches that touched different files merged cleanly in the stated order; a clean merge only says git could combine the text\n\n--- 2. Genuinely measuring: a semantic conflict that git did not report ---\ncode requires username: True | docs mention username: False\ncross-unit check passed: False\nthe api branch added a required username parameter and the docs branch still says the endpoint takes only email; git merged both without complaint and only a check that compares the two surfaces found the disagreement\n\n--- 3. Genuinely running: a mechanical conflict stops the merge and leaves a clean tree ---\nmerge result: (['worker/a'], 'conflict while merging worker/b; merge aborted')\nworking tree status after the abort: '' | config now: MAX_RETRIES = 5\nworker a merged, worker b conflicted on the same line and the merge was aborted instead of resolved by guessing; a conflict is a decision point, and the tree is back to a clean state for whoever decides\n\n--- 4. Genuinely running: the integration gate ---\neverything passes, approval not needed : ('PASS', [])\neverything passes, approval required   : ('BLOCK', ['human approval missing'])\ntests pass but scope failed             : ('BLOCK', ['scope'])\nproof and review failed                 : ('BLOCK', ['proof', 'review'])\na pass needs every check, and automated success does not supply a missing approval, so the second line blocked with only the approval missing\n\n--- 5. Genuinely running: an approval flag the agent can set, and a signed record it cannot forge ---\nflag before: False\nflag after the agent assigns it: True\nsigned record valid for production_write: True\nsame record presented for another action: False\napprover field edited to 'agent'        : False\na plain boolean was set by the code that wanted the permission, while the signed record failed when the action or the approver was changed; the key here is a constant in the lab, and a real key must be held by a service the agent cannot read"
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
    "headingEn": "Genuinely Found: Git Merged It Cleanly and the Surfaces Disagreed",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Git ಸ್ವಚ್ಛವಾಗಿ ವಿಲೀನಿಸಿತು ಮತ್ತು ಮೇಲ್ಮೈಗಳು ಒಪ್ಪಲಿಲ್ಲ",
    "bodyEn": "Section 1: worker/api and worker/docs merged in that order with \"all merged\". Section 2: the merged code required a username while the docs did not mention it, and the cross-unit check returned False although git had reported nothing. Section 3: worker/a merged and worker/b conflicted on the same MAX_RETRIES line, the merge was aborted, the status was empty and the config still said 5.",
    "bodyKn": "ವಿಭಾಗ 1: worker/api ಮತ್ತು worker/docs ಆ ಕ್ರಮದಲ್ಲಿ \"all merged\" ನೊಂದಿಗೆ ವಿಲೀನವಾದವು. ವಿಭಾಗ 2: ವಿಲೀನಿತ ಕೋಡ್ username ಬಯಸಿತು ಆದರೆ docs ಅದನ್ನು ಉಲ್ಲೇಖಿಸಲಿಲ್ಲ, ಮತ್ತು git ಏನೂ ವರದಿ ಮಾಡದಿದ್ದರೂ cross-unit ಪರಿಶೀಲನೆ False ಮರಳಿಸಿತು. ವಿಭಾಗ 3: worker/a ವಿಲೀನವಾಯಿತು ಮತ್ತು worker/b ಅದೇ MAX_RETRIES ಸಾಲಿನಲ್ಲಿ ಸಂಘರ್ಷಿಸಿತು, ವಿಲೀನ abort ಆಯಿತು, status ಖಾಲಿಯಾಗಿತ್ತು ಮತ್ತು config ಇನ್ನೂ 5 ಎಂದಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Gate Needs the Approval and the Approval Needs a Signature",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Gate ಗೆ ಅನುಮೋದನೆ ಬೇಕು ಮತ್ತು ಅನುಮೋದನೆಗೆ ಸಹಿ ಬೇಕು",
    "bodyEn": "Section 4: all checks passing with no approval needed gave PASS; the same with approval required and missing gave BLOCK with \"human approval missing\"; failed scope gave BLOCK [\"scope\"]; failed proof and review gave BLOCK [\"proof\", \"review\"]. Section 5: assigning approved = True on a flag object worked, and the signed record failed when presented for a different action and when its approver was edited to \"agent\".",
    "bodyKn": "ವಿಭಾಗ 4: ಅನುಮೋದನೆ ಬೇಕಿಲ್ಲದೆ ಎಲ್ಲಾ ಪರಿಶೀಲನೆ ಪಾಸ್ ಆದದ್ದು PASS ನೀಡಿತು; ಅನುಮೋದನೆ ಬೇಕಿದ್ದು ಕಾಣೆಯಾದಾಗ ಅದೇ \"human approval missing\" ನೊಂದಿಗೆ BLOCK ನೀಡಿತು; ವಿಫಲ ವ್ಯಾಪ್ತಿ BLOCK [\"scope\"] ನೀಡಿತು; ವಿಫಲ ಪುರಾವೆ ಮತ್ತು review BLOCK [\"proof\", \"review\"] ನೀಡಿದವು. ವಿಭಾಗ 5: ಧ್ವಜ ವಸ್ತುವಿನಲ್ಲಿ approved = True ನಿಯೋಜಿಸುವುದು ಕೆಲಸ ಮಾಡಿತು, ಮತ್ತು ಸಹಿ ದಾಖಲೆ ಬೇರೆ ಕ್ರಿಯೆಗೆ ಮಂಡಿಸಿದಾಗ ಮತ್ತು ಅದರ ಅನುಮೋದಕ \"agent\" ಗೆ ಸಂಪಾದಿಸಿದಾಗ ವಿಫಲವಾಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Merging is where independent work becomes one system, so the order, the conflict policy, the cross-unit checks and the authority record all have to hold outside the workers' control.",
    "bodyKn": "ವಿಲೀನವೇ ಸ್ವತಂತ್ರ ಕೆಲಸ ಒಂದು ವ್ಯವಸ್ಥೆಯಾಗುವ ಸ್ಥಳ, ಆದ್ದರಿಂದ ಕ್ರಮ, ಸಂಘರ್ಷ ನೀತಿ, cross-unit ಪರಿಶೀಲನೆಗಳು ಮತ್ತು ಅಧಿಕಾರ ದಾಖಲೆ workers ನಿಯಂತ್ರಣದ ಹೊರಗೂ ಹಿಡಿಯಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"git merged without conflict, so the work fits together.\" The code and the docs disagreed about username.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"git ಸಂಘರ್ಷವಿಲ್ಲದೆ ವಿಲೀನಿಸಿತು, ಆದ್ದರಿಂದ ಕೆಲಸ ಹೊಂದುತ್ತದೆ.\" ಕೋಡ್ ಮತ್ತು docs username ಬಗ್ಗೆ ಒಪ್ಪಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Mechanical conflict: both sides changed the same lines. Semantic conflict: separate files disagree. Integration gate: scope, proof, review, tests and approval together. Signed approval: a record bound to an action and approver by a key the agent cannot read. Abort: returning to the pre-merge state.",
    "bodyKn": "Mechanical conflict: ಎರಡೂ ಬದಿ ಅದೇ ಸಾಲುಗಳನ್ನು ಬದಲಿಸಿದವು. Semantic conflict: ಪ್ರತ್ಯೇಕ ಫೈಲ್‌ಗಳು ಒಪ್ಪುವುದಿಲ್ಲ. Integration gate: ವ್ಯಾಪ್ತಿ, ಪುರಾವೆ, review, ಪರೀಕ್ಷೆಗಳು ಮತ್ತು ಅನುಮೋದನೆ ಒಟ್ಟಿಗೆ. Signed approval: agent ಓದಲಾಗದ ಕೀಲಿಯಿಂದ ಕ್ರಿಯೆ ಮತ್ತು ಅನುಮೋದಕನಿಗೆ ಬಂಧಿತ ದಾಖಲೆ. Abort: ವಿಲೀನ-ಪೂರ್ವ ಸ್ಥಿತಿಗೆ ಹಿಂತಿರುಗುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Two clean branches merged in the stated order. 2) A semantic disagreement passed git and failed a cross-unit check. 3) A mechanical conflict aborted the merge and left a clean tree. 4) The gate blocked a missing approval. 5) A boolean flag was self-set and a signed record resisted edits.",
    "bodyKn": "1) ಎರಡು ಸ್ವಚ್ಛ branches ಹೇಳಿದ ಕ್ರಮದಲ್ಲಿ ವಿಲೀನವಾದವು. 2) ಅರ್ಥಗತ ಭಿನ್ನಾಭಿಪ್ರಾಯ git ಪಾಸ್ ಮಾಡಿ cross-unit ಪರಿಶೀಲನೆ ವಿಫಲವಾಯಿತು. 3) ಯಾಂತ್ರಿಕ ಸಂಘರ್ಷ ವಿಲೀನ abort ಮಾಡಿ ಸ್ವಚ್ಛ ಮರ ಬಿಟ್ಟಿತು. 4) gate ಕಾಣೆಯಾದ ಅನುಮೋದನೆ ತಡೆಯಿತು. 5) boolean ಧ್ವಜ ಸ್ವಯಂ-ಹೊಂದಿಸಲ್ಪಟ್ಟಿತು ಮತ್ತು ಸಹಿ ದಾಖಲೆ ಸಂಪಾದನೆ ವಿರೋಧಿಸಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did the cross-unit check return for the merged code and docs?",
      "qKn": "ವಿಲೀನಿತ ಕೋಡ್ ಮತ್ತು docs ಗೆ cross-unit ಪರಿಶೀಲನೆ ಏನು ಮರಳಿಸಿತು?",
      "opts": [
       "False",
       "True",
       "An exception",
       "Nothing"
      ],
      "optsKn": [
       "False",
       "True",
       "ಅಪವಾದ",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What did the config say after the aborted conflicting merge?",
      "qKn": "abort ಆದ ಸಂಘರ್ಷಿಸುವ ವಿಲೀನದ ನಂತರ config ಏನು ಹೇಳಿತು?",
      "opts": [
       "MAX_RETRIES = 5",
       "MAX_RETRIES = 7",
       "MAX_RETRIES = 3",
       "A conflict marker"
      ],
      "optsKn": [
       "MAX_RETRIES = 5",
       "MAX_RETRIES = 7",
       "MAX_RETRIES = 3",
       "ಸಂಘರ್ಷ ಗುರುತು"
      ],
      "correct": 0
     },
     {
      "q": "Why did the gate block with all checks passing and approval required?",
      "qKn": "ಎಲ್ಲಾ ಪರಿಶೀಲನೆ ಪಾಸ್ ಆಗಿ ಅನುಮೋದನೆ ಬೇಕಿದ್ದಾಗ gate ಏಕೆ ತಡೆಯಿತು?",
      "opts": [
       "Human approval was missing",
       "Scope failed",
       "Proof failed",
       "It was random"
      ],
      "optsKn": [
       "ಮಾನವ ಅನುಮೋದನೆ ಕಾಣೆಯಾಗಿತ್ತು",
       "ವ್ಯಾಪ್ತಿ ವಿಫಲವಾಯಿತು",
       "ಪುರಾವೆ ವಿಫಲವಾಯಿತು",
       "ಅದು ಯಾದೃಚ್ಛಿಕ"
      ],
      "correct": 0
     },
     {
      "q": "What happened when the signed record was edited to approver \"agent\"?",
      "qKn": "ಸಹಿ ದಾಖಲೆಯನ್ನು ಅನುಮೋದಕ \"agent\" ಗೆ ಸಂಪಾದಿಸಿದಾಗ ಏನಾಯಿತು?",
      "opts": [
       "Verification failed",
       "It passed",
       "It was deleted",
       "It was merged"
      ],
      "optsKn": [
       "ಪರಿಶೀಲನೆ ವಿಫಲವಾಯಿತು",
       "ಪಾಸ್ ಆಯಿತು",
       "ಅಳಿಸಲಾಯಿತು",
       "ವಿಲೀನವಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What did merge_in_order do on the first conflict?",
      "qKn": "ಮೊದಲ ಸಂಘರ್ಷದಲ್ಲಿ merge_in_order ಏನು ಮಾಡಿತು?",
      "opts": [
       "Aborted and reported it",
       "Resolved it by guessing",
       "Kept merging",
       "Deleted the branch"
      ],
      "optsKn": [
       "abort ಮಾಡಿ ವರದಿ ಮಾಡಿತು",
       "ಊಹಿಸಿ ಪರಿಹರಿಸಿತು",
       "ವಿಲೀನ ಮುಂದುವರಿಸಿತು",
       "branch ಅಳಿಸಿತು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
