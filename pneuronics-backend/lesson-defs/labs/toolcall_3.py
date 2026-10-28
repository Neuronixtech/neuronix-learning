"""Teaching implementation (our own): Tool Use Part 3 - parallel calls, routing, dynamic agent, state-based evaluation."""
from __future__ import annotations

import json
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass
from typing import Any

from toolcall_1 import Tool, ToolCall, ToolRegistry, lexical_similarity
from toolcall_2 import ToolResult, build_registry, execute_tool_call, result_to_dict

TASKS: dict[int, dict[str, Any]] = {}
NEXT_TASK_ID = 1
CREATE_DELAY = 0.0


def create_task(title: str) -> dict[str, Any]:
    global NEXT_TASK_ID
    time.sleep(CREATE_DELAY)
    task_id = NEXT_TASK_ID
    NEXT_TASK_ID += 1
    TASKS[task_id] = {"id": task_id, "title": title, "completed": False}
    return {"created": True, "task": TASKS[task_id]}


def task_exists(title: str) -> bool:
    return any(t["title"] == title for t in TASKS.values())


def reset_tasks():
    global NEXT_TASK_ID
    TASKS.clear()
    NEXT_TASK_ID = 1


def full_registry() -> ToolRegistry:
    reg = build_registry()
    reg.register(Tool("create_task", "Create a new local task with a title. This changes task-store state.",
                      {"type": "object", "properties": {"title": {"type": "string"}}, "required": ["title"], "additionalProperties": False},
                      1.0, create_task))
    return reg


def validate_call_ids(calls):
    seen = set()
    for c in calls:
        if c.tool_use_id in seen:
            raise ValueError(f"duplicate tool_use_id: {c.tool_use_id}")
        seen.add(c.tool_use_id)


def execute_parallel(registry, calls, max_workers=4):
    if not calls:
        return []
    validate_call_ids(calls)
    results = []
    with ThreadPoolExecutor(max_workers=min(max_workers, len(calls))) as pool:
        future_to_call = {pool.submit(execute_tool_call, registry, c): c for c in calls}
        for fut in as_completed(future_to_call):
            results.append(fut.result())
    return results


def restore_call_order(calls, results):
    by_id = {r.tool_use_id: r for r in results}
    return [by_id[c.tool_use_id] for c in calls]


@dataclass(frozen=True)
class RouteDecision:
    tool_name: str | None
    score: float
    reason: str


def route_tool(registry, query, threshold=0.15):
    best, best_score = None, 0.0
    for tool in registry.all_tools():
        s = lexical_similarity(query, tool.description)
        if s > best_score:
            best, best_score = tool.name, s
    if best is None or best_score < threshold:
        return RouteDecision(None, round(best_score, 3), "no registered tool matched strongly enough")
    return RouteDecision(best, round(best_score, 3), "best lexical match")


def run_customer_agent(registry, customer_id):
    state = {"customer_id": customer_id, "customer": None, "ten_percent": None, "completed": False, "reason": None}
    trace = []
    r = execute_tool_call(registry, ToolCall("agent_lookup", "query_db", {"customer_id": customer_id}))
    trace.append(f"query_db({customer_id}) -> {'ok' if r.ok else r.error_type}")
    if not r.ok:
        state["reason"] = "customer lookup failed"
        return state, trace
    out = r.output
    if not out["found"]:
        state["reason"] = "customer not found; no balance invented"
        return state, trace
    state["customer"] = out["customer"]
    if out["customer"]["status"] != "open":
        state.update(completed=True, reason="account is not open; no calculation needed")
        return state, trace
    expr = f"{out['customer']['balance']} * 0.10"
    r2 = execute_tool_call(registry, ToolCall("agent_calc", "run_python", {"expression": expr}))
    trace.append(f"run_python({expr!r}) -> {r2.output['result'] if r2.ok else r2.error_type}")
    if r2.ok:
        state.update(ten_percent=r2.output["result"], completed=True, reason="goal completed")
    return state, trace


def section(t):
    print(f"\n--- {t} ---")


def main():
    global CREATE_DELAY
    reg = full_registry()

    section("1. Parallel calls with different delays: completion order versus request order")
    delays = {"A": 0.30, "B": 0.05, "C": 0.15}

    def delayed(label):
        time.sleep(delays[label])
        return f"result for {label}"

    dreg = ToolRegistry()
    dreg.register(Tool("lookup", "delayed lookup", {"type": "object", "properties": {"label": {"type": "string"}}, "required": ["label"], "additionalProperties": False}, 2.0, delayed))
    calls = [ToolCall(f"call_00{i}", "lookup", {"label": l}) for i, l in enumerate("ABC", 1)]
    t0 = time.perf_counter()
    results = execute_parallel(dreg, calls)
    wall = time.perf_counter() - t0
    print("request order   :", [c.tool_use_id for c in calls], "(all the same tool name: 'lookup')")
    print("completion order:", [r.tool_use_id for r in results])
    print("restored order  :", [r.tool_use_id for r in restore_call_order(calls, results)])
    print("mapping         :", {r.tool_use_id: r.output for r in results})
    print(f"wall time {wall:.2f}s against {sum(delays.values()):.2f}s sequential")

    section("2. Duplicate correlation ids are rejected")
    try:
        execute_parallel(dreg, [calls[0], ToolCall("call_001", "lookup", {"label": "B"})])
    except ValueError as exc:
        print("ValueError:", exc)

    section("3. Routing and abstention (lexical stand-in for a semantic router)")
    queries = ["Search public factual information about France", "Use arithmetic to calculate a numeric result",
               "Read an internal customer record", "Write a poem about rain",
               "multiply 15 and 20", "Delete customer 101"]
    for q in queries:
        d = route_tool(reg, q)
        print(f"{q:<48} -> {d.tool_name or 'NO_TOOL':<12} score={d.score}")
    print("'multiply 15 and 20' has no word in common with the calculator description, so a lexical router abstains where a semantic one would route")
    print("'Delete customer 101' routes to the read-only query_db because 'customer' matches: the verb is not considered")

    section("4. A dynamic agent: the second call exists only because of the first observation")
    for cid in (103, 102, 999):
        state, trace = run_customer_agent(reg, cid)
        print(f"customer {cid}: {state['reason']}")
        for line in trace:
            print("    ", line)
        print("     ten_percent:", state["ten_percent"], "| completed:", state["completed"])

    section("5. State-based evaluation: the call succeeded, did the world change?")
    reset_tasks()
    wanted = "Review quarterly report"
    r = execute_tool_call(reg, ToolCall("state_001", "create_task", {"title": wanted}))
    print("tool result ok:", r.ok, "| postcondition task_exists:", task_exists(wanted))
    reset_tasks()
    r = execute_tool_call(reg, ToolCall("state_002", "create_task", {"title": "Quarterly report"}))
    print("wrong title    -> tool result ok:", r.ok, "| postcondition for the REQUESTED title:", task_exists(wanted))

    section("6. A timed-out call whose work still happened")
    reset_tasks()
    CREATE_DELAY = 0.3
    r = execute_tool_call(reg, ToolCall("state_003", "create_task", {"title": "Timed out task"}), timeout_override=0.1)
    print("observation:", r.error_type, "|", r.error_message)
    print("immediately after, task exists:", task_exists("Timed out task"))
    time.sleep(0.5)
    print("0.5s later, task exists:", task_exists("Timed out task"), "| a blind retry would now create a duplicate")
    CREATE_DELAY = 0.0

    section("7. Is create_task thread-safe? 4000 parallel calls, 16 workers")
    reset_tasks()
    with ThreadPoolExecutor(max_workers=16) as pool:
        futures = [pool.submit(create_task, f"task {i}") for i in range(4000)]
        ids = [f.result()["task"]["id"] for f in futures]
    print("calls:", len(ids), "| distinct ids returned:", len(set(ids)), "| tasks stored:", len(TASKS), "| last NEXT_TASK_ID:", NEXT_TASK_ID)
    print("read-modify-write on a shared counter is a race by construction; whether this run showed it depends on the interpreter's scheduling")

    section("8. Per-step reliability compounds (independence assumed: NOT a benchmark)")
    for p, n in ((0.98, 10), (0.98, 20), (0.98, 40), (0.99, 40)):
        print(f"per-step {p} x {n:>2} steps = {p ** n:.3f}")


if __name__ == "__main__":
    main()
