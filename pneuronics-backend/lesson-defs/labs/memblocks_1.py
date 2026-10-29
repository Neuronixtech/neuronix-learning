"""Teaching implementation (our own): Memory Blocks Part 1 - Block and BlockStore (the core-memory layer)."""
import uuid
from dataclasses import dataclass
from typing import Dict, List


@dataclass
class Block:
    id: str
    label: str
    value: str
    limit: int
    description: str
    version: int = 1

    @property
    def size(self) -> int:
        return len(self.value)

    @property
    def remaining(self) -> int:
        return self.limit - self.size

    @property
    def utilization(self) -> float:
        if self.limit == 0:
            return 1.0
        return self.size / self.limit


class BlockStore:
    def __init__(self):
        self.blocks: Dict[str, Block] = {}

    def create(self, label: str, value: str, limit: int, description: str) -> Block:
        if label in self.blocks:
            raise ValueError(f"Block already exists: {label}")
        if len(value) > limit:
            raise ValueError(f"Initial value exceeds limit for {label}")
        block = Block(id=str(uuid.uuid4()), label=label, value=value, limit=limit, description=description)
        self.blocks[label] = block
        return block

    def read(self, label: str) -> Block:
        if label not in self.blocks:
            raise KeyError(f"Unknown block: {label}")
        return self.blocks[label]

    def append(self, label: str, text: str) -> None:
        block = self.read(label)
        candidate = block.value + "\n" + text
        if len(candidate) > block.limit:
            raise ValueError(f"Append would exceed limit for {label}")
        block.value = candidate
        block.version += 1

    def replace(self, label: str, old: str, new: str) -> None:
        block = self.read(label)
        if old not in block.value:
            raise ValueError(f"Text not found in block {label}")
        candidate = block.value.replace(old, new, 1)
        if len(candidate) > block.limit:
            raise ValueError(f"Replacement exceeds limit for {label}")
        block.value = candidate
        block.version += 1

    def summarize(self, label: str, summary: str) -> None:
        block = self.read(label)
        if len(summary) > block.limit:
            raise ValueError(f"Summary exceeds limit for {label}")
        block.value = summary
        block.version += 1

    def near_limit(self, label: str, threshold: float = 0.80) -> bool:
        return self.read(label).utilization >= threshold

    def list_blocks(self) -> List[Block]:
        return list(self.blocks.values())

    def render(self) -> str:
        sections = []
        for block in self.list_blocks():
            sections.append(f"[{block.label.upper()}]\n{block.value}")
        return "\n\n".join(sections)


def make_store() -> BlockStore:
    store = BlockStore()
    store.create("human", "Role: ML engineer.\nPrefers Python examples.", 240, "Stable facts about the user, their preferences, and goals.")
    store.create("persona", "You are a precise technical instructor.", 220, "The agent's identity, tone, and persistent behavioral constraints.")
    store.create("project", "Project: Atlas.\nLanguage: Python.\nDatabase: SQLite.", 320, "Stable technical facts about the active project.")
    store.create("task", "Implement persistent agent memory.", 260, "Current objective and active work state.")
    return store


def section(t):
    print(f"\n--- {t} ---")


def attempt(label, fn):
    try:
        fn()
        print(f"{label:<44} -> ok")
    except (ValueError, KeyError) as e:
        print(f"{label:<44} -> {type(e).__name__}: {e.args[0]}")


def main():
    section("1. The core-memory snapshot (what the model would receive)")
    store = make_store()
    print(store.render())
    for b in store.list_blocks():
        print(f"{b.label:<8} size={b.size:>3}/{b.limit} remaining={b.remaining:>3} utilization={b.utilization:.2f} version={b.version}")

    section("2. Append versus replace on a changed fact")
    s1, s2 = make_store(), make_store()
    s1.append("project", "Database: PostgreSQL.")
    s2.replace("project", "Database: SQLite.", "Database: PostgreSQL.")
    print("append  ->", s1.read("project").value.replace("\n", " | "))
    print("replace ->", s2.read("project").value.replace("\n", " | "))
    print("append leaves", s1.read("project").value.count("Database:"), "Database lines (a contradiction); replace leaves", s2.read("project").value.count("Database:"))

    section("3. The invariant len(value) <= limit, enforced")
    store = make_store()
    attempt("create duplicate label 'human'", lambda: store.create("human", "x", 10, "dup"))
    attempt("create with value longer than limit", lambda: store.create("tiny", "this text is far longer than ten", 10, "tiny"))
    attempt("read unknown block 'missing'", lambda: store.read("missing"))
    attempt("replace text that is not there", lambda: store.replace("project", "Database: MySQL.", "x"))
    attempt("append 300 chars to human (limit 240)", lambda: store.append("human", "z" * 300))
    attempt("replace growing project past its limit", lambda: store.replace("project", "Language: Python.", "Language: " + "P" * 400))
    print("human version after the failed writes:", store.read("human").version, "(unchanged: a failed write leaves state and version alone)")

    section("4. Memory pressure: watching a block fill")
    store = make_store()
    notes = ["Learning agent systems.", "Prefers runnable code.", "Prefers concise explanations.", "Wants concept breakdowns.", "Likes architecture diagrams."]
    for note in notes:
        try:
            store.append("human", note)
        except ValueError as e:
            print(f"append {note!r:<34} -> REFUSED ({e.args[0]})")
            continue
        b = store.read("human")
        print(f"append {note!r:<34} size={b.size:>3}/{b.limit} utilization={b.utilization:.2f} near_limit(0.80)={store.near_limit('human')} version={b.version}")

    section("5. Summarizing frees capacity, and the store does not write the summary itself")
    b = store.read("human")
    before = b.utilization
    store.summarize("human", "Role: ML engineer.\nPrefers: Python, concise, runnable code, diagrams.\nGoal: learn agent systems.")
    print(f"utilization {before:.2f} -> {b.utilization:.2f}, version -> {b.version}")
    print("the caller supplied the summary text; the store only validated its size and applied it")

    section("6. Edge case: the newline separator costs one character")
    store = BlockStore()
    blk = store.create("edge", "a" * 10, 20, "edge")
    print("remaining:", blk.remaining)
    attempt("append exactly 'remaining' (10) characters", lambda: store.append("edge", "b" * 10))
    attempt("append remaining - 1 (9) characters", lambda: store.append("edge", "b" * 9))

    section("7. Genuinely checking what 'limit' measures")
    en = "Prefers concise explanations with Python."
    kn = "ಪೈಥಾನ್ ಉದಾಹರಣೆಗಳೊಂದಿಗೆ ಸಂಕ್ಷಿಪ್ತ ವಿವರಣೆಗಳನ್ನು ಇಷ್ಟಪಡುತ್ತಾರೆ."
    for label, text in (("English", en), ("Kannada", kn)):
        print(f"{label:<8} characters={len(text):>3} utf-8 bytes={len(text.encode('utf-8')):>3} words={len(text.split())}")
    print("the limit counts Python characters, so it is a proxy: the same character budget costs very different token amounts per script")

    section("8. Why core memory is expensive (arithmetic)")
    block_tokens, calls = 2000, 1000
    print(f"a {block_tokens}-token block sent on {calls} calls = {block_tokens * calls:,} tokens processed")
    print(f"the same fact stored once in an archive and fetched on 20 of those calls: {20 * 50:,} tokens (50-token record)")


if __name__ == "__main__":
    main()
