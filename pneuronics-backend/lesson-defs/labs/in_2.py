"""Teaching implementation (our own): initialization scripts for agents, Part 2 - probe edge cases on THIS machine: import names versus package names, a module that is discoverable
but fails to import, a command that resolves but cannot launch, blank environment variables, a probe that crashes, and the working-directory trap. No language model is used."""
import importlib
import importlib.util
import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path


def probe_dependencies(packages):
    missing = []
    for p in packages:
        try:
            spec = importlib.util.find_spec(p)
        except (ImportError, ValueError, AttributeError):
            spec = None
        if spec is None:
            missing.append(p)
    return missing


def import_smoke(name):
    try:
        importlib.import_module(name)
        return "imports"
    except Exception as e:
        return f"import failed: {type(e).__name__}"


def run_probe_safely(name, fn):
    try:
        r = fn()
        if not isinstance(r, dict) or {"name", "status", "detail"} - r.keys() or r["status"] not in ("pass", "fail"):
            raise ValueError("bad probe result")
        return r
    except Exception as e:
        return {"name": name, "status": "fail", "detail": f"probe error: {type(e).__name__}"}


def probe_env(names):
    return [n for n in names if not os.environ.get(n)]


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely checking: import names versus installer package names")
    for name in ("json", "yaml", "PyYAML", "os.path", "no_pkg.sub", "email.mime.text", ""):
        try:
            found = importlib.util.find_spec(name) is not None
            print(f"find_spec({name!r:18}) discoverable={found}")
        except Exception as e:
            print(f"find_spec({name!r:18}) raised {type(e).__name__}: {e}")
    print("a dependency list written with installer names (PyYAML) fails a probe that expects import names (yaml); a dotted name whose parent is missing raises ModuleNotFoundError instead of returning None, while an empty name simply came back as not discoverable on this Python (other versions may raise ValueError), so the probe has to catch the exceptions as well as the None")
    print("whether yaml is installed depends on this machine and is not a property of the lesson")

    section("2. Genuinely checking: discoverable is not importable")
    with tempfile.TemporaryDirectory() as d:
        (Path(d) / "broken_dep.py").write_text("import module_that_does_not_exist\n", encoding="utf-8")
        (Path(d) / "fine_dep.py").write_text("VALUE = 1\n", encoding="utf-8")
        sys.path.insert(0, d)
        try:
            for n in ("fine_dep", "broken_dep"):
                print(f"{n:12} find_spec found it: {importlib.util.find_spec(n) is not None} | import: {import_smoke(n)}")
        finally:
            sys.path.remove(d)
    print("find_spec located the broken module because it only looks for the file; the import smoke test caught the failure, at the price of running that module's top-level code during startup, so it should be limited to trusted dependencies")

    section("3. Genuinely checking: a command that resolves but does not launch")
    with tempfile.TemporaryDirectory() as d:
        script = Path(d) / ("fake_runner.bat" if os.name == "nt" else "fake_runner")
        script.write_text("@echo off\r\nexit /b 3\r\n" if os.name == "nt" else "#!/bin/sh\nexit 3\n", encoding="utf-8")
        if os.name != "nt":
            script.chmod(0o755)
        old = os.environ["PATH"]
        os.environ["PATH"] = d + os.pathsep + old
        try:
            path = shutil.which("fake_runner")
            print("which found it:", path is not None)
            p = subprocess.run([path, "--version"], capture_output=True, text=True, timeout=20)
            print("launching it with --version exited with", p.returncode)
        finally:
            os.environ["PATH"] = old
    print("resolving a command only proves a file with that name is on PATH; running --version is a second, stronger level, and running the real tests is a third, which belongs to verification and not to startup")

    section("4. Genuinely checking: environment variables that are set but useless")
    for label, value in (("unset", None), ("empty string", ""), ("whitespace only", "   "), ("a real-looking value", "abc123")):
        if value is None:
            os.environ.pop("LAB_VAR", None)
        else:
            os.environ["LAB_VAR"] = value
        print(f"{label:22} flagged as missing by a truthiness check: {bool(probe_env(['LAB_VAR']))}")
    os.environ.pop("LAB_VAR", None)
    print("a whitespace-only value passed the truthiness check although it is useless; presence is not validity, and a format or live check would be a separate, bounded probe that must not print the value")

    section("5. Genuinely checking: a probe that crashes")
    def good():
        return {"name": "ok", "status": "pass", "detail": "fine"}
    def crashes():
        return 1 / 0
    def malformed():
        return {"name": "bad", "status": "maybe"}
    def unsafe_orchestrator(fns):
        return [f() for f in fns]
    try:
        unsafe_orchestrator([good, crashes, good])
    except ZeroDivisionError:
        print("unsafe orchestrator: ZeroDivisionError aborted the whole run, no report was produced")
    for fn in (good, crashes, malformed):
        print(" ", run_probe_safely(fn.__name__, fn))
    print("the wrapper turns a crash and a malformed result into a failing record and keeps going, so the report is still written; it records only the exception type, not its message, which could contain paths or secrets")

    section("6. Genuinely checking: the working-directory trap")
    with tempfile.TemporaryDirectory() as d:
        here = Path.cwd()
        try:
            os.chdir(d)
            print("cwd inside the temp directory contains README.md:", (Path.cwd() / "README.md").exists())
            (Path(d) / "README.md").write_text("x", encoding="utf-8")
            print("after creating one, the same check says:", (Path.cwd() / "README.md").exists())
        finally:
            os.chdir(here)
    print("a script that builds paths from the current directory trusts wherever it was launched from; checking a repository marker such as README.md (or locating the root from the script's own path) turns a wrong-directory mistake into a clear failure")


if __name__ == "__main__":
    main()
