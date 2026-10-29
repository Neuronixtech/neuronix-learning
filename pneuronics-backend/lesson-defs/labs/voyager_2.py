"""Teaching implementation (our own): Voyager Part 2 - SkillLibrary: register, dedupe, search, compose."""
import re
from typing import Optional

from voyager_1 import Skill, collect_wood, make_sticks, mine_iron


def tokenize(text: str) -> set:
    return set(re.findall(r"[a-z0-9_]+", text.lower()))


def token_similarity(a: str, b: str) -> float:
    ta, tb = tokenize(a), tokenize(b)
    if not ta or not tb:
        return 0.0
    return len(ta & tb) / len(ta | tb)


def searchable_text(skill: Skill) -> str:
    return " ".join([skill.name.replace("_", " "), skill.description, " ".join(sorted(skill.tags))])


class SkillLibrary:
    def __init__(self):
        self.skills = {}

    def find_duplicate(self, skill: Skill, threshold: float = 0.75) -> Optional[Skill]:
        for existing in self.skills.values():
            if token_similarity(skill.description, existing.description) >= threshold:
                return existing
        return None

    def register(self, skill: Skill, deduplicate: bool = True) -> Skill:
        if skill.name in self.skills:
            raise ValueError(f"Skill already registered: {skill.name}")
        if deduplicate:
            duplicate = self.find_duplicate(skill)
            if duplicate is not None:
                print(f"[library] duplicate candidate {skill.name} -> {duplicate.name}")
                return duplicate
        self.skills[skill.name] = skill
        print(f"[library] registered {skill.name} v{skill.version}")
        return skill

    def search(self, query: str, top_k: int = 3, required_tags: Optional[set] = None):
        scored = []
        for skill in self.skills.values():
            if required_tags and not required_tags.issubset(skill.tags):
                continue
            score = token_similarity(query, searchable_text(skill))
            if score > 0:
                scored.append((score, skill))
        scored.sort(key=lambda item: item[0], reverse=True)
        return scored[:top_k]

    def compose(self, skill_name: str):
        ordered, visiting, visited = [], set(), set()

        def visit(name: str) -> None:
            if name in visited:
                return
            if name in visiting:
                raise ValueError(f"Dependency cycle detected at {name}")
            if name not in self.skills:
                raise KeyError(f"Missing skill dependency: {name}")
            visiting.add(name)
            skill = self.skills[name]
            for dependency in skill.dependencies:
                visit(dependency)
            visiting.remove(name)
            visited.add(name)
            ordered.append(skill)

        visit(skill_name)
        return ordered

    def describe(self) -> None:
        print("=== Skill Library ===")
        for skill in sorted(self.skills.values(), key=lambda s: s.name):
            deps = ", ".join(skill.dependencies) or "-"
            tags = ", ".join(sorted(skill.tags)) or "-"
            print(f"{skill.name} v{skill.version} | deps=[{deps}] | tags=[{tags}]")


craft_iron_pickaxe = Skill(
    name="craft_iron_pickaxe",
    description="Craft an iron pickaxe using iron and crafting sticks",
    code='def craft_iron_pickaxe(state):\n    state["sticks"] -= 2\n    state["iron_ingots"] -= 3\n    state["iron_pickaxe"] = state.get("iron_pickaxe", 0) + 1\n    return state\n',
    tags={"crafting", "tool", "iron"},
    dependencies=["make_sticks", "mine_iron"],
)


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Registering the primitives")
    lib = SkillLibrary()
    for s in (collect_wood, make_sticks, mine_iron):
        lib.register(s)
    lib.describe()

    section("2. Name collisions are refused, semantic duplicates are merged")
    try:
        lib.register(Skill("collect_wood", "anything", "x"))
    except ValueError as e:
        print("same name  ->", e)
    dup = lib.register(Skill("gather_wood", "Collect wood logs for crafting", "x"))
    print("identical description returned:", dup.name, "| library size:", len(lib.skills))
    same_meaning = Skill("harvest_wood", "Harvest timber from nearby trees", "x")
    print("similarity of 'harvest timber' to collect_wood:", token_similarity(same_meaning.description, collect_wood.description))
    lib.register(same_meaning)
    print("library size now:", len(lib.skills), "(a true duplicate with different words slipped through)")

    section("3. Genuinely checking the dedupe threshold for a false merge")
    a = "Mine iron ore safely using a pickaxe"
    b = "Mine diamond ore safely using a pickaxe"
    print(f"{a!r} vs {b!r}")
    print("similarity:", token_similarity(a, b), "| threshold 0.75 ->", "merged" if token_similarity(a, b) >= 0.75 else "kept apart")
    lib2 = SkillLibrary()
    lib2.register(Skill("mine_iron_safely", a, "x"))
    got = lib2.register(Skill("mine_diamond_safely", b, "x"))
    print("second skill was returned as:", got.name, "-> two different capabilities collapsed into one")

    section("4. Retrieval: search surface is name + description + tags")
    lib.register(craft_iron_pickaxe)
    for q in ("mine iron for advanced tools", "need wood for crafting", "build a shelter by the lake"):
        print(f"{q!r:<34} ->", [(round(s, 3), k.name) for s, k in lib.search(q)] or "no match")
    print("with required_tags={'mining'}:", [(round(s, 3), k.name) for s, k in lib.search("iron tools", required_tags={"mining"})])

    section("5. Composition: dependencies first, shared ones once")
    print("craft_iron_pickaxe ->", [s.name for s in lib.compose("craft_iron_pickaxe")])
    lib3 = SkillLibrary()
    for name, deps in (("cut_wood", []), ("make_wall", ["cut_wood"]), ("make_roof", ["cut_wood"]), ("build_base", ["make_wall", "make_roof"])):
        lib3.skills[name] = Skill(name, name, "x", dependencies=deps)
    print("build_base ->", [s.name for s in lib3.compose("build_base")], "(cut_wood appears once)")

    section("6. Composition errors are explicit")
    lib3.skills["build_castle"] = Skill("build_castle", "castle", "x", dependencies=["cut_stone"])
    try:
        lib3.compose("build_castle")
    except KeyError as e:
        print("missing dependency ->", e.args[0])
    lib3.skills["skill_a"] = Skill("skill_a", "a", "x", dependencies=["skill_b"])
    lib3.skills["skill_b"] = Skill("skill_b", "b", "x", dependencies=["skill_a"])
    try:
        lib3.compose("skill_a")
    except ValueError as e:
        print("cycle              ->", e)

    section("7. Genuinely checking: a valid plan is not a working plan")
    plan = lib.compose("craft_iron_pickaxe")
    produced = {"collect_wood": "wood", "make_sticks": "sticks", "mine_iron": "iron_ore"}
    needed_by_craft = ["sticks", "iron_ingots"]
    print("plan:", [s.name for s in plan])
    print("outputs the plan provides:", sorted(produced.values()))
    print("inputs craft_iron_pickaxe reads:", needed_by_craft)
    print("inputs nobody produces:", [n for n in needed_by_craft if n not in produced.values()])
    print("compose() checked structure only, the missing iron_ingots producer is invisible to it")


if __name__ == "__main__":
    main()
