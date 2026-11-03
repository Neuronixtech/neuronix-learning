"""Teaching implementation (our own): failure-mode reliability harness, Part 3 - pre-execution gates, trust states, postcondition checks, containment,
retries, idempotency, checkpoints, detector metrics and drift. The environment is an in-memory simulation; no model is involved."""
import random
import time
from collections import Counter
from dataclasses import dataclass, field
from enum import Enum


class Risk(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"


class Trust(str, Enum):
    UNVERIFIED = "unverified"
    TRUSTED = "trusted"
    FAILED = "failed"
    TAINTED = "tainted"


class Decision(str, Enum):
    ALLOW = "allow"
    BLOCK = "block"
    REQUIRE_APPROVAL = "require_approval"


@dataclass(frozen=True)
class ToolSpec:
    name: str
    risk: Risk
    category: str
    idempotent: bool
    requires_verification: bool


REGISTRY = {s.name: s for s in (
    ToolSpec("read_file", Risk.LOW, "read", True, False),
    ToolSpec("create_file", Risk.MEDIUM, "write", True, True),
    ToolSpec("upload_file", Risk.HIGH, "send", False, True),
    ToolSpec("notify_user", Risk.HIGH, "send", False, True),
    ToolSpec("delete_file", Risk.CRITICAL, "destructive", True, True),
)}


@dataclass
class Proposed:
    step: str
    tool: str
    args: dict
    retry: bool = False


@dataclass
class Finding:
    code: str
    message: str


@dataclass
class ToolResult:
    tool: str
    success: bool
    status: int
    error: str = ""


@dataclass
class Runtime:
    allowed_tools: set
    constraints: dict
    grounded: dict
    required_steps: list
    approvals: set = field(default_factory=set)
    env: dict = field(default_factory=lambda: {"files": {}, "uploads": set(), "notifications": []})
    history: list = field(default_factory=list)
    completed: list = field(default_factory=list)
    failure_labels: list = field(default_factory=list)
    trust: dict = field(default_factory=dict)
    halted: bool = False
    verify_enabled: bool = True
    executed: Counter = field(default_factory=Counter)


def gate(rt, p):
    spec = REGISTRY.get(p.tool)
    if spec is None:
        return Decision.BLOCK, [Finding("hallucinated_action", f"{p.tool} is not registered")]
    out = []
    if p.tool not in rt.allowed_tools:
        out.append(Finding("scope_creep", f"{p.tool} is not allowed for this task"))
    if rt.constraints.get("read_only") and spec.category in ("write", "send", "destructive"):
        out.append(Finding("constraint_violation", "read-only task"))
    for k, v in p.args.items():
        ok = rt.grounded.get(k)
        if ok is not None and v not in ok:
            out.append(Finding("ungrounded_argument", f"{k}={v!r} is not grounded"))
    prior = [h for h in rt.history if h[0] == p.tool and h[1] == p.args]
    if prior and not p.retry:
        out.append(Finding("redundancy", f"{p.tool} repeated"))
    done = set(rt.completed)
    needed = [s for s in rt.required_steps[:rt.required_steps.index(p.step)]] if p.step in rt.required_steps else []
    missing = [s for s in needed if s not in done]
    if missing:
        out.append(Finding("workflow_disorder", f"{p.step} before {missing}"))
    if out:
        return Decision.BLOCK, out
    if spec.risk is Risk.CRITICAL and p.tool not in rt.approvals:
        return Decision.REQUIRE_APPROVAL, [Finding("approval_required", f"{p.tool} is critical")]
    return Decision.ALLOW, []


def execute_tool(rt, p, bug_no_state=False, outage=None):
    rt.executed[p.tool] += 1
    env = rt.env
    path = p.args.get("path", "")
    if outage and p.tool == outage:
        return ToolResult(p.tool, False, 503, "temporary outage")
    if p.tool == "read_file":
        return ToolResult(p.tool, path in env["files"], 200 if path in env["files"] else 404)
    if p.tool == "create_file":
        if path.startswith("/forbidden"):
            return ToolResult(p.tool, False, 400, "invalid path")
        if not bug_no_state:
            env["files"][path] = "content"
        return ToolResult(p.tool, True, 200)
    if p.tool == "upload_file":
        if path not in env["files"]:
            return ToolResult(p.tool, False, 404, "no such file")
        env["uploads"].add(path)
        return ToolResult(p.tool, True, 200)
    if p.tool == "notify_user":
        env["notifications"].append(p.args.get("text", ""))
        return ToolResult(p.tool, True, 200)
    if p.tool == "delete_file":
        env["files"].pop(path, None)
        return ToolResult(p.tool, True, 200)
    return ToolResult(p.tool, False, 500, "unimplemented")


def verify_postcondition(rt, p):
    env, path = rt.env, p.args.get("path", "")
    return {"create_file": lambda: path in env["files"], "upload_file": lambda: path in env["uploads"],
            "notify_user": lambda: p.args.get("text", "") in env["notifications"], "delete_file": lambda: path not in env["files"]}.get(p.tool, lambda: True)()


def run_action(rt, p, **kw):
    if rt.halted:
        return "halted"
    decision, findings = gate(rt, p)
    if decision is not Decision.ALLOW:
        rt.failure_labels += [f.code for f in findings]
        rt.halted = True
        return decision.value
    res = execute_tool(rt, p, **kw)
    rt.history.append((p.tool, p.args))
    if not res.success:
        rt.failure_labels.append("tool_failure")
        rt.trust[p.step] = Trust.FAILED
        rt.halted = True
        return f"tool_failure:{res.status}"
    spec = REGISTRY[p.tool]
    rt.trust[p.step] = Trust.UNVERIFIED
    if spec.requires_verification:
        if rt.verify_enabled and not verify_postcondition(rt, p):
            rt.failure_labels.append("postcondition_failed")
            rt.trust[p.step] = Trust.FAILED
            rt.halted = True
            return "postcondition_failed"
        rt.trust[p.step] = Trust.TRUSTED if rt.verify_enabled else Trust.UNVERIFIED
    else:
        rt.trust[p.step] = Trust.TRUSTED
    rt.completed.append(p.step)
    return "ok"


def verify_task_completion(rt):
    missing = [s for s in rt.required_steps if s not in rt.completed]
    if missing:
        rt.failure_labels += ["omission"] * len(missing)
    return missing


def make_rt(**kw):
    d = dict(allowed_tools={"read_file", "create_file", "upload_file", "notify_user"}, constraints={}, grounded={}, required_steps=["create", "upload", "notify"])
    d.update(kw)
    return Runtime(**d)


def prf(tp, fp, fn):
    p = tp / (tp + fp) if tp + fp else 0.0
    r = tp / (tp + fn) if tp + fn else 0.0
    return p, r, 2 * p * r / (p + r) if p + r else 0.0


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Three runs with executable assertions")
    safe = make_rt()
    for step in (Proposed("create", "create_file", {"path": "report.txt"}), Proposed("upload", "upload_file", {"path": "report.txt"}), Proposed("notify", "notify_user", {"text": "Report ready."})):
        print(f"  {step.step:7} -> {run_action(safe, step)}")
    assert not safe.halted and verify_task_completion(safe) == [] and "report.txt" in safe.env["uploads"] and "Report ready." in safe.env["notifications"]
    print("PASS safe run: three steps verified, nothing halted")
    failed = make_rt()
    for step in (Proposed("create", "create_file", {"path": "/forbidden/report.txt"}), Proposed("upload", "upload_file", {"path": "/forbidden/report.txt"}), Proposed("notify", "notify_user", {"text": "Report ready."})):
        print(f"  {step.step:7} -> {run_action(failed, step)}")
    assert failed.halted and "tool_failure" in failed.failure_labels and not failed.env["uploads"] and failed.env["notifications"] == []
    print("PASS cascade run: the failed create halted the run; uploads", failed.env["uploads"], "notifications", failed.env["notifications"], "executions", dict(failed.executed))
    scoped = make_rt(allowed_tools={"read_file"}, constraints={"read_only": True}, required_steps=["read"])
    scoped.env["files"]["report.txt"] = "x"
    print("  read ->", run_action(scoped, Proposed("read", "read_file", {"path": "report.txt"})))
    scoped.halted = False
    print("  delete ->", run_action(scoped, Proposed("delete", "delete_file", {"path": "report.txt"})), "| labels", scoped.failure_labels)
    assert "scope_creep" in scoped.failure_labels and "report.txt" in scoped.env["files"] and scoped.executed["delete_file"] == 0
    print("PASS scope run: delete_file was proposed, blocked and never executed (execution count", scoped.executed["delete_file"], ")")

    section("2. Genuinely checking: a tool that returns 200 without changing state")
    for verify in (False, True):
        rt = make_rt(); rt.verify_enabled = verify
        r = run_action(rt, Proposed("create", "create_file", {"path": "r.txt"}), bug_no_state=True)
        print(f"postcondition checks {'on ' if verify else 'off'}: result={r:20} file exists={('r.txt' in rt.env['files'])!s:5} step trust={rt.trust.get('create', '-').value if rt.trust.get('create') else '-'} completed steps={rt.completed}")
    print("without the check the run recorded 'create' as complete although no file existed; with it, the 200 was not trusted and the run halted")

    section("3. Genuinely checking: gate decisions on single proposals")
    rt = make_rt(grounded={"path": {"report.txt"}}, allowed_tools={"create_file", "delete_file", "upload_file"})
    cases = [("grounded create", Proposed("create", "create_file", {"path": "report.txt"})), ("fabricated path", Proposed("create", "create_file", {"path": "other.txt"})),
             ("unknown tool", Proposed("x", "teleport_file", {})), ("upload before create", Proposed("upload", "upload_file", {"path": "report.txt"})),
             ("delete without approval", Proposed("delete", "delete_file", {"path": "report.txt"}))]
    for label, p in cases:
        d, f = gate(rt, p)
        print(f"{label:24} {d.value:17} {[x.code for x in f]}")
    rt.approvals.add("delete_file")
    d, _ = gate(rt, Proposed("delete", "delete_file", {"path": "anything-at-all.txt"}))
    print("after approving the TOOL 'delete_file', a delete of a different, ungrounded path ->", d.value)
    print("approving the tool did not let the ungrounded path through: the argument checks run before the approval check, so an approval only matters once every other gate has passed; an approval stored per tool name (as here) would still cover every grounded path of that tool, which is broader than approving one specific action")

    section("4. Genuinely measuring: retries, transient versus permanent failures and idempotency")
    def attempt(fail_times, status, max_attempts=3, base=0.01):
        calls, delays = 0, []
        for n in range(1, max_attempts + 1):
            calls += 1
            if calls > fail_times:
                return "success", calls, delays
            if status == 400:
                return "gave up (permanent)", calls, delays
            if n < max_attempts:
                delays.append(base * 2 ** (n - 1)); time.sleep(delays[-1])
        return "exhausted", calls, delays
    for label, ft, st in (("transient 503 twice", 2, 503), ("transient 503 always", 99, 503), ("permanent 400", 99, 400)):
        r, c, d = attempt(ft, st)
        print(f"{label:22} -> {r:20} attempts={c} backoff delays={[round(x, 3) for x in d]}")
    sent = []
    def notify_lost_response(key=None, dedupe=False):
        if dedupe and key in sent:
            return "duplicate suppressed"
        sent.append(key)
        raise TimeoutError("response lost after the message was accepted")
    for dedupe in (False, True):
        sent.clear()
        for _ in range(3):
            try:
                notify_lost_response("msg-1", dedupe)
            except TimeoutError:
                pass
            except Exception:
                pass
        print(f"retrying a non-idempotent send three times, idempotency key {'used' if dedupe else 'not used'}: messages actually sent = {len(sent)}")
    print("the first send had already succeeded when its response was lost, so blind retries produced three messages; remembering the operation key left one")

    section("5. Genuinely measuring: resuming from the last trusted checkpoint")
    steps = ["understand", "gather", "analyze", "draft", "validate"]
    def run_chain(state, fail_at=None, log=None):
        for i in range(state["next"], len(steps)):
            if fail_at == i:
                raise RuntimeError(f"crash at {steps[i]}")
            log.append(steps[i])
            state["next"] = i + 1
        return state
    log, state = [], {"next": 0}
    try:
        run_chain(state, fail_at=3, log=log)
    except RuntimeError as e:
        print("first run:", log, "|", e)
    saved = dict(state)
    run_chain(saved, log=log)
    print("after resume the steps executed in total:", log, "| 'understand' ran", log.count("understand"), "time(s)")
    log2, state2 = [], {"next": 0}
    try:
        run_chain(state2, fail_at=3, log=log2)
    except RuntimeError:
        pass
    run_chain({"next": 0}, log=log2)
    print("restarting from zero instead: steps executed in total", len(log2), "against", len(log), "with the checkpoint")

    section("6. Genuinely computing: detector precision, recall and F1, and trace versus event counts")
    expected, detected = {"scope_creep", "context_loss", "tool_misuse"}, {"scope_creep", "tool_misuse", "redundancy"}
    tp, fp, fn = len(expected & detected), len(detected - expected), len(expected - detected)
    p, r, f1 = prf(tp, fp, fn)
    print(f"TP={tp} FP={fp} FN={fn} -> precision {p:.3f} recall {r:.3f} F1 {f1:.3f}")
    events = ["redundancy"] * 10
    print(f"one trace repeating the same bad action 10 times: event-level count {len(events)}, trace-level affected traces {1}")
    weights = {"low": 1, "medium": 3, "high": 10, "critical": 50}
    print(f"severity-weighted score: 100 low failures = {100 * weights['low']}, 5 critical failures = {5 * weights['critical']}; the version with fewer failures scores worse")

    section("7. Genuinely measuring: drift needs both an absolute and a relative view")
    base = {"context_loss": 0.02, "tool_misuse": 0.01, "scope_creep": 0.005, "cascade": 0.005}
    cur = {"context_loss": 0.07, "tool_misuse": 0.015, "scope_creep": 0.008, "cascade": 0.006}
    tol = 0.02
    for m in base:
        a = (cur[m] - base[m]) * 100
        print(f"{m:13} baseline {base[m]:.1%} current {cur[m]:.1%} change {a:+.1f} points ({cur[m] / base[m]:.1f}x) alert at +{tol * 100:.0f} points: {a / 100 >= tol}")
    print("a rare mode rising from 0.1% to 0.5% is 5x but only +0.4 points and would never trip a 2-point absolute alert, so a relative rule is needed for rare critical modes")
    rng = random.Random(4)
    noise = [sum(rng.random() < 0.03 for _ in range(100)) / 100 for _ in range(1000)]
    noise.sort()
    print(f"with 100 traces per window and no real change, a 3 percent rate showed between {noise[25]:.1%} and {noise[974]:.1%} (95 percent of windows); the baseline figures above are assumed")


if __name__ == "__main__":
    main()
