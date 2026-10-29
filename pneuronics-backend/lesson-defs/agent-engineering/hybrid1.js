module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321526",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Hybrid Memory: Vector + Graph + KV (Part 1 of 3) — Why One Store Is Not Enough",
 "titleKn": "Hybrid Memory: Vector + Graph + KV (ಭಾಗ 1 / 3) — ಒಂದೇ ಸಂಗ್ರಹ ಸಾಕಾಗದಿರುವುದು ಏಕೆ",
 "desc": "See why semantic, exact and relational queries need different indexes, build a normalized MemoryRecord with scopes and the three store primitives, and find where token-overlap retrieval fails.",
 "descKn": "Semantic, ನಿಖರ ಮತ್ತು ಸಂಬಂಧ ಪ್ರಶ್ನೆಗಳಿಗೆ ಬೇರೆ ಸೂಚಿಗಳು ಏಕೆ ಬೇಕು ಎಂದು ನೋಡಿ, scopes ಇರುವ ಸಾಮಾನ್ಯೀಕೃತ MemoryRecord ಮತ್ತು ಮೂರು ಸಂಗ್ರಹ ಮೂಲಘಟಕಗಳನ್ನು ನಿರ್ಮಿಸಿ, ಮತ್ತು token-ಅತಿಕ್ರಮಣ ಪಡೆಯುವಿಕೆ ಎಲ್ಲಿ ವಿಫಲವಾಗುತ್ತದೆ ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Distinguish semantic, fact and relationship queries and map each to a store.",
  "Explain why the stores run in parallel and are merged, not chained as fallbacks.",
  "Design a normalized MemoryRecord with user, session and agent scope.",
  "Implement VectorStore, KVStore and GraphStore primitives with ownership filtering.",
  "Identify where token-overlap retrieval fails."
 ],
 "objectivesKn": [
  "Semantic, ಸಂಗತಿ ಮತ್ತು ಸಂಬಂಧ ಪ್ರಶ್ನೆಗಳನ್ನು ಬೇರ್ಪಡಿಸಿ ಮತ್ತು ಪ್ರತಿಯೊಂದನ್ನು ಸಂಗ್ರಹಕ್ಕೆ ನಕ್ಷೆ ಮಾಡಿ.",
  "ಸಂಗ್ರಹಗಳು ಸಮಾನಾಂತರವಾಗಿ ಚಲಿಸಿ ವಿಲೀನವಾಗುತ್ತವೆ, ಸರಪಳಿ ಬದಲಿಗಳಲ್ಲ ಎಂದು ವಿವರಿಸಿ.",
  "user, session ಮತ್ತು agent scope ಇರುವ ಸಾಮಾನ್ಯೀಕೃತ MemoryRecord ವಿನ್ಯಾಸಗೊಳಿಸಿ.",
  "ಮಾಲೀಕತ್ವ ಫಿಲ್ಟರಿಂಗ್ ಇರುವ VectorStore, KVStore ಮತ್ತು GraphStore ಮೂಲಘಟಕಗಳನ್ನು ಅಳವಡಿಸಿ.",
  "Token-ಅತಿಕ್ರಮಣ ಪಡೆಯುವಿಕೆ ಎಲ್ಲಿ ವಿಫಲವಾಗುತ್ತದೆ ಎಂದು ಗುರುತಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Hybrid Memory: Vector + Graph + KV (Part 1 of 3)",
    "textKn": "Hybrid Memory: Vector + Graph + KV (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: why one store is not enough, memory records and scopes, and the three storage primitives. Every output below was genuinely produced by the lab file on Python 3.14.5. The pasted source gave the Part 1 code in fragments, so the program is assembled from its description. The \"vector\" search is token overlap, a transparent stand-in for an embedding model, and the lab shows where that stand-in fails. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಒಂದೇ ಸಂಗ್ರಹ ಸಾಕಾಗದಿರುವುದು ಏಕೆ, ಮೆಮೊರಿ ದಾಖಲೆಗಳು ಮತ್ತು scopes, ಹಾಗೂ ಮೂರು ಸಂಗ್ರಹ ಮೂಲಘಟಕಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಅಂಟಿಸಿದ ಮೂಲ ಭಾಗ 1 ರ ಕೋಡ್ ಅನ್ನು ತುಣುಕುಗಳಲ್ಲಿ ನೀಡಿತ್ತು, ಆದ್ದರಿಂದ ಪ್ರೋಗ್ರಾಂ ಅನ್ನು ಅದರ ವಿವರಣೆಯಿಂದ ಜೋಡಿಸಲಾಗಿದೆ. \"Vector\" ಹುಡುಕಾಟ token ಅತಿಕ್ರಮಣ, embedding ಮಾದರಿಯ ಪಾರದರ್ಶಕ ಬದಲಿ, ಮತ್ತು ಆ ಬದಲಿ ಎಲ್ಲಿ ವಿಫಲವಾಗುತ್ತದೆ ಎಂದು ಲ್ಯಾಬ್ ತೋರಿಸುತ್ತದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Three Query Shapes",
    "textKn": "ಮೂರು ಪ್ರಶ್ನೆ ಆಕಾರಗಳು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Semantic, Fact and Relationship Queries",
    "headingKn": "Semantic, ಸಂಗತಿ ಮತ್ತು ಸಂಬಂಧ ಪ್ರಶ್ನೆಗಳು",
    "bodyEn": "An assistant that remembers a user meets three different retrieval shapes. \"What did we discuss about memory degradation?\" is fuzzy and semantic, because the stored sentence says \"embedding drift\". \"What language does Akshay prefer?\" is an exact fact lookup. \"Which projects share a billing company?\" is about relationships between entities. Vector, key-value and graph stores are each natural for one of these, and none is natural for all three.",
    "bodyKn": "ಬಳಕೆದಾರರನ್ನು ನೆನಪಿಡುವ ಸಹಾಯಕ ಮೂರು ಬೇರೆ ಪಡೆಯುವಿಕೆ ಆಕಾರಗಳನ್ನು ಎದುರಿಸುತ್ತದೆ. \"ಮೆಮೊರಿ ಕುಸಿತದ ಬಗ್ಗೆ ನಾವು ಏನು ಚರ್ಚಿಸಿದೆವು?\" ಅಸ್ಪಷ್ಟ ಮತ್ತು semantic, ಏಕೆಂದರೆ ಸಂಗ್ರಹಿತ ವಾಕ್ಯ \"embedding drift\" ಎನ್ನುತ್ತದೆ. \"Akshay ಯಾವ ಭಾಷೆ ಇಷ್ಟಪಡುತ್ತಾರೆ?\" ನಿಖರ ಸಂಗತಿ ಹುಡುಕಾಟ. \"ಯಾವ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು ಒಂದೇ billing ಕಂಪನಿ ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ?\" ಘಟಕಗಳ ನಡುವಿನ ಸಂಬಂಧಗಳ ಬಗ್ಗೆ. Vector, key-value ಮತ್ತು graph ಸಂಗ್ರಹಗಳು ಇವುಗಳಲ್ಲಿ ಒಂದೊಂದಕ್ಕೆ ಸಹಜ, ಮೂರಕ್ಕೂ ಯಾವುದೂ ಸಹಜವಲ್ಲ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Which store answers which question",
    "headingKn": "ಯಾವ ಸಂಗ್ರಹ ಯಾವ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸುತ್ತದೆ",
    "headers": [
     "Store",
     "Mental model",
     "Strength",
     "Weakness"
    ],
    "rows": [
     [
      "Vector",
      "\"sounds like\"",
      "Fuzzy meaning, episodic text",
      "Wasteful for exact keys, weak on relationships, can return stale matches"
     ],
     [
      "KV",
      "\"exactly this key\"",
      "Direct current-state lookup, near constant time",
      "The query must map to a key; no fuzzy matching; schema creep"
     ],
     [
      "Graph",
      "\"connected to\"",
      "Relationships, paths, temporal edges",
      "Poor fuzzy text search; extraction can explode the edge count"
     ]
    ]
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Parallel Stores, Not Fallbacks",
    "headingKn": "ಸಮಾನಾಂತರ ಸಂಗ್ರಹಗಳು, ಬದಲಿ ಅಲ್ಲ",
    "bodyEn": "The three stores are not a chain where vector is tried first, then KV, then graph. One query can contain several needs: \"the billing company for the customer we discussed last week\" needs recency or semantic retrieval for the customer and a relationship lookup for the company. So every store contributes candidates, they are merged by memory id, and a fusion step ranks them. The application sees one interface: add() and search().",
    "bodyKn": "ಮೂರು ಸಂಗ್ರಹಗಳು ಮೊದಲು vector, ನಂತರ KV, ನಂತರ graph ಪ್ರಯತ್ನಿಸುವ ಸರಪಳಿಯಲ್ಲ. ಒಂದು ಪ್ರಶ್ನೆ ಹಲವು ಅಗತ್ಯಗಳನ್ನು ಹೊಂದಿರಬಹುದು: \"ಕಳೆದ ವಾರ ಚರ್ಚಿಸಿದ ಗ್ರಾಹಕರ billing ಕಂಪನಿ\"ಗೆ ಗ್ರಾಹಕರಿಗೆ ತಾಜಾತನ ಅಥವಾ semantic ಪಡೆಯುವಿಕೆ ಮತ್ತು ಕಂಪನಿಗೆ ಸಂಬಂಧ ಹುಡುಕಾಟ ಬೇಕು. ಆದ್ದರಿಂದ ಪ್ರತಿ ಸಂಗ್ರಹ ಅಭ್ಯರ್ಥಿಗಳನ್ನು ನೀಡುತ್ತದೆ, ಅವು ಮೆಮೊರಿ id ಯಿಂದ ವಿಲೀನವಾಗುತ್ತವೆ, ಮತ್ತು ಫ್ಯೂಷನ್ ಹಂತ ಅವನ್ನು ಶ್ರೇಣೀಕರಿಸುತ್ತದೆ. ಅಪ್ಲಿಕೇಶನ್ ಒಂದೇ ಇಂಟರ್‌ಫೇಸ್ ಕಾಣುತ್ತದೆ: add() ಮತ್ತು search()."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "One Memory, Three Views",
    "headingKn": "ಒಂದು ಮೆಮೊರಿ, ಮೂರು ನೋಟಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"200\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">One memory, three views, one ranked answer</text>\n  <rect x=\"85\" y=\"22\" width=\"130\" height=\"22\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"36\" fill=\"#93c5fd\" text-anchor=\"middle\">add(): one MemoryRecord</text>\n  <path d=\"M110,44 L60,64 M150,44 V64 M190,44 L240,64\" stroke=\"#475569\"/>\n  <rect x=\"15\" y=\"64\" width=\"90\" height=\"48\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"60\" y=\"78\" fill=\"#6ee7b7\" text-anchor=\"middle\">VECTOR</text><text x=\"60\" y=\"92\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">sounds like</text><text x=\"60\" y=\"102\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">episodic text</text>\n  <rect x=\"105\" y=\"64\" width=\"90\" height=\"48\" rx=\"4\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"78\" fill=\"#fde68a\" text-anchor=\"middle\">KV</text><text x=\"150\" y=\"92\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"6\">exactly this key</text><text x=\"150\" y=\"102\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"6\">current state</text>\n  <rect x=\"195\" y=\"64\" width=\"90\" height=\"48\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"240\" y=\"78\" fill=\"#c4b5fd\" text-anchor=\"middle\">GRAPH</text><text x=\"240\" y=\"92\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">connected to</text><text x=\"240\" y=\"102\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">relations + history</text>\n  <path d=\"M60,112 L120,138 M150,112 V138 M240,112 L180,138\" stroke=\"#475569\"/>\n  <rect x=\"85\" y=\"138\" width=\"130\" height=\"22\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"152\" fill=\"#93c5fd\" text-anchor=\"middle\">search(): merge + fuse</text>\n  <text x=\"150\" y=\"176\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">score = w_r*relevance + w_i*importance + w_t*recency</text>\n  <text x=\"150\" y=\"188\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">ownership is a hard filter applied before any ranking</text>\n</svg>",
    "captionEn": "The three stores hold different representations of the same knowledge. A fusion step ranks the merged candidates.",
    "captionKn": "ಮೂರು ಸಂಗ್ರಹಗಳು ಅದೇ ಜ್ಞಾನದ ಬೇರೆ ಬೇರೆ ನಿರೂಪಣೆಗಳನ್ನು ಹೊಂದಿವೆ. ಫ್ಯೂಷನ್ ಹಂತ ವಿಲೀನಗೊಂಡ ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಶ್ರೇಣೀಕರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Normalized Record and Scope",
    "headingKn": "ಸಾಮಾನ್ಯೀಕೃತ ದಾಖಲೆ ಮತ್ತು Scope",
    "bodyEn": "Every memory becomes one MemoryRecord: an id (so the stores can recognise the same memory), the text, a user_id, a scope, a fact_type and entity (the KV dimensions), a value, an importance clamped to 0 to 1, and created and last-accessed timestamps. Scope is a namespace: user memory persists across sessions, session memory belongs to one thread, agent memory belongs to one agent. Ownership is a correctness and privacy boundary, so it is a hard filter applied before any ranking.",
    "bodyKn": "ಪ್ರತಿ ಮೆಮೊರಿ ಒಂದು MemoryRecord ಆಗುತ್ತದೆ: ಸಂಗ್ರಹಗಳು ಅದೇ ಮೆಮೊರಿ ಗುರುತಿಸಲು id, ಪಠ್ಯ, user_id, scope, fact_type ಮತ್ತು entity (KV ಆಯಾಮಗಳು), value, 0 ರಿಂದ 1 ಕ್ಕೆ ಮಿತಿಗೊಳಿಸಿದ importance, ಮತ್ತು ರಚನೆ ಹಾಗೂ ಕೊನೆಯ-ಪ್ರವೇಶ ಟೈಮ್‌ಸ್ಟ್ಯಾಂಪ್‌ಗಳು. Scope ಒಂದು namespace: user ಮೆಮೊರಿ ಅವಧಿಗಳನ್ನು ಮೀರಿ ಉಳಿಯುತ್ತದೆ, session ಮೆಮೊರಿ ಒಂದು thread ಗೆ ಸೇರಿದ್ದು, agent ಮೆಮೊರಿ ಒಂದು agent ಗೆ ಸೇರಿದ್ದು. ಮಾಲೀಕತ್ವ ಸರಿಯಾಗಿರುವಿಕೆ ಮತ್ತು ಗೌಪ್ಯತೆ ಗಡಿ, ಆದ್ದರಿಂದ ಅದು ಯಾವುದೇ ಶ್ರೇಣೀಕರಣದ ಮೊದಲು ಅನ್ವಯಿಸುವ ಕಠಿಣ ಫಿಲ್ಟರ್."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Three Stores",
    "textKn": "ಮೂರು ಸಂಗ್ರಹಗಳನ್ನು ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "hybrid_1.py",
    "headingEn": "MemoryRecord, VectorStore, KVStore and GraphStore",
    "headingKn": "MemoryRecord, VectorStore, KVStore ಮತ್ತು GraphStore",
    "descEn": "tokenize and token_similarity (Jaccard overlap) stand in for an embedding model. VectorStore filters by owner and scope first, then scores. KVStore keys on (user, scope, session, agent, fact_type, entity), so scope is part of identity. GraphStore stores typed edges with a valid flag, and each edge carries the memory_id of the record it came from.",
    "descKn": "tokenize ಮತ್ತು token_similarity (Jaccard ಅತಿಕ್ರಮಣ) embedding ಮಾದರಿಯ ಬದಲಿ. VectorStore ಮೊದಲು ಮಾಲೀಕ ಮತ್ತು scope ಮೂಲಕ ಫಿಲ್ಟರ್ ಮಾಡಿ ನಂತರ ಅಂಕ ನೀಡುತ್ತದೆ. KVStore (user, scope, session, agent, fact_type, entity) ಮೇಲೆ key ಮಾಡುತ್ತದೆ, ಆದ್ದರಿಂದ scope ಗುರುತಿನ ಭಾಗ. GraphStore valid ಧ್ವಜ ಇರುವ ಟೈಪ್ ಮಾಡಿದ edges ಸಂಗ್ರಹಿಸುತ್ತದೆ, ಮತ್ತು ಪ್ರತಿ edge ಅದು ಬಂದ ದಾಖಲೆಯ memory_id ಹೊಂದಿದೆ.",
    "code": "def now_utc() -> datetime:\n    return datetime.now(timezone.utc)\n\n\ndef tokenize(text: str) -> set:\n    return set(re.findall(r\"[a-z0-9]+\", text.lower()))\n\n\ndef token_similarity(a: str, b: str) -> float:\n    ta, tb = tokenize(a), tokenize(b)\n    if not ta or not tb:\n        return 0.0\n    return len(ta & tb) / len(ta | tb)\n\n\n@dataclass\nclass MemoryRecord:\n    id: str\n    text: str\n    user_id: str\n    scope: str\n    fact_type: str\n    entity: str\n    value: str\n    importance: float\n    created_at: datetime\n    last_accessed_at: datetime\n    session_id: Optional[str] = None\n    agent_id: Optional[str] = None\n    metadata: dict = field(default_factory=dict)\n\n\ndef make_record(text, user_id, scope, fact_type, entity, value, importance=0.5,\n                session_id=None, agent_id=None, metadata=None) -> MemoryRecord:\n    ts = now_utc()\n    return MemoryRecord(id=str(uuid.uuid4()), text=text, user_id=user_id, scope=scope, fact_type=fact_type,\n                        entity=entity, value=value, importance=max(0.0, min(1.0, importance)),\n                        created_at=ts, last_accessed_at=ts, session_id=session_id, agent_id=agent_id,\n                        metadata=metadata or {})\n\n\ndef scope_matches(record: MemoryRecord, scope: str, session_id, agent_id) -> bool:\n    if record.scope != scope:\n        return False\n    if scope == \"session\":\n        return record.session_id == session_id\n    if scope == \"agent\":\n        return record.agent_id == agent_id\n    return True\n\n\nclass VectorStore:\n    def __init__(self):\n        self.records = []\n\n    def add(self, record: MemoryRecord) -> None:\n        self.records.append(record)\n\n    def search(self, query, user_id, scope, session_id=None, agent_id=None, top_k=5):\n        results = []\n        for record in self.records:\n            if record.user_id != user_id:\n                continue\n            if not scope_matches(record, scope, session_id, agent_id):\n                continue\n            score = token_similarity(query, record.text)\n            if score > 0:\n                results.append((record, score))\n        results.sort(key=lambda item: item[1], reverse=True)\n        return results[:top_k]\n\n\nclass KVStore:\n    def __init__(self):\n        self.data = {}\n\n    def _key(self, record):\n        return (record.user_id, record.scope, record.session_id, record.agent_id, record.fact_type, record.entity)\n\n    def add(self, record):\n        self.data[self._key(record)] = record\n\n    def get(self, user_id, scope, fact_type, entity, session_id=None, agent_id=None):\n        return self.data.get((user_id, scope, session_id, agent_id, fact_type, entity))\n\n\n@dataclass\nclass GraphEdge:\n    id: str\n    user_id: str\n    scope: str\n    subject: str\n    relation: str\n    object: str\n    valid: bool\n    created_at: datetime\n    invalidated_at: Optional[datetime] = None\n    session_id: Optional[str] = None\n    agent_id: Optional[str] = None\n    memory_id: Optional[str] = None\n\n\nclass GraphStore:\n    def __init__(self):\n        self.edges = []\n\n    def add_edge(self, record, subject, relation, object_):\n        edge = GraphEdge(id=str(uuid.uuid4()), user_id=record.user_id, scope=record.scope, subject=subject,\n                         relation=relation, object=object_, valid=True, created_at=now_utc(),\n                         session_id=record.session_id, agent_id=record.agent_id, memory_id=record.id)\n        self.edges.append(edge)\n        return edge\n\n    def find_related(self, entity, user_id, scope, session_id=None, agent_id=None, include_invalid=False):\n        results, wanted = [], entity.lower()\n        for edge in self.edges:\n            if edge.user_id != user_id or edge.scope != scope:\n                continue\n            if scope == \"session\" and edge.session_id != session_id:\n                continue\n            if scope == \"agent\" and edge.agent_id != agent_id:\n                continue\n            if not include_invalid and not edge.valid:\n                continue\n            if edge.subject.lower() == wanted or edge.object.lower() == wanted:\n                results.append(edge)\n        return results"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "hybrid_1.py",
    "headingEn": "main(): seven experiments",
    "headingKn": "main(): ಏಳು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() writes one fact to all three stores and queries each, works the Jaccard example, probes where token overlap fails, checks ownership and session isolation, checks the KV key, clamps importance, and does the fusion arithmetic.",
    "descKn": "main() ಒಂದು ಸಂಗತಿಯನ್ನು ಮೂರೂ ಸಂಗ್ರಹಗಳಿಗೆ ಬರೆದು ಪ್ರತಿಯೊಂದನ್ನೂ ಪ್ರಶ್ನಿಸುತ್ತದೆ, Jaccard ಉದಾಹರಣೆ ಬಿಡಿಸುತ್ತದೆ, token ಅತಿಕ್ರಮಣ ವಿಫಲವಾಗುವಲ್ಲಿ ಪರೀಕ್ಷಿಸುತ್ತದೆ, ಮಾಲೀಕತ್ವ ಮತ್ತು session ಪ್ರತ್ಯೇಕತೆ ಪರಿಶೀಲಿಸುತ್ತದೆ, KV key ಪರಿಶೀಲಿಸುತ್ತದೆ, importance ಮಿತಿಗೊಳಿಸುತ್ತದೆ, ಮತ್ತು ಫ್ಯೂಷನ್ ಅಂಕಗಣಿತ ಮಾಡುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Three query shapes, one memory\")\n    vector, kv, graph = VectorStore(), KVStore(), GraphStore()\n    rec = make_record(\"Akshay prefers Python for agent engineering.\", \"user_001\", \"user\", \"preference\", \"language\", \"Python\", 0.9)\n    vector.add(rec)\n    kv.add(rec)\n    graph.add_edge(rec, \"Akshay\", \"prefers\", \"Python\")\n    for q in (\"preferred programming language\", \"Akshay agent engineering\"):\n        print(f\"vector {q!r:<34} ->\", [(r.text, round(s, 3)) for r, s in vector.search(q, \"user_001\", \"user\")])\n    print(\"kv     preference/language               ->\", kv.get(\"user_001\", \"user\", \"preference\", \"language\").value)\n    print(\"graph  entity='Akshay'                   ->\", [(e.subject, e.relation, e.object) for e in graph.find_related(\"Akshay\", \"user_001\", \"user\")])\n    print(\"graph  entity='Python' (incoming edge)   ->\", [(e.subject, e.relation, e.object) for e in graph.find_related(\"Python\", \"user_001\", \"user\")])\n\n    section(\"2. Jaccard worked example from the lesson\")\n    a, q = \"embedding drift reduces retrieval quality\", \"embedding drift retrieval problems\"\n    print(\"A tokens:\", sorted(tokenize(a)))\n    print(\"Q tokens:\", sorted(tokenize(q)))\n    print(\"intersection:\", sorted(tokenize(a) & tokenize(q)), \"| union size:\", len(tokenize(a) | tokenize(q)))\n    print(\"similarity:\", token_similarity(a, q))\n\n    section(\"3. Where token overlap fails and why embeddings exist\")\n    for q in (\"preferred programming language\", \"which tongue does Akshay like coding in\", \"ಅಕ್ಷಯ್ ಯಾವ ಭಾಷೆ ಇಷ್ಟಪಡುತ್ತಾರೆ\"):\n        hits = vector.search(q, \"user_001\", \"user\")\n        print(f\"{q!r:<48} -> {[round(s, 3) for _, s in hits] or 'no hit'}\")\n\n    section(\"4. Scope and ownership are enforced before ranking\")\n    vector.add(make_record(\"Bob prefers Rust.\", \"user_002\", \"user\", \"preference\", \"language\", \"Rust\", 0.9))\n    vector.add(make_record(\"For this session use staging.\", \"user_001\", \"session\", \"runtime\", \"environment\", \"staging\", 0.4, session_id=\"A\"))\n    vector.add(make_record(\"For this session use production.\", \"user_001\", \"session\", \"runtime\", \"environment\", \"production\", 0.4, session_id=\"B\"))\n    print(\"user_001 / user scope  'Bob prefers Rust' ->\", [r.text for r, _ in vector.search(\"Bob prefers Rust\", \"user_001\", \"user\")])\n    print(\"user_002 / user scope  'Bob prefers Rust' ->\", [r.text for r, _ in vector.search(\"Bob prefers Rust\", \"user_002\", \"user\")])\n    print(\"session A  'session use'                   ->\", [r.text for r, _ in vector.search(\"session use\", \"user_001\", \"session\", session_id=\"A\")])\n    print(\"session B  'session use'                   ->\", [r.text for r, _ in vector.search(\"session use\", \"user_001\", \"session\", session_id=\"B\")])\n\n    section(\"5. Genuinely checking the KV key: scope is part of identity\")\n    kv2 = KVStore()\n    ra = make_record(\"env staging\", \"user_001\", \"session\", \"runtime\", \"environment\", \"staging\", session_id=\"A\")\n    rb = make_record(\"env production\", \"user_001\", \"session\", \"runtime\", \"environment\", \"production\", session_id=\"B\")\n    kv2.add(ra)\n    kv2.add(rb)\n    print(\"session A:\", kv2.get(\"user_001\", \"session\", \"runtime\", \"environment\", session_id=\"A\").value)\n    print(\"session B:\", kv2.get(\"user_001\", \"session\", \"runtime\", \"environment\", session_id=\"B\").value)\n    print(\"entries stored:\", len(kv2.data), \"(two, because session_id is in the key)\")\n    print(\"lookup with different casing 'Environment':\", kv2.get(\"user_001\", \"session\", \"runtime\", \"Environment\", session_id=\"A\"))\n\n    section(\"6. Importance is clamped\")\n    for raw in (8, -2, 0.5):\n        print(f\"importance={raw!r:<5} -> stored {make_record('x', 'u', 'user', 't', 'e', 'v', raw).importance}\")\n\n    section(\"7. Why the highest similarity is not enough (arithmetic)\")\n    wr, wi, wt = 0.5, 0.3, 0.2\n    for name, r, i, t in ((\"A casual mention\", 0.90, 0.30, 0.90), (\"B primary language\", 0.84, 0.95, 0.70)):\n        print(f\"{name:<20} R={r} I={i} T={t} -> {wr * r + wi * i + wt * t:.3f}\")\n    print(\"A has the higher relevance, B has the higher weighted score\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Three query shapes, one memory ---\nvector 'preferred programming language'   -> []\nvector 'Akshay agent engineering'         -> [('Akshay prefers Python for agent engineering.', 0.5)]\nkv     preference/language               -> Python\ngraph  entity='Akshay'                   -> [('Akshay', 'prefers', 'Python')]\ngraph  entity='Python' (incoming edge)   -> [('Akshay', 'prefers', 'Python')]\n\n--- 2. Jaccard worked example from the lesson ---\nA tokens: ['drift', 'embedding', 'quality', 'reduces', 'retrieval']\nQ tokens: ['drift', 'embedding', 'problems', 'retrieval']\nintersection: ['drift', 'embedding', 'retrieval'] | union size: 6\nsimilarity: 0.5\n\n--- 3. Where token overlap fails and why embeddings exist ---\n'preferred programming language'                 -> no hit\n'which tongue does Akshay like coding in'        -> [0.083]\n'ಅಕ್ಷಯ್ ಯಾವ ಭಾಷೆ ಇಷ್ಟಪಡುತ್ತಾರೆ'                  -> no hit\n\n--- 4. Scope and ownership are enforced before ranking ---\nuser_001 / user scope  'Bob prefers Rust' -> ['Akshay prefers Python for agent engineering.']\nuser_002 / user scope  'Bob prefers Rust' -> ['Bob prefers Rust.']\nsession A  'session use'                   -> ['For this session use staging.']\nsession B  'session use'                   -> ['For this session use production.']\n\n--- 5. Genuinely checking the KV key: scope is part of identity ---\nsession A: staging\nsession B: production\nentries stored: 2 (two, because session_id is in the key)\nlookup with different casing 'Environment': None\n\n--- 6. Importance is clamped ---\nimportance=8     -> stored 1.0\nimportance=-2    -> stored 0.0\nimportance=0.5   -> stored 0.5\n\n--- 7. Why the highest similarity is not enough (arithmetic) ---\nA casual mention     R=0.9 I=0.3 T=0.9 -> 0.720\nB primary language   R=0.84 I=0.95 T=0.7 -> 0.845\nA has the higher relevance, B has the higher weighted score"
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
    "headingEn": "One Fact, Three Access Paths",
    "headingKn": "ಒಂದು ಸಂಗತಿ, ಮೂರು ಪ್ರವೇಶ ಮಾರ್ಗಗಳು",
    "bodyEn": "Section 1 stores \"Akshay prefers Python for agent engineering.\" once. The vector query \"Akshay agent engineering\" finds it with score 0.5. The KV lookup preference/language returns Python directly. The graph returns Akshay prefers Python from either end: searching \"Akshay\" finds the outgoing edge and searching \"Python\" finds the same edge as an incoming one. Section 2 reproduces the lesson's worked example: three shared tokens over a union of six gives 0.5.",
    "bodyKn": "ವಿಭಾಗ 1 \"Akshay prefers Python for agent engineering.\" ಅನ್ನು ಒಮ್ಮೆ ಸಂಗ್ರಹಿಸುತ್ತದೆ. Vector ಪ್ರಶ್ನೆ \"Akshay agent engineering\" ಅದನ್ನು ಅಂಕ 0.5 ರಲ್ಲಿ ಕಂಡುಹಿಡಿಯುತ್ತದೆ. KV ಹುಡುಕಾಟ preference/language ನೇರವಾಗಿ Python ಹಿಂತಿರುಗಿಸುತ್ತದೆ. Graph ಎರಡೂ ತುದಿಯಿಂದ Akshay prefers Python ಹಿಂತಿರುಗಿಸುತ್ತದೆ: \"Akshay\" ಹುಡುಕಿದರೆ ಹೊರಗೆ ಹೋಗುವ edge, \"Python\" ಹುಡುಕಿದರೆ ಅದೇ edge ಒಳಬರುವುದಾಗಿ ಸಿಗುತ್ತದೆ. ವಿಭಾಗ 2 ಪಾಠದ ಉದಾಹರಣೆ ಪುನರುತ್ಪಾದಿಸುತ್ತದೆ: ಆರರ ಸಂಯೋಜನೆಯ ಮೇಲೆ ಮೂರು ಹಂಚಿಕೆಯ tokens 0.5 ನೀಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Where the Stand-in Fails",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಬದಲಿ ಎಲ್ಲಿ ವಿಫಲವಾಗುತ್ತದೆ",
    "bodyEn": "Section 3: \"preferred programming language\" returns no hit, because \"preferred\" and \"prefers\" are different tokens and nothing else overlaps. \"which tongue does Akshay like coding in\" scores 0.083 purely because the name \"Akshay\" matches, so the right memory arrives for the wrong reason. A Kannada query returns no hit at all, because the tokenizer sees no Latin letters. These are exactly the cases embeddings handle, and a bilingual platform needs an embedding model that covers every script.",
    "bodyKn": "ವಿಭಾಗ 3: \"preferred programming language\" ಯಾವ ಹಿಟ್ ಅನ್ನೂ ಹಿಂತಿರುಗಿಸುವುದಿಲ್ಲ, ಏಕೆಂದರೆ \"preferred\" ಮತ್ತು \"prefers\" ಬೇರೆ tokens ಮತ್ತು ಬೇರೆ ಏನೂ ಅತಿಕ್ರಮಿಸುವುದಿಲ್ಲ. \"which tongue does Akshay like coding in\" ಕೇವಲ \"Akshay\" ಹೆಸರು ಹೊಂದುವುದರಿಂದ 0.083 ಅಂಕ ಪಡೆಯುತ್ತದೆ, ಹಾಗಾಗಿ ಸರಿಯಾದ ಮೆಮೊರಿ ತಪ್ಪು ಕಾರಣಕ್ಕೆ ಬರುತ್ತದೆ. ಕನ್ನಡ ಪ್ರಶ್ನೆ ಯಾವ ಹಿಟ್ ಅನ್ನೂ ಕೊಡುವುದಿಲ್ಲ, ಏಕೆಂದರೆ tokenizer ಗೆ ಲ್ಯಾಟಿನ್ ಅಕ್ಷರಗಳು ಕಾಣುವುದಿಲ್ಲ. ಇವು ಸರಿಯಾಗಿ embeddings ನಿರ್ವಹಿಸುವ ಪ್ರಕರಣಗಳು, ಮತ್ತು ದ್ವಿಭಾಷಾ ವೇದಿಕೆಗೆ ಪ್ರತಿ ಲಿಪಿಯನ್ನೂ ಒಳಗೊಂಡ embedding ಮಾದರಿ ಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Ownership and Scope Keys",
    "headingKn": "ಮಾಲೀಕತ್ವ ಮತ್ತು Scope Keys",
    "bodyEn": "Section 4: user_002 asking \"Bob prefers Rust\" finds Bob's record, while user_001 asking the same thing never sees it; user_001 instead gets its own Akshay record, matched only through the word \"prefers\". Session A and session B each see only their own sentence. Section 5 checks the KV key: sessions A and B store two entries, staging and production, because session_id is part of the key; without it the second write would have replaced the first. The key is also case-sensitive here, so looking up \"Environment\" finds nothing, which is why Part 2 normalizes it.",
    "bodyKn": "ವಿಭಾಗ 4: user_002 \"Bob prefers Rust\" ಕೇಳಿದರೆ Bob ನ ದಾಖಲೆ ಸಿಗುತ್ತದೆ, ಆದರೆ user_001 ಅದೇ ಕೇಳಿದರೆ ಅದನ್ನು ಎಂದೂ ನೋಡುವುದಿಲ್ಲ; ಬದಲಿಗೆ user_001 ಗೆ ತನ್ನದೇ Akshay ದಾಖಲೆ ಸಿಗುತ್ತದೆ, \"prefers\" ಪದದ ಮೂಲಕ ಮಾತ್ರ ಹೊಂದಿ. Session A ಮತ್ತು session B ಪ್ರತಿಯೊಂದೂ ತಮ್ಮದೇ ವಾಕ್ಯ ಮಾತ್ರ ನೋಡುತ್ತವೆ. ವಿಭಾಗ 5 KV key ಪರಿಶೀಲಿಸುತ್ತದೆ: sessions A ಮತ್ತು B ಎರಡು ನಮೂದುಗಳನ್ನು, staging ಮತ್ತು production, ಸಂಗ್ರಹಿಸುತ್ತವೆ, ಏಕೆಂದರೆ session_id key ನ ಭಾಗ; ಅದಿಲ್ಲದಿದ್ದರೆ ಎರಡನೇ ಬರವಣಿಗೆ ಮೊದಲನೆಯದನ್ನು ಬದಲಿಸುತ್ತಿತ್ತು. ಇಲ್ಲಿ key ದೊಡ್ಡ-ಸಣ್ಣ ಅಕ್ಷರ ಸೂಕ್ಷ್ಮವೂ ಹೌದು, ಆದ್ದರಿಂದ \"Environment\" ಹುಡುಕಿದರೆ ಏನೂ ಸಿಗುವುದಿಲ್ಲ, ಅದಕ್ಕಾಗಿ ಭಾಗ 2 ಅದನ್ನು ಸಾಮಾನ್ಯೀಕರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why Similarity Alone Is Not Enough",
    "headingKn": "ಹೋಲಿಕೆ ಮಾತ್ರ ಏಕೆ ಸಾಕಾಗದು",
    "bodyEn": "Section 7 compares a casual mention (relevance 0.90, importance 0.30, recency 0.90) with the primary-language fact (0.84, 0.95, 0.70). With weights 0.5, 0.3 and 0.2, the first scores 0.720 and the second 0.845, so the less similar memory wins because it matters more. Retrieval is therefore not just max(relevance); Part 3 builds that scoring. Two further problems are named here and solved later: a changed fact must not leave two valid answers, and an extractor that turns one sentence into dozens of edges would flood the graph.",
    "bodyKn": "ವಿಭಾಗ 7 ಸಾಮಾನ್ಯ ಉಲ್ಲೇಖ (ಪ್ರಸ್ತುತತೆ 0.90, ಮಹತ್ವ 0.30, ತಾಜಾತನ 0.90) ಮತ್ತು ಪ್ರಾಥಮಿಕ-ಭಾಷೆ ಸಂಗತಿ (0.84, 0.95, 0.70) ಹೋಲಿಸುತ್ತದೆ. 0.5, 0.3 ಮತ್ತು 0.2 ತೂಕಗಳೊಂದಿಗೆ ಮೊದಲನೆಯದು 0.720, ಎರಡನೆಯದು 0.845, ಆದ್ದರಿಂದ ಕಡಿಮೆ ಹೋಲುವ ಮೆಮೊರಿ ಹೆಚ್ಚು ಮುಖ್ಯವಾದ್ದರಿಂದ ಗೆಲ್ಲುತ್ತದೆ. ಆದ್ದರಿಂದ ಪಡೆಯುವಿಕೆ ಕೇವಲ max(relevance) ಅಲ್ಲ; ಭಾಗ 3 ಆ ಅಂಕ ನಿರ್ಮಿಸುತ್ತದೆ. ಇನ್ನೂ ಎರಡು ಸಮಸ್ಯೆಗಳನ್ನು ಇಲ್ಲಿ ಹೆಸರಿಸಿ ನಂತರ ಪರಿಹರಿಸಲಾಗುತ್ತದೆ: ಬದಲಾದ ಸಂಗತಿ ಎರಡು ಮಾನ್ಯ ಉತ್ತರ ಉಳಿಸಬಾರದು, ಮತ್ತು ಒಂದು ವಾಕ್ಯವನ್ನು ಡಜನ್‌ಗಟ್ಟಲೆ edges ಮಾಡುವ ಹೊರತೆಗೆಯುವಿಕೆ graph ಅನ್ನು ತುಂಬಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Agent memory is not \"store chat, retrieve chat\". A useful memory must answer what is similar, what is exact, what is connected, what is current, what was previously true, who owns it, how much it matters and how fresh it is. Splitting the representations lets each question use the index built for it.",
    "bodyKn": "Agent ಮೆಮೊರಿ \"ಚಾಟ್ ಸಂಗ್ರಹಿಸು, ಚಾಟ್ ಪಡೆ\" ಅಲ್ಲ. ಉಪಯುಕ್ತ ಮೆಮೊರಿ ಏನು ಹೋಲುತ್ತದೆ, ಏನು ನಿಖರ, ಏನು ಸಂಪರ್ಕಿತ, ಏನು ಪ್ರಸ್ತುತ, ಹಿಂದೆ ಏನು ನಿಜವಾಗಿತ್ತು, ಯಾರದು, ಎಷ್ಟು ಮುಖ್ಯ ಮತ್ತು ಎಷ್ಟು ತಾಜಾ ಎಂಬುದಕ್ಕೆ ಉತ್ತರಿಸಬೇಕು. ನಿರೂಪಣೆಗಳನ್ನು ವಿಭಜಿಸುವುದು ಪ್ರತಿ ಪ್ರಶ್ನೆಗೆ ಅದಕ್ಕಾಗಿ ನಿರ್ಮಿಸಿದ ಸೂಚಿ ಬಳಸಲು ಅವಕಾಶ ನೀಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a vector database is the memory.\" It is one index over the memory. Using it for a phone-number lookup spends an embedding call and a ranking pass on something a dictionary answers exactly.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"vector ಡೇಟಾಬೇಸ್ ಎಂದರೆ ಮೆಮೊರಿ.\" ಅದು ಮೆಮೊರಿಯ ಮೇಲಿನ ಒಂದು ಸೂಚಿ ಮಾತ್ರ. ಫೋನ್ ಸಂಖ್ಯೆ ಹುಡುಕಾಟಕ್ಕೆ ಅದನ್ನು ಬಳಸುವುದು ನಿಘಂಟು ನಿಖರವಾಗಿ ಉತ್ತರಿಸುವುದಕ್ಕೆ embedding ಕರೆ ಮತ್ತು ಶ್ರೇಣೀಕರಣ ಪಾಸ್ ಖರ್ಚು ಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "MemoryRecord: the normalized logical memory. Scope: user, session or agent namespace. Vector store: similarity retrieval. KV store: exact keyed lookup of current state. Graph store: typed relationships. Jaccard similarity: shared tokens over all tokens. Hard filter: eligibility rule applied before ranking. Fusion: combining candidates into one ranked list.",
    "bodyKn": "MemoryRecord: ಸಾಮಾನ್ಯೀಕೃತ ತಾರ್ಕಿಕ ಮೆಮೊರಿ. Scope: user, session ಅಥವಾ agent namespace. Vector ಸಂಗ್ರಹ: ಹೋಲಿಕೆ ಪಡೆಯುವಿಕೆ. KV ಸಂಗ್ರಹ: ಪ್ರಸ್ತುತ ಸ್ಥಿತಿಯ ನಿಖರ key ಹುಡುಕಾಟ. Graph ಸಂಗ್ರಹ: ಟೈಪ್ ಮಾಡಿದ ಸಂಬಂಧಗಳು. Jaccard ಹೋಲಿಕೆ: ಹಂಚಿಕೆಯ tokens ಭಾಗಿಸು ಎಲ್ಲಾ tokens. ಕಠಿಣ ಫಿಲ್ಟರ್: ಶ್ರೇಣೀಕರಣದ ಮೊದಲು ಅನ್ವಯಿಸುವ ಅರ್ಹತಾ ನಿಯಮ. Fusion: ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಒಂದು ಶ್ರೇಣೀಕೃತ ಪಟ್ಟಿಯಾಗಿ ಸಂಯೋಜಿಸುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Semantic, exact and relational queries need different indexes. 2) The stores run in parallel and are merged by memory id. 3) Ownership is a hard filter before ranking. 4) Scope belongs in the KV key. 5) The token-overlap stand-in missed a paraphrase, matched on a name alone and was blind to Kannada. 6) The less similar memory can rightly win once importance and recency count. Part 2 builds the write path.",
    "bodyKn": "1) Semantic, ನಿಖರ ಮತ್ತು ಸಂಬಂಧ ಪ್ರಶ್ನೆಗಳಿಗೆ ಬೇರೆ ಬೇರೆ ಸೂಚಿಗಳು ಬೇಕು. 2) ಸಂಗ್ರಹಗಳು ಸಮಾನಾಂತರವಾಗಿ ಚಲಿಸಿ ಮೆಮೊರಿ id ಯಿಂದ ವಿಲೀನವಾಗುತ್ತವೆ. 3) ಮಾಲೀಕತ್ವ ಶ್ರೇಣೀಕರಣದ ಮೊದಲು ಕಠಿಣ ಫಿಲ್ಟರ್. 4) Scope KV key ನಲ್ಲಿ ಇರಬೇಕು. 5) Token-ಅತಿಕ್ರಮಣ ಬದಲಿ ಪರ್ಯಾಯ ಪದಗುಚ್ಛ ತಪ್ಪಿಸಿತು, ಕೇವಲ ಹೆಸರಿನಿಂದ ಹೊಂದಿತು ಮತ್ತು ಕನ್ನಡಕ್ಕೆ ಕುರುಡಾಗಿತ್ತು. 6) ಮಹತ್ವ ಮತ್ತು ತಾಜಾತನ ಎಣಿಕೆಯಾದಾಗ ಕಡಿಮೆ ಹೋಲುವ ಮೆಮೊರಿ ಸರಿಯಾಗಿ ಗೆಲ್ಲಬಹುದು. ಭಾಗ 2 ಬರವಣಿಗೆ ದಾರಿ ನಿರ್ಮಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why is vector-only memory insufficient for a production agent?",
      "qKn": "Production agent ಗೆ vector-ಮಾತ್ರ ಮೆಮೊರಿ ಸಾಕಾಗದು ಏಕೆ?",
      "opts": [
       "Vector databases cannot store text",
       "Exact fact lookup and relationship reasoning have different best access patterns",
       "Vectors only work with images",
       "Vector stores cannot support many users"
      ],
      "optsKn": [
       "Vector ಡೇಟಾಬೇಸ್‌ಗಳು ಪಠ್ಯ ಸಂಗ್ರಹಿಸಲಾರವು",
       "ನಿಖರ ಸಂಗತಿ ಹುಡುಕಾಟ ಮತ್ತು ಸಂಬಂಧ ತರ್ಕಕ್ಕೆ ಬೇರೆ ಉತ್ತಮ ಪ್ರವೇಶ ಮಾದರಿಗಳಿವೆ",
       "Vectors ಚಿತ್ರಗಳೊಂದಿಗೆ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತವೆ",
       "Vector ಸಂಗ್ರಹಗಳು ಹಲವು ಬಳಕೆದಾರರನ್ನು ಬೆಂಬಲಿಸಲಾರವು"
      ],
      "correct": 1
     },
     {
      "q": "Which store is natural for \"What is user_42's preferred programming language?\"",
      "qKn": "\"user_42 ರ ಆದ್ಯತೆಯ ಪ್ರೋಗ್ರಾಮಿಂಗ್ ಭಾಷೆ ಯಾವುದು?\" ಗೆ ಯಾವ ಸಂಗ್ರಹ ಸಹಜ?",
      "opts": [
       "Graph",
       "Vector only",
       "KV",
       "Queue"
      ],
      "optsKn": [
       "Graph",
       "Vector ಮಾತ್ರ",
       "KV",
       "Queue"
      ],
      "correct": 2
     },
     {
      "q": "In the run, why did a query by user_001 never return Bob's record?",
      "qKn": "ಓಟದಲ್ಲಿ user_001 ರ ಪ್ರಶ್ನೆ Bob ನ ದಾಖಲೆಯನ್ನು ಎಂದೂ ಏಕೆ ಹಿಂತಿರುಗಿಸಲಿಲ್ಲ?",
      "opts": [
       "Bob's record had low similarity",
       "Ownership is a hard filter applied before similarity is computed",
       "Bob's record was deleted",
       "The KV store removed it"
      ],
      "optsKn": [
       "Bob ನ ದಾಖಲೆಯ ಹೋಲಿಕೆ ಕಡಿಮೆ",
       "ಹೋಲಿಕೆ ಲೆಕ್ಕಹಾಕುವ ಮೊದಲು ಮಾಲೀಕತ್ವ ಕಠಿಣ ಫಿಲ್ಟರ್ ಆಗಿ ಅನ್ವಯಿಸುತ್ತದೆ",
       "Bob ನ ದಾಖಲೆ ಅಳಿಸಲಾಗಿತ್ತು",
       "KV ಸಂಗ್ರಹ ಅದನ್ನು ತೆಗೆಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why is session_id part of the KV key?",
      "qKn": "KV key ನಲ್ಲಿ session_id ಏಕೆ ಇದೆ?",
      "opts": [
       "To speed up hashing",
       "So the same fact_type and entity in different sessions do not overwrite each other",
       "To enlarge embeddings",
       "Because dictionaries need three fields"
      ],
      "optsKn": [
       "hashing ವೇಗಗೊಳಿಸಲು",
       "ಬೇರೆ sessions ನಲ್ಲಿ ಅದೇ fact_type ಮತ್ತು entity ಒಂದನ್ನೊಂದು ಬದಲಿಸದಂತೆ",
       "embeddings ದೊಡ್ಡದಾಗಿಸಲು",
       "ನಿಘಂಟುಗಳಿಗೆ ಮೂರು ಕ್ಷೇತ್ರ ಬೇಕು"
      ],
      "correct": 1
     },
     {
      "q": "What is the best mental model for the three stores?",
      "qKn": "ಮೂರು ಸಂಗ್ರಹಗಳಿಗೆ ಉತ್ತಮ ಮಾನಸಿಕ ಮಾದರಿ ಯಾವುದು?",
      "opts": [
       "Vector = exact key, KV = semantic, Graph = cache",
       "Vector = \"sounds like\", KV = \"exactly this key\", Graph = \"connected to\"",
       "All three run the same algorithm",
       "Always query them one after another as fallbacks"
      ],
      "optsKn": [
       "Vector = ನಿಖರ key, KV = semantic, Graph = cache",
       "Vector = \"ಹೋಲುತ್ತದೆ\", KV = \"ಸರಿಯಾಗಿ ಈ key\", Graph = \"ಜೊತೆ ಸಂಪರ್ಕಿತ\"",
       "ಮೂರೂ ಒಂದೇ ಅಲ್ಗಾರಿದಮ್ ಚಲಾಯಿಸುತ್ತವೆ",
       "ಯಾವಾಗಲೂ ಬದಲಿಗಳಾಗಿ ಒಂದರ ನಂತರ ಒಂದು ಪ್ರಶ್ನಿಸಿ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
