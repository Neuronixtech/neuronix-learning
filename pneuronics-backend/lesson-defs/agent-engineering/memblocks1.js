module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321523",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Memory Blocks and Sleep-Time Compute (Part 1 of 3) — Core, Recall, Archival and the Block Layer",
 "titleKn": "Memory Blocks ಮತ್ತು Sleep-Time Compute (ಭಾಗ 1 / 3) — Core, Recall, Archival ಮತ್ತು Block ಪದರ",
 "desc": "Split agent memory into core, recall and archival, build a bounded, versioned Block and BlockStore, and verify that failed writes change nothing, append creates contradictions, and a character limit only approximates context cost.",
 "descKn": "Agent ಮೆಮೊರಿಯನ್ನು core, recall ಮತ್ತು archival ಆಗಿ ವಿಭಜಿಸಿ, ಮಿತಿ ಮತ್ತು version ಇರುವ Block ಹಾಗೂ BlockStore ನಿರ್ಮಿಸಿ, ಮತ್ತು ವಿಫಲ ಬರವಣಿಗೆ ಏನನ್ನೂ ಬದಲಿಸುವುದಿಲ್ಲ, append ವಿರೋಧ ಸೃಷ್ಟಿಸುತ್ತದೆ, ಅಕ್ಷರ ಮಿತಿ context ವೆಚ್ಚದ ಅಂದಾಜು ಮಾತ್ರ ಎಂದು ಪರಿಶೀಲಿಸಿ.",
 "objectives": [
  "Explain core, recall and archival memory and why core is the scarce tier.",
  "Implement Block and BlockStore with create, read, append, replace, summarize and near_limit.",
  "Show that writes are validated before commit and failed writes leave state unchanged.",
  "Choose append versus replace correctly for additive versus superseding facts.",
  "Explain what a character limit does and does not measure."
 ],
 "objectivesKn": [
  "Core, recall ಮತ್ತು archival ಮೆಮೊರಿ ಹಾಗೂ core ಅಪರೂಪದ ಹಂತ ಏಕೆ ಎಂದು ವಿವರಿಸಿ.",
  "create, read, append, replace, summarize ಮತ್ತು near_limit ಇರುವ Block ಮತ್ತು BlockStore ಅಳವಡಿಸಿ.",
  "ಬರವಣಿಗೆಗಳು commit ಮೊದಲು ಮಾನ್ಯವಾಗುತ್ತವೆ ಮತ್ತು ವಿಫಲ ಬರವಣಿಗೆ ಸ್ಥಿತಿ ಬದಲಿಸುವುದಿಲ್ಲ ಎಂದು ತೋರಿಸಿ.",
  "ಸೇರ್ಪಡೆ ಮತ್ತು ಬದಲಿ ಸಂಗತಿಗಳಿಗೆ append ಮತ್ತು replace ಸರಿಯಾಗಿ ಆರಿಸಿ.",
  "ಅಕ್ಷರ ಮಿತಿ ಏನನ್ನು ಅಳೆಯುತ್ತದೆ ಮತ್ತು ಏನನ್ನು ಅಳೆಯುವುದಿಲ್ಲ ಎಂದು ವಿವರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Memory Blocks and Sleep-Time Compute (Part 1 of 3)",
    "textKn": "Memory Blocks ಮತ್ತು Sleep-Time Compute (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: core, recall and archival memory, and the Block and BlockStore layer. Every output below was genuinely produced by the lab file on Python 3.14.5. The pasted source gave the code in pieces and was cut off near its end, so the program is rebuilt from its description; the version counter, which the source adds in Part 3, is included from the start. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: core, recall ಮತ್ತು archival ಮೆಮೊರಿ, ಹಾಗೂ Block ಮತ್ತು BlockStore ಪದರ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಅಂಟಿಸಿದ ಮೂಲ ಕೋಡ್ ತುಂಡುತುಂಡಾಗಿತ್ತು ಮತ್ತು ಅಂತ್ಯದ ಹತ್ತಿರ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ ಪ್ರೋಗ್ರಾಂ ಅನ್ನು ಅದರ ವಿವರಣೆಯಿಂದ ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ; ಮೂಲ ಭಾಗ 3 ರಲ್ಲಿ ಸೇರಿಸುವ version ಎಣಿಕೆ ಆರಂಭದಿಂದಲೇ ಇದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Why Memory Needs Structure",
    "textKn": "ಮೆಮೊರಿಗೆ ರಚನೆ ಏಕೆ ಬೇಕು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Three Tiers by Visibility",
    "headingKn": "ಗೋಚರತೆಯ ಆಧಾರದ ಮೂರು ಹಂತಗಳು",
    "bodyEn": "A long-lived agent accumulates preferences, decisions, old and new facts and thousands of tool results, and all of it cannot sit in the prompt. The lesson splits memory by visibility. Core memory is always in the prompt. Recall memory is the conversation history, retrieved when needed. Archival memory is a large external store, searched when needed. A virtual-memory view fits: core is pinned RAM, recall is the process log, archival is disk.",
    "bodyKn": "ದೀರ್ಘಕಾಲ ಬದುಕುವ agent ಆದ್ಯತೆಗಳು, ನಿರ್ಧಾರಗಳು, ಹಳೆಯ ಮತ್ತು ಹೊಸ ಸಂಗತಿಗಳು ಮತ್ತು ಸಾವಿರಾರು tool ಫಲಿತಾಂಶಗಳನ್ನು ಸಂಗ್ರಹಿಸುತ್ತದೆ, ಮತ್ತು ಎಲ್ಲವೂ prompt ನಲ್ಲಿ ಕೂರಲಾರದು. ಪಾಠ ಮೆಮೊರಿಯನ್ನು ಗೋಚರತೆಯ ಪ್ರಕಾರ ವಿಭಜಿಸುತ್ತದೆ. Core ಮೆಮೊರಿ ಯಾವಾಗಲೂ prompt ನಲ್ಲಿರುತ್ತದೆ. Recall ಮೆಮೊರಿ ಸಂಭಾಷಣೆ ಇತಿಹಾಸ, ಬೇಕಾದಾಗ ಪಡೆಯಲಾಗುತ್ತದೆ. Archival ಮೆಮೊರಿ ದೊಡ್ಡ ಬಾಹ್ಯ ಸಂಗ್ರಹ, ಬೇಕಾದಾಗ ಹುಡುಕಲಾಗುತ್ತದೆ. Virtual-memory ದೃಷ್ಟಿ ಹೊಂದುತ್ತದೆ: core ಪಿನ್ ಮಾಡಿದ RAM, recall ಪ್ರಕ್ರಿಯೆ ಲಾಗ್, archival disk."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Core, Recall and Archival",
    "headingKn": "Core, Recall ಮತ್ತು Archival",
    "svgCode": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"200\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Three memory tiers, and blocks inside core</text>\n  <rect x=\"20\" y=\"24\" width=\"260\" height=\"70\" rx=\"6\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"38\" fill=\"#6ee7b7\" text-anchor=\"middle\">CORE: always in the prompt, small, editable</text>\n  <rect x=\"32\" y=\"48\" width=\"52\" height=\"34\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"58\" y=\"68\" fill=\"#93c5fd\" text-anchor=\"middle\">human</text>\n  <rect x=\"90\" y=\"48\" width=\"52\" height=\"34\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"116\" y=\"68\" fill=\"#93c5fd\" text-anchor=\"middle\">persona</text>\n  <rect x=\"148\" y=\"48\" width=\"52\" height=\"34\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"174\" y=\"68\" fill=\"#93c5fd\" text-anchor=\"middle\">project</text>\n  <rect x=\"206\" y=\"48\" width=\"52\" height=\"34\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"232\" y=\"68\" fill=\"#93c5fd\" text-anchor=\"middle\">task</text>\n  <rect x=\"20\" y=\"104\" width=\"125\" height=\"50\" rx=\"6\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"82\" y=\"122\" fill=\"#fde68a\" text-anchor=\"middle\">RECALL</text><text x=\"82\" y=\"136\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"6\">conversation history</text><text x=\"82\" y=\"146\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"6\">retrieved when needed</text>\n  <rect x=\"155\" y=\"104\" width=\"125\" height=\"50\" rx=\"6\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"217\" y=\"122\" fill=\"#c4b5fd\" text-anchor=\"middle\">ARCHIVAL</text><text x=\"217\" y=\"136\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">large long-term store</text><text x=\"217\" y=\"146\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">searched when needed</text>\n  <text x=\"150\" y=\"176\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">core is scarce and repeated on every call; the other two are cheap and fetched on demand</text>\n</svg>",
    "captionEn": "Core is small and repeated on every call, so it is expensive. Recall and archival are cheap and fetched on demand.",
    "captionKn": "Core ಚಿಕ್ಕದು ಮತ್ತು ಪ್ರತಿ ಕರೆಯಲ್ಲಿ ಪುನರಾವರ್ತನೆ, ಆದ್ದರಿಂದ ದುಬಾರಿ. Recall ಮತ್ತು archival ಅಗ್ಗ ಮತ್ತು ಬೇಡಿಕೆಯ ಮೇಲೆ ಪಡೆಯಲಾಗುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "From a Flat String to Blocks",
    "headingKn": "ಒಂದೇ ಸ್ಟ್ರಿಂಗ್‌ನಿಂದ Blocks ಗೆ",
    "bodyEn": "One long memory string works until the agent wants to update only the current task, or give the user facts and the project facts different size limits. A memory block is a typed, persistent, editable segment of core memory with an id, a label, a value, a limit and a description. The description tells the model where a new fact belongs: \"our backend now uses FastAPI\" goes in project, not human. Human holds facts about the user, persona describes the agent, and custom blocks such as task, project and safety are allowed.",
    "bodyKn": "ಒಂದು ಉದ್ದದ ಮೆಮೊರಿ ಸ್ಟ್ರಿಂಗ್ agent ಕೇವಲ ಪ್ರಸ್ತುತ ಕಾರ್ಯವನ್ನು ನವೀಕರಿಸಲು ಅಥವಾ ಬಳಕೆದಾರ ಮತ್ತು ಪ್ರಾಜೆಕ್ಟ್ ಸಂಗತಿಗಳಿಗೆ ಬೇರೆ ಗಾತ್ರ ಮಿತಿ ಕೊಡಲು ಬಯಸುವವರೆಗೆ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತದೆ. Memory block ಎಂದರೆ id, label, value, limit ಮತ್ತು description ಇರುವ, core ಮೆಮೊರಿಯ ಟೈಪ್ ಮಾಡಿದ, ನಿರಂತರ, ಸಂಪಾದಿಸಬಹುದಾದ ಭಾಗ. ಹೊಸ ಸಂಗತಿ ಎಲ್ಲಿಗೆ ಸೇರಬೇಕು ಎಂದು description ಮಾದರಿಗೆ ಹೇಳುತ್ತದೆ: \"our backend now uses FastAPI\" project ಗೆ ಹೋಗುತ್ತದೆ, human ಗಲ್ಲ. Human ಬಳಕೆದಾರರ ಸಂಗತಿಗಳನ್ನು ಹೊಂದಿದೆ, persona agent ಅನ್ನು ವಿವರಿಸುತ್ತದೆ, ಮತ್ತು task, project ಹಾಗೂ safety ನಂತಹ custom blocks ಅನುಮತಿಸಲಾಗಿದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building Block and BlockStore",
    "textKn": "Block ಮತ್ತು BlockStore ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "memblocks_1.py",
    "headingEn": "Block, BlockStore and the starting blocks",
    "headingKn": "Block, BlockStore ಮತ್ತು ಆರಂಭಿಕ blocks",
    "descEn": "Block is a plain dataclass with size, remaining and utilization properties; it knows nothing about LLMs. BlockStore owns the mechanics: create, read, append, replace, summarize, near_limit and render. Every write builds a candidate value, checks it against the limit, and only then commits and bumps the version. render() turns the structured blocks into the text the model would receive.",
    "descKn": "Block ಸರಳ dataclass, size, remaining ಮತ್ತು utilization ಗುಣಗಳೊಂದಿಗೆ; ಅದಕ್ಕೆ LLM ಗಳ ಬಗ್ಗೆ ಏನೂ ತಿಳಿಯದು. BlockStore ಕಾರ್ಯವಿಧಾನ ಹೊಂದಿದೆ: create, read, append, replace, summarize, near_limit ಮತ್ತು render. ಪ್ರತಿ ಬರವಣಿಗೆ ಅಭ್ಯರ್ಥಿ ಮೌಲ್ಯ ರಚಿಸಿ, ಮಿತಿಯೊಂದಿಗೆ ಪರಿಶೀಲಿಸಿ, ನಂತರವೇ commit ಮಾಡಿ version ಹೆಚ್ಚಿಸುತ್ತದೆ. render() ರಚನಾತ್ಮಕ blocks ಅನ್ನು ಮಾದರಿ ಪಡೆಯುವ ಪಠ್ಯವಾಗಿಸುತ್ತದೆ.",
    "code": "@dataclass\nclass Block:\n    id: str\n    label: str\n    value: str\n    limit: int\n    description: str\n    version: int = 1\n\n    @property\n    def size(self) -> int:\n        return len(self.value)\n\n    @property\n    def remaining(self) -> int:\n        return self.limit - self.size\n\n    @property\n    def utilization(self) -> float:\n        if self.limit == 0:\n            return 1.0\n        return self.size / self.limit\n\n\nclass BlockStore:\n    def __init__(self):\n        self.blocks: Dict[str, Block] = {}\n\n    def create(self, label: str, value: str, limit: int, description: str) -> Block:\n        if label in self.blocks:\n            raise ValueError(f\"Block already exists: {label}\")\n        if len(value) > limit:\n            raise ValueError(f\"Initial value exceeds limit for {label}\")\n        block = Block(id=str(uuid.uuid4()), label=label, value=value, limit=limit, description=description)\n        self.blocks[label] = block\n        return block\n\n    def read(self, label: str) -> Block:\n        if label not in self.blocks:\n            raise KeyError(f\"Unknown block: {label}\")\n        return self.blocks[label]\n\n    def append(self, label: str, text: str) -> None:\n        block = self.read(label)\n        candidate = block.value + \"\\n\" + text\n        if len(candidate) > block.limit:\n            raise ValueError(f\"Append would exceed limit for {label}\")\n        block.value = candidate\n        block.version += 1\n\n    def replace(self, label: str, old: str, new: str) -> None:\n        block = self.read(label)\n        if old not in block.value:\n            raise ValueError(f\"Text not found in block {label}\")\n        candidate = block.value.replace(old, new, 1)\n        if len(candidate) > block.limit:\n            raise ValueError(f\"Replacement exceeds limit for {label}\")\n        block.value = candidate\n        block.version += 1\n\n    def summarize(self, label: str, summary: str) -> None:\n        block = self.read(label)\n        if len(summary) > block.limit:\n            raise ValueError(f\"Summary exceeds limit for {label}\")\n        block.value = summary\n        block.version += 1\n\n    def near_limit(self, label: str, threshold: float = 0.80) -> bool:\n        return self.read(label).utilization >= threshold\n\n    def list_blocks(self) -> List[Block]:\n        return list(self.blocks.values())\n\n    def render(self) -> str:\n        sections = []\n        for block in self.list_blocks():\n            sections.append(f\"[{block.label.upper()}]\\n{block.value}\")\n        return \"\\n\\n\".join(sections)\n\n\ndef make_store() -> BlockStore:\n    store = BlockStore()\n    store.create(\"human\", \"Role: ML engineer.\\nPrefers Python examples.\", 240, \"Stable facts about the user, their preferences, and goals.\")\n    store.create(\"persona\", \"You are a precise technical instructor.\", 220, \"The agent's identity, tone, and persistent behavioral constraints.\")\n    store.create(\"project\", \"Project: Atlas.\\nLanguage: Python.\\nDatabase: SQLite.\", 320, \"Stable technical facts about the active project.\")\n    store.create(\"task\", \"Implement persistent agent memory.\", 260, \"Current objective and active work state.\")\n    return store"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "memblocks_1.py",
    "headingEn": "main(): eight experiments",
    "headingKn": "main(): ಎಂಟು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() renders the core snapshot, contrasts append with replace, forces every refusal path, fills a block, applies a summary, probes the newline edge case, measures what the limit counts, and does the token arithmetic.",
    "descKn": "main() core ಸ್ನ್ಯಾಪ್‌ಶಾಟ್ render ಮಾಡುತ್ತದೆ, append ಮತ್ತು replace ಹೋಲಿಸುತ್ತದೆ, ಪ್ರತಿ ನಿರಾಕರಣೆ ಮಾರ್ಗ ಒತ್ತಾಯಿಸುತ್ತದೆ, block ತುಂಬುತ್ತದೆ, ಸಾರಾಂಶ ಅನ್ವಯಿಸುತ್ತದೆ, newline ಅಂಚಿನ ಪ್ರಕರಣ ಪರೀಕ್ಷಿಸುತ್ತದೆ, limit ಏನನ್ನು ಎಣಿಸುತ್ತದೆ ಎಂದು ಅಳೆಯುತ್ತದೆ, ಮತ್ತು token ಅಂಕಗಣಿತ ಮಾಡುತ್ತದೆ.",
    "code": "def attempt(label, fn):\n    try:\n        fn()\n        print(f\"{label:<44} -> ok\")\n    except (ValueError, KeyError) as e:\n        print(f\"{label:<44} -> {type(e).__name__}: {e.args[0]}\")\n\n\ndef main():\n    section(\"1. The core-memory snapshot (what the model would receive)\")\n    store = make_store()\n    print(store.render())\n    for b in store.list_blocks():\n        print(f\"{b.label:<8} size={b.size:>3}/{b.limit} remaining={b.remaining:>3} utilization={b.utilization:.2f} version={b.version}\")\n\n    section(\"2. Append versus replace on a changed fact\")\n    s1, s2 = make_store(), make_store()\n    s1.append(\"project\", \"Database: PostgreSQL.\")\n    s2.replace(\"project\", \"Database: SQLite.\", \"Database: PostgreSQL.\")\n    print(\"append  ->\", s1.read(\"project\").value.replace(\"\\n\", \" | \"))\n    print(\"replace ->\", s2.read(\"project\").value.replace(\"\\n\", \" | \"))\n    print(\"append leaves\", s1.read(\"project\").value.count(\"Database:\"), \"Database lines (a contradiction); replace leaves\", s2.read(\"project\").value.count(\"Database:\"))\n\n    section(\"3. The invariant len(value) <= limit, enforced\")\n    store = make_store()\n    attempt(\"create duplicate label 'human'\", lambda: store.create(\"human\", \"x\", 10, \"dup\"))\n    attempt(\"create with value longer than limit\", lambda: store.create(\"tiny\", \"this text is far longer than ten\", 10, \"tiny\"))\n    attempt(\"read unknown block 'missing'\", lambda: store.read(\"missing\"))\n    attempt(\"replace text that is not there\", lambda: store.replace(\"project\", \"Database: MySQL.\", \"x\"))\n    attempt(\"append 300 chars to human (limit 240)\", lambda: store.append(\"human\", \"z\" * 300))\n    attempt(\"replace growing project past its limit\", lambda: store.replace(\"project\", \"Language: Python.\", \"Language: \" + \"P\" * 400))\n    print(\"human version after the failed writes:\", store.read(\"human\").version, \"(unchanged: a failed write leaves state and version alone)\")\n\n    section(\"4. Memory pressure: watching a block fill\")\n    store = make_store()\n    notes = [\"Learning agent systems.\", \"Prefers runnable code.\", \"Prefers concise explanations.\", \"Wants concept breakdowns.\", \"Likes architecture diagrams.\"]\n    for note in notes:\n        try:\n            store.append(\"human\", note)\n        except ValueError as e:\n            print(f\"append {note!r:<34} -> REFUSED ({e.args[0]})\")\n            continue\n        b = store.read(\"human\")\n        print(f\"append {note!r:<34} size={b.size:>3}/{b.limit} utilization={b.utilization:.2f} near_limit(0.80)={store.near_limit('human')} version={b.version}\")\n\n    section(\"5. Summarizing frees capacity, and the store does not write the summary itself\")\n    b = store.read(\"human\")\n    before = b.utilization\n    store.summarize(\"human\", \"Role: ML engineer.\\nPrefers: Python, concise, runnable code, diagrams.\\nGoal: learn agent systems.\")\n    print(f\"utilization {before:.2f} -> {b.utilization:.2f}, version -> {b.version}\")\n    print(\"the caller supplied the summary text; the store only validated its size and applied it\")\n\n    section(\"6. Edge case: the newline separator costs one character\")\n    store = BlockStore()\n    blk = store.create(\"edge\", \"a\" * 10, 20, \"edge\")\n    print(\"remaining:\", blk.remaining)\n    attempt(\"append exactly 'remaining' (10) characters\", lambda: store.append(\"edge\", \"b\" * 10))\n    attempt(\"append remaining - 1 (9) characters\", lambda: store.append(\"edge\", \"b\" * 9))\n\n    section(\"7. Genuinely checking what 'limit' measures\")\n    en = \"Prefers concise explanations with Python.\"\n    kn = \"ಪೈಥಾನ್ ಉದಾಹರಣೆಗಳೊಂದಿಗೆ ಸಂಕ್ಷಿಪ್ತ ವಿವರಣೆಗಳನ್ನು ಇಷ್ಟಪಡುತ್ತಾರೆ.\"\n    for label, text in ((\"English\", en), (\"Kannada\", kn)):\n        print(f\"{label:<8} characters={len(text):>3} utf-8 bytes={len(text.encode('utf-8')):>3} words={len(text.split())}\")\n    print(\"the limit counts Python characters, so it is a proxy: the same character budget costs very different token amounts per script\")\n\n    section(\"8. Why core memory is expensive (arithmetic)\")\n    block_tokens, calls = 2000, 1000\n    print(f\"a {block_tokens}-token block sent on {calls} calls = {block_tokens * calls:,} tokens processed\")\n    print(f\"the same fact stored once in an archive and fetched on 20 of those calls: {20 * 50:,} tokens (50-token record)\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. The core-memory snapshot (what the model would receive) ---\n[HUMAN]\nRole: ML engineer.\nPrefers Python examples.\n\n[PERSONA]\nYou are a precise technical instructor.\n\n[PROJECT]\nProject: Atlas.\nLanguage: Python.\nDatabase: SQLite.\n\n[TASK]\nImplement persistent agent memory.\nhuman    size= 43/240 remaining=197 utilization=0.18 version=1\npersona  size= 39/220 remaining=181 utilization=0.18 version=1\nproject  size= 51/320 remaining=269 utilization=0.16 version=1\ntask     size= 34/260 remaining=226 utilization=0.13 version=1\n\n--- 2. Append versus replace on a changed fact ---\nappend  -> Project: Atlas. | Language: Python. | Database: SQLite. | Database: PostgreSQL.\nreplace -> Project: Atlas. | Language: Python. | Database: PostgreSQL.\nappend leaves 2 Database lines (a contradiction); replace leaves 1\n\n--- 3. The invariant len(value) <= limit, enforced ---\ncreate duplicate label 'human'               -> ValueError: Block already exists: human\ncreate with value longer than limit          -> ValueError: Initial value exceeds limit for tiny\nread unknown block 'missing'                 -> KeyError: Unknown block: missing\nreplace text that is not there               -> ValueError: Text not found in block project\nappend 300 chars to human (limit 240)        -> ValueError: Append would exceed limit for human\nreplace growing project past its limit       -> ValueError: Replacement exceeds limit for project\nhuman version after the failed writes: 1 (unchanged: a failed write leaves state and version alone)\n\n--- 4. Memory pressure: watching a block fill ---\nappend 'Learning agent systems.'          size= 67/240 utilization=0.28 near_limit(0.80)=False version=2\nappend 'Prefers runnable code.'           size= 90/240 utilization=0.38 near_limit(0.80)=False version=3\nappend 'Prefers concise explanations.'    size=120/240 utilization=0.50 near_limit(0.80)=False version=4\nappend 'Wants concept breakdowns.'        size=146/240 utilization=0.61 near_limit(0.80)=False version=5\nappend 'Likes architecture diagrams.'     size=175/240 utilization=0.73 near_limit(0.80)=False version=6\n\n--- 5. Summarizing frees capacity, and the store does not write the summary itself ---\nutilization 0.73 -> 0.40, version -> 7\nthe caller supplied the summary text; the store only validated its size and applied it\n\n--- 6. Edge case: the newline separator costs one character ---\nremaining: 10\nappend exactly 'remaining' (10) characters   -> ValueError: Append would exceed limit for edge\nappend remaining - 1 (9) characters          -> ok\n\n--- 7. Genuinely checking what 'limit' measures ---\nEnglish  characters= 41 utf-8 bytes= 41 words=5\nKannada  characters= 60 utf-8 bytes=170 words=5\nthe limit counts Python characters, so it is a proxy: the same character budget costs very different token amounts per script\n\n--- 8. Why core memory is expensive (arithmetic) ---\na 2000-token block sent on 1000 calls = 2,000,000 tokens processed\nthe same fact stored once in an archive and fetched on 20 of those calls: 1,000 tokens (50-token record)"
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
    "headingEn": "Append Versus Replace, and the Invariant",
    "headingKn": "Append ಮತ್ತು Replace, ಹಾಗೂ ನಿಯಮ",
    "bodyEn": "Section 2 changes the database from SQLite to PostgreSQL both ways. Append leaves two \"Database:\" lines, a contradiction the model must resolve on every turn; replace leaves one. Section 3 shows the invariant len(value) <= limit holding: a duplicate label, an oversized initial value, an unknown label, missing text, a 300-character append and a growing replace are each refused with a specific error, and the human block's version stays at 1 after the failed writes, because nothing was committed.",
    "bodyKn": "ವಿಭಾಗ 2 ಡೇಟಾಬೇಸ್ ಅನ್ನು SQLite ನಿಂದ PostgreSQL ಗೆ ಎರಡೂ ರೀತಿಯಲ್ಲಿ ಬದಲಿಸುತ್ತದೆ. Append ಎರಡು \"Database:\" ಸಾಲು ಉಳಿಸುತ್ತದೆ, ಮಾದರಿ ಪ್ರತಿ ಸುತ್ತು ಪರಿಹರಿಸಬೇಕಾದ ವಿರೋಧ; replace ಒಂದನ್ನು ಉಳಿಸುತ್ತದೆ. ವಿಭಾಗ 3 len(value) <= limit ನಿಯಮ ಉಳಿಯುವುದನ್ನು ತೋರಿಸುತ್ತದೆ: ನಕಲು label, ತುಂಬಾ ದೊಡ್ಡ ಆರಂಭಿಕ ಮೌಲ್ಯ, ಅಜ್ಞಾತ label, ಕಾಣೆಯಾದ ಪಠ್ಯ, 300-ಅಕ್ಷರ append ಮತ್ತು ಬೆಳೆಯುವ replace ಪ್ರತಿಯೊಂದೂ ನಿರ್ದಿಷ್ಟ ದೋಷದೊಂದಿಗೆ ನಿರಾಕರಿಸಲ್ಪಡುತ್ತದೆ, ಮತ್ತು ವಿಫಲ ಬರವಣಿಗೆಗಳ ನಂತರ human block ನ version 1 ರಲ್ಲೇ ಉಳಿಯುತ್ತದೆ, ಏಕೆಂದರೆ ಏನೂ commit ಆಗಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Memory Pressure, Summaries and Cost",
    "headingKn": "ಮೆಮೊರಿ ಒತ್ತಡ, ಸಾರಾಂಶಗಳು ಮತ್ತು ವೆಚ್ಚ",
    "bodyEn": "Section 4 appends five notes: utilization climbs 0.28, 0.38, 0.50, 0.61, 0.73 and near_limit(0.80) never fires, so the threshold is a policy and 0.80 is not magic. Section 5 applies a summary: utilization drops from 0.73 to 0.40 and the version moves to 7, but the store only validated the size, the caller wrote the summary text. Section 8 shows why core is expensive: a 2,000-token block sent on 1,000 calls is 2,000,000 tokens, while the same fact fetched from an archive on 20 calls is 1,000.",
    "bodyKn": "ವಿಭಾಗ 4 ಐದು ಟಿಪ್ಪಣಿ ಸೇರಿಸುತ್ತದೆ: ಬಳಕೆ 0.28, 0.38, 0.50, 0.61, 0.73 ಕ್ಕೆ ಏರುತ್ತದೆ ಮತ್ತು near_limit(0.80) ಎಂದೂ ಚಲಿಸುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ಮಿತಿ ಒಂದು ನೀತಿ ಮತ್ತು 0.80 ಮಾಯಾಜಾಲವಲ್ಲ. ವಿಭಾಗ 5 ಸಾರಾಂಶ ಅನ್ವಯಿಸುತ್ತದೆ: ಬಳಕೆ 0.73 ರಿಂದ 0.40 ಕ್ಕೆ ಇಳಿಯುತ್ತದೆ ಮತ್ತು version 7 ಕ್ಕೆ ಹೋಗುತ್ತದೆ, ಆದರೆ store ಕೇವಲ ಗಾತ್ರ ಪರಿಶೀಲಿಸಿತು, ಸಾರಾಂಶ ಪಠ್ಯ ಬರೆದದ್ದು ಕರೆಯುವವರು. ವಿಭಾಗ 8 core ದುಬಾರಿ ಏಕೆ ಎಂದು ತೋರಿಸುತ್ತದೆ: 1,000 ಕರೆಗಳಲ್ಲಿ ಕಳುಹಿಸಿದ 2,000-token block 2,000,000 tokens, ಅದೇ ಸಂಗತಿ 20 ಕರೆಗಳಲ್ಲಿ archive ನಿಂದ ಪಡೆದರೆ 1,000."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Two Limits That Surprise",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಆಶ್ಚರ್ಯಕರ ಎರಡು ಮಿತಿಗಳು",
    "bodyEn": "Section 6: append joins the new text with a newline, so with 10 characters remaining an append of exactly 10 characters is refused and 9 succeeds. Section 7: the limit counts Python characters. The English sentence is 41 characters and 41 bytes; the Kannada sentence is 60 characters but 170 UTF-8 bytes. A character limit is therefore only a proxy for context cost, and the same budget buys very different token amounts per script, which matters on a bilingual platform.",
    "bodyKn": "ವಿಭಾಗ 6: append ಹೊಸ ಪಠ್ಯವನ್ನು newline ನೊಂದಿಗೆ ಜೋಡಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ 10 ಅಕ್ಷರ ಉಳಿದಿರುವಾಗ ಸರಿಯಾಗಿ 10 ಅಕ್ಷರದ append ನಿರಾಕರಿಸಲ್ಪಡುತ್ತದೆ ಮತ್ತು 9 ಯಶಸ್ವಿ. ವಿಭಾಗ 7: limit Python ಅಕ್ಷರಗಳನ್ನು ಎಣಿಸುತ್ತದೆ. ಇಂಗ್ಲಿಷ್ ವಾಕ್ಯ 41 ಅಕ್ಷರ ಮತ್ತು 41 bytes; ಕನ್ನಡ ವಾಕ್ಯ 60 ಅಕ್ಷರ ಆದರೆ 170 UTF-8 bytes. ಆದ್ದರಿಂದ ಅಕ್ಷರ ಮಿತಿ context ವೆಚ್ಚದ ಅಂದಾಜು ಮಾತ್ರ, ಮತ್ತು ಅದೇ budget ಪ್ರತಿ ಲಿಪಿಗೆ ಬೇರೆ ಬೇರೆ token ಪ್ರಮಾಣ ಕೊಡುತ್ತದೆ, ಇದು ದ್ವಿಭಾಷಾ ವೇದಿಕೆಯಲ್ಲಿ ಮುಖ್ಯ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "What Belongs in Each Block",
    "headingKn": "ಪ್ರತಿ Block ನಲ್ಲಿ ಏನು ಇರಬೇಕು",
    "bodyEn": "Ask whether a fact will repeatedly help future turns enough to justify permanent context space. Good for human: stable preferences, goals, role. Good for persona: role, tone, standing constraints. Good for project: language, database, deployment target. Good for task: the current objective and next step, replaced when it changes. Poor everywhere in core: whole transcripts, large documents, one-time details, raw tool output. Those belong in recall or archival.",
    "bodyKn": "ಒಂದು ಸಂಗತಿ ಶಾಶ್ವತ context ಸ್ಥಳವನ್ನು ಸಮರ್ಥಿಸುವಷ್ಟು ಭವಿಷ್ಯದ ಸುತ್ತುಗಳಿಗೆ ಪದೇ ಪದೇ ಸಹಾಯ ಮಾಡುತ್ತದೆಯೇ ಎಂದು ಕೇಳಿ. human ಗೆ ಒಳ್ಳೆಯದು: ಸ್ಥಿರ ಆದ್ಯತೆಗಳು, ಗುರಿಗಳು, ಪಾತ್ರ. persona ಗೆ: ಪಾತ್ರ, ಧಾಟಿ, ಸ್ಥಿರ ನಿರ್ಬಂಧಗಳು. project ಗೆ: ಭಾಷೆ, ಡೇಟಾಬೇಸ್, ನಿಯೋಜನೆ ಗುರಿ. task ಗೆ: ಪ್ರಸ್ತುತ ಉದ್ದೇಶ ಮತ್ತು ಮುಂದಿನ ಹೆಜ್ಜೆ, ಬದಲಾದಾಗ ಬದಲಿಸಲಾಗುತ್ತದೆ. core ನಲ್ಲಿ ಎಲ್ಲಿಯೂ ಸೂಕ್ತವಲ್ಲ: ಸಂಪೂರ್ಣ ಪ್ರತಿಲಿಪಿಗಳು, ದೊಡ್ಡ ದಾಖಲೆಗಳು, ಒಂದು ಬಾರಿಯ ವಿವರಗಳು, ಕಚ್ಚಾ tool output. ಅವು recall ಅಥವಾ archival ಗೆ ಸೇರಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A model call has no memory of its own, so everything it should know on this turn must be placed in the prompt. Blocks make the always-present part small, labelled, bounded and editable, so the agent can learn a preference once and carry it into every later session. Writable memory is also a risk: a model can store a wrong, duplicate or malicious fact, so writes need validation and policy.",
    "bodyKn": "ಮಾದರಿ ಕರೆಗೆ ಸ್ವಂತ ಮೆಮೊರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ಈ ಸುತ್ತಿನಲ್ಲಿ ಅದು ತಿಳಿಯಬೇಕಾದ ಎಲ್ಲವನ್ನೂ prompt ನಲ್ಲಿ ಇಡಬೇಕು. Blocks ಯಾವಾಗಲೂ ಇರುವ ಭಾಗವನ್ನು ಚಿಕ್ಕದಾಗಿ, ಲೇಬಲ್ ಮಾಡಿ, ಮಿತಿಯೊಳಗೆ ಮತ್ತು ಸಂಪಾದಿಸಬಹುದಾಗಿ ಮಾಡುತ್ತವೆ, ಆದ್ದರಿಂದ agent ಒಂದು ಆದ್ಯತೆಯನ್ನು ಒಮ್ಮೆ ಕಲಿತು ನಂತರದ ಪ್ರತಿ ಅವಧಿಗೆ ಒಯ್ಯಬಲ್ಲದು. ಬರೆಯಬಹುದಾದ ಮೆಮೊರಿ ಅಪಾಯವೂ ಹೌದು: ಮಾದರಿ ತಪ್ಪು, ನಕಲು ಅಥವಾ ದುರುದ್ದೇಶದ ಸಂಗತಿ ಸಂಗ್ರಹಿಸಬಹುದು, ಆದ್ದರಿಂದ ಬರವಣಿಗೆಗಳಿಗೆ ಮಾನ್ಯತೆ ಮತ್ತು ನೀತಿ ಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"core memory is permanent memory.\" Core means currently pinned into the prompt, not kept forever. The task block is expected to change often, and any block can be replaced or summarized.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"core ಮೆಮೊರಿ ಶಾಶ್ವತ ಮೆಮೊರಿ.\" Core ಎಂದರೆ ಸದ್ಯ prompt ನಲ್ಲಿ ಪಿನ್ ಮಾಡಿದ್ದು, ಶಾಶ್ವತವಾಗಿ ಇಡಲ್ಪಟ್ಟದ್ದಲ್ಲ. task block ಆಗಾಗ ಬದಲಾಗುವುದು ನಿರೀಕ್ಷಿತ, ಮತ್ತು ಯಾವುದೇ block ಅನ್ನು ಬದಲಿಸಬಹುದು ಅಥವಾ ಸಂಕ್ಷೇಪಿಸಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Core memory: always-visible state. Recall memory: retrievable conversation history. Archival memory: large external store. Memory block: typed, bounded, editable core segment. Block limit: its size cap. Block bloat: uncontrolled growth from repeated writes. Memory rot: stale, duplicated or contradictory content. Critical path: work that must finish before the user gets an answer.",
    "bodyKn": "Core ಮೆಮೊರಿ: ಯಾವಾಗಲೂ ಗೋಚರ ಸ್ಥಿತಿ. Recall ಮೆಮೊರಿ: ಪಡೆಯಬಹುದಾದ ಸಂಭಾಷಣೆ ಇತಿಹಾಸ. Archival ಮೆಮೊರಿ: ದೊಡ್ಡ ಬಾಹ್ಯ ಸಂಗ್ರಹ. Memory block: ಟೈಪ್ ಮಾಡಿದ, ಮಿತಿಯ, ಸಂಪಾದಿಸಬಹುದಾದ core ಭಾಗ. Block limit: ಅದರ ಗಾತ್ರ ಮಿತಿ. Block bloat: ಪದೇ ಪದೇ ಬರವಣಿಗೆಯಿಂದ ನಿಯಂತ್ರಣವಿಲ್ಲದ ಬೆಳವಣಿಗೆ. Memory rot: ಹಳೆಯ, ನಕಲು ಅಥವಾ ವಿರೋಧಿ ವಿಷಯ. Critical path: ಬಳಕೆದಾರ ಉತ್ತರ ಪಡೆಯುವ ಮೊದಲು ಮುಗಿಯಬೇಕಾದ ಕೆಲಸ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Split memory by visibility: core, recall, archival. 2) A block is typed, bounded and editable, and its description routes writes. 3) Validate before commit, so a failed write changes nothing. 4) Replace superseded facts instead of appending contradictions. 5) near_limit is a policy threshold. 6) The limit counts characters, which only approximates cost, and an append pays one character for the separator. 7) Core is the expensive tier. Part 2 adds recall, archival and the two agents.",
    "bodyKn": "1) ಮೆಮೊರಿಯನ್ನು ಗೋಚರತೆಯಿಂದ ವಿಭಜಿಸಿ: core, recall, archival. 2) Block ಟೈಪ್ ಮಾಡಿದ, ಮಿತಿಯ ಮತ್ತು ಸಂಪಾದಿಸಬಹುದಾದದ್ದು, ಮತ್ತು ಅದರ description ಬರವಣಿಗೆಗಳನ್ನು ದಾರಿ ಮಾಡುತ್ತದೆ. 3) Commit ಮೊದಲು ಮಾನ್ಯ ಮಾಡಿ, ಆಗ ವಿಫಲ ಬರವಣಿಗೆ ಏನನ್ನೂ ಬದಲಿಸುವುದಿಲ್ಲ. 4) ವಿರೋಧಗಳನ್ನು ಸೇರಿಸುವ ಬದಲು ಬದಲಿಸಿದ ಸಂಗತಿಗಳನ್ನು replace ಮಾಡಿ. 5) near_limit ನೀತಿ ಮಿತಿ. 6) Limit ಅಕ್ಷರ ಎಣಿಸುತ್ತದೆ, ಇದು ವೆಚ್ಚದ ಅಂದಾಜು ಮಾತ್ರ, ಮತ್ತು append ವಿಭಜಕಕ್ಕೆ ಒಂದು ಅಕ್ಷರ ತೆರುತ್ತದೆ. 7) Core ದುಬಾರಿ ಹಂತ. ಭಾಗ 2 recall, archival ಮತ್ತು ಎರಡು agents ಸೇರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which description of the three tiers is correct?",
      "qKn": "ಮೂರು ಹಂತಗಳ ಯಾವ ವಿವರಣೆ ಸರಿ?",
      "opts": [
       "Core is embeddings, recall is cache, archival is the prompt",
       "Core is always-visible memory, recall is conversation history, archival is external long-term information",
       "Core is the database, recall is model weights, archival is the KV cache",
       "Core is user memory, recall is persona, archival is the system prompt"
      ],
      "optsKn": [
       "Core embeddings, recall cache, archival prompt",
       "Core ಯಾವಾಗಲೂ ಗೋಚರ ಮೆಮೊರಿ, recall ಸಂಭಾಷಣೆ ಇತಿಹಾಸ, archival ಬಾಹ್ಯ ದೀರ್ಘಕಾಲದ ಮಾಹಿತಿ",
       "Core ಡೇಟಾಬೇಸ್, recall ಮಾದರಿ weights, archival KV cache",
       "Core ಬಳಕೆದಾರ ಮೆಮೊರಿ, recall persona, archival system prompt"
      ],
      "correct": 1
     },
     {
      "q": "Why does a block have a limit?",
      "qKn": "Block ಗೆ ಮಿತಿ ಏಕೆ?",
      "opts": [
       "To limit database connections",
       "To control temperature",
       "So core memory cannot grow without bound and consume the context window",
       "To limit users"
      ],
      "optsKn": [
       "ಡೇಟಾಬೇಸ್ connections ಮಿತಿಗೊಳಿಸಲು",
       "Temperature ನಿಯಂತ್ರಿಸಲು",
       "Core ಮೆಮೊರಿ ಮಿತಿಯಿಲ್ಲದೆ ಬೆಳೆದು context window ಬಳಸದಂತೆ",
       "ಬಳಕೆದಾರರನ್ನು ಮಿತಿಗೊಳಿಸಲು"
      ],
      "correct": 2
     },
     {
      "q": "The project block says Database: SQLite but the project moved to PostgreSQL. Which operation is right, and what did the run show for the alternative?",
      "qKn": "Project block \"Database: SQLite\" ಎನ್ನುತ್ತದೆ ಆದರೆ ಪ್ರಾಜೆಕ್ಟ್ PostgreSQL ಗೆ ಹೋಗಿದೆ. ಯಾವ ಕಾರ್ಯಾಚರಣೆ ಸರಿ, ಮತ್ತು ಪರ್ಯಾಯಕ್ಕೆ ಓಟ ಏನು ತೋರಿಸಿತು?",
      "opts": [
       "block_append, which left one Database line",
       "block_replace; append left two Database lines, a contradiction",
       "block_read; it fixes the value",
       "Create a second persona block"
      ],
      "optsKn": [
       "block_append, ಒಂದು Database ಸಾಲು ಉಳಿಸಿತು",
       "block_replace; append ಎರಡು Database ಸಾಲು ಉಳಿಸಿತು, ಒಂದು ವಿರೋಧ",
       "block_read; ಅದು ಮೌಲ್ಯ ಸರಿಪಡಿಸುತ್ತದೆ",
       "ಎರಡನೇ persona block ರಚಿಸಿ"
      ],
      "correct": 1
     },
     {
      "q": "With 10 characters remaining in a block, why was appending exactly 10 characters refused?",
      "qKn": "Block ನಲ್ಲಿ 10 ಅಕ್ಷರ ಉಳಿದಿರುವಾಗ ಸರಿಯಾಗಿ 10 ಅಕ್ಷರ append ಏಕೆ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು?",
      "opts": [
       "Ten is a reserved number",
       "The newline separator costs one character, so only 9 fit",
       "Appends are limited to 9 characters",
       "The block was read-only"
      ],
      "optsKn": [
       "ಹತ್ತು ಕಾಯ್ದಿರಿಸಿದ ಸಂಖ್ಯೆ",
       "Newline ವಿಭಜಕ ಒಂದು ಅಕ್ಷರ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ, ಆದ್ದರಿಂದ 9 ಮಾತ್ರ ಹೊಂದುತ್ತದೆ",
       "Append ಗಳು 9 ಅಕ್ಷರಕ್ಕೆ ಮಿತಿ",
       "Block ಓದಲು ಮಾತ್ರವಿತ್ತು"
      ],
      "correct": 1
     },
     {
      "q": "Why is core memory expensive compared with archival memory?",
      "qKn": "Archival ಮೆಮೊರಿಗೆ ಹೋಲಿಸಿದರೆ core ಮೆಮೊರಿ ದುಬಾರಿ ಏಕೆ?",
      "opts": [
       "It needs a vector database",
       "It is included in the model context on every call, consuming capacity each time",
       "It needs GPU training",
       "It cannot hold strings"
      ],
      "optsKn": [
       "ಅದಕ್ಕೆ vector ಡೇಟಾಬೇಸ್ ಬೇಕು",
       "ಅದು ಪ್ರತಿ ಕರೆಯಲ್ಲಿ ಮಾದರಿ context ನಲ್ಲಿ ಸೇರುತ್ತದೆ, ಪ್ರತಿ ಬಾರಿ ಸಾಮರ್ಥ್ಯ ಬಳಸುತ್ತದೆ",
       "ಅದಕ್ಕೆ GPU ತರಬೇತಿ ಬೇಕು",
       "ಅದು ಸ್ಟ್ರಿಂಗ್ ಹಿಡಿಯಲಾರದು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
