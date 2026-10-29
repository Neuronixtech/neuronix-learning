"""Teaching implementation (our own): Hybrid Memory Part 3 - search(), candidate merge, recency, fusion, ranking."""
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from typing import Optional

import hybrid_2
from hybrid_1 import MemoryRecord, now_utc
from hybrid_2 import GraphFact, describe_edge, normalize_name, validate_scope


@dataclass
class Candidate:
    record: MemoryRecord
    sources: set
    relevance: float
    importance: float
    recency: float
    score: float = 0.0


def merge_candidate(candidates, record, *, source, relevance):
    relevance = max(0.0, min(1.0, relevance))
    existing = candidates.get(record.id)
    if existing is None:
        candidates[record.id] = Candidate(record=record, sources={source}, relevance=relevance,
                                          importance=record.importance, recency=0.0)
        return
    existing.sources.add(source)
    existing.relevance = max(existing.relevance, relevance)


def recency_score(record, *, now=None, half_life_hours=168.0):
    if now is None:
        now = now_utc()
    age_hours = max(0.0, (now - record.last_accessed_at).total_seconds()) / 3600.0
    if half_life_hours <= 0:
        return 1.0
    return 2 ** (-age_hours / half_life_hours)


@dataclass
class FusionWeights:
    relevance: float = 0.50
    importance: float = 0.30
    recency: float = 0.20


def normalized_weights(w):
    total = w.relevance + w.importance + w.recency
    if total <= 0:
        raise ValueError("Fusion weights must sum to a positive value")
    return FusionWeights(w.relevance / total, w.importance / total, w.recency / total)


def fusion_score(*, relevance, importance, recency, weights):
    w = normalized_weights(weights)
    return w.relevance * relevance + w.importance * importance + w.recency * recency


class HybridMemory(hybrid_2.HybridMemory):
    def search(self, *, query, user_id, scope, session_id=None, agent_id=None, fact_type=None, entity=None,
               graph_entity=None, top_k=5, candidate_k=10, weights=None, half_life_hours=168.0, touch=True):
        validate_scope(scope, session_id, agent_id)
        if not query.strip():
            raise ValueError("query cannot be empty")
        weights = weights or FusionWeights()
        candidates = {}
        for record, rel in self.vector.search(query, user_id, scope, session_id, agent_id, candidate_k):
            merge_candidate(candidates, record, source="vector", relevance=rel)
        if fact_type is not None and entity is not None:
            record = self.kv.get(user_id, scope, fact_type, entity, session_id, agent_id)
            if record is not None:
                merge_candidate(candidates, record, source="kv", relevance=1.0)
        if graph_entity is not None:
            for edge in self.graph.find_related(graph_entity, user_id, scope, session_id, agent_id):
                record = self.records_by_id.get(edge.memory_id) if edge.memory_id else None
                if record is not None:
                    merge_candidate(candidates, record, source="graph", relevance=0.90)
        stamp = now_utc()
        for c in candidates.values():
            c.recency = recency_score(c.record, now=stamp, half_life_hours=half_life_hours)
            c.importance = c.record.importance
            c.score = fusion_score(relevance=c.relevance, importance=c.importance, recency=c.recency, weights=weights)
        ranked = sorted(candidates.values(), key=lambda c: c.score, reverse=True)
        results = ranked[:top_k]
        if touch:
            for c in results:
                c.record.last_accessed_at = stamp
        return results


def print_results(title, results):
    print(f"\n{title}")
    if not results:
        print("  No results.")
    for rank, c in enumerate(results, 1):
        print(f"  {rank}. score={c.score:.3f} rel={c.relevance:.3f} imp={c.importance:.3f} rec={c.recency:.3f} sources={','.join(sorted(c.sources))}")
        print(f"     {c.record.text}")


def section(t):
    print(f"\n--- {t} ---")


def build_dataset():
    m = HybridMemory()
    m.add(text="Akshay prefers Python for agent engineering.", user_id="user_001", scope="user", fact_type="preference",
          entity="language", value="Python", importance=0.95, graph_facts=[GraphFact("Akshay", "primary_language", "Python", 0.98)])
    m.add(text="We discussed embedding drift and how retrieval quality can degrade as memory grows.", user_id="user_001",
          scope="user", fact_type="topic", entity="embedding_drift", value="retrieval degradation", importance=0.75)
    for proj in ("Phoenix", "Orion"):
        m.add(text=f"{proj} is billed by BillingCorp.", user_id="user_001", scope="user", fact_type="billing", entity=proj,
              value="BillingCorp", importance=0.90, graph_facts=[GraphFact(proj, "billing_entity", "BillingCorp", 0.97)])
    m.add(text="Bob prefers Rust.", user_id="user_002", scope="user", fact_type="preference", entity="language", value="Rust",
          importance=0.90, graph_facts=[GraphFact("Bob", "primary_language", "Rust")])
    return m


def main():
    section("1. Recency: exponential half-life, with explicit timestamps")
    base = MemoryRecord("x", "t", "u", "user", "f", "e", "v", 0.5, now_utc(), now_utc())
    for days in (0, 7, 14, 21, 70):
        later = base.last_accessed_at + timedelta(days=days)
        print(f"age {days:>3} days, half-life 7 days -> recency {recency_score(base, now=later, half_life_hours=168):.4f}")

    section("2. Fusion weights are normalized")
    w = normalized_weights(FusionWeights(5, 3, 2))
    print(f"weights 5:3:2 -> {w.relevance:.2f}, {w.importance:.2f}, {w.recency:.2f}")
    print(f"R=0.80 I=0.90 T=0.70 with 0.5/0.3/0.2 -> {fusion_score(relevance=0.80, importance=0.90, recency=0.70, weights=FusionWeights()):.3f}")

    mem = build_dataset()

    section("3. Query 1: semantic (vector only)")
    print_results("embedding drift and retrieval", mem.search(query="What did we discuss about embedding drift and retrieval?", user_id="user_001", scope="user"))

    section("4. Query 2: exact fact, all three stores agree on one memory")
    r = mem.search(query="What programming language does Akshay prefer?", user_id="user_001", scope="user",
                   fact_type="preference", entity="language", graph_entity="Akshay")
    print_results("language preference", r)
    print("\n  total results:", len(r), "| the same memory arrived from", len(r[0].sources), "stores and was returned once")

    section("5. Query 3: relationship (graph), BillingCorp")
    print_results("which projects connect to BillingCorp", mem.search(query="Which projects are connected to BillingCorp?", user_id="user_001", scope="user", graph_entity="BillingCorp"))

    section("6. Query 4: ownership, user_001 asks about Bob")
    print_results("Bob prefers Rust, asked by user_001", mem.search(query="Bob prefers Rust", user_id="user_001", scope="user"))
    print("  texts from user_002 in the results:", any(c.record.user_id == "user_002" for c in mem.search(query="Bob prefers Rust", user_id="user_001", scope="user")))

    section("7. Genuinely checking: does an invalidated fact still surface?")
    m2 = HybridMemory()
    m2.add(text="Akshay lives in Bengaluru.", user_id="user_001", scope="user", fact_type="location", entity="city", value="Bengaluru",
           importance=0.85, graph_facts=[GraphFact("Akshay", "lives_in", "Bengaluru")])
    m2.add(text="Akshay lives in Mysuru.", user_id="user_001", scope="user", fact_type="location", entity="city", value="Mysuru",
           importance=0.90, graph_facts=[GraphFact("Akshay", "lives_in", "Mysuru")])
    for e in m2.graph.edges:
        print(" ", describe_edge(e))
    print("  kv current city:", m2.kv.get("user_001", "user", "location", "city").value)
    print_results("with kv and graph hints", m2.search(query="Where does Akshay live?", user_id="user_001", scope="user", fact_type="location", entity="city", graph_entity="Akshay", touch=False))
    print_results("vector only, no hints", m2.search(query="Where does Akshay live?", user_id="user_001", scope="user", touch=False))

    section("8. Weights flip the ranking of the same two memories")
    a = MemoryRecord("A", "very relevant, low importance, old", "u", "user", "f", "e", "v", 0.30, now_utc(), now_utc())
    b = MemoryRecord("B", "slightly less relevant, important, recent", "u", "user", "f", "e", "v", 0.95, now_utc(), now_utc())
    cases = {"relevance-heavy 0.8/0.1/0.1": FusionWeights(0.8, 0.1, 0.1), "importance-heavy 0.2/0.7/0.1": FusionWeights(0.2, 0.7, 0.1)}
    for label, weights in cases.items():
        sa = fusion_score(relevance=0.95, importance=0.30, recency=0.40, weights=weights)
        sb = fusion_score(relevance=0.75, importance=0.95, recency=0.90, weights=weights)
        print(f"{label:<30} A={sa:.3f} B={sb:.3f} -> winner {'A' if sa > sb else 'B'}")

    section("9. Genuinely checking: retrieval refreshes recency")
    m3 = HybridMemory()
    res = m3.add(text="Atlas deployment target is Kubernetes.", user_id="u", scope="user", fact_type="deploy", entity="target", value="Kubernetes", importance=0.5)
    res.record.last_accessed_at = now_utc() - timedelta(days=60)
    first = m3.search(query="Atlas deployment target", user_id="u", scope="user")[0]
    print(f"first search : recency {first.recency:.4f} (60 days old, half-life 7 days)")
    second = m3.search(query="Atlas deployment target", user_id="u", scope="user")[0]
    print(f"second search: recency {second.recency:.4f} (the first search refreshed last_accessed_at)")

    section("10. Genuinely checking the vector path on paraphrase and Kannada")
    for q in ("what coding tongue does he like", "ಅಕ್ಷಯ್ ಯಾವ ಭಾಷೆ ಬಳಸುತ್ತಾರೆ"):
        got = mem.search(query=q, user_id="user_001", scope="user", touch=False)
        print(f"{q!r:<40} -> {[c.record.text[:30] for c in got] or 'no results'}")
    got = mem.search(query="ಅಕ್ಷಯ್ ಯಾವ ಭಾಷೆ ಬಳಸುತ್ತಾರೆ", user_id="user_001", scope="user", fact_type="preference", entity="language", touch=False)
    print("same Kannada query plus a KV hint -> ", [c.record.text[:30] for c in got], "(the exact path still works)")


if __name__ == "__main__":
    main()
