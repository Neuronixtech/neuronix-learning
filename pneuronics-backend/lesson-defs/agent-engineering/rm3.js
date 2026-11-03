module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321571",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Repo Memory and Durable State (Part 3 of 3) — Migrations, Lost Updates and Recovery",
 "titleKn": "Repo ಸ್ಮರಣೆ ಮತ್ತು ಬಾಳಿಕೆ ಬರುವ ಸ್ಥಿತಿ (ಭಾಗ 3 / 3) — Migrations, ಕಳೆದುಹೋದ ನವೀಕರಣಗಳು ಮತ್ತು ಚೇತರಿಕೆ",
 "desc": "Migrate state between schema versions, show a lost update between two real writers and recover state from a snapshot and an event log.",
 "descKn": "ಸ್ಥಿತಿಯನ್ನು schema ಆವೃತ್ತಿಗಳ ನಡುವೆ migrate ಮಾಡಿ, ಎರಡು ನಿಜ writers ನಡುವೆ ಕಳೆದುಹೋದ ನವೀಕರಣ ತೋರಿಸಿ ಮತ್ತು snapshot ಹಾಗೂ ಈವೆಂಟ್ ಲಾಗ್‌ನಿಂದ ಸ್ಥಿತಿ ಚೇತರಿಸಿ.",
 "objectives": [
  "Write a version-aware migration.",
  "Refuse unsupported versions.",
  "Validate before and after migrating.",
  "Detect lost updates with revisions.",
  "Recover from a snapshot and a log."
 ],
 "objectivesKn": [
  "ಆವೃತ್ತಿ-ಅರಿವಿನ migration ಬರೆಯಿರಿ.",
  "ಬೆಂಬಲವಿಲ್ಲದ ಆವೃತ್ತಿಗಳನ್ನು ತಿರಸ್ಕರಿಸಿ.",
  "Migrate ಮುನ್ನ ಮತ್ತು ನಂತರ ಮಾನ್ಯಗೊಳಿಸಿ.",
  "Revisions ಮೂಲಕ ಕಳೆದುಹೋದ ನವೀಕರಣ ಪತ್ತೆ ಮಾಡಿ.",
  "Snapshot ಮತ್ತು ಲಾಗ್‌ನಿಂದ ಚೇತರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Repo Memory and Durable State (Part 3 of 3)",
    "textKn": "Repo ಸ್ಮರಣೆ ಮತ್ತು ಬಾಳಿಕೆ ಬರುವ ಸ್ಥಿತಿ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: schema migration, lost updates between writers, and recovery from a snapshot plus an event log. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind repo memory and durable state (schemas, a StateManager, atomic persistence and migrations), not the real software, and all state documents are hand-written and no language model is involved, so no real LLM behaviour is measured. The pasted lesson said its original main.py and schema files were not supplied, so the lab is our own implementation of the behaviour it describes. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: schema migration, ಬರಹಗಾರರ ನಡುವೆ ಕಳೆದುಹೋದ ನವೀಕರಣಗಳು, ಮತ್ತು snapshot ಜೊತೆ ಈವೆಂಟ್ ಲಾಗ್‌ನಿಂದ ಚೇತರಿಕೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು repo ಸ್ಮರಣೆ ಮತ್ತು ಬಾಳಿಕೆ ಬರುವ ಸ್ಥಿತಿ (schemas, StateManager, atomic ಉಳಿಕೆ ಮತ್ತು migrations) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಎಲ್ಲಾ ಸ್ಥಿತಿ ದಾಖಲೆಗಳು ಕೈಬರಹ ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಮೂಲ main.py ಮತ್ತು schema ಫೈಲ್‌ಗಳನ್ನು ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "State Outlives Its Format",
    "textKn": "ಸ್ಥಿತಿ ತನ್ನ ರೂಪಕ್ಕಿಂತ ಹೆಚ್ಚು ಕಾಲ ಬದುಕುತ್ತದೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Migrations, Writers and Logs",
    "headingKn": "Migrations, ಬರಹಗಾರರು ಮತ್ತು ಲಾಗ್‌ಗಳು",
    "bodyEn": "A state file can outlive the schema that created it, be written by two workers at once, and be cut short by a crash. This part writes a version-aware migration from v1 to v2, tests it on repeated loads, unknown versions and a malformed input, shows a lost update between two real threads with and without a revision check, and rebuilds state from a snapshot and an append-only event log with a torn last record.",
    "bodyKn": "ಸ್ಥಿತಿ ಫೈಲ್ ಅದನ್ನು ರಚಿಸಿದ schema ಗಿಂತ ಹೆಚ್ಚು ಕಾಲ ಬದುಕಬಹುದು, ಏಕಕಾಲಕ್ಕೆ ಇಬ್ಬರು workers ಬರೆಯಬಹುದು ಮತ್ತು ಕ್ರ್ಯಾಶ್‌ನಿಂದ ಕತ್ತರಿಸಲ್ಪಡಬಹುದು. ಈ ಭಾಗ v1 ರಿಂದ v2 ಗೆ ಆವೃತ್ತಿ-ಅರಿವಿನ migration ಬರೆದು, ಪುನರಾವರ್ತಿತ ಲೋಡ್‌ಗಳು, ಅಜ್ಞಾತ ಆವೃತ್ತಿಗಳು ಮತ್ತು ತಪ್ಪಾದ ಇನ್‌ಪುಟ್ ಮೇಲೆ ಪರೀಕ್ಷಿಸಿ, revision ಪರಿಶೀಲನೆ ಜೊತೆ ಮತ್ತು ಇಲ್ಲದೆ ಎರಡು ನಿಜ threads ನಡುವೆ ಕಳೆದುಹೋದ ನವೀಕರಣ ತೋರಿಸಿ, ಹರಿದ ಕೊನೆಯ ದಾಖಲೆಯ snapshot ಮತ್ತು append-only ಈವೆಂಟ್ ಲಾಗ್‌ನಿಂದ ಸ್ಥಿತಿ ಮರುನಿರ್ಮಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Evolving Durable State",
    "headingKn": "ಬಾಳಿಕೆ ಬರುವ ಸ್ಥಿತಿಯ ವಿಕಾಸ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Evolving durable state</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">migration</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">by version</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">revision check</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">no silent overwrite</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">snapshot + log</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">replay newer events</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">backup</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">until verified</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">validate before and after a migration</text></svg>",
    "captionEn": "Validate before and after a migration.",
    "captionKn": "Migration ಮುನ್ನ ಮತ್ತು ನಂತರ ಮಾನ್ಯಗೊಳಿಸಿ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Durability concerns",
    "headingKn": "ಬಾಳಿಕೆ ಕಾಳಜಿಗಳು",
    "headers": [
     "Concern",
     "Mechanism",
     "Remaining gap"
    ],
    "rows": [
     [
      "format change",
      "version-aware migration plus a backup",
      "must validate before and after"
     ],
     [
      "two writers",
      "revision check before writing",
      "the loser must reload and reconcile"
     ],
     [
      "crash mid-write",
      "snapshot plus append-only log",
      "a policy for torn records"
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
    "filename": "rm_3.py",
    "headingEn": "Migration and the version-aware loader",
    "headingKn": "Migration ಮತ್ತು ಆವೃತ್ತಿ-ಅರಿವಿನ loader",
    "descEn": "migrate_v1_to_v2 turns each blocker string into an object with a status and sets schema_version to 2. load_current runs the migration only for version 1, returns version 2 untouched and refuses any other version.",
    "descKn": "migrate_v1_to_v2 ಪ್ರತಿ blocker ಸ್ಟ್ರಿಂಗ್ ಅನ್ನು ಸ್ಥಿತಿ ಇರುವ ವಸ್ತುವಾಗಿ ಮಾರ್ಪಡಿಸಿ schema_version ಅನ್ನು 2 ಗೆ ಹೊಂದಿಸುತ್ತದೆ. load_current migration ಅನ್ನು ಆವೃತ್ತಿ 1 ಗೆ ಮಾತ್ರ ಓಡಿಸುತ್ತದೆ, ಆವೃತ್ತಿ 2 ಅನ್ನು ಮುಟ್ಟದೆ ಮರಳಿಸುತ್ತದೆ ಮತ್ತು ಬೇರೆ ಯಾವುದೇ ಆವೃತ್ತಿ ತಿರಸ್ಕರಿಸುತ್ತದೆ.",
    "code": "def migrate_v1_to_v2(state):\n    new = copy.deepcopy(state)\n    new[\"blockers\"] = [{\"description\": b, \"status\": \"open\"} for b in new.get(\"blockers\", [])]\n    new[\"schema_version\"] = 2\n    return new\n\n\ndef load_current(path):\n    state = json.loads(Path(path).read_text(encoding=\"utf-8\"))\n    v = state.get(\"schema_version\")\n    if v == 2:\n        return state, \"already current\"\n    if v == 1:\n        migrated = migrate_v1_to_v2(state)\n        atomic_write(path, migrated)\n        return migrated, \"migrated 1 -> 2\"\n    raise ValueError(f\"unsupported schema_version {v!r}: refusing to guess\")"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rm_3.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() migrates and reloads, refuses three unsupported versions, migrates a malformed input, runs two real writer threads with and without a revision check and replays an event log over a snapshot.",
    "descKn": "main() migrate ಮಾಡಿ ಮರುಲೋಡ್ ಮಾಡಿ, ಮೂರು ಬೆಂಬಲವಿಲ್ಲದ ಆವೃತ್ತಿ ತಿರಸ್ಕರಿಸಿ, ತಪ್ಪಾದ ಇನ್‌ಪುಟ್ migrate ಮಾಡಿ, revision ಪರಿಶೀಲನೆ ಜೊತೆ ಮತ್ತು ಇಲ್ಲದೆ ಎರಡು ನಿಜ writer threads ಓಡಿಸಿ snapshot ಮೇಲೆ ಈವೆಂಟ್ ಲಾಗ್ ಮರುಪ್ರಸಾರ ಮಾಡುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    with tempfile.TemporaryDirectory() as d:\n        root = Path(d)\n        p = root / \"agent_state.json\"\n\n        section(\"1. Genuinely running: a v1 file is migrated once and the migration is repeatable\")\n        v1 = {\"schema_version\": 1, \"active_task_id\": \"T-014\", \"blockers\": [\"fixture format unclear\"], \"next_action\": \"inspect the fixture\"}\n        atomic_write(p, v1)\n        backup = root / \"agent_state.v1.bak\"\n        backup.write_text(p.read_text(), encoding=\"utf-8\")\n        s, how = load_current(p)\n        print(how, \"->\", s[\"schema_version\"], s[\"blockers\"])\n        s2, how2 = load_current(p)\n        print(\"second load:\", how2, \"| identical to the first result:\", s2 == s)\n        print(\"original preserved as a backup with version\", json.loads(backup.read_text())[\"schema_version\"], \"and blockers\", json.loads(backup.read_text())[\"blockers\"])\n        print(\"a version-aware loader runs only the migration the file needs; repeating the rename blindly would have corrupted an already-migrated file\")\n\n        section(\"2. Genuinely checking: an unsupported version is refused\")\n        for v in (3, \"1\", None):\n            atomic_write(p, {\"schema_version\": v, \"active_task_id\": \"T-014\"})\n            try:\n                load_current(p)\n            except ValueError as e:\n                print(f\"version {v!r:5} -> {e}\")\n        print(\"a program that guessed at a newer or malformed version could misread fields silently; refusing stops it and points at the missing migration\")\n\n        section(\"3. Genuinely checking: a migration that does not validate its input or its output\")\n        atomic_write(p, {\"schema_version\": 1, \"active_task_id\": \"T-014\", \"blockers\": \"not a list\"})\n        before = p.read_text()\n        try:\n            s3, how3 = load_current(p)\n            print(\"no exception:\", how3, \"-> blockers now has\", len(s3[\"blockers\"]), \"entries, first three:\", s3[\"blockers\"][:3])\n        except Exception as e:\n            print(\"migration failed with\", type(e).__name__)\n        print(\"file on disk changed by the migration:\", p.read_text() != before)\n        print(\"the input was a string where a list belongs, iterating it produced one 'blocker' per character, and the garbage was written over the original; a migration must validate the old document before transforming it and the new document before writing it, and keep the backup taken in section 1 until the result is verified\")\n\n        section(\"4. Genuinely measuring: two writers update the same file, with and without a revision check (real threads)\")\n        def run(guarded):\n            path = root / (\"g.json\" if guarded else \"u.json\")\n            atomic_write(path, {\"revision\": 1, \"blockers\": [], \"next_action\": \"start\"})\n            lock, barrier, out = threading.Lock(), threading.Barrier(2), {}\n\n            def writer(name, field, value):\n                state = json.loads(path.read_text())  # both read revision 1\n                barrier.wait()\n                with lock:\n                    cur = json.loads(path.read_text())\n                    if guarded and cur[\"revision\"] != state[\"revision\"]:\n                        out[name] = \"rejected (stale)\"\n                        return\n                    state[field] = value\n                    state[\"revision\"] = cur[\"revision\"] + 1\n                    atomic_write(path, state)\n                    out[name] = \"saved\"\n            a = threading.Thread(target=writer, args=(\"A\", \"blockers\", [\"fixture unclear\"]))\n            b = threading.Thread(target=writer, args=(\"B\", \"next_action\", \"run the tests\"))\n            a.start(); b.start(); a.join(); b.join()\n            return out, json.loads(path.read_text())\n        for g in (False, True):\n            out, final = run(g)\n            print(f\"revision check={g!s:5} outcomes {dict(sorted(out.items()))} final file: blockers={final['blockers']} next_action={final['next_action']!r}\")\n        print(\"without the check both writers reported success but one of the two changes is missing from the final file (whichever wrote first was overwritten from a stale copy); with the check the later writer was told to reload, and which writer loses depends on timing\")\n\n        section(\"5. Genuinely checking: snapshot plus event log recovery\")\n        snap, log = root / \"snapshot.json\", root / \"events.jsonl\"\n        atomic_write(snap, {\"seq\": 2, \"blockers\": [], \"next_action\": \"start\"})\n        events = [{\"seq\": 3, \"op\": \"set_blocker\", \"value\": \"fixture unclear\"}, {\"seq\": 4, \"op\": \"set_next\", \"value\": \"inspect fixture\"}, {\"seq\": 2, \"op\": \"set_next\", \"value\": \"stale event\"}]\n        log.write_text(\"\\n\".join(json.dumps(e) for e in events) + '\\n{\"seq\": 5, \"op\": \"set_nex', encoding=\"utf-8\")  # the last line is cut off by a crash\n        state = json.loads(snap.read_text())\n        applied, skipped, torn = [], [], 0\n        for line in log.read_text().splitlines():\n            try:\n                e = json.loads(line)\n            except json.JSONDecodeError:\n                torn += 1\n                continue\n            if e[\"seq\"] <= state[\"seq\"]:\n                skipped.append(e[\"seq\"])\n                continue\n            if e[\"op\"] == \"set_blocker\":\n                state[\"blockers\"].append(e[\"value\"])\n            elif e[\"op\"] == \"set_next\":\n                state[\"next_action\"] = e[\"value\"]\n            state[\"seq\"] = e[\"seq\"]\n            applied.append(e[\"seq\"])\n        print(f\"applied events {applied}, skipped already-included events {skipped}, ignored torn trailing records {torn}\")\n        print(\"recovered state:\", state)\n        print(\"replaying only events newer than the snapshot rebuilt the state and the half-written last record was ignored; deciding whether a torn record means a lost operation still needs a policy, and the event order and replay rules here are our own\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a v1 file is migrated once and the migration is repeatable ---\nmigrated 1 -> 2 -> 2 [{'description': 'fixture format unclear', 'status': 'open'}]\nsecond load: already current | identical to the first result: True\noriginal preserved as a backup with version 1 and blockers ['fixture format unclear']\na version-aware loader runs only the migration the file needs; repeating the rename blindly would have corrupted an already-migrated file\n\n--- 2. Genuinely checking: an unsupported version is refused ---\nversion 3     -> unsupported schema_version 3: refusing to guess\nversion '1'   -> unsupported schema_version '1': refusing to guess\nversion None  -> unsupported schema_version None: refusing to guess\na program that guessed at a newer or malformed version could misread fields silently; refusing stops it and points at the missing migration\n\n--- 3. Genuinely checking: a migration that does not validate its input or its output ---\nno exception: migrated 1 -> 2 -> blockers now has 10 entries, first three: [{'description': 'n', 'status': 'open'}, {'description': 'o', 'status': 'open'}, {'description': 't', 'status': 'open'}]\nfile on disk changed by the migration: True\nthe input was a string where a list belongs, iterating it produced one 'blocker' per character, and the garbage was written over the original; a migration must validate the old document before transforming it and the new document before writing it, and keep the backup taken in section 1 until the result is verified\n\n--- 4. Genuinely measuring: two writers update the same file, with and without a revision check (real threads) ---\nrevision check=False outcomes {'A': 'saved', 'B': 'saved'} final file: blockers=['fixture unclear'] next_action='start'\nrevision check=True  outcomes {'A': 'saved', 'B': 'rejected (stale)'} final file: blockers=['fixture unclear'] next_action='start'\nwithout the check both writers reported success but one of the two changes is missing from the final file (whichever wrote first was overwritten from a stale copy); with the check the later writer was told to reload, and which writer loses depends on timing\n\n--- 5. Genuinely checking: snapshot plus event log recovery ---\napplied events [3, 4], skipped already-included events [2], ignored torn trailing records 1\nrecovered state: {'blockers': ['fixture unclear'], 'next_action': 'inspect fixture', 'seq': 4}\nreplaying only events newer than the snapshot rebuilt the state and the half-written last record was ignored; deciding whether a torn record means a lost operation still needs a policy, and the event order and replay rules here are our own"
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
    "headingEn": "Genuinely Found: A Migration Runs Once; an Unvalidated One Writes Garbage",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Migration ಒಮ್ಮೆ ಓಡುತ್ತದೆ; ಮಾನ್ಯಗೊಳಿಸದ್ದು ಕಸ ಬರೆಯುತ್ತದೆ",
    "bodyEn": "Section 1: a v1 file was migrated to v2 once (its blocker became an object with status open), a second load reported \"already current\" with an identical result, and a backup kept the original. Section 2: versions 3, \"1\" and None were each refused. Section 3: a v1 file whose blockers field was the string \"not a list\" did not raise; iterating the string produced 10 one-character blockers that were written over the original, so a migration needs to validate its input and its output and keep the backup until the result is verified.",
    "bodyKn": "ವಿಭಾಗ 1: v1 ಫೈಲ್ ಒಮ್ಮೆ v2 ಗೆ migrate ಆಯಿತು (ಅದರ blocker ಸ್ಥಿತಿ open ಇರುವ ವಸ್ತುವಾಯಿತು), ಎರಡನೇ ಲೋಡ್ ಒಂದೇ ಫಲಿತಾಂಶದೊಂದಿಗೆ \"already current\" ವರದಿ ಮಾಡಿತು, ಮತ್ತು backup ಮೂಲ ಉಳಿಸಿತು. ವಿಭಾಗ 2: ಆವೃತ್ತಿಗಳು 3, \"1\" ಮತ್ತು None ಪ್ರತಿಯೊಂದೂ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟವು. ವಿಭಾಗ 3: blockers ಕ್ಷೇತ್ರ ಸ್ಟ್ರಿಂಗ್ \"not a list\" ಆಗಿದ್ದ v1 ಫೈಲ್ ದೋಷ ಎತ್ತಲಿಲ್ಲ; ಸ್ಟ್ರಿಂಗ್ ಮೇಲೆ ಪುನರಾವರ್ತಿಸಿದ್ದು ಮೂಲದ ಮೇಲೆ ಬರೆದ 10 ಒಂದು-ಅಕ್ಷರ blockers ಉತ್ಪಾದಿಸಿತು, ಆದ್ದರಿಂದ migration ತನ್ನ ಇನ್‌ಪುಟ್ ಮತ್ತು ಔಟ್‌ಪುಟ್ ಮಾನ್ಯಗೊಳಿಸಬೇಕು ಮತ್ತು ಫಲಿತಾಂಶ ಪರಿಶೀಲಿಸುವವರೆಗೆ backup ಉಳಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Lost Updates and Log Replay",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕಳೆದುಹೋದ ನವೀಕರಣಗಳು ಮತ್ತು ಲಾಗ್ ಮರುಪ್ರಸಾರ",
    "bodyEn": "Section 4 (two real threads, both reading revision 1): without a check both reported \"saved\" and the final file kept only one of the two changes (blockers set, next_action still \"start\"); with a revision check one saved and the other was rejected as stale. Which writer loses depends on timing. Section 5: replaying a log over a snapshot at seq 2 applied events 3 and 4, skipped the already-included event 2 and ignored 1 torn trailing record, giving blockers [\"fixture unclear\"] and next_action \"inspect fixture\" at seq 4.",
    "bodyKn": "ವಿಭಾಗ 4 (ಎರಡು ನಿಜ threads, ಎರಡೂ revision 1 ಓದಿದವು): ಪರಿಶೀಲನೆ ಇಲ್ಲದೆ ಎರಡೂ \"saved\" ವರದಿ ಮಾಡಿದವು ಮತ್ತು ಅಂತಿಮ ಫೈಲ್ ಎರಡು ಬದಲಾವಣೆಗಳಲ್ಲಿ ಒಂದನ್ನು ಮಾತ್ರ ಉಳಿಸಿತು (blockers ಹೊಂದಿಸಲಾಗಿತ್ತು, next_action ಇನ್ನೂ \"start\"); revision ಪರಿಶೀಲನೆಯೊಂದಿಗೆ ಒಂದು ಉಳಿಸಿತು ಮತ್ತು ಇನ್ನೊಂದು ಹಳೆಯದು ಎಂದು ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತು. ಯಾವ writer ಸೋಲುತ್ತದೆ ಎಂಬುದು ಸಮಯವನ್ನು ಅವಲಂಬಿಸುತ್ತದೆ. ವಿಭಾಗ 5: seq 2 ರ snapshot ಮೇಲೆ ಲಾಗ್ ಮರುಪ್ರಸಾರ ಈವೆಂಟ್‌ಗಳು 3 ಮತ್ತು 4 ಅನ್ವಯಿಸಿ, ಈಗಾಗಲೇ ಒಳಗೊಂಡ ಈವೆಂಟ್ 2 ಬಿಟ್ಟು, 1 ಹರಿದ ಕೊನೆಯ ದಾಖಲೆ ನಿರ್ಲಕ್ಷಿಸಿ, seq 4 ರಲ್ಲಿ blockers [\"fixture unclear\"] ಮತ್ತು next_action \"inspect fixture\" ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "State that outlives sessions will be migrated, written concurrently and cut off by crashes, so each of those needs a deliberate mechanism and a test, including the failure path of the mechanism itself.",
    "bodyKn": "ಸೆಷನ್‌ಗಳಿಗಿಂತ ಹೆಚ್ಚು ಕಾಲ ಬದುಕುವ ಸ್ಥಿತಿ migrate ಆಗುತ್ತದೆ, ಏಕಕಾಲದಲ್ಲಿ ಬರೆಯಲ್ಪಡುತ್ತದೆ ಮತ್ತು ಕ್ರ್ಯಾಶ್‌ಗಳಿಂದ ಕತ್ತರಿಸಲ್ಪಡುತ್ತದೆ, ಆದ್ದರಿಂದ ಪ್ರತಿಯೊಂದಕ್ಕೂ ಉದ್ದೇಶಪೂರ್ವಕ ಕಾರ್ಯವಿಧಾನ ಮತ್ತು ಪರೀಕ್ಷೆ ಬೇಕು, ಕಾರ್ಯವಿಧಾನದ ವೈಫಲ್ಯ ಮಾರ್ಗ ಸೇರಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a migration that did not raise an error worked.\" Ours wrote ten one-character blockers without raising anything.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ದೋಷ ಎತ್ತದ migration ಕೆಲಸ ಮಾಡಿತು.\" ನಮ್ಮದು ಏನನ್ನೂ ಎತ್ತದೆ ಹತ್ತು ಒಂದು-ಅಕ್ಷರ blockers ಬರೆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Migration: converting a document to a newer schema version. Idempotent migration: running it again changes nothing. Optimistic concurrency: reject a write based on a stale revision. Snapshot: a saved state at a point. Event log: append-only changes after the snapshot.",
    "bodyKn": "Migration: ದಾಖಲೆಯನ್ನು ಹೊಸ schema ಆವೃತ್ತಿಗೆ ಪರಿವರ್ತಿಸುವುದು. Idempotent migration: ಮತ್ತೆ ಓಡಿಸಿದರೆ ಏನೂ ಬದಲಾಗುವುದಿಲ್ಲ. Optimistic concurrency: ಹಳೆಯ revision ಆಧಾರಿತ ಬರಹ ತಿರಸ್ಕರಿಸುವುದು. Snapshot: ಒಂದು ಹಂತದಲ್ಲಿ ಉಳಿಸಿದ ಸ್ಥಿತಿ. Event log: snapshot ನಂತರದ append-only ಬದಲಾವಣೆಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A v1 file migrated once and a second load did nothing. 2) Versions 3, \"1\" and None were refused. 3) A malformed input produced 10 garbage blockers and overwrote the original. 4) Two unchecked writers lost one change; a revision check rejected the stale one. 5) Replay applied events 3 and 4, skipped 2 and ignored a torn record.",
    "bodyKn": "1) v1 ಫೈಲ್ ಒಮ್ಮೆ migrate ಆಯಿತು ಮತ್ತು ಎರಡನೇ ಲೋಡ್ ಏನೂ ಮಾಡಲಿಲ್ಲ. 2) ಆವೃತ್ತಿಗಳು 3, \"1\" ಮತ್ತು None ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟವು. 3) ತಪ್ಪಾದ ಇನ್‌ಪುಟ್ 10 ಕಸ blockers ಉತ್ಪಾದಿಸಿ ಮೂಲದ ಮೇಲೆ ಬರೆಯಿತು. 4) ಪರಿಶೀಲನೆ ಇಲ್ಲದ ಎರಡು writers ಒಂದು ಬದಲಾವಣೆ ಕಳೆದುಕೊಂಡವು; revision ಪರಿಶೀಲನೆ ಹಳೆಯದನ್ನು ತಿರಸ್ಕರಿಸಿತು. 5) ಮರುಪ್ರಸಾರ ಈವೆಂಟ್‌ಗಳು 3 ಮತ್ತು 4 ಅನ್ವಯಿಸಿ, 2 ಬಿಟ್ಟು ಹರಿದ ದಾಖಲೆ ನಿರ್ಲಕ್ಷಿಸಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did a second load of the migrated file report?",
      "qKn": "Migrate ಮಾಡಿದ ಫೈಲ್‌ನ ಎರಡನೇ ಲೋಡ್ ಏನು ವರದಿ ಮಾಡಿತು?",
      "opts": [
       "already current",
       "migrated again",
       "an error",
       "corrupt"
      ],
      "optsKn": [
       "already current",
       "ಮತ್ತೆ migrate ಆಯಿತು",
       "ದೋಷ",
       "ಹಾಳಾಗಿದೆ"
      ],
      "correct": 0
     },
     {
      "q": "What did the migration do with blockers set to the string \"not a list\"?",
      "qKn": "blockers ಸ್ಟ್ರಿಂಗ್ \"not a list\" ಆಗಿದ್ದಾಗ migration ಏನು ಮಾಡಿತು?",
      "opts": [
       "Raised an error",
       "Wrote 10 one-character blockers over the original",
       "Skipped it",
       "Rolled back"
      ],
      "optsKn": [
       "ದೋಷ ಎತ್ತಿತು",
       "ಮೂಲದ ಮೇಲೆ 10 ಒಂದು-ಅಕ್ಷರ blockers ಬರೆಯಿತು",
       "ಬಿಟ್ಟಿತು",
       "ಹಿಂತಿರುಗಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What happened to the stale writer when a revision check was used?",
      "qKn": "revision ಪರಿಶೀಲನೆ ಬಳಸಿದಾಗ ಹಳೆಯ writer ಗೆ ಏನಾಯಿತು?",
      "opts": [
       "It was rejected",
       "It overwrote the other",
       "It crashed the file",
       "It succeeded twice"
      ],
      "optsKn": [
       "ಅದು ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತು",
       "ಅದು ಇನ್ನೊಂದನ್ನು ಮೇಲ್ಬರಹ ಮಾಡಿತು",
       "ಅದು ಫೈಲ್ ಕ್ರ್ಯಾಶ್ ಮಾಡಿತು",
       "ಅದು ಎರಡು ಬಾರಿ ಯಶಸ್ವಿಯಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "Which log events were applied over the snapshot at seq 2?",
      "qKn": "seq 2 ರ snapshot ಮೇಲೆ ಯಾವ ಲಾಗ್ ಈವೆಂಟ್‌ಗಳು ಅನ್ವಯವಾದವು?",
      "opts": [
       "3 and 4",
       "2 only",
       "3, 4 and 5",
       "None"
      ],
      "optsKn": [
       "3 ಮತ್ತು 4",
       "2 ಮಾತ್ರ",
       "3, 4 ಮತ್ತು 5",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What happened to the half-written last log record?",
      "qKn": "ಅರ್ಧ-ಬರೆದ ಕೊನೆಯ ಲಾಗ್ ದಾಖಲೆಗೆ ಏನಾಯಿತು?",
      "opts": [
       "Ignored as torn",
       "Applied",
       "Deleted the snapshot",
       "Crashed the replay"
      ],
      "optsKn": [
       "ಹರಿದದ್ದು ಎಂದು ನಿರ್ಲಕ್ಷಿಸಲಾಯಿತು",
       "ಅನ್ವಯಿಸಲಾಯಿತು",
       "snapshot ಅಳಿಸಿತು",
       "ಮರುಪ್ರಸಾರ ಕ್ರ್ಯಾಶ್ ಮಾಡಿತು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
