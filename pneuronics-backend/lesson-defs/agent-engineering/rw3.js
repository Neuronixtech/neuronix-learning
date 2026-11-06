module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6366020ed05b321586",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "The Workbench on a Real Repo (Part 3 of 3) — Baselines, Worktrees and Evidence",
 "titleKn": "ನಿಜ Repo ಮೇಲೆ Workbench (ಭಾಗ 3 / 3) — Baselines, Worktrees ಮತ್ತು ಸಾಕ್ಷ್ಯ",
 "desc": "Record a baseline, isolate a task in a worktree, validate paths, run commands safely, verify from evidence and see why sample size limits what a comparison can show.",
 "descKn": "baseline ದಾಖಲಿಸಿ, worktree ನಲ್ಲಿ ಕಾರ್ಯ ಪ್ರತ್ಯೇಕಿಸಿ, paths ಮಾನ್ಯಗೊಳಿಸಿ, ಆದೇಶಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಓಡಿಸಿ, ಸಾಕ್ಷ್ಯದಿಂದ ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಮಾದರಿ ಗಾತ್ರ ಹೋಲಿಕೆ ತೋರಿಸಬಹುದಾದ್ದನ್ನು ಏಕೆ ಮಿತಿಗೊಳಿಸುತ್ತದೆ ಎಂದು ನೋಡಿ.",
 "objectives": [
  "Compare against a recorded baseline commit.",
  "Isolate a task in a worktree.",
  "Validate contract paths.",
  "Run commands without a shell.",
  "Do not draw conclusions from a handful of trials."
 ],
 "objectivesKn": [
  "ದಾಖಲಿಸಿದ baseline commit ವಿರುದ್ಧ ಹೋಲಿಸಿ.",
  "worktree ನಲ್ಲಿ ಕಾರ್ಯ ಪ್ರತ್ಯೇಕಿಸಿ.",
  "ಒಪ್ಪಂದ paths ಮಾನ್ಯಗೊಳಿಸಿ.",
  "shell ಇಲ್ಲದೆ ಆದೇಶ ಓಡಿಸಿ.",
  "ಕೆಲವೇ ಪ್ರಯೋಗಗಳಿಂದ ತೀರ್ಮಾನ ಮಾಡಬೇಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "The Workbench on a Real Repo (Part 3 of 3)",
    "textKn": "ನಿಜ Repo ಮೇಲೆ Workbench (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: production-style controls on a real git repository: baseline commit, disposable worktree, path validation, a checked command runner, a verifier that needs evidence and a sample-size demonstration with assumed rates. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind evaluating an agent workbench on a real repository (fixtures, independent probes, scope audits, git baselines and experiment design), not the real software, and the pipelines are fixed scripts that stand in for agents, with no language model involved, so no real LLM behaviour is measured. The pasted lesson said its original main.py was not supplied, so the labs are our own implementation of the behaviour it describes; results depend on the machine they ran on. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ನಿಜ git repository ಮೇಲೆ production-ಶೈಲಿಯ ನಿಯಂತ್ರಣಗಳು: baseline commit, ಬಿಸಾಡಬಹುದಾದ worktree, path ಮಾನ್ಯೀಕರಣ, ಪರಿಶೀಲಿಸಿದ ಆದೇಶ runner, ಸಾಕ್ಷ್ಯ ಬೇಕಾದ verifier ಮತ್ತು ಊಹಿಸಿದ ದರಗಳೊಂದಿಗೆ ಮಾದರಿ-ಗಾತ್ರ ಪ್ರದರ್ಶನ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ನಿಜ repository ಮೇಲೆ agent workbench ಮೌಲ್ಯಮಾಪನ (fixtures, ಸ್ವತಂತ್ರ probes, ವ್ಯಾಪ್ತಿ ಲೆಕ್ಕಪರಿಶೋಧನೆ, git baselines ಮತ್ತು ಪ್ರಯೋಗ ವಿನ್ಯಾಸ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು pipelines ಕೇವಲ agents ಬದಲಿಗೆ ನಿಲ್ಲುವ ನಿಶ್ಚಿತ ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳು, ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಮೂಲ main.py ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ; ಫಲಿತಾಂಶಗಳು ಅವು ಓಡಿದ ಯಂತ್ರವನ್ನು ಅವಲಂಬಿಸಿವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "From a Demo to a Real Repository",
    "textKn": "ಡೆಮೊದಿಂದ ನಿಜ Repository ಗೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Controls That Hold Up Outside a Temp Directory",
    "headingKn": "Temp ಡೈರೆಕ್ಟರಿಯ ಹೊರಗೂ ನಿಲ್ಲುವ ನಿಯಂತ್ರಣಗಳು",
    "bodyEn": "On a real repository the audit needs a recorded baseline commit, the task needs isolation, contract paths must be validated, commands must run without a shell and under a timeout, and completion must be computed from evidence. This part tests each in a temporary git repository. The last section uses invented failure rates to show how many trials a comparison between two pipelines needs; those numbers are assumptions, not measurements.",
    "bodyKn": "ನಿಜ repository ಯಲ್ಲಿ ಲೆಕ್ಕಪರಿಶೋಧನೆಗೆ ದಾಖಲಿಸಿದ baseline commit ಬೇಕು, ಕಾರ್ಯಕ್ಕೆ ಪ್ರತ್ಯೇಕತೆ ಬೇಕು, ಒಪ್ಪಂದ paths ಮಾನ್ಯಗೊಳ್ಳಬೇಕು, ಆದೇಶಗಳು shell ಇಲ್ಲದೆ ಮತ್ತು timeout ಅಡಿ ಓಡಬೇಕು, ಮತ್ತು ಪೂರ್ಣತೆ ಸಾಕ್ಷ್ಯದಿಂದ ಲೆಕ್ಕ ಹಾಕಲ್ಪಡಬೇಕು. ಈ ಭಾಗ ಪ್ರತಿಯೊಂದನ್ನೂ ತಾತ್ಕಾಲಿಕ git repository ಯಲ್ಲಿ ಪರೀಕ್ಷಿಸುತ್ತದೆ. ಕೊನೆಯ ವಿಭಾಗ ಎರಡು pipelines ನಡುವಿನ ಹೋಲಿಕೆಗೆ ಎಷ್ಟು ಪ್ರಯೋಗಗಳು ಬೇಕು ಎಂದು ತೋರಿಸಲು ಕಲ್ಪಿತ ವೈಫಲ್ಯ ದರ ಬಳಸುತ್ತದೆ; ಆ ಸಂಖ್ಯೆಗಳು ಊಹೆಗಳು, ಅಳತೆಗಳಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Baseline, Worktree, Evidence",
    "headingKn": "Baseline, Worktree, ಸಾಕ್ಷ್ಯ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Baseline, worktree, evidence</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">baseline commit</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">recorded first</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">worktree</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">disposable</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">checked runner</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">argv, timeout</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">verify_task</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">needs evidence</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">sample size decides what you can conclude</text></svg>",
    "captionEn": "Sample size decides what you can conclude.",
    "captionKn": "ಮಾದರಿ ಗಾತ್ರ ನೀವು ಏನು ತೀರ್ಮಾನಿಸಬಹುದು ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Controls",
    "headingKn": "ನಿಯಂತ್ರಣಗಳು",
    "headers": [
     "Control",
     "Protects against",
     "Limit"
    ],
    "rows": [
     [
      "baseline commit",
      "a clean tree hiding committed changes",
      "must be recorded before the task"
     ],
     [
      "git worktree",
      "edits reaching the main checkout",
      "the branch is left behind"
     ],
     [
      "path validation",
      ".., absolute and drive paths",
      "text only, symlinks need a resolved check"
     ],
     [
      "argv plus allowlist",
      "shell interpretation",
      "the allowlist is a policy choice"
     ],
     [
      "verify_task",
      "claims without evidence",
      "trusts the evidence producer"
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
    "filename": "rw_3.py",
    "headingEn": "Baseline paths, path validation, runner and verifier",
    "headingKn": "Baseline paths, path ಮಾನ್ಯೀಕರಣ, runner ಮತ್ತು verifier",
    "descEn": "changed_paths combines committed changes since the baseline, uncommitted changes and untracked files. validate_relative_path rejects empty, absolute, drive-letter and .. paths. run_checked takes an argument list, applies an allowlist and a timeout and never uses a shell. verify_task needs four pieces of evidence.",
    "descKn": "changed_paths baseline ನಿಂದ commit ಮಾಡಿದ ಬದಲಾವಣೆಗಳು, commit ಮಾಡದ ಬದಲಾವಣೆಗಳು ಮತ್ತು ಟ್ರ್ಯಾಕ್ ಮಾಡದ ಫೈಲ್‌ಗಳನ್ನು ಸೇರಿಸುತ್ತದೆ. validate_relative_path ಖಾಲಿ, ನಿರಪೇಕ್ಷ, drive-letter ಮತ್ತು .. paths ತಿರಸ್ಕರಿಸುತ್ತದೆ. run_checked ಆರ್ಗ್ಯುಮೆಂಟ್ ಪಟ್ಟಿ ತೆಗೆದುಕೊಂಡು allowlist ಮತ್ತು timeout ಅನ್ವಯಿಸಿ ಎಂದೂ shell ಬಳಸುವುದಿಲ್ಲ. verify_task ನಾಲ್ಕು ಸಾಕ್ಷ್ಯ ಬಯಸುತ್ತದೆ.",
    "code": "def changed_paths(repo, base):\n    out = set(git(repo, \"diff\", \"--name-only\", \"--no-renames\", f\"{base}..HEAD\").splitlines())\n    out |= set(git(repo, \"diff\", \"--name-only\", \"--no-renames\").splitlines())\n    out |= set(git(repo, \"ls-files\", \"--others\", \"--exclude-standard\").splitlines())\n    return sorted(out)\n\n\ndef validate_relative_path(value):\n    if not isinstance(value, str) or not value or \"\\x00\" in value:\n        raise ValueError(\"path must be a non-empty string\")\n    if value.startswith((\"/\", chr(92))) or PureWindowsPath(value).drive:\n        raise ValueError(\"path must be relative\")\n    parts = PurePosixPath(value.replace(chr(92), \"/\")).parts\n    if \"..\" in parts:\n        raise ValueError(\"path must not contain ..\")\n    return \"/\".join(p for p in parts if p != \".\")\n\n\ndef run_checked(argv, cwd, timeout=20, allow=(\"python\", \"git\")):\n    if not isinstance(argv, list) or not argv or not all(isinstance(a, str) for a in argv):\n        raise ValueError(\"argv must be a non-empty list of strings\")\n    if Path(argv[0]).stem.lower() not in allow and argv[0] != sys.executable:\n        raise ValueError(f\"program not allowed: {argv[0]}\")\n    try:\n        p = subprocess.run(argv, cwd=cwd, capture_output=True, text=True, timeout=timeout, shell=False)\n        return {\"exit\": p.returncode, \"timed_out\": False}\n    except subprocess.TimeoutExpired:\n        return {\"exit\": None, \"timed_out\": True}\n\n\ndef verify_task(contract, evidence):\n    problems = []\n    for key in (\"baseline_commit\", \"acceptance_exit\", \"tests_run\", \"changed\"):\n        if key not in evidence:\n            problems.append(f\"missing evidence: {key}\")\n    if problems:\n        return \"BLOCK\", problems\n    if evidence[\"acceptance_exit\"] != 0 or evidence[\"tests_run\"] < 1:\n        problems.append(\"acceptance did not pass with at least one test\")\n    problems += [f\"outside scope: {c}\" for c in evidence[\"changed\"] if c not in contract[\"allowed\"]]\n    return (\"BLOCK\" if problems else \"ALLOW\"), problems"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rw_3.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() builds a repository and records a baseline, makes a task worktree, validates nine paths, runs the runner on good and bad commands, runs the verifier on four evidence sets and simulates experiments of 5, 20 and 200 trials per arm under assumed rates.",
    "descKn": "main() repository ನಿರ್ಮಿಸಿ baseline ದಾಖಲಿಸಿ, ಕಾರ್ಯ worktree ಮಾಡಿ, ಒಂಬತ್ತು paths ಮಾನ್ಯಗೊಳಿಸಿ, runner ಅನ್ನು ಒಳ್ಳೆಯ ಮತ್ತು ಕೆಟ್ಟ ಆದೇಶಗಳ ಮೇಲೆ ಓಡಿಸಿ, verifier ಅನ್ನು ನಾಲ್ಕು ಸಾಕ್ಷ್ಯ ಸೆಟ್‌ಗಳ ಮೇಲೆ ಓಡಿಸಿ ಮತ್ತು ಊಹಿಸಿದ ದರಗಳಲ್ಲಿ ಪ್ರತಿ ಬದಿಗೆ 5, 20 ಮತ್ತು 200 ಪ್ರಯೋಗಗಳ ಪ್ರಯೋಗಗಳನ್ನು ಅನುಕರಿಸುತ್ತದೆ.",
    "code": "def main():\n    with tempfile.TemporaryDirectory() as d:\n        repo = Path(d) / \"repo\"\n        repo.mkdir()\n        git(repo, \"init\", \"-q\", \"-b\", \"main\")\n        (repo / \"app.py\").write_text(\"v1\" + chr(10), encoding=\"utf-8\")\n        (repo / \"README.md\").write_text(\"docs\" + chr(10), encoding=\"utf-8\")\n        git(repo, \"add\", \"-A\")\n        git(repo, \"commit\", \"-q\", \"-m\", \"baseline\")\n        base = git(repo, \"rev-parse\", \"HEAD\")\n\n        section(\"1. Genuinely running: a clean working tree is not proof that nothing changed\")\n        (repo / \"app.py\").write_text(\"v2\" + chr(10), encoding=\"utf-8\")\n        (repo / \"README.md\").write_text(\"docs edited\" + chr(10), encoding=\"utf-8\")\n        git(repo, \"add\", \"-A\")\n        git(repo, \"commit\", \"-q\", \"-m\", \"agent work\")\n        print(\"git status --porcelain:\", repr(git(repo, \"status\", \"--porcelain\")))\n        print(\"changed since the baseline commit:\", changed_paths(repo, base))\n        print(\"the tree is clean and two files changed, and only the recorded baseline commit exposes it; the verifier needs the baseline stored in task state before the agent starts\")\n\n        section(\"2. Genuinely running: a disposable worktree isolates the task\")\n        wt = Path(d) / \"task_wt\"\n        git(repo, \"worktree\", \"add\", \"-q\", \"-b\", \"task-signup\", str(wt), base)\n        (wt / \"app.py\").write_text(\"worktree edit\" + chr(10), encoding=\"utf-8\")\n        print(\"main checkout app.py:\", (repo / \"app.py\").read_text(encoding=\"utf-8\").strip(), \"| worktree app.py:\", (wt / \"app.py\").read_text(encoding=\"utf-8\").strip())\n        print(\"worktrees:\", len(git(repo, \"worktree\", \"list\").splitlines()))\n        git(repo, \"worktree\", \"remove\", \"--force\", str(wt))\n        print(\"after removal:\", len(git(repo, \"worktree\", \"list\").splitlines()), \"worktree | the branch task-signup still exists:\", \"task-signup\" in git(repo, \"branch\", \"--list\"))\n        print(\"the edit stayed in the worktree and the main checkout was untouched, and removing the worktree left the branch behind, which has to be cleaned up separately\")\n\n        section(\"3. Genuinely running: validating paths taken from a contract\")\n        for p in (\"src/app.py\", \"./src/app.py\", \"src//app.py\", \"../etc/passwd\", \"/etc/passwd\", \"C:\\\\Windows\\\\x\", \"src\\\\..\\\\..\\\\x\", \"\", \"a\\x00b\"):\n            try:\n                print(f\"{p!r:22} -> {validate_relative_path(p)!r}\")\n            except ValueError as e:\n                print(f\"{p!r:22} rejected: {e}\")\n        print(\"traversal, absolute and drive-letter paths were rejected and harmless variants were cleaned; even so, a path check is text only, and the filesystem boundary (symlinks, mounts) needs a resolved-path check against the repository root\")\n\n        section(\"4. Genuinely running: a command runner that takes an argument list\")\n        print(\"python -c ok:\", run_checked([sys.executable, \"-c\", \"pass\"], d))\n        print(\"sleeping command with a 1 s timeout:\", run_checked([sys.executable, \"-c\", \"import time; time.sleep(20)\"], d, timeout=1))\n        for bad in ([\"rm\", \"-rf\", \"x\"], \"python -c pass\", []):\n            try:\n                run_checked(bad, d)\n            except ValueError as e:\n                print(f\"{bad!r:22} rejected: {e}\")\n        print(\"a string command, an empty list and a program outside the allowlist were refused before anything ran, and with shell=False the arguments are never interpreted by a shell; the allowlist here is two program names of our choosing\")\n\n        section(\"5. Genuinely running: the verifier needs evidence\")\n        c = {\"allowed\": [\"app.py\", \"test_app.py\"]}\n        print(\"no evidence:\", verify_task(c, {}))\n        print(\"tests passed but README changed:\", verify_task(c, {\"baseline_commit\": base[:8], \"acceptance_exit\": 0, \"tests_run\": 3, \"changed\": [\"app.py\", \"README.md\"]}))\n        print(\"exit 0 with zero tests:\", verify_task(c, {\"baseline_commit\": base[:8], \"acceptance_exit\": 0, \"tests_run\": 0, \"changed\": [\"app.py\"]}))\n        print(\"complete evidence:\", verify_task(c, {\"baseline_commit\": base[:8], \"acceptance_exit\": 0, \"tests_run\": 3, \"changed\": [\"app.py\", \"test_app.py\"]}))\n        print(\"each missing or failing piece of evidence blocked the task, so 'complete' is a verdict computed from the record, never a statement\")\n\n    section(\"6. Genuinely simulating with ASSUMED rates: how many trials does a comparison need?\")\n    print(\"assumed, not measured: a bad edit happens in 30% of runs, and the workbench catches 80% of bad edits\")\n    for n in (5, 20, 200):\n        rows = []\n        for seed in range(5):\n            rng = random.Random(seed)\n            a = sum(trial(rng, False) for _ in range(n)) / n\n            b = sum(trial(rng, True) for _ in range(n)) / n\n            rows.append(round(a - b, 2))\n        print(f\"{n:4} trials per arm, 5 repeated experiments, measured improvement (prompt-only failure rate minus workbench):\", rows)\n    print(\"with 5 trials per arm the same assumed truth gave measured improvements from 0.0 to 0.8 across five repeated experiments, 20 trials gave 0.05 to 0.5, and 200 trials per arm gave 0.19 to 0.27, near the 0.24 the assumed rates imply; this is a statement about sample size under invented rates and says nothing about any real agent or workbench\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a clean working tree is not proof that nothing changed ---\ngit status --porcelain: ''\nchanged since the baseline commit: ['README.md', 'app.py']\nthe tree is clean and two files changed, and only the recorded baseline commit exposes it; the verifier needs the baseline stored in task state before the agent starts\n\n--- 2. Genuinely running: a disposable worktree isolates the task ---\nmain checkout app.py: v2 | worktree app.py: worktree edit\nworktrees: 2\nafter removal: 1 worktree | the branch task-signup still exists: True\nthe edit stayed in the worktree and the main checkout was untouched, and removing the worktree left the branch behind, which has to be cleaned up separately\n\n--- 3. Genuinely running: validating paths taken from a contract ---\n'src/app.py'           -> 'src/app.py'\n'./src/app.py'         -> 'src/app.py'\n'src//app.py'          -> 'src/app.py'\n'../etc/passwd'        rejected: path must not contain ..\n'/etc/passwd'          rejected: path must be relative\n'C:\\\\Windows\\\\x'       rejected: path must be relative\n'src\\\\..\\\\..\\\\x'       rejected: path must not contain ..\n''                     rejected: path must be a non-empty string\n'a\\x00b'               rejected: path must be a non-empty string\ntraversal, absolute and drive-letter paths were rejected and harmless variants were cleaned; even so, a path check is text only, and the filesystem boundary (symlinks, mounts) needs a resolved-path check against the repository root\n\n--- 4. Genuinely running: a command runner that takes an argument list ---\npython -c ok: {'exit': 0, 'timed_out': False}\nsleeping command with a 1 s timeout: {'exit': None, 'timed_out': True}\n['rm', '-rf', 'x']     rejected: program not allowed: rm\n'python -c pass'       rejected: argv must be a non-empty list of strings\n[]                     rejected: argv must be a non-empty list of strings\na string command, an empty list and a program outside the allowlist were refused before anything ran, and with shell=False the arguments are never interpreted by a shell; the allowlist here is two program names of our choosing\n\n--- 5. Genuinely running: the verifier needs evidence ---\nno evidence: ('BLOCK', ['missing evidence: baseline_commit', 'missing evidence: acceptance_exit', 'missing evidence: tests_run', 'missing evidence: changed'])\ntests passed but README changed: ('BLOCK', ['outside scope: README.md'])\nexit 0 with zero tests: ('BLOCK', ['acceptance did not pass with at least one test'])\ncomplete evidence: ('ALLOW', [])\neach missing or failing piece of evidence blocked the task, so 'complete' is a verdict computed from the record, never a statement\n\n--- 6. Genuinely simulating with ASSUMED rates: how many trials does a comparison need? ---\nassumed, not measured: a bad edit happens in 30% of runs, and the workbench catches 80% of bad edits\n   5 trials per arm, 5 repeated experiments, measured improvement (prompt-only failure rate minus workbench): [0.2, 0.2, 0.4, 0.0, 0.8]\n  20 trials per arm, 5 repeated experiments, measured improvement (prompt-only failure rate minus workbench): [0.05, 0.35, 0.2, 0.3, 0.5]\n 200 trials per arm, 5 repeated experiments, measured improvement (prompt-only failure rate minus workbench): [0.19, 0.27, 0.24, 0.21, 0.24]\nwith 5 trials per arm the same assumed truth gave measured improvements from 0.0 to 0.8 across five repeated experiments, 20 trials gave 0.05 to 0.5, and 200 trials per arm gave 0.19 to 0.27, near the 0.24 the assumed rates imply; this is a statement about sample size under invented rates and says nothing about any real agent or workbench"
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
    "headingEn": "Genuinely Found: The Tree Was Clean and Two Files Had Changed",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮರ ಸ್ವಚ್ಛವಾಗಿತ್ತು ಮತ್ತು ಎರಡು ಫೈಲ್‌ಗಳು ಬದಲಾಗಿದ್ದವು",
    "bodyEn": "Section 1: git status --porcelain was empty after the agent committed, while the baseline comparison listed README.md and app.py. Section 2: a worktree edit left the main checkout unchanged, the list of worktrees went from 2 to 1 on removal and the branch task-signup still existed. Section 3: ../, absolute, drive-letter, backslash-traversal, empty and NUL paths were rejected and ./ and doubled slashes were cleaned.",
    "bodyKn": "ವಿಭಾಗ 1: agent commit ಮಾಡಿದ ನಂತರ git status --porcelain ಖಾಲಿಯಾಗಿತ್ತು, baseline ಹೋಲಿಕೆ README.md ಮತ್ತು app.py ಪಟ್ಟಿ ಮಾಡಿತು. ವಿಭಾಗ 2: worktree ಸಂಪಾದನೆ ಮುಖ್ಯ checkout ಅನ್ನು ಬದಲಿಸಲಿಲ್ಲ, ತೆಗೆದಾಗ worktrees ಪಟ್ಟಿ 2 ರಿಂದ 1 ಕ್ಕೆ ಇಳಿಯಿತು ಮತ್ತು branch task-signup ಇನ್ನೂ ಇತ್ತು. ವಿಭಾಗ 3: ../, ನಿರಪೇಕ್ಷ, drive-letter, ಬ್ಯಾಕ್‌ಸ್ಲ್ಯಾಶ್-traversal, ಖಾಲಿ ಮತ್ತು NUL paths ತಿರಸ್ಕೃತವಾದವು ಮತ್ತು ./ ಹಾಗೂ ದ್ವಿಗುಣ ಸ್ಲ್ಯಾಶ್‌ಗಳು ಶುದ್ಧೀಕರಿಸಲ್ಪಟ್ಟವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Evidence Decides, and Five Trials Decide Nothing",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಾಕ್ಷ್ಯ ನಿರ್ಧರಿಸುತ್ತದೆ, ಮತ್ತು ಐದು ಪ್ರಯೋಗಗಳು ಏನನ್ನೂ ನಿರ್ಧರಿಸುವುದಿಲ್ಲ",
    "bodyEn": "Section 4: a sleeping command was stopped by a 1 s timeout, and a program outside the allowlist, a string command and an empty list were refused. Section 5: no evidence, a changed README, an exit 0 with zero tests all gave BLOCK, and complete evidence gave ALLOW. Section 6 (assumed rates: 30% bad edits, 80% of them caught by the workbench): the measured improvement over five repeated experiments ranged from 0.0 to 0.8 with 5 trials per arm, 0.05 to 0.5 with 20, and 0.19 to 0.27 with 200, near the 0.24 the assumptions imply.",
    "bodyKn": "ವಿಭಾಗ 4: ನಿದ್ರಿಸುವ ಆದೇಶ 1 s timeout ನಿಂದ ನಿಲ್ಲಿಸಲ್ಪಟ್ಟಿತು, ಮತ್ತು allowlist ಹೊರಗಿನ ಪ್ರೋಗ್ರಾಂ, string ಆದೇಶ ಮತ್ತು ಖಾಲಿ ಪಟ್ಟಿ ನಿರಾಕರಿಸಲ್ಪಟ್ಟವು. ವಿಭಾಗ 5: ಸಾಕ್ಷ್ಯವಿಲ್ಲ, ಬದಲಾದ README, ಶೂನ್ಯ ಪರೀಕ್ಷೆಗಳೊಂದಿಗೆ exit 0 ಎಲ್ಲವೂ BLOCK ನೀಡಿದವು, ಮತ್ತು ಪೂರ್ಣ ಸಾಕ್ಷ್ಯ ALLOW ನೀಡಿತು. ವಿಭಾಗ 6 (ಊಹಿಸಿದ ದರಗಳು: 30% ಕೆಟ್ಟ ಸಂಪಾದನೆ, ಅವುಗಳಲ್ಲಿ 80% workbench ಹಿಡಿಯುತ್ತದೆ): ಐದು ಪುನರಾವರ್ತಿತ ಪ್ರಯೋಗಗಳಲ್ಲಿ ಅಳೆದ ಸುಧಾರಣೆ ಪ್ರತಿ ಬದಿಗೆ 5 ಪ್ರಯೋಗಗಳಲ್ಲಿ 0.0 ರಿಂದ 0.8, 20 ರಲ್ಲಿ 0.05 ರಿಂದ 0.5, ಮತ್ತು 200 ರಲ್ಲಿ 0.19 ರಿಂದ 0.27, ಊಹೆಗಳು ಸೂಚಿಸುವ 0.24 ಹತ್ತಿರ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Each control closes a specific way a \"clean\" result can be wrong, and the sample-size demonstration shows why a few runs cannot support a claim about a pipeline.",
    "bodyKn": "ಪ್ರತಿ ನಿಯಂತ್ರಣ \"ಸ್ವಚ್ಛ\" ಫಲಿತಾಂಶ ತಪ್ಪಾಗಬಹುದಾದ ನಿರ್ದಿಷ್ಟ ದಾರಿ ಮುಚ್ಚುತ್ತದೆ, ಮತ್ತು ಮಾದರಿ-ಗಾತ್ರ ಪ್ರದರ್ಶನ ಕೆಲವು ಓಟಗಳು pipeline ಬಗ್ಗೆ ಹೇಳಿಕೆಯನ್ನು ಏಕೆ ಬೆಂಬಲಿಸಲಾರವು ಎಂದು ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the working tree is clean, so nothing changed.\" Two files had changed in commits.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಕೆಲಸದ ಮರ ಸ್ವಚ್ಛ, ಆದ್ದರಿಂದ ಏನೂ ಬದಲಾಗಿಲ್ಲ.\" ಎರಡು ಫೈಲ್‌ಗಳು commits ನಲ್ಲಿ ಬದಲಾಗಿದ್ದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Baseline commit: the recorded start of a task. Worktree: a second checkout of the same repository. Allowlist: the programs a runner may start. Argument list: a command as separate strings with no shell. Assumed rate: an invented number used to show a method.",
    "bodyKn": "Baseline commit: ಕಾರ್ಯದ ದಾಖಲಿತ ಆರಂಭ. Worktree: ಅದೇ repository ಯ ಎರಡನೇ checkout. Allowlist: runner ಆರಂಭಿಸಬಹುದಾದ ಪ್ರೋಗ್ರಾಂಗಳು. Argument list: shell ಇಲ್ಲದ ಪ್ರತ್ಯೇಕ strings ಆಗಿ ಆದೇಶ. Assumed rate: ವಿಧಾನ ತೋರಿಸಲು ಬಳಸುವ ಕಲ್ಪಿತ ಸಂಖ್ಯೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A clean tree hid two committed changes. 2) A worktree isolated an edit and left its branch behind. 3) Traversal and absolute paths were rejected. 4) A timeout stopped a sleeping command and a program outside the allowlist was refused. 5) With assumed rates, 5 trials per arm gave measured improvements from 0.0 to 0.8.",
    "bodyKn": "1) ಸ್ವಚ್ಛ ಮರ ಎರಡು commit ಮಾಡಿದ ಬದಲಾವಣೆ ಮರೆಮಾಡಿತು. 2) worktree ಸಂಪಾದನೆ ಪ್ರತ್ಯೇಕಿಸಿ ಅದರ branch ಬಿಟ್ಟಿತು. 3) Traversal ಮತ್ತು ನಿರಪೇಕ್ಷ paths ತಿರಸ್ಕೃತವಾದವು. 4) timeout ನಿದ್ರಿಸುವ ಆದೇಶ ನಿಲ್ಲಿಸಿತು ಮತ್ತು allowlist ಹೊರಗಿನ ಪ್ರೋಗ್ರಾಂ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು. 5) ಊಹಿಸಿದ ದರಗಳೊಂದಿಗೆ ಪ್ರತಿ ಬದಿಗೆ 5 ಪ್ರಯೋಗಗಳು 0.0 ರಿಂದ 0.8 ಅಳೆದ ಸುಧಾರಣೆ ನೀಡಿದವು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did git status --porcelain print after the agent committed its work?",
      "qKn": "agent ತನ್ನ ಕೆಲಸ commit ಮಾಡಿದ ನಂತರ git status --porcelain ಏನು ಮುದ್ರಿಸಿತು?",
      "opts": [
       "An empty string",
       "Two file names",
       "An error",
       "The baseline hash"
      ],
      "optsKn": [
       "ಖಾಲಿ ಸ್ಟ್ರಿಂಗ್",
       "ಎರಡು ಫೈಲ್ ಹೆಸರುಗಳು",
       "ದೋಷ",
       "baseline hash"
      ],
      "correct": 0
     },
     {
      "q": "What remained after the worktree was removed?",
      "qKn": "worktree ತೆಗೆದ ನಂತರ ಏನು ಉಳಿಯಿತು?",
      "opts": [
       "The task-signup branch",
       "The edit in main",
       "Nothing",
       "The worktree folder"
      ],
      "optsKn": [
       "task-signup branch",
       "main ನಲ್ಲಿನ ಸಂಪಾದನೆ",
       "ಏನೂ ಇಲ್ಲ",
       "worktree ಫೋಲ್ಡರ್"
      ],
      "correct": 0
     },
     {
      "q": "What verdict did exit 0 with zero tests get from verify_task?",
      "qKn": "ಶೂನ್ಯ ಪರೀಕ್ಷೆಗಳೊಂದಿಗೆ exit 0 ಗೆ verify_task ಯಾವ ತೀರ್ಪು ನೀಡಿತು?",
      "opts": [
       "BLOCK",
       "ALLOW",
       "WARN",
       "SKIP"
      ],
      "optsKn": [
       "BLOCK",
       "ALLOW",
       "WARN",
       "SKIP"
      ],
      "correct": 0
     },
     {
      "q": "What range of measured improvement did 5 trials per arm give under the assumed rates?",
      "qKn": "ಊಹಿಸಿದ ದರಗಳಲ್ಲಿ ಪ್ರತಿ ಬದಿಗೆ 5 ಪ್ರಯೋಗಗಳು ಯಾವ ವ್ಯಾಪ್ತಿಯ ಅಳೆದ ಸುಧಾರಣೆ ನೀಡಿದವು?",
      "opts": [
       "0.0 to 0.8",
       "0.19 to 0.27",
       "Exactly 0.24",
       "Always negative"
      ],
      "optsKn": [
       "0.0 ರಿಂದ 0.8",
       "0.19 ರಿಂದ 0.27",
       "ನಿಖರವಾಗಿ 0.24",
       "ಯಾವಾಗಲೂ ಋಣಾತ್ಮಕ"
      ],
      "correct": 0
     },
     {
      "q": "Are the failure rates in the last section measurements?",
      "qKn": "ಕೊನೆಯ ವಿಭಾಗದ ವೈಫಲ್ಯ ದರಗಳು ಅಳತೆಗಳೇ?",
      "opts": [
       "No, they are assumptions",
       "Yes",
       "Only the 30%",
       "Only the 80%"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಅವು ಊಹೆಗಳು",
       "ಹೌದು",
       "30% ಮಾತ್ರ",
       "80% ಮಾತ್ರ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
