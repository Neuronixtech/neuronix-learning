"""Teaching implementation (our own): initialization scripts for agents, Part 1 - five deterministic probes (Python version, dependencies, test command, required environment
variables, saved-state freshness) that run on THIS machine, a JSON report, an exit code through a real subprocess, and idempotency. The environment variable names are made up. No model is used."""
import importlib.util
import json
import os
import shutil
import subprocess
import sys
import tempfile
import time
from datetime import datetime, timezone
from pathlib import Path


def result(name, status, detail):
    return {"name": name, "status": status, "detail": detail}


def probe_python(required=(3, 10)):
    actual = sys.version_info[:2]
    ok = actual >= required
    return result("python_version", "pass" if ok else "fail", f"Python {actual[0]}.{actual[1]}" + ("" if ok else f" < required {required[0]}.{required[1]}"))


def probe_dependencies(packages):
    missing = []
    for p in packages:
        try:
            spec = importlib.util.find_spec(p)
        except (ImportError, ValueError):
            spec = None
        if spec is None:
            missing.append(p)
    return result("dependencies", "fail" if missing else "pass", ("Missing: " + ", ".join(missing)) if missing else "all discoverable")


def probe_test_command(cmd):
    path = shutil.which(cmd)
    return result("test_command", "pass" if path else "fail", f"resolved {path}" if path else f"not found on PATH: {cmd}")


def probe_env(names):
    missing = [n for n in names if not os.environ.get(n)]
    return result("environment", "fail" if missing else "pass", ("Missing: " + ", ".join(missing)) if missing else "required variables present")


def probe_state(path, max_hours=24):
    path = Path(path)
    if not path.is_file():
        return result("state_freshness", "fail", f"state file not found: {path.name}")
    age = (time.time() - path.stat().st_mtime) / 3600
    if age < 0:
        return result("state_freshness", "fail", "modification time is in the future")
    if age > max_hours:
        return result("state_freshness", "fail", f"{age:.1f} h old, limit {max_hours}")
    return result("state_freshness", "pass", f"{age:.2f} h old")


def report(probes):
    fails = [p for p in probes if p["status"] == "fail"]
    return {"healthy": not fails, "failure_count": len(fails), "probes": probes}


def section(t):
    print(f"\n--- {t} ---")


def main():
    with tempfile.TemporaryDirectory() as d:
        state = Path(d) / "agent_state.json"
        state.write_text("{}", encoding="utf-8")
        os.environ["LAB_API_KEY"] = "dummy-value-not-a-secret"

        section("1. Genuinely running: all five probes on this machine with satisfiable requirements")
        probes = [probe_python((3, 8)), probe_dependencies(["json", "pathlib"]), probe_test_command("python"), probe_env(["LAB_API_KEY"]), probe_state(state)]
        for p in probes:
            print(f"{p['status'].upper():5} {p['name']:16} {p['detail'][:70]}")
        rep = report(probes)
        print("healthy:", rep["healthy"], "| failures:", rep["failure_count"])
        print("the details name what was found and never print the value of the environment variable; a pass here says the check ran against this machine today and nothing about the application")

        section("2. Genuinely running: the same probes with requirements this machine cannot meet")
        probes = [probe_python((9, 0)), probe_dependencies(["json", "no_such_package_xyz"]), probe_test_command("no-such-test-runner"), probe_env(["LAB_MISSING_VARIABLE"]), probe_state(Path(d) / "gone.json")]
        for p in probes:
            print(f"{p['status'].upper():5} {p['name']:16} {p['detail'][:70]}")
        rep = report(probes)
        print("healthy:", rep["healthy"], "| failures:", rep["failure_count"])
        print("all five failed independently and the report collected every failure instead of stopping at the first, so one run lists all five things to fix")

        section("3. Genuinely checking: the report and the exit code through a real subprocess")
        code = ("import json,sys;r=json.loads(sys.argv[1]);print('RESULT:', 'HEALTHY' if r['healthy'] else 'BLOCKED');sys.exit(0 if r['healthy'] else 1)")
        for label, r in (("healthy report", report([probe_python((3, 8))])), ("blocked report", rep)):
            p = subprocess.run([sys.executable, "-c", code, json.dumps(r)], capture_output=True, text=True)
            print(f"{label:15} printed {p.stdout.strip():16} exit code {p.returncode}")
        print("a printed BLOCKED with exit code 0 would let the agent launch anyway; the launcher acts on the exit code, so the code has to be non-zero when a blocking probe fails")

        section("4. Genuinely checking: state freshness at the edges (modification times set with os.utime)")
        for label, offset_h in (("fresh (1 h old)", 1), ("old (30 h old)", 30), ("future (+2 h)", -2)):
            t = time.time() - offset_h * 3600
            os.utime(state, (t, t))
            print(f"{label:16} {probe_state(state)}")
        os.utime(state, None)
        state.write_text("{not json", encoding="utf-8")
        print("fresh file with broken content:", probe_state(state))
        print("freshness only reads the modification time, so a file that was just written but is corrupt still passes; a content check is a separate probe")

        section("5. Genuinely measuring: idempotency, the report differs only in volatile fields")
        def run_once():
            ps = [probe_python((3, 8)), probe_dependencies(["json"]), probe_test_command("python"), probe_env(["LAB_API_KEY"]), probe_state(state)]
            r = report(ps)
            r["generated_at"] = datetime.now(timezone.utc).isoformat()
            return r
        a, b = run_once(), run_once()
        same = {k: a[k] == b[k] for k in a}
        print(same)
        print("only the timestamp differs between two runs; the checks themselves read state and change nothing, which is what makes initialization safe to repeat")


if __name__ == "__main__":
    main()
