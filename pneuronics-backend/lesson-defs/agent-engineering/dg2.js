module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af753d133fd11f6fa965dff",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Delegate Agent Work with Isolation and Merge Contracts (Part 2 of 3) — Worktrees, Audits and Shared State",
 "titleKn": "Isolation ಮತ್ತು Merge ಒಪ್ಪಂದಗಳೊಂದಿಗೆ Agent ಕೆಲಸ ಹಂಚಿಕೆ (ಭಾಗ 2 / 3) — Worktrees, ಲೆಕ್ಕಪರಿಶೋಧನೆಗಳು ಮತ್ತು ಹಂಚಿಕೆಯ ಸ್ಥಿತಿ",
 "desc": "Isolate workers with git worktrees, audit the full change list and see what separate folders do not protect.",
 "descKn": "git worktrees ಮೂಲಕ workers ಪ್ರತ್ಯೇಕಿಸಿ, ಪೂರ್ಣ ಬದಲಾವಣೆ ಪಟ್ಟಿ ಲೆಕ್ಕಪರಿಶೋಧಿಸಿ ಮತ್ತು ಪ್ರತ್ಯೇಕ ಫೋಲ್ಡರ್‌ಗಳು ಏನನ್ನು ರಕ್ಷಿಸುವುದಿಲ್ಲ ನೋಡಿ.",
 "objectives": [
  "Create worker worktrees.",
  "Audit the full change list.",
  "Handle renames.",
  "Give each worker its own evidence directory.",
  "Avoid shared mutable state."
 ],
 "objectivesKn": [
  "worker worktrees ರಚಿಸಿ.",
  "ಪೂರ್ಣ ಬದಲಾವಣೆ ಪಟ್ಟಿ ಲೆಕ್ಕಪರಿಶೋಧಿಸಿ.",
  "renames ನಿರ್ವಹಿಸಿ.",
  "ಪ್ರತಿ worker ಗೆ ತನ್ನದೇ ಸಾಕ್ಷ್ಯ ಡೈರೆಕ್ಟರಿ ನೀಡಿ.",
  "ಹಂಚಿಕೆಯ ಬದಲಾಯಿಸಬಹುದಾದ ಸ್ಥಿತಿ ತಪ್ಪಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Delegate Agent Work with Isolation and Merge Contracts (Part 2 of 3)",
    "textKn": "Isolation ಮತ್ತು Merge ಒಪ್ಪಂದಗಳೊಂದಿಗೆ Agent ಕೆಲಸ ಹಂಚಿಕೆ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: isolation on a real git repository with two worktrees, what committed-only change lists miss, an ownership audit, renames, and the difference between source isolation and state isolation. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind delegating agent work with isolation and merge contracts (work units, ownership, worktrees, merging and approvals), not the real software, and the repository, branches and workers are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original main.py was not supplied, so the labs are our own implementation of the behaviour the lesson describes; the lesson text is complete for all three parts. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ನಿಜ git repository ಯಲ್ಲಿ ಎರಡು worktrees ಜೊತೆ isolation, commit ಮಾಡಿದ-ಮಾತ್ರ ಬದಲಾವಣೆ ಪಟ್ಟಿಗಳು ಏನು ತಪ್ಪಿಸುತ್ತವೆ, ಮಾಲೀಕತ್ವ ಲೆಕ್ಕಪರಿಶೋಧನೆ, renames ಮತ್ತು ಮೂಲ isolation ಮತ್ತು ಸ್ಥಿತಿ isolation ನಡುವಿನ ವ್ಯತ್ಯಾಸ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು isolation ಮತ್ತು merge ಒಪ್ಪಂದಗಳೊಂದಿಗೆ agent ಕೆಲಸ ಹಂಚಿಕೆ (ಕೆಲಸ ಘಟಕಗಳು, ಮಾಲೀಕತ್ವ, worktrees, ವಿಲೀನ ಮತ್ತು ಅನುಮೋದನೆಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು repository, branches ಮತ್ತು workers ಅನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು lesson ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ; ಮೂರೂ ಭಾಗಗಳ lesson ಪಠ್ಯ ಸಂಪೂರ್ಣವಾಗಿತ್ತು. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Separate Folders Are Only the First Layer",
    "textKn": "ಪ್ರತ್ಯೇಕ ಫೋಲ್ಡರ್‌ಗಳು ಮೊದಲ ಪದರ ಮಾತ್ರ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Files, Ownership and State",
    "headingKn": "ಫೈಲ್‌ಗಳು, ಮಾಲೀಕತ್ವ ಮತ್ತು ಸ್ಥಿತಿ",
    "bodyEn": "Git worktrees give each worker a separate working directory. They do not say which files the worker may change, and they do not separate databases, output paths or caches. This part uses a real temporary repository with two worktrees to show what a committed-only change list misses, how renames change an ownership audit, how a shared results path loses a worker's evidence and how two workers that read a shared state file before either writes lose an update.",
    "bodyKn": "Git worktrees ಪ್ರತಿ worker ಗೆ ಪ್ರತ್ಯೇಕ ಕೆಲಸದ ಡೈರೆಕ್ಟರಿ ನೀಡುತ್ತವೆ. ಅವು worker ಯಾವ ಫೈಲ್‌ಗಳನ್ನು ಬದಲಿಸಬಹುದು ಎಂದು ಹೇಳುವುದಿಲ್ಲ, ಮತ್ತು ಡೇಟಾಬೇಸ್‌ಗಳು, ಔಟ್‌ಪುಟ್ paths ಅಥವಾ ಕ್ಯಾಶ್‌ಗಳನ್ನು ಬೇರ್ಪಡಿಸುವುದಿಲ್ಲ. ಈ ಭಾಗ ಎರಡು worktrees ಇರುವ ನಿಜ ತಾತ್ಕಾಲಿಕ repository ಬಳಸಿ commit ಮಾಡಿದ-ಮಾತ್ರ ಬದಲಾವಣೆ ಪಟ್ಟಿ ಏನು ತಪ್ಪಿಸುತ್ತದೆ, renames ಮಾಲೀಕತ್ವ ಲೆಕ್ಕಪರಿಶೋಧನೆಯನ್ನು ಹೇಗೆ ಬದಲಿಸುತ್ತವೆ, ಹಂಚಿಕೆಯ ಫಲಿತಾಂಶ path worker ಸಾಕ್ಷ್ಯ ಹೇಗೆ ಕಳೆಯುತ್ತದೆ ಮತ್ತು ಯಾವುದೇ ಬರೆಯುವ ಮುನ್ನ ಹಂಚಿಕೆಯ ಸ್ಥಿತಿ ಫೈಲ್ ಓದುವ ಇಬ್ಬರು workers ಒಂದು ನವೀಕರಣ ಹೇಗೆ ಕಳೆಯುತ್ತಾರೆ ಎಂದು ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Three Layers of Isolation",
    "headingKn": "Isolation ನ ಮೂರು ಪದರಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Three layers of isolation</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">worktree</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">separate checkout</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">ownership</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">audit the full diff</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">state</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">own evidence dirs</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">shared output path</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">last writer wins</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a worktree isolates files, not state</text></svg>",
    "captionEn": "A worktree isolates files, not shared state.",
    "captionKn": "worktree ಫೈಲ್‌ಗಳನ್ನು ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ, ಹಂಚಿಕೆಯ ಸ್ಥಿತಿಯನ್ನಲ್ಲ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Isolation layers",
    "headingKn": "Isolation ಪದರಗಳು",
    "headers": [
     "Layer",
     "Mechanism",
     "Does not stop"
    ],
    "rows": [
     [
      "filesystem",
      "one worktree per worker",
      "a worker editing files it does not own"
     ],
     [
      "ownership",
      "audit the full change list",
      "a shared output path or database"
     ],
     [
      "state",
      "per-worker evidence and state",
      "a worker lying about its own evidence"
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
    "filename": "dg_2.py",
    "headingEn": "The change lists and the ownership audit",
    "headingKn": "ಬದಲಾವಣೆ ಪಟ್ಟಿಗಳು ಮತ್ತು ಮಾಲೀಕತ್ವ ಲೆಕ್ಕಪರಿಶೋಧನೆ",
    "descEn": "committed_changes lists files changed between the base and HEAD only. all_changes adds uncommitted edits and untracked files and turns rename detection off. owned compares path components and audit lists every change outside the owned paths.",
    "descKn": "committed_changes base ಮತ್ತು HEAD ನಡುವೆ ಬದಲಾದ ಫೈಲ್‌ಗಳನ್ನು ಮಾತ್ರ ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ. all_changes commit ಮಾಡದ ಸಂಪಾದನೆಗಳು ಮತ್ತು ಟ್ರ್ಯಾಕ್ ಮಾಡದ ಫೈಲ್‌ಗಳನ್ನು ಸೇರಿಸಿ rename ಪತ್ತೆ ಆರಿಸುತ್ತದೆ. owned path ಘಟಕಗಳನ್ನು ಹೋಲಿಸುತ್ತದೆ ಮತ್ತು audit ಮಾಲೀಕತ್ವದ paths ಹೊರಗಿನ ಪ್ರತಿ ಬದಲಾವಣೆ ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ.",
    "code": "def git(repo, *a):\n    return subprocess.run(GIT + list(a), cwd=repo, capture_output=True, text=True, check=True).stdout.strip()\n\n\ndef committed_changes(repo, base):\n    return sorted(git(repo, \"diff\", \"--name-only\", f\"{base}..HEAD\").splitlines())\n\n\ndef all_changes(repo, base):\n    names = set(git(repo, \"diff\", \"--name-only\", \"--no-renames\", base).splitlines())\n    names |= set(git(repo, \"ls-files\", \"--others\", \"--exclude-standard\").splitlines())\n    return sorted(names)\n\n\ndef owned(path, owned_paths):\n    c = PurePosixPath(path).parts\n    return any(c[: len(PurePosixPath(o).parts)] == PurePosixPath(o).parts for o in owned_paths)\n\n\ndef audit(changed, owned_paths):\n    bad = [f for f in changed if not owned(f, owned_paths)]\n    return {\"accepted\": not bad, \"unauthorized\": bad}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "dg_2.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() creates two worktrees and edits one, audits committed-only and full change lists, moves a file out of app/, overwrites a shared results file and loses an update in a shared state file.",
    "descKn": "main() ಎರಡು worktrees ರಚಿಸಿ ಒಂದನ್ನು ಸಂಪಾದಿಸಿ, commit ಮಾಡಿದ-ಮಾತ್ರ ಮತ್ತು ಪೂರ್ಣ ಬದಲಾವಣೆ ಪಟ್ಟಿಗಳನ್ನು ಲೆಕ್ಕಪರಿಶೋಧಿಸಿ, app/ ಯಿಂದ ಫೈಲ್ ಸರಿಸಿ, ಹಂಚಿಕೆಯ ಫಲಿತಾಂಶ ಫೈಲ್ ಮೇಲ್ಬರೆದು ಹಂಚಿಕೆಯ ಸ್ಥಿತಿ ಫೈಲ್‌ನಲ್ಲಿ ನವೀಕರಣ ಕಳೆಯುತ್ತದೆ.",
    "code": "def main():\n    with tempfile.TemporaryDirectory() as d:\n        root = Path(d)\n        repo = root / \"project\"\n        repo.mkdir()\n        git(repo, \"init\", \"-q\", \"-b\", \"main\")\n        for rel, txt in ((\"app/accounts.py\", \"v1\" + chr(10)), (\"app/settings.py\", \"s1\" + chr(10)), (\"docs/accounts.md\", \"d1\" + chr(10)), (\"app/old.py\", \"legacy\" + chr(10) * 1)):\n            (repo / rel).parent.mkdir(parents=True, exist_ok=True)\n            (repo / rel).write_text(txt, encoding=\"utf-8\")\n        git(repo, \"add\", \"-A\")\n        git(repo, \"commit\", \"-q\", \"-m\", \"base\")\n        base = git(repo, \"rev-parse\", \"HEAD\")\n\n        section(\"1. Genuinely running: two worktrees give two physical checkouts\")\n        api_wt, docs_wt = root / \"project-api\", root / \"project-docs\"\n        git(repo, \"worktree\", \"add\", \"-q\", \"-b\", \"worker/api\", str(api_wt), base)\n        git(repo, \"worktree\", \"add\", \"-q\", \"-b\", \"worker/docs\", str(docs_wt), base)\n        (api_wt / \"app/accounts.py\").write_text(\"v2 by api worker\" + chr(10), encoding=\"utf-8\")\n        print(\"main checkout app/accounts.py :\", (repo / \"app/accounts.py\").read_text(encoding=\"utf-8\").strip())\n        print(\"api worktree app/accounts.py  :\", (api_wt / \"app/accounts.py\").read_text(encoding=\"utf-8\").strip())\n        print(\"docs worktree app/accounts.py :\", (docs_wt / \"app/accounts.py\").read_text(encoding=\"utf-8\").strip())\n        print(\"worktrees registered:\", len(git(repo, \"worktree\", \"list\").splitlines()))\n        print(\"the api worker's edit exists only in its own folder; the other checkouts still hold v1, which is what stops two workers from editing one working directory at once, and nothing in it limits which files each worker may touch\")\n\n        section(\"2. Genuinely measuring: a committed-only change list misses uncommitted and new files\")\n        (api_wt / \"app/settings.py\").write_text(\"s2 changed without permission\" + chr(10), encoding=\"utf-8\")\n        (api_wt / \"app/extra.py\").write_text(\"brand new\" + chr(10), encoding=\"utf-8\")\n        git(api_wt, \"add\", \"app/accounts.py\")\n        git(api_wt, \"commit\", \"-q\", \"-m\", \"api work\")\n        print(\"committed changes since the base:\", committed_changes(api_wt, base))\n        print(\"all changes (committed, uncommitted, untracked):\", all_changes(api_wt, base))\n        print(\"audit of the committed list :\", audit(committed_changes(api_wt, base), [\"app/accounts.py\"]))\n        print(\"audit of the full list      :\", audit(all_changes(api_wt, base), [\"app/accounts.py\"]))\n        print(\"the edit to settings.py and the new file were not committed, so the committed-only list passed the audit and the full list rejected two files; the integrator has to look at the whole working tree\")\n\n        section(\"3. Genuinely measuring: a rename out of an owned path\")\n        git(docs_wt, \"mv\", \"app/old.py\", \"docs/old.py\")\n        print(\"diff with rename detection  :\", sorted(git(docs_wt, \"diff\", \"--name-only\", \"--cached\", base).splitlines()))\n        print(\"diff without rename detection:\", sorted(git(docs_wt, \"diff\", \"--name-only\", \"--cached\", \"--no-renames\", base).splitlines()))\n        print(\"audit for a docs-only owner :\", audit(sorted(git(docs_wt, \"diff\", \"--name-only\", \"--cached\", \"--no-renames\", base).splitlines()), [\"docs\"]))\n        print(\"the move out of app/ into docs/ appears under its new name only when renames are detected, and listing both ends showed that the docs worker also removed a file in app/ it does not own\")\n\n        section(\"4. Genuinely running: separate worktrees still share the output path they are told to write\")\n        shared = root / \"outputs\" / \"results.json\"\n        shared.parent.mkdir()\n        shared.write_text(json.dumps({\"worker\": \"api\", \"passed\": 12}), encoding=\"utf-8\")\n        shared.write_text(json.dumps({\"worker\": \"docs\", \"passed\": 3}), encoding=\"utf-8\")\n        print(\"shared results.json now says:\", json.loads(shared.read_text(encoding=\"utf-8\")))\n        per = {w: root / \"evidence\" / w / \"results.json\" for w in (\"api\", \"docs\")}\n        for w, p in per.items():\n            p.parent.mkdir(parents=True)\n            p.write_text(json.dumps({\"worker\": w}), encoding=\"utf-8\")\n        print(\"per-worker evidence files:\", sorted(str(p.relative_to(root)).replace(chr(92), \"/\") for p in per.values()), \"| both survive:\", all(p.exists() for p in per.values()))\n        print(\"the second worker overwrote the first worker's evidence in the shared location and nothing noticed; separate worktrees isolated the source files and not the output path, so every worker needs its own evidence directory\")\n\n        section(\"5. Genuinely running: a shared state file loses a worker's update\")\n        state = root / \"shared-state.json\"\n        state.write_text(json.dumps({\"api\": \"pending\", \"docs\": \"pending\"}), encoding=\"utf-8\")\n        a_view = json.loads(state.read_text(encoding=\"utf-8\"))\n        b_view = json.loads(state.read_text(encoding=\"utf-8\"))\n        a_view[\"api\"] = \"done\"\n        state.write_text(json.dumps(a_view), encoding=\"utf-8\")\n        b_view[\"docs\"] = \"done\"\n        state.write_text(json.dumps(b_view), encoding=\"utf-8\")\n        print(\"state after both workers wrote:\", json.loads(state.read_text(encoding=\"utf-8\")))\n        print(\"both workers read the file before either wrote, so the api update was lost when the docs worker wrote its older copy back; a database, a port or a cache shared between worktrees fails the same way, and giving each worker its own state avoids it\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: two worktrees give two physical checkouts ---\nmain checkout app/accounts.py : v1\napi worktree app/accounts.py  : v2 by api worker\ndocs worktree app/accounts.py : v1\nworktrees registered: 3\nthe api worker's edit exists only in its own folder; the other checkouts still hold v1, which is what stops two workers from editing one working directory at once, and nothing in it limits which files each worker may touch\n\n--- 2. Genuinely measuring: a committed-only change list misses uncommitted and new files ---\ncommitted changes since the base: ['app/accounts.py']\nall changes (committed, uncommitted, untracked): ['app/accounts.py', 'app/extra.py', 'app/settings.py']\naudit of the committed list : {'accepted': True, 'unauthorized': []}\naudit of the full list      : {'accepted': False, 'unauthorized': ['app/extra.py', 'app/settings.py']}\nthe edit to settings.py and the new file were not committed, so the committed-only list passed the audit and the full list rejected two files; the integrator has to look at the whole working tree\n\n--- 3. Genuinely measuring: a rename out of an owned path ---\ndiff with rename detection  : ['docs/old.py']\ndiff without rename detection: ['app/old.py', 'docs/old.py']\naudit for a docs-only owner : {'accepted': False, 'unauthorized': ['app/old.py']}\nthe move out of app/ into docs/ appears under its new name only when renames are detected, and listing both ends showed that the docs worker also removed a file in app/ it does not own\n\n--- 4. Genuinely running: separate worktrees still share the output path they are told to write ---\nshared results.json now says: {'worker': 'docs', 'passed': 3}\nper-worker evidence files: ['evidence/api/results.json', 'evidence/docs/results.json'] | both survive: True\nthe second worker overwrote the first worker's evidence in the shared location and nothing noticed; separate worktrees isolated the source files and not the output path, so every worker needs its own evidence directory\n\n--- 5. Genuinely running: a shared state file loses a worker's update ---\nstate after both workers wrote: {'api': 'pending', 'docs': 'done'}\nboth workers read the file before either wrote, so the api update was lost when the docs worker wrote its older copy back; a database, a port or a cache shared between worktrees fails the same way, and giving each worker its own state avoids it"
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
    "headingEn": "Experiment 1: Two worktrees give two physical checkouts",
    "headingKn": "ಪ್ರಯೋಗ 1: Two worktrees give two physical checkouts",
    "bodyEn": "What it ran: Two worktrees give two physical checkouts. What the lab concluded: the api worker's edit exists only in its own folder; the other checkouts still hold v1, which is what stops two workers from editing one working directory at once, and nothing in it limits which files each worker may touch",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Two worktrees give two physical checkouts. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the api worker's edit exists only in its own folder; the other checkouts still hold v1, which is what stops two workers from editing one working directory at once, and nothing in it limits which files each worker may touch"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: two worktrees give two physical checkouts ---\nmain checkout app/accounts.py : v1\napi worktree app/accounts.py  : v2 by api worker\ndocs worktree app/accounts.py : v1\nworktrees registered: 3"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: A committed-only change list misses uncommitted and new files",
    "headingKn": "ಪ್ರಯೋಗ 2: A committed-only change list misses uncommitted and new files",
    "bodyEn": "What it ran: A committed-only change list misses uncommitted and new files. What the lab concluded: the edit to settings.py and the new file were not committed, so the committed-only list passed the audit and the full list rejected two files; the integrator has to look at the whole working tree",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A committed-only change list misses uncommitted and new files. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the edit to settings.py and the new file were not committed, so the committed-only list passed the audit and the full list rejected two files; the integrator has to look at the whole working tree"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely measuring: a committed-only change list misses uncommitted and new files ---\ncommitted changes since the base: ['app/accounts.py']\nall changes (committed, uncommitted, untracked): ['app/accounts.py', 'app/extra.py', 'app/settings.py']\naudit of the committed list : {'accepted': True, 'unauthorized': []}\naudit of the full list      : {'accepted': False, 'unauthorized': ['app/extra.py', 'app/settings.py']}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: A rename out of an owned path",
    "headingKn": "ಪ್ರಯೋಗ 3: A rename out of an owned path",
    "bodyEn": "What it ran: A rename out of an owned path. What the lab concluded: the move out of app/ into docs/ appears under its new name only when renames are detected, and listing both ends showed that the docs worker also removed a file in app/ it does not own",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A rename out of an owned path. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the move out of app/ into docs/ appears under its new name only when renames are detected, and listing both ends showed that the docs worker also removed a file in app/ it does not own"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: a rename out of an owned path ---\ndiff with rename detection  : ['docs/old.py']\ndiff without rename detection: ['app/old.py', 'docs/old.py']\naudit for a docs-only owner : {'accepted': False, 'unauthorized': ['app/old.py']}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Separate worktrees still share the output path they are told to write",
    "headingKn": "ಪ್ರಯೋಗ 4: Separate worktrees still share the output path they are told to write",
    "bodyEn": "What it ran: Separate worktrees still share the output path they are told to write. What the lab concluded: the second worker overwrote the first worker's evidence in the shared location and nothing noticed; separate worktrees isolated the source files and not the output path, so every worker needs its own evidence directory",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Separate worktrees still share the output path they are told to write. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the second worker overwrote the first worker's evidence in the shared location and nothing noticed; separate worktrees isolated the source files and not the output path, so every worker needs its own evidence directory"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: separate worktrees still share the output path they are told to write ---\nshared results.json now says: {'worker': 'docs', 'passed': 3}\nper-worker evidence files: ['evidence/api/results.json', 'evidence/docs/results.json'] | both survive: True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A shared state file loses a worker's update",
    "headingKn": "ಪ್ರಯೋಗ 5: A shared state file loses a worker's update",
    "bodyEn": "What it ran: A shared state file loses a worker's update. What the lab concluded: both workers read the file before either wrote, so the api update was lost when the docs worker wrote its older copy back; a database, a port or a cache shared between worktrees fails the same way, and giving each worker its own state avoids it",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A shared state file loses a worker's update. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): both workers read the file before either wrote, so the api update was lost when the docs worker wrote its older copy back; a database, a port or a cache shared between worktrees fails the same way, and giving each worker its own state avoids it"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: a shared state file loses a worker's update ---\nstate after both workers wrote: {'api': 'pending', 'docs': 'done'}"
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
    "headingEn": "Genuinely Found: Committed Changes Passed the Audit and the Full List Did Not",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Commit ಮಾಡಿದ ಬದಲಾವಣೆಗಳು ಲೆಕ್ಕಪರಿಶೋಧನೆ ಪಾಸ್ ಆದವು, ಪೂರ್ಣ ಪಟ್ಟಿ ಆಗಲಿಲ್ಲ",
    "bodyEn": "Section 1: the api worktree held \"v2 by api worker\" while the main and docs checkouts still held v1, and three worktrees were registered. Section 2: the committed list was [app/accounts.py] and passed an audit for that single owned file, while the full list added app/extra.py and app/settings.py and was rejected. Section 3: a move of app/old.py to docs/old.py showed only docs/old.py with rename detection and both ends without it, so the audit flagged app/old.py.",
    "bodyKn": "ವಿಭಾಗ 1: api worktree \"v2 by api worker\" ಹೊಂದಿತ್ತು, ಮುಖ್ಯ ಮತ್ತು docs checkouts ಇನ್ನೂ v1 ಹೊಂದಿದ್ದವು, ಮತ್ತು ಮೂರು worktrees ನೋಂದಾಯಿತವಾಗಿದ್ದವು. ವಿಭಾಗ 2: commit ಮಾಡಿದ ಪಟ್ಟಿ [app/accounts.py] ಆಗಿ ಆ ಒಂದು ಮಾಲೀಕತ್ವದ ಫೈಲ್‌ಗೆ ಲೆಕ್ಕಪರಿಶೋಧನೆ ಪಾಸ್ ಮಾಡಿತು, ಪೂರ್ಣ ಪಟ್ಟಿ app/extra.py ಮತ್ತು app/settings.py ಸೇರಿಸಿ ತಿರಸ್ಕೃತವಾಯಿತು. ವಿಭಾಗ 3: app/old.py ಯಿಂದ docs/old.py ಗೆ ಸರಿಸಿದ್ದು rename ಪತ್ತೆಯೊಂದಿಗೆ docs/old.py ಮಾತ್ರ ಮತ್ತು ಇಲ್ಲದೆ ಎರಡೂ ತುದಿ ತೋರಿಸಿತು, ಆದ್ದರಿಂದ ಲೆಕ್ಕಪರಿಶೋಧನೆ app/old.py ಗುರುತಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Separate Worktrees, Shared Output and Shared State",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪ್ರತ್ಯೇಕ Worktrees, ಹಂಚಿಕೆಯ ಔಟ್‌ಪುಟ್ ಮತ್ತು ಹಂಚಿಕೆಯ ಸ್ಥಿತಿ",
    "bodyEn": "Section 4: the second worker wrote results.json over the first, so the shared file said {\"worker\": \"docs\", \"passed\": 3}, while per-worker evidence files both survived. Section 5: both workers read the state file before either wrote, and after both wrote it said {\"api\": \"pending\", \"docs\": \"done\"}, losing the api update. The writes in sections 4 and 5 were performed one after the other by the lab to reproduce the overwrite.",
    "bodyKn": "ವಿಭಾಗ 4: ಎರಡನೇ worker results.json ಅನ್ನು ಮೊದಲನೆಯದರ ಮೇಲೆ ಬರೆದುದರಿಂದ ಹಂಚಿಕೆಯ ಫೈಲ್ {\"worker\": \"docs\", \"passed\": 3} ಎಂದಿತು, ಆದರೆ per-worker ಸಾಕ್ಷ್ಯ ಫೈಲ್‌ಗಳು ಎರಡೂ ಉಳಿದವು. ವಿಭಾಗ 5: ಯಾವುದೇ ಬರೆಯುವ ಮುನ್ನ ಎರಡೂ workers ಸ್ಥಿತಿ ಫೈಲ್ ಓದಿದರು, ಮತ್ತು ಇಬ್ಬರೂ ಬರೆದ ನಂತರ ಅದು {\"api\": \"pending\", \"docs\": \"done\"} ಎಂದಿತು, api ನವೀಕರಣ ಕಳೆದುಹೋಯಿತು. ವಿಭಾಗ 4 ಮತ್ತು 5 ರ ಬರಹಗಳನ್ನು ಮೇಲ್ಬರಹ ಪುನರುತ್ಪಾದಿಸಲು ಲ್ಯಾಬ್ ಒಂದರ ನಂತರ ಒಂದು ನಡೆಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A list of changed files taken only from commits, or evidence written to one shared path, lets a worker pass an audit it should have failed.",
    "bodyKn": "commits ಗಳಿಂದ ಮಾತ್ರ ತೆಗೆದ ಬದಲಾದ ಫೈಲ್‌ಗಳ ಪಟ್ಟಿ, ಅಥವಾ ಒಂದೇ ಹಂಚಿಕೆಯ path ಗೆ ಬರೆದ ಸಾಕ್ಷ್ಯ, worker ವಿಫಲವಾಗಬೇಕಿದ್ದ ಲೆಕ್ಕಪರಿಶೋಧನೆ ಪಾಸ್ ಮಾಡಲು ಬಿಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"separate worktrees isolate the workers.\" They isolated the source files and not the output path or the state file.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಪ್ರತ್ಯೇಕ worktrees workers ಅನ್ನು ಪ್ರತ್ಯೇಕಿಸುತ್ತವೆ.\" ಅವು ಮೂಲ ಫೈಲ್‌ಗಳನ್ನು ಪ್ರತ್ಯೇಕಿಸಿದವು, ಔಟ್‌ಪುಟ್ path ಅಥವಾ ಸ್ಥಿತಿ ಫೈಲ್ ಅಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Worktree: another checkout of the same repository. Full change list: committed, uncommitted and untracked changes. Rename detection: git showing a move as one path. Evidence directory: a per-worker place for proof. Lost update: a stale write that overwrites a newer one.",
    "bodyKn": "Worktree: ಅದೇ repository ಯ ಇನ್ನೊಂದು checkout. Full change list: commit ಮಾಡಿದ, commit ಮಾಡದ ಮತ್ತು ಟ್ರ್ಯಾಕ್ ಮಾಡದ ಬದಲಾವಣೆಗಳು. Rename detection: git ಸರಿಸುವಿಕೆಯನ್ನು ಒಂದು path ಆಗಿ ತೋರಿಸುವುದು. Evidence directory: ಪುರಾವೆಗೆ per-worker ಸ್ಥಳ. Lost update: ಹೊಸದನ್ನು ಮೇಲ್ಬರೆಯುವ ಹಳೆಯ ಬರಹ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Worktrees gave separate checkouts. 2) A committed-only list missed two files the full list found. 3) A rename hid the removal from app/ until both ends were listed. 4) A shared results path lost the first worker's evidence. 5) A shared state file lost an update.",
    "bodyKn": "1) Worktrees ಪ್ರತ್ಯೇಕ checkouts ನೀಡಿದವು. 2) commit ಮಾಡಿದ-ಮಾತ್ರ ಪಟ್ಟಿ ಪೂರ್ಣ ಪಟ್ಟಿ ಕಂಡ ಎರಡು ಫೈಲ್ ತಪ್ಪಿಸಿತು. 3) rename app/ ನಿಂದ ತೆಗೆಯುವಿಕೆ ಮರೆಮಾಡಿ ಎರಡೂ ತುದಿ ಪಟ್ಟಿ ಮಾಡುವವರೆಗೆ. 4) ಹಂಚಿಕೆಯ ಫಲಿತಾಂಶ path ಮೊದಲ worker ಸಾಕ್ಷ್ಯ ಕಳೆಯಿತು. 5) ಹಂಚಿಕೆಯ ಸ್ಥಿತಿ ಫೈಲ್ ಒಂದು ನವೀಕರಣ ಕಳೆಯಿತು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B dg_2.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B dg_2.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B dg_2.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B dg_2.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many files did the full change list add beyond the committed list?",
      "qKn": "ಪೂರ್ಣ ಬದಲಾವಣೆ ಪಟ್ಟಿ commit ಮಾಡಿದ ಪಟ್ಟಿಯ ಮೇಲೆ ಎಷ್ಟು ಫೈಲ್ ಸೇರಿಸಿತು?",
      "opts": [
       "2",
       "0",
       "1",
       "3"
      ],
      "optsKn": [
       "2",
       "0",
       "1",
       "3"
      ],
      "correct": 0
     },
     {
      "q": "What did the shared results.json say after both workers wrote?",
      "qKn": "ಎರಡೂ workers ಬರೆದ ನಂತರ ಹಂಚಿಕೆಯ results.json ಏನು ಹೇಳಿತು?",
      "opts": [
       "The docs worker's result",
       "The api worker's result",
       "Both results",
       "Nothing"
      ],
      "optsKn": [
       "docs worker ಫಲಿತಾಂಶ",
       "api worker ಫಲಿತಾಂಶ",
       "ಎರಡೂ ಫಲಿತಾಂಶಗಳು",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Which update was lost in the shared state file?",
      "qKn": "ಹಂಚಿಕೆಯ ಸ್ಥಿತಿ ಫೈಲ್‌ನಲ್ಲಿ ಯಾವ ನವೀಕರಣ ಕಳೆದುಹೋಯಿತು?",
      "opts": [
       "api: done",
       "docs: done",
       "Both",
       "Neither"
      ],
      "optsKn": [
       "api: done",
       "docs: done",
       "ಎರಡೂ",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Why did listing both ends of a rename matter?",
      "qKn": "rename ನ ಎರಡೂ ತುದಿ ಪಟ್ಟಿ ಮಾಡುವುದು ಏಕೆ ಮುಖ್ಯ?",
      "opts": [
       "It showed a removal from a path the worker does not own",
       "It was faster",
       "It hid files",
       "It signed the diff"
      ],
      "optsKn": [
       "worker ಗೆ ಸೇರದ path ನಿಂದ ತೆಗೆಯುವಿಕೆ ತೋರಿಸಿತು",
       "ಅದು ವೇಗವಾಗಿತ್ತು",
       "ಅದು ಫೈಲ್‌ಗಳನ್ನು ಮರೆಮಾಡಿತು",
       "ಅದು diff ಗೆ ಸಹಿ ಮಾಡಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What isolates evidence between workers?",
      "qKn": "workers ನಡುವೆ ಸಾಕ್ಷ್ಯವನ್ನು ಯಾವುದು ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ?",
      "opts": [
       "A separate evidence directory per worker",
       "A separate worktree alone",
       "A shared file",
       "A longer filename"
      ],
      "optsKn": [
       "ಪ್ರತಿ worker ಗೆ ಪ್ರತ್ಯೇಕ ಸಾಕ್ಷ್ಯ ಡೈರೆಕ್ಟರಿ",
       "ಪ್ರತ್ಯೇಕ worktree ಮಾತ್ರ",
       "ಹಂಚಿಕೆಯ ಫೈಲ್",
       "ಉದ್ದದ ಫೈಲ್ ಹೆಸರು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
