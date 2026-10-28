"""Teaching implementation (our own): Tool Use and Function Calling Part 1 - Tool, ToolCall, ToolRegistry."""
from __future__ import annotations

import json
import re
from dataclasses import dataclass
from typing import Any, Callable


@dataclass(frozen=True)
class Tool:
    name: str
    description: str
    input_schema: dict[str, Any]
    timeout_seconds: float
    executor: Callable[..., Any]


@dataclass(frozen=True)
class ToolCall:
    tool_use_id: str
    name: str
    arguments: dict[str, Any]


class ToolRegistry:
    def __init__(self) -> None:
        self._tools: dict[str, Tool] = {}

    def register(self, tool: Tool) -> None:
        if tool.name in self._tools:
            raise ValueError(f"tool already registered: {tool.name}")
        self._tools[tool.name] = tool

    def get(self, name: str) -> Tool | None:
        return self._tools.get(name)

    def all_tools(self) -> list[Tool]:
        return list(self._tools.values())

    def schemas(self) -> list[dict[str, Any]]:
        return [{"name": t.name, "description": t.description, "input_schema": t.input_schema} for t in self._tools.values()]


FACTS = {
    "gdp of france": "France has one of Europe's largest national economies.",
    "capital of france": "Paris is the capital of France.",
    "capital of india": "New Delhi is the capital of India.",
    "python creator": "Python was created by Guido van Rossum.",
}


def search_web(query: str) -> dict[str, Any]:
    normalized = query.strip().lower()
    for key, value in FACTS.items():
        if key in normalized:
            return {"found": True, "query": query, "answer": value}
    return {"found": False, "query": query, "answer": None}


def tokenize(text: str) -> set[str]:
    return set(re.findall(r"[a-z0-9_]+", text.lower()))


def lexical_similarity(query: str, description: str) -> float:
    q, d = tokenize(query), tokenize(description)
    return len(q & d) / len(q) if q else 0.0


def build_search_tool() -> Tool:
    return Tool(
        name="search_web",
        description=("Search a local factual index for public factual information. Use this when the request asks "
                     "for facts rather than arithmetic or internal records."),
        input_schema={"type": "object", "properties": {"query": {"type": "string"}}, "required": ["query"]},
        timeout_seconds=2.0,
        executor=search_web,
    )


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Toolformer's filter: keep a call only if its result lowers the loss")
    for label, without, with_ in (("sqrt(144) example", 3.2, 0.4), ("unneeded calculator call", 0.15, 0.16)):
        delta = without - with_
        print(f"{label:<26} L_without={without} L_with={with_} delta={delta:+.2f} -> {'KEEP' if delta > 0 else 'DISCARD'}")

    section("2. Registry behaviour")
    reg = ToolRegistry()
    reg.register(build_search_tool())
    print("get('search_web') ->", type(reg.get("search_web")).__name__)
    print("get('does_not_exist') ->", reg.get("does_not_exist"))
    try:
        reg.register(build_search_tool())
    except ValueError as exc:
        print("duplicate registration -> ValueError:", exc)

    section("3. What the model sees (schemas()) and what it must not")
    print(json.dumps(reg.schemas(), indent=1))
    print("executor present in the model-facing view:", "executor" in json.dumps(reg.schemas()))
    t = reg.get("search_web")
    try:
        t.name = "evil_tool"
    except Exception as exc:
        print("frozen dataclass blocks mutation ->", type(exc).__name__)

    section("4. Executing model output directly: the failure Part 2 prevents")
    for args in ({"query": "capital of France"}, {"query": 12345}, {}):
        try:
            print(f"{args!s:<28} -> {t.executor(**args)}")
        except Exception as exc:
            print(f"{args!s:<28} -> {type(exc).__name__}: {exc}")

    section("5. Python type hints are not enforced at call time")
    def query_db(customer_id: int, status: str = "open"):
        return {"customer_id": customer_id, "status": status}
    print("query_db(customer_id='banana', status=99) ->", query_db(customer_id="banana", status=99))

    section("6. Description quality drives lexical routing")
    vague = {"tool_a": "does stuff", "tool_b": "does things", "helper": "helper"}
    good = {"search_web": "search public internet sources for current external facts",
            "run_python": "restricted arithmetic calculation of numeric results",
            "query_db": "read internal customer records such as orders and balances"}
    for q in ("search public facts about France", "calculate a numeric result", "read internal customer records"):
        sv = {k: round(lexical_similarity(q, v), 2) for k, v in vague.items()}
        sg = {k: round(lexical_similarity(q, v), 2) for k, v in good.items()}
        print(f"query: {q}")
        print("   vague descriptions:", sv)
        print("   good descriptions :", sg)

    section("7. Reliability arithmetic (independence assumed: NOT a benchmark)")
    print("route x arguments x execution x interpretation = 0.98 x 0.96 x 0.99 x 0.97 =", round(0.98 * 0.96 * 0.99 * 0.97, 3))
    for p, n in ((0.98, 10), (0.98, 20), (0.98, 30), (0.98, 40), (0.99, 40)):
        print(f"per-step {p} over {n:>2} steps -> {p ** n:.3f}")

    section("8. BFCL V4 weights quoted in the lesson")
    weights = {"Agentic": 40, "Multi-Turn": 30, "Live": 10, "Non-Live": 10, "Hallucination": 10}
    for k, v in weights.items():
        print(f"{k:<14}{v:>3}%  {'#' * (v // 2)}")
    print("sum:", sum(weights.values()))


if __name__ == "__main__":
    main()
