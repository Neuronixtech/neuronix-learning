module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b32156b",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "The Minimal Agent Workbench (Part 1 of 3) — Router, State and Task Board",
 "titleKn": "ಕನಿಷ್ಠ Agent Workbench (ಭಾಗ 1 / 3) — Router, ಸ್ಥಿತಿ ಮತ್ತು Task Board",
 "desc": "Build the three-file workbench on real files, run scripted turns, and test restart safety, the path allowlist, acceptance checks and a crash that repeats a write.",
 "descKn": "ಮೂರು-ಫೈಲ್ workbench ಅನ್ನು ನಿಜ ಫೈಲ್‌ಗಳ ಮೇಲೆ ನಿರ್ಮಿಸಿ, ಸ್ಕ್ರಿಪ್ಟ್ ತಿರುವುಗಳನ್ನು ಓಡಿಸಿ, ಮರುಪ್ರಾರಂಭ ಸುರಕ್ಷತೆ, path allowlist, ಸ್ವೀಕಾರ ಪರಿಶೀಲನೆ ಮತ್ತು ಬರಹ ಪುನರಾವರ್ತಿಸುವ ಕ್ರ್ಯಾಶ್ ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Separate instructions, state and tasks.",
  "Create only missing files on startup.",
  "Check allowlist and containment.",
  "Verify by reading the file back.",
  "Make a repeated update safe."
 ],
 "objectivesKn": [
  "ಸೂಚನೆಗಳು, ಸ್ಥಿತಿ ಮತ್ತು ಕಾರ್ಯಗಳನ್ನು ಬೇರ್ಪಡಿಸಿ.",
  "ಆರಂಭದಲ್ಲಿ ಕಾಣೆಯಾದ ಫೈಲ್‌ಗಳನ್ನು ಮಾತ್ರ ರಚಿಸಿ.",
  "Allowlist ಮತ್ತು ಒಳಗೊಳ್ಳುವಿಕೆ ಪರಿಶೀಲಿಸಿ.",
  "ಫೈಲ್ ಮತ್ತೆ ಓದಿ ಪರಿಶೀಲಿಸಿ.",
  "ಪುನರಾವರ್ತಿತ ನವೀಕರಣವನ್ನು ಸುರಕ್ಷಿತಗೊಳಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "The Minimal Agent Workbench (Part 1 of 3)",
    "textKn": "ಕನಿಷ್ಠ Agent Workbench (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: the three-file workbench on real files: initialisation, one turn, a path allowlist, acceptance checks and a crash-duplicate bug. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the minimal agent workbench (AGENTS.md router, agent_state.json and task_board.json), not the real software, and the agent is a scripted function working on real temporary files and no language model is involved, so no real LLM behaviour is measured. The pasted lesson said the original code/main.py was not supplied, so the lab is our own implementation of the behaviour it describes. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ನಿಜ ಫೈಲ್‌ಗಳ ಮೇಲೆ ಮೂರು-ಫೈಲ್ workbench: ಆರಂಭ, ಒಂದು ತಿರುವು, path allowlist, ಸ್ವೀಕಾರ ಪರಿಶೀಲನೆ ಮತ್ತು ಕ್ರ್ಯಾಶ್-ನಕಲು ದೋಷ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಕನಿಷ್ಠ agent workbench (AGENTS.md router, agent_state.json ಮತ್ತು task_board.json) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು agent ನಿಜ ತಾತ್ಕಾಲಿಕ ಫೈಲ್‌ಗಳ ಮೇಲೆ ಕೆಲಸ ಮಾಡುವ ಸ್ಕ್ರಿಪ್ಟ್ ಫಂಕ್ಷನ್ ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ಮೂಲ code/main.py ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Smallest Useful Workbench",
    "textKn": "ಅತಿ ಚಿಕ್ಕ ಉಪಯುಕ್ತ Workbench",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Three Files, Three Jobs",
    "headingKn": "ಮೂರು ಫೈಲ್‌ಗಳು, ಮೂರು ಕೆಲಸಗಳು",
    "bodyEn": "AGENTS.md is a short router that points to the rules, agent_state.json records the active task, touched files, assumptions, blockers and next action, and task_board.json holds the tasks with status and acceptance criteria. This part builds all three on real files in a temporary directory, runs one scripted turn at a time, and then tests what each design choice protects against: preserving state on restart, an allowlist for the target file, acceptance checks, and a crash that repeats a write.",
    "bodyKn": "AGENTS.md ನಿಯಮಗಳಿಗೆ ತೋರಿಸುವ ಚಿಕ್ಕ router, agent_state.json ಸಕ್ರಿಯ ಕಾರ್ಯ, ಮುಟ್ಟಿದ ಫೈಲ್‌ಗಳು, ಊಹೆಗಳು, ಅಡೆತಡೆಗಳು ಮತ್ತು ಮುಂದಿನ ಕ್ರಿಯೆ ದಾಖಲಿಸುತ್ತದೆ, ಮತ್ತು task_board.json ಸ್ಥಿತಿ ಮತ್ತು ಸ್ವೀಕಾರ ಮಾನದಂಡದೊಂದಿಗೆ ಕಾರ್ಯಗಳನ್ನು ಹೊಂದಿದೆ. ಈ ಭಾಗ ಮೂರನ್ನೂ ತಾತ್ಕಾಲಿಕ ಡೈರೆಕ್ಟರಿಯ ನಿಜ ಫೈಲ್‌ಗಳ ಮೇಲೆ ನಿರ್ಮಿಸಿ, ಒಮ್ಮೆಗೆ ಒಂದು ಸ್ಕ್ರಿಪ್ಟ್ ತಿರುವು ಓಡಿಸಿ, ನಂತರ ಪ್ರತಿ ವಿನ್ಯಾಸ ಆಯ್ಕೆ ಯಾವುದರಿಂದ ರಕ್ಷಿಸುತ್ತದೆ ಎಂದು ಪರೀಕ್ಷಿಸುತ್ತದೆ: ಮರುಪ್ರಾರಂಭದಲ್ಲಿ ಸ್ಥಿತಿ ಉಳಿಸುವುದು, ಗುರಿ ಫೈಲ್‌ಗೆ allowlist, ಸ್ವೀಕಾರ ಪರಿಶೀಲನೆ ಮತ್ತು ಬರಹ ಪುನರಾವರ್ತಿಸುವ ಕ್ರ್ಯಾಶ್."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Router, State, Queue",
    "headingKn": "Router, ಸ್ಥಿತಿ, ಸರದಿ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Three files</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">AGENTS.md</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">router</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">agent_state</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">where we are</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">task_board</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">what work exists</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">one scoped turn</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">read, act, verify, save</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">instructions, state and queue stay separate</text></svg>",
    "captionEn": "Instructions, state and tasks are different information.",
    "captionKn": "ಸೂಚನೆಗಳು, ಸ್ಥಿತಿ ಮತ್ತು ಕಾರ್ಯಗಳು ಬೇರೆ ಮಾಹಿತಿ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The three files",
    "headingKn": "ಮೂರು ಫೈಲ್‌ಗಳು",
    "headers": [
     "File",
     "Holds",
     "Not for"
    ],
    "rows": [
     [
      "AGENTS.md",
      "startup rules and pointers",
      "the whole manual"
     ],
     [
      "agent_state.json",
      "active task, touched files, assumptions, blockers, next action",
      "the backlog"
     ],
     [
      "task_board.json",
      "tasks, owners, status, allowed files, acceptance criteria",
      "execution details"
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
    "filename": "mw_1.py",
    "headingEn": "initialize, resolve_allowed, verify and run_turn",
    "headingKn": "initialize, resolve_allowed, verify ಮತ್ತು run_turn",
    "descEn": "initialize creates only missing files so a restart keeps its state. resolve_allowed checks the task allowlist and then containment inside the workbench. run_turn resumes the active task or picks the next todo task, records in_progress before acting, writes the file, verifies it and only then marks done.",
    "descKn": "initialize ಕಾಣೆಯಾದ ಫೈಲ್‌ಗಳನ್ನು ಮಾತ್ರ ರಚಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಮರುಪ್ರಾರಂಭ ತನ್ನ ಸ್ಥಿತಿ ಉಳಿಸುತ್ತದೆ. resolve_allowed ಕಾರ್ಯದ allowlist ಮತ್ತು ನಂತರ workbench ಒಳಗಿನ ಒಳಗೊಳ್ಳುವಿಕೆ ಪರಿಶೀಲಿಸುತ್ತದೆ. run_turn ಸಕ್ರಿಯ ಕಾರ್ಯ ಮುಂದುವರಿಸುತ್ತದೆ ಅಥವಾ ಮುಂದಿನ todo ಆರಿಸುತ್ತದೆ, ಕ್ರಿಯೆ ಮುನ್ನ in_progress ದಾಖಲಿಸಿ, ಫೈಲ್ ಬರೆದು, ಪರಿಶೀಲಿಸಿ, ನಂತರ ಮಾತ್ರ done ಎಂದು ಗುರುತಿಸುತ್ತದೆ.",
    "code": "def wj(path, data):\n    path.parent.mkdir(parents=True, exist_ok=True)\n    path.write_text(json.dumps(data, indent=2) + \"\\n\", encoding=\"utf-8\")\n\n\ndef rj(path):\n    return json.loads(path.read_text(encoding=\"utf-8\"))\n\n\ndef initialize(root, overwrite_state=False):\n    root.mkdir(parents=True, exist_ok=True)\n    if not (root / \"AGENTS.md\").exists():\n        (root / \"AGENTS.md\").write_text(\"# Agent Instructions\\n1. Read agent_state.json.\\n2. Read task_board.json.\\n3. Modify only allowed files.\\n\", encoding=\"utf-8\")\n    if overwrite_state or not (root / \"agent_state.json\").exists():\n        wj(root / \"agent_state.json\", STATE)\n    if not (root / \"task_board.json\").exists():\n        wj(root / \"task_board.json\", BOARD)\n    if not (root / \"notes.txt\").exists():\n        (root / \"notes.txt\").write_text(\"Project notes\\n\", encoding=\"utf-8\")\n\n\ndef resolve_allowed(root, name, allowed):\n    if name not in allowed:\n        raise ValueError(\"not allowed for this task\")\n    root = root.resolve()\n    target = (root / name).resolve()\n    if target == root or root not in target.parents:\n        raise ValueError(\"escapes the workbench\")\n    return target\n\n\ndef verify(task, target):\n    fails = []\n    if not target.is_file():\n        return [\"the note does not exist\"]\n    text = target.read_text(encoding=\"utf-8\")\n    if task[\"goal\"] not in text:\n        fails.append(\"the goal is missing from the note\")\n    return fails\n\n\ndef run_turn(root, crash_after_write=False, idempotent=False):\n    state, board = rj(root / \"agent_state.json\"), rj(root / \"task_board.json\")\n    task = None\n    if state.get(\"active_task_id\"):\n        task = next((t for t in board[\"tasks\"] if t[\"id\"] == state[\"active_task_id\"] and t[\"status\"] != \"done\"), None)\n    if task is None:\n        task = next((t for t in board[\"tasks\"] if t[\"status\"] == \"todo\"), None)\n    if task is None:\n        return \"no eligible task\"\n    target = resolve_allowed(root, task[\"allowed_files\"][0], task[\"allowed_files\"])\n    task[\"status\"], state[\"active_task_id\"] = \"in_progress\", task[\"id\"]\n    wj(root / \"agent_state.json\", state); wj(root / \"task_board.json\", board)\n    before = target.read_text(encoding=\"utf-8\")\n    line = f\"Completed: {task['goal']}\\n\"\n    after = before if (idempotent and line in before.splitlines(keepends=True)) else before + line\n    target.write_text(after, encoding=\"utf-8\")\n    if crash_after_write:\n        raise RuntimeError(\"process died after the write and before the status was saved\")\n    fails = verify(task, target)\n    state[\"blockers\"], state[\"touched_files\"] = fails, [target.name]\n    task[\"status\"] = \"in_progress\" if fails else \"done\"\n    state[\"active_task_id\"] = task[\"id\"] if fails else None\n    wj(root / \"agent_state.json\", state); wj(root / \"task_board.json\", board)\n    return \"\".join(difflib.unified_diff(before.splitlines(True), after.splitlines(True), \"before\", \"after\")) or \"(no change)\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "mw_1.py",
    "headingEn": "main(): four experiments",
    "headingKn": "main(): ನಾಲ್ಕು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs two turns, tests the allowlist against five names, repeats a crash with and without an idempotent update and checks acceptance on three file states.",
    "descKn": "main() ಎರಡು ತಿರುವುಗಳನ್ನು ಓಡಿಸಿ, ಐದು ಹೆಸರುಗಳ ವಿರುದ್ಧ allowlist ಪರೀಕ್ಷಿಸಿ, idempotent ನವೀಕರಣ ಜೊತೆ ಮತ್ತು ಇಲ್ಲದೆ ಕ್ರ್ಯಾಶ್ ಪುನರಾವರ್ತಿಸಿ ಮೂರು ಫೈಲ್ ಸ್ಥಿತಿಗಳ ಮೇಲೆ ಸ್ವೀಕಾರ ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Genuinely running: first run, second run and state preserved across runs\")\n    with tempfile.TemporaryDirectory() as d:\n        root = Path(d) / \"workdir\"\n        initialize(root)\n        print(\"first run diff:\\n\" + run_turn(root).rstrip())\n        print(\"board status:\", rj(root / \"task_board.json\")[\"tasks\"][0][\"status\"], \"| state:\", rj(root / \"agent_state.json\")[\"active_task_id\"], rj(root / \"agent_state.json\")[\"next_action\"])\n        initialize(root)\n        print(\"second run:\", run_turn(root))\n        wj(root / \"agent_state.json\", dict(STATE, blockers=[\"keep me\"]))\n        initialize(root)\n        print(\"initialize() with an existing state file leaves it alone:\", rj(root / \"agent_state.json\")[\"blockers\"])\n        initialize(root, overwrite_state=True)\n        print(\"an initialize() that always writes the state file reset it:\", rj(root / \"agent_state.json\")[\"blockers\"])\n    print(\"creating only missing files is what lets a restart resume; the unconditional version silently erased the blocker\")\n\n    section(\"2. Genuinely checking: the path allowlist\")\n    with tempfile.TemporaryDirectory() as d:\n        root = Path(d)\n        for name, allowed in ((\"notes.txt\", [\"notes.txt\"]), (\"secret.txt\", [\"notes.txt\"]), (\"../escape.txt\", [\"../escape.txt\"]), (\"/etc/passwd\", [\"/etc/passwd\"]), (\".\", [\".\"])):\n            try:\n                print(f\"{name:14} -> {resolve_allowed(root, name, allowed).name}\")\n            except ValueError as e:\n                print(f\"{name:14} -> refused: {e}\")\n    print(\"a filename can be on the task's own list and still resolve outside the workbench, so the allowlist check and the containment check are separate; the symlink and race cases are not covered by this check\")\n\n    section(\"3. Genuinely checking: a crash after the write duplicates the line on resume\")\n    for idem in (False, True):\n        with tempfile.TemporaryDirectory() as d:\n            root = Path(d) / \"workdir\"\n            initialize(root)\n            try:\n                run_turn(root, crash_after_write=True, idempotent=idem)\n            except RuntimeError as e:\n                print(f\"idempotent={idem!s:5} first run:\", e)\n            run_turn(root, idempotent=idem)\n            note = (root / \"notes.txt\").read_text(encoding=\"utf-8\")\n            print(f\"idempotent={idem!s:5} after the resumed run notes.txt has {note.count('Completed:')} 'Completed' line(s); task status {rj(root / 'task_board.json')['tasks'][0]['status']}\")\n    print(\"the state still said in_progress after the crash, so the resume appended the same line again; checking whether the line already exists makes the update safe to repeat, but only because this task's update is naturally deduplicable\")\n\n    section(\"4. Genuinely checking: acceptance checks decide done, not the write\")\n    with tempfile.TemporaryDirectory() as d:\n        root = Path(d)\n        (root / \"notes.txt\").write_text(\"unrelated\\n\", encoding=\"utf-8\")\n        task = BOARD[\"tasks\"][0]\n        print(\"note without the goal ->\", verify(task, root / \"notes.txt\"))\n        (root / \"notes.txt\").write_text(\"Completed: Create a project note\\n\", encoding=\"utf-8\")\n        print(\"note with the goal   ->\", verify(task, root / \"notes.txt\") or \"no failures\")\n        print(\"missing note         ->\", verify(task, root / \"gone.txt\"))\n    print(\"a successful write does not prove the criteria hold; the verifier reads the file back, and it only checks the two criteria this demo hard-codes\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: first run, second run and state preserved across runs ---\nfirst run diff:\n--- before\n+++ after\n@@ -1 +1,2 @@\n Project notes\n+Completed: Create a project note\nboard status: done | state: None Select the next eligible task\nsecond run: no eligible task\ninitialize() with an existing state file leaves it alone: ['keep me']\nan initialize() that always writes the state file reset it: []\ncreating only missing files is what lets a restart resume; the unconditional version silently erased the blocker\n\n--- 2. Genuinely checking: the path allowlist ---\nnotes.txt      -> notes.txt\nsecret.txt     -> refused: not allowed for this task\n../escape.txt  -> refused: escapes the workbench\n/etc/passwd    -> refused: escapes the workbench\n.              -> refused: escapes the workbench\na filename can be on the task's own list and still resolve outside the workbench, so the allowlist check and the containment check are separate; the symlink and race cases are not covered by this check\n\n--- 3. Genuinely checking: a crash after the write duplicates the line on resume ---\nidempotent=False first run: process died after the write and before the status was saved\nidempotent=False after the resumed run notes.txt has 2 'Completed' line(s); task status done\nidempotent=True  first run: process died after the write and before the status was saved\nidempotent=True  after the resumed run notes.txt has 1 'Completed' line(s); task status done\nthe state still said in_progress after the crash, so the resume appended the same line again; checking whether the line already exists makes the update safe to repeat, but only because this task's update is naturally deduplicable\n\n--- 4. Genuinely checking: acceptance checks decide done, not the write ---\nnote without the goal -> ['the goal is missing from the note']\nnote with the goal   -> no failures\nmissing note         -> ['the note does not exist']\na successful write does not prove the criteria hold; the verifier reads the file back, and it only checks the two criteria this demo hard-codes"
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
    "headingEn": "Genuinely Found: Restart Safety and the Allowlist",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮರುಪ್ರಾರಂಭ ಸುರಕ್ಷತೆ ಮತ್ತು Allowlist",
    "bodyEn": "Section 1: the first run appended the line \"Completed: Create a project note\", the board showed done and the second run found no eligible task. An initialize that only creates missing files left a saved blocker (\"keep me\") in place, while one that always writes the state file reset it to an empty list. Section 2: notes.txt was allowed; secret.txt was refused as not allowed; \"../escape.txt\", \"/etc/passwd\" and \".\" were refused as escaping the workbench even when they were on the task's own list. Symlinks and races are not covered by this check.",
    "bodyKn": "ವಿಭಾಗ 1: ಮೊದಲ ಓಟ \"Completed: Create a project note\" ಸಾಲು ಸೇರಿಸಿತು, board done ತೋರಿಸಿತು ಮತ್ತು ಎರಡನೇ ಓಟ ಅರ್ಹ ಕಾರ್ಯ ಕಾಣಲಿಲ್ಲ. ಕಾಣೆಯಾದ ಫೈಲ್‌ಗಳನ್ನು ಮಾತ್ರ ರಚಿಸುವ initialize ಉಳಿಸಿದ ಅಡೆತಡೆ (\"keep me\") ಅನ್ನು ಉಳಿಸಿತು, ಯಾವಾಗಲೂ state ಫೈಲ್ ಬರೆಯುವುದು ಅದನ್ನು ಖಾಲಿ ಪಟ್ಟಿಗೆ ಮರುಹೊಂದಿಸಿತು. ವಿಭಾಗ 2: notes.txt ಅನುಮತಿಸಲ್ಪಟ್ಟಿತು; secret.txt ಅನುಮತಿ ಇಲ್ಲ ಎಂದು ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತು; \"../escape.txt\", \"/etc/passwd\" ಮತ್ತು \".\" ಕಾರ್ಯದ ಸ್ವಂತ ಪಟ್ಟಿಯಲ್ಲಿದ್ದರೂ workbench ನಿಂದ ಹೊರಹೋಗುತ್ತವೆ ಎಂದು ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟವು. ಈ ಪರಿಶೀಲನೆ symlinks ಮತ್ತು races ಅನ್ನು ಆವರಿಸುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Crash After the Write Duplicates It; Acceptance Reads the File Back",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಬರಹದ ನಂತರದ ಕ್ರ್ಯಾಶ್ ಅದನ್ನು ನಕಲು ಮಾಡುತ್ತದೆ; ಸ್ವೀಕಾರ ಫೈಲ್ ಮತ್ತೆ ಓದುತ್ತದೆ",
    "bodyEn": "Section 3: when the process died after the write and before the status was saved, the resumed run appended the same line again (2 \"Completed\" lines) unless the update first checked whether the line existed (1 line). That works only because this update is naturally deduplicable. Section 4: a note without the goal failed with \"the goal is missing from the note\", a note with the goal had no failures and a missing note failed; the verifier checks only the two criteria hard-coded in this demo.",
    "bodyKn": "ವಿಭಾಗ 3: ಬರಹದ ನಂತರ ಮತ್ತು ಸ್ಥಿತಿ ಉಳಿಸುವ ಮುನ್ನ ಪ್ರಕ್ರಿಯೆ ಸತ್ತಾಗ, ಮುಂದುವರಿದ ಓಟ ಅದೇ ಸಾಲನ್ನು ಮತ್ತೆ ಸೇರಿಸಿತು (2 \"Completed\" ಸಾಲು), ನವೀಕರಣ ಮೊದಲು ಸಾಲು ಇದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿದರೆ ಹೊರತು (1 ಸಾಲು). ಈ ನವೀಕರಣ ಸ್ವಾಭಾವಿಕವಾಗಿ ನಕಲು ತೆಗೆಯಬಲ್ಲದ್ದರಿಂದ ಮಾತ್ರ ಅದು ಕೆಲಸ ಮಾಡುತ್ತದೆ. ವಿಭಾಗ 4: ಗುರಿ ಇಲ್ಲದ ಟಿಪ್ಪಣಿ \"the goal is missing from the note\" ಜೊತೆ ವಿಫಲವಾಯಿತು, ಗುರಿ ಇರುವ ಟಿಪ್ಪಣಿಗೆ ವೈಫಲ್ಯ ಇರಲಿಲ್ಲ ಮತ್ತು ಕಾಣೆಯಾದ ಟಿಪ್ಪಣಿ ವಿಫಲವಾಯಿತು; ಈ ಡೆಮೊದಲ್ಲಿ hard-code ಮಾಡಿದ ಎರಡು ಮಾನದಂಡಗಳನ್ನು ಮಾತ್ರ verifier ಪರಿಶೀಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Splitting instructions, state and queue lets each be small and checkable, and recording intent before acting is what makes a crash recoverable.",
    "bodyKn": "ಸೂಚನೆಗಳು, ಸ್ಥಿತಿ ಮತ್ತು ಸರದಿಯನ್ನು ಬೇರ್ಪಡಿಸುವುದು ಪ್ರತಿಯೊಂದನ್ನೂ ಚಿಕ್ಕ ಮತ್ತು ಪರಿಶೀಲಿಸಬಹುದಾದಂತೆ ಮಾಡುತ್ತದೆ, ಮತ್ತು ಕ್ರಿಯೆ ಮುನ್ನ ಉದ್ದೇಶ ದಾಖಲಿಸುವುದು ಕ್ರ್ಯಾಶ್ ಅನ್ನು ಚೇತರಿಸಬಲ್ಲದಾಗಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a saved status tells you what happened.\" After the crash the status said in_progress while the note already had the line.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಉಳಿಸಿದ ಸ್ಥಿತಿ ಏನಾಯಿತು ಎಂದು ಹೇಳುತ್ತದೆ.\" ಕ್ರ್ಯಾಶ್ ನಂತರ ಟಿಪ್ಪಣಿಯಲ್ಲಿ ಸಾಲು ಈಗಾಗಲೇ ಇದ್ದರೂ ಸ್ಥಿತಿ in_progress ಎನ್ನುತ್ತಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Router: a short file that points to deeper rules. System of record: the authoritative source of task status. Allowlist: the files a task may write. Idempotent update: repeating it leaves one effect. Acceptance criteria: conditions the verifier checks.",
    "bodyKn": "Router: ಆಳವಾದ ನಿಯಮಗಳಿಗೆ ತೋರಿಸುವ ಚಿಕ್ಕ ಫೈಲ್. System of record: ಕಾರ್ಯ ಸ್ಥಿತಿಯ ಅಧಿಕೃತ ಮೂಲ. Allowlist: ಕಾರ್ಯ ಬರೆಯಬಹುದಾದ ಫೈಲ್‌ಗಳು. Idempotent update: ಪುನರಾವರ್ತನೆ ಒಂದೇ ಪರಿಣಾಮ ಬಿಡುತ್ತದೆ. Acceptance criteria: verifier ಪರಿಶೀಲಿಸುವ ಷರತ್ತುಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Create-only initialisation kept a saved blocker; an always-write version erased it. 2) Names on the task list could still escape the workbench and were refused. 3) A crash after the write produced 2 lines unless the update checked first (1 line). 4) Acceptance failed for a missing goal and a missing file.",
    "bodyKn": "1) Create-only ಆರಂಭ ಉಳಿಸಿದ ಅಡೆತಡೆ ಉಳಿಸಿತು; ಯಾವಾಗಲೂ-ಬರೆಯುವ ಆವೃತ್ತಿ ಅದನ್ನು ಅಳಿಸಿತು. 2) ಕಾರ್ಯ ಪಟ್ಟಿಯ ಹೆಸರುಗಳು ಇನ್ನೂ workbench ಹೊರಹೋಗಬಹುದಿತ್ತು ಮತ್ತು ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟವು. 3) ಬರಹದ ನಂತರದ ಕ್ರ್ಯಾಶ್ ನವೀಕರಣ ಮೊದಲು ಪರಿಶೀಲಿಸದಿದ್ದರೆ 2 ಸಾಲು (ಪರಿಶೀಲಿಸಿದರೆ 1) ನೀಡಿತು. 4) ಕಾಣೆಯಾದ ಗುರಿ ಮತ್ತು ಕಾಣೆಯಾದ ಫೈಲ್‌ಗೆ ಸ್ವೀಕಾರ ವಿಫಲವಾಯಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did an initialize that always wrote the state file do to a saved blocker?",
      "qKn": "ಯಾವಾಗಲೂ state ಫೈಲ್ ಬರೆಯುವ initialize ಉಳಿಸಿದ ಅಡೆತಡೆಗೆ ಏನು ಮಾಡಿತು?",
      "opts": [
       "Kept it",
       "Reset it to an empty list",
       "Moved it",
       "Encrypted it"
      ],
      "optsKn": [
       "ಉಳಿಸಿತು",
       "ಖಾಲಿ ಪಟ್ಟಿಗೆ ಮರುಹೊಂದಿಸಿತು",
       "ಸರಿಸಿತು",
       "ಗೂಢಲಿಪೀಕರಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why was \"../escape.txt\" refused even when it was on the task's own list?",
      "qKn": "ಕಾರ್ಯದ ಸ್ವಂತ ಪಟ್ಟಿಯಲ್ಲಿದ್ದರೂ \"../escape.txt\" ಏಕೆ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತು?",
      "opts": [
       "It resolves outside the workbench",
       "It was too long",
       "It was a directory",
       "It had no extension"
      ],
      "optsKn": [
       "ಅದು workbench ಹೊರಗೆ ಪರಿಹರಿಸುತ್ತದೆ",
       "ಅದು ತುಂಬಾ ಉದ್ದ",
       "ಅದು ಡೈರೆಕ್ಟರಿ",
       "ಅದಕ್ಕೆ ವಿಸ್ತರಣೆ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "How many \"Completed\" lines after a crash and resume without and with the idempotent update?",
      "qKn": "Idempotent ನವೀಕರಣ ಇಲ್ಲದೆ ಮತ್ತು ಜೊತೆ ಕ್ರ್ಯಾಶ್ ಮತ್ತು ಮುಂದುವರಿಕೆ ನಂತರ ಎಷ್ಟು \"Completed\" ಸಾಲು?",
      "opts": [
       "1 and 1",
       "2 and 1",
       "1 and 2",
       "2 and 2"
      ],
      "optsKn": [
       "1 ಮತ್ತು 1",
       "2 ಮತ್ತು 1",
       "1 ಮತ್ತು 2",
       "2 ಮತ್ತು 2"
      ],
      "correct": 1
     },
     {
      "q": "What did the second run report after TASK-001 was done?",
      "qKn": "TASK-001 done ಆದ ನಂತರ ಎರಡನೇ ಓಟ ಏನು ವರದಿ ಮಾಡಿತು?",
      "opts": [
       "A new task",
       "No eligible task",
       "An error",
       "The same task again"
      ],
      "optsKn": [
       "ಹೊಸ ಕಾರ್ಯ",
       "ಅರ್ಹ ಕಾರ್ಯ ಇಲ್ಲ",
       "ದೋಷ",
       "ಅದೇ ಕಾರ್ಯ ಮತ್ತೆ"
      ],
      "correct": 1
     },
     {
      "q": "What does the demo verifier check?",
      "qKn": "ಡೆಮೊ verifier ಏನನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ?",
      "opts": [
       "Only the criteria hard-coded for this task",
       "Any criteria",
       "The whole repository",
       "Nothing"
      ],
      "optsKn": [
       "ಈ ಕಾರ್ಯಕ್ಕೆ hard-code ಮಾಡಿದ ಮಾನದಂಡ ಮಾತ್ರ",
       "ಯಾವುದೇ ಮಾನದಂಡ",
       "ಇಡೀ repository",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
