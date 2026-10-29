module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321526",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Hybrid Memory: Vector + Graph + KV (Part 2 of 3) — One add(), Extraction and Temporal Invalidation",
 "titleKn": "Hybrid Memory: Vector + Graph + KV (ಭಾಗ 2 / 3) — ಒಂದು add(), ಹೊರತೆಗೆಯುವಿಕೆ ಮತ್ತು ಕಾಲಿಕ ಅಮಾನ್ಯೀಕರಣ",
 "desc": "Build a coordinated add() that validates first and writes three synchronized views, invalidate conflicting graph edges while preserving history, bound graph growth, and find the limits of regex extraction and a hand-written relation list.",
 "descKn": "ಮೊದಲು ಮಾನ್ಯ ಮಾಡಿ ಮೂರು ಸಮನ್ವಿತ ನೋಟಗಳನ್ನು ಬರೆಯುವ ಸಮನ್ವಯ add() ನಿರ್ಮಿಸಿ, ಇತಿಹಾಸ ಉಳಿಸಿ ಸಂಘರ್ಷದ graph edges ಅಮಾನ್ಯಗೊಳಿಸಿ, graph ಬೆಳವಣಿಗೆಗೆ ಮಿತಿ ಹಾಕಿ, ಮತ್ತು regex ಹೊರತೆಗೆಯುವಿಕೆ ಹಾಗೂ ಕೈಬರಹ ಸಂಬಂಧ ಪಟ್ಟಿಯ ಮಿತಿಗಳನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Implement add() with validation before mutation and a shared memory id.",
  "Explain the different temporal behaviour of vector, KV and graph.",
  "Invalidate conflicting single-valued edges and query history by time.",
  "Bound graph growth with duplicates, a confidence floor and a cap.",
  "Identify the limits of deterministic extraction and relation allowlists."
 ],
 "objectivesKn": [
  "ಬದಲಾವಣೆ ಮೊದಲು ಮಾನ್ಯತೆ ಮತ್ತು ಹಂಚಿಕೆಯ ಮೆಮೊರಿ id ಇರುವ add() ಅಳವಡಿಸಿ.",
  "Vector, KV ಮತ್ತು graph ನ ಬೇರೆ ಕಾಲಿಕ ವರ್ತನೆ ವಿವರಿಸಿ.",
  "ಸಂಘರ್ಷದ ಏಕ-ಮೌಲ್ಯ edges ಅಮಾನ್ಯಗೊಳಿಸಿ ಮತ್ತು ಸಮಯದ ಮೂಲಕ ಇತಿಹಾಸ ಪ್ರಶ್ನಿಸಿ.",
  "ನಕಲು, ವಿಶ್ವಾಸ ಕನಿಷ್ಠ ಮತ್ತು ಮಿತಿಯಿಂದ graph ಬೆಳವಣಿಗೆಗೆ ಮಿತಿ ಹಾಕಿ.",
  "ನಿರ್ಧಾರಾತ್ಮಕ ಹೊರತೆಗೆಯುವಿಕೆ ಮತ್ತು ಸಂಬಂಧ ಅನುಮತಿ ಪಟ್ಟಿಯ ಮಿತಿಗಳನ್ನು ಗುರುತಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Hybrid Memory: Vector + Graph + KV (Part 2 of 3)",
    "textKn": "Hybrid Memory: Vector + Graph + KV (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: one coordinated add(), fact extraction, temporal invalidation and namespace isolation. Every output below was genuinely produced by the lab file on Python 3.14.5. The pasted source was cut off at section 110, so the closing sections are rebuilt. Timestamps in section 8 are set explicitly, because a fast run would otherwise create and invalidate an edge within the same instant. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಒಂದು ಸಮನ್ವಯ add(), ಸಂಗತಿ ಹೊರತೆಗೆಯುವಿಕೆ, ಕಾಲಿಕ ಅಮಾನ್ಯೀಕರಣ ಮತ್ತು namespace ಪ್ರತ್ಯೇಕತೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಅಂಟಿಸಿದ ಮೂಲ ವಿಭಾಗ 110 ರಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ ಮುಕ್ತಾಯ ವಿಭಾಗಗಳನ್ನು ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. ವಿಭಾಗ 8 ರ ಟೈಮ್‌ಸ್ಟ್ಯಾಂಪ್‌ಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಹೊಂದಿಸಲಾಗಿದೆ, ಏಕೆಂದರೆ ವೇಗದ ಓಟ ಒಂದೇ ಕ್ಷಣದಲ್ಲಿ edge ರಚಿಸಿ ಅಮಾನ್ಯಗೊಳಿಸುತ್ತಿತ್ತು. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "One Write, Three Views",
    "textKn": "ಒಂದು ಬರವಣಿಗೆ, ಮೂರು ನೋಟಗಳು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why add() Must Coordinate",
    "headingKn": "add() ಏಕೆ ಸಮನ್ವಯ ಮಾಡಬೇಕು",
    "bodyEn": "If application code calls vector.add, kv.add and graph.add_edge itself, one forgotten call leaves the stores disagreeing about the same fact. add() is the single ingestion boundary: validate, create one record, write the vector and KV views, then filter and write graph facts. Validation comes first, so a bad request mutates nothing. The three entries are views of one fact, and they all carry the same memory id.",
    "bodyKn": "ಅಪ್ಲಿಕೇಶನ್ ಕೋಡ್ ಸ್ವತಃ vector.add, kv.add ಮತ್ತು graph.add_edge ಕರೆದರೆ, ಒಂದು ಮರೆತ ಕರೆ ಸಂಗ್ರಹಗಳು ಅದೇ ಸಂಗತಿಯ ಬಗ್ಗೆ ಭಿನ್ನಾಭಿಪ್ರಾಯ ಹೊಂದುವಂತೆ ಮಾಡುತ್ತದೆ. add() ಏಕೈಕ ಒಳಸೇರಿಸುವ ಗಡಿ: ಮಾನ್ಯ ಮಾಡಿ, ಒಂದು ದಾಖಲೆ ರಚಿಸಿ, vector ಮತ್ತು KV ನೋಟಗಳನ್ನು ಬರೆದು, ನಂತರ graph ಸಂಗತಿಗಳನ್ನು ಫಿಲ್ಟರ್ ಮಾಡಿ ಬರೆಯಿರಿ. ಮಾನ್ಯತೆ ಮೊದಲು ಬರುತ್ತದೆ, ಆದ್ದರಿಂದ ತಪ್ಪು ವಿನಂತಿ ಏನನ್ನೂ ಬದಲಿಸುವುದಿಲ್ಲ. ಮೂರು ನಮೂದುಗಳು ಒಂದು ಸಂಗತಿಯ ನೋಟಗಳು, ಮತ್ತು ಎಲ್ಲವೂ ಅದೇ ಮೆಮೊರಿ id ಹೊಂದಿವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "How each store treats an update",
    "headingKn": "ಪ್ರತಿ ಸಂಗ್ರಹ ನವೀಕರಣವನ್ನು ಹೇಗೆ ನಿರ್ವಹಿಸುತ್ತದೆ",
    "headers": [
     "Store",
     "Old fact",
     "New fact",
     "Answers"
    ],
    "rows": [
     [
      "Vector",
      "Kept",
      "Appended",
      "What was ever said"
     ],
     [
      "KV",
      "Overwritten under the same key",
      "Becomes the current value",
      "What is true now"
     ],
     [
      "Graph",
      "Marked invalid, not deleted",
      "New valid edge",
      "What was true when"
     ]
    ]
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Fact Extraction and Graph Hygiene",
    "headingKn": "ಸಂಗತಿ ಹೊರತೆಗೆಯುವಿಕೆ ಮತ್ತು Graph ಸ್ವಚ್ಛತೆ",
    "bodyEn": "Users speak in sentences, while KV needs fact_type, entity and value and the graph needs subject, relation and object. Turning the first into the others is fact extraction, which an LLM would do in production; this lab accepts explicit structured arguments plus a tiny regex extractor so every representation is visible. Graph writes are bounded by a confidence floor of 0.60 and a cap of five edges per add, and an identical active edge is never added twice.",
    "bodyKn": "ಬಳಕೆದಾರರು ವಾಕ್ಯಗಳಲ್ಲಿ ಮಾತನಾಡುತ್ತಾರೆ, ಆದರೆ KV ಗೆ fact_type, entity ಮತ್ತು value ಬೇಕು ಮತ್ತು graph ಗೆ subject, relation ಮತ್ತು object ಬೇಕು. ಮೊದಲನೆಯದನ್ನು ಉಳಿದವುಗಳಾಗಿ ಪರಿವರ್ತಿಸುವುದು ಸಂಗತಿ ಹೊರತೆಗೆಯುವಿಕೆ, production ನಲ್ಲಿ LLM ಮಾಡುತ್ತದೆ; ಪ್ರತಿ ನಿರೂಪಣೆ ಕಾಣುವಂತೆ ಈ ಲ್ಯಾಬ್ ಸ್ಪಷ್ಟ ರಚನಾತ್ಮಕ ಆರ್ಗ್ಯುಮೆಂಟ್‌ಗಳು ಮತ್ತು ಚಿಕ್ಕ regex ಹೊರತೆಗೆಯುವಿಕೆ ಸ್ವೀಕರಿಸುತ್ತದೆ. Graph ಬರವಣಿಗೆಗಳು 0.60 ವಿಶ್ವಾಸ ಕನಿಷ್ಠ ಮತ್ತು ಪ್ರತಿ add ಗೆ ಐದು edges ಮಿತಿಯಿಂದ ಬದ್ಧ, ಮತ್ತು ಒಂದೇ ರೀತಿಯ ಸಕ್ರಿಯ edge ಎಂದೂ ಎರಡು ಬಾರಿ ಸೇರಿಸಲ್ಪಡುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Temporal Invalidation",
    "headingKn": "ಕಾಲಿಕ ಅಮಾನ್ಯೀಕರಣ",
    "bodyEn": "For a single-valued relation such as lives_in, a new edge with the same user, scope, subject and relation but a different object marks the old edge invalid and stamps invalidated_at. Nothing is deleted: invalidation preserves history, deletion destroys it. An edge was valid at time t when created_at <= t < invalidated_at. Multi-valued relations such as works_on are left alone, because Alice can work on two projects. Conflict matching never crosses the user, session or agent boundary.",
    "bodyKn": "lives_in ನಂತಹ ಏಕ-ಮೌಲ್ಯ ಸಂಬಂಧಕ್ಕೆ, ಅದೇ user, scope, subject ಮತ್ತು relation ಆದರೆ ಬೇರೆ object ಇರುವ ಹೊಸ edge ಹಳೆಯ edge ಅನ್ನು invalid ಎಂದು ಗುರುತಿಸಿ invalidated_at ಮುದ್ರಿಸುತ್ತದೆ. ಏನನ್ನೂ ಅಳಿಸಲಾಗುವುದಿಲ್ಲ: ಅಮಾನ್ಯೀಕರಣ ಇತಿಹಾಸ ಉಳಿಸುತ್ತದೆ, ಅಳಿಸುವಿಕೆ ಅದನ್ನು ನಾಶಮಾಡುತ್ತದೆ. created_at <= t < invalidated_at ಆದಾಗ edge ಕಾಲ t ಯಲ್ಲಿ ಮಾನ್ಯವಾಗಿತ್ತು. works_on ನಂತಹ ಬಹು-ಮೌಲ್ಯ ಸಂಬಂಧಗಳನ್ನು ಬಿಡಲಾಗುತ್ತದೆ, ಏಕೆಂದರೆ Alice ಎರಡು ಪ್ರಾಜೆಕ್ಟ್‌ಗಳಲ್ಲಿ ಕೆಲಸ ಮಾಡಬಹುದು. ಸಂಘರ್ಷ ಹೊಂದಾಣಿಕೆ ಎಂದೂ user, session ಅಥವಾ agent ಗಡಿ ದಾಟುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building add()",
    "textKn": "add() ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "hybrid_2.py",
    "headingEn": "Validation, GraphStore with invalidation, and HybridMemory.add()",
    "headingKn": "ಮಾನ್ಯತೆ, ಅಮಾನ್ಯೀಕರಣ ಇರುವ GraphStore, ಮತ್ತು HybridMemory.add()",
    "descEn": "validate_scope and the emptiness checks run before any write. KVStore normalizes its key dimensions. GraphStore.add_edge skips an exact active duplicate, then invalidates conflicting edges, then appends. HybridMemory.add returns an AddResult so a caller can see how many graph facts were rejected. records_by_id lets later graph hits find their source record.",
    "descKn": "validate_scope ಮತ್ತು ಖಾಲಿತನ ಪರಿಶೀಲನೆಗಳು ಯಾವುದೇ ಬರವಣಿಗೆ ಮೊದಲು ಚಲಿಸುತ್ತವೆ. KVStore ತನ್ನ key ಆಯಾಮಗಳನ್ನು ಸಾಮಾನ್ಯೀಕರಿಸುತ್ತದೆ. GraphStore.add_edge ಒಂದೇ ರೀತಿಯ ಸಕ್ರಿಯ ನಕಲು ಬಿಟ್ಟು, ನಂತರ ಸಂಘರ್ಷ edges ಅಮಾನ್ಯಗೊಳಿಸಿ, ನಂತರ ಸೇರಿಸುತ್ತದೆ. HybridMemory.add AddResult ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಕರೆಯುವವರು ಎಷ್ಟು graph ಸಂಗತಿಗಳು ತಿರಸ್ಕೃತವಾದವು ಎಂದು ನೋಡಬಹುದು. records_by_id ನಂತರದ graph ಹಿಟ್‌ಗಳಿಗೆ ಅವುಗಳ ಮೂಲ ದಾಖಲೆ ಹುಡುಕಲು ಅವಕಾಶ ನೀಡುತ್ತದೆ.",
    "code": "def validate_scope(scope, session_id, agent_id) -> None:\n    if scope not in VALID_SCOPES:\n        raise ValueError(f\"Unsupported scope: {scope}\")\n    if scope == \"session\" and not session_id:\n        raise ValueError(\"session scope requires session_id\")\n    if scope == \"agent\" and not agent_id:\n        raise ValueError(\"agent scope requires agent_id\")\n\n\n@dataclass\nclass GraphFact:\n    subject: str\n    relation: str\n    object: str\n    confidence: float = 1.0\n\n\n@dataclass\nclass AddResult:\n    record: MemoryRecord\n    graph_edges_added: list\n    graph_facts_rejected: int\n\n\ndef filter_graph_facts(facts, *, min_confidence, max_edges):\n    accepted = [f for f in facts if f.confidence >= min_confidence]\n    accepted.sort(key=lambda f: f.confidence, reverse=True)\n    return accepted[:max_edges]\n\n\nclass KVStore:\n    \"\"\"Part 2 version: structured dimensions are normalized so 'Language' and 'language' are one key.\"\"\"\n\n    def __init__(self):\n        self.data = {}\n\n    def _key(self, record):\n        return (record.user_id, record.scope, record.session_id, record.agent_id,\n                normalize_name(record.fact_type), normalize_name(record.entity))\n\n    def add(self, record):\n        self.data[self._key(record)] = record\n\n    def get(self, user_id, scope, fact_type, entity, session_id=None, agent_id=None):\n        return self.data.get((user_id, scope, session_id, agent_id, normalize_name(fact_type), normalize_name(entity)))\n\n\ndef edge_valid_at(edge: GraphEdge, when: datetime) -> bool:\n    if when < edge.created_at:\n        return False\n    if edge.invalidated_at is not None and when >= edge.invalidated_at:\n        return False\n    return True\n\n\nclass GraphStore:\n    def __init__(self):\n        self.edges = []\n\n    def _same_namespace(self, edge, user_id, scope, session_id, agent_id):\n        if edge.user_id != user_id or edge.scope != scope:\n            return False\n        if scope == \"session\" and edge.session_id != session_id:\n            return False\n        if scope == \"agent\" and edge.agent_id != agent_id:\n            return False\n        return True\n\n    def invalidate_conflicts(self, *, user_id, scope, subject, relation, new_object, session_id=None, agent_id=None):\n        invalidated = []\n        ns, nr, no = normalize_name(subject), normalize_name(relation), normalize_name(new_object)\n        if nr not in SINGLE_VALUED_RELATIONS:\n            return invalidated\n        for edge in self.edges:\n            if not self._same_namespace(edge, user_id, scope, session_id, agent_id) or not edge.valid:\n                continue\n            if normalize_name(edge.subject) == ns and normalize_name(edge.relation) == nr and normalize_name(edge.object) != no:\n                edge.valid = False\n                edge.invalidated_at = now_utc()\n                invalidated.append(edge)\n        return invalidated\n\n    def has_active_edge(self, *, user_id, scope, subject, relation, object_, session_id=None, agent_id=None):\n        for edge in self.edges:\n            if not edge.valid or not self._same_namespace(edge, user_id, scope, session_id, agent_id):\n                continue\n            if (normalize_name(edge.subject) == normalize_name(subject) and normalize_name(edge.relation) == normalize_name(relation)\n                    and normalize_name(edge.object) == normalize_name(object_)):\n                return True\n        return False\n\n    def add_edge(self, record, subject, relation, object_):\n        if self.has_active_edge(user_id=record.user_id, scope=record.scope, subject=subject, relation=relation,\n                                object_=object_, session_id=record.session_id, agent_id=record.agent_id):\n            return None\n        self.invalidate_conflicts(user_id=record.user_id, scope=record.scope, subject=subject, relation=relation,\n                                  new_object=object_, session_id=record.session_id, agent_id=record.agent_id)\n        edge = GraphEdge(id=str(uuid.uuid4()), user_id=record.user_id, scope=record.scope, subject=subject,\n                         relation=relation, object=object_, valid=True, created_at=now_utc(),\n                         session_id=record.session_id, agent_id=record.agent_id, memory_id=record.id)\n        self.edges.append(edge)\n        return edge\n\n    def find_related(self, entity, user_id, scope, session_id=None, agent_id=None, include_invalid=False):\n        wanted, out = normalize_name(entity), []\n        for edge in self.edges:\n            if not self._same_namespace(edge, user_id, scope, session_id, agent_id):\n                continue\n            if not include_invalid and not edge.valid:\n                continue\n            if normalize_name(edge.subject) == wanted or normalize_name(edge.object) == wanted:\n                out.append(edge)\n        return out\n\n    def find_related_at(self, *, entity, user_id, scope, when, session_id=None, agent_id=None):\n        wanted, out = normalize_name(entity), []\n        for edge in self.edges:\n            if not self._same_namespace(edge, user_id, scope, session_id, agent_id):\n                continue\n            if edge_valid_at(edge, when) and wanted in (normalize_name(edge.subject), normalize_name(edge.object)):\n                out.append(edge)\n        return out\n\n\ndef extract_demo_graph_facts(text: str):\n    patterns = [(r\"(.+?) lives in (.+?)[.]?$\", \"lives_in\"), (r\"(.+?) works on (.+?)[.]?$\", \"works_on\"),\n                (r\"(.+?) prefers (.+?)[.]?$\", \"prefers\"), (r\"(.+?) is billed by (.+?)[.]?$\", \"billing_entity\")]\n    facts = []\n    for pattern, relation in patterns:\n        m = re.fullmatch(pattern, text.strip(), flags=re.IGNORECASE)\n        if m:\n            facts.append(GraphFact(m.group(1).strip(), relation, m.group(2).strip(), 0.85))\n    return facts\n\n\ndef describe_edge(edge: GraphEdge) -> str:\n    return f\"{edge.subject} -[{edge.relation}]-> {edge.object} ({'valid' if edge.valid else 'invalid'})\"\n\n\nclass HybridMemory:\n    def __init__(self, *, min_graph_confidence=MIN_GRAPH_CONFIDENCE, max_graph_edges_per_add=MAX_GRAPH_EDGES_PER_ADD):\n        self.vector, self.kv, self.graph = VectorStore(), KVStore(), GraphStore()\n        self.min_graph_confidence = min_graph_confidence\n        self.max_graph_edges_per_add = max_graph_edges_per_add\n        self.records_by_id = {}\n\n    def add(self, *, text, user_id, scope, fact_type, entity, value, importance=0.5, session_id=None,\n            agent_id=None, metadata=None, graph_facts=None, auto_extract_graph=False) -> AddResult:\n        validate_scope(scope, session_id, agent_id)\n        for name, v in ((\"text\", text), (\"user_id\", user_id), (\"fact_type\", fact_type), (\"entity\", entity)):\n            if not v.strip():\n                raise ValueError(f\"{name} cannot be empty\")\n        record = make_record(text, user_id, scope, fact_type, entity, value, importance, session_id, agent_id, metadata)\n        self.records_by_id[record.id] = record\n        self.vector.add(record)\n        self.kv.add(record)\n        if graph_facts is None and auto_extract_graph:\n            graph_facts = extract_demo_graph_facts(text)\n        candidates = graph_facts or []\n        accepted = filter_graph_facts(candidates, min_confidence=self.min_graph_confidence, max_edges=self.max_graph_edges_per_add)\n        added = []\n        for fact in accepted:\n            edge = self.graph.add_edge(record, fact.subject, fact.relation, fact.object)\n            if edge is not None:\n                added.append(edge)\n        return AddResult(record, added, len(candidates) - len(accepted))"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "hybrid_2.py",
    "headingEn": "main(): nine experiments",
    "headingKn": "main(): ಒಂಬತ್ತು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() checks the three write views, an update, multi-valued relations, duplicates and caps, validation before writes, namespace isolation, the regex extractor, timestamped history queries, and a relation the invalidation list does not know.",
    "descKn": "main() ಮೂರು ಬರವಣಿಗೆ ನೋಟಗಳು, ನವೀಕರಣ, ಬಹು-ಮೌಲ್ಯ ಸಂಬಂಧಗಳು, ನಕಲು ಮತ್ತು ಮಿತಿಗಳು, ಬರವಣಿಗೆ ಮೊದಲು ಮಾನ್ಯತೆ, namespace ಪ್ರತ್ಯೇಕತೆ, regex ಹೊರತೆಗೆಯುವಿಕೆ, ಟೈಮ್‌ಸ್ಟ್ಯಾಂಪ್ ಇತಿಹಾಸ ಪ್ರಶ್ನೆಗಳು, ಮತ್ತು ಅಮಾನ್ಯೀಕರಣ ಪಟ್ಟಿಗೆ ತಿಳಿಯದ ಸಂಬಂಧವನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. One add(), three representations, one memory id\")\n    mem = HybridMemory()\n    res = mem.add(text=\"Akshay prefers Python.\", user_id=\"user_001\", scope=\"user\", fact_type=\"preference\", entity=\"language\",\n                  value=\"Python\", importance=0.9, graph_facts=[GraphFact(\"Akshay\", \"primary_language\", \"Python\", 0.95)])\n    rid = res.record.id\n    print(\"vector records:\", len(mem.vector.records), \"| kv entries:\", len(mem.kv.data), \"| graph edges:\", len(mem.graph.edges))\n    print(\"same id in all three:\", mem.vector.records[0].id == rid == mem.kv.get(\"user_001\", \"user\", \"preference\", \"language\").id == mem.graph.edges[0].memory_id)\n\n    section(\"2. Updating a single-valued fact: three temporal behaviours\")\n    mem.add(text=\"Akshay's primary language is now Rust.\", user_id=\"user_001\", scope=\"user\", fact_type=\"preference\",\n            entity=\"language\", value=\"Rust\", importance=0.9,\n            graph_facts=[GraphFact(\"Akshay\", \"primary_language\", \"Rust\", 0.95)])\n    print(\"vector (both kept):\", [r.text for r in mem.vector.records])\n    print(\"kv (current only) :\", mem.kv.get(\"user_001\", \"user\", \"preference\", \"language\").value)\n    for e in mem.graph.edges:\n        print(\"graph             :\", describe_edge(e))\n\n    section(\"3. Multi-valued relations do not conflict\")\n    mem2 = HybridMemory()\n    for proj in (\"ProjectA\", \"ProjectB\"):\n        mem2.add(text=f\"Alice works on {proj}.\", user_id=\"user_001\", scope=\"user\", fact_type=\"project\", entity=f\"Alice-{proj}\",\n                 value=proj, graph_facts=[GraphFact(\"Alice\", \"works_on\", proj)])\n    for e in mem2.graph.edges:\n        print(describe_edge(e))\n\n    section(\"4. Duplicate edges, confidence floor and edge cap\")\n    mem3 = HybridMemory(max_graph_edges_per_add=2)\n    facts = [GraphFact(\"Alice\", \"works_on\", \"Phoenix\", 0.98), GraphFact(\"Phoenix\", \"billing_entity\", \"BillingCorp\", 0.94),\n             GraphFact(\"Alice\", \"likes\", \"Tuesday\", 0.20), GraphFact(\"Bob\", \"works_on\", \"Orion\", 0.90)]\n    r = mem3.add(text=\"Alice works on Phoenix, billed by BillingCorp.\", user_id=\"u\", scope=\"user\", fact_type=\"project\",\n                 entity=\"phoenix\", value=\"BillingCorp\", graph_facts=facts)\n    print(\"candidates 4, edges added:\", [describe_edge(e) for e in r.graph_edges_added], \"| rejected:\", r.graph_facts_rejected)\n    r2 = mem3.add(text=\"Alice works on Phoenix again.\", user_id=\"u\", scope=\"user\", fact_type=\"project\", entity=\"phoenix2\",\n                  value=\"x\", graph_facts=[GraphFact(\"Alice\", \"works_on\", \"Phoenix\", 0.98)])\n    print(\"same edge added twice -> added:\", len(r2.graph_edges_added), \"| total edges:\", len(mem3.graph.edges))\n\n    section(\"5. Validation happens before any write\")\n    mem4 = HybridMemory()\n    for kwargs in (dict(scope=\"session\", session_id=None), dict(scope=\"galaxy\"), dict(scope=\"user\", fact_type=\" \")):\n        base = dict(text=\"t\", user_id=\"u\", scope=\"user\", fact_type=\"f\", entity=\"e\", value=\"v\")\n        base.update(kwargs)\n        try:\n            mem4.add(**base)\n        except ValueError as e:\n            print(f\"{str(kwargs):<42} -> ValueError: {e}\")\n    print(\"records after the failed adds:\", len(mem4.vector.records), len(mem4.kv.data), len(mem4.graph.edges))\n\n    section(\"6. Namespaces: sessions, agents and users never collide\")\n    mem5 = HybridMemory()\n    for sid, env in ((\"A\", \"staging\"), (\"B\", \"production\")):\n        mem5.add(text=f\"use {env}\", user_id=\"alice\", scope=\"session\", session_id=sid, fact_type=\"runtime\", entity=\"environment\", value=env)\n    mem5.add(text=\"source is the Mem0 paper\", user_id=\"alice\", scope=\"agent\", agent_id=\"research\", fact_type=\"task\", entity=\"current\", value=\"Mem0 paper\")\n    mem5.add(text=\"file is main.py\", user_id=\"alice\", scope=\"agent\", agent_id=\"coding\", fact_type=\"task\", entity=\"current\", value=\"main.py\")\n    print(\"session A:\", mem5.kv.get(\"alice\", \"session\", \"runtime\", \"environment\", session_id=\"A\").value,\n          \"| session B:\", mem5.kv.get(\"alice\", \"session\", \"runtime\", \"environment\", session_id=\"B\").value)\n    print(\"agent research:\", mem5.kv.get(\"alice\", \"agent\", \"task\", \"current\", agent_id=\"research\").value,\n          \"| agent coding:\", mem5.kv.get(\"alice\", \"agent\", \"task\", \"current\", agent_id=\"coding\").value)\n    ga = HybridMemory()\n    ga.add(text=\"Alice lives in Bengaluru.\", user_id=\"alice\", scope=\"user\", fact_type=\"location\", entity=\"city\", value=\"Bengaluru\",\n           graph_facts=[GraphFact(\"Alice\", \"lives_in\", \"Bengaluru\")])\n    ga.add(text=\"Alice lives in London.\", user_id=\"bob\", scope=\"user\", fact_type=\"location\", entity=\"city\", value=\"London\",\n           graph_facts=[GraphFact(\"Alice\", \"lives_in\", \"London\")])\n    print(\"two users, same entity name 'Alice':\", [describe_edge(e) for e in ga.graph.edges])\n\n    section(\"7. The deterministic extractor and its limits\")\n    for s in (\"Alice works on Phoenix.\", \"Phoenix is billed by BillingCorp.\", \"Akshay lives in Mysuru.\",\n              \"Alice is currently contributing to Project Phoenix.\", \"Alice works on Phoenix and Orion.\"):\n        print(f\"{s!r:<56} -> {[(f.subject, f.relation, f.object) for f in extract_demo_graph_facts(s)]}\")\n\n    section(\"8. Temporal queries with explicit timestamps\")\n    g = GraphStore()\n    rec = make_record(\"Alice lives in Bengaluru.\", \"u\", \"user\", \"location\", \"city\", \"Bengaluru\")\n    t0 = datetime(2026, 3, 1)\n    t1 = datetime(2026, 9, 1)\n    e1 = g.add_edge(rec, \"Alice\", \"lives_in\", \"Bengaluru\")\n    e1.created_at = t0\n    e2 = g.add_edge(rec, \"Alice\", \"lives_in\", \"Mysuru\")\n    e1.invalidated_at, e2.created_at = t1, t1\n    for label, when in ((\"2026-02-01\", datetime(2026, 2, 1)), (\"2026-06-01\", datetime(2026, 6, 1)), (\"2026-10-01\", datetime(2026, 10, 1))):\n        print(f\"valid on {label}:\", [describe_edge(e).split(' (')[0] for e in g.find_related_at(entity=\"Alice\", user_id=\"u\", scope=\"user\", when=when)] or \"nothing\")\n    print(\"current edges (valid flag):\", [e.object for e in g.find_related(\"Alice\", \"u\", \"user\")])\n    print(\"all edges incl. history   :\", [e.object for e in g.find_related(\"Alice\", \"u\", \"user\", include_invalid=True)])\n\n    section(\"9. Genuinely checking: invalidation relies on a hand-written list of single-valued relations\")\n    mem6 = HybridMemory()\n    for city in (\"Bengaluru\", \"Mysuru\"):\n        mem6.add(text=f\"Alice resides in {city}.\", user_id=\"u\", scope=\"user\", fact_type=\"location\", entity=\"city\", value=city,\n                 graph_facts=[GraphFact(\"Alice\", \"resides_in\", city)])\n    print(\"relation 'resides_in' is not in the list:\", [describe_edge(e) for e in mem6.graph.edges])\n    print(\"the graph now holds two valid homes for Alice, while kv says:\", mem6.kv.get(\"u\", \"user\", \"location\", \"city\").value)"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. One add(), three representations, one memory id ---\nvector records: 1 | kv entries: 1 | graph edges: 1\nsame id in all three: True\n\n--- 2. Updating a single-valued fact: three temporal behaviours ---\nvector (both kept): ['Akshay prefers Python.', \"Akshay's primary language is now Rust.\"]\nkv (current only) : Rust\ngraph             : Akshay -[primary_language]-> Python (invalid)\ngraph             : Akshay -[primary_language]-> Rust (valid)\n\n--- 3. Multi-valued relations do not conflict ---\nAlice -[works_on]-> ProjectA (valid)\nAlice -[works_on]-> ProjectB (valid)\n\n--- 4. Duplicate edges, confidence floor and edge cap ---\ncandidates 4, edges added: ['Alice -[works_on]-> Phoenix (valid)', 'Phoenix -[billing_entity]-> BillingCorp (valid)'] | rejected: 2\nsame edge added twice -> added: 0 | total edges: 2\n\n--- 5. Validation happens before any write ---\n{'scope': 'session', 'session_id': None}   -> ValueError: session scope requires session_id\n{'scope': 'galaxy'}                        -> ValueError: Unsupported scope: galaxy\n{'scope': 'user', 'fact_type': ' '}        -> ValueError: fact_type cannot be empty\nrecords after the failed adds: 0 0 0\n\n--- 6. Namespaces: sessions, agents and users never collide ---\nsession A: staging | session B: production\nagent research: Mem0 paper | agent coding: main.py\ntwo users, same entity name 'Alice': ['Alice -[lives_in]-> Bengaluru (valid)', 'Alice -[lives_in]-> London (valid)']\n\n--- 7. The deterministic extractor and its limits ---\n'Alice works on Phoenix.'                                -> [('Alice', 'works_on', 'Phoenix')]\n'Phoenix is billed by BillingCorp.'                      -> [('Phoenix', 'billing_entity', 'BillingCorp')]\n'Akshay lives in Mysuru.'                                -> [('Akshay', 'lives_in', 'Mysuru')]\n'Alice is currently contributing to Project Phoenix.'    -> []\n'Alice works on Phoenix and Orion.'                      -> [('Alice', 'works_on', 'Phoenix and Orion')]\n\n--- 8. Temporal queries with explicit timestamps ---\nvalid on 2026-02-01: nothing\nvalid on 2026-06-01: ['Alice -[lives_in]-> Bengaluru']\nvalid on 2026-10-01: ['Alice -[lives_in]-> Mysuru']\ncurrent edges (valid flag): ['Mysuru']\nall edges incl. history   : ['Bengaluru', 'Mysuru']\n\n--- 9. Genuinely checking: invalidation relies on a hand-written list of single-valued relations ---\nrelation 'resides_in' is not in the list: ['Alice -[resides_in]-> Bengaluru (valid)', 'Alice -[resides_in]-> Mysuru (valid)']\nthe graph now holds two valid homes for Alice, while kv says: Mysuru"
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
    "headingEn": "Three Temporal Behaviours",
    "headingKn": "ಮೂರು ಕಾಲಿಕ ವರ್ತನೆಗಳು",
    "bodyEn": "Section 2 changes the primary language from Python to Rust. The vector store keeps both sentences. The KV store now answers Rust. The graph keeps \"Akshay -[primary_language]-> Python (invalid)\" and adds \"-> Rust (valid)\". Section 3 shows works_on staying valid for both ProjectA and ProjectB. Section 4: four graph facts arrive with a cap of two; the 0.20 fact fails the floor and the 0.90 fact is cut by the cap, so two edges are written and two facts are reported rejected, and adding the same edge again writes none.",
    "bodyKn": "ವಿಭಾಗ 2 ಪ್ರಾಥಮಿಕ ಭಾಷೆಯನ್ನು Python ನಿಂದ Rust ಗೆ ಬದಲಿಸುತ್ತದೆ. Vector ಸಂಗ್ರಹ ಎರಡೂ ವಾಕ್ಯ ಉಳಿಸುತ್ತದೆ. KV ಸಂಗ್ರಹ ಈಗ Rust ಎನ್ನುತ್ತದೆ. Graph \"Akshay -[primary_language]-> Python (invalid)\" ಉಳಿಸಿ \"-> Rust (valid)\" ಸೇರಿಸುತ್ತದೆ. ವಿಭಾಗ 3 works_on ProjectA ಮತ್ತು ProjectB ಎರಡಕ್ಕೂ ಮಾನ್ಯವಾಗಿ ಉಳಿಯುವುದನ್ನು ತೋರಿಸುತ್ತದೆ. ವಿಭಾಗ 4: ಮಿತಿ ಎರಡರೊಂದಿಗೆ ನಾಲ್ಕು graph ಸಂಗತಿಗಳು ಬರುತ್ತವೆ; 0.20 ಸಂಗತಿ ಕನಿಷ್ಠ ವಿಫಲವಾಗುತ್ತದೆ ಮತ್ತು 0.90 ಸಂಗತಿ ಮಿತಿಯಿಂದ ಕತ್ತರಿಸಲ್ಪಡುತ್ತದೆ, ಆದ್ದರಿಂದ ಎರಡು edges ಬರೆಯಲ್ಪಡುತ್ತವೆ ಮತ್ತು ಎರಡು ಸಂಗತಿಗಳು ತಿರಸ್ಕೃತ ಎಂದು ವರದಿಯಾಗುತ್ತವೆ, ಮತ್ತು ಅದೇ edge ಮತ್ತೆ ಸೇರಿಸಿದರೆ ಯಾವುದೂ ಬರೆಯಲ್ಪಡುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Validation, Isolation and History",
    "headingKn": "ಮಾನ್ಯತೆ, ಪ್ರತ್ಯೇಕತೆ ಮತ್ತು ಇತಿಹಾಸ",
    "bodyEn": "Section 5 sends three bad requests (a session scope with no session_id, an unknown scope and an empty fact_type) and all three are refused with a specific error, leaving zero records in every store. Section 6: sessions A and B hold staging and production side by side, two agents hold different current tasks, and two users who both mention \"Alice\" get separate lives_in edges. Section 8 uses explicit timestamps: on 2026-02-01 Alice has no home, on 2026-06-01 it is Bengaluru, and on 2026-10-01 it is Mysuru, while the valid flag alone gives only Mysuru.",
    "bodyKn": "ವಿಭಾಗ 5 ಮೂರು ತಪ್ಪು ವಿನಂತಿಗಳನ್ನು (session_id ಇಲ್ಲದ session scope, ಅಜ್ಞಾತ scope ಮತ್ತು ಖಾಲಿ fact_type) ಕಳುಹಿಸುತ್ತದೆ ಮತ್ತು ಮೂರೂ ನಿರ್ದಿಷ್ಟ ದೋಷದೊಂದಿಗೆ ನಿರಾಕರಿಸಲ್ಪಟ್ಟು ಪ್ರತಿ ಸಂಗ್ರಹದಲ್ಲಿ ಶೂನ್ಯ ದಾಖಲೆ ಉಳಿಯುತ್ತದೆ. ವಿಭಾಗ 6: sessions A ಮತ್ತು B staging ಮತ್ತು production ಪಕ್ಕಪಕ್ಕ ಹೊಂದಿವೆ, ಎರಡು agents ಬೇರೆ ಪ್ರಸ್ತುತ ಕಾರ್ಯ ಹೊಂದಿವೆ, ಮತ್ತು ಇಬ್ಬರೂ \"Alice\" ಉಲ್ಲೇಖಿಸುವ ಇಬ್ಬರು ಬಳಕೆದಾರರಿಗೆ ಪ್ರತ್ಯೇಕ lives_in edges ಸಿಗುತ್ತವೆ. ವಿಭಾಗ 8 ಸ್ಪಷ್ಟ ಟೈಮ್‌ಸ್ಟ್ಯಾಂಪ್ ಬಳಸುತ್ತದೆ: 2026-02-01 ರಂದು Alice ಗೆ ಮನೆ ಇಲ್ಲ, 2026-06-01 ರಂದು Bengaluru, 2026-10-01 ರಂದು Mysuru, ಆದರೆ valid ಧ್ವಜ ಮಾತ್ರ Mysuru ನೀಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Extraction Is Brittle",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಹೊರತೆಗೆಯುವಿಕೆ ಸುಲಭವಾಗಿ ಮುರಿಯುತ್ತದೆ",
    "bodyEn": "Section 7: the regex extractor handles the four sentence shapes it knows. \"Alice is currently contributing to Project Phoenix.\" produces nothing. \"Alice works on Phoenix and Orion.\" produces a single edge to the object \"Phoenix and Orion\", a wrong entity rather than two correct ones. An LLM extractor fixes the phrasing problem, but then the confidence floor, the edge cap and entity normalization matter even more, because model extraction is noisy.",
    "bodyKn": "ವಿಭಾಗ 7: regex ಹೊರತೆಗೆಯುವಿಕೆ ಅದಕ್ಕೆ ತಿಳಿದ ನಾಲ್ಕು ವಾಕ್ಯ ಆಕಾರಗಳನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ. \"Alice is currently contributing to Project Phoenix.\" ಏನನ್ನೂ ಉತ್ಪಾದಿಸುವುದಿಲ್ಲ. \"Alice works on Phoenix and Orion.\" \"Phoenix and Orion\" ಎಂಬ object ಗೆ ಒಂದೇ edge ಉತ್ಪಾದಿಸುತ್ತದೆ, ಎರಡು ಸರಿಯಾದ ಬದಲು ಒಂದು ತಪ್ಪು ಘಟಕ. LLM ಹೊರತೆಗೆಯುವಿಕೆ ಪದಪ್ರಯೋಗ ಸಮಸ್ಯೆ ಸರಿಪಡಿಸುತ್ತದೆ, ಆದರೆ ಆಗ ವಿಶ್ವಾಸ ಕನಿಷ್ಠ, edge ಮಿತಿ ಮತ್ತು ಘಟಕ ಸಾಮಾನ್ಯೀಕರಣ ಇನ್ನೂ ಮುಖ್ಯ, ಏಕೆಂದರೆ ಮಾದರಿ ಹೊರತೆಗೆಯುವಿಕೆ ಗದ್ದಲದ್ದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Conflict List Is Hand-Written",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಂಘರ್ಷ ಪಟ್ಟಿ ಕೈಯಿಂದ ಬರೆದದ್ದು",
    "bodyEn": "Section 9 stores two homes using the relation \"resides_in\", which is not in SINGLE_VALUED_RELATIONS. Both edges stay valid, so the graph says Alice resides in Bengaluru and in Mysuru at once, while KV correctly says Mysuru. Invalidation only works for relations someone declared single-valued, so relation vocabulary needs governance: an allowlist, aliases that map \"resides_in\" onto \"lives_in\", and review of new relation names.",
    "bodyKn": "ವಿಭಾಗ 9 \"resides_in\" ಸಂಬಂಧ ಬಳಸಿ ಎರಡು ಮನೆಗಳನ್ನು ಸಂಗ್ರಹಿಸುತ್ತದೆ, ಅದು SINGLE_VALUED_RELATIONS ನಲ್ಲಿಲ್ಲ. ಎರಡೂ edges ಮಾನ್ಯವಾಗಿ ಉಳಿಯುತ್ತವೆ, ಆದ್ದರಿಂದ graph Alice Bengaluru ಮತ್ತು Mysuru ಎರಡರಲ್ಲೂ ಏಕಕಾಲಕ್ಕೆ ವಾಸಿಸುತ್ತಾರೆ ಎನ್ನುತ್ತದೆ, ಆದರೆ KV ಸರಿಯಾಗಿ Mysuru ಎನ್ನುತ್ತದೆ. ಅಮಾನ್ಯೀಕರಣ ಯಾರಾದರೂ ಏಕ-ಮೌಲ್ಯ ಎಂದು ಘೋಷಿಸಿದ ಸಂಬಂಧಗಳಿಗೆ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತದೆ, ಆದ್ದರಿಂದ ಸಂಬಂಧ ಶಬ್ದಕೋಶಕ್ಕೆ ಆಡಳಿತ ಬೇಕು: ಅನುಮತಿ ಪಟ್ಟಿ, \"resides_in\" ಅನ್ನು \"lives_in\" ಗೆ ನಕ್ಷೆ ಮಾಡುವ ಅಲಿಯಾಸ್‌ಗಳು, ಮತ್ತು ಹೊಸ ಸಂಬಂಧ ಹೆಸರುಗಳ ಪರಿಶೀಲನೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Write Failure Semantics",
    "headingKn": "ಬರವಣಿಗೆ ವೈಫಲ್ಯ ಅರ್ಥ",
    "bodyEn": "This add() writes three stores one after another with no transaction. If the graph write raised an exception, the vector and KV writes would already be done. Early validation covers bad input, not mid-write failure. Production designs use a database transaction, a write-ahead log or outbox, retries with an idempotency key, or compensating writes. Exact-duplicate text is deliberately not rejected, because repetition can itself be evidence of recency, but identical active edges are, because they add structure and no information.",
    "bodyKn": "ಈ add() ಮೂರು ಸಂಗ್ರಹಗಳನ್ನು transaction ಇಲ್ಲದೆ ಒಂದರ ನಂತರ ಒಂದು ಬರೆಯುತ್ತದೆ. Graph ಬರವಣಿಗೆ ವಿನಾಯಿತಿ ಎತ್ತಿದರೆ vector ಮತ್ತು KV ಬರವಣಿಗೆಗಳು ಈಗಾಗಲೇ ಮುಗಿದಿರುತ್ತವೆ. ಆರಂಭಿಕ ಮಾನ್ಯತೆ ತಪ್ಪು ಇನ್‌ಪುಟ್ ಒಳಗೊಳ್ಳುತ್ತದೆ, ಬರವಣಿಗೆ ಮಧ್ಯದ ವೈಫಲ್ಯವನ್ನಲ್ಲ. Production ವಿನ್ಯಾಸಗಳು ಡೇಟಾಬೇಸ್ transaction, write-ahead log ಅಥವಾ outbox, idempotency key ಇರುವ ಮರುಪ್ರಯತ್ನ, ಅಥವಾ ಪರಿಹಾರ ಬರವಣಿಗೆಗಳನ್ನು ಬಳಸುತ್ತವೆ. ನಿಖರ-ನಕಲು ಪಠ್ಯವನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ತಿರಸ್ಕರಿಸುವುದಿಲ್ಲ, ಏಕೆಂದರೆ ಪುನರಾವರ್ತನೆ ಸ್ವತಃ ತಾಜಾತನದ ಸಾಕ್ಷ್ಯವಾಗಬಹುದು, ಆದರೆ ಒಂದೇ ರೀತಿಯ ಸಕ್ರಿಯ edges ತಿರಸ್ಕರಿಸುತ್ತದೆ, ಏಕೆಂದರೆ ಅವು ರಚನೆ ಸೇರಿಸುತ್ತವೆ, ಮಾಹಿತಿಯಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Doing the expensive work at write time, extraction, normalization, conflict detection and importance tagging, makes reads cheap and keeps the views consistent. Keeping history as invalid edges rather than deleting them supports audits and questions about the past.",
    "bodyKn": "ದುಬಾರಿ ಕೆಲಸವನ್ನು ಬರವಣಿಗೆ ಸಮಯದಲ್ಲಿ ಮಾಡುವುದು, ಹೊರತೆಗೆಯುವಿಕೆ, ಸಾಮಾನ್ಯೀಕರಣ, ಸಂಘರ್ಷ ಪತ್ತೆ ಮತ್ತು ಮಹತ್ವ ಟ್ಯಾಗಿಂಗ್, ಓದುವಿಕೆಯನ್ನು ಅಗ್ಗ ಮಾಡಿ ನೋಟಗಳನ್ನು ಸ್ಥಿರವಾಗಿಡುತ್ತದೆ. ಇತಿಹಾಸವನ್ನು ಅಳಿಸುವ ಬದಲು invalid edges ಆಗಿ ಇಡುವುದು ಲೆಕ್ಕಪರಿಶೋಧನೆ ಮತ್ತು ಭೂತಕಾಲದ ಪ್ರಶ್ನೆಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the three stores should hold identical data.\" They hold different views with different update rules on purpose: history in vector, current state in KV, validity intervals in the graph.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಮೂರು ಸಂಗ್ರಹಗಳು ಒಂದೇ ಡೇಟಾ ಹೊಂದಿರಬೇಕು.\" ಅವು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಬೇರೆ ನವೀಕರಣ ನಿಯಮಗಳೊಂದಿಗೆ ಬೇರೆ ನೋಟಗಳನ್ನು ಹೊಂದಿವೆ: vector ನಲ್ಲಿ ಇತಿಹಾಸ, KV ನಲ್ಲಿ ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ, graph ನಲ್ಲಿ ಮಾನ್ಯತಾ ಅವಧಿಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Fact extraction: turning text into structured fields and triples. Single-valued relation: only one object can be current. Invalidation: marking an edge invalid and stamping the time. Confidence floor and edge cap: bounds on graph writes. AddResult: diagnostics from an ingestion. Namespace: user, session or agent scope.",
    "bodyKn": "Fact extraction: ಪಠ್ಯವನ್ನು ರಚನಾತ್ಮಕ ಕ್ಷೇತ್ರಗಳು ಮತ್ತು triples ಆಗಿಸುವುದು. ಏಕ-ಮೌಲ್ಯ ಸಂಬಂಧ: ಒಂದೇ object ಪ್ರಸ್ತುತವಾಗಿರಬಹುದು. ಅಮಾನ್ಯೀಕರಣ: edge ಅನ್ನು invalid ಎಂದು ಗುರುತಿಸಿ ಸಮಯ ಮುದ್ರಿಸುವುದು. ವಿಶ್ವಾಸ ಕನಿಷ್ಠ ಮತ್ತು edge ಮಿತಿ: graph ಬರವಣಿಗೆಗಳ ಮೇಲಿನ ಮಿತಿಗಳು. AddResult: ಒಳಸೇರಿಸುವಿಕೆಯ ರೋಗನಿರ್ಣಯ. Namespace: user, session ಅಥವಾ agent scope."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) One add() keeps three views tied to one memory id. 2) Validate before any write. 3) Vector keeps history, KV holds current state, the graph keeps validity intervals. 4) Invalidation needs a governed list of single-valued relations. 5) Duplicate edges, a confidence floor and an edge cap prevent graph explosion. 6) Namespaces never cross. 7) Extraction is brittle and the write is not transactional. Part 3 builds search and fusion.",
    "bodyKn": "1) ಒಂದು add() ಮೂರು ನೋಟಗಳನ್ನು ಒಂದು ಮೆಮೊರಿ id ಗೆ ಕಟ್ಟುತ್ತದೆ. 2) ಯಾವುದೇ ಬರವಣಿಗೆ ಮೊದಲು ಮಾನ್ಯ ಮಾಡಿ. 3) Vector ಇತಿಹಾಸ ಇಡುತ್ತದೆ, KV ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ ಹೊಂದಿದೆ, graph ಮಾನ್ಯತಾ ಅವಧಿಗಳನ್ನು ಇಡುತ್ತದೆ. 4) ಅಮಾನ್ಯೀಕರಣಕ್ಕೆ ಆಡಳಿತದ ಏಕ-ಮೌಲ್ಯ ಸಂಬಂಧ ಪಟ್ಟಿ ಬೇಕು. 5) ನಕಲು edges, ವಿಶ್ವಾಸ ಕನಿಷ್ಠ ಮತ್ತು edge ಮಿತಿ graph ಸ್ಫೋಟ ತಡೆಯುತ್ತವೆ. 6) Namespaces ಎಂದೂ ದಾಟುವುದಿಲ್ಲ. 7) ಹೊರತೆಗೆಯುವಿಕೆ ಸುಲಭವಾಗಿ ಮುರಿಯುತ್ತದೆ ಮತ್ತು ಬರವಣಿಗೆ transactional ಅಲ್ಲ. ಭಾಗ 3 ಹುಡುಕಾಟ ಮತ್ತು fusion ನಿರ್ಮಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why is one coordinated add() better than calling each store directly?",
      "qKn": "ಪ್ರತಿ ಸಂಗ್ರಹವನ್ನು ನೇರವಾಗಿ ಕರೆಯುವುದಕ್ಕಿಂತ ಒಂದು ಸಮನ್ವಯ add() ಉತ್ತಮ ಏಕೆ?",
      "opts": [
       "It is shorter to type",
       "It keeps the stores consistent: one record, one id, validated first, written to every view",
       "It removes the need for IDs",
       "It makes search faster"
      ],
      "optsKn": [
       "ಟೈಪ್ ಮಾಡಲು ಚಿಕ್ಕದು",
       "ಅದು ಸಂಗ್ರಹಗಳನ್ನು ಸ್ಥಿರವಾಗಿಡುತ್ತದೆ: ಒಂದು ದಾಖಲೆ, ಒಂದು id, ಮೊದಲು ಮಾನ್ಯ, ಪ್ರತಿ ನೋಟಕ್ಕೆ ಬರವಣಿಗೆ",
       "ಅದು IDs ಅಗತ್ಯ ತೆಗೆಯುತ್ತದೆ",
       "ಅದು ಹುಡುಕಾಟ ವೇಗಗೊಳಿಸುತ್ತದೆ"
      ],
      "correct": 1
     },
     {
      "q": "After the user's primary language changes from Python to Rust, which description is correct?",
      "qKn": "ಬಳಕೆದಾರರ ಪ್ರಾಥಮಿಕ ಭಾಷೆ Python ನಿಂದ Rust ಗೆ ಬದಲಾದ ನಂತರ ಯಾವ ವಿವರಣೆ ಸರಿ?",
      "opts": [
       "Every store deletes the Python record",
       "Vector keeps both sentences, KV answers Rust, the graph marks the Python edge invalid and keeps it",
       "Only the vector store changes",
       "KV keeps every version as current"
      ],
      "optsKn": [
       "ಪ್ರತಿ ಸಂಗ್ರಹ Python ದಾಖಲೆ ಅಳಿಸುತ್ತದೆ",
       "Vector ಎರಡೂ ವಾಕ್ಯ ಇಡುತ್ತದೆ, KV Rust ಎನ್ನುತ್ತದೆ, graph Python edge ಅನ್ನು invalid ಎಂದು ಗುರುತಿಸಿ ಉಳಿಸುತ್ತದೆ",
       "ಕೇವಲ vector ಸಂಗ್ರಹ ಬದಲಾಗುತ್ತದೆ",
       "KV ಪ್ರತಿ ಆವೃತ್ತಿಯನ್ನು ಪ್ರಸ್ತುತ ಎಂದು ಇಡುತ್ತದೆ"
      ],
      "correct": 1
     },
     {
      "q": "Why did \"resides_in\" leave two valid homes for Alice?",
      "qKn": "\"resides_in\" Alice ಗೆ ಎರಡು ಮಾನ್ಯ ಮನೆಗಳನ್ನು ಏಕೆ ಉಳಿಸಿತು?",
      "opts": [
       "A bug in the timestamps",
       "It is not in the single-valued relation list, so no conflict was detected",
       "Graphs cannot invalidate",
       "KV overwrote it"
      ],
      "optsKn": [
       "ಟೈಮ್‌ಸ್ಟ್ಯಾಂಪ್‌ಗಳಲ್ಲಿ ದೋಷ",
       "ಅದು ಏಕ-ಮೌಲ್ಯ ಸಂಬಂಧ ಪಟ್ಟಿಯಲ್ಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಸಂಘರ್ಷ ಪತ್ತೆಯಾಗಲಿಲ್ಲ",
       "Graphs ಅಮಾನ್ಯಗೊಳಿಸಲಾರವು",
       "KV ಅದನ್ನು ಬದಲಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What protects the graph from a flood of low-quality edges?",
      "qKn": "ಕಡಿಮೆ ಗುಣಮಟ್ಟದ edges ಪ್ರವಾಹದಿಂದ graph ಅನ್ನು ಯಾವುದು ರಕ್ಷಿಸುತ್ತದೆ?",
      "opts": [
       "Larger embeddings",
       "A confidence floor, an edge cap per add and duplicate-edge detection",
       "More users",
       "Longer timestamps"
      ],
      "optsKn": [
       "ದೊಡ್ಡ embeddings",
       "ವಿಶ್ವಾಸ ಕನಿಷ್ಠ, ಪ್ರತಿ add ಗೆ edge ಮಿತಿ ಮತ್ತು ನಕಲು-edge ಪತ್ತೆ",
       "ಹೆಚ್ಚು ಬಳಕೆದಾರರು",
       "ಉದ್ದದ ಟೈಮ್‌ಸ್ಟ್ಯಾಂಪ್‌ಗಳು"
      ],
      "correct": 1
     },
     {
      "q": "What does invalidation preserve that deletion would destroy?",
      "qKn": "ಅಳಿಸುವಿಕೆ ನಾಶಮಾಡುವುದನ್ನು ಅಮಾನ್ಯೀಕರಣ ಏನು ಉಳಿಸುತ್ತದೆ?",
      "opts": [
       "Disk space",
       "History, so questions about when a fact was true can still be answered",
       "Embeddings",
       "Session IDs"
      ],
      "optsKn": [
       "ಡಿಸ್ಕ್ ಸ್ಥಳ",
       "ಇತಿಹಾಸ, ಆದ್ದರಿಂದ ಸಂಗತಿ ಯಾವಾಗ ನಿಜವಾಗಿತ್ತು ಎಂಬ ಪ್ರಶ್ನೆಗಳಿಗೆ ಇನ್ನೂ ಉತ್ತರಿಸಬಹುದು",
       "Embeddings",
       "Session IDs"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
