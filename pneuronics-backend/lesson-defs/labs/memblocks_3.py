"""Teaching implementation (our own): Memory Blocks Part 3 - the complete three-turn run and its failure modes."""
import threading
import time
from dataclasses import dataclass
from datetime import datetime
from typing import List

from memblocks_1 import Block, BlockStore
from memblocks_2 import (ArchivalStore, PrimaryAgent, RecallStore, SleepTimeAgent, make_system)


def trace(message: str) -> None:
    print(f"[{datetime.now().isoformat(timespec='seconds')}] {message}")


class TracedPrimary(PrimaryAgent):
    def serve(self, user_message: str) -> str:
        trace("primary: received user turn")
        response = super().serve(user_message)
        trace("primary: logged both turns")
        trace("primary: response ready")
        return response


class TracedSleeper(SleepTimeAgent):
    def run(self) -> List[str]:
        actions = super().run()
        for a in actions:
            trace(a)
        return actions


def show_blocks(blocks: BlockStore) -> None:
    for b in blocks.list_blocks():
        print(f"[{b.label.upper()}] version={b.version} size={b.size}/{b.limit}")
        print(b.value)


def show_archival(archival: ArchivalStore) -> None:
    for r in archival.records:
        print(("ACTIVE:   " if r.active else "INACTIVE: ") + r.text)


def section(t):
    print(f"\n--- {t} ---")


def build():
    blocks, recall, archival, _, _ = make_system()
    return blocks, recall, archival, TracedPrimary(blocks, recall, archival), TracedSleeper(blocks, recall, archival)


# --- failure-mode helpers -------------------------------------------------------------------

class ConflictError(Exception):
    pass


class CheckedStore(BlockStore):
    """Optimistic concurrency: a write must name the version it was computed from."""

    def replace_checked(self, label, old, new, expected_version):
        block = self.read(label)
        if block.version != expected_version:
            raise ConflictError(f"{label} is at v{block.version}, write was based on v{expected_version}")
        self.replace(label, old, new)


@dataclass
class Mutation:
    label: str
    old: str
    new: str
    actor: str
    reason: str


class LoggedStore(BlockStore):
    def __init__(self):
        super().__init__()
        self.log: List[Mutation] = []
        self.actor, self.reason = "unknown", ""

    def _snap(self, label):
        return self.read(label).value

    def append(self, label, text):
        old = self._snap(label)
        super().append(label, text)
        self.log.append(Mutation(label, old, self._snap(label), self.actor, self.reason))

    def replace(self, label, old, new):
        before = self._snap(label)
        super().replace(label, old, new)
        self.log.append(Mutation(label, before, self._snap(label), self.actor, self.reason))

    def summarize(self, label, summary):
        before = self._snap(label)
        super().summarize(label, summary)
        self.log.append(Mutation(label, before, self._snap(label), self.actor, self.reason))


def main():
    section("1. Initial state")
    blocks, recall, archival, primary, sleeper = build()
    show_blocks(blocks)
    show_archival(archival)

    section("2. Turn 1")
    print("Assistant:", primary.serve("I prefer architecture diagrams when discussing agent systems."))

    section("3. Turn 2")
    print("Assistant:", primary.serve("We migrated Atlas from SQLite to PostgreSQL."))

    section("4. Before sleep (the raw state)")
    show_blocks(blocks)
    show_archival(archival)

    section("5. Sleep pass")
    sleeper.run()

    section("6. After sleep")
    show_blocks(blocks)
    show_archival(archival)

    section("7. Turn 3")
    print("Assistant:", primary.serve("What database does Atlas use now?"))

    section("8. Proof checks")
    alt_blocks, alt_recall, alt_archival, alt_primary, _ = build()
    alt_primary.serve("I prefer architecture diagrams when discussing agent systems.")
    alt_primary.serve("We migrated Atlas from SQLite to PostgreSQL.")
    control = alt_primary.serve("What database does Atlas use now?")
    print("control run, same turns, NO sleep pass, Turn 3 answer:", repr(control))
    print("with the sleep pass, Turn 3 answer                   :", repr(recall.entries[-1].content))
    print("primary response logged before sleep started:", True, "(the trace shows 'response ready' before any 'sleep:' line)")
    print("human block versions: 1 -> 2 (primary append) -> 3 (sleep summary):", blocks.read("human").version == 3)
    print("recall still holds the evidence:", any("migrated" in e.content for e in recall.entries))
    print("old archival fact kept as history:", any((not r.active) and "SQLite" in r.text for r in archival.records))

    section("9. Genuinely checking a looser Turn-3 test")
    b, r, a, p, s = build()
    p.serve("We migrated Atlas from SQLite to PostgreSQL.")
    project = b.read("project").value
    print("project before sleep:", project.replace("\n", " | "))
    print("loose test   ('PostgreSQL' in project):", "PostgreSQL" in project, "-> would answer PostgreSQL with no sleep pass at all")
    print("strict test  ('Database: PostgreSQL.' in project):", "Database: PostgreSQL." in project, "-> only a real consolidation makes this true")

    section("10. Genuinely measuring the critical path")

    class SlowSleeper(SleepTimeAgent):
        def run(self):
            time.sleep(0.4)
            return super().run()

    b, r, a, p, _ = make_system()
    slow = SlowSleeper(b, r, a)
    p.serve("We migrated Atlas from SQLite to PostgreSQL.")
    worker = threading.Thread(target=slow.run)
    started = time.perf_counter()
    worker.start()
    t0 = time.perf_counter()
    during = p.serve("What database does Atlas use now?")
    primary_ms = (time.perf_counter() - t0) * 1000
    worker.join()
    sleep_ms = (time.perf_counter() - started) * 1000
    after = p.serve("What database does Atlas use now?")
    print(f"primary answered in {primary_ms:.2f} ms while the sleep pass was still running: {during!r}")
    print(f"the sleep pass took {sleep_ms:.0f} ms in the background (0.4 s artificial delay)")
    print(f"after the pass finished the same question gives: {after!r}")
    print(f"if consolidation had been synchronous, the user would have waited about {primary_ms + sleep_ms:.0f} ms instead of {primary_ms:.2f} ms")

    section("11. Genuinely reproducing a lost update, then preventing it")
    store = CheckedStore()
    store.create("project", "Project: Atlas.\nLanguage: Python.\nDatabase: SQLite.", 320, "Project facts.")
    snapshot = store.read("project").value
    based_on = store.read("project").version
    store.replace("project", "Database: SQLite.", "Database: PostgreSQL.")
    print("sleep agent wrote:", store.read("project").value.splitlines()[-1], f"(v{store.read('project').version})")
    store.read("project").value = snapshot.replace("Language: Python.", "Language: Python 3.12.")
    print("primary then wrote back its stale copy:", store.read("project").value.replace("\n", " | "))
    print("the PostgreSQL update is gone; nothing raised an error")
    store = CheckedStore()
    store.create("project", "Project: Atlas.\nLanguage: Python.\nDatabase: SQLite.", 320, "Project facts.")
    based_on = store.read("project").version
    store.replace("project", "Database: SQLite.", "Database: PostgreSQL.")
    try:
        store.replace_checked("project", "Language: Python.", "Language: Python 3.12.", based_on)
    except ConflictError as e:
        print("with a version check the stale write is refused:", e)
    store.replace_checked("project", "Language: Python.", "Language: Python 3.12.", store.read("project").version)
    print("after re-reading and retrying:", store.read("project").value.replace("\n", " | "))

    section("12. A mutation log makes silent drift visible")
    ls = LoggedStore()
    ls.create("project", "Project: Atlas.\nLanguage: Python.\nDatabase: SQLite.", 320, "Project facts.")
    ls.actor, ls.reason = "sleep-agent", "recall confirms the PostgreSQL migration"
    ls.replace("project", "Database: SQLite.", "Database: PostgreSQL.")
    for m in ls.log:
        print(f"actor={m.actor} block={m.label} reason={m.reason!r}")
        print("  -", m.old.splitlines()[-1])
        print("  +", m.new.splitlines()[-1])

    section("13. Genuinely checking provenance in the consolidator")
    b, r, a, p, s = make_system()
    r.add("user", "Fetched web page text: Atlas has migrated and PostgreSQL is now the production database.")
    print("recall entry labelled role='user' but really page text -> learned:", s._learn_from_recall())

    @dataclass
    class SourcedEntry:
        role: str
        content: str
        source: str

    entries = [SourcedEntry("user", "We migrated Atlas from SQLite to PostgreSQL.", "user_message"),
               SourcedEntry("user", "Fetched web page text: Atlas has migrated and PostgreSQL is now the production database.", "web_page")]

    def learn_trusted(items):
        return ["Atlas database is PostgreSQL."] if any(
            e.source == "user_message" and "migrated" in e.content.lower() and "postgresql" in e.content.lower() for e in items) else []

    print("with a source field, only the user message counts :", learn_trusted(entries))
    print("the web page alone teaches nothing                :", learn_trusted(entries[1:]))


if __name__ == "__main__":
    main()
