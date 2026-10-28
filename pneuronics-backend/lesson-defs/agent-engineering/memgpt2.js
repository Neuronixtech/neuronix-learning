module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6066020ed05b321520",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Agent Memory: Virtual Context and Memory Paging (Part 2 of 3) — The Archive, Memory Tools and the Interrupt",
 "titleKn": "Agent Memory: Virtual Context ಮತ್ತು Memory Paging (ಭಾಗ 2 / 3) — Archive, ಮೆಮೊರಿ Tools ಮತ್ತು Interrupt",
 "desc": "Build the archival tier with provenance, the five memory tools and token-overlap search, run the interrupt end to end, and find three distinct ways lexical retrieval fails: paraphrase, stopword noise and Kannada.",
 "descKn": "Provenance ಇರುವ archival ಹಂತ, ಐದು ಮೆಮೊರಿ tools ಮತ್ತು token-ಅತಿಕ್ರಮಣ ಹುಡುಕಾಟ ನಿರ್ಮಿಸಿ, interrupt ಅನ್ನು ಆರಂಭದಿಂದ ಅಂತ್ಯದವರೆಗೆ ಚಲಾಯಿಸಿ, ಮತ್ತು lexical ಪಡೆಯುವಿಕೆ ವಿಫಲವಾಗುವ ಮೂರು ವಿಭಿನ್ನ ರೀತಿ ಕಂಡುಹಿಡಿಯಿರಿ: ಪರ್ಯಾಯ ಪದಗುಚ್ಛ, stopword ಗದ್ದಲ ಮತ್ತು ಕನ್ನಡ.",
 "objectives": [
  "Represent a memory as content plus provenance and build an ArchivalStore with insert and search.",
  "Implement and distinguish the five memory tools.",
  "Explain how token-overlap scoring and tag bonuses rank records.",
  "Run the interrupt pattern from question to answer and explain why the result must enter the context.",
  "Recognise where lexical retrieval fails and why production systems use richer retrieval."
 ],
 "objectivesKn": [
  "ಮೆಮೊರಿಯನ್ನು ವಿಷಯ ಜೊತೆ ಮೂಲ ಎಂದು ನಿರೂಪಿಸಿ ಮತ್ತು insert ಹಾಗೂ search ಇರುವ ArchivalStore ನಿರ್ಮಿಸಿ.",
  "ಐದು ಮೆಮೊರಿ tools ಅಳವಡಿಸಿ ಮತ್ತು ಬೇರ್ಪಡಿಸಿ.",
  "Token-ಅತಿಕ್ರಮಣ ಅಂಕ ಮತ್ತು tag ಬೋನಸ್ ದಾಖಲೆಗಳನ್ನು ಹೇಗೆ ಶ್ರೇಣೀಕರಿಸುತ್ತವೆ ಎಂದು ವಿವರಿಸಿ.",
  "ಪ್ರಶ್ನೆಯಿಂದ ಉತ್ತರದವರೆಗೆ interrupt ಮಾದರಿ ಚಲಾಯಿಸಿ ಮತ್ತು ಫಲಿತಾಂಶ context ಪ್ರವೇಶಿಸಬೇಕು ಏಕೆ ಎಂದು ವಿವರಿಸಿ.",
  "Lexical ಪಡೆಯುವಿಕೆ ಎಲ್ಲಿ ವಿಫಲವಾಗುತ್ತದೆ ಮತ್ತು production ವ್ಯವಸ್ಥೆಗಳು ಶ್ರೀಮಂತ ಪಡೆಯುವಿಕೆ ಏಕೆ ಬಳಸುತ್ತವೆ ಎಂದು ಗುರುತಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Agent Memory: Virtual Context and Memory Paging (Part 2 of 3)",
    "textKn": "Agent Memory: Virtual Context ಮತ್ತು Memory Paging (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: the archival store, the five memory tools, token-overlap search and the interrupt pattern. Every output was genuinely produced by memgpt_2.py (built on memgpt_1.py) on Python 3.14.5. Record ids are random per run, so the ids you see differ from any other run. The retrieval is deliberately lexical, so it shows the mechanism and its limits and not the quality of production retrieval. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ ಎರಡನೆಯದು: archival ಸಂಗ್ರಹ, ಐದು ಮೆಮೊರಿ tools, token-ಅತಿಕ್ರಮಣ ಹುಡುಕಾಟ ಮತ್ತು interrupt ಮಾದರಿ. ಎಲ್ಲಾ output memgpt_2.py (memgpt_1.py ಮೇಲೆ ನಿರ್ಮಿತ) ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ದಾಖಲೆ ids ಪ್ರತಿ ಓಟಕ್ಕೆ ಯಾದೃಚ್ಛಿಕ, ಆದ್ದರಿಂದ ನೀವು ನೋಡುವ ids ಇನ್ನೊಂದು ಓಟಕ್ಕಿಂತ ಬೇರೆ. ಪಡೆಯುವಿಕೆ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಪದ-ಆಧಾರಿತ, ಆದ್ದರಿಂದ ಅದು ಕಾರ್ಯವಿಧಾನ ಮತ್ತು ಅದರ ಮಿತಿಗಳನ್ನು ತೋರಿಸುತ್ತದೆ, production ಪಡೆಯುವಿಕೆಯ ಗುಣಮಟ್ಟವನ್ನಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Second Tier",
    "textKn": "ಎರಡನೇ ಹಂತ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Memory = Content + Provenance",
    "headingKn": "ಮೆಮೊರಿ = ವಿಷಯ + ಮೂಲ",
    "bodyEn": "A MemoryRecord is not only text. It has an id (to update, invalidate or cite it), the text, tags (lightweight retrieval metadata), a session and a turn (provenance). Without provenance a recalled \"Ship the prototype Friday.\" cannot answer \"when did I say that\", which is citation loss. The ArchivalStore here is an in-memory list: architecturally it is a separate tier, and its backing could later be SQLite, a vector database or a graph without changing the agent-facing tools.",
    "bodyKn": "MemoryRecord ಕೇವಲ ಪಠ್ಯವಲ್ಲ. ಅದಕ್ಕೆ id (ನವೀಕರಿಸಲು, ಅಮಾನ್ಯಗೊಳಿಸಲು ಅಥವಾ ಉಲ್ಲೇಖಿಸಲು), ಪಠ್ಯ, tags (ಹಗುರ ಪಡೆಯುವಿಕೆ ಮೆಟಾಡೇಟಾ), ಮತ್ತು session ಹಾಗೂ turn (ಮೂಲ) ಇವೆ. ಮೂಲ ಇಲ್ಲದಿದ್ದರೆ ನೆನಪಿಸಿಕೊಂಡ \"Ship the prototype Friday.\" \"ಅದನ್ನು ನಾನು ಯಾವಾಗ ಹೇಳಿದೆ\" ಎಂಬುದಕ್ಕೆ ಉತ್ತರಿಸಲಾರದು, ಇದೇ ಉಲ್ಲೇಖ ನಷ್ಟ. ಇಲ್ಲಿನ ArchivalStore ಮೆಮೊರಿಯಲ್ಲಿನ ಪಟ್ಟಿ: ವಿನ್ಯಾಸದಲ್ಲಿ ಅದು ಪ್ರತ್ಯೇಕ ಹಂತ, ಮತ್ತು agent-ಮುಖದ tools ಬದಲಾಗದೆ ಅದರ ಆಧಾರ ನಂತರ SQLite, vector ಡೇಟಾಬೇಸ್ ಅಥವಾ graph ಆಗಬಹುದು."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Memory Interrupt",
    "headingKn": "ಮೆಮೊರಿ Interrupt",
    "svgCode": "<svg viewBox=\"0 0 300 215\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"215\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">The memory interrupt (a page fault for an agent)</text>\n  <rect x=\"40\" y=\"22\" width=\"220\" height=\"20\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"35\" fill=\"#93c5fd\" text-anchor=\"middle\">USER: Who owns the evaluation pipeline?</text>\n  <path d=\"M150,42 V52\" stroke=\"#475569\"/>\n  <rect x=\"40\" y=\"54\" width=\"220\" height=\"20\" rx=\"4\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"67\" fill=\"#fecaca\" text-anchor=\"middle\">answer not in main context: MISS</text>\n  <path d=\"M150,74 V84\" stroke=\"#475569\"/>\n  <rect x=\"40\" y=\"86\" width=\"220\" height=\"20\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"99\" fill=\"#6ee7b7\" text-anchor=\"middle\">INTERRUPT: archival_memory_search(query)</text>\n  <path d=\"M150,106 V116\" stroke=\"#475569\"/>\n  <rect x=\"40\" y=\"118\" width=\"220\" height=\"20\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"131\" fill=\"#c4b5fd\" text-anchor=\"middle\">runtime searches the archive, returns text + source</text>\n  <path d=\"M150,138 V148\" stroke=\"#475569\"/>\n  <rect x=\"40\" y=\"150\" width=\"220\" height=\"20\" rx=\"4\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"163\" fill=\"#fde68a\" text-anchor=\"middle\">splice the tool result into MainContext</text>\n  <path d=\"M150,170 V180\" stroke=\"#475569\"/>\n  <rect x=\"40\" y=\"182\" width=\"220\" height=\"20\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"195\" fill=\"#93c5fd\" text-anchor=\"middle\">model continues with the fact visible: ANSWER</text>\n</svg>",
    "captionEn": "The question misses main context, the model requests a memory tool, the runtime searches the archive, and the result is spliced into context.",
    "captionKn": "ಪ್ರಶ್ನೆ main context ತಪ್ಪಿಸುತ್ತದೆ, ಮಾದರಿ ಮೆಮೊರಿ tool ಕೇಳುತ್ತದೆ, runtime archive ಹುಡುಕುತ್ತದೆ, ಮತ್ತು ಫಲಿತಾಂಶ context ಗೆ ಸೇರಿಸಲಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The five memory tools",
    "headingKn": "ಐದು ಮೆಮೊರಿ tools",
    "headers": [
     "Tool",
     "Direction",
     "Purpose"
    ],
    "rows": [
     [
      "core_memory_append",
      "into the prompt",
      "Add stable, frequently needed information to a pinned section"
     ],
     [
      "core_memory_replace",
      "inside the prompt",
      "Update a pinned fact instead of piling up contradictions"
     ],
     [
      "archival_memory_insert",
      "page out",
      "Persist information outside the window"
     ],
     [
      "archival_memory_search",
      "page in (the lookup half)",
      "Retrieve relevant records back toward the window"
     ],
     [
      "conversation_search",
      "inside the window",
      "Search the messages still retained"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Archive and the Tools",
    "textKn": "Archive ಮತ್ತು Tools ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "memgpt_2.py",
    "headingEn": "MemoryRecord, ArchivalStore and MemoryTools",
    "headingKn": "MemoryRecord, ArchivalStore ಮತ್ತು MemoryTools",
    "descEn": "insert() creates a record with a short random id. search() tokenizes the query, scores each record by the size of the word overlap plus one point per tag found in the query, drops zero scores, sorts by score and returns the top_k. MemoryTools exposes the five operations to the agent. The search tool formats results as \"[id] text (source=session:turn)\", so provenance travels with the memory.",
    "descKn": "insert() ಚಿಕ್ಕ ಯಾದೃಚ್ಛಿಕ id ಇರುವ ದಾಖಲೆ ರಚಿಸುತ್ತದೆ. search() query ಅನ್ನು tokenize ಮಾಡಿ, ಪ್ರತಿ ದಾಖಲೆಗೆ ಪದ ಅತಿಕ್ರಮಣ ಗಾತ್ರ ಜೊತೆಗೆ query ಯಲ್ಲಿ ಕಂಡ ಪ್ರತಿ tag ಗೆ ಒಂದು ಅಂಕದಿಂದ ಅಂಕ ನೀಡಿ, ಸೊನ್ನೆ ಅಂಕಗಳನ್ನು ಬಿಟ್ಟು, ಅಂಕದ ಪ್ರಕಾರ ವಿಂಗಡಿಸಿ ಅಗ್ರ top_k ಹಿಂತಿರುಗಿಸುತ್ತದೆ. MemoryTools ಐದು ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು agent ಗೆ ಒದಗಿಸುತ್ತದೆ. ಹುಡುಕಾಟ tool ಫಲಿತಾಂಶಗಳನ್ನು \"[id] text (source=session:turn)\" ಎಂದು ರೂಪಿಸುತ್ತದೆ, ಹಾಗಾಗಿ ಮೂಲ ಮೆಮೊರಿಯೊಂದಿಗೆ ಪ್ರಯಾಣಿಸುತ್ತದೆ.",
    "code": "@dataclass\nclass MemoryRecord:\n    id: str\n    text: str\n    tags: List[str]\n    session: str\n    turn: int\n\n\nclass ArchivalStore:\n    def __init__(self):\n        self.records: List[MemoryRecord] = []\n\n    def insert(self, text: str, tags: Optional[List[str]] = None, session: str = \"default\", turn: int = 0) -> MemoryRecord:\n        record = MemoryRecord(id=str(uuid.uuid4())[:8], text=text, tags=tags or [], session=session, turn=turn)\n        self.records.append(record)\n        return record\n\n    def search(self, query: str, top_k: int = 3) -> List[MemoryRecord]:\n        query_tokens = set(tokenize(query))\n        scored = []\n        for record in self.records:\n            record_tokens = set(tokenize(record.text))\n            overlap = len(query_tokens & record_tokens)\n            tag_bonus = sum(1 for tag in record.tags if tag.lower() in query.lower())\n            score = overlap + tag_bonus\n            if score > 0:\n                scored.append((score, record))\n        scored.sort(key=lambda item: item[0], reverse=True)\n        return [record for _, record in scored[:top_k]]\n\n    def explain(self, query: str):\n        qt = set(tokenize(query))\n        rows = []\n        for r in self.records:\n            overlap = sorted(qt & set(tokenize(r.text)))\n            bonus = [t for t in r.tags if t.lower() in query.lower()]\n            rows.append((len(overlap) + len(bonus), overlap, bonus, r.text))\n        return sorted(rows, key=lambda x: -x[0])\n\n\nclass MemoryTools:\n    def __init__(self, main: MainContext, archival: ArchivalStore):\n        self.main = main\n        self.archival = archival\n\n    def core_memory_append(self, section: str, text: str) -> str:\n        current = self.main.core.get(section, \"\")\n        if current:\n            current += \"\\n\"\n        self.main.core[section] = current + text\n        self.main.compact()\n        return f\"Appended to core memory section '{section}'.\"\n\n    def core_memory_replace(self, section: str, old: str, new: str) -> str:\n        current = self.main.core.get(section)\n        if current is None:\n            return f\"Core section '{section}' does not exist.\"\n        if old not in current:\n            return f\"Text to replace was not found in '{section}'.\"\n        self.main.core[section] = current.replace(old, new, 1)\n        self.main.compact()\n        return f\"Updated core memory section '{section}'.\"\n\n    def archival_memory_insert(self, text: str, tags: Optional[List[str]] = None, session: str = \"default\", turn: int = 0) -> str:\n        record = self.archival.insert(text=text, tags=tags, session=session, turn=turn)\n        return f\"Stored archival memory {record.id}.\"\n\n    def archival_memory_search(self, query: str, top_k: int = 3) -> str:\n        results = self.archival.search(query, top_k)\n        if not results:\n            return \"No archival memories found.\"\n        return \"\\n\".join(f\"[{r.id}] {r.text} (source={r.session}:{r.turn})\" for r in results)\n\n    def conversation_search(self, query: str) -> str:\n        qt = set(tokenize(query))\n        matches = []\n        for index, message in enumerate(self.main.messages):\n            if qt & set(tokenize(message[\"content\"])):\n                matches.append(f\"turn={index} role={message['role']} text={message['content']}\")\n        if not matches:\n            return \"No matching conversation messages found.\"\n        return \"\\n\".join(matches)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "memgpt_2.py",
    "headingEn": "main(): eight experiments",
    "headingKn": "main(): ಎಂಟು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() archives three facts, explains the scoring term by term, searches, probes where lexical search fails, exercises core append and replace, shows conversation_search, runs the full interrupt, and checks that retrieval alone does not reach the model.",
    "descKn": "main() ಮೂರು ಸಂಗತಿಗಳನ್ನು archive ಮಾಡುತ್ತದೆ, ಅಂಕ ನೀಡುವಿಕೆಯನ್ನು ಪದ ಪದವಾಗಿ ವಿವರಿಸುತ್ತದೆ, ಹುಡುಕುತ್ತದೆ, ಪದ-ಹುಡುಕಾಟ ವಿಫಲವಾಗುವಲ್ಲಿ ಪರೀಕ್ಷಿಸುತ್ತದೆ, core append ಮತ್ತು replace ಪರೀಕ್ಷಿಸುತ್ತದೆ, conversation_search ತೋರಿಸುತ್ತದೆ, ಸಂಪೂರ್ಣ interrupt ಚಲಾಯಿಸುತ್ತದೆ, ಮತ್ತು ಪಡೆಯುವಿಕೆ ಮಾತ್ರ ಮಾದರಿಯನ್ನು ತಲುಪುವುದಿಲ್ಲ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    "code": "def main():\n    store = ArchivalStore()\n    main_ctx = MainContext(max_tokens=100)\n    tools = MemoryTools(main_ctx, store)\n\n    section(\"1. Page out: three facts into the archive (ids are random per run)\")\n    facts = [(\"Alice owns the evaluation pipeline.\", [\"people\", \"evaluation\"]),\n             (\"The Orion prototype deadline is October 20.\", [\"deadline\", \"orion\"]),\n             (\"The baseline benchmark scored 82 percent.\", [\"benchmark\", \"baseline\"])]\n    for turn, (text, tags) in enumerate(facts, start=1):\n        print(tools.archival_memory_insert(text=text, tags=tags, session=\"session-001\", turn=turn))\n\n    section(\"2. Search scoring, shown term by term for 'evaluation pipeline owner'\")\n    for score, overlap, bonus, text in store.explain(\"evaluation pipeline owner\"):\n        print(f\"score={score} overlap={overlap} tag_bonus={bonus} :: {text}\")\n\n    section(\"3. Page in: the search tool returns text with provenance\")\n    print(tools.archival_memory_search(\"evaluation pipeline owner\", top_k=2))\n\n    section(\"4. Where lexical search fails\")\n    for q in (\"Who handles model testing?\", \"who is responsible for QA\", \"ಮೌಲ್ಯಮಾಪನ ಪೈಪ್‌ಲೈನ್ ಯಾರದು?\", \"the\", \"of the\"):\n        res = tools.archival_memory_search(q, top_k=3)\n        print(f\"query {q!r:<36} -> {res if res.startswith('No') else res.splitlines()}\")\n\n    section(\"5. Core memory: append and replace\")\n    print(tools.core_memory_append(\"project\", \"The active project is Orion.\"))\n    print(tools.core_memory_append(\"project\", \"The prototype deadline is October 20.\"))\n    print(main_ctx.core_text())\n    print(tools.core_memory_replace(\"project\", \"October 20\", \"October 28\"))\n    print(main_ctx.core_text())\n    print(tools.core_memory_replace(\"project\", \"Bangalore\", \"Mysore\"))\n    print(tools.core_memory_replace(\"missing\", \"a\", \"b\"))\n\n    section(\"6. conversation_search sees only what is still in the window\")\n    main_ctx.add_message(\"user\", \"We need wheel slip logging.\")\n    main_ctx.add_message(\"assistant\", \"I'll include wheel slip logging.\")\n    print(tools.conversation_search(\"wheel slip\"))\n    print(\"a term that was never said:\", tools.conversation_search(\"zebra crossing\"))\n\n    section(\"7. The interrupt: question, miss, search, splice, answer\")\n    q = \"Who owns the evaluation pipeline?\"\n    main_ctx.add_message(\"user\", q)\n    print(\"USER:\", q)\n    print(\"conversation_search for the answer:\", tools.conversation_search(\"owns evaluation pipeline\").replace(\"\\n\", \" | \")[:100])\n    print(\"   (it finds only the question itself, which contains the same words; it is not an answer)\")\n    print(\"[INTERRUPT] archival_memory_search\")\n    result = tools.archival_memory_search(\"evaluation pipeline owner\", top_k=2)\n    print(\"[TOOL RESULT]\", result)\n    main_ctx.add_message(\"tool\", result)\n    main_ctx.add_message(\"assistant\", \"Alice owns the evaluation pipeline.\")\n    print(\"\\nmain context after the page-in:\")\n    print(main_ctx.render())\n\n    section(\"8. Retrieval without context integration changes nothing\")\n    probe = MainContext(max_tokens=100)\n    r2 = MemoryTools(probe, store).archival_memory_search(\"evaluation owner\")\n    print(\"runtime holds the answer:\", \"Alice\" in r2, \"| the model-visible context contains it:\", \"Alice\" in probe.render())"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Page out: three facts into the archive (ids are random per run) ---\nStored archival memory e1527a53.\nStored archival memory 86cdca68.\nStored archival memory 4f5da50d.\n\n--- 2. Search scoring, shown term by term for 'evaluation pipeline owner' ---\nscore=3 overlap=['evaluation', 'pipeline'] tag_bonus=['evaluation'] :: Alice owns the evaluation pipeline.\nscore=0 overlap=[] tag_bonus=[] :: The Orion prototype deadline is October 20.\nscore=0 overlap=[] tag_bonus=[] :: The baseline benchmark scored 82 percent.\n\n--- 3. Page in: the search tool returns text with provenance ---\n[e1527a53] Alice owns the evaluation pipeline. (source=session-001:1)\n\n--- 4. Where lexical search fails ---\nquery 'Who handles model testing?'         -> No archival memories found.\nquery 'who is responsible for QA'          -> ['[86cdca68] The Orion prototype deadline is October 20. (source=session-001:2)']\nquery 'ಮೌಲ್ಯಮಾಪನ ಪೈಪ್\\u200cಲೈನ್ ಯಾರದು?'    -> No archival memories found.\nquery 'the'                                -> ['[e1527a53] Alice owns the evaluation pipeline. (source=session-001:1)', '[86cdca68] The Orion prototype deadline is October 20. (source=session-001:2)', '[4f5da50d] The baseline benchmark scored 82 percent. (source=session-001:3)']\nquery 'of the'                             -> ['[e1527a53] Alice owns the evaluation pipeline. (source=session-001:1)', '[86cdca68] The Orion prototype deadline is October 20. (source=session-001:2)', '[4f5da50d] The baseline benchmark scored 82 percent. (source=session-001:3)']\n\n--- 5. Core memory: append and replace ---\nAppended to core memory section 'project'.\nAppended to core memory section 'project'.\n[CORE:project] The active project is Orion.\nThe prototype deadline is October 20.\nUpdated core memory section 'project'.\n[CORE:project] The active project is Orion.\nThe prototype deadline is October 28.\nText to replace was not found in 'project'.\nCore section 'missing' does not exist.\n\n--- 6. conversation_search sees only what is still in the window ---\nturn=0 role=user text=We need wheel slip logging.\nturn=1 role=assistant text=I'll include wheel slip logging.\na term that was never said: No matching conversation messages found.\n\n--- 7. The interrupt: question, miss, search, splice, answer ---\nUSER: Who owns the evaluation pipeline?\nconversation_search for the answer: turn=2 role=user text=Who owns the evaluation pipeline?\n   (it finds only the question itself, which contains the same words; it is not an answer)\n[INTERRUPT] archival_memory_search\n[TOOL RESULT] [e1527a53] Alice owns the evaluation pipeline. (source=session-001:1)\n\nmain context after the page-in:\n[CORE:project] The active project is Orion.\nThe prototype deadline is October 28.\n\nUSER: We need wheel slip logging.\nASSISTANT: I'll include wheel slip logging.\nUSER: Who owns the evaluation pipeline?\nTOOL: [e1527a53] Alice owns the evaluation pipeline. (source=session-001:1)\nASSISTANT: Alice owns the evaluation pipeline.\n\n--- 8. Retrieval without context integration changes nothing ---\nruntime holds the answer: True | the model-visible context contains it: False"
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
    "headingEn": "Search Scoring, Term by Term",
    "headingKn": "ಹುಡುಕಾಟ ಅಂಕ ನೀಡುವಿಕೆ, ಪದ ಪದವಾಗಿ",
    "bodyEn": "Section 2 explains \"evaluation pipeline owner\". The Alice record shares the words \"evaluation\" and \"pipeline\" with the query (overlap 2) and carries the tag \"evaluation\" which appears in the query (bonus 1), for a score of 3. The other two records score 0 and are dropped. Section 3 returns the one hit with its provenance, \"(source=session-001:1)\". This is the page-in half: external storage turned into a few relevant lines instead of the whole archive.",
    "bodyKn": "ವಿಭಾಗ 2 \"evaluation pipeline owner\" ವಿವರಿಸುತ್ತದೆ. Alice ದಾಖಲೆ query ಯೊಂದಿಗೆ \"evaluation\" ಮತ್ತು \"pipeline\" ಪದಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತದೆ (ಅತಿಕ್ರಮಣ 2) ಮತ್ತು query ಯಲ್ಲಿ ಕಾಣುವ tag \"evaluation\" ಹೊಂದಿದೆ (ಬೋನಸ್ 1), ಅಂದರೆ ಅಂಕ 3. ಉಳಿದ ಎರಡು ದಾಖಲೆಗಳು 0 ಪಡೆದು ಬಿಡಲ್ಪಡುತ್ತವೆ. ವಿಭಾಗ 3 ಒಂದು ಹಿಟ್ ಅನ್ನು ಅದರ ಮೂಲ \"(source=session-001:1)\" ಜೊತೆ ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ಇದು page-in ಅರ್ಧ: ಇಡೀ archive ಬದಲು ಬಾಹ್ಯ ಸಂಗ್ರಹ ಕೆಲವು ಸಂಬಂಧಿತ ಸಾಲುಗಳಾಗಿ ಪರಿವರ್ತನೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Lexical Search Fails in Three Different Ways",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Lexical Search ಮೂರು ರೀತಿ ವಿಫಲವಾಗುತ್ತದೆ",
    "bodyEn": "Section 4 probes it. A paraphrase fails: \"Who handles model testing?\" shares no word with \"Alice owns the evaluation pipeline\" and returns nothing, although the meaning is related. A stopword causes a wrong hit: \"who is responsible for QA\" returns the Orion deadline record, because the word \"is\" appears in \"The Orion prototype deadline is October 20\"; the retrieved memory has nothing to do with the question. A stopword also matches everything: \"the\" and \"of the\" return all three records. And a Kannada query, \"ಮೌಲ್ಯಮಾಪನ ಪೈಪ್‌ಲೈನ್ ಯಾರದು?\", returns nothing, because the tokenizer sees no Latin letters, so a bilingual platform needs a retrieval method that handles every script. Production systems use embeddings, BM25, metadata filters and rerankers for exactly these reasons.",
    "bodyKn": "ವಿಭಾಗ 4 ಅದನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ. ಪರ್ಯಾಯ ಪದಗುಚ್ಛ ವಿಫಲ: \"Who handles model testing?\" \"Alice owns the evaluation pipeline\" ನೊಂದಿಗೆ ಯಾವ ಪದವನ್ನೂ ಹಂಚಿಕೊಳ್ಳುವುದಿಲ್ಲ ಮತ್ತು ಏನನ್ನೂ ಹಿಂತಿರುಗಿಸುವುದಿಲ್ಲ, ಅರ್ಥ ಸಂಬಂಧಿತವಾದರೂ. Stopword ತಪ್ಪು ಹಿಟ್ ಉಂಟುಮಾಡುತ್ತದೆ: \"who is responsible for QA\" Orion ಗಡುವು ದಾಖಲೆ ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಏಕೆಂದರೆ \"is\" ಪದ \"The Orion prototype deadline is October 20\" ನಲ್ಲಿ ಇದೆ; ಪಡೆದ ಮೆಮೊರಿಗೆ ಪ್ರಶ್ನೆಯೊಂದಿಗೆ ಏನೂ ಸಂಬಂಧವಿಲ್ಲ. Stopword ಎಲ್ಲವನ್ನೂ ಹೊಂದಿಸುತ್ತದೆ: \"the\" ಮತ್ತು \"of the\" ಮೂರೂ ದಾಖಲೆಗಳನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತವೆ. ಮತ್ತು ಕನ್ನಡ query, \"ಮೌಲ್ಯಮಾಪನ ಪೈಪ್‌ಲೈನ್ ಯಾರದು?\", ಏನನ್ನೂ ಹಿಂತಿರುಗಿಸುವುದಿಲ್ಲ, ಏಕೆಂದರೆ tokenizer ಗೆ ಲ್ಯಾಟಿನ್ ಅಕ್ಷರಗಳು ಕಾಣುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ದ್ವಿಭಾಷಾ ವೇದಿಕೆಗೆ ಪ್ರತಿ ಲಿಪಿಯನ್ನೂ ನಿರ್ವಹಿಸುವ ಪಡೆಯುವಿಕೆ ವಿಧಾನ ಬೇಕು. Production ವ್ಯವಸ್ಥೆಗಳು ಇದೇ ಕಾರಣಗಳಿಗಾಗಿ embeddings, BM25, ಮೆಟಾಡೇಟಾ ಫಿಲ್ಟರ್‌ಗಳು ಮತ್ತು reranker ಬಳಸುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Core Memory: Append, Replace and Honest Errors",
    "headingKn": "Core ಮೆಮೊರಿ: Append, Replace ಮತ್ತು ಪ್ರಾಮಾಣಿಕ ದೋಷಗಳು",
    "bodyEn": "Section 5 appends two lines to the \"project\" section, then replaces \"October 20\" with \"October 28\", so the pinned fact is updated instead of contradicting itself. A replace of text that is not there returns \"Text to replace was not found in 'project'.\" and a replace on a missing section returns \"Core section 'missing' does not exist.\" Both are observations, not exceptions, as in the earlier modules. Each core change calls compact(), because pinning more leaves less room for messages. Memory needs update and invalidate, not just create and read.",
    "bodyKn": "ವಿಭಾಗ 5 \"project\" ವಿಭಾಗಕ್ಕೆ ಎರಡು ಸಾಲು ಸೇರಿಸಿ, ನಂತರ \"October 20\" ಅನ್ನು \"October 28\" ಆಗಿ ಬದಲಿಸುತ್ತದೆ, ಹಾಗಾಗಿ ಪಿನ್ ಮಾಡಿದ ಸಂಗತಿ ತನ್ನನ್ನೇ ವಿರೋಧಿಸದೆ ನವೀಕರಿಸಲ್ಪಡುತ್ತದೆ. ಇಲ್ಲದ ಪಠ್ಯದ replace \"Text to replace was not found in 'project'.\" ಹಿಂತಿರುಗಿಸುತ್ತದೆ ಮತ್ತು ಕಾಣೆಯಾದ ವಿಭಾಗದ replace \"Core section 'missing' does not exist.\" ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ಎರಡೂ ಹಿಂದಿನ modules ನಂತೆ exceptions ಅಲ್ಲ, observations. ಪ್ರತಿ core ಬದಲಾವಣೆ compact() ಕರೆಯುತ್ತದೆ, ಏಕೆಂದರೆ ಹೆಚ್ಚು ಪಿನ್ ಮಾಡಿದರೆ ಸಂದೇಶಗಳಿಗೆ ಕಡಿಮೆ ಸ್ಥಳ. ಮೆಮೊರಿಗೆ ರಚಿಸು ಮತ್ತು ಓದು ಮಾತ್ರವಲ್ಲ, ನವೀಕರಿಸು ಮತ್ತು ಅಮಾನ್ಯಗೊಳಿಸು ಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Interrupt, Step by Step",
    "headingKn": "Interrupt, ಹಂತ ಹಂತವಾಗಿ",
    "bodyEn": "Section 7 runs it. The user asks \"Who owns the evaluation pipeline?\" The model needs a fact that is not in the window, so it requests archival_memory_search(\"evaluation pipeline owner\"); the runtime returns \"[...] Alice owns the evaluation pipeline. (source=session-001:1)\", the result is added to main context as a tool message, and the model answers with the fact visible. A detail worth noticing: conversation_search for the same words finds only the user's own question, because it contains the same words; it is not an answer, so a hit in the current context is not evidence that the answer is there.",
    "bodyKn": "ವಿಭಾಗ 7 ಅದನ್ನು ಚಲಾಯಿಸುತ್ತದೆ. ಬಳಕೆದಾರ \"Who owns the evaluation pipeline?\" ಎಂದು ಕೇಳುತ್ತಾರೆ. ಮಾದರಿಗೆ window ನಲ್ಲಿಲ್ಲದ ಸಂಗತಿ ಬೇಕು, ಆದ್ದರಿಂದ ಅದು archival_memory_search(\"evaluation pipeline owner\") ಕೇಳುತ್ತದೆ; runtime \"[...] Alice owns the evaluation pipeline. (source=session-001:1)\" ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಫಲಿತಾಂಶ tool ಸಂದೇಶವಾಗಿ main context ಗೆ ಸೇರುತ್ತದೆ, ಮತ್ತು ಮಾದರಿ ಸಂಗತಿ ಕಾಣುತ್ತಿರುವಾಗ ಉತ್ತರಿಸುತ್ತದೆ. ಗಮನಿಸಬೇಕಾದ ವಿವರ: ಅದೇ ಪದಗಳಿಗೆ conversation_search ಬಳಕೆದಾರರ ಸ್ವಂತ ಪ್ರಶ್ನೆಯನ್ನು ಮಾತ್ರ ಕಂಡುಹಿಡಿಯುತ್ತದೆ, ಏಕೆಂದರೆ ಅದು ಅದೇ ಪದಗಳನ್ನು ಹೊಂದಿದೆ; ಅದು ಉತ್ತರವಲ್ಲ, ಆದ್ದರಿಂದ ಪ್ರಸ್ತುತ context ನಲ್ಲಿ ಹಿಟ್ ಉತ್ತರ ಅಲ್ಲಿದೆ ಎಂಬುದಕ್ಕೆ ಸಾಕ್ಷ್ಯವಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Retrieval Alone Is Not Page-In",
    "headingKn": "ಪಡೆಯುವಿಕೆ ಮಾತ್ರ Page-In ಅಲ್ಲ",
    "bodyEn": "Section 8 runs the search against a fresh MainContext and checks two things: the runtime holds the answer (True) and the model-visible context contains it (False). The model cannot reason over information that was never placed in its input, so a page-in is search followed by context integration. The pattern is also an ordinary tool call: a memory tool is structurally the same as a weather lookup, but it reaches the agent's own state, and its result is an observation in the usual loop.",
    "bodyKn": "ವಿಭಾಗ 8 ಹುಡುಕಾಟವನ್ನು ಹೊಸ MainContext ವಿರುದ್ಧ ಚಲಾಯಿಸಿ ಎರಡನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ: runtime ಉತ್ತರ ಹೊಂದಿದೆ (True) ಮತ್ತು ಮಾದರಿ-ಗೋಚರ context ಅದನ್ನು ಹೊಂದಿದೆ (False). ತನ್ನ ಇನ್‌ಪುಟ್‌ನಲ್ಲಿ ಎಂದೂ ಇಡದ ಮಾಹಿತಿ ಮೇಲೆ ಮಾದರಿ ತರ್ಕಿಸಲಾರದು, ಆದ್ದರಿಂದ page-in ಎಂದರೆ ಹುಡುಕಾಟ ನಂತರ context ಏಕೀಕರಣ. ಈ ಮಾದರಿ ಸಾಮಾನ್ಯ tool ಕರೆಯೂ ಹೌದು: ಮೆಮೊರಿ tool ರಚನೆಯಲ್ಲಿ ಹವಾಮಾನ ಹುಡುಕಾಟದಂತೆಯೇ, ಆದರೆ ಅದು agent ನ ಸ್ವಂತ ಸ್ಥಿತಿ ತಲುಪುತ್ತದೆ, ಮತ್ತು ಅದರ ಫಲಿತಾಂಶ ಸಾಮಾನ್ಯ loop ನಲ್ಲಿ ಒಂದು observation."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Retrieval is compression by selection: thousands of stored records become a few relevant lines in the prompt, which protects the working set from dilution. Putting memory behind tools lets the model take part in memory management (search now, store this, this fact changed) while the runtime keeps authority over storage, and the storage backend can change without touching the agent.",
    "bodyKn": "ಪಡೆಯುವಿಕೆ ಆಯ್ಕೆಯ ಮೂಲಕ ಸಂಕುಚನ: ಸಾವಿರಾರು ಸಂಗ್ರಹಿತ ದಾಖಲೆಗಳು prompt ನಲ್ಲಿ ಕೆಲವು ಸಂಬಂಧಿತ ಸಾಲುಗಳಾಗುತ್ತವೆ, ಇದು ಕೆಲಸದ ಗಣವನ್ನು ದುರ್ಬಲಗೊಳ್ಳುವಿಕೆಯಿಂದ ರಕ್ಷಿಸುತ್ತದೆ. ಮೆಮೊರಿಯನ್ನು tools ಹಿಂದೆ ಇಡುವುದು ಮಾದರಿ ಮೆಮೊರಿ ನಿರ್ವಹಣೆಯಲ್ಲಿ ಭಾಗವಹಿಸಲು (ಈಗ ಹುಡುಕು, ಇದನ್ನು ಸಂಗ್ರಹಿಸು, ಈ ಸಂಗತಿ ಬದಲಾಯಿತು) ಅವಕಾಶ ನೀಡುತ್ತದೆ, ಸಂಗ್ರಹದ ಮೇಲೆ ಅಧಿಕಾರ runtime ಗೆ ಇರುತ್ತದೆ, ಮತ್ತು agent ಮುಟ್ಟದೆ ಸಂಗ್ರಹ backend ಬದಲಾಗಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Where This Appears in AI Systems",
    "headingKn": "AI ವ್ಯವಸ್ಥೆಗಳಲ್ಲಿ ಇದು ಎಲ್ಲಿ ಕಾಣುತ್ತದೆ",
    "bodyEn": "Assistants call a memory-search tool when a user refers to something from an earlier session, and a memory-write tool when the user states a stable preference. Coding agents keep a notes store for project facts. Letta and similar frameworks expose core-memory and archival-memory tools almost exactly as the five here.",
    "bodyKn": "ಬಳಕೆದಾರ ಹಿಂದಿನ ಅವಧಿಯ ಯಾವುದಾದರೂ ಉಲ್ಲೇಖಿಸಿದಾಗ ಸಹಾಯಕರು ಮೆಮೊರಿ-ಹುಡುಕಾಟ tool ಕರೆಯುತ್ತಾರೆ, ಮತ್ತು ಬಳಕೆದಾರ ಸ್ಥಿರ ಆದ್ಯತೆ ಹೇಳಿದಾಗ ಮೆಮೊರಿ-ಬರವಣಿಗೆ tool. Coding agents ಪ್ರಾಜೆಕ್ಟ್ ಸಂಗತಿಗಳಿಗೆ ಟಿಪ್ಪಣಿ ಸಂಗ್ರಹ ಇಟ್ಟುಕೊಳ್ಳುತ್ತವೆ. Letta ಮತ್ತು ಅಂತಹ frameworks core-memory ಮತ್ತು archival-memory tools ಅನ್ನು ಇಲ್ಲಿನ ಐದರಂತೆಯೇ ಒದಗಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"memory tools let the model read outside its context directly.\" Information still has to enter the context before the model can use it, which is why section 8 shows the runtime with the answer and the model without it. Another: \"retrieval always finds the right thing.\" Section 4 shows three different ways it does not.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಮೆಮೊರಿ tools ಮಾದರಿಗೆ ತನ್ನ context ಹೊರಗೆ ನೇರವಾಗಿ ಓದಲು ಅವಕಾಶ ನೀಡುತ್ತವೆ.\" ಮಾದರಿ ಬಳಸುವ ಮೊದಲು ಮಾಹಿತಿ context ಪ್ರವೇಶಿಸಬೇಕು, ಅದಕ್ಕಾಗಿಯೇ ವಿಭಾಗ 8 ಉತ್ತರ ಹೊಂದಿದ runtime ಮತ್ತು ಇಲ್ಲದ ಮಾದರಿ ತೋರಿಸುತ್ತದೆ. ಇನ್ನೊಂದು: \"ಪಡೆಯುವಿಕೆ ಯಾವಾಗಲೂ ಸರಿಯಾದದ್ದನ್ನು ಕಂಡುಹಿಡಿಯುತ್ತದೆ.\" ವಿಭಾಗ 4 ಅದು ಹಾಗಾಗದ ಮೂರು ರೀತಿ ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "MemoryRecord: content plus provenance. ArchivalStore: the external tier. Page-out: persisting information outside the window (insert). Page-in: search plus context integration. Interrupt: a memory tool call that pauses generation while the runtime fetches. Provenance: where a memory came from. Tag bonus: extra score for matching metadata. Citation loss: a recalled fact with no source.",
    "bodyKn": "MemoryRecord: ವಿಷಯ ಜೊತೆ ಮೂಲ. ArchivalStore: ಬಾಹ್ಯ ಹಂತ. Page-out: window ಹೊರಗೆ ಮಾಹಿತಿ ಉಳಿಸುವುದು (insert). Page-in: ಹುಡುಕಾಟ ಜೊತೆ context ಏಕೀಕರಣ. Interrupt: runtime ತರುವಾಗ ಉತ್ಪಾದನೆ ನಿಲ್ಲಿಸುವ ಮೆಮೊರಿ tool ಕರೆ. Provenance: ಮೆಮೊರಿ ಎಲ್ಲಿಂದ ಬಂತು. Tag bonus: ಹೊಂದುವ ಮೆಟಾಡೇಟಾಗೆ ಹೆಚ್ಚುವರಿ ಅಂಕ. Citation loss: ಮೂಲವಿಲ್ಲದ ನೆನಪಿಸಿಕೊಂಡ ಸಂಗತಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A memory is content plus provenance. 2) Insert is page-out, search plus splice is page-in. 3) Lexical search found the right record for a keyword query and failed on paraphrase, stopwords and Kannada. 4) Core replace prevents stale pinned facts. 5) Memory tool errors are observations. 6) Retrieval without context integration changes nothing for the model. 7) A hit in conversation_search may just be the question itself. Part 3 runs the full workflow and examines rot, poisoning, persistence and consolidation.",
    "bodyKn": "1) ಮೆಮೊರಿ ಎಂದರೆ ವಿಷಯ ಜೊತೆ ಮೂಲ. 2) Insert page-out, ಹುಡುಕಾಟ ಜೊತೆ splice page-in. 3) Lexical ಹುಡುಕಾಟ ಕೀವರ್ಡ್ query ಗೆ ಸರಿಯಾದ ದಾಖಲೆ ಕಂಡುಹಿಡಿಯಿತು ಮತ್ತು ಪರ್ಯಾಯ ಪದಗುಚ್ಛ, stopwords ಹಾಗೂ ಕನ್ನಡದಲ್ಲಿ ವಿಫಲವಾಯಿತು. 4) Core replace ಹಳೆಯ ಪಿನ್ ಮಾಡಿದ ಸಂಗತಿಗಳನ್ನು ತಡೆಯುತ್ತದೆ. 5) ಮೆಮೊರಿ tool ದೋಷಗಳು observations. 6) Context ಏಕೀಕರಣ ಇಲ್ಲದ ಪಡೆಯುವಿಕೆ ಮಾದರಿಗೆ ಏನನ್ನೂ ಬದಲಿಸುವುದಿಲ್ಲ. 7) conversation_search ನಲ್ಲಿನ ಹಿಟ್ ಕೇವಲ ಪ್ರಶ್ನೆಯೇ ಆಗಿರಬಹುದು. ಭಾಗ 3 ಸಂಪೂರ್ಣ ಕೆಲಸದ ಹರಿವು ಚಲಾಯಿಸಿ rot, poisoning, ನಿರಂತರತೆ ಮತ್ತು ಏಕೀಕರಣ ಪರಿಶೀಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What is the main purpose of archival_memory_insert()?",
      "qKn": "archival_memory_insert() ನ ಮುಖ್ಯ ಉದ್ದೇಶ ಏನು?",
      "opts": [
       "Increase the model's context window",
       "Page information into core memory",
       "Persist information in external searchable memory",
       "Retrain the model"
      ],
      "optsKn": [
       "ಮಾದರಿಯ context window ಹೆಚ್ಚಿಸುವುದು",
       "ಮಾಹಿತಿಯನ್ನು core ಮೆಮೊರಿಗೆ page ಮಾಡುವುದು",
       "ಮಾಹಿತಿಯನ್ನು ಬಾಹ್ಯ ಹುಡುಕಬಹುದಾದ ಮೆಮೊರಿಯಲ್ಲಿ ಉಳಿಸುವುದು",
       "ಮಾದರಿ ಮರುತರಬೇತಿ"
      ],
      "correct": 2
     },
     {
      "q": "Why do MemoryRecord objects contain session and turn?",
      "qKn": "MemoryRecord ವಸ್ತುಗಳು session ಮತ್ತು turn ಏಕೆ ಹೊಂದಿವೆ?",
      "opts": [
       "To slow retrieval",
       "To preserve provenance about where a memory came from",
       "To enlarge the window",
       "To replace ids"
      ],
      "optsKn": [
       "ಪಡೆಯುವಿಕೆ ನಿಧಾನಗೊಳಿಸಲು",
       "ಮೆಮೊರಿ ಎಲ್ಲಿಂದ ಬಂತು ಎಂಬ ಮೂಲ ಉಳಿಸಲು",
       "window ದೊಡ್ಡದಾಗಿಸಲು",
       "ids ಬದಲಿಸಲು"
      ],
      "correct": 1
     },
     {
      "q": "In this lesson's run, why did \"who is responsible for QA\" return the deadline record?",
      "qKn": "ಈ ಪಾಠದ ಓಟದಲ್ಲಿ \"who is responsible for QA\" ಗಡುವು ದಾಖಲೆ ಏಕೆ ಹಿಂತಿರುಗಿಸಿತು?",
      "opts": [
       "Semantic similarity",
       "The stopword \"is\" appears in both, and overlap counts every word equally",
       "A tag matched",
       "The archive was empty"
      ],
      "optsKn": [
       "Semantic ಹೋಲಿಕೆ",
       "Stopword \"is\" ಎರಡರಲ್ಲೂ ಇದೆ, ಮತ್ತು ಅತಿಕ್ರಮಣ ಪ್ರತಿ ಪದವನ್ನು ಸಮವಾಗಿ ಎಣಿಸುತ್ತದೆ",
       "ಒಂದು tag ಹೊಂದಿತು",
       "Archive ಖಾಲಿಯಾಗಿತ್ತು"
      ],
      "correct": 1
     },
     {
      "q": "What completes a page-in after the search returns a record?",
      "qKn": "ಹುಡುಕಾಟ ದಾಖಲೆ ಹಿಂತಿರುಗಿಸಿದ ನಂತರ page-in ಅನ್ನು ಯಾವುದು ಪೂರ್ಣಗೊಳಿಸುತ್ತದೆ?",
      "opts": [
       "Deleting the archive",
       "Retraining the model",
       "Inserting the tool result into model-visible context",
       "Increasing max_tokens"
      ],
      "optsKn": [
       "Archive ಅಳಿಸುವುದು",
       "ಮಾದರಿ ಮರುತರಬೇತಿ",
       "Tool ಫಲಿತಾಂಶವನ್ನು ಮಾದರಿ-ಗೋಚರ context ಗೆ ಸೇರಿಸುವುದು",
       "max_tokens ಹೆಚ್ಚಿಸುವುದು"
      ],
      "correct": 2
     },
     {
      "q": "What is the difference between conversation_search() and archival_memory_search()?",
      "qKn": "conversation_search() ಮತ್ತು archival_memory_search() ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಏನು?",
      "opts": [
       "None",
       "Conversation search examines retained messages; archival search examines the external long-term store",
       "Conversation search uses the internet",
       "Archival search edits core memory"
      ],
      "optsKn": [
       "ಯಾವುದೂ ಇಲ್ಲ",
       "Conversation search ಉಳಿದ ಸಂದೇಶಗಳನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ; archival search ಬಾಹ್ಯ ದೀರ್ಘಕಾಲದ ಸಂಗ್ರಹ ಪರೀಕ್ಷಿಸುತ್ತದೆ",
       "Conversation search ಇಂಟರ್ನೆಟ್ ಬಳಸುತ್ತದೆ",
       "Archival search core ಮೆಮೊರಿ ಸಂಪಾದಿಸುತ್ತದೆ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
