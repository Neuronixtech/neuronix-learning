module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321532",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Stateful Graph Orchestration: Durable Execution and Checkpoints (Part 3 of 3) — SQLite, Crashes and Replay Safety",
 "titleKn": "Stateful Graph Orchestration: Durable Execution ಮತ್ತು Checkpoints (ಭಾಗ 3 / 3) — SQLite, Crashes ಮತ್ತು Replay ಸುರಕ್ಷತೆ",
 "desc": "Persist checkpoints in SQLite, resume from a brand-new process after a genuine os._exit crash, show a replayed side effect and fix it with an idempotency key, and find that the sqlite3 context manager leaks the connection.",
 "descKn": "Checkpoints ಅನ್ನು SQLite ನಲ್ಲಿ ಸ್ಥಿರಗೊಳಿಸಿ, ನಿಜವಾದ os._exit crash ನಂತರ ಸಂಪೂರ್ಣ ಹೊಸ ಪ್ರಕ್ರಿಯೆಯಿಂದ resume ಮಾಡಿ, ಪುನರಾವರ್ತಿತ ಅಡ್ಡ ಪರಿಣಾಮ ತೋರಿಸಿ idempotency key ಯಿಂದ ಸರಿಪಡಿಸಿ, ಮತ್ತು sqlite3 context manager ಸಂಪರ್ಕ ಸೋರಿಸುತ್ತದೆ ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Persist checkpoints in SQLite and resume from a new process.",
  "Reproduce a replayed side effect after a real crash.",
  "Make a node replay-safe with an idempotency key.",
  "Version checkpoints and refuse unknown schemas.",
  "Describe supervisor, swarm and hierarchical topologies and bound their cycles."
 ],
 "objectivesKn": [
  "Checkpoints ಅನ್ನು SQLite ನಲ್ಲಿ ಸ್ಥಿರಗೊಳಿಸಿ ಮತ್ತು ಹೊಸ ಪ್ರಕ್ರಿಯೆಯಿಂದ resume ಮಾಡಿ.",
  "ನಿಜವಾದ crash ನಂತರ ಪುನರಾವರ್ತಿತ ಅಡ್ಡ ಪರಿಣಾಮ ಪುನರುತ್ಪಾದಿಸಿ.",
  "Idempotency key ಯಿಂದ node ಅನ್ನು replay-ಸುರಕ್ಷಿತ ಮಾಡಿ.",
  "Checkpoints ಗೆ version ನೀಡಿ ಮತ್ತು ಅಜ್ಞಾತ schemas ನಿರಾಕರಿಸಿ.",
  "Supervisor, swarm ಮತ್ತು ಶ್ರೇಣೀಕೃತ topologies ವಿವರಿಸಿ ಮತ್ತು ಅವುಗಳ ಚಕ್ರಗಳಿಗೆ ಮಿತಿ ಹಾಕಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Stateful Graph Orchestration: Durable Execution and Checkpoints (Part 3 of 3)",
    "textKn": "Stateful Graph Orchestration: Durable Execution ಮತ್ತು Checkpoints (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: real SQLite persistence, a genuine process crash, replay hazards, idempotency, schema versions and graph topologies. Every output below was genuinely produced by the lab file on Python 3.14.5. The pasted source was cut off in its key terms. Section 3 starts a second Python process that exits with os._exit, so the crash is real. The sqlite3 findings in section 7 were observed on this Windows machine and may differ on other platforms. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ನಿಜವಾದ SQLite ಸ್ಥಿರತೆ, ನಿಜವಾದ ಪ್ರಕ್ರಿಯೆ crash, replay ಅಪಾಯಗಳು, idempotency, schema versions ಮತ್ತು graph topologies. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಅಂಟಿಸಿದ ಮೂಲ ಅದರ ಪ್ರಮುಖ ಪದಗಳಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು. ವಿಭಾಗ 3 os._exit ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸುವ ಎರಡನೇ Python ಪ್ರಕ್ರಿಯೆ ಆರಂಭಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ crash ನಿಜವಾದದ್ದು. ವಿಭಾಗ 7 ರ sqlite3 ಕಂಡುಹಿಡಿತಗಳನ್ನು ಈ Windows ಯಂತ್ರದಲ್ಲಿ ಗಮನಿಸಲಾಗಿದೆ ಮತ್ತು ಇತರ ವೇದಿಕೆಗಳಲ್ಲಿ ಬೇರೆಯಾಗಬಹುದು. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "From Memory to a Database",
    "textKn": "ಮೆಮೊರಿಯಿಂದ ಡೇಟಾಬೇಸ್‌ಗೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Persistence Outside the Process",
    "headingKn": "ಪ್ರಕ್ರಿಯೆ ಹೊರಗಿನ ಸ್ಥಿರತೆ",
    "bodyEn": "The SQLite checkpointer stores one row per session: session_id as the primary key and the checkpoint as JSON, updated on every node. Because the state lives in a file, a new process with a new graph object can load it and continue; it needs nothing from the old process's memory. The checkpoint now carries a schema_version so that a later software version can detect and migrate old snapshots, which matters for workflows that wait days.",
    "bodyKn": "SQLite checkpointer ಪ್ರತಿ session ಗೆ ಒಂದು ಸಾಲು ಸಂಗ್ರಹಿಸುತ್ತದೆ: session_id ಪ್ರಾಥಮಿಕ key ಮತ್ತು checkpoint JSON, ಪ್ರತಿ node ನಲ್ಲಿ ನವೀಕರಣ. State ಫೈಲ್‌ನಲ್ಲಿರುವುದರಿಂದ ಹೊಸ graph ವಸ್ತುವಿನ ಹೊಸ ಪ್ರಕ್ರಿಯೆ ಅದನ್ನು ಲೋಡ್ ಮಾಡಿ ಮುಂದುವರಿಸಬಹುದು; ಅದಕ್ಕೆ ಹಳೆಯ ಪ್ರಕ್ರಿಯೆಯ ಮೆಮೊರಿಯಿಂದ ಏನೂ ಬೇಡ. Checkpoint ಈಗ schema_version ಹೊಂದಿದೆ, ಹಾಗಾಗಿ ನಂತರದ ಸಾಫ್ಟ್‌ವೇರ್ ಆವೃತ್ತಿ ಹಳೆಯ ಸ್ನ್ಯಾಪ್‌ಶಾಟ್‌ಗಳನ್ನು ಪತ್ತೆಹಚ್ಚಿ ವಲಸೆ ಮಾಡಬಹುದು, ದಿನಗಳು ಕಾಯುವ workflows ಗೆ ಇದು ಮುಖ್ಯ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Checkpoint After Every Node",
    "headingKn": "ಪ್ರತಿ Node ನಂತರ Checkpoint",
    "svgCode": "<svg viewBox=\"0 0 300 215\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"215\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">State graph with a checkpoint after every node</text>\n  <rect x=\"100\" y=\"22\" width=\"100\" height=\"18\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"34\" fill=\"#93c5fd\" text-anchor=\"middle\">classify</text>\n  <path d=\"M150,40 V50\" stroke=\"#475569\"/><text x=\"168\" y=\"48\" fill=\"#94a3b8\" font-size=\"6\">checkpoint 1</text>\n  <path d=\"M150,50 L60,64 M150,50 V64 M150,50 L240,64\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"64\" width=\"80\" height=\"18\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"60\" y=\"76\" fill=\"#6ee7b7\" text-anchor=\"middle\">refund</text>\n  <rect x=\"110\" y=\"64\" width=\"80\" height=\"18\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"76\" fill=\"#6ee7b7\" text-anchor=\"middle\">bug</text>\n  <rect x=\"200\" y=\"64\" width=\"80\" height=\"18\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"240\" y=\"76\" fill=\"#6ee7b7\" text-anchor=\"middle\">sales</text>\n  <path d=\"M60,82 L130,100 M150,82 V100 M240,82 L170,100\" stroke=\"#475569\"/>\n  <rect x=\"100\" y=\"100\" width=\"100\" height=\"18\" rx=\"4\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"112\" fill=\"#fde68a\" text-anchor=\"middle\">human_gate (pause)</text>\n  <path d=\"M150,118 V130\" stroke=\"#475569\"/><text x=\"168\" y=\"128\" fill=\"#94a3b8\" font-size=\"6\">checkpoint 3</text>\n  <rect x=\"100\" y=\"130\" width=\"100\" height=\"18\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"142\" fill=\"#93c5fd\" text-anchor=\"middle\">send</text>\n  <rect x=\"20\" y=\"162\" width=\"260\" height=\"38\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/>\n  <text x=\"150\" y=\"176\" fill=\"#c4b5fd\" text-anchor=\"middle\">checkpoint = state + last completed node + next node</text>\n  <text x=\"150\" y=\"190\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">a failed node writes nothing; resume loads the last one and continues</text>\n</svg>",
    "captionEn": "The checkpoint survives the process: a new process loads it and runs only the unfinished nodes.",
    "captionKn": "Checkpoint ಪ್ರಕ್ರಿಯೆಯನ್ನು ಮೀರಿ ಉಳಿಯುತ್ತದೆ: ಹೊಸ ಪ್ರಕ್ರಿಯೆ ಅದನ್ನು ಲೋಡ್ ಮಾಡಿ ಮುಗಿಯದ nodes ಮಾತ್ರ ಚಲಾಯಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Checkpoints Do Not Make Side Effects Exactly-Once",
    "headingKn": "Checkpoints ಅಡ್ಡ ಪರಿಣಾಮಗಳನ್ನು ಒಮ್ಮೆ-ಮಾತ್ರ ಮಾಡುವುದಿಲ್ಲ",
    "bodyEn": "A checkpoint records that a node finished. If the process dies after the node did something external but before the checkpoint was written, resume will run that node again. A card charged or an email sent would repeat. The defences are an idempotency key or operation id that the external service honours, a lookup of the operation's status before retrying, and state that carries identifiers such as transaction ids. Graph durability and idempotent side effects solve different problems and are needed together.",
    "bodyKn": "Checkpoint node ಮುಗಿಯಿತು ಎಂದು ದಾಖಲಿಸುತ್ತದೆ. Node ಬಾಹ್ಯವಾದದ್ದನ್ನು ಮಾಡಿದ ನಂತರ ಆದರೆ checkpoint ಬರೆಯುವ ಮೊದಲು ಪ್ರಕ್ರಿಯೆ ಸತ್ತರೆ, resume ಆ node ಅನ್ನು ಮತ್ತೆ ಚಲಾಯಿಸುತ್ತದೆ. ಕಾರ್ಡ್ ಚಾರ್ಜ್ ಅಥವಾ ಕಳುಹಿಸಿದ ಇಮೇಲ್ ಪುನರಾವರ್ತನೆಯಾಗುತ್ತದೆ. ರಕ್ಷಣೆಗಳು: ಬಾಹ್ಯ ಸೇವೆ ಗೌರವಿಸುವ idempotency key ಅಥವಾ ಕಾರ್ಯಾಚರಣೆ id, ಮರುಪ್ರಯತ್ನದ ಮೊದಲು ಕಾರ್ಯಾಚರಣೆಯ ಸ್ಥಿತಿ ಹುಡುಕುವುದು, ಮತ್ತು ವ್ಯವಹಾರ id ಗಳಂತಹ ಗುರುತುಗಳನ್ನು ಹೊತ್ತ state. Graph ಸ್ಥಿರತೆ ಮತ್ತು idempotent ಅಡ್ಡ ಪರಿಣಾಮಗಳು ಬೇರೆ ಸಮಸ್ಯೆಗಳನ್ನು ಪರಿಹರಿಸುತ್ತವೆ ಮತ್ತು ಒಟ್ಟಿಗೆ ಬೇಕು."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Durable Store",
    "textKn": "ಸ್ಥಿರ ಸಂಗ್ರಹ ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "lg_3.py",
    "headingEn": "SQLiteCheckpointer, build() and the child-process helpers",
    "headingKn": "SQLiteCheckpointer, build() ಮತ್ತು child-process ಸಹಾಯಕಗಳು",
    "descEn": "SQLiteCheckpointer upserts one JSON row per session with a schema_version, refuses a version it does not understand, and supports update_state. It opens each connection through contextlib.closing so connections are really closed. child_main is what the second process runs: it can exit abruptly with os._exit right after an external side effect, which is a real crash, not a simulated one.",
    "descKn": "SQLiteCheckpointer ಪ್ರತಿ session ಗೆ schema_version ಇರುವ ಒಂದು JSON ಸಾಲು upsert ಮಾಡುತ್ತದೆ, ತನಗೆ ಅರ್ಥವಾಗದ version ನಿರಾಕರಿಸುತ್ತದೆ, ಮತ್ತು update_state ಬೆಂಬಲಿಸುತ್ತದೆ. ಅದು ಪ್ರತಿ ಸಂಪರ್ಕವನ್ನು contextlib.closing ಮೂಲಕ ತೆರೆಯುತ್ತದೆ, ಆದ್ದರಿಂದ ಸಂಪರ್ಕಗಳು ನಿಜವಾಗಿ ಮುಚ್ಚಲ್ಪಡುತ್ತವೆ. child_main ಎರಡನೇ ಪ್ರಕ್ರಿಯೆ ಚಲಾಯಿಸುವುದು: ಬಾಹ್ಯ ಅಡ್ಡ ಪರಿಣಾಮದ ತಕ್ಷಣ os._exit ನೊಂದಿಗೆ ಹಠಾತ್ ನಿರ್ಗಮಿಸಬಹುದು, ಇದು ನಿಜವಾದ crash, ಸಿಮ್ಯುಲೇಟೆಡ್ ಅಲ್ಲ.",
    "code": "class SQLiteCheckpointer:\n    def __init__(self, path):\n        self.path = path\n        with closing(sqlite3.connect(self.path)) as conn, conn:\n            conn.execute(\"CREATE TABLE IF NOT EXISTS checkpoints (session_id TEXT PRIMARY KEY, checkpoint_json TEXT NOT NULL)\")\n\n    def save(self, session_id, checkpoint):\n        checkpoint = dict(checkpoint, schema_version=SCHEMA_VERSION)\n        data = json.dumps(checkpoint, sort_keys=True)\n        with closing(sqlite3.connect(self.path)) as conn, conn:\n            conn.execute(\"INSERT INTO checkpoints (session_id, checkpoint_json) VALUES (?, ?) \"\n                         \"ON CONFLICT(session_id) DO UPDATE SET checkpoint_json = excluded.checkpoint_json\", (session_id, data))\n\n    def load(self, session_id):\n        with closing(sqlite3.connect(self.path)) as conn:\n            row = conn.execute(\"SELECT checkpoint_json FROM checkpoints WHERE session_id = ?\", (session_id,)).fetchone()\n        if row is None:\n            return None\n        cp = json.loads(row[0])\n        if cp.get(\"schema_version\") != SCHEMA_VERSION:\n            raise ValueError(f\"checkpoint schema {cp.get('schema_version')} != supported {SCHEMA_VERSION}\")\n        return cp\n\n    def update_state(self, session_id, updates):\n        cp = self.load(session_id)\n        if cp is None:\n            raise ValueError(f\"No checkpoint for {session_id!r}\")\n        cp[\"state\"].update(updates)\n        self.save(session_id, cp)\n\n\ndef build(checkpointer, send=send_node):\n    g = StateGraph(checkpointer)\n    g.set_reducer(\"messages\", append_reducer)\n    g.add_node(\"classify\", classify_node)\n    g.add_node(\"refund\", refund_with_messages)\n    g.add_node(\"human_gate\", human_gate_node)\n    g.add_node(\"send\", send)\n    g.add_conditional_edges(\"classify\", choose_route, {\"refund\": \"refund\", \"bug\": \"refund\", \"sales\": \"refund\"})\n    g.add_edge(\"refund\", \"human_gate\")\n    g.add_edge(\"human_gate\", \"send\")\n    return g\n\n\n# ---- child-process behaviour used to produce a genuine crash -------------------------------------\ndef child_main(mode, db, outbox):\n    def emailing_send(state):\n        with open(outbox, \"a\", encoding=\"utf-8\") as f:\n            f.write(\"EMAIL SENT\\n\")\n        if mode == \"crash-after-effect\":\n            os._exit(3)\n        return send_node(state)\n    cp = SQLiteCheckpointer(db)\n    g = build(cp, send=emailing_send)\n    g.run(\"job-1\", \"classify\", dict(fresh(\"refund please\"), human_approval=True))\n\n\ndef run_child(mode, db, outbox):\n    return subprocess.run([sys.executable, HERE, \"--child\", mode, db, outbox], capture_output=True, text=True, encoding=\"utf-8\").returncode"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "lg_3.py",
    "headingEn": "main(): nine sections",
    "headingKn": "main(): ಒಂಬತ್ತು ವಿಭಾಗಗಳು",
    "descEn": "main() pauses and resumes through SQLite with a fresh graph object, crashes a child process after an email is sent, resumes and counts the emails, applies an idempotency key, loads a checkpoint of a wrong schema version, tests the sqlite3 context-manager pattern, and runs supervisor and swarm shapes.",
    "descKn": "main() SQLite ಮೂಲಕ ಹೊಸ graph ವಸ್ತುವಿನೊಂದಿಗೆ ವಿರಾಮ ಮತ್ತು resume ಮಾಡುತ್ತದೆ, ಇಮೇಲ್ ಕಳುಹಿಸಿದ ನಂತರ child ಪ್ರಕ್ರಿಯೆ crash ಮಾಡುತ್ತದೆ, resume ಮಾಡಿ ಇಮೇಲ್‌ಗಳನ್ನು ಎಣಿಸುತ್ತದೆ, idempotency key ಅನ್ವಯಿಸುತ್ತದೆ, ತಪ್ಪು schema ಆವೃತ್ತಿಯ checkpoint ಲೋಡ್ ಮಾಡುತ್ತದೆ, sqlite3 context-manager ಮಾದರಿ ಪರೀಕ್ಷಿಸುತ್ತದೆ, ಮತ್ತು supervisor ಹಾಗೂ swarm ಆಕಾರಗಳನ್ನು ಚಲಾಯಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    tmp = tempfile.mkdtemp()\n    db = os.path.join(tmp, \"graph.db\")\n    sid = \"support-001\"\n\n    section(\"1. First run with SQLite, paused at the human gate\")\n    cp = SQLiteCheckpointer(db)\n    graph = build(cp)\n    try:\n        graph.run(sid, \"classify\", fresh(\"I was charged twice and need a refund.\"))\n    except RuntimeError as e:\n        print(\"Workflow paused:\", e)\n    print(\"database file on disk:\", os.path.exists(db), \"| size > 0:\", os.path.getsize(db) > 0)\n    saved = cp.load(sid)\n    print(json.dumps({k: saved[k] for k in (\"schema_version\", \"last_completed_node\", \"next_node\", \"checkpoint_number\")}))\n\n    section(\"2. Human approval, then resume through a brand-new checkpointer and graph\")\n    cp.update_state(sid, {\"human_approval\": True})\n    new_graph = build(SQLiteCheckpointer(db))\n    final = new_graph.resume(sid)\n    print(\"nodes run by the new graph:\", new_graph.executed)\n    print(\"final:\", json.dumps({\"step\": final[\"step\"], \"output\": final[\"output\"], \"approved\": final[\"human_approval\"]}))\n\n    section(\"3. Genuinely checking: a real crash in another OS process, then resume\")\n    db2, outbox = os.path.join(tmp, \"crash.db\"), os.path.join(tmp, \"outbox.txt\")\n    code = run_child(\"crash-after-effect\", db2, outbox)\n    print(\"child process exit code:\", code, \"(os._exit, no cleanup, no exception handling)\")\n    cp2 = SQLiteCheckpointer(db2).load(\"job-1\")\n    print(\"checkpoint written by the dead process:\", json.dumps({k: cp2[k] for k in (\"last_completed_node\", \"next_node\", \"checkpoint_number\")}))\n    print(\"emails sent so far:\", open(outbox).read().count(\"EMAIL SENT\"))\n\n    section(\"4. Genuinely checking: resuming repeats the node whose effect already happened\")\n    def emailing_send_here(state):\n        with open(outbox, \"a\", encoding=\"utf-8\") as f:\n            f.write(\"EMAIL SENT\\n\")\n        return send_node(state)\n    g_resume = build(SQLiteCheckpointer(db2), send=emailing_send_here)\n    g_resume.resume(\"job-1\")\n    print(\"nodes run on resume:\", g_resume.executed)\n    print(\"emails sent in total:\", open(outbox).read().count(\"EMAIL SENT\"), \"(the customer got the email twice)\")\n\n    section(\"5. Idempotency key makes the replay safe\")\n    sent_log = {}\n    def idempotent_send(state, key=\"job-2:send-final\"):\n        if key in sent_log:\n            return send_node(state)\n        sent_log[key] = True\n        with open(outbox, \"a\") as f:\n            f.write(\"EMAIL SENT\\n\")\n        return send_node(state)\n    before = open(outbox).read().count(\"EMAIL SENT\")\n    state = dict(fresh(\"x\"), output=\"o\", step=0)\n    idempotent_send(state)\n    idempotent_send(state)\n    print(\"two replays of the same operation added\", open(outbox).read().count(\"EMAIL SENT\") - before, \"email\")\n\n    section(\"6. Genuinely checking: a checkpoint from another schema version\")\n    with closing(sqlite3.connect(db)) as conn, conn:\n        raw = json.loads(conn.execute(\"SELECT checkpoint_json FROM checkpoints WHERE session_id=?\", (sid,)).fetchone()[0])\n        raw[\"schema_version\"] = 2\n        conn.execute(\"UPDATE checkpoints SET checkpoint_json=? WHERE session_id=?\", (json.dumps(raw), sid))\n    try:\n        SQLiteCheckpointer(db).load(sid)\n    except ValueError as e:\n        print(\"refused:\", e)\n\n    section(\"7. Genuinely checking: does the 'with sqlite3.connect()' pattern close the connection?\")\n    probe = os.path.join(tmp, \"probe.db\")\n    with warnings.catch_warnings(record=True) as caught:\n        warnings.simplefilter(\"always\")\n        def leaky():\n            with sqlite3.connect(probe) as conn:\n                conn.execute(\"CREATE TABLE t (x)\")\n        leaky()\n        import gc\n        gc.collect()\n    print(\"ResourceWarnings raised by the context-manager-only pattern:\", [str(w.message)[:60] for w in caught if issubclass(w.category, ResourceWarning)] or \"none\")\n    in_use = False\n    try:\n        os.remove(probe)\n    except PermissionError:\n        in_use = True\n    print(\"could the database file be deleted straight afterwards:\", not in_use)\n    print(\"the sqlite3 context manager commits or rolls back; it does not close. contextlib.closing does.\")\n\n    section(\"8. Supervisor topology as state-based routing\")\n    g = lg_2.StateGraph(lg_2.MemoryCheckpointer())\n    g.add_node(\"supervisor\", lambda s: {\"route\": \"coding\" if \"code\" in s[\"messages\"][-1].lower() else \"research\", \"step\": s[\"step\"] + 1})\n    g.add_node(\"research\", lambda s: {\"output\": \"research done\", \"step\": s[\"step\"] + 1})\n    g.add_node(\"coding\", lambda s: {\"output\": \"code written\", \"step\": s[\"step\"] + 1})\n    g.add_conditional_edges(\"supervisor\", choose_route, {\"research\": \"research\", \"coding\": \"coding\"})\n    for text in (\"write code for a parser\", \"find papers on memory\"):\n        trace = []\n        orig = g.nodes\n        g.executed.clear()\n        out = g.run(\"t\", \"supervisor\", fresh(text))\n        print(f\"{text!r:<30} -> {g.executed}\")\n\n    section(\"9. Swarm handoffs need a termination rule\")\n    hops, active = 0, \"A\"\n    while hops < 12:\n        active = \"B\" if active == \"A\" else \"A\"\n        hops += 1\n    print(f\"two agents handing off with no termination rule: {hops} hops before the external limit stopped it\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. First run with SQLite, paused at the human gate ---\n[execute] node=classify\n[checkpoint 1] completed=classify next=refund\n[execute] node=refund\n[checkpoint 2] completed=refund next=human_gate\n[execute] node=human_gate\n[stopped] node=human_gate reason=Human approval required\nWorkflow paused: Human approval required\ndatabase file on disk: True | size > 0: True\n{\"schema_version\": 1, \"last_completed_node\": \"refund\", \"next_node\": \"human_gate\", \"checkpoint_number\": 2}\n\n--- 2. Human approval, then resume through a brand-new checkpointer and graph ---\n[resume] checkpoint=2 last_completed=refund next=human_gate\n[execute] node=human_gate\n[checkpoint 3] completed=human_gate next=send\n[execute] node=send\n[checkpoint 4] completed=send next=None\nnodes run by the new graph: ['human_gate', 'send']\nfinal: {\"step\": 4, \"output\": \"Refund request prepared and awaiting approval. Approved and sent.\", \"approved\": true}\n\n--- 3. Genuinely checking: a real crash in another OS process, then resume ---\nchild process exit code: 3 (os._exit, no cleanup, no exception handling)\ncheckpoint written by the dead process: {\"last_completed_node\": \"human_gate\", \"next_node\": \"send\", \"checkpoint_number\": 3}\nemails sent so far: 1\n\n--- 4. Genuinely checking: resuming repeats the node whose effect already happened ---\n[resume] checkpoint=3 last_completed=human_gate next=send\n[execute] node=send\n[checkpoint 4] completed=send next=None\nnodes run on resume: ['send']\nemails sent in total: 2 (the customer got the email twice)\n\n--- 5. Idempotency key makes the replay safe ---\ntwo replays of the same operation added 1 email\n\n--- 6. Genuinely checking: a checkpoint from another schema version ---\nrefused: checkpoint schema 2 != supported 1\n\n--- 7. Genuinely checking: does the 'with sqlite3.connect()' pattern close the connection? ---\nResourceWarnings raised by the context-manager-only pattern: ['unclosed database in <sqlite3.Connection object at 0x0000025']\ncould the database file be deleted straight afterwards: False\nthe sqlite3 context manager commits or rolls back; it does not close. contextlib.closing does.\n\n--- 8. Supervisor topology as state-based routing ---\n[execute] node=supervisor\n[checkpoint 1] completed=supervisor next=coding\n[execute] node=coding\n[checkpoint 2] completed=coding next=None\n'write code for a parser'      -> ['supervisor', 'coding']\n[execute] node=supervisor\n[checkpoint 1] completed=supervisor next=research\n[execute] node=research\n[checkpoint 2] completed=research next=None\n'find papers on memory'        -> ['supervisor', 'research']\n\n--- 9. Swarm handoffs need a termination rule ---\ntwo agents handing off with no termination rule: 12 hops before the external limit stopped it"
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
    "headingEn": "Pause, Approve, New Process",
    "headingKn": "ವಿರಾಮ, ಅನುಮೋದನೆ, ಹೊಸ ಪ್ರಕ್ರಿಯೆ",
    "bodyEn": "Section 1 pauses at the gate, a database file now exists, and the stored row says schema_version 1, last_completed_node refund, next_node human_gate, checkpoint_number 2. Section 2 approves, then builds a brand-new checkpointer and graph on the same file and resumes: only human_gate and send run, ending at step 4 with \"Refund request prepared and awaiting approval. Approved and sent.\" The new graph object had no access to the old one's memory, only the file.",
    "bodyKn": "ವಿಭಾಗ 1 gate ನಲ್ಲಿ ವಿರಾಮ ಮಾಡುತ್ತದೆ, ಈಗ ಡೇಟಾಬೇಸ್ ಫೈಲ್ ಇದೆ, ಮತ್ತು ಸಂಗ್ರಹಿತ ಸಾಲು schema_version 1, last_completed_node refund, next_node human_gate, checkpoint_number 2 ಎನ್ನುತ್ತದೆ. ವಿಭಾಗ 2 ಅನುಮೋದಿಸಿ, ನಂತರ ಅದೇ ಫೈಲ್ ಮೇಲೆ ಸಂಪೂರ್ಣ ಹೊಸ checkpointer ಮತ್ತು graph ನಿರ್ಮಿಸಿ resume ಮಾಡುತ್ತದೆ: ಕೇವಲ human_gate ಮತ್ತು send ಚಲಿಸಿ, ಹೆಜ್ಜೆ 4 ರಲ್ಲಿ \"Refund request prepared and awaiting approval. Approved and sent.\" ನೊಂದಿಗೆ ಕೊನೆಗೊಳ್ಳುತ್ತವೆ. ಹೊಸ graph ವಸ್ತುವಿಗೆ ಹಳೆಯದರ ಮೆಮೊರಿಗೆ ಪ್ರವೇಶ ಇರಲಿಲ್ಲ, ಫೈಲ್ ಮಾತ್ರ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Real Crash Replays the Side Effect",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ನಿಜವಾದ Crash ಅಡ್ಡ ಪರಿಣಾಮವನ್ನು ಪುನರಾವರ್ತಿಸುತ್ತದೆ",
    "bodyEn": "Section 3 starts a second Python process. It writes \"EMAIL SENT\" to an outbox file and then exits with os._exit(3), with no cleanup and no exception. The exit code is 3 and the checkpoint it left behind says last_completed_node human_gate, next_node send, checkpoint 3, with one email in the outbox. Section 4 resumes: the graph correctly runs only send, and the outbox now contains two emails. The graph did exactly what it promised, and the customer still received the message twice. Section 5 shows an idempotency key turning two executions of the same operation into one email.",
    "bodyKn": "ವಿಭಾಗ 3 ಎರಡನೇ Python ಪ್ರಕ್ರಿಯೆ ಆರಂಭಿಸುತ್ತದೆ. ಅದು outbox ಫೈಲ್‌ಗೆ \"EMAIL SENT\" ಬರೆದು ನಂತರ ಯಾವುದೇ ಶುದ್ಧೀಕರಣ ಅಥವಾ ವಿನಾಯಿತಿ ಇಲ್ಲದೆ os._exit(3) ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸುತ್ತದೆ. ನಿರ್ಗಮನ ಕೋಡ್ 3 ಮತ್ತು ಅದು ಬಿಟ್ಟ checkpoint last_completed_node human_gate, next_node send, checkpoint 3 ಎನ್ನುತ್ತದೆ, outbox ನಲ್ಲಿ ಒಂದು ಇಮೇಲ್. ವಿಭಾಗ 4 resume ಮಾಡುತ್ತದೆ: graph ಸರಿಯಾಗಿ ಕೇವಲ send ಚಲಾಯಿಸುತ್ತದೆ, ಮತ್ತು outbox ಈಗ ಎರಡು ಇಮೇಲ್ ಹೊಂದಿದೆ. Graph ತಾನು ಭರವಸೆ ನೀಡಿದ್ದನ್ನೇ ಮಾಡಿತು, ಆದರೂ ಗ್ರಾಹಕರಿಗೆ ಸಂದೇಶ ಎರಡು ಬಾರಿ ಸಿಕ್ಕಿತು. ವಿಭಾಗ 5 idempotency key ಒಂದೇ ಕಾರ್ಯಾಚರಣೆಯ ಎರಡು ಚಲಾವಣೆಗಳನ್ನು ಒಂದು ಇಮೇಲ್ ಮಾಡುವುದನ್ನು ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Context Manager Does Not Close the Connection",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Context Manager ಸಂಪರ್ಕ ಮುಚ್ಚುವುದಿಲ್ಲ",
    "bodyEn": "The pasted checkpointer used \"with sqlite3.connect(path) as conn:\". Section 7 tests that pattern. A ResourceWarning \"unclosed database\" is raised, and on this Windows machine the database file could not be deleted straight afterwards. The sqlite3 context manager commits or rolls back a transaction; it does not close the connection. The lab's checkpointer wraps each connection in contextlib.closing instead. Leaked connections can lock files and exhaust handles in a long-running worker.",
    "bodyKn": "ಅಂಟಿಸಿದ checkpointer \"with sqlite3.connect(path) as conn:\" ಬಳಸಿತು. ವಿಭಾಗ 7 ಆ ಮಾದರಿ ಪರೀಕ್ಷಿಸುತ್ತದೆ. \"unclosed database\" ResourceWarning ಎತ್ತಲ್ಪಡುತ್ತದೆ, ಮತ್ತು ಈ Windows ಯಂತ್ರದಲ್ಲಿ ಡೇಟಾಬೇಸ್ ಫೈಲ್ ಅನ್ನು ತಕ್ಷಣ ಅಳಿಸಲಾಗಲಿಲ್ಲ. sqlite3 context manager transaction ಅನ್ನು commit ಅಥವಾ rollback ಮಾಡುತ್ತದೆ; ಸಂಪರ್ಕ ಮುಚ್ಚುವುದಿಲ್ಲ. ಲ್ಯಾಬ್‌ನ checkpointer ಬದಲಿಗೆ ಪ್ರತಿ ಸಂಪರ್ಕವನ್ನು contextlib.closing ನಲ್ಲಿ ಸುತ್ತುತ್ತದೆ. ಸೋರಿದ ಸಂಪರ್ಕಗಳು ದೀರ್ಘಕಾಲ ಚಲಿಸುವ worker ನಲ್ಲಿ ಫೈಲ್‌ಗಳನ್ನು ಲಾಕ್ ಮಾಡಿ handles ಖಾಲಿಮಾಡಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Schema Versions, Topologies and Budgets",
    "headingKn": "Schema Versions, Topologies ಮತ್ತು Budgets",
    "bodyEn": "Section 6 rewrites a stored checkpoint to schema version 2 and loading it raises \"checkpoint schema 2 != supported 1\", a clear refusal instead of a silent misread. Section 8 shows a supervisor as ordinary conditional routing: a coding request goes supervisor then coding, a research request supervisor then research. A swarm hands control directly between peers and, with no termination rule, bounces forever; section 9 stops it only because the loop has an external limit. A hierarchical system is a graph used as a node in a parent graph. Whatever the topology, give cycles a step budget and keep the state small, serialisable and versioned.",
    "bodyKn": "ವಿಭಾಗ 6 ಸಂಗ್ರಹಿತ checkpoint ಅನ್ನು schema ಆವೃತ್ತಿ 2 ಗೆ ಮರುಬರೆಯುತ್ತದೆ ಮತ್ತು ಲೋಡ್ ಮಾಡಿದರೆ \"checkpoint schema 2 != supported 1\" ಎತ್ತುತ್ತದೆ, ಮೌನ ತಪ್ಪು ಓದಿನ ಬದಲು ಸ್ಪಷ್ಟ ನಿರಾಕರಣೆ. ವಿಭಾಗ 8 supervisor ಅನ್ನು ಸಾಮಾನ್ಯ ಷರತ್ತಿನ ಮಾರ್ಗನಿರ್ದೇಶನವಾಗಿ ತೋರಿಸುತ್ತದೆ: ಕೋಡಿಂಗ್ ವಿನಂತಿ supervisor ನಂತರ coding, ಸಂಶೋಧನೆ ವಿನಂತಿ supervisor ನಂತರ research. Swarm ಸಹವರ್ತಿಗಳ ನಡುವೆ ನೇರವಾಗಿ ನಿಯಂತ್ರಣ ಹಸ್ತಾಂತರಿಸುತ್ತದೆ ಮತ್ತು ಮುಕ್ತಾಯ ನಿಯಮವಿಲ್ಲದಿದ್ದರೆ ಶಾಶ್ವತವಾಗಿ ಪುಟಿಯುತ್ತದೆ; ವಿಭಾಗ 9 ಚಕ್ರಕ್ಕೆ ಬಾಹ್ಯ ಮಿತಿ ಇರುವುದರಿಂದ ಮಾತ್ರ ಅದನ್ನು ನಿಲ್ಲಿಸುತ್ತದೆ. ಶ್ರೇಣೀಕೃತ ವ್ಯವಸ್ಥೆ ಪೋಷಕ graph ನಲ್ಲಿ node ಆಗಿ ಬಳಸಿದ graph. Topology ಏನೇ ಇರಲಿ, ಚಕ್ರಗಳಿಗೆ step budget ನೀಡಿ ಮತ್ತು state ಅನ್ನು ಚಿಕ್ಕ, ಧಾರಾವಾಹಿ ಮಾಡಬಹುದಾದ ಮತ್ತು version ಮಾಡಿದ್ದಾಗಿಡಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Production Checklist",
    "headingKn": "Production ಪರಿಶೀಲನಾ ಪಟ್ಟಿ",
    "bodyEn": "Node boundaries should match meaningful recovery units: not one giant node and not microscopic ones. Persist anything later nodes need, such as transaction ids, retrieved document ids and random choices, instead of keeping it in local variables. Put references, not large artifacts, in state. Unit test nodes as plain functions, then test the whole story: run, pause, edit state, new runtime, resume, and verify earlier nodes did not rerun.",
    "bodyKn": "Node ಗಡಿಗಳು ಅರ್ಥಪೂರ್ಣ ಚೇತರಿಕೆ ಘಟಕಗಳಿಗೆ ಹೊಂದಬೇಕು: ಒಂದು ದೈತ್ಯ node ಅಲ್ಲ, ಸೂಕ್ಷ್ಮ nodes ಅಲ್ಲ. ನಂತರದ nodes ಗೆ ಬೇಕಾದ ವ್ಯವಹಾರ id, ಪಡೆದ ದಾಖಲೆ id ಮತ್ತು ಯಾದೃಚ್ಛಿಕ ಆಯ್ಕೆಗಳನ್ನು ಸ್ಥಳೀಯ ಚರಗಳಲ್ಲಿ ಇಡುವ ಬದಲು ಉಳಿಸಿ. State ನಲ್ಲಿ ದೊಡ್ಡ ವಸ್ತುಗಳಲ್ಲ, ಉಲ್ಲೇಖಗಳನ್ನು ಇಡಿ. Nodes ಅನ್ನು ಸಾಮಾನ್ಯ ಕಾರ್ಯಗಳಾಗಿ ಯೂನಿಟ್ ಪರೀಕ್ಷಿಸಿ, ನಂತರ ಇಡೀ ಕಥೆ ಪರೀಕ್ಷಿಸಿ: ಚಲಾಯಿಸು, ವಿರಾಮ, state ಸಂಪಾದಿಸು, ಹೊಸ runtime, resume, ಮತ್ತು ಹಿಂದಿನ nodes ಮರುಚಲಿಸಲಿಲ್ಲ ಎಂದು ಪರಿಶೀಲಿಸಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Long-running agents need to survive restarts, pause for humans, stream progress and carry memory. Making state, control position and persistence explicit gives all four from one mechanism, at the price of designing for replay.",
    "bodyKn": "ದೀರ್ಘಕಾಲ ಚಲಿಸುವ agents ಮರುಪ್ರಾರಂಭ ಸಹಿಸಬೇಕು, ಮಾನವರಿಗಾಗಿ ವಿರಮಿಸಬೇಕು, ಪ್ರಗತಿ ಸ್ಟ್ರೀಮ್ ಮಾಡಬೇಕು ಮತ್ತು ಮೆಮೊರಿ ಒಯ್ಯಬೇಕು. State, ನಿಯಂತ್ರಣ ಸ್ಥಾನ ಮತ್ತು ಸ್ಥಿರತೆಯನ್ನು ಸ್ಪಷ್ಟಗೊಳಿಸುವುದು ನಾಲ್ಕನ್ನೂ ಒಂದೇ ಕಾರ್ಯವಿಧಾನದಿಂದ ನೀಡುತ್ತದೆ, replay ಗಾಗಿ ವಿನ್ಯಾಸ ಮಾಡುವ ಬೆಲೆಯಲ್ಲಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"checkpointing makes external actions happen exactly once.\" It makes the graph's logical progress recoverable; the actions need their own idempotency.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"checkpointing ಬಾಹ್ಯ ಕ್ರಿಯೆಗಳನ್ನು ಸರಿಯಾಗಿ ಒಮ್ಮೆ ನಡೆಯುವಂತೆ ಮಾಡುತ್ತದೆ.\" ಅದು graph ನ ತಾರ್ಕಿಕ ಪ್ರಗತಿಯನ್ನು ಚೇತರಿಸಬಹುದಾಗಿಸುತ್ತದೆ; ಕ್ರಿಯೆಗಳಿಗೆ ತಮ್ಮದೇ idempotency ಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Durable execution: a logical run that survives process death. Idempotency key: an id that makes a repeated operation safe. Schema version: a marker for migrating saved state. Supervisor: central routing. Swarm: peers handing off directly. Subgraph: a graph used as a node. Interrupt: a deliberate pause. Replay: re-execution from saved state.",
    "bodyKn": "Durable execution: ಪ್ರಕ್ರಿಯೆ ಸಾವನ್ನು ಮೀರಿ ಬದುಕುವ ತಾರ್ಕಿಕ ಓಟ. Idempotency key: ಪುನರಾವರ್ತಿತ ಕಾರ್ಯಾಚರಣೆ ಸುರಕ್ಷಿತಗೊಳಿಸುವ id. Schema version: ಉಳಿಸಿದ state ವಲಸೆಗೆ ಗುರುತು. Supervisor: ಕೇಂದ್ರ ಮಾರ್ಗನಿರ್ದೇಶನ. Swarm: ಸಹವರ್ತಿಗಳು ನೇರವಾಗಿ ಹಸ್ತಾಂತರಿಸುವುದು. Subgraph: node ಆಗಿ ಬಳಸಿದ graph. Interrupt: ಉದ್ದೇಶಿತ ವಿರಾಮ. Replay: ಉಳಿಸಿದ state ಯಿಂದ ಮರುಚಲಾವಣೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A database row per session lets a brand-new process resume. 2) A real os._exit crash left checkpoint 3 and one email; resuming ran only send and produced a second email. 3) Idempotency keys, not checkpoints, prevent duplicate effects. 4) A schema version turned a wrong-version load into a clear refusal. 5) \"with sqlite3.connect()\" leaked the connection; use contextlib.closing. 6) A swarm needs a termination rule. 7) Budget every cycle.",
    "bodyKn": "1) ಪ್ರತಿ session ಗೆ ಡೇಟಾಬೇಸ್ ಸಾಲು ಸಂಪೂರ್ಣ ಹೊಸ ಪ್ರಕ್ರಿಯೆ resume ಮಾಡಲು ಬಿಡುತ್ತದೆ. 2) ನಿಜವಾದ os._exit crash checkpoint 3 ಮತ್ತು ಒಂದು ಇಮೇಲ್ ಬಿಟ್ಟಿತು; resume ಕೇವಲ send ಚಲಾಯಿಸಿ ಎರಡನೇ ಇಮೇಲ್ ಉತ್ಪಾದಿಸಿತು. 3) ನಕಲು ಪರಿಣಾಮ ತಡೆಯುವುದು checkpoints ಅಲ್ಲ, idempotency keys. 4) Schema version ತಪ್ಪು-ಆವೃತ್ತಿ ಲೋಡ್ ಅನ್ನು ಸ್ಪಷ್ಟ ನಿರಾಕರಣೆ ಮಾಡಿತು. 5) \"with sqlite3.connect()\" ಸಂಪರ್ಕ ಸೋರಿಸಿತು; contextlib.closing ಬಳಸಿ. 6) Swarm ಗೆ ಮುಕ್ತಾಯ ನಿಯಮ ಬೇಕು. 7) ಪ್ರತಿ ಚಕ್ರಕ್ಕೆ budget."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why can a brand-new graph object resume a session?",
      "qKn": "ಸಂಪೂರ್ಣ ಹೊಸ graph ವಸ್ತು session ಅನ್ನು resume ಮಾಡಲು ಹೇಗೆ ಸಾಧ್ಯ?",
      "opts": [
       "It copies the old object",
       "The checkpoint lives in a database file, not in the old object's memory",
       "Python shares memory between objects",
       "It reruns every node"
      ],
      "optsKn": [
       "ಅದು ಹಳೆಯ ವಸ್ತುವನ್ನು ನಕಲಿಸುತ್ತದೆ",
       "Checkpoint ಡೇಟಾಬೇಸ್ ಫೈಲ್‌ನಲ್ಲಿದೆ, ಹಳೆಯ ವಸ್ತುವಿನ ಮೆಮೊರಿಯಲ್ಲಿ ಅಲ್ಲ",
       "Python ವಸ್ತುಗಳ ನಡುವೆ ಮೆಮೊರಿ ಹಂಚುತ್ತದೆ",
       "ಅದು ಪ್ರತಿ node ಮರುಚಲಾಯಿಸುತ್ತದೆ"
      ],
      "correct": 1
     },
     {
      "q": "After the child process crashed, why did the outbox hold two emails?",
      "qKn": "Child ಪ್ರಕ್ರಿಯೆ crash ಆದ ನಂತರ outbox ನಲ್ಲಿ ಎರಡು ಇಮೇಲ್ ಏಕೆ ಇದ್ದವು?",
      "opts": [
       "The graph is buggy",
       "The email was sent before the crash, no checkpoint recorded it, and resume ran send again",
       "SQLite duplicated rows",
       "Resume reran classify"
      ],
      "optsKn": [
       "Graph ನಲ್ಲಿ ದೋಷ",
       "Crash ಮೊದಲು ಇಮೇಲ್ ಕಳುಹಿಸಲಾಯಿತು, ಯಾವ checkpoint ಅದನ್ನು ದಾಖಲಿಸಲಿಲ್ಲ, ಮತ್ತು resume send ಮತ್ತೆ ಚಲಾಯಿಸಿತು",
       "SQLite ಸಾಲುಗಳನ್ನು ನಕಲಿಸಿತು",
       "Resume classify ಮರುಚಲಾಯಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What actually prevents a duplicate effect on replay?",
      "qKn": "Replay ನಲ್ಲಿ ನಕಲು ಪರಿಣಾಮವನ್ನು ವಾಸ್ತವವಾಗಿ ಯಾವುದು ತಡೆಯುತ್ತದೆ?",
      "opts": [
       "A bigger checkpoint",
       "An idempotency key honoured by the operation",
       "More nodes",
       "Schema versioning"
      ],
      "optsKn": [
       "ದೊಡ್ಡ checkpoint",
       "ಕಾರ್ಯಾಚರಣೆ ಗೌರವಿಸುವ idempotency key",
       "ಹೆಚ್ಚು nodes",
       "Schema versioning"
      ],
      "correct": 1
     },
     {
      "q": "What does the sqlite3 \"with\" context manager do with the connection?",
      "qKn": "sqlite3 \"with\" context manager ಸಂಪರ್ಕವನ್ನು ಏನು ಮಾಡುತ್ತದೆ?",
      "opts": [
       "Closes it",
       "Commits or rolls back the transaction but does not close it",
       "Deletes it",
       "Encrypts it"
      ],
      "optsKn": [
       "ಅದನ್ನು ಮುಚ್ಚುತ್ತದೆ",
       "Transaction ಅನ್ನು commit ಅಥವಾ rollback ಮಾಡುತ್ತದೆ ಆದರೆ ಮುಚ್ಚುವುದಿಲ್ಲ",
       "ಅಳಿಸುತ್ತದೆ",
       "ಗೂಢಲಿಪೀಕರಿಸುತ್ತದೆ"
      ],
      "correct": 1
     },
     {
      "q": "Why store a schema_version in each checkpoint?",
      "qKn": "ಪ್ರತಿ checkpoint ನಲ್ಲಿ schema_version ಏಕೆ ಸಂಗ್ರಹಿಸಬೇಕು?",
      "opts": [
       "To speed up queries",
       "A workflow may outlive the software version that wrote its checkpoint, so old snapshots must be detected and migrated",
       "Because JSON needs a version",
       "To limit sessions"
      ],
      "optsKn": [
       "ಪ್ರಶ್ನೆಗಳನ್ನು ವೇಗಗೊಳಿಸಲು",
       "Workflow ತನ್ನ checkpoint ಬರೆದ ಸಾಫ್ಟ್‌ವೇರ್ ಆವೃತ್ತಿಯನ್ನು ಮೀರಿ ಬದುಕಬಹುದು, ಆದ್ದರಿಂದ ಹಳೆಯ ಸ್ನ್ಯಾಪ್‌ಶಾಟ್‌ಗಳನ್ನು ಪತ್ತೆಹಚ್ಚಿ ವಲಸೆ ಮಾಡಬೇಕು",
       "JSON ಗೆ version ಬೇಕು",
       "sessions ಮಿತಿಗೊಳಿಸಲು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
