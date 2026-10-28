"""Teaching implementation (our own): the environment/tool side of the Agent Loop, Part 1.

Builds the STORE, three tools, the ToolRegistry as the lesson first writes it, a hardened
registry, an observation formatter and a growing message buffer. No LLM, no network.
"""
import operator

STORE = {"city_count": "17", "project_status": "testing", "price": "125"}

OPERATORS = {"+": operator.add, "-": operator.sub, "*": operator.mul, "/": operator.truediv}


def calculator(left, op, right):
    if op not in OPERATORS:
        return f"ERROR: unsupported operator: {op}"
    try:
        return OPERATORS[op](float(left), float(right))
    except Exception as exc:
        return f"ERROR: {exc}"


def kv_get(key):
    if key not in STORE:
        return f"ERROR: key '{key}' not found"
    return STORE[key]


def kv_set(key, value):
    STORE[key] = value
    return f"stored {key}={value}"


class ToolRegistry:
    """As written in the lesson: unknown names are handled, other failures are NOT."""

    def __init__(self):
        self.tools = {}

    def register(self, name, func):
        self.tools[name] = func

    def call(self, name, **kwargs):
        if name not in self.tools:
            return f"ERROR: unknown tool: {name}"
        return self.tools[name](**kwargs)


class HardenedRegistry(ToolRegistry):
    """Our addition: every failure becomes an observation string."""

    def call(self, name, **kwargs):
        if name not in self.tools:
            return f"ERROR: unknown tool: {name}"
        try:
            return self.tools[name](**kwargs)
        except TypeError as exc:
            return f"ERROR: invalid arguments for {name}: {exc}"
        except Exception as exc:
            return f"ERROR: {exc}"


def format_observation(tool_name, result):
    return f"{tool_name} returned: {result}"


def build(registry_cls):
    r = registry_cls()
    r.register("calculator", calculator)
    r.register("kv_store.get", kv_get)
    r.register("kv_store.set", kv_set)
    return r


def section(title):
    print(f"\n--- {title} ---")


def main():
    registry = build(ToolRegistry)

    section("1. Registered capabilities")
    for name in registry.tools:
        print(" ", name)

    section("2. The three tools, called through the registry")
    price = registry.call("kv_store.get", key="price")
    print("kv_store.get(price)        ->", repr(price))
    total = registry.call("calculator", left=price, op="*", right=1.18)
    print("calculator(125 * 1.18)     ->", repr(total))
    print("calculator(10 / 0)         ->", repr(registry.call("calculator", left=10, op="/", right=0)))
    print("calculator(2 ^ 3)          ->", repr(registry.call("calculator", left=2, op="^", right=3)))
    print("kv_store.get(missing)      ->", repr(registry.call("kv_store.get", key="missing")))

    section("3. A state-changing tool")
    print("before:", registry.call("kv_store.get", key="project_status"))
    print(registry.call("kv_store.set", key="project_status", value="complete"))
    print("after :", registry.call("kv_store.get", key="project_status"))

    section("4. Unknown tool becomes an observation, not a crash")
    print(registry.call("database.destroy_everything"))

    section("5. The lesson's ToolRegistry.call() with wrong argument names")
    try:
        registry.call("kv_store.get", wrong_argument="price")
        print("no exception")
    except Exception as exc:
        print(f"UNCAUGHT {type(exc).__name__}: {exc}")

    section("6. Hardened registry: the same bad call")
    hardened = build(HardenedRegistry)
    print(hardened.call("kv_store.get", wrong_argument="price"))
    print(hardened.call("calculator", left="abc", op="+", right=1))

    section("7. Observation formatter")
    print(format_observation("calculator", total))
    print(format_observation("kv_store.get", price))

    section("8. A growing message buffer")
    messages = []
    messages.append({"role": "user", "content": "Read the stored price and calculate price * 1.18."})
    messages.append({"role": "tool", "name": "kv_store.get", "content": str(price)})
    messages.append({"role": "tool", "name": "calculator", "content": str(total)})
    for i, m in enumerate(messages, 1):
        print(f"{i}. {m['role']:<5} {m.get('name', '-'):<13} {m['content']}")
    print("length:", len(messages))


if __name__ == "__main__":
    main()
