"""Teaching implementation (our own): Hybrid Memory Part 1 - MemoryRecord, VectorStore, KVStore, GraphStore."""
import re
import uuid
from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Optional


def now_utc() -> datetime:
    return datetime.now(timezone.utc)


def tokenize(text: str) -> set:
    return set(re.findall(r"[a-z0-9]+", text.lower()))


def token_similarity(a: str, b: str) -> float:
    ta, tb = tokenize(a), tokenize(b)
    if not ta or not tb:
        return 0.0
    return len(ta & tb) / len(ta | tb)


@dataclass
class MemoryRecord:
    id: str
    text: str
    user_id: str
    scope: str
    fact_type: str
    entity: str
    value: str
    importance: float
    created_at: datetime
    last_accessed_at: datetime
    session_id: Optional[str] = None
    agent_id: Optional[str] = None
    metadata: dict = field(default_factory=dict)


def make_record(text, user_id, scope, fact_type, entity, value, importance=0.5,
                session_id=None, agent_id=None, metadata=None) -> MemoryRecord:
    ts = now_utc()
    return MemoryRecord(id=str(uuid.uuid4()), text=text, user_id=user_id, scope=scope, fact_type=fact_type,
                        entity=entity, value=value, importance=max(0.0, min(1.0, importance)),
                        created_at=ts, last_accessed_at=ts, session_id=session_id, agent_id=agent_id,
                        metadata=metadata or {})


def scope_matches(record: MemoryRecord, scope: str, session_id, agent_id) -> bool:
    if record.scope != scope:
        return False
    if scope == "session":
        return record.session_id == session_id
    if scope == "agent":
        return record.agent_id == agent_id
    return True


class VectorStore:
    def __init__(self):
        self.records = []

    def add(self, record: MemoryRecord) -> None:
        self.records.append(record)

    def search(self, query, user_id, scope, session_id=None, agent_id=None, top_k=5):
        results = []
        for record in self.records:
            if record.user_id != user_id:
                continue
            if not scope_matches(record, scope, session_id, agent_id):
                continue
            score = token_similarity(query, record.text)
            if score > 0:
                results.append((record, score))
        results.sort(key=lambda item: item[1], reverse=True)
        return results[:top_k]


class KVStore:
    def __init__(self):
        self.data = {}

    def _key(self, record):
        return (record.user_id, record.scope, record.session_id, record.agent_id, record.fact_type, record.entity)

    def add(self, record):
        self.data[self._key(record)] = record

    def get(self, user_id, scope, fact_type, entity, session_id=None, agent_id=None):
        return self.data.get((user_id, scope, session_id, agent_id, fact_type, entity))


@dataclass
class GraphEdge:
    id: str
    user_id: str
    scope: str
    subject: str
    relation: str
    object: str
    valid: bool
    created_at: datetime
    invalidated_at: Optional[datetime] = None
    session_id: Optional[str] = None
    agent_id: Optional[str] = None
    memory_id: Optional[str] = None


class GraphStore:
    def __init__(self):
        self.edges = []

    def add_edge(self, record, subject, relation, object_):
        edge = GraphEdge(id=str(uuid.uuid4()), user_id=record.user_id, scope=record.scope, subject=subject,
                         relation=relation, object=object_, valid=True, created_at=now_utc(),
                         session_id=record.session_id, agent_id=record.agent_id, memory_id=record.id)
        self.edges.append(edge)
        return edge

    def find_related(self, entity, user_id, scope, session_id=None, agent_id=None, include_invalid=False):
        results, wanted = [], entity.lower()
        for edge in self.edges:
            if edge.user_id != user_id or edge.scope != scope:
                continue
            if scope == "session" and edge.session_id != session_id:
                continue
            if scope == "agent" and edge.agent_id != agent_id:
                continue
            if not include_invalid and not edge.valid:
                continue
            if edge.subject.lower() == wanted or edge.object.lower() == wanted:
                results.append(edge)
        return results


class HybridMemory:
    def __init__(self):
        self.vector, self.kv, self.graph = VectorStore(), KVStore(), GraphStore()


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Three query shapes, one memory")
    vector, kv, graph = VectorStore(), KVStore(), GraphStore()
    rec = make_record("Akshay prefers Python for agent engineering.", "user_001", "user", "preference", "language", "Python", 0.9)
    vector.add(rec)
    kv.add(rec)
    graph.add_edge(rec, "Akshay", "prefers", "Python")
    for q in ("preferred programming language", "Akshay agent engineering"):
        print(f"vector {q!r:<34} ->", [(r.text, round(s, 3)) for r, s in vector.search(q, "user_001", "user")])
    print("kv     preference/language               ->", kv.get("user_001", "user", "preference", "language").value)
    print("graph  entity='Akshay'                   ->", [(e.subject, e.relation, e.object) for e in graph.find_related("Akshay", "user_001", "user")])
    print("graph  entity='Python' (incoming edge)   ->", [(e.subject, e.relation, e.object) for e in graph.find_related("Python", "user_001", "user")])

    section("2. Jaccard worked example from the lesson")
    a, q = "embedding drift reduces retrieval quality", "embedding drift retrieval problems"
    print("A tokens:", sorted(tokenize(a)))
    print("Q tokens:", sorted(tokenize(q)))
    print("intersection:", sorted(tokenize(a) & tokenize(q)), "| union size:", len(tokenize(a) | tokenize(q)))
    print("similarity:", token_similarity(a, q))

    section("3. Where token overlap fails and why embeddings exist")
    for q in ("preferred programming language", "which tongue does Akshay like coding in", "ಅಕ್ಷಯ್ ಯಾವ ಭಾಷೆ ಇಷ್ಟಪಡುತ್ತಾರೆ"):
        hits = vector.search(q, "user_001", "user")
        print(f"{q!r:<48} -> {[round(s, 3) for _, s in hits] or 'no hit'}")

    section("4. Scope and ownership are enforced before ranking")
    vector.add(make_record("Bob prefers Rust.", "user_002", "user", "preference", "language", "Rust", 0.9))
    vector.add(make_record("For this session use staging.", "user_001", "session", "runtime", "environment", "staging", 0.4, session_id="A"))
    vector.add(make_record("For this session use production.", "user_001", "session", "runtime", "environment", "production", 0.4, session_id="B"))
    print("user_001 / user scope  'Bob prefers Rust' ->", [r.text for r, _ in vector.search("Bob prefers Rust", "user_001", "user")])
    print("user_002 / user scope  'Bob prefers Rust' ->", [r.text for r, _ in vector.search("Bob prefers Rust", "user_002", "user")])
    print("session A  'session use'                   ->", [r.text for r, _ in vector.search("session use", "user_001", "session", session_id="A")])
    print("session B  'session use'                   ->", [r.text for r, _ in vector.search("session use", "user_001", "session", session_id="B")])

    section("5. Genuinely checking the KV key: scope is part of identity")
    kv2 = KVStore()
    ra = make_record("env staging", "user_001", "session", "runtime", "environment", "staging", session_id="A")
    rb = make_record("env production", "user_001", "session", "runtime", "environment", "production", session_id="B")
    kv2.add(ra)
    kv2.add(rb)
    print("session A:", kv2.get("user_001", "session", "runtime", "environment", session_id="A").value)
    print("session B:", kv2.get("user_001", "session", "runtime", "environment", session_id="B").value)
    print("entries stored:", len(kv2.data), "(two, because session_id is in the key)")
    print("lookup with different casing 'Environment':", kv2.get("user_001", "session", "runtime", "Environment", session_id="A"))

    section("6. Importance is clamped")
    for raw in (8, -2, 0.5):
        print(f"importance={raw!r:<5} -> stored {make_record('x', 'u', 'user', 't', 'e', 'v', raw).importance}")

    section("7. Why the highest similarity is not enough (arithmetic)")
    wr, wi, wt = 0.5, 0.3, 0.2
    for name, r, i, t in (("A casual mention", 0.90, 0.30, 0.90), ("B primary language", 0.84, 0.95, 0.70)):
        print(f"{name:<20} R={r} I={i} T={t} -> {wr * r + wi * i + wt * t:.3f}")
    print("A has the higher relevance, B has the higher weighted score")


if __name__ == "__main__":
    main()
