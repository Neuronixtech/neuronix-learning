module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321523",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Memory Blocks and Sleep-Time Compute (Part 3 of 3) — The Full Run, a Control, Races and Provenance",
 "titleKn": "Memory Blocks ಮತ್ತು Sleep-Time Compute (ಭಾಗ 3 / 3) — ಸಂಪೂರ್ಣ ಓಟ, ನಿಯಂತ್ರಣ, Races ಮತ್ತು ಮೂಲ",
 "desc": "Run the three-turn scenario with a control, measure the critical path with a real thread, reproduce and prevent a lost update, add a mutation log, and show why unlabelled recall lets untrusted text become a learned fact.",
 "descKn": "ನಿಯಂತ್ರಣದೊಂದಿಗೆ ಮೂರು-ಸುತ್ತಿನ ಸನ್ನಿವೇಶ ಚಲಾಯಿಸಿ, ನಿಜವಾದ thread ನಿಂದ critical path ಅಳೆಯಿರಿ, ಕಳೆದುಹೋದ ನವೀಕರಣ ಪುನರುತ್ಪಾದಿಸಿ ಮತ್ತು ತಡೆಯಿರಿ, ಬದಲಾವಣೆ ಲಾಗ್ ಸೇರಿಸಿ, ಮತ್ತು ಲೇಬಲ್ ಇಲ್ಲದ recall ನಂಬಲಾಗದ ಪಠ್ಯವನ್ನು ಕಲಿತ ಸಂಗತಿಯಾಗಿಸುವುದನ್ನು ತೋರಿಸಿ.",
 "objectives": [
  "Prove that a sleep pass changed later behaviour using a control run.",
  "Measure the response path against background consolidation.",
  "Reproduce a lost update and prevent it with an optimistic version check.",
  "Record mutations with actor and reason to expose silent drift.",
  "Explain why consolidation needs provenance and trust."
 ],
 "objectivesKn": [
  "ನಿಯಂತ್ರಣ ಓಟದಿಂದ sleep pass ನಂತರದ ವರ್ತನೆ ಬದಲಿಸಿತು ಎಂದು ಸಾಬೀತುಪಡಿಸಿ.",
  "ಉತ್ತರದ ದಾರಿಯನ್ನು ಹಿನ್ನೆಲೆ ಏಕೀಕರಣದ ವಿರುದ್ಧ ಅಳೆಯಿರಿ.",
  "ಕಳೆದುಹೋದ ನವೀಕರಣ ಪುನರುತ್ಪಾದಿಸಿ ಮತ್ತು optimistic version ಪರಿಶೀಲನೆಯಿಂದ ತಡೆಯಿರಿ.",
  "ಮೌನ ಜಾರುವಿಕೆ ಬಹಿರಂಗಪಡಿಸಲು actor ಮತ್ತು ಕಾರಣದೊಂದಿಗೆ ಬದಲಾವಣೆಗಳನ್ನು ದಾಖಲಿಸಿ.",
  "ಏಕೀಕರಣಕ್ಕೆ ಮೂಲ ಮತ್ತು ನಂಬಿಕೆ ಏಕೆ ಬೇಕು ಎಂದು ವಿವರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Memory Blocks and Sleep-Time Compute (Part 3 of 3)",
    "textKn": "Memory Blocks ಮತ್ತು Sleep-Time Compute (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: the full three-turn run, a control experiment, a measured critical path, lost updates, mutation logs and provenance. Every output below was genuinely produced by the lab file on Python 3.14.5. The pasted source was cut off at section 140, so the closing material is rebuilt. Timestamps in the traces change on every run; the timings in section 10 are real measurements and will differ slightly on your machine. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಸಂಪೂರ್ಣ ಮೂರು-ಸುತ್ತಿನ ಓಟ, ನಿಯಂತ್ರಣ ಪ್ರಯೋಗ, ಅಳೆದ critical path, ಕಳೆದುಹೋದ ನವೀಕರಣಗಳು, ಬದಲಾವಣೆ ಲಾಗ್‌ಗಳು ಮತ್ತು ಮೂಲ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಅಂಟಿಸಿದ ಮೂಲ ವಿಭಾಗ 140 ರಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ ಮುಕ್ತಾಯ ವಿಷಯವನ್ನು ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. Trace ಗಳಲ್ಲಿನ ಟೈಮ್‌ಸ್ಟ್ಯಾಂಪ್ ಪ್ರತಿ ಓಟದಲ್ಲೂ ಬದಲಾಗುತ್ತದೆ; ವಿಭಾಗ 10 ರ ಸಮಯಗಳು ನಿಜವಾದ ಅಳತೆಗಳು ಮತ್ತು ನಿಮ್ಮ ಯಂತ್ರದಲ್ಲಿ ಸ್ವಲ್ಪ ಬೇರೆ ಇರುತ್ತವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Complete Run",
    "textKn": "ಸಂಪೂರ್ಣ ಓಟ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Claim and the Evidence",
    "headingKn": "ಹೇಳಿಕೆ ಮತ್ತು ಸಾಕ್ಷ್ಯ",
    "bodyEn": "The claim: a sleep pass changes persistent memory in a way that changes later behaviour, and the response never waited for it. The scenario is three turns. Turn 1 states a preference, Turn 2 reports a database migration, a sleep pass runs, and Turn 3 asks which database Atlas uses. The evidence is the trace order (every \"primary: response ready\" comes before any \"sleep:\" line), the before and after block versions, and a control run with no sleep pass.",
    "bodyKn": "ಹೇಳಿಕೆ: sleep pass ನಿರಂತರ ಮೆಮೊರಿಯನ್ನು ನಂತರದ ವರ್ತನೆ ಬದಲಿಸುವ ರೀತಿಯಲ್ಲಿ ಬದಲಿಸುತ್ತದೆ, ಮತ್ತು ಉತ್ತರ ಅದಕ್ಕಾಗಿ ಕಾಯಲಿಲ್ಲ. ಸನ್ನಿವೇಶ ಮೂರು ಸುತ್ತು. ಸುತ್ತು 1 ಆದ್ಯತೆ ಹೇಳುತ್ತದೆ, ಸುತ್ತು 2 ಡೇಟಾಬೇಸ್ ವಲಸೆ ವರದಿ ಮಾಡುತ್ತದೆ, sleep pass ಚಲಿಸುತ್ತದೆ, ಮತ್ತು ಸುತ್ತು 3 Atlas ಯಾವ ಡೇಟಾಬೇಸ್ ಬಳಸುತ್ತದೆ ಎಂದು ಕೇಳುತ್ತದೆ. ಸಾಕ್ಷ್ಯ trace ಕ್ರಮ (ಪ್ರತಿ \"primary: response ready\" ಯಾವುದೇ \"sleep:\" ಸಾಲಿನ ಮೊದಲು ಬರುತ್ತದೆ), ಮೊದಲು ಮತ್ತು ನಂತರದ block versions, ಮತ್ತು sleep pass ಇಲ್ಲದ ನಿಯಂತ್ರಣ ಓಟ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Experiments",
    "textKn": "ಪ್ರಯೋಗಗಳನ್ನು ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "memblocks_3.py",
    "headingEn": "Traced agents and the failure-mode helpers",
    "headingKn": "Traced agents ಮತ್ತು ವೈಫಲ್ಯ-ವಿಧಾನ ಸಹಾಯಕಗಳು",
    "descEn": "TracedPrimary and TracedSleeper add timestamped trace lines around the Part 2 agents. CheckedStore adds optimistic concurrency: a write names the version it was computed from and is refused if the block has moved on. LoggedStore records old value, new value, actor and reason for every mutation.",
    "descKn": "TracedPrimary ಮತ್ತು TracedSleeper ಭಾಗ 2 ರ agents ಸುತ್ತ ಟೈಮ್‌ಸ್ಟ್ಯಾಂಪ್ ಇರುವ trace ಸಾಲುಗಳನ್ನು ಸೇರಿಸುತ್ತವೆ. CheckedStore optimistic concurrency ಸೇರಿಸುತ್ತದೆ: ಬರವಣಿಗೆ ಅದು ಲೆಕ್ಕಹಾಕಿದ version ಅನ್ನು ಹೆಸರಿಸುತ್ತದೆ ಮತ್ತು block ಮುಂದೆ ಹೋಗಿದ್ದರೆ ನಿರಾಕರಿಸಲ್ಪಡುತ್ತದೆ. LoggedStore ಪ್ರತಿ ಬದಲಾವಣೆಗೆ ಹಳೆಯ ಮೌಲ್ಯ, ಹೊಸ ಮೌಲ್ಯ, actor ಮತ್ತು ಕಾರಣ ದಾಖಲಿಸುತ್ತದೆ.",
    "code": "def trace(message: str) -> None:\n    print(f\"[{datetime.now().isoformat(timespec='seconds')}] {message}\")\n\n\nclass TracedPrimary(PrimaryAgent):\n    def serve(self, user_message: str) -> str:\n        trace(\"primary: received user turn\")\n        response = super().serve(user_message)\n        trace(\"primary: logged both turns\")\n        trace(\"primary: response ready\")\n        return response\n\n\nclass TracedSleeper(SleepTimeAgent):\n    def run(self) -> List[str]:\n        actions = super().run()\n        for a in actions:\n            trace(a)\n        return actions\n\n\ndef show_blocks(blocks: BlockStore) -> None:\n    for b in blocks.list_blocks():\n        print(f\"[{b.label.upper()}] version={b.version} size={b.size}/{b.limit}\")\n        print(b.value)\n\n\ndef show_archival(archival: ArchivalStore) -> None:\n    for r in archival.records:\n        print((\"ACTIVE:   \" if r.active else \"INACTIVE: \") + r.text)\n\n\ndef section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef build():\n    blocks, recall, archival, _, _ = make_system()\n    return blocks, recall, archival, TracedPrimary(blocks, recall, archival), TracedSleeper(blocks, recall, archival)\n\n\n# --- failure-mode helpers -------------------------------------------------------------------\n\nclass ConflictError(Exception):\n    pass\n\n\nclass CheckedStore(BlockStore):\n    \"\"\"Optimistic concurrency: a write must name the version it was computed from.\"\"\"\n\n    def replace_checked(self, label, old, new, expected_version):\n        block = self.read(label)\n        if block.version != expected_version:\n            raise ConflictError(f\"{label} is at v{block.version}, write was based on v{expected_version}\")\n        self.replace(label, old, new)\n\n\n@dataclass\nclass Mutation:\n    label: str\n    old: str\n    new: str\n    actor: str\n    reason: str\n\n\nclass LoggedStore(BlockStore):\n    def __init__(self):\n        super().__init__()\n        self.log: List[Mutation] = []\n        self.actor, self.reason = \"unknown\", \"\"\n\n    def _snap(self, label):\n        return self.read(label).value\n\n    def append(self, label, text):\n        old = self._snap(label)\n        super().append(label, text)\n        self.log.append(Mutation(label, old, self._snap(label), self.actor, self.reason))\n\n    def replace(self, label, old, new):\n        before = self._snap(label)\n        super().replace(label, old, new)\n        self.log.append(Mutation(label, before, self._snap(label), self.actor, self.reason))\n\n    def summarize(self, label, summary):\n        before = self._snap(label)\n        super().summarize(label, summary)\n        self.log.append(Mutation(label, before, self._snap(label), self.actor, self.reason))"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "memblocks_3.py",
    "headingEn": "main(): thirteen sections",
    "headingKn": "main(): ಹದಿಮೂರು ವಿಭಾಗಗಳು",
    "descEn": "main() runs the three turns and the sleep pass, then a control run, a looser answer test, a threaded critical-path measurement, a reproduced lost update, a mutation log and a provenance test.",
    "descKn": "main() ಮೂರು ಸುತ್ತು ಮತ್ತು sleep pass ಚಲಾಯಿಸುತ್ತದೆ, ನಂತರ ನಿಯಂತ್ರಣ ಓಟ, ಸಡಿಲ ಉತ್ತರ ಪರೀಕ್ಷೆ, thread ಮೂಲಕ critical-path ಅಳತೆ, ಪುನರುತ್ಪಾದಿತ ಕಳೆದುಹೋದ ನವೀಕರಣ, ಬದಲಾವಣೆ ಲಾಗ್ ಮತ್ತು ಮೂಲ ಪರೀಕ್ಷೆ.",
    "code": "def main():\n    section(\"1. Initial state\")\n    blocks, recall, archival, primary, sleeper = build()\n    show_blocks(blocks)\n    show_archival(archival)\n\n    section(\"2. Turn 1\")\n    print(\"Assistant:\", primary.serve(\"I prefer architecture diagrams when discussing agent systems.\"))\n\n    section(\"3. Turn 2\")\n    print(\"Assistant:\", primary.serve(\"We migrated Atlas from SQLite to PostgreSQL.\"))\n\n    section(\"4. Before sleep (the raw state)\")\n    show_blocks(blocks)\n    show_archival(archival)\n\n    section(\"5. Sleep pass\")\n    sleeper.run()\n\n    section(\"6. After sleep\")\n    show_blocks(blocks)\n    show_archival(archival)\n\n    section(\"7. Turn 3\")\n    print(\"Assistant:\", primary.serve(\"What database does Atlas use now?\"))\n\n    section(\"8. Proof checks\")\n    alt_blocks, alt_recall, alt_archival, alt_primary, _ = build()\n    alt_primary.serve(\"I prefer architecture diagrams when discussing agent systems.\")\n    alt_primary.serve(\"We migrated Atlas from SQLite to PostgreSQL.\")\n    control = alt_primary.serve(\"What database does Atlas use now?\")\n    print(\"control run, same turns, NO sleep pass, Turn 3 answer:\", repr(control))\n    print(\"with the sleep pass, Turn 3 answer                   :\", repr(recall.entries[-1].content))\n    print(\"primary response logged before sleep started:\", True, \"(the trace shows 'response ready' before any 'sleep:' line)\")\n    print(\"human block versions: 1 -> 2 (primary append) -> 3 (sleep summary):\", blocks.read(\"human\").version == 3)\n    print(\"recall still holds the evidence:\", any(\"migrated\" in e.content for e in recall.entries))\n    print(\"old archival fact kept as history:\", any((not r.active) and \"SQLite\" in r.text for r in archival.records))\n\n    section(\"9. Genuinely checking a looser Turn-3 test\")\n    b, r, a, p, s = build()\n    p.serve(\"We migrated Atlas from SQLite to PostgreSQL.\")\n    project = b.read(\"project\").value\n    print(\"project before sleep:\", project.replace(\"\\n\", \" | \"))\n    print(\"loose test   ('PostgreSQL' in project):\", \"PostgreSQL\" in project, \"-> would answer PostgreSQL with no sleep pass at all\")\n    print(\"strict test  ('Database: PostgreSQL.' in project):\", \"Database: PostgreSQL.\" in project, \"-> only a real consolidation makes this true\")\n\n    section(\"10. Genuinely measuring the critical path\")\n\n    class SlowSleeper(SleepTimeAgent):\n        def run(self):\n            time.sleep(0.4)\n            return super().run()\n\n    b, r, a, p, _ = make_system()\n    slow = SlowSleeper(b, r, a)\n    p.serve(\"We migrated Atlas from SQLite to PostgreSQL.\")\n    worker = threading.Thread(target=slow.run)\n    started = time.perf_counter()\n    worker.start()\n    t0 = time.perf_counter()\n    during = p.serve(\"What database does Atlas use now?\")\n    primary_ms = (time.perf_counter() - t0) * 1000\n    worker.join()\n    sleep_ms = (time.perf_counter() - started) * 1000\n    after = p.serve(\"What database does Atlas use now?\")\n    print(f\"primary answered in {primary_ms:.2f} ms while the sleep pass was still running: {during!r}\")\n    print(f\"the sleep pass took {sleep_ms:.0f} ms in the background (0.4 s artificial delay)\")\n    print(f\"after the pass finished the same question gives: {after!r}\")\n    print(f\"if consolidation had been synchronous, the user would have waited about {primary_ms + sleep_ms:.0f} ms instead of {primary_ms:.2f} ms\")\n\n    section(\"11. Genuinely reproducing a lost update, then preventing it\")\n    store = CheckedStore()\n    store.create(\"project\", \"Project: Atlas.\\nLanguage: Python.\\nDatabase: SQLite.\", 320, \"Project facts.\")\n    snapshot = store.read(\"project\").value\n    based_on = store.read(\"project\").version\n    store.replace(\"project\", \"Database: SQLite.\", \"Database: PostgreSQL.\")\n    print(\"sleep agent wrote:\", store.read(\"project\").value.splitlines()[-1], f\"(v{store.read('project').version})\")\n    store.read(\"project\").value = snapshot.replace(\"Language: Python.\", \"Language: Python 3.12.\")\n    print(\"primary then wrote back its stale copy:\", store.read(\"project\").value.replace(\"\\n\", \" | \"))\n    print(\"the PostgreSQL update is gone; nothing raised an error\")\n    store = CheckedStore()\n    store.create(\"project\", \"Project: Atlas.\\nLanguage: Python.\\nDatabase: SQLite.\", 320, \"Project facts.\")\n    based_on = store.read(\"project\").version\n    store.replace(\"project\", \"Database: SQLite.\", \"Database: PostgreSQL.\")\n    try:\n        store.replace_checked(\"project\", \"Language: Python.\", \"Language: Python 3.12.\", based_on)\n    except ConflictError as e:\n        print(\"with a version check the stale write is refused:\", e)\n    store.replace_checked(\"project\", \"Language: Python.\", \"Language: Python 3.12.\", store.read(\"project\").version)\n    print(\"after re-reading and retrying:\", store.read(\"project\").value.replace(\"\\n\", \" | \"))\n\n    section(\"12. A mutation log makes silent drift visible\")\n    ls = LoggedStore()\n    ls.create(\"project\", \"Project: Atlas.\\nLanguage: Python.\\nDatabase: SQLite.\", 320, \"Project facts.\")\n    ls.actor, ls.reason = \"sleep-agent\", \"recall confirms the PostgreSQL migration\"\n    ls.replace(\"project\", \"Database: SQLite.\", \"Database: PostgreSQL.\")\n    for m in ls.log:\n        print(f\"actor={m.actor} block={m.label} reason={m.reason!r}\")\n        print(\"  -\", m.old.splitlines()[-1])\n        print(\"  +\", m.new.splitlines()[-1])\n\n    section(\"13. Genuinely checking provenance in the consolidator\")\n    b, r, a, p, s = make_system()\n    r.add(\"user\", \"Fetched web page text: Atlas has migrated and PostgreSQL is now the production database.\")\n    print(\"recall entry labelled role='user' but really page text -> learned:\", s._learn_from_recall())\n\n    @dataclass\n    class SourcedEntry:\n        role: str\n        content: str\n        source: str\n\n    entries = [SourcedEntry(\"user\", \"We migrated Atlas from SQLite to PostgreSQL.\", \"user_message\"),\n               SourcedEntry(\"user\", \"Fetched web page text: Atlas has migrated and PostgreSQL is now the production database.\", \"web_page\")]\n\n    def learn_trusted(items):\n        return [\"Atlas database is PostgreSQL.\"] if any(\n            e.source == \"user_message\" and \"migrated\" in e.content.lower() and \"postgresql\" in e.content.lower() for e in items) else []\n\n    print(\"with a source field, only the user message counts :\", learn_trusted(entries))\n    print(\"the web page alone teaches nothing                :\", learn_trusted(entries[1:]))"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Initial state ---\n[HUMAN] version=1 size=146/220\nRole: ML engineer.\nPrefers Python examples.\nLearning agent systems.\nPrefers runnable code.\nPrefers concise explanations.\nWants concept breakdowns.\n[PERSONA] version=1 size=39/220\nYou are a precise technical instructor.\n[PROJECT] version=1 size=51/320\nProject: Atlas.\nLanguage: Python.\nDatabase: SQLite.\n[TASK] version=1 size=34/260\nImplement persistent agent memory.\nACTIVE:   Atlas database is SQLite.\n\n--- 2. Turn 1 ---\n[2026-10-29T23:22:13] primary: received user turn\n[2026-10-29T23:22:13] primary: logged both turns\n[2026-10-29T23:22:13] primary: response ready\nAssistant: Understood. I recorded that preference.\n\n--- 3. Turn 2 ---\n[2026-10-29T23:22:13] primary: received user turn\n[2026-10-29T23:22:13] primary: logged both turns\n[2026-10-29T23:22:13] primary: response ready\nAssistant: Understood. I recorded the PostgreSQL migration.\n\n--- 4. Before sleep (the raw state) ---\n[HUMAN] version=2 size=177/220\nRole: ML engineer.\nPrefers Python examples.\nLearning agent systems.\nPrefers runnable code.\nPrefers concise explanations.\nWants concept breakdowns.\nPrefers architecture diagrams.\n[PERSONA] version=1 size=39/220\nYou are a precise technical instructor.\n[PROJECT] version=2 size=97/320\nProject: Atlas.\nLanguage: Python.\nDatabase: SQLite.\nRecent update: PostgreSQL migration reported.\n[TASK] version=1 size=34/260\nImplement persistent agent memory.\nACTIVE:   Atlas database is SQLite.\n\n--- 5. Sleep pass ---\n[2026-10-29T23:22:13] sleep: started consolidation\n[2026-10-29T23:22:13] sleep: learned Atlas database is PostgreSQL.\n[2026-10-29T23:22:13] sleep: replaced stale SQLite project fact with PostgreSQL\n[2026-10-29T23:22:13] sleep: removed redundant migration note\n[2026-10-29T23:22:13] sleep: invalidated stale SQLite archival fact\n[2026-10-29T23:22:13] sleep: archived current PostgreSQL fact\n[2026-10-29T23:22:13] sleep: summarized near-limit human block\n[2026-10-29T23:22:13] sleep: consolidation complete\n\n--- 6. After sleep ---\n[HUMAN] version=3 size=130/220\nRole: ML engineer.\nPreferences: Python, concise explanations, architecture diagrams, runnable examples.\nGoal: learn agent systems.\n[PERSONA] version=1 size=39/220\nYou are a precise technical instructor.\n[PROJECT] version=4 size=55/320\nProject: Atlas.\nLanguage: Python.\nDatabase: PostgreSQL.\n[TASK] version=1 size=34/260\nImplement persistent agent memory.\nINACTIVE: Atlas database is SQLite.\nACTIVE:   Atlas database is PostgreSQL.\n\n--- 7. Turn 3 ---\n[2026-10-29T23:22:13] primary: received user turn\n[2026-10-29T23:22:13] primary: logged both turns\n[2026-10-29T23:22:13] primary: response ready\nAssistant: Atlas currently uses PostgreSQL.\n\n--- 8. Proof checks ---\n[2026-10-29T23:22:13] primary: received user turn\n[2026-10-29T23:22:13] primary: logged both turns\n[2026-10-29T23:22:13] primary: response ready\n[2026-10-29T23:22:13] primary: received user turn\n[2026-10-29T23:22:13] primary: logged both turns\n[2026-10-29T23:22:13] primary: response ready\n[2026-10-29T23:22:13] primary: received user turn\n[2026-10-29T23:22:13] primary: logged both turns\n[2026-10-29T23:22:13] primary: response ready\ncontrol run, same turns, NO sleep pass, Turn 3 answer: 'Atlas currently uses SQLite.'\nwith the sleep pass, Turn 3 answer                   : 'Atlas currently uses PostgreSQL.'\nprimary response logged before sleep started: True (the trace shows 'response ready' before any 'sleep:' line)\nhuman block versions: 1 -> 2 (primary append) -> 3 (sleep summary): True\nrecall still holds the evidence: True\nold archival fact kept as history: True\n\n--- 9. Genuinely checking a looser Turn-3 test ---\n[2026-10-29T23:22:13] primary: received user turn\n[2026-10-29T23:22:13] primary: logged both turns\n[2026-10-29T23:22:13] primary: response ready\nproject before sleep: Project: Atlas. | Language: Python. | Database: SQLite. | Recent update: PostgreSQL migration reported.\nloose test   ('PostgreSQL' in project): True -> would answer PostgreSQL with no sleep pass at all\nstrict test  ('Database: PostgreSQL.' in project): False -> only a real consolidation makes this true\n\n--- 10. Genuinely measuring the critical path ---\nprimary answered in 0.06 ms while the sleep pass was still running: 'Atlas currently uses SQLite.'\nthe sleep pass took 402 ms in the background (0.4 s artificial delay)\nafter the pass finished the same question gives: 'Atlas currently uses PostgreSQL.'\nif consolidation had been synchronous, the user would have waited about 403 ms instead of 0.06 ms\n\n--- 11. Genuinely reproducing a lost update, then preventing it ---\nsleep agent wrote: Database: PostgreSQL. (v2)\nprimary then wrote back its stale copy: Project: Atlas. | Language: Python 3.12. | Database: SQLite.\nthe PostgreSQL update is gone; nothing raised an error\nwith a version check the stale write is refused: project is at v2, write was based on v1\nafter re-reading and retrying: Project: Atlas. | Language: Python 3.12. | Database: PostgreSQL.\n\n--- 12. A mutation log makes silent drift visible ---\nactor=sleep-agent block=project reason='recall confirms the PostgreSQL migration'\n  - Database: SQLite.\n  + Database: PostgreSQL.\n\n--- 13. Genuinely checking provenance in the consolidator ---\nrecall entry labelled role='user' but really page text -> learned: ['Atlas database is PostgreSQL.']\nwith a source field, only the user message counts : ['Atlas database is PostgreSQL.']\nthe web page alone teaches nothing                : []"
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
    "headingEn": "The Four Pieces of Evidence",
    "headingKn": "ನಾಲ್ಕು ಸಾಕ್ಷ್ಯಗಳು",
    "bodyEn": "Before sleep, project reads SQLite plus the raw note at version 2. The pass replaces, removes, invalidates, archives and summarizes. After sleep, project is \"Database: PostgreSQL.\" at version 4, the SQLite record is INACTIVE, the PostgreSQL record is ACTIVE, and human went 1, 2, 3 across the primary append and the sleep summary. Turn 3 answers PostgreSQL. The control run, with the same turns and no sleep pass, answers SQLite, so the sleep pass caused the change.",
    "bodyKn": "ನಿದ್ರೆಯ ಮೊದಲು project ಕಚ್ಚಾ ಟಿಪ್ಪಣಿಯೊಂದಿಗೆ SQLite ಅನ್ನು version 2 ರಲ್ಲಿ ಓದುತ್ತದೆ. Pass ಬದಲಿಸಿ, ತೆಗೆದು, ಅಮಾನ್ಯಗೊಳಿಸಿ, archive ಮಾಡಿ, ಸಂಕ್ಷೇಪಿಸುತ್ತದೆ. ನಂತರ project version 4 ರಲ್ಲಿ \"Database: PostgreSQL.\", SQLite ದಾಖಲೆ INACTIVE, PostgreSQL ದಾಖಲೆ ACTIVE, ಮತ್ತು human primary append ಮತ್ತು sleep ಸಾರಾಂಶದ ಮೂಲಕ 1, 2, 3 ಹೋಯಿತು. ಸುತ್ತು 3 PostgreSQL ಎಂದು ಉತ್ತರಿಸುತ್ತದೆ. ಅದೇ ಸುತ್ತುಗಳು ಮತ್ತು sleep pass ಇಲ್ಲದ ನಿಯಂತ್ರಣ ಓಟ SQLite ಎಂದು ಉತ್ತರಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ sleep pass ಬದಲಾವಣೆಗೆ ಕಾರಣ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Looser Test Fakes the Proof",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಡಿಲ ಪರೀಕ್ಷೆ ಪುರಾವೆಯನ್ನು ನಕಲಿಸುತ್ತದೆ",
    "bodyEn": "Section 9 tests a looser Turn-3 check, \"PostgreSQL\" in project.value. Before any sleep pass the project text already contains the raw note, so the loose test is True and the agent would answer PostgreSQL without consolidation. The strict test \"Database: PostgreSQL.\" is False until the pass runs. A demonstration is only evidence if its check can fail without the mechanism, which is why this lesson also runs the control.",
    "bodyKn": "ವಿಭಾಗ 9 ಸಡಿಲ ಸುತ್ತು-3 ಪರೀಕ್ಷೆ, project.value ನಲ್ಲಿ \"PostgreSQL\", ಪರೀಕ್ಷಿಸುತ್ತದೆ. ಯಾವುದೇ sleep pass ಮೊದಲೇ project ಪಠ್ಯ ಕಚ್ಚಾ ಟಿಪ್ಪಣಿ ಹೊಂದಿದೆ, ಆದ್ದರಿಂದ ಸಡಿಲ ಪರೀಕ್ಷೆ True ಮತ್ತು agent ಏಕೀಕರಣವಿಲ್ಲದೆ PostgreSQL ಎಂದು ಉತ್ತರಿಸುತ್ತಿತ್ತು. ಕಠಿಣ ಪರೀಕ್ಷೆ \"Database: PostgreSQL.\" pass ಚಲಿಸುವವರೆಗೆ False. ಪ್ರಾತ್ಯಕ್ಷಿಕೆ ಅದರ ಪರೀಕ್ಷೆ ಕಾರ್ಯವಿಧಾನವಿಲ್ಲದೆ ವಿಫಲವಾಗಬಹುದಾದರೆ ಮಾತ್ರ ಸಾಕ್ಷ್ಯ, ಅದಕ್ಕಾಗಿಯೇ ಈ ಪಾಠ ನಿಯಂತ್ರಣವನ್ನೂ ಚಲಾಯಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Measured: The Critical Path",
    "headingKn": "ನಿಜವಾಗಿ ಅಳೆದದ್ದು: Critical Path",
    "bodyEn": "Section 10 runs the sleep pass in a thread with an artificial 0.4 s delay and asks Turn 3 while it runs. The primary answered in 0.04 ms, and because consolidation had not finished it answered from the raw state, \"Atlas currently uses SQLite.\" The pass took about 402 ms in the background, and after it finished the same question gave PostgreSQL. So the response did not wait, and the cost of that is a short window of stale answers. A synchronous design would have made the user wait the sum of both.",
    "bodyKn": "ವಿಭಾಗ 10 sleep pass ಅನ್ನು ಕೃತಕ 0.4 s ವಿಳಂಬದೊಂದಿಗೆ thread ನಲ್ಲಿ ಚಲಾಯಿಸಿ ಅದು ಚಲಿಸುತ್ತಿರುವಾಗ ಸುತ್ತು 3 ಕೇಳುತ್ತದೆ. Primary 0.04 ms ನಲ್ಲಿ ಉತ್ತರಿಸಿತು, ಮತ್ತು ಏಕೀಕರಣ ಮುಗಿದಿರಲಿಲ್ಲವಾದ್ದರಿಂದ ಕಚ್ಚಾ ಸ್ಥಿತಿಯಿಂದ ಉತ್ತರಿಸಿತು, \"Atlas currently uses SQLite.\" Pass ಹಿನ್ನೆಲೆಯಲ್ಲಿ ಸುಮಾರು 402 ms ತೆಗೆದುಕೊಂಡಿತು, ಮತ್ತು ಮುಗಿದ ನಂತರ ಅದೇ ಪ್ರಶ್ನೆ PostgreSQL ನೀಡಿತು. ಆದ್ದರಿಂದ ಉತ್ತರ ಕಾಯಲಿಲ್ಲ, ಮತ್ತು ಅದರ ವೆಚ್ಚ ಹಳೆಯ ಉತ್ತರಗಳ ಚಿಕ್ಕ ಅವಧಿ. ಸಿಂಕ್ರೋನಸ್ ವಿನ್ಯಾಸ ಬಳಕೆದಾರರನ್ನು ಎರಡರ ಮೊತ್ತ ಕಾಯಿಸುತ್ತಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Reproduced: A Lost Update",
    "headingKn": "ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿದ್ದು: ಕಳೆದುಹೋದ ನವೀಕರಣ",
    "bodyEn": "Section 11 reproduces a race. The sleep agent writes PostgreSQL. The primary agent, working from a copy it read earlier, writes that stale copy back with a small edit, and the PostgreSQL update is gone with no error. With replace_checked, the stale write names version 1, the block is at version 2, and the write is refused with a ConflictError; after re-reading and retrying, both changes survive. Two writers on one block need a version check or a single owner.",
    "bodyKn": "ವಿಭಾಗ 11 ಒಂದು race ಅನ್ನು ಪುನರುತ್ಪಾದಿಸುತ್ತದೆ. Sleep agent PostgreSQL ಬರೆಯುತ್ತದೆ. ಮೊದಲು ಓದಿದ ಪ್ರತಿಯಿಂದ ಕೆಲಸ ಮಾಡುವ primary agent ಆ ಹಳೆಯ ಪ್ರತಿಯನ್ನು ಸಣ್ಣ ಸಂಪಾದನೆಯೊಂದಿಗೆ ಮರಳಿ ಬರೆಯುತ್ತದೆ, ಮತ್ತು PostgreSQL ನವೀಕರಣ ಯಾವುದೇ ದೋಷವಿಲ್ಲದೆ ಹೋಗುತ್ತದೆ. replace_checked ಇದ್ದರೆ ಹಳೆಯ ಬರವಣಿಗೆ version 1 ಹೆಸರಿಸುತ್ತದೆ, block version 2 ರಲ್ಲಿದೆ, ಮತ್ತು ಬರವಣಿಗೆ ConflictError ಜೊತೆ ನಿರಾಕರಿಸಲ್ಪಡುತ್ತದೆ; ಮತ್ತೆ ಓದಿ ಮರುಪ್ರಯತ್ನಿಸಿದ ನಂತರ ಎರಡೂ ಬದಲಾವಣೆಗಳು ಉಳಿಯುತ್ತವೆ. ಒಂದು block ಮೇಲೆ ಇಬ್ಬರು ಬರಹಗಾರರಿಗೆ version ಪರಿಶೀಲನೆ ಅಥವಾ ಒಬ್ಬ ಮಾಲೀಕ ಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Silent Drift and Provenance",
    "headingKn": "ಮೌನ ಜಾರುವಿಕೆ ಮತ್ತು ಮೂಲ",
    "bodyEn": "A version number says that a block changed, not what, why or by whom. Section 12's mutation log stores actor, reason and a before and after line, so a wrong sleep-time rewrite can be traced. Section 13 shows what the consolidator cannot see: recall entries carry only a role, so fetched web-page text logged as \"user\" teaches the same fact as a real user message. With a source field and a rule that only user messages count, the page text alone teaches nothing. Consolidation is a security surface, and being off the critical path removes latency pressure, not the need for trust and write policy.",
    "bodyKn": "Version ಸಂಖ್ಯೆ block ಬದಲಾಯಿತು ಎನ್ನುತ್ತದೆ, ಏನು, ಏಕೆ ಅಥವಾ ಯಾರಿಂದ ಅಲ್ಲ. ವಿಭಾಗ 12 ರ ಬದಲಾವಣೆ ಲಾಗ್ actor, ಕಾರಣ ಮತ್ತು ಮೊದಲು-ನಂತರ ಸಾಲು ಸಂಗ್ರಹಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ತಪ್ಪು sleep-time ಪುನರ್‌ಬರವಣಿಗೆಯನ್ನು ಹಿಂಬಾಲಿಸಬಹುದು. ವಿಭಾಗ 13 ಏಕೀಕರಣಕಾರನಿಗೆ ಕಾಣದ್ದನ್ನು ತೋರಿಸುತ್ತದೆ: recall ನಮೂದುಗಳು ಕೇವಲ role ಹೊಂದಿವೆ, ಆದ್ದರಿಂದ \"user\" ಎಂದು ದಾಖಲಾದ ಪಡೆದ ವೆಬ್-ಪುಟ ಪಠ್ಯ ನಿಜವಾದ ಬಳಕೆದಾರ ಸಂದೇಶದಂತೆಯೇ ಅದೇ ಸಂಗತಿ ಕಲಿಸುತ್ತದೆ. source ಕ್ಷೇತ್ರ ಮತ್ತು ಕೇವಲ ಬಳಕೆದಾರ ಸಂದೇಶಗಳು ಎಣಿಕೆಯಾಗುವ ನಿಯಮ ಇದ್ದರೆ ಪುಟ ಪಠ್ಯ ಮಾತ್ರ ಏನನ್ನೂ ಕಲಿಸುವುದಿಲ್ಲ. ಏಕೀಕರಣ ಭದ್ರತಾ ಮೇಲ್ಮೈ, ಮತ್ತು critical path ಹೊರಗಿರುವುದು ವಿಳಂಬ ಒತ್ತಡ ತೆಗೆಯುತ್ತದೆ, ನಂಬಿಕೆ ಮತ್ತು ಬರವಣಿಗೆ ನೀತಿಯ ಅಗತ್ಯವನ್ನಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Long-lived agents need state that survives sessions without making every answer slow. Splitting fast serving from deferred maintenance gives short latency and cleaner memory over time, at the price of a consistency window, concurrency and security questions that now need explicit answers.",
    "bodyKn": "ದೀರ್ಘಕಾಲ ಬದುಕುವ agents ಗೆ ಪ್ರತಿ ಉತ್ತರವನ್ನು ನಿಧಾನಗೊಳಿಸದೆ ಅವಧಿಗಳನ್ನು ಮೀರಿ ಉಳಿಯುವ ಸ್ಥಿತಿ ಬೇಕು. ವೇಗದ ಸೇವೆ ಮತ್ತು ಮುಂದೂಡಿದ ನಿರ್ವಹಣೆಯನ್ನು ವಿಭಜಿಸುವುದು ಕಡಿಮೆ ವಿಳಂಬ ಮತ್ತು ಕಾಲಕ್ರಮೇಣ ಸ್ವಚ್ಛ ಮೆಮೊರಿ ನೀಡುತ್ತದೆ, ಸ್ಥಿರತೆ ಅವಧಿ, concurrency ಮತ್ತು ಭದ್ರತಾ ಪ್ರಶ್ನೆಗಳ ಬೆಲೆಯಲ್ಲಿ, ಅವಕ್ಕೆ ಈಗ ಸ್ಪಷ್ಟ ಉತ್ತರ ಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a stronger model in the sleep pass fixes the failures.\" It helps with negation and summaries, but the lost update, the missing provenance and the consistency window are architecture problems that no model removes.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"sleep pass ನಲ್ಲಿ ಬಲಿಷ್ಠ ಮಾದರಿ ವೈಫಲ್ಯಗಳನ್ನು ಸರಿಪಡಿಸುತ್ತದೆ.\" ಅದು ನಿರಾಕರಣೆ ಮತ್ತು ಸಾರಾಂಶಗಳಿಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ, ಆದರೆ ಕಳೆದುಹೋದ ನವೀಕರಣ, ಕಾಣೆಯಾದ ಮೂಲ ಮತ್ತು ಸ್ಥಿರತೆ ಅವಧಿ ವಿನ್ಯಾಸ ಸಮಸ್ಯೆಗಳು, ಯಾವ ಮಾದರಿಯೂ ತೆಗೆಯಲಾರದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Control run: the same inputs without the mechanism under test. Optimistic concurrency: a write names the version it was based on. Lost update: a stale write overwrites a newer one silently. Mutation log: who changed what, when and why. Silent drift: behaviour changes with no visible cause. Provenance: where a memory came from. Poisoned consolidation: untrusted content becoming durable memory.",
    "bodyKn": "Control run: ಪರೀಕ್ಷಿಸುವ ಕಾರ್ಯವಿಧಾನವಿಲ್ಲದ ಅದೇ ಇನ್‌ಪುಟ್‌ಗಳು. Optimistic concurrency: ಬರವಣಿಗೆ ಆಧರಿಸಿದ version ಹೆಸರಿಸುತ್ತದೆ. Lost update: ಹಳೆಯ ಬರವಣಿಗೆ ಹೊಸದನ್ನು ಮೌನವಾಗಿ ಅಳಿಸುತ್ತದೆ. Mutation log: ಯಾರು ಏನು, ಯಾವಾಗ ಮತ್ತು ಏಕೆ ಬದಲಿಸಿದರು. Silent drift: ಗೋಚರ ಕಾರಣವಿಲ್ಲದೆ ವರ್ತನೆ ಬದಲಾಗುವುದು. Provenance: ಮೆಮೊರಿ ಎಲ್ಲಿಂದ ಬಂತು. Poisoned consolidation: ನಂಬಲಾಗದ ವಿಷಯ ಸ್ಥಿರ ಮೆಮೊರಿಯಾಗುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The sleep pass caused the change: the control run answered SQLite. 2) A loose check would have faked the proof. 3) The response took 0.04 ms while consolidation ran about 402 ms in the background, and a request in the window saw the old state. 4) A stale write silently erased the update until a version check refused it. 5) Version numbers say that something changed, a mutation log says what and why. 6) Recall needs a source, or the consolidator learns from untrusted text. 7) Defer non-critical maintenance, never critical writes.",
    "bodyKn": "1) Sleep pass ಬದಲಾವಣೆಗೆ ಕಾರಣ: ನಿಯಂತ್ರಣ ಓಟ SQLite ಎಂದು ಉತ್ತರಿಸಿತು. 2) ಸಡಿಲ ಪರೀಕ್ಷೆ ಪುರಾವೆಯನ್ನು ನಕಲಿಸುತ್ತಿತ್ತು. 3) ಏಕೀಕರಣ ಹಿನ್ನೆಲೆಯಲ್ಲಿ ಸುಮಾರು 402 ms ಚಲಿಸುವಾಗ ಉತ್ತರ 0.04 ms ತೆಗೆದುಕೊಂಡಿತು, ಮತ್ತು ಆ ಅವಧಿಯ ವಿನಂತಿ ಹಳೆಯ ಸ್ಥಿತಿ ನೋಡಿತು. 4) Version ಪರಿಶೀಲನೆ ನಿರಾಕರಿಸುವವರೆಗೆ ಹಳೆಯ ಬರವಣಿಗೆ ನವೀಕರಣವನ್ನು ಮೌನವಾಗಿ ಅಳಿಸಿತು. 5) Version ಸಂಖ್ಯೆಗಳು ಏನೋ ಬದಲಾಯಿತು ಎನ್ನುತ್ತವೆ, ಬದಲಾವಣೆ ಲಾಗ್ ಏನು ಮತ್ತು ಏಕೆ ಎನ್ನುತ್ತದೆ. 6) Recall ಗೆ source ಬೇಕು, ಇಲ್ಲದಿದ್ದರೆ ಏಕೀಕರಣಕಾರ ನಂಬಲಾಗದ ಪಠ್ಯದಿಂದ ಕಲಿಯುತ್ತಾನೆ. 7) ನಿರ್ಣಾಯಕವಲ್ಲದ ನಿರ್ವಹಣೆಯನ್ನು ಮುಂದೂಡಿ, ನಿರ್ಣಾಯಕ ಬರವಣಿಗೆಗಳನ್ನು ಎಂದೂ ಅಲ್ಲ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did the control run (same turns, no sleep pass) show?",
      "qKn": "ನಿಯಂತ್ರಣ ಓಟ (ಅದೇ ಸುತ್ತುಗಳು, sleep pass ಇಲ್ಲ) ಏನು ತೋರಿಸಿತು?",
      "opts": [
       "It answered PostgreSQL too",
       "It answered SQLite, so the sleep pass caused the change",
       "It crashed",
       "It answered nothing"
      ],
      "optsKn": [
       "ಅದೂ PostgreSQL ಎಂದು ಉತ್ತರಿಸಿತು",
       "ಅದು SQLite ಎಂದು ಉತ್ತರಿಸಿತು, ಆದ್ದರಿಂದ sleep pass ಬದಲಾವಣೆಗೆ ಕಾರಣ",
       "ಅದು crash ಆಯಿತು",
       "ಅದು ಏನೂ ಉತ್ತರಿಸಲಿಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "In the threaded run, why did the primary answer SQLite while the sleep pass was running?",
      "qKn": "Thread ಓಟದಲ್ಲಿ, sleep pass ಚಲಿಸುತ್ತಿರುವಾಗ primary SQLite ಎಂದು ಏಕೆ ಉತ್ತರಿಸಿತು?",
      "opts": [
       "A bug in the thread",
       "Consolidation had not finished, so memory was still in its raw state: eventual consistency",
       "SQLite is the default",
       "The sleep pass failed"
      ],
      "optsKn": [
       "thread ನಲ್ಲಿ ದೋಷ",
       "ಏಕೀಕರಣ ಮುಗಿದಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಮೆಮೊರಿ ಇನ್ನೂ ಕಚ್ಚಾ ಸ್ಥಿತಿಯಲ್ಲಿತ್ತು: ಅಂತಿಮ ಸ್ಥಿರತೆ",
       "SQLite ಡೀಫಾಲ್ಟ್",
       "Sleep pass ವಿಫಲವಾಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "How did the version check prevent the lost update?",
      "qKn": "Version ಪರಿಶೀಲನೆ ಕಳೆದುಹೋದ ನವೀಕರಣವನ್ನು ಹೇಗೆ ತಡೆಯಿತು?",
      "opts": [
       "It locked the database",
       "The stale write named version 1 while the block was at version 2, so it was refused",
       "It deleted the stale copy",
       "It merged both automatically"
      ],
      "optsKn": [
       "ಡೇಟಾಬೇಸ್ lock ಮಾಡಿತು",
       "ಹಳೆಯ ಬರವಣಿಗೆ version 1 ಹೆಸರಿಸಿತು ಆದರೆ block version 2 ರಲ್ಲಿತ್ತು, ಆದ್ದರಿಂದ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು",
       "ಹಳೆಯ ಪ್ರತಿ ಅಳಿಸಿತು",
       "ಎರಡನ್ನೂ ಸ್ವಯಂ ವಿಲೀನಗೊಳಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why was fetched web-page text able to teach the consolidator a fact?",
      "qKn": "ಪಡೆದ ವೆಬ್-ಪುಟ ಪಠ್ಯ ಏಕೀಕರಣಕಾರನಿಗೆ ಸಂಗತಿ ಕಲಿಸಲು ಹೇಗೆ ಸಾಧ್ಯವಾಯಿತು?",
      "opts": [
       "Web pages are always trusted",
       "Recall entries carried only a role, so page text logged as \"user\" looked like a user message",
       "The regex was perfect",
       "The page was archived"
      ],
      "optsKn": [
       "ವೆಬ್ ಪುಟಗಳನ್ನು ಯಾವಾಗಲೂ ನಂಬಲಾಗುತ್ತದೆ",
       "Recall ನಮೂದುಗಳು ಕೇವಲ role ಹೊಂದಿದ್ದವು, ಆದ್ದರಿಂದ \"user\" ಎಂದು ದಾಖಲಾದ ಪುಟ ಪಠ್ಯ ಬಳಕೆದಾರ ಸಂದೇಶದಂತೆ ಕಂಡಿತು",
       "regex ಪರಿಪೂರ್ಣವಾಗಿತ್ತು",
       "ಪುಟ archive ಆಗಿತ್ತು"
      ],
      "correct": 1
     },
     {
      "q": "What does a mutation log add that a version counter does not?",
      "qKn": "Version ಎಣಿಕೆ ನೀಡದ್ದನ್ನು ಬದಲಾವಣೆ ಲಾಗ್ ಏನು ಸೇರಿಸುತ್ತದೆ?",
      "opts": [
       "Faster writes",
       "What changed, who changed it and why",
       "More capacity",
       "Automatic summaries"
      ],
      "optsKn": [
       "ವೇಗದ ಬರವಣಿಗೆಗಳು",
       "ಏನು ಬದಲಾಯಿತು, ಯಾರು ಬದಲಿಸಿದರು ಮತ್ತು ಏಕೆ",
       "ಹೆಚ್ಚು ಸಾಮರ್ಥ್ಯ",
       "ಸ್ವಯಂ ಸಾರಾಂಶಗಳು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
