module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6066020ed05b321517",
 "order": 1,
 "type": "interactive",
 "duration": 70,
 "difficulty": "advanced",
 "status": "published",
 "title": "Tree of Thoughts and LATS: Deliberate Search (Part 2 of 3) — Monte Carlo Tree Search, UCT and Backpropagation",
 "titleKn": "Tree of Thoughts ಮತ್ತು LATS: ಉದ್ದೇಶಪೂರ್ವಕ ಹುಡುಕಾಟ (ಭಾಗ 2 / 3) — Monte Carlo Tree Search, UCT ಮತ್ತು Backpropagation",
 "desc": "Build a toy LATS-style Monte Carlo Tree Search with UCT, expansion, rollouts and backpropagation, recompute the lesson's UCT numbers, trace eight iterations, and discover that a strong rollout policy hides the exploration constant and a misaligned reward flattens the tree.",
 "descKn": "UCT, ವಿಸ್ತರಣೆ, rollouts ಮತ್ತು backpropagation ಇರುವ toy LATS-ಶೈಲಿಯ Monte Carlo Tree Search ನಿರ್ಮಿಸಿ, ಪಾಠದ UCT ಸಂಖ್ಯೆಗಳನ್ನು ಮರುಲೆಕ್ಕಿಸಿ, ಎಂಟು ಪುನರಾವರ್ತನೆ trace ಮಾಡಿ, ಬಲವಾದ rollout policy exploration ಸ್ಥಿರಾಂಕವನ್ನು ಮರೆಮಾಡುತ್ತದೆ ಮತ್ತು ತಪ್ಪಾಗಿ ಹೊಂದಿಸಿದ reward ಮರವನ್ನು ಸಮತಟ್ಟಾಗಿಸುತ್ತದೆ ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Implement an MCTS node, UCT selection, expansion, simulation and backpropagation.",
  "Compute a UCT score by hand and explain the exploration bonus.",
  "Read an MCTS iteration trace and root statistics.",
  "Explain why backpropagation here is not gradient backpropagation.",
  "Show how the reward function and rollout policy shape the search."
 ],
 "objectivesKn": [
  "MCTS ನೋಡ್, UCT ಆಯ್ಕೆ, ವಿಸ್ತರಣೆ, simulation ಮತ್ತು backpropagation ಅಳವಡಿಸಿ.",
  "UCT ಅಂಕವನ್ನು ಕೈಯಾರೆ ಲೆಕ್ಕಿಸಿ exploration ಬೋನಸ್ ವಿವರಿಸಿ.",
  "MCTS ಪುನರಾವರ್ತನೆ trace ಮತ್ತು ಮೂಲ ಅಂಕಿಅಂಶ ಓದಿ.",
  "ಇಲ್ಲಿನ backpropagation gradient backpropagation ಅಲ್ಲ ಏಕೆ ಎಂದು ವಿವರಿಸಿ.",
  "Reward ಫಂಕ್ಷನ್ ಮತ್ತು rollout policy ಹುಡುಕಾಟವನ್ನು ಹೇಗೆ ರೂಪಿಸುತ್ತವೆ ಎಂದು ತೋರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Tree of Thoughts and LATS: Deliberate Search (Part 2 of 3)",
    "textKn": "Tree of Thoughts ಮತ್ತು LATS: ಉದ್ದೇಶಪೂರ್ವಕ ಹುಡುಕಾಟ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~75 minutes. Part 2 of 3: LATS and Monte Carlo Tree Search, with UCT selection, expansion, simulation and backpropagation. Every output was genuinely produced by tot_2.py on Python 3.14.5. The policy, value function and reflection are deterministic stand-ins for the LLM roles in real LATS, so this teaches the mechanics and says nothing about LATS accuracy. The source text for this part was cut off near its end. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~75 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ ಎರಡನೆಯದು: LATS ಮತ್ತು Monte Carlo Tree Search, UCT ಆಯ್ಕೆ, ವಿಸ್ತರಣೆ, simulation ಮತ್ತು backpropagation ಜೊತೆ. ಎಲ್ಲಾ output tot_2.py ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. Policy, value function ಮತ್ತು reflection ನಿಜವಾದ LATS ನ LLM ಪಾತ್ರಗಳಿಗೆ ನಿರ್ಧಾರಾತ್ಮಕ ಬದಲಿಗಳು, ಆದ್ದರಿಂದ ಇದು ಕಾರ್ಯವಿಧಾನ ಕಲಿಸುತ್ತದೆ ಮತ್ತು LATS ನಿಖರತೆ ಬಗ್ಗೆ ಏನನ್ನೂ ಹೇಳುವುದಿಲ್ಲ. ಈ ಭಾಗದ ಮೂಲ ಪಠ್ಯ ಅಂತ್ಯದ ಹತ್ತಿರ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "From a Beam to a Search Budget",
    "textKn": "Beam ನಿಂದ ಹುಡುಕಾಟ Budget ಗೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "What LATS Adds",
    "headingKn": "LATS ಸೇರಿಸುವುದು ಏನು",
    "bodyEn": "Beam search makes a hard keep-or-discard decision at every level. Monte Carlo Tree Search keeps one persistent tree and repeatedly asks which existing branch deserves the next unit of effort. LATS (Language Agent Tree Search) combines four ideas: Tree of Thoughts (alternatives plus values), ReAct (actions that meet an environment), Reflexion (a verbal lesson after failure) and MCTS (the search algorithm). The LLM plays three roles: the policy that proposes actions, the value function that scores partial trajectories, and the self-reflector that writes lessons. No weights are updated between rollouts.",
    "bodyKn": "Beam search ಪ್ರತಿ ಮಟ್ಟದಲ್ಲಿ ಕಠಿಣ ಉಳಿಸು-ಅಥವಾ-ಬಿಸಾಡು ನಿರ್ಧಾರ ಮಾಡುತ್ತದೆ. Monte Carlo Tree Search ಒಂದು ಶಾಶ್ವತ ಮರ ಇಟ್ಟುಕೊಂಡು ಮುಂದಿನ ಪ್ರಯತ್ನದ ಘಟಕಕ್ಕೆ ಯಾವ ಈಗಿರುವ ಶಾಖೆ ಅರ್ಹ ಎಂದು ಪದೇ ಪದೇ ಕೇಳುತ್ತದೆ. LATS (Language Agent Tree Search) ನಾಲ್ಕು ಆಲೋಚನೆಗಳನ್ನು ಸೇರಿಸುತ್ತದೆ: Tree of Thoughts (ಪರ್ಯಾಯಗಳು ಮತ್ತು values), ReAct (ಪರಿಸರವನ್ನು ಭೇಟಿಯಾಗುವ actions), Reflexion (ವೈಫಲ್ಯದ ನಂತರ ಮೌಖಿಕ ಪಾಠ) ಮತ್ತು MCTS (ಹುಡುಕಾಟ ಅಲ್ಗಾರಿದಮ್). LLM ಮೂರು ಪಾತ್ರ ನಿರ್ವಹಿಸುತ್ತದೆ: actions ಪ್ರಸ್ತಾಪಿಸುವ policy, ಭಾಗಶಃ trajectories ಗೆ ಅಂಕ ನೀಡುವ value function, ಮತ್ತು ಪಾಠ ಬರೆಯುವ self-reflector. Rollouts ನಡುವೆ ಯಾವುದೇ weights ನವೀಕರಣವಿಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "One MCTS Iteration",
    "headingKn": "ಒಂದು MCTS ಪುನರಾವರ್ತನೆ",
    "svgCode": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"200\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">One MCTS iteration (LATS adds reflection)</text>\n  <rect x=\"20\" y=\"24\" width=\"125\" height=\"26\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"82\" y=\"35\" fill=\"#93c5fd\" text-anchor=\"middle\">1 SELECT</text><text x=\"82\" y=\"45\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"6\">walk down by UCT</text>\n  <rect x=\"155\" y=\"24\" width=\"125\" height=\"26\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"217\" y=\"35\" fill=\"#6ee7b7\" text-anchor=\"middle\">2 EXPAND</text><text x=\"217\" y=\"45\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">make children once</text>\n  <path d=\"M82,50 V70 M217,50 V70\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"70\" width=\"125\" height=\"26\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"82\" y=\"81\" fill=\"#c4b5fd\" text-anchor=\"middle\">3 SIMULATE</text><text x=\"82\" y=\"91\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">rollout to a reward</text>\n  <rect x=\"155\" y=\"70\" width=\"125\" height=\"26\" rx=\"4\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"217\" y=\"81\" fill=\"#fde68a\" text-anchor=\"middle\">4 BACKPROPAGATE</text><text x=\"217\" y=\"91\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"6\">visits += 1, reward added</text>\n  <text x=\"150\" y=\"122\" fill=\"#fde68a\" text-anchor=\"middle\">UCT = Q + c * sqrt( ln N(parent) / N(child) )</text>\n  <text x=\"150\" y=\"138\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">Q = what has worked, the bonus = what is under-explored</text>\n  <text x=\"150\" y=\"156\" fill=\"#fecaca\" text-anchor=\"middle\" font-size=\"6\">MCTS backpropagation updates search statistics</text>\n  <text x=\"150\" y=\"168\" fill=\"#fecaca\" text-anchor=\"middle\" font-size=\"6\">it is not gradient backpropagation: no weights change</text>\n</svg>",
    "captionEn": "Select, expand, simulate, backpropagate, and the UCT rule that balances known quality against uncertainty.",
    "captionKn": "Select, expand, simulate, backpropagate, ಮತ್ತು ತಿಳಿದ ಗುಣಮಟ್ಟ ಹಾಗೂ ಅನಿಶ್ಚಿತತೆಯನ್ನು ಸಮತೋಲನಗೊಳಿಸುವ UCT ನಿಯಮ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Visits, Reward and Q",
    "headingKn": "Visits, Reward ಮತ್ತು Q",
    "bodyEn": "Each MCTSNode stores its parent, children, visits and total_reward. Q is total_reward divided by visits: the average rollout reward, an empirical estimate and not the truth. A node with Q = 0.95 from one visit has little evidence; a node with Q = 0.90 from 100 visits has a lot. UCT reasons about that difference: UCT = Q + c * sqrt(ln N(parent) / N(child)). The first term is exploitation (what has worked), the second is an exploration bonus that shrinks as a child is visited. An unvisited child gets infinity so that every child is tried once.",
    "bodyKn": "ಪ್ರತಿ MCTSNode ತನ್ನ parent, children, visits ಮತ್ತು total_reward ಸಂಗ್ರಹಿಸುತ್ತದೆ. Q ಎಂದರೆ total_reward ಅನ್ನು visits ನಿಂದ ಭಾಗಿಸಿದ್ದು: ಸರಾಸರಿ rollout reward, ಅನುಭವಜನ್ಯ ಅಂದಾಜು, ಸತ್ಯವಲ್ಲ. ಒಂದು visit ನಿಂದ Q = 0.95 ಇರುವ ನೋಡ್‌ಗೆ ಕಡಿಮೆ ಸಾಕ್ಷ್ಯ; 100 visits ನಿಂದ Q = 0.90 ಇರುವುದಕ್ಕೆ ಹೆಚ್ಚು. UCT ಆ ವ್ಯತ್ಯಾಸದ ಬಗ್ಗೆ ತರ್ಕಿಸುತ್ತದೆ: UCT = Q + c * sqrt(ln N(parent) / N(child)). ಮೊದಲ ಪದ exploitation (ಏನು ಕೆಲಸ ಮಾಡಿದೆ), ಎರಡನೆಯದು ಮಗು visit ಆದಂತೆ ಕುಗ್ಗುವ exploration ಬೋನಸ್. Visit ಆಗದ ಮಗುವಿಗೆ ಅನಂತ ಸಿಗುತ್ತದೆ, ಹಾಗಾಗಿ ಪ್ರತಿ ಮಗು ಒಮ್ಮೆ ಪ್ರಯತ್ನಿಸಲ್ಪಡುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Search",
    "textKn": "ಹುಡುಕಾಟ ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "tot_2.py",
    "headingEn": "MCTSNode, UCT, select, expand, simulate, backpropagate",
    "headingKn": "MCTSNode, UCT, select, expand, simulate, backpropagate",
    "descEn": "select walks from the root by the highest UCT until it reaches a leaf. expand creates the three children once and reuses them on revisits. simulate rolls forward greedily for three steps and converts the final value into a reward. backpropagate walks up the parent pointers adding one visit and the reward to every ancestor. This is not gradient backpropagation.",
    "descKn": "select ಮೂಲದಿಂದ ಅತಿ ಹೆಚ್ಚು UCT ಪ್ರಕಾರ ಎಲೆ ತಲುಪುವವರೆಗೆ ನಡೆಯುತ್ತದೆ. expand ಮೂರು ಮಕ್ಕಳನ್ನು ಒಮ್ಮೆ ರಚಿಸಿ ಮರುಭೇಟಿಗಳಲ್ಲಿ ಮರುಬಳಸುತ್ತದೆ. simulate ಮೂರು ಹಂತ greedy ಆಗಿ ಮುಂದೆ ಉರುಳಿ ಅಂತಿಮ ಮೌಲ್ಯವನ್ನು reward ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ. backpropagate parent ಸೂಚಕಗಳ ಮೇಲೆ ಏರುತ್ತಾ ಪ್ರತಿ ಪೂರ್ವಜರಿಗೆ ಒಂದು visit ಮತ್ತು reward ಸೇರಿಸುತ್ತದೆ. ಇದು gradient backpropagation ಅಲ್ಲ.",
    "code": "TARGET = 24\nMAX_TREE_DEPTH = 4\nROLLOUT_STEPS = 3\nEXPLORATION_CONSTANT = 1.4\n\n\n@dataclass\nclass MCTSNode:\n    expression: str\n    value: int\n    parent: Optional[\"MCTSNode\"] = None\n    children: List[\"MCTSNode\"] = field(default_factory=list)\n    visits: int = 0\n    total_reward: float = 0.0\n    depth: int = 0\n\n    @property\n    def q_value(self) -> float:\n        return 0.0 if self.visits == 0 else self.total_reward / self.visits\n\n\ndef symbolic_score(value: int) -> float:\n    return 1 / (1 + abs(TARGET - value))\n\n\ndef is_terminal(node: MCTSNode) -> bool:\n    return node.value == TARGET or node.depth >= MAX_TREE_DEPTH\n\n\ndef uct_score(parent, child, c=EXPLORATION_CONSTANT) -> float:\n    if child.visits == 0:\n        return float(\"inf\")\n    exploitation = child.total_reward / child.visits\n    exploration = c * math.sqrt(math.log(max(parent.visits, 1)) / child.visits)\n    return exploitation + exploration\n\n\ndef select(root, c=EXPLORATION_CONSTANT):\n    current = root\n    while current.children and not is_terminal(current):\n        current = max(current.children, key=lambda ch: uct_score(current, ch, c))\n    return current\n\n\ndef expand(node):\n    if is_terminal(node):\n        return []\n    if node.children:\n        return node.children\n    d = node.depth + 1\n    node.children = [\n        MCTSNode(f\"({node.expression} + 4)\", node.value + 4, node, depth=d),\n        MCTSNode(f\"({node.expression} * 2)\", node.value * 2, node, depth=d),\n        MCTSNode(f\"({node.expression} - 1)\", node.value - 1, node, depth=d),\n    ]\n    return node.children\n\n\ndef choose_rollout_action(value, expression):\n    candidates = [(value + 4, f\"({expression} + 4)\"), (value * 2, f\"({expression} * 2)\"), (value - 1, f\"({expression} - 1)\")]\n    return max(candidates, key=lambda item: symbolic_score(item[0]))\n\n\ndef simulate(node, rollout_steps=ROLLOUT_STEPS, reward_fn=None):\n    reward_fn = reward_fn or symbolic_score\n    value, expression = node.value, node.expression\n    for _ in range(rollout_steps):\n        if value == TARGET:\n            break\n        value, expression = choose_rollout_action(value, expression)\n    return reward_fn(value), value, expression\n\n\ndef backpropagate(node, reward):\n    current = node\n    while current is not None:\n        current.visits += 1\n        current.total_reward += reward\n        current = current.parent\n\n\ndef reflect(final_value: int) -> str:\n    if final_value == TARGET:\n        return \"Success: the rollout reached the target exactly.\"\n    if final_value > TARGET:\n        return \"Failure: the rollout overshot the target. Future rollouts should avoid aggressive multiplication near 24.\"\n    return \"Failure: the rollout ended below the target. Future rollouts should look for operations that increase the value efficiently.\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "tot_2.py",
    "headingEn": "The LATS loop and six experiments",
    "headingKn": "LATS loop ಮತ್ತು ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "lats() runs the four phases per iteration and adds the Reflexion-style note. The reward function is injectable so that a bad reward can be tested separately from the rollout policy. main() recomputes the lesson's UCT numbers, traces eight iterations, sweeps the exploration constant, tries start 3, and swaps in a bad reward.",
    "descKn": "lats() ಪ್ರತಿ ಪುನರಾವರ್ತನೆಗೆ ನಾಲ್ಕು ಹಂತಗಳನ್ನು ಚಲಾಯಿಸಿ Reflexion-ಶೈಲಿ ಟಿಪ್ಪಣಿ ಸೇರಿಸುತ್ತದೆ. ಕೆಟ್ಟ reward ಅನ್ನು rollout policy ಯಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿ ಪರೀಕ್ಷಿಸಲು reward ಫಂಕ್ಷನ್ ಒಳಸೇರಿಸಬಹುದು. main() ಪಾಠದ UCT ಸಂಖ್ಯೆಗಳನ್ನು ಮರುಲೆಕ್ಕಿಸುತ್ತದೆ, ಎಂಟು ಪುನರಾವರ್ತನೆ trace ಮಾಡುತ್ತದೆ, exploration ಸ್ಥಿರಾಂಕ sweep ಮಾಡುತ್ತದೆ, ಆರಂಭ 3 ಪ್ರಯತ್ನಿಸುತ್ತದೆ, ಮತ್ತು ಕೆಟ್ಟ reward ಹಾಕುತ್ತದೆ.",
    "code": "def lats(start=5, iterations=8, c=EXPLORATION_CONSTANT, verbose=False, reward_fn=None):\n    root = MCTSNode(str(start), start)\n    expand(root)\n    first_hit = None\n    for it in range(1, iterations + 1):\n        selected = select(root, c)\n        pre_visits, pre_q = selected.visits, selected.q_value\n        children = expand(selected)\n        rollout_node = next((ch for ch in children if ch.visits == 0), children[0]) if children else selected\n        reward, final_value, final_expr = simulate(rollout_node, reward_fn=reward_fn)\n        backpropagate(rollout_node, reward)\n        if final_value == TARGET and first_hit is None:\n            first_hit = it\n        if verbose:\n            print(f\"\\nITERATION {it}\")\n            print(f\"  SELECT      {selected.expression} (value {selected.value}, visits {pre_visits}, Q {pre_q:.3f}, depth {selected.depth})\")\n            print(\"  EXPAND      \" + \", \".join(f\"{ch.value}\" for ch in children))\n            print(f\"  SIMULATE    from {rollout_node.expression} => {final_value}  reward {reward:.3f}\")\n            print(f\"  REFLECT     {reflect(final_value)}\")\n            print(\"  ROOT CHILDREN  \" + \" | \".join(\n                f\"{ch.value}: N={ch.visits} Q={ch.q_value:.3f}\" for ch in root.children))\n    return root, first_hit\n\n\ndef section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. The lesson's worked UCT numbers, recomputed\")\n    parent = MCTSNode(\"p\", 0, visits=100)\n    a = MCTSNode(\"a\", 0, parent, visits=10, total_reward=7.0)    # Q = 0.70\n    b = MCTSNode(\"b\", 0, parent, visits=80, total_reward=64.0)   # Q = 0.80\n    c_unvisited = MCTSNode(\"c\", 0, parent)\n    print(f\"child A  Q=0.70 visits=10 -> UCT {uct_score(parent, a):.3f}  (lesson: ~1.651)\")\n    print(f\"child B  Q=0.80 visits=80 -> UCT {uct_score(parent, b):.3f}  (lesson: ~1.136)\")\n    print(f\"unvisited child          -> UCT {uct_score(parent, c_unvisited)}\")\n    print(\"pure exploitation would pick B; UCT picks\", \"A\" if uct_score(parent, a) > uct_score(parent, b) else \"B\")\n\n    section(\"2. Eight MCTS iterations from start 5\")\n    root, first = lats(verbose=True)\n    print(\"\\nfirst iteration whose rollout reached 24:\", first)\n\n    section(\"3. Final root statistics\")\n    for ch in sorted(root.children, key=lambda n: -n.visits):\n        print(f\"{ch.expression:<8} value={ch.value:<3} visits={ch.visits} total_reward={ch.total_reward:.3f} Q={ch.q_value:.3f}\")\n    print(\"root visits:\", root.visits, \"= sum of child visits:\", sum(ch.visits for ch in root.children))\n    best = max(root.children, key=lambda n: n.visits)\n    print(\"most-visited root action:\", best.expression)\n\n    section(\"4. Exploration constant c (start 5, 8 iterations)\")\n    print(f\"{'c':>5}  {'root-child visits (9, 10, 4)':<30} first hit of 24\")\n    for cval in (0.0, 0.5, 1.4, 3.0):\n        r, fh = lats(c=cval)\n        print(f\"{cval:>5}  {str([ch.visits for ch in r.children]):<30} {fh}\")\n\n    section(\"5. Start 3, where greedy beam search failed in the previous lesson part\")\n    r, fh = lats(start=3, iterations=12)\n    print(\"root children (value: visits, Q):\", [(ch.value, ch.visits, round(ch.q_value, 3)) for ch in r.children])\n    print(\"first iteration that reached 24:\", fh)\n\n    section(\"6. Rollouts still use the distance policy, but the REWARD is value/100\")\n    bad_reward = lambda v: min(v, 100) / 100\n    r, fh = lats(start=5, iterations=12, reward_fn=bad_reward)\n    print(\"root children (value: visits, Q):\", [(ch.value, ch.visits, round(ch.q_value, 3)) for ch in r.children])\n    print(\"rollouts that reached exactly 24:\", fh, \"(first iteration)\")\n    good, _ = lats(start=5, iterations=12)\n    print(\"with the distance reward:        \", [(ch.value, ch.visits, round(ch.q_value, 3)) for ch in good.children])\n    print(\"a rollout that hits 24 earns only 0.24 under the bad reward, while a rollout that overshoots to 40 earns 0.40\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. The lesson's worked UCT numbers, recomputed ---\nchild A  Q=0.70 visits=10 -> UCT 1.650  (lesson: ~1.651)\nchild B  Q=0.80 visits=80 -> UCT 1.136  (lesson: ~1.136)\nunvisited child          -> UCT inf\npure exploitation would pick B; UCT picks A\n\n--- 2. Eight MCTS iterations from start 5 ---\n\nITERATION 1\n  SELECT      (5 + 4) (value 9, visits 0, Q 0.000, depth 1)\n  EXPAND      13, 18, 8\n  SIMULATE    from ((5 + 4) + 4) => 24  reward 1.000\n  REFLECT     Success: the rollout reached the target exactly.\n  ROOT CHILDREN  9: N=1 Q=1.000 | 10: N=0 Q=0.000 | 4: N=0 Q=0.000\n\nITERATION 2\n  SELECT      (5 * 2) (value 10, visits 0, Q 0.000, depth 1)\n  EXPAND      14, 20, 9\n  SIMULATE    from ((5 * 2) + 4) => 26  reward 0.333\n  REFLECT     Failure: the rollout overshot the target. Future rollouts should avoid aggressive multiplication near 24.\n  ROOT CHILDREN  9: N=1 Q=1.000 | 10: N=1 Q=0.333 | 4: N=0 Q=0.000\n\nITERATION 3\n  SELECT      (5 - 1) (value 4, visits 0, Q 0.000, depth 1)\n  EXPAND      8, 8, 3\n  SIMULATE    from ((5 - 1) + 4) => 24  reward 1.000\n  REFLECT     Success: the rollout reached the target exactly.\n  ROOT CHILDREN  9: N=1 Q=1.000 | 10: N=1 Q=0.333 | 4: N=1 Q=1.000\n\nITERATION 4\n  SELECT      ((5 + 4) * 2) (value 18, visits 0, Q 0.000, depth 2)\n  EXPAND      22, 36, 17\n  SIMULATE    from (((5 + 4) * 2) + 4) => 24  reward 1.000\n  REFLECT     Success: the rollout reached the target exactly.\n  ROOT CHILDREN  9: N=2 Q=1.000 | 10: N=1 Q=0.333 | 4: N=1 Q=1.000\n\nITERATION 5\n  SELECT      ((5 - 1) * 2) (value 8, visits 0, Q 0.000, depth 2)\n  EXPAND      12, 16, 7\n  SIMULATE    from (((5 - 1) * 2) + 4) => 24  reward 1.000\n  REFLECT     Success: the rollout reached the target exactly.\n  ROOT CHILDREN  9: N=2 Q=1.000 | 10: N=1 Q=0.333 | 4: N=2 Q=1.000\n\nITERATION 6\n  SELECT      ((5 + 4) - 1) (value 8, visits 0, Q 0.000, depth 2)\n  EXPAND      12, 16, 7\n  SIMULATE    from (((5 + 4) - 1) + 4) => 24  reward 1.000\n  REFLECT     Success: the rollout reached the target exactly.\n  ROOT CHILDREN  9: N=3 Q=1.000 | 10: N=1 Q=0.333 | 4: N=2 Q=1.000\n\nITERATION 7\n  SELECT      ((5 - 1) - 1) (value 3, visits 0, Q 0.000, depth 2)\n  EXPAND      7, 6, 2\n  SIMULATE    from (((5 - 1) - 1) + 4) => 27  reward 0.250\n  REFLECT     Failure: the rollout overshot the target. Future rollouts should avoid aggressive multiplication near 24.\n  ROOT CHILDREN  9: N=3 Q=1.000 | 10: N=1 Q=0.333 | 4: N=3 Q=0.750\n\nITERATION 8\n  SELECT      ((5 * 2) * 2) (value 20, visits 0, Q 0.000, depth 2)\n  EXPAND      24, 40, 19\n  SIMULATE    from (((5 * 2) * 2) + 4) => 24  reward 1.000\n  REFLECT     Success: the rollout reached the target exactly.\n  ROOT CHILDREN  9: N=3 Q=1.000 | 10: N=2 Q=0.667 | 4: N=3 Q=0.750\n\nfirst iteration whose rollout reached 24: 1\n\n--- 3. Final root statistics ---\n(5 + 4)  value=9   visits=3 total_reward=3.000 Q=1.000\n(5 - 1)  value=4   visits=3 total_reward=2.250 Q=0.750\n(5 * 2)  value=10  visits=2 total_reward=1.333 Q=0.667\nroot visits: 8 = sum of child visits: 8\nmost-visited root action: (5 + 4)\n\n--- 4. Exploration constant c (start 5, 8 iterations) ---\n    c  root-child visits (9, 10, 4)   first hit of 24\n  0.0  [5, 1, 2]                      1\n  0.5  [4, 1, 3]                      1\n  1.4  [3, 2, 3]                      1\n  3.0  [3, 2, 3]                      1\n\n--- 5. Start 3, where greedy beam search failed in the previous lesson part ---\nroot children (value: visits, Q): [(7, 3, 0.667), (6, 4, 0.667), (2, 5, 1.0)]\nfirst iteration that reached 24: 2\n\n--- 6. Rollouts still use the distance policy, but the REWARD is value/100 ---\nroot children (value: visits, Q): [(9, 4, 0.24), (10, 4, 0.247), (4, 4, 0.247)]\nrollouts that reached exactly 24: 1 (first iteration)\nwith the distance reward:         [(9, 5, 0.814), (10, 4, 0.597), (4, 3, 0.75)]\na rollout that hits 24 earns only 0.24 under the bad reward, while a rollout that overshoots to 40 earns 0.40"
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
    "headingEn": "The UCT Arithmetic Checks Out",
    "headingKn": "UCT ಅಂಕಗಣಿತ ಸರಿಯಾಗಿದೆ",
    "bodyEn": "Section 1 recomputes the lesson's example. A child with Q = 0.70 and 10 visits under a parent with 100 visits scores 1.650 (the lesson rounds to 1.651), and a child with Q = 0.80 and 80 visits scores 1.136. Pure exploitation would pick the higher Q, but UCT picks the under-explored child. An unvisited child scores infinity. Selection is therefore structured uncertainty, not randomness.",
    "bodyKn": "ವಿಭಾಗ 1 ಪಾಠದ ಉದಾಹರಣೆ ಮರುಲೆಕ್ಕಿಸುತ್ತದೆ. 100 visits ಇರುವ parent ಅಡಿಯಲ್ಲಿ Q = 0.70 ಮತ್ತು 10 visits ಇರುವ ಮಗುವಿಗೆ 1.650 ಅಂಕ (ಪಾಠ 1.651 ಗೆ ಸುತ್ತುತ್ತದೆ), ಮತ್ತು Q = 0.80 ಹಾಗೂ 80 visits ಇರುವ ಮಗುವಿಗೆ 1.136. ಶುದ್ಧ exploitation ಹೆಚ್ಚಿನ Q ಆರಿಸುತ್ತಿತ್ತು, ಆದರೆ UCT ಕಡಿಮೆ-ಅನ್ವೇಷಿತ ಮಗುವನ್ನು ಆರಿಸುತ್ತದೆ. Visit ಆಗದ ಮಗುವಿಗೆ ಅನಂತ ಅಂಕ. ಆದ್ದರಿಂದ ಆಯ್ಕೆ ರಚನಾತ್ಮಕ ಅನಿಶ್ಚಿತತೆ, ಯಾದೃಚ್ಛಿಕತೆ ಅಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Reading an Iteration Trace",
    "headingKn": "ಪುನರಾವರ್ತನೆ Trace ಓದುವುದು",
    "bodyEn": "In iteration 1 every root child is unvisited, so UCT is infinity for all and the first (value 9) is chosen. It is expanded into 13, 18 and 8, a rollout from 13 reaches 24 and earns reward 1.000, and the reward is added to node 9 and to the root. Iteration 2 selects the next unvisited child (10), whose rollout overshoots to 26 and earns only 0.333, so its Q is 0.333. Iteration 3 visits the third child (4). From iteration 4 on, UCT compares Q plus the bonus: the root's statistics after 8 iterations are 9: N=3, Q=1.000; 4: N=3, Q=0.750; 10: N=2, Q=0.667, and the root has 8 visits, equal to the sum of its children.",
    "bodyKn": "ಪುನರಾವರ್ತನೆ 1 ರಲ್ಲಿ ಪ್ರತಿ ಮೂಲ ಮಗು visit ಆಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಎಲ್ಲರಿಗೂ UCT ಅನಂತ ಮತ್ತು ಮೊದಲನೆಯದು (ಮೌಲ್ಯ 9) ಆಯ್ಕೆಯಾಗುತ್ತದೆ. ಅದು 13, 18 ಮತ್ತು 8 ಆಗಿ ವಿಸ್ತರಿಸಲ್ಪಡುತ್ತದೆ, 13 ರಿಂದ rollout 24 ತಲುಪಿ reward 1.000 ಗಳಿಸುತ್ತದೆ, ಮತ್ತು reward ನೋಡ್ 9 ಹಾಗೂ ಮೂಲಕ್ಕೆ ಸೇರುತ್ತದೆ. ಪುನರಾವರ್ತನೆ 2 ಮುಂದಿನ visit ಆಗದ ಮಗು (10) ಆರಿಸುತ್ತದೆ, ಅದರ rollout 26 ಕ್ಕೆ ಮೀರಿ ಕೇವಲ 0.333 ಗಳಿಸುತ್ತದೆ, ಹಾಗಾಗಿ ಅದರ Q 0.333. ಪುನರಾವರ್ತನೆ 3 ಮೂರನೇ ಮಗು (4) visit ಮಾಡುತ್ತದೆ. ಪುನರಾವರ್ತನೆ 4 ರಿಂದ UCT Q ಜೊತೆ ಬೋನಸ್ ಹೋಲಿಸುತ್ತದೆ: 8 ಪುನರಾವರ್ತನೆಗಳ ನಂತರ ಮೂಲದ ಅಂಕಿಅಂಶ 9: N=3, Q=1.000; 4: N=3, Q=0.750; 10: N=2, Q=0.667, ಮತ್ತು ಮೂಲಕ್ಕೆ 8 visits, ಮಕ್ಕಳ ಮೊತ್ತಕ್ಕೆ ಸಮ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Rollout Does Most of the Work",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Rollout ಹೆಚ್ಚಿನ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
    "bodyEn": "Section 4 varies the exploration constant c over 0, 0.5, 1.4 and 3.0. The root-child visit counts change (with c = 0 the first child gets 5 visits, with c = 1.4 the split is 3, 2, 3), but the first rollout that reaches 24 happens at iteration 1 in every case. The greedy rollout policy chases 24 so effectively that almost any node leads to it, which leaves the tree statistics with little to discriminate. The tree still matters when rollouts are costly, noisy or genuinely uncertain; a strong rollout policy hides that in a toy.",
    "bodyKn": "ವಿಭಾಗ 4 exploration ಸ್ಥಿರಾಂಕ c ಅನ್ನು 0, 0.5, 1.4 ಮತ್ತು 3.0 ಗೆ ಬದಲಿಸುತ್ತದೆ. ಮೂಲ-ಮಗು visit ಸಂಖ್ಯೆಗಳು ಬದಲಾಗುತ್ತವೆ (c = 0 ರಲ್ಲಿ ಮೊದಲ ಮಗುವಿಗೆ 5 visits, c = 1.4 ರಲ್ಲಿ ವಿಭಜನೆ 3, 2, 3), ಆದರೆ 24 ತಲುಪುವ ಮೊದಲ rollout ಪ್ರತಿ ಸಂದರ್ಭದಲ್ಲೂ ಪುನರಾವರ್ತನೆ 1 ರಲ್ಲೇ ನಡೆಯುತ್ತದೆ. Greedy rollout policy 24 ಅನ್ನು ಎಷ್ಟು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಬೆನ್ನಟ್ಟುತ್ತದೆ ಎಂದರೆ ಬಹುತೇಕ ಯಾವ ನೋಡ್ ಕೂಡ ಅದಕ್ಕೆ ಕರೆದೊಯ್ಯುತ್ತದೆ, ಇದು ಮರದ ಅಂಕಿಅಂಶಗಳಿಗೆ ಭೇದಿಸಲು ಕಡಿಮೆ ಬಿಡುತ್ತದೆ. Rollouts ದುಬಾರಿ, ಗದ್ದಲದ ಅಥವಾ ನಿಜವಾಗಿ ಅನಿಶ್ಚಿತವಾದಾಗ ಮರ ಇನ್ನೂ ಮುಖ್ಯ; ಬಲವಾದ rollout policy ಅದನ್ನು toy ನಲ್ಲಿ ಮರೆಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Revisiting and Start 3",
    "headingKn": "ಮರುಭೇಟಿ ಮತ್ತು ಆರಂಭ 3",
    "bodyEn": "Section 5 runs start 3, the case where greedy beam search lost the winner. The most-visited root child is the one with value 2 (5 visits, Q = 1.000), then 6 (4 visits) and 7 (3 visits). MCTS never discards a branch for good: every child keeps being revisited according to UCT, so a branch that ranks second at the start still gets effort. The first rollout to reach 24 occurs at iteration 2.",
    "bodyKn": "ವಿಭಾಗ 5 ಆರಂಭ 3 ಚಲಾಯಿಸುತ್ತದೆ, greedy beam search ವಿಜೇತನನ್ನು ಕಳೆದುಕೊಂಡ ಪ್ರಕರಣ. ಅತಿ ಹೆಚ್ಚು visit ಆದ ಮೂಲ ಮಗು ಮೌಲ್ಯ 2 ರದ್ದು (5 visits, Q = 1.000), ನಂತರ 6 (4 visits) ಮತ್ತು 7 (3 visits). MCTS ಯಾವುದೇ ಶಾಖೆಯನ್ನು ಶಾಶ್ವತವಾಗಿ ಬಿಸಾಡುವುದಿಲ್ಲ: ಪ್ರತಿ ಮಗು UCT ಪ್ರಕಾರ ಮರುಭೇಟಿಯಾಗುತ್ತಲೇ ಇರುತ್ತದೆ, ಹಾಗಾಗಿ ಆರಂಭದಲ್ಲಿ ಎರಡನೇ ಸ್ಥಾನದ ಶಾಖೆಗೂ ಪ್ರಯತ್ನ ಸಿಗುತ್ತದೆ. 24 ತಲುಪುವ ಮೊದಲ rollout ಪುನರಾವರ್ತನೆ 2 ರಲ್ಲಿ ನಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Bad Reward Flattens the Tree",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕೆಟ್ಟ Reward ಮರವನ್ನು ಸಮತಟ್ಟಾಗಿಸುತ್ತದೆ",
    "bodyEn": "Section 6 keeps the rollout policy and changes only the reward to value / 100. Rollouts still reach 24, but a hit now earns only 0.24, and a rollout that overshoots to 40 would earn 0.40. The root children end with Q of 0.240, 0.247 and 0.247 and visits of 4, 4 and 4: the statistics cannot tell the branches apart, so the search spreads effort evenly. With the distance reward the visits are 5, 4 and 3 with Q of 0.814, 0.597 and 0.750. Search amplifies the reward signal, and a misaligned reward amplifies the wrong thing or, as here, amplifies nothing.",
    "bodyKn": "ವಿಭಾಗ 6 rollout policy ಉಳಿಸಿ reward ಅನ್ನು ಮಾತ್ರ value / 100 ಗೆ ಬದಲಿಸುತ್ತದೆ. Rollouts ಇನ್ನೂ 24 ತಲುಪುತ್ತವೆ, ಆದರೆ ಈಗ ಒಂದು ಹಿಟ್ ಕೇವಲ 0.24 ಗಳಿಸುತ್ತದೆ, ಮತ್ತು 40 ಕ್ಕೆ ಮೀರುವ rollout 0.40 ಗಳಿಸುತ್ತಿತ್ತು. ಮೂಲ ಮಕ್ಕಳು 0.240, 0.247 ಮತ್ತು 0.247 Q ಹಾಗೂ 4, 4 ಮತ್ತು 4 visits ನೊಂದಿಗೆ ಕೊನೆಗೊಳ್ಳುತ್ತವೆ: ಅಂಕಿಅಂಶಗಳು ಶಾಖೆಗಳನ್ನು ಬೇರ್ಪಡಿಸಲಾರವು, ಹಾಗಾಗಿ ಹುಡುಕಾಟ ಪ್ರಯತ್ನವನ್ನು ಸಮವಾಗಿ ಹರಡುತ್ತದೆ. ದೂರ reward ಜೊತೆ visits 5, 4 ಮತ್ತು 3, Q 0.814, 0.597 ಮತ್ತು 0.750. ಹುಡುಕಾಟ reward ಸಂಕೇತವನ್ನು ವರ್ಧಿಸುತ್ತದೆ, ಮತ್ತು ತಪ್ಪಾಗಿ ಹೊಂದಿಸಿದ reward ತಪ್ಪನ್ನು ವರ್ಧಿಸುತ್ತದೆ ಅಥವಾ ಇಲ್ಲಿಯಂತೆ ಏನನ್ನೂ ವರ್ಧಿಸುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Environment Feedback and Reflection",
    "headingKn": "ಪರಿಸರ ಪ್ರತಿಕ್ರಿಯೆ ಮತ್ತು Reflection",
    "bodyEn": "Real LATS values can combine model self-evaluation with environment rewards (tests passed, task completed), weighted towards the environment when it is objective. A scalar reward says a branch was bad; a reflection can say why (\"the rollout overshot by multiplying near 24\") and feed future proposals. Our reflect() prints that note but the toy policy does not condition on it, so reflection here is shown, not exploited. Reflection is LATS machinery around MCTS; the four canonical phases remain select, expand, simulate and backpropagate.",
    "bodyKn": "ನಿಜವಾದ LATS values ಮಾದರಿ ಸ್ವಯಂ-ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಪರಿಸರ rewards (tests ಪಾಸ್, ಕಾರ್ಯ ಪೂರ್ಣ) ಸಂಯೋಜಿಸಬಹುದು; ಅದು ವಸ್ತುನಿಷ್ಠವಾಗಿದ್ದಾಗ ಪರಿಸರದ ಕಡೆಗೆ ತೂಕ. Scalar reward ಶಾಖೆ ಕೆಟ್ಟದಾಗಿತ್ತು ಎನ್ನುತ್ತದೆ; reflection ಏಕೆ ಎಂದು ಹೇಳಬಲ್ಲದು (\"24 ರ ಹತ್ತಿರ ಗುಣಿಸಿ rollout ಮೀರಿತು\") ಮತ್ತು ಭವಿಷ್ಯದ ಪ್ರಸ್ತಾವನೆಗಳಿಗೆ ನೀಡಬಲ್ಲದು. ನಮ್ಮ reflect() ಆ ಟಿಪ್ಪಣಿ ಮುದ್ರಿಸುತ್ತದೆ ಆದರೆ toy policy ಅದರ ಮೇಲೆ ಆಧರಿಸುವುದಿಲ್ಲ, ಹಾಗಾಗಿ ಇಲ್ಲಿ reflection ತೋರಿಸಲಾಗಿದೆ, ಬಳಸಲಾಗಿಲ್ಲ. Reflection MCTS ಸುತ್ತಲಿನ LATS ಯಂತ್ರ; ನಾಲ್ಕು ಪ್ರಮಾಣಿತ ಹಂತಗಳು select, expand, simulate ಮತ್ತು backpropagate ಆಗಿ ಉಳಿಯುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Beam search versus MCTS",
    "headingKn": "Beam search ಮತ್ತು MCTS",
    "headers": [
     "Property",
     "Beam search",
     "MCTS / LATS"
    ],
    "rows": [
     [
      "Decision style",
      "Rank each level, keep top B, discard the rest",
      "Allocate one rollout at a time using UCT"
     ],
     [
      "Evidence per node",
      "One score",
      "Visits, total reward and Q"
     ],
     [
      "Revisiting",
      "Pruned branches are gone",
      "Any branch can be revisited"
     ],
     [
      "State kept",
      "The frontier",
      "A persistent tree with parent pointers"
     ],
     [
      "Cost shape",
      "beam x breadth x depth",
      "iterations x (select + expand + rollout + value)"
     ]
    ]
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "MCTS spends a fixed budget where evidence says it is most useful, and the tree is a record of what was tried and how it scored. With a reliable verifier, search turns inference compute into accuracy on hard tasks without any training.",
    "bodyKn": "MCTS ಸಾಕ್ಷ್ಯ ಅತ್ಯಂತ ಉಪಯುಕ್ತ ಎನ್ನುವಲ್ಲಿ ನಿಗದಿತ budget ವ್ಯಯಿಸುತ್ತದೆ, ಮತ್ತು ಮರ ಏನು ಪ್ರಯತ್ನಿಸಲಾಯಿತು ಮತ್ತು ಹೇಗೆ ಅಂಕ ಬಂತು ಎಂಬುದರ ದಾಖಲೆ. ವಿಶ್ವಾಸಾರ್ಹ verifier ಇದ್ದರೆ ಹುಡುಕಾಟ ತರಬೇತಿ ಇಲ್ಲದೆ ಕಠಿಣ ಕಾರ್ಯಗಳಲ್ಲಿ ನಿರ್ಧಾರ-ಸಮಯದ ಲೆಕ್ಕಾಚಾರವನ್ನು ನಿಖರತೆಯಾಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Where This Appears in AI Systems",
    "headingKn": "AI ವ್ಯವಸ್ಥೆಗಳಲ್ಲಿ ಇದು ಎಲ್ಲಿ ಕಾಣುತ್ತದೆ",
    "bodyEn": "Game-playing systems use MCTS directly. Language-agent variants search over code patches scored by tests, over web-navigation action sequences scored by task success, and over research paths scored by evidence. Most production agents do not run full LATS on every request because of cost and latency.",
    "bodyKn": "ಆಟ-ಆಡುವ ವ್ಯವಸ್ಥೆಗಳು MCTS ಅನ್ನು ನೇರವಾಗಿ ಬಳಸುತ್ತವೆ. ಭಾಷಾ-agent ರೂಪಾಂತರಗಳು tests ಅಂಕ ನೀಡುವ ಕೋಡ್ patches ಮೇಲೆ, ಕಾರ್ಯ ಯಶಸ್ಸು ಅಂಕ ನೀಡುವ ವೆಬ್-ನ್ಯಾವಿಗೇಷನ್ action ಅನುಕ್ರಮಗಳ ಮೇಲೆ, ಮತ್ತು ಸಾಕ್ಷ್ಯ ಅಂಕ ನೀಡುವ ಸಂಶೋಧನಾ ಮಾರ್ಗಗಳ ಮೇಲೆ ಹುಡುಕುತ್ತವೆ. ವೆಚ್ಚ ಮತ್ತು ವಿಳಂಬದಿಂದ ಬಹುತೇಕ production agents ಪ್ರತಿ ವಿನಂತಿಗೆ ಪೂರ್ಣ LATS ಚಲಾಯಿಸುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"MCTS backpropagation is the same as neural-network backpropagation.\" It propagates rollout statistics up the ancestor path; no gradients and no weight updates. Another: \"exploration means random.\" UCT gives a structured bonus that shrinks with visits.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"MCTS backpropagation ನರ ಜಾಲದ backpropagation ಗೆ ಸಮ.\" ಅದು rollout ಅಂಕಿಅಂಶಗಳನ್ನು ಪೂರ್ವಜ ಮಾರ್ಗದ ಮೇಲೆ ಹರಡುತ್ತದೆ; gradients ಇಲ್ಲ, weight ನವೀಕರಣವಿಲ್ಲ. ಇನ್ನೊಂದು: \"exploration ಎಂದರೆ ಯಾದೃಚ್ಛಿಕ.\" UCT visits ಜೊತೆ ಕುಗ್ಗುವ ರಚನಾತ್ಮಕ ಬೋನಸ್ ನೀಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "LATS: Language Agent Tree Search. MCTS: Monte Carlo Tree Search. UCT: upper confidence bound for trees. Rollout: a continuation from a node to estimate its worth. Reward: the outcome of a rollout. Q: average reward. Exploitation: favour what has worked. Exploration: favour what is under-explored. Backpropagation (MCTS): updating statistics along the ancestor path.",
    "bodyKn": "LATS: Language Agent Tree Search. MCTS: Monte Carlo Tree Search. UCT: ಮರಗಳಿಗೆ upper confidence bound. Rollout: ನೋಡ್‌ನ ಮೌಲ್ಯ ಅಂದಾಜಿಸಲು ಅದರಿಂದ ಮುಂದುವರಿಕೆ. Reward: rollout ನ ಫಲಿತಾಂಶ. Q: ಸರಾಸರಿ reward. Exploitation: ಕೆಲಸ ಮಾಡಿದ್ದಕ್ಕೆ ಪ್ರಾಶಸ್ತ್ಯ. Exploration: ಕಡಿಮೆ-ಅನ್ವೇಷಿತಕ್ಕೆ ಪ್ರಾಶಸ್ತ್ಯ. Backpropagation (MCTS): ಪೂರ್ವಜ ಮಾರ್ಗದಲ್ಲಿ ಅಂಕಿಅಂಶ ನವೀಕರಿಸುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) MCTS keeps one persistent tree and allocates one rollout at a time. 2) UCT = Q + exploration bonus; unvisited children are tried first. 3) Backpropagation updates every ancestor, and root visits equal the sum of child visits. 4) With a strong greedy rollout, the exploration constant did not change the first hit. 5) A misaligned reward flattened the statistics to 4, 4, 4. 6) Reflection adds language lessons, but our toy policy only displays them. Part 3 compares ToT and LATS on cost and decides when to search.",
    "bodyKn": "1) MCTS ಒಂದು ಶಾಶ್ವತ ಮರ ಇಟ್ಟುಕೊಂಡು ಒಮ್ಮೆಗೆ ಒಂದು rollout ಹಂಚುತ್ತದೆ. 2) UCT = Q + exploration ಬೋನಸ್; visit ಆಗದ ಮಕ್ಕಳನ್ನು ಮೊದಲು ಪ್ರಯತ್ನಿಸಲಾಗುತ್ತದೆ. 3) Backpropagation ಪ್ರತಿ ಪೂರ್ವಜರನ್ನು ನವೀಕರಿಸುತ್ತದೆ, ಮತ್ತು ಮೂಲ visits ಮಕ್ಕಳ visits ಮೊತ್ತಕ್ಕೆ ಸಮ. 4) ಬಲವಾದ greedy rollout ಜೊತೆ exploration ಸ್ಥಿರಾಂಕ ಮೊದಲ ಹಿಟ್ ಬದಲಿಸಲಿಲ್ಲ. 5) ತಪ್ಪಾಗಿ ಹೊಂದಿಸಿದ reward ಅಂಕಿಅಂಶಗಳನ್ನು 4, 4, 4 ಗೆ ಸಮತಟ್ಟಾಗಿಸಿತು. 6) Reflection ಭಾಷಾ ಪಾಠಗಳನ್ನು ಸೇರಿಸುತ್ತದೆ, ಆದರೆ ನಮ್ಮ toy policy ಅವನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತದೆ ಮಾತ್ರ. ಭಾಗ 3 ToT ಮತ್ತು LATS ಅನ್ನು ವೆಚ್ಚದಲ್ಲಿ ಹೋಲಿಸಿ ಯಾವಾಗ ಹುಡುಕಬೇಕು ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which is NOT one of the roles of the LLM in LATS?",
      "qKn": "LATS ನಲ್ಲಿ LLM ನ ಪಾತ್ರಗಳಲ್ಲಿ ಯಾವುದು ಅಲ್ಲ?",
      "opts": [
       "Self-reflector that writes lessons on failure",
       "Optimizer that updates weights between rollouts",
       "Value function scoring partial trajectories",
       "Policy proposing next actions"
      ],
      "optsKn": [
       "ವೈಫಲ್ಯದಲ್ಲಿ ಪಾಠ ಬರೆಯುವ self-reflector",
       "Rollouts ನಡುವೆ weights ನವೀಕರಿಸುವ optimizer",
       "ಭಾಗಶಃ trajectories ಗೆ ಅಂಕ ನೀಡುವ value function",
       "ಮುಂದಿನ actions ಪ್ರಸ್ತಾಪಿಸುವ policy"
      ],
      "correct": 1
     },
     {
      "q": "What are the four MCTS phases?",
      "qKn": "ನಾಲ್ಕು MCTS ಹಂತಗಳು ಯಾವುವು?",
      "opts": [
       "Sample, Score, Sort, Submit",
       "Plan, Execute, Reflect, Stop",
       "Select, Expand, Simulate, Backpropagate",
       "Train, Validate, Test, Deploy"
      ],
      "optsKn": [
       "Sample, Score, Sort, Submit",
       "Plan, Execute, Reflect, Stop",
       "Select, Expand, Simulate, Backpropagate",
       "Train, Validate, Test, Deploy"
      ],
      "correct": 2
     },
     {
      "q": "In UCT, what does the constant c do?",
      "qKn": "UCT ನಲ್ಲಿ ಸ್ಥಿರಾಂಕ c ಏನು ಮಾಡುತ್ತದೆ?",
      "opts": [
       "Scales only Q",
       "Sets the maximum tree depth",
       "Sets the number of rollouts",
       "Weights exploration relative to exploitation"
      ],
      "optsKn": [
       "Q ಅನ್ನು ಮಾತ್ರ ಮಾಪನ ಮಾಡುತ್ತದೆ",
       "ಗರಿಷ್ಠ ಮರದ ಆಳ ನಿಗದಿಪಡಿಸುತ್ತದೆ",
       "Rollouts ಸಂಖ್ಯೆ ನಿಗದಿಪಡಿಸುತ್ತದೆ",
       "Exploitation ಗೆ ಹೋಲಿಸಿ exploration ಗೆ ತೂಕ ನೀಡುತ್ತದೆ"
      ],
      "correct": 3
     },
     {
      "q": "In this lesson's run with a reward of value / 100, what happened to the root children?",
      "qKn": "ಈ ಪಾಠದ value / 100 reward ಓಟದಲ್ಲಿ ಮೂಲ ಮಕ್ಕಳಿಗೆ ಏನಾಯಿತು?",
      "opts": [
       "One branch dominated with 12 visits",
       "Visits spread evenly (4, 4, 4) with nearly identical Q",
       "The search crashed",
       "Every rollout failed to reach 24"
      ],
      "optsKn": [
       "ಒಂದು ಶಾಖೆ 12 visits ನೊಂದಿಗೆ ಪ್ರಾಬಲ್ಯ ಪಡೆಯಿತು",
       "Visits ಸಮವಾಗಿ ಹರಡಿದವು (4, 4, 4), Q ಬಹುತೇಕ ಒಂದೇ",
       "ಹುಡುಕಾಟ crash ಆಯಿತು",
       "ಪ್ರತಿ rollout 24 ತಲುಪಲು ವಿಫಲವಾಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why can a branch with lower Q temporarily have a higher UCT?",
      "qKn": "ಕಡಿಮೆ Q ಇರುವ ಶಾಖೆಗೆ ತಾತ್ಕಾಲಿಕವಾಗಿ ಹೆಚ್ಚಿನ UCT ಏಕೆ ಇರಬಹುದು?",
      "opts": [
       "UCT ignores Q",
       "An under-explored branch receives a larger exploration bonus",
       "MCTS always picks the worst branch",
       "Backpropagation changes weights"
      ],
      "optsKn": [
       "UCT Q ಅನ್ನು ಕಡೆಗಣಿಸುತ್ತದೆ",
       "ಕಡಿಮೆ-ಅನ್ವೇಷಿತ ಶಾಖೆಗೆ ದೊಡ್ಡ exploration ಬೋನಸ್ ಸಿಗುತ್ತದೆ",
       "MCTS ಯಾವಾಗಲೂ ಅತ್ಯಂತ ಕೆಟ್ಟ ಶಾಖೆ ಆರಿಸುತ್ತದೆ",
       "Backpropagation weights ಬದಲಿಸುತ್ತದೆ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
