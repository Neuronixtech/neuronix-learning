"""Teaching implementation (our own): Mastra-shaped Part 2 in Python - schema-checked tools, deterministic workflow, model routing, composite storage.
The lesson's TypeScript/Zod code is not run here (no TypeScript toolchain); the same ideas are rebuilt with a small hand-written schema."""
import random
import time
from dataclasses import dataclass
from typing import Any, Callable

from agno_1 import FAKE_WEATHER, get_weather


class SchemaError(Exception):
    pass


def check_field(path, spec, value):
    kind = spec["type"]
    if kind == "string":
        if not isinstance(value, str):
            raise SchemaError(f"{path}: expected string, got {type(value).__name__}")
        if spec.get("min_len") and len(value.strip()) < spec["min_len"]:
            raise SchemaError(f"{path}: shorter than {spec['min_len']}")
        if spec.get("enum") and value.lower() not in spec["enum"]:
            raise SchemaError(f"{path}: {value!r} not one of {sorted(spec['enum'])}")
    elif kind == "int":
        if isinstance(value, bool) or not isinstance(value, int):
            raise SchemaError(f"{path}: expected int, got {type(value).__name__}")
        if "min" in spec and value < spec["min"] or "max" in spec and value > spec["max"]:
            raise SchemaError(f"{path}: {value} outside [{spec.get('min')}, {spec.get('max')}]")
    return value


@dataclass
class TypedTool:
    name: str
    input_schema: dict
    handler: Callable[..., Any]

    def execute(self, args):
        if not isinstance(args, dict):
            raise SchemaError(f"input: expected object, got {type(args).__name__}")
        extra = set(args) - set(self.input_schema)
        if extra:
            raise SchemaError(f"input: unexpected fields {sorted(extra)}")
        for key, spec in self.input_schema.items():
            if key not in args:
                raise SchemaError(f"{key}: required")
            check_field(key, spec, args[key])
        return self.handler(**args)


weather = TypedTool("get_weather", {"city": {"type": "string", "min_len": 1, "enum": set(FAKE_WEATHER)}}, get_weather)


def workflow(args, tool=weather):
    """validate -> execute tool -> format; every step is code, so the same input always takes the same path."""
    log = []
    log.append("validate"); city = args.get("city") if isinstance(args, dict) else None
    log.append("tool"); result = tool.execute(args)
    log.append("format"); return f"{city.title()}: {result}", log


class Provider:
    def __init__(self, name, cost, latency, fail_rate, quality, rng):
        self.name, self.cost, self.latency, self.fail_rate, self.quality, self.rng = name, cost, latency, fail_rate, quality, rng
        self.calls = 0

    def complete(self, prompt):
        self.calls += 1
        if self.rng.random() < self.fail_rate:
            raise TimeoutError(f"{self.name} timed out")
        return f"[{self.name}] answer to: {prompt[:20]}"


class Router:
    def __init__(self, providers, mode="primary"):
        self.providers, self.mode = providers, mode

    def pick(self, prompt):
        if self.mode == "cost":
            return [self.providers["small"] if len(prompt) < 40 else self.providers["large"]]
        if self.mode == "capability":
            hard = any(w in prompt.lower() for w in ("prove", "analyse", "analyze", "design"))
            return [self.providers["large"] if hard else self.providers["small"]]
        if self.mode == "fallback":
            return [self.providers["large"], self.providers["small"]]
        return [self.providers["large"]]

    def complete(self, prompt):
        last = None
        for p in self.pick(prompt):
            try:
                return p.complete(prompt), p.name
            except TimeoutError as e:
                last = e
        raise last


class SessionDB:
    def __init__(self):
        self.data = {}

    def save(self, k, v):
        self.data[k] = v


class TraceDB:
    def __init__(self, down=False):
        self.rows, self.down = [], down

    def append(self, row):
        if self.down:
            raise ConnectionError("trace store unavailable")
        self.rows.append(row)


class CompositeStore:
    def __init__(self, sessions, traces, isolate_traces):
        self.sessions, self.traces, self.isolate = sessions, traces, isolate_traces

    def commit(self, sid, messages, trace):
        if self.isolate:
            try:
                self.traces.append(trace)
            except ConnectionError:
                pass
            self.sessions.save(sid, messages)
        else:
            self.traces.append(trace)
            self.sessions.save(sid, messages)


def section(t):
    print(f"\n--- {t} ---")


def attempt(label, fn):
    try:
        print(f"{label:46} {fn()}")
    except Exception as e:
        print(f"{label:46} {type(e).__name__}: {e}")


def main():
    section("1. Schema at the tool boundary")
    for label, args in (("valid", {"city": "Mumbai"}), ("missing city", {}), ("number instead of string", {"city": 123}), ("unknown city", {"city": "Pune"}),
                        ("empty string", {"city": ""}), ("extra field", {"city": "Delhi", "units": "F"}), ("not an object", "Delhi"), ("None", None)):
        attempt(f"{label}", lambda a=args: weather.execute(a))

    section("2. Genuinely checking: a type hint is not a boundary")
    attempt("get_weather(123) with only a hint", lambda: get_weather(123))
    attempt("same value through the schema", lambda: weather.execute({"city": 123}))
    print("the hint did not stop 123; it failed inside the function with an AttributeError that names no field, while the schema named 'city' and the expected type")
    print("isinstance(True, int) is", isinstance(True, int), "- the schema checks bool first, otherwise True would pass as an integer:")
    count = {"type": "int", "min": 1, "max": 5}
    for v in (3, True, "3", 3.0, 0, 6):
        try:
            check_field("n", count, v); out = "accepted"
        except SchemaError as e:
            out = f"rejected ({e})"
        print(f"  n={v!r:6} -> {out}")
    print("a model often emits numbers as strings; strict validation rejects '3', while coercing would hide how often the model got the type wrong")

    section("3. Workflow: same input, same path (1000 runs)")
    paths = {tuple(workflow({"city": "Delhi"})[1]) for _ in range(1000)}
    outs = {workflow({"city": "Delhi"})[0] for _ in range(1000)}
    print("distinct step paths:", len(paths), "| distinct outputs:", len(outs), "|", outs)
    try:
        workflow({"city": "Pune"})
    except SchemaError as e:
        print("bad input stops at the schema:", e)
    rng = random.Random(11)
    agent_paths = {}
    for _ in range(1000):
        r = rng.random()
        path = ("tool:get_weather",) if r < 0.80 else ("answer-without-tool",) if r < 0.92 else ("tool:get_weather", "tool:get_weather") if r < 0.97 else ("clarify",)
        agent_paths[path] = agent_paths.get(path, 0) + 1
    print("an agent whose choice is random (probabilities ASSUMED, seed 11, not measured from a real model):")
    for k, v in sorted(agent_paths.items(), key=lambda kv: -kv[1]):
        print(f"  {v:>4}  {' -> '.join(k)}")
    print("the workflow's single path is a property of the code; the agent's spread is an assumption standing in for model variability")

    section("4. Model routing modes (simulated providers, seed 5)")
    for mode in ("primary", "cost", "capability"):
        rng = random.Random(5)
        provs = {"large": Provider("large", 10, 0.8, 0.0, 0.9, rng), "small": Provider("small", 1, 0.2, 0.0, 0.6, rng)}
        router = Router(provs, mode)
        used = {"large": 0, "small": 0}
        prompts = ["hi", "What is 2+2?", "Please design a retry policy for payment webhooks with idempotency keys", "prove that the sum of two even numbers is even",
                   "ok thanks", "Summarise this paragraph about weather in Delhi and Mumbai please now"]
        for p in prompts:
            used[router.complete(p)[1]] += 1
        cost = used["large"] * 10 + used["small"] * 1
        print(f"{mode:10} large={used['large']} small={used['small']} relative cost={cost}")
    print("capability routing used the large model for 'design' and 'prove' by keyword; the long summarise request went to large under length-based cost routing even though it is easy")
    print("routing decides which model answers; it does not make any model more capable")

    section("5. Genuinely measuring: fallback routing (assumed 30 percent primary failure rate, seed 9)")
    n = 5000
    for mode in ("primary", "fallback"):
        rng = random.Random(9)
        provs = {"large": Provider("large", 10, 0.8, 0.30, 0.9, rng), "small": Provider("small", 1, 0.2, 0.30, 0.6, rng)}
        router = Router(provs, mode)
        ok, small_answers = 0, 0
        for i in range(n):
            try:
                _, who = router.complete(f"request {i}")
                ok += 1; small_answers += who == "small"
            except TimeoutError:
                pass
        calls = provs["large"].calls + provs["small"].calls
        print(f"{mode:9} success {ok / n:.1%} | provider calls {calls} | answered by the weaker model {small_answers}")
    print("with independent 30 percent failures the success rate rises from 70 to about 90 percent (0.7 + 0.3 x 0.7 = 91 percent expected), at the price of some answers coming from the weaker model; real provider outages are correlated, so treat this as the best case")

    section("6. Genuinely checking: composite storage and the observability store")
    for isolate in (False, True):
        sessions, traces = SessionDB(), TraceDB(down=True)
        store = CompositeStore(sessions, traces, isolate)
        try:
            store.commit("s1", [{"role": "user", "content": "hi"}], {"trace": 1})
            result = "request completed"
        except ConnectionError as e:
            result = f"request failed: {e}"
        print(f"isolate_traces={isolate!s:5} trace store down -> {result} | session saved: {'s1' in sessions.data}")
    print("when the trace write came first and was not isolated, an outage in the observability store lost the user's session update")
    t0 = time.perf_counter()
    big = TraceDB()
    for i in range(200_000):
        big.append({"span": i, "attrs": "x" * 20})
    print(f"append-only trace rows are cheap: 200000 rows in {time.perf_counter() - t0:.2f}s, while sessions stay tiny: that asymmetry is the argument for separate stores")


if __name__ == "__main__":
    main()
