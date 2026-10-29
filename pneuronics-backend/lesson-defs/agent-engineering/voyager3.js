module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321529",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Skill Libraries and Lifelong Learning: Voyager (Part 3 of 3) — Execution, Feedback and Refinement",
 "titleKn": "Skill Libraries ಮತ್ತು Lifelong Learning: Voyager (ಭಾಗ 3 / 3) — ಚಲಾವಣೆ, ಪ್ರತಿಕ್ರಿಯೆ ಮತ್ತು ಪರಿಷ್ಕರಣೆ",
 "desc": "Run a composed plan, read its failure, discover a missing skill, refine the parent from v1 to v2, verify goal and invariants, and find that the pasted loader hid the error, runtime success can hide an invalid state, and refine erased history.",
 "descKn": "ಸಂಯೋಜಿತ ಯೋಜನೆ ಚಲಾಯಿಸಿ, ಅದರ ವೈಫಲ್ಯ ಓದಿ, ಕಾಣೆಯಾದ skill ಕಂಡುಹಿಡಿದು, ಪೋಷಕನನ್ನು v1 ರಿಂದ v2 ಗೆ ಪರಿಷ್ಕರಿಸಿ, ಗುರಿ ಮತ್ತು ನಿಯಮಗಳನ್ನು ಪರಿಶೀಲಿಸಿ, ಮತ್ತು ಅಂಟಿಸಿದ loader ದೋಷ ಮರೆಮಾಡಿತು, ರನ್‌ಟೈಮ್ ಯಶಸ್ಸು ಅಮಾನ್ಯ ಸ್ಥಿತಿ ಮರೆಮಾಡಬಹುದು ಹಾಗೂ refine ಇತಿಹಾಸ ಅಳಿಸಿತು ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Run a plan and capture structured execution feedback.",
  "Diagnose a failure as a missing capability and add the skill.",
  "Refine a skill with a version bump and recompose.",
  "Verify the goal and invariants separately from execution.",
  "Identify risks in loaders, diagnosis, history and verification."
 ],
 "objectivesKn": [
  "ಯೋಜನೆ ಚಲಾಯಿಸಿ ರಚನಾತ್ಮಕ ಚಲಾವಣೆ ಪ್ರತಿಕ್ರಿಯೆ ಪಡೆಯಿರಿ.",
  "ವೈಫಲ್ಯವನ್ನು ಕಾಣೆಯಾದ ಸಾಮರ್ಥ್ಯ ಎಂದು ರೋಗನಿರ್ಣಯ ಮಾಡಿ skill ಸೇರಿಸಿ.",
  "Version ಹೆಚ್ಚಳದೊಂದಿಗೆ skill ಪರಿಷ್ಕರಿಸಿ ಮತ್ತು ಮರು-ಸಂಯೋಜಿಸಿ.",
  "ಗುರಿ ಮತ್ತು ನಿಯಮಗಳನ್ನು ಚಲಾವಣೆಯಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿ ಪರಿಶೀಲಿಸಿ.",
  "Loaders, ರೋಗನಿರ್ಣಯ, ಇತಿಹಾಸ ಮತ್ತು ಪರಿಶೀಲನೆಯ ಅಪಾಯಗಳನ್ನು ಗುರುತಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Skill Libraries and Lifelong Learning: Voyager (Part 3 of 3)",
    "textKn": "Skill Libraries ಮತ್ತು Lifelong Learning: Voyager (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: execution, feedback, capability-gap discovery, refinement, verification and the curriculum. Every output below was genuinely produced by the lab file on Python 3.14.5. The pasted source was cut off in its final diagram, so the closing architecture is rebuilt from context. The diagnosis step is a hard-coded string match standing in for a model, and section 7 shows how fragile that is. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಚಲಾವಣೆ, ಪ್ರತಿಕ್ರಿಯೆ, ಸಾಮರ್ಥ್ಯ-ಅಂತರ ಪತ್ತೆ, ಪರಿಷ್ಕರಣೆ, ಪರಿಶೀಲನೆ ಮತ್ತು curriculum. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಅಂಟಿಸಿದ ಮೂಲ ಅದರ ಅಂತಿಮ ರೇಖಾಚಿತ್ರದಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ ಮುಕ್ತಾಯ ವಿನ್ಯಾಸವನ್ನು ಸಂದರ್ಭದಿಂದ ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. ರೋಗನಿರ್ಣಯ ಹಂತ ಮಾದರಿಗೆ ಬದಲಿಯಾದ ಹಾರ್ಡ್-ಕೋಡ್ ಸ್ಟ್ರಿಂಗ್ ಹೊಂದಾಣಿಕೆ, ಮತ್ತು ವಿಭಾಗ 7 ಅದು ಎಷ್ಟು ದುರ್ಬಲ ಎಂದು ತೋರಿಸುತ್ತದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Closing the Loop",
    "textKn": "ಚಕ್ರ ಮುಚ್ಚುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Three Feedback Signals",
    "headingKn": "ಮೂರು ಪ್ರತಿಕ್ರಿಯೆ ಸಂಕೇತಗಳು",
    "bodyEn": "Execution can end three ways. Success means the program ran and the goal is verified, so the skill is stored. A runtime error carries environment-grounded information, such as \"need 3 iron ingots; mining produced ore, not ingots\", which drives a rewrite. A self-verification failure is subtler: the program ran with no exception, yet the goal was not achieved. Runtime success is not goal success, which is why verification is a separate step.",
    "bodyKn": "ಚಲಾವಣೆ ಮೂರು ರೀತಿ ಕೊನೆಗೊಳ್ಳಬಹುದು. ಯಶಸ್ಸು ಎಂದರೆ ಪ್ರೋಗ್ರಾಂ ಚಲಿಸಿ ಗುರಿ ಪರಿಶೀಲಿತವಾಗಿದೆ, ಆದ್ದರಿಂದ skill ಸಂಗ್ರಹವಾಗುತ್ತದೆ. ರನ್‌ಟೈಮ್ ದೋಷ ಪರಿಸರ-ಆಧಾರಿತ ಮಾಹಿತಿ ಹೊಂದಿದೆ, ಉದಾಹರಣೆಗೆ \"need 3 iron ingots; mining produced ore, not ingots\", ಅದು ಪುನರ್‌ಬರವಣಿಗೆ ನಡೆಸುತ್ತದೆ. ಸ್ವ-ಪರಿಶೀಲನೆ ವೈಫಲ್ಯ ಸೂಕ್ಷ್ಮ: ಪ್ರೋಗ್ರಾಂ ಯಾವುದೇ ವಿನಾಯಿತಿ ಇಲ್ಲದೆ ಚಲಿಸಿತು, ಆದರೂ ಗುರಿ ಸಾಧಿಸಲಿಲ್ಲ. ರನ್‌ಟೈಮ್ ಯಶಸ್ಸು ಗುರಿ ಯಶಸ್ಸು ಅಲ್ಲ, ಅದಕ್ಕಾಗಿ ಪರಿಶೀಲನೆ ಪ್ರತ್ಯೇಕ ಹಂತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Lifelong Loop",
    "headingKn": "Lifelong ಚಕ್ರ",
    "svgCode": "<svg viewBox=\"0 0 300 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"210\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Voyager-style lifelong loop</text>\n  <rect x=\"85\" y=\"22\" width=\"130\" height=\"20\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"35\" fill=\"#93c5fd\" text-anchor=\"middle\">CURRICULUM: next task</text>\n  <path d=\"M150,42 V50\" stroke=\"#475569\"/>\n  <rect x=\"85\" y=\"50\" width=\"130\" height=\"20\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"63\" fill=\"#6ee7b7\" text-anchor=\"middle\">SEARCH the skill library</text>\n  <path d=\"M150,70 V78\" stroke=\"#475569\"/>\n  <rect x=\"85\" y=\"78\" width=\"130\" height=\"20\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"91\" fill=\"#6ee7b7\" text-anchor=\"middle\">COMPOSE dependency order</text>\n  <path d=\"M150,98 V106\" stroke=\"#475569\"/>\n  <rect x=\"85\" y=\"106\" width=\"130\" height=\"20\" rx=\"4\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"119\" fill=\"#fde68a\" text-anchor=\"middle\">EXECUTE against the world</text>\n  <path d=\"M150,126 V136\" stroke=\"#475569\"/>\n  <rect x=\"85\" y=\"136\" width=\"130\" height=\"20\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"149\" fill=\"#93c5fd\" text-anchor=\"middle\">VERIFY goal and invariants</text>\n  <path d=\"M215,146 H262 V60 H215\" stroke=\"#f87171\" fill=\"none\"/><text x=\"266\" y=\"104\" fill=\"#fecaca\" font-size=\"6\">fail:</text><text x=\"266\" y=\"113\" fill=\"#fecaca\" font-size=\"6\">refine</text>\n  <path d=\"M150,156 V168\" stroke=\"#475569\"/>\n  <rect x=\"60\" y=\"168\" width=\"180\" height=\"22\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"182\" fill=\"#c4b5fd\" text-anchor=\"middle\">pass: STORE or bump version</text>\n  <text x=\"150\" y=\"203\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">capability grows outside the model weights</text>\n</svg>",
    "captionEn": "Failures return to refinement; verified successes are stored or version-bumped. A failure may reveal a missing skill, which feeds the curriculum.",
    "captionKn": "ವೈಫಲ್ಯಗಳು ಪರಿಷ್ಕರಣೆಗೆ ಮರಳುತ್ತವೆ; ಪರಿಶೀಲಿತ ಯಶಸ್ಸುಗಳನ್ನು ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ ಅಥವಾ version ಹೆಚ್ಚಿಸಲಾಗುತ್ತದೆ. ವೈಫಲ್ಯ ಕಾಣೆಯಾದ skill ಬಹಿರಂಗಪಡಿಸಬಹುದು, ಅದು curriculum ಗೆ ಆಹಾರವಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Failure Can Mean a Missing Skill",
    "headingKn": "ವೈಫಲ್ಯವೆಂದರೆ ಕಾಣೆಯಾದ Skill ಆಗಿರಬಹುದು",
    "bodyEn": "The failure in this lab is not a bug in an existing skill. mine_iron produces iron_ore and craft_iron_pickaxe needs iron_ingots, so the graph lacks an intermediate capability, smelt_iron. The response is to learn smelt_iron (a new skill), refine craft_iron_pickaxe v1 to v2 with smelt_iron as a dependency, recompose and retry. This is how a skill graph grows from experience, and how a failure feeds the curriculum: the next useful task is exactly the gap the failure exposed.",
    "bodyKn": "ಈ ಲ್ಯಾಬ್‌ನ ವೈಫಲ್ಯ ಇರುವ skill ನ ದೋಷವಲ್ಲ. mine_iron iron_ore ಉತ್ಪಾದಿಸುತ್ತದೆ ಮತ್ತು craft_iron_pickaxe ಗೆ iron_ingots ಬೇಕು, ಆದ್ದರಿಂದ graph ನಲ್ಲಿ ಮಧ್ಯಂತರ ಸಾಮರ್ಥ್ಯ smelt_iron ಇಲ್ಲ. ಪ್ರತಿಕ್ರಿಯೆ: smelt_iron (ಹೊಸ skill) ಕಲಿಯಿರಿ, craft_iron_pickaxe v1 ಅನ್ನು smelt_iron ಅವಲಂಬನೆಯೊಂದಿಗೆ v2 ಗೆ ಪರಿಷ್ಕರಿಸಿ, ಮರು-ಸಂಯೋಜಿಸಿ, ಮರುಪ್ರಯತ್ನಿಸಿ. ಹೀಗೆ skill graph ಅನುಭವದಿಂದ ಬೆಳೆಯುತ್ತದೆ, ಮತ್ತು ವೈಫಲ್ಯ curriculum ಗೆ ಆಹಾರವಾಗುತ್ತದೆ: ಮುಂದಿನ ಉಪಯುಕ್ತ ಕಾರ್ಯ ವೈಫಲ್ಯ ಬಹಿರಂಗಪಡಿಸಿದ ಅಂತರವೇ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Loop",
    "textKn": "ಚಕ್ರ ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "voyager_3.py",
    "headingEn": "Execution, verification, refine, curriculum and diagnosis",
    "headingKn": "ಚಲಾವಣೆ, ಪರಿಶೀಲನೆ, refine, curriculum ಮತ್ತು ರೋಗನಿರ್ಣಯ",
    "descEn": "run_plan executes a composed plan and returns an ExecutionResult with the final state and a typed error string instead of raising. verify_iron_pickaxe checks the artifact and the invariant that no resource is negative. LearningLibrary.refine builds a new Skill with version + 1. propose_next_task is a scripted curriculum, and diagnose maps an error message to a missing skill.",
    "descKn": "run_plan ಸಂಯೋಜಿತ ಯೋಜನೆ ಚಲಾಯಿಸಿ ಎತ್ತುವ ಬದಲು ಅಂತಿಮ state ಮತ್ತು ಟೈಪ್ ಮಾಡಿದ ದೋಷ ಸ್ಟ್ರಿಂಗ್‌ನ ExecutionResult ಹಿಂತಿರುಗಿಸುತ್ತದೆ. verify_iron_pickaxe ವಸ್ತು ಮತ್ತು ಯಾವುದೇ ಸಂಪನ್ಮೂಲ ಋಣಾತ್ಮಕವಲ್ಲ ಎಂಬ ನಿಯಮ ಪರಿಶೀಲಿಸುತ್ತದೆ. LearningLibrary.refine version + 1 ಇರುವ ಹೊಸ Skill ರಚಿಸುತ್ತದೆ. propose_next_task ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ curriculum, ಮತ್ತು diagnose ದೋಷ ಸಂದೇಶವನ್ನು ಕಾಣೆಯಾದ skill ಗೆ ನಕ್ಷೆ ಮಾಡುತ್ತದೆ.",
    "code": "@dataclass\nclass ExecutionResult:\n    success: bool\n    state: dict\n    error: Optional[str] = None\n\n\ndef execute_skill(skill: Skill, state: dict) -> dict:\n    function = load_skill_function(skill)\n    print(f\"[execute] {skill.name} v{skill.version}\")\n    result = function(state)\n    if not isinstance(result, dict):\n        raise TypeError(f\"{skill.name} must return state dict\")\n    return result\n\n\ndef run_plan(plan, initial_state: dict) -> ExecutionResult:\n    state = dict(initial_state)\n    try:\n        for skill in plan:\n            state = execute_skill(skill, state)\n        return ExecutionResult(True, state)\n    except Exception as exc:\n        return ExecutionResult(False, state, f\"{type(exc).__name__}: {exc}\")\n\n\ndef verify_iron_pickaxe(state: dict):\n    if state.get(\"iron_pickaxe\", 0) < 1:\n        return False, \"No iron pickaxe exists\"\n    for resource in (\"wood\", \"sticks\", \"iron_ore\", \"iron_ingots\"):\n        if state.get(resource, 0) < 0:\n            return False, f\"Invalid negative resource: {resource}\"\n    return True, \"Iron pickaxe exists and resource state is valid\"\n\n\nCRAFT_V1_CHECKED = '''def craft_iron_pickaxe(state):\n    if state.get(\"sticks\", 0) < 2:\n        raise RuntimeError(\"need at least 2 sticks\")\n    if state.get(\"iron_ingots\", 0) < 3:\n        raise RuntimeError(\"need 3 iron ingots; mining produced ore, not ingots\")\n    state[\"sticks\"] -= 2\n    state[\"iron_ingots\"] -= 3\n    state[\"iron_pickaxe\"] = state.get(\"iron_pickaxe\", 0) + 1\n    return state\n'''\nCRAFT_UNCHECKED = '''def craft_iron_pickaxe(state):\n    state[\"sticks\"] -= 2\n    state[\"iron_ingots\"] -= 3\n    state[\"iron_pickaxe\"] = state.get(\"iron_pickaxe\", 0) + 1\n    return state\n'''\nSMELT = '''def smelt_iron(state):\n    if state.get(\"iron_ore\", 0) < 3:\n        raise RuntimeError(\"need 3 iron ore to smelt\")\n    state[\"iron_ore\"] -= 3\n    state[\"iron_ingots\"] = state.get(\"iron_ingots\", 0) + 3\n    return state\n'''\nSTART = {\"wood\": 0, \"sticks\": 0, \"iron_ore\": 0, \"iron_ingots\": 0, \"iron_pickaxe\": 0}\n\n\nclass LearningLibrary(SkillLibrary):\n    def refine(self, skill_name, *, new_code=None, new_description=None, new_dependencies=None, new_tags=None):\n        if skill_name not in self.skills:\n            raise KeyError(f\"Cannot refine missing skill: {skill_name}\")\n        old = self.skills[skill_name]\n        refined = Skill(name=old.name, description=old.description if new_description is None else new_description,\n                        code=old.code if new_code is None else new_code, version=old.version + 1,\n                        tags=set(old.tags) if new_tags is None else set(new_tags),\n                        dependencies=list(old.dependencies) if new_dependencies is None else list(new_dependencies))\n        self.skills[skill_name] = refined\n        print(f\"[library] refined {skill_name}: v{old.version} -> v{refined.version}\")\n        return refined\n\n\ndef propose_next_task(library: SkillLibrary) -> str:\n    names = set(library.skills)\n    for needed, task in ((\"collect_wood\", \"Learn to collect wood\"), (\"make_sticks\", \"Learn to make sticks\"),\n                         (\"mine_iron\", \"Learn to mine iron\"), (\"smelt_iron\", \"Learn to smelt iron ore\"),\n                         (\"craft_iron_pickaxe\", \"Learn to craft an iron pickaxe\")):\n        if needed not in names:\n            return task\n    return \"Explore a harder task using existing skills\"\n\n\ndef diagnose(error: str) -> Optional[str]:\n    if error and \"iron ingots\" in error and \"ore\" in error:\n        return \"smelt_iron\"\n    return None"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "voyager_3.py",
    "headingEn": "main(): nine sections",
    "headingKn": "main(): ಒಂಬತ್ತು ವಿಭಾಗಗಳು",
    "descEn": "main() runs the failing attempt, diagnoses the gap, learns smelt_iron, refines the parent, retries and verifies, then examines the unchecked variant, what refine kept, how brittle the diagnosis is, and the restricted namespace.",
    "descKn": "main() ವಿಫಲ ಪ್ರಯತ್ನ ಚಲಾಯಿಸುತ್ತದೆ, ಅಂತರ ರೋಗನಿರ್ಣಯ ಮಾಡುತ್ತದೆ, smelt_iron ಕಲಿಯುತ್ತದೆ, ಪೋಷಕನನ್ನು ಪರಿಷ್ಕರಿಸುತ್ತದೆ, ಮರುಪ್ರಯತ್ನಿಸಿ ಪರಿಶೀಲಿಸುತ್ತದೆ, ನಂತರ ಪರಿಶೀಲನೆ ಇಲ್ಲದ ರೂಪಾಂತರ, refine ಏನು ಉಳಿಸಿತು, ರೋಗನಿರ್ಣಯ ಎಷ್ಟು ದುರ್ಬಲ ಮತ್ತು ನಿರ್ಬಂಧಿತ namespace ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    lib = LearningLibrary()\n    for s in (collect_wood, make_sticks, mine_iron):\n        lib.register(s)\n    craft = Skill(\"craft_iron_pickaxe\", \"Craft an iron pickaxe using iron and crafting sticks\", CRAFT_V1_CHECKED,\n                  tags={\"crafting\", \"tool\", \"iron\"}, dependencies=[\"make_sticks\", \"mine_iron\"])\n    lib.register(craft)\n\n    section(\"1. Attempt 1: compose and execute\")\n    plan = lib.compose(\"craft_iron_pickaxe\")\n    print(\"plan:\", [f\"{s.name} v{s.version}\" for s in plan])\n    r1 = run_plan(plan, START)\n    print(\"success:\", r1.success)\n    print(\"error  :\", r1.error)\n    print(\"state  :\", r1.state)\n\n    section(\"2. Diagnose the failure as a capability gap\")\n    print(\"curriculum before:\", propose_next_task(lib))\n    gap = diagnose(r1.error)\n    print(\"capability gap detected:\", gap)\n    smelt = Skill(\"smelt_iron\", \"Smelt mined iron ore into iron ingots for crafting\", SMELT, tags={\"crafting\", \"iron\", \"smelting\"}, dependencies=[\"mine_iron\"])\n    lib.register(smelt)\n    print(\"curriculum after :\", propose_next_task(lib))\n\n    section(\"3. Refine the parent, recompose, execute attempt 2\")\n    lib.refine(\"craft_iron_pickaxe\", new_dependencies=[\"make_sticks\", \"smelt_iron\"])\n    plan2 = lib.compose(\"craft_iron_pickaxe\")\n    print(\"plan:\", [f\"{s.name} v{s.version}\" for s in plan2])\n    r2 = run_plan(plan2, START)\n    print(\"success:\", r2.success, \"| state:\", r2.state)\n\n    section(\"4. Verification is separate from execution\")\n    print(\"verify:\", verify_iron_pickaxe(r2.state))\n    reuse = len(plan2) - 1\n    print(f\"reused {reuse} of {len(plan2)} skills in the plan -> reuse rate {reuse / len(plan2):.0%}\")\n\n    section(\"5. Genuinely checking: runtime success without the preconditions\")\n    unchecked = LearningLibrary()\n    for s in (collect_wood, make_sticks, mine_iron):\n        unchecked.register(s)\n    unchecked.register(Skill(\"craft_iron_pickaxe\", \"Craft an iron pickaxe\", CRAFT_UNCHECKED, dependencies=[\"make_sticks\", \"mine_iron\"]))\n    r3 = run_plan(unchecked.compose(\"craft_iron_pickaxe\"), START)\n    print(\"success:\", r3.success, \"| state:\", r3.state)\n    print(\"verify with only the goal check :\", r3.state.get(\"iron_pickaxe\", 0) >= 1)\n    print(\"verify with the invariant check :\", verify_iron_pickaxe(r3.state))\n\n    section(\"6. Genuinely checking: what refine() kept\")\n    print(\"versions held for craft_iron_pickaxe:\", [lib.skills[\"craft_iron_pickaxe\"].version], \"(v1 is gone, there is no history to roll back to)\")\n    print(\"v2 code identical to v1 code:\", lib.skills[\"craft_iron_pickaxe\"].code == CRAFT_V1_CHECKED, \"(the fix was in the graph, not the code)\")\n\n    section(\"7. Genuinely checking: the diagnosis is a string match\")\n    for err in (\"RuntimeError: need 3 iron ingots; mining produced ore, not ingots\", \"RuntimeError: need 3 iron ingot(s), got ore\", \"RuntimeError: out of iron\"):\n        print(f\"{err!r:<70} -> {diagnose(err)}\")\n\n    section(\"8. Genuinely checking: what the fully empty namespace does to the feedback\")\n    state = dict(START)\n    for s in lib.compose(\"make_sticks\") + [lib.skills[\"mine_iron\"]]:\n        state = load_skill_function(s, {})(state)\n    craft_v1 = Skill(\"craft_iron_pickaxe\", \"d\", CRAFT_V1_CHECKED)\n    try:\n        load_skill_function(craft_v1, {})(state)\n    except Exception as e:\n        err = f\"{type(e).__name__}: {e}\"\n        print(\"fully empty builtins ->\", err)\n        print(\"diagnosis from that message:\", diagnose(err), \"(the useful message never appeared)\")\n\n    section(\"9. Genuinely checking: skill code that needs other builtins\")\n    lib.register(Skill(\"count_wood\", \"Count the wood\", 'def count_wood(state):\\n    state[\"n\"] = sum([state.get(\"wood\", 0)])\\n    return state\\n'))\n    r4 = run_plan([lib.skills[\"count_wood\"]], START)\n    print(\"success:\", r4.success, \"|\", r4.error)"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "[library] registered collect_wood v1\n[library] registered make_sticks v1\n[library] registered mine_iron v1\n[library] registered craft_iron_pickaxe v1\n\n--- 1. Attempt 1: compose and execute ---\nplan: ['collect_wood v1', 'make_sticks v1', 'mine_iron v1', 'craft_iron_pickaxe v1']\n[execute] collect_wood v1\n[execute] make_sticks v1\n[execute] mine_iron v1\n[execute] craft_iron_pickaxe v1\nsuccess: False\nerror  : RuntimeError: need 3 iron ingots; mining produced ore, not ingots\nstate  : {'wood': 3, 'sticks': 4, 'iron_ore': 3, 'iron_ingots': 0, 'iron_pickaxe': 0}\n\n--- 2. Diagnose the failure as a capability gap ---\ncurriculum before: Learn to smelt iron ore\ncapability gap detected: smelt_iron\n[library] registered smelt_iron v1\ncurriculum after : Explore a harder task using existing skills\n\n--- 3. Refine the parent, recompose, execute attempt 2 ---\n[library] refined craft_iron_pickaxe: v1 -> v2\nplan: ['collect_wood v1', 'make_sticks v1', 'mine_iron v1', 'smelt_iron v1', 'craft_iron_pickaxe v2']\n[execute] collect_wood v1\n[execute] make_sticks v1\n[execute] mine_iron v1\n[execute] smelt_iron v1\n[execute] craft_iron_pickaxe v2\nsuccess: True | state: {'wood': 3, 'sticks': 2, 'iron_ore': 0, 'iron_ingots': 0, 'iron_pickaxe': 1}\n\n--- 4. Verification is separate from execution ---\nverify: (True, 'Iron pickaxe exists and resource state is valid')\nreused 4 of 5 skills in the plan -> reuse rate 80%\n\n--- 5. Genuinely checking: runtime success without the preconditions ---\n[library] registered collect_wood v1\n[library] registered make_sticks v1\n[library] registered mine_iron v1\n[library] registered craft_iron_pickaxe v1\n[execute] collect_wood v1\n[execute] make_sticks v1\n[execute] mine_iron v1\n[execute] craft_iron_pickaxe v1\nsuccess: True | state: {'wood': 3, 'sticks': 2, 'iron_ore': 3, 'iron_ingots': -3, 'iron_pickaxe': 1}\nverify with only the goal check : True\nverify with the invariant check : (False, 'Invalid negative resource: iron_ingots')\n\n--- 6. Genuinely checking: what refine() kept ---\nversions held for craft_iron_pickaxe: [2] (v1 is gone, there is no history to roll back to)\nv2 code identical to v1 code: True (the fix was in the graph, not the code)\n\n--- 7. Genuinely checking: the diagnosis is a string match ---\n'RuntimeError: need 3 iron ingots; mining produced ore, not ingots'    -> smelt_iron\n'RuntimeError: need 3 iron ingot(s), got ore'                          -> None\n'RuntimeError: out of iron'                                            -> None\n\n--- 8. Genuinely checking: what the fully empty namespace does to the feedback ---\nfully empty builtins -> NameError: name 'RuntimeError' is not defined\ndiagnosis from that message: None (the useful message never appeared)\n\n--- 9. Genuinely checking: skill code that needs other builtins ---\n[library] registered count_wood v1\n[execute] count_wood v1\nsuccess: False | NameError: name 'sum' is not defined"
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
    "headingEn": "Fail, Diagnose, Learn, Retry",
    "headingKn": "ವಿಫಲ, ರೋಗನಿರ್ಣಯ, ಕಲಿಕೆ, ಮರುಪ್ರಯತ್ನ",
    "bodyEn": "Attempt 1 runs collect_wood, make_sticks, mine_iron and craft_iron_pickaxe v1 and fails with \"RuntimeError: need 3 iron ingots; mining produced ore, not ingots\", leaving wood 3, sticks 4, iron_ore 3. The curriculum, before learning, proposes \"Learn to smelt iron ore\", and the diagnosis names smelt_iron. After registering smelt_iron and refining the parent to v2, the plan becomes collect_wood, make_sticks, mine_iron, smelt_iron, craft_iron_pickaxe v2 and ends with sticks 2, iron_ore 0, iron_ingots 0, iron_pickaxe 1. Verification passes, and four of five skills in the plan were reused: 80 percent.",
    "bodyKn": "ಪ್ರಯತ್ನ 1 collect_wood, make_sticks, mine_iron ಮತ್ತು craft_iron_pickaxe v1 ಚಲಾಯಿಸಿ \"RuntimeError: need 3 iron ingots; mining produced ore, not ingots\" ನೊಂದಿಗೆ ವಿಫಲವಾಗಿ wood 3, sticks 4, iron_ore 3 ಉಳಿಸುತ್ತದೆ. ಕಲಿಕೆಯ ಮೊದಲು curriculum \"Learn to smelt iron ore\" ಸೂಚಿಸುತ್ತದೆ, ಮತ್ತು ರೋಗನಿರ್ಣಯ smelt_iron ಹೆಸರಿಸುತ್ತದೆ. smelt_iron ನೋಂದಾಯಿಸಿ ಪೋಷಕನನ್ನು v2 ಗೆ ಪರಿಷ್ಕರಿಸಿದ ನಂತರ ಯೋಜನೆ collect_wood, make_sticks, mine_iron, smelt_iron, craft_iron_pickaxe v2 ಆಗಿ sticks 2, iron_ore 0, iron_ingots 0, iron_pickaxe 1 ರಲ್ಲಿ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ. ಪರಿಶೀಲನೆ ಯಶಸ್ವಿ, ಮತ್ತು ಯೋಜನೆಯ ಐದರಲ್ಲಿ ನಾಲ್ಕು skills ಮರುಬಳಕೆಯಾದವು: ಶೇಕಡಾ 80."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Pasted Loader Hid the Feedback",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅಂಟಿಸಿದ Loader ಪ್ರತಿಕ್ರಿಯೆ ಮರೆಮಾಡಿತು",
    "bodyEn": "Section 8 runs the same craft_iron_pickaxe v1 with the fully empty builtins the pasted loader used. The result is \"NameError: name RuntimeError is not defined\", not the informative message, and the diagnosis returns None, so the loop could not have found smelt_iron. The lesson's story only works because this lab's loader exposes RuntimeError. Execution feedback has to arrive intact: a refinement loop is only as good as the error it reads.",
    "bodyKn": "ವಿಭಾಗ 8 ಅಂಟಿಸಿದ loader ಬಳಸಿದ ಸಂಪೂರ್ಣ ಖಾಲಿ builtins ನೊಂದಿಗೆ ಅದೇ craft_iron_pickaxe v1 ಚಲಾಯಿಸುತ್ತದೆ. ಫಲಿತಾಂಶ ಮಾಹಿತಿಯುಕ್ತ ಸಂದೇಶವಲ್ಲ, \"NameError: name RuntimeError is not defined\", ಮತ್ತು ರೋಗನಿರ್ಣಯ None ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಚಕ್ರ smelt_iron ಕಂಡುಹಿಡಿಯಲು ಸಾಧ್ಯವಿರಲಿಲ್ಲ. ಈ ಲ್ಯಾಬ್‌ನ loader RuntimeError ಒದಗಿಸುವುದರಿಂದ ಮಾತ್ರ ಪಾಠದ ಕಥೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ. ಚಲಾವಣೆ ಪ್ರತಿಕ್ರಿಯೆ ಅಖಂಡವಾಗಿ ಬರಬೇಕು: ಪರಿಷ್ಕರಣೆ ಚಕ್ರ ಅದು ಓದುವ ದೋಷದಷ್ಟೇ ಒಳ್ಳೆಯದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Runtime Success Without Preconditions",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪೂರ್ವಷರತ್ತುಗಳಿಲ್ಲದ ರನ್‌ಟೈಮ್ ಯಶಸ್ಸು",
    "bodyEn": "Section 5 runs a craft_iron_pickaxe with no precondition checks. Nothing raises, success is True, and the state ends with iron_ingots -3 and iron_pickaxe 1. A verifier that checks only the goal artifact says True. The invariant check says False: \"Invalid negative resource: iron_ingots\". Explicit preconditions turn silent invalid states into actionable errors, and verification should test invariants, not just the artifact.",
    "bodyKn": "ವಿಭಾಗ 5 ಪೂರ್ವಷರತ್ತು ಪರಿಶೀಲನೆ ಇಲ್ಲದ craft_iron_pickaxe ಚಲಾಯಿಸುತ್ತದೆ. ಏನೂ ಎತ್ತುವುದಿಲ್ಲ, success True, ಮತ್ತು state iron_ingots -3 ಹಾಗೂ iron_pickaxe 1 ರಲ್ಲಿ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ. ಕೇವಲ ಗುರಿ ವಸ್ತು ಪರಿಶೀಲಿಸುವ verifier True ಎನ್ನುತ್ತದೆ. ನಿಯಮ ಪರಿಶೀಲನೆ False ಎನ್ನುತ್ತದೆ: \"Invalid negative resource: iron_ingots\". ಸ್ಪಷ್ಟ ಪೂರ್ವಷರತ್ತುಗಳು ಮೌನ ಅಮಾನ್ಯ ಸ್ಥಿತಿಗಳನ್ನು ಕ್ರಿಯಾತ್ಮಕ ದೋಷಗಳಾಗಿಸುತ್ತವೆ, ಮತ್ತು ಪರಿಶೀಲನೆ ವಸ್ತುವನ್ನು ಮಾತ್ರವಲ್ಲ, ನಿಯಮಗಳನ್ನು ಪರೀಕ್ಷಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Refine Overwrote History and the Diagnosis Is Brittle",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Refine ಇತಿಹಾಸ ಅಳಿಸಿತು ಮತ್ತು ರೋಗನಿರ್ಣಯ ದುರ್ಬಲ",
    "bodyEn": "Section 6: after refine, the library holds only craft_iron_pickaxe v2; v1 is gone, so there is nothing to roll back to, and v2's code is identical to v1's because the fix was in the dependency graph. A real store keeps every version and tests a refinement against the old successful cases before promoting it. Section 7: diagnose matches the exact phrase \"iron ingots\" with \"ore\". Rewording the same error as \"iron ingot(s), got ore\" returns None, and \"out of iron\" returns None. A model reading the error and the state would be more robust than a string rule, and the failure taxonomy (retrieval, planning, dependency, execution, verification) says which layer to repair.",
    "bodyKn": "ವಿಭಾಗ 6: refine ನಂತರ ಸಂಗ್ರಹ ಕೇವಲ craft_iron_pickaxe v2 ಹೊಂದಿದೆ; v1 ಹೋಗಿದೆ, ಆದ್ದರಿಂದ ಹಿಂತಿರುಗಲು ಏನೂ ಇಲ್ಲ, ಮತ್ತು ಸರಿಪಡಿಸುವಿಕೆ ಅವಲಂಬನೆ graph ನಲ್ಲಿದ್ದುದರಿಂದ v2 ನ ಕೋಡ್ v1 ರಂತೆಯೇ ಇದೆ. ನಿಜವಾದ ಸಂಗ್ರಹ ಪ್ರತಿ version ಉಳಿಸಿ, ಬಡ್ತಿ ನೀಡುವ ಮೊದಲು ಹಳೆಯ ಯಶಸ್ವಿ ಪ್ರಕರಣಗಳ ವಿರುದ್ಧ ಪರಿಷ್ಕರಣೆ ಪರೀಕ್ಷಿಸುತ್ತದೆ. ವಿಭಾಗ 7: diagnose \"iron ingots\" ಮತ್ತು \"ore\" ನಿಖರ ಪದಗುಚ್ಛ ಹೊಂದಿಸುತ್ತದೆ. ಅದೇ ದೋಷವನ್ನು \"iron ingot(s), got ore\" ಎಂದು ಮರುಪದಗೊಳಿಸಿದರೆ None, ಮತ್ತು \"out of iron\" None. ದೋಷ ಮತ್ತು state ಓದುವ ಮಾದರಿ ಸ್ಟ್ರಿಂಗ್ ನಿಯಮಕ್ಕಿಂತ ಹೆಚ್ಚು ದೃಢ, ಮತ್ತು ವೈಫಲ್ಯ ವರ್ಗೀಕರಣ (ಪಡೆಯುವಿಕೆ, ಯೋಜನೆ, ಅವಲಂಬನೆ, ಚಲಾವಣೆ, ಪರಿಶೀಲನೆ) ಯಾವ ಪದರ ದುರಸ್ತಿ ಮಾಡಬೇಕು ಎನ್ನುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Curriculum, Budgets and Production",
    "headingKn": "Curriculum, Budgets ಮತ್ತು Production",
    "bodyEn": "Voyager's curriculum is not a fixed checklist: it looks at the current skills and the world state and proposes something just past the frontier, neither trivial nor hopeless. Bound refinement with an attempt budget, since durable loops can persist forever otherwise. Measure the library by quality, not size: reuse rate, retrieval hit rate, duplicate rate, verification success, refinement count and regression rate. Treat retrieved skills as untrusted code: authorization, sandbox, approval and verification still apply, and stale skills need testing, deprecation and rollback.",
    "bodyKn": "Voyager ನ curriculum ನಿಗದಿತ ಪರಿಶೀಲನಾ ಪಟ್ಟಿಯಲ್ಲ: ಅದು ಪ್ರಸ್ತುತ skills ಮತ್ತು ಜಗತ್ತಿನ ಸ್ಥಿತಿ ನೋಡಿ ಗಡಿಯನ್ನು ಸ್ವಲ್ಪ ದಾಟಿದದ್ದನ್ನು, ಕ್ಷುಲ್ಲಕವೂ ನಿರಾಶಾದಾಯಕವೂ ಅಲ್ಲದ್ದನ್ನು, ಸೂಚಿಸುತ್ತದೆ. ಪರಿಷ್ಕರಣೆಯನ್ನು ಪ್ರಯತ್ನ budget ನಿಂದ ಮಿತಿಗೊಳಿಸಿ, ಇಲ್ಲದಿದ್ದರೆ ಸ್ಥಿರ ಚಕ್ರಗಳು ಶಾಶ್ವತವಾಗಿ ಉಳಿಯಬಹುದು. ಸಂಗ್ರಹವನ್ನು ಗಾತ್ರದಿಂದಲ್ಲ, ಗುಣಮಟ್ಟದಿಂದ ಅಳೆಯಿರಿ: ಮರುಬಳಕೆ ದರ, ಪಡೆಯುವಿಕೆ ಹಿಟ್ ದರ, ನಕಲು ದರ, ಪರಿಶೀಲನೆ ಯಶಸ್ಸು, ಪರಿಷ್ಕರಣೆ ಎಣಿಕೆ ಮತ್ತು ಹಿಂಜರಿಕೆ ದರ. ಪಡೆದ skills ಅನ್ನು ನಂಬಲಾಗದ ಕೋಡ್ ಎಂದು ಪರಿಗಣಿಸಿ: ಅಧಿಕಾರ, sandbox, ಅನುಮೋದನೆ ಮತ್ತು ಪರಿಶೀಲನೆ ಇನ್ನೂ ಅನ್ವಯಿಸುತ್ತವೆ, ಮತ್ತು ಹಳೆಯ skills ಗೆ ಪರೀಕ್ಷೆ, ಹಳತಾಗಿಸುವಿಕೆ ಮತ್ತು ಹಿಂತಿರುಗುವಿಕೆ ಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Capability compounds when verified procedures are kept: later tasks are mostly retrieval and composition, failures expose missing abstractions, and the improvement is visible, versioned and reversible rather than buried in weights.",
    "bodyKn": "ಪರಿಶೀಲಿತ ವಿಧಾನಗಳನ್ನು ಉಳಿಸಿದಾಗ ಸಾಮರ್ಥ್ಯ ಸಂಯೋಜಿತವಾಗಿ ಬೆಳೆಯುತ್ತದೆ: ನಂತರದ ಕಾರ್ಯಗಳು ಹೆಚ್ಚಾಗಿ ಪಡೆಯುವಿಕೆ ಮತ್ತು ಸಂಯೋಜನೆ, ವೈಫಲ್ಯಗಳು ಕಾಣೆಯಾದ ಅಮೂರ್ತತೆಗಳನ್ನು ಬಹಿರಂಗಪಡಿಸುತ್ತವೆ, ಮತ್ತು ಸುಧಾರಣೆ weights ನಲ್ಲಿ ಹೂತಿರದೆ ಗೋಚರ, version ಮಾಡಿದ ಮತ್ತು ಹಿಂತಿರುಗಿಸಬಹುದಾದದ್ದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"if it ran without an error, store it.\" A skill must also pass verification and, for a refinement, regression checks against earlier successes.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ದೋಷವಿಲ್ಲದೆ ಚಲಿಸಿದರೆ ಸಂಗ್ರಹಿಸಿ.\" Skill ಪರಿಶೀಲನೆ ಮತ್ತು, ಪರಿಷ್ಕರಣೆಗೆ, ಹಿಂದಿನ ಯಶಸ್ಸುಗಳ ವಿರುದ್ಧ ಹಿಂಜರಿಕೆ ಪರೀಕ್ಷೆಯನ್ನೂ ಪಾಸಾಗಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Execution feedback: the error or state returned by running a skill. Self-verification: checking the goal and invariants independently. Capability gap: a missing intermediate skill exposed by a failure. Refinement: producing the next version of an existing skill. Reuse rate: reused skills over skills in a plan. Regression: a fix that breaks earlier behaviour.",
    "bodyKn": "Execution feedback: skill ಚಲಾಯಿಸಿದಾಗ ಹಿಂತಿರುಗುವ ದೋಷ ಅಥವಾ state. Self-verification: ಗುರಿ ಮತ್ತು ನಿಯಮಗಳನ್ನು ಸ್ವತಂತ್ರವಾಗಿ ಪರಿಶೀಲಿಸುವುದು. Capability gap: ವೈಫಲ್ಯ ಬಹಿರಂಗಪಡಿಸಿದ ಕಾಣೆಯಾದ ಮಧ್ಯಂತರ skill. Refinement: ಇರುವ skill ನ ಮುಂದಿನ version ಉತ್ಪಾದಿಸುವುದು. Reuse rate: ಯೋಜನೆಯ skills ಮೇಲೆ ಮರುಬಳಸಿದ skills. Regression: ಹಿಂದಿನ ವರ್ತನೆ ಮುರಿಯುವ ಸರಿಪಡಿಸುವಿಕೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Execution, verification and refinement are three separate steps. 2) The failure exposed a missing skill, and the fix was a new skill plus a dependency change. 3) The pasted loader would have hidden the error message. 4) Without preconditions, a run succeeded with iron_ingots at -3. 5) refine overwrote v1 and the diagnosis was a brittle string match. 6) Bound attempts and measure reuse and verification, not size. 7) Retrieved skills are untrusted code. Next: the planning lessons.",
    "bodyKn": "1) ಚಲಾವಣೆ, ಪರಿಶೀಲನೆ ಮತ್ತು ಪರಿಷ್ಕರಣೆ ಮೂರು ಪ್ರತ್ಯೇಕ ಹೆಜ್ಜೆಗಳು. 2) ವೈಫಲ್ಯ ಕಾಣೆಯಾದ skill ಬಹಿರಂಗಪಡಿಸಿತು, ಮತ್ತು ಸರಿಪಡಿಸುವಿಕೆ ಹೊಸ skill ಮತ್ತು ಅವಲಂಬನೆ ಬದಲಾವಣೆ. 3) ಅಂಟಿಸಿದ loader ದೋಷ ಸಂದೇಶ ಮರೆಮಾಡುತ್ತಿತ್ತು. 4) ಪೂರ್ವಷರತ್ತುಗಳಿಲ್ಲದೆ ಒಂದು ಓಟ iron_ingots -3 ರೊಂದಿಗೆ ಯಶಸ್ವಿಯಾಯಿತು. 5) refine v1 ಅಳಿಸಿತು ಮತ್ತು ರೋಗನಿರ್ಣಯ ದುರ್ಬಲ ಸ್ಟ್ರಿಂಗ್ ಹೊಂದಾಣಿಕೆ. 6) ಪ್ರಯತ್ನಗಳಿಗೆ ಮಿತಿ ಹಾಕಿ ಮತ್ತು ಗಾತ್ರವಲ್ಲ, ಮರುಬಳಕೆ ಹಾಗೂ ಪರಿಶೀಲನೆ ಅಳೆಯಿರಿ. 7) ಪಡೆದ skills ನಂಬಲಾಗದ ಕೋಡ್. ಮುಂದೆ: ಯೋಜನಾ ಪಾಠಗಳು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why did the first craft_iron_pickaxe attempt fail?",
      "qKn": "ಮೊದಲ craft_iron_pickaxe ಪ್ರಯತ್ನ ಏಕೆ ವಿಫಲವಾಯಿತು?",
      "opts": [
       "collect_wood was missing",
       "Mining produced ore while crafting needed ingots, exposing the missing smelt_iron capability",
       "The graph had a cycle",
       "Retrieval returned nothing"
      ],
      "optsKn": [
       "collect_wood ಕಾಣೆಯಾಗಿತ್ತು",
       "Mining ore ಉತ್ಪಾದಿಸಿತು ಆದರೆ crafting ಗೆ ingots ಬೇಕಿತ್ತು, ಇದು ಕಾಣೆಯಾದ smelt_iron ಸಾಮರ್ಥ್ಯ ಬಹಿರಂಗಪಡಿಸಿತು",
       "Graph ಚಕ್ರ ಹೊಂದಿತ್ತು",
       "ಪಡೆಯುವಿಕೆ ಏನೂ ಹಿಂತಿರುಗಿಸಲಿಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "What happened to the diagnosis when the skill ran under fully empty builtins?",
      "qKn": "Skill ಸಂಪೂರ್ಣ ಖಾಲಿ builtins ಅಡಿಯಲ್ಲಿ ಚಲಿಸಿದಾಗ ರೋಗನಿರ್ಣಯಕ್ಕೆ ಏನಾಯಿತು?",
      "opts": [
       "It found smelt_iron faster",
       "The error became NameError for RuntimeError, so the diagnosis returned None",
       "It crashed Python",
       "Nothing changed"
      ],
      "optsKn": [
       "ಅದು smelt_iron ವೇಗವಾಗಿ ಕಂಡುಹಿಡಿಯಿತು",
       "ದೋಷ RuntimeError ಗೆ NameError ಆಯಿತು, ಆದ್ದರಿಂದ ರೋಗನಿರ್ಣಯ None ಹಿಂತಿರುಗಿಸಿತು",
       "ಅದು Python crash ಮಾಡಿತು",
       "ಏನೂ ಬದಲಾಗಲಿಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "The unchecked craft skill ran with no exception. What did the two verifiers say?",
      "qKn": "ಪರಿಶೀಲನೆ ಇಲ್ಲದ craft skill ವಿನಾಯಿತಿ ಇಲ್ಲದೆ ಚಲಿಸಿತು. ಎರಡು verifiers ಏನು ಹೇಳಿದವು?",
      "opts": [
       "Both said pass",
       "The goal-only check said True, the invariant check said False because iron_ingots was -3",
       "Both said fail",
       "The invariant check crashed"
      ],
      "optsKn": [
       "ಎರಡೂ ಪಾಸ್ ಎಂದವು",
       "ಗುರಿ-ಮಾತ್ರ ಪರಿಶೀಲನೆ True ಎಂದಿತು, iron_ingots -3 ಆದ್ದರಿಂದ ನಿಯಮ ಪರಿಶೀಲನೆ False ಎಂದಿತು",
       "ಎರಡೂ ವಿಫಲ ಎಂದವು",
       "ನಿಯಮ ಪರಿಶೀಲನೆ crash ಆಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What did refine() leave behind for craft_iron_pickaxe?",
      "qKn": "craft_iron_pickaxe ಗೆ refine() ಏನು ಉಳಿಸಿತು?",
      "opts": [
       "Both v1 and v2",
       "Only v2, so v1 cannot be rolled back to",
       "Neither",
       "A diff"
      ],
      "optsKn": [
       "v1 ಮತ್ತು v2 ಎರಡೂ",
       "ಕೇವಲ v2, ಆದ್ದರಿಂದ v1 ಗೆ ಹಿಂತಿರುಗಲಾಗದು",
       "ಯಾವುದೂ ಇಲ್ಲ",
       "ಒಂದು diff"
      ],
      "correct": 1
     },
     {
      "q": "Why is the demonstrated lifelong learning not a change to model weights?",
      "qKn": "ತೋರಿಸಿದ lifelong learning ಮಾದರಿ weights ಬದಲಾವಣೆ ಏಕೆ ಅಲ್ಲ?",
      "opts": [
       "Weights changed a little",
       "The improvement is the new smelt_iron skill, the refined dependency graph and the version bump, all external artifacts",
       "It used fine-tuning",
       "Nothing improved"
      ],
      "optsKn": [
       "Weights ಸ್ವಲ್ಪ ಬದಲಾದವು",
       "ಸುಧಾರಣೆ ಹೊಸ smelt_iron skill, ಪರಿಷ್ಕೃತ ಅವಲಂಬನೆ graph ಮತ್ತು version ಹೆಚ್ಚಳ, ಎಲ್ಲವೂ ಬಾಹ್ಯ ವಸ್ತುಗಳು",
       "ಅದು fine-tuning ಬಳಸಿತು",
       "ಏನೂ ಸುಧಾರಿಸಲಿಲ್ಲ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
