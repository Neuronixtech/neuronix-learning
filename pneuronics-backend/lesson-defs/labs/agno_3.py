"""Teaching implementation (our own): Agno/Mastra Part 3 - request trace, horizontal scaling with a shared store, failure analysis."""
import itertools
import json
import os
import shutil
import sqlite3
import tempfile
import threading
import time

from agno_1 import Agent, ModelRouter, SessionStore, weather_tool


class ConflictError(Exception):
    pass


class SqliteSessions:
    """Durable shared store. Each save carries the version it loaded; a stale save is rejected instead of overwriting."""

    def __init__(self, path):
        self.path = path
        with self._c() as c:
            c.execute("CREATE TABLE IF NOT EXISTS s (id TEXT PRIMARY KEY, version INTEGER, messages TEXT)")

    def _c(self):
        return sqlite3.connect(self.path, timeout=10)

    def load(self, sid):
        with self._c() as c:
            row = c.execute("SELECT version, messages FROM s WHERE id=?", (sid,)).fetchone()
        return (row[0], json.loads(row[1])) if row else (0, [])

    def save(self, sid, version, messages, check=True):
        payload = json.dumps(messages)
        with self._c() as c:
            if not check:
                c.execute("INSERT INTO s VALUES (?,?,?) ON CONFLICT(id) DO UPDATE SET version=version+1, messages=excluded.messages",
                          (sid, version + 1, payload))
                return
            if version == 0:
                try:
                    c.execute("INSERT INTO s VALUES (?,?,?)", (sid, 1, payload))
                    return
                except sqlite3.IntegrityError:
                    raise ConflictError(f"{sid}: another request created this session first")
            cur = c.execute("UPDATE s SET version=?, messages=? WHERE id=? AND version=?", (version + 1, payload, sid, version))
            if cur.rowcount == 0:
                raise ConflictError(f"{sid}: version {version} is stale")


class ProcessLocal:
    """In-memory store private to one server process, with the same load/save shape."""

    def __init__(self):
        self.store = SessionStore()

    def load(self, sid):
        h = self.store.load(sid)
        return len(h), h

    def save(self, sid, version, messages, check=True):
        self.store.save(sid, messages)


class Runtime:
    def __init__(self, store, model=None):
        self.store, self.model = store, model or ModelRouter()
        self.trace, self._ids = [], itertools.count(1)

    def span(self, rid, name, t0, **kw):
        self.trace.append({"request": rid, "span": name, "ms": round((time.perf_counter() - t0) * 1000, 3), **kw})

    def handle(self, session_id, message, retries=0, checked=True):
        rid = f"req-{next(self._ids)}"
        for attempt in range(retries + 1):
            t0 = time.perf_counter()
            version, history = self.store.load(session_id)
            self.span(rid, "load_session", t0, session=session_id, messages=len(history))
            agent = Agent(self.model, [weather_tool])
            t1 = time.perf_counter()
            reply = agent.run(message, history)
            self.span(rid, "agent.run", t1, agent=agent.agent_id)
            t2 = time.perf_counter()
            history = history + [{"role": "user", "content": message}, {"role": "assistant", "content": reply}]
            try:
                self.store.save(session_id, version, history, check=checked)
                self.span(rid, "save_session", t2, messages=len(history), attempt=attempt + 1)
                return reply
            except ConflictError:
                self.span(rid, "save_conflict", t2, attempt=attempt + 1)
        raise ConflictError(f"{rid}: gave up after {retries + 1} attempts")


def section(t):
    print(f"\n--- {t} ---")


def show(trace):
    for r in trace:
        extra = " ".join(f"{k}={v}" for k, v in r.items() if k not in ("request", "span", "ms"))
        print(f"  {r['request']} {r['span']:<14} {extra}")


def main():
    tmp = tempfile.mkdtemp(prefix="agno3_")
    try:
        section("1. Complete trace of the three-request program on a durable store")
        rt = Runtime(SqliteSessions(os.path.join(tmp, "a.db")))
        for m in ("Hello", "What is the weather in Bengaluru?", "And the weather in Mumbai?"):
            print(f"{m!r:36} -> {rt.handle('user-1', m)}")
        show(rt.trace)
        print("request ids are per request, session ids per conversation: three req-N values, one 'user-1'")

        section("2. Genuinely checking: horizontal scaling with in-memory stores")
        a, b = ProcessLocal(), ProcessLocal()
        Runtime(a).handle("user-2", "What is the weather in Delhi?")
        print("server A history:", len(a.load("user-2")[1]), "messages | server B history for the same session:", len(b.load("user-2")[1]))
        print("a load balancer that sends turn 2 to B loses turn 1 unless sessions are sticky or the store is shared")
        shared = SqliteSessions(os.path.join(tmp, "shared.db"))
        Runtime(shared).handle("user-2", "What is the weather in Delhi?")
        Runtime(shared).handle("user-2", "And the weather in Mumbai?")
        print("with a shared store, a second server sees turn 1 and the session now has", len(shared.load("user-2")[1]), "messages")

        section("3. Genuinely measuring: lost updates across two servers (real threads, 50 ms model)")
        trials = 12
        for checked, retries in ((False, 0), (True, 0), (True, 3)):
            lost, outcomes = 0, {"ok": 0, "gave up": 0}
            for i in range(trials):
                store = SqliteSessions(os.path.join(tmp, f"c_{checked}_{retries}_{i}.db"))
                servers = [Runtime(store, ModelRouter(0.05)) for _ in range(2)]
                results = []

                def go(s, n):
                    try:
                        s.handle("u", f"Hello {n}", retries=retries, checked=checked)
                        results.append("ok")
                    except ConflictError:
                        results.append("gave up")
                ts = [threading.Thread(target=go, args=(s, n)) for n, s in enumerate(servers)]
                [t.start() for t in ts]
                [t.join() for t in ts]
                for r in results:
                    outcomes[r] += 1
                if len(store.load("u")[1]) < 4 and results.count("ok") == 2:
                    lost += 1
            label = "no version check" if not checked else f"version check, {retries} retries"
            print(f"{label:24} trials with a silently lost turn: {lost:>2}/{trials} | request outcomes: {outcomes}")
        print("without a check both requests reported success while one turn vanished; with a check the loser is told, and a retry re-reads and recovers")

        section("4. Failure analysis: induce each failure and inspect the session")
        path_f = os.path.join(tmp, "f.db")
        store = SqliteSessions(path_f)
        base = Runtime(store)
        base.handle("f", "Hello")

        def snap():
            return len(store.load("f")[1])

        class BadModel(ModelRouter):
            def generate(self, *a):
                raise TimeoutError("provider timed out")

        class BrokenSave(SqliteSessions):
            def save(self, *a, **k):
                raise sqlite3.OperationalError("disk I/O error")
        cases = [
            ("input: empty message", lambda: base.handle("f", "")),
            ("input: 1 MB message", lambda: base.handle("f", "weather " + "x" * 1_000_000)),
            ("model: provider timeout", lambda: Runtime(store, BadModel()).handle("f", "Hello")),
            ("tool: city without data", lambda: base.handle("f", "weather in Chennai")),
            ("persistence: save fails", lambda: Runtime(BrokenSave(path_f)).handle("f", "Hello")),
            ("runtime: session id is None", lambda: base.handle(None, "Hello")),
        ]
        print(f"{'case':30} {'user sees':44} messages before -> after")
        for label, fn in cases:
            before = snap()
            try:
                seen = str(fn())[:40]
            except Exception as e:
                seen = f"{type(e).__name__}: {str(e)[:28]}"
            print(f"{label:30} {seen:44} {before} -> {snap()}")
        with store._c() as c:
            orphans = c.execute("SELECT COUNT(*) FROM s WHERE id IS NULL").fetchone()[0]
        print("rows saved under a NULL session id:", orphans)
        print("failures before the save left the stored session unchanged, but the user got a raw exception in those cases; the empty and 1 MB messages were accepted and stored, and a None session id was not rejected: it was written as an orphan row that no later request can load")

        section("5. Genuinely checking: an observability failure inside the request path")

        class Crashy(Runtime):
            def span(self, *a, **k):
                raise ConnectionError("collector down")
        try:
            Crashy(store).handle("f", "Hello")
        except ConnectionError as e:
            print("telemetry crash surfaced to the request:", e, "| stored messages still", snap())
        print("the first span call failed before the reply was returned, so a collector outage became a request failure")

        section("6. Genuinely measuring: history copied by every load grows with the conversation")
        mem = Runtime(ProcessLocal())
        marks = {}
        for turn in range(1, 5001):
            mem.handle("bench", "Hello")
            if turn in (10, 100, 1000, 5000):
                runs = []
                for _ in range(7):
                    t0 = time.perf_counter()
                    for _ in range(200):
                        mem.store.load("bench")
                    runs.append((time.perf_counter() - t0) / 200 * 1e6)
                marks[turn] = min(runs)
        for turn, us in marks.items():
            print(f"after {turn:>4} turns ({turn * 2:>5} messages): one load() takes {us:>6.1f} us (best of 7 batches)")
        print("the agent is cheap to create but the history it receives is not constant; long sessions need a window or a summary")
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


if __name__ == "__main__":
    main()
