"""Teaching implementation (our own): Memory Blocks Part 2 - RecallStore, ArchivalStore, PrimaryAgent, SleepTimeAgent."""
import uuid
from dataclasses import dataclass
from datetime import datetime
from typing import List

from memblocks_1 import BlockStore, make_store


def stamp() -> str:
    return datetime.now().isoformat(timespec="seconds")


@dataclass
class RecallEntry:
    id: str
    role: str
    content: str
    timestamp: str


class RecallStore:
    def __init__(self):
        self.entries: List[RecallEntry] = []

    def add(self, role: str, content: str) -> RecallEntry:
        entry = RecallEntry(id=str(uuid.uuid4()), role=role, content=content, timestamp=stamp())
        self.entries.append(entry)
        return entry

    def recent(self, count: int = 6) -> List[RecallEntry]:
        return self.entries[-count:]

    def search(self, query: str) -> List[RecallEntry]:
        query = query.lower()
        return [e for e in self.entries if query in e.content.lower()]


@dataclass
class ArchivalRecord:
    id: str
    text: str
    active: bool
    created_at: str


class ArchivalStore:
    def __init__(self):
        self.records: List[ArchivalRecord] = []

    def add(self, text: str) -> ArchivalRecord:
        record = ArchivalRecord(id=str(uuid.uuid4()), text=text, active=True, created_at=stamp())
        self.records.append(record)
        return record

    def search(self, query: str) -> List[ArchivalRecord]:
        query = query.lower()
        return [r for r in self.records if r.active and query in r.text.lower()]

    def invalidate(self, record_id: str) -> None:
        for record in self.records:
            if record.id == record_id:
                record.active = False
                return
        raise KeyError(f"Unknown archival record: {record_id}")

    def active_records(self) -> List[ArchivalRecord]:
        return [r for r in self.records if r.active]

    def contains_active(self, text: str) -> bool:
        target = text.lower()
        return any(r.active and r.text.lower() == target for r in self.records)


class PrimaryAgent:
    """The fast path: log the turn, make a lightweight raw write, answer. No consolidation here."""

    def __init__(self, blocks: BlockStore, recall: RecallStore, archival: ArchivalStore):
        self.blocks, self.recall, self.archival = blocks, recall, archival

    def serve(self, user_message: str) -> str:
        self.recall.add("user", user_message)
        response = self._respond(user_message)
        self.recall.add("assistant", response)
        return response

    def _respond(self, user_message: str) -> str:
        message = user_message.lower()
        if "what database" in message or "which database" in message:
            project = self.blocks.read("project")
            if "Database: PostgreSQL." in project.value:
                return "Atlas currently uses PostgreSQL."
            if "Database: SQLite." in project.value:
                return "Atlas currently uses SQLite."
            return "I do not have a current database record for Atlas."
        if "postgresql" in message:
            self.blocks.append("project", "Recent update: PostgreSQL migration reported.")
            return "Understood. I recorded the PostgreSQL migration."
        if "architecture diagrams" in message:
            self.blocks.append("human", "Prefers architecture diagrams.")
            return "Understood. I recorded that preference."
        return "Understood. I recorded the turn."


CURRENT_FACT = "Atlas database is PostgreSQL."
RAW_NOTE = "\nRecent update: PostgreSQL migration reported."


class SleepTimeAgent:
    """The maintenance path: read recall, derive learned context, reconcile core and archival, compact."""

    def __init__(self, blocks: BlockStore, recall: RecallStore, archival: ArchivalStore):
        self.blocks, self.recall, self.archival = blocks, recall, archival

    def _learn_from_recall(self) -> List[str]:
        learned = []
        for entry in self.recall.recent(10):
            text = entry.content.lower()
            if entry.role == "user" and "migrated" in text and "postgresql" in text:
                if CURRENT_FACT not in learned:
                    learned.append(CURRENT_FACT)
        return learned

    def _update_project(self, learned: List[str], actions: List[str]) -> None:
        if CURRENT_FACT not in learned:
            return
        project = self.blocks.read("project")
        if "Database: SQLite." in project.value:
            self.blocks.replace("project", "Database: SQLite.", "Database: PostgreSQL.")
            actions.append("sleep: replaced stale SQLite project fact with PostgreSQL")
        project = self.blocks.read("project")
        if RAW_NOTE in project.value:
            project.value = project.value.replace(RAW_NOTE, "")
            project.version += 1
            actions.append("sleep: removed redundant migration note")

    def _clean_archival(self, learned: List[str], actions: List[str]) -> None:
        if CURRENT_FACT not in learned:
            return
        for record in list(self.archival.active_records()):
            text = record.text.lower()
            if "atlas" in text and "sqlite" in text:
                self.archival.invalidate(record.id)
                actions.append("sleep: invalidated stale SQLite archival fact")
        if not self.archival.contains_active(CURRENT_FACT):
            self.archival.add(CURRENT_FACT)
            actions.append("sleep: archived current PostgreSQL fact")

    def _summarize_human(self, actions: List[str]) -> None:
        if not self.blocks.near_limit("human", threshold=0.70):
            return
        summary = ("Role: ML engineer.\n"
                   "Preferences: Python, concise explanations, architecture diagrams, runnable examples.\n"
                   "Goal: learn agent systems.")
        self.blocks.summarize("human", summary)
        actions.append("sleep: summarized near-limit human block")

    def run(self) -> List[str]:
        actions = ["sleep: started consolidation"]
        learned = self._learn_from_recall()
        for fact in learned:
            actions.append(f"sleep: learned {fact}")
        self._update_project(learned, actions)
        self._clean_archival(learned, actions)
        self._summarize_human(actions)
        actions.append("sleep: consolidation complete")
        return actions


HUMAN_START = ("Role: ML engineer.\nPrefers Python examples.\nLearning agent systems.\n"
               "Prefers runnable code.\nPrefers concise explanations.\nWants concept breakdowns.")


def make_system():
    blocks = BlockStore()
    blocks.create("human", HUMAN_START, 220, "Stable user facts, preferences, and long-term goals.")
    blocks.create("persona", "You are a precise technical instructor.", 220, "Agent identity, tone, and persistent behavior.")
    blocks.create("project", "Project: Atlas.\nLanguage: Python.\nDatabase: SQLite.", 320, "Current technical facts about the active project.")
    blocks.create("task", "Implement persistent agent memory.", 260, "Current objective and active work state.")
    recall, archival = RecallStore(), ArchivalStore()
    archival.add("Atlas database is SQLite.")
    return blocks, recall, archival, PrimaryAgent(blocks, recall, archival), SleepTimeAgent(blocks, recall, archival)


def show_project(blocks):
    print("   project v%d:" % blocks.read("project").version, blocks.read("project").value.replace("\n", " | "))


def show_archival(archival):
    for r in archival.records:
        print("   ", "ACTIVE  " if r.active else "INACTIVE", r.text)


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Recall: automatic, ordered, searchable by substring")
    recall = RecallStore()
    recall.add("user", "We use SQLite.")
    recall.add("assistant", "Noted.")
    recall.add("user", "We migrated Atlas to PostgreSQL.")
    print("recent(2):", [(e.role, e.content) for e in recall.recent(2)])
    print("search('postgresql'):", [e.content for e in recall.search("postgresql")])
    print("search('PostgreSQL') with different case works because the query and content are lowercased")
    print("search('Postgres'):", [e.content for e in recall.search("Postgres")], "(a prefix is still a substring, so it matches)")
    print("search('database engine'):", [e.content for e in recall.search("database engine")], "(a paraphrase shares no substring, so nothing is found)")

    section("2. Archival: invalidate instead of delete")
    archival = ArchivalStore()
    old = archival.add("Atlas database is SQLite.")
    print("before: search('sqlite') ->", [r.text for r in archival.search("sqlite")])
    archival.invalidate(old.id)
    print("after : search('sqlite') ->", [r.text for r in archival.search("sqlite")], "| records stored:", len(archival.records))
    try:
        archival.invalidate("no-such-id")
    except KeyError as e:
        print("invalidate unknown id -> KeyError:", e.args[0])

    section("3. Turns 1 and 2: the primary agent leaves a raw, inconsistent state")
    blocks, recall, archival, primary, sleeper = make_system()
    print("Assistant:", primary.serve("I prefer architecture diagrams when discussing agent systems."))
    print("Assistant:", primary.serve("We migrated Atlas from SQLite to PostgreSQL."))
    h = blocks.read("human")
    print(f"   human v{h.version} size={h.size}/{h.limit} utilization={h.utilization:.2f}")
    show_project(blocks)
    show_archival(archival)

    section("4. The sleep pass")
    actions = sleeper.run()
    for a in actions:
        print("  ", a)
    show_project(blocks)
    show_archival(archival)
    h = blocks.read("human")
    print(f"   human v{h.version} size={h.size}/{h.limit} utilization={h.utilization:.2f}")
    print("   recall entries kept:", len(recall.entries))

    section("5. Idempotence: running the pass a second time")
    before = ([r.text for r in archival.records], blocks.read("project").value, blocks.read("human").value)
    again = sleeper.run()
    after = ([r.text for r in archival.records], blocks.read("project").value, blocks.read("human").value)
    for a in again:
        print("  ", a)
    print("memory identical after the second pass:", before == after)

    section("6. Genuinely checking what the summary kept")
    original = [l for l in (HUMAN_START + "\nPrefers architecture diagrams.").split("\n") if l]
    summary_text = blocks.read("human").value.lower()
    for line in original:
        key = line.lower().replace("prefers ", "").replace("wants ", "").replace(".", "")
        kept = any(word in summary_text for word in key.split()[:2])
        print(f"   {'kept   ' if kept else 'LOST   '} {line}")
    print("the summary text is hard-coded in _summarize_human, so it cannot know which facts the block really held")

    section("7. Genuinely checking the keyword extractor")
    for sentence in ("We migrated Atlas from SQLite to PostgreSQL.",
                     "We have NOT migrated Atlas to PostgreSQL.",
                     "Should we have migrated Atlas to PostgreSQL?"):
        b, r, a, p, s = make_system()
        r.add("user", sentence)
        learned = s._learn_from_recall()
        print(f"   {sentence!r:<52} -> learned: {learned}")

    section("8. Genuinely checking intent routing in the primary agent")
    for message in ("Which database does Atlas use?", "We migrated Atlas to PostgreSQL."):
        b, r, a, p, s = make_system()
        reply = p.serve(message)
        print(f"   {message!r:<40} -> {reply!r}; project now: {b.read('project').value.splitlines()[-1]!r}")
    b, r, a, p, s = make_system()
    reply = p.serve("Is Atlas still on SQLite, or PostgreSQL?")
    print(f"   {'Is Atlas still on SQLite, or PostgreSQL?'!r:<40} -> {reply!r}; project now: {b.read('project').value.splitlines()[-1]!r}")
    print("a question that merely mentions PostgreSQL was logged as a migration, because routing is by keyword")


if __name__ == "__main__":
    main()
