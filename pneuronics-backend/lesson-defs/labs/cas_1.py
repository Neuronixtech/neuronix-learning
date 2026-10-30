"""Teaching implementation (our own): Claude-Agent-SDK-style Part 1 - Tool, ToolRegistry, built-in file tools, hook points."""
import os
import shutil
import tempfile
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Callable


@dataclass
class Tool:
    name: str
    description: str
    fn: Callable[..., Any]

    def run(self, **kwargs: Any) -> Any:
        return self.fn(**kwargs)


class ToolRegistry:
    def __init__(self, hooks=None):
        self._tools = {}
        self.hooks = hooks

    def register(self, tool):
        if tool.name in self._tools:
            raise ValueError(f"Tool already registered: {tool.name}")
        self._tools[tool.name] = tool

    def get(self, name):
        try:
            return self._tools[name]
        except KeyError as exc:
            raise KeyError(f"Unknown tool: {name}") from exc

    def list_tools(self):
        return sorted(self._tools)

    def execute(self, name, **kwargs):
        if self.hooks is not None:
            self.hooks("pre_tool_use", tool=name, arguments=kwargs)
        result = self.get(name).run(**kwargs)
        if self.hooks is not None:
            self.hooks("post_tool_use", tool=name, result=result)
        return result


def read_file(path):
    return Path(path).read_text(encoding="utf-8")


def write_file(path, content):
    target = Path(path)
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(content, encoding="utf-8")
    return f"Wrote {len(content)} characters to {target}"


def list_dir(path="."):
    root = Path(path)
    if not root.exists():
        raise FileNotFoundError(path)
    if not root.is_dir():
        raise NotADirectoryError(path)
    return sorted(item.name for item in root.iterdir())


def build_tool_registry(hooks=None):
    registry = ToolRegistry(hooks)
    registry.register(Tool("read_file", "Read a UTF-8 text file", read_file))
    registry.register(Tool("write_file", "Write a UTF-8 text file", write_file))
    registry.register(Tool("list_dir", "List entries in a directory", list_dir))
    return registry


def sandboxed_write(root):
    """Our fix: resolve the target and refuse anything that lands outside root."""
    base = Path(root).resolve()

    def fn(path, content):
        target = (base / path).resolve()
        if not target.is_relative_to(base):
            raise PermissionError(f"path escapes sandbox: {path}")
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(content, encoding="utf-8")
        return f"Wrote {len(content)} characters"
    return fn


def section(t):
    print(f"\n--- {t} ---")


def attempt(label, fn):
    try:
        print(f"{label}: {fn()}")
    except Exception as e:
        print(f"{label}: {type(e).__name__}: {e}")


def main():
    work = Path(tempfile.mkdtemp(prefix="cas1_"))
    sandbox = work / "agent_demo"
    outside = work / "outside.txt"
    old = Path.cwd()
    os.chdir(sandbox.parent)
    try:
        reg = build_tool_registry()

        section("1. The lesson's demo: write, read and list through the registry")
        print(reg.list_tools())
        print(reg.execute("write_file", path="agent_demo/test.txt", content="Harness as a library"))
        print(reg.execute("read_file", path="agent_demo/test.txt"))
        print(reg.execute("list_dir", path="agent_demo"))

        section("2. Registry invariants")
        attempt("register a duplicate name", lambda: reg.register(Tool("read_file", "again", read_file)))
        attempt("execute an unknown tool", lambda: reg.execute("delete_file", path="x"))
        attempt("wrong argument name", lambda: reg.execute("read_file", filename="x"))
        attempt("missing file", lambda: reg.execute("read_file", path="agent_demo/missing.txt"))
        print("every failure surfaces as a raw Python exception; the registry has no result envelope with ok/error")

        section("3. Genuinely checking: write_file and the directory boundary")
        attempt("write ../outside.txt", lambda: reg.execute("write_file", path="agent_demo/../outside.txt", content="ESCAPED"))
        print("file now exists outside agent_demo:", outside.exists(), "| content:", outside.read_text() if outside.exists() else None)
        abs_target = work / "absolute.txt"
        attempt("write an absolute path", lambda: reg.execute("write_file", path=str(abs_target), content="ABS"))
        print("absolute path written:", abs_target.exists())
        safe = ToolRegistry()
        safe.register(Tool("write_file", "sandboxed write", sandboxed_write(sandbox)))
        outside.unlink(); abs_target.unlink()
        attempt("sandboxed ../outside.txt", lambda: safe.execute("write_file", path="../outside.txt", content="ESCAPED"))
        attempt("sandboxed absolute path", lambda: safe.execute("write_file", path=str(abs_target), content="ABS"))
        attempt("sandboxed normal path", lambda: safe.execute("write_file", path="notes/a.txt", content="ok"))
        print("outside files exist after sandboxed attempts:", outside.exists(), abs_target.exists())

        section("4. Genuinely checking: reading files that are large or not text")
        big = sandbox / "big.txt"
        big.write_text("line of log output\n" * 200_000, encoding="utf-8")
        text = reg.execute("read_file", path="agent_demo/big.txt")
        print(f"read_file returned {len(text):,} characters (~{len(text.split()):,} words) in one result; there is no size cap")
        (sandbox / "image.bin").write_bytes(bytes(range(256)))
        attempt("read a binary file", lambda: reg.execute("read_file", path="agent_demo/image.bin"))

        section("5. Genuinely measuring: the success message counts characters, not bytes")
        for label, s in (("ASCII", "hello"), ("Kannada", "ನಮಸ್ಕಾರ"), ("emoji", "ok \U0001F600")):
            msg = reg.execute("write_file", path="agent_demo/enc.txt", content=s)
            print(f"{label:8} {msg.split(' to ')[0]:30} bytes on disk: {(sandbox / 'enc.txt').stat().st_size}")
        print("'characters' is not the size on disk; a quota or budget keyed to the message would be wrong for non-ASCII text")

        section("6. Genuinely checking: write_file overwrites silently")
        reg.execute("write_file", path="agent_demo/plan.txt", content="v1: carefully written plan")
        reg.execute("write_file", path="agent_demo/plan.txt", content="v2")
        print("plan.txt now:", repr(reg.execute("read_file", path="agent_demo/plan.txt")), "| v1 is gone, no warning was returned")

        section("7. Genuinely checking: where a post-tool hook does and does not run")
        events = []
        hooked = build_tool_registry(lambda event, **p: events.append((event, p["tool"])))
        hooked.execute("list_dir", path="agent_demo")
        attempt("failing call", lambda: hooked.execute("read_file", path="agent_demo/missing.txt"))
        print("events:", events)
        print("pre_tool_use fired for the failing call but post_tool_use did not: an audit that depends on post would not record failures")
    finally:
        os.chdir(old)
        shutil.rmtree(work, ignore_errors=True)


if __name__ == "__main__":
    main()
