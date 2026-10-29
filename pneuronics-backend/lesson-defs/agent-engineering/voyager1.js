module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321529",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Skill Libraries and Lifelong Learning: Voyager (Part 1 of 3) — Skills as Executable Procedural Memory",
 "titleKn": "Skill Libraries ಮತ್ತು Lifelong Learning: Voyager (ಭಾಗ 1 / 3) — ಚಲಾಯಿಸಬಹುದಾದ ವಿಧಾನ ಮೆಮೊರಿಯಾಗಿ Skills",
 "desc": "Understand why agents should store verified procedures as skills, the three Voyager components and the Skill object, and find that an empty-builtins loader hides error messages and is not a sandbox.",
 "descKn": "ಪರಿಶೀಲಿತ ವಿಧಾನಗಳನ್ನು skills ಆಗಿ ಏಕೆ ಸಂಗ್ರಹಿಸಬೇಕು, ಮೂರು Voyager ಘಟಕಗಳು ಮತ್ತು Skill ವಸ್ತು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, ಮತ್ತು ಖಾಲಿ-builtins loader ದೋಷ ಸಂದೇಶ ಮರೆಮಾಡುತ್ತದೆ ಹಾಗೂ sandbox ಅಲ್ಲ ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Explain the costs of starting from scratch and how skills address them.",
  "Explain action-space-as-code and temporal abstraction.",
  "Name the three Voyager components.",
  "Implement a Skill dataclass and a name-contract loader.",
  "Explain why restricted exec is not a sandbox."
 ],
 "objectivesKn": [
  "ಮೊದಲಿನಿಂದ ಆರಂಭಿಸುವ ವೆಚ್ಚಗಳು ಮತ್ತು skills ಅವನ್ನು ಹೇಗೆ ಪರಿಹರಿಸುತ್ತವೆ ಎಂದು ವಿವರಿಸಿ.",
  "ಕೋಡ್ ಆಗಿ ಕ್ರಿಯಾ ಸ್ಥಳ ಮತ್ತು ಕಾಲಿಕ ಅಮೂರ್ತತೆ ವಿವರಿಸಿ.",
  "ಮೂರು Voyager ಘಟಕಗಳನ್ನು ಹೆಸರಿಸಿ.",
  "Skill dataclass ಮತ್ತು ಹೆಸರಿನ ಒಪ್ಪಂದದ loader ಅಳವಡಿಸಿ.",
  "ನಿರ್ಬಂಧಿತ exec sandbox ಏಕೆ ಅಲ್ಲ ಎಂದು ವಿವರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Skill Libraries and Lifelong Learning: Voyager (Part 1 of 3)",
    "textKn": "Skill Libraries ಮತ್ತು Lifelong Learning: Voyager (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: why skills, action-space-as-code, the three Voyager components and the Skill object. Every output below was genuinely produced by the lab file on Python 3.14.5. The lab is our own stdlib simulation of the idea in a tiny crafting world, not Voyager's Minecraft code. Section 5 changes one thing from the pasted text: the skill loader exposes RuntimeError, for a reason Part 3 explains. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: skills ಏಕೆ, ಕೋಡ್ ಆಗಿ ಕ್ರಿಯಾ ಸ್ಥಳ, ಮೂರು Voyager ಘಟಕಗಳು ಮತ್ತು Skill ವಸ್ತು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಲ್ಯಾಬ್ ಚಿಕ್ಕ crafting ಜಗತ್ತಿನಲ್ಲಿ ಕಲ್ಪನೆಯ ನಮ್ಮದೇ stdlib ಸಿಮ್ಯುಲೇಶನ್, Voyager ನ Minecraft ಕೋಡ್ ಅಲ್ಲ. ವಿಭಾಗ 5 ಅಂಟಿಸಿದ ಪಠ್ಯದಿಂದ ಒಂದು ವಿಷಯ ಬದಲಿಸುತ್ತದೆ: skill loader RuntimeError ಒದಗಿಸುತ್ತದೆ, ಕಾರಣವನ್ನು ಭಾಗ 3 ವಿವರಿಸುತ್ತದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Problem: Starting From Scratch",
    "textKn": "ಸಮಸ್ಯೆ: ಮೊದಲಿನಿಂದ ಆರಂಭ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Three Costs of Forgetting",
    "headingKn": "ಮರೆಯುವುದರ ಮೂರು ವೆಚ್ಚಗಳು",
    "bodyEn": "A stateless agent solves \"build a shelter\" and then, next session, rediscovers how to collect wood. The costs are token waste (reasoning is repeated), lost progress (a bug fixed in one session returns in the next) and no long-horizon composition (complex goals need hierarchy, not a flat run of commands). Voyager's answer is to turn each verified success into an executable skill, store it, retrieve it later and build larger skills out of smaller ones.",
    "bodyKn": "ಸ್ಥಿತಿರಹಿತ agent \"ಆಶ್ರಯ ಕಟ್ಟು\" ಪರಿಹರಿಸಿ, ಮುಂದಿನ ಅವಧಿಯಲ್ಲಿ ಮರದ ದಿಮ್ಮಿ ಸಂಗ್ರಹಿಸುವುದು ಹೇಗೆ ಎಂದು ಮತ್ತೆ ಕಂಡುಹಿಡಿಯುತ್ತದೆ. ವೆಚ್ಚಗಳು: token ವ್ಯರ್ಥ (ತರ್ಕ ಪುನರಾವರ್ತನೆ), ಕಳೆದುಹೋದ ಪ್ರಗತಿ (ಒಂದು ಅವಧಿಯಲ್ಲಿ ಸರಿಪಡಿಸಿದ ದೋಷ ಮುಂದಿನದರಲ್ಲಿ ಮರಳುತ್ತದೆ) ಮತ್ತು ದೀರ್ಘ-ಹಾರಿಜಾನ್ ಸಂಯೋಜನೆ ಇಲ್ಲ (ಸಂಕೀರ್ಣ ಗುರಿಗಳಿಗೆ ಸಮತಟ್ಟಾದ ಆದೇಶ ಸರಣಿಯಲ್ಲ, ಶ್ರೇಣಿ ಬೇಕು). Voyager ನ ಉತ್ತರ: ಪ್ರತಿ ಪರಿಶೀಲಿತ ಯಶಸ್ಸನ್ನು ಚಲಾಯಿಸಬಹುದಾದ skill ಆಗಿ ಪರಿವರ್ತಿಸಿ, ಸಂಗ್ರಹಿಸಿ, ನಂತರ ಪಡೆದು, ಚಿಕ್ಕ skills ಗಳಿಂದ ದೊಡ್ಡವನ್ನು ಕಟ್ಟುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Action Space as Code",
    "headingKn": "ಕೋಡ್ ಆಗಿ ಕ್ರಿಯಾ ಸ್ಥಳ",
    "bodyEn": "A primitive agent emits move, turn, mine, place, craft. A programmatic agent emits a function that contains loops, conditions, error handling and calls to other functions. One generated function can replace hundreds of primitive steps, and it can be named, stored and reused: temporal abstraction. The agent then asks \"which capability should I invoke next?\" instead of \"which tiny action next?\". Skills are procedural memory, the \"how to do it\" counterpart to the \"what is true\" memories of earlier lessons.",
    "bodyKn": "ಪ್ರಾಚೀನ agent move, turn, mine, place, craft ಹೊರಸೂಸುತ್ತದೆ. ಪ್ರೋಗ್ರಾಮ್ಯಾಟಿಕ್ agent loops, ಷರತ್ತುಗಳು, ದೋಷ ನಿರ್ವಹಣೆ ಮತ್ತು ಇತರ ಕಾರ್ಯಗಳ ಕರೆಗಳಿರುವ ಕಾರ್ಯ ಹೊರಸೂಸುತ್ತದೆ. ಒಂದು ಉತ್ಪಾದಿತ ಕಾರ್ಯ ನೂರಾರು ಪ್ರಾಚೀನ ಹೆಜ್ಜೆಗಳನ್ನು ಬದಲಿಸಬಲ್ಲದು, ಮತ್ತು ಅದಕ್ಕೆ ಹೆಸರಿಟ್ಟು, ಸಂಗ್ರಹಿಸಿ, ಮರುಬಳಸಬಹುದು: ಕಾಲಿಕ ಅಮೂರ್ತತೆ. ಆಗ agent \"ಮುಂದಿನ ಚಿಕ್ಕ ಕ್ರಿಯೆ ಯಾವುದು?\" ಬದಲು \"ಮುಂದೆ ಯಾವ ಸಾಮರ್ಥ್ಯ ಕರೆಯಬೇಕು?\" ಎಂದು ಕೇಳುತ್ತದೆ. Skills ಕಾರ್ಯವಿಧಾನದ ಮೆಮೊರಿ, ಹಿಂದಿನ ಪಾಠಗಳ \"ಏನು ನಿಜ\" ಮೆಮೊರಿಗಳಿಗೆ \"ಹೇಗೆ ಮಾಡುವುದು\" ಪ್ರತಿರೂಪ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Lifelong Loop",
    "headingKn": "Lifelong ಚಕ್ರ",
    "svgCode": "<svg viewBox=\"0 0 300 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"210\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Voyager-style lifelong loop</text>\n  <rect x=\"85\" y=\"22\" width=\"130\" height=\"20\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"35\" fill=\"#93c5fd\" text-anchor=\"middle\">CURRICULUM: next task</text>\n  <path d=\"M150,42 V50\" stroke=\"#475569\"/>\n  <rect x=\"85\" y=\"50\" width=\"130\" height=\"20\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"63\" fill=\"#6ee7b7\" text-anchor=\"middle\">SEARCH the skill library</text>\n  <path d=\"M150,70 V78\" stroke=\"#475569\"/>\n  <rect x=\"85\" y=\"78\" width=\"130\" height=\"20\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"91\" fill=\"#6ee7b7\" text-anchor=\"middle\">COMPOSE dependency order</text>\n  <path d=\"M150,98 V106\" stroke=\"#475569\"/>\n  <rect x=\"85\" y=\"106\" width=\"130\" height=\"20\" rx=\"4\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"119\" fill=\"#fde68a\" text-anchor=\"middle\">EXECUTE against the world</text>\n  <path d=\"M150,126 V136\" stroke=\"#475569\"/>\n  <rect x=\"85\" y=\"136\" width=\"130\" height=\"20\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"149\" fill=\"#93c5fd\" text-anchor=\"middle\">VERIFY goal and invariants</text>\n  <path d=\"M215,146 H262 V60 H215\" stroke=\"#f87171\" fill=\"none\"/><text x=\"266\" y=\"104\" fill=\"#fecaca\" font-size=\"6\">fail:</text><text x=\"266\" y=\"113\" fill=\"#fecaca\" font-size=\"6\">refine</text>\n  <path d=\"M150,156 V168\" stroke=\"#475569\"/>\n  <rect x=\"60\" y=\"168\" width=\"180\" height=\"22\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"182\" fill=\"#c4b5fd\" text-anchor=\"middle\">pass: STORE or bump version</text>\n  <text x=\"150\" y=\"203\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">capability grows outside the model weights</text>\n</svg>",
    "captionEn": "The curriculum proposes a task, the library supplies reusable skills, execution tests them in the world, and verified results are stored or refined.",
    "captionKn": "Curriculum ಕಾರ್ಯ ಸೂಚಿಸುತ್ತದೆ, ಸಂಗ್ರಹ ಮರುಬಳಸಬಹುದಾದ skills ನೀಡುತ್ತದೆ, ಚಲಾವಣೆ ಅವನ್ನು ಜಗತ್ತಿನಲ್ಲಿ ಪರೀಕ್ಷಿಸುತ್ತದೆ, ಮತ್ತು ಪರಿಶೀಲಿತ ಫಲಿತಾಂಶಗಳನ್ನು ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ ಅಥವಾ ಸುಧಾರಿಸಲಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Voyager's three components",
    "headingKn": "Voyager ನ ಮೂರು ಘಟಕಗಳು",
    "headers": [
     "Component",
     "Question it answers",
     "In this lab"
    ],
    "rows": [
     [
      "Automatic curriculum",
      "What should the agent learn next?",
      "propose_next_task() in Part 3"
     ],
     [
      "Skill library",
      "What do we already know how to do?",
      "SkillLibrary: register, search, compose, refine"
     ],
     [
      "Iterative prompting",
      "What do we do when it fails?",
      "Execute, read feedback, diagnose, refine, retry"
     ]
    ]
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Anatomy of a Skill",
    "headingKn": "Skill ನ ರಚನೆ",
    "bodyEn": "Six fields do six jobs. name is the stable identity other skills depend on. description is the retrieval surface. code is the executable procedure. version records refinements. tags give hard filters, so a \"mining\" query never lands on a software-build tool. dependencies make composition possible, turning a list of skills into a graph. The skill library is therefore not a bag of functions but a growing graph of capabilities.",
    "bodyKn": "ಆರು ಕ್ಷೇತ್ರಗಳು ಆರು ಕೆಲಸ ಮಾಡುತ್ತವೆ. name ಇತರ skills ಅವಲಂಬಿಸುವ ಸ್ಥಿರ ಗುರುತು. description ಪಡೆಯುವಿಕೆ ಮೇಲ್ಮೈ. code ಚಲಾಯಿಸಬಹುದಾದ ವಿಧಾನ. version ಸುಧಾರಣೆಗಳನ್ನು ದಾಖಲಿಸುತ್ತದೆ. tags ಕಠಿಣ ಫಿಲ್ಟರ್ ನೀಡುತ್ತವೆ, ಹಾಗಾಗಿ \"mining\" ಪ್ರಶ್ನೆ ಎಂದೂ ಸಾಫ್ಟ್‌ವೇರ್-ಬಿಲ್ಡ್ ಸಾಧನಕ್ಕೆ ಇಳಿಯುವುದಿಲ್ಲ. dependencies ಸಂಯೋಜನೆ ಸಾಧ್ಯಗೊಳಿಸಿ skills ಪಟ್ಟಿಯನ್ನು graph ಆಗಿಸುತ್ತವೆ. ಆದ್ದರಿಂದ skill library ಕಾರ್ಯಗಳ ಚೀಲವಲ್ಲ, ಬೆಳೆಯುವ ಸಾಮರ್ಥ್ಯಗಳ graph."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Skill and the Loader",
    "textKn": "Skill ಮತ್ತು Loader",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "voyager_1.py",
    "headingEn": "Skill, three primitive skills and the loader",
    "headingKn": "Skill, ಮೂರು ಪ್ರಾಚೀನ skills ಮತ್ತು loader",
    "descEn": "Skill is a dataclass with per-instance tag and dependency containers. collect_wood, make_sticks and mine_iron operate on a shared state dictionary. load_skill_function compiles the code string in a controlled namespace and checks the contract that the function is named like the skill. It exposes only RuntimeError, so a skill can raise its own error message.",
    "descKn": "Skill ಪ್ರತಿ-ಉದಾಹರಣೆ tag ಮತ್ತು dependency ಕಂಟೈನರ್‌ಗಳಿರುವ dataclass. collect_wood, make_sticks ಮತ್ತು mine_iron ಹಂಚಿಕೆಯ state ನಿಘಂಟಿನ ಮೇಲೆ ಕೆಲಸ ಮಾಡುತ್ತವೆ. load_skill_function ಕೋಡ್ ಸ್ಟ್ರಿಂಗ್ ಅನ್ನು ನಿಯಂತ್ರಿತ namespace ನಲ್ಲಿ compile ಮಾಡಿ, ಕಾರ್ಯದ ಹೆಸರು skill ಹೆಸರಿನಂತಿರಬೇಕು ಎಂಬ ಒಪ್ಪಂದ ಪರಿಶೀಲಿಸುತ್ತದೆ. ಅದು ಕೇವಲ RuntimeError ಒದಗಿಸುತ್ತದೆ, ಹಾಗಾಗಿ skill ತನ್ನದೇ ದೋಷ ಸಂದೇಶ ಎತ್ತಬಹುದು.",
    "code": "@dataclass\nclass Skill:\n    name: str\n    description: str\n    code: str\n    version: int = 1\n    tags: set = field(default_factory=set)\n    dependencies: list = field(default_factory=list)\n\n\ncollect_wood = Skill(\n    name=\"collect_wood\",\n    description=\"Collect wood logs for crafting\",\n    code='def collect_wood(state):\\n    state[\"wood\"] = state.get(\"wood\", 0) + 4\\n    return state\\n',\n    tags={\"resource\", \"wood\"},\n)\nmake_sticks = Skill(\n    name=\"make_sticks\",\n    description=\"Turn collected wood into crafting sticks\",\n    code='def make_sticks(state):\\n    state[\"wood\"] -= 1\\n    state[\"sticks\"] = state.get(\"sticks\", 0) + 4\\n    return state\\n',\n    tags={\"crafting\", \"wood\"},\n    dependencies=[\"collect_wood\"],\n)\nmine_iron = Skill(\n    name=\"mine_iron\",\n    description=\"Mine iron ore for advanced tools\",\n    code='def mine_iron(state):\\n    state[\"iron_ore\"] = state.get(\"iron_ore\", 0) + 3\\n    return state\\n',\n    tags={\"resource\", \"mining\", \"iron\"},\n)\n\n\ndef load_skill_function(skill: Skill, allowed=None):\n    \"\"\"allowed=None exposes only RuntimeError, so a skill can raise its own feedback; allowed={} is the fully empty namespace.\"\"\"\n    namespace = {}\n    builtins = {\"RuntimeError\": RuntimeError} if allowed is None else allowed\n    exec(skill.code, {\"__builtins__\": builtins}, namespace)\n    function = namespace.get(skill.name)\n    if function is None:\n        raise ValueError(f\"Skill {skill.name} did not define a function named {skill.name}\")\n    return function"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "voyager_1.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() shows the skills, runs them against a state, checks dataclass defaults, checks the name contract, and then examines exactly what a restricted namespace does and does not provide.",
    "descKn": "main() skills ತೋರಿಸುತ್ತದೆ, state ಮೇಲೆ ಚಲಾಯಿಸುತ್ತದೆ, dataclass ಡೀಫಾಲ್ಟ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ, ಹೆಸರಿನ ಒಪ್ಪಂದ ಪರಿಶೀಲಿಸುತ್ತದೆ, ಮತ್ತು ನಿರ್ಬಂಧಿತ namespace ಏನು ನೀಡುತ್ತದೆ ಮತ್ತು ನೀಡುವುದಿಲ್ಲ ಎಂದು ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. A skill is metadata plus code\")\n    for s in (collect_wood, make_sticks, mine_iron):\n        print(f\"{s.name:<12} v{s.version} tags={sorted(s.tags)} deps={s.dependencies}\")\n        print(f\"             description: {s.description}\")\n\n    section(\"2. Running skills against a state dictionary\")\n    state = {\"wood\": 0, \"sticks\": 0, \"iron_ore\": 0}\n    for s in (collect_wood, make_sticks, mine_iron):\n        state = load_skill_function(s)(state)\n        print(f\"after {s.name:<12} -> {state}\")\n\n    section(\"3. Dataclass defaults are per instance\")\n    a, b = Skill(\"a\", \"d\", \"c\"), Skill(\"b\", \"d\", \"c\")\n    a.tags.add(\"only-a\")\n    a.dependencies.append(\"x\")\n    print(\"a.tags:\", a.tags, \"| b.tags:\", b.tags, \"| a.deps:\", a.dependencies, \"| b.deps:\", b.dependencies)\n\n    section(\"4. The contract: function name must equal skill name\")\n    bad = Skill(\"collect_logs\", \"d\", 'def gather(state):\\n    return state\\n')\n    try:\n        load_skill_function(bad)\n    except ValueError as e:\n        print(\"rejected:\", e)\n\n    section(\"5. Genuinely checking what empty __builtins__ does\")\n    uses_len = Skill(\"count_items\", \"d\", 'def count_items(state):\\n    state[\"n\"] = len(state)\\n    return state\\n')\n    try:\n        load_skill_function(uses_len)({\"a\": 1})\n    except NameError as e:\n        print(\"skill using len() fails:\", e)\n    raises = Skill(\"needs_ingots\", \"d\", 'def needs_ingots(state):\\n    raise RuntimeError(\"need 3 iron ingots\")\\n')\n    for label, allowed in ((\"fully empty builtins\", {}), (\"RuntimeError allowed \", None)):\n        try:\n            load_skill_function(raises, allowed)({})\n        except Exception as e:\n            print(f\"{label} -> {type(e).__name__}: {e}\")\n    uses_print = Skill(\"shout\", \"d\", 'def shout(state):\\n    print(\"hi\")\\n    return state\\n')\n    try:\n        load_skill_function(uses_print)({})\n    except NameError as e:\n        print(\"skill using print() fails:\", e)\n\n    section(\"6. Genuinely checking whether that is a sandbox\")\n    probe = Skill(\"probe\", \"d\", 'def probe(state):\\n    state[\"reachable\"] = len(().__class__.__mro__[-1].__subclasses__()) if False else 0\\n    return state\\n')\n    code = 'def probe(state):\\n    state[\"n\"] = ().__class__.__mro__[-1].__subclasses__().__len__()\\n    return state\\n'\n    result = load_skill_function(Skill(\"probe\", \"d\", code))({})\n    print(\"with builtins emptied, the skill still reached\", result[\"n\"], \"classes through attribute access alone\")\n    print(\"so exec with {'__builtins__': {}} limits convenience, it does not isolate untrusted code\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. A skill is metadata plus code ---\ncollect_wood v1 tags=['resource', 'wood'] deps=[]\n             description: Collect wood logs for crafting\nmake_sticks  v1 tags=['crafting', 'wood'] deps=['collect_wood']\n             description: Turn collected wood into crafting sticks\nmine_iron    v1 tags=['iron', 'mining', 'resource'] deps=[]\n             description: Mine iron ore for advanced tools\n\n--- 2. Running skills against a state dictionary ---\nafter collect_wood -> {'wood': 4, 'sticks': 0, 'iron_ore': 0}\nafter make_sticks  -> {'wood': 3, 'sticks': 4, 'iron_ore': 0}\nafter mine_iron    -> {'wood': 3, 'sticks': 4, 'iron_ore': 3}\n\n--- 3. Dataclass defaults are per instance ---\na.tags: {'only-a'} | b.tags: set() | a.deps: ['x'] | b.deps: []\n\n--- 4. The contract: function name must equal skill name ---\nrejected: Skill collect_logs did not define a function named collect_logs\n\n--- 5. Genuinely checking what empty __builtins__ does ---\nskill using len() fails: name 'len' is not defined\nfully empty builtins -> NameError: name 'RuntimeError' is not defined\nRuntimeError allowed  -> RuntimeError: need 3 iron ingots\nskill using print() fails: name 'print' is not defined\n\n--- 6. Genuinely checking whether that is a sandbox ---\nwith builtins emptied, the skill still reached 265 classes through attribute access alone\nso exec with {'__builtins__': {}} limits convenience, it does not isolate untrusted code"
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
    "headingEn": "Skills Run Against State",
    "headingKn": "Skills State ಮೇಲೆ ಚಲಿಸುತ್ತವೆ",
    "bodyEn": "Section 2 chains the three skills over {wood: 0, sticks: 0, iron_ore: 0}: collect_wood gives wood 4, make_sticks turns one wood into four sticks (wood 3, sticks 4) and mine_iron adds three ore. Section 3 confirms that tags and dependencies are separate per Skill, because default_factory builds a new container for each instance. Section 4 rejects a skill whose function is named gather when the skill is named collect_logs; the loader enforces the name contract.",
    "bodyKn": "ವಿಭಾಗ 2 ಮೂರು skills ಅನ್ನು {wood: 0, sticks: 0, iron_ore: 0} ಮೇಲೆ ಸರಪಳಿ ಮಾಡುತ್ತದೆ: collect_wood wood 4 ನೀಡುತ್ತದೆ, make_sticks ಒಂದು wood ಅನ್ನು ನಾಲ್ಕು sticks ಆಗಿಸುತ್ತದೆ (wood 3, sticks 4) ಮತ್ತು mine_iron ಮೂರು ore ಸೇರಿಸುತ್ತದೆ. ವಿಭಾಗ 3 default_factory ಪ್ರತಿ ಉದಾಹರಣೆಗೆ ಹೊಸ ಕಂಟೈನರ್ ರಚಿಸುವುದರಿಂದ tags ಮತ್ತು dependencies ಪ್ರತಿ Skill ಗೆ ಪ್ರತ್ಯೇಕ ಎಂದು ದೃಢಪಡಿಸುತ್ತದೆ. ವಿಭಾಗ 4 ಕಾರ್ಯ gather ಎಂದು ಹೆಸರಿಸಿದ ಆದರೆ skill collect_logs ಎಂದಿರುವ skill ಅನ್ನು ತಿರಸ್ಕರಿಸುತ್ತದೆ; loader ಹೆಸರಿನ ಒಪ್ಪಂದ ಜಾರಿಗೊಳಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: An Empty Namespace Hides the Error",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಖಾಲಿ Namespace ದೋಷ ಮರೆಮಾಡುತ್ತದೆ",
    "bodyEn": "The pasted loader used exec(code, {\"__builtins__\": {}}, namespace). Section 5 shows what that does: a skill using len() or print() fails with NameError. Worse, a skill that tries to raise RuntimeError(\"need 3 iron ingots\") fails with \"NameError: name RuntimeError is not defined\", so the informative message is replaced by a confusing one. With RuntimeError allowed, the skill raises exactly what it intended. Part 3 depends on that message, so this lab's loader exposes RuntimeError, and it records the pasted behaviour as a finding.",
    "bodyKn": "ಅಂಟಿಸಿದ loader exec(code, {\"__builtins__\": {}}, namespace) ಬಳಸಿತು. ವಿಭಾಗ 5 ಅದು ಏನು ಮಾಡುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ: len() ಅಥವಾ print() ಬಳಸುವ skill NameError ನೊಂದಿಗೆ ವಿಫಲವಾಗುತ್ತದೆ. ಹೆಚ್ಚು ಕೆಟ್ಟದಾಗಿ, RuntimeError(\"need 3 iron ingots\") ಎತ್ತಲು ಪ್ರಯತ್ನಿಸುವ skill \"NameError: name RuntimeError is not defined\" ನೊಂದಿಗೆ ವಿಫಲವಾಗುತ್ತದೆ, ಹಾಗಾಗಿ ಮಾಹಿತಿಯುಕ್ತ ಸಂದೇಶ ಗೊಂದಲದ್ದರಿಂದ ಬದಲಾಗುತ್ತದೆ. RuntimeError ಅನುಮತಿಸಿದರೆ skill ತಾನು ಉದ್ದೇಶಿಸಿದ್ದನ್ನೇ ಎತ್ತುತ್ತದೆ. ಭಾಗ 3 ಆ ಸಂದೇಶವನ್ನು ಅವಲಂಬಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಈ ಲ್ಯಾಬ್‌ನ loader RuntimeError ಒದಗಿಸುತ್ತದೆ ಮತ್ತು ಅಂಟಿಸಿದ ವರ್ತನೆಯನ್ನು ಕಂಡುಹಿಡಿತವಾಗಿ ದಾಖಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: This Is Not a Sandbox",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಇದು Sandbox ಅಲ್ಲ",
    "bodyEn": "Section 6 runs a skill with builtins emptied that still reaches 265 classes through attribute access alone (().__class__.__mro__[-1].__subclasses__()). Removing names from builtins limits convenience, it does not isolate untrusted code. The loader is acceptable here because every skill string is written by this lesson. Model-generated skills need a real sandbox: a separate process, resource and time limits, no network or filesystem by default, authorization checks and approval for risky actions.",
    "bodyKn": "ವಿಭಾಗ 6 builtins ಖಾಲಿ ಮಾಡಿದ skill ಅನ್ನು ಚಲಾಯಿಸುತ್ತದೆ, ಅದು ಕೇವಲ ಗುಣಲಕ್ಷಣ ಪ್ರವೇಶದಿಂದಲೇ 265 ತರಗತಿಗಳನ್ನು ತಲುಪುತ್ತದೆ (().__class__.__mro__[-1].__subclasses__()). builtins ನಿಂದ ಹೆಸರುಗಳನ್ನು ತೆಗೆಯುವುದು ಅನುಕೂಲ ಮಿತಿಗೊಳಿಸುತ್ತದೆ, ನಂಬಲಾಗದ ಕೋಡ್ ಅನ್ನು ಪ್ರತ್ಯೇಕಿಸುವುದಿಲ್ಲ. ಪ್ರತಿ skill ಸ್ಟ್ರಿಂಗ್ ಈ ಪಾಠವೇ ಬರೆದದ್ದಾದ್ದರಿಂದ ಇಲ್ಲಿ loader ಸ್ವೀಕಾರಾರ್ಹ. ಮಾದರಿ-ಉತ್ಪಾದಿತ skills ಗೆ ನಿಜವಾದ sandbox ಬೇಕು: ಪ್ರತ್ಯೇಕ ಪ್ರಕ್ರಿಯೆ, ಸಂಪನ್ಮೂಲ ಮತ್ತು ಸಮಯ ಮಿತಿಗಳು, ಡೀಫಾಲ್ಟ್ ಆಗಿ ನೆಟ್‌ವರ್ಕ್ ಅಥವಾ ಫೈಲ್‌ಸಿಸ್ಟಮ್ ಇಲ್ಲ, ಅಧಿಕಾರ ಪರಿಶೀಲನೆ ಮತ್ತು ಅಪಾಯಕಾರಿ ಕ್ರಿಯೆಗಳಿಗೆ ಅನುಮೋದನೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Skills Versus Fine-Tuning and Prompts",
    "headingKn": "Skills ಮತ್ತು Fine-Tuning ಹಾಗೂ Prompts",
    "bodyEn": "Fine-tuning changes model weights; a skill library changes external artifacts, so the model stays the same while capability grows. Skills are inspectable, editable, versioned, testable, deletable and shareable, and a broken mine_iron v2 can be isolated and tested alone, which is hard for knowledge buried in weights. Compared with a giant always-loaded prompt, skills are retrieved on demand, so a small core prompt plus the few relevant skills replaces thousands of words of instructions.",
    "bodyKn": "Fine-tuning ಮಾದರಿ weights ಬದಲಿಸುತ್ತದೆ; skill library ಬಾಹ್ಯ ವಸ್ತುಗಳನ್ನು ಬದಲಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಮಾದರಿ ಹಾಗೇ ಇದ್ದು ಸಾಮರ್ಥ್ಯ ಬೆಳೆಯುತ್ತದೆ. Skills ಪರಿಶೀಲಿಸಬಹುದಾದ, ಸಂಪಾದಿಸಬಹುದಾದ, version ಮಾಡಿದ, ಪರೀಕ್ಷಿಸಬಹುದಾದ, ಅಳಿಸಬಹುದಾದ ಮತ್ತು ಹಂಚಬಹುದಾದವು, ಮತ್ತು ಮುರಿದ mine_iron v2 ಅನ್ನು ಪ್ರತ್ಯೇಕಿಸಿ ಒಂಟಿಯಾಗಿ ಪರೀಕ್ಷಿಸಬಹುದು, weights ನಲ್ಲಿ ಹೂತ ಜ್ಞಾನಕ್ಕೆ ಇದು ಕಷ್ಟ. ಯಾವಾಗಲೂ-ಲೋಡ್ ಆಗುವ ದೊಡ್ಡ prompt ಗೆ ಹೋಲಿಸಿದರೆ skills ಬೇಡಿಕೆಯ ಮೇಲೆ ಪಡೆಯಲ್ಪಡುತ್ತವೆ, ಆದ್ದರಿಂದ ಚಿಕ್ಕ core prompt ಮತ್ತು ಕೆಲವು ಸಂಬಂಧಿತ skills ಸಾವಿರಾರು ಪದಗಳ ಸೂಚನೆಗಳನ್ನು ಬದಲಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Long-horizon tasks are compositional. Storing verified procedures as named, composable code lets later tasks be mostly retrieval and composition with a little new generation, and lets capability accumulate across sessions without retraining.",
    "bodyKn": "ದೀರ್ಘ-ಹಾರಿಜಾನ್ ಕಾರ್ಯಗಳು ಸಂಯೋಜನಾತ್ಮಕ. ಪರಿಶೀಲಿತ ವಿಧಾನಗಳನ್ನು ಹೆಸರಿನ, ಸಂಯೋಜಿಸಬಹುದಾದ ಕೋಡ್ ಆಗಿ ಸಂಗ್ರಹಿಸುವುದು ನಂತರದ ಕಾರ್ಯಗಳು ಹೆಚ್ಚಾಗಿ ಪಡೆಯುವಿಕೆ ಮತ್ತು ಸಂಯೋಜನೆ, ಸ್ವಲ್ಪ ಹೊಸ ಉತ್ಪಾದನೆ ಆಗಲು ಅವಕಾಶ ನೀಡುತ್ತದೆ, ಮತ್ತು ಮರುತರಬೇತಿಯಿಲ್ಲದೆ ಅವಧಿಗಳಾದ್ಯಂತ ಸಾಮರ್ಥ್ಯ ಸಂಗ್ರಹವಾಗಲು ಬಿಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"lifelong learning means the model's weights keep changing.\" Here the model is fixed and the persistent skill library, with retrieval, feedback and versioning, is what improves.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"lifelong learning ಎಂದರೆ ಮಾದರಿಯ weights ಬದಲಾಗುತ್ತಲೇ ಇರುತ್ತವೆ.\" ಇಲ್ಲಿ ಮಾದರಿ ನಿಗದಿ, ಮತ್ತು ಪಡೆಯುವಿಕೆ, ಪ್ರತಿಕ್ರಿಯೆ ಹಾಗೂ version ಇರುವ ನಿರಂತರ skill library ಸುಧಾರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Skill: a named, reusable, executable capability with metadata. Action-space-as-code: extended actions expressed as programs. Procedural memory: stored how-to knowledge. Temporal abstraction: one skill standing for many steps. Curriculum: choosing what to learn next. Iterative prompting: using execution feedback to revise. Skill DAG: the dependency graph between skills.",
    "bodyKn": "Skill: ಮೆಟಾಡೇಟಾ ಇರುವ, ಹೆಸರಿನ, ಮರುಬಳಸಬಹುದಾದ, ಚಲಾಯಿಸಬಹುದಾದ ಸಾಮರ್ಥ್ಯ. Action-space-as-code: ವಿಸ್ತೃತ ಕ್ರಿಯೆಗಳನ್ನು ಪ್ರೋಗ್ರಾಂಗಳಾಗಿ ವ್ಯಕ್ತಪಡಿಸುವುದು. Procedural memory: ಸಂಗ್ರಹಿತ ಹೇಗೆ-ಮಾಡುವುದು ಜ್ಞಾನ. Temporal abstraction: ಹಲವು ಹೆಜ್ಜೆಗಳನ್ನು ಪ್ರತಿನಿಧಿಸುವ ಒಂದು skill. Curriculum: ಮುಂದೆ ಏನು ಕಲಿಯಬೇಕು ಎಂದು ಆರಿಸುವುದು. Iterative prompting: ಪರಿಷ್ಕರಿಸಲು ಚಲಾವಣೆ ಪ್ರತಿಕ್ರಿಯೆ ಬಳಸುವುದು. Skill DAG: skills ನಡುವಿನ ಅವಲಂಬನೆ graph."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Store verified successes as executable skills instead of re-deriving them. 2) Voyager has three parts: curriculum, skill library, iterative prompting. 3) A skill has name, description, code, version, tags and dependencies, each with a job. 4) The loader enforces the name contract. 5) An empty builtins namespace hid the intended error message. 6) It is also not a sandbox. 7) Improvement happens outside the weights. Part 2 builds the library.",
    "bodyKn": "1) ಪರಿಶೀಲಿತ ಯಶಸ್ಸುಗಳನ್ನು ಮರು-ಹುಡುಕುವ ಬದಲು ಚಲಾಯಿಸಬಹುದಾದ skills ಆಗಿ ಸಂಗ್ರಹಿಸಿ. 2) Voyager ಗೆ ಮೂರು ಭಾಗಗಳು: curriculum, skill library, iterative prompting. 3) Skill ಗೆ name, description, code, version, tags ಮತ್ತು dependencies ಇವೆ, ಪ್ರತಿಯೊಂದಕ್ಕೂ ಕೆಲಸವಿದೆ. 4) Loader ಹೆಸರಿನ ಒಪ್ಪಂದ ಜಾರಿಗೊಳಿಸುತ್ತದೆ. 5) ಖಾಲಿ builtins namespace ಉದ್ದೇಶಿತ ದೋಷ ಸಂದೇಶ ಮರೆಮಾಡಿತು. 6) ಅದು sandbox ಕೂಡ ಅಲ್ಲ. 7) ಸುಧಾರಣೆ weights ಹೊರಗೆ ನಡೆಯುತ್ತದೆ. ಭಾಗ 2 ಸಂಗ್ರಹ ನಿರ್ಮಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What are Voyager's three main components?",
      "qKn": "Voyager ನ ಮೂರು ಮುಖ್ಯ ಘಟಕಗಳು ಯಾವುವು?",
      "opts": [
       "Planner, executor, critic",
       "Retriever, reranker, generator",
       "Automatic curriculum, skill library, iterative prompting",
       "Encoder, decoder, value model"
      ],
      "optsKn": [
       "Planner, executor, critic",
       "Retriever, reranker, generator",
       "Automatic curriculum, skill library, iterative prompting",
       "Encoder, decoder, value model"
      ],
      "correct": 2
     },
     {
      "q": "What does action-space-as-code mean?",
      "qKn": "ಕೋಡ್ ಆಗಿ ಕ್ರಿಯಾ ಸ್ಥಳ ಎಂದರೇನು?",
      "opts": [
       "Every response must be Python",
       "Extended actions are expressed as executable programs, not only primitive commands",
       "Weights contain source code",
       "Actions are converted to embeddings"
      ],
      "optsKn": [
       "ಪ್ರತಿ ಉತ್ತರ Python ಆಗಿರಬೇಕು",
       "ವಿಸ್ತೃತ ಕ್ರಿಯೆಗಳನ್ನು ಕೇವಲ ಪ್ರಾಚೀನ ಆದೇಶಗಳಲ್ಲ, ಚಲಾಯಿಸಬಹುದಾದ ಪ್ರೋಗ್ರಾಂಗಳಾಗಿ ವ್ಯಕ್ತಪಡಿಸಲಾಗುತ್ತದೆ",
       "Weights ಮೂಲ ಕೋಡ್ ಹೊಂದಿವೆ",
       "ಕ್ರಿಯೆಗಳು embeddings ಆಗುತ್ತವೆ"
      ],
      "correct": 1
     },
     {
      "q": "In the lab, why did a skill raising RuntimeError fail with a NameError under fully empty builtins?",
      "qKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ, ಸಂಪೂರ್ಣ ಖಾಲಿ builtins ಅಡಿಯಲ್ಲಿ RuntimeError ಎತ್ತುವ skill NameError ನೊಂದಿಗೆ ಏಕೆ ವಿಫಲವಾಯಿತು?",
      "opts": [
       "RuntimeError was misspelled",
       "RuntimeError is itself a builtin name, and none were available",
       "Python forbids raising errors",
       "The skill had no tags"
      ],
      "optsKn": [
       "RuntimeError ತಪ್ಪಾಗಿ ಬರೆದಿತ್ತು",
       "RuntimeError ಸ್ವತಃ builtin ಹೆಸರು, ಮತ್ತು ಯಾವುದೂ ಲಭ್ಯವಿರಲಿಲ್ಲ",
       "Python ದೋಷ ಎತ್ತುವುದನ್ನು ನಿಷೇಧಿಸುತ್ತದೆ",
       "Skill ಗೆ tags ಇರಲಿಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "Why is exec with empty __builtins__ not a security sandbox?",
      "qKn": "ಖಾಲಿ __builtins__ ಇರುವ exec ಭದ್ರತಾ sandbox ಏಕೆ ಅಲ್ಲ?",
      "opts": [
       "It is too slow",
       "Attribute access still reached 265 classes, so untrusted code is not isolated",
       "It forbids all code",
       "It needs a network"
      ],
      "optsKn": [
       "ಅದು ತುಂಬಾ ನಿಧಾನ",
       "ಗುಣಲಕ್ಷಣ ಪ್ರವೇಶ ಇನ್ನೂ 265 ತರಗತಿಗಳನ್ನು ತಲುಪಿತು, ಆದ್ದರಿಂದ ನಂಬಲಾಗದ ಕೋಡ್ ಪ್ರತ್ಯೇಕವಾಗಿಲ್ಲ",
       "ಅದು ಎಲ್ಲಾ ಕೋಡ್ ನಿಷೇಧಿಸುತ್ತದೆ",
       "ಅದಕ್ಕೆ ನೆಟ್‌ವರ್ಕ್ ಬೇಕು"
      ],
      "correct": 1
     },
     {
      "q": "What is the main difference between fine-tuning and a skill library?",
      "qKn": "Fine-tuning ಮತ್ತು skill library ನಡುವಿನ ಮುಖ್ಯ ವ್ಯತ್ಯಾಸ ಏನು?",
      "opts": [
       "None",
       "Fine-tuning changes model parameters; a skill library stores learned capability externally as reusable artifacts",
       "Skill libraries always win",
       "Fine-tuning cannot learn procedures"
      ],
      "optsKn": [
       "ಯಾವುದೂ ಇಲ್ಲ",
       "Fine-tuning ಮಾದರಿ ನಿಯತಾಂಕಗಳನ್ನು ಬದಲಿಸುತ್ತದೆ; skill library ಕಲಿತ ಸಾಮರ್ಥ್ಯವನ್ನು ಮರುಬಳಸಬಹುದಾದ ವಸ್ತುಗಳಾಗಿ ಹೊರಗೆ ಸಂಗ್ರಹಿಸುತ್ತದೆ",
       "Skill libraries ಯಾವಾಗಲೂ ಗೆಲ್ಲುತ್ತವೆ",
       "Fine-tuning ವಿಧಾನ ಕಲಿಯಲಾರದು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
