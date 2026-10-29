"""Teaching implementation (our own): Voyager Part 1 - the Skill abstraction and executing skill code."""
from dataclasses import dataclass, field


@dataclass
class Skill:
    name: str
    description: str
    code: str
    version: int = 1
    tags: set = field(default_factory=set)
    dependencies: list = field(default_factory=list)


collect_wood = Skill(
    name="collect_wood",
    description="Collect wood logs for crafting",
    code='def collect_wood(state):\n    state["wood"] = state.get("wood", 0) + 4\n    return state\n',
    tags={"resource", "wood"},
)
make_sticks = Skill(
    name="make_sticks",
    description="Turn collected wood into crafting sticks",
    code='def make_sticks(state):\n    state["wood"] -= 1\n    state["sticks"] = state.get("sticks", 0) + 4\n    return state\n',
    tags={"crafting", "wood"},
    dependencies=["collect_wood"],
)
mine_iron = Skill(
    name="mine_iron",
    description="Mine iron ore for advanced tools",
    code='def mine_iron(state):\n    state["iron_ore"] = state.get("iron_ore", 0) + 3\n    return state\n',
    tags={"resource", "mining", "iron"},
)


def load_skill_function(skill: Skill, allowed=None):
    """allowed=None exposes only RuntimeError, so a skill can raise its own feedback; allowed={} is the fully empty namespace."""
    namespace = {}
    builtins = {"RuntimeError": RuntimeError} if allowed is None else allowed
    exec(skill.code, {"__builtins__": builtins}, namespace)
    function = namespace.get(skill.name)
    if function is None:
        raise ValueError(f"Skill {skill.name} did not define a function named {skill.name}")
    return function


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. A skill is metadata plus code")
    for s in (collect_wood, make_sticks, mine_iron):
        print(f"{s.name:<12} v{s.version} tags={sorted(s.tags)} deps={s.dependencies}")
        print(f"             description: {s.description}")

    section("2. Running skills against a state dictionary")
    state = {"wood": 0, "sticks": 0, "iron_ore": 0}
    for s in (collect_wood, make_sticks, mine_iron):
        state = load_skill_function(s)(state)
        print(f"after {s.name:<12} -> {state}")

    section("3. Dataclass defaults are per instance")
    a, b = Skill("a", "d", "c"), Skill("b", "d", "c")
    a.tags.add("only-a")
    a.dependencies.append("x")
    print("a.tags:", a.tags, "| b.tags:", b.tags, "| a.deps:", a.dependencies, "| b.deps:", b.dependencies)

    section("4. The contract: function name must equal skill name")
    bad = Skill("collect_logs", "d", 'def gather(state):\n    return state\n')
    try:
        load_skill_function(bad)
    except ValueError as e:
        print("rejected:", e)

    section("5. Genuinely checking what empty __builtins__ does")
    uses_len = Skill("count_items", "d", 'def count_items(state):\n    state["n"] = len(state)\n    return state\n')
    try:
        load_skill_function(uses_len)({"a": 1})
    except NameError as e:
        print("skill using len() fails:", e)
    raises = Skill("needs_ingots", "d", 'def needs_ingots(state):\n    raise RuntimeError("need 3 iron ingots")\n')
    for label, allowed in (("fully empty builtins", {}), ("RuntimeError allowed ", None)):
        try:
            load_skill_function(raises, allowed)({})
        except Exception as e:
            print(f"{label} -> {type(e).__name__}: {e}")
    uses_print = Skill("shout", "d", 'def shout(state):\n    print("hi")\n    return state\n')
    try:
        load_skill_function(uses_print)({})
    except NameError as e:
        print("skill using print() fails:", e)

    section("6. Genuinely checking whether that is a sandbox")
    probe = Skill("probe", "d", 'def probe(state):\n    state["reachable"] = len(().__class__.__mro__[-1].__subclasses__()) if False else 0\n    return state\n')
    code = 'def probe(state):\n    state["n"] = ().__class__.__mro__[-1].__subclasses__().__len__()\n    return state\n'
    result = load_skill_function(Skill("probe", "d", code))({})
    print("with builtins emptied, the skill still reached", result["n"], "classes through attribute access alone")
    print("so exec with {'__builtins__': {}} limits convenience, it does not isolate untrusted code")


if __name__ == "__main__":
    main()
