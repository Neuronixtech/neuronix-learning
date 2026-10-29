"""Teaching implementation (our own): Hybrid Memory Part 2 - one add() writing three synchronized views."""
import re
import uuid
from dataclasses import dataclass
from datetime import datetime, timedelta
from typing import Optional

from hybrid_1 import (GraphEdge, MemoryRecord, VectorStore, make_record, now_utc, scope_matches)

VALID_SCOPES = {"user", "session", "agent"}
SINGLE_VALUED_RELATIONS = {"lives_in", "phone", "email", "primary_language", "billing_entity"}
MAX_GRAPH_EDGES_PER_ADD = 5
MIN_GRAPH_CONFIDENCE = 0.60


def normalize_name(value: str) -> str:
    return " ".join(value.strip().lower().split())


def validate_scope(scope, session_id, agent_id) -> None:
    if scope not in VALID_SCOPES:
        raise ValueError(f"Unsupported scope: {scope}")
    if scope == "session" and not session_id:
        raise ValueError("session scope requires session_id")
    if scope == "agent" and not agent_id:
        raise ValueError("agent scope requires agent_id")


@dataclass
class GraphFact:
    subject: str
    relation: str
    object: str
    confidence: float = 1.0


@dataclass
class AddResult:
    record: MemoryRecord
    graph_edges_added: list
    graph_facts_rejected: int


def filter_graph_facts(facts, *, min_confidence, max_edges):
    accepted = [f for f in facts if f.confidence >= min_confidence]
    accepted.sort(key=lambda f: f.confidence, reverse=True)
    return accepted[:max_edges]


class KVStore:
    """Part 2 version: structured dimensions are normalized so 'Language' and 'language' are one key."""

    def __init__(self):
        self.data = {}

    def _key(self, record):
        return (record.user_id, record.scope, record.session_id, record.agent_id,
                normalize_name(record.fact_type), normalize_name(record.entity))

    def add(self, record):
        self.data[self._key(record)] = record

    def get(self, user_id, scope, fact_type, entity, session_id=None, agent_id=None):
        return self.data.get((user_id, scope, session_id, agent_id, normalize_name(fact_type), normalize_name(entity)))


def edge_valid_at(edge: GraphEdge, when: datetime) -> bool:
    if when < edge.created_at:
        return False
    if edge.invalidated_at is not None and when >= edge.invalidated_at:
        return False
    return True


class GraphStore:
    def __init__(self):
        self.edges = []

    def _same_namespace(self, edge, user_id, scope, session_id, agent_id):
        if edge.user_id != user_id or edge.scope != scope:
            return False
        if scope == "session" and edge.session_id != session_id:
            return False
        if scope == "agent" and edge.agent_id != agent_id:
            return False
        return True

    def invalidate_conflicts(self, *, user_id, scope, subject, relation, new_object, session_id=None, agent_id=None):
        invalidated = []
        ns, nr, no = normalize_name(subject), normalize_name(relation), normalize_name(new_object)
        if nr not in SINGLE_VALUED_RELATIONS:
            return invalidated
        for edge in self.edges:
            if not self._same_namespace(edge, user_id, scope, session_id, agent_id) or not edge.valid:
                continue
            if normalize_name(edge.subject) == ns and normalize_name(edge.relation) == nr and normalize_name(edge.object) != no:
                edge.valid = False
                edge.invalidated_at = now_utc()
                invalidated.append(edge)
        return invalidated

    def has_active_edge(self, *, user_id, scope, subject, relation, object_, session_id=None, agent_id=None):
        for edge in self.edges:
            if not edge.valid or not self._same_namespace(edge, user_id, scope, session_id, agent_id):
                continue
            if (normalize_name(edge.subject) == normalize_name(subject) and normalize_name(edge.relation) == normalize_name(relation)
                    and normalize_name(edge.object) == normalize_name(object_)):
                return True
        return False

    def add_edge(self, record, subject, relation, object_):
        if self.has_active_edge(user_id=record.user_id, scope=record.scope, subject=subject, relation=relation,
                                object_=object_, session_id=record.session_id, agent_id=record.agent_id):
            return None
        self.invalidate_conflicts(user_id=record.user_id, scope=record.scope, subject=subject, relation=relation,
                                  new_object=object_, session_id=record.session_id, agent_id=record.agent_id)
        edge = GraphEdge(id=str(uuid.uuid4()), user_id=record.user_id, scope=record.scope, subject=subject,
                         relation=relation, object=object_, valid=True, created_at=now_utc(),
                         session_id=record.session_id, agent_id=record.agent_id, memory_id=record.id)
        self.edges.append(edge)
        return edge

    def find_related(self, entity, user_id, scope, session_id=None, agent_id=None, include_invalid=False):
        wanted, out = normalize_name(entity), []
        for edge in self.edges:
            if not self._same_namespace(edge, user_id, scope, session_id, agent_id):
                continue
            if not include_invalid and not edge.valid:
                continue
            if normalize_name(edge.subject) == wanted or normalize_name(edge.object) == wanted:
                out.append(edge)
        return out

    def find_related_at(self, *, entity, user_id, scope, when, session_id=None, agent_id=None):
        wanted, out = normalize_name(entity), []
        for edge in self.edges:
            if not self._same_namespace(edge, user_id, scope, session_id, agent_id):
                continue
            if edge_valid_at(edge, when) and wanted in (normalize_name(edge.subject), normalize_name(edge.object)):
                out.append(edge)
        return out


def extract_demo_graph_facts(text: str):
    patterns = [(r"(.+?) lives in (.+?)[.]?$", "lives_in"), (r"(.+?) works on (.+?)[.]?$", "works_on"),
                (r"(.+?) prefers (.+?)[.]?$", "prefers"), (r"(.+?) is billed by (.+?)[.]?$", "billing_entity")]
    facts = []
    for pattern, relation in patterns:
        m = re.fullmatch(pattern, text.strip(), flags=re.IGNORECASE)
        if m:
            facts.append(GraphFact(m.group(1).strip(), relation, m.group(2).strip(), 0.85))
    return facts


def describe_edge(edge: GraphEdge) -> str:
    return f"{edge.subject} -[{edge.relation}]-> {edge.object} ({'valid' if edge.valid else 'invalid'})"


class HybridMemory:
    def __init__(self, *, min_graph_confidence=MIN_GRAPH_CONFIDENCE, max_graph_edges_per_add=MAX_GRAPH_EDGES_PER_ADD):
        self.vector, self.kv, self.graph = VectorStore(), KVStore(), GraphStore()
        self.min_graph_confidence = min_graph_confidence
        self.max_graph_edges_per_add = max_graph_edges_per_add
        self.records_by_id = {}

    def add(self, *, text, user_id, scope, fact_type, entity, value, importance=0.5, session_id=None,
            agent_id=None, metadata=None, graph_facts=None, auto_extract_graph=False) -> AddResult:
        validate_scope(scope, session_id, agent_id)
        for name, v in (("text", text), ("user_id", user_id), ("fact_type", fact_type), ("entity", entity)):
            if not v.strip():
                raise ValueError(f"{name} cannot be empty")
        record = make_record(text, user_id, scope, fact_type, entity, value, importance, session_id, agent_id, metadata)
        self.records_by_id[record.id] = record
        self.vector.add(record)
        self.kv.add(record)
        if graph_facts is None and auto_extract_graph:
            graph_facts = extract_demo_graph_facts(text)
        candidates = graph_facts or []
        accepted = filter_graph_facts(candidates, min_confidence=self.min_graph_confidence, max_edges=self.max_graph_edges_per_add)
        added = []
        for fact in accepted:
            edge = self.graph.add_edge(record, fact.subject, fact.relation, fact.object)
            if edge is not None:
                added.append(edge)
        return AddResult(record, added, len(candidates) - len(accepted))


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. One add(), three representations, one memory id")
    mem = HybridMemory()
    res = mem.add(text="Akshay prefers Python.", user_id="user_001", scope="user", fact_type="preference", entity="language",
                  value="Python", importance=0.9, graph_facts=[GraphFact("Akshay", "primary_language", "Python", 0.95)])
    rid = res.record.id
    print("vector records:", len(mem.vector.records), "| kv entries:", len(mem.kv.data), "| graph edges:", len(mem.graph.edges))
    print("same id in all three:", mem.vector.records[0].id == rid == mem.kv.get("user_001", "user", "preference", "language").id == mem.graph.edges[0].memory_id)

    section("2. Updating a single-valued fact: three temporal behaviours")
    mem.add(text="Akshay's primary language is now Rust.", user_id="user_001", scope="user", fact_type="preference",
            entity="language", value="Rust", importance=0.9,
            graph_facts=[GraphFact("Akshay", "primary_language", "Rust", 0.95)])
    print("vector (both kept):", [r.text for r in mem.vector.records])
    print("kv (current only) :", mem.kv.get("user_001", "user", "preference", "language").value)
    for e in mem.graph.edges:
        print("graph             :", describe_edge(e))

    section("3. Multi-valued relations do not conflict")
    mem2 = HybridMemory()
    for proj in ("ProjectA", "ProjectB"):
        mem2.add(text=f"Alice works on {proj}.", user_id="user_001", scope="user", fact_type="project", entity=f"Alice-{proj}",
                 value=proj, graph_facts=[GraphFact("Alice", "works_on", proj)])
    for e in mem2.graph.edges:
        print(describe_edge(e))

    section("4. Duplicate edges, confidence floor and edge cap")
    mem3 = HybridMemory(max_graph_edges_per_add=2)
    facts = [GraphFact("Alice", "works_on", "Phoenix", 0.98), GraphFact("Phoenix", "billing_entity", "BillingCorp", 0.94),
             GraphFact("Alice", "likes", "Tuesday", 0.20), GraphFact("Bob", "works_on", "Orion", 0.90)]
    r = mem3.add(text="Alice works on Phoenix, billed by BillingCorp.", user_id="u", scope="user", fact_type="project",
                 entity="phoenix", value="BillingCorp", graph_facts=facts)
    print("candidates 4, edges added:", [describe_edge(e) for e in r.graph_edges_added], "| rejected:", r.graph_facts_rejected)
    r2 = mem3.add(text="Alice works on Phoenix again.", user_id="u", scope="user", fact_type="project", entity="phoenix2",
                  value="x", graph_facts=[GraphFact("Alice", "works_on", "Phoenix", 0.98)])
    print("same edge added twice -> added:", len(r2.graph_edges_added), "| total edges:", len(mem3.graph.edges))

    section("5. Validation happens before any write")
    mem4 = HybridMemory()
    for kwargs in (dict(scope="session", session_id=None), dict(scope="galaxy"), dict(scope="user", fact_type=" ")):
        base = dict(text="t", user_id="u", scope="user", fact_type="f", entity="e", value="v")
        base.update(kwargs)
        try:
            mem4.add(**base)
        except ValueError as e:
            print(f"{str(kwargs):<42} -> ValueError: {e}")
    print("records after the failed adds:", len(mem4.vector.records), len(mem4.kv.data), len(mem4.graph.edges))

    section("6. Namespaces: sessions, agents and users never collide")
    mem5 = HybridMemory()
    for sid, env in (("A", "staging"), ("B", "production")):
        mem5.add(text=f"use {env}", user_id="alice", scope="session", session_id=sid, fact_type="runtime", entity="environment", value=env)
    mem5.add(text="source is the Mem0 paper", user_id="alice", scope="agent", agent_id="research", fact_type="task", entity="current", value="Mem0 paper")
    mem5.add(text="file is main.py", user_id="alice", scope="agent", agent_id="coding", fact_type="task", entity="current", value="main.py")
    print("session A:", mem5.kv.get("alice", "session", "runtime", "environment", session_id="A").value,
          "| session B:", mem5.kv.get("alice", "session", "runtime", "environment", session_id="B").value)
    print("agent research:", mem5.kv.get("alice", "agent", "task", "current", agent_id="research").value,
          "| agent coding:", mem5.kv.get("alice", "agent", "task", "current", agent_id="coding").value)
    ga = HybridMemory()
    ga.add(text="Alice lives in Bengaluru.", user_id="alice", scope="user", fact_type="location", entity="city", value="Bengaluru",
           graph_facts=[GraphFact("Alice", "lives_in", "Bengaluru")])
    ga.add(text="Alice lives in London.", user_id="bob", scope="user", fact_type="location", entity="city", value="London",
           graph_facts=[GraphFact("Alice", "lives_in", "London")])
    print("two users, same entity name 'Alice':", [describe_edge(e) for e in ga.graph.edges])

    section("7. The deterministic extractor and its limits")
    for s in ("Alice works on Phoenix.", "Phoenix is billed by BillingCorp.", "Akshay lives in Mysuru.",
              "Alice is currently contributing to Project Phoenix.", "Alice works on Phoenix and Orion."):
        print(f"{s!r:<56} -> {[(f.subject, f.relation, f.object) for f in extract_demo_graph_facts(s)]}")

    section("8. Temporal queries with explicit timestamps")
    g = GraphStore()
    rec = make_record("Alice lives in Bengaluru.", "u", "user", "location", "city", "Bengaluru")
    t0 = datetime(2026, 3, 1)
    t1 = datetime(2026, 9, 1)
    e1 = g.add_edge(rec, "Alice", "lives_in", "Bengaluru")
    e1.created_at = t0
    e2 = g.add_edge(rec, "Alice", "lives_in", "Mysuru")
    e1.invalidated_at, e2.created_at = t1, t1
    for label, when in (("2026-02-01", datetime(2026, 2, 1)), ("2026-06-01", datetime(2026, 6, 1)), ("2026-10-01", datetime(2026, 10, 1))):
        print(f"valid on {label}:", [describe_edge(e).split(' (')[0] for e in g.find_related_at(entity="Alice", user_id="u", scope="user", when=when)] or "nothing")
    print("current edges (valid flag):", [e.object for e in g.find_related("Alice", "u", "user")])
    print("all edges incl. history   :", [e.object for e in g.find_related("Alice", "u", "user", include_invalid=True)])

    section("9. Genuinely checking: invalidation relies on a hand-written list of single-valued relations")
    mem6 = HybridMemory()
    for city in ("Bengaluru", "Mysuru"):
        mem6.add(text=f"Alice resides in {city}.", user_id="u", scope="user", fact_type="location", entity="city", value=city,
                 graph_facts=[GraphFact("Alice", "resides_in", city)])
    print("relation 'resides_in' is not in the list:", [describe_edge(e) for e in mem6.graph.edges])
    print("the graph now holds two valid homes for Alice, while kv says:", mem6.kv.get("u", "user", "location", "city").value)


if __name__ == "__main__":
    main()
