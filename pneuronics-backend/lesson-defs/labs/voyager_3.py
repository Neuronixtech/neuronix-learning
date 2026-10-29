"""Teaching implementation (our own): Voyager Part 3 - execute, fail, diagnose, learn, refine, verify."""
from dataclasses import dataclass
from typing import Optional

from voyager_1 import Skill, collect_wood, load_skill_function, make_sticks, mine_iron
from voyager_2 import SkillLibrary


@dataclass
class ExecutionResult:
    success: bool
    state: dict
    error: Optional[str] = None


def execute_skill(skill: Skill, state: dict) -> dict:
    function = load_skill_function(skill)
    print(f"[execute] {skill.name} v{skill.version}")
    result = function(state)
    if not isinstance(result, dict):
        raise TypeError(f"{skill.name} must return state dict")
    return result


def run_plan(plan, initial_state: dict) -> ExecutionResult:
    state = dict(initial_state)
    try:
        for skill in plan:
            state = execute_skill(skill, state)
        return ExecutionResult(True, state)
    except Exception as exc:
        return ExecutionResult(False, state, f"{type(exc).__name__}: {exc}")


def verify_iron_pickaxe(state: dict):
    if state.get("iron_pickaxe", 0) < 1:
        return False, "No iron pickaxe exists"
    for resource in ("wood", "sticks", "iron_ore", "iron_ingots"):
        if state.get(resource, 0) < 0:
            return False, f"Invalid negative resource: {resource}"
    return True, "Iron pickaxe exists and resource state is valid"


CRAFT_V1_CHECKED = '''def craft_iron_pickaxe(state):
    if state.get("sticks", 0) < 2:
        raise RuntimeError("need at least 2 sticks")
    if state.get("iron_ingots", 0) < 3:
        raise RuntimeError("need 3 iron ingots; mining produced ore, not ingots")
    state["sticks"] -= 2
    state["iron_ingots"] -= 3
    state["iron_pickaxe"] = state.get("iron_pickaxe", 0) + 1
    return state
'''
CRAFT_UNCHECKED = '''def craft_iron_pickaxe(state):
    state["sticks"] -= 2
    state["iron_ingots"] -= 3
    state["iron_pickaxe"] = state.get("iron_pickaxe", 0) + 1
    return state
'''
SMELT = '''def smelt_iron(state):
    if state.get("iron_ore", 0) < 3:
        raise RuntimeError("need 3 iron ore to smelt")
    state["iron_ore"] -= 3
    state["iron_ingots"] = state.get("iron_ingots", 0) + 3
    return state
'''
START = {"wood": 0, "sticks": 0, "iron_ore": 0, "iron_ingots": 0, "iron_pickaxe": 0}


class LearningLibrary(SkillLibrary):
    def refine(self, skill_name, *, new_code=None, new_description=None, new_dependencies=None, new_tags=None):
        if skill_name not in self.skills:
            raise KeyError(f"Cannot refine missing skill: {skill_name}")
        old = self.skills[skill_name]
        refined = Skill(name=old.name, description=old.description if new_description is None else new_description,
                        code=old.code if new_code is None else new_code, version=old.version + 1,
                        tags=set(old.tags) if new_tags is None else set(new_tags),
                        dependencies=list(old.dependencies) if new_dependencies is None else list(new_dependencies))
        self.skills[skill_name] = refined
        print(f"[library] refined {skill_name}: v{old.version} -> v{refined.version}")
        return refined


def propose_next_task(library: SkillLibrary) -> str:
    names = set(library.skills)
    for needed, task in (("collect_wood", "Learn to collect wood"), ("make_sticks", "Learn to make sticks"),
                         ("mine_iron", "Learn to mine iron"), ("smelt_iron", "Learn to smelt iron ore"),
                         ("craft_iron_pickaxe", "Learn to craft an iron pickaxe")):
        if needed not in names:
            return task
    return "Explore a harder task using existing skills"


def diagnose(error: str) -> Optional[str]:
    if error and "iron ingots" in error and "ore" in error:
        return "smelt_iron"
    return None


def section(t):
    print(f"\n--- {t} ---")


def main():
    lib = LearningLibrary()
    for s in (collect_wood, make_sticks, mine_iron):
        lib.register(s)
    craft = Skill("craft_iron_pickaxe", "Craft an iron pickaxe using iron and crafting sticks", CRAFT_V1_CHECKED,
                  tags={"crafting", "tool", "iron"}, dependencies=["make_sticks", "mine_iron"])
    lib.register(craft)

    section("1. Attempt 1: compose and execute")
    plan = lib.compose("craft_iron_pickaxe")
    print("plan:", [f"{s.name} v{s.version}" for s in plan])
    r1 = run_plan(plan, START)
    print("success:", r1.success)
    print("error  :", r1.error)
    print("state  :", r1.state)

    section("2. Diagnose the failure as a capability gap")
    print("curriculum before:", propose_next_task(lib))
    gap = diagnose(r1.error)
    print("capability gap detected:", gap)
    smelt = Skill("smelt_iron", "Smelt mined iron ore into iron ingots for crafting", SMELT, tags={"crafting", "iron", "smelting"}, dependencies=["mine_iron"])
    lib.register(smelt)
    print("curriculum after :", propose_next_task(lib))

    section("3. Refine the parent, recompose, execute attempt 2")
    lib.refine("craft_iron_pickaxe", new_dependencies=["make_sticks", "smelt_iron"])
    plan2 = lib.compose("craft_iron_pickaxe")
    print("plan:", [f"{s.name} v{s.version}" for s in plan2])
    r2 = run_plan(plan2, START)
    print("success:", r2.success, "| state:", r2.state)

    section("4. Verification is separate from execution")
    print("verify:", verify_iron_pickaxe(r2.state))
    reuse = len(plan2) - 1
    print(f"reused {reuse} of {len(plan2)} skills in the plan -> reuse rate {reuse / len(plan2):.0%}")

    section("5. Genuinely checking: runtime success without the preconditions")
    unchecked = LearningLibrary()
    for s in (collect_wood, make_sticks, mine_iron):
        unchecked.register(s)
    unchecked.register(Skill("craft_iron_pickaxe", "Craft an iron pickaxe", CRAFT_UNCHECKED, dependencies=["make_sticks", "mine_iron"]))
    r3 = run_plan(unchecked.compose("craft_iron_pickaxe"), START)
    print("success:", r3.success, "| state:", r3.state)
    print("verify with only the goal check :", r3.state.get("iron_pickaxe", 0) >= 1)
    print("verify with the invariant check :", verify_iron_pickaxe(r3.state))

    section("6. Genuinely checking: what refine() kept")
    print("versions held for craft_iron_pickaxe:", [lib.skills["craft_iron_pickaxe"].version], "(v1 is gone, there is no history to roll back to)")
    print("v2 code identical to v1 code:", lib.skills["craft_iron_pickaxe"].code == CRAFT_V1_CHECKED, "(the fix was in the graph, not the code)")

    section("7. Genuinely checking: the diagnosis is a string match")
    for err in ("RuntimeError: need 3 iron ingots; mining produced ore, not ingots", "RuntimeError: need 3 iron ingot(s), got ore", "RuntimeError: out of iron"):
        print(f"{err!r:<70} -> {diagnose(err)}")

    section("8. Genuinely checking: what the fully empty namespace does to the feedback")
    state = dict(START)
    for s in lib.compose("make_sticks") + [lib.skills["mine_iron"]]:
        state = load_skill_function(s, {})(state)
    craft_v1 = Skill("craft_iron_pickaxe", "d", CRAFT_V1_CHECKED)
    try:
        load_skill_function(craft_v1, {})(state)
    except Exception as e:
        err = f"{type(e).__name__}: {e}"
        print("fully empty builtins ->", err)
        print("diagnosis from that message:", diagnose(err), "(the useful message never appeared)")

    section("9. Genuinely checking: skill code that needs other builtins")
    lib.register(Skill("count_wood", "Count the wood", 'def count_wood(state):\n    state["n"] = sum([state.get("wood", 0)])\n    return state\n'))
    r4 = run_plan([lib.skills["count_wood"]], START)
    print("success:", r4.success, "|", r4.error)


if __name__ == "__main__":
    main()
