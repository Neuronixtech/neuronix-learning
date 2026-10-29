module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321523",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Memory Blocks and Sleep-Time Compute (Part 2 of 3) — Recall, Archival and the Two Agents",
 "titleKn": "Memory Blocks ಮತ್ತು Sleep-Time Compute (ಭಾಗ 2 / 3) — Recall, Archival ಮತ್ತು ಎರಡು Agents",
 "desc": "Add recall and archival stores, a fast primary agent and a sleep-time agent that consolidates raw writes, and find that the scripted summary loses a fact and keyword rules misread negation and questions.",
 "descKn": "Recall ಮತ್ತು archival ಸಂಗ್ರಹಗಳು, ವೇಗದ primary agent ಮತ್ತು ಕಚ್ಚಾ ಬರವಣಿಗೆಗಳನ್ನು ಏಕೀಕರಿಸುವ sleep-time agent ಸೇರಿಸಿ, ಮತ್ತು ಸ್ಕ್ರಿಪ್ಟ್ ಸಾರಾಂಶ ಒಂದು ಸಂಗತಿ ಕಳೆಯುತ್ತದೆ ಹಾಗೂ ಕೀವರ್ಡ್ ನಿಯಮಗಳು ನಿರಾಕರಣೆ ಮತ್ತು ಪ್ರಶ್ನೆ ತಪ್ಪಾಗಿ ಓದುತ್ತವೆ ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Explain why consolidation belongs off the critical path.",
  "Implement RecallStore and an ArchivalStore that invalidates instead of deleting.",
  "Build a primary agent that makes raw writes and a sleep agent that consolidates them.",
  "Show that the sleep pass is idempotent.",
  "Identify what scripted summaries and keyword extractors get wrong."
 ],
 "objectivesKn": [
  "ಏಕೀಕರಣ critical path ನಿಂದ ಹೊರಗೆ ಏಕೆ ಇರಬೇಕು ಎಂದು ವಿವರಿಸಿ.",
  "RecallStore ಮತ್ತು ಅಳಿಸುವ ಬದಲು ಅಮಾನ್ಯಗೊಳಿಸುವ ArchivalStore ಅಳವಡಿಸಿ.",
  "ಕಚ್ಚಾ ಬರವಣಿಗೆ ಮಾಡುವ primary agent ಮತ್ತು ಅವನ್ನು ಏಕೀಕರಿಸುವ sleep agent ನಿರ್ಮಿಸಿ.",
  "Sleep pass idempotent ಎಂದು ತೋರಿಸಿ.",
  "ಸ್ಕ್ರಿಪ್ಟ್ ಸಾರಾಂಶ ಮತ್ತು ಕೀವರ್ಡ್ ಹೊರತೆಗೆಯುವಿಕೆ ಏನು ತಪ್ಪಾಗಿ ಮಾಡುತ್ತವೆ ಎಂದು ಗುರುತಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Memory Blocks and Sleep-Time Compute (Part 2 of 3)",
    "textKn": "Memory Blocks ಮತ್ತು Sleep-Time Compute (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: recall and archival stores, the primary agent and the sleep-time agent. Every output below was genuinely produced by the lab file on Python 3.14.5. The pasted source was cut off at section 116 of this part, so the remainder is rebuilt from context. The agents are scripted keyword rules, not an LLM, and that is what several of the findings below are about. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: recall ಮತ್ತು archival ಸಂಗ್ರಹಗಳು, ಪ್ರಾಥಮಿಕ agent ಮತ್ತು sleep-time agent. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಅಂಟಿಸಿದ ಮೂಲ ಈ ಭಾಗದ ವಿಭಾಗ 116 ರಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಉಳಿದದ್ದನ್ನು ಸಂದರ್ಭದಿಂದ ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. Agents ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಕೀವರ್ಡ್ ನಿಯಮಗಳು, LLM ಅಲ್ಲ, ಮತ್ತು ಕೆಳಗಿನ ಹಲವು ಕಂಡುಹಿಡಿತಗಳು ಅದರ ಬಗ್ಗೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Serving Versus Maintaining",
    "textKn": "ಸೇವೆ ಮತ್ತು ನಿರ್ವಹಣೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why Not Consolidate Before Answering",
    "headingKn": "ಉತ್ತರಿಸುವ ಮೊದಲು ಏಕೀಕರಿಸಬಾರದು ಏಕೆ",
    "bodyEn": "If the primary agent retrieved history, deduplicated, resolved contradictions and summarized before each reply, the user would wait for T_retrieval + T_consolidation + T_summarization + T_response. Those maintenance steps are not needed for this answer. The architecture moves them off the critical path: the primary agent logs, makes a lightweight raw write and answers, and a separate sleep-time agent improves memory afterwards. The two agents optimise different things, latency for one and memory quality for the other, so the second can use a slower or stronger model.",
    "bodyKn": "Primary agent ಪ್ರತಿ ಉತ್ತರದ ಮೊದಲು ಇತಿಹಾಸ ಪಡೆದು, ನಕಲು ತೆಗೆದು, ವಿರೋಧ ಪರಿಹರಿಸಿ, ಸಾರಾಂಶ ಮಾಡಿದರೆ ಬಳಕೆದಾರ T_retrieval + T_consolidation + T_summarization + T_response ಕಾಯಬೇಕಾಗುತ್ತಿತ್ತು. ಈ ನಿರ್ವಹಣಾ ಹೆಜ್ಜೆಗಳು ಈ ಉತ್ತರಕ್ಕೆ ಬೇಕಿಲ್ಲ. ವಿನ್ಯಾಸ ಅವನ್ನು critical path ನಿಂದ ಹೊರಗೆ ಸರಿಸುತ್ತದೆ: primary agent ದಾಖಲಿಸಿ, ಹಗುರ ಕಚ್ಚಾ ಬರವಣಿಗೆ ಮಾಡಿ, ಉತ್ತರಿಸುತ್ತದೆ, ಮತ್ತು ಪ್ರತ್ಯೇಕ sleep-time agent ನಂತರ ಮೆಮೊರಿ ಸುಧಾರಿಸುತ್ತದೆ. ಎರಡು agents ಬೇರೆ ಬೇರೆ ಅತ್ಯುತ್ತಮೀಕರಣ ಮಾಡುತ್ತವೆ, ಒಂದು ವಿಳಂಬ, ಇನ್ನೊಂದು ಮೆಮೊರಿ ಗುಣಮಟ್ಟ, ಆದ್ದರಿಂದ ಎರಡನೆಯದು ನಿಧಾನ ಅಥವಾ ಬಲಿಷ್ಠ ಮಾದರಿ ಬಳಸಬಹುದು."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Two Agents, One Shared Memory",
    "headingKn": "ಎರಡು Agents, ಒಂದು ಹಂಚಿಕೆಯ ಮೆಮೊರಿ",
    "svgCode": "<svg viewBox=\"0 0 300 215\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"215\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Serve now, maintain later</text>\n  <rect x=\"20\" y=\"24\" width=\"120\" height=\"22\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"80\" y=\"38\" fill=\"#93c5fd\" text-anchor=\"middle\">USER turn</text>\n  <path d=\"M80,46 V56\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"58\" width=\"120\" height=\"40\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"80\" y=\"72\" fill=\"#6ee7b7\" text-anchor=\"middle\">PRIMARY AGENT</text><text x=\"80\" y=\"84\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">log turn, raw write, answer</text>\n  <path d=\"M80,98 V108\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"110\" width=\"120\" height=\"22\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"80\" y=\"124\" fill=\"#93c5fd\" text-anchor=\"middle\">RESPONSE to user</text>\n  <rect x=\"160\" y=\"58\" width=\"120\" height=\"74\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"220\" y=\"72\" fill=\"#c4b5fd\" text-anchor=\"middle\">SLEEP-TIME AGENT</text>\n  <text x=\"220\" y=\"86\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">read recall, learn facts</text><text x=\"220\" y=\"96\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">replace stale core facts</text><text x=\"220\" y=\"106\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">invalidate archival records</text><text x=\"220\" y=\"116\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">summarize near-limit blocks</text>\n  <path d=\"M140,78 H160\" stroke=\"#475569\" stroke-dasharray=\"3 2\"/><text x=\"150\" y=\"72\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">later</text>\n  <rect x=\"20\" y=\"150\" width=\"260\" height=\"42\" rx=\"4\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"150\" y=\"166\" fill=\"#e2e8f0\" text-anchor=\"middle\">SHARED MEMORY: blocks, recall, archival</text><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">both agents read and write the same stores; the response never waits for the sleep pass</text>\n</svg>",
    "captionEn": "The response path ends at the user. The sleep pass reads the same stores later and cleans them.",
    "captionKn": "ಉತ್ತರದ ದಾರಿ ಬಳಕೆದಾರರಲ್ಲಿ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ. Sleep pass ಅದೇ ಸಂಗ್ರಹಗಳನ್ನು ನಂತರ ಓದಿ ಸ್ವಚ್ಛಗೊಳಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Recall and Archival",
    "headingKn": "Recall ಮತ್ತು Archival",
    "bodyEn": "Recall is an ordered log of what happened, written automatically for every turn: id, role, content, timestamp. Core is selective and state-like. Archival holds long-term facts, and each record carries an active flag. When a fact becomes stale it is marked inactive, not deleted: normal search skips it, but history, debugging and audits can still see it. Recall keeps the evidence a consolidated fact was derived from.",
    "bodyKn": "Recall ಏನಾಯಿತು ಎಂಬುದರ ಕ್ರಮಬದ್ಧ ಲಾಗ್, ಪ್ರತಿ ಸುತ್ತಿಗೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಬರೆಯಲ್ಪಡುತ್ತದೆ: id, role, content, timestamp. Core ಆಯ್ದ ಮತ್ತು ಸ್ಥಿತಿ-ರೀತಿಯದು. Archival ದೀರ್ಘಕಾಲದ ಸಂಗತಿಗಳನ್ನು ಹೊಂದಿದೆ, ಮತ್ತು ಪ್ರತಿ ದಾಖಲೆಗೆ active ಧ್ವಜ ಇದೆ. ಸಂಗತಿ ಹಳೆಯದಾದಾಗ ಅದನ್ನು ಅಳಿಸದೆ inactive ಎಂದು ಗುರುತಿಸಲಾಗುತ್ತದೆ: ಸಾಮಾನ್ಯ ಹುಡುಕಾಟ ಅದನ್ನು ಬಿಡುತ್ತದೆ, ಆದರೆ ಇತಿಹಾಸ, ಡೀಬಗ್ ಮತ್ತು ಲೆಕ್ಕಪರಿಶೋಧನೆ ಇನ್ನೂ ನೋಡಬಹುದು. Recall ಏಕೀಕೃತ ಸಂಗತಿ ಯಾವ ಸಾಕ್ಷ್ಯದಿಂದ ಬಂತು ಎಂಬುದನ್ನು ಉಳಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Stores and Agents",
    "textKn": "ಸಂಗ್ರಹಗಳು ಮತ್ತು Agents ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "memblocks_2.py",
    "headingEn": "RecallStore, ArchivalStore, PrimaryAgent and SleepTimeAgent",
    "headingKn": "RecallStore, ArchivalStore, PrimaryAgent ಮತ್ತು SleepTimeAgent",
    "descEn": "Both agents are constructed with the same three stores, so a write by one is visible to the other. PrimaryAgent.serve() logs the user turn, responds, logs the reply. Its raw write for a migration is an append to the project block, which deliberately leaves the old fact in place. SleepTimeAgent.run() learns facts from recent recall, replaces the stale project line, removes the raw note, invalidates the stale archival record, archives the current fact once, and summarizes a near-limit human block.",
    "descKn": "ಎರಡೂ agents ಅದೇ ಮೂರು ಸಂಗ್ರಹಗಳೊಂದಿಗೆ ರಚನೆಯಾಗುತ್ತವೆ, ಆದ್ದರಿಂದ ಒಂದರ ಬರವಣಿಗೆ ಇನ್ನೊಂದಕ್ಕೆ ಕಾಣುತ್ತದೆ. PrimaryAgent.serve() ಬಳಕೆದಾರ ಸುತ್ತು ದಾಖಲಿಸುತ್ತದೆ, ಉತ್ತರಿಸುತ್ತದೆ, ಉತ್ತರ ದಾಖಲಿಸುತ್ತದೆ. ವಲಸೆಗೆ ಅದರ ಕಚ್ಚಾ ಬರವಣಿಗೆ project block ಗೆ append, ಇದು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಹಳೆಯ ಸಂಗತಿಯನ್ನು ಹಾಗೇ ಬಿಡುತ್ತದೆ. SleepTimeAgent.run() ಇತ್ತೀಚಿನ recall ನಿಂದ ಸಂಗತಿಗಳನ್ನು ಕಲಿತು, ಹಳೆಯ project ಸಾಲು ಬದಲಿಸಿ, ಕಚ್ಚಾ ಟಿಪ್ಪಣಿ ತೆಗೆದು, ಹಳೆಯ archival ದಾಖಲೆ ಅಮಾನ್ಯಗೊಳಿಸಿ, ಪ್ರಸ್ತುತ ಸಂಗತಿಯನ್ನು ಒಮ್ಮೆ archive ಮಾಡಿ, ಮತ್ತು ಮಿತಿ ಸಮೀಪದ human block ಸಂಕ್ಷೇಪಿಸುತ್ತದೆ.",
    "code": "def stamp() -> str:\n    return datetime.now().isoformat(timespec=\"seconds\")\n\n\n@dataclass\nclass RecallEntry:\n    id: str\n    role: str\n    content: str\n    timestamp: str\n\n\nclass RecallStore:\n    def __init__(self):\n        self.entries: List[RecallEntry] = []\n\n    def add(self, role: str, content: str) -> RecallEntry:\n        entry = RecallEntry(id=str(uuid.uuid4()), role=role, content=content, timestamp=stamp())\n        self.entries.append(entry)\n        return entry\n\n    def recent(self, count: int = 6) -> List[RecallEntry]:\n        return self.entries[-count:]\n\n    def search(self, query: str) -> List[RecallEntry]:\n        query = query.lower()\n        return [e for e in self.entries if query in e.content.lower()]\n\n\n@dataclass\nclass ArchivalRecord:\n    id: str\n    text: str\n    active: bool\n    created_at: str\n\n\nclass ArchivalStore:\n    def __init__(self):\n        self.records: List[ArchivalRecord] = []\n\n    def add(self, text: str) -> ArchivalRecord:\n        record = ArchivalRecord(id=str(uuid.uuid4()), text=text, active=True, created_at=stamp())\n        self.records.append(record)\n        return record\n\n    def search(self, query: str) -> List[ArchivalRecord]:\n        query = query.lower()\n        return [r for r in self.records if r.active and query in r.text.lower()]\n\n    def invalidate(self, record_id: str) -> None:\n        for record in self.records:\n            if record.id == record_id:\n                record.active = False\n                return\n        raise KeyError(f\"Unknown archival record: {record_id}\")\n\n    def active_records(self) -> List[ArchivalRecord]:\n        return [r for r in self.records if r.active]\n\n    def contains_active(self, text: str) -> bool:\n        target = text.lower()\n        return any(r.active and r.text.lower() == target for r in self.records)\n\n\nclass PrimaryAgent:\n    \"\"\"The fast path: log the turn, make a lightweight raw write, answer. No consolidation here.\"\"\"\n\n    def __init__(self, blocks: BlockStore, recall: RecallStore, archival: ArchivalStore):\n        self.blocks, self.recall, self.archival = blocks, recall, archival\n\n    def serve(self, user_message: str) -> str:\n        self.recall.add(\"user\", user_message)\n        response = self._respond(user_message)\n        self.recall.add(\"assistant\", response)\n        return response\n\n    def _respond(self, user_message: str) -> str:\n        message = user_message.lower()\n        if \"what database\" in message or \"which database\" in message:\n            project = self.blocks.read(\"project\")\n            if \"Database: PostgreSQL.\" in project.value:\n                return \"Atlas currently uses PostgreSQL.\"\n            if \"Database: SQLite.\" in project.value:\n                return \"Atlas currently uses SQLite.\"\n            return \"I do not have a current database record for Atlas.\"\n        if \"postgresql\" in message:\n            self.blocks.append(\"project\", \"Recent update: PostgreSQL migration reported.\")\n            return \"Understood. I recorded the PostgreSQL migration.\"\n        if \"architecture diagrams\" in message:\n            self.blocks.append(\"human\", \"Prefers architecture diagrams.\")\n            return \"Understood. I recorded that preference.\"\n        return \"Understood. I recorded the turn.\"\n\n\nCURRENT_FACT = \"Atlas database is PostgreSQL.\"\nRAW_NOTE = \"\\nRecent update: PostgreSQL migration reported.\"\n\n\nclass SleepTimeAgent:\n    \"\"\"The maintenance path: read recall, derive learned context, reconcile core and archival, compact.\"\"\"\n\n    def __init__(self, blocks: BlockStore, recall: RecallStore, archival: ArchivalStore):\n        self.blocks, self.recall, self.archival = blocks, recall, archival\n\n    def _learn_from_recall(self) -> List[str]:\n        learned = []\n        for entry in self.recall.recent(10):\n            text = entry.content.lower()\n            if entry.role == \"user\" and \"migrated\" in text and \"postgresql\" in text:\n                if CURRENT_FACT not in learned:\n                    learned.append(CURRENT_FACT)\n        return learned\n\n    def _update_project(self, learned: List[str], actions: List[str]) -> None:\n        if CURRENT_FACT not in learned:\n            return\n        project = self.blocks.read(\"project\")\n        if \"Database: SQLite.\" in project.value:\n            self.blocks.replace(\"project\", \"Database: SQLite.\", \"Database: PostgreSQL.\")\n            actions.append(\"sleep: replaced stale SQLite project fact with PostgreSQL\")\n        project = self.blocks.read(\"project\")\n        if RAW_NOTE in project.value:\n            project.value = project.value.replace(RAW_NOTE, \"\")\n            project.version += 1\n            actions.append(\"sleep: removed redundant migration note\")\n\n    def _clean_archival(self, learned: List[str], actions: List[str]) -> None:\n        if CURRENT_FACT not in learned:\n            return\n        for record in list(self.archival.active_records()):\n            text = record.text.lower()\n            if \"atlas\" in text and \"sqlite\" in text:\n                self.archival.invalidate(record.id)\n                actions.append(\"sleep: invalidated stale SQLite archival fact\")\n        if not self.archival.contains_active(CURRENT_FACT):\n            self.archival.add(CURRENT_FACT)\n            actions.append(\"sleep: archived current PostgreSQL fact\")\n\n    def _summarize_human(self, actions: List[str]) -> None:\n        if not self.blocks.near_limit(\"human\", threshold=0.70):\n            return\n        summary = (\"Role: ML engineer.\\n\"\n                   \"Preferences: Python, concise explanations, architecture diagrams, runnable examples.\\n\"\n                   \"Goal: learn agent systems.\")\n        self.blocks.summarize(\"human\", summary)\n        actions.append(\"sleep: summarized near-limit human block\")\n\n    def run(self) -> List[str]:\n        actions = [\"sleep: started consolidation\"]\n        learned = self._learn_from_recall()\n        for fact in learned:\n            actions.append(f\"sleep: learned {fact}\")\n        self._update_project(learned, actions)\n        self._clean_archival(learned, actions)\n        self._summarize_human(actions)\n        actions.append(\"sleep: consolidation complete\")\n        return actions"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "memblocks_2.py",
    "headingEn": "main(): eight experiments",
    "headingKn": "main(): ಎಂಟು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() exercises recall search, archival invalidation, the raw state after two turns, the sleep pass, idempotence, what the summary kept, the keyword extractor on tricky sentences, and intent routing.",
    "descKn": "main() recall ಹುಡುಕಾಟ, archival ಅಮಾನ್ಯೀಕರಣ, ಎರಡು ಸುತ್ತಿನ ನಂತರದ ಕಚ್ಚಾ ಸ್ಥಿತಿ, sleep pass, idempotence, ಸಾರಾಂಶ ಏನು ಉಳಿಸಿತು, ಕಠಿಣ ವಾಕ್ಯಗಳ ಮೇಲೆ ಕೀವರ್ಡ್ ಹೊರತೆಗೆಯುವಿಕೆ, ಮತ್ತು ಉದ್ದೇಶ ಮಾರ್ಗನಿರ್ದೇಶನವನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Recall: automatic, ordered, searchable by substring\")\n    recall = RecallStore()\n    recall.add(\"user\", \"We use SQLite.\")\n    recall.add(\"assistant\", \"Noted.\")\n    recall.add(\"user\", \"We migrated Atlas to PostgreSQL.\")\n    print(\"recent(2):\", [(e.role, e.content) for e in recall.recent(2)])\n    print(\"search('postgresql'):\", [e.content for e in recall.search(\"postgresql\")])\n    print(\"search('PostgreSQL') with different case works because the query and content are lowercased\")\n    print(\"search('Postgres'):\", [e.content for e in recall.search(\"Postgres\")], \"(a prefix is still a substring, so it matches)\")\n    print(\"search('database engine'):\", [e.content for e in recall.search(\"database engine\")], \"(a paraphrase shares no substring, so nothing is found)\")\n\n    section(\"2. Archival: invalidate instead of delete\")\n    archival = ArchivalStore()\n    old = archival.add(\"Atlas database is SQLite.\")\n    print(\"before: search('sqlite') ->\", [r.text for r in archival.search(\"sqlite\")])\n    archival.invalidate(old.id)\n    print(\"after : search('sqlite') ->\", [r.text for r in archival.search(\"sqlite\")], \"| records stored:\", len(archival.records))\n    try:\n        archival.invalidate(\"no-such-id\")\n    except KeyError as e:\n        print(\"invalidate unknown id -> KeyError:\", e.args[0])\n\n    section(\"3. Turns 1 and 2: the primary agent leaves a raw, inconsistent state\")\n    blocks, recall, archival, primary, sleeper = make_system()\n    print(\"Assistant:\", primary.serve(\"I prefer architecture diagrams when discussing agent systems.\"))\n    print(\"Assistant:\", primary.serve(\"We migrated Atlas from SQLite to PostgreSQL.\"))\n    h = blocks.read(\"human\")\n    print(f\"   human v{h.version} size={h.size}/{h.limit} utilization={h.utilization:.2f}\")\n    show_project(blocks)\n    show_archival(archival)\n\n    section(\"4. The sleep pass\")\n    actions = sleeper.run()\n    for a in actions:\n        print(\"  \", a)\n    show_project(blocks)\n    show_archival(archival)\n    h = blocks.read(\"human\")\n    print(f\"   human v{h.version} size={h.size}/{h.limit} utilization={h.utilization:.2f}\")\n    print(\"   recall entries kept:\", len(recall.entries))\n\n    section(\"5. Idempotence: running the pass a second time\")\n    before = ([r.text for r in archival.records], blocks.read(\"project\").value, blocks.read(\"human\").value)\n    again = sleeper.run()\n    after = ([r.text for r in archival.records], blocks.read(\"project\").value, blocks.read(\"human\").value)\n    for a in again:\n        print(\"  \", a)\n    print(\"memory identical after the second pass:\", before == after)\n\n    section(\"6. Genuinely checking what the summary kept\")\n    original = [l for l in (HUMAN_START + \"\\nPrefers architecture diagrams.\").split(\"\\n\") if l]\n    summary_text = blocks.read(\"human\").value.lower()\n    for line in original:\n        key = line.lower().replace(\"prefers \", \"\").replace(\"wants \", \"\").replace(\".\", \"\")\n        kept = any(word in summary_text for word in key.split()[:2])\n        print(f\"   {'kept   ' if kept else 'LOST   '} {line}\")\n    print(\"the summary text is hard-coded in _summarize_human, so it cannot know which facts the block really held\")\n\n    section(\"7. Genuinely checking the keyword extractor\")\n    for sentence in (\"We migrated Atlas from SQLite to PostgreSQL.\",\n                     \"We have NOT migrated Atlas to PostgreSQL.\",\n                     \"Should we have migrated Atlas to PostgreSQL?\"):\n        b, r, a, p, s = make_system()\n        r.add(\"user\", sentence)\n        learned = s._learn_from_recall()\n        print(f\"   {sentence!r:<52} -> learned: {learned}\")\n\n    section(\"8. Genuinely checking intent routing in the primary agent\")\n    for message in (\"Which database does Atlas use?\", \"We migrated Atlas to PostgreSQL.\"):\n        b, r, a, p, s = make_system()\n        reply = p.serve(message)\n        print(f\"   {message!r:<40} -> {reply!r}; project now: {b.read('project').value.splitlines()[-1]!r}\")\n    b, r, a, p, s = make_system()\n    reply = p.serve(\"Is Atlas still on SQLite, or PostgreSQL?\")\n    print(f\"   {'Is Atlas still on SQLite, or PostgreSQL?'!r:<40} -> {reply!r}; project now: {b.read('project').value.splitlines()[-1]!r}\")\n    print(\"a question that merely mentions PostgreSQL was logged as a migration, because routing is by keyword\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Recall: automatic, ordered, searchable by substring ---\nrecent(2): [('assistant', 'Noted.'), ('user', 'We migrated Atlas to PostgreSQL.')]\nsearch('postgresql'): ['We migrated Atlas to PostgreSQL.']\nsearch('PostgreSQL') with different case works because the query and content are lowercased\nsearch('Postgres'): ['We migrated Atlas to PostgreSQL.'] (a prefix is still a substring, so it matches)\nsearch('database engine'): [] (a paraphrase shares no substring, so nothing is found)\n\n--- 2. Archival: invalidate instead of delete ---\nbefore: search('sqlite') -> ['Atlas database is SQLite.']\nafter : search('sqlite') -> [] | records stored: 1\ninvalidate unknown id -> KeyError: Unknown archival record: no-such-id\n\n--- 3. Turns 1 and 2: the primary agent leaves a raw, inconsistent state ---\nAssistant: Understood. I recorded that preference.\nAssistant: Understood. I recorded the PostgreSQL migration.\n   human v2 size=177/220 utilization=0.80\n   project v2: Project: Atlas. | Language: Python. | Database: SQLite. | Recent update: PostgreSQL migration reported.\n    ACTIVE   Atlas database is SQLite.\n\n--- 4. The sleep pass ---\n   sleep: started consolidation\n   sleep: learned Atlas database is PostgreSQL.\n   sleep: replaced stale SQLite project fact with PostgreSQL\n   sleep: removed redundant migration note\n   sleep: invalidated stale SQLite archival fact\n   sleep: archived current PostgreSQL fact\n   sleep: summarized near-limit human block\n   sleep: consolidation complete\n   project v4: Project: Atlas. | Language: Python. | Database: PostgreSQL.\n    INACTIVE Atlas database is SQLite.\n    ACTIVE   Atlas database is PostgreSQL.\n   human v3 size=130/220 utilization=0.59\n   recall entries kept: 4\n\n--- 5. Idempotence: running the pass a second time ---\n   sleep: started consolidation\n   sleep: learned Atlas database is PostgreSQL.\n   sleep: consolidation complete\nmemory identical after the second pass: True\n\n--- 6. Genuinely checking what the summary kept ---\n   kept    Role: ML engineer.\n   kept    Prefers Python examples.\n   kept    Learning agent systems.\n   kept    Prefers runnable code.\n   kept    Prefers concise explanations.\n   LOST    Wants concept breakdowns.\n   kept    Prefers architecture diagrams.\nthe summary text is hard-coded in _summarize_human, so it cannot know which facts the block really held\n\n--- 7. Genuinely checking the keyword extractor ---\n   'We migrated Atlas from SQLite to PostgreSQL.'       -> learned: ['Atlas database is PostgreSQL.']\n   'We have NOT migrated Atlas to PostgreSQL.'          -> learned: ['Atlas database is PostgreSQL.']\n   'Should we have migrated Atlas to PostgreSQL?'       -> learned: ['Atlas database is PostgreSQL.']\n\n--- 8. Genuinely checking intent routing in the primary agent ---\n   'Which database does Atlas use?'         -> 'Atlas currently uses SQLite.'; project now: 'Database: SQLite.'\n   'We migrated Atlas to PostgreSQL.'       -> 'Understood. I recorded the PostgreSQL migration.'; project now: 'Recent update: PostgreSQL migration reported.'\n   'Is Atlas still on SQLite, or PostgreSQL?' -> 'Understood. I recorded the PostgreSQL migration.'; project now: 'Recent update: PostgreSQL migration reported.'\na question that merely mentions PostgreSQL was logged as a migration, because routing is by keyword"
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
    "headingEn": "Raw State, Then Consolidated State",
    "headingKn": "ಕಚ್ಚಾ ಸ್ಥಿತಿ, ನಂತರ ಏಕೀಕೃತ ಸ್ಥಿತಿ",
    "bodyEn": "Section 3: after two turns the human block is at version 2 and 0.80 utilization, the project block reads Database: SQLite followed by \"Recent update: PostgreSQL migration reported.\", and archival still says SQLite is active. That inconsistency is intentional. Section 4: the sleep pass learns the PostgreSQL fact, replaces the stale line, removes the note, invalidates the SQLite record, archives the PostgreSQL record and summarizes the human block from 177 to 130 characters. Recall still holds 4 entries. Section 5 runs the pass again and the memory is identical, so a retry does not duplicate anything.",
    "bodyKn": "ವಿಭಾಗ 3: ಎರಡು ಸುತ್ತಿನ ನಂತರ human block version 2 ಮತ್ತು 0.80 ಬಳಕೆಯಲ್ಲಿದೆ, project block \"Database: SQLite\" ನಂತರ \"Recent update: PostgreSQL migration reported.\" ಓದುತ್ತದೆ, ಮತ್ತು archival ಇನ್ನೂ SQLite ಸಕ್ರಿಯ ಎನ್ನುತ್ತದೆ. ಈ ಅಸಂಗತಿ ಉದ್ದೇಶಪೂರ್ವಕ. ವಿಭಾಗ 4: sleep pass PostgreSQL ಸಂಗತಿ ಕಲಿತು, ಹಳೆಯ ಸಾಲು ಬದಲಿಸಿ, ಟಿಪ್ಪಣಿ ತೆಗೆದು, SQLite ದಾಖಲೆ ಅಮಾನ್ಯಗೊಳಿಸಿ, PostgreSQL ದಾಖಲೆ archive ಮಾಡಿ, human block ಅನ್ನು 177 ರಿಂದ 130 ಅಕ್ಷರಕ್ಕೆ ಸಂಕ್ಷೇಪಿಸುತ್ತದೆ. Recall ಇನ್ನೂ 4 ನಮೂದುಗಳನ್ನು ಹೊಂದಿದೆ. ವಿಭಾಗ 5 pass ಅನ್ನು ಮತ್ತೆ ಚಲಾಯಿಸುತ್ತದೆ ಮತ್ತು ಮೆಮೊರಿ ಒಂದೇ ಆಗಿರುತ್ತದೆ, ಆದ್ದರಿಂದ ಮರುಪ್ರಯತ್ನ ಏನನ್ನೂ ನಕಲು ಮಾಡುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Summary Dropped a Fact",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಾರಾಂಶ ಒಂದು ಸಂಗತಿ ಕೈಬಿಟ್ಟಿತು",
    "bodyEn": "Section 6 compares the seven original human lines with the summary. \"Wants concept breakdowns.\" is gone. The reason is that _summarize_human returns a hard-coded string, so it cannot know what the block actually held. Compression always risks losing information that future behaviour needed. The goal is the smallest representation that keeps what matters, and a summary needs an evaluation, not just a size check.",
    "bodyKn": "ವಿಭಾಗ 6 ಏಳು ಮೂಲ human ಸಾಲುಗಳನ್ನು ಸಾರಾಂಶದೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ. \"Wants concept breakdowns.\" ಹೋಗಿದೆ. ಕಾರಣ _summarize_human ಹಾರ್ಡ್-ಕೋಡ್ ಮಾಡಿದ ಸ್ಟ್ರಿಂಗ್ ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ block ನಿಜವಾಗಿ ಏನು ಹೊಂದಿತ್ತು ಎಂದು ಅದಕ್ಕೆ ತಿಳಿಯದು. ಸಂಕುಚನ ಯಾವಾಗಲೂ ಭವಿಷ್ಯದ ವರ್ತನೆಗೆ ಬೇಕಾದ ಮಾಹಿತಿ ಕಳೆಯುವ ಅಪಾಯ ಹೊಂದಿದೆ. ಗುರಿ ಮುಖ್ಯವಾದದ್ದನ್ನು ಉಳಿಸುವ ಅತಿ ಚಿಕ್ಕ ನಿರೂಪಣೆ, ಮತ್ತು ಸಾರಾಂಶಕ್ಕೆ ಕೇವಲ ಗಾತ್ರ ಪರಿಶೀಲನೆಯಲ್ಲ, ಮೌಲ್ಯಮಾಪನ ಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Keyword Rules Misread Meaning",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕೀವರ್ಡ್ ನಿಯಮಗಳು ಅರ್ಥ ತಪ್ಪಾಗಿ ಓದುತ್ತವೆ",
    "bodyEn": "Section 7 feeds three sentences to the extractor. \"We migrated Atlas from SQLite to PostgreSQL.\", \"We have NOT migrated Atlas to PostgreSQL.\" and \"Should we have migrated Atlas to PostgreSQL?\" all produce the same learned fact. Negation and a question are invisible to a rule that tests for the words \"migrated\" and \"postgresql\". Section 8 finds the same weakness on the primary side: \"Is Atlas still on SQLite, or PostgreSQL?\" was logged as a migration and written into the project block. A real system needs a model for these semantic decisions and deterministic code for exact ones.",
    "bodyKn": "ವಿಭಾಗ 7 ಮೂರು ವಾಕ್ಯಗಳನ್ನು ಹೊರತೆಗೆಯುವಿಕೆಗೆ ನೀಡುತ್ತದೆ. \"We migrated Atlas from SQLite to PostgreSQL.\", \"We have NOT migrated Atlas to PostgreSQL.\" ಮತ್ತು \"Should we have migrated Atlas to PostgreSQL?\" ಎಲ್ಲವೂ ಅದೇ ಕಲಿತ ಸಂಗತಿ ಉತ್ಪಾದಿಸುತ್ತವೆ. \"migrated\" ಮತ್ತು \"postgresql\" ಪದಗಳನ್ನು ಪರೀಕ್ಷಿಸುವ ನಿಯಮಕ್ಕೆ ನಿರಾಕರಣೆ ಮತ್ತು ಪ್ರಶ್ನೆ ಕಾಣುವುದಿಲ್ಲ. ವಿಭಾಗ 8 primary ಕಡೆ ಅದೇ ದೌರ್ಬಲ್ಯ ಕಂಡುಹಿಡಿಯುತ್ತದೆ: \"Is Atlas still on SQLite, or PostgreSQL?\" ವಲಸೆ ಎಂದು ದಾಖಲಾಗಿ project block ಗೆ ಬರೆಯಲ್ಪಟ್ಟಿತು. ನಿಜವಾದ ವ್ಯವಸ್ಥೆಗೆ ಈ ಅರ್ಥಾತ್ಮಕ ನಿರ್ಧಾರಗಳಿಗೆ ಮಾದರಿ ಮತ್ತು ನಿಖರವಾದವುಗಳಿಗೆ ನಿರ್ಧಾರಾತ್ಮಕ ಕೋಡ್ ಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Raw Capture Then Consolidation",
    "headingKn": "ಕಚ್ಚಾ ಸೆರೆಹಿಡಿಯುವಿಕೆ ನಂತರ ಏಕೀಕರಣ",
    "bodyEn": "This resembles a write-ahead log followed by compaction, or garbage collection after fast allocation: capture quickly, clean later. The cost is eventual consistency. Between the turn and the sleep pass, memory holds the old fact and the raw note, so a request arriving in that window sees the messy state. Writes that must be correct immediately, such as a revoked permission or a changed safety rule, should not be deferred.",
    "bodyKn": "ಇದು write-ahead log ನಂತರ compaction, ಅಥವಾ ವೇಗದ ಹಂಚಿಕೆಯ ನಂತರ garbage collection ನಂತಿದೆ: ವೇಗವಾಗಿ ಸೆರೆಹಿಡಿಯಿರಿ, ನಂತರ ಸ್ವಚ್ಛಗೊಳಿಸಿ. ವೆಚ್ಚ ಅಂತಿಮ ಸ್ಥಿರತೆ. ಸುತ್ತು ಮತ್ತು sleep pass ನಡುವೆ ಮೆಮೊರಿ ಹಳೆಯ ಸಂಗತಿ ಮತ್ತು ಕಚ್ಚಾ ಟಿಪ್ಪಣಿ ಹೊಂದಿದೆ, ಆದ್ದರಿಂದ ಆ ಅವಧಿಯಲ್ಲಿ ಬರುವ ವಿನಂತಿ ಗಲೀಜು ಸ್ಥಿತಿ ನೋಡುತ್ತದೆ. ತಕ್ಷಣ ಸರಿಯಾಗಿರಬೇಕಾದ ಬರವಣಿಗೆಗಳನ್ನು, ಉದಾಹರಣೆಗೆ ರದ್ದುಗೊಳಿಸಿದ ಅನುಮತಿ ಅಥವಾ ಬದಲಾದ ಸುರಕ್ಷತಾ ನಿಯಮ, ಮುಂದೂಡಬಾರದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "It keeps the interactive path short and spends idle time on work that benefits from more context and more compute, such as reasoning across several turns to decide that a database really changed. Batch consolidation over a whole session avoids storing every transient state, for example three changes of mind about a cache in one afternoon.",
    "bodyKn": "ಇದು ಸಂವಾದಾತ್ಮಕ ದಾರಿಯನ್ನು ಚಿಕ್ಕದಾಗಿಡುತ್ತದೆ ಮತ್ತು ಹೆಚ್ಚು context ಹಾಗೂ ಹೆಚ್ಚು ಲೆಕ್ಕಾಚಾರದಿಂದ ಲಾಭ ಪಡೆಯುವ ಕೆಲಸಕ್ಕೆ ಖಾಲಿ ಸಮಯ ಬಳಸುತ್ತದೆ, ಉದಾಹರಣೆಗೆ ಡೇಟಾಬೇಸ್ ನಿಜವಾಗಿ ಬದಲಾಯಿತು ಎಂದು ತೀರ್ಮಾನಿಸಲು ಹಲವು ಸುತ್ತುಗಳಾದ್ಯಂತ ತರ್ಕಿಸುವುದು. ಇಡೀ ಅವಧಿಯ ಮೇಲೆ ಗುಂಪು ಏಕೀಕರಣ ಪ್ರತಿ ತಾತ್ಕಾಲಿಕ ಸ್ಥಿತಿ ಸಂಗ್ರಹಿಸುವುದನ್ನು ತಪ್ಪಿಸುತ್ತದೆ, ಉದಾಹರಣೆಗೆ ಒಂದು ಮಧ್ಯಾಹ್ನದಲ್ಲಿ cache ಬಗ್ಗೆ ಮೂರು ಬಾರಿ ಮನಸ್ಸು ಬದಲಿಸುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"sleep-time compute means Python async.\" It means maintenance does not block the response. A thread, a queue, a cron job or a worker can all do that, while await consolidate() before returning would still be on the critical path.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"sleep-time compute ಎಂದರೆ Python async.\" ಅದರರ್ಥ ನಿರ್ವಹಣೆ ಉತ್ತರವನ್ನು ತಡೆಯುವುದಿಲ್ಲ. Thread, queue, cron ಕೆಲಸ ಅಥವಾ worker ಎಲ್ಲವೂ ಅದನ್ನು ಮಾಡಬಲ್ಲವು, ಆದರೆ ಹಿಂತಿರುಗುವ ಮೊದಲು await consolidate() ಇನ್ನೂ critical path ನಲ್ಲೇ ಇರುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Primary agent: the fast path that serves the turn. Sleep-time agent: the maintenance path. Learned context: durable facts derived from raw events. Invalidation: marking a record inactive without deleting history. Raw write: a quick, possibly inconsistent capture. Eventual consistency: memory converges to a clean state after the sleep pass. Idempotence: running the pass again changes nothing.",
    "bodyKn": "Primary agent: ಸುತ್ತಿಗೆ ಸೇವೆ ನೀಡುವ ವೇಗದ ದಾರಿ. Sleep-time agent: ನಿರ್ವಹಣಾ ದಾರಿ. Learned context: ಕಚ್ಚಾ ಘಟನೆಗಳಿಂದ ಪಡೆದ ಸ್ಥಿರ ಸಂಗತಿಗಳು. ಅಮಾನ್ಯೀಕರಣ: ಇತಿಹಾಸ ಅಳಿಸದೆ ದಾಖಲೆಯನ್ನು inactive ಎಂದು ಗುರುತಿಸುವುದು. Raw write: ವೇಗದ, ಸಂಭವನೀಯ ಅಸಂಗತ ಸೆರೆಹಿಡಿಯುವಿಕೆ. Eventual consistency: sleep pass ನಂತರ ಮೆಮೊರಿ ಸ್ವಚ್ಛ ಸ್ಥಿತಿಗೆ ಬರುವುದು. Idempotence: pass ಮತ್ತೆ ಚಲಾಯಿಸಿದರೆ ಏನೂ ಬದಲಾಗುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Serve fast, maintain later, and share the same stores. 2) Recall is automatic and chronological, core is selective, archival invalidates instead of deleting. 3) The sleep pass turned a messy raw state into one clean current fact and was idempotent. 4) The hard-coded summary lost a fact. 5) Keyword rules cannot see negation or questions. 6) Eventual consistency has a window where memory is messy, so critical writes stay synchronous. Part 3 runs the whole thing and breaks it.",
    "bodyKn": "1) ವೇಗವಾಗಿ ಸೇವೆ ನೀಡಿ, ನಂತರ ನಿರ್ವಹಿಸಿ, ಮತ್ತು ಅದೇ ಸಂಗ್ರಹಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ. 2) Recall ಸ್ವಯಂಚಾಲಿತ ಮತ್ತು ಕಾಲಾನುಕ್ರಮ, core ಆಯ್ದ, archival ಅಳಿಸುವ ಬದಲು ಅಮಾನ್ಯಗೊಳಿಸುತ್ತದೆ. 3) Sleep pass ಗಲೀಜು ಕಚ್ಚಾ ಸ್ಥಿತಿಯನ್ನು ಒಂದು ಸ್ವಚ್ಛ ಪ್ರಸ್ತುತ ಸಂಗತಿಯಾಗಿಸಿತು ಮತ್ತು idempotent ಆಗಿತ್ತು. 4) ಹಾರ್ಡ್-ಕೋಡ್ ಸಾರಾಂಶ ಒಂದು ಸಂಗತಿ ಕಳೆಯಿತು. 5) ಕೀವರ್ಡ್ ನಿಯಮಗಳಿಗೆ ನಿರಾಕರಣೆ ಅಥವಾ ಪ್ರಶ್ನೆ ಕಾಣುವುದಿಲ್ಲ. 6) ಅಂತಿಮ ಸ್ಥಿರತೆಗೆ ಮೆಮೊರಿ ಗಲೀಜಾಗಿರುವ ಅವಧಿ ಇದೆ, ಆದ್ದರಿಂದ ನಿರ್ಣಾಯಕ ಬರವಣಿಗೆಗಳು ಸಿಂಕ್ರೋನಸ್ ಆಗಿರಲಿ. ಭಾಗ 3 ಎಲ್ಲವನ್ನೂ ಚಲಾಯಿಸಿ ಮುರಿಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why does the primary agent do a raw write and leave consolidation to the sleep agent?",
      "qKn": "Primary agent ಕಚ್ಚಾ ಬರವಣಿಗೆ ಮಾಡಿ ಏಕೀಕರಣವನ್ನು sleep agent ಗೆ ಏಕೆ ಬಿಡುತ್ತದೆ?",
      "opts": [
       "Consolidation is impossible",
       "Maintenance is not needed for the current answer, so it is moved off the critical path to cut latency",
       "Raw writes are more accurate",
       "Sleep agents cannot read recall"
      ],
      "optsKn": [
       "ಏಕೀಕರಣ ಅಸಾಧ್ಯ",
       "ಪ್ರಸ್ತುತ ಉತ್ತರಕ್ಕೆ ನಿರ್ವಹಣೆ ಬೇಕಿಲ್ಲ, ಆದ್ದರಿಂದ ವಿಳಂಬ ಕಡಿಮೆ ಮಾಡಲು ಅದನ್ನು critical path ನಿಂದ ಸರಿಸಲಾಗಿದೆ",
       "ಕಚ್ಚಾ ಬರವಣಿಗೆಗಳು ಹೆಚ್ಚು ನಿಖರ",
       "Sleep agents recall ಓದಲಾರವು"
      ],
      "correct": 1
     },
     {
      "q": "After the sleep pass, what happened to the old SQLite archival record?",
      "qKn": "Sleep pass ನಂತರ ಹಳೆಯ SQLite archival ದಾಖಲೆಗೆ ಏನಾಯಿತು?",
      "opts": [
       "It was deleted",
       "It was marked inactive and kept as history",
       "It became the current fact",
       "It moved to core"
      ],
      "optsKn": [
       "ಅಳಿಸಲಾಯಿತು",
       "inactive ಎಂದು ಗುರುತಿಸಿ ಇತಿಹಾಸವಾಗಿ ಉಳಿಸಲಾಯಿತು",
       "ಪ್ರಸ್ತುತ ಸಂಗತಿಯಾಯಿತು",
       "core ಗೆ ಸರಿಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What did the extractor do with \"We have NOT migrated Atlas to PostgreSQL.\"?",
      "qKn": "\"We have NOT migrated Atlas to PostgreSQL.\" ಗೆ ಹೊರತೆಗೆಯುವಿಕೆ ಏನು ಮಾಡಿತು?",
      "opts": [
       "Rejected it",
       "Learned that Atlas uses PostgreSQL, because it only tests for keywords",
       "Asked for clarification",
       "Stored the negation"
      ],
      "optsKn": [
       "ತಿರಸ್ಕರಿಸಿತು",
       "ಕೀವರ್ಡ್ ಮಾತ್ರ ಪರೀಕ್ಷಿಸುವುದರಿಂದ Atlas PostgreSQL ಬಳಸುತ್ತದೆ ಎಂದು ಕಲಿಯಿತು",
       "ಸ್ಪಷ್ಟೀಕರಣ ಕೇಳಿತು",
       "ನಿರಾಕರಣೆ ಸಂಗ್ರಹಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What does running the sleep pass a second time demonstrate?",
      "qKn": "Sleep pass ಅನ್ನು ಎರಡನೇ ಬಾರಿ ಚಲಾಯಿಸುವುದು ಏನನ್ನು ತೋರಿಸುತ್ತದೆ?",
      "opts": [
       "The pass is slow",
       "The pass is idempotent: memory was identical afterwards, so retries are safe",
       "The pass deletes recall",
       "The pass needs a model"
      ],
      "optsKn": [
       "pass ನಿಧಾನ",
       "pass idempotent: ನಂತರ ಮೆಮೊರಿ ಒಂದೇ ಆಗಿತ್ತು, ಆದ್ದರಿಂದ ಮರುಪ್ರಯತ್ನ ಸುರಕ್ಷಿತ",
       "pass recall ಅಳಿಸುತ್ತದೆ",
       "pass ಗೆ ಮಾದರಿ ಬೇಕು"
      ],
      "correct": 1
     },
     {
      "q": "Which write should not be deferred to a sleep pass?",
      "qKn": "ಯಾವ ಬರವಣಿಗೆಯನ್ನು sleep pass ಗೆ ಮುಂದೂಡಬಾರದು?",
      "opts": [
       "A duplicate preference",
       "A revoked permission",
       "A verbose human note",
       "An old archival fact"
      ],
      "optsKn": [
       "ನಕಲು ಆದ್ಯತೆ",
       "ರದ್ದುಗೊಳಿಸಿದ ಅನುಮತಿ",
       "ಉದ್ದದ human ಟಿಪ್ಪಣಿ",
       "ಹಳೆಯ archival ಸಂಗತಿ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
