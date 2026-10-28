"""Teaching implementation (our own): Agent Memory Part 2 - ArchivalStore, MemoryTools and the interrupt pattern."""
import uuid
from dataclasses import dataclass
from typing import List, Optional

from memgpt_1 import MainContext, tokenize


@dataclass
class MemoryRecord:
    id: str
    text: str
    tags: List[str]
    session: str
    turn: int


class ArchivalStore:
    def __init__(self):
        self.records: List[MemoryRecord] = []

    def insert(self, text: str, tags: Optional[List[str]] = None, session: str = "default", turn: int = 0) -> MemoryRecord:
        record = MemoryRecord(id=str(uuid.uuid4())[:8], text=text, tags=tags or [], session=session, turn=turn)
        self.records.append(record)
        return record

    def search(self, query: str, top_k: int = 3) -> List[MemoryRecord]:
        query_tokens = set(tokenize(query))
        scored = []
        for record in self.records:
            record_tokens = set(tokenize(record.text))
            overlap = len(query_tokens & record_tokens)
            tag_bonus = sum(1 for tag in record.tags if tag.lower() in query.lower())
            score = overlap + tag_bonus
            if score > 0:
                scored.append((score, record))
        scored.sort(key=lambda item: item[0], reverse=True)
        return [record for _, record in scored[:top_k]]

    def explain(self, query: str):
        qt = set(tokenize(query))
        rows = []
        for r in self.records:
            overlap = sorted(qt & set(tokenize(r.text)))
            bonus = [t for t in r.tags if t.lower() in query.lower()]
            rows.append((len(overlap) + len(bonus), overlap, bonus, r.text))
        return sorted(rows, key=lambda x: -x[0])


class MemoryTools:
    def __init__(self, main: MainContext, archival: ArchivalStore):
        self.main = main
        self.archival = archival

    def core_memory_append(self, section: str, text: str) -> str:
        current = self.main.core.get(section, "")
        if current:
            current += "\n"
        self.main.core[section] = current + text
        self.main.compact()
        return f"Appended to core memory section '{section}'."

    def core_memory_replace(self, section: str, old: str, new: str) -> str:
        current = self.main.core.get(section)
        if current is None:
            return f"Core section '{section}' does not exist."
        if old not in current:
            return f"Text to replace was not found in '{section}'."
        self.main.core[section] = current.replace(old, new, 1)
        self.main.compact()
        return f"Updated core memory section '{section}'."

    def archival_memory_insert(self, text: str, tags: Optional[List[str]] = None, session: str = "default", turn: int = 0) -> str:
        record = self.archival.insert(text=text, tags=tags, session=session, turn=turn)
        return f"Stored archival memory {record.id}."

    def archival_memory_search(self, query: str, top_k: int = 3) -> str:
        results = self.archival.search(query, top_k)
        if not results:
            return "No archival memories found."
        return "\n".join(f"[{r.id}] {r.text} (source={r.session}:{r.turn})" for r in results)

    def conversation_search(self, query: str) -> str:
        qt = set(tokenize(query))
        matches = []
        for index, message in enumerate(self.main.messages):
            if qt & set(tokenize(message["content"])):
                matches.append(f"turn={index} role={message['role']} text={message['content']}")
        if not matches:
            return "No matching conversation messages found."
        return "\n".join(matches)


def section(t):
    print(f"\n--- {t} ---")


def main():
    store = ArchivalStore()
    main_ctx = MainContext(max_tokens=100)
    tools = MemoryTools(main_ctx, store)

    section("1. Page out: three facts into the archive (ids are random per run)")
    facts = [("Alice owns the evaluation pipeline.", ["people", "evaluation"]),
             ("The Orion prototype deadline is October 20.", ["deadline", "orion"]),
             ("The baseline benchmark scored 82 percent.", ["benchmark", "baseline"])]
    for turn, (text, tags) in enumerate(facts, start=1):
        print(tools.archival_memory_insert(text=text, tags=tags, session="session-001", turn=turn))

    section("2. Search scoring, shown term by term for 'evaluation pipeline owner'")
    for score, overlap, bonus, text in store.explain("evaluation pipeline owner"):
        print(f"score={score} overlap={overlap} tag_bonus={bonus} :: {text}")

    section("3. Page in: the search tool returns text with provenance")
    print(tools.archival_memory_search("evaluation pipeline owner", top_k=2))

    section("4. Where lexical search fails")
    for q in ("Who handles model testing?", "who is responsible for QA", "ಮೌಲ್ಯಮಾಪನ ಪೈಪ್‌ಲೈನ್ ಯಾರದು?", "the", "of the"):
        res = tools.archival_memory_search(q, top_k=3)
        print(f"query {q!r:<36} -> {res if res.startswith('No') else res.splitlines()}")

    section("5. Core memory: append and replace")
    print(tools.core_memory_append("project", "The active project is Orion."))
    print(tools.core_memory_append("project", "The prototype deadline is October 20."))
    print(main_ctx.core_text())
    print(tools.core_memory_replace("project", "October 20", "October 28"))
    print(main_ctx.core_text())
    print(tools.core_memory_replace("project", "Bangalore", "Mysore"))
    print(tools.core_memory_replace("missing", "a", "b"))

    section("6. conversation_search sees only what is still in the window")
    main_ctx.add_message("user", "We need wheel slip logging.")
    main_ctx.add_message("assistant", "I'll include wheel slip logging.")
    print(tools.conversation_search("wheel slip"))
    print("a term that was never said:", tools.conversation_search("zebra crossing"))

    section("7. The interrupt: question, miss, search, splice, answer")
    q = "Who owns the evaluation pipeline?"
    main_ctx.add_message("user", q)
    print("USER:", q)
    print("conversation_search for the answer:", tools.conversation_search("owns evaluation pipeline").replace("\n", " | ")[:100])
    print("   (it finds only the question itself, which contains the same words; it is not an answer)")
    print("[INTERRUPT] archival_memory_search")
    result = tools.archival_memory_search("evaluation pipeline owner", top_k=2)
    print("[TOOL RESULT]", result)
    main_ctx.add_message("tool", result)
    main_ctx.add_message("assistant", "Alice owns the evaluation pipeline.")
    print("\nmain context after the page-in:")
    print(main_ctx.render())

    section("8. Retrieval without context integration changes nothing")
    probe = MainContext(max_tokens=100)
    r2 = MemoryTools(probe, store).archival_memory_search("evaluation owner")
    print("runtime holds the answer:", "Alice" in r2, "| the model-visible context contains it:", "Alice" in probe.render())


if __name__ == "__main__":
    main()
