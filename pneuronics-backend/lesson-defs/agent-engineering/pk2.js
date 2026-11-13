module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6366020ed05b321589",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Capstone: Ship a Reusable Agent Workbench Pack (Part 2 of 3) — A Safe, Idempotent Installer",
 "titleKn": "Capstone: ಮರುಬಳಕೆಯ Agent Workbench ಪ್ಯಾಕ್ ಕಳುಹಿಸಿ (ಭಾಗ 2 / 3) — ಸುರಕ್ಷಿತ, Idempotent Installer",
 "desc": "Build an installer that skips when installed, needs --force to overwrite, writes a version lock and stages files so a crash leaves nothing half-installed.",
 "descKn": "ಸ್ಥಾಪಿತವಾಗಿದ್ದರೆ ಬಿಡುವ, ಮೇಲ್ಬರೆಯಲು --force ಬೇಕಾದ, ಆವೃತ್ತಿ lock ಬರೆಯುವ ಮತ್ತು crash ಏನನ್ನೂ ಅರ್ಧ-ಸ್ಥಾಪಿತ ಬಿಡದಂತೆ ಫೈಲ್ ಜೋಡಿಸುವ installer ನಿರ್ಮಿಸಿ.",
 "objectives": [
  "Make an installer idempotent.",
  "Protect customisations by default.",
  "Write a version lock.",
  "Stage before copying.",
  "Know what a lock cannot detect."
 ],
 "objectivesKn": [
  "installer ಅನ್ನು idempotent ಮಾಡಿ.",
  "ಡೀಫಾಲ್ಟ್ ಆಗಿ ಕಸ್ಟಮೈಸೇಶನ್ ರಕ್ಷಿಸಿ.",
  "ಆವೃತ್ತಿ lock ಬರೆಯಿರಿ.",
  "ನಕಲಿಸುವ ಮುನ್ನ stage ಮಾಡಿ.",
  "lock ಏನು ಪತ್ತೆಹಚ್ಚಲಾರದು ತಿಳಿಯಿರಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Capstone: Ship a Reusable Agent Workbench Pack (Part 2 of 3)",
    "textKn": "Capstone: ಮರುಬಳಕೆಯ Agent Workbench ಪ್ಯಾಕ್ ಕಳುಹಿಸಿ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: the installer: existing-install detection, --force, a version lock, idempotency, verification and staged installation that survives a crash. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind shipping a reusable agent workbench pack (layout, manifest, installer, versions and distribution), not the real software, and the pack is a small one written by the lab, not the lesson's pack, and no language model is involved, so no real LLM behaviour is measured. The pasted Part 2 of this capstone was cut off near its end, after the sections on packaging rules and schemas; Part 3, which covers the installer, was pasted in full. The labs are our own installer written in Python and the pack is a small stand-in. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: installer: ಅಸ್ತಿತ್ವದ ಸ್ಥಾಪನೆ ಪತ್ತೆ, --force, ಆವೃತ್ತಿ lock, idempotency, ಪರಿಶೀಲನೆ ಮತ್ತು crash ಉಳಿಯುವ staged ಸ್ಥಾಪನೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಮರುಬಳಕೆಯ agent workbench ಪ್ಯಾಕ್ ಕಳುಹಿಸುವುದು (ವಿನ್ಯಾಸ, manifest, installer, ಆವೃತ್ತಿಗಳು ಮತ್ತು ವಿತರಣೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪ್ಯಾಕ್ ಲ್ಯಾಬ್ ಬರೆದ ಸಣ್ಣದು, lesson ನ ಪ್ಯಾಕ್ ಅಲ್ಲ, ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಈ capstone ನ ಅಂಟಿಸಿದ ಭಾಗ 2 ಅದರ ಕೊನೆಯ ಹತ್ತಿರ, ಪ್ಯಾಕೇಜಿಂಗ್ ನಿಯಮಗಳು ಮತ್ತು schemas ವಿಭಾಗಗಳ ನಂತರ, ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು; installer ಒಳಗೊಳ್ಳುವ ಭಾಗ 3 ಪೂರ್ಣವಾಗಿ ಅಂಟಿಸಲಾಗಿತ್ತು. ಲ್ಯಾಬ್‌ಗಳು Python ನಲ್ಲಿ ಬರೆದ ನಮ್ಮದೇ installer ಮತ್ತು ಪ್ಯಾಕ್ ಸಣ್ಣ ಬದಲಿ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Installation Is a Product Feature",
    "textKn": "ಸ್ಥಾಪನೆ ಒಂದು ಉತ್ಪನ್ನ ವೈಶಿಷ್ಟ್ಯ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Safe, Repeatable, Predictable",
    "headingKn": "ಸುರಕ್ಷಿತ, ಪುನರಾವರ್ತನೀಯ, ಊಹಿಸಬಹುದಾದ",
    "bodyEn": "The lesson lists installer goals: safe, repeatable, predictable, easy and idempotent. This part implements a small installer and tests each goal: a second run says already installed and changes nothing, --force is the only way to overwrite, a version lock records what was installed, and a staged copy keeps a crash from leaving a half-installed repository. It also finds the case a version lock cannot see: a repository that already has its own AGENTS.md.",
    "bodyKn": "lesson installer ಗುರಿಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ: ಸುರಕ್ಷಿತ, ಪುನರಾವರ್ತನೀಯ, ಊಹಿಸಬಹುದಾದ, ಸುಲಭ ಮತ್ತು idempotent. ಈ ಭಾಗ ಸಣ್ಣ installer ಅನ್ನು ಅನುಷ್ಠಾನಗೊಳಿಸಿ ಪ್ರತಿ ಗುರಿಯನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ: ಎರಡನೇ ಓಟ ಈಗಾಗಲೇ ಸ್ಥಾಪಿತ ಎಂದು ಹೇಳಿ ಏನನ್ನೂ ಬದಲಿಸುವುದಿಲ್ಲ, --force ಮಾತ್ರ ಮೇಲ್ಬರೆಯುವ ದಾರಿ, ಆವೃತ್ತಿ lock ಏನು ಸ್ಥಾಪಿಸಲಾಯಿತು ಎಂದು ದಾಖಲಿಸುತ್ತದೆ, ಮತ್ತು staged ನಕಲು crash ಅರ್ಧ-ಸ್ಥಾಪಿತ repository ಬಿಡದಂತೆ ತಡೆಯುತ್ತದೆ. ಆವೃತ್ತಿ lock ಗೆ ಕಾಣದ ಪ್ರಕರಣವನ್ನೂ ಅದು ಕಂಡುಹಿಡಿಯುತ್ತದೆ: ತನ್ನದೇ AGENTS.md ಇರುವ repository."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "A Safe Installer",
    "headingKn": "ಸುರಕ್ಷಿತ Installer",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">A safe installer</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">detect</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">version lock</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">stage</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">copy aside first</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">--force</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">explicit overwrite</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">idempotent</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">rerun changes nothing</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a lock does not detect foreign files</text></svg>",
    "captionEn": "Rerunning the installer must be safe.",
    "captionKn": "installer ಮರುಓಡಿಸುವುದು ಸುರಕ್ಷಿತವಾಗಿರಬೇಕು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Installer goals and the lab result",
    "headingKn": "Installer ಗುರಿಗಳು ಮತ್ತು ಲ್ಯಾಬ್ ಫಲಿತಾಂಶ",
    "headers": [
     "Goal",
     "Mechanism",
     "Result in the lab"
    ],
    "rows": [
     [
      "safe",
      "stop when a lock exists",
      "customisation kept without --force"
     ],
     [
      "idempotent",
      "skip when installed",
      "repeats left files identical"
     ],
     [
      "predictable",
      "same files and a lock",
      "same layout each time"
     ],
     [
      "crash-safe",
      "stage then copy",
      "nothing written before the crash"
     ],
     [
      "conflict-aware",
      "not provided by a lock",
      "a foreign AGENTS.md was overwritten"
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
    "filename": "pk_2.py",
    "headingEn": "install and the naive version",
    "headingKn": "install ಮತ್ತು ಸರಳ ಆವೃತ್ತಿ",
    "descEn": "install refuses a missing target, skips when a version lock exists unless force is set, copies the pack into a staging directory, writes the lock, copies to the target and checks the expected files exist. naive_install copies file by file straight into the target.",
    "descKn": "install ಕಾಣೆಯಾದ ಗುರಿ ನಿರಾಕರಿಸಿ, ಆವೃತ್ತಿ lock ಇದ್ದರೆ force ಹೊಂದಿಸದ ಹೊರತು ಬಿಟ್ಟು, ಪ್ಯಾಕ್ ಅನ್ನು staging ಡೈರೆಕ್ಟರಿಗೆ ನಕಲಿಸಿ, lock ಬರೆದು, ಗುರಿಗೆ ನಕಲಿಸಿ ನಿರೀಕ್ಷಿತ ಫೈಲ್‌ಗಳು ಇವೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ. naive_install ಫೈಲ್ ಫೈಲ್ ಆಗಿ ನೇರವಾಗಿ ಗುರಿಗೆ ನಕಲಿಸುತ್ತದೆ.",
    "code": "def install(pack, target, force=False, fail_after=None):\n    pack, target = Path(pack), Path(target)\n    if not target.is_dir():\n        return \"error\", f\"target does not exist: {target.name}\"\n    if (target / LOCK).exists() and not force:\n        return \"skipped\", f\"already installed ({(target / LOCK).read_text(encoding='utf-8').strip()}), nothing changed\"\n    version = (pack / \"VERSION\").read_text(encoding=\"utf-8\").strip()\n    stage = Path(tempfile.mkdtemp(dir=target.parent))\n    try:\n        for i, p in enumerate(sorted(q for q in pack.rglob(\"*\") if q.is_file())):\n            if fail_after is not None and i >= fail_after:\n                raise RuntimeError(\"simulated crash\")\n            dst = stage / p.relative_to(pack)\n            dst.parent.mkdir(parents=True, exist_ok=True)\n            shutil.copy2(p, dst)\n        (stage / LOCK).write_text(version + chr(10), encoding=\"utf-8\")\n        for p in sorted(q for q in stage.rglob(\"*\") if q.is_file()):\n            dst = target / p.relative_to(stage)\n            dst.parent.mkdir(parents=True, exist_ok=True)\n            shutil.copy2(p, dst)\n    except RuntimeError as e:\n        return \"failed\", str(e)\n    finally:\n        shutil.rmtree(stage, ignore_errors=True)\n    missing = [rel for rel in PACK if not (target / rel).is_file()]\n    return (\"installed\", f\"version {version}\") if not missing else (\"verify-failed\", f\"missing {missing}\")\n\n\ndef naive_install(pack, target, fail_after=None):\n    for i, p in enumerate(sorted(q for q in Path(pack).rglob(\"*\") if q.is_file())):\n        if fail_after is not None and i >= fail_after:\n            raise RuntimeError(\"simulated crash\")\n        dst = Path(target) / p.relative_to(pack)\n        dst.parent.mkdir(parents=True, exist_ok=True)\n        shutil.copy2(p, dst)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pk_2.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() installs three times and into a missing target, customises a file and installs with and without force, installs into a repository with its own AGENTS.md, simulates a crash in both installers and runs the installed verify script.",
    "descKn": "main() ಮೂರು ಬಾರಿ ಮತ್ತು ಕಾಣೆಯಾದ ಗುರಿಗೆ ಸ್ಥಾಪಿಸಿ, ಫೈಲ್ ಕಸ್ಟಮೈಸ್ ಮಾಡಿ force ಜೊತೆ ಮತ್ತು ಇಲ್ಲದೆ ಸ್ಥಾಪಿಸಿ, ತನ್ನದೇ AGENTS.md ಇರುವ repository ಗೆ ಸ್ಥಾಪಿಸಿ, ಎರಡೂ installers ನಲ್ಲಿ crash ಅನುಕರಿಸಿ ಮತ್ತು ಸ್ಥಾಪಿತ verify ಸ್ಕ್ರಿಪ್ಟ್ ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\n    with tempfile.TemporaryDirectory() as d:\n        root = Path(d)\n        pack = root / \"pack\"\n        pack.mkdir()\n        make_pack(pack)\n\n        section(\"1. Genuinely running: first install, repeat install, and a missing target\")\n        t = root / \"repo-a\"\n        t.mkdir()\n        print(\"first run  :\", install(pack, t))\n        snap = tree(t)\n        print(\"second run :\", install(pack, t))\n        print(\"third run  :\", install(pack, t))\n        print(\"files unchanged after the repeats:\", tree(t) == snap, \"| files:\", sorted(snap))\n        print(\"missing target:\", install(pack, root / \"nope\"))\n        print(\"the repeated runs reported 'already installed' and left every file byte-identical, which is what makes the installer safe to rerun from automation; a target that does not exist is an error and nothing is created\")\n\n        section(\"2. Genuinely running: the customised file and --force\")\n        (t / \"AGENTS.md\").write_text(\"# Rules\" + chr(10) + \"- our team's own rule\" + chr(10), encoding=\"utf-8\")\n        before = (t / \"AGENTS.md\").read_text(encoding=\"utf-8\")\n        print(\"without --force:\", install(pack, t)[0], \"| custom rule kept:\", \"our team's own rule\" in (t / \"AGENTS.md\").read_text(encoding=\"utf-8\"))\n        print(\"with --force   :\", install(pack, t, force=True)[0], \"| custom rule kept:\", \"our team's own rule\" in (t / \"AGENTS.md\").read_text(encoding=\"utf-8\"))\n        print(\"the team's customisation was protected by the default and destroyed by --force, with no backup made; the flag is an explicit decision to overwrite, and a safer installer would copy the old file aside first\")\n\n        section(\"3. Genuinely running: a repository that already has its own AGENTS.md\")\n        u = root / \"repo-b\"\n        u.mkdir()\n        (u / \"AGENTS.md\").write_text(\"# existing project rules\" + chr(10), encoding=\"utf-8\")\n        print(\"installer:\", install(pack, u)[0], \"| existing file now reads:\", (u / \"AGENTS.md\").read_text(encoding=\"utf-8\").strip())\n        print(\"the installer saw no version lock, so it treated the repository as fresh and overwrote a file it did not create; the lock only identifies earlier installs of the pack, so a conflict check against pre-existing files is a separate rule that a lock-only check does not provide\")\n\n        section(\"4. Genuinely measuring: a crash halfway through\")\n        a, b = root / \"repo-c\", root / \"repo-d\"\n        a.mkdir(); b.mkdir()\n        try:\n            naive_install(pack, a, fail_after=2)\n        except RuntimeError:\n            pass\n        print(\"naive copy after a crash : files\", sorted(tree(a)), \"| version lock present:\", LOCK in tree(a))\n        print(\"staged install after one :\", install(pack, b, fail_after=2), \"| files:\", sorted(tree(b)))\n        print(\"leftover staging directories next to the repos:\", sorted(p.name for p in root.iterdir() if p.name.startswith(\"tmp\")))\n        print(\"the naive copy left a repository with some pack files and no lock, which the next run would treat as a fresh install, while the staged install wrote nothing to the target before the crash; the copy from staging into the target is itself not atomic, so a crash during that last step could still leave a partial result\")\n\n        section(\"5. Genuinely running: the installed verify script works from the target\")\n        import subprocess\n        import sys\n        p = subprocess.run([sys.executable, \"-I\", str(t / \"scripts/verify_agent.py\")], capture_output=True, text=True)\n        print(\"installed script exit\", p.returncode, \"printed\", p.stdout.strip())\n        print(\"lock file says:\", (t / LOCK).read_text(encoding=\"utf-8\").strip())\n        print(\"the installed script ran from its new location and the lock records which pack version produced this layout, so a later upgrade can tell where the repository stands\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: first install, repeat install, and a missing target ---\nfirst run  : ('installed', 'version 1.2.0')\nsecond run : ('skipped', 'already installed (1.2.0), nothing changed')\nthird run  : ('skipped', 'already installed (1.2.0), nothing changed')\nfiles unchanged after the repeats: True | files: ['.workbench-version', 'AGENTS.md', 'VERSION', 'schemas/state.schema.json', 'scripts/verify_agent.py']\nmissing target: ('error', 'target does not exist: nope')\nthe repeated runs reported 'already installed' and left every file byte-identical, which is what makes the installer safe to rerun from automation; a target that does not exist is an error and nothing is created\n\n--- 2. Genuinely running: the customised file and --force ---\nwithout --force: skipped | custom rule kept: True\nwith --force   : installed | custom rule kept: False\nthe team's customisation was protected by the default and destroyed by --force, with no backup made; the flag is an explicit decision to overwrite, and a safer installer would copy the old file aside first\n\n--- 3. Genuinely running: a repository that already has its own AGENTS.md ---\ninstaller: installed | existing file now reads: # Rules\nthe installer saw no version lock, so it treated the repository as fresh and overwrote a file it did not create; the lock only identifies earlier installs of the pack, so a conflict check against pre-existing files is a separate rule that a lock-only check does not provide\n\n--- 4. Genuinely measuring: a crash halfway through ---\nnaive copy after a crash : files ['AGENTS.md', 'schemas/state.schema.json'] | version lock present: False\nstaged install after one : ('failed', 'simulated crash') | files: []\nleftover staging directories next to the repos: []\nthe naive copy left a repository with some pack files and no lock, which the next run would treat as a fresh install, while the staged install wrote nothing to the target before the crash; the copy from staging into the target is itself not atomic, so a crash during that last step could still leave a partial result\n\n--- 5. Genuinely running: the installed verify script works from the target ---\ninstalled script exit 0 printed ok\nlock file says: 1.2.0\nthe installed script ran from its new location and the lock records which pack version produced this layout, so a later upgrade can tell where the repository stands"
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
    "headingEn": "Experiment 1: First install, repeat install, and a missing target",
    "headingKn": "ಪ್ರಯೋಗ 1: First install, repeat install, and a missing target",
    "bodyEn": "What it ran: First install, repeat install, and a missing target. What the lab concluded: the repeated runs reported 'already installed' and left every file byte-identical, which is what makes the installer safe to rerun from automation; a target that does not exist is an error and nothing is created",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: First install, repeat install, and a missing target. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the repeated runs reported 'already installed' and left every file byte-identical, which is what makes the installer safe to rerun from automation; a target that does not exist is an error and nothing is created"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: first install, repeat install, and a missing target ---\nfirst run  : ('installed', 'version 1.2.0')\nsecond run : ('skipped', 'already installed (1.2.0), nothing changed')\nthird run  : ('skipped', 'already installed (1.2.0), nothing changed')\nfiles unchanged after the repeats: True | files: ['.workbench-version', 'AGENTS.md', 'VERSION', 'schemas/state.schema.json', 'scripts/verify_agent.py']\nmissing target: ('error', 'target does not exist: nope')"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: The customised file and --force",
    "headingKn": "ಪ್ರಯೋಗ 2: The customised file and --force",
    "bodyEn": "What it ran: The customised file and --force. What the lab concluded: the team's customisation was protected by the default and destroyed by --force, with no backup made; the flag is an explicit decision to overwrite, and a safer installer would copy the old file aside first",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The customised file and --force. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the team's customisation was protected by the default and destroyed by --force, with no backup made; the flag is an explicit decision to overwrite, and a safer installer would copy the old file aside first"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: the customised file and --force ---\nwithout --force: skipped | custom rule kept: True\nwith --force   : installed | custom rule kept: False"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: A repository that already has its own AGENTS.md",
    "headingKn": "ಪ್ರಯೋಗ 3: A repository that already has its own AGENTS.md",
    "bodyEn": "What it ran: A repository that already has its own AGENTS.md. What the lab concluded: the installer saw no version lock, so it treated the repository as fresh and overwrote a file it did not create; the lock only identifies earlier installs of the pack, so a conflict check against pre-existing files is a separate rule that a lock-only check does not provide",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A repository that already has its own AGENTS.md. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the installer saw no version lock, so it treated the repository as fresh and overwrote a file it did not create; the lock only identifies earlier installs of the pack, so a conflict check against pre-existing files is a separate rule that a lock-only check does not provide"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: a repository that already has its own AGENTS.md ---\ninstaller: installed | existing file now reads: # Rules"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A crash halfway through",
    "headingKn": "ಪ್ರಯೋಗ 4: A crash halfway through",
    "bodyEn": "What it ran: A crash halfway through. What the lab concluded: the naive copy left a repository with some pack files and no lock, which the next run would treat as a fresh install, while the staged install wrote nothing to the target before the crash; the copy from staging into the target is itself not atomic, so a crash during that last step could still leave a partial result",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A crash halfway through. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the naive copy left a repository with some pack files and no lock, which the next run would treat as a fresh install, while the staged install wrote nothing to the target before the crash; the copy from staging into the target is itself not atomic, so a crash during that last step could still leave a partial result"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely measuring: a crash halfway through ---\nnaive copy after a crash : files ['AGENTS.md', 'schemas/state.schema.json'] | version lock present: False\nstaged install after one : ('failed', 'simulated crash') | files: []\nleftover staging directories next to the repos: []"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: The installed verify script works from the target",
    "headingKn": "ಪ್ರಯೋಗ 5: The installed verify script works from the target",
    "bodyEn": "What it ran: The installed verify script works from the target. What the lab concluded: the installed script ran from its new location and the lock records which pack version produced this layout, so a later upgrade can tell where the repository stands",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The installed verify script works from the target. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the installed script ran from its new location and the lock records which pack version produced this layout, so a later upgrade can tell where the repository stands"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: the installed verify script works from the target ---\ninstalled script exit 0 printed ok\nlock file says: 1.2.0"
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
    "headingEn": "Genuinely Found: Idempotent and Safe by Default, Destructive With --force",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಡೀಫಾಲ್ಟ್ ಆಗಿ Idempotent ಮತ್ತು ಸುರಕ್ಷಿತ, --force ನೊಂದಿಗೆ ವಿನಾಶಕಾರಿ",
    "bodyEn": "Section 1: the first run installed version 1.2.0, the second and third reported already installed and left all five files byte-identical, and a missing target was an error. Section 2: with a team-customised AGENTS.md, the default run skipped and kept the custom rule, while --force installed and the custom rule was lost, with no backup.",
    "bodyKn": "ವಿಭಾಗ 1: ಮೊದಲ ಓಟ ಆವೃತ್ತಿ 1.2.0 ಸ್ಥಾಪಿಸಿತು, ಎರಡನೇ ಮತ್ತು ಮೂರನೇ ಈಗಾಗಲೇ ಸ್ಥಾಪಿತ ಎಂದು ವರದಿ ಮಾಡಿ ಎಲ್ಲಾ ಐದು ಫೈಲ್‌ಗಳನ್ನು ಬೈಟ್-ಒಂದೇ ಬಿಟ್ಟವು, ಮತ್ತು ಕಾಣೆಯಾದ ಗುರಿ ದೋಷವಾಗಿತ್ತು. ವಿಭಾಗ 2: ತಂಡ-ಕಸ್ಟಮೈಸ್ ಮಾಡಿದ AGENTS.md ಜೊತೆ, ಡೀಫಾಲ್ಟ್ ಓಟ ಬಿಟ್ಟು ಕಸ್ಟಮ್ ನಿಯಮ ಉಳಿಸಿತು, ಆದರೆ --force ಸ್ಥಾಪಿಸಿ ಕಸ್ಟಮ್ ನಿಯಮ ಕಳೆದುಹೋಯಿತು, ಬ್ಯಾಕಪ್ ಇಲ್ಲದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Lock Does Not See Foreign Files, and Crashes Need Staging",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Lock ಅನ್ಯ ಫೈಲ್‌ಗಳನ್ನು ಕಾಣುವುದಿಲ್ಲ, ಮತ್ತು Crash ಗೆ Staging ಬೇಕು",
    "bodyEn": "Section 3: a repository with its own AGENTS.md and no lock was treated as fresh, and the installer overwrote that file. Section 4: after a simulated crash the naive copy left AGENTS.md and the schema with no version lock, while the staged install failed and left no files in the target and no staging directory behind. Section 5: the installed verify script exited 0 and the lock read 1.2.0.",
    "bodyKn": "ವಿಭಾಗ 3: ತನ್ನದೇ AGENTS.md ಇರುವ ಮತ್ತು lock ಇಲ್ಲದ repository ಅನ್ನು ಹೊಸದೆಂದು ಪರಿಗಣಿಸಲಾಯಿತು, ಮತ್ತು installer ಆ ಫೈಲ್ ಅನ್ನು ಮೇಲ್ಬರೆದಿತು. ವಿಭಾಗ 4: ಅನುಕರಿಸಿದ crash ನಂತರ ಸರಳ ನಕಲು AGENTS.md ಮತ್ತು schema ಅನ್ನು ಆವೃತ್ತಿ lock ಇಲ್ಲದೆ ಬಿಟ್ಟಿತು, staged ಸ್ಥಾಪನೆ ವಿಫಲವಾಗಿ ಗುರಿಯಲ್ಲಿ ಯಾವುದೇ ಫೈಲ್ ಅಥವಾ staging ಡೈರೆಕ್ಟರಿ ಬಿಡಲಿಲ್ಲ. ವಿಭಾಗ 5: ಸ್ಥಾಪಿತ verify ಸ್ಕ್ರಿಪ್ಟ್ 0 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸಿತು ಮತ್ತು lock 1.2.0 ಓದಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "An installer that is idempotent, refuses to overwrite by default and cannot leave a half-installed repository is something automation can call safely.",
    "bodyKn": "idempotent ಆಗಿರುವ, ಡೀಫಾಲ್ಟ್ ಆಗಿ ಮೇಲ್ಬರೆಯಲು ನಿರಾಕರಿಸುವ ಮತ್ತು ಅರ್ಧ-ಸ್ಥಾಪಿತ repository ಬಿಡಲಾಗದ installer ಅನ್ನು ಸ್ವಯಂಚಾಲನೆ ಸುರಕ್ಷಿತವಾಗಿ ಕರೆಯಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the version lock tells the installer what is safe to overwrite.\" It only knows about earlier installs of the pack.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಯಾವುದನ್ನು ಮೇಲ್ಬರೆಯುವುದು ಸುರಕ್ಷಿತ ಎಂದು ಆವೃತ್ತಿ lock installer ಗೆ ಹೇಳುತ್ತದೆ.\" ಅದಕ್ಕೆ ಪ್ಯಾಕ್‌ನ ಹಿಂದಿನ ಸ್ಥಾಪನೆಗಳ ಬಗ್ಗೆ ಮಾತ್ರ ಗೊತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Idempotent: repeated runs are safe and give the same result. Version lock: a file recording the installed pack version. --force: an explicit decision to overwrite. Staging directory: a temporary place to assemble files first. Conflict: a file the pack would replace that the pack did not create.",
    "bodyKn": "Idempotent: ಪುನರಾವರ್ತಿತ ಓಟಗಳು ಸುರಕ್ಷಿತ ಮತ್ತು ಅದೇ ಫಲಿತಾಂಶ. Version lock: ಸ್ಥಾಪಿತ ಪ್ಯಾಕ್ ಆವೃತ್ತಿ ದಾಖಲಿಸುವ ಫೈಲ್. --force: ಮೇಲ್ಬರೆಯಲು ಸ್ಪಷ್ಟ ನಿರ್ಧಾರ. Staging directory: ಮೊದಲು ಫೈಲ್ ಜೋಡಿಸುವ ತಾತ್ಕಾಲಿಕ ಸ್ಥಳ. Conflict: ಪ್ಯಾಕ್ ಬದಲಿಸುವ ಆದರೆ ಪ್ಯಾಕ್ ರಚಿಸದ ಫೈಲ್."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Repeat runs changed nothing. 2) The default kept a customised file and --force destroyed it. 3) A foreign AGENTS.md was overwritten because no lock existed. 4) A naive copy left a half install, a staged one left nothing. 5) The installed script ran and the lock recorded the version.",
    "bodyKn": "1) ಪುನರಾವರ್ತಿತ ಓಟಗಳು ಏನನ್ನೂ ಬದಲಿಸಲಿಲ್ಲ. 2) ಡೀಫಾಲ್ಟ್ ಕಸ್ಟಮೈಸ್ ಮಾಡಿದ ಫೈಲ್ ಉಳಿಸಿತು ಮತ್ತು --force ನಾಶಮಾಡಿತು. 3) lock ಇಲ್ಲದ್ದರಿಂದ ಅನ್ಯ AGENTS.md ಮೇಲ್ಬರೆಯಲ್ಪಟ್ಟಿತು. 4) ಸರಳ ನಕಲು ಅರ್ಧ ಸ್ಥಾಪನೆ ಬಿಟ್ಟಿತು, staged ಒಂದು ಏನನ್ನೂ ಬಿಡಲಿಲ್ಲ. 5) ಸ್ಥಾಪಿತ ಸ್ಕ್ರಿಪ್ಟ್ ಓಡಿತು ಮತ್ತು lock ಆವೃತ್ತಿ ದಾಖಲಿಸಿತು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B pk_2.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B pk_2.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B pk_2.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B pk_2.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did the second install report?",
      "qKn": "ಎರಡನೇ ಸ್ಥಾಪನೆ ಏನು ವರದಿ ಮಾಡಿತು?",
      "opts": [
       "already installed, nothing changed",
       "installed again",
       "an error",
       "a crash"
      ],
      "optsKn": [
       "ಈಗಾಗಲೇ ಸ್ಥಾಪಿತ, ಏನೂ ಬದಲಾಗಲಿಲ್ಲ",
       "ಮತ್ತೆ ಸ್ಥಾಪಿಸಲಾಯಿತು",
       "ದೋಷ",
       "crash"
      ],
      "correct": 0
     },
     {
      "q": "What happened to the custom rule when --force was used?",
      "qKn": "--force ಬಳಸಿದಾಗ ಕಸ್ಟಮ್ ನಿಯಮಕ್ಕೆ ಏನಾಯಿತು?",
      "opts": [
       "It was lost",
       "It was kept",
       "It was merged",
       "It was backed up"
      ],
      "optsKn": [
       "ಕಳೆದುಹೋಯಿತು",
       "ಉಳಿಯಿತು",
       "ವಿಲೀನವಾಯಿತು",
       "ಬ್ಯಾಕಪ್ ಆಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "Why was the foreign AGENTS.md overwritten?",
      "qKn": "ಅನ್ಯ AGENTS.md ಏಕೆ ಮೇಲ್ಬರೆಯಲ್ಪಟ್ಟಿತು?",
      "opts": [
       "No version lock existed, so the repository looked fresh",
       "The pack was newer",
       "force was set",
       "The file was empty"
      ],
      "optsKn": [
       "ಆವೃತ್ತಿ lock ಇರಲಿಲ್ಲ, ಆದ್ದರಿಂದ repository ಹೊಸದಂತೆ ಕಂಡಿತು",
       "ಪ್ಯಾಕ್ ಹೊಸದಾಗಿತ್ತು",
       "force ಹೊಂದಿಸಲಾಗಿತ್ತು",
       "ಫೈಲ್ ಖಾಲಿ"
      ],
      "correct": 0
     },
     {
      "q": "What did the naive copy leave after a crash after two files?",
      "qKn": "ಎರಡು ಫೈಲ್‌ಗಳ ನಂತರ crash ಆದ ಮೇಲೆ ಸರಳ ನಕಲು ಏನು ಬಿಟ್ಟಿತು?",
      "opts": [
       "Two pack files and no version lock",
       "Nothing",
       "All files",
       "Only the lock"
      ],
      "optsKn": [
       "ಎರಡು ಪ್ಯಾಕ್ ಫೈಲ್‌ಗಳು ಮತ್ತು ಆವೃತ್ತಿ lock ಇಲ್ಲ",
       "ಏನೂ ಇಲ್ಲ",
       "ಎಲ್ಲಾ ಫೈಲ್‌ಗಳು",
       "lock ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "What does the version lock record?",
      "qKn": "ಆವೃತ್ತಿ lock ಏನು ದಾಖಲಿಸುತ್ತದೆ?",
      "opts": [
       "The installed pack version",
       "The user name",
       "The test results",
       "The commit hash"
      ],
      "optsKn": [
       "ಸ್ಥಾಪಿತ ಪ್ಯಾಕ್ ಆವೃತ್ತಿ",
       "ಬಳಕೆದಾರ ಹೆಸರು",
       "ಪರೀಕ್ಷಾ ಫಲಿತಾಂಶಗಳು",
       "commit hash"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
