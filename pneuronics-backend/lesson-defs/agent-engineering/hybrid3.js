module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321526",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Hybrid Memory: Vector + Graph + KV (Part 3 of 3) — search(), Fusion Scoring and Ranking",
 "titleKn": "Hybrid Memory: Vector + Graph + KV (ಭಾಗ 3 / 3) — search(), Fusion ಅಂಕ ಮತ್ತು ಶ್ರೇಣೀಕರಣ",
 "desc": "Merge candidates from three stores by memory id, score recency by half-life, fuse relevance, importance and recency with tunable weights, and find that stale vector hits still surface and retrieval refreshes recency.",
 "descKn": "ಮೂರು ಸಂಗ್ರಹಗಳ ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಮೆಮೊರಿ id ಯಿಂದ ವಿಲೀನಗೊಳಿಸಿ, half-life ಯಿಂದ ತಾಜಾತನಕ್ಕೆ ಅಂಕ ನೀಡಿ, ಹೊಂದಿಸಬಹುದಾದ ತೂಕಗಳೊಂದಿಗೆ ಪ್ರಸ್ತುತತೆ, ಮಹತ್ವ ಮತ್ತು ತಾಜಾತನ ಸಂಯೋಜಿಸಿ, ಮತ್ತು ಹಳೆಯ vector ಹಿಟ್‌ಗಳು ಇನ್ನೂ ಕಾಣುತ್ತವೆ ಹಾಗೂ ಪಡೆಯುವಿಕೆ ತಾಜಾತನ ನವೀಕರಿಸುತ್ತದೆ ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Merge candidates from vector, KV and graph into one candidate per memory.",
  "Compute exponential recency and weighted fusion scores.",
  "Tune weights and show they can flip a ranking.",
  "Enforce ownership before ranking.",
  "Identify stale-hit and recency-feedback hazards."
 ],
 "objectivesKn": [
  "Vector, KV ಮತ್ತು graph ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಪ್ರತಿ ಮೆಮೊರಿಗೆ ಒಂದು ಅಭ್ಯರ್ಥಿಯಾಗಿ ವಿಲೀನಗೊಳಿಸಿ.",
  "ಘಾತೀಯ ತಾಜಾತನ ಮತ್ತು ತೂಕದ fusion ಅಂಕ ಲೆಕ್ಕಹಾಕಿ.",
  "ತೂಕಗಳನ್ನು ಹೊಂದಿಸಿ ಅವು ಶ್ರೇಣೀಕರಣ ತಿರುಗಿಸಬಹುದು ಎಂದು ತೋರಿಸಿ.",
  "ಶ್ರೇಣೀಕರಣದ ಮೊದಲು ಮಾಲೀಕತ್ವ ಜಾರಿಗೊಳಿಸಿ.",
  "ಹಳೆಯ-ಹಿಟ್ ಮತ್ತು ತಾಜಾತನ-ಪ್ರತಿಕ್ರಿಯೆ ಅಪಾಯಗಳನ್ನು ಗುರುತಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Hybrid Memory: Vector + Graph + KV (Part 3 of 3)",
    "textKn": "Hybrid Memory: Vector + Graph + KV (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: search(), candidate merging, recency decay, weighted fusion and ranking. Every output below was genuinely produced by the lab file on Python 3.14.5. The pasted source was cut off in its final program and quiz, so those are rebuilt from the earlier sections. Recency values depend on when the lab runs; the half-life table uses explicit ages so it is exact. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: search(), ಅಭ್ಯರ್ಥಿ ವಿಲೀನ, ತಾಜಾತನ ಕ್ಷಯ, ತೂಕದ fusion ಮತ್ತು ಶ್ರೇಣೀಕರಣ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಅಂಟಿಸಿದ ಮೂಲ ಅದರ ಅಂತಿಮ ಪ್ರೋಗ್ರಾಂ ಮತ್ತು ರಸಪ್ರಶ್ನೆಯಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ ಅವನ್ನು ಹಿಂದಿನ ವಿಭಾಗಗಳಿಂದ ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. ತಾಜಾತನ ಮೌಲ್ಯಗಳು ಲ್ಯಾಬ್ ಯಾವಾಗ ಚಲಿಸುತ್ತದೆ ಎಂಬುದರ ಮೇಲೆ ಅವಲಂಬಿತ; half-life ಕೋಷ್ಟಕ ಸ್ಪಷ್ಟ ವಯಸ್ಸುಗಳನ್ನು ಬಳಸುವುದರಿಂದ ನಿಖರ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "From Three Result Lists to One Ranking",
    "textKn": "ಮೂರು ಫಲಿತಾಂಶ ಪಟ್ಟಿಗಳಿಂದ ಒಂದು ಶ್ರೇಣೀಕರಣಕ್ಕೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Common Candidate Representation",
    "headingKn": "ಸಾಮಾನ್ಯ ಅಭ್ಯರ್ಥಿ ನಿರೂಪಣೆ",
    "bodyEn": "\"Relevance\" means different things per store: similarity for vector, an exact structured match for KV, a relationship match for the graph. They are mapped onto 0 to 1 (exact KV gets 1.0, a one-hop graph match gets 0.90) and stored in a Candidate with the record, the set of sources that found it, relevance, importance and recency. Candidates are keyed by memory id, so one memory found by three stores is one candidate with three sources. When several stores agree, the lab keeps the maximum relevance rather than summing, so the value stays within 0 to 1.",
    "bodyKn": "\"ಪ್ರಸ್ತುತತೆ\" ಪ್ರತಿ ಸಂಗ್ರಹಕ್ಕೆ ಬೇರೆ ಅರ್ಥ: vector ಗೆ ಹೋಲಿಕೆ, KV ಗೆ ನಿಖರ ರಚನಾತ್ಮಕ ಹೊಂದಾಣಿಕೆ, graph ಗೆ ಸಂಬಂಧ ಹೊಂದಾಣಿಕೆ. ಅವನ್ನು 0 ರಿಂದ 1 ಕ್ಕೆ ನಕ್ಷೆ ಮಾಡಲಾಗುತ್ತದೆ (ನಿಖರ KV 1.0, ಒಂದು-ಹೆಜ್ಜೆ graph ಹೊಂದಾಣಿಕೆ 0.90) ಮತ್ತು ದಾಖಲೆ, ಅದನ್ನು ಕಂಡುಹಿಡಿದ sources ಗಣ, ಪ್ರಸ್ತುತತೆ, ಮಹತ್ವ ಮತ್ತು ತಾಜಾತನದೊಂದಿಗೆ Candidate ನಲ್ಲಿ ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ. ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಮೆಮೊರಿ id ಯಿಂದ key ಮಾಡಲಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ ಮೂರು ಸಂಗ್ರಹಗಳು ಕಂಡ ಒಂದು ಮೆಮೊರಿ ಮೂರು sources ಇರುವ ಒಂದು ಅಭ್ಯರ್ಥಿ. ಹಲವು ಸಂಗ್ರಹಗಳು ಒಪ್ಪಿದಾಗ ಲ್ಯಾಬ್ ಕೂಡಿಸುವ ಬದಲು ಗರಿಷ್ಠ ಪ್ರಸ್ತುತತೆ ಇಡುತ್ತದೆ, ಆದ್ದರಿಂದ ಮೌಲ್ಯ 0 ರಿಂದ 1 ರೊಳಗೆ ಉಳಿಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Recency and the Fusion Formula",
    "headingKn": "ತಾಜಾತನ ಮತ್ತು Fusion ಸೂತ್ರ",
    "bodyEn": "Recency is exponential decay with a half-life: T = 2^(-age/half_life), so a 7-day half-life gives 1.0, 0.5, 0.25 and 0.125 at 0, 7, 14 and 21 days. Age is measured from last_accessed_at, so frequently used memories stay fresh. The final score is the weighted sum Score = w_r*R + w_i*I + w_t*T with the weights normalized to sum to 1. A weighted sum lets all three signals matter, where a strict hierarchy would let a tiny relevance gap override importance and recency. The weights are product policy, not constants of nature.",
    "bodyKn": "ತಾಜಾತನ half-life ಇರುವ ಘಾತೀಯ ಕ್ಷಯ: T = 2^(-age/half_life), ಆದ್ದರಿಂದ 7-ದಿನ half-life 0, 7, 14 ಮತ್ತು 21 ದಿನಗಳಲ್ಲಿ 1.0, 0.5, 0.25 ಮತ್ತು 0.125 ನೀಡುತ್ತದೆ. ವಯಸ್ಸನ್ನು last_accessed_at ಯಿಂದ ಅಳೆಯಲಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ ಆಗಾಗ ಬಳಸಿದ ಮೆಮೊರಿಗಳು ತಾಜಾ ಉಳಿಯುತ್ತವೆ. ಅಂತಿಮ ಅಂಕ ತೂಕದ ಮೊತ್ತ Score = w_r*R + w_i*I + w_t*T, ತೂಕಗಳನ್ನು ಮೊತ್ತ 1 ಆಗುವಂತೆ ಸಾಮಾನ್ಯೀಕರಿಸಲಾಗುತ್ತದೆ. ತೂಕದ ಮೊತ್ತ ಮೂರೂ ಸಂಕೇತಗಳು ಮುಖ್ಯವಾಗಲು ಬಿಡುತ್ತದೆ, ಕಟ್ಟುನಿಟ್ಟಾದ ಶ್ರೇಣಿ ಚಿಕ್ಕ ಪ್ರಸ್ತುತತೆ ಅಂತರ ಮಹತ್ವ ಮತ್ತು ತಾಜಾತನವನ್ನು ಮೀರಿಸುವಂತೆ ಮಾಡುತ್ತಿತ್ತು. ತೂಕಗಳು ಉತ್ಪನ್ನ ನೀತಿ, ಪ್ರಕೃತಿಯ ಸ್ಥಿರಾಂಕಗಳಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Hybrid Memory, End to End",
    "headingKn": "Hybrid Memory, ಆರಂಭದಿಂದ ಅಂತ್ಯದವರೆಗೆ",
    "svgCode": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"200\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">One memory, three views, one ranked answer</text>\n  <rect x=\"85\" y=\"22\" width=\"130\" height=\"22\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"36\" fill=\"#93c5fd\" text-anchor=\"middle\">add(): one MemoryRecord</text>\n  <path d=\"M110,44 L60,64 M150,44 V64 M190,44 L240,64\" stroke=\"#475569\"/>\n  <rect x=\"15\" y=\"64\" width=\"90\" height=\"48\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"60\" y=\"78\" fill=\"#6ee7b7\" text-anchor=\"middle\">VECTOR</text><text x=\"60\" y=\"92\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">sounds like</text><text x=\"60\" y=\"102\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">episodic text</text>\n  <rect x=\"105\" y=\"64\" width=\"90\" height=\"48\" rx=\"4\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"78\" fill=\"#fde68a\" text-anchor=\"middle\">KV</text><text x=\"150\" y=\"92\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"6\">exactly this key</text><text x=\"150\" y=\"102\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"6\">current state</text>\n  <rect x=\"195\" y=\"64\" width=\"90\" height=\"48\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"240\" y=\"78\" fill=\"#c4b5fd\" text-anchor=\"middle\">GRAPH</text><text x=\"240\" y=\"92\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">connected to</text><text x=\"240\" y=\"102\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">relations + history</text>\n  <path d=\"M60,112 L120,138 M150,112 V138 M240,112 L180,138\" stroke=\"#475569\"/>\n  <rect x=\"85\" y=\"138\" width=\"130\" height=\"22\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"152\" fill=\"#93c5fd\" text-anchor=\"middle\">search(): merge + fuse</text>\n  <text x=\"150\" y=\"176\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">score = w_r*relevance + w_i*importance + w_t*recency</text>\n  <text x=\"150\" y=\"188\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">ownership is a hard filter applied before any ranking</text>\n</svg>",
    "captionEn": "Writes fan out into three views; reads fan out into three retrievals, merge by memory id and rank by the weighted score.",
    "captionKn": "ಬರವಣಿಗೆಗಳು ಮೂರು ನೋಟಗಳಾಗಿ ಹರಡುತ್ತವೆ; ಓದುವಿಕೆಗಳು ಮೂರು ಪಡೆಯುವಿಕೆಗಳಾಗಿ ಹರಡಿ, ಮೆಮೊರಿ id ಯಿಂದ ವಿಲೀನವಾಗಿ ತೂಕದ ಅಂಕದಿಂದ ಶ್ರೇಣೀಕರಿಸಲ್ಪಡುತ್ತವೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building search()",
    "textKn": "search() ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "hybrid_3.py",
    "headingEn": "Candidate, recency, fusion and HybridMemory.search()",
    "headingKn": "Candidate, ತಾಜಾತನ, fusion ಮತ್ತು HybridMemory.search()",
    "descEn": "search() validates, collects vector candidates, adds a KV candidate when a fact_type and entity hint is given, adds graph candidates for a graph_entity hint, scores recency and fusion for every merged candidate, sorts, takes top_k, and refreshes last_accessed_at on the returned records. The KV and graph paths need hints because this lab has no query parser; in production an LLM or parser would produce them.",
    "descKn": "search() ಮಾನ್ಯ ಮಾಡಿ, vector ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ, fact_type ಮತ್ತು entity ಸುಳಿವು ಕೊಟ್ಟರೆ KV ಅಭ್ಯರ್ಥಿ ಸೇರಿಸಿ, graph_entity ಸುಳಿವಿಗೆ graph ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಸೇರಿಸಿ, ಪ್ರತಿ ವಿಲೀನಗೊಂಡ ಅಭ್ಯರ್ಥಿಗೆ ತಾಜಾತನ ಮತ್ತು fusion ಅಂಕ ನೀಡಿ, ವಿಂಗಡಿಸಿ, top_k ತೆಗೆದು, ಹಿಂತಿರುಗಿಸಿದ ದಾಖಲೆಗಳ last_accessed_at ನವೀಕರಿಸುತ್ತದೆ. KV ಮತ್ತು graph ಮಾರ್ಗಗಳಿಗೆ ಸುಳಿವುಗಳು ಬೇಕು ಏಕೆಂದರೆ ಈ ಲ್ಯಾಬ್‌ಗೆ ಪ್ರಶ್ನೆ parser ಇಲ್ಲ; production ನಲ್ಲಿ LLM ಅಥವಾ parser ಅವನ್ನು ಉತ್ಪಾದಿಸುತ್ತದೆ.",
    "code": "class Candidate:\n    record: MemoryRecord\n    sources: set\n    relevance: float\n    importance: float\n    recency: float\n    score: float = 0.0\n\n\ndef merge_candidate(candidates, record, *, source, relevance):\n    relevance = max(0.0, min(1.0, relevance))\n    existing = candidates.get(record.id)\n    if existing is None:\n        candidates[record.id] = Candidate(record=record, sources={source}, relevance=relevance,\n                                          importance=record.importance, recency=0.0)\n        return\n    existing.sources.add(source)\n    existing.relevance = max(existing.relevance, relevance)\n\n\ndef recency_score(record, *, now=None, half_life_hours=168.0):\n    if now is None:\n        now = now_utc()\n    age_hours = max(0.0, (now - record.last_accessed_at).total_seconds()) / 3600.0\n    if half_life_hours <= 0:\n        return 1.0\n    return 2 ** (-age_hours / half_life_hours)\n\n\n@dataclass\nclass FusionWeights:\n    relevance: float = 0.50\n    importance: float = 0.30\n    recency: float = 0.20\n\n\ndef normalized_weights(w):\n    total = w.relevance + w.importance + w.recency\n    if total <= 0:\n        raise ValueError(\"Fusion weights must sum to a positive value\")\n    return FusionWeights(w.relevance / total, w.importance / total, w.recency / total)\n\n\ndef fusion_score(*, relevance, importance, recency, weights):\n    w = normalized_weights(weights)\n    return w.relevance * relevance + w.importance * importance + w.recency * recency\n\n\nclass HybridMemory(hybrid_2.HybridMemory):\n    def search(self, *, query, user_id, scope, session_id=None, agent_id=None, fact_type=None, entity=None,\n               graph_entity=None, top_k=5, candidate_k=10, weights=None, half_life_hours=168.0, touch=True):\n        validate_scope(scope, session_id, agent_id)\n        if not query.strip():\n            raise ValueError(\"query cannot be empty\")\n        weights = weights or FusionWeights()\n        candidates = {}\n        for record, rel in self.vector.search(query, user_id, scope, session_id, agent_id, candidate_k):\n            merge_candidate(candidates, record, source=\"vector\", relevance=rel)\n        if fact_type is not None and entity is not None:\n            record = self.kv.get(user_id, scope, fact_type, entity, session_id, agent_id)\n            if record is not None:\n                merge_candidate(candidates, record, source=\"kv\", relevance=1.0)\n        if graph_entity is not None:\n            for edge in self.graph.find_related(graph_entity, user_id, scope, session_id, agent_id):\n                record = self.records_by_id.get(edge.memory_id) if edge.memory_id else None\n                if record is not None:\n                    merge_candidate(candidates, record, source=\"graph\", relevance=0.90)\n        stamp = now_utc()\n        for c in candidates.values():\n            c.recency = recency_score(c.record, now=stamp, half_life_hours=half_life_hours)\n            c.importance = c.record.importance\n            c.score = fusion_score(relevance=c.relevance, importance=c.importance, recency=c.recency, weights=weights)\n        ranked = sorted(candidates.values(), key=lambda c: c.score, reverse=True)\n        results = ranked[:top_k]\n        if touch:\n            for c in results:\n                c.record.last_accessed_at = stamp\n        return results"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "hybrid_3.py",
    "headingEn": "main(): ten experiments",
    "headingKn": "main(): ಹತ್ತು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() prints the half-life table and fusion arithmetic, then runs four queries on a worked dataset, checks whether a stale fact still surfaces, flips the weights, checks the recency feedback loop, and probes paraphrase and Kannada queries.",
    "descKn": "main() half-life ಕೋಷ್ಟಕ ಮತ್ತು fusion ಅಂಕಗಣಿತ ಮುದ್ರಿಸಿ, ನಂತರ ಕೆಲಸದ ಡೇಟಾಸೆಟ್ ಮೇಲೆ ನಾಲ್ಕು ಪ್ರಶ್ನೆಗಳನ್ನು ಚಲಾಯಿಸಿ, ಹಳೆಯ ಸಂಗತಿ ಇನ್ನೂ ಕಾಣುತ್ತದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ, ತೂಕ ತಿರುಗಿಸಿ, ತಾಜಾತನ ಪ್ರತಿಕ್ರಿಯೆ ಚಕ್ರ ಪರಿಶೀಲಿಸಿ, ಮತ್ತು ಪರ್ಯಾಯ ಪದಗುಚ್ಛ ಹಾಗೂ ಕನ್ನಡ ಪ್ರಶ್ನೆಗಳನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Recency: exponential half-life, with explicit timestamps\")\n    base = MemoryRecord(\"x\", \"t\", \"u\", \"user\", \"f\", \"e\", \"v\", 0.5, now_utc(), now_utc())\n    for days in (0, 7, 14, 21, 70):\n        later = base.last_accessed_at + timedelta(days=days)\n        print(f\"age {days:>3} days, half-life 7 days -> recency {recency_score(base, now=later, half_life_hours=168):.4f}\")\n\n    section(\"2. Fusion weights are normalized\")\n    w = normalized_weights(FusionWeights(5, 3, 2))\n    print(f\"weights 5:3:2 -> {w.relevance:.2f}, {w.importance:.2f}, {w.recency:.2f}\")\n    print(f\"R=0.80 I=0.90 T=0.70 with 0.5/0.3/0.2 -> {fusion_score(relevance=0.80, importance=0.90, recency=0.70, weights=FusionWeights()):.3f}\")\n\n    mem = build_dataset()\n\n    section(\"3. Query 1: semantic (vector only)\")\n    print_results(\"embedding drift and retrieval\", mem.search(query=\"What did we discuss about embedding drift and retrieval?\", user_id=\"user_001\", scope=\"user\"))\n\n    section(\"4. Query 2: exact fact, all three stores agree on one memory\")\n    r = mem.search(query=\"What programming language does Akshay prefer?\", user_id=\"user_001\", scope=\"user\",\n                   fact_type=\"preference\", entity=\"language\", graph_entity=\"Akshay\")\n    print_results(\"language preference\", r)\n    print(\"\\n  total results:\", len(r), \"| the same memory arrived from\", len(r[0].sources), \"stores and was returned once\")\n\n    section(\"5. Query 3: relationship (graph), BillingCorp\")\n    print_results(\"which projects connect to BillingCorp\", mem.search(query=\"Which projects are connected to BillingCorp?\", user_id=\"user_001\", scope=\"user\", graph_entity=\"BillingCorp\"))\n\n    section(\"6. Query 4: ownership, user_001 asks about Bob\")\n    print_results(\"Bob prefers Rust, asked by user_001\", mem.search(query=\"Bob prefers Rust\", user_id=\"user_001\", scope=\"user\"))\n    print(\"  texts from user_002 in the results:\", any(c.record.user_id == \"user_002\" for c in mem.search(query=\"Bob prefers Rust\", user_id=\"user_001\", scope=\"user\")))\n\n    section(\"7. Genuinely checking: does an invalidated fact still surface?\")\n    m2 = HybridMemory()\n    m2.add(text=\"Akshay lives in Bengaluru.\", user_id=\"user_001\", scope=\"user\", fact_type=\"location\", entity=\"city\", value=\"Bengaluru\",\n           importance=0.85, graph_facts=[GraphFact(\"Akshay\", \"lives_in\", \"Bengaluru\")])\n    m2.add(text=\"Akshay lives in Mysuru.\", user_id=\"user_001\", scope=\"user\", fact_type=\"location\", entity=\"city\", value=\"Mysuru\",\n           importance=0.90, graph_facts=[GraphFact(\"Akshay\", \"lives_in\", \"Mysuru\")])\n    for e in m2.graph.edges:\n        print(\" \", describe_edge(e))\n    print(\"  kv current city:\", m2.kv.get(\"user_001\", \"user\", \"location\", \"city\").value)\n    print_results(\"with kv and graph hints\", m2.search(query=\"Where does Akshay live?\", user_id=\"user_001\", scope=\"user\", fact_type=\"location\", entity=\"city\", graph_entity=\"Akshay\", touch=False))\n    print_results(\"vector only, no hints\", m2.search(query=\"Where does Akshay live?\", user_id=\"user_001\", scope=\"user\", touch=False))\n\n    section(\"8. Weights flip the ranking of the same two memories\")\n    a = MemoryRecord(\"A\", \"very relevant, low importance, old\", \"u\", \"user\", \"f\", \"e\", \"v\", 0.30, now_utc(), now_utc())\n    b = MemoryRecord(\"B\", \"slightly less relevant, important, recent\", \"u\", \"user\", \"f\", \"e\", \"v\", 0.95, now_utc(), now_utc())\n    cases = {\"relevance-heavy 0.8/0.1/0.1\": FusionWeights(0.8, 0.1, 0.1), \"importance-heavy 0.2/0.7/0.1\": FusionWeights(0.2, 0.7, 0.1)}\n    for label, weights in cases.items():\n        sa = fusion_score(relevance=0.95, importance=0.30, recency=0.40, weights=weights)\n        sb = fusion_score(relevance=0.75, importance=0.95, recency=0.90, weights=weights)\n        print(f\"{label:<30} A={sa:.3f} B={sb:.3f} -> winner {'A' if sa > sb else 'B'}\")\n\n    section(\"9. Genuinely checking: retrieval refreshes recency\")\n    m3 = HybridMemory()\n    res = m3.add(text=\"Atlas deployment target is Kubernetes.\", user_id=\"u\", scope=\"user\", fact_type=\"deploy\", entity=\"target\", value=\"Kubernetes\", importance=0.5)\n    res.record.last_accessed_at = now_utc() - timedelta(days=60)\n    first = m3.search(query=\"Atlas deployment target\", user_id=\"u\", scope=\"user\")[0]\n    print(f\"first search : recency {first.recency:.4f} (60 days old, half-life 7 days)\")\n    second = m3.search(query=\"Atlas deployment target\", user_id=\"u\", scope=\"user\")[0]\n    print(f\"second search: recency {second.recency:.4f} (the first search refreshed last_accessed_at)\")\n\n    section(\"10. Genuinely checking the vector path on paraphrase and Kannada\")\n    for q in (\"what coding tongue does he like\", \"ಅಕ್ಷಯ್ ಯಾವ ಭಾಷೆ ಬಳಸುತ್ತಾರೆ\"):\n        got = mem.search(query=q, user_id=\"user_001\", scope=\"user\", touch=False)\n        print(f\"{q!r:<40} -> {[c.record.text[:30] for c in got] or 'no results'}\")\n    got = mem.search(query=\"ಅಕ್ಷಯ್ ಯಾವ ಭಾಷೆ ಬಳಸುತ್ತಾರೆ\", user_id=\"user_001\", scope=\"user\", fact_type=\"preference\", entity=\"language\", touch=False)\n    print(\"same Kannada query plus a KV hint -> \", [c.record.text[:30] for c in got], \"(the exact path still works)\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Recency: exponential half-life, with explicit timestamps ---\nage   0 days, half-life 7 days -> recency 1.0000\nage   7 days, half-life 7 days -> recency 0.5000\nage  14 days, half-life 7 days -> recency 0.2500\nage  21 days, half-life 7 days -> recency 0.1250\nage  70 days, half-life 7 days -> recency 0.0010\n\n--- 2. Fusion weights are normalized ---\nweights 5:3:2 -> 0.50, 0.30, 0.20\nR=0.80 I=0.90 T=0.70 with 0.5/0.3/0.2 -> 0.810\n\n--- 3. Query 1: semantic (vector only) ---\n\nembedding drift and retrieval\n  1. score=0.572 rel=0.294 imp=0.750 rec=1.000 sources=vector\n     We discussed embedding drift and how retrieval quality can degrade as memory grows.\n\n--- 4. Query 2: exact fact, all three stores agree on one memory ---\n\nlanguage preference\n  1. score=0.985 rel=1.000 imp=0.950 rec=1.000 sources=graph,kv,vector\n     Akshay prefers Python for agent engineering.\n\n  total results: 1 | the same memory arrived from 3 stores and was returned once\n\n--- 5. Query 3: relationship (graph), BillingCorp ---\n\nwhich projects connect to BillingCorp\n  1. score=0.920 rel=0.900 imp=0.900 rec=1.000 sources=graph,vector\n     Orion is billed by BillingCorp.\n  2. score=0.920 rel=0.900 imp=0.900 rec=1.000 sources=graph,vector\n     Phoenix is billed by BillingCorp.\n\n--- 6. Query 4: ownership, user_001 asks about Bob ---\n\nBob prefers Rust, asked by user_001\n  1. score=0.547 rel=0.125 imp=0.950 rec=1.000 sources=vector\n     Akshay prefers Python for agent engineering.\n  texts from user_002 in the results: False\n\n--- 7. Genuinely checking: does an invalidated fact still surface? ---\n  Akshay -[lives_in]-> Bengaluru (invalid)\n  Akshay -[lives_in]-> Mysuru (valid)\n  kv current city: Mysuru\n\nwith kv and graph hints\n  1. score=0.970 rel=1.000 imp=0.900 rec=1.000 sources=graph,kv,vector\n     Akshay lives in Mysuru.\n  2. score=0.526 rel=0.143 imp=0.850 rec=1.000 sources=vector\n     Akshay lives in Bengaluru.\n\nvector only, no hints\n  1. score=0.541 rel=0.143 imp=0.900 rec=1.000 sources=vector\n     Akshay lives in Mysuru.\n  2. score=0.526 rel=0.143 imp=0.850 rec=1.000 sources=vector\n     Akshay lives in Bengaluru.\n\n--- 8. Weights flip the ranking of the same two memories ---\nrelevance-heavy 0.8/0.1/0.1    A=0.830 B=0.785 -> winner A\nimportance-heavy 0.2/0.7/0.1   A=0.440 B=0.905 -> winner B\n\n--- 9. Genuinely checking: retrieval refreshes recency ---\nfirst search : recency 0.0026 (60 days old, half-life 7 days)\nsecond search: recency 1.0000 (the first search refreshed last_accessed_at)\n\n--- 10. Genuinely checking the vector path on paraphrase and Kannada ---\n'what coding tongue does he like'        -> no results\n'ಅಕ್ಷಯ್ ಯಾವ ಭಾಷೆ ಬಳಸುತ್ತಾರೆ'             -> no results\nsame Kannada query plus a KV hint ->  ['Akshay prefers Python for agen'] (the exact path still works)"
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
    "headingEn": "One Memory Through Three Doors",
    "headingKn": "ಮೂರು ಬಾಗಿಲುಗಳ ಮೂಲಕ ಒಂದು ಮೆಮೊರಿ",
    "bodyEn": "Query 1 uses only the vector path: the embedding-drift memory scores relevance 0.294, importance 0.75 and recency 1.0, giving 0.572. Query 2 adds the KV and graph hints: the Python-preference memory arrives from graph, kv and vector but is returned once, with relevance 1.0 and score 0.985, which is 0.5*1.0 + 0.3*0.95 + 0.2*1.0. Query 3 asks for BillingCorp and the graph finds both Phoenix and Orion at relevance 0.90 and score 0.920, a tie that insertion order breaks. Without deduplication by id the top-k budget would have been spent on one memory three times.",
    "bodyKn": "ಪ್ರಶ್ನೆ 1 ಕೇವಲ vector ಮಾರ್ಗ ಬಳಸುತ್ತದೆ: embedding-drift ಮೆಮೊರಿ ಪ್ರಸ್ತುತತೆ 0.294, ಮಹತ್ವ 0.75 ಮತ್ತು ತಾಜಾತನ 1.0 ಪಡೆದು 0.572 ನೀಡುತ್ತದೆ. ಪ್ರಶ್ನೆ 2 KV ಮತ್ತು graph ಸುಳಿವುಗಳನ್ನು ಸೇರಿಸುತ್ತದೆ: Python-ಆದ್ಯತೆ ಮೆಮೊರಿ graph, kv ಮತ್ತು vector ಮೂರರಿಂದ ಬರುತ್ತದೆ ಆದರೆ ಒಮ್ಮೆ ಮಾತ್ರ ಹಿಂತಿರುಗುತ್ತದೆ, ಪ್ರಸ್ತುತತೆ 1.0 ಮತ್ತು ಅಂಕ 0.985, ಅಂದರೆ 0.5*1.0 + 0.3*0.95 + 0.2*1.0. ಪ್ರಶ್ನೆ 3 BillingCorp ಕೇಳುತ್ತದೆ ಮತ್ತು graph ಪ್ರಸ್ತುತತೆ 0.90 ಹಾಗೂ ಅಂಕ 0.920 ರಲ್ಲಿ Phoenix ಮತ್ತು Orion ಎರಡನ್ನೂ ಕಂಡುಹಿಡಿಯುತ್ತದೆ, ಸಮಾನತೆಯನ್ನು ಸೇರಿಸಿದ ಕ್ರಮ ಮುರಿಯುತ್ತದೆ. id ಮೂಲಕ ನಕಲು ತೆಗೆಯದಿದ್ದರೆ top-k budget ಒಂದೇ ಮೆಮೊರಿಗೆ ಮೂರು ಬಾರಿ ಖರ್ಚಾಗುತ್ತಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Ownership at Query Time",
    "headingKn": "ಪ್ರಶ್ನೆ ಸಮಯದಲ್ಲಿ ಮಾಲೀಕತ್ವ",
    "bodyEn": "Query 4 has user_001 ask about Bob. No record owned by user_002 appears, which the lab checks directly. The top result is instead user_001's own Akshay record, matched at relevance 0.125 only through the word \"prefers\". Ownership stopped a leak, but it does not make the remaining match meaningful, so a minimum relevance threshold is a sensible addition. Scope is eligibility, not a ranking feature: authorization outranks relevance, and a permission must never be traded against similarity in a weighted sum.",
    "bodyKn": "ಪ್ರಶ್ನೆ 4 ರಲ್ಲಿ user_001 Bob ಬಗ್ಗೆ ಕೇಳುತ್ತಾರೆ. user_002 ಮಾಲೀಕತ್ವದ ಯಾವುದೇ ದಾಖಲೆ ಕಾಣುವುದಿಲ್ಲ, ಲ್ಯಾಬ್ ಅದನ್ನು ನೇರವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತದೆ. ಬದಲಿಗೆ ಅಗ್ರ ಫಲಿತಾಂಶ user_001 ರ ಸ್ವಂತ Akshay ದಾಖಲೆ, \"prefers\" ಪದದ ಮೂಲಕ ಮಾತ್ರ 0.125 ಪ್ರಸ್ತುತತೆಯಲ್ಲಿ ಹೊಂದಿದೆ. ಮಾಲೀಕತ್ವ ಸೋರಿಕೆ ತಡೆಯಿತು, ಆದರೆ ಉಳಿದ ಹೊಂದಾಣಿಕೆಯನ್ನು ಅರ್ಥಪೂರ್ಣಗೊಳಿಸುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ಕನಿಷ್ಠ ಪ್ರಸ್ತುತತೆ ಮಿತಿ ಸೂಕ್ತ ಸೇರ್ಪಡೆ. Scope ಅರ್ಹತೆ, ಶ್ರೇಣೀಕರಣ ಲಕ್ಷಣವಲ್ಲ: ಅಧಿಕಾರ ಪ್ರಸ್ತುತತೆಗಿಂತ ಮೇಲು, ಮತ್ತು ಅನುಮತಿಯನ್ನು ತೂಕದ ಮೊತ್ತದಲ್ಲಿ ಹೋಲಿಕೆಯೊಂದಿಗೆ ವಿನಿಮಯ ಮಾಡಬಾರದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Stale Fact Still Surfaces",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಹಳೆಯ ಸಂಗತಿ ಇನ್ನೂ ಕಾಣುತ್ತದೆ",
    "bodyEn": "Section 7 stores Bengaluru, then Mysuru, which invalidates the Bengaluru graph edge. With the KV and graph hints, \"Akshay lives in Mysuru.\" is first at 0.970 from three sources and \"Akshay lives in Bengaluru.\" is still second at 0.526 from vector alone. Without hints they are nearly tied: 0.541 for Mysuru against 0.526 for Bengaluru. The vector store keeps history by design, so an old sentence can sit in the top results next to the current one. Invalidation in the graph does not remove it from vector retrieval; answering \"where does he live now\" safely needs the KV or graph validity signal, or a filter that drops vector hits contradicted by an invalid edge.",
    "bodyKn": "ವಿಭಾಗ 7 Bengaluru ನಂತರ Mysuru ಸಂಗ್ರಹಿಸುತ್ತದೆ, ಇದು Bengaluru graph edge ಅಮಾನ್ಯಗೊಳಿಸುತ್ತದೆ. KV ಮತ್ತು graph ಸುಳಿವುಗಳೊಂದಿಗೆ \"Akshay lives in Mysuru.\" ಮೂರು sources ನಿಂದ 0.970 ರಲ್ಲಿ ಮೊದಲು, ಮತ್ತು \"Akshay lives in Bengaluru.\" ಕೇವಲ vector ನಿಂದ 0.526 ರಲ್ಲಿ ಇನ್ನೂ ಎರಡನೆಯದು. ಸುಳಿವುಗಳಿಲ್ಲದೆ ಅವು ಬಹುತೇಕ ಸಮ: Mysuru 0.541, Bengaluru 0.526. Vector ಸಂಗ್ರಹ ವಿನ್ಯಾಸದಿಂದ ಇತಿಹಾಸ ಇಡುತ್ತದೆ, ಆದ್ದರಿಂದ ಹಳೆಯ ವಾಕ್ಯ ಪ್ರಸ್ತುತದ ಪಕ್ಕ ಅಗ್ರ ಫಲಿತಾಂಶಗಳಲ್ಲಿ ಕೂರಬಹುದು. Graph ನಲ್ಲಿನ ಅಮಾನ್ಯೀಕರಣ ಅದನ್ನು vector ಪಡೆಯುವಿಕೆಯಿಂದ ತೆಗೆಯುವುದಿಲ್ಲ; \"ಅವರು ಈಗ ಎಲ್ಲಿ ವಾಸಿಸುತ್ತಾರೆ\" ಎಂಬುದಕ್ಕೆ ಸುರಕ್ಷಿತವಾಗಿ ಉತ್ತರಿಸಲು KV ಅಥವಾ graph ಮಾನ್ಯತಾ ಸಂಕೇತ ಬೇಕು, ಅಥವಾ ಅಮಾನ್ಯ edge ನಿಂದ ವಿರೋಧಿಸಲ್ಪಟ್ಟ vector ಹಿಟ್‌ಗಳನ್ನು ಬಿಡುವ ಫಿಲ್ಟರ್ ಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Weights Are Policy",
    "headingKn": "ತೂಕಗಳು ನೀತಿ",
    "bodyEn": "Section 8 fixes two memories and changes only the weights. Memory A has relevance 0.95, importance 0.30, recency 0.40. Memory B has 0.75, 0.95, 0.90. With weights 0.8, 0.1, 0.1 A scores 0.830 against 0.785 and wins. With 0.2, 0.7, 0.1 A scores 0.440 against 0.905 and B wins by a wide margin. A chat companion may weight recency up, a compliance system importance, a research tool relevance. Keep the components visible in the result so a bad ranking can be debugged: was retrieval wrong, importance wrong, recency wrong, scope wrong, or the weights?",
    "bodyKn": "ವಿಭಾಗ 8 ಎರಡು ಮೆಮೊರಿಗಳನ್ನು ನಿಗದಿಪಡಿಸಿ ತೂಕಗಳನ್ನು ಮಾತ್ರ ಬದಲಿಸುತ್ತದೆ. ಮೆಮೊರಿ A ಪ್ರಸ್ತುತತೆ 0.95, ಮಹತ್ವ 0.30, ತಾಜಾತನ 0.40 ಹೊಂದಿದೆ. B ಗೆ 0.75, 0.95, 0.90. ತೂಕ 0.8, 0.1, 0.1 ರಲ್ಲಿ A 0.830 ವಿರುದ್ಧ 0.785 ಪಡೆದು ಗೆಲ್ಲುತ್ತದೆ. 0.2, 0.7, 0.1 ರಲ್ಲಿ A 0.440 ವಿರುದ್ಧ 0.905 ಪಡೆದು B ದೊಡ್ಡ ಅಂತರದಿಂದ ಗೆಲ್ಲುತ್ತದೆ. ಚಾಟ್ ಸಂಗಾತಿ ತಾಜಾತನ ಹೆಚ್ಚಿಸಬಹುದು, ಅನುಸರಣೆ ವ್ಯವಸ್ಥೆ ಮಹತ್ವ, ಸಂಶೋಧನಾ ಸಾಧನ ಪ್ರಸ್ತುತತೆ. ಕೆಟ್ಟ ಶ್ರೇಣೀಕರಣ ಡೀಬಗ್ ಮಾಡಲು ಫಲಿತಾಂಶದಲ್ಲಿ ಘಟಕಗಳು ಕಾಣುವಂತಿರಲಿ: ಪಡೆಯುವಿಕೆ ತಪ್ಪೇ, ಮಹತ್ವ ತಪ್ಪೇ, ತಾಜಾತನ ತಪ್ಪೇ, scope ತಪ್ಪೇ, ಅಥವಾ ತೂಕಗಳೇ?"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Retrieval Refreshes Recency",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪಡೆಯುವಿಕೆ ತಾಜಾತನ ನವೀಕರಿಸುತ್ತದೆ",
    "bodyEn": "Section 9 creates a memory last accessed 60 days ago. The first search sees recency 0.0026. Because search refreshes last_accessed_at on returned records, the second search sees 1.0000. A stale memory that gets retrieved once looks completely fresh from then on, which is the feedback loop: high rank, retrieval, refreshed recency, high rank. Whether to refresh on read, on write or on confirmed use is a product decision, and a counter-based access signal is a gentler alternative.",
    "bodyKn": "ವಿಭಾಗ 9 60 ದಿನಗಳ ಹಿಂದೆ ಕೊನೆಯದಾಗಿ ಪ್ರವೇಶಿಸಿದ ಮೆಮೊರಿ ರಚಿಸುತ್ತದೆ. ಮೊದಲ ಹುಡುಕಾಟ ತಾಜಾತನ 0.0026 ನೋಡುತ್ತದೆ. ಹಿಂತಿರುಗಿದ ದಾಖಲೆಗಳ last_accessed_at ಅನ್ನು search ನವೀಕರಿಸುವುದರಿಂದ ಎರಡನೇ ಹುಡುಕಾಟ 1.0000 ನೋಡುತ್ತದೆ. ಒಮ್ಮೆ ಪಡೆದ ಹಳೆಯ ಮೆಮೊರಿ ಅಲ್ಲಿಂದ ಸಂಪೂರ್ಣ ತಾಜಾ ಕಾಣುತ್ತದೆ, ಇದೇ ಪ್ರತಿಕ್ರಿಯೆ ಚಕ್ರ: ಹೆಚ್ಚಿನ ಶ್ರೇಣಿ, ಪಡೆಯುವಿಕೆ, ನವೀಕರಿಸಿದ ತಾಜಾತನ, ಹೆಚ್ಚಿನ ಶ್ರೇಣಿ. ಓದಿದಾಗ, ಬರೆದಾಗ ಅಥವಾ ದೃಢೀಕೃತ ಬಳಕೆಯಲ್ಲಿ ನವೀಕರಿಸಬೇಕೇ ಎಂಬುದು ಉತ್ಪನ್ನ ನಿರ್ಧಾರ, ಮತ್ತು ಎಣಿಕೆ-ಆಧಾರಿತ ಪ್ರವೇಶ ಸಂಕೇತ ಮೃದು ಪರ್ಯಾಯ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Hints Carry the Hard Queries",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕಠಿಣ ಪ್ರಶ್ನೆಗಳನ್ನು ಸುಳಿವುಗಳು ಹೊರುತ್ತವೆ",
    "bodyEn": "Section 10: \"what coding tongue does he like\" and a Kannada query about Akshay's language both return nothing from the vector path alone. Adding the KV hint fact_type=preference, entity=language to the same Kannada query returns the right memory. The exact path is language-independent because it needs no text matching, which is useful for a bilingual platform, and it also shows that a real deployment needs a query-understanding step that produces those hints, plus real embeddings for the fuzzy path.",
    "bodyKn": "ವಿಭಾಗ 10: \"what coding tongue does he like\" ಮತ್ತು Akshay ಭಾಷೆಯ ಬಗ್ಗೆ ಕನ್ನಡ ಪ್ರಶ್ನೆ ಎರಡೂ ಕೇವಲ vector ಮಾರ್ಗದಿಂದ ಏನನ್ನೂ ಹಿಂತಿರುಗಿಸುವುದಿಲ್ಲ. ಅದೇ ಕನ್ನಡ ಪ್ರಶ್ನೆಗೆ KV ಸುಳಿವು fact_type=preference, entity=language ಸೇರಿಸಿದರೆ ಸರಿಯಾದ ಮೆಮೊರಿ ಬರುತ್ತದೆ. ನಿಖರ ಮಾರ್ಗ ಪಠ್ಯ ಹೊಂದಾಣಿಕೆ ಬೇಕಿಲ್ಲದ್ದರಿಂದ ಭಾಷೆ-ಸ್ವತಂತ್ರ, ಇದು ದ್ವಿಭಾಷಾ ವೇದಿಕೆಗೆ ಉಪಯುಕ್ತ, ಮತ್ತು ನಿಜವಾದ ನಿಯೋಜನೆಗೆ ಆ ಸುಳಿವುಗಳನ್ನು ಉತ್ಪಾದಿಸುವ ಪ್ರಶ್ನೆ-ಅರ್ಥೈಸುವ ಹಂತ ಹಾಗೂ ಅಸ್ಪಷ್ಟ ಮಾರ್ಗಕ್ಕೆ ನಿಜವಾದ embeddings ಬೇಕು ಎಂದೂ ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Other Production Concerns",
    "headingKn": "ಇತರ Production ಕಾಳಜಿಗಳು",
    "bodyEn": "Embedding drift: an old and a new embedding model make incompatible geometries, so re-embed the high-use records and track access counts. KV schema creep: \"language\", \"preferred_language\" and \"coding_language\" fragment exact lookup unless fact types and entities are controlled. Graph explosion: bound it with the confidence floor, the cap, relation allowlists and pruning. Search is a linear scan here, O(N) for vector and O(E) for the graph; production replaces them with an ANN index and adjacency indexes. Keep fusion scores inspectable rather than replacing them with an opaque model.",
    "bodyKn": "Embedding drift: ಹಳೆಯ ಮತ್ತು ಹೊಸ embedding ಮಾದರಿ ಹೊಂದಿಕೆಯಾಗದ ರೇಖಾಗಣಿತ ಮಾಡುತ್ತವೆ, ಆದ್ದರಿಂದ ಹೆಚ್ಚು ಬಳಸಿದ ದಾಖಲೆಗಳನ್ನು ಮರು-embed ಮಾಡಿ ಮತ್ತು ಪ್ರವೇಶ ಎಣಿಕೆ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ. KV schema creep: \"language\", \"preferred_language\" ಮತ್ತು \"coding_language\" fact types ಮತ್ತು entities ನಿಯಂತ್ರಿಸದಿದ್ದರೆ ನಿಖರ ಹುಡುಕಾಟವನ್ನು ತುಂಡರಿಸುತ್ತವೆ. Graph ಸ್ಫೋಟ: ವಿಶ್ವಾಸ ಕನಿಷ್ಠ, ಮಿತಿ, ಸಂಬಂಧ ಅನುಮತಿ ಪಟ್ಟಿ ಮತ್ತು ಕತ್ತರಿಸುವಿಕೆಯಿಂದ ಮಿತಿ ಹಾಕಿ. ಇಲ್ಲಿ ಹುಡುಕಾಟ ರೇಖೀಯ ಸ್ಕ್ಯಾನ್, vector ಗೆ O(N) ಮತ್ತು graph ಗೆ O(E); production ಅವನ್ನು ANN ಸೂಚಿ ಮತ್ತು ಪಕ್ಕದ ಸೂಚಿಗಳಿಂದ ಬದಲಿಸುತ್ತದೆ. Fusion ಅಂಕಗಳನ್ನು ಅಪಾರದರ್ಶಕ ಮಾದರಿಯಿಂದ ಬದಲಿಸದೆ ಪರಿಶೀಲಿಸಬಹುದಾಗಿ ಇಡಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "The context window should hold the right few memories for the task, not everything. Hybrid retrieval pages those in from several differently shaped stores and ranks them by a policy you can read, and it connects naturally to blocks (what is pinned) and sleep-time compute (what gets cleaned in the background).",
    "bodyKn": "Context window ಕಾರ್ಯಕ್ಕೆ ಸರಿಯಾದ ಕೆಲವು ಮೆಮೊರಿಗಳನ್ನು ಹೊಂದಿರಬೇಕು, ಎಲ್ಲವನ್ನೂ ಅಲ್ಲ. Hybrid ಪಡೆಯುವಿಕೆ ಹಲವು ಬೇರೆ ಆಕಾರದ ಸಂಗ್ರಹಗಳಿಂದ ಅವನ್ನು ಒಳತಂದು ನೀವು ಓದಬಹುದಾದ ನೀತಿಯಿಂದ ಶ್ರೇಣೀಕರಿಸುತ್ತದೆ, ಮತ್ತು ಅದು blocks (ಏನು ಪಿನ್ ಆಗಿದೆ) ಮತ್ತು sleep-time compute (ಹಿನ್ನೆಲೆಯಲ್ಲಿ ಏನು ಸ್ವಚ್ಛವಾಗುತ್ತದೆ) ಗೆ ಸಹಜವಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the highest-relevance memory should always win.\" The run shows relevance, importance and recency can legitimately disagree, and that a perfectly relevant memory can be an obsolete one.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಅತಿ ಹೆಚ್ಚು ಪ್ರಸ್ತುತತೆಯ ಮೆಮೊರಿ ಯಾವಾಗಲೂ ಗೆಲ್ಲಬೇಕು.\" ಪ್ರಸ್ತುತತೆ, ಮಹತ್ವ ಮತ್ತು ತಾಜಾತನ ನ್ಯಾಯಸಮ್ಮತವಾಗಿ ಭಿನ್ನವಾಗಬಹುದು ಮತ್ತು ಸಂಪೂರ್ಣ ಪ್ರಸ್ತುತ ಮೆಮೊರಿ ಹಳೆಯದಾಗಿರಬಹುದು ಎಂದು ಓಟ ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Candidate: a merged retrieval result with sources, relevance, importance and recency. Half-life: the age at which recency halves. Fusion: a weighted sum of the three signals. Normalized weights: weights scaled to sum to 1. Hard filter: ownership applied before ranking. Retrieval hint: a fact_type, entity or graph_entity that activates the exact paths.",
    "bodyKn": "Candidate: sources, ಪ್ರಸ್ತುತತೆ, ಮಹತ್ವ ಮತ್ತು ತಾಜಾತನ ಇರುವ ವಿಲೀನಗೊಂಡ ಪಡೆಯುವಿಕೆ ಫಲಿತಾಂಶ. Half-life: ತಾಜಾತನ ಅರ್ಧವಾಗುವ ವಯಸ್ಸು. Fusion: ಮೂರು ಸಂಕೇತಗಳ ತೂಕದ ಮೊತ್ತ. ಸಾಮಾನ್ಯೀಕೃತ ತೂಕಗಳು: ಮೊತ್ತ 1 ಆಗುವಂತೆ ಮಾಪನ ಮಾಡಿದ ತೂಕಗಳು. ಕಠಿಣ ಫಿಲ್ಟರ್: ಶ್ರೇಣೀಕರಣದ ಮೊದಲು ಅನ್ವಯಿಸುವ ಮಾಲೀಕತ್ವ. Retrieval hint: ನಿಖರ ಮಾರ್ಗಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುವ fact_type, entity ಅಥವಾ graph_entity."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Map each store's relevance to 0 to 1 and merge by memory id, so one memory is one candidate with several sources. 2) Score = weighted relevance, importance and recency, with weights as product policy. 3) Recency is exponential decay from last access. 4) Ownership is a hard filter, never a weight. 5) A stale vector sentence still ranks second even after the graph invalidated it. 6) Retrieval refreshes recency and can create a feedback loop. 7) The KV path needs hints but works in any language; the vector path needs real embeddings.",
    "bodyKn": "1) ಪ್ರತಿ ಸಂಗ್ರಹದ ಪ್ರಸ್ತುತತೆಯನ್ನು 0 ರಿಂದ 1 ಕ್ಕೆ ನಕ್ಷೆ ಮಾಡಿ ಮೆಮೊರಿ id ಯಿಂದ ವಿಲೀನಗೊಳಿಸಿ, ಆಗ ಒಂದು ಮೆಮೊರಿ ಹಲವು sources ಇರುವ ಒಂದು ಅಭ್ಯರ್ಥಿ. 2) ಅಂಕ = ಪ್ರಸ್ತುತತೆ, ಮಹತ್ವ ಮತ್ತು ತಾಜಾತನದ ತೂಕದ ಮೊತ್ತ, ತೂಕಗಳು ಉತ್ಪನ್ನ ನೀತಿ. 3) ತಾಜಾತನ ಕೊನೆಯ ಪ್ರವೇಶದಿಂದ ಘಾತೀಯ ಕ್ಷಯ. 4) ಮಾಲೀಕತ್ವ ಕಠಿಣ ಫಿಲ್ಟರ್, ಎಂದೂ ತೂಕವಲ್ಲ. 5) Graph ಅಮಾನ್ಯಗೊಳಿಸಿದ ನಂತರವೂ ಹಳೆಯ vector ವಾಕ್ಯ ಎರಡನೇ ಸ್ಥಾನದಲ್ಲಿದೆ. 6) ಪಡೆಯುವಿಕೆ ತಾಜಾತನ ನವೀಕರಿಸಿ ಪ್ರತಿಕ್ರಿಯೆ ಚಕ್ರ ಸೃಷ್ಟಿಸಬಹುದು. 7) KV ಮಾರ್ಗಕ್ಕೆ ಸುಳಿವುಗಳು ಬೇಕು ಆದರೆ ಯಾವುದೇ ಭಾಷೆಯಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ; vector ಮಾರ್ಗಕ್ಕೆ ನಿಜವಾದ embeddings ಬೇಕು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why are candidates deduplicated by MemoryRecord.id?",
      "qKn": "ಅಭ್ಯರ್ಥಿಗಳನ್ನು MemoryRecord.id ಯಿಂದ ನಕಲು ತೆಗೆಯುವುದು ಏಕೆ?",
      "opts": [
       "To reduce Python syntax",
       "Several stores may retrieve different views of the same logical memory",
       "Graphs require UUIDs",
       "To increase recency"
      ],
      "optsKn": [
       "Python ಸಿಂಟ್ಯಾಕ್ಸ್ ಕಡಿಮೆ ಮಾಡಲು",
       "ಹಲವು ಸಂಗ್ರಹಗಳು ಒಂದೇ ತಾರ್ಕಿಕ ಮೆಮೊರಿಯ ಬೇರೆ ನೋಟಗಳನ್ನು ಪಡೆಯಬಹುದು",
       "Graphs ಗೆ UUIDs ಬೇಕು",
       "ತಾಜಾತನ ಹೆಚ್ಚಿಸಲು"
      ],
      "correct": 1
     },
     {
      "q": "With weights 0.8/0.1/0.1 memory A scored 0.830 and B 0.785; with 0.2/0.7/0.1 A scored 0.440 and B 0.905. What does that show?",
      "qKn": "ತೂಕ 0.8/0.1/0.1 ರಲ್ಲಿ A 0.830, B 0.785; 0.2/0.7/0.1 ರಲ್ಲಿ A 0.440, B 0.905. ಇದು ಏನನ್ನು ತೋರಿಸುತ್ತದೆ?",
      "opts": [
       "The scoring is random",
       "The weights encode product priorities and can flip the ranking of the same memories",
       "B is always better",
       "Recency does not matter"
      ],
      "optsKn": [
       "ಅಂಕ ನೀಡುವಿಕೆ ಯಾದೃಚ್ಛಿಕ",
       "ತೂಕಗಳು ಉತ್ಪನ್ನ ಆದ್ಯತೆಗಳನ್ನು ಸಂಕೇತಿಸಿ ಅದೇ ಮೆಮೊರಿಗಳ ಶ್ರೇಣೀಕರಣ ತಿರುಗಿಸಬಹುದು",
       "B ಯಾವಾಗಲೂ ಉತ್ತಮ",
       "ತಾಜಾತನ ಮುಖ್ಯವಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "Why is scope a hard filter and not another fusion weight?",
      "qKn": "Scope ಕಠಿಣ ಫಿಲ್ಟರ್ ಮತ್ತು ಇನ್ನೊಂದು fusion ತೂಕ ಅಲ್ಲ ಏಕೆ?",
      "opts": [
       "Scope only affects speed",
       "Eligibility decides whether a memory may be returned at all; a high similarity must never outweigh a permission",
       "Vector stores cannot store scopes",
       "Recency handles permissions"
      ],
      "optsKn": [
       "Scope ವೇಗದ ಮೇಲೆ ಮಾತ್ರ ಪರಿಣಾಮ",
       "ಮೆಮೊರಿ ಹಿಂತಿರುಗಬಹುದೇ ಎಂದು ಅರ್ಹತೆ ನಿರ್ಧರಿಸುತ್ತದೆ; ಹೆಚ್ಚಿನ ಹೋಲಿಕೆ ಅನುಮತಿಯನ್ನು ಎಂದೂ ಮೀರಬಾರದು",
       "Vector ಸಂಗ್ರಹಗಳು scopes ಸಂಗ್ರಹಿಸಲಾರವು",
       "ತಾಜಾತನ ಅನುಮತಿಗಳನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ"
      ],
      "correct": 1
     },
     {
      "q": "After a city changed, the old Bengaluru sentence still appeared second. Why?",
      "qKn": "ನಗರ ಬದಲಾದ ನಂತರವೂ ಹಳೆಯ Bengaluru ವಾಕ್ಯ ಎರಡನೆಯದಾಗಿ ಕಾಣಿಸಿತು. ಏಕೆ?",
      "opts": [
       "KV kept it",
       "The vector store keeps history by design and graph invalidation does not remove it from vector retrieval",
       "Recency was zero",
       "It was the same record as Mysuru"
      ],
      "optsKn": [
       "KV ಅದನ್ನು ಉಳಿಸಿತು",
       "Vector ಸಂಗ್ರಹ ವಿನ್ಯಾಸದಿಂದ ಇತಿಹಾಸ ಇಡುತ್ತದೆ ಮತ್ತು graph ಅಮಾನ್ಯೀಕರಣ ಅದನ್ನು vector ಪಡೆಯುವಿಕೆಯಿಂದ ತೆಗೆಯುವುದಿಲ್ಲ",
       "ತಾಜಾತನ ಶೂನ್ಯವಾಗಿತ್ತು",
       "ಅದು Mysuru ರ ಅದೇ ದಾಖಲೆ"
      ],
      "correct": 1
     },
     {
      "q": "What does the second search in the recency experiment show?",
      "qKn": "ತಾಜಾತನ ಪ್ರಯೋಗದ ಎರಡನೇ ಹುಡುಕಾಟ ಏನನ್ನು ತೋರಿಸುತ್ತದೆ?",
      "opts": [
       "Recency decays faster",
       "Retrieval refreshed last_accessed_at, so a 60-day-old memory looked fully fresh: a feedback loop",
       "The memory was deleted",
       "Half-life was reset to zero"
      ],
      "optsKn": [
       "ತಾಜಾತನ ವೇಗವಾಗಿ ಕ್ಷಯಿಸುತ್ತದೆ",
       "ಪಡೆಯುವಿಕೆ last_accessed_at ನವೀಕರಿಸಿತು, ಆದ್ದರಿಂದ 60-ದಿನದ ಮೆಮೊರಿ ಸಂಪೂರ್ಣ ತಾಜಾ ಕಂಡಿತು: ಪ್ರತಿಕ್ರಿಯೆ ಚಕ್ರ",
       "ಮೆಮೊರಿ ಅಳಿಸಲಾಯಿತು",
       "Half-life ಶೂನ್ಯಕ್ಕೆ ಮರುಹೊಂದಿಸಲಾಯಿತು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
