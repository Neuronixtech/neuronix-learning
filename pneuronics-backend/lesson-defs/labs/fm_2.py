"""Teaching implementation (our own): failure-mode detectors, Part 2 - grounding, constraints, redundancy, omission, disorder, recovery-aware
success claims and dependency-based cascades, plus the limits of each rule. Traces are hand-written or seeded simulations; no model is involved."""
import random
from collections import Counter
from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Event:
    kind: str
    step: Optional[str] = None
    tool: Optional[str] = None
    args: dict = field(default_factory=dict)
    status: Optional[int] = None
    success: Optional[bool] = None
    text: str = ""
    consumes: list = field(default_factory=list)
    metadata: dict = field(default_factory=dict)


@dataclass
class Trace:
    trace_id: str
    request: str
    known_tools: set
    allowed_tools: set
    read_tools: set = field(default_factory=set)
    write_tools: set = field(default_factory=set)
    send_tools: set = field(default_factory=set)
    destructive_tools: set = field(default_factory=set)
    constraints: dict = field(default_factory=dict)
    grounded_values: dict = field(default_factory=dict)
    required_steps: list = field(default_factory=list)
    events: list = field(default_factory=list)


@dataclass
class Detection:
    mode: str
    reason: str
    event_index: Optional[int] = None
    severity: str = "medium"
    evidence: dict = field(default_factory=dict)


def calls(trace):
    return [(i, e) for i, e in enumerate(trace.events) if e.kind == "tool_call"]


def is_failed(e):
    return e.kind == "tool_result" and (e.success is False or (e.status is not None and e.status >= 400))


def is_ok(e):
    return e.kind == "tool_result" and not is_failed(e)


def detect_hallucinated_actions(t):
    return [Detection("hallucinated_action", f"{e.tool} is not a known tool", i, "high", {"tool": e.tool}) for i, e in calls(t) if e.tool not in t.known_tools]


def detect_scope_creep(t):
    out = []
    for i, e in calls(t):
        if e.tool not in t.known_tools:
            continue
        if e.tool not in t.allowed_tools:
            sev = "critical" if e.tool in t.destructive_tools or e.tool in t.send_tools else "high"
            out.append(Detection("scope_creep", f"{e.tool} is outside the allowed tools", i, sev, {"tool": e.tool}))
    return out


def detect_ungrounded_arguments(t):
    out = []
    for i, e in calls(t):
        for name, value in e.args.items():
            allowed = t.grounded_values.get(name)
            if allowed is not None and value not in allowed:
                out.append(Detection("tool_misuse", f"argument {name} is not grounded", i, "high", {"argument": name, "observed": value, "grounded": sorted(allowed)}))
    return out


def detect_constraint_violations(t):
    out = []
    for i, e in calls(t):
        if t.constraints.get("read_only") and e.tool in t.write_tools:
            out.append(Detection("context_loss", f"{e.tool} writes in a read-only task", i, "high", {"constraint": "read_only"}))
        if t.constraints.get("allow_send") is False and e.tool in t.send_tools:
            out.append(Detection("context_loss", f"{e.tool} sends although sending is not allowed", i, "critical", {"constraint": "allow_send"}))
    return out


def signature(e):
    return (e.tool, tuple(sorted(e.args.items())))


def detect_redundancy(t):
    out, seen = [], set()
    for i, e in calls(t):
        sig = signature(e)
        if sig in seen and not e.metadata.get("retry"):
            out.append(Detection("redundancy", f"{e.tool} repeated with identical arguments", i, "medium", {"signature": str(sig)}))
        seen.add(sig)
    return out


def detect_omission(t):
    observed = [e.step for e in t.events if e.kind == "tool_call" and e.step]
    return [Detection("omission", f"required step {r} never happened", None, "high", {"required_step": r}) for r in t.required_steps if r not in observed]


def detect_disorder(t):
    observed = [e.step for e in t.events if e.kind == "tool_call" and e.step in t.required_steps]
    first = {}
    for k, s in enumerate(observed):
        first.setdefault(s, k)
    out = []
    for a_i, a in enumerate(t.required_steps):
        for b in t.required_steps[a_i + 1:]:
            if a in first and b in first and first[b] < first[a]:
                out.append(Detection("disorder", f"{b} ran before {a}", None, "high", {"expected": f"{a} then {b}"}))
    return out


def detect_success_hallucination(t, matched=False):
    failed = [i for i, e in enumerate(t.events) if is_failed(e)]
    if not failed:
        return []
    last = failed[-1]
    if matched:
        # a later success counts as recovery only if the same tool was called again and succeeded
        failed_tool = t.events[last - 1].tool if last > 0 else None
        recovered = any(t.events[j].kind == "tool_call" and t.events[j].tool == failed_tool and j + 1 < len(t.events) and is_ok(t.events[j + 1]) for j in range(last + 1, len(t.events)))
    else:
        recovered = any(is_ok(e) for e in t.events[last + 1:])
    if recovered:
        return []
    return [Detection("success_hallucination", "completion claim although the last failure was never recovered", i, "high") for i, e in enumerate(t.events)
            if i > last and e.kind == "assistant" and any(w in e.text.lower() for w in ("success", "done", "created", "sent", "completed"))]


def descendants_of(t, source):
    desc = set()
    changed = True
    while changed:
        changed = False
        for i, e in enumerate(t.events):
            if i not in desc and (source in e.consumes or desc & set(e.consumes)):
                desc.add(i)
                changed = True
    return desc


def detect_cascades(t):
    out = []
    for i, e in enumerate(t.events):
        if is_failed(e):
            tainted_calls = [j for j in descendants_of(t, i) if t.events[j].kind == "tool_call"]
            if tainted_calls:
                out.append(Detection("cascading_error", f"{len(tainted_calls)} tool call(s) depend on the failed result at event {i}", tainted_calls[0], "critical", {"source": i, "downstream": sorted(tainted_calls)}))
    return out


DETECTORS = (detect_hallucinated_actions, detect_scope_creep, detect_ungrounded_arguments, detect_constraint_violations, detect_redundancy,
             detect_omission, detect_disorder, detect_success_hallucination, detect_cascades)


def analyze(t):
    out = []
    for d in DETECTORS:
        out.extend(d(t))
    return out


def call(tool, step=None, consumes=(), **args):
    return Event("tool_call", step=step, tool=tool, args=args, consumes=list(consumes))


def res(status=200, consumes=()):
    return Event("tool_result", status=status, success=status < 400, consumes=list(consumes))


def say(text, consumes=()):
    return Event("assistant", text=text, consumes=list(consumes))


def base(tid, **kw):
    d = dict(trace_id=tid, request="", known_tools={"get_order", "cancel_order", "read_file", "write_file", "send_email", "create_file", "upload_file", "notify_user", "send_invoice", "backup", "delete", "run_tests", "build", "validate_build", "deploy", "health_check"},
             allowed_tools=set())
    d.update(kw)
    return Trace(**d)


SYNTH = [
    ("NORMAL-001", set(), base("NORMAL-001", allowed_tools={"get_order"}, grounded_values={"order_id": {"ORD-200"}},
                               events=[call("get_order", order_id="ORD-200"), res(200), say("ORD-200 is processing.")])),
    ("MISUSE-001", {"tool_misuse"}, base("MISUSE-001", allowed_tools={"get_order"}, grounded_values={"order_id": {"ORD-200"}},
                                          events=[call("get_order", order_id="ORD-900"), res(200), say("Order found.")])),
    ("CONTEXT-001", {"context_loss", "scope_creep"}, base("CONTEXT-001", allowed_tools={"read_file"}, write_tools={"write_file"}, constraints={"read_only": True},
                                                          events=[call("read_file", path="a.txt"), res(200), call("write_file", path="a.txt"), res(200)])),
    ("REDUNDANCY-001", {"redundancy"}, base("REDUNDANCY-001", allowed_tools={"send_invoice"},
                                            events=[call("send_invoice", invoice="INV-100"), res(200), call("send_invoice", invoice="INV-100"), res(200)])),
    ("DISORDER-001", {"disorder"}, base("DISORDER-001", allowed_tools={"backup", "delete"}, required_steps=["backup", "delete"],
                                        events=[call("delete", step="delete"), res(200), call("backup", step="backup"), res(400)])),
    ("OMISSION-001", {"omission"}, base("OMISSION-001", allowed_tools={"run_tests", "build", "deploy", "health_check"}, required_steps=["test", "build", "validate", "deploy", "verify"],
                                        events=[call("run_tests", step="test"), res(), call("build", step="build"), res(), call("deploy", step="deploy"), res(), call("health_check", step="verify"), res()])),
    ("CASCADE-001", {"cascading_error", "success_hallucination"}, base("CASCADE-001", allowed_tools={"create_file", "upload_file", "notify_user"},
                                                                       events=[call("create_file", name="r.txt"), res(400, [0]), call("upload_file", consumes=[1]), res(404, [2]), call("notify_user", consumes=[3]), res(200, [4]),
                                                                               say("Done. The report was successfully created.")])),
]


def section(t):
    print(f"\n--- {t} ---")


def prf(tp, fp, fn):
    p = tp / (tp + fp) if tp + fp else 0.0
    r = tp / (tp + fn) if tp + fn else 0.0
    return p, r, (2 * p * r / (p + r) if p + r else 0.0)


def main():
    section("1. The seven synthetic traces: expected labels against detected labels")
    tp = fp = fn = 0
    print(f"{'trace':16} {'expected':40} {'detected':40}")
    for tid, expected, t in SYNTH:
        got = {d.mode for d in analyze(t)}
        tp += len(expected & got); fp += len(got - expected); fn += len(expected - got)
        print(f"{tid:16} {str(sorted(expected)):40} {str(sorted(got)):40} {'ok' if got == expected else 'MISMATCH'}")
    print("precision %.2f recall %.2f f1 %.2f on the 7 traces" % prf(tp, fp, fn))
    print("CASCADE-001 is a genuine mismatch: the success-claim detector did not fire, because notify_user returned 200 after the failures and the simple recovery rule counts any later success as recovery (section 6 shows the fix). On traces we wrote ourselves, even this small set exposed a flaw; the rest of the lab looks for inputs the rules were not written for")

    section("2. Genuinely checking: grounding by equality rejects a correctly derived value")
    t = base("G", allowed_tools={"refund_order"}, known_tools={"refund_order"}, grounded_values={"amount": {100.0}},
             events=[call("refund_order", amount=50.0), res(200)])
    print("request 'refund half of the $100 charge', agent sends amount=50.0 ->", [(d.mode, d.reason) for d in detect_ungrounded_arguments(t)])
    t2 = base("G2", allowed_tools={"refund_order"}, known_tools={"refund_order"}, grounded_values={"amount": {100.0, 50.0}}, events=[call("refund_order", amount=5000.0), res(200)])
    print("a grounded set that also lists 50.0 still catches amount=5000.0 ->", [d.reason for d in detect_ungrounded_arguments(t2)])
    t3 = base("G3", allowed_tools={"get_order"}, events=[call("get_order", order_id="ORD-900"), res(200)])
    print("the same fabricated id with no grounding rule defined ->", detect_ungrounded_arguments(t3))
    print("equality is a false positive on derived values and silent when nobody wrote a rule for the argument; provenance (where a value came from) is what separates 50 from 5000")

    section("3. Genuinely checking: retry versus redundancy")
    for label, evs in (("identical repeat, no retry flag", [call("send_invoice", invoice="INV-1"), res(200), call("send_invoice", invoice="INV-1"), res(200)]),
                       ("identical repeat after a timeout, retry flagged", [call("send_invoice", invoice="INV-1"), res(504), Event("tool_call", tool="send_invoice", args={"invoice": "INV-1"}, metadata={"retry": True}), res(200)]),
                       ("retry flag on a call that follows a SUCCESS", [call("send_invoice", invoice="INV-1"), res(200), Event("tool_call", tool="send_invoice", args={"invoice": "INV-1"}, metadata={"retry": True}), res(200)]),
                       ("same tool, different recipients", [call("send_invoice", invoice="INV-1"), res(200), call("send_invoice", invoice="INV-2"), res(200)])):
        print(f"{label:48} -> {[d.mode for d in detect_redundancy(base('R', allowed_tools={'send_invoice'}, events=evs))] or 'none'}")
    print("the retry flag is whatever the agent or orchestrator wrote: the third case is a duplicate send that the rule excuses because it never checks that the earlier attempt actually failed")

    section("4. Genuinely checking: a list of required steps cannot express steps that may run in either order")
    t = base("D", required_steps=["retrieve", "validate_a", "validate_b", "combine"],
             events=[call("x", step="retrieve"), call("x", step="validate_b"), call("x", step="validate_a"), call("x", step="combine")])
    print("validate_b before validate_a (both are required before combine, order between them is free) ->", [d.reason for d in detect_disorder(t)])
    print("a flat list turned a legal concurrent order into 'disorder'; a partial order (A before C, B before C) is the right model")
    t = base("O", required_steps=["test", "validate", "deploy"], events=[call("x", step="test"), call("x", step="validate"), call("x", step="deploy")])
    t.events[1] = call("noop", step="validate")
    print("an agent that labels a no-op as step 'validate' ->", [d.mode for d in detect_omission(t)] or "no omission reported")
    print("omission detection trusts the step label the agent or planner attached; it cannot tell that nothing was validated")

    section("5. Genuinely checking: temporal order versus the dependency graph for cascades")
    evs_unrelated = [call("create_file", consumes=[]), res(400, [0]), call("log_cleanup", consumes=[]), res(200, [2])]
    evs_dependent = [call("create_file"), res(400, [0]), call("upload_file", consumes=[1]), res(404, [2])]
    evs_unannotated = [call("create_file"), res(400, [0]), call("upload_file"), res(404)]
    for label, evs in (("later unrelated call (consumes nothing)", evs_unrelated), ("later call consuming the failed result", evs_dependent), ("same dependency but 'consumes' not recorded", evs_unannotated)):
        t = base("C", events=evs)
        part1 = bool([i for i, e in enumerate(evs) if i > 1 and e.kind == "tool_call"])
        print(f"{label:46} Part 1 rule (any later call): {part1!s:5} | dependency rule: {bool(detect_cascades(t))}")
    print("the dependency rule ignores unrelated cleanup, but it is only as good as the 'consumes' annotations, so a missing edge hides a real cascade")

    section("6. Genuinely checking: which success counts as recovery")
    mixed = base("S", events=[call("create_file"), res(400), call("get_weather"), res(200), say("The file was successfully created.")])
    for matched in (False, True):
        print(f"matched recovery={matched!s:5}: {[d.mode for d in detect_success_hallucination(mixed, matched)] or 'no false claim reported'}")
    recovered = base("S2", events=[call("create_file"), res(400), call("create_file"), res(200), say("The file was successfully created.")])
    print("a genuine retry of the same tool:", [d.mode for d in detect_success_hallucination(recovered, True)] or "correctly not flagged")
    cas = SYNTH[6][2]
    print("CASCADE-001 with matched recovery:", sorted({d.mode for d in analyze(cas)} | {d.mode for d in detect_success_hallucination(cas, True)}))
    print("an unrelated success (get_weather, or notify_user in CASCADE-001) cleared the claim under the simple rule; matching the recovery to the failed tool caught it, and still only checks tool names, not that the file exists")

    section("7. Genuinely measuring: failure distribution and drift on seeded simulated traffic (mix ASSUMED)")
    def distribution(mix, n, seed):
        rng = random.Random(seed)
        c = Counter()
        modes = list(mix)
        for _ in range(n):
            r, acc = rng.random(), 0.0
            for m in modes:
                acc += mix[m]
                if r < acc:
                    c[m] += 1
                    break
        return {m: c[m] / n for m in modes}
    base_mix = {"context_loss": 0.012, "tool_misuse": 0.020, "scope_creep": 0.004, "cascading_error": 0.006}
    new_mix = {"context_loss": 0.049, "tool_misuse": 0.021, "scope_creep": 0.004, "cascading_error": 0.006}
    b = distribution(base_mix, 20000, 1)
    c = distribution(new_mix, 20000, 2)
    print(f"{'mode':18} {'baseline':>9} {'current':>9} {'abs change':>11} {'relative':>9}")
    for m in base_mix:
        print(f"{m:18} {b[m]:>9.2%} {c[m]:>9.2%} {(c[m] - b[m]) * 100:>+10.2f}p {c[m] / b[m] if b[m] else float('inf'):>8.1f}x")
    print("the total failure rate moved from about 4 to about 8 percent, but the table shows it is context loss that quadrupled while the others stayed put; the traffic mix is assumed, the comparison method is the point")


if __name__ == "__main__":
    main()
