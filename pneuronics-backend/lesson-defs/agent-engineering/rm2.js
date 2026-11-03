module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321571",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Repo Memory and Durable State (Part 2 of 3) — The StateManager",
 "titleKn": "Repo ಸ್ಮರಣೆ ಮತ್ತು ಬಾಳಿಕೆ ಬರುವ ಸ್ಥಿತಿ (ಭಾಗ 2 / 3) — StateManager",
 "desc": "Build a StateManager with load, update and commit, prove persistence with a fresh manager and test rejection, copies and cross-file checks.",
 "descKn": "load, update ಮತ್ತು commit ಇರುವ StateManager ನಿರ್ಮಿಸಿ, ಹೊಸ manager ನೊಂದಿಗೆ ಉಳಿಕೆ ಸಾಬೀತುಪಡಿಸಿ ಮತ್ತು ತಿರಸ್ಕಾರ, ಪ್ರತಿಗಳು ಮತ್ತು ಅಡ್ಡ-ಫೈಲ್ ಪರಿಶೀಲನೆ ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Validate a candidate before accepting an update.",
  "Separate update from commit.",
  "Return copies.",
  "Prove persistence with a fresh reader.",
  "Check consistency across files."
 ],
 "objectivesKn": [
  "ನವೀಕರಣ ಸ್ವೀಕರಿಸುವ ಮುನ್ನ candidate ಮಾನ್ಯಗೊಳಿಸಿ.",
  "update ಮತ್ತು commit ಬೇರ್ಪಡಿಸಿ.",
  "ಪ್ರತಿಗಳನ್ನು ಮರಳಿಸಿ.",
  "ಹೊಸ ಓದುಗರೊಂದಿಗೆ ಉಳಿಕೆ ಸಾಬೀತುಪಡಿಸಿ.",
  "ಫೈಲ್‌ಗಳಾದ್ಯಂತ ಸ್ಥಿರತೆ ಪರಿಶೀಲಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Repo Memory and Durable State (Part 2 of 3)",
    "textKn": "Repo ಸ್ಮರಣೆ ಮತ್ತು ಬಾಳಿಕೆ ಬರುವ ಸ್ಥಿತಿ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: a StateManager with load, update and commit, candidate-copy updates, defensive copies and a round trip through real files. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind repo memory and durable state (schemas, a StateManager, atomic persistence and migrations), not the real software, and all state documents are hand-written and no language model is involved, so no real LLM behaviour is measured. The pasted lesson said its original main.py and schema files were not supplied, so the lab is our own implementation of the behaviour it describes. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: load, update ಮತ್ತು commit ಇರುವ StateManager, candidate-ಪ್ರತಿ ನವೀಕರಣಗಳು, ರಕ್ಷಣಾತ್ಮಕ ಪ್ರತಿಗಳು ಮತ್ತು ನಿಜ ಫೈಲ್‌ಗಳ ಮೂಲಕ ಸುತ್ತು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು repo ಸ್ಮರಣೆ ಮತ್ತು ಬಾಳಿಕೆ ಬರುವ ಸ್ಥಿತಿ (schemas, StateManager, atomic ಉಳಿಕೆ ಮತ್ತು migrations) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಎಲ್ಲಾ ಸ್ಥಿತಿ ದಾಖಲೆಗಳು ಕೈಬರಹ ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಮೂಲ main.py ಮತ್ತು schema ಫೈಲ್‌ಗಳನ್ನು ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "One Boundary for State Changes",
    "textKn": "ಸ್ಥಿತಿ ಬದಲಾವಣೆಗಳಿಗೆ ಒಂದು ಗಡಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The StateManager",
    "headingKn": "StateManager",
    "bodyEn": "If any code can open agent_state.json and overwrite it, the schema protects nothing. A StateManager is the single boundary: load reads and validates, update applies a change to a candidate copy and validates the whole document before accepting it, and commit validates again and writes atomically. This part builds it on the validator from the previous lesson and tests the properties that matter: persistence across managers, unchanged state after a rejection, defensive copies and refusal to write invalid data.",
    "bodyKn": "ಯಾವುದೇ ಕೋಡ್ agent_state.json ತೆರೆದು ಮೇಲ್ಬರಹ ಮಾಡಬಹುದಾದರೆ schema ಏನನ್ನೂ ರಕ್ಷಿಸುವುದಿಲ್ಲ. StateManager ಏಕೈಕ ಗಡಿ: load ಓದಿ ಮಾನ್ಯಗೊಳಿಸುತ್ತದೆ, update ಬದಲಾವಣೆಯನ್ನು candidate ಪ್ರತಿಗೆ ಅನ್ವಯಿಸಿ ಸ್ವೀಕರಿಸುವ ಮುನ್ನ ಇಡೀ ದಾಖಲೆಯನ್ನು ಮಾನ್ಯಗೊಳಿಸುತ್ತದೆ, ಮತ್ತು commit ಮತ್ತೆ ಮಾನ್ಯಗೊಳಿಸಿ atomic ಆಗಿ ಬರೆಯುತ್ತದೆ. ಈ ಭಾಗ ಹಿಂದಿನ lesson ನ validator ಮೇಲೆ ಅದನ್ನು ನಿರ್ಮಿಸಿ ಮುಖ್ಯವಾದ ಗುಣಗಳನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ: managers ನಡುವೆ ಉಳಿಕೆ, ತಿರಸ್ಕಾರದ ನಂತರ ಬದಲಾಗದ ಸ್ಥಿತಿ, ರಕ್ಷಣಾತ್ಮಕ ಪ್ರತಿಗಳು ಮತ್ತು ಅಮಾನ್ಯ ಡೇಟಾ ಬರೆಯಲು ನಿರಾಕರಣೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Load, Update, Commit",
    "headingKn": "Load, Update, Commit",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">StateManager</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">load</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">parse + validate</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">update</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">candidate copy</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">commit</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">atomic write</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">fresh manager</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">proves persistence</text><path d=\"M90,47 H110 M190,47 H210 M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">rejected updates leave state alone</text></svg>",
    "captionEn": "A fresh manager proves the state survived.",
    "captionKn": "ಹೊಸ manager ಸ್ಥಿತಿ ಉಳಿದಿದೆ ಎಂದು ಸಾಬೀತುಪಡಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The three methods",
    "headingKn": "ಮೂರು ವಿಧಾನಗಳು",
    "headers": [
     "Method",
     "Changes memory",
     "Changes disk"
    ],
    "rows": [
     [
      "load()",
      "yes, after validation",
      "no"
     ],
     [
      "update()",
      "yes, after validating a candidate",
      "no"
     ],
     [
      "commit()",
      "no",
      "yes, atomically and only if valid"
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
    "filename": "rm_2.py",
    "headingEn": "atomic_write, StateManager and cross_check",
    "headingKn": "atomic_write, StateManager ಮತ್ತು cross_check",
    "descEn": "StateManager.update deep-copies the accepted state, applies the changes, validates the whole candidate and only then replaces the state. load refuses corrupt JSON and invalid documents. commit revalidates and calls atomic_write. cross_check looks across the state file and the board for duplicate ids and an active task that is not on the board. The validator comes from rm_1.",
    "descKn": "StateManager.update ಅಂಗೀಕೃತ ಸ್ಥಿತಿಯ ಆಳ-ಪ್ರತಿ ಮಾಡಿ, ಬದಲಾವಣೆ ಅನ್ವಯಿಸಿ, ಇಡೀ candidate ಮಾನ್ಯಗೊಳಿಸಿ ನಂತರ ಮಾತ್ರ ಸ್ಥಿತಿ ಬದಲಿಸುತ್ತದೆ. load ಹಾಳಾದ JSON ಮತ್ತು ಅಮಾನ್ಯ ದಾಖಲೆಗಳನ್ನು ತಿರಸ್ಕರಿಸುತ್ತದೆ. commit ಮರುಮಾನ್ಯಗೊಳಿಸಿ atomic_write ಕರೆಯುತ್ತದೆ. cross_check state ಫೈಲ್ ಮತ್ತು board ಅಡ್ಡಲಾಗಿ ನಕಲು ids ಮತ್ತು board ನಲ್ಲಿಲ್ಲದ ಸಕ್ರಿಯ ಕಾರ್ಯ ನೋಡುತ್ತದೆ. Validator rm_1 ನಿಂದ ಬರುತ್ತದೆ.",
    "code": "def atomic_write(path, data):\n    path = Path(path)\n    tmp = Path(str(path) + \".tmp\")\n    with open(tmp, \"w\", encoding=\"utf-8\") as f:\n        json.dump(data, f, indent=2, sort_keys=True)\n        f.write(\"\\n\")\n        f.flush()\n        os.fsync(f.fileno())\n    os.replace(tmp, path)\n\n\nclass StateManager:\n    def __init__(self, path, schema, copy_out=True):\n        self.path, self.schema, self.state, self.copy_out = Path(path), schema, None, copy_out\n\n    def _out(self):\n        return copy.deepcopy(self.state) if self.copy_out else self.state\n\n    def load(self):\n        try:\n            candidate = json.loads(self.path.read_text(encoding=\"utf-8\"))\n        except FileNotFoundError:\n            raise\n        except json.JSONDecodeError as e:\n            raise ValueError(f\"corrupt JSON in {self.path.name}\") from e\n        errors = validate(candidate, self.schema)\n        if errors:\n            raise ValueError(\"; \".join(errors))\n        self.state = candidate\n        return self._out()\n\n    def update(self, changes):\n        if self.state is None:\n            raise RuntimeError(\"load before update\")\n        candidate = copy.deepcopy(self.state)\n        candidate.update(changes)\n        errors = validate(candidate, self.schema)\n        if errors:\n            raise ValueError(\"; \".join(errors))\n        self.state = candidate\n        return self._out()\n\n    def commit(self):\n        errors = validate(self.state, self.schema)\n        if errors:\n            raise ValueError(\"; \".join(errors))\n        atomic_write(self.path, self.state)\n\n\ndef cross_check(state, board):\n    ids = [t[\"id\"] for t in board[\"tasks\"]]\n    problems = []\n    if len(ids) != len(set(ids)):\n        problems.append(\"duplicate task ids on the board\")\n    if state[\"active_task_id\"] not in ids:\n        problems.append(f\"active task {state['active_task_id']} is not on the board\")\n    return problems"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rm_2.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs load, update and commit and reloads with a fresh manager, rejects three invalid updates, compares a careless manager and returned copies, loads corrupt and missing files, and refuses to commit an invalid state.",
    "descKn": "main() load, update ಮತ್ತು commit ಓಡಿಸಿ ಹೊಸ manager ನೊಂದಿಗೆ ಮರುಲೋಡ್ ಮಾಡಿ, ಮೂರು ಅಮಾನ್ಯ ನವೀಕರಣ ತಿರಸ್ಕರಿಸಿ, ನಿರ್ಲಕ್ಷ್ಯ manager ಮತ್ತು ಮರಳಿಸಿದ ಪ್ರತಿಗಳನ್ನು ಹೋಲಿಸಿ, ಹಾಳಾದ ಮತ್ತು ಕಾಣೆಯಾದ ಫೈಲ್‌ಗಳನ್ನು ಲೋಡ್ ಮಾಡಿ, ಅಮಾನ್ಯ ಸ್ಥಿತಿ commit ಮಾಡಲು ನಿರಾಕರಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    with tempfile.TemporaryDirectory() as d:\n        root = Path(d)\n        sp = root / \"agent_state.json\"\n\n        section(\"1. Genuinely running: load, update, commit, then a fresh manager reloads from disk\")\n        atomic_write(sp, GOOD)\n        m = StateManager(sp, AGENT_STATE_SCHEMA)\n        m.load()\n        m.update({\"active_task_id\": \"T-015\", \"touched_files\": [\"src/scheduler.py\", \"tests/test_scheduler.py\"], \"next_action\": \"Run the scheduler tests\"})\n        print(\"in memory before commit, file on disk still says:\", json.loads(sp.read_text())[\"active_task_id\"])\n        m.commit()\n        second = StateManager(sp, AGENT_STATE_SCHEMA).load()\n        print(\"fresh manager sees:\", second[\"active_task_id\"], second[\"touched_files\"], \"|\", second[\"next_action\"])\n        print(\"the update was not durable until commit(); a new manager reading the file is the evidence that it survived, where checking the old object would prove nothing\")\n\n        section(\"2. Genuinely checking: a rejected update leaves the accepted state unchanged\")\n        before = copy.deepcopy(m.state)\n        for bad in ({\"touched_files\": None}, {\"active_task_id\": \"T-01\"}, {\"schema_version\": \"2\"}):\n            try:\n                m.update(bad)\n                print(bad, \"-> accepted (wrong)\")\n            except ValueError as e:\n                print(f\"{str(bad):32} -> rejected: {e}\")\n        print(\"state unchanged after three rejections:\", m.state == before)\n        class Careless(StateManager):\n            def update(self, changes):\n                self.state.update(changes)  # mutates first, validates after\n                errors = validate(self.state, self.schema)\n                if errors:\n                    raise ValueError(\"; \".join(errors))\n        c = Careless(sp, AGENT_STATE_SCHEMA); c.load()\n        snapshot = copy.deepcopy(c.state)\n        try:\n            c.update({\"touched_files\": None})\n        except ValueError:\n            pass\n        print(\"a manager that mutates before validating: state unchanged =\", c.state == snapshot, \"| touched_files is now\", c.state[\"touched_files\"])\n        print(\"the careless version raised the same error and still left invalid data in memory, where the next read would trip over it\")\n\n        section(\"3. Genuinely checking: returned state must be a copy\")\n        for copy_out in (True, False):\n            mm = StateManager(sp, AGENT_STATE_SCHEMA, copy_out=copy_out)\n            got = mm.load()\n            got[\"touched_files\"] = None  # a caller edits the dictionary it received\n            ok = not validate(mm.state, AGENT_STATE_SCHEMA)\n            print(f\"copy_out={copy_out!s:5} caller set touched_files to None; manager's own state still valid = {ok}\")\n        print(\"handing out the internal dictionary let a caller bypass update() and validation without calling any method; deep copies stop that, and a read-only view would be stronger\")\n\n        section(\"4. Genuinely checking: corrupt, missing and cross-file problems\")\n        (root / \"bad.json\").write_text('{\"schema_version\": 1, \"active_task_id\": ', encoding=\"utf-8\")\n        for name in (\"bad.json\", \"nope.json\"):\n            try:\n                StateManager(root / name, AGENT_STATE_SCHEMA).load()\n            except (ValueError, FileNotFoundError) as e:\n                print(f\"{name:10} -> {type(e).__name__}: {e}\")\n        board = {\"schema_version\": 1, \"tasks\": [{\"id\": \"T-014\", \"title\": \"a\", \"status\": \"pending\"}, {\"id\": \"T-014\", \"title\": \"b\", \"status\": \"pending\"}]}\n        print(\"board schema errors:\", validate(board, TASK_BOARD_SCHEMA) or \"none\", \"| cross-file problems:\", cross_check(dict(GOOD, active_task_id=\"T-099\"), board))\n        print(\"each document passed its own schema and the pair was still inconsistent (duplicate ids, an active task that is not on the board); the load refuses a corrupt file instead of resetting it\")\n\n        section(\"5. Genuinely checking: commit refuses to write an invalid state\")\n        mm = StateManager(sp, AGENT_STATE_SCHEMA)\n        mm.load()\n        mm.state[\"touched_files\"] = None  # corrupted by code that bypassed update()\n        before_file = sp.read_text()\n        try:\n            mm.commit()\n        except ValueError as e:\n            print(\"commit refused:\", e)\n        print(\"file on disk unchanged by the refused commit:\", sp.read_text() == before_file)\n        print(\"revalidating at commit is a second guard for state changed by some other path; it does not replace encapsulation\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: load, update, commit, then a fresh manager reloads from disk ---\nin memory before commit, file on disk still says: T-014\nfresh manager sees: T-015 ['src/scheduler.py', 'tests/test_scheduler.py'] | Run the scheduler tests\nthe update was not durable until commit(); a new manager reading the file is the evidence that it survived, where checking the old object would prove nothing\n\n--- 2. Genuinely checking: a rejected update leaves the accepted state unchanged ---\n{'touched_files': None}          -> rejected: $.touched_files: expected array, got NoneType\n{'active_task_id': 'T-01'}       -> rejected: $.active_task_id: 'T-01' does not match ^T-\\d{3,}$\n{'schema_version': '2'}          -> rejected: $.schema_version: expected integer, got str\nstate unchanged after three rejections: True\na manager that mutates before validating: state unchanged = False | touched_files is now None\nthe careless version raised the same error and still left invalid data in memory, where the next read would trip over it\n\n--- 3. Genuinely checking: returned state must be a copy ---\ncopy_out=True  caller set touched_files to None; manager's own state still valid = True\ncopy_out=False caller set touched_files to None; manager's own state still valid = False\nhanding out the internal dictionary let a caller bypass update() and validation without calling any method; deep copies stop that, and a read-only view would be stronger\n\n--- 4. Genuinely checking: corrupt, missing and cross-file problems ---\nbad.json   -> ValueError: corrupt JSON in bad.json\nnope.json  -> FileNotFoundError: [Errno 2] No such file or directory: 'C:\\\\Users\\\\samee\\\\AppData\\\\Local\\\\Temp\\\\tmp1gotmh1y\\\\nope.json'\nboard schema errors: none | cross-file problems: ['duplicate task ids on the board', 'active task T-099 is not on the board']\neach document passed its own schema and the pair was still inconsistent (duplicate ids, an active task that is not on the board); the load refuses a corrupt file instead of resetting it\n\n--- 5. Genuinely checking: commit refuses to write an invalid state ---\ncommit refused: $.touched_files: expected array, got NoneType\nfile on disk unchanged by the refused commit: True\nrevalidating at commit is a second guard for state changed by some other path; it does not replace encapsulation"
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
    "headingEn": "Genuinely Found: Persistence Needs a Fresh Reader; Rejections Must Not Damage State",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಉಳಿಕೆಗೆ ಹೊಸ ಓದುಗ ಬೇಕು; ತಿರಸ್ಕಾರಗಳು ಸ್ಥಿತಿ ಹಾಳು ಮಾಡಬಾರದು",
    "bodyEn": "Section 1: after update() the file on disk still said T-014, and after commit() a fresh manager read T-015, the two touched files and the new next action. Section 2: three invalid updates (a null array, the id T-01 and a string schema_version) were rejected and the accepted state was unchanged; a careless manager that mutated first and validated after raised the same error and still left touched_files as None in memory.",
    "bodyKn": "ವಿಭಾಗ 1: update() ನಂತರ ಡಿಸ್ಕ್‌ನ ಫೈಲ್ ಇನ್ನೂ T-014 ಎಂದಿತು, ಮತ್ತು commit() ನಂತರ ಹೊಸ manager T-015, ಎರಡು ಮುಟ್ಟಿದ ಫೈಲ್‌ಗಳು ಮತ್ತು ಹೊಸ next action ಓದಿತು. ವಿಭಾಗ 2: ಮೂರು ಅಮಾನ್ಯ ನವೀಕರಣಗಳು (null ಅರೆ, id T-01 ಮತ್ತು ಸ್ಟ್ರಿಂಗ್ schema_version) ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟು ಅಂಗೀಕೃತ ಸ್ಥಿತಿ ಬದಲಾಗಲಿಲ್ಲ; ಮೊದಲು ಬದಲಿಸಿ ನಂತರ ಮಾನ್ಯಗೊಳಿಸಿದ ನಿರ್ಲಕ್ಷ್ಯ manager ಅದೇ ದೋಷ ಎತ್ತಿ ಇನ್ನೂ ಸ್ಮರಣೆಯಲ್ಲಿ touched_files ಅನ್ನು None ಆಗಿ ಬಿಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Copies, Corruption and Cross-File Checks",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪ್ರತಿಗಳು, ಹಾಳಾಗುವಿಕೆ ಮತ್ತು ಅಡ್ಡ-ಫೈಲ್ ಪರಿಶೀಲನೆ",
    "bodyEn": "Section 3: with copy_out on, a caller that set touched_files to None did not affect the manager (state still valid); with copy_out off the manager's own state became invalid. Section 4: a truncated file raised \"corrupt JSON\" and a missing file raised FileNotFoundError; a board with duplicate ids passed its schema and cross_check still reported duplicate ids and the active task T-099 missing from the board. Section 5: commit refused an invalid state and the file on disk was unchanged.",
    "bodyKn": "ವಿಭಾಗ 3: copy_out ಆನ್ ಇದ್ದಾಗ touched_files ಅನ್ನು None ಮಾಡಿದ ಕರೆದವರು manager ಮೇಲೆ ಪರಿಣಾಮ ಬೀರಲಿಲ್ಲ (ಸ್ಥಿತಿ ಇನ್ನೂ ಮಾನ್ಯ); copy_out ಆಫ್ ಇದ್ದಾಗ manager ನ ಸ್ವಂತ ಸ್ಥಿತಿ ಅಮಾನ್ಯವಾಯಿತು. ವಿಭಾಗ 4: ಕತ್ತರಿಸಿದ ಫೈಲ್ \"corrupt JSON\" ಎತ್ತಿತು ಮತ್ತು ಕಾಣೆಯಾದ ಫೈಲ್ FileNotFoundError ಎತ್ತಿತು; ನಕಲು ids ಇರುವ board schema ಪಾಸ್ ಮಾಡಿತು ಮತ್ತು cross_check ಇನ್ನೂ ನಕಲು ids ಮತ್ತು board ನಲ್ಲಿ ಕಾಣೆಯಾದ ಸಕ್ರಿಯ ಕಾರ್ಯ T-099 ವರದಿ ಮಾಡಿತು. ವಿಭಾಗ 5: commit ಅಮಾನ್ಯ ಸ್ಥಿತಿ ತಿರಸ್ಕರಿಸಿತು ಮತ್ತು ಡಿಸ್ಕ್‌ನ ಫೈಲ್ ಬದಲಾಗಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "One validated boundary for every change is what keeps state trustworthy across sessions, and it only works if returned data cannot be edited behind its back.",
    "bodyKn": "ಪ್ರತಿ ಬದಲಾವಣೆಗೆ ಒಂದು ಮಾನ್ಯಗೊಳಿಸಿದ ಗಡಿ ಸೆಷನ್‌ಗಳಾದ್ಯಂತ ಸ್ಥಿತಿ ನಂಬಲರ್ಹವಾಗಿಡುತ್ತದೆ, ಮತ್ತು ಮರಳಿಸಿದ ಡೇಟಾ ಅದರ ಬೆನ್ನ ಹಿಂದೆ ಸಂಪಾದಿಸಲಾಗದಿದ್ದರೆ ಮಾತ್ರ ಅದು ಕೆಲಸ ಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"an exception means nothing changed.\" The careless manager raised the error after it had already damaged its state.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಅಪವಾದ ಎಂದರೆ ಏನೂ ಬದಲಾಗಲಿಲ್ಲ.\" ನಿರ್ಲಕ್ಷ್ಯ manager ತನ್ನ ಸ್ಥಿತಿ ಈಗಾಗಲೇ ಹಾಳು ಮಾಡಿದ ನಂತರ ದೋಷ ಎತ್ತಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Candidate: a copy validated before it replaces the state. Fresh manager: a new object that proves persistence. Defensive copy: handing out a copy, not the internal object. Referential integrity: ids across files point at real things. Commit: the only step that writes disk.",
    "bodyKn": "Candidate: ಸ್ಥಿತಿ ಬದಲಿಸುವ ಮುನ್ನ ಮಾನ್ಯಗೊಳಿಸಿದ ಪ್ರತಿ. Fresh manager: ಉಳಿಕೆ ಸಾಬೀತುಪಡಿಸುವ ಹೊಸ ವಸ್ತು. Defensive copy: ಆಂತರಿಕ ವಸ್ತುವಲ್ಲ, ಪ್ರತಿ ನೀಡುವುದು. Referential integrity: ಫೈಲ್‌ಗಳಾದ್ಯಂತ ids ನಿಜ ವಿಷಯಗಳಿಗೆ ತೋರಿಸುತ್ತವೆ. Commit: ಡಿಸ್ಕ್ ಬರೆಯುವ ಏಕೈಕ ಹಂತ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The disk still said T-014 until commit; a fresh manager then read T-015. 2) Three invalid updates left state unchanged; a mutate-first manager did not. 3) Handing out the internal dict let a caller invalidate state. 4) Corrupt and missing files raised distinct errors and duplicate ids passed the schema. 5) Commit refused invalid data.",
    "bodyKn": "1) commit ವರೆಗೆ ಡಿಸ್ಕ್ ಇನ್ನೂ T-014 ಎಂದಿತು; ಹೊಸ manager ನಂತರ T-015 ಓದಿತು. 2) ಮೂರು ಅಮಾನ್ಯ ನವೀಕರಣಗಳು ಸ್ಥಿತಿ ಬದಲಾಗದೆ ಬಿಟ್ಟವು; ಮೊದಲು-ಬದಲಿಸುವ manager ಬಿಡಲಿಲ್ಲ. 3) ಆಂತರಿಕ dict ನೀಡಿದ್ದು ಕರೆದವರಿಗೆ ಸ್ಥಿತಿ ಅಮಾನ್ಯಗೊಳಿಸಲು ಬಿಟ್ಟಿತು. 4) ಹಾಳಾದ ಮತ್ತು ಕಾಣೆಯಾದ ಫೈಲ್‌ಗಳು ಬೇರೆ ದೋಷ ಎತ್ತಿದವು ಮತ್ತು ನಕಲು ids schema ಪಾಸ್ ಮಾಡಿದವು. 5) Commit ಅಮಾನ್ಯ ಡೇಟಾ ತಿರಸ್ಕರಿಸಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did the file on disk say after update() and before commit()?",
      "qKn": "update() ನಂತರ ಮತ್ತು commit() ಮುನ್ನ ಡಿಸ್ಕ್‌ನ ಫೈಲ್ ಏನೆಂದಿತು?",
      "opts": [
       "The old task T-014",
       "The new task T-015",
       "Nothing",
       "An error"
      ],
      "optsKn": [
       "ಹಳೆಯ ಕಾರ್ಯ T-014",
       "ಹೊಸ ಕಾರ್ಯ T-015",
       "ಏನೂ ಇಲ್ಲ",
       "ದೋಷ"
      ],
      "correct": 0
     },
     {
      "q": "What did a careless manager that mutated first leave behind?",
      "qKn": "ಮೊದಲು ಬದಲಿಸಿದ ನಿರ್ಲಕ್ಷ್ಯ manager ಏನು ಬಿಟ್ಟಿತು?",
      "opts": [
       "Valid state",
       "touched_files set to None in memory",
       "A deleted file",
       "A new schema"
      ],
      "optsKn": [
       "ಮಾನ್ಯ ಸ್ಥಿತಿ",
       "ಸ್ಮರಣೆಯಲ್ಲಿ None ಆದ touched_files",
       "ಅಳಿಸಿದ ಫೈಲ್",
       "ಹೊಸ schema"
      ],
      "correct": 1
     },
     {
      "q": "What happened with copy_out off when a caller edited the returned dictionary?",
      "qKn": "copy_out ಆಫ್ ಇದ್ದು ಕರೆದವರು ಮರಳಿಸಿದ dictionary ಸಂಪಾದಿಸಿದಾಗ ಏನಾಯಿತು?",
      "opts": [
       "The manager's state became invalid",
       "Nothing",
       "The file changed",
       "It crashed"
      ],
      "optsKn": [
       "Manager ನ ಸ್ಥಿತಿ ಅಮಾನ್ಯವಾಯಿತು",
       "ಏನೂ ಇಲ್ಲ",
       "ಫೈಲ್ ಬದಲಾಯಿತು",
       "ಕ್ರ್ಯಾಶ್ ಆಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What did cross_check find that the board schema did not?",
      "qKn": "board schema ಕಾಣದ್ದನ್ನು cross_check ಏನು ಕಂಡಿತು?",
      "opts": [
       "Duplicate ids and a missing active task",
       "A wrong type",
       "A bad enum",
       "Nothing"
      ],
      "optsKn": [
       "ನಕಲು ids ಮತ್ತು ಕಾಣೆಯಾದ ಸಕ್ರಿಯ ಕಾರ್ಯ",
       "ತಪ್ಪು type",
       "ತಪ್ಪು enum",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What did commit() do with an invalid state?",
      "qKn": "ಅಮಾನ್ಯ ಸ್ಥಿತಿಯೊಂದಿಗೆ commit() ಏನು ಮಾಡಿತು?",
      "opts": [
       "Wrote it anyway",
       "Refused, leaving the file unchanged",
       "Deleted the file",
       "Repaired it"
      ],
      "optsKn": [
       "ಹೇಗಾದರೂ ಬರೆಯಿತು",
       "ತಿರಸ್ಕರಿಸಿ ಫೈಲ್ ಬದಲಾಗದೆ ಬಿಟ್ಟಿತು",
       "ಫೈಲ್ ಅಳಿಸಿತು",
       "ದುರಸ್ತಿ ಮಾಡಿತು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
