module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b32152c",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Planning with HTN and Evolutionary Search (Part 1 of 3) — State, Operators, Preconditions and Methods",
 "titleKn": "HTN ಮತ್ತು Evolutionary Search ನೊಂದಿಗೆ ಯೋಜನೆ (ಭಾಗ 1 / 3) — State, Operators, ಪೂರ್ವಷರತ್ತುಗಳು ಮತ್ತು Methods",
 "desc": "Build the HTN data model of state, operators with preconditions and effects, and methods, check whole plans mechanically, and find that in-place operators break search and that the guarantee is only as good as the schema.",
 "descKn": "State, ಪೂರ್ವಷರತ್ತು ಮತ್ತು ಪರಿಣಾಮಗಳ operators, ಮತ್ತು methods ಇರುವ HTN ದತ್ತಾಂಶ ಮಾದರಿ ನಿರ್ಮಿಸಿ, ಸಂಪೂರ್ಣ ಯೋಜನೆಗಳನ್ನು ಯಾಂತ್ರಿಕವಾಗಿ ಪರಿಶೀಲಿಸಿ, ಮತ್ತು ಸ್ಥಳದಲ್ಲೇ ಬದಲಿಸುವ operators ಹುಡುಕಾಟ ಮುರಿಯುತ್ತವೆ ಹಾಗೂ ಖಾತರಿ schema ದಷ್ಟೇ ಉತ್ತಮ ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Explain why free-form LLM planning gives no formal guarantee.",
  "Model state, operators, preconditions, effects and methods.",
  "Validate whole action sequences mechanically.",
  "Explain why operators must copy state during search.",
  "Explain that soundness is relative to the schema."
 ],
 "objectivesKn": [
  "ಮುಕ್ತ-ರೂಪದ LLM ಯೋಜನೆ ಔಪಚಾರಿಕ ಖಾತರಿ ನೀಡದಿರುವುದು ಏಕೆ ಎಂದು ವಿವರಿಸಿ.",
  "State, operators, ಪೂರ್ವಷರತ್ತುಗಳು, ಪರಿಣಾಮಗಳು ಮತ್ತು methods ಮಾದರಿ ಮಾಡಿ.",
  "ಸಂಪೂರ್ಣ ಕ್ರಿಯಾ ಅನುಕ್ರಮಗಳನ್ನು ಯಾಂತ್ರಿಕವಾಗಿ ಮಾನ್ಯ ಮಾಡಿ.",
  "ಹುಡುಕಾಟದಲ್ಲಿ operators state ನಕಲಿಸಬೇಕು ಏಕೆ ಎಂದು ವಿವರಿಸಿ.",
  "Soundness schema ಗೆ ಸಾಪೇಕ್ಷ ಎಂದು ವಿವರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Planning with HTN and Evolutionary Search (Part 1 of 3)",
    "textKn": "HTN ಮತ್ತು Evolutionary Search ನೊಂದಿಗೆ ಯೋಜನೆ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: why free-form LLM planning gives no guarantee, and the HTN data model: state, operators, preconditions, effects, methods. Every output below was genuinely produced by the lab file on Python 3.14.5. The code is our own stdlib delivery domain, run for real. A Method.applicable helper is added because Part 2 calls it. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಮುಕ್ತ-ರೂಪದ LLM ಯೋಜನೆ ಖಾತರಿ ನೀಡದಿರುವುದು ಏಕೆ, ಮತ್ತು HTN ದತ್ತಾಂಶ ಮಾದರಿ: state, operators, ಪೂರ್ವಷರತ್ತುಗಳು, ಪರಿಣಾಮಗಳು, methods. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಕೋಡ್ ನಮ್ಮದೇ stdlib ವಿತರಣೆ ಕ್ಷೇತ್ರ, ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ. ಭಾಗ 2 ಕರೆಯುವುದರಿಂದ Method.applicable ಸಹಾಯಕ ಸೇರಿಸಲಾಗಿದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Plausible Text Is Not a Valid Plan",
    "textKn": "ನಂಬಲರ್ಹ ಪಠ್ಯ ಮಾನ್ಯ ಯೋಜನೆ ಅಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Problem With Free-Form Planning",
    "headingKn": "ಮುಕ್ತ-ರೂಪದ ಯೋಜನೆಯ ಸಮಸ್ಯೆ",
    "bodyEn": "An LLM asked to deliver package P1 will write \"pick up, drive, deliver\", which reads well. It has no idea whether the package is at the warehouse, whether the truck was loaded, or whether policy needs an authorization first. A list of action names has no execution model. HTN planning supplies one: a state, primitive operators with preconditions and effects, and methods that break compound tasks into subtasks. The contrast is HTN for finding a correct plan and evolutionary search (Part 3) for finding a better candidate.",
    "bodyKn": "ಪ್ಯಾಕೇಜ್ P1 ತಲುಪಿಸಲು ಕೇಳಿದ LLM \"ಎತ್ತಿಕೊ, ಚಲಾಯಿಸು, ತಲುಪಿಸು\" ಎಂದು ಬರೆಯುತ್ತದೆ, ಅದು ಚೆನ್ನಾಗಿ ಓದಿಸಿಕೊಳ್ಳುತ್ತದೆ. ಪ್ಯಾಕೇಜ್ ಗೋದಾಮಿನಲ್ಲಿದೆಯೇ, ಟ್ರಕ್‌ಗೆ ತುಂಬಲಾಗಿದೆಯೇ, ಅಥವಾ ನೀತಿಗೆ ಮೊದಲು ಅಧಿಕಾರ ಬೇಕೇ ಎಂದು ಅದಕ್ಕೆ ತಿಳಿಯದು. ಕ್ರಿಯಾ ಹೆಸರುಗಳ ಪಟ್ಟಿಗೆ ಚಲಾವಣೆ ಮಾದರಿ ಇಲ್ಲ. HTN ಯೋಜನೆ ಒಂದನ್ನು ನೀಡುತ್ತದೆ: state, ಪೂರ್ವಷರತ್ತು ಮತ್ತು ಪರಿಣಾಮಗಳಿರುವ ಪ್ರಾಚೀನ operators, ಮತ್ತು ಸಂಯುಕ್ತ ಕಾರ್ಯಗಳನ್ನು ಉಪಕಾರ್ಯಗಳಾಗಿ ಒಡೆಯುವ methods. ವ್ಯತ್ಯಾಸ: ಸರಿಯಾದ ಯೋಜನೆ ಹುಡುಕಲು HTN, ಉತ್ತಮ ಅಭ್ಯರ್ಥಿ ಹುಡುಕಲು evolutionary search (ಭಾಗ 3)."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "HTN vocabulary",
    "headingKn": "HTN ಶಬ್ದಕೋಶ",
    "headers": [
     "Term",
     "Meaning",
     "Example"
    ],
    "rows": [
     [
      "State",
      "A set of facts currently true",
      "package:P1:warehouse, truck:warehouse"
     ],
     [
      "Compound task",
      "Cannot run directly; needs a method",
      "deliver_package, prepare_package"
     ],
     [
      "Primitive task",
      "Maps to an operator",
      "pickup_package, drive_to_customer"
     ],
     [
      "Operator",
      "Precondition check plus effects",
      "load needs picked and truck at warehouse"
     ],
     [
      "Method",
      "Compound task to subtasks",
      "deliver = prepare + transport + handover"
     ]
    ]
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Operator Equation",
    "headingKn": "Operator ಸಮೀಕರಣ",
    "bodyEn": "An operator o is a triple of preconditions, add effects and delete effects. It can run only when Pre(o) is a subset of S, and then S' = (S minus Del(o)) union Add(o). In Python the state is a set, so the check is preconditions <= state. Methods never change the world state: decomposing deliver_package into three subtasks moves nothing. Only operators do. A successful plan is therefore a chain of mechanically checked transitions, much stronger than \"the steps look reasonable\".",
    "bodyKn": "Operator o ಪೂರ್ವಷರತ್ತುಗಳು, add ಪರಿಣಾಮಗಳು ಮತ್ತು delete ಪರಿಣಾಮಗಳ ತ್ರಿವಳಿ. Pre(o), S ನ ಉಪಗಣವಾದಾಗ ಮಾತ್ರ ಅದು ಚಲಿಸಬಹುದು, ಮತ್ತು ಆಗ S' = (S ಮೈನಸ್ Del(o)) ಸಂಯೋಗ Add(o). Python ನಲ್ಲಿ state ಒಂದು set, ಆದ್ದರಿಂದ ಪರಿಶೀಲನೆ preconditions <= state. Methods ಎಂದೂ ಜಗತ್ತಿನ state ಬದಲಿಸುವುದಿಲ್ಲ: deliver_package ಅನ್ನು ಮೂರು ಉಪಕಾರ್ಯಗಳಾಗಿ ಒಡೆಯುವುದು ಏನನ್ನೂ ಸರಿಸುವುದಿಲ್ಲ. Operators ಮಾತ್ರ ಸರಿಸುತ್ತವೆ. ಆದ್ದರಿಂದ ಯಶಸ್ವಿ ಯೋಜನೆ ಯಾಂತ್ರಿಕವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಪರಿವರ್ತನೆಗಳ ಸರಪಳಿ, \"ಹೆಜ್ಜೆಗಳು ಸಮಂಜಸ ಕಾಣುತ್ತವೆ\" ಗಿಂತ ಬಲಿಷ್ಠ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Delivery Domain",
    "textKn": "ವಿತರಣೆ ಕ್ಷೇತ್ರ",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "htn_1.py",
    "headingEn": "Operator, Method, four operators and two methods",
    "headingKn": "Operator, Method, ನಾಲ್ಕು operators ಮತ್ತು ಎರಡು methods",
    "descEn": "Preconditions and effects are functions of (state, task) because the task carries arguments such as the package id. Every effect function copies the state first. Two methods are defined, deliver_package and prepare_package, and transport_package is deliberately left without one.",
    "descKn": "ಪೂರ್ವಷರತ್ತು ಮತ್ತು ಪರಿಣಾಮಗಳು (state, task) ನ ಕಾರ್ಯಗಳು, ಏಕೆಂದರೆ task package id ನಂತಹ ಆರ್ಗ್ಯುಮೆಂಟ್‌ಗಳನ್ನು ಹೊಂದಿದೆ. ಪ್ರತಿ ಪರಿಣಾಮ ಕಾರ್ಯ ಮೊದಲು state ನಕಲಿಸುತ್ತದೆ. ಎರಡು methods ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ, deliver_package ಮತ್ತು prepare_package, ಮತ್ತು transport_package ಅನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ method ಇಲ್ಲದೆ ಬಿಡಲಾಗಿದೆ.",
    "code": "Task = tuple\nState = set\n\n\n@dataclass\nclass Operator:\n    name: str\n    preconditions: Callable\n    apply_effects: Callable\n\n    def applicable(self, state: State, task: Task) -> bool:\n        return self.preconditions(state, task)\n\n    def execute(self, state: State, task: Task) -> State:\n        if not self.applicable(state, task):\n            raise ValueError(f\"Operator {self.name!r} cannot execute for task {task!r}\")\n        return self.apply_effects(state, task)\n\n\n@dataclass\nclass Method:\n    name: str\n    task_name: str\n    condition: Callable\n    decompose: Callable\n\n    def applicable(self, state: State, task: Task) -> bool:\n        return self.condition(state, task)\n\n\ndef can_pickup(state, task):\n    _, package = task\n    return f\"package:{package}:warehouse\" in state and \"worker:warehouse\" in state\n\n\ndef apply_pickup(state, task):\n    _, package = task\n    new = set(state)\n    new.remove(f\"package:{package}:warehouse\")\n    new.add(f\"package:{package}:picked\")\n    return new\n\n\ndef can_load(state, task):\n    _, package = task\n    return f\"package:{package}:picked\" in state and \"truck:warehouse\" in state\n\n\ndef apply_load(state, task):\n    _, package = task\n    new = set(state)\n    new.remove(f\"package:{package}:picked\")\n    new.add(f\"package:{package}:loaded\")\n    return new\n\n\ndef can_drive(state, task):\n    _, package = task\n    return f\"package:{package}:loaded\" in state and \"truck:warehouse\" in state and \"driver:available\" in state\n\n\ndef apply_drive(state, task):\n    new = set(state)\n    new.remove(\"truck:warehouse\")\n    new.add(\"truck:customer\")\n    return new\n\n\ndef can_handover(state, task):\n    _, package = task\n    return f\"package:{package}:loaded\" in state and \"truck:customer\" in state\n\n\ndef apply_handover(state, task):\n    _, package = task\n    new = set(state)\n    new.remove(f\"package:{package}:loaded\")\n    new.add(f\"package:{package}:delivered\")\n    return new\n\n\nOPERATORS = {\n    \"pickup_package\": Operator(\"pickup_package\", can_pickup, apply_pickup),\n    \"load_package\": Operator(\"load_package\", can_load, apply_load),\n    \"drive_to_customer\": Operator(\"drive_to_customer\", can_drive, apply_drive),\n    \"handover_package\": Operator(\"handover_package\", can_handover, apply_handover),\n}\n\n\ndef decompose_delivery(state, task):\n    _, package = task\n    return [(\"prepare_package\", package), (\"transport_package\", package), (\"handover_package\", package)]\n\n\ndef decompose_prepare(state, task):\n    _, package = task\n    return [(\"pickup_package\", package), (\"load_package\", package)]\n\n\nMETHODS = {\n    \"deliver_package\": [Method(\"standard_delivery\", \"deliver_package\", lambda s, t: True, decompose_delivery)],\n    \"prepare_package\": [Method(\"standard_preparation\", \"prepare_package\", lambda s, t: True, decompose_prepare)],\n}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "htn_1.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() walks the state transitions, shows illegal orderings being rejected, checks whole sequences mechanically, demonstrates why search needs copied state, shows a wrong schema destroying the guarantee, and lists which tasks are primitive, compound or unknown.",
    "descKn": "main() state ಪರಿವರ್ತನೆಗಳನ್ನು ನಡೆಯುತ್ತದೆ, ಅಕ್ರಮ ಕ್ರಮಗಳು ತಿರಸ್ಕೃತವಾಗುವುದನ್ನು ತೋರಿಸುತ್ತದೆ, ಸಂಪೂರ್ಣ ಅನುಕ್ರಮಗಳನ್ನು ಯಾಂತ್ರಿಕವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತದೆ, ಹುಡುಕಾಟಕ್ಕೆ ನಕಲಿಸಿದ state ಏಕೆ ಬೇಕು ಎಂದು ತೋರಿಸುತ್ತದೆ, ತಪ್ಪು schema ಖಾತರಿ ನಾಶಮಾಡುವುದನ್ನು ತೋರಿಸುತ್ತದೆ, ಮತ್ತು ಯಾವ ಕಾರ್ಯಗಳು ಪ್ರಾಚೀನ, ಸಂಯುಕ್ತ ಅಥವಾ ಅಜ್ಞಾತ ಎಂದು ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ.",
    "code": "INITIAL = {\"package:P1:warehouse\", \"worker:warehouse\", \"truck:warehouse\", \"driver:available\"}\n\n\ndef show(title, state):\n    print(title)\n    for fact in sorted(state):\n        print(\"  -\", fact)\n\n\ndef section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Operators transform state: S' = (S - Del) + Add\")\n    s0 = set(INITIAL)\n    show(\"INITIAL STATE\", s0)\n    task = (\"pickup_package\", \"P1\")\n    print(\"Can execute pickup?\", OPERATORS[\"pickup_package\"].applicable(s0, task))\n    s1 = OPERATORS[\"pickup_package\"].execute(s0, task)\n    show(\"AFTER PICKUP\", s1)\n    s2 = OPERATORS[\"load_package\"].execute(s1, (\"load_package\", \"P1\"))\n    show(\"AFTER LOAD\", s2)\n    print(\"original state unchanged:\", s0 == INITIAL)\n\n    section(\"2. Preconditions reject illegal orderings\")\n    for name in (\"drive_to_customer\", \"handover_package\", \"load_package\"):\n        print(f\"{name:<18} at the initial state -> applicable: {OPERATORS[name].applicable(s0, (name, 'P1'))}\")\n    try:\n        OPERATORS[\"drive_to_customer\"].execute(s0, (\"drive_to_customer\", \"P1\"))\n    except ValueError as e:\n        print(\"execute() raises:\", e)\n\n    section(\"3. Checking proposed sequences mechanically\")\n    def check(sequence):\n        state = set(INITIAL)\n        for i, t in enumerate(sequence, 1):\n            op = OPERATORS[t[0]]\n            if not op.applicable(state, t):\n                return f\"rejected at step {i}: {t[0]} preconditions not met\"\n            state = op.execute(state, t)\n        return f\"valid, final state has delivered: {'package:P1:delivered' in state}\"\n    good = [(\"pickup_package\", \"P1\"), (\"load_package\", \"P1\"), (\"drive_to_customer\", \"P1\"), (\"handover_package\", \"P1\")]\n    print(\"fluent, correct order      ->\", check(good))\n    print(\"drive first                ->\", check([good[2], good[0], good[1], good[3]]))\n    print(\"pickup, drive, load, hand  ->\", check([good[0], good[2], good[1], good[3]]))\n\n    section(\"4. Why copying state matters during search\")\n    shared = set(INITIAL)\n    OPERATORS[\"pickup_package\"].execute(shared, (\"pickup_package\", \"P1\"))\n    print(\"operator copied: shared state still has package at warehouse:\", \"package:P1:warehouse\" in shared)\n    def bad_apply(state, task):\n        state.remove(\"package:P1:warehouse\")\n        state.add(\"package:P1:picked\")\n        return state\n    broken = Operator(\"bad_pickup\", can_pickup, bad_apply)\n    trial = set(INITIAL)\n    broken.execute(trial, (\"bad_pickup\", \"P1\"))\n    print(\"in-place operator: the caller's state was changed too:\", \"package:P1:picked\" in trial)\n    print(\"after that, a second branch cannot try pickup again:\", broken.applicable(trial, (\"bad_pickup\", \"P1\")))\n\n    section(\"5. Genuinely checking: soundness is only as good as the schema\")\n    def can_pay_wrong(state, task):\n        return True\n    pay_wrong = Operator(\"release_payment\", can_pay_wrong, lambda s, t: s | {\"payment:released\"})\n    pay_right = Operator(\"release_payment\", lambda s, t: {\"invoice_verified\", \"manager_approved\"} <= s, lambda s, t: s | {\"payment:released\"})\n    bare = {\"invoice_verified\"}\n    print(\"wrong schema (always True) allows payment without approval:\", pay_wrong.applicable(bare, (\"release_payment\",)))\n    print(\"correct schema blocks it                                  :\", not pay_right.applicable(bare, (\"release_payment\",)))\n\n    section(\"6. The hierarchy so far, and the deliberate gap\")\n    task_names = set(OPERATORS) | set(METHODS)\n    for t in (\"deliver_package\", \"prepare_package\", \"transport_package\", \"pickup_package\"):\n        kind = \"primitive\" if t in OPERATORS else (\"compound, has method\" if t in METHODS else \"UNKNOWN: no operator and no method\")\n        print(f\"{t:<18} {kind}\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Operators transform state: S' = (S - Del) + Add ---\nINITIAL STATE\n  - driver:available\n  - package:P1:warehouse\n  - truck:warehouse\n  - worker:warehouse\nCan execute pickup? True\nAFTER PICKUP\n  - driver:available\n  - package:P1:picked\n  - truck:warehouse\n  - worker:warehouse\nAFTER LOAD\n  - driver:available\n  - package:P1:loaded\n  - truck:warehouse\n  - worker:warehouse\noriginal state unchanged: True\n\n--- 2. Preconditions reject illegal orderings ---\ndrive_to_customer  at the initial state -> applicable: False\nhandover_package   at the initial state -> applicable: False\nload_package       at the initial state -> applicable: False\nexecute() raises: Operator 'drive_to_customer' cannot execute for task ('drive_to_customer', 'P1')\n\n--- 3. Checking proposed sequences mechanically ---\nfluent, correct order      -> valid, final state has delivered: True\ndrive first                -> rejected at step 1: drive_to_customer preconditions not met\npickup, drive, load, hand  -> rejected at step 2: drive_to_customer preconditions not met\n\n--- 4. Why copying state matters during search ---\noperator copied: shared state still has package at warehouse: True\nin-place operator: the caller's state was changed too: True\nafter that, a second branch cannot try pickup again: False\n\n--- 5. Genuinely checking: soundness is only as good as the schema ---\nwrong schema (always True) allows payment without approval: True\ncorrect schema blocks it                                  : True\n\n--- 6. The hierarchy so far, and the deliberate gap ---\ndeliver_package    compound, has method\nprepare_package    compound, has method\ntransport_package  UNKNOWN: no operator and no method\npickup_package     primitive"
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
    "headingEn": "Transitions and Rejections",
    "headingKn": "ಪರಿವರ್ತನೆಗಳು ಮತ್ತು ನಿರಾಕರಣೆಗಳು",
    "bodyEn": "Section 1 shows pickup turning package:P1:warehouse into package:P1:picked, then load turning picked into loaded, with the original state untouched. Section 2 shows drive, handover and load all non-applicable at the initial state, and execute() raising a specific ValueError. Section 3 checks whole sequences: the correct order is valid and ends with the package delivered; driving first is rejected at step 1; pickup, drive, load, handover is rejected at step 2, because drive needs a loaded package. The planner never asks whether a step \"sounds sensible\".",
    "bodyKn": "ವಿಭಾಗ 1 pickup package:P1:warehouse ಅನ್ನು package:P1:picked ಆಗಿಸುವುದನ್ನು, ನಂತರ load picked ಅನ್ನು loaded ಆಗಿಸುವುದನ್ನು, ಮೂಲ state ಮುಟ್ಟದೆ ಉಳಿಯುವುದನ್ನು ತೋರಿಸುತ್ತದೆ. ವಿಭಾಗ 2 drive, handover ಮತ್ತು load ಎಲ್ಲವೂ ಆರಂಭಿಕ state ನಲ್ಲಿ ಅನ್ವಯಿಸದಿರುವುದನ್ನು ಮತ್ತು execute() ನಿರ್ದಿಷ್ಟ ValueError ಎತ್ತುವುದನ್ನು ತೋರಿಸುತ್ತದೆ. ವಿಭಾಗ 3 ಸಂಪೂರ್ಣ ಅನುಕ್ರಮಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ: ಸರಿಯಾದ ಕ್ರಮ ಮಾನ್ಯ ಮತ್ತು ಪ್ಯಾಕೇಜ್ ತಲುಪಿಸಿ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ; ಮೊದಲು drive ಹಂತ 1 ರಲ್ಲಿ ತಿರಸ್ಕೃತ; pickup, drive, load, handover ಹಂತ 2 ರಲ್ಲಿ ತಿರಸ್ಕೃತ, ಏಕೆಂದರೆ drive ಗೆ ತುಂಬಿದ ಪ್ಯಾಕೇಜ್ ಬೇಕು. Planner ಎಂದೂ ಹೆಜ್ಜೆ \"ಸಮಂಜಸ ಕೇಳಿಸುತ್ತದೆಯೇ\" ಎಂದು ಕೇಳುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: In-Place Operators Poison Search",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸ್ಥಳದಲ್ಲೇ ಬದಲಿಸುವ Operators ಹುಡುಕಾಟ ಹಾಳುಮಾಡುತ್ತವೆ",
    "bodyEn": "Section 4 contrasts the real pickup operator, which copies the state, with a version that edits the set in place. After the in-place version runs, the caller's own state has changed, and a second search branch can no longer apply pickup at all. Backtracking depends on every branch starting from the state before the first attempt, so each branch must receive its own copy, and effect functions must return a new set.",
    "bodyKn": "ವಿಭಾಗ 4 state ನಕಲಿಸುವ ನಿಜವಾದ pickup operator ಅನ್ನು set ಅನ್ನು ಸ್ಥಳದಲ್ಲೇ ಸಂಪಾದಿಸುವ ಆವೃತ್ತಿಯೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ. ಸ್ಥಳದಲ್ಲೇ ಆವೃತ್ತಿ ಚಲಿಸಿದ ನಂತರ ಕರೆಯುವವರ ಸ್ವಂತ state ಬದಲಾಗಿದೆ, ಮತ್ತು ಎರಡನೇ ಹುಡುಕಾಟ ಶಾಖೆ pickup ಅನ್ನು ಅನ್ವಯಿಸಲೇ ಸಾಧ್ಯವಿಲ್ಲ. Backtracking ಪ್ರತಿ ಶಾಖೆ ಮೊದಲ ಪ್ರಯತ್ನದ ಮೊದಲಿನ state ನಿಂದ ಆರಂಭವಾಗುವುದನ್ನು ಅವಲಂಬಿಸಿದೆ, ಆದ್ದರಿಂದ ಪ್ರತಿ ಶಾಖೆ ತನ್ನದೇ ನಕಲು ಪಡೆಯಬೇಕು ಮತ್ತು ಪರಿಣಾಮ ಕಾರ್ಯಗಳು ಹೊಸ set ಹಿಂತಿರುಗಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Guarantee Is Relative to the Schema",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಖಾತರಿ Schema ಗೆ ಸಾಪೇಕ್ಷ",
    "bodyEn": "Section 5 builds a release_payment operator two ways. With a precondition that always returns True, payment is allowed with no manager approval. With the real precondition (invoice verified and manager approved) it is blocked. The planner proves correctness only relative to the operators and methods someone encoded. Policy written as executable preconditions is enforced; policy written only in a prompt is a request to a probabilistic model.",
    "bodyKn": "ವಿಭಾಗ 5 release_payment operator ಅನ್ನು ಎರಡು ರೀತಿ ನಿರ್ಮಿಸುತ್ತದೆ. ಯಾವಾಗಲೂ True ಹಿಂತಿರುಗಿಸುವ ಪೂರ್ವಷರತ್ತಿನೊಂದಿಗೆ ವ್ಯವಸ್ಥಾಪಕರ ಅನುಮೋದನೆ ಇಲ್ಲದೆ ಪಾವತಿ ಅನುಮತಿಸಲ್ಪಡುತ್ತದೆ. ನಿಜವಾದ ಪೂರ್ವಷರತ್ತಿನೊಂದಿಗೆ (ಇನ್‌ವಾಯ್ಸ್ ಪರಿಶೀಲಿತ ಮತ್ತು ವ್ಯವಸ್ಥಾಪಕ ಅನುಮೋದಿತ) ಅದು ತಡೆಯಲ್ಪಡುತ್ತದೆ. Planner ಯಾರಾದರೂ ಸಂಕೇತಿಸಿದ operators ಮತ್ತು methods ಗೆ ಸಾಪೇಕ್ಷವಾಗಿ ಮಾತ್ರ ಸರಿಯಾಗಿರುವಿಕೆ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ. ಚಲಾಯಿಸಬಹುದಾದ ಪೂರ್ವಷರತ್ತುಗಳಾಗಿ ಬರೆದ ನೀತಿ ಜಾರಿಯಾಗುತ್ತದೆ; ಕೇವಲ prompt ನಲ್ಲಿ ಬರೆದ ನೀತಿ ಸಂಭವನೀಯ ಮಾದರಿಗೆ ಮನವಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Deliberate Gap",
    "headingKn": "ಉದ್ದೇಶಪೂರ್ವಕ ಅಂತರ",
    "bodyEn": "Section 6 classifies the tasks: deliver_package and prepare_package are compound with methods, pickup_package is primitive, and transport_package is unknown, with no operator and no method. A classical planner stops there. The hybrid in Part 2 asks an LLM for a decomposition and then validates it symbolically instead of trusting it.",
    "bodyKn": "ವಿಭಾಗ 6 ಕಾರ್ಯಗಳನ್ನು ವರ್ಗೀಕರಿಸುತ್ತದೆ: deliver_package ಮತ್ತು prepare_package method ಇರುವ ಸಂಯುಕ್ತ, pickup_package ಪ್ರಾಚೀನ, ಮತ್ತು transport_package ಅಜ್ಞಾತ, operator ಅಥವಾ method ಇಲ್ಲ. ಶಾಸ್ತ್ರೀಯ planner ಅಲ್ಲಿ ನಿಲ್ಲುತ್ತದೆ. ಭಾಗ 2 ರ ಮಿಶ್ರ ವಿಧಾನ LLM ಅನ್ನು ವಿಭಜನೆಗಾಗಿ ಕೇಳಿ, ನಂಬುವ ಬದಲು ಸಂಕೇತಾತ್ಮಕವಾಗಿ ಮಾನ್ಯ ಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "When to Use HTN",
    "headingKn": "HTN ಯಾವಾಗ ಬಳಸಬೇಕು",
    "bodyEn": "HTN fits compliance workflows, robot and manufacturing procedures, scheduling and mission planning, where almost correct means invalid. It is overkill for \"summarise three pages\", where a ReAct or ReWOO loop is simpler. Ask what failure you are preventing: an invalid action sequence or an unsatisfied hard constraint. If you cannot name one, simpler orchestration is better.",
    "bodyKn": "HTN ಅನುಸರಣೆ ಕೆಲಸದ ಹರಿವುಗಳು, ರೋಬೋಟ್ ಮತ್ತು ಉತ್ಪಾದನಾ ವಿಧಾನಗಳು, ವೇಳಾಪಟ್ಟಿ ಮತ್ತು ಕಾರ್ಯಾಚರಣೆ ಯೋಜನೆಗೆ ಹೊಂದುತ್ತದೆ, ಅಲ್ಲಿ ಬಹುತೇಕ ಸರಿ ಎಂದರೆ ಅಮಾನ್ಯ. \"ಮೂರು ಪುಟ ಸಾರಾಂಶ ಮಾಡು\" ಗೆ ಅದು ಅತಿಯಾಗಿದೆ, ಅಲ್ಲಿ ReAct ಅಥವಾ ReWOO ಚಕ್ರ ಸರಳ. ಯಾವ ವೈಫಲ್ಯ ತಡೆಯುತ್ತಿದ್ದೀರಿ ಎಂದು ಕೇಳಿ: ಅಮಾನ್ಯ ಕ್ರಿಯಾ ಅನುಕ್ರಮ ಅಥವಾ ಪೂರೈಸದ ಕಠಿಣ ನಿರ್ಬಂಧ. ಒಂದನ್ನೂ ಹೆಸರಿಸಲಾಗದಿದ್ದರೆ ಸರಳ ಆರ್ಕೆಸ್ಟ್ರೇಶನ್ ಉತ್ತಮ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Model output is probabilistic. When some constraints must hold every time, they belong in code that checks them deterministically, with the model confined to proposing.",
    "bodyKn": "ಮಾದರಿ ಔಟ್‌ಪುಟ್ ಸಂಭವನೀಯ. ಕೆಲವು ನಿರ್ಬಂಧಗಳು ಪ್ರತಿ ಬಾರಿ ಉಳಿಯಬೇಕಾದಾಗ, ಅವು ಅವನ್ನು ನಿರ್ಧಾರಾತ್ಮಕವಾಗಿ ಪರಿಶೀಲಿಸುವ ಕೋಡ್‌ನಲ್ಲಿರಬೇಕು, ಮಾದರಿ ಸೂಚಿಸುವುದಕ್ಕೆ ಮಾತ್ರ ಸೀಮಿತ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"HTN is just breaking a big task into smaller ones.\" A to-do list does that. HTN adds formal action semantics and state-aware search.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"HTN ಎಂದರೆ ದೊಡ್ಡ ಕಾರ್ಯವನ್ನು ಚಿಕ್ಕವಾಗಿ ಒಡೆಯುವುದು ಮಾತ್ರ.\" ಮಾಡಬೇಕಾದ ಪಟ್ಟಿ ಅದನ್ನು ಮಾಡುತ್ತದೆ. HTN ಔಪಚಾರಿಕ ಕ್ರಿಯಾ ಅರ್ಥ ಮತ್ತು state-ಅರಿವಿನ ಹುಡುಕಾಟ ಸೇರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "HTN: hierarchical task network planning. Compound task: needs decomposition. Primitive task: an executable operator. Method: a decomposition rule. Precondition: a fact required before an action. Effect: the state change an action causes. Soundness: validity relative to the encoded domain.",
    "bodyKn": "HTN: ಶ್ರೇಣೀಕೃತ ಕಾರ್ಯ ಜಾಲ ಯೋಜನೆ. ಸಂಯುಕ್ತ ಕಾರ್ಯ: ವಿಭಜನೆ ಬೇಕು. ಪ್ರಾಚೀನ ಕಾರ್ಯ: ಚಲಾಯಿಸಬಹುದಾದ operator. Method: ವಿಭಜನೆ ನಿಯಮ. ಪೂರ್ವಷರತ್ತು: ಕ್ರಿಯೆ ಮೊದಲು ಬೇಕಾದ ಸಂಗತಿ. ಪರಿಣಾಮ: ಕ್ರಿಯೆ ಉಂಟುಮಾಡುವ state ಬದಲಾವಣೆ. Soundness: ಸಂಕೇತಿಸಿದ ಕ್ಷೇತ್ರಕ್ಕೆ ಸಾಪೇಕ್ಷ ಮಾನ್ಯತೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A fluent step list has no execution model, and HTN provides one. 2) An operator runs only when Pre is a subset of S, then S' = (S - Del) + Add. 3) Methods decompose and never change the world. 4) Whole sequences can be validated mechanically. 5) Operators must copy state or backtracking breaks. 6) The guarantee is only as good as the schema. 7) transport_package has no method: the gap Part 2 fills.",
    "bodyKn": "1) ಸರಾಗ ಹೆಜ್ಜೆ ಪಟ್ಟಿಗೆ ಚಲಾವಣೆ ಮಾದರಿ ಇಲ್ಲ, HTN ಒಂದನ್ನು ನೀಡುತ್ತದೆ. 2) Operator ಚಲಿಸುವುದು Pre, S ನ ಉಪಗಣವಾದಾಗ ಮಾತ್ರ, ನಂತರ S' = (S - Del) + Add. 3) Methods ವಿಭಜಿಸುತ್ತವೆ ಮತ್ತು ಜಗತ್ತು ಎಂದೂ ಬದಲಿಸುವುದಿಲ್ಲ. 4) ಸಂಪೂರ್ಣ ಅನುಕ್ರಮಗಳನ್ನು ಯಾಂತ್ರಿಕವಾಗಿ ಮಾನ್ಯ ಮಾಡಬಹುದು. 5) Operators state ನಕಲಿಸಬೇಕು, ಇಲ್ಲದಿದ್ದರೆ backtracking ಮುರಿಯುತ್ತದೆ. 6) ಖಾತರಿ schema ದಷ್ಟೇ ಉತ್ತಮ. 7) transport_package ಗೆ method ಇಲ್ಲ: ಭಾಗ 2 ತುಂಬುವ ಅಂತರ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What is the primary difference between a method and an operator?",
      "qKn": "Method ಮತ್ತು operator ನಡುವಿನ ಪ್ರಾಥಮಿಕ ವ್ಯತ್ಯಾಸ ಏನು?",
      "opts": [
       "Methods use Python, operators do not",
       "A method decomposes a compound task; an operator executes a primitive action and changes state",
       "Operators call LLMs",
       "There is no difference"
      ],
      "optsKn": [
       "Methods Python ಬಳಸುತ್ತವೆ, operators ಇಲ್ಲ",
       "Method ಸಂಯುಕ್ತ ಕಾರ್ಯ ವಿಭಜಿಸುತ್ತದೆ; operator ಪ್ರಾಚೀನ ಕ್ರಿಯೆ ಚಲಾಯಿಸಿ state ಬದಲಿಸುತ್ತದೆ",
       "Operators LLM ಕರೆಯುತ್ತವೆ",
       "ವ್ಯತ್ಯಾಸವಿಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "An operator requires package_loaded but that fact is absent. What does the planner do?",
      "qKn": "Operator ಗೆ package_loaded ಬೇಕು ಆದರೆ ಆ ಸಂಗತಿ ಇಲ್ಲ. Planner ಏನು ಮಾಡುತ್ತದೆ?",
      "opts": [
       "Asks the LLM if it probably happened",
       "Assumes it",
       "Rejects that operator at the current state",
       "Executes and validates afterwards"
      ],
      "optsKn": [
       "ಅದು ಬಹುಶಃ ನಡೆದಿದೆಯೇ ಎಂದು LLM ಕೇಳುತ್ತದೆ",
       "ಊಹಿಸುತ್ತದೆ",
       "ಪ್ರಸ್ತುತ state ನಲ್ಲಿ ಆ operator ತಿರಸ್ಕರಿಸುತ್ತದೆ",
       "ಚಲಾಯಿಸಿ ನಂತರ ಮಾನ್ಯ ಮಾಡುತ್ತದೆ"
      ],
      "correct": 2
     },
     {
      "q": "In the run, why did an in-place operator break later search branches?",
      "qKn": "ಓಟದಲ್ಲಿ, ಸ್ಥಳದಲ್ಲೇ ಬದಲಿಸುವ operator ನಂತರದ ಹುಡುಕಾಟ ಶಾಖೆಗಳನ್ನು ಏಕೆ ಮುರಿಯಿತು?",
      "opts": [
       "It was slower",
       "It changed the caller's state, so a second branch no longer started from the original state",
       "It raised an error",
       "It deleted the operator"
      ],
      "optsKn": [
       "ಅದು ನಿಧಾನವಾಗಿತ್ತು",
       "ಅದು ಕರೆಯುವವರ state ಬದಲಿಸಿತು, ಆದ್ದರಿಂದ ಎರಡನೇ ಶಾಖೆ ಮೂಲ state ನಿಂದ ಆರಂಭಿಸಲಿಲ್ಲ",
       "ಅದು ದೋಷ ಎತ್ತಿತು",
       "ಅದು operator ಅಳಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why did the always-True release_payment precondition matter?",
      "qKn": "ಯಾವಾಗಲೂ-True release_payment ಪೂರ್ವಷರತ್ತು ಏಕೆ ಮುಖ್ಯ?",
      "opts": [
       "It was faster",
       "It showed that planner guarantees are only as good as the encoded schema",
       "It improved accuracy",
       "It added a method"
      ],
      "optsKn": [
       "ಅದು ವೇಗವಾಗಿತ್ತು",
       "Planner ಖಾತರಿಗಳು ಸಂಕೇತಿಸಿದ schema ದಷ್ಟೇ ಉತ್ತಮ ಎಂದು ತೋರಿಸಿತು",
       "ಅದು ನಿಖರತೆ ಹೆಚ್ಚಿಸಿತು",
       "ಅದು method ಸೇರಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why was transport_package intentionally left without a method?",
      "qKn": "transport_package ಅನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ method ಇಲ್ಲದೆ ಏಕೆ ಬಿಡಲಾಯಿತು?",
      "opts": [
       "Transport is not part of delivery",
       "It creates a missing-method gap that Part 2 fills with a validated LLM decomposition",
       "Python cannot model transport",
       "Evolutionary search requires it"
      ],
      "optsKn": [
       "Transport ವಿತರಣೆಯ ಭಾಗವಲ್ಲ",
       "ಅದು ಕಾಣೆಯಾದ-method ಅಂತರ ಸೃಷ್ಟಿಸುತ್ತದೆ, ಭಾಗ 2 ಅದನ್ನು ಮಾನ್ಯ ಮಾಡಿದ LLM ವಿಭಜನೆಯಿಂದ ತುಂಬುತ್ತದೆ",
       "Python transport ಮಾದರಿ ಮಾಡಲಾರದು",
       "Evolutionary search ಗೆ ಅದು ಬೇಕು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
