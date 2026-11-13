module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b32156b",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "The Minimal Agent Workbench (Part 2 of 3) — Validation, Atomic Writes and Recovery",
 "titleKn": "ಕನಿಷ್ಠ Agent Workbench (ಭಾಗ 2 / 3) — ಮಾನ್ಯತೆ, Atomic ಬರಹಗಳು ಮತ್ತು ಚೇತರಿಕೆ",
 "desc": "Validate tasks, compare plain and atomic writes, create drift between two files and write a recovery function that inspects the real artifact.",
 "descKn": "ಕಾರ್ಯಗಳನ್ನು ಮಾನ್ಯಗೊಳಿಸಿ, ಸರಳ ಮತ್ತು atomic ಬರಹಗಳನ್ನು ಹೋಲಿಸಿ, ಎರಡು ಫೈಲ್‌ಗಳ ನಡುವೆ drift ರಚಿಸಿ ಮತ್ತು ನಿಜ ಕಲಾಕೃತಿ ಪರೀಕ್ಷಿಸುವ ಚೇತರಿಕೆ ಫಂಕ್ಷನ್ ಬರೆಯಿರಿ.",
 "objectives": [
  "Validate external task data.",
  "Report corrupt and missing separately.",
  "Explain why per-file atomicity is not a transaction.",
  "Recover from the real artifact.",
  "Enforce legal status transitions."
 ],
 "objectivesKn": [
  "ಬಾಹ್ಯ ಕಾರ್ಯ ಡೇಟಾ ಮಾನ್ಯಗೊಳಿಸಿ.",
  "ಹಾಳಾದದ್ದು ಮತ್ತು ಕಾಣೆಯಾದದ್ದು ಪ್ರತ್ಯೇಕವಾಗಿ ವರದಿ ಮಾಡಿ.",
  "ಪ್ರತಿ-ಫೈಲ್ atomicity ವಹಿವಾಟು ಏಕಲ್ಲ ಎಂದು ವಿವರಿಸಿ.",
  "ನಿಜ ಕಲಾಕೃತಿಯಿಂದ ಚೇತರಿಸಿ.",
  "ಕಾನೂನುಬದ್ಧ ಸ್ಥಿತಿ ಪರಿವರ್ತನೆ ಜಾರಿಗೊಳಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "The Minimal Agent Workbench (Part 2 of 3)",
    "textKn": "ಕನಿಷ್ಠ Agent Workbench (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: task validation, corrupt JSON, atomic writes, drift between two files and evidence-based recovery. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the minimal agent workbench (AGENTS.md router, agent_state.json and task_board.json), not the real software, and the agent is a scripted function working on real temporary files and no language model is involved, so no real LLM behaviour is measured. The pasted lesson said the original code/main.py was not supplied, so the lab is our own implementation of the behaviour it describes. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಕಾರ್ಯ ಮಾನ್ಯತೆ, ಹಾಳಾದ JSON, atomic ಬರಹಗಳು, ಎರಡು ಫೈಲ್‌ಗಳ ನಡುವೆ drift ಮತ್ತು ಸಾಕ್ಷ್ಯ-ಆಧಾರಿತ ಚೇತರಿಕೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಕನಿಷ್ಠ agent workbench (AGENTS.md router, agent_state.json ಮತ್ತು task_board.json) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು agent ನಿಜ ತಾತ್ಕಾಲಿಕ ಫೈಲ್‌ಗಳ ಮೇಲೆ ಕೆಲಸ ಮಾಡುವ ಸ್ಕ್ರಿಪ್ಟ್ ಫಂಕ್ಷನ್ ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ಮೂಲ code/main.py ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "When the Happy Path Ends",
    "textKn": "ಸುಖ ಮಾರ್ಗ ಮುಗಿದಾಗ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Data, Writes and Recovery",
    "headingKn": "ಡೇಟಾ, ಬರಹಗಳು ಮತ್ತು ಚೇತರಿಕೆ",
    "bodyEn": "A task board is external data, a state file can be truncated by a crash, and two files updated one after the other can disagree. This part validates tasks from a file, shows a truncated state file with plain and atomic writes, creates a real disagreement between the state file and the board, and writes a recovery function that decides what to do from the saved records and the actual note.",
    "bodyKn": "Task board ಬಾಹ್ಯ ಡೇಟಾ, ಕ್ರ್ಯಾಶ್‌ನಿಂದ state ಫೈಲ್ ಕತ್ತರಿಸಲ್ಪಡಬಹುದು, ಮತ್ತು ಒಂದರ ನಂತರ ಒಂದು ನವೀಕರಿಸಿದ ಎರಡು ಫೈಲ್‌ಗಳು ಭಿನ್ನವಾಗಬಹುದು. ಈ ಭಾಗ ಫೈಲ್‌ನಿಂದ ಕಾರ್ಯಗಳನ್ನು ಮಾನ್ಯಗೊಳಿಸಿ, ಸರಳ ಮತ್ತು atomic ಬರಹಗಳೊಂದಿಗೆ ಕತ್ತರಿಸಿದ state ಫೈಲ್ ತೋರಿಸಿ, state ಫೈಲ್ ಮತ್ತು board ನಡುವೆ ನಿಜ ಭಿನ್ನಮತ ರಚಿಸಿ, ಉಳಿಸಿದ ದಾಖಲೆಗಳು ಮತ್ತು ನಿಜ ಟಿಪ್ಪಣಿಯಿಂದ ಏನು ಮಾಡಬೇಕೆಂದು ನಿರ್ಧರಿಸುವ ಚೇತರಿಕೆ ಫಂಕ್ಷನ್ ಬರೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Validate, Write, Recover",
    "headingKn": "ಮಾನ್ಯಗೊಳಿಸಿ, ಬರೆಯಿರಿ, ಚೇತರಿಸಿ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Validate and recover</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">validate</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">shape and paths</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">atomic write</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">one file at a time</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">drift</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">two files disagree</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">recover</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">inspect the real file</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">recovery uses evidence, not the record alone</text></svg>",
    "captionEn": "Recovery inspects the real file.",
    "captionKn": "ಚೇತರಿಕೆ ನಿಜ ಫೈಲ್ ಪರೀಕ್ಷಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Failure and response",
    "headingKn": "ವೈಫಲ್ಯ ಮತ್ತು ಪ್ರತಿಕ್ರಿಯೆ",
    "headers": [
     "Condition",
     "Response",
     "Limit"
    ],
    "rows": [
     [
      "Malformed task",
      "reject before touching files",
      "does not check id uniqueness"
     ],
     [
      "Truncated JSON",
      "report corrupt, never default",
      "needs a backup to restore"
     ],
     [
      "Two files disagree",
      "detect and reconcile",
      "per-file atomicity is not a transaction"
     ],
     [
      "Interrupted task",
      "inspect the artifact, then decide",
      "only as good as the checks"
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
    "filename": "mw_2.py",
    "headingEn": "validate_task, atomic and plain writes, load_state and recover",
    "headingKn": "validate_task, atomic ಮತ್ತು ಸರಳ ಬರಹಗಳು, load_state ಮತ್ತು recover",
    "descEn": "validate_task returns every problem with a task. write_atomic writes a temp file, fsyncs and replaces. load_state distinguishes missing from corrupt. recover compares the saved task and state with the real note text to choose resume, verify, repair, clear or quarantine.",
    "descKn": "validate_task ಕಾರ್ಯದ ಪ್ರತಿ ಸಮಸ್ಯೆ ಮರಳಿಸುತ್ತದೆ. write_atomic temp ಫೈಲ್ ಬರೆದು fsync ಮಾಡಿ ಬದಲಿಸುತ್ತದೆ. load_state ಕಾಣೆಯಾದದ್ದು ಮತ್ತು ಹಾಳಾದದ್ದನ್ನು ಬೇರ್ಪಡಿಸುತ್ತದೆ. recover ಉಳಿಸಿದ ಕಾರ್ಯ ಮತ್ತು ಸ್ಥಿತಿಯನ್ನು ನಿಜ ಟಿಪ್ಪಣಿ ಪಠ್ಯದೊಂದಿಗೆ ಹೋಲಿಸಿ resume, verify, repair, clear ಅಥವಾ quarantine ಆರಿಸುತ್ತದೆ.",
    "code": "VALID_STATUSES = {\"todo\", \"in_progress\", \"blocked\", \"failed\", \"done\"}\n\n\ndef validate_task(task):\n    problems = []\n    if not isinstance(task, dict):\n        return [\"task must be an object\"]\n    if not isinstance(task.get(\"id\"), str) or not task.get(\"id\"):\n        problems.append(\"id must be a non-empty string\")\n    if not isinstance(task.get(\"goal\"), str) or not task.get(\"goal\"):\n        problems.append(\"goal must be a non-empty string\")\n    if task.get(\"status\") not in VALID_STATUSES:\n        problems.append(f\"status {task.get('status')!r} is not one of {sorted(VALID_STATUSES)}\")\n    allowed = task.get(\"allowed_files\")\n    if not isinstance(allowed, list) or not allowed or not all(isinstance(x, str) for x in allowed):\n        problems.append(\"allowed_files must be a non-empty list of strings\")\n    elif any(x.startswith(\"/\") or \"..\" in Path(x).parts for x in allowed):\n        problems.append(\"allowed_files contains an absolute or parent-relative path\")\n    if not isinstance(task.get(\"acceptance_criteria\"), list) or not task.get(\"acceptance_criteria\"):\n        problems.append(\"acceptance_criteria are required\")\n    return problems\n\n\ndef write_plain(path, data):\n    Path(path).write_text(json.dumps(data), encoding=\"utf-8\")\n\n\ndef write_atomic(path, data):\n    tmp = Path(str(path) + \".tmp\")\n    with open(tmp, \"w\", encoding=\"utf-8\") as f:\n        json.dump(data, f)\n        f.flush()\n        os.fsync(f.fileno())\n    os.replace(tmp, path)\n\n\ndef load_state(path):\n    try:\n        return json.loads(Path(path).read_text(encoding=\"utf-8\")), None\n    except FileNotFoundError:\n        return None, \"missing\"\n    except json.JSONDecodeError:\n        return None, \"corrupt\"\n\n\ndef recover(task, state, note_text):\n    \"\"\"Decide what to do after an interruption using the saved records AND the real artifact.\"\"\"\n    active = state.get(\"active_task_id\")\n    if active is None:\n        return \"no active task: select the next one\"\n    if task is None:\n        return \"active task is not on the board: quarantine the stale state and record the inconsistency\"\n    line = f\"Completed: {task['goal']}\"\n    if task[\"status\"] == \"done\":\n        return \"board says done: clear the active id\"\n    if line in note_text.splitlines():\n        return \"required change already present: run the acceptance checks and record the verified result\"\n    if note_text.strip() and note_text.strip() != \"Project notes\":\n        return \"partial or unexpected content: repair with an idempotent update\"\n    return \"no change made yet: resume the task\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "mw_2.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() validates four task shapes, damages state files in two ways, creates drift between two files, runs six recovery cases and tests lifecycle transitions.",
    "descKn": "main() ನಾಲ್ಕು ಕಾರ್ಯ ಆಕಾರ ಮಾನ್ಯಗೊಳಿಸಿ, state ಫೈಲ್‌ಗಳನ್ನು ಎರಡು ರೀತಿ ಹಾನಿ ಮಾಡಿ, ಎರಡು ಫೈಲ್‌ಗಳ ನಡುವೆ drift ರಚಿಸಿ, ಆರು ಚೇತರಿಕೆ ಪ್ರಕರಣ ಓಡಿಸಿ ಜೀವನಚಕ್ರ ಪರಿವರ್ತನೆ ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Genuinely checking: validating tasks from an external file\")\n    good = {\"id\": \"TASK-001\", \"goal\": \"Create a note\", \"status\": \"todo\", \"allowed_files\": [\"notes.txt\"], \"acceptance_criteria\": [\"exists\"]}\n    bad = {\"id\": \"TASK-002\", \"goal\": \"\", \"status\": \"complete\", \"allowed_files\": \"../secrets.txt\"}\n    worse = {\"id\": \"TASK-003\", \"goal\": \"x\", \"status\": \"todo\", \"allowed_files\": [\"/etc/passwd\", \"../x\"], \"acceptance_criteria\": [\"a\"]}\n    for name, t in ((\"valid\", good), (\"malformed\", bad), (\"escaping paths\", worse), (\"not an object\", [\"x\"])):\n        print(f\"{name:15} -> {validate_task(t) or 'no problems'}\")\n    print(\"shape and path-syntax errors are caught before any file is touched; this validates the task data and does not prove the filesystem is safe, and uniqueness of ids is not checked here\")\n\n    section(\"2. Genuinely checking: a truncated state file, plain versus atomic writes\")\n    with tempfile.TemporaryDirectory() as d:\n        p = Path(d) / \"agent_state.json\"\n        write_plain(p, {\"active_task_id\": \"TASK-001\"})\n        p.write_text('{\"active_task_id\": ', encoding=\"utf-8\")  # an interrupted in-place overwrite\n        print(\"after an interrupted plain overwrite:\", load_state(p))\n        write_atomic(p, {\"active_task_id\": \"TASK-001\"})\n        Path(str(p) + \".tmp\").write_text('{\"active_task_id\": ', encoding=\"utf-8\")  # an interrupted atomic write leaves only the temp file damaged\n        print(\"after an interrupted atomic write:\", load_state(p))\n        print(\"missing file:\", load_state(Path(d) / \"nope.json\"))\n    print(\"the loader reports missing and corrupt separately and does not treat either as an empty state; resetting a corrupt file to defaults would erase the only record of unfinished work\")\n\n    section(\"3. Genuinely checking: the state file and the board disagree after a crash between two writes\")\n    with tempfile.TemporaryDirectory() as d:\n        root = Path(d)\n        state_p, board_p = root / \"agent_state.json\", root / \"task_board.json\"\n        write_atomic(state_p, {\"active_task_id\": None})\n        write_atomic(board_p, {\"tasks\": [dict(good, status=\"todo\")]})\n        state = json.loads(state_p.read_text()); board = json.loads(board_p.read_text())\n        state[\"active_task_id\"] = \"TASK-001\"\n        write_atomic(state_p, state)  # first write succeeds\n        # the process dies here, before the board write\n        s, b = json.loads(state_p.read_text()), json.loads(board_p.read_text())\n        print(f\"state says active={s['active_task_id']}, board says status={b['tasks'][0]['status']}\")\n        print(\"each file is valid on its own and the pair is inconsistent: per-file atomic writes do not make a two-file update atomic\")\n\n    section(\"4. Genuinely checking: recovery decisions from the saved records and the actual note\")\n    task = dict(good, goal=\"Create a project note\")\n    cases = [(\"no active task\", {\"active_task_id\": None}, task, \"Project notes\\n\"), (\"task missing from the board\", {\"active_task_id\": \"TASK-009\"}, None, \"Project notes\\n\"),\n             (\"nothing written yet\", {\"active_task_id\": \"TASK-001\"}, dict(task, status=\"in_progress\"), \"Project notes\\n\"),\n             (\"change already applied\", {\"active_task_id\": \"TASK-001\"}, dict(task, status=\"in_progress\"), \"Project notes\\nCompleted: Create a project note\\n\"),\n             (\"board already done\", {\"active_task_id\": \"TASK-001\"}, dict(task, status=\"done\"), \"Project notes\\n\"), (\"unexpected content\", {\"active_task_id\": \"TASK-001\"}, dict(task, status=\"in_progress\"), \"garbage\\n\")]\n    for name, st, tk, note in cases:\n        print(f\"{name:28} -> {recover(tk, st, note)}\")\n    print(\"the same saved status (in_progress) led to different actions depending on what was actually in the file, which is why recovery inspects the environment instead of trusting the record\")\n\n    section(\"5. Genuinely checking: a status field that bypasses the lifecycle\")\n    legal = {\"todo\": {\"in_progress\", \"blocked\"}, \"in_progress\": {\"blocked\", \"failed\", \"done\"}, \"blocked\": {\"in_progress\"}, \"failed\": {\"in_progress\"}, \"done\": set()}\n    for a, b in ((\"todo\", \"in_progress\"), (\"done\", \"in_progress\"), (\"todo\", \"done\"), (\"failed\", \"in_progress\")):\n        print(f\"{a:12} -> {b:12} {'allowed' if b in legal[a] else 'refused'}\")\n    print(\"a finished task does not silently return to in_progress, and a task cannot jump from todo to done without passing through work; a reopen would need its own explicit operation\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely checking: validating tasks from an external file ---\nvalid           -> no problems\nmalformed       -> ['goal must be a non-empty string', \"status 'complete' is not one of ['blocked', 'done', 'failed', 'in_progress', 'todo']\", 'allowed_files must be a non-empty list of strings', 'acceptance_criteria are required']\nescaping paths  -> ['allowed_files contains an absolute or parent-relative path']\nnot an object   -> ['task must be an object']\nshape and path-syntax errors are caught before any file is touched; this validates the task data and does not prove the filesystem is safe, and uniqueness of ids is not checked here\n\n--- 2. Genuinely checking: a truncated state file, plain versus atomic writes ---\nafter an interrupted plain overwrite: (None, 'corrupt')\nafter an interrupted atomic write: ({'active_task_id': 'TASK-001'}, None)\nmissing file: (None, 'missing')\nthe loader reports missing and corrupt separately and does not treat either as an empty state; resetting a corrupt file to defaults would erase the only record of unfinished work\n\n--- 3. Genuinely checking: the state file and the board disagree after a crash between two writes ---\nstate says active=TASK-001, board says status=todo\neach file is valid on its own and the pair is inconsistent: per-file atomic writes do not make a two-file update atomic\n\n--- 4. Genuinely checking: recovery decisions from the saved records and the actual note ---\nno active task               -> no active task: select the next one\ntask missing from the board  -> active task is not on the board: quarantine the stale state and record the inconsistency\nnothing written yet          -> no change made yet: resume the task\nchange already applied       -> required change already present: run the acceptance checks and record the verified result\nboard already done           -> board says done: clear the active id\nunexpected content           -> partial or unexpected content: repair with an idempotent update\nthe same saved status (in_progress) led to different actions depending on what was actually in the file, which is why recovery inspects the environment instead of trusting the record\n\n--- 5. Genuinely checking: a status field that bypasses the lifecycle ---\ntodo         -> in_progress  allowed\ndone         -> in_progress  refused\ntodo         -> done         refused\nfailed       -> in_progress  allowed\na finished task does not silently return to in_progress, and a task cannot jump from todo to done without passing through work; a reopen would need its own explicit operation"
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
    "headingEn": "Experiment 1: Validating tasks from an external file",
    "headingKn": "ಪ್ರಯೋಗ 1: Validating tasks from an external file",
    "bodyEn": "What it ran: Validating tasks from an external file. What the lab concluded: shape and path-syntax errors are caught before any file is touched; this validates the task data and does not prove the filesystem is safe, and uniqueness of ids is not checked here",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Validating tasks from an external file. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): shape and path-syntax errors are caught before any file is touched; this validates the task data and does not prove the filesystem is safe, and uniqueness of ids is not checked here"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely checking: validating tasks from an external file ---\nvalid           -> no problems\nmalformed       -> ['goal must be a non-empty string', \"status 'complete' is not one of ['blocked', 'done', 'failed', 'in_progress', 'todo']\", 'allowed_files must be a non-empty list of strings', 'acceptance_criteria ar…\nescaping paths  -> ['allowed_files contains an absolute or parent-relative path']\nnot an object   -> ['task must be an object']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: A truncated state file, plain versus atomic writes",
    "headingKn": "ಪ್ರಯೋಗ 2: A truncated state file, plain versus atomic writes",
    "bodyEn": "What it ran: A truncated state file, plain versus atomic writes. What the lab concluded: the loader reports missing and corrupt separately and does not treat either as an empty state; resetting a corrupt file to defaults would erase the only record of unfinished work",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A truncated state file, plain versus atomic writes. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the loader reports missing and corrupt separately and does not treat either as an empty state; resetting a corrupt file to defaults would erase the only record of unfinished work"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely checking: a truncated state file, plain versus atomic writes ---\nafter an interrupted plain overwrite: (None, 'corrupt')\nafter an interrupted atomic write: ({'active_task_id': 'TASK-001'}, None)\nmissing file: (None, 'missing')"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: The state file and the board disagree after a crash between two writes",
    "headingKn": "ಪ್ರಯೋಗ 3: The state file and the board disagree after a crash between two writes",
    "bodyEn": "What it ran: The state file and the board disagree after a crash between two writes. What the lab concluded: each file is valid on its own and the pair is inconsistent: per-file atomic writes do not make a two-file update atomic",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The state file and the board disagree after a crash between two writes. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each file is valid on its own and the pair is inconsistent: per-file atomic writes do not make a two-file update atomic"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely checking: the state file and the board disagree after a crash between two writes ---\nstate says active=TASK-001, board says status=todo"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Recovery decisions from the saved records and the actual note",
    "headingKn": "ಪ್ರಯೋಗ 4: Recovery decisions from the saved records and the actual note",
    "bodyEn": "What it ran: Recovery decisions from the saved records and the actual note. What the lab concluded: the same saved status (in_progress) led to different actions depending on what was actually in the file, which is why recovery inspects the environment instead of trusting the record",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Recovery decisions from the saved records and the actual note. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the same saved status (in_progress) led to different actions depending on what was actually in the file, which is why recovery inspects the environment instead of trusting the record"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely checking: recovery decisions from the saved records and the actual note ---\nno active task               -> no active task: select the next one\ntask missing from the board  -> active task is not on the board: quarantine the stale state and record the inconsistency\nnothing written yet          -> no change made yet: resume the task\nchange already applied       -> required change already present: run the acceptance checks and record the verified result\nboard already done           -> board says done: clear the active id\nunexpected content           -> partial or unexpected content: repair with an idempotent update"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A status field that bypasses the lifecycle",
    "headingKn": "ಪ್ರಯೋಗ 5: A status field that bypasses the lifecycle",
    "bodyEn": "What it ran: A status field that bypasses the lifecycle. What the lab concluded: a finished task does not silently return to in_progress, and a task cannot jump from todo to done without passing through work; a reopen would need its own explicit operation",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A status field that bypasses the lifecycle. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a finished task does not silently return to in_progress, and a task cannot jump from todo to done without passing through work; a reopen would need its own explicit operation"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely checking: a status field that bypasses the lifecycle ---\ntodo         -> in_progress  allowed\ndone         -> in_progress  refused\ntodo         -> done         refused\nfailed       -> in_progress  allowed"
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
    "headingEn": "Genuinely Found: Validation, Corruption and Drift",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮಾನ್ಯತೆ, ಹಾಳಾಗುವಿಕೆ ಮತ್ತು Drift",
    "bodyEn": "Section 1: a valid task gave no problems; a malformed task reported an empty goal, the status \"complete\" that is not a legal status, a string where a list was needed and missing acceptance criteria; paths such as \"/etc/passwd\" and \"../x\" were rejected. Section 2: a plain overwrite cut halfway left the state file corrupt, while an interrupted atomic write left the real file readable; missing and corrupt are reported separately. Section 3: after a crash between two writes the state said TASK-001 was active while the board still said todo, each file valid on its own.",
    "bodyKn": "ವಿಭಾಗ 1: ಮಾನ್ಯ ಕಾರ್ಯ ಯಾವುದೇ ಸಮಸ್ಯೆ ನೀಡಲಿಲ್ಲ; ತಪ್ಪಾದ ಕಾರ್ಯ ಖಾಲಿ ಗುರಿ, ಕಾನೂನುಬದ್ಧವಲ್ಲದ \"complete\" ಸ್ಥಿತಿ, ಪಟ್ಟಿ ಬೇಕಾದಲ್ಲಿ ಸ್ಟ್ರಿಂಗ್ ಮತ್ತು ಕಾಣೆಯಾದ ಸ್ವೀಕಾರ ಮಾನದಂಡ ವರದಿ ಮಾಡಿತು; \"/etc/passwd\" ಮತ್ತು \"../x\" ನಂತಹ paths ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟವು. ವಿಭಾಗ 2: ಅರ್ಧಕ್ಕೆ ಕತ್ತರಿಸಿದ ಸರಳ ಮೇಲ್ಬರಹ state ಫೈಲ್ ಹಾಳಾಗಿಸಿತು, ಅಡ್ಡಿಪಡಿಸಿದ atomic ಬರಹ ನಿಜ ಫೈಲ್ ಓದಬಲ್ಲದಾಗಿಟ್ಟಿತು; ಕಾಣೆಯಾದದ್ದು ಮತ್ತು ಹಾಳಾದದ್ದು ಪ್ರತ್ಯೇಕವಾಗಿ ವರದಿಯಾಗುತ್ತವೆ. ವಿಭಾಗ 3: ಎರಡು ಬರಹಗಳ ನಡುವೆ ಕ್ರ್ಯಾಶ್ ನಂತರ state TASK-001 ಸಕ್ರಿಯ ಎಂದಿತು ಆದರೆ board ಇನ್ನೂ todo ಎಂದಿತು, ಪ್ರತಿ ಫೈಲ್ ತನ್ನಷ್ಟಕ್ಕೆ ಮಾನ್ಯ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Recovery From Evidence and a Lifecycle That Refuses Shortcuts",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಾಕ್ಷ್ಯದಿಂದ ಚೇತರಿಕೆ ಮತ್ತು ಶಾರ್ಟ್‌ಕಟ್ ತಿರಸ್ಕರಿಸುವ ಜೀವನಚಕ್ರ",
    "bodyEn": "Section 4: the same saved in_progress state led to different actions: resume when nothing had been written, run the acceptance checks when the required line was already present, repair idempotently when the content was unexpected, clear the active id when the board said done, and quarantine when the task was missing from the board. Section 5: done to in_progress and todo to done were refused while todo to in_progress and failed to in_progress were allowed.",
    "bodyKn": "ವಿಭಾಗ 4: ಅದೇ ಉಳಿಸಿದ in_progress ಸ್ಥಿತಿ ವಿಭಿನ್ನ ಕ್ರಿಯೆಗಳಿಗೆ ಕಾರಣವಾಯಿತು: ಏನೂ ಬರೆಯದಿದ್ದಾಗ ಮುಂದುವರಿಸು, ಅಗತ್ಯ ಸಾಲು ಈಗಾಗಲೇ ಇದ್ದಾಗ ಸ್ವೀಕಾರ ಪರಿಶೀಲನೆ ಓಡಿಸು, ವಿಷಯ ಅನಿರೀಕ್ಷಿತವಾದಾಗ idempotent ಆಗಿ ದುರಸ್ತಿ ಮಾಡು, board done ಎಂದಾಗ ಸಕ್ರಿಯ id ತೆರವುಗೊಳಿಸು, ಮತ್ತು ಕಾರ್ಯ board ನಲ್ಲಿ ಕಾಣೆಯಾದಾಗ quarantine ಮಾಡು. ವಿಭಾಗ 5: done ರಿಂದ in_progress ಮತ್ತು todo ರಿಂದ done ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟವು, todo ರಿಂದ in_progress ಮತ್ತು failed ರಿಂದ in_progress ಅನುಮತಿಸಲ್ಪಟ್ಟವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Real runs end in crashes and half-written files, so a workbench needs validation, separate reporting of missing and corrupt data, and a recovery step that looks at the environment.",
    "bodyKn": "ನಿಜ ಓಟಗಳು ಕ್ರ್ಯಾಶ್ ಮತ್ತು ಅರ್ಧ-ಬರೆದ ಫೈಲ್‌ಗಳಲ್ಲಿ ಮುಗಿಯುತ್ತವೆ, ಆದ್ದರಿಂದ workbench ಗೆ ಮಾನ್ಯತೆ, ಕಾಣೆಯಾದ ಮತ್ತು ಹಾಳಾದ ಡೇಟಾದ ಪ್ರತ್ಯೇಕ ವರದಿ ಮತ್ತು ಪರಿಸರವನ್ನು ನೋಡುವ ಚೇತರಿಕೆ ಹಂತ ಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"atomic writes make the workbench crash-safe.\" Each file stayed valid and the pair still disagreed.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"atomic ಬರಹಗಳು workbench ಅನ್ನು ಕ್ರ್ಯಾಶ್-ಸುರಕ್ಷಿತ ಮಾಡುತ್ತವೆ.\" ಪ್ರತಿ ಫೈಲ್ ಮಾನ್ಯವಾಗಿ ಉಳಿದರೂ ಜೋಡಿ ಇನ್ನೂ ಭಿನ್ನವಾಗಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Validation: checking data against a contract before use. Corrupt versus missing: different causes and different responses. Drift: two records that should agree do not. Recovery: reconciling saved state with the environment. Lifecycle: the legal order of statuses.",
    "bodyKn": "Validation: ಬಳಕೆಗೆ ಮುನ್ನ ಡೇಟಾವನ್ನು ಒಪ್ಪಂದದ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸುವುದು. ಹಾಳಾದದ್ದು ವಿರುದ್ಧ ಕಾಣೆಯಾದದ್ದು: ಬೇರೆ ಕಾರಣ ಮತ್ತು ಬೇರೆ ಪ್ರತಿಕ್ರಿಯೆ. Drift: ಒಪ್ಪಬೇಕಾದ ಎರಡು ದಾಖಲೆಗಳು ಒಪ್ಪುವುದಿಲ್ಲ. Recovery: ಉಳಿಸಿದ ಸ್ಥಿತಿಯನ್ನು ಪರಿಸರದೊಂದಿಗೆ ಸಮನ್ವಯಿಸುವುದು. Lifecycle: ಸ್ಥಿತಿಗಳ ಕಾನೂನುಬದ್ಧ ಕ್ರಮ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Validation listed every problem in a malformed task. 2) A plain overwrite cut halfway was corrupt; an atomic write was not. 3) A crash between two writes left active=TASK-001 and todo on the board. 4) One saved status produced five different recovery actions. 5) done to in_progress and todo to done were refused.",
    "bodyKn": "1) ಮಾನ್ಯತೆ ತಪ್ಪಾದ ಕಾರ್ಯದ ಪ್ರತಿ ಸಮಸ್ಯೆ ಪಟ್ಟಿ ಮಾಡಿತು. 2) ಅರ್ಧಕ್ಕೆ ಕತ್ತರಿಸಿದ ಸರಳ ಮೇಲ್ಬರಹ ಹಾಳಾಗಿತ್ತು; atomic ಬರಹ ಆಗಿರಲಿಲ್ಲ. 3) ಎರಡು ಬರಹಗಳ ನಡುವಿನ ಕ್ರ್ಯಾಶ್ active=TASK-001 ಮತ್ತು board ನಲ್ಲಿ todo ಬಿಟ್ಟಿತು. 4) ಒಂದು ಉಳಿಸಿದ ಸ್ಥಿತಿ ಐದು ವಿಭಿನ್ನ ಚೇತರಿಕೆ ಕ್ರಿಯೆಗಳನ್ನು ನೀಡಿತು. 5) done ರಿಂದ in_progress ಮತ್ತು todo ರಿಂದ done ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟವು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B mw_2.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B mw_2.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B mw_2.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B mw_2.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did an interrupted plain overwrite leave the state file as?",
      "qKn": "ಅಡ್ಡಿಪಡಿಸಿದ ಸರಳ ಮೇಲ್ಬರಹ state ಫೈಲ್ ಅನ್ನು ಏನಾಗಿ ಬಿಟ್ಟಿತು?",
      "opts": [
       "Readable",
       "Corrupt",
       "Missing",
       "Empty list"
      ],
      "optsKn": [
       "ಓದಬಲ್ಲದು",
       "ಹಾಳಾದದ್ದು",
       "ಕಾಣೆಯಾದದ್ದು",
       "ಖಾಲಿ ಪಟ್ಟಿ"
      ],
      "correct": 1
     },
     {
      "q": "After a crash between the state write and the board write, what did the board say?",
      "qKn": "State ಬರಹ ಮತ್ತು board ಬರಹದ ನಡುವಿನ ಕ್ರ್ಯಾಶ್ ನಂತರ board ಏನು ಹೇಳಿತು?",
      "opts": [
       "done",
       "todo",
       "blocked",
       "in_progress"
      ],
      "optsKn": [
       "done",
       "todo",
       "blocked",
       "in_progress"
      ],
      "correct": 1
     },
     {
      "q": "What did recovery do when the required line was already in the note?",
      "qKn": "ಅಗತ್ಯ ಸಾಲು ಈಗಾಗಲೇ ಟಿಪ್ಪಣಿಯಲ್ಲಿದ್ದಾಗ ಚೇತರಿಕೆ ಏನು ಮಾಡಿತು?",
      "opts": [
       "Wrote it again",
       "Ran the acceptance checks and recorded the result",
       "Deleted the note",
       "Ignored it"
      ],
      "optsKn": [
       "ಮತ್ತೆ ಬರೆಯಿತು",
       "ಸ್ವೀಕಾರ ಪರಿಶೀಲನೆ ಓಡಿಸಿ ಫಲಿತಾಂಶ ದಾಖಲಿಸಿತು",
       "ಟಿಪ್ಪಣಿ ಅಳಿಸಿತು",
       "ನಿರ್ಲಕ್ಷಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Which transition was refused?",
      "qKn": "ಯಾವ ಪರಿವರ್ತನೆ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತು?",
      "opts": [
       "todo to in_progress",
       "failed to in_progress",
       "done to in_progress",
       "in_progress to done"
      ],
      "optsKn": [
       "todo ರಿಂದ in_progress",
       "failed ರಿಂದ in_progress",
       "done ರಿಂದ in_progress",
       "in_progress ರಿಂದ done"
      ],
      "correct": 2
     },
     {
      "q": "Why report missing and corrupt separately?",
      "qKn": "ಕಾಣೆಯಾದದ್ದು ಮತ್ತು ಹಾಳಾದದ್ದನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಏಕೆ ವರದಿ ಮಾಡಬೇಕು?",
      "opts": [
       "They need different responses and a corrupt file must not be silently reset",
       "They are the same",
       "Missing is worse",
       "To save time"
      ],
      "optsKn": [
       "ಅವಕ್ಕೆ ಬೇರೆ ಪ್ರತಿಕ್ರಿಯೆ ಬೇಕು ಮತ್ತು ಹಾಳಾದ ಫೈಲ್ ಮೌನವಾಗಿ ಮರುಹೊಂದಿಸಬಾರದು",
       "ಅವು ಒಂದೇ",
       "ಕಾಣೆಯಾದದ್ದು ಕೆಟ್ಟದು",
       "ಸಮಯ ಉಳಿಸಲು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
