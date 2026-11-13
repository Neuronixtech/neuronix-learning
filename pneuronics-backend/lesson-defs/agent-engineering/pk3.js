module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6366020ed05b321589",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Capstone: Ship a Reusable Agent Workbench Pack (Part 3 of 3) — Upgrades, Removal and Distribution",
 "titleKn": "Capstone: ಮರುಬಳಕೆಯ Agent Workbench ಪ್ಯಾಕ್ ಕಳುಹಿಸಿ (ಭಾಗ 3 / 3) — ಅಪ್‌ಗ್ರೇಡ್, ತೆಗೆಯುವಿಕೆ ಮತ್ತು ವಿತರಣೆ",
 "desc": "Compare versions correctly, plan an upgrade that keeps customisations, remove a pack by its manifest, pin archive timestamps and smoke-test an install in a git repository.",
 "descKn": "ಆವೃತ್ತಿಗಳನ್ನು ಸರಿಯಾಗಿ ಹೋಲಿಸಿ, ಕಸ್ಟಮೈಸೇಶನ್ ಉಳಿಸುವ ಅಪ್‌ಗ್ರೇಡ್ ಯೋಜಿಸಿ, manifest ಮೂಲಕ ಪ್ಯಾಕ್ ತೆಗೆದು, archive timestamps ಸ್ಥಿರಗೊಳಿಸಿ ಮತ್ತು git repository ಯಲ್ಲಿ ಸ್ಥಾಪನೆಯನ್ನು smoke-ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Compare versions as numbers.",
  "Plan upgrades with a dry run.",
  "Uninstall by manifest.",
  "Pin archive timestamps.",
  "Smoke-test an install."
 ],
 "objectivesKn": [
  "ಆವೃತ್ತಿಗಳನ್ನು ಸಂಖ್ಯೆಗಳಾಗಿ ಹೋಲಿಸಿ.",
  "dry run ಮೂಲಕ ಅಪ್‌ಗ್ರೇಡ್ ಯೋಜಿಸಿ.",
  "manifest ಮೂಲಕ ಅನ್‌ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿ.",
  "archive timestamps ಸ್ಥಿರಗೊಳಿಸಿ.",
  "ಸ್ಥಾಪನೆಯನ್ನು smoke-ಪರೀಕ್ಷಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Capstone: Ship a Reusable Agent Workbench Pack (Part 3 of 3)",
    "textKn": "Capstone: ಮರುಬಳಕೆಯ Agent Workbench ಪ್ಯಾಕ್ ಕಳುಹಿಸಿ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: version comparison, a dry-run upgrade plan, manifest-based uninstall, archive reproducibility and an end-to-end smoke test in a git repository. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind shipping a reusable agent workbench pack (layout, manifest, installer, versions and distribution), not the real software, and the pack is a small one written by the lab, not the lesson's pack, and no language model is involved, so no real LLM behaviour is measured. The pasted capstone did not include the repository's code, so the labs are our own small pack and installer, written in Python; the lesson describes shell installation, and results depend on the machine they ran on. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಆವೃತ್ತಿ ಹೋಲಿಕೆ, dry-run ಅಪ್‌ಗ್ರೇಡ್ ಯೋಜನೆ, manifest-ಆಧಾರಿತ ಅನ್‌ಇನ್‌ಸ್ಟಾಲ್, archive ಪುನರುತ್ಪಾದಕತೆ ಮತ್ತು git repository ಯಲ್ಲಿ ಅಂತ್ಯದಿಂದ-ಅಂತ್ಯ smoke ಪರೀಕ್ಷೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಮರುಬಳಕೆಯ agent workbench ಪ್ಯಾಕ್ ಕಳುಹಿಸುವುದು (ವಿನ್ಯಾಸ, manifest, installer, ಆವೃತ್ತಿಗಳು ಮತ್ತು ವಿತರಣೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪ್ಯಾಕ್ ಲ್ಯಾಬ್ ಬರೆದ ಸಣ್ಣದು, lesson ನ ಪ್ಯಾಕ್ ಅಲ್ಲ, ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ capstone repository ಯ ಕೋಡ್ ಒಳಗೊಂಡಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಸಣ್ಣ ಪ್ಯಾಕ್ ಮತ್ತು installer, Python ನಲ್ಲಿ ಬರೆದದ್ದು; lesson shell ಸ್ಥಾಪನೆ ವಿವರಿಸುತ್ತದೆ, ಮತ್ತು ಫಲಿತಾಂಶಗಳು ಅವು ಓಡಿದ ಯಂತ್ರವನ್ನು ಅವಲಂಬಿಸಿವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Pack Has a Life After the First Install",
    "textKn": "ಮೊದಲ ಸ್ಥಾಪನೆಯ ನಂತರವೂ ಪ್ಯಾಕ್‌ಗೆ ಜೀವನವಿದೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Upgrade, Remove, Ship",
    "headingKn": "ಅಪ್‌ಗ್ರೇಡ್, ತೆಗೆಯಿರಿ, ಕಳುಹಿಸಿ",
    "bodyEn": "A pack gets new versions, local customisations and eventually removal. This part shows how comparing version strings misorders 1.9.0 and 1.10.0, builds a dry-run plan that keeps customised files, removes a pack by its manifest without touching project files, checks whether zip archives of the same files are byte-identical and finishes with an install, a verify run and a commit in a fresh git repository.",
    "bodyKn": "ಪ್ಯಾಕ್‌ಗೆ ಹೊಸ ಆವೃತ್ತಿಗಳು, ಸ್ಥಳೀಯ ಕಸ್ಟಮೈಸೇಶನ್‌ಗಳು ಮತ್ತು ಅಂತಿಮವಾಗಿ ತೆಗೆಯುವಿಕೆ ಬರುತ್ತದೆ. ಈ ಭಾಗ ಆವೃತ್ತಿ ಸ್ಟ್ರಿಂಗ್‌ಗಳ ಹೋಲಿಕೆ 1.9.0 ಮತ್ತು 1.10.0 ಅನ್ನು ತಪ್ಪಾಗಿ ಕ್ರಮಗೊಳಿಸುವುದನ್ನು ತೋರಿಸಿ, ಕಸ್ಟಮೈಸ್ ಮಾಡಿದ ಫೈಲ್‌ಗಳನ್ನು ಉಳಿಸುವ dry-run ಯೋಜನೆ ನಿರ್ಮಿಸಿ, ಪ್ರಾಜೆಕ್ಟ್ ಫೈಲ್‌ಗಳನ್ನು ಮುಟ್ಟದೆ manifest ಮೂಲಕ ಪ್ಯಾಕ್ ತೆಗೆದು, ಅದೇ ಫೈಲ್‌ಗಳ zip archives ಬೈಟ್-ಒಂದೇ ಆಗಿವೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ, ಹೊಸ git repository ಯಲ್ಲಿ ಸ್ಥಾಪನೆ, verify ಓಟ ಮತ್ತು commit ನೊಂದಿಗೆ ಮುಗಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Versions and Distribution",
    "headingKn": "ಆವೃತ್ತಿಗಳು ಮತ್ತು ವಿತರಣೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Versions and distribution</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">compare</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">numbers, not strings</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">dry run</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">keep customised</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">uninstall</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">by manifest</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">smoke test</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">in a fresh repo</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">pin timestamps to pin a digest</text></svg>",
    "captionEn": "Pin timestamps to pin a digest.",
    "captionKn": "digest ಅನ್ನು ಸ್ಥಿರಗೊಳಿಸಲು timestamps ಸ್ಥಿರಗೊಳಿಸಿ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Upgrade plan categories",
    "headingKn": "ಅಪ್‌ಗ್ರೇಡ್ ಯೋಜನೆ ವರ್ಗಗಳು",
    "headers": [
     "Category",
     "Condition",
     "Action"
    ],
    "rows": [
     [
      "add",
      "file is new in the pack",
      "copy it"
     ],
     [
      "update",
      "installed file still matches the recorded digest",
      "replace it"
     ],
     [
      "keep_customised",
      "installed file differs from the recorded digest",
      "leave it for manual merge"
     ],
     [
      "remove",
      "pack no longer ships it and it is unmodified",
      "propose removal"
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
    "filename": "pk_3.py",
    "headingEn": "parse, plan_upgrade and make_zip",
    "headingKn": "parse, plan_upgrade ಮತ್ತು make_zip",
    "descEn": "parse turns a version into a tuple of three integers and rejects anything else. plan_upgrade compares installed files with the digests recorded at install time and sorts files into add, update, keep_customised and remove. make_zip writes entries with a chosen timestamp so archives can be compared.",
    "descKn": "parse ಆವೃತ್ತಿಯನ್ನು ಮೂರು ಪೂರ್ಣಾಂಕಗಳ tuple ಆಗಿ ಮಾರ್ಪಡಿಸಿ ಬೇರೆ ಎಲ್ಲವನ್ನೂ ತಿರಸ್ಕರಿಸುತ್ತದೆ. plan_upgrade ಸ್ಥಾಪಿತ ಫೈಲ್‌ಗಳನ್ನು ಸ್ಥಾಪನೆ ಸಮಯದಲ್ಲಿ ದಾಖಲಿಸಿದ digests ಗೆ ಹೋಲಿಸಿ ಫೈಲ್‌ಗಳನ್ನು add, update, keep_customised ಮತ್ತು remove ಗೆ ವಿಂಗಡಿಸುತ್ತದೆ. make_zip ಆಯ್ದ timestamp ನೊಂದಿಗೆ ನಮೂದುಗಳನ್ನು ಬರೆಯುತ್ತದೆ, ಆದ್ದರಿಂದ archives ಹೋಲಿಸಬಹುದು.",
    "code": "def parse(v):\n    try:\n        parts = tuple(int(x) for x in v.split(\".\"))\n    except ValueError:\n        raise ValueError(f\"not a numeric version: {v!r}\")\n    if len(parts) != 3:\n        raise ValueError(f\"expected three numbers: {v!r}\")\n    return parts\n\n\ndef h(text):\n    return hashlib.sha256(text.encode(\"utf-8\")).hexdigest()[:8]\n\n\ndef plan_upgrade(installed, new, target_files, recorded):\n    plan = {\"add\": [], \"update\": [], \"keep_customised\": [], \"remove\": []}\n    for rel, text in new.items():\n        if rel not in target_files:\n            plan[\"add\"].append(rel)\n        elif h(target_files[rel]) == recorded.get(rel):\n            plan[\"update\"].append(rel)\n        else:\n            plan[\"keep_customised\"].append(rel)\n    plan[\"remove\"] = [rel for rel in recorded if rel not in new and rel in target_files and h(target_files[rel]) == recorded[rel]]\n    return plan\n\n\ndef make_zip(files, stamp):\n    buf = io.BytesIO()\n    with zipfile.ZipFile(buf, \"w\", zipfile.ZIP_DEFLATED) as z:\n        for rel in sorted(files):\n            z.writestr(zipfile.ZipInfo(rel, date_time=stamp), files[rel])\n    return buf.getvalue()"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pk_3.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() compares three version pairs as strings and tuples, plans an upgrade with a customised file, removes a pack by its recorded list, builds archives with pinned and current timestamps and installs, verifies and commits a pack in a temporary git repository.",
    "descKn": "main() ಮೂರು ಆವೃತ್ತಿ ಜೋಡಿಗಳನ್ನು strings ಮತ್ತು tuples ಆಗಿ ಹೋಲಿಸಿ, ಕಸ್ಟಮೈಸ್ ಮಾಡಿದ ಫೈಲ್‌ನೊಂದಿಗೆ ಅಪ್‌ಗ್ರೇಡ್ ಯೋಜಿಸಿ, ದಾಖಲಿತ ಪಟ್ಟಿಯಿಂದ ಪ್ಯಾಕ್ ತೆಗೆದು, ಸ್ಥಿರ ಮತ್ತು ಪ್ರಸ್ತುತ timestamps ನೊಂದಿಗೆ archives ನಿರ್ಮಿಸಿ, ತಾತ್ಕಾಲಿಕ git repository ಯಲ್ಲಿ ಪ್ಯಾಕ್ ಸ್ಥಾಪಿಸಿ, ಪರಿಶೀಲಿಸಿ commit ಮಾಡುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely measuring: comparing versions as strings\")\n    for a, b in ((\"1.9.0\", \"1.10.0\"), (\"1.2.0\", \"1.10.0\"), (\"2.0.0\", \"10.0.0\")):\n        print(f\"{a} < {b}: as strings {a < b!s:5} | as number tuples {parse(a) < parse(b)}\")\n    for bad in (\"1.2\", \"1.2.x\", \"v1.2.0\", \"\"):\n        try:\n            parse(bad)\n        except ValueError as e:\n            print(f\"parse({bad!r}) rejected: {e}\")\n    print(\"as strings, '1.9.0' < '1.10.0' is False, so an installer that compared version strings would call 1.9.0 newer than 1.10.0 and skip a genuine upgrade; comparing tuples of integers gives the right answer, and malformed versions are refused instead of guessed\")\n\n    section(\"2. Genuinely running: a dry-run upgrade plan that respects customisation\")\n    target = dict(PACK_V1)\n    target[\"AGENTS.md\"] = \"rules v1\" + chr(10) + \"our own rule\" + chr(10)\n    recorded = {rel: h(text) for rel, text in PACK_V1.items()}\n    plan = plan_upgrade(\"1.0.0\", PACK_V2, target, recorded)\n    for k, v in plan.items():\n        print(f\"{k:16} {v}\")\n    print(\"the customised AGENTS.md was kept and listed for manual merge, the unchanged verify script was updated, the new template was added and the schema the new version no longer ships was proposed for removal because it was unmodified; this needs the digests recorded at install time, which a bare version lock does not store\")\n\n    section(\"3. Genuinely running: uninstall removes only what the pack installed\")\n    with tempfile.TemporaryDirectory() as d:\n        root = Path(d)\n        for rel, text in {**PACK_V1, \"agent_state.json\": \"{}\", \"src/app.py\": \"code\"}.items():\n            p = root / rel\n            p.parent.mkdir(parents=True, exist_ok=True)\n            p.write_text(text, encoding=\"utf-8\", newline=\"\")\n        for rel in PACK_V1:\n            (root / rel).unlink()\n        left = sorted(str(p.relative_to(root)).replace(chr(92), \"/\") for p in root.rglob(\"*\") if p.is_file())\n        print(\"left after removing the recorded pack files:\", left)\n        print(\"removing by a recorded list left the project's state and source files alone; a rule such as 'delete the schemas, scripts and docs folders' would have hit any project file placed there, so uninstall needs the same manifest the install used\")\n\n    section(\"4. Genuinely measuring: are zip archives of the same files byte-identical?\")\n    a = make_zip(PACK_V1, (2020, 1, 1, 0, 0, 0))\n    b = make_zip(PACK_V1, (2020, 1, 1, 0, 0, 0))\n    time.sleep(2.1)\n    c = make_zip(PACK_V1, tuple(time.localtime()[:6]))\n    print(\"fixed timestamps, built twice:\", hashlib.sha256(a).hexdigest()[:10] == hashlib.sha256(b).hexdigest()[:10])\n    print(\"current timestamp versus fixed:\", hashlib.sha256(a).hexdigest()[:10] == hashlib.sha256(c).hexdigest()[:10])\n    print(\"with entry timestamps pinned the same files gave the same archive bytes, and with the current time the archive differed even though no file changed; a pack that is published should be built with pinned timestamps so its digest identifies its contents\")\n\n    section(\"5. Genuinely running: an end-to-end smoke test in a git repository\")\n    with tempfile.TemporaryDirectory() as d:\n        repo = Path(d)\n        git = [\"git\", \"-c\", \"user.name=lab\", \"-c\", \"user.email=lab@example.com\", \"-c\", \"commit.gpgsign=false\"]\n        subprocess.run(git + [\"init\", \"-q\"], cwd=repo, check=True)\n        (repo / \"app.py\").write_text(\"x\", encoding=\"utf-8\")\n        subprocess.run(git + [\"add\", \"-A\"], cwd=repo, check=True)\n        subprocess.run(git + [\"commit\", \"-q\", \"-m\", \"init\"], cwd=repo, check=True)\n        for rel, text in PACK_V2.items():\n            p = repo / rel\n            p.parent.mkdir(parents=True, exist_ok=True)\n            p.write_text(text, encoding=\"utf-8\", newline=\"\")\n        (repo / \".workbench-version\").write_text(\"2.0.0\" + chr(10), encoding=\"utf-8\")\n        status = subprocess.run(git + [\"status\", \"--porcelain\", \"--untracked-files=all\"], cwd=repo, capture_output=True, text=True).stdout.splitlines()\n        print(\"untracked after install:\", sorted(s[3:] for s in status))\n        run = subprocess.run([sys.executable, \"-I\", str(repo / \"scripts/verify_agent.py\")], capture_output=True, text=True)\n        print(\"installed verify script:\", run.returncode, run.stdout.strip())\n        subprocess.run(git + [\"add\", \"-A\"], cwd=repo, check=True)\n        subprocess.run(git + [\"commit\", \"-q\", \"-m\", \"install workbench pack 2.0.0\"], cwd=repo, check=True)\n        print(\"committed; clean tree:\", subprocess.run(git + [\"status\", \"--porcelain\"], cwd=repo, capture_output=True, text=True).stdout == \"\")\n    print(\"the install showed up in the repository as new files that can be reviewed and committed like any change, and the installed script ran; a smoke test like this checks that a freshly installed pack works in a repository it has never seen\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely measuring: comparing versions as strings ---\n1.9.0 < 1.10.0: as strings False | as number tuples True\n1.2.0 < 1.10.0: as strings False | as number tuples True\n2.0.0 < 10.0.0: as strings False | as number tuples True\nparse('1.2') rejected: expected three numbers: '1.2'\nparse('1.2.x') rejected: not a numeric version: '1.2.x'\nparse('v1.2.0') rejected: not a numeric version: 'v1.2.0'\nparse('') rejected: not a numeric version: ''\nas strings, '1.9.0' < '1.10.0' is False, so an installer that compared version strings would call 1.9.0 newer than 1.10.0 and skip a genuine upgrade; comparing tuples of integers gives the right answer, and malformed versions are refused instead of guessed\n\n--- 2. Genuinely running: a dry-run upgrade plan that respects customisation ---\nadd              ['docs/handoff.md']\nupdate           ['scripts/verify_agent.py']\nkeep_customised  ['AGENTS.md']\nremove           ['schemas/state.json']\nthe customised AGENTS.md was kept and listed for manual merge, the unchanged verify script was updated, the new template was added and the schema the new version no longer ships was proposed for removal because it was unmodified; this needs the digests recorded at install time, which a bare version lock does not store\n\n--- 3. Genuinely running: uninstall removes only what the pack installed ---\nleft after removing the recorded pack files: ['agent_state.json', 'src/app.py']\nremoving by a recorded list left the project's state and source files alone; a rule such as 'delete the schemas, scripts and docs folders' would have hit any project file placed there, so uninstall needs the same manifest the install used\n\n--- 4. Genuinely measuring: are zip archives of the same files byte-identical? ---\nfixed timestamps, built twice: True\ncurrent timestamp versus fixed: False\nwith entry timestamps pinned the same files gave the same archive bytes, and with the current time the archive differed even though no file changed; a pack that is published should be built with pinned timestamps so its digest identifies its contents\n\n--- 5. Genuinely running: an end-to-end smoke test in a git repository ---\nuntracked after install: ['.workbench-version', 'AGENTS.md', 'docs/handoff.md', 'scripts/verify_agent.py']\ninstalled verify script: 0 verify v2\ncommitted; clean tree: True\nthe install showed up in the repository as new files that can be reviewed and committed like any change, and the installed script ran; a smoke test like this checks that a freshly installed pack works in a repository it has never seen"
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
    "headingEn": "Experiment 1: Comparing versions as strings",
    "headingKn": "ಪ್ರಯೋಗ 1: Comparing versions as strings",
    "bodyEn": "What it ran: Comparing versions as strings. What the lab concluded: as strings, '1.9.0' < '1.10.0' is False, so an installer that compared version strings would call 1.9.0 newer than 1.10.0 and skip a genuine upgrade; comparing tuples of integers gives the right answer, and malformed versions are refused instead of guessed",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Comparing versions as strings. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): as strings, '1.9.0' < '1.10.0' is False, so an installer that compared version strings would call 1.9.0 newer than 1.10.0 and skip a genuine upgrade; comparing tuples of integers gives the right answer, and malformed versions are refused instead of guessed"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely measuring: comparing versions as strings ---\n1.9.0 < 1.10.0: as strings False | as number tuples True\n1.2.0 < 1.10.0: as strings False | as number tuples True\n2.0.0 < 10.0.0: as strings False | as number tuples True\nparse('1.2') rejected: expected three numbers: '1.2'\nparse('1.2.x') rejected: not a numeric version: '1.2.x'\nparse('v1.2.0') rejected: not a numeric version: 'v1.2.0'\nparse('') rejected: not a numeric version: ''"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: A dry-run upgrade plan that respects customisation",
    "headingKn": "ಪ್ರಯೋಗ 2: A dry-run upgrade plan that respects customisation",
    "bodyEn": "What it ran: A dry-run upgrade plan that respects customisation. What the lab concluded: the customised AGENTS.md was kept and listed for manual merge, the unchanged verify script was updated, the new template was added and the schema the new version no longer ships was proposed for removal because it was unmodified; this needs the digests recorded at install time, which a bare version lock does not store",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A dry-run upgrade plan that respects customisation. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the customised AGENTS.md was kept and listed for manual merge, the unchanged verify script was updated, the new template was added and the schema the new version no longer ships was proposed for removal because it was unmodified; this needs the digests recorded at install time, which a bare version lock does not store"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: a dry-run upgrade plan that respects customisation ---\nadd              ['docs/handoff.md']\nupdate           ['scripts/verify_agent.py']\nkeep_customised  ['AGENTS.md']\nremove           ['schemas/state.json']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Uninstall removes only what the pack installed",
    "headingKn": "ಪ್ರಯೋಗ 3: Uninstall removes only what the pack installed",
    "bodyEn": "What it ran: Uninstall removes only what the pack installed. What the lab concluded: removing by a recorded list left the project's state and source files alone; a rule such as 'delete the schemas, scripts and docs folders' would have hit any project file placed there, so uninstall needs the same manifest the install used",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Uninstall removes only what the pack installed. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): removing by a recorded list left the project's state and source files alone; a rule such as 'delete the schemas, scripts and docs folders' would have hit any project file placed there, so uninstall needs the same manifest the install used"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: uninstall removes only what the pack installed ---\nleft after removing the recorded pack files: ['agent_state.json', 'src/app.py']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Are zip archives of the same files byte-identical?",
    "headingKn": "ಪ್ರಯೋಗ 4: Are zip archives of the same files byte-identical?",
    "bodyEn": "What it ran: Are zip archives of the same files byte-identical?. What the lab concluded: with entry timestamps pinned the same files gave the same archive bytes, and with the current time the archive differed even though no file changed; a pack that is published should be built with pinned timestamps so its digest identifies its contents",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Are zip archives of the same files byte-identical?. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): with entry timestamps pinned the same files gave the same archive bytes, and with the current time the archive differed even though no file changed; a pack that is published should be built with pinned timestamps so its digest identifies its contents"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely measuring: are zip archives of the same files byte-identical? ---\nfixed timestamps, built twice: True\ncurrent timestamp versus fixed: False"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: An end-to-end smoke test in a git repository",
    "headingKn": "ಪ್ರಯೋಗ 5: An end-to-end smoke test in a git repository",
    "bodyEn": "What it ran: An end-to-end smoke test in a git repository. What the lab concluded: the install showed up in the repository as new files that can be reviewed and committed like any change, and the installed script ran; a smoke test like this checks that a freshly installed pack works in a repository it has never seen",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: An end-to-end smoke test in a git repository. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the install showed up in the repository as new files that can be reviewed and committed like any change, and the installed script ran; a smoke test like this checks that a freshly installed pack works in a repository it has never seen"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: an end-to-end smoke test in a git repository ---\nuntracked after install: ['.workbench-version', 'AGENTS.md', 'docs/handoff.md', 'scripts/verify_agent.py']\ninstalled verify script: 0 verify v2\ncommitted; clean tree: True"
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
    "headingEn": "Genuinely Found: String Comparison Misorders Versions",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸ್ಟ್ರಿಂಗ್ ಹೋಲಿಕೆ ಆವೃತ್ತಿಗಳನ್ನು ತಪ್ಪಾಗಿ ಕ್ರಮಗೊಳಿಸುತ್ತದೆ",
    "bodyEn": "Section 1: \"1.9.0\" < \"1.10.0\", \"1.2.0\" < \"1.10.0\" and \"2.0.0\" < \"10.0.0\" were all False as strings and True as integer tuples; \"1.2\", \"1.2.x\", \"v1.2.0\" and an empty string were rejected by the parser. Section 2: the upgrade plan added docs/handoff.md, updated the unmodified verify script, kept the customised AGENTS.md and proposed removing the unmodified schemas/state.json.",
    "bodyKn": "ವಿಭಾಗ 1: \"1.9.0\" < \"1.10.0\", \"1.2.0\" < \"1.10.0\" ಮತ್ತು \"2.0.0\" < \"10.0.0\" ಎಲ್ಲವೂ strings ಆಗಿ False ಮತ್ತು ಪೂರ್ಣಾಂಕ tuples ಆಗಿ True ಆಗಿದ್ದವು; \"1.2\", \"1.2.x\", \"v1.2.0\" ಮತ್ತು ಖಾಲಿ ಸ್ಟ್ರಿಂಗ್ ಅನ್ನು parser ತಿರಸ್ಕರಿಸಿತು. ವಿಭಾಗ 2: ಅಪ್‌ಗ್ರೇಡ್ ಯೋಜನೆ docs/handoff.md ಸೇರಿಸಿ, ಮಾರ್ಪಡಿಸದ verify ಸ್ಕ್ರಿಪ್ಟ್ ನವೀಕರಿಸಿ, ಕಸ್ಟಮೈಸ್ ಮಾಡಿದ AGENTS.md ಉಳಿಸಿ, ಮಾರ್ಪಡಿಸದ schemas/state.json ತೆಗೆಯಲು ಸೂಚಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Manifest-Based Removal, Pinned Archives and a Smoke Test",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Manifest-ಆಧಾರಿತ ತೆಗೆಯುವಿಕೆ, ಸ್ಥಿರ Archives ಮತ್ತು Smoke ಪರೀಕ್ಷೆ",
    "bodyEn": "Section 3: removing the recorded pack files left agent_state.json and src/app.py. Section 4: two zip archives with a pinned timestamp had identical digests, while one built with the current time differed although no file changed. Section 5: after installing into a fresh git repository the four new files were untracked, the installed verify script exited 0, and the install was committed leaving a clean tree.",
    "bodyKn": "ವಿಭಾಗ 3: ದಾಖಲಿತ ಪ್ಯಾಕ್ ಫೈಲ್‌ಗಳನ್ನು ತೆಗೆದರೆ agent_state.json ಮತ್ತು src/app.py ಉಳಿದವು. ವಿಭಾಗ 4: ಸ್ಥಿರ timestamp ಇರುವ ಎರಡು zip archives ಒಂದೇ digests ಹೊಂದಿದ್ದವು, ಪ್ರಸ್ತುತ ಸಮಯದಿಂದ ನಿರ್ಮಿಸಿದ್ದು ಯಾವ ಫೈಲ್ ಬದಲಾಗದಿದ್ದರೂ ಭಿನ್ನವಾಗಿತ್ತು. ವಿಭಾಗ 5: ಹೊಸ git repository ಗೆ ಸ್ಥಾಪಿಸಿದ ನಂತರ ನಾಲ್ಕು ಹೊಸ ಫೈಲ್‌ಗಳು untracked ಆಗಿದ್ದವು, ಸ್ಥಾಪಿತ verify ಸ್ಕ್ರಿಪ್ಟ್ 0 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸಿತು, ಮತ್ತು ಸ್ಥಾಪನೆ commit ಆಗಿ ಮರ ಸ್ವಚ್ಛವಾಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Upgrades, removal and distribution all need the pack to be identified exactly, by comparable versions, recorded digests and archives whose bytes do not depend on when they were built.",
    "bodyKn": "ಅಪ್‌ಗ್ರೇಡ್, ತೆಗೆಯುವಿಕೆ ಮತ್ತು ವಿತರಣೆ ಎಲ್ಲಕ್ಕೂ ಪ್ಯಾಕ್ ನಿಖರವಾಗಿ ಗುರುತಿಸಲ್ಪಡಬೇಕು, ಹೋಲಿಸಬಹುದಾದ ಆವೃತ್ತಿಗಳು, ದಾಖಲಿತ digests ಮತ್ತು ನಿರ್ಮಿಸಿದ ಸಮಯವನ್ನು ಅವಲಂಬಿಸದ ಬೈಟ್‌ಗಳ archives ಮೂಲಕ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"1.10.0 sorts after 1.9.0 as text.\" As text it sorted before.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"1.10.0 ಪಠ್ಯವಾಗಿ 1.9.0 ನಂತರ ಬರುತ್ತದೆ.\" ಪಠ್ಯವಾಗಿ ಅದು ಮೊದಲು ಬಂತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Dry run: a plan that changes nothing. Customised file: an installed file that differs from the recorded digest. Reproducible archive: the same files always give the same bytes. Smoke test: a quick check that the installed thing runs. Tuple comparison: ordering by numeric parts.",
    "bodyKn": "Dry run: ಏನನ್ನೂ ಬದಲಿಸದ ಯೋಜನೆ. Customised file: ದಾಖಲಿತ digest ಗಿಂತ ಭಿನ್ನವಾದ ಸ್ಥಾಪಿತ ಫೈಲ್. Reproducible archive: ಅದೇ ಫೈಲ್‌ಗಳು ಯಾವಾಗಲೂ ಅದೇ ಬೈಟ್‌ಗಳನ್ನು ನೀಡುತ್ತವೆ. Smoke test: ಸ್ಥಾಪಿತವಾದದ್ದು ಓಡುತ್ತದೆಯೇ ಎಂದು ತ್ವರಿತ ಪರಿಶೀಲನೆ. Tuple comparison: ಸಂಖ್ಯಾ ಭಾಗಗಳ ಮೂಲಕ ಕ್ರಮ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) String comparison put 1.9.0 after 1.10.0. 2) The dry run kept a customised file and proposed an unmodified removal. 3) Removing by manifest left project files. 4) Pinned timestamps gave identical archives. 5) The installed script ran in a fresh git repository.",
    "bodyKn": "1) ಸ್ಟ್ರಿಂಗ್ ಹೋಲಿಕೆ 1.9.0 ಅನ್ನು 1.10.0 ನಂತರ ಇಟ್ಟಿತು. 2) dry run ಕಸ್ಟಮೈಸ್ ಮಾಡಿದ ಫೈಲ್ ಉಳಿಸಿ ಮಾರ್ಪಡಿಸದ ತೆಗೆಯುವಿಕೆ ಸೂಚಿಸಿತು. 3) manifest ಮೂಲಕ ತೆಗೆದಾಗ ಪ್ರಾಜೆಕ್ಟ್ ಫೈಲ್‌ಗಳು ಉಳಿದವು. 4) ಸ್ಥಿರ timestamps ಒಂದೇ archives ನೀಡಿದವು. 5) ಸ್ಥಾಪಿತ ಸ್ಕ್ರಿಪ್ಟ್ ಹೊಸ git repository ಯಲ್ಲಿ ಓಡಿತು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B pk_3.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B pk_3.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B pk_3.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B pk_3.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Is \"1.9.0\" < \"1.10.0\" True as strings?",
      "qKn": "\"1.9.0\" < \"1.10.0\" strings ಆಗಿ True ಆಗಿತ್ತೇ?",
      "opts": [
       "No, it is False",
       "Yes",
       "It raises",
       "Only on Windows"
      ],
      "optsKn": [
       "ಇಲ್ಲ, False",
       "ಹೌದು",
       "ಅಪವಾದ ಎತ್ತುತ್ತದೆ",
       "Windows ನಲ್ಲಿ ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "Which category did the customised AGENTS.md fall into?",
      "qKn": "ಕಸ್ಟಮೈಸ್ ಮಾಡಿದ AGENTS.md ಯಾವ ವರ್ಗಕ್ಕೆ ಬಂತು?",
      "opts": [
       "keep_customised",
       "update",
       "add",
       "remove"
      ],
      "optsKn": [
       "keep_customised",
       "update",
       "add",
       "remove"
      ],
      "correct": 0
     },
     {
      "q": "What remained after removing the recorded pack files?",
      "qKn": "ದಾಖಲಿತ ಪ್ಯಾಕ್ ಫೈಲ್‌ಗಳನ್ನು ತೆಗೆದ ನಂತರ ಏನು ಉಳಿಯಿತು?",
      "opts": [
       "agent_state.json and src/app.py",
       "Nothing",
       "Only VERSION",
       "The schemas folder"
      ],
      "optsKn": [
       "agent_state.json ಮತ್ತು src/app.py",
       "ಏನೂ ಇಲ್ಲ",
       "VERSION ಮಾತ್ರ",
       "schemas ಫೋಲ್ಡರ್"
      ],
      "correct": 0
     },
     {
      "q": "Why did the archive built with the current time differ?",
      "qKn": "ಪ್ರಸ್ತುತ ಸಮಯದಿಂದ ನಿರ್ಮಿಸಿದ archive ಏಕೆ ಭಿನ್ನವಾಗಿತ್ತು?",
      "opts": [
       "Entry timestamps are stored in the archive",
       "A file changed",
       "The version changed",
       "Compression failed"
      ],
      "optsKn": [
       "ನಮೂದು timestamps archive ನಲ್ಲಿ ಸಂಗ್ರಹವಾಗುತ್ತವೆ",
       "ಫೈಲ್ ಬದಲಾಯಿತು",
       "ಆವೃತ್ತಿ ಬದಲಾಯಿತು",
       "compression ವಿಫಲವಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What did the smoke test run after installing?",
      "qKn": "ಸ್ಥಾಪನೆಯ ನಂತರ smoke ಪರೀಕ್ಷೆ ಏನು ಓಡಿಸಿತು?",
      "opts": [
       "The installed verify script",
       "The pack builder",
       "A deploy",
       "Nothing"
      ],
      "optsKn": [
       "ಸ್ಥಾಪಿತ verify ಸ್ಕ್ರಿಪ್ಟ್",
       "ಪ್ಯಾಕ್ ನಿರ್ಮಾಪಕ",
       "ನಿಯೋಜನೆ",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
