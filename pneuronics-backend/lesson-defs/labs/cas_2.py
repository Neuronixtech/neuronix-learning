"""Teaching implementation (our own): Claude-Agent-SDK-style Part 2 - subagents, context isolation, parallel fan-out, aggregation."""
import os
import random
import shutil
import tempfile
import threading
import time
from concurrent.futures import ThreadPoolExecutor, TimeoutError as FutureTimeout, as_completed
from dataclasses import dataclass
from pathlib import Path
from typing import Optional

from cas_1 import build_tool_registry


class SessionStore:
    def __init__(self):
        self._sessions, self._lock = {}, threading.Lock()

    def append(self, session_id, message):
        with self._lock:
            self._sessions.setdefault(session_id, []).append(message)

    def load(self, session_id):
        with self._lock:
            return list(self._sessions.get(session_id, []))

    def list_sessions(self):
        with self._lock:
            return sorted(self._sessions)


@dataclass
class SubagentResult:
    name: str
    task: str
    summary: str
    private_context_size: int
    elapsed_seconds: float


class Subagent:
    """Simulated worker: reads one file, keeps the full text in its own child session, returns only a summary."""

    def __init__(self, name, registry, sessions, latency=0.0, fail=False):
        self.name, self.registry, self.sessions, self.latency, self.fail = name, registry, sessions, latency, fail

    def run(self, parent_session_id, task, file_path):
        started = time.perf_counter()
        child = f"{parent_session_id}:subagent:{self.name}"
        self.sessions.append(child, {"role": "user", "content": task})
        text = self.registry.execute("read_file", path=file_path)
        self.sessions.append(child, {"role": "tool", "content": text})
        time.sleep(self.latency)
        if self.fail:
            raise RuntimeError(f"{self.name} could not analyse {file_path}")
        words = len(text.split())
        summary = f"{self.name}: {words} words, first line '{text.splitlines()[0][:30]}'"
        self.sessions.append(child, {"role": "assistant", "content": summary})
        size = sum(len(m["content"]) for m in self.sessions.load(child))
        return SubagentResult(self.name, task, summary, size, time.perf_counter() - started)


class AgentHarness:
    def __init__(self, registry, sessions, max_workers=3):
        self.registry, self.sessions, self.max_workers = registry, sessions, max_workers

    def run_pasted(self, session_id, workers, tasks):
        """As taught: submit everything, collect with as_completed, call future.result() with no handling."""
        results = []
        with ThreadPoolExecutor(max_workers=self.max_workers) as pool:
            futures = [pool.submit(w.run, session_id, t, p) for w, (_, t, p) in zip(workers, tasks)]
            for f in as_completed(futures):
                results.append(f.result())
        return results

    def run_robust(self, session_id, workers, tasks, timeout=None):
        """Our version: results keep input order and every worker reports a status instead of raising."""
        out = [None] * len(workers)
        with ThreadPoolExecutor(max_workers=self.max_workers) as pool:
            futures = [pool.submit(w.run, session_id, t, p) for w, (_, t, p) in zip(workers, tasks)]
            for i, f in enumerate(futures):
                try:
                    out[i] = ("ok", f.result(timeout=timeout))
                except FutureTimeout:
                    out[i] = ("timeout", None)
                except Exception as e:
                    out[i] = ("error", f"{type(e).__name__}: {e}")
        return out


def section(t):
    print(f"\n--- {t} ---")


def main():
    work = Path(tempfile.mkdtemp(prefix="cas2_"))
    old = Path.cwd()
    os.chdir(work)
    try:
        reg = build_tool_registry()
        files = {"auth": "Authentication uses signed tokens.\n" + "token rotation detail. " * 400,
                 "billing": "Billing computes invoices nightly.\n" + "ledger detail. " * 300,
                 "search": "Search builds an inverted index.\n" + "index shard detail. " * 500}
        for k, v in files.items():
            reg.execute("write_file", path=f"agent_demo/{k}.txt", content=v)
        tasks = [(f"{k}-researcher", f"Inspect {k}.", f"agent_demo/{k}.txt") for k in files]

        def make(latency=0.0, fail_name=None, store=None):
            store = store or SessionStore()
            return store, [Subagent(n, reg, store, latency, fail=(n == fail_name)) for n, _, _ in tasks]

        section("1. The lesson's run: three subagents, parent sees summaries only")
        store, workers = make()
        h = AgentHarness(reg, store)
        res = h.run_pasted("demo", workers, tasks)
        for r in sorted(res, key=lambda r: r.name):
            print(f"{r.name:20} private context {r.private_context_size:>6} chars | {r.summary}")
        print("sessions:", store.list_sessions())
        print("parent session messages:", len(store.load("demo")), "| aggregated summaries length:", sum(len(r.summary) for r in res), "chars")

        section("2. Genuinely measuring: context isolation saves the parent how much")
        private = sum(r.private_context_size for r in res)
        summary = sum(len(r.summary) for r in res)
        print(f"if the parent had read all three files itself: {private:,} chars in its context; with isolation it receives {summary:,} ({summary / private:.1%})")
        print("the saving is real only because the subagent's summary is short; a summary that copies the file would give none")

        section("3. Genuinely measuring: sequential versus parallel fan-out (0.3s of simulated model latency each)")
        for workers_n in (1, 2, 3):
            store, workers = make(latency=0.3)
            t0 = time.perf_counter()
            AgentHarness(reg, store, max_workers=workers_n).run_robust("t", workers, tasks)
            print(f"max_workers={workers_n}: wall time {time.perf_counter() - t0:.2f}s")
        print("wall time tracks the number of waves (3, 2, 1) times the latency; the simulated latency is time.sleep, which releases the GIL; this does not measure CPU-bound workers")

        section("4. Genuinely checking: completion order versus input order")
        random.seed(7)
        orders = set()
        for _ in range(12):
            store = SessionStore()
            ws = [Subagent(n, reg, store, latency=random.uniform(0.0, 0.08)) for n, _, _ in tasks]
            orders.add(tuple(r.name.split("-")[0] for r in AgentHarness(reg, store).run_pasted("o", ws, tasks)))
        print(f"12 runs of as_completed produced {len(orders)} distinct result orders:")
        for o in sorted(orders):
            print("  ", o)
        store, ws = make(latency=0.05)
        robust = AgentHarness(reg, store).run_robust("o", ws, tasks)
        print("run_robust order:", [r[1].name.split("-")[0] for r in robust], "(always the input order)")

        section("5. Genuinely checking: one failing worker")
        store, ws = make(latency=0.1, fail_name="billing-researcher")
        try:
            AgentHarness(reg, store).run_pasted("f", ws, tasks)
        except RuntimeError as e:
            print("pasted aggregation raised:", e)
        print("child sessions created:", len(store.list_sessions()), "of 3 | the exception reached the caller and the other two summaries were never returned")
        store, ws = make(latency=0.1, fail_name="billing-researcher")
        for status, value in AgentHarness(reg, store).run_robust("f", ws, tasks):
            print("  robust:", status, "|", value if isinstance(value, str) else value.summary)

        section("6. Genuinely measuring: a timeout does not stop the worker")
        finished = []

        class Slow(Subagent):
            def run(self, *a, **k):
                time.sleep(0.6)
                finished.append(self.name)
                return super().run(*a, **k)
        store = SessionStore()
        ws = [Slow("slow-researcher", reg, store), Subagent("fast-researcher", reg, store)]
        t0 = time.perf_counter()
        out = AgentHarness(reg, store, max_workers=2).run_robust("s", ws, tasks[:2], timeout=0.2)
        print("statuses:", [o[0] for o in out], f"| returned to the caller after {time.perf_counter() - t0:.2f}s")
        print("slow worker finished anyway:", finished, "(the executor's exit waited for it; a thread cannot be cancelled once it is running)")
        print("the with-block held the harness for the full 0.6s, so the 0.2s timeout bounded the result, not the wall time")

        section("7. Genuinely checking: file read inside the child is not rate-limited")
        store, ws = make()
        peak, lock, live = [0], threading.Lock(), [0]
        orig = reg.get("read_file").fn

        def counting(path):
            with lock:
                live[0] += 1; peak[0] = max(peak[0], live[0])
            time.sleep(0.05)
            try:
                return orig(path)
            finally:
                with lock:
                    live[0] -= 1
        reg.get("read_file").fn = counting
        AgentHarness(reg, store, max_workers=3).run_robust("c", ws, tasks)
        reg.get("read_file").fn = orig
        print("peak concurrent read_file calls with 3 workers:", peak[0])
        print("the registry has no per-tool concurrency limit; the pool size is the only brake")
    finally:
        os.chdir(old)
        shutil.rmtree(work, ignore_errors=True)


if __name__ == "__main__":
    main()
