module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321529",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Skill Libraries and Lifelong Learning: Voyager (Part 2 of 3) — Registration, Retrieval and Composition",
 "titleKn": "Skill Libraries ಮತ್ತು Lifelong Learning: Voyager (ಭಾಗ 2 / 3) — ನೋಂದಣಿ, ಪಡೆಯುವಿಕೆ ಮತ್ತು ಸಂಯೋಜನೆ",
 "desc": "Build a SkillLibrary with dedupe on write, tag-filtered retrieval and dependency-first composition with cycle and missing-dependency detection, and find that lexical dedupe both misses and over-merges and that a valid plan can lack a producer.",
 "descKn": "Write ನಲ್ಲಿ ನಕಲು ತೆಗೆಯುವಿಕೆ, tag-ಫಿಲ್ಟರ್ ಪಡೆಯುವಿಕೆ ಮತ್ತು ಚಕ್ರ ಹಾಗೂ ಕಾಣೆಯಾದ-ಅವಲಂಬನೆ ಪತ್ತೆ ಇರುವ ಅವಲಂಬನೆ-ಮೊದಲ ಸಂಯೋಜನೆಯ SkillLibrary ನಿರ್ಮಿಸಿ, ಮತ್ತು ಪದ-ಆಧಾರಿತ ನಕಲು ತೆಗೆಯುವಿಕೆ ತಪ್ಪಿಸುತ್ತದೆ ಹಾಗೂ ಅತಿಯಾಗಿ ವಿಲೀನಗೊಳಿಸುತ್ತದೆ, ಮಾನ್ಯ ಯೋಜನೆಗೆ ಉತ್ಪಾದಕ ಇಲ್ಲದಿರಬಹುದು ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Implement registration that refuses name clashes and merges near-duplicates.",
  "Implement tag-filtered retrieval over a name, description and tags search surface.",
  "Implement depth-first composition with cycle and missing-dependency errors.",
  "Explain why retrieval and composition are separate.",
  "Identify the limits of lexical dedupe and structural validation."
 ],
 "objectivesKn": [
  "ಹೆಸರಿನ ಘರ್ಷಣೆ ನಿರಾಕರಿಸಿ ಹತ್ತಿರದ ನಕಲುಗಳನ್ನು ವಿಲೀನಗೊಳಿಸುವ ನೋಂದಣಿ ಅಳವಡಿಸಿ.",
  "name, description ಮತ್ತು tags ಹುಡುಕಾಟ ಮೇಲ್ಮೈ ಮೇಲೆ tag-ಫಿಲ್ಟರ್ ಪಡೆಯುವಿಕೆ ಅಳವಡಿಸಿ.",
  "ಚಕ್ರ ಮತ್ತು ಕಾಣೆಯಾದ-ಅವಲಂಬನೆ ದೋಷಗಳಿರುವ ಆಳ-ಮೊದಲ ಸಂಯೋಜನೆ ಅಳವಡಿಸಿ.",
  "ಪಡೆಯುವಿಕೆ ಮತ್ತು ಸಂಯೋಜನೆ ಪ್ರತ್ಯೇಕ ಏಕೆ ಎಂದು ವಿವರಿಸಿ.",
  "ಪದ-ಆಧಾರಿತ ನಕಲು ತೆಗೆಯುವಿಕೆ ಮತ್ತು ರಚನಾತ್ಮಕ ಮಾನ್ಯತೆಯ ಮಿತಿಗಳನ್ನು ಗುರುತಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Skill Libraries and Lifelong Learning: Voyager (Part 2 of 3)",
    "textKn": "Skill Libraries ಮತ್ತು Lifelong Learning: Voyager (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: the SkillLibrary: registration, deduplication, retrieval and dependency-first composition. Every output below was genuinely produced by the lab file on Python 3.14.5. The pasted source was cut off at section 126, so the closing metrics section is summarised from context. Retrieval is token overlap, a stand-in for embeddings. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: SkillLibrary: ನೋಂದಣಿ, ನಕಲು ತೆಗೆಯುವಿಕೆ, ಪಡೆಯುವಿಕೆ ಮತ್ತು ಅವಲಂಬನೆ-ಮೊದಲ ಸಂಯೋಜನೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಅಂಟಿಸಿದ ಮೂಲ ವಿಭಾಗ 126 ರಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ ಮುಕ್ತಾಯ ಮೆಟ್ರಿಕ್ ವಿಭಾಗವನ್ನು ಸಂದರ್ಭದಿಂದ ಸಂಕ್ಷೇಪಿಸಲಾಗಿದೆ. ಪಡೆಯುವಿಕೆ token ಅತಿಕ್ರಮಣ, embeddings ಗೆ ಬದಲಿ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Library as Procedural Memory Manager",
    "textKn": "ವಿಧಾನ ಮೆಮೊರಿ ನಿರ್ವಾಹಕನಾಗಿ ಸಂಗ್ರಹ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why Registration Is a Boundary",
    "headingKn": "ನೋಂದಣಿ ಒಂದು ಗಡಿ ಏಕೆ",
    "bodyEn": "A skill should not become durable because a model generated it. The safe order is generate, validate, execute, verify, then register. Registration is also where two problems are caught. A name collision means the caller is trying to overwrite a capability, which should go through refine(). A semantic duplicate, such as collect_wood, gather_wood and harvest_wood, makes retrieval noisy and composition ambiguous: skill-library rot. The library therefore refuses name clashes and merges near-duplicates by description similarity.",
    "bodyKn": "ಮಾದರಿ ಉತ್ಪಾದಿಸಿದ್ದರಿಂದ ಮಾತ್ರ skill ಸ್ಥಿರವಾಗಬಾರದು. ಸುರಕ್ಷಿತ ಕ್ರಮ: ಉತ್ಪಾದಿಸಿ, ಮಾನ್ಯ ಮಾಡಿ, ಚಲಾಯಿಸಿ, ಪರಿಶೀಲಿಸಿ, ನಂತರ ನೋಂದಾಯಿಸಿ. ನೋಂದಣಿಯಲ್ಲಿ ಎರಡು ಸಮಸ್ಯೆಗಳು ಸಿಗುತ್ತವೆ. ಹೆಸರಿನ ಘರ್ಷಣೆ ಎಂದರೆ ಕರೆಯುವವರು ಸಾಮರ್ಥ್ಯವನ್ನು ಬದಲಿಸಲು ಪ್ರಯತ್ನಿಸುತ್ತಿದ್ದಾರೆ, ಅದು refine() ಮೂಲಕ ಹೋಗಬೇಕು. collect_wood, gather_wood ಮತ್ತು harvest_wood ನಂತಹ semantic ನಕಲು ಪಡೆಯುವಿಕೆ ಗದ್ದಲ ಮತ್ತು ಸಂಯೋಜನೆ ಅಸ್ಪಷ್ಟಗೊಳಿಸುತ್ತದೆ: skill-library rot. ಆದ್ದರಿಂದ ಸಂಗ್ರಹ ಹೆಸರಿನ ಘರ್ಷಣೆ ನಿರಾಕರಿಸಿ, description ಹೋಲಿಕೆಯಿಂದ ಹತ್ತಿರದ ನಕಲುಗಳನ್ನು ವಿಲೀನಗೊಳಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Search, Then Compose",
    "headingKn": "ಹುಡುಕಿ, ನಂತರ ಸಂಯೋಜಿಸಿ",
    "bodyEn": "Retrieval asks which skill is relevant; composition asks which prerequisites it needs. They are separate. Search compares the query with a search surface built from name, description and tags, not the code, because code adds noise such as def and return. Tags act as a hard filter before similarity. Composition then resolves the dependency graph with a depth-first walk that appends a skill only after its dependencies, uses a visited set so shared dependencies appear once, and a visiting set to detect cycles. Missing dependencies and cycles raise specific errors instead of silently producing an incomplete plan.",
    "bodyKn": "ಪಡೆಯುವಿಕೆ ಯಾವ skill ಸಂಬಂಧಿತ ಎಂದು ಕೇಳುತ್ತದೆ; ಸಂಯೋಜನೆ ಅದಕ್ಕೆ ಯಾವ ಪೂರ್ವಾಪೇಕ್ಷಿತಗಳು ಬೇಕು ಎಂದು ಕೇಳುತ್ತದೆ. ಅವು ಪ್ರತ್ಯೇಕ. ಹುಡುಕಾಟ ಪ್ರಶ್ನೆಯನ್ನು name, description ಮತ್ತು tags ನಿಂದ ಮಾಡಿದ ಹುಡುಕಾಟ ಮೇಲ್ಮೈಯೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ, ಕೋಡ್ ಅಲ್ಲ, ಏಕೆಂದರೆ ಕೋಡ್ def ಮತ್ತು return ನಂತಹ ಗದ್ದಲ ಸೇರಿಸುತ್ತದೆ. Tags ಹೋಲಿಕೆಯ ಮೊದಲು ಕಠಿಣ ಫಿಲ್ಟರ್. ನಂತರ ಸಂಯೋಜನೆ ಆಳ-ಮೊದಲ ನಡಿಗೆಯಿಂದ ಅವಲಂಬನೆ graph ಬಿಡಿಸುತ್ತದೆ, skill ಅನ್ನು ಅದರ ಅವಲಂಬನೆಗಳ ನಂತರ ಮಾತ್ರ ಸೇರಿಸುತ್ತದೆ, ಹಂಚಿಕೆಯ ಅವಲಂಬನೆಗಳು ಒಮ್ಮೆ ಮಾತ್ರ ಬರಲು visited ಗಣ, ಮತ್ತು ಚಕ್ರ ಪತ್ತೆಗೆ visiting ಗಣ ಬಳಸುತ್ತದೆ. ಕಾಣೆಯಾದ ಅವಲಂಬನೆಗಳು ಮತ್ತು ಚಕ್ರಗಳು ಅಪೂರ್ಣ ಯೋಜನೆ ಮೌನವಾಗಿ ಉತ್ಪಾದಿಸುವ ಬದಲು ನಿರ್ದಿಷ್ಟ ದೋಷ ಎತ್ತುತ್ತವೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Library",
    "textKn": "ಸಂಗ್ರಹ ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "voyager_2.py",
    "headingEn": "tokenize, SkillLibrary and craft_iron_pickaxe",
    "headingKn": "tokenize, SkillLibrary ಮತ್ತು craft_iron_pickaxe",
    "descEn": "token_similarity is Jaccard overlap. register() refuses a reused name, then merges a near-duplicate description at or above 0.75. search() applies required_tags first, then ranks by similarity to the search text. compose() is the depth-first topological resolver. craft_iron_pickaxe is the composite skill whose dependencies are make_sticks and mine_iron.",
    "descKn": "token_similarity Jaccard ಅತಿಕ್ರಮಣ. register() ಮರುಬಳಸಿದ ಹೆಸರು ನಿರಾಕರಿಸಿ, ನಂತರ 0.75 ಅಥವಾ ಹೆಚ್ಚಿನ ಹತ್ತಿರದ ನಕಲು description ವಿಲೀನಗೊಳಿಸುತ್ತದೆ. search() ಮೊದಲು required_tags ಅನ್ವಯಿಸಿ ನಂತರ ಹುಡುಕಾಟ ಪಠ್ಯಕ್ಕೆ ಹೋಲಿಕೆಯಿಂದ ಶ್ರೇಣೀಕರಿಸುತ್ತದೆ. compose() ಆಳ-ಮೊದಲ topological ಬಿಡಿಸುವವನು. craft_iron_pickaxe ಅವಲಂಬನೆಗಳು make_sticks ಮತ್ತು mine_iron ಆಗಿರುವ ಸಂಯೋಜಿತ skill.",
    "code": "def tokenize(text: str) -> set:\n    return set(re.findall(r\"[a-z0-9_]+\", text.lower()))\n\n\ndef token_similarity(a: str, b: str) -> float:\n    ta, tb = tokenize(a), tokenize(b)\n    if not ta or not tb:\n        return 0.0\n    return len(ta & tb) / len(ta | tb)\n\n\ndef searchable_text(skill: Skill) -> str:\n    return \" \".join([skill.name.replace(\"_\", \" \"), skill.description, \" \".join(sorted(skill.tags))])\n\n\nclass SkillLibrary:\n    def __init__(self):\n        self.skills = {}\n\n    def find_duplicate(self, skill: Skill, threshold: float = 0.75) -> Optional[Skill]:\n        for existing in self.skills.values():\n            if token_similarity(skill.description, existing.description) >= threshold:\n                return existing\n        return None\n\n    def register(self, skill: Skill, deduplicate: bool = True) -> Skill:\n        if skill.name in self.skills:\n            raise ValueError(f\"Skill already registered: {skill.name}\")\n        if deduplicate:\n            duplicate = self.find_duplicate(skill)\n            if duplicate is not None:\n                print(f\"[library] duplicate candidate {skill.name} -> {duplicate.name}\")\n                return duplicate\n        self.skills[skill.name] = skill\n        print(f\"[library] registered {skill.name} v{skill.version}\")\n        return skill\n\n    def search(self, query: str, top_k: int = 3, required_tags: Optional[set] = None):\n        scored = []\n        for skill in self.skills.values():\n            if required_tags and not required_tags.issubset(skill.tags):\n                continue\n            score = token_similarity(query, searchable_text(skill))\n            if score > 0:\n                scored.append((score, skill))\n        scored.sort(key=lambda item: item[0], reverse=True)\n        return scored[:top_k]\n\n    def compose(self, skill_name: str):\n        ordered, visiting, visited = [], set(), set()\n\n        def visit(name: str) -> None:\n            if name in visited:\n                return\n            if name in visiting:\n                raise ValueError(f\"Dependency cycle detected at {name}\")\n            if name not in self.skills:\n                raise KeyError(f\"Missing skill dependency: {name}\")\n            visiting.add(name)\n            skill = self.skills[name]\n            for dependency in skill.dependencies:\n                visit(dependency)\n            visiting.remove(name)\n            visited.add(name)\n            ordered.append(skill)\n\n        visit(skill_name)\n        return ordered\n\n    def describe(self) -> None:\n        print(\"=== Skill Library ===\")\n        for skill in sorted(self.skills.values(), key=lambda s: s.name):\n            deps = \", \".join(skill.dependencies) or \"-\"\n            tags = \", \".join(sorted(skill.tags)) or \"-\"\n            print(f\"{skill.name} v{skill.version} | deps=[{deps}] | tags=[{tags}]\")\n\n\ncraft_iron_pickaxe = Skill(\n    name=\"craft_iron_pickaxe\",\n    description=\"Craft an iron pickaxe using iron and crafting sticks\",\n    code='def craft_iron_pickaxe(state):\\n    state[\"sticks\"] -= 2\\n    state[\"iron_ingots\"] -= 3\\n    state[\"iron_pickaxe\"] = state.get(\"iron_pickaxe\", 0) + 1\\n    return state\\n',\n    tags={\"crafting\", \"tool\", \"iron\"},\n    dependencies=[\"make_sticks\", \"mine_iron\"],\n)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "voyager_2.py",
    "headingEn": "main(): seven experiments",
    "headingKn": "main(): ಏಳು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() registers the primitives, tests name collisions and duplicates, probes the dedupe threshold, runs retrieval with and without tag filters, composes plans, forces missing-dependency and cycle errors, and checks what structural composition cannot see.",
    "descKn": "main() ಪ್ರಾಚೀನಗಳನ್ನು ನೋಂದಾಯಿಸುತ್ತದೆ, ಹೆಸರಿನ ಘರ್ಷಣೆ ಮತ್ತು ನಕಲುಗಳನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ, ನಕಲು-ತೆಗೆಯುವ ಮಿತಿ ಪರೀಕ್ಷಿಸುತ್ತದೆ, tag ಫಿಲ್ಟರ್ ಇದ್ದು ಇಲ್ಲದೆ ಪಡೆಯುವಿಕೆ ಚಲಾಯಿಸುತ್ತದೆ, ಯೋಜನೆಗಳನ್ನು ಸಂಯೋಜಿಸುತ್ತದೆ, ಕಾಣೆಯಾದ-ಅವಲಂಬನೆ ಮತ್ತು ಚಕ್ರ ದೋಷಗಳನ್ನು ಒತ್ತಾಯಿಸುತ್ತದೆ, ಮತ್ತು ರಚನಾತ್ಮಕ ಸಂಯೋಜನೆಗೆ ಕಾಣದ್ದನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Registering the primitives\")\n    lib = SkillLibrary()\n    for s in (collect_wood, make_sticks, mine_iron):\n        lib.register(s)\n    lib.describe()\n\n    section(\"2. Name collisions are refused, semantic duplicates are merged\")\n    try:\n        lib.register(Skill(\"collect_wood\", \"anything\", \"x\"))\n    except ValueError as e:\n        print(\"same name  ->\", e)\n    dup = lib.register(Skill(\"gather_wood\", \"Collect wood logs for crafting\", \"x\"))\n    print(\"identical description returned:\", dup.name, \"| library size:\", len(lib.skills))\n    same_meaning = Skill(\"harvest_wood\", \"Harvest timber from nearby trees\", \"x\")\n    print(\"similarity of 'harvest timber' to collect_wood:\", token_similarity(same_meaning.description, collect_wood.description))\n    lib.register(same_meaning)\n    print(\"library size now:\", len(lib.skills), \"(a true duplicate with different words slipped through)\")\n\n    section(\"3. Genuinely checking the dedupe threshold for a false merge\")\n    a = \"Mine iron ore safely using a pickaxe\"\n    b = \"Mine diamond ore safely using a pickaxe\"\n    print(f\"{a!r} vs {b!r}\")\n    print(\"similarity:\", token_similarity(a, b), \"| threshold 0.75 ->\", \"merged\" if token_similarity(a, b) >= 0.75 else \"kept apart\")\n    lib2 = SkillLibrary()\n    lib2.register(Skill(\"mine_iron_safely\", a, \"x\"))\n    got = lib2.register(Skill(\"mine_diamond_safely\", b, \"x\"))\n    print(\"second skill was returned as:\", got.name, \"-> two different capabilities collapsed into one\")\n\n    section(\"4. Retrieval: search surface is name + description + tags\")\n    lib.register(craft_iron_pickaxe)\n    for q in (\"mine iron for advanced tools\", \"need wood for crafting\", \"build a shelter by the lake\"):\n        print(f\"{q!r:<34} ->\", [(round(s, 3), k.name) for s, k in lib.search(q)] or \"no match\")\n    print(\"with required_tags={'mining'}:\", [(round(s, 3), k.name) for s, k in lib.search(\"iron tools\", required_tags={\"mining\"})])\n\n    section(\"5. Composition: dependencies first, shared ones once\")\n    print(\"craft_iron_pickaxe ->\", [s.name for s in lib.compose(\"craft_iron_pickaxe\")])\n    lib3 = SkillLibrary()\n    for name, deps in ((\"cut_wood\", []), (\"make_wall\", [\"cut_wood\"]), (\"make_roof\", [\"cut_wood\"]), (\"build_base\", [\"make_wall\", \"make_roof\"])):\n        lib3.skills[name] = Skill(name, name, \"x\", dependencies=deps)\n    print(\"build_base ->\", [s.name for s in lib3.compose(\"build_base\")], \"(cut_wood appears once)\")\n\n    section(\"6. Composition errors are explicit\")\n    lib3.skills[\"build_castle\"] = Skill(\"build_castle\", \"castle\", \"x\", dependencies=[\"cut_stone\"])\n    try:\n        lib3.compose(\"build_castle\")\n    except KeyError as e:\n        print(\"missing dependency ->\", e.args[0])\n    lib3.skills[\"skill_a\"] = Skill(\"skill_a\", \"a\", \"x\", dependencies=[\"skill_b\"])\n    lib3.skills[\"skill_b\"] = Skill(\"skill_b\", \"b\", \"x\", dependencies=[\"skill_a\"])\n    try:\n        lib3.compose(\"skill_a\")\n    except ValueError as e:\n        print(\"cycle              ->\", e)\n\n    section(\"7. Genuinely checking: a valid plan is not a working plan\")\n    plan = lib.compose(\"craft_iron_pickaxe\")\n    produced = {\"collect_wood\": \"wood\", \"make_sticks\": \"sticks\", \"mine_iron\": \"iron_ore\"}\n    needed_by_craft = [\"sticks\", \"iron_ingots\"]\n    print(\"plan:\", [s.name for s in plan])\n    print(\"outputs the plan provides:\", sorted(produced.values()))\n    print(\"inputs craft_iron_pickaxe reads:\", needed_by_craft)\n    print(\"inputs nobody produces:\", [n for n in needed_by_craft if n not in produced.values()])\n    print(\"compose() checked structure only, the missing iron_ingots producer is invisible to it\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Registering the primitives ---\n[library] registered collect_wood v1\n[library] registered make_sticks v1\n[library] registered mine_iron v1\n=== Skill Library ===\ncollect_wood v1 | deps=[-] | tags=[resource, wood]\nmake_sticks v1 | deps=[collect_wood] | tags=[crafting, wood]\nmine_iron v1 | deps=[-] | tags=[iron, mining, resource]\n\n--- 2. Name collisions are refused, semantic duplicates are merged ---\nsame name  -> Skill already registered: collect_wood\n[library] duplicate candidate gather_wood -> collect_wood\nidentical description returned: collect_wood | library size: 3\nsimilarity of 'harvest timber' to collect_wood: 0.0\n[library] registered harvest_wood v1\nlibrary size now: 4 (a true duplicate with different words slipped through)\n\n--- 3. Genuinely checking the dedupe threshold for a false merge ---\n'Mine iron ore safely using a pickaxe' vs 'Mine diamond ore safely using a pickaxe'\nsimilarity: 0.75 | threshold 0.75 -> merged\n[library] registered mine_iron_safely v1\n[library] duplicate candidate mine_diamond_safely -> mine_iron_safely\nsecond skill was returned as: mine_iron_safely -> two different capabilities collapsed into one\n\n--- 4. Retrieval: search surface is name + description + tags ---\n[library] registered craft_iron_pickaxe v1\n'mine iron for advanced tools'     -> [(0.625, 'mine_iron'), (0.1, 'collect_wood'), (0.077, 'craft_iron_pickaxe')]\n'need wood for crafting'           -> [(0.429, 'collect_wood'), (0.222, 'make_sticks'), (0.111, 'harvest_wood')]\n'build a shelter by the lake'      -> no match\nwith required_tags={'mining'}: [(0.25, 'mine_iron')]\n\n--- 5. Composition: dependencies first, shared ones once ---\ncraft_iron_pickaxe -> ['collect_wood', 'make_sticks', 'mine_iron', 'craft_iron_pickaxe']\nbuild_base -> ['cut_wood', 'make_wall', 'make_roof', 'build_base'] (cut_wood appears once)\n\n--- 6. Composition errors are explicit ---\nmissing dependency -> Missing skill dependency: cut_stone\ncycle              -> Dependency cycle detected at skill_a\n\n--- 7. Genuinely checking: a valid plan is not a working plan ---\nplan: ['collect_wood', 'make_sticks', 'mine_iron', 'craft_iron_pickaxe']\noutputs the plan provides: ['iron_ore', 'sticks', 'wood']\ninputs craft_iron_pickaxe reads: ['sticks', 'iron_ingots']\ninputs nobody produces: ['iron_ingots']\ncompose() checked structure only, the missing iron_ingots producer is invisible to it"
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Reading the Verified Output",
    "textKn": "ಪರಿಶೀಲಿತ Output ಓದುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Dedupe, Retrieval and Composition",
    "headingKn": "ನಕಲು ತೆಗೆಯುವಿಕೆ, ಪಡೆಯುವಿಕೆ ಮತ್ತು ಸಂಯೋಜನೆ",
    "bodyEn": "Section 2: registering collect_wood again raises \"already registered\"; gather_wood with an identical description is merged into collect_wood, so the library stays at three. Section 4: \"mine iron for advanced tools\" ranks mine_iron first at 0.625; \"need wood for crafting\" ranks collect_wood at 0.429; \"build a shelter by the lake\" matches nothing, which is an honest miss. With required_tags={\"mining\"} only mine_iron is eligible. Section 5: craft_iron_pickaxe composes to collect_wood, make_sticks, mine_iron, craft_iron_pickaxe, and in a diamond-shaped graph the shared cut_wood appears once. Section 6 raises \"Missing skill dependency: cut_stone\" and \"Dependency cycle detected at skill_a\".",
    "bodyKn": "ವಿಭಾಗ 2: collect_wood ಮತ್ತೆ ನೋಂದಾಯಿಸಿದರೆ \"already registered\" ಎತ್ತುತ್ತದೆ; ಒಂದೇ description ಇರುವ gather_wood collect_wood ಗೆ ವಿಲೀನವಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ ಸಂಗ್ರಹ ಮೂರರಲ್ಲೇ ಉಳಿಯುತ್ತದೆ. ವಿಭಾಗ 4: \"mine iron for advanced tools\" mine_iron ಅನ್ನು 0.625 ರಲ್ಲಿ ಮೊದಲು ಶ್ರೇಣೀಕರಿಸುತ್ತದೆ; \"need wood for crafting\" collect_wood ಅನ್ನು 0.429 ರಲ್ಲಿ; \"build a shelter by the lake\" ಯಾವುದೂ ಹೊಂದುವುದಿಲ್ಲ, ಇದು ಪ್ರಾಮಾಣಿಕ ತಪ್ಪು. required_tags={\"mining\"} ನೊಂದಿಗೆ ಕೇವಲ mine_iron ಅರ್ಹ. ವಿಭಾಗ 5: craft_iron_pickaxe collect_wood, make_sticks, mine_iron, craft_iron_pickaxe ಎಂದು ಸಂಯೋಜಿತವಾಗುತ್ತದೆ, ಮತ್ತು ವಜ್ರಾಕಾರದ graph ನಲ್ಲಿ ಹಂಚಿಕೆಯ cut_wood ಒಮ್ಮೆ ಬರುತ್ತದೆ. ವಿಭಾಗ 6 \"Missing skill dependency: cut_stone\" ಮತ್ತು \"Dependency cycle detected at skill_a\" ಎತ್ತುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Dedupe Both Misses and Over-Merges",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ನಕಲು ತೆಗೆಯುವಿಕೆ ತಪ್ಪಿಸುತ್ತದೆ ಮತ್ತು ಅತಿಯಾಗಿ ವಿಲೀನಗೊಳಿಸುತ್ತದೆ",
    "bodyEn": "Two failures in one mechanism. \"Harvest timber from nearby trees\" is a true duplicate of collect_wood, but its similarity is 0.0 because no word is shared, so it was registered as a fourth skill. In the other direction, \"Mine iron ore safely using a pickaxe\" and \"Mine diamond ore safely using a pickaxe\" have similarity exactly 0.75, which meets the threshold, so mine_diamond_safely was swallowed by mine_iron_safely and two different capabilities collapsed into one. Lexical dedupe needs embeddings plus a conservative threshold, and a merge should be reviewable rather than silent.",
    "bodyKn": "ಒಂದೇ ಕಾರ್ಯವಿಧಾನದಲ್ಲಿ ಎರಡು ವೈಫಲ್ಯಗಳು. \"Harvest timber from nearby trees\" collect_wood ನ ನಿಜವಾದ ನಕಲು, ಆದರೆ ಯಾವ ಪದವೂ ಹಂಚಿಕೆಯಾಗದ ಕಾರಣ ಅದರ ಹೋಲಿಕೆ 0.0, ಹಾಗಾಗಿ ನಾಲ್ಕನೇ skill ಆಗಿ ನೋಂದಾಯಿತವಾಯಿತು. ಇನ್ನೊಂದು ದಿಕ್ಕಿನಲ್ಲಿ, \"Mine iron ore safely using a pickaxe\" ಮತ್ತು \"Mine diamond ore safely using a pickaxe\" ಹೋಲಿಕೆ ಸರಿಯಾಗಿ 0.75, ಅದು ಮಿತಿ ಪೂರೈಸುತ್ತದೆ, ಆದ್ದರಿಂದ mine_diamond_safely ಅನ್ನು mine_iron_safely ನುಂಗಿತು ಮತ್ತು ಎರಡು ಬೇರೆ ಸಾಮರ್ಥ್ಯಗಳು ಒಂದಾಗಿ ಕುಸಿದವು. ಪದ-ಆಧಾರಿತ ನಕಲು ತೆಗೆಯುವಿಕೆಗೆ embeddings ಜೊತೆಗೆ ಎಚ್ಚರಿಕೆಯ ಮಿತಿ ಬೇಕು, ಮತ್ತು ವಿಲೀನ ಮೌನವಲ್ಲ, ಪರಿಶೀಲಿಸಬಹುದಾದದ್ದಾಗಿರಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Valid Plan Is Not a Working Plan",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮಾನ್ಯ ಯೋಜನೆ ಕೆಲಸ ಮಾಡುವ ಯೋಜನೆ ಅಲ್ಲ",
    "bodyEn": "Section 7 lists what the composed plan produces (iron_ore, sticks, wood) and what craft_iron_pickaxe reads (sticks, iron_ingots). Nobody produces iron_ingots. compose() succeeded because it checks only that dependencies exist and are acyclic. The missing producer is invisible to it, and only execution will reveal it, which is the subject of Part 3. Declaring inputs and outputs on skills would turn this runtime failure into a static validation error.",
    "bodyKn": "ವಿಭಾಗ 7 ಸಂಯೋಜಿತ ಯೋಜನೆ ಏನು ಉತ್ಪಾದಿಸುತ್ತದೆ (iron_ore, sticks, wood) ಮತ್ತು craft_iron_pickaxe ಏನು ಓದುತ್ತದೆ (sticks, iron_ingots) ಎಂದು ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ. iron_ingots ಅನ್ನು ಯಾರೂ ಉತ್ಪಾದಿಸುವುದಿಲ್ಲ. ಅವಲಂಬನೆಗಳು ಇವೆ ಮತ್ತು ಚಕ್ರರಹಿತ ಎಂದು ಮಾತ್ರ ಪರಿಶೀಲಿಸುವುದರಿಂದ compose() ಯಶಸ್ವಿಯಾಯಿತು. ಕಾಣೆಯಾದ ಉತ್ಪಾದಕ ಅದಕ್ಕೆ ಕಾಣುವುದಿಲ್ಲ, ಚಲಾವಣೆ ಮಾತ್ರ ಅದನ್ನು ಬಹಿರಂಗಪಡಿಸುತ್ತದೆ, ಇದು ಭಾಗ 3 ರ ವಿಷಯ. Skills ಮೇಲೆ ಇನ್‌ಪುಟ್ ಮತ್ತು ಔಟ್‌ಪುಟ್ ಘೋಷಿಸುವುದು ಈ ರನ್‌ಟೈಮ್ ವೈಫಲ್ಯವನ್ನು ಸ್ಥಿರ ಮಾನ್ಯತೆ ದೋಷವಾಗಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Versions and Dependency Pinning",
    "headingKn": "Versions ಮತ್ತು ಅವಲಂಬನೆ ಪಿನ್ನಿಂಗ್",
    "bodyEn": "Dependencies here are by name only, so a parent always uses the current child. If mine_iron v2 changes its output shape, a parent written for v1 can break. Package-manager thinking applies: pin an exact version, or accept a compatible range, keep old versions for rollback, and test a refinement against the old successful cases before promoting it.",
    "bodyKn": "ಇಲ್ಲಿ ಅವಲಂಬನೆಗಳು ಹೆಸರಿನಿಂದ ಮಾತ್ರ, ಆದ್ದರಿಂದ ಪೋಷಕ ಯಾವಾಗಲೂ ಪ್ರಸ್ತುತ ಮಗುವನ್ನು ಬಳಸುತ್ತದೆ. mine_iron v2 ತನ್ನ ಔಟ್‌ಪುಟ್ ಆಕಾರ ಬದಲಿಸಿದರೆ v1 ಗೆ ಬರೆದ ಪೋಷಕ ಮುರಿಯಬಹುದು. Package-manager ಚಿಂತನೆ ಅನ್ವಯಿಸುತ್ತದೆ: ನಿಖರ version ಪಿನ್ ಮಾಡಿ, ಅಥವಾ ಹೊಂದುವ ವ್ಯಾಪ್ತಿ ಸ್ವೀಕರಿಸಿ, ಹಿಂತಿರುಗಲು ಹಳೆಯ versions ಉಳಿಸಿ, ಮತ್ತು ಸುಧಾರಣೆಯನ್ನು ಬಡ್ತಿ ನೀಡುವ ಮೊದಲು ಹಳೆಯ ಯಶಸ್ವಿ ಪ್ರಕರಣಗಳ ವಿರುದ್ಧ ಪರೀಕ್ಷಿಸಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Deterministic code should do what code can do reliably: storage, version numbers, dependency traversal, cycle detection and tag filtering. The model is kept for the genuinely semantic work, interpreting a new goal and proposing a new skill. Explicit errors such as \"Dependency cycle detected at skill_a\" give a model a repair target that a bare RecursionError never would.",
    "bodyKn": "ಕೋಡ್ ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಮಾಡಬಲ್ಲದ್ದನ್ನು ನಿರ್ಧಾರಾತ್ಮಕ ಕೋಡ್ ಮಾಡಬೇಕು: ಸಂಗ್ರಹ, version ಸಂಖ್ಯೆಗಳು, ಅವಲಂಬನೆ ಸಂಚಾರ, ಚಕ್ರ ಪತ್ತೆ ಮತ್ತು tag ಫಿಲ್ಟರಿಂಗ್. ಮಾದರಿಯನ್ನು ನಿಜವಾದ ಅರ್ಥಾತ್ಮಕ ಕೆಲಸಕ್ಕೆ, ಹೊಸ ಗುರಿ ಅರ್ಥೈಸಲು ಮತ್ತು ಹೊಸ skill ಸೂಚಿಸಲು ಇಡಲಾಗುತ್ತದೆ. \"Dependency cycle detected at skill_a\" ನಂತಹ ಸ್ಪಷ್ಟ ದೋಷಗಳು ಕೇವಲ RecursionError ಎಂದೂ ನೀಡದ ದುರಸ್ತಿ ಗುರಿಯನ್ನು ಮಾದರಿಗೆ ನೀಡುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"composition means concatenating code.\" Real composition resolves dependencies, order, interfaces, versions and side effects. This lab only resolves the order.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಸಂಯೋಜನೆ ಎಂದರೆ ಕೋಡ್ ಜೋಡಿಸುವುದು.\" ನಿಜವಾದ ಸಂಯೋಜನೆ ಅವಲಂಬನೆಗಳು, ಕ್ರಮ, ಇಂಟರ್‌ಫೇಸ್‌ಗಳು, versions ಮತ್ತು ಅಡ್ಡ ಪರಿಣಾಮಗಳನ್ನು ಬಿಡಿಸುತ್ತದೆ. ಈ ಲ್ಯಾಬ್ ಕೇವಲ ಕ್ರಮ ಬಿಡಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Skill library: persistent registry of skills. Dedup on write: refusing or merging near-duplicates when registering. Search surface: the text used to retrieve a skill. Hard filter: tags applied before similarity. Composition: resolving dependencies into an order. DAG: directed acyclic graph. Visiting and visited sets: cycle detection and shared-dependency handling.",
    "bodyKn": "Skill library: skills ನ ನಿರಂತರ ನೋಂದಣಿ. Dedup on write: ನೋಂದಣಿ ಸಮಯದಲ್ಲಿ ಹತ್ತಿರದ ನಕಲುಗಳನ್ನು ನಿರಾಕರಿಸುವುದು ಅಥವಾ ವಿಲೀನಗೊಳಿಸುವುದು. Search surface: skill ಪಡೆಯಲು ಬಳಸುವ ಪಠ್ಯ. ಕಠಿಣ ಫಿಲ್ಟರ್: ಹೋಲಿಕೆಯ ಮೊದಲು ಅನ್ವಯಿಸುವ tags. ಸಂಯೋಜನೆ: ಅವಲಂಬನೆಗಳನ್ನು ಕ್ರಮವಾಗಿ ಬಿಡಿಸುವುದು. DAG: ನಿರ್ದೇಶಿತ ಚಕ್ರರಹಿತ graph. Visiting ಮತ್ತು visited ಗಣಗಳು: ಚಕ್ರ ಪತ್ತೆ ಮತ್ತು ಹಂಚಿಕೆಯ ಅವಲಂಬನೆ ನಿರ್ವಹಣೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Register only verified skills, refuse name clashes, and route improvements through refine. 2) Search and compose are different jobs. 3) Search the name, description and tags, filter by tags first. 4) compose() is dependency-first with a visited set and a visiting set. 5) Lexical dedupe both missed a true duplicate and merged two different skills. 6) A structurally valid plan can still be missing a producer. 7) Version and pin dependencies. Part 3 executes the plan and learns from the failure.",
    "bodyKn": "1) ಪರಿಶೀಲಿತ skills ಮಾತ್ರ ನೋಂದಾಯಿಸಿ, ಹೆಸರಿನ ಘರ್ಷಣೆ ನಿರಾಕರಿಸಿ, ಸುಧಾರಣೆಗಳನ್ನು refine ಮೂಲಕ ಕಳುಹಿಸಿ. 2) ಹುಡುಕಾಟ ಮತ್ತು ಸಂಯೋಜನೆ ಬೇರೆ ಕೆಲಸ. 3) name, description ಮತ್ತು tags ಹುಡುಕಿ, ಮೊದಲು tags ಮೂಲಕ ಫಿಲ್ಟರ್ ಮಾಡಿ. 4) compose() visited ಮತ್ತು visiting ಗಣಗಳಿರುವ ಅವಲಂಬನೆ-ಮೊದಲ. 5) ಪದ-ಆಧಾರಿತ ನಕಲು ತೆಗೆಯುವಿಕೆ ನಿಜವಾದ ನಕಲು ತಪ್ಪಿಸಿತು ಮತ್ತು ಎರಡು ಬೇರೆ skills ವಿಲೀನಗೊಳಿಸಿತು. 6) ರಚನೆಯಲ್ಲಿ ಮಾನ್ಯ ಯೋಜನೆಯಲ್ಲೂ ಉತ್ಪಾದಕ ಕಾಣೆಯಾಗಿರಬಹುದು. 7) Version ಮಾಡಿ ಮತ್ತು ಅವಲಂಬನೆ ಪಿನ್ ಮಾಡಿ. ಭಾಗ 3 ಯೋಜನೆ ಚಲಾಯಿಸಿ ವೈಫಲ್ಯದಿಂದ ಕಲಿಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why does register() refuse a skill whose name already exists?",
      "qKn": "ಹೆಸರು ಈಗಾಗಲೇ ಇರುವ skill ಅನ್ನು register() ಏಕೆ ನಿರಾಕರಿಸುತ್ತದೆ?",
      "opts": [
       "Names must be unique to save memory",
       "Improving an existing capability should go through refine(), not an accidental overwrite",
       "Python forbids duplicate keys",
       "Tags would be lost"
      ],
      "optsKn": [
       "ಮೆಮೊರಿ ಉಳಿಸಲು ಹೆಸರುಗಳು ವಿಶಿಷ್ಟವಾಗಿರಬೇಕು",
       "ಇರುವ ಸಾಮರ್ಥ್ಯದ ಸುಧಾರಣೆ ಆಕಸ್ಮಿಕ ಬದಲಿ ಅಲ್ಲ, refine() ಮೂಲಕ ಹೋಗಬೇಕು",
       "Python ನಕಲು keys ನಿಷೇಧಿಸುತ್ತದೆ",
       "Tags ಕಳೆದುಹೋಗುತ್ತವೆ"
      ],
      "correct": 1
     },
     {
      "q": "What did the \"Mine iron ore safely\" versus \"Mine diamond ore safely\" experiment show?",
      "qKn": "\"Mine iron ore safely\" ಮತ್ತು \"Mine diamond ore safely\" ಪ್ರಯೋಗ ಏನು ತೋರಿಸಿತು?",
      "opts": [
       "The dedupe works perfectly",
       "A similarity of exactly 0.75 met the threshold and merged two different capabilities",
       "Dedupe is disabled",
       "Tags prevented the merge"
      ],
      "optsKn": [
       "ನಕಲು ತೆಗೆಯುವಿಕೆ ಪರಿಪೂರ್ಣವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
       "ಸರಿಯಾಗಿ 0.75 ಹೋಲಿಕೆ ಮಿತಿ ಪೂರೈಸಿ ಎರಡು ಬೇರೆ ಸಾಮರ್ಥ್ಯ ವಿಲೀನಗೊಳಿಸಿತು",
       "ನಕಲು ತೆಗೆಯುವಿಕೆ ನಿಷ್ಕ್ರಿಯ",
       "Tags ವಿಲೀನ ತಡೆದವು"
      ],
      "correct": 1
     },
     {
      "q": "Why does compose() keep both a visited set and a visiting set?",
      "qKn": "compose() visited ಮತ್ತು visiting ಎರಡೂ ಗಣಗಳನ್ನು ಏಕೆ ಇಡುತ್ತದೆ?",
      "opts": [
       "One is a cache for search",
       "visited avoids repeating shared dependencies, visiting detects a cycle in the active path",
       "They store versions",
       "They are required by dataclasses"
      ],
      "optsKn": [
       "ಒಂದು ಹುಡುಕಾಟದ cache",
       "visited ಹಂಚಿಕೆಯ ಅವಲಂಬನೆ ಪುನರಾವರ್ತನೆ ತಪ್ಪಿಸುತ್ತದೆ, visiting ಸಕ್ರಿಯ ದಾರಿಯಲ್ಲಿ ಚಕ್ರ ಪತ್ತೆ ಮಾಡುತ್ತದೆ",
       "ಅವು versions ಸಂಗ್ರಹಿಸುತ್ತವೆ",
       "dataclasses ಗೆ ಅವು ಬೇಕು"
      ],
      "correct": 1
     },
     {
      "q": "The plan for craft_iron_pickaxe composed fine. What did the lab find was still missing?",
      "qKn": "craft_iron_pickaxe ಯೋಜನೆ ಚೆನ್ನಾಗಿ ಸಂಯೋಜಿತವಾಯಿತು. ಇನ್ನೂ ಏನು ಕಾಣೆಯಾಗಿದೆ ಎಂದು ಲ್ಯಾಬ್ ಕಂಡುಹಿಡಿಯಿತು?",
      "opts": [
       "A cycle",
       "No skill produces iron_ingots, which compose() cannot see",
       "A tag",
       "A version number"
      ],
      "optsKn": [
       "ಒಂದು ಚಕ್ರ",
       "iron_ingots ಅನ್ನು ಯಾವ skill ಉತ್ಪಾದಿಸುವುದಿಲ್ಲ, ಅದು compose() ಗೆ ಕಾಣುವುದಿಲ್ಲ",
       "ಒಂದು tag",
       "ಒಂದು version ಸಂಖ್ಯೆ"
      ],
      "correct": 1
     },
     {
      "q": "Why is the code field left out of the search surface?",
      "qKn": "ಹುಡುಕಾಟ ಮೇಲ್ಮೈಯಿಂದ code ಕ್ಷೇತ್ರವನ್ನು ಏಕೆ ಬಿಡಲಾಗಿದೆ?",
      "opts": [
       "Code is secret",
       "Implementation tokens such as def and return add noise; a curated description is a cleaner retrieval surface",
       "Code cannot be tokenized",
       "Search would be too fast"
      ],
      "optsKn": [
       "ಕೋಡ್ ರಹಸ್ಯ",
       "def ಮತ್ತು return ನಂತಹ ಅನುಷ್ಠಾನ tokens ಗದ್ದಲ ಸೇರಿಸುತ್ತವೆ; ಆಯ್ದ description ಸ್ವಚ್ಛ ಪಡೆಯುವಿಕೆ ಮೇಲ್ಮೈ",
       "ಕೋಡ್ tokenize ಆಗುವುದಿಲ್ಲ",
       "ಹುಡುಕಾಟ ತುಂಬಾ ವೇಗವಾಗುತ್ತದೆ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
