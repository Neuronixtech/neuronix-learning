"""Teaching implementation (our own): Tool Use Part 2 - validation, coercion, safe dispatch, timeouts."""
from __future__ import annotations

import ast
import json
import operator
import time
from concurrent.futures import ThreadPoolExecutor, TimeoutError as FutureTimeoutError
from dataclasses import dataclass
from typing import Any, Callable

from toolcall_1 import Tool, ToolCall, ToolRegistry, search_web, build_search_tool


@dataclass(frozen=True)
class ToolResult:
    tool_use_id: str
    tool_name: str
    ok: bool
    output: Any = None
    error_type: str | None = None
    error_message: str | None = None


class ValidationError(ValueError):
    pass


# ---- coercion: narrow, deterministic, unambiguous ------------------------------------------

def coerce_string(value):
    if isinstance(value, str):
        return value
    raise ValidationError(f"expected string, got {type(value).__name__}")


def coerce_integer(value):
    if isinstance(value, bool):
        raise ValidationError("boolean is not accepted as integer")
    if isinstance(value, int):
        return value
    if isinstance(value, str):
        try:
            return int(value.strip())
        except ValueError:
            pass
    raise ValidationError(f"expected integer, got {value!r}")


def coerce_number(value):
    if isinstance(value, bool):
        raise ValidationError("boolean is not accepted as number")
    if isinstance(value, (int, float)):
        return float(value)
    if isinstance(value, str):
        try:
            return float(value.strip())
        except ValueError:
            pass
    raise ValidationError(f"expected number, got {value!r}")


def coerce_boolean(value):
    if isinstance(value, bool):
        return value
    if isinstance(value, str):
        n = value.strip().lower()
        if n == "true":
            return True
        if n == "false":
            return False
    raise ValidationError(f"expected boolean, got {value!r}")


def coerce_object(value):
    if isinstance(value, dict):
        return value
    raise ValidationError(f"expected object, got {type(value).__name__}")


def coerce_array(value):
    if isinstance(value, list):
        return value
    raise ValidationError(f"expected array, got {type(value).__name__}")


COERCERS = {"string": coerce_string, "integer": coerce_integer, "number": coerce_number,
            "boolean": coerce_boolean, "object": coerce_object, "array": coerce_array}


def coerce_type(value, expected_type):
    if expected_type not in COERCERS:
        raise ValidationError(f"unsupported schema type: {expected_type}")
    return COERCERS[expected_type](value)


def validate_enum(value, schema):
    allowed = schema.get("enum")
    if allowed is None:
        return
    if value not in allowed:
        raise ValidationError(f"value {value!r} must be one of: " + ", ".join(repr(a) for a in allowed))


def validate_value(value, schema):
    t = schema.get("type")
    coerced = value if t is None else coerce_type(value, t)
    validate_enum(coerced, schema)
    return coerced


def validate_required_fields(arguments, schema):
    for field in schema.get("required", []):
        if field not in arguments:
            raise ValidationError(f"missing required field: {field}")


def validate_extra_fields(arguments, schema):
    if schema.get("additionalProperties", True):
        return
    extra = set(arguments) - set(schema.get("properties", {}))
    if extra:
        raise ValidationError("unexpected field(s): " + ", ".join(sorted(extra)))


def validate_arguments(arguments, schema):
    if not isinstance(arguments, dict):
        raise ValidationError("tool arguments must be an object")
    if schema.get("type") != "object":
        raise ValidationError("top-level tool schema must be object")
    validate_required_fields(arguments, schema)
    validate_extra_fields(arguments, schema)
    props = schema.get("properties", {})
    validated = {}
    for name, value in arguments.items():
        if name in props:
            try:
                validated[name] = validate_value(value, props[name])
            except ValidationError as exc:
                raise ValidationError(f"field '{name}': {exc}") from None
        else:
            validated[name] = value
    return validated


# ---- tools ----------------------------------------------------------------------------------

CUSTOMERS = {
    101: {"name": "Asha", "status": "open", "balance": 1250.0},
    102: {"name": "Ravi", "status": "closed", "balance": 0.0},
    103: {"name": "Meera", "status": "open", "balance": 875.5},
}


def query_db(customer_id: int, status: str | None = None) -> dict[str, Any]:
    c = CUSTOMERS.get(customer_id)
    if c is None:
        return {"found": False, "customer_id": customer_id}
    if status is not None and c["status"] != status:
        return {"found": False, "customer_id": customer_id, "reason": "status mismatch"}
    return {"found": True, "customer_id": customer_id, "customer": c}


BINARY = {ast.Add: operator.add, ast.Sub: operator.sub, ast.Mult: operator.mul, ast.Div: operator.truediv,
          ast.FloorDiv: operator.floordiv, ast.Mod: operator.mod, ast.Pow: operator.pow}
UNARY = {ast.UAdd: operator.pos, ast.USub: operator.neg}


def evaluate_ast(node):
    if isinstance(node, ast.Expression):
        return evaluate_ast(node.body)
    if isinstance(node, ast.Constant):
        if isinstance(node.value, bool) or not isinstance(node.value, (int, float)):
            raise ValueError("only numeric constants are allowed")
        return node.value
    if isinstance(node, ast.BinOp):
        fn = BINARY.get(type(node.op))
        if fn is None:
            raise ValueError("binary operator is not allowed")
        return fn(evaluate_ast(node.left), evaluate_ast(node.right))
    if isinstance(node, ast.UnaryOp):
        fn = UNARY.get(type(node.op))
        if fn is None:
            raise ValueError("unary operator is not allowed")
        return fn(evaluate_ast(node.operand))
    raise ValueError(f"expression node not allowed: {type(node).__name__}")


def run_python(expression: str) -> dict[str, Any]:
    return {"expression": expression, "result": evaluate_ast(ast.parse(expression, mode="eval"))}


def build_registry() -> ToolRegistry:
    reg = ToolRegistry()
    s = build_search_tool()
    reg.register(Tool(s.name, s.description, {**s.input_schema, "additionalProperties": False}, s.timeout_seconds, s.executor))
    reg.register(Tool(
        "run_python",
        "Evaluate a basic arithmetic expression using a restricted local evaluator. Use for arithmetic only.",
        {"type": "object", "properties": {"expression": {"type": "string"}}, "required": ["expression"], "additionalProperties": False},
        1.0, run_python))
    reg.register(Tool(
        "query_db",
        "Read an internal customer record by numeric customer ID. Read-only.",
        {"type": "object",
         "properties": {"customer_id": {"type": "integer"}, "status": {"type": "string", "enum": ["open", "closed"]}},
         "required": ["customer_id"], "additionalProperties": False},
        1.0, query_db))
    return reg


# ---- dispatch ---------------------------------------------------------------------------------

def execute_with_timeout(executor, arguments, timeout_seconds):
    pool = ThreadPoolExecutor(max_workers=1)
    future = pool.submit(executor, **arguments)
    try:
        return future.result(timeout=timeout_seconds)
    finally:
        pool.shutdown(wait=False, cancel_futures=True)


def execute_tool_call(registry, call: ToolCall, timeout_override: float | None = None) -> ToolResult:
    tool = registry.get(call.name)
    if tool is None:
        return ToolResult(call.tool_use_id, call.name, False, error_type="unknown_tool",
                          error_message=f"tool is not registered: {call.name}")
    try:
        args = validate_arguments(call.arguments, tool.input_schema)
    except ValidationError as exc:
        return ToolResult(call.tool_use_id, call.name, False, error_type="validation_error", error_message=str(exc))
    try:
        out = execute_with_timeout(tool.executor, args, timeout_override or tool.timeout_seconds)
    except FutureTimeoutError:
        return ToolResult(call.tool_use_id, call.name, False, error_type="timeout",
                          error_message=f"tool exceeded timeout of {timeout_override or tool.timeout_seconds} seconds")
    except Exception as exc:
        return ToolResult(call.tool_use_id, call.name, False, error_type="execution_error", error_message=str(exc))
    return ToolResult(call.tool_use_id, call.name, True, output=out)


def result_to_dict(r: ToolResult) -> dict[str, Any]:
    d = {"tool_use_id": r.tool_use_id, "tool": r.tool_name, "ok": r.ok}
    if r.ok:
        d["output"] = r.output
    else:
        d["error"] = {"type": r.error_type, "message": r.error_message}
    return d


def show(r):
    print(json.dumps(result_to_dict(r), sort_keys=True))


def section(t):
    print(f"\n--- {t} ---")


def main():
    reg = build_registry()

    section("1. The six calls: success, coercion, validation failure, unknown tool, execution failure")
    calls = [
        ToolCall("call_001", "search_web", {"query": "capital of France"}),
        ToolCall("call_002", "run_python", {"expression": "125 * 48"}),
        ToolCall("call_003", "query_db", {"customer_id": "101", "status": "open"}),
        ToolCall("call_004", "query_db", {"customer_id": "banana", "status": "pending"}),
        ToolCall("call_005", "send_email", {"to": "someone@example.com", "body": "Hello"}),
        ToolCall("call_006", "run_python", {"expression": "10 / 0"}),
    ]
    for c in calls:
        show(execute_tool_call(reg, c))
    print("call_003 passed the string '101'; the executor received:", reg.get("query_db").executor.__name__, "with customer_id coerced to an int")

    section("2. Narrow coercion: what is repaired and what is rejected")
    cases = [("integer", "42"), ("integer", "banana"), ("integer", True), ("integer", "3.5"), ("integer", 3.0),
             ("number", "5.2"), ("number", "five"), ("boolean", "true"), ("boolean", "yes"), ("string", 123)]
    for t, v in cases:
        try:
            print(f"{t:<8} {v!r:<9} -> {coerce_type(v, t)!r}")
        except ValidationError as exc:
            print(f"{t:<8} {v!r:<9} -> REJECTED: {exc}")

    section("3. Order matters: coerce first, then check the enum")
    schema = {"type": "integer", "enum": [1, 2, 3]}
    print("'2' against enum [1,2,3] without coercion:", "2" in schema["enum"])
    print("after coercion:", validate_value("2", schema))

    section("4. Structured errors a model can act on")
    for args in ({"status": "open"}, {"customer_id": 101, "status": "pending"}, {"customer_id": 101, "admin": True}, "not an object"):
        try:
            validate_arguments(args, reg.get("query_db").input_schema)
        except ValidationError as exc:
            print(f"{args!s:<42} -> {exc}")

    section("5. The restricted calculator")
    for expr in ("12 * (5 + 3)", "-5 + 7", "2 ** 10", "__import__('os').system('echo hi')", "'a' * 3", "True + 1"):
        try:
            print(f"{expr!r:<40} -> {evaluate_ast(ast.parse(expr, mode='eval'))}")
        except ValueError as exc:
            print(f"{expr!r:<40} -> refused: {exc}")

    section("6. The allow-list includes **, and that is a resource problem")
    for expr in ("9**9**5", "9**9**6"):
        t0 = time.perf_counter()
        v = evaluate_ast(ast.parse(expr, mode="eval"))
        print(f"{expr}: computed in {time.perf_counter() - t0:.3f}s, {v.bit_length():,} bits")
    r = execute_tool_call(reg, ToolCall("pow_1", "run_python", {"expression": "9**9**5"}))
    try:
        print("serialising the result as an observation:", len(json.dumps(result_to_dict(r))), "characters")
    except ValueError as exc:
        print("tool call succeeded (ok =", r.ok, ") but json.dumps failed:", exc)
    print("9**9**8 would need about 86 s of CPU on the machine used for this lesson; it was not run")

    section("7. A timeout stops waiting, it does not stop the work")
    done = []

    def slow(n):
        time.sleep(n)
        done.append("finished")
        return "slow result"

    reg2 = ToolRegistry()
    reg2.register(Tool("slow", "sleeps", {"type": "object", "properties": {"n": {"type": "number"}}, "required": ["n"], "additionalProperties": False}, 0.1, slow))
    t0 = time.perf_counter()
    show(execute_tool_call(reg2, ToolCall("t_1", "slow", {"n": 0.6})))
    waited = time.perf_counter() - t0
    print(f"returned after {waited:.2f}s with a timeout error; the 0.6s of work had not finished: {done}")
    time.sleep(0.7)
    print("0.7s later, the abandoned work has now finished:", done)

    section("8. An unexpected argument type reaches the executor only if validation is skipped")
    s = reg.get("search_web")
    try:
        s.executor(query=12345)
    except Exception as exc:
        print("direct call  ->", type(exc).__name__)
    show(execute_tool_call(reg, ToolCall("v_1", "search_web", {"query": 12345})))


if __name__ == "__main__":
    main()
