"""Teaching implementation (our own): Claude-Agent-SDK-style Part 3 - session store, hooks, trace propagation, complete run."""
import contextvars
import os
import shutil
import sys
import tempfile
import threading
import time
import uuid
from concurrent.futures import ThreadPoolExecutor
from dataclasses import dataclass
from pathlib import Path

from cas_1 import Tool, ToolRegistry, list_dir, read_file, write_file


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

    def list_subkeys(self, session_id):
        prefix = f"{session_id}:subagent:"
        with self._lock:
            return sorted(k for k in self._sessions if k.startswith(prefix))

    def delete(self, session_id):
        prefix = f"{session_id}:subagent:"
        with self._lock:
            for k in [k for k in self._sessions if k == session_id or k.startswith(prefix)]:
                del self._sessions[k]


class HookManager:
    EVENTS = ("session_start", "session_end", "pre_tool_use", "post_tool_use")

    def __init__(self, fail_open=False):
        self._hooks, self.fail_open, self.errors = {e: [] for e in self.EVENTS}, fail_open, []

    def register(self, event, hook):
        if event not in self._hooks:
            raise ValueError(f"Unknown hook event: {event}")
        self._hooks[event].append(hook)

    def emit(self, event, **payload):
        for hook in self._hooks.get(event, []):
            if self.fail_open:
                try:
                    hook(**payload)
                except PermissionError:
                    raise
                except Exception as e:
                    self.errors.append(f"{event}: {type(e).__name__}: {e}")
            else:
                hook(**payload)


class HookedRegistry(ToolRegistry):
    def __init__(self, hooks, agent="main"):
        super().__init__()
        self.hook_manager, self.agent = hooks, agent

    def execute(self, name, **kwargs):
        self.hook_manager.emit("pre_tool_use", agent=self.agent, tool=name, arguments=kwargs)
        result = self.get(name).run(**kwargs)
        self.hook_manager.emit("post_tool_use", agent=self.agent, tool=name, result=result)
        return result


def block_exact_etc_passwd(agent, tool, arguments, **_):
    """As taught: compare the path string with one forbidden literal."""
    if tool == "write_file" and arguments.get("path") == "protected/secret.txt":
        raise PermissionError("Write blocked")


def block_resolved(agent, tool, arguments, **_):
    """Our fix: compare resolved paths."""
    if tool == "write_file" and Path(arguments.get("path", "")).resolve() == Path("protected/secret.txt").resolve():
        raise PermissionError("Write blocked")


@dataclass
class TraceContext:
    trace_id: str

    @classmethod
    def create(cls):
        return cls(trace_id=uuid.uuid4().hex)

    def child_label(self, name):
        return f"{self.trace_id[:8]}:{name}"


CURRENT_TRACE = contextvars.ContextVar("current_trace", default=None)


def build_registry(hooks):
    reg = HookedRegistry(hooks)
    reg.register(Tool("read_file", "Read a UTF-8 text file", read_file))
    reg.register(Tool("write_file", "Write a UTF-8 text file", write_file))
    reg.register(Tool("list_dir", "List entries in a directory", list_dir))
    return reg


def section(t):
    print(f"\n--- {t} ---")


def attempt(label, fn):
    try:
        print(f"{label}: {fn()}")
    except Exception as e:
        print(f"{label}: {type(e).__name__}: {e}")


def main():
    work = Path(tempfile.mkdtemp(prefix="cas3_"))
    old = Path.cwd()
    os.chdir(work)
    try:
        section("1. The lesson's session store demo")
        store = SessionStore()
        store.append("parent", {"role": "user", "content": "hello"})
        store.append("parent:subagent:a", {"role": "assistant", "content": "A result"})
        store.append("parent:subagent:b", {"role": "assistant", "content": "B result"})
        print(store.load("parent"))
        print(store.list_subkeys("parent"))
        print(store.list_sessions())

        section("2. Genuinely checking: hierarchical ids are strings, so names can collide")
        s = SessionStore()
        s.append("p", {"role": "user", "content": "parent p"})
        s.append("p:subagent:x", {"role": "assistant", "content": "child x"})
        s.append("p:subagent:x:subagent:y", {"role": "assistant", "content": "grandchild y"})
        s.append("p:subagent:z:subagent:q", {"role": "assistant", "content": "a child literally named 'z:subagent:q'"})
        print("subkeys of p:", s.list_subkeys("p"))
        print("list_subkeys cannot tell a grandchild from a child whose name contains ':subagent:'")
        s.delete("p:subagent:x")
        print("after delete('p:subagent:x'):", s.list_sessions())
        print("deleting a child also deleted its grandchild (prefix match), and the literal name ambiguity was never rejected")
        s2 = SessionStore()
        s2.append("job", {"role": "user", "content": "j"})
        s2.append("job2", {"role": "user", "content": "j2"})
        s2.append("job2:subagent:a", {"role": "assistant", "content": "a"})
        s2.delete("job")
        print("delete('job') leaves unrelated 'job2' and its child:", s2.list_sessions())

        section("3. Genuinely measuring: the lock protects append, not a check-then-act sequence")
        for use_lock in (False, True):
            st = SessionStore()
            gate = threading.Lock()
            sys.setswitchinterval(1e-6)

            def add_numbered(sid):
                for _ in range(300):
                    if use_lock:
                        with gate:
                            st.append(sid, {"n": len(st.load(sid)) + 1})
                    else:
                        st.append(sid, {"n": len(st.load(sid)) + 1})
            threads = [threading.Thread(target=add_numbered, args=("s",)) for _ in range(8)]
            [t.start() for t in threads]; [t.join() for t in threads]
            nums = [m["n"] for m in st.load("s")]
            print(f"extra gate around next-number: {use_lock!s:5} | messages {len(nums)} | distinct numbers {len(set(nums))} | duplicates {len(nums) - len(set(nums))}")
        sys.setswitchinterval(0.005)
        print("every append succeeded either way (no lost messages), but numbering computed from load() raced without a wider lock")

        section("4. Hooks: order, blocking and the audit trail")
        calls = []
        hooks = HookManager()
        hooks.register("pre_tool_use", lambda agent, tool, arguments, **_: calls.append(("pre-A", tool)))
        hooks.register("pre_tool_use", block_exact_etc_passwd)
        hooks.register("pre_tool_use", lambda agent, tool, arguments, **_: calls.append(("pre-B", tool)))
        hooks.register("post_tool_use", lambda agent, tool, result, **_: calls.append(("post", tool)))
        reg = build_registry(hooks)
        Path("protected").mkdir()
        attempt("write allowed file", lambda: reg.execute("write_file", path="notes.txt", content="ok"))
        attempt("write protected/secret.txt", lambda: reg.execute("write_file", path="protected/secret.txt", content="x"))
        print("hook calls in order:", calls)
        print("pre-B never ran for the blocked call (the first raising hook stops the chain) and no post event exists for it")
        attempt("unknown event name", lambda: hooks.register("pre_tool_usee", print))

        section("5. Genuinely checking: the blocking hook compares strings, not files")
        for label_p, p in (("exact spelling", "protected/secret.txt"), ("with ..", "protected/../protected/secret.txt"), ("with ./", "./protected/secret.txt"),
                           ("absolute path", str(work / "protected" / "secret.txt")), ("upper-case dir", "PROTECTED/secret.txt")):
            for label, fn in (("string hook", block_exact_etc_passwd), ("resolved hook", block_resolved)):
                h = HookManager(); h.register("pre_tool_use", fn)
                r = build_registry(h)
                try:
                    r.execute("write_file", path=p, content="X")
                    outcome = "WRITTEN"
                except PermissionError:
                    outcome = "blocked"
                print(f"{label_p:16} {label:13} {outcome}")
        print("on this case-insensitive Windows filesystem 'PROTECTED/secret.txt' is the same file; the resolved hook caught it because resolve() normalises the path")
        print("the string hook only blocked the one exact spelling")

        section("6. Genuinely checking: a hook that crashes")
        for fail_open in (False, True):
            h = HookManager(fail_open=fail_open)
            h.register("pre_tool_use", lambda **_: 1 / 0)
            r = build_registry(h)
            attempt(f"fail_open={fail_open}: list_dir", lambda: r.execute("list_dir", path="."))
            print("   recorded hook errors:", h.errors)
        print("a buggy logging hook stops every tool call when hooks fail closed; failing open keeps the agent running but must still re-raise real policy denials")

        section("7. Genuinely checking: does the trace reach worker threads")
        trace = TraceContext.create()
        CURRENT_TRACE.set(trace)
        seen = {}

        def worker(label):
            seen[label] = CURRENT_TRACE.get()
        with ThreadPoolExecutor(max_workers=2) as pool:
            pool.submit(worker, "plain submit").result()
            pool.submit(contextvars.copy_context().run, worker, "copy_context").result()
        for k, v in seen.items():
            print(f"{k:14} sees trace: {v.trace_id[:8] if v else None}")
        print("a ContextVar set in the parent is invisible in a pool thread unless the context is copied; the lesson avoids this by passing TraceContext as an argument")

        section("8. Genuinely measuring: the 8-character trace label")
        n, seen_labels, clashes = 200_000, set(), 0
        for _ in range(n):
            lab = TraceContext.create().child_label("auth")
            if lab in seen_labels:
                clashes += 1
            seen_labels.add(lab)
        print(f"{n} traces, child labels that repeated: {clashes} (birthday estimate about {n * n / 2 / 16 ** 8:.1f})")
        print("the full trace_id is 32 hex characters and is unique; only the shortened label can repeat, so search logs by the full id")

        section("9. Whole program: hooks + traced subagents + session store")
        store, log = SessionStore(), []
        hooks = HookManager()
        hooks.register("session_start", lambda session_id, trace: log.append(f"[SessionStart] session={session_id} trace={trace[:8]}"))
        hooks.register("pre_tool_use", lambda agent, tool, arguments, **_: log.append(f"[PreToolUse] agent={agent} tool={tool}"))
        hooks.register("post_tool_use", lambda agent, tool, result, **_: log.append(f"[PostToolUse] agent={agent} tool={tool}"))
        hooks.register("session_end", lambda session_id, count: log.append(f"[SessionEnd] session={session_id} summaries={count}"))
        base = build_registry(hooks)
        for k in ("auth", "billing", "search"):
            base.execute("write_file", path=f"agent_demo/{k}.txt", content=f"{k} notes\n" + f"{k} detail " * 50)
        log.clear()
        trace = TraceContext.create()
        hooks.emit("session_start", session_id="demo", trace=trace.trace_id)

        def child(name, path):
            r = build_registry(hooks); r.agent = name
            text = r.execute("read_file", path=path)
            store.append(f"demo:subagent:{name}", {"role": "assistant", "content": text[:20]})
            return f"{trace.child_label(name)} read {len(text)} chars"
        with ThreadPoolExecutor(max_workers=3) as pool:
            futs = [pool.submit(child, f"{k}-researcher", f"agent_demo/{k}.txt") for k in ("auth", "billing", "search")]
            summaries = [f.result() for f in futs]
        hooks.emit("session_end", session_id="demo", count=len(summaries))
        for line in log:
            print(line)
        print(summaries)
        print("session keys:", store.list_subkeys("demo"))
        print("the three PreToolUse lines carry an agent field but no trace id, so correlating them with the trace needs the thread or the call order")
    finally:
        os.chdir(old)
        shutil.rmtree(work, ignore_errors=True)


if __name__ == "__main__":
    main()
