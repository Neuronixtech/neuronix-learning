"""Teaching implementation (our own): agent failure-mode detector, Part 1 - Event/Trace/Detection, hallucinated actions, scope creep,
failed tools, success hallucination, possible cascades, and the limits of each rule. Traces are hand-written; no model is involved."""
import random
import re
from dataclasses import dataclass, field
from typing import Any, Optional


@dataclass
class Event:
    kind: str
    tool: Optional[str] = None
    args: dict = field(default_factory=dict)
    status: Optional[int] = None
    success: Optional[bool] = None
    text: str = ""


@dataclass
class Trace:
    trace_id: str
    request: str
    known_tools: set
    allowed_tools: set
    constraints: set
    events: list


@dataclass
class Detection:
    mode: str
    reason: str
    event_index: Optional[int] = None


def detect_hallucinated_actions(trace):
    return [Detection("hallucinated_action", f"{e.tool} is not a known tool", i) for i, e in enumerate(trace.events)
            if e.kind == "tool_call" and e.tool not in trace.known_tools]


def detect_scope_creep(trace):
    return [Detection("scope_creep", f"{e.tool} exists but is not allowed for this task", i) for i, e in enumerate(trace.events)
            if e.kind == "tool_call" and e.tool in trace.known_tools and e.tool not in trace.allowed_tools]


def detect_failed_tools(trace):
    return [i for i, e in enumerate(trace.events) if e.kind == "tool_result" and (e.success is False or (e.status is not None and e.status >= 400))]


CLAIMS = ("successfully", "completed", "done", "created", "sent")


def detect_success_hallucination(trace):
    failed = detect_failed_tools(trace)
    out = []
    if not failed:
        return out
    first = failed[0]
    for i, e in enumerate(trace.events):
        if i > first and e.kind == "assistant" and any(c in e.text.lower() for c in CLAIMS):
            out.append(Detection("success_hallucination", "completion claim after a failed tool result", i))
    return out


def detect_possible_cascade(trace):
    failed = detect_failed_tools(trace)
    if not failed:
        return []
    later = [i for i, e in enumerate(trace.events) if i > failed[0] and e.kind == "tool_call"]
    return [Detection("possible_cascade", f"{len(later)} tool call(s) after the first failure", later[0])] if later else []


DETECTORS = (detect_hallucinated_actions, detect_scope_creep, detect_success_hallucination, detect_possible_cascade)


def analyze(trace):
    found = []
    for d in DETECTORS:
        found.extend(d(trace))
    return found


def call(tool, **args):
    return Event("tool_call", tool=tool, args=args)


def result(status=200, success=None):
    return Event("tool_result", status=status, success=success if success is not None else status < 400)


def say(text):
    return Event("assistant", text=text)


T001 = Trace("T001", "Check order ORD-100", {"get_order", "cancel_order"}, {"get_order"}, set(),
             [call("get_order", order_id="ORD-100"), result(200), say("ORD-100 is currently processing.")])
T002 = Trace("T002", "Check order ORD-200", {"get_order", "cancel_order"}, {"get_order"}, set(),
             [call("cancel_order", order_id="ORD-200"), result(200), say("Order cancelled.")])
T003 = Trace("T003", "Reserve the product", {"get_product"}, {"get_product"}, set(),
             [call("reserve_product", sku="SKU-1"), result(404), say("The product was successfully reserved.")])
T004 = Trace("T004", "Create and share the report", {"create_file", "upload_file", "notify_user"}, {"create_file", "upload_file", "notify_user"}, set(),
             [call("create_file", name="report.txt"), result(400), call("upload_file", name="report.txt"), result(404),
              call("notify_user", text="Report ready."), result(200), say("Done. The report was successfully created.")])


def section(t):
    print(f"\n--- {t} ---")


def show(trace):
    found = analyze(trace)
    print(f"{trace.trace_id}: {sorted({d.mode for d in found}) or 'none'}")
    for d in found:
        print(f"    [{d.event_index}] {d.mode}: {d.reason}")


def main():
    section("1. The four demo traces")
    for t in (T001, T002, T003, T004):
        show(t)
    print("one trace can carry several labels: T003 is both a hallucinated action and a success hallucination, T004 a cascade and a success hallucination")

    section("2. Genuinely checking: recovery looks like a cascade and a success hallucination")
    recover = Trace("R1", "Create the report", {"create_file", "verify_file"}, {"create_file", "verify_file"}, set(),
                    [call("create_file", name="r.txt"), result(400), call("create_file", name="r.txt"), result(200),
                     call("verify_file", name="r.txt"), result(200), say("The report was successfully created and verified.")])
    show(recover)
    print("the agent failed, retried, verified and then told the truth, yet both rules fired: they compare the order of events and do not understand recovery")

    section("3. Genuinely measuring: the completion-claim rule against phrasing (hand-written replies after a failed call)")
    base = [call("create_file", name="r.txt"), result(400)]
    replies = [("The file was successfully created.", True), ("Done.", True), ("Finished. Everything is in place.", True), ("All set, your report is ready.", True),
               ("I could not create the file.", False), ("The file was not successfully created.", False), ("Creation failed, so nothing was completed.", False),
               ("Sorry, the file has not been created yet.", False), ("The report exists now.", True), ("Task complete.", True)]
    tp = fn = fp = tn = 0
    rows = []
    for text, is_false_claim in replies:
        tr = Trace("X", "r", {"create_file"}, {"create_file"}, set(), base + [say(text)])
        flagged = bool(detect_success_hallucination(tr))
        tp += flagged and is_false_claim; fn += (not flagged) and is_false_claim; fp += flagged and not is_false_claim; tn += (not flagged) and not is_false_claim
        rows.append((text, is_false_claim, flagged))
    for text, truth, flagged in rows:
        print(f"{text[:48]:50} false claim={truth!s:5} flagged={flagged!s:5} {'ok' if truth == flagged else 'WRONG'}")
    print(f"caught {tp} of {tp + fn} false claims, and wrongly flagged {fp} of {fp + tn} honest replies")
    print("the keyword list misses claims phrased another way ('All set', 'is ready', 'exists now', 'Finished') and flags honest replies that contain a keyword plus a negation ('not successfully', 'nothing was completed'); the 10 replies are written by us, so this shows the failure shape, not a rate")

    section("4. Genuinely checking: tool names, identifiers and what 'known' means")
    t = Trace("N", "Check order ORD-100", {"get_order", "cancel_order"}, {"get_order"}, set(), [call("Get_Order", order_id="ORD-100"), call("get_order ", order_id="ORD-100"), call("get_order", order_id="ORD-900")])
    show(t)
    print("'Get_Order' and 'get_order ' (trailing space) were reported as hallucinated actions although the model meant a real tool; the third call used a fabricated order id and nothing flagged it: structural checks cannot see an ungrounded argument")

    section("5. Genuinely checking: how the failure test treats unusual statuses")
    for status, success in ((200, None), (204, None), (302, None), (400, None), (500, None), (200, False), (None, None), (400, True)):
        tr = Trace("S", "r", {"x"}, {"x"}, set(), [call("x"), Event("tool_result", status=status, success=success)])
        print(f"status={str(status):5} success={str(success):5} -> counted as failed: {bool(detect_failed_tools(tr))}")
    print("either signal is enough to count a result as failed: a 200 that says success=False failed, and so did a 400 that says success=True (the status won); a result with neither signal is never a failure, so a tool that returns nothing useful passes silently")

    section("6. Genuinely measuring: per-step reliability over long chains (arithmetic and a seeded simulation, seed 5)")
    rng = random.Random(5)
    print(f"{'steps':>6} {'p^n':>8} {'simulated':>10}")
    for p, n in ((0.99, 1), (0.99, 10), (0.99, 50), (0.95, 10)):
        N = 20000
        sim = sum(all(rng.random() < p for _ in range(n)) for _ in range(N)) / N
        print(f"p={p} n={n:>3} {p ** n:>7.1%} {sim:>10.1%}")
    print("0.99 per step gives 90.4 percent at 10 steps and 60.5 percent at 50, matching the lesson; this assumes independent steps. If an error makes later steps more likely to fail the whole chain still needs every step right, but failures then cluster in the same runs and one bad run contains many bad actions")
    b, depth = 3, 4
    print(f"cascade amplification: with {b} downstream operations per level, depth {depth} can touch up to {b ** depth} operations (b^d)")

    section("7. Genuinely measuring: a verification gate stops a cascade (T004 replayed)")
    def run_with_gate(trace):
        done = []
        for e in trace.events:
            if e.kind == "tool_call":
                done.append(e.tool)
            if e.kind == "tool_result" and (e.success is False or (e.status or 0) >= 400):
                return done, "stopped at the gate"
        return done, "ran to the end"
    for label, tr in (("T004 without a gate", T004), ("T001 healthy", T001)):
        calls = [e.tool for e in tr.events if e.kind == "tool_call"]
        print(f"{label:22} tool calls made: {len(calls)} {calls}")
    calls, how = run_with_gate(T004)
    print(f"T004 with a gate after each result: tool calls made: {len(calls)} {calls} | {how}")
    print("with the gate the agent never reaches upload_file or notify_user, so the user-facing notification about a report that does not exist is never sent")

    section("8. Genuinely checking: a baseline needs enough traces (failure rate ASSUMED at 3 percent, seed 9)")
    rng = random.Random(9)
    for n in (50, 500, 5000):
        rates = [sum(rng.random() < 0.03 for _ in range(n)) / n for _ in range(1000)]
        rates.sort()
        print(f"{n:>5} traces per day: the observed rate ranged from {rates[25]:.1%} to {rates[974]:.1%} across 95 percent of days with no real change")
    print("with 50 traces a day a 3 percent failure rate wanders between about 0 and 8 percent by chance alone, so an alert on 'drift' needs either more traces or a statistical test, not a fixed threshold")


if __name__ == "__main__":
    main()
