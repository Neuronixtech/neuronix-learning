module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321574",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Initialization Scripts for Agents (Part 3 of 3) — Baselines, Budgets, Caches and Gates",
 "titleKn": "Agents ಗಾಗಿ ಆರಂಭ ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳು (ಭಾಗ 3 / 3) — Baselines, ಬಜೆಟ್‌ಗಳು, Caches ಮತ್ತು Gates",
 "desc": "Anchor a task to a baseline commit on a real git repository, validate a dependency cache by its inputs and gate an agent launcher on the initializer exit code.",
 "descKn": "ನಿಜ git repository ಮೇಲೆ ಕಾರ್ಯವನ್ನು baseline commit ಗೆ anchor ಮಾಡಿ, dependency ಕ್ಯಾಶ್ ಅನ್ನು ಅದರ ಇನ್‌ಪುಟ್‌ಗಳಿಂದ ಮಾನ್ಯಗೊಳಿಸಿ ಮತ್ತು agent ಲಾಂಚರ್ ಅನ್ನು initializer exit code ಮೇಲೆ gate ಮಾಡಿ.",
 "objectives": [
  "Compare against a recorded baseline commit.",
  "Count untracked and committed changes.",
  "Invalidate caches by their inputs.",
  "Gate the launcher on the exit code.",
  "Confirm initialization has no side effects."
 ],
 "objectivesKn": [
  "ದಾಖಲಿಸಿದ baseline commit ವಿರುದ್ಧ ಹೋಲಿಸಿ.",
  "ಟ್ರ್ಯಾಕ್ ಮಾಡದ ಮತ್ತು commit ಮಾಡಿದ ಬದಲಾವಣೆಗಳನ್ನು ಎಣಿಸಿ.",
  "ಕ್ಯಾಶ್‌ಗಳನ್ನು ಅವುಗಳ ಇನ್‌ಪುಟ್‌ಗಳಿಂದ ಅಮಾನ್ಯಗೊಳಿಸಿ.",
  "ಲಾಂಚರ್ ಅನ್ನು exit code ಮೇಲೆ gate ಮಾಡಿ.",
  "ಆರಂಭಕ್ಕೆ ಪಾರ್ಶ್ವ ಪರಿಣಾಮ ಇಲ್ಲ ಎಂದು ದೃಢೀಕರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Initialization Scripts for Agents (Part 3 of 3)",
    "textKn": "Agents ಗಾಗಿ ಆರಂಭ ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳು (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: last-known-good anchoring and a change budget on a real git repository, a dependency cache, a gated launcher and a no-side-effects check. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind initialization scripts for agents (readiness probes, reports, gates and anchors), not the real software, and the probes run against this machine and a temporary git repository and no language model is involved, so no real LLM behaviour is measured. The pasted lesson said its original main.py was not supplied, so the lab is our own implementation of the behaviour it describes; results depend on the machine it ran on. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ನಿಜ git repository ಮೇಲೆ ಕೊನೆಯ-ಒಳ್ಳೆಯ anchoring ಮತ್ತು ಬದಲಾವಣೆ ಬಜೆಟ್, dependency ಕ್ಯಾಶ್, gate ಇರುವ ಲಾಂಚರ್ ಮತ್ತು ಪಾರ್ಶ್ವ-ಪರಿಣಾಮ-ಇಲ್ಲದ ಪರಿಶೀಲನೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು agents ಗಾಗಿ ಆರಂಭ ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳು (ಸಿದ್ಧತೆ probes, ವರದಿಗಳು, gates ಮತ್ತು anchors) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು probes ಈ ಯಂತ್ರ ಮತ್ತು ತಾತ್ಕಾಲಿಕ git repository ಮೇಲೆ ಓಡುತ್ತವೆ ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಮೂಲ main.py ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ; ಫಲಿತಾಂಶಗಳು ಅದು ಓಡಿದ ಯಂತ್ರವನ್ನು ಅವಲಂಬಿಸಿವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Production Hardening",
    "textKn": "Production ಬಲಪಡಿಸುವಿಕೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Baselines, Budgets and Caches",
    "headingKn": "Baselines, ಬಜೆಟ್‌ಗಳು ಮತ್ತು Caches",
    "bodyEn": "Before an agent starts, an initializer can record a last-known-good commit and refuse to proceed when the working tree has drifted too far, cache expensive dependency checks, and sit in front of the agent as a gate. This part uses a real temporary git repository for the change budget, tests what invalidates a cache, runs a launcher that starts the agent only after an exit code of zero and checks that initialization leaves the repository unchanged. A first version of the git helper stripped the leading space of the first porcelain line and printed \"rc/app.py\"; the helper was fixed.",
    "bodyKn": "agent ಆರಂಭವಾಗುವ ಮುನ್ನ, initializer ಕೊನೆಯ-ಒಳ್ಳೆಯ commit ದಾಖಲಿಸಿ ಕೆಲಸದ ಮರ ತುಂಬಾ ದೂರ ಸರಿದಾಗ ಮುಂದುವರಿಯಲು ನಿರಾಕರಿಸಬಹುದು, ದುಬಾರಿ dependency ಪರಿಶೀಲನೆಗಳನ್ನು ಕ್ಯಾಶ್ ಮಾಡಬಹುದು ಮತ್ತು agent ಮುಂದೆ gate ಆಗಿ ನಿಲ್ಲಬಹುದು. ಈ ಭಾಗ ಬದಲಾವಣೆ ಬಜೆಟ್‌ಗೆ ನಿಜ ತಾತ್ಕಾಲಿಕ git repository ಬಳಸಿ, ಕ್ಯಾಶ್ ಅಮಾನ್ಯಗೊಳಿಸುವುದು ಏನು ಎಂದು ಪರೀಕ್ಷಿಸಿ, exit code ಶೂನ್ಯದ ನಂತರ ಮಾತ್ರ agent ಆರಂಭಿಸುವ ಲಾಂಚರ್ ಓಡಿಸಿ ಮತ್ತು ಆರಂಭ repository ಬದಲಾಗದೆ ಬಿಡುತ್ತದೆ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ. git helper ನ ಮೊದಲ ಆವೃತ್ತಿ ಮೊದಲ porcelain ಸಾಲಿನ ಮುಂದಿನ ಖಾಲಿಸ್ಥಳ ತೆಗೆದು \"rc/app.py\" ಮುದ್ರಿಸಿತು; helper ಸರಿಪಡಿಸಲಾಯಿತು."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Anchors and Caches",
    "headingKn": "Anchors ಮತ್ತು Caches",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Anchors and caches</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">baseline commit</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">recorded start</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">change budget</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">files over limit</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">cache</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">ttl + manifest hash</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">launcher</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">starts on exit 0 only</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a cache is valid only for the inputs it saw</text></svg>",
    "captionEn": "A cache is valid only for the inputs it saw.",
    "captionKn": "ಕ್ಯಾಶ್ ಅದು ಕಂಡ ಇನ್‌ಪುಟ್‌ಗಳಿಗೆ ಮಾತ್ರ ಮಾನ್ಯ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Gates and what they compare",
    "headingKn": "Gates ಮತ್ತು ಅವು ಹೋಲಿಸುವುದು",
    "headers": [
     "Gate",
     "Compares",
     "On failure"
    ],
    "rows": [
     [
      "change budget",
      "files changed since the baseline commit",
      "stop and ask a human"
     ],
     [
      "dependency cache",
      "age, manifest hash and runtime",
      "rerun the probes"
     ],
     [
      "launcher",
      "initializer exit code",
      "do not start the agent"
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
    "filename": "in_3.py",
    "headingEn": "git helpers, the change budget and the cache validity check",
    "headingKn": "git helpers, ಬದಲಾವಣೆ ಬಜೆಟ್ ಮತ್ತು ಕ್ಯಾಶ್ ಮಾನ್ಯತೆ ಪರಿಶೀಲನೆ",
    "descEn": "changed_since combines the files changed between a baseline commit and HEAD with the working tree and untracked files, so committed changes are not missed. scope_check compares the count with a budget. cache_valid requires the cache to be recent and its manifest hash and runtime to match.",
    "descKn": "changed_since baseline commit ಮತ್ತು HEAD ನಡುವೆ ಬದಲಾದ ಫೈಲ್‌ಗಳನ್ನು ಕೆಲಸದ ಮರ ಮತ್ತು ಟ್ರ್ಯಾಕ್ ಮಾಡದ ಫೈಲ್‌ಗಳೊಂದಿಗೆ ಸಂಯೋಜಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ commit ಮಾಡಿದ ಬದಲಾವಣೆಗಳು ತಪ್ಪುವುದಿಲ್ಲ. scope_check ಎಣಿಕೆಯನ್ನು ಬಜೆಟ್‌ನೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ. cache_valid ಕ್ಯಾಶ್ ಇತ್ತೀಚಿನದಾಗಿರಬೇಕು ಮತ್ತು ಅದರ manifest hash ಹಾಗೂ runtime ಹೊಂದಬೇಕು.",
    "code": "GIT = [\"git\", \"-c\", \"user.name=lab\", \"-c\", \"user.email=lab@example.com\", \"-c\", \"commit.gpgsign=false\"]\n\n\ndef git(repo, *args, strip=True):\n    out = subprocess.run(GIT + list(args), cwd=repo, capture_output=True, text=True, check=True).stdout\n    return out.strip() if strip else out.rstrip(chr(10))\n\n\ndef changed_since(repo, base):\n    committed = set(git(repo, \"diff\", \"--name-only\", f\"{base}..HEAD\").splitlines())\n    working = set(git(repo, \"status\", \"--porcelain\", \"--untracked-files=all\", strip=False).splitlines())\n    working = {line[3:] for line in working}\n    return committed | working\n\n\ndef scope_check(repo, base, budget):\n    files = sorted(changed_since(repo, base))\n    return (\"fail\" if len(files) > budget else \"pass\"), len(files)\n\n\ndef sha(path):\n    return hashlib.sha256(Path(path).read_bytes()).hexdigest()\n\n\ndef cache_valid(cache, manifest, now, ttl, runtime):\n    if not cache:\n        return False, \"no cache\"\n    if now - cache[\"checked_at\"] > ttl:\n        return False, \"expired\"\n    if cache[\"manifest_sha\"] != sha(manifest):\n        return False, \"manifest changed\"\n    if cache[\"runtime\"] != runtime:\n        return False, \"runtime changed\"\n    return True, \"fresh and inputs unchanged\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "in_3.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() builds a temporary git repository and measures the change budget before and after committing, tests the cache against age, manifest and runtime changes, runs a launcher through two initializers and compares repository hashes around two read-only runs.",
    "descKn": "main() ತಾತ್ಕಾಲಿಕ git repository ನಿರ್ಮಿಸಿ commit ಮಾಡುವ ಮುನ್ನ ಮತ್ತು ನಂತರ ಬದಲಾವಣೆ ಬಜೆಟ್ ಅಳೆದು, ಕ್ಯಾಶ್ ಅನ್ನು ವಯಸ್ಸು, manifest ಮತ್ತು runtime ಬದಲಾವಣೆಗಳ ವಿರುದ್ಧ ಪರೀಕ್ಷಿಸಿ, ಎರಡು initializers ಮೂಲಕ ಲಾಂಚರ್ ಓಡಿಸಿ ಎರಡು ಓದಲು-ಮಾತ್ರ ಓಟಗಳ ಸುತ್ತ repository hash ಹೋಲಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    with tempfile.TemporaryDirectory() as d:\n        repo = Path(d) / \"repo\"\n        repo.mkdir()\n        git(repo, \"init\", \"-q\")\n        (repo / \"src\").mkdir()\n        (repo / \"src\" / \"app.py\").write_text(\"v1\\n\", encoding=\"utf-8\")\n        git(repo, \"add\", \"-A\"); git(repo, \"commit\", \"-q\", \"-m\", \"baseline\")\n        base = git(repo, \"rev-parse\", \"HEAD\")\n\n        section(\"1. Genuinely running: change budget against the last-known-good commit (real git)\")\n        print(\"clean tree:\", scope_check(repo, base, 3))\n        (repo / \"src\" / \"app.py\").write_text(\"v2\\n\", encoding=\"utf-8\")\n        print(\"one modified file:\", scope_check(repo, base, 3))\n        for i in range(4):\n            (repo / f\"new{i}.txt\").write_text(\"x\", encoding=\"utf-8\")\n        print(\"one modified plus four untracked files, budget 3:\", scope_check(repo, base, 3))\n        print(\"changed paths:\", sorted(changed_since(repo, base)))\n        print(\"the budget counted untracked files as well; it is a coarse scope control, a single sensitive file can matter more than fifty documents, and exceeding it means a human decides, not that the baseline moves automatically\")\n\n        section(\"2. Genuinely checking: committed changes versus a clean working tree\")\n        git(repo, \"add\", \"-A\"); git(repo, \"commit\", \"-q\", \"-m\", \"agent work\")\n        print(\"git status --porcelain after committing:\", repr(git(repo, \"status\", \"--porcelain\")))\n        print(\"budget check still sees the committed changes:\", scope_check(repo, base, 3))\n        print(\"a clean working tree does not mean nothing changed: the agent could have committed everything, so the comparison is against the recorded baseline commit and not against the current index\")\n\n        section(\"3. Genuinely checking: the dependency cache and what invalidates it\")\n        manifest = Path(d) / \"requirements.txt\"\n        manifest.write_text(\"pytest\\n\", encoding=\"utf-8\")\n        now = time.time()\n        cache = {\"checked_at\": now - 3600, \"manifest_sha\": sha(manifest), \"runtime\": \"3.14\", \"result\": \"pass\"}\n        ttl = 24 * 3600\n        print(\"fresh cache:\", cache_valid(cache, manifest, now, ttl, \"3.14\"))\n        print(\"23 days later:\", cache_valid(cache, manifest, now + 23 * 86400, ttl, \"3.14\"))\n        manifest.write_text(\"pytest\\nrequests\\n\", encoding=\"utf-8\")\n        print(\"manifest edited ten minutes after the check:\", cache_valid(cache, manifest, now + 600, ttl, \"3.14\"))\n        manifest.write_text(\"pytest\\n\", encoding=\"utf-8\")\n        print(\"a different Python version:\", cache_valid(cache, manifest, now, ttl, \"3.12\"))\n        print(\"a time-to-live alone would have trusted the cache after the manifest changed; the cache is valid only while it is recent and the manifest and runtime it was computed for are unchanged\")\n\n        section(\"4. Genuinely running: a launcher that only starts the agent when the initializer exits zero\")\n        init_ok = \"import sys; print('init ok'); sys.exit(0)\"\n        init_bad = \"import sys; print('init BLOCKED: tests command missing'); sys.exit(1)\"\n        agent = \"print('AGENT STARTED')\"\n        for label, init in ((\"healthy initializer\", init_ok), (\"blocked initializer\", init_bad)):\n            p1 = subprocess.run([sys.executable, \"-c\", init], capture_output=True, text=True)\n            started = False\n            if p1.returncode == 0:\n                p2 = subprocess.run([sys.executable, \"-c\", agent], capture_output=True, text=True)\n                started = \"AGENT STARTED\" in p2.stdout\n            print(f\"{label:20} initializer printed {p1.stdout.strip()!r:40} exit {p1.returncode} | agent started: {started}\")\n        print(\"the gate is the exit code in the launcher; a message printed to the console does not stop anything by itself\")\n\n        section(\"5. Genuinely checking: initialization changes nothing\")\n        before = {p.name: sha(p) for p in repo.rglob(\"*\") if p.is_file() and \".git\" not in p.parts}\n        for _ in range(2):\n            subprocess.run([sys.executable, \"-c\", \"import sys, shutil, os; print(sys.version_info[:2], shutil.which('python') is not None)\"], capture_output=True, text=True)\n        after = {p.name: sha(p) for p in repo.rglob(\"*\") if p.is_file() and \".git\" not in p.parts}\n        print(\"repository files unchanged by two initialization-style runs:\", before == after)\n        print(\"a read-only initializer can be rerun safely; one that installed packages or rewrote state would have changed this answer, and the lesson keeps installation outside the probes\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: change budget against the last-known-good commit (real git) ---\nclean tree: ('pass', 0)\none modified file: ('pass', 1)\none modified plus four untracked files, budget 3: ('fail', 5)\nchanged paths: ['new0.txt', 'new1.txt', 'new2.txt', 'new3.txt', 'src/app.py']\nthe budget counted untracked files as well; it is a coarse scope control, a single sensitive file can matter more than fifty documents, and exceeding it means a human decides, not that the baseline moves automatically\n\n--- 2. Genuinely checking: committed changes versus a clean working tree ---\ngit status --porcelain after committing: ''\nbudget check still sees the committed changes: ('fail', 5)\na clean working tree does not mean nothing changed: the agent could have committed everything, so the comparison is against the recorded baseline commit and not against the current index\n\n--- 3. Genuinely checking: the dependency cache and what invalidates it ---\nfresh cache: (True, 'fresh and inputs unchanged')\n23 days later: (False, 'expired')\nmanifest edited ten minutes after the check: (False, 'manifest changed')\na different Python version: (False, 'runtime changed')\na time-to-live alone would have trusted the cache after the manifest changed; the cache is valid only while it is recent and the manifest and runtime it was computed for are unchanged\n\n--- 4. Genuinely running: a launcher that only starts the agent when the initializer exits zero ---\nhealthy initializer  initializer printed 'init ok'                                exit 0 | agent started: True\nblocked initializer  initializer printed 'init BLOCKED: tests command missing'    exit 1 | agent started: False\nthe gate is the exit code in the launcher; a message printed to the console does not stop anything by itself\n\n--- 5. Genuinely checking: initialization changes nothing ---\nrepository files unchanged by two initialization-style runs: True\na read-only initializer can be rerun safely; one that installed packages or rewrote state would have changed this answer, and the lesson keeps installation outside the probes"
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
    "headingEn": "Experiment 1: Change budget against the last-known-good commit (real git)",
    "headingKn": "ಪ್ರಯೋಗ 1: Change budget against the last-known-good commit (real git)",
    "bodyEn": "What it ran: Change budget against the last-known-good commit (real git). What the lab concluded: the budget counted untracked files as well; it is a coarse scope control, a single sensitive file can matter more than fifty documents, and exceeding it means a human decides, not that the baseline moves automatically",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Change budget against the last-known-good commit (real git). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the budget counted untracked files as well; it is a coarse scope control, a single sensitive file can matter more than fifty documents, and exceeding it means a human decides, not that the baseline moves automatically"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: change budget against the last-known-good commit (real git) ---\nclean tree: ('pass', 0)\none modified file: ('pass', 1)\none modified plus four untracked files, budget 3: ('fail', 5)\nchanged paths: ['new0.txt', 'new1.txt', 'new2.txt', 'new3.txt', 'src/app.py']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Committed changes versus a clean working tree",
    "headingKn": "ಪ್ರಯೋಗ 2: Committed changes versus a clean working tree",
    "bodyEn": "What it ran: Committed changes versus a clean working tree. What the lab concluded: a clean working tree does not mean nothing changed: the agent could have committed everything, so the comparison is against the recorded baseline commit and not against the current index",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Committed changes versus a clean working tree. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a clean working tree does not mean nothing changed: the agent could have committed everything, so the comparison is against the recorded baseline commit and not against the current index"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely checking: committed changes versus a clean working tree ---\ngit status --porcelain after committing: ''\nbudget check still sees the committed changes: ('fail', 5)"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: The dependency cache and what invalidates it",
    "headingKn": "ಪ್ರಯೋಗ 3: The dependency cache and what invalidates it",
    "bodyEn": "What it ran: The dependency cache and what invalidates it. What the lab concluded: a time-to-live alone would have trusted the cache after the manifest changed; the cache is valid only while it is recent and the manifest and runtime it was computed for are unchanged",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The dependency cache and what invalidates it. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a time-to-live alone would have trusted the cache after the manifest changed; the cache is valid only while it is recent and the manifest and runtime it was computed for are unchanged"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely checking: the dependency cache and what invalidates it ---\nfresh cache: (True, 'fresh and inputs unchanged')\n23 days later: (False, 'expired')\nmanifest edited ten minutes after the check: (False, 'manifest changed')\na different Python version: (False, 'runtime changed')"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A launcher that only starts the agent when the initializer exits zero",
    "headingKn": "ಪ್ರಯೋಗ 4: A launcher that only starts the agent when the initializer exits zero",
    "bodyEn": "What it ran: A launcher that only starts the agent when the initializer exits zero. What the lab concluded: the gate is the exit code in the launcher; a message printed to the console does not stop anything by itself",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A launcher that only starts the agent when the initializer exits zero. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the gate is the exit code in the launcher; a message printed to the console does not stop anything by itself"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a launcher that only starts the agent when the initializer exits zero ---\nhealthy initializer  initializer printed 'init ok'                                exit 0 | agent started: True\nblocked initializer  initializer printed 'init BLOCKED: tests command missing'    exit 1 | agent started: False"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Initialization changes nothing",
    "headingKn": "ಪ್ರಯೋಗ 5: Initialization changes nothing",
    "bodyEn": "What it ran: Initialization changes nothing. What the lab concluded: a read-only initializer can be rerun safely; one that installed packages or rewrote state would have changed this answer, and the lesson keeps installation outside the probes",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Initialization changes nothing. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a read-only initializer can be rerun safely; one that installed packages or rewrote state would have changed this answer, and the lesson keeps installation outside the probes"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely checking: initialization changes nothing ---\nrepository files unchanged by two initialization-style runs: True"
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
    "headingEn": "Genuinely Found: The Baseline Commit, Not the Index, Defines Scope",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Baseline commit ಯೇ, index ಅಲ್ಲ, ವ್ಯಾಪ್ತಿ ನಿರ್ಧರಿಸುತ್ತದೆ",
    "bodyEn": "Section 1 (real git): a clean tree counted 0 changed files; one modified file counted 1; one modified plus four untracked files counted 5 and failed a budget of 3, with the changed paths listed. Section 2: after committing everything, git status --porcelain was empty, yet the budget check against the baseline commit still saw 5 changed files and failed, so a clean working tree does not mean nothing changed.",
    "bodyKn": "ವಿಭಾಗ 1 (ನಿಜ git): ಸ್ವಚ್ಛ ಮರ 0 ಬದಲಾದ ಫೈಲ್ ಎಣಿಸಿತು; ಒಂದು ಮಾರ್ಪಡಿಸಿದ ಫೈಲ್ 1 ಎಣಿಸಿತು; ಒಂದು ಮಾರ್ಪಡಿಸಿದ ಮತ್ತು ನಾಲ್ಕು ಟ್ರ್ಯಾಕ್ ಮಾಡದ ಫೈಲ್‌ಗಳು 5 ಎಣಿಸಿ 3 ರ ಬಜೆಟ್ ವಿಫಲವಾಯಿತು, ಬದಲಾದ paths ಪಟ್ಟಿಯೊಂದಿಗೆ. ವಿಭಾಗ 2: ಎಲ್ಲವನ್ನೂ commit ಮಾಡಿದ ನಂತರ git status --porcelain ಖಾಲಿಯಾಗಿತ್ತು, ಆದರೂ baseline commit ವಿರುದ್ಧದ ಬಜೆಟ್ ಪರಿಶೀಲನೆ ಇನ್ನೂ 5 ಬದಲಾದ ಫೈಲ್‌ಗಳನ್ನು ಕಂಡು ವಿಫಲವಾಯಿತು, ಆದ್ದರಿಂದ ಸ್ವಚ್ಛ ಕೆಲಸದ ಮರ ಎಂದರೆ ಏನೂ ಬದಲಾಗಿಲ್ಲ ಎಂದಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Cache Is Valid Only for Its Inputs; the Gate Is the Exit Code",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕ್ಯಾಶ್ ಅದರ ಇನ್‌ಪುಟ್‌ಗಳಿಗೆ ಮಾತ್ರ ಮಾನ್ಯ; Gate ಯೇ Exit Code",
    "bodyEn": "Section 3: a cache from one hour earlier was valid; 23 days later with a 24-hour limit it had expired; a manifest edited ten minutes after the check invalidated it; and a different Python version invalidated it, where a time-to-live alone would have trusted it. Section 4: the healthy initializer exited 0 and the agent started; the blocked one printed a message and exited 1 and the agent did not start. Section 5: the repository file hashes were identical around two read-only runs.",
    "bodyKn": "ವಿಭಾಗ 3: ಒಂದು ಗಂಟೆ ಹಿಂದಿನ ಕ್ಯಾಶ್ ಮಾನ್ಯವಾಗಿತ್ತು; 24-ಗಂಟೆ ಮಿತಿಯೊಂದಿಗೆ 23 ದಿನಗಳ ನಂತರ ಅದು ಮುಕ್ತಾಯವಾಗಿತ್ತು; ಪರಿಶೀಲನೆಯ ಹತ್ತು ನಿಮಿಷಗಳ ನಂತರ ಸಂಪಾದಿಸಿದ manifest ಅದನ್ನು ಅಮಾನ್ಯಗೊಳಿಸಿತು; ಮತ್ತು ಬೇರೆ Python ಆವೃತ್ತಿ ಅದನ್ನು ಅಮಾನ್ಯಗೊಳಿಸಿತು, ಸಮಯ-ಮಿತಿ ಮಾತ್ರ ಇದ್ದಿದ್ದರೆ ಅದನ್ನು ನಂಬುತ್ತಿತ್ತು. ವಿಭಾಗ 4: ಆರೋಗ್ಯಕರ initializer 0 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸಿ agent ಆರಂಭವಾಯಿತು; ತಡೆಯಲ್ಪಟ್ಟದ್ದು ಸಂದೇಶ ಮುದ್ರಿಸಿ 1 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸಿ agent ಆರಂಭವಾಗಲಿಲ್ಲ. ವಿಭಾಗ 5: ಎರಡು ಓದಲು-ಮಾತ್ರ ಓಟಗಳ ಸುತ್ತ repository ಫೈಲ್ hash ಗಳು ಒಂದೇ ಆಗಿದ್ದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A baseline anchor, a cache that knows its inputs and a gate that acts on an exit code each stop a different kind of silent drift before the agent edits anything.",
    "bodyKn": "Baseline anchor, ತನ್ನ ಇನ್‌ಪುಟ್‌ಗಳನ್ನು ತಿಳಿದ ಕ್ಯಾಶ್ ಮತ್ತು exit code ಮೇಲೆ ಕ್ರಿಯೆ ಕೈಗೊಳ್ಳುವ gate ಪ್ರತಿಯೊಂದೂ agent ಏನನ್ನೂ ಸಂಪಾದಿಸುವ ಮುನ್ನ ಬೇರೆ ರೀತಿಯ ಮೌನ ಚಲನೆ ನಿಲ್ಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"git status is clean, so the agent changed nothing.\" Committed changes left the working tree clean and still exceeded the budget.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"git status ಸ್ವಚ್ಛ, ಆದ್ದರಿಂದ agent ಏನನ್ನೂ ಬದಲಿಸಿಲ್ಲ.\" Commit ಮಾಡಿದ ಬದಲಾವಣೆಗಳು ಕೆಲಸದ ಮರ ಸ್ವಚ್ಛ ಬಿಟ್ಟು ಇನ್ನೂ ಬಜೆಟ್ ಮೀರಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Last-known-good commit: the recorded baseline. Change budget: the most files a task may touch before review. Time-to-live: how long a cached result is trusted. Manifest hash: a digest of the dependency file. Gate: a check that actually blocks the next step.",
    "bodyKn": "Last-known-good commit: ದಾಖಲಿಸಿದ baseline. Change budget: ಪರಿಶೀಲನೆಗೆ ಮುನ್ನ ಕಾರ್ಯ ಮುಟ್ಟಬಹುದಾದ ಗರಿಷ್ಠ ಫೈಲ್‌ಗಳು. Time-to-live: ಕ್ಯಾಶ್ ಮಾಡಿದ ಫಲಿತಾಂಶ ಎಷ್ಟು ಕಾಲ ನಂಬಲ್ಪಡುತ್ತದೆ. Manifest hash: dependency ಫೈಲ್‌ನ digest. Gate: ಮುಂದಿನ ಹಂತವನ್ನು ನಿಜವಾಗಿ ತಡೆಯುವ ಪರಿಶೀಲನೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The budget counted untracked files and failed at 5 against 3. 2) A committed change left git status empty and still failed. 3) A cache was invalidated by expiry, a manifest edit and a runtime change. 4) The launcher started the agent only after exit 0. 5) Read-only initialization left the repository files identical.",
    "bodyKn": "1) ಬಜೆಟ್ ಟ್ರ್ಯಾಕ್ ಮಾಡದ ಫೈಲ್‌ಗಳನ್ನು ಎಣಿಸಿ 3 ವಿರುದ್ಧ 5 ರಲ್ಲಿ ವಿಫಲವಾಯಿತು. 2) commit ಮಾಡಿದ ಬದಲಾವಣೆ git status ಖಾಲಿ ಬಿಟ್ಟು ಇನ್ನೂ ವಿಫಲವಾಯಿತು. 3) ಕ್ಯಾಶ್ ಮುಕ್ತಾಯ, manifest ಸಂಪಾದನೆ ಮತ್ತು runtime ಬದಲಾವಣೆಯಿಂದ ಅಮಾನ್ಯವಾಯಿತು. 4) ಲಾಂಚರ್ exit 0 ನಂತರ ಮಾತ್ರ agent ಆರಂಭಿಸಿತು. 5) ಓದಲು-ಮಾತ್ರ ಆರಂಭ repository ಫೈಲ್‌ಗಳನ್ನು ಒಂದೇ ಬಿಟ್ಟಿತು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B in_3.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B in_3.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B in_3.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B in_3.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many changed files did the budget check count with one modified and four untracked files?",
      "qKn": "ಒಂದು ಮಾರ್ಪಡಿಸಿದ ಮತ್ತು ನಾಲ್ಕು ಟ್ರ್ಯಾಕ್ ಮಾಡದ ಫೈಲ್‌ಗಳೊಂದಿಗೆ ಬಜೆಟ್ ಪರಿಶೀಲನೆ ಎಷ್ಟು ಬದಲಾದ ಫೈಲ್ ಎಣಿಸಿತು?",
      "opts": [
       "1",
       "4",
       "5",
       "0"
      ],
      "optsKn": [
       "1",
       "4",
       "5",
       "0"
      ],
      "correct": 2
     },
     {
      "q": "Why did the budget check still fail after everything was committed?",
      "qKn": "ಎಲ್ಲವನ್ನೂ commit ಮಾಡಿದ ನಂತರವೂ ಬಜೆಟ್ ಪರಿಶೀಲನೆ ಏಕೆ ವಿಫಲವಾಯಿತು?",
      "opts": [
       "It compares with the baseline commit",
       "git was broken",
       "The tree was dirty",
       "The cache expired"
      ],
      "optsKn": [
       "ಅದು baseline commit ಜೊತೆ ಹೋಲಿಸುತ್ತದೆ",
       "git ಮುರಿದಿತ್ತು",
       "ಮರ ಕೊಳಕಾಗಿತ್ತು",
       "ಕ್ಯಾಶ್ ಮುಕ್ತಾಯವಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What invalidated the cache when the manifest was edited ten minutes later?",
      "qKn": "ಹತ್ತು ನಿಮಿಷಗಳ ನಂತರ manifest ಸಂಪಾದಿಸಿದಾಗ ಕ್ಯಾಶ್ ಅನ್ನು ಏನು ಅಮಾನ್ಯಗೊಳಿಸಿತು?",
      "opts": [
       "The manifest hash changed",
       "The age",
       "The runtime",
       "Nothing"
      ],
      "optsKn": [
       "Manifest hash ಬದಲಾಯಿತು",
       "ವಯಸ್ಸು",
       "Runtime",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "When did the launcher start the agent?",
      "qKn": "ಲಾಂಚರ್ ಯಾವಾಗ agent ಆರಂಭಿಸಿತು?",
      "opts": [
       "Always",
       "Only after the initializer exited 0",
       "Only on exit 1",
       "Never"
      ],
      "optsKn": [
       "ಯಾವಾಗಲೂ",
       "Initializer 0 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸಿದ ನಂತರ ಮಾತ್ರ",
       "Exit 1 ನಲ್ಲಿ ಮಾತ್ರ",
       "ಎಂದೂ ಇಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "What bug did the first git helper have?",
      "qKn": "ಮೊದಲ git helper ಗೆ ಯಾವ ದೋಷ ಇತ್ತು?",
      "opts": [
       "strip() removed the leading space of the first porcelain line",
       "It ignored commits",
       "It deleted files",
       "It had no budget"
      ],
      "optsKn": [
       "strip() ಮೊದಲ porcelain ಸಾಲಿನ ಮುಂದಿನ ಖಾಲಿಸ್ಥಳ ತೆಗೆದಿತು",
       "ಅದು commits ನಿರ್ಲಕ್ಷಿಸಿತು",
       "ಅದು ಫೈಲ್‌ಗಳನ್ನು ಅಳಿಸಿತು",
       "ಅದಕ್ಕೆ ಬಜೆಟ್ ಇರಲಿಲ್ಲ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
