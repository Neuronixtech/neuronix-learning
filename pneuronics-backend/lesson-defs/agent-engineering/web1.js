module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321547",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Web and Desktop Agent Benchmarks: WebArena and OSWorld (Part 1 of 3) — Execution-Based Evaluation of Web Tasks",
 "titleKn": "Web ಮತ್ತು Desktop Agent Benchmarks: WebArena ಮತ್ತು OSWorld (ಭಾಗ 1 / 3) — ವೆಬ್ ಕಾರ್ಯಗಳ ಕಾರ್ಯಾಚರಣೆ-ಆಧಾರಿತ ಮೌಲ್ಯಮಾಪನ",
 "desc": "Build a shopping environment with a goal_check that reads state, then test loose and strict checks, hidden side effects, a missing reset, invalid actions and how multi-step completion compounds.",
 "descKn": "State ಓದುವ goal_check ಇರುವ ಶಾಪಿಂಗ್ ಪರಿಸರ ನಿರ್ಮಿಸಿ, ನಂತರ ಸಡಿಲ ಮತ್ತು ಬಿಗಿ ಪರಿಶೀಲನೆಗಳು, ಮರೆತ ಅಡ್ಡ ಪರಿಣಾಮಗಳು, ಕಾಣೆಯಾದ reset, ಅಮಾನ್ಯ ಕ್ರಿಯೆಗಳು ಮತ್ತು ಬಹು-ಹಂತ ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ಹೇಗೆ ಸಂಯೋಜಿಸುತ್ತದೆ ಎಂದು ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Explain execution-based evaluation.",
  "Write a goal_check that reads state.",
  "Detect side effects a check can miss.",
  "Explain why reset() matters.",
  "Handle invalid actions as observations."
 ],
 "objectivesKn": [
  "ಕಾರ್ಯಾಚರಣೆ-ಆಧಾರಿತ ಮೌಲ್ಯಮಾಪನ ವಿವರಿಸಿ.",
  "State ಓದುವ goal_check ಬರೆಯಿರಿ.",
  "ಪರಿಶೀಲನೆ ತಪ್ಪಿಸಬಹುದಾದ ಅಡ್ಡ ಪರಿಣಾಮಗಳನ್ನು ಪತ್ತೆ ಮಾಡಿ.",
  "reset() ಏಕೆ ಮುಖ್ಯ ಎಂದು ವಿವರಿಸಿ.",
  "ಅಮಾನ್ಯ ಕ್ರಿಯೆಗಳನ್ನು ಗಮನಿಕೆಗಳಾಗಿ ನಿರ್ವಹಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Web and Desktop Agent Benchmarks: WebArena and OSWorld (Part 1 of 3)",
    "textKn": "Web ಮತ್ತು Desktop Agent Benchmarks: WebArena ಮತ್ತು OSWorld (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a WebArena-style shopping environment with execution-based goal checks. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind WebArena, OSWorld and OSWorld-Human, not the real software, and the agents are scripted or noise-driven stand-ins, so no real LLM behaviour is measured. The pasted Part 1 program was cut off, so the environment is rebuilt. It is a tiny in-memory shop, not WebArena, and no real WebArena task or published score is used. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಕಾರ್ಯಾಚರಣೆ-ಆಧಾರಿತ ಗುರಿ ಪರಿಶೀಲನೆಗಳಿರುವ WebArena-ಶೈಲಿಯ ಶಾಪಿಂಗ್ ಪರಿಸರ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು WebArena, OSWorld ಮತ್ತು OSWorld-Human ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು agents ಸ್ಕ್ರಿಪ್ಟ್ ಅಥವಾ ಶಬ್ದ-ಚಾಲಿತ ಬದಲಿಗಳು, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಭಾಗ 1 ಪ್ರೋಗ್ರಾಂ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ ಪರಿಸರ ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. ಇದು ಚಿಕ್ಕ ಇನ್-ಮೆಮೊರಿ ಅಂಗಡಿ, WebArena ಅಲ್ಲ, ಮತ್ತು ಯಾವುದೇ ನಿಜ WebArena ಕಾರ್ಯ ಅಥವಾ ಪ್ರಕಟಿತ ಅಂಕ ಬಳಸಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Judge the State, Not the Story",
    "textKn": "ಕಥೆಯನ್ನಲ್ಲ, state ಅನ್ನು ತೀರ್ಮಾನಿಸಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Execution-Based Evaluation for Web Tasks",
    "headingKn": "ವೆಬ್ ಕಾರ್ಯಗಳಿಗೆ ಕಾರ್ಯಾಚರಣೆ-ಆಧಾರಿತ ಮೌಲ್ಯಮಾಪನ",
    "bodyEn": "A web benchmark runs the agent against a live, resettable application and then asks the application whether the goal holds: is the item in the cart, was the order placed. This lab builds a shop with products, a cart and orders, an action space (search, open, add_to_cart, checkout), a Task whose goal_check reads the environment, and a harness that records the trajectory. Reproducibility comes from reset(), and trust comes from how carefully goal_check is written.",
    "bodyKn": "ವೆಬ್ benchmark agent ಅನ್ನು ಜೀವಂತ, ಮರುಹೊಂದಿಸಬಹುದಾದ ಅಪ್ಲಿಕೇಶನ್ ವಿರುದ್ಧ ಚಲಾಯಿಸಿ ನಂತರ ಗುರಿ ಇದೆಯೇ ಎಂದು ಅಪ್ಲಿಕೇಶನ್‌ಅನ್ನೇ ಕೇಳುತ್ತದೆ: ವಸ್ತು ಕಾರ್ಟ್‌ನಲ್ಲಿದೆಯೇ, ಆರ್ಡರ್ ಮಾಡಲಾಯಿತೇ. ಈ ಲ್ಯಾಬ್ ಉತ್ಪನ್ನಗಳು, ಕಾರ್ಟ್ ಮತ್ತು ಆರ್ಡರ್‌ಗಳಿರುವ ಅಂಗಡಿ, ಕ್ರಿಯಾ ಸ್ಥಳ (search, open, add_to_cart, checkout), ಪರಿಸರ ಓದುವ goal_check ಇರುವ Task ಮತ್ತು trajectory ದಾಖಲಿಸುವ harness ನಿರ್ಮಿಸುತ್ತದೆ. ಪುನರುತ್ಪಾದನೆ reset() ನಿಂದ ಬರುತ್ತದೆ, ನಂಬಿಕೆ goal_check ಎಷ್ಟು ಎಚ್ಚರಿಕೆಯಿಂದ ಬರೆಯಲಾಗಿದೆ ಎಂಬುದರಿಂದ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Agent, Environment, goal_check, reset",
    "headingKn": "Agent, ಪರಿಸರ, goal_check, reset",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Check the environment, not the agent's words</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">Agent</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">actions</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">Environment</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">carts, orders, state</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">goal_check</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">reads final state</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">reset()</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">same start every run</text><path d=\"M90,47 H110 M190,47 H210 M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a claim of success is not evidence; state is</text></svg>",
    "captionEn": "The verdict comes from the environment's state after the run.",
    "captionKn": "ತೀರ್ಪು ಓಟದ ನಂತರದ ಪರಿಸರದ state ನಿಂದ ಬರುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Goal checks compared",
    "headingKn": "ಗುರಿ ಪರಿಶೀಲನೆಗಳ ಹೋಲಿಕೆ",
    "headers": [
     "Check",
     "Accepts",
     "Misses"
    ],
    "rows": [
     [
      "target in cart",
      "extra items, duplicates",
      "a keyboard bought on the way"
     ],
     [
      "cart equals target",
      "only the exact cart",
      "purchases already made"
     ],
     [
      "orders equal target",
      "exactly one order of the target",
      "little; needs a clean reset"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Shop and Harness",
    "textKn": "ಅಂಗಡಿ ಮತ್ತು harness ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "web_1.py",
    "headingEn": "Product, Action, ShoppingEnvironment, Task and run_task",
    "headingKn": "Product, Action, ShoppingEnvironment, Task ಮತ್ತು run_task",
    "descEn": "execute() returns an observation string and never raises for a bad action. Task.goal_check is a function of the environment. run_task resets, lets the agent act up to a step budget, records each (action, observation) and finally evaluates the goal. Three goal checks of increasing strictness are defined.",
    "descKn": "execute() ಗಮನಿಕೆ ಸ್ಟ್ರಿಂಗ್ ಮರಳಿಸುತ್ತದೆ ಮತ್ತು ಕೆಟ್ಟ ಕ್ರಿಯೆಗೆ ಎಂದೂ ದೋಷ ಎತ್ತುವುದಿಲ್ಲ. Task.goal_check ಪರಿಸರದ ಕಾರ್ಯ. run_task ಮರುಹೊಂದಿಸಿ, agent ಅನ್ನು ಹಂತ ಮಿತಿಯವರೆಗೆ ಕ್ರಿಯೆ ಮಾಡಲು ಬಿಟ್ಟು, ಪ್ರತಿ (ಕ್ರಿಯೆ, ಗಮನಿಕೆ) ದಾಖಲಿಸಿ ಕೊನೆಗೆ ಗುರಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ. ಹೆಚ್ಚುತ್ತಿರುವ ಕಟ್ಟುನಿಟ್ಟಿನ ಮೂರು ಗುರಿ ಪರಿಶೀಲನೆಗಳನ್ನು ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.",
    "code": "@dataclass\nclass Product:\n    product_id: str\n    name: str\n    price: float\n\n\n@dataclass\nclass Action:\n    name: str\n    argument: Optional[str] = None\n\n\nCATALOG = [Product(\"p1\", \"Wireless Mouse A\", 24.99), Product(\"p2\", \"Wireless Mouse B\", 19.99), Product(\"p3\", \"Wired Mouse\", 9.99),\n           Product(\"p4\", \"Wireless Mouse C\", 29.50), Product(\"p5\", \"Keyboard\", 49.00)]\n\n\nclass ShoppingEnvironment:\n    def __init__(self):\n        self.cart, self.orders, self.results, self.current = [], [], [], None\n\n    def reset(self):\n        self.cart, self.orders, self.results, self.current = [], [], [], None\n\n    def execute(self, action):\n        \"\"\"Returns an observation string. Invalid actions return text; they do not raise.\"\"\"\n        n, a = action.name, action.argument\n        if n == \"search\":\n            self.results = [p for p in CATALOG if (a or \"\").lower() in p.name.lower()]\n            return \"results: \" + \", \".join(f\"{p.product_id}:{p.name}:${p.price}\" for p in self.results)\n        if n == \"open\":\n            prod = next((p for p in CATALOG if p.product_id == a), None)\n            self.current = prod\n            return f\"opened {prod.name}\" if prod else f\"error: no product {a}\"\n        if n == \"add_to_cart\":\n            if a not in [p.product_id for p in CATALOG]:\n                return f\"error: no product {a}\"\n            self.cart.append(a)\n            return f\"cart: {self.cart}\"\n        if n == \"checkout\":\n            if not self.cart:\n                return \"error: cart is empty\"\n            self.orders.append(list(self.cart))\n            self.cart = []\n            return f\"order placed: {self.orders[-1]}\"\n        return f\"error: unknown action {n}\"\n\n\n@dataclass\nclass Task:\n    task_id: str\n    description: str\n    goal_check: Callable[[ShoppingEnvironment], bool]\n\n\ndef cheapest_wireless_mouse():\n    return min((p for p in CATALOG if \"wireless mouse\" in p.name.lower()), key=lambda p: p.price)\n\n\ndef check_in_cart(env):\n    return cheapest_wireless_mouse().product_id in env.cart\n\n\ndef check_exact_cart(env):\n    return env.cart == [cheapest_wireless_mouse().product_id]\n\n\ndef check_order_exact(env):\n    return env.orders == [[cheapest_wireless_mouse().product_id]]\n\n\nTASK_CART = Task(\"cart-1\", \"Add the cheapest wireless mouse to the cart\", check_in_cart)\nTASK_ORDER = Task(\"order-1\", \"Buy exactly the cheapest wireless mouse\", check_order_exact)\n\n\nclass ScriptedAgent:\n    def __init__(self, script):\n        self.script, self.i = list(script), 0\n\n    def next_action(self, observation):\n        if self.i >= len(self.script):\n            return None\n        a = self.script[self.i]\n        self.i += 1\n        return a\n\n\ndef run_task(env, agent, task, max_steps=15, reset=True):\n    if reset:\n        env.reset()\n    traj, obs = [], \"start\"\n    for _ in range(max_steps):\n        action = agent.next_action(obs)\n        if action is None:\n            break\n        obs = env.execute(action)\n        traj.append((action, obs))\n    return {\"task\": task.task_id, \"success\": task.goal_check(env), \"steps\": len(traj), \"trajectory\": traj}\n\n\ndef good_script():\n    return [Action(\"search\", \"wireless mouse\"), Action(\"open\", \"p2\"), Action(\"add_to_cart\", \"p2\"), Action(\"checkout\")]"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "web_1.py",
    "headingEn": "main(): seven experiments",
    "headingKn": "main(): ಏಳು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the lesson's trajectory, compares an agent's claim with the state, loosens and tightens goal_check, looks for side effects, removes reset(), exercises the step budget and invalid actions, and computes multi-step completion under assumed per-step rates.",
    "descKn": "main() ಲೆಸನ್‌ನ trajectory ಚಲಾಯಿಸುತ್ತದೆ, agent ನ ಹೇಳಿಕೆಯನ್ನು state ಜೊತೆ ಹೋಲಿಸುತ್ತದೆ, goal_check ಸಡಿಲಿಸಿ ಬಿಗಿಗೊಳಿಸುತ್ತದೆ, ಅಡ್ಡ ಪರಿಣಾಮಗಳನ್ನು ಹುಡುಕುತ್ತದೆ, reset() ತೆಗೆಯುತ್ತದೆ, ಹಂತ ಮಿತಿ ಮತ್ತು ಅಮಾನ್ಯ ಕ್ರಿಯೆಗಳನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ, ಮತ್ತು ಊಹಿಸಿದ ಪ್ರತಿ-ಹಂತ ದರಗಳಲ್ಲಿ ಬಹು-ಹಂತ ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ಲೆಕ್ಕಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    env = ShoppingEnvironment()\n\n    section(\"1. One task, one trajectory, checked against state\")\n    r = run_task(env, ScriptedAgent(good_script()), TASK_ORDER)\n    for a, o in r[\"trajectory\"]:\n        print(f\"{a.name:12} {str(a.argument):15} -> {o}\")\n    print(\"success:\", r[\"success\"], \"| steps:\", r[\"steps\"], \"| cheapest wireless mouse is\", cheapest_wireless_mouse().product_id)\n\n    section(\"2. Genuinely checking: the same text 'success' claim versus the state check\")\n    liar = ScriptedAgent([Action(\"search\", \"wireless mouse\"), Action(\"open\", \"p2\")])\n    r = run_task(env, liar, TASK_ORDER)\n    print(\"agent stopped after opening p2; whatever it says, the state check returns\", r[\"success\"], \"| orders:\", env.orders)\n    print(\"an agent's claim is not evidence; the environment's state is\")\n\n    section(\"3. Genuinely checking: a goal_check that accepts more than the goal\")\n    extra = ScriptedAgent([Action(\"add_to_cart\", \"p5\"), Action(\"add_to_cart\", \"p2\"), Action(\"add_to_cart\", \"p3\")])\n    run_task(env, extra, TASK_CART)\n    print(\"cart:\", env.cart, \"| 'in cart' check:\", check_in_cart(env), \"| exact-cart check:\", check_exact_cart(env))\n    run_task(env, ScriptedAgent([Action(\"add_to_cart\", \"p2\"), Action(\"add_to_cart\", \"p2\")]), TASK_CART)\n    print(\"duplicate add: cart\", env.cart, \"| in-cart:\", check_in_cart(env), \"| exact:\", check_exact_cart(env))\n    print(\"the loose check passed a cart holding a keyboard and a wired mouse; the strict check also rejected a duplicate, which may or may not be what the task meant\")\n\n    section(\"4. Genuinely checking: side effects the final check does not see\")\n    env.reset()\n    for a in [Action(\"add_to_cart\", \"p5\"), Action(\"checkout\"), Action(\"add_to_cart\", \"p2\")]:\n        env.execute(a)\n    print(\"orders:\", env.orders, \"| cart:\", env.cart, \"| 'cheapest in cart' passes:\", check_in_cart(env))\n    print(\"the agent bought a keyboard along the way; a cart-only goal_check passes because it never looks at orders\")\n    r = run_task(env, ScriptedAgent(good_script() + [Action(\"checkout\")]), TASK_ORDER)\n    print(\"double checkout after a good run -> last observation:\", r[\"trajectory\"][-1][1], \"| orders:\", env.orders)\n\n    section(\"5. Genuinely measuring: reset() and reproducibility\")\n    for do_reset in (True, False):\n        e = ShoppingEnvironment()\n        results = [run_task(e, ScriptedAgent(good_script()), TASK_ORDER, reset=do_reset)[\"success\"] for _ in range(5)]\n        print(f\"reset between runs={do_reset!s:5} -> successes {results} | orders left: {len(e.orders)}\")\n    print(\"without reset, run 2 onward saw run 1's orders, so an identical correct agent failed four times in a row\")\n\n    section(\"6. Genuinely measuring: action budget and invalid actions\")\n    wander = ScriptedAgent([Action(\"search\", \"mouse\")] * 20)\n    r = run_task(env, wander, TASK_CART, max_steps=15)\n    print(\"agent that only searches: steps used\", r[\"steps\"], \"success\", r[\"success\"], \"(stopped by the budget, not by itself)\")\n    bad = ScriptedAgent([Action(\"open\", \"p99\"), Action(\"click\", \"buy\"), Action(\"checkout\")])\n    r = run_task(env, bad, TASK_ORDER)\n    for a, o in r[\"trajectory\"]:\n        print(f\"{a.name:10} {str(a.argument):6} -> {o}\")\n    print(\"invalid actions came back as observations and the run continued; an agent that cannot read them just burns steps\")\n\n    section(\"7. Genuinely measuring: a 10-step task under an assumed per-step reliability (seed 6, 20000 runs)\")\n    rng = random.Random(6)\n    for p in (0.99, 0.95, 0.90):\n        ok = sum(all(rng.random() < p for _ in range(10)) for _ in range(20000))\n        print(f\"per-step success {p:.0%}: {ok / 20000:.1%} of 10-step shopping tasks complete (arithmetic {p ** 10:.1%})\")\n    print(\"the rates are assumptions; the point is that a 10-step flow needs every step to land\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. One task, one trajectory, checked against state ---\nsearch       wireless mouse  -> results: p1:Wireless Mouse A:$24.99, p2:Wireless Mouse B:$19.99, p4:Wireless Mouse C:$29.5\nopen         p2              -> opened Wireless Mouse B\nadd_to_cart  p2              -> cart: ['p2']\ncheckout     None            -> order placed: ['p2']\nsuccess: True | steps: 4 | cheapest wireless mouse is p2\n\n--- 2. Genuinely checking: the same text 'success' claim versus the state check ---\nagent stopped after opening p2; whatever it says, the state check returns False | orders: []\nan agent's claim is not evidence; the environment's state is\n\n--- 3. Genuinely checking: a goal_check that accepts more than the goal ---\ncart: ['p5', 'p2', 'p3'] | 'in cart' check: True | exact-cart check: False\nduplicate add: cart ['p2', 'p2'] | in-cart: True | exact: False\nthe loose check passed a cart holding a keyboard and a wired mouse; the strict check also rejected a duplicate, which may or may not be what the task meant\n\n--- 4. Genuinely checking: side effects the final check does not see ---\norders: [['p5']] | cart: ['p2'] | 'cheapest in cart' passes: True\nthe agent bought a keyboard along the way; a cart-only goal_check passes because it never looks at orders\ndouble checkout after a good run -> last observation: error: cart is empty | orders: [['p2']]\n\n--- 5. Genuinely measuring: reset() and reproducibility ---\nreset between runs=True  -> successes [True, True, True, True, True] | orders left: 1\nreset between runs=False -> successes [True, False, False, False, False] | orders left: 5\nwithout reset, run 2 onward saw run 1's orders, so an identical correct agent failed four times in a row\n\n--- 6. Genuinely measuring: action budget and invalid actions ---\nagent that only searches: steps used 15 success False (stopped by the budget, not by itself)\nopen       p99    -> error: no product p99\nclick      buy    -> error: unknown action click\ncheckout   None   -> error: cart is empty\ninvalid actions came back as observations and the run continued; an agent that cannot read them just burns steps\n\n--- 7. Genuinely measuring: a 10-step task under an assumed per-step reliability (seed 6, 20000 runs) ---\nper-step success 99%: 90.2% of 10-step shopping tasks complete (arithmetic 90.4%)\nper-step success 95%: 59.8% of 10-step shopping tasks complete (arithmetic 59.9%)\nper-step success 90%: 34.8% of 10-step shopping tasks complete (arithmetic 34.9%)\nthe rates are assumptions; the point is that a 10-step flow needs every step to land"
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
    "headingEn": "Genuinely Found: A Loose goal_check Passed a Cart Holding the Wrong Things",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಡಿಲ goal_check ತಪ್ಪು ವಸ್ತುಗಳಿರುವ ಕಾರ್ಟ್ ಪಾಸ್ ಮಾಡಿತು",
    "bodyEn": "Section 3: a cart holding a keyboard (p5), the target mouse (p2) and a wired mouse (p3) passed the \"target is in the cart\" check and failed the exact-cart check; a duplicate add of p2 also passed the loose check and failed the strict one. Section 4: an agent that bought a keyboard on the way and then added the target left a cart containing p2, which passes a cart-only check even though orders shows [[p5]]; the goal_check never looked at orders. Section 2: an agent that only searched and opened p2 gets False from the state check regardless of anything it might say.",
    "bodyKn": "ವಿಭಾಗ 3: ಕೀಬೋರ್ಡ್ (p5), ಗುರಿ ಮೌಸ್ (p2) ಮತ್ತು ವೈರ್ಡ್ ಮೌಸ್ (p3) ಇರುವ ಕಾರ್ಟ್ \"ಗುರಿ ಕಾರ್ಟ್‌ನಲ್ಲಿದೆ\" ಪರಿಶೀಲನೆ ಪಾಸ್ ಮಾಡಿ ನಿಖರ-ಕಾರ್ಟ್ ಪರಿಶೀಲನೆ ವಿಫಲವಾಯಿತು; p2 ನ ನಕಲು ಸೇರ್ಪಡೆಯೂ ಸಡಿಲ ಪರಿಶೀಲನೆ ಪಾಸ್ ಮಾಡಿ ಬಿಗಿಯಾದದ್ದರಲ್ಲಿ ವಿಫಲವಾಯಿತು. ವಿಭಾಗ 4: ದಾರಿಯಲ್ಲಿ ಕೀಬೋರ್ಡ್ ಖರೀದಿಸಿ ನಂತರ ಗುರಿ ಸೇರಿಸಿದ agent p2 ಇರುವ ಕಾರ್ಟ್ ಬಿಟ್ಟಿತು, ಇದು ಆರ್ಡರ್‌ಗಳು [[p5]] ತೋರಿಸಿದರೂ ಕಾರ್ಟ್-ಮಾತ್ರ ಪರಿಶೀಲನೆ ಪಾಸ್ ಮಾಡುತ್ತದೆ; goal_check ಆರ್ಡರ್‌ಗಳನ್ನು ನೋಡಲೇ ಇಲ್ಲ. ವಿಭಾಗ 2: ಹುಡುಕಿ p2 ತೆರೆದ agent ಮಾತ್ರ ಅದು ಏನೇ ಹೇಳಿದರೂ state ಪರಿಶೀಲನೆಯಿಂದ False ಪಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Without reset() an Identical Correct Agent Failed Four Times",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: reset() ಇಲ್ಲದೆ ಅದೇ ಸರಿಯಾದ agent ನಾಲ್ಕು ಬಾರಿ ವಿಫಲವಾಯಿತು",
    "bodyEn": "Section 5: the same correct script ran five times. With reset between runs it succeeded all five times; without reset it succeeded once and then failed four times because the orders list kept growing (5 orders left). Section 6: an agent that only searched used all 15 steps and failed, stopped by the budget and not by itself; invalid actions (an unknown product, an unknown action name, checkout with an empty cart) all came back as error text and the run continued. Section 7 (assumed per-step reliability, seed 6, 20,000 runs): a 10-step flow completed 90.2, 59.8 and 34.8 percent of the time at 99, 95 and 90 percent per step, in line with p to the power 10. The rates are assumptions.",
    "bodyKn": "ವಿಭಾಗ 5: ಅದೇ ಸರಿಯಾದ ಸ್ಕ್ರಿಪ್ಟ್ ಐದು ಬಾರಿ ಚಲಿಸಿತು. ಓಟಗಳ ನಡುವೆ reset ಇದ್ದಾಗ ಎಲ್ಲಾ ಐದು ಬಾರಿ ಯಶಸ್ವಿಯಾಯಿತು; reset ಇಲ್ಲದೆ ಒಮ್ಮೆ ಯಶಸ್ವಿಯಾಗಿ ನಂತರ ನಾಲ್ಕು ಬಾರಿ ವಿಫಲವಾಯಿತು ಏಕೆಂದರೆ ಆರ್ಡರ್‌ಗಳ ಪಟ್ಟಿ ಬೆಳೆಯುತ್ತಲೇ ಇತ್ತು (5 ಆರ್ಡರ್‌ಗಳು ಉಳಿದವು). ವಿಭಾಗ 6: ಹುಡುಕುವುದು ಮಾತ್ರ ಮಾಡಿದ agent ಎಲ್ಲಾ 15 ಹಂತ ಬಳಸಿ ವಿಫಲವಾಯಿತು, ತಾನಾಗಿ ಅಲ್ಲ ಮಿತಿಯಿಂದ ನಿಲ್ಲಿಸಲ್ಪಟ್ಟಿತು; ಅಮಾನ್ಯ ಕ್ರಿಯೆಗಳು (ಅಜ್ಞಾತ ಉತ್ಪನ್ನ, ಅಜ್ಞಾತ ಕ್ರಿಯಾ ಹೆಸರು, ಖಾಲಿ ಕಾರ್ಟ್‌ನೊಂದಿಗೆ checkout) ಎಲ್ಲವೂ ದೋಷ ಪಠ್ಯವಾಗಿ ಮರಳಿ ಓಟ ಮುಂದುವರಿಯಿತು. ವಿಭಾಗ 7 (ಊಹಿಸಿದ ಪ್ರತಿ-ಹಂತ ವಿಶ್ವಾಸಾರ್ಹತೆ, seed 6, 20,000 ಓಟಗಳು): 10-ಹಂತ ಹರಿವು ಪ್ರತಿ ಹಂತಕ್ಕೆ 99, 95 ಮತ್ತು 90 ಶೇಕಡಾದಲ್ಲಿ 90.2, 59.8 ಮತ್ತು 34.8 ಶೇಕಡಾ ಬಾರಿ ಪೂರ್ಣಗೊಂಡಿತು, p ಘಾತ 10 ಗೆ ಅನುಗುಣವಾಗಿ. ದರಗಳು ಊಹೆಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "State-based checks let a benchmark score long, messy web tasks without trusting what the agent says or matching an exact click path. The checks only work if the environment resets cleanly and the goal_check covers every side effect that matters.",
    "bodyKn": "State-ಆಧಾರಿತ ಪರಿಶೀಲನೆಗಳು agent ಹೇಳುವುದನ್ನು ನಂಬದೆ ಅಥವಾ ನಿಖರ ಕ್ಲಿಕ್ ಮಾರ್ಗ ಹೊಂದಿಸದೆ ಉದ್ದ, ಗೊಂದಲದ ವೆಬ್ ಕಾರ್ಯಗಳಿಗೆ benchmark ಅಂಕ ನೀಡಲು ಅವಕಾಶ ನೀಡುತ್ತವೆ. ಪರಿಸರ ಸ್ವಚ್ಛವಾಗಿ ಮರುಹೊಂದಿದರೆ ಮತ್ತು goal_check ಮುಖ್ಯವಾದ ಪ್ರತಿ ಅಡ್ಡ ಪರಿಣಾಮ ಆವರಿಸಿದರೆ ಮಾತ್ರ ಅವು ಕೆಲಸ ಮಾಡುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"execution-based means unfoolable.\" The cart-only check passed after an unwanted purchase, and a missing reset made a correct agent fail four runs in a row.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಕಾರ್ಯಾಚರಣೆ-ಆಧಾರಿತ ಎಂದರೆ ಮೋಸಗೊಳಿಸಲಾಗದು.\" ಅನಪೇಕ್ಷಿತ ಖರೀದಿಯ ನಂತರವೂ ಕಾರ್ಟ್-ಮಾತ್ರ ಪರಿಶೀಲನೆ ಪಾಸ್ ಆಯಿತು, ಮತ್ತು reset ಇಲ್ಲದ್ದು ಸರಿಯಾದ agent ಅನ್ನು ಸತತ ನಾಲ್ಕು ಓಟಗಳಲ್ಲಿ ವಿಫಲಗೊಳಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Action space: the actions the environment accepts. Observation: what the environment returns. goal_check: a function of final state. Trajectory: the list of (action, observation). reset(): restore the identical start state. Side effect: a state change the goal did not ask for.",
    "bodyKn": "Action space: ಪರಿಸರ ಸ್ವೀಕರಿಸುವ ಕ್ರಿಯೆಗಳು. Observation: ಪರಿಸರ ಮರಳಿಸುವುದು. goal_check: ಅಂತಿಮ state ನ ಕಾರ್ಯ. Trajectory: (ಕ್ರಿಯೆ, ಗಮನಿಕೆ) ಪಟ್ಟಿ. reset(): ಅದೇ ಆರಂಭ state ಮರುಸ್ಥಾಪಿಸು. Side effect: ಗುರಿ ಕೇಳದ state ಬದಲಾವಣೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The correct trajectory took 4 steps and passed the order check. 2) State, not the agent's claim, decided success. 3) The loose cart check accepted a keyboard and a wired mouse. 4) A purchase made on the way was invisible to a cart-only check. 5) Without reset a correct agent succeeded once in five runs. 6) Invalid actions returned errors as text and a 10-step flow needs every step to land.",
    "bodyKn": "1) ಸರಿಯಾದ trajectory 4 ಹಂತ ತೆಗೆದುಕೊಂಡು ಆರ್ಡರ್ ಪರಿಶೀಲನೆ ಪಾಸ್ ಮಾಡಿತು. 2) Agent ನ ಹೇಳಿಕೆ ಅಲ್ಲ, state ಯಶಸ್ಸು ನಿರ್ಧರಿಸಿತು. 3) ಸಡಿಲ ಕಾರ್ಟ್ ಪರಿಶೀಲನೆ ಕೀಬೋರ್ಡ್ ಮತ್ತು ವೈರ್ಡ್ ಮೌಸ್ ಸ್ವೀಕರಿಸಿತು. 4) ದಾರಿಯಲ್ಲಿ ಮಾಡಿದ ಖರೀದಿ ಕಾರ್ಟ್-ಮಾತ್ರ ಪರಿಶೀಲನೆಗೆ ಕಾಣಲಿಲ್ಲ. 5) reset ಇಲ್ಲದೆ ಸರಿಯಾದ agent ಐದು ಓಟಗಳಲ್ಲಿ ಒಮ್ಮೆ ಯಶಸ್ವಿಯಾಯಿತು. 6) ಅಮಾನ್ಯ ಕ್ರಿಯೆಗಳು ದೋಷಗಳನ್ನು ಪಠ್ಯವಾಗಿ ಮರಳಿಸಿದವು ಮತ್ತು 10-ಹಂತ ಹರಿವಿಗೆ ಪ್ರತಿ ಹಂತ ಯಶಸ್ವಿಯಾಗಬೇಕು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What decides success in an execution-based web benchmark?",
      "qKn": "ಕಾರ್ಯಾಚರಣೆ-ಆಧಾರಿತ ವೆಬ್ benchmark ನಲ್ಲಿ ಯಶಸ್ಸು ಯಾವುದು ನಿರ್ಧರಿಸುತ್ತದೆ?",
      "opts": [
       "What the agent says it did",
       "The environment state checked by goal_check",
       "The length of the trajectory",
       "A text match with a human path"
      ],
      "optsKn": [
       "Agent ತಾನು ಏನು ಮಾಡಿದೆ ಎಂದು ಹೇಳುವುದು",
       "goal_check ಪರಿಶೀಲಿಸುವ ಪರಿಸರ state",
       "trajectory ಉದ್ದ",
       "ಮಾನವ ಮಾರ್ಗದೊಂದಿಗೆ ಪಠ್ಯ ಹೊಂದಾಣಿಕೆ"
      ],
      "correct": 1
     },
     {
      "q": "What did the loose \"target in cart\" check accept?",
      "qKn": "ಸಡಿಲ \"ಗುರಿ ಕಾರ್ಟ್‌ನಲ್ಲಿದೆ\" ಪರಿಶೀಲನೆ ಏನು ಸ್ವೀಕರಿಸಿತು?",
      "opts": [
       "Only the exact cart",
       "A cart that also held a keyboard and a wired mouse",
       "Nothing",
       "Only empty carts"
      ],
      "optsKn": [
       "ನಿಖರ ಕಾರ್ಟ್ ಮಾತ್ರ",
       "ಕೀಬೋರ್ಡ್ ಮತ್ತು ವೈರ್ಡ್ ಮೌಸ್ ಕೂಡ ಇದ್ದ ಕಾರ್ಟ್",
       "ಏನೂ ಇಲ್ಲ",
       "ಖಾಲಿ ಕಾರ್ಟ್ ಮಾತ್ರ"
      ],
      "correct": 1
     },
     {
      "q": "Why did a correct agent fail four of five runs without reset()?",
      "qKn": "reset() ಇಲ್ಲದೆ ಸರಿಯಾದ agent ಐದರಲ್ಲಿ ನಾಲ್ಕು ಓಟ ಏಕೆ ವಿಫಲವಾಯಿತು?",
      "opts": [
       "It forgot the task",
       "Earlier orders stayed in the environment, so the exact-order check no longer matched",
       "The catalog changed",
       "The budget ran out"
      ],
      "optsKn": [
       "ಕಾರ್ಯ ಮರೆತಿತು",
       "ಹಿಂದಿನ ಆರ್ಡರ್‌ಗಳು ಪರಿಸರದಲ್ಲಿ ಉಳಿದವು, ಆದ್ದರಿಂದ ನಿಖರ-ಆರ್ಡರ್ ಪರಿಶೀಲನೆ ಹೊಂದಲಿಲ್ಲ",
       "ಕ್ಯಾಟಲಾಗ್ ಬದಲಾಯಿತು",
       "ಮಿತಿ ಮುಗಿಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What happened to invalid actions?",
      "qKn": "ಅಮಾನ್ಯ ಕ್ರಿಯೆಗಳಿಗೆ ಏನಾಯಿತು?",
      "opts": [
       "They crashed the run",
       "They returned error text as observations and the run continued",
       "They were silently dropped",
       "They ended the task"
      ],
      "optsKn": [
       "ಓಟ ಕುಸಿಸಿದವು",
       "ದೋಷ ಪಠ್ಯವನ್ನು ಗಮನಿಕೆಗಳಾಗಿ ಮರಳಿಸಿ ಓಟ ಮುಂದುವರಿಯಿತು",
       "ಮೌನವಾಗಿ ಬಿಡಲಾದವು",
       "ಕಾರ್ಯ ಮುಗಿಸಿದವು"
      ],
      "correct": 1
     },
     {
      "q": "What is the status of the 99/95/90 percent step rates?",
      "qKn": "99/95/90 ಶೇಕಡಾ ಹಂತ ದರಗಳ ಸ್ಥಿತಿ ಏನು?",
      "opts": [
       "Measured from a real agent",
       "Assumptions, so the completion rates are arithmetic from them",
       "WebArena results",
       "Random"
      ],
      "optsKn": [
       "ನಿಜ agent ನಿಂದ ಅಳೆದವು",
       "ಊಹೆಗಳು, ಆದ್ದರಿಂದ ಪೂರ್ಣಗೊಳಿಸುವ ದರಗಳು ಅವುಗಳಿಂದ ಲೆಕ್ಕಾಚಾರ",
       "WebArena ಫಲಿತಾಂಶಗಳು",
       "ಯಾದೃಚ್ಛಿಕ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
